
// USB video play
var multimedia = top.g_media;
var usbList = "";
var usbListLength = 0;
var currentMediaType = 0;//[0]all file [1]picture [2]video [3]music
var playUsb = "";
var demoVideoValue = 0;
var currentIndex = 0;
var sourceFlag = 0;
var isBlockingFlag = 0;

document.onsystemevent = notifyProcess;
document.onkeydown = keyprocTV;
function keyprocTV(evt)
{
	var keycode = evt.which;
	switch (keycode)
	{
		case top.VK_POWER:
        case top.VK_MUTE://mute
		top.keyDownProcess(evt);
		    break;
        case top.VK_VOLUME_UP:
        case top.VK_VOLUME_DOWN:
        //case top.VK_SOURCE:
        //case top.VK_MENU:
            top.keyDownProcess(evt);
            break;
        case top.VK_HOME:
        case top.VK_NETFLIX:
        case top.VK_GLOBOPLAY:
            top.stopeSticker();
            top.keyDownProcess(evt);
            break;
        case top.VK_CHANNEL_UP:
        case top.VK_CHANNEL_DOWN:
        case top.VK_LIST:
        case top.VK_OPTION:
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
            if(top.eStickerPlayingVideoFlag == 0) //未播放USB或内置视频，即播放tv singal
            {
                top.stopeSticker();
                top.jumpPage();
            }
            break;
		default:
		//任意键退出
            top.stopeSticker();
		    top.jumpPage();
		break;
	}
}


var playUsbVideoTimer = 0;
function init()
{
    if(playUsbVideoTimer)
    {
        clearTimeout(playUsbVideoTimer);
        playUsbVideoTimer = 0;
    }
    playUsbVideoTimer = setTimeout(function ()
    {
        playUsbVideo();
    }, 3000);
}

function uninit()
{
    if(playUsbVideoTimer)
    {
        clearTimeout(playUsbVideoTimer);
        playUsbVideoTimer = 0;
    }
}

function playUsbVideo()
{
    //优先级：信源>USB>预置
    console.log("----------------------------top.g_channel.currentSignalStatus = " + top.g_channel.currentSignalStatus);
    if(top.g_channel.inputSource <= 1)//TV信源下需要判断shop后第一次的状态
    {
        if(top.g_channel.channelProgramStatus() > 0 && top.g_channel.currentSignalStatus){
            top.jumpPage();
            return;
        }
    }else{
        if(top.g_channel.currentSignalStatus){
            top.jumpPage();
            return;
        }
    }
    //else//无信号则先播放USB下Demo视频，若无则播预置视频
    {
        var demoVideoPath = "";//内置视频路径
        if (isBlockingFlag)
        {
            setTimeout(function ()
            {
                playUsbVideo();
            }, 50);
            return;
        }
        isBlockingFlag = 1;

        //获取usb设备列表
        if (multimedia.deviceStatus())
        {
            usbList = multimedia.getDiskListInfo();
            //var list;
            for (var i = 0; i < usbList.length; i++)
            {
                top.eStickerPlayingList = multimedia.getMediaFileList(0, 2, usbList[i].path + "/TCL DEMO", 0, -1);
                top.g_channel.testLog("========> xiaoxu 0");
                if (top.eStickerPlayingList.length > 0)
                {
                    //有USB Demo视频时  需要隐藏背景图片
                    $("bigWindow").style.display = "none";
                    $("bigWindow").getElementsByTagName("img")[0].src = "";
                    top.eStickerPlayingVideoFlag = 1;
                    //top.iseStickerPlaying = 1;
                    top.eStickerPlayingVideoDemoFlag = 0;
                    break;
                }
            }
        }
        console.log("---------------------- get top.eStickerPlayingList.length  = " +　top.eStickerPlayingList.length);
        //如果USB中无demo视频，则从内置分区中读取
        if (top.eStickerPlayingList.length <= 0)
        {
            demoVideoPath = top.g_setting.getProperty("ro.sita.cfg.app.Esticker_video_path","NULL");
            console.log("get demoVideoPath  = " +　demoVideoPath);
            if(demoVideoPath != "NULL")
                top.eStickerPlayingList = multimedia.getMediaFileList(0, 2, demoVideoPath, 0, -1);

            if (top.eStickerPlayingList.length > 0) {
                //有内置视频时  需要隐藏背景图片
                $("bigWindow").style.display = "none";
                $("bigWindow").getElementsByTagName("img")[0].src = "";
                top.eStickerPlayingVideoFlag = 1;
                //top.iseStickerPlaying = 1;
                top.eStickerPlayingVideoDemoFlag = 1;
            }else {
                //无信号 无视频时 背景为一张图片
                $("bigWindow").style.display = "block";
                $("bigWindow").getElementsByTagName("img")[0].src = "../images/esticker/shop_bg.png";
                isBlockingFlag = 0;
                return;
            }
        }
        //[0]all file [1]picture [2]video [3]music
        if (top.eStickerPlayingList.length > 0)
        {
            top.g_channel.testLog("========> xiaoxu 1");
            if (sourceFlag == 0)
            {
                //切信源
                multimedia.changeSourceToMedia();
                multimedia.setEnterDeviceType(0);
                if (top.eStickerPlayingVideoDemoFlag)
                    multimedia.initUSBFileTree(demoVideoPath);
                else
                    multimedia.initUSBFileTree(usbList[i].path);
                sourceFlag = 1;
                top.g_channel.testLog("========> xiaoxu 2");
            }

            //list = multimedia.getMediaFileList(0, 0, playUsb, 0, -1);
            /**
             playList = new Array(list.length);
             for (var i = 0; i < list.length; i++) {
			//playList[i] = playUsb + "/" + list[i].name;
			playList[i] = list[i].path;
		};
             **/

            //开始播放
            top.g_channel.testLog("========> xiaoxu : start play :" + top.eStickerPlayingList[0].path);
            if (top.eStickerPlayingVideoDemoFlag)
            {
                demoVideoValue = top.g_setting.getProperty("app.ui.demoVideoValue","0");
                top.g_availableStatus = multimedia.mediaOpen(top.eStickerPlayingList[demoVideoValue].path);
            }
            else
            {
                top.g_availableStatus = multimedia.mediaOpen(top.eStickerPlayingList[0].path);
            }
            currentIndex = 0;
        }
        isBlockingFlag = 0;
    }
}

