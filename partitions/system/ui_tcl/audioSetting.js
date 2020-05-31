top.keySetForUI(1);
timeoutInit();
var listItemName = [top.optionOptions[0], top.optionOptions[1], top.optionOptions[2],
				    top.footballModeName, top.optionOptions[3], top.optionOptions[4],
				    top.optionOptions[5], top.optionOptions[6], top.netOptions[9],
				    top.bt_title,top.sysOptions[6],top.optionOptions[7]];
//zk
var audiolistItemName = [top.langMenuTitleText, top.audioDescriptionName[0]];

var picMode = [top.picPreset[0], top.picPreset[1], top.picPreset[2], 
	       top.picPreset[3], top.resetStadium, top.picPreset[4]];
var soundMode = [top.souPreset[0], top.souPreset[1], top.souPreset[2], top.souPreset[3], 
		 top.resetStadium, top.souPreset[4]];
var picFreeze = top.offOn;
var optionOnOff	= top.offOn;
var LocationWords = top.initLocations;
//zk
var audioDescriptionMode = [top.audioDescriptionOptions[1], top.audioDescriptionOptions[2]];

var presetFocusBox = ["images/OP-01-1_Focus.png", "images/OP-01-1_Focus_.png"];
var focus_R_Focus = ["images/arrow/focus_R-Focus.png", "images/arrow/R-Focus.png"];

var setting = top.g_setting;
var channel = top.g_channel;
var pvr 	= top.g_pvr;

var preObjectPop;
//var preObjectPreset;
var spans_preset;

var picModeIndex = 0;
var soundModeIndex = 0;
var picFreezeIndex = 0;
var footballModeIndex = 0;
var locationValue = 0;
//zk
var audioDesIndex = 0;

var presetFocusWidth        = 210;
var itemSelectFocusWidth = 200;
var presetItemMaxNum = 5;      //小菜单下最能多显示的项目个数

var positionV                  = 0;//主界面坐标
var presetPositionH            = 0;//preset 界面焦点坐标

var pic3DModeVal               = 0; //保存pic3DModeVal的值
var pic3DTo2DVal               = 0;//保存pic3DTo2DVal的值
var picLRSwithVal              = 0;//保存picLRSwithVal的值
var picDepthOfFieldVal         = 0;//保存picDepthOfFieldVal的值
var MENU_START 			       = 70;//linxs
var MENU_STEP 			       = 84;//主菜单焦点移动的step
var lis;
var screenMode;
var channelStatus              = 0;
var signalStatus               = 0;
var inputSource 			   = 0;//当前信源
var pvrOpenStatus			   = 0;
var focusType				   ="opitonList";
var pvrDeviceStatus			   = 0;//判断U盘中是否有pvr文件：0 没有，1 有。

var picPresetPosIndex 			= 0;
var soundPresetPosIndex 		= 0;
var picFreezePosIndex			= 0;
var footballModePosIndex		= 0;
var tLinkPosIndex				= 0;
var timeshiftPosIndex			= 0;
var pvrPosIndex					= 0;
var scheduleListPosIndex		= 0;
var miracastPosIndex			= 0;
var bluetoothPosIndex			= 0;
var demoPosIndex			    = 0;
var settingsPosIndex			= 0;
//zk
var audioDesPosIndex 			= 0;
var focusOn					= "audioSetting";				//menu,audioMode;audioDescription
var mainFocus               = ["./images/Focus_Frame/Focus.png","./images/Focus_Frame/Focus-Activation.png"];

var factoryPassword="";   ///add by tyh
var setTimeoutId=0;
var menuList = [
// {name:"picturePreset",param:function(){showAudioLang();},showFlag:1},
// {name:"soundPreset",param:function(){showAudioDesStatus();},showFlag:1},
{name:"audioLanguage",param:function(){showAudioLang();},showFlag:1},
{name:"audioDescription",param:function(){showAudioDesStatus();},showFlag:1},
];

document.onsystemevent = notifyProcess;

function testLog(str)
{
	console.log("--------->   Areos: " + str);
}

