var chSortTitle              = top.chOrganizer[5];//页面标题
var skipPicture              = ["../../images/option/check_2.png","../../images/option/check_3.png"];//显示skip图标样式 0 ：不是skip channel 1：是skip channel
var chListType		    = [top.chListType[2]/*模拟*/,top.chListType[1]/*数字*/,top.chListType[3]/*radio*/,top.chListType[1]/*数字*/,top.chListType[1]/*数字*/];
var insertWord              = top.insertWord;
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
	//如果按键不是虚拟按键T键，且不是方向键、确认键、返回键，且不是鼠标左键lqt
	if(keycode!=top.VK_VIRTUAL_REMOTE&&(keycode<top.VK_VIRTUAL_KEYBOARD_LEFT||keycode>top.VK_VIRTUAL_KEYBOARD_BACK)&&keycode!=top.VK_VIRTUAL_MOUSE_OK)
	{
		if(keycode<top.VK_0||keycode>top.VK_9)//按虚拟遥控器会产生的按键，数字键
		{
			//如果是显示的话，就隐藏
			if(top.virtualRemoteState == 1)
			{
				//隐藏虚拟遥控器
				top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
			}
		}
		
	}
	switch (keycode)
	{
		case top.VK_VIRTUAL_REMOTE:
			//显示或者不显示--lqt---Settings---Channel---Organiser---channel sort---channel Insert：需要用到红色按键
			if(top.virtualRemoteState == 0)
			{
				console.log("--channelInsert.js--default--keycode----"+keycode);
				top.document.getElementById("virtualRemote").contentWindow.showVirtualRemote("default");
			}
			else
			{
				//隐藏虚拟遥控器
				top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
			}
			break;
		//lqt--虚拟遥控器的上键
		case top.VK_VIRTUAL_KEYBOARD_UP:
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForUp();
			
			break;
		}
		//lqt--虚拟遥控器的下键
		case top.VK_VIRTUAL_KEYBOARD_DOWN:
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForDown();
			
			break;
		}
		//lqt--虚拟遥控器的左键
		case top.VK_VIRTUAL_KEYBOARD_LEFT:
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForLeft();
			
			break;
		}
		//lqt--虚拟遥控器的右键
		case top.VK_VIRTUAL_KEYBOARD_RIGHT:
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForRight(); 
			
			break;
		}
		//lqt--鼠标的左键
		case top.VK_VIRTUAL_MOUSE_OK:
		{
			var clientX = top.g_setting.getProperty("memory.app.ui.virtualRemote.clientX", "0");
			var clientY = top.g_setting.getProperty("memory.app.ui.virtualRemote.clientY", "0");
			console.log("lqt---channelInsert.js---clientX: "+clientX);
			console.log("lqt---channelInsert.js---clientY: "+clientY);
			top.document.getElementById("virtualRemote").contentWindow.keyDownMouseClick(clientX,clientY); 
			
			break;
		}
		//lqt--虚拟遥控器的ok键
		case top.VK_VIRTUAL_KEYBOARD_OK:
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForOK(); 
			
			break;
		}
		//lqt--虚拟遥控器的返回键
		case top.VK_VIRTUAL_KEYBOARD_BACK:
		{
			//如果是显示的话，就隐藏
			if(top.virtualRemoteState == 1)
			{
				//隐藏虚拟遥控器
				top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
			}
			
			break;
		}
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
		case top.VK_RED:
			doInsertOp(channelList[positionV].index);
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

function init()
{
    top.initTextDirection(window);
	timeoutInit();
	currentChannelListType = channel.channelListType ;
	channel_li_list = $("fifthMenuRight").getElementsByTagName("li");
	$("sortId").getElementsByTagName("span")[0].innerHTML=chSortTitle;
	$("insertSpan").innerHTML = insertWord;
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
					if(findInsertIsExist(channelList[i].index))//(selectSortNumber==1)&&(channelList[i].index==selectIndex))
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
					if(findInsertIsExist(channelList[i].index))//(selectSortNumber==1)&&(channelList[i].index==selectIndex))
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
	if(findInsertIsExist(channelList[positionV].index))
	{
		$("sortList"+positionV).src=skipPicture[0];
		distinctInsertFormList(channelList[positionV].index);
	}
	else
	{
		$("sortList"+positionV).src=skipPicture[1];
		pushInsertToList(channelList[positionV].index)
	}
	//console.log("insertList="+insertList)
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
	//for(var i=0;i<channelList.length;i++)
	//console.log("channelList["+i+"].name="+channelList[i].name);
}
function toBack()//按左键或返回键
{
	parent.returnPage(4);
}
function uninit()
{
	channel.resetChannelListType(currentChannelListType);
}
var insertList = [];
var insertListLt = [];
var insertListlg = [];
function findInsertIsExist(insert)
{
	if(insertList.indexOf(insert)==-1)
	{
		return false;
	}
	else
	{
		return true;
	}
}
function pushInsertToList(insert)
{
	insertList.push(insert);
}
function distinctInsertFormList(insert)
{
	var n = insertList.indexOf(insert);
	console.log("n="+n);
	if(n>=0)
	{
		insertList.splice(n,1);
	}
}
function doInsertOp(insert)
{
	//console.log(" start	insert="+insert)
	splitInsertList(insert);
	sortInsertList();
	
	if(insertListlg.length > 0)
	{
		for(var i = 0; i < insertListlg.length; i++ )
		{
			//console.log("	insertListLt[i]-i="+parseInt(insertListlg[i]-i))
			channel.insertChannel(parseInt(insertListlg[i]-i),insert);			
		}
	}
	if(insertListLt.length > 0)
	{
		for(var i = 0; i < insertListLt.length; i++ )
		{
			//console.log("	insertListLt[i]+i="+parseInt(insertListLt[i]+i))
			channel.insertChannel(parseInt(insertListLt[i])+i,insert + 1);
		}
	}
	insertList.length = 0;
	insertListLt.length = 0;
	insertListlg.length = 0;
	updateChannelList();
	updateList();
}
function splitInsertList(insert)
{
	distinctInsertFormList(insert);//删除待插入列表元素中的包含的目标元素
	for(var i=0;i<insertList.length;i++)
	{
		//console.log("parseInt(insertList[i])=="+parseInt(insertList[i])+"insert=="+insert);
		if(parseInt(insertList[i])>insert)
		{
			insertListLt.push(insertList[i]);
		}
		else
		{
			insertListlg.push(insertList[i]);
		}
	}
	//console.log("	insertListLt="+insertListLt);
	//console.log("	insertListlg="+insertListlg);
}
function sortInsertList()
{
	insertListLt.sort(function(a,b){return a<b?1:-1});
	insertListlg.sort(function(a,b){return a>b?1:-1});
	//console.log("	sortInsertList   insertListLt="+insertListLt);
	//console.log("	sortInsertList   insertListlg="+insertListlg);
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
	if (findInsertIsExist(channelList[positionV].index))
	{
		currentStatus = top.chOrganizer[5];
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
