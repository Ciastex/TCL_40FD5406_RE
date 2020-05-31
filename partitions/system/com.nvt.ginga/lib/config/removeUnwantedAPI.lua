do
    local function notSupported()
        error("Not supported!", 2)
    end
    
    package.loadlib = notSupported
    
    local stdin = io.input()
    local oldRead = io.read
    io.read = function(...)
        local f = select(1, ...)
        if f == nil and io.input() == stdin then
            error("Not supported!", 2)
        else
            return oldRead(...)
        end
    end
    io.popen = notSupported
    io.tmpfile = notSupported
   
    os.clock = notSupported
    os.execute = notSupported
    os.exit = notSupported
    os.remove = notSupported
    os.rename = notSupported
    os.tmpname = notSupported
    os.getenv = notSupported
    os.setlocale = notSupported
    
    for k, v in pairs(debug) do
        if type(v) == "function" and k ~= "traceback" then
            debug[k] = notSupported
        end
    end
end
