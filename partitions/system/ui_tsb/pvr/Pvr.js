top.keySetForUI(1);
var pvrConName         = top.pvrConName;
var disRemindWords     = top.pvrDisRemind;
var remindWords        = [top.yesNo[0],top.yesNo[1],top.pvrRemindWords[0],top.pvrRemindWords[1],top.pvrRemindWords[2],
							top.pvrRemindWords[3],top.pvrRemindWords[4],top.pvrRemindWords[5],top.pvrRemindWords[6],top.pvrRemindWords[7],
							top.pvrRemindWords[8],top.pvrRemindWords[9],top.pvrRemindWords[10]];
var changeChannel     = top.pvrChangeCh;
var changeToPIN8      = top.pvrChangeToPIN8;
var changeToCEC       = top.pvrChangeToCEC;
var guideJump         = top.pvrGuideJump;
var mediaJump         = top.pvrMediaJump;
var other             = top.pvrOther;
var powerOffRemind    = top.pvrPowerOffRemind;

var focusOn = "menu";//menu焦点在pvr主菜单上;noDisk:又有移动存储设备，notAvailable:因信号不对而不可用，主要针对data only,no signal和invalid；notSurpport:screamble 状态下不支持录制；exit焦点在退出提示框，recordedList是否要进入录制节目列表的提示框;noRecordedFile没有录制好的文件，channelChange频道切换提示框;usbRemove:usb 移除;noSpace:没有多余的空间,power 按下power键提示框,pin8 切换信源到scart（AV1），cec 切换信源到HDMI
var recordStatus     = "noRecord";//录制状态：readyRecord第一次进入的时候，recording，pauseRecord
var recordingTimer   = 0;
var showMenuTimer    = 0;
var selectFlag       = 0;//优选择按钮时标记选择项
var powerBlackListFlag = 0;
var tempValue;      
var pvr              = top.g_pvr;
var channel          = top.g_channel;
var setting          = top.g_setting;
document.onsystemevent = notifyProcess;
function notifyProcess(e)
{
    var msg = e.which;
	var value = e.modifiers;//消息携带的参数
	//全局消息
	switch(msg)
	{
		case top.E_DLNA_DMR_PUSH_MOVIE://dmr push movie
		case top.E_DLNA_DMR_PUSH_MUSIC://dmr push music
		case top.E_DLNA_DMR_PUSH_PICTURE:
		case top.E_DLNA_DMR_PUSH_KODI:
		case top.E_DLNA_DMR_PUSH_YOUTUBE:
		case top.E_DTV_NIT_VERSION_CHANGED://nit refresh notify
			top.systemEventProc(e);
			return;
		case top.E_SS_CH_BLOCK:// channel lock
		case top.E_SS_PARENTAL_BLOCK://parental lock
			//底层自动停掉录制和回到直播
			top.systemEventProc(e);
			if(!powerBlackListFlag)//待机录制中
			{
                top.recordStatusFlag = 0;
				top.$("main").src="channelPlay.html";
                top.toPowerOff();
				return;
			}
			if(recordStatus != "noRecord")
			{
				pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
				document.location.href = "channelPlay.html";
			}
			return;
		case top.E_BOOKING_PLAY_START://booking play start开机时节目预定的时间已过，但是依然要提醒用户做一些切台等操作
		case top.E_BOOKING_RECORD_START://booking record start开机时录制预定已经过期，但是依然要提醒用户切台录制
		case top.E_BOOKING_AHEAD_PLAY_START://booking ahead play start,正常情况下切台提醒，一分钟前提醒
		case top.E_BOOKING_AHEAD_RECORD_START://booking ahead record start正常情况下录制提醒,，一分钟前提醒
			///////////////////////////chenhua change start////////////////////////////////
			top.systemEventProc(e);
			///////////////////////////chenhua change start////////////////////////////////
			return;
		case top.E_BOOKING_RECORD_END://booking record end
			top.pvrCurrentTime = pvr.recordingTimeLength();
			console.log(" aa in E_BOOKING_RECORD_ENDrecordStatusFlag is "+top.recordStatusFlag+" pvrCurrentTime is "+top.pvrCurrentTime+" top.pvrTotalTime is "+top.pvrTotalTime+" top.bookingMode is "+top.bookingMode);
			if(recordStatus != "noRecord")
			{
				top.recordStatusFlag = 0;
				pvr.recordStop();
				top.pvrCurrentTime=0;
		       	top.pvrTotalTime=2*60*60;
				showRemind("saveFile");
			}
			if(!powerBlackListFlag)//待机录制中
			{
                top.recordStatusFlag = 0;
				top.$("main").src="channelPlay.html";
                top.toPowerOff();
				return;
			}
			pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			document.location.href = "channelPlay.html";
			return;
		case top.E_PVR_RECORD_END://record end，record异常退出,只需要退出pvr即可
		case top.E_PVR_NO_SIGNAL://pvr no signal
			if(!powerBlackListFlag)//待机录制中
			{
                top.recordStatusFlag = 0;
				top.$("main").src="channelPlay.html";
                top.toPowerOff();
				return;
			}
			pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			document.location.href = "channelPlay.html";
			break;
		case top.E_CI_CARD_INSERTED://CI insert
		case top.E_CI_CARD_REMOVE://CI remove
		case top.E_CI_DATA_READY:// CI data ready
		case top.E_CI_CAM_NAME_READY://ci card name ready
		case top.E_CI_EXIT_CI://exit
		case top.E_CI_UPGR_INPROGRESS:
		case top.E_CI_UPGR_NOT_INPROGRESS://CI update end
		case top.E_CIPLUS_PROGRAM_CHANGE:
		case top.E_CI_OP_UPDATE_INFO:
		case top.E_CI_OP_UPDATE_CHANNEL:
		case top.E_CI_OP_UPDATE_NIT:
		case top.E_CI_MHEG_OPEN:
		case top.E_CI_MHEG_CLOSE:
			//所有ＣＩ消息不做处理
			break;
		case top.E_PVR_DISK_UNPLUG:
		{
			if(top.recordStatusFlag == 1&&focusOn == "menu")
			showRemind("usbRemove");
			break;
		}
		case top.E_PVR_DISK_FULL:
		{
			if(top.recordStatusFlag == 1&&focusOn == "menu")
			showRemind("noSpace");
			break;
		}
		case top.E_READY_TO_CHANGE_SCART:
		{
			if(top.recordStatusFlag == 1&&focusOn == "menu")
			{
				showRemind("pin8");
				tempValue[0]="pin8";
				tempValue[1]=e.modifiers;
			}
			else
			{
				top.systemEventProc(e);
			}
			break;
		}
		case top.E_READY_TO_CHANGE_CEC:
		{
			if(top.recordStatusFlag == 1&&focusOn == "menu")
			{
				showRemind("cec");
				tempValue[0]="cec";
				tempValue[1]=e.modifiers;
			}
			else
			{
				top.systemEventProc(e);
			}
			break;
		}
		case top.E_SS_INVALID_SERVICE:
		{
			if(top.recordStatusFlag == 1&&focusOn == "menu")
			{
				showRemind("notSurport");
			}
			break;
		}
		case top.E_SS_SCRAMBLED_PROGRAM:
		case top.E_SS_DATA_ONLY:
		{
			if(top.recordStatusFlag == 1&&focusOn == "menu")
			{
				showRemind("notAvailable");
			}
			break;
		}
		case top.E_SS_CH_BLOCK:
		{
			top.channelLock = 1;
			if(top.recordStatusFlag == 1&&focusOn == "menu")
			{
				showRemind("notAvailable");
			}
			break;
		}
		case top.E_SS_PARENTAL_BLOCK:
		{
			top.parentalLock = 1;
			if(top.recordStatusFlag == 1&&focusOn == "menu")
			{
				showRemind("notAvailable");
			}
			break;
		}
		case top.E_DTV_SS_INPUT_BLOCK:
		{
			top.inputLock = 1;
			if(top.recordStatusFlag == 1&&focusOn == "menu")
			{
				showRemind("notAvailable");
			}
			break;
		}
		case top.E_SIGNAL_UNLOCK:
		{
			if(top.recordStatusFlag == 1&&focusOn == "menu")
			{
				showRemind("saveFile");
			}
			break;
		}
        case top.E_STR_SCREEN_OFF:
            {
                if(top.recordStatusFlag == 1&&focusOn == "menu")
                {
                    top.sendEvent("vod.netflix", 0xf303);
                    showRemind("power");
                }
                else
                {
                    top.systemEventProc(e);
                }
            }
            break;
		default:
			top.systemEventProc(e);
			break;
    }
}
document.onkeydown = keyDownProcess;
function keyDownProcess(evt)/*接收按键*/
{
	var ret = true;
	var keycode = evt.which;
	switch (keycode)
	{
		case top.VK_UP:
		{
			//up
			if(showMenuTimer!=0)
			{
				clearTimeout(showMenuTimer);
				showMenuTimer=setTimeout("toBack()",5000);
			}
			toUp();
			ret = false;
			break;
		}
			
		case top.VK_DOWN:
		{
			//down
			if(showMenuTimer!=0)
			{
				clearTimeout(showMenuTimer);
				showMenuTimer=setTimeout("toBack()",5000);
			}
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
			if(showMenuTimer!=0)
			{
				clearTimeout(showMenuTimer);
				showMenuTimer=setTimeout("toBack()",5000);
			}
			toRight();
			ret = false;
			break;
		}
		case top.VK_BACK: //back
		{
			if(showMenuTimer!=0)
			{
				clearTimeout(showMenuTimer);
			}
			toBack();
			ret = false;
			break;
		}
		case  top.VK_BLUE:
		{
			top.$("main").src = "channelPlay.html";
			break;
		}
		case top.VK_LEFT:
		{
			if(showMenuTimer!=0)
			{
				clearTimeout(showMenuTimer);
				showMenuTimer=setTimeout("toBack()",5000);
			}
			toLeft();
			ret = false;
			break;
		}
		case top.VK_EXIT:
		{
			//exit
			if(showMenuTimer!=0)
			{
				clearTimeout(showMenuTimer);
				showMenuTimer=setTimeout("toBack()",5000);
			}
			toExitKey();
			return;
		}
		case top.VK_STOP:
		{
			toStopKey();
			break;
		}
		case top.VK_CHANNEL_UP://channel +
		if(top.recordStatusFlag == 1&&focusOn == "menu")
		{
			var inputSource=top.g_channel.inputSource;
			var programStatus = top.g_channel.channelProgramStatus();
			var currentChannelIndex = 0;
			if(inputSource <= 1 &&programStatus == 1  && top.inputLock != 1)
			{
				var systemCountry = top.g_channel.systemCountry;
				if( systemCountry == 15 || systemCountry == 6 || systemCountry == 7 || systemCountry == 23 || "true" == top.isSCBCFlag)
				{
					currentChannelIndex = top.g_channel.currentIndex;
					currentChannelIndex = top.g_channel.getNextIndexByIndex(currentChannelIndex);
					showRemind("channelChange");
					tempValue[0]="channelChange";
					tempValue[1]=currentChannelIndex;
				}
				else
				{
					var currentIndex = top.g_channel.currentIndex;
					var endIndex = top.g_channel.endIndex;
					if(currentIndex>=endIndex)
					{
						showRemind("inputsource");
						tempValue[0]="inputsource";
						tempValue[1]=11;
					}
					else
					{
						currentChannelIndex = top.g_channel.getNextIndexByIndex(currentIndex);
						showRemind("channelChange");
						tempValue[0]="channelChange";
						tempValue[1]=currentChannelIndex;
					}
				}
			}
		}
		break;
		case top.VK_CHANNEL_DOWN:
		{
			if(top.recordStatusFlag == 1&&focusOn == "menu")
			{
				var inputSource=top.g_channel.inputSource;
				var programStatus = top.g_channel.channelProgramStatus();
				var currentChannelIndex = 0;
				if(inputSource <= 1 &&programStatus == 1  && top.inputLock != 1)
				{
					var systemCountry = top.g_channel.systemCountry;
					if( systemCountry == 15 || systemCountry == 6 || systemCountry == 7 || systemCountry == 23 || "true" == top.isSCBCFlag)
					{
						currentChannelIndex = top.g_channel.currentIndex;
						currentChannelIndex = top.g_channel.getPreviousIndexByIndex(currentChannelIndex);
						showRemind("channelChange");
						tempValue[0]="channelChange";
						tempValue[1]=currentChannelIndex;
					}
					else
					{
						var currentIndex = top.g_channel.currentIndex;
						var firstIndex = top.g_channel.firstIndex;
						if(currentIndex<=firstIndex)
						{
							showRemind("inputsource");
							tempValue[0]="inputsource";
							tempValue[1]=12;
						}
						else
						{
							currentChannelIndex = top.g_channel.getPreviousIndexByIndex(currentIndex);
							showRemind("channelChange");
							tempValue[0]="channelChange";
							tempValue[1]=currentChannelIndex;
						}
					}
				}
			}
			break;
		}
		case top.VK_POWER:
		{
			if(top.recordStatusFlag == 1&&focusOn == "menu")
			{
				showRemind("power");
			}
		}
		break;
		case top.VK_MUTE:
		case top.VK_VOLUME_UP://volume up
		case top.VK_VOLUME_DOWN://volume down,多媒体不能共用
			top.keyDownProcess(evt);	
			break;
		default:
			//top.keyDownProcess(evt);
		break;
	}
	return ret;
}

