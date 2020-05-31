var picWhiteBalConName     = [top.picAdOptions[19],top.pic10Pwhite[5],top.pic10Pwhite[1],top.pic10Pwhite[2],top.pic10Pwhite[3],top.pic10Pwhite[4]];
var picReset               = [top.picColorSpaceReset,top.okCancel[0],top.okCancel[1]];
var colorSpace             = [top.colorSpace[0],top.colorSpace[1],top.colorSpace[2]];
var colorSpaceColor        = [top.pic10Pwhite[1],top.pic10Pwhite[2],top.pic10Pwhite[3],top.pic10Pwhite[6],top.pic10Pwhite[7],top.pic10Pwhite[8]];
var positionV              = 0;//主界面坐标
var picRgainVal            = 0; //保存R GAINl的值
var picGgainVal            = 0;//保存G GAINl的值
var picBgainVal            = 0;//保存B GAIN的值
var colorSpaceVal          = 0;
var colorVal               = 0;
var presetFocusWidth       = 180;
var presetPositionH        = 0;
var isReset                = 0;
var offOn          		   = top.offOn;
var lis;
var MENU_START 			   = 160;//菜单焦点移动起始位置
var MENU_STEP 			   = 70;//主菜单焦点移动的ste
var presetSpans;
var setting = top.g_setting;
var listFirstSpans;
var focusType="picColorSpaceList";
document.onsystemevent = notifyProcess;

var IFRAME_LEFT_OFFSET = 270;//subMenu1这个iframe在framwork中的相对左偏移
var EXTRA_PROGRESS_BAR_LEFT_OFFSET =310;//进度条容器相对于submenu1这个iframe的左偏移
var PROGRESS_START_LEFT_OFFSET = IFRAME_LEFT_OFFSET + EXTRA_PROGRESS_BAR_LEFT_OFFSET;//进度条容器开始位置相对于framework的左偏移
var PROGRESS_MAX_VALUE = 100;//sPDIFDelay 的取值范围是0-PROGRESS_MAX_VALUE,最大值为PROGRESS_MAX_VALUE
var EXTRA_PROGRESS_WIDTH = 900;

var currentInterValPageIndex =0;



/*
 * 注：1、如果增加item项，则需更改三点：html的li、 menuList数组、赋值的字符串。 最好是在末尾添加。不要在三个进度条之间添加。
 * 2、如果是删除项，只需根据条件，使某项的showflag = 0即可。
 * 3、如果添加的是进度条，则与其他进度条添加在一起。
 */
var showItemNum = 0;//显示的item的个数，不算标题
var barNum = 0;//进度条的个数
var firtBarPosition;
var menuList = 
[
	{name:"Color space",	  param:function(){showColorSpace();}	,showFlag:1},
	{name:"Color",		  	  param:function(){showColor();}		,showFlag:1},
	{name:"Red bar",		  param:function(){showRed();}			,showFlag:1},
	{name:"Gren bar",		  param:function(){showGren();}			,showFlag:1},
	{name:"Blue bar",		  param:function(){showBlue();}			,showFlag:1},
	{name:"Reset",			  param:function(){showReset();}		,showFlag:1}
];



function initSetRegion()
{
	if (top.uiColourStyleFlag == 1)
	{
		var classlist;
		classlist = $("adjustProgBar").getElementsByClassName("progressBarLeft");
		for (var i = 0; i < classlist.length; i++) 
		{
			classlist[i].style.background =  top.uiColourStyle;
		}
	}
}

