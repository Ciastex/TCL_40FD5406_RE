var chSortTitle              = top.chOrganizer[4];//页面标题
var skipPicture              = ["../../images/option/check_2.png","../../images/option/check_3.png"];//显示skip图标样式 0 ：不是skip channel 1：是skip channel
var chListType		    = [top.chListType[2]/*模拟*/,top.chListType[1]/*数字*/,top.chListType[3]/*radio*/,top.chListType[1]/*数字*/,top.chListType[1]/*数字*/];
var space                   = "&nbsp;&nbsp;&nbsp;&nbsp;";//用于节目号和节目类型之间的空格
var positionV               = 0;//焦点坐标
var channel_li_list;            //UI选项
var serviceType;                //节目类型
var channelList;                //节目列表
var PAGE_MAX                = 12;//设定每页显示个数
var currentChannelInfo;         //当前节目信息
var selectIndex             = 0;//选择的对象在列表中位置
var selectSortNumber        = 0;//1 选择了待sort
var MENU_START 			    = 170;//菜单焦点移动起始位置
var MENU_STEP 			    = 70;//主菜单焦点移动的step 
var currentChannelListType  = 0;
var channel=top.g_channel;//channel 类
document.onsystemevent = notifyProcess;
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
			ttsRead();
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

function $(id)
{
    return document.getElementById(id);
}