function setBookingTime()
{
	console.log("top.pvrTotalTime is "+top.pvrTotalTime);
	//将最新的duration设置下去
	channel.setBookingDuration(top.pvrBookingScheduleId,top.pvrTotalTime);
	//通知中间件重新计算booking时间的duration
	channel.bookingRecordStart(1);
}
//exit键的响应函数
function toExitKey()
{
	if(focusOn == "noDisk" || focusOn == "notAvailable" || focusOn == "notSurpport" || focusOn == "noRecordedFile" || focusOn == "usbRemove" || focusOn == "noSpace")
	{
		pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
		document.location.href = "../channelPlay.html";
	}
	else if(focusOn == "power")
	{
		hiddenRemind();
	}
	else
	{
		if(recordStatus == "noRecord")
		{
			pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			document.location.href = "../channelPlay.html";
		}
		else if(recordStatus == "recording")
		{
			showRemind("exit");
		}
	}
}

function toOK()
{
	if(focusOn == "power")
	{
		if(selectFlag == 0)
		{
			if(showMenuTimer!=0)
			{
				clearTimeout(showMenuTimer);
				showMenuTimer=setTimeout("toBack()",500);
			}
			setting.powerBacklightState = 0;
			top.forceMute(1);
			powerBlackListFlag = 0;
			return;
		}
		else
		{
            if(1 == setting.suspendStatus)
            {
                if(recordStatus != "noRecord")
                {
                    pvr.recordStop();
					top.recordStatusFlag =0;
                    top.pvrCurrentTime=0;
                    top.pvrTotalTime=2*60*60;
                    showRemind("saveFile");
                }
                pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
                top.$("main").src = "channelPlay.html";
            }
			top.recordStatusFlag=0;
			top.toPowerOff();
			top.showMute(0);
		}
	}
	else if(focusOn == "exit")//退出录制提示框
	{
		if(selectFlag == 0)
		{
			hiddenRemind();
		}
		else
		{
			if(recordStatus != "noRecord")
			{
				pvr.recordStop();
				top.pvrCurrentTime=0;
		        	top.pvrTotalTime=2*60*60;
				showRemind("saveFile");
			}
			top.recordStatusFlag=0;
			pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			setTimeout('top.$("main").src = "channelPlay.html"',1000);
		}
	}
	else if(focusOn == "pin8")//切换频道提示框焦点
	{
		if(selectFlag == 0)
		{
			hiddenRemind();
		}
		else
		{
			if(recordStatus != "noRecord")
			{
				pvr.recordStop();
				top.recordStatusFlag =0;
				top.pvrCurrentTime=0;
		        top.pvrTotalTime=2*60*60;
			}
			if(top.currentPanel==1)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
					top.$("globleShow").contentWindow.hiddenGlassRemind();
				}
			}else if(top.currentPanel==2)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
				}
			}
			top.recordStatusFlag=0;
			top.g_channel.inputSource=tempValue[1];
			pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			top.$("main").src = "channelPlay.html";
		}
	}
	else if(focusOn == "cec")//切换频道提示框焦点
	{
		if(selectFlag == 0)
		{
			hiddenRemind();
		}
		else
		{
			if(recordStatus != "noRecord")
			{
				pvr.recordStop();
				top.pvrCurrentTime=0;
		        top.pvrTotalTime=2*60*60;
			}
			top.recordStatusFlag=0;
			if(top.currentPanel==1)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
					top.$("globleShow").contentWindow.hiddenGlassRemind();
				}
			}else if(top.currentPanel==2)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
				}
			}
			top.g_channel.inputSource=tempValue[1];
			pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			top.$("main").src = "channelPlay.html";
		}
	}
	else if(focusOn =="inputsource")
	{
		if(selectFlag == 0)
		{
			hiddenRemind();
		}
		else
		{
			if(recordStatus != "noRecord")
			{
				pvr.recordStop();
				top.pvrCurrentTime=0;
		        top.pvrTotalTime=2*60*60;
			}
			top.recordStatusFlag=0;
			if(top.currentPanel==1)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
					top.$("globleShow").contentWindow.hiddenGlassRemind();
				}
			}else if(top.currentPanel==2)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
				}
			}
			console.log("tempValue[1] is "+tempValue[1]);
			if("nochange" != tempValue[1])
			{
				top.g_channel.inputSource=tempValue[1];
			}
			pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
            top.toSource();
		}
	}
	else if(focusOn == "channelChange")
	{
		if(selectFlag == 0)
		{
			hiddenRemind();
		}
		else
		{
			if(recordStatus != "noRecord")
			{
				pvr.recordStop();
				top.pvrCurrentTime=0;
		        top.pvrTotalTime=2*60*60;
			}
			top.recordStatusFlag=0;
			if(tempValue[1]!=channel.currentIndex)
			{
				top.g_openMheg5State=0;
				if(top.currentPanel==1)
				{
					if(top.g_setting.pic3DMode!=0)
					{
						top.g_setting.pic3DMode=0;
						top.$("globleShow").contentWindow.hiddenGlassRemind();
					}
				}else if(top.currentPanel==2)
				{
					if(top.g_setting.pic3DMode!=0)
					{
						top.g_setting.pic3DMode=0;
					}
				}
				  top.channelLock = 0;
				top.parentalLock = 0;
				top.inputLock = 0;
				top.currentChannelIndex = tempValue[1];
				top.g_channel.playByIndex(tempValue[1]);
			}
			pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			top.$("main").src = "channelPlay.html";
			top.g_isShowInfoBar = 1;
		}
	}
	else if(focusOn == "guide")
	{
		if(selectFlag == 0)
		{
			hiddenRemind();
		}
		else
		{
			if(recordStatus != "noRecord")
			{
				pvr.recordStop();
				top.pvrCurrentTime=0;
		        top.pvrTotalTime=2*60*60;
			}
			top.recordStatusFlag=0;
			pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			if(0/*top.checkNetStatus()&&top.g_setting.guideOnSwitch==1*/)
			{
				top.lastInputSource = top.g_channel.inputSource;
				top.appOpenFlag=1;
                top.g_setting.setProperty("app.ui.currentApp","tbrowser.ipepg");
				top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x800,2,0);
				top.$("main").style.display="none";
				top.$("operatePage").style.display="none";
				top.$("otherPage").style.display="none";
				top.jumpHotkeyPage("channelPlay.html");
				top.g_ulits.openApplication("tbrowser.ipepg","http://eurepg.huan.tv/"/*"-u "+applist[12].url+" "*/);
			}
			else
			{
				top.appOpenFlag=0;
				if(top.isNAFlag)
				{
					top.jumpHotkeyPage("programGuide_NA.html");
				}
				else
				{
				top.jumpHotkeyPage("programGuide.html");
				}				
			}

		}
	}
	else if(focusOn == "media")
	{
		if(selectFlag == 0)
		{
			hiddenRemind();
		}
		else
		{
			if(recordStatus != "noRecord")
			{
				pvr.recordStop();
				top.pvrCurrentTime=0;
		        top.pvrTotalTime=2*60*60;
			}
			top.recordStatusFlag=0;
			pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			if(top.currentPanel==1)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
					top.$("globleShow").contentWindow.hiddenGlassRemind();
				}
			}else if(top.currentPanel==2)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
				}
			}
			top.$("main").src = "deviceList.html";
		}
	}
	else if(focusOn == "channelList")
	{
		if(selectFlag == 0)
		{
			hiddenRemind();
		}
		else
		{
			if(recordStatus != "noRecord")
			{
				pvr.recordStop();
				top.pvrCurrentTime=0;
		        top.pvrTotalTime=2*60*60;
			}
			top.recordStatusFlag=0;
			pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			top.g_previousHtmlPage = "channelPlay.html";
			top.g_isUsedHotKeyToIntoPage = 1;
			top.otherPage.focus();
			top.$("main").src="channelPlay.html";
			top.$("otherPage").src = "channelList.html";
			top.$("otherPage").style.display = "block";	
			top.setFrameFocusPage("otherPage");
		}
	}
	else if(focusOn == "Fav")
	{
		if(selectFlag == 0)
		{
			hiddenRemind();
		}
		else
		{
			if(recordStatus != "noRecord")
			{
				pvr.recordStop();
				top.pvrCurrentTime=0;
		        top.pvrTotalTime=2*60*60;
			}
			top.recordStatusFlag=0;
			pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			top.g_previousHtmlPage = "channelPlay.html";
			top.g_isUsedHotKeyToIntoPage = 1;
			top.otherPage.focus();
			top.$("main").src="channelPlay.html";
			top.g_channel.channelListType = top.FAV_LIST_TYPE;
			top.$("otherPage").src = "channelList.html";
			top.$("otherPage").style.display = "block";	
			top.setFrameFocusPage("otherPage");
		}
	}
	else if(focusOn == "homePage")
	{
		if(selectFlag == 0)
		{
			hiddenRemind();
		}
		else
		{
			console.log("current recordStatus is "+recordStatus);
			if(top.recordStatusFlag == 1)
			{
				pvr.recordStop();
				top.pvrCurrentTime=0;
		        top.pvrTotalTime=2*60*60;
				top.recordStatusFlag=0;
			}
			pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			if(top.g_isDownloading == 1){
				top.g_isDownloading = 0;
				if(!top.g_isForceUpgrade){
					top.hideDownloadRing();
				}
				top.g_setting.pauseDownloadUpdateFile();
			}
			top.g_previousHtmlPage = "channelPlay.html";
			if(top.currentPanel==1)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
					top.$("globleShow").contentWindow.hiddenGlassRemind();
					setTimeout(function(){
						if(tempValue[1]=="tv")
						{
							top.$("main").src = top.getHomepage("?tv&title");
						}
						else
						{
							top.$("main").src = top.getHomepage("?app&title");
						}
						top.requestFocus(top.main, 1);
						top.$("operatePage").src = "";
					},100);
					return;
				}
			}
			else if(top.currentPanel==2)
			{
				if(top.g_setting.pic3DMode!=0)
				{
					top.g_setting.pic3DMode=0;
					setTimeout(function(){
						if(tempValue[1]=="tv")
						{
							top.$("main").src = top.getHomepage("?tv&title");
						}
						else
						{
							top.$("main").src = top.getHomepage("?app&title");
						}
						top.requestFocus(top.main, 1);
						top.$("operatePage").src = "";
					},100);
					return;
				}
			}

			if(tempValue[1]=="tv")
			{
				top.$("main").src = top.getHomepage("?tv&title");
			}
			else
			{
				top.$("main").src = top.getHomepage("?app&title");
			}
			top.requestFocus(top.main, 1);
			top.$("operatePage").src = "";
		}
	}
	else if(focusOn == "tuner")
	{
		if(selectFlag == 0)
		{
			hiddenRemind();
		}
		else
		{
			if(recordStatus != "noRecord")
			{
				pvr.recordStop();
				top.pvrCurrentTime=0;
		        top.pvrTotalTime=2*60*60;
			}
			top.recordStatusFlag=0;
			pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			top.g_previousHtmlPage = "channelPlay.html";
			top.g_isUsedHotKeyToIntoPage = 1;
			top.otherPage.focus();
			top.$("main").src="channelPlay.html";
			if(top.g_temp=="menu"||top.g_temp=="source"||top.g_temp=="sleep")
			{
				top.g_temp="quickMenu";
			}
			top.$("otherPage").src = "quickTuner.html";
			top.$("otherPage").style.display = "block";	
			top.setFrameFocusPage("otherPage");
		}
	}
	else if(focusOn == "usb")
	{
		if(selectFlag == 0)
		{
			hiddenRemind();
		}
		else
		{
			if(recordStatus != "noRecord")
			{
				pvr.recordStop();
				top.pvrCurrentTime=0;
		        top.pvrTotalTime=2*60*60;
			}
			top.recordStatusFlag=0;
			pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			top.g_previousHtmlPage = "channelPlay.html";
			top.g_isUsedHotKeyToIntoPage = 1;
			
			var usbLock = top.g_factory.usbLock;
			var hotelEnable = top.g_factory.hotelEnable;
			if(top.g_temp=="homePage")
			{
				delete sessionStorage.tabListIndex;//删除launcher记忆的tab
			}
			if((usbLock) && (hotelEnable))
			{
				top.$('main').src = "password.html?usbLock";
			}  
			else
			{
				top.$('main').src = "deviceList.html";
			}
			top.main.focus();
			top.setFrameFocusPage("main");
		}
	}
}
function toUp()
{
	if(focusOn == "menu")
	{
		if(top.pvrTotalTime+60*60<24*60*60)
		{
			top.pvrTotalTime=top.pvrTotalTime+60*60;
			if(top.bookingMode == 1)
			{
				setBookingTime();
			}
		}
		doTotalTime(top.pvrTotalTime);
	}
}
function toDown()
{
	if(focusOn == "menu")
	{
		if(top.pvrTotalTime-60*60>=0 && top.pvrTotalTime-60*60>top.pvrCurrentTime+2*60)
		{
			top.pvrTotalTime=top.pvrTotalTime-60*60;
			if(top.bookingMode == 1)
			{
				setBookingTime();
			}
		}
		doTotalTime(top.pvrTotalTime);
	}
}
function toLeft()
{
	if(focusOn == "menu")
	{
		if(top.pvrTotalTime+60<24*60*60)
		{
			top.pvrTotalTime=top.pvrTotalTime+60;
			if(top.bookingMode == 1)
			{
				setBookingTime();
			}
		}
		doTotalTime(top.pvrTotalTime);
	}
	else if(focusOn == "exit" ||focusOn == "pin8"||focusOn == "cec" ||focusOn == "power"||focusOn =="inputsource" ||focusOn =="channelChange" || focusOn =="media" || focusOn =="guide" || focusOn == "homePage" || focusOn == "channelList" || focusOn == "Fav" || focusOn == "tuner"|| focusOn == "usb")
	{
		if(selectFlag==0)
		{
			selectFlag=1;
			$("picResetFocus").style.left="140px"
		}
		else 
		{
			selectFlag=0;
			$("picResetFocus").style.left="440px"
		}
	}
}
function toRight()
{
	if(focusOn == "menu")
	{
		if(top.isAUFlag || top.isLAFlag || top.isAFFlag)
		{
			//AU、LA、AF地区可以设置的录制时间比当前时间大即可
			//预约录制存在时top.pvrTotalTime会加上偏移时间，直接与0判断结果不准确
			//if(top.pvrTotalTime-60>=0 && top.pvrTotalTime-60 > top.pvrTotalTime-60 > top.pvrCurrentTime)
			if( (top.pvrTotalTime-60 >= top.pvrTotalTime%60) && top.pvrTotalTime-60 > top.pvrCurrentTime )
			{
				top.pvrTotalTime=top.pvrTotalTime-60;
				if(top.bookingMode == 1)
				{
					setBookingTime();
				}
			}
		}
		else
		{
			if((top.pvrTotalTime-60 >= top.pvrTotalTime%60) && top.pvrTotalTime-60 > top.pvrCurrentTime+2*60)
			{
				top.pvrTotalTime=top.pvrTotalTime-60;
				if(top.bookingMode == 1)
				{
					setBookingTime();
				}
			}
		}
		doTotalTime(top.pvrTotalTime);
	}
	else if(focusOn == "exit" ||focusOn == "pin8"||focusOn == "cec" ||focusOn == "power"||focusOn =="inputsource" ||focusOn =="channelChange" || focusOn =="media" || focusOn =="guide" || focusOn == "homePage" || focusOn == "channelList" || focusOn == "Fav" || focusOn == "tuner" || focusOn == "usb")
	{
		if(selectFlag==0)
		{
			selectFlag=1;
			$("picResetFocus").style.left="140px"
		}
		else 
		{
			selectFlag=0;
			$("picResetFocus").style.left="440px"
		}
	}
}
function $(id)
{
    return document.getElementById(id);
}
function showCurTime()
{
	$("time").innerText =  setting.currentTime.substring(0,5);
}
function isOverflowed(element)
{
	//console.log("isOverflowed:element.scrollWidth="+element.scrollWidth +"element.clientWidth="+element.clientWidth);
    if(element.scrollWidth > element.clientWidth)
	{
		element.setAttribute("class","marquee");
	}
}
function init()
{
    top.initTextDirection(window);
	//面板按键处理场景设置
	setting.contextOf5in1 = top.CONTEXT_MENU_SELECT;
	top.RemoteConntrolType = "PVR";//lqt- 设置虚拟遥控器的场景类型--pvr
	top.g_temp = "pvr";
	var tempString = window.location.search;//获取URL携带参数
	tempString = tempString.substring(tempString.indexOf("?")+1);
	tempValue = tempString.split("&");
	var span=$("pvrTitle").getElementsByTagName("span");
	span[0].innerText=pvrConName[0];
	$("programInfo").innerText=pvrConName[1];
	var channelInfo = channel.getCurrentChannelInfo();
	var channelNumber = ((top.isLAFlag || top.isNAFlag) ? top.parseChNumber(channelInfo) : channelInfo.number);
	$('programInfoCon').innerText = other[0] + " " +channelNumber + " " + channelInfo.name;
	$("pvrNote").innerText=pvrConName[2][0]+pvrConName[2][1];
	$("pvrHourAdd").innerHTML=pvrConName[5]+"+";
	$("pvrHourDel").innerHTML=pvrConName[5]+"-";
	$("pvrSecondAdd").innerHTML=pvrConName[6]+"+";
	$("pvrSecondDel").innerHTML=pvrConName[6]+"-";
	$("totalRecName").innerHTML=pvrConName[7];
	$("dialogName").innerText=pvrConName[8];
	$("pvrRemind").innerText=pvrConName[9];
	$("time").innerText =  setting.currentTime.substring(0,5);
	setTimeout(function(){
	isOverflowed($("totalRecName"));
	isOverflowed($("pvrHourAdd"));
	isOverflowed($("pvrHourDel"));
	isOverflowed($("pvrSecondAdd"));
	isOverflowed($("pvrSecondDel"));},1);
	setInterval("showCurTime()",1000);
	if(tempValue[0]=="menu")
	{
		//add chenhua 2014.6.17 when timeshift is runing
		if(top.timeShiftStatusFlag == 1)
		{
			showRemind("notAvailable");
			return;
		}
		
		top.Log("********************top.recordStatusFlag="+top.recordStatusFlag);
		if(top.recordStatusFlag==0)
		{
			pvr.pvrMhegSuspend(1);//将mheg状态和显示挂起
			if(pvr.getUsbStatus() != 1)//没有插入usb
			{
				if(top.bookingMode == 1)//预约录制
				{
					top.bookingMode = 0;
					channel.bookingRecordStart(0);//提醒底层record开始状态，0表示无法录制，1表示开始录制
					if(!setting.powerBacklightState)//待机录制中
					{
                        top.recordStatusFlag = 0;
						top.$("main").src="channelPlay.html";
                        top.toPowerOff();
						return;
					}
				}
				showRemind("noDisk");
			}
			else
			{
				//$('pvrPopwin').style.display = "block";
				initDetail();
				if(top.recordStatusFlag==1)//开始录制后进行一下操作 否则会在提示后退出该页面
				{
					top.$("main").src = "channelPlay.html";
					top.requestFocus(top.main, 1);
					top.setFrameFocusPage("main");
					return;
				}
			}
			doTotalTime(top.pvrTotalTime);
			doCurrentTime(top.pvrCurrentTime);
		}
		else
		{
			$('pvrPopwin').style.display = "block"; 
			top.pvrCurrentTime = pvr.recordingTimeLength();
			if(top.pvrCurrentTime>top.pvrTotalTime)
			{
				pvr.recordStop();
				showRemind("saveFile");
			}
			doCurrentTime(top.pvrCurrentTime); 
			recordStatus = "recording";
			recordingTimer = setInterval("doRecording()",1000);
			doTotalTime(top.pvrTotalTime);//
		}
		 showMenuTimer=setTimeout("toBack()",5000);
	}
	else
	{
		showRemind(tempValue[0]);
		top.pvrCurrentTime = pvr.recordingTimeLength();
		console.log("top.pvrCurrentTime is "+top.pvrCurrentTime+" top.pvrTotalTime  is "+top.pvrTotalTime+"setting.powerBacklightState is "+setting.powerBacklightState+"focusOn is "+focusOn);
		//待机录制时间到机器切换到真待机
		if(focusOn == "saveFile" && !setting.powerBacklightState )//待机录制中
		{
            top.recordStatusFlag = 0;
			top.$("globleShow").contentWindow.hiddenRecord();
			setTimeout("top.fastPowerOff();", 1000);//延时1s原因：等hiddenRecord执行完毕,开机起来不在显示任何record信息
			return;
		}
		if(top.pvrCurrentTime>top.pvrTotalTime)
		{
			pvr.recordStop();
			showRemind("saveFile");
		}
		doCurrentTime(top.pvrCurrentTime); 
		recordStatus = "recording";
		recordingTimer = setInterval("doRecording()",1000);
		doTotalTime(top.pvrTotalTime);
		showMenuTimer=setTimeout("toBack()",5000);
	}
	addMouseListener();
}
function toBack()
{
	if(focusOn != "menu")
	{
		hiddenRemind();
	}
	else if(focusOn == "menu")
	{
		if(recordStatus == "recording")
		{
			top.$("main").src = "channelPlay.html";
			return;
		}
		else if(recordStatus == "noRecord")
		{
			top.$("main").src = "channelPlay.html";
		}
	}

}
function initDetail()
{
	powerBlackListFlag = setting.powerBacklightState;
	if(top.bookingMode == 1)//预约录制
	{
		toRecordKey();
	}
	else
	{
		var channelInfo = channel.getChannelInfoByIndex(top.currentChannelIndex);
		var channelNumber = (top.isLAFlag || top.isNAFlag) ? top.parseChNumber(channelInfo) : channelInfo.number;
		$('programInfoCon').innerText = other[0] + " " + channelNumber + " " + channelInfo.name;
		toRecordKey();
	}
}

