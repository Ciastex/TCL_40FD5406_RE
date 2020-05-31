var item_setting = [top.souPreset[0], top.souPreset[1], top.souPreset[2], top.souPreset[3], 
		 top.resetStadium, top.souPreset[4]];
var titleSetting = [top.souOptions[0]];
var other_timer = 0;
var positionV = 0;
var setting = top.g_setting;
var presetFocusWidth = 100;
var time = 0;

var optionList = [
    {
        name: "0", param: function () {onItem(0);}, showFlag: 1
    },
    {
        name: "1", param: function () {onItem(1);}, showFlag: 1
    },
    {
        name: "2", param: function () {onItem(2);}, showFlag: 1
    },
    {
        name: "3", param: function () {onItem(3);}, showFlag: 1
    },
    {
        name: "4", param: function () {onItem(4);}, showFlag: 1
    },
    {
        name: "5", param: function () {onItem(5);}, showFlag: 1
    }
];

function soundModeTransform(preMode, type)//type[0]: mw to ui; [1]ui to mw
{
    var aftMode = preMode;
    if(type)//ui to mw
    {
	    if(4 == preMode)
	    {
	        aftMode = 6;
	    }
	    else if(5 == preMode)
	    {
	        aftMode = 4;
	    }
	}
	else//mw to ui
	{
		if(6 == preMode)
	    {
	        aftMode = 4;
	    }
	    else if(4 == preMode)
	    {
	        aftMode = 5;
	    }
	}
    return aftMode;
}

function initVarValue()
{
    positionV = soundModeTransform(setting.soundPreset, 0);
}

function onItem(value)
{
	setting.soundPreset = soundModeTransform(value, 1);
    currentSoundMode = value;
}
function previewItem(value)
{
	setting.previewSoundEffect(soundModeTransform(value, 1));
}
		
function isOverflowed(element)
{
    //console.log("isOverflowed:element.scrollWidth="+element.scrollWidth +"element.clientWidth="+element.clientWidth);
    if (element.scrollWidth > element.clientWidth)
    {
        element.setAttribute("class", "marquee");
    }
}
function init()
{
    top.initTextDirection(window);
    initCommonSetting();
    initVarValue();
    currentSoundMode = positionV;
    initView();
    checkShowOption();
    showOptionList();
    top.ttsLog("ttsStr="+titleSetting[0]+","+ item_setting[currentSoundMode]+", selected");
    top.setTTSSay(top.SPEECH_TYPE_FLUSH,(titleSetting[0]+","+ item_setting[currentSoundMode]+", selected"));
    addMouseListener();
}

function initCommonSetting()
{
    top.keySetForUI(1);
    top.stopTimeout();
    setting.contextOf5in1 = top.CONTEXT_MENU_SELECT;
    top.preTempPage = top.g_temp;
    top.g_temp = "sleep";
}

function initView()
{
    var spans = $("preSetBarSleep").getElementsByTagName("span");//picPreset[pictureMode];
    $("preSetOptionSleep").innerHTML = titleSetting[0];
    isOverflowed($("preSetOptionSleep"));
    for (var i = 0; i < optionList.length; i++)
    {
        spans[i + 1].innerHTML = item_setting[i];
    }
    $("preSetSelectFocusSleep").style.top = 120 + positionV * presetFocusWidth + "px";
    other_timer = setTimeout("hiddenOther()", 5000);
}

function checkShowOption()
{
    for (var i = 0; i < optionList.length; i++)
    {
        optionList[i].showFlag = 1;
    }
}

