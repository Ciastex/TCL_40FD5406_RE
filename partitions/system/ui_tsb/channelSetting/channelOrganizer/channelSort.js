var chSortTitle              = top.chOrganizer[1];//页面标题
var positionV               = 0;//焦点坐标
var MENU_START 			    = 160;//菜单焦点移动起始位置
var MENU_STEP 			    = 70;//主菜单焦点移动的step 
document.onsystemevent = notifyProcess;

var showItemNum = 0;
var fourMenuRightLiList;

var menuList =
[
	{name:"Channel swap"	  ,	 param:function(){doChannelSwap();       },		showFlag:1},
	{name:"Channel insert"    ,  param:function(){doChannelInsert();	 }, 	showFlag:1}
];

function init()
{
    top.initTextDirection(window);
	timeoutInit();
	fourMenuRightLiList = $("fourthMenuRight").getElementsByTagName("li");
	var spans=$("fourthMenuRight").getElementsByTagName("span");

    $("titleNameSpan").innerHTML = chSortTitle;
	spans[1].innerHTML = top.chOrganizer[4];
	spans[2].innerHTML = top.chOrganizer[5];
	
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
	//设置item是否显示，且记录显示的个数
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag == 1)
		{
			fourMenuRightLiList[i+1].style.display = "block";
			showItemNum++;
		}
		else 
		{
			fourMenuRightLiList[i+1].style.display = "none";
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

function doChannelSwap()
{
	parent.jumpPage(4,"channelSetting/channelOrganizer/channelSwap.html");
}

function doChannelInsert()
{
	parent.jumpPage(4,"channelSetting/channelOrganizer/channelInsert.html");
}

function toOK()//按OK键
{
	executeFunction(positionV);
}

function toUp()//按上键
{
	positionV--;
	if(positionV<0)
	{
		positionV=showItemNum-1;
	}
	$("fourthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
}

function toDown()//按下键
{
	positionV++;
	if(positionV>showItemNum-1)
	{
		positionV=0;
	}
	$("fourthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
}

function toBack()//按左键或返回键
{
	parent.returnPage(3);
}


function keyproc(evt)/*接收按键*/
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
			toOK();
			ret = false;
			break;
		case top.VK_BACK: //back
		case top.VK_LEFT:
			toBack();
			ret = false;
			break;
		default:
			top.keyDownProcess(evt);
			break;
	}
	return ret;
}








function uninit()
{
}

function $(id)
{
    return document.getElementById(id);
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
function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyproc;
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
	
	
	var channel_li_list = $("fourthMenuRight").getElementsByTagName("li");
	
	
	for(var i = 0; i < 2; i++)
	{
		channel_li_list[i].setAttribute("newAttr",i);
		channel_li_list[i].onmousedown = function(evt)
		{
			if(evt.button == 0)//left key
			{
				positionV = parseInt(this.getAttribute("newAttr"),10);
				$("fourthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
				toOK();
			}
		};
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
	var ttsName = "";
	switch (positionV)
	{
		case 0:
			ttsName = top.chOrganizer[4] + " ";
			currentStatus = "";
			break;
		case 1:
			ttsName = top.chOrganizer[5] + " ";
			currentStatus = "";
			break;
		default:
			ttsName = "";
			currentStatus = "";
			break;
	}
	ttsStr = ttsName + currentStatus;
	if ("" != ttsStr)
	{
		top.ttsLog("ttsStr=" + ttsStr);
		//top.ttsLog("presetPositionH="+presetPositionH);
		top.setTTSSay(top.SPEECH_TYPE_FLUSH, ttsStr);
	}
}