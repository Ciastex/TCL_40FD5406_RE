/******************** created by chenhua ***********************/
var smartTVSetTitleWords = [top.smartTVOptions[0],top.homePageBackUp[1],top.smartTVOptions[1],top.sysOptions[8],top.smartTVOptions[2],top.netOptions[7],top.tcastOtherWords[3],
                            top.netOptions[9],top.smartTVOptions[4],top.bt_title,top.smartTVOptions[5],top.netOptions[8],top.hbbtvWords[0],
                            top.smartTVOptions[6],"Carevision",top.smartTVOptions[7],top.smartTVOptions[8],top.smartTVOptions[9],top.smartTVOptions[10]];
var resetWords                = [top.picResetDes,top.okCancel[0],top.okCancel[1]];
var offOnWords = top.offOn;
var smartTVPromptCon = [top.prompts[22], top.prompts[23], "", "", "", ""];
var smartTVPromptImg = ["images/info-1_2.png", "images/info-1_3.png", "images/info-1_4.png", "images/info-1_5.png", "images/info-1_6.png"]
var mainFocus = ["images/Focus_Frame/Focus-1.png", "images/Focus_Frame/Focus-2.png"];


var setting = top.g_setting;
var channel = top.g_channel;
var factory = top.g_factory;
var positionV = 0;					//主界面坐标
var form_position_h = 0;					//弹出框焦点位置

var guideOnValue = 0;
//var HbbTVSettingsValue = 0;
var DLNASettingsValue = 0;
var WOLEnableValue = 0;
//var cookievalue = 0;

var focusOn = "menu";				//menu,autoVolumeCtrl;sPDIFType ;audioMode;soundType;progressBar

var SUB_MENU_START = 90;					//二级级菜单焦点移动起始位置
var SUB_MENU_STEP = 70;					//二级级主菜单焦点移动的step
var FORM_STEP = 80;					//弹出框焦点移动的step
var PROGRESS_WIDTH = 300;
var EXTRA_PROGRESS_WIDTH = 900;					// 弹出式进度条的宽度

var menuLock = 0;
var hotelEnable = 0;
var titleWords = top.sysOptions[3];
var psswordWords = top.others[2];
var passwordLength = 0;
var password = "";
var passIncorrectWords = top.passError;
var lockFlag = 1;
var isReset                 = 0;                    //标记是否重置

var IFRAME_LEFT_OFFSET = 0;//subMenu1这个iframe在framwork中的相对左偏移
var EXTRA_PROGRESS_BAR_LEFT_OFFSET = 170 + 310;//进度条容器相对于submenu1这个iframe的左偏移
var PROGRESS_START_LEFT_OFFSET = IFRAME_LEFT_OFFSET + EXTRA_PROGRESS_BAR_LEFT_OFFSET;//进度条容器开始位置相对于framework的左偏移
var PROGRESS_SPDIF_MAX_VALUE = 600;//sPDIFDelay 的取值范围是0-PROGRESS_SPDIF_MAX_VALUE,最大值为PROGRESS_SPDIF_MAX_VALUE
var PROGRESS_AUDIO_MAX_VALUE = 1000;
var PROGRESS_MAX_VALUE = 100;

var sndMenuRightSpanList;
var sndMenuRightLiList;
var listFormLiList;
var listFirstSpans;
var listSecondDiv;
var showPromptContTimer = 0;

var ONE_LINE_TOP = 35;
var TWO_LINE_TOP = 12;
var THREE_LINE_TOP = 18;
var FOUR_LINE_TOP = 28;
var FIVE_LINE_TOP = 35;
var SIX_LINE_TOP = 40;
var showItemNum = 0;


var isCheckBox = 0;
var checkindex = 0;
var policyTextspans;
var privacy_li_list;
var privacy_img_list;
var checkPicture            = ["./images/option/check_2.png","./images/option/check_3.png","./images/option/check_4.png","./images/option/check_7.png"];//复选框图片
var focusCheck = 0;
var dataDelcheck1 = 0;
var dataDelcheck2 = 0;
var dataDeletionWords = top.dataDeletionWords;
var checkboxList;
var overHeight = 0;
document.onsystemevent = notifyProcess;

var menuList =
[
    {name:"Smart TV portal"			     ,  param:function(){doSmartTVPortal();            	},		showFlag:1},
    {name:"GuideON"               	     ,  param:function(){doGuideON();			        }, 		showFlag:0},
    {name:"HbbTV settings"               ,  param:function(){doHbbTVSettings();				}, 		showFlag:1},
    {name:"Cookies"						 ,	param:function(){doCookies();					},		showFlag:1},
    {name:"DLNA settings"                ,  param:function(){doDLNASettings();			    }, 		showFlag:1},
    {name:"TV remote"               	 ,  param:function(){doTVRemote();			        }, 		showFlag:1},
    {name:"T-cast"               	     ,  param:function(){doTcast();			            }, 		showFlag:1},
    {name:"Wifi display"               	 ,  param:function(){doWifiDisplay();			    }, 		showFlag:1},
    {name:"Smart TV policy"              ,  param:function(){doSmartTVPolicy(0);				}, 		showFlag:1},
    {name:"Privacy policy"              ,  param:function(){doSmartTVPolicy(2);				}, 		showFlag:1},
    {name:"Cookie policy"              ,  param:function(){doSmartTVPolicy(1);				}, 		showFlag:1},
    {name:"Data Deletion"              ,  param:function(){doDataDeletion();				    }, 		showFlag:1},
    {name:"Samba TV settings"           ,  param:function(){doSambaTVSettings();	            	}, 	    showFlag:1},//12
    {name:"Bluetooth"                    ,  param:function(){doBluetooth();	            	}, 	    showFlag:1},
    {name:"WOL enable"   				 ,  param:function(){doWOLEnable();  			    }, 		showFlag:1},
    {name:"Netflix settings"             ,  param:function(){doNetflixSettings();		    }, 		showFlag:1},
    {name:"HbbTV settings"             ,  param:function(){donewHbbTVSettings();		    }, 		showFlag:1},
    {name:"Reset Smart TV"               ,	param:function(){doResetSmartTV();			    }, 		showFlag:1},
    {name:"Carevision"               ,	param:function(){doCarevision();			    }, 		showFlag:0}
];