function init()
{
    top.initTextDirection(window);
	timeoutInit();
	currentChannelListType = channel.channelListType ;
	channel_li_list = $("fifthMenuRight").getElementsByTagName("li");
	$("sortId").getElementsByTagName("span")[0].innerHTML=chSortTitle;
	currentChannelInfo = channel.getCurrentChannelInfo();
	serviceType = currentChannelInfo.serviceType;
	channelList=channel.getNextChannelList(0,currentChannelInfo.index,1,PAGE_MAX);
	var length = channelList.length;
	if (length > 0)
	{
		 if(length<=PAGE_MAX)
		 {
			var listIndex=0;
			for(;listIndex<PAGE_MAX && listIndex < length;listIndex++)
			{
				if(currentChannelInfo.index==channelList[listIndex].index)
				{
					break;
				}
			}
			if(listIndex == length)
			{
				listIndex = 0;
			}
			positionV=listIndex;
		 }
		$("fifthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
		$("fifthListFocus").style.display="block";
		for (var i=0; i<PAGE_MAX; i++)
		{
			var span = channel_li_list[i].getElementsByTagName("span");
			var divs = channel_li_list[i].getElementsByTagName("div");
			
			if (i<length)
			{
				channel_li_list[i].style.display="block";
				//span[0].innerHTML = channelList[i].number + space + chListType[channelList[i].serviceType];
				span[0].innerHTML = ((top.isLAFlag || top.isNAFlag) ? top.parseChNumber(channelList[i]) : channelList[i].number)+ space + chListType[channelList[i].serviceType];
				divs[0].innerHTML = channelList[i].name;
				$("sortList"+i).src=skipPicture[0];
			}
			else
			{
				channel_li_list[i].style.display="none";
			}
		}
	}
	else
	{
		for (var i=0; i<PAGE_MAX; i++)
		{
				channel_li_list[i].style.display="none";
		}
		 $("fifthListFocus").style.display = "none";
	}
	addMouseListener();
	ttsRead();
}
function toUp()//按上键响应函数
{
	positionV--;
	if(positionV<0)
	{
		var index=channel.getPreviousIndexByIndex(channelList[0].index);
		channelList=channel.getPrevChannelList(0,index,1,PAGE_MAX);
		//判断当前频道是否够显示一页
		var length=channelList.length;
		for (var i=0; i<PAGE_MAX; i++)
		{
				var span = channel_li_list[i].getElementsByTagName("span");
				var divs = channel_li_list[i].getElementsByTagName("div");
				
				if (i<length)
				{
					channel_li_list[i].style.display="block";
					//span[0].innerHTML = channelList[i].number + space + chListType[channelList[i].serviceType];
					span[0].innerHTML = ((top.isLAFlag || top.isNAFlag) ? top.parseChNumber(channelList[i]) : channelList[i].number)+ space + chListType[channelList[i].serviceType];
					divs[0].innerHTML = channelList[i].name;
					if((selectSortNumber==1)&&(channelList[i].index==selectIndex))
					{
						$("sortList"+(i)).src=skipPicture[1];
					}
					else
					{
						$("sortList"+(i)).src=skipPicture[0];
					}
				}
				else
				{
					channel_li_list[i].style.display="none";
				}
		}
		positionV=length-1;
		$("fifthListFocus").style.top = MENU_START+positionV*MENU_STEP+"px";
	}
	else//不需要翻页
	{
		$("fifthListFocus").style.top = MENU_START+positionV*MENU_STEP+"px";
	}
	
}
function toDown()//按下键响应函数
{
	var length = channelList.length;
	positionV++;
	if(positionV>=length ||positionV>=PAGE_MAX)
	{
		var index=channel.getNextIndexByIndex(channelList[length-1].index);
		channelList=channel.getNextChannelList(0,index,1,PAGE_MAX);
		var length=channelList.length;
		for (var i=0; i<PAGE_MAX; i++)
		{
				var span = channel_li_list[i].getElementsByTagName("span");
				var divs = channel_li_list[i].getElementsByTagName("div");
				
				if (i<length)
				{
					channel_li_list[i].style.display="block";
					//span[0].innerHTML = channelList[i].number + space + chListType[channelList[i].serviceType];
					span[0].innerHTML = ((top.isLAFlag || top.isNAFlag) ? top.parseChNumber(channelList[i]) : channelList[i].number)+ space + chListType[channelList[i].serviceType];
					divs[0].innerHTML = channelList[i].name;
					if((selectSortNumber==1)&&(channelList[i].index==selectIndex))
					{
						$("sortList"+i).src=skipPicture[1];
					}
					else
					{
						$("sortList"+i).src=skipPicture[0];
					}
				}
				else
				{
					channel_li_list[i].style.display="none";
				}
		}
		positionV=0;
		$("fifthListFocus").style.top = MENU_START+positionV*MENU_STEP+"px";
	}
	else//不需要翻页
	{
		$("fifthListFocus").style.top = MENU_START+positionV*MENU_STEP+"px";
	}
}

function toOK()//按OK键
{
	if(selectSortNumber==0)
	{
		selectSortNumber=1;
		selectIndex=channelList[positionV].index;
		$("sortList"+positionV).src=skipPicture[1];
	}
	else if(selectSortNumber==1)
	{
		if(channelList[positionV].index==selectIndex)
		{
			$("sortList"+positionV).src=skipPicture[0];
			selectSortNumber=0;
		}
		else
		{
			channel.sortChannel(selectIndex,channelList[positionV].index);
			updateChannelList();
			updateList();
			selectSortNumber=0;
		}
	}
	
}
function updateList()//得到更新后的焦点和所在页数
{
	var length = channelList.length;
	if (length > 0)
	{
		for (var i=0; i<PAGE_MAX; i++)
		{
			var span = channel_li_list[i].getElementsByTagName("span");
			var divs = channel_li_list[i].getElementsByTagName("div");
			
			if (i<length)
			{
				channel_li_list[i].style.display="block";
				//span[0].innerHTML = channelList[i].number + space + chListType[channelList[i].serviceType];
				span[0].innerHTML = ((top.isLAFlag || top.isNAFlag) ? top.parseChNumber(channelList[i]) : channelList[i].number)+ space + chListType[channelList[i].serviceType];
				divs[0].innerHTML = channelList[i].name;
				$("sortList"+i).src=skipPicture[0];	
			}
			else
			{
				channel_li_list[i].style.display="none";
			}
		}
	}
	else
	{
		for (var i=0; i<PAGE_MAX; i++)
		{
				channel_li_list[i].style.display="none";
		}
		 $("fifthListFocus").style.display = "none";
	}
}
function updateChannelList()
{
	channelList=channel.getNextChannelList(0,channelList[0].index,1,PAGE_MAX);
}
function toBack()//按左键或返回键
{
	parent.returnPage(4);
}
function uninit()
{
	channel.resetChannelListType(currentChannelListType);
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
	top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
	top.timeoutFuc.osdTimeoutStartFuc();
	}
	for(var i = 0; i < PAGE_MAX; i++)
	{
		channel_li_list[i].setAttribute("newAttr",i);
		channel_li_list[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				positionV = parseInt(this.getAttribute("newAttr"),10);
				$("fifthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
				toOK();
			}
		}
	}
    $("listUpRemind").onmousedown=function(evt){
		if(evt.button==0){
				toUp();
		}
	}
	$("listDownRemind").onmousedown=function(evt){
		if(evt.button==0){
				toDown();
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
	var ttsName = "";
	var chnumber = channelList[positionV].number;
	var chname = channelList[positionV].name;
	var chtype = chListType[channelList[positionV].serviceType];
	ttsName = chnumber + "," + chtype + "," + chname;
	if ((selectSortNumber == 1) && (channelList[positionV].index == selectIndex))
	{
		currentStatus = top.chOrganizer[4];
	}
	else
	{
		currentStatus = "";
	}
	ttsStr = ttsName + currentStatus;
	if ("" != ttsStr)
	{
		top.ttsLog("ttsStr=" + ttsStr);
		top.setTTSSay(top.SPEECH_TYPE_FLUSH, ttsStr);
	}
}