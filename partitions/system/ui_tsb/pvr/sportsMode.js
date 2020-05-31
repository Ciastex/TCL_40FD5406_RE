top.keySetForUI(1);
var yesNoWords			= top.yesNo;
var remindWords 		= [top.pvrRemindWords[0],top.pvrRemindWords[2],top.sportsModeExtra[0],top.sportsModeExtra[2],top.sportsModeExtra[2],
							top.pvrRemindWords[6],top.sportsModeExtra[3],top.sportsModeExtra[4],top.sportsModeExtra[5],top.sportsModeExtra[6],
							top.sportsModeExtra[7]];
var notEnoughSpace		= top.pvrRemindWords[3];
var tips				= top.others[28];
							
var playStatusImgs 		= ["../images/pvr/stop.png",
							"../images/Time_shift-Play.png",
							"../images/Time_shift-Pause.png",
							"../images/Time_shift-FB.png",
							"../images/Time_shift-FF.png",
							"../images/Time_shift-SM.png"];

var p_play 				= 0;
var p_pause 			= 1;
var p_fastBackward 		= 2;
var p_fastForward 		= 3;
var p_slowMove 			= 4;

var ft_menu				= 0;//menu bar 
var ft_channelChange	= 1;//changing channel
var ft_usbRemove		= 2;//usb removed tips
var ft_noSpace			= 3;//usb space run out tips
var ft_pin8				= 4;//cart source received
var ft_cec 				= 5;//HDMI source received
var ft_notAvailable 	= 6;//unavailable: invalid service, no signal;
var ft_notSupport 		= 7;
var ft_homePage 		= 8;//press smart TV or Home key
var ft_zoomMode 		= 9;
var ft_zooming 			= 10;
var ft_exit 			= 11;//exit tips
var ft_seekBar 			= 12;//pre var for seek function of future potential requirement
var ft_screen 			= -1;//nothing displayed

//需要下传到底层的按键枚举值
var E_PVR_KEY_FASTBACKWARD = 0;
var E_PVR_KEY_FASTFORWARD = 1;
var E_PVR_KEY_PAUSE_PLAY = 2;
var E_PVR_KEY_PAUSE = 3;
var E_PVR_KEY_PLAY = 4;
var E_PVR_KEY_NUM = 5;

var pvr 				= top.g_pvr;
var channel				= top.g_channel;
var setting				= top.g_setting;
var playStatus			= p_pause;				//play,pause,fastBackward,fastForward，没有stop状态
var startTimeshiftTime	= 0;					//当前录制的节目录制的开始时间，注意这个时间可能会不断改变（老的timeshift被删除时，这个时间改变）
var playBackOffsetTime	= 0;					//当前回放的时间
var recordedDuration	= 0;					//已经录制的时长
var baseTime			= 0;					//时间片显示的基准时间
var timeBarRefreshTimer 		= 0; 					//timeshift 进行时实时更新状态的计时器
var focusOn 			= ft_menu;
//var focusOn				= "menu";				//menu:主菜单;
												//channelChange：在频道切换上;
												//usbRemove:usb 移除;
												//noSpace:没有多余的空间来录制;
												//pin8:cart信源接入;
												//cec:HDMI信源接入;
												//notAvailable:不可用，比如invalid service，no signal等;
												//homePage:按smartTv键或home键
var list_position_h 	= 0;
var evt;

var timeshiftBorderOffsetPosition = 450;//这个位置是当前shift的最开始的（最开始的位置就是当前时间的位置，应该处于最中间）位置相对于timeshiftBorder最左侧的位置的差值
var timeshiftFormOffsetPosition = 540;//这个位置是当前shift的最开始的（最开始的位置就是当前时间的位置，应该处于最中间）位置相对于timeshiftForm最左侧的位置的差值
var pxOfOneHour = 800;//1个小时对应的长度为600个像素
var sportsModeBarSpanList;
var sportsModeBarDivList;

var remindAndMenuTimer	= 0;					//主菜单隐藏计时器
var ffStep 			= 1;//快进的速度，1,2,4,8,16,32
var frStep 			= 1;//快退的速度，1,2,4,8,16,32
var smStep 			= 1;//slow move speed, 1,2,4,8,16
var FORM_START			= 190;
var FORM_STEP			= 300;

/*
我们设置timeshiftBar最长包含10个时间段（每半个小时位一个时段），也就是跨度为5个小时（这个时间应该是足够用了）
*/
var urlValues;
var bottomFormImgList;
var dialogButtonClassList;
var blurBoxList;

var zoomMoveIndex = 4;//0~8 default[4]the middle box
var MOVE_UP 	= -3;
var MOVE_DOWN 	= 3;
var MOVE_LEFT 	= -1;
var MOVE_RIGHT 	= 1;

var menuBarIndex = 2;//[0~6] default[2]
var menuBarImgs = 0;
var MENU_BAR_AIR 		= 0;
var MENU_BAR_FR 		= 1;
var MENU_BAR_PP 		= 2;
var MENU_BAR_FF 		= 3;
var MENU_BAR_SM 		= 4;
var MENU_BAR_ZOOM 		= 5;
var MENU_BAR_EXIT 		= 6;

var airButtonStatus 	= true;
var frButtonStatus 		= true;
var ffButtonStatus 		= true;

var SEEK_TIME_PIECE 	= 10;//pre api for potential requirement
var seekTime 			= 0;//pre api for potential requirement

var playStatusFistChangingFlag = false;//test for first play status changing 
var menuDisplayTimer = 0;
var zoomModeTimer = 0;
var powerOffFlag = false;
var picPath = "/data/tmpZoomPic.bmp";

document.onkeydown 		= keyproc;
document.onsystemevent 	= notifyProcess;

function $(id)
{
	return document.getElementById(id);
}

function testLog(str)
{
	console.log("------------->   Areos: " + str);
}

function initSetRegion()
{
	if (top.uiColourStyleFlag == 1) 
	{
		var classlist;
		classlist = document.getElementsByClassName("sportsModeTimePieceImg");
		for (var i = 0; i < classlist.length; i++) 
		{
			//classlist[i].setAttribute("class","progressImgOtherStyle");
			classlist[i].style.border = "1px solid" + top.uiColourStyle;
			//classlist[i].className = "progressImgOtherStyle";
		}
	}
}

function init()
{
    top.initTextDirection(window);
	if(top.isGingaOn && top.GingaObj.isInit == top.GingaStates.True) //pvr需要暂停Ginga,发送暂停信号到中间件
	{
		//top.gingaEvtProc(top.GingaStates.Events.GINGA_EVT_PAUSE_FOR_CONTROL_LOST);
        top.g_ginga.setNetworkEvent(top.GingaStates.NetworkEvents.GINGA_NW_EVT_TS_UNSELECTED);
	}
	top.clearMyTimeout();
	top.g_temp = "pvr";
	setting.contextOf5in1 = top.CONTEXT_MUSIC_MOVIE_PLAYER;
	initFrameInfo();
	initSportsModeUI();
	top.timeShiftStatusFlag = 1;
	pvr.pvrMhegSuspend(1);//将mheg状态和显示挂起
	pvr.sportsModeStart();
	return;
}

function uninit()
{
	top.g_temp = "";
	setting.footballMode = 0;//turn off
}

function initFrameInfo()
{
	initSetRegion();
	blurBoxList = $("blurFrame").getElementsByClassName("blurBox");
	bottomFormImgList = $("sportsModeMenuBar").getElementsByClassName("menuBarImg");
	sportsModeBarSpanList = $("sportsModeTimepieceContent").getElementsByTagName("span");
	sportsModeBarDivList = $("sportsModeTimepieceContent").getElementsByTagName("div");
	menuBarImgs = $("sportsModeMenuBar").getElementsByClassName("menuBarImg");
	dialogButtonClassList = $("remind").getElementsByClassName("dialogButton");
}

