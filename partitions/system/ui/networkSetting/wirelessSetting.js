var wirelessListName          = [top.netOptions[2],top.others[12],top.manualAuto[0],top.manualAuto[1],top.netOptions[2] + ">" +  top.manualAuto[0],
	top.netOptions[18],top.others[13],top.others[14],top.okCancel[1],top.others[2]];
var wirelessListRemind        = [top.netSsidError,top.passError];
var wirelessListSecurity      = top.netWlessSecu3;
var passwordCharacter         = [[["a","b","c","d","e","f","g","h","i","j","k","l","m"],["n","o","p","q","r","s","t","u","v","w","x","y","z"],[".","0","1","2","3","4","5","6","7","8","9"," "]],[["~","`","!","@","#","$","%","^","&amp;","*","(",")","?"],["-","+","=","{","}","[","]","\\","|",";",":","\"","'"],[".",",","_","&lt;",">","\/","www.",".com",".cn",".net",".org"," "]]];//密码字符集
var capitalLetter             = [["A","B","C","D","E","F","G","H","I","J","K","L","M"],["N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]];//大写字母集
var minuscules                = [["a","b","c","d","e","f","g","h","i","j","k","l","m"],["n","o","p","q","r","s","t","u","v","w","x","y","z"]];//小写字母集
var loadingImg                = ["../images/Loading-01.png","../images/Loading-02.png","../images/Loading-03.png","../images/Loading-04.png","../images/Loading-05.png","../images/Loading-06.png","../images/Loading-07.png","../images/Loading-08.png"];
var positionV                 = 0;//主界面焦点的位置坐标
var positionSsidV             = 0;//SSID输入界面焦点的坐标
var positionSsidH             = 0;//表示button的焦点位置
var passwordMenuV             = 0;//密码编辑主界面垂直坐标
var passwordMenuH             = 0;//密码编辑主界面水平坐标表示是否去连接网络
var passwordListV             = 0;//表示密码键盘焦点停留在第几行
var passwordListH             = 0;//表示第几列
var lettersFlag               = 0;//标记是字母还是特殊字符 0：表示字母 1：表示特殊字符
var securityType              = 0;//保存加密类型
var ssid                      = "";//保存SSID
var password                  = "";//保存密码
var passwordShow              = "";//用来显示*
var passwordTimeout           = 0;//用来表示输入密码超时500ms变为*号表示
var capitalFlag               = 0;//用来标记字符是大写还是小写 0 表示小写 1表示大写
var lis;
var MENU_START 			      = 160;//菜单焦点移动起始位置
var MENU_STEP 			      = 70;//主菜单焦点移动的step
var loadingImgNum             = 0;
var connectFlag               = 0;
var loadingTimer              = 0;
var passwordRemind            = top.netConnRemind;//提示语
var focusType                 = "wirelessListMenu";

var setting = top.g_setting;
var repeatTimerIndex = 0;
document.onsystemevent = notifyProcess;

var showItemNum = 0;

var menuList =
	[
		{name:"Scan"  ,		param:function(){showScan();	  }	,	showFlag:1},
		{name:"Manual",		param:function(){showManual();    }	,	showFlag:1},
		{name:"Auto"  ,		param:function(){showAuto();      }	,	showFlag:1}
	];

var oldInputChar  ;
var pressKeyFlag = 0;
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
	if(top.g_nextHtmlPage == "wirelessScan.html")
	{
		positionV = 0;
		$("thdListFocus").style.display="block";
		$("thdMenuRight").style.display = "none";
		top.g_nextHtmlPage = "";
	}
	else
	{
		timeoutInit();
	}

	lis = $("thdMenuRight").getElementsByTagName("li");		 //得到所有的li，一共四个，算上标题
	var spans=$("thdMenuRight").getElementsByTagName("span");//得到所有的span，一共四个，算上标题
    $("titleNameSpan").innerHTML=wirelessListName[0];
	for(var i=1;i<=menuList.length;i++)
	{
		spans[i].innerHTML=wirelessListName[i];
	}

	//手动SSID输入框 的 赋值
	$("SSIDTitle").innerHTML=wirelessListName[4];
	$("SSIDInputTitle").innerHTML=wirelessListName[5];
	$("popListFirPro").innerHTML=wirelessListName[6];

	var divs=$("SSIDButtonList").getElementsByTagName("div");
	divs[0].innerHTML=wirelessListName[7];//Connect
	divs[1].innerHTML=wirelessListName[8];//Cancel

	//加密网络输入密码框 的 赋值
	$("passwordInputTitle").innerHTML=wirelessListName[9];
	var divs=$("passwordButtonList").getElementsByTagName("div");
	divs[0].innerHTML=wirelessListName[7];//Connect
	divs[1].innerHTML=wirelessListName[8];//Cancel

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
	lis[0].style.display="block";//标题是一定显示的

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

function showScan()
{
	parent.jumpPage(3,"networkSetting/wirelessSetting/wirelessScan.html");
}
function showManual()
{
	showInputSSID();
}

function showAuto()
{
	parent.jumpPage(3,"networkSetting/wirelessSetting/wirelessAuto.html");
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


function toOk()//按OK键
{
	if(focusType == "wirelessListMenu")
	{
		executeFunction(positionV);
	}
	else if(focusType == "inputSSID")
	{
		switch(positionSsidV)
		{
			case 0:
			{
				top.mouseCallBack.funcOk=toOk;
				top.mouseCallBack.funcBack=toBack;
                top.mouseCallBack.funcMouseUp=repeatkeyupproc;
				top.showKeyBoard();
				focusType = "SSIDEdit"
			}
				break;
			case 2:
			{
				if(positionSsidH==0)
				{
					parent.showPage(2);
					$("wirelessInputSSID").style.display="none";
					$("SSIDRemind").style.display="none";
					focusType = "wirelessListMenu";
				}
				else
				{
					if(securityType==0)
					{
						if(ssid.length>0)//以后用检测函数替代
						{
							parent.showPage(2);
							$("wirelessInputSSID").style.display="none";
							setting.wirelessNetworkConnect(ssid,"NONE",securityType,password);
							$("loading").style.display="block";
							$("menuUl").style.display ="none";
							$("thdListFocus").style.display="none";
							loadingTimer=setInterval('loading(passwordRemind[1])',300);
							connectFlag=1;
						}
						else
						{
							$("SSIDRemind").style.display="block";
							$("SSIDRemind").innerHTML=wirelessListRemind[0];
							top.setTTSSay(top.SPEECH_TYPE_FLUSH,wirelessListRemind[0]);	//ssid出错for tts
							ttsFlag = 1;
							top.ttsLog("ttsStr="+wirelessListRemind[0]);
						}
					}
					else
					{
						if(ssid.length>0)//以后用检测函数替代
						{
							showPasswordMenu();//弹出密码框
						}
						else
						{
							$("SSIDRemind").style.display="block";
							$("SSIDRemind").innerHTML=wirelessListRemind[0];
							ttsFlag = 1;
							top.setTTSSay(top.SPEECH_TYPE_FLUSH,wirelessListRemind[0]);	//ssid出错for tts
							top.ttsLog("ttsStr="+wirelessListRemind[0]);
						}
					}
				}
			}
				break;
			default:
				break;
		}
	}
	else if(focusType == "SSIDEdit")
	{
		var key=top.toOkGetChar();
		if(key=="back")
		{
			if(ssid.length>0)
			{
				ssid=ssid.substring(0,ssid.length-1);
				$("SSIDInputContent").innerHTML=top.replaceT(ssid);
			}

            //NT563平台持续按输入法的回退按键会导致setInterval里的函数无限循环执行，从而导致输入法无法输入字符
            if (repeatTimerIndex != 0)
            {
                clearInterval(repeatTimerIndex);
                repeatTimerIndex = 0;
            }

			repeatTimerIndex = setInterval(function() {
				if(ssid.length>0)
				{
					ssid=ssid.substring(0,ssid.length-1);
					$("SSIDInputContent").innerHTML=top.replaceT(ssid);
				}
				top.timeoutFuc.osdTimeoutEndFuc();
				top.timeoutFuc.osdTimeoutStartFuc();
			},300);
		}
		else if(typeof(key)=="undefined" || key=="!one" || key =="shift" || key=="symPage1" || key=="symPage2" ||key=="changeChar" || key=="changeLang" || key=="setting")
		{
			return;
		}
		else
		{
			if(ssid.length<32)
			{
				ssid=ssid+key;

				$("SSIDInputContent").innerHTML=top.replaceT(ssid);
			}
		}
	}
	else if(focusType == "passwordMenu")
	{
		if(passwordMenuV==0)
		{
			top.mouseCallBack.funcOk=toOk;
			top.mouseCallBack.funcBack=toBack;
            top.mouseCallBack.funcMouseUp=repeatkeyupproc;
			top.showKeyBoard();
			focusType = "passwordEdit"
		}
		else
		{
			if(passwordMenuH==1)
			{
				if(checkPassword()==1)//密码位数大于等于最小数时连接网络否则提示密码错误
				{
					if(securityType==1)
					{
						setting.wirelessNetworkConnect(ssid,"WEP",securityType,password);
					}
					else if(securityType==2 || securityType == 3)
					{
						setting.wirelessNetworkConnect(ssid,"TKIP",2,password);
					}
					else if(securityType==4 || securityType == 5)
					{
						setting.wirelessNetworkConnect(ssid,"CCMP",3,password);
					}
					else
					{
						setting.wirelessNetworkConnect(ssid,"TKIP AES",4,password);
					}
					$("loading").style.display="block";
					$("menuUl").style.display ="none";
					$("thdListFocus").style.display="none";
					loadingTimer=setInterval('loading(passwordRemind[1])',300);
					connectFlag=1;
					$("wirelessInputPassword").style.display="none";
					passwordShow="";
					password="";
					$("passwordInputContent").innerHTML=passwordShow;
					$("passwordRemind").style.display="none";
					parent.showPage(2);
					focusType = "wirelessListMenu"
				}
			}
			else
			{
				$("wirelessInputSSID").style.display="block";
				$("wirelessInputPassword").style.display="none";
				$("passwordRemind").style.display="none";
				passwordShow="";
				password="";
				$("passwordInputContent").innerHTML=passwordShow;
				focusType = "inputSSID"
			}
		}
	}
	else if(focusType == "passwordEdit")
	{
		var key=top.toOkGetChar();

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

function toUp()//按上键
{
	if(focusType == "wirelessListMenu")
	{
		positionV--;
		if(positionV<0)
		{
			positionV=showItemNum-1;
		}
		$("thdListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
	}
	else if(focusType == "inputSSID")
	{
		switch(positionSsidV)
		{
			case 0:
			{
				positionSsidV=2;
				$("SSIDInputFocus").style.display="none";
				$("dialogButtonFocus").style.display="block";
			}
				break;
			case 1:
			{
				positionSsidV=0;
				$("popListFocus").style.display="none";
				$("SSIDInputFocus").style.display="block";
			}
				break;
			case 2:
			{
				positionSsidV=1;
				$("dialogButtonFocus").style.display="none";
				$("popListFocus").style.display="block";
			}
				break;
			default:
				break;
		}
	}
	else if(focusType == "passwordMenu")
	{
		if(passwordMenuV==0)
		{
			passwordMenuV=1;
			$("passwordInputFocus").style.display="none";
			$("passwordButtonFocus").style.display="block";
		}
		else
		{
			passwordMenuV=0;
			$("passwordButtonFocus").style.display="none";
			$("passwordInputFocus").style.display="block";
		}
	}
	else if(focusType == "SSIDEdit" || focusType == "passwordEdit")
	{
		top.moveUp();
	}
}



function toDown()//按下键
{
	if(focusType == "wirelessListMenu")
	{
		positionV++;
		if(positionV>showItemNum-1)
		{
			positionV=0;
		}
		$("thdListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
	}
	else if(focusType == "inputSSID")
	{
		switch(positionSsidV)
		{
			case 0:
			{
				positionSsidV++;
				$("SSIDInputFocus").style.display="none";
				$("popListFocus").style.display="block";
			}
				break;
			case 1:
			{
				positionSsidV++;
				$("popListFocus").style.display="none";
				$("dialogButtonFocus").style.display="block";
			}
				break;
			case 2:
			{
				positionSsidV=0;
				$("dialogButtonFocus").style.display="none";
				$("SSIDInputFocus").style.display="block";
			}
				break;
			default:
				break;
		}
	}
	else if(focusType == "passwordMenu")
	{
		if(passwordMenuV==0)
		{
			passwordMenuV=1;
			$("passwordInputFocus").style.display="none";
			$("passwordButtonFocus").style.display="block";
		}
		else
		{
			passwordMenuV=0;
			$("passwordButtonFocus").style.display="none";
			$("passwordInputFocus").style.display="block";
		}
	}
	else if(focusType == "SSIDEdit" || focusType == "passwordEdit")
	{
		top.moveDown();
	}
}




function keyDownProcess(evt)
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
			toOk();
			ttsRead();
			ret = false;
			break;
		}
		case top.VK_BACK: //back
		{
			if((focusType == "passwordMenu" &&passwordMenuV == 0 && (password.length>0)) ||(focusType == "inputSSID"&&positionSsidV==0 && (ssid.length > 0)))
			{
				if(focusType == "passwordMenu" &&passwordMenuV == 0 && (password.length>0))
				{
					password = password.substr(0, password.length - 1);
					showPassword('');
				}
				else
				{
					ssid = ssid.substring(0, ssid.length - 1);
					$("SSIDInputContent").innerHTML = top.replaceT(ssid);
				}
			}
			else
			{
				toBack();
				ttsRead();
			}
		}
			break;
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
			ret = false;
			break;
		}
		case top.VK_0:
			if(((focusType == "passwordMenu" ||focusType == "passwordEdit")&&passwordMenuV == 0) ||((focusType == "inputSSID"||focusType == "SSIDEdit")&&positionSsidV==0))
			{
				if(focusType == "passwordMenu" ||focusType == "passwordEdit")
					checkInput(keycode);
				else
					checkSSIDInput(keycode);
			}
			break;
		case top.VK_1:
			if(((focusType == "passwordMenu" ||focusType == "passwordEdit")&&passwordMenuV == 0) ||((focusType == "inputSSID"||focusType == "SSIDEdit")&&positionSsidV==0))
			{
				if(focusType == "passwordMenu" ||focusType == "passwordEdit")
					checkInput(keycode);
				else
					checkSSIDInput(keycode);
			}
			break;
		case top.VK_2:
			if(((focusType == "passwordMenu" ||focusType == "passwordEdit")&&passwordMenuV == 0) ||((focusType == "inputSSID"||focusType == "SSIDEdit")&&positionSsidV==0))
			{
				if(focusType == "passwordMenu" ||focusType == "passwordEdit")
					checkInput(keycode);
				else
					checkSSIDInput(keycode);
			}
			break;
		case top.VK_3:
			if(((focusType == "passwordMenu" ||focusType == "passwordEdit")&&passwordMenuV == 0) ||((focusType == "inputSSID"||focusType == "SSIDEdit")&&positionSsidV==0))
			{
				if(focusType == "passwordMenu" ||focusType == "passwordEdit")
					checkInput(keycode);
				else
					checkSSIDInput(keycode);
			}
			break;
		case top.VK_4:
			if(((focusType == "passwordMenu" ||focusType == "passwordEdit")&&passwordMenuV == 0) ||((focusType == "inputSSID"||focusType == "SSIDEdit")&&positionSsidV==0))
			{
				if(focusType == "passwordMenu" ||focusType == "passwordEdit")
					checkInput(keycode);
				else
					checkSSIDInput(keycode);
			}
			break;
		case top.VK_5:
			if(((focusType == "passwordMenu" ||focusType == "passwordEdit")&&passwordMenuV == 0) ||((focusType == "inputSSID"||focusType == "SSIDEdit")&&positionSsidV==0))
			{
				if(focusType == "passwordMenu" ||focusType == "passwordEdit")
					checkInput(keycode);
				else
					checkSSIDInput(keycode);
			}
			break;
		case top.VK_6:
			if(((focusType == "passwordMenu" ||focusType == "passwordEdit")&&passwordMenuV == 0) ||((focusType == "inputSSID"||focusType == "SSIDEdit")&&positionSsidV==0))
			{
				if(focusType == "passwordMenu" ||focusType == "passwordEdit")
					checkInput(keycode);
				else
					checkSSIDInput(keycode);
			}
			break;
		case top.VK_7:
			if(((focusType == "passwordMenu" ||focusType == "passwordEdit")&&passwordMenuV == 0) ||((focusType == "inputSSID"||focusType == "SSIDEdit")&&positionSsidV==0))
			{
				if(focusType == "passwordMenu" ||focusType == "passwordEdit")
					checkInput(keycode);
				else
					checkSSIDInput(keycode);
			}
			break;
		case top.VK_8:
			if(((focusType == "passwordMenu" ||focusType == "passwordEdit")&&passwordMenuV == 0) ||((focusType == "inputSSID"||focusType == "SSIDEdit")&&positionSsidV==0))
			{
				if(focusType == "passwordMenu" ||focusType == "passwordEdit")
					checkInput(keycode);
				else
					checkSSIDInput(keycode);
			}
			break;
		case top.VK_9:
			if(((focusType == "passwordMenu" ||focusType == "passwordEdit")&&passwordMenuV == 0) ||((focusType == "inputSSID"||focusType == "SSIDEdit")&&positionSsidV==0))
			{
				if(focusType == "passwordMenu" ||focusType == "passwordEdit")
					checkInput(keycode);
				else
					checkSSIDInput(keycode);
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
			if(((focusType == "passwordMenu" ||focusType == "passwordEdit")&&passwordMenuV == 0) ||((focusType == "inputSSID"||focusType == "SSIDEdit")&&positionSsidV==0))
			{
				if(focusType == "passwordMenu" ||focusType == "passwordEdit")
					checkInput(keycode);
				else
					checkSSIDInput(keycode);
			}
			break;
		default:
			top.keyDownProcess(evt);
			break;
	}
	return ret;
}




function showInputSSID()//初始化SSID主页面
{
	parent.hiddenPage(2);
	$("wirelessInputSSID").style.display="block";
	$("SSIDInputContent").innerHTML="";
	ssid="";
	positionSsidV = 0;//SSID输入界面焦点的坐标
	positionSsidH = 0;//表示button的焦点位置
	securityType = 0;
	$("popListSndPro").innerHTML=wirelessListSecurity[securityType];
	$("popListFocus").style.display="none";
	$("dialogButtonFocus").style.left=440+"px";
	$("dialogButtonFocus").style.display="none";
	$("SSIDInputFocus").style.display="block";
	focusType = "inputSSID";
}
function showPasswordMenu()//密码框初始化页面
{
	$("wirelessInputSSID").style.display="none";
	$("wirelessInputPassword").style.display="block";
	passwordMenuV = 0;//密码编辑主界面垂直坐标
	passwordMenuH = 0;//密码编辑主界面水平坐标表示是否去连
	$("passwordButtonFocus").style.display="none";
	$("passwordButtonFocus").style.left=440+"px";
	$("passwordInputFocus").style.display="block";
	$("passwordTitle").innerHTML=ssid;
	focusType = "passwordMenu";
}
function toLeft()
{
	if(focusType == "inputSSID")
	{
		switch(positionSsidV)
		{
			case 1:
			{
				securityType--;
				if(securityType<0)
				{
					securityType=6;
				}
				else if(securityType==4)
				{
					securityType=1;
				}
				$("popListSndPro").innerHTML=wirelessListSecurity[securityType];
			}
				break;
			case 2:
			{
				if(positionSsidH==0)
				{
					positionSsidH=1;
					$("dialogButtonFocus").style.left=170+"px";
				}
				else
				{
					positionSsidH=0;
					$("dialogButtonFocus").style.left=440+"px";
				}
			}
				break;
			default:
				break;
		}
	}
	else if(focusType == "SSIDEdit" || focusType == "passwordEdit")
	{
		top.moveLeft();
	}
	else if(focusType == "passwordMenu")
	{
		if(passwordMenuV==1)
		{
			if(passwordMenuH==1)
			{
				passwordMenuH=0;
				$("passwordButtonFocus").style.left=440+"px";
			}
			else
			{
				passwordMenuH=1;
				$("passwordButtonFocus").style.left=170+"px";
			}
		}
	}
	else
	{
		toBack();
	}

}
function toRight()
{
	if(focusType == "inputSSID")
	{
		switch(positionSsidV)
		{
			case 1:
			{
				securityType++;
				if(securityType>6)
				{
					securityType=0;
				}
				else if(securityType==2)
				{
					securityType=5;
				}
				$("popListSndPro").innerHTML=wirelessListSecurity[securityType];
			}
				break;
			case 2:
			{
				if(positionSsidH==0)
				{
					positionSsidH=1;
					$("dialogButtonFocus").style.left=170+"px";
				}
				else
				{
					positionSsidH=0;
					$("dialogButtonFocus").style.left=440+"px";
				}
			}
				break;
			default:
				break;
		}
	}
	else if(focusType == "SSIDEdit" || focusType == "passwordEdit")
	{
		top.moveRight();
	}
	else if(focusType == "passwordMenu")
	{
		if(passwordMenuV==1)
		{
			if(passwordMenuH==1)
			{
				passwordMenuH=0;
				$("passwordButtonFocus").style.left=440+"px";
			}
			else
			{
				passwordMenuH=1;
				$("passwordButtonFocus").style.left=170+"px";
			}
		}
	}
	else
	{
		toOk();
	}
}
function toBack()//返回键
{
	if(focusType == "wirelessListMenu")
	{
		parent.returnPage(2);
	}
	else if(focusType == "inputSSID")
	{
		$("wirelessInputSSID").style.display="none";
		$("SSIDRemind").style.display="none";
		ssid="";
		passwordShow="";
		password="";

		$("SSIDInputContent").innerHTML="";
		parent.showPage(2);
		focusType = "wirelessListMenu"
	}
	else if(focusType == "SSIDEdit")
	{
		if(top.tobackKeyBoard()=="menuBack")
		{
			focusType = "inputSSID"
		}
	}
	else if(focusType == "passwordMenu")
	{
		$("wirelessInputSSID").style.display="block";
		$("wirelessInputPassword").style.display="none";
		$("passwordRemind").style.display="none";
		passwordShow="";
		password="";
		clearTimeout(passwordTimeout);
		passwordTimeout = 0;
		clearTimeout(oldRcKeyTimeOut);
		oldRcKeyTimeOut = 0;
		pressKeyFlag = 0;
		keyCount = 0;
		$("passwordInputContent").innerHTML=passwordShow;
		focusType = "inputSSID"
	}
	else if(focusType == "passwordEdit")
	{
		if(top.tobackKeyBoard()=="menuBack")
		{
			focusType = "passwordMenu"
		}
	}
}


function checkSSIDInput(keycode)//修改SSID的函数
{
	//第一次的时候
	var inputChar='';

	if(oldRcKeyTimeOut != 0)
	{
		clearTimeout(oldRcKeyTimeOut);
		oldRcKeyTimeOut = 0;
	}
	if (pressKeyFlag==0)
	{
		pressKeyFlag = 1;
		if ((keycode>=32 && keycode<=47) || (keycode>=58 && keycode<=96) ||(keycode>=353 && keycode<=378)||(keycode>=123 && keycode<=126)||(keycode>=293 && keycode<=296))
		{
			pressKeyFlag = 0;
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
			if(char_table[keyTableLine].length == 1)
			{
				pressKeyFlag = 0;
			}
			inputChar = char_table[keyTableLine][keyCount];
		}

		if(ssid.length<32)
		{
			ssid=ssid+inputChar;
			$("SSIDInputContent").innerHTML=top.replaceT(ssid);
		}
		oldRcKeyTimeOut = setTimeout(function(){pressKeyFlag = 0;keyCount = 0;}, 800);
	}
	else//其他时候
	{

		if (oldKeyCode == keycode)
		{
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
				keyCount++;
				var keyTableLine = keycode - 48;
				if (keyCount>=char_table[keyTableLine].length)
				{
					keyCount = 0;
				}
				inputChar = char_table[keyTableLine][keyCount];
			}
			console.log("the ssid is "+ssid);
			if(ssid.length<32)
			{
				ssid=ssid.substring(0,ssid.length-1);
				ssid=ssid+inputChar;
				$("SSIDInputContent").innerHTML=top.replaceT(ssid);
			}
			oldRcKeyTimeOut = setTimeout(function(){pressKeyFlag = 0;keyCount = 0;}, 800);
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
			if(ssid.length<32)
			{
				ssid=ssid+inputChar;
				$("SSIDInputContent").innerHTML=top.replaceT(ssid);
			}
			oldRcKeyTimeOut = setTimeout(function(){pressKeyFlag = 0;keyCount = 0;}, 800);
		}
	}
	oldKeyCode = keycode;
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
	$("passwordInputContent").innerHTML = password.replace(/[ \S]/g, "*") + key;
}


function checkPassword()//检测密码
{
	if(securityType==1)
	{
		if(password.length<5)
		{
			$("passwordRemind").style.display="block";
			$("passwordRemind").innerHTML=wirelessListRemind[1];
			top.setTTSSay(top.SPEECH_TYPE_FLUSH,wirelessListRemind[1]);	//密码出错for tts
			ttsFlag = 1;
			top.ttsLog("ttsStr="+wirelessListRemind[1]);
			return 0;
		}
	}
	else
	{
		if(password.length<8)
		{
			$("passwordRemind").style.display="block";
			$("passwordRemind").innerHTML=wirelessListRemind[1];
			top.setTTSSay(top.SPEECH_TYPE_FLUSH,wirelessListRemind[1]);	//密码出错for tts
			ttsFlag = 1;
			top.ttsLog("ttsStr="+wirelessListRemind[1]);
			return 0;
		}
	}
	return 1;
}

function uninit()
{
	top.hiddenKeyBoard();
}
function loading(remind)
{
	focusType = "loading";
	top.stopTimeout();
	$("remindWord").innerHTML = remind;
	ttsRead();
	top.g_channel.testLog("remind="+remind);
	$("loadingImg").src=loadingImg[loadingImgNum];
	loadingImgNum++;
	if(loadingImgNum>=8)
	{
		loadingImgNum=0;
	}
	top.g_channel.testLog("loadingImgNum="+loadingImgNum);
}

function notifyProcess(evt)
{
	var msg = evt.which;
	var value = evt.modifiers;
	console.log("hevens *************** revice msg = "+msg+" value is "+value);
	//全局消息
	switch(msg)
	{
		case top.E_WIRELESS_CONNECT_SUCCESS://表示无线网络连接成功
		{
            top.systemEventProc(evt);
			if(focusType == "loading" && connectFlag ==1)
			{
				clearInterval(loadingTimer);
				loadingTimer = 0;
				top.restartTimeout();
				$("remindWord").innerHTML = passwordRemind[2];
				ttsRead();
				$("loadingImg").style.display="none";
				setTimeout(function(){
					$("loading").style.display = "none";
					$("remindWord").innerHTML = "";
					$("loadingImg").style.display="block";
					$("menuUl").style.display = "block";
					$("thdListFocus").style.display="block";
					connectFlag=0;
					focusType = "wirelessListMenu";
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
				top.restartTimeout();
				$("remindWord").innerHTML = passwordRemind[3];
				ttsRead();
				$("loadingImg").style.display="none";
				setTimeout(function(){
					$("loading").style.display = "none";
					$("remindWord").innerHTML = "";
					$("loadingImg").style.display="block";
					$("menuUl").style.display = "block";
					$("thdListFocus").style.display="block";
					connectFlag=0;
					focusType = "wirelessListMenu";
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

function $(id)
{
	return document.getElementById(id);
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
	for(var i = 0; i < 3; i++)
	{
		lis[i+1].setAttribute("newAttr",i);
		lis[i+1].onmousedown = function(evt){
			if(evt.button == 0){//left key
				evt.preventDefault();
				top.timeoutFuc.osdTimeoutEndFuc();
				if(focusType=="wirelessListMenu")
				{
					positionV = parseInt(this.getAttribute("newAttr"));
					$("thdListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
					toOk();
				}
				top.g_channel.testLog("............addMouseListener  onmousedown................");
				top.timeoutFuc.osdTimeoutStartFuc();
			}
		}
	}
	$("SSIDInputContent").onmousedown = function(evt){
		if(evt.button == 0){//left key
			top.timeoutFuc.osdTimeoutEndFuc();
			if(focusType=="inputSSID" )
			{
				positionSsidV=0;
				$("popListFocus").style.display="none";
				$("dialogButtonFocus").style.display="none";
				$("SSIDInputFocus").style.display="block";
				toOk();
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	$("popList").onmousedown = function(evt){
		if(evt.button == 0){//left key
			top.timeoutFuc.osdTimeoutEndFuc();
			if(focusType=="inputSSID" )
			{
				if(positionSsidV!=1)
				{
					positionSsidV=1;
					$("popListFocus").style.display="block";
					$("dialogButtonFocus").style.display="none";
					$("SSIDInputFocus").style.display="none";
					toOk();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	$("popListFocus").onmousedown = function(evt){
		if(evt.button == 0){//left key
			top.timeoutFuc.osdTimeoutEndFuc();
			if(focusType=="inputSSID" )
			{
				if(positionSsidV==1)
				{
					toRight();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	var buttonDiv=$("SSIDButtonList").getElementsByTagName("div");
	buttonDiv[0].onmousedown = function(evt){
		if(evt.button == 0){//left key
			top.timeoutFuc.osdTimeoutEndFuc();
			if(focusType=="inputSSID" )
			{
				positionSsidH=1;
				positionSsidV=2;
				$("popListFocus").style.display="none";
				$("dialogButtonFocus").style.display="block";
				$("SSIDInputFocus").style.display="none";
				$("dialogButtonFocus").style.left=170+"px";
				toOk();
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	buttonDiv[1].onmousedown = function(evt){
		if(evt.button == 0){//left key
			top.timeoutFuc.osdTimeoutEndFuc();
			if(focusType=="inputSSID" )
			{
				positionSsidH=0;
				positionSsidV=2;
				$("popListFocus").style.display="none";
				$("dialogButtonFocus").style.display="block";
				$("SSIDInputFocus").style.display="none";
				$("dialogButtonFocus").style.left=440+"px";
				toOk();
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}

	$("passwordInputContent").onmousedown = function(evt){
		if(evt.button == 0){//left key
			top.timeoutFuc.osdTimeoutEndFuc();
			if(focusType=="passwordMenu" )
			{
				passwordMenuV=0;
				$("passwordInputFocus").style.display="block";
				$("passwordButtonFocus").style.display="none";
				toOk();
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	var buttonDiv=$("passwordButtonList").getElementsByTagName("div");
	buttonDiv[0].onmousedown = function(evt){
		if(evt.button == 0){//left key
			top.timeoutFuc.osdTimeoutEndFuc();
			if(focusType=="passwordMenu" )
			{
				passwordMenuH=1;
				passwordMenuV=1;
				$("passwordInputFocus").style.display="none";
				$("passwordButtonFocus").style.display="block";
				$("passwordButtonFocus").style.left=170+"px";
				toOk();
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	buttonDiv[1].onmousedown = function(evt){
		if(evt.button == 0){//left key
			top.timeoutFuc.osdTimeoutEndFuc();
			if(focusType=="passwordMenu" )
			{
				passwordMenuH=0;
				passwordMenuV=1;
				$("passwordInputFocus").style.display="none";
				$("passwordButtonFocus").style.display="block";
				$("passwordButtonFocus").style.left=440+"px";
				toOk();
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
}

var lastFocusType;
var lastFocusName;
function findName(postion)
{
	var num=-1;
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag==1)
		{
			num++;
		}
		if(num==postion)
		{
			return menuList[i].name;
		}
	}
}

var lastPositionV;
var lastPositionH;
var ttsFlag = 0; //用于记录tts播放错误提示，保证错误提示不被打断。
var lastTtsStr = "";
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
		}
		else
		{
			currentStatus = currentStatus + ", not selected";
		}
	}

	if("wirelessListMenu" == focusType && 2 == parent.currentShowMenu && "none" == $("loading").style.display)
	{
		switch(currentName)
		{
			case "Scan":
				ttsName = wirelessListName[1];
				currentStatus = "";
				break;
			case "Manual":
				ttsName = wirelessListName[2];
				currentStatus = "";
				break;
			case "Auto":
				ttsName = wirelessListName[3];
				currentStatus = "";
				break;
			default:
				ttsName = "";
				currentStatus = "";
				break;
		}
	}
	else if("inputSSID" == focusType)  //soundPreset选项菜单
	{
		switch(positionSsidV)
		{
			case 0:
				ttsName = wirelessListName[5];
				currentStatus = "";
				break;
			case 1:
				ttsName = wirelessListName[6] + ",";
				currentStatus = wirelessListSecurity[securityType];
				break;
			case 2:
				ttsName = "";
				if(0 == positionSsidH)
				{
					currentStatus = wirelessListName[8];
				}
				else if(1 == positionSsidH)
				{
					currentStatus = wirelessListName[7];
				}
				else
				{
					currentStatus = "";
				}
				break;
			default:
				ttsName = "";
				currentStatus = "";
				break;
		}
		if(lastPositionV == positionSsidV && lastPositionH == positionSsidH && lastFocusType == focusType)
		{
			ttsName = "";
		}
		lastPositionV = positionSsidV;
		lastPositionH = positionSsidH;
	}
	else if("passwordMenu" == focusType)
	{
		switch(passwordMenuV)
		{
			case 0:
				ttsName = wirelessListName[9];
				currentStatus = "";
				break;
			case 1:
				if(0 == passwordMenuH)
				{
					currentStatus = wirelessListName[8]
				}
				else
				{
					currentStatus = wirelessListName[7]
				}
				break;
			default:
				ttsName = "";
				currentStatus = "";
				break;
		}
		if(lastPositionV == passwordMenuV && lastPositionH == passwordMenuH)
		{
			ttsName = "";
			currentStatus = "";
		}
		lastPositionV = passwordMenuV;
		lastPositionH = passwordMenuH;
	}
	if("loading" == focusType && "block" == $("loading").style.display)	//正在连接，连接成功等消息。
	{
		ttsName = "";
		currentStatus = $("remindWord").innerHTML;
		if(lastTtsStr == currentStatus)		//loading函数会多次被调用，避免同一提示语句发多次
		{
			currentStatus = "";
		}
		else
		{
			lastTtsStr = currentStatus;
		}
	}
	lastFocusType = focusType;
	ttsStr = ttsName + currentStatus;
	if(ttsFlag)
	{
		ttsStr = "";
		ttsFlag = 0;
	}
	if("" != ttsStr)
	{
		top.ttsLog("ttsStr=" + ttsStr);
		//top.ttsLog("focusType="+focusType+"   currentName="+findName(positionV));
		// top.ttsLog("form_position_h="+form_position_h);
		top.setTTSSay(top.SPEECH_TYPE_FLUSH, ttsStr);
	}
}