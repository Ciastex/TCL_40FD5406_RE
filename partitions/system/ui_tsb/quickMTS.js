var titleSetting = [top.souOptions[8],top.souOptions[9]];
var soundTypeWords 	= top.souSoundType;
var other_timer = 0;
var positionV = 0;
var setting = top.g_setting;
var channel	= top.g_channel;
var pvr     = top.g_pvr;
var presetFocusWidth = 100;
var time = 0;
var soundTypeInfo;									
var soundTypeItems;	
var mtsLength = 0;
var langsCount = 0;
var langShows = new Array(20);
var currentChannel;
var audioModeCount = 0;
var audioModeIndex = 0;
var inputSource = channel.inputSource;
var offset						= 0;
var spans;

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
    },
    {
        name: "6", param: function () {onItem(6);}, showFlag: 1
    },    
    {
        name: "7", param: function () {onItem(7);}, showFlag: 1
    },
    {
        name: "8", param: function () {onItem(8);}, showFlag: 1
    },
    {
        name: "9", param: function () {onItem(9);}, showFlag: 1
    },
    {
        name: "10", param: function () {onItem(10);}, showFlag: 1
    },
    {
        name: "11", param: function () {onItem(11);}, showFlag: 1
    },
    {
        name: "12", param: function () {onItem(12);}, showFlag: 1
    },  
    {
        name: "13", param: function () {onItem(13);}, showFlag: 1
    },    
    {
        name: "14", param: function () {onItem(14);}, showFlag: 1
    },
    {
        name: "15", param: function () {onItem(15);}, showFlag: 1
    },
    {
        name: "16", param: function () {onItem(16);}, showFlag: 1
    },    
    {
        name: "17", param: function () {onItem(17);}, showFlag: 1
    },
    {
        name: "18", param: function () {onItem(18);}, showFlag: 1
    },
    {
        name: "19", param: function () {onItem(19);}, showFlag: 1
    },
];
function getAudioInfo()
{
    if (channel.checkhbbtvStatus() >0)//调hbbtv音轨接口
    {
        var info =setting.getHbbtvMediaAudioLanguageInfo;
        var infoItem = info.split(";");
        langsCount = infoItem[0];
        console.log("====huangzhming hbbtvStatus="+channel.checkhbbtvStatus()+" langsCount="+langsCount);
        if(langsCount >0){
            mtsLength = langsCount;
            var langs = info.split(";");
            positionV = infoItem[1];
            langs.splice(0,2);
        }
    }
    else//DTV音轨接口
    {
        currentChannel= channel.getCurrentChannelInfo();
        var audioInfo = currentChannel.programAudioMode();
        mtsLength = audioInfo.audioSelCount;
        if(top.timeShiftStatusFlag)
        {
            positionV	= pvr.getVideoSoundTrackIndex();
        }
        else
        {
            positionV	= audioInfo.curAudioIdx;
        }
        console.log("positionV is "+positionV);
        var langs = audioInfo.langCodeList.split("/");
    }
	var count = 1;
	var nowIndex = 0;
	var afterIndex = 0;
	var beforeIndex = 0;
	var isExist = 0;
	for(nowIndex = 0; nowIndex < mtsLength; nowIndex++)
	{
		for(beforeIndex = 0; beforeIndex < nowIndex; beforeIndex++)//判断先前是否已经对这个数据做过判断
		{
			if(langs[nowIndex] == langs[beforeIndex])
			{
				isExist = 1;
			}
		}
	
		if(isExist)//先前已经做过判断，直接处理下一个数据
		{
			isExist = 0;
			continue;
		}
		else
		{
			for(afterIndex = ( nowIndex + 1); afterIndex < mtsLength; afterIndex++)//判断后面是否有相同的语言，如果有需要做特殊处理
			{
				if(langs[nowIndex] == langs[afterIndex])
				{
					count++;
					if(count == 2)//对第一次的语言做处理
					{
						langShows[nowIndex] = top.all_language[langs[nowIndex]] + 1;
					}
					langShows[afterIndex] = top.all_language[langs[afterIndex]] + count;
				}
			}
			if(count == 1)
			{
				langShows[nowIndex] = top.all_language[langs[nowIndex]];
			}
			count = 1;
		}
	}
}
function initVarValue()
{
	if(inputSource==top.E_INPUT_ATV)
	{
		soundTypeInfo = setting.getSoundType();
		soundTypeItems = soundTypeInfo.items.split("/");
		mtsLength = soundTypeInfo.length;
		positionV=soundTypeInfo.index;
	}
	else
	{
		getAudioInfo();
	}
}

