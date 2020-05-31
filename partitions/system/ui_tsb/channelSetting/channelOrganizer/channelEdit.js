var ChEditContentName    = [top.chOrganizer[2],top.chEditDes[0],top.chEditDes[1],top.chEditDes[2]];//页面标题
var chEditPara 			 = top.chEditPara;
var chListType		    = [top.chListType[2]/*模拟*/,top.chListType[1]/*数字*/,top.chListType[3]/*radio*/,top.chListType[1]/*数字*/,top.chListType[1]/*数字*/];
var channelEditNumber    = ["0","0","0","0"];
var channelEditName      = ["","",""];
var space                = "&nbsp;&nbsp;&nbsp;&nbsp;";//用于节目号和节目类型之间的空格
var positionV            = 0;//焦点坐标
var positionEditH        = 0;//编辑的焦点坐标
var positionEditV        = 0;//编辑的焦点坐标
var channelNumber        = 0;
var channelName          = "";
var channelNameIndex     = 0;
var channel_li_list;         //UI选项
var serviceType;             //节目类型
var channelList;             //节目列表
var PAGE_MAX             = 12;//设定每页显示个数
var char_table           = [['0'," ",".",'-','*','&','+','@','#'],
				  ['1'],
				  ['2','a','b','c','A','B','C'],
				  ['3','d','e','f','D','E','F'],
				  ['4','g','h','i','G','H','I'],
				  ['5','j','k','l','J','K','L'],
				  ['6','m','n','o','M','N','O'],
				  ['7','p','q','r','s','P','Q','R','S'],
				  ['8','t','u','v','T','U','V'],
				  ['9','w','x','y','z','W','X','Y','Z'],				
				  ];//用来编辑频道名时的字符库
var alphabet = [' ','!','\"','#','$','%','&','\'','(',')','*','+',',','-','.','/','0','1','2','3','4','5','6','7','8','9',
	':',';','<','=','>','?','@',
	'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
	'[','\\',']','^','_','`',
	'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
	'{','|','}','~'];
var keyCount           = 0;//按键连续按下的次数
var timerID            = 0;//time out 在500ms没有再次按下相同键时被清零
var oldKeyCode         = 0;//上一次的keycode 与本次进行对比用
var currentChannelInfo;    //当前节目信息
var current_page       = 0;//当前页
var index_max          = PAGE_MAX -1;//游标下表数最大值
var MENU_START 		   = 170;//菜单焦点移动起始位置
var MENU_STEP 		   = 70;//主菜单焦点移动的step
var editFinishFlag     = 0;
var currentChannelListType  = 0;
var inputOkFlag        = 0;
var pressKeyFlag       = 0;
var form_position_h    = 0;
var listFormLiList     ;
var FORM_STEP		   = 80;					//弹出框焦点移动的step
var offset             = 0 ;
var CHANNEL_EDIT_START = 96;
var CHANNEL_EDIT_STEP  = 70;
var channel=top.g_channel;//channel 类
var	focusType = "channelList";
document.onsystemevent = notifyProcess;
var repeatTimerIndex = 0;
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
	document.onkeyup   = repeatkeyupproc;
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyproc;
}