function notifyProcess(evt)
{
    var msg = evt.which;
	//全局消息
	switch(msg)
	{	
		//做页面跳转的几个消息处理时要先把otherPage也给隐掉
		case top.E_DLNA_DMR_PUSH_MOVIE://dmr push player
		case top.E_DLNA_DMR_PUSH_MUSIC://dmr push player
		case top.E_DLNA_DMR_PUSH_PICTURE:
		case top.E_DLNA_DMR_PUSH_KODI:
		case top.E_DLNA_DMR_PUSH_YOUTUBE:
		case top.E_CIPLUS_PROGRAM_CHANGE://ci 主动换台发出换台刷新节目信息
		case top.E_POWER_OFF_TIMER://power off timer
		case top.E_POWER_OFF_TIMER_EX:
		case top.E_BOOKING_PLAY_START://booking play start开机时节目预定的时间已过，但是依然要提醒用户做一些切台等操作
		case top.E_BOOKING_RECORD_START://booking record start开机时录制预定已经过期，但是依然要提醒用户切台录制
		case top.E_BOOKING_AHEAD_PLAY_START://booking ahead play start,正常情况下切台提醒，一分钟前提醒
		case top.E_BOOKING_AHEAD_RECORD_START://booking ahead record start正常情况下录制提醒,，一分钟前提醒
		case top.E_CI_DATA_READY://ci data ready
		case top.E_CI_OP_UPDATE_CHANNEL://CMD_UI_NOTIFY_OP_UPDATE_CHANNEL
		case top.E_CI_OP_UPDATE_NIT://CMD_UI_NOTIFY_OP_UPDATE_NIT
		case top.E_CHANNEL_PLAY_END://channel change success end
		case top.E_SCART_CHANGE_INPUT_SRC://scart change start:CMD_UI_NOTIFY_SCART_CHANGE_INPUT_SRC
		case top.E_CI_MHEG_OPEN://MMH打开，需要进入channel_play页面并
		case top.E_DTV_NIT_VERSION_CHANGED://nit refresh notify
			top.document.getElementById('otherPage').src = "";
			top.requestFocus(top.main, 1);
			top.setFrameFocusPage("main");
			top.systemEventProc(evt);
			break;
		case top.E_DTV_SERVICE_PLAY://播放流数据更新
			top.document.getElementById('otherPage').src = "";
			top.g_isShowInfoBar = 1;
			top.requestFocus(top.main, 1);
			top.setFrameFocusPage("main");
			top.document.getElementById('main').src = "channelPlay.html";
			break;
		case top.E_SIGNAL_UNLOCK://unlock signal
		case top.E_PVR_NO_SIGNAL:
		{
			if(signalStatus==1&&inputSource == 1)
			{
				document.location.href = "option.html";
			}
		   	top.systemEventProc(evt);
		}
		break;
		case top.E_SIGNAL_LOCK://lock signal
		{
			if(signalStatus==0&&inputSource == 1)
			{
				document.location.href = "option.html";
			}
		   top.systemEventProc(evt);
		}
		break;
		case top.E_SS_COMMON_VIDEO:
			if(screenMode == 3)
			{
				document.location.href = "option.html";
			}
		case top.E_SS_SCRAMBLED_PROGRAM:// screamble
			document.location.href = "option.html";
		default:
			top.systemEventProc(evt);
			break;
	}
}
/*function notifyProcess(evt)
{
    var msg = evt.which;
	//全局消息
	switch(msg)
	{
		default:
			top.systemEventProc(evt);
			break;
	}
}*/

function initOptionListIndex()
{
	var t = 0;
	picPresetPosIndex 			= t++;
	soundPresetPosIndex 		= t++;
	picFreezePosIndex			= t++;
	footballModePosIndex		= t++;
	tLinkPosIndex				= t++;
	timeshiftPosIndex			= t++;
	pvrPosIndex					= t++;
	scheduleListPosIndex		= t++;
	miracastPosIndex			= t++;
	bluetoothPosIndex			= t++;
    demoPosIndex                = t++;
	settingsPosIndex			= t++;
}

function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyproc;
}

