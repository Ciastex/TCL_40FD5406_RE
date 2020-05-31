/******************** created by chenhua ***********************/
var advancedTitleWords 			= [top.sysOptions[10],top.sysAdOptions[0],top.sysAdOptions[1],top.sysAdOptions[2]];
var offOnWords					= top.offOn;
var registWords					= top.sysRegistDes;
var dregistWords 				= top.sysDregistDes;
var okCancelWords				= top.okCancel;


var setting 					= top.g_setting;
var channel			 			= top.g_channel;
var tLink						= 0;
var focusOn 					= "menu"; 				//menu,tLink
var list_position_h				= 0;
var form_position_h				= 0;

var SUB_MENU_START 				= 130;					//三级级菜单焦点移动起始位置
var SUB_MENU_STEP 				= 70;					//三级级主菜单焦点移动的step
var FORM_STEP					= 80;					//弹出框焦点移动的step
var DIALOG_START				= 100;
var DIALOG_STEP					= 250;
var mainFocus                   = ["../images/Focus_Frame/Focus-1.png","../images/Focus_Frame/Focus-2.png"];
//var divxActiveStatus           = setting.divxActiveStatus();
document.onsystemevent 				= notifyProcess;
var hideDivxMenuFlag			= false;

var PROGRESS_START_LEFT_OFFSET = 480 + 310;//进度条容器开始位置相对于framework的左偏移，480是进度条的父容器的相对framwork的左偏移，310是进度条容器相对于进度条父容器的左偏移

var listFormLiList;
var thdMenuRightLiList;


var showItemNum = 0;

var menuList = 
[
	{name:"DivX(R) registration",		param:function(){showRegistration();	}		,showFlag:0},//pingbi dvix
	{name:"DivX(R) deregistration",		param:function(){showDeregistration();	}		,showFlag:0},
	{name:"T-Link",						param:function(){showTLink();			}		,showFlag:1}
];



