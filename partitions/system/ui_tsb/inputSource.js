top.keySetForUI(1);
var sourceTitle 		= top.sourceOptions;
var sourceList;
var borderColor 		= ["thin solid #000","thin solid #F00"];
var channel 			= top.g_channel;
var setting				= top.g_setting;
var source 				= channel.inputSource;//当前信源
var sourceChange_timer 	= setTimeout(function() {
		doExit();
	}, 5000);
var positionH			=0;
var prePositionH              =0;
var pressSourceTimer 	= 0;
var inputSourceCount = 0;
var inputList =[
{name:sourceTitle[0],source:"TV",sourceInput:0,icon:"images/Icon-Sourse_TV.png",showFlag:0},
{name:sourceTitle[1],source:"AV",sourceInput:0,icon:"images/Icon-Sourse_scart.png",showFlag:0},
{name:sourceTitle[2],source:"CMP",sourceInput:0,icon:"images/Icon-Sourse_CMP.png",showFlag:0},
{name:sourceTitle[3],source:"HDMI1",sourceInput:0,icon:"images/Icon-Sourse_HDMI.png",showFlag:0},
{name:sourceTitle[4],source:"HDMI2",sourceInput:0,icon:"images/Icon-Sourse_HDMI.png",howFlag:0},
{name:sourceTitle[5],source:"HDMI3",sourceInput:0,icon:"images/Icon-Sourse_HDMI.png",showFlag:0},
{name:sourceTitle[6],source:"HDMI4",sourceInput:0,icon:"images/Icon-Sourse_HDMI.png",showFlag:0},
{name:sourceTitle[7],source:"VGA",sourceInput:0,icon:"images/Icon-Sourse_VGA.png",showFlag:0},
{name:sourceTitle[8],source:"Media",sourceInput:0,icon:"images/Icon_Sourse_Media.png",showFlag:0},
];

var inputListEx = [
{index:0},
{index:0},
{index:0},
{index:0},
{index:0},
{index:0},
{index:0},
{index:0},
{index:0},
];

var sourceTVIndex = 0;
var sourceAVIndex = 0;
var sourceCMPIndex = 0;
var sourceHDMI1Index = 0;
var sourceHDMI2Index = 0;
var sourceHDMI3Index = 0;
var sourceHDMI4Index = 0;
var sourceVGAIndex = 0;
var sourceMediaIndex = 0;

