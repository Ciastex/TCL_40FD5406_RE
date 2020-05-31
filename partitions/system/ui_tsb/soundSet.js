/******************** created by chenhua ***********************/
var soundSetTitleWords = [top.souOptions[0], top.souOptions[4], top.souOptions[5], top.souOptions[6], top.souOptions[2],
    top.souOptions[7], top.picOptions[15], top.souOptions[11], top.souPresetPara[0], top.souPresetPara[1],
    top.souPresetPara[2], top.souPresetPara[3], top.souPresetPara[4], top.souOptions[1],top.souOptions[12]];
var offOnWords = top.offOn;
var TTSLanguageWords		= ["English","Spanish"];
var TTSVoiceWords		= ["Anita_USA","Molly_MX"];
var TTSTypeWords = ["TTS","TTS Verbosity","TTS Rate"];
var SpeedWords		= ["Slow","Normal","Fast","Very Fast","Very Slow"];
var TTSVerbosityWords		= ["Hight","Low"];
var spdifTypeWords = top.souSpdifType;
var soundPromptCon = [top.prompts[12], top.prompts[13], top.prompts[14], top.prompts[15], top.prompts[16], top.prompts[17], top.prompts[29]];
var soundPresetModeWords 		= [top.souPreset[0], top.souPreset[1], top.souPreset[2],
    top.souPreset[3], top.resetStadium, top.souPreset[4]];
var soundPromptImg = ["images/info-1_2.png", "images/info-1_3.png", "images/info-1_4.png", "images/info-1_5.png", "images/info-1_6.png"]
var mainFocus = ["images/Focus_Frame/Focus-1.png", "images/Focus_Frame/Focus-2.png"];
var audioSceneWords = top.audioScenes;
var soundPgreTitleWords = top.souOptions[6];

var setting = top.g_setting;
var channel = top.g_channel;
var positionV = 0;					//主界面坐标
var form_position_h = 0;					//弹出框焦点位置
var soundPreset = 0;
var autoVolumeCtrl = 0;
var bassBoostMode = 0;
var sPDIFType = 0;
var sPDIFDelay = 0;
var audioScene = 0;					//0 desk top; 1 wall mount
var audioDelay = 0;
var sound100HZValue = 0;
var sound300HZValue = 0;
var sound1KHZValue = 0;
var sound3KHZValue = 0;
var sound10KHZValue = 0;
var balanceValue = 0;
var sPDIFDDPValue = 0;
var TTSLanguageValue       = 0;
var TTSVoiceValue               = 0;
var SpeedValue               = 0;
var focusSpeechAudioValue			        = 0;
var audioDelay              = 0;
var volumeValue              = 0;
var pitchValue              = 0;
var switchValue			        = 0;
var verbosityValue			        = 0;
var focusOn = "menu";				//menu,autoVolumeCtrl;sPDIFType ;audioMode;soundType;progressBar

var SUB_MENU_START = 75;					//二级级菜单焦点移动起始位置
var SUB_MENU_STEP = 70;					//二级级主菜单焦点移动的step
var FORM_STEP = 80;					//弹出框焦点移动的step
var PROGRESS_WIDTH = 300;
var EXTRA_PROGRESS_WIDTH = 900;					// 弹出式进度条的宽度

var factory = top.g_factory;
var menuLock = 0;
var hotelEnable = 0;
var titleWords = top.sysOptions[3];
var psswordWords = top.others[2];
var passwordLength = 0;
var password = "";
var passIncorrectWords = top.passError;
var lockFlag = 1;
var soundPresetOffSet = 0;

var IFRAME_LEFT_OFFSET = 270;//subMenu1这个iframe在framwork中的相对左偏移
var EXTRA_PROGRESS_BAR_LEFT_OFFSET = 310;//进度条容器相对于submenu1这个iframe的左偏移
var PROGRESS_START_LEFT_OFFSET = IFRAME_LEFT_OFFSET + EXTRA_PROGRESS_BAR_LEFT_OFFSET;//进度条容器开始位置相对于framework的左偏移
var PROGRESS_SPDIF_MAX_VALUE = 600;//sPDIFDelay 的取值范围是0-PROGRESS_SPDIF_MAX_VALUE,最大值为PROGRESS_SPDIF_MAX_VALUE
var PROGRESS_AUDIO_MAX_VALUE = 1000;
var PROGRESS_MAX_VALUE = 100;

var PROGRESS_AUDIO_DELAY_MAX_VALUE = 250;
var PROGRESS_AUDIO_DELAY_MIN_VALUE = 0;

var sndMenuRightSpanList;
var sndMenuRightLiList;
var listFormLiList;
var listFirstSpans;

var previewSound                = 0;

var showItemNum = 0;
//add for football mode
var footballModeFlag = false;

document.onsystemevent = notifyProcess;

var menuList =
[
	{name:"Sound preset"			     ,  param:function(){doSoundPreset();            },		showFlag:1},
    {name:"sound100Hz"               	 ,  param:function(){doSound100Hz();			  }, 		showFlag:1},
    {name:"sound300Hz"               	 ,  param:function(){doSound300Hz();			  }, 		showFlag:1},
    {name:"sound1KHz"               	 ,  param:function(){doSound1KHz();			  }, 		showFlag:1},
    {name:"sound3KHz"               	 ,  param:function(){doSound3KHz();			  }, 		showFlag:1},
    {name:"sound10KHz"               	 ,  param:function(){doSound10kHz();			  }, 		showFlag:1},
    {name:"balance"                 	 ,  param:function(){doBalance();			      }, 		showFlag:1},
	{name:"Auto volume control"          ,  param:function(){doAutovolumecontrol();	  }, 	    showFlag:1},
	{name:"SPDIF type"   				 ,  param:function(){doSPDIFType();  			  }, 		showFlag:1},
	{name:"SPDIF delay"               	 ,  param:function(){doSPDIFDelay();			  }, 		showFlag:1},
	{name:"Audio delay"               	 ,	param:function(){doAudioDelay();			  }, 		showFlag:1},
    {name:"SPDIF DDP"               	 ,	param:function(){doSPDIFDDP();			      }, 		showFlag:1},
	{name:"TV placement"				 ,	param:function(){doTVplacement();			  }, 		showFlag:1},
    {name:"bassBoost"   				 ,  param:function(){doBassBoost();  			  }, 		showFlag:1},
	{name:"Advanced settings"		 	 ,	param:function(){doAdvancedSettings();		  }, 		showFlag:1},
    {name:"TTS"		                	 ,	param:function(){doTTSSettings();		      }, 		showFlag:1},
    //{name:"TTS Switch"		 	         ,	param:function(){doSwitch();		  }, 		showFlag:1},
    //{name:"TTS Language"		 	     ,	param:function(){doTTSLanguage();		  }, 		showFlag:1},
    //{name:"TTS Voice"		 	         ,	param:function(){doTTSVoice();		  }, 		showFlag:1},
    //{name:"TTS Volume"		 	         ,	param:function(){doVolume();		  }, 		showFlag:1},
    //{name:"TTS Speed"		 	         ,	param:function(){doSpeed();		  }, 		showFlag:1},
    //{name:"TTS Focus Speech Audio"		 ,	param:function(){doFocusSpeechAudio();		  }, 		showFlag:1},
    //{name:"TTS Pitch"		 	         ,	param:function(){doPitch();		  }, 		showFlag:1},
    //{name:"TTS Verbosity"		 	     ,	param:function(){doVerbosity();		  }, 		showFlag:1}
];


function initSetRegion()
{
    if (top.uiColourStyleFlag == 1)
    {
        var classlist;
        classlist = document.getElementsByClassName("dialogInputFocus");
        for(var i = 0;i<classlist.length;i++)
        {
            //classlist[i].setAttribute("class","progressImgOtherStyle");
            classlist[i].style.border = "solid" + top.uiColourStyle;
            //classlist[i].className = "progressImgOtherStyle";
        }

        classlist = $("adjustProgBar").getElementsByClassName("progressBarLeft");
        for (var i = 0; i < classlist.length; i++) {
            classlist[i].style.background =  top.uiColourStyle;
        }
    }
}

