var wirelessListName          = [top.netOptions[16],top.others[13],top.okCancel[0],top.okCancel[1],top.others[2],top.initialTitle[1],top.initialOptions[1],top.others[35]];
var initHelp                  = top.initialHotkeys;
var wirelessListRemind        = [top.netSsidError,top.netConnRemind[0]];
var wirelessListSecurity      = top.netWlessSecu3;
var selectImg                 = ["../images/icon-Select_1.png","../images/icon-Return.png"];
var positionSsidV             = 0;//SSID输入界面焦点的坐标
var positionSsidH             = 1;//表示button的焦点位置
var securityType              = 0;//保存加密类型
var ssid                      = "";//保存SSID
var password                  = "";//保存密码
var passwordShow              = "";//用来显示*
var passwordTimeout           = 0;//用来表示输入密码超时500ms变为*号
var lis;
var MENU_START 			      = 51;//菜单焦点移动起始位置
var MENU_STEP 			      = 100;//主菜单焦点移动的step
var securityType              = 0;
var focusType                 = "wirelessMaunalList"
var setting = top.g_setting;
var factory = top.g_factory;
var repeatTimerIndex = 0;
document.onsystemevent = notifyProcess;

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



/*******************************************************************************************/
var loadingImgs				= ["../images/Loading-01.png",
    "../images/Loading-02.png",
    "../images/Loading-03.png",
    "../images/Loading-04.png",
    "../images/Loading-05.png",
    "../images/Loading-06.png",
    "../images/Loading-07.png",
    "../images/Loading-08.png"];
var loadingTimer = 0;
var loadingCount = 0;
var sn = "";
var token = "";
var t = "";
var countryCode = "";
var clientCode = "";
var cType = "";
var name                      = "";
var mail                      = "";
var mobile                    = "";
var activateTVWords = top.activateTVWords;

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
			toOk();
			ret = false;
			break;
		}
		case top.VK_BACK: //back
		{
			if (positionSsidV == 0 && (ssid.length > 0) && focusType == "wirelessMaunalList")
			{
				ssid = ssid.substring(0, ssid.length - 1);
				$("SSIDInputContent").innerHTML = top.replaceT(ssid);
			}
			else if (positionSsidV == 2 && (password.length > 0) && focusType == "wirelessMaunalList") {
				password = password.substr(0, password.length - 1);
				showPassword('');
			}
			else if (focusType == "customerCenter")
			{
				switch (positionSsidV)
				{
					case 0:
						if (name.length > 0)
						{
                            name = name.substring(0, name.length - 1);
                            $("ccInputnameContent").innerHTML = top.replaceT(name);
						}
						break;
					case 1:
                        if (mail.length > 0)
						{
                            mail = mail.substring(0, mail.length - 1);
                            $("ccInputmailContent").innerHTML = top.replaceT(mail);
						}
						break;
					case 2:
                        if (mobile.length > 0)
						{
                            mobile = mobile.substring(0, mobile.length - 1);
                            $("ccInputmobileContent").innerHTML = top.replaceT(mobile);
						}
						break;
				}
			}
			else
			{
				toBack();
			}
		}
		break;
		case top.VK_LEFT:
		{
			toLeft();
			ret = false;
			break;  
		}
		case top.VK_RIGHT:
		{
			toRight();
			ret = false;
			break;
		}

		case top.VK_RED:
			top.changeSource();
			top.jumpPage();
			break;
		case top.VK_0:
			if (positionSsidV == 0 && focusType == "wirelessMaunalList")  //SSIDEdit
                checkSSIDInput(keycode);
            else if (focusType == "customerCenter")
			{
				switch (positionSsidV)
				{
					case 0:
                        checkNameInput(keycode);
						break;
					case 1:
                        checkMailInput(keycode);
						break;
					case 2:
                        checkMobileInput(keycode);
						break;
				}
			}
			else //passwordEdit
                checkInput(keycode);
			break;
		case top.VK_1:
            if (positionSsidV == 0 && focusType == "wirelessMaunalList")  //SSIDEdit
                checkSSIDInput(keycode);
            else if (focusType == "customerCenter")
            {
                switch (positionSsidV)
                {
                    case 0:
                        checkNameInput(keycode);
                        break;
                    case 1:
                        checkMailInput(keycode);
                        break;
                    case 2:
                        checkMobileInput(keycode);
                        break;
                }
            }
            else //passwordEdit
                checkInput(keycode);
			break;
		case top.VK_2:
            if (positionSsidV == 0 && focusType == "wirelessMaunalList")  //SSIDEdit
                checkSSIDInput(keycode);
            else if (focusType == "customerCenter")
            {
                switch (positionSsidV)
                {
                    case 0:
                        checkNameInput(keycode);
                        break;
                    case 1:
                        checkMailInput(keycode);
                        break;
                    case 2:
                        checkMobileInput(keycode);
                        break;
                }
            }
            else //passwordEdit
                checkInput(keycode);
			break;
		case top.VK_3:
            if (positionSsidV == 0 && focusType == "wirelessMaunalList")  //SSIDEdit
                checkSSIDInput(keycode);
            else if (focusType == "customerCenter")
            {
                switch (positionSsidV)
                {
                    case 0:
                        checkNameInput(keycode);
                        break;
                    case 1:
                        checkMailInput(keycode);
                        break;
                    case 2:
                        checkMobileInput(keycode);
                        break;
                }
            }
            else //passwordEdit
                checkInput(keycode);
			break;
		case top.VK_4:
            if (positionSsidV == 0 && focusType == "wirelessMaunalList")  //SSIDEdit
                checkSSIDInput(keycode);
            else if (focusType == "customerCenter")
            {
                switch (positionSsidV)
                {
                    case 0:
                        checkNameInput(keycode);
                        break;
                    case 1:
                        checkMailInput(keycode);
                        break;
                    case 2:
                        checkMobileInput(keycode);
                        break;
                }
            }
            else //passwordEdit
                checkInput(keycode);
			break;
		case top.VK_5:
            if (positionSsidV == 0 && focusType == "wirelessMaunalList")  //SSIDEdit
                checkSSIDInput(keycode);
            else if (focusType == "customerCenter")
            {
                switch (positionSsidV)
                {
                    case 0:
                        checkNameInput(keycode);
                        break;
                    case 1:
                        checkMailInput(keycode);
                        break;
                    case 2:
                        checkMobileInput(keycode);
                        break;
                }
            }
            else //passwordEdit
                checkInput(keycode);
			break;
		case top.VK_6:
            if (positionSsidV == 0 && focusType == "wirelessMaunalList")  //SSIDEdit
                checkSSIDInput(keycode);
            else if (focusType == "customerCenter")
            {
                switch (positionSsidV)
                {
                    case 0:
                        checkNameInput(keycode);
                        break;
                    case 1:
                        checkMailInput(keycode);
                        break;
                    case 2:
                        checkMobileInput(keycode);
                        break;
                }
            }
            else //passwordEdit
                checkInput(keycode);
			break;
		case top.VK_7:
            if (positionSsidV == 0 && focusType == "wirelessMaunalList")  //SSIDEdit
                checkSSIDInput(keycode);
            else if (focusType == "customerCenter")
            {
                switch (positionSsidV)
                {
                    case 0:
                        checkNameInput(keycode);
                        break;
                    case 1:
                        checkMailInput(keycode);
                        break;
                    case 2:
                        checkMobileInput(keycode);
                        break;
                }
            }
            else //passwordEdit
                checkInput(keycode);
			break;
		case top.VK_8:
            if (positionSsidV == 0 && focusType == "wirelessMaunalList")  //SSIDEdit
                checkSSIDInput(keycode);
            else if (focusType == "customerCenter")
            {
                switch (positionSsidV)
                {
                    case 0:
                        checkNameInput(keycode);
                        break;
                    case 1:
                        checkMailInput(keycode);
                        break;
                    case 2:
                        checkMobileInput(keycode);
                        break;
                }
            }
            else //passwordEdit
                checkInput(keycode);
			break;
		case top.VK_9:
            if (positionSsidV == 0 && focusType == "wirelessMaunalList")  //SSIDEdit
                checkSSIDInput(keycode);
            else if (focusType == "customerCenter")
            {
                switch (positionSsidV)
                {
                    case 0:
                        checkNameInput(keycode);
                        break;
                    case 1:
                        checkMailInput(keycode);
                        break;
                    case 2:
                        checkMobileInput(keycode);
                        break;
                }
            }
            else //passwordEdit
                checkInput(keycode);
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
			if((focusType == "passwordEdit"&&passwordMenuV == 0) ||(focusType == "SSIDEdit"&&positionSsidV==0))
			{
				if(focusType == "passwordEdit")
					checkInput(keycode);
				else
					checkSSIDInput(keycode);
			}
			else if (focusType == "nameEdit")
			{
                checkNameInput(keycode);
			}
			else if (focusType == "mailEdit")
			{
                checkMailInput(keycode);
			}
			else if (focusType == "mobileEdit")
			{
                checkMobileInput(keycode);
			}
			break;
		default:
		break;
	}
	return ret;
}

