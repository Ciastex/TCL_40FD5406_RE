/******************** created by chenhua ***********************/
var softUpdateTitleWords 		= [top.sysOptions[5],top.sysUpdate[0],top.sysUpdate[1],top.sysUpdate[2]];
var offOnWords					= top.offOn;
var okCancelWords				= top.okCancel;
var updateRemindWords			= top.sysUpdateDes;
var productInfoWords			= top.sysProductInfo;
var softUpdating				= top.netUpdateTitle;
var buttonWords					= [top.netUpdateButtonText[0],top.netUpdateButtonText[2],top.netUpdateButtonText[1]];

document.onsystemevent 				= notifyProcess;

var setting 					= top.g_setting;
var channel			 			= top.g_channel;
var focusOn 					= "menu"; 				//当前焦点窗口：menu,form
var list_position_h				= 0;					//主菜单位置下标
var form_position_h				= 0;					//副菜单或弹出框位置下标
var channelUpdateEnable			= 0;					//是否有by channel升级

var SUB_MENU_START 				= 160;					//三级级菜单焦点移动起始位置
var SUB_MENU_STEP 				= 70;					//三级级主菜单焦点移动的step
var FORM_START					= 198;					//弹出框焦点移动的开始位置
var FORM_STEP					= 250;					//弹出框焦点移动的step
var CHANGE_PASS_START			= 100;
var PROGRESS_WIDTH				= 600;					//进度条的总宽度

var networkUpdateFlag			= 0;					//0 not in network update,1 in network update
var remindOption				= -1;					//对应在updateRemindWords中的提示
var loadingImgs					= ["../images/Loading-01.png",
									"../images/Loading-02.png",
									"../images/Loading-03.png",
									"../images/Loading-04.png",
									"../images/Loading-05.png",
									"../images/Loading-06.png",
									"../images/Loading-07.png",
									"../images/Loading-08.png"];

var loadingTimer = 0;
var loadingCount = 0;


var factoryInfo;
var productInfoLiList;


var thdMenuRightSpanList;
var thdMenuRightLiList;
var buttonsDivList;

var showItemNum = 0;

var menuList = 
[
	{name:"By USB",			param:function(){showByUSB();}			,showFlag:1},
	{name:"By network",		param:function(){showByNetwork();}		,showFlag:1},
	{name:"By channel",		param:function(){showByChannel();}		,showFlag:1}
];


function initSetRegion()
{
	if (top.uiColourStyleFlag == 1)
	{
		var classlist;
		classlist = document.getElementsByClassName("dialogButtonFocus");
		for (var i = 0; i < classlist.length; i++) {
			//classlist[i].setAttribute("class","progressImgOtherStyle");
			classlist[i].style.border = "solid medium" + top.uiColourStyle;
			//classlist[i].className = "progressImgOtherStyle";
		}
		classlist = document.getElementById("loadingCancel");
		classlist.style.border = "solid medium" + top.uiColourStyle;
	}
}

function init()
{
    top.initTextDirection(window);
	initSetRegion();
	timeoutInit();
	
	thdMenuRightLiList = $("thdMenuRight").getElementsByTagName("li");//得到所有的li，一共四个，算上标题
	thdMenuRightSpanList = $("thdMenuRight").getElementsByTagName("span");//得到所有的span，一共四个，算上标题
	buttonsDivList = $("buttons").getElementsByTagName("div");//remind 弹出框使用
	productInfoLiList = $("productInfo").getElementsByTagName("li");//产品信息框使用,得到所有的li，一共四个
    $("titleNameSpan").innerHTML = softUpdateTitleWords[0];
	for(var i = 1; i < thdMenuRightLiList.length; i++)
	{
		thdMenuRightSpanList[i].innerHTML = softUpdateTitleWords[i];
	}
	
	
	updateUI();
	
	
	list_position_h = 0;
	$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	addMouseListener();
	ttsRead();
	
}


//-----------0、初始化、更新界面------------
function updateUI()
{
	//1、重新得到数据
	updateItemValues();
	
	//2、根据数据设置showflag
	checkShowMenu();
	
	//3、为每个item重新赋值
	setValuesForItems();
	
	//4、显示每一个item
	showItems();
}


