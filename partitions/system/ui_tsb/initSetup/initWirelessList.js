var wirelessConName           = [top.netOptions[16],top.others[13],top.others[22],top.others[2],top.okCancel[0],top.okCancel[1],top.initialTitle[1],top.initialOptions[1]];
var initHelp                  = top.initialHotkeys;
var newtworkWirelessEncrypt   = top.netWlessSecu2;
var passwordCharacter         = [[["a","b","c","d","e","f","g","h","i","j","k","l","m"],["n","o","p","q","r","s","t","u","v","w","x","y","z"],[".","0","1","2","3","4","5","6","7","8","9"," "]],[["~","`","!","@","#","$","%","^","&amp;","*","(",")","?"],["-","+","=","{","}","[","]","\\","|",";",":","\"","'"],[".",",","_","&lt;",">","\/","www.",".com",".cn",".net",".org"," "]]];//密码字符集

var capitalLetter             = [["A","B","C","D","E","F","G","H","I","J","K","L","M"],["N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]];//大写字母集
var minuscules                = [["a","b","c","d","e","f","g","h","i","j","k","l","m"],["n","o","p","q","r","s","t","u","v","w","x","y","z"]];//小写字母集
var passwordRemind            = [top.netConnRemind[0],top.netConnRemind[1],top.netConnRemind[2],top.netConnRemind[3]]//提示语
var signalStrength            = ["../images/Icon-WiFi-0.png","../images/Icon-WiFi-1.png","../images/Icon-WiFi-2.png","../images/Icon-WiFi-3.png","../images/Icon-WiFi-4.png"];//保存信号强度图片
var selectImg                 = ["../images/icon-Select_1.png","../images/icon-Return.png"];
var passwordMenuV             = 0;//密码编辑主界面垂直坐标
var passwordMenuH             = 1;//密码编辑主界面水平坐标表示是否去连接网络
var passwordListV             = 0;//表示密码键盘焦点停留在第几行
var passwordListH             = 0;//表示第几列
var lettersFlag               = 0;//标记是字母还是特殊字符 0：表示字母 1：表示特殊字符
var positionV                 = 0;//焦点坐标
var lis;
var wirelessListSize          = 5;//一页中能显示的最大无线网络个数
var wirelessListPageIndex     = 1;//无线网络列表的页序号
var wirelessList;                 //保存无线网路列表
var nowWifiInfo;                  //当前wifi信息
var wirelessListPageCount     = 0;//保存wifi列表一共有多少页
var password                  = ""; //存储密码
var passwordShow              = ""; //用来显示*
var passwordTimeout           = 0;//用来表示输入密码超时500ms变为*号表示
var connectTimeout            = 0;//用来表示连接超时，当不为0时不进行任何操作
var capitalFlag               = 0;//用来标记字符是大写还是小写 0 表示小写 1表示大写
var sumWifi                   = 0;//保存当前网络链表长度
var MENU_START 			      = 80;//菜单焦点移动起始位置
var MENU_STEP 			      = 100;//主菜单焦点移动的step
var SCROLL_START              = 100;
var pressKeyFlag              =0;
var oldRcKeyTimeOut  			= 0;
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
var oldKeyCode         = 0;//上一次的keycode 与本次进行对比用
var focusType = "wirelessList";
var setting = top.g_setting;
var repeatTimerIndex = 0;
document.onsystemevent = notifyProcess;
function notifyProcess(evt)
{
    var msg = evt.which;
	//全局消息
	switch(msg)
	{
		case top.E_NETWORK_CONNECT_TEST_SUCCESS:
		case top.E_NETWORK_CONNECT_TEST_FAIL:
		case top.E_DATABASE_FILE_DAMAGE:
		case top.E_STR_SCREEN_OFF:
		{
			top.systemEventProc(evt);
		}
		break;
        case top.E_HP_PLUGIN:
        case top.E_HP_PLUGOUT:
        {
            top.systemEventProc(evt);
            break;
        }
		default:
			break;
	}
}

document.onkeyup   = repeatkeyupproc;
function repeatkeyupproc(evt)
{
	if (repeatTimerIndex != 0)
	{
		clearInterval(repeatTimerIndex);
		repeatTimerIndex = 0;
	}
}
document.onkeydown = keyproc;
function keyproc(e)
{
	var ret = true;
	var keycode = e.which;
	switch (keycode)
	{
		case top.VK_POWER://power
			top.keyDownProcess(e);
			break;
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
		case top.VK_BACK: //back
		{
			if (focusType == "passwordMenu" && (password.length > 0))
			{
                if (password.length == 1)
                {
                    $("scanPassRemind").style.display="none";
                }
				password = password.substr(0, password.length - 1);
				showPassword('');
			}
			else
			{
				toBack();
			}
			break;
		}
		case top.VK_EXIT:
		{
			toBack();
			break;
		}
		case top.VK_LEFT:
		{
			toLeft();
			ret = false;
			break;
		}
		case top.VK_RIGHT:
		{
			toRight();
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
		case top.VK_RED:
			top.changeSource();
			top.jumpPage();
			break;
		default:
		break;
	}
	return ret;
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
}



function $(id)
{
    return document.getElementById(id);
}
function toDown()//按下键
{
	if(focusType == "wirelessList" && sumWifi>0)
	{
		positionV++;
		top.g_channel.testLog("sumWifi="+sumWifi+"positionV"+positionV);
		if(positionV>4 || positionV>=sumWifi)
		{
			positionV=0;
			if(wirelessListPageIndex<wirelessListPageCount)
			{
				wirelessListPageIndex++;
				showWifiList();
				$("ScrollBar").style.top = SCROLL_START + parseInt((400*(wirelessListPageIndex-1))/wirelessListPageCount)+"px";
			}
			else
			{
				wirelessListPageIndex=1;
				showWifiList();
				$("ScrollBar").style.top = SCROLL_START + parseInt((400*(wirelessListPageIndex-1))/wirelessListPageCount)+"px";
			}
		}
		top.g_channel.testLog("sumWifi="+sumWifi+"positionV"+positionV+"MENU_START+positionV*MENU_STEP"+(MENU_START+positionV*MENU_STEP));
		$("thdListFocusList").style.top=MENU_START+positionV*MENU_STEP+"px";
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
	if(focusType == "wirelessList" && sumWifi>0)
	{
		positionV--;
		if(positionV<0)
		{
			if(wirelessListPageIndex>1)
			{
				wirelessListPageIndex--;
				showWifiList();
				$("ScrollBar").style.top = SCROLL_START + parseInt((400*(wirelessListPageIndex-1))/wirelessListPageCount)+"px";
			}
			else
			{
				wirelessListPageIndex=wirelessListPageCount;
				showWifiList();
				$("ScrollBar").style.top = SCROLL_START + parseInt((400*(wirelessListPageIndex-1))/wirelessListPageCount)+"px";
			}
			positionV=sumWifi-1;
		}
		$("thdListFocusList").style.top=MENU_START+positionV*MENU_STEP+"px";
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
				$("dialogButtonFocus").style.left=650+"px";
			}
			else
			{
				passwordMenuH=1;
				$("dialogButtonFocus").style.left=350+"px";
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
				$("dialogButtonFocus").style.left=650+"px";
			}
			else
			{
				passwordMenuH=1;
				$("dialogButtonFocus").style.left=350+"px";
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
		document.location.href="initWirelessType.html";
	}
	else if(focusType == "passwordMenu")
	{
        //每次进入焦点位置在密码输入框
		passwordMenuV=0;
		$("dialogButtonFocus").style.display="none";
		$("scanInputFocus").style.display="block";

		$("wirelessInputPassword").style.display="none";
        $("scanPassRemind").style.display="none";
		$("menuBox").style.display="block";
		password="";
		showPassword('');
		clearTimeout(passwordTimeout);
		passwordTimeout = 0;
		clearTimeout(oldRcKeyTimeOut);
		oldRcKeyTimeOut = 0;
		pressKeyFlag = 0;
		keyCount = 0;
		$("selctImg").src=selectImg[0];
		$("next").style.display = "block";
		$("back").style.display = "block";
		$("select").getElementsByTagName("span")[0].innerHTML=initHelp[1];
		focusType = "wirelessList";
	}
	else if(focusType == "passwordEdit")
	{
		if(top.tobackKeyBoard()=="menuBack")
		{
			focusType = "passwordMenu";
		}
	}
}
function toOK()
{
	if(focusType == "wirelessList")
	{
		if(sumWifi==0)
		{
            parent.updateInitProgress(2);
			document.location.href="initChannelInstallEntry.html";
		}
		else
		{
			if(wirelessList[positionV].encrypt==0)
			{
				setting.wirelessNetworkConnect(wirelessList[positionV].ssid,wirelessList[positionV].cipher,wirelessList[positionV].encrypt,0);
				top.initSSID= wirelessList[positionV].ssid;
				document.location.href="initNetConnectPrompt.html?02.0"//设置成功
			}
			else
			{
				$("wirelessInputPassword").style.display="block";
				$("menuBox").style.display = "none";
				$("next").style.display = "none";
				$("scanTitle").innerHTML=wirelessList[positionV].ssid;
				$("selctImg").src=selectImg[1];
				$("back").style.display = "none";
				$("select").getElementsByTagName("span")[0].innerHTML=top.others[34];
				focusType = "passwordMenu";
			}
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
					top.initSSID= wirelessList[positionV].ssid;
					document.location.href="initNetConnectPrompt.html?02.1"//设置成功
				}
			}
			else
			{
                //每次进入焦点位置在密码输入框
                passwordMenuV=0;
                $("dialogButtonFocus").style.display="none";
                $("scanInputFocus").style.display="block";

                $("wirelessInputPassword").style.display="none";
				$("menuBox").style.display="block";

				password="";
				showPassword('');
				$("scanPassRemind").style.display="none";
				$("selctImg").src=selectImg[0];
				$("next").style.display = "block";
				$("back").style.display = "block";
				$("select").getElementsByTagName("span")[0].innerHTML=initHelp[1];
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
	lis=$("menuBox").getElementsByTagName("li");
	var spans = $("menuBox").getElementsByTagName("span");
	spans[0].innerHTML=wirelessConName[0];
	spans[1].innerHTML=wirelessConName[1];
	spans[2].innerHTML=wirelessConName[2];
	$("scanInputTitle").innerHTML=wirelessConName[3];
	scanButtonListDivList[0].innerHTML=wirelessConName[4];
	scanButtonListDivList[1].innerHTML=wirelessConName[5];
	parent.updateInitTitle(wirelessConName[6]);
	$("subTitleTag").innerHTML=wirelessConName[7];
	$("back").getElementsByTagName("span")[0].innerHTML=initHelp[0];
	$("select").getElementsByTagName("span")[0].innerHTML=initHelp[1];
	$("next").getElementsByTagName("span")[0].innerHTML=initHelp[2];

}
var menuBoxLiList;
var scanButtonListDivList;

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
        //classlist = document.getElementById("inputFocus");
        //classlist.style.border = "4px  solid" + top.uiColourStyle;
	}
}
function init()
{
    top.initTextDirection(window);
	initSetRegion();
	menuBoxLiList = $("menuBox").getElementsByTagName("li");
	scanButtonListDivList = $("scanButtonList").getElementsByTagName("div");
	showUI();
	getWifiCount();
	showWifiList();
	addMouseListener();
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
	var spans = $("menuBox").getElementsByTagName("span");
	wirelessList=setting.getWirelessAvailableNetwork(wirelessListSize,wirelessListPageIndex-1);
	sumWifi=wirelessList.length;
	var i=0;
	for(i=0;i<wirelessListSize;i++)
	{
		if(sumWifi==0)
		{
			lis[i+1].style.display = "none";
			$("thdListFocusList").style.display = "none";
		}
		else
		{
			if(i<sumWifi)
			{
				lis[i+1].style.display = "block";
				nowWifiInfo=wirelessList[i];
				spans[i+3].innerHTML=nowWifiInfo.networkname;
				if(nowWifiInfo.encrypt>0)
				{
					$("netLock"+i).style.display = "block";	
				}
				else
				{
					$("netLock"+i).style.display = "none";
				}
				$("encrypt"+i).innerHTML=newtworkWirelessEncrypt[nowWifiInfo.encrypt];
				showWifiSignal(nowWifiInfo.strength,i);
			}
			else
			{
				lis[i+1].style.display = "none";
			}
		}
	}
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
	$("ScrollBar").style.height = parseInt(400/wirelessListPageCount)+"px";
}

function checkPassword()//检测密码是否合法
{
	if(wirelessList[positionV].encrypt==1)
	{
		if(password.length<5)
		{
			$("scanPassRemind").style.display="block";
			$("scanPassRemind").innerHTML=passwordRemind[0];
			return 0;
		}
	}
	else
	{
		if(password.length<8)
		{
			$("scanPassRemind").style.display="block";
			$("scanPassRemind").innerHTML=passwordRemind[0];
			return 0;
		}
	}
	return 1;
}
function uninit()
{
	top.hiddenKeyBoard();
}

function addMouseListener()
{
   document.body.onmousedown = function(evt){evt.preventDefault();
		if(evt.button==2)
		{
			toBack();
		}
	}
	for(var i = 1; i < 6; i++)
	{
		menuBoxLiList[i].setAttribute("newAttr",i)
		menuBoxLiList[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				if(focusType == "wirelessList" && sumWifi>0){
					positionV = parseInt(this.getAttribute("newAttr"),10)-1;
					$("thdListFocusList").style.top = MENU_START+positionV*MENU_STEP+"px";
					toOK();
				}
			}
		}
	}
	
	$("scanInputContent").onmousedown = function(evt){
		if(evt.button == 0){//left key
			if(focusType == "passwordMenu"){
				passwordMenuV=0;
				$("dialogButtonFocus").style.display="none";
				$("scanInputFocus").style.display="block";
				toOK();
			}
		}
	}
	
	for(var i = 0; i < 2; i++)
	{
		scanButtonListDivList[i].setAttribute("newAttr",i);
		scanButtonListDivList[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				if(focusType == "passwordMenu")
				{
					passwordMenuV = 1;
					passwordMenuH = (~parseInt(this.getAttribute("newAttr"),10))&1;
					top.g_channel.testLog("passwordMenuH======"+passwordMenuH);
					if(passwordMenuH == 0)
					{
						$("dialogButtonFocus").style.left=650+"px";
					}
					else
					{
						$("dialogButtonFocus").style.left=350+"px";
					}
					$("dialogButtonFocus").style.display="block";
					$("scanInputFocus").style.display="none";
					toOK();
				}
			}
		}
	}
	$("back").onmousedown = function(evt){
		if(evt.button==0)
		{
			if(focusType == "wirelessList")
			{
				toLeft();
			}
		}
	}
	$("next").onmousedown = function(evt){
		if(evt.button==0)
		{
			if(focusType == "wirelessList")
			{
				toRight();
			}
		}
	}
	$("select").onmousedown = function(evt){
		if(evt.button==0)
		{
			if(focusType == "wirelessList")
			{
				toDown();
			}
		}
	}
}