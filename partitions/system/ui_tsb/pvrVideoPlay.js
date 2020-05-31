var playListStart = 0;
var playListIndex = 0;
var optionIndex = 0;
var optionListIndex = 0;
var focusTab = 0;//[0]displayArea, [1]option, [2]optionList, [3]playList, [4]progressBar
var focusTabIndex = 0;
var playStatus = -1;//playing/pause/error
var fileDuration = 0;//the current time of playing media file
var currentFileInfo = "";
var elapsed = 0;
var currentPlayList = "";
var inforListSpan = 0;
var informationSpan = 0;
var currentFileIndex = 0;
var MAX_LENGTH_ONE_PAGE = 0;
var seekCount = 0;
var seekPoint = 0;
var seekStartTime = 0;
var ff_fb_flag = 0;
var progressBarPercent = 0;
var tmpStartIndex = 0;
var screenModeStartIndex = 0;
var subtitleInfoList = "";
var subtitleCount = 0;
var subtitleStartIndex = 0;
var soundTrackInfoList = "";
var soundTrackCount = 0;
var soundTrackStartIndex = 0;



var subtitleLanShow = new Array(20);
var soundTrackLanShow = new Array(20);

var picPresetBack = 0;
var soundEffectBack = 0;

var playListFocusIndex = 0;
var seekableFlag = true;

var bottomTipsLi  = "";
var bottomTipsText = top.bottomTipsText;

var focusOptionHeight = 100;

//var tipsTimer = 0;
var progressBarTimer = 0;
var seekSettingTimer = 0;

var skipFlagSubtitle = 0;
var skipFlagSoundtrack = 0;
var skipFlag3D = 1;

var SEEK_TIME = 30;
var SEEK_TIME_DELAY = 2000;
var DELAY_TIME = 50;
var FADE_TIME = 60000;	//5000
var BAR_LENGTH = 1500;

var playListAnimateTime = 250;
var screenWidth = 1940;
var TIPS_WIDTH_1 = 400;
var TIPS_WIDTH_2 = 1300;
var PROGRESS_START_LEFT_OFFSET = 45 + 165;
var FADE_TIME_15 = 15000;

var clickPlayListLi = "";
var clickOptionMenuLi_1 = "";
var clickOptionMenuLi_2 = "";

var S_PLAY 			= 1;
var S_PAUSE 		= 2;
var S_EOS 			= 3;
var S_PRE 			= 4;
var S_NEXT 			= 5;
var S_FF_FB         = 6;
var S_SF_SB         = 7; 
var S_STOP_RESUME	= 8;
var S_ERROR 		= -1;

var OPTION_PANNEL_TYPE 		= 0;//[0]HD [1]SD

var OPTION_PIC_PRESET 		= -1;
var OPTION_BACK_LIGHT		= -1;
var OPTION_BRIGHTNESS		= -1;
var OPTION_CONTRAST			= -1;
var OPTION_SATURATION		= -1;
var OPTION_TINT				= -1;
var OPTION_SHARPNESS		= -1;
var OPTION_SOUND_PRESET     = -1;
var OPTION_SCREEN_MODE 		= -1;
var OPTION_3D_MODE 			= -1;
var OPTION_SUBTITLE 		= -1;
var OPTION_SOUND_TRACK 		= -1;
var OPTION_INFORMATION		= -1;

var DISPLAY_AREA 			= 0;
var OPTION_AREA 			= 1;
var OPTION_DETAIL_AREA		= 2;
var PLAY_LIST_AREA 			= 3;
var PROGRESS_AREA 			= 4;
var PRESET_AREA				= 5;
var TIPS_AREA        		= 6;
var QUICK_MENU_AREA         = 7;
var SCREEN_MODE_AREA        = 8;
var OPTION_BAR_AREA			= 9;

var optionIndexPicPreset 		= 0;
var optionIndexBacklight 		= 1;
var optionIndexBrightness 		= 2;
var optionIndexContrast 		= 3;
var optionIndexSaturation 		= 4;
var optionIndexTint 			= 5;
var optionIndexSharpness 		= 6;
var optionIndexSoundPreset 		= 7;
var optionIndexScreenMode 		= 8;
var optionIndex3DMode 			= 9;
var optionIndexSubtitle 		= 10;
var optionIndexSoundTrack 		= 11;
var optionIndexInfo 			= 12;



var OPTION_MAX_COUNT = 13;
var OPTION_INFO_COUNT = 0;
var OPTION_INFO_MAX	= 5; //old 10
var PLAYLIST_MAX_LENGTH = 12;
var MAX_QUICK_MENU_COUNT = 10;

var currentOptionFirstListArray = new Array(OPTION_MAX_COUNT);

var optionInfoArray = new Array(OPTION_MAX_COUNT);//[0]picture preset,[1]sound preset, [2]screen mode, [3]3d mode, [4]subtitle, [5]sound track, [6]infomation
var optionListArray = top.optionPvrListArray;
var picturePresetArray =  [top.picPreset[0], top.picPreset[1], top.picPreset[2], top.picPreset[3], top.resetStadium, top.picPreset[4]];
var picturePresetBarInfo = top.picturePresetBarTitleInfo;//"Picture preset"
var picturePresetCheckImg = "";
var soundPresetArray =[top.souPreset[0], top.souPreset[1], top.souPreset[2], top.souPreset[3], top.resetStadium, top.souPreset[4]];
var screenModeArray = "";
var screenModeHDArray = top.screenModeHDArray;
var screenModeSDArray = top.screenModeSDArray;
var Mode3DArray = top.Mode3DArray;
var subMenuTitleText = top.videoOptionListArray[2];
var titleMenuTitleText = top.videoOptionListArray[3];
var soundTrackText = top.videoOptionListArray[1];
var langInfoText = top.videoOptionListArray[1];
var langMenuTitleText = top.langMenuTitleText;
var mode3DMenuTitleText = top.mode3DMenuTitleText;
var fileNameText = top.fileNameText;
var fileDateText = top.fileDateText;
var fileDurationText = top.fileDurationText;
//var offInfo = top.videoOptionListArray[0];
var offinfo = top.offinfo;
var loadingInfo = top.loadingInfo;
var naInfo = top.sysRatingOptions[0];
var eb_info = top.eb_info;
var eb_tips = top.eb_tips;
var ok_button = top.ok_button;

var FOCUS_DISTANCE = 0;
var FOCUS_LEFT_DISTANCE = 0;
var FOCUS_TOP_DISTANCE = 0;

var SCROLL_TOP_DISTANCE = 60;
var SCROLL_MAX_HEIGHT = 960;

var menuTimer = 0;

var form_position_h				= 0;
var DIALOG_START				= 200;
var DIALOG_STEP					= 250;

var playlistFocusTopDistance = 53;
var iUpArrowName = "arrowUpIcon";
var iDownArrowName = "arrowDownIcon";
var playListScrollName = "playlistScrollArea";
var scrollBarName = "playlistScrollBar";
var exitFlag  = false;
var errorFlag = false;
var ERROR_NONE			= 0;//not error
var ERROR_VIDEO_ERROR 		= 1;
var ERROR_AUDIO_ERROR 		= 2;
var ERROR_VIDEO_NOT_SUPPORTED 	= 3;

var pvr 				= top.g_pvr;	//xiehua 2014-06-14 
var multimedia 	= top.g_media;
var setting 		= top.g_setting;


var clickIndexAttri = "indexAttri";
var clickPicturePresetSpan = "";

var quickCount = 0;
var quickInfoText = "";
var quickOffSet = 0;
var quickIndex = 0;
var quickMenuStartIndex = 0;
var quickMenuIndex = 0;
var quickMenuType = -1;
var quickMenuListDiv = 0;
var quickMenuEmptyText = top.quickMenuEmptyText;
var operationTimer = 0;
var QUICK_MENU_SUBTITLE = 0;
var QUICK_MENU_LANG = 1;
var QUICK_MENU_3D = 2;

var resolution = 0;
//When still in loading the page, respond to the remote control of any key, except the shutdown, outside the exit button
var loadingBoxFlag = 1;

//screen mode
var zoomPreviewImg;
var zoomPreviewImgHD = ["images/Screen_mode_169_format.png",
					"images/Screen_mode_43_format.png",
					"images/Screen_mode_Cinerama.png",
					"images/Screen_mode_Wide_Zoom.png",
					"images/Screen_mode_Zoom2.png",
					"images/Screen_mode_Wide_Zoom2.png",
					"images/Screen_mode_Stretch_Zoom.png",
					"images/Screen_mode_auto_format.png"];

var zoomPreviewImgSD = ["images/Screen_mode_169_format.png",
					"images/Screen_mode_43_format.png",
					"images/Screen_mode_Cinerama.png",
					"images/Screen_mode_149_Zoom.png",
					"images/Screen_mode_169_Zoom.png",
					"images/Screen_mode_169_Zoomup.png",
					"images/Screen_mode_auto_format.png"];
var PIC_ZOOM_LIST_LENGTH = 5;
var zoomSpans;
var previewImg;

var optionListLi 			= "";
var optionListNameSpan		= "";
var displayAttri = "displayIndex";
var optionHeightDistance = 80;
var optionBarHeight = 60;
var SHORT_BAR_MAX_VALUE = 100;
var SHORT_BAR_LENGTH = 100;
var OPTION_BAR_LENGTH = 900;
var optionBarNameArray = new Array(6);

var OPTION_FIRST_MAX_COUNT = 12;//in one page
var optionFirstStartIndex = 0;
var optionFirstListLength = 0;
var optionSecondListTopDistance = 75;

var optionListNameArray = [top.optionVideoListArray_1[0],
						   top.picOptions[1], top.picOptions[2], top.picOptions[3], 
						   top.picOptions[4], top.picOptions[5], top.picOptions[6],  
						   top.optionVideoListArray_1[1], 
						   top.optionVideoListArray_1[3], 
						   top.optionVideoListArray_1[4],
						   top.optionVideoListArray_1[7],
						   top.optionVideoListArray_1[8], 
						   top.optionVideoListArray_1[11]];
document.onkeydown = keyProc;
document.onsystemevent = notifyProcess;

function $(id)
{
    return document.getElementById(id);
}

function testLog(s)
{
	var str = " ------------------> xx : " + s;
	top.g_channel.testLog(str);
}
function uninit()
{
	top.pvrPlayStatusFlag      	= 0;//退出页面重置该标志位。用于刷新Sound>SPDIF type选项
	top.g_isMediaCenter = top.NDM_Others;
}

function init()
{
    top.initTextDirection(window);
	top.g_temp = "media";
	top.RemoteConntrolType = "Media";
	top.pvrPlayStatusFlag      	= 1;
	top.g_isMediaCenter = top.NDM_PVR_Play;
	initTextInfo();
	exitFlag = 0;
	playStatus = S_EOS;
	playListStart = 0;
	playListIndex = 0;
	seekCount = 0;
	seekPoint = 0;
	focusTab = DISPLAY_AREA;
	inforListSpan = $('listInfo').getElementsByTagName('span');
	informationSpan = $('information').getElementsByTagName('span');
	OPTION_PANNEL_TYPE = pvr.getPannelMode();		//xiehua: api added!!!
	top.showBackground(0);
	
	/***
	if(OPTION_PANNEL_TYPE == 0)//HD
	{
		screenModeArray = screenModeHDArray;
	}
	else//SD
	{
		screenModeArray = screenModeSDArray;
	}
	**/
	//top.Log("init(), filepath = "+top.g_currentMedia.path);
	setTimeout(function(){
		top.g_availableStatus = mediaPlay(top.g_currentMedia.path);
		//currentPlayList = pvr.getCurrentVideoPlayingList(0, -1);
		currentPlayList = pvr.getMediaFileList(top.g_deviceInfo.type, 2, top.g_deviceInfo.path, 0, -1);
		setPlayListMaxLength();}, DELAY_TIME);
	//top.Log("init done");
	//添加鼠标支持
	clickPicturePresetSpan = $('picturePresetBar').getElementsByTagName('span');
	addMouseListener();
}

function initTextInfo()
{
	//$('laodingInfo').innerText = loadingInfo;
	$('eb_tips').innerText = eb_tips;
	$('okButton').innerText = ok_button;

	optionListNameSpan = $('optionInfo').getElementsByClassName('optionNameClass');
	for(var i = 0; i < optionListNameSpan.length; i++)
	{
		optionListNameSpan[i].innerText = optionListNameArray[i];
	}

	optionListLi = $("optionInfo").getElementsByTagName('li');
	for(var i = 0; i < optionListLi.length; i++)
	{
		optionListLi[i].setAttribute(displayAttri, -1);
	}

	
	clickPlayListLi = $('playList').getElementsByTagName("li");
	clickOptionMenuLi_1 = $("optionInfo").getElementsByTagName("li");
	clickOptionMenuLi_2 = $("listInfo").getElementsByTagName("span");

	quickMenuListDiv = $('quickContainInfo').getElementsByTagName('div');
	$("quickEmtpyTipsInfo").innerText = quickMenuEmptyText;

	$('picturePresetBarInfo').innerText = picturePresetBarInfo;
	picturePresetCheckImg = $('picturePresetBar').getElementsByTagName('img');

	bottomTipsLi = $("bottomTips").getElementsByTagName('li');
	for(var i = 0; i < bottomTipsLi.length; i++)
	{
		bottomTipsLi[i].innerText = bottomTipsText[i];
	}

	optionBarNameArray[0] = $('backLightBar');
	optionBarNameArray[1] = $('brightnessBar');
	optionBarNameArray[2] = $('contrastBar');
	optionBarNameArray[3] = $('saturationBar');
	optionBarNameArray[4] = $('tintBar');
	optionBarNameArray[5] = $('sharpnessBar');


	optionBarNameArray[0].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[1];
	optionBarNameArray[1].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[2];
	optionBarNameArray[2].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[3];
	optionBarNameArray[3].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[4];
	optionBarNameArray[4].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[5];
	optionBarNameArray[5].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[6];
	
}