//1、重新得到数据--只有第一次会在后台拿数据，否则会有延时
function updateItemValues()
{
	factoryInfo = top.g_factory.getProductInfo();
	source = channel.inputSource;
	if(source == 1) /*&& setting.enableOADScan == 1去掉了，没有必要*/
	{
		channelUpdateEnable = 1;
	}
	else
	{                                   
		channelUpdateEnable = 0;
	}	
}


//2、根据初始值设置item的showflag标志位----是否显示，显示为1，不显示为0--------------
function checkShowMenu()
{
	//初始化，都显示
	for(var i = 0;i<menuList.length;i++)
	{
		menuList[i].showFlag = 1;
	}
	//只有泰国、新西南、马来西亚、AP、EU、AU才需要OAD升级; setting.enableOADScan == 1去掉了，没有必要
	if(source == 1 &&
		(top.isEUFlag == 1 ||
		top.isAPFlag == 1 ||
		top.isAUFlag == 1 ||
		top.g_channel.systemCountry == 36 ||
		top.g_channel.systemCountry == 26 ||
		top.g_channel.systemCountry == 134))
	{
		menuList[2].showFlag = 1;
	}
	else
	{
		menuList[2].showFlag = 0;
	}
	
}


//-----------3、给每个item赋值------------------------------
function setValuesForItems()
{
	if("true" == top.isSCBCFlag)	//SCBC隐藏projectName、manufacturer name
	{
		productInfoLiList[0].innerHTML = productInfoWords[0] + " : " + factoryInfo.swName;
		//productInfoLiList[1].innerHTML = productInfoWords[1] + " : "  + factoryInfo.chassis;
	}
	else
	{
		productInfoLiList[0].innerHTML = productInfoWords[0] + " : " + factoryInfo.swName;
		//productInfoLiList[1].innerHTML = productInfoWords[1] + " : "  + factoryInfo.projectName;
		//productInfoLiList[2].innerHTML = productInfoWords[2] + " : "  + setting.manufacturer;
		//productInfoLiList[3].innerHTML = productInfoWords[3] + " : "  + factoryInfo.chassis;
	}
}


//-----------4、根据showflag来显示内容-----------------------
function showItems()
{
	showItemNum = 0;
	
	thdMenuRightLiList[0].style.display = "block";//标题是一定显示的
	//设置item是否显示
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag == 1)
		{
			thdMenuRightLiList[i+1].style.display = "block";
			showItemNum ++;
		}
		else if(menuList[i].showFlag == 0)
		{
			thdMenuRightLiList[i+1].style.display = "none";
		}
		else
		{
			thdMenuRightLiList[i+1].style.display = "none";
		}
		
	}
}



function showByUSB()
{
	initLoading();
	setting.softwareUpdate(0);
}


function showByNetwork()
{
	parent.popWindow(3,"systemSetting/networkUpdate/networkUpdate.html");
	networkUpdateFlag = 1;
}


function showByChannel()
{
	initLoading();
	setting.softwareUpdate(2);
}



//-----------辅助函数：找到此item在所有item中的真实位置，并执行对应函数-----------
function executeFunction(positionTemp)
{
	var num=-1;
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag==1)
		{
			num++;
		}
		if(num==positionTemp)//找到此位置
		{
			menuList[i].param();//执行函数
			break;
		}
	}
}












function doEnter()
{
	if(focusOn == "menu")
	{		
		executeFunction(list_position_h);
	}
	else if(focusOn == "loading")
	{	
		setting.setEnableOADScan(0);		// lizhongyong 20140712 
		hideForm();
	}
	else if(focusOn == "form")
	{channel.testLog("remindOption = " + remindOption);
		switch(remindOption)
		{
			case 0://by network:Ethernet Cable Not Insert
			case 1://by network:No Access to the IP
			case 2://by network:Login Failed Potal
			case 3://by channel or by network:Not Get to Update Information
			case 5://by usb（暂时by channel升级也是靠USB的，所以当前by chanenl也会用到，更改以后应该不会了）:Please insert the usb flash drive
			case 6://by usb:Update file not found
				hideForm();
				break;
			case 4://by network or by channel:New Software is detected， do you want to upgrade?
				if(list_position_h == 0)//by usb
				{
					if(form_position_h == 0)
					{
						remindOption = 7;//updating start
						showWarn(remindOption,0);
						setTimeout(function(){setting.startUpdating(list_position_h)},1000);
					}
					else
					{
						hideForm();
					}
				}
				break;
			case 9://by channel or network find infomation,download it or not 
				if(form_position_h == 0)
				{
					remindOption = 10;//downloading
					showWarn(remindOption,0);
					setTimeout(function(){setting.startDownloadUpdateFile(list_position_h)},1000);
				}
				else
				{ 
					setting.cancelOadUpdate();		// lizhongyong 20140712 
					hideForm();
				}
				break;
			case 10://downloading
				//setting.stopDownloadUpdateFile(list_position_h);
				setting.cancelOadUpdate();		// lizhongyong 20140712 
				toBack();
				break;
			case 11://downloaded
				if(form_position_h == 0)
				{
					remindOption = 7;//updating start
					showWarn(remindOption,0);
					setTimeout(function(){setting.startUpdating(3)},1000);
				}
				else
				{
					var channelid = channel.currentIndex;
					channel.playByIndex(channelid);
					hideForm();
				}
				break;
			default:
				break;
		}
	}
}

