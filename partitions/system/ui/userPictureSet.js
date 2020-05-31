var userPicConName          = [top.picOptions[0],top.picOptions[17],top.picOptions[1],top.picOptions[2],top.picOptions[3],top.picOptions[4],top.picOptions[5],top.picOptions[6],top.picOptions[7],top.picOptions[9],top.picOptions[8],top.picAdOptions[12],top.picOptions[10],top.picOptions[11],top.picOptions[12],top.picOptions[13],top.picOptions[14],top.picOptions[15],top.picOptions[16]];
var picAutoFormat           = top.offOn;
var picSize                 = top.picSize;
var picShowSize             = new Array(15);//用来保存可显示的picture size 值
var picPreset 				= [top.picPreset[0], top.picPreset[1], top.picPreset[2],
			   				   top.picPreset[3], top.resetStadium, top.picPreset[4]];
var picPAP                  = [top.offOn[0],top.direction[0],top.direction[1]];
var picReset                = [top.picResetDes,top.okCancel[0],top.okCancel[1]];
var picPromptCon            = [top.prompts[0],top.prompts[1],top.prompts[2],top.prompts[3],top.prompts[4],
								top.prompts[5],top.prompts[6],top.prompts[7],top.prompts[8],top.prompts[9],
								top.prompts[10],top.prompts[11],top.prompts[29],top.prompts[30]];
var pic3dNavig              = top.pic3dNavig;
var picColorTemp            = top.picColorTemp;
var sportEnhanceSwitchValue        = top.offOn;
var focus_R_Focus           = ["images/arrow/focus_R-Focus.png","images/arrow/R-Focus.png"]
var colorFont               = ["#FFFFFF","#7B7B7B"];
var picPromptImg            = ["images/info-1_2.png","images/info-1_3.png","images/info-1_4.png","images/info-1_5.png","images/info-1_6.png"];
var zoomPreviewImg = ["images/Screen_mode_169_format.png","images/Screen_mode_43_format.png","images/Screen_mode_149_Zoom.png","images/Screen_mode_Cinerama.png","images/Screen_mode_169_Zoom.png","images/Screen_mode_169_Zoomup.png","images/Screen_mode_149_Zoom.png","images/Screen_mode_Stretch_Zoom.png","images/Screen_mode_Wide_Zoom2.png","images/Screen_mode_Zoom2.png","images/Screen_mode_Wide_Zoom2.png","images/Screen_mode_169_format.png","images/Screen_mode_169_format.png","images/Screen_mode_169_format.png","images/Screen_mode_169_format.png"];
var SUB_MENU_START 			= 90;					//二级级菜单焦点移动起始位置
var SUB_MENU_STEP 			= 70;					//二级级主菜单焦点移动的step
var positionV               = 0;                    //主界面坐标
var presetPositionV         = 0;                    //preset 界面焦点坐标
var presetPositionH         = 0;                    //preset 界面当前值的枚举 用来中间操作+—用
var presetFocusWidth        = 230;
var picturePage             = 0;                    //主界面共有两页 表示当前是第几页
var setting                 = top.g_setting;
var source                  = top.g_channel.inputSource;
var sourcePC                = 5                     //用来表示pc信源 为以后更改
var programStatus           = top.g_channel.channelProgramStatus();//节目状态
var inputLockp              = top.g_channel.inputUnlockState(source);//信源锁状态
var signalStatus            = top.g_channel.currentSignalStatus;//信号状态
var zoomSmallWinState       = top.g_setting.zoomSmallWindowsState;//是否是小窗口模式
var screenSaverMode         = top.g_channel.currentScreenSaverMode;//屏保模式
var brightness              = 0;
var contrast                = 0;
var saturation              = 0;
var sharpness               = 0;
var backLight               = 0;
var tint                    = 0 ;
var pictureMode             = 0;                    //setting.pictureMode
var colorTempVal            = 0;
var showColorTemp           = 0;
var lis;                                            //用来获取主页面列表
var imgs                                            //用来获取Ul里的iMG列表
var sizeNum                 = new Array(5);         //存储picture size 当前页面五个值
var nowSizeNum              = 0;                    //当前picture size 值
var sizeCount               = 0;                    //可用的picture size 个数
var currentSizeNum          = 0;
var showPreSize             = 0;                    //保存调整picture size 之间的picture size 用于back返回时恢复值
var showScreenMode          = 0;                    //是否显示ScreenMode
var adjustOption            = 0;                    //正在调整值的选项
var presetPositionInit      = 5;                    //用来调整preset 选项列表的焦点位置
var autoFormatValue         = 0;                    //保存autoFormat 值
var picSportEnhanceValue    = 0;                    //保存PAP的值
var picOverScanValue        = 0;
var picMircoDimmingValue	= 0;					//保存MircoDimming的值
var pic3dNavigValue         = 0;                    //保存3dNavig的值
var isReset                 = 0;                    //标记是否重置picture
var papShowValue            = 1;                    //标记pap是否显示
var sportEnhance            = 0;
var pic3DMode               = 0;
var offsetPosition          = 0;
var tintEnable              = setting.getHueEnable;
var pannelType              = top.currentPanel;
var energySaveStatus        = setting.energySaving;
var focusType               = "pictureList";
var menuTimer               = 0;

var factory                = top.g_factory;
var menuLock               = 0;
var hotelEnable            = 0;
var titleWords 			   = top.sysOptions[3];
var psswordWords		   = top.others[2];
var passwordLength         = 0;
var password               = "";                  
var passIncorrectWords      = top.passError;
var lockFlag               = 1;
var otherPreSetSpans;
var zoomSpans;
var zoomImg;

var screenWidth = 1920;
var preSetBarOptionWidth = 390;
var preSetBarStep = 230;

var menuList =[
{name:"picturePreset",param:function(){showPicturePreset()},showFlag:1},
{name:"mircoDimming",param:function(){showMircoDimmingMenu()},showFlag:1},
{name:"backlight",param:function(){adjustOption=2;showAdjustBar(0)},showFlag:1},
{name:"brightness",param:function(){adjustOption=3;showAdjustBar(0)},showFlag:1},
{name:"contrast",param:function(){adjustOption=4;showAdjustBar(0)},showFlag:1},
{name:"saturation",param:function(){adjustOption=5;showAdjustBar(0)},showFlag:1},
{name:"tint",param:function(){adjustOption=6;showAdjustBar(0)},showFlag:1},
{name:"sharpness",param:function(){adjustOption=7;showAdjustBar(0)},showFlag:1},
{name:"coloTemp",param:function(){showColorTempSelMenu()},showFlag:1},
{name:"autoFormat",param:function(){showAutoFormatMenu()},showFlag:1},
{name:"screenMode",param: function(){showSelScrMode()},showFlag:1},
{name:"overScan",param:function(){showPapSelMenu()},showFlag:1},
{name:"sportEnhance",param:function(){showSportEnhanceMenu()},showFlag:1},
{name:"pic3D",param:function(){parent.popWindow(2,'pictureSetting/picture3Dsetting.html')},showFlag:1},
{name:"pic3DManual",param:function(){show3dNavigaSelMenu()},showFlag:1},
{name:"ecoSetting",param:function(){parent.jumpPage(2,'pictureSetting/pictureEcoSetting.html')},showFlag:1},
{name:"geoSetting",param:function(){parent.popWindow(2,'pictureSetting/geometrySetting.html')},showFlag:1},
{name:"advancedSetting",param:function(){parent.jumpPage(2,'pictureSetting/advancedSetting.html')},showFlag:1},
{name:"pictureReset",param:function(){showPicReset()},showFlag:1}
]
document.onsystemevent = notifyProcess;
var setTimeoutId = 0;
var factoryPassword = "";
function notifyProcess(evt)
{
    var msg = evt.which;
	//全局消息
	switch(msg)
	{
		case top.E_REFRESH_PICTURE_SIZE:
            {
                updatePicture(findName(positionV));
                break;
            }
		default:
			top.systemEventProc(evt);
			break;
	}
}