function repeatkeyupproc(evt)
{
	if (repeatTimerIndex != 0)
	{
		clearInterval(repeatTimerIndex);
		repeatTimerIndex = 0;
	}
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
			//显示或者不显示--lqt---Settings---Channel---Organiser---Channel edit---ok：需要输入数字
			if(top.virtualRemoteState == 0)
			{
				console.log("--channelEdit.js--TimeBox--keycode----"+keycode);
				top.document.getElementById("virtualRemote").contentWindow.showVirtualRemote("TimeBox");
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
			console.log("lqt---channelEdit.js---clientX: "+clientX);
			console.log("lqt---channelEdit.js---clientY: "+clientY);
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
			if(timerID!=0)
			{
				clearTimeout(timerID);
				timerID=0;
				keyCount = 0;
				pressKeyFlag = 0;
			}
			toUp();
			ttsRead();
			ret = false;
			break;
		case top.VK_DOWN:
			if(timerID!=0)
			{
				clearTimeout(timerID);
				timerID=0;
				keyCount = 0;
				pressKeyFlag = 0;
			}
			toDown();
			ttsRead();
			ret = false;
			break;
		case top.VK_ENTER:
			if(timerID!=0)
			{
				clearTimeout(timerID);
				timerID=0;
				keyCount = 0;
				pressKeyFlag = 0;
			}
			toOK();
			ttsRead();
			ret = false;
			break;
		case top.VK_BACK: //back
			if(timerID!=0)
			{
				clearTimeout(timerID);
				timerID=0;
				keyCount = 0;
				pressKeyFlag = 0;
			}
			if(focusType=="channelEdit" && positionEditV==1 && channelName!="")
				deleteChannelName();
			else
			 	toBack();
			ttsRead();
			 break;
		case top.VK_LEFT:
			if(timerID!=0)
			{
				clearTimeout(timerID);
				timerID=0;
				keyCount = 0;
				pressKeyFlag = 0;
			}
			toLeft();
			ttsRead();
			ret = false;
			break;
		case top.VK_RIGHT:
			if(timerID!=0)
			{
				clearTimeout(timerID);
				timerID=0;
				keyCount = 0;
				pressKeyFlag = 0;
			}
			toRight();
			ttsRead();
			break;
		case top.VK_RED:
			if(timerID!=0)
			{
				clearTimeout(timerID);
				timerID=0;
				keyCount = 0;
				pressKeyFlag = 0;
			}
			if(focusType=="channelEdit" && positionEditV==1)
			{
				deleteChannelName();
			}
			break;
		case top.VK_0:
			if(focusType=="channelEdit" &&positionEditV==0)
			{
				setValue(0);
			}
			else if(focusType=="channelEdit" && positionEditV==1)
			{
				checkInput(keycode);
			}
			else if (focusType == "channelShowKey" && positionEditV==1)
			{
                setNumValue(0);
			}
			break;
		case top.VK_1:
			if(focusType=="channelEdit" &&positionEditV==0)
			{
				setValue(1);
			}
			else if(focusType=="channelEdit" && positionEditV==1)
			{
				checkInput(keycode);
			}
			else if (focusType == "channelShowKey" && positionEditV==1)
			{
                setNumValue(1);
			}
			break;
		case top.VK_2:
			if(focusType=="channelEdit" &&positionEditV==0)
			{
				setValue(2);
			}
			else if(focusType=="channelEdit" && positionEditV==1)
			{
				checkInput(keycode);
			}
			else if (focusType == "channelShowKey" && positionEditV==1)
			{
                setNumValue(2);
			}
			break;
		case top.VK_3:
			if(focusType=="channelEdit" &&positionEditV==0)
			{
				setValue(3);
			}
			else if(focusType=="channelEdit" && positionEditV==1)
			{
				checkInput(keycode);
			}
			else if (focusType == "channelShowKey" && positionEditV==1)
			{
                setNumValue(3);
			}
			break;
		case top.VK_4:
			if(focusType=="channelEdit" &&positionEditV==0)
			{
				setValue(4);
			}
			else if(focusType=="channelEdit" && positionEditV==1)
			{
				checkInput(keycode);
			}
			else if (focusType == "channelShowKey" && positionEditV==1)
			{
                setNumValue(4);
			}
			break;
		case top.VK_5:
			if(focusType=="channelEdit" &&positionEditV==0)
			{
				setValue(5);
			}
			else if(focusType=="channelEdit" && positionEditV==1)
			{
				checkInput(keycode);
			}
			else if (focusType == "channelShowKey" && positionEditV==1)
			{
                setNumValue(5);
			}
			break;
		case top.VK_6:
			if(focusType=="channelEdit" &&positionEditV==0)
			{
				setValue(6);
			}
			else if(focusType=="channelEdit" && positionEditV==1)
			{
				checkInput(keycode);
			}
			else if (focusType == "channelShowKey" && positionEditV==1)
			{
                setNumValue(6);
			}
			break;
		case top.VK_7:
			if(focusType=="channelEdit" &&positionEditV==0)
			{
				setValue(7);
			}
			else if(focusType=="channelEdit" && positionEditV==1)
			{
				checkInput(keycode);
			}
			else if (focusType == "channelShowKey" && positionEditV==1)
			{
                setNumValue(7);
			}
			break;
		case top.VK_8:
			if(focusType=="channelEdit" &&positionEditV==0)
			{
				setValue(8);
			}
			else if(focusType=="channelEdit" && positionEditV==1)
			{
				checkInput(keycode);
			}
			else if (focusType == "channelShowKey" && positionEditV==1)
			{
                setNumValue(8);
			}
			break;
		case top.VK_9:
			if(focusType=="channelEdit" &&positionEditV==0)
			{
				setValue(9);
			}
			else if(focusType=="channelEdit" && positionEditV==1)
			{
				checkInput(keycode);
			}
			else if (focusType == "channelShowKey" && positionEditV==1)
			{
                setNumValue(9);
			}
			break;
		case top.VK_EXIT:
			top.keyDownProcess(evt);
			break;
		case 32://特殊符号
		case 33:
		case 34:
		case 35:
		case 36:
		//case 37:
		//case 38:
		//case 39:
		//case 40:
		case 41:
		case 42:
		case 43:
		case 44:
		case 45:
		case 46:
		case 47:


		case 58://特殊符号
		case 59:
		case 60:
		case 61:
		case 62:
		case 63:
		case 64:
		case 65://大写字母
		case 66:
		case 67:
		case 68:
		case 69:
		case 70:
		case 71:
		case 72:
		case 73:
		case 74:
		case 75:
		case 76:
		case 77:
		case 78:
		case 79:
		case 80:
		case 81:
		case 82:
		case 83:
		case 84:
		case 85:
		case 86:
		case 87:
		case 88:
		case 89:
		case 90:
		case 91:
		case 92:
		case 93:
		case 94:
		case 95:
		case 96:
		case 123://特殊符号
		case 124:
		case 125:
		case 126:

		case 293:
		case 294:
		case 295:
		case 296:

		case 353:///小写字母 按键值  0x100 + ascii
		case 354:
		case 355:
		case 356:
		case 357:
		case 358:
		case 359:
		case 360:
		case 361:
		case 362:
		case 363:
		case 364:
		case 365:
		case 366:
		case 367:
		case 368:
		case 369:
		case 370:
		case 371:
		case 372:
		case 373:
		case 374:
		case 375:
		case 376:
		case 377:
		case 378:
            if(focusType=="channelEdit" && positionEditV==1)
			{
				checkInput(keycode);
			}
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

var channelEditButtonClassList;
var channelEditLi;
function init()
{
    top.initTextDirection(window);
	try
	{
	timeoutInit();
	channelEditButtonClassList = $("channelEditBox").getElementsByClassName("channelEditButton");
	currentChannelListType = channel.channelListType;
	channel_li_list = $("fourthMenuRight").getElementsByTagName("li");
	$("editId").getElementsByTagName("span")[0].innerHTML=ChEditContentName[0];
	channelEditLi = $("channelEditList").getElementsByTagName("li");
	channelEditLi[0].getElementsByTagName("span")[0].innerHTML=chEditPara[0];
	channelEditLi[1].getElementsByTagName("span")[0].innerHTML=chEditPara[1];
	channelEditLi[2].getElementsByTagName("span")[0].innerHTML=chEditPara[2];
	channelEditLi[3].getElementsByTagName("span")[0].innerHTML=chEditPara[3];
	channelEditLi[4].getElementsByTagName("span")[0].innerHTML=chEditPara[4];
	channelEditLi[5].getElementsByTagName("span")[0].innerHTML=chEditPara[5];
	$("channelEditBoxTitle").getElementsByTagName("span")[0].innerHTML=ChEditContentName[0];
	$("channelButton").getElementsByTagName("div")[0].innerHTML=top.okCancel[0];
	$("channelButton").getElementsByTagName("div")[1].innerHTML=top.okCancel[1];
	currentChannelInfo = channel.getCurrentChannelInfo();
	channelList=channel.getNextChannelList(0,currentChannelInfo.index,1,PAGE_MAX);
	// channelList =channel.getChannelList(0,currentChannelInfo.index,1);
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
		$("fourthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
		$("fourthListFocus").style.display="block";
		for (var i=0; i<PAGE_MAX; i++)
		{
			var span = channel_li_list[i].getElementsByTagName("span");
			var divs = channel_li_list[i].getElementsByTagName("div");
			
			if (i<length)
			{
				channel_li_list[i].style.display="block";
				//channel.testLog("channelList["+i+"].number="+channelList[i].number+"channelList[i].serviceType="+channelList[i].serviceType+"channelList[i].name="+channelList[i].name);
				//span[0].innerHTML = channelList[i].number + space + chListType[channelList[i].serviceType];
				span[0].innerHTML = ((top.isLAFlag || top.isNAFlag) ? top.parseChNumber(channelList[i]) : channelList[i].number)+ space + chListType[channelList[i].serviceType];
				divs[0].innerHTML = channelList[i].name;
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
		$("fourthListFocus").style.display="none";
	}
	}catch(er)
	{
		channel.testLog(er);
	}
	addMouseListener();
	ttsRead();
}
function toUp()//按上键响应函数
{
	if(focusType == "channelList")
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
						//channel.testLog("channelList["+i+"].number="+channelList[i].number+"channelList[i].serviceType="+channelList[i].serviceType+"channelList[i].name="+channelList[i].name);
						//span[0].innerHTML = channelList[i].number + space + chListType[channelList[i].serviceType];
						span[0].innerHTML = ((top.isLAFlag || top.isNAFlag) ? top.parseChNumber(channelList[i]) : channelList[i].number)+ space + chListType[channelList[i].serviceType];
						divs[0].innerHTML = channelList[i].name;
					}
					else
					{
						channel_li_list[i].style.display="none";
					}
			}
			positionV=length-1;
			$("fourthListFocus").style.top = MENU_START+positionV*MENU_STEP+"px";
		}
		else//不需要翻页
		{
			$("fourthListFocus").style.top = MENU_START+positionV*MENU_STEP+"px";
		}
	}
	else if(focusType=="channelEdit")
	{
		if(positionEditV==0)
		{
			$("numSpan"+positionEditH).style.color="#FFFFFF";
			$("channelEditValueFocus").style.display="none";
			$("channelEditButtonFocus").style.display="block";
			focusType="channelEditButton";

		}
		else if(positionEditV==1)
		{
			$("nameSpan0").style.color="#FFFFFF";
			$("nameSpan1").style.color="#FFFFFF";
			$("nameSpan2").style.color="#FFFFFF";
			if($("nameSpan"+positionEditH).innerHTML=="_")
			{
				$("nameSpan"+positionEditH).innerHTML="";
			}
			positionEditH=0;
			$("numSpan"+positionEditH).style.color="#F00";
			positionEditV=0;
			$("channelEditRemind").innerHTML="";
			$("channelEditValueFocus").style.top=(CHANNEL_EDIT_START+positionEditV*CHANNEL_EDIT_STEP)+"px"
		}
		else if(positionEditV==2)
		{
			if(channelList[positionV].serviceType==0)
			{
				$("numSpan"+positionEditH).style.color="#FFFFFF";
				positionEditH=0;
				channelNameIndex=0;
				positionEditV=1;
				resolveChannelName(channelName,channelNameIndex);
				$("channelEditRemind").innerHTML=ChEditContentName[2];
				$("channelEditValueFocus").style.top=(CHANNEL_EDIT_START+positionEditV*CHANNEL_EDIT_STEP)+"px"
			}
		}
		else if(positionEditV==3)
		{
			if(channelList[positionV].serviceType==0)
			{
				positionEditV=2;
				$("channelEditValueFocus").style.top=(CHANNEL_EDIT_START+(positionEditV+1)*CHANNEL_EDIT_STEP)+"px"
			}
		}
	
	}
	else if(focusType=="channelEditButton")
	{
		if(channelList[positionV].serviceType==0)
		{
			positionEditV=3;
			$("channelEditValueFocus").style.top=(CHANNEL_EDIT_START+(positionEditV+1)*CHANNEL_EDIT_STEP)+"px"
			$("channelEditValueFocus").style.display="block";
			$("channelEditButtonFocus").style.display="none";
			focusType="channelEdit";
		}
		else
		{
			$("numSpan"+positionEditH).style.color="#FFFFFF";
			positionEditH=0;
			channelNameIndex=0;
			positionEditV=1;
			resolveChannelName(channelName,channelNameIndex);
			$("channelEditRemind").innerHTML=ChEditContentName[2];
			$("channelEditValueFocus").style.top=(CHANNEL_EDIT_START+positionEditV*CHANNEL_EDIT_STEP)+"px";
			$("channelEditValueFocus").style.display="block";
			$("channelEditButtonFocus").style.display="none";
			focusType="channelEdit";
		}
	}
	else if(focusType == "channelShowKey")
	{
		top.moveUp();
	}
	else if(focusType == "channelColorSystem")
	{
		toFormUp(top.colorSystem.length,top.colorSystem);
	}
	else if(focusType == "channelSoundSystem")
	{
		toFormUp(top.soundSystem.length,top.soundSystem);
	}
	
}
function toDown()//按下键响应函数
{
    if(focusType=="channelEdit")
	{
		if(positionEditV==0)
		{
			$("numSpan"+positionEditH).style.color="#FFFFFF";
			positionEditH=0;
			channelNameIndex=0;
			positionEditV=1;
			resolveChannelName(channelName,channelNameIndex);
			$("channelEditRemind").innerHTML=ChEditContentName[2];
			$("channelEditValueFocus").style.top=(CHANNEL_EDIT_START+positionEditV*CHANNEL_EDIT_STEP)+"px"
		}
		else if(positionEditV==1)
		{
			if(channelList[positionV].serviceType==0)
			{
				$("nameSpan0").style.color="#FFFFFF";
				$("nameSpan1").style.color="#FFFFFF";
				$("nameSpan2").style.color="#FFFFFF";
				if($("nameSpan"+positionEditH).innerHTML=="_")
				{
					$("nameSpan"+positionEditH).innerHTML="";
				}
				positionEditV=2;
				$("channelEditValueFocus").style.top=(CHANNEL_EDIT_START+(positionEditV+1)*CHANNEL_EDIT_STEP)+"px";
			}
			else
			{
				$("nameSpan0").style.color="#FFFFFF";
				$("nameSpan1").style.color="#FFFFFF";
				$("nameSpan2").style.color="#FFFFFF";
				if($("nameSpan"+positionEditH).innerHTML=="_")
				{
					$("nameSpan"+positionEditH).innerHTML="";
				}
				$("channelEditValueFocus").style.display="none";
				$("channelEditButtonFocus").style.display="block";
				focusType="channelEditButton";
			}
            		$("channelEditRemind").innerHTML="";
		}
		else if(positionEditV==2)
		{
			if(channelList[positionV].serviceType==0)
			{
				positionEditV=3;
				$("channelEditValueFocus").style.top=(CHANNEL_EDIT_START+(positionEditV+1)*CHANNEL_EDIT_STEP)+"px";
			}
		}
		else if(positionEditV==3)
		{
			if(channelList[positionV].serviceType==0)
			{
				$("nameSpan0").style.color="#FFFFFF";
				$("nameSpan1").style.color="#FFFFFF";
				$("nameSpan2").style.color="#FFFFFF";
				if($("nameSpan"+positionEditH).innerHTML=="_")
				{
					$("nameSpan"+positionEditH).innerHTML="";
				}
				$("channelEditValueFocus").style.display="none";
				$("channelEditButtonFocus").style.display="block";
				focusType="channelEditButton"
			}
		}
	}
	else if(focusType == "channelList")
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
						//channel.testLog("channelList["+i+"].number="+channelList[i].number+"channelList[i].serviceType="+channelList[i].serviceType+"channelList[i].name="+channelList[i].name);
						//span[0].innerHTML = channelList[i].number + space + chListType[channelList[i].serviceType];
						span[0].innerHTML = ((top.isLAFlag || top.isNAFlag) ? top.parseChNumber(channelList[i]) : channelList[i].number)+ space + chListType[channelList[i].serviceType];
						divs[0].innerHTML = channelList[i].name;
					}
					else
					{
						channel_li_list[i].style.display="none";
					}
			}
			positionV=0;
			$("fourthListFocus").style.top = MENU_START+positionV*MENU_STEP+"px";
		}
		else//不需要翻页
		{
			$("fourthListFocus").style.top = MENU_START+positionV*MENU_STEP+"px";
		}
	}
	else if(focusType == "channelEditButton")
	{
		positionEditV=0;
		$("nameSpan0").style.color="#FFFFFF";
		$("nameSpan1").style.color="#FFFFFF";
		$("nameSpan2").style.color="#FFFFFF";
		if($("nameSpan"+positionEditH).innerHTML=="_")
		{
			$("nameSpan"+positionEditH).innerHTML="";
		}
		positionEditH=0;
		$("numSpan"+positionEditH).style.color="#F00";
		positionEditV=0;
		$("channelEditRemind").innerHTML="";
		$("channelEditValueFocus").style.top=(CHANNEL_EDIT_START+positionEditV*CHANNEL_EDIT_STEP)+"px"
		$("channelEditValueFocus").style.display="block";
		$("channelEditButtonFocus").style.display="none";
		focusType="channelEdit";
	}
	else if(focusType == "channelShowKey")
	{
		top.moveDown();
	}
	else if(focusType == "channelColorSystem")
	{
		toFormDown(top.colorSystem.length,top.colorSystem);
	}
	else if(focusType == "channelSoundSystem")
	{
		toFormDown(top.soundSystem.length,top.soundSystem);
	}
}
function toOK()//按OK键
{
   if(focusType=="channelList")
   {
	    var lis=$("channelEditList").getElementsByTagName("li");
		lis[0].getElementsByTagName("span")[1].innerHTML=channelList[positionV].networkName;
		lis[3].getElementsByTagName("span")[1].innerHTML=channelList[positionV].frequency;
		if(channelList[positionV].serviceType==0)
		{
			$("channelEditBox").style.top="200px";
			$("channelEditBox").style.height="750px";
			$("channelButton").style.top="560px";
			lis[4].style.display="block";
			lis[5].style.display="block";
			lis[4].getElementsByTagName("span")[1].innerHTML=top.colorSystem[channelList[positionV].colorSystem];
			lis[5].getElementsByTagName("span")[1].innerHTML=top.soundSystem[channelList[positionV].soundSystem];
		}
		else
		{
			$("channelEditBox").style.top="260px";
			$("channelEditBox").style.height="630px";
			$("channelButton").style.top="440px";
			lis[4].style.display="none";
			lis[5].style.display="none";
		}
		channelNumber=channelList[positionV].number;
	 	channelName=channelList[positionV].name;
		positionEditH=0;
		positionEditV=0;
		channelNameIndex=0;
		resolveChannelNumber(channelNumber);
		$("numSpan0").innerHTML=channelEditNumber[0];
		$("numSpan1").innerHTML=channelEditNumber[1];
		$("numSpan2").innerHTML=channelEditNumber[2];
		$("numSpan3").innerHTML=channelEditNumber[3];
		resolveChannelName(channelName,channelNameIndex);
		focusType="channelEdit";
		$("numSpan"+positionEditH).style.color="#F00";
		$("nameSpan0").style.color="#FFFFFF";
		$("nameSpan1").style.color="#FFFFFF";
		$("nameSpan2").style.color="#FFFFFF";
		$("channelEditValueFocus").style.top=CHANNEL_EDIT_START+"px";
		$("channelEditValueFocus").style.display="block";
		$("channelEditBox").style.display="block";
		parent.hiddenPage(3);
   }
   else if(focusType=="channelEdit")
   {
	   if(positionEditV==0)
	   {
		    var tempName="";
			if(channelEditName[0]!=""&&channelEditName[0]!="_")
			{
				tempName=tempName+channelEditName[0];
			}
			if(channelEditName[1]!=""&&channelEditName[1]!="_")
			{
				tempName=tempName+channelEditName[1];
			}
			if(channelEditName[2]!=""&&channelEditName[2]!="_")
			{
				tempName=tempName+channelEditName[2];
			}
			channelList[positionV].name=tempName;
			var tempNumb=channelEditNumber[0]*1000+channelEditNumber[1]*100+channelEditNumber[2]*10+channelEditNumber[3];
			if(parseInt(tempNumb,10)==0)
			{
				$("channelEditRemind").innerHTML = ChEditContentName[3];
				setTimeout(function(){
				if(positionEditV==0)
				{
					$("channelEditRemind").innerHTML="";
				}
				else
				{
					$("channelEditRemind").innerHTML=ChEditContentName[2];
				}},2000);
				return;
			}
			if(checkNumberExist(parseInt(tempNumb,10))==1)
			{
				$("channelEditRemind").innerHTML = ChEditContentName[1];
				setTimeout(function(){
				if(positionEditV==0)
				{
					$("channelEditRemind").innerHTML="";
				}
				else
				{
					$("channelEditRemind").innerHTML=ChEditContentName[2];
				}},2000);
				return;
			}
			channelList[positionV].number=parseInt(tempNumb,10);
			updateChannelList();
			 $("numSpan0").style.color="#FFFFFF";
			 $("numSpan1").style.color="#FFFFFF";
			 $("numSpan2").style.color="#FFFFFF";
			 $("numSpan3").style.color="#FFFFFF";
			parent.showPage(3);
			$("channelEditBox").style.display="none"; 
			focusType="channelList"
	   }
	   else if(positionEditV==1)
	   {
		   top.mouseCallBack.funcOk=toOK;
		   top.mouseCallBack.funcBack=toBack;
           top.mouseCallBack.funcMouseUp=repeatkeyupproc;
		   top.showKeyBoard();
		   focusType = "channelShowKey";
	   }
	   else if(positionEditV==2)
	   {
		   if(channelList[positionV].serviceType==0)
		   {
			   initColorSystem();
		   }
	   }
	   else if(positionEditV==3)
	   {
		   if(channelList[positionV].serviceType==0)
		   {
			   initSoundSystem();
		   }
	   }
   }
   else if(focusType == "channelEditButton")
	{
		if(editFinishFlag==1)
		{
			var tempName="";
			if(channelEditName[0]!=""&&channelEditName[0]!="_")
			{
				tempName=tempName+channelEditName[0];
			}
			if(channelEditName[1]!=""&&channelEditName[1]!="_")
			{
				tempName=tempName+channelEditName[1];
			}
			if(channelEditName[2]!=""&&channelEditName[2]!="_")
			{
				tempName=tempName+channelEditName[2];
			}
			 var tempNumb=channelEditNumber[0]*1000+channelEditNumber[1]*100+channelEditNumber[2]*10+channelEditNumber[3];
			//console.log("tempName = "+tempName+"tempNumb = "+tempNumb);
			//console.log("channelNumber = "+channelNumber+"channelName = "+channelName);
			if(channelNumber == tempNumb)//only modified name  
			{
				channelList[positionV].name=tempName;
			}
			else//modified channelNumber
			{
				 if(parseInt(tempNumb,10)==0)
				{
					$("channelEditRemind").innerHTML = ChEditContentName[3];
					setTimeout(function(){
					if(positionEditV==0)
					{
						$("channelEditRemind").innerHTML="";
					}
					else
					{
						$("channelEditRemind").innerHTML=ChEditContentName[2];
					}},2000);
					return;
				}
				if(checkNumberExist(parseInt(tempNumb,10))==1)
				{
					$("channelEditRemind").innerHTML = ChEditContentName[1];
					setTimeout(function(){
					if(positionEditV==0)
					{
						$("channelEditRemind").innerHTML="";
					}
					else
					{
						$("channelEditRemind").innerHTML=ChEditContentName[2];
					}},2000);
					return;
				}
				channelList[positionV].name=tempName;
				channelList[positionV].number=parseInt(tempNumb,10);
			}
			updateChannelList();
			 $("numSpan0").style.color="#FFFFFF";
			 $("numSpan1").style.color="#FFFFFF";
			 $("numSpan2").style.color="#FFFFFF";
			 $("numSpan3").style.color="#FFFFFF";
			parent.showPage(3);
			$("channelEditButtonFocus").style.display="none";
			$("channelEditBox").style.display="none"; 
			focusType="channelList";
		}
		else
		{
			 $("numSpan0").style.color="#FFFFFF";
			 $("numSpan1").style.color="#FFFFFF";
			 $("numSpan2").style.color="#FFFFFF";
			 $("numSpan3").style.color="#FFFFFF";
			parent.showPage(3);
			$("channelEditButtonFocus").style.display="none";
			$("channelEditBox").style.display="none"; 
			focusType="channelList"
		}
	}
	else if(focusType == "channelShowKey")
	{
		var key=top.toOkGetChar();
		if(key=="back")
		{
			deleteChannelName();

            //NT563平台持续按输入法的回退按键会导致setInterval里的函数无限循环执行，从而导致输入法无法输入字符
            if (repeatTimerIndex != 0)
            {
                clearInterval(repeatTimerIndex);
                repeatTimerIndex = 0;
            }

			repeatTimerIndex = setInterval(function()
			{
				deleteChannelName();
				top.timeoutFuc.osdTimeoutEndFuc();
				top.timeoutFuc.osdTimeoutStartFuc();
			},300);
		}
		else if(key=="!one" || key =="shift" || key=="symPage1" || key=="symPage2" ||key=="changeChar" || key=="changeLang" || key=="setting")
		{
			return;
		}
		else
		{
			$("nameSpan"+positionEditH).innerHTML=top.replaceT(key);
			channelEditName[positionEditH]=key;
			channelName=channelEditName[0];
			if(channelEditName[1]!=""&&channelEditName[1]!="_")
			{
				channelName=channelName+channelEditName[1];
			}
			if(channelEditName[2]!=""&&channelEditName[2]!="_")
			{
				channelName=channelName+channelEditName[2];
			}
			inputOkFlag = 1;
			toRight();
		}
	}
	else if(focusType == "channelColorSystem")
	{
		channelList[positionV].colorSystem=form_position_h + offset;
		var lis=$("channelEditList").getElementsByTagName("li");
		lis[4].getElementsByTagName("span")[1].innerHTML=top.colorSystem[form_position_h + offset];
		$("listForm").style.display = "none";
		focusType = "channelEdit";
		offset = 0;
	}
	else if(focusType == "channelSoundSystem")
	{
        if(currentChannelInfo.index==channelList[positionV].index)
        {
            channelList[positionV].soundSystem=form_position_h + offset;
        }
        else
        {
            channelList[positionV].saveSoundSystem(form_position_h + offset);
        }
		var lis=$("channelEditList").getElementsByTagName("li");
		lis[5].getElementsByTagName("span")[1].innerHTML=top.soundSystem[form_position_h + offset];
		$("listForm").style.display = "none";
		focusType = "channelEdit";
		offset = 0;
	}
}
function toBack()
{
	if(focusType=="channelList")
	{
		parent.returnPage(3);
	}
	else if(focusType=="channelEdit")
	{
		$("numSpan0").style.color="#FFFFFF";
		 $("numSpan1").style.color="#FFFFFF";
		 $("numSpan2").style.color="#FFFFFF";
		 $("numSpan3").style.color="#FFFFFF";
		parent.showPage(3);
		$("channelEditButtonFocus").style.display="none";
		$("channelEditBox").style.display="none"; 
		focusType="channelList"
	}
	else if(focusType == "channelShowKey")
	{
		if(top.tobackKeyBoard()=="menuBack")
		focusType = "channelEdit";
	}
	else if(focusType == "channelColorSystem")
	{
		$("listForm").style.display = "none";
		focusType = "channelEdit";
		offset = 0;
	}
	else if(focusType == "channelSoundSystem")
	{
		$("listForm").style.display = "none";
		focusType = "channelEdit";
		offset = 0;
	}
}
function toLeft()//按左键或返回键
{
	if(focusType=="channelList")
	{
		parent.returnPage(3);
	}
	else if(focusType=="channelEdit")
	{
		if(positionEditV==0)
		{
			$("numSpan"+positionEditH).style.color="#FFFFFF";
			positionEditH--;
			if(positionEditH<0)
			{
				positionEditH=3;
			}
			$("numSpan"+positionEditH).style.color="#F00";
		}
		else if(positionEditV==1)
		{
			channelNameIndex--;
			if(channelNameIndex<0)
			{
				channelNameIndex=channelName.length;
			}
			if(channelNameIndex>19)
			{
				channelNameIndex=19;
			}
			resolveChannelName(channelName,channelNameIndex);
		}
	}
	else if(focusType == "channelEditButton")
	{
		if(editFinishFlag==1)
		{
			editFinishFlag=0;
			$("channelEditButtonFocus").style.left="400px";
		}
		else
		{
			editFinishFlag=1;
			$("channelEditButtonFocus").style.left="100px";
		}
	}
	else if(focusType == "channelShowKey")
	{
		top.moveLeft();
	}
	else if(focusType == "channelColorSystem")
	{
		$("listForm").style.display = "none";
		focusType = "channelEdit";
		offset = 0;
	}
	else if(focusType == "channelSoundSystem")
	{
		$("listForm").style.display = "none";
		focusType = "channelEdit";
		offset = 0;
	}
}
function toRight()//右键
{
	if(focusType=="channelList")
	{
		toOK();
	}
	else if(focusType=="channelEdit")
	{
		if(positionEditV==0)
		{
			$("numSpan"+positionEditH).style.color="#FFFFFF";
			positionEditH++;
			if(positionEditH>3)
			{
				positionEditH=0;
			}
			$("numSpan"+positionEditH).style.color="#F00";
		}
		else if(positionEditV==1)
		{
			channelNameIndex++;
			if(channelNameIndex>channelName.length || channelNameIndex>19)
			{
				channelNameIndex=0;
			}
			resolveChannelName(channelName,channelNameIndex);
		}
	}
	else if(focusType == "channelEditButton")
	{
		if(editFinishFlag==1)
		{
			editFinishFlag=0;
			$("channelEditButtonFocus").style.left="400px";
		}
		else
		{
			editFinishFlag=1;
			$("channelEditButtonFocus").style.left="100px";
		}
	}
	else if(focusType == "channelShowKey")
	{
		if(inputOkFlag==1)
		{
			channelNameIndex++;
			if(channelNameIndex>channelName.length || channelNameIndex>19)
			{
				channelNameIndex=0;
			}
			resolveChannelName(channelName,channelNameIndex);
			inputOkFlag=0;
		}
		else
		{
			top.moveRight();
		}
	}
}

