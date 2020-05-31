var mainFocus               = ["images/Focus_Frame/Focus-1.png","images/Focus_Frame/Focus-2.png"]
var SUB_MENU_START 			= 40;					//二级级菜单焦点移动起始位置
var SUB_MENU_STEP 			= 84;					//二级级主菜单焦点移动的step
var RESET_START             = 190;
var RESET_STEP              = 250;
var FORM_STEP				= 80;					//弹出框焦点移动的step	
var list_position_h         = 0;	
var form_position_h         = 0;
var passwordMenuV             = 0;//密码编辑主界面垂直坐标
var passwordMenuH             = 1;//密码编辑主界面水平坐标表示是否去连接网络
var reset_position_h        = 0;
var BOPValue                = 0;
var BFSValue                = 0;
var EvByEvValue             = 0;
var GetUserIDValue          = 0;
var BGMValue                = 0;
var NRMValue                = 0;
var DVBT2Value              = 0;
var hbbtvModeValue          = 0;
var serialValue             = 0;
var dvixDPSValue            = 0;
var runningTimeValue        = 0;
var leftOffset              = 508;
var listFormLiList;
var mainMenuLiList;
var pressKeyFlag              =0;
var oldRcKeyTimeOut           =0;
var IDX_RESET_ALL 			= 15;
var char_table           = [['0'," ",".",'-','*','&','+','@','#'],
	['1'],
	['2','a','b','c','A','B','C'],
	['3','d','e','f','D','E','F'],
	['4','g','h','i','G','H','I'],
	['5','j','k','l','J','K','L'],
	['6','m','n','o','M','N','O'],
	['7','p','q','r','s','P','Q','R','S'],
	['8','t','u','v','T','U','V'],
	['9','w','x','y','z','W','X','Y','Z'],
];//用来编辑频道名时的字符库

var alphabet = [' ','!','\"','#','$','%','&','\'','(',')','*','+',',','-','.','/','0','1','2','3','4','5','6','7','8','9',
	':',';','<','=','>','?','@',
	'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
	'[','\\',']','^','_','`',
	'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
	'{','|','}','~'];
var keyCount           = 0;//按键连续按下的次数
var oldKeyCode         = 0;//上一次的keycode 与本次进行对比用
var passwordTimeout           = 0;//用来表示输入密码超时500ms变为*号表示
var password                  = ""; //存储密码
var repeatTimerIndex = 0;
var focusOn                 = "optionList";
var option0624Name          = [top.option0624Name[0],top.option0624Name[1],top.option0624Name[2],top.option0624Name[3],top.option0624Name[4],"NVM Reset",top.option0624Name[6],top.option0624Name[7],top.option0624Name[8],top.option0624Name[9],"Serial IO Ctrl","Running time","DCAPP",top.supportOptions[0],"HbbTV Portal", "Reset ALL",top.smartTVOptions[10]];
var offOnWords              = top.offOn;
var DVBT2AndChoice          = [top.DVBT2AndChoice[2],top.DVBT2AndChoice[0],top.DVBT2AndChoice[1]]
var menuList =[
{name:option0624Name[0],param:function(){doBOP();},showFlag:0},
{name:option0624Name[1],param:function(){doBFS();},showFlag:0},
{name:option0624Name[2],param:function(){doEventByEvent();},showFlag:0},
{name:option0624Name[3],param:function(){doGetUserID();},showFlag:1},
{name:option0624Name[4],param:function(){doBGM();},showFlag:1},
{name:option0624Name[5],param:function(){doNvmReset();},showFlag:1},
{name:option0624Name[6],param:function(){doResetShop();},showFlag:1},
{name:option0624Name[7],param:function(){doNRM();},showFlag:1},
{name:option0624Name[8],param:function(){doDVBT2Choice();},showFlag:1},
{name:option0624Name[9],param:function(){doHbbtvModeChoice();},showFlag:1},
{name:option0624Name[10],param:function(){doSerialChoice();},showFlag:1},
{name:option0624Name[11],param:function(){},showFlag:1},
{name:option0624Name[12],param:function(){doDvixDPS();},showFlag:0},
{name:option0624Name[13],param:function(){doRemoteDiagnosis();},showFlag:1},
{name:option0624Name[14],param:function(){doHbbtvOption();},showFlag:1},
{name:option0624Name[IDX_RESET_ALL],param:function(){doResetAll();},showFlag:1},
{name:option0624Name[16],param:function(){doSambaTVSwitch();},showFlag:0}
]
var resetShopFlag         = 0;
var setting = top.g_setting;
var sambaValue = 0;
var listFirstSpans ;
function initValue()
{
	BOPValue                = 0;
	BFSValue                = 0;
	EvByEvValue             = 0;
	GetUserIDValue          = top.g_factory.otherGotUserID;
	console.log("top.g_setting.networkDownloadButton==="+top.g_setting.networkDownloadButton);
	if(top.g_setting.networkDownloadButton == 2)
	{
		NRMValue = 0;
	}
	else
	{
		NRMValue = 1;
	}
	console.log("NRMValue==="+NRMValue);
	BGMValue                = top.g_factory.otherBGM;
	console.log("otherBGM==="+BGMValue);
	DVBT2Value              = top.g_factory.dvbt2Choice;
	hbbtvModeValue          = top.g_setting.hbbTVMode;
	serialValue             = top.g_factory.getSerialPortStatus();
	dvixDPSValue            = top.g_media.dvixDPS;
	if (top.isSambaFlag == "true")
	{
        console.log("Property sambaTV="+top.g_setting.getProperty("app.ui.sambaTV","1"));
       	sambaValue = top.g_setting.getProperty("app.ui.sambaTV","1");
        console.log("sambaValue="+sambaValue);
	}
	else
        sambaValue = 0;

}

