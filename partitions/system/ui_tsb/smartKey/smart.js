/**
 * Created by liping05 on 2016/9/26/026.
 */
var currentFocusObj;
var currentFocusBorderEle;
var nextFocusObj;
var nextFocusBorderEle;
var pressOkObject = null;
var onlyListenFlag = 0;
var onlyListenTimer;
var onlyListenCountdown = 4;    //单独听倒计时
var spinCricleTimer;    //单独听外圈动画计时器

var currentFocusFiled = 0;
var focusFiled_Smart = 0;
var focusFiled_sleepMenu = 1;

var sleepRemindShowTimer = 0;
var setting = top.g_setting;
var isGuideMenu=false; //Sounbar（CEC） 虚拟按键菜单
var footballMode = top.g_setting.footballMode;
var smartKeyDivs;
var spanList;

var smartDivLength = 0;
var smartList =
[
    {name:top.smartKeyWords[0],     icon:"smart_widi.png",      click:"showSmartFocusArrow(this);jumpToWidi();",        appCloseFlag:1,    showFlag:0,  key:"widi"},
    {name:top.smartKeyWords[1],     icon:"smart_only.png",      click:"showSmartFocusArrow(this);jumpToOnlyListen();",  appCloseFlag:0,    showFlag:0,  key:"onlylisten"},
    {name:top.smartKeyWords[2],     icon:"smart_time.png",      click:"showSmartFocusArrow(this);jumpToSleeptime();",   appCloseFlag:0,    showFlag:0,  key:"sleeptimer"},
    {name:top.smartKeyWords[3],     icon:"smart_clock.png",     click:"showSmartFocusArrow(this);jumpToClock();",       appCloseFlag:1,    showFlag:0,  key:"clock"},
    {name:top.smartKeyWords[4],     icon:"smart_T-link.png",    click:"showSmartFocusArrow(this);jumpToSoundbar();",    appCloseFlag:0,    showFlag:0,  key:"soundbar"},
    // {name:top.smartKeyWords[5],     icon:"smart_wifi.png",      click:"showSmartFocusArrow(this);jumpToWifi();",        appCloseFlag:0,    showFlag:0,  key:"wifi"},
    {name:top.smartKeyWords[6],     icon:"smart_pvr.png",       click:"showSmartFocusArrow(this);jumpToPvr();",         appCloseFlag:0,    showFlag:0,  key:"pvr"},
    {name:top.smartKeyWords[7],     icon:"smart_football.png", click:"showSmartFocusArrow(this);jumpToFootball();",    appCloseFlag:0,    showFlag:0,  key:"football"},
];
var smartDivId = new Array();//用于记录各个功能在页面的ID

var basePath = "images/common/";//默认图片路径
var cricleImage_exit = 1;
var cricleImage = [
    "blueCircle0.png",
    "blueCircle45.png",
    "blueCircle90.png",
    "blueCircle135.png",
    "blueCircle180.png",
    "blueCircle225.png",
    "blueCircle270.png",
    "blueCircle315.png"
];
var smartKeyColor = top.g_setting.getProperty("ro.sita.cfg.app.smartKey_color","common");
var isHomeProcess = sessionStorage.getItem("NewSanPrePage") == "homepage" || sessionStorage.getItem("NewSanPrePage") == "miracast"; //是否处于从home进入的流程中

document.onkeydown = keyProcess;
document.onsystemevent = systemEventHandle;