function $(id)
{
    return document.getElementById(id);
}

function checkSSIDInput(keycode)//修改SSID的函数
{
	//第一次的时候
	var inputChar = '';
	if (oldRcKeyTimeOut != 0)
	{
		clearTimeout(oldRcKeyTimeOut);
		oldRcKeyTimeOut = 0;
	}

	if (pressKeyFlag==0)
	{
		pressKeyFlag = 1;
		if ((keycode>=32 && keycode<=47) || (keycode>=58 && keycode<=96) ||(keycode>=353 && keycode<=378)||(keycode>=123 && keycode<=126)||(keycode>=293 && keycode<=296))
		{
			keyCount = 0;
			pressKeyFlag = 0;
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
			if(1 ==char_table[keyTableLine].length)
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
		//屏蔽此代码，输入框只能输入数字。否则连续按同一个数字按键会切换为字母，然而该输入框没必要输入字母
		/*if (oldKeyCode == keycode)
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
		else*/
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

function checkNameInput(keycode)//修改SSID的函数
{
    //第一次的时候
    var inputChar = '';
    if (oldRcKeyTimeOut != 0)
    {
        clearTimeout(oldRcKeyTimeOut);
        oldRcKeyTimeOut = 0;
    }

    if (pressKeyFlag==0)
    {
        pressKeyFlag = 1;
        if ((keycode>=32 && keycode<=47) || (keycode>=58 && keycode<=96) ||(keycode>=353 && keycode<=378)||(keycode>=123 && keycode<=126)||(keycode>=293 && keycode<=296))
        {
            keyCount = 0;
            pressKeyFlag = 0;
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
            if(1 ==char_table[keyTableLine].length)
            {
                pressKeyFlag = 0;
            }
            inputChar = char_table[keyTableLine][keyCount];
        }

        if(name.length<32)
        {
            name=name+inputChar;
            $("ccInputnameContent").innerHTML=top.replaceT(name);
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
            console.log("the name is "+name);
            if(name.length<32)
            {
                name=name.substring(0,name.length-1);
                name=name+inputChar;
                $("ccInputnameContent").innerHTML=top.replaceT(name);
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
            if(name.length<32)
            {
                name=name+inputChar;
                $("ccInputnameContent").innerHTML=top.replaceT(name);
            }
            oldRcKeyTimeOut = setTimeout(function(){pressKeyFlag = 0;keyCount = 0;}, 800);
        }
    }
    oldKeyCode = keycode;
}

function checkMailInput(keycode)//修改SSID的函数
{
    //第一次的时候
    var inputChar = '';
    if (oldRcKeyTimeOut != 0)
    {
        clearTimeout(oldRcKeyTimeOut);
        oldRcKeyTimeOut = 0;
    }

    if (pressKeyFlag==0)
    {
        pressKeyFlag = 1;
        if ((keycode>=32 && keycode<=47) || (keycode>=58 && keycode<=96) ||(keycode>=353 && keycode<=378)||(keycode>=123 && keycode<=126)||(keycode>=293 && keycode<=296))
        {
            keyCount = 0;
            pressKeyFlag = 0;
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
            if(1 ==char_table[keyTableLine].length)
            {
                pressKeyFlag = 0;
            }
            inputChar = char_table[keyTableLine][keyCount];
        }

        if(mail.length<32)
        {
            mail=mail+inputChar;
            $("ccInputmailContent").innerHTML=top.replaceT(mail);
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
            console.log("the mail is "+mail);
            if(mail.length<32)
            {
                mail=mail.substring(0,mail.length-1);
                mail=mail+inputChar;
                $("ccInputmailContent").innerHTML=top.replaceT(mail);
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
            if(mail.length<32)
            {
                mail=mail+inputChar;
                $("ccInputmailContent").innerHTML=top.replaceT(mail);
            }
            oldRcKeyTimeOut = setTimeout(function(){pressKeyFlag = 0;keyCount = 0;}, 800);
        }
    }
    oldKeyCode = keycode;
}

function checkMobileInput(keycode)//修改SSID的函数
{
    //第一次的时候
    var inputChar = '';
    if (oldRcKeyTimeOut != 0)
    {
        clearTimeout(oldRcKeyTimeOut);
        oldRcKeyTimeOut = 0;
    }

    if (pressKeyFlag==0)
    {
        pressKeyFlag = 1;
        if ((keycode>=32 && keycode<=47) || (keycode>=58 && keycode<=96) ||(keycode>=353 && keycode<=378)||(keycode>=123 && keycode<=126)||(keycode>=293 && keycode<=296))
        {
            keyCount = 0;
            pressKeyFlag = 0;
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
            if(1 ==char_table[keyTableLine].length)
            {
                pressKeyFlag = 0;
            }
            inputChar = char_table[keyTableLine][keyCount];
        }

        if(mobile.length<32)
        {
            mobile=mobile+inputChar;
            $("ccInputmobileContent").innerHTML=top.replaceT(mobile);
        }
        oldRcKeyTimeOut = setTimeout(function(){pressKeyFlag = 0;keyCount = 0;}, 800);
    }
    else//其他时候
    {
		//屏蔽此代码，输入框只能输入数字。否则连续按同一个数字按键会切换为字母，然而该输入框没必要输入字母
		/*
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
            console.log("the mobile is "+mobile);
            if(mobile.length<32)
            {
                mobile=mobile.substring(0,mobile.length-1);
                mobile=mobile+inputChar;
                $("ccInputmobileContent").innerHTML=top.replaceT(mobile);
            }
            oldRcKeyTimeOut = setTimeout(function(){pressKeyFlag = 0;keyCount = 0;}, 800);
        }
        else*/
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
            if(mobile.length<32)
            {
                mobile=mobile+inputChar;
                $("ccInputmobileContent").innerHTML=top.replaceT(mobile);
            }
            oldRcKeyTimeOut = setTimeout(function(){pressKeyFlag = 0;keyCount = 0;}, 800);
        }
    }
    oldKeyCode = keycode;
}

// ajax 对象
function ajaxObject() {
    var xmlHttp;
    try {
        // Firefox, Opera 8.0+, Safari
        xmlHttp = new XMLHttpRequest();
    }
    catch (e) {
        // Internet Explorer
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert("您的浏览器不支持AJAX！");
                return false;
            }
        }
    }
    return xmlHttp;
}

// ajax post请求：
function ajaxPost ( url , data ) {
    var ajax = ajaxObject();
    ajax.open( "get" , url , true );
    ajax.setRequestHeader( "Content-Type" , "application/x-www-form-urlencoded" );
    ajax.onreadystatechange = function () {
        if( ajax.readyState == 4 ) {
            if( ajax.status == 200 ) {
                //fnSucceed( ajax.responseText );
                console.log("--hzm test ajaxPost success ajax.responseText = " + ajax.responseText);
                top.g_setting.setProperty("app.ui.skipCustomerCenter","100");
                top.g_setting.setProperty("app.ui.isSetUpdate","1");
                parent.updateInitProgress(1);
                document.location.href="initSoftwareUpdateSet.html";
            }
            else {
                //fnFail( "HTTP请求错误！错误码："+ajax.status );
                console.log("--hzm test ajaxPost fail error code = " + ajax.status);
                top.g_setting.setProperty("app.ui.skipCustomerCenter","1");
                top.g_setting.setProperty("app.ui.isSetUpdate","1");
                parent.updateInitProgress(1);
                document.location.href="initSoftwareUpdateSet.html";
            }
        }
        else {
            //fnLoading();
            console.log("--hzm test ajaxPost loading ");
        }
    }
    ajax.send();
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

function toDown()//按下键
{
	
	if(focusType == "SSIDEdit" || focusType == "passwordEdit" || focusType == "nameEdit" || focusType == "mailEdit" || focusType == "mobileEdit")
	{
		top.moveDown();
	}
	else if(focusType == "wirelessMaunalList")
	{
		switch(positionSsidV)
		{
			case 0:
			{
                positionSsidV = 3;
                $("dialogButtonFocus").style.display="block";
                $("SSIDInputFocus").style.display="none";
			}
			break;
			case 1:
			{
				positionSsidV=2;
				$("SSIDInputFocus").style.top=MENU_START+positionSsidV*MENU_STEP+"px";
			}
			break;
			case 2:
			{
				positionSsidV=3;
				$("SSIDInputFocus").style.display="none";
				$("dialogButtonFocus").style.display="block";
			}
			break;
			case 3:
			{
				positionSsidV=0;
				//$("SSIDInputFocus").style.top=MENU_START+positionSsidV*MENU_STEP+"px";
				$("dialogButtonFocus").style.display="none";
				$("SSIDInputFocus").style.display="block";
			}
			break;
			default:
			break;
		}
		showFontColor();
	}
	else if (focusType == "customerCenter")//todown
	{
        switch(positionSsidV)
		{
			case 0:
                positionSsidV=1;
                $("SSIDInputFocus").style.top=160+"px";
				break;
			case 1:
                positionSsidV=2;
                $("SSIDInputFocus").style.top=220+"px";
				break;
			case 2:
                positionSsidV=3;
                $("dialogButtonFocus").style.display="block";
                $("SSIDInputFocus").style.display="none";
				break;
			case 3:
                positionSsidV=0;
                $("SSIDInputFocus").style.top=100+"px";
                $("dialogButtonFocus").style.display="none";
                $("SSIDInputFocus").style.display="block";
				break;
            default:
                break;
		}
	}
}
function toUp()//按上键
{
	if(focusType == "SSIDEdit" || focusType == "passwordEdit" || focusType == "nameEdit" || focusType == "mailEdit" || focusType == "mobileEdit")
	{
		top.moveUp();
	}
	else if(focusType == "wirelessMaunalList")
	{
		switch(positionSsidV)
		{
			case 0:
			{
				positionSsidV=3;
				$("SSIDInputFocus").style.display="none";
				$("dialogButtonFocus").style.display="block";
			}
			break;
			case 1:
			{
				positionSsidV=0;
				$("SSIDInputFocus").style.top=MENU_START+positionSsidV*MENU_STEP+"px";
			}
			break;
			case 2:
			{
                if(0 == securityType)
                {
                    positionSsidV=0;
                    $("SSIDInputFocus").style.top=MENU_START+positionSsidV*MENU_STEP+"px";
                }
                else
                {
                    positionSsidV=1;
                    $("SSIDInputFocus").style.top=MENU_START+positionSsidV*MENU_STEP+"px";
                }
			}
			break;
			case 3:
			{
				positionSsidV=0;
				//$("SSIDInputFocus").style.top=MENU_START+positionSsidV*MENU_STEP+"px";
				$("dialogButtonFocus").style.display="none";
				$("SSIDInputFocus").style.display="block";
			}
			break;
			default:
			break;
		}
		showFontColor();
	}
    else if (focusType == "customerCenter")//toup
    {
        switch(positionSsidV)
        {
            case 0:
            	positionSsidV=3;
                $("SSIDInputFocus").style.display="none";
                $("dialogButtonFocus").style.display="block";
                break;
            case 1:
                positionSsidV=0;
                $("SSIDInputFocus").style.top=100+"px";
                break;
            case 2:
                positionSsidV=1;
                $("SSIDInputFocus").style.top=160+"px";
                break;
            case 3:
                positionSsidV=2;
                $("SSIDInputFocus").style.top=220+"px";
                $("SSIDInputFocus").style.display="block";
                $("dialogButtonFocus").style.display="none";
                break;
            default:
                break;
        }
    }
}
function showFontColor()
{
	switch(positionSsidV)
		{
			case 0:
			{
				$("SSIDInput").style.color="#FFFFFF";
				//$("SecurityMode").style.color="#b0b0b0";
				//$("Password").style.color="#b0b0b0";
				//$("SSIDButtonList").style.color="#b0b0b0";
				SSIDButtonListDivList[0].style.color="#b0b0b0";
				SSIDButtonListDivList[1].style.color="#b0b0b0";
				
			}
			break;
			case 2:
			{
               $("SSIDInput").style.color="#b0b0b0";
				//$("SecurityMode").style.color="#FFFFFF";
				//$("Password").style.color="#b0b0b0";
				//$("SSIDButtonList").style.color="#b0b0b0";
				SSIDButtonListDivList[0].style.color="#b0b0b0";
				SSIDButtonListDivList[1].style.color="#b0b0b0";
			}
			break;
			case 1:
			{
				$("SSIDInput").style.color="#b0b0b0";
				//$("SecurityMode").style.color="#b0b0b0";
				//$("Password").style.color="#FFFFFF";
				//$("SSIDButtonList").style.color="#b0b0b0";
				SSIDButtonListDivList[0].style.color="#b0b0b0";
				SSIDButtonListDivList[1].style.color="#b0b0b0";
			}
			break;
			case 3:
			{
				$("SSIDInput").style.color="#b0b0b0";
				//$("SecurityMode").style.color="#b0b0b0";
				//$("Password").style.color="#b0b0b0";
				//$("SSIDButtonList").style.color="#FFFFFF";
				if(positionSsidH == 0){
					SSIDButtonListDivList[0].style.color="#FFFFFF";
					SSIDButtonListDivList[1].style.color="#b0b0b0";
				}else
				{
					SSIDButtonListDivList[0].style.color="#b0b0b0";
					SSIDButtonListDivList[1].style.color="#FFFFFF";
				}
			}
			break;
			default:
			break;
		}
}
function toOk()//按OK键
{
	
	if(focusType == "wirelessMaunalList")
	{
		switch(positionSsidV)
		{
			case 0:
			{
				//屏蔽此处，该输入框只需要数字字符，不需要字母。因此不需要调出输入法
				/*try
				{
					top.mouseCallBack.funcOk=toOk;
					top.mouseCallBack.funcBack=toBack;
                    top.mouseCallBack.funcMouseUp=repeatkeyupproc;
				}catch(er)
				{
					top.g_channel.testLog("manual:"+er)
				}
				top.showKeyBoard();
				focusType = "SSIDEdit";*/
			}
			break;
			case 2:
			break;
			case 1:
			{
				try
				{
					top.mouseCallBack.funcOk=toOk;
					top.mouseCallBack.funcBack=toBack;
                    top.mouseCallBack.funcMouseUp=repeatkeyupproc;
				}catch(er)
				{
					top.g_channel.testLog("manual:"+er)
				}
				top.showKeyBoard();
				/* mantis bug:0022386
				$("selctImg").src=selectImg[1];
				$("select").getElementsByTagName("span")[0].innerHTML=top.others[34];
				*/
				focusType = "passwordEdit";
			}
			break;
			case 3:
			{
				if(positionSsidH==0)
				{
                    console.log("--hzm ok QRcode and skip this ! ");
                    top.g_setting.setProperty("app.ui.skipQRCode","1");
                    ssid = "";
                    $("SSIDInputContent").innerHTML=top.replaceT(ssid);
                    parent.updateInitProgress(1);
                    document.location.href = "initChannelInstallEntry.html";
				}
				else
				{
					console.log("--hzm ok QRcode check code = " + ssid + "  length = " + ssid.length);
					//激活码算法：sn码后5位 * 9 + 2018。得到结果后不足6位前面加0
					var z = parseInt(sn.substr(sn.length-5,5));
                    var k = z * 9 + 2018;
                    console.log("--hzm ok QRcode k  = " + k);
					if (ssid == "" || ssid.length <= 5 || ssid != k)
					{
                        $("SSIDRemind").style.display="block";
                        $("SSIDRemind").innerHTML="Verification code error.";

                        setTimeout(function () {
                            $("SSIDRemind").style.display="none";
                        },2000);
					}
					else
					{
                        top.g_setting.setProperty("app.ui.skipQRCode","100");
                        parent.updateInitProgress(1);
                        document.location.href = "initChannelInstallEntry.html";
					}
				}
			}
			break;
			default:
			break;
		}
	}
	else if(focusType == "SSIDEdit" )
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
			},300);
		}
		else if(key=="!one" || key =="shift" || key=="symPage1" || key=="symPage2" ||key=="changeChar" || key=="changeLang" || key=="setting")
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
    else if (focusType == "customerCenter")
	{
        switch(positionSsidV)
		{
            case 0:
                try
				{
                    top.mouseCallBack.funcOk = toOk;
                    top.mouseCallBack.funcBack = toBack;
                    top.mouseCallBack.funcMouseUp = repeatkeyupproc;
                } catch (er)
				{
                    console.log("manual:" + er)
                }
                top.showKeyBoard();
				/* mantis bug:0022386
				 $("selctImg").src=selectImg[1];
				 $("select").getElementsByTagName("span")[0].innerHTML=top.others[34];
				 */
                focusType = "nameEdit";
                break;
            case 1:
                try
				{
                    top.mouseCallBack.funcOk = toOk;
                    top.mouseCallBack.funcBack = toBack;
                    top.mouseCallBack.funcMouseUp = repeatkeyupproc;
                } catch (er)
				{
                    console.log("manual:" + er)
                }
                top.showKeyBoard();
				/* mantis bug:0022386
				 $("selctImg").src=selectImg[1];
				 $("select").getElementsByTagName("span")[0].innerHTML=top.others[34];
				 */
                focusType = "mailEdit";
                break;
            case 2:
                /*try
				{
                    top.mouseCallBack.funcOk = toOk;
                    top.mouseCallBack.funcBack = toBack;
                    top.mouseCallBack.funcMouseUp = repeatkeyupproc;
                } catch (er)
				{
                    console.log("manual:" + er)
                }
                top.showKeyBoard();
                focusType = "mobileEdit";*/
                break;
			case 3:
                if(positionSsidH==0)
                {
                    console.log("--hzm ok customerCenter and skip this !");
                    top.g_setting.setProperty("app.ui.skipCustomerCenter","1");
                    top.g_setting.setProperty("app.ui.isSetUpdate","1");
                    parent.updateInitProgress(1);
                    document.location.href="initSoftwareUpdateSet.html";
                }
                else
                {
                    console.log("--hzm ok customerCenter name = " + name);
                    console.log("--hzm ok customerCenter mail = " + mail);
                    console.log("--hzm ok customerCenter mobile = " + mobile);
                    //终端上报激活状态
                    var status = 1;
                    var data = "sn=" + sn + "&token=" + token + "&status=" + status + "&contryCode=" + countryCode + "&clientCode=" + clientCode + "&email=" + mail + "&username=" + name + "&phoneNum=" + mobile;
                    //var url = "http://testoverseabaodan.api.my7v.com/auth/activity/activationStatus?"+data;//测试连接
                    var url = "http://overseabaodan.api.my7v.com/auth/activity/activationStatus?"+data;
                    console.log("--hzm ok customerCenter get url = " + url);
                    ajaxPost(url);
                    //不能在这里跳转到initSoftwareUpdateSet页面，否则会出现post提交失败
                    //top.g_setting.setProperty("app.ui.isSetUpdate","1");
                    //parent.updateInitProgress(1);
                    //document.location.href="initSoftwareUpdateSet.html";
                }
				break;
        }
	}
    else if(focusType == "nameEdit")
    {
        var key=top.toOkGetChar();
        if(key=="back")
        {
            if(name.length>0)
            {
                name=name.substring(0,name.length-1);
                $("ccInputnameContent").innerHTML=top.replaceT(name);
            }

            //NT563平台持续按输入法的回退按键会导致setInterval里的函数无限循环执行，从而导致输入法无法输入字符
            if (repeatTimerIndex != 0)
            {
                clearInterval(repeatTimerIndex);
                repeatTimerIndex = 0;
            }

            repeatTimerIndex = setInterval(function() {
                if(name.length>0)
                {
                    name=name.substring(0,name.length-1);
                    $("ccInputnameContent").innerHTML=top.replaceT(name);
                }
            },300);
        }
        else if(key=="!one" || key =="shift" || key=="symPage1" || key=="symPage2" ||key=="changeChar" || key=="changeLang" || key=="setting")
        {
            return;
        }
        else
        {
            if(name.length<32)
            {
                name=name+key;
                $("ccInputnameContent").innerHTML=top.replaceT(name);
            }
        }
    }
    else if(focusType == "mailEdit")
    {
        var key=top.toOkGetChar();
        if(key=="back")
        {
            if(mail.length>0)
            {
                mail=mail.substring(0,mail.length-1);
                $("ccInputmailContent").innerHTML=top.replaceT(mail);
            }

            //NT563平台持续按输入法的回退按键会导致setInterval里的函数无限循环执行，从而导致输入法无法输入字符
            if (repeatTimerIndex != 0)
            {
                clearInterval(repeatTimerIndex);
                repeatTimerIndex = 0;
            }

            repeatTimerIndex = setInterval(function() {
                if(mail.length>0)
                {
                    mail=mail.substring(0,mail.length-1);
                    $("ccInputmailContent").innerHTML=top.replaceT(mail);
                }
            },300);
        }
        else if(key=="!one" || key =="shift" || key=="symPage1" || key=="symPage2" ||key=="changeChar" || key=="changeLang" || key=="setting")
        {
            return;
        }
        else
        {
            if(mail.length<32)
            {
                mail=mail+key;
                $("ccInputmailContent").innerHTML=top.replaceT(mail);
            }
        }
    }
    else if(focusType == "mobileEdit")
    {
        var key=top.toOkGetChar();
        if(key=="back")
        {
            if(mobile.length>0)
            {
                mobile=mobile.substring(0,mobile.length-1);
                $("ccInputmobileContent").innerHTML=top.replaceT(mobile);
            }

            //NT563平台持续按输入法的回退按键会导致setInterval里的函数无限循环执行，从而导致输入法无法输入字符
            if (repeatTimerIndex != 0)
            {
                clearInterval(repeatTimerIndex);
                repeatTimerIndex = 0;
            }

            repeatTimerIndex = setInterval(function() {
                if(mobile.length>0)
                {
                    mobile=mobile.substring(0,mobile.length-1);
                    $("ccInputmobileContent").innerHTML=top.replaceT(mobile);
                }
            },300);
        }
        else if(key=="!one" || key =="shift" || key=="symPage1" || key=="symPage2" ||key=="changeChar" || key=="changeLang" || key=="setting")
        {
            return;
        }
        else
        {
            if(mobile.length<32)
            {
                mobile=mobile+key;
                $("ccInputmobileContent").innerHTML=top.replaceT(mobile);
            }
        }
    }
}
function toLeft()
{
	if(focusType == "wirelessMaunalList")
	{
		switch(positionSsidV)
		{
			case 0:
			{
				//toBack();
			}
			break;
			case 2:
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
                if(0 == securityType)
                {
                    $("Password").style.display = "none";
                }
                else
                {
                    $("Password").style.display = "block";
                }
				$("SecurityModeContent").innerHTML=wirelessListSecurity[securityType];
			}
			break;
			case 1:
			{
				toBack();
			}
			break;
			case 3:
			{
				if(positionSsidH==0)
				{
					positionSsidH=1;
					$("dialogButtonFocus").style.left=200+"px";
				}
				else
				{
					positionSsidH=0;
					$("dialogButtonFocus").style.left=0+"px";
				}
				showFontColor();
			}
			break;
			default:
			break;
		}
	}
	else if(focusType == "SSIDEdit"|| focusType == "passwordEdit" || focusType == "nameEdit" || focusType == "mailEdit" || focusType == "mobileEdit")
	{
		top.moveLeft();
	}
    else if (focusType == "customerCenter")
	{
        switch(positionSsidV)
		{
            case 0:
            case 1:
            case 2:
                toBack();
                break;
			case 3:
                if(positionSsidH==0)
                {
                    positionSsidH=1;
                    $("dialogButtonFocus").style.left=200+"px";
                }
                else
                {
                    positionSsidH=0;
                    $("dialogButtonFocus").style.left=0+"px";
                }
                showFontColor();
				break;
			default:
				break;
        }
	}
}
function toRight()
{
	if(focusType == "wirelessMaunalList")
	{
		switch(positionSsidV)
		{
			case 0:
			{
				//toOk();
			}
			break;
			case 2:
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
                if(0 == securityType)
                {
                    $("Password").style.display = "none";
                }
                else
                {
                    $("Password").style.display = "block";
                }
				$("SecurityModeContent").innerHTML=wirelessListSecurity[securityType];
			}
			break;
			case 1:
			{
				toOk();
			}
			break;
			case 3:
			{
				if(positionSsidH==0)
				{
					positionSsidH=1;
					$("dialogButtonFocus").style.left=200+"px";
				}
				else
				{
					positionSsidH=0;
					$("dialogButtonFocus").style.left=0+"px";
				}
				showFontColor();
			}
			break;
			default:
			break;
		}
	}
	else if(focusType == "SSIDEdit" || focusType == "passwordEdit" || focusType == "nameEdit" || focusType == "mailEdit" || focusType == "mobileEdit")
	{
		top.moveRight();
	}
    else if (focusType == "customerCenter")
    {
        switch(positionSsidV)
        {
            case 0:
            case 1:
            case 2:
                toOk();
                break;
            case 3:
                if(positionSsidH==0)
                {
                    positionSsidH=1;
                    $("dialogButtonFocus").style.left=200+"px";
                }
                else
                {
                    positionSsidH=0;
                    $("dialogButtonFocus").style.left=0+"px";
                }
                showFontColor();
                break;
            default:
                break;
        }
    }
}
function toBack()//返回键
{
    if(focusType == "wirelessMaunalList")
	{
		//document.location.href="initWirelessType.html"//设置成功
	}
	else if(focusType == "SSIDEdit" || focusType == "passwordEdit")
	{
		if(top.tobackKeyBoard()=="menuBack")
		{
			focusType = "wirelessMaunalList";
			$("selctImg").src=selectImg[0];
			$("select").getElementsByTagName("span")[0].innerHTML=initHelp[1];
		}
	}
	else if(focusType == "nameEdit" || focusType == "mailEdit" || focusType == "mobileEdit")
	{
		if(top.tobackKeyBoard()=="menuBack")
		{
			focusType = "customerCenter";
			$("selctImg").src=selectImg[0];
			$("select").getElementsByTagName("span")[0].innerHTML=initHelp[1];
		}
	}
    else if (focusType == "customerCenter")
	{
        //document.location.href="initWirelessType.html"//设置成功
	}
}
var SSIDButtonListDivList;

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

