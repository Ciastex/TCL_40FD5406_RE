do
    local curlExist = pcall(require, 'curl')
    
    -- Enable log:
--  local _LOG = print
    -- Disable log:
    local _LOG = function() end

    -- String prefix for all connection identifiers related to GloboPlay
    local GP_CONN_PREFIX = 'GP_';

    -- Maps connection identifiers with respective context objects, containing 
    -- the following fields:
    --  * curl: curl object
    --  * aborting: boolean flag, if true, a 'disconnect' has been requested
    --    while data is still being transferred (asyncperform is ongoing).
    -- A 'finished' flag is not necessary here. For this wrapped TCP, we just
    -- assume a single 'data' event will be sent per each curl object, which
    -- can be closed (and removed from the connection map) right after the 
    -- response is received
    local connectionMap = {};
    
    -- BEGIN GLOBOPLAY BYPASS
    local testGloboPlayServerPort = function()
        _LOG('[testGloboPlayServerPort] IN')
    	--local value = settings.globoplay.serverPort
        local value = 18256
    	assert ( (type(value) == 'number' and  value > 0) or
    			 (type(value) == 'string' and #value > 0) )
        _LOG('[testGloboPlayServerPort] OUT')
    	return tonumber(value)
    end
    
    if not event then event = {} end
    
    local hasGP, gpPort = pcall(testGloboPlayServerPort)
    _LOG('[globoplayTCP.lua] hasGP = ' .. tostring(hasGP))
    _LOG('[globoplayTCP.lua] gpPort = ' .. tostring(gpPort))
    _LOG('[globoplayTCP.lua] curlExist = ' .. tostring(curlExist))
    if hasGP and curlExist then
        _LOG('wrapping IPC Ginga-GloboPlay')
        local oldPost = event.post
        local _connection_count = 0;

        local function getNewConnection(curl_obj)
            _connection_count = _connection_count + 1
            local conn_id = GP_CONN_PREFIX .. tostring(_connection_count)
            connectionMap[conn_id] = { curl = curl_obj }
            return conn_id
        end
        
        local function byPassConnect(evt)
            _LOG('[byPassConnect] IN')
            evt._curl = curl.new()
            local url = "http://" .. evt.host
            _LOG('[byPassConnect] url = ' .. url)
            evt._curl:setopt(curl.OPT_URL, url)
            evt._curl:setopt(curl.OPT_PORT, evt.port)
            evt._curl:setopt(curl.OPT_CONNECT_ONLY, true)
            if evt.timeout then
                _LOG('[byPassConnect] timeout = ' .. tostring(evt.timeout))
                evt._curl:setopt(curl.OPT_CONNECTTIMEOUT, evt.timeout)
            end

            evt._curl:asyncperform(
                function(ok, curl_err_msg, curl_err_code)
                    _LOG('[byPassConnect] callback@asyncPerform invoked')
                    _LOG('\t ok = ' .. tostring(ok))
                    _LOG('\t curl_err_msg = ' .. tostring(curl_err_msg))
                    _LOG('\t curl_err_code = ' .. tostring(curl_err_code))
                    _LOG('\t evt.connection = ' .. tostring(evt.connection))
                    if ok then
                        oldPost("in", { class = "tcp", 
                                        type = "connect", 
                                        host = evt.host, 
                                        port = evt.port, 
                                        connection = getNewConnection(evt._curl) })
                        -- let curl open for upcoming 'data' event with same connection identifier
                    else
                        evt._curl:close()
                        oldPost("in", { class = "tcp", 
                                        type = "connect", 
                                        host = evt.host, 
                                        port = evt.port, 
                                        error = curl_err_msg })
                    end
                end
            )
            return true
        end
        
        local function byPassData(evt)  
            _LOG('[byPassData] IN')
            local ctx = connectionMap[evt.connection]         
            if not ctx then
                _LOG('[byPassData] Using an invalid connection identifier (already disconnected?). Cannot post event.')
                return false
            end
            evt._curl = ctx.curl;
            local data = evt.value
            _LOG('[byPassData] data = <<' .. tostring(data) .. '>>')            
            local s,e = data:find(" ")
        	local method = data:sub(1,s-1)
            _LOG('[byPassData] method = <<' .. tostring(method) .. '>>')
            local ros = data:sub(e+1) -- rest of string
            _LOG('[byPassData] ros = <<' .. tostring(ros) .. '>>')
        	s,e = ros:find(" ")
            local url = ros:sub(1, s)
            _LOG('[byPassData] url = ' .. tostring(url))            
            evt._header = ""
            evt._body = ""            
            evt._curl:setopt(curl.OPT_URL, url)
            evt._curl:setopt(curl.OPT_PORT, gpPort)
            evt._curl:setopt(curl.OPT_CONNECT_ONLY, false)
            if (method == 'POST') then
                evt._curl:setopt(curl.OPT_POST, true)
            end
            evt._curl:setopt(curl.OPT_HEADERFUNCTION, function(stream,buffer)
                if ctx.aborting then
                    _LOG('[byPassData] abort data transfer from HEADERFUNCTION');
                    return 0;
                end
                evt._header = evt._header .. buffer 
        		return string.len(buffer)
        	end)
           	evt._curl:setopt(curl.OPT_WRITEFUNCTION, function(stream,buffer)
                if ctx.aborting then
                    _LOG('[byPassData] abort data transfer from WRITEFUNCTION');
                    return 0;
                end
                evt._body = evt._body .. buffer 
        		return string.len(buffer)
            end)
            if evt.timeout then
                _LOG('[byPassData] timeout = ' .. tostring(evt.timeout))
                evt._curl:setopt(curl.OPT_TIMEOUT, evt.timeout)
            end
            evt._curl:asyncperform(
                function(ok, curl_err_msg, curl_err_code)
                    _LOG('[byPassData] callback@asyncPerform invoked')
                    _LOG('\t ok = ' .. tostring(ok))
                    _LOG('\t curl_err_msg = ' .. tostring(curl_err_msg))
                    _LOG('\t curl_err_code = ' .. tostring(curl_err_code))
                    _LOG('\t evt.connection = ' .. tostring(evt.connection))
                    evt._curl:close()
                    connectionMap[evt.connection] = nil;
                    if ok then
                        oldPost("in", { class = "tcp", type = "data", connection = evt.connection, value = evt._header .. "\n\n" .. evt._body })
                    else
                        oldPost("in", { class = "tcp", type = "data", connection = evt.connection, error = curl_err_msg })
                    end
                end
            )
            _LOG('[byPassData] OUT')
            return true
        end
        
        local function byPassDisconnect(evt) 
            _LOG('[byPassDisconnect] IN')
            local ctx = connectionMap[evt.connection];
            if ctx then
                _LOG('[byPassDisconnect] aborting ongoing data transfer')
                ctx.aborting = true;
                connectionMap[evt.connection] = nil;
            end
            _LOG('[byPassDisconnect] OUT')
            return true
        end
       
        local bypassers={}
        bypassers['connect'] = byPassConnect
        bypassers['data'] = byPassData
        bypassers['disconnect'] = byPassDisconnect
        
        local function isGloboPlayEvent(evt)
            _LOG("isGloboPlayEvent? type: " .. tostring(evt.type) .. "<" .. type(evt.type) .. ">")
            _LOG("isGloboPlayEvent? host: " .. tostring(evt.host) .. "<" .. type(evt.host) .. ">")
            _LOG("isGloboPlayEvent? port: " .. tostring(evt.port) .. "<" .. type(evt.port) .. ">")
            _LOG("isGloboPlayEvent? connection: " .. tostring(evt.connection) .. "<" .. type(evt.connection) .. ">")
            _LOG("gpPort: " .. tostring(gpPort) .. "<" .. type(gpPort) .. ">")
            if evt.type == "connect" then
                return (evt.host == "127.0.0.1" and tonumber(evt.port) == gpPort)
            else
                return (type(evt.connection) == "string" and evt.connection:find(GP_CONN_PREFIX))
            end
        end        
        
        event.post = function(arg1, arg2)
            _LOG("WRAPPED EVENT: arg1 = " .. tostring(arg1))
            _LOG("WRAPPED EVENT: arg2 = " .. tostring(arg2))
            -- VARIABLE ARGUMENTS
            local dst, evt
            if arg2 then
                dst = arg1
                evt = arg2
            else
                dst = "out"
                evt = arg1
            end
            if dst == "out" and evt.class == "tcp" then         
                _LOG("BYPASSED TCP EVENT POST! type = " .. evt.type)
                if isGloboPlayEvent(evt) then
                    _LOG('[wrapped event.post] is a GloboPlay Event')
                    local bypasser = bypassers[evt.type]
                    if bypasser then
                        return bypasser(evt)
                    end
                else 
                    _LOG('[wrapped event.post] is not GloboPlay Event')
                end
            end
            return oldPost(dst, evt)
        end
        -- printout success
        print('wrapped IPC Ginga-GloboPlay')
    end
    -- END GLOBOPLAY BYPASS
end