function onItem(value)
{
	if(inputSource==top.E_INPUT_ATV)
	{
		setting.setSoundType(soundTypeInfo.mode,value);
	}
	else
	{
	    if (channel.checkhbbtvStatus() >0 && langsCount >0)
        {
            setting.setHbbtvMediaAudioLanguage(value);
        }
        else
        {
            if(top.timeShiftStatusFlag)
            {
                pvr.setVideoSoundTrackIndex(value);
            }
            else
            {
                currentChannel.setProgramAudioMode(value);
            }
        }
	}
}
function previewItem(value)
{

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
    other_timer = setTimeout("hiddenOther()", 5000);
    initCommonSetting();
    initVarValue();
    checkShowOption(mtsLength);
    currentSoundType = positionV;
    initView(positionV);
    top.ttsLog("ttsStr="+$("preSetOptionSleep").innerHTML+","+ $("preSetBarSleep").getElementsByTagName("span")[positionV+1].innerHTML+", selected");
    top.setTTSSay(top.SPEECH_TYPE_FLUSH,($("preSetOptionSleep").innerHTML+","+ $("preSetBarSleep").getElementsByTagName("span")[positionV+1].innerHTML+", selected"));
    showOptionList();
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

function initView(value)
{
    spans = $("preSetBarSleep").getElementsByTagName("span");//picPreset[pictureMode];
	if(mtsLength>9)
	{
		if(value >= 9)
		{
			positionV = 8;
			offset = value - 8;
		}
		else
		{
			positionV = value;
			offset = 0;
		}
		if(inputSource==top.E_INPUT_ATV)
		{
			$("preSetOptionSleep").innerHTML = titleSetting[1];
			for (var i = 0; i < 9; i++)
			{
				spans[i+1].innerHTML = soundTypeWords[parseInt(soundTypeItems[i+offset],10)];
			}
		}
		else
		{
			$("preSetOptionSleep").innerHTML = titleSetting[0];
			for (var i = 0; i < 9; i++)
			{
				spans[i+1].innerHTML = langShows[i+offset];
			}
		}
	}
	else
	{
		    if(inputSource==top.E_INPUT_ATV)
		    {    
			    $("preSetOptionSleep").innerHTML = titleSetting[1];
			    for (var i = 0; i < mtsLength; i++)
			    {
			        spans[i+1].innerHTML = soundTypeWords[parseInt(soundTypeItems[i],10)];
			    }
		    	}
			else
			{
			    $("preSetOptionSleep").innerHTML = titleSetting[0];
			    for (var i = 0; i < mtsLength; i++)
			    {
			        spans[i+1].innerHTML = langShows[i];
			    }
			}
	}
    isOverflowed($("preSetOptionSleep"));	
    $("preSetSelectFocusSleep").style.top = 120 + positionV * presetFocusWidth + "px";
}

function checkShowOption(value)
{
    for (var i = 0; i <value; i++)
    {
        optionList[i].showFlag = 1;
    }
    for (var i = value; i <optionList.length; i++)
    {
        optionList[i].showFlag = 0;
    }
}

function showOptionList()
{
    var spans = $("preSetBarSleep").getElementsByTagName("span");
	if(mtsLength>9)
	{
		for (var i = 0; i <9; i++)
		{
			spans[i+1].style.display = "block";
		}
	}
	else
	{
	    for (var i = 0; i < optionList.length; i++)
	    {
	        if (optionList[i].showFlag == 1)
	        {
	            spans[i+1].style.display = "block";
	        }
	        else
	        {
	            spans[i+1].style.display = "none";
	        }
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
        case top.VK_SLEEP:
	 case top.VK_SOUND: 
	 case top.VK_PIC:
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
            ret = false;
            break;
        }
        case top.VK_UP:
            toUp();
	    ttsRead();
            ret = false;
            break;
	 case top.VK_MTS:
            toDown();
            executeFunction(positionV+offset);
            ret = false;
            break;
        case top.VK_DOWN:
            toDown();
	    ttsRead();
            ret = false;
            break;
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
	if(mtsLength>9)
	{
		if(positionV == 0 && offset == 0)
		{
			offset = mtsLength - 9;
			positionV = 8;
		}
		else if(positionV==0 && offset > 0)
		{
			offset--;
		}
		else if(positionV > 0)
		{
			positionV--;
		}
		if(inputSource==top.E_INPUT_ATV)
		{
			for (var i = 0; i < 9; i++)
			{
				spans[i+1].innerHTML = soundTypeWords[parseInt(soundTypeItems[i+offset],10)];
			}
		}
		else
		{
			for (var i = 0; i < 9; i++)
			{
				spans[i+1].innerHTML = langShows[i+offset];
			}
		}
	}
	else
	{
	    if (findName(positionV) == findFirstName())
	    {
	        positionV = findPosition(findLastName());
	    }
	    else
	    {
	        positionV--;
	    }
	}
	moveFocus();
}
function toDown()
{
	if(mtsLength>9)
	{
		if(positionV == 8 && (positionV + offset) >= (mtsLength - 1))
		{
			offset=0;
			positionV = 0;
		}
		else if(positionV == 8 && (positionV + offset) < (mtsLength - 1))
		{
			offset++;
		}
		else
		{
			positionV++;
		}
		if(inputSource==top.E_INPUT_ATV)
		{
			for (var i = 0; i < 9; i++)
			{
				spans[i+1].innerHTML = soundTypeWords[parseInt(soundTypeItems[i+offset],10)];
			}
		}
		else
		{
			for (var i = 0; i < 9; i++)
			{
				spans[i+1].innerHTML = langShows[i+offset];
			}
		}
	}
	else
	{
	    if (findName(positionV) == findLastName())
	    {
	        positionV = findPosition(findFirstName());
	    }
	    else
	    {
	        positionV++;
	    }
	}
    moveFocus();
}
function toOK()
{
    clearTimeout(other_timer);
    other_timer = setTimeout("hiddenOther()", 5000);
    executeFunction(positionV+offset);
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
	    currentSoundType = i;
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

var currentSoundType;
function ttsRead()
{
    if(0 == top.g_setting.ttsSwitch)
    {
        top.ttsLog("ttsSwitch is off");
        return;
    }
	var ttsStr = "";
	var currentStatus = "";
	var currentName = findName(positionV + offset);
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

	currentStatus = $("preSetBarSleep").getElementsByTagName("span")[positionV + 1].innerHTML;
	isSelected(parseInt(currentName) == currentSoundType);
	ttsStr = ttsName + currentStatus;
	if("" != ttsStr)
	{
		top.ttsLog("ttsStr=" + ttsStr);
		top.setTTSSay(top.SPEECH_TYPE_FLUSH, ttsStr);
	}
}