function $(id)
{
    return document.getElementById(id);
}
function init()
{
    if (top.g_temp == "miracast" || sessionStorage.getItem("NewSanPrePage") == "miracast")
    {
        top.clearMyTimeout();
    }
    top.initTextDirection(window);
    if(setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1") != "0")
    {
        setting.setMEMC(0);
    }
    if(top.isGingaOn && top.GingaObj.isInit == top.GingaStates.True)
    {
        top.gingaEvtProc(top.GingaStates.Events.GINGA_EVT_PAUSE_FOR_CONTROL_LOST);
    }
    initShow();
    try
    {
        //面板按键处理场景设置
        top.g_setting.contextOf5in1 = top.CONTEXT_MENU_SELECT;
        getBackBlockId("smart_01");
        top.g_temp ="option";//保留option，尽量少修改framework

    }catch(er)
    {
        console.log("option init"+er);
    }
    $("smartBody").style.display = "block";
    document.body.style.display = 'block';
}

function uninit()
{
    top.OSDPage = "main";
    if(top.g_temp=="option")
        top.g_temp ="";
    if (setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1")!="0")
    {
        setting.setMEMC(1);
    }
    if(onlyListenFlag)
    {
        top.g_media.openScreen();
        onlyListenFlag = 0;
    }
}

//obj被集焦，显示焦点框图
function switchFocusOnPage(obj, focusObj)
{
    for(var i=0;i<spanList.length;i++)
    {
        if(obj.id == smartKeyDivs[i].id)
        {
            top.doEleScrForNoOption(spanList,i,0);
            break;
        }
    }
    pressOkObject = obj;
    focusObj.style.visibility = 'visible';
}

// obj失去焦点，隐藏焦点框图
function switchLoseFocusOnPage(obj, focusObj)
{
    focusObj.style.visibility = 'hidden';

}

//集焦到blockId
function getBackBlockId(id)
{
    if(id){
        currentFocusObj = document.getElementById(id);
        currentFocusBorderEle = document.getElementById(currentFocusObj.getAttribute('data-focus_id'));
        //当前OK对象
        switchFocusOnPage(currentFocusObj,currentFocusBorderEle);
    }
}

function keyProcess(evt)
{
    var keycode = evt.which;

    if(onlyListenTimer) //处于进入单独听倒计时中，按任意键退出倒计时
    {
        switch (keycode)
        {
            default:
                if(isHomeProcess)
                {
                    top.$("main").style.display = "block";
                }
                $("smartBody").style.display="block";
                $("onlyListenRemind").style.display="none";
                clearTimeout(spinCricleTimer);
                clearTimeout(onlyListenTimer);
                $("onlyListenTime").innerHTML = 5 + "";
                onlyListenTimer = 0;
                onlyListenCountdown = 4;
                break;
        }
        return;
    }
    if (isGuideMenu)
    {
        var channel = top.g_channel;
        var inputSource = channel.inputSource; //当前信源

        switch (keycode)
        {
            case top.VK_0:
            case top.VK_1:
            case top.VK_2:
            case top.VK_3:
            case top.VK_4:
            case top.VK_5:
            case top.VK_6:
            case top.VK_7:
            case top.VK_8:
            case top.VK_9:
            case top.VK_ENTER://OK
            case top.VK_PLAY_PAUSE:
            case top.VK_STOP:
            case top.VK_REWIND:
            case top.VK_FAST_FWD:
            case top.VK_PREV:
            case top.VK_NEXT:
            case top.VK_PAUSE:
            case top.VK_PLAY:
            //case top.VK_VOLUME_UP://volume up
            //case top.VK_VOLUME_DOWN://volume down
            case top.VK_UP:
            case top.VK_DOWN:
            case top.VK_LEFT:
            case top.VK_RIGHT:
            case top.VK_BACK:
            case top.VK_RED:
            case top.VK_GREEN:
            case top.VK_YELLOW:
            case top.VK_BLUE:
            case top.VK_RECORD:
                if((inputSource == 6)&&(setting.isMhlReady()))
                {
                    setting.sendMhlKeyValue(keycode);
                    return;
                }
                if(keycode== top.VK_BACK)
                    setting.sendCecKeyValue(1006);
                else
                    setting.sendCecKeyValue(keycode);
                return;
        }
    }

    if(onlyListenFlag)
    {
        switch (keycode)
        {
            case VK_VOLUME_DOWN:
                if(3 == getVolumeType())
                {
                    top.g_setting.sendCecKeyValue(keycode);
                }else
                {
                    handleVolume(-1);
                }
                break;
            case VK_VOLUME_UP:
                if(3 == getVolumeType())
                {
                    top.g_setting.sendCecKeyValue(keycode);
                }else
                {
                    handleVolume(1);
                }
                break;
            default:
            {

                top.g_media.openScreen();
                if(isHomeProcess)
                {
                    top.$("main").style.display = "block";
                }
                onlyListenFlag = 0;
                break;
            }
        }
    }else
    {
        switch (keycode)
        {
            case VK_UP:
            {
                if ( pressOkObject && pressOkObject == $(smartDivId["soundbar"]) ) {
                    toGuideMenu();
                } else {
                    toOK();
                }
                break;
            }

            case VK_DOWN:
            {
                //down
                if(currentFocusFiled == focusFiled_sleepMenu)
                {
                    currentFocusFiled = focusFiled_Smart;

                    nextFocusObj = document.getElementById(smartDivId["sleeptimer"]);
                    $("sleepMenu").style.visibility = "hidden";
                    nextFocusBorderEle = document.getElementById(nextFocusObj.getAttribute('data-focus_id'));
                    switchLoseFocusOnPage(currentFocusObj, currentFocusBorderEle);
                    switchFocusOnPage(nextFocusObj, nextFocusBorderEle);
                    currentFocusObj = nextFocusObj;
                    currentFocusBorderEle = nextFocusBorderEle;
                }
                break;
            }
            case VK_ENTER:
            {
                //OK 键
                toOK();
                break;
            }
            case VK_RIGHT:
            {
                var rightNodeIdValue = currentFocusObj.getAttribute('data-right');
                if(rightNodeIdValue != "-1")
                {
                    nextFocusObj = document.getElementById(rightNodeIdValue);
                    nextFocusBorderEle = document.getElementById(nextFocusObj.getAttribute('data-focus_id'));

                    switchLoseFocusOnPage(currentFocusObj, currentFocusBorderEle);
                    switchFocusOnPage(nextFocusObj, nextFocusBorderEle);
                    currentFocusObj = nextFocusObj;
                    currentFocusBorderEle = nextFocusBorderEle;
                }
                break;
            }
            case VK_EXIT:
                if (isGuideMenu) {
                    top.restartTimeout();
                    if(isHomeProcess)
                    {
                        top.$("main").style.display = "block";
                    }
                    $("smartBody").style.display="block";
                    $("popGuideMenu").style.display="none";
                    isGuideMenu = false;
                    break;
                }
                console.log("[----------newsanlog----------]exit in smart.js otherPage="+top.$("otherPage").src+"       NewSanPrePage="+sessionStorage.getItem("NewSanPrePage"));//add for bug98107
                if(!isHomeProcess)
                {
                    top.keyDownProcess(evt);
                    break;
                }
            case VK_HOME:
                if(!isHomeProcess)
                {
                    break;
                }
            case VK_BACK:
            {
                toBack();
                break;
            }
            case VK_LEFT:
            {
                var leftNodeIdValue = currentFocusObj.getAttribute('data-left');
                if(leftNodeIdValue != "-1")	//左边还有元素
                {
                    nextFocusObj = document.getElementById(leftNodeIdValue);
                    nextFocusBorderEle = document.getElementById(nextFocusObj.getAttribute('data-focus_id'));
                    switchLoseFocusOnPage(currentFocusObj, currentFocusBorderEle);
                    switchFocusOnPage(nextFocusObj, nextFocusBorderEle);
                    currentFocusObj = nextFocusObj;
                    currentFocusBorderEle = nextFocusBorderEle;
                }
                break;
            }
            case VK_OPTION://option
            {
                if(isHomeProcess   //统一在SmartKey菜单中按option逻辑
                || currentFocusFiled == focusFiled_sleepMenu)
                {
                    toBack();
                    break;
                }else
                {
                    top.jumpPage();
                    break;
                }

            }
            case VK_EXIT:
            {
                sessionStorage.setItem("NewSanPrePage","");
                top.keyDownProcess(evt);
                break;
            }
            case VK_VOLUME_DOWN:
                if(isHomeProcess)
                {
                    top.OSDPage="SmartKey_otherPage";
                }
                top.handleVolume(-1);
                break;
            case VK_VOLUME_UP:
                if(isHomeProcess)
                {
                    top.OSDPage="SmartKey_otherPage";
                }
                top.handleVolume(1);
                break;
            case VK_MEDIA:
            case VK_NETFLIX:
            case VK_YOUTUBE:
            case VK_INTERNET:
                if(top.appOpenFlag == 1 )
                {
                    var currentApp = top.g_setting.getProperty("app.ui.currentApp","tbrowser.mmh");
                    if(currentApp != "vod.netflix" && currentApp != "tbrowser.youtube")
                    {
                        sessionStorage.setItem("NewSanPrePage","smartkey");
                        top.$("main").style.display = "block";
                        top.$('otherPage').src = "";
                        top.resumeFocus();
                        top.setFrameFocusPage("main");
                        top.keyDownProcess(evt);
                    }
                }else
                {
                    top.keyDownProcess(evt);
                }
                break;
            case VK_GUIDE:
                break;
            default:
                top.keyDownProcess(evt);
                break;
        }
    }
}

//smart part鼠标点击时，焦点光标跟随
function showSmartFocusArrow(obj)
{
    if (obj == undefined) {
        return;
    }

    //sleepTime控件鼠标操作处理
    if (currentFocusObj.getAttribute("id").indexOf("sleep_0") > -1 && obj.getAttribute("id").indexOf("sleep_0") == -1) {
        currentFocusFiled = focusFiled_Smart;
        $("sleepMenu").style.visibility = "hidden";
        var sleepTimeFocusObj = document.getElementById(smartDivId["sleeptimer"]);
        var sleepTimeFocusBorderEle = document.getElementById(sleepTimeFocusObj.getAttribute('data-focus_id'));
        switchLoseFocusOnPage(sleepTimeFocusObj, sleepTimeFocusBorderEle);
    }

    nextFocusObj = obj;
    nextFocusBorderEle = document.getElementById(nextFocusObj.getAttribute('data-focus_id'));
    switchLoseFocusOnPage(currentFocusObj, currentFocusBorderEle);
    switchFocusOnPage(nextFocusObj, nextFocusBorderEle);
    currentFocusObj = nextFocusObj;
    currentFocusBorderEle = nextFocusBorderEle;
}

function systemEventHandle(evt)
{
    var msg = evt.which;
    var p1 = evt.modifiers;
    console.log("launcher receive event "+msg);
    switch (msg)
    {
        case E_APP_CLOSE:
            console.log("launcher: the app closed");
            if(doEnterAfterClose)
            {
                top.appOpenFlag = 0;
                doEnterAfterClose = 0;
                try
                {
                    pressOkObject.onclick();
                } catch (e)
                {
                    console.log(e.name + ": " + e.message);
                }finally{
                }
                return;
            }
            if(openFromFramework)
            {
                top.appOpenFlag = 0;
                delete sessionStorage.tabListIndex;//删除launcher记忆的tab
                top.g_setting.sendMsgToDBC(4);
                top.jumpPage(1);
                if(top.g_isDownloading == 0){
                    top.g_isDownloading = 1;
                    top.g_setting.restartDownloadUpdateFile();
                }
                onBodyBlur();
                return;
            }
            switchFocusOnPage(currentFocusObj, currentFocusBorderEle);
            if(top.virtualRemoteState == 1)
            {
                top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();//隐藏虚拟遥控器--lqt
            }
            if (top.scheduleApp == top.SCHEDULE_NETFLIX)
            {
                top.scheduleApp = 0;
                top.g_channel.requestInputSource(10);
                top.g_setting.setProperty("app.ui.currentApp","vod.netflix");
                top.g_ulits.sendMsgToApplication("vod.netflix", 0xF063);
                top.g_ulits.sendMsgToApplication("vod.netflix", 0xF041);
                return;
            }
            else if(top.scheduleApp == top.SCHEDULE_CEC)
            {
                top.scheduleApp = 0;
                top.appOpenFlag = 0;
                top.tochangeCEC(top.lastInputSource);
                return;
            }
            else if(top.scheduleApp == top.SCHEDULE_YOUTUBE)
            {
                top.scheduleApp = 0;
                top.g_channel.requestInputSource(10);
                top.g_setting.setProperty("app.ui.currentApp","tbrowser.youtube");
                top.g_ulits.openApplication("tbrowser.youtube","https://www.youtube.com/tv?launch=menu&additionalDataUrl=http%3a%2f%2flocalhost%3a56789%2fapps%2fYouTube%2fdial_data");
                return;
            }
            else if(top.scheduleApp == top.SCHEDULE_INTERNET)
            {
                top.scheduleApp = 0;
                top.g_channel.requestInputSource(10);
                top.g_setting.setProperty("app.ui.currentApp","tbrowser.browser");
                top.g_ulits.openApplication("tbrowser.browser","http://eu.guide.huan.tv/huan123/skin/home2015List.action?skin=D1280_2015&data=GBR_mt56#");
                return;
            }
            else if (top.scheduleApp == top.SCHEDULE_DIAL)
            {
                top.scheduleApp = 0;
                top.g_ulits.sendMsgToApplication("T-DIAL",E_APP_PROCESS_READY);
                return;
            }
            else if (top.scheduleApp != top.SCHEDULE_TV)
            {
                if (top.lastInputSource == 0 || top.lastInputSource == 1)
                {
                    top.g_channel.inputSource=top.lastInputSource;
                }
                else
                {
                    top.g_channel.requestInputSource(top.lastInputSource);
                }
            }

            if(top.scheduleApp == top.SCHEDULE_LOCAL_EPG)
            {
                top.scheduleApp = 0;
                top.$("main").onload=function(){
                    top.appOpenFlag = 0;
                    //top.$("main").style.display="block";
                    top.main.document.body.style.display = "block";
                    top.$("operatePage").style.display="block";
                    top.$("otherPage").style.display="block";
                    top.$("globleShow").style.display="block";
                    top.$("main").onload=function(){};
                }
                if(top.isNAFlag)
                {
                    top.$("main").src = "programGuide_NA.html";
                }
                else
                {
                    top.$("main").src = "programGuide.html";
                }
                return;
            }
            else if (top.scheduleApp == top.SCHEDULE_SETTING)
            {
                top.scheduleApp = 0;
                top.appOpenFlag = 0;
                openSetting();
                //top.$("main").style.display="block";
                top.main.document.body.style.display = "block";
                top.$("operatePage").style.display="block";
                top.$("otherPage").style.display="block";
                top.$("globleShow").style.display="block";
                return;
            }
            else if (top.scheduleApp == top.SCHEDULE_HOMEPAGE)
            {
                top.scheduleApp = 0;
            }
            else if (top.scheduleApp == top.SCHEDULE_SOURCE)
            {
                top.scheduleApp = 0;
                top.appOpenFlag = 0;
                openSource();
                top.main.document.body.style.display = "block";
                top.$("operatePage").style.display="block";
                top.$("otherPage").style.display="block";
                top.$("globleShow").style.display="block";
                return;
            }
            else if (top.scheduleApp == top.SCHEDULE_STR)
            {
                top.scheduleApp = 0;
                top.appOpenFlag = 0;
                top.toPowerOff();
            }
            else if(top.scheduleApp == top.SCHEDULE_SWITCHSRC)
            {
                top.scheduleApp = 0;
                top.appOpenFlag = 0;
                top.toswitchSource(top.lastInputSource);
                return;
            }
            else if(top.scheduleApp == top.SCHEDULE_MEDIA)
            {
                top.scheduleApp = 0;
                top.appOpenFlag = 0;
                var usbLock = top.g_factory.usbLock;
                var hotelEnable = top.g_factory.hotelEnable;
                if(top.g_temp=="homePage")
                {
                    delete sessionStorage.tabListIndex;//删除launcher记忆的tab
                }
                if((usbLock) && (hotelEnable))
                {
                    top.$('main').src = "password.html?usbLock";
                    top.main.focus();
                }
                else
                {
                    top.$('main').src = "deviceList.html";
                    top.isFromOptionIntoUsb = 0;
                }
                return;
            }

            if(top.scheduleApp == top.SCHEDULE_TV)
            {
                top.$("operatePage").src = "";
                top.$("otherPage").src = "";
                top.g_previousHtmlPage = "channelPlay.html";
                top.g_remindWord = "TvHotKey";
                top.$("main").src = "intermediate.html";
                top.requestFocus(top.main, 1);
            }
            if(top.g_setting.isHDScreen==1)
            {
                top.g_setting.scaleVideoWindow(0,0,0,0);
            }
            else
            {
                top.g_setting.scaleVideoWindow(0,0,0,0);
            }

            top.appOpenFlag = 0;
            top.g_setting.contextOf5in1   = top.CONTEXT_HOME_PAGE;
            top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x400|0x800,0,2);
            top.main.document.body.style.display = "block";
            top.$("operatePage").style.display="block";
            top.$("otherPage").style.display="block";
            top.$("globleShow").style.display="block";
            top.scheduleApp = 0;
            break;
        case E_POWER_OFF_TIMER:
        case E_DLNA_DMR_PUSH_MOVIE://dmr push movie
        case E_DLNA_DMR_PUSH_MUSIC://dmr push music
        case E_DLNA_DMR_PUSH_PICTURE://dmr push picture
        case E_STR_SCREEN_OFF:
        case E_STR_SCREEN_ON:
            top.systemEventProc(evt);
            break;
        case E_MEDIA_USB_INSERTED:
            onBodyBlur();
            updateUSB();
            updateSource();
            top.systemEventProc(evt);
            break;
        case E_MEDIA_USB_REMOVE:
        case E_MEDIA_USB_REMOVE_OTHER:
            updateUSB();
            updateSource();
            break;
        case E_NETWORK_CONNECT_TEST_SUCCESS:
        case E_NETWORK_CONNECT_TEST_FAIL:
        case E_WIRE_CONNECT_SUCCESS:
        case E_WIRELESS_CONNECT_SUCCESS:
        case E_WIRE_CONNECT_FAILURE:
        case E_WIRELESS_CONNECT_FAILURE:
            updateNetwork();
            top.systemEventProc(evt);
            break;
        case E_APP_PROCESS_INITIALIZATION:
            top.systemEventProc(evt);
            break;
        case E_TERMINAL_MANAGER_START:
        case E_TV_FAULT_DIAGNOSIS_CONNECT_ON:
        case E_TV_FAULT_DIAGNOSIS_CONNECT_OFF:
            top.systemEventProc(evt);
            break;
        case E_SRC_CHANGE_SET_INPUT_SOURCE:
            updateSource();
            top.systemEventProc(evt);
            break;
        case E_SS_NO_CI_MODULE:
        case E_SS_INVALID_SERVICE://invalid service
        case E_SS_SCRAMBLED_PROGRAM:// screamble
        case E_SS_AUDIO_ONLY://audio only
        case E_SS_DATA_ONLY://data only
        case E_SIGNAL_UNLOCK://unlock signal
        case E_PVR_NO_SIGNAL:
        case E_SIGNAL_LOCK://lock signal
        case E_DTV_SS_RUNNING_STATUS_NOT_RUNNING:
        case E_SS_COMMON_VIDEO:
        case E_SS_CH_BLOCK:
        case E_SS_PARENTAL_BLOCK:
        case E_DTV_SS_INPUT_BLOCK:
        {
            showCurrentChannelInfo();
            if(top.appOpenFlag==0 && top.isGingaOn && top.GingaObj.isInit == top.GingaStates.True)
            {
                top.systemEventProc(evt);
            }
            break;
        }
        case E_DTV_SERVICE_PLAY:
        case E_CHANNEL_PLAY_END:
        case E_TV_EXCHANGE_END:
        case E_DTV_EPG_PF_FINISH:
        {
            for (var i = 0; i < iframeList.length; i++)
            {
                if (iframeListDiv_0[i].id == "tvPage")
                {
                    iframeList[i].contentWindow.showCurrentChannelInfo();
                    break;
                }
            }
            if(top.appOpenFlag==0)
            {
                top.systemEventProc(evt);
            }
            break;
        }
        case E_BOOKING_PLAY_START://booking play start开机时节目预定的时间已过，但是依然要提醒用户做一些切台等操作
        case E_BOOKING_RECORD_START://booking record start开机时录制预定已经过期，但是依然要提醒用户切台录制
        case E_BOOKING_AHEAD_PLAY_START://booking ahead play start,正常情况下切台提醒，一分钟前提醒
        case E_BOOKING_AHEAD_RECORD_START://booking ahead record start正常情况下录制提醒,，一分钟前提醒
            top.systemEventProc(evt);
            break;
        case E_VOICE_COLLECT_ENTRIES:
        case E_VOICE_CONTROL:
        case E_CEC_HDMI_DEVICE_INSERTED:
            top.systemEventProc(evt);
            break;
        case E_WFD_STATUS:
            top.systemEventProc(evt);
            break;
        default:
            break;
    }
}

function toOK()
{

    if (pressOkObject)
    {
        if(top.appOpenFlag == 1 && pressOkObject.getAttribute("data-needCloseApp") == "1")
        {
            var appname = top.g_setting.getProperty("app.ui.currentApp","tbrowser.mmh");
            top.g_ulits.closeApplication(appname);
            doEnterAfterClose = 1;
        }else {
            try
            {
                pressOkObject.onclick();
            } catch (e)
            {
                console.log(e.name + ": " + e.message);
            }
        }

    }
}

function isHdmiIv()
{
    var channel = top.g_channel;
    var setting = top.g_setting;
    var inputSource = channel.inputSource; //当前信源
    var flag = false;

    if (((inputSource >= 6 && inputSource <= 8) || inputSource == 12) && setting.enableTLink == 1)// 12 is HDMI IV
    {
        flag = true;
        if (setting.isMhlReady() == 1 && inputSource == 6) {
            flag = false;
        }
    }
    return flag;
}

function toGuideMenu()
{
    if (isHdmiIv()) {
        if(isHomeProcess)
        {
            top.$("main").style.display = "none";
        }
        top.clearMyTimeout();
        $("smartBody").style.display="none";
        $("popGuideMenu").style.display="block";
        isGuideMenu = true;
    }
}

function jumpToWidi()
{
    if(top.appOpenFlag == 1)
    {
        var appname = top.g_setting.getProperty("app.ui.currentApp","tbrowser.mmh");
        top.g_ulits.closeApplication(appname);
        doEnterAfterClose = 1;
        return;
    }
    if(isHomeProcess)
    {
        top.$("main").style.display = "none";
        sessionStorage.setItem("NewSanPrePage","smartkey");
        top.$("otherPage").src = "networkSetting/miracast.html";
        top.$("otherPage").style.display = "block";
        top.requestFocus(top.otherPage, 0);
        top.setFrameFocusPage("otherPage");
        return;
    }
    top.g_temp = "miracast";
    top.jumpHotkeyPage("networkSetting/miracast.html");
}

function jumpToOnlyListen()
{

    if(isHomeProcess)
    {
        top.$("main").style.display = "none";
    }
    spinCricle(0);
    $("smartBody").style.display="none";
    $("onlyListenRemind").style.display="block";
    showOnlyListenRemind();

}

function jumpToSleeptime()
{

    currentFocusFiled = focusFiled_sleepMenu;
    $("sleepMenu").style.visibility = "visible";
    if (setting.sleepTimer != 0)//已经有睡眠有倒计时
    {
        getCountDownTime();
        $("remindTime").style.display = "block";
    }
    else
    {
        $("remindTime").style.display = "none";
    }

    var temp_id = "sleep_0"+(setting.sleepTimer+1);
    nextFocusObj = document.getElementById(temp_id);
    nextFocusBorderEle = document.getElementById(nextFocusObj.getAttribute('data-focus_id'));

    switchFocusOnPage(nextFocusObj, nextFocusBorderEle);
    currentFocusObj = nextFocusObj;
    currentFocusBorderEle = nextFocusBorderEle;
}

function jumpToSoundbar()
{

    if(0 == setting.enableTLink)
    {
        setting.enableTLink = 1;
        $(smartDivId["soundbar"]).getElementsByTagName("img")[0].src = "images/"+smartKeyColor+"/smart_T-link_on.png";

        if (isHdmiIv()) {
            $(smartDivId["soundbar"]).getElementsByTagName("img")[2].style.display = "block";//显示向上的箭头
        }
    }else
    {
        setting.enableTLink = 0;
        $(smartDivId["soundbar"]).getElementsByTagName("img")[0].src = "images/"+smartKeyColor+"/smart_T-link.png";
        $(smartDivId["soundbar"]).getElementsByTagName("img")[2].style.display = "none";
    }
}
function jumpToWifi()
{

    if(0 == setting.networkEnable)
    {
        setting.networkEnable = 1;
        if(0 == setting.networkConnectType || 1 == setting.networkConnectType)
        {
            setting.setInterfaceType(2);
            setting.switchNetwork();
            setting.wirelessNetworkConnect("\0", "\0", 0, "\0");
        }
        $(smartDivId["wifi"]).getElementsByTagName("img")[0].src = "images/"+smartKeyColor+"/smart_wifi_on.png";
    }else
    {
        if(0 == setting.networkConnectType || 1 == setting.networkConnectType)
        {
            setting.setInterfaceType(2);
            $(smartDivId["wifi"]).getElementsByTagName("img")[0].src = "images/"+smartKeyColor+"/smart_wifi_on.png";
            setting.switchNetwork();
            setting.wirelessNetworkConnect("\0", "\0", 0, "\0");
        }else
        {
            setting.setInterfaceType(0);
            $(smartDivId["wifi"]).getElementsByTagName("img")[0].src = "images/"+smartKeyColor+"/smart_wifi.png";
            setting.switchNetwork();
            setting.wireNetworkDHCP();
        }
    }
}

function jumpToPvr()
{

    var pvrOpenStatus = 0;
    var channel = top.g_channel;
    var setting = top.g_setting;
    var inputSource   = channel.inputSource; //当前信源
    var channelStatus = channel.channelProgramStatus();
    var signalStatus  = channel.currentSignalStatus;
    var pvrShowFlag   = true;

    pvrOpenStatus = top.g_factory.pvrOpenStatus;
    top.g_setting.sendMsgToDBC(4);

    if(inputSource != 1) //无 Pvr只能在DTV信源下面
    {
        pvrShowFlag = false;
    }
    else if(inputSource == 0 || channelStatus == 0 || signalStatus == 0 || pvrOpenStatus <= 0)
    {
        pvrShowFlag = false;
    }
    else if (setting.getProperty("ro.sita.model.LiveTV.PVR","FALSE") == "FALSE")
    {
        pvrShowFlag = false;
    }

    if (!pvrShowFlag) //非DTV新源下不可使用Pvr
    {
        top.g_remindWord = "notAvailable";
        top.$("main").src = "intermediate.html";
        top.$("main").style.display = "block";
        top.$("otherPage").src = "";
        top.requestFocus(top.main, 1);
        top.setFrameFocusPage("main");
        return;
    }

    //inputSource 为1
    top.g_previousHtmlPage = "channelPlay.html";

    if(pvrOpenStatus == 1)
    {
        if(top.timeShiftStatusFlag == 1)
        {
            top.operateWhenTimeshifting("stop");
            return;
        }

        if(top.recordStatusFlag==1)
        {
            top.$("globleShow").contentWindow.hiddenRecord();
        }
        top.$('main').src = "pvr/Pvr.html?menu";
        top.$("main").style.display = "block";
        top.$("otherPage").src = "";
    }
    else
    {
        top.g_remindWord = "notAvailable";
        top.$("main").src = "intermediate.html";
        top.$("main").style.display = "block";
        top.$("otherPage").src = "";
    }

    top.requestFocus(top.main, 1);
    top.setFrameFocusPage("main");
}

function showOnlyListenRemind()
{

    onlyListenTimer = setTimeout(function () {
        if(onlyListenCountdown<0)
        {
            top.g_media.shutdownScreen();
            $("smartBody").style.display = "block";
            $("onlyListenRemind").style.display = "none";
            $("onlyListenTime").innerHTML = 5 + "";
            clearTimeout(spinCricleTimer);
            onlyListenFlag = 1;
            onlyListenCountdown = 4;
            clearTimeout(onlyListenTimer);
            onlyListenTimer = 0;
        } else {
            $("onlyListenTime").innerHTML = onlyListenCountdown + "";
            showOnlyListenRemind();
        }
        onlyListenCountdown--;
    }, 1 * 1000);
}
function jumpToClock()
{

    top.checkPVR();
    if(isHomeProcess)
    {
        sessionStorage.setItem("NewSanPrePage","smartkey");
        top.$("main").style.display = "none";
        top.$("otherPage").src = "smartKey/clock/clock.html";
        top.$("otherPage").style.display = "block";
        top.requestFocus(top.otherPage, 0);
        top.setFrameFocusPage("otherPage");
        return;
    }

    top.g_temp = "miracast"; //与miracast统一变量值
    top.jumpHotkeyPage("smartKey/clock/clock.html");
}

//进入单独听之前的倒计时圈
function spinCricle(spinCricleCount)
{
    if(1 == cricleImage_exit)
    {
        $("timerCircle").src = "images/"+smartKeyColor+"/"+cricleImage[spinCricleCount % 8];
    }else {
        $("timerCircle").src = basePath+cricleImage[spinCricleCount % 8];
    }

    spinCricleCount++;
    spinCricleTimer = setTimeout("spinCricle(" + spinCricleCount + ")", 125);
}


function setSleeptime(time) {
    setting.sleepTimer = time;
    clearTimeout(sleepRemindShowTimer);
    if (time == 0)
    {
        $(smartDivId["sleeptimer"]).getElementsByTagName("img")[0].src = "images/"+smartKeyColor+"/smart_time.png";
        $("remindTime").style.display = "none";
    }
    else
    {
        $(smartDivId["sleeptimer"]).getElementsByTagName("img")[0].src = "images/"+smartKeyColor+"/smart_time_on.png";

        getCountDownTime();
        $("remindTime").style.display = "block";
    }
}

//获取系统睡眠定时时间并显示
function getCountDownTime()
{
    var time = setting.getSleepTime();
    var hour = parseInt(time / 3600);
    var minutes = parseInt((time % 3600) / 60);
    var seconds = parseInt(time % 60);
    var showHour = "" + hour;
    var showMinutes = "" + minutes;
    var showSeconds = "" + seconds;
    if (showHour.length == 1)
    {
        showHour = "0" + showHour;
    }
    if (showMinutes.length == 1)
    {
        showMinutes = "0" + showMinutes;
    }
    if (showSeconds.length == 1)
    {
        showSeconds = "0" + showSeconds;
    }
    $("remindTime").innerHTML = showHour + ":" + showMinutes + ":" + showSeconds;
    sleepRemindShowTimer = setTimeout("getCountDownTime()", 1000);
}

//初始化显示
function initShow() {
    initDivs();
    smartKeyDivs = $("smartOption").getElementsByTagName("div");
    spanList = $("smartOption").getElementsByTagName("span");

    $("onlyListenRemindSpan1").innerText = top.onlyListenRemindWords[0];
    $("onlyListenRemindSpan2").innerText = top.onlyListenRemindWords[1];

    if(setting.sleepTimer != 0 && smartDivId["sleeptimer"] != undefined)
    {
        $(smartDivId["sleeptimer"]).getElementsByTagName("img")[0].src = "images/"+smartKeyColor+"/smart_time_on.png";
    }
    if(setting.enableTLink && smartDivId["soundbar"] != undefined)
    {
        $(smartDivId["soundbar"]).getElementsByTagName("img")[0].src = "images/"+smartKeyColor+"/smart_T-link_on.png";
        if (isHdmiIv()) {
            $(smartDivId["soundbar"]).getElementsByTagName("img")[2].style.display = "block";
        }

    }
    if(1 == setting.networkEnable && 2 == setting.networkConnectType && smartDivId["wifi"] != undefined)
    {
        $(smartDivId["wifi"]).getElementsByTagName("img")[0].src = "images/"+smartKeyColor+"/smart_wifi_on.png";
    }
    if(1 == footballMode && smartDivId["football"] != undefined)
    {
        $(smartDivId["football"]).getElementsByTagName("img")[0].src ="images/"+smartKeyColor+"/smart_football_on.png";
    }
}

function onSmartBodyFocus() {
    if(  top.appOpenFlag == 1)
    {
        top.g_setting.setProperty("memory.app.ui.globleluancher","");//设置按键给到应用
    }
}

function handleVolume(val) {
    var maxVolume = top.g_setting.maxVolume;
    var curVolumeType = getVolumeType();
    var volume = getVolumeByType(curVolumeType);
    var curVolume = volume + val;
    if(curVolume<0)
    {
        curVolume = 0;
    }
    if(curVolume>maxVolume)
    {
        curVolume =  maxVolume;
    }
    setVolumeByType(curVolumeType,curVolume);
}

function getVolumeType() {
    var volumeType=  parseInt(top.g_setting.getProperty("app.ui.VolumeType","0"));
    switch(volumeType)
    {
        case 0://channel
            if(1 == top.g_setting.speakerStatus)
            {
                volumeType = 0;
                break;
            }
        case 1://headPhone
            if(0 == top.g_setting.getHeadphonePlugin())
            {
                volumeType =  1;
                break;
            }
        case 2://BT
            if(true == top.bt_soundOutputShowFlag)
            {
                volumeType = 2;
                break;
            }
        case 3://ARC
            if(true == top.getArcStatus())
            {
                volumeType =  3;
                break;
            }
        default:
            volumeType = 0;
            break;
    }
    top.g_setting.setProperty("app.ui.VolumeType",volumeType.toString());
    return volumeType;
}

function setVolumeByType(volumeType,volumeVal)
{
    var volume = volumeVal;
    switch(volumeType)
    {
        case 1://headPhone
            top.g_setting.headphoneVolume	= volume;
            break;
        case 2://Bluetooth Device
            top.bluetooth.setBluetoothVolume(volume);
            break;
        case 3://arc pass key to middleware
            break;
        case 0:
        default:
            top.g_channel.volume = volume;
            break;
    }
}

function getVolumeByType(volumeType)
{
    var volumeVal = 0;
    switch(volumeType)
    {
        case 1://headPhone
            volumeVal = top.g_setting.headphoneVolume;
            break;
        case 2://Bluetooth Device
            volumeVal =  bluetooth.getBluetoothVolume();
            break;
        case 3://arc
            volumeVal = top.g_setting.getCecVolumeValue();
            console.log("globleShow.html test  top.g_setting.getCecVolumeValue() = "+volumeVal);
            break;
        case 0:
        default:
            volumeVal = top.g_channel.volume;
            break;
    }
    return volumeVal;
}
function initDivs()
{
    initSmartConfig();
    var smartLength = smartList.length;
    var smartElem = $("smartOption");
    var sleepDivs = document.getElementsByClassName("sleep_elem");
    $("smartBody").getElementsByTagName("img")[0].src = "images/"+smartKeyColor + "/smart_menu_bg.png";
    $("onlyListenRemind").getElementsByTagName("img")[0].src = "images/"+smartKeyColor + "/onlylistenBackground.png";
    $("onlyListenRemind").getElementsByTagName("img")[2].src = "images/"+smartKeyColor + "/circleBackground.png";
    $("sleepMenu").getElementsByTagName("img")[0].src = "images/"+smartKeyColor + "/sleep_menu_bg.png";
    for(var i = 0; i < sleepDivs.length; i++)
    {
        sleepDivs[i].getElementsByTagName("img")[0].src = "images/"+smartKeyColor + "/sleep_focus.png";
    }
    for (var i = 0; i < smartLength; i++)
    {
        if(1 == smartList[i].showFlag)
        {
            smartDivLength++;
        }
    }
    var j = 0;
    for (var i = 0; i < smartLength; i++)
    {
        if(1 == smartList[i].showFlag)
        {
            var smartDiv = document.createElement("div");
            smartDiv.setAttribute("id","smart_0"+(j+1));
            smartDivId[smartList[i].key] = "smart_0"+(j+1);//Div的ID存入smartDivId数组
            smartDiv.className = "smart_item";
            smartDiv.setAttribute("onclick",smartList[i].click);
            smartDiv.setAttribute("data-focus_id","smart_0"+(j+1)+"_focus");
            if(0 == j)
            {
                smartDiv.setAttribute("data-left","smart_0"+ smartDivLength);
                smartDiv.setAttribute("data-right","smart_0"+(j+2));
            }else if(smartDivLength-1 == j)
            {
                smartDiv.setAttribute("data-left","smart_0"+j);
                smartDiv.setAttribute("data-right","smart_01");
            }else
            {
                smartDiv.setAttribute("data-left","smart_0"+j);
                smartDiv.setAttribute("data-right","smart_0"+(j+2));
            }
            if(1 == smartList[i].appCloseFlag)
            {
                smartDiv.setAttribute("data-needCloseApp","1");
            }

            var tempImg = document.createElement("img");
            tempImg.src = "images/"+smartKeyColor+"/"+ smartList[i].icon;
            tempImg.className = "smart_img";
            smartDiv.appendChild(tempImg);

            var focusImg = document.createElement("img");
            focusImg.className = "smart_focus";
            focusImg.id = "smart_0" + (j + 1) + "_focus";
            focusImg.src = "images/"+smartKeyColor + "/smart_focus.png";
            smartDiv.appendChild(focusImg);

            var smartSpan = document.createElement("span");
            smartSpan.innerText = smartList[i].name;
            smartDiv.appendChild(smartSpan);

            smartElem.appendChild(smartDiv);
            j++;
        }
    }
    $("smartOption").style.width = smartDivLength * 224 + "px";
    if(smartDivId["soundbar"] != undefined) //soundbar 向上的箭头，特殊处理
    {
        var upArrowImg = document.createElement("img");
        upArrowImg.src = basePath+"arrow_up.png";
        upArrowImg.setAttribute("style","position: absolute;top:-17px;left:91px;display:none;");
        $(smartDivId["soundbar"]).appendChild(upArrowImg);
    }


}

//根据配置文件和机器当前状态初始化showflag
function initSmartConfig()
{
    var smartConfig = top.g_setting.getProperty("ro.sita.cfg.app.smartKey_support","null");
    if("null" == smartConfig)//默认全部显示
    {
        for(var i = 0;i < smartList.length;i++)
        {
            smartList[i].showFlag = 1;
        }
    }else{
        for(var i = 0;i < smartList.length;i++)
        {
            if(top.checkProperty(smartList[i].key,"ro.sita.cfg.app.smartKey_support",2))
            {
                smartList[i].showFlag = 1;
            }
        }
    }
    //以下添加非配置隐藏项
    if(top.recordStatusFlag == 1)//进行录制的时候隐藏wifi display
    {
        smartList[0].showFlag = 0;
        $("smartOption").style.left="224px";
    }
    if(top.g_factory.pvrOpenStatus == 0 || setting.getProperty("ro.sita.model.LiveTV.PVR","FALSE") != "TRUE")//工厂设置或配置中关闭了PVR，则隐藏PVR
    {
        smartList[6].showFlag = 0;
    }

}

function toBack()
{
    if(currentFocusFiled == focusFiled_Smart)
    {
        if(isHomeProcess)
        {
            sessionStorage.setItem("NewSanPrePage","smartkey");
            top.$("main").style.display = "block";
            top.$('otherPage').src = "";
            top.resumeFocus();
            top.setFrameFocusPage("main");
        }
    }else if(currentFocusFiled == focusFiled_sleepMenu)
    {
        currentFocusFiled = focusFiled_Smart;

        nextFocusObj = document.getElementById(smartDivId["sleeptimer"]);
        $("sleepMenu").style.visibility = "hidden";
        nextFocusBorderEle = document.getElementById(nextFocusObj.getAttribute('data-focus_id'));
        switchLoseFocusOnPage(currentFocusObj, currentFocusBorderEle);
        switchFocusOnPage(nextFocusObj, nextFocusBorderEle);
        currentFocusObj = nextFocusObj;
        currentFocusBorderEle = nextFocusBorderEle;
    }
}

function jumpToFootball()
{
    footballMode = !footballMode;
    top.g_setting.footballMode = footballMode;
    if(footballMode)
    {
        $(smartDivId["football"]).getElementsByTagName("img")[0].src ="images/"+smartKeyColor+"/smart_football_on.png";
    } else
    {
        $(smartDivId["football"]).getElementsByTagName("img")[0].src ="images/"+smartKeyColor+"/smart_football.png";
    }
    if(getSportModeType() && top.preTempPage != "media")
    {
        if(isHomeProcess)
        {
            sessionStorage.setItem("NewSanPrePage","");
            top.$("otherPage").src ="";
            top.$('main').src = "";
        }else
        {
            top.$('main').src = "";
        }
        tcl.channel.requestMute(0);
        turnOnSportMode();
    }
}

function getSportModeType()//return: [0]simply [1]full
{
    if("TRUE" != setting.getProperty("ro.sita.model.LiveTV.FullySportsMode", "FALSE"))
    {
        return 0;
    }
    //"top.g_pvr.getUsbStatus() != 1"		-> 	no usb
    //"!top.g_setting.footballMode"		-> 	sportMode is off
    //"top.g_channel.inputSource != 1"	-> 	current source is not dtv
    if(top.g_pvr.getUsbStatus() != 1 || !top.g_setting.footballMode || top.g_channel.inputSource != 1)
    {
        return 0;
    }
    else
    {
        return 1;
    }
}

function turnOnSportMode()
{
    top.g_previousHtmlPage = "channelPlay.html";
    if(top.timeShiftStatusFlag == 1)
    {
        top.g_pvr.timeshiftStop();
        top.g_pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
        top.timeShiftStatusFlag = 0;
        top.$("globleShow").contentWindow.hiddenTimeShift();
        top.g_pvr.returnToLive();//返回实时播放页面,相当于切台。
    }
    if(top.recordStatusFlag==1)
    {
        top.recordStatusFlag = 0;
        top.g_pvr.recordStop();
        top.g_pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
        top.$("globleShow").contentWindow.hiddenRecord();
        top.pvrCurrentTime = 0;
        top.pvrTotalTime = 2 * 60 * 60;
    }
    top.$('main').src = "pvr/timeshiftInit.html";
    top.$("main").style.display = "block";
    top.$("operatePage").src = "";
    top.requestFocus(top.main, 1);
    top.setFrameFocusPage("main");
}