function keyDownProcess(evt)
{
	var ret = true;
	var keycode = evt.which;
	
	if(focusOn == "menu")
	{
		switch (keycode)
		{
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
			default:
				top.keyDownProcess(evt);
				break;
		}
	}
	else if(focusOn == "form" || focusOn == "loading")
	{
		switch (keycode)
		{
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
				if(remindOption == 7 || remindOption == 8 || remindOption == 10 || remindOption == 13)
				{
					return;
				}
				toBack();		// lizhongyong 20140714 disable back key
				ttsRead();
				break;
			case top.VK_MENU:
			case top.VK_HOME:
				top.keyDownProcess(evt);
				break;
			case top.VK_POWER:
			case top.VK_EXIT:	// lizhongyong 20140714 disable exit key
				if(remindOption == 7 || remindOption == 8 || remindOption == 10 || remindOption == 13)
				{
					return ;
				}
				else
				{
					top.keyDownProcess(evt);
				}
				break;
			default:
				break;
		}
	}
	return ret;
}

function $(id)
{
    return document.getElementById(id);
}

function toDown()
{
	if(focusOn == "menu")
	{
		if(list_position_h >= showItemNum-1)
		{
			list_position_h = 0;
		}
		else
		{
			list_position_h++;
		}
		$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	}
}

function toUp()
{
	if(focusOn == "menu")
	{
		if(list_position_h <= 0)
		{
			list_position_h = showItemNum-1;
		}
		else
		{
			list_position_h--;
		}
		$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	}
}


function toBack()
{
	if(focusOn == "menu")
	{
		parent.returnPage(2);
	}
	else if(focusOn == "form" || focusOn == "loading")
	{
		hideForm();
	}
}
function toLeft()
{
	if(focusOn == "menu")
	{
		toBack();
	}
	else if(focusOn == "form")
	{
		if(remindOption == 4 || remindOption == 9 || remindOption == 11)
		{
			if(form_position_h == 0)
			{
				form_position_h = 1;
			}
			else
			{
				form_position_h = 0;
			}
			$("remindFocus").style.left = FORM_START + form_position_h*FORM_STEP + "px";
		}
	}
}
function toRight()
{
	if(focusOn == "menu")
	{
		doEnter();
	}
	else if(focusOn == "form")
	{
		if(remindOption == 4 || remindOption == 9 || remindOption == 11)
		{
			if(form_position_h == 0)
			{
				form_position_h = 1;
			}
			else
			{
				form_position_h = 0;
			}
			$("remindFocus").style.left = FORM_START + form_position_h*FORM_STEP + "px";
		}
	}
}