function showCustomerCenter()
{
	$("subTitleTag").innerHTML = activateTVWords[6];//"Customer Center";
	$("descriptionWords").innerHTML = activateTVWords[7];//"Please fill in the information,you will get your warranty service and we will extend your service for one month";
    $("ccInputnameTitle").innerHTML = top.fileNameText+": ";//"Name: ";
    $("ccInputmailTitle").innerHTML = top.emailWord+" ";//"E-mail: ";
    $("ccInputmobileTitle").innerHTML = top.contentSpan1_7Array[3]+": ";//"Mobile: ";

    positionSsidV = 0;
	$("QRSacn").style.display = "none";
	$("SSIDInput").style.display = "none";
	$("dialogButtonFocus").style.display = "none";
	$("SSIDInputFocus").style.display = "block";
	$("SSIDInputFocus").style.left = 162+"px";
	$("SSIDInputFocus").style.top = 100+"px";
	$("customercenter").style.display = "block";
    focusType = "customerCenter";
}

function init()
{
    top.initTextDirection(window);
	try
	{
		initSetRegion();
		SSIDButtonListDivList = $("SSIDButtonList").getElementsByTagName("div");
		parent.updateInitTitle(wirelessListName[5]);
		SSIDButtonListDivList[0].innerHTML = top.timeshiftInitButtons[1];//"Skip";
		SSIDButtonListDivList[1].innerHTML = initHelp[2];//"Next";

        sn = factory.getProductInfo().sn;
        token = hex_md5(sn+"policy2016@tcl.com");
        top.g_setting.setProperty("app.ui.token",token);
        t = setting.getOSTimeCount();
        countryCode = setting.zoneCode;
        clientCode = setting.manufacturer;
        cType = factory.getClientTypeKey();
        console.log("--hzm init sn = " + sn + "  token = " + token + "  t = " + t + "  countryCode = " + countryCode + "  clientCode = " + clientCode + "  cType = " + cType);
        console.log("--hzm init networkStatus = " + setting.networkStatus());
        if(setting.networkStatus())
        {
            showCustomerCenter();
        }
        else
		{
            initCheckCode();
            getRealurl(makeQrcode);//回调函数，避免动画字符卡住
		}
		addMouseListener();
	}catch(er)
	{
		top.g_channel.testLog("manual："+er)
	}
}
function uninit()
{
	top.hiddenKeyBoard();
}
function initCheckCode()
{
    $("SSIDInput").style.display = "block";
    $("QRSacn").style.display = "block";
    $("subTitleTag").innerHTML = activateTVWords[0];//"Activate your TV";
    $("SSIDInputTitle").innerHTML=activateTVWords[1];//"Please enter verification code.";
    $("descriptionWords").innerHTML = activateTVWords[2];//"Enjoy more services after activating your TV";
    $("scanWords").innerHTML = activateTVWords[3];//"Scan QR code to obtain verification code.";
    $("snNum").innerHTML = "SN: " + sn.replace(/(.{4})/g,' $1 ');
    $("qrcodetitle").innerHTML = activateTVWords[4];//"You can also get the verification code as follow:";
    $("qrcodcontent").innerHTML = activateTVWords[5].replace(/SN/,sn.replace(/(.{4})/g,' $1 '));//"Call 1800588880, Press 1, and then provide "+ sn +" to get verification code.";
}