function keyProc(evt)
{
	var ret = true;
	var keycode = evt.which;
	top.Log("keyProc(), keycode = "+keycode);
	//如果按键不是虚拟按键T键，且不是方向键、确认键、返回键，且不是鼠标左键lqt
	if(keycode!=top.VK_VIRTUAL_REMOTE&&(keycode<top.VK_VIRTUAL_KEYBOARD_LEFT||keycode>top.VK_VIRTUAL_KEYBOARD_BACK)&&keycode!=top.VK_VIRTUAL_MOUSE_OK)
	{
		top.Log("------keycode----"+keycode);
		//如果是显示的话，就隐藏
		if(top.virtualRemoteState == 1)
		{
			//隐藏虚拟遥控器
			top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
		}
	}
	//if(playStatus == S_EOS)
		//return;
	//Have loaded when the page is only respond to the following buttons
	if(loadingBoxFlag)
	{
		switch (keycode)
		{
			//lqt
			case top.VK_VIRTUAL_REMOTE:
			{
				if($('option').style.display == 'block')
				{
				}
				else
				{
					//显示或者不显示--lqt
					top.virtualRemoteControl();
				}
				break;
			}
			//lqt--虚拟遥控器的上键
			case top.VK_VIRTUAL_KEYBOARD_UP:
			{
				top.document.getElementById("virtualRemote").contentWindow.keyDownForUp();
				
				break;
			}
			//lqt--虚拟遥控器的下键
			case top.VK_VIRTUAL_KEYBOARD_DOWN:
			{
				top.document.getElementById("virtualRemote").contentWindow.keyDownForDown();
				
				break;
			}
			//lqt--虚拟遥控器的左键
			case top.VK_VIRTUAL_KEYBOARD_LEFT:
			{
				top.document.getElementById("virtualRemote").contentWindow.keyDownForLeft();
				
				break;
			}
			//lqt--虚拟遥控器的右键
			case top.VK_VIRTUAL_KEYBOARD_RIGHT:
			{
				top.document.getElementById("virtualRemote").contentWindow.keyDownForRight(); 
				
				break;
			}
			//lqt--鼠标的左键
			case top.VK_VIRTUAL_MOUSE_OK:
			{
				var clientX = top.g_setting.getProperty("memory.app.ui.virtualRemote.clientX", "0");
				var clientY = top.g_setting.getProperty("memory.app.ui.virtualRemote.clientY", "0");
				top.Log("lqt---pvrVideoPlay.js---clientX: "+clientX);
				top.Log("lqt---pvrVideoPlay.js---clientY: "+clientY);
				top.document.getElementById("virtualRemote").contentWindow.keyDownMouseClick(clientX,clientY); 
				
				break;
			}
			//lqt--虚拟遥控器的ok键
			case top.VK_VIRTUAL_KEYBOARD_OK:
			{
				top.document.getElementById("virtualRemote").contentWindow.keyDownForOK(); 
				
				break;
			}
			//lqt--虚拟遥控器的返回键
			case top.VK_VIRTUAL_KEYBOARD_BACK:
			{
				//如果是显示的话，就隐藏
				if(top.virtualRemoteState == 1)
				{
					//隐藏虚拟遥控器
					top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
				}
				break;
			}
			case top.VK_POWER://power
			case top.VK_FRONT_PANEL_LOCKED:
				top.keyDownProcess(evt);
				break;
			case top.VK_EXIT:
				top.g_lastEnterType = -1;
				top.g_isMediaCenter = top.NDM_Others;
				hideMenu(0);
				pvr.mediaStop(0);

				if(!top.isFromOptionIntoUsb)
				{
                    pvr.pvrExitUninitNT(top.E_INPUT_STORAGE);
                    top.g_channel.inputSource = 10;
					top.$("main").src = top.getHomepage("?tv&media");
				}
				else
				{
                    pvr.pvrExitUninit();
					//multimedia.toRestoreSource(0, 1);
					//top.g_channel.playChannel(top.g_channel.inputSource);
					top.g_channel.changeToPrevSource();
					top.$("main").src = "channelPlay.html";
				}
				top.requestFocus(top.main, 1);
				break;
			case top.VK_BACK:
				toBack();
				break;
			case top.VK_ENTER:
				toOK();
				break;
			default:
				break;
		}
	}
	else
	{
		switch (keycode)
		{
			case top.VK_POWER://power
			case top.VK_MUTE://mute
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
				top.keyDownProcess(evt);
				return;
			case top.VK_EXIT:
				top.g_lastEnterType = -1;
				top.g_isMediaCenter = top.NDM_Others;
				hideMenu(0);
				pvr.mediaStop(0);

				if(!top.isFromOptionIntoUsb)
				{
                    pvr.pvrExitUninitNT(top.E_INPUT_STORAGE);
                    top.g_channel.inputSource = 10;
					top.$("main").src = top.getHomepage("?tv&media");
				}
				else
				{
                    pvr.pvrExitUninit();
					//multimedia.toRestoreSource(0, 1);
					//top.g_channel.playChannel(top.g_channel.inputSource);
					top.g_channel.changeToPrevSource();
					top.$("main").src = "channelPlay.html";
				}
				top.requestFocus(top.main, 1);
				break;
			case top.VK_BACK:
				toBack();
				break;
			case top.VK_ENTER:
				toOK();
				break;
			case top.VK_TV:
				top.g_lastEnterType = -1;
				top.g_isMediaCenter = top.NDM_Others;
				pvr.mediaStop(0);
				pvr.pvrExitUninit();
				//multimedia.toRestoreSource(1, 0);
				top.g_channel.changeToPrevSource();
				top.g_previousHtmlPage = "channelPlay.html";
				top.g_remindWord = "TvHotKey";
				top.$("main").src = "intermediate.html";
				top.requestFocus(top.main, 1);
				top.$("operatePage").src = "";
				break;
			case top.VK_VOLUME_UP://volume up
			case top.VK_VOLUME_DOWN://volume down
				top.$('globleShow').contentWindow.initVolume();
				if(top.$('globleShow').contentWindow.volumeCount > 0)
				{
					top.g_volume_visible = 1;
					top.$("operatePage").src = "";
					top.$("globleShow").contentWindow.$("adjustProgressBox").style.display = "block";
					top.requestFocus(top.globleShow, 0);
					//top.startVolumeTimer();
				}
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
			case top.VK_OPTION:
				//top.Log("top.VK_OPTION = "+top.VK_OPTION)
				toOption(0);
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
				//top.Log("press number key, seekableFlag = "+seekableFlag);
				break;
			case top.VK_STOP:
				top.Log("press the stop key");
				//
				/**if(playStatus == S_PLAY  || playStatus == S_PAUSE || playStatus == S_FF_FB)
				{
					hideMenu(0);
					playStatus = S_STOP_RESUME;
					ff_fb_flag = 0;
					pvr.mediaPause();	//xiehua: api added!!!
					$('statusIcon').src = "images/USB-Icon-Pause.png";//pause
					$('topTitle').style.display = "block";
					$('statusIcon').style.display = "block";
					$('progressArea').style.display = "block";
					refreshProgressBar();
					hideMenu(FADE_TIME);
				}
				else **/if(playStatus == S_PLAY  || playStatus == S_PAUSE || playStatus == S_FF_FB || playStatus == S_STOP_RESUME)
				{
					hideMenu(0);
					pvr.mediaStop(0);	//xiehua: api added!!!
					document.location.href = "pvrMediaList.html?media";
				}
				break;
			case top.VK_PLAY:
				top.Log("press the play key playStatus:"+playStatus);
				if(playStatus == S_PAUSE || playStatus == S_STOP_RESUME)
				{
					ff_fb_flag = 0;
					playStatus = S_PLAY;
					pvr.mediaResume();	//xiehua: api added!!!
					$('statusIcon').style.display = 'none';
					hideMenu(0);
				}
				else if(playStatus == S_FF_FB)
				{
					$('statusIcon').style.display = 'none';
					$('statusIcon').src = "images/USB-Icon-Play.png";
					setFastPlay(0);	
					hideMenu(0);
				}
				break;
			case top.VK_PAUSE:
				top.Log("press the pause key ff_fb_flag:"+ff_fb_flag);
				//|| playStatus == S_FF_FB
				if(playStatus == S_PLAY )
				{
					hideMenu(0);
					playStatus = S_PAUSE;
					$('statusIcon').src = "images/USB-Icon-Pause.png";//pause
					$('topTitle').style.display = "block";
					$('statusIcon').style.display = "block";
					$('progressArea').style.display = "block";
					refreshProgressBar();
					pvr.mediaPause();	//xiehua: api added!!!
				}
				else if(playStatus == S_FF_FB)
				{
					pvr.mediaFastForward(1);//paly
					setTimeout(function (){
						hideMenu(0);
						playStatus = S_PAUSE;
						$('statusIcon').src = "images/USB-Icon-Pause.png";//pause
						$('topTitle').style.display = "block";
						$('statusIcon').style.display = "block";
						$('progressArea').style.display = "block";
						refreshProgressBar();
						pvr.mediaPause();	//xiehua: api added!!!
					},100);
				}
				break;
			case top.VK_PLAY_PAUSE://play key press
				top.Log("press the play key ff_fb_flag:"+ff_fb_flag);
				if(playStatus == S_PAUSE || playStatus == S_STOP_RESUME)
				{
					playStatus = S_PLAY;
					ff_fb_flag = 0;
					hideMenu(0);
					$('statusIcon').style.display = 'none';
					pvr.mediaResume();	//xiehua: api added!!!
				}
				else if(playStatus == S_PLAY && ff_fb_flag == 0)
				{	
					playStatus = S_PAUSE;
					ff_fb_flag = 0;
					hideMenu(0);
					refreshProgressBar();
					$('statusIcon').src = "images/USB-Icon-Pause.png";//pause
					$('topTitle').style.display = "block";
					$('statusIcon').style.display = "block";
					$('progressArea').style.display = "block";
					pvr.mediaPause();	//xiehua: api added!!!
				}
				else if(playStatus == S_FF_FB || ff_fb_flag != 0)
				{
					ff_fb_flag = 0;
					playStatus = S_PLAY;
					$('statusIcon').style.display = 'none';
					$('statusIcon').src = "images/USB-Icon-Play.png";
					setFastPlay(0);	
					hideMenu(0);
				}
				break;
			case top.VK_REWIND:
				top.Log("REWIND press");
				hideMenu(0);
				$('progressArea').style.display = "block";
				$("topTitle").style.display = "block";
				refreshProgressBar();
				clearInterval(progressBarTimer);
				progressBarTimer = setInterval("refreshProgressBar()", 900);
				setFastPlay(-1);
				break;
			case top.VK_FAST_FWD:
				top.Log("FAST_FWD press");
				hideMenu(0);
				$('progressArea').style.display = "block";
				$("topTitle").style.display = "block";
				refreshProgressBar();
				clearInterval(progressBarTimer);
				progressBarTimer = setInterval("refreshProgressBar()", 900);
				setFastPlay(1);
				break;
			case top.VK_CHANNEL_UP:
			case top.VK_PREV: //previous
				//top.Log("case top.VK_PREV, seekableFlag = "+seekableFlag);
				if(seekableFlag == false)
				{
					//clearTimeout(metaInfoTimer);
					//previousKeyCount++;
					hideMenu(0);
					$('tipsBox').style.display = 'none';
					$('statusIcon').style.display = 'none';
				}
				else
				{
					previousKeyCount = 0;
					hideMenu(0);
					$('tipsBox').style.display = 'none';
					$('statusIcon').style.display = 'none';
					$('metaDataInfoBox').style.display = 'none';
					loadingBoxFlag = 1;
						$('loadingBox').style.display = 'block';
						setTimeout(function(){
								pvr.mediaStop(0);
								pvr.playPreMediaFile();}, DELAY_TIME);
				}
				break;
			case top.VK_CHANNEL_DOWN:
			case top.VK_NEXT: //next
				//top.Log("case top.VK_NEXT, seekableFlag = "+seekableFlag);
				if(seekableFlag == false)
				{
					//clearTimeout(metaInfoTimer);
					hideMenu(0);
					$('tipsBox').style.display = 'none';
					$('statusIcon').style.display = 'none';
					//optionInfoArray[OPTION_CHAPTER] = setting.getCurrentChapter();
				}
				else
				{	
					hideMenu(0);
					$('tipsBox').style.display = 'none';
					$('statusIcon').style.display = 'none';
					$('metaDataInfoBox').style.display = 'none';
					$('loadingBox').style.display = 'block';
					loadingBoxFlag = 1;
					setTimeout(function(){
						pvr.mediaStop(0);
						pvr.playNextMediaFile();}, DELAY_TIME);
				}
				return;
			case top.VK_LANG:
				top.Log("---------case top.VK_LANG---------");
				toLang();
				break;
			case top.VK_SUBTITLE:
				top.Log("---------case top.VK_SUBTITLE---------");
				toSubtitle();
				break;
			case top.VK_3D://3D mode
				to3D();
				break;
			case top.VK_TV:
				//top.Log("pvrVideoPlay.js, ---top.VK_TV---"+top.VK_TV);
				top.g_lastEnterType = -1;
				top.g_isMediaCenter = top.NDM_Others;
				pvr.mediaStop(0);
				pvr.pvrExitUninit();
				//multimedia.toRestoreSource(2, 1);
				top.g_channel.changeToPrevSource();
				top.g_previousHtmlPage = "channelPlay.html";
				top.g_remindWord = "TvHotKey";
				top.$("main").src = "intermediate.html";
				top.requestFocus(top.main, 1);
				top.$("operatePage").src = "";
				break;
			case top.VK_EXIT:
				top.g_lastEnterType = -1;
				top.g_isMediaCenter = top.NDM_Others;
				hideMenu(0);
				pvr.mediaStop(0);
				pvr.pvrExitUninit();
				if(!top.isFromOptionIntoUsb)
				{
					top.$("main").src = top.getHomepage("?tv&media");
				}
				else
				{
					//multimedia.toRestoreSource(0, 1);
					top.g_channel.changeToPrevSource();
					top.$("main").src = "channelPlay.html";
				}
				top.requestFocus(top.main, 1);
				break;
			case top.VK_HOME:
				toHomePage();
				break;
			case top.VK_MENU:
			case top.VK_SOURCE:
				if($('option').style.display == "block")
					toOption();
				top.keyDownProcess(evt);
				break;			
			default:
				break;
		}
	}
	return ret;
}

function toHomePage()
{
	top.g_lastEnterType = -1;
	top.g_isMediaCenter = top.NDM_Others;
	//switch3DFlag = false;
	top.$("globleShow").contentWindow.hiddenGlassRemind();
    pvr.mediaStop(0);
    pvr.pvrExitUninitNT(top.E_INPUT_STORAGE);
    top.g_channel.inputSource = 10;
	top.$("main").src = top.getHomepage("?tv&media");
	top.requestFocus(top.main, 1);
}

function notifyProcess(evt)
{
	var msg = evt.which;
	var value = evt.modifiers;
	//alert("pvrVideoPlay, notifyProcess(), msg = "+msg);
	//È«¾ÖÏûÏ¢
	switch(msg)
	{	
		case top.E_CI_OP_UPDATE_CHANNEL://CMD_UI_NOTIFY_OP_UPDATE_CHANNEL
		case top.E_CI_OP_UPDATE_NIT://CMD_UI_NOTIFY_OP_UPDATE_NIT
		case top.E_POWER_OFF_TIMER://power off timer
		case top.E_POWER_OFF_TIMER_EX:
		case top.E_CEC_HDMI_DEVICE_INSERTED:
		case top.E_APP_OPEN:
			top.systemEventProc(evt);
			return;
		case top.E_MEDIA_EXIT_FOR_CEC_HDMI_PLAY://Areos: add for cec
			//if(dirFlag)
			{
				for(var i = 0; i < 50; i++)
				{
					if(top.g_page[i] != -1)
					{
						top.g_page[i] = -1;
						top.g_pfposition[i] = -1;
					}
					else
					{
						break;
					}
				}
			}
			top.g_searchFlag = 0;
			window.location.href = "channelPlay.html";
			break;
		case top.E_BOOKING_PLAY_START://booking play start¿ª»úÊ±½ÚÄ¿Ô¤¶¨µÄÊ±¼äÒÑ¹ý£¬µ«ÊÇÒÀÈ»ÒªÌáÐÑÓÃ»§×öÒ»Ð©ÇÐÌ¨µÈ²Ù×÷
		case top.E_BOOKING_RECORD_START://booking record start¿ª»úÊ±Â¼ÖÆÔ¤¶¨ÒÑ¾­¹ýÆÚ£¬µ«ÊÇÒÀÈ»ÒªÌáÐÑÓÃ»§ÇÐÌ¨Â¼ÖÆ
		case top.E_BOOKING_AHEAD_PLAY_START://booking ahead play start,Õý³£Çé¿öÏÂÇÐÌ¨ÌáÐÑ£¬Ò»·ÖÖÓÇ°ÌáÐÑ
		case top.E_BOOKING_AHEAD_RECORD_START://booking ahead record startÕý³£Çé¿öÏÂÂ¼ÖÆÌáÐÑ,£¬Ò»·ÖÖÓÇ°ÌáÐÑ
			top.g_temp = "media"; 
			top.systemEventProc(evt);
			return;
		case top.E_PVR_PLAYBACK_MOTION_CHANGE://播放状态更改,消息携带的参数为枚举PVR_MOTION
			console.log(" E_PVR_PLAYBACK_MOTION_CHANGE playStatus:"+playStatus+" value is "+value);
			if(value == 0)//pause
			{
				ff_fb_flag = 0;
				hideMenu(0);
				playStatus = S_PAUSE;
				$('statusIcon').src = "images/USB-Icon-Pause.png";//pause
				$('topTitle').style.display = "block";
				$('statusIcon').style.display = "block";
				$('progressArea').style.display = "block";
				refreshProgressBar();
			}
			if(value == 1)//normal
			{
				$('statusIcon').style.display = 'none';
				$('statusIcon').src = "images/USB-Icon-Play.png";
				ff_fb_flag = 0;
				playStatus = S_PLAY;
				hideMenu(0);
			}
			break;
		default:
			break;
	}
	
  switch(msg)
	{
		case top.E_READY_TO_CHANGE_CEC:// recive message  when cec signal 
			top.Log("--------- THIS IS E_READY_TO_CHANGE_CEC MSG ------------");
			pvr.mediaStop(1);	//xiehua: api added!!!
			hideMenu(0);
			top.g_channel.inputSource=value;
			pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			top.$("main").src = "channelPlay.html";
			break;
		case top.E_MEDIA_FIND_FILE_END: //file search end
			top.g_searchFlag = 1;
			break;
		case top.E_MEDIA_PLAYER_STATUS_STOP: //stop
			top.Log("--------- THIS IS PVR_PLAYBACK_STOP MSG ------------");
			if(playStatus != S_EOS)
			{	
				$('topTitleContent').innerText = "";
				$("startBar").style.width = "0px";
				$("endBar").style.left = "-15px";
				if(progressBarTimer) 
					clearInterval(progressBarTimer);
				$('elspased').innerText = doTime(0);
				$('duration').innerText = doTime(0);

				fileDuration = 0;
				
		    //this one play end ,playing next media

				var repeatMode;
				repeatMode = pvr.videoRepeatMode;
				switch(repeatMode)
				{
					case 0: //normal
					case 1: //random
					case 2: //repeat all
					case 3: //repeat one
						playStatus = S_EOS;
						//$("playStatus").style.backgroundImage = "url('" + playStatusImg[0] + "')";
						//$('playStatusText').style.display = "none";
						break;
					default:
						//window.location.href = top.g_previousHtmlPage;
						break;
				}
			}
			errorFlag = ERROR_NONE;
			playStatus = S_EOS;
			break;
	  case top.E_PVR_PLAYBACK_END://media eos
	  {
			top.Log("--------- THIS IS PVR_PLAYBACK_END MSG ------------");
			$('statusIcon').style.display = 'none';
			$('topTitleContent').innerText = "";
			$('loadingBox').style.display = 'block';
			loadingBoxFlag = 1;
			subtitleCount = 0;
			subtitleStartIndex = 0;
			soundTrackCount = 0;
			soundTrackStartIndex = 0;
			playStatus = S_EOS;
			$('elspased').innerText = "00:00:00";
			$('duration').innerText = "00:00:00";
			fileDuration = 0;
			if(progressBarTimer) 
				clearInterval(progressBarTimer);
			pvr.playNextMediaFile();	//xiehua: api added!!!
			errorFlag = ERROR_NONE;
			playStatus = S_EOS;
			break;
	  }
	  	case top.E_MEDIA_USB_INSERTED://usb insert
			top.systemEventProc(evt);
			break;
		case top.E_MEDIA_USB_REMOVE: //usb remove
		{
			top.Log("--------- THIS IS USB_REMOVE MSG ------------");
			//如果是显示的话，就隐藏lqt
			if(top.virtualRemoteState == 1)
			{
				//隐藏虚拟遥控器
				top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
			}
			pvr.mediaStop(0);	//xiehua: api added!!!
			top.g_mediaPosition = 1;
			window.location.href = "deviceList.html";
			break;
		}
		case top.E_PVR_DISK_UNPLUG:
			top.Log("THE USB DEVICE PLUG OUT!!!!");
			pvr.mediaStop(0);	//xiehua: api added!!!
			top.g_mediaPosition = 1;
			window.location.href = "deviceList.html";
			break;
		case top.E_PVR_PLAYBACK_ERR: //play error
		{
			top.Log("--------- THIS IS PVR_PLAYBACK_ERR MSG ------------");
			//operatableFlag = true;
			focusTab = TIPS_AREA;
			errorFlag = ERROR_VIDEO_ERROR;
			$('eb_info').innerText = eb_info[1]; //Video decoding error
			$('tipsBox').style.display = "block";
			break;
		}
		case top.E_MEDIA_CUSTOM_VIDEO_NO_SUPPORT: //video not support
		{
			top.Log("----- THIS IS E_MEDIA_CUSTOM_VIDEO_NO_SUPPORT -----");
			//operatableFlag = true;
			focusTab = TIPS_AREA;
			errorFlag = ERROR_VIDEO_NOT_SUPPORTED;
			$('eb_info').innerText = eb_info[3];
			$('tipsBox').style.display = "block";
			break;
		}
		case top.E_PVR_PLAYBACK_START: 	//playing
		{
			top.Log("--------- THIS IS PVR_PLAYBACK_START MSG ------------");
			$('loadingBox').style.display = 'none';
			loadingBoxFlag = 0;
			if(playStatus == S_PAUSE)
			{
				playStatus = S_PLAY;
				return;
			}
			//top.Log("case top.E_PVR_PLAYBACK_START......");
			hideMenu(0);
			seekableFlag = true;	//pvr.getSeekableStatus();
			skipFlagSubtitle = 0;
			skipFlagSoundtrack = 0;
			skipFlag3D = 0;
			$('optionInfo-4').style.color = "#aaaaaa";
			$('optionInfo-5').style.color = "#aaaaaa";
			$('statusIcon').style.display = 'none';
			playStatus = S_PLAY;
			//top.Log("case top.E_PVR_PLAYBACK_START, playStatus = "+playStatus);
			ff_fb_flag = 0;
			subtitleStartIndex = 0;
			soundTrackStartIndex = 0;
			
			currentFileInfo = pvr.getCurrentPlayingMediaInfo();				//xiehua: api added!!!
			currentFileIndex = pvr.getCurrentPlayingMediaPosition();	//xiehua: api added!!!
			playListIndex = currentFileIndex;
			subtitleCount = pvr.getVideoSubtitleCount(currentFileInfo.path);
			//xiehua: api added!!!
			soundTrackCount = pvr.getVideoSoundTrackCount(currentFileInfo.path);	//xiehua: api added!!!
			resolution = currentFileInfo.resolution;
			top.Log("resolution:"+resolution);
			if (resolution == 1) 
			{
				screenModeArray = screenModeHDArray;
				zoomPreviewImg = zoomPreviewImgHD;
			}
			else//SD
			{
				screenModeArray = screenModeSDArray;
				zoomPreviewImg = zoomPreviewImgSD;
			}
			top.g_mediaPosition = currentFileIndex;
			if(subtitleCount == 0)
			{
				skipFlagSubtitle = 1;
				$('optionInfo-4').style.color = "#787878"; //subtitleinfo
			}
			if(soundTrackCount == 0)
			{
				skipFlagSoundtrack = 1;
				$('optionInfo-5').style.color = "#787878";
			}
			if (setting.is3DPanel == 0) 
			{
				skipFlag3D = 1;
			}
			subtitleInfoList = pvr.getVideoSubtitleList(currentFileInfo.path, subtitleCount);
			toLanguangSort(subtitleLanShow,subtitleInfoList,subtitleCount)
			for(var i = 0;i < subtitleCount;i++)
				top.Log("playing event, subtitleLanShow["+i+"]= "+subtitleLanShow[i]);
			soundTrackInfoList = pvr.getVideoSoundTrackInfo();
			toLanguangSort(soundTrackLanShow,soundTrackInfoList,soundTrackCount)
			for(var i = 0;i < soundTrackCount;i++)
				top.Log("playing event, soundTrackLanShow["+i+"]= "+soundTrackLanShow[i]);
			optionInfoArray[OPTION_SUBTITLE] = pvr.getVideoSubtitleIndex();
			optionInfoArray[OPTION_SOUND_TRACK] = pvr.getVideoSoundTrackIndex();
			
			$('duration').innerText = getMediaFileDuration(currentFileInfo.path);
			//top.Log("playing event, filename = "+currentFileInfo.name);
			$('topTitleContent').innerText = currentFileInfo.name;
			refreshCPFlag();
			//top.Log("playing event, path = "+currentFileInfo.path);
			var info = pvr.getMediaVideoFileInfo(currentFileInfo.path);
			//top.Log("playing event, call fillFileInformation()...");
			fillFileInformation(info);
			
			if(progressBarTimer)
				clearInterval(progressBarTimer);
			/*
			progressBarTimer = setInterval("refreshProgressBar()", 900);
			*/
			
			break;
		}
		case top.E_MEDIA_PLAYER_STATUS_PAUSE: //pause
			//playStatus = "pause";
			break;
		case top.E_MEDIA_PLAYER_STATUS_FORWORD: //ff
			//playStatus = "ff";
			break;
		case top.E_MEDIA_PLAYER_STATUS_BACKWORD: //fb
			//playStatus = "fb";
			break;
		case top.E_MEDIA_STREAM_BUFFERING: //buffering
			break;
		case top.E_MEDIA_STREAM_BUFFERING_COMPLETE: //buffering complete
			break;
		case top.E_MEDIA_STREAM_VIDEO_ONLY: //video only
			break;
		case top.E_PVR_PLAYBACK_LOOP_EXIT: //repeat-mode-normal: loop end
		{
			top.Log("------ THIS IS PVR_PLAYBACK_LOOP_EXIT MSG ------");
			pvr.mediaStop(0);	//xiehua: api added!!!
			document.location.href = "pvrMediaList.html?media";
			break;
		}
		case top.E_STR_SCREEN_OFF:
		{
			top.Log("THE msg is E_STR_SCREEN_OFF");
			toExitBySTR();
			break;
		}
        case top.E_HP_PLUGIN:
        case top.E_HP_PLUGOUT:
        {
          top.systemEventProc(evt);
          break;
        }
		default:
		{
			//top.systemEventProc(evt);
			break;
		}
	}
}

