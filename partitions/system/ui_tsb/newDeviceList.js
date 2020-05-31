var frameTitleText = top.frameTitleText;//New Device
var listLength = 0;
var usbListLength = 0;
var pvrListLength = 0;
var MAX_LIST_COUNT = 7;
var MAX_LENGTH_ONE_PAGE = 0;
var SCROLL_MAX_HEIGHT = 840;
var FOCUS_TOP_DISTANCE = 153;
var FOCUS_HEIGHT_DISTANCE = 120;
var FADE_TIME_15 = 15000;
var clickIndexAttri = "indexAttri";
var fadeTimer = 0;
var usbList = "";
var deviceListSpan = "";
var deviceListLi = "";
var DELAY_TIME = 200;

var ENTER_DEFAULT   = -1;
var ENTER_USB_TYPE	= 0;
var ENTER_DLNA_TYPE = 1;
var ENTER_PVR_TYPE  = 2;

var psswordWords			= top.others[2];
var password				= "";					//密码
var focusOn  = "menu";
var	passwordLength			= 0;					//密码字串的长

var listStartIndex = 0;
var listFocusIndex = 0;//max[0~6]

var multimedia = top.g_media;
var pvr = top.g_pvr;
var setting = top.g_setting;
var tmp=setting.contextOf5in1;

//top.g_isMediaCenter = 0;
//top.g_newDeviceCount = 1;
window.onload = init;
window.onunload = unInit;
document.onkeydown = keyProcess;
document.onsystemevent = notifyProcess;
function $(id)
{
    return document.getElementById(id);
}

function testLog(tmp)
{
	var str = "             => Areos: NDM " + tmp;
	console.log(str);
}

function init()
{
    top.initTextDirection(window);
	top.keySetForUI(1);
	initTextInfo();
	listStartIndex = 0;
	listFocusIndex = 0;
	top.g_newDeviceCount = multimedia.getNewDiskListCount();
	getDeviceList();
	refreshListInfo();
	addMouseListener();
	$("frameFocus").style.display = 'block';
	$("mainFrame").style.left = 1380 + "px";
	displayTimer();
	top.setContext5In1Type(top.CONTEXT_MENU_SELECT);
	
	testLog("ndm init done");

    if (top.$("main").contentWindow.displayFocusBox !=undefined)
        top.$("main").contentWindow.displayFocusBox(0);
	ttsRead();
}

function unInit()
{
	top.g_newDeviceCount = 0;
	top.bisUpgrade = 0; //yiling0609
	multimedia.getNewDiskListInfo(0);
	top.setContext5In1Type(tmp);
}

function initTextInfo()
{
	$("frameTitle").innerText = frameTitleText;
	deviceListSpan = $("frameContainInfo").getElementsByTagName('span');
	deviceListLi = $("frameContainInfo").getElementsByTagName('li');
	return;
}