function updateChannelList()//更新节目列表数组
{
	channelList=channel.getNextChannelList(0,channelList[0].index,1,PAGE_MAX);
	// channelList =channel.getChannelList(0,currentChannelInfo.index,1);
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
		$("fourthListFocus").style.display="none";
	}
}


function resolveChannelNumber(number)//分离出频道号的每一位存放到数组中
{
	channelEditNumber[0]=parseInt(number/1000);
	channelEditNumber[1]=parseInt((number%1000)/100);
	channelEditNumber[2]=parseInt((number%100)/10);
	channelEditNumber[3]=parseInt(number%10);
}

function resolveChannelName(name,index)//分离出频道名在分散在三个span中
{
	if(index<0 || name.length==0)
	{
		channelEditName[0]="_";
		channelEditName[1]="";
		channelEditName[2]="";
		if(positionEditV==1)//防止初始时name编辑栏字体变红
		{
			positionEditH=0;
			$("nameSpan0").style.color="#F00";
			$("nameSpan1").style.color="#FFFFFF";
			$("nameSpan2").style.color="#FFFFFF";
		}
		channelNameIndex=0;
		$("nameSpan0").innerHTML=top.replaceT(channelEditName[0]);
		$("nameSpan1").innerHTML=top.replaceT(channelEditName[1]);
		$("nameSpan2").innerHTML=top.replaceT(channelEditName[2]);
	}
	else if(index==0)
	{
		channelEditName[0]=name.substring(0,1);
		channelEditName[1]=name.substring(1);
		channelEditName[2]="";
		if(positionEditV==1)//防止初始时name编辑栏字体变红
		{
			positionEditH=0;
			$("nameSpan0").style.color="#F00";
			$("nameSpan1").style.color="#FFFFFF";
			$("nameSpan2").style.color="#FFFFFF";
		}
		if(top.replaceT(channelEditName[0])==" ")
		{
			$("nameSpan0").innerHTML="_";
		}
		else
		{
			$("nameSpan0").innerHTML=top.replaceT(channelEditName[0]);
		}
		$("nameSpan1").innerHTML=top.replaceT(channelEditName[1]);
		$("nameSpan2").innerHTML=top.replaceT(channelEditName[2]);
	}
	/*
	else if(index==19)
	{
		channelEditName[0]="";
		channelEditName[1]=name.substring(0,name.length-1);
		channelEditName[2]=name.substring(name.length-1,name.length);
		if(positionEditV==1)
		{
			positionEditH=2;
			$("nameSpan2").style.color="#F00";
			$("nameSpan1").style.color="#000";
			$("nameSpan0").style.color="#000";
		}
	}
	/*
	else if(index==name.length-1)
	{
		channelEditName[0]=name.substring(0,name.length-1);
		channelEditName[1]=name.substring(name.length-1,name.length);
		channelEditName[2]=""
		if(positionEditV==1)
		{
			positionEditH=1;
			$("nameSpan1").style.color="#F00";
			$("nameSpan0").style.color="#000";
			$("nameSpan2").style.color="#000";
		}
	}
	*/
	else if(index==name.length)
	{
		channelEditName[0]=name.substring(0,name.length);
		channelEditName[1]="_";
		channelEditName[2]=""
		if(positionEditV==1)
		{
			positionEditH=1;
			$("nameSpan1").style.color="#F00";
			$("nameSpan0").style.color="#FFFFFF";
			$("nameSpan2").style.color="#FFFFFF";
		}
		$("nameSpan1").innerHTML=top.replaceT(channelEditName[1]);
		$("nameSpan0").innerHTML=top.replaceT(channelEditName[0]);
		$("nameSpan2").innerHTML=top.replaceT(channelEditName[2]);
	}
	else
	{
		channelEditName[0]=name.substring(0,index);
		channelEditName[1]=name.substring(index,index+1);
		channelEditName[2]=name.substring(index+1,name.length);
		if(positionEditV==1)
		{
			positionEditH=1;
			$("nameSpan1").style.color="#F00";
			$("nameSpan0").style.color="#FFFFFF";
			$("nameSpan2").style.color="#FFFFFF";
		}
		if(top.replaceT(channelEditName[1])==" ")
		{
			console.log("this is a null char");
			$("nameSpan1").innerHTML="_";
		}
		else
		{
			$("nameSpan1").innerHTML=top.replaceT(channelEditName[1]);
		}
		$("nameSpan0").innerHTML=top.replaceT(channelEditName[0]);
		$("nameSpan2").innerHTML=top.replaceT(channelEditName[2]);
	}
}
function setValue(number)//设置频道号显示
{
	if(positionEditV==0)
	{
		$("numSpan"+positionEditH).innerHTML=number;
		channelEditNumber[positionEditH]=number;
		toRight();
	}
	else
	{
		checkInput(keycode);
	}
}