function init()
{
    top.initTextDirection(window);
	timeoutInit();
	
	
	thdMenuRightLiList = $("thdMenuRight").getElementsByTagName("li");//得到所有的li，一共四个，算上标题
	var thdMenuRightSpanList = $("thdMenuRight").getElementsByTagName("span");//得到所有的span，一共四个，算上标题
	listFormLiList = $("listForm").getElementsByTagName("li");//弹出列表框 5个 li
	
	for(var i = 0; i < thdMenuRightLiList.length; i++)
	{
		thdMenuRightSpanList[i].innerHTML = advancedTitleWords[i];
	}
	
	
	
	updateUI();
	
	
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
	tLink = setting.enableTLink;	
	
	if(top.isAUFlag)
	{
		hideDivxMenuFlag = true;
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
		
	if(top.isAUFlag)
	{
		menuList[1].showFlag = 0;
		menuList[2].showFlag = 0;
	}
	else //pingbi dvix
	{
		menuList[0].showFlag = 0;
		menuList[1].showFlag = 0;
	}
	
}


//-----------3、给每个item赋值------------------------------
function setValuesForItems()
{
	$("tLinkStatus").innerHTML = offOnWords[tLink];
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




function showRegistration()
{
	
	if(setting.divxActiveStatus() == 1)
	{
		if(!hideDivxMenuFlag)
		{
			parent.popWindow(3,"systemSetting/deregistrationConfirmation.html");
		}
		else
		{
			initTLink();
			focusOn = "tLink";
		}
	}
	else if((setting.divxActiveStatus() == 0) || (setting.divxActiveStatus() == 2))
	{
		if(!hideDivxMenuFlag)
		{
			parent.popWindow(3,"systemSetting/registration.html");
		}
		else
		{
			initTLink();
			focusOn = "tLink";
		}
	}
	
	
	
}

function showDeregistration()
{
	if(setting.divxActiveStatus() == 1)
	{
		parent.popWindow(3,"systemSetting/deregistrationConfirmation.html");
	}
	else if((setting.divxActiveStatus() == 0) || (setting.divxActiveStatus() == 2))
	{
		parent.popWindow(3,"systemSetting/deregistration.html");
	}
	
}

function showTLink()
{
	initTLink();
	focusOn = "tLink";
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
	else if(focusOn == "tLink")
	{
		$("listForm").style.display = "none";
		$("thdListFocus").src=mainFocus[0];
		tLink = form_position_h;
		$("tLinkStatus").innerHTML = offOnWords[tLink];
		setting.enableTLink = tLink;
		focusOn = "menu";
	}
}













function keyDownProcess(evt)
{
	var ret = true;
	var keycode = evt.which;
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
	return ret;
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
	else if(focusOn == "tLink")
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
	else if(focusOn == "tLink")
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
}


function toBack()
{
	if(focusOn == "menu")
	{
		parent.returnPage(2);
	}
	else if(focusOn == "tLink")
	{
		$("listForm").style.display = "none";
		$("thdListFocus").src=mainFocus[0];
		focusOn = "menu";
	}
	else if(focusOn == "registration")
	{
		$("registForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn == "deregistration")
	{
		$("registForm").style.display = "none";
		focusOn = "menu";
	}
}
function toLeft()
{
	if(focusOn == "deregistration")
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("registFocus").style.left = DIALOG_START + DIALOG_STEP*form_position_h + "px";
	}
	else
	{
		toBack();
	}
}
function toRight()
{
	if(focusOn == "deregistration")
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("registFocus").style.left = DIALOG_START + DIALOG_STEP*form_position_h + "px";
	}
	else
	{
		doEnter();
	}
}
/*
描述：初始化T-Link
参数：
全局变量：form_position_h;tLink
*/
function initTLink()
{
	$("thdListFocus").src=mainFocus[1];
	form_position_h = tLink;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
}




function notifyProcess(evt)
{
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
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyDownProcess;
}

function $(id)
{
    return document.getElementById(id);
}


function addMouseListener()
{
	document.body.onmousedown = function(evt)
	{
		evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) //right key
		{
			toBack();
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	};
	
	//menu
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
					/*if(divxActiveStatus != 1)
					{
						if(parseInt(this.getAttribute("newAttr")) < 2)
						{
							list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
						}
						else if(parseInt(this.getAttribute("newAttr")) > 2)
						{
							list_position_h = parseInt(this.getAttribute("newAttr")) - 2;
						}
						else
						{
							top.timeoutFuc.osdTimeoutStartFuc();
							return;
						}
					}
					else*/ //yiling0811
					{
						list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
					}
					$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		};
	}
	
	//form
	for(var i = 0; i < 2; i++)
	{
		listFormLiList[i].setAttribute("newAttr",i);
		listFormLiList[i].onmousedown = function(evt)
		{
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0)//left key
			{
				if(focusOn == "tLink")
				{
					form_position_h = parseInt(this.getAttribute("newAttr"));
					$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		};
	}
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
	top.ttsLog("parent.currentShowMenu=" + parent.currentShowMenu);
	var ttsStr = "";
	var currentStatus = "";
	var currentName = findName(list_position_h);
	top.ttsLog("currentName=" + currentName);
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

	if(("menu" == focusOn) && (2 == parent.currentShowMenu))
	{
		switch(currentName)
		{
			case "DivX(R) registration":
				top.ttsLog("hideDivxMenuFlag=" + hideDivxMenuFlag + "   tLink=" + tLink);
				ttsName = advancedTitleWords[1] + ",";
				if(!hideDivxMenuFlag)
				{
					currentStatus = "";
				}
				else
				{
					currentStatus = offOnWords[tLink];
				}
				break;
			case "DivX(R) deregistration":
				ttsName = advancedTitleWords[2] + ",";
				currentStatus = "";
				break;
			case "T-Link":
				top.ttsLog("tLink=" + tLink);
				ttsName = advancedTitleWords[3] + ",";
				currentStatus = offOnWords[tLink];
				break;
			default:
				ttsName = "";
				currentStatus = "";
				break;
		}
	}
	else if("tLink" == focusOn)
	{
		top.ttsLog("tLink=" + tLink + " form_position_h=" + form_position_h);
		ttsName = "";
		currentStatus = offOnWords[form_position_h];
		isSelected(offOnWords[tLink] == currentStatus);
	}
	else if("deregistration" == focusOn)
	{
		ttsName = "";
		currentStatus = "";
	}
	else if(("menu" == focusOn) && (3 == parent.currentShowMenu))
	{
		parent.$("subMenu3").contentWindow.ttsRead();
	}
	else
	{
		top.ttsLog("focusOn=" + focusOn);
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