function refreshMediaEvent(evt)
{
	var msg = evt.which;
	switch(msg)
	{
		case top.E_MEDIA_USB_INSERTED://usb insert
		case top.E_BOOKING_PLAY_START://booking play start
		case top.E_BOOKING_RECORD_START://booking record start
		case top.E_BOOKING_AHEAD_PLAY_START://booking ahead play start,
		case top.E_BOOKING_AHEAD_RECORD_START://booking ahead record start
		case top.E_CI_OP_UPDATE_CHANNEL://CMD_UI_NOTIFY_OP_UPDATE_CHANNEL
		case top.E_CI_OP_UPDATE_NIT://CMD_UI_NOTIFY_OP_UPDATE_NIT		
		case top.E_POWER_OFF_TIMER://power off timer
		case top.E_POWER_OFF_TIMER_EX:
			return 2;
		default:
			return 1;
	}
}
function toLeft()
{
	if(focusTab == DISPLAY_AREA && playStatus != S_STOP_RESUME)
	{
		focusTab = PROGRESS_AREA;
		$('seekInfo').style.display = 'block';
		$('topTitle').style.display = "block";
		$('progressArea').style.display = "block";
		$('playList').style.display == "none";
		$("endBar").src = "images/USB-Video-Progress-bar-Slider-02_.png";
		refreshProgressBar();
		seekStartTime = elapsed;
		clearInterval(progressBarTimer);
		progressBarTimer = setInterval("refreshProgressBar()", 900);
		seekTime(0);
	}
	else if(focusTab == PROGRESS_AREA)//focus on playing
	{
		clearTimeout(seekSettingTimer);
		refreshProgressBar();
		clearInterval(progressBarTimer);
		progressBarTimer = setInterval("refreshProgressBar()", 1000);
		// seekTime(-1);
		// seekSettingTimer = setTimeout(function(){
		// 		pvr.setSeekPoint(seekPoint);}, SEEK_TIME_DELAY);	//xiehua: api added!!!
		refreshSeekingTime(-1);
		seekSettingTimer = setTimeout(function(){
			pvr.setSeekPoint(seekPoint);
			$('topTitle').style.display = "none";
			$('statusIcon').style.display = "none";
			$('progressArea').style.display = "none";
			hideMenu(0);}, SEEK_TIME_DELAY);
	}
	else if(focusTab == OPTION_DETAIL_AREA)
	{
		focusTab = OPTION_AREA;
		resetFocusShape();
		
		$('listInfo').style.display = 'none';
		$('information').style.display = 'none';
		$('optionInfoList').style.display = 'none';
		$("optionUpArrow_1").style.display = 'none';
		$("optionDownArrow_1").style.display = 'none';
		$('optionInfoList').style.width = 300 +"px";
		hideMenu(15000);
		return;
	}
	else if(focusTab == PRESET_AREA)
	{
		optionListIndex = parseInt((optionListIndex - 1 + OPTION_INFO_COUNT) % OPTION_INFO_COUNT, 10);
		//pvr.setVideoPicturePreset(optionListIndex);
		setting.previewPictureMode(pictureModeTransform(optionListIndex,1));
		$('focus').style.left = FOCUS_LEFT_DISTANCE + FOCUS_DISTANCE * optionListIndex + "px";
		hideMenu(15000);
		return;
	}
	else if(focusTab == OPTION_BAR_AREA)
	{
		setOptionBarValue(-1);
	}
	else if (focusTab == SCREEN_MODE_AREA) 
	{
		/**
		
		if (optionListIndex == 0) 
		{
			optionListIndex = 7;
			$("pictureZoomFocus").style.left=335+(optionListIndex - 3)*230+"px";
			$("zoomCheckBox").style.left=360+(optionListIndex - 3)*230+"px";
			$("pictureZoomSelectBar").style.left = 0-234*(optionListIndex - 4) +"px";
		}
		else 
		{
			if ($("pictureZoomFocus").style.left == "335px") 
			{
				optionListIndex = optionListIndex - 1;
				$("pictureZoomSelectBar").style.left = 0-234*(optionListIndex - 4) +"px";
			}
		}
		**/
		if(optionListIndex - 1 >= 0)
		{
			setScroll(zoomSpans[optionListIndex + tmpStartIndex],0); 
			optionListIndex--;
			setScroll(zoomSpans[optionListIndex + tmpStartIndex],1); 
			$('pictureZoomFocus').style.left = 335+ 230 * optionListIndex + "px";
			$("zoomCheckBox").style.left=360+optionListIndex*230+"px";
			setting.previewMultimediaScreenMode(OPTION_PANNEL_TYPE, tmpStartIndex + optionListIndex);
		}
		else if(optionListIndex == 0 && tmpStartIndex > 0)
		{
			setScroll(zoomSpans[optionListIndex + tmpStartIndex],0); 
			tmpStartIndex--;
			setScroll(zoomSpans[optionListIndex + tmpStartIndex],1); 
			$('pictureZoomSelectBar').style.left = - tmpStartIndex * 234 + "px";
			setting.previewMultimediaScreenMode(OPTION_PANNEL_TYPE, tmpStartIndex + optionListIndex);
		}
	}
	hideMenu(FADE_TIME);
}

function toRight()
{
	top.Log("toRight(), focusTab = "+focusTab);
	if(focusTab == DISPLAY_AREA && playStatus != S_STOP_RESUME)
	{
		focusTab = PROGRESS_AREA;
		$('seekInfo').style.display = 'block';
		$('topTitle').style.display = 'block';
		$('progressArea').style.display = 'block';
		$('playList').style.display == 'none';
		$("endBar").src = "images/USB-Video-Progress-bar-Slider-02_.png";
		refreshProgressBar();
		seekStartTime = elapsed;
		clearInterval(progressBarTimer);
		progressBarTimer = setInterval("refreshProgressBar()", 900);
		seekTime(0);
	}
	else if(focusTab == PROGRESS_AREA)//focus on playing
	{
		clearTimeout(seekSettingTimer);
		refreshProgressBar();
		clearInterval(progressBarTimer);
		progressBarTimer = setInterval("refreshProgressBar()", 1000);
		// seekTime(1);
		// seekSettingTimer = setTimeout(function(){
		// 	pvr.setSeekPoint(seekPoint);}, SEEK_TIME_DELAY);	//xiehua: api added!!!
		refreshSeekingTime(1);
		seekSettingTimer = setTimeout(function(){
			pvr.setSeekPoint(seekPoint);
			hideMenu(0);
			$('topTitle').style.display = "none";
			$('statusIcon').style.display = "none";
			$('progressArea').style.display = "none";
		}, SEEK_TIME_DELAY);
	}
	else if(focusTab == OPTION_AREA)
	{
		top.Log("toRight(), optionIndex = "+optionIndex);
		if(optionIndex == OPTION_PIC_PRESET)//picture preset
		{
			focusTab = PRESET_AREA;
			OPTION_INFO_COUNT = picturePresetArray.length;
			optionListIndex = optionInfoArray[optionIndex];
			picPresetBack = optionListIndex;
			resetFocusShape();
			$('option').style.display = 'none';
			$('picturePresetBar').style.display = 'block';
			
			for (var i = 0; i < picturePresetCheckImg.length; i++) {
				if(i == optionListIndex)
				{
					picturePresetCheckImg[i].style.display = 'block';
				}
				else
				{
					picturePresetCheckImg[i].style.display = 'none';
				}
			};
			for(var i = 0; i < picturePresetCheckImg.length; i++)
			{
				$("pictureBar" + i).innerText = picturePresetArray[i];
			}
			
		}
		else if (optionIndex == OPTION_SCREEN_MODE) 
		{
			focusTab = SCREEN_MODE_AREA;
			OPTION_INFO_COUNT = screenModeArray.length;
			if(optionInfoArray[OPTION_SCREEN_MODE] >= screenModeArray.length - PIC_ZOOM_LIST_LENGTH)
			{
				screenModeStartIndex = screenModeArray.length - PIC_ZOOM_LIST_LENGTH;
				optionListIndex = optionInfoArray[OPTION_SCREEN_MODE] - screenModeStartIndex;
			}
			else
			{
				screenModeStartIndex = optionInfoArray[OPTION_SCREEN_MODE];
				optionListIndex = 0;
			}
			tmpStartIndex = screenModeStartIndex;
			$('option').style.display = "none";

			
			//fillOptionList(optionIndex);
			$("pictureZoomSetOption").innerHTML = top.optionVideoListArray_1[3];
			$("pictureZoomSetBar").style.display="block";
				
			zoomSpans = $("pictureZoomSelectBar").getElementsByTagName("span");//picPreset[pictureMode];
			previewImg = $("pictureZoomSelectBar").getElementsByTagName("img");
			zoomDivs = $("pictureZoomSelectBar").getElementsByTagName("div");

			for(var i = 0; i < screenModeArray.length; i++)
			{
				zoomDivs[i].style.display = "block";
				zoomSpans[i].innerHTML=screenModeArray[i];
				previewImg[i].src = zoomPreviewImg[i];
			}

			$('pictureZoomFocus').style.left = 335 + 230 * optionListIndex + "px";
			$('pictureZoomSelectBar').style.left = - tmpStartIndex * 234 + "px";
				/**
				optionListIndex = optionInfoArray[OPTION_SCREEN_MODE];
				if (optionListIndex < 4) 
				{
					$("pictureZoomFocus").style.left=335+optionListIndex*230+"px";
					$("zoomCheckBox").style.left=360+optionListIndex*230+"px";
					$("pictureZoomSelectBar").style.left = 0 +"px";
				}
				else if(optionListIndex >= 4 )
				{
					$("pictureZoomFocus").style.left=335+4*230+"px";
					$("zoomCheckBox").style.left=360+4*230+"px";
					
					$("pictureZoomSelectBar").style.left = 0-234*(optionListIndex - 4) +"px";
				}
				**/
				hideMenu(FADE_TIME);
			return;
		}
		else if(optionIndex == OPTION_INFORMATION)//info
		{
			//top.Log("toRight(), info...");
			focusTab = OPTION_DETAIL_AREA;
			resetFocusShape();
			$('listInfo').style.display = 'none';
			$('optionInfoList').style.height = 5+80*3+"px";
			
			var tmpTop = optionSecondListTopDistance + optionIndex * 80 - optionFirstStartIndex * 80;
			var tmpTopLimit = 1080 - 3 * 80 - 45;

			$('optionInfoList').style.top = (tmpTop > tmpTopLimit)? tmpTopLimit + "px" : tmpTop + "px";
			
			/* advance scroll string call this function ,nor take some except crazy*/
			top.doEleScrForNoOption(informationSpan, 0, 1);
			//setScroll(informationSpan[0],1);
			$('information').style.display = 'block';
			$('optionInfoList').style.display = 'block';
			hideMenu(15000);
			return;
		}
		else
		{
			var num = 5;
			switch(optionIndex)
			{
				case OPTION_PIC_PRESET:
					optionListIndex = optionInfoArray[optionIndex];
					OPTION_INFO_COUNT = picturePresetArray.length;
					break;
				case OPTION_BACK_LIGHT:
				case OPTION_BRIGHTNESS:
				case OPTION_CONTRAST:
				case OPTION_SATURATION:
				case OPTION_TINT:
				case OPTION_SHARPNESS:
					hideMenu(0);
					optionListIndex = optionInfoArray[optionIndex];
					displayOptionBarArea(getBarIndex(optionIndex));
					focusTab = OPTION_BAR_AREA;
					hideMenu(FADE_TIME_15);
					return;
				case OPTION_SOUND_PRESET:
					OPTION_INFO_COUNT = soundPresetArray.length;
					OPTION_INFO_MAX = OPTION_INFO_COUNT;
					optionListIndex = optionInfoArray[optionIndex];
					soundEffectBack = optionListIndex;
					num = soundPresetArray.length;
					break;
				case OPTION_3D_MODE:
					OPTION_INFO_COUNT = Mode3DArray.length;
					optionListIndex = optionInfoArray[optionIndex];
					num = Mode3DArray.length;
					break;
				case OPTION_SUBTITLE:
					OPTION_INFO_COUNT = subtitleCount + 1;
					if(OPTION_INFO_COUNT > OPTION_INFO_MAX)
					{
						if(optionInfoArray[OPTION_SUBTITLE] >= OPTION_INFO_COUNT - OPTION_INFO_MAX)
						{
							subtitleStartIndex = OPTION_INFO_COUNT - OPTION_INFO_MAX;
						}
						else
						{
							subtitleStartIndex = optionInfoArray[OPTION_SUBTITLE];
							optionListIndex = 0;
							tmpStartIndex = subtitleStartIndex;
						}
					}				
					optionListIndex = optionInfoArray[OPTION_SUBTITLE] - subtitleStartIndex;
					tmpStartIndex = subtitleStartIndex;
					num = OPTION_INFO_COUNT;
					break;
				case OPTION_SOUND_TRACK:
					OPTION_INFO_COUNT = soundTrackCount;
					if(OPTION_INFO_COUNT > OPTION_INFO_MAX)
					{
						if(optionInfoArray[OPTION_SOUND_TRACK] >= OPTION_INFO_COUNT - OPTION_INFO_MAX)
						{
							soundTrackStartIndex = OPTION_INFO_COUNT - OPTION_INFO_MAX;
						}
						else
						{
							soundTrackStartIndex = optionInfoArray[OPTION_SOUND_TRACK];
							optionListIndex = 0;
							tmpStartIndex = soundTrackStartIndex;
						}
					}
					optionListIndex = optionInfoArray[OPTION_SOUND_TRACK] - soundTrackStartIndex;
					tmpStartIndex = soundTrackStartIndex;
					num = OPTION_INFO_COUNT;
					break;
			}
			focusTab = OPTION_DETAIL_AREA;
			resetFocusShape();
			$('listInfo').style.display = 'block';
			$('information').style.display = 'none';
			$("optionInfoList").style.display = 'block';
			//optionListIndex = optionInfoArray[optionIndex];
			setListInfoTop(optionIndex,num);
			fillOptionList(optionIndex);
			
		}
		hideMenu(15000);
		return;
	}
	else if(focusTab == OPTION_DETAIL_AREA)
	{
		setSPOption();
	}
	else if(focusTab == OPTION_BAR_AREA)
	{
		setOptionBarValue(1);
	}
	else if(focusTab == PRESET_AREA)
	{
		optionListIndex = parseInt((optionListIndex + 1) % OPTION_INFO_COUNT, 10);
		//pvr.setVideoPicturePreset(optionListIndex);
		setting.previewPictureMode(pictureModeTransform(optionListIndex,1));
		$('focus').style.left = FOCUS_LEFT_DISTANCE + FOCUS_DISTANCE * optionListIndex + "px";
		hideMenu(15000);
		return;
	}
	else if(focusTab == SCREEN_MODE_AREA)
	{
		/**
		if (optionListIndex >= 4 && optionListIndex < 7) 
		{
			optionListIndex = optionListIndex + 1;
			$("pictureZoomSelectBar").style.left = 0-234*(optionListIndex - 4) +"px";
		}
		else if(optionListIndex < 4)
		{
			optionListIndex = parseInt((optionListIndex + 1) % 5, 10);
			$("pictureZoomFocus").style.left=335+optionListIndex*230+"px";
			$("zoomCheckBox").style.left=360+optionListIndex*230+"px";
			$("pictureZoomSelectBar").style.left = 0 +"px";
		}
		else if (optionListIndex == 7) 
		{
			optionListIndex = 0;
			screenModeStartIndex = 0;
			$("pictureZoomFocus").style.left=335+optionListIndex*230+"px";
			$("zoomCheckBox").style.left=360+optionListIndex*230+"px";
			$("pictureZoomSelectBar").style.left = 0 +"px";
		}
		**/
		
		FOCUS_DISTANCE = 230;
		if(optionListIndex + 1 < PIC_ZOOM_LIST_LENGTH)
		{
			setScroll(zoomSpans[optionListIndex + tmpStartIndex],0); 
			optionListIndex++;
			setScroll(zoomSpans[optionListIndex + tmpStartIndex],1); 
			$('pictureZoomFocus').style.left = 335 + FOCUS_DISTANCE * optionListIndex + "px";
			$("zoomCheckBox").style.left=360+optionListIndex*230+"px";
			setting.previewMultimediaScreenMode(OPTION_PANNEL_TYPE, tmpStartIndex + optionListIndex);
		}
		else if(optionListIndex == PIC_ZOOM_LIST_LENGTH - 1 
			&& optionListIndex + tmpStartIndex + 1 < screenModeArray.length)
		{
			setScroll(zoomSpans[optionListIndex + tmpStartIndex],0); 
			tmpStartIndex++;
			setScroll(zoomSpans[optionListIndex + tmpStartIndex],1); 
			$('pictureZoomSelectBar').style.left = - tmpStartIndex * 234 + "px";
			setting.previewMultimediaScreenMode(OPTION_PANNEL_TYPE, tmpStartIndex + optionListIndex);
		}
		
	}

	hideMenu(FADE_TIME);
}
/*
	Use a bubble sort algorithm to get language sort code
*/
function toLanguangSort(list1,list2,listcount)
{
	var count = 1;
	var nowIndex = 0;
	var afterIndex = 0;
	var beforeIndex = 0;
	var isExist = 0;
	for(nowIndex = 0; nowIndex < listcount; nowIndex++)
	{
		for(beforeIndex = 0; beforeIndex < nowIndex; beforeIndex++)//ÅÐ¶ÏÏÈÇ°ÊÇ·ñÒÑ¾­¶ÔÕâ¸öÊý¾Ý×ö¹ýÅÐ¶Ï
		{
			if(list2[nowIndex].elanguage == list2[beforeIndex].elanguage)
			{
				isExist = 1;
			}
		}
	
		if(isExist)//ÏÈÇ°ÒÑ¾­×ö¹ýÅÐ¶Ï£¬Ö±½Ó´¦ÀíÏÂÒ»¸öÊý¾Ý
		{
			isExist = 0;
			continue;
		}
		else
		{
			for(afterIndex = ( nowIndex + 1); afterIndex < listcount; afterIndex++)//ÅÐ¶ÏºóÃæÊÇ·ñÓÐÏàÍ¬µÄÓïÑÔ£¬Èç¹ûÓÐÐèÒª×öÌØÊâ´¦Àí
			{
				if(list2[nowIndex].elanguage == list2[afterIndex].elanguage)
				{
					count++;
					if(count == 2)//¶ÔµÚÒ»´ÎµÄÓïÑÔ×ö´¦Àí
					{
						list1[nowIndex] = top.all_language[list2[nowIndex].elanguage] + 1;
					}
					list1[afterIndex] = top.all_language[list2[afterIndex].elanguage] + count;
				}
			}
			if(count == 1)
			{
				list1[nowIndex] = top.all_language[list2[nowIndex].elanguage];
			}
			count = 1;
		}
	}
}
function setOptionBarValue(type)//[1]right [-1]left
{
	
	var tmpMax = SHORT_BAR_MAX_VALUE;
	if(type == 1)//right
	{
		optionListIndex = (optionListIndex + 1 > tmpMax) ? tmpMax : optionListIndex + 1;
	}
	else//left
	{
		optionListIndex = (optionListIndex - 1 < 0) ? 0 : optionListIndex - 1;
	}
	setBarValue(tmpMax);
}