function setNumValue(number)//在输入法显示的时候，按数字键可以编辑频道名
{
    $("nameSpan"+positionEditH).innerHTML=number;
    channelEditName[positionEditH]=number;
    channelName=channelEditName[0];
    if(channelEditName[1]!=""&&channelEditName[1]!="_")
    {
        channelName=channelName+channelEditName[1];
    }
    if(channelEditName[2]!=""&&channelEditName[2]!="_")
    {
        channelName=channelName+channelEditName[2];
    }

    channelNameIndex++;
    if(channelNameIndex>channelName.length || channelNameIndex>19)
    {
        channelNameIndex=0;
    }
    resolveChannelName(channelName,channelNameIndex);
}


function checkNumberExist(number)//检查该节目号是否已经存在
{
	//int listType is all , int start to zero , int channelListType, int number
	if(channel.checkNumberExist(number))
	{
		return 1;
	}
	else
	{
		return 0;
	}
	/*
	var i=0;
	var allchannelList=channel.getPrevChannelList(0,0,1,9999);
   	 while(i<allchannelList.length)
	{
		channel.testLog("--checkNumberExist--number = "+ number+ "allchannelList.length = "+allchannelList.length+"allchannelList["+i+"].number =" +allchannelList[i].number+ "allchannelList["+positionV+ "].number" +allchannelList[positionV].number);
		if(allchannelList[i].number==number && channelList[positionV].number !=number)
		{
			
		}
		i++;
	}
	if(i==allchannelList.length)
	{
		return 0;
	}
	*/
}
function checkInput(keycode)//修改频道名的函数
{
    //第一次的时候
	clearTimeout(timerID);
	timerID=0;
	if (pressKeyFlag==0)
	{
		pressKeyFlag++;
		var inputChar = ' ';
		if ((keycode>=32 && keycode<=47) || (keycode>=58 && keycode<=96) ||(keycode>=353 && keycode<=378)||(keycode>=123 && keycode<=126)||(keycode>=293 && keycode<=296))
		{
			keyCount = 0;
			if((keycode>=32 && keycode<=47) || (keycode>=58 && keycode<=96)||(keycode>=123 && keycode<=126))
				inputChar = alphabet[keycode-32];
			else if(keycode>=353 && keycode<=378)
			{
				inputChar = alphabet[keycode-288];
			}
			else
			{
				inputChar = alphabet[keycode-288]
			}
		}
        else
        {
            var keyTableLine = keycode - 48;
            if (keyCount>=char_table[keyTableLine].length)
            {
                keyCount = 0;
            }
            inputChar = char_table[keyTableLine][keyCount];
        }
		$("nameSpan"+positionEditH).innerHTML=inputChar;
		channelEditName[positionEditH]=inputChar;
		channelName=channelEditName[0];
		if(channelEditName[1]!=""&&channelEditName[1]!="_")
		{
			channelName=channelName+channelEditName[1];
		}
		if(channelEditName[2]!=""&&channelEditName[2]!="_")
		{
			channelName=channelName+channelEditName[2];
		}
		timerID =  setTimeout("setChar()",400);
	}
	else//其他时候
	{
		if (oldKeyCode == keycode)
		{
            var inputChar = ' ';
            if ((keycode>=32 && keycode<=47) || (keycode>=58 && keycode<=96) ||(keycode>=353 && keycode<=378)||(keycode>=123 && keycode<=126)||(keycode>=293 && keycode<=296))
            {
				setChar();
                keyCount = 0;
				if((keycode>=32 && keycode<=47) || (keycode>=58 && keycode<=96)||(keycode>=123 && keycode<=126))
					inputChar = alphabet[keycode-32];
				else if(keycode>=353 && keycode<=378)
				{
					inputChar = alphabet[keycode-288];
				}
				else
				{
					inputChar = alphabet[keycode-288]
				}
            }
            else
            {
                keyCount++;
                var keyTableLine = keycode - 48;
                if (keyCount>=char_table[keyTableLine].length)
                {
                    keyCount = 0;
                }
				if(1==char_table[keyTableLine].length)
				{
					setChar();
				}
                inputChar = char_table[keyTableLine][keyCount];
            }
			$("nameSpan"+positionEditH).innerHTML=inputChar;
			channelEditName[positionEditH]=inputChar;
			channelName=channelEditName[0];
			if(channelEditName[1]!=""&&channelEditName[1]!="_")
			{
				channelName=channelName+channelEditName[1];
			}
			if(channelEditName[2]!=""&&channelEditName[2]!="_")
			{
				channelName=channelName+channelEditName[2];
			}
			timerID =  setTimeout("setChar()",400);
			
		}
		else
		{
			setChar();
			keyCount = 0;
            var inputChar = ' ';
			if ((keycode>=32 && keycode<=47) || (keycode>=58 && keycode<=96) ||(keycode>=353 && keycode<=378)||(keycode>=123 && keycode<=126)||(keycode>=293 && keycode<=296))
            {
				if((keycode>=32 && keycode<=47) || (keycode>=58 && keycode<=96)||(keycode>=123 && keycode<=126))
					inputChar = alphabet[keycode-32];
				else if(keycode>=353 && keycode<=378)
				{
					inputChar = alphabet[keycode-288];
				}
				else
				{
					inputChar = alphabet[keycode-288]
				}
            }
            else
            {
                var keyTableLine = keycode - 48;
                if (keyCount>=char_table[keyTableLine].length)
                {
                    keyCount = 0;
                }
                inputChar = char_table[keyTableLine][keyCount];
            }
			$("nameSpan"+positionEditH).innerHTML=inputChar;
			channelEditName[positionEditH]=inputChar;
			channelName=channelEditName[0];
			if(channelEditName[1]!=""&&channelEditName[1]!="_")
			{
				channelName=channelName+channelEditName[1];
			}
			if(channelEditName[2]!=""&&channelEditName[2]!="_")
			{
				channelName=channelName+channelEditName[2];
			}
			timerID =  setTimeout("setChar()",400);
		 }
      }
	  
	oldKeyCode = keycode;
}

