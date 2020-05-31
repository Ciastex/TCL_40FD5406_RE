var playListStart = 0;
var playListIndex = 0;
var playListNum = 0;
var playListFocusIndex = 0;
var currentPlayList = "";
var optionFocusIndex_1 = 0;
var optionFocusIndex_2 = 0;
var focusTab = 0;//[0]displayArea, [1]option, [2]optionList, [3]playList, [4]progressBar
var lastFocusTab = 0;
var focusTabIndex = 0;
var playStatus = -1;//playing/pause/error
var fileDuration = 0;//the current time of playing media file
var currentFileInfo = "";
var pauseableFlag = 1;
var seekableFlag = 1;
var elapsed = 0;
var BACK_LIGHT_FLAG = 1;
var seekStatusFlag = false;
var dmrFlag = false;
var musicFileInfo = "";
var PLAYLIST_MAX_LENGTH = 12;
var SCROLL_MAX_HEIGHT = 960;
var PROGRESS_START_LEFT_OFFSET = 290;
var optionListName = "optionInfo";
var optionListContentName = "optionInfoContent";
var optionSecContentName = "optionSecLi_";
var scrollBarName = "scrollBar";
var playListScrollName = "playlistScrollBar";
var ff_fb_flag = 0;
var focusDisplayFlag = true;
var clickIndexAttri = "indexAttri";
var errorFlag = 0;
var RC_TYPE = "ro.sita.model.MODEL_RCU_NAME_CFG.RCU_NAME";

var OPTION_MAX_COUNT = 3;
var OPTION_INFO_COUNT = 0;
var MAX_LENGTH_ONE_PAGE = 0;
var menuFocusIndex = 0;
var seekCount = 0;
var seekPoint = 0;//
var seekStartTime = 0;
var seekSettingTimer = 0;
var playTipsTimer = 0;
var dmrExitTimer = 0;
var infoBoxTimer = 0;
var SEEK_TIME_DELAY = 2000;
var playListAnimateTime = 201;//201 1
var menuImgTag = 0;
var informationSpan = 0;
var repeatMode = 0;//[0]normal, [1]random, [2]repeat all, [3] repeat one
var musicBGPlay = 0; //[0] not bg play [1] bg playing

var OPTION_COUNT = 3;//[4]include bgm
var MENU_COUNT = 5;
var OPTION_SOUND_PRESET = 0;
//var OPTION_BGM			= 1;
var OPTION_AUDIO_ONLY	= 1;
var OPTION_INFORMATION	= 2;
var SOUND_MODE 			= 0;
//var BGM_MODE 			= 1;
var AUDIO_ONLY_MODE 	= 1;

var progressBarLeftDistance = 160 + 135;
var cpTopDistance = 60;
var cpFlagHeight = 80;
var BAR_LENGTH = 1330;
var SEEK_TIME = 10;
var OPERATION_TIME = 50;
var REFRESH_TIME = 250;
var FADE_TIME = 5000;
var FADE_TIME_15 = 15000;
var playListLeftDistance = 1220;
var screenWidth = 1920;
var focusOptionHeight = 80;
var focusOptionTopDistance = 103;
var progressBarPercent = 0;

var S_PLAY = 1;
var S_PAUSE = 2;
var S_END = 3;
var S_PRE = 4;
var S_NEXT = 5;
var S_FF_FB = 6;
var S_ERROR = -1;

var ENTER_DLNA_TYPE = 1;
var ERROR_DEFAULT			= -1;
var ERROR_CANT_OPEN 		= 7;
var ERROR_NET_DISCONNECTED 	= 11;

var MENU_FB = -1;
var MENU_PRE = -1;
var MENU_P_P = -1;
var MENU_NEXT = -1;
var MENU_FF = -1;
var MENU_MODE = -1;
var MENU_LIST = -1;

var DISPLAY_AREA = 			0;
var OPTION_AREA = 			1;
var OPTION_DETAIL_AREA = 	2;
var PLAY_LIST_AREA = 		3;
var PROGRESS_AREA = 		4;
var INFO_AREA =				5;
var TIPS_AREA = 			6;
var SOUND_PRESET_AREA = 	7;
var E_LOCATION_HOME = 0;

//lyric test
var iScrollAmount 		= 10;
var iLineCount 			= 0;
var iLineHeight 		= 70;
var lyricScrollTimer 	= 0;
var currentLyricLine 	= 0;
var nextLyricLine    	= 0;
var lyricScrollCount 	= iLineHeight / iScrollAmount;
//end of test

var optionInfoArray = new Array(6);//[0]picture preset, [1]screen mode, [2]3d mode, [3]subtitle, [4]sound track, [5]infomation
//var soundPresetArray = top.musicSoundPresetArray;
//modified for football mode: "Music","Movie","Voice","Standard","Stadium","Personal"
var soundPresetArray = [top.souPreset[0], top.souPreset[1], top.souPreset[2],
						top.souPreset[3], top.resetStadium, top.souPreset[4]];
var informationArray = top.musicInformationArray;
var playTipsInfo = top.playTipsInfo;
var musicNameInfo = top.musicNameInfo;
var musicArtistInfo = top.musicArtistInfo;
var musicAlbumInfo = top.musicAlbumInfo;
var optionSoundPresetInfo = top.optionSoundPresetInfo;
var optionBGMInfo = top.optionBGMInfo;;
var optionAudioOnlyInfo = top.optionAudioOnlyInfo;
var optionInfo = top.optionInfoText;
var fileNameText = top.fileNameText;
var fileDurationText = top.fileDurationText;
var fileArtistText = top.fileArtistText;
var fileAlbumText = top.fileAlbumText;
var fileGenreText = top.fileGenreText;
var fileYearText = top.fileYearText;
var eb_tips = top.eb_tips;
var ok_button = top.ok_button;
var eb_info = top.eb_info;
var netConnectFailText = top.netConnRemind[3];
var naInfo = "";
var noneInfo = "";

var optionMenuImg = "";
var informationBoxLi = "";
var clickOptionMenuLi_1 = "";
var clickOptionMenuLi_2 = "";
var optionSecListSpan = "";
var clickPlayListLi = "";
var optionInfoDetailSpan = "";

var playListName = "name";
var lyricInfoList = "";

var FOCUS_DISTANCE = 0;
var FOCUS_LEFT_DISTANCE = 0;
var FOCUS_TOP_DISTANCE = 0;

var progressBarTimer = 0;
var menuTimer = 0;

var multimedia = top.g_media;
var setting	= top.g_setting;
var playLocked = false;

var tmpStartIndex = 0;
var soundPresetStartIndex = 0;
var OPTION_INFO_MAX	= 5;
var footballModeFlag = false;//add for football mode
var operatableFlag	= true;
var isUpdateFileInfo = true;

window.onload = init;
window.onunload = unInit;
document.onkeydown = keyProc;
document.onsystemevent = notifyProcess;

function $(id)
{
    return document.getElementById(id);
}

function testLog(tmp)
{
	var str = "             => Areos: " + tmp;
	top.g_channel.testLog(str);
}