function keyproc(evt)/*接收按键*/
{
	var ret = true;
	var keycode = evt.which;
     
	switch (keycode)
	{
		case top.VK_UP:
		{
			//up
			toUp();
			ret = false;
			break;
		}
			
		case top.VK_DOWN:
		{
			//down
			toDown();
			ret = false;
			break;
		}	
		case top.VK_ENTER:
		{
			//OK 键
			toOK();
			ret = false;
			break;
		}
		case top.VK_RIGHT:
		{
			toRight();
			ret = false;
			break;
		}
		case top.VK_BACK:
		{
			toBack();
			ret = false;
			break;
		}
		case top.VK_LEFT:
		{
			toLeft();
			ret = false;
			break;
		}
		case top.VK_LANG://option
		{
			//top.gg_optionIndex=0;
			top.jumpPage();
			break;
		}
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
		{
			
			if(focusType == "opitonList"&&positionV==0)
			{
				//console.log("\n--------->   Areos: tyh2\n" );
				//开始设置工厂菜单
				if(setTimeoutId == 0)
				{
					//console.log("\n--------->   Areos: tyh3\n" );
					factoryPassword = "" + (keycode - 48);
					setTimeoutId = setTimeout("judgeFactoryPass()",3000);
				}
				else
				{
					//console.log("\n--------->   Areos: tyh4\n" );
					factoryPassword += (keycode - 48);
					if(factoryPassword.length == 4)
					{
						if(top.virtualRemoteState == 1)
						{
							//隐藏虚拟遥控器--lqt
							top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
						}
						clearTimeout(setTimeoutId);
						setTimeoutId = 0;
						judgeFactoryPass();
					}
				}	
			}
			else
			{
				ret = false;
			}
		break;
		}
		default:
			top.keyDownProcess(evt);
		break;
	}
	
	return ret;
}

function $(id)
{
    return document.getElementById(id);
}