function setChar()
{
	channel.testLog("clearTimeout------->>>>>");
	keyCount = 0;
	timerID = 0;
	pressKeyFlag = 0;
	toRight();
}
function deleteChannelName()
{
	if(channelName=="")
		return;
	if(positionEditH==0)
	{
		channelName="";
		if(channelEditName[1]!=""&&channelEditName[1]!="_")
		{
			channelName=channelName+channelEditName[1];
		}
		if(channelEditName[2]!=""&&channelEditName[2]!="_")
		{
			channelName=channelName+channelEditName[2];
		}
	}
	else if(positionEditH==1)
	{
		channelName=channelEditName[0];
		if(channelEditName[2]!=""&&channelEditName[2]!="_")
		{
			channelName=channelName+channelEditName[2];
		}
	}
	else
	{
		channelName=channelEditName[0];
		if(channelEditName[1]!=""&&channelEditName[1]!="_")
		{
			channelName=channelName+channelEditName[1];
		}
	}
	channelNameIndex--;
	if(channelNameIndex<0)
	{
		channelNameIndex=channelName.length-1;
	}
	resolveChannelName(channelName,channelNameIndex);
}
function initColorSystem()
{
	try
	{
	form_position_h = 0;
	var topOffset = 270+CHANNEL_EDIT_START+(positionEditV+1)*CHANNEL_EDIT_STEP - 10;
	var leftOffset = 1333;
	listFormLiList = $("listForm").getElementsByTagName("li");
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,top.colorSystem,top.colorSystem.length,form_position_h,channelList[positionV].colorSystem);
	focusType = "channelColorSystem";
	}catch(er)
	{
		channel.testLog("initColorSystem:"+er)
	}
				
}
/*
描述：在语言列表出来的时候按Down键刷新焦点的效果
参数：sumLang：允许的语言总数量；langIndexList：所有允许的语言的索引值保存在langIndexList数组中
全局变量：form_position_h；offset;
*/
function toFormDown(sumForm,systemArray)
{
	try
	{
    if((form_position_h + offset) >= (sumForm - 1))
	{
		offset=0;
		for(var i = 0; i < 5&&i<sumForm; i++)
		{
			listFormLiList[i].innerHTML = systemArray[i+offset];
		}
		form_position_h = 0;
	}
	else if(form_position_h == 4 && (form_position_h + offset) < (sumForm - 1))
	{
		offset++;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = systemArray[i+offset];
		}
	}
	else
	{
		form_position_h++;
	}
	$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
	if(offset > 0)
	{
		$("listUpImg").style.display = "block";
	}
	else
	{
		$("listUpImg").style.display = "none";
	}
	
	if((offset + 4) >= (sumForm - 1))
	{
		$("listDownImg").style.display = "none";
	}
	else
	{
		$("listDownImg").style.display = "block";
	}
		}catch(er)
	{
		channel.testLog("toFormDown:"+er);
	}
}