function showOptionList()
{
    var spans = $("preSetBarSleep").getElementsByTagName("span");
    for (var i = 0; i < optionList.length; i++)
    {
        if (optionList[i].showFlag == 1)
        {
            spans[i].style.display = "block";
        }
        else
        {
            spans[i].style.display = "none";
        }
    }
}
function uninit()
{
    top.setTTSSay(top.SPEECH_TYPE_FLUSH,"");
    if (top.appOpenFlag)
    {
        top.keySetForUI(0);
    }
    if (top.preTempPage != "media" && top.preTempPage != "homePage" && top.g_temp != "quickMenu")
    {
        top.$("main").src = "channelPlay.html";
    }
    top.g_temp = top.preTempPage;
    top.preTempPage = "";
    top.timeoutFuc.timeoutEnable = 1;
    previewItem(soundModeTransform(setting.soundPreset, 0));
}
function hiddenOther()
{
    clearTimeout(other_timer);
    top.$('otherPage').src = "";
    if (top.g_temp == "homePage" || top.preTempPage == "homePage")
    {
        top.resumeFocus();
        top.setFrameFocusPage("main");
    }
    else
    {
        top.document.getElementById('main').src = "channelPlay.html";
        top.$("main").style.display = "block";
        top.requestFocus(top.main, 1);
        top.setFrameFocusPage("main");
    }
}

function $(id)
{
    return document.getElementById(id);
}

document.onkeydown = keyproc;

function keyproc(evt)
{
    top.g_previousHtmlPage = "channelPlay.html";
    var keycode = evt.which;
    //快捷键处理
    switch (keycode)
    {
        case top.VK_POWER://power
        case top.VK_3D://3d
        case top.VK_TV://tv
        case top.VK_SOURCE://source
        case top.VK_ECO://eco
        case top.VK_NETFLIX:
        case top.VK_GLOBOPLAY:
            top.keyDownProcess(evt);
            return;
        case top.VK_VOLUME_UP://volume up
        case top.VK_VOLUME_DOWN://volume down
            top.document.getElementById('main').src = "channelPlay.html";
            top.keyDownProcess(evt);
            return;
        case top.VK_MUTE://mute
        case top.VK_INFO://info
        case top.VK_CHANNEL_UP://channel up
        case top.VK_CHANNEL_DOWN://channel down
        case top.VK_OPTION://option
        case top.VK_GUIDE://guide
        case top.VK_PRE_CH://pre-ch
        case top.VK_FAV://fav
        case top.VK_LIST://list
        case top.VK_ZOOM_DOWN://zoom-
        case top.VK_ZOOM_UP://zoom+
	 case top.VK_FREEZE:
	 case top.VK_TUNER:
	 case top.VK_PIC:
        case top.VK_SLEEP:
	 case top.VK_MTS:
 	top.keyDownProcess(evt);
            return;
        case top.VK_LANG://language
        case top.VK_SUBTITLE://subtitle
        case top.VK_TELETEXT://text
        case top.VK_RECORD://record
        case top.VK_PLAY_PAUSE://pause/play timeshift
        case top.VK_PAUSE:
        case top.VK_PLAY:
            top.specialKeyDownProcess(evt);
            return;
        case top.VK_ENTER:
        {
            //OK 键
            toOK();
            ttsRead();
            ret = false;
            break;
        }
        case top.VK_UP:
            toUp();
            ttsRead();
            ret = false;
            break;
        case top.VK_DOWN:
            toDown();
            ttsRead();
            ret = false;
            break;
	 case top.VK_SOUND:
        case top.VK_BACK: //back
        case top.VK_EXIT://exit
            top.$('otherPage').src = "";
            clearTimeout(other_timer);
            if (top.g_temp == "homePage" || top.preTempPage == "homePage")
            {
                top.resumeFocus();
                top.setFrameFocusPage("main");
            }
            else
            {
                top.document.getElementById('main').src = "channelPlay.html";
                top.$("main").style.display = "block";
                top.requestFocus(top.main, 1);
                top.setFrameFocusPage("main");
            }
            break;
        case top.VK_HOME:
        case top.VK_MENU:
            top.keyDownProcess(evt);
            break;
        default:
            break;
    }
}
document.onsystemevent = notifyProcess;
function notifyProcess(evt)
{
    var msg = evt.which;
    //全局消息
    switch (msg)
    {
        case top.E_DTV_SERVICE_PLAY://播放流数据更新
            top.g_isShowInfoBar = 1;
            top.document.getElementById('main').src = "channelPlay.html";
            break;
        default:
            top.systemEventProc(evt);
            break;
    }
}
function toUp()
{
    if (findName(positionV) == findFirstName())
    {
        positionV = findPosition(findLastName());
    }
    else
    {
        positionV--;
    }
    moveFocus();
	    previewItem(positionV);	

}
function toDown()
{
    if (findName(positionV) == findLastName())
    {
        positionV = findPosition(findFirstName());
    }
    else
    {
        positionV++;
    }
    moveFocus();
	    previewItem(positionV);	
}
function toOK()
{
    executeFunction(positionV);
    clearTimeout(other_timer);
    other_timer = setTimeout("hiddenOther()", 5000);
}