function init()
{
    top.initTextDirection(window);
    menuLock = factory.menuLock;
    hotelEnable = factory.hotelEnable;

	initSetRegion();
    sndMenuRightLiList = $("sndMenuRight").getElementsByTagName("li");    //得到 8组 li
    sndMenuRightSpanList = $("sndMenuRight").getElementsByTagName("span");//得到 8组 span

    listFormLiList = $("listForm").getElementsByTagName("li");//弹出列表框 的 5组 li
    progressDivList = $("adjustProgBar").getElementsByTagName("div");//进度条的 3组 div

    listFirstSpans = $("sndMenuRight").getElementsByClassName("listFirstProperty");//得到8组span

    if ((menuLock) && (hotelEnable) && (lockFlag))
    {
        sndMenuRightSpanList[0].innerHTML = titleWords;
        sndMenuRightLiList[0].getElementsByTagName("img")[0].style.display = "block";
    }
    else
    {
        sndMenuRightSpanList[0].innerHTML = soundSetTitleWords[0];//Sound preset
        sndMenuRightSpanList[1].innerHTML = soundSetTitleWords[8];
        sndMenuRightSpanList[2].innerHTML = soundSetTitleWords[9];
        sndMenuRightSpanList[3].innerHTML = soundSetTitleWords[10];
        sndMenuRightSpanList[4].innerHTML = soundSetTitleWords[11];
        sndMenuRightSpanList[5].innerHTML = soundSetTitleWords[12];
        sndMenuRightSpanList[6].innerHTML = soundSetTitleWords[13];
        sndMenuRightSpanList[7].innerHTML = soundSetTitleWords[1];//Auto volume control
        sndMenuRightSpanList[8].innerHTML = soundSetTitleWords[2];//SPDIF type
        sndMenuRightSpanList[9].innerHTML = soundSetTitleWords[3];//SPDIF delay
        sndMenuRightSpanList[10].innerHTML = soundSetTitleWords[4];//Audio delay
        sndMenuRightSpanList[11].innerHTML = soundSetTitleWords[14];//SPDIF DDP
        sndMenuRightSpanList[12].innerHTML = soundSetTitleWords[5];//TV placement
        sndMenuRightSpanList[13].innerHTML = soundSetTitleWords[7];//Bass boost
        sndMenuRightSpanList[14].innerHTML = soundSetTitleWords[6];//Advanced settings
        sndMenuRightSpanList[15].innerHTML = TTSTypeWords[0];//TTS settings
        //sndMenuRightSpanList[14].innerHTML = soundSetTitleWords[14];
        //sndMenuRightSpanList[15].innerHTML = soundSetTitleWords[15];
        //sndMenuRightSpanList[16].innerHTML = soundSetTitleWords[16];
        //sndMenuRightSpanList[17].innerHTML = soundSetTitleWords[17];
        //sndMenuRightSpanList[18].innerHTML = soundSetTitleWords[18];
        //sndMenuRightSpanList[19].innerHTML = soundSetTitleWords[19];
        //sndMenuRightSpanList[20].innerHTML = soundSetTitleWords[20];
        //sndMenuRightSpanList[21].innerHTML = soundSetTitleWords[21];
        positionV = 0;
        $("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP * positionV + "px";
    }
    updateUI();
    addMouseListener();

    top.doEleScrForNoOption(listFirstSpans, positionV, 0);
}

function updateUI()//初始化、更新界面
{
    //1、重新得到数据
    updateItemValues();

    //2、根据数据设置showflag
    checkShowMenu();

    //3、为每个item重新赋值
    setValuesForItems();

    //4、显示每一个item
    showItems();
}


//-----------1、得到每个item的初始值--------------------------
function updateItemValues()
{
    soundPreset = soundModeTransform(setting.soundPreset, 0);
    autoVolumeCtrl =  (0 == top.isLAFlag && 0 == top.isNAFlag && 0 == top.isAPFlag && 0 == top.isAUFlag) ? setting.getSoundEffectsMode(0) : setting.autoVolumeCtrl;//LA不适用TCL自主音效
    sPDIFType = setting.sPDIFType;//SPDIF Type
    sPDIFDelay = setting.sPDIFDelay;//SPDIF Delay
    audioScene = setting.audioScene;//TV placement
    audioDelay = setting.audioDelay;//Audio Delay
    sound100HZValue = setting.soundPreset100;
    sound300HZValue = setting.soundPreset300;
    sound1KHZValue = setting.soundPreset1000;
    sound3KHZValue = setting.soundPreset3000;
    sound10KHZValue = setting.soundPreset10000;
    bassBoostMode = setting.getSoundEffectsMode(1);   //bassBoost
    balanceValue = setting.soundBalance;
    sPDIFDDPValue = setting.sPDIFDDP;
    footballModeFlag = setting.footballMode;//[0]off [1]on

    //TTSLanguageValue = setting.ttsLang;
    //TTSVoiceValue = setting.ttsVoiceType;
    //switchValue = setting.ttsSwitch;
    //SpeedValue = setting.ttsSpeed;
    //focusSpeechAudioValue = setting.ttsSpeechAudio;
    //volumeValue = setting.ttsVoiceVolume;
    //pitchValue = setting.ttsPitch;
    //verbosityValue = setting.ttsVerbosity;
    if(TTSLanguageValue == 0)
    {
        TTSVoiceValue = 0;
    }

    if(TTSLanguageValue == 1)
    {
        TTSVoiceValue = 1;
    }
}


//-----------2、得到每个item的showflag标志位------------------
function checkShowMenu()
{

    if ((menuLock) && (hotelEnable) && (lockFlag))//
    {
        menuList[0].showFlag = 1;//第一个 必须显示 是lock的按钮
        for (var i = 1; i < menuList.length; i++)
        {
            menuList[i].showFlag = 0;//其他都隐藏
        }

    }
    else//没有锁的话，就都正常显示了
    {
        for (var i = 0; i < menuList.length; i++)
        {
            menuList[i].showFlag = 1;
        }

        if(0 == sPDIFType || 2 == sPDIFType)   //当Spdif type设为PCM的时候，Spdif delay选项可见;当spdif type设为AUTO或OFF的时候，Spdif delay选项不可见
        {
            menuList[9].showFlag = 0;
        }
		if(top.pvrPlayStatusFlag == 1) //播放PVR时不显示Spdif type相关选项
		{
			menuList[8].showFlag = 0;
			menuList[9].showFlag = 0;
		}
        if(1 == sPDIFType || 2 == sPDIFType || top.getArcStatus() != true)   //当Spdif type设为AUTO的时候，Spdif DDP选项可见;当spdif type设为PCM或OFF的时候，Spdif DDP选项不可见
        {
            menuList[11].showFlag = 0;
        }
        if(footballModeFlag)
        {
            menuList[1].showFlag = 0;
            menuList[2].showFlag = 0;
            menuList[3].showFlag = 0;
            menuList[4].showFlag = 0;
            menuList[5].showFlag = 0;
            menuList[6].showFlag = 0;
        }
        if(top.isLAFlag || top.isAPFlag || top.isSCBCFlag)
        {
            menuList[13].showFlag = 0;
        }

        if(top.isNAFlag)
        {
            menuList[10].showFlag = 0;   //北美暂时不需要audio delay
        }
        if("on" == top.g_setting.getProperty("ro.sita.cfg.app.ttsMenu","off")) //只有在app.json中增加了ttsMenu为on时才显示TTS菜单
        {
            menuList[15].showFlag = 1;
        }else
        {
            menuList[15].showFlag = 0;
        }
        //if(1 == top.g_setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_netflix_tts_enable","0"))  //tts认证
        //{
        //    menuList[14].showFlag = 1;
        //    if(switchValue == 0)
        //    {
        //        menuList[15].showFlag = 0;
        //        menuList[16].showFlag = 0;
        //        menuList[17].showFlag = 0;
        //        menuList[18].showFlag = 0;
        //        menuList[19].showFlag = 0;
        //        menuList[20].showFlag = 0;
        //        menuList[21].showFlag = 0;
        //    }
        //}
        //else
        //{
        //    menuList[14].showFlag = 0;
        //    menuList[15].showFlag = 0;
        //    menuList[16].showFlag = 0;
        //    menuList[17].showFlag = 0;
        //    menuList[18].showFlag = 0;
        //    menuList[19].showFlag = 0;
        //    menuList[20].showFlag = 0;
        //    menuList[21].showFlag = 0;
        //}

    }


}


//-----------3、给每个item赋值------------------------------
function setValuesForItems()
{
    if(menuLock && hotelEnable && lockFlag)
    {
        $("soundPresetStatus").innerHTML = "";
    }else
    {
        $("soundPresetStatus").innerHTML = soundPresetModeWords[soundPreset];
    }
    $("autoVolumeCtrlStatus").innerHTML = offOnWords[autoVolumeCtrl];//on--auto Volume control
    $("bassBoostModeStatus").innerHTML = offOnWords[bassBoostMode];//T-BASS
    $("sPDIFTypeStatus").innerHTML = spdifTypeWords[sPDIFType];//PCM-------SPDIF type
    $("SpdifDDPCtrlStatus").innerHTML = offOnWords[sPDIFDDPValue];//SPDIF DDP
    $("audioScene").innerHTML = audioSceneWords[audioScene];//desk top-----TV placement

    //$("Switch").innerHTML = offOnWords[switchValue];
    //$("TTSLanguage").innerHTML = TTSLanguageWords[TTSLanguageValue];
    //$("TTSVoice").innerHTML = TTSVoiceWords[TTSVoiceValue];
    //$("speed").innerHTML = SpeedWords[SpeedValue];
    //$("focusSpeechAudioCtrlStatus").innerHTML = offOnWords[focusSpeechAudioValue];
    //$("verbosity").innerHTML = TTSVerbosityWords[verbosityValue];

    refreshMenuProgress(soundSetTitleWords[4]);//刷新进度条
    refreshMenuProgress(soundSetTitleWords[3]);//刷新进度条
    refreshMenuProgress(soundSetTitleWords[8]);//刷新进度条
    refreshMenuProgress(soundSetTitleWords[9]);//刷新进度条
    refreshMenuProgress(soundSetTitleWords[10]);//刷新进度条
    refreshMenuProgress(soundSetTitleWords[11]);//刷新进度条
    refreshMenuProgress(soundSetTitleWords[12]);//刷新进度条
    refreshMenuProgress(soundSetTitleWords[13]);//刷新进度条

    //refreshMenuProgress(soundSetTitleWords[17]);//刷新进度条
    //refreshMenuProgress(soundSetTitleWords[20]);//刷新进度条
}


//-----------4、根据showflag来显示内容-----------------------
function showItems()
{
    showItemNum = 0;


    //设置显示0-8是否显示
    for (var i = 0; i < menuList.length; i++)
    {
        if (menuList[i].showFlag == 1)
        {
            sndMenuRightLiList[i].style.display = "block";
            showItemNum++;
        }
        else if (menuList[i].showFlag == 0)
        {
            sndMenuRightLiList[i].style.display = "none";
        }
        else
        {
            sndMenuRightLiList[i].style.display = "none";
        }
    }
    if(showItemNum>11)
    {
        $("listDownRemind").style.display="block";
        $("listUpRemind").style.display="block";
    }
    else
    {
        $("listDownRemind").style.display="none";
        $("listUpRemind").style.display="none";
    }
    $("soundPresetStatus").style.color = footballModeFlag ? "#666" : "#fff";
    $("menuUl").getElementsByTagName("img")[0].src = footballModeFlag ? "images/arrow/R-Focus.png" : "images/arrow/focus_R-Focus.png";
}


function doSoundPreset()
{
    if(footballModeFlag)
    {
        return;
    }
    if ((menuLock) && (hotelEnable) && (lockFlag))
    {
        initPass();
    }
    else
    {
        $("listFocus").src = mainFocus[1];
        form_position_h = soundPreset;
        soundPresetOffSet = 0;
        if(form_position_h > 4)//0~4
        {
            soundPresetOffSet = form_position_h - 4;
            form_position_h = 4;
        }
        var topOffset = SUB_MENU_START + SUB_MENU_STEP * (positionV > 11 ? 11 : positionV) - 10;
        var leftOffset = 980;
        top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList,
            soundPresetModeWords, soundPresetModeWords.length, form_position_h, soundPresetOffSet);
        //$("listFormFocus").style.top = form_position_h * (FORM_STEP + 10) + "px";
        focusOn = "soundPreset";
    }
}

function doAutovolumecontrol()
{
    $("listFocus").src = mainFocus[1];
    form_position_h = autoVolumeCtrl;
    var topOffset = SUB_MENU_START + SUB_MENU_STEP * (positionV > 11 ? 11 : positionV) - 10;
    var leftOffset = 980;
    top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList, offOnWords, 2, form_position_h, 0);
    focusOn = "autoVolumeCtrl";
}

function doSPDIFDDP()
{
    $("listFocus").src = mainFocus[1];
    form_position_h = sPDIFDDPValue;
    var topOffset = SUB_MENU_START + SUB_MENU_STEP * (positionV > 11 ? 11 : positionV) - 10;
    var leftOffset = 980;
    top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList, offOnWords, 2, form_position_h, 0);
    focusOn = "sPDIFDDP";
}

function doBassBoost()
{
    $("listFocus").src = mainFocus[1];
    form_position_h = bassBoostMode;
    var topOffset = SUB_MENU_START + SUB_MENU_STEP * (positionV > 11 ? 11 : positionV) - 10;
    var leftOffset = 980;
    top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList, offOnWords, 2, form_position_h, 0);
    focusOn = "bassBoostMode";
}
function doSPDIFType()
{

    $("listFocus").src = mainFocus[1];
    form_position_h = sPDIFType;
    var topOffset = SUB_MENU_START + SUB_MENU_STEP * (positionV > 11 ? 11 : positionV) - 10;
    var leftOffset = 980;
    top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList, spdifTypeWords, 3, form_position_h, 0);
    focusOn = "sPDIFType";

}

function doSound100Hz()
{
    initProgressBar(soundSetTitleWords[8]);
    focusOn = "progressBar";
}

function doSound300Hz()
{
    initProgressBar(soundSetTitleWords[9]);
    focusOn = "progressBar";
}

function doSound1KHz()
{
    initProgressBar(soundSetTitleWords[10]);
    focusOn = "progressBar";
}

function doSound3KHz()
{
    initProgressBar(soundSetTitleWords[11]);
    focusOn = "progressBar";
}

function doSound10kHz()
{
    initProgressBar(soundSetTitleWords[12]);
    focusOn = "progressBar";
}

function doBalance()
{
    initProgressBar(soundSetTitleWords[13]);
    focusOn = "progressBar";
}

function doSPDIFDelay()
{
    initProgressBar(soundSetTitleWords[3]);
    focusOn = "progressBar";
}

function doAudioDelay()
{
    initProgressBar(soundSetTitleWords[4]);
    focusOn = "progressBar";
}


function doTVplacement()
{
    $("listFocus").src = mainFocus[1];
    form_position_h = audioScene;
    var topOffset = SUB_MENU_START + SUB_MENU_STEP * (positionV>11?11:positionV) - 10;
    var leftOffset = 980;
    top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList, audioSceneWords, 2, form_position_h, 0);
    focusOn = "audioScene";
}

function doAdvancedSettings()
{
    parent.jumpPage(2, "soundSetting/soundAdvanced.html");
}

function doTTSSettings()
{
    parent.jumpPage(2, "soundSetting/soundTTS.html");
}

function doSwitch()
{
    $("listFocus").src=mainFocus[1];
    form_position_h = switchValue;
        var topOffset = SUB_MENU_START + SUB_MENU_STEP * (positionV>11?11:positionV) - 10;
    var leftOffset = 980;
    top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
    focusOn = "switch";
}

function doVerbosity()
{
    $("listFocus").src=mainFocus[1];
    form_position_h = verbosityValue;
    var topOffset = SUB_MENU_START + SUB_MENU_STEP*(positionV>11?11:positionV) - 10;
    var leftOffset = 980;
    top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,TTSVerbosityWords,2,form_position_h,0);
    focusOn = "verbosity";
}

function doFocusSpeechAudio()
{
    $("listFocus").src=mainFocus[1];
    form_position_h = focusSpeechAudioValue;
        var topOffset = SUB_MENU_START + SUB_MENU_STEP * (positionV>11?11:positionV) - 10;
    var leftOffset = 980;
    top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
    focusOn = "focusSpeechAudio";
}

function doTTSLanguage()
{
    $("listFocus").src=mainFocus[1];
    form_position_h = TTSLanguageValue;
        var topOffset = SUB_MENU_START + SUB_MENU_STEP * (positionV>11?11:positionV) - 10;
    var leftOffset = 980;
    top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,TTSLanguageWords,2,form_position_h,0);
    focusOn = "TTSLanguage";
}

function doTTSVoice()
{
    if(TTSLanguageValue == 0 || TTSLanguageValue == 1)
    {
        return;
    }
    $("listFocus").src=mainFocus[1];
    form_position_h = TTSVoiceValue;
        var topOffset = SUB_MENU_START + SUB_MENU_STEP * (positionV>11?11:positionV) - 10;
    var leftOffset = 980;
    top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,TTSVoiceWords,2,form_position_h,0);
    focusOn = "TTSVoice";
}

