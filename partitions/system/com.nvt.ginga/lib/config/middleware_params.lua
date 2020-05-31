-- READ ME PLEASE
--
-- Author: Alexander Miro 
--
--  _/_/_/_/_/_/_/_/_/_/_/_/_/_/ ATTENTION  _/_/_/_/_/_/_/_/_/_/_/_/_/_/
--
--     1) The registry MUST have the following format:
--             parameters = {
--                   var_1 = 2.0
--                 , var_2 = "test"
--                 , var_3 = nil  -- this parameter will not be processed
--                                -- by Lua engine.
--             }
--     
--     2) Every new variable should be inserted into the registry
--        described on item (1)
--
--     3) IMPORTANT: Every parameter must have a value even if it does not
--        expect one. This constraint is necessary to avoid a Lua crashing
--        during loading this file. So, inform a dummy value for this sort
--        of parameters.
--
--     4) When a parameter has a value 'nil' it will be ignored by Lua and
--        will not be visible inside C++ code.
--
--     5) Just 1(one) registry will be processed, so more than one
--        will be ignored.
--
--
parameters = { 
    -- information
      help         = nil
    , version      = nil

    -- screen
    , depth = "32" -- screen depth
    , screen = "720p"  -- screen format

    -- zapper
    --, channel      = 21
    --, hybrid       = nil

    -- ATTENTION: The NCL file must be prefixed by the protocol `file://' 
    --, ncl = "file:///astroTV/copa2002/main.ncl"
    --, ncl_application_id = "NCL0000"

    -- ATTENTION: JAVA AND NCL APPLICATION MUST NOT EXIST AT THE SAME TIME!
    
    --, java_application = "com.tqtvd.apps.transition.TransitionIconXlet"                                             
    --, java_application_id = "Java0000"                                          
    --, java_classpath = "file:///tqtvd/app"

    , astro_zapper = "off" 
    , log_server = "off"
    , log_server_ip = "192.168.1.100"
    , log_server_port = "1234"
    --, argentinian_mode = "off"
}