function showRemind(flagWord)
{	
	if(showMenuTimer!=0)
	{
		clearTimeout(showMenuTimer);
		showMenuTimer=setTimeout("toBack()",5000);
	}
	$("pvrPopwin").style.display="none";
	$("picReset").style.display="block";
	$("picResetFocus").style.display="none";
	var picReDivs=$("dialogButton").getElementsByTagName("span");
	console.log("****************"+flagWord);
	if(flagWord == "noSignal")
	{
		$("dialogButton").style.display="none";
		$("dialogContent").innerText = remindWords[12];
		focusOn = "notAvailable";
		top.recordStatusFlag=0;
		top.bookingMode = 0;
		clearTimeout(showMenuTimer);
		var str = "pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/top.$(\"main\").src = \"channelPlay.html\";";
	setTimeout(str,3000);
	}
	else if(flagWord == "notAvailable")
	{
		$("dialogButton").style.display="none";
		$("dialogContent").innerText = remindWords[8];
		focusOn = "notAvailable";
		top.recordStatusFlag=0;
		top.bookingMode = 0;
		clearTimeout(showMenuTimer);
		var str = "pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/top.$(\"main\").src = \"channelPlay.html\";";
	setTimeout(str,3000);
	}
	else if(flagWord == "notSurport")
	{
		$("dialogButton").style.display="none";
		$("dialogContent").innerText = remindWords[7];
		focusOn = "notSurpport";
		top.bookingMode = 0;
		if(top.recordStatusFlag==1)
		{
			top.recordStatusFlag=0;
			pvr.recordStop();
		}
		clearTimeout(showMenuTimer);
		var str = "pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/top.$(\"main\").src = \"channelPlay.html\";";
	setTimeout(str,3000);
	}
	else if(flagWord == "noSpace")
	{
		$("dialogButton").style.display="none";
		$("dialogContent").innerText = remindWords[5];
		focusOn = "noSpace";
		top.bookingMode = 0;
		if(top.recordStatusFlag==1)
		{
			top.recordStatusFlag=0;
			pvr.recordStop();
		}
		clearTimeout(showMenuTimer);
		var str = "pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/top.$(\"main\").src= \"channelPlay.html\";";
	setTimeout(str,3000);
	}
	else if(flagWord == "usbRemove")
	{
		$("dialogButton").style.display="none";
		$("dialogContent").innerText = remindWords[4];
		focusOn = "usbRemove";
		top.bookingMode = 0;
		if(top.recordStatusFlag==1)
		{
			top.recordStatusFlag=0;
			pvr.recordStop();
		}
		clearTimeout(showMenuTimer);
		var str = "pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/top.$(\"main\").src = \"channelPlay.html\";";
	setTimeout(str,3000);
	}
	else if(flagWord == "noDisk")
	{
		$("dialogButton").style.display="none";
		$("dialogContent").innerText = disRemindWords;
		focusOn = "noDisk";
		top.bookingMode = 0;
		if(top.recordStatusFlag==1)
		{
			top.recordStatusFlag=0;
			pvr.recordStop();
		}
		clearTimeout(showMenuTimer);
		var str = "pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/top.$(\"main\").src = \"channelPlay.html\";";
	setTimeout(str,3000);
	}
	else if(flagWord == "saveFile")
	{
		$("dialogButton").style.display="none";
		$("dialogContent").innerText = remindWords[9];
		top.pvrCurrentTime=0;
		top.pvrTotalTime=2*60*60;
		top.recordStatusFlag=0;
		focusOn = "saveFile";
		clearTimeout(showMenuTimer);
		var str = "pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/top.$(\"main\").src = \"channelPlay.html\";";
		setTimeout(str,3000);
	}
	else if(flagWord == "power")
	{
		$("picResetFocus").style.display="block";
		$("picResetFocus").style.left="440px";
		$("dialogButton").style.display="block";
	    picReDivs[0].innerText=powerOffRemind[1];
	    picReDivs[1].innerText=powerOffRemind[0];
		top.doEleScrForNoOption(picReDivs,1, 0);
		$("dialogContent").innerText = powerOffRemind[2];
		selectFlag=0;
		focusOn = "power";
	}
	else if(flagWord == "exit")
	{
		$("picResetFocus").style.display="block";
		$("dialogButton").style.display="block";
		$("picResetFocus").style.left="440px";
		picReDivs[0].innerText=remindWords[0];
	    picReDivs[1].innerText=remindWords[1];
		$("dialogContent").innerText = remindWords[2];
		selectFlag=0;
		focusOn = "exit";
	}
	else if(flagWord == "pin8")
	{
		$("picResetFocus").style.display="block";
		$("dialogButton").style.display="block";
		$("picResetFocus").style.left="440px";
		picReDivs[0].innerText=remindWords[0];
	    picReDivs[1].innerText=remindWords[1];
		if(recordStatus == "noRecord")
		{
			$("dialogContent").innerText = changeToPIN8[0];
		}
		else 
		{
			$("dialogContent").innerText = changeToPIN8[1];
		}
		selectFlag=0;
	   focusOn = "pin8";
	}
	else if(flagWord == "cec")
	{
		$("picResetFocus").style.display="block";
		$("dialogButton").style.display="block";
		$("picResetFocus").style.left="440px";
		picReDivs[0].innerText=remindWords[0];
	    picReDivs[1].innerText=remindWords[1];
		if(recordStatus == "noRecord")
		{
			$("dialogContent").innerText = changeToCEC[0];
		}
		else 
		{
			$("dialogContent").innerText = changeToCEC[1];
		}
		selectFlag=0;
	   focusOn = "cec";
	}
	else if(flagWord == "inputsource")
	{
		$("picResetFocus").style.display="block";
		$("dialogButton").style.display="block";
		$("picResetFocus").style.left="440px";
		picReDivs[0].innerText=remindWords[0];
	    picReDivs[1].innerText=remindWords[1];
		$("dialogContent").innerText = remindWords[10];
		selectFlag=0;
	   focusOn = "inputsource";
	}
	else if(flagWord == "channelChange")
	{
		$("picResetFocus").style.display="block";
		$("dialogButton").style.display="block";
		$("picResetFocus").style.left="440px";
		picReDivs[0].innerText=remindWords[0];
	    picReDivs[1].innerText=remindWords[1];
		$("dialogContent").innerText = changeChannel[1];
		selectFlag=0;
	   focusOn = "channelChange";
	}
	else if(flagWord == "guide")
	{
		$("picResetFocus").style.display="block";
		$("dialogButton").style.display="block";
		$("picResetFocus").style.left="440px";
		picReDivs[0].innerText=remindWords[0];
	    picReDivs[1].innerText=remindWords[1];
		$("dialogContent").innerText = guideJump[1];
		selectFlag=0;
	   focusOn = "guide";
	}
	else if(flagWord == "media")
	{
		$("picResetFocus").style.display="block";
		$("dialogButton").style.display="block";
		$("picResetFocus").style.left="440px";
		picReDivs[0].innerText=remindWords[0];
	    picReDivs[1].innerText=remindWords[1];
		$("dialogContent").innerText = mediaJump[1];
		selectFlag=0;
	    focusOn = "media";
	}
	else if(flagWord == "homePage")
	{
		$("picResetFocus").style.display="block";
		$("dialogButton").style.display="block";
		$("picResetFocus").style.left="440px";
		picReDivs[0].innerText=remindWords[0];
	    picReDivs[1].innerText=remindWords[1];
		$("dialogContent").innerText = remindWords[11];
		selectFlag=0;
	    focusOn = "homePage";
	}
	else if(flagWord == "channelList")
	{
		$("picResetFocus").style.display="block";
		$("dialogButton").style.display="block";
		$("picResetFocus").style.left="440px";
		picReDivs[0].innerText=remindWords[0];
	    picReDivs[1].innerText=remindWords[1];
		$("dialogContent").innerText = remindWords[11];
		selectFlag=0;
	    focusOn = "channelList";
	}
	else if(flagWord == "Fav")
	{
		$("picResetFocus").style.display="block";
		$("dialogButton").style.display="block";
		$("picResetFocus").style.left="440px";
		picReDivs[0].innerText=remindWords[0];
	    picReDivs[1].innerText=remindWords[1];
		$("dialogContent").innerText = remindWords[11];
		selectFlag=0;
	    focusOn = "Fav";
	}
	else if(flagWord == "tuner")
	{
		$("picResetFocus").style.display="block";
		$("dialogButton").style.display="block";
		$("picResetFocus").style.left="440px";
		picReDivs[0].innerText=remindWords[0];
	    picReDivs[1].innerText=remindWords[1];
		$("dialogContent").innerText = remindWords[11];
		selectFlag=0;
	    focusOn = "tuner";
	}
	else if(flagWord == "usb")
	{
		$("picResetFocus").style.display="block";
		$("dialogButton").style.display="block";
		$("picResetFocus").style.left="440px";
		picReDivs[0].innerText=remindWords[0];
	    picReDivs[1].innerText=remindWords[1];
		$("dialogContent").innerText = remindWords[11];
		selectFlag=0;
	    focusOn = "usb";
	}
	
}
var screenMode = channel.currentScreenSaverMode;
function toRecordKey()
{
	if(!channel.currentSignalStatus)
	{
		if(top.bookingMode == 1)//预约录制
		{
			top.bookingMode = 0;
			channel.bookingRecordStart(0);//提醒底层record开始状态，0表示无法录制，1表示开始录制
			if(!powerBlackListFlag)//待机录制中
			{
                top.recordStatusFlag = 0;
				top.$("main").src="channelPlay.html";
                top.toPowerOff();
				return;
			}
		}
		showRemind("noSignal");
	}
	else if(screenMode == 0 || screenMode == 7  || top.parentalLock == 1 || top.channelLock == 1 || top.inputLock == 1)//featrue not available
	{
		if(top.bookingMode == 1)//预约录制
		{
			top.bookingMode = 0;
			channel.bookingRecordStart(0);//提醒底层record开始状态，0表示无法录制，1表示开始录制
			if(!powerBlackListFlag)//待机录制中
			{
                top.recordStatusFlag = 0;
				top.$("main").src="channelPlay.html";
                top.toPowerOff();
				return;
			}
		}
		showRemind("notAvailable");
	}
	else if(pvr.isVideoScramble() )//scramble:pvr timeshift not surpport 
	{
		channel.testLog("bookingMode===="+top.bookingMode+"powerBlackListFlag==="+powerBlackListFlag);
		if(top.bookingMode == 1)//预约录制
		{
			top.bookingMode = 0;
			channel.bookingRecordStart(0);//提醒底层record开始状态，0表示无法录制，1表示开始录制
			if(!powerBlackListFlag)//待机录制中
			{
                top.recordStatusFlag = 0;
				top.$("main").src="channelPlay.html";
                top.toPowerOff();
				return;
			}
		}
		showRemind("notSurport");
	}
	else
	{
		if(pvr.getFreeSpaceStatus())//查看是否有剩余空间
		{
			if(top.bookingMode == 1)//预约录制
			{
				//top.bookingMode = 0;
				//加上偏移时间；因为用户end time时间是一个指定的时间值，提前开始录制需要加上偏移
				top.pvrTotalTime =top.pvrTotalTime + channel.getBookingRestTime();
				channel.bookingRecordStart(1);//提醒底层record开始状态，0表示无法录制，1表示开始录制
				pvr.recordStart();
			    top.recordStatusFlag=1;
			    recordStatus = "recording";
				console.log("I will record the channel");
			}
			else 
			{
				console.log("top.currentChannelIndex is "+top.currentChannelIndex+" channel.currentIndex is "+channel.currentIndex);
				//不使用top.currentChannelIndex是存储的值不稳定，例如当更换码流时不能快速更新，导致录制不成功。每次使用时去获取当前的值
				if(pvr.recordStartByIndex(channel.currentIndex)==0)
				{//start record
					top.recordStatusFlag=1;
					recordStatus = "recording";
				}
				else
				{
					showRemind("notAvailable");
					top.recordStatusFlag=0;
					top.jumpPage();
				}
			}
			//pvrInfo = pvr.getRecordingFileInfo();
			//top.pvrTotalTime=pvrInfo.date;
			//doCurrentTime(top.pvrCurrentTime);
			//recordingTimer = setInterval("doRecording()",1000);
		}
		else
		{
			if(top.bookingMode == 1)//预约录制
			{
				var channelInfo = channel.getCurrentChannelInfo();
				var channelNumber = (top.isLAFlag || top.isNAFlag) ? top.parseChNumber(channelInfo) : channelInfo.number;
				$('programInfoCon').innerText = other[0] + " " + channelNumber + " " + channelInfo.name;
				top.bookingMode = 0;
				channel.bookingRecordStart(0);//提醒底层record开始状态，0表示无法录制，1表示开始录制
				if(!powerBlackListFlag)//待机录制中
				{
                    top.recordStatusFlag = 0;
					top.$("main").src="channelPlay.html";
                    top.toPowerOff();
					return;
				}
			}
			showRemind("noSpace");
		}
		
	}
}
/*
*切分时间，将以秒为单位的时间切分出时，分，秒的字符串
*/

