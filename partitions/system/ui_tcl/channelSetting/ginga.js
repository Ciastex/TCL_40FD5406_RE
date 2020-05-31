/******************** created by chenhua ***********************/
var gingaTitleWords 			= [top.chOptions[9],top.gingaOptions[0],top.gingaOptions[1]];
var offOnWords					= top.offOn;

var setting 					= top.g_setting;
var focusOn 					= "menu"; 				//menu,gingaStatus
var list_position_h				= 0;
var form_position_h				= 0;
var gingaEnable					= 0;					//0 off,1 on

var SUB_MENU_START 				= 160;					//三级级菜单焦点移动起始位置
var SUB_MENU_STEP 				= 70;					//三级级主菜单焦点移动的step
var FORM_STEP					= 80;					//弹出框焦点移动的step
var Ginga   = top.g_ginga;
var mainFocus                   = ["../images/Focus_Frame/Focus-1.png","../images/Focus_Frame/Focus-2.png"];
document.onsystemevent 				= notifyProcess;
function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
	top.timeoutFuc.keydownFuc = keyDownProcess;
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

function $(id)
{
    return document.getElementById(id);
}

function toDown()
{
	if(focusOn == "menu")
	{
		if(gingaEnable == 0)
		{
			return;
		}
		else
		{
			if(list_position_h >= 1)
			{
				list_position_h = 0;
			}
			else
			{
				list_position_h++;
			}
			$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
		}
		top.doEleScrForNoOption(listFirstSpans,list_position_h, 1);
	}
	else if(focusOn == "gingaStatus")
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
	}
}
function toUp()
{
	if(focusOn == "menu")
	{
		if(gingaEnable == 0)
		{
			return;
		}
		else
		{
			if(list_position_h <= 0)
			{
				list_position_h = 1;
			}
			else
			{
				list_position_h--;
			}
			$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
		}
		top.doEleScrForNoOption(listFirstSpans,list_position_h, -1);
	}
	else if(focusOn == "gingaStatus")
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
	}
}


function doEnter()
{
	if(focusOn == "menu")
	{
		if(list_position_h == 0)
		{
			$("thdListFocus").src=mainFocus[1];
			initGingaStatus();
			focusOn = "gingaStatus";
		}
		else if(list_position_h == 1)
		{
			parent.jumpPage(3,"channelSetting/gingaAppList.html");
		}
	}
	else if(focusOn == "gingaStatus")
	{
		$("thdListFocus").src=mainFocus[0];
		gingaEnable = form_position_h;
		console.log("[zhangljun][ginga.js][doEnter()] gingaEnable = "+gingaEnable);
        Ginga.isEnable = gingaEnable;//Ginga国家设置放在切国家时实现
	//	top.GingaObj.isEnable = gingaEnable;

		$('gingaStatus').innerHTML = offOnWords[gingaEnable];
		initMenuOfGingaStatus(gingaEnable);
		$("listForm").style.display = "none";
		focusOn = "menu";
	}

}
function toBack()
{
	if(focusOn == "menu")
	{
		parent.returnPage(2);
	}
	else if(focusOn == "gingaStatus")
	{
		$("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
}
function toLeft()
{
	toBack();
}

function toRight()
{
	doEnter();
}

/*
描述：初始化subtitle enable 列表
参数：
返回值：
全局变量：
*/
function initGingaStatus()
{
	form_position_h = gingaEnable;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
}


/*
*描述：根据subtitle是否可用的状态刷新菜单
*/
function initMenuOfGingaStatus(gingaStatus)
{
	if(gingaStatus == 0)//ginga unable
	{
		thdMenuRightLiList[2].style.display = "none";
	}
	else
	{
		thdMenuRightLiList[2].style.display = "block";
	}
}

var listFormLiList;
var thdMenuRightLiList;
var listFirstSpans;

function init()
{
    top.initTextDirection(window);
	timeoutInit();
	thdMenuRightLiList = $("thdMenuRight").getElementsByTagName("li");
	var thdMenuRightSpanList = $("thdMenuRight").getElementsByTagName("span");
	listFirstSpans = $("thdMenuRight").getElementsByClassName("listFirstProperty");
    $("titleNameSpan").innerHTML = gingaTitleWords[0];
    for(var i = 1; i < 3; i++)
	{
		thdMenuRightSpanList[i].innerHTML = gingaTitleWords[i];
	}
	
	gingaEnable = Ginga.isEnable;
	$("gingaStatus").innerHTML = offOnWords[gingaEnable];
	
	initMenuOfGingaStatus(gingaEnable);
	
	list_position_h = 0;
	$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	
	listFormLiList = $("listForm").getElementsByTagName("li");
	top.doEleScrForNoOption(listFirstSpans,list_position_h, 0);
	ttsRead();
}

var ONE_PAGE_CHANNEL_SUM		= 9; 					//每一页最多含有的ginga app数量
var CHANNEL_POSITION_START 		= 200;					//ginga list起始坐标

function initGingaList()
{
	nowPage = 0;
	gingaList = Ginga.getAppList();
	listSum = gingaList.length;
	console.log("[zhangljun][ginga.js]initGingaList() listSum = " + listSum);
	
	if(listSum <= ONE_PAGE_CHANNEL_SUM)
	{
		pageSum = 1;
		$("fifthContent").style.height = (CHANNEL_POSITION_START + listSum*SUB_MENU_STEP) + "px";
	}
	else
	{
		pageSum = parseInt(listSum/ONE_PAGE_CHANNEL_SUM) + 1;
		$("fifthContent").style.height = (CHANNEL_POSITION_START + ONE_PAGE_CHANNEL_SUM*SUB_MENU_STEP) + "px";
	}
	
	//判断当前频道是否够显示一页
	for (var i = 0; i < ONE_PAGE_CHANNEL_SUM; i++)
	{
		if (i < listSum)
		{
			console.log("[zhangljun][ginga.js]initGingaList() gingaList["+i+"].name = " + gingaList.name);
			fifthMenuRightDivList[i + 1].innerHTML = channelList[i].name;
		}
		else
		{
			break;
		}
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
	var ttsStr = "";
	var currentStatus = "";
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

	if(focusOn == "menu" && 2 == parent.currentShowMenu)
	{
		switch(list_position_h)
		{
			case 0:
				ttsName = top.gingaOptions[0] + ",";
				currentStatus = offOnWords[gingaEnable];
				break;
			case 1:
				ttsName = top.gingaOptions[1] + ",";
				currentStatus = "";
				break;
			default:
				ttsName = "";
				currentStatus = "";
				break;
		}
	}
	else if(focusOn == "gingaStatus")
	{
		ttsName = "";
		currentStatus = offOnWords[form_position_h];
		isSelected(offOnWords[gingaEnable] == currentStatus);
	}
	else
	{
		ttsName = "";
		currentStatus = "";
	}

	ttsStr = ttsName + currentStatus;
	if("" != ttsStr)
	{
		top.ttsLog("ttsStr=" + ttsStr);
		//top.ttsLog("focusOn=" + focusOn);
		//top.ttsLog("presetPositionH="+presetPositionH);
		top.setTTSSay(top.SPEECH_TYPE_FLUSH, ttsStr);
	}
}