function init()
{
    top.initTextDirection(window);
	top.g_temp = "media";
	top.g_isMediaCenter = top.NDM_Music_Play;
	var str = window.location.search;
	if(str != null && str != "")//get "?" after url
	{
		if(str == "?dmr")
		{
			testLog("THIS IS DMR PLAY MUSIC");
			tcl.channel.requestMute(0);
			multimedia.changeSourceToMedia();
		}
		multimedia.setEnterDeviceType(2);
		dmrFlag = true;
		top.g_isMediaCenter = top.NDM_DMR_Music;
	}
	initTextInfo();
	addMouseListener();
	top.setContext5In1Type(top.CONTEXT_MUSIC_MOVIE_PLAYER);
	playStatus = S_END;
	playListStart = 0;
	playListIndex = 0;
	seekCount = 0;
	seekPoint = 0;
	focusTab = DISPLAY_AREA;
	menuFocusIndex = 2;
	//dmr
	repeatModeInit();
	if(dmrFlag)
	{
		menuFocusIndex = 1;
		resetFocusShape();
		testLog("dmr music play");
		currentFileInfo = multimedia.getCurrentPlayingMediaInfo();
		mediaOpen(currentFileInfo.path);
		return;
	}
	multimedia.getMediaFileList(top.g_deviceInfo.type, 3, top.g_mediaFolderPath, 0, -1);
	currentPlayList = multimedia.getCurrentMusicPlayingList(0, -1);
	multimedia.refreshRandlist(currentPlayList.length);
	top.g_availableStatus = mediaOpen(top.g_currentMedia.path);
	setPlayListMaxLength();
	resetFocusShape();
	
    if (setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1")!="0")
    {
        setting.setMEMC(0);
    }
	//musicBGPlay = multimedia.getBGMPlayStatus();// show music ctl panel
}

function unInit()
{
	if(dmrFlag)
	{
		top.g_temp = "";
	}
	
    if (setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1")!="0")
    {
        setting.setMEMC(1);
    }
	
	multimedia.mediaStop(0);
	top.g_isMediaCenter = top.NDM_Others;
}

function initTextInfo()
{
	var tmp = 0;
	if(!dmrFlag)
	{
		MENU_FB = tmp++;
		MENU_PRE = tmp++;
		MENU_P_P = tmp++;
		MENU_NEXT = tmp++;
		MENU_FF = tmp++;
		MENU_MODE = tmp++;
		MENU_LIST = tmp++;
	}
	else
	{
		MENU_FB = tmp++;
		MENU_P_P = tmp++;
		MENU_FF = tmp++;
	}
	MENU_COUNT = tmp;
	var menuListImg = $('menuList').getElementsByTagName('img');
	if(dmrFlag)
	{
		menuListImg[0].style.display = 'block';//FB
		menuListImg[1].style.display = 'none';//Pre
		menuListImg[2].style.display = 'block';//P&P
		menuListImg[3].style.display = 'none';//Next
		menuListImg[4].style.display = 'block';//FF
		menuListImg[5].style.display = 'none';//Play mode
		menuListImg[6].style.display = 'none';//Play list
		menuListImg[2].style.left =  155 + "px";
		menuListImg[4].style.left =  380 + "px";
	}
	else
	{
		for(var i = 0; i < menuListImg.length; i++)
		{
			menuListImg[i].style.display = 'block';
		}
	}
	$('eb_tips').innerText = eb_tips;
	$('okButton').innerText = ok_button;
	$("playTips").innerText = playTipsInfo[0];
	$("musicName").innerText = "";//musicNameInfo;
	$("musicArtist").innerText = "";//musicArtistInfo;
	$("musicAlbum").innerText = "";//musicAlbumInfo;
	$("musicGene").innerText = "";//musicAlbumInfo;
	$("musicYear").innerText = "";//musicAlbumInfo;
	$("optionInfo0").innerText = optionSoundPresetInfo;
	//$("optionBGMContent").innerText = optionBGMInfo;
	$("optionInfo1").innerText = optionAudioOnlyInfo;
	$("optionInfo2").innerText = optionInfo;
	optionInfoDetailSpan = $("optionInfoDetails").getElementsByTagName("span");
	optionMenuImg = $("optionFirstUl").getElementsByTagName("img");
	menuImgTag = $("menuList").getElementsByTagName('img');
	clickOptionMenuLi_1 = $('optionFirstUl').getElementsByTagName('li');
	clickOptionMenuLi_2 = $('optionSecondUl').getElementsByTagName('li');
	optionSecListSpan = $('optionSecondUl').getElementsByTagName('span');
	clickPlayListLi = $('playList').getElementsByTagName('li');
	informationBoxLi = $("fileInfoBox").getElementsByTagName("li");
}

function keyProc(evt)
{
	var ret = true;
	var keycode = evt.which;
	if((!operatableFlag) && (keycode != top.VK_BACK && keycode != top.VK_HOME && keycode != top.VK_EXIT && keycode != top.VK_TV&& keycode != top.VK_POWER)) 
	{
		return;
	}
	
	setBackLight(1);
	switch (keycode)
	{
		case top.VK_PANEL_LONG_OK://add for 5in1 virtual key
		case top.VK_PANEL_OK:
		case top.VK_PANEL_UP:
		case top.VK_PANEL_DOWN:
		case top.VK_PANEL_LEFT:
		case top.VK_PANEL_RIGHT:
		case top.VK_PANEL3_DOWN://按面板左侧键，-,（三键面板）
		case top.VK_PANEL3_UP://按面板右侧键，+,（三键面板）
		case top.VK_PANEL3_OK://按面板菜单键,（三键面板）
		case top.VK_PANEL3_LONG_OK://长按面板菜单键（三键面板）
		case top.VK_MUTE://mute
		case top.VK_FRONT_PANEL_LOCKED:
			top.keyDownProcess(evt);
			return;
        case top.VK_POWER://power
            top.keyDownProcess(evt);
            break;
		case top.VK_NETFLIX:
        case top.VK_GLOBOPLAY:
			top.g_lastEnterType = -1;
			top.g_isMediaCenter = top.NDM_Others;
			multimedia.mediaStop(0);
			multimedia.deviceExitUninit();
			top.g_temp = "";
			top.preTempPage = "";
			top.keyDownProcess(evt);
			return;
        case top.VK_YOUTUBE:
        case top.VK_INTERNET:
	case top.VK_APPS:
		if (top.checkNetwork() == false)
                	return;

			top.g_lastEnterType = -1;
			top.g_isMediaCenter = top.NDM_Others;
			multimedia.mediaStop(0);
			multimedia.deviceExitUninit();
			//multimedia.toRestoreSource(0, 0);
			top.g_temp = "";
			top.globalHotkeyHandle(keycode);
			return;
		case top.VK_VOLUME_UP://volume up
			top.$('globleShow').contentWindow.initVolume();
			if(top.$('globleShow').contentWindow.volumeCount > 0)
			{
				top.g_volume_visible = 1;
				top.$("operatePage").src = "";
				top.setFrameFocusPage("globleShow");
				top.$("globleShow").contentWindow.$("adjustProgressBox").style.display = 'block';
				top.requestFocus(top.globleShow, 0);
				//top.startVolumeTimer();
			}
			break;
		case top.VK_VOLUME_DOWN://volume down
			top.$('globleShow').contentWindow.initVolume();
			if(top.$('globleShow').contentWindow.volumeCount > 0)
			{
				top.g_volume_visible = 1;
				top.$("operatePage").src = "";
				top.setFrameFocusPage("globleShow");
				top.$("globleShow").contentWindow.$("adjustProgressBox").style.display = 'block';
				top.requestFocus(top.globleShow, 0);
				//top.startVolumeTimer();
			}
			break;
		case top.VK_UP:
			toUp();
			ttsRead();
			break;
		case top.VK_DOWN:
			//if(dmrFlag) break;
			toDown();
			ttsRead();
			break;
		case top.VK_LEFT:
			toLeft();
			ttsRead();
			break;
		case top.VK_RIGHT:	
			toRight();
			ttsRead();
			break;
		case top.VK_INFO:
			if(dmrFlag)	break;
			if(focusTab == OPTION_AREA || focusTab == OPTION_DETAIL_AREA || focusTab == PLAY_LIST_AREA)
			{
				hideMenu(0, DISPLAY_AREA);
			}
			if($("fileInfoBox").style.display == 'block')
			{
				hideInfoBox(0);
			}
			else
			{
				$("fileInfoBox").style.display = 'block';
				for(var i = 0; i < informationBoxLi.length; i++)
				{
					setHTMLScroll(informationBoxLi[i]);
				}
				hideInfoBox(FADE_TIME);
			}
			break;
		case top.VK_BACK: //back
			toBack();
			ttsRead();
			break;
		case top.VK_OPTION: //menu
			if(dmrFlag) break;
			hideInfoBox(0);
			toOption();
			ttsRead();
			break;
		case top.VK_ENTER:
			toOK();
			ttsRead();
			break;
		case top.VK_PLAY:
			console.log("this key is VK_PLAY");
			/*if(!pauseableFlag) break;
			if(playStatus == S_PAUSE)
			{
				playStatus = S_PLAY;
				multimedia.mediaResume();
				if(progressBarTimer)
					clearInterval(progressBarTimer);
				progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
				menuImgTag[2].src = (menuFocusIndex == MENU_P_P)
					? "images/USB-Music-Control-icon-PauseFocus-B.png"
					: "images/USB-Music-Control-icon-Pause-B.png";
			}
			else if(playStatus == S_FF_FB)
			{
				setFastPlay(0);
				playStatus = S_PLAY;
				//multimedia.mediaPause();
				if(progressBarTimer)
					clearInterval(progressBarTimer);
				progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
				menuImgTag[2].src = (menuFocusIndex == MENU_P_P)
					? "images/USB-Music-Control-icon-PauseFocus-B.png"
					: "images/USB-Music-Control-icon-Pause-B.png";
			}
			else if(playStatus == S_END)
			{
				top.g_availableStatus = mediaOpen(top.g_currentMedia.path);
			}
			break;*/
		case top.VK_PLAY_PAUSE://play key press
			testLog("press the VK_PLAY_PAUSE key");
			if(!pauseableFlag) break;
			var inputKeyType = setting.getProperty(RC_TYPE, "RC651");
			var ttsStr = "";
			if(playStatus == S_PAUSE)
			{
				playStatus = S_PLAY;
				multimedia.mediaResume();
				if(progressBarTimer)
					clearInterval(progressBarTimer);
				progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
				menuImgTag[2].src = (menuFocusIndex == MENU_P_P)
					? "images/USB-Music-Control-icon-PauseFocus-B.png"
					: "images/USB-Music-Control-icon-Pause-B.png";
				ttsStr = "play";
			}
			else if(playStatus == S_FF_FB)
			{
				setFastPlay(0);
				playStatus = S_PLAY;
				//multimedia.mediaPause();
				if(progressBarTimer)
					clearInterval(progressBarTimer);
				progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
				menuImgTag[2].src = (menuFocusIndex == MENU_P_P)
					? "images/USB-Music-Control-icon-PauseFocus-B.png"
					: "images/USB-Music-Control-icon-Pause-B.png";
				ttsStr = "play";
			}
			else if(playStatus == S_END)
			{
				top.g_availableStatus = mediaOpen(top.g_currentMedia.path);
			}
			else if(playStatus == S_PLAY || playStatus == S_FF_FB)//pause
			{
				if(inputKeyType == "RC651") return;
				playStatus = S_PAUSE;
				ff_fb_flag = 0;
				$('statusIcon').style.display = 'none';
				$('statusIcon').src = "images/USB-Icon-Play.png";
				multimedia.mediaPause();
				clearInterval(progressBarTimer);
				menuImgTag[2].src = (menuFocusIndex == MENU_P_P)
					? "images/USB-Music-Control-icon-PlayFocus-B.png"
					: "images/USB-Music-Control-icon-Play-B.png";
				ttsStr = "pause";
			}
			console.log("---------ttstest---------ttsStr=" + ttsStr);
			top.setTTSSay(top.SPEECH_TYPE_FLUSH, ttsStr);
			break;
		case top.VK_PAUSE:
			if(!pauseableFlag) break;
			if(playStatus == S_PLAY || playStatus == S_FF_FB)
			{
				playStatus = S_PAUSE;
				ff_fb_flag = 0;
				$('statusIcon').style.display = 'none';
				$('statusIcon').src = "images/USB-Icon-Play.png";
				multimedia.mediaPause();
				clearInterval(progressBarTimer);
				menuImgTag[2].src = (menuFocusIndex == MENU_P_P)
					? "images/USB-Music-Control-icon-PlayFocus-B.png"
					: "images/USB-Music-Control-icon-Play-B.png";
				console.log("---------ttstest---------ttsStr=" + "pause");
				top.setTTSSay(top.SPEECH_TYPE_FLUSH, "pause");
			}
			break;
		case top.VK_STOP:
			if(dmrFlag) break;
			hideInfoBox(0);
			multimedia.mediaStop(0);
			top.$("main").src = "mediaList.html?media";
			/*
			if(playStatus == S_PAUSE || playStatus == S_PLAY)
			{
				hideInfoBox(0);
				multimedia.mediaStop(0);
				playStatus = S_END;
				$("startBar").style.width = 0 + "px";
				$('endBar').style.left = -15 + "px";
				menuImgTag[2].src = (focusTab == DISPLAY_AREA && menuFocusIndex == MENU_P_P)
					? "images/USB-Music-Control-icon-PlayFocus-B.png"
					: "images/USB-Music-Control-icon-Play-B.png";
			}*/
			break;
		case top.VK_REWIND:
			if(playStatus != S_ERROR && pauseableFlag && seekableFlag)
			{
				if(seekStatusFlag)
				{
					clearTimeout(seekSettingTimer);
					multimedia.setSeekPoint(seekPoint * 1000);
					seekStatusFlag = false;
					$('seekTime').style.display = 'none';
				}
				else
				{
					refreshProgressBar();
				}
				$('progressArea').style.display = 'block';
				clearInterval(progressBarTimer);
				progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
				setFastPlay(-1);
				var ttsStr = "";
				switch(ff_fb_flag)
				{
					case 0:
						ttsStr = "play";
						break;
					case -1:
						ttsStr = "2 times fast backward";
						break;
					case -2:
						ttsStr = "4 times fast backward";
						break;
					default:
						break;
				}
				console.log("---------ttstest---------ttsStr=" + ttsStr);
				top.setTTSSay(top.SPEECH_TYPE_FLUSH, ttsStr);
			}
			break;
		case top.VK_FAST_FWD:
			if(playStatus != S_ERROR && pauseableFlag && seekableFlag)
			{
				if(seekStatusFlag)
				{
					clearTimeout(seekSettingTimer);
					multimedia.setSeekPoint(seekPoint * 1000);
					seekStatusFlag = false;
					$('seekTime').style.display = 'none';
				}
				else
				{
					refreshProgressBar();
				}
				$('progressArea').style.display = 'block';
				clearInterval(progressBarTimer);
				progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
				setFastPlay(1);
				var ttsStr = "";
				switch(ff_fb_flag)
				{
					case 0:
						ttsStr = "play";
						break;
					case 1:
						ttsStr = "2 times fast forward";
						break;
					case 2:
						ttsStr = "4 times fast forward";
						break;
					default:
						break;
				}
				console.log("---------ttstest---------ttsStr=" + ttsStr);
				top.setTTSSay(top.SPEECH_TYPE_FLUSH, ttsStr);
			}
			break;
		case top.VK_PREV: //previous
			if(dmrFlag) break;
			hideInfoBox(0);
			setTimeout(function(){playPre(1);}, OPERATION_TIME);
			console.log("---------ttstest---------ttsStr=" + "previous");
			top.setTTSSay(top.SPEECH_TYPE_FLUSH, "previous");
			return;
		case top.VK_NEXT: //next
			if(dmrFlag) break;
			hideInfoBox(0);
			setTimeout(function(){playNext(1);}, OPERATION_TIME);
			console.log("---------ttstest---------ttsStr=" + "next");
			top.setTTSSay(top.SPEECH_TYPE_FLUSH, "next");
			return;
		case top.VK_TV:
			top.g_lastEnterType = -1;
			top.g_isMediaCenter = top.NDM_Others;
			hideInfoBox(0);
			setTimeout(function(){
				multimedia.mediaStop(0);
				multimedia.deviceExitUninit();
				multimedia.toRestoreSource(2, 1);
				top.g_previousHtmlPage = "channelPlay.html";
				top.g_remindWord = "TvHotKey";
				top.$("main").src = "intermediate.html";
				top.requestFocus(top.main, 1);
				top.$("operatePage").src = "";
				}, OPERATION_TIME);
			break;
		case top.VK_HOME:
			toHomePage();
			break;
		case top.VK_EXIT:
			if($('option').style.display == "block")
			{
				toOption();
				return;
			}
			top.g_lastEnterType = -1;
			top.g_isMediaCenter = top.NDM_Others;
			hideInfoBox(0);
			hideMenu(0, DISPLAY_AREA);
			//setTimeout(function(){
				if(dmrFlag)
				{
					multimedia.mediaStop(0);
					multimedia.deviceExitUninit();
					multimedia.toRestoreSource(0,0);
					top.$("main").src = "channelPlay.html";
					return;
				}
				multimedia.mediaStop(0);
				multimedia.deviceExitUninit();								
                if(!top.isFromOptionIntoUsb)
                {
                    top.$("main").src = top.getHomepage("?tv&media");
                }
                else
                {
                    top.$("main").src = "channelPlay.html";
                    multimedia.toRestoreSource(0, 1);
                }
                top.requestFocus(top.main, 1);
            //}, OPERATION_TIME);
			break;
		case top.VK_MENU:
		case top.VK_SOURCE:
            hideInfoBox(0);
            hideMenu(0, DISPLAY_AREA);
			if($('option').style.display == 'block')
			{
				toOption();
			}
			if($('playList').style.display== 'block')
			{
				return;
			}
			top.keyDownProcess(evt);
			break;				
		default:
			break;
	}
	return ret;
}

function notifyProcess(evt)
{
    var msg = evt.which;
    var value = evt.modifiers;
	switch(msg)
	{/*media下不允许出现这些个消息
		case top.E_SS_INVALID_SERVICE://invalid service
		case top.E_SS_SCRAMBLED_PROGRAM:// screamble
		case top.E_SS_CH_BLOCK://channel lock
		case top.E_SS_PARENTAL_BLOCK://parental lock
		case top.E_SS_AUDIO_ONLY://audio only
		case top.E_SS_DATA_ONLY://data only
		case top.E_SS_COMMON_VIDEO:// service ready
		case top.E_SIGNAL_UNLOCK://unlock
		case top.E_SIGNAL_LOCK://lock*/
		//case top.E_DLNA_DMR_PUSH_MOVIE://dmr push movie
		//case top.E_DLNA_DMR_PUSH_MUSIC://dmr push music
		//case top.E_DLNA_DMR_PUSH_PICTURE://dmr push picture
		/*
		case top.E_MEDIA_PLAYER_TIME_UPDATE:// play meida time update,
			console.log("in E_MEDIA_PLAYER_TIME_UPDATE  value = "+value);
			refreshProgressBar(value);
			break;
		*/
		case top.E_CI_OP_UPDATE_CHANNEL://CMD_UI_NOTIFY_OP_UPDATE_CHANNEL
		case top.E_CI_OP_UPDATE_NIT://CMD_UI_NOTIFY_OP_UPDATE_NIT
            setBackLight(1);
            top.systemEventProc(evt);
            return;
		case top.E_POWER_OFF_TIMER://power off timer
		case top.E_POWER_OFF_TIMER_EX:
            if(top.g_setting.location > 0)//location 为shop 或者 shop with demo 不响应倒计时待机消息
            {
                return;
            }
			setBackLight(1);
			top.systemEventProc(evt);
			return;
		case top.E_READY_TO_CHANGE_SCART:
		case top.E_READY_TO_CHANGE_CEC:
			setBackLight(1);
			hideInfoBox(0);
			top.g_lastEnterType = -1;
			top.g_isMediaCenter = top.NDM_Others;
			multimedia.mediaStop(0);
			multimedia.deviceExitUninit();
			multimedia.toRestoreSource(2, value);
			top.$("main").src = "channelPlay.html";
			//top.systemEventProc(evt);
			return;
		case top.E_BOOKING_PLAY_START://booking play start开机时节目预定的时间已过，但是依然要提醒用户做一些切台等操作
		case top.E_BOOKING_RECORD_START://booking record start开机时录制预定已经过期，但是依然要提醒用户切台录制
		case top.E_BOOKING_AHEAD_PLAY_START://booking ahead play start,正常情况下切台提醒，一分钟前提醒
		case top.E_BOOKING_AHEAD_RECORD_START://booking ahead record start正常情况下录制提醒,，一分钟前提醒
			/////////////////chenhua changed start///////////////////////////////// 
			/*
			top.g_mediaList = "";
			top.g_mediaPosition = 0;
			top.g_currentMedia = "";
			top.g_path = "";
			top.g_folderPath = "";
			multimedia.toRestoreSource(0, 0);//restore source to dtv or atv or ...
			*/
			setBackLight(1);
			top.g_temp = "media";
			/////////////////chenhua changed end///////////////////////////////// 
			top.systemEventProc(evt);
			return;
		case top.E_NETWORK_CONNECT_TEST_SUCCESS:
		case top.E_NETWORK_CONNECT_TEST_FAIL:
		case top.E_MUTE_ON:
		case top.E_MUTE_OFF:
		case top.E_CEC_HDMI_DEVICE_INSERTED:
		case top.E_APP_OPEN:
			top.systemEventProc(evt);
			break;
        case top.E_STR_SCREEN_OFF:
        {
            toExitBySTR();
            break;
        }
        case top.E_HP_PLUGIN:
        case top.E_HP_PLUGOUT:
        {
            top.systemEventProc(evt);
            break;
        }
        case top.E_NOTIFY_VRC_SET_VOL:
            top.systemEventProc(evt);
            break;
		default:
			break;
	}
	
    switch(msg)
	{
		case top.E_DLNA_DMR_PUSH_KODI:
		case top.E_DLNA_DMR_PUSH_YOUTUBE:
			top.g_lastEnterType = -1;
			top.g_isMediaCenter = top.NDM_Others;
			multimedia.mediaStop(0);
			multimedia.deviceExitUninit();
			top.g_temp = "";
			top.systemEventProc(evt);
			break;
		case top.E_DLNA_DMR_PUSH_MOVIE:
			setBackLight(1);
			clearTimeout(dmrExitTimer);
			multimedia.mediaStop(0);
			top.$("main").src = "videoPlay.html?re dmr";
			break;
		case top.E_DLNA_DMR_PUSH_MUSIC:
			setBackLight(1);
			clearTimeout(dmrExitTimer);
			multimedia.mediaStop(0);
			top.$("main").src = "musicPlay.html?re dmr";
			break;
		case top.E_DLNA_DMR_PUSH_PICTURE:
			setBackLight(1);
			clearTimeout(dmrExitTimer);
			multimedia.mediaStop(0);
			top.$("main").src = "picturePlay.html?re dmr";
			break;
		case top.E_DMR_PLAY:
			//mediaOpen("0");
			break;
		case top.E_DMR_STOP:
			testLog("--------- THIS IS DMR STOP MSG ------------");
			setBackLight(1);
			clearTimeout(dmrExitTimer);
			top.g_temp="quickMenu";
			top.$("operatePage").src = "";
			top.$("otherPage").src = "";
			dmrExitTimer = setTimeout(function(){
				top.g_isMediaCenter = top.NDM_Others;
				hideInfoBox(0);
				multimedia.mediaStop(0);			
				multimedia.deviceExitUninit();
				multimedia.toRestoreSource(0,0);
				top.$("main").src = "channelPlay.html";
				top.requestFocus(top.main, 1);
				}, 3000);
			break;
		case top.E_MEDIA_FIND_FILE_END: //file search end
			currentPlayList = multimedia.getCurrentMusicPlayingList(0, -1);
			setPlayListMaxLength();
			top.g_searchFlag = 1;
			break;
		case top.E_MEDIA_PLAYER_STATUS_STOP: //stop
			testLog("---- THIS STOP MSG ----");
			hideInfoBox(0);
			//$("unavailable").style.display = 'none';
			if(playStatus != S_END)
			{	
				//$('movieName').innerText = "";
				//$("midBar").style.width = "0px";
				//$("rightBar").style.left = "7px";
				if(progressBarTimer) 
					clearInterval(progressBarTimer);
				$('elspased').innerText = doTime(0);
				$('duration').innerText = doTime(0);
				fileDuration = 0;
		        //this one play end ,playing next media
		        repeatMode = multimedia.getAudioRepeatMode();
				switch(repeatMode)
				{
					case 0: //normal
					case 1: //random
					case 2: //repeat all
					case 3: //repeat one
						playStatus = S_END;
						//$("playStatus").style.backgroundImage = "url('" + playStatusImg[0] + "')";
						//$('playStatusText').style.display = 'none';
						break;
					default:
						top.$("main").src= top.g_previousHtmlPage;
						break;
				}
		    }
			playStatus = S_END;
			break;
		case top.E_MEDIA_BACKWORD_EOS:
			testLog("---- THIS IS BACKWORD EOS ----");
			clearProgressArea();
			hideMenu(0, DISPLAY_AREA);
			$('statusIcon').style.display = 'none';
			hideInfoBox(0);
			multimedia.mediaStop(0);
			mediaOpen(currentFileInfo.path);
			break;
	    case top.E_MEDIA_EOS://media eos
			testLog("---- THIS IS EOS MSG ----");
			$('tipsBox').style.display = 'none';
			hideInfoBox(0);
			if(dmrFlag)
			{
				top.g_temp="quickMenu";
				top.$("operatePage").src = "";
				top.$("otherPage").src = "";
				dmrExitTimer = setTimeout(function(){
					top.g_isMediaCenter = top.NDM_Others;
					multimedia.mediaStop(0);
					multimedia.deviceExitUninit();
					multimedia.toRestoreSource(0,0);
					top.$("main").src = "channelPlay.html";
					top.requestFocus(top.main, 1);
					}, 2000);
				return ;
			}
			if(focusTab == PROGRESS_AREA)
			{
				clearTimeout(seekSettingTimer);
				seekStatusFlag = false;
				focusTab == DISPLAY_AREA;
				if(focusDisplayFlag)
					displayMenuBarFocus(1);
				else
					displayMenuBarFocus(0);
			}
			hideMenu(0, DISPLAY_AREA);
			clearProgressArea();
			$('musicName').innerText = "";
			$('musicArtist').innerText = "";
			$('musicAlbum').innerText = "";
			$('musicGene').innerText = "";
			$('musicYear').innerText = "";
			$('statusIcon').style.display = 'none';
			$('statusIcon').src = "images/USB-Icon-Play.png";
			$("musicCover").src = "images/USB-Music-Default-icon.png";
			playStatus = S_END;
			fileDuration = 0;
			if(progressBarTimer) 
				clearInterval(progressBarTimer);
			playNext(0);
			break;
		/*
		case top.E_MEDIA_PICTURE_PLAY_EXIT://picture play exit
		{
			top.$("main").src = top.g_previousHtmlPage;
			break;
		}
		*/
		case top.E_MEDIA_USB_INSERTED://usb insert
			if(focusTab == OPTION_DETAIL_AREA || focusTab == OPTION_AREA || focusTab == PLAY_LIST_AREA)
			{
				hideMenu(0, DISPLAY_AREA);
			}
			displayFocusBox(0);
			top.systemEventProc(evt);
			break;
		case top.E_MEDIA_USB_REMOVE: //usb remove
			setBackLight(1);
			hideInfoBox(0);
			multimedia.mediaStop(0);
			multimedia.deviceExitUninit();
			top.g_mediaPosition = 1;
			top.$("main").src = "deviceList.html?remove";
			break;
		case top.E_MEDIA_FIRST_PREVIOUS:
			//clearInterval(progressBarTimer);
			//progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
			clearTimeout(playTipsTimer);
			$("playTips").innerText = playTipsInfo[0];
			$('playTips').style.display = 'block';
			playTipsTimer = setTimeout("$('playTips').style.display = 'none';", 3000);
			break;
		case top.E_MEDIA_LAST_NEXT:
			//clearInterval(progressBarTimer);
			//progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
			clearTimeout(playTipsTimer);
			$("playTips").innerText = playTipsInfo[1];
			$('playTips').style.display = 'block';
			playTipsTimer = setTimeout("$('playTips').style.display = 'none';", 3000);
			break;
			/*
		case top.E_MEDIA_LYRIC_PARSER_READY:
			testLog("--------- LYRIC READY MSG ----------");
			fillLyricInfo();//lyric
			break;
		case top.E_MEDIA_LYRIC_SYNC_UPDATE:
			testLog("--------- UPDATE LYRIC MSG ----------");
			nextLyricLine = value;
			if(lyricScrollTimer)
			{
				clearTimeout(lyricScrollTimer);
				lyricScrollTimer = 0;
				$('lyricInfo').scrollTop = currentLyricLine * iLineHeight;
			}
			iScrollAmount = (iLineHeight * (nextLyricLine - currentLyricLine)) / lyricScrollCount;
			lyricScrollRun(lyricScrollCount);
			break;
			*/
		case top.E_MEDIA_PLAYER_STATUS_PREPARED:
			multimedia.mediaPlay();
			break;
		case top.E_MEDIA_PLAYER_STATUS_PLAYING: //playing
			if(focusTab==TIPS_AREA)
				return;
			testLog("--------- THIS IS PLAYING MSG ----------");
			operatableFlag=true;
			playStatus = S_PLAY;
			hideInfoBox(0);
			errorFlag = 0;
			nextLyricLine = 0;
			currentLyricLine = 0;
			ff_fb_flag = 0;
			$('tipsBox').style.display = 'none';
			$('duration').innerText = getMediaFileDuration(currentFileInfo.path);
			if(progressBarTimer)
				clearInterval(progressBarTimer);
			progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
			
			currentFileInfo = multimedia.getCurrentPlayingMediaInfo();
			playListIndex = multimedia.getCurrentPlayingMediaPosition();
			pauseableFlag = 1;
			seekableFlag = 1;
			if(!dmrFlag)
			{
				pauseableFlag = multimedia.getMetadataInfo().isCanPause;
				seekableFlag = multimedia.getMetadataInfo().isCanSeek;
				refreshCPFlag();
			}
			top.g_currentMedia = currentFileInfo;
			top.g_mediaPosition = playListIndex;

			$('statusIcon').style.display = 'none';
			$('statusIcon').src = "images/USB-Icon-Play.png";
			if(pauseableFlag && seekableFlag)
			{
				if(menuFocusIndex != MENU_FB)
				{
					menuImgTag[0].src = "images/USB-Music-Control-icon-FB-B.png";
				}
				if(menuFocusIndex != MENU_FF)
				{
					menuImgTag[4].src = "images/USB-Music-Control-icon-FF-B.png";
				}
				if(focusTab == DISPLAY_AREA && menuFocusIndex == MENU_P_P)
				{
					menuImgTag[2].src = "images/USB-Music-Control-icon-PauseFocus-B.png";
				}
				else
				{
					menuImgTag[2].src = "images/USB-Music-Control-icon-Pause-B.png";
				}
			}
			else if(pauseableFlag && !seekableFlag)
			{
				menuImgTag[0].src = "images/USB-Music-Control-icon-FB-B-Disable.png";
				menuImgTag[4].src = "images/USB-Music-Control-icon-FF-B-Disable.png";
				if(menuFocusIndex == MENU_FF || menuFocusIndex == MENU_FB)
				{
					menuFocusIndex = MENU_P_P;
				}
				if(focusTab == DISPLAY_AREA && menuFocusIndex == MENU_P_P)
				{
					menuImgTag[2].src = "images/USB-Music-Control-icon-PauseFocus-B.png";
				}
				else
				{
					menuImgTag[2].src = "images/USB-Music-Control-icon-Pause-B.png";
				}
			}
			else if(!pauseableFlag)
			{
				if(menuFocusIndex == MENU_FF || menuFocusIndex == MENU_FB || menuFocusIndex == MENU_P_P)
				{
					menuFocusIndex = MENU_LIST;
					menuImgTag[6].src = "images/USB-Music-Control-icon-PlaylistFocus-B.png";
				}
				menuImgTag[0].src = "images/USB-Music-Control-icon-FB-B-Disable.png";
				menuImgTag[2].src = "images/USB-Music-Control-icon-Play-B-Disable.png";
				menuImgTag[4].src = "images/USB-Music-Control-icon-FF-B-Disable.png";
			}
			console.log("E_MEDIA_PLAYER_STATUS_PLAYING  isUpdateFileInfo = " + isUpdateFileInfo);
			if(isUpdateFileInfo){
				musicFileInfo = multimedia.getMediaMusicFileInfo(currentFileInfo.path,currentFileInfo.name);
				fillFileInformation(musicFileInfo);
				fillLyricInfo();
				isUpdateFileInfo = false;
			}
			playLocked = false;
			testLog("--------- THIS IS PLAYING MSG END----------");
			break;
		case top.E_MEDIA_AV_SEEK:
			multimedia.setSeekPoint(value * 1000);
			clearInterval(progressBarTimer);
			seekSettingTimer = setTimeout(function(){
				progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);}, SEEK_TIME_DELAY);
			break;						
		case top.E_MEDIA_PLAYER_STATUS_RESUME_PLAYING:
			testLog("---- THIS IS RESUME MSG ----");
			break;
		case top.E_MEDIA_PLAYER_STATUS_PAUSE: //pause
			testLog("---- THIS IS PAUSE MSG ----");
			break;
		case top.E_NSCREEN_PAUSE:	
			testLog("---- THIS IS PAUSE MSG ----");
			if(dmrFlag)
			{
				playStatus = S_PAUSE;
				multimedia.mediaPause();
				menuImgTag[2].src = (menuFocusIndex == MENU_P_P)
					? "images/USB-Music-Control-icon-PlayFocus-B.png"
					: "images/USB-Music-Control-icon-Play-B.png";
			}
			break;
		case top.E_NSCREEN_RESUME:
			testLog("---- THIS IS RESUME MSG ----");
			if(dmrFlag)
			{
				if(playStatus == S_END)
					return;	
				playStatus = S_PLAY;
				multimedia.mediaResume();
				menuImgTag[2].src = (menuFocusIndex == MENU_P_P)
					? "images/USB-Music-Control-icon-PauseFocus-B.png"
					: "images/USB-Music-Control-icon-Pause-B.png";
			}
			break;
		case top.E_MEDIA_AUDIO_ERROR:
		case top.E_MEDIA_CUSTOM_AUDIO_NO_SUPPORT:
		case top.E_MEDIA_AUDIO_CANT_RECONGNIZE:
			setErrorTips(ERROR_DEFAULT);
			$('eb_info').innerText = eb_info[2];//Audio format not supported.
			$('tipsBox').style.display = 'block';
			break;
		/*
		case top.E_MEDIA_OTHER_ERROR:
			setErrorTips(ERROR_DEFAULT);
			$('eb_info').innerText = eb_info[7];//Oops! Player has stopped running.
			$('tipsBox').style.display = 'block';
			break;
		*/
		case top.E_MEDIA_PLAY_ERROR_CANT_OPEN:
			setErrorTips(ERROR_CANT_OPEN);
			$('eb_info').innerText = eb_info[4];//Can't open this file.
			$('tipsBox').style.display = 'block';
			break;
		/*now middleware cast E_MEDIA_OTHER_ERROR msg  equal notsupport */
		case top.E_MEDIA_OTHER_ERROR:
			setErrorTips(ERROR_DEFAULT);
			$('eb_info').innerText = eb_info[5];//File format not supported
			$('tipsBox').style.display = 'block';
			break;
		case top.E_MEDIA_PLAY_ERROR_FILE_NOT_EXIST:
			setErrorTips(ERROR_DEFAULT);
			$('eb_info').innerText = eb_info[8];
			$('tipsBox').style.display = 'block';
			break;
		case top.E_WIRELESS_DEVICE_NO_FOUND:
		//case top.E_WIRELESS_CONNECT_FAILURE://net connect failed
			testLog("----- THIS IS NET DISCONNECTED -----");
			if(top.g_lastEnterType == ENTER_DLNA_TYPE||dmrFlag)
			{
				setErrorTips(ERROR_NET_DISCONNECTED);
				$('eb_info').innerText = netConnectFailText;
				$('tipsBox').style.display = 'block';
			}
			break;
		case top.E_MEDIA_PLAYER_STATUS_FORWORD: //ff
			//playStatus = "ff";
			break;
		case top.E_MEDIA_PLAYER_STATUS_BACKWORD: //fb
			//playStatus = "fb";
			break;
		case top.E_MEDIA_PLAYER_STATUS_SEEK_PLAYING:
			testLog("---- THIS IS SEEK DONE ----");
			if(playStatus != S_FF_FB)
			{
				playStatus = S_PLAY;
				$('statusIcon').style.display = 'none';
			}
			ff_fb_flag = 0;
            multimedia.mediaResume();
			if(focusTab == DISPLAY_AREA)
			{
				if(menuFocusIndex == MENU_P_P)
				{
					menuImgTag[2].src = "images/USB-Music-Control-icon-PauseFocus-B.png";
				}
				else 
				{
					menuImgTag[2].src = "images/USB-Music-Control-icon-Pause-B.png";			
				}
			}
			else
			{
				menuImgTag[2].src = "images/USB-Music-Control-icon-Pause-B.png";
			}
			break;
		/*
		case 0x806e: //quit ff
		case 0x8070: //quit fb
			break;
		case top.E_MEDIA_PLAYER_STATUS_AB_MODE: //ab mode
			break;
		case 0x8072: //quit ab mode
			break;
		case top.E_MEDIA_PLAYER_STATUS_SLOWDOWN: //slow down
			break;
		case 0x8074: //quit slow down
			break;
		*/
		case top.E_DLNA_DEVICE_INSERT:
			break;
		case top.E_DLNA_DEVICE_INSERT:
			break;
		case top.E_DLNA_CURRENT_DEVICE_REMOVE:
			if(errorFlag == ERROR_NET_DISCONNECTED) break;
			setBackLight(1);
			hideInfoBox(0);
			multimedia.mediaStop(0);
			multimedia.deviceExitUninit();
			top.g_mediaPosition = 1;
			top.$("main").src= "deviceList.html?remove";
			break;
		case top.E_MEDIA_STREAM_BUFFERING: //buffering
			break;
		case top.E_MEDIA_STREAM_BUFFERING_COMPLETE: //buffering complete
			break;
		case top.E_MEDIA_STREAM_VIDEO_ONLY: //video only
			break;
		case top.E_MEDIA_VIDEO_AUDIO_LOOP_EXIT: //repeat-mode-normal: loop end
			setBackLight(1);
			multimedia.mediaStop(0);
			top.$("main").src = "mediaList.html?media";
			break;
		case top.E_MEDIA_DIVX_NOT_AUTH:
			//doDivXPrompt(1);
			break;
		case top.E_MEDIA_DIVX_NOT_RENTAL:
			//doDivXPrompt(3);
			break;
		case top.E_MEDIA_DIVX_NOT_EXPIRED:
			//doDivXPrompt(2);
			break;
		case top.E_APP_PROCESS_INITIALIZATION:
			top.g_lastEnterType = -1;
			top.g_isMediaCenter = top.NDM_Others;
			hideInfoBox(0);
			hideMenu(0, DISPLAY_AREA);
			multimedia.mediaStop(0);
			multimedia.deviceExitUninit();
			multimedia.toRestoreSource(0, 0);
			top.systemEventProc(evt);
			break;
	    default:
	        //top.systemEventProc(evt);
	        testLog("play send DEFAULT MSG!!!!!!!!!!!");
	        break;
	}
}

function refreshMediaEvent(evt)
{
	var msg = evt.which;
	switch(msg)
	{
		case top.E_DLNA_DMR_PUSH_KODI:
		case top.E_DLNA_DMR_PUSH_YOUTUBE:
			top.g_lastEnterType = -1;
			top.g_isMediaCenter = top.NDM_Others;
			multimedia.mediaStop(0);
			multimedia.deviceExitUninit();
			top.g_temp = "";
			return 2;
		case top.E_APP_PROCESS_INITIALIZATION:
			top.g_lastEnterType = -1;
			top.g_isMediaCenter = top.NDM_Others;
			hideInfoBox(0);
			hideMenu(0, DISPLAY_AREA);
			multimedia.mediaStop(0);
			multimedia.deviceExitUninit();
			multimedia.toRestoreSource(0, 0);
			return 2;
		case top.E_MEDIA_USB_INSERTED://usb insert
			if(focusTab == OPTION_DETAIL_AREA || focusTab == OPTION_AREA || focusTab == PLAY_LIST_AREA)
			{
				hideMenu(0, DISPLAY_AREA);
			}
			displayFocusBox(0);
			return 2;			
		case top.E_NETWORK_CONNECT_TEST_SUCCESS:
		case top.E_NETWORK_CONNECT_TEST_FAIL:
		case top.E_BOOKING_PLAY_START://booking play start
		case top.E_BOOKING_RECORD_START://booking record start
		case top.E_BOOKING_AHEAD_PLAY_START://booking ahead play start,
		case top.E_BOOKING_AHEAD_RECORD_START://booking ahead record start
		case top.E_CI_OP_UPDATE_CHANNEL://CMD_UI_NOTIFY_OP_UPDATE_CHANNEL
		case top.E_CI_OP_UPDATE_NIT://CMD_UI_NOTIFY_OP_UPDATE_NIT
		case top.E_3D_GLASSES_SUIT_OK:
		case top.E_3D_GLASSES_SUIT_FAIL:
			setBackLight(1);
			return 2;
        case top.E_POWER_OFF_TIMER://power off timer
        case top.E_POWER_OFF_TIMER_EX:
            if(top.g_setting.location > 0)//location 为shop 或者 shop with demo 不响应倒计时待机消息
            {
                return;
            }
            setBackLight(1);
            return 2;
		default:
			return 1;
	}
}
function toLeft()
{
	if(focusTab == DISPLAY_AREA)
	{
		changeMenuFocus(-1);
	}
	else if(focusTab == PROGRESS_AREA)//focus on playing
	{
		clearTimeout(seekSettingTimer);
		if(!seekStatusFlag)
		{
			seekStartTime = elapsed;
		}
		seekStatusFlag = true;
		$('seekTime').style.display = 'block';
		refreshSeekingTime(-1);
		if(playStatus == S_FF_FB)
		{
			$('statusIcon').style.display = 'none';
			$('statusIcon').src = "images/USB-Icon-Play.png";
			setFastPlay(0);
			if(progressBarTimer)
				clearInterval(progressBarTimer);
		}
		seekSettingTimer = setTimeout(function(){
			multimedia.setSeekPoint(seekPoint * 1000);
			seekStatusFlag = false;
			elapsed = seekPoint;
			clearInterval(progressBarTimer);
			progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
			$('seekTime').style.display = 'none';}, SEEK_TIME_DELAY);
	}
	else if(focusTab == OPTION_DETAIL_AREA || focusTab == SOUND_PRESET_AREA)
	{
		focusTab = OPTION_AREA;
		resetFocusShape();
		//$('BGM').style.display = 'none';
		$('optionSecondList').style.display = 'none';
		$('optionInfoDetails').style.display = 'none';
		hideMenu(FADE_TIME_15, DISPLAY_AREA);
	}
}

function toRight()
{
	if(focusTab == DISPLAY_AREA)
	{
		changeMenuFocus(1);
	}
	else if(focusTab == PROGRESS_AREA)//focus on playing
	{
		clearTimeout(seekSettingTimer);
		if(!seekStatusFlag)
		{
			seekStartTime = elapsed;
		}
		seekStatusFlag = true;
		$('seekTime').style.display = 'block';
		refreshSeekingTime(1);
		if(playStatus == S_FF_FB)
		{
			$('statusIcon').style.display = 'none';
			$('statusIcon').src = "images/USB-Icon-Play.png";
			setFastPlay(0);
			if(progressBarTimer)
				clearInterval(progressBarTimer);
		}
		seekSettingTimer = setTimeout(function(){
			multimedia.setSeekPoint(seekPoint * 1000);
			seekStatusFlag = false;
			elapsed = seekPoint;
			clearInterval(progressBarTimer);
			progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
			$('seekTime').style.display = 'none';}, SEEK_TIME_DELAY);
	}
	else if(focusTab == OPTION_AREA)
	{
		if(optionFocusIndex_1 == OPTION_SOUND_PRESET)
		{
			if(footballModeFlag)
			{
				hideMenu(FADE_TIME_15, DISPLAY_AREA);
				return;
			}
			focusTab = SOUND_PRESET_AREA;
			optionFocusIndex_2 = optionInfoArray[0];
			OPTION_INFO_COUNT = soundPresetArray.length;//6
			soundPresetStartIndex = optionFocusIndex_2 == OPTION_INFO_MAX ? 1 : 0;
			optionFocusIndex_2 -= soundPresetStartIndex;
			tmpStartIndex = soundPresetStartIndex;
			setOptionFocusScroll(-1, optionFocusIndex_1);
			fillOptionSecList();
			resetFocusShape();
			optionArrowDisplay(soundPresetStartIndex, OPTION_INFO_COUNT);
			$('optionSecondList').style.display = 'block';
			setOptionSecFocusScroll(optionFocusIndex_2, -1);
		}
		/*
		else if(optionFocusIndex_1 == OPTION_BGM)
		{
			$('BGM').style.display = 'block';
		}
		*/
		else if(optionFocusIndex_1 == OPTION_AUDIO_ONLY)
		{
			focusTab = OPTION_DETAIL_AREA;
			setSPOption();
			return;
		}
		else if(optionFocusIndex_1 == OPTION_INFORMATION)
		{
			focusTab = OPTION_DETAIL_AREA;
			$('optionInfoDetails').style.display = 'block';
			resetOptionSecBg();
			fillOptionSecList();
			resetFocusShape();
		}
		hideMenu(FADE_TIME_15, DISPLAY_AREA);
	}
}

function toUp()
{
	if(focusTab == DISPLAY_AREA)
	{
		if(!pauseableFlag || !seekableFlag) return;
		focusTab = PROGRESS_AREA;
		displayMenuBarFocus(0);
		$('endBar').src = "images/USB-Video-Progress-bar-Slider-02_.png";
		return;
	}
	else if(focusTab == OPTION_AREA)
	{
		setOptionMenuFocus(-1, optionFocusIndex_1);
		optionFocusIndex_1 = parseInt((optionFocusIndex_1 + OPTION_COUNT - 1) % OPTION_COUNT, 10);
		setOptionMenuFocus(optionFocusIndex_1, -1);
		$('optionFocus_1').style.top = focusOptionTopDistance + optionFocusIndex_1 * focusOptionHeight + "px";
	}
	else if(focusTab == PLAY_LIST_AREA)
	{
		if(playListFocusIndex - 1 >= 0 && playListFocusIndex < MAX_LENGTH_ONE_PAGE)
		{		
			playListFocusIndex--;
			setPlayListFocus(playListFocusIndex, playListFocusIndex + 1);
			$('playListFocus').style.top = cpTopDistance + FOCUS_DISTANCE * playListFocusIndex + "px";
		}
		else if(playListFocusIndex == 0 &&  playListStart > 0)
		{
			playListStart--;
			refreshPlayList();
			refreshCPFlag();
			showPlayListScrollBar(currentPlayList.length, playListStart);
			setPlayListFocus(playListFocusIndex, -1);
		}
		else if(playListFocusIndex == 0 && playListStart == 0)
		{
			if(currentPlayList.length > MAX_LENGTH_ONE_PAGE)
			{
				playListFocusIndex = MAX_LENGTH_ONE_PAGE - 1;
				playListStart = currentPlayList.length - MAX_LENGTH_ONE_PAGE;
			}
			else
			{
				playListFocusIndex = currentPlayList.length - 1;
				playListStart = 0;
			}
			refreshPlayList();
			refreshCPFlag();
			showPlayListScrollBar(currentPlayList.length, playListStart);
			setPlayListFocus(playListFocusIndex, -1);	
			$('playListFocus').style.top = cpTopDistance + FOCUS_DISTANCE * playListFocusIndex + "px";			
		}
	}
	else if(focusTab == SOUND_PRESET_AREA)//there is only sound preset
	{
		if(footballModeFlag)//add for football mode
		{
			return;
		}
		if(optionFocusIndex_2 - 1 >= 0)
		{
			setOptionSecFocusScroll(-1, optionFocusIndex_2);
			//optionFocusIndex_2 = parseInt((optionFocusIndex_2 - 1 + OPTION_INFO_COUNT) % OPTION_INFO_COUNT, 10);
			optionFocusIndex_2--;
			setOptionSecFocusScroll(optionFocusIndex_2, -1);
			$('optionFocus_2').style.top = focusOptionTopDistance + focusOptionHeight * optionFocusIndex_2 + "px";
		}
		else
		{
			moveUpRefreshSecList(soundPresetArray, OPTION_INFO_COUNT);
		}
		setting.previewSoundEffect(soundModeTransform(tmpStartIndex + optionFocusIndex_2, 1));
	}
	else if(focusTab == OPTION_DETAIL_AREA && optionFocusIndex_1 == OPTION_INFORMATION)
	{
		focusTab = OPTION_AREA;
		$('optionInfoDetails').style.display = 'none';
		setOptionMenuFocus(-1, optionFocusIndex_1);
		optionFocusIndex_1 = parseInt((optionFocusIndex_1 + OPTION_COUNT - 1) % OPTION_COUNT, 10);
		setOptionMenuFocus(optionFocusIndex_1, -1);
		resetFocusShape();
		$('optionFocus_1').style.top = focusOptionTopDistance + optionFocusIndex_1 * focusOptionHeight + "px";
	}
	hideMenu(FADE_TIME_15, DISPLAY_AREA);
}

function toDown()
{
	if(focusTab == PROGRESS_AREA)
	{
		if(seekStatusFlag)
		{
			clearTimeout(seekSettingTimer);
			multimedia.setSeekPoint(seekPoint * 1000);
			seekStatusFlag = false;
		}
		seekCount = 0;
		focusTab = DISPLAY_AREA;
		$('seekTime').style.display = 'none';
		if(progressBarPercent <= 14)
		{
			$('endBar').src = "images/USB-Video-Progress-bar-Slider-01_.png";
		}
		else
		{
			$('endBar').src = "images/USB-Video-Progress-bar-Slider-01.png";
		}
		displayMenuBarFocus(1);
		refreshProgressBar();
		return;
	}
	else if(focusTab == PLAY_LIST_AREA)
	{
		if(playListFocusIndex >= 0 && playListFocusIndex + 1 < MAX_LENGTH_ONE_PAGE)
		{
			playListFocusIndex++;
			setPlayListFocus(playListFocusIndex, playListFocusIndex - 1);
			$('playListFocus').style.top = cpTopDistance + FOCUS_DISTANCE * playListFocusIndex + "px";
		}
		else if((playListStart + PLAYLIST_MAX_LENGTH) < currentPlayList.length)
		{
			playListStart++;
			refreshPlayList();
			refreshCPFlag();
			showPlayListScrollBar(currentPlayList.length, playListStart);
			setPlayListFocus(playListFocusIndex, -1);
		}
		else if(((playListFocusIndex +1) == currentPlayList.length)||(playListStart + PLAYLIST_MAX_LENGTH) == currentPlayList.length)
		{
			playListFocusIndex = 0;
			playListStart = 0;
			refreshPlayList();
			refreshCPFlag();
			showPlayListScrollBar(currentPlayList.length, playListStart);
			setPlayListFocus(playListFocusIndex, -1);	
			$('playListFocus').style.top = cpTopDistance + FOCUS_DISTANCE * playListFocusIndex + "px";			
		}
	}
	else if(focusTab == OPTION_AREA)
	{
		setOptionMenuFocus(-1, optionFocusIndex_1);
		optionFocusIndex_1 = parseInt((optionFocusIndex_1 + 1) % OPTION_COUNT, 10);
		setOptionMenuFocus(optionFocusIndex_1, -1);
		$('optionFocus_1').style.top = focusOptionTopDistance + optionFocusIndex_1 * focusOptionHeight + "px";
	}
	else if(focusTab == SOUND_PRESET_AREA)//there is only sound preset option
	{
		if(footballModeFlag)//add for football mode
		{
			return;
		}
		//
		if(optionFocusIndex_2 + 1 < OPTION_INFO_MAX)
		{
			setOptionSecFocusScroll(-1, optionFocusIndex_2);
			//optionFocusIndex_2 = parseInt((optionFocusIndex_2 + 1) % OPTION_INFO_COUNT, 10);
			optionFocusIndex_2++;
			setOptionSecFocusScroll(optionFocusIndex_2, -1);
			$('optionFocus_2').style.top = focusOptionTopDistance + optionFocusIndex_2 * focusOptionHeight + "px";
		}
		else
		{
			moveDownRefreshSecList(soundPresetArray, OPTION_INFO_COUNT);
		}
		setting.previewSoundEffect(soundModeTransform(tmpStartIndex + optionFocusIndex_2, 1));
	}
	else if(focusTab == OPTION_DETAIL_AREA && optionFocusIndex_1 == OPTION_INFORMATION)
	{
		focusTab = OPTION_AREA;
		$('optionInfoDetails').style.display = 'none';
		setOptionMenuFocus(-1, optionFocusIndex_1);
		optionFocusIndex_1 = parseInt((optionFocusIndex_1 + 1) % OPTION_COUNT, 10);
		setOptionMenuFocus(optionFocusIndex_1, -1);
		resetFocusShape();
		$('optionFocus_1').style.top = focusOptionTopDistance + optionFocusIndex_1 * focusOptionHeight + "px";
	}
	hideMenu(FADE_TIME_15, DISPLAY_AREA);
}

function toHomePage()
{
	top.g_lastEnterType = -1;
	top.g_isMediaCenter = top.NDM_Others;
	hideInfoBox(0);
	//setTimeout(function(){
		multimedia.mediaStop(0);
		multimedia.deviceExitUninit();
		top.$("main").src = top.getHomepage("?tv&media");
		top.requestFocus(top.main, 1);
    //}, OPERATION_TIME);
}

function toBack()
{
	if(dmrFlag)
	{
		multimedia.mediaStop(0);
		multimedia.deviceExitUninit();
		multimedia.toRestoreSource(0,0);
		top.$("main").src = "channelPlay.html";
		top.requestFocus(top.main, 1);
		return;
	}
	switch(focusTab)
	{
		case PROGRESS_AREA:
		case DISPLAY_AREA:
			multimedia.mediaStop(0);
			//clearProgressArea();
			top.$("main").src = "mediaList.html?media";
			break;
		case PLAY_LIST_AREA:
			hideMenu(0, DISPLAY_AREA);
			break;
		case SOUND_PRESET_AREA:
		case OPTION_DETAIL_AREA:
			toLeft();
			break;
		case OPTION_AREA:
			toOption();
			break;
		case TIPS_AREA:
			toOK();
			break;
		default:
			hideMenu(0, DISPLAY_AREA);
			break;
	}
}

function toOK()//DISPLAY_AREA, OPTION_AREA, OPTION_DETAIL_AREA, PLAY_LIST_AREA, PROGRESS_AREA
{
	if(focusTab == DISPLAY_AREA)//focus on playing
	{
		switch(menuFocusIndex)
		{
			case MENU_FB:
				if(playStatus != S_ERROR)
				{
					if(seekStatusFlag)
					{
						clearTimeout(seekSettingTimer);
						multimedia.setSeekPoint(seekPoint * 1000);
						seekStatusFlag = false;
						$('seekTime').style.display = 'none';
					}
					else
					{
						refreshProgressBar();
					}
					$('progressArea').style.display = 'block';
					clearInterval(progressBarTimer);
					progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
					setFastPlay(-1);
				}
				break;
			case MENU_PRE:
				if(!dmrFlag || repeatMode == 3)//repeat one
				{
					if(repeatMode != 3)
					{
						playStatus = S_END;
						hideInfoBox(0);
						//clearProgressArea();
						playPre(1);
						//clearInterval(progressBarTimer);
					}
					else 
					{
						playPre(1);
					}
				}
				break;
			case MENU_P_P:
				if(playStatus == S_PLAY)
				{
					playStatus = S_PAUSE;
					multimedia.mediaPause();
					clearInterval(progressBarTimer);
					menuImgTag[2].src = "images/USB-Music-Control-icon-PlayFocus-B.png";
					return;
				}
				else if(playStatus == S_PAUSE )
				{
					playStatus = S_PLAY;
					multimedia.mediaResume();
					if(progressBarTimer)
						clearInterval(progressBarTimer);
					progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
					menuImgTag[2].src = "images/USB-Music-Control-icon-PauseFocus-B.png";
					return;
				}
				else if(playStatus == S_FF_FB)
				{
					setFastPlay(0);
			
					multimedia.mediaResume();
					if(progressBarTimer)
						clearInterval(progressBarTimer);
					progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
					//menuImgTag[2].src = "images/USB-Music-Control-icon-PlayFocus-B.png";
					return;
				}
				else if(playStatus == S_END)
				{
					top.g_availableStatus = mediaOpen(top.g_currentMedia.path);
				}
				break;
			case MENU_NEXT:
				if(!dmrFlag || repeatMode == 3)//repeat one
				{
					playStatus = S_END;
					hideInfoBox(0);
					//clearProgressArea();
					playNext(1);
					//clearInterval(progressBarTimer);
				}
				break;
			case MENU_FF:
				if(playStatus != S_ERROR)
				{
					if(seekStatusFlag)
					{
						clearTimeout(seekSettingTimer);
						multimedia.setSeekPoint(seekPoint * 1000);
						seekStatusFlag = false;
						$('seekTime').style.display = 'none';
					}
					else
					{
						refreshProgressBar();
					}
					$('progressArea').style.display = 'block';
					clearInterval(progressBarTimer);
					progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
					setFastPlay(1);
				}
				break;
			case MENU_MODE://repeat mode setting
				repeatMode = dmrFlag ? ((!repeatMode) ? 3 : 0) : (parseInt((repeatMode + 1) % 4, 10));
				switch(repeatMode)
				{
					case 0 ://repeat all
						menuImgTag[5].src = "images/USB-Music-Control-icon-Repeat1-Focus-B.png";
							break;
					case 1://repeat one
						menuImgTag[5].src = "images/USB-Music-Control-icon-Repeat4-Focus-B.png";
						break;
					case 2://normal
						menuImgTag[5].src = "images/USB-Music-Control-icon-Repeat3-Focus-B.png";
						break;
					case 3://random
						menuImgTag[5].src = "images/USB-Music-Control-icon-Repeat2-Focus-B.png";
						break;
					default:
						break;
				}
				multimedia.setAudioRepeatMode(repeatMode);
				return;
			case MENU_LIST:
				top.setContext5In1Type(top.CONTEXT_MENU_SELECT);
				displayFocusBox(0);
				hideInfoBox(0);
				focusTab = PLAY_LIST_AREA;
				if(currentPlayList.length <= PLAYLIST_MAX_LENGTH)
				{
					playListStart = 0;
					playListFocusIndex = playListIndex;
				}
				else if(playListIndex + PLAYLIST_MAX_LENGTH > currentPlayList.length)
				{
					playListStart = currentPlayList.length - PLAYLIST_MAX_LENGTH;
					playListFocusIndex = playListIndex - playListStart;
				}
				else
				{
					playListStart = playListIndex;
					playListFocusIndex = 0;
				}
				refreshPlayList();
				refreshCPFlag();
				resetFocusShape();
				showPlayListScrollBar(currentPlayList.length, playListStart);
				$('playList').style.display = 'block';
				setPlayListFocus(playListFocusIndex, -1);
				setTimeout(function(){$('playList').style.left = playListLeftDistance + "px"},1);
				hideMenu(FADE_TIME_15, DISPLAY_AREA);
				break;
		}
	}
	else if(focusTab == PROGRESS_AREA)
	{
		if(playStatus == S_FF_FB)
		{
			setFastPlay(0);
			return;
		}
		clearTimeout(seekSettingTimer);
		multimedia.setSeekPoint(seekPoint * 1000);
		$('seekTime').style.display = 'none';
		seekStatusFlag = false;
		elapsed = seekPoint;
		clearInterval(progressBarTimer);
		progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
	}
	else if(focusTab == PLAY_LIST_AREA)
	{
		var file = currentPlayList[playListStart + playListFocusIndex];
		if(!playLocked)
		{
			playLocked = true;
			clearProgressArea();
			multimedia.mediaStop(0);
			clearInterval(progressBarTimer);
			mediaOpen(file.path);
			hideMenu(FADE_TIME_15, DISPLAY_AREA);
		}
	}
	else if(focusTab == OPTION_AREA)
	{
		toRight();
		hideMenu(FADE_TIME_15, DISPLAY_AREA);
	}
	else if(focusTab == OPTION_DETAIL_AREA || focusTab == SOUND_PRESET_AREA)
	{
		setSPOption();
		hideMenu(FADE_TIME_15, DISPLAY_AREA);
	}
	else if(focusTab == TIPS_AREA)
	{
		setBackLight(1);
		hideInfoBox(0);
		multimedia.mediaStop(0);
		if(dmrFlag)
		{
			multimedia.deviceExitUninit();
			multimedia.toRestoreSource(0,0);
			top.$("main").src = "channelPlay.html";
			top.requestFocus(top.main, 1);
		}
		else if(errorFlag == ERROR_CANT_OPEN)
		{
			if(currentPlayList.length == 1)
			{
				top.$("main").src = "mediaList.html?media";
				return;
			}
			playNext(1);
			focusTab = DISPLAY_AREA;
			displayMenuBarFocus(1);
		}
		else if(errorFlag == ERROR_NET_DISCONNECTED)
		{
			multimedia.deviceExitUninit();
			top.g_mediaPosition = 1;
			top.$("main").src = "deviceList.html?remove";
		}
		else
		{
			top.$("main").src = "mediaList.html?media";
		}
	}
}

function toOption()
{
	if(focusTab == TIPS_AREA)
	{
		return;
	}
	if($('option').style.display == 'block')
	{
		hideMenu(0, lastFocusTab);
	}
	else
	{
		lastFocusTab = focusTab;
		if(lastFocusTab == PLAY_LIST_AREA)
		{
			lastFocusTab = DISPLAY_AREA;
		}
		if(lastFocusTab == DISPLAY_AREA)
		{
			displayMenuBarFocus(0);
		}
		footballModeFlag = setting.footballMode;
		top.setContext5In1Type(top.CONTEXT_MENU_SELECT);
		optionFocusIndex_1 = 0;
		optionFocusIndex_2 = 0;
		focusTab = OPTION_AREA;
		$('option').style.display = 'block';
		$('playList').style.left = screenWidth + "px";
		setTimeout(function(){$('playList').style.display = 'none';},playListAnimateTime);
		resetFocusShape();
		//optionInfoArray[0] = multimedia.audioSoundEffect;//sound preset
		optionInfoArray[0] = soundModeTransform(setting.soundPreset, 0);//get value from mw
		//optionInfoArray[1] = 0;//BGM mode
		$('optionInfoContent0').innerText = soundPresetArray[optionInfoArray[0]];
		//$('BGMContent').innerText = "Off";
		setOptionMenuFocus(optionFocusIndex_1, -1);
		hideMenu(FADE_TIME_15, lastFocusTab);
	}
}

function setErrorTips(tmp)
{
	setBackLight(1);
	hideMenu(0, DISPLAY_AREA);
	playStatus = S_ERROR;
	operatableFlag	= true;	
	focusTab = TIPS_AREA;
	hideInfoBox(0);
	errorFlag = tmp;
	displayMenuBarFocus(0);
}

function setSPOption()
{
	switch(optionFocusIndex_1)
	{
		case SOUND_MODE://sound preset
			//multimedia.audioSoundEffect = optionFocusIndex_2;
			testLog("set sound preset, tmpStartIndex["+tmpStartIndex+"], optionFocusIndex_2["+optionFocusIndex_2+"]");
			setting.soundPreset = soundModeTransform(tmpStartIndex + optionFocusIndex_2, 1);
			optionInfoArray[0] = optionFocusIndex_2 + tmpStartIndex;
			$('optionInfoContent0').innerText = soundPresetArray[optionInfoArray[0]];
			break;
		//case BGM_MODE://BGM mode
		//	break;
		case AUDIO_ONLY_MODE:
			setBackLight(0);
			hideMenu(0, DISPLAY_AREA);
			return;
		case OPTION_INFORMATION:
			break;
	}
	//$('BGM').style.display = 'none';
	$('optionSecondList').style.display = 'none';
	
	focusTab = OPTION_AREA;
	resetFocusShape();
	setOptionMenuFocus(optionFocusIndex_1, -1);
}

function resetFocusShape()
{
	switch(focusTab)
	{
		case DISPLAY_AREA:
			$('focus').style.display = 'none';
			menuImgTag[2].src = "images/USB-Music-Control-icon-PauseFocus-B.png";
			break;
		case OPTION_DETAIL_AREA:
			$('optionFocus_2').style.display = (optionFocusIndex_1 == OPTION_INFORMATION) ? 'none' : 'block';
			focusOptionHeight = 80;
			focusOptionTopDistance = 30;
			if(optionFocusIndex_1 == OPTION_INFORMATION)
			{
				$('optionFocus_1').src = "images/Focus_USB_1.png";
			}
			else 
			{
				$('optionFocus_1').src = "images/Focus_USB_1_.png";
			}
			$('optionFocus_2').style.top = focusOptionTopDistance + "px";
			$('optionFocus_2').style.left = 0 + "px";
			$('optionFocus_2').style.width = 300 + "px";
			$('optionFocus_2').style.height = focusOptionHeight + "px";
			$('optionFocus_2').style.top = focusOptionTopDistance + optionFocusIndex_2 * focusOptionHeight + "px";
			break;
		case OPTION_AREA:
			$('focus').style.display = 'none';
			focusOptionHeight = 80;
			focusOptionTopDistance = 60;
			$('optionFocus_1').style.top = focusOptionTopDistance + "px";
			$('optionFocus_1').style.left = 0 + "px";
			$('optionFocus_1').style.width = 540 + "px";
			$('optionFocus_1').style.height = focusOptionHeight + "px";
			$('optionFocus_1').src = "images/Focus_USB_1.png";//
			$('optionFocus_1').style.top = focusOptionTopDistance + optionFocusIndex_1 * focusOptionHeight + "px";
			break;
		case SOUND_PRESET_AREA:
			$('optionFocus_2').style.display = 'block';
			$('optionFocus_1').src = "images/Focus_USB_1_.png";
			focusOptionHeight = 80;
			focusOptionTopDistance = optionFocusIndex_1 * focusOptionHeight + 30;
			$('optionFocus_2').style.top = focusOptionTopDistance + "px";
			$('optionFocus_2').style.left = 0 + "px";
			$('optionFocus_2').style.width = 300 + "px";
			$('optionFocus_2').style.height = focusOptionHeight + "px";
			$('optionFocus_2').style.top = focusOptionTopDistance + optionFocusIndex_2 * focusOptionHeight + "px";
			break;
		case OPTION_DETAIL_AREA:
			if(optionFocusIndex_1 == OPTION_INFORMATION)
			{
				$('optionFocus_2').style.display = 'none';
				$('optionFocus_1').src = "images/Focus_USB_1.png";//
			}
			else
			{
				$('optionFocus_1').src = "images/Focus_USB_1_.png";
			}
			focusOptionHeight = 80;
			focusOptionTopDistance = optionFocusIndex_1 * focusOptionHeight + 30;
			$('optionFocus_2').style.top = focusOptionTopDistance + "px";
			$('optionFocus_2').style.left = 0 + "px";
			$('optionFocus_2').style.width = 300 + "px";
			$('optionFocus_2').style.height = focusOptionHeight + "px";
			$('optionFocus_2').style.top = focusOptionTopDistance + optionFocusIndex_2 * focusOptionHeight + 30 + "px";
			break;
		case PLAY_LIST_AREA:
			$('focus').style.display = 'none';
			FOCUS_DISTANCE = 80;
			FOCUS_LEFT_DISTANCE = 5;
			$('playListFocus').style.top = cpTopDistance + (FOCUS_DISTANCE * playListFocusIndex) + "px";
			break;
		case PROGRESS_AREA:
			break;
		default:
			$('focus').style.display = 'none';
			break;
	}
}

function resetOptionSecBg()
{
	if(optionFocusIndex_1 == OPTION_SOUND_PRESET)
	{
		$('optionSecondList').style.top = (30 + optionFocusIndex_1 * 80 > 608)
			? 608 + "px" 
			: 30 + optionFocusIndex_1 * 80 + "px";
		$('optionSecDiv').style.height = 60 + 80 * 5 + "px";
		/*
		$('optionSecondUl').style.top = 30 + optionFocusIndex_1 * 80 + "px";
		$('optionSecBg').style.top =  30 + optionFocusIndex_1 * 80 + "px";
		$('optionSecBg').style.height = 463 + "px";
		*/
	}
	else if(optionFocusIndex_1 == OPTION_INFORMATION)
	{
		$('optionInfoDetails').style.top = 30 + optionFocusIndex_1 * 80 + "px";
	}
	return;
}

function setPlayListMaxLength()
{
	var length = currentPlayList.length;
	if(length >= PLAYLIST_MAX_LENGTH)
	{
		MAX_LENGTH_ONE_PAGE = PLAYLIST_MAX_LENGTH;
	}
	else
	{
		MAX_LENGTH_ONE_PAGE = length;
	}
}

function getMediaFileDuration(path)
{
	fileDuration = multimedia.getMediaFileDuration(path);
	if(fileDuration < 0)
	{
		fileDuration = 0;
	}
	return doTime(fileDuration);
}

function hideMenu(time, nextFocusTab)
{
	clearTimeout(menuTimer);
	if(time != 0)
	{
		menuTimer = setTimeout(function(){hideMenuDetail(nextFocusTab);}, time);
	}
	else
	{
		hideMenuDetail(nextFocusTab);
	}
}

function hideMenuDetail(nextFocusTab)
{
	seekCount = 0;
	if(focusTab == PLAY_LIST_AREA)
	{
		setPlayListFocus(-1, playListFocusIndex);
	}
	setOptionMenuFocus(-1, -1);
	focusTab = nextFocusTab;
	if(focusTab == DISPLAY_AREA)
	{
		displayMenuBarFocus(1);	
	}
	//$('BGM').style.display = 'none';
	$('focus').style.display = 'none';
	$('option').style.display = 'none';
	$('seekTime').style.display = 'none';
	$('playList').style.left = screenWidth + "px";
	setTimeout(function(){$('playList').style.display = 'none';},playListAnimateTime);
	$('optionSecondList').style.display = 'none';
	$('optionInfoDetails').style.display = 'none';
	top.setContext5In1Type(top.CONTEXT_MUSIC_MOVIE_PLAYER);
}

function hideInfoBox(time)
{
	clearTimeout(infoBoxTimer);
	if(time == 0)
	{
		$("fileInfoBox").style.display = 'none';
		return;
	}
	infoBoxTimer = setTimeout(function(){
		$("fileInfoBox").style.display = 'none';
		}, time);
}

function fillOptionSecinfo(totalCount, name, startIndex)
{
	var num = 5;
	var count = OPTION_INFO_MAX;
	if(totalCount < OPTION_INFO_MAX)
	{
		num = totalCount;
		count = totalCount;
	}
	for(var i = 0; i < count; i++)
	{
		clickOptionMenuLi_2[i].style.display = 'block';
		optionSecListSpan[i].innerText = name[startIndex + i];
	}
	for(var i = count; i < OPTION_INFO_MAX; i++)
	{
		clickOptionMenuLi_2[i].style.display = 'none';
		optionSecListSpan[i].innerText = "";
	}
	return num;
}

function fillOptionSecList()
{
	if(optionFocusIndex_1 == OPTION_SOUND_PRESET)//sort
	{
		fillOptionSecinfo(soundPresetArray.length, soundPresetArray, soundPresetStartIndex);
		/*
		for(var i = 0; i < soundPresetArray.length; i++)
		{
			optionSecListSpan[i].innerText = soundPresetArray[i];
			optionSecListSpan[i].style.color = footballModeFlag ? "#666" : "#aaa";
		}*/
		resetOptionSecBg();
	}
	else if(optionFocusIndex_1 == OPTION_INFORMATION)
	{
		var tmp = (musicFileInfo.name != null && musicFileInfo.name != "") ? musicFileInfo.name : naInfo;
		optionInfoDetailSpan[0].innerText = fileNameText + ": " + tmp;
		tmp = (musicFileInfo.artist != null && musicFileInfo.artist != "") ? musicFileInfo.artist : naInfo;
		optionInfoDetailSpan[1].innerText = fileArtistText + ": " + tmp;
		tmp = (musicFileInfo.album != null && musicFileInfo.album != "") ? musicFileInfo.album : naInfo;
		optionInfoDetailSpan[2].innerText = fileAlbumText + ": " + tmp;
		tmp = (musicFileInfo.genre != null && musicFileInfo.genre != "") ? musicFileInfo.genre : naInfo;
		optionInfoDetailSpan[3].innerText = fileGenreText + ": " + tmp;
		var tmpYear = (musicFileInfo.year != null && musicFileInfo.year != "") ? musicFileInfo.year : naInfo;
		/*
		var tmpMonth = (musicFileInfo.month != null && musicFileInfo.month != "") ? musicFileInfo.month : naInfo;
		var tmpDay = (musicFileInfo.day != null && musicFileInfo.day != "") ? musicFileInfo.day : naInfo;
		*/
		optionInfoDetailSpan[4].innerText = fileYearText + ": " + tmpYear;
		optionInfoDetailSpan[5].style.display = 'block';
		optionInfoDetailSpan[5].innerText = fileDurationText + ": " + $('duration').innerText;

		for(var i = 0; i < optionInfoDetailSpan.length; i++)
		{
			setHTMLScroll(optionInfoDetailSpan[i]);
		}
	}
	return;
}

function arrowPlayListDisplay(startIndex)
{
	$('arrowUpPlayList').style.display = (startIndex == 0) ? 'none' : 'block';
	$('arrowDownPlayList').style.display = (startIndex + PLAYLIST_MAX_LENGTH < currentPlayList.length) ? 'block' : 'none';
}


function refreshPlayList()
{
	for(var i = 0; i < PLAYLIST_MAX_LENGTH; i++)
	{
		if(i > MAX_LENGTH_ONE_PAGE - 1)
		{
			clickPlayListLi[i].style.display = 'none';
			continue;
		}
		$("name" + i).style.display = 'block';
		$("name" + i).innerText = currentPlayList[playListStart + i].name;
	}
	arrowPlayListDisplay(playListStart);
}

function repeatModeInit()
{
	repeatMode = multimedia.getAudioRepeatMode();
	repeatMode = (repeatMode < 0 || repeatMode > 4) ? 0 : repeatMode;
	if(repeatMode == 0)//repeat all
	{
		menuImgTag[5].src = "images/USB-Music-Control-icon-Repeat1-B.png";	
	}
	else if(repeatMode == 1)//repeat one
	{
		menuImgTag[5].src = "images/USB-Music-Control-icon-Repeat4-B.png";	
	}
	else if(repeatMode == 2)//normal
	{
		menuImgTag[5].src = "images/USB-Music-Control-icon-Repeat3-B.png";
	}
	else if(repeatMode == 3)//random
	{
		menuImgTag[5].src = "images/USB-Music-Control-icon-Repeat2-B.png";
	}
	else
	{
		menuImgTag[5].src = "images/USB-Music-Control-icon-Repeat1-B.png";
	}
}

function showPlayListScrollBar(length, start)
{
	if(length > PLAYLIST_MAX_LENGTH)
	{
		$(playListScrollName).style.display = 'block';
		$(scrollBarName).style.height = parseInt(SCROLL_MAX_HEIGHT * PLAYLIST_MAX_LENGTH / length) + "px";
		$(scrollBarName).style.top = parseInt(SCROLL_MAX_HEIGHT * start / length) + "px";
	}
	else
	{
		$(playListScrollName).style.display = 'none';
		$(scrollBarName).style.height = 0 + "px";
		$(scrollBarName).style.top =  0 + "px";
	}
}

function refreshCPFlag()
{
	if(playListIndex >= playListStart 
		&& playListIndex < playListStart + MAX_LENGTH_ONE_PAGE)
	{
		$('currentPlay').style.display = 'block';
		$('currentPlay').style.top = cpTopDistance + cpFlagHeight * (playListIndex - playListStart) + "px";
	}
	else
	{
		$('currentPlay').style.display = 'none';
	}
}

function refreshProgressBar()
{
	if(fileDuration > 0)
	{
		//do nothing
	}
	else
	{
		$('duration').innerText = getMediaFileDuration(top.g_currentMedia.path);
	}
	
	if(fileDuration > 0)
	{
		elapsed = multimedia.getNowPlayTime();
		console.log("------------------------------------="+elapsed);
		if(elapsed>fileDuration)
		{
			return;
		}
		else if(elapsed > 0)
		{
			if(elapsed > fileDuration)
			{
				elapsed = fileDuration;
			}
			
			progressBarPercent = parseInt(elapsed * 100 / fileDuration, 10);
			if(!seekStatusFlag)
			{
				if(focusTab == PROGRESS_AREA || (focusTab == OPTION_AREA && lastFocusTab == PROGRESS_AREA))
				{
					$('endBar').src = "images/USB-Video-Progress-bar-Slider-02_.png";
					seekPoint = elapsed;
				}
				else if(focusTab != PROGRESS_AREA)
				{
					$('endBar').src = (progressBarPercent <= 14)
						? "images/USB-Video-Progress-bar-Slider-01_.png"
						: "images/USB-Video-Progress-bar-Slider-01.png";
				}
				$('endBar').style.left = parseInt(elapsed * BAR_LENGTH / fileDuration, 10) - 15 + "px";
			}
			$("startBar").style.width = parseInt(elapsed * BAR_LENGTH / fileDuration, 10) + "px";
		}
		else
		{
			elapsed = 0;
		}
		$("elspased").innerText = doTime(elapsed);
	}
	else
	{
		fileDuration = 0;
	}
	//modify for lyric
	if(iLineCount==0)
		return;
	var lyricIndex = multimedia.getLyricCurrentIndex(elapsed);
	if(lyricIndex != nextLyricLine)
	{
		nextLyricLine = lyricIndex;
	}
	else//not scroll
	{
		return;
	}
	//nextLyricLine = value;
	if(lyricScrollTimer)
	{
		clearTimeout(lyricScrollTimer);
		lyricScrollTimer = 0;
		$('lyricInfo').scrollTop = currentLyricLine * iLineHeight;
	}
	iScrollAmount = (iLineHeight * (nextLyricLine - currentLyricLine)) / lyricScrollCount;
	lyricScrollRun(lyricScrollCount);
	
}

function changeMenuFocus(offset)
{
	switch(menuFocusIndex)
	{
		case MENU_FB:
			menuImgTag[0].src = "images/USB-Music-Control-icon-FB-B.png";
			break;
		case MENU_PRE:
			menuImgTag[1].src = "images/USB-Music-Control-icon-Previous-B.png";
			break;
		case MENU_P_P:
			menuImgTag[2].src = (playStatus == S_PLAY || playStatus == S_FF_FB)
				? "images/USB-Music-Control-icon-Pause-B.png"
				: "images/USB-Music-Control-icon-Play-B.png";
			break;
		case MENU_NEXT:
			menuImgTag[3].src = "images/USB-Music-Control-icon-Next-B.png";
			break;
		case MENU_FF:
			menuImgTag[4].src = "images/USB-Music-Control-icon-FF-B.png";
			break;
		case MENU_MODE:
			if(repeatMode == 0)//repeat all
			{
				menuImgTag[5].src = "images/USB-Music-Control-icon-Repeat1-B.png";
				
			}
			else if(repeatMode == 1)//repeat one
			{
				menuImgTag[5].src = "images/USB-Music-Control-icon-Repeat4-B.png";
				
			}
			else if(repeatMode == 2)//normal
			{
				menuImgTag[5].src = "images/USB-Music-Control-icon-Repeat3-B.png";
			}
			else if(repeatMode == 3)//random
			{
				menuImgTag[5].src = "images/USB-Music-Control-icon-Repeat2-B.png";
			}
			else
			{
				menuImgTag[5].src = "images/USB-Music-Control-icon-Repeat1-B.png";
			}
			break;
		case MENU_LIST:
			menuImgTag[6].src = "images/USB-Music-Control-icon-Playlist-B.png";
			break;
	}
	var tmp = parseInt(((menuFocusIndex + offset + MENU_COUNT) % MENU_COUNT), 10);
	if(!pauseableFlag && (tmp == MENU_P_P || tmp == MENU_FF || tmp == MENU_FB))
	{
		menuFocusIndex = parseInt(((tmp + offset + MENU_COUNT) % MENU_COUNT), 10);
	}
	else if((pauseableFlag && !seekableFlag) && (tmp == MENU_FF || tmp == MENU_FB))
	{
		menuFocusIndex = parseInt(((tmp + offset + MENU_COUNT) % MENU_COUNT), 10);
	}
	else
	{
		menuFocusIndex = tmp;
	}
	switch(menuFocusIndex)
	{
		case MENU_FB:
			menuImgTag[0].src = "images/USB-Music-Control-icon-FBFocus-B.png";
			break;
		case MENU_PRE:
			menuImgTag[1].src = "images/USB-Music-Control-icon-PreviousFocus-B.png";
			break;
		case MENU_P_P:
			menuImgTag[2].src = (playStatus == S_PLAY)
				? "images/USB-Music-Control-icon-PauseFocus-B.png"
				: "images/USB-Music-Control-icon-PlayFocus-B.png";
			break;
		case MENU_NEXT:
			menuImgTag[3].src = "images/USB-Music-Control-icon-Next-Focus-B.png";
			break;
		case MENU_FF:
			menuImgTag[4].src = "images/USB-Music-Control-icon-FFFocus-B.png";
			break;
		case MENU_MODE:
			if(repeatMode == 2)//normal
			{
				menuImgTag[5].src = "images/USB-Music-Control-icon-Repeat3-Focus-B.png";
			}
			else if(repeatMode == 3)//randam
			{
				menuImgTag[5].src = "images/USB-Music-Control-icon-Repeat2-Focus-B.png";
			}
			else if(repeatMode == 0)//repeat all
			{
				menuImgTag[5].src = "images/USB-Music-Control-icon-Repeat1-Focus-B.png";
			}
			else if(repeatMode == 1)//reapeat one
			{
				menuImgTag[5].src = "images/USB-Music-Control-icon-Repeat4-Focus-B.png";
			}
			else
			{
				menuImgTag[5].src = "images/USB-Music-Control-icon-Repeat1-Focus-B.png";
			}
			break;
		case MENU_LIST:
			menuImgTag[6].src = "images/USB-Music-Control-icon-PlaylistFocus-B.png";
			break;
	}
}

function displayFocusBox(flag)
{
	if(flag)
	{
		focusDisplayFlag = true;
		if(focusTab == DISPLAY_AREA)
		{
			displayMenuBarFocus(1);
		}
	}
	else
	{
		focusDisplayFlag = false;
		displayMenuBarFocus(0);
	}
}

function displayMenuBarFocus(flag)
{
	if(!flag)//
	{
		switch(menuFocusIndex)
		{
			case MENU_FB:
				menuImgTag[0].src = "images/USB-Music-Control-icon-FB-B.png";
				break;
			case MENU_PRE:
				menuImgTag[1].src = "images/USB-Music-Control-icon-Previous-B.png";
				break;
			case MENU_P_P:
				menuImgTag[2].src = (playStatus == S_PLAY)
					? "images/USB-Music-Control-icon-Pause-B.png"
					: "images/USB-Music-Control-icon-Play-B.png";
				break;
			case MENU_NEXT:
				menuImgTag[3].src = "images/USB-Music-Control-icon-Next-B.png";
				break;
			case MENU_FF:
				menuImgTag[4].src = "images/USB-Music-Control-icon-FF-B.png";
				break;
			case MENU_MODE:
				if(repeatMode == 2)//normal
				{
					menuImgTag[5].src = "images/USB-Music-Control-icon-Repeat3-B.png";
				}
				else if(repeatMode == 3)//random
				{
					menuImgTag[5].src = "images/USB-Music-Control-icon-Repeat2-B.png";
				}
				else if(repeatMode == 0)//repeat all
				{
					menuImgTag[5].src = "images/USB-Music-Control-icon-Repeat1-B.png";
				}
				else if(repeatMode == 1)//repeat one
				{
					menuImgTag[5].src = "images/USB-Music-Control-icon-Repeat4-B.png";
				}
				else
				{
					menuImgTag[5].src = "images/USB-Music-Control-icon-Repeat1-B.png";
				}
				break;
			case MENU_LIST:
				menuImgTag[6].src = "images/USB-Music-Control-icon-Playlist-B.png";
				break;
		}
	}
	else
	{
		switch(menuFocusIndex)
		{
			case MENU_FB:
				menuImgTag[0].src = "images/USB-Music-Control-icon-FBFocus-B.png";
				break;
			case MENU_PRE:
				menuImgTag[1].src = "images/USB-Music-Control-icon-PreviousFocus-B.png";
				break;
			case MENU_P_P:
				menuImgTag[2].src = (playStatus == S_PLAY)
					? "images/USB-Music-Control-icon-PauseFocus-B.png"
					: "images/USB-Music-Control-icon-PlayFocus-B.png";
				break;
			case MENU_NEXT:
				menuImgTag[3].src = "images/USB-Music-Control-icon-Next-Focus-B.png";
				break;
			case MENU_FF:
				menuImgTag[4].src = "images/USB-Music-Control-icon-FFFocus-B.png";
				break;
			case MENU_MODE:
				if(repeatMode == 2)//normal
				{
					menuImgTag[5].src = "images/USB-Music-Control-icon-Repeat3-Focus-B.png";
				}
				else if(repeatMode == 3)//randam
				{
					menuImgTag[5].src = "images/USB-Music-Control-icon-Repeat2-Focus-B.png";
				}
				else if(repeatMode == 0)//repeat all
				{
					menuImgTag[5].src = "images/USB-Music-Control-icon-Repeat1-Focus-B.png";
				}
				else if(repeatMode == 1)//reapeat one
				{
					menuImgTag[5].src = "images/USB-Music-Control-icon-Repeat4-Focus-B.png";
				}
				else
				{
					menuImgTag[5].src = "images/USB-Music-Control-icon-Repeat1-Focus-B.png";
				}
				break;
			case MENU_LIST:
				menuImgTag[6].src = "images/USB-Music-Control-icon-PlaylistFocus-B.png";
				break;
		}
	}
}

function refreshSeekingTime(tmp)
{
	if((tmp == 1 && seekPoint == fileDuration)
		|| (tmp == -1 && seekPoint == 0))
	{
		return;
	}
	seekCount = 0;
	seekCount += tmp;
	seekPoint = seekStartTime + (SEEK_TIME * seekCount);
	seekStartTime = seekPoint;
	if(seekPoint < 0)
	{
		seekPoint = 0;
		seekStartTime = 0;
	}
	if(seekPoint > fileDuration)
	{
		seekPoint = fileDuration;
		seekStartTime = fileDuration;
	}
	var progressBarPercent = parseInt(seekPoint * 100 / fileDuration, 10);
	var tmpSeekTime = doTime(seekPoint);
	$('seekTime').innerText = doTime(seekPoint);
	$('seekTime').style.left = 80 + progressBarPercent * BAR_LENGTH / 100 + "px";
	$('endBar').style.left = progressBarPercent * BAR_LENGTH / 100 - 15 + "px";
}

function setOptionFocusScroll(currentNum, lastNum)
{
	if(currentNum == OPTION_SOUND_PRESET)
	{
		setHTMLScroll($(optionListName + currentNum));
		setHTMLScroll($(optionListContentName + currentNum));
	}
	if(lastNum == OPTION_SOUND_PRESET)
	{
		resetScrollHtmlInner($(optionListName + lastNum), "hidden", "ellipsis");	
		resetScrollHtmlInner($(optionListContentName + lastNum), "hidden", "ellipsis");	
	}
	if(currentNum == -1 && lastNum == -1)
	{
		for(var i = 0; i < OPTION_MAX_COUNT; i++)
		{
			//$(optionListName + OPTION_SOUND_PRESET).className = "optionFirstListSpan_static";
			resetScrollHtmlInner($(optionListContentName + i), "hidden", "ellipsis");
		}
		resetScrollHtmlInner($(optionListName + OPTION_SOUND_PRESET), "hidden", "ellipsis");
	}
}

function setOptionMenuFocus(currentIndex, lastIndex)
{
	for(var i = 0; i < optionMenuImg.length; i++)
	{
		optionMenuImg[i].src = "images/Icon-R-Focus.png";
	}
	$('optionInfoContent0').style.color = footballModeFlag ? "#666" : "#aaa";
	optionMenuImg[OPTION_SOUND_PRESET].src = footballModeFlag ? "images/Icon-R-Disable.png" : "images/Icon-R-Focus.png";
	return;

	if(currentIndex >= optionMenuImg.length || lastIndex >= optionMenuImg.length)
	{
		return;
	}
	if(currentIndex > -1)
	{
		//optionMenuImg[currentIndex].src = "images/Icon-R-Focus.png";
		optionMenuImg[currentIndex].src = (currentIndex == OPTION_SOUND_PRESET && footballModeFlag)
			? "images/Icon-R-Disable.png" : "images/Icon-R-Focus.png";
	}
	if(lastIndex > -1)
	{
		optionMenuImg[lastIndex].src = "images/Icon-R-Disable.png";
	}
	if(currentIndex == -1 && lastIndex == -1)
	{
		for(var i = 0; i < optionMenuImg.length; i++)
		{
			optionMenuImg[i].src = "images/Icon-R-Disable.png";
		}
	}
	setOptionFocusScroll(currentIndex, lastIndex);
}

function isOverflowed(element)
{
    return element.scrollWidth > element.clientWidth;
}

function getKeyFramse(index)
{
	var styleSheet = document.styleSheets[index];
	var keyframesRule = [];
	[].slice.call(styleSheet.cssRules).forEach(function(item){
	    if(item.type === CSSRule.WEBKIT_KEYFRAMES_RULE) 
	    {
	    	keyframesRule.push(item);
	    }
	});
  	return keyframesRule;
}

function modifyScrollDistance(animate, distance1, distance2)
{
	var animateIndex = 0;
	var tmp = 0;
	var flag = false;
	for(var i = 0; i < document.styleSheets.length; i++)
	{
		tmp = getKeyFramse(i);
		for(var j = 0; j < tmp.length; j++)
		{
			if(tmp[j].name == animate)
			{

				animateIndex = j;
				flag = true;
				break;
			}
		}
		if(flag) break;
	}
	tmp[animateIndex].deleteRule('0%');
	tmp[animateIndex].deleteRule('100%');
	var rule1 = "0% {left:" + distance1 + "px;}";
	var rule2 = "100% {left:-" + distance2 + "px;}";
	tmp[animateIndex].insertRule(rule1, 0);
	tmp[animateIndex].insertRule(rule2, 1);
}

function setHTMLScroll(tmp)
{
	if(isOverflowed(tmp))
	{
		/*modifyScrollDistance("move_second", 
				$(optionSecContentName + currentNum).clientWidth, 
				$(optionSecContentName + currentNum).scrollWidth);
			$(optionSecContentName + currentNum).className = "optionSecondListSpan_animate";*/
		resetScrollHtmlInner(tmp, "-webkit-marquee", "clip");
	}
	else
	{
		//$(optionSecContentName + currentNum).className = "optionSecondListSpan_static";
		resetScrollHtmlInner(tmp, "hidden", "ellipsis");
	}
}

function resetScrollHtmlInner(htmlTagList, displayStyle, overFlowStyle)
{
	htmlTagList.setAttribute("contentText", htmlTagList.innerHTML);
	htmlTagList.style.overflowX = displayStyle;
	htmlTagList.style.textOverflow = overFlowStyle;
	setTimeout(function(){htmlTagList.innerHTML = htmlTagList.getAttribute("contentText");}, 1);
}

function setOptionSecFocusScroll(currentNum, lastNum)
{
	if(currentNum > -1)
	{
		setHTMLScroll($(optionSecContentName + currentNum));
	}
	if(lastNum > -1)
	{
		resetScrollHtmlInner($(optionSecContentName + lastNum), "hidden", "ellipsis");
	}
	if(currentNum == -1 && lastNum == -1)
	{
		for(var i = 0; i < OPTION_MAX_SEC_LIST; i++)
		{
			resetScrollHtmlInner($(optionSecContentName + i), "hidden", "ellipsis");
		}
	}
}

function setPlayListFocus(currentNum, lastNum)
{
	if(currentNum > -1)
	{
		setHTMLScroll($(playListName + currentNum));
	}
	if(lastNum > -1)
	{
		resetScrollHtmlInner($(playListName + lastNum), "hidden", "ellipsis");
	}
	if(currentNum == -1 && lastNum == -1)
	{
		for(var i = 0; i < PLAYLIST_MAX_LENGTH; i++)
		{
			resetScrollHtmlInner($(playListName + i), "hidden", "ellipsis");
		}
	}
}

function fillFileInformation(file)
{
	var musicInfoTmp = $("musicInfo").getElementsByTagName("span");
	var tmp = (file.name != null && file.name != "") ? file.name : naInfo;
	informationBoxLi[0].innerText = "  " + fileNameText + ": " + tmp + "  ";
	musicInfoTmp[0].innerText = tmp;
	tmp = (file.artist != null && file.artist != "") ? file.artist : naInfo;
	informationBoxLi[1].innerText = "  " + fileArtistText + ": " + tmp + "  ";
	tmp = (file.album != null && file.album != "") ? file.album : naInfo;
	informationBoxLi[2].innerText = "  " + fileAlbumText + ": " + tmp + "  ";
	tmp = (file.genre != null && file.genre != "") ? file.genre : naInfo;
	informationBoxLi[3].innerText = fileGenreText + ": " + tmp;
	var tmpYear = (file.year != null && file.year != "") ? file.year : naInfo;
	informationBoxLi[4].innerText = fileYearText + ": " + tmpYear;
	informationBoxLi[5].innerText = fileDurationText + ": " + $("duration").innerText;
	for(var i = 1; i < musicInfoTmp.length; i++)
	{
		musicInfoTmp[i].innerText = informationBoxLi[i].innerText;
	}
	if(file.cover != null && file.cover != "")
	{
		$("musicCover").src = file.cover;
	}
	else
	{
		$("musicCover").src = "images/USB-Music-Default-icon.png";
	}
}

function fillLyricInfo()
{
	$('lyricInfo').innerHTML = "";
	var lyricPath = currentFileInfo.path.substr(0, currentFileInfo.path.lastIndexOf(".")) + ".lrc";
	iLineCount = multimedia.getLyricTotalLineNum(lyricPath);
	if(iLineCount == 0) return;
	var tmpLyric = multimedia.getLyricInfo(0, iLineCount);
	var elapsed = multimedia.getNowPlayTime();
	var lyricIndex = multimedia.getLyricCurrentIndex(elapsed);
	for(lyricIndex = 0; lyricIndex < iLineCount; lyricIndex++)
	{
		$('lyricInfo').innerHTML += "<p class='lyric' id='lyric"+lyricIndex+"'>"+tmpLyric[lyricIndex].lyric + "</p>";
	}
}
setTimeout(fillLyricInfo,1)
function lyricScrollRun(count)
{
	var elapsed = multimedia.getNowPlayTime()
	var lyricIndex = multimedia.getLyricCurrentIndex(elapsed);
	var lyric_p=document.getElementsByTagName("p");
	for(var i=0;i<lyric_p.length;i++)
	{
		lyric_p[i].index=i;
	}
	if(document.getElementById("lyric"+lyricIndex))
	{
		var obj=document.getElementById("lyric"+lyricIndex);
		for(var i=0;i<obj.index;i++)
		{
			lyric_p[i].className="played";
		}
		for(var j=obj.index;j<lyric_p.length;j++)
		{
			lyric_p[j].className="";
		}
		obj.className="white active";
		$('lyricInfo').style.top=$('lyricList').offsetHeight/2-obj.offsetTop+"px";
	}
	--count;
	if(!count)
	{
		currentLyricLine = nextLyricLine;
		clearTimeout(lyricScrollTimer);
		lyricScrollTimer = 0;
	} 
	else
	{
		lyricScrollTimer = setTimeout("lyricScrollRun(" + count + ")", 1);
	}
}

function doTime(time)
{
	var hour = parseInt(time / 3600, 10);
	var minute = parseInt((time - hour * 3600) / 60, 10);
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

function setFastPlay(type)//type[1]ff; type[-1]fb; type[0]ori
{
	if(focusTab == DISPLAY_AREA)
	{
		if(menuFocusIndex == MENU_P_P && focusDisplayFlag)
		{
			menuImgTag[2].src = "images/USB-Music-Control-icon-PlayFocus-B.png";
		}
		else 
		{
			menuImgTag[2].src = "images/USB-Music-Control-icon-Play-B.png";			
		}
	}
	else
	{
		menuImgTag[2].src = "images/USB-Music-Control-icon-Play-B.png";
	}

	if(type < 0 && ff_fb_flag >= 0)
	{
		ff_fb_flag = -1;
	}
	else if(type > 0 && ff_fb_flag <= 0)
	{
		ff_fb_flag = 1;
	}
	else if(type != 0)
	{
		ff_fb_flag += type;
		ff_fb_flag = (ff_fb_flag > 2) || (ff_fb_flag < -2) ? 0 : ff_fb_flag;
	}
	else if(type == 0 && (playStatus == S_FF_FB))
	{
		ff_fb_flag = 0;
	}
	switch(ff_fb_flag)
	{
		case 0:
			if(menuFocusIndex == MENU_P_P && focusDisplayFlag && focusTab == DISPLAY_AREA)
			{
				menuImgTag[2].src = "images/USB-Music-Control-icon-PauseFocus-B.png";
			}
			else
			{
				menuImgTag[2].src = "images/USB-Music-Control-icon-Pause-B.png";
			}
			$('statusIcon').style.display = 'none';
			$('statusIcon').src = "images/USB-Icon-Play.png";
			playStatus = S_PLAY;
			multimedia.mediaFastForward(1);
			break;
		case 1:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FF_2x.png";
			playStatus = S_FF_FB;
			multimedia.mediaFastForward(2);
			break;
		case 2:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FF_4x.png";
			playStatus = S_FF_FB;
			multimedia.mediaFastForward(4);
			break;
		case -1:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FB_2x.png";
			playStatus = S_FF_FB;
			multimedia.mediaFastBackward(2);
			break;
		case -2:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FB_4x.png";
			playStatus = S_FF_FB;
			multimedia.mediaFastBackward(4);
			break;
	}
}


function mediaOpen(path)
{
	//current play success
	//$("loading").style.display = 'none';
	//$("unavailable").style.display = 'none';
	operatableFlag=false;
	isUpdateFileInfo = true;
	return multimedia.mediaOpen(path);
}
var num = 1;
function playPre(num)
{
	// first clear progress area because do next file maybe delay
	operatableFlag=false;
	isUpdateFileInfo = true;
	clearProgressArea();
	multimedia.playPreMediaFile(num);
}

function playNext(num)
{
	// first clear progress area because do next file maybe delay
	operatableFlag=false;
	isUpdateFileInfo = true;
	clearProgressArea();
	multimedia.playNextMediaFile(num);
}

function clearProgressArea()
{
	$('elspased').innerText = doTime(0);
	$('duration').innerText = doTime(0);
	$('endBar').src = "images/USB-Video-Progress-bar-Slider-01_.png";
	$('endBar').style.left = -15 + "px";
	$("startBar").style.width = 0 + "px";
}

function setBackLight(flag)//[0]turn off back light; [1] turn on back light
{
	if(flag && !BACK_LIGHT_FLAG)
	{
		BACK_LIGHT_FLAG = 1;
		multimedia.openScreen();
//        if (setting.getProperty("ui.eu.breathing", top.ledStatusDefault) == "on")
//        {
//            /*
//            if (setting.location == E_LOCATION_HOME)
//            {
//                setting.setProperty("sita.bootup.led.work", "off");
//            }
//            else
//            {
//                setting.setProperty("sita.bootup.led.work", "on");
//            }
//            */
//            setting.setProperty("sita.bootup.led.work", "off");
//        }
//        else
//        {
//            setting.setProperty("sita.bootup.led.work", "off");
//        }

        if (parseInt(setting.getProperty("app.ui.breathing", "1")) == 0) //flashing
        {
            setting.setProperty("sita.bootup.led.work.without.store", "off");
        }else
        {
            setting.setProperty("sita.bootup.led.work.without.store", "off");
        }
	}
	else if(!flag && BACK_LIGHT_FLAG)
	{
		BACK_LIGHT_FLAG = 0;
		multimedia.shutdownScreen();
//        if (setting.getProperty("ui.eu.breathing", top.ledStatusDefault) == "on")
//        {
//            /*
//            if (setting.location == E_LOCATION_HOME)
//            {
//                setting.setProperty("sita.bootup.led.work", "breathing");
//            }
//            else
//            {
//                setting.setProperty("sita.bootup.led.work", "breathing");
//            }
//            */
//            setting.setProperty("sita.bootup.led.work", "breathing");
//        }
//        else
//        {
//            setting.setProperty("sita.bootup.led.work", "on");
//        }

        if (parseInt(setting.getProperty("app.ui.breathing", "1")) == 0)  //flahsing
        {
            setting.setProperty("sita.bootup.led.work.without.store", "breathing");
        }
        else
        {
            setting.setProperty("sita.bootup.led.work.without.store", "on");
        }

	}
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){
		evt.preventDefault();
		if(evt.button == 2) toBack();//right key
	}

	for(var i = 0; i < menuImgTag.length; i++)//menu bar
	{
		menuImgTag[i].setAttribute(clickIndexAttri, i);
		menuImgTag[i].onmousedown = function(evt){
			if(evt.button == 0)//left key
			{
				clickMenuFunction(parseInt(this.getAttribute(clickIndexAttri)));
				evt.stopPropagation();
			}
		}
	}

	for(var i = 0; i < clickOptionMenuLi_1.length; i++)//option level 1st
	{
		clickOptionMenuLi_1[i].setAttribute(clickIndexAttri, i);
		clickOptionMenuLi_1[i].onmousedown = function(evt){
			if(evt.button == 0)//left key
			{
				clickFirstOptionMenuFunction(parseInt(this.getAttribute(clickIndexAttri)));
				evt.stopPropagation();
			}
		}
	}

	for(var i = 0; i < clickOptionMenuLi_2.length; i++)//option level 2nd
	{
		clickOptionMenuLi_2[i].setAttribute(clickIndexAttri, i);
		clickOptionMenuLi_2[i].onmousedown = function(evt){
			if(evt.button == 0)//left key
			{
				clickSecondOptionMenuFunction(parseInt(this.getAttribute(clickIndexAttri)));
				evt.stopPropagation();
			}
		}
	}

	for(var i = 0; i < clickPlayListLi.length; i++)
	{
		clickPlayListLi[i].setAttribute(clickIndexAttri, i);
		clickPlayListLi[i].onmousedown = function(evt){
			if(evt.button == 0)//left key
			{
				clickPlayListFunction(parseInt(this.getAttribute(clickIndexAttri)));
				evt.stopPropagation();
				hideMenu(FADE_TIME_15, DISPLAY_AREA);
			}
		}
	}

	$('arrowUpPlayList').onmousedown = function(evt){
		if(evt.button == 0)//left key
		{
			clickPlayListUpArrow();
			evt.stopPropagation();
			hideMenu(FADE_TIME_15, DISPLAY_AREA);
		}
	}

	$('arrowDownPlayList').onmousedown = function(evt){
		if(evt.button == 0)//left key
		{
			clickPlayListDownArrow();
			evt.stopPropagation();
			hideMenu(FADE_TIME_15, DISPLAY_AREA);
		}
	}

	$('progressBarUse').onmousedown = function(evt){
		if(evt.button == 0)//left key
		{
			clickProgressBarFunction(evt);
			evt.stopPropagation();
		}
	}

	$('okButton').onmousedown = function(evt){
		if(evt.button == 0)//left key
		{
			clickTipsBoxButton();
			evt.stopPropagation();
		}
	}
}

function clickMenuFunction(index)
{
	if(focusTab == OPTION_AREA || focusTab == OPTION_DETAIL_AREA 
		|| focusTab == PLAY_LIST_AREA || focusTab == TIPS_AREA)
	{
		return;
	}
	if(seekStatusFlag)
	{
		clearTimeout(seekSettingTimer);
		seekStatusFlag = false;
	}
	seekCount = 0;
	focusTab = DISPLAY_AREA;
	$('seekTime').style.display = 'none';
	if(progressBarPercent <= 14)
	{
		$('endBar').src = "images/USB-Video-Progress-bar-Slider-01_.png";
	}
	else
	{
		$('endBar').src = "images/USB-Video-Progress-bar-Slider-01.png";
	}
	displayMenuBarFocus(1);
	refreshProgressBar();
	changeMenuFocus(index - menuFocusIndex);
	menuFocusIndex = index;
	toOK();
}

function clickFirstOptionMenuFunction(index)
{
	if(focusTab == OPTION_DETAIL_AREA)
	{
		toBack();
	}
	setOptionMenuFocus(-1, optionFocusIndex_1);
	optionFocusIndex_1 = index;
	setOptionMenuFocus(optionFocusIndex_1, -1);
	$('optionFocus_1').style.top = focusOptionTopDistance + optionFocusIndex_1 * focusOptionHeight + "px";
	toRight();
	hideMenu(FADE_TIME_15, DISPLAY_AREA);
}

function clickSecondOptionMenuFunction(index)
{
	optionFocusIndex_2 = index;
	setSPOption();
	hideMenu(FADE_TIME_15, DISPLAY_AREA);
}

function clickPlayListFunction(index)
{
	multimedia.mediaStop(0);
	clearInterval(progressBarTimer);
	mediaOpen(currentPlayList[playListStart + index].path);
	setPlayListFocus(index, playListFocusIndex);
	playListFocusIndex = index;
	$('playListFocus').style.top = cpTopDistance + FOCUS_DISTANCE * playListFocusIndex + "px";
	return;
}

function clickPlayListUpArrow()
{
	if(focusTab != PLAY_LIST_AREA)
		return;
	if((playListStart - PLAYLIST_MAX_LENGTH) >= 0)
	{
		playListStart -= PLAYLIST_MAX_LENGTH;
	}
	else
	{
		playListStart = 0;
	}
	refreshPlayList();
	refreshCPFlag();
	showPlayListScrollBar(currentPlayList.length, playListStart);
	hideMenu(FADE_TIME_15, DISPLAY_AREA);
}

function clickPlayListDownArrow()
{
	if(focusTab != PLAY_LIST_AREA)
		return;
	if((playListStart + PLAYLIST_MAX_LENGTH) < currentPlayList.length)
	{
		playListStart += PLAYLIST_MAX_LENGTH;
	}
	else
	{
		playListStart = currentPlayList.length - PLAYLIST_MAX_LENGTH;
	}
	refreshPlayList();
	refreshCPFlag();
	showPlayListScrollBar(currentPlayList.length, playListStart);
	hideMenu(FADE_TIME_15, DISPLAY_AREA);
}

function clickProgressBarFunction(evt)
{
	if(focusTab != PROGRESS_AREA)
	{
		if(!pauseableFlag || !seekableFlag) return;
		focusTab = PROGRESS_AREA;
		displayMenuBarFocus(0);
		$('endBar').src = "images/USB-Video-Progress-bar-Slider-02_.png";
	}
	testLog("progress click test 1");
	var clickDistance = evt.clientX - PROGRESS_START_LEFT_OFFSET;
	var tmp = clickDistance / BAR_LENGTH;
	var tmpSeekTime = parseInt(tmp * fileDuration, 10);
	$('seekTime').style.display = 'block';
	$('endBar').style.left = clickDistance - 15 + "px";
	$("startBar").style.width = clickDistance + "px";
	$('seekTime').innerText = doTime(tmpSeekTime);
	$('seekTime').style.left = 80 + clickDistance + "px";
	clearTimeout(seekSettingTimer);
	seekSettingTimer = setTimeout(function(){
		multimedia.setSeekPoint(tmpSeekTime * 1000);
		$('seekTime').style.display = 'none';}, 100);
}

function clickTipsBoxButton()
{
	if(focusTab != TIPS_AREA) 
		return;
	toOK();
}

function bookingPreOperate()
{
	top.g_lastEnterType = -1;
	top.g_isMediaCenter = top.NDM_Others;
	hideInfoBox(0);
	multimedia.mediaStop(0);
	multimedia.deviceExitUninit();
	multimedia.toRestoreSource(0, 0);
	return;
}

function toExitBySTR()
{
	hideInfoBox(0);
	if(top.g_temp=="menu"||top.g_temp=="source")
	{
		top.$("operatePage").src = "";
		top.requestFocus(top.main, 1);
		top.setFrameFocusPage("main");
	}

	if (parseInt(setting.getProperty("app.ui.breathing", "1")) == 0) //flashing
	{
		setting.setProperty("sita.bootup.led.work.without.store", "off");
	}else
	{
		setting.setProperty("sita.bootup.led.work.without.store", "off");
	}
    multimedia.mediaStop(0);
    multimedia.deviceExitUninit();
    top.g_mediaPosition = 1;
    top.$("main").src = "deviceList.html?poweroff";
    return;
}

function optionArrowDisplay(startIndex, count)
{
	$("optionUpArrow_1").style.display = (startIndex == 0) ? 'none' : 'block';
	$("optionDownArrow_1").style.display = (startIndex + OPTION_INFO_MAX < count) ? 'block' : 'none';
}

function moveUpRefreshSecList(array, count)
{
	if( optionFocusIndex_2 == 0 && tmpStartIndex == 0)
	{
		tmpStartIndex = OPTION_INFO_COUNT - OPTION_INFO_MAX;
		optionFocusIndex_2 = OPTION_INFO_MAX -1;
		$('optionFocus_2').style.top = focusOptionTopDistance + optionFocusIndex_2 * focusOptionHeight + "px";
	}
	else if(optionFocusIndex_2 == 0 && tmpStartIndex - 1 >= 0)
	{
		tmpStartIndex--;
	}
	
	for(var i = 0; i < OPTION_INFO_MAX; i++)
	{
		optionSecListSpan[i].innerText = array[i + tmpStartIndex];
	}
	optionArrowDisplay(tmpStartIndex, count);
	setOptionSecFocusScroll(optionFocusIndex_2, -1);
}

function moveDownRefreshSecList(array, count)
{
	if( ((optionFocusIndex_2 + 1) == OPTION_INFO_MAX ) &&
		((tmpStartIndex + OPTION_INFO_MAX) == OPTION_INFO_COUNT))
	{
		tmpStartIndex = 0;
		optionFocusIndex_2 = 0;
		$('optionFocus_2').style.top = focusOptionTopDistance + optionFocusIndex_2 * focusOptionHeight + "px";
	}	
	else if(optionFocusIndex_2 + 1 == OPTION_INFO_MAX
		&& tmpStartIndex + OPTION_INFO_MAX < OPTION_INFO_COUNT)
	{
		tmpStartIndex++;
	}
	for(var i = 0; i < OPTION_INFO_MAX; i++)
	{
		optionSecListSpan[i].innerText = array[i + tmpStartIndex];
	}
	optionArrowDisplay(tmpStartIndex, count);
	setOptionSecFocusScroll(optionFocusIndex_2, -1);
}



//add for new sound option since football mode added
//UI[4]stadium [5]personal, MW[4]personal [6]stadium
function soundModeTransform(preMode, type)//type[0]: mw to ui; [1]ui to mw
{
    var aftMode = preMode;
    if(type)//ui to mw
    {
	    if(4 == preMode)//stadium
	    {
	        aftMode = 6;
	    }
	    else if(5 == preMode)//personal
	    {
	        aftMode = 4;
	    }
	}
	else//mw to ui
	{
		if(6 == preMode)//stadium
	    {
	        aftMode = 4;
	    }
	    else if(4 == preMode)//personal
	    {
	        aftMode = 5;
	    }
	}
    return aftMode;
}

function ttsRead()
{
	if(0 == top.g_setting.ttsSwitch)
	{
		top.ttsLog("ttsSwitch is off");
		return;
	}
	var ttsStr = "";
	var ttsName = "";
	var ttsStatus = "";
	console.log("---------ttstest---------focusTab = " + focusTab);
	switch(focusTab)
	{
		case PLAY_LIST_AREA:
			try
			{
				ttsName = currentPlayList[playListStart + playListFocusIndex].name;
			}
			catch(e)
			{
				console.log("---------ttstest---------error=" + e);
			}
			break;
		case DISPLAY_AREA:
			switch(menuFocusIndex)
			{
				case MENU_FB:
					switch(ff_fb_flag)
					{
						case 0:
							ttsName = "fast backward";
							break;
						case -1:
							ttsName = "2 times fast backward";
							break;
						case -2:
							ttsName = "4 times fast backward";
							break;
						default:
							ttsName = "fast backward";
							break;
					}
					break;
				case MENU_FF:
					switch(ff_fb_flag)
					{
						case 0:
							ttsName = "fast forward";
							break;
						case 1:
							ttsName = "2 times fast forward";
							break;
						case 2:
							ttsName = "4 times fast forward";
							break;
						default:
							ttsName = "fast forward";
							break;
					}
					break;
				case MENU_PRE:
					ttsName = "previous";
					break;
				case MENU_P_P:
					if(playStatus == S_PAUSE )
					{
						ttsName = "pause";
					}
					else
					{
						ttsName = "paly";
					}
					break;
				case MENU_NEXT:
					ttsName = "next";
					break;
				case MENU_MODE://repeat mode setting
					switch(repeatMode)
					{
						case 0 ://repeat all
							ttsName = "repeat all";
							break;
						case 1://repeat one
							ttsName = "repeat one";
							break;
						case 2://normal
							ttsName = "order";
							break;
						case 3://random
							ttsName = "shuffle";
							break;
						default:
							break;
					}
					break;
				case MENU_LIST:
					ttsName = "list";
					break;
				default:
					break;
			}
			break;
		case OPTION_AREA:
			switch(optionFocusIndex_1)
			{
				case OPTION_SOUND_PRESET:
					ttsName = optionSoundPresetInfo;
					ttsStatus = soundPresetArray[optionInfoArray[0]];
					break;
				case OPTION_AUDIO_ONLY:
					ttsName = optionAudioOnlyInfo;
					ttsStatus = "";
					break;
				case OPTION_INFORMATION:
					ttsName = optionInfo;
					ttsStatus = "";
					break;
				default:
					break;
			}
			break;
		case OPTION_DETAIL_AREA:
			if(optionFocusIndex_1 == OPTION_INFORMATION)
			{
				ttsName = $("infoDetail0").innerText + "," + $("infoDetail1").innerText + "," + $("infoDetail2").innerText + "," +
					$("infoDetail3").innerText + "," + $("infoDetail4").innerText + "," + $("infoDetail5").innerText;
			}
			break;
		case SOUND_PRESET_AREA:
			ttsName = soundPresetArray[tmpStartIndex + optionFocusIndex_2];
			if(optionInfoArray[0] == (tmpStartIndex + optionFocusIndex_2))
			{
				ttsStatus = "selected";
			}
			else
			{
				ttsStatus = "not selected";
			}
			break;
		default:
			break;
	}
	ttsStr = ttsName + ttsStatus;
	if("" != ttsStr)
	{
		console.log("---------ttstest---------ttsStr=" + ttsStr);
		top.setTTSSay(top.SPEECH_TYPE_FLUSH, ttsStr);
	}
}