/*
描述：在语言列表出来的时候按Up键刷新焦点的效果
参数：sumLang：允许的语言总数量；langIndexList：所有允许的语言的索引值保存在langIndexList数组中
全局变量：form_position_h；offset;
*/
function toFormUp(sumForm,systemArray)
{
	try
	{
	if(form_position_h == 0 && offset == 0)
	{
		if(sumForm>5)
		{
			offset = sumForm - 5;
			form_position_h = 4;
		}
		else
		{
			offset = 0;
			form_position_h = sumForm-1;
		}
		for(var i = 0; i < 5 && i<sumForm; i++)
		{
			listFormLiList[i].innerHTML = systemArray[i + offset];
		}
		
	}
	else if(form_position_h==0 && offset > 0)
	{
		offset--;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = systemArray[i + offset];
		}
	}
	else if(form_position_h > 0)
	{
		form_position_h--;
	}
	$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
	if(offset > 0)
	{
		$("listUpImg").style.display = "block";
	}
	else
	{
		$("listUpImg").style.display = "none";
	}
	
	if((offset + 4) >= (sumLang - 1))
	{
		$("listDownImg").style.display = "none";
	}
	else
	{
		$("listDownImg").style.display = "block";
	}
	}catch(er)
	{
		channel.testLog("toFormUp:"+er);
	}
}
function initSoundSystem()
{
	try
	{
	if(channelList[positionV].soundSystem>=5)
	{
		form_position_h = 4;
		offset=channelList[positionV].soundSystem-form_position_h;
	}
	else
	{
		form_position_h=channelList[positionV].soundSystem;
		offset=0;
	}
	var topOffset = 60+CHANNEL_EDIT_START+(positionEditV+1)*CHANNEL_EDIT_STEP - 10;
	var leftOffset = 1333;
	
	listFormLiList = $("listForm").getElementsByTagName("li");
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,top.soundSystem,top.soundSystem.length,form_position_h,offset);
	focusType = "channelSoundSystem";
	}catch(er)
	{
		channel.testLog("initSoundSystem:"+er)
	}
				
}
function uninit()
{
	top.hiddenKeyBoard();
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
				if(focusType=="channelList"){
					positionV = parseInt(this.getAttribute("newAttr"),10);
					$("fourthListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
					toOK();
				}
			}
		}
	}
	
	
	//处理channel Number和channel name输入框
	for(var i = 0; i < 6; i++)
	{
		channelEditLi[i].setAttribute("newAttr",i);
		channelEditLi[i].onmousedown = function(evt){
			if(evt.button == 0)
			{
				//取消先前焦点
				if(focusType=="channelEditButton")
				{
					focusType="channelEdit";
				}
				if(focusType=="channelEdit")
				{
					if(parseInt(this.getAttribute("newAttr"),10)==1)
					{

						$("nameSpan0").style.color="#FFFFFF";
						$("nameSpan1").style.color="#FFFFFF";
						$("nameSpan2").style.color="#FFFFFF";
						if($("nameSpan"+positionEditH).innerHTML=="_")
						{
							$("nameSpan"+positionEditH).innerHTML="";
						}
						positionEditV=0;
						positionEditH=0;
						$("numSpan"+positionEditH).style.color="#F00";

						$("channelEditValueFocus").style.top=(CHANNEL_EDIT_START+positionEditV*CHANNEL_EDIT_STEP)+"px"
						$("channelEditButtonFocus").style.display="none";
					}
					if(parseInt(this.getAttribute("newAttr"),10)==2)
					{
					    $("numSpan"+positionEditH).style.color="#FFFFFF";
						positionEditH=0;
						channelNameIndex=0;
						positionEditV=1;
						resolveChannelName(channelName,channelNameIndex);
						$("channelEditRemind").innerHTML=ChEditContentName[2];
						$("channelEditValueFocus").style.top=(CHANNEL_EDIT_START+positionEditV*CHANNEL_EDIT_STEP)+"px"
						$("channelEditButtonFocus").style.display="none";
						toOK();
					}
					if(parseInt(this.getAttribute("newAttr"),10)==4)
					{
						$("numSpan"+positionEditH).style.color="#FFFFFF";
						$("nameSpan0").style.color="#FFFFFF";
						$("nameSpan1").style.color="#FFFFFF";
						$("nameSpan2").style.color="#FFFFFF";
						if($("nameSpan"+positionEditH).innerHTML=="_")
						{
							$("nameSpan"+positionEditH).innerHTML="";
						}
						positionEditH=0;
						channelNameIndex=0;
						positionEditV=2;
						$("channelEditButtonFocus").style.display="none";
						$("channelEditValueFocus").style.top=(CHANNEL_EDIT_START+(positionEditV+1)*CHANNEL_EDIT_STEP)+"px";
						toOK();
					}
					if(parseInt(this.getAttribute("newAttr"),10)==5)
					{
						$("numSpan"+positionEditH).style.color="#FFFFFF";
						$("nameSpan0").style.color="#FFFFFF";
						$("nameSpan1").style.color="#FFFFFF";
						$("nameSpan2").style.color="#FFFFFF";
						if($("nameSpan"+positionEditH).innerHTML=="_")
						{
							$("nameSpan"+positionEditH).innerHTML="";
						}
						positionEditH=0;
						channelNameIndex=0;
						positionEditV=3;
						$("channelEditButtonFocus").style.display="none";
						$("channelEditValueFocus").style.top=(CHANNEL_EDIT_START+(positionEditV+1)*CHANNEL_EDIT_STEP)+"px";
						toOK();
					}
				
				}
			}
		}
	}
	
	//处理两个选择按钮
	for(var i = 0; i < 2; i++)
	{
		channelEditButtonClassList[i].setAttribute("newAttr",i);
		channelEditButtonClassList[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				//取消先前焦点
				if(focusType=="channelEdit")
				{
					$("numSpan"+positionEditH).style.color="#FFFFFF";
					positionEditH=0;
					channelNameIndex=0;
					positionEditV=2;
					$("nameSpan0").style.color="#FFFFFF";
					$("nameSpan1").style.color="#FFFFFF";
					$("nameSpan2").style.color="#FFFFFF";
					if($("nameSpan"+positionEditH).innerHTML=="_")
					{
						$("nameSpan"+positionEditH).innerHTML="";
					}
					$("channelEditValueFocus").style.display="none";
					focusType = "channelEditButton";
				}
				if(focusType =="channelEditButton")
				{
					if(parseInt(this.getAttribute("newAttr"),10) == 0)
					{
						editFinishFlag=1;
						$("channelEditButtonFocus").style.left="100px";
					}
					else if(parseInt(this.getAttribute("newAttr"),10) == 1)//channel name
					{
						editFinishFlag=0;
						$("channelEditButtonFocus").style.left="400px";
					}
					focusType = "channelEditButton";
					toOK();
				}
			}
		}
	}
	listFormLiList = $("listForm").getElementsByTagName("li");
	for(var i=0;i<5;i++)
	{
		listFormLiList[i].setAttribute("newAttr",i);
		listFormLiList[i].onmousedown=function(evt){
			if(evt.button==0)
			{
				if(focusType == "channelColorSystem" || focusType == "channelSoundSystem")
				{
					form_position_h=parseInt(this.getAttribute("newAttr"),10);
					$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
					toOK();
				}
			}
		}
	}
	$("listUpImg").onmousedown = function(evt){
			if(evt.button==0){
				if(focusType == "channelColorSystem" || focusType == "channelSoundSystem")
				{
					toUp();
				}
			}
		}
	$("listDownImg").onmousedown = function(evt){
			if(evt.button==0){
				if(focusType == "channelColorSystem" || focusType == "channelSoundSystem")
				{
					toDown();
				}
			}
		}
     $("listUpRemind").onmousedown=function(evt){
		if(evt.button==0){
			if(focusType == "channelList")
			{
				toUp();
			}
		}
	}
	$("listDownRemind").onmousedown=function(evt){
		if(evt.button==0){
			if(focusType == "channelList")
			{
				toDown();
			}
		}
	}
}

