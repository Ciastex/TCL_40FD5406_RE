/******************** created by chenhua ***********************/
console.log("==> Loadstart JS <==");
var systemSetTitleWords 	= [top.sysOptions[0], top.chScanOptions[0], top.sysOptions[15],top.sysOptions[1],  top.sysOptions[1], top.sysOptions[2],
                               top.sysOptions[3], top.sysOptions[4], top.sysOptions[5], top.sysOptions[6], top.sysOptions[14],top.sysOptions[16],top.sysOptions[7],
							   /*top.sysOptions[8],*/ top.sysOptions[9], top.sysOptions[10],top.sysAdOptions[2],top.settingNoticeSourceName,
	                           top.footballModeName,top.ClosedcaptionName, top.sysOptions[12], top.sysOptions[13],top.sysOptions[11]];
var offOnWords				= top.offOn;
var homeShopWords 			= top.initLocations;
var okCancelWords			= top.okCancel;
var psswordWords			= top.others[2];
var passIncorrectWords		= top.passError;
var resetRemindWords		= top.sysResetDes;
var LEDWords                = top.LEDStatus;
var resetShopRemind         = top.resetShopRemind;
var sysPromptCon            = [top.prompts[25],top.prompts[26],top.prompts[27],top.prompts[28],top.prompts[31],top.prompts[32]];
var sysPromptImg         	= ["images/info-1_2.png","images/info-1_3.png","images/info-1_4.png","images/info-1_5.png","images/info-1_6.png"]
var mainFocus               = ["images/Focus_Frame/Focus-1.png","images/Focus_Frame/Focus-2.png"];
var setting 				= top.g_setting;
var channel			 		= top.g_channel;
var multimedia 				= top.g_media;
var menuLangIndex           = top.mlmLangIndexLA;   //拉美3语言（英语，西班牙语，葡萄牙语）对应的中间件编号
var menuLangWords     	= top.sysMenuLangLA;
var countryIndexList        = top.mlmCountryIndexLA;//????????
var countryListWords        = new Array(countryIndexList.length);

var countryOffset			= 0;
var countryPos              = 0;                    //0-lenght of Argentina/Belize/Bolivia/Brazil/Chile/Costa Rica/Ecuador/EI Salvador/Guatemala/Nicaragua/Paraguay/Peru/Uruguay/Venezuela/Other
var menuLangPos      		= 0;					//0-2:English,Portuguse,Spainish
var inputSource 			= 0;
var list_position_h 		= 0;					//主界面坐标
var form_position_h			= 0;					//弹出框焦点位置
var locationValue			= 0;					//0 home;1 shop,注意location是window的对象，不要有变量名和window对象同名
var autoShopmodeValue		= 0;					//0 off,1 on
var hbbtvMode				= 0;					//0 off,1 on
//var cookie					= 0;					//0 off,1 on
var footballMode 			= 0;					//[0]off, [1]on
var LEDMode                 = 0;                    //0 flashing; 1 normal;2 off
var noticeSource           = 0;
var instantPowerOn 			= 0;					//
var focusOn					= "menu";				//menu,location;hbbtvMode,password,resetShop
var password				= "";					//密码
var	passwordLength			= 0;					//密码字串的长度
var tLink					= 0;
var demoVideoValue			= 0;

var SUB_MENU_START 			= 75;					//二级级菜单焦点移动起始位置
var SUB_MENU_STEP 			= 70;					//二级级主菜单焦点移动的step
var FORM_STEP				= 80;					//弹出框焦点移动的step		
var DIALOG_BUTTON_START		= 190;					//对话框中按钮焦点起始位置
var DIALOG_BUTTON_STEP		= 250;					//对话框焦点移动的step		
var ONE_LINE_TOP            = 38;
var TWO_LINE_TOP            = 20;
var THREE_LINE_TOP          = 5;
var LIST_BOX_HEIGHT			= 70;
//
var ONE_LINE_TOP            = 35;
var TWO_LINE_TOP            = 12;
var THREE_LINE_TOP          = 18;
var FOUR_LINE_TOP           = 28;
var FIVE_LINE_TOP           = 35;
var SIX_LINE_TOP            = 40; 
var PROMPT_LINE_HEIGHT		= 40;

var factory                = top.g_factory;
var menuLock               = 0;
var hotelEnable            = 0;
var lockWords 			   = top.sysOptions[3];
var lockFlag               = 1;
var E_LOCATION_HOME        = 0;
var showHbbtvRemindTimer = 0;

var eManualPosIndex				= 0;
var countryLaPosIndex           = 0;
var areaPosIndex                = 0;
var menuLangPosIndex			= 0;
var menuLangLAPosIndex          = 0;
var timerPosIndex				= 0;
var lockPosIndex				= 0;
var inputSettingPosIndex		= 0;
var softwareUpdatePosIndex		= 0;
var locationPosIndex			= 0;
var autoShopmodePosIndex		= 0;
var demoModePosIndex			= 0;
var hbbtvModePosIndex			= 0;
//var cookiesPosIndex				= 0;
var commonInterfacePosIndex		= 0;
var advancedSettingPosIndex		= 0;
var tlinkPosIndex		= 0;
var noticeSourceSettingPosIndex = 0;
var footballModePosIndex		= 0;
var closedcaptionPosIndex       = 0;
var resetShopPosIndex			= 0;
var ledIndicatorPosIndex		= 0;
var instantPowerOnPosIndex		= 0;

var displayListCount			= 0;
var MAX_COUNT_ONE_PAGE			= 12;
var focus_off_set				= 0;
var otherPreSetSpans			= 0;
var presetPositionH				= 0;
var PRESET_FOCUS_WIDTH 			= 230;
var SCREEN_WIDTH 				= 1920;
var PRE_BAR_OPTION_WIDTH 		= 390;
var PRE_BAR_STEP 				= 230;

var AUTOSHOPMODE_SWITCH_STATE_FOR_DB = "app.ui.autoshopmode.switch";//存入数据库中autoshopmode开关状态
var DEMOMODE_VALUE_FOR_DB		= "app.ui.demoVideoValue";
var demo_videos_name			= new Array();

var menuList =[
{name:"E_Manual",param:function(){doE_Manual();},showFlag:1},
{name:"Country",param:function(){doCountryLA();},showFlag:1},
{name:"Area",param:function(){doArea();},showFlag:1},
{name:"Menu_language",param:function(){doMenu_language();},showFlag:1},
{name:"MenuLanguage",param:function(){doMenuLanguage();},showFlag:1},
{name:"Timer",param:function(){doTimer();},showFlag:1},
{name:"Lock",param:function(){doLock();},showFlag:1},
{name:"Input_settings",param:function(){doInput_settings();},showFlag:1},
{name:"Software_update",param:function(){doSoftware_update();},showFlag:1},
{name:"Location",param:function(){doLocation();},showFlag:1},
{name:"Auto_shopmode",param:function(){doAuto_shopmode();},showFlag:1},
{name:"Demo mode",param:function(){doDemo_mode();},showFlag:1},
{name:"HbbTV_mode",param:function(){doHbbTV_mode();},showFlag:1},
//{name:"Cookies",param:function(){doCookies();},showFlag:1},
{name:"Common_interface",param:function(){doCommon_interface();},showFlag:1},
{name:"Advanced_setting",param:function(){doAdvanced_setting();},showFlag:1},
{name:"T-Link",param:function(){doTLink();},showFlag:1},
{name:"noticeSourceStatus",param:function(){doNoticeSource();},showFlag:1},
{name:"footballmode",param:function(){doFootballMode();},showFlag:1},
{name:"Closed caption",param:function(){doClosedCaption();},showFlag:1},
{name:"LED_Indicator",param:function(){doLED_Indicator();},showFlag:1},
{name:"InstantPowerOn",param:function(){doInstantPowerOn();},showFlag:1},
{name:"Reset_shop",param:function(){doReset_shop();},showFlag:1}      //reset shop一定要在最后
];

document.onsystemevent = notifyProcess;
console.log("==> define var finish <==");
function testLog(str)
{
	console.log("       --------> Areos: " + str);
}

function notifyProcess(evt)
{
	if(focusOn == "showResetShopRemind")
	{
		return;
	}
    var msg = evt.which;
	switch(msg)
	{
		default:
			top.systemEventProc(evt);
			break;
	}
}

function initOptionListIndex()
{
	var t = 0;
	eManualPosIndex				= t++;
	countryLaPosIndex           = t++;
    areaPosIndex				= t++;
	menuLangPosIndex			= t++;
	menuLangLAPosIndex			= t++;
	timerPosIndex				= t++;
	lockPosIndex				= t++;
	inputSettingPosIndex		= t++;
	softwareUpdatePosIndex		= t++;
	locationPosIndex			= t++;
    autoShopmodePosIndex		= t++;
    demoModePosIndex			= t++;
	hbbtvModePosIndex			= t++;
	//cookiesPosIndex				= t++;
	commonInterfacePosIndex		= t++;
	advancedSettingPosIndex	=t++;
	tlinkPosIndex			= t++;
	noticeSourceSettingPosIndex		= t++;
	footballModePosIndex		= t++;
	closedcaptionPosIndex       = t++;
	ledIndicatorPosIndex		= t++;
    instantPowerOnPosIndex      = t++;
    resetShopPosIndex			= t++;
}

