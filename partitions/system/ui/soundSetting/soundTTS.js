/******************** created by phq ***********************/
var ttsTypeWords = ["TTS Setting","TTS","TTS Verbosity","TTS Rate"];
var ttsVerbosityWords = ["Low","High"];
var ttsRateWords      = ["Slow","Normal","Fast"];
var offOnWords	      = top.offOn;

var ttsTitleWords = ttsTypeWords;
var listMaxNum	  = ttsTitleWords.length - 1;

var ttsStatus = 0;
var ttsVerbosityMode	= 0;
var ttsRateMode			= 0;

var list_position_h 		= 0;			//主界面坐标
var form_position_h			= 0;			//弹出框焦点位置
var focusOn					= "menu";		//menu,ttsStatus;ttsVerbosityMode;ttsRateMode;

var SUB_MENU_START 			= 160;			//二级级菜单焦点移动起始位置
var SUB_MENU_STEP 			= 70;			//二级级主菜单焦点移动的step
var FORM_STEP				= 80;			//弹出框焦点移动的step

var mainFocus               = ["../images/Focus_Frame/Focus-1.png","../images/Focus_Frame/Focus-2.png"];

var setting 				= top.g_setting;
document.onsystemevent = notifyProcess;

var menuList = [
    {name:ttsTitleWords[1],func:function(){showTTSStatus();},showFlag:1},
    {name:ttsTitleWords[2],func:function(){showTTSVerbosityMode();},showFlag:1},
    {name:ttsTitleWords[3],func:function(){showTTSRateMode();},showFlag:1},
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
        list_position_h = findNextPosition(list_position_h,0);
        $("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
        top.doEleScrForNoOption(listFirstSpans,list_position_h, 1);
    }
    else if(focusOn == "ttsStatus")
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
	else if(focusOn == "ttsVerbosityMode")
	{
		if(form_position_h == ttsVerbosityWords.length - 1)
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
	else if(focusOn == "ttsRateMode")
    {
        if(form_position_h == ttsRateWords.length - 1)
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
	else if(focusOn == "ttsStatus")
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
	else if(focusOn == "ttsVerbosityMode")
	{
		if(form_position_h == 0) 
		{
			form_position_h = ttsVerbosityWords.length - 1;
		}
		else
		{
			form_position_h--;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
    else if(focusOn == "ttsRateMode")
    {
        if(form_position_h == 0)
        {
            form_position_h = ttsRateWords.length - 1;
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
	else if(focusOn == "ttsStatus")
	{
		$("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		ttsStatus = form_position_h;
		setting.ttsSwitch = ttsStatus;
		$("ttsStatus").innerHTML = offOnWords[ttsStatus];
		focusOn = "menu";
	}
	else if(focusOn == "ttsVerbosityMode")
	{
		$("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		ttsVerbosityMode = form_position_h;
		setting.ttsVerbosity = ttsVerbosityMode;
		$("ttsVerbosityMode").innerHTML = ttsVerbosityWords[form_position_h];
		focusOn = "menu";
	}
	else if(focusOn == "ttsRateMode")
	{
		$("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		ttsRateMode = form_position_h;
		setting.ttsSpeed = ttsRateMode;
		$("ttsRateMode").innerHTML = ttsRateWords[form_position_h];
		focusOn = "menu";
	}
}
function toBack()
{
	if(focusOn == "menu")
	{
		parent.returnPage(2);
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

function initTTSStatus() //初始化info 信息中的audio
{
    $("thdListFocus").src=mainFocus[1];
    {
        form_position_h = ttsStatus;
    }
    var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
    var leftOffset = 778;
    top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,offOnWords.length,form_position_h,0);
    focusOn = "ttsStatus";
}

function showTTSStatus()
{
	initTTSStatus();
}


function showTTSVerbosityMode()
{	
	$("thdListFocus").src=mainFocus[1];
	form_position_h = ttsVerbosityMode;

	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,ttsVerbosityWords,ttsVerbosityWords.length,form_position_h,0);
	focusOn = "ttsVerbosityMode";
}

function showTTSRateMode()
{
	$("thdListFocus").src=mainFocus[1];
	form_position_h = ttsRateMode;

	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,ttsRateWords,ttsRateWords.length,form_position_h,0);
	focusOn = "ttsRateMode";
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

function getShowFlagByName(name)
{
    var flag = 1;
    switch(name)
    {
        case "ttsStatus":
            flag = menuList[0].showFlag;
            break;
        case "ttsVerbosityMode":
            flag = menuList[1].showFlag;
            break;
        case "ttsRateMode":
            flag = menuList[2].showFlag;
            break;
        default:
            channel.testLog("TTS setting: getShowFlagByName, wrong show flag name, it should not happen!! name = "+name);
            break;
    }
    return flag;
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
	if(getShowFlagByName("ttsStatus") == 1)
	{
		$("ttsStatus").innerHTML =offOnWords[ttsStatus];
	}
	if(getShowFlagByName("ttsVerbosityMode") == 1)
	{
		$("ttsVerbosityMode").innerHTML = ttsVerbosityWords[ttsVerbosityMode];
	}
	if(getShowFlagByName("ttsRateMode") == 1)
	{
		$("ttsRateMode").innerHTML = ttsRateWords[ttsRateMode];
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
		thdMenuRightSpanList[i].innerHTML = ttsTitleWords[i];
	}

	ttsStatus = setting.ttsSwitch;
	ttsVerbosityMode = setting.ttsVerbosity;
	ttsRateMode = setting.ttsSpeed;

	refreshMenuShow();

	listFormLiList = $("listForm").getElementsByTagName("li");
	listFirstSpans = $("thdMenuRight").getElementsByClassName("listFirstProperty");
	top.doEleScrForNoOption(listFirstSpans,list_position_h, 0);
	ttsRead();
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

function ttsRead()
{
	if(0 == top.g_setting.ttsSwitch)
	{
		top.ttsLog("ttsSwitch is off");
		return;
	}
	var ttsStr = "";
	var currentStatus = "";
	var currentName = findName(list_position_h);
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

	if("menu" == focusOn && 2 == parent.currentShowMenu)
	{
		switch(currentName)
		{
			case ttsTitleWords[1]:
				ttsName = currentName + ",";
				currentStatus = offOnWords[ttsStatus];
				break;
			case ttsTitleWords[2]:
				ttsName = currentName + ",";
				currentStatus = ttsVerbosityWords[ttsVerbosityMode];
				break;
			case ttsTitleWords[3]:
				ttsName = currentName + ",";
				currentStatus = ttsRateWords[ttsRateMode];
				break;
			default:
				ttsName = "";
				currentStatus = "";
				break;
		}
	}
	else if("ttsStatus" == focusOn)  //soundPreset选项菜单
	{
		ttsName = "";
		currentStatus = offOnWords[form_position_h];
		isSelected(offOnWords[ttsStatus] == currentStatus);
	}
	else if("ttsVerbosityMode" == focusOn)  //soundPreset选项菜单
	{
		ttsName = "";
		currentStatus = ttsVerbosityWords[form_position_h];
		isSelected(ttsVerbosityWords[ttsVerbosityMode] == currentStatus);
	}
	else if("ttsRateMode" == focusOn)  //soundPreset选项菜单
	{
		ttsName = "";
		currentStatus = ttsRateWords[form_position_h];
		isSelected(ttsRateWords[ttsRateMode] == currentStatus);
	}
	ttsStr = ttsName + currentStatus;
	if("" != ttsStr)
	{
		top.ttsLog("ttsStr=" + ttsStr);
		top.setTTSSay(top.SPEECH_TYPE_FLUSH, ttsStr);
	}
}