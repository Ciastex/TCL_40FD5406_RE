/********
var E_MEDIA_PICTURE_PLAY							= 0x80b7;
var E_MEDIA_PICTURE_UP_EDGE                         = 0x80F8;   //33016
var E_MEDIA_PICTURE_DOWN_EDGE                       = 0x80F9;   //33017
var E_MEDIA_PICTURE_LEFT_EDGE                       = 0x80FA;   //33018
var E_MEDIA_PICTURE_RIGHT_EDGE                      = 0x80FB;   //33019

*********/


var playListStart = 0;
var playListIndex = 0;
var optionIndexStart = 0; //option菜单中，用于表示option中显示的第一个菜单在optionList中的位置
var optionIndex = 0;
var optionListIndex = 0;

var playStatus = -1;//playing/pause/error
var bgmPlayStatus = -1;
var fileDuration = 0;//the current time of playing media file
var currentFileInfo = "";
var currentPlayingTime = 0;
var video_audio_error_flag = 0;
var currentPlayList = "";
var musicBGPlay = 1; //[0] not bg play [1] bg playing
var MAX_LENGTH_ONE_PAGE = 0;
var menuImgTag = 0;
var focusOptionHeight = 80;
var menuBar;
var optionMenuImg;
var inforListSpan = 0;
var informationSpan = 0;
var inforSpan = 0;
var zoomNum = 0; //表示点击方法和缩小的次数，点击放大+1  点击缩小-1
//var repeatMode = 0;
var picPlayingTimeOut = false;
var picPPTPlayTimeOut = false;

var OPTION_picture_preset = 0;
var OPTION_play_mode = 0;
var OPTION_duration = 0;
var OPTION_effect = 0;

var OPTION_COUNT 		= 12;
var OPTION_INFO_COUNT	= 0;
var MENU_COUNT 			= 6;//5 or 6
var MENU_PLAY 			= 0;
var MENU_R_ROTATE 		= 1;
var MENU_L_ROTATE 		= 2;
var MENU_ZOOM_IN		= 3;
var MENU_ZOOM_OUT		= 4;
var MENU_BGM			= 5;

var MOVE_RIGHT		= 4;
var MOVE_LEFT		= 3;
var MOVE_DOWN		= 2;
var MOVE_UP			= 1;

var OPTION_PIC_PRESET 		= 0;
var OPTION_PLAY_MODE 		= 1;
var OPTION_DURATION			= 2;
var OPTION_EFFECT			= 3;
var OPTION_INFO		 		= 4;

var FADE_TIME = 5000;

var focusTab = 0;//
var focusTabIndex = 0;
var menuFocusIndex = 0;
var bgmFocusIndex = 1;

var DISPLAY_AREA 			= 0;
var OPTION_AREA 			= 1;
var OPTION_DETAIL_AREA 		= 2;
var PLAY_LIST_AREA 			= 3;
var MENU_AREA 				= 4;
var BGM_AREA 				= 5;
var ZOOM_AREA 				= 6;
var PRESET_AREA				= 7;
var INFO_AREA               = 8;  //add yums
var TIPS_AREA				= 9;
var OPTION_BAR_AREA         = 10;
var LIST_AREA               = 11;//背景音乐中文件索引菜单

var optionInfoArray = new Array(OPTION_COUNT);//[0]picture preset, [1]play mode, [2]duration mode, [3]effect
var optionBarNameArray = new Array(1);
var optionListNameArray = [top.optionVideoListArray_1[0],
						   top.picOptions[1], top.picOptions[2], top.picOptions[3], 
						   top.picOptions[4], top.picOptions[5], top.picOptions[6],  
						   top.optionVideoListArray_1[1], top.optionVideoListArray_1[2],
						   top.optionVideoListArray_1[3], top.optionVideoListArray_1[4], top.optionVideoListArray_1[5], 
						   top.optionVideoListArray_1[6], top.optionVideoListArray_1[7], top.optionVideoListArray_1[8], 
						   top.optionVideoListArray_1[9], top.optionVideoListArray_1[10], top.optionVideoListArray_1[11]];

var PIC_PRESET_INDEX = 0;
var PIC_BACKLIGHT_INDEX = 1;
var PIC_BRIGHTNESS_INDEX = 2;
var PIC_CONTRAST_INDEX = 3;
var PIC_SATURATION_INDEX = 4;
var PIC_TINT_INDEX = 5;
var PIC_SHARPNESS_INDEX = 6;
var PIC_PLAYMODE_INDEX = 7;
var PIC_DURATION_INDEX = 8;
var PIC_EFFECT_INDEX=9;
var PIC_INFO_INDEX = 10;

var SHORT_BAR_MAX_VALUE = 100;
var SHORT_BAR_LENGTH = 100;
var OPTION_BAR_LENGTH = 900;
var optionBarHeight = 60;
var optionFocusIndex_1 = 0;
var optionFocusIndex_2 = 0;
var optionFocusIndex_3 = 0;

var optionListArray = ["picturePresetList", "playModeList", "durationList", "effectList", "information"];
//var picturePresetArray = ["Standard", "Dynamic", "Studio", "Movie", "Personal"];
//var playModeArray = ["Normal", "Shuffle","Repeat"];
//var durationArray = ["Short(5s)", "Medium(10s)", "Long(15s)"];
//var effectArray = ["None", "Dissolve", "Wipe right", "Wipe left", "Wipe up", "Wipe down", "Box in", "Box out", "Random"];

/**********************************************************
**picturePlay.js
**
var consoleTipArray = ["Previous","Next","Console","PlayList"];
var BGMusicNameInfo = "";
var BGMusicArtistInfo = "";

var optionInfoArray = ["Picture preset","Play mode","Duration","Effect","Info"];
var optionInfoArray = ["Picture preset","Backligth","Brightness","Contrast","Saturation","Tint","Sharpness","Play mode","Duration","Effect","Info"];
var picturePresetArray = ["Standard", "Dynamic", "Studio", "Movie", "Personal"];
var playModeArray = ["Normal", "Repeat", "Shuffle"];
var durationArray = ["Short(5s)", "Medium(10s)", "Long(15s)"];
var effectArray = ["None", "Dissolve", "Wipe right", "Wipe left", "Wipe up", "Wipe down", "Box in", "Box out", "Random"];
var infoArray = ["Name:","Size:","Date:","Location:"];

var picturePresetBarTitleInfo = "Picture preset";
var picturePresetBarArray = ["Standard","Dynamic","Studio","Movie","Personal"];

var playListArray = ["","","","","",""];
var bottomTipsArray = ["","","","",""]

var upTipsInfo = "Move Picture"; //add yums 2014-10-10
var consoleTipsArray = ["Console","Previous","Next","Playlist","Settings"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Press RIGHT again to play next picture","Press LEFT again to play previous picture","Press DOWN again to show playlist"]; //add yums 2014-10-10
***********************************************************/


var consoleTipArray = top.consoleTipArray;

var BGMusicNameInfo = top.BGMusicNameInfo;
var BGMusicArtistInfo = top.BGMusicArtistInfo;
var pictureTips=top.picturePlayErrorTips;
var optionInfoArray = ["Picture preset","Backligth","Brightness","Contrast","Saturation","Tint","Sharpness","Play modesdfeadfead","Durationadfefadfe","Effect","Info"];

var optionInfoArrayText = [top.optionInfoArray[0],
						   top.picOptions[1], top.picOptions[2], top.picOptions[3], 
						   top.picOptions[4], top.picOptions[5], top.picOptions[6],  
						   top.optionInfoArray[1], top.optionInfoArray[2],
						   top.optionInfoArray[3], top.optionInfoArray[4]
						   ];


//var picturePresetArray = top.picturePresetArray;
//add for football mode
var picturePresetArray = [top.picPreset[0], top.picPreset[1], top.picPreset[2], 
	       				  top.picPreset[3], top.resetStadium, top.picPreset[4]];
var playModeArray = top.playModeArray;
var durationArray = top.durationArray;
var effectArray = top.effectArray;
var effectArray =[top.effectArray[0],top.effectArray[1],top.effectArray[2],top.effectArray[3],top.effectArray[4],
				top.effectArray[5],top.effectArray[7],top.effectArray[8]];

var infoArray = top.infoArray;
var picturePresetBarTitleInfo = top.picturePresetBarTitleInfo;

var upTipsInfo = top.upTipsInfo;//Move Picture  add yums 2014-10-10
var consoleTipsArray = top.consoleTipsArray; //var consoleTipsArray = ["Console","Previous","Next","Playlist","Settings"];  //add yums 2014-10-10
	
var pictureMoveTipsArray = top.pictureMoveTipsArray; //var pictureMoveTipsArray = ["Press RIGHT again to play next picture","Press LEFT again to play previous picture","Press DOWN again to show playlist"]; //add yums 2014-10-10

var eb_info = top.eb_info;  //getinfo from chencheng's page;
var eb_tips = top.eb_tips;
var eb_yes = top.eb_yes;
var eb_no = top.eb_no;
var ok_button = top.ok_button;
var netConnectFailText = top.netConnRemind[3];
var emptyTipsInfo = top.emptyTipsInfo;
var playTipsInfo = top.playTipsInfo;
var playTipsTimer = 0;

//var picturePresetBarArray = top.picturePresetBarArray;

//var playListArray = top.playListArray;
//var bottomTipsArray = top.bottomTipsArray; //add yums


var FOCUS_DISTANCE = 0;
var FOCUS_LEFT_DISTANCE = 0;
var FOCUS_TOP_DISTANCE = 0;
var PIC_CHECK_BOX_LEFT_DISTANCE = 330;

//var progressBarTimer = 0;
var menuTimer = 0;
var zoomTimer = 0;
var iconFileEmptyTipsTimer = 0;
var consoleTimer = 0;

var multimedia = top.g_media;
var setting			= top.g_setting;

window.onload = init;
window.onunload = unInit;

document.onkeydown = keyProc;
document.onsystemevent = notifyProcess;


var currentListPosition;  //add yums:当前播放图片的位置
var pictureThumb = new Array(); //add yums
var clickFlageOnPlayList = 0; //add yums
var dmrFlag= false;  //add yums:
var dmrExitTimer = 0;
var showLeftArrowFlage = 0;
var showRightArrowFlage = 0;
var initSetTimeOut = 0;
var pptState = 0;//幻灯片播放模式。 0 turn off ； 1 turn on
var pptStateBeforeToOption = 0;
var isStop = 0;
var effectFocus = 0; //add yums effect use
var effectStart = 0;
var pictureFileInfo;

//add yums:鸟瞰图
var pPicX = 0;  //放大后图片的坐标
var pPicY = 0;
var pPicW = 400;
var pPicH = 200;

var pViewedX = 0; //原始图片的坐标
var pViewedY = 0;
var pViewedW = 200;
var pViewedH = 100;

var tPicX = 0;  //鸟瞰图全图坐标
var tPicY = 0;
var tPicW = 0;
var tPicH = 0;

var tViewedX = 0; //鸟瞰图表示可见部分的坐标
var tViewedY = 0;
var tViewedW = 0;
var tViewedH = 0;

var rawX = 0;
var rawY = 0;
var rawW = 0;
var rawH = 0;
						
var viewX = 0;
var viewY = 0;
var viewW = 0;
var viewH = 0;

var thumbNailX = 0;
var thumbNailY = 0;
var thumbNailW = 0;
var thumbNailH = 0;



//mouse use
var clickMenuImg = "";
var clickOptionMenu1 = "";
var clickOptionMenu2 = "";
var clickPicturePresetSpan = "";
var clickPlayListLi = "";
var clickPlayListLeftArrow = ""
var clickPlayListRightArrow = ""
var clickLR_TipsArrow = "";
var bodyMouseDown = 1;
var clickIndexAttri = "indexAttri";
var bottomAreaDiv = "";
var clickOptionBarBlockDiv = "";
var clickGoBackBoxDiv = ""; //背景音乐文件索引中返回箭头
var clickFileColumnUp0Div = ""; //背景音乐文件索引的上箭头
var clickFileColumnDown0Div = "";//背景音乐文件索引的下箭头
var clickFileColumnUl0Li = "";//背景音乐文件索引文件列表
var clickFileColumn0Div = "";//整个文件索引菜单
var clickIconListEmptyTips = "";//文件索引时文件夹为空时弹出的提示框
var clickBGMMusicImg = "";//背景音乐播放菜单上的播控按钮

var bodyMouseFlag = true;//用于背景音乐文件索引时，单击右键时是一级级返回前一个文件夹。

var pictureRegion;
var rawRegion;
var viewRegion;

//consoleTips show num
var firstEnterFlag = true;

//picture move use
var rightMost = false;  //add yums 2014-10-10
var leftMost  = false;
var downMost  = false;
var upMost    = false;
var pictureMoveTipsHasShowFlag = false;


//margue滚动使用
var optionFirstMenuLi = 0;
var picturePresetBarSpan = 0;

var currentDeviceType = -1;
var currentMediaType = 3;//top.g_currentMediaType;//[0]all file [1]picture [2]video [3]music

//图片播放的error消息.
var errorFlag;
var ERROR_NONE = 0;
var ERROR_CANT_OPEN = 1;
var ERROR_PIC_NOT_AVAILABLE = 2;
var ERROR_FILE_NOT_EXIST = 3;
var ERROR_VIDEO_ERROR = 4;
var ERROR_VIDEO_CANT_RECONGNIZE = 5;
var ERROR_VIDEO_NOT_SUPPORT = 6;
var ERROR_OTHER = 7;
var ERROR_NET_DISCONNECTED = 11;
var ERROR_AUDIO = 12; //背景音乐播放使用变量

var operatableFlag	= true;


var tipsBoxMiddleDistance = 313;

//背景音乐所使用的变量
//var currentMediaType = 3;
var currentList = "";//文件索引中，记录搜索到的文件列表
var fileListDepth = 0;
var listStart = 0;  //背景音乐文件索引中关于定位使用的变量
var listIndex = 0;//背景音乐文件索引中关于定位使用的变量
var previousMediaType;
var listLength = 0;//背景音乐文件索引中文件列表的长度
var VC_F = 7;
var MUSIC_TYPE = 3;//背景音乐文件索引中所使用到的索引类型
var ALL_TYPE   = 0;
var fName = "fileColumnUl0";
var pageVCount = 0;
var g_listIndex = "";//用来存储当前文件所在的目录各个层对应的index和start，如/0-1/0-1
var g_path      ="";//用来存储当前文件所在目录
var g_mediaFolderPath = "";//用来存储当前文件所在挂载的目录，包括挂载符 如/usb/sda1/com/...
var topDistance = 363 - 80;//背景音乐文件索引中焦点在第一个位置时的top值
var SCROLL_MAX_HEIGHT = 540;

//背景音乐播放使用的变量
var currentMusicPlayingList = "";//背景音乐播放时获取的music列表
var musicMenuBarList = "";//背景音乐的菜单条
var musicPlayStatus = -1;
var musicMenuFocusIndex = 2;
var musicMenuBarLevel = 1;//表示背景音乐播放菜单上焦点所在的层,0:焦点在进度条上;1：焦点在播放按钮上
var progressBarTimer = 0;
var currentMusicFileInfo = "";//当前播放音乐
var elapsed = 0;
var BAR_LENGTH = 800;
var REFRESH_TIME = 1000;
var repeatMode = 0;//背景音乐播放循环模式

var S_OPEN = 0;//背景音乐播放的状态
var S_PLAY = 1;
var S_PAUSE = 2;
var S_END = 3;
var canvas= new TCanvas();
var ctx = canvas.getContext();
var img= new TImage();
var rotate_degree = 0;
var animationType=0;


var pptPlayIntervalTime=[5000,10000,15000];

//add for football mode
var footballModeFlag = false;
var picPresetListName 	= "";
var picPresetCheckbox 	= "";
var setTimeoutPictureModeId = 0;
var setTimeoutPictureModePosition= 0;
var picPresetFocus = ["images/Focus2.png", "images/Focus2_.png"];
var optionFirstListLength = 0;


function $(id)
{
    return document.getElementById(id);
}