function doSpeed()
{
    $("listFocus").src=mainFocus[1];
    form_position_h = SpeedValue;
    var topOffset = SUB_MENU_START + SUB_MENU_STEP*((positionV>11?11:positionV)-3) - 10;
    var leftOffset = 980;
    top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,SpeedWords,5,form_position_h,0);
    focusOn = "speed";
}

function doVolume()
{
    initProgressBar(soundSetTitleWords[17]);
    focusOn = "progressBar";
}

function doPitch()
{
    initProgressBar(soundSetTitleWords[20]);
    focusOn = "progressBar";
}


//-----------辅助函数：找到此item在所有item中的真实位置，并执行对应函数-----------
function executeFunction(positionTemp)
{
    var num = -1;
    for (var i = 0; i < menuList.length; i++)
    {
        if (menuList[i].showFlag == 1)
        {
            num++;
        }
        if (num == positionTemp)//找到此位置
        {
            menuList[i].param();//执行函数
            break;
        }
    }
}


function doEnter()
{
    if (focusOn == "menu")
    {
        executeFunction(positionV);//执行对应的函数
    }
    else if (focusOn == "autoVolumeCtrl")
    {
        $("listFocus").src = mainFocus[0];
        $("listForm").style.display = "none";
        autoVolumeCtrl = form_position_h;
        $("autoVolumeCtrlStatus").innerHTML = offOnWords[autoVolumeCtrl];
        (0 == top.isLAFlag && 0 == top.isNAFlag && 0 == top.isAPFlag && 0 == top.isAUFlag) ? setting.setSoundEffectsMode(0,autoVolumeCtrl) : setting.autoVolumeCtrl = autoVolumeCtrl;//LA不适用TCL自主音效
        focusOn = "menu";
    }
    else if (focusOn == "bassBoostMode")
    {
        $("listFocus").src = mainFocus[0];
        $("listForm").style.display = "none";
        bassBoostMode = form_position_h;
        $("bassBoostModeStatus").innerHTML = offOnWords[bassBoostMode];
        setting.setSoundEffectsMode(1,bassBoostMode);
        focusOn = "menu";
    }
    else if (focusOn == "sPDIFType")
    {
        $("listFocus").src = mainFocus[0];
        $("listForm").style.display = "none";
        sPDIFType = form_position_h;
        $("sPDIFTypeStatus").innerHTML = spdifTypeWords[sPDIFType];
        setting.sPDIFType = sPDIFType;
        //if(sPDIFType == 0 && top.getArcStatus() == true)
        //{
        //    setting.sPDIFDDP = 1;
        //}
        //else
        //{
        //    setting.sPDIFDDP = 0;
        //}
        focusOn = "menu";
        updateUI();
    }
    else if (focusOn == "audioScene")
    {
        $("listFocus").src = mainFocus[0];
        $("listForm").style.display = "none";
        audioScene = form_position_h;
        $("audioScene").innerHTML = audioSceneWords[audioScene];
        setting.audioScene = audioScene;
        focusOn = "menu";

    }
    else if (focusOn == "sPDIFDDP")
    {
        $("listFocus").src = mainFocus[0];
        $("listForm").style.display = "none";
        sPDIFDDPValue = form_position_h;
        $("SpdifDDPCtrlStatus").innerHTML = offOnWords[sPDIFDDPValue];
        setting.sPDIFDDP = sPDIFDDPValue;
        focusOn = "menu";
    }
    else if(focusOn == "soundPreset")
    {
        $("listFocus").src=mainFocus[0];
        $("listForm").style.display = "none";
        soundPreset = form_position_h + soundPresetOffSet;
        setting.soundPreset = soundModeTransform(soundPreset, 1);
        $("soundPresetStatus").innerHTML = soundPresetModeWords[soundPreset];
        focusOn = "menu";
        updateUI();
    }

    //else if(focusOn == "switch")
    //{
    //    $("listFocus").src=mainFocus[0];
    //    $("listForm").style.display = "none";
    //    switchValue = form_position_h;
    //    $("Switch").innerHTML = offOnWords[switchValue];
    //    //setting.ttsSwitch = switchValue;
    //    focusOn = "menu";
    //    updateUI();
    //}
    //else if(focusOn == "TTSLanguage")
    //{
    //    $("listFocus").src=mainFocus[0];
    //    $("listForm").style.display = "none";
    //    TTSLanguageValue = form_position_h;
    //    $("TTSLanguage").innerHTML = TTSLanguageWords[TTSLanguageValue];
    //    //setting.ttsLang = TTSLanguageValue;
    //    focusOn = "menu";
    //    updateUI();
    //}
    //else if(focusOn == "TTSVoice")
    //{
    //    $("listFocus").src=mainFocus[0];
    //    $("listForm").style.display = "none";
    //    TTSVoiceValue = form_position_h;
    //    $("TTSVoice").innerHTML = TTSVoiceWords[TTSVoiceValue];
    //    //setting.ttsVoiceType = TTSVoiceValue;
    //    focusOn = "menu";
    //}
    //else if(focusOn == "speed")
    //{
    //    $("listFocus").src=mainFocus[0];
    //    $("listForm").style.display = "none";
    //    SpeedValue = form_position_h;
    //    $("speed").innerHTML = SpeedWords[SpeedValue];
    //    //setting.ttsSpeed = SpeedValue;
    //    focusOn = "menu";
    //}
    //else if(focusOn == "focusSpeechAudio")
    //{
    //    $("listFocus").src=mainFocus[0];
    //    $("listForm").style.display = "none";
    //    focusSpeechAudioValue = form_position_h;
    //    $("focusSpeechAudioCtrlStatus").innerHTML = offOnWords[focusSpeechAudioValue];
    //    //setting.ttsSpeechAudio = focusSpeechAudioValue;
    //    focusOn = "menu";
    //}
    //else if(focusOn == "verbosity")
    //{
    //    $("listFocus").src=mainFocus[0];
    //    $("listForm").style.display = "none";
    //    verbosityValue = form_position_h;
    //    $("verbosity").innerHTML = TTSVerbosityWords[verbosityValue];
    //    //setting.ttsVerbosity = verbosityValue;
    //    focusOn = "menu";
    //}
}