function addMouseListener()
{
    document.body.onmousedown = function (evt)
    {
        evt.preventDefault();
        if (evt.button == 2)
        {
            if (top.g_temp == "homePage")
            {
                top.$("main").contentWindow.focusType = top.$("main").contentWindow.preFocusType;
                top.$('otherPage').src = "";
            }
            else
            {
                top.jumpPage();
            }
        }
        ;//right key
    }
    var spans = $("preSetBarSleep").getElementsByTagName("span");
    for (var i = 0; i < 9; i++)
    {
        spans[i + 1].setAttribute("newAttr", i);
        spans[i + 1].onmousedown = function (evt)
        {
            if (evt.button == 0)
            {//left key
                positionV = parseInt(this.getAttribute("newAttr"));
                $("preSetSelectFocusSleep").style.top = 120 + positionV * presetFocusWidth + "px";
                toOK();
            }
        }
    }
}

function findName(postion)
{
    var num = -1;
    for (var i = 0; i < optionList.length; i++)
    {
        if (optionList[i].showFlag == 1)
        {
            num++;
        }
        if (num == postion)
        {
            return optionList[i].name;
        }
    }
}

function findLastName()
{
    for (var i = optionList.length - 1; i >= 0; i--)
    {
        if (optionList[i].showFlag == 1)
        {
            return optionList[i].name;
        }
    }
}

function findFirstName()
{
    for (var i = 0; i < optionList.length; i++)
    {
        if (optionList[i].showFlag == 1)
        {
            return optionList[i].name;
        }
    }
}

function moveFocus()
{
    $("preSetSelectFocusSleep").style.top = 120 + positionV * presetFocusWidth + "px";
    clearTimeout(other_timer);
    other_timer = setTimeout("hiddenOther()", 5000);
}

function executeFunction(positionTemp)
{
    var num = -1;
    for (var i = 0; i < optionList.length; i++)
    {
        if (optionList[i].showFlag == 1)
        {
            num++;
        }
        if (num == positionTemp)//找到此位置
        {
            optionList[i].param();//执行函数
            break;
        }
    }
}

function findPosition(name)
{
    var position = 0;
    for (var i = 0; i < optionList.length; i++)
    {
        if (optionList[i].name == name)
        {
            break;
        }
        if (optionList[i].showFlag == 1)
        {
            position++;
        }
    }
    return position;
}

var currentSoundMode;
function ttsRead()
{
    if(0 == top.g_setting.ttsSwitch)
    {
        top.ttsLog("ttsSwitch is off");
        return;
    }
    var ttsStr = "";
    var currentStatus = "";
    var currentName = findName(positionV);
    var ttsName = "";

    function isSelected(selectedFlag)
    {
        if(selectedFlag)
        {
            currentStatus = currentStatus + ", selected";
        }
        else
        {
            currentStatus = currentStatus + ", not selected";
        }
    }

    currentStatus = item_setting[parseInt(currentName)];
    isSelected(currentSoundMode == parseInt(currentName));
    ttsStr = ttsName + currentStatus;
    if("" != ttsStr)
    {
        top.ttsLog("ttsStr=" + ttsStr);
        top.setTTSSay(top.SPEECH_TYPE_FLUSH, ttsStr);
    }
}