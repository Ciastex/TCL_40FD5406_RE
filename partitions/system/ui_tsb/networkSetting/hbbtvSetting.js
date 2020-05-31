/******************** created by huangzhming HBBTV2.0***********************/
var hbbtvTypeWords = [top.hbbtvWords[0],top.hbbtvWords[1],top.hbbtvWords[2],top.hbbtvWords[3],top.hbbtvWords[4],top.hbbtvWords[5]];
var hbbtvTrackingWords      = [top.hbbtvTrackingWords[0],top.hbbtvTrackingWords[1],top.hbbtvTrackingWords[2]];
var offOnWords	      = top.offOn;

var hbbtvTitleWords = hbbtvTypeWords;
var listMaxNum	  = hbbtvTitleWords.length - 1;

var Hbbtv = 0;
var Cookie	= 0;
var ThridPartyCookie			= 0;
var DeviceID			= 0;
var Tracking			= 0;

var list_position_h 		= 0;			//主界面坐标
var form_position_h			= 0;			//弹出框焦点位置
var focusOn					= "menu";		//menu,Hbbtv;Cookie;ThridPartyCookie;DeviceID;Tracking

var SUB_MENU_START 			= 160;			//二级级菜单焦点移动起始位置
var SUB_MENU_STEP 			= 70;			//二级级主菜单焦点移动的step
var FORM_STEP				= 80;			//弹出框焦点移动的step

var mainFocus               = ["../images/Focus_Frame/Focus-1.png","../images/Focus_Frame/Focus-2.png"];

var setting 				= top.g_setting;
document.onsystemevent = notifyProcess;