document.onsystemevent 		= notifyProcess;
function notifyProcess(evt)
{
    var msg = evt.which;
	
    switch(msg)
    {
		case top.E_TV_EXCHANGE_END://source change finish
		{
			timeReturn();
            break;
		}
		case top.E_NETWORK_CONNECT_TEST_SUCCESS:
		{
			//if(top.preTempPage == "homePage")
				//top.$("main").contentWindow.showNetworkStatus();
			top.systemEventProc(evt);
		}
			break;
		case top.E_NETWORK_CONNECT_TEST_FAIL:
		{
			//if (top.preTempPage == "homePage")
				//top.$("main").contentWindow.showNetworkStatus();
			top.systemEventProc(evt);
		}
			break;
		default:
		{
			top.systemEventProc(evt);
			break;
		}
    }
}
document.onkeydown = keyDownProcess;
function keyDownProcess(evt)
{
	var ret = true;
	var keycode = evt.which;
	switch (keycode)
	{
		case top.VK_UP:
		{
			if(pressSourceTimer!=0)
			{
				clearTimeout(pressSourceTimer);
				pressSourceTimer=0;
				toOk();
			}
			toUp();
			ttsRead();
			ret = false;
			break;
		}
		case top.VK_DOWN:
		{
			if(pressSourceTimer!=0)
			{
				clearTimeout(pressSourceTimer);
				pressSourceTimer=0;
				toOk();
			}
			toDown();
			ttsRead();
			ret = false;
			break;
		}
		case top.VK_ENTER:
		{
			if(pressSourceTimer!=0)
			{
				clearTimeout(pressSourceTimer);
				pressSourceTimer=0;
			}
			toOk();
			ret = false;
			break;
		}
		case top.VK_SOURCE:
		{
			toDown();
			if(pressSourceTimer!=0)
			{
				clearTimeout(pressSourceTimer);
				pressSourceTimer=0;
			}
			pressSourceTimer=setTimeout(function()
			{
			toOk();
			pressSourceTimer=0;
			},800);
			break;
		}
		case top.VK_BACK: //back
			doExit();
			ret = false;
			break;
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

function initInputList()
{
	var i = 0;
	sourceTVIndex = i++;
	sourceAVIndex = i++;
	sourceCMPIndex = i++;
	sourceHDMI1Index = i++;
	sourceHDMI2Index = i++;
	sourceHDMI3Index = i++;
	sourceHDMI4Index = i++;
    sourceVGAIndex = i++;
	sourceMediaIndex = i++;
}

function showSourcePageDown()
{
	for(var i=0 ; i<5 ; i++)
	{
		sourceList[i].style.display="none";
	}
	for(var i=5 ; i<7 ; i++)
	{
		sourceList[i].style.display="block";
	}
}
function showSourcePageUp()
{
	for(var i=0 ; i<5 ; i++)
	{
		sourceList[i].style.display="block";
	}
	for(var i=5 ; i<7 ; i++)
	{
		sourceList[i].style.display="none";
	}
}
function toDown()
{
    timeReturn();
	positionH++;
	if(positionH>=inputSourceCount)
	{
		positionH = 0;
	}
	$("inputSourceFocus").style.top=1+positionH*130+"px";
	top.doEleScrForNoOption(inputNameSpans,positionH, 1);
}
function toUp()
{
	timeReturn();
	positionH--;
	if(positionH<0)
	{
		positionH = inputSourceCount-1;
	}
	$("inputSourceFocus").style.top=1+positionH*130+"px";
	top.doEleScrForNoOption(inputNameSpans,positionH, -1);
}
function switchSource()
{
	/*if(8 == inputListEx[positionH].index && 1 != top.appOpenFlag && 10 == source)
	{
		top.$("operatePage").src = "";
		top.resumeFocus();
		top.setFrameFocusPage("main");
		return;
	}*/
	if(top.g_isDownloading == 0){
		top.g_isDownloading = 1;
		top.g_setting.restartDownloadUpdateFile();
	}
	if (top.appOpenFlag==1)
	{	
		var appname = top.g_setting.getProperty("app.ui.currentApp","tbrowser.mmh");
		top.g_ulits.closeApplication(appname);
		top.scheduleApp = top.SCHEDULE_SWITCHSRC;
		top.lastInputSource=inputList[inputListEx[positionH].index].sourceInput;
		return;
	}
	top.$("operatePage").src = "";
	console.log("top.preTempPage is "+top.preTempPage+" g_lastEnterType is "+top.g_lastEnterType+" index "+inputListEx[positionH].index);
	if(top.preTempPage=="media")
	{
		if(top.g_lastEnterType == 2)//ENTER_PVR_TYPE
		{
			top.g_pvr.mediaStop(0);
			top.g_pvr.pvrExitUninit();
			if(inputListEx[positionH].index == 0)
			{
				top.g_channel.changeToPrevSource();
                top.g_channel.playChannel(top.g_channel.inputSource);
				top.$("main").src = "channelPlay.html";
				top.requestFocus(top.main, 1);
				return;
			}
		}
		else  
		{
			top.g_media.mediaStop(0);
			top.g_media.deviceExitUninit();
		}
	}
	//Call the interface to prevent from the index page after press the Source under the switch to the TV Source sound no video output
	tcl.channel.requestMute(0);
	top.$("main").src = "channelPlay.html";
	top.requestFocus(top.main, 1);
	switch(inputListEx[positionH].index)
	{
		case 0:
			if(source!=1&&source!=0)
			{
				if(top.recordStatusFlag == 1)
				{
					top.$("globleShow").contentWindow.hiddenRecord();
					top.$('main').src = "pvr/Pvr.html?inputsource&1";
					return;
				}
				else if(top.timeShiftStatusFlag == 1)
				{
					top.$("globleShow").contentWindow.hiddenTimeShift();
					top.$('main').src = "pvr/timeshift.html?inputsource&1";
					return;
				}
				if(top.currentPanel==1)
				{
					if(top.g_setting.pic3DMode!=0)
					{
						top.g_setting.pic3DMode=0;
						top.$("globleShow").contentWindow.hiddenGlassRemind();
					}
				}
				else if(top.currentPanel==2)
				{
					if(top.g_setting.pic3DMode!=0)
					{
						top.g_setting.pic3DMode=0;
					}
				}
				source=inputList[sourceTVIndex].sourceInput;
				channel.inputSource=inputList[sourceTVIndex].sourceInput;
				if(getSportModeType())//la sports mode
				{
					turnOnSportMode();
				}
			}
			break;
		case 1:
			if(source!=inputList[sourceAVIndex].sourceInput)
			{
				if(top.recordStatusFlag == 1)
				{
					top.$("globleShow").contentWindow.hiddenRecord();
					top.$('main').src = "pvr/Pvr.html?inputsource&11";
					return;
				}
				else if(top.timeShiftStatusFlag == 1)
				{
					top.$("globleShow").contentWindow.hiddenTimeShift();
					top.$('main').src = "pvr/timeshift.html?inputsource&11";
					return;
				}
				if(top.currentPanel==1)
				{
					if(top.g_setting.pic3DMode!=0)
					{
						top.g_setting.pic3DMode=0;
						top.$("globleShow").contentWindow.hiddenGlassRemind();
					}
				}
				else if(top.currentPanel==2)
				{
					if(top.g_setting.pic3DMode!=0)
					{
						top.g_setting.pic3DMode=0;
					}
				}
				source=inputList[sourceAVIndex].sourceInput;
				channel.inputSource=inputList[sourceAVIndex].sourceInput;
			}
			break;
		case 2:
			if(source!=inputList[sourceCMPIndex].sourceInput)
			{
				if(top.recordStatusFlag == 1)
				{
					top.$("globleShow").contentWindow.hiddenRecord();
					top.$('main').src = "pvr/Pvr.html?inputsource&4";
					return;
				}
				else if(top.timeShiftStatusFlag == 1)
				{
					top.$("globleShow").contentWindow.hiddenTimeShift();
					top.$('main').src = "pvr/timeshift.html?inputsource&4";
					return;
				}
				if(top.currentPanel==1)
				{
					if(top.g_setting.pic3DMode!=0)
					{
						top.g_setting.pic3DMode=0;
						top.$("globleShow").contentWindow.hiddenGlassRemind();
					}
				}
				else if(top.currentPanel==2)
				{
					if(top.g_setting.pic3DMode!=0)
					{
						top.g_setting.pic3DMode=0;
					}
				}
				source=inputList[sourceCMPIndex].sourceInput;
				channel.inputSource=inputList[sourceCMPIndex].sourceInput;
			}
			break;
		case 3:
			if(source!=inputList[sourceHDMI1Index].sourceInput)
			{
				if(top.recordStatusFlag == 1)
				{
					top.$("globleShow").contentWindow.hiddenRecord();
					top.$('main').src = "pvr/Pvr.html?inputsource&6";
					return;
				}
				else if(top.timeShiftStatusFlag == 1)
				{
					top.$("globleShow").contentWindow.hiddenTimeShift();
					top.$('main').src = "pvr/timeshift.html?inputsource&6";
					return;
				}
				if(top.currentPanel==1)
				{
					if(top.g_setting.pic3DMode!=0)
					{
						top.g_setting.pic3DMode=0;
						top.$("globleShow").contentWindow.hiddenGlassRemind();
					}
				}
				else if(top.currentPanel==2)
				{
					if(top.g_setting.pic3DMode!=0)
					{
						top.g_setting.pic3DMode=0;
					}
				}
				source=inputList[sourceHDMI1Index].sourceInput;
				channel.inputSource=inputList[sourceHDMI1Index].sourceInput;
			}
			break;
		case 4:
			if(source!=inputList[sourceHDMI2Index].sourceInput)
			{
				if(top.recordStatusFlag == 1)
				{
					top.$("globleShow").contentWindow.hiddenRecord();
					top.$('main').src = "pvr/Pvr.html?inputsource&7";
					return;
				}
				else if(top.timeShiftStatusFlag == 1)
				{
					top.$("globleShow").contentWindow.hiddenTimeShift();
					top.$('main').src = "pvr/timeshift.html?inputsource&7";
					return;
				}
				if(top.currentPanel==1)
				{
					if(top.g_setting.pic3DMode!=0)
					{
						top.g_setting.pic3DMode=0;
						top.$("globleShow").contentWindow.hiddenGlassRemind();
					}
				}
				else if(top.currentPanel==2)
				{
					if(top.g_setting.pic3DMode!=0)
					{
						top.g_setting.pic3DMode=0;
					}
				}
				source=inputList[sourceHDMI2Index].sourceInput;
				channel.inputSource=inputList[sourceHDMI2Index].sourceInput;
			}
			break;
		case 5:
			if(source!=inputList[sourceHDMI3Index].sourceInput)
			{
				if(top.recordStatusFlag == 1)
				{
					top.$("globleShow").contentWindow.hiddenRecord();
					top.$('main').src = "pvr/Pvr.html?inputsource&8";
					return;
				}
				else if(top.timeShiftStatusFlag == 1)
				{
					top.$("globleShow").contentWindow.hiddenTimeShift();
					top.$('main').src = "pvr/timeshift.html?inputsource&8";
					return;
				}
				if(top.currentPanel==1)
				{
					if(top.g_setting.pic3DMode!=0)
					{
						top.g_setting.pic3DMode=0;
						top.$("globleShow").contentWindow.hiddenGlassRemind();
					}
				}
				else if(top.currentPanel==2)
				{
					if(top.g_setting.pic3DMode!=0)
					{
						top.g_setting.pic3DMode=0;
					}
				}
				source=inputList[sourceHDMI3Index].sourceInput;
				channel.inputSource=inputList[sourceHDMI3Index].sourceInput;
			}
			break;
		case 6:
			if(source!=inputList[sourceHDMI4Index].sourceInput)
			{
				if(top.recordStatusFlag == 1)
				{
					top.$("globleShow").contentWindow.hiddenRecord();
					top.$('main').src = "pvr/Pvr.html?inputsource&12";
					return;
				}
				else if(top.timeShiftStatusFlag == 1)
				{
					top.$("globleShow").contentWindow.hiddenTimeShift();
					top.$('main').src = "pvr/timeshift.html?inputsource&12";
					return;
				}
				if(top.currentPanel==1)
				{
					if(top.g_setting.pic3DMode!=0)
					{
						top.g_setting.pic3DMode=0;
						top.$("globleShow").contentWindow.hiddenGlassRemind();
					}
				}
				else if(top.currentPanel==2)
				{
					if(top.g_setting.pic3DMode!=0)
					{
						top.g_setting.pic3DMode=0;
					}
				}
				source=inputList[sourceHDMI4Index].sourceInput;
				channel.inputSource=inputList[sourceHDMI4Index].sourceInput;
			}
			break;
        case 7:
			if(source!=inputList[sourceVGAIndex].sourceInput)
			{
				if(top.recordStatusFlag == 1)
				{
					top.$("globleShow").contentWindow.hiddenRecord();
					top.$('main').src = "pvr/Pvr.html?inputsource&5";
					return;
				}
				else if(top.timeShiftStatusFlag == 1)
				{
					top.$("globleShow").contentWindow.hiddenTimeShift();
					top.$('main').src = "pvr/timeshift.html?inputsource&5";
					return;
				}
				if(top.currentPanel==1)
				{
					if(top.g_setting.pic3DMode!=0)
					{
						top.g_setting.pic3DMode=0;
						top.$("globleShow").contentWindow.hiddenGlassRemind();
					}
				}
				else if(top.currentPanel==2)
				{
					if(top.g_setting.pic3DMode!=0)
					{
						top.g_setting.pic3DMode=0;
					}
				}
				source=inputList[sourceVGAIndex].sourceInput;
				channel.inputSource=inputList[sourceVGAIndex].sourceInput;
			}
			break;
        case 8:
            if (1/*source != inputList[sourceMediaIndex].sourceInput*/) {
                if (top.recordStatusFlag == 1) {
                    top.$("globleShow").contentWindow.hiddenRecord();
                    top.$('main').src = "pvr/Pvr.html?inputsource&10";
                    return;
                }
                else if (top.timeShiftStatusFlag == 1) {
                    top.$("globleShow").contentWindow.hiddenTimeShift();
                    top.$('main').src = "pvr/timeshift.html?inputsource&10";
                    return;
                }
                if (top.currentPanel == 1) {
                    if (top.g_setting.pic3DMode != 0) {
                        top.g_setting.pic3DMode = 0;
                        top.$("globleShow").contentWindow.hiddenGlassRemind();
                    }
                }
                else if (top.currentPanel == 2) {
                    if (top.g_setting.pic3DMode != 0) {
                        top.g_setting.pic3DMode = 0;
                    }
                }
                source = inputList[sourceMediaIndex].sourceInput;
                channel.inputSource = inputList[sourceMediaIndex].sourceInput;

                var usbLock = top.g_factory.usbLock;
                var hotelEnable = top.g_factory.hotelEnable;
                if ((usbLock) && (hotelEnable))
                {
                    top.$('main').src = "password.html?usbLock";
                    top.main.focus();
                }
                else
                {
					if(top.g_temp=="menu"||top.g_temp=="source")
						top.g_temp="quickMenu";
					top.$("operatePage").src = "";
					top.$("otherPage").src = "";
					top.$('main').src = "deviceList.html";
					top.requestFocus(top.main, 1);
					top.setFrameFocusPage("main");
                }
            }
            break;
		default:
			break;
	}
	top.g_isShowInfoBar = 1;
}	

function toOk()
{
    try
    {
        console.log("positionH==" + positionH);
        if (sourceChange_timer)
        {
            clearTimeout(sourceChange_timer);
        }
        console.log("g_temp==" + top.g_temp);
        $("inputSourceBgBar").style.display = "none";

        if (positionH != prePositionH)
        {
            top.$("globleShow").contentWindow.hiddenGlassRemind();
        }
        setTimeout("switchSource()", 1);
    }
    catch (er)
    {
        console.log("er:" + er);
    }
}
function doExit()
{
	top.$("operatePage").src = "";
	top.resumeFocus();
	top.setFrameFocusPage("main");	
}
var inputNameSpans;

function testLog(str)
{
	console.log("          ---------->Areos: " + str);
}
function init()
{
    top.initTextDirection(window);
	//面板按键处理场景设置
	top.preTempPage=top.g_temp;
	top.g_temp ="source";
	if(top.preTempPage=="media"&&top.$("main").contentWindow.displayFocusBox !=undefined)
	{
		top.$("main").contentWindow.displayFocusBox(0);
	}
	// if(top.isGingaOn && top.GingaObj.isInit == top.GingaStates.True) //切信源暂停Ginga已移置中间件做
	// {
	// 	top.gingaEvtProc(top.GingaStates.Events.GINGA_EVT_PAUSE_FOR_CONTROL_LOST);
	// }
	initNewSanImage();
	initInputList();
	top.clearMyTimeout();
	setting.contextOf5in1 = top.CONTEXT_MENU_SELECT;
    $("Title").innerHTML=top.others[26];
	sourceList=$("inputsourcelist").getElementsByTagName("div");
	var spans=$("inputsourcelist").getElementsByTagName("span");
	inputNameSpans = $("inputsourcelist").getElementsByClassName("inputSouceName");

    if((top.supportATVSource == 1) || (top.supportDTVSource == 1)) //if(setting.getProperty("ro.sita.model.LiveTV.TV","FALSE") == "TRUE")
    {
        inputList[sourceTVIndex].showFlag = 1;
		var currentChannel = channel.getCurrentChannelInfo();
		console.log("serviceType = "+currentChannel.serviceType);
		inputList[sourceTVIndex].sourceInput = (currentChannel.serviceType==0)?0:1;
		inputSourceCount++;
    }

    if (top.supportSCARTSource == 1)
    {
        inputList[sourceAVIndex].showFlag = 1;
        inputList[sourceAVIndex].sourceInput = top.E_INPUT_SCART;
        inputSourceCount++;
    }
    else if(top.supportAV1Source == 1)
    {
    	inputList[sourceAVIndex].showFlag = 1;
        inputList[sourceAVIndex].sourceInput = top.E_INPUT_AV_I;//av-i
    	inputSourceCount++;
    }
    else if(top.supportAV2Source == 1)
    {
    	inputList[sourceAVIndex].showFlag = 1;
        inputList[sourceAVIndex].sourceInput = top.E_INPUT_AV_II;//av-ii
    	inputSourceCount++;
    }

    if (top.supportYPBPRSource == 1)
    {
        inputList[sourceCMPIndex].showFlag = 1;
        inputList[sourceCMPIndex].sourceInput = top.E_INPUT_YPBPR;
        inputSourceCount++;
    }
    if (top.supportHDMI1Source == 1)
    {
        inputList[sourceHDMI1Index].showFlag = 1;
        inputList[sourceHDMI1Index].sourceInput = top.E_INPUT_HDMI_I;
        inputSourceCount++;
    }
    if (top.supportHDMI2Source == 1)
    {
        inputList[sourceHDMI2Index].showFlag = 1;
        inputList[sourceHDMI2Index].sourceInput = top.E_INPUT_HDMI_II;
        inputSourceCount++;
    }
    if (top.supportHDMI3Source == 1)
    {
        inputList[sourceHDMI3Index].showFlag = 1;
        inputList[sourceHDMI3Index].sourceInput = top.E_INPUT_HDMI_III;
        inputSourceCount++;
    }
    if (top.supportHDMI4Source == 1)
    {
        inputList[sourceHDMI4Index].showFlag = 1;
        inputList[sourceHDMI4Index].sourceInput = top.E_INPUT_HDMI_IV;
        inputSourceCount++;
    }
    if (top.supportVGASource == 1)
    {
        inputList[sourceVGAIndex].showFlag = 1;
        inputList[sourceVGAIndex].sourceInput = top.E_INPUT_PC;
        inputSourceCount++;
    }
	if (top.supportUSBSource == 1)//(top.isFloatLauncher)
	{
		inputList[sourceMediaIndex].showFlag = 1;
		inputList[sourceMediaIndex].sourceInput = top.E_INPUT_STORAGE;
		inputSourceCount++;
    }
    if(top.isAUFlag || top.isLAFlag || top.isNAFlag || top.isAPFlag)
    {
    	if (!top.isFloatLauncher)
		{
        	inputList[1].icon = "images/Icon-Sourse_AV.png";
		}
    }
    /*if (source == 10 && !top.isFloatLauncher)
    {
        source = tcl.channel.getLastinputSource();
    }*/
    var j = 0;
	for(var i=0;i<inputList.length;i++)
	{
        if (inputList[i].showFlag == 0)
        {
            continue;
        }
		inputListEx[j].index = i;
		if(top.isFloatLauncher)
		{
			sourceList[j].style.background = getIcon(i);
			spans[j].style.opacity = getSpanOpacity(i);
		}
		else
		{
			sourceList[j].style.background = "url(" + inputList[i].icon + ")";
		}
		switch(i)
		{
			case 0:
				spans[j].innerHTML=sourceTitle[i];
				break;
			case 1:
				var sourceindex;
				if(top.supportAV1Source == 1)
				{
					sourceindex=top.E_INPUT_AV_I;
				}
				else if(top.supportAV2Source == 1)
				{
					sourceindex=top.E_INPUT_AV_II;
				}
				else
				{
					sourceindex=top.E_INPUT_SCART;
				}

				var inputName = channel.inputSourceDeviceName(sourceindex);
				if(inputName!=0)
				{
					spans[j].innerHTML=sourceTitle[i]+"("+top.sysInputSet[inputName]+")";
				}
				else
				{
					spans[j].innerHTML=sourceTitle[i];
				}
				break;
			case 2:
			var inputName = channel.inputSourceDeviceName(4);
			if(inputName!=0)
			{
				spans[j].innerHTML=sourceTitle[i]+"("+top.sysInputSet[inputName]+")";
			}
			else
			{
				spans[j].innerHTML=sourceTitle[i];
			}
			break;
			case 3:
				var inputName = channel.inputSourceDeviceName(6);
			if(inputName!=0)
			{
				spans[j].innerHTML=sourceTitle[i]+"("+top.sysInputSet[inputName]+")";
			}
			else
			{
				spans[j].innerHTML=sourceTitle[i];
			}
			break;
			case 4:
				var inputName = channel.inputSourceDeviceName(7);
			if(inputName!=0)
			{
				spans[j].innerHTML=sourceTitle[i]+"("+top.sysInputSet[inputName]+")";
			}
			else
			{
				spans[j].innerHTML=sourceTitle[i];
			}
			break;
			case 5:
				var inputName = channel.inputSourceDeviceName(8);
			if(inputName!=0)
			{
				spans[j].innerHTML=sourceTitle[i]+"("+top.sysInputSet[inputName]+")";
			}
			else
			{
				spans[j].innerHTML=sourceTitle[i];
			}
			break;
			case 6:
				var inputName = channel.inputSourceDeviceName(12);
			if(inputName!=0)
			{
				spans[j].innerHTML=sourceTitle[i]+"("+top.sysInputSet[inputName]+")";
			}
			else
			{
				spans[j].innerHTML=sourceTitle[i];
			}
			break;
            case 7:
				var inputName = channel.inputSourceDeviceName(5);
			if(inputName!=0)
			{
				spans[j].innerHTML=sourceTitle[i]+"("+top.sysInputSet[inputName]+")";
			}
			else
			{
				spans[j].innerHTML=sourceTitle[i];
			}
			break;
			case 8:
				var inputName = channel.inputSourceDeviceName(10);
				if(inputName!=0)
				{
					spans[j].innerHTML=sourceTitle[i]+"("+top.sysInputSet[inputName]+")";
				}
				else
				{
					spans[j].innerHTML=sourceTitle[i];
				}
				break;
		}
        if (inputList[i].sourceInput == source)
        {
            positionH = j;
        }
        j++;
	}
    /*
	switch(source)
	{
		case 0:
		case 1:
		positionH=0;
		break;
		case 2:
		case 3:
		case 11:
		positionH=1;
		break;
		case 4:
		positionH=2;
		break;
		case 6:
		positionH=3;
		break;
		case 7:
		positionH=4;
		break;
		case 8:
		positionH=5;
		break;
		case 12:
		positionH=6;
		break;
        case 5:
		positionH=7;
		break;
	}
    */
	prePositionH = positionH;
	$("inputSourceFocus").style.top=1+positionH*130+"px";
	top.requestFocus(top.operatePage, 0);
	top.setFrameFocusPage("operatePage");
	addMouseListener();
	top.doEleScrForNoOption(inputNameSpans,positionH, 0);
    source = tcl.channel.inputSource;
	ttsRead();
}
function timeReturn()
{
	if(sourceChange_timer)
	{
		clearTimeout(sourceChange_timer);
	}
	sourceChange_timer = setTimeout(function() {
		doExit();
	}, 5000);
}
function uninit()
{
	if(top.appOpenFlag && !(top.isFloatLauncher && (top.preTempPage == "homePage") && (top.main.document.body.style.display =="block")))
		top.keySetForUI(0);
	if(top.preTempPage!="media"&&top.preTempPage!="homePage"&&top.g_temp!="quickMenu")
		top.$("main").src = "channelPlay.html";
	top.g_temp =top.preTempPage;
	if(top.preTempPage=="media"&&top.$("main").contentWindow.displayFocusBox !=undefined)
		top.$("main").contentWindow.displayFocusBox(1);

	top.preTempPage="";
	//将快捷键进入该页面的状态清除
	top.g_isUsedHotKeyToIntoPage = 0;
}
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		if(evt.button == 2)doExit();//right key
	}
	var divs=$("inputsourcelist").getElementsByTagName("div");
	for(var i = 0; i < inputSourceCount; i++)
	{
		divs[i].setAttribute("newAttr",i);
		divs[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
					positionH = parseInt(this.getAttribute("newAttr"));
					$("inputSourceFocus").style.top=1+positionH*130+"px";
					toOk();
			}
		}
	}
}

