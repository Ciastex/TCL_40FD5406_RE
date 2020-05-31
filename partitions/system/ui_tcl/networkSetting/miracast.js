
var title = top.miracastTitle;
var remind=top.miracastRemind;
var exitFlag = 0;
var operateFlag=0;
function $(id)
{
    return document.getElementById(id);
}
var setting = top.g_setting;
var tmp=setting.contextOf5in1;
document.onsystemevent = notifyProcess;
function notifyProcess(evt)
{ 
	 var msg = evt.which;
	 var param = evt.modifiers;
	 console.log("----------------------------msg=="+msg+"param==="+param);
	//全局消息
	switch(msg)
	{
		case top.E_BOOKING_PLAY_START:
		case top.E_BOOKING_RECORD_START:
		case top.E_BOOKING_AHEAD_PLAY_START:
		case top.E_BOOKING_AHEAD_RECORD_START:
			break;
		case top.E_DLNA_DMR_PUSH_MOVIE:
		case top.E_DLNA_DMR_PUSH_MUSIC:
		case top.E_DLNA_DMR_PUSH_PICTURE:
		case top.E_DLNA_DMR_PUSH_KODI:
		case top.E_DLNA_DMR_PUSH_YOUTUBE:
		{
            exitFlag = 0;
			setting.stopMiracast();
			top.systemEventProc(evt);
			break;
		}
		case top.E_CEC_ARC_AUDIO_STATUS_CHANGE:
			top.updateCecMute();
			break;
		case top.E_SRC_CHANGE_SET_INPUT_SOURCE:
		case top.E_READY_TO_CHANGE_CEC:
			break;
		case top.E_WIRELESS_CONNECT_FAILURE:
		{
			startMiracast();
			break;
		}
		case top.E_POWER_OFF_TIMER://power off timer
		case top.E_POWER_OFF_TIMER_EX:
		{
            if(top.g_setting.location > 0)//location 为shop 或者 shop with demo 不响应倒计时待机消息
            {
                return;
            }
			setting.stopMiracast();
			top.$("main").style.display="block";
			top.$("otherPage").style.display="block";
			top.$("operatePage").style.display="block";
			top.$("operatePage").src = "";
			top.$("main").src = "channelPlay.html";
			top.systemEventProc(evt);
			break;
		}
		case top.E_MEDIA_USB_INSERTED://usb insert
			break;		
		case top.E_WFD_STATUS:
		{
			switch(param)
			{
				case 0:
				case 1:
				break;
				case 2:
				case 3:
				$("miraRemind").innerHTML=remind[2];
				top.setTTSSay(top.SPEECH_TYPE_FLUSH,remind[2]);	//connecting
				top.ttsLog("ttsStr="+remind[2]);
				break;
				case 4:
				top.$("main").style.display="none";
				top.$("operatePage").style.display="none";
				if(top.g_nextHtmlPage!="miracast.html")
					top.$("otherPage").style.display="none";
				break;
				case 5:
	                    exitFlag = 2;
	                    setting.stopMiracast();	
				break;
				case 11:
				{
					if(1 == exitFlag)
					{
						exitMiracast();
					}
					else if(2 == exitFlag)
					{
						startMiracast();
						$("miraRemind").innerHTML=remind[1];
						top.setTTSSay(top.SPEECH_TYPE_SAY,remind[1]);		//is ready
						top.ttsLog("ttsStr="+remind[1]);
						top.$("main").style.display="block";
						top.$("otherPage").style.display="block";
						top.$("operatePage").style.display="block";
					}
				}
				break;
				case 13:
				{
					top.g_channel.changeToPrevSource();
					exitMiracast();
				}
				break;
				default:
				break;
			}
		}
		break;
		case top.E_STR_SCREEN_OFF:
		{
			toExitBySTR();
			 break;
		}
	default:
			top.systemEventProc(evt);
			break;
	}
}

