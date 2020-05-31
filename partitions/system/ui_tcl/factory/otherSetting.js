//var init_title = ["Main\\Other","QMAP QDJUST","WHITE PATTERN","NVM Reset All","Got UserID","UseTestHost","Hidev","SSCOM Debug","DTV","Reset Shop","BGM","WSS & ATF"];
top.keySetForUI(1);
var init_title = ["Main\\OtherMenu","Got UserID","BGM","WSS & ATF","Update E-sticker","Serial IO Ctrl","TSR","STR","TV+2.0 Update","TV+2.0 Test"];

var white_pattern = ["Off","White","Red","Green","Blue","Black","Yellow","Gray","Pink"];
var other = ["Do","WAIT","OK","Fail"];
var off_on = ["Off","On"];
var other_hidev = ["Off","1","2","3"];
var qmap_adjust = ["QMAP ADJUST"];
var start_stop = ["Start","Stop"];

var OTHER_SETTING_ITEM_LENGHT = 9;
var QMAP_ADJUST_ITEM_LENGHT = 14;
var form_flag = 0;//确定弹出框的标志变量。0 主菜单，1 选项1菜单...,1.4 选项1中第4项的菜单...
var div_contain_list;//保存html中div容器数组的变量
var span_contain_list;//保存html中span容器数组的变量
var position_h = 0;//焦点位置
var form_position_h = 0;//form_flag 不为零时的焦点位置
var whitePattern = 0;
var hidev = 0;
var UserID = 0;
var BGM_status = 0;
var WSS_ATF_status = 0;
var STR_status = 0;
var factory = top.g_factory;
var multimedia = top.g_media;
var setting = top.g_setting;
var channel = top.g_channel;
var usbPath = "";
var usbList = "";
var uartStatus = 0;
var uiUpdate = 1;
var uiTest = 0;
var cType = "";
var locale = "";
var support_pvr = 0;

