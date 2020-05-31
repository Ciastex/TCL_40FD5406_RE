﻿/******************** created by chenhua ***********************/
/*搜台开始停止OSD timeout ,搜台中返回重新开启OSD timeout，如果是等待退出到channelPlay页面则不用重启OSD timeout*/
var chScanTitleWords 	= [top.chScanOptions[3]];
var chGenreWords		= top.chType;
var scanStatusWords		= top.chScanStatus;
var searchStop			= [top.others[8],top.others[17]];
var channelFrequency = top.dtv_freq_iran;


document.onsystemevent 		= notifyProcess;
var channel 			= top.g_channel;
var setting				= top.g_setting;
var tuner 				= 0;				//0 cable,1 antena

var focusOn 			= "autoUpdate";			//menu,password,country,tuner,autoUpdate,clean
var chinfo			= ["VHF&nbsp;&nbsp;&nbsp;&nbsp;CH:  ","UHF&nbsp;&nbsp;&nbsp;&nbsp;CH:  "];		// 增加字符之间的空格
var chnumber     = 6;
var frqch       = "VHF&nbsp;&nbsp;&nbsp;&nbsp;CH:  ";		// 增加字符之间的空格

var country     = 0;



/////////搜台时使用
var scanningInfo;
var anologScanCount 	= 0;
var digitalScanCount 	= 0;
var progress 			= 0;
var PROGRESS_WIDTH		= (600 - 10);		//总长为400个像素，但是要去掉表示当前进度的原点：10个像素
var progressFlag 		= -1;				//在analog+digital时使用，这时的进度条分为两段来处理，0 表示前半段，1表示后半段,-1表示搜台停止
var isSearch			= 0;				//判断是否在搜台：1搜台，0 不搜台，手动停止搜台都会置isSearch为0，判断是否是手动停止搜台只需要判断isSearch即可，防止在digital + analogue搜台过程中停止后会继续搜atv
var powerOffStatus 	= 0;
var currentSource = channel.inputSource;
var lastTtsStr = "";	//for tts
function notifyProcess(evt)
{
    var msg = evt.which;
	
//所有ＣＩ消息在搜台过程中不发相关的ci消息，这部分有底层去判断，代码此处直接默认处理即可，因为在搜台过程中这是不可能发生的事情
//powerOff消息不会在搜台的时候发送，这是由底层去判断，代码此处直接默认处理即可
//booking消息不会在搜台的时候发送，这是由底层去判断的，代码此处直接默认处理即可

    switch(msg)
    {
		case top.E_CI_DATA_READY:
		case top.E_CI_CAM_NAME_READY:
		case top.E_DLNA_DMR_PUSH_MOVIE://dmr push movie
		case top.E_DLNA_DMR_PUSH_MUSIC://dmr push music
		case top.E_DLNA_DMR_PUSH_PICTURE:
		case top.E_DLNA_DMR_PUSH_KODI:
		case top.E_DLNA_DMR_PUSH_YOUTUBE:
		case top.E_SCART_CHANGE_INPUT_SRC://scart change start:CMD_UI_NOTIFY_SCART_CHANGE_INPUT_SRC
			if(isSearch == 1)
			{
				//return;
			}
			else
			{
				top.systemEventProc(evt);
				//return;
			}
			break;
		case top.E_STR_SCREEN_OFF:
			if(isSearch == 1)
			{
				isSearch = 0;//为了防止在digital + analogue搜台过程中停止后会继续搜
				channel.stopScan();
				var atvcount = channel.getChListCountByServiceType(0);
				var dtvcount = channel.getChListCountByServiceType(1) + channel.getChListCountByServiceType(2)+channel.getChListCountByServiceType(3);
				//channel.setServiceType(1);//dtv
				currentSource = channel.inputSource;
				if(atvcount != 0 &&　dtvcount == 0 && digitalScanCount == 0)
				{
					changeSourceOrPlay(currentSource,0);
				}
				else
				{
					changeSourceOrPlay(currentSource,1);
				}
				powerOffStatus = 1;	
			}
			else
			{
				strPowerOff();
			}
			break;
		case top.E_ATV_TUNE_PREQUENCY_CHANGE://atv
	  	case top.E_DTV_TUNE_FREQUENCY_CHANGE://dtv
			if(progress <= 100)
			{
				updateInfo(0);
			}
			break;
	  	case top.E_ATV_SCAN_FINISHED://atv
			channel.updateChannleListExt();
			updateInfo(1);
			if(powerOffStatus == 1)
			{
				powerOffStatus = 0;
				strPowerOff()
			}
		  	break;
	  	case top.E_DTV_SCAN_FINISHED://dtv
			channel.updateChannleListExt();
		  	updateInfo(2);
		  	if(powerOffStatus == 1)
			{
				powerOffStatus = 0;
				strPowerOff()
			}
		  	break;
		case top.E_MEDIA_USB_INSERTED:
        case top.E_POWER_OFF_TIMER:
		case top.E_POWER_OFF_TIMER_EX:
			break;
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
function keyproc(evt)
{channel.testLog("in channelScan keyproc");
	var ret = true;
	var keycode = evt.which;
	
	if(isSearch == 1)
	{
		switch(keycode)
		{
			case top.VK_POWER:
				channel.stopScan();
				top.keyDownProcess(evt);
				break;
			//case top.VK_MENU:
			case top.VK_EXIT: //exit
				toExit();
				break;
			case top.VK_BACK: //back
				toBack();
				break;
			case top.VK_ENTER:
				doEnter();
				ret = false;
				break;
			default:
				break;
		}
		return;
	}
	else if(focusOn == "exit")//退出页面等待跳转过程中
	{
		if(keycode == top.VK_POWER)
		{
			top.keyDownProcess(evt);
		}
		return;
	}
	
	switch(keycode)
	{
		case top.VK_LEFT:
			toLeft();
			ret = false;
			break;
		case top.VK_UP:
			toUp();
			ret = false;
			break;
		case top.VK_RIGHT:
			toRight();
			ret = false;
			break;
		case top.VK_DOWN:
			toDown();
			ret = false;
			break;
		case top.VK_ENTER:
			doEnter();
			ret = false;
			break;
		case top.VK_BACK: //back
			toBack();
			break;
		case top.VK_POWER:
		case top.VK_MUTE://key mute
				top.keyDownProcess(evt);
				break;
		default:
			//top.keyDownProcess(evt);
			ret = true;
			break;
	}
	return ret;
}

function $(id)
{
	return document.getElementById(id);
}

function strPowerOff()
{
	 top.$("main").onload=function(){
	 	top.$("main").onload=function(){};
	 	top.g_temp="quickMenu";
	       top.$("operatePage").src = "";
		top.toPowerOff();	
	};
	top.$("main").src = "channelPlay.html";
       top.requestFocus(top.main, 1);
       top.setFrameFocusPage("main");
}
function toDown()
{
}

function toUp()
{
}

function toLeft()
{
}

function toRight()
{

}

function doEnter()
{
	toExit();
}
function changeSourceOrPlay(currentSource,value)
{
	if(currentSource == value)
	{
		channel.setServiceType(value);
	}
	else
	{
		channel.inputSource = value;
	}
}

/*
描述：手动动停止搜台
*/
function toExit()
{
	channel.testLog("in toExit");
	if(isSearch == 1)
	{
		isSearch = 0;
		channel.stopScan();
		var atvcount = channel.getChListCountByServiceType(0);
		var dtvcount = channel.getChListCountByServiceType(1) + channel.getChListCountByServiceType(2)+channel.getChListCountByServiceType(3);
		//channel.setServiceType(1);//dtv
		if(atvcount != 0 &&　dtvcount == 0 && digitalScanCount == 0)
		{
			changeSourceOrPlay(currentSource,0);
		}
		else
		{
			changeSourceOrPlay(currentSource,1);
		}
		//channel.playChannel();
		$("scanStatus").innerHTML = scanStatusWords[2];
		/*progress = 100;
		$("progressLeft").style.width = parseInt(progress*PROGRESS_WIDTH/100,10) + "px";
		$("progressRight").style.width = parseInt((100 - progress)*PROGRESS_WIDTH/100,10) + "px";
		$("progressValue").innerHTML = progress + "%";*/
		focusOn = "exit";
		setTimeout(function(){toExit();},2000);
	}
	else
	{
		var favNetListSum = 0;
		var favNetList = "";
		var tStr = channel.dtvFavNetList();
		top.Log("channel.dtvFavNetList() = " + tStr);
		if(tStr == "")
		{
			favNetListSum = 0;
		}
		else
		{
			favNetList = tStr.split("#");
			favNetListSum = favNetList.length;
		}
		top.Log("favNetListSum = " + favNetListSum);
		if(favNetListSum <= 1)
		{
			top.$("main").style.display = "block";
			var listArray = top.$("main").src.split("/");
		    var target = "channelPlay.html";
			if(listArray[listArray.length - 1].substring(0,target.length) == target)
			{
				top.$("main").src = target;
			}
    		parent.returnPage(0);
		}
		else
		{
			top.$("operatePage").contentWindow.subMenu2.directToDtvFavNetListHtml();
		}
	}
}


function toBack()
{
	channel.testLog("in back isSearch = " + isSearch);
	if(isSearch == 1)
	{
		isSearch = 0;
		channel.stopScan();
		//channel.setServiceType(1);//dtv
		currentSource = channel.inputSource;
		var atvcount = channel.getChListCountByServiceType(0);
		var dtvcount = channel.getChListCountByServiceType(1) + channel.getChListCountByServiceType(2)+channel.getChListCountByServiceType(3);
		if(atvcount != 0 && dtvcount == 0 && digitalScanCount == 0)
		{
			changeSourceOrPlay(currentSource,0);
		}
		else
		{
			changeSourceOrPlay(currentSource,1);
		}
		//channel.playChannel();
		top.restartTimeout();
	}
	$("scanStatus").innerHTML = scanStatusWords[2];
	
	setTimeout(function(){
		top.$("operatePage").contentWindow.subMenu2.initOptionShowStatus(channel.tunerMode);
			parent.returnPopWindow(3);},2000);
}


/*
功能描述：搜台过程中的消息处理
参数：id:0（atv或dtv进度更新的消息），1代表atv搜台结束，2代表dtv搜台结束
全局变量：scanningInfo;focusOn;progress;digitalScanCount；
*/
function updateInfo(id)
{
	if(isSearch == 0)
	{
		return;
	}
	
    switch (id)
    {
		case 0:
		{
			scanningInfo = channel.getScanningInfo();
			channel.testLog("get scanningInfo = " + scanningInfo);
			cutScanningInfo(scanningInfo);//将scanningInfo切分并保存到响应的变量中
			
			if(progress > 100)
			{
				channel.testLog("error in updateInfo  ------- progress = " + progress);
				return;
			}
			
			if(focusOn == "autoUpdate")
			{
				if(progressFlag == 0)//dtv 搜台
				{
					if(progress > 0)
					{
						$("scanResult2").innerHTML = chGenreWords[1] + digitalScanCount;
						if((top.isAPFlag) && (country==58)){
							$("scanResult0").innerHTML = frqch  + chnumber;
						}
					if((top.isAPFlag) && (country==60)) {
						if((chnumber < 13) || (chnumber == "9A")){
							$("scanResult0").innerHTML = frqch + chnumber;

						}
						else{
							$("scanResult0").innerHTML = frqch + chnumber;							
						}
						}
						var mid = PROGRESS_WIDTH/2;
						$("progressLeft").style.width = parseInt(progress*mid/100,10) + "px";
						$("progressRight").style.width = parseInt(mid + (100 - progress)*mid/100,10) + "px";
						$("progressValue").innerHTML = parseInt(progress/2,10) + "%";
						try
						{
							if((progress == 9) || (progress == 20) || (progress == 30) || (progress == 51) || (progress == 60) || (progress == 70) || (progress == 85))
							{
								{
									var ttsprogress = parseInt(progress / 2, 10) + "%";
									var fronChar = ttsprogress.slice(0, 5);
									if(lastTtsStr == fronChar)
									{
										return;
									}
									lastTtsStr = fronChar;
									setTimeout(function()
									{
										lastTtsStr = "";
									}, 2000);
									top.ttsLog("ttsStr=" + ttsprogress);
									top.setTTSSay(top.SPEECH_TYPE_FLUSH, ttsprogress);
								}
							}
						}
						catch(e)
						{
							top.ttsLog("error:" + e);
						}
					}
					if(progress == 100)
					{
						channel.stopScan();
					}
				}
				else//progressFlag == 1，atv搜台
				{
					if (progress > 0 ) 
					{
						$("scanResult1").innerHTML = chGenreWords[0] + anologScanCount;
						var mid = PROGRESS_WIDTH/2;
						$("progressLeft").style.width = parseInt(mid + progress*mid/100,10) + "px";
						$("progressRight").style.width = parseInt((100 - progress)*mid/100,10) + "px";
						$("progressValue").innerHTML = parseInt(50 + progress/2,10) + "%";
						try
						{
							if((progress == 9) || (progress == 20) || (progress == 38) || (progress == 51) || (progress == 60) || (progress == 70) || (progress == 86))
							{
								var ttsprogress = parseInt(50 + progress / 2, 10) + "%";
								var fronChar = ttsprogress.slice(0, 5);
								if(lastTtsStr == fronChar)
								{
									return;
								}
								lastTtsStr = fronChar;
								setTimeout(function()
								{
									lastTtsStr = "";
								}, 2000);
								top.ttsLog("ttsStr=" + ttsprogress);
								top.setTTSSay(top.SPEECH_TYPE_FLUSH, ttsprogress);
							}
						}
						catch(e)
						{
							top.ttsLog("error:" + e);
						}
					}
					
					if(progress == 100)
					{
						channel.stopScan();
					}
				}
			}
			break;
		}
		case 1://atv finish,atv搜台停止不需要我们自己调用停止函数，底层自己调用
		{
			if(focusOn == "autoUpdate")
			{
				//说明是正常搜台结束，而非手动停止搜台(因为手动停止的时候isSearch已经为0
				isSearch = 0;
				$("scanStatus").innerHTML = scanStatusWords[1];
				currentSource = channel.inputSource;
				var atvcount = channel.getChListCountByServiceType(0);
				var dtvcount = channel.getChListCountByServiceType(1) + channel.getChListCountByServiceType(2)+channel.getChListCountByServiceType(3);
				//channel.setServiceType(1);//dtv
				if(atvcount != 0 &&　dtvcount == 0 && digitalScanCount == 0)
				{
					changeSourceOrPlay(currentSource,0);
				}
				else
				{
					changeSourceOrPlay(currentSource,1);
				}
				setTimeout(function(){toExit();},3000);
				focusOn = "exit";
			}
			//window.location.href = "reset_location.html";
			break;
		}
		case 2://dtv scan finish
		{
			if(focusOn == "autoUpdate")//atv + dtv 搜台
			{
				//说明是正常搜台结束，而非手动停止搜台(因为手动停止的时候isSearch已经为0
				if(progressFlag == 0)//在analog+digital时使用，这时的进度条分为两段来处理，0 表示前半段，1表示后半断
				{
					progressFlag = 1;
					channel.startScanAtvAutoUpdate();
				}
			}
			break;
		}
		default:
		{
			break;
		}
    }
}

/*
功能描述：将scanningInfo切分并保存到响应的变量中
参数：id:0（atv或dtv进度更新的消息），1代表atv搜台结束，2代表dtv搜台结束
全局变量：anologScanCount;digitalScanCount;progress;
*/
function cutScanningInfo(info)
{
	var str = info;
	var data = str.split("/");
	anologScanCount = parseInt(data[0],10);
	var digital = parseInt(data[1],10);
	var radio = parseInt(data[2],10);
	digitalScanCount = digital + radio;
	//上传的freq是以kHz结尾的，这里装换城MHz
	//根据越南的频道表，根据频点计算频道
	if((top.isAPFlag) && (country==58)) {
		freq = (parseInt(data[3], 10) / 1000);
		if(freq<240){
			chnumber = (freq-178)/8 +6;
		}else if((freq>300) && (freq<800)){
			chnumber = (freq-474)/8 +21;
		}else{
			chnumber = 6;
		}
//	console.log("longfy---chnumberagain=== " +chnumber);
		if (chnumber < 13) {
			frqch = chinfo[0];
		} else {
			frqch = chinfo[1];
		}
	}
	if((top.isAPFlag) && (country==60)) {
		freq = (parseInt(data[3],10));
		console.log("freq = " + freq);
		for(var i = 0; i < channelFrequency.length; i++){
			if(freq == channelFrequency[i].freq){
				chnumber = channelFrequency[i].num;	
		}
		}
		if ((chnumber < 13)||(chnumber == "9A")) {
			frqch = chinfo[0];
		} else {
			frqch = chinfo[1];
		}
	}
	progress = parseInt(data[4],10);
	channel.testLog("in cutScanningInfo progress = " + progress);
}


var WINDOW_HEIGHT 			= 1080;
var SCAN_FORM_HEIGHT_START	= 320;				//240:搜台进度条及其相关信息的高度，80：搜台框标题以及hr的高度




function init()
{
    top.initTextDirection(window);
    channel.testLog("***** AutoUpdate init **** ");

    top.uiPauseDownloadingUpFile();
	//console.log("in autoUpdate doEnter is top.preTempPage is "+top.preTempPage+"top.g_temp is "+top.g_temp);
	if(top.g_temp == "menu" && top.preTempPage == "homePage")
	{
		top.closeLauncherUI();
	}
	timeoutInit();
	channel.testLog("in initAutoUpdate");
	channel.stopChannel();
	anologScanCount = 0;
	digitalScanCount = 0;
	progress = 0;
	country = channel.systemCountry;
	$("scanTitle").innerHTML = chScanTitleWords[0];
	$("scanStatus").innerHTML = scanStatusWords[0];
	if((top.isAPFlag) && (country==58)) {
		$("scanResult0").style.display = "block";
		$("scanResult0").innerHTML = frqch + chnumber;
	}
	else if((top.isAPFlag) && (country==60)) {	
		if((chnumber < 13) || (chnumber == "9A")){
		$("scanResult0").style.display = "block";
		$("scanResult0").innerHTML = frqch + chnumber;

		}
		else{
				$("scanResult0").style.display = "block";
				$("scanResult0").innerHTML = frqch + chnumber;							
		}
	}else{
		$("scanResult0").style.display = "none";
	}
	$("scanResult1").innerHTML = chGenreWords[0] + anologScanCount;
	$("scanResult2").innerHTML = chGenreWords[1] + digitalScanCount;
	
	$("progressLeft").style.width = parseInt(progress*PROGRESS_WIDTH/100,10) + "px";
	$("progressRight").style.width = parseInt((100 - progress)*PROGRESS_WIDTH/100,10) + "px";
	$("progressValue").innerHTML = progress + "%";
	
	$("scanForm").style.height = SCAN_FORM_HEIGHT_START + "px";
	$("scanForm").style.top = parseInt((WINDOW_HEIGHT - SCAN_FORM_HEIGHT_START)/2,10) + "px";
	$("scanForm").style.display = "block";
	progressFlag = 0;
	isSearch = 1;
	$("search").innerHTML = searchStop[1];
	$("search").style.border = "medium solid "+top.uiColourStyle;
	
	top.stopTimeout();
	//atv + dtv 搜台，先搜dtv
	channel.startScanDtvAutoUpdate();
	addMouseListener();
}

function uninit()
{
    channel.testLog("***** AutoUpdate uninit **** ");
    top.uiResumeDownloadingUpFile();
	//top.$("main").style.display = "block";
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();
		top.timeoutFuc.osdTimeoutStartFuc();
	}

	$("search").onmousedown = function(evt){
		//top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0)
		{//left key
			doEnter();
		}
		//top.timeoutFuc.osdTimeoutStartFuc();
	}
	
}