function notifyProcess(evt)
{
	var msg = evt.which;
	var value = evt.modifiers;
	testLog("ndm recv msg: " + msg);
	switch(msg)
	{
		case top.E_WFD_STATUS:
			if(value==5)
			{
				top.g_channel.changeToPrevSource();
				top.$("main").style.display="block";
				top.$("otherPage").style.display="block";
				top.$("operatePage").style.display="block";
				if(top.g_temp=="menu")
				{
					top.g_temp="quickMenu";
					top.$("operatePage").src = "";
				}
				toOK();
			}
			break;
		case top.E_MEDIA_USB_INSERTED:
			testLog("----------- ndm recv PLUG IN!!!! --------------");	
			listStartIndex = 0;
			listFocusIndex = 0;
			top.g_newDeviceCount = multimedia.getNewDiskListCount();

			getDeviceList();

			refreshListInfo();
			testLog("the ndm test 2, top.g_isMediaCenter = " + top.g_isMediaCenter);
			testLog("the ndm test 2, top.NDM_Device_List = " + top.NDM_Device_List);
			if(top.g_isMediaCenter == top.NDM_Device_List)
			{
				top.$("main").contentWindow.devicePlugIn();
			}
			$('frameFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_TOP_DISTANCE * listFocusIndex + "px";
			displayTimer();
			break;
		case top.E_MEDIA_USB_REMOVE:
			testLog("ndm recv usb removed, top.g_isMediaCenter = " + top.g_isMediaCenter);
			switch(top.g_isMediaCenter)
			{
				case top.NDM_Media_List:
				case top.NDM_VIDEO_Play:
				case top.NDM_Music_Play:
				case top.NDM_Pic_Play:
					top.$("main").contentWindow.document.onsystemevent(evt);
					toBack(0);
					break;
				case top.NDM_Device_List:
					top.$("main").contentWindow.document.onsystemevent(evt);
					break;
			}
			break;
		case top.E_MEDIA_USB_REMOVE_OTHER:
			testLog("ndm recv usb removed other value = " + value);
			if(value)//new device removed
			{
				listStartIndex = 0;
				listFocusIndex = 0;
				top.g_newDeviceCount = multimedia.getNewDiskListCount();
				getDeviceList();
				if(listLength == 0)
				{
					changeMainFocus();
					toBack(0);
					top.$("main").contentWindow.document.onsystemevent(evt);
					return;
				}
				refreshListInfo();
				if(!top.g_newDeviceCount)
				{
					for(var i = 0; i < MAX_LIST_COUNT; i++)
					{
						$('frameFocus').style.display = 'none';
						deviceListLi[i].style.display = 'none';
						deviceListSpan[i].style.display = 'none';
					}
				}
				$('frameFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_TOP_DISTANCE * listFocusIndex + "px";
				displayTimer();
			}
			top.$("main").contentWindow.document.onsystemevent(evt);
			break;
		case top.E_NETWORK_CONNECT_TEST_SUCCESS:
		case top.E_NETWORK_CONNECT_TEST_FAIL:
		case top.E_BOOKING_RECORD_START:
		case top.E_READY_TO_CHANGE_CEC:
		case top.E_POWER_OFF_TIMER:
		case top.E_POWER_OFF_TIMER_EX:
			top.systemEventProc(evt);
			break;
		case top.E_STR_SCREEN_OFF:
			changeMainFocus();
			toBack(0);
			if (top.$("main").contentWindow.document.onsystemevent !=null)
				top.$("main").contentWindow.document.onsystemevent(evt);
			break;
		default:
		if (top.$("main").contentWindow.document.onsystemevent !=null)
        	top.$("main").contentWindow.document.onsystemevent(evt);
			//top.$("main").contentWindow.notifyProcess(evt);
			//changeMainFocus();
			//toBack();
			break;
	}
	return;
}

function keyProcess(evt)
{
	var keycode = evt.which;
	var value = evt.modifiers;
	switch (keycode)
	{
		case top.VK_PANEL_LONG_OK://add for 5in1 virtual key
		case top.VK_PANEL_OK:
		case top.VK_PANEL_UP:
		case top.VK_PANEL_DOWN:
		case top.VK_PANEL_LEFT:
		case top.VK_PANEL_RIGHT:
		case top.VK_POWER://power
			top.keyDownProcess(evt);
			return;
		case top.VK_UP:
			if(focusOn  == "menu")
			{
				toUp();
				ttsRead();
			}
			break;
		case top.VK_DOWN:
			if(focusOn  == "menu")
			{
				toDown();
				ttsRead();
			}
			break;
		case top.VK_RIGHT:
			//toRight();
			break;
		case top.VK_LEFT:
			//toLeft();
			break;
		case top.VK_ENTER:
			if(focusOn  == "menu")
			{
				var usbLock = top.g_factory.usbLock;
				var hotelEnable = top.g_factory.hotelEnable;
				if((usbLock) && (hotelEnable))
				{
					initPassForm();
					focusOn = "password";
				}
				else if(top.g_nextHtmlPage=="miracast.html")
				{
					setting.stopMiracast();
				}
				else
				{
					toOK();
				}
			}
			break;	
		case top.VK_0:
		case top.VK_1:
		case top.VK_2:
		case top.VK_3:
		case top.VK_4:
		case top.VK_5:
		case top.VK_6:
		case top.VK_7:
		case top.VK_8:
		case top.VK_9:
			if(focusOn == "password")
			{
				doCheck(evt.which - 48);
				ret = false;
			}
	        break;
		case top.VK_SLEEP:
		case top.VK_SOURCE:
		case top.VK_HOME:
		case top.VK_MENU:
		case top.VK_SOUND:
		case top.VK_FREEZE:
		case top.VK_TUNER:
		case top.VK_PIC:
		case top.VK_MTS:
		case top.VK_NETFLIX:
        case top.VK_GLOBOPLAY:
			top.keyDownProcess(evt);	
			break;
		case top.VK_BACK:
		case top.VK_TV:
		case top.VK_EXIT:
		if(focusOn  == "menu")
		{
			changeMainFocus();
			toBack(0);
		}
		else if(focusOn =="password")
		{
			$("passForm").style.display = "none";
			$("mainFrame").style.display = "block";
			focusOn  = "menu";
			fadeTimer = setTimeout(function(){
        				changeMainFocus();
				   		toBack(0);
						}, FADE_TIME_15);
		}
			break;
	}
	return;
}

function getDeviceList()
{
	if(multimedia.deviceStatus())
	{
		usbList = multimedia.getNewDiskListInfo(top.g_newDeviceCount);
		usbListLength = usbList.length;
	}
	else
	{
		usbList = "";
		usbListLength = 0;
	}
	if (setting.getProperty("ro.sita.model.LiveTV.PVR","FALSE") == "FALSE")//没有配置PVR,不显示PVR
        pvrListLength = 0;
	else
		pvrListLength = (pvr.getPvrDeviceStatus() && usbListLength > 0) ? 1 : 0;
	listLength = pvrListLength + usbListLength;
	setListMaxLength();
	return;
}

function fillDiskListInfo()
{
	if(pvrListLength)
	{
		deviceListSpan[0].innerText = "PVR";
		deviceListLi[0].style.display = 'block';
		deviceListSpan[0].style.display = 'block';
	}
	for(var i = pvrListLength; (i < (usbListLength + pvrListLength)) && (i < 7); i++)
	{
		deviceListLi[i].style.display = 'block';
		deviceListSpan[i].style.display = 'block';
		deviceListSpan[i].innerText = usbList[listStartIndex + i - pvrListLength].name;
	}
	for(var i = listLength; i < MAX_LIST_COUNT; i++)
	{
		deviceListLi[i].style.display = 'none';
		deviceListSpan[i].style.display = 'none';
		deviceListSpan[i].innerText = "";
	}
	return;
}

function initSource()
{
	if(top.recordStatusFlag == 1)
	{
		top.g_pvr.recordStop();
		top.g_pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
		top.$("globleShow").contentWindow.hiddenRecord();
		top.pvrCurrentTime = 0;
		top.recordStatusFlag = 0;
		top.pvrTotalTime = 2 * 60 * 60;
	}
	else if(top.timeShiftStatusFlag == 1)
	{
		top.timeShiftStatusFlag = 0;
		top.g_pvr.timeshiftStop();
		top.g_pvr.returnToLive();//返回实时播放页面
		top.$("globleShow").contentWindow.hiddenTimeShift();
	}
	
	switch(top.g_isMediaCenter)
	{
		case top.NDM_Others:
			//multimedia.changeSourceToMedia();
			break;
		case top.NDM_Device_List://device list
			if(top.g_lastEnterType == ENTER_PVR_TYPE)
			{
				pvr.pvrExitUninit();
			}
			else if(top.g_lastEnterType == ENTER_DLNA_TYPE || top.g_lastEnterType == ENTER_USB_TYPE)
			{
				multimedia.deviceExitUninit();
			}
			break;
		case top.NDM_Media_List://media list
			multimedia.deviceExitUninit();
			break;
		case top.NDM_DMR_Video://DMR video play
		case top.NDM_VIDEO_Play://video play
			top.$("globleShow").contentWindow.hiddenGlassRemind();
		case top.NDM_DMR_Music://DMR music play
		case top.NDM_Music_Play://music play
			multimedia.mediaStop(0);
			multimedia.deviceExitUninit();
			break;
		case top.NDM_DMR_Pic://DMR picture play
		case top.NDM_Pic_Play://picture play
            multimedia.mediaStop(0);
			multimedia.pictureStop(1);
			multimedia.deviceExitUninit();
			break;
		case top.NDM_PVR_Play://pvr play
			pvr.mediaStop(0);
		case top.NDM_PVR_List://pvr list
			pvr.pvrExitUninit();
			break;
	}
	if(pvrListLength && !listStartIndex && !listFocusIndex)//enter pvr
	{
		top.g_lastEnterType = ENTER_PVR_TYPE;
		pvr.pvrEntryInit();
	}
	else
	{
		top.g_lastEnterType = ENTER_USB_TYPE;
		top.g_deviceInfo = usbList[listStartIndex + listFocusIndex - pvrListLength];
		multimedia.setEnterDeviceType(ENTER_USB_TYPE);//[0]usb  type
		multimedia.changeSourceToMedia();		
	}
    tcl.channel.requestMute(0);
	return;
}
function doCheck(which)
{
	/*需要说明的是String.fromCharCode(which)的值总是大写的，因为onkeyup和onkeydown事件不能主动判断键盘的大小写，
	onkeypress可以判断大小写。其中只有onkeyup事件能获取键盘按下去后的结果值，因为此处需用到要清除键盘按下去后的值，
	所以只能用onkeyup事件，考虑到遥控器只有数字键，没有大小写之分，所以够用了*/
	passwordLength = password.length;
	if(passwordLength == 4)//重新输入
	{
		password = "";
		$("passContent").innerHTML = password + "_";
	}
	password = password + which;
	$("passContent").innerHTML = $("passContent").innerHTML.substring(0,passwordLength) + "*" + "_";
	passwordLength++;
	if(passwordLength == 4)
	{
		$("passContent").innerHTML = $("passContent").innerHTML.substring(0,passwordLength);
		 if(password != top.g_setting.password &&  password != top.g_superPassword)
		{
			passwordLength = 0;
			$('passRemind').innerHTML = passIncorrectWords;
			password = "";
			$("passContent").innerHTML = password + "_";
		}
		else
		{
			focusOn  = "menu";
			$("passForm").style.display = "none";
			toOK();
		}
	}
}

function initPassForm()
{
	var passFormSpanList = $("passForm").getElementsByTagName("span");
	passFormSpanList[0].innerHTML = psswordWords;
	passFormSpanList[1].innerHTML = psswordWords;
	password = "";
	$("passContent").innerHTML = password + "_";
	$("passRemind").innerHTML = "";
	$("passForm").style.display = "block";
	clearTimeout(fadeTimer);
	$("mainFrame").style.display = "none";
	top.showDialogPosition($("passForm"),800,300,1920,1080,0,0);
}

function refreshListInfo()
{
	fillDiskListInfo();
	showScrollBar(listLength, listStartIndex);
	return;
}

function changeMainFocus()
{
    if (top.$("main").contentWindow.displayFocusBox !=undefined)
        top.$("main").contentWindow.displayFocusBox(1);
}

function displayTimer()
{
	clearTimeout(fadeTimer);
	fadeTimer = setTimeout(function(){
        changeMainFocus();
		toBack(0);
	}, FADE_TIME_15);
}

function showScrollBar(length, start)
{
	if(length > MAX_LIST_COUNT)
	{
		$("frameScroll").style.display = "block";
		$("frameScrollBar").style.height = parseInt(SCROLL_MAX_HEIGHT * MAX_LIST_COUNT / length) + "px";
		$("frameScrollBar").style.top = parseInt(SCROLL_MAX_HEIGHT * start / length + 160) + "px";
	}
	else
	{
		$("frameScroll").style.display = "none";
		$("frameScrollBar").style.height = 0 + "px";
		$("frameScrollBar").style.top =  0 + "px";
	}
}

function toOK()
{
    if (usbList.length==0 && !(pvrListLength && !listStartIndex && !listFocusIndex))
    {
        return;
    }
	var status = top.g_channel.checkhbbtvStatus();
	//console.log("in toOK status is "+status);//Press ok button to enter, HBBTV open need to shut down
	if(status !=0)
	{
        top.globleHBBTVClose();
	}
	if(top.g_channel.inputSource!=10)
		top.g_channel.stopChannel();
	initSource();
	top.$("main").onload=function(){
		top.clearMyTimeout();
		top.$("main").onload=function(){};
		}
	if(pvrListLength && !listStartIndex && !listFocusIndex)//enter pvr
	{
		top.$("main").src = "pvrMediaList.html";
	}
	else
	{
        if(usbList.length==0)
        {
            usbList = multimedia.getNewDiskListInfo(top.g_newDeviceCount);
            usbListLength = usbList.length;
        }		
        console.log("usbList length "+usbList.length);
		top.g_deviceInfo = usbList[listStartIndex + listFocusIndex - pvrListLength];
		top.$("main").src = "mediaList.html";
	}
	clearTimeout(fadeTimer);
	toBack(1);
	top.uiPauseDownloadingUpFile();
	return;
}

function toBack(type)//[1]enter multimedia [0]not enter multimedia
{
	clearTimeout(fadeTimer);
	$("mainFrame").style.left = 1930 + "px";
	setTimeout(function(){//hide new device list page
		top.$("otherPage").src = "";
		if(top.g_temp == "menu"&&top.g_nextHtmlPage=="miracast.html")
		{
			top.g_nextHtmlPage="";
			top.requestFocus(top.$("operatePage").contentWindow.subMenu2, 0);
			top.setFrameFocusPage("operatePage");		
		}
		else
		{
			top.requestFocus(top.main, 1);
			top.setFrameFocusPage("main");
		}
		var listArray = top.$("main").src.split("/");
	    var target = "channelPlay.html";
		if(listArray[listArray.length - 1].substring(0,target.length) == target)
		{
		     top.keySetForUI(0);
		}
		if(!type && getSportModeType())//sport mode 
		{
			turnOnSportMode();
		}
	}, 300);
	return;
}

function toUp()
{
	if(listFocusIndex - 1 >= 0 && listFocusIndex < MAX_LENGTH_ONE_PAGE)
	{
		listFocusIndex--;
		setListFocus(listFocusIndex, listFocusIndex + 1);
		$('frameFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_HEIGHT_DISTANCE * listFocusIndex + "px";
	}
	else if(listStartIndex > 0)
	{
		listStartIndex--;
		refreshListInfo();
	}
	displayTimer();
	return;
}

function toDown()
{
	if(listFocusIndex >= 0 && listFocusIndex + 1 < MAX_LENGTH_ONE_PAGE)
	{
		listFocusIndex++;
		setListFocus(listFocusIndex, listFocusIndex - 1);
		$('frameFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_HEIGHT_DISTANCE * listFocusIndex + "px";
	}
	else if(listStartIndex + MAX_LIST_COUNT < listLength)
	{
		listStartIndex++;
		refreshListInfo();
	}
	displayTimer();
	return;
}

function setListMaxLength()
{
	MAX_LENGTH_ONE_PAGE = (listLength > MAX_LIST_COUNT) ? MAX_LIST_COUNT : listLength;
}

function getStringLength(str) 
{
	var realLength = 0;
	var len = str.length;
	var charCode = -1;
	for(var i = 0; i < len; i++) 
	{
		charCode = str.charCodeAt(i);
		realLength += (charCode >= 0 && charCode <= 128) ? 1 : 2;
	}
	return realLength;
}

function setListFocus(currentIndex, lastIndex)
{
	if(currentIndex > -1)
	{
		var length = getStringLength(deviceListSpan[currentIndex].innerText);
		deviceListSpan[currentIndex].className = (length > 20) ? "listInfoStyle_animate" : "listInfoStyle_static";
	}
	if(lastIndex > -1)
	{
		deviceListSpan[lastIndex].className = "listInfoStyle_static";
	}
	if(currentIndex == -1 && lastIndex == -1)
	{
		for(var i = 0; i < 10; i++)
		{
			deviceListSpan[i].className = "listInfoStyle_static";
		}
	}
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){
		evt.preventDefault();
		if(evt.button == 2) toBack(0);//right key
	}

	for(var i = 0; i < deviceListLi.length; i++)
	{
		deviceListLi[i].setAttribute(clickIndexAttri, i);
		deviceListLi[i].onmousedown = function(evt){
			if(evt.button == 0)//left key
			{
				clickListFunction(parseInt(this.getAttribute(clickIndexAttri)));
				evt.stopPropagation();
			}
		}
	}

	$("frameUpList").onmousedown = function(evt){
		if(evt.button == 0)//left key
		{
			clickUpArrowFunction();
			evt.stopPropagation();
		}
	}

	$("frameDownList").onmousedown = function(evt){
		if(evt.button == 0)//left key
		{
			clickDownArrowFunction();
			evt.stopPropagation();
		}
	}
}

function clickListFunction(index)
{
	listFocusIndex = index;
	$('frameFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_HEIGHT_DISTANCE * listFocusIndex + "px";
	setTimeout(function(){toOK();}, DELAY_TIME);
	return;
}

function clickUpArrowFunction()
{
	if(listStartIndex - MAX_LIST_COUNT >= 0)//can turn next page
	{
		listStartIndex -= MAX_LIST_COUNT;
	}
	else
	{
		listStartIndex = 0;
	}
	fillDiskListInfo();
}

function clickDownArrowFunction()
{
	if(listStartIndex + MAX_LIST_COUNT < listLength)//can turn next page
	{
		listStartIndex += MAX_LIST_COUNT;
	}
	else
	{
		listStartIndex = listLength - MAX_LIST_COUNT;
	}
	fillDiskListInfo();
}

function getSportModeType()//return: [0]simply [1]full
{
	if("TRUE" != setting.getProperty("ro.sita.model.LiveTV.FullySportsMode", "FALSE"))
	{
		return 0;
	}
	//"pvr.getUsbStatus() != 1"		-> 	no usb
	//"!top.g_setting.footballMode"		-> 	sportMode is off
	//"channel.inputSource != 1"	-> 	current source is not dtv
	if(top.g_pvr.getUsbStatus() != 1 || !top.g_setting.footballMode || top.g_channel.inputSource != 1)
	{
		return 0;
	}
	else
	{
		return 1;
	}
}

function turnOnSportMode()
{
	top.g_previousHtmlPage = "channelPlay.html";
	if(top.timeShiftStatusFlag == 1)
	{
		testLog("the timeshift status is on");
		top.g_pvr.timeshiftStop();
		top.g_pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
		top.timeShiftStatusFlag = 0;
		top.$("globleShow").contentWindow.hiddenTimeShift();
		//如果当前播放的频道不是booking需要跳转到的频道后面会做切台，不需要做下面的操作，如果做了会导致后面的切台不成功
		{
			top.g_pvr.returnToLive();//返回实时播放页面,相当于切台。
		}
	}
	if(top.recordStatusFlag==1)
	{
		testLog("the record status is on");
		top.recordStatusFlag = 0;
		top.g_pvr.recordStop();
		top.g_pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
		top.$("globleShow").contentWindow.hiddenRecord();
		top.pvrCurrentTime = 0;
		top.pvrTotalTime = 2 * 60 * 60;
	}
	testLog("jumppage to sportMode.html");
	top.$('main').src = "pvr/timeshiftInit.html";
	top.$("main").style.display = "block";
	top.$("operatePage").src = "";
	top.requestFocus(top.main, 1);
	top.setFrameFocusPage("main");
	
	tcl.channel.requestMute(0);
}

var isFirstFocus = 1;
function ttsRead()
{
	if(0 == top.g_setting.ttsSwitch)
	{
		top.ttsLog("ttsSwitch is off");
		return;
	}
	var ttsStr = "";
	var ttsName = "";
	var currentStatus = "";
	if(1 == isFirstFocus)
	{
		ttsName = frameTitleText + ",";
		isFirstFocus = 0;
	}
	if("menu" == focusOn)
	{
		if(pvrListLength && (listFocusIndex + listStartIndex) < pvrListLength)
		{
			currentStatus = "PVR";
		}
		else
		{
			currentStatus = usbList[listStartIndex + listFocusIndex - pvrListLength].name;
		}
	}
	else
	{
		currentStatus = "password";
	}
	ttsStr = ttsName + currentStatus;
	if("" != ttsStr)
	{
		top.ttsLog("ttsStr=" + ttsStr);
		top.setTTSSay(top.SPEECH_TYPE_FLUSH, ttsStr);
	}
}