//top.timeoutMyFuc(evt,keyDownProcess);
function keyDownProcess(evt)
{
	var ret = true;
	var keycode = evt.which;
	//如果按键不是虚拟按键T键，且不是方向键、确认键、返回键，且不是鼠标左键lqt
	if(keycode!=top.VK_VIRTUAL_REMOTE&&(keycode<top.VK_VIRTUAL_KEYBOARD_LEFT||keycode>top.VK_VIRTUAL_KEYBOARD_BACK)&&keycode!=top.VK_VIRTUAL_MOUSE_OK)
	{
		if(keycode<top.VK_0||keycode>top.VK_9)//按虚拟遥控器会产生的按键
		{
			console.log("-----keycode----"+keycode);
			//如果是显示的话，就隐藏
			if(top.virtualRemoteState == 1)
			{
				//隐藏虚拟遥控器
				top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
			}
		}
		
	}
	switch (keycode)
	{
	
		case top.VK_VIRTUAL_REMOTE:
			//显示或者不显示--lqt
			if(top.virtualRemoteState == 0)
			{
				if($("passForm").style.display == "block")//1、需要输入密码的时候
				{
					top.document.getElementById("virtualRemote").contentWindow.showVirtualRemote("TimeBox");
				}
				else if(findName(positionV)=="contrast")//2、如果当前焦点是在contrast上的时候
				{
					top.document.getElementById("virtualRemote").contentWindow.showVirtualRemote("TimeBox");
				}
				else
				{
				}
				
			}
			else
			{
				//隐藏虚拟遥控器
				top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
			}
			break;
		//lqt--虚拟遥控器的上键
		case top.VK_VIRTUAL_KEYBOARD_UP:
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForUp();
			
			break;
		}
		//lqt--虚拟遥控器的下键
		case top.VK_VIRTUAL_KEYBOARD_DOWN:
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForDown();
			
			break;
		}
		//lqt--虚拟遥控器的左键
		case top.VK_VIRTUAL_KEYBOARD_LEFT:
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForLeft();
			
			break;
		}
		//lqt--虚拟遥控器的右键
		case top.VK_VIRTUAL_KEYBOARD_RIGHT:
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForRight(); 
			
			break;
		}
		//lqt--鼠标的左键
		case top.VK_VIRTUAL_MOUSE_OK:
		{
			var clientX = top.g_setting.getProperty("memory.app.ui.virtualRemote.clientX", "0");
			var clientY = top.g_setting.getProperty("memory.app.ui.virtualRemote.clientY", "0");
			console.log("lqt---systemSet.js---clientX: "+clientX);
			console.log("lqt---systemSet.js---clientY: "+clientY);
			top.document.getElementById("virtualRemote").contentWindow.keyDownMouseClick(clientX,clientY); 
			
			break;
		}
		//lqt--虚拟遥控器的ok键
		case top.VK_VIRTUAL_KEYBOARD_OK:
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForOK(); 
			
			break;
		}
		//lqt--虚拟遥控器的返回键
		case top.VK_VIRTUAL_KEYBOARD_BACK:
		{
			//如果是显示的话，就隐藏
			if(top.virtualRemoteState == 1)
			{
				//隐藏虚拟遥控器
				top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
			}
			
			break;
		}
		case top.VK_UP:
		{
			//up
			toUp();
			ttsRead();
			ret = false;
			break;
		}
			
		case top.VK_DOWN:
		{
			//down
			toDown();
			ttsRead();
			ret = false;
			break;
		}
			
		case top.VK_ENTER:
		{
			//OK 键
			toOK();
			ttsRead();
			ret = false;
			break;
		}
		case top.VK_LEFT:
			toLeft();
			ttsRead();
			ret = false;
			break;  
		case top.VK_RIGHT:
			toRight();
			ttsRead();
			ret = false;
			break;
		case top.VK_BACK: //back
		{
			toBack();
			ttsRead();
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
		if((menuLock) && (hotelEnable) && (lockFlag))
		{
			doCheck(evt.which - 48);
			ret = false;
		}
		else
		{
			if(findName(positionV)=="contrast")
			{
				//开始设置工厂菜单
				if(setTimeoutId == 0)
				{
					factoryPassword = "" + (keycode - 48);
					setTimeoutId = setTimeout("judgeFactoryPass()",3000);
				}
				else
				{
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
		}
		break;
	    default:
			top.keyDownProcess(evt);
		break;
	}
	if((menuLock) && (hotelEnable) && (lockFlag))
	{
		return ret;
	}
	else
	{
		showPromptCont();
		return ret;
	}
}

function $(id)
{
    return document.getElementById(id);
}
function toDown()
{
	if(focusType=="pictureList")
	{
		if((menuLock) && (hotelEnable) && (lockFlag))
		{
			return ;
		}
		else if(setting.footballMode)
		{
            if(findName(positionV)=="mircoDimming")
            {
                positionV=0;
            }
            else
            {
                positionV++;
            }
            doOffsetMenuList(positionV);
		}
		else
		{
			if(findName(positionV)=="pictureReset")
			{
				positionV=0;
			}
			else
			{
				positionV++;
			}
			doOffsetMenuList(positionV);
		}
		 top.doEleScrForNoOption(listFirstSpans, findRealPosition(positionV), 1);
	}
	else if(focusType=="adjustBar")
	{
		adjustUpOption = -1;
		findAdjustDownOption(adjustOption);
		if(adjustDownOption!=-1)
		{
			adjustOption = adjustDownOption;
			showAdjustBar(0);
		}
	}
}
function toUp()
{
	if(focusType=="pictureList")
	{
		if((menuLock) && (hotelEnable) && (lockFlag))
		{
			return;
		}
		else if(setting.footballMode)
		{
            if(findName(positionV)=="picturePreset")
            {
                positionV=findPosition("mircoDimming");
            }
            else
            {
                positionV--;
            }
            doOffsetMenuList(positionV);
		}
		else
		{
			if(findName(positionV)=="picturePreset")
			{
				positionV=findPosition("pictureReset");
			}
			else
			{
				positionV--;
			}
			doOffsetMenuList(positionV);
		}
		 top.doEleScrForNoOption(listFirstSpans, findRealPosition(positionV), -1);
	}
	else if(focusType=="adjustBar")
	{
		findAdjustUpOption(adjustOption);
		if(adjustUpOption!=-1)
		{
			adjustOption = adjustUpOption;
			showAdjustBar(0);
		}
	}
}
function toOK()
{
	if((menuLock) && (hotelEnable) && (lockFlag))
	{
		if(focusType=="pictureList")
		{
			initPass();
			$("promptWin").style.display="none";
		}
	}
	else
	{
		if(focusType=="pictureList")
		{
			findFunction(positionV);
		}		
		else if(focusType=="picPreset")
		{
			preSetBarStep = 230;
			presetFocusWidth = 230;
			setPresetWidth(140);
			$("preSetSelectFocus").style.width = 230 + "px";
			pictureMode=presetPositionH;
			setting.pictureMode=pictureModeTransform(pictureMode, 1);
			updatePicture("picturePreset");
			$("preSetBar").style.display="none";
			parent.showPage(1);
			focusType="pictureList";
		}
		else if(focusType=="picShowScreen")
		{
			nowSizeNum = picShowSize[currentSizeNum];
			setting.pictureSize=nowSizeNum;
			updatePicture("screenMode");
			$("preZoomSetBar").style.display="none";
			parent.showPage(1);
			focusType="pictureList";
		}
		else if(focusType=="papMenu")
		{
			picOverScanValue = presetPositionH;
			setting.overscan = picOverScanValue;
			ttsOverScanValue=picOverScanValue;
			updatePicture("overScan");
			$("preSetBar").style.display="none";
			parent.showPage(1);
			focusType="pictureList";
		}
        else if(focusType=="MircoDimmingMenu")
        {
            picMircoDimmingValue = presetPositionH;
            setting.localDimming = picMircoDimmingValue;
            updatePicture("mircoDimming");
            $("preSetBar").style.display="none";
            parent.showPage(1);
            focusType="pictureList";
        }
		else if(focusType=="picSportEnhance")
		{
			picSportEnhanceValue = presetPositionH;
			setting.sportEnhanceSwitch = picSportEnhanceValue;
			updatePicture("sportEnhance");
			$("preSetBar").style.display="none";
			parent.showPage(1);
			focusType="pictureList";
		}
		else if(focusType=="pic3DNavigaMenu")
		{
			
			if(presetPositionH == 0)
			{
				pic3dNavigValue = presetPositionH;
			}
			else
			{
				pic3dNavigValue = presetPositionH + 1;
			}
			setting.pic3DNavigtion=pic3dNavigValue;
			updatePicture("pic3DManual");
			$("preSetBar").style.display="none";
			parent.showPage(1);
			focusType="pictureList";
		}
		else if(focusType=="ColorTempMenu")
		{
			colorTempVal = presetPositionH;
			setting.colorTemparature = colorTempVal;
			updatePicture("coloTemp");
			$("preSetBar").style.display="none";
			parent.showPage(1);
			focusType="pictureList";
		}
		else if(focusType=="autoFormat")
		{
			autoFormatValue = presetPositionH;
			setting.autoFormat = autoFormatValue;
			updatePicture("autoFormat");
			$("preSetBar").style.display="none";
			parent.showPage(1);
			focusType="pictureList";
		}
		else if(focusType=="picReset")
		{
			if(isReset==1)
			{
				isReset=0;
				setting.freeze = 0;//重置picture设置时，将freeze也重置，中间件的同志说picture reset的接口不会重置freeze
				setting.videoReset();
				updatePicture("pictureReset");
			}
			$("picReset").style.display="none";
			$("picResetFocus").style.left="420px";
			$("listFocus").style.display="block";
			parent.showPage(1);
			focusType="pictureList";
		}
	}
}
function uninit()
{
	top.timeoutFuc.timeoutTimes = 30;
	toExit();
}

function toExit()
{
	if(focusType=="picPreset")
	{
		setting.previewPictureMode(pictureModeTransform(pictureMode, 1));
	}
	else if(focusType=="picShowScreen")
	{
		setting.previewScreenMode(nowSizeNum);
	}
	else if(focusType=="papMenu")
	{
		setting.previewOverScan(picOverScanValue);
	}
	else if(focusType=="picSportEnhance")
	{
		setting.previewSportEnhanceMent(picSportEnhanceValue);
	}
	else if(focusType=="pic3DNavigaMenu")
	{
		setting.pic3DNavigtion=pic3dNavigValue;//以后新增加接口
	}
	else if(focusType=="ColorTempMenu")
	{
		setting.previewColorTemp(colorTempVal);
	}
    else if(focusType=="autoFormat")
	{
		setting.previewAutoFormat(autoFormatValue);
	}
}
function toBack()
{
	if(focusType=="pictureList")
	{
        top.doEleScrForNoOption(listFirstSpans, -1, -1);
		parent.returnPage(1);
	}
	else if(focusType=="picPreset")
	{
		setting.previewPictureMode(pictureModeTransform(pictureMode, 1));
		updatePicture("picturePreset");
		$("preSetBar").style.display="none";
		parent.showPage(1);
		preSetBarStep = 230;
		presetFocusWidth = 230;
		setPresetWidth(140);
		$("preSetSelectFocus").style.width = 230 + "px";
		focusType="pictureList";
	}
	else if(focusType=="adjustBar")
	{
		updatePicture(menuList[adjustOption].name);
		top.timeoutFuc.timeoutTimes = 30;
		$("listFocus").style.top=SUB_MENU_START+positionV*SUB_MENU_STEP+"px";
		$("adjustProgressBox").style.display="none";
		parent.showPage(1);
		focusType="pictureList";
	}
	else if(focusType=="picShowScreen")
	{
		setting.previewScreenMode(nowSizeNum);
		updatePicture("screenMode");
		$("preZoomSetBar").style.display="none";
		parent.showPage(1);
		focusType="pictureList";
	}
	else if(focusType=="papMenu")
    {
        setting.previewOverScan(picOverScanValue);
        updatePicture("overScan");
        $("preSetBar").style.display="none";
        parent.showPage(1);
        focusType="pictureList";
    }
    else if(focusType=="MircoDimmingMenu")
    {
        updatePicture("mircoDimming");
        $("preSetBar").style.display="none";
        parent.showPage(1);
        focusType="pictureList";
    }
	else if(focusType=="picSportEnhance")
	{
		setting.previewSportEnhanceMent(picSportEnhanceValue);
		updatePicture("sportEnhance");
		$("preSetBar").style.display="none";
		parent.showPage(1);
		focusType="pictureList";
	}
	else if(focusType=="pic3DNavigaMenu")
	{
		setting.pic3DNavigtion=pic3dNavigValue;//以后新增加接口
		updatePicture("pic3DManual");
		$("preSetBar").style.display="none";
		parent.showPage(1);
		focusType="pictureList";
	}
	else if(focusType=="ColorTempMenu")
	{
		setting.previewColorTemp(colorTempVal);
		updatePicture("coloTemp");
		$("preSetBar").style.display="none";
		parent.showPage(1);
		focusType="pictureList";
	}
	else if(focusType=="picReset")
	{
		isReset=0;
		$("picReset").style.display="none";
		$("picResetFocus").style.left="420px";
		$("listFocus").style.display="block";
		parent.showPage(1);
		top.restartTimeout();
		focusType="pictureList";
	}
	else if(focusType=="autoFormat")
	{
		setting.previewAutoFormat(autoFormatValue);
		updatePicture("autoFormat");
		$("preSetBar").style.display="none";
		parent.showPage(1);
		focusType="pictureList";
	}
	else if(focusType=="password")
	{
		$("passForm").style.display = "none";
		parent.showPage(1);
		focusType = "pictureList";
	}
}
function toLeft()
{
	if(focusType=="pictureList")
	{
		toBack();
	}
	else if(focusType=="adjustBar")
	{
		adjustBarValue(-1);
	}
	else if(focusType=="picPreset")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH=picPreset.length - 1;
		}
		$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
		setting.previewPictureMode(pictureModeTransform(presetPositionH, 1));
		top.doElementScroll(otherPreSetSpans,presetPositionH);
	}
	else if(focusType=="picShowScreen")
	{
		 getPreviousPictureSize();
		 presetPositionH--;
		 if(presetPositionH<0)
		 {
			sizeCurrentPage--;
			if(sizeCurrentPage==0)
			{
				sizeCurrentPage=sizeCountPage;
			}
			showScrList();
			return;
		 }
		 top.doElementScroll(zoomSpans,presetPositionH);
		 $("preZoomSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
	}
	else if(focusType=="papMenu")
    {
        presetPositionH--;
        if(presetPositionH<0)
        {
            presetPositionH=1;
        }
        $("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
        setting.previewOverScan(presetPositionH);
        top.doElementScroll(otherPreSetSpans,presetPositionH);
    }
    else if(focusType=="MircoDimmingMenu")
    {
        presetPositionH--;
        if(presetPositionH<0)
        {
            presetPositionH=1;
        }
        $("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
        top.doElementScroll(otherPreSetSpans,presetPositionH);
    }
	else if(focusType=="picSportEnhance")
	{
		 presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH=1;
		}
		$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
		setting.previewSportEnhanceMent(presetPositionH);
		top.doElementScroll(otherPreSetSpans,presetPositionH);
	}
	else if(focusType=="pic3DNavigaMenu")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH=1;
		}
		$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
		if(presetPositionH==0)
		{
			setting.pic3DNavigtion=presetPositionH;// 需要新增接口函数
		}
		else
		{
			setting.pic3DNavigtion=presetPositionH+1;
		}
		top.doElementScroll(otherPreSetSpans,presetPositionH);
	}
	else if(focusType=="ColorTempMenu")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH=3;
		}
		$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
		setting.previewColorTemp(presetPositionH);// 需要新增接口函数
		top.doElementScroll(otherPreSetSpans,presetPositionH);
	}
	else if(focusType=="picReset")
	{
		isReset++;
		if(isReset>1)
		{
			isReset=0;
			$("picResetFocus").style.left="420px";
		}
		else
		{
			$("picResetFocus").style.left="190px";
		}
	}
	else if(focusType=="autoFormat")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH=1;
		}
		$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
		setting.previewAutoFormat(presetPositionH);
		top.doElementScroll(otherPreSetSpans,presetPositionH);
	}
	else
	{
		toBack();
	}
}
function toRight()
{
	if(focusType=="pictureList")
	{
		toOK();
	}
	else if(focusType=="adjustBar")
	{
		adjustBarValue(1);
	}
	else if(focusType=="picPreset")
	{
		presetPositionH++;
		if(presetPositionH>picPreset.length - 1)
		{
			presetPositionH=0;
		}
		$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
		setting.previewPictureMode(pictureModeTransform(presetPositionH, 1));
		top.doElementScroll(otherPreSetSpans,presetPositionH);
	}
	else if(focusType=="picShowScreen")
	{
		getNextPictureSize();
		presetPositionH++;
		if(presetPositionH>4 || currentSizeNum==0)
		{
			sizeCurrentPage++;
			if(sizeCurrentPage>sizeCountPage)
			{
				sizeCurrentPage=1;
			}
			showScrList();
			return;
		}
		top.doElementScroll(zoomSpans,presetPositionH);
		$("preZoomSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
	}
	else if(focusType=="papMenu")
	{
        presetPositionH++;
		if(presetPositionH>1)
		{
			presetPositionH=0;
		}
		$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
		setting.previewOverScan(presetPositionH);
		top.doElementScroll(otherPreSetSpans,presetPositionH);
	}
	else if(focusType=="MircoDimmingMenu")
	{
        presetPositionH++;
		if(presetPositionH>1)
		{
			presetPositionH=0;
		}
		$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
		top.doElementScroll(otherPreSetSpans,presetPositionH);
	}
	else if(focusType=="picSportEnhance")
	{
		 presetPositionH++;
		if(presetPositionH>1)
		{
			presetPositionH=0;
		}
		$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
		setting.previewSportEnhanceMent(presetPositionH);
		top.doElementScroll(otherPreSetSpans,presetPositionH);
	}
	else if(focusType=="pic3DNavigaMenu")
	{
		presetPositionH++;
		if(presetPositionH>1)
		{
			presetPositionH=0;
		}
		$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
		if(presetPositionH==0)
		{
			setting.pic3DNavigtion=presetPositionH;// 需要新增接口函数
		}
		else
		{
			setting.pic3DNavigtion=presetPositionH+1;
		}
		top.doElementScroll(otherPreSetSpans,presetPositionH);
	}
	else if(focusType=="ColorTempMenu")
	{
		presetPositionH++;
		if(presetPositionH>3)
		{
			presetPositionH=0;
		}
		$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
		setting.previewColorTemp(presetPositionH);// 需要新增接口函数
		top.doElementScroll(otherPreSetSpans,presetPositionH);
	}
	else if(focusType=="picReset")
	{
		isReset++;
		if(isReset>1)
		{
			isReset=0;
			$("picResetFocus").style.left="420px";
		}
		else
		{
			$("picResetFocus").style.left="190px";
		}
	}
	else if(focusType=="autoFormat")
	{
		presetPositionH++;
		if(presetPositionH>1)
		{
			presetPositionH=0;
		}
		$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
		setting.previewAutoFormat(presetPositionH);
		top.doElementScroll(otherPreSetSpans,presetPositionH);
	}
	else
	{
		toOK();
	}
}

function checkPapShow()
{
	try
	{
	var inputSource=top.g_channel.inputSource;
	if(top.currentPanel==0)
	{
		if(inputSource == 6 || inputSource == 7 || inputSource == 8 || inputSource == 12)
		{
			if(setting.hdmiMode == 0)
			{
				return 1;
			}
			else
			{
				return 0;
			}
		}
		else
		{
			return 1;
		}
	}
	else
	{
		if(setting.pic3DMode>0)
		{
			return 0;
		}
		else
		{
			if(inputSource == 6 || inputSource == 7 || inputSource == 8 || inputSource == 12)
			{
				if(setting.hdmiMode == 0)
				{
					return 1;
				}
				else
				{
					return 0;
				}
			}
			else
			{
				return 1;
			}
		}
	}
	}catch(er)
	{
		top.g_channel.testLog(er);
	}
}
function updatePictureData()
{
	initVarValue();
	showUpdateProgressBar();
	energySaveStatus=setting.energySaving;
	 papShowValue=1;
	 sportEnhance=0;//checkPapShow();
	var divs=lis[10].getElementsByTagName("div");
	divs[0].innerHTML=picSize[nowSizeNum];
	var divs=lis[9].getElementsByTagName("div");
	divs[0].innerHTML=picAutoFormat[autoFormatValue];
	var divs=lis[11].getElementsByTagName("div");
	picOverScanValue=setting.overscan;
	divs[0].innerHTML=sportEnhanceSwitchValue[picOverScanValue];
	showSportEnhance();
	var divs=lis[14].getElementsByTagName("div");
	pic3dNavigValue=setting.pic3DNavigtion;//以后新增加接口
	divs[0].innerHTML=pic3dNavig[pic3dNavigValue];
	checkShowMenu();
	showMenuList();
	positionV=findPosition("pictureReset");
	doOffsetMenuList(positionV);
	showPromptCont();

}

function updatePicture(name)
{
	initVarValue();
	showUpdateProgressBar();
    papShowValue=1;//checkPapShow();//用来判断pap是否可显示
	sportEnhance=0;//checkPapShow();
    showScreenModeList();
    showPapMenu();
	showSportEnhance();
    show3DNavigaMenu();
    showMircoDimmingVal();
	checkShowMenu();
	showMenuList();
    if(name)
    {
        positionV=findPosition(name);
    }
	doOffsetMenuList(positionV);
	showPromptCont();
}
var listFirstSpans;

function initSetRegion()
{
	if (top.uiColourStyleFlag == 1)
	{
		var classlist;
		classlist = document.getElementsByClassName("dialogInputFocus");
		for(var i = 0;i<classlist.length;i++)
		{
			//classlist[i].setAttribute("class","progressImgOtherStyle");
			classlist[i].style.border = "solid" + top.uiColourStyle;
			//classlist[i].className = "progressImgOtherStyle";
		}
		
		classlist = $("adjustProgBar").getElementsByClassName("progressBarLeft");
        for (var i = 0; i < classlist.length; i++) {
            classlist[i].style.background =  top.uiColourStyle;
        }
        $("progressBarLeftDiv").style.background =  top.uiColourStyle;
	}
}

function init()
{
	menuLock = factory.menuLock;
	hotelEnable = factory.hotelEnable;
	ttsOverScanValue=setting.overscan;
    top.initTextDirection(window);
	initSetRegion();
	lis=$("sndMenuRight").getElementsByTagName("li");
	listFirstSpans = $("sndMenuRight").getElementsByClassName("listFirstProperty");
	otherPreSetSpans=$("preSetBar").getElementsByTagName("span");
	zoomSpans=$("preZoomSetBar").getElementsByTagName("span");
	zoomImg = $("preZoomSetBar").getElementsByTagName("img");
	if((setting.location>0&&setting.checkPictureSelectEnable()==0))
	{
		for(var i=0;i<lis.length;i++)
		{
			lis[i].style.color="#666";
		}
		var imgSrc= $("menuUl").getElementsByTagName("img");
		imgSrc[0].src=focus_R_Focus[1];
		imgSrc[1].src=focus_R_Focus[1];
		imgSrc[2].src=focus_R_Focus[1];
		imgSrc[3].src=focus_R_Focus[1];
		imgSrc[4].src=focus_R_Focus[1];
		imgSrc[5].src=focus_R_Focus[1];
		imgSrc[6].src="images/arrow/icon_Submenu.png";
		imgSrc[7].src=focus_R_Focus[1];
		imgSrc[8].src="images/arrow/icon_Submenu.png";
		imgSrc[9].src="images/arrow/icon_Submenu.png";
		imgSrc[10].src="images/arrow/icon_Submenu.png";
		imgSrc[11].src="images/arrow/icon_Submenu.png";
		var progressBarLeft= $("sndMenuRight").getElementsByClassName("progressBarLeft");
		for(var i=0;i<progressBarLeft.length;i++)
		{
			progressBarLeft[i].style.background = "#383838";
		}
		var progressBarCenter= $("sndMenuRight").getElementsByClassName("progressBarCenter");
		for(var i=0;i<progressBarLeft.length;i++)
		{
			progressBarCenter[i].style.background = "#383838";
		}
	}
	if((menuLock) && (hotelEnable) && (lockFlag))
	{
		var spans=$("sndMenuRight").getElementsByTagName("span");
		lis[0].style.display="block";
		spans[0].innerHTML=titleWords;
		lis[0].getElementsByTagName("img")[0].style.display = "block";
		for(var i=1;i< lis.length;i++)
		{
			//sndMenuRightLiList[i].style.display="none";
			//lis[i].getElementsByTagName("img")[i].style.display = "none";
			lis[i].style.display = "none";
		}
		$("sndMenuRight").style.display = "block";
		$("listUpRemind").style.display = "none";
		$("listDownRemind").style.display = "none";
	}
	else
	{
		try
		{
			//lis[0].getElementsByTagName("img")[0].style.display = "block";
			$("listUpRemind").style.display = "block";
			$("listDownRemind").style.display = "block";
			for(var i=0;i<lis.length;i++)
			{
				lis[i].style.display="block";
			}
			imgs= document.getElementsByTagName("ul")[0].getElementsByTagName("img");
			initUI();
		
			initVarValue();
			init3DSetting();
			papShowValue=1;//checkPapShow();
		    sportEnhance=0;//checkPapShow();
			showProgressBar();
			showColorTempMenu();
			showScreenModeList();
			showgeoMenu();
			showPapMenu();
			showSportEnhance();
			show3DMenu();
			show3DNavigaMenu();
			showMircoDimmingVal();
			checkShowMenu();
			showMenuList();
		}
		catch(er)
		{
			top.g_channel.testLog(er);
		}
	}
	addMouseListener();
    //top.doEleScrForNoOption(listFirstSpans, findRealPosition(positionV), 0);
}

function initUI()
{
	var spans=$("sndMenuRight").getElementsByTagName("span");
	for(var i=0;i<lis.length;i++)
	{
		spans[i].innerHTML=userPicConName[i];
	}
}
function initVarValue()
{
	autoFormatValue=setting.autoFormat;
	nowSizeNum = setting.pictureSize;
    energySaveStatus=setting.energySaving;
    picOverScanValue=setting.overscan;
    picSportEnhanceValue=setting.sportEnhanceSwitch;
    pic3dNavigValue=setting.pic3DNavigtion;//以后新增加接口
    picMircoDimmingValue=setting.localDimming;
	}
function init3DSetting()
{
	if(signalStatus>0)
	{
		pannelType =  top.currentPanel;
	}
	else
	{
		pannelType = 0;
	}	
	if(pannelType>0)
	{
		 pic3DMode = setting.pic3DMode;
	}
	else
	{
		pic3DMode = 0;
	}
}
function showgeoMenu()//用来判断几何设置是否出现在住菜单上
{

}
function getProgressValues()
{
	brightness=setting.brightness;
	contrast=setting.contrast;
	saturation=setting.saturation;
	sharpness=setting.sharpness;
	backLight=setting.backLight;
	tint=setting.hue;
	pictureMode=pictureModeTransform(setting.pictureMode, 0);
}
function showProgressValues()
{
	//top.g_channel.testLog("brightness"+brightness+"contrast"+contrast+"saturation"+saturation+"sharpness"+sharpness+"backLight"+backLight+"tint"+tint+"pictureMode"+pictureMode+"pic3DMode="+pic3DMode+"tintEnable"+tintEnable);
	if(( pic3DMode!=0 )|| energySaveStatus!=0)
	{
		lis[2].style.display="none";
	}
	else
	{
		lis[2].style.display="block";
	}
	if(tintEnable==1)
	{
		lis[6].style.display="block";
	}
	else
	{
		lis[6].style.display="none";
	}
	var divs=lis[0].getElementsByTagName("div");
	divs[0].innerHTML=picPreset[pictureMode];
	divs=lis[3].getElementsByTagName("div");
	divs[4].innerHTML=brightness;
	divs=lis[4].getElementsByTagName("div");
	divs[4].innerHTML=contrast;
	divs=lis[5].getElementsByTagName("div");
	divs[4].innerHTML=saturation;
	divs=lis[7].getElementsByTagName("div");
	divs[4].innerHTML=sharpness;
	divs=lis[2].getElementsByTagName("div");
	divs[4].innerHTML=backLight;
	divs=lis[6].getElementsByTagName("div");
	divs[4].innerHTML=tint;
	var progDivs=$("brightness").getElementsByTagName("div");
	progDivs[0].style.width=3*brightness+"px";
	progDivs[2].style.width=300-3*brightness+"px";
	var progDivs=$("contrast").getElementsByTagName("div");
	progDivs[0].style.width=3*contrast+"px";
	progDivs[2].style.width=300-3*contrast+"px";
	var progDivs=$("saturation").getElementsByTagName("div");
	progDivs[0].style.width=3*saturation+"px";
	progDivs[2].style.width=300-3*saturation+"px";
	var progDivs=$("sharpness").getElementsByTagName("div");
	progDivs[0].style.width=3*sharpness+"px";
	progDivs[2].style.width=300-3*sharpness+"px";
	var progDivs=$("backlight").getElementsByTagName("div");
	progDivs[0].style.width=3*backLight+"px";
	progDivs[2].style.width=300-3*backLight+"px";
	var progDivs=$("tint").getElementsByTagName("div");
	progDivs[0].style.width=3*tint+"px";
	progDivs[2].style.width=300-3*tint+"px";
}
function showUpdateProgressValues()
{
		var divs=lis[0].getElementsByTagName("div");
	divs[0].innerHTML=picPreset[pictureMode];
	divs=lis[3].getElementsByTagName("div");
	divs[4].innerHTML=brightness;
	divs=lis[4].getElementsByTagName("div");
	divs[4].innerHTML=contrast;
	divs=lis[5].getElementsByTagName("div");
	divs[4].innerHTML=saturation;
	divs=lis[7].getElementsByTagName("div");
	divs[4].innerHTML=sharpness;
	divs=lis[2].getElementsByTagName("div");
	divs[4].innerHTML=backLight;
	divs=lis[6].getElementsByTagName("div");
	divs[4].innerHTML=tint;
	var progDivs=$("brightness").getElementsByTagName("div");
	progDivs[0].style.width=3*brightness+"px";
	progDivs[2].style.width=300-3*brightness+"px";
	var progDivs=$("contrast").getElementsByTagName("div");
	progDivs[0].style.width=3*contrast+"px";
	progDivs[2].style.width=300-3*contrast+"px";
	var progDivs=$("saturation").getElementsByTagName("div");
	progDivs[0].style.width=3*saturation+"px";
	progDivs[2].style.width=300-3*saturation+"px";
	var progDivs=$("sharpness").getElementsByTagName("div");
	progDivs[0].style.width=3*sharpness+"px";
	progDivs[2].style.width=300-3*sharpness+"px";
	var progDivs=$("backlight").getElementsByTagName("div");
	progDivs[0].style.width=3*backLight+"px";
	progDivs[2].style.width=300-3*backLight+"px";
	var progDivs=$("tint").getElementsByTagName("div");
	progDivs[0].style.width=3*tint+"px";
	progDivs[2].style.width=300-3*tint+"px";
}
function showUpdateProgressBar()
{
	getProgressValues();
	showUpdateProgressValues();
	showUpdateColorTempMenu();
}
function showProgressBar()//主界面显示带进度条的选项
{
	getProgressValues();
	showProgressValues();
	showColorTempMenu();
}
function showUpdateColorTempMenu()
{
	colorTempVal = setting.colorTemparature;
	var divs = lis[8].getElementsByTagName("div");
	divs[0].innerHTML=picColorTemp[colorTempVal];
}
function showColorTempMenu()
{
	colorTempVal = setting.colorTemparature;
	var divs = lis[8].getElementsByTagName("div");
	divs[0].innerHTML=picColorTemp[colorTempVal];
}
function showScreenModeList()//主界面判断和显示 screen mode 和 auto format
{
	var divs=lis[10].getElementsByTagName("div");
	divs[0].innerHTML=picSize[nowSizeNum];
	var divs=lis[9].getElementsByTagName("div");
	divs[0].innerHTML=picAutoFormat[autoFormatValue];
}

function showPapMenu()
{
	var divs=lis[11].getElementsByTagName("div");
	divs[0].innerHTML=sportEnhanceSwitchValue[picOverScanValue];////
}
function showSportEnhance()
{
	var divs=lis[12].getElementsByTagName("div");
	divs[0].innerHTML=sportEnhanceSwitchValue[picSportEnhanceValue];////
}
function show3DMenu()
{

}
function show3DNavigaMenu()
{
	var divs=lis[14].getElementsByTagName("div");
	divs[0].innerHTML=pic3dNavig[pic3dNavigValue];
}

function showMircoDimmingVal()
{
    var divs=lis[1].getElementsByTagName("div");
    divs[0].innerHTML=sportEnhanceSwitchValue[picMircoDimmingValue];//对接接口
}

function showPicturePreset()//显示picture preset 列表
{
	if(setting.footballMode)
	{
		return;
	}
	preSetBarStep = 210;
	presetFocusWidth = 210;
	setPresetWidth(120);
	$("preSetSelectFocus").style.width = 210 + "px";
	showPersetSelect(picPreset.length);
	$("preSetOption").innerHTML=userPicConName[0];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<picPreset.length;i++)
	{
		spans[i+1].innerHTML=picPreset[i];
	}
	presetPositionH=pictureMode;
	
	$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 360+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(1)
	$("preSetBar").style.display="block"
	focusType="picPreset"
	top.doElementScroll(otherPreSetSpans,presetPositionH);
}
var adjustUpOption = -1;
var adjustDownOption = -1;
function findAdjustUpOption(adjustOption)
{
	for(var i=adjustOption-1 ;i>=2;i--)
	{
		if(menuList[i].showFlag == 1)
		{
			adjustUpOption = i;
			return i;
		}
	}
	for(var j=7 ;j>adjustOption;j--)
	{
		if(menuList[j].showFlag == 1)
		{
			adjustUpOption = j;
			return j;
		}
	}
	adjustUpOption = -1;
	return -1;
}
function findAdjustDownOption(adjustOption)
{
	for(var Down=adjustOption+1 ;Down<=7;Down++)
	{
		if(menuList[Down].showFlag == 1 && adjustUpOption!=Down)
		{
			adjustDownOption = Down;
			return Down;
		}
	}
	for(var Downj=2 ;Downj<adjustOption;Downj++)
	{
		if(menuList[Downj].showFlag == 1 && adjustUpOption!=Downj)
		{
			adjustDownOption = Downj;
			return Downj;
		}
	}
	adjustDownOption = -1;
	return -1;
}
function showAdjustBar(upOrDown)//显示待调整进度的选项的进度条
{
	top.timeoutFuc.timeoutTimes = 10;
	parent.hiddenPage(1);
	findAdjustUpOption(adjustOption);
	findAdjustDownOption(adjustOption);
	if(adjustUpOption!=-1)
	{
		$("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML = userPicConName[adjustUpOption];
	}
	else
	{
		$("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML = "";
	}
	if(adjustDownOption!=-1)
	{
		$("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML = userPicConName[adjustDownOption];
	}
	else
	{
		$("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML = "";
	}
	switch(adjustOption)
	{
		case 2:
		{
			
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=userPicConName[adjustOption];
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=9*backLight+"px";
			progDivs[2].style.width=900-9*backLight+"px";
			$("adjustProgValue").innerHTML=backLight;
			break;
		}
		case 3:
		{
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=userPicConName[adjustOption];
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=9*brightness+"px";
			progDivs[2].style.width=900-9*brightness+"px";
			$("adjustProgValue").innerHTML=brightness;

			break;
		}
		case 4:
		{
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=userPicConName[adjustOption];
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=9*contrast+"px";
			progDivs[2].style.width=900-9*contrast+"px";
			$("adjustProgValue").innerHTML=contrast;
			break;
		}
		case 5:
		{
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=userPicConName[adjustOption];
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=9*saturation+"px";
			progDivs[2].style.width=900-9*saturation+"px";
			$("adjustProgValue").innerHTML=saturation;
			break;
		}
		case 6:
		{
			$("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML=userPicConName[adjustOption-1];
			$("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML=userPicConName[adjustOption+1];
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=userPicConName[adjustOption];
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=9*tint+"px";
			progDivs[2].style.width=900-9*tint+"px";
			$("adjustProgValue").innerHTML=tint;
			break;
		}
		case 7:
		{
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=userPicConName[adjustOption];
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=9*sharpness+"px";
			progDivs[2].style.width=900-9*sharpness+"px";
			$("adjustProgValue").innerHTML=sharpness;
			break;
		}
	}
	setTimeout(function(){
		if(top.isOverflowed($("adjustProgMain").getElementsByTagName("span")[0]))
		{
			$("adjustProgMain").getElementsByTagName("span")[0].style.overflowX = "-webkit-marquee";
			$("adjustProgMain").getElementsByTagName("span")[0].style.textOverflow = "clip";
			$("adjustProgMain").getElementsByTagName("span")[0].style.webkitMarqueeDirection = "backwards";
			$("adjustProgMain").getElementsByTagName("span")[0].style.webkitMarqueeStyle = "scroll";
			$("adjustProgMain").getElementsByTagName("span")[0].style.webkitMarqueeSpeed = "fast";
			$("adjustProgMain").getElementsByTagName("span")[0].style.webkitMarqueeIncrement = "small";
			$("adjustProgMain").getElementsByTagName("span")[0].style.webkitMarqueeRepetition = "infinite";
		}
		else
		{
			$("adjustProgMain").getElementsByTagName("span")[0].style.overflowX = "hidden";
			$("adjustProgMain").getElementsByTagName("span")[0].style.textOverflow = "ellipsis";
		}
	},1)
	$("adjustProgressBox").style.display="block";
	focusType="adjustBar";
}
function adjustBarValue(value)//调整进度条的值
{
	switch(adjustOption)
	{
		case 2:
		{
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			backLight=backLight+value;
			if(backLight<0)
			{
				backLight=0;
				return;
			}
			else if(backLight>100)
			{
				backLight=100;
				return;
			}
			else
			{
				setting.backLight=backLight;
                setting.saveLedMotionClarityVal(0);
			}
			progDivs[0].style.width=9*backLight+"px";
			progDivs[2].style.width=900-9*backLight+"px";
			$("adjustProgValue").innerHTML=backLight;
			break;
		}
		case 3:
		{
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			brightness=brightness+value;
			if(brightness<0)
			{
				brightness=0;
				return;
			}
			else if(brightness>100)
			{
				brightness=100;
				return;
			}
			else
			{
				setting.brightness=brightness;
			}
			progDivs[0].style.width=9*brightness+"px";
			progDivs[2].style.width=900-9*brightness+"px";
			$("adjustProgValue").innerHTML=brightness;
			break;
		}
		case 4:
		{
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			contrast=contrast+value;
			if(contrast<0)
			{
				contrast=0;
				return;
			}
			else if(contrast>100)
			{
				contrast=100;
				return;
			}
			else
			{
				setting.contrast=contrast;
			}
			progDivs[0].style.width=9*contrast+"px";
			progDivs[2].style.width=900-9*contrast+"px";
			$("adjustProgValue").innerHTML=contrast;
			break;
		}
		case 5:
		{
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			saturation=saturation+value;
			if(saturation<0)
			{
				saturation=0;
				return;
			}
			else if(saturation>100)
			{
				saturation=100;
				return;
			}
			else
			{
				setting.saturation=saturation;
			}
			progDivs[0].style.width=9*saturation+"px";
			progDivs[2].style.width=900-9*saturation+"px";
			$("adjustProgValue").innerHTML=saturation;
			break;
		}
		case 6:
		{
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			tint=tint+value;
			if(tint<0)
			{
				tint=0;
				return;
			}
			else if(tint>100)
			{
				tint=100;
				return;
			}
			else
			{
				setting.hue=tint;
			}
			progDivs[0].style.width=9*tint+"px";
			progDivs[2].style.width=900-9*tint+"px";
			$("adjustProgValue").innerHTML=tint;
			break;
		}
		case 7:
		{
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			sharpness=sharpness+value;
			if(sharpness<0)
			{
				sharpness=0;
				return;
			}
			else if(sharpness>100)
			{
				sharpness=100;
				return;
			}
			else
			{
				setting.sharpness=sharpness;
			}
			progDivs[0].style.width=9*sharpness+"px";
			progDivs[2].style.width=900-9*sharpness+"px";
			$("adjustProgValue").innerHTML=sharpness;
			break;
		}
	}
}

function showSelScrMode()//显示screen mode 选择列表
{
	$("preZoomSetOption").innerHTML=userPicConName[10];
	sumShowSizeNum();
	showZoomPersetSelecet(sizeCount);
	showScrList();
	parent.hiddenPage(1);
	$("preZoomSetBar").style.display="block";
	focusType="picShowScreen"
}
function showZoomPersetSelecet(optionMax)
{
	var spans=$("preZoomSetBar").getElementsByTagName("span");
	switch(optionMax)
	{
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		$("preZoomSetBar").style.left=parseInt((1920-390-optionMax*230)/2)+"px";
		$("preSetLeft").style.display = "none";
		$("preSetRight").style.display = "none";
		break;
		default:
		$("preZoomSetBar").style.left=parseInt((1920-390-5*230)/2)+"px";
		$("preSetLeft").style.display = "block";
		$("preSetRight").style.display = "block";
		break;
	}
	for(var i=0;(i<5&&i<optionMax);i++)
	{
		spans[i+1].style.display="block";
	}
	if(optionMax<5)
	{
		for(var i=optionMax;i<spans.length-1;i++)
		{
			spans[i+1].style.display="none";
		}
		$("preZoomSetBar").style.width=390+optionMax*230+"px";
	}
	else
	{
		$("preZoomSetBar").style.width=390+5*230+"px";
	}
}

function showScrList()
{
	//picPreset[pictureMode];
	var previewImg = $("preZoomSetBar").getElementsByTagName("img");
	var optionSelect = -1;
	for(var i=0;i<5;i++)
	{
		if(i+(sizeCurrentPage-1)*5<sizeCount)
		{
			var k=picShowSize[i+(sizeCurrentPage-1)*5];
			top.g_channel.testLog("sizeCurrentPage="+sizeCurrentPage);
			top.g_channel.testLog("k="+picShowSize[i+(sizeCurrentPage-1)*5]);
			zoomSpans[i+1].innerHTML=picSize[k];
			previewImg[i+1].src = zoomPreviewImg[k];
			previewImg[i+1].style.display = "block";
			if(nowSizeNum == picShowSize[i+(sizeCurrentPage-1)*5])
			{
				optionSelect = i;
			}
		}
		else
		{
			zoomSpans[i+1].innerHTML="";
			previewImg[i+1].style.display = "none";
		}
	}
	top.g_channel.testLog("currentSizeNum="+currentSizeNum);
	presetPositionH=parseInt(currentSizeNum%5);//当auto为Off时当前焦点在当前比例模式上
	$("preZoomSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
	top.doElementScroll(zoomSpans,presetPositionH);
	if(optionSelect>=0)
	{
		$("currentZoomOption").style.left = 360+optionSelect*presetFocusWidth+"px";
		$("currentZoomOption").style.display = "block";
	}
	else
	{
		$("currentZoomOption").style.display = "none";
	}
}
var sizeCountPage =0;
var sizeCurrentPage = 0;
function sumShowSizeNum()//计算一共有都少picture size可以显示
{
	sizeCount=0;
	for(var i = 0; i<15;i++)
	{
		if(setting.checkPictureSizeEnable(i))
		{
			
			picShowSize[sizeCount]=i;
			if(i==nowSizeNum)
			{
				currentSizeNum=sizeCount;
			}
			sizeCount++;
		}
	}
	if(currentSizeNum<5)
	{
		sizeCurrentPage=1;
	}
	else
	{
		sizeCurrentPage = parseInt(currentSizeNum/5)+1;
	}
	if(sizeCount<5)
	{
		sizeCountPage=1;
	}
	else
	{
		if(sizeCount%5==0)
		{
			sizeCountPage = parseInt(sizeCount/5);
		}
		else
		{
			sizeCountPage = parseInt(sizeCount/5)+1;
		}
	}
}

function getNextPictureSize()//找到当前size的下一个size
{
	if(currentSizeNum == sizeCount-1)
	{
		currentSizeNum=0;
	}
	else
	{
		currentSizeNum++;
	}
	//top.g_channel.testLog("picShowSize["+currentSizeNum+"]="+picShowSize[currentSizeNum]);
	//setting.pictureSize = picShowSize[currentSizeNum];
	setting.previewScreenMode(picShowSize[currentSizeNum]);
}
function getPreviousPictureSize()//找到当前的前一个picture size
{
    if(currentSizeNum==0)
	{
		currentSizeNum = sizeCount-1;
	}
	else
	{
		currentSizeNum--;
	}
	top.g_channel.testLog("picShowSize["+currentSizeNum+"]="+picShowSize[currentSizeNum]);
	setting.previewScreenMode(picShowSize[currentSizeNum]);
}
function showAutoFormatMenu()//显示auto format选择列表
{
	showPersetSelect(2);
	$("preSetOption").innerHTML=userPicConName[9];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<2;i++)
	{
		spans[i+1].innerHTML=picAutoFormat[i];
	}
	presetPositionH=autoFormatValue;
	top.doElementScroll(otherPreSetSpans,presetPositionH);
	$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 360+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(1);
	$("preSetBar").style.display="block"
	focusType="autoFormat";
}
function showPapSelMenu()//显示Pap选择列表
{
	showPersetSelect(2);
	$("preSetOption").innerHTML=userPicConName[11];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<2;i++)
	{
		spans[i+1].innerHTML=sportEnhanceSwitchValue[i];
	}
	presetPositionH=picOverScanValue;
	top.doElementScroll(otherPreSetSpans,presetPositionH);
	$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 360+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(1);
	$("preSetBar").style.display="block"
	focusType="papMenu";
}
function showColorTempSelMenu()
{
	showPersetSelect(4);
	$("preSetOption").innerHTML=userPicConName[8];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<4;i++)
	{
		spans[i+1].innerHTML=picColorTemp[i];
	}
	presetPositionH=colorTempVal;
	top.doElementScroll(otherPreSetSpans,presetPositionH);
	$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 360+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(1);
	$("preSetBar").style.display="block"
	focusType="ColorTempMenu";
}
function show3dNavigaSelMenu()//显示3dNaviga选择列表
{
	showPersetSelect(2);
	$("preSetOption").innerHTML=userPicConName[14];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	spans[1].innerHTML=pic3dNavig[0];
	spans[2].innerHTML=pic3dNavig[2];
	if(pic3dNavigValue==2)
	{
		presetPositionH = 1;
	}
	else
	{
		presetPositionH = 0;
	}
	top.doElementScroll(otherPreSetSpans,presetPositionH);
	$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 360+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(1);
	$("preSetBar").style.display="block";
	focusType="pic3DNavigaMenu";
}
function showSportEnhanceMenu()
{
	showPersetSelect(2);
	$("preSetOption").innerHTML=userPicConName[12];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<2;i++)
	{
		spans[i+1].innerHTML=sportEnhanceSwitchValue[i];
	}
	presetPositionH=picSportEnhanceValue;
	top.doElementScroll(otherPreSetSpans,presetPositionH);
	$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 360+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(1);
	$("preSetBar").style.display="block"
	focusType="picSportEnhance";
}
function showPicReset()//弹出用户图像数据重置对话框
{
	parent.hiddenPage(1);
	var picReSpans=$("picReset").getElementsByTagName("span");
	var picReDivs=$("picReset").getElementsByTagName("div");
	picReSpans[0].innerHTML=userPicConName[18];
	setTimeout(function(){
		if(top.isOverflowed(picReSpans[0]))
		{
			picReSpans[0].style.overflowX = "-webkit-marquee";
			picReSpans[0].style.textOverflow = "clip";
			picReSpans[0].style.webkitMarqueeDirection = "backwards";
			picReSpans[0].style.webkitMarqueeStyle = "scroll";
			picReSpans[0].style.webkitMarqueeSpeed = "fast";
			picReSpans[0].style.webkitMarqueeIncrement = "small";
			picReSpans[0].style.webkitMarqueeRepetition = "infinite";
		}
	},1)
	picReSpans[1].innerHTML=picReset[0];
	picReDivs[0].innerHTML=picReset[1];
	picReDivs[1].innerHTML=picReset[2];
	$("listFocus").style.display="none";
	$("picReset").style.display="block";
	focusType="picReset";
}

function showMircoDimmingMenu()
{
    showPersetSelect(2);
    $("preSetOption").innerHTML=userPicConName[1];
    var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
    for(var i=0;i<2;i++)
    {
        spans[i+1].innerHTML=sportEnhanceSwitchValue[i];
    }
    presetPositionH=picMircoDimmingValue;//对接接口
    top.doElementScroll(otherPreSetSpans,presetPositionH);
    $("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
    $("currentOption").style.left = 360+presetPositionH*presetFocusWidth+"px";
    $("currentOption").style.display = "block";
    parent.hiddenPage(1);
    $("preSetBar").style.display="block"
    focusType="MircoDimmingMenu";
}

function setPresetWidth(value)
{
	for(var i = 1; i < otherPreSetSpans.length; i++)
	{
		otherPreSetSpans[i].style.width = value + "px";
		otherPreSetSpans[i].style.left = 390 + (i - 1) * preSetBarStep + "px";
	}
}

function testLog(str)
{
	console.log("      -------> Areos: " + str);
}

function showPersetSelect(optionMax)//用来显示或者隐藏preset选项
{
	otherPreSetSpans=$("preSetBar").getElementsByTagName("span");
	switch(optionMax)
	{
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
			testLog("the  preSetBarStep = " + preSetBarStep);
			$("preSetBar").style.left=parseInt((screenWidth-preSetBarOptionWidth-optionMax*preSetBarStep)/2)+"px";
			break;
		default:
			$("preSetBar").style.left=parseInt((screenWidth-preSetBarOptionWidth-5*preSetBarStep)/2)+"px";
			break;
	}
	for(var i=0;(i<otherPreSetSpans.length - 1&&i<optionMax);i++)
	{
		otherPreSetSpans[i+1].style.display="block";
		testLog("the [" + i + 1 + "].left = " + otherPreSetSpans[i + 1].style.left);
	}
	if(optionMax<otherPreSetSpans.length - 1)
	{
		for(var i=optionMax;i<otherPreSetSpans.length-1;i++)
		{
			otherPreSetSpans[i+1].style.display="none";
		}
		$("preSetBar").style.width=preSetBarOptionWidth+optionMax*preSetBarStep+"px";
	}
	else
	{
		$("preSetBar").style.width=preSetBarOptionWidth+(otherPreSetSpans.length - 1)*preSetBarStep+"px";
	}
}
function hiddenPromptCont()//隐藏提示语
{
	$("promptWin").style.display="none";
}
var ONE_LINE_TOP            = 35;
var TWO_LINE_TOP            = 12;
var THREE_LINE_TOP          = 18;
var FOUR_LINE_TOP           = 28;
var FIVE_LINE_TOP           = 35;
var SIX_LINE_TOP            = 40;                    
function showPromptImg()
{
	$("promptWin").style.display="block";
    $("promptWin2").style.display="none";
	var height = $("promptContent").offsetHeight;
	var img   = $("promptWin").getElementsByTagName("img");
	var div   = $("promptWin").getElementsByTagName("div");
	if(height==40)
	{
		img[0].src=picPromptImg[0];
		$("promptContent").style.top = ONE_LINE_TOP+"px";
		img[0].style.height="110px";
		div[0].style.height="102px";
		if(positionV<=11)
		{
			$("promptWin").style.top=80+positionV*70+"px";
		}
		else
		{
			$("promptWin").style.top=80+11*70+"px";
		}
	}
	else if(height==80)
	{
		img[0].src=picPromptImg[0];
		$("promptContent").style.top = TWO_LINE_TOP+"px";
		img[0].style.height="110px";
		div[0].style.height="102px";
		if(positionV<=11)
		{
			$("promptWin").style.top=80+positionV*70+"px";
		}
		else
		{
			$("promptWin").style.top=80+11*70+"px";
		}
	}
	else if(height==120)
	{
		img[0].src=picPromptImg[1];
		$("promptContent").style.top = THREE_LINE_TOP+"px";
		img[0].style.height="160px";
		div[0].style.height="152px";
		if(positionV<=11)
		{
			$("promptWin").style.top=50+positionV*70+"px";
		}
		else
		{
			$("promptWin").style.top=50+11*70+"px";
		}
	}
	else if(height==160)
	{
		img[0].src=picPromptImg[2];
		$("promptContent").style.top = FOUR_LINE_TOP+"px";
		img[0].style.height="220px";
		div[0].style.height="212px";
		if(positionV<=11)
		{
			$("promptWin").style.top=20+positionV*70+"px";
		}
		else
		{
			$("promptWin").style.top=20+11*70+"px";
		}
	}
	else if(height==200)
	{
		img[0].src=picPromptImg[3];
		$("promptContent").style.top = FIVE_LINE_TOP+"px";
		img[0].style.height="280px";
		div[0].style.height="272px";
		if(positionV<=11)
		{
			$("promptWin").style.top=-10+positionV*70+"px";
		}
		else
		{
			$("promptWin").style.top=-10+11*70+"px";
		}
	}
	else if(height==240)
	{
		img[0].src=picPromptImg[4];
		$("promptContent").style.top = SIX_LINE_TOP+"px";
		img[0].style.height="340px";
		div[0].style.height="332px";
		if(positionV<=11)
		{
			$("promptWin").style.top=-30+positionV*70+"px";
		}
		else
		{
			$("promptWin").style.top=-30+11*70+"px";
		}
	}
	else if(height==0)
	{
		img[0].src=picPromptImg[0];
		$("promptContent").style.top = TWO_LINE_TOP+"px";
		img[0].style.height="110px";
		div[0].style.height="102px";
		if(positionV<=11)
		{
			$("promptWin").style.top=80+positionV*70+"px";
		}
		else
		{
			$("promptWin").style.top=80+11*70+"px";
		}
	}
}

function showFocus()//显示主页面的焦点
{
    timeoutInit();
    top.doEleScrForNoOption(listFirstSpans, findRealPosition(positionV), -1);
	$("listFocus").style.display="block";
}
function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyDownProcess;
}
function hiddenFocus()//隐藏主页面的焦点
{
	$("listFocus").style.display="none";
}
function judgeFactoryPass()
{
    if (top.appOpenFlag)
        return;
	//$("main").style.display = "block";
	if(factoryPassword == "1950")
	{
		clearTimeout(setTimeoutId);
        top.g_temp="quickMenu";
		top.$("operatePage").src = "";
		factoryPassword = "";
		top.g_factory_mode = 0;
		//window.location.href = "designMenu.html";
        if (top.preTempPage=="homePage")
        {
            tcl.channel.requestMute(0);
        }
		top.$("main").src="factory/designMenu.html";
		top.requestFocus(top.main, 1);
	}
	else if(factoryPassword == "9735")
	{
		clearTimeout(setTimeoutId);
        top.g_temp="quickMenu";
		top.$("operatePage").src = "";
		factoryPassword = "";
		top.g_factory_mode = 1;
        if (top.preTempPage=="homePage")
        {
            tcl.channel.requestMute(0);
        }
		top.$("main").src= "factory/factoryMenu.html";
		top.requestFocus(top.main, 1);
	}
	else if(factoryPassword == "9705")
	{
		clearTimeout(setTimeoutId);
        top.g_temp="quickMenu";
		top.$("operatePage").src = "";
		factoryPassword = "";
		top.g_factory_mode = 2;
        if (top.preTempPage=="homePage")
        {
            tcl.channel.requestMute(0);
        }
		top.$("main").src = "factory/serviceMenu.html";
		top.requestFocus(top.main, 1);
	}
    else if(factoryPassword == "6405")
	{
		clearTimeout(setTimeoutId);
        top.g_temp="quickMenu";
		top.$("operatePage").src = "";
		factoryPassword = "";
		top.g_factory_mode = 3;
        if (top.preTempPage=="homePage")
        {
            tcl.channel.requestMute(0);
        }
		top.$("main").src = "factory/hotelMenu.html";
		top.requestFocus(top.main, 1);
	}
    else if(factoryPassword == "6428" && top.g_setting.getProperty("ro.sita.model.LiveTV.PVR","FALSE") == "TRUE")//TSR Menu
    {
		/*
    	var cType = factory.getClientTypeKey();
    	var arrList = cType.split("-");
    	if(arrList.length>=2)
    	{
    		if(arrList[1] == "EU")
    		{
		  		factoryPassword = "";
				clearTimeout(setTimeoutId);
				setTimeoutId = 0;  		
				return;
    		}
    	}
    	*/
        clearTimeout(setTimeoutId);
        top.g_temp="quickMenu";
	    top.$("operatePage").src = "";
        factoryPassword = "";
        if (top.preTempPage=="homePage")
        {
            tcl.channel.requestMute(0);
        }
        top.$("main").src = "factory/TSRMenu.html";
        top.requestFocus(top.main, 1);
    }
	else if(factoryPassword == "6736")//pvr and timeshift open
	{
		top.g_factory.pvrOpenStatus = 1;
	}
	else if(factoryPassword == "2567")//pvr and timeshift close
	{
		top.g_factory.pvrOpenStatus = 0;
	}
	else if(factoryPassword == "6425")
	{
		clearTimeout(setTimeoutId);
        top.g_temp="quickMenu";
		top.$("operatePage").src = "";
		factoryPassword = "";
        if (top.preTempPage=="homePage")
        {
            tcl.channel.requestMute(0);
        }
		top.$("main").src = "option0624.html";
		top.requestFocus(top.main, 1);
	}
	else
	{
		factoryPassword = "";
		clearTimeout(setTimeoutId);
		setTimeoutId = 0;
	}
}

function checkShowMenu()
{
    try
    {
		var hdmiCurMode = 0;
        var is4K1K = 0;//setting.checkPQis4K1k;
        console.log("is4K1K==" + is4K1K);
	
		if (setting.hdmiMode == 0)
		{
			hdmiCurMode = setting.getHdmiRealType();
		}
		else
		{
			hdmiCurMode = setting.hdmiMode;
		}
	
        for (var i = 0; i < menuList.length; i++)
        {
            menuList[i].showFlag = 1;
        }
        if(setting.footballMode)
        {
        	for (var i = 2; i < menuList.length; i++)
	        {
	            menuList[i].showFlag = 0;
	        }
        	return;
        }
        if (setting.pic3DMode != 0)
        {
            menuList[2].showFlag = 0;
        }
        else
        {
            menuList[2].showFlag = 1;
        }
        if (setting.pic3DMode != 0)//测试用
        {
            showColorTemp = 0;
            menuList[8].showFlag = 0;
        }
        else
        {
            menuList[8].showFlag = 1;
            showColorTemp = 1;
        }
        if (inputLockp != 1 && signalStatus == 1 && zoomSmallWinState == 0)
        {
            if ((source != 1 && source != 0) || (source == 1 && programStatus == 1 && top.parentalLock != 1 && top.channelLock != 1 && screenSaverMode == 8) || (source == 0 && programStatus == 1 && top.channelLock != 1))
            {
                showScreenMode = 1;
                menuList[9].showFlag = 1;
                menuList[10].showFlag = 1;
            }
            else
            {
                menuList[9].showFlag = 0;
                menuList[10].showFlag = 0;
                showScreenMode = 0;
            }
        }
        else
        {
            menuList[9].showFlag = 0;
            menuList[10].showFlag = 0;
            showScreenMode = 0;
        }
        if (pannelType > 0)
        {
            menuList[13].showFlag = 1;
            menuList[14].showFlag = 1;
        }
        else
        {
            menuList[13].showFlag = 0;
            menuList[14].showFlag = 0;
        }
        if (pictureMode == 0)
        {
            menuList[15].showFlag = 0;
        }
        else
        {
            menuList[15].showFlag = 1;
        }
        if ((source == 6 || source == 7 || source == 8 || source == 12) && hdmiCurMode == 1)
        {
            menuList[5].showFlag = 0;
            menuList[6].showFlag = 0;
            menuList[7].showFlag = 0;
            menuList[9].showFlag = 0;
            menuList[11].showFlag = 0;
            menuList[12].showFlag = 0;
            menuList[16].showFlag = 0;
        }
        else
        {
            if (setting.getHueEnable == 0)
            {
                menuList[6].showFlag = 0;
            }
            else
            {
                menuList[6].showFlag = 1;
            }
            if (papShowValue == 0)
            {
                menuList[11].showFlag = 0;
            }
            else
            {
                menuList[11].showFlag = 1;
            }
            if (sportEnhance == 0)
            {
                menuList[12].showFlag = 0;
            }
            else
            {
                menuList[12].showFlag = 1;
            }


            if (source == sourcePC)
            {
                menuList[16].showFlag = 1;
            }
            else
            {
                menuList[16].showFlag = 0;
            }
        }
    }
    catch (er)
    {
        top.g_channel.testLog(er);
    }
}
function showMenuList()
{
	try
	{
		var showNum = 0;
		for(var i=0;i<menuList.length;i++)
		{
			if(menuList[i].showFlag==1)
			{
				showNum++;
				lis[i].style.display="block";
			}
			else
			{
				lis[i].style.display="none";
			}
		}
		if(showNum>11)
		{
			$("listDownRemind").style.display="block";
			$("listUpRemind").style.display="block";
		}
		else
		{
			$("listDownRemind").style.display="none";
			$("listUpRemind").style.display="none";
		}
		//add for football mode requirement
		$("menuUl").getElementsByTagName("img")[0].src = setting.footballMode || ((setting.location>0&&setting.checkPictureSelectEnable()==0))? focus_R_Focus[1] : focus_R_Focus[0];
		lis[0].getElementsByTagName("div")[0].style.color = setting.footballMode ||((setting.location>0&&setting.checkPictureSelectEnable()==0)) ? "#666" : "#FFF";
	}catch(er)
	{
		top.g_channel.testLog(er);
	}
}
function doOffsetMenuList(postion)
{
	if(postion>=12)
	{
		offsetPosition=postion-11;
		$("menuUl").style.top=-(postion-11)*70+"px";
		$("listFocus").style.top=SUB_MENU_START+11*SUB_MENU_STEP+"px";
	}
	else
	{
		offsetPosition=0;
		$("menuUl").style.top=0+"px";
		$("listFocus").style.top=SUB_MENU_START+postion*SUB_MENU_STEP+"px";
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
function findFunction(postion)
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
			menuList[i].param();
			break;
		}
	}
}
function findRealPosition(postion)
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
			return i;
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

function doCheck(which)
{
	/*需要说明的是String.fromCharCode(which)的值总是大写的，因为onkeyup和onkeydown事件不能主动判断键盘的大小写，
	onkeypress可以判断大小写。其中只有onkeyup事件能获取键盘按下去后的结果值，因为此处需用到要清除键盘按下去后的值，
	所以只能用onkeyup事件，考虑到遥控器只有数字键，没有大小写之分，所以够用了*/
	passwordLength = password.length;
	if(passwordLength == 4)//重新输入
	{
		password = "";
		$("passContent").innerHTML = password + "_";
	}
	password = password + which;
	$("passContent").innerHTML = $("passContent").innerHTML.substring(0,passwordLength) + "*" + "_";
	passwordLength++;
	if(passwordLength == 4)
	{
		$("passContent").innerHTML = $("passContent").innerHTML.substring(0,passwordLength);
        var pword = "";
        var superPword = top.g_superPassword;
        if (menuLock && hotelEnable && lockFlag)
        {
            superPword = "2013";
            pword = factory.hotelPassword;//"1968";
            console.log("--hzm get hotel password = " + pword);
            if (pword == undefined || pword == "")
                pword = "1968";
        }
        else
        {
            superPword = "0423";
            pword = setting.password;
        }
		 if(password != pword &&  password != superPword)
		{
			passwordLength = 0;
			$('passRemind').innerHTML = passIncorrectWords;
			password = "";
			$("passContent").innerHTML = password + "_";
		}
		else
		{
			focusType="pictureList";
			$("passForm").style.display = "none";
			if(top.virtualRemoteState == 1)
			{
				//隐藏虚拟遥控器--lqt
				top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
			}
			menuLock = 0;
			hotelEnable = 0;
			lockFlag = 0;
			init();
			parent.showPage(1);
	
		}
	}
}

function initPass()
{
	var passFormSpanList = $("passForm").getElementsByTagName("span");
	passFormSpanList[0].innerHTML = psswordWords;
	passFormSpanList[1].innerHTML = psswordWords;
	password = "";
	$("passContent").innerHTML = password + "_";
	$("passRemind").innerHTML = "";
	$("passForm").style.display = "block";

	focusType="password";
	parent.hiddenPage(1);
	top.showDialogPosition($("passForm"),800,300,1920,1080,0,0);
}
function change3DMode(curPic3DMode)
{
	pic3DMode = curPic3DMode;
	updatePicture("pic3D");	
}
function changeEnergySaving(curEnerSave)
{
	energySaveStatus = curEnerSave;
	updatePicture("ecoSetting");
}
var showPromptContTimer =0;
function showPromptCont()//显示提示语内容函数
{
	if(focusType=="pictureList"&&parent.currentShowMenu==1)
	{
		clearTimeout(showPromptContTimer);
		showPromptContTimer = setTimeout(function(){$("promptWin").style.display="none";$("promptWin2").style.display="none"},5000);
		var name=findName(positionV);
		if(name=="picturePreset")
		{
			if (setting.footballMode)
			{
                $("promptContent").innerHTML=picPromptCon[12];
			}
			else
			{
                $("promptContent").innerHTML=picPromptCon[0];
			}
            showPromptImg();
		}
		else if(name=="brightness")
		{
			$("promptContent").innerHTML=picPromptCon[1];
			showPromptImg();
		}
		else if(name=="contrast")
		{
			$("promptContent").innerHTML=picPromptCon[2];
			showPromptImg();
		}
		else if(name=="saturation")
		{
			$("promptContent").innerHTML=picPromptCon[3];
			showPromptImg();
		}
		else if(name=="sharpness")
		{
			$("promptContent").innerHTML=picPromptCon[4];
			showPromptImg();
		}
		else if(name=="backlight")
		{
			$("promptContent").innerHTML=picPromptCon[5];
			showPromptImg();
		}
		else if(name=="tint")
		{
			$("promptContent").innerHTML=picPromptCon[6];
			showPromptImg();
		}
		else if(name=="screenMode")
		{
			$("promptContent").innerHTML=picPromptCon[7];
			showPromptImg();
		}
		else if(name=="ecoSetting")
		{
			$("promptContent").innerHTML=picPromptCon[8];
			showPromptImg();
		}
		else if(name=="geoSetting")
		{
			$("promptContent").innerHTML=picPromptCon[9];
			showPromptImg();
		}
		else if(name=="advancedSetting")
		{
			$("promptContent").innerHTML=picPromptCon[10];
			showPromptImg();
		}
		else if(name=="pictureReset")
		{
			$("promptContent").innerHTML=picPromptCon[11];
			showPromptImg();
		}
		else if (name=="mircoDimming" && setting.footballMode == 1)
		{
            $("promptWin").style.display="none";
            $("promptWin2").style.display="block";
            $("promptContent2").innerHTML=picPromptCon[13];
		}
		else
		{
			$("promptWin").style.display="none";
            $("promptWin2").style.display="none";
		}
	}
	else
	{
		$("promptWin").style.display="none";
        $("promptWin2").style.display="none";
	}
	
}

function showMouseDown()
{
	top.g_channel.testLog("you press right key");
}
function addTagName(tag,id)
{
	tag.setAttribute("newAttr",id);
}
var IFRAME_LEFT_OFFSET = 270;//subMenu1这个iframe在framwork中的相对左偏移
var EXTRA_PROGRESS_BAR_LEFT_OFFSET = 310;//进度条容器相对于submenu1这个iframe的左偏移
var PROGRESS_START_LEFT_OFFSET = IFRAME_LEFT_OFFSET + EXTRA_PROGRESS_BAR_LEFT_OFFSET;//进度条容器开始位置相对于framework的左偏移
var PROGRESS_MAX_VALUE = 100;//sPDIFDelay 的取值范围是0-PROGRESS_MAX_VALUE,最大值为PROGRESS_MAX_VALUE
var EXTRA_PROGRESS_WIDTH = 900;
function addMouseListener()
{
	try
    {
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2)
		{
			console.log("I click userPictureSet right key"); 
			toBack();//right key
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
    
	for(var kk = 0; kk <=17; kk++)
	{
		addTagName(lis[kk],kk);
		lis[kk].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusType=="pictureList")
				{
					if(1)//parent.currentShowMenu==0)
					{
						evt.preventDefault();
						parent.onLoadPage=0;
						parent.$("homeMenu").contentWindow.document.getElementById("menuFocus").src=parent.mentFocusImg[1];
						parent.$("subMenu1").contentWindow.showFocus();
						parent.currentShowMenu=1;
						//top.requestFocus(parent.subMenu1, 1);
						//parent.setIndexFocusPage("subMenu1");
						if((parent.menuLock) && (parent.hotelEnable))
						{
							parent.menuLockFlag = 0;
							return;
						}
					}
					positionV = findPosition(menuList[parseInt(this.getAttribute("newAttr"))].name);
					$("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*(positionV-offsetPosition) + "px";
					toOK();
				}
			}
			showPromptCont();
		   top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	$("listFocus").onmousedown= function(evt){
		 top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusType=="pictureList")
				{
					toOK();
				}
			}
			showPromptCont();
			top.timeoutFuc.osdTimeoutStartFuc();
		}
//	console.log("I will bind click otherPreSetSpans");
	for(var i = 0; i < otherPreSetSpans.length - 1; i++)
	{
		addTagName(otherPreSetSpans[i+1],i);
	//	console.log("I will bind click otherPreSetSpans["+(i+1)+"]");
		otherPreSetSpans[i+1].onmousedown = function(evt){
		//	console.log("I click focusType=="+focusType);
			if(evt.button == 0){//left key
			    presetPositionH = parseInt(this.getAttribute("newAttr"));
			//	console.log("focusType=="+focusType+"====presetPositionH=="+presetPositionH);
				toOK();
			//	console.log("focusType=="+focusType+"====presetPositionH=="+presetPositionH);
			}
			showPromptCont();
		}
	}
	for(var j = 0; j < 5; j++)
	{
		addTagName(zoomSpans[j+1],j);
		
		zoomSpans[j+1].onmousedown = function(evt){
			if(evt.button == 0){//left key
			    presetPositionH = parseInt(this.getAttribute("newAttr"));
				currentSizeNum = presetPositionH + (sizeCurrentPage-1)*5;
				toOK();
			}
			showPromptCont();
		}
		
	}
	for(var k = 1; k < 6; k++)
	{
		addTagName(zoomImg[k],k-1);
		zoomImg[k].onmousedown = function(evt){
			if(evt.button == 0){//left key
			    presetPositionH = parseInt(this.getAttribute("newAttr"));
				currentSizeNum = presetPositionH + (sizeCurrentPage-1)*5;
				toOK();
			}
			showPromptCont();
		}
	}
//	$("preSetSelectFocus").onmousedown = function(evt){console.log("I click preSetBar focusType=="+focusType);}
//	console.log("I will bind click listUpRemind");
	$("listUpRemind").onmousedown = function(evt){
		 top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusType=="pictureList")
				{
					evt.preventDefault();
					parent.onLoadPage=0;
					parent.$("homeMenu").contentWindow.document.getElementById("menuFocus").src=parent.mentFocusImg[1];
					parent.$("subMenu1").contentWindow.showFocus();
					parent.currentShowMenu=1;
					//top.requestFocus(parent.subMenu1, 1);
					//parent.setIndexFocusPage("subMenu1");
					if((parent.menuLock) && (parent.hotelEnable))
					{
						parent.menuLockFlag = 0;
						return;
					}
					toUp();
				}
			}
			showPromptCont();
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	$("listDownRemind").onmousedown = function(evt){
		 top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusType=="pictureList")
				{
					evt.preventDefault();
					parent.onLoadPage=0;
					parent.$("homeMenu").contentWindow.document.getElementById("menuFocus").src=parent.mentFocusImg[1];
					parent.$("subMenu1").contentWindow.showFocus();
					parent.currentShowMenu=1;
					//top.requestFocus(parent.subMenu1, 1);
					//parent.setIndexFocusPage("subMenu1");
					if((parent.menuLock) && (parent.hotelEnable))
					{
						parent.menuLockFlag = 0;
						return;
					}
					toDown();
				}
			}
			showPromptCont();
			top.timeoutFuc.osdTimeoutStartFuc();
		}