function notifyProcess(e)
{
	testLog("in notifyProcess timeshift");
    var msg = e.which;
	var value = e.modifiers;
	/*有几个消息处理时底层自己把pvr和timeshift停止掉，我们上面只需要退出页面，将mheg恢复即可，这类消息有
	1.usb拔出：					E_PVR_DISK_UNPLUG
	2.usb盘满：					E_PVR_DISK_FULL			//该消息只在pvr下出现，timeshift没有磁盘满的说法
	3.录制结束：				E_PVR_RECORD_END		//该消息只在pvr下出现，timeshift无此消息
	4.信号断掉：				E_PVR_NO_SIGNAL			//该消息是pvr和timeshift特有的消息
	5.当前播放数据流更新：		E_DTV_SERVICE_PLAY		//该消息是新数据流播放的消息
	6.服务异常：				E_SS_INVALID_SERVICE	//该消息表示运营商服务异常
	7.流中只有数据：			E_SS_DATA_ONLY			
	8.流加密:					E_SS_SCRAMBLED_PROGRAM	//这里需要注意，在进入pvr和timeshift的时候加密流被解密了也是不能录制的，需要调用pvr.isVideoScramble函数来判断这种情况
	9.频道被锁:					E_SS_CH_BLOCK			
	10.有父母锁：				E_SS_PARENTAL_BLOCK
	11.信源锁：					E_DTV_SS_INPUT_BLOCK
	12.ci发起主动换台：			E_CIPLUS_PROGRAM_CHANGE
	13.底层切台完成:			E_CHANNEL_PLAY_END		//底层切台的情况主要是有nit 表刷新的时候可能会涉及到主动切台
	*/
	switch(msg)
	{
		case top.E_BOOKING_PLAY_START://booking play start开机时节目预定的时间已过，但是依然要提醒用户做一些切台等操作
		case top.E_BOOKING_RECORD_START://booking record start开机时录制预定已经过期，但是依然要提醒用户切台录制
		case top.E_BOOKING_AHEAD_PLAY_START://booking ahead play start,正常情况下切台提醒，一分钟前提醒
		case top.E_BOOKING_AHEAD_RECORD_START://booking ahead record start正常情况下录制提醒,，一分钟前提醒制提醒
			///////////////////////////chenhua change start////////////////////////////////
			top.systemEventProc(e);
			///////////////////////////chenhua change start////////////////////////////////
			return;
		case top.E_PVR_PLAYBACK_MOTION_CHANGE://播放状态更改,消息携带的参数为枚举PVR_MOTION
			if(value == 0)//pause
			{
				if(focusOn == ft_seekBar || (playStatus == p_fastBackward || playStatus == p_fastForward || playStatus == p_slowMove))
				{
					frStep = 1;
					ffStep = 1;
					smStep = 1;
					playStatus = p_pause;
					showPlayStatus(playStatus, 0);
					menuBarIndex = MENU_BAR_PP;
				}
				else
				{
					break;
				}
			}
			else if(value == 1)//normal
			{
				if(focusOn == ft_seekBar || (playStatus == p_pause || playStatus == p_fastBackward || playStatus == p_fastForward || playStatus == p_slowMove))
				{
					if(!playStatusFistChangingFlag)
					{
						playStatusFistChangingFlag = true;
						break;
					}
					ffStep = 1;
					frStep = 1;
					smStep = 1;
					playStatus = p_play
					showPlayStatus(playStatus, 0);
					menuBarIndex = MENU_BAR_PP;
				}
				else
				{
					break;
				}
			}
			else if(value >= 2 && value <= 6)//fast forward
			{
				frStep = 1;
				smStep = 1;
				playStatus = p_fastForward;
				ffStep = Math.pow(2, value - 1);
				showPlayStatus(playStatus, ffStep);
				menuBarIndex = MENU_BAR_FF;
			}
			else if(value >= 7 && value <= 11)//back forward
			{
				ffStep = 1;
				smStep = 1;
				playStatus = p_fastBackward;
				frStep = Math.pow(2, value - 6);
				showPlayStatus(playStatus, frStep);
				menuBarIndex = MENU_BAR_FR;
			}
			else if(value >= 12 && value <= 15)
			{
				ffStep = 1;
				frStep = 1;
				playStatus = p_slowMove;
				smStep = Math.pow(2, value - 11);
				showPlayStatus(playStatus, smStep);
				menuBarIndex = MENU_BAR_SM;
			}
			checkCurrentRecordingStatus();
			setMenuBarFocus(1, menuBarIndex);
			break;
		case top.E_PVR_TIMESHIFT_AUTO_START://pvr录制满时，如果当前timeshift是暂停的会自动播放
			playStatus = p_play;
			menuBarIndex = MENU_BAR_PP;
			checkCurrentRecordingStatus();
			setMenuBarFocus(1, menuBarIndex);
			autoPlay();
			break;
		case top.E_CI_CARD_INSERTED://CI insert
		case top.E_CI_CARD_REMOVE://CI remove
		case top.E_CI_DATA_READY:// CI data ready
		case top.E_CI_CAM_NAME_READY://ci card name ready
		case top.E_CI_EXIT_CI://exit
		case top.E_CI_UPGR_INPROGRESS:
		case top.E_CI_UPGR_NOT_INPROGRESS://CI update end
		case top.E_CIPLUS_PROGRAM_CHANGE:
		case top.E_CI_OP_UPDATE_INFO:
		case top.E_CI_OP_UPDATE_CHANNEL:
		case top.E_CI_OP_UPDATE_NIT:
		case top.E_CI_MHEG_OPEN:
		case top.E_CI_MHEG_CLOSE:
			//所有ＣＩ消息不做处理
			break;
		case top.E_SS_PARENTAL_BLOCK://有节目锁//对
		case top.E_SS_CH_BLOCK://channel lock//
			channel.playLockProgram();
			break;
		case top.E_PVR_NO_SIGNAL:
			hideRemind();
			break;
		case top.E_PVR_SIGNAL_RESUME:
			initTimeshiftUi();
			break;
		case top.E_PVR_DISK_UNPLUG://usb remove//对于此消息，我们只需要处理页面显示就可，所有停止pvr、timeshift的函数调用都在底层处理
			testLog("recv pvr disk unplug");
			if(top.timeShiftStatusFlag == 1)
			{
				focusOn = ft_usbRemove;
				showRemind();
			}
			break;
		case top.E_READY_TO_CHANGE_SCART://ready to change to cart source
			urlValues = e.modifiers;
			focusOn = ft_pin8;
			showRemind();
			break;
		case top.E_READY_TO_CHANGE_CEC://ready to change to cec source
			urlValues = e.modifiers;
			focusOn = ft_cec;
			showRemind();
			break;
		case top.E_DTV_SERVICE_PLAY://播放流数据更新,//对于此消息，我们只需要处理页面显示就可，所有停止pvr、timeshift的函数调用都在底层处理
		case top.E_CIPLUS_PROGRAM_CHANGE://ci 主动换台发出换台刷新节目信息//对于此消息，我们只需要处理页面显示就可，所有停止pvr、timeshift的函数调用都在底层处理
			top.g_isShowInfoBar = 1;
			if(top.timeShiftStatusFlag == 1)
			{
				focusOn = ft_notAvailable;
				showRemind();
			}
			break;
		case top.E_CHANNEL_PLAY_END://add chenhua 2014.5.14 for pvr and timeshift
			break;
		case top.E_SS_INVALID_SERVICE://invalid service//对于此消息，我们只需要处理页面显示就可，所有停止pvr、timeshift的函数调用都在底层处理
		case top.E_SS_DATA_ONLY://data only//对于此消息，我们只需要处理页面显示就可，所有停止pvr、timeshift的函数调用都在底层处理
			top.channelLock = 0;
			top.parentalLock = 0;
			top.inputLock = 0;
			if(top.timeShiftStatusFlag == 1)
			{
				focusOn = ft_notAvailable;
				showRemind();
			}
			break;
		case top.E_SS_SCRAMBLED_PROGRAM:// screamble//对于此消息，我们只需要处理页面显示就可，所有停止pvr、timeshift的函数调用都在底层处理
			top.channelLock = 0;
			top.parentalLock = 0;
			top.inputLock = 0;
			if(top.timeShiftStatusFlag == 1)
			{
				focusOn = ft_notSupport;
				showRemind();
			}
			break;
		case top.E_SS_CH_BLOCK://channel lock//对于此消息，我们只需要处理页面显示就可，所有停止pvr、timeshift的函数调用都在底层处理
			top.channelLock = 1;
			if(top.timeShiftStatusFlag == 1)
			{
				focusOn = ft_notAvailable;
				showRemind();
			}
			break;
		case top.E_SS_PARENTAL_BLOCK://有节目锁//对于此消息，我们只需要处理页面显示就可，所有停止pvr、timeshift的函数调用都在底层处理
			top.parentalLock = 1;
			if(top.timeShiftStatusFlag == 1)
			{
				focusOn = ft_notAvailable;
				showRemind();
			}
			break;
		case top.E_DTV_SS_INPUT_BLOCK://信源锁//对于此消息，我们只需要处理页面显示就可，所有停止pvr、timeshift的函数调用都在底层处理
			top.inputLock = 1;
			if(top.timeShiftStatusFlag == 1)
			{
				focusOn = ft_notAvailable;
				showRemind();
			}
			break;
		case top.E_MEDIA_USB_INSERTED:
			break;
		case top.E_STR_SCREEN_OFF:
			top.sendEvent("vod.netflix", 0xf303);//只要收到此消息,键值都需要传给ui处理
			if(focusOn != ft_exit)
			{
				setTimeout("top.cancelForcePowerOff();", 500);   //取消强制待机计时
				powerOffFlag = true;
				doExit(0);
			}
			break;
		default:
			top.systemEventProc(e);
			break;
	}
}

