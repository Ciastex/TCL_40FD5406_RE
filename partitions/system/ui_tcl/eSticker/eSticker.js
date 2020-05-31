var contentTitleArray = new Array();

var contentDetailArray = new Array();


var iconImgArrayS = new Array();

var iconImgArrayL = new Array();
var iconImgArrayR = new Array();
var iconStaticImgArray = new Array();
var imageArrayPlay = new Array();

var iconTop = ["580", "450", "320", "190", "60", "-70", "-200"];
var iconMovetoArray = ["iconMoveto1", "iconMoveto2", "iconMoveto3", "iconMoveto4", "iconMoveto5", "iconMoveto6", "iconMoveto7"];
var icon_position = 0;
var ICON_STATIC_NUM = 7;
var icon_num = 0;
var language = "";


// USB video play
var multimedia = top.g_media;
var factory = top.g_factory;
var setting = top.g_setting;
var usbList = "";

var currentIndex = 0;
var sourceFlag = 0;
var demoVideoValue = 0;
var isBlockingFlag = 0;
var direction = "left";
var preload = [];
var focusOn = "";
var position_h = 0;
var path;

/********
 **add: yums
 **data:2014-10-28
 *********/
var xmlDoc;
var xmlhttp;
var xmlTxt;
var xmlIconLength = 0;
var xmlIconId = new Array(); //ID数组，存储xml文件中所用icon标签的Id属性值
var xmlImg_L = new Array(); //img数组，存储xml文件中所用img_L标签的值
var xmlImg_R = new Array(); //img数组，存储xml文件中所用img_R标签的值
var xmlImg_S = new Array(); //img数组，存储xml文件中所用img_S标签的值
var xmlTitle = new Array(); //title数组，存储xml文件中依据当前语言获取到的所有的title值
var xmlStaticImg = new Array();
var xmlStaticImgPath = new Array();
var xmlDescription = new Array();
var xmlURL = "config/Esticker.xml";
var xmlURLBak = "config/Esticker.xml";
var xmlURLDefault = "config/Esticker.xml";

document.onsystemevent = notifyProcess;

document.onkeydown = keyprocTV;

function keyprocTV(evt)
{
    var keycode = evt.which;
    switch (keycode)
    {
        case top.VK_POWER:
            top.stopeSticker();
            top.jumpPage();
            top.keyDownProcess(evt);
            break;
        case top.VK_MUTE://mute
            top.keyDownProcess(evt);
            break;
        case top.VK_VOLUME_UP:
        case top.VK_VOLUME_DOWN:
        case top.VK_SOURCE:
        case top.VK_MENU:
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
        case top.VK_RIGHT:
            if (focusOn == "copyVideoTips")
            {
                if(position_h == 0)
                {
                    position_h = 1;
                    $("focus").style.left = "500px";
                }
                else
                {
                    position_h = 0;
                    $("focus").style.left = "100px";
                }
            }
            break;
        case top.VK_LEFT:
            if (focusOn == "copyVideoTips")
            {
                if(position_h == 0)
                {
                    position_h = 1;
                    $("focus").style.left = "500px";
                }
                else
                {
                    position_h = 0;
                    $("focus").style.left = "100px";
                }
            }
            break;
        case top.VK_ENTER:
            if (focusOn == "copyVideoTips")
            {
                if(position_h == 0)
                {
                    console.log("--hzm test VK_ENTER is cancel");
                    $("copyVideoTips").style.display = "none";
                }
                else
                {
                    console.log("--hzm test VK_ENTER is OK");
                    $("tipWords").innerHTML = top.copyShopDemoTips[1];
                    $("tipWords").style.textAlign = "center";
                    $("cancel").style.display = "none";
                    $("ok").style.display = "none";
                    $("focus").style.display = "none";
                    setTimeout(function () {
                        top.g_setting.copyShopDemo(path);
                    },1000);
                }
                focusOn = "";
            }
            break;
        default:
            //任意键退出
            top.stopeSticker();
            top.jumpPage();
            break;
    }
}

