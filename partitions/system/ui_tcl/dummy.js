var g_setting = new Object();
g_setting.currentKeyBoardIndex = 0;
g_setting.getKeyBoardEnable = function (cur)
{
    if (cur==0)
        return 1;
    else
        return 0;
}
g_setting.getProperty = function (key,value)
{
    if (key=="ro.sita.model.Apps.ui_branch")
    {
        return "";
    }
    return "";
}

var tcl = new Object();

tcl.channel = new Object();
tcl.channel.requestInputSource = function(){};
var getTimeZone = function (){return "gb"};
tcl.channel.systemCountry = 51;


var timeoutFuc = new Object();
timeoutFuc.osdTimeoutEndFuc = function (){};
timeoutFuc.osdTimeoutStartFuc = function (){};