function keyproc(e)
{
	var keycode = e.which;
	//通用键
	switch(keycode)
	{
		case top.VK_POWER:
			top.keyDownProcess(e);
			break;
		case top.VK_CHANNEL_UP://channel +
			//sports mode requirement: do not change channel
			/*evt = e;
			focusOn = "channelChange";
			showRemind();
			*/
			break;
		case top.VK_CHANNEL_DOWN://channel -
			/*evt = e;
			focusOn = "channelChange";
			showRemind();
			*/
			break;
		case top.VK_EXIT://exit
		case top.VK_STOP:
			if(focusOn != ft_exit)
			{
				doExit(0);
			}
			break;
		case top.VK_PLAY_PAUSE:
			displayMenuBar(1);
			toPauseOrPlayKey();
			break;
		case top.VK_PAUSE://not used in la
			displayMenuBar(1);
			toPause();
			break;
		case top.VK_PLAY:
			displayMenuBar(1);
			toPlay();
			break;
		case top.VK_REWIND://fastBackward
			displayMenuBar(1);
			toFastBackwardKey();
			break;
		case top.VK_FAST_FWD://fastForward
			displayMenuBar(1);
			toFastForwardKey();
			break;
		case top.VK_UP:
			toUp();
			break;
		case top.VK_DOWN:
			toDown();
			break;
		case top.VK_LEFT:
			toLeft();
			break;
		case top.VK_RIGHT:
			toRight();
			break;
		case top.VK_ENTER:
			doEnter();
			break;
		case top.VK_BACK:
			toBack();
			break;
		case top.VK_PIC:
		case top.VK_SOUND:
		case top.VK_GUIDE:
		case top.VK_INFO:
		case top.VK_OPTION:
		case top.VK_MENU:
		case top.VK_SOURCE:
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
			/*
			if(remindAndMenuTimer)
			{
				clearTimeout(remindAndMenuTimer);
			}
			remindAndMenuTimer = 0;
			top.$("main").src = "channelPlay.html?" + (keycode - 48);
			*/
			//sports mode requirement: do not change channel
			break;
		case top.VK_MUTE:
		case top.VK_VOLUME_UP:
		case top.VK_VOLUME_DOWN:
			top.keyDownProcess(e);
			break;
		default:
			break;
	}	
}

function toUp()
{
	if(focusOn == ft_zoomMode)
	{
		blurDirectionMovement(MOVE_UP);
	}
	else if(focusOn == ft_zooming)
	{
		zoomingMovement(MOVE_UP);
	}
	else if(focusOn == ft_menu)//pre api for potential requirement
	{
		focusOn = ft_seekBar;
		seekTime = pvr.recordingTimeLength() - pvr.timeshiftCurrentShiftOffset();
		$("offsetTime").style.color = top.uiColourStyle;
		setMenuBarFocus(1, menuBarIndex);
		refreshMenuTimer();
	}
}

function toDown()
{
	if(focusOn == ft_zoomMode)
	{
		blurDirectionMovement(MOVE_DOWN);
	}
	else if(focusOn == ft_zooming)
	{
		zoomingMovement(MOVE_DOWN);
	}
	else if(focusOn == ft_seekBar)//pre api for potential requirement
	{
		toBack();
		refreshMenuTimer();
	}
}

function toLeft()
{
	switch(focusOn)
	{
		case ft_zoomMode:
			blurDirectionMovement(MOVE_LEFT);
			break;
		case ft_zooming:
			zoomingMovement(MOVE_LEFT);
			break;
		case ft_menu:
			setMenuBarFocus(0, -1);
			refreshMenuTimer();
			break;
		case ft_exit:
			list_position_h = list_position_h == 0 ? 1 : 0;
			$("remindFocus").style.left = FORM_START + list_position_h * FORM_STEP + "px";
			break;
		case ft_seekBar://pre api for potential requirement
			//break;
			checkSeekTime(0);
			refreshMenuTimer();
			break;
		case ft_cec:
		case ft_pin8:
			list_position_h = list_position_h == 0 ? 1 : 0;
			$("remindFocus").style.left = FORM_START + list_position_h * FORM_STEP + "px";
			break;
		default:
			break;
	}
	return;
}

function toRight()
{
	switch(focusOn)
	{
		case ft_zoomMode:
			blurDirectionMovement(MOVE_RIGHT);
			break;
		case ft_zooming:
			zoomingMovement(MOVE_RIGHT);
			break;
		case ft_menu:
			setMenuBarFocus(0, 1);
			refreshMenuTimer();
			break;
		case ft_exit:
			list_position_h = list_position_h == 0 ? 1 : 0;
			$("remindFocus").style.left = FORM_START + list_position_h * FORM_STEP + "px";
			break;
		case ft_seekBar://pre api for potential requirement
			//break;
			checkSeekTime(1);
			refreshMenuTimer();
			break;
		case ft_cec:
		case ft_pin8:
			list_position_h = list_position_h == 0 ? 1 : 0;
			$("remindFocus").style.left = FORM_START + list_position_h * FORM_STEP + "px";
		default:
			break;
	}
}