document.onkeydown = keyproc;
function keyproc(e)
{
	var key = e.which;
	//快捷键
	switch(key)
	{
		case top.VK_POWER://power
			factory.stopPvr();//此处只是停止TS录制，未处理UI显示状态
			top.start_stop_flag = 0;
			top.keyDownProcess(e);
			return;
		default:
			break;
	}
	switch(key)
	{
		case top.MENU:
		case top.VK_EXIT:
			//menu
			factory.stopPvr();//此处只是停止TS录制，未处理UI显示状态
			top.start_stop_flag = 0;
			doMenu();
			break;
		case top.VK_LEFT:
			// left
			toLeft();
			break;
		case top.VK_UP:
			// up
			toUp();
			break;
		case top.VK_RIGHT:
			// right
			toRight();
			break;
		case top.VK_DOWN:
			//down
			toDown();
			break;
		case top.VK_ENTER:
			//ok
			doOk();
			break;
		case top.VK_EXIT:
			//exit
			doExit();
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
	if(form_flag == 0)
	{
			//document.location.href = "designMenu.html?3"
			document.location.href = "designMenu.html?2"
	}
	else if(form_flag == 1)
	{
		//清除痕迹
		div_contain_list[form_position_h + 1].style.background = "#FFF";
		form_position_h = 0;
		//初始化
		form_flag = 0;
		showOther();
	}
	else if(form_flag == 2)
	{
		$('menu').style.display = "block";
		$('yellowBar').style.display = "none";
		form_flag = 1;
	}
}
function toLeft()
{
/*
	if(form_flag == 0)
	{
		switch(position_h)
		{
			case 0:
				div_contain_list[1].style.background = "#FFF";
				div_contain_list[11].style.background = "#FF0";
				position_h = 10;
				break;
			case 1:
				whitePattern--;
				if(whitePattern < 0)
				{
					whitePattern = 8;
				}
				span_contain_list[1].innerHTML = white_pattern[whitePattern];
				factory.otherWhitePattern = whitePattern;
				break;
			case 2:
				span_contain_list[2].innerHTML = other[1];
				factory.nvmResetAll();
				break;
			case 3:
				if(factory.otherGotUserID == 0)
				{
					factory.otherGotUserID = 1;
					span_contain_list[3].innerHTML = off_on[1];
				}
				else
				{
					factory.otherGotUserID = 0;
					span_contain_list[3].innerHTML = off_on[0];
				}
				break;
			case 4:
				if(factory.otherUseTestHost == 0)
				{
					factory.otherUseTestHost = 1;
					span_contain_list[4].innerHTML = off_on[1];
				}
				else
				{
					factory.otherUseTestHost = 0;
					span_contain_list[4].innerHTML = off_on[0];
				}
				break;
			case 5:
				hidev--;
				if(hidev < 0)
				{
					hidev = 3;
				}
				span_contain_list[5].innerHTML = other_hidev[hidev];
				factory.otherHidev = hidev;
				break;
			case 6:
				if(factory.otherSSCOMDebug == 0)
				{
					factory.otherSSCOMDebug = 1;
					span_contain_list[6].innerHTML = off_on[1];
				}
				else
				{
					factory.otherSSCOMDebug = 0;
					span_contain_list[6].innerHTML = off_on[0];
				}
				break;
			case 7:
				if(factory.otherDTV == 0)
				{
					factory.otherDTV = 1;
					span_contain_list[7].innerHTML = off_on[1];
				}
				else
				{
					factory.otherDTV = 0;
					span_contain_list[7].innerHTML = off_on[0];
				}
				break;
			case 8:
				span_contain_list[8].innerHTML = other[1];
				factory.resetShop();
				break;
			case 9:
				if(factory.otherBGM == 0)
				{
					factory.otherBGM = 1;
					span_contain_list[9].innerHTML = off_on[1];
				}
				else
				{
					factory.otherBGM = 0;
					span_contain_list[9].innerHTML = off_on[0];
				}
				break;
			case 10:
				if(factory.otherWSS_ATF == 0)
				{
					factory.otherWSS_ATF = 1;
					span_contain_list[10].innerHTML = off_on[1];
				}
				else
				{
					factory.otherWSS_ATF = 0;
					span_contain_list[10].innerHTML = off_on[0];
				}
				break;
			default:
				break;
		}
	}
	else if(form_flag == 1)
	{
		$('menu').style.display = "none";
		$('yellowBar').style.display = "block";
		form_flag = 2;
	} */
	if(form_flag == 0)
	{
		switch(position_h)
		{
			case 0:
				if(UserID == 0)
				{
					UserID = 1;
					factory.otherGotUserID = UserID;
					span_contain_list[0].innerHTML = off_on[UserID];
				}
				else
				{
					UserID = 0;
					factory.otherGotUserID = UserID;
					span_contain_list[0].innerHTML = off_on[UserID];
				}
				break;
			case 1:
				if(BGM_status == 0)
				{
					BGM_status = 1;
					factory.otherBGM = BGM_status;
					span_contain_list[1].innerHTML = off_on[BGM_status];
				}
				else
				{
					BGM_status = 0;
					factory.otherBGM = BGM_status;
					span_contain_list[1].innerHTML = off_on[BGM_status];
				}
				break;
			case 2:
				if(WSS_ATF_status == 0)
				{
					WSS_ATF_status = 1;
					factory.otherWSS_ATF = WSS_ATF_status;
					span_contain_list[2].innerHTML = off_on[WSS_ATF_status];
				}
				else
				{
					WSS_ATF_status = 0;
					factory.otherWSS_ATF = WSS_ATF_status;
					span_contain_list[2].innerHTML = off_on[WSS_ATF_status];
				}
				break;
			case 4:
				if(uartStatus == 0)
				{
					uartStatus = 1;
					factory.setSerialPortStatus(uartStatus) ;
					span_contain_list[4].innerHTML = off_on[uartStatus];
				}
				else
				{
					uartStatus = 0;
					factory.setSerialPortStatus(uartStatus) ;
					span_contain_list[4].innerHTML = off_on[uartStatus];
				}
				break;
            case 6:
                if(STR_status == 0)
                {
                    STR_status = 1;
                    setting.suspendStatus = STR_status;
                    span_contain_list[6].innerHTML = off_on[STR_status];
                }
                else
                {
                    STR_status = 0;
                    setting.suspendStatus = STR_status;
                    span_contain_list[6].innerHTML = off_on[STR_status];
                }
                break;
            case 7:
                if(uiUpdate == 0)
                {
                    uiUpdate = 1;
                    setting.setProperty("app.ui.update", uiUpdate);
                    span_contain_list[7].innerHTML = off_on[uiUpdate];
                }
                else
                {
                    uiUpdate = 0;
                    setting.setProperty("app.ui.update", uiUpdate);
                    span_contain_list[7].innerHTML = off_on[uiUpdate];
                }
                break;
            case 8:
                if(uiTest == 0)
                {
                    uiTest = 1;
                    setting.setProperty("app.ui.testserver", uiTest);
                    span_contain_list[8].innerHTML = off_on[uiTest];
                }
                else
                {
                    uiTest = 0;
                    setting.setProperty("app.ui.testserver", uiTest);
                    span_contain_list[8].innerHTML = off_on[uiTest];
                }
                break;
			default:
				break;
		}
	}
}
function toRight()
{
/*
	if(form_flag == 0)
	{
		switch(position_h)
		{
			case 0:
				div_contain_list[1].style.background = "#FFF";
				div_contain_list[2].style.background = "#FF0";
				position_h = 1;
				break;
			case 1:
				whitePattern++;
				if(whitePattern > 8)
				{
					whitePattern = 0;
				}
				span_contain_list[1].innerHTML = white_pattern[whitePattern];
				factory.otherWhitePattern = whitePattern;
				break;
			case 2:
				span_contain_list[2].innerHTML = other[1];
				factory.nvmResetAll();
				break;
			case 3:
				if(factory.otherGotUserID == 0)
				{
					factory.otherGotUserID = 1;
					span_contain_list[3].innerHTML = off_on[1];
				}
				else
				{
					factory.otherGotUserID = 0;
					span_contain_list[3].innerHTML = off_on[0];
				}
				break;
			case 4:
				if(factory.otherUseTestHost == 0)
				{
					factory.otherUseTestHost = 1;
					span_contain_list[4].innerHTML = off_on[1];
				}
				else
				{
					factory.otherUseTestHost = 0;
					span_contain_list[4].innerHTML = off_on[0];
				}
				break;
			case 5:
				hidev++;
				if(hidev > 3)
				{
					hidev = 0;
				}
				span_contain_list[5].innerHTML = other_hidev[hidev];
				factory.otherHidev = hidev;
				break;
			case 6:
				if(factory.otherSSCOMDebug == 0)
				{
					factory.otherSSCOMDebug = 1;
					span_contain_list[6].innerHTML = off_on[1];
				}
				else
				{
					factory.otherSSCOMDebug = 0;
					span_contain_list[6].innerHTML = off_on[0];
				}
				break;
			case 7:
				if(factory.otherDTV == 0)
				{
					factory.otherDTV = 1;
					span_contain_list[7].innerHTML = off_on[1];
				}
				else
				{
					factory.otherDTV = 0;
					span_contain_list[7].innerHTML = off_on[0];
				}
				break;
			case 8:
				span_contain_list[8].innerHTML = other[1];
				factory.resetShop();
				break;
			case 9:
				if(factory.otherBGM == 0)
				{
					factory.otherBGM = 1;
					span_contain_list[9].innerHTML = off_on[1];
				}
				else
				{
					factory.otherBGM = 0;
					span_contain_list[9].innerHTML = off_on[0];
				}
				break;
			case 10:
				if(factory.otherWSS_ATF == 0)
				{
					factory.otherWSS_ATF = 1;
					span_contain_list[10].innerHTML = off_on[1];
				}
				else
				{
					factory.otherWSS_ATF = 0;
					span_contain_list[10].innerHTML = off_on[0];
				}
				break;
			default:
				break;
		}
	}
	else if(form_flag == 1)
	{
		$('menu').style.display = "none";
		$('yellowBar').style.display = "block";
		form_flag = 2;
	}*/
	if(form_flag == 0)
	{
		switch(position_h)
		{
			case 0:
				if(UserID == 0)
				{
					UserID = 1;
					factory.otherGotUserID = UserID;
					span_contain_list[0].innerHTML = off_on[UserID];
				}
				else
				{
					UserID = 0;
					factory.otherGotUserID = UserID;
					span_contain_list[0].innerHTML = off_on[UserID];
				}
				break;
			case 1:
				if(BGM_status == 0)
				{
					BGM_status = 1;
					factory.otherBGM = BGM_status;
					span_contain_list[1].innerHTML = off_on[BGM_status];
				}
				else
				{
					BGM_status = 0;
					factory.otherBGM = BGM_status;
					span_contain_list[1].innerHTML = off_on[BGM_status];
				}
				break;
			case 2:
				if(WSS_ATF_status == 0)
				{
					WSS_ATF_status = 1;
					factory.otherWSS_ATF = WSS_ATF_status;
					span_contain_list[2].innerHTML = off_on[WSS_ATF_status];
				}
				else
				{
					WSS_ATF_status = 0;
					factory.otherWSS_ATF = WSS_ATF_status;
					span_contain_list[2].innerHTML = off_on[WSS_ATF_status];
				}
				break;
			case 4:
				if(uartStatus == 0)
				{
					uartStatus = 1;
					factory.setSerialPortStatus(uartStatus);
					span_contain_list[4].innerHTML = off_on[uartStatus];
				}
				else
				{
					uartStatus = 0;
					factory.setSerialPortStatus(uartStatus);
					span_contain_list[4].innerHTML = off_on[uartStatus];
				}
				break;
            case 6:
                if(STR_status == 0)
                {
                    STR_status = 1;
                    setting.suspendStatus = STR_status;
                    span_contain_list[6].innerHTML = off_on[STR_status];
                }
                else
                {
                    STR_status = 0;
                    setting.suspendStatus = STR_status;
                    span_contain_list[6].innerHTML = off_on[STR_status];
                }
                break;
            case 7:
                if(uiUpdate == 0)
                {
                    uiUpdate = 1;
                    setting.setProperty("app.ui.update", uiUpdate);
                    span_contain_list[7].innerHTML = off_on[uiUpdate];
                }
                else
                {
                    uiUpdate = 0;
                    setting.setProperty("app.ui.update", uiUpdate);
                    span_contain_list[7].innerHTML = off_on[uiUpdate];
                }
                break;
            case 8:
                if(uiTest == 0)
                {
                    uiTest = 1;
                    setting.setProperty("app.ui.testserver", uiTest);
                    span_contain_list[8].innerHTML = off_on[uiTest];
                }
                else
                {
                    uiTest = 0;
                    setting.setProperty("app.ui.testserver", uiTest);
                    span_contain_list[8].innerHTML = off_on[uiTest];
                }
                break;
			default:
				break;
		}
	}
}
function toUp()
{
	if(form_flag == 0)
	{
		if(position_h == 0)
		{
			div_contain_list[1].style.background = "#FFF";
			div_contain_list[OTHER_SETTING_ITEM_LENGHT].style.background = "#FF0";
			position_h = OTHER_SETTING_ITEM_LENGHT-1;
		}
		else if(position_h == 6)
		{
			if(locale == "EU" || support_pvr == 0)
			{
				div_contain_list[7].style.background = "#FFF";
				div_contain_list[5].style.background = "#FF0";
				position_h = 4;
			}
			else
			{
				div_contain_list[7].style.background = "#FFF";
				div_contain_list[6].style.background = "#FF0";
				position_h--;
			}
		}
		else
		{
			div_contain_list[position_h + 1].style.background = "#FFF";
			div_contain_list[position_h].style.background = "#FF0";
			position_h--;
		}
	}
	else if(form_flag == 1)
	{
		if(form_position_h == 0)
		{
			div_contain_list[1].style.background = "#FFF";
			div_contain_list[14].style.background = "#FF0";
			form_position_h = 13;
		}
		else
		{
			div_contain_list[form_position_h + 1].style.background = "#FFF";
			div_contain_list[form_position_h].style.background = "#FF0";
			form_position_h--;
		}
	}
}
function toDown()
{
	if(form_flag == 0)
	{
		if(position_h == OTHER_SETTING_ITEM_LENGHT-1)
		{
			div_contain_list[OTHER_SETTING_ITEM_LENGHT].style.background = "#FFF";
			div_contain_list[1].style.background = "#FF0";
			position_h = 0;
		}
		else if(position_h == 4)
		{
			if(locale == "EU" || support_pvr == 0)
			{
				div_contain_list[5].style.background = "#FFF";
				div_contain_list[7].style.background = "#FF0";
				position_h = 6;
			}
			else
			{
				div_contain_list[position_h + 1].style.background = "#FFF";
				div_contain_list[position_h + 2].style.background = "#FF0";
				position_h++;
			}
		}		
		else
		{
			div_contain_list[position_h + 1].style.background = "#FFF";
			div_contain_list[position_h + 2].style.background = "#FF0";
			position_h++;
		}
	}
	else if(form_flag == 1)
	{
		if(form_position_h == 13)
		{
			div_contain_list[14].style.background = "#FFF";
			div_contain_list[1].style.background = "#FF0";
			form_position_h = 0;
		}
		else
		{
			div_contain_list[form_position_h + 1].style.background = "#FFF";
			div_contain_list[form_position_h + 2].style.background = "#FF0";
			form_position_h++;
		}
	}
}
function doOk()
{
	if(form_flag == 0)
	{
		if(position_h == 3)
		{
			if (usbList.length == 1) 
			{
				usbPath = usbList[0].path+"/Esticker";
				console.log("xiaox--usbPath:"+usbPath);
			}
			factory.updateEsticker(usbPath);
			if (usbPath != "") 
			{
				span_contain_list[3].innerHTML = other[2];
			}
			else
			{
				span_contain_list[3].innerHTML = other[3];
			}
            
		}
		else if(position_h == 5)
		{
			if(locale == "EU" || support_pvr == 0)
			{
				return;
			}
			//no signal and no usb mount can't record
			console.log("current signal status is "+channel.currentSignalStatus);
			if(channel.currentSignalStatus)
			{
				if(factory.getUsbDeviceStatus())
				{
					if(top.start_stop_flag == 0)
					{
						console.log("@@@@@@@coming in start pvr");
						factory.startPvr();
						console.log("@@@@@@@coming out start pvr");
						top.start_stop_flag = 1;
						span_contain_list[position_h].innerHTML = start_stop[top.start_stop_flag];
					}
					else
					{
						console.log("@@@@@@@coming in stop pvr");
						factory.stopPvr();
						console.log("@@@@@@@coming out stop pvr");
						top.start_stop_flag = 0;
						span_contain_list[position_h].innerHTML = start_stop[top.start_stop_flag];
					}
				}
				else
				{
						span_contain_list[position_h].innerHTML = "Please Insert USB";
						//防止快速按遥控器下键，导致UI字段刷新错误
						var tmp = position_h;
						setTimeout(
						function(){
						span_contain_list[tmp].innerHTML = start_stop[0];				
						},
						1000);
				}
			}
			else
			{
					span_contain_list[position_h].innerHTML = "no signal";
					var tmp = position_h;
					setTimeout(
					function(){
					span_contain_list[tmp].innerHTML = start_stop[0];				
					},
					1000);
			}
				
		}
	}
	else
	{
		return;
	}
}
function doExit()
{
    top.document.getElementById("factoryMenu").style.visibility = "hidden";
    top.requestFocus(top.main, 1);
    top.document.getElementById("main").src = "../channelPlay.html";
}
function init()
{
	if(top.timeoutFuc.timeoutEnable == 1)
		top.stopTimeout();
	whitePattern = factory.otherWhitePattern;
	hidev = factory.otherHidev;
	div_contain_list = $('menu').getElementsByTagName('div');
	span_contain_list = $('menu').getElementsByTagName('span');
	showOther();

	//以下获取usb路径，拿到esticker.xml路径
	if (multimedia.deviceStatus()) {
		usbList = multimedia.getDiskListInfo();
	}
	if (usbList == "" || usbList == null) 
	{
		return;
	}

}
function uninit()
{
	top.timeoutFuc.timeoutEnable=1;
}
function showOther()
{
	position_h = 0;
	form_flag = 0;
	UserID = factory.otherGotUserID;
	BGM_status = factory.otherBGM;
	WSS_ATF_status = factory.otherWSS_ATF;
    STR_status = setting.suspendStatus;
	uartStatus = factory.getSerialPortStatus();
    uiUpdate = setting.getProperty("app.ui.update", "1");
    uiTest = setting.getProperty("app.ui.testserver", "0");
	cType = factory.getClientTypeKey();
	if(top.g_setting.getProperty("ro.sita.model.LiveTV.PVR","FALSE") == "TRUE")
	{
		support_pvr = 1;
	}
	//初始化菜单项
	for(var i = 0; i <= OTHER_SETTING_ITEM_LENGHT; i++)
	{
		div_contain_list[i].innerHTML = init_title[i];
	}
	
	for(var i = OTHER_SETTING_ITEM_LENGHT; i < QMAP_ADJUST_ITEM_LENGHT; i++)
	{
		
		span_contain_list[i].style.display = "none";
		div_contain_list[i + 1].style.display = "none";
	}
	
	//span_contain_list[0].innerHTML = "";
	//span_contain_list[1].innerHTML = white_pattern[whitePattern];
	//span_contain_list[2].innerHTML = other[0];
	span_contain_list[0].innerHTML = off_on[UserID];
	//span_contain_list[4].innerHTML = off_on[factory.otherUseTestHost];
	//span_contain_list[5].innerHTML = other_hidev[hidev];
	//span_contain_list[6].innerHTML = off_on[factory.otherSSCOMDebug];
	//span_contain_list[7].innerHTML = off_on[factory.otherDTV];
	//span_contain_list[8].innerHTML = other[0];
	span_contain_list[1].innerHTML = off_on[factory.otherBGM];
	span_contain_list[2].innerHTML = off_on[factory.otherWSS_ATF];
	span_contain_list[3].innerHTML = other[0];
	span_contain_list[4].innerHTML = off_on[uartStatus];

	var arrList = cType.split("-");
	if(arrList.length>=2)
	{
		locale = arrList[1];
		if(locale == "EU" || support_pvr == 0)
		{
			span_contain_list[5].innerHTML = "N/A";//start_stop[top.start_stop_flag];
			div_contain_list[6].style.background = "#CCC";
		}
		else
		{
			span_contain_list[5].innerHTML = start_stop[top.start_stop_flag];
			div_contain_list[6].style.background = "#FFF";
		}
	}
	else
	{
		span_contain_list[5].innerHTML = start_stop[top.start_stop_flag];
		div_contain_list[6].style.background = "#FFF";
	}
    span_contain_list[6].innerHTML = off_on[STR_status];
    span_contain_list[7].innerHTML = off_on[uiUpdate];
    span_contain_list[8].innerHTML = off_on[uiTest];
	div_contain_list[position_h + 1].style.background = "#FF0";
}

function showAmapAdjust()
{
	//初始化菜单项
	div_contain_list[0].innerHTML = qmap_adjust[0];
	for(var i = 0; i < QMAP_ADJUST_ITEM_LENGHT; i++)
	{
		span_contain_list[i].innerHTML = "";
		div_contain_list[i + 1].innerHTML = "";
	}
	
	div_contain_list[1].style.background = "#FF0";
}