function setBarValue(tmpValue)
{
	optionInfoArray[optionIndex] = optionListIndex;
	switch(optionIndex)
	{
		case OPTION_BACK_LIGHT:
			setting.backLight = optionListIndex;
			break;
		case OPTION_BRIGHTNESS:
			setting.brightness = optionListIndex;
			break;
		case OPTION_CONTRAST:
			setting.contrast = optionListIndex;
			break;
		case OPTION_SATURATION:
			setting.saturation = optionListIndex;
			break;
		case OPTION_TINT:
			setting.hue = optionListIndex;
			break;
		case OPTION_SHARPNESS:
			setting.sharpness = optionListIndex;
			break;
		default:
			break;
	}
	refreshBarArea(optionBarNameArray[getBarIndex(optionIndex)].getElementsByTagName('img'), 
		optionListIndex, tmpValue, OPTION_BAR_LENGTH);
	optionBarNameArray[getBarIndex(optionIndex)].getElementsByClassName('optionBarValue')[0].innerText = optionListIndex;
}

function getBarIndex(index)
{
	switch(index)
	{
		case OPTION_BACK_LIGHT:
			return 0;
		case OPTION_BRIGHTNESS:
			return 1;
		case OPTION_CONTRAST:
			return 2;
		case OPTION_SATURATION:
			return 3;
		case OPTION_TINT:
			return 4;
		case OPTION_SHARPNESS:
			return 5;
		default:
			return 0;
	}
}

function getBarType(index)
{
	switch(index)
	{
		case 0:
			return OPTION_BACK_LIGHT;
		case 1:
			return OPTION_BRIGHTNESS;
		case 2:
			return OPTION_CONTRAST;
		case 3:
			return OPTION_SATURATION;
		case 4:
			return OPTION_TINT;
		case 5:
			return OPTION_SHARPNESS;
		default:
			return OPTION_BACK_LIGHT;
	}
}

function displayOptionBarArea(index)
{
	fillOptionBarArea();
	$('optionBarBlock').style.top = - index * optionBarHeight + "px";

	for(var i = 0; i < optionBarNameArray.length; i++)
	{
		optionBarNameArray[i].getElementsByClassName('optionBarName')[0].style.WebkitTransform = "scale(0.85)";
		optionBarNameArray[i].getElementsByClassName('optionBarValue')[0].style.WebkitTransform = "scale(0.85)";
		optionBarNameArray[i].getElementsByClassName('optionBarStyle_2')[0].style.WebkitTransform = "scale(0.85)";
		optionBarNameArray[i].getElementsByClassName('optionBarValue')[0].style.display = 'none';
		optionBarNameArray[i].getElementsByClassName('optionBarStyle_2')[0].style.display = 'none';
	}

	optionBarNameArray[index].getElementsByClassName('optionBarName')[0].style.WebkitTransform = "scale(1)";
	optionBarNameArray[index].getElementsByClassName('optionBarValue')[0].style.WebkitTransform = "scale(1)";
	optionBarNameArray[index].getElementsByClassName('optionBarStyle_2')[0].style.WebkitTransform = "scale(1)";
	optionBarNameArray[index].getElementsByClassName('optionBarValue')[0].style.display = 'block';
	optionBarNameArray[index].getElementsByClassName('optionBarStyle_2')[0].style.display = 'block';

	//displayOptionBarArrows(index);
	$('optionBarArea').style.display = 'block';
}

function displayOptionBarArrows(index)
{
	$('optionBarUpArrow').style.display = (index > 1 && index < 6) ? 'block' : 'none';
	$('optionBarDownArrow').style.display = (index < 6 - 2 && index > 0) ? 'block' : 'none';
}