function doEnter()
{
	switch(focusOn)
	{
		case ft_zooming:
			zoomingPic(0);
			break;
		case ft_zoomMode:
			zoomingPic(1);
			break;
		case ft_screen:
			displayMenuBar(1);
			break;
		case ft_menu:
			doMenuFunction();
			break;
		case ft_exit:
			if(list_position_h == 0)
			{
				doExit(1);
			}
			else
			{
				hideRemind();
			}
			break;
		case ft_seekBar:
			toSeek(recordedDuration - seekTime);
			refreshMenuTimer();
			break;
		case ft_pin8:
		case ft_cec:
			if(list_position_h == 0)
			{
				if(playStatus == p_slowMove)
				{
					pvr.mediaResume();
				}
				top.timeShiftStatusFlag = 0;
				setting.footballMode = 0;//turn off
				pvr.timeshiftStop();
				pvr.returnToLive();//返回实时播放页面
				pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
				channel.inputSource = urlValues;
				setTimeout(function(){
					top.$("main").src = "channelPlay.html";
					top.setFrameFocusPage("main");
					if(powerOffFlag)
					{
						top.g_setting.powerOff(0);
						top.showMute(0);
						top.toPowerOff();
					}
				},1000);
			}
			else
			{
				hideRemind();
			}
			break;
	}
	return;//test
}

function toBack()//new added
{
	switch(focusOn)
	{
		case ft_zooming:
			zoomingPic(0);
			break;
		case ft_zoomMode:
			displayZoomMode(0);
			break;
		case ft_menu:
			displayMenuBar(0);
			break;
		case ft_exit:
			hideRemind();
			break;
		case ft_seekBar:
			//break;
			focusOn = ft_menu;
			$("offsetTime").style.color = "#fff";
			setMenuBarFocus(1, menuBarIndex);
			refreshTimeBar();
			refreshMenuTimer();
			break;
		default:
			break;
	}
}

function doExit(type)//type:[0]display exit tips; [1]directly exit
{
	if(type == 0)
	{
		if(focusOn == ft_zooming || focusOn === ft_zoomMode)
		{
			displayZoomMode(0);
		}
		else if(focusOn == ft_menu)
		{
			displayMenuBar(0);
		}
		focusOn = ft_exit;
		showRemind();
	}
	else if(type == 1)
	{
		if(playStatus == p_slowMove)
		{
			pvr.mediaResume();
		}
		top.timeShiftStatusFlag = 0;
		setting.footballMode = 0;//turn off
		pvr.timeshiftStop();
		pvr.returnToLive();//返回实时播放页面
		pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
		setTimeout(function(){
			top.$("main").src = "channelPlay.html";
			top.setFrameFocusPage("main");
			if(powerOffFlag)
			{
				top.g_setting.powerOff(0);
				top.showMute(0);
				top.toPowerOff();
			}
		},1000);
		return;
	}
}

function doMenuFunction()
{
	switch(menuBarIndex)
	{
		case MENU_BAR_AIR:
			toAirPlay();
			refreshMenuTimer();
			break;
		case MENU_BAR_FR:
			toFastBackwardKey();
			setMenuBarFocus(1, menuBarIndex);
			break;
		case MENU_BAR_PP:
			toPauseOrPlayKey();
			setMenuBarFocus(1, menuBarIndex);
			break;
		case MENU_BAR_FF:
			toFastForwardKey();
			setMenuBarFocus(1, menuBarIndex);
			break;
		case MENU_BAR_SM:
			toSlowMove();
			setMenuBarFocus(1, menuBarIndex);
			break;
		case MENU_BAR_ZOOM:
			if(playStatus != p_pause)
			{
				toPause();
			}
			zoomScreenShot();
			displayMenuBar(0);
			displayZoomMode(1);
			break;
		case MENU_BAR_EXIT:
			doExit(0);
			break;
	}
}

function toPauseOrPlayKey()
{
	if(focusOn == ft_menu || focusOn == ft_screen)
	{
		displayMenuBar(1);
		setMenuBarFocus(1, MENU_BAR_PP);
		frStep = 1;
		ffStep = 1;
		smStep = 1;
		if(playStatus == p_pause || playStatus == p_fastBackward 
			|| playStatus == p_fastForward || playStatus == p_slowMove)
		{
			playStatus = p_play;
			pvr.mediaResume();
			showPlayStatus(playStatus, 0);
		}
		else if(playStatus == p_play)
		{
			playStatus = p_pause;
			pvr.mediaPause();
			showPlayStatus(playStatus, 0);
		}
		setMenuBarFocus(1, MENU_BAR_PP);
	}
}

function toPause()
{
	frStep = 1;
	ffStep = 1;
	smStep = 1;
	
	playStatus = p_pause;
	pvr.mediaPause();
	showPlayStatus(playStatus, 0);
}

function toPlay()
{
	frStep = 1;
	ffStep = 1;
	smStep = 1;
	
	playStatus = p_play;
	pvr.mediaResume();
	showPlayStatus(playStatus, 0);
}

function toAirPlay()
{
	pvr.setSeekPoint(pvr.recordingTimeLength());
	airButtonStatus = false;
	frButtonStatus = true;
	ffButtonStatus = false;
	playStatus = p_play;
	showPlayStatus(playStatus, 0);
	setMenuBarFocus(1, MENU_BAR_PP);
}

function toSeek(seekPoint)//pre api for potential seek requirement 
{
	pvr.setSeekPoint(seekPoint);
	playStatus = p_play;
	showPlayStatus(playStatus, 0);
	setMenuBarFocus(1, MENU_BAR_PP);
}

function toSlowMove()
{
	if(focusOn == ft_menu)
	{
		ffStep = 1;
		frStep = 1;
		if(playStatus == p_pause)//back to play
		{
			if(!playStatusFistChangingFlag)
			{
				playStatusFistChangingFlag = true;
			}
			pvr.mediaResume();
			return;
		}
		if(smStep == 4)//max: 4x
		{
			smStep = 1;
			pvr.mediaSlowForward(smStep);
			playStatus = p_play;
			showPlayStatus(playStatus, 0);
		}
		else
		{
			smStep *= 2;
			pvr.mediaSlowForward(smStep);
			playStatus = p_slowMove;
			showPlayStatus(playStatus, smStep);
		}
		setMenuBarFocus(1, MENU_BAR_SM);
	}
}

function toFastBackwardKey()
{
	if(focusOn == ft_menu || focusOn == ft_screen)
	{
		if(checkCurrentRecordingStatus() == -1)
		{
			return;
		}
		ffStep = 1;
		smStep = 1;
		if(playStatus == p_pause)
		{
			if(!playStatusFistChangingFlag)
			{
				playStatusFistChangingFlag = true;
			}
			pvr.mediaResume();
			return;
		}
		//快退和快进时，录制节目处于非播放状态，所以下面设置时必要的		
		if(frStep == 32)
		{
			frStep = 1;
			pvr.mediaFastBackward(frStep);
			playStatus = p_play;
			showPlayStatus(playStatus, 0);
		}
		else
		{
			frStep *= 2;
			pvr.mediaFastBackward(frStep);
			playStatus = p_fastBackward;
			showPlayStatus(playStatus, frStep);
		}
		setMenuBarFocus(1, MENU_BAR_FR);
	}
}

function toFastForwardKey()
{
	if(focusOn == ft_menu || focusOn == ft_screen)
	{
		if(checkCurrentRecordingStatus() == 1)
		{
			return;
		}
		frStep = 1;
		smStep = 1;
		if(playStatus == p_pause)
		{
			if(!playStatusFistChangingFlag)
			{
				playStatusFistChangingFlag = true;
			}
			pvr.mediaResume();
			return;
		}
		//快退和快进时，录制节目处于非播放状态，所以下面设置时必要的
		if(ffStep == 32)
		{
			ffStep = 1;
			pvr.mediaFastForward(ffStep);
			//playStatus = p_play;
			//showPlayStatus(playStatus, 0);
		}
		else
		{
			ffStep = ffStep*2;
			pvr.mediaFastForward(ffStep);
			playStatus = p_fastForward;
			showPlayStatus(playStatus, ffStep);
		}
		setMenuBarFocus(1, MENU_BAR_FF);
	}
}