/*
描述：根据remind flag显示不同的提示
参数：remindFlag：0 Ethernet cable not insert;1 net connecting fail;2 login fiald potal;
3  not get update infomation;4 usb get update infomation;5 usb not insert;
6 usb update file not found;7 updating,don't power off tv; 8 updating success;
9 channel or network get update infomation;10 downloading...;11 download complete
12 updating failed
softVersion:software version
*/
function showWarn(remindFlag,softVersion)
{
	channel.testLog("remindOption = " + remindOption);
	
	
	if(remindFlag == 4)
	{
		buttonsDivList[0].innerHTML = buttonWords[2];
		buttonsDivList[1].innerHTML = buttonWords[1];
		buttonsDivList[0].style.left = "200px";
		buttonsDivList[1].style.left = "450px";
		buttonsDivList[1].style.display = "block";
		form_position_h = 0;
		$("remindFocus").style.left = FORM_START + form_position_h*FORM_STEP + "px";

		$("remindContent").innerHTML = updateRemindWords[remindFlag].replace(/XXXX/,setting.newSoftwareName());
		$("buttons").style.display = "block";
		$("progress").style.display  = "none";
	}
	else if(remindFlag == 9)
	{
		buttonsDivList[0].innerHTML = buttonWords[0];
		buttonsDivList[1].innerHTML = buttonWords[1];
		buttonsDivList[0].style.left = "200px";
		buttonsDivList[1].style.left = "450px";
		buttonsDivList[1].style.display = "block";
		form_position_h = 0;
		$("remindFocus").style.left = FORM_START + form_position_h*FORM_STEP + "px";
		
		$("remindContent").innerHTML = updateRemindWords[remindFlag].replace(/XXXX/,softVersion);
		$("buttons").style.display = "block";
		$("progress").style.display  = "none";
	}
	else if(remindFlag == 11)
	{
		buttonsDivList[0].innerHTML = buttonWords[2];
		buttonsDivList[1].innerHTML = buttonWords[1];
		buttonsDivList[0].style.left = "200px";
		buttonsDivList[1].style.left = "450px";
		buttonsDivList[1].style.display = "block";
		form_position_h = 0;
		$("remindFocus").style.left = FORM_START + form_position_h*FORM_STEP + "px";
		
		$("remindContent").innerHTML = updateRemindWords[remindFlag];
		$("buttons").style.display = "block";
		$("progress").style.display  = "none";
	}
	else if(remindFlag == 3 || remindFlag == 5 || remindFlag == 6)
	{
		buttonsDivList[0].innerHTML = okCancelWords[0];
		buttonsDivList[0].style.left = "324px";
		buttonsDivList[1].style.display = "none";
		form_position_h = 0;
		$("remindFocus").style.left = "324px";
		
		$("remindContent").innerHTML = updateRemindWords[remindFlag];
		$("buttons").style.display = "block";
		$("progress").style.display  = "none";
	}
	else if(remindFlag == 7)
	{
		$("remindContent").innerHTML = updateRemindWords[remindFlag];
		$("buttons").style.display = "none";
		/*$("progressLeft").style.width = "0px";
		$("progressRight").style.width = PROGRESS_WIDTH + "px";
		$("progressValue").innerHTML = "0%";
		$("progress").style.display  = "block";*/
	}
	else if(remindFlag == 8 || remindFlag == 12)
	{
		$("remindContent").innerHTML = updateRemindWords[remindFlag];
		$("buttons").style.display = "none";
		$("progress").style.display  = "none";
		//setTimeout("toBack()",3000);
	}
	else if(remindFlag == 10)
	{
		buttonsDivList[0].innerHTML = okCancelWords[1];		// ivan.li 20140714 
		buttonsDivList[0].style.left = "324px";
		buttonsDivList[1].style.display = "none";
		form_position_h = 0;
		$("remindFocus").style.left = "324px";
		
		$("remindContent").innerHTML = updateRemindWords[remindFlag];
		$("progressLeft").style.width = "0px";
		$("progressRight").style.width = PROGRESS_WIDTH + "px";
		$("progressValue").innerHTML = "0%";
		
		$("buttons").style.display = "block";
		$("progress").style.display  = "block";
	}
	$("remindTitle").innerHTML = softUpdateTitleWords[0] + " " + softUpdateTitleWords[list_position_h + 1];
	
	parent.hiddenPage(2);
	top.showDialogPosition($("remindForm"),800,300,1920,1080,0,0);
	$("remindForm").style.display="block";
	$("productInfo").style.display = "none";
	$("loadingForm").style.display = "none";
	focusOn = "form";
	ttsRead();
}

function hideForm()
{
	if(loadingTimer)
	{
		clearTimeout(loadingTimer);
	}
	top.restartTimeout();
	remindOption = -1;
	form_position_h = 0;
	parent.showPage(2);
	$("remindForm").style.display="none";
	$("productInfo").style.display = "block";
	$("loadingForm").style.display = "none";
	focusOn = "menu";//焦点回到主菜
}