function doTotalTime(time)
{
	var hour = parseInt(time/3600,10);
	var minute =  parseInt((time - hour*3600)/60,10);
	var second = time%60;
	if(hour < 10)
	{
		hour = "0" + hour;
	}
	if(minute < 10)
	{
		minute = "0" + minute;
	}
	$("totalRecHour").innerText=hour;
	$("totalRecMinute").innerText=minute;
}
function doCurrentTime(time)
{
	var hour = parseInt(time/3600,10);
	var minute =  parseInt((time - hour*3600)/60,10);
	var second = time%60;
	if(hour < 10)
	{
		hour = "0" + hour;
	}
	if(minute < 10)
	{
		minute = "0" + minute;
	}
	if(second < 10)
	{
		second = "0" + second;
	}
	$("currentRecHour").innerText=hour;
	$("currentRecMinute").innerText=minute;
	$("currentRecSecond").innerText=second;
}
/*
*用途：在显示器左上角显示节目录制时间
*用到全局变量：recordMinute//录制时间的分钟位 recordSecond：录制时间的秒位
*/
function doRecording()
{
	top.pvrCurrentTime = pvr.recordingTimeLength();
	if(top.pvrCurrentTime>top.pvrTotalTime)
	{
	    pvr.recordStop();
		showRemind("saveFile");
	}
	doCurrentTime(top.pvrCurrentTime); 
}

