do
    persistent = {}
    persistent.shared = {}
    persistent.service = {}
    persistent.channel = {}
    
    setmetatable(persistent.shared, {})
    setmetatable(persistent.service, {})
    setmetatable(persistent.channel, {})
    
    local mt = {
        __newindex = function()
            error("Cannot assign to persistent table")
        end 
    }
    setmetatable(persistent, mt)
end