function doHbbtvOption()
{
	$("wirelessInputPassword").style.display="block";
	$("smallPopWin").style.display="none"
	$("scanTitle").innerHTML=option0624Name[14];
	passwordMenuH=1;
	$("dialogButtonFocus").style.left=120+"px";
	focusOn = "passwordMenu";
}

function doBOP()
{
	try
	{
	$("popListFocus").src=mainFocus[1];
	form_position_h = BOPValue;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
	focusOn = "BOPValue";
	}catch(er)
	{
		console.log("-----"+er);
	}
}
function doBFS()
{
	$("popListFocus").src=mainFocus[1];
	form_position_h = BFSValue;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
	focusOn = "BFSValue";
}
function doEventByEvent()
{
	$("popListFocus").src=mainFocus[1];
	form_position_h = EvByEvValue;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
	focusOn = "EvByEvValue";
}
function doGetUserID()
{
	$("popListFocus").src=mainFocus[1];
	form_position_h = GetUserIDValue;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
	focusOn = "GetUserIDValue";
}
function doSambaTVSwitch()
{
    $("popListFocus").src=mainFocus[1];
    form_position_h = sambaValue;
    var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 140;
    top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
    focusOn = "sambaValue";
}
function doBGM()
{
	
	$("popListFocus").src=mainFocus[1];
	form_position_h = BGMValue;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
	focusOn = "BGMValue";
}
function doNvmReset()
{
	var span = $("resetForm").getElementsByTagName("span");
	span[0].innerHTML = option0624Name[5];
	span[1].innerHTML = top.selectChoice;
	span[2].innerHTML = top.okCancel[1];
	span[3].innerHTML = top.okCancel[0];
	reset_position_h = 0;
	$("resetFocus").style.left = RESET_START + RESET_STEP * reset_position_h +"px";
	$("resetForm").style.display = "block";
	$("smallPopWin").style.display = "none";
	focusOn = "nvmReset";
}
function doResetShop()
{
	var span = $("resetForm").getElementsByTagName("span");
	span[0].innerHTML = option0624Name[6];
	span[1].innerHTML = top.selectChoice;
	span[2].innerHTML = top.okCancel[1];
	span[3].innerHTML = top.okCancel[0];
	reset_position_h = 0;
	$("resetFocus").style.left = RESET_START + RESET_STEP * reset_position_h +"px";
	$("resetForm").style.display = "block";
	$("smallPopWin").style.display = "none";
	focusOn = "resetShop";
}
function doResetAll()
{
	var span = $("resetForm").getElementsByTagName("span");
	span[0].innerHTML = option0624Name[IDX_RESET_ALL];
	span[1].innerHTML = top.selectChoice;
	span[2].innerHTML = top.okCancel[1];
	span[3].innerHTML = top.okCancel[0];
	reset_position_h = 0;
	$("resetFocus").style.left = RESET_START + RESET_STEP * reset_position_h +"px";
	$("resetForm").style.display = "block";
	$("smallPopWin").style.display = "none";
	focusOn = "resetAll";
}