function toUp()
{
    if (focusOn == "menu")
    {
        if ((menuLock) && (hotelEnable) && (lockFlag))
        {
            return;
        }
        else
        {
            if (findName(positionV) == findFirstName())
            {
                positionV = findPosition(findLastName());
            }
            else
            {
                positionV--;
            }
            doOffsetMenuList(positionV);
            top.doEleScrForNoOption(listFirstSpans, findRealPosition(positionV), -1);
        }

    }
    else if (focusOn == "autoVolumeCtrl" || focusOn == "audioScene" || focusOn == "bassBoostMode" || focusOn == "sPDIFDDP" )
    {
        if (form_position_h == 0)
        {
            form_position_h = 1;
        }
        else
        {
            form_position_h = 0;
        }
        $("listFormFocus").style.top = form_position_h * FORM_STEP + "px";
        top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
    }
    else if (focusOn == "sPDIFType")
    {
        if (form_position_h <= 0)
        {
            form_position_h = 2;
        }
        else
        {
            form_position_h--;
        }
        $("listFormFocus").style.top = form_position_h * FORM_STEP + "px";
        top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
    }
    else if(focusOn == "speed")
    {
        if(form_position_h <= 0)
        {
            form_position_h = 5;
        }
        else
        {
            form_position_h--;
        }
        $("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
        top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
    }
    else if (focusOn == "soundPreset")
    {
        setSoundPresetFocus(-1);//[1]down [-1]up
		previewSound = soundModeTransform(form_position_h + soundPresetOffSet, 1);
		//console.log("up form_position_h is"+form_position_h + "soundPresetOffSet is" + soundPresetOffSet+" previewSound is "+previewSound);
        setting.previewSoundEffect(previewSound);
        $("listFormFocus").style.top = form_position_h * FORM_STEP + "px";
        top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
    }
    else if (focusOn == "progressBar")
    {
        var currentProgressName = $("adjustProgMain").getElementsByTagName("span")[0].innerHTML;
        if (currentProgressName == soundSetTitleWords[8])//100Hz
        {
            if(menuList[10].showFlag == 1)
            {
                initProgressBar(soundSetTitleWords[4]);
                positionV = findPosition("Audio delay");
            }
            else
            {
                if(menuList[9].showFlag == 1)
                {
                    initProgressBar(soundSetTitleWords[3]);
                    positionV = findPosition("SPDIF delay");
                }
                else
                {
                    initProgressBar(soundSetTitleWords[13]);
                    positionV = findPosition("balance");
                }
            }
        }
        else if (currentProgressName == soundSetTitleWords[9])//500Hz
        {
            initProgressBar(soundSetTitleWords[8]);
            positionV = findPosition("sound100Hz");
        }
        else if (currentProgressName == soundSetTitleWords[10])//1.5KHz
        {
            initProgressBar(soundSetTitleWords[9]);
            positionV = findPosition("sound300Hz");
        }
        else if (currentProgressName == soundSetTitleWords[11])//5KHz
        {
            initProgressBar(soundSetTitleWords[10]);
            positionV = findPosition("sound1KHz");
        }
        else if (currentProgressName == soundSetTitleWords[12])//10KHz
        {
            initProgressBar(soundSetTitleWords[11]);
            positionV = findPosition("sound3KHz");
        }
        else if (currentProgressName == soundSetTitleWords[13])//Balance
        {
            initProgressBar(soundSetTitleWords[12]);
            positionV = findPosition("sound10KHz");
        }
        else if (currentProgressName == soundSetTitleWords[3])//SPDIF delay
        {
            initProgressBar(soundSetTitleWords[13]);
            positionV = findPosition("balance");
        }
        else if (currentProgressName == soundSetTitleWords[4])//Audio delay
        {
            if(menuList[9].showFlag == 1)
            {
                initProgressBar(soundSetTitleWords[3]);
                positionV = findPosition("SPDIF delay");
            }
            else
            {
                initProgressBar(soundSetTitleWords[13]);
                positionV = findPosition("balance");
            }
        }
        $("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP * positionV + "px";
    }
}


function toDown()
{
    if (focusOn == "menu")
    {
        if ((menuLock) && (hotelEnable) && (lockFlag))
        {
            return;
        }
        else
        {
            if (findName(positionV) == findLastName())
            {
                positionV = findPosition(findFirstName());
            }
            else
            {
                positionV++;
            }
            doOffsetMenuList(positionV);
            top.doEleScrForNoOption(listFirstSpans, findRealPosition(positionV), 1);
        }
    }
    else if (focusOn == "autoVolumeCtrl" || focusOn == "audioScene" || focusOn == "bassBoostMode" || focusOn == "sPDIFDDP")
    {
        if (form_position_h == 0)
        {
            form_position_h = 1;
        }
        else
        {
            form_position_h = 0;
        }
        $("listFormFocus").style.top = form_position_h * FORM_STEP + "px";
        top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
    }
    else if (focusOn == "sPDIFType")
    {
        if (form_position_h >= 2)
        {
            form_position_h = 0;
        }
        else
        {
            form_position_h++;
        }
        $("listFormFocus").style.top = form_position_h * FORM_STEP + "px";
        top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
    }
    else if(focusOn == "speed")
    {
        if(form_position_h >= 5)
        {
            form_position_h = 0;
        }
        else
        {
            form_position_h++;
        }
        $("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
        top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
    }
    else if (focusOn == "soundPreset")
    {
        setSoundPresetFocus(1);//[1]down [-1]up

        previewSound = soundModeTransform(form_position_h + soundPresetOffSet, 1);
		//console.log(" down form_position_h is"+form_position_h + "soundPresetOffSet is" + soundPresetOffSet+" previewSound is "+previewSound);
        setting.previewSoundEffect(previewSound);
        $("listFormFocus").style.top = form_position_h * FORM_STEP + "px";
        top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
    }
    else if (focusOn == "progressBar")
    {
        var currentProgressName = $("adjustProgMain").getElementsByTagName("span")[0].innerHTML;
        if (currentProgressName == soundSetTitleWords[8])//100Hz
        {
            initProgressBar(soundSetTitleWords[9]);
            positionV = findPosition("sound300Hz");

        }
        else if (currentProgressName == soundSetTitleWords[9])//500Hz
        {
            initProgressBar(soundSetTitleWords[10]);
            positionV = findPosition("sound1KHz");
        }
        else if (currentProgressName == soundSetTitleWords[10])//1.5KHz
        {
            initProgressBar(soundSetTitleWords[11]);
            positionV = findPosition("sound3KHz");
        }
        else if (currentProgressName == soundSetTitleWords[11])//5KHz
        {
            initProgressBar(soundSetTitleWords[12]);
            positionV = findPosition("sound10KHz");
        }
        else if (currentProgressName == soundSetTitleWords[12])//10KHz
        {
            initProgressBar(soundSetTitleWords[13]);
            positionV = findPosition("balance");
        }
        else if (currentProgressName == soundSetTitleWords[13])//Balance
        {
            if(menuList[9].showFlag == 1)
            {
                initProgressBar(soundSetTitleWords[3]);
                positionV = findPosition("SPDIF delay");
            }
            else
            {
                if(menuList[10].showFlag == 1)
            	{
                	initProgressBar(soundSetTitleWords[4]); //audio delay
                	positionV = findPosition("Audio delay");
            	}
            	else
            	{
                	initProgressBar(soundSetTitleWords[8]);
                	positionV = findPosition("sound100Hz");
            	}
            }
        }
        else if (currentProgressName == soundSetTitleWords[3])//SPDIF delay
        {
            if(menuList[10].showFlag == 1)
            {
                initProgressBar(soundSetTitleWords[4]); //audio delay
                positionV = findPosition("Audio delay");
            }
            else
            {
                initProgressBar(soundSetTitleWords[8]);
                positionV = findPosition("sound100Hz");
            }
        }
        else if (currentProgressName == soundSetTitleWords[4])//Audio delay
        {
            initProgressBar(soundSetTitleWords[8]);
            positionV = findPosition("sound100Hz");
        }

        $("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP * positionV + "px";
    }
}


function keyDownProcess(evt)
{
    var ret = true;
    var keycode = evt.which;
    //如果按键不是虚拟按键T键，且不是方向键、确认键、返回键，且不是鼠标左键lqt
	if(keycode!=top.VK_VIRTUAL_REMOTE&&(keycode<top.VK_VIRTUAL_KEYBOARD_LEFT||keycode>top.VK_VIRTUAL_KEYBOARD_BACK)&&keycode!=top.VK_VIRTUAL_MOUSE_OK)
	{
		if(keycode<top.VK_0||keycode>top.VK_9)//按虚拟遥控器会产生的按键
		{
			console.log("-----keycode----"+keycode);
			//如果是显示的话，就隐藏
			if(top.virtualRemoteState == 1)
			{
				//隐藏虚拟遥控器
				top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
			}
		}
		
	}
    switch (keycode)
    {
		case top.VK_VIRTUAL_REMOTE:
			//显示或者不显示--lqt
			if(top.virtualRemoteState == 0)
			{
				if($("passForm").style.display == "block")
				{
					top.document.getElementById("virtualRemote").contentWindow.showVirtualRemote("TimeBox");
				}
				else
				{
				}
				
			}
			else
			{
				//隐藏虚拟遥控器
				top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
			}
			break;
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
			console.log("lqt---systemSet.js---clientX: "+clientX);
			console.log("lqt---systemSet.js---clientY: "+clientY);
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
        case top.VK_UP:
            toUp();
            ttsRead();
            ret = false;
            break;
        case top.VK_DOWN:
            toDown();
            ttsRead();
            ret = false;
            break;
        case top.VK_ENTER:
            doEnter();
            ttsRead();
            ret = false;
            break;
        case top.VK_LEFT:
            toLeft();
            ttsRead();
            ret = false;
            break;
        case top.VK_RIGHT:
            toRight();
            ttsRead();
            ret = false;
            break;
        case top.VK_BACK:
            toBack();
            ttsRead();
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
            if ((menuLock) && (hotelEnable) && (lockFlag))
            {
                doCheck(evt.which - 48);
                ret = false;
            }
            break;
        default:
            top.keyDownProcess(evt);
            break;
    }
    if ((menuLock) && (hotelEnable) && (lockFlag))
    {
        return ret;
    }
    else
    {
        showPromptCont();
        return ret;
    }
}


function toBack()
{
    if (focusOn == "menu")
    {
        top.doEleScrForNoOption(listFirstSpans, -1, -1);
        parent.returnPage(1);
    }
    else if (focusOn == "progressBar")
    {
        top.timeoutFuc.timeoutTimes = 30;
        setValuesForItems();
        $("adjustProgressBox").style.display = "none";
        parent.showPage(1);
        top.doEleScrForNoOption(listFirstSpans, positionV, 0);
        updateUI();
        focusOn = "menu";
    }
    else if(focusOn=="password")
    {
        $("passForm").style.display = "none";
        parent.showPage(1);
        focusOn = "menu";
    }
    else
    {
	if(focusOn == "soundPreset")
		setting.previewSoundEffect(soundModeTransform(soundPreset, 1));
        $("listFocus").src = mainFocus[0];
        $("listForm").style.display = "none";
        focusOn = "menu";
    }
}
function toLeft()
{
    if (focusOn == "progressBar")
    {
        var currentProgressName = $("adjustProgMain").getElementsByTagName("span")[0].innerHTML;
        if (currentProgressName == soundSetTitleWords[3])
        {
            if (sPDIFDelay > 0)
            {
                sPDIFDelay -= 10;
                if (sPDIFDelay < 0)
                {
                    sPDIFDelay = 0;
                }
                progressDivList[0].style.width = parseInt(sPDIFDelay * EXTRA_PROGRESS_WIDTH / PROGRESS_SPDIF_MAX_VALUE, 10) + "px";
                progressDivList[2].style.width = parseInt((PROGRESS_SPDIF_MAX_VALUE - sPDIFDelay) * EXTRA_PROGRESS_WIDTH / PROGRESS_SPDIF_MAX_VALUE, 10) + "px";

                setting.sPDIFDelay = sPDIFDelay;
                $("adjustProgValue").innerHTML = sPDIFDelay;
            }
        }
        else if (currentProgressName == soundSetTitleWords[4]) //audio delay
        {
            if (audioDelay > 0)
            {
                audioDelay -= 10;
                if (audioDelay < 0)
                {
                    audioDelay = 0;
                }
                progressDivList[0].style.width = parseInt((audioDelay) * EXTRA_PROGRESS_WIDTH / (PROGRESS_AUDIO_DELAY_MAX_VALUE), 10) + "px";
                var temp = parseInt((audioDelay) * EXTRA_PROGRESS_WIDTH / (PROGRESS_AUDIO_DELAY_MAX_VALUE), 10);
                progressDivList[2].style.width = parseInt(EXTRA_PROGRESS_WIDTH - temp,10) + "px" ;//parseInt(((PROGRESS_AUDIO_MAX_VALUE + 50) - (50 + audioDelay)) * EXTRA_PROGRESS_WIDTH / (PROGRESS_AUDIO_MAX_VALUE + 50), 10) + "px";
                setting.audioDelay = audioDelay;
                $("adjustProgValue").innerHTML = audioDelay;
            }
        }
        else if (currentProgressName == soundSetTitleWords[8])
        {
            if (sound100HZValue > 0)
            {
                sound100HZValue -= 1;
                if (sound100HZValue < 0)
                {
                    sound100HZValue = 0;
                }
                progressDivList[0].style.width = parseInt(sound100HZValue * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
                progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - sound100HZValue) * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";

                setting.soundPreset100 = sound100HZValue;
                $("adjustProgValue").innerHTML = sound100HZValue;
            }
        }
        else if (currentProgressName == soundSetTitleWords[9])
        {
            if (sound300HZValue > 0)
            {
                sound300HZValue -= 1;
                if (sound300HZValue < 0)
                {
                    sound300HZValue = 0;
                }
                progressDivList[0].style.width = parseInt(sound300HZValue * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
                progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - sound300HZValue) * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";

                setting.soundPreset300 = sound300HZValue;
                $("adjustProgValue").innerHTML = sound300HZValue;
            }
        }
        else if (currentProgressName == soundSetTitleWords[10])
        {
            if (sound1KHZValue > 0)
            {
                sound1KHZValue -= 1;
                if (sound1KHZValue < 0)
                {
                    sound1KHZValue = 0;
                }
                progressDivList[0].style.width = parseInt(sound1KHZValue * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
                progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - sound1KHZValue) * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";

                setting.soundPreset1000 = sound1KHZValue;
                $("adjustProgValue").innerHTML = sound1KHZValue;
            }
        }
        else if (currentProgressName == soundSetTitleWords[11])
        {
            if (sound3KHZValue > 0)
            {
                sound3KHZValue -= 1;
                if (sound3KHZValue < 0)
                {
                    sound3KHZValue = 0;
                }
                progressDivList[0].style.width = parseInt(sound3KHZValue * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
                progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - sound3KHZValue) * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";

                setting.soundPreset3000 = sound3KHZValue;
                $("adjustProgValue").innerHTML = sound3KHZValue;
            }
        }
        else if (currentProgressName == soundSetTitleWords[12])
        {
            if (sound10KHZValue > 0)
            {
                sound10KHZValue -= 1;
                if (sound10KHZValue < 0)
                {
                    sound10KHZValue = 0;
                }
                progressDivList[0].style.width = parseInt(sound10KHZValue * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
                progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - sound10KHZValue) * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";

                setting.soundPreset10000 = sound10KHZValue;
                $("adjustProgValue").innerHTML = sound10KHZValue;
            }
        }
        else if (currentProgressName == soundSetTitleWords[13])
        {
            if (balanceValue + 50> 0)
            {
                balanceValue -= 1;
                if (balanceValue + 50< 0)
                {
                    balanceValue = -50;
                }
                progressDivList[0].style.width = parseInt((balanceValue + 50) * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
                progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - (balanceValue + 50)) * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
                setting.soundBalance = balanceValue;
                $("adjustProgValue").innerHTML = balanceValue;
            }
        }
        else if(currentProgressName==soundSetTitleWords[17])
        {
            if(volumeValue > 0)
            {
                volumeValue -=1;
                if(volumeValue < 0)
                {
                    volumeValue = 0;
                }
                progressDivList[0].style.width = parseInt(volumeValue*EXTRA_PROGRESS_WIDTH/PROGRESS_MAX_VALUE,10) + "px";
                progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - volumeValue)*EXTRA_PROGRESS_WIDTH/PROGRESS_MAX_VALUE,10) + "px";

                //setting.ttsVoiceVolume = volumeValue;
                $("adjustProgValue").innerHTML = volumeValue;
            }
        }
        else if(currentProgressName==soundSetTitleWords[20])
        {
            if(pitchValue > 0)
            {
                pitchValue -=1;
                if(pitchValue < 0)
                {
                    pitchValue = 0;
                }
                progressDivList[0].style.width = parseInt(pitchValue*EXTRA_PROGRESS_WIDTH/PROGRESS_MAX_VALUE,10) + "px";
                progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - pitchValue)*EXTRA_PROGRESS_WIDTH/PROGRESS_MAX_VALUE,10) + "px";

                //setting.ttsPitch = pitchValue;
                $("adjustProgValue").innerHTML = pitchValue;
            }
        }
    }
    else
    {
        toBack();
    }
}
function toRight()
{
    if (focusOn == "progressBar")
    {
        var currentProgressName = $("adjustProgMain").getElementsByTagName("span")[0].innerHTML;
        if (currentProgressName == soundSetTitleWords[3])
        {
            if (sPDIFDelay < PROGRESS_SPDIF_MAX_VALUE)
            {
                sPDIFDelay += 10;
                if (sPDIFDelay > PROGRESS_SPDIF_MAX_VALUE)
                {
                    sPDIFDelay = PROGRESS_SPDIF_MAX_VALUE;
                }
                progressDivList[0].style.width = parseInt(sPDIFDelay * EXTRA_PROGRESS_WIDTH / PROGRESS_SPDIF_MAX_VALUE, 10) + "px";
                progressDivList[2].style.width = parseInt((PROGRESS_SPDIF_MAX_VALUE - sPDIFDelay) * EXTRA_PROGRESS_WIDTH / PROGRESS_SPDIF_MAX_VALUE, 10) + "px";
                setting.sPDIFDelay = sPDIFDelay;
                $("adjustProgValue").innerHTML = sPDIFDelay;
            }
        }
        else if (currentProgressName == soundSetTitleWords[4]) //audio delay
        {
            if (audioDelay < PROGRESS_AUDIO_DELAY_MAX_VALUE)
            {
                audioDelay += 10;
                if (audioDelay > PROGRESS_AUDIO_DELAY_MAX_VALUE)
                {
                    audioDelay = PROGRESS_AUDIO_DELAY_MAX_VALUE;
                }
                progressDivList[0].style.width = parseInt((audioDelay) * EXTRA_PROGRESS_WIDTH / (PROGRESS_AUDIO_DELAY_MAX_VALUE), 10) + "px";
                var temp = parseInt((audioDelay) * EXTRA_PROGRESS_WIDTH / (PROGRESS_AUDIO_DELAY_MAX_VALUE), 10);
                progressDivList[2].style.width = parseInt(EXTRA_PROGRESS_WIDTH - temp,10) + "px" ;//parseInt(((50 + PROGRESS_AUDIO_MAX_VALUE) - (audioDelay + 50)) * EXTRA_PROGRESS_WIDTH / (PROGRESS_AUDIO_MAX_VALUE + 50), 10) + "px";
                setting.audioDelay = audioDelay;
                $("adjustProgValue").innerHTML = audioDelay;
            }
        }
        else if (currentProgressName == soundSetTitleWords[8])
        {
            if (sound100HZValue < PROGRESS_MAX_VALUE)
            {
                sound100HZValue += 1;
                if (sound100HZValue > PROGRESS_MAX_VALUE)
                {
                    sound100HZValue = PROGRESS_MAX_VALUE;
                }
                progressDivList[0].style.width = parseInt(sound100HZValue * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
                progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - sound100HZValue) * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
                setting.soundPreset100 = sound100HZValue;
                $("adjustProgValue").innerHTML = sound100HZValue;
            }
        }
        else if (currentProgressName == soundSetTitleWords[9])
        {
            if (sound300HZValue < PROGRESS_MAX_VALUE)
            {
                sound300HZValue += 1;
                if (sound300HZValue > PROGRESS_MAX_VALUE)
                {
                    sound300HZValue = PROGRESS_MAX_VALUE;
                }
                progressDivList[0].style.width = parseInt(sound300HZValue * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
                progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - sound300HZValue) * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
                setting.soundPreset300 = sound300HZValue;
                $("adjustProgValue").innerHTML = sound300HZValue;
            }
        }
        else if (currentProgressName == soundSetTitleWords[10])
        {
            if (sound1KHZValue < PROGRESS_MAX_VALUE)
            {
                sound1KHZValue += 1;
                if (sound1KHZValue > PROGRESS_MAX_VALUE)
                {
                    sound1KHZValue = PROGRESS_MAX_VALUE;
                }
                progressDivList[0].style.width = parseInt(sound1KHZValue * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
                progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - sound1KHZValue) * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
                setting.soundPreset1000 = sound1KHZValue;
                $("adjustProgValue").innerHTML = sound1KHZValue;
            }
        }
        else if (currentProgressName == soundSetTitleWords[11])
        {
            if (sound3KHZValue < PROGRESS_MAX_VALUE)
            {
                sound3KHZValue += 1;
                if (sound3KHZValue > PROGRESS_MAX_VALUE)
                {
                    sound3KHZValue = PROGRESS_MAX_VALUE;
                }
                progressDivList[0].style.width = parseInt(sound3KHZValue * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
                progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - sound3KHZValue) * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
                setting.soundPreset3000 = sound3KHZValue;
                $("adjustProgValue").innerHTML = sound3KHZValue;
            }
        }
        else if (currentProgressName == soundSetTitleWords[12])
        {
            if (sound10KHZValue < PROGRESS_MAX_VALUE)
            {
                sound10KHZValue += 1;
                if (sound10KHZValue > PROGRESS_MAX_VALUE)
                {
                    sound10KHZValue = PROGRESS_MAX_VALUE;
                }
                progressDivList[0].style.width = parseInt(sound10KHZValue * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
                progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - sound10KHZValue) * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
                setting.soundPreset10000 = sound10KHZValue;
                $("adjustProgValue").innerHTML = sound10KHZValue;
            }
        }
        else if (currentProgressName == soundSetTitleWords[13])
        {
            if (balanceValue + 50 < PROGRESS_MAX_VALUE)
            {
                balanceValue += 1;
                if (balanceValue + 50 > PROGRESS_MAX_VALUE)
                {
                    balanceValue = 50;
                }
                progressDivList[0].style.width = parseInt((balanceValue + 50) * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
                progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - (balanceValue + 50)) * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
                setting.soundBalance = balanceValue;
                $("adjustProgValue").innerHTML = balanceValue;
            }
        }
        else if(currentProgressName==soundSetTitleWords[17])
        {
            if(volumeValue < PROGRESS_MAX_VALUE)
            {
                volumeValue +=1;
                if(volumeValue > PROGRESS_MAX_VALUE)
                {
                    volumeValue = PROGRESS_MAX_VALUE;
                }
                progressDivList[0].style.width = parseInt(volumeValue*EXTRA_PROGRESS_WIDTH/PROGRESS_MAX_VALUE,10) + "px";
                progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - volumeValue)*EXTRA_PROGRESS_WIDTH/PROGRESS_MAX_VALUE,10) + "px";
                //setting.ttsVoiceVolume = volumeValue;
                $("adjustProgValue").innerHTML = volumeValue;
            }
        }
        else if(currentProgressName==soundSetTitleWords[20])
        {
            if(pitchValue < PROGRESS_MAX_VALUE)
            {
                pitchValue +=1;
                if(pitchValue > PROGRESS_MAX_VALUE)
                {
                    pitchValue = PROGRESS_MAX_VALUE;
                }
                progressDivList[0].style.width = parseInt(pitchValue*EXTRA_PROGRESS_WIDTH/PROGRESS_MAX_VALUE,10) + "px";
                progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - pitchValue)*EXTRA_PROGRESS_WIDTH/PROGRESS_MAX_VALUE,10) + "px";
                //setting.ttsPitch = pitchValue;
                $("adjustProgValue").innerHTML = pitchValue;
            }
        }
    }
    else
    {
        doEnter();
    }
}