//定义主函数，回调函数作为参数
var realUrl = "";
function getRealurl(callback) {
    console.log('i am main');
    startloading();
    //var url = "http://testoverseabaodan.api.my7v.com/activity/index.html?";//测试连接
    var url = "http://overseabaodan.api.my7v.com/activity/index.html?";
    realUrl = url + "sn="+ sn + "&token=" + token + "&t=" + t + "&countryCode=" + countryCode + "&clientCode=" + clientCode + "&cType=" + cType;
    console.log("--hzm test realUrl = " + realUrl);
    callback();
}

//定义回调函数
function makeQrcode(){
    //setTimeout("console.log('我是回调函数')", 3000);//模仿耗时操作
    console.log('i am sub');
	/**
	 * 二维码生成
	 */
    setTimeout(function () {
        if(loadingTimer)
        {
            clearTimeout(loadingTimer);
        }
        $("loading").style.display = "none";
        var qrcode = new QRCode(document.getElementById("qrcode"), { width : 280, height : 280 });
        qrcode.makeCode(realUrl);
    },1000);
	/*****二维码******/
}
/*
 描述：开始加载等待
 */
function startloading()
{
    $("loading").src = loadingImgs[loadingCount%8];
    loadingCount++;
    loadingTimer=setTimeout("startloading()",300);
}