function fillOptionBarArea()
{
	$('backLightBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[OPTION_BACK_LIGHT];
	$('brightnessBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[OPTION_BRIGHTNESS];
	$('contrastBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[OPTION_CONTRAST];
	$('saturationBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[OPTION_SATURATION];
	$('tintBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[OPTION_TINT];
	$('sharpnessBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[OPTION_SHARPNESS];

	refreshBarArea($('backLightBar').getElementsByTagName('img'), optionInfoArray[OPTION_BACK_LIGHT], 100, OPTION_BAR_LENGTH);
	refreshBarArea($('brightnessBar').getElementsByTagName('img'), optionInfoArray[OPTION_BRIGHTNESS], 100, OPTION_BAR_LENGTH);
	refreshBarArea($('contrastBar').getElementsByTagName('img'), optionInfoArray[OPTION_CONTRAST], 100, OPTION_BAR_LENGTH);
	refreshBarArea($('saturationBar').getElementsByTagName('img'), optionInfoArray[OPTION_SATURATION], 100, OPTION_BAR_LENGTH);
	refreshBarArea($('tintBar').getElementsByTagName('img'), optionInfoArray[OPTION_TINT], 100, OPTION_BAR_LENGTH);
	refreshBarArea($('sharpnessBar').getElementsByTagName('img'), optionInfoArray[OPTION_SHARPNESS], 100, OPTION_BAR_LENGTH);
	
}

function toUp()
{
	if(focusTab == OPTION_AREA)
	{
		//optionIndex = parseInt((optionIndex + OPTION_MAX_COUNT - 1) % OPTION_MAX_COUNT, 10);
		/**
		skipOptionCheck(-1);


		if(optionIndex == OPTION_SOUND_TRACK)	//focus:info->picture.
		{
			$('listInfo').style.display = 'none';
			$('information').style.display = 'none';
			$('optionInfoList').style.display = 'none';
		}
		$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE 
			+ FOCUS_DISTANCE * optionIndex + "px";
		**/
		setScroll(optionListNameSpan[optionIndex],0);
		setOptionFocusPosition(-1);
		arrowOptionDisplay();
		$('optionInfoFocus').style.top = optionIndex * FOCUS_DISTANCE + "px";
		$('optionFirstUl').style.top = - optionFirstStartIndex * optionHeightDistance + "px";
		setScroll(optionListNameSpan[optionIndex],1);
		hideMenu(15000);
		return;
	}
	else if(focusTab == QUICK_MENU_AREA)
	{
		if(subtitleCount <= MAX_QUICK_MENU_COUNT)
		{
			quickMenuIndex = parseInt((quickMenuIndex - 1 + quickCount) % quickCount, 10);
		}
		else if(quickMenuIndex == 0 && quickMenuStartIndex - 1 >= 0)
		{
			quickMenuStartIndex--;
			for(var i = 0; i < MAX_QUICK_MENU_COUNT; i++)
			{
				quickMenuListDiv[i].style.display = "block";
				switch(quickMenuType)
				{
					case QUICK_MENU_SUBTITLE:
					if (i == 0) 
					{
						quickMenuListDiv[i].innerText = offinfo;
					}
					else
					{
						//quickMenuListDiv[i].innerText = subtitleInfoList[i - 1].name;
						quickMenuListDiv[i].innerText =subtitleLanShow[i - 1];
					}
					break;
					case QUICK_MENU_LANG:
						//quickMenuListDiv[i].innerText = top.all_language[soundTrackInfoList[i].elanguage];
						quickMenuListDiv[i].innerText = soundTrackLanShow[i];
					break;
					case QUICK_MENU_3D:
					quickMenuListDiv[i].innerText = Mode3DArray[i];
					break;
				}
			}
			if(quickMenuStartIndex == 0 && quickMenuType == QUICK_MENU_SUBTITLE)
			{
				quickMenuListDiv[0].style.display = "block";
				quickMenuListDiv[0].innerText = offinfo;
			}
		}
		else if(quickMenuIndex - 1 >= 0)
		{
			quickMenuIndex--;
		}
		$('quickFocus').style.top = 160 + (quickMenuIndex * FOCUS_DISTANCE) + "px";
	}
	else if(focusTab == OPTION_DETAIL_AREA && optionIndex != OPTION_INFORMATION)
	{
		//optionListIndex = parseInt((optionListIndex - 1 + OPTION_INFO_COUNT) % OPTION_INFO_COUNT, 10);
		//$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_DISTANCE * optionListIndex + "px";
		if(OPTION_INFO_COUNT <= OPTION_INFO_MAX)
		{
			optionListIndex = parseInt((optionListIndex - 1 + OPTION_INFO_COUNT) % OPTION_INFO_COUNT, 10);
			$('optionFocus_2').style.top =  FOCUS_DISTANCE * (0+optionListIndex) + FOCUS_TOP_DISTANCE + "px";
			top.Log("1 up optionFocus_2 top:"+$('optionFocus_2').style.top);
			if (optionIndex == OPTION_SOUND_PRESET) 
			{
				setting.previewSoundEffect(soundModeTransform(optionListIndex,1));
			}
		}
		else
		{
			if(optionListIndex - 1 >= 0)
			{
				optionListIndex--;
				$('optionFocus_2').style.top =  FOCUS_DISTANCE * (0+optionListIndex) + FOCUS_TOP_DISTANCE + "px";
				top.Log("2 up optionFocus_2 optionListIndex:"+optionListIndex);
			}
			else if(optionIndex == OPTION_SCREEN_MODE)
			{
				moveUpRefreshSecList(screenModeArray, "", screenModeArray.length, 0);
			}
			else if(optionIndex == OPTION_SUBTITLE)
			{
				moveUpRefreshSecList(subtitleInfoList, "", subtitleInfoList.length, 0);
			}
			else if(optionIndex == OPTION_SOUND_TRACK)
			{
				moveUpRefreshSecList(soundTrackInfoList, "", soundTrackInfoList.length, 0);
			}
		}
		hideMenu(15000);
		return;
	}
	else if(focusTab == PLAY_LIST_AREA)
	{
		if(playListFocusIndex - 1 >= 0 && playListFocusIndex < MAX_LENGTH_ONE_PAGE)
		{
			$("name"+playListFocusIndex).style.color = "#aaaaaa";
			//resetScrollHtmlInner($("name"+playListFocusIndex),  "hidden", "ellipsis");
			setScroll($("name"+playListFocusIndex),0);
			playListFocusIndex--;
			//resetScrollHtmlInner($("name"+playListFocusIndex), "-webkit-marquee", "clip");
			setScroll($("name"+playListFocusIndex),1);
			$('focus').style.top = playlistFocusTopDistance + (FOCUS_DISTANCE * playListFocusIndex) + "px";
			$("name"+playListFocusIndex).style.color = "#ffffff";
		}
		else if(playListFocusIndex == 0 && playListStart == 0)
		{
			$("name"+playListFocusIndex).style.color = "#aaaaaa";
			setScroll($("name"+playListFocusIndex),0);
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
			$('focus').style.top = playlistFocusTopDistance + (FOCUS_DISTANCE * playListFocusIndex) + "px";
			$(iUpArrowName).src = "images/Icon-T.png";
			$(iDownArrowName).src = "images/Icon-B-Disable.png";
			setScroll($("name"+playListFocusIndex),1);
			$("name"+playListFocusIndex).style.color = "#ffffff";
		}
		else
		{
			playListStart--;
			$(iDownArrowName).src = "images/Icon-B.png";
			refreshPlayList();
			refreshCPFlag();
			showPlayListScrollBar(currentPlayList.length, playListStart);
			setScroll($("name"+playListFocusIndex),1);
		}
	}
	else if(focusTab == OPTION_BAR_AREA)
	{
		setOptionBarPosition(-1);//up
	}
	hideMenu(FADE_TIME);
}

function toDown()
{
	if(focusTab == DISPLAY_AREA || focusTab == PROGRESS_AREA)//focus on playing
	{
		focusTab = PLAY_LIST_AREA;
		if(currentPlayList.length <= PLAYLIST_MAX_LENGTH)
		{
			playListStart = 0;
			playListFocusIndex = playListIndex;
			$(iUpArrowName).src = "images/Icon-T-Disable.png";
			$(iDownArrowName).src = "images/Icon-B-Disable.png";
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
		//top.Log("toDown(), DISPLAY_AREA, length = "+currentPlayList.length);
		//top.Log("toDown(), DISPLAY_AREA, playListStart = "+playListStart);
		showPlayListScrollBar(currentPlayList.length, playListStart);
		resetFocusShape();
		$('playList').style.display = 'block';
		
		//resetScrollHtmlInner($("name"+playListFocusIndex), "-webkit-marquee", "clip");
		setScroll($("name"+playListFocusIndex),1);
	}
	else if(focusTab == QUICK_MENU_AREA)
	{
		if(quickCount <= MAX_QUICK_MENU_COUNT)
		{
			quickMenuIndex = parseInt((quickMenuIndex + 1) % quickCount, 10);
		}
		else if(quickMenuIndex + 1 == MAX_QUICK_MENU_COUNT
			&& quickMenuStartIndex + MAX_QUICK_MENU_COUNT < quickCount)
		{
			quickMenuStartIndex++;
			for(var i = 0; i < MAX_QUICK_MENU_COUNT; i++)
			{
				quickMenuListDiv[i].style.display = "block";
				switch(quickMenuType)
				{
					case QUICK_MENU_SUBTITLE:
						//quickMenuListDiv[i].innerText = subtitleInfoList[i + quickMenuStartIndex - 1].name;
						quickMenuListDiv[i].innerText = subtitleLanShow[i + quickMenuStartIndex - 1];
					break;
					case QUICK_MENU_LANG:
					//quickMenuListDiv[i].innerText =top.all_language[soundTrackInfoList[i].elanguage];
					quickMenuListDiv[i].innerText = soundTrackLanShow[i];
					break;
					case QUICK_MENU_3D:
					quickMenuListDiv[i].innerText = Mode3DArray[i];
					break;
				}
			}
		}
		else if(quickMenuIndex + 1 < MAX_QUICK_MENU_COUNT)
		{
			quickMenuIndex++;
		}
		$('quickFocus').style.top = 160 + (quickMenuIndex * FOCUS_DISTANCE) + "px";
		top.Log("quickMenuIndex:"+quickMenuIndex);
	}
	else if(focusTab == PLAY_LIST_AREA)
	{
		if(playListFocusIndex >= 0 && playListFocusIndex + 1 < MAX_LENGTH_ONE_PAGE)
		{
			$("name"+playListFocusIndex).style.color = "#aaaaaa";
			//resetScrollHtmlInner($("name"+playListFocusIndex), "hidden", "ellipsis");
			setScroll($("name"+playListFocusIndex),0);
			playListFocusIndex++;
			//resetScrollHtmlInner($("name"+playListFocusIndex), "-webkit-marquee", "clip");
			setScroll($("name"+playListFocusIndex),1);
			$('focus').style.top = playlistFocusTopDistance + (FOCUS_DISTANCE * playListFocusIndex) + "px";
			$("name"+playListFocusIndex).style.color = "#ffffff";
		}
		else if((playListStart + PLAYLIST_MAX_LENGTH) < currentPlayList.length)
		{
			$(iUpArrowName).src = "images/Icon-T.png";
			playListStart++;
			refreshPlayList();
			refreshCPFlag();
			showPlayListScrollBar(currentPlayList.length, playListStart);
			setScroll($("name"+playListFocusIndex),1);
		}
		else if(((playListFocusIndex +1) == currentPlayList.length)|| ((playListStart+MAX_LENGTH_ONE_PAGE) == currentPlayList.length) )
		{
			$("name"+playListFocusIndex).style.color = "#aaaaaa";
			setScroll($("name"+playListFocusIndex),0);
			playListFocusIndex = 0;
			setScroll($("name"+playListFocusIndex),1);
			playListStart = 0;
			refreshPlayList();
			refreshCPFlag();
			showPlayListScrollBar(currentPlayList.length, playListStart);
			$('focus').style.top = playlistFocusTopDistance + (FOCUS_DISTANCE * playListFocusIndex) + "px";
			$(iUpArrowName).src = "images/Icon-T-Disable.png";
			$(iDownArrowName).src = "images/Icon-B.png";	
			$("name"+playListFocusIndex).style.color = "#ffffff";
		}
		else
		{
		}
	}
	else if(focusTab == OPTION_AREA)
	{
		//optionIndex = parseInt((optionIndex + 1) % OPTION_MAX_COUNT, 10);
		// skipOptionCheck(1);
		// if(optionIndex == OPTION_PIC_PRESET)	//focus:info->picture.
		// {
		// 	$('listInfo').style.display = 'none';
		// 	$('information').style.display = 'none';
		// 	$('optionInfoList').style.display = 'none';
		// }
		// $('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_DISTANCE * optionIndex + "px";
		setScroll(optionListNameSpan[optionIndex],0);
		setOptionFocusPosition(1);
		arrowOptionDisplay();
		$('optionInfoFocus').style.top = optionIndex * FOCUS_DISTANCE + "px";
		$('optionFirstUl').style.top = - optionFirstStartIndex * optionHeightDistance + "px";
		setScroll(optionListNameSpan[optionIndex],1);
		hideMenu(15000);
		return;
	}
	else if(focusTab == OPTION_BAR_AREA)
	{
		setOptionBarPosition(1);//down
	}
	else if(focusTab == OPTION_DETAIL_AREA && optionIndex != OPTION_INFORMATION)
	{
		if(OPTION_INFO_COUNT <= OPTION_INFO_MAX)
		{
			optionListIndex = parseInt((optionListIndex + 1) % OPTION_INFO_COUNT, 10);
			$('optionFocus_2').style.top =  FOCUS_DISTANCE * (0+optionListIndex) + FOCUS_TOP_DISTANCE + "px";
			if (optionIndex == OPTION_SOUND_PRESET) 
			{
				setting.previewSoundEffect(soundModeTransform(optionListIndex,1));
			}
		}
		else
		{
			if(optionListIndex + 1 < OPTION_INFO_MAX)
			{
				optionListIndex++;
				$('optionFocus_2').style.top =  FOCUS_DISTANCE * (0+optionListIndex) + FOCUS_TOP_DISTANCE + "px";
			}
			else if(optionIndex == OPTION_SCREEN_MODE)
			{
				moveDownRefreshSecList(screenModeArray, "", screenModeArray.length, 0);
			}
			else if(optionIndex == OPTION_SUBTITLE)
			{
				moveDownRefreshSecList(subtitleInfoList, "", subtitleInfoList.length, 0);
			}
			else if(optionIndex == OPTION_SOUND_TRACK)
			{
				moveDownRefreshSecList(soundTrackInfoList, "", soundTrackInfoList.length, 0);
			}
		}
		hideMenu(15000);
		return;
	}
	hideMenu(FADE_TIME);
}

function arrowOptionDisplay()
{
	$('arrowUpOption').style.display = (optionFirstStartIndex == 0) ? 'none' : 'block';
	$('arrowDownOption').style.display = (optionFirstStartIndex + OPTION_FIRST_MAX_COUNT < optionFirstListLength) ? 'block' : 'none';
}

function setOptionFocusPosition(type)//[-1]up [1]down
{
	//setOptionMenuFocus(-1, optionFocusIndex_1);
	if(type == 1)//down
	{
		if(optionFirstListLength <= OPTION_FIRST_MAX_COUNT)
		{
			optionFirstStartIndex = 0;
			optionIndex = (optionIndex + 1 < optionFirstListLength)
				? optionIndex + 1 : 0;
		}
		else
		{
			if(optionIndex + 1 < optionFirstStartIndex + OPTION_FIRST_MAX_COUNT)
			{
				optionIndex++;
			}
			else if(optionFirstStartIndex < optionFirstListLength - OPTION_FIRST_MAX_COUNT)
			{
				optionFirstStartIndex++;
				optionIndex++;
			}
			else
			{
				optionFirstStartIndex = 0;
				optionIndex = 0;
			}
		}
	}
	else if(type == -1)//up
	{
		if(optionFirstListLength <= OPTION_FIRST_MAX_COUNT)
		{
			optionFirstStartIndex = 0;
			optionIndex = optionIndex - 1 >= 0
				? optionIndex - 1 : optionFirstListLength - 1;
		}
		else
		{
			if(optionIndex > optionFirstStartIndex)
			{
				optionIndex--;
			}
			else if(optionFirstStartIndex > 0)
			{
				optionFirstStartIndex--;
				optionIndex--;
			}
			else
			{
				optionFirstStartIndex = optionFirstListLength - OPTION_FIRST_MAX_COUNT;
				optionIndex = optionFirstListLength - 1;
			}
		}
	}
	//setOptionMenuFocus(optionIndex, -1);
}

function setOptionBarPosition(type)//[1]down [-1]up
{
	var tmpIndex = getBarIndex(optionIndex);
	var tmpLength = optionBarNameArray.length;
	setOptionBarFocus(-1, tmpIndex);
	if(type == 1)//down
	{
		tmpIndex = (tmpIndex + 1 < tmpLength) ? tmpIndex + 1 : tmpIndex;
	}
	else//up
	{
		tmpIndex = (tmpIndex - 1 > 0) ? tmpIndex - 1 : 0;
	}
	displayOptionBarArrows(tmpIndex);
	setOptionBarFocus(tmpIndex, -1);
	optionIndex = getBarType(tmpIndex);
	optionListIndex = optionInfoArray[optionIndex];
	$('optionBarBlock').style.top = - optionBarHeight * tmpIndex + "px";
}

function setOptionBarFocus(currentNum, lastNum)
{
	if(currentNum > -1)
	{
		optionBarNameArray[currentNum].getElementsByClassName('optionBarName')[0].style.WebkitTransform = "scale(1)";
		optionBarNameArray[currentNum].getElementsByClassName('optionBarValue')[0].style.WebkitTransform = "scale(1)";
		optionBarNameArray[currentNum].getElementsByClassName('optionBarStyle_2')[0].style.WebkitTransform = "scale(1)";
		optionBarNameArray[currentNum].getElementsByClassName('optionBarValue')[0].style.display = 'block';
		optionBarNameArray[currentNum].getElementsByClassName('optionBarStyle_2')[0].style.display = 'block';
	}
	if(lastNum > -1)
	{
		optionBarNameArray[lastNum].getElementsByClassName('optionBarName')[0].style.WebkitTransform = "scale(0.85)";
		optionBarNameArray[lastNum].getElementsByClassName('optionBarValue')[0].style.WebkitTransform = "scale(0.85)";
		optionBarNameArray[lastNum].getElementsByClassName('optionBarStyle_2')[0].style.WebkitTransform = "scale(0.85)";
		optionBarNameArray[lastNum].getElementsByClassName('optionBarValue')[0].style.display = 'none';
		optionBarNameArray[lastNum].getElementsByClassName('optionBarStyle_2')[0].style.display = 'none';
	}
	if(currentNum == -1 && lastNum == -1)
	{
		for(var i = 0; i < optionBarNameArray.length; i++)
		{
			optionBarNameArray[i].getElementsByClassName('optionBarName')[0].style.WebkitTransform = "scale(0.85)";
			optionBarNameArray[i].getElementsByClassName('optionBarValue')[0].style.WebkitTransform = "scale(0.85)";
			optionBarNameArray[i].getElementsByClassName('optionBarStyle_2')[0].style.WebkitTransform = "scale(0.85)";
			optionBarNameArray[i].getElementsByClassName('optionBarValue')[0].style.display = 'none';
			optionBarNameArray[i].getElementsByClassName('optionBarStyle_2')[0].style.display = 'none';
		}
	}
}

function toOK()//DISPLAY_AREA, OPTION_AREA, OPTION_DETAIL_AREA, PLAY_LIST_AREA, PROGRESS_AREA
{
	if(focusTab == DISPLAY_AREA)//focus on playing
	{
		//top.Log("toOK(), playStatus = "+playStatus);
		//top.Log("toOK(), ff_fb_flag = "+ff_fb_flag);
		if(playStatus == S_PLAY && ff_fb_flag == 0)
		{
			playStatus = S_PAUSE;
			$('statusIcon').src = "images/USB-Icon-Pause.png";//pause
			$('topTitle').style.display = "block";
			$('statusIcon').style.display = "block";
			$('progressArea').style.display = "block";
			refreshProgressBar();
			pvr.mediaPause();	//xiehua: api added!!!
		}
		else if(playStatus == S_PAUSE || playStatus == S_STOP_RESUME)
		{
			playStatus = S_PLAY;
			pvr.mediaResume();	//xiehua: api added!!!
			$('statusIcon').style.display = 'none';
			hideMenu(0);
			return;
		}
		else if(ff_fb_flag != 0)
		{
			//$('statusIcon').src = "images/USB-Icon-Play.png";
			ff_fb_flag = 0;
			pvr.mediaFastForward(1);		//xiehua: api added!!!
			playStatus = S_PLAY;
			$('statusIcon').style.display = 'none';
			hideMenu(0);
			return;
		}
	}
	else if(focusTab == PROGRESS_AREA)
	{
		//pvr.setSeekPoint(seekPoint);	//xiehua: api added!!!
		clearTimeout(seekSettingTimer);
		pvr.setSeekPoint(seekPoint);
		$('topTitle').style.display = "none";
		$('statusIcon').style.display = "none";
		$('progressArea').style.display = "none";
		$("seekInfo").style.display = "none";
		focusTab = DISPLAY_AREA;
	}
	else if(focusTab == PLAY_LIST_AREA)
	{
		playStatus = S_EOS;
		pvr.mediaStop(0);	//xiehua: api added!!!
		mediaPlay(currentPlayList[playListStart + playListFocusIndex].path);
	}
	else if(focusTab == QUICK_MENU_AREA)
	{
		if(quickMenuType == QUICK_MENU_SUBTITLE)
		{
			//top.Log("--inok--QUICK_MENU_SUBTITLE = "+ quickMenuStartIndex+"quickMenuIndex = "+quickMenuIndex);
			pvr.setVideoSubtitleIndex(quickMenuStartIndex + quickMenuIndex-1);
		}
		else if(quickMenuType == QUICK_MENU_LANG)
		{
			pvr.setVideoSoundTrackIndex(quickMenuStartIndex + quickMenuIndex);
		}
		else if (quickMenuType == QUICK_MENU_3D) 
		{
			pvr.setVideo3DMode(quickMenuStartIndex + quickMenuIndex);
			top.Log("setVideo3DMode:"+quickMenuStartIndex + quickMenuIndex+" getVideo3DMode:"+pvr.getVideo3DMode());
		}
		hideMenu(0);
	}
	else if(focusTab == OPTION_AREA)
	{
		toRight();
	}
	else if(focusTab == OPTION_DETAIL_AREA || focusTab == PRESET_AREA || focusTab == SCREEN_MODE_AREA)
	{
		setSPOption();
	}
	else if(focusTab == OPTION_BAR_AREA)
	{
		toBack();
	}
	else if(focusTab == TIPS_AREA)
	{
		switch(errorFlag)
		{ 
			case ERROR_VIDEO_ERROR:
			case ERROR_AUDIO_ERROR:
			case ERROR_VIDEO_NOT_SUPPORTED:
				clearAllTimer();
				top.g_currentMedia = pvr.getCurrentPlayingMediaInfo();
				top.g_mediaPosition = pvr.getCurrentPlayingMediaPosition();
				hideMenu(0);
				$('tipsBox').style.display = "none";
				$('statusIcon').style.display = "none";
				pvr.mediaStop(0);
				playStatus = S_EOS;
				document.location.href = "pvrMediaList.html?media";
				break;
			default:
				break;
		}
	}
	hideMenu(FADE_TIME);
}

function toBack()
{
	top.Log("toBack(), focusTab = "+focusTab);
	switch(focusTab)
	{
		case DISPLAY_AREA:
			pvr.mediaStop(1);	//xiehua: api added!!!
			hideMenu(0);
			document.location.href = "pvrMediaList.html?media";
		break;
		case TIPS_AREA://not do everting when loadingBoxFlag queal one
			break;
		case SCREEN_MODE_AREA:
			FOCUS_DISTANCE = 80;
			focusTab = OPTION_AREA;
			$('option').style.display = "block";
			$("pictureZoomSetBar").style.display = "none";
		break;
		case OPTION_DETAIL_AREA:
			toLeft();
		break;
		case OPTION_BAR_AREA:
			toOption(optionIndex);
		break;
		default:
			hideMenu(0);
			if(focusTab == PRESET_AREA)
			{
				toOption(0);
				return;
			}
			$("name"+playListFocusIndex).style.color = "#aaaaaa";
			focusTab = DISPLAY_AREA;
		break;
	}
	
}


function toOption(index)
{
	if (focusTab == TIPS_AREA) 
	{
		return;
	}
	else if($('option').style.display == "block")
	{
		focusTab = DISPLAY_AREA;
		hideMenu(0);
	}
	else
	{
		
		if(OPTION_FIRST_MAX_COUNT <= index)
		{
			optionFirstStartIndex = (index + OPTION_FIRST_MAX_COUNT < optionFirstListLength)
				? index : optionFirstListLength - OPTION_FIRST_MAX_COUNT;
		}
		else
		{
			optionFirstStartIndex = 0;
		}

		optionIndex = index;
		optionListIndex = 0;
		focusTab = OPTION_AREA;
		$('option').style.display = 'block';
		$('focus').style.display = 'none'; 
		$('topTitle').style.display = 'none'; 
		$('playList').style.display = 'none';
		$('seekInfo').style.display = 'none';
		$('optionBarArea').style.display = 'none';
		$('progressArea').style.display = 'none';
		$('picturePresetBar').style.display = 'none';
		
		displayOptionList();
		resetFocusShape();
		setScroll(optionListNameSpan[index],1);
		//setOptionMenuFocus(); //to be continued , 变换右箭头颜色
		arrowOptionDisplay(); //to be continued , 上下箭头是否显示
		hideMenu(FADE_TIME);
	}
}

function displayOptionList()
{
	checkOptionListInfo();
	refreshOptionInfo();
	fillOptionFirstList();

	for(var i = 0; i < optionListLi.length; i++)
	{
		var tmpIndex = parseInt(optionListLi[i].getAttribute(displayAttri));
		if(tmpIndex == -1)
		{
			optionListLi[i].style.display = 'none';
		}
		else
		{
			optionListLi[i].style.display = 'block';
			optionListLi[i].style.top = optionHeightDistance * tmpIndex + "px";
		}
	}
}

function checkOptionListInfo()
{
	
	var displayIndex = 0;
	for(var i = 0; i < optionListLi.length; i++)
	{
		switch(i)
		{
			case optionIndexPicPreset:
				currentOptionFirstListArray[displayIndex] = $('optionPicturePreset');
				OPTION_PIC_PRESET = displayIndex++;
				optionListLi[i].setAttribute(displayAttri, OPTION_PIC_PRESET);
				break;
			case optionIndexBacklight:
				currentOptionFirstListArray[displayIndex] = $('optionBackLight');
				OPTION_BACK_LIGHT = displayIndex++;
				optionListLi[i].setAttribute(displayAttri, OPTION_BACK_LIGHT);
				break;
			case optionIndexBrightness:
				currentOptionFirstListArray[displayIndex] = $('optionBrightness');
				OPTION_BRIGHTNESS = displayIndex++;
				optionListLi[i].setAttribute(displayAttri, OPTION_BRIGHTNESS);
				break;
			case optionIndexContrast:
				currentOptionFirstListArray[displayIndex] = $('optionContrast');
				OPTION_CONTRAST = displayIndex++;
				optionListLi[i].setAttribute(displayAttri, OPTION_CONTRAST);
				break;
			case optionIndexSaturation:
				currentOptionFirstListArray[displayIndex] = $('optionSaturation');
				OPTION_SATURATION = displayIndex++;
				optionListLi[i].setAttribute(displayAttri, OPTION_SATURATION);
				break;
			case optionIndexTint:
				currentOptionFirstListArray[displayIndex] = $('optionTint');
				OPTION_TINT = displayIndex++;
				optionListLi[i].setAttribute(displayAttri, OPTION_TINT);
				break;
			case optionIndexSharpness:
				currentOptionFirstListArray[displayIndex] = $('optionSharpness');
				OPTION_SHARPNESS = displayIndex++;
				optionListLi[i].setAttribute(displayAttri, OPTION_SHARPNESS);
				break;
			case optionIndexSoundPreset:
				currentOptionFirstListArray[displayIndex] = $('optionSoundPreset');
				OPTION_SOUND_PRESET = displayIndex++;
				optionListLi[i].setAttribute(displayAttri, OPTION_SOUND_PRESET);
				break;
			case optionIndexScreenMode:
				currentOptionFirstListArray[displayIndex] = $('optionScreenMode');
				OPTION_SCREEN_MODE = displayIndex++;
				optionListLi[i].setAttribute(displayAttri, OPTION_SCREEN_MODE);
				break;
			case optionIndex3DMode:
				if(skipFlag3D)
				{
					OPTION_3D_MODE = -1;
				}
				else
				{
					currentOptionFirstListArray[displayIndex] = $('option3DMode');
					OPTION_3D_MODE = displayIndex++;
				}
				optionListLi[i].setAttribute(displayAttri, OPTION_3D_MODE);
				break;
			case optionIndexSubtitle:
				if(skipFlagSubtitle)
				{
					OPTION_SUBTITLE = -1;
				}
				else
				{
					currentOptionFirstListArray[displayIndex] = $('optionSubtitle');
					OPTION_SUBTITLE = displayIndex++;
				}
				optionListLi[i].setAttribute(displayAttri, OPTION_SUBTITLE);
				break;
			case optionIndexSoundTrack:
				if(skipFlagSoundtrack)
				{
					OPTION_SOUND_TRACK = -1;
				}
				else
				{
					currentOptionFirstListArray[displayIndex] = $('optionSoundTrack');
					OPTION_SOUND_TRACK = displayIndex++;
				}
				optionListLi[i].setAttribute(displayAttri, OPTION_SOUND_TRACK);
				break;
			case optionIndexInfo:
				currentOptionFirstListArray[displayIndex] = $('optionInfo');
				OPTION_INFORMATION = displayIndex++;
				optionListLi[i].setAttribute(displayAttri, OPTION_INFORMATION);
				break;
			default:
				top.Log("top.Log-checkOptionListInfo-optionListLi-"+i);
				break;

		}
	}
	optionFirstListLength = displayIndex;
}

function refreshOptionInfo()
{
	optionInfoArray[OPTION_PIC_PRESET] = pictureModeTransform(setting.pictureMode, 0);// = 0;fix me
	optionInfoArray[OPTION_BACK_LIGHT] = setting.backLight;
	optionInfoArray[OPTION_BRIGHTNESS] = setting.brightness;
	optionInfoArray[OPTION_CONTRAST]   = setting.contrast;
	optionInfoArray[OPTION_SATURATION] = setting.saturation;
	optionInfoArray[OPTION_TINT]       = setting.hue;
	optionInfoArray[OPTION_SHARPNESS]  = setting.sharpness;
	optionInfoArray[OPTION_SOUND_PRESET] = soundModeTransform(setting.soundPreset, 0);//get value from mw
	if (resolution == 1) 
	{
		optionInfoArray[OPTION_SCREEN_MODE] = pvr.getVideoScreenMode(0);
	}
	else
	{
		optionInfoArray[OPTION_SCREEN_MODE] = pvr.getVideoScreenMode(1);
	}
	if(!skipFlag3D)
	{
		optionInfoArray[OPTION_3D_MODE] = pvr.getVideo3DMode();
	}
	if(!skipFlagSubtitle)
	{
		//top.Log("in-skipFlagSubtitle-getVideoSubtitleIndex ="+pvr.getVideoSubtitleIndex());
		optionInfoArray[OPTION_SUBTITLE] = pvr.getVideoSubtitleIndex()+1;
	}
	if(!skipFlagSoundtrack)
	{
		optionInfoArray[OPTION_SOUND_TRACK] = pvr.getVideoSoundTrackIndex();
	}
	
}

function fillOptionFirstList()
{
	$('optionPicturePreset').getElementsByClassName('optionContentClass')[0].innerText
		= picturePresetArray[optionInfoArray[OPTION_PIC_PRESET]];

	$('optionBackLight').getElementsByClassName('optionContentClass')[0].innerText
		= optionInfoArray[OPTION_BACK_LIGHT];
	refreshBarArea($('optionBackLightBar').getElementsByTagName('div'), 
		optionInfoArray[OPTION_BACK_LIGHT], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);

	$('optionBrightness').getElementsByClassName('optionContentClass')[0].innerText
		= optionInfoArray[OPTION_BRIGHTNESS];
	refreshBarArea($('optionBrightnessBar').getElementsByTagName('div'), 
		optionInfoArray[OPTION_BRIGHTNESS], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);

	$('optionContrast').getElementsByClassName('optionContentClass')[0].innerText
		= optionInfoArray[OPTION_CONTRAST];
	refreshBarArea($('optionContrastBar').getElementsByTagName('div'), 
		optionInfoArray[OPTION_CONTRAST], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);

	$('optionSaturation').getElementsByClassName('optionContentClass')[0].innerText
		= optionInfoArray[OPTION_SATURATION];
	refreshBarArea($('optionSaturationBar').getElementsByTagName('div'), 
		optionInfoArray[OPTION_SATURATION], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);

	$('optionTint').getElementsByClassName('optionContentClass')[0].innerText
		= optionInfoArray[OPTION_TINT];
	refreshBarArea($('optionTintBar').getElementsByTagName('div'), 
		optionInfoArray[OPTION_TINT], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);

	$('optionSharpness').getElementsByClassName('optionContentClass')[0].innerText
		= optionInfoArray[OPTION_SHARPNESS];
	refreshBarArea($('optionSharpnessBar').getElementsByTagName('div'), 
		optionInfoArray[OPTION_SHARPNESS], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);

	$('optionSoundPreset').getElementsByClassName('optionContentClass')[0].innerText
		= soundPresetArray[optionInfoArray[OPTION_SOUND_PRESET]];

	$('optionScreenMode').getElementsByClassName('optionContentClass')[0].innerText
		= screenModeArray[optionInfoArray[OPTION_SCREEN_MODE]];

	if(!skipFlag3D)
	{
		$('option3DMode').getElementsByClassName('optionContentClass')[0].innerText
			= Mode3DArray[optionInfoArray[OPTION_3D_MODE]];
	}

	if(!skipFlagSubtitle)
	{
		if(optionInfoArray[OPTION_SUBTITLE] == 0)
		{
			$('optionSubtitle').getElementsByClassName('optionContentClass')[0].innerText
			 = offinfo;
		}
		else
		{
			$('optionSubtitle').getElementsByClassName('optionContentClass')[0].innerText
			=subtitleLanShow[optionInfoArray[OPTION_SUBTITLE] - 1];
			//= subtitleInfoList[optionInfoArray[OPTION_SUBTITLE] - 1 ].name;
		}
	}

	if(!skipFlagSoundtrack)
	{
		$('optionSoundTrack').getElementsByClassName('optionContentClass')[0].innerText
			//= top.all_language[soundTrackInfoList[optionInfoArray[OPTION_SOUND_TRACK]].elanguage];
			= soundTrackLanShow[optionInfoArray[OPTION_SOUND_TRACK]];
	}

}

function refreshBarArea(tmpBar, value, maxValue, length)
{
	tmpBar[1].style.width = value * length / maxValue + "px";
	tmpBar[2].style.left = value * length / maxValue + "px";
}

function fillFileInformation(file)
{
	var tmp = (file.name != null && file.name != "") ? file.name : naInfo;
	informationSpan[0].innerText = fileNameText + ": " + tmp;
	var tmp1 = (file.year != null && file.year != "") ? file.year : naInfo;
	var tmp2 = (file.month != null && file.month != "") ? file.month : naInfo;
	var tmp3 = (file.day != null && file.day != "") ? file.day : naInfo;
	if(tmp2 < 10) tmp2 = "0" + tmp2;
	if(tmp3 < 10) tmp3 = "0" + tmp3;
	informationSpan[1].innerText = fileDateText + ": " + tmp3 + "/" + tmp2 + "/"+ tmp1;
	informationSpan[2].innerText = fileDurationText + ": " + $('duration').innerText;
	
	
}

function fillOptionList(index)
{
	switch(index)
	{
		case OPTION_PIC_PRESET://picture preset
			for(var i = 0; i < picturePresetArray.length; i++)
			{
				inforListSpan[i].style.display = 'block';
				inforListSpan[i].innerText = picturePresetArray[i];
			}
			for(var i = picturePresetArray.length; i < inforListSpan.length; i++)
			{
				inforListSpan[i].style.display = 'none';
				inforListSpan[i].innerText = "";
			}
			break;
		case OPTION_SOUND_PRESET:
			for(var i = 0; i < soundPresetArray.length; i++)
			{
				inforListSpan[i].style.display = 'block';
				inforListSpan[i].innerText = soundPresetArray[i];
			}
			for(var i = soundPresetArray.length; i < inforListSpan.length; i++)
			{
				inforListSpan[i].style.display = 'none';
				inforListSpan[i].innerText = "";
			}
			break;
		case OPTION_SCREEN_MODE://screen mode
				/**
				if(screenModeStartIndex > OPTION_INFO_COUNT - OPTION_INFO_MAX)
				{
					screenModeStartIndex = OPTION_INFO_COUNT - OPTION_INFO_MAX;
				} 
				**/
				/**
				for(var i = 0; i < OPTION_INFO_MAX; i++)
				{
					inforListSpan[i].style.display = 'block';
					inforListSpan[i].innerText = screenModeArray[i + screenModeStartIndex];
					$('optionDownArrow_1').style.display = 'block';
				}
				**/
				
			break;
		case OPTION_3D_MODE://3d mode
			for(var i = 0; i < Mode3DArray.length; i++)
			{
				inforListSpan[i].style.display = 'block';
				inforListSpan[i].innerText = Mode3DArray[i];
			}

			for(var i = Mode3DArray.length; i < inforListSpan.length; i++)
			{
				inforListSpan[i].style.display = 'none';
				inforListSpan[i].innerText = "";
			}
			break;
		case OPTION_SUBTITLE:	//subtitle
			if (OPTION_INFO_COUNT > OPTION_INFO_MAX) 
			{
				if(subtitleStartIndex > OPTION_INFO_COUNT - OPTION_INFO_MAX)
				{
					subtitleStartIndex = OPTION_INFO_COUNT - OPTION_INFO_MAX;
				} 
				for(var i = 0; i < OPTION_INFO_MAX; i++)
				{
					if (i + subtitleStartIndex == 0) 
					{
						inforListSpan[i].innerText = offinfo;
					}
					else
					{
						//inforListSpan[i].innerText = subtitleInfoList[i + subtitleStartIndex - 1].name;
						inforListSpan[i].innerText =subtitleLanShow[i + subtitleStartIndex - 1];
					}
					inforListSpan[i].style.display = 'block';
				}
				
			}
			else
			{
				var tempvalue = subtitleCount + 1;
				top.Log("tempvalue:"+tempvalue+" subtitleStartIndex:"+subtitleStartIndex);
				for(var i = 0; i < tempvalue ; i++)
				{
					if ( i == 0) 
					{
						inforListSpan[i].style.display = 'block';
						inforListSpan[i].innerText = offinfo;
					}
					else
					{
						inforListSpan[i].style.display = 'block';
						//inforListSpan[i].innerText = subtitleInfoList[i + subtitleStartIndex - 1].name;
						inforListSpan[i].innerText = subtitleLanShow[i + subtitleStartIndex - 1];
					}
				}
				
				for(var i = tempvalue; i < inforListSpan.length; i++)
				{
					inforListSpan[i].style.display = 'none';
					inforListSpan[i].innerText = "";
				}
			}

			break;
		case OPTION_SOUND_TRACK:	//sound track
			//fillOptionDetail(soundTrackStartIndex, soundTrackText, 1);
			if (OPTION_INFO_COUNT > OPTION_INFO_MAX) 
			{
				if(soundTrackStartIndex > OPTION_INFO_COUNT - OPTION_INFO_MAX)
				{
					soundTrackStartIndex = OPTION_INFO_COUNT - OPTION_INFO_MAX;
				} 
				for(var i = 0; i < OPTION_INFO_MAX; i++)
				{
					inforListSpan[i].innerText =  soundTrackLanShow[i + soundTrackStartIndex];
					//top.all_language[soundTrackInfoList[i + soundTrackStartIndex].elanguage];
					inforListSpan[i].style.display = 'block';
				}
			}
			else
			{
				for(var i = 0; i < OPTION_INFO_COUNT; i++)
				{
					inforListSpan[i].style.display = 'block';
					inforListSpan[i].innerText =   soundTrackLanShow[i];
					//top.all_language[soundTrackInfoList[i].elanguage];
				}
				
				for(var i = soundTrackInfoList.length; i < inforListSpan.length; i++)
				{
					inforListSpan[i].style.display = 'none';
					inforListSpan[i].innerText = "";
				}
			}
			
			break;
		case OPTION_INFORMATION://info
			break;
	}
}



function fillOptionDetail(index, name, offset)
{
	//top.Log("fillOptionDetail(), OPTION_INFO_COUNT = "+OPTION_INFO_COUNT);
	//top.Log("fillOptionDetail(), infoListLength = "+inforListSpan.length);
	if(OPTION_INFO_COUNT <= OPTION_INFO_MAX)
	{
		for(var i = 0; i < OPTION_INFO_COUNT; i++)
		{
			inforListSpan[i].style.display = 'block';
			inforListSpan[i].innerText = name + " " + (i + offset);
		}
		for(var i = OPTION_INFO_COUNT; i < inforListSpan.length; i++)
		{
			inforListSpan[i].style.display = 'none';
			inforListSpan[i].innerText = "";
		}
		if(optionIndex == OPTION_SUBTITLE)	//subtitle
		{
			inforListSpan[0].innerText = offinfo;
		}
	}
	else//more than 10
	{
		if(index > OPTION_INFO_COUNT - OPTION_INFO_MAX)
		{
			optionListIndex = index - OPTION_INFO_COUNT + OPTION_INFO_MAX;
			if(optionIndex == OPTION_SUBTITLE)//subtitle
			{
				subtitleStartIndex = OPTION_INFO_COUNT - OPTION_INFO_MAX;
				index = subtitleStartIndex;
				for(var i = 0; i < OPTION_INFO_MAX; i++)
				{
					inforListSpan[i].style.display = 'block';
					//inforListSpan[i].innerText = subtitleInfoList[index + i].name;
					inforListSpan[i].innerText = subtitleLanShow[index + i];
				}
				return;
			}
			else if(optionIndex == OPTION_SOUND_TRACK)//soundtrack
			{
				soundTrackStartIndex = OPTION_INFO_COUNT - OPTION_INFO_MAX;
				index = soundTrackStartIndex;
			}
			for(var i = 0; i < OPTION_INFO_MAX; i++)
			{
				inforListSpan[i].style.display = 'block';
				inforListSpan[i].innerText = name + " " + (index + i + offset);
			}
		}
		else
		{
			optionListIndex = 0;
			if(optionIndex == OPTION_SUBTITLE)
			{
				for(var i = 0; i < OPTION_INFO_MAX; i++)
				{
					inforListSpan[i].style.display = 'block';
					//inforListSpan[i].innerText = subtitleInfoList[index + i].name;
					inforListSpan[i].innerText =subtitleLanShow[index + i];
				}
				if(index == 0)
				{
					inforListSpan[0].innerText = offinfo;
				}
				return;
			}
			for(var i = 0; i < OPTION_INFO_MAX; i++)
			{
				inforListSpan[i].style.display = 'block';
				inforListSpan[i].innerText = name + " " + (index + i + offset);
			}
		}
	}
}

function resetFocusShape()
{
	switch(focusTab)
	{
		case DISPLAY_AREA:
			break;
			
		case OPTION_AREA:
			$('focus').style.display = "none";
			$('optionInfoFocus').style.display = "block";
			FOCUS_DISTANCE = 80;
			FOCUS_TOP_DISTANCE = 0;
			OPTION_INFO_MAX	= 5;
			$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + "px";
			$('optionInfoFocus').style.left = 0 + "px";
			$('optionInfoFocus').style.width = 540 + "px";
			$('optionInfoFocus').style.height = FOCUS_DISTANCE + "px";
			$('optionInfoFocus').src = "images/Focus_USB_1.png";
			$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + optionIndex * FOCUS_DISTANCE + "px";
			$('optionFirstUl').style.top = - optionFirstStartIndex * optionHeightDistance + "px";
			break;
			
		case OPTION_DETAIL_AREA:
			$('optionFocus_2').style.display = (optionIndex == OPTION_INFORMATION) ? 'none' : 'block';
			FOCUS_DISTANCE = 80;
			FOCUS_TOP_DISTANCE = 0;
			$('optionInfoFocus').src = "images/Focus_USB_1_.png";
			if (optionListIndex > (OPTION_INFO_MAX - 1 ) )
			{

				$('optionFocus_2').style.top = FOCUS_TOP_DISTANCE + (OPTION_INFO_MAX - 1)*FOCUS_DISTANCE + "px";
			}
			else
			{
				$('optionFocus_2').style.top = FOCUS_TOP_DISTANCE + optionListIndex*FOCUS_DISTANCE + "px";
				top.Log("resetFocusShape optionListIndex:"+optionListIndex);
			}
			$('optionFocus_2').style.left = 0 - 10 + "px";
			$('optionFocus_2').style.width = 300 + "px";
			$('optionFocus_2').style.height = FOCUS_DISTANCE + "px";
			break;
			
		case PLAY_LIST_AREA:
			$('focus').style.display = "block";
			FOCUS_DISTANCE = 80;
			FOCUS_LEFT_DISTANCE = 75;
			$('focus').style.top = playlistFocusTopDistance + (FOCUS_DISTANCE * playListFocusIndex) + "px";
			$('focus').style.left = 1240 + "px";
			$('focus').style.width = 660 + "px";
			$('focus').style.height = 94 + "px";
			$('focus').style.backgroundImage = "url(images/USB-Music_Playlist_Focus.png)";
			$("name"+playListFocusIndex).style.color = "#ffffff";
			break;
			
		case PROGRESS_AREA:
			break;

		case PRESET_AREA:
			$('focus').style.position = 'absolute';
			$('focus').style.display = "block";
			FOCUS_DISTANCE = 200;
			FOCUS_LEFT_DISTANCE = 470;
			$('focus').style.top = 935 + "px";
			$('focus').style.left = FOCUS_LEFT_DISTANCE + (optionListIndex * FOCUS_DISTANCE)+ "px";
			$('focus').style.width = 219 + "px";
			$('focus').style.height = 69 + "px";
			$('focus').style.backgroundImage = "url(images/Focus2.png)";
			break;
		case QUICK_MENU_AREA:
			$('focus').style.display = "none";
			$('quickFocus').style.display = "block";
			FOCUS_DISTANCE = 80;
			$('quickFocus').style.top = 160 + (quickMenuIndex * FOCUS_DISTANCE) + "px";
			break;	
		default:
			$('focus').style.display = "none";
			break;
	}
}

function moveUpRefreshSecList(array, string, count, offset)
{
	if(tmpStartIndex -1 >= 0)
	{
		tmpStartIndex--;
		if(array != "")
		{
			for(var i = 0; i < OPTION_INFO_MAX; i++)
			{
				if (optionIndex == OPTION_SUBTITLE) 
				{
					if(i + tmpStartIndex == 0)
					{
						inforListSpan[i].innerText = offinfo;
					}
					else
					{
						//inforListSpan[i].innerText = array[i + tmpStartIndex - 1].name;
						inforListSpan[i].innerText =subtitleLanShow[i + tmpStartIndex - 1];
					}
				}
				else if(optionIndex == OPTION_SOUND_TRACK)
				{
					inforListSpan[i].innerText =  soundTrackLanShow[i+tmpStartIndex];
					//top.all_language[array[i + tmpStartIndex].elanguage];
				}
				else
				{
					inforListSpan[i].innerText = array[i + tmpStartIndex];
				}
				
				top.Log("inforListSpan["+i+"].innerText = array["+i+"+"+tmpStartIndex+"] = "+array[i + tmpStartIndex]);
			}
		}
		else
		{
			for(var i = 0; i < OPTION_INFO_MAX; i++)
			{
				inforListSpan[i].innerText = string + " " + (i + tmpStartIndex + offset);
			}
		}
		optionArrowDisplay(tmpStartIndex, count);
	}
}

function moveDownRefreshSecList(array, string, count, offset)
{

	if (tmpStartIndex + OPTION_INFO_MAX < OPTION_INFO_COUNT) 
	{
		tmpStartIndex++;
		if(array != "")
		{
			if(optionListIndex < count)
			{
				for(var i = 0; i < OPTION_INFO_MAX; i++)
				{
					if (optionIndex == OPTION_SUBTITLE) 
					{
						//inforListSpan[i].innerText = array[i + tmpStartIndex - 1].name;
						inforListSpan[i].innerText =subtitleLanShow[i + tmpStartIndex - 1];
					}
					else if(optionIndex == OPTION_SOUND_TRACK)
					{
						inforListSpan[i].innerText = soundTrackLanShow[i+tmpStartIndex];
						//top.all_language[array[i+tmpStartIndex].elanguage];
						
						//top.Log("---array["+i+"].elanguage = "+array[i+tmpStartIndex].elanguage);
					}
					else
					{
						inforListSpan[i].innerText = array[i + tmpStartIndex];
					}
					
					//top.Log("inforListSpan["+i+"].innerText = array["+i+"+"+tmpStartIndex+"] = "+array[i + tmpStartIndex]);
				}
				optionListIndex ++;
			}
			else
			{
				optionListIndex = 0;
			}
		}
		else
		{
			for(var i = 0; i < OPTION_INFO_MAX; i++)
			{
				inforListSpan[i].innerText = string + " " + (i + tmpStartIndex + offset);
			}
		}
		optionArrowDisplay(tmpStartIndex, count);
	};
	
}

function optionArrowDisplay(startIndex, count)
{
	$("optionUpArrow_1").style.display = (startIndex == 0) ? "none" : "block";
	$("optionDownArrow_1").style.display = (startIndex + OPTION_INFO_MAX < count) ? "block" : "none";
}



function setPlayListMaxLength()
{
	var length = currentPlayList.length;
	if(length > PLAYLIST_MAX_LENGTH)//[10] or [6]
	{
		MAX_LENGTH_ONE_PAGE = PLAYLIST_MAX_LENGTH;
	}
	else
	{
		MAX_LENGTH_ONE_PAGE = length;
	}
}

function setSPOption()
{
	//top.Log("setSPOption(), optionIndex = "+optionIndex);
	//top.Log("setSPOption(), optionListIndex = "+optionListIndex);
	switch(optionIndex)
	{
		case OPTION_PIC_PRESET://picture preset
			focusTab = DISPLAY_AREA;
			for(var i = 0; i < picturePresetCheckImg.length; i++)
			{
				picturePresetCheckImg[i].style.display = 'none';	
			}
			picPresetBack = optionListIndex;	
			pvr.setVideoPicturePreset(pictureModeTransform(optionListIndex,1));	//xiehua: api added!!!
			$('picturePresetContent').innerText = picturePresetArray[optionListIndex];
			setScroll($('picturePresetContent'),1);
			hideMenu(0);
			toOption(0);
			return;
		case OPTION_SOUND_PRESET:
			$('soundpresetContent').innerText = soundPresetArray[optionListIndex];
			setScroll($('soundpresetContent'),1);
            setting.soundPreset = soundModeTransform(optionListIndex, 1);
			soundEffectBack = optionListIndex;
			top.Log("pvr.videoSoundEffect end :"+pvr.videoSoundEffect +" optionListIndex:"+optionListIndex);
			optionInfoArray[optionIndex] = optionListIndex;
			break;
		case OPTION_SCREEN_MODE://screen mode
			/**
			if(OPTION_PANNEL_TYPE == 0)
			{
				$('screenModeContent').innerText = screenModeHDArray[tmpStartIndex + optionListIndex];
				setScroll($('screenModeContent'),1);
			}
			else
			{
				$('screenModeContent').innerText = screenModeSDArray[tmpStartIndex + optionListIndex];
				setScroll($('screenModeContent'),1);
			}
			**/
			if (resolution == 1) 
			{
				pvr.setVideoScreenMode(0, tmpStartIndex + optionListIndex);
			}else
			{
				pvr.setVideoScreenMode(1, tmpStartIndex + optionListIndex);
			}
			$('screenModeContent').innerText = screenModeArray[tmpStartIndex + optionListIndex];

			//top.Log("pvr.setVideoScreenMode end :"+ (tmpStartIndex + optionListIndex)+" getVideoScreenMode:"+pvr.getVideoScreenMode(1));
			optionInfoArray[optionIndex] = tmpStartIndex + optionListIndex;
			hideMenu(0);
			toOption(OPTION_SCREEN_MODE);
			break;
		case OPTION_3D_MODE://3d mode
			pvr.setVideo3DMode(optionListIndex);	//xiehua: api added!!!
			$('3DContent').innerText = Mode3DArray[optionListIndex];
			optionInfoArray[optionIndex] = optionListIndex;
			top.Log("setVideo3DMode:"+optionListIndex+" getVideo3DMode:"+pvr.getVideo3DMode());
			break;
		case OPTION_SUBTITLE://subtitle
			//top.Log("subtitleStartIndex:"+subtitleStartIndex+" tmpStartIndex:"+tmpStartIndex+" optionListIndex:"+optionListIndex);
			pvr.setVideoSubtitleIndex(tmpStartIndex + optionListIndex -1);	//xiehua: api added!!!	
			optionInfoArray[optionIndex] = tmpStartIndex + optionListIndex;		
			if(tmpStartIndex + optionListIndex == 0)
			{
				$('subtitleContent').innerText = offinfo;
			}
			else
			{
				//$('subtitleContent').innerText = subtitleInfoList[tmpStartIndex + optionListIndex - 1].name;
				$('subtitleContent').innerText = subtitleLanShow[tmpStartIndex + optionListIndex - 1];
				setScroll($('subtitleContent'),1);
			}
			
			if(OPTION_INFO_COUNT > 10)
			{
				subtitleStartIndex = optionInfoArray[optionIndex];
			}
			else
			{
				subtitleStartIndex = 0;
			}
			break;
		case OPTION_SOUND_TRACK://sound track
			
			pvr.setVideoSoundTrackIndex(tmpStartIndex + optionListIndex);	//xiehua: api added!!!
			top.Log("setVideosoundTrack:"+tmpStartIndex + optionListIndex+" getVideosoundTrack:"+pvr.getVideoSoundTrackIndex());
			$('soundTrackContent').innerText =  soundTrackLanShow[tmpStartIndex + optionListIndex];
			//top.all_language[soundTrackInfoList[tmpStartIndex + optionListIndex].elanguage];
			setScroll($('soundTrackContent'),1);
				 //(tmpStartIndex + optionListIndex + 1);
			optionInfoArray[optionIndex] = tmpStartIndex + optionListIndex;
			
			if(OPTION_INFO_COUNT > OPTION_INFO_MAX)
			{
				soundTrackStartIndex = (optionInfoArray[optionIndex] > soundTrackCount - OPTION_INFO_MAX)
					? soundTrackCount - OPTION_INFO_MAX : optionInfoArray[optionIndex];
				top.Log("setspoption  soundTrackStartIndex:"+soundTrackStartIndex);
			}
			else
			{
				soundTrackStartIndex = 0;
			}
			break;
		case OPTION_INFORMATION://info
			$('information').style.display = "none";
			break;
	}
	$('optionInfoList').style.display = "none";
	optionInfoArray[0] = optionListIndex;
	$("optionUpArrow_1").style.display = "none";
	$("optionDownArrow_1").style.display = "none";

	focusTab = OPTION_AREA;
	resetFocusShape();
}

function setFastPlay(type)//type[1]ff; type[-1]fb; type[0]ori
{
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
		ff_fb_flag = (ff_fb_flag > 5 || ff_fb_flag < -5) ? 0 : ff_fb_flag;
	}
	else if(type == 0 
		&& (playStatus == S_PAUSE || playStatus == S_STOP_RESUME 
		|| playStatus == S_FF_FB))
	{
		ff_fb_flag = 0;
	}
	clearTimeout(menuTimer);
	menuTimer = 0;
	switch(ff_fb_flag)
	{
		case 0:
			$('statusIcon').style.display = 'none';
			$('statusIcon').src = "images/USB-Icon-Play.png";
			playStatus = S_PLAY;
			pvr.mediaFastForward(1);	//xiehua: api added!!!
			break;
		case 1:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FF_2x.png";
			playStatus = S_FF_FB;
			pvr.mediaFastForward(2);	//xiehua: api added!!!
			break;
		case 2:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FF_4x.png";
			playStatus = S_FF_FB;
			pvr.mediaFastForward(4);	//xiehua: api added!!!
			break;
		case 3:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FF_8x.png";
			playStatus = S_FF_FB;
			pvr.mediaFastForward(8);	//xiehua: api added!!!
			break;
		case 4:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FF_16x.png";
			playStatus = S_FF_FB;
			pvr.mediaFastForward(16);	//xiehua: api added!!!
			break;
		case 5:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FF_32x.png";
			playStatus = S_FF_FB;
			pvr.mediaFastForward(32);	//xiehua: api added!!!
			break;
		case -1:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FB_2x.png";
			playStatus = S_FF_FB;
			pvr.mediaFastBackward(2);	//xiehua: api added!!!
			break;
		case -2:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FB_4x.png";
			playStatus = S_FF_FB;
			pvr.mediaFastBackward(4);	//xiehua: api added!!!
			break;
		case -3:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FB_8x.png";
			playStatus = S_FF_FB;
			pvr.mediaFastBackward(8);	//xiehua: api added!!!
			break;
		case -4:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FB_16x.png";
			playStatus = S_FF_FB;
			pvr.mediaFastBackward(16);	//xiehua: api added!!!
			break;
		case -5:
			$('statusIcon').style.display = 'block';
			$('statusIcon').src = "images/USB-Icon-FB_32x.png";
			playStatus = S_FF_FB;
			pvr.mediaFastBackward(32);	//xiehua: api added!!!
			break;
	}
}

function getMediaFileDuration(path)
{
	fileDuration = pvr.getMediaFileDuration(path);	//xiehua: api added!!!
	if(fileDuration < 0)
	{
		fileDuration = 0;
	}
	return doTime(fileDuration);
}

function hideMenu(time)
{
	clearTimeout(menuTimer);
	if(time != 0)
	{
		menuTimer = setTimeout("hideMenuDetail();", time);
	}
	else
	{
		hideMenuDetail();
	}
	/**
	menuTimer = setTimeout(function(){
		clearInterval(progressBarTimer);
		seekCount = 0;
		focusTab = DISPLAY_AREA;

		if(progressBarPercent <= 14)
		{
			$("endBar").src = "images/USB-Video-Progress-bar-Slider-01_.png";
		}
		else
		{
			$("endBar").src = "images/USB-Video-Progress-bar-Slider-01.png";
		}
		
	}	
	**/
		
}

function hideMenuDetail()
{
	clearInterval(progressBarTimer);
	seekCount = 0;
	
	top.Log("focusTab:"+focusTab);
	if(focusTab == PRESET_AREA)
	{
		for(var i = 0; i < picturePresetCheckImg.length; i++)
		{
			picturePresetCheckImg[i].style.display = 'none';
		}
		setting.previewPictureMode(pictureModeTransform(optionListIndex,1));	
		top.Log("picPresetBack:"+picPresetBack);
	}
	else if (focusTab == OPTION_DETAIL_AREA && optionIndex == OPTION_SOUND_PRESET) 
	{
		setting.previewSoundEffect(soundModeTransform(optionListIndex,1));
	}
	else if(focusTab != TIPS_AREA)
	{
		focusTab = DISPLAY_AREA;
	}
	if(progressBarPercent <= 14)
	{
		$("endBar").src = "images/USB-Video-Progress-bar-Slider-01_.png";
	}
	else
	{
		$("endBar").src = "images/USB-Video-Progress-bar-Slider-01.png";
	}
	$('focus').style.display = 'none'; 
	$('option').style.display = 'none';
	$('topTitle').style.display = 'none';
	$('playList').style.display = 'none';
	$('seekInfo').style.display = 'none';
	$('progressArea').style.display = 'none';
	$('optionBarArea').style.display = 'none';
	$('optionInfoList').style.display = 'none';
	$('optionInfoFocus').style.display = 'none';
	$('picturePresetBar').style.display = 'none';
	$('quickMenu').style.left = -550 + "px";
	$('pictureZoomSetBar').style.display = 'none';
	setTimeout(function(){$('quickMenu').style.display = "none";},playListAnimateTime);
}

function refreshCPFlag()
{
	if(playListIndex >= playListStart 
		&& playListIndex < playListStart + MAX_LENGTH_ONE_PAGE)
	{
		$('currentPlay').style.display = 'block';
		$('currentPlay').style.top = playlistFocusTopDistance + 5 + 80 * (playListIndex - playListStart) + "px";
	}
	else
	{
		$('currentPlay').style.display = 'none';
	}
}

function refreshPlayList()
{
	var listLi = $('playList').getElementsByTagName('li');
	for(var i = 0; i < MAX_LENGTH_ONE_PAGE; i++)
	{
		if(i > MAX_LENGTH_ONE_PAGE - 1)
		{
			listLi[i].style.display = "none";
			continue;
		}
		$("name" + i).style.display = "block";
		$("name" + i).innerText = currentPlayList[playListStart + i].name;
		
		$("name" + i).setAttribute("contentText", $("name" + i).innerHTML);
		//top.Log(" name is "+$("name" + i).getAttribute("contentText"));
	}
}

function setScroll(spanTag, lastnum)
{
	if (lastnum == 1) 
	{
		if(isOverflowed(spanTag))
		{
			resetScrollHtmlInner(spanTag, "-webkit-marquee", "clip");
		}
		else
		{
			resetScrollHtmlInner(spanTag, "hidden", "ellipsis");
		}
	}
	else if (lastnum == 0) 
	{
		resetScrollHtmlInner(spanTag, "hidden", "ellipsis");
	}
}

function isOverflowed(element)
{
    return element.scrollWidth > element.clientWidth;
}
//添加焦点选中过长字符滚动
function resetScrollHtmlInner(htmlTagList, displayStyle, overFlowStyle)
{
	htmlTagList.setAttribute("contentText", htmlTagList.innerHTML);
	htmlTagList.style.overflowX = displayStyle;
	htmlTagList.style.textOverflow = overFlowStyle;
	setTimeout(function(){htmlTagList.innerHTML = htmlTagList.getAttribute("contentText");}, 1);
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
		$('progressBarUse').style.display = "block";
		elapsed = pvr.getNowPlayTime();	//xiehua: api added!!!
		if(elapsed > 0)
		{
			if(elapsed > fileDuration)
			{
				elapsed = fileDuration;
			}
			
			progressBarPercent = parseInt(elapsed * 100 / fileDuration, 10);
			if(focusTab != PROGRESS_AREA)
			{
				if(progressBarPercent <= 14)
				{
					$("endBar").src = "images/USB-Video-Progress-bar-Slider-01_.png";
				}
				else
				{
					$("endBar").src = "images/USB-Video-Progress-bar-Slider-01.png";
				}
				$("endBar").style.left = progressBarPercent * BAR_LENGTH / 100 - 15 + "px";
			}
			$("startBar").style.width = progressBarPercent * BAR_LENGTH / 100 + "px";
			$('progressBarUse').style.display = "block";
		}
		else
		{
			elapsed = 0;
			//$('progressBarUse').style.display = "none";
		}
		
		$("elspased").innerText = doTime(elapsed);
	}
	else
	{
		fileDuration = 0;
		$('progressBarUse').style.display = "none";
	}
	
}

function seekTime(tmp)
{
	if((tmp == 1 && seekPoint == fileDuration)
		|| (tmp == -1 && seekPoint == 0))
	{
		return;
	}
		
	seekCount += tmp;
	
	seekPoint = seekStartTime + (SEEK_TIME * seekCount);

	if(seekPoint < 0)
	{
		seekCount = 0
		seekPoint = 0;
		seekStartTime = 0;
	}
	if(seekPoint > fileDuration)
	{
		seekCount = 0;
		seekPoint = fileDuration;
		seekStartTime = fileDuration;
	}
	var progressBarPercent = parseInt(seekPoint * 100 / fileDuration, 10);
	
	var tmpSeekTime = doTime(seekPoint);
	$('screenShotTime').innerText = doTime(seekPoint);
	$('seekInfo').style.left = 60 + progressBarPercent * BAR_LENGTH / 100 + "px";
	$("endBar").style.left = progressBarPercent * BAR_LENGTH / 100 - 15 + "px";
}

function skipOptionCheck(type)
{
	optionIndex = parseInt((optionIndex + OPTION_MAX_COUNT + type) % OPTION_MAX_COUNT, 10);
	if((optionIndex == OPTION_SUBTITLE && skipFlagSubtitle)	|| (optionIndex == OPTION_SOUND_TRACK && skipFlagSoundtrack))
	{
		skipOptionCheck(type);
	}
	return;
}

function doTime(time)
{
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

function mediaPlay(path)
{
	//current play success
	//$("loading").style.display = "none";
	$("unavailable").style.display = "none";
	return pvr.mediaPlay(path);	//xiehua: api added!!!
}

function playPre()
{
	pvr.playPreMediaFile();	//xiehua: api added!!!
}


function playNext()
{
	pvr.playNextMediaFile();	//xiehua: api added!!!
}


function setListInfoTop(index, num)
{
	var tmpTop = optionSecondListTopDistance + optionIndex * 80 - optionFirstStartIndex * 80;
	var tmpTopLimit = 1080 - num * 80 - 45;
	switch(index)
	{
		case OPTION_PIC_PRESET://picture preset
			break;
		case OPTION_SOUND_PRESET:
		case OPTION_SCREEN_MODE://screen mode
		case OPTION_3D_MODE://3d mode
		case OPTION_SUBTITLE://subtitle
		case OPTION_SOUND_TRACK://sound track
		/**
			$('optionInfoList').style.top = index*FOCUS_DISTANCE+"px";
			if (OPTION_INFO_COUNT > 5) {
				$("optionInfoList").style.height = 5*FOCUS_DISTANCE + 10 +"px";
			}else
			{
				$("optionInfoList").style.height = OPTION_INFO_COUNT*FOCUS_DISTANCE + 10 +"px";
			}
		**/
			$('optionInfoList').style.top = (tmpTop > tmpTopLimit)
				? tmpTopLimit + "px" : tmpTop + "px";
			$('optionInfoList').style.height = 5 + 80 * num + "px";
			$('optionInfoList').style.width = 300 + "px";
			break;
		case OPTION_INFORMATION://info
			break;
		default:
		break;
	}
	
}

//support mouse
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		//if(evt.button == 2 && !exitFlag && operatableFlag) doExit();	//mouse right key
		if(evt.button == 2) doExit();	//mouse right key
	}

	$('progressArea').onmousedown = function(evt){
		if(evt.button == 0)	//mouse left key
			clickProgressAreaFunction();
	}

	$('progressBarUse').onmousedown = function(evt){
		if(evt.button == 0)	//mouse left key
			clickProgressSeekFunction(evt);
	}

	for(var i = 0; i < clickPlayListLi.length; i++)
	{
		clickPlayListLi[i].onmousedown = function(evt){
			if(evt.button == 0)//left key
				clickPlayListFunction(i);
		}
	}

	$('arrowUpPlayList').onmousedown = function(evt){
		if(evt.button == 0)	//mouse left key
			clickPlayListUpArrow();
	}

	$('arrowDownPlayList').onmousedown = function(evt){
		if(evt.button == 0)	//mouse left key
			clickPlayListDownArrow();
	}

	//option level 1st
	for(var i = 0; i < clickOptionMenuLi_1.length; i++)//option level 1st
	{
		clickOptionMenuLi_1[i].setAttribute(clickIndexAttri, i);
		clickOptionMenuLi_1[i].onmousedown = function(evt){
			if(evt.button == 0)	//mouse left key
				clickFirstOptionMenuFunction(parseInt(this.getAttribute(clickIndexAttri)));
		}
	}

	//option level 2nd
	for(var i = 0; i < clickOptionMenuLi_2.length; i++)
	{
		clickOptionMenuLi_2[i].setAttribute(clickIndexAttri, i);
		clickOptionMenuLi_2[i].onmousedown = function(evt){
			if(evt.button == 0)	//mouse left key
				clickSecondOptionMenuFunction(parseInt(this.getAttribute(clickIndexAttri)));
		}
	}

	//click picture preset
	for(var i = 1; i < clickPicturePresetSpan.length; i++)
	{
		clickPicturePresetSpan[i].setAttribute(clickIndexAttri, i - 1);
		clickPicturePresetSpan[i].onmousedown = function(evt){
			if(evt.button == 0)//left key
				clickPicturePresetFunction(parseInt(this.getAttribute(clickIndexAttri)));
		}
	}
}

function clickPicturePresetFunction(index)
{
	if(focusTab != PRESET_AREA)
		return;
	optionListIndex = index;
	$('focus').style.left = FOCUS_LEFT_DISTANCE + FOCUS_DISTANCE * optionListIndex + "px";
	setTimeout(function(){toOK();}, DELAY_TIME);
	return;
}

function clickProgressAreaFunction()
{
	if(focusTab != DISPLAY_AREA)
		return;
	//hideInfoBox(0);
	//hideMetaInfoBox(0);
	if(seekableFlag)
	{
		focusTab = PROGRESS_AREA;
		$('seekInfo').style.display = "block";
		$('topTitle').style.display = "block";
		$('progressArea').style.display = "block";
		$('playList').style.left = screenWidth + "px";
		setTimeout(function(){$('playList').style.display = "none";},playListAnimateTime);
		$("endBar").src = "images/USB-Video-Progress-bar-Slider-02_.png";
		refreshProgressBar();
		seekStartTime = elapsed;
		clearInterval(progressBarTimer);
		progressBarTimer = setInterval("refreshProgressBar()", 900);
		refreshSeekingTime(0);
	}
	else
	{
		//clearTimeout(tipsTimer);
		hideMenu(0);
		//$('tipsBox').style.display = "none";
		//setTipsBox(2);
		//$('tipsInfoContent').innerText = cantSeekArray[2];
		//$('tipsInfo').style.display = "block";
		//tipsTimer = setTimeout(function(){$('tipsInfo').style.display = "none";}, FADE_TIME_5);
	}
}

function refreshSeekingTime(tmp)
{
	if((tmp == 1 && seekPoint == fileDuration)
		|| (tmp == -1 && seekPoint == 0))
	{
		return;
	}
		
	seekCount += tmp;
	
	seekPoint = seekStartTime + (SEEK_TIME * seekCount);

	if(seekPoint < 0)
	{
		seekCount = 0
		seekPoint = 0;
		seekStartTime = 0;
	}
	if(seekPoint > fileDuration)
	{
		seekCount = 0;
		seekPoint = fileDuration;
		seekStartTime = fileDuration;
	}
	var progressBarPercent = parseInt(seekPoint * 100 / fileDuration, 10);
	
	var tmpSeekTime = doTime(seekPoint);
	$('screenShotTime').innerText = doTime(seekPoint);
	$('seekInfo').style.left = 60 + progressBarPercent * BAR_LENGTH / 100 + "px";
	$("endBar").style.left = progressBarPercent * BAR_LENGTH / 100 - 15 + "px";
}

function setTipsBox(type)
{
	if(type == 1)
	{
		$('tipsInfo').style.width = TIPS_WIDTH_1 + "px";
		$('tipsInfo').style.marginLeft = (0 - TIPS_WIDTH_1 / 2) + "px";
		$('tipsInfoImg').src = "images/bg-ME-9-13.png";
	}
	else if(type == 2)
	{
		$('tipsInfo').style.width = TIPS_WIDTH_2 + "px";
		$('tipsInfo').style.marginLeft = (0 - TIPS_WIDTH_2 / 2) + "px";
		$('tipsInfoImg').src = "images/bg-ME-7-7_1.png";
	}
}

function clickProgressSeekFunction(evt)
{
	if(focusTab != PROGRESS_AREA)
		return;
	var clickDistance = evt.clientX - PROGRESS_START_LEFT_OFFSET;
	var tmp = clickDistance / BAR_LENGTH;
	var tmpSeekTime = parseInt(tmp * fileDuration, 10);
	$("endBar").style.left = clickDistance - 15 + "px";
	$("startBar").style.width = clickDistance + "px";
	$('seekTime').innerText = doTime(tmpSeekTime);
	$('seekTime').style.left = 80 + clickDistance + "px";
	clearTimeout(seekSettingTimer);
	seekSettingTimer = setTimeout(function(){pvr.setSeekPoint(tmpSeekTime * 1000);}, 100);
}

function clickPlayListFunction(index)
{
	if(focusTab != PLAY_LIST_AREA)
		return;
	var playIndex = playListStart + index;
	pvr.mediaStop(0);
	clearInterval(progressBarTimer);
	mediaPlay(currentPlayList[playIndex].path);
	setPlayListFocus(playIndex, playListFocusIndex);
	playListFocusIndex = playIndex;
	$('focus').style.top = cpTopDistance + FOCUS_DISTANCE * playIndex + "px";
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
}

function clickFirstOptionMenuFunction(index)
{
	
	if(focusTab != OPTION_AREA)
		return;
	optionIndex = index;
	$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_DISTANCE * optionIndex + "px";
	switch(index)
	{
		case OPTION_PIC_PRESET:
		case OPTION_SOUND_PRESET:
		case OPTION_SCREEN_MODE:
		case OPTION_3D_MODE:
		case OPTION_INFORMATION:
			toRight();
			break;
		case OPTION_SUBTITLE:
			if(skipFlagSubtitle) return;
			toRight();
			break;
		case OPTION_SOUND_TRACK:
			if(skipFlagSoundtrack) return;
			toRight();
			break;
		default:
			break;
	}
	hideMenu(15000);
}

function clickSecondOptionMenuFunction(index)
{
	if(focusTab != OPTION_DETAIL_AREA)
		return;
	optionListIndex = index;
	top.Log("clickSecondOptionMenuFunction(), optionListIndex = "+optionListIndex);
	setSPOption();
}

function clearAllTimer()
{
	exitFlag = 1;
	//clearTimeout(tipsTimer);
	clearTimeout(menuTimer);
	clearTimeout(seekSettingTimer);
	clearInterval(progressBarTimer);
}
function toSubtitle()
{
	//operatableFlag = true;
	/**
	focusTab = TIPS_AREA;
	errorFlag = ERROR_VIDEO_ERROR;
	$('eb_info').innerText = eb_info[1];
	$('tipsBox').style.display = "block";
	**/
    /****/
	if($('quickMenu').style.display == "none")
	{
		$('focus').style.display = "none"; 
		$('option').style.display = "none";
		$('topTitle').style.display = "none";
		$('playList').style.display = "none";
		$('seekInfo').style.display = "none";
		$('progressArea').style.display = "none";
		$('picturePresetBar').style.display = "none";
		quickMenuType = QUICK_MENU_SUBTITLE;
		focusTab = QUICK_MENU_AREA;
		$('quickMenuTitle').innerText = subMenuTitleText;
		if (!skipFlagSubtitle) 
		{
			$("quickEmptyTipsBox").style.display = "none";
			$("quickContainInfo").style.display = "block";
			quickCount = subtitleCount + 1;
			quickInfoText = subMenuTitleText;
			//top.Log("in-skipFlagSubtitle-getVideoSubtitleIndex ="+pvr.getVideoSubtitleIndex());
			quickIndex = pvr.getVideoSubtitleIndex()+1;
			$('quickMenu').style.display = "block";
			fillQuickMenuInfo();
			clearTimeout(operationTimer);
			operationTimer = setTimeout(function(){
				$('quickMenu').style.left = 0 + "px";
				resetFocusShape();
			}, playListAnimateTime);
			hideMenu(FADE_TIME_15);
		}
		else
		{
			$('quickMenu').style.display = "block";
			$('quickMenu').style.left = 0 + "px";
			$("quickEmptyTipsBox").style.display = "block";
			$("quickContainInfo").style.display = "none";
			$('quickFocus').style.display = "none";
			hideMenu(FADE_TIME_15);
		}
	}
	else if($('quickMenu').style.display == "block")
	{

		if(quickMenuType == QUICK_MENU_SUBTITLE)
		{
			hideMenu(0);
		}
		if(quickMenuType != QUICK_MENU_SUBTITLE)
		{
			hideMenu(0);
			clearTimeout(operationTimer);
			operationTimer = setTimeout("toSubtitle();", playListAnimateTime)
		}
	}
	
}

function toLang()
{
	
	if($('quickMenu').style.display == "none")
	{
		$('focus').style.display = "none"; 
		$('option').style.display = "none";
		$('topTitle').style.display = "none";
		$('playList').style.display = "none";
		$('seekInfo').style.display = "none";
		$('progressArea').style.display = "none";
		$('picturePresetBar').style.display = "none";
		quickMenuType = QUICK_MENU_LANG;
		focusTab = QUICK_MENU_AREA;
		$('quickMenuTitle').innerText = langMenuTitleText;
		if(!skipFlagSoundtrack)
		{
			$("quickEmptyTipsBox").style.display = "none";
			$("quickContainInfo").style.display = "block";
			quickCount = soundTrackCount;
			quickInfoText = langInfoText;
			quickIndex = pvr.getVideoSoundTrackIndex();
			fillQuickMenuInfo();
			$('quickMenu').style.display = "block";
			clearTimeout(operationTimer);
			operationTimer = setTimeout(function(){
				$('quickMenu').style.left = 0 + "px";
				resetFocusShape();
			}, playListAnimateTime);
			hideMenu(FADE_TIME_15);
		}
		else
		{
			$('quickMenu').style.display = "block";
			$('quickMenu').style.left = 0 + "px";
			$("quickEmptyTipsBox").style.display = "block";
			$("quickContainInfo").style.display = "none";
			hideMenu(FADE_TIME_15);
		}
	}
	else if($('quickMenu').style.display == "block")
	{
		if(quickMenuType == QUICK_MENU_LANG)
		{
			hideMenu(0);
		}
		if(quickMenuType != QUICK_MENU_LANG)
		{
			hideMenu(0);
			clearTimeout(operationTimer);
			operationTimer = setTimeout("toLang();", playListAnimateTime)
		}
	}
}

function to3D()
{
	if($('quickMenu').style.display == 'none')
	{
		optionInfoArray[OPTION_3D_MODE] = pvr.getVideo3DMode();
		$('focus').style.display = "none"; 
		$('option').style.display = "none";
		$('topTitle').style.display = "none";
		$('playList').style.display = "none";
		$('seekInfo').style.display = "none";
		$('progressArea').style.display = "none";
		$('picturePresetBar').style.display = "none";
		quickMenuType = QUICK_MENU_3D;
		focusTab = QUICK_MENU_AREA;
		$('quickMenuTitle').innerText = mode3DMenuTitleText;
		if(!skipFlag3D)
		{
			$("quickEmptyTipsBox").style.display = "none";
			$("quickContainInfo").style.display = "block";
			quickCount = Mode3DArray.length;
			//quickInfoText = langInfoText;
			quickIndex = pvr.getVideo3DMode();
			fillQuickMenuInfo();
			$('quickMenu').style.display = "block";
			clearTimeout(operationTimer);
			operationTimer = setTimeout(function(){
				$('quickMenu').style.left = 0 + "px";
				resetFocusShape();
			}, playListAnimateTime);
			hideMenu(FADE_TIME_15);
		}
		else
		{
			$('quickMenu').style.display = "block";
			$('quickMenu').style.left = 0 + "px";
			$("quickEmptyTipsBox").style.display = "block";
			$("quickContainInfo").style.display = "none";
			hideMenu(FADE_TIME_15);
		}
	}
	else if($('quickMenu').style.display == 'block')
	{
		if(quickMenuType == QUICK_MENU_3D)
		{
			hideMenu(0);
		}
		if(quickMenuType != QUICK_MENU_3D)
		{
			hideMenu(0);
			clearTimeout(operationTimer);
			operationTimer = setTimeout("to3D();", playListAnimateTime)
		}
	}
}
var channel = top.g_channel;
var currentChannel                    = 0;
currentChannel = channel.getCurrentChannelInfo();
function fillQuickMenuInfo()
{ 
	
	//quickOffSet = !(quickMenuType == QUICK_MENU_SUBTITLE);
	quickOffSet = 1;
	top.Log("quickOffSet:"+quickOffSet);
	if(quickCount <= MAX_QUICK_MENU_COUNT)
	{
		quickMenuIndex = quickIndex;
		quickMenuStartIndex = 0;
	}
	else if(quickIndex < quickCount - MAX_QUICK_MENU_COUNT)
	{
		quickMenuStartIndex = quickIndex;
		quickMenuIndex = 0;
	}
	else if(quickIndex >= quickCount - MAX_QUICK_MENU_COUNT)
	{
		quickMenuStartIndex = quickCount - MAX_QUICK_MENU_COUNT;
		quickMenuIndex = quickIndex - quickMenuStartIndex;
	}
	var audioInfo = currentChannel.programAudioMode();
	var langs = audioInfo.langCodeList.split("/");
	if(quickCount <= MAX_QUICK_MENU_COUNT)
	{
		for(var i = 0; i < quickCount; i++)
		{
			quickMenuListDiv[i].style.display = "block";
			switch(quickMenuType)
			{
				case QUICK_MENU_SUBTITLE:
				if (i == 0) 
				{
					quickMenuListDiv[i].innerText = offinfo;
				}
				else
				{
					//quickMenuListDiv[i].innerText = subtitleInfoList[i - 1].name;
					quickMenuListDiv[i].innerText = subtitleLanShow[i - 1];
				}
				
				break;
				case QUICK_MENU_LANG:
				quickMenuListDiv[i].innerText = soundTrackLanShow[i];
				//top.all_language[soundTrackInfoList[i].elanguage];
				/*
				if( soundTrackInfoList[i].language == '') 
					quickMenuListDiv[i].innerText ="Undefined";
				else
				{
					quickMenuListDiv[i].innerText = top.all_language[parseInt(langs[i],10)+1];
					top.Log("Index = " + parseInt(langs[i],10));
				}*/	
				//top.Log("Language =" +quickMenuListDiv[i].innerText );
				break;
				case QUICK_MENU_3D:
				quickMenuListDiv[i].innerText = Mode3DArray[i];
				break;
			}
		}
		for(var i = quickCount; i < MAX_QUICK_MENU_COUNT; i++)
		{
			quickMenuListDiv[i].style.display = "none";
			quickMenuListDiv[i].innerText = "";
		}
	}
	else
	{
		for(var i = 0; i < MAX_QUICK_MENU_COUNT; i++)
		{
			quickMenuListDiv[i].style.display = "block";
			switch(quickMenuType)
			{
				case QUICK_MENU_SUBTITLE:
				if (i == 0) 
				{
					quickMenuListDiv[i].innerText = offinfo;
				}
				else
				{
					//quickMenuListDiv[i].innerText = subtitleInfoList[i - 1].name;
					quickMenuListDiv[i].innerText =  subtitleLanShow[i - 1];
				}
				break;
				case QUICK_MENU_LANG:
					quickMenuListDiv[i].innerText = soundTrackLanShow[i];
					//top.all_language[soundTrackInfoList[i].elanguage];
				break;
				case QUICK_MENU_3D:
				quickMenuListDiv[i].innerText = Mode3DArray[i];
				break;
			}
		}
		
	}
}

function bookingPreOperate()
{
	top.g_lastEnterType = -1;
	top.g_isMediaCenter = top.NDM_Others;
	top.$("globleShow").contentWindow.hiddenGlassRemind();
	pvr.mediaStop(0);
	pvr.pvrExitUninit();
	//multimedia.toRestoreSource(0, 0);
	top.g_channel.changeToPrevSource();
	return;
}

function toExitBySTR()
{
	if(top.g_temp=="menu"||top.g_temp=="source")
	{
		top.$("operatePage").src = "";
		top.requestFocus(top.main, 1);
		top.setFrameFocusPage("main");
	}

	pvr.mediaStop(1);	 
	hideMenu(0);
	document.location.href = "deviceList.html?poweroff";
	return;
}
function pictureModeTransform(preMode, type)//type[0]: mw to ui; [1]ui to mw
{
	var aftMode = preMode;
	if(type)//ui to mw
	{
		if(5 == preMode)
		{
			aftMode = 4;
		}
		else if(4 == preMode)
		{
			aftMode = 5;
		}
	}
	else
	{
		if(4 == preMode)
		{
			aftMode = 5;
		}
		else if(5 == preMode)
		{
			aftMode = 4;
		}
	}
	return aftMode;
}

//add for new sound option
function soundModeTransform(preMode, type)//type[0]: mw to ui; [1]ui to mw
{
    var aftMode = preMode;
    if(type)//ui to mw
    {
	    if(4 == preMode)
	    {
	        aftMode = 6;
	    }
	    else if(5 == preMode)
	    {
	        aftMode = 4;
	    }
	}
	else//mw to ui
	{
		if(6 == preMode)
	    {
	        aftMode = 4;
	    }
	    else if(4 == preMode)
	    {
	        aftMode = 5;
	    }
	}
    return aftMode;
}

