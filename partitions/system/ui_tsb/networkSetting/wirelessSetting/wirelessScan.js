var wirelessConName           = [top.others[12],top.others[2],top.okCancel[0],top.okCancel[1]];

var passwordRemind            = top.netConnRemind;//提示语
var signalStrength            = ["../../images/wifi/wifi_1.PNG","../../images/wifi/wifi_2.PNG","../../images/wifi/wifi_3.PNG","../../images/wifi/wifi_4.PNG","../../images/wifi/wifi_5.PNG"];//保存信号强度图片
var loadingImg                     = ["../../images/Loading-01.png","../../images/Loading-02.png","../../images/Loading-03.png","../../images/Loading-04.png","../../images/Loading-05.png","../../images/Loading-06.png","../../images/Loading-07.png","../../images/Loading-08.png"];
var passwordMenuV             = 0;//密码编辑主界面垂直坐标
var passwordMenuH             = 1;//密码编辑主界面水平坐标表示是否去连接网络
var passwordListV             = 0;//表示密码键盘焦点停留在第几行
var passwordListH             = 0;//表示第几列
var lettersFlag               = 0;//标记是字母还是特殊字符 0：表示字母 1：表示特殊字符
var positionV                 = 0;//焦点坐标
var lis;
var wirelessListSize          = 12;//一页中能显示的最大无线网络个数
var wirelessListPageIndex     = 1;//无线网络列表的页序号
var wirelessList;                 //保存无线网路列表
var nowWifiInfo;                  //当前wifi信息
var wirelessListPageCount     = 0;//保存wifi列表一共有多少页
var password                  = ""; //存储密码
var passwordShow              = ""; //用来显示*
var passwordTimeout           = 0;//用来表示输入密码超时500ms变为*号表示
var connectTimeout            = 0;//用来表示连接超时，当不为0时不进行任何操作
var connectFlag               = 0;//用来表示是否正在连接网络，当不为0时不进行任何操作
var capitalFlag               = 0;//用来标记字符是大写还是小写 0 表示小写 1表示大写
var sumWifi                   = 0;//保存当前网络链表长度
var MENU_START 			      = 12;//菜单焦点移动起始位置
var MENU_STEP 			      = 70;//主菜单焦点移动的step
var SCROLL_START              = 190;
var loadingImgNum             = 0;
var loadingTimer              = 0;
var pressKeyFlag              =0;
var oldRcKeyTimeOut           =0;
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
var focusType = "wirelessList"
var setting = top.g_setting;
var listFirstSpans = [];
var repeatTimerIndex = 0;
document.onsystemevent = notifyProcess;
function notifyProcess(evt)
{
    var msg = evt.which;
	var value = evt.modifiers;
	console.log("hevens *************** revice msg = "+msg+" value is "+value);
	//全局消息
	console.log("-------notifyProcess-------------------=="+focusType+"=="+passwordMenuV+"=="+passwordMenuH+"=="+msg+"=="+connectFlag);
	switch(msg)
	{
		case top.E_WIRELESS_CONNECT_SUCCESS://表示无线网络连接成功
		{
            top.systemEventProc(evt);
			if(focusType == "loading" && connectFlag ==1)
			{
				clearInterval(loadingTimer);
				loadingTimer = 0;
				$("remindWord").innerHTML = passwordRemind[2];
				ttsRead();
				$("loadingImg").style.display = "none"
				setTimeout(function(){
					top.restartTimeout();
					$("remindWord").innerHTML ="";
				$("loading").style.display = "none";
				$("menuList").style.display = "block";
				$("netConnectFlag").style.display="block";
				$("netConnectFlag").style.top=MENU_START+positionV*MENU_STEP+"px";
				connectFlag=0;
				focusType = "wirelessList";
				},2000);
			}
			break;
		}
		case top.E_WIRELESS_CONNECT_FAILURE://表示无线连接失败
		{
			if(value != 0){
				console.log("Ignore CONNECT FAILURE MSG!");
				return;
			}
			if(focusType == "loading" && connectFlag ==1)
			{
				clearInterval(loadingTimer);
				loadingTimer = 0;
				
				$("remindWord").innerHTML = passwordRemind[3];
				ttsRead();
				$("loadingImg").style.display = "none";
				setTimeout(function(){
					top.restartTimeout();
					$("remindWord").innerHTML="";
				$("loading").style.display = "none";
				$("menuList").style.display = "block";
				connectFlag=0;
				focusType = "wirelessList";},2000);
			}
			break;
		}
		case top.E_WIRELESS_DEVICE_NO_FOUND://表示没有无线网
		{

			if(focusType == "wirelessList")
			{
				$("loading").style.display = "none";
				loadingImgNum = 0;
				clearInterval(loadingTimer);
				loadingTimer = 0;
				top.restartTimeout();
				$("remindWord").innerHTML = "";
			}
			else if(focusType == "passwordMenu")
			{
				$("wirelessInputPassword").style.display="none";
				password="";
				parent.showPage(3);
				showPassword('');
			}
			else if(focusType == "passwordEdit")
			{
				top.hiddenKeyBoard();
				$("wirelessInputPassword").style.display="none";
				password="";
				parent.showPage(3);
				showPassword('');
			}
			else if(focusType == "loading")
			{
				$("loading").style.display = "none";
				loadingImgNum = 0;
				clearInterval(loadingTimer);
				loadingTimer = 0;
				top.restartTimeout();
				$("remindWord").innerHTML = "";
			}
			$("menuList").style.display = "none";
			$("remindNoDevice").innerHTML=passwordRemind[5];
			focusType = "noDevice";
			setTimeout("parent.returnPage(3)",2000);
		}
		break;
		case top.E_WIRELESS_SCAN_FINISH://表示搜索无线网络结
		{
            if(focusType != "passwordEdit")
            {
                showWifiList();
		ttsRead();
                getWifiCount();
                loadingImgNum = 0;
                clearInterval(loadingTimer);
                loadingTimer = 0;
                top.restartTimeout();
                $("remindWord").innerHTML = "";
            }
            break;
		}
		case top.E_STR_SCREEN_OFF:
		{
			top.$("operatePage").src = "";
			top.systemEventProc(evt);
			break;
		}
		
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
    top.timeoutFuc.keydownFuc = keyDownProcess;
}

function repeatkeyupproc(evt)
{
	if (repeatTimerIndex != 0)
	{
		clearInterval(repeatTimerIndex);
		repeatTimerIndex = 0;
	}
}
function keyDownProcess(evt)/*接收按键*/
{
	var ret = true;
	var keycode = evt.which;
	console.log("-------keyDownProcess-------------------=="+focusType+"=="+passwordMenuV+"=="+passwordMenuH+"=="+keycode+"=="+connectFlag);
	
	if(connectFlag==0)
	{
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
			case top.VK_BACK:
			{
				if(focusType == "passwordMenu" && (password.length > 0))
				{
					password = password.substr(0, password.length - 1);
					showPassword('');
				}
				else
				{
					toBack();
					ttsRead();
				}
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
			case top.VK_0:
			if((focusType == "passwordMenu" ||focusType == "passwordEdit")&&passwordMenuV==0)
			{
				checkInput(keycode);
			}
			break;
			case top.VK_1:
			if((focusType == "passwordMenu" ||focusType == "passwordEdit")&&passwordMenuV==0)
			{
				checkInput(keycode);
			}
			break;
			case top.VK_2:
				if((focusType == "passwordMenu" ||focusType == "passwordEdit")&&passwordMenuV==0)
			{
				checkInput(keycode);
			}
			break;
		case top.VK_3:
			if((focusType == "passwordMenu" ||focusType == "passwordEdit")&&passwordMenuV==0)
			{
				checkInput(keycode);
			}
			break;
		case top.VK_4:
			if((focusType == "passwordMenu" ||focusType == "passwordEdit")&&passwordMenuV==0)
			{
				checkInput(keycode);
			}
			break;
		case top.VK_5:
			if((focusType == "passwordMenu" ||focusType == "passwordEdit")&&passwordMenuV==0)
			{
				checkInput(keycode);
			}
			break;
		case top.VK_6:
			if((focusType == "passwordMenu" ||focusType == "passwordEdit")&&passwordMenuV==0)
			{
				checkInput(keycode);
			}
			break;
		case top.VK_7:
			if((focusType == "passwordMenu" ||focusType == "passwordEdit")&&passwordMenuV==0)
			{
				checkInput(keycode);
			}
			break;
		case top.VK_8:
			if((focusType == "passwordMenu" ||focusType == "passwordEdit")&&passwordMenuV==0)
			{
				checkInput(keycode);
			}
			break;
		case top.VK_9:
			if((focusType == "passwordMenu" ||focusType == "passwordEdit")&&passwordMenuV==0)
			{
				checkInput(keycode);
			}
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
				if((focusType == "passwordMenu" ||focusType == "passwordEdit")&&passwordMenuV==0)
				{
						checkInput(keycode);
				}
				break;
        default:
            top.keyDownProcess(evt);
            break;
		}
	}
	else
	{
		switch (keycode)
		{
			case top.VK_BACK:
			case top.VK_EXIT://back
			{
				clearInterval(loadingTimer);
				loadingTimer = 0;
				$("loadingImg").style.display = "none"
				top.restartTimeout();
				$("loading").style.display = "none";
				$("menuList").style.display = "block";
				connectFlag=0;
				focusType = "wirelessList"
				if(keycode == top.VK_EXIT )
					top.keyDownProcess(evt);
				break;
			}
			case top.VK_POWER:
			case top.VK_MENU:
			case top.VK_HOME:
			{
				top.keyDownProcess(evt);
			}
		}
	}
	return ret;
}

function $(id)
{
    return document.getElementById(id);
}
function toDown()//按下键
{
	if(focusType == "wirelessList")
	{
		positionV++;
		if(positionV>wirelessListSize-1 || positionV>=sumWifi)
		{
			positionV=0;
			if(wirelessListPageIndex<wirelessListPageCount)
			{
				wirelessListPageIndex++;
				showWifiList();
				$("ScrollBar").style.top = SCROLL_START + parseInt((700*(wirelessListPageIndex-1))/wirelessListPageCount)+"px";
			}
			else
			{
				wirelessListPageIndex=1;
				showWifiList();
				$("ScrollBar").style.top = SCROLL_START + parseInt((700*(wirelessListPageIndex-1))/wirelessListPageCount)+"px";
			}
		}
		$("thdListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
		top.doEleScrForNoOption(listFirstSpans, positionV, 1);
	}
	else if(focusType == "passwordMenu")
	{
		if(passwordMenuV==0)
		{
			passwordMenuV=1;
			$("scanInputFocus").style.display="none";
			$("dialogButtonFocus").style.display="block";
		}
		else
		{
			passwordMenuV=0;
			$("dialogButtonFocus").style.display="none";
			$("scanInputFocus").style.display="block";
		}
	}
	else if(focusType == "passwordEdit")
	{
		top.moveDown();
	}
}
function toUp()//按上键
{
	if(focusType == "wirelessList")
	{
		positionV--;
		if(positionV<0)
		{
			if(wirelessListPageIndex>1)
			{
				wirelessListPageIndex--;
				showWifiList();
				$("ScrollBar").style.top = SCROLL_START + parseInt((700*(wirelessListPageIndex-1))/wirelessListPageCount)+"px";
			}
			else
			{
				wirelessListPageIndex=wirelessListPageCount;
				showWifiList();
				$("ScrollBar").style.top = SCROLL_START + parseInt((700*(wirelessListPageIndex-1))/wirelessListPageCount)+"px";
			}
			positionV=sumWifi-1;
		}
		$("thdListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
		top.doEleScrForNoOption(listFirstSpans, positionV, -1);
	}
	else if(focusType == "passwordMenu")
	{
		if(passwordMenuV==0)
		{
			passwordMenuV=1;
			$("scanInputFocus").style.display="none";
			$("dialogButtonFocus").style.display="block";
		}
		else
		{
			passwordMenuV=0;
			$("dialogButtonFocus").style.display="none";
			$("scanInputFocus").style.display="block";
		}
	}
	else if(focusType == "passwordEdit")
	{
		top.moveUp();
	}
}
function toLeft()
{
	if(focusType == "wirelessList")
	{
		toBack();
	}
	else if(focusType == "passwordMenu")
	{
		if(passwordMenuV==1)
		{
			if(passwordMenuH==1)
			{
				passwordMenuH=0;
				$("dialogButtonFocus").style.left=320+"px";
			}
			else
			{
				passwordMenuH=1;
				$("dialogButtonFocus").style.left=120+"px";
			}
		}
	}
	else if(focusType == "passwordEdit")
	{
		top.moveLeft();
	}
}
function toRight()
{
	if(focusType == "wirelessList")
	{
		toOK();
	}
	else if(focusType == "passwordMenu")
	{
		if(passwordMenuV==1)
		{
			if(passwordMenuH==1)
			{
				passwordMenuH=0;
				$("dialogButtonFocus").style.left=320+"px";
			}
			else
			{
				passwordMenuH=1;
				$("dialogButtonFocus").style.left=120+"px";
			}
		}
	}
	else if(focusType == "passwordEdit")
	{
		top.moveRight();
	}
}
function toBack()
{
	if(focusType == "wirelessList")
	{
		parent.returnPage(3);
	}
	else if(focusType == "passwordMenu")
	{
		$("wirelessInputPassword").style.display="none";
		password="";
		clearTimeout(passwordTimeout);
		passwordTimeout = 0;
		clearTimeout(oldRcKeyTimeOut);
		oldRcKeyTimeOut = 0;
		pressKeyFlag = 0;
		keyCount = 0;
		parent.showPage(3);
		showPassword('');
		$("scanPassRemind").style.display="none";
		passwordMenuV=0;
		$("dialogButtonFocus").style.display="none";
		$("scanInputFocus").style.display="block";
		focusType = "wirelessList";
	}
	else if(focusType == "passwordEdit")
	{
		if(top.tobackKeyBoard()=="menuBack")
		{
			focusType = "passwordMenu"
		}
	}
}
function toOK()
{
	if(focusType == "wirelessList")
	{
		if(wirelessList[positionV].encrypt==0)
		{
			setting.wirelessNetworkConnect(wirelessList[positionV].ssid,wirelessList[positionV].cipher,wirelessList[positionV].encrypt,0);
			$("loading").style.display="block";
			$("menuList").style.display ="none";
			loadingTimer=setInterval('loading(passwordRemind[1])',300);
			connectFlag=1;
		}
		else
		{
			parent.hiddenPage(3);
			$("wirelessInputPassword").style.display="block";
			$("scanTitle").innerHTML=wirelessList[positionV].ssid;
            passwordMenuV=0;
            $("dialogButtonFocus").style.display="none";
            $("scanInputFocus").style.display="block";
			focusType = "passwordMenu";
		}
	}
	else if(focusType == "passwordMenu")
	{
		if(passwordMenuV==0)
		{
            top.mouseCallBack.funcOk=toOK;
            top.mouseCallBack.funcBack=toBack;
            top.mouseCallBack.funcMouseUp=repeatkeyupproc;
            top.showKeyBoard();
            focusType = "passwordEdit";
		}
		else
		{ 
			if(passwordMenuH==1)
			{
				if(checkPassword()==1)//密码位数大于等于最小数时连接网络否则提示密码错误
				{
					setting.wirelessNetworkConnect(wirelessList[positionV].ssid,wirelessList[positionV].cipher,wirelessList[positionV].encrypt,password);
					parent.showPage(3);
					
					$("menuList").style.display ="none";
					loadingTimer=setInterval('loading(passwordRemind[1])',300);
					$("loading").style.display="block";
					$("netConnectFlag").style.display="none";
					connectFlag=1;
					$("wirelessInputPassword").style.display="none";
					password="";
					showPassword('');
					$("scanPassRemind").style.display="none";
				}
			}
			else
			{
				parent.showPage(3);
				$("wirelessInputPassword").style.display="none";
				password="";
				showPassword('');
				$("scanPassRemind").style.display="none";
				passwordMenuV=0;
				$("dialogButtonFocus").style.display="none";
				$("scanInputFocus").style.display="block";
				focusType = "wirelessList";
			}
		}
	}
	else if(focusType == "passwordEdit")
	{
		var key=top.toOkGetChar();

		if(oldRcKeyTimeOut!=0)//在遥控器输入800ms之内，调用虚拟键盘输入。
		{
			clearTimeout(oldRcKeyTimeOut);
			oldRcKeyTimeOut = 0;
			showPasswordByRC();
		}
		if(key=="back")
		{
			if(passwordTimeout!=0)
			{
				clearTimeout(passwordTimeout);
				passwordTimeout = 0;
				showPassword('');//是否该变成*号再删除，还是直接删除?
			}
			if(password.length>0)
			{

				password = password.substr(0,password.length - 1);
				showPassword('');
			}
			//NT563平台持续按输入法的回退按键会导致setInterval里的函数无限循环执行，从而导致输入法无法输入字符
            if (repeatTimerIndex != 0)
            {
                clearInterval(repeatTimerIndex);
                repeatTimerIndex = 0;
            }

			repeatTimerIndex = setInterval(function() {
				if(password.length>0)
				{
					password = password.substr(0,password.length - 1);
					showPassword('');
				}
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
			if(passwordTimeout!=0)
			{
				clearTimeout(passwordTimeout);
				passwordTimeout = 0;
				showPassword('');
			}
			showPassword(key);
			password=password+key;
			passwordTimeout = setTimeout("showPasswordByKeyboard()", 500);
		}
	}
}
function showUI()
{
	lis=$("fourthMenuRight").getElementsByTagName("li");
	var spans = $("fourthMenuRight").getElementsByTagName("span");
	spans[0].innerHTML=wirelessConName[0];
	$("scanInputTitle").innerHTML=wirelessConName[1];
	top.g_channel.testLog("scanInputTitle="+$("scanInputTitle").innerHTML);
	var divs =$("scanButtonList").getElementsByTagName("div");
	divs[0].innerHTML=wirelessConName[2];
	divs[1].innerHTML=wirelessConName[3];

}
function initSetRegion()
{
	if (top.uiColourStyleFlag == 1)
	{
		var classlist;
		classlist = document.getElementsByClassName("dialogButtonFocus");
		for (var i = 0; i < classlist.length; i++) {
			//classlist[i].setAttribute("class","progressImgOtherStyle");
			classlist[i].style.border = "solid medium" + top.uiColourStyle;
			//classlist[i].className = "progressImgOtherStyle";
		}
	}
}
function init()
{
    top.initTextDirection(window);
	initSetRegion();
	timeoutInit();
	showUI();
	$("loading").style.display="block";
	$("menuList").style.display ="none";
	loadingTimer=setInterval('loading(passwordRemind[4])',300);
	addMouseListener();
	setTimeout("setting.startScanNetwork()",10);
}
function loading(remind)
{
	focusType = "loading";
	top.stopTimeout();
	$("remindWord").innerHTML = remind;
	ttsRead();
	$("loadingImg").style.display = "block"
	$("loadingImg").src=loadingImg[loadingImgNum];
	loadingImgNum++;
	if(loadingImgNum>=8)
	{
		loadingImgNum=0;
	}
}
function showWifiSignal(signal,position)
{
	if(signal>=-52)
	{
		$("netList"+position).src=signalStrength[4];
	}
	else if(signal>=-59&&signal<-52)
	{
		$("netList"+position).src=signalStrength[3];
	}
	else if(signal>=-66&&signal<-59)
	{
		$("netList"+position).src=signalStrength[2];
	}
	else if(signal>=-73&&signal<-66)
	{
		$("netList"+position).src=signalStrength[1];
	}
	else if(signal>=-80&&signal<-73)
	{
		$("netList"+position).src=signalStrength[0];
	}
	else
	{
		$("netList"+position).src=signalStrength[0];
	}
}
function showWifiList()//显示wifi列表
{
	$("loading").style.display="none";
	$("menuList").style.display ="block";
	focusType = "wirelessList";
	var spans = $("fourthMenuRight").getElementsByTagName("span");
	wirelessList=setting.getWirelessAvailableNetwork(wirelessListSize,wirelessListPageIndex-1);
	sumWifi=wirelessList.length;
	var i=0;
	for(i=0;i<wirelessListSize;i++)
	{
		if(sumWifi==0)
		{
			lis[i+1].style.display = "none";
			$("thdListFocus").style.display = "none";
		}
		else
		{
			if(i<sumWifi)
			{
				lis[i+1].style.display = "block";
				nowWifiInfo=wirelessList[i];
				spans[i+1].innerHTML=nowWifiInfo.networkname;
				if(nowWifiInfo.encrypt>0)
				{
					$("netLock"+i).style.display = "block";	
				}
				else
				{
					$("netLock"+i).style.display = "none";
				}
				showWifiSignal(nowWifiInfo.strength,i);
			}
			else
			{
				lis[i+1].style.display = "none";
			}
			$("thdListFocus").style.display = "block";
		}
	}
	
	var status=setting.wirelessNetworkConnectStatus;
	if(status!=0)
	{
		var ssid=setting.netSSID;
		var i=0;
		for(;i<sumWifi;i++)
		{
			nowWifiInfo=wirelessList[i];
			console.log("wirelessScan.js showWifiList() ssid:" + ssid +" -- nowWifiInfo.networkname="+nowWifiInfo.networkname);
			if(ssid==nowWifiInfo.networkname)
			{
				$("netConnectFlag").style.display="block";
				$("netConnectFlag").style.top=MENU_START+i*MENU_STEP+"px";
				break;
			}
		}
		if(i==sumWifi)
		{
			$("netConnectFlag").style.display="none";
		}
	}
	else if(status==0)
	{
		$("netConnectFlag").style.display="none";
	}
	listFirstSpans = $("fourthMenuRight").getElementsByClassName("listFirstPropertyWifi");
	top.doEleScrForNoOption(listFirstSpans, positionV, 0);
}
function getWifiCount()//计算wifi列表一共有多少页
{
	var sum=setting.wirelessNetworkCount;
	if(sum==0)
	{
		wirelessListPageCount=1;
	}
	else
	{
		if(sum%wirelessListSize==0)
		{
			wirelessListPageCount=parseInt(sum/wirelessListSize);
		}
		else
		{
			wirelessListPageCount=parseInt(sum/wirelessListSize)+1;
		}
	}
	$("ScrollBar").style.height = parseInt(700/wirelessListPageCount)+"px";
}

function checkPassword()//检测密码是否合法
{
	if(wirelessList[positionV].encrypt==1)
	{
		if(password.length<5)
		{
			$("scanPassRemind").style.display="block";
			$("scanPassRemind").innerHTML=passwordRemind[0];
			top.setTTSSay(top.SPEECH_TYPE_FLUSH,passwordRemind[0]);
			top.ttsLog("ttsStr="+passwordRemind[0]);//提示密码错误
			return 0;
		}
	}
	else
	{
		if(password.length<8)
		{
			$("scanPassRemind").style.display="block";
			$("scanPassRemind").innerHTML=passwordRemind[0];
			top.setTTSSay(top.SPEECH_TYPE_FLUSH,passwordRemind[0]);
			top.ttsLog("ttsStr="+passwordRemind[0]);//提示密码错误
			return 0;
		}
	}
	return 1;
}
function uninit()
{
	top.hiddenKeyBoard();
}
function checkInput(keycode)//修改频道名的函数
{
    //第一次的时候
	var inputChar='';

	if(passwordTimeout!=0)//在虚拟键盘输入500ms之内，调用遥控器输入
	{
		clearTimeout(passwordTimeout);
		passwordTimeout = 0;
		showPassword('');
	}
	if (pressKeyFlag==0)
	{
		pressKeyFlag = 1;
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
		
		showPassword(inputChar);
		oldRcKeyTimeOut = setTimeout("showPasswordByRC()", 800);
	}
	else//其他时候
	{
		if ((oldKeyCode == keycode) && !((keycode>=32 && keycode<=47) || (keycode>=58 && keycode<=96) ||(keycode>=353 && keycode<=378)||(keycode>=123 && keycode<=126)||(keycode>=293 && keycode<=296)))
		{
			keyCount++;
			var keyTableLine = keycode - 48;
			if (keyCount>=char_table[keyTableLine].length)
			{
				keyCount = 0;
			}
			inputChar = char_table[keyTableLine][keyCount];
			clearTimeout(oldRcKeyTimeOut);
			oldRcKeyTimeOut = 0;
			if (char_table[keyTableLine].length == 1)
			{
				password += oldInputChar;
			}
			showPassword(inputChar);
			oldRcKeyTimeOut = setTimeout("showPasswordByRC()", 800);
		}
		else
		{
			keyCount = 0;
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
				inputChar = char_table[keyTableLine][keyCount];
			}

			clearTimeout(oldRcKeyTimeOut);
			oldRcKeyTimeOut = 0;
			password += oldInputChar;
			showPassword(inputChar);
			oldRcKeyTimeOut = setTimeout("showPasswordByRC()", 800);
		}
	}
	oldKeyCode = keycode;
	oldInputChar = inputChar;
}

function showPasswordByRC()
{
	oldRcKeyTimeOut = 0;
	password += oldInputChar;
	showPassword('');
	pressKeyFlag = 0;
	keyCount = 0;
}

function showPasswordByKeyboard()
{
	passwordTimeout = 0;
	showPassword('');
}

function showPassword(key)
{
	$("scanInputContent").innerHTML = password.replace(/[ \S]/g, "*") + key;
	console.log("showPassword("+key+")--password="+password);
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
	for(var i = 0; i < wirelessListSize; i++)
	{
		lis[i+1].setAttribute("newAttr",i);
		lis[i+1].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusType=="wirelessList")
				{
					positionV = parseInt(this.getAttribute("newAttr"));
					$("thdListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
					toOK();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	
	$("scanInputContent").onmousedown = function(evt){
		if(evt.button == 0){//left key
			if(focusType=="passwordMenu" )
			{
				console.log("I will show keyBoard");
				try
				{
				passwordMenuV=0;
				$("scanInputFocus").style.display="block";
				$("dialogButtonFocus").style.display="none";
				toOK();
				}catch(er)
				{
					console.log("scanInputContent:"+er);
				}
			}
		}
	}
	$("scanInputFocus").onmousedown = function(evt){
		if(evt.button == 0){//left key
			if(focusType=="passwordMenu" )
			{
				if(passwordMenuV==0)
				{
					passwordMenuV=0;
					$("scanInputFocus").style.display="block";
					$("dialogButtonFocus").style.display="none";
					toOK();
				}
			}
		}
	}
	var buttonDiv=$("scanButtonList").getElementsByTagName("div");
	buttonDiv[0].onmousedown = function(evt){
		if(evt.button == 0){//left key
			if(focusType=="passwordMenu" )
			{
				passwordMenuH=1;
				passwordMenuV=1;
				$("scanInputFocus").style.display="none";
				$("dialogButtonFocus").style.display="block";
				$("dialogButtonFocus").style.left=120+"px";
				toOK();
			}
		}
	}
	buttonDiv[1].onmousedown = function(evt){
		if(evt.button == 0){//left key
			if(focusType=="passwordMenu" )
			{
				passwordMenuH=0;
				passwordMenuV=1;
				$("scanInputFocus").style.display="none";
				$("dialogButtonFocus").style.display="block";
				$("dialogButtonFocus").style.left=320+"px";
				toOK();
			}
		}
	}
	top.g_channel.testLog(".........wirelessList........addMouseListener..............");
}

var lastPosition;
var lastFocusType;
var ttsFlag = 0; //用于记录tts播放错误提示，保证错误提示不被打断。
var lastTtsStr = "";
function ttsRead()
{
	if(0 == top.g_setting.ttsSwitch)
	{
		top.ttsLog("ttsSwitch is off");
		return;
	}
	var ttsStr = "";
	var currentStatus = "";
	var currentName = "";
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
	if("wirelessList" == focusType && 3 == parent.currentShowMenu)
	{
		try
		{
			ttsName = wirelessList[positionV].ssid;
			if(nowWifiInfo.networkname == ttsName)
			{
				currentStatus = ",connected";
			}else
			{
				currentStatus = ",not connected";
			}
			ttsName = ttsName + " ";
		}
		catch(e)
		{
			top.ttsLog("error:"+e);
		}

	}
	else if("passwordMenu" == focusType)  //密码输入界面
	{
		switch(passwordMenuV)
		{
			case 0:
				ttsName = wirelessConName[1];
				currentStatus = "";
				break;
			case 1:
				ttsName = "";
				if(0 == passwordMenuH)
				{
					currentStatus = wirelessConName[3];
				}
				else if(1 == passwordMenuH)
				{
					currentStatus = wirelessConName[2];
				}else
				{
					currentStatus = "";
				}
				isSelected(0);
				break;
			default:
				ttsName = "";
				currentStatus = "";
				break;
		}
		if(lastPosition == passwordMenuV && lastFocusType == passwordMenuH)
		{
			ttsName = "";
			currentStatus = "";
		}
		lastPosition = passwordMenuV;
		lastFocusType = passwordMenuH
	}
	if("loading" == focusType && "block" == $("loading").style.display)	//正在连接，连接成功等消息。
	{
		ttsName = "";
		currentStatus = $("remindWord").innerHTML;
		if(lastTtsStr == currentStatus)		//loading函数会多次被调用，避免同一提示语句发多次
		{
			currentStatus = "";
		}else
		{
			lastTtsStr = currentStatus;
		}
	}
	ttsStr = ttsName + currentStatus;
	if(ttsFlag)
	{
		ttsStr = "";
		ttsFlag = 0;
	}
	if("" != ttsStr)
	{
		top.ttsLog("ttsStr="+ttsStr);
		//top.ttsLog("focusType="+focusType);
		// top.ttsLog("form_position_h="+form_position_h);
		top.setTTSSay(top.SPEECH_TYPE_FLUSH,ttsStr);
	}
}