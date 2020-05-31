var picWhiteBalConName     = [top.picAdOptions[15],top.pic10Pwhite[0],top.pic10Pwhite[1],top.pic10Pwhite[2],top.pic10Pwhite[3],top.pic10Pwhite[4]];
var picReset               = [top.pic10PReset,top.okCancel[0],top.okCancel[1]];
var positionV              = 0;//主界面坐标
var picRgainVal            = 0; //保存R GAINl的值
var picGgainVal            = 0;//保存G GAINl的值
var picBgainVal            = 0;//保存B GAIN的值
var PwhiteBalanceVal       = 0;
var InterVal               = 0;
var presetFocusWidth       = 210;
var presetPositionH        = 0;
var isReset                = 0;
var offOn          		   = top.offOn;
var lis;
var MENU_START 			   = 160;//菜单焦点移动起始位置
var MENU_STEP 			   = 70;//主菜单焦点移动的ste
var presetSpans;
var setting = top.g_setting;
var listFirstSpans;
var focusType="picWhiteBalList";
document.onsystemevent = notifyProcess;


var IFRAME_LEFT_OFFSET = 270;//subMenu1这个iframe在framwork中的相对左偏移
var EXTRA_PROGRESS_BAR_LEFT_OFFSET = 310;//进度条容器相对于submenu1这个iframe的左偏移
var PROGRESS_START_LEFT_OFFSET = IFRAME_LEFT_OFFSET + EXTRA_PROGRESS_BAR_LEFT_OFFSET;//进度条容器开始位置相对于framework的左偏移
var PROGRESS_MAX_VALUE = 20;//sPDIFDelay 的取值范围是0-PROGRESS_MAX_VALUE,最大值为PROGRESS_MAX_VALUE
var EXTRA_PROGRESS_WIDTH = 900;

/*
 * 注：1、如果增加item项，则需更改三点：html的li、 menuList数组、赋值的字符串。 最好是在末尾添加。不要在三个进度条之间添加。
 * 2、如果是删除项，只需根据条件，使某项的showflag = 0即可。
 * 3、如果添加的是进度条，则与其他进度条添加在一起。
 */
var showItemNum = 0;
var barNum = 0;

var menuList = 
[
	{name:"10P white balance",param:function(){showWhiteBalance();}	,showFlag:1},
	{name:"Interval",		  param:function(){showInterval();}		,showFlag:1},
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
	
	lis=$("fourthMenuRight").getElementsByTagName("li"); //得到所有的li标签，目前有7个,包括标题
	var spans=$("fourthMenuRight").getElementsByTagName("span");//得到所有的span标签，目前也有7个
	listFirstSpans = $("fourthMenuRight").getElementsByClassName("listFirstProperty");//得到除标题外所有的span标签，目前也有6个
	
	
	spans[0].innerHTML=picWhiteBalConName[0];//这个是标题的文字 -- 10P white balance
	
	for(var i=0;i<menuList.length;i++)//为 非标题的 6个span 赋值
	{
		spans[i+1].innerHTML=picWhiteBalConName[i];
	}
	
	
	//1、得到初始值
	initVarValue();
	
	updateUI();
	
	top.doEleScrForNoOption(listFirstSpans, positionV, 0);
	addMouseListener();
	ttsRead();
}

//-----------0、刷新界面----------------------------------
function updateUI()
{
	
	//2、根据数据设置showflag
	checkShowMenu();
	
	//3、为每个item重新赋值
	setValuesForItems();
	
	//4、显示每一个item
	showUIList();
}


//1、得到初始值
function initVarValue()
{
	PwhiteBalanceVal  = setting.pic10PwhiteBalance;//开关的值
    InterVal    = setting.picInterval;//InterVal 的值
	picRgainVal = setting.pic10PRed; //保存R GAINl的值
	picGgainVal = setting.pic10PGreen;//保存G GAINl的值
	picBgainVal = setting.pic10PBlue;//保存B GAIN的值
}