function toUp()
{
	if(focusOn == "audioSetting")
	{
		clearOldScroll();
		positionV = positionV <= 0 ? findMaxPosition() : positionV - 1;
		refreshFocusOfMenuList();
		resetScroll();
	}
    else if(focusOn == "audioMode")
    {
        if(audioModeCount > 5)
        {
            if(form_position_h == 0 && offset == 0)
            {
                offset = audioModeCount - 5;
                for(var i = 0; i < 5; i++)
                {
                    listFormLiList[i].innerHTML = langShows[i + offset];
                }
                form_position_h = 4;
            }
            else if(form_position_h==0 && offset > 0)
            {
                offset--;
                for(var i = 0; i < 5; i++)
                {
                    listFormLiList[i].innerHTML = langShows[i + offset];
                }
            }
            else if(form_position_h > 0)
            {
                form_position_h--;
            }
        }
        else
        {
            if(form_position_h == 0)
            {
                form_position_h = audioModeCount - 1;
            }
            else
            {
                form_position_h--;
            }
        }
        $("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
        if(offset > 0)
        {
            $("listUpImg").style.display = "block";
        }
        else
        {
            $("listUpImg").style.display = "none";
        }

        if((offset + 4) >= (audioModeCount - 1))
        {
            $("listDownImg").style.display = "none";
        }
        else
        {
            $("listDownImg").style.display = "block";
        }
        top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
    }
    else if(focusOn == "audioDescription")
    {
        if(form_position_h == 0)
        {
            form_position_h = offOnWords.length - 1;
        }
        else
        {
            form_position_h--;
        }
        $("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
        top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
    }
}

function toDown()
{
    if(focusOn=="audioSetting")
    {
		clearOldScroll();
		positionV = positionV >= findMaxPosition() ? 0 : positionV + 1;
		refreshFocusOfMenuList();
		resetScroll();
    }
    else if(focusOn == "audioMode")
    {
        if(audioModeCount > 5)
        {
            if(form_position_h == 4 && (form_position_h + offset) >= (audioModeCount - 1))
            {
                offset=0;
                for(var i = 0; i < 5; i++)
                {
                    listFormLiList[i].innerHTML = langShows[i+offset];
                }
                form_position_h = 0;
            }
            else if(form_position_h == 4 && (form_position_h + offset) < (audioModeCount - 1))
            {
                offset++;
                for(var i = 0; i < 5; i++)
                {
                    listFormLiList[i].innerHTML = langShows[i+offset];
                }
            }
            else
            {
                form_position_h++;
            }
        }
        else
        {
            if(form_position_h >= (audioModeCount - 1))
            {
                form_position_h = 0;
            }
            else
            {
                form_position_h++;
            }
        }
        $("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
        if(offset > 0)
        {
            $("listUpImg").style.display = "block";
        }
        else
        {
            $("listUpImg").style.display = "none";
        }

        if((offset + 4) >= (audioModeCount - 1))
        {
            $("listDownImg").style.display = "none";
        }
        else
        {
            $("listDownImg").style.display = "block";
        }
        top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
    }
    else if(focusOn == "audioDescription")
    {
        if(form_position_h == 0)
        {
            form_position_h = offOnWords.length - 1;
        }
        else
        {
            form_position_h--;
        }
        $("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
        top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
    }
}
function toLeft()
{
	if(focusOn == "audioSetting")
	{
		top.jumpPage();	 
	}
    else if(focusOn == "audioMode")
	{
		toBack();
	}
    else if(focusOn == "audioDescription")
    {
        toBack();
    }
}

function toRight()
{
    if(focusOn == "audioSetting")
	{
		toOK();
	}
	else if(focusOn == "audioMode")
	{
		toBack();
	}
    else if(focusOn == "audioDescription")
    {
        toBack();
    }
}
function toOK()
{
    if(focusOn == "audioSetting")
    {
        findFunction(positionV);
    }
    else if(focusOn == "audioMode")
    {
        $("popListFocus").src=mainFocus[0];
        $("listForm").style.display = "none";
        audioModeIndex = form_position_h + offset;
        console.log("zhaokun test ----------form_position_h:"+form_position_h+"---offset:"+offset+"---audioModeIndex:"+audioModeIndex);
        //$("audioLanguage").innerHTML = langShows[audioModeIndex];
        currentChannel.setProgramAudioMode(audioModeIndex);
        offset = 0;
        focusOn = "audioSetting";
    }
    else if(focusOn == "audioDescription")
    {
        console.log("zhaokun test ----------form_position_h:"+form_position_h);
        $("popListFocus").src=mainFocus[0];
        $("listForm").style.display = "none";
        speakerValue = form_position_h;
        setting.speakerType = speakerValue;
        setting.headphoneType = speakerValue;
        offset = 0;
        focusOn = "audioSetting";
    }
}

function doSettings()
{
	top.jumpToOperatePage("index.html");
}

function showAudioLang()
{
    initAudioMode();
}

/*
 描述：获取sound type的信息,并初始化相关的变量
 参数：
 全局变量：soundTypeInfo；soundTypeItems；
 */
function initSoundType()
{
    soundTypeInfo = setting.getSoundType();
    soundTypeItems = soundTypeInfo.items.split("/");
    soundTypeLength = soundTypeInfo.length;
}

var audioModeIndex 			= 0;					//默认为audio language为None
var audioModeCount = 0;
function getAudioInfo()
{
    //channel.testLog("in getAudioInfo");
    var audioInfo = currentChannel.programAudioMode();
    audioModeCount = audioInfo.audioSelCount;
    audioModeIndex	= audioInfo.curAudioIdx;
    //channel.testLog("in getAudioInfo language list = " + audioInfo.langCodeList);
    var langs = audioInfo.langCodeList.split("/");
    /**********处理audio mode中的语言问题start************/
    var count = 1;
    var nowIndex = 0;
    var afterIndex = 0;
    var beforeIndex = 0;
    var isExist = 0;
    for(nowIndex = 0; nowIndex < audioModeCount; nowIndex++)
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
            for(afterIndex = ( nowIndex + 1); afterIndex < audioModeCount; afterIndex++)//判断后面是否有相同的语言，如果有需要做特殊处理
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

function initAudioMode() //初始化info 信息中的audio
{
    $("listForm").style.display="block";
    console.log("zhaokuntest--------------audioModeIndex:"+audioModeIndex+"----audioModeCount:"+audioModeCount);
    if(audioModeIndex >= audioModeCount || audioModeCount <= 0)
    {
        return;
    }

    // $("thdListFocus").src=mainFocus[1];
    $("popListFocus").src=mainFocus[1];
    if(audioModeCount > 5)
    {
        if(audioModeIndex >= 5)
        {
            form_position_h = 4;
            offset = audioModeIndex - form_position_h;
        }
        else
        {
            form_position_h = audioModeIndex;
            offset = 0;
        }
    }
    else
    {
        form_position_h = audioModeIndex;
        offset = 0;
    }
    console.log("zhaokuntest-------------langShows:"+langShows[audioModeIndex]+"---audioModeCount:"+audioModeCount);
    // var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
    // var leftOffset = 778;
    var topOffset = MENU_START + SUB_MENU_STEP*list_position_h - 10;
    var leftOffset = 506;//778;
    top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,langShows,audioModeCount,form_position_h,offset);
    focusOn = "audioMode";
}


function showLocationItem()
{
    var divs = lis[demoPosIndex].getElementsByTagName("div");
    divs[0].innerHTML = LocationWords[locationValue];
}

function findFunction(postion)
{
	var num = -1;
	for(var i = 0; i < menuList.length; i++)
	{
		if(menuList[i].showFlag == 1)
		{
			num++;
		}
		if(num == postion)
		{
			menuList[i].param();
			break;
		}
	}
}

function findName(postion)
{
	var num=-1;
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag==1)
		{
			num++;
		}
		if(num==postion)
		{
			return menuList[i].name;
		}
	}
}

function findPosition(name)
{
	var position=0;
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].name==name)
		{
			break;
		}
		if(menuList[i].showFlag==1)
		{
			position++;
		}
	}
	return position;
}
function findRealPosistion(position)
{
	var showNum=-1;
	var i=0;
	for(;i<menuList.length;i++)
	{
		if(menuList[i].showFlag==1)
		{
			showNum++;
		}
		if(showNum==position)
		{
			break;
		}
	}
	return i;
}
function findMaxPosition()
{
	var num = -1;
	for(var i = 0; i < menuList.length; i++)
	{
		if(menuList[i].showFlag == 1)
		{
			num++;
		}
	}
	return num;
}

