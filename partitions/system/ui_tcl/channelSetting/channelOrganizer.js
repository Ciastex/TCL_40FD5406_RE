var mainTitle               = top.chOptions[3];
var organiserOptions		= top.chOrganizer;
var positionV               = 0;
var MENU_START 			    = 160;//菜单焦点移动起始位置
var MENU_STEP 			    = 70;//主菜单焦点移动的step
document.onsystemevent = notifyProcess;

var channelSetLists;
var chanelSetLeftList;

var showItemNum = 0;

var menuList =
[
	{name:"Channel skip"	,  param:function(){doChannelskip();     },		showFlag:1},
	{name:"Channel sort"    ,  param:function(){doChannelsort();	 }, 	showFlag:1},
	{name:"Channel edit"    ,  param:function(){doChanneledit();     }, 	showFlag:1},
	{name:"Channel delete"  ,  param:function(){doChanneldelete();	 }, 	showFlag:1}
];

function init()
{
    top.initTextDirection(window);
	timeoutInit();	
	channelSetLists = $("thdMenuRight").getElementsByTagName("li");//得到所有的li，目前有5个，算上标题
	chanelSetLeftList = $("menuUl").getElementsByClassName("listFirstProperty");

	//赋值
    $("titleNameSpan").innerHTML= mainTitle;
	for(var i=0;i<4;i++)
	{
		channelSetLists[i + 1].getElementsByTagName("span")[0].innerHTML=organiserOptions[i];
	}
	
	//刷新界面
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
	for(var i = 0; i < menuList.length; i++)
	{
		menuList[i].showFlag = 1;
	}

	if(top.isLAFlag)//LA requirement: only display Skip
	{
		menuList[1].showFlag = 0;
		menuList[2].showFlag = 0;
		menuList[3].showFlag = 0;
	}

    if(top.isNAFlag)//NA requirement: only display Skip  
    {
        menuList[1].showFlag = 0;
        menuList[2].showFlag = 0;
		menuList[3].showFlag = 0;
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
			channelSetLists[i+1].style.display = "block";
			showItemNum++;
		}
		else 
		{
			channelSetLists[i+1].style.display = "none";
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
function findRealPosition(postion)
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
            return i;
        }
    }
}
function doChannelskip()
{
	parent.jumpPage(3,"channelSetting/channelOrganizer/channelSkip.html");
}

function doChannelsort()
{
	parent.jumpPage(3,"channelSetting/channelOrganizer/channelSort.html");
}

function doChanneledit()
{
	parent.jumpPage(3,"channelSetting/channelOrganizer/channelEdit.html");
}

function doChanneldelete()
{
	parent.jumpPage(3,"channelSetting/channelOrganizer/channelDelete.html");
}




function toOk()//按OK键
{
	executeFunction(positionV);

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
			toOk();
			ret = false;
			break;
		case top.VK_BACK: //back
		case top.VK_LEFT:
			toBack();
			ret = false;
			break;  
		case top.VK_RIGHT:
			toOk();
			ret = false;
			break;
		default:
			top.keyDownProcess(evt);
		break;
	}
	return ret;
}


function toDown()//按下键
{
	positionV++;
	if(positionV>showItemNum-1)
	{
		positionV=0;
	}
	$("thdListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
    top.doEleScrForNoOption(chanelSetLeftList, findRealPosition(positionV), 1);
}
function toUp()//按上键
{
	positionV--;
	if(positionV<0)
	{
		positionV=showItemNum-1;
	}
	$("thdListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
    top.doEleScrForNoOption(chanelSetLeftList, findRealPosition(positionV), -1);
}


function toBack()//按左键或返回键
{
	parent.returnPage(2);
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
    top.timeoutFuc.keydownFuc = keyDownProcess;
}

function addMouseListener()
{
	document.body.onmousedown = function(evt)
	{
		evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2)
		{
			toBack();
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	};
	
	for(var i = 1; i < 5; i++)
	{
		channelSetLists[i].setAttribute("newAttr",i);
		channelSetLists[i].onmousedown = function(evt)
		{
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0)//left key
			{
				positionV = parseInt(this.getAttribute("newAttr")) - 1;
				$("thdListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
				toOk();
			}
			top.timeoutFuc.osdTimeoutStartFuc();
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
	switch(positionV)
	{
		case 0:
			ttsName = organiserOptions[0] + ",";
			currentStatus = "";
			break;
		case 1:
			ttsName = organiserOptions[1] + ",";
			currentStatus = "";
			break;
		case 2:
			ttsName = organiserOptions[2] + ",";
			currentStatus = "";
			break;
		case 3:
			ttsName = organiserOptions[3] + ",";
			currentStatus = "";
			break;
		default:
			ttsName = "";
			currentStatus = "";
			break;
	}
	ttsStr = ttsName + currentStatus;
	if("" != ttsStr)
	{
		top.ttsLog("ttsStr=" + ttsStr);
		//top.ttsLog("presetPositionH="+presetPositionH);
		top.setTTSSay(top.SPEECH_TYPE_FLUSH, ttsStr);
	}
}