//		console.log("I will bind click preSetLeft");
	$("preSetLeft").onmousedown = function(evt){
		 top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				toLeft();
			}
			showPromptCont();
			top.timeoutFuc.osdTimeoutStartFuc();
		}
//		console.log("I will bind click preSetRight");
	$("preSetRight").onmousedown = function(evt){
		 top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				toRight();
			}
			showPromptCont();
			top.timeoutFuc.osdTimeoutStartFuc();
		}
//		console.log("I will bind click adjustProgressBox");
	$("adjustProgressBox").onmousedown = function(evt){
		 top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 1){//left key
			toBack();	
			}
			showPromptCont();
			top.timeoutFuc.osdTimeoutStartFuc();
		}
//		console.log("I will bind click adjustProgMinorUp");
	$("adjustProgMinorUp").onmousedown = function(evt){
		 top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				toUp();
			}
			showPromptCont();
			top.timeoutFuc.osdTimeoutStartFuc();
		}
//		console.log("I will bind click adjustProgMinorDown");
	$("adjustProgMinorDown").onmousedown = function(evt){
		 top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				toDown();
			}
			showPromptCont();
			top.timeoutFuc.osdTimeoutStartFuc();
		}
//		console.log("I will bind click adjustProgBar");
	$("adjustProgBar").onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusType=="adjustBar")
			{
				top.g_channel.testLog("evt.clientX ==="+evt.clientX+"=====PROGRESS_START_LEFT_OFFSET==="+PROGRESS_START_LEFT_OFFSET);
				var value = parseInt((evt.clientX - PROGRESS_START_LEFT_OFFSET)*PROGRESS_MAX_VALUE/EXTRA_PROGRESS_WIDTH,10);
				switch(adjustOption)
				{
					case 3:
					{
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						brightness=value;
						if(brightness<0)
						{
							brightness=0;
						}
						else if(brightness>100)
						{
							brightness=100;
						}
						setting.brightness=brightness;
						progDivs[0].style.width=9*brightness+"px";
						progDivs[2].style.width=900-9*brightness+"px";
						$("adjustProgValue").innerHTML=brightness;
						break;
					}
					case 4:
					{
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						contrast=value;
						if(contrast<0)
						{
							contrast=0;
						}
						else if(contrast>100)
						{
							contrast=100;
						}
						setting.contrast=contrast;
						progDivs[0].style.width=9*contrast+"px";
						progDivs[2].style.width=900-9*contrast+"px";
						$("adjustProgValue").innerHTML=contrast;
						break;
					}
					case 5:
					{
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						saturation=value;
						if(saturation<0)
						{
							saturation=0;
						}
						else if(saturation>100)
						{
							saturation=100;
						}
						setting.saturation=saturation;
						progDivs[0].style.width=9*saturation+"px";
						progDivs[2].style.width=900-9*saturation+"px";
						$("adjustProgValue").innerHTML=saturation;
						break;
					}
					case 7:
					{
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						sharpness=value;
						if(sharpness<0)
						{
							sharpness=0;
						}
						else if(sharpness>100)
						{
							sharpness=100;
						}
						setting.sharpness=sharpness;
						progDivs[0].style.width=9*sharpness+"px";
						progDivs[2].style.width=900-9*sharpness+"px";
						$("adjustProgValue").innerHTML=sharpness;
						break;
					}
					case 2:
					{
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						backLight=value;
						if(backLight<0)
						{
							backLight=0;
						}
						else if(backLight>100)
						{
							backLight=100;
						}
						setting.backLight=backLight;
						progDivs[0].style.width=9*backLight+"px";
						progDivs[2].style.width=900-9*backLight+"px";
						$("adjustProgValue").innerHTML=backLight;
						break;
					}
					case 6:
					{
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						tint=value;
						if(tint<0)
						{
							tint=0;
						}
						else if(tint>100)
						{
							tint=100;
						}
						setting.hue=tint;
						progDivs[0].style.width=9*tint+"px";
						progDivs[2].style.width=900-9*tint+"px";
						$("adjustProgValue").innerHTML=tint;
						break;
					}
				}
			}
		}
		showPromptCont();
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	var divs=$("picReset").getElementsByTagName("div");
	divs[0].onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusType=="picReset")
			{
				isReset=1;
				$("picResetFocus").style.left="190px";
				toOK();
			}
		}
		showPromptCont();
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	divs[1].onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusType=="picReset")
			{
				isReset=0;
				$("picResetFocus").style.left="420px";
				toOK()
			}
		}
		showPromptCont();
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	}catch(er)
	{
		top.g_channel.testLog("userPicMouse:"+er);
	}
}