function initLoading()
{
	top.stopTimeout();
	$("loadingTitle").innerHTML = softUpdating;
	$("loadingContent").innerHTML = updateRemindWords[13];
	$("loadingCancel").innerHTML = okCancelWords[1];
	parent.hiddenPage(2);
	top.showDialogPosition($("loadingForm"),800,360,1920,1080,0,0);
	$("remindForm").style.display = "none";
	$("productInfo").style.display = "none";
	$("loadingForm").style.display = "block";
	focusOn = "loading";
	startloading();
}





/*
描述：开始加载等待
*/
function startloading()
{
	$('loadingImg').src = loadingImgs[loadingCount%8];
	loadingCount++;
	loadingTimer=setTimeout("startloading()",300);
}


function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyDownProcess;
}
function notifyProcess(evt)
{
    var msg = evt.which;
	var value = evt.modifiers;
	switch(msg)
	{
		case top.E_UPDATE_ETHERNET_CABLE_NOT_INSERT:
		case top.E_WIRE_CONNECT_FAILURE:
		case top.E_UPDATE_LOGIN_FAILED_POTAL:
		case top.E_NETWORK_UPDATE_GET_UPDATED_INFORMATION:
			//网络消息不处理
	        break;
		case top.E_UPDATE_NOT_GET_TO_UPDATE_INFORMATION:
			if(focusOn == "form" || focusOn == "loading")
			{
				remindOption=3;
				showWarn(remindOption,value);
			}
	        break;
		case top.E_UPDATE_CHANNEL_GET_UPDATED_INFORMATION:
			//channel.testLog("in notify get update infomation focusOn = " + focusOn);
			if(focusOn == "form" || focusOn == "loading")
			{
				remindOption = 9;
				showWarn(remindOption,value);
			}
			break;
		case top.E_PVR_DISK_UNPLUG://by usb 
			if(focusOn == "form" || focusOn == "loading")
			{
				remindOption=5;
				showWarn(remindOption,value);
			}
	        break;
		case top.E_UPDATE_FILE_NOT_FOUND://by usb
			if(focusOn == "form" || focusOn == "loading")
			{
				remindOption=6;
				showWarn(remindOption,value);
			}
			break;
		case top.E_UPDATE_USB_GET_UPDATE_INFO://by usb
			if(focusOn == "form" || focusOn == "loading")
			{
				remindOption=4;
				showWarn(remindOption,value);
			}
			break;
		case top.E_UPDATE_UPDATING_PROGRESS:
			if(focusOn == "form" || focusOn == "loading")
			{
				if (value >=0 && value <= 100) 
				{
					var left = parseInt((value*PROGRESS_WIDTH)/100,10);
					$("progressLeft").style.width = left + "px";
					$("progressRight").style.width = (PROGRESS_WIDTH - left) + "px";
					$("progressValue").innerHTML = value+"%";
				}
			}
			break;
		case top.E_UPDATE_DOWNLOAD_PROGRESS:
	   		if(focusOn == "form" || focusOn == "loading")
			{
				if (value >=0 && value <= 100) 
				{
					var left = parseInt((value*PROGRESS_WIDTH)/100,10);
					$("progressLeft").style.width = left + "px";
					$("progressRight").style.width = (PROGRESS_WIDTH - left) + "px";
					$("progressValue").innerHTML = value+"%";
				}
			}
	        break;
		case top.E_UPDATE_DOWNLOAD_COMPLETE:
			if(focusOn == "form" || focusOn == "loading")
			{
				remindOption = 11;
				showWarn(remindOption,value);
			}
			break;
		case top.E_UPDATE_DOWNLOAD_FAILED://没有必要发该消息，download失败后自动再次download
			if(focusOn == "form" || focusOn == "loading")
			{
			}
			break;
		case top.E_UPDATE_VERIFIED_FAILED:
		{
			remindOption = 12;
			showWarn(remindOption,value);
			break;
		}
		case top.E_UPDATE_RESULT:
		{
			if(value == 1)
			{
				remindOption = 8;
				showWarn(remindOption,value);
			}
			else if(value == 0)
			{
				remindOption = 12;
				showWarn(remindOption,value);
			}
			break;
		}
		case top.E_NETWORK_CONNECT_TEST_SUCCESS:
		case top.E_NETWORK_CONNECT_TEST_FAIL:
		case top.E_UPDATE_CHANNALE_GET_FUTURE_UPDATED_INFO:
			top.systemEventProc(evt);
			break;
		case top.E_STR_SCREEN_OFF_EX:
			top.systemEventProc(evt);
			break;
		case top.E_STR_SCREEN_OFF:

			if(top.preTempPage=="homePage"||top.preTempPage=="media"||top.g_temp=="homePage")
			{
				top.$("otherPage").src = "";
				top.$("operatePage").src = "";
				top.resumeFocus();
				top.setFrameFocusPage("main");
			}
			else
				top.jumpPage();
			top.systemEventProc(evt);
			break;
		default:
			if(focusOn == "form" || focusOn == "loading")
			{
				//do nothing add sun jian ping;
			}
			else
			{
				top.systemEventProc(evt);
			}
			break;
	}
}