function hiddenRemind()
{
	if (focusOn == "power")
		setting.cleanPowerOff();
	top.$("main").src = "channelPlay.html";
}

function toStopKey()
{
	if(recordStatus == "recording" && focusOn == "menu")
	{
		pvr.recordStop();
		top.recordStatusFlag =0;
		top.pvrCurrentTime=0;
		top.pvrTotalTime=2*60*60;
		pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
		top.$("globleShow").contentWindow.hiddenRecord();
		showRemind("saveFile");
	}
}
function readyToChangePIN8()
{
	if(focusOn != "noDisk" && focusOn != "notAvailable" && focusOn != "notSurpport" 
		&& focusOn != "usbRemove" && focusOn != "noSpace" && focusOn != "power"&& focusOn != "pin8")
	{
		showRemind("pin8");
	}
}

function readyToChangeCEC()
{
	if(focusOn != "noDisk" && focusOn != "notAvailable" && focusOn != "notSurpport" 
		&& focusOn != "usbRemove" && focusOn != "noSpace" && focusOn != "power" &&focusOn!="cec")
	{
		showRemind("cec");
	}
}
/*
供booking调用，目的是防止在选择开始录制预定的节目时跳转页面和本页面的定时隐藏冲突，可能导致该弹出pvr录制页面被channelPlay页面覆盖
*/
function bookingPreOperate()
{
	toBack();
}

function uninit()
{
	top.g_temp = "";
	clearInterval(recordingTimer);
	clearTimeout(showMenuTimer);
	if(top.recordStatusFlag==1)
	{
		top.$("globleShow").contentWindow.showPvrCurrentTime();
	}
	else
	{
		top.$("globleShow").contentWindow.hiddenRecord();
	}
}
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
	    clearTimeout(showMenuTimer);
		if(evt.button == 2)toBack();//right key
		showMenuTimer=setTimeout("toBack()",5000);
	}
	$("pvrHourImgAdd").onmousedown = function(evt){
		if(evt.button == 0){//left key
				toUp();
		}
	}
	$("pvrHourImgDel").onmousedown = function(evt){
		if(evt.button == 0){//left key
				toDown();
		}
	}
	$("pvrSecondImgAdd").onmousedown = function(evt){
		if(evt.button == 0){//left key
				toLeft();
		}
	}
	$("pvrSecondImgDel").onmousedown = function(evt){
		if(evt.button == 0){//left key
				toRight();
		}
	}
}