function init()
{
    top.initTextDirection(window);
    menuLock = factory.menuLock;
    hotelEnable = factory.hotelEnable;

    sndMenuRightLiList = $("sndMenuRight").getElementsByTagName("li");
    sndMenuRightSpanList = $("sndMenuRight").getElementsByTagName("span");

    listFormLiList = $("listForm").getElementsByTagName("li");
    progressDivList = $("adjustProgBar").getElementsByTagName("div");

    listFirstSpans = $("sndMenuRight").getElementsByClassName("listFirstProperty");
    listSecondDiv = $("sndMenuRight").getElementsByClassName("listSecondProperty");


    policyTextspans = $("policyTextContainer").getElementsByTagName("span");
    privacy_li_list = $("policyTextContainer").getElementsByTagName("li");
    privacy_img_list = $("policyTextContainer").getElementsByTagName("img");
    checkboxList = document.getElementsByClassName("policyNoticeCheckbox");
    if ((menuLock) && (hotelEnable) && (lockFlag))
    {
        sndMenuRightSpanList[0].innerHTML = titleWords;
        sndMenuRightLiList[0].getElementsByTagName("img")[0].style.display = "block";
    }
    else
    {
        sndMenuRightSpanList[0].innerHTML = smartTVSetTitleWords[0];
        sndMenuRightSpanList[1].innerHTML = smartTVSetTitleWords[1];
        sndMenuRightSpanList[2].innerHTML = smartTVSetTitleWords[2];
        sndMenuRightSpanList[3].innerHTML = smartTVSetTitleWords[3];
        sndMenuRightSpanList[4].innerHTML = smartTVSetTitleWords[4];
        sndMenuRightSpanList[5].innerHTML = smartTVSetTitleWords[5];
        sndMenuRightSpanList[6].innerHTML = smartTVSetTitleWords[6];
        sndMenuRightSpanList[7].innerHTML = smartTVSetTitleWords[7];
        sndMenuRightSpanList[8].innerHTML = top.termsFirTitle[0];//Terms & Conditions

        sndMenuRightSpanList[9].innerHTML = top.termsFirTitle[1];//Privacy policy
        sndMenuRightSpanList[10].innerHTML = top.termsFirTitle[2];//Cookie policy
        sndMenuRightSpanList[11].innerHTML = smartTVSetTitleWords[17];//Data Deletion

        sndMenuRightSpanList[12].innerHTML = smartTVSetTitleWords[18];//sambaTV
        sndMenuRightSpanList[13].innerHTML = smartTVSetTitleWords[9];//Bluetooth
        sndMenuRightSpanList[14].innerHTML = smartTVSetTitleWords[10];//WOL enable
        sndMenuRightSpanList[15].innerHTML = smartTVSetTitleWords[11];//Netflix settings
        sndMenuRightSpanList[16].innerHTML = smartTVSetTitleWords[12];//HbbTV settings
        sndMenuRightSpanList[17].innerHTML = smartTVSetTitleWords[13];//Reset Smart TV
        sndMenuRightSpanList[18].innerHTML = smartTVSetTitleWords[14];//Carevision

        sndMenuRightLiList[0].getElementsByTagName("img")[0].style.display = "none";   //right arrow

        positionV = 0;
        $("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP * positionV + "px";
    }
    updateUI();
    addMouseListener();

    top.doEleScrForNoOption(listFirstSpans, positionV, 0);
}

function updateUI()//初始化、更新界面
{
    //2、根据数据设置showflag
    checkShowMenu();

    //1、重新得到数据
    updateItemValues();

    //3、为每个item重新赋值
    setValuesForItems();


    //4、显示每一个item
    showItems();
}


//-----------1、得到每个item的初始值--------------------------
function updateItemValues()
{
    guideOnValue = setting.guideOnSwitch;
    //HbbTVSettingsValue = setting.hbbTVMode;
    DLNASettingsValue = setting.dlnaEnable;
    WOLEnableValue = setting.netWakeupMode;
	//cookievalue = setting.hbbtvCookieMode;
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
    }
	if((top.timeShiftStatusFlag == 1) || (top.recordStatusFlag == 1))
	{
		menuList[7].showFlag = 0;//隐藏 Wifi display add liukl
	}
    //在某些页面下弹出全局setting，需要隐藏部分项
    if(1 == top.appOpenFlag || "media" == top.preTempPage || "homePage" == top.preTempPage)
    {
        menuList[7].showFlag = 0;
        if(1 == top.appOpenFlag)  //隐藏 Smart Tv portal
        {
            menuList[0].showFlag = 0;
        }
    }
    if (top.isSambaFlag != "true" || top.g_setting.getProperty("app.ui.sambaTV","1") !="1")
    {
        menuList[12].showFlag = 0;//samba
    }
    //无网络时，网络唤醒开关隐藏
    if(0 == top.netCheckStatus)
    {
        menuList[14].showFlag = 0;
    }

	//hbbtv 关闭状态cook不显示
	//console.log("menuList[2].showFlag is "+menuList[2].showFlag+" setting.hbbTVMode is "+setting.hbbTVMode);
	/*if(setting.hbbTVMode == 0)
    {
        menuList[3].showFlag = 0;
    }*/
    menuList[2].showFlag = 0;
    menuList[3].showFlag = 0;


    //disable GuideOn
    menuList[1].showFlag = 0;
    //disable Bluetooth
    menuList[13].showFlag = 0;
    if(top.isCAFlag)
    {
        menuList[4].showFlag = 0;
    }
    if(!top.isEUFlag)
    {
        menuList[9].showFlag = 0;
        menuList[10].showFlag = 0;
    }
    //disable date deletion EU GDPR
    menuList[11].showFlag = 0;
    if(!top.supportHBBTV)
    {
        //menuList[2].showFlag = 0;
        //menuList[3].showFlag = 0;
        menuList[16].showFlag = 0;
    }
    if(!top.supportTVRemote)
    {
        menuList[5].showFlag = 0;
    }

    if (top.isEUFlag)//T-Cast 与 wifiDisplay 合并，因此菜单中T-Cast选项、wifiDisplay选项都隐藏。除开EU区
    {
        if(!top.supportTCast)
        {
            menuList[6].showFlag = 0;
        }
        if(!top.supportWiFiDisplay)
        {
            menuList[7].showFlag = 0;
        }
    }
    else//T-Cast 与 wifiDisplay 合并，因此菜单中T-Cast选项、wifiDisplay选项都隐藏。除开EU区
    {
        if (top.supportTCast)//支持T-Cast，两个选项都隐藏
        {
            menuList[6].showFlag = 0;
            menuList[7].showFlag = 0;
        }
        else //不支持T-Cast，根据wifiDisplay来隐藏
        {
            menuList[6].showFlag = 0;
            if (!top.supportWiFiDisplay)
            {
                menuList[7].showFlag = 0;
            }
        }
    }


    /*if(!top.supportTCast)//T-Cast 与 wifiDisplay 合并，因此菜单中T-Cast选项、wifiDisplay选项都隐藏。除开EU区
    {
        menuList[6].showFlag = 0;
    }
    if(!top.supportWiFiDisplay)//T-Cast 与 wifiDisplay 合并，因此菜单中T-Cast选项、wifiDisplay选项都隐藏。除开EU区
    {
        menuList[7].showFlag = 0;
    }*/
    if(!top.supportNetworkedStandby)
    {
        menuList[14].showFlag = 0;
    }
    if(!top.supportSmartTVPortal)
    {
        menuList[0].showFlag = 0;
    }
    if (menuLock && hotelEnable && lockFlag)
    {
        menuList[0].showFlag = 1;
    }
    if (top.isIRNFlag)//伊朗隐藏netflix setting选项
    {
        menuList[15].showFlag = 0;
    }
    var options = setting.getProperty("ro.sita.model.Apps.menu_option","null");
    if (options.indexOf("Carevision")!=-1)
    {
        menuList[18].showFlag = 1;
    }
    else
    {
        menuList[18].showFlag = 0;
    }
    var countryForUI = top.g_setting.getProperty("ro.sita.cfg.app.countryForUI","NULL");
    if(("true" == top.isSCBCFlag) && ("US" == countryForUI))
    {
        menuList[4].showFlag = 0;
    }
}