function notifyProcess(evt) {
	var msg = evt.which;
	top.g_channel.testLog("========> xiaoxu  msg:"+msg);
	switch (msg) {
		case top.E_MEDIA_EOS:
		case top.E_MEDIA_OTHER_ERROR:
		case top.E_MEDIA_PLAY_ERROR_CANT_OPEN:
		case top.E_MEDIA_VIDEO_ERROR:
		case top.E_MEDIA_CUSTOM_VIDEO_NO_SUPPORT:
		case top.E_MEDIA_VIDEO_CANT_RECONGNIZE:
            if (top.eStickerPlayingVideoDemoFlag)
			{
                currentIndex = demoVideoValue;
			}
            else
			{
                if (currentIndex == (top.eStickerPlayingList.length - 1) )
                {
                    currentIndex = 0;
                }
                else
                {
                    currentIndex ++;
                }
			}
			multimedia.mediaStop(0);
            //top.iseStickerPlaying = 0;
			top.g_channel.testLog("========> xiaoxu : stop");
			top.g_channel.testLog("========> xiaoxu : start play :" + top.eStickerPlayingList[currentIndex].path);
			top.g_availableStatus = multimedia.mediaOpen(top.eStickerPlayingList[currentIndex].path);

			break;
		case top.E_MEDIA_PLAYER_STATUS_PLAYING:
			top.g_channel.testLog("---- xiaoxu  Playing MSG ----" + top.eStickerPlayingList[currentIndex].path);
			break;
        case top.E_MEDIA_USB_REMOVE:
            if (top.eStickerPlayingVideoDemoFlag)
            {
                break;
            }
            sourceFlag = 0;
            top.stopeSticker();
			top.jumpPage();
			break;
		case top.E_MEDIA_USB_INSERTED://usb insert
			if (top.eStickerPlayingVideoFlag)
			{
				break;
			}
			top.g_channel.testLog("---- xiaoxu USB_INSERTED MSG ----");
			playUsbVideo();
			break;
		case top.E_NETWORK_CONNECT_TEST_SUCCESS:
		case top.E_NETWORK_CONNECT_TEST_FAIL:
			top.systemEventProc(evt);
			break;
		case top.E_MEDIA_PLAYER_CUSTOM_BOOKMARK:
			multimedia.setVideoPlayingBookmark(0);
			break;
		case top.E_MEDIA_PLAYER_STATUS_PREPARED:
			multimedia.mediaPlay();
				break;
        case top.E_STR_SCREEN_OFF:
            top.stopeSticker();
			top.jumpPage();
			top.$("main").onload=function(){
				top.toPowerOff();
				top.$("main").onload=function(){};
				};
			break;
        case top.E_HP_PLUGIN:
        case top.E_HP_PLUGOUT:
        {
            top.systemEventProc(evt);
            break;
        }
        case top.E_SIGNAL_UNLOCK:
        {
            if (top.eStickerPlayingVideoFlag)
            {
                break;
            }
            playUsbVideo();
            break;
        }
    }
}

function $(id)
{
    return document.getElementById(id);
}
