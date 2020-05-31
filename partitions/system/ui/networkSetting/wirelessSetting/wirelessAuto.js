var wirelessAutoConName       = [top.manualAuto[1],top.netWlessAuto[0],top.netWlessAuto[1],top.netOthers[0] + " :"]
var pinHotkey				  = [top.others[15],top.okCancel[0],top.okCancel[1]];
var titles					  = [top.netOptions[2] + ">" + top.manualAuto[1] + ">" + top.netWlessAuto[0],
									top.netOptions[2] + ">" + top.manualAuto[1] + ">" + top.netWlessAuto[1]];
var netWlessAutoDes			  = top.netWlessAutoDes;
var remindWord                = [top.netWireConnRemind[3],top.netWireConnRemind[4],top.netWireConnRemind[5]];
var positionV                 = 0;//主界面焦点位置
var positionPINH              = 0;//PIN操作框button焦点位置
var positionPBCH              = 0;//PBC操作框button焦点位置
var PBCTimeout                = 0; //PBC倒计时的Timeout
var showTime                  = 120;//PBC倒计时时间
var MENU_START 			      = 160;//菜单焦点移动起始位置
var MENU_STEP 			      = 70;//主菜单焦点移动的step
var focusType                 = "wirelessAutoMenu";
var setting = top.g_setting;
document.onsystemevent = notifyProcess;

var pinButtonList;
var pbcButtonList;

var showItemNum = 0;
var lis;
var clickFlag = 0;


var menuList = 
[
	{name:"PIN"  ,		param:function(){showPIN();	  },	showFlag:1},
	{name:"PBC",		param:function(){showPBC();   },	showFlag:1}
];




function init()
{
	timeoutInit();
    top.initTextDirection(window);
	var spans=$("fourthMenuRight").getElementsByTagName("span");//得到所有的span，3个，包括标题Auto
	lis = $("fourthMenuRight").getElementsByTagName("li");		 //得到所有的li，一共3个，算上标题

    $("titleNameSpan").innerHTML=wirelessAutoConName[0];
	for(var i=1;i<=2;i++)
	{
		spans[i].innerHTML=wirelessAutoConName[i];
	}
	
	
	initPINMenu();
	initPBCMenu();
	
	updateUI();
	
	addMouseListener();
	ttsRead();
}



//-----------0、刷新界面----------------------------------
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

//-----------1、得到每个item的初始值--------------------------
function updateItemValues()
{
	//空
}


//-----------2、得到每个item的showflag标志位------------------
function checkShowMenu()
{
	//此 js 没有条件设置显示与否。默认全部显示
	for(var i=0;i<menuList.length;i++)
	{
		menuList[i].showFlag=1;
	}
	if("true" == top.isSCBCFlag)	//SCBC暂时隐藏PIN菜单
	{
		menuList[0].showFlag = 0;
	}
}


//-----------3、给每个item赋值------------------------------
function setValuesForItems()
{
	//空
}



//-----------4、根据showflag来显示内容-----------------------
function showItems()
{
	showItemNum = 0;
	
	lis[0].style.display="block";//标题显示
	
	for(var i = 0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag == 1)//只要是 showflag = 1，就显示
		{
			lis[i+1].style.display="block";
			showItemNum ++;
		}
		else
		{
			lis[i+1].style.display="none";
		}
	}
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


function showPIN()
{
	top.timeoutFuc.timeoutEnable = 0;
	showPINMenu();
}

function showPBC()
{
	top.timeoutFuc.timeoutEnable = 0;
	showPBCMenu();
}


