/******************** created by chenhua ***********************/
var gingaListTitleWords 			= top.gingaOptions[1];
var chType						= [top.chListType[2],top.chListType[1],top.chListType[3],""];
var noPrgram					= top.screenSavers[8];
document.onsystemevent 				= notifyProcess;
var setting 					= top.g_setting;
var channel			 			= top.g_channel;
var Ginga 						= top.g_ginga;
var list_position_h				= 0;
var listSum						= 0;					//channel list sum
var nowPage						= 0;					//当前焦点在channel list中的第page页
var pageSum 					= 0;					//当前所有节目信息个数需要占多少页

var SUB_MENU_START 				= 180;					//菜单焦点移动起始位置
var SUB_MENU_STEP 				= 70;					//菜单焦点移动的step
var ONE_PAGE_CHANNEL_SUM		= 10; 					//每一页最多含有的channel数量
var gingaList;


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
	if(listSum > 0)
	{
		if((nowPage*ONE_PAGE_CHANNEL_SUM + list_position_h) >= (listSum - 1))//最后一个了
		{
			nowPage = 0;
			list_position_h = 0;
			showList(nowPage,list_position_h);
		}
		else if(list_position_h == (ONE_PAGE_CHANNEL_SUM - 1))//即将翻页
		{
			nowPage++;
			list_position_h = 0;
			showList(nowPage,list_position_h);
		}
		else
		{
			list_position_h++;
		}
		$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
		showUpDownArray(nowPage,pageSum);
	}
}

function toUp()
{	
	if(listSum > 0)
	{
		if(list_position_h <= 0)
		{
			if(nowPage <= 0)
			{
				nowPage = pageSum - 1;
				list_position_h = (listSum - 1)%ONE_PAGE_CHANNEL_SUM;
			}
			else
			{
				nowPage--;
				list_position_h = ONE_PAGE_CHANNEL_SUM - 1;
			}
			showList(nowPage,list_position_h);
		}
		else
		{
			list_position_h--;
		}
		$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
		showUpDownArray(nowPage,pageSum);
	}
}

function doEnter()
{
	if(listSum > 0)
	{
		//channel.testLog("in channelLock doEnter list_position_h = " + list_position_h + ",position = " + (nowPage*ONE_PAGE_CHANNEL_SUM + list_position_h) + ",nowPositionLockSattus = " + gingaList[nowPage*ONE_PAGE_CHANNEL_SUM + list_position_h].isLock);

        //var tmp_appid = gingaList[nowPage*ONE_PAGE_CHANNEL_SUM + list_position_h].appId;
        var tmp_appid = nowPage*ONE_PAGE_CHANNEL_SUM + list_position_h;
		var curr_appid = -1;

        for (var i = 0; i < listSum-1; i++)
        {
            if (gingaList[i].appState == 1)
            {
              //  curr_appid = gingaList[i].appId;
                curr_appid = i;
                break;
            }
        }
		console.log("[zhangljun][gingaApgingaAppListpList.js] doEnter() tmp_appid = " + tmp_appid+"--curr_appid="+curr_appid);

		if(curr_appid!= -1 && curr_appid != tmp_appid)
		{
			console.log("[zhangljun][gingaAppList.js] doEnter() gingaStopApp")
            Ginga.setAppState(curr_appid,0);//1开始 0停止
//			Ginga.stopApp(curr_appid);
			console.log("[zhangljun][gingaAppList.js] doEnter() gingaStartApp");
		//	Ginga.startApp(tmp_appid);
            Ginga.setAppState(tmp_appid,1);//1开始 0停止
		}
		else
		{
		//	Ginga.startApp(tmp_appid);
            Ginga.setAppState(tmp_appid,1);//1开始 0停止
		}
		//toBack();
        top.jumpPage();
	}
}
function toBack()
{
    //if(top.isGingaOn && top.GingaObj.isInit == top.GingaStates.True)
    //{
    //    top.gingaEvtProc(top.GingaStates.Events.GINGA_EVT_PAUSE_FOR_CONTROL_LOST);
    //}
	parent.returnPage(3);
}
function toLeft()
{
	if(listSum > 0)
	{
		if(listSum <= ONE_PAGE_CHANNEL_SUM)
		{
			toBack();
		}
		else
		{
			if(nowPage == 0)
			{
				nowPage = pageSum - 1;
				showList(nowPage,list_position_h);
			}
			else
			{
				nowPage--;
				showList(nowPage,list_position_h);
			}
		}
		showUpDownArray(nowPage,pageSum);
	}
}
function toRight()
{
	if(listSum > 0)
	{
		if(listSum > ONE_PAGE_CHANNEL_SUM)
		{
			if(nowPage >= (pageSum - 1))
			{
				nowPage = 0;
				showList(nowPage,list_position_h);
			}
			else
			{
				nowPage++;
				showList(nowPage,list_position_h);
			}
		}
		showUpDownArray(nowPage,pageSum);
	}
}

function isOverflowed(element)
{
    //console.log("isOverflowed:element.scrollWidth="+element.scrollWidth +"element.clientWidth="+element.clientWidth);
    if (element.scrollWidth > element.clientWidth)
    {
        //element.setAttribute("class", "marquee");
        element.innerHTML = '<marquee behavior="scroll" align="middle" direction="left" scrollamount="10" >' + element.innerHTML+ '</marquee>'
    }
}