function getStaticImagePath()
{
    var img;
    var icons = xmlDoc.getElementsByTagName("path");
    for (var i = 0; i < icons.length; i++)
    {
        img = icons[i].getElementsByTagName("image");
        if (img[0] != undefined)
            xmlStaticImgPath.push(img[0].childNodes[0].nodeValue);
        else
            xmlStaticImgPath.push("***");
    }
    return xmlStaticImgPath;
}

function getStaticIcon()
{
    var img;
    var icons = xmlDoc.getElementsByTagName("static_icon");
    for (var i = 0; i < icons.length; i++)
    {
        img = icons[i].getElementsByTagName("img");
        if (img[0] != undefined)
            xmlStaticImg.push(img[0].childNodes[0].nodeValue);
        else
            xmlStaticImg.push("***");
    }
    return xmlStaticImg;
}

function setScrollContentTitle(param)
{
    if (param.scrollWidth > param.clientWidth)//如果当前焦点选项真实句子长度长于预留的长度则需要做滚动显示
    {
        param.style.overflowX = "-webkit-marquee";
        param.style.textOverflow = "clip";
        /*htmlTagList[i].innerHTML = tempText;*/
    }
    else
    {
        param.style.overflowX = "hidden";
        param.style.textOverflow = "ellipsis";
        /*htmlTagList[i].innerHTML = tempText;*/
    }
}

function initData()
{

    var bodyList = top.document.getElementsByTagName("body");
    var scriptList = bodyList[0].getElementsByTagName("script");
    var srcvalue = scriptList[0].getAttribute("src");
    var eStickerFile = setting.getProperty("ro.sita.model.Esticker.Tags","Esticker.xml");
    var temp1 = srcvalue.split("/");
    var temp2 = temp1[1].split(".");
    language = temp2[0];
    if("true" == top.isSCBCFlag)
    {
        language = language.split("_")[0];
        $("contentTitleSpan").style.color = "#00b7b5";
        $("contentTitleSpan").style.fontSize = "65px";
        $("contentTitleSpan").style.top = "45px";
        $("contentTitleSpan").style.left = "119px";
        $("contentTitleSpan").style.fontFamily = "Arial";
        $("contentDetailSpan").style.color = "#00b7b5";
        $("contentDetailSpan").style.fontSize = "36px";
        $("contentDetailSpan").style.top = "125px";
        $("contentDetailSpan").style.left = "119px";
        $("contentDetailSpan").style.fontFamily = "Arial";
    }
    console.log("===huangzhming initData language = " + language);

    xmlURL = "config/" + eStickerFile;
    xmlURLBak = "config/Esticker_" + factory.projectId + ".xml";

    initDataFromXML();
    if (icon_num > ICON_STATIC_NUM)
    {
        initIconDiv();
    }
    else
    {
        ICON_STATIC_NUM = icon_num;
    }
    if (icon_num == iconImgArrayS.length)
    {
        for (var i = 0; i < icon_num; i++)
        {
            $("iconimg" + (i + 1)).src = iconImgArrayS[i];
        }
    }
    if("true" == top.isSCBCFlag)
    {
        $("estickBackground").src = "config/SCBC_image/bg_bar_v.png";
        $("mainDivImg").src = "config/SCBC_image//bg_bar_h_left.png";
    }
    else
    {
        if (iconStaticImgArray[0].indexOf("TCL") != -1)
        {
            $("estickBackground").src = "../images/esticker/new_bg_icon_bar.png";
        }
        else
        {
            $("estickBackground").src = "../images/esticker/bg_icon_bar.png";
        }
        $("mainDivImg").src = "../images/esticker/bg_info.png";
    }
    $("contentTitleSpan").innerHTML = contentTitleArray[0];
    setScrollContentTitle($("contentTitleSpan"));

    $("contentDetailSpan").innerHTML = contentDetailArray[0];

    $("icon6_2").getElementsByTagName("img")[0].src = iconStaticImgArray[0];

}


function initIconDiv()
{
    for (var i = ICON_STATIC_NUM; i < icon_num; i++)
    {
        var divNew = document.createElement("div");
        divNew.setAttribute("class", "iconDiv" + ICON_STATIC_NUM);
        divNew.setAttribute("id", "icon" + (i + 1));

        var imgNew = document.createElement("img");
        imgNew.setAttribute("id", "iconimg" + (i + 1));
        divNew.appendChild(imgNew);

        $("leftMoveShow").appendChild(divNew);
    }
}