//-----------3、给每个item赋值------------------------------
function setValuesForItems()
{
    listSecondDiv[1].innerHTML = offOnWords[guideOnValue];//GuideON
    //listSecondDiv[2].innerHTML = offOnWords[HbbTVSettingsValue];//Hbbtv settings
	//listSecondDiv[3].innerHTML = offOnWords[cookievalue];//cook settings
    listSecondDiv[4].innerHTML = offOnWords[DLNASettingsValue];//DLNA settings
    listSecondDiv[14].innerHTML = offOnWords[WOLEnableValue];//WOL enable
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
}

function doSmartTVPortal()
{
    if(top.preTempPage == "homePage")
    {
        channel.requestMute(0);  //解mute
    }
    top.globalHotkeyHandle(top.VK_HOME);


}
function doGuideON()
{
    $("listFocus").src = mainFocus[1];
    form_position_h = guideOnValue;
    var topOffset = SUB_MENU_START + SUB_MENU_STEP * (positionV>11?11:positionV) - 10;
    var leftOffset = 774;
    top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList, offOnWords, 2, form_position_h, 0);
    focusOn = "guideON";
}
/*function doHbbTVSettings()
{
    $("listFocus").src = mainFocus[1];
    form_position_h = HbbTVSettingsValue;
    var topOffset = SUB_MENU_START + SUB_MENU_STEP * (positionV>11?11:positionV) - 10;
    var leftOffset = 774;
    top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList, offOnWords, 2, form_position_h, 0);
    focusOn = "HbbtvSettings";
}
function doCookies()
{
	$("listFocus").src=mainFocus[1];
	form_position_h = cookievalue;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*(positionV>11?11:positionV) - 10;
	var leftOffset = 774;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
	focusOn = "cookie";
}*/

function doDLNASettings()
{
    $("listFocus").src = mainFocus[1];
    form_position_h = DLNASettingsValue;
    var topOffset = SUB_MENU_START + SUB_MENU_STEP * (positionV>11?11:positionV) - 10;
    var leftOffset = 774;
    top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList, offOnWords, 2, form_position_h, 0);
    focusOn = "DLNASettings";
}
function doTVRemote()
{
    parent.popWindow(2,"nScreenStart.html");
}
function doTcast()
{
    parent.popWindow(2,"tcast.html");
    /*var dlnaenable = setting.dlnaEnable;
    if (top.isEUFlag && dlnaenable == 0)
    {
        parent.hiddenPage(1);
        initPrivacyremind();
        checkindex = 3;
    }
    else
    {
        parent.popWindow(2,"tcast.html");
    }*/
}
function doWifiDisplay()
{
    parent.popWindow(2,"networkSetting/miracast.html");
}
function doSmartTVPolicy(index)
{
    var policyDiv = $("smartTvPolicyDiv");
    var textDiv = $("policyText");
    var titleDiv = $("titleName");
    var scrollDiv =  $("ScrollBar");
    top.getGDPRText(channel.systemCountry);//EU区域根据国家获取对应的GDPR翻译
    switch (index)
    {
        case 0:
            if (top.isEUFlag == 1)
            {
                titleDiv.innerHTML = top.termsFirTitle[0];
                setTimeout(function () {
                    textDiv.innerHTML = top.termsAndConditionsText.replace(/\\n/g,"<br/>&nbsp;&nbsp;&nbsp;").replace(/\\/g,"");
                },10);
            }
            else
            {
                titleDiv.innerHTML = top.termsTitle;
                textDiv.innerHTML = getSmartTvText(top.termsConditions);
            }
            focusOn = "policy";
            break;
        case 1:
            titleDiv.innerHTML = top.termsFirTitle[2];//top.cookiePolicyTitle;
            setTimeout(function () {
                textDiv.innerHTML = top.cookieNoticeText.replace(/\\n/g,"<br/>&nbsp;&nbsp;&nbsp;").replace(/\\/g,"");
            },10);
            focusOn = "policy";
            break;
        case 2:
            titleDiv.innerHTML = top.termsFirTitle[1];
            setTimeout(function () {
                textDiv.innerHTML = top.privacyNoticeText.replace(/\\n/g,"<br/>&nbsp;&nbsp;&nbsp;").replace(/\\/g,"");
            },10);
            focusOn = "privacypolicy";

            textDiv.style.width = 450 + "px";
            scrollDiv.style.left = 550 + "px";
            $("policyTextContainer").style.display = "block";
            /*var smartvservice = setting.getProperty("app.ui.quickKey", "1");
            var hbbtvservice = setting.getProperty("app.ui.hbbtv", "1");
            var launcherupdateservice = setting.getProperty("app.ui.update", "1");
            var dlnaservice = setting.dlnaEnable;
            var softwareupdaeservice = setting.getProperty("app.ui.software", "1");
            var freeviewplayservice = setting.hbbTVMdsState;
            console.log("--hzm freeviewplayservice = " +freeviewplayservice);
            for (var i = 0; i<policyTextspans.length;i++)
            {
                policyTextspans[i].innerText=top.privacyPolicyTerms[i];
            }
            privacy_img_list[0].src = checkPicture[smartvservice];
            privacy_img_list[1].src = checkPicture[hbbtvservice];
            privacy_img_list[2].src = checkPicture[launcherupdateservice];
            privacy_img_list[3].src = checkPicture[dlnaservice];
            privacy_img_list[4].src = checkPicture[softwareupdaeservice];
            privacy_img_list[5].src = checkPicture[freeviewplayservice];
            if (channel.systemCountry == 25)//uk
            {
                privacy_li_list[5].style.display = "block";
            }
            else
                privacy_li_list[5].style.display = "none";*/

            var smart_tv_service = setting.getProperty("app.ui.smart_tv_service","1");
            var software_update = setting.getProperty("app.ui.software_update","0");
            var personal_data = setting.getProperty("app.ui.personal_data","0");
            checkboxList[0].getElementsByTagName("img")[0].src = checkPicture[smart_tv_service];
            checkboxList[1].getElementsByTagName("img")[0].src = checkPicture[software_update];
            checkboxList[2].getElementsByTagName("img")[0].src = checkPicture[personal_data];
            $("policyNoticeText1").innerHTML = top.privacyPolicy[0];
            $("checkboxText1").innerHTML = top.privacyPolicy[1];
            $("checkboxText2").innerHTML = top.privacyPolicy[2];
            $("checkboxText3").innerHTML = top.privacyPolicy[5];
            $("policyNoticeText2").innerHTML = top.privacyPolicy[3];
            $("policyNoticeTable").scrollTop = "0px";
            var divtotal = $("policyNoticeTable").offsetHeight;
            var text1height = $("policyNoticeText1").offsetHeight;
            var text2height = $("checkboxText1").offsetHeight;
            var text3height = $("checkboxText2").offsetHeight;
            var text4height = $("checkboxText3").offsetHeight;
            var text5height = $("policyNoticeText2").offsetHeight;
            var realtotal = text1height + text2height + text3height + text4height +text5height;
            if (realtotal > divtotal)
            {
                overHeight = realtotal - divtotal + 30;
            }
            console.log("--hzm divtotal = " + divtotal);
            console.log("--hzm realtotal = " + realtotal);
            console.log("--hzm overHeight = " + overHeight);
            break;
    }
    policyDiv.style.display = "block";
    parent.hiddenPage(1);
    if(textDiv.scrollHeight == textDiv.clientHeight)
    {
        scrollDiv.style.display = "none";
    }
    else
    {
        scrollDiv.style.display = "block";
        scrollDiv.style.height = Math.round(textDiv.clientHeight * textDiv.clientHeight / (textDiv.clientHeight + textDiv.scrollHeight)) + "px";
    }
    textDiv.scrollTop = "0px";
    getPolicyScrollTop();
}