function toOK()
{
	if(focusType == "wirelessAutoMenu")
	{
		executeFunction(positionV);
	}
	else if(focusType == "PINMenu")
	{
		switch(positionPINH)
		{
			case 2:
			{
				top.restartTimeout();
				clickFlag = 0;
				$("PINconnectInfo").innerHTML="";
				parent.showPage(3);
				$("wirelessAutoPIN").style.display="none";
				focusType = "wirelessAutoMenu";
			}
			break;
			case 1:
			{
				clickFlag = 1;
				setting.connectPinCode('');
				$("PINconnectInfo").innerHTML=remindWord[2];
				top.setTTSSay(top.SPEECH_TYPE_FLUSH,remindWord[2]);
				top.ttsLog("ttsStr="+remindWord[2]);

			}
			break;
			case 0:
			{
				showPINCode();
			}
			break;
			default:
			break;
		}
	}
	else if(focusType == "PBCMenu")
	{
		switch(positionPBCH)
		{
			case 1:
			{
				clearTimeout(PBCTimeout);
				PBCTimeout=0;
				showTime=120;
				top.restartTimeout();
				setting.cancelPBC();
				$("wirelessAutoPBC").style.display="none";
				$("PBCconnectInfo").innerHTML="";
				clickFlag = 0;
				parent.showPage(3);
				focusType = "wirelessAutoMenu";
			}
			break;
			case 0:
			{
				if(120 == showTime)
				{
					clickFlag = 1;
					top.stopTimeout();
					showPBCTime();
					setting.startPBC();
					$("PBCconnectInfo").innerHTML=remindWord[2];
					top.setTTSSay(top.SPEECH_TYPE_FLUSH,remindWord[2]);
					top.ttsLog("ttsStr="+remindWord[2]);
				}
			}
			break;
			default:
			break;
		}
	}
}

