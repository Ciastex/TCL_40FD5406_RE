/******************** created by chenhua ***********************/
var supportSetTitleWords = [top.homePageBackUp[0],top.sysOptions[5],top.supportOptions[0],top.supportOptions[1]];
var resetWords                = [top.picResetDes,top.okCancel[0],top.okCancel[1]];
var offOnWords = top.offOn;
var smartTVPromptCon = ["", "", "", "", "", ""];
var smartTVPromptImg = ["images/info-1_2.png", "images/info-1_3.png", "images/info-1_4.png", "images/info-1_5.png", "images/info-1_6.png"]
var mainFocus = ["images/Focus_Frame/Focus-1.png", "images/Focus_Frame/Focus-2.png"];

var multimedia 	= top.g_media;
var setting = top.g_setting;
var channel = top.g_channel;
var factory = top.g_factory;
var positionV = 0;					//主界面坐标
var form_position_h = 0;					//弹出框焦点位置

var guideOnValue = 0;
var HbbTVSettingsValue = 0;
var DLNASettingsValue = 0;
var WOLEnableValue = 0;

var focusOn = "menu";				//menu,autoVolumeCtrl;sPDIFType ;audioMode;soundType;progressBar,contactus

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


var webfromserver = "";
var callfromserver = "";

document.onsystemevent = notifyProcess;

/** parameters of Contact us*/
var contactUs = top.contactUsOption;
var isTCL = setting.manufacturer == "TCL";
var timer, contactUsLiList,contactUsSpanList,isShould;
var mode,swVersion,uId,pId,cType,wMac,wLessMac,netflix,callCenter,webSite;
var currentCoutry = channel.systemCountry;   //country code

var menuList =
[
	{name:"E-manual"			     ,  param:function(){doEManual();            },		showFlag:1},
    {name:"Software update"          ,  param:function(){doSoftwareUpdate();			        }, 		showFlag:1},
    {name:"Remote diagnosis"         ,  param:function(){doRemoteDiagnosis();			}, 		showFlag:1},
    {name:"Contact us"               ,  param:function(){doContactUs();			    }, 		showFlag:1}
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
    if ((menuLock) && (hotelEnable) && (lockFlag))
    {
        sndMenuRightSpanList[0].innerHTML = titleWords;
        sndMenuRightLiList[0].getElementsByTagName("img")[0].style.display = "block";
    }
    else
    {
        sndMenuRightSpanList[0].innerHTML = supportSetTitleWords[0];
        sndMenuRightSpanList[1].innerHTML = supportSetTitleWords[1];
        sndMenuRightSpanList[2].innerHTML = supportSetTitleWords[2];
        sndMenuRightSpanList[3].innerHTML = supportSetTitleWords[3];

        sndMenuRightLiList[0].getElementsByTagName("img")[0].style.display = "none";

        positionV = 0;
        $("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP * positionV + "px";
    }
    updateUI();
    addMouseListener();

    //top.doEleScrForNoOption(listFirstSpans, positionV, 0);
}

function updateUI()//初始化、更新界面
{
//    //1、重新得到数据
//    updateItemValues();
//
//    //2、根据数据设置showflag
//    checkShowMenu();
//
//    //3、为每个item重新赋值
//    setValuesForItems();
//
//    //4、显示每一个item
//    showItems();

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

        if(!top.supportEManual)
        {
            menuList[0].showFlag = 0;
        }
        if(!top.supportRemoteDiagnosis)
        {
            menuList[2].showFlag = 0;
        }
        if(!top.supportContactUs)
        {
            menuList[3].showFlag = 0;
        }
        if(top.preTempPage == "media")
            menuList[0].showFlag = 0;
    }
}