document.onkeydown = keyproc;
function keyproc(evt)
{
		var ret = true;
		var keycode = evt.which;
		if(operateFlag==0)
		{
			if(keycode == top.VK_BACK){
                exitMiracast();
			}
            return;
		}
		switch (keycode)
		{
			case top.VK_ENTER:
			{
				ret = false;
				break;
			}
			case top.VK_BACK: //back
			case top.VK_EXIT:
                exitFlag = 1;
                setting.stopMiracast();
			break;
			case top.VK_VOLUME_DOWN:
			if(top.g_volume_visible == 0)
			{
				top.$('globleShow').contentWindow.initVolume();
				top.clearVolumeTimer();
			}
			if(top.$('globleShow').contentWindow.volumeCount > 0)
			{
				top.g_volume_visible = 1;
				top.$("globleShow").contentWindow.$("adjustProgressBox").style.display = "block";
				showVolume(-1);
				top.$("globleShow").contentWindow.setVolumeByType(top.$("globleShow").contentWindow.curVolumeType,top.$("globleShow").contentWindow.volume);
			}
			break;
			case top.VK_VOLUME_UP:
			if(top.g_volume_visible == 0)
			{
				top.$('globleShow').contentWindow.initVolume();
				top.clearVolumeTimer();
			}
			if(top.$('globleShow').contentWindow.volumeCount > 0)
			{
				top.g_volume_visible = 1;
				top.$("globleShow").contentWindow.$("adjustProgressBox").style.display = "block";
				showVolume(1);
				top.$("globleShow").contentWindow.setVolumeByType(top.$("globleShow").contentWindow.curVolumeType,top.$("globleShow").contentWindow.volume);
			}
			break;
			case top.VK_MUTE:
				top.showMute(1);
				break;
			case top.VK_POWER:
                setting.stopMiracast();
                top.keyDownProcess(evt);
                break;
			case top.VK_FRONT_PANEL_LOCKED:
			top.keyDownProcess(evt);
			break;
			default:
			{
				break;
			}
		}
		return ret;
}
function hideVolume()
{
	top.keySetForUI(0);
	top.$("globleShow").contentWindow.$("adjustProgressBox").style.display = "none";    
	top.g_volume_visible = 0;
}
function clearVolumeTimer()
{
	 clearTimeout(top.g_volume_timer);
}
function startVolumeTimer()
{
	top.g_volume_timer = setTimeout("hideVolume()",3000);
}
function showVolume(distance)
{
	clearVolumeTimer();
	if(distance>0&&top.mute_status>0)
	{
		top.showMute(0);
	}
	if (top.g_volume_visible)
	{
		top.$("globleShow").contentWindow.volume += distance;
		if(top.$("globleShow").contentWindow.volume < 0)
		{
			top.$("globleShow").contentWindow.volume = 0;
		}
		else if(top.$("globleShow").contentWindow.volume > top.$("globleShow").contentWindow.maxVolume)
		{
			top.$("globleShow").contentWindow.volume = top.$("globleShow").contentWindow.maxVolume;
		}
		
		top.$("globleShow").contentWindow.$("adjustProgBar").getElementsByTagName("div")[0].style.width = parseInt(top.$("globleShow").contentWindow.volume*9) + "px";
		top.$("globleShow").contentWindow.$("adjustProgBar").getElementsByTagName("div")[2].style.width = parseInt((100-top.$("globleShow").contentWindow.volume)*9) + "px";
	}
	else
	{
		top.$("globleShow").contentWindow.$("adjustProgBar").getElementsByTagName("div")[0].style.width = parseInt(top.$("globleShow").contentWindow.volume*9) + "px";
		top.$("globleShow").contentWindow.$("adjustProgBar").getElementsByTagName("div")[2].style.width = parseInt((100-top.$("globleShow").contentWindow.volume)*9) + "px";
		top.$("globleShow").contentWindow.$("adjustProgressBox").style.display = "block";
		top.g_volume_visible = 1;
	}
	
	top.$("globleShow").contentWindow.$("adjustProgValue").innerHTML = top.$("globleShow").contentWindow.volume;
	startVolumeTimer();
}
function init()
{
	top.setContext5In1Type(top.CONTEXT_ATV_DTV_FULL_SCREEN);
    top.initTextDirection(window);
	top.clearMyTimeout();
	$("miraTitle").getElementsByTagName("span")[0].innerHTML=title[0];
	$("miraContent").innerHTML=remind[0];
	top.setTTSSay(top.SPEECH_TYPE_FLUSH,remind[0]);
	top.ttsLog("ttsStr="+remind[0]);
	$("miraBottom").innerHTML=setting.miracastInfo();//title[1];

	if(setting.networkConnectType == 2 && setting.networkEnable == 1)//wireless
	{
		setting.setProperty("app.ui.miracast.disablenetwork","1");
		setting.networkEnable = 0;
		console.log("disable network");
	}
	else
	{
		startMiracast();
	}
	top.setTTSSay(top.SPEECH_TYPE_SAY,","+$("miraBottom").innerHTML);	//TV_XXX
	top.ttsLog("ttsStr="+(top.SPEECH_TYPE_SAY,remind[1]+","+$("miraBottom").innerHTML));
	addMouseListener();
}
function startMiracast()
{
	if(setting.startMiracast())
	{

		$("miraRemind").innerHTML=remind[1];
		top.setTTSSay(top.SPEECH_TYPE_SAY,remind[1]);
		top.ttsLog("ttsStr="+remind[1]);
	}
	else
	{
		if(top.g_temp == "homePage")
		{
			top.$("main").style.display = "block";
			top.$("operatePage").src = "";
			top.requestFocus(top.main, 1);
			top.setFrameFocusPage("main");
		}
		else
		{
			parent.returnPopWindow(2);
		}
	}
	operateFlag=1;
}
function uninit()
{
	top.setTTSSay(top.SPEECH_TYPE_FLUSH,"");
	top.$("main").style.display="block";
	top.$("operatePage").style.display="block";
	top.$("otherPage").style.display="block";
	hideVolume();
	top.setContext5In1Type(tmp);
	if(setting.getProperty("app.ui.miracast.disablenetwork","0")== "1")
	{
		setting.networkEnable = 1;
		setting.setProperty("app.ui.miracast.disablenetwork","0");
	}
	if(top.g_temp != "homePage")
	{
		top.restartTimeout();				
	}
	else if(top.isFloatLauncher)
	{
		top.g_setting.scaleVideoWindow(0,0,0,0);
	}
	else
	{
		if(setting.isHDScreen==1)
		{
			setting.scaleVideoWindow(130,240,610,344);
		}
		else
		{
			setting.scaleVideoWindow(90,170,440,240);
		}
	}
}
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		if(evt.button == 2) 
		{
			top.$("main").style.display="block";
		    top.$("operatePage").style.display="block";
		    top.$("otherPage").style.display="block";
			if(top.g_temp == "homePage")
			{
				top.$("operatePage").src = "";
				top.requestFocus(top.main, 1);
				 top.setFrameFocusPage("main");
			}
			else
			{
				parent.returnPopWindow(2);
			}
		}
	}
}