/*
描述：接收到E_PVR_TIMESHIFT_AUTO_START消息自动播放timeshift，可能原因是录制允许的空间不够，需要播放掉一部分来删除空间
*/
function autoPlay()
{
	frStep = 1;
	ffStep = 1;
	if(playStatus == p_pause || playStatus == p_fastBackward 
		|| playStatus == p_fastForward || playStatus == p_slowMove)
	{
		playStatus = p_play;
		pvr.recordedPlayKeyHandler(E_PVR_KEY_PAUSE_PLAY);//播放time shift
		showPlayStatus(playStatus, 0);
	}
	$("autoDisapearedForm").innerText = notEnoughSpace;
	$("autoDisapearedForm").style.display = "block";
	setTimeout(function(){$("autoDisapearedForm").style.display = "none";},3000);
	refreshRemindTimer();
	if(focusOn == ft_zoomMode || focusOn == ft_zooming)//while zooming
	{
		displayZoomMode(0);
	}
	setMenuBarFocus(1, MENU_BAR_PP);
}

//type: [0]normal [1]set specific option
//direction: 
//in type 0: [-1]left 1 right
//in type 1: [direction]refresh menu option index
function setMenuBarFocus(type, direction)
{
	if(type == 0)
	{
		clearTimeout(menuDisplayTimer);
		switch(menuBarIndex)
		{
			case MENU_BAR_AIR:
				menuBarImgs[menuBarIndex].src = "../images/sportsMode/icon-woa.png";
				break;
			case MENU_BAR_FR:
				menuBarImgs[menuBarIndex].src = "../images/sportsMode/icon-fr.png";
				break;
			case MENU_BAR_PP:
				if(playStatus == p_pause || playStatus == p_fastForward 
					|| playStatus == p_fastBackward || playStatus == p_slowMove)
				{
					menuBarImgs[menuBarIndex].src = "../images/sportsMode/icon-play.png";
				}
				else if(playStatus == p_play)
				{
					menuBarImgs[menuBarIndex].src = "../images/sportsMode/icon-pause.png";
				}
				break;
			case MENU_BAR_FF:
				menuBarImgs[menuBarIndex].src = "../images/sportsMode/icon-ff.png";
				break;
			case MENU_BAR_SM:
				menuBarImgs[menuBarIndex].src = "../images/sportsMode/icon-sm.png";
				break;
			case MENU_BAR_ZOOM:
				menuBarImgs[menuBarIndex].src = "../images/sportsMode/icon-zoom.png";
				break;
			case MENU_BAR_EXIT:
				menuBarImgs[menuBarIndex].src = "../images/sportsMode/icon-exit.png";
				break;
			default:
				break;
		}

		menuBarIndex = parseInt(((menuBarIndex + direction + 7) % 7), 10);//menu list count[7]
		do
		{
			if((!airButtonStatus && menuBarIndex == MENU_BAR_AIR)
				|| (!frButtonStatus && menuBarIndex == MENU_BAR_FR)
				|| (!ffButtonStatus && menuBarIndex == MENU_BAR_FF))
			{
				menuBarIndex = parseInt(((menuBarIndex + direction + 7) % 7), 10);//menu list count[7]
			}
			else
			{
				break;
			}
		}while(1);

		switch(menuBarIndex)
		{
			case MENU_BAR_AIR:
				menuBarImgs[menuBarIndex].src = "../images/sportsMode/icon-woa-f.png";
				break;
			case MENU_BAR_FR:
				menuBarImgs[menuBarIndex].src = "../images/sportsMode/icon-fr-f.png";
				break;
			case MENU_BAR_PP:
				if(playStatus == p_pause || playStatus == p_fastForward 
					|| playStatus == p_fastBackward || playStatus == p_slowMove)
				{
					menuBarImgs[menuBarIndex].src = "../images/sportsMode/icon-play-f.png";
				}
				else if(playStatus == p_play)
				{
					menuBarImgs[menuBarIndex].src = "../images/sportsMode/icon-pause-f.png";
				}
				break;
			case MENU_BAR_FF:
				menuBarImgs[menuBarIndex].src = "../images/sportsMode/icon-ff-f.png";
				break;
			case MENU_BAR_SM:
				menuBarImgs[menuBarIndex].src = "../images/sportsMode/icon-sm-f.png";
				break;
			case MENU_BAR_ZOOM:
				menuBarImgs[menuBarIndex].src = "../images/sportsMode/icon-zoom-f.png";
				break;
			case MENU_BAR_EXIT:
				menuBarImgs[menuBarIndex].src = "../images/sportsMode/icon-exit-f.png";
				break;
			default:
				break;
		}
		menuDisplayTimer = setTimeout(function(){
			focusOn = ft_screen;
			$("sportsModeMenuBar").style.display = 'none';
		}, 15000);
	}
	else if(type == 1)//special situiation, would use direction for reseting index
	{
		menuBarImgs[0].src = airButtonStatus
			? "../images/sportsMode/icon-woa.png" : "../images/sportsMode/icon-woa-d.png";
		menuBarImgs[1].src = frButtonStatus 
			? "../images/sportsMode/icon-fr.png" : "../images/sportsMode/icon-fr-d.png";
		menuBarImgs[2].src = (playStatus == p_pause || playStatus == p_fastBackward 
			|| playStatus == p_fastForward || playStatus == p_slowMove) 
			? "../images/sportsMode/icon-play.png" : "../images/sportsMode/icon-pause.png";
		menuBarImgs[3].src = ffButtonStatus
			? "../images/sportsMode/icon-ff.png" : "../images/sportsMode/icon-ff-d.png";
		menuBarImgs[4].src = "../images/sportsMode/icon-sm.png";
		menuBarImgs[5].src = "../images/sportsMode/icon-zoom.png";
		menuBarImgs[6].src = "../images/sportsMode/icon-exit.png";
		
		if(focusOn == ft_seekBar)
		{
			return;
		}

		menuBarIndex = direction;
		switch(menuBarIndex)
		{
			case MENU_BAR_AIR:
				menuBarImgs[menuBarIndex].src = "../images/sportsMode/icon-woa-f.png";
				break;
			case MENU_BAR_FR:
				menuBarImgs[menuBarIndex].src = "../images/sportsMode/icon-fr-f.png";
				break;
			case MENU_BAR_PP:
				if(playStatus == p_pause || playStatus == p_fastForward 
					|| playStatus == p_fastBackward || playStatus == p_slowMove)
				{
					menuBarImgs[menuBarIndex].src = "../images/sportsMode/icon-play-f.png";
				}
				else if(playStatus == p_play)
				{
					menuBarImgs[menuBarIndex].src = "../images/sportsMode/icon-pause-f.png";
				}
				break;
			case MENU_BAR_FF:
				menuBarImgs[menuBarIndex].src = "../images/sportsMode/icon-ff-f.png";
				break;
			case MENU_BAR_SM:
				menuBarImgs[menuBarIndex].src = "../images/sportsMode/icon-sm-f.png";
				break;
			case MENU_BAR_ZOOM:
				menuBarImgs[menuBarIndex].src = "../images/sportsMode/icon-zoom-f.png";
				break;
			case MENU_BAR_EXIT:
				menuBarImgs[menuBarIndex].src = "../images/sportsMode/icon-exit-f.png";
				break;
			default:
				break;
		}
	}
}