var playUsbVideoTimer = 0;
var copyUsbVideoTimer = 0;
var TTTimer = 0;
function init()
{
    top.initTextDirection(window);
    initData();
    if(TTTimer)
    {
        clearTimeout(TTTimer);
        TTTimer = 0;
    }
    TTTimer = setTimeout(function ()
    {
        tt();
    }, 1750);
    if(playUsbVideoTimer)
    {
        clearTimeout(playUsbVideoTimer);
        playUsbVideoTimer = 0;
    }
    playUsbVideoTimer = setTimeout(function ()
    {
        playUsbVideo();
    }, 3000);
    console.log("iseStickerPlaying is:"+top.iseStickerPlaying);
    console.log("eStickerPlayingList is:"+top.eStickerPlayingList);
    console.log("eStickerPlayingVideoFlag is:"+top.eStickerPlayingVideoFlag);
    console.log("eStickerPlayingVideoDemoFlag is:"+top.eStickerPlayingVideoDemoFlag);

    if (top.iseStickerPlaying == 0)
    {
        copyUsbVideoTimer = setTimeout(function ()
        {
            copyUsbVideo();
        }, 3000);
    }
}

function uninit()
{
    if(TTTimer)
    {
        clearTimeout(TTTimer);
        TTTimer = 0;
    }
    if(playUsbVideoTimer)
    {
        clearTimeout(playUsbVideoTimer);
        playUsbVideoTimer = 0;
    }
    if(copyUsbVideoTimer)
    {
        clearTimeout(copyUsbVideoTimer);
        copyUsbVideoTimer = 0;
    }
}

