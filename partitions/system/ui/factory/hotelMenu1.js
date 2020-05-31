top.keySetForUI(1);
var init_page_title = ["Main\\Hotel Menu","USB Clone Mode","USB to TV","TV to USB","Favorite List Disable","Tuner Lock","Menu Lock","USB Lock","Source Lock","DVB network update","New Password","Confirm Password"];
var other = ["Do","Wait","OK","Fail","Success"];
var off_on = ["Off","On"];
var usb_clone_mode = ["User Data","Ch List"];
var HOTEL_PAGE_ITEM_LENGTH = 11;

var div_contain_list;
var span_contain_list;
var position_h = 0;
var password_position = 9;
var ConfirmPassword_position = 10;

var usbCloneMode = 0;
var tunerLock = 0;
var menuLock = 0;
var sourceLock = 0;
var favoriteListDisable = 0;
var dvbNetworkUpdateFlag = 0;

var focusFlag ;

var factory = top.g_factory;
var setting = top.g_setting;
var passwordString = "";
var passwordInputCount = 0xff;
var newPasswordString = "";
var confirmPasswordString = "";

document.onkeydown = keyproc;
function keyproc(e)
{
	var key = e.which;
	switch(key)
	{
		case top.VK_POWER:
			top.keyDownProcess(e);
			break ;
		case top.VK_MENU:
		case 27:
			doMenu();
		    break;
		case top.VK_LEFT:
			toLeft();
			break;
		case top.VK_RIGHT:
			toRight();
			break;
		case top.VK_UP:
			toUp();
			break;
		case top.VK_DOWN:
			toDown();
			break;
		case top.VK_EXIT:
			doExit();
			break;
		case top.VK_ENTER:
			doEnter();
			break;
		case top.VK_1:
		case top.VK_2:
		case top.VK_3:
		case top.VK_4:
		case top.VK_5:
		case top.VK_6:
		case top.VK_7:
		case top.VK_8:
		case top.VK_9:
		case top.VK_0:
			if(position_h == password_position)
			{
				passwordInput(key);
			}
			break;

		default:
			ret = true;
			break;
	}
}
function $(id)
{
	return document.getElementById(id);
}
function doMenu()
{
	document.location.href = "hotelMenu.html?hotelMenu1";
}
function toLeft()
{
	switch(position_h)
	{
		case 0:
			usbCloneMode--;
			if(usbCloneMode < 0)
			{
				usbCloneMode = 1;
			}
			span_contain_list[position_h].innerHTML = usb_clone_mode[usbCloneMode];
			break;
		case 3:
			favoriteListDisable--;
			if(favoriteListDisable < 0)
			{
				favoriteListDisable = 1;
			}
			span_contain_list[position_h].innerHTML = off_on[favoriteListDisable];
			factory.favoriteListDisable = favoriteListDisable;
			break;
		case 4:
			tunerLock--;
			if(tunerLock < 0)
			{
				tunerLock = 1;
			}
			span_contain_list[position_h].innerHTML = off_on[tunerLock];
			factory.tunerLock = tunerLock;
			break;
		case 5:
			menuLock--;
			if(menuLock < 0)
			{	
				menuLock = 1;
			}
			span_contain_list[position_h].innerHTML = off_on[menuLock];
			factory.menuLock =menuLock;
			break;
		case 6:
			usbLock--;
			if(usbLock < 0)
			{
				usbLock = 1;
			}
			span_contain_list[position_h].innerHTML = off_on[usbLock];
			factory.usbLock = usbLock;
			break;
		case 7:
			sourceLock--;
			if(sourceLock < 0)
			{
				sourceLock = 1
			}
			span_contain_list[position_h].innerHTML = off_on[sourceLock];
			factory.sourceLock = sourceLock;
			break;
        case 8:
            dvbNetworkUpdateFlag = (dvbNetworkUpdateFlag + 1) % 2;
            setting.dvbNetworkUpdate = dvbNetworkUpdateFlag;
            span_contain_list[8].innerHTML = off_on[dvbNetworkUpdateFlag];
            break;
			
		default:
			break;
		}
}
function toRight()
{
	switch(position_h)
		{
			case 0:
				usbCloneMode++;
				if(usbCloneMode > 1)
				{
					usbCloneMode = 0;
				}
				span_contain_list[position_h].innerHTML = usb_clone_mode[usbCloneMode];
				break;
			case 3:
				favoriteListDisable++;
				if(favoriteListDisable > 1)
				{
					favoriteListDisable = 0;
				}
				span_contain_list[position_h].innerHTML = off_on[favoriteListDisable];
				factory.favoriteListDisable = favoriteListDisable;
				break;
			case 4:
				tunerLock++;
				if(tunerLock > 1)
				{
					tunerLock = 0;
				}
				span_contain_list[position_h].innerHTML = off_on[tunerLock];
				factory.tunerLock = tunerLock;
				break;
			case 5:
				menuLock++;
				if(menuLock > 1)
				{	
					menuLock = 0;
				}
				span_contain_list[position_h].innerHTML = off_on[menuLock];
				factory.menuLock =menuLock;
				break;
			case 6:
				usbLock++;
				if(usbLock > 1)
				{
					usbLock = 0;
				}
				span_contain_list[position_h].innerHTML = off_on[usbLock];
				factory.usbLock = usbLock;
				break;
			case 7:
				sourceLock++;
				if(sourceLock > 1)
				{
					sourceLock = 0;
				}
				span_contain_list[position_h].innerHTML = off_on[sourceLock];
				factory.sourceLock = sourceLock;
				break;
            case 8:
                dvbNetworkUpdateFlag = (dvbNetworkUpdateFlag + 1) % 2;
                setting.dvbNetworkUpdate = dvbNetworkUpdateFlag;
                span_contain_list[8].innerHTML = off_on[dvbNetworkUpdateFlag];
                break;
			default:
				break;
		}
}
function toUp()
{
	if(position_h <= 0)
	{
		document.location.href = "hotelMenu.html?up";
	}
	else
	{
		if(password_position==position_h)
		{
			showPassword();
		}
		if(position_h==ConfirmPassword_position+1)
		{
			div_contain_list[position_h + 1].style.background = "#FFF";
			div_contain_list[position_h-1].style.background = "#FF0";
			position_h--;
		}
		else
		{
			div_contain_list[position_h + 1].style.background = "#FFF";
			div_contain_list[position_h].style.background = "#FF0";
		}
		position_h--;
	}
}
function toDown()
{
	if(position_h >= HOTEL_PAGE_ITEM_LENGTH - 1)
	{
		document.location.href = "hotelMenu.html?down";
	}
	else
	{
		if(position_h==ConfirmPassword_position-1)
		{
			if(HOTEL_PAGE_ITEM_LENGTH-1==ConfirmPassword_position)
			{
				document.location.href = "hotelMenu.html?down";
			}
			else
			{
				div_contain_list[position_h + 1].style.background = "#FFF";
				position_h+=2;
				div_contain_list[position_h + 1].style.background = "#FF0";
			}
			return;
		}
		if(password_position==position_h)
		{
			showPassword();
		}
		div_contain_list[position_h + 1].style.background = "#FFF";
		div_contain_list[position_h + 2].style.background = "#FF0";
		position_h++;
	}
}
function doExit()
{
	document.location.href = "../channelPlay.html";
}
function doEnter()
{
	switch(position_h)
	{
		case 1:
				if(factory.getUsbDeviceStatus())
				{	
					var ret = 0;
					if(usbCloneMode == 0)
					{
						span_contain_list[1].innerHTML = other[1];
						setTimeout(
							function(){
							ret = factory.hotelClone();
							if(ret){
							span_contain_list[1].innerHTML = other[3];	
							}
							else{
							span_contain_list[1].innerHTML = other[2];		
							}
							},
							100);		
					}
					else
					{
						span_contain_list[1].innerHTML = other[1];
						setTimeout(
							function(){
							ret = factory.hotelChlClone();
							if(ret){
							span_contain_list[1].innerHTML = other[3];
							}
							else{
							span_contain_list[1].innerHTML = other[2];		
							}
							},
							100);		
					}
						setTimeout(
							function(){
							span_contain_list[1].innerHTML = other[0];		
							factory.systemReboot();		
							},
							6000);
				}
				else
				{
						span_contain_list[1].innerHTML = "Please Insert USB";
						setTimeout(
						function(){
						span_contain_list[1].innerHTML = other[0];				
						},
						2000);
				}	
				break;
			case 2:
				if(factory.getUsbDeviceStatus())
				{
					var ret = 0;
					if(usbCloneMode == 0)
					{
						span_contain_list[2].innerHTML = other[1];
						setTimeout(
							function(){
							ret = factory.hotelCopy();
							if(ret){
							span_contain_list[2].innerHTML = other[3];	
							}
							else{
							span_contain_list[2].innerHTML = other[2];		
							}	
							},
							100);						
					}
					else
					{
						span_contain_list[2].innerHTML = other[1];
						setTimeout(
							function(){
							ret = factory.hotelChlCopy();
							if(ret){
							span_contain_list[2].innerHTML = other[3];	
							}
							else{
							span_contain_list[2].innerHTML = other[2];		
							}		
							},
							100);					
					}
						setTimeout(
							function(){
							span_contain_list[2].innerHTML = other[0];				
							},
							6000);
				}
				else
				{
						span_contain_list[2].innerHTML = "Please Insert USB";
						setTimeout(
						function(){
						span_contain_list[2].innerHTML = other[0];				
						},
						2000);
	
				}
				break;
				
				case 9:
					for(var i = 0; i < 8; i++)
					{
						$("passwordSpan"+i).innerHTML = "_";//passwordString[i];
						$("passwordSpan"+i).style.color="#000";
					}
					$("passwordSpan0").style.color="#00F";
					passwordInputCount = 0;
					newPasswordString = "";
					confirmPasswordString = "";
				break;
			default:
				break;
	}
}
function init()
{
	if(top.timeoutFuc.timeoutEnable == 1)
		top.stopTimeout();
	var url = window.location.search;//获取URL携带参数
	if(url!=null && url!="")
	{
		focusFlag = url.substring(url.indexOf("?")+1);
	}
	usbCloneMode = 0;
	tunerLock = factory.tunerLock;
	usbLock = factory.usbLock;
	sourceLock = factory.sourceLock;
	favoriteListDisable = factory.favoriteListDisable;
	menuLock = factory.menuLock;
    dvbNetworkUpdateFlag = setting.dvbNetworkUpdate;
	div_contain_list = $('menu').getElementsByTagName('div');
	span_contain_list = $('menu').getElementsByTagName('span');
	for(var i = 0;i <= HOTEL_PAGE_ITEM_LENGTH;i++)
	{
		div_contain_list[i].innerHTML = init_page_title[i];
		if(i >= 2)
		{
			div_contain_list[i].style.background = "#FFF";
		}
	}
	if(focusFlag == "down")
	{
		div_contain_list[1].style.background = "#FF0";
		position_h = 0;
	}
	else if(focusFlag == "up")
	{
		if(HOTEL_PAGE_ITEM_LENGTH - 1==ConfirmPassword_position)
		{
			div_contain_list[ConfirmPassword_position].style.background = "#FF0";
			position_h = ConfirmPassword_position - 1;			
		}
		else
		{
			div_contain_list[HOTEL_PAGE_ITEM_LENGTH].style.background = "#FF0";
			position_h = HOTEL_PAGE_ITEM_LENGTH - 1;
		}
	}
	else
	{
		div_contain_list[1].style.background = "#FF0";
		position_h = 0;
	}
	span_contain_list[0].innerHTML = usb_clone_mode[usbCloneMode];
	span_contain_list[1].innerHTML = other[0];
	span_contain_list[2].innerHTML = other[0];
	span_contain_list[3].innerHTML = off_on[favoriteListDisable];
	span_contain_list[4].innerHTML = off_on[tunerLock];
	span_contain_list[5].innerHTML = off_on[menuLock];
	span_contain_list[6].innerHTML = off_on[usbLock];
	span_contain_list[7].innerHTML = off_on[sourceLock];
	span_contain_list[8].innerHTML = off_on[dvbNetworkUpdateFlag];
	showPassword();
}