var colorvalue = 0;
var soundvalue = 0;
function ttsRead()
{
	if(0 == top.g_setting.ttsSwitch)
	{
		top.ttsLog("ttsSwitch is off");
		return;
	}
	//top.ttsLog("positionEditH=" +positionEditH+"   positionEditV=" +positionEditV+"   focusType=" +focusType);
	var ttsStr = "";
	var currentStatus = "";
	var ttsName = "";
	var chnumber = channelList[positionV].number;
	var chname = channelList[positionV].name;
	var chtype = chListType[channelList[positionV].serviceType];

	function isSelected(selectedFlag)
	{
		if (selectedFlag)
		{
			currentStatus = currentStatus + ", selected";
		}
		else
		{
			currentStatus = currentStatus + ", not selected";
		}
	}

	if (focusType == "channelList")
	{
		ttsName = chnumber + "," + chtype + "," + chname;
		currentStatus = "";
	}
	else if (focusType == "channelEdit")
	{
		//top.ttsLog("colorvalue=" +colorvalue);
		//top.ttsLog("colorvalue=" +colorvalue + "   form_position_h +offset=" + (form_position_h +offset));
		if (positionEditV == 0)
		{
			ttsName = chEditPara[1];
			currentStatus = "";
		}
		else if (positionEditV == 1)
		{
			ttsName = chEditPara[2];
			currentStatus = "";
		}
		else if (positionEditV == 2)
		{
			ttsName = chEditPara[4] + ",";
			currentStatus = top.colorSystem[colorvalue];
		}
		else if (positionEditV == 3)
		{
			ttsName = chEditPara[5] + ",";
			currentStatus = top.soundSystem[channelList[positionV].soundSystem];
		}
	}
	else if (focusType == "channelEditButton")
	{
		//	top.ttsLog("editFinishFlag=" +editFinishFlag);
		if (editFinishFlag == 1)
		{
			ttsName = top.okCancel[0];
			currentStatus = "";
		}
		else if (editFinishFlag == 0)
		{
			ttsName = top.okCancel[1];
			currentStatus = "";
		}
		else
		{
			ttsName = "";
			currentStatus = "";
		}
	}
	else if (focusType == "channelColorSystem")
	{
		//top.ttsLog("colorvalue=" +colorvalue + "   form_position_h +offset=" + (form_position_h +offset));
		ttsName = "";
		currentStatus = top.colorSystem[form_position_h + offset];
		isSelected(top.colorSystem[colorvalue] == currentStatus);
	}
	else if (focusType == "channelSoundSystem")
	{
		ttsName = "";
		currentStatus = top.soundSystem[form_position_h + offset];
		isSelected(top.soundSystem[channelList[positionV].soundSystem] == currentStatus);
	}
	else
	{
		ttsName = "";
		currentStatus = "";
	}
	ttsStr = ttsName + currentStatus;
	if ("" != ttsStr)
	{
		top.ttsLog("ttsStr=" + ttsStr);
		top.setTTSSay(top.SPEECH_TYPE_FLUSH, ttsStr);
	}
}