function playUsbVideo()
{
    //优先级：信源>USB>预置
    //if (top.g_channel.channelProgramStatus() > 0 && top.g_channel.inputSource <=1 &&top.g_channel.currentSignalStatus)//有信号则返回
    console.log("----------------------------top.g_channel.currentSignalStatus = " + top.g_channel.currentSignalStatus);
    if(top.g_channel.inputSource <= 1)//TV信源下需要判断shop后第一次的状态
    {
        if(top.g_channel.channelProgramStatus() > 0 && top.g_channel.currentSignalStatus)
        {
            top.iseStickerPlaying = 1;
            return;
        }
    }else{
        if(top.g_channel.currentSignalStatus)
        {
            top.iseStickerPlaying = 1;
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
                    top.iseStickerPlaying = 1;
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
                top.iseStickerPlaying = 1;
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

            //开始播放
            top.g_channel.testLog("========> xiaoxu : start play :" + top.eStickerPlayingList[0].path);
            if (top.eStickerPlayingVideoDemoFlag)
            {
                demoVideoValue = setting.getProperty("app.ui.demoVideoValue","0");
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

function copyUsbVideo()
{
    path = top.g_setting.getProperty("ro.sita.cfg.app.Esticker_video_path","NULL");
    //1.如果没有配置演示视频路径，则返回
    if (path == "NULL")
    {
        console.log("--hzm test the Esticker_video_path is not configured!");
        return;
    }
    //2.获取usb设备列表
    if (multimedia.deviceStatus())
    {
        var usbList = multimedia.getDiskListInfo();
        for (var i = 0; i < usbList.length; i++)
        {
            var videoList = multimedia.getMediaFileList(0, 2, usbList[i].path + "/tclvideo", 0, -1);
            //3.存在tclvideo目录并且有video
            if (videoList.length > 0)
            {
                //4.拷贝tclvideo目录下所有文件到配置的路径
                $("copyVideoTips").style.display = "block";
                $("tipWords").style.textAlign = "left";
                $("cancel").style.display = "block";
                $("ok").style.display = "block";
                $("focus").style.display = "block";
                $("tipWords").innerHTML = top.copyShopDemoTips[0];
                $("cancel").innerHTML = top.okCancel[1];
                $("ok").innerHTML = top.okCancel[0];
                $("focus").style.left = "100px";
                position_h = 0;
                focusOn = "copyVideoTips";
            }
            else
            {
                console.log("--hzm test tclvidel folder does not exist or no video file");
            }
        }
    }
    else
    {
        console.log("--hzm test no USB inserted");
    }
}

function notifyProcess(evt)
{
    var msg = evt.which;
    top.g_channel.testLog("========> xiaoxu  msg:" + msg);

    switch (msg)
    {
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
            top.iseStickerPlaying = 0;
			top.g_channel.testLog("========> xiaoxu : stop");
			top.g_channel.testLog("========> xiaoxu : start play :" + top.eStickerPlayingList[currentIndex].path);
			top.g_availableStatus = multimedia.mediaOpen(top.eStickerPlayingList[currentIndex].path);
            console.log("--hzm debug top.g_availableStatus = " + top.g_availableStatus);
            if (top.g_availableStatus == 0)
            {
                top.iseStickerPlaying = 1;
            }
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
            setTimeout(function () {
                copyUsbVideo();
            },3000);
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
        case top.E_NOTIFY_ESTICKER_COPY_SHOPDEMO_END:
            console.log("--hzm test get msg E_NOTIFY_ESTICKER_COPY_SHOPDEMO_END");
            console.log("--hzm test get eStickerPlayingVideoFlag = " + top.eStickerPlayingVideoFlag);
            console.log("--hzm test get eStickerPlayingVideoDemoFlag = " + top.eStickerPlayingVideoDemoFlag);
            $("tipWords").innerHTML = top.copyShopDemoTips[2];
            setTimeout(function () {
                $("copyVideoTips").style.display = "none";
            },3000);
            //拷贝U盘视频到data目录成功后，需要将demoVideoValue恢复为第一个视频的index，否则之前选的是第三个，而拷贝了一个视频，菜单中会显示undefined
            demoVideoValue = 0;
            setting.setProperty("app.ui.demoVideoValue","0");
            //如果播放的是内置视频，拷贝完毕后需要将播放列表刷新 否则视频播放完不会自动播拷贝的视频
            if (top.eStickerPlayingVideoDemoFlag == 1)
            {
                var demoVideoPath = top.g_setting.getProperty("ro.sita.cfg.app.Esticker_video_path","NULL");
                top.eStickerPlayingList = multimedia.getMediaFileList(0, 2, demoVideoPath, 0, -1);
            }
            break;
        case top.E_NOTIFY_ESTICKER_COPY_SHOPDEMO_ERROR:
            console.log("--hzm test get msg E_NOTIFY_ESTICKER_COPY_SHOPDEMO_ERROR");
            $("tipWords").innerHTML = top.copyShopDemoTips[3];
            setTimeout(function () {
                $("copyVideoTips").style.display = "none";
            },3000);
            break;
    }
}

var t;

function tt()
{
    /****/
    test();
    t = setTimeout("tt()", 10000);
}
function showPicturebyHtml(param)
{
    $("bigWindow").style.display = "block";
    $("bigWindow").getElementsByTagName("img")[0].src = imageArrayPlay[param++];
    setTimeout(function ()
    {
        if (param < imageArrayPlay.length)
        {
            showPicturebyHtml(param);
        }
        else
        {
            setTimeout(function ()
            {
                $("bigWindow").style.display = "none";
                $("bigWindow").getElementsByTagName("img")[0].src = "";
            }, 1000);

        }
    }, 5000);

}
function test()
{

    setTimeout(function ()
    {
        //console.log("==huangzhming test() icon_position ="+icon_position);
        //console.log("==huangzhming test() name ="+xmlIconId[icon_position]);
        //console.log("==huangzhming test() direction ="+direction);
        //console.log("==huangzhming test() icon_num ="+icon_num);
        if (icon_position > 0)
        {
            $("icon" + icon_position).className = "iconFade";
            $("mainDiv").className = "mainDivDisappear";
            $("contentDiv").className = "contentDivHidden";
        }
        //优化当一边动画播完最后一个icon后不继续播动画，否则切换到另一边播动画时，第一个icon会在最上边出现
        if (icon_position == icon_num)
        {
            console.log("==huangzhming do nothing !! ");
            return;
        }
        else
        {
            $("icon" + (icon_position + 1)).className = "iconFocus";
        }

        if (direction == "left")
        {
            if("true" == top.isSCBCFlag)
            {
                $("mainDivImg").src = "config/SCBC_image/bg_bar_h_left.png";
                $("contentDetailSpan").style.left = "119px";
                $("contentTitleSpan").style.left = "119px";
            }
            else
            {
                $("mainDivImg").src = iconImgArrayL[icon_position];
            }
        }
        else
        {
            if("true" == top.isSCBCFlag)
            {
                $("mainDivImg").src = "config/SCBC_image/bg_bar_h_right.png";
                $("contentDetailSpan").style.left = "79px";
                $("contentTitleSpan").style.left = "79px";
            }
            else
            {
                $("mainDivImg").src = iconImgArrayR[icon_position];
            }
        }

        /*if (direction == "left")
        {
            if (xmlIconId[icon_position] == "Smart")
                $("mainDivImg").src = "../images/esticker/Esticker_SMART_B_l.png";
            else if (xmlIconId[icon_position] == "Netflix")
                $("mainDivImg").src = "../images/esticker/Esticker_Netflix_B_l.png";
            else if (xmlIconId[icon_position] == "YouTube")
                $("mainDivImg").src = "../images/esticker/Esticker_Youtube_B_l.png";
            else if (xmlIconId[icon_position] == "App Store")
                $("mainDivImg").src = "../images/esticker/Esticker_App store_B_l.png";
            else if (xmlIconId[icon_position] == "T-Cast")
                $("mainDivImg").src = "../images/esticker/Esticker_T-cast_B_l.png";
            else if (xmlIconId[icon_position] == "Micro Dimming")
                $("mainDivImg").src = "../images/esticker/Esticker_Micro Dimming_B_l.png";
            else if (xmlIconId[icon_position] == "Freeview+")
                $("mainDivImg").src = "../images/esticker/Esticker_freeview+_B_l.png";
            else if (xmlIconId[icon_position] == "Sports Mode")
                $("mainDivImg").src = "../images/esticker/Esticker_Sports Mode_B_l.png";
            if("true" == top.isSCBCFlag)
            {
                $("mainDivImg").src = "config/SCBC_image/bg_bar_h_left.png";
                $("contentDetailSpan").style.left = "119px";
                $("contentTitleSpan").style.left = "119px";
            }
        }
        else
        {
            if (xmlIconId[icon_position] == "Smart")
                $("mainDivImg").src = "../images/esticker/Esticker_SMART_B_r.png";
            else if (xmlIconId[icon_position] == "Netflix")
                $("mainDivImg").src = "../images/esticker/Esticker_Netflix_B_r.png";
            else if (xmlIconId[icon_position] == "YouTube")
                $("mainDivImg").src = "../images/esticker/Esticker_Youtube_B_r.png";
            else if (xmlIconId[icon_position] == "App Store")
                $("mainDivImg").src = "../images/esticker/Esticker_App store_B_r.png";
            else if (xmlIconId[icon_position] == "T-Cast")
                $("mainDivImg").src = "../images/esticker/Esticker_T-cast_B_r.png";
            else if (xmlIconId[icon_position] == "Micro Dimming")
                $("mainDivImg").src = "../images/esticker/Esticker_Micro Dimming_B_r.png";
            else if (xmlIconId[icon_position] == "Freeview+")
                $("mainDivImg").src = "../images/esticker/Esticker_freeview+_B_r.png";
            else if (xmlIconId[icon_position] == "Sports Mode")
                $("mainDivImg").src = "../images/esticker/Esticker_Sports Mode_B_r.png";
            if("true" == top.isSCBCFlag)
            {
                $("mainDivImg").src = "config/SCBC_image/bg_bar_h_right.png";
                $("contentDetailSpan").style.left = "79px";
                $("contentTitleSpan").style.left = "79px";
            }
        }*/
    }, 10);
    //设置标题 和 描述内容
    setTimeout(function ()
    {
        $("mainDiv").className = "mainDivDisplay";
        $("mainDivImg").className = "mainDivImgDisplay";
        $("contentTitleSpan").innerHTML = contentTitleArray[icon_position];
        setScrollContentTitle($("contentTitleSpan"));
        $("contentDetailSpan").innerHTML = contentDetailArray[icon_position];
        $("contentDiv").className = "contentDivShow";
    }, 300);

    /****/
    setTimeout(function ()
    {
        /****/
        for (var m = icon_position; m < (icon_num - 1); m++)
        {
            if ((m - icon_position) < iconMovetoArray.length)
            {
                //alert("1:icon"+(m + 2)+".className :"+iconMovetoArray[m - icon_position]);
                //console.log("1:icon"+(m + 2)+".className :"+iconMovetoArray[m - icon_position]);
                $("icon" + (m + 2)).className = iconMovetoArray[m - icon_position];
            }
            else
            {
                //alert("1--:icon"+(m + 2)+".className :"+iconMovetoArray[iconMovetoArray.length-1]);
                //console.log("1--:icon"+(m + 2)+".className :"+ iconMovetoArray[m - icon_position]);
                $("icon" + (m + 2)).className = iconMovetoArray[iconMovetoArray.length - 1];
            }
        }
		if (icon_num > ICON_STATIC_NUM - 2)
		{
            for (var n = (icon_num - ICON_STATIC_NUM + 1); n < icon_position +1; n++)
			{
			    //优化当一边动画播完最后一个icon后不继续播动画，否则切换到另一边播动画时，第一个icon会在最上边出现
                if (icon_position == icon_num)
                {
                    //console.log("--hzm icon_position = " + icon_position);
                    //console.log("2:icon"+(n -icon_num+ICON_STATIC_NUM)+".className : "+iconMovetoArray[ICON_STATIC_NUM - icon_position + n -1 ]);
                    $("icon" + (n - icon_num + ICON_STATIC_NUM)).className = iconMovetoArray[ICON_STATIC_NUM - icon_position + n - 1];
                }
                else
                {
                    //	alert("2:icon"+(n -icon_num+ICON_STATIC_NUM)+".className : "+iconMovetoArray[ICON_STATIC_NUM - icon_position + n -2 ]);
                    //console.log("2:icon"+(n -icon_num+ICON_STATIC_NUM)+".className : "+iconMovetoArray[ICON_STATIC_NUM - icon_position + n -2 ]);
                    $("icon" + (n - icon_num + ICON_STATIC_NUM)).className = iconMovetoArray[ICON_STATIC_NUM - icon_position + n - 2];
                }
			}
		}
		else
        {
            for (var n = 0; n < icon_position; n++)
            {
                //alert("2:"+iconMovetoArray[ICON_STATIC_NUM - icon_position + n - 1]);
                //alert("2:"+iconMovetoArray[ICON_STATIC_NUM - icon_position + n - 1]);
                console.log("3:"+iconMovetoArray[ICON_STATIC_NUM - icon_position + n - 1]);
                $("icon" + (n + 1)).className = iconMovetoArray[ICON_STATIC_NUM - icon_position + n - 3];

            }
        }

        icon_position++;
        if (icon_position == icon_num + 1)
        {
            clearTimeout(t);
            var timeoutTime = 8000;
            allDisappear();

            //display again,80s
            setTimeout(function ()
            {
                if (direction == "left")
                {
                    direction = "right";
                    if (iconStaticImgArray[0].indexOf("TCL") != -1)
                    {
                        $("leftDivId").style.left = 1630 + "px";
                        $("mainDiv").style.left = 10 + "px";
                    }
                    else
                    {
                        $("leftDivId").style.left = 1671 + "px";
                        $("mainDiv").style.left = 40 + "px";
                    }
                    if("true" == top.isSCBCFlag)
                    {
                        $("mainDivImg").src = "../images/esticker/bg_bar_h_left.png";
                    }
                    else
                    {
                        if (iconStaticImgArray[0].indexOf("TCL") != -1)
                        {
                            $("estickBackground").src = "../images/esticker/new_bg_icon_bar.png";
                        }
                        else
                        {
                            $("estickBackground").src = "../images/esticker/bg_icon_bar.png";
                        }
                    }
                    $("contentTitleSpan").className = "contentTitle_right";
                    $("contentDetailSpan").className = "contentDetail_right";
                    $("icon6_2").getElementsByTagName("img")[0].src = iconStaticImgArray[1];
                }
                else
                {
                    direction = "left";
                    if("true" == top.isSCBCFlag)
                    {
                        $("leftDivId").style.left = 0 + "px";
                        $("mainDiv").style.left = 270 + "px";
                        $("mainDivImg").src = "../images/esticker/bg_bar_h_right.png";
                    }
                    else
                    {
                        if (iconStaticImgArray[0].indexOf("TCL") != -1)
                        {
                            $("leftDivId").style.left = 20 + "px";
                            $("mainDiv").style.left = 310 + "px";
                            $("estickBackground").src = "../images/esticker/new_bg_icon_bar.png";
                        }
                        else
                        {
                            $("leftDivId").style.left = 0 + "px";
                            $("mainDiv").style.left = 270 + "px";
                            $("estickBackground").src = "../images/esticker/bg_icon_bar_r.png";
                        }
                    }
                    $("contentTitleSpan").className = "contentTitle";
                    $("contentDetailSpan").className = "contentDetail";
                    $("icon6_2").getElementsByTagName("img")[0].src = iconStaticImgArray[0];
                }
                $("leftDivId").className = "leftDiv";

            }, 1000 + timeoutTime);
            setTimeout(function ()
            {
                tt();
            }, 1000 + timeoutTime + 1750);

        }
    }, 300 + 50);

    setTimeout(function ()
    {
        $("mainDivImg").className = "mainDivImgDisplayTemp";
    }, 300 + 100);

}

function allDisappear()
{
    $("leftDivId").className = "leftDivDisappear";
    $("mainDiv").className = "mainDivDisappear";
    /*if (icon_num > ICON_STATIC_NUM)
    {
        for (var i = ICON_STATIC_NUM; i < icon_num; i++)
        {
            $("icon" + (i + 1)).className = "iconDiv7";
        }
    } else
    {
        $("icon" + ICON_STATIC_NUM).className = "iconDiv7";
    }*/

    icon_position = 0;
    $("contentDiv").className = "contentDivHidden";
}


function initDataFromXML()
{
    parseDOMXml(xmlURL);

    icon_num = getIconLength();
    getIconId();
    iconImgArrayS = getImg_S();
    iconImgArrayL = getImg_L();
    iconImgArrayR = getImg_R();
    iconStaticImgArray = getStaticIcon();
    imageArrayPlay = getStaticImagePath();
    var i = 0;
    for (i = 0; i < imageArrayPlay.length; i++)
    {
        preload[i] = new Image();
        preload[i].src = imageArrayPlay[i];
    }

    contentTitleArray = getTitle(language);
    contentDetailArray = getDescription(language);

}

function getXMLDoc()
{
    try
    {
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        return xmlDoc;
    } catch (e)
    {
        try
        {
            //Firefox, Mozilla, Opera, etc.
            xmlDoc = document.implementation.createDocument("", "", null);
            return xmlDoc;
        } catch (e)
        {
            //alert(e.message);
        }
    }
}

function parseDOMXml(xmlFile) //add yums 2014-10-27
{
    if (window.XMLHttpRequest) //用http请求读取本地xml文件
    {
        xmlhttp = new XMLHttpRequest();
    } else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (xmlhttp != null)
    {
        xmlhttp.open("GET", xmlFile, false);
        xmlhttp.send(null);
        if (xmlhttp.responseText != "")
        {
            xmlTxt = xmlhttp.responseText;
        }
        else
        {
            xmlhttp.open("GET", xmlURLBak, false);
            xmlhttp.send(null);
            if (xmlhttp.responseText != "")
            {
                xmlTxt = xmlhttp.responseText;
            }
            else
            {
                xmlhttp.open("GET", xmlURLDefault, false);
                xmlhttp.send(null);
                xmlTxt = xmlhttp.responseText;
            }
        }

    }

    if (window.DOMParser)
    {
        var parser = 0;
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(xmlTxt, "text/xml");
    } else //IE
    {
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = "false";
        xmlDoc.loadXML(xmlTxt);
    }
    return xmlDoc;
}


function getIconLength() //add yums:2014-10-28  获取xml文件中Icon标签的个数
{
    return xmlDoc.getElementsByTagName("icon").length;
}

function getIconId()
{
    var idValue;
    var icons;
    icons = xmlDoc.getElementsByTagName("icon");
    for (var i = 0; i < icons.length; i++)
    {
        idValue = icons[i].getAttribute("id");
        if (idValue != null)
            xmlIconId.push(idValue);
        else
            xmlIconId.push("***");
    }
    return xmlIconId;
}

function getImg_L() //add yums
{
    var img_L;
    var icons;
    icons = xmlDoc.getElementsByTagName("icon");
    for (var i = 0; i < icons.length; i++)
    {
        img_L = icons[i].getElementsByTagName("img_L");
        if (img_L[0] != undefined)
            xmlImg_L.push(img_L[0].childNodes[0].nodeValue);
        else
            xmlImg_L.push("***");
        //top.g_channel.testLog(xmlImg_L[i]);
    }
    return xmlImg_L;
}

function getImg_R()
{
    var img_R;
    var icons;
    icons = xmlDoc.getElementsByTagName("icon");
    for (var i = 0; i < icons.length; i++)
    {
        img_R = icons[i].getElementsByTagName("img_R");
        if (img_R[0] != undefined)
            xmlImg_R.push(img_R[0].childNodes[0].nodeValue);
        else
            xmlImg_R.push("***");
        //top.g_channel.testLog(xmlImg_L[i]);
    }
    return xmlImg_R;
}

function getImg_S() //add yums
{
    var img_S;
    var icons;
    icons = xmlDoc.getElementsByTagName("icon");
    for (var i = 0; i < icons.length; i++)
    {
        img_S = icons[i].getElementsByTagName("img_S");

        if (img_S[0] != undefined)
        {
            xmlImg_S.push(img_S[0].childNodes[0].nodeValue);
        } else
            xmlImg_S.push("***");
        //top.g_channel.testLog(xmlImg_S[i])
    }
    return xmlImg_S;
}

function getTitle(lanuage) //add yums:2014-10-28
{
    var titleValue;
    var icons;
    icons = xmlDoc.getElementsByTagName("icon");

    for (var i = 0; i < icons.length; i++)
    {
        //top.g_channel.testLog("getTitle:"+icons[i].getElementsByTagName("title")[0].getElementsByTagName(lanuage)[0]);
        if (icons[i].getElementsByTagName("title")[0].getElementsByTagName(lanuage)[0] != undefined && icons[i].getElementsByTagName("title")[0] != undefined)
        {
            titleValue = icons[i].getElementsByTagName("title")[0].getElementsByTagName(lanuage)[0].childNodes[0].nodeValue;
            xmlTitle.push(titleValue);
        } else
        {
            xmlTitle.push("***");
        }
        //top.g_channel.testLog(xmlTitle[i]);
    }
    return xmlTitle;
}

function getDescription(lanuage) //add yums:2014-10-28
{
    var desValue;
    var icons;
    icons = xmlDoc.getElementsByTagName("icon");
    for (var i = 0; i < icons.length; i++)
    {


        if (icons[i].getElementsByTagName("description")[0].getElementsByTagName(lanuage)[0] != undefined && icons[i].getElementsByTagName("description")[0] != undefined)
        {
            desValue = icons[i].getElementsByTagName("description")[0].getElementsByTagName(lanuage)[0].childNodes[0].nodeValue;
            xmlDescription.push(desValue);
        } else
        {
            xmlDescription.push("***");
        }
        //top.g_channel.testLog(xmlDescription[i]);
    }
    return xmlDescription;
}


function loadXML(file)
{
    try //Internet Explorer
    {
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = false;
        xmlDoc.load(file);
    } catch (e)
    {
        try //Firefox, Mozilla, Opera, etc.
        {
            xmlDoc = document.implementation.createDocument("", "", null);
            xmlDoc.async = false;
            xmlDoc.load(file);
        } catch (e)
        {
            try //Google Chrome
            {
                var xmlhttp = new window.XMLHttpRequest();
                xmlhttp.open("GET", file, false);
                xmlhttp.send(null);
                xmlDoc = xmlhttp.responseXML.documentElement;
            } catch (e)
            {
                alert("您的浏览器不能正常加载文件。请切换到兼容模式，或者更换浏览器");
            }
        }
    }
    alert(xmlDoc)
    return xmlDoc;
}


function $(id)
{
    return document.getElementById(id);
}