function findPositionOfTagIndex(index)
{
	var num = -1;
	for(var i = 0;(i <= index) && (i < menuList.length); i++)
	{
		if(menuList[i].showFlag == 1)
		{
			num++;
		}
	}
	return num;
}

function returnMenuList()
{
	//$("preSetBar").style.display = "none";
	$("smallPopWin").style.display = "block";
	//$("preSetSelectFocus").src = presetFocusBox[0];
	focusType = "opitonList";
    // showFootballModeItem();
    // showPicPresetItem();
    // showSoundPresetItem();
    // showPictureFreezeItem();
    // showLocationItem();
    // changeFoucusColor();
    // if(locationValue > 0)
    // {
    //     menuList[picPresetPosIndex].showFlag = 0;
    // }
    // else
    // {
    //     menuList[picPresetPosIndex].showFlag = 1;
    // }

    for(var i = 0; i < menuList.length; i++)
    {
        lis[i].style.display = menuList[i].showFlag ? "block" : "none";
    }
}

function toBack()
{
	if(focusOn == "audioSetting")
    {
        top.jumpPage();
        return;
    }
	else if(focusOn == "audioMode")
	{
        $("popListFocus").src=mainFocus[0];
        $("listForm").style.display = "none";
        focusOn = "audioSetting";
        offset = 0;
	}
    else if(focusOn == "audioDescription")
    {
        $("popListFocus").src=mainFocus[0];
        $("listForm").style.display = "none";
        focusOn = "audioSetting";
        offset = 0;
    }

	returnMenuList();
}

function refreshFocusOfMenuList()
{
	preObjectPop = lis[findRealPosistion(positionV)];
	$("popListFocus").style.top = MENU_START + positionV * MENU_STEP + "px";
}

function changeFoucusColor()
{
	/*
	var span = preObjectPop.getElementsByTagName("span");
	var divs = preObjectPop.getElementsByTagName("div");
	preObjectPreset.style.color = "#666";	
	preObjectPreset.style.fontSize = "22px";	
	spans_preset[presetPositionH + 1].style.color = "#fff";
	spans_preset[presetPositionH + 1].style.fontSize = "24px";
	preObjectPreset = spans_preset[presetPositionH + 1];

	top.doElementScroll(spans_preset, presetPositionH);
	*/
}




var offset				= 0;					//列表弹出框中的焦点的真实位置和焦点显示位置的差值，比如audio language中offset = audioModeIndex - form_position_h