function pictureModeTransform(preMode, type)//type[0]: mw to ui; [1]ui to mw
{
	var aftMode = preMode;
	if(type)//ui to mw
	{
		if(5 == preMode)
		{
			aftMode = 4;
		}
		else if(4 == preMode)
		{
			aftMode = 5;
		}
	}
	else
	{
		if(4 == preMode)
		{
			aftMode = 5;
		}
		else if(5 == preMode)
		{
			aftMode = 4;
		}
	}
	return aftMode;
}

var lastFocusName = "";
var lastFocusType = "";
var lastFocusName2 = "";
var ttsOverScanValue = 0; //修改TTS overscan一直播报not select问题
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

	if(focusType == "pictureList" && 1 == parent.currentShowMenu)
	{
		lastFocusName2 = "";
		switch(currentName)
		{
			case "picturePreset":
				ttsName = top.picOptions[0] + ",";
				currentStatus = picPreset[pictureMode];
				break;
			case "backlight":
				ttsName = top.picOptions[1] + ",";
				currentStatus = backLight;
				break;
			case "brightness":
				ttsName = top.picOptions[2] + ",";
				currentStatus = brightness;
				break;
			case "contrast":
				ttsName = top.picOptions[3] + ",";
				currentStatus = contrast;
				break;
			case "saturation":
				ttsName = top.picOptions[4] + ",";
				currentStatus = saturation;
				break;
			case "tint":
				ttsName = top.picOptions[5] + ",";
				currentStatus = tint;
				break;
			case "sharpness":
				ttsName = top.picOptions[6] + ",";
				currentStatus = sharpness;
				break;
			case "coloTemp":
				ttsName = top.picOptions[7] + ",";
				currentStatus = picColorTemp[colorTempVal];
				break;
			case "autoFormat":
				ttsName = top.picOptions[9] + ",";
				currentStatus = picAutoFormat[autoFormatValue];
				break;
			case "screenMode":
				ttsName = top.picOptions[8] + ",";
				currentStatus = picSize[nowSizeNum];
				break;
			case "overScan":
				ttsName = userPicConName[10] + ",";
				currentStatus = sportEnhanceSwitchValue[picOverScanValue];
				break;
			case "sportEnhance":
				ttsName = userPicConName[11] + ",";
				currentStatus = sportEnhanceSwitchValue[picSportEnhanceValue];
				break;
			case "ecoSetting":
				ttsName = top.picOptions[13] + ",";
				currentStatus = "";
				break;
			case "geoSetting":
				ttsName = top.picOptions[14] + ",";
				currentStatus = "";
				break;
			case "mircoDimming":
				ttsName = userPicConName[16] + ",";
				currentStatus = sportEnhanceSwitchValue[picMircoDimmingValue];
				break;
			case "advancedSetting":
				ttsName = top.picOptions[15] + ",";
				currentStatus = "";
				break;
			case "pictureReset":
				ttsName = top.picOptions[16] + ",";
				currentStatus = "";
				break;
			default:
				ttsName = "";
				currentStatus = "";
				break;
		}
	}
	else if(focusType == "picPreset")
	{
		ttsName = "";
		currentStatus = picPreset[presetPositionH];
		isSelected(picPreset[pictureMode] == currentStatus);
	}
	else if(focusType == "ColorTempMenu")
	{
		ttsName = "";
		currentStatus = picColorTemp[presetPositionH];
		isSelected(picColorTemp[colorTempVal] == currentStatus);
	}
	else if(focusType == "autoFormat")
	{
		ttsName = "";
		currentStatus = picAutoFormat[presetPositionH];
		isSelected(picAutoFormat[autoFormatValue] == currentStatus);
	}
	else if(focusType == "picShowScreen")
	{
		ttsName = "";
		currentStatus = picSize[picShowSize[presetPositionH+(sizeCurrentPage-1)*5]];
		isSelected(picSize[nowSizeNum] == currentStatus);
	}
	else if(focusType == "papMenu")
	{
		ttsName = "";
		currentStatus = sportEnhanceSwitchValue[presetPositionH];
		isSelected(sportEnhanceSwitchValue[ttsOverScanValue] == currentStatus);
	}
	else if(focusType == "picSportEnhance")
	{
		ttsName = "";
		currentStatus = sportEnhanceSwitchValue[presetPositionH];
		isSelected(sportEnhanceSwitchValue[picSportEnhanceValue] == currentStatus);
	}
	else if(focusType == "MircoDimmingMenu")
	{
		ttsName = "";
		currentStatus = sportEnhanceSwitchValue[presetPositionH];
		isSelected(sportEnhanceSwitchValue[picMircoDimmingValue] == currentStatus);
	}
	else if(focusType == "picReset")
	{
		ttsName = top.picResetDes;
		if(lastFocusName2 == ttsName)
		{
			ttsName = "";
		}
		lastFocusName2 = top.picResetDes;
		if(isReset == 0)
		{
			currentStatus = "," + picReset[2];
		}
		else
		{
			currentStatus = "," + picReset[1];
		}
	}
	else if(focusType == "adjustBar")
	{
		switch(adjustUpOption)
		{
			case 6:
				ttsName = top.picOptions[1];
				currentStatus = backLight;
				break;
			case 1:
				ttsName = top.picOptions[2];
				currentStatus = brightness;
				break;
			case 2:
				ttsName = top.picOptions[3];
				currentStatus = contrast;
				break;
			case 3:
				ttsName = top.picOptions[4];
				currentStatus = saturation;
				break;
			case 4:
				ttsName = top.picOptions[5];
				currentStatus = tint;
				break;
			case 5:
				ttsName = top.picOptions[6];
				currentStatus = sharpness;
				break;
			default:
				break;
		}
		if(lastFocusName == adjustUpOption && lastFocusType == focusType)
		{
			ttsName = "";
		}
		else
		{
			ttsName = ttsName + ",";
		}
	}
	else
	{
		ttsName = "";
		currentStatus = "";
	}
	lastFocusType = focusType;
	lastFocusName = adjustUpOption;
	ttsStr = ttsName + currentStatus;
	if("" != ttsStr)
	{
		top.ttsLog("ttsStr=" + ttsStr);
		//top.ttsLog("focusType="+focusType+" adjustUpOption="+adjustUpOption);
		//top.ttsLog("presetPositionH="+presetPositionH);
		top.setTTSSay(top.SPEECH_TYPE_FLUSH, ttsStr);
	}
}