//2、根据初始值，设置showFlag
function checkShowMenu()
{
	menuList[0].showFlag = 1;//无条件
	
	if(PwhiteBalanceVal == 1)//此条件 判断其他是否显示
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

//3、给每个item赋值------------------------------
function setValuesForItems()
{
	show10PwhiteBalanceMenu();
	showInterValMenu();
	showGainMenu();//显示进度条
}




//4、根据showFlag 设置是否显示
function showUIList()
{
	showItemNum = 0;
	barNum = 0;
	firtBarPosituon = -1;
	
	lis[0].style.display="block";//标题是一定显示的
	
	for(var i = 0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag == 1)//只要是 showflag = 1，就显示
		{
			lis[i+1].style.display="block";
			if(menuList[i].name.indexOf("bar")>0)
			{
				if(firtBarPosituon == -1)
				{
					firtBarPosituon = showItemNum;
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



function showWhiteBalance()
{
	show10PwhBalSelMenu();
}

function showInterval()
{
	currentInterValPageIndex=parseInt((InterVal-1)/5);
	presetPositionH=parseInt((InterVal-1)%5);
	showInterValSelMenu();
}

function showRed()
{
	top.timeoutFuc.timeoutTimes = 10;
	parent.hiddenPage(3);
	
	
	$("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[4];
	$("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[3];
	$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[2];
	var progDivs=$("adjustProgBar").getElementsByTagName("div");
	progDivs[0].style.width=450+(90*picRgainVal)/2+"px";
	progDivs[2].style.width=450-(90*picRgainVal)/2+"px";
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
	progDivs[0].style.width=450+(90*picGgainVal)/2+"px";
	progDivs[2].style.width=450-(90*picGgainVal)/2+"px";
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
	progDivs[0].style.width=450+(90*picBgainVal)/2+"px";
	progDivs[2].style.width=450-(90*picBgainVal)/2+"px";
	$("adjustProgValue").innerHTML=picBgainVal;
	
	$("adjustProgressBox").style.display="block";
	focusType="adjustBar";
}
function showReset()
{
	showPicReset();
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
	if(focusType=="picWhiteBalList")
	{
		executeFunction(positionV);
	}
	else if(focusType=="IntervalSelMenu")
	{
		InterVal=presetPositionH+currentInterValPageIndex*5+1;
		setting.picInterval=InterVal;
		showInterValMenu();
		initVarValue();
	    showGainMenu();
		$("preSetBar").style.display="none";
		parent.showPage(3);
		focusType="picWhiteBalList";
	}
	else if(focusType=="PwhBalSelMenu")
	{
		PwhiteBalanceVal=presetPositionH;
		setting.pic10PwhiteBalance = PwhiteBalanceVal;
		
		updateUI();
		
		$("preSetBar").style.display="none";
		parent.showPage(3);
		focusType="picWhiteBalList";
	}
	else if(focusType=="picReset")
	{
		if(isReset==1)
		{
			isReset=0;
			setting.pic10PwhiteReset();
			updatePictureData();
		}
		$("picReset").style.display="none";
		$("picResetFocus").style.left="420px";
		parent.showPage(3);
		top.restartTimeout();
		focusType="picWhiteBalList";
	}
}


function toUp()
{
	if(focusType=="picWhiteBalList")
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
		if(positionV<firtBarPosituon)
		{
			positionV=firtBarPosituon+barNum-1;
		}
		executeFunction(positionV);
	}
}
function toDown()
{
	if(focusType=="picWhiteBalList")
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
		if(positionV>firtBarPosituon+barNum-1)
		{
			positionV=firtBarPosituon;
		}
		executeFunction(positionV);
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
		case top.VK_RIGHT:
		{
			toRight();
			ttsRead();
			ret = false;
			break;
		}
		case top.VK_BACK: //back
		{
			toBack();
			ttsRead();
			ret = false;
			break;
		}
		case top.VK_LEFT:
		{
			toLeft();
			ttsRead();
			ret = false;
			break;
		}
		default:
			top.keyDownProcess(evt);
		break;
	}
	return ret;
}




function toRight()
{
	if(focusType=="adjustBar")
	{
		adjustBarValue(1);
	}
	else if(focusType=="IntervalSelMenu")
	{
		presetPositionH++;
		if(presetPositionH>4)
		{
			if(currentInterValPageIndex==1)
			{
				currentInterValPageIndex=0;
				presetPositionH=0;
				showInterValSelMenu();
			}
			else
			{
				currentInterValPageIndex=1;
				presetPositionH=0;
				showInterValSelMenu();
			}
		}
		//setting.picInterval=currentInterValPageIndex*5+presetPositionH+1;
		$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
	}
	else if(focusType=="PwhBalSelMenu")
	{
		presetPositionH++;
		if(presetPositionH>1)
		{
			presetPositionH=0;
		}
		//setting.pic10PwhiteBalance = presetPositionH;
		setting.preview10PGamma(presetPositionH);
		$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
		top.doElementScroll(presetSpans,presetPositionH);
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
	else if(focusType=="IntervalSelMenu")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			if(currentInterValPageIndex==1)
			{
				currentInterValPageIndex=0;
				presetPositionH=4;
				showInterValSelMenu();
			}
			else
			{
				currentInterValPageIndex=1;
				presetPositionH=4;
				showInterValSelMenu();
			}

		}
		//setting.picInterval=currentInterValPageIndex*5+presetPositionH+1;
		$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
	}
	else if(focusType=="PwhBalSelMenu")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH=1;
		}
		//setting.pic10PwhiteBalance = presetPositionH;
		setting.preview10PGamma(presetPositionH);
		$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
		top.doElementScroll(presetSpans,presetPositionH);
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
	if(focusType=="picWhiteBalList")
	{
		parent.returnPage(3);
		parent.$("subMenu2").contentWindow.updateAdvanced(top.picAdOptions[15]);
	}
	else if(focusType=="adjustBar")
	{
		top.timeoutFuc.timeoutTimes = 30;
		showGainMenu();
		$("adjustProgressBox").style.display="none";
		parent.showPage(3);
		$("fourthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
		focusType="picWhiteBalList";
	}
	else if(focusType=="IntervalSelMenu")
	{
		//setting.picInterval=InterVal;
		showInterValMenu();
		$("preSetBar").style.display="none";
		parent.showPage(3);
		focusType="picWhiteBalList";
	}
	else if(focusType=="PwhBalSelMenu")
	{
		//setting.pic10PwhiteBalance=PwhiteBalanceVal;
		setting.preview10PGamma(PwhiteBalanceVal);
		show10PwhiteBalanceMenu();
		$("preSetBar").style.display="none";
		parent.showPage(3);
		focusType="picWhiteBalList";
	}
	else if(focusType=="picReset")
	{
		isReset=0;
		$("picReset").style.display="none";
		$("picResetFocus").style.left="420px";
		parent.showPage(3);
		top.restartTimeout();
		focusType="picWhiteBalList";
	}
}

function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyDownProcess;
}
function updatePictureData()
{
	initVarValue();
	showGainMenu();
	show10PwhiteBalanceMenu();
	showInterValMenu();
	updateUI();
	if(PwhiteBalanceVal==1)
	{
		
	}
	else
	{
		positionV=0;
	}
	$("fourthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
}

function show10PwhiteBalanceMenu()
{
	var divs = lis[1].getElementsByTagName("div");
	divs[0].innerHTML=offOn[PwhiteBalanceVal];
}
function showInterValMenu()
{
	var divs = lis[2].getElementsByTagName("div");
	divs[0].innerHTML=InterVal;
}
function showGainMenu()//主界面显示所有进度条
{
	var divs = lis[3].getElementsByTagName("div");
	var progDivs=$("RGain").getElementsByTagName("div");
	progDivs[0].style.width=150+15*picRgainVal+"px";
	progDivs[2].style.width=150-15*picRgainVal+"px";
	divs[4].innerHTML=picRgainVal;
	var divs = lis[4].getElementsByTagName("div");
	var progDivs=$("GGain").getElementsByTagName("div");
	progDivs[0].style.width=150+15*picGgainVal+"px";
	progDivs[2].style.width=150-15*picGgainVal+"px";
	divs[4].innerHTML=picGgainVal;
	var divs = lis[5].getElementsByTagName("div");
	var progDivs=$("BGain").getElementsByTagName("div");
	progDivs[0].style.width=150+15*picBgainVal+"px";
	progDivs[2].style.width=150-15*picBgainVal+"px";
	divs[4].innerHTML=picBgainVal;
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
			progDivs[0].style.width=450+(90*picRgainVal)/2+"px";
			progDivs[2].style.width=450-(90*picRgainVal)/2+"px";
			$("adjustProgValue").innerHTML=picRgainVal;
			break;
		}
		case 3:
		{
			$("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[2];
			$("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[4];
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[3];
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=450+(90*picGgainVal)/2+"px";
			progDivs[2].style.width=450-(90*picGgainVal)/2+"px";
			$("adjustProgValue").innerHTML=picGgainVal;
			break;
		}
		case 4:
		{
			$("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[3];
			$("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[2];
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML=picWhiteBalConName[4];
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=450+(90*picBgainVal)/2+"px";
			progDivs[2].style.width=450-(90*picBgainVal)/2+"px";
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
		case 2:
		{
			picRgainVal=picRgainVal+value;
			if(picRgainVal<-10)
			{
				picRgainVal=-10;
				return;
			}
			else if(picRgainVal>10)
			{
				picRgainVal=10;
				return;
			}
			else
			{
				setting.pic10PRed=picRgainVal;
			}
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=450+(90*picRgainVal)/2+"px";
			progDivs[2].style.width=450-(90*picRgainVal)/2+"px";
			$("adjustProgValue").innerHTML=picRgainVal;
			break;
		}
		case 3:
		{
			picGgainVal=picGgainVal+value;
			if(picGgainVal<-10)
			{
				picGgainVal=-10;
				return;
			}
			else if(picGgainVal>10)
			{
				picGgainVal=10;
				return;
			}
			else
			{
				setting.pic10PGreen=picGgainVal;
			}
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=450+(90*picGgainVal)/2+"px";
			progDivs[2].style.width=450-(90*picGgainVal)/2+"px";
			$("adjustProgValue").innerHTML=picGgainVal;
			break;
		}
		case 4:
		{
			picBgainVal=picBgainVal+value;
			if(picBgainVal<-10)
			{
				picBgainVal=-10;
				return;
			}
			else if(picBgainVal>10)
			{
				picBgainVal=10;
				return;
			}
			else
			{
				setting.pic10PBlue=picBgainVal;
			}
			var progDivs=$("adjustProgBar").getElementsByTagName("div");
			progDivs[0].style.width=450+(90*picBgainVal)/2+"px";
			progDivs[2].style.width=450-(90*picBgainVal)/2+"px";
			$("adjustProgValue").innerHTML=picBgainVal;
			break;
		}
	}
}
function show10PwhBalSelMenu()//显示该选项的选择控制界面和准备选择选项
{
	showPersetSelect(2);
	$("preSetOption").innerHTML=picWhiteBalConName[0];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<2;i++)
	{
		spans[i+1].innerHTML=offOn[i];
	}
	presetPositionH=PwhiteBalanceVal;
	$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 360+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(3);
	$("preSetLeft").style.display="none";
	$("preSetRight").style.display="none";
	$("preSetBar").style.display="block";
	focusType="PwhBalSelMenu";
	top.doElementScroll(presetSpans,presetPositionH);
}
var currentInterValPageIndex =0;
function showInterValSelMenu()
{
	showPersetSelect(5);
	var optionSelect = -1; 
	$("preSetOption").innerHTML=picWhiteBalConName[1];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<5;i++)
	{
		spans[i+1].innerHTML=currentInterValPageIndex*5+i+1;
		if(currentInterValPageIndex*5+i+1 == InterVal)
		{
			optionSelect = i;
		}
	}
	$("preSetSelectFocus").style.left=345+presetPositionH*presetFocusWidth+"px";
	if(optionSelect>=0)
	{
		$("currentOption").style.left = 360+optionSelect*presetFocusWidth+"px";
		$("currentOption").style.display = "block";
	}
	else
	{
		$("currentOption").style.display = "none";
	}
	parent.hiddenPage(3);
	$("preSetLeft").style.display="block";
	$("preSetRight").style.display="block";
	$("preSetBar").style.display="block";
	focusType="IntervalSelMenu";
}
function showPersetSelect(optionMax)//用来显示或者隐藏preset选项
{
	presetSpans=$("preSetBar").getElementsByTagName("span");
	switch(optionMax)
	{
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		$("preSetBar").style.left=parseInt((1920-390-optionMax*230)/2)+"px";
		$("preSetLeft").style.display="none";
		$("preSetRight").style.display="none";
		break;
		default:
		$("preSetBar").style.left=parseInt((1920-390-optionMax*230)/2)+"px";
		$("preSetLeft").style.display="block";
		$("preSetRight").style.display="block";
		break;
	}
	for(var i=0;(i<5&&i<optionMax);i++)
	{
		presetSpans[i+1].style.display="block";
	}
	if(optionMax<5)
	{
		for(var i=optionMax;i<presetSpans.length-1;i++)
		{
			presetSpans[i+1].style.display="none";
		}
		$("preSetBar").style.width=390+optionMax*230+"px";
	}
	else
	{
		$("preSetBar").style.width=390+5*230+"px";
	}
	presetFocusWidth=230;
}
function showPicReset()//弹出用户图像数据重置对话框
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
function uninit()
{
	top.timeoutFuc.timeoutTimes = 30;
	if(focusType=="IntervalSelMenu")
	{
	}
	else if(focusType=="PwhBalSelMenu")
	{
		setting.preview10PGamma(PwhiteBalanceVal);
	}
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

function $(id)
{
    return document.getElementById(id);
}



function addMouseListener()
{
	document.body.onmousedown = function(evt)
	{
		evt.preventDefault();
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
				if(focusType=="picWhiteBalList")
				{
					positionV = parseInt(this.getAttribute("newAttr"));
					$("fourthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
					toOK();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		};
	}
	
	
	
	var spans=$("preSetBar").getElementsByTagName("span");
	for(var i = 0; i < 5; i++)
	{
		spans[i+1].setAttribute("newAttr",i);
		spans[i+1].onmousedown = function(evt)
		{
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0)//left key
			{
				if(focusType=="IntervalSelMenu" )
				{
					presetPositionH = parseInt(this.getAttribute("newAttr"));
					setting.picInterval=currentInterValPageIndex*5+presetPositionH+1;
					$("preSetSelectFocus").style.left=300+presetPositionH*presetFocusWidth+"px";
					toOK();
				}
				else if(focusType=="PwhBalSelMenu")
				{
					presetPositionH = parseInt(this.getAttribute("newAttr"));
					$("preSetSelectFocus").style.left=300+presetPositionH*presetFocusWidth+"px";
					setting.pic10PwhiteBalance = presetPositionH;
					toOK();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		};
	}
	
	
	
	$("preSetLeft").onmousedown = function(evt)
	{
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0)//left key
		{
			toLeft();
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	};
	
	
	$("preSetRight").onmousedown = function(evt)
	{
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0)//left key
		{
			toRight();
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	};
		
	var picReDivs=$("picReset").getElementsByTagName("div");
	picReDivs[0].onmousedown = function(evt)
	{
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0)//left key
		{
			if(focusType=="picReset" )
			{
				isReset=1;
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
				var value = parseInt((evt.clientX - PROGRESS_START_LEFT_OFFSET)*PROGRESS_MAX_VALUE/EXTRA_PROGRESS_WIDTH,10)-10;
				switch(positionV)
				{
					case 2:
					{
						picRgainVal=value;
						if(picRgainVal<-10)
						{
							picRgainVal=-10;
						}
						else if(picRgainVal>10)
						{
							picRgainVal=10;
						}
						setting.pic10PRed=picRgainVal;
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						progDivs[0].style.width=450+(90*picRgainVal)/2+"px";
						progDivs[2].style.width=450-(90*picRgainVal)/2+"px";
						$("adjustProgValue").innerHTML=picRgainVal;
						break;
					}
					case 3:
					{
						picGgainVal=value;
						if(picGgainVal<-10)
						{
							picGgainVal=-10;
						}
						else if(picGgainVal>10)
						{
							picGgainVal=10;
						}
						setting.pic10PGreen=picGgainVal;
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						progDivs[0].style.width=450+(90*picGgainVal)/2+"px";
						progDivs[2].style.width=450-(90*picGgainVal)/2+"px";
						$("adjustProgValue").innerHTML=picGgainVal;
						break;
					}
					case 4:
					{
						picBgainVal=value;
						if(picBgainVal<-10)
						{
							picBgainVal=-10;
						}
						else if(picBgainVal>10)
						{
							picBgainVal=10;
					
						}
						setting.pic10PBlue=picBgainVal;
						var progDivs=$("adjustProgBar").getElementsByTagName("div");
						progDivs[0].style.width=450+(90*picBgainVal)/2+"px";
						progDivs[2].style.width=450-(90*picBgainVal)/2+"px";
						$("adjustProgValue").innerHTML=picBgainVal;
						break;
					}
				}
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	};
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

	if(focusType == "picWhiteBalList" && 3 == parent.currentShowMenu)
	{
		switch(positionV)
		{
			case 0:
				ttsName = top.picAdOptions[15] + ",";
				currentStatus = offOn[PwhiteBalanceVal];
				break;
			case 1:
				ttsName = top.pic10Pwhite[0] + ",";
				currentStatus = InterVal;
				break;
			case 2:
				ttsName = top.pic10Pwhite[1] + ",";
				currentStatus = picRgainVal;
				break;
			case 3:
				ttsName = top.pic10Pwhite[2] + ",";
				currentStatus = picGgainVal;
				break;
			case 4:
				ttsName = top.pic10Pwhite[3] + ",";
				currentStatus = picBgainVal;
				break;
			case 5:
				ttsName = top.pic10Pwhite[4] + ",";
				currentStatus = "";
				break;
			default:
				ttsName = "";
				currentStatus = "";
				break;
		}
	}
	else if(focusType == "PwhBalSelMenu")
	{
		ttsName = "";
		currentStatus = offOn[presetPositionH];
		isSelected(offOn[PwhiteBalanceVal] == currentStatus);
	}
	else if(focusType == "IntervalSelMenu")
	{
		ttsName = "";
		if(currentInterValPageIndex == 1)
		{
			currentStatus = (presetPositionH + 6);
			isSelected(InterVal == currentStatus);
		}
		else
		{
			currentStatus = (presetPositionH + 1);
			isSelected(InterVal == currentStatus);
		}
	}
	else if(focusType == "picReset")
	{
		ttsName = picReset[0] + ",";
		if(isReset == 0)
		{
			currentStatus = picReset[2] + " not selected";
		}
		else
		{
			currentStatus = picReset[1] + " not selected";
		}
	}
	else if(focusType == "adjustBar")
	{
		//	top.ttsLog("adjustBar positionV----" +positionV);
		switch(positionV)
		{
			case 0:
				ttsName = top.picAdOptions[15];
				currentStatus = offOn[PwhiteBalanceVal];
				break;
			case 1:
				ttsName = top.pic10Pwhite[0];
				currentStatus = InterVal;
				break;
			case 2:
				ttsName = top.pic10Pwhite[1];
				currentStatus = picRgainVal;
				break;
			case 3:
				ttsName = top.pic10Pwhite[2];
				currentStatus = picGgainVal;
				break;
			case 4:
				ttsName = top.pic10Pwhite[3];
				currentStatus = picBgainVal;
				break;
			case 5:
				ttsName = top.pic10Pwhite[4];
				currentStatus = "";
				break;
			default:
				ttsName = "";
				currentStatus = "";
				break;
		}
		if(lastFocusName == positionV && lastFocusType == focusType)
		{
			ttsName = "";
		}
		else
		{
			ttsName = ttsName + ",";
		}
	}
	lastFocusType = focusType;
	lastFocusName = positionV;
	ttsStr = ttsName + currentStatus;
	if("" != ttsStr)
	{
		top.ttsLog("ttsStr=" + ttsStr);
		//top.ttsLog("focusType="+focusType+" positionV="+positionV);
		//top.ttsLog("presetPositionH="+presetPositionH);
		top.setTTSSay(top.SPEECH_TYPE_FLUSH, ttsStr);
	}
}