var SUB_MENU_START 			= 160;					//二级级菜单焦点移动起始位置
var SUB_MENU_STEP 			= 70;					//二级级主菜单焦点移动的step
var FORM_STEP				= 80;					//弹出框焦点移动的step
var PROGRESS_WIDTH			= 300;
var EXTRA_PROGRESS_WIDTH	= 900;					// 弹出式进度条的宽度
var mainFocus               = ["./images/Focus_Frame/Focus-1.png","./images/Focus_Frame/Focus-2.png"];
var list_position_h 		= 0;					//主界面坐标
var form_position_h			= 0;					//弹出框焦点位置

var speakerStatus			= 0;
var offOnWords				= top.offOn;

function showAudioDesStatus()
{
    $("listForm").style.display="block";
    //$("thdListFocus").src=mainFocus[1];
    $("popListFocus").src=mainFocus[1];
    speakerValue = setting.speakerType;
    headphoneValue = setting.headphoneType;
    form_position_h = speakerValue;

    var topOffset = 150;//MENU_START + SUB_MENU_STEP*list_position_h - 10;
    var leftOffset = 506;//778;
    top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,offOnWords.length,form_position_h,0);
    focusOn = "audioDescription";
}




//for schedule list
function backFromBookingOrSchedule()
{
	top.Log("in option backFromBookingOrSchedule");
	return;

}


function clearOldScroll()
{
	setScrollAttribute(preObjectPop.getElementsByTagName("span")[0],0);
	setTimeout(function(){resetScrollHtmlInner(preObjectPop.getElementsByTagName("span")[0]);},1);
	setScrollAttribute(preObjectPop.getElementsByTagName("div")[0],0);
	setTimeout(function(){resetScrollHtmlInner(preObjectPop.getElementsByTagName("div")[0]);},1);
}

function resetScroll()
{
	setScrollAttribute(preObjectPop.getElementsByTagName("span")[0],1);
	setScrollAttribute(preObjectPop.getElementsByTagName("div")[0],1);
}

function isOverflowed(element)
{
    return element.scrollWidth > element.clientWidth;
}

/*
把整个列表属性更改，如果当前焦点选项真实句子长度长于预留的长度则需要做滚动显示
htmlTag:内容标签；scrollEnable：1 当前选项为焦点，可能需要做动画，0 当前项为非焦点，一定不会做滚动动画
*/
function setScrollAttribute(htmlTag,scrollEnable)
{
	htmlTag.setAttribute("contentText",htmlTag.innerHTML);
	if(scrollEnable && isOverflowed(htmlTag))//如果当前焦点选项真实句子长度长于预留的长度则需要做滚动显示
	{
		htmlTag.style.overflowX = "-webkit-marquee";
		htmlTag.style.textOverflow = "clip";
	}
	else
	{
		htmlTag.style.overflowX = "hidden";
		htmlTag.style.textOverflow = "ellipsis";
	}
}
/*
重新为整个列表属性更改完成的列表赋值
htmlTagList:内容标签列表；ListLength：当前有内容的列表标签的个数
*/
function resetScrollHtmlInner(htmlTag)
{
	htmlTag.innerHTML = htmlTag.getAttribute("contentText");
}

function initdata()
{
	preObjectPop=lis[positionV];
	//preObjectPreset=spans_preset[presetPositionH+1];
}
function initVarValue()
{
	picModeIndex = pictureModeTransform(setting.pictureMode, 0);// = 0;fix me
	soundModeIndex = soundModeTransform(setting.soundPreset, 0);//get value from mw
	picFreezeIndex = setting.freeze;
	footballModeIndex = setting.footballMode;//[0]Off [1]On
	screenMode = channel.currentScreenSaverMode;
	channelStatus              = channel.channelProgramStatus();
    signalStatus               = channel.currentSignalStatus;
    locationValue   = setting.location;
	//top.g_channel.testLog("zenglm0000000000000000000 picture index is "+picModeIndex+"sound index is "+	soundModeIndex);
}
//add xiaoxu 20140704


function refreshAllMenuListShow()
{
	/*$("pvrTagImg").style.visibility = pvrDeviceStatus ? "visible" : "hidden";*/

	var spans = $("smallPopWin").getElementsByTagName("span");
	for(var i = 0; i < audiolistItemName.length; i++)
	{
		spans[i].innerHTML = audiolistItemName[i];
		//spans[i].style.color="#666";
	}
}



var listFormLiList;
var currentChannel;
var popListFirstSpans;
var langShows = new Array(20); //国家显示文字数组