function exitMiracast()
{
	if(sessionStorage.getItem("NewSanPrePage") == "smartkey")
	{
		sessionStorage.setItem("NewSanPrePage" , "miracast");
		top.$("otherPage").src = "smartKey/smart.html";
		top.$("otherPage").style.display = "block";
		top.requestFocus(top.otherPage, 0);
		top.setFrameFocusPage("otherPage");
		return;
	}else if(top.isFloatLauncher && top.g_temp == "homePage")
	{
		sessionStorage.setItem("NewSanPrePage" , "needChangeSource");
	}
    top.$("main").style.display="block";
    top.$("otherPage").style.display="block";
    if(top.g_temp == "homePage")
    {
        top.$("operatePage").src = "";
        top.requestFocus(top.main, 1);
        top.setFrameFocusPage("main");
    }
    else if(top.g_temp == "miracast")
    {
        if ("null" != top.smartKey_color) {
            top.$("main").src = "smartKey/smart.html";
        }
        else {
            top.$("main").src = "option.html";
        }
        top.requestFocus(top.main, 1);
        top.setFrameFocusPage("main");
    }
    else
    {
        parent.returnPopWindow(2);
    }
}

function toExitBySTR()
{
	setting.stopMiracast();
	top.$("main").style.display="block";
	top.$("otherPage").style.display="block";
	top.$("operatePage").style.display="block";
	if(top.g_temp == "miracast")
	{
        if ("null" != top.smartKey_color) {
            top.$("main").src = "smartKey/smart.html";
        }
        else {
            top.$("main").src = "option.html";
        }
	        top.requestFocus(top.main, 1);
	        top.setFrameFocusPage("main");
		 top.toPowerOff();
	}
	else
	{
		parent.returnPopWindow(2);
		top.toPowerOff();
	}
}