function uninit()
{
	top.timeoutFuc.timeoutEnable=1;
}

function showPassword()
{
	for(var i = 0; i < 8; i++)
	{
		$("passwordSpan"+i).innerHTML = "";//passwordString[i];
		$("passwordSpan"+i).style.color="#000";
	}
	$("passwordSpan2").innerHTML = "D";
	$("passwordSpan3").innerHTML = "o";
	div_contain_list[ConfirmPassword_position+1].style.background = "#CCC";
	passwordInputCount = 0xff;
}

function passwordInput(keycode)
{
	if(passwordInputCount>=8)
		return;

	if(passwordInputCount<4)
	{
		newPasswordString += keycode-0x30;
	}
	else
	{
		confirmPasswordString += keycode-0x30;
	}
	$("passwordSpan"+passwordInputCount).innerHTML = "*";//keycode-0x30;
	$("passwordSpan"+passwordInputCount).style.color = "#000";
	
	if(passwordInputCount==3)
	{
		div_contain_list[password_position+1].style.background = "#FFF";
		div_contain_list[ConfirmPassword_position+1].style.background = "#FF0";
	}
	else if(passwordInputCount==7)
	{
		if(confirmPasswordString==newPasswordString)
		{
			factory.hotelPassword = confirmPasswordString;
			$("passwordSpan4").innerHTML = "";
			$("passwordSpan5").innerHTML = "";
			$("passwordSpan6").innerHTML = "O";
			$("passwordSpan7").innerHTML = "K";	
			div_contain_list[password_position+1].style.background = "#FF0";
			div_contain_list[ConfirmPassword_position+1].style.background = "#CCC";
			passwordInputCount = 0xff;
		}
		else
		{
			for(var i = 4; i < 8; i++)
			{
				$("passwordSpan"+i).innerHTML = "_";//passwordString[i];
				$("passwordSpan"+i).style.color="#000";
			}
			passwordInputCount = 3;
			confirmPasswordString = "";
		}
	}		
	if(passwordInputCount<7)
	{
		passwordInputCount++;
		$("passwordSpan"+passwordInputCount).style.color = "#00F";
	}
}