var menuList = [
    {name:hbbtvTitleWords[1],func:function(){doHbbTVSettings();},showFlag:1},
    {name:hbbtvTitleWords[2],func:function(){doCookies();},showFlag:1},
    {name:hbbtvTitleWords[3],func:function(){doThridPartyCookie();},showFlag:1},
    {name:hbbtvTitleWords[4],func:function(){doDeviceID();},showFlag:1},
    {name:hbbtvTitleWords[5],func:function(){doTracking();},showFlag:1},
]

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
		case top.VK_LEFT:
			toLeft();
			ret = false;
			break;  
		case top.VK_RIGHT:
			toRight();
			ret = false;
			break;
		case top.VK_BACK:
			toBack();
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
        list_position_h = findNextPosition(list_position_h,0);
        $("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
        top.doEleScrForNoOption(listFirstSpans,list_position_h, 1);
    }
    else if(focusOn == "Hbbtv")
	{
		if(form_position_h >= (offOnWords.length - 1))
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
	else if(focusOn == "Cookie")
	{
		if(form_position_h >= offOnWords.length - 1)
		{
			form_position_h = 0;
		}
		else
		{
			form_position_h++;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
	else if(focusOn == "ThridPartyCookie")
    {
        if(form_position_h == offOnWords.length - 1)
        {
            form_position_h = 0;
        }
        else
        {
            form_position_h++;
        }
        $("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
        top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
    }
    else if(focusOn == "Tracking")
    {
        if(form_position_h == hbbtvTrackingWords.length - 1)
        {
            form_position_h = 0;
        }
        else
        {
            form_position_h++;
        }
        $("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
        top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
    }
}
function toUp()
{
	if(focusOn == "menu")
	{
		list_position_h = findNextPosition(list_position_h,1);
		$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
		top.doEleScrForNoOption(listFirstSpans,list_position_h, -1);
	}
	else if(focusOn == "Hbbtv")
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
	else if(focusOn == "Cookie")
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
    else if(focusOn == "ThridPartyCookie")
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
    else if(focusOn == "Tracking")
    {
        if(form_position_h == 0)
        {
            form_position_h = hbbtvTrackingWords.length - 1;
        }
        else
        {
            form_position_h--;
        }
        $("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
        top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
    }
}
function doEnter()
{
	if(focusOn == "menu")
	{
		findFunction(list_position_h);
	}
	else if(focusOn == "Hbbtv")
	{
		$("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		Hbbtv = form_position_h;
		setting.hbbTVMode = Hbbtv;
        prepareMenuShow();
        refreshMenuShow();
		$("Hbbtv").innerHTML = offOnWords[Hbbtv];
		focusOn = "menu";
	}
	else if(focusOn == "Cookie")
	{
		$("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		Cookie = form_position_h;
		setting.hbbtvCookieMode = Cookie;
        prepareMenuShow();
        refreshMenuShow();
		$("Cookie").innerHTML = offOnWords[form_position_h];
		focusOn = "menu";
	}
	else if(focusOn == "ThridPartyCookie")
	{
		$("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		ThridPartyCookie = form_position_h;
		setting.hbbtvThridPartyCookieMode = ThridPartyCookie;
		$("ThridPartyCookie").innerHTML = offOnWords[form_position_h];
		focusOn = "menu";
	}
    else if(focusOn == "Tracking")
    {
        $("thdListFocus").src=mainFocus[0];
        $("listForm").style.display = "none";
        Tracking = form_position_h;
        setting.hbbtvTracking = Tracking;
        $("Tracking").innerHTML = hbbtvTrackingWords[form_position_h];
        focusOn = "menu";
    }
}
function toBack()
{
	if(focusOn == "menu")
	{
		parent.returnPage(2);
	}
	else if (focusOn == "DeviceIDPop")
	{
        $("hbbtvPopWin").style.display="none";
        focusOn = "menu";
        parent.showPage(2);
	}
	else
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

function findNextPosition(curPosition,dir) //dir: 0:next, 1:previous
{
	var nextPosition = 0;
	if(dir == 0)
	{
		if(curPosition >= listMaxNum - 1)
		{
			nextPosition = 0;
		}
		else
		{
			nextPosition = curPosition + 1;
		}
	}
	else
	{
		if(curPosition <= 0)
		{
			nextPosition = listMaxNum - 1;
		}
		else
		{
			nextPosition = curPosition - 1;
		}
	}
	return nextPosition;
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
            menuList[i].func();
            break;
        }
    }
}

function doHbbTVSettings()
{
    $("thdListFocus").src=mainFocus[1];
    {
        form_position_h = Hbbtv;
    }
    var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
    var leftOffset = 778;
    top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,offOnWords.length,form_position_h,0);
    focusOn = "Hbbtv";
}


function doCookies()
{	
	$("thdListFocus").src=mainFocus[1];
	form_position_h = Cookie;

	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,offOnWords.length,form_position_h,0);
	focusOn = "Cookie";
}

function doThridPartyCookie()
{
	$("thdListFocus").src=mainFocus[1];
	form_position_h = ThridPartyCookie;

	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,offOnWords.length,form_position_h,0);
	focusOn = "ThridPartyCookie";
}

function doTracking()
{
    $("thdListFocus").src=mainFocus[1];
    form_position_h = Tracking;

    var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
    var leftOffset = 778;
    top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,hbbtvTrackingWords,hbbtvTrackingWords.length,form_position_h,0);
    focusOn = "Tracking";
}

function doDeviceID()
{
    parent.hiddenPage(2);
    $("hbbtvPopWin").style.display="block";
    $("popContent").innerHTML="DeviceID:"+setting.hbbtvDeviceID;
    focusOn = "DeviceIDPop";
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

function setShowFlagByName(name, flag)
{
    switch(name)
    {
        case "Hbbtv":
            menuList[0].showFlag = flag;
            break;
        case "Cookie":
            menuList[1].showFlag = flag;
            break;
        case "ThridPartyCookie":
            menuList[2].showFlag = flag;
            break;
        case "Device ID":
            menuList[3].showFlag = flag;
            break;
        case "Tracking":
            menuList[4].showFlag = flag;
            break;
        default:
            channel.testLog("HbbTV setting: setShowFlagByName, wrong show flag name, it should not happen!! name = "+ name);
            break;
    }
}

function getShowFlagByName(name)
{
    var flag = 1;
    switch(name)
    {
        case "Hbbtv":
            flag = menuList[0].showFlag;
            break;
        case "Cookie":
            flag = menuList[1].showFlag;
            break;
        case "ThridPartyCookie":
            flag = menuList[2].showFlag;
            break;
        case "Device ID":
            flag = menuList[3].showFlag;
            break;
        case "Tracking":
            flag = menuList[4].showFlag;
            break;
        default:
            channel.testLog("HbbTV setting: getShowFlagByName, wrong show flag name, it should not happen!! name = "+name);
            break;
    }
    return flag;
}

function initHbbtvValue()
{
    Hbbtv = setting.hbbTVMode;
    Cookie = setting.hbbtvCookieMode;
    ThridPartyCookie = setting.hbbtvThridPartyCookieMode;
    Tracking = setting.hbbtvTracking;
    setting.hbbtvUpdateDeviceID();
}

function prepareMenuShow()
{
    var listnum = 0;
    for(var i = 0; i < menuList.length; i++)//clean all setting
    {
        menuList[i].showFlag = 1;
    }
    if( Hbbtv == 0)
    {
        listMaxNum = 1;
        setShowFlagByName("Cookie", 0);
        setShowFlagByName("ThridPartyCookie", 0);
        setShowFlagByName("Device ID", 0);
        setShowFlagByName("Tracking", 0);
    }
    else
	{
		if ( Cookie == 0 )
        {
            listMaxNum = 4;
            setShowFlagByName("ThridPartyCookie", 0);
        }
        else
        	listMaxNum = 5;
	}
}


function refreshMenuShow()
{
	for(var i = 0; i < menuList.length; i++)
	{
		if(menuList[i].showFlag == 0)
		{
			thdMenuRightLiList[i+1].style.display = "none";
		}
		else
		{
			thdMenuRightLiList[i+1].style.display = "block";
		}
	}
	if(getShowFlagByName("Hbbtv") == 1)
	{
		$("Hbbtv").innerHTML =offOnWords[Hbbtv];
	}
	if(getShowFlagByName("Cookie") == 1)
	{
		$("Cookie").innerHTML = offOnWords[Cookie];
	}
	if(getShowFlagByName("ThridPartyCookie") == 1)
	{
		$("ThridPartyCookie").innerHTML = offOnWords[ThridPartyCookie];
	}
    if(getShowFlagByName("Tracking") == 1)
    {
        $("Tracking").innerHTML = hbbtvTrackingWords[Tracking];
    }
	if(list_position_h > listMaxNum - 1)
	{
		list_position_h = listMaxNum - 1;
		$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	}
}

var thdMenuRightSpanList;
var thdMenuRightLiList;
var listFormLiList;
var listFirstSpans;
function init()
{
    top.initTextDirection(window);
	timeoutInit();

	thdMenuRightLiList = $("thdMenuRight").getElementsByTagName("li");
	thdMenuRightSpanList = $("thdMenuRight").getElementsByTagName("span");

	for(var i = 0; i < thdMenuRightLiList.length; i++)
	{
		thdMenuRightSpanList[i].innerHTML = hbbtvTitleWords[i];
	}

    initHbbtvValue();
    prepareMenuShow();
	refreshMenuShow();

	listFormLiList = $("listForm").getElementsByTagName("li");
	listFirstSpans = $("thdMenuRight").getElementsByClassName("listFirstProperty");
	top.doEleScrForNoOption(listFirstSpans,list_position_h, 0);
}

function uninit()
{
	top.timeoutFuc.timeoutTimes = 30;
}

function findName(postion)
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
            return menuList[i].name;
        }
    }
}