function doNRM()
{
	$("popListFocus").src=mainFocus[1];
	form_position_h = NRMValue;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
	focusOn = "NRMValue";
}
function doDVBT2Choice()
{
	$("popListFocus").src=mainFocus[1];
	form_position_h = DVBT2Value;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,DVBT2AndChoice,3,form_position_h,0);
	focusOn = "DVBT2Value";
}
function doHbbtvModeChoice()
{
	$("popListFocus").src=mainFocus[1];
	form_position_h = hbbtvModeValue;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
	focusOn = "hbbtvModeValue";
}
function doSerialChoice()
{
	$("popListFocus").src=mainFocus[1];
	form_position_h = serialValue;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
	focusOn = "serialValue";
}
function doDvixDPS()
{
    $("popListFocus").src=mainFocus[1];
    form_position_h = dvixDPSValue;
    var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
    top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
    focusOn = "dvixDPSValue";
}
function doRemoteDiagnosis()
{
	top.jumpHotkeyPage("tvExceptionDoctor.html");
}
function init()
{
    top.initTextDirection(window);
	timeoutInit();
	initValue();
	listFormLiList = $("listForm").getElementsByTagName("li");
	mainMenuLiList = $("smallPopWin").getElementsByTagName("li");
    listFirstSpans = $("smallPopWin").getElementsByClassName("popListFirPro");
	showBOPValueMenu();
	showBFSValueMenu();
	showEvByEvValueMenu();
	showGetUserIDValueMenu();
	showBGMValueMenu();
	showResetAllMenu();
	showNvmResetMenu();
	showResetShopMenu();
	showNRMValueMenu();
	showDVBT2ValueMenu();
	showhbbtvModeValueMenu();
	showhbbtvOptionMenu();
	showserialValueMenu();
    showDvixDPSValueMenu();
	showMenuList();
    showRunningTime();
	showRemoteDiagnosisMenu();
    showSambaValueMenu();
    top.doEleScrForNoOption(listFirstSpans, findRealPosition(list_position_h), 0);
	//refreshFocusOfMenuList();
    doOffsetMenuList(list_position_h);
}
function uninit()
{
	//top.timeoutFuc.timeoutEnable=1;
}
function showBOPValueMenu()
{
	var span = mainMenuLiList[0].getElementsByTagName("span");
	var div = mainMenuLiList[0].getElementsByTagName("div");
	span[0].innerHTML = option0624Name[0];
	div[0].innerHTML = offOnWords[BOPValue];
}
function showBFSValueMenu()
{
	var span = mainMenuLiList[1].getElementsByTagName("span");
	var div = mainMenuLiList[1].getElementsByTagName("div");
	span[0].innerHTML = option0624Name[1];
	div[0].innerHTML = offOnWords[BFSValue];
}
function showEvByEvValueMenu()
{
	var span = mainMenuLiList[2].getElementsByTagName("span");
	var div = mainMenuLiList[2].getElementsByTagName("div");
	span[0].innerHTML = option0624Name[2];
	div[0].innerHTML = offOnWords[EvByEvValue];
}
function showGetUserIDValueMenu()
{
	var span = mainMenuLiList[3].getElementsByTagName("span");
	var div = mainMenuLiList[3].getElementsByTagName("div");
	span[0].innerHTML = option0624Name[3];
	div[0].innerHTML = offOnWords[GetUserIDValue];
}
function showBGMValueMenu()
{
	var span = mainMenuLiList[4].getElementsByTagName("span");
	var div = mainMenuLiList[4].getElementsByTagName("div");
	span[0].innerHTML = option0624Name[4];
	console.log("BGMValue"+BGMValue);
	div[0].innerHTML = offOnWords[BGMValue];
}
function showSambaValueMenu()
{
    var span = mainMenuLiList[16].getElementsByTagName("span");
    var div = mainMenuLiList[16].getElementsByTagName("div");
    span[0].innerHTML = option0624Name[16];
	div[0].innerHTML = offOnWords[sambaValue];
}
function showNvmResetMenu()
{
	var span = mainMenuLiList[5].getElementsByTagName("span");
	span[0].innerHTML = option0624Name[5];
}
function showResetShopMenu()
{
	var span = mainMenuLiList[6].getElementsByTagName("span");
	span[0].innerHTML = option0624Name[6];
}
function showResetAllMenu()
{
	var span = mainMenuLiList[IDX_RESET_ALL].getElementsByTagName("span");
	span[0].innerHTML = option0624Name[IDX_RESET_ALL];
}
function showNRMValueMenu()
{
	var span = mainMenuLiList[7].getElementsByTagName("span");
	var div = mainMenuLiList[7].getElementsByTagName("div");
	span[0].innerHTML = option0624Name[7];
	div[0].innerHTML = offOnWords[NRMValue];
}
function showDVBT2ValueMenu()
{
	var span = mainMenuLiList[8].getElementsByTagName("span");
	var div = mainMenuLiList[8].getElementsByTagName("div");
	span[0].innerHTML = option0624Name[8];
	div[0].innerHTML = DVBT2AndChoice[DVBT2Value];
}
function showhbbtvModeValueMenu()
{
	var span = mainMenuLiList[9].getElementsByTagName("span");
	var div = mainMenuLiList[9].getElementsByTagName("div");
	span[0].innerHTML = option0624Name[9];
	div[0].innerHTML = offOnWords[hbbtvModeValue];
}

function showserialValueMenu()
{
	var span = mainMenuLiList[10].getElementsByTagName("span");
	var div = mainMenuLiList[10].getElementsByTagName("div");
	span[0].innerHTML = option0624Name[10];
	div[0].innerHTML = offOnWords[serialValue];
}

function showDvixDPSValueMenu()
{
    var span = mainMenuLiList[12].getElementsByTagName("span");
    var div = mainMenuLiList[12].getElementsByTagName("div");
    span[0].innerHTML = option0624Name[12];
    div[0].innerHTML = offOnWords[dvixDPSValue];
}

function showRunningTime()
{
    var span = mainMenuLiList[11].getElementsByTagName("span");
    var div = mainMenuLiList[11].getElementsByTagName("div");
    span[0].innerHTML = option0624Name[11];
    //div[0].innerHTML = offOnWords[runningTimeValue];
    var runningTime = parseInt(setting.getRuningTime()/60);
    var year = runningTime/(365*24*60);
    var year1 = runningTime%(365*24*60);
    var month = year1/(30*60*24);
    var month1 = year1%(30*60*24);
    var day = month1/(60*24);
    var day1 = month1%(60*24);
    var hour = day1/60;
    var minute = day1%60;
    div[0].innerHTML = Math.floor(year)+"Y:"+Math.floor(month)+"M:"+Math.floor(day)+"D:"+Math.floor(hour)+"h:"+minute+"m";
    div[0].style.left = "200px";
    div[0].style.width = "280px";
}
function showRemoteDiagnosisMenu()
{
	var span = mainMenuLiList[13].getElementsByTagName("span");
	span[0].innerHTML = option0624Name[13];
}
function showhbbtvOptionMenu()
{
	var span = mainMenuLiList[14].getElementsByTagName("span");
	span[0].innerHTML = option0624Name[14];
	$("scanInputTitle").innerHTML="Url";
	var divs =$("scanButtonList").getElementsByTagName("div");
	divs[0].innerHTML=top.okCancel[0];
	divs[1].innerHTML=top.okCancel[1];
}