function init()
{
    top.initTextDirection(window);
	initSetRegion();
	timeoutInit();
	
	lis=$("fourthMenuRight").getElementsByTagName("li");//得到7个li，算上标题
	var spans=$("fourthMenuRight").getElementsByTagName("span");//得到7组span，算上标题
	
	listFirstSpans = $("fourthMenuRight").getElementsByClassName("listFirstProperty");//得到6组span，不算标题
	
	spans[0].innerHTML=picWhiteBalConName[0];//为标题span赋值
	
	for(var i=0;i<menuList.length;i++)//为非标题的span赋值
	{
		listFirstSpans[i].innerHTML=picWhiteBalConName[i];
	}
	
	//1、重新得到数据--只有第一次会在后台拿数据，否则会有延时
	initVarValue();
	updateUI();
	
	
	
	
	addMouseListener();
	top.doEleScrForNoOption(listFirstSpans, positionV, 0);
	ttsRead();
}
//-----------0、刷新界面----------------------------------
function updateUI()
{
	
	//1、根据数据设置showflag
	checkShowMenu();
	
	//2、为每个item重新赋值
	showColorSpaceMenu();
	showColorValMenu();
	showGainMenu();//刷新主界面进度条
	
	//3、显示每一个item
	showUIList();
	
	
}





function initVarValue()
{
	colorSpaceVal  = setting.colorSpace;
    colorVal    = setting.picColor;
	picRgainVal = setting.picSpaceRed; //保存R GAINl的值
	picGgainVal = setting.picSpaceGreen;//保存G GAINl的值
	picBgainVal = setting.picSpaceBlue;//保存B GAIN的值
}

//1、根据数据设置showflag
function checkShowMenu()
{
	menuList[0].showFlag = 1;//无条件
	
	if(colorSpaceVal == 2)//此条件 判断其他是否显示
	{
		for(var i = 1;i<menuList.length;i++)
		{
			menuList[i].showFlag = 1;
		}
	}
	else
	{
		for(var i = 1;i<menuList.length;i++)
		{
			menuList[i].showFlag = 0;
		}
	}
}
function showUIList()
{
	
	showItemNum = 0;
	barNum = 0;
	firtBarPosition = -1;
	lis[0].style.display="block";//标题是一定显示的
	
	for(var i = 0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag == 1)//只要是 showflag = 1，就显示
		{
			lis[i+1].style.display="block";
			if(menuList[i].name.indexOf("bar")>0)
			{
				if(firtBarPosition == -1)
				{
					firtBarPosition = showItemNum;
				}
				
				barNum++;
			}
			showItemNum ++;
		}
		else
		{
			lis[i+1].style.display="none";
		}
	}
}



function showColorSpaceMenu()
{
	var divs = lis[1].getElementsByTagName("div");
	divs[0].innerHTML=colorSpace[colorSpaceVal];
}
function showColorValMenu()
{
	var divs = lis[2].getElementsByTagName("div");
	divs[0].innerHTML=colorSpaceColor[colorVal];
}

function showGainMenu()//主界面显示所有进度条
{
	var divs = $("RGainLi").getElementsByTagName("div");
	var progDivs=$("RGain").getElementsByTagName("div");
	progDivs[0].style.width=3*picRgainVal+"px";
	progDivs[2].style.width=300-3*picRgainVal+"px";
	divs[4].innerHTML=picRgainVal;
	
	
	var divs = $("GGainLi").getElementsByTagName("div");
	var progDivs=$("GGain").getElementsByTagName("div");
	progDivs[0].style.width=3*picGgainVal+"px";
	progDivs[2].style.width=300-3*picGgainVal+"px";
	divs[4].innerHTML=picGgainVal;
	
	
	var divs = $("BGainLi").getElementsByTagName("div");
	var progDivs=$("BGain").getElementsByTagName("div");
	progDivs[0].style.width=3*picBgainVal+"px";
	progDivs[2].style.width=300-3*picBgainVal+"px";
	divs[4].innerHTML=picBgainVal;
}