function checkPassword()//检测密码
{
	if(securityType==0)
	{
		return 1;
	}
	else if(securityType==1)
	{
		if(password.length<5)
		{
			$("SSIDRemind").style.display="block";
			$("SSIDRemind").innerHTML=wirelessListRemind[1];
			return 0;
		}
	}
	else
	{
		if(password.length<8)
		{
			$("SSIDRemind").style.display="block";
			$("SSIDRemind").innerHTML=wirelessListRemind[1];
			return 0;
		}
	}
	return 1;
}

function addMouseListener()
{
   document.body.onmousedown = function(evt){evt.preventDefault();
		if(evt.button==2)
		{
			toBack();
		}
	}
	$("SSIDInputContent").onmousedown = function(evt){
		if(evt.button==0)
		{
			positionSsidV=0;
			$("SSIDInputFocus").style.top=MENU_START+positionSsidV*MENU_STEP+"px";
			$("dialogButtonFocus").style.display = "none";
			$("SSIDInputFocus").style.display = "block";
			showFontColor();
			toOk();
		}
	}
	$("SecurityModeContent").onmousedown = function(evt){
		if(evt.button==0)
		{
			positionSsidV=2;
			$("SSIDInputFocus").style.top=MENU_START+positionSsidV*MENU_STEP+"px";
			$("dialogButtonFocus").style.display = "none";
			$("SSIDInputFocus").style.display = "block";
			showFontColor();
		}
	}
	var securityImgList = $("SecurityMode").getElementsByTagName("img");
	securityImgList[0].onmousedown = function(evt){
		if(evt.button==0)
		{
			positionSsidV=2;
			$("SSIDInputFocus").style.top=MENU_START+positionSsidV*MENU_STEP+"px";
			$("dialogButtonFocus").style.display = "none";
			$("SSIDInputFocus").style.display = "block";
			showFontColor();
			toLeft();
		}
	}
	securityImgList[1].onmousedown = function(evt){
		if(evt.button==0)
		{
			positionSsidV=2;
			$("SSIDInputFocus").style.top=MENU_START+positionSsidV*MENU_STEP+"px";
			$("dialogButtonFocus").style.display = "none";
			$("SSIDInputFocus").style.display = "block";
			showFontColor();
			toRight();
		}
	}
	$("passwordInputContent").onmousedown = function(evt){
		if(evt.button==0)
		{
			positionSsidV=1;
			$("SSIDInputFocus").style.top=MENU_START+positionSsidV*MENU_STEP+"px";
			$("dialogButtonFocus").style.display = "none";
			$("SSIDInputFocus").style.display = "block";
			showFontColor();
			toOk();
		}
	}
	var buttonList = $("SSIDButtonList").getElementsByTagName("div");
	buttonList[0].onmousedown = function(evt){
		if(evt.button==0)
		{
			positionSsidV=3;
			positionSsidH=0;
			$("dialogButtonFocus").style.left=350+"px";
			$("dialogButtonFocus").style.display = "block";
			$("SSIDInputFocus").style.display = "none";
			showFontColor();
			toOk();
		}
	}
	buttonList[1].onmousedown = function(evt){
		if(evt.button==0)
		{
			positionSsidV=3;
			positionSsidH=1;
			$("dialogButtonFocus").style.left=650+"px";
			$("dialogButtonFocus").style.display = "block";
			$("SSIDInputFocus").style.display = "none";
			showFontColor();
			toOk();
		}
	}
	$("back").onmousedown = function(evt){
		if(evt.button==0)
		{
			if(focusType == "wirelessMaunalList")
			{
				toLeft();
			}
		}
	}
	$("next").onmousedown = function(evt){
		if(evt.button==0)
		{
			if(focusType == "wirelessMaunalList")
			{
				toRight();
			}
		}
	}
	$("select").onmousedown = function(evt){
		if(evt.button==0)
		{
			if(focusType == "wirelessMaunalList")
			{
				toDown();
			}
		}
	}
	
}