function addMouseListener()
{
	document.body.onmousedown = function(evt)
	{
		evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2)
		{
			if(focusOn == "menu")
			{
				toBack();//right key
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	};
	
	for(var i = 1; i < 4; i++)
	{
		thdMenuRightLiList[i].setAttribute("newAttr",i);
		thdMenuRightLiList[i].onmousedown = function(evt)
		{
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0)//left key
			{
				if(focusOn == "menu")
				{
					list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
					$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		};
	}	
	
	
	for(var i = 0; i < 2; i++)
	{
		buttonsDivList[i].setAttribute("newAttr",i);
		buttonsDivList[i].onmousedown = function(evt)
		{
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0)//left key
			{
				if(focusOn == "form")
				{
					if(remindOption == 4 || remindOption == 9 || remindOption == 11)
					{
						form_position_h = parseInt(this.getAttribute("newAttr"));
						$("remindFocus").style.left = FORM_START + form_position_h*FORM_STEP + "px";
					}
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		};
	}
	
	
	$("remindFocus").onmousedown = function(evt)
	{
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0)//left key
		{
			if(focusOn == "form")
			{
				doEnter();
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	};
	
	
	
	$("loadingCancel").onmousedown = function(evt)
	{
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0)//left key
		{
			if(focusOn == "loading")
			{
				doEnter();
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	};

}

var lastFocusName = "firstFlag";
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
	top.ttsLog("parent.currentShowMenu=" + parent.currentShowMenu);
	top.ttsLog("remindOption=" + remindOption);
	var ttsStr = "";
	var currentStatus = "";
	var currentName = findName(list_position_h);
	top.ttsLog("currentName=" + currentName);
	var ttsName = "";
	if(("menu" == focusOn) && (2 == parent.currentShowMenu))
	{
		switch(currentName)
		{
			case "By USB":
				ttsName = softUpdateTitleWords[1] + ",";
				currentStatus = "";
				break;
			case "By network":
				ttsName = softUpdateTitleWords[2] + ",";
				currentStatus = "";
				break;
			case "By channel":
				ttsName = softUpdateTitleWords[3] + ",";
				currentStatus = "";
				break;
			default:
				ttsName = "";
				currentStatus = "";
				break;
		}
	}
	else if((("loading" == focusOn) || ("form" == focusOn)) && (-1 != remindOption))
	{
		top.ttsLog("form_position_h=" + form_position_h);
		ttsName = $("remindContent").innerHTML;
		currentStatus = top.netUpdateButtonText[form_position_h + 1];
		if(lastFocusName == currentName && lastFocusType == focusOn)
		{
			ttsName = "";
		}
		else
		{
			ttsName = ttsName + ",";
		}
	}
	else if(("loading" == focusOn) && ("By channel" == currentName))
	{
		top.ttsLog("form_position_h=" + form_position_h);
		ttsName = $("loadingContent").innerHTML + ",";
		currentStatus = $("loadingCancel").innerHTML;
	}
	/*
	 else if(1 == parent.currentShowMenu)
	 {
	 ttsName = top.sysOptions[5];
	 currentStatus = "";
	 }
	 */
	else
	{
		top.ttsLog("focusOn=" + focusOn);
	}
	if("firstFlag" == lastFocusName)	//第一进入时播报软件版本
	{
		currentStatus = currentStatus + productInfoWords[0] + "," + factoryInfo.swName;
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