function showColorSpace()//显示该选项的选择控制界面和准备选择选项
{
	try
	{
		showPersetSelect(3);
		$("preSetOption").innerHTML=picWhiteBalConName[0];
		var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
		for(var i=0;i<3;i++)
		{
			spans[i+1].innerHTML=colorSpace[i];
		}
		presetPositionH=colorSpaceVal;
		top.doElementScroll(presetSpans,presetPositionH);
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
		$("currentOption").style.display = "block";
		parent.hiddenPage(3);
		$("preSetBar").style.display="block";
		focusType="colorSpaceSelMenu";
	}
	catch(er)
	{
		console.log("showcolorSpaceSelMenu"+er);
	}
}
function showColor()
{
	showcolorSelMenu();
}
function showRed()
{
	
	top.timeoutFuc.timeoutTimes = 10;
	parent.hiddenPage(3);
	
	
	$("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[4];
	$("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[3];
	$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[2];
	var progDivs=$("adjustProgBar").getElementsByTagName("div");
	progDivs[0].style.width=9*picRgainVal+"px";
	progDivs[2].style.width=900-9*picRgainVal+"px";
	$("adjustProgValue").innerHTML=picRgainVal;
	
	
	$("adjustProgressBox").style.display="block";
	focusType="adjustBar";
	
}
function showGren()
{
	top.timeoutFuc.timeoutTimes = 10;
	parent.hiddenPage(3);
	
	
	$("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[2];
	$("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[4];
	$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[3];
	var progDivs=$("adjustProgBar").getElementsByTagName("div");
	progDivs[0].style.width=9*picGgainVal+"px";
	progDivs[2].style.width=900-9*picGgainVal+"px";
	$("adjustProgValue").innerHTML=picGgainVal;
	
	
	$("adjustProgressBox").style.display="block";
	focusType="adjustBar";
}
function showBlue()
{
	top.timeoutFuc.timeoutTimes = 10;
	parent.hiddenPage(3);
	
	
	$("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[3];
	$("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[2];
	$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[4];
	var progDivs=$("adjustProgBar").getElementsByTagName("div");
	progDivs[0].style.width=9*picBgainVal+"px";
	progDivs[2].style.width=900-9*picBgainVal+"px";
	$("adjustProgValue").innerHTML=picBgainVal;
	
	
	$("adjustProgressBox").style.display="block";
	focusType="adjustBar";
}
function showReset()//弹出用户图像数据重置对话框
{
	parent.hiddenPage(3);
	var picReSpans=$("picReset").getElementsByTagName("span");
	var picReDivs=$("picReset").getElementsByTagName("div");
	picReSpans[0].innerHTML=picWhiteBalConName[5];
	picReSpans[1].innerHTML=picReset[0];
	picReDivs[0].innerHTML=picReset[1];
	picReDivs[1].innerHTML=picReset[2];
	$("picReset").style.display="block";
	top.stopTimeout();
	focusType="picReset";
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














function toOK()
{
	if(focusType=="picColorSpaceList")
	{
		executeFunction(positionV);
	}
	else if(focusType=="colorSelMenu")
	{
		colorVal=presetPositionH;
		setting.picColor=colorVal;
		showColorValMenu();
		initVarValue();
	    showGainMenu();
		$("preSetBar").style.display="none";
		parent.showPage(3);
		focusType="picColorSpaceList";
	}
	else if(focusType=="colorSpaceSelMenu")
	{
		colorSpaceVal=presetPositionH;
		setting.colorSpace=colorSpaceVal;
		
		updateUI();
		
		$("preSetBar").style.display="none";
		parent.showPage(3);
		focusType="picColorSpaceList";
	}
	else if(focusType=="picReset")
	{
		if(isReset==1)
		{
			isReset=0;
			setting.picColorSpaceReset();
			updatePictureData();
		}
		$("picReset").style.display="none";
		$("picResetFocus").style.left="420px";
		parent.showPage(3);
		top.restartTimeout();
		focusType="picColorSpaceList";
	}
}



function toUp()
{
	if(focusType=="picColorSpaceList")
	{
		if(positionV <= 0)
		{
			positionV = showItemNum-1;
		}
		else
		{
			positionV--;
		}
		
		$("fourthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
		top.doEleScrForNoOption(listFirstSpans, positionV, -1);
	}
	else if(focusType=="adjustBar")
	{
		
		positionV--;
		if(positionV<firtBarPosition)
		{
			positionV=firtBarPosition+barNum-1;
		}
		executeFunction(positionV);
		
	}
}

function toDown()
{
	if(focusType=="picColorSpaceList")
	{
		if(positionV >= showItemNum-1)
		{
			positionV = 0;
		}
		else
		{
			positionV++;
		}
		
		$("fourthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
		top.doEleScrForNoOption(listFirstSpans, positionV, 1);
	}
	else if(focusType=="adjustBar")
	{
		positionV++;
		if(positionV>firtBarPosition+barNum-1)
		{
			positionV=firtBarPosition;
		}
		executeFunction(positionV);	
	}
}

function toRight()
{
	if(focusType=="adjustBar")
	{
		adjustBarValue(1);
	}
	else if(focusType=="colorSelMenu")
	{
		presetPositionH++;
		if(presetPositionH>5)
		{
			presetPositionH=0;
		}
		//setting.picColor=presetPositionH;
		setting.previewColorSpaceColor(presetPositionH);
		top.doElementScroll(presetSpans,presetPositionH);
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
	}
	else if(focusType=="colorSpaceSelMenu")
	{
		presetPositionH++;
		if(presetPositionH>2)
		{
			presetPositionH=0;
		}
		//setting.colorSpace = presetPositionH;
		setting.previewColorSpace(presetPositionH);
		top.doElementScroll(presetSpans,presetPositionH);
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
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
	else
	{
		toOK();
	}
}

function toLeft()
{
	if(focusType=="adjustBar")
	{
		adjustBarValue(-1);
	}
	else if(focusType=="colorSelMenu")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH=5;
		}
		//setting.picColor=presetPositionH;
		setting.previewColorSpaceColor(presetPositionH);
		top.doElementScroll(presetSpans,presetPositionH);
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
	}
	else if(focusType=="colorSpaceSelMenu")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH=2;
		}
		//setting.colorSpace = presetPositionH;
		setting.previewColorSpace(presetPositionH);
		top.doElementScroll(presetSpans,presetPositionH);
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
	}
	else if(focusType=="picReset")
	{
		isReset--;
		if(isReset<0)
		{
			isReset=1;
			$("picResetFocus").style.left="190px";
		}
		else
		{
			$("picResetFocus").style.left="420px";
		}
	}
	else
	{
		toBack();
	}
}

function toBack()
{
	if(focusType=="picColorSpaceList")
	{
		parent.returnPage(3);
		parent.$("subMenu2").contentWindow.updateAdvanced(top.picAdOptions[19]);
	}
	else if(focusType=="adjustBar")
	{
		top.timeoutFuc.timeoutTimes = 30;
		showGainMenu();
		$("adjustProgressBox").style.display="none";
		parent.showPage(3);
		$("fourthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
		focusType="picColorSpaceList";
	}
	else if(focusType=="colorSelMenu")
	{
		setting.previewColorSpaceColor(colorVal);
		showColorValMenu();
		$("preSetBar").style.display="none";
		parent.showPage(3);
		focusType="picColorSpaceList";
	}
	else if(focusType=="colorSpaceSelMenu")
	{
		setting.previewColorSpace(colorSpaceVal);
		showColorSpaceMenu();
		$("preSetBar").style.display="none";
		parent.showPage(3);
		focusType="picColorSpaceList";
	}
	else if(focusType=="picReset")
	{
		isReset=0;
		$("picReset").style.display="none";
		$("picResetFocus").style.left="420px";
		parent.showPage(3);
		top.restartTimeout();
		focusType="picColorSpaceList";
	}
}

function updatePictureData()
{
	initVarValue();
	showGainMenu();
	showColorSpaceMenu();
	showColorValMenu();
	updateUI();
	if(colorSpaceVal==2)
	{
		
	}
	else
	{
		positionV=0;
	}
	$("fourthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
}









function showAdjustMenu()//显示该选项的选择控制界面和准备选择选项
{
	top.timeoutFuc.timeoutTimes = 10;
	parent.hiddenPage(3);
	switch(positionV)
	{
		case 2:
		{
			$("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[4];
			$("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[3];
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[2];
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=9*picRgainVal+"px";
			progDivs[2].style.width=900-9*picRgainVal+"px";
			$("adjustProgValue").innerHTML=picRgainVal;
			break;
		}
		case 3:
		{
			$("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[2];
			$("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[4];
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[3];
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=9*picGgainVal+"px";
			progDivs[2].style.width=900-9*picGgainVal+"px";
			$("adjustProgValue").innerHTML=picGgainVal;
			break;
		}
		case 4:
		{
			$("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[3];
			$("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[2];
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[4];
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=9*picBgainVal+"px";
			progDivs[2].style.width=900-9*picBgainVal+"px";
			$("adjustProgValue").innerHTML=picBgainVal;
			break;
		}
	}
	$("adjustProgressBox").style.display="block";
	focusType="adjustBar";
}



function adjustBarValue(value)//调整进度条的值
{		
	switch(positionV)
	{
		case firtBarPosition:
		{
			picRgainVal=picRgainVal+value;
			if(picRgainVal<0)
			{
				picRgainVal=0;
				return;
			}
			else if(picRgainVal>100)
			{
				picRgainVal=100;
				return;
			}
			else
			{
				setting.picSpaceRed=picRgainVal;
			}
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=9*picRgainVal+"px";
			progDivs[2].style.width=900-9*picRgainVal+"px";
			$("adjustProgValue").innerHTML=picRgainVal;
			break;
		}
		case firtBarPosition+1:
		{
			picGgainVal=picGgainVal+value;
			if(picGgainVal<0)
			{
				picGgainVal=0;
				return;
			}
			else if(picGgainVal>100)
			{
				picGgainVal=100;
				return;
			}
			else
			{
				setting.picSpaceGreen=picGgainVal;
			}
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=9*picGgainVal+"px";
			progDivs[2].style.width=900-9*picGgainVal+"px";
			$("adjustProgValue").innerHTML=picGgainVal;
			break;
		}
		case firtBarPosition+2:
		{
			picBgainVal=picBgainVal+value;
			if(picBgainVal<0)
			{
				picBgainVal=0;
				return;
			}
			else if(picBgainVal>100)
			{
				picBgainVal=100;
				return;
			}
			else
			{
				setting.picSpaceBlue=picBgainVal;
			}
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=9*picBgainVal+"px";
			progDivs[2].style.width=900-9*picBgainVal+"px";
			$("adjustProgValue").innerHTML=picBgainVal;
			break;
		}
	}
}


function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyDownProcess;
}


function showcolorSelMenu()
{
	showPersetSelect(6);
	$("preSetOption").innerHTML=picWhiteBalConName[1];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<6;i++)
	{
		spans[i+1].innerHTML=colorSpaceColor[i];
	}
	presetPositionH = colorVal;
	top.doElementScroll(presetSpans,presetPositionH);
	$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(3);
	$("preSetBar").style.display="block";
	focusType="colorSelMenu";
}


function showPersetSelect(optionMax)//用来显示或者隐藏preset选项
{
	presetSpans=$("preSetBar").getElementsByTagName("span");
	$("preSetBar").style.left=parseInt((1920-310-optionMax*230)/2)+"px";
	for(var i=0;(i<6&&i<optionMax);i++)
	{
		presetSpans[i+1].style.display="block";
	}
	for(var i=optionMax;i<presetSpans.length-1;i++)
	{
		presetSpans[i+1].style.display="none";
	}
	$("preSetBar").style.width=310+optionMax*230+"px";
	presetFocusWidth=230;
}





function uninit()
{
	top.timeoutFuc.timeoutTimes = 30;
	if(focusType=="colorSelMenu")
	{
		setting.previewColorSpaceColor(colorVal);
	}
	else if(focusType=="colorSpaceSelMenu")
	{
		setting.previewColorSpace(colorSpaceVal);
	}
}
function keyDownProcess(evt)/*接收按键*/
{
	var ret = true;
	var keycode = evt.which;
	switch (keycode)
	{
		case top.VK_UP:
		{
			//up
			toUp();
			ret = false;
			break;
		}
			
		case top.VK_DOWN:
		{
			//down
			toDown();
			ret = false;
			break;
		}	
		case top.VK_ENTER:
		{
			//OK 键
			toOK();
			ret = false;
			break;
		}
		case top.VK_RIGHT:
		{
			toRight();
			ret = false;
			break;
		}
		case top.VK_BACK: //back
		{
			toBack();
			ret = false;
			break;
		}
		case top.VK_LEFT:
		{
			toLeft();
			ret = false;
			break;
		}
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


function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyDownProcess;
}

function notifyProcess(evt)
{
    var msg = evt.which;
	//全局消息
	switch(msg)
	{
		default:
			top.systemEventProc(evt);
			break;
	}
}

function addMouseListener()
{
	document.body.onmousedown = function(evt)
	{
		evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		top.timeoutFuc.osdTimeoutStartFuc();
		if(evt.button == 2)
		{
			 toBack();//right key
		}
	};
	
	for(var i = 0; i < 6; i++)
	{
		lis[i+1].setAttribute("newAttr",i);
		lis[i+1].onmousedown = function(evt)
		{
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0)//left key
			{
				if(focusType=="picColorSpaceList")
				{
					positionV = parseInt(this.getAttribute("newAttr"));
					$("fourthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
					toOK();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		};
	}
	
	
	var picReDivs=$("picReset").getElementsByTagName("div");
	picReDivs[0].onmousedown = function(evt)
	{
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0)//left key
		{
			if(focusType=="picReset" )
			{
				isReset=parseInt(this.getAttribute("newAttr"));
				$("picResetFocus").style.left="190px";
				toOK();
			}
		}
       top.timeoutFuc.osdTimeoutStartFuc();
	};
	
	
	picReDivs[1].onmousedown = function(evt)
	{
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0)//left key
		{
			if(focusType=="picReset" )
			{
				isReset=0;
				$("picResetFocus").style.left="420px";
				toOK();
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	};
	
	
	var spans=$("preSetBar").getElementsByTagName("span");
	for(var ip = 0; ip < 6; ip++)
	{
		spans[ip+1].setAttribute("newAttr",ip);
		spans[ip+1].onmousedown = function(evt)
		{
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0)//left key
			{
				if(focusType=="colorSelMenu" )
				{
					presetPositionH = parseInt(this.getAttribute("newAttr"));
					$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
					toOK();
				}
				else if(focusType=="colorSpaceSelMenu")
				{
					presetPositionH = parseInt(this.getAttribute("newAttr"));
					$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
					toOK();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		};
	}
	
	$("adjustProgMinorUp").onmousedown = function(evt)
	{
		 top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0)//left key
		{
			toUp();
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	};
	
	$("adjustProgMinorDown").onmousedown = function(evt)
	{
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0)//left key
		{
			console.log("====-====-=====adjustProgMinorDown=-==========");
			toDown();
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	};
	
	
	$("adjustProgBar").onmousedown = function(evt)
	{
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0)//left key
		{
			if(focusType=="adjustBar")
			{
				var value = parseInt((evt.clientX - PROGRESS_START_LEFT_OFFSET)*PROGRESS_MAX_VALUE/EXTRA_PROGRESS_WIDTH,10);
				switch(positionV)
				{
					case 2:
					{
						picRgainVal=value;
						if(picRgainVal<0)
						{
							picRgainVal=0;
						}
						else if(picRgainVal>100)
						{
							picRgainVal=100;
						}
						setting.picSpaceRed=picRgainVal;
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						progDivs[0].style.width=9*picRgainVal+"px";
						progDivs[2].style.width=900-9*picRgainVal+"px";
						$("adjustProgValue").innerHTML=picRgainVal;
						break;
					}
					case 3:
					{
						picGgainVal=value;
						if(picGgainVal<0)
						{
							picGgainVal=0;
						}
						else if(picGgainVal>100)
						{
							picGgainVal=100;
						}
						setting.picSpaceGreen=picGgainVal;
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						progDivs[0].style.width=9*picGgainVal+"px";
						progDivs[2].style.width=900-9*picGgainVal+"px";
						$("adjustProgValue").innerHTML=picGgainVal;
						break;
					}
					case 4:
					{
						picBgainVal=value;
						if(picBgainVal<0)
						{
							picBgainVal=0;
						}
						else if(picBgainVal>100)
						{
							picBgainVal=100;
						}
						setting.picSpaceBlue=picBgainVal;
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						progDivs[0].style.width=9*picBgainVal+"px";
						progDivs[2].style.width=900-9*picBgainVal+"px";
						$("adjustProgValue").innerHTML=picBgainVal;
						break;
					}
				}
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	};
}

function ttsRead()
{
	if(0 == top.g_setting.ttsSwitch)
	{
		top.ttsLog("ttsSwitch is off");
		return;
	}
	var currentName = findName(positionV);
	var ttsStr = "";
	if((focusType == "picColorSpaceList") && (currentName == "Color space") || (focusType == "colorSpaceSelMenu"))
	{
		top.ttsLog("currentName=" + currentName + "   status=" + colorSpace[colorSpaceVal]);
		ttsStr = currentName + colorSpace[colorSpaceVal];
	}
	else if((focusType == "picColorSpaceList") && (currentName == "Color") || (focusType == "colorSelMenu"))
	{
		top.ttsLog("currentName=" + currentName + "   status=" + colorSpaceColor[colorVal]);
		ttsStr = currentName + colorSpaceColor[colorVal];
	}
	else if((focusType == "picColorSpaceList") && (currentName == "Red bar") || (RGBfocusType == "red"))
	{
		top.ttsLog("currentName=" + currentName + "   status=" + picRgainVal);
		ttsStr = currentName + picRgainVal;
	}
	else if((focusType == "picColorSpaceList") && (currentName == "Gren bar") || (RGBfocusType == "gren"))
	{
		top.ttsLog("currentName=" + currentName + "   status=" + picGgainVal);
		ttsStr = currentName + picGgainVal;
	}
	else if((focusType == "picColorSpaceList") && (currentName == "Blue bar") || (RGBfocusType == "blue"))
	{
		top.ttsLog("currentName=" + currentName + "   status=" + picBgainVal);
		ttsStr = currentName + picBgainVal;
	}
	else if((focusType == "picColorSpaceList") && (currentName == "Reset") || (focusType == "picReset"))
	{
		if(focusType == "picReset")
		{
			currentName = picWhiteBalConName[5];
			top.ttsLog("currentName=" + currentName + "   content=" + picReset[0] + "   is=" + picReset[isReset + 1]);
			ttsStr = currentName + picReset[0] + picReset[isReset + 1];
		}
		else
		{
			currentName = picWhiteBalConName[5];
			top.ttsLog("currentName=" + currentName);
			ttsStr = currentName;
		}
	}
	top.ttsLog("ttsStr=" + ttsStr);
	top.setTTSSay(top.SPEECH_TYPE_FLUSH, ttsStr);
}