/*
描述：根据播放状态显示播放状态
*/
function showPlayStatus(status, value)
{
	switch(status)
	{
		case p_play:
			$("playStatusImg").src = playStatusImgs[1];
			$("playStatusExtra").innerText = "";
			break;
		case p_pause:
			$("playStatusImg").src = playStatusImgs[2];
			$("playStatusExtra").innerText = "";
			break;
		case p_fastBackward:
			$("playStatusImg").src = playStatusImgs[3];
			$("playStatusExtra").innerText = value + "X";
			break;
		case p_fastForward:
			$("playStatusImg").src = playStatusImgs[4];
			$("playStatusExtra").innerText = value + "X";
			break;
		case p_slowMove:
			$("playStatusImg").src = playStatusImgs[5];
			$("playStatusExtra").innerText = "1/" + value + "X";
			break;
		default:
			break;
	}
}

/*
描述：根据当前的focusOn显示提示
*/
function showRemind()
{
	testLog("in show remind funciton");
	//面板按键处理场景设置
	setting.contextOf5in1 = top.CONTEXT_MENU_SELECT;
	
	if(remindAndMenuTimer)
	{
		clearTimeout(remindAndMenuTimer);
	}
	remindAndMenuTimer = 0;
	if(timeBarRefreshTimer)
	{
		clearInterval(timeBarRefreshTimer);
	}
	
	$('remindLeftWords').innerText = yesNoWords[0];
	$('remindRightWords').innerText = yesNoWords[1];
	$("remindName").innerText = tips;
	var remindDivs=$("remind").getElementsByTagName("div");
	switch(focusOn)
	{
		case ft_exit:
			$('remindWord').innerText = remindWords[0];
			remindDivs[0].style.display = "block";
			remindDivs[1].style.display = "block";
			$("remindFocus").style.display = "block";
			break;
		case ft_channelChange:
			$('remindWord').innerText = remindWords[2];
			remindDivs[0].style.display = "block";
			remindDivs[1].style.display = "block";
			$("remindFocus").style.display = "block";
			break;
		case ft_cec:
			$('remindWord').innerText = remindWords[4];
			remindDivs[0].style.display = "block";
			remindDivs[1].style.display = "block";
			$("remindFocus").style.display = "block";
			break;
		case ft_pin8://scart
			$('remindWord').innerText = remindWords[3];
			remindDivs[0].style.display = "block";
			remindDivs[1].style.display = "block";
			$("remindFocus").style.display = "block";
			break;
		case "guide"://进入guide
			$('remindWord').innerText = remindWords[7];
			remindDivs[0].style.display = "block";
			remindDivs[1].style.display = "block";
			$("remindFocus").style.display = "block";
			break;
		case "channelList":
			$('remindWord').innerText = remindWords[10];
			remindDivs[0].style.display = "block";
			remindDivs[1].style.display = "block";
			$("remindFocus").style.display = "block";
			break;
		case "Fav":
			$('remindWord').innerText = remindWords[10];
			remindDivs[0].style.display = "block";
			remindDivs[1].style.display = "block";
			$("remindFocus").style.display = "block";
			break;
		case ft_homePage://进入homePage
			$('remindWord').innerText = remindWords[10];
			remindDivs[0].style.display = "block";
			remindDivs[1].style.display = "block";
			$("remindFocus").style.display = "block";
			break;
		case "gotoRecord":
			$('remindWord').innerText = remindWords[10];
			remindDivs[0].style.display = "block";
			remindDivs[1].style.display = "block";
			$("remindFocus").style.display = "block";
			break;
		case "gotoPvrList":
			$('remindWord').innerText = remindWords[10];
			remindDivs[0].style.display = "block";
			remindDivs[1].style.display = "block";
			$("remindFocus").style.display = "block";
			break;
		case "inputsource":
			$('remindWord').innerText = remindWords[9];
			remindDivs[0].style.display = "block";
			remindDivs[1].style.display = "block";
			$("remindFocus").style.display = "block";
			break;
		case "media":
			$('remindWord').innerText = remindWords[8];
			remindDivs[0].style.display = "block";
			remindDivs[1].style.display = "block";
			$("remindFocus").style.display = "block";
			break;
		case ft_usbRemove:
			top.timeShiftStatusFlag = 0;
			$('remindWord').innerText = remindWords[1];
			remindDivs[0].style.display = "none";
			remindDivs[1].style.display = "none";
			$("remindFocus").style.display = "none";
			displayMenuBar(0);
			var str = "doExit(1);";
			setTimeout(str, 3000);
			break;
		case ft_notAvailable://invalid service,no signal,data only等
			top.timeShiftStatusFlag = 0;
			$('remindWord').innerText = remindWords[5];
			remindDivs[0].style.display = "none";
			remindDivs[1].style.display = "none";
			$("remindFocus").style.display = "none";
			//var str = "pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/top.$(\"main\").src = \"channelPlay.html\";";
			var str = "doExit(1);";
			setTimeout(str, 3000);
			break;
		case ft_notSupport:
			top.timeShiftStatusFlag = 0;
			$('remindWord').innerText = remindWords[6];
			remindDivs[0].style.display = "none";
			remindDivs[1].style.display = "none";
			$("remindFocus").style.display = "none";
			//var str = "pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/top.$(\"main\").src = \"channelPlay.html\";";
			var str = "doExit(1);";
			setTimeout(str, 3000);
			break;
		case ft_noSpace:
			top.timeShiftStatusFlag = 0;
			$('remindWord').innerText = notEnoughSpace;
			remindDivs[0].style.display = "none";
			remindDivs[1].style.display = "none";
			$("remindFocus").style.display = "none";
			//var str = "pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/top.$(\"main\").src = \"channelPlay.html\";";
			var str = "doExit(1);";
			setTimeout(str, 3000);
		default:
			break;
	}
	list_position_h = 1;
	$("remindFocus").style.left = FORM_START + list_position_h*FORM_STEP + "px";
	$('remind').style.display = "block";
	$("sportsModeMenuBar").style.display = "none";
	refreshRemindTimer();
}

function hideRemind()
{
	if(powerOffFlag)
	{
		powerOffFlag = false;
	}
	focusOn = ft_screen;
	$('remind').style.display = "none";
}

function refreshRemindTimer()
{
	if(remindAndMenuTimer)
	{
		clearTimeout(remindAndMenuTimer);
	}
	remindAndMenuTimer = setTimeout(function(){hideRemind();}, 10000);
}

function refreshMenuTimer()
{
	if(menuDisplayTimer)
	{
		clearTimeout(menuDisplayTimer);
	}
	menuDisplayTimer = setTimeout(function(){displayMenuBar(0);}, 10000);
}

/*
*切分时间，将以秒为单位的时间切分出时，分，秒的字符串
*/
function doTime(time)
{
	//testLog("in doTime time = " + time);
	var hour = parseInt(time / 3600, 10);
	var minute =  parseInt((time - hour * 3600) / 60, 10);
	var second = time % 60;
	if(hour < 10)
	{
		hour = "0" + hour;
	}
	if(minute < 10)
	{
		minute = "0" + minute;
	}
	if(second < 10)
	{
		second = "0" + second;
	}
	return (hour + ":" + minute + ":" + second);
}