function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyDownProcess;
}
function keyDownProcess(evt)
{
	if(focusOn == "showResetShopRemind")
	{
		return;
	}
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
				if($("passForm").style.display == "block")
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
			toUp();
			ttsRead();
			ret = false;
			break;
		case top.VK_DOWN:
			toDown();
			ttsRead();
			ret = false;
			break;
		case top.VK_ENTER:
			doEnter();
			ttsRead();
			ret = false;
			break;
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
		case top.VK_BACK:
			toBack();
			ttsRead();
			break;
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
			if((focusOn == "password") || ((menuLock) && (hotelEnable)))
			{
				doCheck(evt.which - 48);
				ret = false;
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
	if(focusOn == "menu")
	{
		if(list_position_h + focus_off_set == findMaxPosition())//the list bottom
		{
			focus_off_set = 0;
			list_position_h = 0;
		}
        else if(list_position_h + focus_off_set < findMaxPosition())
    	{
			list_position_h++;
		}
		else if(list_position_h + 1 == MAX_COUNT_ONE_PAGE)
		{
			focus_off_set = (MAX_COUNT_ONE_PAGE < list_position_h + focus_off_set + 2)
				? list_position_h + 2 + focus_off_set - MAX_COUNT_ONE_PAGE : 0;
		}
		refreshFocusOfMenuList();
        top.doEleScrForNoOption(listFirstSpans, findRealPosition(list_position_h)+focus_off_set, -1);
	}
	else if(focusOn == "country")
    {
		if(form_position_h == 4 && (countryOffset + form_position_h) == (countryIndexList.length-1))
		{
			countryOffset=0;
			//????
			var i=0;
			for(i=0;i<5;i++)
			{
				listFormLiList[i].innerHTML = countryListWords[countryOffset + i];
			}
			form_position_h=0;
			$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		}
		else if(form_position_h == 4 && (countryOffset + form_position_h) < (countryIndexList.length-1))
		{
			countryOffset++;
			var i=0;
			for(i=0;i<5;i++)
			{
				listFormLiList[i].innerHTML = countryListWords[countryOffset + i];
			}
		}
		else
		{
			form_position_h++;
			$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		}
		
		if(countryOffset > 0)
		{
			$("listUpImg").style.display = "block";
		}
		else
		{
			$("listUpImg").style.display = "none";
		}
		
		if((countryOffset + 4) >= (countrySum - 1))
		{
			$("listDownImg").style.display = "none";
		}
		else
		{
			$("listDownImg").style.display = "block";
		}
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
    }
	else if(focusOn == "menulang" )
	{
		if(form_position_h == menuLangIndex.length -1)
		{
			form_position_h = 0;
		}
		else
		{
			form_position_h++;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
	else if(focusOn == "location" )
	{
		form_position_h = form_position_h == 2 ? 0 : form_position_h + 1;
		$("listFormFocus").style.top = form_position_h * FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
    else if(focusOn == "autoshopmode")
	{
        if(form_position_h == 0)
        {
            form_position_h = 1;
        }
        else
        {
            form_position_h = 0;
        }
        $("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
        top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
    else if(focusOn == "demomode")
    {
        if(form_position_h == demo_videos_name.length - 1)
        {
            form_position_h = 0;
        }
        else
        {
            form_position_h ++;
        }
        $("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
        top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
    }
	else if(focusOn == "hbbtvMode")
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
	else if(focusOn == "noticeSource")
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
	/*
	else if(focusOn == "cookie")
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
	*/
    else if(focusOn == "LEDMode" )
	{
        form_position_h = form_position_h == 2 ? 0 : form_position_h + 1;
        $("listFormFocus").style.top = form_position_h * FORM_STEP + "px";
        top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
    else if(focusOn == "instantPowerOn" )
    {
        if(form_position_h == 0)
        {
            form_position_h = 1;
        }
        else
        {
            form_position_h = 0;
        }
        $("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
        top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
    }
    else if(focusOn == "tlink" )
    {
        if(form_position_h == 0)
        {
            form_position_h = 1;
        }
        else
        {
            form_position_h = 0;
        }
        $("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
        top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
    }
}
function toUp()
{

	if(focusOn == "menu")
	{
//		if(!list_position_h && !focus_off_set)//the list top
//		{
//			focus_off_set = (MAX_COUNT_ONE_PAGE < findMaxPosition() + 1)
//				? findMaxPosition() + 1 - MAX_COUNT_ONE_PAGE : 0;
//			//list_position_h = MAX_COUNT_ONE_PAGE - 1;
//            list_position_h = findMaxPosition() ;
//		}
//		else if(list_position_h + focus_off_set > 0 && list_position_h - 1 >= 0)
//		{
//			list_position_h--;
//		}
//		else if(!list_position_h && focus_off_set)
//		{
//			focus_off_set--;
//		}
//		refreshFocusOfMenuList();
        if ((menuLock) && (hotelEnable) && (lockFlag))
        {
            return;
        }
        else {
            if (findName(list_position_h) == findFirstName()) {
                list_position_h = findPosition(findLastName());
            }
            else {
                if(list_position_h + 1 == MAX_COUNT_ONE_PAGE && focus_off_set > 0)
                {
                    focus_off_set--;
                }else{
                    list_position_h--;
                }
            }
            doOffsetMenuList(list_position_h);
            top.doEleScrForNoOption(listFirstSpans, findRealPosition(list_position_h)+focus_off_set, -1);
        }
	}
	else if(focusOn == "country")
    {
		if(form_position_h == 0 && (countryOffset + form_position_h) == 0)
		{
			countryOffset = countryIndexList.length - 5;
			for(var i = 0; i < 5; i++)
			{
				listFormLiList[i].innerHTML = countryListWords[countryOffset + i];
			}
			form_position_h = 4;
			$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		}
		else if(form_position_h == 0 && (countryOffset + form_position_h) > 0)
		{
			countryOffset--;
			var i=0;
			for(i=0;i<5;i++)
			{
				listFormLiList[i].innerHTML = countryListWords[countryOffset + i];
			}
		}
		else if(form_position_h>0)
		{
			form_position_h--;			
			$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		}
		
		if(countryOffset > 0)
		{
			$("listUpImg").style.display = "block";
		}
		else
		{
			$("listUpImg").style.display = "none";
		}
		
		if((countryOffset + 4) >= (countryIndexList.length - 1))
		{
			$("listDownImg").style.display = "none";
		}
		else
		{
			$("listDownImg").style.display = "block";
		}
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
    }
	else if(focusOn == "menulang")
	{
		if(form_position_h == 0)
		{
			form_position_h = menuLangIndex.length -1;
		}
		else
		{
			form_position_h--;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
	else if(focusOn == "location")
	{
		if(form_position_h == 0)
		{
			form_position_h = 2;
		}
		else
		{
			form_position_h--;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
    else if(focusOn == "autoshopmode")
	{
        if(form_position_h == 0)
        {
            form_position_h = 1;
        }
        else
        {
            form_position_h = 0;
        }
        $("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
        top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
    else if(focusOn == "demomode")
    {
        if(form_position_h == 0)
        {
            form_position_h = demo_videos_name.length - 1;
        }
        else
        {
            form_position_h --;
        }
        $("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
        top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
    }
	else if(focusOn == "hbbtvMode")
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
	else if( focusOn == "noticeSource")
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
	/*
	else if(focusOn == "cookie")
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
	*/
    else if(focusOn == "LEDMode")
	{

        if(form_position_h == 0)
        {
            form_position_h = 2;
        }
        else
        {
            form_position_h--;
        }
        $("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
        top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
    else if(focusOn == "instantPowerOn")
    {
        if(form_position_h == 0)
        {
            form_position_h = 1;
        }
        else
        {
            form_position_h = 0;
        }
        $("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
        top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
    }
    else if(focusOn == "tlink" )
    {
        if(form_position_h == 0)
        {
            form_position_h = 1;
        }
        else
        {
            form_position_h = 0;
        }
        $("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
        top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
    }	
}

function doEnter()
{
	if(focusOn == "menu")
	{
		findFunction(list_position_h + focus_off_set);
	}
	else if(focusOn == "country")
	{
		$("listFocus").src=mainFocus[0];
		$("countryWords").innerHTML=countryListWords[(countryOffset + form_position_h)];
        $("listForm").style.display = "none";
		countryPos = countryOffset + form_position_h;
		channel.systemCountry = countryIndexList[countryPos];
		if(top.isCAFlag){//CA设置国家时，对应设置时区
			top.setTimeZoneForCA(channel.systemCountry);
		}
		if(top.isGingaOn && top.GingaObj.isInit == top.GingaStates.True)
		{
			if(channel.systemCountry == countryIndexList[3]) //br
			{
				top.g_ginga.setCountry(0)//0:br 1:agr
			}else if(channel.systemCountry == countryIndexList[0]) //arg
			{
                top.g_ginga.setCountry(1)
			}else{
                top.g_ginga.setCountry(0)//default:br
			}
			//top.gingaEvtProc(top.GingaStates.Events.GINGA_EVT_COUNTRY_CHANGE);
		}

		console.log("[ldc] Open GloboPlay service in next boot.");
		setting.setAppPersistent("GloboPlay",1);

        if(top.isLAFlag)//菲律宾 EWBS
        {
            //menuList[areaPosIndex].showFlag = 1;
            initAllMenuList();
        }
        focusOn = "menu";
		countryOffset = 0;
		top.preloadLauncher(1);
	}
	else if(focusOn == "menulang")
	{
		menuLangPos = form_position_h;
		top.g_language = menuLangIndex[menuLangPos];
		top.doChangeMultilanguage(top.g_language);
		focusOn = "menu";
		setTimeout(function(){
			refreshUIWhenLanguageChange();
			parent.$("homeMenu").contentWindow.refreshUIWhenLanguageChange();
			top.preloadLauncher(1);
			setting.menuLanguage = top.g_language;
			if(top.isGingaOn && top.GingaObj.isInit == top.GingaStates.True) //菜单显示需要暂停Ginga,发送暂停信号到中间件
			{
				//top.gingaEvtProc(top.GingaStates.Events.GINGA_EVT_MENU_LANGUAGE_CHANGE);
                top.g_ginga.setNetworkEvent(top.GingaStates.NetworkEvents.GINGA_NW_EVT_TS_UNSELECTED);
			}
			//channel.testLog("in enter setting.menuLanguage = " + setting.menuLanguage);
			$("listFocus").src=mainFocus[0];
			$("listForm").style.display = "none";
			$("menuLangWords").innerHTML = menuLangWords[menuLangPos];
			//focusOn = "menu";/*把这个放在前面是为了TTS读取状态*/
			top.ttsLog("focusOn="+focusOn);
		},100);
	}
	else if(focusOn == "location")
	{
		try
		{
			
			$("listFocus").src=mainFocus[0];
			$("listForm").style.display = "none";
			locationValue = form_position_h;
			$("locationStatus").innerHTML = homeShopWords[locationValue];
			setting.location = locationValue;
            /****shopmode 2.3需求
			 * location 设置为home模式后，再判断autoStandby是否为OFF。是的话就开始计时运行9小时，否则清除计时
			 * ****/
            var autoShopmodeValue = parseInt(setting.getProperty("app.ui.autoshopmode.switch","0"));
            console.log("--hzm in doenter autoShopmodeValue is " + autoShopmodeValue);
            console.log("--hzm in doenter autoStandby is " + setting.autoStandby);
            if (locationValue == 0 && autoShopmodeValue == 1)
			{
				if (setting.autoStandby == 0)
				{
                    top.startrecord();
				}
				else
				{
                    top.cancelrecord();
				}
                menuList[demoModePosIndex].showFlag = 0;
                refreshAllMenuListShow();
			}
            else//shop/shop with demo模式，清除计时
            {
                top.cancelrecord();
            }
            /****shopmode 2.3需求 end****/
            /*
            if (setting.getProperty("ui.eu.breathing", top.ledStatusDefault) == "on")
            {
                if (setting.location == E_LOCATION_HOME)
                {
                    setting.setProperty("sita.bootup.led.work", "off");
                    setting.setProperty("sita.bootup.led.standby", "on");
                }
                else
                {
                    setting.setProperty("sita.bootup.led.work", "on");
                    setting.setProperty("sita.bootup.led.standby", "breathing");
                }
            }
            */
			console.log("setting.tvRunningMode is "+setting.tvRunningMode);
			//Prevent the unfinished boot guide to press the red button set the location after boot directly into channelplay page, actually should enter boot wizard page again.
			if(setting.tvRunningMode != 0)
			{
				setting.tvRunningMode = locationValue > 0 ? 2 : 1;
			}
			parent.checkPictureSelEnable();
			focusOn = "menu";
			if(top.appOpenFlag == 1)
			{
				lastInputSource   = channel.getLastinputSource();
				var appname = setting.getProperty("app.ui.currentApp","tbrowser.mmh");
				top.g_ulits.closeApplication(appname);
				top.scheduleApp = top.SCHEDULE_SWITCHSRC;
				return;
			}
	
			if((top.preTempPage=="media"||top.preTempPage=="homePage")&&(locationValue == 2))
			{
				top.$("operatePage").src = "";
				top.$("otherPage").src = "";
				top.resumeFocus();
				top.setFrameFocusPage("main");	
				var evt = {which:0,modifiers:0};
				evt.which=top.VK_EXIT;
				if(top.preTempPage=="media")
					top.$('main').contentWindow.keyProc(evt);
				else
					top.$('main').contentWindow.keyProcess(evt);
					
				top.$("main").onload=function(){
							setTimeout(function(){
                                top.globleHBBTVClose();
								top.jumpHotkeyPage("eSticker/eSticker.html");
								},5*1000);
							top.$("main").onload=function(){};
					}
				return;
			}			
			top.showEsticker();
		}
		catch(er)
		{
			top.g_channel.testLog(er);
		}
	}
    else if(focusOn == "autoshopmode")
    {
        $("listFocus").src=mainFocus[0];
        $("listForm").style.display = "none";
        autoShopmodeValue= form_position_h;
        setting.setProperty(AUTOSHOPMODE_SWITCH_STATE_FOR_DB,autoShopmodeValue);
        if (autoShopmodeValue == 0)
		{
			//设置为OFF后，需要复位此值
            setting.setProperty("app.ui.powerOffTimer","0");
		}
        $("autoShopmodeStatus").innerHTML = offOnWords[autoShopmodeValue];
        focusOn = "menu";
    }
    else if(focusOn == "demomode")
    {
        $("listFocus").src=mainFocus[0];
        $("listForm").style.display = "none";
        demoVideoValue = form_position_h;
        $("demomodeStatus").innerHTML = demo_videos_name[demoVideoValue];
        setting.setProperty(DEMOMODE_VALUE_FOR_DB,demoVideoValue);
        focusOn = "menu";
    }
	else if(focusOn == "hbbtvMode")
	{
		$("listFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		//if(form_position_h==0)
		//{
			hbbtvMode = form_position_h;
			$("hbbtvModeStatus").innerHTML = offOnWords[hbbtvMode];
			//menuList[cookiesPosIndex].showFlag = (hbbtvMode == 0) ? 0 : 1;
			refreshAllMenuListShow();
			setting.hbbTVMode = hbbtvMode;
			focusOn = "menu";
		//}
		//else
		//{
			//showHbbtvServiceRemind();
		//}
	}
	else if(focusOn == "noticeSource")
	{
		$("listFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		noticeSource = form_position_h;
		$("noticeSourceStatus").innerHTML = offOnWords[noticeSource];
		refreshAllMenuListShow();
		setting.setProperty("app.ui.noticeSource",noticeSource);
		focusOn = "menu";
	}
	/*
	else if(focusOn == "cookie")
	{
		$("listFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		cookie = form_position_h;
		$("cookieStatus").innerHTML = offOnWords[cookie];
		setting.hbbtvCookieMode = cookie;
		focusOn = "menu";
	}
	*/
	else if(focusOn == "tlink")
	{
		$("listFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		tLink= form_position_h;
		$("tLinkStatus").innerHTML = offOnWords[tLink];
		setting.enableTLink = tLink;
		focusOn = "menu";
	}	
	else if(focusOn == "footballMode")
	{
		footballMode = presetPositionH;
		setting.footballMode = footballMode;
		if(getSportModeType() && top.preTempPage != "media")
		{
			tcl.channel.requestMute(0);
			turnOnSportMode();
		}
		else
		{
			$("listFocus").src = mainFocus[0];
			$("footballModeStatus").innerHTML = offOnWords[footballMode];
			$("preSetBar").style.display = "none";
			parent.checkPictureSelEnable();
			parent.showPage(1);
			focusOn = "menu";
		}
	}
	else if(focusOn == "resetShop")
	{
		if(form_position_h == 0)
		{
			top.initGlobalVariable();
			top.showFactoryHotkey();
			setting.setProperty("app.ui.noticeSource","1");
			showResetShopRemind();
			$("resetForm").style.display = "none";
			if(top.g_isDownloading == 1)
			{
				top.g_isDownloading = -1;
				if(!top.g_isForceUpgrade)
				{
					top.g_setting.pauseDownloadUpdateFile();
					top.hideDownloadRing();
				}
			}
            setTimeout(function(){
                setting.restoreDefault();
				top.showMute(0);
                top.sendEvent("vod.netflix", 0xf00c);
				top.g_setting.setBootInput(11);
                //top.changeUrl("initSetup/initSetup.html");
                top.g_factory.systemReboot(0);
            },100);
            //setTimeout(function(){top.changeUrl("initSetup/initSetup.html");},4000);
        }
        else
        {
            parent.showPage(1);
            top.restartTimeout();
            $("resetForm").style.display = "none";
            focusOn = "menu";
        }
    }
    else if(focusOn == "LEDMode")
	{
		$("listFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		LEDMode = form_position_h;
		$("LEDStatus").innerHTML = LEDWords[LEDMode];
		refreshAllMenuListShow();
		//setting.setProperty("ui.eu.breathing", LEDMode?"off":"on");

        setting.setProperty("app.ui.breathing",LEDMode + "");
      //  console.log("=================" + LEDMode + "====================i");
      //  console.log("================= setting.getProperty('app.ui.breathing') : "+  setting.getProperty("app.ui.breathing", "1") + "====================i");


        if(0 == LEDMode)    //Flashing
        {
            setting.setProperty("sita.bootup.led.work", "off");
		    setting.setProperty("sita.bootup.led.standby", "breathing");
			setting.setProperty("sita.bootup.led.standbying", "on");

        }else if(1 == LEDMode)  //Normal
        {
            setting.setProperty("sita.bootup.led.work", "off");
		    setting.setProperty("sita.bootup.led.standby", "on");
			setting.setProperty("sita.bootup.led.standbying", "on");
        }else    //Off
        {
            setting.setProperty("sita.bootup.led.work", "off");
            setting.setProperty("sita.bootup.led.standby", "off");
			setting.setProperty("sita.bootup.led.standbying", "off");
        }
		focusOn = "menu";
	}
    else if(focusOn == "instantPowerOn")
    {
        $("listFocus").src=mainFocus[0];
        $("listForm").style.display = "none";
        instantPowerOn = form_position_h;
        setting.suspendStatus = instantPowerOn;
        $("instantPowerOnStatus").innerHTML = offOnWords[instantPowerOn];
        refreshAllMenuListShow();
        focusOn = "menu";
    }
}
function toBack()
{
	if(focusOn == "menu")
	{
        top.doEleScrForNoOption(listFirstSpans, -1, -1);
		parent.returnPage(1);
	}
	else if(focusOn == "resetShop")
	{
		$("listFocus").src=mainFocus[0];
		top.restartTimeout();
		$("listForm").style.display = "none";
		$("resetForm").style.display = "none";
		$("passForm").style.display = "none";
		parent.showPage(1);
		focusOn = "menu";
	}
	else if(focusOn == "showHbbtvRemind")
	{
		clearTimeout(showHbbtvRemindTimer);
		$("remind").style.display = "none";
		parent.showPage(1);
		top.restartTimeout();
		focusOn = "menu";
	}
	else if(focusOn == "footballMode")
	{
		setting.previewFootballMode(footballMode);
		$("preSetBar").style.display = "none";
		parent.showPage(1);
		focusOn = "menu";
	}
	else if(focusOn=="password")
	{
		$("passForm").style.display = "none";
		parent.showPage(1);
		focusOn = "menu";
	}
	else
	{
		$("listFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		$("passForm").style.display = "none";
		$("resetForm").style.display = "none";
		parent.showPage(1);
		focusOn = "menu";
	}
}
function toLeft()
{
	if(focusOn == "password")
	{
		if(passwordLength < 1) return
		else
		{
			password = password.substring(0,(passwordLength-1));
			$('passContent').innerHTML = $('passContent').innerHTML.substring(0,(passwordLength-1))+"_";
			passwordLength--;
		}
	}
	else if(focusOn == "resetShop")
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("resetFocus").style.left = DIALOG_BUTTON_START + DIALOG_BUTTON_STEP*form_position_h + "px";
	}
	else if(focusOn == "footballMode")
	{
		presetPositionH = presetPositionH ? 0 : 1;
		setting.previewFootballMode(presetPositionH);
		$("preSetSelectFocus").style.left = 345 + presetPositionH * PRESET_FOCUS_WIDTH + "px";
		top.doElementScroll(otherPreSetSpans, presetPositionH);
	}
	else
	{
		toBack();
	}
}
function toRight()
{
	if(focusOn == "resetShop")
	{
		form_position_h = form_position_h ? 0 : 1;
		$("resetFocus").style.left = DIALOG_BUTTON_START + DIALOG_BUTTON_STEP*form_position_h + "px";
	}
	else if(focusOn == "footballMode")
	{
		presetPositionH = presetPositionH ? 0 : 1;
		setting.previewFootballMode(presetPositionH);
		$("preSetSelectFocus").style.left = 345 + presetPositionH * PRESET_FOCUS_WIDTH + "px";
		top.doElementScroll(otherPreSetSpans, presetPositionH);
	}
	else
	{
		doEnter();
	}
}

function doE_Manual()
{
	if((menuLock) && (hotelEnable) && (lockFlag))
	{
		initPassForm();
	}
	else
	{
		parent.popWindow(2,"eManual/eManualFirst.html?0");
	}
}
function doCountryLA()
{
	form_position_h = 0;
	var i=0;
	if(countryPos > 4)
	{
		form_position_h = 4;
		countryOffset = countryPos - form_position_h;
	}
	else
	{
		countryOffset=0;
		form_position_h = countryPos;
	}
	$("listFocus").src=mainFocus[1];
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 980;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,countryListWords,32,form_position_h,countryOffset);
	focusOn = "country";
				
}
function initCountryList()
{
	if(top.isCAFlag){
		countryIndexList = top.mlmCountryIndexCA;//CA重新初始化国家列表
		countryListWords = new Array(countryIndexList.length);
	}
   for(var i = 0; i < countryIndexList.length; i++)
    {
     countryListWords[i] = top.all_country[countryIndexList[i]];
    }
}

function doArea()
{
    parent.jumpPage(2,"systemSetting/area.html");
}

function doMenu_language()
{
	parent.jumpPage(2,"systemSetting/menuLanguage.html");
}
function doMenuLanguage()
{
    $("listFocus").src=mainFocus[1]; 
	form_position_h = menuLangPos;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 980;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,menuLangWords,menuLangIndex.length,form_position_h,0);
	focusOn = "menulang";
}

function doTimer()
{
	parent.jumpPage(2,"systemSetting/timer.html");
}
function doLock()
{
	initPassForm();
	focusOn = "password";
}
function doInput_settings()
{
	parent.jumpPage(2,"systemSetting/inputSetting.html");
}
function doSoftware_update()
{
	parent.jumpPage(2,"systemSetting/softwareUpdate.html");
}
function doLocation()
{
	$("listFocus").src=mainFocus[1];//style.display = "none";
	form_position_h = locationValue;
	
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 980;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,homeShopWords,3,form_position_h,0);
	focusOn = "location";
}
function doAuto_shopmode()
{
    $("listFocus").src=mainFocus[1];
    form_position_h = autoShopmodeValue;
    var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
    var leftOffset = 980;
    top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
    focusOn = "autoshopmode";
}
function doDemo_mode()
{
    $("listFocus").src=mainFocus[1];
    form_position_h = demoVideoValue;
    var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
    var leftOffset = 980;
    top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,demo_videos_name,demo_videos_name.length,form_position_h,0);
    focusOn = "demomode";
}
function doHbbTV_mode()
{
	$("listFocus").src=mainFocus[1];
	form_position_h = hbbtvMode;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 980;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
	focusOn = "hbbtvMode";
}
/*
function doCookies()
{
	$("listFocus").src=mainFocus[1];
	form_position_h = cookie;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 980;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
	focusOn = "cookie";
}
*/
function doCommon_interface()
{
	parent.jumpPage(2,"systemSetting/ciList.html");
}
function doAdvanced_setting()
{
	parent.jumpPage(2,"systemSetting/advancedSetting.html");
}
function doTLink()
{
	$("listFocus").src=mainFocus[1];
	form_position_h =tLink;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 980;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
	focusOn = "tlink";
}
function doNoticeSource()
{
	$("listFocus").src=mainFocus[1];
	form_position_h = parseInt(setting.getProperty("app.ui.noticeSource","1"));
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 980;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
	focusOn = "noticeSource";
}

function doInstantPowerOn()
{
    $("listFocus").src=mainFocus[1];
    form_position_h = instantPowerOn;
    if (list_position_h >= MAX_COUNT_ONE_PAGE)
        var topOffset = SUB_MENU_START + SUB_MENU_STEP*(MAX_COUNT_ONE_PAGE-1) - 10;
    else
    	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
    var leftOffset = 980;
    top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
    focusOn = "instantPowerOn";
}

function doFootballMode()
{
	showPersetSelect(2);
	$("preSetOption").innerHTML = systemSetTitleWords[footballModePosIndex];
	var spans = $("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i = 0; i < offOnWords.length; i++)
	{
		spans[i + 1].innerHTML = offOnWords[i];
	}
	presetPositionH = footballMode;
	top.doElementScroll(otherPreSetSpans, presetPositionH);
	$("preSetSelectFocus").style.left = 345 + presetPositionH * PRESET_FOCUS_WIDTH + "px";
	$("currentOption").style.left = 360 + presetPositionH * PRESET_FOCUS_WIDTH + "px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(1);
	$("preSetBar").style.display = "block"
	focusOn = "footballMode";
}

function doClosedCaption()
{
    parent.jumpPage(2,"systemSetting/CCMenu.html");
}

function doReset_shop()
{
	initPassForm();
	focusOn = "password";
}

function doLED_Indicator()
{
    $("listFocus").src=mainFocus[1];
	form_position_h = LEDMode;
    if (list_position_h >= MAX_COUNT_ONE_PAGE)
        var topOffset = SUB_MENU_START + SUB_MENU_STEP*(MAX_COUNT_ONE_PAGE-1) - 10;
    else
        var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 980;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,LEDWords,3,form_position_h,0);
	focusOn = "LEDMode";
}

function showPersetSelect(optionMax)//用来显示或者隐藏preset选项
{
	otherPreSetSpans = $("preSetBar").getElementsByTagName("span");
	switch(optionMax)
	{
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
        case 6:
			$("preSetBar").style.left = parseInt((SCREEN_WIDTH - PRE_BAR_OPTION_WIDTH - optionMax * PRE_BAR_STEP) / 2) + "px";
			break;
		default:
			$("preSetBar").style.left = parseInt((SCREEN_WIDTH - PRE_BAR_OPTION_WIDTH - 6 * PRE_BAR_STEP) / 2) + "px";
			break;
	}
	for(var i = 0;i < 6 && i < optionMax; i++)
	{
		otherPreSetSpans[i + 1].style.display = "block";
	}
	if(optionMax < 6)
	{
		for(var i = optionMax; i < otherPreSetSpans.length - 1; i++)
		{
			otherPreSetSpans[i + 1].style.display = "none";
		}
		$("preSetBar").style.width = PRE_BAR_OPTION_WIDTH + optionMax * PRE_BAR_STEP + "px";
	}
	else
	{
		$("preSetBar").style.width = PRE_BAR_OPTION_WIDTH + 6 * PRE_BAR_STEP + "px";
	}
}

function findFunction(postion)
{
	var num=-1;
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag)
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
function findName(postion)
{
	var num = -1;
	for(var i = 0; i < menuList.length; i++)
	{
		if(menuList[i].showFlag)
		{
			num++;
		}
		if(num == postion)
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
function findMaxPosition()
{
	var num = -1;
	for(var i = 0; i < menuList.length; i++)
	{
		if(menuList[i].showFlag)
		{
			num++;
		}
	}
	return num;
}
function findPositionOfTagIndex(index)
{
	var num=-1;
	for(var i = 0;(i <= index) && (i < menuList.length);i++)
	{
		if(menuList[i].showFlag)
		{
			num++;
		}
	}
	return num;
}
function refreshFocusOfMenuList()
{
	if (list_position_h >=MAX_COUNT_ONE_PAGE)
	{
		var tmp_position_h = list_position_h - MAX_COUNT_ONE_PAGE + 1;
        $("menuUl").style.top = -tmp_position_h * LIST_BOX_HEIGHT + "px";
	}
	else
	{
        $("listFocus").style.top = SUB_MENU_START + LIST_BOX_HEIGHT * list_position_h + "px";
        $("menuUl").style.top = -focus_off_set * LIST_BOX_HEIGHT + "px";
	}
}

/*
 描述：menu language切换获取新的显示数据
*/
function refreshUIWhenLanguageChange()
{
    top.initTextDirection(window);
	//systemSetTitleWords 	= top.sysOptions;
	offOnWords				= top.offOn;
	homeShopWords 			= top.initLocations;
	okCancelWords			= top.okCancel;
	psswordWords			= top.others[2];
	passIncorrectWords		= top.passError;
	resetRemindWords		= top.sysResetDes;
	LEDWords                = top.LEDStatus;
	resetShopRemind         = top.resetShopRemind;
	sysPromptCon            = [top.prompts[25],top.prompts[26],top.prompts[27],top.prompts[28],top.prompts[31],top.prompts[32]];
	//Is a kind of special circumstances, when switching language needs to be updated to the array, or the data is still not the last time the contents of the language
	systemSetTitleWords 	= [top.sysOptions[0], top.chScanOptions[0],top.sysOptions[15],top.sysOptions[1], top.sysOptions[1], top.sysOptions[2], top.sysOptions[3], 
							   top.sysOptions[4], top.sysOptions[5], top.sysOptions[6], top.sysOptions[14],top.sysOptions[16],top.sysOptions[7],
							   /*top.sysOptions[8],*/ top.sysOptions[9], top.sysOptions[10],top.sysAdOptions[2],top.settingNoticeSourceName, top.footballModeName,
							   top.ClosedcaptionName,top.sysOptions[12], top.sysOptions[13], top.sysOptions[11]];
	for(var i = 0; i < menuList.length; i++)
	{
		sndMenuRightSpanList[i].innerHTML = systemSetTitleWords[i];
	}
	//var sndMenuRightImgList = $("sndMenuRight").getElementsByTagName("img");
	
	$("locationStatus").innerHTML = homeShopWords[locationValue];
	$("hbbtvModeStatus").innerHTML = offOnWords[hbbtvMode];
	//$("cookieStatus").innerHTML = offOnWords[cookie];
	$("LEDStatus").innerHTML = LEDWords[LEDMode];
	$("footballModeStatus").innerHTML = offOnWords[footballMode];
    $("noticeSourceStatus").innerHTML = offOnWords[noticeSource];
    $("instantPowerOnStatus").innerHTML = offOnWords[instantPowerOn];
	$("tLinkStatus").innerHTML = offOnWords[tLink];
    initCountryList();
    $("countryWords").innerHTML = countryListWords[countryPos];
}

/*
描述：password初始化
参数：
全局变量：
*/
function initPassForm()
{
	var passFormSpanList = $("passForm").getElementsByTagName("span");
	passFormSpanList[0].innerHTML = psswordWords;
	passFormSpanList[1].innerHTML = psswordWords;
	password = "";
	$("passContent").innerHTML = password + "_";
	$("passRemind").innerHTML = "";
	$("passForm").style.display = "block";

	focusOn="password";
	parent.hiddenPage(1);
	top.showDialogPosition($("passForm"),800,300,1920,1080,0,0);
}

function checkFocusOffSet()
{
	if(list_position_h >= MAX_COUNT_ONE_PAGE)
	{
		focus_off_set = MAX_COUNT_ONE_PAGE - list_position_h;
		list_position_h = list_position_h - focus_off_set;
	}
}

/*
描述：password弹出框出现时输入数字
参数：
全局变量：passwordLength;password;focusOn
*/
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
		 if(password != setting.password &&  password != top.g_superPassword)
		{
			passwordLength = 0;
			$('passRemind').innerHTML = passIncorrectWords;
			password = "";
			$("passContent").innerHTML = password + "_";
			ttsRead();
		}
		else
		{
			$("passForm").style.display = "none";
			if(top.virtualRemoteState == 1)
			{
				//隐藏虚拟遥控器--lqt
				top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
			}
			if(list_position_h + focus_off_set == findPosition("Lock"))//lock
			{
				focusOn = "menu";
				parent.showPage(1);
				parent.jumpPage(2,"systemSetting/lock.html");
				ttsRead();
			}
			else if(list_position_h + focus_off_set == findPosition("Reset_shop"))
			{
				initResetShop();
				focusOn = "resetShop";
				ttsRead();
			}
			else if((menuLock) && (hotelEnable) && (lockFlag))
			{
				focusOn = "menu";
				menuLock = 0;
				hotelEnable = 0;
				lockFlag = 0;
				init();
				parent.showPage(1);
			}
		}
	}
}

/*
描述：初始化reset确认对话框
参数：
全局变量：form_position_h
*/
function initResetShop()
{
	//channel.testLog("in initResetShop");
	var resetFormSpanList = $("resetForm").getElementsByTagName("span");
	resetFormSpanList[0].innerHTML = systemSetTitleWords[21];
	resetFormSpanList[1].innerHTML = resetRemindWords;
	resetFormSpanList[2].innerHTML = okCancelWords[0];
	resetFormSpanList[3].innerHTML = okCancelWords[1];
	form_position_h = 1;
	$("resetFocus").style.left = DIALOG_BUTTON_START + DIALOG_BUTTON_STEP*form_position_h + "px";
	$("resetForm").style.display = "block";
	
	top.showDialogPosition($("resetForm"),800,300,1920,1080,0,0);
	
	top.stopTimeout();
}

function showFocus()//显示主页面的焦点
{
	timeoutInit();
    top.doEleScrForNoOption(listFirstSpans, findRealPosition(list_position_h)+focus_off_set, -1);
	$("listFocus").style.display = "block";
}
function hiddenFocus()//隐藏主页面的焦点
{
	$("listFocus").style.display = "none";
}
function hiddenPromptCont()//隐藏提示语
{
	$("promptWin").style.display="none";
}

function showPromptImg()
{
	$("promptWin").style.display = "block";
    $("promptWin2").style.display="none"
	var height 	= $("promptContent").offsetHeight;
	var img 	= $("promptWin").getElementsByTagName("img");
	var div 	= $("promptWin").getElementsByTagName("div");
	var lineCount = parseInt($("promptContent").offsetHeight / PROMPT_LINE_HEIGHT);
	console.log("--hzm in showPromptImg list_position_h = " + list_position_h + "  lineCount = " + lineCount);
    var list_position_h_1 = list_position_h > MAX_COUNT_ONE_PAGE - 1 ? MAX_COUNT_ONE_PAGE - 1 : list_position_h;
	switch(lineCount)
	{
		case 0:
			img[0].src = sysPromptImg[0];
			$("promptContent").style.top = TWO_LINE_TOP + "px";
			img[0].style.height = "110px";
			div[0].style.height = "102px";
			$("promptWin").style.top = 80 + list_position_h_1 * LIST_BOX_HEIGHT + "px";
			break;
		case 1:
			img[0].src = sysPromptImg[0];
			$("promptContent").style.top = ONE_LINE_TOP + "px";
			img[0].style.height = "110px";
			div[0].style.height = "102px";
			$("promptWin").style.top = 80 + list_position_h_1 * LIST_BOX_HEIGHT + "px";
			break;
		case 2:
			img[0].src = sysPromptImg[0];
			$("promptContent").style.top = TWO_LINE_TOP + "px";
			img[0].style.height = "110px";
			div[0].style.height = "102px";
			$("promptWin").style.top = 80 + list_position_h_1 * LIST_BOX_HEIGHT + "px";
			break;
		case 3:
			img[0].src = sysPromptImg[1];
			$("promptContent").style.top = THREE_LINE_TOP + "px";
			img[0].style.height = "160px";
			div[0].style.height = "152px";
			$("promptWin").style.top = 50 + list_position_h_1 * LIST_BOX_HEIGHT + "px";
			break;
		case 4:
			img[0].src = sysPromptImg[2];
			$("promptContent").style.top = FOUR_LINE_TOP + "px";
			img[0].style.height = "220px";
			div[0].style.height = "212px";
			$("promptWin").style.top = 20 + list_position_h_1 * LIST_BOX_HEIGHT + "px";
			break;
		case 5:
			img[0].src = sysPromptImg[3];
			$("promptContent").style.top = FIVE_LINE_TOP + "px";
			img[0].style.height = "280px";
			div[0].style.height = "272px";
			$("promptWin").style.top = -10 + list_position_h_1 * LIST_BOX_HEIGHT + "px";
			break;
		case 6:
			img[0].src = sysPromptImg[4];
			$("promptContent").style.top = SIX_LINE_TOP + "px";
			img[0].style.height = "340px";
			div[0].style.height = "332px";
			$("promptWin").style.top = -30 + list_position_h_1 * LIST_BOX_HEIGHT + "px";
			break;
	}
}

var showPromptContTimer = 0;

function showPromptCont()//显示提示语内容函数
{
	if(focusOn == "menu" && parent.currentShowMenu == 1)
	{
		clearTimeout(showPromptContTimer);
		showPromptContTimer = setTimeout(function(){$("promptWin").style.display = "none";$("promptWin2").style.display="none"}, 5000);
		var name = findName(list_position_h + focus_off_set);
		if(name == "Lock")
		{
			$("promptContent").innerHTML = sysPromptCon[0];
			showPromptImg();
		}
		else if(name == "Input_settings")
		{
			$("promptContent").innerHTML = sysPromptCon[1];
			showPromptImg();
		}
		else if(name == "Location")
		{
			$("promptContent").innerHTML = sysPromptCon[2];
			showPromptImg();
		}
        else if(name == "T-Link")
        {
            $("promptContent").innerHTML = sysPromptCon[5];
            showPromptImg();
        }
        else if(name == "footballmode")
        {
            $("promptWin").style.display = "none";
            $("promptWin2").style.display="block";
            $("promptWin2").style.top = -340 + list_position_h * LIST_BOX_HEIGHT + "px";
            $("promptContent2").innerHTML = sysPromptCon[4];
        }
		else if(name == "Reset_shop")
		{
			$("promptContent").innerHTML = sysPromptCon[3];
			showPromptImg();
		}
		else
		{
			$("promptWin").style.display = "none";
            $("promptWin2").style.display="none"
		}
	}
	else
	{
		$("promptWin").style.display = "none";
        $("promptWin2").style.display="none"
	}
	
}
function initAllMenuList()
{
	if((menuLock) && (hotelEnable) && (lockFlag))
	{
		sndMenuRightSpanList[0].innerHTML = lockWords;
		sndMenuRightLiList[0].getElementsByTagName("img")[0].style.display = "block";
        sndMenuRightLiList[0].getElementsByTagName("img")[0].src="images/arrow/focus_R-Focus.png";
		//menuList[eManualPosIndex].showFlag = 1;
		for(var i = 1;i < menuList.length;i++)
		{
			menuList[i].showFlag = 0;
		}
	}
	else
	{
		if(top.isLAFlag)
		{
			menuLangIndex     = top.mlmLangIndexLA;   //拉美3语言（英语，西班牙语，葡萄牙语）对应的中间件编号
			menuLangWords     	= top.sysMenuLangLA;
		}
		else if(top.isNAFlag)
		{
			menuLangIndex     = top.mlmLangIndexNA;   //北美3语言（英语，西班牙语，法语）对应的中间件编号
			menuLangWords     	= top.sysMenuLangNA;
		}
		if(top.isCBFlag)
		{
			menuLangIndex     = top.mlmLangIndexCO;   //北美3语言（英语，西班牙语，法语）对应的中间件编号
			menuLangWords     	= top.sysMenuLangCO;
		
		}
		inputSource = channel.inputSource;
		for(var i = 1; i < menuList.length;i++)
		{
			menuList[i].showFlag = 1;
		}
		
		for(var i = 0; i < menuList.length; i++)
		{
			sndMenuRightSpanList[i].innerHTML = systemSetTitleWords[i];
		}
		var index = channel.systemCountry;
   		for (var i=0; i<countryIndexList.length; i++)
    	{
        	if (countryIndexList[i] == index)
        	{
            	countryPos = i;
            	break;
        	}
    	}
		if(i == countryIndexList.length)//find no country
		{
			countryPos = i - 1;
		}
		channel.testLog("zenglm country pos is "+countryPos);
		$("countryWords").innerHTML = countryListWords[countryPos];
		channel.testLog("zenglm country words is "+countryListWords[countryPos]);
		var countryView = setting.getProperty("ro.sita.model.Apps.SYSTEM_SETTING.COUNTRY", "TRUE");
		if(countryView == "TRUE")
		{
			menuList[countryLaPosIndex].showFlag = 1;
		}
		else
		{
			menuList[countryLaPosIndex].showFlag = 0;
		}
		var langIndex = setting.menuLanguage;
    	for (var i = 0; i < menuLangIndex.length; i++)
    	{
       	 	if (menuLangIndex[i] == langIndex)
        	{
            	menuLangPos = i;
        	}
    	}
		$("menuLangWords").innerHTML = menuLangWords[menuLangPos];
		
		locationValue = setting.location;
		$("locationStatus").innerHTML = homeShopWords[locationValue];
        autoShopmodeValue = setting.getProperty(AUTOSHOPMODE_SWITCH_STATE_FOR_DB,"0");
        $("autoShopmodeStatus").innerHTML = offOnWords[autoShopmodeValue];

        demoVideoValue = setting.getProperty(DEMOMODE_VALUE_FOR_DB,"0");
        console.log("--hzm demo_videos_name["+demoVideoValue+"] = " + demo_videos_name[demoVideoValue]);
        $("demomodeStatus").innerHTML = demo_videos_name[demoVideoValue];

		hbbtvMode = setting.hbbTVMode;//先去掉step 1
		$("hbbtvModeStatus").innerHTML = offOnWords[hbbtvMode];
		//menuList[cookiesPosIndex].showFlag = hbbtvMode ? 1 : 0;
		//cookie = setting.hbbtvCookieMode;
		//$("cookieStatus").innerHTML = offOnWords[cookie];

		noticeSource = parseInt(setting.getProperty("app.ui.noticeSource","1"));//先去掉step 1
		$("noticeSourceStatus").innerHTML = offOnWords[noticeSource];
		//add for football mode
		footballMode = setting.footballMode;
		$("footballModeStatus").innerHTML = offOnWords[footballMode];
		
		tLink = setting.enableTLink;	
		$("tLinkStatus").innerHTML = offOnWords[tLink];
		
        LEDMode = parseInt(setting.getProperty("app.ui.breathing", "1"));
       // console.log("======================= LEDMode : " + LEDMode + "======================");
        $("LEDStatus").innerHTML = LEDWords[LEDMode];

        instantPowerOn = setting.suspendStatus;
        $("instantPowerOnStatus").innerHTML = offOnWords[instantPowerOn];

        if (locationValue == 0 || demo_videos_name == "")
        {
            menuList[demoModePosIndex].showFlag = 0;
        }
		//hide common interface for AU
		if(top.isAUFlag)
		{
			menuList[commonInterfacePosIndex].showFlag = 0;
		}
		//不可用状态显示
		if(inputSource != 1 || (top.supportCI == 0 && top.supportCII == 0))
		{
			menuList[commonInterfacePosIndex].showFlag = 0;
		}
		var str = window.location.search.substring(1);
		if(str == "backFromCiList")
		{
			parent.showPageFlag(1);
			//list_position_h = hbbtvMode ? cookiesPosIndex : hbbtvModePosIndex;
			list_position_h = 0;
			focus_off_set = 0;
			checkFocusOffSet();
			$("sndMenuLeft").style.left = "0px";
			//$("sndMenuLeft").style.display = "none";
			//channel.testLog("in system set backFromCiList 1");
			parent.$("pageFlagShadow").style.left="306px";
			//channel.testLog("in system set backFromCiList 2");
			$("sndMenuRight").style.left = "40px";
			$("sndMenuRight").style.display = "block";
			//channel.testLog("in systemSet list_position_h = " + list_position_h);
			parent.showSubMenu1Focus();
		}
		else
		{
			list_position_h = 0;
			focus_off_set = 0;
		}
		//$("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP * list_position_h + "px";
        menuList[eManualPosIndex].showFlag = 0;   //移到support
        menuList[softwareUpdatePosIndex].showFlag = 0;   //移到support
        menuList[hbbtvModePosIndex].showFlag = 0;   //移到smart TV
        menuList[advancedSettingPosIndex].showFlag = 0;   //移到smart TV
		if(top.isLAFlag)
		{
			menuList[menuLangPosIndex].showFlag = 0;
			menuList[commonInterfacePosIndex].showFlag = 0;
			if(top.isCBFlag)
			{
				menuList[countryLaPosIndex].showFlag = 0;
			}
            if(channel.systemCountry == 35)//菲律宾 EWBS
            {
                menuList[areaPosIndex].showFlag = 1;
            }else
            {
                menuList[areaPosIndex].showFlag = 0;
            }
		}
		else if(top.isNAFlag)
		{
			if(top.isCAFlag)
				menuList[countryLaPosIndex].showFlag = 1;
			else
				menuList[countryLaPosIndex].showFlag = 0;
			menuList[menuLangPosIndex].showFlag = 0;
            menuList[commonInterfacePosIndex].showFlag = 0;
            menuList[areaPosIndex].showFlag = 0;
			//menuList[closedcaptionPosIndex].showFlag = 0;
		}
		else
		{
			menuList[countryLaPosIndex].showFlag = 0;
			menuList[menuLangLAPosIndex].showFlag = 0;
			menuList[closedcaptionPosIndex].showFlag = 0;
            menuList[areaPosIndex].showFlag = 0;
		}

        //在某些页面下弹出全局setting，需要隐藏部分项
        if(1 == top.appOpenFlag || "media" == top.preTempPage || "homePage" == top.preTempPage)
        {
            menuList[menuLangPosIndex].showFlag = 0;
            menuList[menuLangLAPosIndex].showFlag = 0;
        }

        if(!top.supportAutoSource)
        {
            menuList[noticeSourceSettingPosIndex].showFlag = 0;
        }
        if(!top.supportInstantPowerOn)
        {
            menuList[instantPowerOnPosIndex].showFlag = 0;
        }
		if(top.recordStatusFlag == 1)
		{	
			menuList[lockPosIndex].showFlag = 0;
			menuList[locationPosIndex].showFlag = 0;
		}	
	}

	refreshAllMenuListShow();
	refreshFocusOfMenuList();
}

function refreshAllMenuListShow()
{
	displayListCount = 0;
	for(var i = 0; i < menuList.length; i++)
	{
		displayListCount += menuList[i].showFlag ? 1 : 0;
		sndMenuRightLiList[i].style.display = menuList[i].showFlag ? "block" : "none";
	}
	if(displayListCount <= MAX_COUNT_ONE_PAGE)
	{
		$("listUpRemind").style.display = 'none';
		$("listDownRemind").style.display = 'none';
	}
	else
	{
		$("listUpRemind").style.display = 'block';
		$("listDownRemind").style.display = 'block';
	}
}

var listFormLiList;
var sndMenuRightLiList;
var sndMenuRightSpanList;
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
	}
}

function init()
{
	console.log("==> init start <==");
    top.initTextDirection(window);
	initSetRegion();
	initOptionListIndex();
	console.log("==> init start call tos <==");
	menuLock = factory.menuLock;
	hotelEnable = factory.hotelEnable;
    var demoVideoPath = top.g_setting.getProperty("ro.sita.cfg.app.Esticker_video_path","NULL");
    if(demoVideoPath != "NULL")//有内置视频目录
	{
        var playList = multimedia.getMediaFileList(0, 2, demoVideoPath, 0, -1);
        if (playList.length > 0)//有目录有视频
		{
            for (var i=0;i<playList.length;i++)
            {
                demo_videos_name[i] = playList[i].name;
                console.log("--in init get demo_videos_name["+i+"] = " +　 demo_videos_name[i]);
            }
		}
        else//有目录无视频
            demo_videos_name = "";
	}
	else//无内置视频目录
	{
        demo_videos_name = "";
	}
	sndMenuRightSpanList = $("sndMenuRight").getElementsByTagName("span");
	sndMenuRightLiList = $("sndMenuRight").getElementsByTagName("li");
	listFormLiList = $("listForm").getElementsByTagName("li");
    listFirstSpans = $("sndMenuRight").getElementsByClassName("listFirstProperty");
	initCountryList();
	initAllMenuList();
	
	/*
	//channel.testLog("in systemSet top.g_nextHtmlPage = " + top.g_nextHtmlPage);
	//选择menu language后刷新页面适配多语言
	if(top.g_nextHtmlPage == "menuLanguage.html")
	{
		$("listFocus").style.display="block";
		list_position_h = 0;
		$("listFocus").style.top=SUB_MENU_START+list_position_h*SUB_MENU_STEP+"px";
		hiddenPromptCont();
		$("sndMenuRight").style.display = "none";
		parent.$("pageFlagShadow").style.left="288px";
		
		//需要加上这一句话，这是对menuLanguage.html进入的特殊处理。因为从menuLanguage.html
		//中返回需要再次调用到该页面的init函数来刷新该页面，如果不加上则会出现页面部分不能显示
		top.g_nextHtmlPage = "";
	}
	else
	{
		$("sndMenuRight").style.display = "block";
	}*/
	addMouseListener();
    top.doEleScrForNoOption(listFirstSpans, list_position_h, 0);
	console.log("==> init end <==");
}

function showHbbtvServiceRemind()
{
	clearTimeout(showHbbtvRemindTimer);
	$("remind").style.display = "block";
	var span = $("remind").getElementsByTagName("span");
	span[0].innerHTML = top.hbbtvServiceRemind;
	showHbbtvRemindTimer = setTimeout(function(){
		$("remind").style.display = "none";
		parent.showPage(1);
		top.restartTimeout();
		focusOn = "menu";
		},20*1000);
	top.showDialogPosition($("remind"),800,240,1920,1080,0,0);
	parent.hiddenPage(1);
	top.stopTimeout();
	focusOn = "showHbbtvRemind";
}

function showResetShopRemind()
{
	$("remind").style.display = "block";
	var span = $("remind").getElementsByTagName("span");
	span[0].innerHTML = resetShopRemind;
	top.stopTimeout();
	parent.hiddenPage(1);
	top.showDialogPosition($("remind"),800,240,1920,1080,0,0);
	focusOn = "showResetShopRemind";
}
function findRealPosition(postion)
{
    var num = -1;
    for (var i = 0; i < menuList.length; i++)
    {
        if (menuList[i].showFlag == 1)
        {
            num++;
        }
        if (num == postion)
        {
            return i;
        }
    }
}
function findLastName()
{
    for (var i = menuList.length - 1; i >= 0; i--)
    {
        if (menuList[i].showFlag == 1)
        {
            return menuList[i].name;
        }
    }
}
function findFirstName()
{
    for (var i = 0; i < menuList.length; i++)
    {
        if (menuList[i].showFlag == 1)
        {
            return menuList[i].name;
        }
    }
}

function doOffsetMenuList(postion)
{
	if(postion >= MAX_COUNT_ONE_PAGE)
	{
		offsetPosition = postion - MAX_COUNT_ONE_PAGE + 1;
		$("menuUl").style.top= - (postion - MAX_COUNT_ONE_PAGE + 1) * 70+"px";
		$("listFocus").style.top = SUB_MENU_START + (MAX_COUNT_ONE_PAGE - 1) * SUB_MENU_STEP + "px";
	}
	else if (postion == 11 && focus_off_set >= 1)
	{
        $("menuUl").style.top= -focus_off_set * 70+"px";
        $("listFocus").style.top = SUB_MENU_START + (MAX_COUNT_ONE_PAGE - 1) * SUB_MENU_STEP + "px";
	}
	else
	{
		offsetPosition=0;
		$("menuUl").style.top = 0 + "px";
		$("listFocus").style.top = SUB_MENU_START + postion * SUB_MENU_STEP + "px";
	}
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	
	for(var i = 0; i < menuList.length; i++)
	{
		sndMenuRightLiList[i].setAttribute("newAttr",i);
		sndMenuRightLiList[i].onmousedown = function(evt){
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
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "menu"){
						list_position_h = findPosition(menuList[parseInt(this.getAttribute("newAttr"))].name);
						checkFocusOffSet();
						$("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP * list_position_h + "px";
						doEnter();
						showPromptCont();
					}
				}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}

	var clickSpans = $("preSetBar").getElementsByClassName("preSetValue");//picPreset[pictureMode];
	for(var i = 0; i < clickSpans.length; i++)
	{
		clickSpans[i].setAttribute("newAttr", i);
		clickSpans[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0)
			{//left key
				if(focusOn == "footballMode")
				{
					presetPositionH = parseInt(this.getAttribute("newAttr"));
					$("preSetSelectFocus").style.left = 345 + presetPositionH * PRESET_FOCUS_WIDTH + "px";
					top.doElementScroll(otherPreSetSpans, presetPositionH);
					footballMode = presetPositionH;
					setting.footballMode = footballMode;
					$("listFocus").src = mainFocus[0];
					$("footballModeStatus").innerHTML = offOnWords[footballMode];
					$("preSetBar").style.display = "none";
					parent.checkPictureSelEnable();
					parent.showPage(1);
					focusOn = "menu";
				}
			}
		}
	}
	
	for(var i = 0; i < 3; i++)
	{
		listFormLiList[i].setAttribute("newAttr",i);
		listFormLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn != "menu"){
					if((menuLock) && (hotelEnable) && (lockFlag))
					{
					}
					else
					{
						form_position_h = parseInt(this.getAttribute("newAttr"));
						$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
						doEnter();
						showPromptCont();
					}
				}
			}
		}
	}
	
	var resetButton = $("resetForm").getElementsByClassName("dialogButton");
	resetButton[0].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "resetShop"){
						form_position_h = 0;
						doEnter();
						showPromptCont();
				}
			}
		}
	resetButton[1].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "resetShop"){
						form_position_h = 1;
						doEnter();
						showPromptCont();
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

var lastFocusName;
var lastFocusType;
function ttsRead()
{
	if(0 == top.g_setting.ttsSwitch)
	{
		top.ttsLog("ttsSwitch is off");
		return;
	}
	top.ttsLog("focusOn=" + focusOn);
	top.ttsLog("list_position_h=" + list_position_h);
	top.ttsLog("focus_off_set=" + focus_off_set);
	top.ttsLog("parent.currentShowMenu=" + parent.currentShowMenu);
	//$("listForm").style.display = "none";
	top.ttsLog("$('listForm').style.display =" + $("listForm").style.display);
	var ttsStr = "";
	var currentStatus = "";
	var currentName = findName(list_position_h);
	var ttsName = "";

	function isSelected(selectedFlag)
	{
		top.ttsLog("selectedFlag=" + selectedFlag);
		if(selectedFlag)
		{
			currentStatus = currentStatus + ", selected";
		}
		else
		{
			currentStatus = currentStatus + ", not selected";
		}
	}

	if(("menu" == focusOn) && (1 == parent.currentShowMenu))
	{
		switch(currentName)
		{
			case "E_Manual":
				ttsName = systemSetTitleWords[0] + ",";
				currentStatus = "";
				break;
			case "Country":
				ttsName = systemSetTitleWords[1] + ",";
				currentStatus = countryListWords[countryOffset];
				break;
			case "Menu_language":
				ttsName = systemSetTitleWords[2] + ",";
				currentStatus = "";
				break;
			case "MenuLanguage":
				ttsName = systemSetTitleWords[2] + ",";
				currentStatus = menuLangWords[menuLangPos];
				break;
			case "Timer":
				ttsName = systemSetTitleWords[4] + ",";
				currentStatus = "";
				break;
			case "Lock":
				ttsName = systemSetTitleWords[5] + ",";
				currentStatus = "";
				break;
			case "Input_settings":
				ttsName = systemSetTitleWords[6] + ",";
				currentStatus = "";
				break;
			case "Software_update":
				ttsName = systemSetTitleWords[7] + ",";
				currentStatus = "";
				break;
			case "Location":
				ttsName = systemSetTitleWords[8] + ",";
				currentStatus = homeShopWords[locationValue];
				break;
			case "HbbTV_mode":
				ttsName = systemSetTitleWords[9] + ",";
				currentStatus = offOnWords[hbbtvMode];
				break;
			case "Common_interface":
				ttsName = systemSetTitleWords[10] + ",";
				currentStatus = "";
				break;
			case "Advanced_setting":
				ttsName = systemSetTitleWords[11] + ",";
				currentStatus = "";
				break;
			case "T-Link":
				ttsName = systemSetTitleWords[12] + ",";
				currentStatus = offOnWords[tLink];
				break;
			case "noticeSourceStatus":
				ttsName = systemSetTitleWords[13] + ",";
				currentStatus = offOnWords[noticeSource];
				break;
			case "footballmode":
				ttsName = systemSetTitleWords[14] + ",";
				currentStatus = offOnWords[footballMode];
				break;
			case "Closed caption":
				ttsName = systemSetTitleWords[15] + ",";
				currentStatus = "";
				break;
			case "LED_Indicator":
				ttsName = systemSetTitleWords[16] + ",";
				currentStatus = LEDWords[LEDMode];
				break;
			case "InstantPowerOn":
				ttsName = systemSetTitleWords[17] + ",";
				currentStatus = offOnWords[instantPowerOn];
				break;
			case "Reset_shop":
				ttsName = systemSetTitleWords[18] + ",";
				currentStatus = "";
				break;
			default:
				ttsName = "";
				currentStatus = "";
				break;
		}
	}
	else if(("password" == focusOn) && (1 == parent.currentShowMenu))
	{
		ttsName = psswordWords;
		currentStatus = $('passRemind').innerHTML;
		if(lastFocusName == currentName && lastFocusType == focusOn)
		{
			ttsName = "";
		}
		else
		{
			ttsName = ttsName + ",";
		}
	}
	else if(("menu" == focusOn) && (2 == parent.currentShowMenu))
	{
		parent.$("subMenu2").contentWindow.ttsRead();
	}
	else if("Country" == focusOn)
	{
		ttsName = "";
		currentStatus = countryListWords[countryOffset + form_position_h];//soundPresetModeWords[form_position_h + soundPresetOffSet];
		isSelected(countryListWords[countryOffset] == currentStatus);
	}
	else if("menulang" == focusOn)
	{
		ttsName = "";
		currentStatus = menuLangWords[form_position_h];
		isSelected(menuLangWords[menuLangPos] == currentStatus);
	}
	else if("location" == focusOn)
	{
		ttsName = "";
		currentStatus = homeShopWords[form_position_h];
		isSelected(homeShopWords[locationValue] == currentStatus);
	}
	else if("hbbtvMode" == focusOn)
	{
		ttsName = "";
		currentStatus = offOnWords[form_position_h];
		isSelected(offOnWords[hbbtvMode] == currentStatus);
	}
	else if("tlink" == focusOn)
	{
		ttsName = "";
		currentStatus = offOnWords[form_position_h];
		isSelected(offOnWords[tLink] == currentStatus);
	}
	else if("noticeSource" == focusOn)
	{
		ttsName = "";
		currentStatus = offOnWords[form_position_h];
		isSelected(offOnWords[noticeSource] == currentStatus);
	}
	else if("footballMode" == focusOn)
	{
		ttsName = "";
		currentStatus = offOnWords[presetPositionH];
		isSelected(offOnWords[footballMode] == currentStatus);
	}
	else if("LEDMode" == focusOn)
	{
		ttsName = "";
		currentStatus = LEDWords[form_position_h];
		isSelected(LEDWords[LEDMode] == currentStatus);
	}
	else if("instantPowerOn" == focusOn)
	{
		ttsName = "";
		currentStatus = offOnWords[form_position_h];
		isSelected(offOnWords[instantPowerOn] == currentStatus);
	}
	else if("resetShop" == focusOn)
	{
		ttsName = resetRemindWords;
		currentStatus = okCancelWords[form_position_h];
		if(lastFocusName == currentName && lastFocusType == focusOn)
		{
			ttsName = "";
		}
		else
		{
			ttsName = ttsName + ",";
		}
	}
	else if("showResetShopRemind" == focusOn)
	{
		ttsName = "";
		currentStatus = resetShopRemind;
	}
	else if(0 == parent.currentShowMenu)
	{
		$("homeMenu").contentWindow.ttsRead();
	}
	else
	{
	}
	lastFocusType = focusOn;
	lastFocusName = currentName;
	ttsStr = ttsName + currentStatus;
	if("" != ttsStr)
	{
		top.ttsLog("ttsStr=" + ttsStr);
		top.setTTSSay(top.SPEECH_TYPE_FLUSH, ttsStr);
	}
}
console.log("==> Loadend JS <==");