function doDataDeletion()
{
    focusCheck = 0;
    focusOn = "dataDeletion";
    $("dataDeletionDiv").style.display = "block";
    var manufacturer = setting.getProperty("ro.sita.model.MODEL_MANUFACTURER_NAME_CFG.MANUFACTURER_NAME", "TCL");
    if (manufacturer == "TCL" || manufacturer == "THOMSON")
    {
        $("dataDelTips").style.display = "block";
    }
    else
    {
        $("dataDelTips").style.display = "none";//非TCL自有品牌隐藏
    }
    $("dataDelTitleName").innerHTML = smartTVSetTitleWords[17];//"Data Deletion";
    $("dataDelcheckContent1").innerHTML = dataDeletionWords[0];//"Delete your data of Smart TV service in the backend servers.";
    $("dataDelNotes1").innerHTML = dataDeletionWords[1];//"Notes: The data related to your user of smart TV will be deleted in one month after you ticking this item. Please note that the deletion does not affect the local data stored in your TV.";
    $("dataDelcheckContent2").innerHTML = dataDeletionWords[2];//"No longer report data to Smart TV server.";
    $("dataDelNotes2").innerHTML = dataDeletionWords[3];//"Notes:  Your data in connection with the use of Smart TV services will no longer be transfered to server after you ticking this item. Your TV will no longer receive recommended services.";
    $("dataDelTips").innerHTML = dataDeletionWords[4];//"If you want to know more, please visit the website www.tcl.com";
    dataDelcheck1 = parseInt(setting.getProperty("app.ui.dataDelcheck1", "0"));
    dataDelcheck2 = parseInt(setting.getProperty("app.ui.dataDelcheck2", "0"));

    if (dataDelcheck1)
        $("dataDelcheck1").src = checkPicture[3];
    else
        $("dataDelcheck1").src = checkPicture[0];

    if (dataDelcheck2)
        $("dataDelcheck2").src = checkPicture[1];
    else
        $("dataDelcheck2").src = checkPicture[2];
    parent.hiddenPage(1);
}
function doSambaTVSettings()
{
    if (top.checkNetwork() == false)
    {
        return;
    }
    tcl.channel.requestInputSource(10);
    top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
    top.g_ulits.openApplication("tbrowser.common","http://settings.cid.samba.tv/02c55b15bdf2add184f0593ea1421dc2");
}
function doBluetooth()
{
    parent.popWindow(2,"blueTooth.html");
}
function doWOLEnable()
{
    $("listFocus").src = mainFocus[1];
    form_position_h = WOLEnableValue;
    var topOffset = SUB_MENU_START + SUB_MENU_STEP * (positionV>11?11:positionV) - 10;
    var leftOffset = 774;
    top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList, offOnWords, 2, form_position_h, 0);
    focusOn = "WOLEnable";
}
function doNetflixSettings()
{
    parent.jumpPage(2,"networkSetting/netflixSetting.html");
}

function donewHbbTVSettings()
{
    parent.jumpPage(2,"networkSetting/hbbtvSetting.html");
    /*var hbbtvservice = parseInt(setting.getProperty("app.ui.hbbtv", "1"));
    if (top.isEUFlag && hbbtvservice == 0)
    {
        parent.hiddenPage(1);
        initPrivacyremind();
        checkindex = 1;
    }
    else
    {
        parent.jumpPage(2,"networkSetting/hbbtvSetting.html");
    }*/
}

function doResetSmartTV()
{
    parent.hiddenPage(1);
    var resetSpans=$("reset").getElementsByTagName("span");
    var resetDivs=$("reset").getElementsByTagName("div");
    resetSpans[0].innerHTML=smartTVSetTitleWords[13];
    setTimeout(function(){
        if(top.isOverflowed(resetSpans[0]))
        {
            resetSpans[0].style.overflowX = "-webkit-marquee";
            resetSpans[0].style.textOverflow = "clip";
            resetSpans[0].style.webkitMarqueeDirection = "backwards";
            resetSpans[0].style.webkitMarqueeStyle = "scroll";
            resetSpans[0].style.webkitMarqueeSpeed = "fast";
            resetSpans[0].style.webkitMarqueeIncrement = "small";
            resetSpans[0].style.webkitMarqueeRepetition = "infinite";
        }
    },1)
    resetSpans[1].innerHTML=resetWords[0];
    resetDivs[0].innerHTML=resetWords[1];
    resetDivs[1].innerHTML=resetWords[2];
    $("listFocus").style.display="none";
    $("reset").style.display="block";
    focusOn="resetSmartTV";
}