/*
description:refresh menu bar show status when menu bar show
*/
function refreshTimeBar()
{
	startTimeshiftTime = pvr.startTimeshiftTime();
	playBackOffsetTime = pvr.timeshiftCurrentShiftOffset();
	recordedDuration = pvr.recordingTimeLength();
	testLog("refreshTB test, startTimeshiftTime = " 
		+ startTimeshiftTime + ", playBackOffsetTime = " 
		+ playBackOffsetTime + ", recordedDuration = " + recordedDuration);
	if(focusOn == ft_seekBar || (playStatus == p_pause || 
		playStatus == p_fastForward || playStatus == p_fastBackward || playStatus == p_slowMove))
	{
		checkCurrentRecordingStatus();
		setMenuBarFocus(1, menuBarIndex);
	}

	$("sportsModeRecordBar").style.width = parseInt(recordedDuration / 6, 10) + "px";
	if(focusOn != ft_seekBar)//pre api for potential requirement
	{
		$("sportsModeTimepieceContent").style.left = (timeshiftFormOffsetPosition 
			-  parseInt((startTimeshiftTime + playBackOffsetTime - baseTime) / 6, 10)) + "px";
		$("sportsModeRecordBar").style.left = timeshiftBorderOffsetPosition - parseInt(playBackOffsetTime / 6, 10) + "px";
		$("offsetTime").innerText = "-" + doTime(recordedDuration -　playBackOffsetTime);
	}
}

//add for Sports mode
//return value define
//[0]current playing status is air-playing
//[1]current playing status is back-playing, but not the begining of recorded content;
//[-1]current playing status is back-playing, at the begining of the recorded content;
function currentBackPlayingPosition()
{
	recordedDuration = pvr.recordingTimeLength();
	playBackOffsetTime = pvr.timeshiftCurrentShiftOffset();

}

function isOverflowed(element)
{
    return element.scrollWidth > element.clientWidth;
}

/*
描述：填写从当前开始的后五个小时以内的时间片时间，每半个小时填写一次
para：
	[hour]: 起始时间的小时位；
	[minuteFlag]：0 当前时间分钟位没有过超过30，1 当前时间的分钟位超过30;
	[spanList]: 要填写的目标
*/
function insertAllTimePiece(hour, minuteFlag, spanList)
{
	for(var i = 0; i < spanList.length; i++)
	{
		if(hour < 24)
		{
			if(minuteFlag == 0)
			{
				spanList[i].innerText = hour + ":00";
				minuteFlag = 1;
			}
			else
			{
				spanList[i].innerText = hour + ":30";
				hour++;
				minuteFlag = 0;
			}
		}
		else
		{
			hour = 0;
			if(minuteFlag == 0)
			{
				spanList[i].innerText = hour + ":00";
				minuteFlag = 1;
			}
			else
			{
				spanList[i].innerText = hour + ":30";
				hour++;
				minuteFlag = 0;
			}
		}
	}
}

function initSportsModeUI()
{
	var times = setting.currentTime.split(":");//[0]hour [1]minute [2]second
	if(parseInt(times[1], 10) < 30)//current time minutes less than 30min
	{
		baseTime = parseInt(times[0], 10) * 3600;//current time in second
		insertAllTimePiece(parseInt(times[0], 10), 0, sportsModeBarSpanList);
	}
	else
	{
		baseTime = parseInt(times[0], 10) * 3600 + 30 * 60;
		insertAllTimePiece(parseInt(times[0], 10), 1, sportsModeBarSpanList);
	}
	airButtonStatus = false;
	frButtonStatus = true;
	ffButtonStatus = false;
	playStatus = p_play;
	focusOn = ft_menu;
	displayMenuBar(1);
	setMenuBarFocus(1, MENU_BAR_PP);
	showPlayStatus(playStatus, 0);
}

/*
供booking调用，目的是防止在选择开始录制预定的节目时跳转页面和本页面的定时隐藏冲突，可能导致该弹出pvr录制页面被channelPlay页面覆盖
*/
function bookingPreOperate()
{
	testLog("in timeshfit bookingPreOperate");
	hideRemind();
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){
		evt.preventDefault();
		if(evt.button == 2)
		{
			if(focusOn == ft_menu || focusOn == ft_zoomMode || focusOn == ft_zooming || focusOn == ft_seekBar)
			{
				toBack();
			}
			else if(focusOn == ft_screen)
			{
				doEnter();
			}
		}
	}
	
	for(var i = 0; i < bottomFormImgList.length; i++)//menu icons
	{
		bottomFormImgList[i].setAttribute("newAttr", i);
		bottomFormImgList[i].onmousedown = function(evt){
			refreshRemindTimer();
			if(evt.button == 0){//left key
				if(focusOn == ft_seekBar)
				{
					toBack();
				}
				switch(parseInt(this.getAttribute("newAttr")))
				{
					case 0://air
						menuBarIndex = MENU_BAR_AIR;
						break;
					case 1://FB
						menuBarIndex = MENU_BAR_FR;
						break;
					case 2://P&P
						menuBarIndex = MENU_BAR_PP;
						break;
					case 3://FF
						menuBarIndex = MENU_BAR_FF;
						break;
					case 4://slow move
						menuBarIndex = MENU_BAR_SM;
						break;
					case 5://zoom
						menuBarIndex = MENU_BAR_ZOOM;
						break;
					case 6://exit
						menuBarIndex = MENU_BAR_EXIT;
						break;
				}
				setMenuBarFocus(1, menuBarIndex);
				doMenuFunction();
			}
			evt.stopPropagation();
		}
	}
	
	for(var i = 0; i < 2; i++)//tips frame
	{
		dialogButtonClassList[i].setAttribute("newAttr", i);
		dialogButtonClassList[i].onmousedown = function(evt){
			if(evt.button == 0 && focusOn == ft_exit)
			{
				list_position_h = parseInt(this.getAttribute("newAttr"));
				$("remindFocus").style.left = FORM_START + list_position_h * FORM_STEP + "px";
				doEnter();
			}
			evt.stopPropagation();
		}
	}

	for(var i = 0; i < blurBoxList.length; i++)//zoom frame
	{
		blurBoxList[i].setAttribute("newAttr", i);
		blurBoxList[i].onmousedown = function(evt){
			if(evt.button == 0 && focusOn == ft_zoomMode)
			{
				$("blur_" + zoomMoveIndex).style.display = "block";
				zoomMoveIndex = parseInt(this.getAttribute("newAttr"));
				$("blur_" + zoomMoveIndex).style.display = "none";
				$("blurFocusBox").style.top = parseInt(zoomMoveIndex / 3) * 360 + "px";
				$("blurFocusBox").style.left = parseInt(zoomMoveIndex % 3) * 640 + "px";
				zoomingPic(1);
			}
			evt.stopPropagation();
		}
	}
}

function displayMenuBar(type)//[0]hide [1]show
{
	if(menuDisplayTimer)
	{
		clearTimeout(menuDisplayTimer);
	}
	if(timeBarRefreshTimer)
	{
		clearInterval(timeBarRefreshTimer);
	}
	if(type)
	{
		focusOn = ft_menu;
		refreshTimeBar();
		setMenuBarFocus(1, menuBarIndex);
		$("sportsModeMenuBar").style.display = 'block';
		timeBarRefreshTimer = setInterval(function(){refreshTimeBar();}, 900);
		menuDisplayTimer = setTimeout(function(){
			focusOn = ft_screen;
			clearInterval(timeBarRefreshTimer);
			$("sportsModeMenuBar").style.display = 'none';
		}, 15000);
	}
	else
	{
		if(focusOn == ft_seekBar)
		{
			$("offsetTime").style.color = "#fff";
		}
		focusOn = ft_screen;
		$("sportsModeMenuBar").style.display = 'none';
	}
}