function $(id)
{
    return document.getElementById(id);
}
document.onsystemevent = notifyProcess;

function notifyProcess(evt)
{
	if(resetShopFlag==1)
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
function timeoutInit()
{
	document.onkeyup = repeatkeyupproc;
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyDownProcess;
}

function repeatkeyupproc(evt)
{
	if (repeatTimerIndex != 0)
	{
		clearInterval(repeatTimerIndex);
		repeatTimerIndex = 0;
	}
}
function keyDownProcess(evt)
{
	if(resetShopFlag==1)
	{
		return;
	}
	var ret = true;
	var keycode = evt.which;

	switch (keycode)
	{
		case top.VK_EXIT:
			if(top.appOpenFlag == 1)
			{
				var appname = top.g_setting.getProperty("app.ui.currentApp","tbrowser.mmh");
				top.scheduleApp = top.SCHEDULE_TV;
				top.g_ulits.closeApplication(appname);
			}
            top.jumpPage(1);
			break;
		case top.VK_UP:
			toUp();
			ret = false;
			break;
		case top.VK_DOWN:
			toDown();
			ret = false;
			break;
		case top.VK_ENTER:
			doEnter();
			ret = false;
			break;
		case top.VK_BACK:
		{
			if(focusOn == "passwordMenu" && (password.length > 0))
			{
				password = password.substr(0, password.length - 1);
				showPassword('');
			}
			else
			{

				toBack();
			}
			break;
		}

		case top.VK_LEFT:
		{
			toLeft();
			ret = false;
			break;
		}
		case top.VK_RIGHT:
		{
			toRight();
			break;
		}
		case top.VK_0:
			if((focusOn == "passwordMenu" ||focusOn == "passwordEdit")&&passwordMenuV==0)
			{
				checkInput(keycode);
			}
			break;
		case top.VK_1:
			if((focusOn == "passwordMenu" ||focusOn == "passwordEdit")&&passwordMenuV==0)
			{
				checkInput(keycode);
			}
			break;
		case top.VK_2:
			if((focusOn == "passwordMenu" ||focusOn == "passwordEdit")&&passwordMenuV==0)
			{
				checkInput(keycode);
			}
			break;
		case top.VK_3:
			if((focusOn == "passwordMenu" ||focusOn == "passwordEdit")&&passwordMenuV==0)
			{
				checkInput(keycode);
			}
			break;
		case top.VK_4:
			if((focusOn == "passwordMenu" ||focusOn == "passwordEdit")&&passwordMenuV==0)
			{
				checkInput(keycode);
			}
			break;
		case top.VK_5:
			if((focusOn == "passwordMenu" ||focusOn == "passwordEdit")&&passwordMenuV==0)
			{
				checkInput(keycode);
			}
			break;
		case top.VK_6:
			if((focusOn == "passwordMenu" ||focusOn == "passwordEdit")&&passwordMenuV==0)
			{
				checkInput(keycode);
			}
			break;
		case top.VK_7:
			if((focusOn == "passwordMenu" ||focusOn == "passwordEdit")&&passwordMenuV==0)
			{
				checkInput(keycode);
			}
			break;
		case top.VK_8:
			if((focusOn == "passwordMenu" ||focusOn == "passwordEdit")&&passwordMenuV==0)
			{
				checkInput(keycode);
			}
			break;
		case top.VK_9:
			if((focusOn == "passwordMenu" ||focusOn == "passwordEdit")&&passwordMenuV==0)
			{
				checkInput(keycode);
			}
			break;
		case 32://特殊符号
		case 33:
		case 34:
		case 35:
		case 36:
		//case 37:
		//case 38:
		//case 39:
		//case 40:
		case 41:
		case 42:
		case 43:
		case 44:
		case 45:
		case 46:
		case 47:


		case 58://特殊符号
		case 59:
		case 60:
		case 61:
		case 62:
		case 63:
		case 64:
		case 65://大写字母
		case 66:
		case 67:
		case 68:
		case 69:
		case 70:
		case 71:
		case 72:
		case 73:
		case 74:
		case 75:
		case 76:
		case 77:
		case 78:
		case 79:
		case 80:
		case 81:
		case 82:
		case 83:
		case 84:
		case 85:
		case 86:
		case 87:
		case 88:
		case 89:
		case 90:
		case 91:
		case 92:
		case 93:
		case 94:
		case 95:
		case 96:
		case 123://特殊符号
		case 124:
		case 125:
		case 126:

		case 293:
		case 294:
		case 295:
		case 296:

		case 353:///小写字母 按键值  0x100 + ascii
		case 354:
		case 355:
		case 356:
		case 357:
		case 358:
		case 359:
		case 360:
		case 361:
		case 362:
		case 363:
		case 364:
		case 365:
		case 366:
		case 367:
		case 368:
		case 369:
		case 370:
		case 371:
		case 372:
		case 373:
		case 374:
		case 375:
		case 376:
		case 377:
		case 378:
			if((focusOn == "passwordMenu" ||focusOn == "passwordEdit")&&passwordMenuV==0)
			{
				checkInput(keycode);
			}
			break;
		default:
			top.keyDownProcess(evt);
			break;
	}
}


function checkInput(keycode)//修改频道名的函数
{
	//第一次的时候
	var inputChar='';

	if(passwordTimeout!=0)//在虚拟键盘输入500ms之内，调用遥控器输入
	{
		clearTimeout(passwordTimeout);
		passwordTimeout = 0;
		showPassword('');
	}
	if (pressKeyFlag==0)
	{
		pressKeyFlag = 1;
		if ((keycode>=32 && keycode<=47) || (keycode>=58 && keycode<=96) ||(keycode>=353 && keycode<=378)||(keycode>=123 && keycode<=126)||(keycode>=293 && keycode<=296))
		{
			keyCount = 0;
			if((keycode>=32 && keycode<=47) || (keycode>=58 && keycode<=96)||(keycode>=123 && keycode<=126))
				inputChar = alphabet[keycode-32];
			else if(keycode>=353 && keycode<=378)
			{
				inputChar = alphabet[keycode-288];
			}
			else
			{
				inputChar = alphabet[keycode-288]
			}
		}
		else
		{
			var keyTableLine = keycode - 48;
			if (keyCount>=char_table[keyTableLine].length)
			{
				keyCount = 0;
			}
			inputChar = char_table[keyTableLine][keyCount];
		}

		showPassword(inputChar);
		oldRcKeyTimeOut = setTimeout("showPasswordByRC()", 800);
	}
	else//其他时候
	{
		if ((oldKeyCode == keycode) && !((keycode>=32 && keycode<=47) || (keycode>=58 && keycode<=96) ||(keycode>=353 && keycode<=378)||(keycode>=123 && keycode<=126)||(keycode>=293 && keycode<=296)))
		{
			keyCount++;
			var keyTableLine = keycode - 48;
			if (keyCount>=char_table[keyTableLine].length)
			{
				keyCount = 0;
			}
			inputChar = char_table[keyTableLine][keyCount];
			clearTimeout(oldRcKeyTimeOut);
			oldRcKeyTimeOut = 0;
			if (char_table[keyTableLine].length == 1)
			{
				password += oldInputChar;
			}
			showPassword(inputChar);
			oldRcKeyTimeOut = setTimeout("showPasswordByRC()", 800);
		}
		else
		{
			keyCount = 0;
			if ((keycode>=32 && keycode<=47) || (keycode>=58 && keycode<=96) ||(keycode>=353 && keycode<=378)||(keycode>=123 && keycode<=126)||(keycode>=293 && keycode<=296))
			{
				if((keycode>=32 && keycode<=47) || (keycode>=58 && keycode<=96)||(keycode>=123 && keycode<=126))
					inputChar = alphabet[keycode-32];
				else if(keycode>=353 && keycode<=378)
				{
					inputChar = alphabet[keycode-288];
				}
				else
				{
					inputChar = alphabet[keycode-288]
				}
			}
			else
			{
				var keyTableLine = keycode - 48;
				inputChar = char_table[keyTableLine][keyCount];
			}

			clearTimeout(oldRcKeyTimeOut);
			oldRcKeyTimeOut = 0;
			password += oldInputChar;
			showPassword(inputChar);
			oldRcKeyTimeOut = setTimeout("showPasswordByRC()", 800);
		}
	}
	oldKeyCode = keycode;
	oldInputChar = inputChar;
}

function showPasswordByRC()
{
	oldRcKeyTimeOut = 0;
	password += oldInputChar;
	showPassword('');
	pressKeyFlag = 0;
	keyCount = 0;
}

function showPasswordByKeyboard()
{
	passwordTimeout = 0;
	showPassword('');
}

function showPassword(key)
{
	$("scanInputContent").innerHTML = password + key;
}

function toUp()
{
	if(focusOn == "optionList")
	{
		/*
		if(list_position_h <= 0)
		{
			list_position_h = findMaxPosition();
		}
		else
		{
			list_position_h--;
		}
		refreshFocusOfMenuList();
		*/
        if(findName(list_position_h)==findFirstName())
        {
            list_position_h=findPosition(findLastName());
        }
        else
        {
            list_position_h--;
        }
        doOffsetMenuList(list_position_h);
        top.doEleScrForNoOption(listFirstSpans, findRealPosition(list_position_h), -1);
	}
	else if(focusOn == "DVBT2Value")
	{
		form_position_h--;
		if(form_position_h < 0)
		{
			form_position_h = 2;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
	}
	else if(focusOn == "passwordMenu")
	{
		if(passwordMenuV==0)
		{
			passwordMenuV=1;
			$("scanInputFocus").style.display="none";
			$("dialogButtonFocus").style.display="block";
		}
		else
		{
			passwordMenuV=0;
			$("dialogButtonFocus").style.display="none";
			$("scanInputFocus").style.display="block";
		}
	}
	else if(focusOn == "passwordEdit")
	{
		top.moveUp();
	}
	else
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0 ;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
	}
}
function findLastName()
{
    for(var i=menuList.length-1;i>=0;i--)
    {
        if(menuList[i].showFlag==1)
        {
            return menuList[i].name;
        }
    }
}
function findFirstName()
{
    for(var i=0;i<menuList.length;i++)
    {
        if(menuList[i].showFlag==1)
        {
            return menuList[i].name;
        }
    }
}
function doOffsetMenuList(postion)
{
    try
    {
        if(postion>=12)
        {
            //offsetPosition=postion-11;
            $("menuUl").style.top=-(postion-11)*60+"px";
            $("popListFocus").style.top=SUB_MENU_START+11*SUB_MENU_STEP+"px";
        }
        else
        {
           // offsetPosition=0;
            $("menuUl").style.top=40+"px";
            $("popListFocus").style.top=SUB_MENU_START+postion*SUB_MENU_STEP+"px";
        }
    }catch(er)
    {
        top.g_channel.testLog("doOffsetMenuList:"+er);
    }
}
function toDown()
{
	if(focusOn == "optionList")
	{
		/*
		if(list_position_h >= findMaxPosition())
		{
			list_position_h = 0;
		}
		else
		{
			list_position_h++;
		}
		refreshFocusOfMenuList();
		*/
		console.log("ldc list_position_h="+list_position_h);
        if(findName(list_position_h)==findLastName())
        {
            list_position_h=findPosition(findFirstName());
        }
        else
        {
            list_position_h++;
        }
        console.log("ldc list_position_h2="+list_position_h);
        doOffsetMenuList(list_position_h);
        top.doEleScrForNoOption(listFirstSpans, findRealPosition(list_position_h), 1);
	}
	else if(focusOn == "DVBT2Value")
	{
		form_position_h++;
		if(form_position_h > 2)
		{
			form_position_h = 0;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
	}
	else if(focusOn == "passwordMenu")
	{
		if(passwordMenuV==0)
		{
			passwordMenuV=1;
			$("scanInputFocus").style.display="none";
			$("dialogButtonFocus").style.display="block";
		}
		else
		{
			passwordMenuV=0;
			$("dialogButtonFocus").style.display="none";
			$("scanInputFocus").style.display="block";
		}
	}
	else if(focusOn == "passwordEdit")
	{
		top.moveDown();
	}
	else
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0 ;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
	}
}

function toRight()
{
	if(focusOn == "resetShop" || focusOn == "resetAll" || focusOn == "nvmReset")
	{
		if(reset_position_h==0)
		{
			reset_position_h = 1;
		}
		else
		{
			reset_position_h = 0;
		}
		$("resetFocus").style.left = RESET_START + RESET_STEP * reset_position_h +"px";
	}
	else if(focusOn == "passwordMenu")
	{
		if(passwordMenuV==1)
		{
			if(passwordMenuH==1)
			{
				passwordMenuH=0;
				$("dialogButtonFocus").style.left=320+"px";
			}
			else
			{
				passwordMenuH=1;
				$("dialogButtonFocus").style.left=120+"px";
			}
		}
	}
	else if(focusOn == "passwordEdit")
	{
		top.moveRight();
	}
	else 
	{
		doEnter();
	}
}
function toLeft()
{
	if(focusOn == "resetShop" || focusOn == "resetAll" || focusOn == "nvmReset")
	{
		if(reset_position_h==0)
		{
			reset_position_h = 1;
		}
		else
		{
			reset_position_h = 0;
		}
		$("resetFocus").style.left = RESET_START + RESET_STEP * reset_position_h +"px";
	}
	else if(focusOn == "passwordMenu")
	{
		if(passwordMenuV==1)
		{
			if(passwordMenuH==1)
			{
				passwordMenuH=0;
				$("dialogButtonFocus").style.left=320+"px";
			}
			else
			{
				passwordMenuH=1;
				$("dialogButtonFocus").style.left=120+"px";
			}
		}
	}
	else if(focusOn == "passwordEdit")
	{
		top.moveLeft();
	}
	else
	{
		toBack();
	}
}

function toBack()
{
	if(focusOn == "resetShop" || focusOn == "resetAll" || focusOn == "nvmReset")
	{
		$("smallPopWin").style.display = "block";
		$("resetForm").style.display = "none";
		focusOn = "optionList";
	}
	else if(focusOn == "passwordMenu")
	{
		$("wirelessInputPassword").style.display="none";
		password="";
		clearTimeout(passwordTimeout);
		passwordTimeout = 0;
		clearTimeout(oldRcKeyTimeOut);
		oldRcKeyTimeOut = 0;
		pressKeyFlag = 0;
		keyCount = 0;
		$("smallPopWin").style.display = "block";
		showPassword('');
		$("scanPassRemind").style.display="none";
		passwordMenuV=0;
		$("dialogButtonFocus").style.display="none";
		$("scanInputFocus").style.display="block";
		focusOn = "optionList";
	}
	else if(focusOn == "passwordEdit")
	{
		if(top.tobackKeyBoard()=="menuBack")
		{
			top.restartTimeout();
			focusOn = "passwordMenu"
		}
	}
	else
	{
		$("popListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "optionList";
	}
}

function doEnter()
{
	if(focusOn == "resetShop")
	{
		if(reset_position_h == 0)
		{
			resetShopFlag=0;
			$("smallPopWin").style.display = "block";
			$("resetForm").style.display = "none";
			focusOn = "optionList";
		}
		else
		{
			resetShopFlag=1;
			top.showMute(0);
			top.sendEvent("vod.netflix", 0xf00c);
			top.initGlobalVariable();
			top.showFactoryHotkey();
			top.g_setting.restoreDefault();
			
            if(top.g_isDownloading == 1)
            {
                top.g_isDownloading = -1;
                if(!top.g_isForceUpgrade)
                {
                    top.g_setting.pauseDownloadUpdateFile();
                    top.hideDownloadRing();
                }

            }
			setTimeout(function(){top.g_factory.systemReboot(0);},3000);
		}
	}
	else if(focusOn == "nvmReset")
	{
		if(reset_position_h == 0)
		{
			$("smallPopWin").style.display = "block";
			$("resetForm").style.display = "none";
			focusOn = "optionList";
		}
		else
		{
            console.log("****************** do NVM reset Start *********************");
            top.sendEvent("vod.netflix", 0xf00c);
            if(0 == top.g_factory.nvmReset())
            {
                console.log("****************** do NVM reset Success *********************");
            }
            else
            {
                console.log("****************** do NVM reset Fail *********************");
            }
            top.g_factory.factoryHotkey = 0;
            $("smallPopWin").style.display = "block";
            $("resetForm").style.display = "none";
            focusOn = "optionList";
            console.log("****************** do NVM reset End *********************");
		}
	}
	else if(focusOn == "resetAll")
	{
		if(reset_position_h == 0)
		{
			$("smallPopWin").style.display = "block";
			$("resetForm").style.display = "none";
			focusOn = "optionList";
		}
		else
		{
            console.log("****************** do nvmResetAll Start *********************");
            top.sendEvent("vod.netflix", 0xf00c);
            if(0 == top.g_factory.nvmResetAll(0))
            {
				top.g_factory_designModeHotkey = 0;//工厂菜单设计规范的
				top.g_factory_hotkey = 1;
				top.showFactoryHotkey();
                console.log("****************** do nvmResetAll Success *********************");
            }
            else
            {
                console.log("****************** do nvmResetAll Fail *********************");
            }
            $("smallPopWin").style.display = "block";
            $("resetForm").style.display = "none";
            focusOn = "optionList";
            console.log("****************** do nvmResetAll End *********************");
		}
	}
	else if(focusOn == "BOPValue")
	{
		BOPValue = form_position_h;
		showBOPValueMenu();
		$("popListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "optionList";
	}
	else if(focusOn == "BFSValue")
	{
		BFSValue = form_position_h;
		showBFSValueMenu();
		$("popListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "optionList";
	}
	else if(focusOn == "EvByEvValue")
	{
		EvByEvValue = form_position_h;
		showEvByEvValueMenu();
		$("popListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "optionList";
	}
	else if(focusOn == "GetUserIDValue")
	{
		GetUserIDValue = form_position_h;
		top.g_factory.otherGotUserID = GetUserIDValue;
		showGetUserIDValueMenu();
		$("popListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "optionList";
	}
	else if(focusOn == "NRMValue")
	{
		if(form_position_h==0)
		{
			top.g_setting.networkDownloadButton = 2;
            var opupdateInfo = top.g_setting.getUpdateInfo();
            if(opupdateInfo){
                //console.log("opupdateInfo.version.length==="+opupdateInfo.version.length);
                if(opupdateInfo.version.length > 15)
                {
                    //console.log("opupdateInfo.version==="+parseInt(opupdateInfo.version.slice(15), 10));
                    top.g_setting.networkUpdateSoftwareVersionInDB = parseInt(opupdateInfo.version.slice(15), 10);
                }
            }
		}
		else
		{
			top.g_setting.networkDownloadButton = 0;
            top.g_setting.networkUpdateSoftwareVersionInDB = 0;
		}
		NRMValue = form_position_h;
		showNRMValueMenu();
		$("popListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "optionList";
	}
    else if(focusOn == "sambaValue")
    {

    	console.log("ldc form_position_h = "+form_position_h);
        top.g_setting.setProperty("app.ui.sambaTV",form_position_h);
        console.log("ldc get sambaTV = "+top.g_setting.getProperty("app.ui.sambaTV","0"));
        sambaValue = form_position_h;
        showSambaValueMenu();
        $("popListFocus").src=mainFocus[0];
        $("listForm").style.display = "none";
        focusOn = "optionList";
    }
	else if(focusOn == "BGMValue")
	{
		top.g_factory.otherBGM = form_position_h;
		BGMValue = form_position_h;
		showBGMValueMenu();
		$("popListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "optionList";
	}
	else if(focusOn == "DVBT2Value")
	{
		top.g_factory.dvbt2Choice = form_position_h;
		DVBT2Value = form_position_h;
		showDVBT2ValueMenu();
		$("popListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "optionList";
	}
	else if(focusOn == "hbbtvModeValue")
	{
		top.g_setting.hbbTVMode = form_position_h;
		hbbtvModeValue = form_position_h;
		showhbbtvModeValueMenu();
		$("popListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "optionList";
	}
	else if(focusOn == "serialValue")
	{
		top.g_factory.setSerialPortStatus(form_position_h); 
		serialValue = form_position_h;
		showserialValueMenu();
		$("popListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "optionList";
	}
	else if(focusOn == "dvixDPSValue")
	{
		top.g_media.dvixDPS = form_position_h; 
		dvixDPSValue = form_position_h;
		showDvixDPSValueMenu();
		$("popListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "optionList";
	}
	else if(focusOn == "optionList")
	{
		findFunction(list_position_h);
	}
    else if(focusOn == "runningTimeValue")
    {

    }
	else if(focusOn == "passwordMenu")
	{
		if(passwordMenuV==0)
		{
			top.showKeyBoard();
			top.stopTimeout();
			focusOn = "passwordEdit";
		}
		else
		{
			if(passwordMenuH==1)
			{
				top.appOpenFlag = 1;
				top.g_setting.contextOf5in1   = top.CONTEXT_PANEL_OPERATION;
				top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x800,2,0);
				top.g_setting.setProperty("app.ui.currentApp","orf");
				top.main.document.body.style.display = "none";
				top.$("operatePage").style.display="none";
				top.$("otherPage").style.display="none";
				top.lastInputSource = top.g_channel.inputSource;
				tcl.channel.requestInputSource(10);
				top.g_ulits.openApplication("orf",password);//"http://orfhbbtv.orf.apa.net/orf/tvthek/index.html?rb=false&portal=false"
			}
			else
			{
				$("wirelessInputPassword").style.display="none";
				password="";
				clearTimeout(passwordTimeout);
				passwordTimeout = 0;
				clearTimeout(oldRcKeyTimeOut);
				oldRcKeyTimeOut = 0;
				pressKeyFlag = 0;
				keyCount = 0;
				$("smallPopWin").style.display = "block";
				showPassword('');
				$("scanPassRemind").style.display="none";
				passwordMenuV=0;
				$("dialogButtonFocus").style.display="none";
				$("scanInputFocus").style.display="block";
				focusOn = "optionList";
			}
		}
	}
	else if(focusOn == "passwordEdit")
	{
		var key=top.toOkGetChar();

		if(oldRcKeyTimeOut!=0)//在遥控器输入800ms之内，调用虚拟键盘输入。
		{
			clearTimeout(oldRcKeyTimeOut);
			oldRcKeyTimeOut = 0;
			showPasswordByRC();
		}
		if(key=="back")
		{
			if(passwordTimeout!=0)
			{
				clearTimeout(passwordTimeout);
				passwordTimeout = 0;
				showPassword('');//是否该变成*号再删除，还是直接删除?
			}
			if(password.length>0)
			{

				password = password.substr(0,password.length - 1);
				showPassword('');
			}

            //NT563平台持续按输入法的回退按键会导致setInterval里的函数无限循环执行，从而导致输入法无法输入字符
            if (repeatTimerIndex != 0)
            {
                clearInterval(repeatTimerIndex);
                repeatTimerIndex = 0;
            }

			repeatTimerIndex = setInterval(function() {
				if(password.length>0)
				{
					password = password.substr(0,password.length - 1);
					showPassword('');
				}
				top.timeoutFuc.osdTimeoutEndFuc();
				top.timeoutFuc.osdTimeoutStartFuc();
			},300);
		}
		else if(key=="!one" || key =="shift" || key=="symPage1" || key=="symPage2" ||key=="changeChar" || key=="changeLang" || key=="setting")
		{
			return;
		}
		else
		{
			if(passwordTimeout!=0)
			{
				clearTimeout(passwordTimeout);
				passwordTimeout = 0;
				showPassword('');
			}
			showPassword(key);
			password=password+key;
			passwordTimeout = setTimeout("showPasswordByKeyboard()", 500);
		}
	}
}
function checkShowMenu()
{

}
function showMenuList()
{
	var showNum = 0;
	if (top.isSambaFlag == "true")
	{
        menuList[16].showFlag = 1;
	}
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag==1)
		{
            showNum++;
			mainMenuLiList[i].style.display="block";
		}
		else
		{
			mainMenuLiList[i].style.display="none";
		}
	}
	console.log*("ldc showNum="+showNum);
    if(showNum>12)
    {
        $("listDownRemind").style.display="block";
        $("listUpRemind").style.display="block";
    }
    else
    {
        $("listDownRemind").style.display="none";
        $("listUpRemind").style.display="none";
    }
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
    var num = -1;
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
	var num=-1;
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag==1)
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
		if(menuList[i].showFlag==1)
		{
			num++;
		}
	}
	return num;
}
function refreshFocusOfMenuList()
{
	$("popListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
}