function doCarevision()
{
    if(top.preTempPage == "homePage")
    {
        channel.requestMute(0);  //解mute
    }

    //top.openCarevision();
    top.handleBootAction();
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
        if((menuLock) && (hotelEnable) && (lockFlag))
        {
            initPass();
            return;
        }
        executeFunction(positionV);//执行对应的函数
    }
    else if (focusOn == "guideON")
    {
        $("listFocus").src = mainFocus[0];
        $("listForm").style.display = "none";
        guideOnValue = form_position_h;
        setting.guideOnSwitch = guideOnValue;
        setValuesForItems();
        focusOn = "menu";
    }
    /*else if (focusOn == "HbbtvSettings")
    {
        $("listFocus").src = mainFocus[0];
        $("listForm").style.display = "none";
        HbbTVSettingsValue = form_position_h;
		if(HbbTVSettingsValue)
		{
			menuList[3].showFlag = 1;
		}
		else
		{
			menuList[3].showFlag = 0;	
		}
		showItems();
        setting.hbbTVMode = HbbTVSettingsValue;
        setValuesForItems();
        focusOn = "menu";
    }
	else if (focusOn == "cookie")
    {
        $("listFocus").src = mainFocus[0];
        $("listForm").style.display = "none";
        cookievalue = form_position_h;
        setting.hbbtvCookieMode = cookievalue;
        setValuesForItems();
        focusOn = "menu";
    }*/
    else if (focusOn == "DLNASettings")
    {
        $("listFocus").src = mainFocus[0];
        $("listForm").style.display = "none";
        DLNASettingsValue = form_position_h;
        setting.dlnaEnable = DLNASettingsValue;
        setValuesForItems();
        focusOn = "menu";
    }
    else if (focusOn == "WOLEnable")
    {
        $("listFocus").src = mainFocus[0];
        $("listForm").style.display = "none";
        WOLEnableValue = form_position_h;
        setting.netWakeupMode = WOLEnableValue;
        setValuesForItems();
        focusOn = "menu";
    }
    else if(focusOn=="resetSmartTV")
    {
        if(isReset==1)
        {
            isReset=0;
            setting.videoReset();
            setting.hbbTVMode = 0;
            setting.dlnaEnable = 1;
            setting.netWakeupMode = 0;
            setting.hbbtvCookieMode = 1;
            updateUI();
            positionV=findPosition("Reset Smart TV");
            doOffsetMenuList(positionV);
        }
        $("reset").style.display="none";
        $("resetFocus").style.left="420px";
        $("listFocus").style.display="block";
        parent.showPage(1);
        focusOn="menu";
    }
    else if(focusOn=="privacypolicy")//doEnter
    {
        if(isCheckBox == 1)
        {
            /*if (privacy_img_list[checkindex].src.indexOf("check_3.png") != -1)//取消勾选
            {
                initPrivacyTips(checkindex);
            }
            else
            {
                switch (checkindex)
                {
                    case 0://smart tv
                        setting.setProperty("app.ui.quickKey", "1");
                        break;
                    case 1://hbbtv disable
                        setting.setProperty("app.ui.hbbtv", "1");
                        break;
                    case 2://launcher update disable
                        setting.setProperty("app.ui.update", "1");
                        break;
                    case 3://second screen disable
                        setting.dlnaEnable = 1;
                        break;
                    case 4://software update disable
                        setting.setProperty("app.ui.software", "1");
                        break;
                    case 5://freeview play
                        setting.hbbTVMdsState = 1;
                        break;
                }
                privacy_img_list[checkindex].src = checkPicture[1];
            }*/
            if (checkboxList[checkindex].getElementsByTagName("img")[0].src.indexOf("check_3.png") != -1)//取消勾选
            {
                checkboxList[checkindex].getElementsByTagName("img")[0].src = checkPicture[0];
                switch (checkindex)
                {
                    case 0:
                        setting.setProperty("app.ui.smart_tv_service", "0");
                        break;
                    case 1:
                        setting.setProperty("app.ui.software_update", "0");
                        break;
                    case 2:
                        setting.setProperty("app.ui.personal_data", "0");
                        break;
                }
            }
            else //确认勾选
            {
                checkboxList[checkindex].getElementsByTagName("img")[0].src = checkPicture[1];
                switch (checkindex)
                {
                    case 0:
                        setting.setProperty("app.ui.smart_tv_service", "1");
                        break;
                    case 1:
                        setting.setProperty("app.ui.software_update", "1");
                        break;
                    case 2:
                        setting.setProperty("app.ui.personal_data", "1");
                        break;
                }
            }
        }
    }
    else if (focusOn=="privacyTips")
    {
        if(form_position_h == 0)//yes
        {
            privacy_img_list[checkindex].src = checkPicture[0];
            switch (checkindex)
            {
                case 0://smart tv
                    setting.setProperty("app.ui.quickKey", "0");
                    break;
                case 1://hbbtv disable
                    setting.setProperty("app.ui.hbbtv", "0");
                    break;
                case 2://launcher update disable
                    setting.setProperty("app.ui.update", "0");
                    break;
                case 3://second screen disable
                    setting.dlnaEnable = 0;
                    break;
                case 4://software update disable
                    setting.setProperty("app.ui.software", "0");
                    break;
                case 5://freeview play
                    setting.hbbTVMdsState = 0;
                    break;
            }
        }
        $("policyTips").style.display = "none";
        focusOn = "privacypolicy";
    }
    else if (focusOn=="privacyremind")
    {
        if (form_position_h == 1)//确认
        {
            doSmartTVPolicy(2);
            isCheckBox = 1;
            $("policyText").style.overflow = "hidden";
            privacy_li_list[checkindex].style.background = "#A9A9A9";
            $("policyTips").style.display = "none";
            focusOn = "privacypolicy";
        }
        else
        {
            $("policyTips").style.display = "none";
            parent.showPage(1);
            focusOn="menu";
        }
    }
    else if (focusOn == "dataDeletion")
    {
        if (focusCheck == 0)
        {
            if (dataDelcheck1)
            {
                dataDelcheck1 = 0;
                setting.setProperty("app.ui.dataDelcheck1", "0");
                $("dataDelcheck1").src = checkPicture[0];
            }
            else
            {
                dataDelcheck1 = 1;
                setting.setProperty("app.ui.dataDelcheck1", "1");
                $("dataDelcheck1").src = checkPicture[3];
            }
        }
        else
        {
            if (dataDelcheck2)
            {
                dataDelcheck2 = 0;
                setting.setProperty("app.ui.dataDelcheck2", "0");
                $("dataDelcheck2").src = checkPicture[0];
            }
            else
            {
                dataDelcheck2 = 1;
                setting.setProperty("app.ui.dataDelcheck2", "1");
                $("dataDelcheck2").src = checkPicture[3];
            }
        }
    }
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
    else if (focusOn == "guideON" || focusOn == "DLNASettings" || focusOn == "WOLEnable"/*|| focusOn == "HbbtvSettings" || focusOn == "cookie"*/ )
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
    else if(focusOn == "policy")   // Smart TV Policy
    {
        getPolicyScrollTop();
    }
    else if(focusOn == "privacypolicy")   // Privacy Policy up
    {
        if (isCheckBox == 0)
        {
            getPolicyScrollTop();
        }
        else
        {
            /*if (checkindex == 0) return;
            privacy_li_list[checkindex--].style.background = "";
            privacy_li_list[checkindex].style.background = "#A9A9A9";*/
            if (checkindex > 0)
            {
                checkboxList[checkindex].getElementsByTagName("span")[0].style.color = "";
                checkindex--;
                $("policyNoticeTable").scrollTop = $("policyNoticeTable").scrollTop - overHeight/2;
                checkboxList[checkindex].getElementsByTagName("span")[0].style.color = top.uiColourStyle;
            }
        }
    }
    else if (focusOn == "dataDeletion")
    {
        if (focusCheck == 0)
        {
            focusCheck = 1;
            if (dataDelcheck1)
                $("dataDelcheck1").src = checkPicture[1];
            else
                $("dataDelcheck1").src = checkPicture[2];

            if (dataDelcheck2)
                $("dataDelcheck2").src = checkPicture[3];
            else
                $("dataDelcheck2").src = checkPicture[0];
        }
        else
        {
            focusCheck = 0;
            if (dataDelcheck1)
                $("dataDelcheck1").src = checkPicture[3];
            else
                $("dataDelcheck1").src = checkPicture[0];

            if (dataDelcheck2)
                $("dataDelcheck2").src = checkPicture[1];
            else
                $("dataDelcheck2").src = checkPicture[2];
        }
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
    else if (focusOn == "guideON" || focusOn == "DLNASettings" || focusOn == "WOLEnable" /*|| focusOn == "HbbtvSettings" || focusOn == "cookie"*/)
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
    else if(focusOn == "policy")  // Smart TV Policy
    {
        getPolicyScrollTop();
    }
    else if(focusOn == "privacypolicy")  // Privacy Policy down
    {
        if (isCheckBox == 0)
        {
            getPolicyScrollTop();
        }
        else
        {
            /*if (channel.systemCountry != 25 && checkindex == 4) return;
            else if (checkindex == 5) return;
            privacy_li_list[checkindex++].style.background = "";
            privacy_li_list[checkindex].style.background = "#A9A9A9";*/
            if (checkindex < 2)
            {
                checkboxList[checkindex].getElementsByTagName("span")[0].style.color = "";
                checkindex++;
                $("policyNoticeTable").scrollTop = $("policyNoticeTable").scrollTop + overHeight/2;
                checkboxList[checkindex].getElementsByTagName("span")[0].style.color = top.uiColourStyle;
            }
        }
    }
    else if (focusOn == "dataDeletion")
    {
        if (focusCheck == 0)
        {
            focusCheck = 1;
            if (dataDelcheck1)
                $("dataDelcheck1").src = checkPicture[1];
            else
                $("dataDelcheck1").src = checkPicture[2];

            if (dataDelcheck2)
                $("dataDelcheck2").src = checkPicture[3];
            else
                $("dataDelcheck2").src = checkPicture[0];
        }
        else
        {
            focusCheck = 0;
            if (dataDelcheck1)
                $("dataDelcheck1").src = checkPicture[3];
            else
                $("dataDelcheck1").src = checkPicture[0];

            if (dataDelcheck2)
                $("dataDelcheck2").src = checkPicture[1];
            else
                $("dataDelcheck2").src = checkPicture[2];
        }
    }
}