function zoomingPic(type)//[0]exit zooming [1]zooming
{
	clearTimeout(zoomModeTimer);
	if(type)
	{
		focusOn = ft_zooming;
		$("blurFrame").style.display = "none";
		$("zoomPic").style.width = 1920 * 3 + "px";
		$("zoomPic").style.height = 1080 * 3 + "px";
		$("zoomPic").style.top = - parseInt(zoomMoveIndex / 3) * 360 * 3 + "px";
		$("zoomPic").style.left = - parseInt(zoomMoveIndex % 3) * 640 * 3 + "px";
	}
	else
	{
		focusOn = ft_zoomMode;
		$("blurFrame").style.display = "block";
		$("zoomPic").style.width = 1920 + "px";
		$("zoomPic").style.height = 1080 + "px";
		$("zoomPic").style.top = 0 + "px";
		$("zoomPic").style.left = 0 + "px";
	}
	zoomModeTimer = setTimeout(function(){
		displayZoomMode(0);
	}, 5000);
}

function displayZoomMode(type)//[1]show [0]hide
{
	clearTimeout(zoomModeTimer);
	if(type)//show
	{
		focusOn = ft_zoomMode;
		$("blurFrame").style.display = "block";
		$("zoomPic").style.width = 1920 + "px";
		$("zoomPic").style.height = 1080 + "px";
		$("zoomPic").style.top = 0 + "px";
		$("zoomPic").style.left = 0 + "px";
		$("blurFocusBox").style.top = "360px";
		$("blurFocusBox").style.left = "640px";
		$("blur_" + zoomMoveIndex).style.display = "block";
		$("blur_" + 4).style.display = "none";
		zoomMoveIndex = 4;
		$("zoomPic").src = picPath + "?" + new Date().getTime();
		$("zoomFrame").style.display = "block";
		zoomModeTimer = setTimeout(function(){
			displayZoomMode(0);
		}, 5000);
	}
	else//hide
	{
		$("zoomFrame").style.display = "none";
		//if(playStatus != p_play)
		{
			toPlay();
		}
		displayMenuBar(1);
	}
}

function zoomingMovement(direction)//direction: MOVE_UP  MOVE_DOWN  MOVE_LEFT  MOVE_RIGHT
{
	clearTimeout(zoomModeTimer);
	var tmp = zoomMoveIndex + direction;
	switch(direction)
	{
		case MOVE_UP:
			tmp = parseInt(zoomMoveIndex / 3) == 0 ? zoomMoveIndex - direction * 2 : tmp;
			$("blurFocusBox").style.top = parseInt(tmp / 3) * 360 + "px";
			$("zoomPic").style.top = - parseInt(tmp / 3) * 360 * 3 + "px";
			break;
		case MOVE_DOWN:
			tmp = parseInt(zoomMoveIndex / 3) == 2 ? zoomMoveIndex - direction * 2 : tmp;
			$("blurFocusBox").style.top = parseInt(tmp / 3) * 360 + "px";
			$("zoomPic").style.top = - parseInt(tmp / 3) * 360 * 3 + "px";
			break;
		case MOVE_LEFT:
			tmp = parseInt(zoomMoveIndex % 3) == 0 ? zoomMoveIndex - direction * 2 : tmp;
			$("blurFocusBox").style.left = parseInt(tmp % 3) * 640 + "px";
			$("zoomPic").style.left = - parseInt(tmp % 3) * 640 * 3 + "px";
			break;
		case MOVE_RIGHT:
			tmp = parseInt(zoomMoveIndex % 3) == 2 ? zoomMoveIndex - direction * 2 : tmp;
			$("blurFocusBox").style.left = parseInt(tmp % 3) * 640 + "px";
			$("zoomPic").style.left = - parseInt(tmp % 3) * 640 * 3 + "px";
			break;
		default:
			break;
	}
	$("blur_" + zoomMoveIndex).style.display = "block";
	$("blur_" + tmp).style.display = "none";
	zoomMoveIndex = tmp;

	zoomModeTimer = setTimeout(function(){
		displayZoomMode(0);
	}, 5000);
}

function blurDirectionMovement(direction)//direction: MOVE_UP  MOVE_DOWN  MOVE_LEFT  MOVE_RIGHT
{
	clearTimeout(zoomModeTimer);
	var tmp = zoomMoveIndex + direction;
	switch(direction)
	{
		case MOVE_UP:
			tmp = parseInt(zoomMoveIndex / 3) == 0 ? zoomMoveIndex - direction * 2 : tmp;
			$("blurFocusBox").style.top = parseInt(tmp / 3) * 360 + "px";
			break;
		case MOVE_DOWN:
			tmp = parseInt(zoomMoveIndex / 3) == 2 ? zoomMoveIndex - direction * 2 : tmp;
			$("blurFocusBox").style.top = parseInt(tmp / 3) * 360 + "px";
			break;
		case MOVE_LEFT:
			tmp = parseInt(zoomMoveIndex % 3) == 0 ? zoomMoveIndex - direction * 2 : tmp;
			$("blurFocusBox").style.left = parseInt(tmp % 3) * 640 + "px";
			break;
		case MOVE_RIGHT:
			tmp = parseInt(zoomMoveIndex % 3) == 2 ? zoomMoveIndex - direction * 2 : tmp;
			$("blurFocusBox").style.left = parseInt(tmp % 3) * 640 + "px";
			break;
		default:
			break;
	}
	$("blur_" + zoomMoveIndex).style.display = "block";
	$("blur_" + tmp).style.display = "none";
	zoomMoveIndex = tmp;

	zoomModeTimer = setTimeout(function(){
		displayZoomMode(0);
	}, 5000);
}

function zoomScreenShot()
{
	//[255]default  [0, 0]x/y [1920, 1080]width/height [picPath]pic saving path [2]Video layer
	setting.pictureSnapshot(255, 0, 0, 1920, 1080, picPath, 2);
}

//
function checkCurrentRecordingStatus()
{
	//startTimeshiftTime = pvr.startTimeshiftTime();
	playBackOffsetTime = pvr.timeshiftCurrentShiftOffset();
	recordedDuration = pvr.recordingTimeLength();

	//at the end of the recorded part, can go back to air play or do ff
	if(playBackOffsetTime == 0)
	{
		airButtonStatus = true;
		frButtonStatus = false;
		ffButtonStatus = true;
		return -1;
	}
	//in the middle of the recorded part, can go back to air play or do ff or fr
	else if(playBackOffsetTime > 0 && playBackOffsetTime < recordedDuration)
	{
		airButtonStatus = true;
		frButtonStatus = true;
		ffButtonStatus = true;
		return 0;
	}
	//at the begging of recorded part, can do fr
	else if(playBackOffsetTime == recordedDuration)
	{
		airButtonStatus = false;
		frButtonStatus = true;
		ffButtonStatus = false;
		return 1;
	}
}

function checkSeekTime(type)//[0]left [1]right
{
	if(type == 0)//to left
	{
		seekTime = seekTime + SEEK_TIME_PIECE * 6 < recordedDuration ? seekTime + SEEK_TIME_PIECE * 6 : recordedDuration;
	}
	else//to right
	{
		seekTime = seekTime - SEEK_TIME_PIECE * 6 > 0 ? seekTime - SEEK_TIME_PIECE * 6 : 0;
	}
	$("sportsModeTimepieceContent").style.left = (timeshiftFormOffsetPosition 
		-  parseInt((startTimeshiftTime + recordedDuration - seekTime - baseTime) / 6, 10)) + "px";
	$("sportsModeRecordBar").style.left = timeshiftBorderOffsetPosition - parseInt((recordedDuration - seekTime) / 6, 10) + "px";
	$("offsetTime").innerText = "-" + doTime(seekTime);
}