function getSportModeType()//return: [0]simply [1]full
{
	if("TRUE" != setting.getProperty("ro.sita.model.LiveTV.FullySportsMode", "FALSE"))
	{
		return 0;
	}
	//"pvr.getUsbStatus() != 1"		-> 	no usb
	//"!top.g_setting.footballMode"		-> 	sportMode is off
	//"channel.inputSource != 1"	-> 	current source is not dtv
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
	testLog("turn on sport mode test in new device list");
	top.g_previousHtmlPage = "channelPlay.html";
	if(top.timeShiftStatusFlag == 1)
	{
		testLog("the timeshift status is on");
		top.g_pvr.timeshiftStop();
		top.g_pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
		top.timeShiftStatusFlag = 0;
		top.$("globleShow").contentWindow.hiddenTimeShift();
		//如果当前播放的频道不是booking需要跳转到的频道后面会做切台，不需要做下面的操作，如果做了会导致后面的切台不成功
		{
			top.g_pvr.returnToLive();//返回实时播放页面,相当于切台。
		}
	}
	if(top.recordStatusFlag==1)
	{
		testLog("the record status is on");
		top.recordStatusFlag = 0;
		top.g_pvr.recordStop();
		top.g_pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
		top.$("globleShow").contentWindow.hiddenRecord();
		top.pvrCurrentTime = 0;
		top.pvrTotalTime = 2 * 60 * 60;
	}
	testLog("jumppage to sportMode.html");
	top.$('main').src = "pvr/timeshiftInit.html";
	top.$("main").style.display = "block";
	top.$("operatePage").src = "";
	top.requestFocus(top.main, 1);
	top.setFrameFocusPage("main");
}