function init()
{
    top.initTextDirection(window);
	// initOptionListIndex();

	try
	{
		//面板按键处理场景设置
		setting.contextOf5in1 = top.CONTEXT_MENU_SELECT;
		lis = $("smallPopWin").getElementsByTagName("li");
		//spans_preset = $("preSetBar").getElementsByTagName("span");
		$("preSetSelectFocus").src = presetFocusBox[0];
		inputSource = channel.inputSource;//当前信源
		// pvrOpenStatus = top.g_factory.pvrOpenStatus;
		// pvrDeviceStatus = pvr.getPvrDeviceStatus();
		addMouseListener();
		// initdata();
		//signalStatus=1;
/*		initVarValue();	*/

        var spans = $("smallPopWin").getElementsByTagName("span");
        for(var i = 0; i < audiolistItemName.length; i++)
        {
            spans[i].innerHTML = audiolistItemName[i];
            //spans[i].style.color="#666";
        }

        popListFirstSpans = $("smallPopWin").getElementsByTagName("popListFirPro");
        listFormLiList = $("listForm").getElementsByTagName("li");

		//顺序不能颠倒
		// refreshAllMenuListShow();
		/*backFromOptionTlink();
		if(top.g_temp == "miracast")
		{
			positionV = findPosition("miracast");
		}
		else if(top.g_temp == "bluetooth")
		{
			positionV = findPosition("bluetooth");
		}	
        else if(top.g_temp=="scheduleList")
        {
            positionV=findPosition("scheduleList");
        }*/
        speakerValue = setting.speakerType;
        currentChannel = channel.getCurrentChannelInfo();
        getAudioInfo();

		top.g_temp ="option";
		refreshFocusOfMenuList();
		resetScroll();
	}catch(er)
	{
		console.log("option init"+er);
	}
}

//add chenhua 2014.5.14
function uninit()
{
	if(top.g_temp=="option")
		top.g_temp ="";
    if (setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1")!="0")
    {
        setting.setMEMC(1);
    }
	top.Log("in option uninit");
	if(focusType=="picPreset")
	{
		if(picModeIndex != presetPositionH)
		setting.previewPictureMode(pictureModeTransform(picModeIndex, 1));
	}
	if(focusType=="picFreeze")
	{
		setting.freeze=picFreezeIndex; 
	}
	top.$("main").style.display = "block";
}
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	var Listlength = findMaxPosition();
	for(var i = 0; i <= Listlength; i++)
	{
		lis[i].setAttribute("newAttr",i);
		lis[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusType=="opitonList")
				{
					var number = findPositionOfTagIndex(parseInt(this.getAttribute("newAttr")));
					if(number >= 0)
					{
						clearOldScroll();
						positionV = number;
						refreshFocusOfMenuList();
						resetScroll();
						toOK();
					}
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	/*
	for(var i = 1; i < 6; i++)
	{
		spans_preset[i].setAttribute("newAttr",i);
		spans_preset[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusType == "picPreset")
				{
					if(parseInt(this.getAttribute("newAttr")) < 6)
					{
						presetPositionH = parseInt(this.getAttribute("newAttr")) - 1;
						changeFoucusColor();
						$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
						picModeIndex = presetPositionH;
						//setting.pictureMode=presetPositionH;  //fix me
						toOK();
					}
				}
				else if(focusType == "soundPreset")
				{
					if(parseInt(this.getAttribute("newAttr")) < 6)
					{
						presetPositionH = parseInt(this.getAttribute("newAttr")) - 1;
						changeFoucusColor();
						$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
				
						soundModeIndex = presetPositionH;
						//setting.soundPreset = soundModeTransform(presetPositionH, 1);  //fix me
						toOK();
					}
				}
				else if (focusType == "picFreeze")
				{
					if(parseInt(this.getAttribute("newAttr")) < 3)
					{
						presetPositionH = parseInt(this.getAttribute("newAttr")) - 1;
						changeFoucusColor();
						$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
						//setting.freeze=presetPositionH;  //fix me
						toOK();
					}
				}
				else if(focusType == "footballMode")
				{
					presetPositionH = parseInt(this.getAttribute("newAttr")) - 1;
					changeFoucusColor();
					$("preSetSelectFocus").style.left = 305 + presetPositionH * presetFocusWidth + "px";
					toOK();
				}	
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	*/
}