function init()
{
	top.initTextDirection(window);
	if("true" == top.g_setting.getProperty("ro.sita.cfg.app.mediaPictureOnly","false"))
	{
		musicBGPlay = 0;
	}
	top.g_temp = "media";
	top.g_isMediaCenter = top.NDM_Pic_Play;
	//面板按键处理场景设置
	top.setContext5In1Type(top.CONTEXT_PICTURE_PLAYER);
	//top.setContext5In1Type(top.CONTEXT_MENU_SELECT);
	footballModeFlag = setting.footballMode;
	top.showBackground(0);
	initTextInfo();
	addMouseListener();  //add yums
	var str = window.location.search;  //add yums: dmr
	if(str != null && str != "") //get "?" after url  //add yums: dmr
	{
		animationType=0;
	 	ctx.setAnimationEffect(animationType);	
		if(str == "?dmr")
		{
			multimedia.changeSourceToMedia();
		}
		multimedia.setEnterDeviceType(2);
		dmrFlag = true;
		top.g_isMediaCenter = top.NDM_DMR_Pic;
		currentFileInfo = multimedia.getCurrentPlayingMediaInfo();
		pictureOpen(currentFileInfo.path);
		$("consoleTip").style.display = "none";
		return;	
	}

	console.log("zhangljun init() top.g_deviceInfo.type:" + top.g_deviceInfo.type+"-- currentDeviceType:" + currentDeviceType);
	currentDeviceType = top.g_deviceInfo.type;
	if(currentDeviceType != 0)//dlna 使用单例模式 只能有一个DMP
	{
		MENU_COUNT = 5;
		menuBar = $('menuList_1');
	}
	else
	{
		if(musicBGPlay)
		{
			MENU_COUNT = 6;
			menuBar = $('menuList_2');
		}
		else
		{
			MENU_COUNT = 5;
			menuBar = $('menuList_1');
		}
	}
	menuImgTag = menuBar.getElementsByTagName('img');
	menuImgTag[0].src = "images/USB-Picture-Control-icon-SlidePause Focus.png";

	setTimeout(function(){
		multimedia.stopThumbnailTask();
		console.log("zhangljun init() top.g_mediaFolderPath:" + top.g_mediaFolderPath);
		multimedia.getMediaFileList(top.g_deviceInfo.type, 1, top.g_mediaFolderPath, 0, -1);
		currentPlayList = multimedia.getCurrentPicPlayingList(0, -1);
		multimedia.refreshRandlist(currentPlayList.length);
		console.log("zhangljun init() g_currentMedia.path:" + top.g_currentMedia.path);
		picPlayingTimeOut = false;
		animationType=multimedia.getPictureEffect();
	 	ctx.setAnimationEffect(animationType);	
		pictureOpen(top.g_currentMedia.path);
	},50);

    if (setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1")!="0")
    {
        setting.setMEMC(0);
    }
	
	top.g_MediaVideoPlayCount++;
}
var onloadOk=2;
var loadingFail=0;
function pictureOpen(path)
{
	if(onloadOk==0)
		return;
	var loadingTimeout1 = false;
	onloadOk=0;
	$('loadingBox').style.display = 'block';
	multimedia.pictureOpen(path);
	multimedia.picturePlayStatus(2);	
	img.onerror=function(param){
		clearTimeout(loadingTimeout1);		
		loadingFail=param;
		multimedia.picturePlayStatus(0);
	}
	img.onload=function(){
		clearTimeout(loadingTimeout1);
		var w=img.natureWidth;
		var h=img.natureHeight;
		if(w*canvas.height/h>=canvas.width)
			{
				h=canvas.width*h/w;
				w=canvas.width;
			}
		else if(canvas.width*h/w>=canvas.height)
			{
				w=w*canvas.height/h;
				h=canvas.height;
			}
		var x=(canvas.width-w)/2;
		var y=(canvas.height-h)/2;
		rotate_degree=0;
		ctx.rotate(rotate_degree);	
        //console.log(" zk test [picture open]------x:"+x+"---y:"+y+"---w:"+w+"---h:"+h+"animationType:"+animationType);
		if(animationType)
			ctx.drawImageAnimation(img);
		else
			ctx.drawImage(img,x,y,w,h);
		$('loadingBox').style.display = 'none';		
		onloadOk=1;		
		multimedia.picturePlayStatus(1);
	}
	setTimeout(function(){
		if(currentDeviceType==0)
			img.src ="file://"+path;
		else
			img.src =path;
		canvas.clearCanvas();
	},10);
	loadingTimeout1=setTimeout(function(){
		loadingFail=8;
		img.src ="";
	},30000);		
}

function imageMove(imgae, direction) 
{
	var h = imgae.height > canvas.height ? canvas.height : imgae.height;
	var hStep = h/5;
	var w = imgae.width > canvas.width ? canvas.width : imgae.width;
	var wStep = w/5;
	var x = imgae.x;
	var y = imgae.y;

	if (direction == "up") {
	y -= hStep;
	} else if (direction == "down") {
	y += hStep;
	} else if (direction == "left") {
	x -= wStep;
	} else if (direction == "right") {
	x += wStep;
	}
	var evtPicture={
		which:0,
		modifiers:0	
		};
	console.log("imageMove----x = "+x+" y="+y+" imgae.height="+imgae.height+"  imgae.width=="+ imgae.width);
	if(imgae.height > canvas.height)
	{
		if(y<=canvas.height-imgae.height)
		{
			y=canvas.height-imgae.height;
			evtPicture.which=top.E_MEDIA_PICTURE_UP_EDGE;
		}
		else if(y>=0)
		{
			y=0;
			evtPicture.which=top.E_MEDIA_PICTURE_DOWN_EDGE;
		}
	}
	else
	{
		if(y<=0)
		{
			y=0;
			evtPicture.which=top.E_MEDIA_PICTURE_UP_EDGE;
		}
		else if(y>=canvas.height-imgae.height)
		{
			y=canvas.height-imgae.height;
			evtPicture.which=top.E_MEDIA_PICTURE_DOWN_EDGE;
		}

	}
	if(imgae.width > canvas.width)
	{
		if(x<=canvas.width-imgae.width)
		{
			x=canvas.width-imgae.width;
			evtPicture.which=top.E_MEDIA_PICTURE_LEFT_EDGE;
		}
		else if(x>=0)
		{
			x=0;
			evtPicture.which=top.E_MEDIA_PICTURE_RIGHT_EDGE;
		}
	}
	else
	{
		if(x<=0)
		{
			x=0;
			evtPicture.which=top.E_MEDIA_PICTURE_LEFT_EDGE;
		}
		else if(x>=canvas.width-imgae.width)
		{
			x=canvas.width-imgae.width;
			evtPicture.which=top.E_MEDIA_PICTURE_RIGHT_EDGE;
		}

	}
		
	if(evtPicture.which!=0)
		notifyProcess(evtPicture);
	
	ctx.drawImage(imgae, x, y);
}

function imageScale(imgae,multiple) {
	if(multiple>0)
		multiple=2;
	else
		multiple=0.5;
	var h = imgae.height * multiple;
	var w = imgae.width * multiple;
	var x=(canvas.width-w)/2;
	var y=(canvas.height-h)/2;
	ctx.drawImage(imgae, x, y, w , h );
}

function imageRotate(imgae,rotate) {
	var h=imgae.natureHeight;
	var w =imgae.natureWidth;
	
	if(rotate == 1){
		rotate_degree += 90;	
	}
	if(rotate == -1){
		rotate_degree -= 90;	
	}
	if(rotate_degree%180!=0)
	{
		if(w*canvas.width/h>=canvas.height)
			{
				h=canvas.height*h/w;
				w=canvas.height;
			}
		else if(canvas.height*h/w>=canvas.width)
			{
				w=w*canvas.width/h;
				h=canvas.width;
			}
	}
	else
	{
		if(w*canvas.height/h>=canvas.width)
			{
				h=canvas.width*h/w;
				w=canvas.width;
			}
		else if(canvas.width*h/w>=canvas.height)
			{
				w=w*canvas.height/h;
				h=canvas.height;
			}
	}
	var x=(canvas.width-w)/2;
	var y=(canvas.height-h)/2;
	ctx.rotate(rotate_degree);
	ctx.drawImage(img, x, y, w , h );
}
function imageEffect(index) 
{
	animationType=index;
	ctx.setAnimationEffect(animationType);	
}
function unInit()
{
	if(dmrFlag)
	{
		top.g_temp = "";
	}
	canvas.clearCanvas();
	
    if (setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1")!="0")
    {
        setting.setMEMC(1);
    }
	top.g_isMediaCenter = top.NDM_Others;
}

function initTextInfo()
{
	playListIndex =	0;  // add yums
	menuFocusIndex = 0;
	focusTab = DISPLAY_AREA;
	playStatus = S_PLAY;
	inforListSpan = $('listInfo').getElementsByTagName('span');
	inforSpan = $("info").getElementsByTagName("span");
	informationSpan = $('information').getElementsByTagName('span');
	optionFirstMenuLi = $("optionInfo").getElementsByTagName("li");
	optionMenuImg = $("optionInfoUl").getElementsByClassName('optionFirstUlImg');
	musicMenuBarList = $("BGMArea").getElementsByClassName("musicImgInfo");
	fileColumnUl0Li = $("fileColumnUl0").getElementsByTagName("li");
	
	if(musicBGPlay)
		clickMenuImg = $('menuList_2').getElementsByTagName('img');
	else
		clickMenuImg = $('menuList_1').getElementsByTagName('img');
	
	var consoleTips = $("consoleTip").getElementsByTagName("div");  //初始化consoleTips中的文本       
    for(var i = 0;i<consoleTips.length - 1;i++)                   
    {                                                             
        //console.log("zhangljun consoleTips "+ i);                 
        consoleTips[i+1].innerHTML = consoleTipArray[i];             
    }
	
	var optionInfoLi = $("optionInfo").getElementsByTagName("li");
	for(var i =0 ;i<optionInfoLi.length;i++)
	{
		optionInfoLi[i].getElementsByTagName("span")[0].innerText = optionInfoArrayText[i];
	}
	
	informationSpan = $("information").getElementsByTagName("span");
	for(var i =0 ;i<informationSpan.length;i++)
	{
		informationSpan[i].innerText = infoArray[i];
	}
	
	/*
	picturePresetBarSpan = $("picturePresetBar").getElementsByTagName("span");
	for(var i=0;i<picturePresetBarSpan.length;i++)
	{
		if(i == 0)
			picturePresetBarSpan[i].innerText = picturePresetBarTitleInfo;
		else
			picturePresetBarSpan[i].innerText = picturePresetArray[i - 1];
	}*/
	$('picturePresetTitle').innerText = picturePresetBarTitleInfo;
	picPresetCheckbox = $("picturePresetSelectBar").getElementsByClassName("picPresetCheckbox");
	picPresetListName = $('picturePresetSelectBar').getElementsByTagName('span');
	for(var i = 0; i < picPresetListName.length; i++)
	{
		picPresetListName[i].innerText = picturePresetArray[i];
	}
	
	var bottomTipsLi = $("bottomTips").getElementsByTagName("li");
	for(var i=0;i<bottomTipsLi.length;i++)
	{
		//console.log("zhangljun bottomTipsLi:" + i);
		bottomTipsLi[i].innerText = consoleTipsArray[i];
	}
	
	var upTipsDiv = $("upTips").getElementsByTagName("div");
	upTipsDiv[0].innerHTML = upTipsInfo;
	
	clickOptionMenu1 = $('optionInfo').getElementsByTagName('li');
	clickOptionMenu2 = $('listInfo').getElementsByTagName('span');
	clickPicturePresetSpan = $('picturePresetBar').getElementsByTagName('span'); //picturepreset
	clickPlayListLi = $('playList').getElementsByTagName("img");
	clickPlayListLeftArrow = $('playListLeftArrow');
	clickLR_TipsArrow = $("LR_Tips").getElementsByTagName("img");
	bottomAreaDiv = $("bottomAreaDiv");
	clickOptionBarBlockDiv = $("optionBarBlock").getElementsByClassName("optionBarStyle_2");
	clickGoBackBoxDiv = $("gobackBox");
	clickFileColumnUp0Div = $("fileColumnUp0");
	clickFileColumnDown0Div = $("fileColumnDown0");
	clickFileColumnUl0Li = $("fileColumnUl0").getElementsByTagName("li");
	clickFileColumn0Div = $("fileColumn0");
	clickIconListEmptyTips = $("iconListEmptyTips");
	clickBGMMusicImg = $("BGMArea").getElementsByClassName("musicImgInfo");
	
	$('eb_tips').innerText = eb_tips;
	$('okButton').innerText = ok_button;
	$('iconListEmptyTipsInfo').innerText = emptyTipsInfo;
	
	optionBarNameArray[0] = $('backLightBar');
	//optionBarNameArray[1] = $('brightnessBar');
	//optionBarNameArray[2] = $('contrastBar');
	//optionBarNameArray[3] = $('saturationBar');
	//optionBarNameArray[4] = $('tintBar');
	//optionBarNameArray[5] = $('sharpnessBar');
	//optionBarNameArray[6] = $('switchLR3DBar');

	optionBarNameArray[0].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[1];
	//optionBarNameArray[1].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[2];
	//optionBarNameArray[2].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[3];
	//optionBarNameArray[3].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[4];
	//optionBarNameArray[4].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[5];
	//optionBarNameArray[5].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[6];
	//optionBarNameArray[6].getElementsByClassName('optionBarName')[0].innerText = optionListNameArray[12];
	ttsRead();
}

function keyProc(evt)
{
	console.log("zhangljun keyProc() dmrFlag:" + dmrFlag);
	
	if($("consoleTip").style.display == "block")
	{
		console.log("zhangljun consoleTips == block")
		clearTimeout(initSetTimeOut);
		console.log("showLeftArrowFlage:" + showLeftArrowFlage);
		console.log("showRightArrowFlage:" + showRightArrowFlage);
		$('consoleTip').style.display = "none";
		//bottomAreaDiv.style.display = "block";
		return;
	}
	else
	{
		console.log("noennoen");
	}
	
	var ret = true;
	var keycode = evt.which;
	console.log("zhangljun keycode:"+keycode);
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
		case top.VK_FRONT_PANEL_LOCKED:
			top.keyDownProcess(evt);
			return;
		case top.VK_POWER://power
            top.keyDownProcess(evt);
            return;
		case top.VK_MUTE://mute
			//if(dmrFlag)  //change yums: 2014-11-19 same with videoPlay
				//return;
			multimedia.stopThumbnailTask();
			top.keyDownProcess(evt);
			return;
		case top.VK_VOLUME_UP://volume up
			if(dmrFlag)  //add yums:dmr picture
				break;
			top.$('globleShow').contentWindow.initVolume();
			if(top.$('globleShow').contentWindow.volumeCount > 0)
			{
				top.g_volume_visible = 1;
				top.$("operatePage").src = "";
				top.setFrameFocusPage("globleShow");
				top.$("globleShow").contentWindow.$("adjustProgressBox").style.display = "block";
				top.requestFocus(top.globleShow, 0);
				//top.startVolumeTimer();
			}
			break;
		case top.VK_VOLUME_DOWN://volume down
			if(dmrFlag)  //add yums:dmr picture
				break;
			top.$('globleShow').contentWindow.initVolume();
			top.g_volume_visible = 1;
			top.$("operatePage").src = "";
			top.setFrameFocusPage("globleShow");
			top.$("globleShow").contentWindow.$("adjustProgressBox").style.display = "block";
			top.requestFocus(top.globleShow, 0);
			//top.startVolumeTimer();
			break;
			
		case top.VK_UP:
			if(dmrFlag)  //add yums:dmr picture
				break;
			toUp();
			ttsRead();
			break;

		case top.VK_DOWN:
			if(dmrFlag)  //add yums:dmr picture
				break;
			toDown();
			ttsRead();
			break;

		case top.VK_RIGHT:	
			if(dmrFlag)  //add yums:dmr picture
				break;
			//setTimeout(function(){
				toRight();
				ttsRead();
			//},50)
			break;

		case top.VK_LEFT:
			if(dmrFlag)  //add yums:dmr picture
				break;
			toLeft();
			ttsRead();
			break;
		
		case top.VK_OPTION: //menu
			if(dmrFlag)  //add yums:dmr picture
				break;
			toOption(-1);
			ttsRead();
			break;

		case top.VK_ENTER:
			if(dmrFlag)  //add yums:dmr picture
			{
				if(focusTab != TIPS_AREA)
					break;
			}
			toOK();
			ttsRead();
			break;

		case top.VK_BACK: //back
			toBack();
			ttsRead();
			break;
		case top.VK_TV:
			hideMenu(0);//add yums
			showConsoleTipsArrow(0,0); 
			displayTipsBox(0);
			$('consoleTip').style.display = "none";
			top.g_lastEnterType = -1;  //add yums 用于新接入设备盘符判断逻辑
			top.g_isMediaCenter = top.NDM_Others;

			multimedia.stopThumbnailTask();
			if(musicPlayStatus != S_END && musicPlayStatus != -1)
			{
				multimedia.mediaStop(0);
			}
			multimedia.pictureStop(1);
			multimedia.deviceExitUninit();
			multimedia.toRestoreSource(2, 1);
			top.g_previousHtmlPage = "channelPlay.html";
			top.g_remindWord = "TvHotKey";
			top.$("main").src = "intermediate.html";
			top.requestFocus(top.main, 1);
			top.$("operatePage").src = "";

			break;
		case top.VK_HOME:
			toHomePage();
			break;
		case top.VK_MENU:
		case top.VK_SOURCE:
			if($('option').style.display == "block")
				toOption(0);
			if(focusTab == DISPLAY_AREA||focusTab == LIST_AREA||focusTab == BGM_AREA
				||focusTab == MENU_AREA||focusTab == PLAY_LIST_AREA)
			{
				hideMenu(0,DISPLAY_AREA);
			}
			top.keyDownProcess(evt);
			break;			
		case top.VK_EXIT:
			if($('option').style.display == "block")
			{
				toOption(0);
				return;
			}
			isStop = 0;
			hideMenu(0); //add yums：退出时立即隐藏因为菜单选项。
			showConsoleTipsArrow(0,0); 
			displayTipsBox(0);
			$('consoleTip').style.display = 'none';
			$('pictureMoveTips').style.display = 'none';
			top.g_lastEnterType = -1;  //add yums 用于新接入设备盘符判断逻辑
			top.g_isMediaCenter = top.NDM_Others;

			if(dmrFlag)   //add yums:dmr picture
			{
				if(musicPlayStatus != S_END && musicPlayStatus != -1)
				{
					multimedia.mediaStop(0);
				}
				multimedia.pictureStop(1);
				multimedia.deviceExitUninit();
				multimedia.toRestoreSource(0, 0);
				top.$("main").src = "channelPlay.html";
				return;
			
			}
			
			multimedia.stopThumbnailTask();
			if(musicPlayStatus != S_END && musicPlayStatus != -1)
			{
				multimedia.mediaStop(0);
			}
			multimedia.pictureStop(1);
			multimedia.deviceExitUninit();
			if(!top.isFromOptionIntoUsb)
			{
				top.$("main").src = top.getHomepage("?tv&media");
			}
			else
			{
				multimedia.toRestoreSource(0, 1);
				top.$("main").src = "channelPlay.html";
			}
			top.requestFocus(top.main, 1);
			
			break;
			
		case top.VK_INFO:
			if(dmrFlag)	
				break;
			var wait_flag = 0;
			var ttsStr = "";
			for(var i = 0; i < inforSpan.length; i++)
			{
				ttsStr = ttsStr + inforSpan[i].innerText + ",";
			}
			if(focusTab == DISPLAY_AREA)
			{
				if($("info").style.display == "none")
				{
					$("info").style.display = "block";
					for(var i=0;i<inforSpan.length;i++)
					{
						startElementScroll(inforSpan[i]);
						if(inforSpan[i].scrollWidth > inforSpan[i].clientWidth)
						{
							wait_flag = 1;
						}
					}
					
					focusTab = INFO_AREA;
					if(wait_flag == 1)
					{
						hideMenu(30000,DISPLAY_AREA);
					}
					else
					{
						hideMenu(5000,DISPLAY_AREA);
					}
				}
				else
					return;		
			}
			else if(focusTab == OPTION_AREA || focusTab == OPTION_DETAIL_AREA)
			{
				$('option').style.display = "none";
				$("info").style.display = "block";
				for(var i=0;i<inforSpan.length;i++)
				{
					startElementScroll(inforSpan[i]);
					if(inforSpan[i].scrollWidth > inforSpan[i].clientWidth)
					{
						wait_flag = 1;
					}
				}
				
				focusTab = INFO_AREA;
				if(wait_flag == 1)
				{
					hideMenu(30000,DISPLAY_AREA);
				}
				else
				{
					hideMenu(5000,DISPLAY_AREA);
				}
				return;		
			}
			else if(focusTab == PRESET_AREA)
			{
				$("picturePresetBar").style.display = "none";
				$("focus").style.display = "none";
				$("info").style.display = "block";
				for(var i=0;i<inforSpan.length;i++)
				{
					startElementScroll(inforSpan[i]);
					if(inforSpan[i].scrollWidth > inforSpan[i].clientWidth)
					{
						wait_flag = 1;
					}
				}
				
				focusTab = INFO_AREA;
				if(wait_flag == 1)
				{
					hideMenu(30000,DISPLAY_AREA);
				}
				else
				{
					hideMenu(5000,DISPLAY_AREA);
				}
				return;		
			}
			else if(focusTab == INFO_AREA && $("info").style.display == "block")
			{
				focusTab = DISPLAY_AREA;
				$("info").style.display = "none";
				return;
			}
			if("block" == $("info").style.display)
			{
				top.ttsLog("ttsStr=" + ttsStr);
				top.setTTSSay(top.SPEECH_TYPE_FLUSH, ttsStr);
			}
			break;
		case top.VK_STOP:   //add yums 2014-10-21
		case top.VK_PAUSE:    //add yums 2014-10-21
			if(dmrFlag)
				break;
			
		    if((focusTab == DISPLAY_AREA || focusTab == OPTION_AREA || focusTab == OPTION_DETAIL_AREA || focusTab == PRESET_AREA || focusTab ==INFO_AREA) && zoomNum == 0)
			{
				if(pptState == 1)
				{
					if($("option").style.display == "block")
					{
						$("option").style.display = "none";
					}
					
					if($("picturePresetBar").style.display == "block")
						$("picturePresetBar").style.display = "none";
					if($("info").style.display == "block")
						$("info").style.display = "none";
					
					multimedia.setPicturePPTState(0);
					pptState = 0;  //multimedia.getPicturePPTState();	
					clearInterval(picPPTPlayTimeOut);
					picPPTPlayTimeOut = false;
					menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow Focus.png";
					menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
					menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
					menuImgTag[3].src = "images/USB-Picture-Control-icon-Zoom+.png";
					menuImgTag[4].src = "images/USB-Picture-Control-icon-Zoom-.png";
					focusTab = MENU_AREA;
					menuBar.style.display = "block";
					$("bottomTips").style.display = "block";
					hideMenu(FADE_TIME, DISPLAY_AREA);
					console.log("---------ttstest---------ttsStr=" + "stop");
					top.setTTSSay(top.SPEECH_TYPE_FLUSH, "stop");
				}
				else
				{
					if($("option").style.display == "block")
					{
						$("option").style.display = "none";
					}
					
					if($("picturePresetBar").style.display == "block")
						$("picturePresetBar").style.display = "none";
					if($("info").style.display == "block")
						$("info").style.display = "none";
						
					focusTab = MENU_AREA;
					menuBar.style.display = "block";
					$("bottomTips").style.display = "block";
					hideMenu(FADE_TIME, DISPLAY_AREA);
				}
			}
			else if(focusTab == MENU_AREA && zoomNum == 0)
			{
				if(pptState == 1)
				{
					multimedia.setPicturePPTState(0);
					pptState = 0;  //multimedia.getPicturePPTState();	
					clearInterval(picPPTPlayTimeOut);
					picPPTPlayTimeOut = false;
					menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow Focus.png";
					menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
					menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
					menuImgTag[3].src = "images/USB-Picture-Control-icon-Zoom+.png";
					menuImgTag[4].src = "images/USB-Picture-Control-icon-Zoom-.png";
					console.log("---------ttstest---------ttsStr=" + "stop");
					top.setTTSSay(top.SPEECH_TYPE_FLUSH, "stop");
				}
				
				hideMenu(FADE_TIME, DISPLAY_AREA);
			}
			break;
		case top.VK_PLAY:
		case top.VK_PLAY_PAUSE: //play key press  add yums 2014-10-21
			if(dmrFlag)
				break;
			var index = multimedia.getPictureDuration();
			var intervalTime = pptPlayIntervalTime[index];
			
			if((focusTab == DISPLAY_AREA || focusTab == OPTION_AREA || focusTab == OPTION_DETAIL_AREA || focusTab == PRESET_AREA ||focusTab == INFO_AREA) && zoomNum == 0)
			{
				top.setContext5In1Type(top.CONTEXT_MENU_SELECT); //add yums 2014-11-19
				if(pptState == 0)
				{
					if($("option").style.display == "block")
					{
						$("option").style.display = "none";
					}
					
					if($("picturePresetBar").style.display == "block")
						$("picturePresetBar").style.display = "none";
					if($("info").style.display == "block")
						$("info").style.display = "none";
					
					multimedia.setPicturePPTState(1);
					pptState = 1;  //multimedia.getPicturePPTState();
					menuImgTag[0].src = "images/USB-Picture-Control-icon-SlidePause Focus.png";
					menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR-Disable.png";
					menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL-Disable.png";
					menuImgTag[3].src = "images/USB-Picture-Control-icon-Zoom+-Disable.png";
					menuImgTag[4].src = "images/USB-Picture-Control-icon-Zoom--Disable.png";
					menuFocusIndex = 0;
					picPPTPlayTimeOut = setInterval("setPicPPTPlay()", intervalTime);  
				
					focusTab = MENU_AREA;
					menuBar.style.display = "block";
					$("bottomTips").style.display = "block";
					hideMenu(FADE_TIME, DISPLAY_AREA);
					console.log("---------ttstest---------ttsStr=" + "play");
					top.setTTSSay(top.SPEECH_TYPE_FLUSH, "play");
				}
				else
				{
					
					if($("option").style.display == "block")
					{
						$("option").style.display = "none";
					}
					
					if($("picturePresetBar").style.display == "block")
						$("picturePresetBar").style.display = "none";
					if($("info").style.display == "block")
						$("info").style.display = "none";
						
					focusTab = MENU_AREA;
					menuBar.style.display = "block";
					$("bottomTips").style.display = "block";
					hideMenu(FADE_TIME, DISPLAY_AREA);
				}
			}
			else if(focusTab == MENU_AREA && zoomNum == 0)
			{
				top.setContext5In1Type(top.CONTEXT_MENU_SELECT); //add yums 2014-11-19
				if(pptState == 0)
				{
					multimedia.setPicturePPTState(1);
					pptState = 1;  //multimedia.getPicturePPTState();
					menuImgTag[0].src = "images/USB-Picture-Control-icon-SlidePause Focus.png";
					menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR-Disable.png";
					menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL-Disable.png";
					menuImgTag[3].src = "images/USB-Picture-Control-icon-Zoom+-Disable.png";
					menuImgTag[4].src = "images/USB-Picture-Control-icon-Zoom--Disable.png";
					menuFocusIndex = 0;
					picPPTPlayTimeOut = setInterval("setPicPPTPlay()", intervalTime);
					console.log("---------ttstest---------ttsStr=" + "play");
					top.setTTSSay(top.SPEECH_TYPE_FLUSH, "play");
				}
				
				hideMenu(FADE_TIME, DISPLAY_AREA);
			}
			break;
		case top.VK_PREV: //previous
			if(dmrFlag)
				break;
			console.log("zhangljun top.VK_PREV focusTab:" + focusTab);
			if(zoomNum != 0)
			{
				$("thumbNail").style.display = "none";
				$("upTips").style.display = "none";
				menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow.png";
				menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
				menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
				if(zoomNum==3)
				{
					menuImgTag[3].src = "images/USB-Picture-Control-icon-Zoom+.png";
				}
				else if(zoomNum==-3)
				{
					menuImgTag[4].src = "images/USB-Picture-Control-icon-Zoom-.png";
				}
				zoomNum = 0;
			}
			if(focusTab == DISPLAY_AREA)
			{
				picPlayingTimeOut = false;
				playPre();
				console.log("---------ttstest---------ttsStr=" + "previous");
				top.setTTSSay(top.SPEECH_TYPE_FLUSH, "previous");
			}
			else if(focusTab == INFO_AREA)
			{
				picPlayingTimeOut = false;
				playPre();
				console.log("---------ttstest---------ttsStr=" + "previous");
				top.setTTSSay(top.SPEECH_TYPE_FLUSH, "previous");
			}
			else if(focusTab == OPTION_AREA || focusTab == OPTION_DETAIL_AREA)
			{
				picPlayingTimeOut = false;
				playPre();
				console.log("---------ttstest---------ttsStr=" + "previous");
				top.setTTSSay(top.SPEECH_TYPE_FLUSH, "previous");
			}
			else if(focusTab == MENU_AREA)
			{
				picPlayingTimeOut = false;
				playPre();
				console.log("---------ttstest---------ttsStr=" + "previous");
				top.setTTSSay(top.SPEECH_TYPE_FLUSH, "previous");
			}
			else if(focusTab == PRESET_AREA)
			{
				picPlayingTimeOut = false;
				playPre();
				console.log("---------ttstest---------ttsStr=" + "previous");
				top.setTTSSay(top.SPEECH_TYPE_FLUSH, "previous");
			}
			else if(focusTab == ZOOM_AREA)
			{
				$("thumbNail").style.display = "none";
				focusTab = DISPLAY_AREA;
				setTimeout(function(){
					picPlayingTimeOut = false;
					playPre();
					console.log("---------ttstest---------ttsStr=" + "previous");
					top.setTTSSay(top.SPEECH_TYPE_FLUSH, "previous");
					},10);
			}
			break;
		case top.VK_NEXT: //next

			if(dmrFlag)
				break;
			if(zoomNum != 0)
			{
				$("thumbNail").style.display = "none";
				$("upTips").style.display = "none";
				menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow.png";
				menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
				menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
				if(zoomNum==3)
				{
					menuImgTag[3].src = "images/USB-Picture-Control-icon-Zoom+.png";
				}
				else if(zoomNum==-3)
				{
					menuImgTag[4].src = "images/USB-Picture-Control-icon-Zoom-.png";
				}
				zoomNum = 0;
			}
			console.log("zhangljun top.VK_NEXT focusTab:" + focusTab);
			if(focusTab == DISPLAY_AREA)
			{
				picPlayingTimeOut = false;
				playNext();
				console.log("---------ttstest---------ttsStr=" + "next");
				top.setTTSSay(top.SPEECH_TYPE_FLUSH, "next");
			}
			else if(focusTab == INFO_AREA)
			{
				picPlayingTimeOut = false;
				playNext();
				console.log("---------ttstest---------ttsStr=" + "next");
				top.setTTSSay(top.SPEECH_TYPE_FLUSH, "next");
			}
			else if(focusTab == OPTION_AREA || focusTab == OPTION_DETAIL_AREA)
			{
				picPlayingTimeOut = false;
				playNext();
				console.log("---------ttstest---------ttsStr=" + "next");
				top.setTTSSay(top.SPEECH_TYPE_FLUSH, "next");
			}
			else if(focusTab == MENU_AREA)
			{
				picPlayingTimeOut = false;
				playNext();
				console.log("---------ttstest---------ttsStr=" + "next");
				top.setTTSSay(top.SPEECH_TYPE_FLUSH, "next");
			}
			else if(focusTab == PRESET_AREA)
			{
				picPlayingTimeOut = false;
				playNext();
				console.log("---------ttstest---------ttsStr=" + "next");
				top.setTTSSay(top.SPEECH_TYPE_FLUSH, "next");
				
			}
			else if(focusTab == ZOOM_AREA)
			{
				$("thumbNail").style.display = "none";
				focusTab = DISPLAY_AREA;
				setTimeout(function(){
						picPlayingTimeOut = false;
						playNext();
					console.log("---------ttstest---------ttsStr=" + "next");
					top.setTTSSay(top.SPEECH_TYPE_FLUSH, "next");
					},10);
			}
			break;
		case top.VK_NETFLIX:
        case top.VK_GLOBOPLAY:
			isStop = 0;
			hideMenu(0);  
			showConsoleTipsArrow(0,0); 
			displayTipsBox(0);
			$('consoleTip').style.display = 'none';
			top.g_lastEnterType = -1;
			top.g_isMediaCenter = top.NDM_Others;

			if(musicPlayStatus != S_END && musicPlayStatus != -1)
			{
				multimedia.mediaStop(0);
			}
			multimedia.pictureStop(1);
			multimedia.stopThumbnailTask();
			multimedia.deviceExitUninit();
			//multimedia.toRestoreSource(0, 0);
			top.g_temp = "";
			top.preTempPage = "";
            top.keyDownProcess(evt);
            return;
        case top.VK_YOUTUBE:
        case top.VK_INTERNET:
	case top.VK_APPS:
			
			isStop = 0;
			hideMenu(0);  
			showConsoleTipsArrow(0,0); 
			displayTipsBox(0);
			$('consoleTip').style.display = 'none';
			if (top.checkNetwork() == false)
                	return;
		
			top.g_lastEnterType = -1;
			top.g_isMediaCenter = top.NDM_Others;

			if(musicPlayStatus != S_END && musicPlayStatus != -1)
			{
				multimedia.mediaStop(0);
			}
			multimedia.pictureStop(1);
			multimedia.stopThumbnailTask();
			multimedia.deviceExitUninit();
			//multimedia.toRestoreSource(0, 0);
			top.g_temp = "";
			top.globalHotkeyHandle(keycode);
			return;
		default:
			break;
	}
	if(dmrFlag==0)
	{
		currentListPosition = multimedia.getNowPicturePosition(); 
		if(currentListPosition==0)
		{
			showLeftArrowFlage=0;
			showRightArrowFlage=1;
		}
		else if(currentListPosition==(currentPlayList.length - 1))
		{
			showLeftArrowFlage=1;
			showRightArrowFlage=0;
		}
		else
		{
			showLeftArrowFlage=1;
			showRightArrowFlage=1;
		}
		showConsoleTipsArrow(showLeftArrowFlage,showRightArrowFlage);
	}
	return ret;
}

function notifyProcess(evt)
{
    var msg = evt.which;
	var value = evt.modifiers;
	console.log("zhangljun notifyProcess() msg:"+msg+"-- p2="+value+" -- dmrFlag:"+dmrFlag);
	//全局消息
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
		//case top.E_DLNA_DMR_PUSH_MOVIE://dmr push movie   //注释掉by yums  2014-10-20
		//case top.E_DLNA_DMR_PUSH_MUSIC://dmr push music
		//case top.E_DLNA_DMR_PUSH_PICTURE://dmr push picture
		case top.E_DLNA_DMR_PUSH_PICTURE_ROTATE:
		{
			imageRotate(img,1);
			break;
		}
		case top.E_DLNA_DMR_PUSH_PICTURE_ZOOM:
		{
            //console.log(" zk test --1----canvas-w:"+canvas.width+"---canvas-h:"+canvas.height+"---img-w:"+img.natureWidth+"---img-h:"+img.natureHeight);
            var param;
            param = top.g_setting.getTCastRequest(value);
            console.log(" zk test ------------------------- param: "+param);
            var scale 	= param.split(">>")[0];
            var cx		= param.split(">>")[1];
            var cy 		= param.split(">>")[2];
            //console.log(" zk test ------zoom:"+zoom+"---scale:"+scale+"---cx:"+cx+"---cy:"+cy);

			var w=img.natureWidth;
			var h=img.natureHeight;
			if(w*canvas.height/h>=canvas.width)
			{
				h=canvas.width*h/w;
				w=canvas.width;
			}
			else if(canvas.width*h/w>=canvas.height)
			{
				w=w*canvas.height/h;
				h=canvas.height;
			}
			//get cx/cy
            var x = (canvas.width-w)/2;
            var y = (canvas.height-h)/2;
            cx = x + w*cx/1080 - canvas.width/2;
            cy = y + h*cy/1920 - canvas.height/2;
			//get x/y by cx/cy
            w = w * scale;
            h = h * scale;
            x = ((canvas.width-w)/2)-cx;
            y = ((canvas.height-h)/2)-cy;

            console.log(" zk test [after]------x:"+x+"---y:"+y+"---w:"+w+"---h:"+h);
            if(scale == 1)
			{
                ctx.drawImage(img,(canvas.width-w)/2,(canvas.height-h)/2,w,h);
			}
			else
            	ctx.drawImage(img,x,y,w,h);
            //ctx.drawImage(img, x, y);//move

			break;
		}

		case top.E_CI_OP_UPDATE_CHANNEL://CMD_UI_NOTIFY_OP_UPDATE_CHANNEL
		case top.E_CI_OP_UPDATE_NIT://CMD_UI_NOTIFY_OP_UPDATE_NIT
		case top.E_POWER_OFF_TIMER://power off timer
		case top.E_POWER_OFF_TIMER_EX:
		case top.E_CEC_HDMI_DEVICE_INSERTED:
		case top.E_APP_OPEN:
			top.systemEventProc(evt);
			return;
		case top.E_READY_TO_CHANGE_SCART: //add chencheng
		case top.E_READY_TO_CHANGE_CEC:   //add chencheng  svn 14533
			top.g_lastEnterType = -1;
			top.g_isMediaCenter = top.NDM_Others;
			if(musicPlayStatus != S_END && musicPlayStatus != -1)
			{
				multimedia.mediaStop(0);
			}
			multimedia.pictureStop(1);
			multimedia.stopThumbnailTask();
			multimedia.deviceExitUninit();
			multimedia.toRestoreSource(2, value);
			top.systemEventProc(evt);
			break;
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
			multimedia.toRestoreSource(0,0);//restore source to dtv or atv or ...
			*/
			top.g_temp = "media";
			/////////////////chenhua changed end///////////////////////////////// 
			top.systemEventProc(evt);
			return;
		case top.E_NETWORK_CONNECT_TEST_SUCCESS:
		case top.E_NETWORK_CONNECT_TEST_FAIL:
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
		case top.E_MEDIA_FIND_FILE_END: //file search end
			video_audio_error_flag = 0;
			top.g_searchFlag = 1;
			break;
		case top.E_MEDIA_PLAYER_STATUS_STOP: //stop  32876
			if(value == 0)
			{
				if(musicPlayStatus != S_END)
				{
					if(progressBarTimer) 
						clearInterval(progressBarTimer);
					
				}
				musicPlayStatus = S_END;

			}
			break;

	    case top.E_MEDIA_EOS: //media eos//单首背景音乐播放完。32798
	    {	
			if(dmrFlag || currentDeviceType == 1)//DLNA是单例模式，只能产生一个DMP
			{
				break;
			}
			clearProgressArea();
			musicPlayStatus = S_END;
			if(progressBarTimer)
			{
				clearInterval(progressBarTimer);
			}
			multimedia.playNextMediaFile(0);
			musicPlayStatus = S_OPEN;
			break;
	    }
		
		case top.E_MEDIA_USB_INSERTED://usb insert
			top.systemEventProc(evt);
			break;
		case top.E_MEDIA_USB_REMOVE: //usb remove
		{
			hideMenu(0); //add yums
			setTimeout(function()
			{
				multimedia.stopThumbnailTask();
				if(musicPlayStatus != S_END && musicPlayStatus != -1)
				{
					multimedia.mediaStop(0);
				}
				multimedia.pictureStop(1);
				multimedia.deviceExitUninit();
				top.g_mediaPosition = 1;
				top.$("main").src = "deviceList.html?remove";
			},30)
			break;
		}
		/*for chencheng's audio video 
		case top.E_MEDIA_VIDEO_ERROR: //error 自动停掉，不需要上面用户做停止操作
		case top.E_MEDIA_AUDIO_ERROR:
		case top.E_MEDIA_OTHER_ERROR:
			video_audio_error_flag = 0;
			if(progressBarTimer) clearInterval(progressBarTimer);
			$("unableRemindWords").innerText = unavailable[1];
			$("unavailable").style.display = "block";
			playStatus = "stop";
			$("playStatus").style.backgroundImage = "url('" + playStatusImg[6] + "')";
			doNextTimer = setTimeout(function(){$("unavailable").style.display = "none";doPlayNext();}, 5000);
			//setTimeout(function(){top.$("main").src = top.g_previousHtmlPage;}, 5000);
			break;
		case top.E_MEDIA_CUSTOM_VIDEO_NO_SUPPORT: //video not support
			$("unableRemindWords").innerText = unavailable[2];
			$("unavailable").style.display = "block";
			setTimeout(function(){$("unavailable").style.display = "none";}, 5000);
			if(video_audio_error_flag)//audio not support
			{
				video_audio_error_flag = 0;
				$("unableRemindWords").innerText = unavailable[4];
				doNextTimer = setTimeout(function(){doPlayNext();}, 5000);
			}
			else
			{
				video_audio_error_flag = 1;
			}
			break;
		case top.E_MEDIA_CUSTOM_AUDIO_NO_SUPPORT: //audio not support
			$("unableRemindWords").innerText = unavailable[3];
			$("unavailable").style.display = "block";
			setTimeout(function(){$("unavailable").style.display = "none";}, 5000);
			if(video_audio_error_flag)//video not support
			{
				video_audio_error_flag = 0;
				$("unableRemindWords").innerText = unavailable[4];
				doNextTimer = setTimeout(function(){doPlayNext();}, 5000);
			}
			else
			{
				video_audio_error_flag = 1;
			}
			break;
		*/
		/**
		***add yums:2014-11-24  
		***图片播放出错消息处理：
		***shena沟通，图片出错消息有:MEIDA_PLAY_CANT_OPAN,PIC_NOT_AVALIBLE,FILE_NOT_EXIT
		***VIDEO_ERROR,VIDEO_CANT_RECONGNIZE,VIDEO_NOT_SUPPORT,OTHER_ERROR;
		**/
		
		case top.E_MEDIA_OTHER_ERROR:  //same with audio
			if(isStop == 1)
				break;
			if(value == 1)
			{
				errorFlag = ERROR_OTHER;				
				switch(loadingFail)
				{
					case 3:
						$('eb_info').innerText = pictureTips[1];
						break;
					case 4:
						$('eb_info').innerText =  pictureTips[2];
						break;
					case 5:
						$('eb_info').innerText =  pictureTips[3];
						break;
					case 6:
						$('eb_info').innerText =  pictureTips[4];
						break;
					case 7:
						$('eb_info').innerText =  pictureTips[5];
						break;
					case 1:
					case 8:
						$('eb_info').innerText = pictureTips[0]; 
						break;
					default:
						$('eb_info').innerText = eb_info[6];
						break;
				}
				loadingFail=0;
			}
			else
			{
				operatableFlag=true;
				$('eb_info').innerText = eb_info[6];
				errorFlag = ERROR_AUDIO;
				focusTab = TIPS_AREA;
				multimedia.mediaStop(0);
				musicPlayStatus = S_END;
			}
			$('loadingBox').style.display = 'none';
			setErrorTips(1);
			break;
		
		case top.E_MEDIA_PLAY_ERROR_CANT_OPEN:  //无法打开文件/////////32961
			if(isStop == 1)
				break;
			errorFlag = ERROR_CANT_OPEN;
			$('eb_info').innerText = eb_info[4];//Can't open this file.
			setErrorTips(1);
			break;

		case top.E_MEDIA_PLAY_ERROR_FILE_NOT_EXIST:  //文件路径不存在
			if(isStop == 1)
				break;
			errorFlag = ERROR_FILE_NOT_EXIST;
			$('eb_info').innerText = eb_info[8];//File path does not exist
			setErrorTips(1);
			break;
		case top.E_PIC_NOT_AVAILABLE:  //播放不成功  Play error, please try again.
			if(isStop == 1)
				break;
			errorFlag = ERROR_PIC_NOT_AVAILABLE;
			$('eb_info').innerText = eb_info[5];//Play error, please try again.
			setErrorTips(1);
			break
			
		//一下是背景音乐播放的error信息
		case top.E_MEDIA_AUDIO_ERROR:
		case top.E_MEDIA_CUSTOM_AUDIO_NO_SUPPORT:
		case top.E_MEDIA_AUDIO_CANT_RECONGNIZE:
			//setErrorTips(ERROR_DEFAULT);
			operatableFlag=true;
			errorFlag = ERROR_AUDIO;
			$('eb_info').innerText = eb_info[2];//Audio format not supported.
			displayTipsBox(1);
			focusTab = TIPS_AREA;
			multimedia.mediaStop(0);
			musicPlayStatus = S_END;
			break;
			
		case top.E_WIRELESS_DEVICE_NO_FOUND: //32815
		//case top.E_WIRELESS_CONNECT_FAILURE:  //net connect failed
			console.log("zhangljun WIRELESS not connect ,g_lastEnterType:" + top.g_lastEnterType);
			if(top.g_lastEnterType == 1) //dlna type
			{
				errorFlag = ERROR_NET_DISCONNECTED;
				$('eb_info').innerText = netConnectFailText;
				setErrorTips(1);
			}
			else if(dmrFlag)  //dmr
			{
				errorFlag = ERROR_OTHER;
				$('eb_info').innerText = netConnectFailText;
				setErrorTips(1);
			}
			break;
		
		case top.E_MEDIA_PLAYER_STATUS_FORWORD: //ff
			//playStatus = "ff";
			break;
		case top.E_MEDIA_PLAYER_STATUS_BACKWORD: //fb
			//playStatus = "fb";
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
			if(musicPlayStatus != S_END && musicPlayStatus != -1)
			{
				multimedia.mediaStop(0);
			}
			multimedia.pictureStop(1);
			top.g_mediaPosition = 1;
			multimedia.stopThumbnailTask();
			top.$("main").src = "deviceList.html";
			break;
		case top.E_DMR_STOP:  //add yums 2014-10-20  //32996
			var begin = new Date().getTime();
			console.log("zhangljun top.E_DMR_STOP beginTime1:" + begin);
			clearTimeout(dmrExitTimer);
			top.g_temp="quickMenu";
			top.$("operatePage").src = "";
			top.$("otherPage").src = "";
			dmrExitTimer = setTimeout(function(){
				if(musicPlayStatus != S_END && musicPlayStatus != -1)
				{
					multimedia.mediaStop(0);
				}
				multimedia.pictureStop(1);
				multimedia.deviceExitUninit();
				multimedia.toRestoreSource(0, 0);
				top.$("main").src = "channelPlay.html";
				top.requestFocus(top.main, 1);
				}, 3000);
			
			break;
		case top.E_DLNA_DMR_PUSH_KODI:
		case top.E_DLNA_DMR_PUSH_YOUTUBE:
			isStop = 0;
			hideMenu(0);  
			showConsoleTipsArrow(0,0); 
			displayTipsBox(0);
			$('consoleTip').style.display = 'none';
			top.g_lastEnterType = -1;
			top.g_isMediaCenter = top.NDM_Others;

			if(musicPlayStatus != S_END && musicPlayStatus != -1)
			{
				multimedia.mediaStop(0);
			}
			multimedia.pictureStop(1);
			multimedia.stopThumbnailTask();
			multimedia.deviceExitUninit();
			top.g_temp = "";
			top.systemEventProc(evt);
			break;
		case top.E_DLNA_DMR_PUSH_MUSIC:  //add yums 2014-10-20
			clearTimeout(dmrExitTimer);
			if(musicPlayStatus != S_END && musicPlayStatus != -1)
			{
				multimedia.mediaStop(0);
			}
			multimedia.pictureStop(1);
			multimedia.stopThumbnailTask();
			top.$("main").src = "musicPlay.html?re_dmr";
			break;
		case top.E_DLNA_DMR_PUSH_MOVIE:	  //add yums 2014-10-20	
			clearTimeout(dmrExitTimer);
			if(musicPlayStatus != S_END && musicPlayStatus != -1)
			{
				multimedia.mediaStop(0);
			}
			multimedia.pictureStop(1);
			multimedia.stopThumbnailTask();
			top.$("main").src = "videoPlay.html?re_dmr";
			break;
		case top.E_DLNA_DMR_PUSH_PICTURE:
			clearTimeout(dmrExitTimer);
			if(onloadOk==0)
				return ;
			if(musicPlayStatus != S_END && musicPlayStatus != -1)
			{
				multimedia.mediaStop(0);
			}
			multimedia.pictureStop(1);
			multimedia.stopThumbnailTask();
			top.$("main").src = "picturePlay.html?re_dmr";
			break;
		case top.E_MEDIA_STREAM_BUFFERING: //buffering
			break;
		case top.E_MEDIA_STREAM_BUFFERING_COMPLETE: //buffering complete
			break;
		case top.E_MEDIA_STREAM_VIDEO_ONLY: //video only
			break;
		/*
		case top.E_MEDIA_VIDEO_AUDIO_LOOP_EXIT: //repeat-mode-normal: loop end
			top.$("main").src = top.g_previousHtmlPage;
			break;
		*/
		case top.E_MEDIA_DIVX_NOT_AUTH:
		{
			//doDivXPrompt(1);
			break;
		}
		case top.E_MEDIA_DIVX_NOT_RENTAL:
		{
			//doDivXPrompt(3);
			break;
		}
		case top.E_MEDIA_DIVX_NOT_EXPIRED:
		{
			//doDivXPrompt(2);
			break;
		}
		/*
		case top.E_DLNA_DMR_PUSH_PICTURE: //add yums:dmr push picture
		{
			multimedia.mediaStop(0);
			if(!dmrFlag)
			{
				multimedia.deviceExitUninit();
				multimedia.toRestoreSource(0, 0);
				top.systemEventProc(evt);
			}
			break;
		}
		*/			
		case top.E_THUMBNAIL_GENERATE: //media list data ready
		{
			refreshPlayList();
			/*
			var idx = evt.modifiers;
			var listImg = $("playList").getElementsByTagName('img');
			console.log("zhangljun currentPlayList[dix]:" + currentPlayList[idx].path);
			var picPath = multimedia.getThumbNail(currentPlayList[idx].path);
			


	
			console.log("zhangljun currentPlayList[dix]:" + currentPlayList[idx].path);
			console.log("zhangljun idx:" + idx);
			console.log("zhangljun playStart:" + playListStart);
			console.log("zhangljun picPath:" + picPath);
			if(idx >= playListStart && idx < (playListStart + 6) && (picPath != null && picPath != ""))
			{
				listImg[idx - playListStart].src = picPath;
			}
			*/
			break;
		}
		case top.E_MEDIA_PICTURE_RIGHT_EDGE:  //33109 //add yums:2014-10-30;
		{
			rightMost = true;
			$("zoomInImg").getElementsByTagName("img")[2].src = "images/USB-Icon-Arrow-zoomIn-right_Disable.png";
			break;
		}
		case top.E_MEDIA_PICTURE_LEFT_EDGE:  //33108
		{
			leftMost = true;
			$("zoomInImg").getElementsByTagName("img")[0].src = "images/USB-Icon-Arrow-zoomIn-left_Disable.png";
			break;
		}
		case top.E_MEDIA_PICTURE_DOWN_EDGE:
		{
			downMost = true;
			$("zoomInImg").getElementsByTagName("img")[3].src = "images/USB-Icon-Arrow-zoomIn-down_Disable.png";
			break;
		}
		case top.E_MEDIA_PICTURE_UP_EDGE:
		{
				upMost = true;
				$("zoomInImg").getElementsByTagName("img")[1].src = "images/USB-Icon-Arrow-zoomIn-up_Disable.png";
				break;
	    }

		case top.E_APP_PROCESS_INITIALIZATION:
			hideMenu(0,DISPLAY_AREA); //add yums：退出时立即隐藏因为菜单选项。
			showConsoleTipsArrow(0,0); 
			displayTipsBox(0);
			$('consoleTip').style.display = 'none';
			top.g_lastEnterType = -1;  //add yums 用于新接入设备盘符判断逻辑
			top.g_isMediaCenter = top.NDM_Others;
			if(musicPlayStatus != S_END && musicPlayStatus != -1)
			{
				multimedia.mediaStop(0);
			}
			multimedia.pictureStop(1);
			multimedia.stopThumbnailTask();
			multimedia.deviceExitUninit();
			multimedia.toRestoreSource(0, 0);
			top.systemEventProc(evt);
			break;
		case top.E_MEDIA_VIDEO_AUDIO_LOOP_EXIT: //repeat-mode-normal
			multimedia.mediaStop(0);
			musicPlayStatus = S_END;
			top.g_BGMmdiaFolderPath = "";
			$("BGMArea").style.display = "none";
			if(zoomNum > 0)
			{
				$("zoomInImg").style.display = "block";
				focusTab = ZOOM_AREA;
			}			
			else if(focusTab == BGM_AREA)
			{
				focusTab = DISPLAY_AREA;
			}
			break;
		case top.E_MEDIA_PLAYER_STATUS_RESUME_PLAYING://zhangljun 2015.08.26 目前没有该消息
			musicPlayStatus = S_PLAY;		
			$("musicP&P").src = "images/USB-Music-Control-icon-PauseFocus-S.png";
			break;
		case top.E_MEDIA_PLAYER_STATUS_PAUSE: //pause//32875 //只有音乐有该消息，图片没有
			musicPlayStatus = S_PAUSE;
			$("musicP&P").src = "images/USB-Music-Control-icon-PlayFocus-S.png";	
			//playStatus = "pause";
			break;
		case top.E_MEDIA_PLAYER_STATUS_PREPARED:
			console.log("zhangljun notifyProcess() E_MEDIA_PLAYER_STATUS_PREPARED p2="+value);

			if(value == 1)//图片为1，音频为0
			{
				multimedia.picturePlay();
			}
			else
			{
				multimedia.mediaPlay();
			}
			
			break;
		//case top.E_MEDIA_PICTURE_PLAY:  //32951
			//break;
			
		case top.E_MEDIA_PLAYER_STATUS_PLAYING: //playing   //32874 //图片和音乐统一消息
			console.log("zhangljun notifyProcess() E_MEDIA_PLAYER_STATUS_PLAYING value = "+value);
			//$('loadingBox').style.display = 'none';
			if(value == 1)//图片
			{	
				picPlayingTimeOut = true;		
				currentListPosition = multimedia.getNowPicturePosition();
				console.log("zhangljun currentListPosition:" + currentListPosition+" -- total length:"+currentPlayList.length);
				
				if(currentPlayList.length > 1)
				{
					if(currentListPosition == 0)
					{
						showLeftArrowFlage = 0;
						showRightArrowFlage = 1;
					}
					else if(currentListPosition == currentPlayList.length - 1)
					{
						showLeftArrowFlage = 1;
						showRightArrowFlage = 0;

					}
					else
					{
						showLeftArrowFlage = 1;
						showRightArrowFlage = 1;
					}
				}
				else
				{
					showLeftArrowFlage = 0;
					showRightArrowFlage = 0;
				}			


				if(dmrFlag)
				{
					showLeftArrowFlage = 0;
					showRightArrowFlage = 0;
				}

				if(firstEnterFlag && !dmrFlag)
				{
					firstEnterFlag = false;
			
					optionInfoArray[1] = multimedia.pictureRepeatMode;
					
					
					setPlayListMaxLength();
					
					if(top.g_MediaVideoPlayCount<=5)
					{
						$('consoleTip').style.display = "block";
						initSetTimeOut = setTimeout(function ()
						{
							$('consoleTip').style.display = "none";
							//bottomAreaDiv.style.display = "block";
							//showConsoleTipsArrow(showLeftArrowFlage,showRightArrowFlage);
						}, 3000);
					}
					else
					{
						//showConsoleTipsArrow(showLeftArrowFlage,showRightArrowFlage);
					}
					
					pptState = multimedia.getPicturePPTState(); //获取播放模式 0 表示非PPT播放， 1表示PPT播放模式
					if(pptState == 1)// add yums防止上次退出时是ppt模式。
					{
						multimedia.setPicturePPTState(0);
						pptState = 0;
					}
				}
				else
				{
					//showConsoleTipsArrow(showLeftArrowFlage,showRightArrowFlage);
				}
				
				//currentListPosition = multimedia.getNowPicturePosition();//add yums
				if(!dmrFlag)
				{
					var begin = new Date().getTime();
					pictureFileInfo = multimedia.getMediaPictureFileInfo(currentPlayList[currentListPosition].path,currentPlayList[currentListPosition].name,0);  //add yums:
					console.log("zhangljun E_MEDIA_PLAYER_STATUS_PLAYING getMediaPictureFileInfo cost time:" + (new Date().getTime() - begin));
					
					fillFileInformation(pictureFileInfo);
					
					top.g_currentMedia = pictureFileInfo;//add yums;  返回是需要用的信息。按back键退出到mediaList界面，焦点定位在当前播放的位置。
					top.g_mediaPosition = currentListPosition; //add yums;
				}
				//var img = $("thumbNail").getElementsByTagName("img");
				//console.log("zhangljun top.g_currentMedia.path:" + top.g_currentMedia.path);
				//img[0].src = "images/USB-picture-Default.png";
							
				//loadImage(img[0],currentPlayList[multimedia.getNowPicturePosition()].path,300,169);
			}
			else //音乐
			{
			if(focusTab==TIPS_AREA)
				return;

				operatableFlag=true;
				clearProgressArea();
				if(musicPlayStatus == S_PAUSE)
				{
					musicMenuBarList[2].src = "images/USB-Music-Control-icon-PauseFocus-S.png";
				}

				musicPlayStatus = S_PLAY;
				currentMusicFileInfo = multimedia.getCurrentPlayingMediaInfo();
				
				//console.log("zhangljun E_MEDIA_PLAYER_STATUS_PLAYING currentMusicFileInfo.path=" + currentMusicFileInfo.path);
				//console.log("zhangljun E_MEDIA_PLAYER_STATUS_PLAYING getCurrentPlayingMediaPosition=" + multimedia.getCurrentPlayingMediaPosition());
				
				fillCurrentPlayingMusicInfo(multimedia.getMediaMusicFileInfo(currentMusicFileInfo.path,currentMusicFileInfo.name));
				getMediaFileDuration(currentMusicFileInfo.path);
				if(progressBarTimer)
				{
					clearInterval(progressBarTimer);
				}
				
				progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
			}
			break;
		case top.E_MEDIA_FIRST_PREVIOUS:
			if(value == 1)
			{
				picPlayingTimeOut = true;
				clearTimeout(playTipsTimer);
				$("pictureTips").innerText = playTipsInfo[0];
				$('pictureMoveTips').style.display = 'block';
				playTipsTimer = setTimeout("$('pictureMoveTips').style.display = 'none';", 2000);
				console.log("---------ttstest---------ttsStr=" + playTipsInfo[0]);
				top.setTTSSay(top.SPEECH_TYPE_FLUSH, playTipsInfo[0]);
			}
		break;
		case top.E_MEDIA_LAST_NEXT:
			if(value == 1)
			{
				picPlayingTimeOut = true;
				clearTimeout(playTipsTimer);
				$("pictureTips").innerText = playTipsInfo[1];
				$('pictureMoveTips').style.display = 'block';
				playTipsTimer = setTimeout("$('pictureMoveTips').style.display = 'none';", 2000);
				console.log("---------ttstest---------ttsStr=" + playTipsInfo[1]);
				top.setTTSSay(top.SPEECH_TYPE_FLUSH, playTipsInfo[1]);
			}	
		break;
		case top.E_MEDIA_PICTURE_PLAY_EXIT:   //picture play exit //32808
		{
			if(dmrFlag) //add yums:dmr
			{
				return;
			}	
		
			$("LR_Tips").style.display = "none";
			hideMenu(0);
			if(musicPlayStatus != S_END && musicPlayStatus != -1)
			{
				multimedia.mediaStop(0);
			}
			multimedia.pictureStop(1);
			multimedia.stopThumbnailTask();
			top.$("main").src = "mediaList.html?media";
			//multimedia.createThumbnailTask(top.g_mediaFolderPath, 1, 0);  //付工商量，退出到mediaList中任务在mediaList中开启
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
		case top.E_DLNA_DMR_PUSH_KODI:
		case top.E_DLNA_DMR_PUSH_YOUTUBE:
			isStop = 0;
			hideMenu(0);  
			showConsoleTipsArrow(0,0); 
			displayTipsBox(0);
			$('consoleTip').style.display = 'none';
			top.g_lastEnterType = -1;
			top.g_isMediaCenter = top.NDM_Others;

			if(musicPlayStatus != S_END && musicPlayStatus != -1)
			{
				multimedia.mediaStop(0);
			}
			multimedia.pictureStop(1);
			multimedia.stopThumbnailTask();
			multimedia.deviceExitUninit();
			top.g_temp = "";
			return 2;
		case top.E_APP_PROCESS_INITIALIZATION:
			hideMenu(0,DISPLAY_AREA); 
			showConsoleTipsArrow(0,0); 
			displayTipsBox(0);
			$('consoleTip').style.display = 'none';
			top.g_lastEnterType = -1;  
			top.g_isMediaCenter = top.NDM_Others;
			if(musicPlayStatus != S_END && musicPlayStatus != -1)
			{
				multimedia.mediaStop(0);
			}
			multimedia.pictureStop(1);
			multimedia.stopThumbnailTask();
			multimedia.deviceExitUninit();
			multimedia.toRestoreSource(0, 0);
			return 2;
		case top.E_READY_TO_CHANGE_SCART: //add chencheng
		case top.E_READY_TO_CHANGE_CEC:   //add chencheng  svn 14533
			top.g_lastEnterType = -1;
			top.g_isMediaCenter = top.NDM_Others;
			if(musicPlayStatus != S_END && musicPlayStatus != -1)
			{
				multimedia.mediaStop(0);
			}
			multimedia.pictureStop(1);
			multimedia.stopThumbnailTask();
			multimedia.deviceExitUninit();
			multimedia.toRestoreSource(2, evt.modifiers);
			return 2;
		case top.E_MEDIA_USB_INSERTED://usb insert
		case top.E_NETWORK_CONNECT_TEST_SUCCESS:
		case top.E_NETWORK_CONNECT_TEST_FAIL:
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
	console.log("zhangljun toLeft focusTab:" + focusTab);
	if(focusTab == DISPLAY_AREA)
	{
		console.log("zhangljun toLeft picPlayingTimeOut:" + picPlayingTimeOut);
		if(!picPlayingTimeOut)
		{	
			return;
		}
		
		pptState = multimedia.getPicturePPTState();
		console.log("zhangljun toLeft pptState:" + pptState);
		if(pptState == 1)
		{
			multimedia.setPicturePPTState(0);
			pptState = 0;
			menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow.png";
			menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
			menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
			menuImgTag[3].src = "images/USB-Picture-Control-icon-Zoom+.png";
			menuImgTag[4].src = "images/USB-Picture-Control-icon-Zoom-.png";
			clearInterval(picPPTPlayTimeOut);
			picPPTPlayTimeOut = false;
		}
		
		console.log("zhangljun optionInfoArray[1]:" + optionInfoArray[1]);
		if(zoomNum < 0)
		{
			menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow.png";
			menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
			menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
			if(zoomNum==-3)
			{
				menuImgTag[4].src = "images/USB-Picture-Control-icon-Zoom-.png";
			}
			zoomNum = 0;
		}
		picPlayingTimeOut = false;
		playPre();
		$('pictureMoveTips').style.display = 'none';
		return;
	}
	else if(focusTab == MENU_AREA)//focus on playing
	{
		changeMenuFocus(-1);
		if(zoomNum != 0)
		{
			clearTimeout(zoomTimer);
			zoomTimer = setTimeout(function(){
				if(zoomNum > 0)
				{
					$("upTips").style.display = "none";
					menuBar.style.display = "none";
					$('bottomTips').style.display = "none";
					$("zoomInImg").style.display = "block";
					focusTab = ZOOM_AREA;
				}
				else
				{
					menuBar.style.display = "none";
					$('bottomTips').style.display = "none";
					focusTab = DISPLAY_AREA;
				}
				
			},5000)
			return;
		}
	}
	else if(focusTab == PLAY_LIST_AREA)
	{
		console.log("zhangljun toLeft() playListIndex:"+ playListIndex+" -- playListStart="+playListStart);
		
		if(playListIndex - 1 >= 0)
		{
			playListIndex--;
			$('focus').style.left = FOCUS_LEFT_DISTANCE + playListIndex * FOCUS_DISTANCE + "px";
			setPlayListFocus(playListIndex,playListIndex + 1);
		}
		else if(playListIndex == 0
			&& playListStart > 0)
		{
			playListStart--;
			//playListIndex = 5;//add yums
			$('focus').style.left = FOCUS_LEFT_DISTANCE + playListIndex * FOCUS_DISTANCE + "px"; //add yums
			refreshPlayList();
			setPlayListFocus(playListIndex,-1);
		}
		arrowPlayListDisplay(playListStart);  //add yums
	}
	else if(focusTab == OPTION_DETAIL_AREA)
	{
		focusTab = OPTION_AREA;
		resetFocusShape();
		$('listInfo').style.display = 'none';
		$('information').style.display = 'none';
		$("optionInfoList").style.display = 'none';
		$('listInfoBottomArrow').style.display = "none";
		$('listInfoUpArrow').style.display = "none";
		
		//$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + 3 + FOCUS_DISTANCE * optionIndex + "px";
		$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_DISTANCE * optionIndex + "px";
		$('optionInfoFocus').src = "images/Focus_USB_1.png"  //option中焦点变为可用
		startElementScroll(optionFirstMenuLi[optionIndex]);
		//setTimeout(function(){
			for(var i=0;i<inforListSpan.length;i++)
			{
				stopElementScroll(inforListSpan[i]);
			}
	//	},1)		
	
		hideMenu(15000, DISPLAY_AREA);
		return;

	}
	/*
	else if(focusTab == BGM_AREA)
	{
		changeBGMFocus(-1);
	}
	*/
	else if(focusTab == ZOOM_AREA)
	{
		if(leftMost)
		{	
			return;
		}
		else
		{
			leftMost = false;
			if(rightMost)
			{
				rightMost = false;
				$("zoomInImg").getElementsByTagName("img")[2].src = "images/USB-Icon-Arrow-zoomIn-right.png";
			}
			//pictureMoveTipsHasShowFlag = false;
			imageMove(img, "left");
			//getCurrentPicZoomRegion();//获取当前图片原图和放大后图片在电视窗口可视区域的坐标。
			//autoRePositionVisibleWindow();
			//autoRePositionThumbshade();
			return;
		}
		
		/*按UI设计要求，移动到边缘时，提示箭头变为灰色，不做却换图片操作  2014-11-21
		console.log("zhangljun leftMost:" + leftMost);
		console.log("zhangljun pictureMoveTipsHasShowFlag:" + pictureMoveTipsHasShowFlag);
		if(leftMost && pictureMoveTipsHasShowFlag)
		{
			$("thumbNail").style.display = "none";
			//$("pictureMoveTips").style.display = "none";
			leftMost = false;
			pictureMoveTipsHasShowFlag = false;
			console.log("zhangljun fffff 6:" + focusTab);
			focusTab = DISPLAY_AREA;
			zoomFlag = 0;
			zoomNum  = 0;
			top.setContext5In1Type(top.CONTEXT_PICTURE_PLAYER);
			setTimeout(function()
			{
				multimedia.playPreviousPicture();
			},50);
			return;
		}
		else if(leftMost)
		{	
			$("pictureMoveTips").getElementsByTagName("span")[0].innerHTML = pictureMoveTipsArray[1];
			$("pictureMoveTips").style.display = "block";
			pictureMoveTipsHasShowFlag = true;
			setTimeout(function(){
				$("pictureMoveTips").style.display = "none";
			},3000);
			return;
		}
		else
		{
			console.log("zhangljun move left");
			leftMost = false;
			if(rightMost)
				rightMost = false;
			pictureMoveTipsHasShowFlag = false;
			multimedia.pictureMove(MOVE_LEFT);
			//getCurrentPicZoomRegion();//获取当前图片原图和放大后图片在电视窗口可视区域的坐标。
			//autoRePositionVisibleWindow();
			//autoRePositionThumbshade();
			return;
		}
		*/
	}
	else if(focusTab == PRESET_AREA)
	{
		if(footballModeFlag)//add for football mode
		{
			hideMenu(FADE_TIME, DISPLAY_AREA);
			return;
		}
		stopElementScroll(picPresetListName[optionListIndex]);
		optionListIndex = parseInt((optionListIndex - 1 + OPTION_INFO_COUNT) % OPTION_INFO_COUNT, 10);
		previewPictureMode(pictureModeTransform(optionListIndex, 1));
		startElementScroll(picPresetListName[optionListIndex]);
		$('picturePresetFocus').style.left = FOCUS_LEFT_DISTANCE + FOCUS_DISTANCE * optionListIndex + "px";
		/*
		stopElementScroll(picturePresetBarSpan[optionListIndex + 1]);
		optionListIndex = parseInt((optionListIndex - 1 + OPTION_INFO_COUNT) % OPTION_INFO_COUNT, 10);
		//multimedia.setPicPicturePreset(optionListIndex); //add yums:移动焦点立即响应  change 2014-12-1
		setting.previewPictureMode(optionListIndex);  //add yums:2014-12-1
		$('focus').style.left = FOCUS_LEFT_DISTANCE + FOCUS_DISTANCE * optionListIndex + "px";
		//$('picturePresetContent').innerText = picturePresetArray[optionListIndex];
		startElementScroll(picturePresetBarSpan[optionListIndex + 1]);
		*/
	}
	else if(focusTab ==  TIPS_AREA)
	{
		return;
	}
	else if(focusTab == OPTION_BAR_AREA)
	{
		setOptionBarValue(-1);//t
	}
	else if(focusTab == LIST_AREA)
	{
		if($('iconListEmptyTips').style.display == 'block')
		{
			showIconEmptyTips(-1);
			return;
		}
		doSearchFileSelect(-1);
		
		return;
	}
	else if(focusTab == BGM_AREA)
	{
		changeMusicMenuBarSelect(0);
		return;
	}
	hideMenu(FADE_TIME, DISPLAY_AREA);
}

var picturePlayTimer = 0;
var PICTURE_PLAY_DELAY_TIME = 600; //ms

function toRight()
{
	if(focusTab == DISPLAY_AREA)
	{
		/*
		//$("loadingBox").style.display ="block";
		setTimeout(function(){
			multimedia.playNextPicture();
		},5);
		*/
		if(!picPlayingTimeOut)//播完当前图片才能播放下一张
		{	
			return;
		}
		
		pptState = multimedia.getPicturePPTState();
		if(pptState == 1)
		{
			multimedia.setPicturePPTState(0);
			pptState = 0;
			menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow.png";
			menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
			menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
			menuImgTag[3].src = "images/USB-Picture-Control-icon-Zoom+.png";
			menuImgTag[4].src = "images/USB-Picture-Control-icon-Zoom-.png";	
			clearInterval(picPPTPlayTimeOut);
			picPPTPlayTimeOut = false;
		}

		if(zoomNum < 0)
		{
			menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow.png";
			menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
			menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
			if(zoomNum==-3)
			{
				menuImgTag[4].src = "images/USB-Picture-Control-icon-Zoom-.png";
			}
			zoomNum = 0;
		}
		picPlayingTimeOut = false;
		playNext();
		$('pictureMoveTips').style.display = 'none';
		return;
	}
	else if(focusTab == MENU_AREA)//focus on playing
	{
		changeMenuFocus(1);
		if(zoomNum != 0)
		{
			clearTimeout(zoomTimer);
			zoomTimer = setTimeout(function(){
				if(zoomNum > 0)
				{
					$("upTips").style.display = "none";
					menuBar.style.display = "none";
					$('bottomTips').style.display = "none";
					$("zoomInImg").style.display = "block";
					focusTab = ZOOM_AREA;
				}
				else
				{
					menuBar.style.display = "none";
					$('bottomTips').style.display = "none";
					focusTab = DISPLAY_AREA;
				}
				
			},5000)
			return;
		}
	}
	else if(focusTab == PLAY_LIST_AREA)
	{
		console.log("zhangljun toRight() playListIndex:" + playListIndex+" -- playListStart:"+playListStart);
		console.log("zhangljun toRight() MAX_LENGTH_ONE_PAGE:" + MAX_LENGTH_ONE_PAGE+" -- list.length:"+currentPlayList.length);
		if(playListIndex + 1 < MAX_LENGTH_ONE_PAGE && (playListIndex + 1 + playListStart) < currentPlayList.length)
		{
			playListIndex++;
			$('focus').style.left = FOCUS_LEFT_DISTANCE + playListIndex * FOCUS_DISTANCE + "px";
			setPlayListFocus(playListIndex,playListIndex - 1);
		}
		/*
		else if(playListIndex == 5
			&& (playListStart + playListIndex + 1 < currentPlayList.length))
		*/
		else if(playListIndex == 5 && (playListStart + playListIndex + 1 < currentPlayList.length))
		{
			playListStart++;
			//playListIndex =0;
			refreshPlayList();
			$('focus').style.left = FOCUS_LEFT_DISTANCE + playListIndex * FOCUS_DISTANCE + "px"; //add yums
			setPlayListFocus(playListIndex,-1);
		}
		arrowPlayListDisplay(playListStart);
		
		
	}
	else if(focusTab == OPTION_AREA)
	{
		stopElementScroll(optionFirstMenuLi[optionIndex]);//add yums 2014-10-18
		if(optionIndex == PIC_PRESET_INDEX)//picture preset
		{
			if(footballModeFlag)
			{
				hideMenu(15000,DISPLAY_AREA);
				return;
			}
			changePicturePresetColor();
			for(var i = 0; i < picPresetCheckbox.length; i++)
			{
				picPresetCheckbox[i].style.display = 'none';
			}
			focusTab = PRESET_AREA;
			OPTION_INFO_COUNT = picPresetListName.length;
			optionListIndex = optionInfoArray[optionIndex];
			resetFocusShape();
			$('option').style.display = 'none';
			$('picturePresetBar').style.display = 'block';
			picPresetCheckbox[optionListIndex].style.display = 'block';
			startElementScroll($('picturePresetTitle'));
			startElementScroll(picPresetListName[optionListIndex]);
			/*
			$('picCheckBox').style.left = PIC_CHECK_BOX_LEFT_DISTANCE + 
				FOCUS_DISTANCE * optionListIndex +  "px";
			$('picturePresetBar').style.display = 'block';
			$('focus').style.left = FOCUS_LEFT_DISTANCE + 
				FOCUS_DISTANCE * optionListIndex + "px";
			startElementScroll(picturePresetBarSpan[optionListIndex + 1]);
			*/
		}
		else if(optionIndex == PIC_INFO_INDEX)//info
		{
			focusTab = OPTION_DETAIL_AREA;
			$('listInfo').style.display = 'none';
			$('listInfoBottomArrow').style.display = "none";
			$('listInfoUpArrow').style.display = "none";
			
			$('information').style.display = 'block';
			$('optionInfoList').style.display = 'block';
			$('optionInfoList').style.top = 60 + optionIndex * focusOptionHeight - 30 + "px";
			$('optionInfoList').style.height = 4 * focusOptionHeight + 30 * 2 + "px";    //
			$('information').style.top = 30 + "px";  //add yums option中二级菜单与一级对齐
			$('optionInfoFocus').src = "images/Focus_USB_1_.png"  //option中焦点变为不可用
			//var info = multimedia.getMediaPictureFileInfo(currentPlayList[2].path);  //add yums:
			//fillFileInformation(info);
			
			for(var i=0;i<informationSpan.length;i++)
			{
				startElementScroll(informationSpan[i]);
			}
			
			hideMenu(15000,DISPLAY_AREA);
			return;
		}
		else
		{
			switch(optionIndex)
			{
				case PIC_BACKLIGHT_INDEX:
				case PIC_BRIGHTNESS_INDEX:
				case PIC_CONTRAST_INDEX:
				case PIC_SATURATION_INDEX:
				case PIC_TINT_INDEX:
				case PIC_SHARPNESS_INDEX:
					if(footballModeFlag)//add for football mode
					{
						hideMenu(FADE_TIME, DISPLAY_AREA);
						return;
					}
					$('option').style.display = "none";
					optionFocusIndex_2 = optionInfoArray[optionIndex];
					displayOptionBarArea(getBarIndex(optionIndex));
					focusTab = OPTION_BAR_AREA;
					break;
				default:
					focusTab = OPTION_DETAIL_AREA;
					resetFocusShape();
					$("listInfo").style.top = 30 + "px";  //ad yums:option中二级菜单与一级对齐
					$('listInfo').style.display = 'block';
					$('information').style.display = 'none';
					$("optionInfoList").style.display = 'block';
					$('listInfoBottomArrow').style.display = "none";
					$('listInfoUpArrow').style.display = "none";
				
					if(optionIndex == PIC_EFFECT_INDEX || optionIndex == PIC_INFO_INDEX)
						$('optionInfoList').style.top = 60 + PIC_PLAYMODE_INDEX * focusOptionHeight - 32 + "px";
					else
						$('optionInfoList').style.top = 60 + optionIndex * focusOptionHeight - 32 + "px";
						
					fillOptionList(optionIndex);
					optionListIndex = optionInfoArray[optionIndex];

					if(optionIndex == PIC_EFFECT_INDEX)
					{
						$('optionInfoListFocus').style.top = 30 - 5 + effectFocus * focusOptionHeight + "px";
						if(effectStart == 0)
						{
							$('listInfoBottomArrow').style.display = "block";
							$('listInfoUpArrow').style.display = "none";
						}
						else if(effectStart == effectArray.length - 5)
						{
							$('listInfoBottomArrow').style.display = "none";
							$('listInfoUpArrow').style.display = "block";
						}
						else
						{
							$('listInfoBottomArrow').style.display = "block";
							$('listInfoUpArrow').style.display = "block";
						}
						//startElementScroll(inforListSpan[effectFocus]);
					}
					else
					{	
						$('optionInfoListFocus').style.top = 30 - 5 + optionListIndex * focusOptionHeight + "px";
						//startElementScroll(inforListSpan[optionListIndex]);
					}
					switch(optionIndex)
					{
						case PIC_PRESET_INDEX:
							OPTION_INFO_COUNT = picturePresetArray.length;
							break;
						case PIC_PLAYMODE_INDEX:
							OPTION_INFO_COUNT = playModeArray.length;
							break;
						case PIC_DURATION_INDEX:
							OPTION_INFO_COUNT = durationArray.length;
							break;
						case PIC_EFFECT_INDEX:
							OPTION_INFO_COUNT = effectArray.length;
							break;
						case PIC_INFO_INDEX:
							break;
					}
					if(OPTION_INFO_COUNT > 5)
					{
						$('optionInfoList').style.height =  5 * focusOptionHeight + 30 * 2 + "px";    //
					}
					else
					{
						$('optionInfoList').style.height =  OPTION_INFO_COUNT * focusOptionHeight + 30 * 2 + "px";    //
					}

					//hideMenu(15000,DISPLAY_AREA);
					return;
					//startElementScroll(inforListSpan[optionListIndex]);
					break;
			}
		}
	}
	//else if(focusTab == OPTION_DETAIL_AREA)
	//{
		//setSPOption();
	//}
	/*
	else if(focusTab == BGM_AREA)
	{
		changeBGMFocus(1);
	}
	*/
	else if(focusTab == ZOOM_AREA)
	{
		if(rightMost)
		{	
			return;
		}
		else
		{
			if(leftMost)
			{
				leftMost = false;
				$("zoomInImg").getElementsByTagName("img")[0].src = "images/USB-Icon-Arrow-zoomIn-left.png";
			}
			imageMove(img, "right");
			//getCurrentPicZoomRegion();//获取当前图片原图和放大后图片在电视窗口可视区域的坐标。
			//autoRePositionVisibleWindow();
			//autoRePositionThumbshade();
			return;
		}

		/*按UI设计要求，移动到边缘时，提示箭头变为灰色，不做却换图片操作  2014-11-21
		console.log("zhangljun rightMost:" + rightMost);
		console.log("zhangljun pictureMoveTipsHasShowFlag:" + pictureMoveTipsHasShowFlag);
		if(rightMost && pictureMoveTipsHasShowFlag)
		{
			$("thumbNail").style.display = "none";
			//$("pictureMoveTips").style.display = "none";
			menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow.png";
			menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
			menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
			rightMost = false;
			pictureMoveTipsHasShowFlag = false;
			console.log("zhangljun fffff 8:" + focusTab);
			focusTab = DISPLAY_AREA;
			zoomFlag = 0;
			zoomNum  = 0;
			top.setContext5In1Type(top.CONTEXT_PICTURE_PLAYER);
			setTimeout(function()
			{
				multimedia.playNextPicture();
			},50);
			return;
		}
		else if(rightMost)
		{	
			$("pictureMoveTips").getElementsByTagName("span")[0].innerHTML = pictureMoveTipsArray[0];
			$("pictureMoveTips").style.display = "block";
			pictureMoveTipsHasShowFlag = true;
			setTimeout(function(){
				$("pictureMoveTips").style.display = "none";
			},3000);
			return;
		}
		else
		{
			console.log("zhangljun move right");
			if(leftMost)
				leftMost = false;
			multimedia.pictureMove(MOVE_RIGHT);
			//getCurrentPicZoomRegion();//获取当前图片原图和放大后图片在电视窗口可视区域的坐标。
			//autoRePositionVisibleWindow();
			//autoRePositionThumbshade();
			return;
		}
		*/
	}
	else if(focusTab == PRESET_AREA)
	{
		if(footballModeFlag)//add for football mode
		{
			hideMenu(FADE_TIME, DISPLAY_AREA);
			return;
		}
		stopElementScroll(picPresetListName[optionListIndex]);
		optionListIndex = parseInt((optionListIndex + 1) % OPTION_INFO_COUNT, 10);
		previewPictureMode(pictureModeTransform(optionListIndex, 1));
		startElementScroll(picPresetListName[optionListIndex]);
		$('picturePresetFocus').style.left = FOCUS_LEFT_DISTANCE + FOCUS_DISTANCE * optionListIndex + "px";
		/*
		stopElementScroll(picturePresetBarSpan[optionListIndex + 1]);
		optionListIndex = parseInt((optionListIndex + 1) % OPTION_INFO_COUNT, 10);
		//multimedia.setPicPicturePreset(optionListIndex); //add yums:移动焦点实现响应
		setting.previewPictureMode(optionListIndex);  //add yums:2014-12-1
		$('focus').style.left = FOCUS_LEFT_DISTANCE + FOCUS_DISTANCE * optionListIndex + "px";
		//$('picturePresetContent').innerText = picturePresetArray[optionListIndex];
		startElementScroll(picturePresetBarSpan[optionListIndex + 1]);
		*/
	}
	else if(focusTab ==  TIPS_AREA)
	{
		return;
	}
	else if(focusTab == OPTION_BAR_AREA)
	{
		setOptionBarValue(1);//t
	}
	else if(focusTab == LIST_AREA)
	{
		if($('iconListEmptyTips').style.display == 'block')
		{
			showIconEmptyTips(-1);
			return;
		}
		doSearchFileSelect(1);
		return;
	}
	else if(focusTab == BGM_AREA)
	{
		changeMusicMenuBarSelect(1);
		return;
	}
	
	hideMenu(FADE_TIME, DISPLAY_AREA);
}

function toUp()
{
	console.log("zhangljun focusTab:" +focusTab);
	if(focusTab == OPTION_AREA)
	{
		//stopElementScroll(optionFirstMenuLi[optionIndex]);
		//$("optionInfo").getElementsByTagName("img")[optionIndex].src = "images/Icon-R-Disable.png";
		//optionIndex = parseInt((optionIndex + OPTION_COUNT - 1) % OPTION_COUNT, 10);
		setOptionFocusPosition(-1);
		$("optionInfoUl").style.top = - optionIndexStart * 80 + "px";
		$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_DISTANCE * optionIndex + "px";
		/*
		$("optionInfo").getElementsByTagName("img")[optionIndex].src = "images/Icon-R-Disable.png";
		optionIndex = parseInt((optionIndex + OPTION_COUNT - 1) % OPTION_COUNT, 10);
		$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_DISTANCE * optionIndex + "px";
		$("optionInfo").getElementsByTagName("img")[optionIndex].src = "images/Icon-R-Focus.png";
		startElementScroll(optionFirstMenuLi[optionIndex]);
		*/
		hideMenu(15000, DISPLAY_AREA);
		
		return;
	}
	else if(focusTab == ZOOM_AREA)
	{
		if(!upMost)
		{
			imageMove(img, "up");
			//getCurrentPicZoomRegion();//获取当前图片原图和放大后图片在电视窗口可视区域的坐标。
			//autoRePositionVisibleWindow();
			//autoRePositionThumbshade();
		}
		if(downMost)
		{
			downMost = false;
			$("zoomInImg").getElementsByTagName("img")[3].src = "images/USB-Icon-Arrow-zoomIn-down.png";
		}
		return;
	}
	else if(focusTab == OPTION_DETAIL_AREA)
	{
		console.log("zhangljun optionListIndex:"+optionListIndex);
		console.log("zhangljun OPTION_INFO_COUNT:"+OPTION_INFO_COUNT);
		if(optionIndex == PIC_INFO_INDEX) //add yums:解决在info上按上键焦点乱动问题
			return;
		/*
		if(optionIndex == PIC_EFFECT_INDEX)//effect
		{
			
			
			optionListIndex = optionListIndex - 1;
			if(optionListIndex < 0)
				optionListIndex = 0;
			console.log("zhangljun optionListIndex:" + optionListIndex);
			if(optionListIndex >= 5)
			{
				$('optionInfoListFocus').style.top = 30 - 5 + 4 * focusOptionHeight + "px";
				for(var i=0; i<5 ;i++)
				{
					inforListSpan[i].innerText = effectArray[optionListIndex + 1 - 5 + i];
				}
			}
			else
			{
				$('optionInfoListFocus').style.top = 30 - 5 + optionListIndex * focusOptionHeight + "px";
			}
			return;
		}
		*/
		if(optionIndex == PIC_EFFECT_INDEX)//effect
		{
			stopElementScroll(inforListSpan[effectFocus]);
			if(effectFocus + effectStart > 0)
			{
				effectFocus--;
				if(effectFocus < 0)
				{
					effectFocus = 0;
					if(effectStart > 0)
						effectStart--;
				}
			}
			
			console.log("zhangljun effectFocus--：" + effectFocus+" -- effectStart--:"+effectStart);
			optionListIndex = effectFocus + effectStart;
			$('optionInfoListFocus').style.top = 30 - 5 +  effectFocus * focusOptionHeight + "px";
			if(effectStart == 0)
			{
				$('listInfoBottomArrow').style.display = "block";
				$('listInfoUpArrow').style.display = "none";
			}
			else if(effectStart == effectArray.length - 5)
			{
				$('listInfoBottomArrow').style.display = "none";
				$('listInfoUpArrow').style.display = "block";
			}
			else
			{
				$('listInfoBottomArrow').style.display = "block";
				$('listInfoUpArrow').style.display = "block";
			}
			
			for(var i = 0 ; i< 5 ; i++)
			{
				inforListSpan[i].innerText = effectArray[effectStart + i];
			}
			startElementScroll(inforListSpan[effectFocus]);
			hideMenu(15000, DISPLAY_AREA);
			return;
		}
		stopElementScroll(inforListSpan[optionListIndex]);
		optionListIndex = parseInt((optionListIndex - 1 + OPTION_INFO_COUNT) % OPTION_INFO_COUNT, 10);
		$('optionInfoListFocus').style.top = 30 - 5 + optionListIndex * focusOptionHeight + "px";
		startElementScroll(inforListSpan[optionListIndex]);
		hideMenu(15000, DISPLAY_AREA);
		return;
	}
	else if(focusTab == MENU_AREA)
	{
		if(zoomNum > 0)
		{
			clearTimeout(zoomTimer);
			$("upTips").style.display = "none";
			menuBar.style.display = "none";
			$('bottomTips').style.display = "none";
			$("zoomInImg").style.display = "block";
			focusTab = ZOOM_AREA;
			return;
		}
		else  if(zoomNum < 0)
		{
			return;
		}
	}
	else if(focusTab == OPTION_BAR_AREA)
	{
		setOptionBarPosition(-1);
	}
	else if(focusTab == LIST_AREA)
	{
		if($('iconListEmptyTips').style.display == 'block')
		{
			showIconEmptyTips(-1);
			return;
		}
		changeSearchFileFocus(-1);
		return;
	}
	else if(focusTab == BGM_AREA)
	{
		//changeMusicMenuBarSelect(2);
		return;
	}

	hideMenu(FADE_TIME, DISPLAY_AREA);
}

function toDown()
{
	console.log("zhangljun toDown() focusTab:" + focusTab);
	if(focusTab == DISPLAY_AREA || focusTab == MENU_AREA || focusTab == INFO_AREA)//focus on playing
	{
		if(focusTab == MENU_AREA||onloadOk!=1)//add yums
			return;
		if(focusTab == DISPLAY_AREA || focusTab == INFO_AREA) //add yusm:处理playlist中获取不到缩略图
		{
			//add yums
			//currentListPosition = multimedia.getNowPicturePosition();//add yums
			if(focusTab == INFO_AREA)
				$("info").style.display = "none";
			console.log("zhangljun todown() currentListPosition:" + currentListPosition);
			top.setContext5In1Type(top.CONTEXT_MENU_SELECT);  //add yums2014-11-15 面板按键
			if(currentPlayList.length - 6 < 0)
			{
				playListStart = 0;
				playListIndex = currentListPosition - playListStart;
			}
			else
			{
				if(currentListPosition >=currentPlayList.length - 6)
				{
					playListStart = currentPlayList.length - 6;
					playListIndex = currentListPosition - playListStart;
				}
				else
				{
					playListStart = currentListPosition;
					playListIndex = 0
				}
			}
			//multimedia.pictureStop(0);    //add yums:
			//isStop = 1;  //add yums
		}
		
		focusTab = PLAY_LIST_AREA;
		menuBar.style.display = 'none';
		$('playList').style.display = 'block';
		arrowPlayListDisplay(playListStart);
		refreshPlayList();
		resetFocusShape();
		setPlayListFocus(playListIndex,-1); //add yums 2014-10-13;
		
		setTimeout(function(){
			multimedia.stopThumbnailTask();
			console.log("zhangljun picturePlay.js toDown() createThumbnailTask top.g_mediaFolderPath:" + top.g_mediaFolderPath);
			multimedia.createThumbnailTask(top.g_mediaFolderPath, 1, 0);
		},300)
		
	}
	
	else if(focusTab == PLAY_LIST_AREA)
	{
		/*
		$('playListRightArrow').style.display = "none";
		$('playListLeftArrow').style.display = "none";
		$('playList').style.display = 'none';
		$('focus').style.display = 'none';
		setTimeout(function(){
			hideMenu(0, DISPLAY_AREA);
		},50);
		
		//add yums:自动从当前位置开始播放
		*/
		return;
	}
	
	else if(focusTab == OPTION_AREA)
	{
		
		setOptionFocusPosition(1);//down
		/*
		if(optionIndex + 1 >= OPTION_COUNT)
		{
			optionIndexStart = 1;
		}
		else
		{
			optionIndexStart = 0;
			optionIndex = parseInt((optionIndex + 1) % OPTION_COUNT, 10);
		}
		*/
		$("optionInfoUl").style.top = - optionIndexStart * 80 + "px";
		$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_DISTANCE * optionIndex + "px";
		//optionIndex = parseInt((optionIndex + 1) % OPTION_COUNT, 10);
		//$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_DISTANCE * optionIndex + "px";
		//$("optionInfo").getElementsByTagName("img")[optionIndex].src = "images/Icon-R-Focus.png";
		//startElementScroll(optionFirstMenuLi[optionIndex]);
		hideMenu(15000, DISPLAY_AREA);
		return;
	}
	else if(focusTab == OPTION_DETAIL_AREA)
	{
		if(optionIndex == PIC_INFO_INDEX)  //info add yums:解决在info上按上键焦点乱动问题
		{	
			return;
		}
		
		/*
		if(optionIndex == PIC_EFFECT_INDEX)//effect
		{
			
			optionListIndex = optionListIndex + 1;
			if(optionListIndex >= effectArray.length)
				optionListIndex = effectArray.length - 1;
			console.log("zhangljun optionListIndex:" + optionListIndex);
			if(optionListIndex >= 5)
			{
				$('optionInfoListFocus').style.top = 30 - 5 + 4 * focusOptionHeight + "px";
				for(var i=0; i<5 ;i++)
				{
					inforListSpan[i].innerText = effectArray[optionListIndex + 1 - 5 + i];
				}
			}
			else
			{
				$('optionInfoListFocus').style.top = 30 - 5 + optionListIndex * focusOptionHeight + "px";
			}
			return;
		}
		*/
		
		if(optionIndex == PIC_EFFECT_INDEX)//effect
		{
			stopElementScroll(inforListSpan[effectFocus]);
			if(effectFocus + effectStart < effectArray.length - 1)
			{
				effectFocus++;
				if(effectFocus >= 5)
				{
					effectFocus = 4;
					effectStart++;
				}
			}
			console.log("zhangljun toDown() effectFocus：" + effectFocus+" -- effectStart: " + effectStart);

			optionListIndex = effectFocus + effectStart;
			$('optionInfoListFocus').style.top = 30 - 5 +  effectFocus * focusOptionHeight + "px";
			if(effectStart == 0)
			{
				$('listInfoBottomArrow').style.display = "block";
				$('listInfoUpArrow').style.display = "none";
			}
			else if(effectStart == effectArray.length - 5)
			{
				$('listInfoBottomArrow').style.display = "none";
				$('listInfoUpArrow').style.display = "block";
			}
			else
			{
				$('listInfoBottomArrow').style.display = "block";
				$('listInfoUpArrow').style.display = "block";
			}
			
			for(var i = 0 ; i< 5 ; i++)
			{
				inforListSpan[i].innerText = effectArray[effectStart + i];
			}
			startElementScroll(inforListSpan[effectFocus]);
			hideMenu(15000, DISPLAY_AREA);
			return;
		}
		
		stopElementScroll(inforListSpan[optionListIndex]);
		optionListIndex = parseInt((optionListIndex + 1) % OPTION_INFO_COUNT, 10);
		$('optionInfoListFocus').style.top = 30 - 5 + optionListIndex * focusOptionHeight + "px";
		startElementScroll(inforListSpan[optionListIndex]);
		hideMenu(15000, DISPLAY_AREA);
		return;
	}
	else if(focusTab == ZOOM_AREA)
	{
		if(downMost)
		{	
			return;
		}
		else
		{
			if(upMost)
			{
				upMost = false;
				$("zoomInImg").getElementsByTagName("img")[1].src = "images/USB-Icon-Arrow-zoomIn-up.png";
			}
			imageMove(img, "down");
			//getCurrentPicZoomRegion();//获取当前图片原图和放大后图片在电视窗口可视区域的坐标。
			//autoRePositionVisibleWindow();
			//autoRePositionThumbshade();
			return;
		}
		
		/*
		console.log("zhangljun downMost:" + downMost);
		console.log("zhangljun pictureMoveTipsHasShowFlag:" + pictureMoveTipsHasShowFlag);
		if(downMost && pictureMoveTipsHasShowFlag)
		{
			$("thumbNail").style.display = "none";
			//$("pictureMoveTips").style.display = "none";
			menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow.png";
			menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
			menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
			downMost = false;
			pictureMoveTipsHasShowFlag = false;
			zoomFlag = 0;
			zoomNum  = 0;
			
			//currentListPosition = multimedia.getNowPicturePosition();//add yums
			console.log("zhangljun todown() currentListPosition:" + currentListPosition);
			if(currentPlayList.length - 6 < 0)
			{
				playListStart = 0;
				playListIndex = currentListPosition - playListStart;
			}
			else
			{
				if(currentListPosition >=currentPlayList.length - 6)
				{
					playListStart = currentPlayList.length - 6;
					playListIndex = currentListPosition - playListStart;
				}
				else
				{
					playListStart = currentListPosition;
					playListIndex = 0
				}
			}
			//multimedia.pictureStop(0);    //add yums:
			isStop = 1;  //add yums
			console.log("zhangljun pictureStop(0)");
		
			focusTab = PLAY_LIST_AREA;
			menuBar.style.display = 'none';
			$('playList').style.display = 'block';
			arrowPlayListDisplay(playListStart);
			refreshPlayList();
			resetFocusShape();
			setPlayListFocus(playListIndex,-1); //add yums 2014-10-13;
			hideMenu(FADE_TIME, DISPLAY_AREA);
			multimedia.pictureStop(0);    //add yums:
			multimedia.stopThumbnailTask();
			multimedia.createThumbnailTask(top.g_mediaFolderPath, 1, 0);
			
			return;
		}
		else if(downMost)
		{	
			$("pictureMoveTips").getElementsByTagName("span")[0].innerHTML = pictureMoveTipsArray[2];
			$("pictureMoveTips").style.display = "block";
			pictureMoveTipsHasShowFlag = true;
			setTimeout(function(){
				$("pictureMoveTips").style.display = "none";
			},3000);
			return;
		}
		else
		{
			console.log("zhangljun move down");
			if(upMost)
				upMost = false;
			multimedia.pictureMove(MOVE_DOWN);
			//getCurrentPicZoomRegion();//获取当前图片原图和放大后图片在电视窗口可视区域的坐标。
			//autoRePositionVisibleWindow();
			//autoRePositionThumbshade();
			return;
		}
		
		*/
	}
	else if(focusTab == OPTION_BAR_AREA)
	{
		setOptionBarPosition(1);
	}
	else if(focusTab == LIST_AREA)//add yums 2015-3-4
	{
		
		if($('iconListEmptyTips').style.display == 'block')
		{
			showIconEmptyTips(-1);
			return;
		}
		changeSearchFileFocus(1);//
		return;
	}
	else if(focusTab == BGM_AREA)
	{
		//changeMusicMenuBarSelect(3);
		return;
	}
	
	
	hideMenu(FADE_TIME, DISPLAY_AREA);
	/*
	if(focusTab == DISPLAY_AREA)
	{
		setTimeout(function()  //3秒种自动恢复播放。
		{
			mediaPlay(currentPlayList[5].path);//从当前位置开始播放position= getNowPicturePosition()
		},3000);
	}
	*/
}

function setOptionFocusPosition(type)
{
	setOptionMenuFocus(-1,optionIndex);
	stopElementScroll(optionFirstMenuLi[optionIndex]);
	if(type == 1)//down
	{
		optionIndex++;
		if(optionFirstListLength <= OPTION_COUNT)
		{
			if(optionIndex >= optionFirstListLength)
			{
				optionIndex = 0;
			}	
		}
		else
		{
			if(optionIndex >= OPTION_COUNT && (optionIndex + optionIndexStart) < optionFirstListLength)
			{
				optionIndex = OPTION_COUNT - 1;
				optionIndexStart++;
			}
			else if((optionIndex + optionIndexStart) == optionFirstListLength)
			{
				optionIndex = 0;
				optionIndexStart = 0;
			}
		}
	}
	else if(type == -1)//up
	{
		optionIndex--;
		if(optionFirstListLength <= OPTION_COUNT)
		{
			if(optionIndex < 0)
			{
				optionIndex = optionFirstListLength - 1;
			}
		}
		else
		{
			if(optionIndex < 0)
			{
				if(optionIndexStart == 0)
				{
					optionIndex = OPTION_COUNT - 1;
					optionIndexStart = optionFirstListLength - OPTION_COUNT;
				}
				else
				{
					optionIndex = 0;
					optionIndexStart --;
				}
			}
		}
	}
	
	setOptionMenuFocus(optionIndex,-1);
	startElementScroll(optionFirstMenuLi[optionIndex]);
}

function toOK()//DISPLAY_AREA, OPTION_AREA, OPTION_DETAIL_AREA, PLAY_LIST_AREA, MENU_AREA
{
	console.log("zhangljun toOK() focusTab="+focusTab);
	if(focusTab == DISPLAY_AREA || focusTab == ZOOM_AREA)
	{
		focusTab = MENU_AREA;
		resetFocusShape();
		top.setContext5In1Type(top.CONTEXT_MENU_SELECT);  //add yums2014-11-15 面板按键
		$('focus').style.display = 'none';
		menuBar.style.display = 'block';
		$('bottomTips').style.display = "block";		
		if(zoomNum != 0) //add yums,
		{//从ZOOM_AREA状态点击OK 进入MENU_AREA，如果是放大情况 测显示upTips
			if(zoomNum > 0 && $("upTips").style.display == "none")
			{
				$("upTips").style.display = "block";
			}
			$("zoomInImg").style.display = "none";
			clearTimeout(zoomTimer);
			zoomTimer = setTimeout(function(){
				if(zoomNum > 0)
				{
					$("upTips").style.display = "none";
					menuBar.style.display = "none";
					$('bottomTips').style.display = "none";
					$("zoomInImg").style.display = "block";
					focusTab = ZOOM_AREA;
				}
				else
				{
					menuBar.style.display = "none";
					$('bottomTips').style.display = "none";
					focusTab = DISPLAY_AREA;
				}
				
			},5000)
			return;
		}
	}
	else if(focusTab == MENU_AREA)
	{
		doMenuSelect();
		if(zoomNum != 0) //add yums,
		{
			return;
		}
		
		if(menuFocusIndex == 5)
		{
			clearTimeout(menuTimer);
			menuBar.style.display = "none";
			return;
		}
	}
	else if(focusTab == PLAY_LIST_AREA)
	{
		//add yums :1、获取当前位置的图片的path，播放当前图片
		//clickFlageOnPlayList = 1;
		//hideMenu(0,DISPLAY_AREA);
		clearTimeout(menuTimer);  //add yums,解决DLNA中点击playList中播放图片被hidemenu抢去的情况
		top.setContext5In1Type(top.CONTEXT_PICTURE_PLAYER);  //add yums2014-11-15 面板按键
		$('playList').style.display = 'none';
		$('focus').style.display = 'none';
		$('playListRightArrow').style.display = 'none';
		$('playListLeftArrow').style.display = 'none';
		focusTab = DISPLAY_AREA;
		downMost = false;  //add yums 2014-11-14  为了解决狂按下键调出playlist选择一张播放，再放大后一向下移动弹出提示
		setTimeout(function(){
			//multimedia.stopThumbnailTask();
			multimedia.pictureStop(0);
			isStop = 1;
			console.log("zhangljun toOK() pictureOpen path:"+currentPlayList[playListStart + playListIndex].path);
			picPlayingTimeOut = false;
			pictureOpen(currentPlayList[playListStart + playListIndex].path);
			isStop = 0;		
		},30);  //add yums
		setPlayListFocus(-1,-1); //add yums 2014-10-13;
		//mediaPlay(currentPlayList[playListStart + playListIndex].path);
		//clickFlageOnPlayList = 0;  //此处不能付0 hideMenu会在其后执行；
		return;
	}
	else if(focusTab == OPTION_AREA)
	{
		toRight();
		return;
	}
	else if(focusTab == OPTION_DETAIL_AREA || focusTab == PRESET_AREA)
	{
		if(focusTab == PRESET_AREA)
		{
			setSPOption();
			return;
		}
		else
		{
			setSPOption();
		
			startElementScroll(optionFirstMenuLi[optionIndex]);
			hideMenu(15000, DISPLAY_AREA);
			return;
		}
	}
	/*
	else if(focusTab == BGM_AREA)//chencheng
	{
		switch(bgmFocusIndex)
		{
			case 0:
				multimedia.playPreMediaFile();
				break;
			case 1:
				if(bgmPlayStatus == S_PLAY)
				{
					bgmPlayStatus = S_PAUSE;
					multimedia.mediaPause();
					$('musicP&P').src = "images/USB-Music-Control-icon-PlayFocus-S.png";
				}
				else if(bgmPlayStatus == S_PAUSE)
				{
					bgmPlayStatus = S_PLAY;
					multimedia.mediaResume();
					$('musicP&P').src = "images/USB-Music-Control-icon-PauseFocus-S.png";
				}
				break;
			case 2:
				multimedia.playNextMediaFile();
				break;
		}
	}
	*/
	else if(focusTab == TIPS_AREA)//do not play, exit multimedia center
	{
		switch(errorFlag)
		{
			
			case ERROR_CANT_OPEN:    //无法打开文件
			case ERROR_PIC_NOT_AVAILABLE:  //播放不成功
			case ERROR_VIDEO_NOT_SUPPORT:  //播放的文件视频 或者 音频不支持。 建议处理方式：给出相应的提示信息，但是继续播放支持的
				/*考虑到can open跟背景音乐播放can open相同，暂停屏蔽
				//hideMenu(0);
				displayTipsBox(0);
				//multimedia.pictureStop(1);
				if(dmrFlag)
				{
					multimedia.pictureStop(1);
					multimedia.deviceExitUninit();
					multimedia.toRestoreSource(0, 0);
					top.$("main").src = "channelPlay.html";
					top.requestFocus(top.main, 1);	
				}
				else
				{
					if(currentPlayList.length == 1)
					{
						multimedia.pictureStop(1);
						multimedia.stopThumbnailTask();
						top.$("main").src = "mediaList.html?media";
					}
					else
					{
						focusTab = DISPLAY_AREA;
						picPlayingTimeOut = false;						
						multimedia.playNextPicture();
					}
				}
				break;
				*/
				top.g_BGMmdiaFolderPath = "";
			case ERROR_OTHER:   //其他错误，建议处理:退出本次播放
			case ERROR_FILE_NOT_EXIST:  //文件路径不存在，这个消息起保护作用，建议处理:退出本次播放
			case ERROR_VIDEO_ERROR ://播放过程中流数据存在问题，解码出错。 建议处理方式：退出本次播放
			case ERROR_VIDEO_CANT_RECONGNIZE:  //解码时，decoder判断出不支持，通常是格式支持，但是profile级别不支持。建议处理方式：退出本次播放
				hideMenu(0);
				displayTipsBox(0);
				if(musicPlayStatus != S_END && musicPlayStatus != -1)
				{
					multimedia.mediaStop(0);
				}
				multimedia.pictureStop(1);
				if(dmrFlag)
				{
					multimedia.deviceExitUninit();
					multimedia.toRestoreSource(0, 0);
					top.$("main").src = "channelPlay.html";
					top.requestFocus(top.main, 1);	
				}
				else
				{
					multimedia.stopThumbnailTask();
					top.$("main").src = "mediaList.html?media";
				}
				break;
			case ERROR_NET_DISCONNECTED:
				if(musicPlayStatus != S_END && musicPlayStatus != -1)
				{
					multimedia.mediaStop(0);
				}
				multimedia.pictureStop(1);
				multimedia.stopThumbnailTask();
				multimedia.deviceExitUninit();
				top.g_mediaPosition = 1;
				window.location.href = "deviceList.html?remove";
				break;
			case ERROR_AUDIO:
				multimedia.mediaStop(0);
				musicPlayStatus = S_END;
				console.log("error_audio");
				hideMenu(0, DISPLAY_AREA);
				displayTipsBox(0);
				$("BGMArea").style.display = "none";
				top.g_BGMmdiaFolderPath = "";
				break;
			default:
				break;
		
		}
		return;
	}
	else if(focusTab == LIST_AREA)//焦点在背景音乐文件索引菜单中时
	{
		toRight();
		return;
	}
	else if(focusTab == BGM_AREA)
	{
		doMusicMenuSelect();
		return;
	}

	hideMenu(FADE_TIME, DISPLAY_AREA);
}

function toHomePage()
{
	isStop = 0;
	hideMenu(0); //add yums：退出时立即隐藏因为菜单选项。
	showConsoleTipsArrow(0,0); 
	displayTipsBox(0);
	$('consoleTip').style.display = 'none';
	$('pictureMoveTips').style.display = 'none';
	top.g_lastEnterType = -1;
	top.g_isMediaCenter = top.NDM_Others;
	//setTimeout(function()
	//{
		if(musicPlayStatus != S_END && musicPlayStatus != -1)
		{
			multimedia.mediaStop(0);
		}
		multimedia.pictureStop(1);
		multimedia.stopThumbnailTask();
		multimedia.deviceExitUninit();
		top.$("main").src = top.getHomepage("?tv&media");
		top.requestFocus(top.main, 1);
	
	//},100)
	
}

function toBack()
{
	console.log("zhangljun toBack() focusTab="+focusTab+" -- dmrFlag="+dmrFlag);
	
	if(dmrFlag)  //add yums:dmr picture
	{
		top.g_lastEnterType = -1;
		top.g_isMediaCenter = top.NDM_Others;
		if(musicPlayStatus != S_END && musicPlayStatus != -1)
		{
			multimedia.mediaStop(0);
		}
		multimedia.pictureStop(1);
		multimedia.deviceExitUninit();
				  
		multimedia.toRestoreSource(0,0);
		top.$("main").src = "channelPlay.html";
		top.requestFocus(top.main, 1);
		return;
	}
	if(focusTab == DISPLAY_AREA)
	{
		//$("LR_Tips").style.display = "none";
		//multimedia.pictureStop(1);
		
		 
		//top.$("main").src = "mediaList.html?media";
		//setTimeout(function(){
		//	console.log("zhangljun toback stop_task");
			//multimedia.stopThumbnailTask();
			//multimedia.createThumbnailTask(top.g_mediaFolderPath, 1, 0);
		//},30);
		//top.$("main").src = "mediaList.html?media";
		$("LR_Tips").style.display = "none";
		$('pictureMoveTips').style.display = 'none';
		if(musicPlayStatus != S_END && musicPlayStatus != -1)
		{
			multimedia.mediaStop(0);
		}
		setTimeout(function()
		{
			multimedia.pictureStop(1);
			//if(currentMediaType == 1)
			//{
				multimedia.stopThumbnailTask();
				//multimedia.createThumbnailTask(top.g_mediaFolderPath, 1, 0);
			//}
			top.$("main").src = "mediaList.html?media";
		},50)


	}
	else if(focusTab == ZOOM_AREA)
	{
		focusTab = DISPLAY_AREA;
		var index = multimedia.getNowPicturePosition();
		pictureOpen(currentPlayList[index].path);
		rightMost = false; 
		leftMost  = false;
		downMost  = false;
		upMost    = false;
		pictureMoveTipsHasShowFlag = false;
		
		
		//隐藏鸟瞰图
		menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow.png";
		menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
		menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
		if(zoomNum==3)
		{
			menuImgTag[3].src = "images/USB-Picture-Control-icon-Zoom+.png";
		}
		zoomNum  = 0;
		
		$("upTips").style.display = "none";
		$("thumbNail").style.display = "none";
		//$("LR_Tips").style.display = "block";
		$("zoomInImg").style.display = "none";
		$("zoomInImg").getElementsByTagName("img")[0].src = "images/USB-Icon-Arrow-zoomIn-left.png";
		$("zoomInImg").getElementsByTagName("img")[1].src = "images/USB-Icon-Arrow-zoomIn-up.png";
		$("zoomInImg").getElementsByTagName("img")[2].src = "images/USB-Icon-Arrow-zoomIn-right.png";
		$("zoomInImg").getElementsByTagName("img")[3].src = "images/USB-Icon-Arrow-zoomIn-down.png";
		//$("thumbNail").getElementsByTagName("img")[0].style.marginTop   = 0 + "px";
		//$("thumbNail").getElementsByTagName("img")[0].style.marginLeft  = 0 + "px";
		//hideMenu(0, DISPLAY_AREA);
	}
	else if(focusTab == PRESET_AREA)
	{
		$('picturePresetBar').style.display = 'none';
		console.log("zhangljun toBack() optionInfoArray[0]" + optionInfoArray[0]);
		//multimedia.setPicPicturePreset(optionInfoArray[0]); //add yums 用户不按ok键，这回复原值
		//setting.previewPictureMode(pictureModeTransform(optionInfoArray[0], 1));  //add yums:2014-12-1
		focusTab = OPTION_AREA;
		//$('option').style.display = 'block';
		//resetFocusShape();
		//stopElementScroll(picturePresetBarSpan[optionListIndex + 1]);
		startElementScroll(optionFirstMenuLi[optionIndex]);
		stopElementScroll(picPresetListName[optionListIndex]);
		previewPictureMode(pictureModeTransform(optionInfoArray[0], 1));
		toOption(0);
		//hideMenu(15000, DISPLAY_AREA);
		return;
	}
	else if(focusTab == PLAY_LIST_AREA)
	{
		$('playList').style.display = 'none';
		$('focus').style.display = 'none';
		$('playListRightArrow').style.display = 'none';
		$('playListLeftArrow').style.display = 'none';
		focusTab = DISPLAY_AREA;
		downMost = false;
		setPlayListFocus(-1,-1);
		top.setContext5In1Type(top.CONTEXT_PICTURE_PLAYER);
		setTimeout(function(){
			multimedia.stopThumbnailTask();
			picPlayingTimeOut = false;
			playNext();
			isStop = 0;
		}, 30);
		
	}
	else if(focusTab == OPTION_DETAIL_AREA)
	{
		toLeft();
	}
	else if(focusTab == MENU_AREA && zoomNum > 0)
	{
		clearTimeout(zoomTimer);
		$("upTips").style.display = "none";
		menuBar.style.display = "none";
		$('bottomTips').style.display = "none";
		$("zoomInImg").style.display = "block";
		focusTab = ZOOM_AREA;
		return;
	}
	else if(focusTab == OPTION_AREA)
	{
		focusTab = DISPLAY_AREA;
		hideMenu(0, DISPLAY_AREA);
		if(pptStateBeforeToOption == 1)
		{
			multimedia.setPicturePPTState(1);
			pptState = 1;
			pptStateBeforeToOption = 0;
		}
		stopElementScroll(optionFirstMenuLi[optionIndex]);
	}
	else if(focusTab == TIPS_AREA)
	{
		toOK();
	}
	else if(focusTab == OPTION_BAR_AREA)
	{
		toOption(optionIndex);
	}
	else
	{
		focusTab = DISPLAY_AREA;
		hideMenu(0, DISPLAY_AREA);
	}
}

function toOption(index)
{
	optionIndex = index == -1 ? 0 : index;
	
	if(dmrFlag == true)   //add yums:dmr
	{
		return;
	}
	if($('option').style.display == "block")
	{
		focusTab = DISPLAY_AREA;
		hideMenu(0, DISPLAY_AREA);
		if(pptStateBeforeToOption == 1)
		{
			multimedia.setPicturePPTState(1);
			pptState = 1;
			pptStateBeforeToOption = 0;
		}
		stopElementScroll(optionFirstMenuLi[optionIndex]);
	}
	else
	{
		if(zoomNum != 0)  //如果是放大状态不调出option
			return;
		clearTimeout(zoomTimer);
		if(focusTab == PLAY_LIST_AREA||$('tipsBox').style.display == "block")
			return;
		if(focusTab == INFO_AREA)
		{
			$("info").style.display = "none";
		}
		top.setContext5In1Type(top.CONTEXT_MENU_SELECT);  //add yums2014-11-15 面板按键
		//optionIndex = 0;
		optionListIndex = 0;
		focusTab = OPTION_AREA;
		$('option').style.display = 'block';
		menuBar.style.display = 'none';
		$('bottomTips').style.display = "none";
		$('playList').style.display = 'none';
		$('optionBarArea').style.display = 'none';
		$('picturePresetBar').style.display = 'none';
		$('BGMArea').style.display = 'none';
		pptState = multimedia.getPicturePPTState();
		if(pptState == 1)
		{
			pptStateBeforeToOption = 1;
			multimedia.setPicturePPTState(0);
			pptState = 0;
		}
		
		resetFocusShape();
	//	optionInfoArray[0] = multimedia.getPicPicturePreset();//picture preset
		//optionInfoArray[1] = multimedia.pictureRepeatMode;//play mode
		//optionInfoArray[2] = multimedia.getPictureDuration();//duration
		//optionInfoArray[3] = multimedia.getPictureEffect();//effect
		
		//console.log("zhangljun optionInfoArray[3]:" + optionInfoArray[3]);
		
		//console.log("zhangljun toOption()optionInfoArray[0]:"+optionInfoArray[0]);
		//$('picturePresetContent').innerText = picturePresetArray[optionInfoArray[0]];
		//$('playModeContent').innerText = playModeArray[optionInfoArray[1]];
		//$('durationContent').innerText = durationArray[optionInfoArray[2]];
		//$('effectContent').innerText = effectArray[optionInfoArray[3]];
		$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_DISTANCE * optionIndex + "px";
		footballModeFlag = setting.footballMode;
		initListIndex();
		refreshOptionInfo();//获取option菜单中各选项的值
		fillOptionFirstList();
		changeOptionListColor();
		$('optionInfoFocus').src = "images/Focus_USB_1.png"
		//$("optionInfo").getElementsByTagName("img")[optionIndex].src = "images/Icon-R-Focus.png";
		setOptionMenuFocus(-1, -1);
		startElementScroll(optionFirstMenuLi[optionIndex]);
		
		testLog("second setting test");
		initListIndex();

		hideMenu(15000, DISPLAY_AREA);  //15秒后，option自动隐藏
	}
}
// setOptionMenuFocus(optionFocusIndex_1, -1)
//{
	//return 0;
//}

function refreshOptionInfo()//获取option菜单中各选项的值
{
	//optionInfoArray[PIC_PRESET_INDEX] = multimedia.getPicPicturePreset();//picture preset
	optionInfoArray[PIC_PRESET_INDEX] = pictureModeTransform(setting.pictureMode, 0);
	if(!footballModeFlag)
	{
		optionInfoArray[PIC_BACKLIGHT_INDEX] = setting.backLight;
		optionInfoArray[PIC_BRIGHTNESS_INDEX] = setting.brightness;
		optionInfoArray[PIC_CONTRAST_INDEX] = setting.contrast;
		optionInfoArray[PIC_SATURATION_INDEX] = setting.saturation;
		optionInfoArray[PIC_TINT_INDEX] = setting.hue;
		optionInfoArray[PIC_SHARPNESS_INDEX] = setting.sharpness;
	}
	//console.log("zhangljun PIC_PLAYMODE_INDEX:" + multimedia.pictureRepeatMode);
	optionInfoArray[PIC_PLAYMODE_INDEX] = multimedia.pictureRepeatMode;//play mode
	console.log("zhangljun PIC_PLAYMODE_INDEX:" + optionInfoArray[PIC_PLAYMODE_INDEX]);
	optionInfoArray[PIC_DURATION_INDEX] = multimedia.getPictureDuration();//duration
	optionInfoArray[PIC_EFFECT_INDEX] = multimedia.getPictureEffect();//effect
	
//	$('picturePresetContent').innerText = picturePresetArray[optionInfoArray[PIC_PRESET_INDEX]];
//	$('playModeContent').innerText = playModeArray[optionInfoArray[PIC_PLAYMODE_INDEX]];
//	$('durationContent').innerText = durationArray[optionInfoArray[PIC_DURATION_INDEX]];
//	$('effectContent').innerText = effectArray[optionInfoArray[PIC_EFFECT_INDEX]];
}

function fillOptionFirstList()//add yums:2015-1-26  //填充option 一级菜单中各选项的值
{
		$('picturePresetContent').innerText = picturePresetArray[optionInfoArray[PIC_PRESET_INDEX]];

	if(!footballModeFlag)
	{
		$("optionBackLight").getElementsByClassName("optionFirstListSpan_marquee")[0].innerText 
			= optionInfoArray[PIC_BACKLIGHT_INDEX];
		refreshBarArea($('optionBackLightBar').getElementsByTagName('div'), 
			optionInfoArray[PIC_BACKLIGHT_INDEX], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);

		$("optionBrightness").getElementsByClassName("optionFirstListSpan_marquee")[0].innerText 
			= optionInfoArray[PIC_BRIGHTNESS_INDEX];
		refreshBarArea($('optionBrightnessBar').getElementsByTagName('div'), 
			optionInfoArray[PIC_BRIGHTNESS_INDEX], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);
			
		$("optionContrast").getElementsByClassName("optionFirstListSpan_marquee")[0].innerText 
			= optionInfoArray[PIC_CONTRAST_INDEX];
		refreshBarArea($('optionContrastBar').getElementsByTagName('div'), 
			optionInfoArray[PIC_CONTRAST_INDEX], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);
			
		$("optionSaturation").getElementsByClassName("optionFirstListSpan_marquee")[0].innerText 
			= optionInfoArray[PIC_SATURATION_INDEX];
		refreshBarArea($('optionSaturationBar').getElementsByTagName('div'), 
			optionInfoArray[PIC_SATURATION_INDEX], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);
			
		$("optionTint").getElementsByClassName("optionFirstListSpan_marquee")[0].innerText 
			= optionInfoArray[PIC_TINT_INDEX];
		refreshBarArea($('optionTintBar').getElementsByTagName('div'), 
			optionInfoArray[PIC_TINT_INDEX], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);
			
		$("optionSharpness").getElementsByClassName("optionFirstListSpan_marquee")[0].innerText 
			= optionInfoArray[PIC_SHARPNESS_INDEX];
		refreshBarArea($('optionSharpnessBar').getElementsByTagName('div'), 
			optionInfoArray[PIC_SHARPNESS_INDEX], SHORT_BAR_MAX_VALUE, SHORT_BAR_LENGTH);
	}

	$('playModeContent').innerText = playModeArray[optionInfoArray[PIC_PLAYMODE_INDEX]];
	$('durationContent').innerText = durationArray[optionInfoArray[PIC_DURATION_INDEX]];
	$('effectContent').innerText = effectArray[optionInfoArray[PIC_EFFECT_INDEX]]

}

function fillOptionBarArea()
{
	$('backLightBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[PIC_BACKLIGHT_INDEX];
	$('brightnessBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[PIC_BRIGHTNESS_INDEX];
	$('contrastBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[PIC_CONTRAST_INDEX];
	$('saturationBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[PIC_SATURATION_INDEX];
	$('tintBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[PIC_TINT_INDEX];
	$('sharpnessBar').getElementsByClassName('optionBarValue')[0].innerText = optionInfoArray[PIC_SHARPNESS_INDEX];
	

	refreshBarArea($('backLightBar').getElementsByTagName('img'), optionInfoArray[PIC_BACKLIGHT_INDEX], 100, OPTION_BAR_LENGTH);
	refreshBarArea($('brightnessBar').getElementsByTagName('img'), optionInfoArray[PIC_BRIGHTNESS_INDEX], 100, OPTION_BAR_LENGTH);
	refreshBarArea($('contrastBar').getElementsByTagName('img'), optionInfoArray[PIC_CONTRAST_INDEX], 100, OPTION_BAR_LENGTH);
	refreshBarArea($('saturationBar').getElementsByTagName('img'), optionInfoArray[PIC_SATURATION_INDEX], 100, OPTION_BAR_LENGTH);
	refreshBarArea($('tintBar').getElementsByTagName('img'), optionInfoArray[PIC_TINT_INDEX], 100, OPTION_BAR_LENGTH);
	refreshBarArea($('sharpnessBar').getElementsByTagName('img'), optionInfoArray[PIC_SHARPNESS_INDEX], 100, OPTION_BAR_LENGTH);
	
}

function refreshBarArea(tmpBar, value, maxValue, length)
{
	tmpBar[1].style.width = value * length / maxValue + "px";
	tmpBar[2].style.left = value * length / maxValue + "px";
}

function displayOptionBarArrows(index)
{
	var tmpBarCount = 6;
	$('optionBarUpArrow').style.display = (index > 1 && index < tmpBarCount) ? 'block' : 'none';
	$('optionBarDownArrow').style.display = (index < tmpBarCount - 2 && index > 0) ? 'block' : 'none';
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
	
	displayOptionBarArrows(index);

	$('optionBarArea').style.display = 'block';
}

function getBarIndex(index)
{
	switch(index)
	{
		case PIC_BACKLIGHT_INDEX:
			return 0;
		case PIC_BRIGHTNESS_INDEX:
			return 1;
		case PIC_CONTRAST_INDEX:
			return 2;
		case PIC_SATURATION_INDEX:
			return 3;
		case PIC_TINT_INDEX:
			return 4;
		case PIC_SHARPNESS_INDEX:
			return 5;
		default:
			return 0;
	}
}

function setOptionBarPosition(type)
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
	optionFocusIndex_2 = optionInfoArray[optionIndex];
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

function getBarType(index)
{
	switch(index)
	{
		case 0:
			return PIC_BACKLIGHT_INDEX;
		case 1:
			return PIC_BRIGHTNESS_INDEX;
		case 2:
			return PIC_CONTRAST_INDEX;
		case 3:
			return PIC_SATURATION_INDEX;
		case 4:
			return PIC_TINT_INDEX;
		case 5:
			return PIC_SHARPNESS_INDEX;
		default:
			return PIC_BACKLIGHT_INDEX;
	}
}

function setOptionMenuFocus(currentIndex, lastIndex)//用于在option菜单中焦点移动前后失去、获取焦点的选项的属性设置
{
	for(var i = 0; i < optionMenuImg.length; i++)
	{
		optionMenuImg[i].src = "images/Icon-R-Focus.png";
	}
	if(PIC_PRESET_INDEX!=-1)
		optionFirstMenuLi[PIC_PRESET_INDEX].getElementsByClassName('optionFirstUlImg')[0].src = footballModeFlag 
			? "images/Icon-R-Disable.png" : "images/Icon-R-Focus.png";
	return;

	switch(currentIndex)
	{
		case PIC_PRESET_INDEX:
		case PIC_PLAYMODE_INDEX:
		case PIC_DURATION_INDEX:
		case PIC_EFFECT_INDEX:
		case PIC_INFO_INDEX:
			if(currentIndex < 0) break;
			optionFirstMenuLi[currentIndex].getElementsByClassName('optionFirstUlImg')[0].src = "images/Icon-R-Focus.png";
			break;
		default:
			break;
	}
	
	switch(lastIndex)
	{
		case PIC_PRESET_INDEX:
		case PIC_PLAYMODE_INDEX:
		case PIC_DURATION_INDEX:
		case PIC_EFFECT_INDEX:
		case PIC_INFO_INDEX:
			if(lastIndex < 0) break;
			optionFirstMenuLi[lastIndex].getElementsByClassName('optionFirstUlImg')[0].src = "images/Icon-R-Disable.png";
			break;
		default:
			break;
	}
	
	if(currentIndex == -1 && lastIndex == -1)
	{
		for(var i = 0; i < optionMenuImg.length; i++)
		{
			optionMenuImg[i].src = "images/Icon-R-Disable.png";
		}
	}
	//setOptionFocusScroll(currentIndex, lastIndex);
}


function changeBGMFocus(offset)
{
	switch(bgmFocusIndex)
	{
		case 0:
			$('musicPre').src = "images/USB-Music-Control-icon-Previous-S.png";
			break;
		case 1:
			if(bgmPlayStatus == S_PLAY)
			{
				$('musicP&P').src = "images/USB-Music-Control-icon-Pause-S.png";
			}
			else if(bgmPlayStatus == S_PAUSE)
			{
				$('musicP&P').src = "images/USB-Music-Control-icon-Play-S.png";
			}
			break;
		case 2:
			$('musicNext').src = "images/USB-Music-Control-icon-Next-S.png";
			break;
	}
	bgmFocusIndex = parseInt(((bgmFocusIndex + offset + 3) % 3), 10);
	switch(bgmFocusIndex)
	{
		case 0:
			$('musicPre').src = "images/USB-Music-Control-icon-PreviousFocus-S.png";
			break;
		case 1:
			if(bgmPlayStatus == S_PLAY)
			{
				$('musicP&P').src = "images/USB-Music-Control-icon-PauseFocus-S.png";
			}
			else if(bgmPlayStatus == S_PAUSE)
			{
				$('musicP&P').src = "images/USB-Music-Control-icon-PlayFocus-S.png";
			}
			
			break;
		case 2:
			$('musicNext').src = "images/USB-Music-Control-icon-Next-Focus-S.png";
			break;
	}
}

function setOptionBarValue(type)//[1]right [-1]left
{
	var tmpMax = SHORT_BAR_MAX_VALUE;
	if(type == 1)//right
	{
		optionFocusIndex_2 = (optionFocusIndex_2 + 1 > tmpMax) ? tmpMax : optionFocusIndex_2 + 1;
	}
	else//left
	{
		optionFocusIndex_2 = (optionFocusIndex_2 - 1 < 0) ? 0 : optionFocusIndex_2 - 1;
	}
	setBarValue(tmpMax);
}

function setBarValue(tmpValue)
{
	optionInfoArray[optionIndex] = optionFocusIndex_2;
	switch(optionIndex)
	{
		case PIC_BACKLIGHT_INDEX:
			setting.backLight = optionFocusIndex_2;
			break;
		case PIC_BRIGHTNESS_INDEX:
			setting.brightness = optionFocusIndex_2;
			break;
		case PIC_CONTRAST_INDEX:
			setting.contrast = optionFocusIndex_2;
			break;
		case PIC_SATURATION_INDEX:
			setting.saturation = optionFocusIndex_2;
			break;
		case PIC_TINT_INDEX:
			setting.hue = optionFocusIndex_2;
			break;
		case PIC_SHARPNESS_INDEX:
			setting.sharpness = optionFocusIndex_2;
			break;
		default:
			break;
	}
	refreshBarArea(optionBarNameArray[getBarIndex(optionIndex)].getElementsByTagName('img'), 
		optionFocusIndex_2, tmpValue, OPTION_BAR_LENGTH);
	optionBarNameArray[getBarIndex(optionIndex)].getElementsByClassName('optionBarValue')[0].innerText = optionFocusIndex_2;
}


function changeMenuFocus(offset)
{
	/*
	if(pptState == 1)  //add yums 幻灯片播放，焦点不能移动
	{
		return;
	}
	*/
	switch(menuFocusIndex)
	{
		case MENU_PLAY:
			/*
			if(playStatus == S_PLAY)
			{
				menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow.png";
			}
			else if(playStatus == S_PAUSE)
			{
				menuImgTag[0].src = "images/USB-Picture-Control-icon-SlidePause.png";
			}
			*/
			if(pptState == 0)
			{
				menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow.png";
			}
			else if(pptState == 1)
			{
				menuImgTag[0].src = "images/USB-Picture-Control-icon-SlidePause.png";
			}
			break;
		case MENU_R_ROTATE:
			menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
			break;
		case MENU_L_ROTATE:
			menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
			break;
		case MENU_ZOOM_IN:
			menuImgTag[3].src = "images/USB-Picture-Control-icon-Zoom+.png";
			break;
		case MENU_ZOOM_OUT:
			menuImgTag[4].src = "images/USB-Picture-Control-icon-Zoom-.png";
			break;
		case MENU_BGM:
			menuImgTag[5].src = "images/USB-Picture-Control-icon-Music.png";
			break;
	}
	
	if(zoomNum != 0) //add yums 如果为放大或者缩小状态，焦点只能在放大和缩小按钮上移动
	{
		if(offset != 0)
		{
			if(MENU_COUNT==6)
			{
				if(zoomNum==-3)
					menuFocusIndex=menuFocusIndex==5?3:5;
				else if(zoomNum==3)
					menuFocusIndex=menuFocusIndex==5?4:5;
				else
					menuFocusIndex = parseInt(((menuFocusIndex + offset) % 3), 10)+3;
			}
			else if(zoomNum!=-3&&zoomNum!=3)
			{
				if(menuFocusIndex == MENU_ZOOM_IN)
				{
					menuFocusIndex = MENU_ZOOM_OUT;
				}
				else if(menuFocusIndex == MENU_ZOOM_OUT)
				{
					menuFocusIndex = MENU_ZOOM_IN;
				}
			}
		}
	}
	else if(pptState == 1)//PPT播放时，可以选择音乐按钮
	{
		if(offset != 0&&MENU_COUNT==6)
		{
			if(menuFocusIndex == MENU_COUNT-1)
			{
				menuFocusIndex = 0;
			}
			else if(menuFocusIndex == 0)
			{
				menuFocusIndex =  MENU_COUNT-1;
			}
		}
	}
	else
	{
		menuFocusIndex = parseInt(((menuFocusIndex + offset + MENU_COUNT) % MENU_COUNT), 10);
	}
	
	switch(menuFocusIndex)
	{
		case MENU_PLAY:
		/*
			if(playStatus == S_PLAY)
			{
				menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow Focus.png";
			}
			else if(playStatus == S_PAUSE)
			{
				menuImgTag[0].src = "images/USB-Picture-Control-icon-SlidePause Focus.png";
			}
		*/
			if(pptState == 0)
			{
				menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow Focus.png";
			}
			else if(pptState == 1)
			{
				menuImgTag[0].src = "images/USB-Picture-Control-icon-SlidePause Focus.png";
			}
			
			break;
		case MENU_R_ROTATE:
			menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateRFocus.png";
			break;
		case MENU_L_ROTATE:
			menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateLFocus.png";
			break;
		case MENU_ZOOM_IN:
			menuImgTag[3].src = "images/USB-Picture-Control-icon-Zoom+Focus.png";
			break;
		case MENU_ZOOM_OUT:
			menuImgTag[4].src = "images/USB-Picture-Control-icon-Zoom-Focus.png";
			break;
		case MENU_BGM:
			menuImgTag[5].src = "images/USB-Picture-Control-icon-MusicFocus.png";
			break;
	}
}

function fillFileInformation(file)
{
	console.log("zhangljun file.name:" + file.name +" -- file.width:"+ file.width +" -- file.height:" + file.height);
	var tmp = (file.name != null && file.name != "") ? file.name : "Na";
	informationSpan[0].innerText = infoArray[0] + tmp;
	$("info").getElementsByTagName('span')[0].innerText = infoArray[0] + tmp;
	
	var tmpW = (file.width != null && file.width != "") ? file.width : "Na";
	var tmpH = (file.height != null && file.height != "") ? file.height : "Na";
	informationSpan[1].innerText = infoArray[1] + tmpW + " X " + tmpH;
	$("info").getElementsByTagName('span')[1].innerText = infoArray[1] + tmpW + " X " + tmpH;
	
	var tmp1 = (file.year != null && file.year != "") ? file.year : "Na";
	var tmp2 = (file.month != null && file.month != "") ? file.month : "Na";
	var tmp3 = (file.day != null && file.day != "") ? file.day : "Na";
	if(tmp2<10) tmp2 = "0" + tmp2;
	if(tmp3<10) tmp3 = "0" + tmp3;
	informationSpan[2].innerText = infoArray[2] + tmp3 + "/" + tmp2 + "/"+ tmp1;
	$("info").getElementsByTagName('span')[2].innerText = infoArray[2] + tmp3 + "/" + tmp2 + "/"+ tmp1;
	
	tmp = (file.path != null && file.path != "") ? file.path : "Na";
	informationSpan[3].innerText = infoArray[3] + tmp;
	$("info").getElementsByTagName('span')[3].innerText = infoArray[3] + tmp;
	
	if($("info").style.display == "block")
	{	
		for(var i=0;i<inforSpan.length;i++)
		{
			stopElementScroll(inforSpan[i]);
			
		}
		for(var i=0;i<inforSpan.length;i++)
		{
			startElementScroll(inforSpan[i]);
		}
	}
	
}

function fillOptionList(index)
{
	switch(index)
	{
		case PIC_PRESET_INDEX: //picture preset
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
		case PIC_PLAYMODE_INDEX://play mode
			for(var i = 0; i < playModeArray.length; i++)
			{
				inforListSpan[i].style.display = 'block';
				inforListSpan[i].innerText = playModeArray[i];
			}
			for(var i = playModeArray.length; i < inforListSpan.length; i++)
			{
				inforListSpan[i].style.display = 'none';
				inforListSpan[i].innerText = "";
			}
			break;
		case PIC_DURATION_INDEX://duration
			for(var i = 0; i < durationArray.length; i++)
			{
				inforListSpan[i].style.display = 'block';
				inforListSpan[i].innerText = durationArray[i];
			}
			for(var i = durationArray.length; i < inforListSpan.length; i++)
			{
				inforListSpan[i].style.display = 'none';
				inforListSpan[i].innerText = "";
			}
			break;
		case PIC_EFFECT_INDEX://effect
			optionListIndex = optionInfoArray[optionIndex];
			if(optionListIndex >= 0 && optionListIndex <= 4)
			{
				effectFocus = optionListIndex;
				effectStart = 0;
			}
			if(optionListIndex > 4)
			{
				effectFocus = 4;
				effectStart = optionListIndex - effectFocus;
			}
			
			for(var i = 0; i < (effectArray.length>5?5:effectArray.length); i++)
			{
				inforListSpan[i].style.display = 'block';
				inforListSpan[i].innerText = effectArray[effectStart + i];
			}
			for(var i = effectArray.length; i < inforListSpan.length; i++)
			{
				inforListSpan[i].style.display = 'none';
				inforListSpan[i].innerText = "";
			}
			break;
		case PIC_INFO_INDEX://info
			break;
	}
}

function setSPOption()
{
	switch(optionIndex)
	{
		case PIC_PRESET_INDEX://picture preset
			//multimedia.setPicPicturePreset(optionListIndex);
			setting.pictureMode=pictureModeTransform(optionListIndex, 1); 
			optionInfoArray[0] = optionListIndex;
			$('picturePresetContent').innerText = picturePresetArray[optionListIndex];
			toOption(0);
			/*
			$('picturePresetBar').style.display = 'none';  //add yums:点击ok实现隐藏。
			$('focus').style.display = 'none';
			focusTab = DISPLAY_AREA;		
			if(pptStateBeforeToOption == 1)
			{
				multimedia.setPicturePPTState(1);
				pptState = 1;
				pptStateBeforeToOption = 0;
			}
			//hideMenu(0, DISPLAY_AREA);
			*/
			return;
		case PIC_PLAYMODE_INDEX://repeat mode
			multimedia.pictureRepeatMode = optionListIndex;   //chen cheng
			//multimedia.setPictureRepeatMode(optionListIndex);
			$('playModeContent').innerText = playModeArray[optionListIndex];
			optionInfoArray[optionIndex] = optionListIndex;
			stopElementScroll(inforListSpan[optionListIndex]);
			break;
		case PIC_DURATION_INDEX://duration
			multimedia.setPictureDuration(optionListIndex);
			$('durationContent').innerText = durationArray[optionListIndex];
			optionInfoArray[optionIndex] = optionListIndex;
			stopElementScroll(inforListSpan[optionListIndex]);
			var intervalTime = pptPlayIntervalTime[optionListIndex];
			if(pptStateBeforeToOption)
			{
				clearInterval(picPPTPlayTimeOut);
				picPPTPlayTimeOut = false;
				picPPTPlayTimeOut = setInterval("setPicPPTPlay()", intervalTime);
			}
			break;
		case PIC_EFFECT_INDEX://effect
			multimedia.setPictureEffect(optionListIndex);
			imageEffect(optionListIndex);
			$('effectContent').innerText = effectArray[optionListIndex];
			optionInfoArray[optionIndex] = optionListIndex;
			stopElementScroll(inforListSpan[effectFocus]);
			break;
		case PIC_INFO_INDEX://info
			//$('information').style.display = 'none';
			toLeft();
			return;
			break;
	}
	$('optionInfoList').style.display = "none";
	focusTab = OPTION_AREA;
	resetFocusShape();
	$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + (optionIndex * focusOptionHeight) + "px";
	$('optionInfoFocus').src = "images/Focus_USB_1.png"  //option中焦点变为可用
}

function setPicPPTPlay()
{
	$("LR_Tips").style.display = "none";
	playNext();
	if(zoomNum != 0)
	{	
		menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow.png";
		menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
		menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
		if(zoomNum==3)
		{
			menuImgTag[3].src = "images/USB-Picture-Control-icon-Zoom+.png";
		}
		else if(zoomNum==-3)
		{
			menuImgTag[4].src = "images/USB-Picture-Control-icon-Zoom-.png";
		}
		
		zoomNum  = 0;
	}
	
	$("thumbNail").getElementsByTagName("img")[0].style.marginTop   = 0 + "px";
	$("thumbNail").getElementsByTagName("img")[0].style.marginLeft  = 0 + "px";
}

function doMenuSelect()
{
	console.log("zhangljun deMenuSelect() menuFocusIndex:"+menuFocusIndex);
	switch(menuFocusIndex)
	{
		case 0://play & pause	
			console.log("zhangljun deMenuSelect() pptState="+pptState);
			
			if(pptState == 0)  //add yums
			{
				if(playStatus == S_PAUSE)
				{
					playStatus = S_PLAY;
				}
				
				multimedia.setPicturePPTState(1);
				pptState = 1;  //multimedia.getPicturePPTState();
				menuImgTag[0].src = "images/USB-Picture-Control-icon-SlidePause Focus.png";
				menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR-Disable.png";
				menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL-Disable.png";
				menuImgTag[3].src = "images/USB-Picture-Control-icon-Zoom+-Disable.png";
				menuImgTag[4].src = "images/USB-Picture-Control-icon-Zoom--Disable.png";


				var index = multimedia.getPictureDuration();
				var intervalTime = pptPlayIntervalTime[index];
				console.log("zhangljun deMenuSelect() intervalTime="+intervalTime+"--index="+index);
				picPPTPlayTimeOut = setInterval("setPicPPTPlay()", intervalTime);  
			}
			else if(pptState == 1)
			{
				if(playStatus == S_PAUSE)
				{
					playStatus = S_PLAY;
				}
				multimedia.setPicturePPTState(0);
				pptState = 0; //multimedia.getPicturePPTState();
				clearInterval(picPPTPlayTimeOut);
				picPPTPlayTimeOut = false;
				menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow Focus.png";
				menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
				menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
				menuImgTag[3].src = "images/USB-Picture-Control-icon-Zoom+.png";
				menuImgTag[4].src = "images/USB-Picture-Control-icon-Zoom-.png";
			}
			
			break;
		case 1://left rotate
			//multimedia.picturePause();
			//playStatus = S_PAUSE;
			imageRotate(img,1);
			break;
		case 2://right rotate
			//multimedia.picturePause();
			//playStatus = S_PAUSE;
			imageRotate(img,-1);
			break;
		case 3://zoom +
		{
			console.log("zhangljun deMenuSelect() zoomNum="+zoomNum);
			if(zoomNum < 3)
			{
				zoomNum++;
				if(zoomNum>0)//判断当前点击zoom+ zoom-的总次数
				{
						menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow Disable.png";
						menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR-Disable.png";
						menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL-Disable.png";
						$("LR_Tips").style.display = "none";
						$("upTips").style.display = "block";
						clearTimeout(menuTimer);
				}
				else if(zoomNum < 0)
				{
					$("upTips").style.display = "none";
					$("thumbNail").style.display = "none";
					clearTimeout(menuTimer);
				}
				else
				{
					menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow.png";
					menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
					menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
					$("upTips").style.display = "none";
					$("thumbNail").style.display = "none";
				}
				menuImgTag[4].src = "images/USB-Picture-Control-icon-Zoom-.png";
				imageScale(img,1);
				
			}
			if(zoomNum==3) 
			{
					menuImgTag[3].src = "images/USB-Picture-Control-icon-Zoom+-Disable.png";
					menuImgTag[4].src = "images/USB-Picture-Control-icon-Zoom-Focus.png";
					menuFocusIndex=4;
			}
			clearTimeout(zoomTimer);
			zoomTimer = setTimeout(function(){
				if(zoomNum > 0)
				{
					$("upTips").style.display = "none";
					menuBar.style.display = "none";
					$('bottomTips').style.display = "none";
					$("zoomInImg").style.display = "block";
					focusTab = ZOOM_AREA;
				}
				else
				{
					menuBar.style.display = "none";
					$('bottomTips').style.display = "none";
					focusTab = DISPLAY_AREA;
				}
				
			},5000)
			return;
			break;
		}
		case 4://zoom -
		{
			console.log("zhangljun deMenuSelect() zoomNum="+zoomNum);
			if(zoomNum > -3)
			{
				zoomNum--;
				if(zoomNum != 0)
				{
					//slidshow rocateL  rocateR 变为不可用
					menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow Disable.png";
					menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR-Disable.png";
					menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL-Disable.png";
					clearTimeout(menuTimer);
				}
				else
				{
					////slidshow rocateL  rocateR 变为可用
					menuImgTag[0].src = "images/USB-Picture-Control-icon-Slideshow.png";
					menuImgTag[1].src = "images/USB-Picture-Control-icon-RotateR.png";
					menuImgTag[2].src = "images/USB-Picture-Control-icon-RotateL.png";
					
					$("upTips").style.display = "none";
					$("thumbNail").style.display = "none";
					//$("LR_Tips").style.display = "block";
				}
				menuImgTag[3].src = "images/USB-Picture-Control-icon-Zoom+.png";					
				imageScale(img,-1);
			}
			if(zoomNum==-3) 
			{
					menuImgTag[3].src = "images/USB-Picture-Control-icon-Zoom+Focus.png";
					menuImgTag[4].src = "images/USB-Picture-Control-icon-Zoom--Disable.png";
					menuFocusIndex=3;
			}
				
			clearTimeout(zoomTimer);
			zoomTimer = setTimeout(function(){
				if(zoomNum > 0)
				{
					$("upTips").style.display = "none";
					menuBar.style.display = "none";
					$('bottomTips').style.display = "none";
					$("zoomInImg").style.display = "block";
					focusTab = ZOOM_AREA;
				}
				else
				{
					menuBar.style.display = "none";
					$('bottomTips').style.display = "none";
					focusTab = DISPLAY_AREA;
				}
			},5000)
			return;	
			break;
		}
		case 5://bmg
			clearTimeout(zoomTimer);
			if(top.g_BGMmdiaFolderPath == null || top.g_BGMmdiaFolderPath == "")
			{
				$("upTips").style.display = "none";
				doOpenSearchFile();
			}
			else 
			{
				g_mediaFolderPath = top.g_BGMmdiaFolderPath;
				currentList = getFileList(g_mediaFolderPath, 0, -1);
				setPageListVCount();
				listIndex = top.g_BGMmediaListIndex;
				listStart = top.g_BGMmediaListStart;
				g_path = top.g_BGMmediaPath;
				g_listIndex = top.g_BGMmediaPathIndex;
				fileListDepth = top.g_fileListDepth;
				
				if(musicPlayStatus != -1)
				{
					menuBar.style.display = "none";
					$("BGMArea").style.display = "block";
					focusTab = BGM_AREA;
				}
				else 
				{
					multimedia.mediaStop(0);
					musicPlayStatus = S_END;
					clearProgressArea();
					doMusicPlay(currentList[listIndex + listStart].path);
				}
				
				if(multimedia.getMediaFileParser() == 1)
				{
					g_mediaFolderPath = "";
					listIndex = 0;
					listStart = 0;
					g_path = "";
					g_listIndex = "";
				}
			}
			return;
			break;
		default:
			break;
	}
	hideMenu(FADE_TIME, DISPLAY_AREA);
}

function resetFocusShape()
{
	switch(focusTab)
	{
		case DISPLAY_AREA:
			break;
			
		case OPTION_AREA:
			$('focus').style.display = "none";
			$('optionInfoListFocus').style.display="none";
			$('optionInfoFocus').style.display = "block";
			FOCUS_DISTANCE = 80;
			FOCUS_TOP_DISTANCE = 55;
			$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + "px";
			$('optionInfoFocus').style.left = 5 + "px";
			$('optionInfoFocus').style.width = 530 + "px";
			$('optionInfoFocus').style.height = 70 + "px";
			break;
			
		case OPTION_DETAIL_AREA:
			$('focus').style.display = "none";
			$('optionInfoFocus').src = "images/Focus_USB_1_.png"  //option中焦点变为不可用
			$('optionInfoListFocus').style.display = "block"
			FOCUS_DISTANCE = 80;
			FOCUS_TOP_DISTANCE = 55;
			$('optionInfoListFocus').style.top = 103 + 3 + "px";
			$('optionInfoListFocus').style.left = 0 + "px";
			$('optionInfoListFocus').style.width = 300 + "px";
			$('optionInfoListFocus').style.height = 70 + "px";
			break;
			
		case PLAY_LIST_AREA:	
			//$('focus').src = "images/Focus-picture.png";
			$('focus').src = "images/USB-Picture-Thumbnail-Focus.png";
			$('focus').style.display = "block";
			FOCUS_DISTANCE = 300;
			FOCUS_LEFT_DISTANCE = 72;
			$('focus').style.top = 780 + "px";
			$('focus').style.left = FOCUS_LEFT_DISTANCE + playListIndex * FOCUS_DISTANCE + "px";
			$('focus').style.width = 276 + "px";
			$('focus').style.height = 290 + "px";
			break;
			
		case BGM_AREA:
			bgmFocusIndex = 1;
			FOCUS_DISTANCE = 157;
			FOCUS_LEFT_DISTANCE = 760;
			$('focus').style.top = 579 + "px";
			$('focus').style.left = FOCUS_LEFT_DISTANCE + FOCUS_DISTANCE + "px";
			$('focus').style.width = 86 + "px";
			$('focus').style.height = 86 + "px";
			break;
			
		case PRESET_AREA:
			$('focus').style.display = 'none';
			FOCUS_DISTANCE = 230;
			FOCUS_LEFT_DISTANCE = 318;//325;
			$('picturePresetFocus').style.left = FOCUS_LEFT_DISTANCE + FOCUS_DISTANCE * optionListIndex + "px";
			break;
			/*
			$('focus').style.position = 'absolute';
			$('focus').style.display = "block";
			$('focus').src = "images/Focus_USB_2.png";
			FOCUS_DISTANCE = 231;
			FOCUS_LEFT_DISTANCE = 225 + 312 + 15 + 3 - 10;
			$('focus').style.top = 1080 - 70 - 90 + 16 + 3 + "px";
			$('focus').style.left = FOCUS_LEFT_DISTANCE + "px";
			$('focus').style.width = 225 + "px";
			$('focus').style.height = 90 - 32 + "px";
			break;
			*/
			
		case MENU_AREA:  //add yums
			changeMenuFocus(0);
			break;
		case LIST_AREA:
			$('focus').src = "images/BGM_Focus.png";
			$('focus').style.display = "block";
			FOCUS_DISTANCE = 630;//GUI中给出的背景音乐中文件索引菜单中焦点的坐标
			FOCUS_LEFT_DISTANCE = 72;
			$('focus').style.top = topDistance + "px";//GUI中给出的背景音乐中文件索引菜单中焦点的坐标
			//$('focus').style.left = FOCUS_LEFT_DISTANCE + playListIndex * FOCUS_DISTANCE + "px";
			$('focus').style.left = 630 + "px";
			$('focus').style.width = 700 + "px";
			$('focus').style.height = 94 + "px";
			break;
		
		default:
			$('focus').style.display = "none";
			break;
	}
}

function setPlayListMaxLength()
{
	var length = currentPlayList.length;
	if(length > 6)
	{
		MAX_LENGTH_ONE_PAGE = 6;
	}
	else
	{
		MAX_LENGTH_ONE_PAGE = length;
	}
}

function getMediaFileDuration(path)
{
	fileDuration = multimedia.getMediaFileDuration(path);
	console.log("zhangljun getMediaFileDuration fileDuration = "+fileDuration);
	if(fileDuration < 0)
	{
		fileDuration = 0;
	}
	return doTime(fileDuration);
}

function hideOptionMenu()
{
	stopElementScroll(optionFirstMenuLi[optionIndex]);
	//$("optionInfo").getElementsByTagName("img")[optionIndex].src="images/Icon-R-Disable.png";
	setOptionMenuFocus(-1,-1);
	$('option').style.display = 'none';
	for(var i=0;i<informationSpan.length;i++)
	{
		stopElementScroll(informationSpan[i]);
	}
	for(var j=0;j<inforListSpan.length;j++)
	{
		stopElementScroll(inforListSpan[j]);
	}
}

function hideMenu(time, area)
{
	clearTimeout(menuTimer);
	console.log("zhangljun hideMenu time:" + time+" -- area:"+area);
	menuTimer = setTimeout(function(){
		top.setContext5In1Type(top.CONTEXT_PICTURE_PLAYER);
		if($('playList').style.display=="block")
			setPlayListFocus(-1,-1);	
		menuBar.style.display = 'none';
		$('bottomTips').style.display = "none";
		$('playListRightArrow').style.display = "none";
		$('playListLeftArrow').style.display = "none";
		$('focus').style.display = 'none';
		//$('option').style.display = 'none';
		hideOptionMenu();  //隐藏option菜单，并停止其中的滚动效果
		$("optionBarArea").style.display = "none";
		$('BGMArea').style.display = 'none';
		$('playList').style.display = 'none';
		$('optionInfoList').style.display = 'none';
		$('optionInfoFocus').style.display = 'none';
		$('picturePresetBar').style.display = 'none';
		$('info').style.display = 'none';
		$('upTips').style.display = 'none';
		//$("LR_Tips").style.display = "none";
		$('thumbNail').style.display = 'none';
		$("zoomInImg").style.display = "none";
		$("searchFile").style.display = "none";
		
		showIconEmptyTips(-1);
		//$("tipsBox").style.display = "none";
		//console.log("zhangljun hideMenu() focusTab:"+focusTab);
		if(pptStateBeforeToOption == 1)
		{
			multimedia.setPicturePPTState(1);
			pptState = 1;
			pptStateBeforeToOption = 0;
		}
		
		if(focusTab == PRESET_AREA)
		{
			//multimedia.setPicPicturePreset(optionInfoArray[0]); 
			setting.previewPictureMode(optionInfoArray[0]);  //add yums:2014-12-1
		}
		
		if (focusTab == PLAY_LIST_AREA)
		{
			//console.log("zhangljun clickFlageOnPlayList:"+clickFlageOnPlayList);
			multimedia.stopThumbnailTask();
			if(isStop == 1)
			{
				downMost = false;
				setPlayListFocus(-1,-1);
				//mediaPlay(currentPlayList[currentListPosition].path);//从当前位置开始播放position= getNowPicturePosition()
				picPlayingTimeOut = false;
				playNext();
				isStop = 0;
			}
		}		
		
		
		//clickFlageOnPlayList = 0;
		focusTab = area;
		if(zoomNum > 0)
		{
			$("zoomInImg").style.display = "block";
			focusTab = ZOOM_AREA;
		}
		
	}, time);
	//console.log("hideMenu  menuTimer:" + menuTimer);
}

function refreshPlayList()
{
	var startPosition = playListStart;//add yums:startPage 去缩略图的起始位置页
	var length = currentPlayList.length;
	
	//console.log("zhangljun refreshPlayList() playListStart:"+playListStart);
	//console.log("zhangljun currentPlayList.length:"+ length);
	
	var listSpan = $('playList').getElementsByTagName('span');
	var listImg = $('playList').getElementsByTagName('img');
	
	/*
	for(var i = 0; i < (length-start > 5?6:(length-start)); i++)
	{
		if(i > MAX_LENGTH_ONE_PAGE - 1)
		{
			listSpan[i].style.display = "none";
			listImg[i].style.display = "none";
			continue;
		}
		listSpan[i].style.display = "block";
		listImg[i].style.display = "block";
		
		var num = start + i;  //add yums
		
		console.log("zhangljun refreshPlayList() currentPlayList" + num +currentPlayList[start + i].path);
		var tmp = multimedia.getPicThumbNail(currentPlayList[start+i].path,6,250,250);//add yums  取缩略图
		
		listImg[i].src = tmp;  //add yums;
		
		listSpan[i].innerText = currentPlayList[start + i].name;
		//listImg[i].src = currentPlayList[start + i].img;
	}
	*/
	
	for(var i = 0; i<6 ; i++) //add yums:重新更新playlist中的内容，防止翻到最后一页时出现问题。
	{
		listImg[i].src = "";  //add yums;
		listSpan[i].innerText = "";
		listSpan[i].style.display = "none";
		listImg[i].style.display = "none";
	}

	//var num = ((length - startPage*6 ) <6) ? (length - startPage*6):6;//add yums:非最后一页，playlist大小为6，最后一页playlist大小为length - 页数*6
	var num = ((length - startPosition) < 6) ? (length - startPosition):6;
	
	for (var i = 0; i< num; i++)
	{
		if(i > MAX_LENGTH_ONE_PAGE - 1)
		{
			listSpan[i].style.display = "none";
			listImg[i].style.display = "none";
			continue;
		}
		listSpan[i].style.display = "block";
		listImg[i].style.display = "block";
		
		//console.log("zhangljun refreshPlayList() [" + num + "]:"+(startPosition + i)+" --- path:"+currentPlayList[startPosition + i].path);
		
		var tmpPicPath = multimedia.getThumbNail(currentPlayList[startPosition + i].path);
		//var begin = new Date().getTime();
		//var tmpPicPath = (multimedia.getMediaPictureFileInfo(currentPlayList[startPosition + i].path)).thumbnail;
		//console.log("zhangljun refreshPlayList() get thumbnail time:" + (new Date().getTime() - begin));
		console.log("zhangljun refreshPlayList() thumbnail path:"+tmpPicPath);
		listImg[i].src = (tmpPicPath != null && tmpPicPath != "")
				? tmpPicPath : "images/picture_icon_2.png";
		listSpan[i].innerText = currentPlayList[startPosition + i].name;
	}
}

function mediaPlay(path)
{
	//$("unavailable").style.display = 'none';
	if(!dmrFlag)
		multimedia.stopThumbnailTask();
	return multimedia.picturePlay(path);
}

function playPre()
{
	var index=multimedia.playPreviousPicture();
	if(index!=-1)
		pictureOpen(currentPlayList[index].path);
}


function playNext()
{
	var index=multimedia.playNextPicture();
	if(index!=-1)
		pictureOpen(currentPlayList[index].path);	
}

function showConsoleTipsArrow(left,right)  //0 do not show , 1 show
{
	console.log("zhangljun showConsoleTipsArrow:" + left + right);
	if(pptState||pptStateBeforeToOption)
		return;
	clearTimeout(consoleTimer);
	$("LR_Tips").style.display = "block";
	if(left == 0)
	{
		$('LR_Tips').getElementsByTagName("img")[0].style.display = "none";	
	}
	else if(left == 1)
	{
		$('LR_Tips').getElementsByTagName("img")[0].style.display = "block"; 
	}
	
	if(right == 0)
	{
		$('LR_Tips').getElementsByTagName("img")[1].style.display = "none";
	}
	else if(right == 1)
	{
		$('LR_Tips').getElementsByTagName("img")[1].style.display = "block" 
	
	}

	consoleTimer=setTimeout(function(){
		$("LR_Tips").style.display = "none";
	},3000);
	
}


function loadImage(objImg,imgSrc,maxWidth,maxHeight)
{
	objImg.src = imgSrc;
	if (objImg.complete) { 
		autoResizeImage(objImg,maxWidth,maxHeight);
        return; 
     }
	 objImg.onload = function () {
		autoResizeImage(objImg,maxWidth,maxHeight);
     };
}

function autoResizeImage(objImg,maxWidth,maxHeight){ //add yums
	var img = new Image();
	img.src = objImg.src;
	var hRatio;
	var wRatio;
	var Ratio = 1;
	var w = img.width;
	var h = img.height;
	wRatio = maxWidth / w;  //0.29
	hRatio = maxHeight / h; //0.22
	
	if (maxWidth ==0 && maxHeight==0){
		Ratio = 1;
	}else if (maxWidth==0){
		if (hRatio<1) Ratio = hRatio;
	}else if (maxHeight==0){
		if (wRatio<1) Ratio = wRatio;
	}else{
		Ratio = (wRatio<=hRatio?wRatio:hRatio);
	}
	
	
	w = w * Ratio;
	h = h * Ratio;

	objImg.style.height =h + "px";
	objImg.style.width = w + "px";
	
	
	
	//$("thumbNail").getElementsByTagName("img")[0].style.height= h + "px";
	//$("thumbNail").getElementsByTagName("img")[0].style.width= w + "px";
	
	
	
	/*
	if(h < (maxHeight)) {
        objImg.style.marginTop = ((maxHeight - h) / 2) + "px";
		console.log("zhangljun objImg.style.marginTop: " + objImg.style.marginTop);
    }
	if(w < maxWidth) {
		objImg.style.marginLeft = ((maxWidth - w) / 2) + "px";
		console.log("zhangljun objImg.style.marginLeft: " + objImg.style.marginLeft);
	}
	*/
	if(h < (maxHeight)) {
        objImg.style.marginTop = ((maxHeight - h) / 2) + "px";
		thumbNailY = (maxHeight - h) /2;
    }
	if(w < maxWidth) {
		objImg.style.marginLeft = ((maxWidth - w) / 2) + "px";
		thumbNailX = (maxWidth - w) / 2;
	}
	
	thumbNailW = w;
	thumbNailH = h;
	//autoRePositionVisibleWindow();
	
}

function getCurrentPicZoomRegion()
{		
	pictureRegion = multimedia.getCurrenPicZoomRegion();
	
	if(pictureRegion == null || pictureRegion == undefined )
	{
		console.log("zhangljun pictureRegion is null");
	}
	rawRegion = pictureRegion.rawPicture();
	viewRegion = pictureRegion.viewPicture();
						
	if(rawRegion == null || rawRegion == undefined)
		console.log("zhangljun rawRegion is null");
	
	if(viewRegion == null || viewRegion == undefined)
		console.log("zhangljun viewRegion is null");	
		
	rawX = rawRegion.x;
	rawY = rawRegion.y;
	rawW = rawRegion.width;
	rawH = rawRegion.height;
						
	viewX = viewRegion.x;
	viewY = viewRegion.y;
	viewW = viewRegion.width;
	viewH = viewRegion.height;
						
	//console.log("zhangljun rawX: " + rawX);
	//console.log("zhangljun rawY: " + rawY);
	//console.log("zhangljun rawW: " + rawW);
	//console.log("zhangljun rawH: " + rawH);
											
	//console.log("zhangljun viewX: " + viewX);
	//console.log("zhangljun viewY: " + viewY);
	//console.log("zhangljun viewW: " + viewW);
	//console.log("zhangljun viewH: " + viewH);
}


function autoRePositionVisibleWindow()
{
	var visibleWindow = $("thumbNail2");
	var FscreenWindown = $("thumbNail");//.getElementsByTagName("img")[0]; //鸟瞰图全图
	tPicW = 300;//parseFloat(FscreenWindown.style.width);  //鸟瞰图全图坐标
	tPicH = 169;//parseFloat(FscreenWindown.style.height);
	tPicX = 0;// parseFloat(FscreenWindown.style.marginLeft);
	tPicY = 0;//parseFloat(FscreenWindown.style.marginTop);
	
	//console.log("zhangljun tPicX: " + tPicX);
	//console.log("zhangljun tPicY: " + tPicY);
	//console.log("zhangljun tPicW: " + tPicW);
	//console.log("zhangljun tPicH: " + tPicH);
	
	
	pViewedX = viewX;
	pViewedY = viewY;
	pViewedW = viewW;
	pViewedH = viewH;
	
	pPicX    = rawX;
	pPicY    = rawY;
	pPicW    = rawW;
	pPicH    = rawH;
	
	
	tViewedX = tPicW*(pViewedX - pPicX)/pPicW;  //鸟瞰图可见视图坐标
	tViewedY = tPicH*(pViewedY - pPicY)/pPicH;
	tViewedW = pViewedW*tPicW/pPicW;
	tViewedH = pViewedH*tPicH/pPicH;
	
	//console.log("zhangljun tViewedX: " + tViewedX);
	//console.log("zhangljun tViewedY: " + tViewedY);
	//console.log("zhangljun tViewedW: " + tViewedW);
	//console.log("zhangljun tViewedH: " + tViewedH);
	
	//var ceilY = Math.ceil(tViewedY);
	//var floorH = Math.floor(tViewedH);
	//console.log("zhangljun ceilY:" + ceilY);
	//console.log("zhangljun floorH:" + floorH);

	
	visibleWindow.style.marginLeft = tPicX + tViewedX + "px";
	visibleWindow.style.marginTop  = tPicY + tViewedY + "px";
	visibleWindow.style.width      = tViewedW - 4 + "px";
	visibleWindow.style.height     = tViewedH - 4  + "px";
}

function autoRePositionThumbshade()
{
	var windown1 = $('div1');
	var windown2 = $('div2');
	var windown3 = $('div3');
	var windown4 = $('div4');
	
	windown1.style.left = 0 + "px";
	windown1.style.top  = 0 + "px";
	windown1.style.width  = tViewedX + "px";
	windown1.style.height  = tViewedY + tViewedH + "px";

	windown2.style.left = tViewedX + "px";
	windown2.style.top  =  0 + "px";
	windown2.style.width  = (300 - tViewedX) + "px";
	windown2.style.height  = tViewedY + "px";

	windown3.style.left = tViewedX + tViewedW  + "px";
	windown3.style.top  =  tViewedY + "px";
	windown3.style.width  = (300 - tViewedX - tViewedW) + "px";
	windown3.style.height  = (169 - tViewedY) + "px";
	
	windown4.style.left = 0  + "px";
	windown4.style.top  =  tViewedY + tViewedH + "px";
	windown4.style.width  = (tViewedX + tViewedW) + "px";
	windown4.style.height  = (169 - tViewedY - tViewedH) + "px";
}




function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		//console.log("zhangljun document.body onmousedown()");
		if($("consoleTip").style.display == "block")
		{
			clearTimeout(initSetTimeOut);
			console.log("showLeftArrowFlage:" + showLeftArrowFlage);
			console.log("showRightArrowFlage:" + showRightArrowFlage);
			$('consoleTip').style.display = "none";
			//bottomAreaDiv.style.display = "block";
			showConsoleTipsArrow(showLeftArrowFlage,showRightArrowFlage);
			return;
		}

		if(evt.button == 2)
		{
			if(bodyMouseFlag)
			{
				toBack();
			}
			else
			{
				bodyMouseFlag = true;
			}
			
		}
		if(focusTab == DISPLAY_AREA)
		{
			if(evt.button == 0)
			{
				if(bodyMouseDown)
					clickBodyElementFunction();
				bodyMouseDown = 1;
			}
		}
	}
	
	
	bottomAreaDiv.onmouseover = function(evt)
	{
		//console.log("zhangljun clickMenuImg.onmousedown");
		bodyMouseDown = 0;
		console.log("zhangljun buttom.style:" + bottomAreaDiv.style.display);
		if(focusTab == DISPLAY_AREA && bottomAreaDiv.style.display == "block")
		{
			toDown();
		}
		bodyMouseDown = 1;
	}


	//console.log("zhangljun clickMenuImg");
	for(var i = 0;i<clickMenuImg.length;i++)
	{
		clickMenuImg[i].setAttribute(clickIndexAttri, i);
		clickMenuImg[i].onmousedown = function(evt){
			//console.log("zhangljun clickMenuImg.onmousedown");
			if(evt.button == 0)
				clickMenuImgFunction(parseInt(this.getAttribute(clickIndexAttri)));
		}
	}
	
	//console.log("zhangljun clickOptionMenu1");
	for(var i = 0;i<clickOptionMenu1.length;i++) //option
	{
		clickOptionMenu1[i].setAttribute(clickIndexAttri, i);
		clickOptionMenu1[i].onmousedown = function(evt){
			//console.log("zhangljun clickOptionMenu1.onmousedown");
			if(evt.button == 0)
				clickOptionMenu1Function(parseInt(this.getAttribute(clickIndexAttri)));
		}
	}
	
	//console.log("zhangljun clickOptionMenu2");
	for(var i = 0;i < clickOptionMenu2.length;i++) //option 中的二级菜单
	{
		clickOptionMenu2[i].setAttribute(clickIndexAttri, i);
		clickOptionMenu2[i].onmousedown = function(evt){
			//console.log("zhangljun clickOptionMenu2.onmousedown");
			if(evt.button == 0)
				clickOptionMenu2Function(parseInt(this.getAttribute(clickIndexAttri)));
		}
	}
	
	//console.log("zhangljun clickPicturePresetSpan");
	for(var i = 1; i < clickPicturePresetSpan.length; i++) //picturepreset
	{
		clickPicturePresetSpan[i].setAttribute(clickIndexAttri, i - 1);
		clickPicturePresetSpan[i].onmousedown = function(evt){
			//console.log("zhangljun clickPicturePresetSpan.onmousedown");
			if(evt.button == 0)//left key
				clickPicturePresetFunction(parseInt(this.getAttribute(clickIndexAttri)));
		}
	}
	
	//console.log("zhangljun listInfoUpArrow");
	$('listInfoUpArrow').onmousedown = function(evt){
		//console.log("zhangljun listInfoUpArrow.onmousedown");
		if(evt.button == 0)//up key
			clickListInfoUpArrow();
	}

	//console.log("zhangljun listInfoBottomArrow");
	$('listInfoBottomArrow').onmousedown = function(evt){
		//console.log("zhangljun listInfoBottomArrow.onmousedown");
		if(evt.button == 0)//bottom key
			clickListInfoBottomArrow();
	}
	
	
	//console.log("zhangljun clickPlayListLi");
	for(var i = 0; i < clickPlayListLi.length; i++)
	{
		clickPlayListLi[i].setAttribute(clickIndexAttri, i);
		//console.log("zhangljun clickPlayListLi:" + i);
		clickPlayListLi[i].onmousedown = function(evt){
			//console.log("zhangljun clickPlayListLi.onmousedown");
			if(evt.button == 0)//left key
				clickPlayListFunction(parseInt(this.getAttribute(clickIndexAttri)));
		}
	}
	
	//console.log("zhangljun clickPlayListLeftArrow");
	$('playListLeftArrow').onmousedown = function(evt){
		//console.log("zhangljun playListLeftArrow.onmousedown");
		if(evt.button == 0) //left key
			clickPlayListLeftArrowFunction();
	}
	
	//console.log("zhangljun clickPlayListRightArrow");
	$('playListRightArrow').onmousedown = function(evt){
		//console.log("zhangljun playListRightArrow.onmousedown");
		if(evt.button == 0) //right key
			clickPlayListRightArrowFunction();
	}
	
	
	/*
	console.log("zhangljun　bodyElement");
	document.body.onmousedown = function(evt){
		//console.log("zhangljun　bodyMouseDown1:" + bodyMouseDown);
		if(focusTab == DISPLAY_AREA)
		{
			if(evt.button == 0)
			{
				if(bodyMouseDown)
					clickBodyElementFunction();
				bodyMouseDown = 1;
			}
		}
		//console.log("zhangljun　bodyMouseDown2:" + bodyMouseDown);
	}
	*/
	
	//console.log("zhangljun LR_TipsArrow");
	for(var i = 0;i< clickLR_TipsArrow.length;i++)
	{
		clickLR_TipsArrow[i].setAttribute(clickIndexAttri, i);
		clickLR_TipsArrow[i].onmousedown = function(evt){
			bodyMouseDown = 0;
			if(focusTab == DISPLAY_AREA)
			{
				if(evt.button == 0)
				{
					clickLR_TipsArrowFunction(parseInt(this.getAttribute(clickIndexAttri)));
					
					
				}
			}
		}
	}
	
	$("optionBarUpArea").onmousedown = function(evt){
		if(evt.button == 0) //left key
			testLog("clickOptionBarUpArrow.onmousedown");
			clickOptionBarUpArea();
	}
	
	$("optionBarDownArea").onmousedown = function(evt){
		if(evt.button == 0) //left key
			clickOptionBarDownArea();
	}
	
	for(var i = 0;i<clickOptionBarBlockDiv.length;i++)
	{
		clickOptionBarBlockDiv[i].setAttribute(clickIndexAttri, i);
		clickOptionBarBlockDiv[i].onmousedown = function(evt){
			if(evt.button == 0)
			{
				clickOptionBarBlockDivFuntion(evt);
			}
		}
	}
	
	//背景音乐文件索引中的元素标签的鼠标事件注册
	clickGoBackBoxDiv.onmousedown = function(evt){
		if(evt.button == 0) //left key
			clickGoBackBoxDivFunction();
	}
	
	clickFileColumnUp0Div.onmousedown = function(evt){
		if(evt.button == 0) //left key
			clickFileColumnUp0DivFunction();
	}
	
	clickFileColumnDown0Div.onmousedown = function(evt){
		if(evt.button == 0) //left key
			clickFileColumnDown0DivFunction();
	}
	
	for(var i = 0;i<clickFileColumnUl0Li.length;i++)
	{
		clickFileColumnUl0Li[i].setAttribute(clickIndexAttri, i);
		clickFileColumnUl0Li[i].onmousedown = function(evt){
			if(evt.button == 0)
			{
				clickFileColumnUl0LiFuntion(parseInt(this.getAttribute(clickIndexAttri)));
			}
			//else if(evt.button == 2)
		//	{
				//testLog("evt.button == 2");
				//bodyMouseFlag = false;
				//doSearchFileSelect(-1);
			//}
		}
	}
	
	clickFileColumn0Div.onmousedown = function(evt){//整个文件索引菜单
		if(focusTab != LIST_AREA)
		{
			return;
		}
		
		
		if($('iconListEmptyTips').style.display == 'block')
		{
			if(evt.button == 2)
				bodyMouseFlag = false;
			$('iconListEmptyTips').style.display == 'none';
			//showIconEmptyTips(-1);
			return;
		}
		
		if(evt.button == 2)
		{
			testLog("evt.button == 2");
			bodyMouseFlag = false;
			doSearchFileSelect(-1);
		}	
	}
	
	clickIconListEmptyTips.onmousedown = function(evt){
		if($('iconListEmptyTips').style.display == 'block')
		{
			if(evt.button == 2)                               
                bodyMouseFlag = false;
			showIconEmptyTips(-1);
		}
	}
	
	for(var i=0;i<clickBGMMusicImg.length;i++)
	{
		clickBGMMusicImg[i].setAttribute(clickIndexAttri, i);
		clickBGMMusicImg[i].onmousedown = function(evt){
			if(evt.button == 0)
			{
				clickBGMMusicImgFuntion(parseInt(this.getAttribute(clickIndexAttri)));
			}
		}
	}
	
}

function clickMenuImgFunction(index)
{
	if(focusTab != MENU_AREA)
		return;
	if(zoomNum != 0)//缩放状态
	{
		if(index>=0 && index < 3)//缩放状态，播放 左旋 右旋三个按钮不能响应mouse 事件
			return;
		changeMenuFocus(index - menuFocusIndex);
		doMenuSelect();
	}
	else
	{
		changeMenuFocus(index - menuFocusIndex);
		if(pptState == 1)
		{
			if(index !=0)
				return;
		}
		
		doMenuSelect();
		if(menuFocusIndex == 5)
		{
			clearTimeout(menuTimer);
			menuBar.style.display = "none";
			return;
		}
	}
	
}

function clickOptionMenu1Function(index)  //option中的一级菜单
{
	console.log("zhangljun clickOptionMenu1Function index:" + index+"-- focusTab:"+focusTab);
	//if(focusTab != OPTION_AREA)
		//return;
	if(focusTab == OPTION_DETAIL_AREA)
	{
		toBack();
	}	
	stopElementScroll(optionFirstMenuLi[optionIndex]);
	optionIndex = index;
	$('optionInfoFocus').style.top = FOCUS_TOP_DISTANCE + FOCUS_DISTANCE * optionIndex + "px";
	
	setTimeout(function(){
		
		toRight();
	},50);
}

function clickOptionMenu2Function(index)
{
	console.log("zhangljun clickOptionMenu2 Function index:" + index+"-- focusTab:"+focusTab);
	if(focusTab != OPTION_DETAIL_AREA)
		return;
	if(optionIndex == 3)
		optionListIndex = effectStart + index;
	else
		optionListIndex = index;
	//setSPOption();
	toOK();
}

function clickListInfoUpArrow()
{
	if(focusTab != OPTION_DETAIL_AREA)
		return;
	toUp();
}

function clickListInfoBottomArrow()
{
	if(focusTab != OPTION_DETAIL_AREA)
		return;
	toDown();
} 

function clickPicturePresetFunction(index)
{
	if(focusTab != PRESET_AREA)
		return;
	optionListIndex = index;
	$('focus').style.left = FOCUS_LEFT_DISTANCE + FOCUS_DISTANCE * optionListIndex + "px";
	setTimeout(function(){
		toOK();
	},50)
	
}

function clickPlayListFunction(index)
{
	if(focusTab != PLAY_LIST_AREA)
		return;
	playListIndex = index;
	$('focus').style.left = FOCUS_LEFT_DISTANCE + playListIndex * FOCUS_DISTANCE + "px"; //add yums
	setTimeout(function(){
		toOK();
	},200)
	
}

function clickPlayListLeftArrowFunction()
{
	console.log("zhangljun clickPlayListLeftArrowFunction");
	if(focusTab != PLAY_LIST_AREA)
		return;
	if(playListStart - 6 >= 0)
	{
		playListStart -= 6;
	}
	else
	{
		playListStart = 0;
	}
	refreshPlayList();
	arrowPlayListDisplay(playListStart);
	hideMenu(FADE_TIME, DISPLAY_AREA);
}

function clickPlayListRightArrowFunction()
{
	console.log("zhangljun clickPlayListRightArrowFunction");
	if(focusTab != PLAY_LIST_AREA)
		return;
	if(playListStart + 6 < currentPlayList.length)
	{
		playListStart += 6;
		
		if(playListStart + playListIndex >= currentPlayList.length - 1)
		{
            playListIndex = currentPlayList.length - 1 - playListStart;
			$('focus').style.left = FOCUS_LEFT_DISTANCE + playListIndex * FOCUS_DISTANCE + "px";
		}
	}
	refreshPlayList();
	
	arrowPlayListDisplay(playListStart);
	hideMenu(FADE_TIME, DISPLAY_AREA);
}

function clickOptionBarUpArea()
{
	testLog("click optionBarUpArrow");
	if(focusTab != OPTION_BAR_AREA)
	{
		return;
	}
	toUp();
}

function clickOptionBarDownArea()
{
	testLog("click optionBarDownArrow");
	if(focusTab != OPTION_BAR_AREA)
	{
		return;
	}
	toDown();
}

function clickOptionBarBlockDivFuntion(evt)
{
	if(focusTab != OPTION_BAR_AREA)
	{
		return;
	}
	testLog("evt.clientX:" + evt.clientX + "optionBarStyle2_left_offset:610");
	optionFocusIndex_2 = parseInt((evt.clientX - 610)*SHORT_BAR_MAX_VALUE/OPTION_BAR_LENGTH,10);
	var tmpMax = SHORT_BAR_MAX_VALUE;
	setBarValue(tmpMax);
	hideMenu(FADE_TIME, DISPLAY_AREA);
}

function clickGoBackBoxDivFunction()
{
	if(focusTab != LIST_AREA )
	{
		return;
	}
	doSearchFileSelect(-1);
}

function clickFileColumnUp0DivFunction()
{
	stopElementScroll(fileColumnUl0Li[listIndex].getElementsByTagName("div")[0]);
	if(focusTab != LIST_AREA )
	{
		return;
	}
	
	if(listStart - pageVCount >= 0)
	{
		listStart -= pageVCount;
	}
	else
	{
		listStart = 0;
	}
	
	testLog("clickFileColumnUp0DivFunction listStart:" + listStart);
	refreshFileList(currentList,fName);
	startElementScroll(fileColumnUl0Li[listIndex].getElementsByTagName("div")[0]);
}

function clickFileColumnDown0DivFunction()
{
	stopElementScroll(fileColumnUl0Li[listIndex].getElementsByTagName("div")[0]);
	if(focusTab != LIST_AREA )
	{
		return;
	}
	
	if(listStart + (pageVCount - 1) + pageVCount < listLength)
	{
		listStart += pageVCount;
	}
	else
	{
		listStart = listLength - pageVCount;
	}
	
	testLog("clickFileColumnDown0DivFunction listStart:" + listStart);
	refreshFileList(currentList,fName);
	startElementScroll(fileColumnUl0Li[listIndex].getElementsByTagName("div")[0]);
	}

function clickFileColumnUl0LiFuntion(index)
{
	testLog("clickFileColumnUl0LiFuntion index:" + index);
	if(focusTab != LIST_AREA)
	{
		return;
	}
	
	stopElementScroll(fileColumnUl0Li[listIndex].getElementsByTagName("div")[0]);
	listIndex = index;
	$("focus").style.top = topDistance + listIndex * 80 + "px";
	startElementScroll(fileColumnUl0Li[listIndex].getElementsByTagName("div")[0]);
	toRight();
}

function clickBGMMusicImgFuntion(index)
{
	testLog("clickBGMMusicImgFuntion index:" + index);
	if(focusTab != BGM_AREA )
	{
		return;
	}
	
	if(musicMenuBarLevel != 1)
	{
		musicMenuBarLevel = 1;
	}
	musicMenuFocusIndex = index;
	switch(musicMenuFocusIndex)
	{	
			case 0:
				$("endBar").src = "images/USB-Video-Progress-bar-Slider-01_.png";
				changeMusicPlayModeIcon(musicMenuFocusIndex);
				$("musicPre").src = "images/USB-Music-Control-icon-Previous-S.png";
				changeMusicP_PIcon(musicMenuFocusIndex);
				$("musicNext").src = "images/USB-Music-Control-icon-Next-S.png";
				$("musicPlayList").src = "images/USB-Music-Control-icon-Playlist-S.png";
				break;
				
			case 1:
				$("endBar").src = "images/USB-Video-Progress-bar-Slider-01_.png";
				changeMusicPlayModeIcon(musicMenuFocusIndex);
				$("musicPre").src = "images/USB-Music-Control-icon-PreviousFocus-S.png";
				changeMusicP_PIcon(musicMenuFocusIndex);
				$("musicNext").src = "images/USB-Music-Control-icon-Next-S.png";
				$("musicPlayList").src = "images/USB-Music-Control-icon-Playlist-S.png";
				break;
				
			case 2:
				$("endBar").src = "images/USB-Video-Progress-bar-Slider-01_.png";
				changeMusicPlayModeIcon(musicMenuFocusIndex);
				$("musicPre").src = "images/USB-Music-Control-icon-Previous-S.png";
				changeMusicP_PIcon(musicMenuFocusIndex);
				$("musicNext").src = "images/USB-Music-Control-icon-Next-S.png";
				$("musicPlayList").src = "images/USB-Music-Control-icon-Playlist-S.png";
				break;
				
			case 3:
				$("endBar").src = "images/USB-Video-Progress-bar-Slider-01_.png";
				changeMusicPlayModeIcon(musicMenuFocusIndex);
				$("musicPre").src = "images/USB-Music-Control-icon-Previous-S.png";
				changeMusicP_PIcon(musicMenuFocusIndex);
				$("musicNext").src = "images/USB-Music-Control-icon-Next-Focus-S.png";
				$("musicPlayList").src = "images/USB-Music-Control-icon-Playlist-S.png";
				break;
				
			case 4:
				$("endBar").src = "images/USB-Video-Progress-bar-Slider-01_.png";
				changeMusicPlayModeIcon(musicMenuFocusIndex);
				$("musicPre").src = "images/USB-Music-Control-icon-Previous-S.png";
				changeMusicP_PIcon(musicMenuFocusIndex);
				$("musicNext").src = "images/USB-Music-Control-icon-Next-S.png";
				$("musicPlayList").src = "images/USB-Music-Control-icon-PlaylistFocus-S.png";
				break;
	}
	
	doMusicMenuSelect();
}

function arrowPlayListDisplay(startIndex)
{
	$('playListLeftArrow').style.display = (startIndex == 0) ? "none" : "block";
	$('playListRightArrow').style.display = (startIndex + 6 < currentPlayList.length) ? "block" : "none";
}

function bookingPreOperate()
{
	top.g_lastEnterType = -1;
	top.g_isMediaCenter = top.NDM_Others;
	hideMenu(0);
	multimedia.pictureStop(1);
	multimedia.deviceExitUninit();
	multimedia.toRestoreSource(0, 0);
	return;
}

//add yums 2014-10-13
function isOverflowed(element)
{
	console.log("zhangljun element.scrollWidth:" +element.scrollWidth);
	console.log("zhangljun element.clientWidth:" +element.clientWidth);
	return element.scrollWidth > element.clientWidth;
}

function setPlayListFocus(currentNum,lastNum)
{
	console.log("zhangljun setPlayListFocus currentNum:" + currentNum);
	if(currentNum > -1)
	{
		if(isOverflowed($("name" + currentNum)))
		{
			modifyScrollDistance("move",$("name"+currentNum).clientWidth,$("name"+currentNum).scrollWidth);
			$("name"+currentNum).className ="playListStyle_animate";
		}
		else
		{
			console.log("zhangljun isOverflowed is false");
			$("name"+currentNum).className ="playListStyle_static";
		}
	}
	
	if(lastNum > -1)
	{
		$("name"+lastNum).className ="playListStyle_static";
	}
	
	if(lastNum = -1 && currentNum == -1)
	{
		for(var i =0 ;i<6;i++)
		{
			$("name"+i).className ="playListStyle_static";
		}
	}
	
}

function setPlayListScroll(currentNum,lastNum)
{
	if(currentNum > -1)
	{
		var element = $("optionInfo").getElementsByTagName("li");
		var span1 = element[currentNum].getElementsByTagName("span")[0];
		var span2 = element[currentNum].getElementsByTagName("span")[1];
		if(isOverflowed(span1))
		{
			console.log("zhangljun span1.className:" + span1.className);
			modifyScrollDistance("move_option",span1.clientWidth,span1.scrollWidth);
			span1.className ="optionInfoSpan_animate";
		}
	}
}

//根据传入的animate 修改css中animate的属性值
function modifyScrollDistance(animate,distance1,distance2)
{
	var tmp = 0;
	var animateIndex = 0;
	var flag = false;
	for(var i=0;i<document.styleSheets.length;i++)
	{
		tmp = getKeyFrames(i);
		for(var j=0;j<tmp.length;j++)
		{
			if(tmp[j].name == animate)
			{
				animateIndex = j;
				flag = true;
				break;
			}
		}
		if(flag)
			break;
	}
	
	tmp[animateIndex].deleteRule('0%');
	tmp[animateIndex].deleteRule('100%');
	var rule1 = "0% {left:" + distance1 + "px;}";
	var rule2 = "100% {left:-" + distance2 + "px;}";
	tmp[animateIndex].insertRule(rule1, 0);
	tmp[animateIndex].insertRule(rule2, 1);
}

function getKeyFrames(index)
{
	console.log("zhangljun getKeyFrames:" + index);
	var styleSheet = document.styleSheets[index];
	var keyframesRule = [];
	[].slice.call(styleSheet.cssRules).forEach(
		function(item)
		{
			if(item.type === CSSRule.WEBKIT_KEYFRAMES_RULE) 
			{
				keyframesRule.push(item);
			}
		}
	);
	return keyframesRule;
}


//滚动效果实现 marquee版
function startElementScroll(htmlTag)
{
	setScrollAttribute(htmlTag,1);
}

function stopElementScroll(htmlTag)
{
	setScrollAttribute(htmlTag,0);
	//setTimeout(function(){
		//resetScrollHtmlInner(htmlTag);
	//},10);
	
}

function setScrollAttribute(htmlTag,flag)
{
	var containSpanNode = false;
	var childNodes = htmlTag.childNodes;
	var spanNodes = 0;
	
	//判断传入的元素是否还有其他的子元素,这里主要是判断是否含有SPAN子元素
	for(var i=0;i<childNodes.length;i++)
	{
		if(childNodes[i].nodeName =="SPAN")
		{
			containSpanNode = true;
			break;
		}
		
	}
	
	if(containSpanNode)
	{
		spanNodes = htmlTag.getElementsByTagName("span");
		for(var i=0;i<spanNodes.length;i++)
		{
			spanNodes[i].setAttribute("contentText",spanNodes[i].innerHTML);
			if(flag && isOverflowed(spanNodes[i]))
			{
				spanNodes[i].style.overflowX = "-webkit-marquee";
				spanNodes[i].style.textOverflow = "clip";
			}
			else
			{
				spanNodes[i].style.overflowX = "hidden";
				spanNodes[i].style.textOverflow = "ellipsis";
			}
		}
	}
	else
	{
		htmlTag.setAttribute("contentText",htmlTag.innerHTML);
		if(flag && isOverflowed(htmlTag))
		{
			htmlTag.style.overflowX = "-webkit-marquee";
			htmlTag.style.textOverflow = "clip";
		}
		else
		{
			htmlTag.style.overflowX = "hidden";
			htmlTag.style.textOverflow = "ellipsis";
		}
	}
}

/*
function setScrollAttribute(htmlTagList,ListLength,focusPosition)
{
	var containSpanNode = false;
	var childNodes = htmlTagList[0].childNodes;
		
	for(var i=0;i<childNodes.length;i++)
	{
		if(childNodes[i].nodeName =="SPAN")
		{
			containSpanNode = true;
			break;
		}
		
	}
	
	console.log("zhangljun containSpanNode:" + containSpanNode);
	if(!containSpanNode)
	{
		for(var i = 0; i < ListLength; i++)
		{
			
			htmlTagList[i].setAttribute("contentText",htmlTagList[i].innerHTML);
			if(focusPosition == i && isOverflowed(htmlTagList[i]))
			{
				console.log("zhangljun focusPosition:" + i);
				htmlTagList[i].style.overflowX = "-webkit-marquee";
				htmlTagList[i].style.textOverflow = "clip";
				
			}
			else
			{
				htmlTagList[i].style.overflowX = "hidden";
				htmlTagList[i].style.textOverflow = "ellipsis";
				
			}
			htmlTagList[i].innerHTML = "";
		}
		
		setTimeout(function(){
			resetScrollHtmlInner(htmlTagList,htmlTagList.length);
		},10);
		
	}
	else
	{
		for(var i =0;i<ListLength;i++)
		{
			if(focusPosition == i)
			{
				var spanList = htmlTagList[i].getElementsByTagName("span");
				for(var j=0;j<spanList.length;j++)
				{	
					spanList[j].setAttribute("contentText",spanList[j].innerHTML);
					if(isOverflowed(spanList[j]))
					{
						spanList[j].style.overflowX = "-webkit-marquee";
						spanList[j].style.textOverflow = "clip";
					}
					else
					{
						spanList[j].style.overflowX = "hidden";
						spanList[j].style.textOverflow = "ellipsis";
					}
					spanList[j].innerHTML = "";
				}
				setTimeout(function(){
					resetScrollHtmlInner(spanList,spanList.length);
					},10);
			}
			
		}
	}

}
*/


function resetScrollHtmlInner(htmlTag)
{
	var containSpanNode = false;
	var childNodes = htmlTag.childNodes;
	var spanNodes = 0;
	
	//判断传入的元素是否还有其他的子元素,这里主要是判断是否含有SPAN子元素
	for(var i=0;i<childNodes.length;i++)
	{
		if(childNodes[i].nodeName =="SPAN")
		{
			containSpanNode = true;
			break;
		}
		
	}
	//console.log("zhangljun resetScrollHtmlInner:" + containSpanNode);
	
	if(containSpanNode)
	{
		spanNodes = htmlTag.getElementsByTagName("span");
		for(var i=0;i<spanNodes.length;i++)
		{
			spanNodes[i].innerHTML = spanNodes[i].getAttribute("contentText");
		}
	}
	else
	{
		htmlTag.innerHTML = htmlTag.getAttribute("contentText");
	}
}

/*
function resetScrollHtmlInner(htmlTagList,ListLength)
{
	console.log("zhangljun resetScrollHtmlInner");
	for(var i = 0; i < ListLength; i++)
	{
		//top.Log("in resetScrollHtmlInner htmlTagList[i].contentText = " + htmlTagList[i].getAttribute("contentText"));
		htmlTagList[i].innerHTML = htmlTagList[i].getAttribute("contentText");
	}
}
*/


function clickBodyElementFunction()
{
	console.log("zhangljun clickBodyElementFuntion");
	toOK();
}

function clickLR_TipsArrowFunction(index)
{
	console.log("zhangljun clickLR_TipsArrowFunction");
	if(index == 0) //leftArrow
		toLeft();
	else if(index == 1)
		toRight();
}

function displayTipsBox(flag)
{
	console.log("zhangljun displayTipsBox :" + flag);
	switch(flag)
	{
		case 0://hide box
			$('tipsBox').style.display = 'none';
			break;
		case 1://ok button
			$('focusButton').style.left = tipsBoxMiddleDistance + "px";
			$('tipsBox').style.display = 'block';
			$('okButton').style.display = 'block';
			//$('noButton').style.display = 'none';
			//$('yesButton').style.display = 'none';
			break;
		/*
		case 2://no & yes buttons
			tipsBoxIndex = 1;
			$('focusButton').style.left = tipsBoxDistance * (tipsBoxIndex  + 1) + tipsBoxButtonWidth * tipsBoxIndex + "px";
			$('tipsBox').style.display = 'block';
			$('okButton').style.display = 'none';
			$('noButton').style.display = 'block';
			$('yesButton').style.display = 'block';
			break;
		*/
		default:
			break;
	}
}

function setErrorTips(flag)
{
	if(!firstEnterFlag)
	{
		if(!dmrFlag)
		{
			top.g_currentMedia = multimedia.getMediaPictureFileInfo(currentPlayList[currentListPosition].path,currentPlayList[currentListPosition].name,0);
			top.g_mediaPosition = multimedia.getNowPicturePosition();
		}
	}	
	focusTab = TIPS_AREA;
	showConsoleTipsArrow(0,0);
	multimedia.pictureStop(1);
	displayTipsBox(flag);
	ttsRead();
}

function getFileList(path, start, count)
{
	//count == [-1]: get all file 
	//count != [-1]: get the num of count files
	return multimedia.getMediaFileList(top.g_deviceInfo.type, //top.g_deviceInfo.type指当前盘的类型，如USB DLNA DMR等
		currentMediaType, path, start, count);
}

function setPageListVCount()
{
	listLength = (currentList != null && currentList != "" && currentList[0] != null && currentList[0] != "")
		? currentList.length : 0;
	
	if(currentMediaType == MUSIC_TYPE)
	{
		pageVCount = (listLength < VC_F) ? listLength : VC_F;
	}
}

function refreshFileList(list,divName)//刷新背景音乐文件索引菜单中的列表内容
{
	fillFileDiv(divName, currentMediaType, list, listStart);
	showFScrollBar(list.length, listStart);
	arrowFDisplay(list.length);
}

function fillFileDiv(divName, type, list, start)
{
	console.log("fillFileDiv");
	var listSpan = $(divName).getElementsByTagName("span");
	var listImg = $(divName).getElementsByTagName("img");
	var listTmp = $(divName).getElementsByTagName("li");
	var length = list.length;
	if(type == MUSIC_TYPE)
	{
		for(var i = 0; i < VC_F; i++)
		{
			if(i > length - 1 - start)
			{
				listTmp[i].style.display = 'none';
				listSpan[i].style.display = 'none';
				listImg[i].style.display = 'none';
				continue;
			}
			else
			{
				listTmp[i].style.display = 'block';
				listSpan[i].style.display = 'block';
				listImg[i].style.display = 'block';
			}
			
			listSpan[i].innerText = list[start + i].name;
			
			if(list[start + i].type == ALL_TYPE)
			{
				listImg[i].src = "images/BGM_folder.png";
			}
			else if(list[start + i].type == MUSIC_TYPE)
			{
				listImg[i].src = "images/BGM_music.png";
			}
			else
			{
				listImg[i].src = "images/play_all_music.png";
			}
		}
	}
}

function changeSearchFileFocus(offset)//背景音乐文件索引中点上,下移动焦点的处理
{
	console.log("changeSearchFileFocus listIndex:" + listIndex);
	console.log("changeSearchFileFocus listStart:" + listStart);
	console.log("changeSearchFileFocus pageVCount:" + pageVCount);
	stopElementScroll(fileColumnUl0Li[listIndex].getElementsByTagName("div")[0]);
	if(offset == 1)//down
	{
		if((listIndex + 1) < pageVCount)
		{
			listIndex++;
			$("focus").style.top = topDistance + listIndex * 80 + "px";
		}
		else if((listIndex + 1) == pageVCount && (listStart + pageVCount) < listLength)
		{
			listStart++;
			refreshFileList(currentList,fName);
		}
		
	}
	else if(offset == -1)//up
	{
		if((listIndex - 1) >= 0)
		{
			listIndex--;
			$("focus").style.top = topDistance + listIndex * 80 + "px";
		}
		else if(listIndex == 0 && (listStart - 1) >= 0)
		{
			listStart--;
			refreshFileList(currentList,fName);
		}
	}
	startElementScroll(fileColumnUl0Li[listIndex].getElementsByTagName("div")[0]);
}

function showFScrollBar(length,start)//处理右边滚动条
{
	if(length > VC_F)
	{
		$("scrollAreaF0").style.display = "block";
		$("scrollBarF0").style.height = parseInt(SCROLL_MAX_HEIGHT * VC_F / length) + "px";
		$("scrollBarF0").style.top = parseInt(SCROLL_MAX_HEIGHT * start / length) + "px";
	}
	else
	{
		$("scrollAreaF0").style.display = "none";
	}
}

function doSearchFileSelect(type)
{
	if(type == 1)//enter or ok
	{
		console.log("currentList.length:" + currentList.length);
		console.log("listIndex:" + listIndex+" -- listStart:" + listStart);
		console.log("currentList[listIndex + listStart].type:" + currentList[listIndex + listStart].type);
		var fileInfo = currentList[listIndex + listStart];
		console.log("fileInfo.type:" + fileInfo.type);
		
		stopElementScroll(fileColumnUl0Li[listIndex].getElementsByTagName("div")[0]);
		if(fileInfo.type == ALL_TYPE)
		{
			//displayLoadingBox(1);
			
			
			var list = getFileList(fileInfo.path, 0, -1);
			if(list.length == 0)
			{
				showIconEmptyTips(3000);
				return;
			}
			fileListDepth++;
			if(fileListDepth > 0)
			{
				$('gobackBox').style.display = 'block';
			}
			addLastIndex();
			addFolderName(fileInfo.name);
			refreshTitleInfo(getLastFolder());
			g_mediaFolderPath = fileInfo.path;
			currentList = getFileList(g_mediaFolderPath, 0, -1);
			listLength = currentList.length;
			setPageListVCount();
			listIndex = 0;
			listStart = 0;
			resetFocusShape();
			refreshFileList(currentList, fName);
			startElementScroll(fileColumnUl0Li[listIndex].getElementsByTagName("div")[0]);
		}
		else if(fileInfo.type == MUSIC_TYPE)
		{
			top.g_BGMmdiaFolderPath = g_mediaFolderPath;
			top.g_BGMmediaListIndex = listIndex;
			top.g_BGMmediaListStart = listStart;
			top.g_BGMmediaPath = g_path;
			top.g_BGMmediaPathIndex = g_listIndex;
			 top.g_fileListDepth = fileListDepth;
			//console.log("currentList[" + (listStart + listIndex) + "].path:" + currentList[listIndex + listStart].path);
			$("searchFile").style.display = "none";
			//var res = "";
			//res = musicMediaPlay(currentList[listIndex + listStart].path);
			//console.log("res:" + res);
			//menuBar.style.display = "block";
			multimedia.mediaStop(0);
			musicPlayStatus = S_END;
			clearProgressArea();
			doMusicPlay(currentList[listIndex + listStart].path);
			
		}	
	}
	else if(type == -1)//back
	{
		if(fileListDepth > 0)
		{
			stopElementScroll(fileColumnUl0Li[listIndex].getElementsByTagName("div")[0]);
			fileListDepth--;
			if(fileListDepth == 0)
			{
				$('gobackBox').style.display = 'none';
			}
			removeFolderPath();
			//refreshTitleInfo(getLastFolder());
			listStart = getLastListStart();
			listIndex = getLastFocusIndex();
			console.log("doSearchFileSelect listStart:" + listStart+" -- listIndex:" + listIndex);
			removeLastIndex();
			
			g_mediaFolderPath = getLastPath(g_mediaFolderPath);
			refreshTitleInfo(getLastFolder());
			currentList = getFileList(g_mediaFolderPath, 0, -1);
			listLength = currentList.length;
			console.log("listLength:" + listLength);
			if(currentList.length == 0)//&& currentIsDLNAFlag
			{
				return;
			}
			setPageListVCount();
			refreshFileList(currentList, fName);
			$('focus').style.top = (topDistance + listIndex * 80) + "px";
			//showFScrollBar(list.length, listStart);
			
			startElementScroll(fileColumnUl0Li[listIndex].getElementsByTagName("div")[0]);
		}
		else if(fileListDepth == 0)
		{
			stopElementScroll(fileColumnUl0Li[listIndex].getElementsByTagName("div")[0]);
			toBack();
		}
	}
	
	
}

function addLastIndex()
{
	g_listIndex += "/" + listStart + "-" + listIndex;
}

function addFolderName(tmp)
{
	g_path += "/" + tmp;
	return;
}

function removeFolderPath()
{
	g_path = getLastPath(g_path);
	return;
}

function getLastPath(tmpPath)
{
	if(tmpPath == null || tmpPath == "")
	{
		return "";
	}
	var count = tmpPath.lastIndexOf("/");
	var path = tmpPath.substring(0 , count);
	return path;
}

function getLastListStart()
{
	var count = g_listIndex.lastIndexOf("/");
	var tmp = g_listIndex.substring(count + 1, g_listIndex.length);
	count = tmp.lastIndexOf("-");
	return parseInt(tmp.substring(0, count) / 1, 10);
}

function getLastFocusIndex()
{
	var count = g_listIndex.lastIndexOf("/");
	var tmp = g_listIndex.substring(count + 1, g_listIndex.length);
	count = tmp.lastIndexOf("-");
	return parseInt(tmp.substring(count + 1, tmp.length) / 1, 10);
}

function removeLastIndex()
{
	g_listIndex = getLastPath(g_listIndex);
}

function arrowFDisplay(length)
{
	$("fileColumnUp0").style.display = (listStart == 0) ? "none" : "block";
	$("fileColumnDown0").style.display = (listStart + pageVCount < length) ? "block" : "none";
}

function refreshTitleInfo(tmp)
{
	if(tmp == -1)
	{
		$("pathContent").innerText = top.g_deviceInfo.name;
	}
	else if(tmp != null && tmp != "" && fileListDepth > 0)
	{
		$("pathContent").innerText = top.g_deviceInfo.name + " > " + tmp;
	}
	else
	{
		$("pathContent").innerText = top.g_deviceInfo.name;
	}
}

function getLastFolder()
{
	var count = g_path.lastIndexOf("/");
	if(count == -1)
	{
		return -1;
	}
	var tmp = g_path.substring(count + 1,g_path.length);
	return tmp;
}

//以下是背景音乐播放有关接口
function musicMediaPlay(path)
{
	operatableFlag=false;
	return multimedia.mediaOpen(path);
}

function doMusicPlay(path)
{
	var res = "";
	initBGMBar();//这个要在open接口之前
	res = musicMediaPlay(path);
	musicPlayStatus = S_OPEN;
	console.log("zhangljun musicMediaPlay result:" + res+" -- path="+path);
}

function initBGMBar()
{
	focusTab = BGM_AREA;
	musicPlayRepeatModeInit();
	$("musicP&P").src = "images/USB-Music-Control-icon-PauseFocus-S.png";
	$("musicPre").src = "images/USB-Music-Control-icon-Previous-S.png";
							
	$("musicNext").src = "images/USB-Music-Control-icon-Next-S.png";
	$("musicPlayList").src = "images/USB-Music-Control-icon-Playlist-S.png";
	$("BGMArea").style.display = "block";
	$("focus").style.display = "none";
	musicPlayStatus = S_END;
	musicMenuFocusIndex = 2;
	musicMenuBarLevel = 1;
	currentMusicPlayingList = getCurrentMusicPlayingList(0,-1)
	console.log("currentMusicPlayingList.length:" + currentMusicPlayingList.length);
}

function getCurrentMusicPlayingList(startIndex,num)
{
	return multimedia.getCurrentMusicPlayingList(startIndex, num);
}

function changeMusicMenuBarSelect(type)
{
	console.log("changeMusicMenuBarSelect type:"+type+" -- musicMenuBarLevel:"+musicMenuBarLevel);
	if(musicMenuBarLevel == 1)
	{
		if(type == 0) //left
		{
			musicMenuFocusIndex = (musicMenuFocusIndex - 1) < 0 ? 4 : (musicMenuFocusIndex - 1);
		}
		else if(type == 1)//right
		{
			musicMenuFocusIndex = (musicMenuFocusIndex + 1) >= 5 ? 0 : (musicMenuFocusIndex + 1);
		}
		
		else if(type == 2)//up
		{
			musicMenuBarLevel--;
			musicMenuFocusIndex = -1;
		}
		else if(type == 3)//down
		{
			return;
		}
		
		switch(musicMenuFocusIndex)
		{
			case -1://焦点在进度条上
				$("endBar").src = "images/USB-Video-Progress-bar-Slider-02.png";
				changeMusicPlayModeIcon(musicMenuFocusIndex);
				$("musicPre").src = "images/USB-Music-Control-icon-Previous-S.png";
				changeMusicP_PIcon(musicMenuFocusIndex);
				$("musicNext").src = "images/USB-Music-Control-icon-Next-S.png";
				$("musicPlayList").src = "images/USB-Music-Control-icon-Playlist-S.png";
				
				break;
				
			case 0:
				$("endBar").src = "images/USB-Video-Progress-bar-Slider-01_.png";
				changeMusicPlayModeIcon(musicMenuFocusIndex);
				$("musicPre").src = "images/USB-Music-Control-icon-Previous-S.png";
				changeMusicP_PIcon(musicMenuFocusIndex);
				$("musicNext").src = "images/USB-Music-Control-icon-Next-S.png";
				$("musicPlayList").src = "images/USB-Music-Control-icon-Playlist-S.png";
				break;
				
			case 1:
				$("endBar").src = "images/USB-Video-Progress-bar-Slider-01_.png";
				changeMusicPlayModeIcon(musicMenuFocusIndex);
				$("musicPre").src = "images/USB-Music-Control-icon-PreviousFocus-S.png";
				changeMusicP_PIcon(musicMenuFocusIndex);
				$("musicNext").src = "images/USB-Music-Control-icon-Next-S.png";
				$("musicPlayList").src = "images/USB-Music-Control-icon-Playlist-S.png";
				break;
				
			case 2:
				$("endBar").src = "images/USB-Video-Progress-bar-Slider-01_.png";
				changeMusicPlayModeIcon(musicMenuFocusIndex);
				$("musicPre").src = "images/USB-Music-Control-icon-Previous-S.png";
				changeMusicP_PIcon(musicMenuFocusIndex);
				$("musicNext").src = "images/USB-Music-Control-icon-Next-S.png";
				$("musicPlayList").src = "images/USB-Music-Control-icon-Playlist-S.png";
				break;
				
			case 3:
				$("endBar").src = "images/USB-Video-Progress-bar-Slider-01_.png";
				changeMusicPlayModeIcon(musicMenuFocusIndex);
				$("musicPre").src = "images/USB-Music-Control-icon-Previous-S.png";
				changeMusicP_PIcon(musicMenuFocusIndex);
				$("musicNext").src = "images/USB-Music-Control-icon-Next-Focus-S.png";
				$("musicPlayList").src = "images/USB-Music-Control-icon-Playlist-S.png";
				break;
				
			case 4:
				$("endBar").src = "images/USB-Video-Progress-bar-Slider-01_.png";
				changeMusicPlayModeIcon(musicMenuFocusIndex);
				$("musicPre").src = "images/USB-Music-Control-icon-Previous-S.png";
				changeMusicP_PIcon(musicMenuFocusIndex);
				$("musicNext").src = "images/USB-Music-Control-icon-Next-S.png";
				$("musicPlayList").src = "images/USB-Music-Control-icon-PlaylistFocus-S.png";
				break;
		}
	}
	
	else if(musicMenuBarLevel == 0)
	{
		//快进 快退功能
		if(type == 3)//down
		{
			musicMenuBarLevel = 1;
			musicMenuFocusIndex = 2;
			$("endBar").src = "images/USB-Video-Progress-bar-Slider-01_.png";
			changeMusicP_PIcon(musicMenuFocusIndex);
		}
		else
		{
			return;
		}
	}
	
}

function changeMusicPlayModeIcon(index)
{
	//if(index == 0)//焦点整在PlayMode上
	//{
	//	$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat1Focus-S.png"
//	}
//	else 
//	{
	//	$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat1-S.png"
	//}
	musicPlayRepeatModeInit();
	
}

function changeMusicP_PIcon(index)
{
	if(musicPlayStatus == S_PLAY)
	{
		if(index == 2)
		{
			$("musicP&P").src = "images/USB-Music-Control-icon-PauseFocus-S.png";
		}
		else
		{
			$("musicP&P").src = "images/USB-Music-Control-icon-Pause-S.png";
		}
	}
	else
	{
		if(index == 2)
		{
			$("musicP&P").src = "images/USB-Music-Control-icon-PlayFocus-S.png";
		}
		else
		{
			$("musicP&P").src = "images/USB-Music-Control-icon-Play-S.png";
		}
	}
}

function clearProgressArea()
{
	$('endBar').src = "images/USB-Video-Progress-bar-Slider-01_.png";
	$('endBar').style.left = -15 + "px";
	$("startBar").style.width = 0 + "px";
	$("musicCover").src = "images/USB-Music-Default-icon.png";
}

function refreshProgressBar()
{
	if(fileDuration > 0)
	{
		elapsed = multimedia.getNowPlayTime();
		if(elapsed > 0)
		{
			if(elapsed > fileDuration)
			{
				elapsed = fileDuration;
			}
			
			//progressBarPercent = parseInt(elapsed * 100 / fileDuration, 10);
			//if(!seekStatusFlag)
			//{
				//if(focusTab == PROGRESS_AREA || (focusTab == OPTION_AREA && lastFocusTab == PROGRESS_AREA))
			//	{
					//$('endBar').src = "images/USB-Video-Progress-bar-Slider-02_.png";
				//seekPoint = elapsed;
			//	}
				//else if(focusTab != PROGRESS_AREA)
				//{
					//$('endBar').src = (progressBarPercent <= 14)
					//	? "images/USB-Video-Progress-bar-Slider-01_.png"
					//	: "images/USB-Video-Progress-bar-Slider-01.png";
				//}
				$('endBar').style.left = parseInt(elapsed * (BAR_LENGTH-27) / fileDuration, 10) + "px";
			//}
			$("startBar").style.width = parseInt(elapsed * (BAR_LENGTH-27) / fileDuration, 10) +15+ "px";
		}
		else
		{
			elapsed = 0;
		}
	}
	else
	{
		fileDuration = 0;
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

function doMusicMenuSelect()
{
	if(musicMenuBarLevel == 0)
	{
		return;
	}
	else if(musicMenuBarLevel == 1)
	{
		switch(musicMenuFocusIndex)
		{
			case -1:
				return;
				break;
			case 0:
				repeatMode = dmrFlag ? ((!repeatMode) ? 3 : 0) : (parseInt((repeatMode + 1) % 4, 10));
				switch(repeatMode)
				{
					case 0:
						$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat1Focus-S.png";
						break;
					case 1:
						$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat4Focus-S.png";
						break;
					case 2:
						$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat3Focus-S.png";
						break;
					case 3:
						$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat2Focus-S.png";
						break;
					default:
						$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat3Focus-S.png";
						break;
				}
				multimedia.setAudioRepeatMode(repeatMode);
				break;
			case 1:
				if(operatableFlag==false)
					return;
				operatableFlag=false;
				testLog("doMusicMenuSelect() playPreMediaFile before");
				multimedia.playPreMediaFile(1);
				musicPlayStatus = S_OPEN;
				testLog("doMusicMenuSelect() playPreMediaFile after");
				break;
			case 2:
				if(operatableFlag==false)
					return;
				if(musicPlayStatus == S_PLAY)
				{
					musicPlayStatus = S_PAUSE;
					multimedia.mediaPause();
					clearInterval(progressBarTimer);
					$("musicP&P").src = "images/USB-Music-Control-icon-PlayFocus-S.png";				        
					return;
				}
				else if(musicPlayStatus == S_PAUSE)
				{
					musicPlayStatus = S_PLAY;
					multimedia.mediaResume();
					if(progressBarTimer)
						clearInterval(progressBarTimer);
					
					progressBarTimer = setInterval("refreshProgressBar()", REFRESH_TIME);
					$("musicP&P").src = "images/USB-Music-Control-icon-PauseFocus-S.png";
					return;
				}
				break;
			case 3:
				if(operatableFlag==false)
					return;
				operatableFlag=false;
				testLog("doMusicMenuSelect() playNextMediaFile before");
				multimedia.playNextMediaFile(1);
				musicPlayStatus = S_OPEN;
				testLog("doMusicMenuSelect() playNextMediaFile after");
				break;
			case 4:
				$("BGMArea").style.display = "none";
				$("searchFile").style.display = "block";
				focusTab = LIST_AREA;
				listStart = 0;
				listIndex = 0;
				refreshTitleInfo(getLastFolder());
				refreshFileList(currentList, fName);
				
				resetFocusShape();
				$('focus').style.top = (topDistance + listIndex * 80) + "px";
				$('focus').style.display = "block";
				
				break;
			default:
				break;
		}
	}
	else 
	{
		return;
	}
}

function musicPlayRepeatModeInit()
{
	repeatMode = multimedia.getAudioRepeatMode();
	repeatMode = (repeatMode < 0 || repeatMode > 4) ? 0 : repeatMode;
	if(musicMenuFocusIndex != 0)
	{
		switch(repeatMode)
		{
			case 0://repeat all
				$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat1-S.png";
				break;
			case 1://repeat one
				$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat4-S.png";
				break;
			case 2://normal
				$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat3-S.png";
				break;
			case 3://random
				$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat2-S.png";
				break;
			default:
				break;
		}						
	}
	else 
	{
		switch(repeatMode)
		{
			case 0:
				$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat1Focus-S.png";
				break;
			case 1:
				$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat4Focus-S.png";
				break;
			case 2:
				$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat3Focus-S.png";
				break;
			case 3:
				$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat2Focus-S.png";
				break;
			default:
				break;
		}
		/*				
		if(repeatMode == 0)//normal
		{
			$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat3Focus-S.png";
		}
		else if(repeatMode == 1)//random
		{
			$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat2Focus-S.png";
		}
		else if(repeatMode == 2)//repeat all
		{
			$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat1Focus-S.png";
		}
		else if(repeatMode == 3)//repeat one
		{
			$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat4Focus-S.png";
		}
		else
		{
			$("musicPlayMode").src = "images/USB-Music-Control-icon-Repeat3Focus-S.png";
		}
		*/
	}
}

function fillCurrentPlayingMusicInfo(file)
{
	if(file.cover != null && file.cover != "")
	{
		$("musicCover").src = file.cover;
	}
	else
	{
		$("musicCover").src = "images/USB-Music-Default-icon.png";
	}

	if(file.name != null)
	{
		console.log("musicName:" + file.name);
		$("musicName").innerText = file.name;
	}
	
}

function doOpenSearchFile()
{
	listStart = 0;
	fileListDepth = 0;
	listIndex = 0;
	g_mediaFolderPath = top.g_deviceInfo.path;
	refreshTitleInfo(getLastFolder());
	currentList = getFileList(top.g_deviceInfo.path,listStart,-1);
	$("searchFile").style.display = 'block';
	if(currentList.length == 0)
	{
		//$('emptyListTips').style.display = "block";
		return
	}
	else
	{
		//$('emptyListTips').style.display = "none";
	}
	focusTab = LIST_AREA;
	listLength = currentList.length;
	setPageListVCount();
	resetFocusShape();
	$('focus').style.top = topDistance + "px"//363px是GUI中定义的第二个位置的y坐标，80px是各个位置的高
	refreshFileList(currentList,fName);
	startElementScroll(fileColumnUl0Li[listIndex].getElementsByTagName("div")[0]);
}

function showIconEmptyTips(time)//文件索引(背景音乐)时，文件夹下无相应文件时的提示信息
{
	if(time == -1)
	{
		$('iconListEmptyTips').style.display = 'none';
		return;
	}
	$('iconListEmptyTips').style.display = 'block';
	clearTimeout(iconFileEmptyTipsTimer);
	iconFileEmptyTipsTimer = setTimeout(function(){
		$('iconListEmptyTips').style.display = 'none';
	}, time);
}

function testLog(text)
{
	console.log("             Areos ===> " + text);
}

function toExitBySTR()
{
    hideMenu(0); //add yums
	if(top.g_temp=="menu"||top.g_temp=="source")
	{
		top.$("operatePage").src = "";
		top.requestFocus(top.main, 1);
		top.setFrameFocusPage("main");
	}

    multimedia.stopThumbnailTask();
    if(musicPlayStatus != S_END && musicPlayStatus != -1)
    {
        multimedia.mediaStop(0);
    }
    multimedia.pictureStop(1);
    multimedia.deviceExitUninit();
    top.g_mediaPosition = 1;
    top.$("main").src = "deviceList.html?poweroff";
}

function changeOptionListColor()
{
	if(footballModeFlag)
	{
		$('picturePresetContent').style.color = "#666";
		changeObjColor($('optionBackLight'), "#666");
		changeObjColor($('optionBrightness'), "#666");
		changeObjColor($('optionContrast'), "#666");
		changeObjColor($('optionSaturation'), "#666");
		changeObjColor($('optionTint'), "#666");
		changeObjColor($('optionSharpness'), "#666");
	}
	else
	{
		$('picturePresetContent').style.color = "#aaa";
		changeObjColor($('optionBackLight'), "#aaa");
		changeObjColor($('optionBrightness'), "#aaa");
		changeObjColor($('optionContrast'), "#aaa");
		changeObjColor($('optionSaturation'), "#aaa");
		changeObjColor($('optionTint'), "#aaa");
		changeObjColor($('optionSharpness'), "#aaa");
	}
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

function previewPictureMode(position)
{
    if(0 != setTimeoutPictureModeId)
    {
        clearTimeout(setTimeoutPictureModeId);
    }
    setTimeoutPictureModePosition = position;
    setTimeoutPictureModeId = setTimeout("setting.previewPictureMode(pictureModeTransform(setTimeoutPictureModePosition));",1000);
}

function changeObjColor(obj, color)
{
	var tmpSpan = obj.getElementsByTagName('span');
	var tmpDiv = obj.getElementsByTagName('div');
	for(var i = 0; i < tmpSpan.length; i++)
	{
		tmpSpan[i].style.color = color;
	}
	tmpDiv[2].style.background = color;
	tmpDiv[3].style.background = color;
}

function changePicturePresetColor()
{
	for(var i = 0; i < picPresetListName.length; i++)
	{
		picPresetListName[i].style.color = "#aaa";
	}
	return;

	if(footballModeFlag)
	{
		$("picturePresetFocus").src = picPresetFocus[1];
		for(var i = 0; i < picPresetListName.length; i++)
		{
			picPresetListName[i].style.color = "#666";
		}
	}
	else
	{
		$("picturePresetFocus").src = picPresetFocus[0];
		for(var i = 0; i < picPresetListName.length; i++)
		{
			picPresetListName[i].style.color = "#aaa" ;
		}
	}
}

function initListIndex()
{
	if(footballModeFlag)
	{
		PIC_PRESET_INDEX = 0;
		PIC_BACKLIGHT_INDEX = -1;
		PIC_BRIGHTNESS_INDEX = -1;
		PIC_CONTRAST_INDEX = -1;
		PIC_SATURATION_INDEX = -1;
		PIC_TINT_INDEX = -1;
		PIC_SHARPNESS_INDEX = -1;
		PIC_PLAYMODE_INDEX = 1;
		PIC_DURATION_INDEX = 2;
		PIC_EFFECT_INDEX=3;
		PIC_INFO_INDEX = 4;
		$("optionBackLight").style.display = 'none';
		$("optionBrightness").style.display = 'none';
		$("optionContrast").style.display = 'none';
		$("optionSaturation").style.display = 'none';
		$("optionTint").style.display = 'none';
		$("optionSharpness").style.display = 'none';
		$("optionPlayMode").style.top = 80 * PIC_PLAYMODE_INDEX + "px";
		$("optionDuration").style.top = 80 * PIC_DURATION_INDEX + "px";
		$("optionEffect").style.top = 80 * PIC_EFFECT_INDEX + "px";		
		$("optionInfoDetail").style.top = 80 * PIC_INFO_INDEX + "px";
		optionFirstListLength = optionFirstMenuLi.length - 6;
	}
	else
	{
		PIC_PRESET_INDEX = -1;
		PIC_BACKLIGHT_INDEX = 0;
		PIC_BRIGHTNESS_INDEX = -1;
		PIC_CONTRAST_INDEX = -1;
		PIC_SATURATION_INDEX = -1;
		PIC_TINT_INDEX = -1;
		PIC_SHARPNESS_INDEX = -1;
		PIC_PLAYMODE_INDEX = 1;
		PIC_DURATION_INDEX = 2;
		PIC_EFFECT_INDEX=3;
		PIC_INFO_INDEX = 4;
		$("optionBackLight").style.display = 'block';
		$("optionPicturePreset").style.display = 'none';
		$("optionBrightness").style.display = 'none';
		$("optionContrast").style.display = 'none';
		$("optionSaturation").style.display = 'none';
		$("optionTint").style.display = 'none';
		$("optionSharpness").style.display = 'none';
		$("optionBackLight").style.top = 80 * PIC_BACKLIGHT_INDEX + "px";
		$("optionPlayMode").style.top = 80 * PIC_PLAYMODE_INDEX + "px";
		$("optionDuration").style.top = 80 * PIC_DURATION_INDEX + "px";
		$("optionEffect").style.top = 80 * PIC_EFFECT_INDEX + "px";		
		$("optionInfoDetail").style.top = 80 * PIC_INFO_INDEX + "px";
		optionFirstListLength = optionFirstMenuLi.length - 6;

		/*
		PIC_PRESET_INDEX = 0;
		PIC_BACKLIGHT_INDEX = 1;
		PIC_BRIGHTNESS_INDEX = 2;
		PIC_CONTRAST_INDEX = 3;
		PIC_SATURATION_INDEX = 4;
		PIC_TINT_INDEX = 5;
		PIC_SHARPNESS_INDEX = 6;
		PIC_PLAYMODE_INDEX = 7;
		PIC_DURATION_INDEX = 8;
		PIC_EFFECT_INDEX=9;
		PIC_INFO_INDEX = 10;
		$("optionBackLight").style.display = 'block';
		$("optionBrightness").style.display = 'block';
		$("optionContrast").style.display = 'block';
		$("optionSaturation").style.display = 'block';
		$("optionTint").style.display = 'block';
		$("optionSharpness").style.display = 'block';
		$("optionBackLight").style.top = 80 * PIC_BACKLIGHT_INDEX + "px";
		$("optionBrightness").style.top = 80 * PIC_BRIGHTNESS_INDEX + "px";
		$("optionContrast").style.top = 80 * PIC_CONTRAST_INDEX + "px";
		$("optionSaturation").style.top = 80 * PIC_SATURATION_INDEX + "px";
		$("optionTint").style.top = 80 * PIC_TINT_INDEX + "px";
		$("optionSharpness").style.top = 80 * PIC_SHARPNESS_INDEX + "px";
		$("optionPlayMode").style.top = 80 * PIC_PLAYMODE_INDEX + "px";
		$("optionDuration").style.top = 80 * PIC_DURATION_INDEX + "px";
		$("optionEffect").style.top = 80 * PIC_EFFECT_INDEX + "px";		
		$("optionInfoDetail").style.top = 80 * PIC_INFO_INDEX + "px";
		optionFirstListLength = optionFirstMenuLi.length;
		*/
	}
}

var bgmRepeatStr = ["repeat all","repeat one","order","shuffle"];
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
	function isSelected(selectedFlag)
	{
		top.ttsLog("selectedFlag=" + selectedFlag);
		if(selectedFlag)
		{
			return "selected";
		}
		else
		{
			return "not selected";
		}
	}
	console.log("---------ttstest---------focusTab = " + focusTab);
	console.log("---------ttstest---------optionIndex = " + optionIndex+"  playListIndex="+playListIndex+"  playListStart="+playListStart);
	switch(focusTab)
	{
		case PLAY_LIST_AREA:
			try
			{
				ttsName = currentPlayList[playListIndex+playListStart].name;
			}
			catch(e)
			{
				console.log("---------ttstest---------error=" + e);
			}
			break;
		case OPTION_AREA:
			switch(optionIndex)
			{
				case PIC_PRESET_INDEX:
					ttsName = optionInfoArrayText[0] + ",";
					ttsStatus = picturePresetArray[optionInfoArray[PIC_PRESET_INDEX]];
					break;
				case PIC_BACKLIGHT_INDEX:
					ttsName = optionInfoArrayText[1] + ",";
					ttsStatus = optionInfoArray[PIC_BACKLIGHT_INDEX];
					break;
				case PIC_PLAYMODE_INDEX:
					ttsName = optionInfoArrayText[7] + ",";
					ttsStatus = playModeArray[optionInfoArray[PIC_PLAYMODE_INDEX]];
					break;
				case PIC_DURATION_INDEX:
					ttsName = optionInfoArrayText[8] + ",";
					ttsStatus = durationArray[optionInfoArray[PIC_DURATION_INDEX]];
					break;
				case PIC_EFFECT_INDEX:
					ttsName = optionInfoArrayText[9] + ",";
					ttsStatus = effectArray[optionInfoArray[PIC_EFFECT_INDEX]];
					break;
				case PIC_INFO_INDEX:
					ttsName = optionInfoArrayText[10];
					ttsStatus = "";
					break;
				default:
					break;
			}
			break;
		case OPTION_DETAIL_AREA:
			switch(optionIndex)
			{
				case PIC_PLAYMODE_INDEX:
					ttsName = playModeArray[optionListIndex] + ",";
					ttsStatus = isSelected(playModeArray[PIC_PLAYMODE_INDEX] == optionListIndex);
					break;
				case PIC_DURATION_INDEX:
					ttsName =durationArray[optionListIndex] + ",";
					ttsStatus = isSelected(optionInfoArray[PIC_DURATION_INDEX] == optionListIndex);
					break;
				case PIC_EFFECT_INDEX:
					ttsName =effectArray[optionListIndex] + ",";
					ttsStatus = isSelected(effectArray[PIC_EFFECT_INDEX] == optionListIndex);
					break;
				case PIC_INFO_INDEX:
					ttsName = "";
					ttsStatus = informationSpan[0].innerText + "," + informationSpan[1].innerText + "," + informationSpan[2].innerText + "," + informationSpan[3].innerText;
					break;
				default:
					break;
			}
			break;
		case OPTION_BAR_AREA:
			switch(optionIndex)
			{
				case PIC_BACKLIGHT_INDEX:
					ttsName = "";
					ttsStatus = optionFocusIndex_2;
					break;
				default:
					//fix me other progress bar need add
					break;
			}
			break;
		case MENU_AREA:
			switch(menuFocusIndex)
			{
				case MENU_PLAY:
					if(0 == pptState)
					{
						ttsName = "pause";
					}
					else
					{
						ttsName = "play";
					}
					ttsStatus = "";
					break;
				case MENU_R_ROTATE:
					ttsName = "clockwise rotation";
					ttsStatus = "";
					break;
				case MENU_L_ROTATE:
					ttsName = "Anticlockwise rotation";
					ttsStatus = "";
					break;
				case MENU_ZOOM_IN:
					ttsName = "zoom in";
					ttsStatus = "";
					break;
				case MENU_ZOOM_OUT:
					ttsName = "zoom out";
					ttsStatus = "";
					break;
				case MENU_BGM:
					ttsName = "Background Music";
					ttsStatus = "";
					break;
				default:
					break;
			}
			break;
		case LIST_AREA:
			ttsName = currentList[listIndex + listStart].name;
			ttsStatus = "";
			break;
		case BGM_AREA:
			switch(musicMenuFocusIndex)
			{
				case 0:
					ttsName = bgmRepeatStr[repeatMode];
					ttsStatus = "";
					break;
				case 1:
					ttsName = "previous";
					ttsStatus = "";
					break;
				case 2:
					if(musicPlayStatus == S_PAUSE)
					{
						ttsName = "pause";
					}
					else
					{
						ttsName = "play";
					}
					ttsStatus = "";
					break;
				case 3:
					ttsName = "forward";
					ttsStatus = "";
					break;
				case 4:
					ttsName = "list";
					ttsStatus = "";
					break;
				default:
					break;
			}
			break;
		case TIPS_AREA:
			if(	'block' == $('tipsBox').style.display)
			{
				ttsName = $('eb_info').innerText + ",";
				ttsStatus = "ok";
			}
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