function toUp()
{
	if(focusType == "wirelessAutoMenu")
	{
		positionV--;
		if(positionV<0)
		{
			positionV=showItemNum-1;
		}
		$("thdListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
	}
}
function toDown()
{
	if(focusType == "wirelessAutoMenu")
	{
		positionV++;
		if(positionV>showItemNum-1)
		{
			positionV=0;
		}
		$("thdListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
	}
}
function toLeft()
{
	if(focusType == "PINMenu")
	{
		positionPINH--;/*由于positionPINH 0 表示取消 1 表示 OK 2 表示Refresh 所以向左是加一*/
		if(positionPINH<0)
		{
			positionPINH=2;
		}
		$("PINButtonFocus").style.left=60+positionPINH*200+"px";
		top.doEleScrForNoOption(pinButtonList, positionPINH, -1);
	}
	else if(focusType == "PBCMenu")
	{
		if(positionPBCH==0)
		{
			positionPBCH=1;
			$("PBCButtonFocus").style.left=440+"px";
		}
		else
		{
			positionPBCH=0;
			$("PBCButtonFocus").style.left=90+"px";
		}
		top.doEleScrForNoOption(pbcButtonList, positionPBCH, -1);
	}
	else if(focusType == "wirelessAutoMenu") 
	{
		toBack();
	}
}
function toRight()
{
	if(focusType == "PINMenu")
	{
		positionPINH++;
		if(positionPINH>2)
		{
			positionPINH=0;
		}
		$("PINButtonFocus").style.left=60+positionPINH*200+"px";
		top.doEleScrForNoOption(pinButtonList, positionPINH, 1);
	}
	else if(focusType == "PBCMenu")
	{
		if(positionPBCH==0)
		{
			positionPBCH=1;
			$("PBCButtonFocus").style.left=440+"px";
		}
		else
		{
			positionPBCH=0;
			$("PBCButtonFocus").style.left=90+"px";
		}
		top.doEleScrForNoOption(pbcButtonList, positionPBCH, 1);
	}
	else if(focusType == "wirelessAutoMenu") 
	{
		toOK();
	}
}




function notifyProcess(evt)
{
    var msg = evt.which;
	console.log("zhangljun wirelessAuto.js notifyProcess msg = "+msg+" -- focusType = "+focusType);
	var value = evt.modifiers;
	console.log("hevens *************** revice msg = "+msg+" value is "+value);
	//全局消息
	switch(msg)
	{
		case top.E_WIRELESS_CONNECT_SUCCESS://表示无线网络连接成功
		{
			if(0 == clickFlag)
			{
				console.log("Ignore CONNECT SUCCESS MSG!");
				return;
			}
            top.systemEventProc(evt);
			if(focusType == "PBCMenu")
			{
				
				clearTimeout(PBCTimeout);
				PBCTimeout=0;
				showTime=120;
				$("PBCconnectInfo").innerHTML=remindWord[0];
				top.setTTSSay(top.SPEECH_TYPE_FLUSH,remindWord[0]);
				top.ttsLog("ttsStr="+remindWord[0]);
				setTimeout(function(){
					top.restartTimeout();
					$("wirelessAutoPBC").style.display="none";
					$("PBCconnectInfo").innerHTML="";
					clickFlag = 0;
					parent.showPage(3);
					focusType = "wirelessAutoMenu";
				},2000);
				
			}
			else if(focusType == "PINMenu")
			{
				$("PINconnectInfo").innerHTML=remindWord[0];
				top.setTTSSay(top.SPEECH_TYPE_FLUSH,remindWord[0]);
				top.ttsLog("ttsStr="+remindWord[0]);
				setTimeout(function(){
					top.restartTimeout();
					$("wirelessAutoPIN").style.display="none";
					$("PINconnectInfo").innerHTML="";
					clickFlag = 0;
					parent.showPage(3);
					focusType = "wirelessAutoMenu";
				},2000);
			}
			break;
		}
		case top.E_WIRELESS_CONNECT_FAILURE://表示无线连接失败
		{
			if(value != 0 || 0 == clickFlag)
			{
				console.log("Ignore CONNECT FAILURE MSG!");
				return;
			}
			if(focusType == "PBCMenu")
			{
				
				clearTimeout(PBCTimeout);
				PBCTimeout=0;
				showTime=120;
				$("PBCconnectInfo").innerHTML=remindWord[1];
				top.setTTSSay(top.SPEECH_TYPE_FLUSH,remindWord[1]);
				top.ttsLog("ttsStr="+remindWord[1]);
				setTimeout(function(){
					top.restartTimeout();
					$("wirelessAutoPBC").style.display="none";
					$("PBCconnectInfo").innerHTML="";
					clickFlag = 0;
					parent.showPage(3);
					focusType = "wirelessAutoMenu";
					$("PBCconnectInfo").innerHTML="";
				},2000);
			}
			else if(focusType == "PINMenu")
			{
				$("PINconnectInfo").innerHTML=remindWord[1];
				top.setTTSSay(top.SPEECH_TYPE_FLUSH,remindWord[1]);
				top.ttsLog("ttsStr="+remindWord[1]);
				setTimeout(function(){
					top.restartTimeout();
					$("wirelessAutoPIN").style.display="none";
					$("PINconnectInfo").innerHTML="";
					clickFlag = 0;
					parent.showPage(3);
					focusType = "wirelessAutoMenu";
					$("PBCconnectInfo").innerHTML="";
				},2000);
			}
			break;
		}
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
		case top.VK_BACK: //back
		{
			toBack();
			ttsRead();
			break;
		}
		case top.VK_LEFT:
		{
			toLeft();
			ttsRead();
			ret = false;
			break;
		}
		case top.VK_RIGHT:
		{
			toRight();
			ttsRead();
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

function toBack()
{
	clickFlag = 0;
	if(focusType == "wirelessAutoMenu")
	{
		parent.returnPage(3);
	}
	else if(focusType == "PINMenu")
	{
		top.restartTimeout();
		parent.showPage(3);
		$("wirelessAutoPIN").style.display="none";
		$("PINconnectInfo").innerHTML="";
		focusType = "wirelessAutoMenu";
	}
	else if(focusType == "PBCMenu")
	{
		clearTimeout(PBCTimeout);
		PBCTimeout=0;
		showTime=120;
		top.restartTimeout();
		setting.cancelPBC();
		$("wirelessAutoPBC").style.display="none";
		$("PBCconnectInfo").innerHTML="";
		parent.showPage(3);
		focusType = "wirelessAutoMenu";
	}
}


function uninit()
{
	top.restartTimeout();
}

function initPINMenu()//初始化PIN操作框
{
	$("PINTitle").innerHTML=titles[0];
	$("PINContent").innerHTML=netWlessAutoDes[0];
	var divs=$("PINbuttonList").getElementsByTagName("div");
	pinButtonList = divs;
	divs[0].innerHTML=pinHotkey[0];
	divs[1].innerHTML=pinHotkey[1];
	divs[2].innerHTML=pinHotkey[2];
}
function initPBCMenu()//初始化PBC操作框
{
	$("PBCTitle").innerHTML=titles[1];
	$("PBCContent").innerHTML=netWlessAutoDes[1];
	var divs=$("PBCbuttonList").getElementsByTagName("div");
	pbcButtonList = divs;
	divs[0].innerHTML=pinHotkey[1];
	divs[1].innerHTML=pinHotkey[2];
}
function showPINMenu()//显示PIN操作框页面
{
	
	parent.hiddenPage(3);
	$("wirelessAutoPIN").style.display="block";
	positionPINH=2;
	//showPINCode();
	setTimeout(function(){
		if(top.isOverflowed($("PINTitle")))
		{
			$("PINTitle").style.overflowX = "-webkit-marquee";
			$("PINTitle").style.textOverflow = "clip";
			$("PINTitle").style.webkitMarqueeDirection = "backwards";
			$("PINTitle").style.webkitMarqueeStyle = "scroll";
			$("PINTitle").style.webkitMarqueeSpeed = "fast";
			$("PINTitle").style.webkitMarqueeIncrement = "small";
			$("PINTitle").style.webkitMarqueeRepetition = "infinite";
		}
		else
		{
			$("PINTitle").style.overflowX = "hidden";
			$("PINTitle").style.textOverflow = "ellipsis";
		}
	},1)
	$("PINcode").innerHTML=wirelessAutoConName[3]+setting.getPinCode();
	$("PINButtonFocus").style.left="460px";
	focusType = "PINMenu"
	top.doEleScrForNoOption(pinButtonList, positionPINH, 0);
}
function showPINCode()//用于初始化或刷新重新书写 PIN code
{
	try
	{
	$("PINcode").innerHTML=wirelessAutoConName[3]+setting.refreshPinCode();//后续添加函数
	//top.g_channel.testLog(setting.refreshPinCode());
	}
	catch(er)
	{
		top.g_channel.testLog(er);
	}
}
function showPBCMenu()//显示PBC操作框页面
{
	parent.hiddenPage(3);
	$("wirelessAutoPBC").style.display="block";
	positionPBCH = 1;
	showTime = 120;
	$("PBCTime").innerHTML=showTime+"S"
	$("PBCButtonFocus").style.left="440px";
	focusType = "PBCMenu"
		setTimeout(function(){
		if(top.isOverflowed($("PBCTitle")))
		{
			$("PBCTitle").style.overflowX = "-webkit-marquee";
			$("PBCTitle").style.textOverflow = "clip";
			$("PBCTitle").style.webkitMarqueeDirection = "backwards";
			$("PBCTitle").style.webkitMarqueeStyle = "scroll";
			$("PBCTitle").style.webkitMarqueeSpeed = "fast";
			$("PBCTitle").style.webkitMarqueeIncrement = "small";
			$("PBCTitle").style.webkitMarqueeRepetition = "infinite";
		}
		else
		{
			$("PBCTitle").style.overflowX = "hidden";
			$("PBCTitle").style.textOverflow = "ellipsis";
		}
	},1)
	top.doEleScrForNoOption(pbcButtonList, positionPBCH, 0);
}
function showPBCTime()
{
	showTime--;
	$("PBCTime").innerHTML=showTime+"S";
	if(showTime==0)
	{
		clearTimeout(PBCTimeout);
		PBCTimeout=0;
		showTime=120;
		$("PBCconnectInfo").innerHTML=remindWord[1];
		top.setTTSSay(top.SPEECH_TYPE_FLUSH,remindWord[1]);
		top.ttsLog("ttsStr="+remindWord[1]);
		setTimeout(function(){
			top.restartTimeout();
			focusType = "wirelessAutoMenu";
			},2000)
	}
	else
	{
		PBCTimeout=setTimeout("showPBCTime()",1000);
	}
}
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) 
		{
			toBack();//right key
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	var lis=$("fourthMenuRight").getElementsByTagName("li");
	for(var i=0;i<2;i++)
	{
		lis[i+1].setAttribute("newAttr",i);
		lis[i+1].onmousedown = function(evt){
			if(evt.button == 0){//left key
			top.timeoutFuc.osdTimeoutEndFuc();
				if(focusType=="wirelessAutoMenu")
				{
					positionV= parseInt(this.getAttribute("newAttr"));
					$("thdListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
					toOK();
				}
				top.timeoutFuc.osdTimeoutStartFuc();
			}
		}
	}
	var divs=$("PINbuttonList").getElementsByTagName("div");
	for(var i=0;i<3;i++)
	{
		divs[i].setAttribute("newAttr",i);
		divs[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
			top.timeoutFuc.osdTimeoutEndFuc();
				if(focusType=="PINMenu")
				{
					positionPINH=2-parseInt(this.getAttribute("newAttr"));
					$("PINButtonFocus").style.left=460-positionPINH*200+"px";
					toOK();
				}
				top.timeoutFuc.osdTimeoutStartFuc();
			}
		}
	}
	var divs=$("wirelessAutoPBC").getElementsByTagName("div");
	for(var i=0;i<2;i++)
	{
		divs[i].setAttribute("newAttr",i);
		divs[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
			top.timeoutFuc.osdTimeoutEndFuc();
				if(focusType=="PBCMenu")
				{
					positionPBCH=1-parseInt(this.getAttribute("newAttr"));
					if(positionPBCH==0)
					{
						$("PBCButtonFocus").style.left=440+"px";
					}
					else
					{
						$("PBCButtonFocus").style.left=90+"px";
					}
					toOK();
				}
				top.timeoutFuc.osdTimeoutStartFuc();
			}
		}
	}
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
var lastPosition;
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
	var currentName = findName(positionV);
	var ttsName = "";
	function isSelected(selectedFlag)
	{
		if(selectedFlag)
		{
			currentStatus = currentStatus + ", selected";
		}else
		{
			currentStatus = currentStatus + ", not selected";
		}
	}
	if("wirelessAutoMenu" == focusType && 3 == parent.currentShowMenu)
	{
		switch (currentName)
		{
			case "PIN":
				ttsName = wirelessAutoConName[1];
				currentStatus = "";
				break;
			case "PBC":
				ttsName = wirelessAutoConName[2];
				currentStatus = "";
				break;
			default:
				ttsName = "";
				currentStatus = "";
				break;
		}
	}
	else if("PINMenu" == focusType)  //soundPreset选项菜单
	{
		ttsName = netWlessAutoDes[0] + "," + $("PINcode").innerHTML + ",";
		if(0 == positionPINH)
		{
			currentStatus = pinHotkey[0];
		}
		else if(1 == positionPINH)
		{
			currentStatus = pinHotkey[1];
		}
		else
		{
			currentStatus = pinHotkey[2];
		}
		if(lastFocusType == focusType)
		{
			if(lastPosition == positionPINH)
			{
				ttsName = "";
				currentStatus = "";
			}else
			{
				ttsName = "";
			}
		}
		lastPosition = positionPINH;
	}
	else if("PBCMenu" == focusType)
	{
		ttsName = netWlessAutoDes[1];
		if(0 == positionPBCH)
		{
			currentStatus = pinHotkey[1];
		}else
		{
			currentStatus = pinHotkey[2];
		}
		if(lastFocusType == focusType)
		{
			if(lastPosition == positionPBCH)
			{
				ttsName = "";
				currentStatus = "";
			}else
			{
				ttsName = "";
			}
		}
		lastPosition = positionPBCH;
	}
	lastFocusType = focusType;
	ttsStr = ttsName + currentStatus;
	if("" != ttsStr)
	{
		top.ttsLog("ttsStr="+ttsStr);
		//top.ttsLog("focusType="+focusType+"   currentName="+findName(positionV));
		//top.ttsLog("parent.currentShowMenu="+parent.currentShowMenu);
		top.setTTSSay(top.SPEECH_TYPE_FLUSH,ttsStr);
	}
}