/*
描述：初始化power on channel list
参数：
全局变量：gingaList；listSum；pageSum；pageSum;nowPage
*/
function initList()
{
	nowPage = 0;
	console.log("[zhangljun][gingaAppList.js] initList() Ginga.getAppList()="+typeof(Ginga.getAppList()));
	gingaList = Ginga.getAppList();
	listSum = gingaList.length;
	console.log("[zhangljun][gingaAppList.js] initList() listSum = " + listSum);
	if(listSum > 0)
	{
		if(listSum <= ONE_PAGE_CHANNEL_SUM)
		{
			pageSum = 1;
			$("fourthContent").style.height = (listSum*SUB_MENU_STEP) + "px";
		}
		else
		{
			pageSum = parseInt((listSum - 1)/ONE_PAGE_CHANNEL_SUM,10) + 1;
			$("fourthContent").style.height = (ONE_PAGE_CHANNEL_SUM*SUB_MENU_STEP) + "px";
		}
		
		//判断当前频道是否够显示一页
		for (var i = 0; i < ONE_PAGE_CHANNEL_SUM; i++)
		{
			if (i < listSum)
			{
			//	console.log("[zhangljun][gingaAppList.js] initList() gingaList["+i+"].name = " + gingaList[i].appId);
				fourthContentSpanList[i].innerHTML = gingaList[i].appId;
				fourthContentLabelList[i].innerHTML = gingaList[i].appState;
                fourthContentDivList[i].innerHTML = gingaList[i].appName;
                isOverflowed(fourthContentDivList[i]);
            }
			else
			{
				break;
			}
		}
	}
	else
	{
		pageSum = 1;
		listSum = 1;
		$("fourthContent").style.height = (listSum*SUB_MENU_STEP) + "px";
		fourthContentSpanList[0].innerHTML = noPrgram;
		fourthContentLabelList[0].innerHTML = "";
		fourthContentDivList[0].innerHTML = "";
	}
	showUpDownArray(nowPage,pageSum);
}

/*
描述：根据page和cursor刷新power on channel list
参数：
全局变量：listSum;pageSum;gingaList
*/

function showList(page,cursor)
{
	if(page >= 0 && page < (pageSum - 1))
	{
		for(var i = 0; i < ONE_PAGE_CHANNEL_SUM; i++)
		{
			fourthContentSpanList[i].innerHTML = gingaList[page*ONE_PAGE_CHANNEL_SUM + i].appId;
			fourthContentLabelList[i].innerHTML = gingaList[page*ONE_PAGE_CHANNEL_SUM + i].appState;
			fourthContentDivList[i].innerHTML = gingaList[page*ONE_PAGE_CHANNEL_SUM + i].appName;
            isOverflowed(fourthContentDivList[i]);
		}
		$("fourthContent").style.height = (ONE_PAGE_CHANNEL_SUM*SUB_MENU_STEP) + "px";
	}
	else//page == (pageSum - 1)
	{
		var i = 0;
	   	for(i = 0;i < ONE_PAGE_CHANNEL_SUM ;i++)
	   	{
	   		//最后一页没有填充的数据项设置为不可见
		  	if((page*ONE_PAGE_CHANNEL_SUM + i) < listSum)
		  	{
				fourthContentSpanList[i].innerHTML = gingaList[page*ONE_PAGE_CHANNEL_SUM + i].appId;
				fourthContentLabelList[i].innerHTML = gingaList[page*ONE_PAGE_CHANNEL_SUM + i].appState;
				fourthContentDivList[i].innerHTML = gingaList[page*ONE_PAGE_CHANNEL_SUM + i].appName;
                isOverflowed(fourthContentDivList[i]);
		  	}
		  	else
		  	{
				if(cursor > (i - 1))
				{
			  		cursor = i - 1;
				}
			  	break;
		  	}
		}
		$("fourthContent").style.height = (i*SUB_MENU_STEP) + "px";
	}
	list_position_h = cursor;
	$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
}
/*
nowP:now page ,start from 0;sumP:sum page,start from 1
*/
function showUpDownArray(nowP,sumP)
{
	if(nowP > 0)
	{
		$("channelLockUpImg").style.display = "block";
	}
	else
	{
		$("channelLockUpImg").style.display = "none";
	}
	
	if(nowP >= (sumP - 1))
	{
		$("channelLockDownImg").style.display = "none";
	}
	else
	{
		$("channelLockDownImg").style.display = "block";
	}
}
var fourthContentSpanList;
var fourthContentDivList;
var fourthContentLiList;
var fourthContentLabelList;
function init()
{
    top.initTextDirection(window);
	timeoutInit();
	fourthContentLiList = $("fourthContent").getElementsByTagName("li");

	$("chLockTitle").innerHTML = gingaListTitleWords;
	fourthContentSpanList = $("fourthContent").getElementsByTagName("span");
	fourthContentDivList = $("fourthContent").getElementsByTagName("div");
	fourthContentLabelList = $("fourthContent").getElementsByTagName("label");
	initList();
	
	list_position_h = 0;
	$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	addMouseListener();
    //if(top.isGingaOn && top.GingaObj.isInit == top.GingaStates.True)
    //{
    //    top.gingaEvtProc(top.GingaStates.Events.GINGA_EVT_RESUME_FROM_CONTROL_LOST);
    //}
}

function uninit()
{

}

function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	
	//menu
	for(var i = 0; i < 10; i++)
	{
		fourthContentLiList[i].setAttribute("newAttr",i);
		fourthContentLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				list_position_h = parseInt(this.getAttribute("newAttr"));
				$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
				doEnter();
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	$("channelLockUpImg").onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			toLeft();
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	$("channelLockDownImg").onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			toRight();
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
}