/**
 * 获取Smart TV Policy 滚动条的top
 */
function getPolicyScrollTop()
{
    var vDiv =  $("policyText");
    $("ScrollBar").style.top =  Math.round(vDiv.clientHeight * vDiv.scrollTop / vDiv.scrollHeight + 150) + "px";
}

/**
 * 获取Policy text
 * 主要是格式化文本
 * @returns {格式化之后的文本}
 */
function getSmartTvText(text)
{
    var tempText = new Array();
    var policyText = "";

    if(text.length > 1)
    {
        tempText  =  text[1].split("\n");
    }
    else
    {
        tempText  =  text[0].split("\n");
    }

    if (text.length > 1) {
        policyText = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+text[0]+tempText[0]
            +"<br>&nbsp;&nbsp;&nbsp;"+tempText[1]
            +"<br>&nbsp;&nbsp;&nbsp;"+tempText[2]
            +"<br>&nbsp;&nbsp;&nbsp;"+tempText[3];
    }
    else
    {
        policyText = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+tempText[0];
        for (var i = 1; i < tempText.length; i++) {
            if(i==1 || i==4 || i==8 || i==12 || i==14 || i==16)
            {
                policyText = policyText+"<br><br>&nbsp;&nbsp;&nbsp;"+tempText[i];
            }
            else
            {
                policyText = policyText+"<br>&nbsp;&nbsp;&nbsp;"+tempText[i];
            }

        }
    }

    return policyText;

}
function keyDownProcess(evt)
{
    var ret = true;
    var keycode = evt.which;
    switch (keycode)
    {
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
        focusOn = "menu";
    }
    else if(focusOn=="resetSmartTV")
    {
        isReset=0;
        $("reset").style.display="none";
        $("resetFocus").style.left="420px";
        $("listFocus").style.display="block";
        parent.showPage(1);
        top.restartTimeout();
        focusOn="menu";
    }
    else if(focusOn=="password")
    {
        $("passForm").style.display = "none";
        parent.showPage(1);
        focusOn = "menu";
    }
    else if(focusOn == "policy")
    {
        $("smartTvPolicyDiv").style.display="none";
        parent.showPage(1);
        focusOn = "menu";
    }
    else if(focusOn == "privacypolicy")
    {
        $("smartTvPolicyDiv").style.display="none";
        $("policyTextContainer").style.display="none";
        $("ScrollBar").style.left = 1010 + "px";
        $("policyText").style.width = 900 + "px";
        if (isCheckBox == 1)
        {
            isCheckBox = 0;
            //privacy_li_list[checkindex].style.background = "";
            checkboxList[checkindex].getElementsByTagName("span")[0].style.color = "";
            $("policyText").style.overflow = "scroll";
        }
        checkindex = 0;
        parent.showPage(1);
        focusOn = "menu";
    }
    else if (focusOn == "privacyTips")
    {
        $("policyTips").style.display = "none";
        focusOn = "privacypolicy";
    }
    else if (focusOn == "privacyremind")
    {
        $("policyTips").style.display = "none";
        parent.showPage(1);
        focusOn="menu";
    }
    else if (focusOn == "dataDeletion")
    {
        $("dataDeletionDiv").style.display = "none";
        parent.showPage(1);
        focusOn="menu";
    }
    else
    {
        $("listFocus").src = mainFocus[0];
        $("listForm").style.display = "none";
        focusOn = "menu";
    }
}
function toLeft()
{
    if (focusOn == "progressBar")
    {

    }
    else if(focusOn=="resetSmartTV")
    {
        isReset++;
        if(isReset>1)
        {
            isReset=0;
            $("resetFocus").style.left="420px";
        }
        else
        {
            $("resetFocus").style.left="190px";
        }
    }
    else if(focusOn=="privacypolicy")
    {
        isCheckBox = 0;
        $("policyText").style.overflow = "scroll";//打开文本滚动
        //privacy_li_list[checkindex].style.background = "";
        checkboxList[checkindex].getElementsByTagName("span")[0].style.color = "";//top.uiColourStyle;
    }
    else if (focusOn=="privacyTips" || focusOn=="privacyremind")
    {
        if(form_position_h == 0)
        {
            form_position_h = 1;
            $("tipsButtonFocus").style.left = "476px";
        }
        else
        {
            form_position_h = 0;
            $("tipsButtonFocus").style.left = "150px";
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

    }
    else if(focusOn=="resetSmartTV")
    {
        isReset++;
        if(isReset>1)
        {
            isReset=0;
            $("resetFocus").style.left="420px";
        }
        else
        {
            $("resetFocus").style.left="190px";
        }
    }
    else if (focusOn=="privacypolicy")
    {
        isCheckBox = 1;
        $("policyText").style.overflow = "hidden";//关闭文本滚动，防止操作右边文本时。左边的免责声明文本也跟着滚动
        //privacy_li_list[checkindex].style.background = "#A9A9A9";
        checkboxList[checkindex].getElementsByTagName("span")[0].style.color = top.uiColourStyle;
    }
    else if (focusOn=="privacyTips" || focusOn=="privacyremind")
    {
        if(form_position_h == 0)
        {
            form_position_h = 1;
            $("tipsButtonFocus").style.left = "476px";
        }
        else
        {
            form_position_h = 0;
            $("tipsButtonFocus").style.left = "150px";
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

    $("adjustProgressBox").style.display = "block";
    focusOn = "progressBar";
}

/*
 描述：刷新menu菜单中的进度条
 */
function refreshMenuProgress(name)
{

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

function showPromptImg()
{
    $("promptWin").style.display = "block";
    var height = $("promptContent").offsetHeight;
    var img = $("promptWin").getElementsByTagName("img");
    var div = $("promptWin").getElementsByTagName("div");
    if (height == 40)
    {
        img[0].src = smartTVPromptImg[0];
        $("promptContent").style.top = ONE_LINE_TOP + "px";
        img[0].style.height = "110px";
        div[0].style.height = "102px";
        $("promptWin").style.top = 80 + positionV * 70 + "px";
    }
    else if (height == 80)
    {
        img[0].src = smartTVPromptImg[0];
        $("promptContent").style.top = TWO_LINE_TOP + "px";
        img[0].style.height = "110px";
        div[0].style.height = "102px";
        $("promptWin").style.top = 80 + positionV * 70 + "px";
    }
    else if (height == 120)
    {
        img[0].src = smartTVPromptImg[1];
        $("promptContent").style.top = THREE_LINE_TOP + "px";
        img[0].style.height = "160px";
        div[0].style.height = "152px";
        $("promptWin").style.top = 50 + positionV * 70 + "px";
    }
    else if (height == 160)
    {
        img[0].src = smartTVPromptImg[2];
        $("promptContent").style.top = FOUR_LINE_TOP + "px";
        img[0].style.height = "220px";
        div[0].style.height = "212px";
        $("promptWin").style.top = 20 + positionV * 70 + "px";
    }
    else if (height == 200)
    {
        img[0].src = smartTVPromptImg[3];
        $("promptContent").style.top = FIVE_LINE_TOP + "px";
        img[0].style.height = "280px";
        div[0].style.height = "272px";
        $("promptWin").style.top = -10 + positionV * 70 + "px";
    }
    else if (height == 240)
    {
        img[0].src = smartTVPromptImg[4];
        $("promptContent").style.top = SIX_LINE_TOP + "px";
        img[0].style.height = "340px";
        div[0].style.height = "332px";
        $("promptWin").style.top = -30 + positionV * 70 + "px";
    }
    else if (height == 0)
    {
        img[0].src = smartTVPromptImg[0];
        $("promptContent").style.top = TWO_LINE_TOP + "px";
        img[0].style.height = "110px";
        div[0].style.height = "102px";
        $("promptWin").style.top = 80 + positionV * 70 + "px";
    }
}

function showPromptCont()//显示提示语内容函数
{
  //  return ; // 暂时屏蔽提示语
    if (focusOn == "menu" && parent.currentShowMenu == 1)
    {
        clearTimeout(showPromptContTimer);
        showPromptContTimer = setTimeout(function ()
        {
            $("promptWin").style.display = "none"
        }, 5000);
        $("promptWin").style.top = 80 + positionV * 70 + "px";


        var currentItemName = findName(positionV);

        if("Wifi display" == currentItemName)   //wifi display
        {
            $("promptContent").innerHTML = smartTVPromptCon[1];   //22
            showPromptImg();
        }
        else if("TV remote" == currentItemName)   //TV remote
        {
            $("promptContent").innerHTML = smartTVPromptCon[0];   //23
            showPromptImg();
        }
        else
        {
            $("promptWin").style.display = "none";
        }


      /*  switch (positionV)   //positionV是item在menuList里的索引
        {
            case 0:
                $("promptWin").style.display = "none";
                break;
            case 1:
                $("promptWin").style.display = "none";
                break;
			case 2:
                $("promptContent").innerHTML = smartTVPromptCon[1];   //23
                showPromptImg();
                break;
            case 3:
                $("promptContent").innerHTML = smartTVPromptCon[0];   //22
                showPromptImg();
                break;
            case 4:
                $("promptWin").style.display = "none";
                break;
            case 5:
                $("promptWin").style.display = "none";
                break;
            case 6:
                $("promptWin").style.display = "none";
                break;
            case 7:
                $("promptWin").style.display = "none";
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
        var pword = "";
        var superPword = top.g_superPassword;
        if (menuLock && hotelEnable && lockFlag)
        {
            superPword = "2013";
            pword = factory.hotelPassword;//"1968";
            console.log("--hzm get hotel password = " + pword);
            if (pword == undefined || pword == "")
                pword = "1968";
        }
        else
        {
            superPword = "0423";
            pword = setting.password;
        }
        if (password != pword && password != superPword)
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
            menuLock = 0;
            hotelEnable = 0;
            lockFlag = 0;
            init();
            parent.showPage(1);
        }
    }
}

function initPrivacyTips(checkindex)
{
    form_position_h = 0;
    $("tipsTitle").innerHTML = smartTVSetTitleWords[16];
    var buttons = $("policyTips").getElementsByTagName("div");
    focusOn = "privacyTips";
    switch (checkindex)
    {
        case 0:
            $("tipsContent").innerHTML = top.privacyPolicyTips[0];
            break;
        case 1:
            $("tipsContent").innerHTML = top.privacyPolicyTips[1];
            break;
        case 2:
            $("tipsContent").innerHTML = top.privacyPolicyTips[2];
            break;
        case 3:
            $("tipsContent").innerHTML = top.privacyPolicyTips[3];
            break;
        case 4:
            $("tipsContent").innerHTML = top.privacyPolicyTips[4];
            break;
        case 5:
            $("tipsContent").innerHTML = top.privacyPolicyTips[5];
            break;
    }
    buttons[0].innerHTML = top.yesNo[0];
    buttons[1].innerHTML = top.yesNo[1];
    $("tipsButtonFocus").style.left = "150px";
    $("policyTips").style.display = "block";
}

function initPrivacyremind()
{
    form_position_h = 0;
    $("tipsTitle").innerHTML = smartTVSetTitleWords[16];
    var buttons = $("policyTips").getElementsByTagName("div");
    focusOn = "privacyremind";
    $("tipsContent").innerHTML = top.privacyPolicyRemind;
    buttons[0].innerHTML = top.okCancel[1];
    buttons[1].innerHTML = top.set;
    $("tipsButtonFocus").style.left = "150px";
    $("policyTips").style.display = "block";
}

function $(id)
{
    return document.getElementById(id);
}

function uninit()
{
    top.timeoutFuc.timeoutTimes = 30;
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

    for (var i = 0; i <= sndMenuRightLiList.length - 1; i++)
    {
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
					//console.log("smarttvset-positionV = "+positionV);
					var hiddenCount = 0;
					//Dynamic hidden list for current
					for(var i = 0; i <= positionV; i++)
					{
						if(menuList[i].showFlag == 0)
							hiddenCount++;
					}
					positionV = positionV - hiddenCount;
					//console.log("smarttvset-last positionV = "+positionV);
                    $("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP * positionV + "px";
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


    for (var i = 0; i < 3; i++)
    {
        listFormLiList[i].setAttribute("newAttr", i);
        listFormLiList[i].onmousedown = function (evt)
        {
            top.timeoutFuc.osdTimeoutEndFuc();
            if (evt.button == 0)//left key
            {
                if (focusOn == "autoVolumeCtrl" || focusOn == "audioScene" || focusOn == "sPDIFType")
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

    $("adjustProgMain").onmousedown = function (evt)
    {
        top.timeoutFuc.osdTimeoutEndFuc();
        if (evt.button == 0)//left key
        {
            if (focusOn == "progressBar")
            {
                var currentProgressName = $("adjustProgMain").getElementsByTagName("span")[0].innerHTML;
                if (currentProgressName == smartTVSetTitleWords[4])
                {
                    sPDIFDelay = parseInt((evt.clientX - PROGRESS_START_LEFT_OFFSET) * PROGRESS_SPDIF_MAX_VALUE / EXTRA_PROGRESS_WIDTH, 10);
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
                else if (currentProgressName == smartTVSetTitleWords[5])
                {
                    audioDelay = parseInt((evt.clientX - PROGRESS_START_LEFT_OFFSET) * PROGRESS_AUDIO_MAX_VALUE / EXTRA_PROGRESS_WIDTH, 10);
                    if (audioDelay < 0)
                    {
                        audioDelay = 0;
                    }
                    else if (audioDelay > PROGRESS_AUDIO_MAX_VALUE)
                    {
                        audioDelay = PROGRESS_AUDIO_MAX_VALUE;
                    }
                    progressDivList[0].style.width = parseInt(audioDelay * EXTRA_PROGRESS_WIDTH / PROGRESS_AUDIO_MAX_VALUE, 10) + "px";
                    progressDivList[2].style.width = parseInt((PROGRESS_AUDIO_MAX_VALUE - sPDIFDelay) * EXTRA_PROGRESS_WIDTH / PROGRESS_AUDIO_MAX_VALUE, 10) + "px";

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
            case "Smart TV portal":
                ttsName = smartTVSetTitleWords[0];
                currentStatus = "";
                break;
            case "GuideON":
                ttsName = smartTVSetTitleWords[1] + ",";
                currentStatus = offOnWords[guideOnValue];
                break;
            case "HbbTV settings":
                ttsName = smartTVSetTitleWords[2] + ",";
                currentStatus = offOnWords[HbbTVSettingsValue];
                break;
            case "Cookies":
                ttsName = smartTVSetTitleWords[3] + ",";
                currentStatus = offOnWords[cookievalue];
                break;
            case "DLNA settings":
                ttsName = smartTVSetTitleWords[4] + ",";
                currentStatus = offOnWords[DLNASettingsValue];
                break;
            case "TV remote":
                ttsName = smartTVSetTitleWords[5];
                currentStatus = "";
                break;
            case "T-cast":
                ttsName = smartTVSetTitleWords[6];
                currentStatus = "";
                break;
            case "Wifi display":
                ttsName = smartTVSetTitleWords[7];
                currentStatus = "";
                break;
            case "Smart TV policy":
                ttsName = smartTVSetTitleWords[8];
                currentStatus = "";
                break;
            case "Bluetooth":
                ttsName = smartTVSetTitleWords[9];
                currentStatus = "";
                break;
            case "WOL enable":
                ttsName = smartTVSetTitleWords[10] + ",";
                currentStatus = offOnWords[WOLEnableValue];
                break;
            case "Netflix settings":
                ttsName = smartTVSetTitleWords[11];
                currentStatus = "";
                break;
            case "HbbTV settings":
                ttsName = smartTVSetTitleWords[12];
                currentStatus = "";
                break;
            case "Reset Smart TV":
                ttsName = smartTVSetTitleWords[13];
                currentStatus = "";
                break;
            case "Carevision":
                ttsName = smartTVSetTitleWords[14];
                currentStatus = "";
                break;
            default:
                ttsName = "";
                currentStatus = "";
                break;
        }
    }
    else if("guideON" == focusOn)  //soundPreset选项菜单
    {
        ttsName = "";
        currentStatus = offOnWords[form_position_h];
        isSelected(soundPresetModeWords[guideOnValue] == currentStatus);
    }
    else if("HbbtvSettings" == focusOn)
    {
        ttsName = "";
        currentStatus = offOnWords[form_position_h];
        isSelected(offOnWords[HbbTVSettingsValue] == currentStatus);
    }
    else if("cookie" == focusOn)
    {
        ttsName = "";
        currentStatus = offOnWords[form_position_h];
        isSelected(offOnWords[cookievalue] == currentStatus);
    }
    else if("DLNASettings" == focusOn)
    {
        ttsName = "";
        currentStatus = offOnWords[form_position_h];
        isSelected(offOnWords[DLNASettingsValue] == currentStatus);
    }
    else if("WOLEnable" == focusOn)
    {
        ttsName = "";
        currentStatus = offOnWords[form_position_h];
        isSelected(offOnWords[WOLEnableValue] == currentStatus);
    }
    else if("policy" == focusOn)
    {
        currentStatus = "";  //smartTV policy
        if(lastFocusType == focusOn)
        {
            ttsName = "";
        }
        else
        {
            ttsName = getSmartTvTtsText();
        }
    }
    else if("resetSmartTV" == focusOn)
    {
        if(lastFocusType == focusOn)
        {
            ttsName = "";
        }
        else
        {
            ttsName = resetWords[0] + ",";
        }
        currentStatus = (0 == isReset)?resetWords[2]:resetWords[1];
    }
    lastFocusType = focusOn;
    ttsStr = ttsName + currentStatus;
    if("" != ttsStr)
    {
        top.ttsLog("ttsStr=" + ttsStr);
        // top.ttsLog("focusOn="+focusOn+"   currentName="+findName(positionV));
        // top.ttsLog("form_position_h="+form_position_h);
        top.setTTSSay(top.SPEECH_TYPE_FLUSH, ttsStr);
    }
}

function getSmartTvTtsText()
{
    var tempText = new Array();
    var policyText = "";

    if(top.termsConditions.length > 1)
    {
        tempText = top.termsConditions[1].split("\n");
    }
    else
    {
        tempText = top.termsConditions[0].split("\n");
    }

    if(top.termsConditions.length > 1)
    {
        policyText = top.termsConditions[0] + tempText[0] + tempText[1] + tempText[2] + tempText[3];
    }
    else
    {
        policyText = tempText[0];
        for(var i = 1; i < tempText.length; i++)
        {
            policyText = policyText + tempText[i];
        }
    }
    return policyText;
}