/*
 描述：初始化需要通过进度显示的设置项
 参数：选择项的名称
 */
var progressDivList;
function initProgressBar(name)
{
    top.timeoutFuc.timeoutTimes = 10;
    parent.hiddenPage(1);
    if (name == soundSetTitleWords[8])//100Hz
    {
        if (sound100HZValue > PROGRESS_MAX_VALUE)
        {
            sound100HZValue = PROGRESS_MAX_VALUE
        }
        if (sound100HZValue < 0)
        {
            sound100HZValue = 0;
        }
        $("adjustProgMain").getElementsByTagName("span")[0].innerHTML = name;
        progressDivList[0].style.width = parseInt(sound100HZValue * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
        progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - sound100HZValue) * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
        $("adjustProgValue").innerHTML = sound100HZValue;
        if(menuList[10].showFlag == 1)
        {
            $("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[4];
        }
        else
        {
            if(menuList[9].showFlag == 1)
            {
                $("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[3];
            }
            else
            {
                $("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[13];
            }
        }
        $("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[9];
    }
    else if (name == soundSetTitleWords[9])//500Hz
    {
        if (sound300HZValue > PROGRESS_MAX_VALUE)
        {
            sound300HZValue = PROGRESS_MAX_VALUE
        }
        if (sound300HZValue < 0)
        {
            sound300HZValue = 0;
        }
        $("adjustProgMain").getElementsByTagName("span")[0].innerHTML = name;
        progressDivList[0].style.width = parseInt(sound300HZValue * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
        progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - sound300HZValue) * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
        $("adjustProgValue").innerHTML = sound300HZValue;
        $("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[8];
        $("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[10];
        ;
    }
    else if (name == soundSetTitleWords[10])//1.5KHz
    {
        if (sound1KHZValue > PROGRESS_MAX_VALUE)
        {
            sound1KHZValue = PROGRESS_MAX_VALUE
        }
        if (sound1KHZValue < 0)
        {
            sound1KHZValue = 0;
        }
        $("adjustProgMain").getElementsByTagName("span")[0].innerHTML = name;
        progressDivList[0].style.width = parseInt(sound1KHZValue * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
        progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - sound1KHZValue) * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
        $("adjustProgValue").innerHTML = sound1KHZValue;
        $("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[9];
        $("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[11];
    }
    else if (name == soundSetTitleWords[11])//5KHz
    {
        if (sound3KHZValue > PROGRESS_MAX_VALUE)
        {
            sound3KHZValue = PROGRESS_MAX_VALUE
        }
        if (sound3KHZValue < 0)
        {
            sound3KHZValue = 0;
        }
        $("adjustProgMain").getElementsByTagName("span")[0].innerHTML = name;
        progressDivList[0].style.width = parseInt(sound3KHZValue * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
        progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - sound3KHZValue) * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
        $("adjustProgValue").innerHTML = sound3KHZValue;
        $("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[10];
        $("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[12];
    }
    else if (name == soundSetTitleWords[12])//10KHz
    {
        if (sound10KHZValue > PROGRESS_MAX_VALUE)
        {
            sound10KHZValue = PROGRESS_MAX_VALUE
        }
        if (sound10KHZValue < 0)
        {
            sound10KHZValue = 0;
        }
        $("adjustProgMain").getElementsByTagName("span")[0].innerHTML = name;
        progressDivList[0].style.width = parseInt(sound10KHZValue * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
        progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - sound10KHZValue) * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
        $("adjustProgValue").innerHTML = sound10KHZValue;
        $("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[11];
        $("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[13];
    }
    else if (name == soundSetTitleWords[13])//Balance
    {
        if (balanceValue + 50> PROGRESS_MAX_VALUE)
        {
            balanceValue = 50
        }
        if (balanceValue + 50 < 0)
        {
            balanceValue = -50;
        }
        $("adjustProgMain").getElementsByTagName("span")[0].innerHTML = name;
        progressDivList[0].style.width = parseInt((balanceValue + 50) * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
        progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - (balanceValue + 50)) * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
        $("adjustProgValue").innerHTML = balanceValue;
        $("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[12];
        if(menuList[9].showFlag == 1)
        {
            $("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[3];
        }
        else
        {
            if(menuList[10].showFlag == 1)
            {
                $("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[4];
            }
            else
            {
                $("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[8];
            }
        }
    }
    else if (name == soundSetTitleWords[3])//SPDIF delay
    {
        if (sPDIFDelay > PROGRESS_SPDIF_MAX_VALUE)
        {
            sPDIFDelay = PROGRESS_SPDIF_MAX_VALUE
        }
        if (sPDIFDelay < 0)
        {
            sPDIFDelay = 0;
        }
        $("adjustProgMain").getElementsByTagName("span")[0].innerHTML = name;
        progressDivList[0].style.width = parseInt(sPDIFDelay * EXTRA_PROGRESS_WIDTH / PROGRESS_SPDIF_MAX_VALUE, 10) + "px";
        progressDivList[2].style.width = parseInt((PROGRESS_SPDIF_MAX_VALUE - sPDIFDelay) * EXTRA_PROGRESS_WIDTH / PROGRESS_SPDIF_MAX_VALUE, 10) + "px";
        $("adjustProgValue").innerHTML = sPDIFDelay;
        $("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[13];
        if(menuList[10].showFlag == 1)
        {
            $("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[4];
        }
        else
        {
            $("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[8];
        }
    }
    else if (name == soundSetTitleWords[4])     //audio delay
    {
        if (audioDelay > PROGRESS_AUDIO_DELAY_MAX_VALUE)
        {
            audioDelay = PROGRESS_AUDIO_DELAY_MAX_VALUE
        }
        if (audioDelay < PROGRESS_AUDIO_DELAY_MIN_VALUE)
        {
            audioDelay = PROGRESS_AUDIO_DELAY_MIN_VALUE;
        }
        $("adjustProgMain").getElementsByTagName("span")[0].innerHTML = name;
        progressDivList[0].style.width = parseInt((audioDelay) * EXTRA_PROGRESS_WIDTH / (PROGRESS_AUDIO_DELAY_MAX_VALUE), 10) + "px";
        var temp = parseInt((audioDelay) * EXTRA_PROGRESS_WIDTH / (PROGRESS_AUDIO_DELAY_MAX_VALUE), 10);
        progressDivList[2].style.width = parseInt(EXTRA_PROGRESS_WIDTH - temp,10) + "px" ;//parseInt((PROGRESS_AUDIO_MAX_VALUE - audioDelay) * EXTRA_PROGRESS_WIDTH / (PROGRESS_AUDIO_MAX_VALUE + 50), 10) + "px";
        $("adjustProgValue").innerHTML = audioDelay;
        if(menuList[9].showFlag == 1)
        {
            $("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[3];
        }
        else
        {
            $("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[13];
        }
        $("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[8];
    }
    else if(name==soundSetTitleWords[17])
    {
        if(volumeValue>PROGRESS_MAX_VALUE)
        {
            volumeValue = PROGRESS_MAX_VALUE;
        }
        if(volumeValue<0)
        {
            volumeValue = 0;
        }
        $("adjustProgMain").getElementsByTagName("span")[0].innerHTML = name;
        progressDivList[0].style.width = parseInt(volumeValue*EXTRA_PROGRESS_WIDTH/PROGRESS_MAX_VALUE,10) + "px";
        progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - volumeValue)*EXTRA_PROGRESS_WIDTH/PROGRESS_MAX_VALUE,10) + "px";
        $("adjustProgValue").innerHTML = volumeValue;
        $("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML = "";
        $("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML = "";
    }
    else if(name==soundSetTitleWords[20])
    {
        if(pitchValue>PROGRESS_MAX_VALUE)
        {
            pitchValue = PROGRESS_MAX_VALUE;
        }
        if(pitchValue<0)
        {
            pitchValue = 0;
        }
        $("adjustProgMain").getElementsByTagName("span")[0].innerHTML = name;
        progressDivList[0].style.width = parseInt(pitchValue*EXTRA_PROGRESS_WIDTH/PROGRESS_MAX_VALUE,10) + "px";
        progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - pitchValue)*EXTRA_PROGRESS_WIDTH/PROGRESS_MAX_VALUE,10) + "px";
        $("adjustProgValue").innerHTML = pitchValue;
        $("adjustProgMinorUp").getElementsByTagName("span")[0].innerHTML = "";
        $("adjustProgMinorDown").getElementsByTagName("span")[0].innerHTML = "";
    }
    $("adjustProgressBox").style.display = "block";
    focusOn = "progressBar";
}

/*
 描述：刷新menu菜单中的进度条
 */
function refreshMenuProgress(name)
{
    if (name == soundSetTitleWords[3])
    {
        if (sPDIFDelay > PROGRESS_SPDIF_MAX_VALUE)
        {
            sPDIFDelay = PROGRESS_SPDIF_MAX_VALUE
        }
        if (sPDIFDelay < 0)
        {
            sPDIFDelay = 0;
        }
        $("sPDIFDelayValue").innerHTML = sPDIFDelay;
        $("sPDIFDelayPgreLeft").style.width = parseInt(sPDIFDelay * PROGRESS_WIDTH / PROGRESS_SPDIF_MAX_VALUE, 10) + "px";
        $("sPDIFDelayPgreRight").style.width = parseInt((PROGRESS_SPDIF_MAX_VALUE - sPDIFDelay) * PROGRESS_WIDTH / PROGRESS_SPDIF_MAX_VALUE, 10) + "px";
    }
    else if (name == soundSetTitleWords[4])   //audio delay
    {
        if (audioDelay > PROGRESS_AUDIO_DELAY_MAX_VALUE)
        {
            audioDelay = PROGRESS_AUDIO_DELAY_MAX_VALUE
        }
        if (audioDelay < PROGRESS_AUDIO_DELAY_MIN_VALUE)
        {
            audioDelay = PROGRESS_AUDIO_DELAY_MIN_VALUE;
        }
        $("audioDelayValue").innerHTML = audioDelay;
        $("audioDelayPgreLeft").style.width = parseInt((audioDelay) * PROGRESS_WIDTH / (PROGRESS_AUDIO_DELAY_MAX_VALUE), 10) + "px";
       // $("audioDelayPgreRight").style.width = parseInt((PROGRESS_AUDIO_MAX_VALUE - audioDelay) * PROGRESS_WIDTH / ( 50 + PROGRESS_AUDIO_MAX_VALUE), 10) + "px";
        var temp = parseInt((audioDelay) * PROGRESS_WIDTH / (PROGRESS_AUDIO_DELAY_MAX_VALUE), 10);
        $("audioDelayPgreRight").style.width = parseInt(PROGRESS_WIDTH - temp,10) + "px" ;
    }
    else if (name == soundSetTitleWords[8])
    {
        if (sound100HZValue > PROGRESS_MAX_VALUE)
        {
            sound100HZValue = PROGRESS_MAX_VALUE
        }
        if (sound100HZValue < 0)
        {
            sound100HZValue = 0;
        }
        $("100HZValue").innerHTML = sound100HZValue;
        $("100HZPgreLeft").style.width = parseInt(sound100HZValue * PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
        $("100HZPgreRight").style.width = parseInt((PROGRESS_MAX_VALUE - sound100HZValue) * PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
    }
    else if (name == soundSetTitleWords[9])
    {
        if (sound300HZValue > PROGRESS_MAX_VALUE)
        {
            sound300HZValue = PROGRESS_MAX_VALUE
        }
        if (sound300HZValue < 0)
        {
            sound300HZValue = 0;
        }
        $("300HZValue").innerHTML = sound300HZValue;
        $("300HZPgreLeft").style.width = parseInt(sound300HZValue * PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
        $("300HZPgreRight").style.width = parseInt((PROGRESS_MAX_VALUE - sound300HZValue) * PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
    }
    else if (name == soundSetTitleWords[10])
    {
        if (sound1KHZValue > PROGRESS_MAX_VALUE)
        {
            sound1KHZValue = PROGRESS_MAX_VALUE
        }
        if (sound1KHZValue < 0)
        {
            sound1KHZValue = 0;
        }
        $("1KHZValue").innerHTML = sound1KHZValue;
        $("1KHZPgreLeft").style.width = parseInt(sound1KHZValue * PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
        $("1KHZPgreRight").style.width = parseInt((PROGRESS_MAX_VALUE - sound1KHZValue) * PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
    }
    else if (name == soundSetTitleWords[11])
    {
        if (sound3KHZValue > PROGRESS_MAX_VALUE)
        {
            sound3KHZValue = PROGRESS_MAX_VALUE
        }
        if (sound3KHZValue < 0)
        {
            sound3KHZValue = 0;
        }
        $("3KHZValue").innerHTML = sound3KHZValue;
        $("3KHZPgreLeft").style.width = parseInt(sound3KHZValue * PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
        $("3KHZPgreRight").style.width = parseInt((PROGRESS_MAX_VALUE - sound3KHZValue) * PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
    }
    else if (name == soundSetTitleWords[12])
    {
        if (sound10KHZValue > PROGRESS_MAX_VALUE)
        {
            sound10KHZValue = PROGRESS_MAX_VALUE
        }
        if (sound10KHZValue < 0)
        {
            sound10KHZValue = 0;
        }
        $("10KHZValue").innerHTML = sound10KHZValue;
        $("10KHZPgreLeft").style.width = parseInt(sound10KHZValue * PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
        $("10KHZPgreRight").style.width = parseInt((PROGRESS_MAX_VALUE - sound10KHZValue) * PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
    }
    else if (name == soundSetTitleWords[13])
    {
        if (balanceValue + 50 > PROGRESS_MAX_VALUE)
        {
            balanceValue = 50
        }
        if (balanceValue + 50 < 0)
        {
            balanceValue = -50;
        }
        $("balanceValue").innerHTML = balanceValue;
        $("balancePgreLeft").style.width = parseInt((balanceValue + 50) * PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
        $("balancePgreRight").style.width = parseInt((PROGRESS_MAX_VALUE - (balanceValue + 50)) * PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
    }
    else if(name==soundSetTitleWords[17])
    {
        if(volumeValue>PROGRESS_MAX_VALUE)
        {
            volumeValue = PROGRESS_MAX_VALUE;
        }
        if(volumeValue<0)
        {
            volumeValue = 0;
        }
        $("volumeValue").innerHTML = volumeValue;
        $("volumePgreLeft").style.width = parseInt(volumeValue*PROGRESS_WIDTH/PROGRESS_MAX_VALUE,10) + "px";
        $("volumePgreRight").style.width = parseInt((PROGRESS_MAX_VALUE - volumeValue)*PROGRESS_WIDTH/PROGRESS_MAX_VALUE,10) + "px";
    }
    else if(name==soundSetTitleWords[20])
    {
        if(pitchValue>PROGRESS_MAX_VALUE)
        {
            pitchValue = PROGRESS_MAX_VALUE;
        }
        if(pitchValue<0)
        {
            pitchValue = 0;
        }
        $("pitchValue").innerHTML = pitchValue;
        $("pitchPgreLeft").style.width = parseInt(pitchValue*PROGRESS_WIDTH/PROGRESS_MAX_VALUE,10) + "px";
        $("pitchPgreRight").style.width = parseInt((PROGRESS_MAX_VALUE - pitchValue)*PROGRESS_WIDTH/PROGRESS_MAX_VALUE,10) + "px";
    }
}

function showFocus()//显示主页面的焦点
{
    timeoutInit();
    top.doEleScrForNoOption(listFirstSpans, findRealPosition(positionV), -1);
    $("listFocus").style.display = "block";
}
function hiddenFocus()//隐藏主页面的焦点
{
    $("listFocus").style.display = "none";
}
function hiddenPromptCont()//隐藏提示语
{
    $("promptWin").style.display = "none";
}
var ONE_LINE_TOP = 35;
var TWO_LINE_TOP = 12;
var THREE_LINE_TOP = 18;
var FOUR_LINE_TOP = 28;
var FIVE_LINE_TOP = 35;
var SIX_LINE_TOP = 40;
function showPromptImg()
{
    $("promptWin").style.display = "block";
    var height = $("promptContent").offsetHeight;
    var img = $("promptWin").getElementsByTagName("img");
    var div = $("promptWin").getElementsByTagName("div");
    if (height == 40)
    {
        img[0].src = soundPromptImg[0];
        $("promptContent").style.top = ONE_LINE_TOP + "px";
        img[0].style.height = "110px";
        div[0].style.height = "102px";
        $("promptWin").style.top = 80 + positionV * 70 + "px";
    }
    else if (height == 80)
    {
        img[0].src = soundPromptImg[0];
        $("promptContent").style.top = TWO_LINE_TOP + "px";
        img[0].style.height = "110px";
        div[0].style.height = "102px";
        $("promptWin").style.top = 80 + positionV * 70 + "px";
    }
    else if (height == 120)
    {
        img[0].src = soundPromptImg[1];
        $("promptContent").style.top = THREE_LINE_TOP + "px";
        img[0].style.height = "160px";
        div[0].style.height = "152px";
        $("promptWin").style.top = 50 + positionV * 70 + "px";
    }
    else if (height == 160)
    {
        img[0].src = soundPromptImg[2];
        $("promptContent").style.top = FOUR_LINE_TOP + "px";
        img[0].style.height = "220px";
        div[0].style.height = "212px";
        $("promptWin").style.top = 20 + positionV * 70 + "px";
    }
    else if (height == 200)
    {
        img[0].src = soundPromptImg[3];
        $("promptContent").style.top = FIVE_LINE_TOP + "px";
        img[0].style.height = "280px";
        div[0].style.height = "272px";
        $("promptWin").style.top = -10 + positionV * 70 + "px";
    }
    else if (height == 240)
    {
        img[0].src = soundPromptImg[4];
        $("promptContent").style.top = SIX_LINE_TOP + "px";
        img[0].style.height = "340px";
        div[0].style.height = "332px";
        $("promptWin").style.top = -30 + positionV * 70 + "px";
    }
    else if (height == 0)
    {
        img[0].src = soundPromptImg[0];
        $("promptContent").style.top = TWO_LINE_TOP + "px";
        img[0].style.height = "110px";
        div[0].style.height = "102px";
        $("promptWin").style.top = 80 + positionV * 70 + "px";
    }
}
var showPromptContTimer = 0;
function showPromptCont()//显示提示语内容函数
{
    if (focusOn == "menu" && parent.currentShowMenu == 1)
    {
        clearTimeout(showPromptContTimer);
        showPromptContTimer = setTimeout(function ()
        {
            $("promptWin").style.display = "none"
        }, 5000);
        $("promptWin").style.top = 80 + positionV * 70 + "px";
        var currentItemName = findName(positionV);

        if("Sound preset" == currentItemName) {     //0
            if (setting.footballMode)
                $("promptContent").innerHTML = soundPromptCon[6];
            else
                $("promptContent").innerHTML = soundPromptCon[0];
            showPromptImg();
        }
        else if("balance" == currentItemName)      //6
        {
            $("promptContent").innerHTML = soundPromptCon[1];
            showPromptImg();
        }
        else if("SPDIF type" == currentItemName)     //8
        {
            $("promptContent").innerHTML = soundPromptCon[3];
            showPromptImg();
        }
        else
        {
            $("promptWin").style.display = "none";
        }



        /*switch (positionV)
        {
            case 0:
                $("promptContent").innerHTML = soundPromptCon[0];
                showPromptImg();
                break;
            case 1:
                $("promptWin").style.display = "none";
                break;
            case 2:
                $("promptWin").style.display = "none";
                break;
            case 3:
                $("promptWin").style.display = "none";
                break;
            case 4:
                $("promptWin").style.display = "none";
                break;
            case 5:
                $("promptWin").style.display = "none";
                break;
            case 6:
                $("promptContent").innerHTML = soundPromptCon[1];
                showPromptImg();
                break;
            case 7:
                $("promptWin").style.display = "none";
                break;
            case 8:   //  SPDIF type
               $("promptContent").innerHTML = soundPromptCon[3];
                showPromptImg();
                break;
            default:
                $("promptWin").style.display = "none";
                break;
        }*/
    }
    else
    {
        $("promptWin").style.display = "none";
    }
}


function initPass()
{
    var passFormSpanList = $("passForm").getElementsByTagName("span");
    passFormSpanList[0].innerHTML = psswordWords;
    passFormSpanList[1].innerHTML = psswordWords;
    password = "";
    $("passContent").innerHTML = password + "_";
    $("passRemind").innerHTML = "";
    $("passForm").style.display = "block";

    focusOn="password";
    parent.hiddenPage(1);
    top.showDialogPosition($("passForm"), 800, 300, 1920, 1080, 0, 0);
}

function doCheck(which)
{
    /*需要说明的是String.fromCharCode(which)的值总是大写的，因为onkeyup和onkeydown事件不能主动判断键盘的大小写，
     onkeypress可以判断大小写。其中只有onkeyup事件能获取键盘按下去后的结果值，因为此处需用到要清除键盘按下去后的值，
     所以只能用onkeyup事件，考虑到遥控器只有数字键，没有大小写之分，所以够用了*/
    passwordLength = password.length;
    if (passwordLength == 4)//重新输入
    {
        password = "";
        $("passContent").innerHTML = password + "_";
    }
    password = password + which;
    $("passContent").innerHTML = $("passContent").innerHTML.substring(0, passwordLength) + "*" + "_";
    passwordLength++;
    if (passwordLength == 4)
    {
        $("passContent").innerHTML = $("passContent").innerHTML.substring(0, passwordLength);
        if (password != setting.password && password != top.g_superPassword)
        {
            passwordLength = 0;
            $('passRemind').innerHTML = passIncorrectWords;
            password = "";
            $("passContent").innerHTML = password + "_";
        }
        else
        {
            focusOn = "menu";
            $("passForm").style.display = "none";
            if(top.virtualRemoteState == 1)
			{
				//隐藏虚拟遥控器--lqt
				top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
			}
            menuLock = 0;
            hotelEnable = 0;
            lockFlag = 0;
            init();
            parent.showPage(1);
        }
    }
}

function $(id)
{
    return document.getElementById(id);
}

function uninit()
{
    top.timeoutFuc.timeoutTimes = 30;
    setting.previewSoundEffect(setting.soundPreset);
    top.g_sound_settings =
    {
        isFirstTimeIntoSound: 0,
        autoVolumeCtrl: autoVolumeCtrl,
        sPDIFType: sPDIFType,
        sPDIFDelay: sPDIFDelay,
        audioScene: audioScene
    };
}

function timeoutInit()
{
    document.onkeydown = top.timeoutMyFuc;
    top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = function (evt)
    {
        keyDownProcess(evt);
    };
}

function notifyProcess(evt)
{
    var msg = evt.which;
    switch (msg)
    {
    	 case top.E_CEC_HDMI_DEVICE_INSERTED:
		var devCurNum = setting.getProperty("app.ui.audioDeviceStatus","000");//2 //bit 2:ARC ;bit 1:bluetooth, bit 0:headphone
		top.systemEventProc(evt);
		var devNewNum = setting.getProperty("app.ui.audioDeviceStatus","000");//2 //bit 2:ARC ;bit 1:bluetooth, bit 0:headphone
		if(devCurNum.charAt(0) != devNewNum.charAt(0))
		{
			updateUI();
		}
		break;
        default:
            top.systemEventProc(evt);
            break;
    }
}


function addMouseListener()
{
    document.body.onmousedown = function (evt)
    {
        evt.preventDefault();
        top.timeoutFuc.osdTimeoutEndFuc();
        if (evt.button == 2)//right key
        {
            toBack();
        }
        top.timeoutFuc.osdTimeoutStartFuc();
    };
	var Listlength = findPosition(findLastName()) + 1;
	//console.log("in addMouseListener ---- Listlength = "+Listlength+"lastname = "+findLastName());
	for(var i = 0; i <= Listlength; i++)
	{
		//console.log("in addMouseListener ---- Listlength = "+Listlength+"i = "+i+"menuList["+i+"].name = "+menuList[i].name);
        sndMenuRightLiList[i].setAttribute("newAttr", i);
        sndMenuRightLiList[i].onmousedown = function (evt)
        {
            evt.preventDefault();
            parent.onLoadPage = 0;
            parent.$("homeMenu").contentWindow.document.getElementById("menuFocus").src = parent.mentFocusImg[1];
            parent.$("subMenu1").contentWindow.showFocus();
            parent.currentShowMenu = 1;
            //top.requestFocus(parent.subMenu1, 1);
            //parent.setIndexFocusPage("subMenu1");
			//console.log(" parent.menuLock = "+parent.menuLock+"parent.hotelEnable = "+parent.hotelEnable);
            if ((parent.menuLock) && (parent.hotelEnable))
            {
                parent.menuLockFlag = 0;
                return;
            }
            top.timeoutFuc.osdTimeoutEndFuc();
            if (evt.button == 0)//left key
            {
                if (focusOn == "menu")
                {
					positionV = parseInt(this.getAttribute("newAttr"));
					console.log("positionV = "+positionV+"name = "+menuList[positionV].name);
					positionV = findPosition(menuList[parseInt(this.getAttribute("newAttr"))].name);
                    doOffsetMenuList(positionV);
					//$("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP * positionV + "px";
                    doEnter();
                    if ((menuLock) && (hotelEnable) && (lockFlag))
                    {
                    }
                    else
                    {
                        showPromptCont();
                    }
                }
            }
            top.timeoutFuc.osdTimeoutStartFuc();
        };
    }


    for (var i = 0; i < listFormLiList.length; i++)
    {
        listFormLiList[i].setAttribute("newAttr", i);
        listFormLiList[i].onmousedown = function (evt)
        {
            top.timeoutFuc.osdTimeoutEndFuc();
            if (evt.button == 0)//left key
            {
		//console.log("in mouse focusOn = "+focusOn);
                if (focusOn == "autoVolumeCtrl" || focusOn == "audioScene" || focusOn == "sPDIFType" || focusOn =="bassBoostMode"||focusOn =="soundPresetOffSet" || focusOn =="soundPreset")
                {
                    form_position_h = parseInt(this.getAttribute("newAttr"));
                    $("listFormFocus").style.top = form_position_h * FORM_STEP + "px";
                    doEnter();
                    if ((menuLock) && (hotelEnable) && (lockFlag))
                    {
                    }
                    else
                    {
                        showPromptCont();
                    }
                }
            }
            top.timeoutFuc.osdTimeoutStartFuc();
        };
    }
	//console.log("chick listUpRemind focusOn is "+focusOn);
	$("listUpRemind").onmousedown = function(evt){
	 top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusOn=="menu")
			{
				evt.preventDefault();
				parent.onLoadPage=0;
				parent.$("homeMenu").contentWindow.document.getElementById("menuFocus").src=parent.mentFocusImg[1];
				parent.$("subMenu1").contentWindow.showFocus();
				parent.currentShowMenu=1;
				//top.requestFocus(parent.subMenu1, 1);
				//parent.setIndexFocusPage("subMenu1");
				if((parent.menuLock) && (parent.hotelEnable))
				{
					parent.menuLockFlag = 0;
					return;
				}
				toUp();
			}
		}
		showPromptCont();
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	//console.log("chick listDownRemind focusOn is "+focusOn);
	$("listDownRemind").onmousedown = function(evt){
		 top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn=="menu")
				{
					evt.preventDefault();
					parent.onLoadPage=0;
					parent.$("homeMenu").contentWindow.document.getElementById("menuFocus").src=parent.mentFocusImg[1];
					parent.$("subMenu1").contentWindow.showFocus();
					parent.currentShowMenu=1;
					//top.requestFocus(parent.subMenu1, 1);
					//parent.setIndexFocusPage("subMenu1");
					if((parent.menuLock) && (parent.hotelEnable))
					{
						parent.menuLockFlag = 0;
						return;
					}
					toDown();
				}
			}
			showPromptCont();
			top.timeoutFuc.osdTimeoutStartFuc();
	}
	//console.log("chick adjustProgMinorUp focusOn is "+focusOn);
	$("adjustProgMinorUp").onmousedown = function(evt){
		 top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				toUp();
			}
			showPromptCont();
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	//console.log("chick listUpImg focusOn is "+focusOn);
	$("listUpImg").onmousedown = function(evt){
		 top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				toUp();
			}
			showPromptCont();
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	//console.log("chick listDownImg focusOn is "+focusOn);
	$("listDownImg").onmousedown = function(evt){
		 top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				toDown();
			}
			showPromptCont();
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	//console.log("chick adjustProgMinorDown focusOn is "+focusOn);
	$("adjustProgMinorDown").onmousedown = function(evt){
		 top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				toDown();
			}
			showPromptCont();
			top.timeoutFuc.osdTimeoutStartFuc();
		}
   $("adjustProgMain").onmousedown = function (evt)
    {
        top.timeoutFuc.osdTimeoutEndFuc();
        if (evt.button == 0)//left key
        {
            if (focusOn == "progressBar")
            {
                var currentProgressName = $("adjustProgMain").getElementsByTagName("span")[0].innerHTML;
				var value = parseInt((evt.clientX - PROGRESS_START_LEFT_OFFSET)*PROGRESS_MAX_VALUE/EXTRA_PROGRESS_WIDTH,10);
				//console.log("current dex is "+evt.clientX);
				if (currentProgressName == soundSetTitleWords[8])
				{
					sound100HZValue = value;
					//console.log("click "+soundSetTitleWords[8]+" is "+sound100HZValue);
					if(sound100HZValue < 0 )
					{
						sound100HZValue = 0;
					}
					else if(sound100HZValue > 100)
					{
						sound100HZValue = 100;
					}
					//console.log("index  is "+parseInt(sound100HZValue * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10)+","+parseInt((PROGRESS_MAX_VALUE - sound100HZValue) * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10));
					progressDivList[0].style.width = parseInt(sound100HZValue * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
					progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - sound100HZValue) * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
					setting.soundPreset100 = sound100HZValue;
					$("adjustProgValue").innerHTML = sound100HZValue;

				}
				else if (currentProgressName == soundSetTitleWords[9])
				{
					sound300HZValue = value;
					//console.log("click "+soundSetTitleWords[9]+" is "+sound300HZValue);
					if(sound300HZValue < 0 )
					{
						sound300HZValue = 0;
					}
					else if(sound300HZValue > 100)
					{
						sound300HZValue = 100;
					}
					progressDivList[0].style.width = parseInt(sound300HZValue * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
					progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - sound300HZValue) * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
					setting.soundPreset300 = sound300HZValue;
					$("adjustProgValue").innerHTML = sound300HZValue;
				}
				else if (currentProgressName == soundSetTitleWords[10])
				{
					sound1KHZValue = value;
					//console.log("click "+soundSetTitleWords[10]+" is "+sound1KHZValue);
					if(sound1KHZValue < 0 )
					{
						sound1KHZValue = 0;
					}
					else if(sound1KHZValue > 100)
					{
						sound1KHZValue = 100;
					}
					progressDivList[0].style.width = parseInt(sound1KHZValue * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
					progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - sound1KHZValue) * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
					setting.soundPreset1000 = sound1KHZValue;
					$("adjustProgValue").innerHTML = sound1KHZValue;
				}
				else if (currentProgressName == soundSetTitleWords[11])
				{
					sound3KHZValue = value;
					//console.log("click "+soundSetTitleWords[11]+" is "+sound3KHZValue);
					if(sound3KHZValue < 0 )
					{
						sound3KHZValue = 0;
					}
					else if(sound3KHZValue > 100)
					{
						sound3KHZValue = 100;
					}
					progressDivList[0].style.width = parseInt(sound3KHZValue * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
					progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - sound3KHZValue) * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
					setting.soundPreset3000 = sound3KHZValue;
					$("adjustProgValue").innerHTML = sound3KHZValue;
				}
				else if (currentProgressName == soundSetTitleWords[12])
				{
					sound10KHZValue = value;
					//console.log("click "+soundSetTitleWords[12]+" is "+sound10KHZValue);
					if(sound10KHZValue < 0 )
					{
						sound10KHZValue = 0;
					}
					else if(sound10KHZValue > 100)
					{
						sound10KHZValue = 100;
					}
					progressDivList[0].style.width = parseInt(sound10KHZValue * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
					progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - sound10KHZValue) * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";

					setting.soundPreset10000 = sound10KHZValue;
					$("adjustProgValue").innerHTML = sound10KHZValue;
				}
				else if (currentProgressName == soundSetTitleWords[13])
				{
					//console.log(soundSetTitleWords[13]+" evt.clientX is "+evt.clientX);
					balanceValue = value;
					//console.log("click "+soundSetTitleWords[13]+" is "+balanceValue);
					if(balanceValue < 50 )
					{
						if(balanceValue < 0)
						{
							balanceValue = 0;
						}
						balanceValue -= 50  ;
					}
					else if(balanceValue >= 50)
					{
						if(balanceValue > 100)
						{
							balanceValue = 100;
						}
						balanceValue -= 50;
					}
					progressDivList[0].style.width = parseInt((balanceValue + 50) * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
					progressDivList[2].style.width = parseInt((PROGRESS_MAX_VALUE - (balanceValue + 50)) * EXTRA_PROGRESS_WIDTH / PROGRESS_MAX_VALUE, 10) + "px";
					setting.soundBalance = balanceValue;
					$("adjustProgValue").innerHTML = balanceValue;
				}
				else if (currentProgressName == soundSetTitleWords[3])//SPDIF delay
				{
					//console.log("value is "+value);
					sPDIFDelay = parseInt(value*PROGRESS_SPDIF_MAX_VALUE/PROGRESS_MAX_VALUE,10);
					//console.log("click "+soundSetTitleWords[3]+" is "+sPDIFDelay);
					if (sPDIFDelay < 0)
                    {
                        sPDIFDelay = 0;
                    }
                    else if (sPDIFDelay > PROGRESS_SPDIF_MAX_VALUE)
                    {
                        sPDIFDelay = PROGRESS_SPDIF_MAX_VALUE;
                    }
					progressDivList[0].style.width = parseInt(sPDIFDelay * EXTRA_PROGRESS_WIDTH / PROGRESS_SPDIF_MAX_VALUE, 10) + "px";
					progressDivList[2].style.width = parseInt((PROGRESS_SPDIF_MAX_VALUE - sPDIFDelay) * EXTRA_PROGRESS_WIDTH / PROGRESS_SPDIF_MAX_VALUE, 10) + "px";

                    setting.sPDIFDelay = sPDIFDelay;
                    $("adjustProgValue").innerHTML = sPDIFDelay;
				}
				else if (currentProgressName == soundSetTitleWords[4])//Audio delay
				{
					//console.log("value is "+value);
					audioDelay = parseInt(value*(PROGRESS_AUDIO_DELAY_MAX_VALUE)/PROGRESS_MAX_VALUE/10,10) * 10;
					//console.log("click "+soundSetTitleWords[4]+" is "+audioDelay);
					if(audioDelay < 200 )
					{
						if(audioDelay < 0)
						{
							audioDelay = 0;
						}
						audioDelay -= 200  ;
					}
					else if(audioDelay >= 200)
					{
						if(audioDelay > PROGRESS_AUDIO_DELAY_MAX_VALUE)
						{
							audioDelay = PROGRESS_AUDIO_DELAY_MAX_VALUE;
						}
						//audioDelay -= 200;
					}
					progressDivList[0].style.width = parseInt((audioDelay) * EXTRA_PROGRESS_WIDTH / ( PROGRESS_AUDIO_DELAY_MAX_VALUE), 10) + "px";
                    var temp = parseInt((audioDelay) * EXTRA_PROGRESS_WIDTH / (PROGRESS_AUDIO_DELAY_MAX_VALUE), 10);
                    progressDivList[2].style.width = parseInt(EXTRA_PROGRESS_WIDTH - temp,10) + "px" ;
					//console.log("mouse audioDelay is "+audioDelay+"the index is "+temp+","+parseInt(EXTRA_PROGRESS_WIDTH - temp,10));
					setting.audioDelay = audioDelay;
                    $("adjustProgValue").innerHTML = audioDelay;
				}
				
            }
        }
        top.timeoutFuc.osdTimeoutStartFuc();
    };


}

function findPosition(name)
{
    var position = 0;
    for (var i = 0; i < menuList.length; i++)
    {
        if (menuList[i].name == name)
        {
            break;
        }
        if (menuList[i].showFlag == 1)
        {
            position++;
        }
    }
    return position;
}
function findFunction(postion)
{
    var num = -1;
    for (var i = 0; i < menuList.length; i++)
    {
        if (menuList[i].showFlag == 1)
        {
            num++;
        }
        if (num == postion)
        {
            menuList[i].func();
            break;
        }
    }
}
function findRealPosition(postion)
{
    var num = -1;
    for (var i = 0; i < menuList.length; i++)
    {
        if (menuList[i].showFlag == 1)
        {
            num++;
        }
        if (num == postion)
        {
            return i;
        }
    }
}
function findName(postion)
{
    var num = -1;
    for (var i = 0; i < menuList.length; i++)
    {
        if (menuList[i].showFlag == 1)
        {
            num++;
        }
        if (num == postion)
        {
            return menuList[i].name;
        }
    }
}
function findLastName()
{
    for (var i = menuList.length - 1; i >= 0; i--)
    {
        if (menuList[i].showFlag == 1)
        {
            return menuList[i].name;
        }
    }
}
function findFirstName()
{
    for (var i = 0; i < menuList.length; i++)
    {
        if (menuList[i].showFlag == 1)
        {
            return menuList[i].name;
        }
    }
}

function doOffsetMenuList(postion)
{
    try
    {
        if (postion >= 12)
        {
            offsetPosition = postion - 11;
            $("menuUl").style.top = -(postion - 11) * 70 + "px";
            $("listFocus").style.top = SUB_MENU_START + 11 * SUB_MENU_STEP + "px";
        }
        else
        {
            offsetPosition = 0;
            $("menuUl").style.top = 0 + "px";
            $("listFocus").style.top = SUB_MENU_START + postion * SUB_MENU_STEP + "px";
        }
    } catch (er)
    {
        top.g_channel.testLog("doOffsetMenuList:" + er);
    }
}

function setSoundPresetFocus(dir)//[1]down [-1]up
{
    var topOffset = SUB_MENU_START + SUB_MENU_STEP * (positionV>11?11:positionV) - 10;
    var leftOffset = 980;
    if(dir > 0)//down
    {
        if(form_position_h == 4 && form_position_h + soundPresetOffSet == soundPresetModeWords.length - 1)//bottom
        {
            form_position_h = 0;
            soundPresetOffSet = 0;
            top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList,
                soundPresetModeWords, soundPresetModeWords.length, form_position_h, soundPresetOffSet);
        }
        else if(form_position_h == 4 && form_position_h + soundPresetOffSet < soundPresetModeWords.length - 1)
        {
            soundPresetOffSet++;
            top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList,
                soundPresetModeWords, soundPresetModeWords.length, form_position_h, soundPresetOffSet);
        }
        else if(form_position_h < 4)
        {
            form_position_h++;
        }
    }
    else if(dir < 0)//up
    {
        if(!form_position_h && !soundPresetOffSet)
        {
            form_position_h = 4;
            soundPresetOffSet = soundPresetModeWords.length - 5;
            top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList,
                soundPresetModeWords, soundPresetModeWords.length, form_position_h, soundPresetOffSet);
        }
        else if(!form_position_h && soundPresetOffSet > 0)
        {
            soundPresetOffSet--;
            top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList,
                soundPresetModeWords, soundPresetModeWords.length, form_position_h, soundPresetOffSet);
        }
        else if(form_position_h > 0)
        {
            form_position_h--;
        }
    }
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

var lastFocusName;
var lastFocusType;
function ttsRead()
{
    if(0 == top.g_setting.ttsSwitch)
    {
        top.ttsLog("ttsSwitch is off");
        return;
    }
    var ttsStr = "";
    var currentStatus = "";
    var currentName = findName(positionV);
    var ttsName = "";

    function isSelected(selectedFlag)
    {
        if(selectedFlag)
        {
            currentStatus = currentStatus + ", selected";
        }
        else
        {
            currentStatus = currentStatus + ", not selected";
        }
    }

    if("menu" == focusOn && 1 == parent.currentShowMenu)
    {
        switch(currentName)
        {
            case "Sound preset":
                ttsName = soundSetTitleWords[0] + ",";
                currentStatus = soundPresetModeWords[soundPreset];
                break;
            case "sound100Hz":
                ttsName = soundSetTitleWords[8] + ",";
                currentStatus = setting.soundPreset100;
                break;
            case "sound300Hz":
                ttsName = soundSetTitleWords[9] + ",";
                currentStatus = setting.soundPreset300;
                break;
            case "sound1KHz":
                ttsName = soundSetTitleWords[10] + ",";
                currentStatus = setting.soundPreset1000;
                break;
            case "sound3KHz":
                ttsName = soundSetTitleWords[11] + ",";
                currentStatus = setting.soundPreset3000;
                break;
            case "sound10KHz":
                ttsName = soundSetTitleWords[12] + ",";
                currentStatus = setting.soundPreset10000;
                break;
            case "balance":
                ttsName = soundSetTitleWords[13] + ",";
                currentStatus = setting.soundBalance;
                break;
            case "Auto volume control":
                ttsName = soundSetTitleWords[1] + ",";
                currentStatus = offOnWords[autoVolumeCtrl];
                break;
            case "SPDIF type":
                ttsName = soundSetTitleWords[2] + ",";
                currentStatus = spdifTypeWords[sPDIFType];
                break;
            case "SPDIF delay":
                ttsName = soundSetTitleWords[3] + ",";
                currentStatus = setting.sPDIFDelay;
                break;
            case "Audio delay":
                ttsName = soundSetTitleWords[4] + ",";
                currentStatus = setting.audioDelay;
                break;
            case "SPDIF DDP":
                ttsName = soundSetTitleWords[14] + ",";
                currentStatus = offOnWords[sPDIFDDPValue];
                break;
            case "TV placement":
                ttsName = soundSetTitleWords[5] + ",";
                currentStatus = audioSceneWords[audioScene];
                break;
            case "bassBoost":
                ttsName = soundSetTitleWords[7] + ",";
                currentStatus = offOnWords[bassBoostMode];
                break;
            case "Advanced settings":
                ttsName = soundSetTitleWords[6];
                currentStatus = "";
                break;
            case "TTS":
                ttsName = TTSTypeWords[0];
                currentStatus = "";
                break;
            default:
                ttsName = "";
                currentStatus = "";
                break;
        }
    }
    else if("soundPreset" == focusOn)  //soundPreset选项菜单
    {
        ttsName = "";
        currentStatus = soundPresetModeWords[form_position_h + soundPresetOffSet];
        isSelected(soundPresetModeWords[soundPreset] == currentStatus);
    }
    else if("autoVolumeCtrl" == focusOn)
    {
        ttsName = "";
        currentStatus = offOnWords[form_position_h];
        isSelected(offOnWords[autoVolumeCtrl] == currentStatus);
    }
    else if("sPDIFDDP" == focusOn)
    {
        ttsName = "";
        currentStatus = offOnWords[form_position_h];
        isSelected(offOnWords[sPDIFDDPValue] == currentStatus);
    }
    else if("bassBoostMode" == focusOn)
    {
        ttsName = "";
        currentStatus = offOnWords[form_position_h];
        isSelected(offOnWords[bassBoostMode] == currentStatus);
    }
    else if("sPDIFType" == focusOn)
    {
        ttsName = "";
        currentStatus = spdifTypeWords[form_position_h];
        isSelected(spdifTypeWords[sPDIFType] == currentStatus);

    }
    else if("audioScene" == focusOn)
    {
        ttsName = "";
        currentStatus = audioSceneWords[form_position_h];
        isSelected(audioSceneWords[audioScene] == currentStatus);
    }
    else if("progressBar" == focusOn)
    {
        switch(currentName)
        {
            case "sound100Hz":
                ttsName = soundSetTitleWords[8];
                currentStatus = sound100HZValue;
                break;
            case "sound300Hz":
                ttsName = soundSetTitleWords[9];
                currentStatus = sound300HZValue;
                break;
            case "sound1KHz":
                ttsName = soundSetTitleWords[10];
                currentStatus = sound1KHZValue;
                break;
            case "sound3KHz":
                ttsName = soundSetTitleWords[11];
                currentStatus = sound3KHZValue;
                break;
            case "sound10KHz":
                ttsName = soundSetTitleWords[12];
                currentStatus = sound10KHZValue;
                break;
            case "balance":
                ttsName = soundSetTitleWords[13];
                currentStatus = balanceValue;
                break;
            case "SPDIF delay":
                ttsName = soundSetTitleWords[3];
                currentStatus = sPDIFDelay;
                break;
            case "Audio delay":
                ttsName = soundSetTitleWords[4];
                currentStatus = audioDelay;
                break;
            default:
                break;
        }
        if(lastFocusName == currentName && lastFocusType == focusOn)
        {
            ttsName = "";
        }
        else
        {
            ttsName = ttsName + ",";
        }
    }
    lastFocusType = focusOn;
    lastFocusName = currentName;
    ttsStr = ttsName + currentStatus;
    if("" != ttsStr)
    {
        top.ttsLog("ttsStr=" + ttsStr);
        // top.ttsLog("focusOn="+focusOn+"   currentName="+findName(positionV));
        // top.ttsLog("form_position_h="+form_position_h);
        top.setTTSSay(top.SPEECH_TYPE_FLUSH, ttsStr);
    }
}