//-----------3、给每个item赋值------------------------------
function setValuesForItems()
{

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

function doEManual()
{
    //console.log("[zhaokun test] -------- doEManual-top.preTempPage:"+top.preTempPage);
    if(top.preTempPage=="media")
    {
        top.preTempPage="";
        multimedia.mediaStop(0);
        multimedia.deviceExitUninit();
        multimedia.toRestoreSource(0,0);
    }

    var eManualSrc = "eManual/";
    var EManualBranch = "NULL";
    if((menuLock) && (hotelEnable) && (lockFlag))
    {
        initPassForm();
        focusOn="password";
    }
    else
    {
        EManualBranch = setting.getProperty("ro.sita.model.Apps.EManual_branch", "NULL");
        if ("NULL" == EManualBranch)
        {
            eManualSrc = eManualSrc + "TCL_EU";
        }
        else
        {
            eManualSrc = eManualSrc + EManualBranch;
        }

        eManualSrc = eManualSrc + "/eManualFirst.html?0";
        parent.popWindow(2,eManualSrc);
    }
}

function doSoftwareUpdate()
{
    parent.jumpPage(2,"systemSetting/softwareUpdate.html");
}

function doRemoteDiagnosis()
{
    //top.jumpToOperatePage("tvExceptionDoctor.html");
    parent.popWindow(2,"tvExceptionDoctor.html");	
}

function doContactUs()
{
    $("contactDiv").style.display = "block";
    parent.hiddenPage(1);

    initCallCenter(currentCoutry);
    console.log("--hzm init top.netCheckStatus = " +top.netCheckStatus);
    if (top.netCheckStatus == 1)
    {
        getWebandPhoneformServer();
    }
    if(top.isEUFlag)
    {
        $("Model").style.display = "block";
    }
    else
    {
        $("Model").style.display = "none";
    }

    contactUsLiList =  $("contactDiv").getElementsByTagName("li");
    contactUsSpanList = $("contactDiv").getElementsByTagName("span");

    contactUsSpanList[0].innerHTML = contactUs[0];    //Contact us
    contactUsSpanList[1].innerHTML = contactUs[1];    //Please contact TCL if you are having problems operating this device.
    contactUsSpanList[3].innerHTML = contactUs[2];    //Contact TCL
    if ("IFFALCON" == top.g_setting.getProperty("ro.sita.model.MODEL_MANUFACTURER_NAME_CFG.MANUFACTURER_NAME", "TCL"))
    {
        if (top.isAPFlag == 1)
        {
			if (82 == channel.systemCountry)//India
			{
				contactUsSpanList[4].innerHTML = top.emailWord;        //Web site
				contactUsSpanList[5].innerHTML = " indiasupport@ffalcon.cn";        //Web site
				contactUsSpanList[6].innerHTML = "";        //Web site
			}
			else if (58 == channel.systemCountry)//Vietnam
            {
				contactUsSpanList[4].innerHTML = contactUs[3] ;        //Web site
				contactUsSpanList[5].innerHTML = " www.ffalcon.con.vn";        //Web site
				contactUsSpanList[6].innerHTML = contactUs[16] ;        //Web site
			}
			else
			{
				contactUsSpanList[4].innerHTML = contactUs[3] ;        //Web site
				contactUsSpanList[5].innerHTML = "";        //Web site
				contactUsSpanList[6].innerHTML = contactUs[16] ;        //Web site
			}
        }
        else if (top.isAUFlag == 1)
        {
            contactUsSpanList[4].innerHTML = contactUs[3] ;        //Web site
            contactUsSpanList[5].innerHTML = "";        //Web site
            contactUsSpanList[6].innerHTML = contactUs[16] ;        //Web site
        }
    }
    else
    {
        contactUsSpanList[4].innerHTML = contactUs[3] ;        //Web site
        contactUsSpanList[5].innerHTML = webSite ;        //Web site
        contactUsSpanList[6].innerHTML = contactUs[16] ;        //Web site
    }
    contactUsSpanList[7].innerHTML = callCenter;      //Call center number
    contactUsSpanList[8].innerHTML =  contactUs[5];  //product information
    contactUsSpanList[9].innerHTML = mode;        //Model name
    contactUsSpanList[10].innerHTML =swVersion;    //Software versio
    contactUsSpanList[11].innerHTML = uId;         //User ID
    contactUsSpanList[12].innerHTML = pId;        //Project ID
    if ("IFFALCON" == top.g_setting.getProperty("ro.sita.model.MODEL_MANUFACTURER_NAME_CFG.MANUFACTURER_NAME", "TCL"))
        contactUsSpanList[13].style.display = "none";      //Client type
    else
        contactUsSpanList[13].innerHTML = cType;      //Client type

    contactUsSpanList[14].innerHTML = wLessMac;    //wireless mac address

   // contactUsSpanList[15].innerHTML = wMac;        //Wire MAC address
    contactUsSpanList[15].innerHTML = netflix;     //Netflix ESN
    doElementScroll();
    focusOn="contactus";
}

/**
 * 获取每个span的具体内容
 * @param language code
 */
function initCallCenter(callKey)
{

    mode = contactUs[6] + " " + factory.getProductInfo().projectName;   //Model name(projectName)  **
    if(top.configPackVersion == "")
    {

        swVersion = contactUs[7] + " " + factory.getProductInfo().swName;
    }
    else
    {
        swVersion = contactUs[7] + " " + factory.getProductInfo().swName+"."+top.configPackVersion;
    }

    if(channel.systemCountry == 134){//马来西亚认证要求固定版本号
        swVersion = contactUs[7] + " " + "V8-N563T01-LF1V095";
    }

    uId = contactUs[9] +  " " + setting.getUserId;   //User ID
    pId= contactUs[10] + " " + factory.projectId;  //Project ID
    cType = contactUs[11] + " " + factory.getClientTypeKey(); //Client type


    wLessMac = "MAC:" + " " + setting.networkMAC;  //Wireless MAC address  getMacAddr()  **
    wMac= contactUs[13] + " " + setting.networkMAC;  //Wire MAC address
    netflix= contactUs[14] + " " +  factory.getEsnKey(0,200);   //Netflix ESN


    var call = "";



    if(isTCL)     //TCL
    {
        switch(callKey + "")
        {
            case    "22" : call = "911 237 785";break;  //Spanish
            case    "8" : call = "01 8488 3000";break;  //French
            case    "12" : call = "06 94 80 30 70";break;  //Italian
            case    "16" :call = "22 116 8687";break;     //Poland
            case    "9":call = "0211 54 69 222 42";break;  //German
            case    "17": call = "225 490 261";break; //Portugal
            case    "18": call = "0216550742";break; //Romania
            case    "10": call = "211-1809486";break; //Greece
            case    "54": call = "01800-112-46-56";break; //Mexico
            default :   call =""; break;
        }

    }else        //THOMSON
    {
        switch(callKey + "")
        {
            case    "22" : call = "911 237 270";break;  //Spanish
            case    "8" : call = "01 8488 0888";break;     //French
            case    "12" : call = "06 94 80 30 71";break;  //Italian
            case    "16" :call = "22 116 8687";break;    //Poland
            case    "9":call = "0211 54 69 222 42";break;   //German
            case    "17": call = "225 490 261";break;   //Portugal
            case    "18": call = "0216550742";break;    //Romania
            case    "10": call = "211-1809486";break;    //Greece
            default :    call ="";  break;
        }
    }
    if (callfromserver != "")
    {
        call = callfromserver;
    }
    if(call == "")
    {
        $("callCenter").style.display = "none";

    }
    else
    {
        $("callCenter").style.display = "block";
    }
    callCenter = contactUs[4] + " "+ call;

    //AU webSite
    if(top.isAUFlag)//澳洲平台 重新初始化变量
    {
        if(26 == channel.systemCountry)            //新西兰Freeview认证要求
        {
            webSite = " www.tclelectronics.com.nz";
        }
        else
        {
            webSite = " www.tclelectronics.com.au";
        }
    }
    //setting中contact us里面的网址，需要根据国家对应网址，按如下国家和网址对应关系写入，其他国家则不显示网址      tangshuang request
    //越南 ： tclvn.com.vn
    //菲律宾 ：www.tclphilippines.com
    //巴基斯坦：www.tclpakistan.com
    //印度尼西亚：www.facebook.com/TCLindonesia
    //澳大利亚：www.tclelectronics.com.au
    //墨西哥：www.tclmexico.mx
    //console.log("[zhaokun test] ------ sysCountry="+channel.systemCountry);
    switch(channel.systemCountry)
    {
        case 58: webSite = " tclvn.com.vn";break;//E_VIETNAM
        case 35: webSite = " www.tclphilippines.com";break;//E_PHILIPPINES
        case 72: webSite = " www.tclpakistan.com";break;//E_PAKISTAN
        case 73: webSite = " www.facebook.com/TCLindonesia";break;//E_INDONESIA
        case 0: webSite = " www.tclelectronics.com.au";break;//E_AUSTRALIA
        case 54: webSite = " www.tclmexico.mx";break;//E_MEXICO
        default:
            webSite = " ";break;
    }

    var manufacturer = top.g_setting.getProperty("ro.sita.model.MODEL_MANUFACTURER_NAME_CFG.MANUFACTURER_NAME", "THOMSON");//THOMSON add webSite
    if(manufacturer == "THOMSON")
    {
        webSite  = " www.thomsontv.eu";
    }
    else if(isTCL && top.isEUFlag)
    {
        webSite = " www.tcl.eu";
    }

    if (webfromserver != "")
    {
        webSite = " "+webfromserver;
    }
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
    else if (focusOn == "HbbtvSettings")
    {
        $("listFocus").src = mainFocus[0];
        $("listForm").style.display = "none";
        HbbTVSettingsValue = form_position_h;
        //setting.autoVolumeCtrl = autoVolumeCtrl;
        setValuesForItems();
        focusOn = "menu";
    }
    else if (focusOn == "DLNASettings")
    {
        $("listFocus").src = mainFocus[0];
        $("listForm").style.display = "none";
        DLNASettingsValue = form_position_h;
        //setting.setSoundEffectsMode(1,bassBoostMode);
        setValuesForItems();
        focusOn = "menu";
    }
    else if (focusOn == "WOLEnable")
    {
        $("listFocus").src = mainFocus[0];
        $("listForm").style.display = "none";
        WOLEnableValue = form_position_h;
        //setting.sPDIFType = sPDIFType;
        setValuesForItems();
        focusOn = "menu";
    }
    else if(focusOn=="resetSmartTV")
    {
        if(isReset==1)
        {
            isReset=0;
            //setting.videoReset();
            //updatePicture("pictureReset");
        }
        $("reset").style.display="none";
        $("resetFocus").style.left="420px";
        $("listFocus").style.display="block";
        parent.showPage(1);
        focusOn="menu";
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
    else if (focusOn == "guideON" || focusOn == "DLNASettings" || focusOn == "WOLEnable"|| focusOn == "HbbtvSettings" )
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
    else if (focusOn == "guideON" || focusOn == "DLNASettings" || focusOn == "WOLEnable" || focusOn == "HbbtvSettings")
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
       // showPromptCont();   //暂时屏蔽提示
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
    }else if("contactus" == focusOn){
        $("contactDiv").style.display = "none";
        parent.showPage(1);
        focusOn = "menu";
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
    return ; // 暂时屏蔽提示语
    if (focusOn == "menu" && parent.currentShowMenu == 1)
    {
        clearTimeout(showPromptContTimer);
        showPromptContTimer = setTimeout(function ()
        {
            $("promptWin").style.display = "none"
        }, 5000);
        $("promptWin").style.top = 80 + positionV * 70 + "px";

        var currentItemName = findName(positionV);
        if("E-manual" == currentItemName)
        {
            $("promptContent").innerHTML = smartTVPromptCon[0];
            showPromptImg();
        }
        else if("Remote diagnosis" == currentItemName)
        {
            $("promptContent").innerHTML = smartTVPromptCon[3];
            showPromptImg();
        }
        else{
            $("promptWin").style.display = "none";
        }




        /*switch (positionV)
        {
            case 0:
                $("promptContent").innerHTML = smartTVPromptCon[0];
                showPromptImg();
                break;
            case 1:
                $("promptWin").style.display = "none";
                break;
            case 2:
                $("promptContent").innerHTML = smartTVPromptCon[3];
                showPromptImg();
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
                $("promptWin").style.display = "none";
                break;
            default:
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

function $(id)
{
    return document.getElementById(id);
}

function uninit()
{
    top.timeoutFuc.timeoutTimes = 30;
    if(isShould == 1)
    {
        clearInterval(timer);
    }
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

/**
 * 从服务器获取联系网址和售后服务热线
 */
function getWebandPhoneformServer()
{
    var xmlHttpReq=new XMLHttpRequest();
    var tarGeturl = "http://browsernav.api.my7v.com/tvbase/pageSearchApi/findPageConfig?clientType="+factory.getClientTypeKey()+"&country="+setting.zoneCode+"&customerCode="+setting.manufacturer+"&language="+setting.menuLanguageCode;//请求tab的url
    xmlHttpReq.open("GET",tarGeturl,true);
    xmlHttpReq.send();
    xmlHttpReq.onreadystatechange=function()
    {
        if (xmlHttpReq.readyState==4)
        {
            if(xmlHttpReq.status==200)
            {
                var responseText = xmlHttpReq.responseText;
                try
                {
                    var jsonobj=JSON.parse(responseText);//需要增加异常处理
                    var statusCode = jsonobj.errcode;
                    console.log("--hzm getWebandPhoneformServer statusCode:"+statusCode + "  homePage:"+ jsonobj.result.homePage + "  phone:"+ jsonobj.result.phone);
                    if (jsonobj.result.homePage != undefined && jsonobj.result.homePage != "")
                    {
                        webfromserver = jsonobj.result.homePage;
                    }
                    else
                    {
                        console.log("--hzm getWebandPhoneformServer resource download success, but webfromserver is empty or undefined !!");
                    }
                    if (jsonobj.result.phone != undefined && jsonobj.result.phone != "")
                    {
                        callfromserver = jsonobj.result.phone;
                    }
                    else
                    {
                        console.log("--hzm getWebandPhoneformServer resource download success, but callfromserver is empty or undefined !!");
                    }
                    console.log("--hzm getWebandPhoneformServer, "+"  webfromserver:" + webfromserver+"  callfromserver:" + callfromserver);
                }
                catch (e)
                {
                    console.log("--hzm getWebandPhoneformServer resource download success, "+"  error:" + e);
                }
            }
        }
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
                    $("listFocus").style.top = SUB_MENU_START + SUB_MENU_STEP * positionV + "px";
                    doEnter();
                    if ((menuLock) && (hotelEnable) && (lockFlag))
                    {
                    }
                    else
                    {
                       // showPromptCont();   //暂时屏蔽提示
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
                        //showPromptCont(); //暂时屏蔽提示
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
                if (currentProgressName == supportSetTitleWords[3])
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
                else if (currentProgressName == supportSetTitleWords[4])
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

function doElementScroll()
{
    setScrollAttribute(contactUsLiList);
    resetScrollHtmlInner(contactUsLiList);
}


function isOverflowed(element)
{
    return element.scrollWidth > element.clientWidth;
}

/*
 把整个列表属性更改，如果当前焦点选项真实句子长度长于预留的长度则需要做滚动显示
 htmlTagList:内容标签列表；ListLength：当前有内容的列表标签的个数；focusPosition：当前焦点选项在内容标签上的位置
 */
function setScrollAttribute(htmlTagList)
{
    for(var i = 0; i < htmlTagList.length; i++)
    {
        htmlTagList[i].setAttribute("contentText",htmlTagList[i].innerHTML);
        if(isOverflowed(htmlTagList[i]))
        {
            htmlTagList[i].style.overflowX = "-webkit-marquee";
            htmlTagList[i].style.textOverflow = "clip";
            htmlTagList[i].style.webkitMarqueeDirection = "backwards";
            htmlTagList[i].style.webkitMarqueeStyle = "scroll";
            htmlTagList[i].style.webkitMarqueeSpeed = "fast";
            htmlTagList[i].style.webkitMarqueeIncrement = "fast";
            htmlTagList[i].style.webkitMarqueeRepetition = "infinite";
        }
        else
        {
            htmlTagList[i].style.overflowX = "hidden";
            htmlTagList[i].style.textOverflow = "ellipsis";
        }
    }
}
/*
 重新为整个列表属性更改完成的列表赋值
 htmlTagList:内容标签列表；ListLength：当前有内容的列表标签的个数
 */
function resetScrollHtmlInner(htmlTagList)
{
    for(var i = 0; i < htmlTagList.length; i++)
    {
        htmlTagList[i].innerHTML = "";
        htmlTagList[i].innerHTML = htmlTagList[i].getAttribute("contentText");
    }
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
    top.ttsLog("focusOn=" + focusOn);
    top.ttsLog("positionV=" + positionV);
    top.ttsLog("parent.currentShowMenu=" + parent.currentShowMenu);
    var ttsStr = "";
    var currentStatus = "";
    var currentName = findName(positionV);
    top.ttsLog("currentName=" + currentName);
    var ttsName = "";
    if(("menu" == focusOn) && (1 == parent.currentShowMenu))
    {
        switch(currentName)
        {
            case "E-manual":
                ttsName = supportSetTitleWords[0] + ",";
                currentStatus = "";//setting.timeZone;
                break;
            case "Software update":
                ttsName = supportSetTitleWords[1] + ",";
                currentStatus = "";//setting.timeZone;
                break;
            case "Remote diagnosis":
                ttsName = supportSetTitleWords[2] + ",";
                currentStatus = "";//setting.parentalRating
                break;
            case "Contact us":
                ttsName = supportSetTitleWords[3] + ",";
                currentStatus = "";//setting.parentalRating
                break;
            default:
                ttsName = "";
                currentStatus = "";
                break;
        }
    }
    else if("contactus" == focusOn)
    {
        ttsName = "";
        var i;
        for(i = 0; i < 16; i++)
        {
            currentStatus += "," + contactUsSpanList[i].innerHTML;
        }
    }
    else if("password" == focusOn)
    {
        ttsName = "";
        currentStatus = psswordWords;
    }
    else
    {
        ttsName = "";
        currentStatus = "";
    }
    lastFocusType = focusOn;
    lastFocusName = currentName;
    ttsStr = ttsName + currentStatus;
    if("" != ttsStr)
    {
        top.ttsLog("ttsStr=" + ttsStr);
        top.setTTSSay(top.SPEECH_TYPE_FLUSH, ttsStr);
    }
}