function ttsRead()
{
	if(0 == top.g_setting.ttsSwitch)
	{
		top.ttsLog("ttsSwitch is off");
		return;
	}
	var ttsStr = "";
	var ttsName = "source,";
	var currentStatus = $("inputsourcelist").getElementsByTagName("span")[positionH].innerHTML;
	ttsStr = ttsName + currentStatus;
	if("" != ttsStr)
	{
		top.ttsLog("ttsStr=" + ttsStr);
		top.setTTSSay(top.SPEECH_TYPE_FLUSH, ttsStr);
	}
}


function initNewSanImage()
{
	if(top.isFloatLauncher)
	{
		inputList = [
			{name:sourceTitle[0],source:"TV",sourceInput:0,icon:"images/TV_newsan.png",showFlag:0,icon_disable:"images/TV_disable_newsan.png",icon_current:"images/TV_current_newsan.png"},
			{name:sourceTitle[1],source:"AV",sourceInput:0,icon:"images/AV_newsan.png",showFlag:0,icon_disable:"images/AV_disable_newsan.png",icon_current:"images/AV_current_newsan.png"},
			{name:sourceTitle[2],source:"CMP",sourceInput:0,icon:"images/Icon-Sourse_CMP.png",showFlag:0,icon_disable:"images/Icon-Sourse_CMP.png",icon_current:"images/Icon-Sourse_CMP.png"},
			{name:sourceTitle[3],source:"HDMI1",sourceInput:0,icon:"images/HDMI_newsan.png",showFlag:0,icon_disable:"images/HDMI_disable_newsan.png",icon_current:"images/HDMI_current_newsan.png"},
			{name:sourceTitle[4],source:"HDMI2",sourceInput:0,icon:"images/HDMI_newsan.png",howFlag:0,icon_disable:"images/HDMI_disable_newsan.png",icon_current:"images/HDMI_current_newsan.png"},
			{name:sourceTitle[5],source:"HDMI3",sourceInput:0,icon:"images/HDMI_newsan.png",showFlag:0,icon_disable:"images/HDMI_disable_newsan.png",icon_current:"images/HDMI_current_newsan.png"},
			{name:sourceTitle[6],source:"HDMI4",sourceInput:0,icon:"images/HDMI_newsan.png",showFlag:0,icon_disable:"images/HDMI_disable_newsan.png",icon_current:"images/HDMI_current_newsan.png"},
			{name:sourceTitle[7],source:"VGA",sourceInput:0,icon:"images/Icon-Sourse_VGA.png",showFlag:0,icon_disable:"images/Icon-Sourse_VGA.png",icon_current:"images/Icon-Sourse_VGA.png"},
			{name:sourceTitle[8],source:"Media",sourceInput:0,icon:"images/usb_newsan.png",showFlag:0,icon_disable:"images/usb_disable_newsan.png",icon_current:"images/usb_current_newsan.png"},
		];
		// console.log("[Hugo] launcherName = "+top.launcherName);
		// $("inputSourceBg").src = "images/background_"+top.launcherName+".png";
		// $("inputSourceBgBar").style = "	background-image: url('images/background_newsan.png');background-repeat: no-repeat;";
		$("inputSourceBgBar").classList.add("inputSourceBarNewsan");
	}else
	{
		// $("inputSourceBgBar").style = "background:#000;border:4px solid #1b1b1b;opacity:0.92;";
		$("inputSourceBgBar").classList.add("inputSourceBarOther");
	}
}
function getIcon(i)
{
	var id = inputList[i].sourceInput;
	var icon = "url(" + inputList[i].icon + ")";
	var icon_disable = "url(" + inputList[i].icon_disable + ")";
	var icon_current = "url(" + inputList[i].icon_current + ")";

	if(top.isFloatLauncher)
	{
		if(id == tcl.channel.inputSource)
		{
			return icon_current;
		}
		if(tcl.setting.isSourceInsert(id))
		{
			return icon;
		}
		else if(id == 10 && tcl.media.deviceStatus())
		{
			return icon;
		}
		else
		{
			return icon_disable;
		}
	}
	else
	{
		return "url(" + inputList[i].icon + ")";
	}
}

function getSpanOpacity(i)
{
	var id = inputList[i].sourceInput;
	if(top.isFloatLauncher)
	{
		if(tcl.setting.isSourceInsert(id))
		{
			console.log("-----leaping----isInsert");
			return 1;
		}
		else if(id == 10 && tcl.media.deviceStatus())
		{
			console.log("-----leaping----USBInsert");
			return 1;
		}
		else if(id == tcl.channel.inputSource)
		{
			console.log("-----leaping----currentsource");
			return 1;
		}
		else
		{
			return 0.5;
		}
	}
	else
	{
		return 0.5
	}
}