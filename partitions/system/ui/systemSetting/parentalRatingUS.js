/******************** created by chenhua ***********************/
var ratingTitleWords 			= top.parentalRatingOptionUS;
var tvRatingUSWords				= top.sysTVRatingUS;
var MPAAUSWords          = top.sysMPAAUS;
/*var sumAudioLanguage			= 36;					//�������menu ���Եĸ���
 var audioLangIndex 				= top.audioSttlTtxLang;
 var audioLangWords				= new Array(sumAudioLanguage);
 for(var i = 0; i < sumAudioLanguage; i++)
 {
 audioLangWords[i] = top.all_language[audioLangIndex[i]];
 }


 var menuLangIndex 				= top.mlmLangIndex;
 var sumMenuLanguage				= 27;					//�������menu ���Եĸ���
 */
var setting 					= top.g_setting;
var channel			 			= top.g_channel;
var focusOn 					= "menu"; 				//menu,menuLanguage,audioLanguage1,audioLanguage2
var list_position_h				= 0;
var form_position_x				= 0;
var form_position_y              = 0;
var ageRatingVal               	= 0;
var contentRatingVal 			= 0;
var offset					= 0;					//�б������еĽ������ʵλ�úͽ�����ʾλ�õĲ�ֵ������audio language��offset = audioLang1Pos - form_position_h
var showItemNum = 0;
var SUB_MENU_START 				= 160;					//�������˵������ƶ���ʼλ��
var SUB_MENU_STEP 				= 70;					//���������˵������ƶ���step
var FORM_STEP					= 70;					//����������step
var PROGRESS_WIDTH				= 500;
var mainFocus                   = ["../images/Focus_Frame/Focus-1.png","../images/Focus_Frame/Focus-2.png"];
document.onsystemevent 				= notifyProcess;

var menuList =
    [
        {name:"TV rating"		,	param:function(){showTVRating();}			,showFlag:1},
        {name:"MPAA"   ,	param:function(){showMPAA();}		,showFlag:1},
    ];

function timeoutInit()
{
    document.onkeydown = top.timeoutMyFuc;
    top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyDownProcess;
}

function notifyProcess(evt)
{
    var msg = evt.which;
    switch(msg)
    {
        default:
            top.systemEventProc(evt);
            break;
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
        default:
            top.keyDownProcess(evt);
            break;
    }
    return ret;
}

function $(id)
{
    return document.getElementById(id);
}
function showTVRating()
{
    $("fifthListFocus").src=mainFocus[1];
    showTvRatingOptions();
    focusOn = "TVRating";
}

function showMPAA()
{
    $("fifthListFocus").src=mainFocus[1];
    showMPAAOptions();
    focusOn = "MPAA";
}

function updateUI()
{
    //1�����µõ�����
    //updateItemValues();
    //2��������������showflag
    //checkShowMenu();
    //3����ʾÿһ��item
    showItems();
}

function showItems()
{
    showItemNum = -1;
    //����item�Ƿ���ʾ
    for(var i=0;i<menuList.length;i++)
    {
        if(menuList[i].showFlag == 1)
        {
            thdMenuRightLiList[i+1].style.display = "block";
            showItemNum ++;
        }
        else if(menuList[i].showFlag == 0)
        {
            thdMenuRightLiList[i+1].style.display = "none";
        }
        else
        {
            thdMenuRightLiList[i+1].style.display = "none";
        }

    }
}

function toDown()
{
    if(focusOn == "menu")
    {
        if(list_position_h >= showItemNum)
        {
            list_position_h = 0;
        }
        else
        {
            list_position_h++;
        }
        $("fifthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
    }
    else if(focusOn == "TVRating")
    {
        ChangeSumenuFocus(top.VK_DOWN);
    }
    else if(focusOn == "MPAA")
    {
        ChangeSumenuFocus(top.VK_DOWN);
    }
}
function toUp()
{
    if(focusOn == "menu")
    {
        if(list_position_h <= 0)
        {
            list_position_h = showItemNum;
        }
        else
        {
            list_position_h--;
        }
        $("fifthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
    }
    else if(focusOn == "TVRating")
    {
        ChangeSumenuFocus(top.VK_UP);
    }
    else if(focusOn == "MPAA")
    {
        ChangeSumenuFocus(top.VK_UP);
    }
}

function executeFunction(positionTemp)
{
    var num=-1;
    for(var i=0;i<menuList.length;i++)
    {
        if(menuList[i].showFlag==1)
        {
            num++;
        }
        if(num==positionTemp)//�ҵ���λ��
        {
            menuList[i].param();//ִ�к���
            break;
        }
    }
}

function ChangeSumenuFocus(param)
{
    if(param == 37 )//left
    {
        do
        {
            listx = (listx - 1+listxmax)%listxmax;
        }
        while(showlist[listx+listy*listxmax]==0);
    }
    else if(param == 39)//right
    {
        do
        {
            listx = (listx + 1)%listxmax;
        }
        while(showlist[listx+listy*listxmax]==0);
    }
    else if(param == 38)//up
    {
        do
        {
            listy = (listy - 1+listymax)%listymax;
        }
        while(showlist[listx+listy*listxmax]==0);

    }
    else if(param == 40)//down
    {
        do
        {
            listy = (listy + 1)%listymax;
        }
        while(showlist[listx+listy*listxmax]==0);
    }
    else if(param == 13)//ok
    {

        if(showlock[listx+listy*listxmax] == 0)
        {
            showlock[listx+listy*listxmax] =1;
        }
        else
        {
            showlock[listx+listy*listxmax] =0;
        }

        if(focusOn == "TVRating")
        {
            linkValue();
            analysisValue(0);
            analysisValue(1);
        }
        else if(focusOn == "MPAA")

        {
            analysisMPAA(0);
            analysisMPAA(1);

        }


        showLockIcon();
    }
    listFormImg[0].style.left = (focusStart + listx * 100)+"px";
    listFormImg[0].style.top = (listy * 80)+"px";
}

function linkValue()
{
    var k = 0;
    var m = 0;
    if(listx == 0)
    {
        if(showlock[listx+listy*listxmax] == 0)
        {
            for(k = 0;k<=listy;k++)
            {
                for(m = 0;m<listxmax;m++)
                {
                    showlock[m+k*listxmax] = 0;
                }
            }
        }
        else
        {
            for(k = listy;k<listymax;k++)
            {
                for(m = 0;m<listxmax;m++)
                {
                    showlock[m+k*listxmax] = 1;
                }
            }
        }
    }
    else
    {
        if(showlock[listx+listy*listxmax] == 0)
        {
            for(k = 0;k<=listy;k++)
            {
                showlock[listx+k*listxmax] = 0;
                showlock[0+k*listxmax] = 0;
            }
        }
        else
        {
            for(k = listy;k<listymax;k++)
            {
                    showlock[listx+k*listxmax] = 1;
            }
        }
    }
}


function showLockIcon()
{
    for(var i = 0;i<showlist.length;i++)
    {
        if (showlist[i] == 1 && showlock[i] == 1)
        {
            listFormImg[i+1].style.display = "block";
        }
        else
        {
            listFormImg[i+1].style.display = "none";
        }
    }
}

function doEnter()
{
    if(focusOn == "menu")
    {
        executeFunction(list_position_h);
    }
    else if(focusOn == "TVRating")
    {
        ChangeSumenuFocus(top.VK_ENTER);
    }
    else if(focusOn == "MPAA")
    {
        ChangeSumenuFocus(top.VK_ENTER);
    }
}
function toBack()
{
    if(focusOn == "menu")
    {
        parent.returnPage(4);
    }
    else if(focusOn == "TVRating" )
    {
        $("fifthListFocus").src=mainFocus[0];
        $("listForm").style.display = "none";
        focusOn = "menu";
        offset = 0;
    }
    else if(focusOn == "MPAA")
    {
        $("fifthListFocus").src=mainFocus[0];
        $("listFormsmall").style.display = "none";
        focusOn = "menu";
        offset = 0;
    }
    else if(focusOn == "menuLanguage" || focusOn == "audioLanguage1" || focusOn == "audioLanguage2")
    {
        $("fifthListFocus").src=mainFocus[0];
        $("listForm").style.display = "none";
        focusOn = "menu";
        offset = 0;
    }
}
function toLeft()
{
    if(focusOn == "menu")
    {
        toBack();
    }
    else if(focusOn == "TVRating")
    {
        ChangeSumenuFocus(top.VK_LEFT);
    }
    else if(focusOn == "MPAA")
    {
        ChangeSumenuFocus(top.VK_LEFT);
    }

}
function toRight()
{
    if(focusOn == "menu")
    {
        doEnter();
    }
    else if(focusOn == "TVRating")
    {
        ChangeSumenuFocus(top.VK_RIGHT);
    }
    else if(focusOn == "MPAA")
    {
        ChangeSumenuFocus(top.VK_RIGHT);
    }

}

var thdMenuRightSpanList;
var thdMenuRightLiList;
var listFormLiList;
var listFormImg;
var listFormText;
var showimg = ["../images/2.png",""];
var keynum;
var showlist = [1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0];
var showlock = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var listx = 0;
var listy = 0;
var listxmax = 6;
var listymax = 6;
var focusStart = 105;
function init()
{
    top.initTextDirection(window);
    timeoutInit();
    thdMenuRightLiList = $("fifthMenuRight").getElementsByTagName("li");
    thdMenuRightSpanList = $("fifthMenuRight").getElementsByTagName("span");

    ageRatingVal = setting.parentalRating-1;
    if(ageRatingVal < 0)//0;//setting.ageRating;////zenglm fix me //in case database init value is 0;
    {
        ageRatingVal = 0;
    }
    contentRatingVal = setting.getContentLockLevel(); //0;//setting.contenRating;////zenglm fix me

    list_position_h = 0;
    $("fifthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
    updateUI();
    $("titleNameSpan").innerHTML = ratingTitleWords[0];
    for(var i = 1; i < thdMenuRightSpanList.length; i++)
    {
        thdMenuRightSpanList[i].innerHTML = ratingTitleWords[i];
    }
    addMouseListener();
    ttsRead();
}

function analysisMPAA(flag)//0 ���� 1 �õ�
{
    var value = 0;
    value = setting.vchipUSMPAA;
    if(flag)
    {
        for(var i = 0;i<showlist.length;i++)
        {
            if(i>=value)
            {
                showlock[i] = 1;
            }
            else
            {
                showlock[i] = 0;
            }
        }
    }
    else
    {
        if(listx+listy*listxmax >= value)
            setting.vchipUSMPAA = listx+listy*listxmax+1;
        else
            setting.vchipUSMPAA = listx+listy*listxmax;
    }
}

function analysisValue(flag)//1�� 0 ��
{
    var value = 0;
    if(flag)//���
    {
        value = setting.vchipUSRating;
        showlock[32] = value>>19 &0x1;//MA_V
        showlock[33] = value>>18 &0x1;//MA_S
        showlock[34] = value>>17 &0x1;//MA_L
        showlock[26] = value>>16 &0x1;//14_V
        showlock[27] = value>>15 &0x1;//14_S
        showlock[28] = value>>14 &0x1;//14_L
        showlock[29] = value>>13 &0x1;//14_D
        showlock[20] = value>>12 &0x1;//PG_V
        showlock[21] = value>>11 &0x1;//PG_S
        showlock[22] = value>>10 &0x1;//PG_L
        showlock[23] = value>>9 &0x1;//PG_D
        showlock[7] = value>>8 &0x1;//Y7_FV
        showlock[30] = value>>5 &0x1;//MA_ALL
        showlock[24] = value>>4 &0x1;//14_ALL
        showlock[18] = value>>3 &0x1;//PG_ALL
        showlock[12] = value>>2 &0x1;//G_ALL
        showlock[6] = value>>1 &0x1;//Y7_ALL
        showlock[0] = value>>0 &0x1;//Y_ALL
    }
    else//�ϳ�
    {
        value = showlock[0] | showlock[6]<<1| showlock[12]<<2| showlock[18]<<3| showlock[24]<<4| showlock[30]<<5| showlock[7]<<8| showlock[23]<<9| showlock[22]<<10;
        value = value | showlock[21]<<11 | showlock[20]<<12| showlock[29]<<13| showlock[28]<<14| showlock[27]<<15| showlock[26]<<16| showlock[34]<<17| showlock[33]<<18| showlock[32]<<19;
        setting.vchipUSRating =value;
    }
}
function showTvRatingOptions()
{
    listx = 0;
    listy = 0;
    listxmax = 6;
    listymax = 6;
    focusStart = 95;
    showlist = [1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0];
    showlock = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    $("listForm").style.display = "block";
    $("listForm").style.left = "778px";
    $("listForm").style.top =(SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10)+"px";
    listFormImg = $("listForm").getElementsByTagName("img");
    listFormText = $("listForm").getElementsByTagName("span");
    for(var i = 0;i<showlist.length;i++)
    {
        if (showlist[i] == 0)
        {
            listFormText[i].innerHTML = "";
        }
        listFormImg[i+1].style.display = "none";
    }

    listFormImg[0].style.left = (focusStart + listx * 100)+"px";
    listFormImg[0].style.top = (listy * 80)+"px";
    analysisValue(1);
    showLockIcon();
}

function showMPAAOptions()
{
    listx = 0;
    listy = 0;
    listxmax = 1;
    listymax = 6;
    showlist = [1,1,1,1,1,1];
    showlock = [0,0,0,0,0,0];
    focusStart = 110;
    $("listFormsmall").style.display = "block";

    $("listFormsmall").style.left = "778px";
    $("listFormsmall").style.top =(SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10)+"px";
    listFormImg = $("listFormsmall").getElementsByTagName("img");
    listFormText = $("listFormsmall").getElementsByTagName("span");
    for(var i = 0;i<listymax;i++)
    {
        listFormImg[i+1].style.display = "none";
    }
    listFormImg[0].style.left = (focusStart + listx * 100)+"px";
    listFormImg[0].style.top = (listy * 80)+"px";
    analysisMPAA(1);
    showLockIcon();
}

function addMouseListener()
{
    document.body.onmousedown = function(evt){evt.preventDefault();
        top.timeoutFuc.osdTimeoutEndFuc();
        if(evt.button == 2) toBack();//right key
        top.timeoutFuc.osdTimeoutStartFuc();
    }

    for(var i = 1; i < 3; i++)
    {
        thdMenuRightLiList[i].setAttribute("newAttr",i);
        thdMenuRightLiList[i].onmousedown = function(evt){
            top.timeoutFuc.osdTimeoutEndFuc();
            if(evt.button == 0){//left key
                if(focusOn == "menu")
                {
                    list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
                    $("fifthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
                    doEnter();
                }
            }
            top.timeoutFuc.osdTimeoutStartFuc();
        }
    }

    //form
    listFormText = $("listForm").getElementsByTagName("span");
    for(var i = 0; i < listFormText.length; i++) {
        listFormText[i].setAttribute("newAttr", i);
        listFormText[i].onmousedown = function (evt) {
            top.timeoutFuc.osdTimeoutEndFuc();
            if (evt.button == 0) {//left key
                if (focusOn != "menu") {
                    listx =  parseInt(parseInt(this.getAttribute("newAttr"))%listxmax);
                    listy =  parseInt(parseInt(this.getAttribute("newAttr"))/listxmax);
                    if (showlist[listx + listy * listxmax] != 0) {
                        listFormImg[0].style.left = (95 + listx * 100)+"px";
                        listFormImg[0].style.top = (listy * 80)+"px";
                        doEnter();
                    }
                }
            }
            top.timeoutFuc.osdTimeoutStartFuc();
        }
    }
        listFormText = $("listFormsmall").getElementsByTagName("span");
        for(var i = 0; i < listFormText.length; i++)
        {
            listFormText[i].setAttribute("newAttr",i);
            listFormText[i].onmousedown = function(evt){
                top.timeoutFuc.osdTimeoutEndFuc();
                if(evt.button == 0){//left key
                    if(focusOn != "menu")
                    {
                        listx =  parseInt(parseInt(this.getAttribute("newAttr"))%listxmax);
                        listy =  parseInt(parseInt(this.getAttribute("newAttr"))/listxmax);
                        if(showlist[listx+listy*listxmax]!=0)
                        {
                            listFormImg[0].style.left = (110 + listx * 100)+"px";
                            listFormImg[0].style.top = ( listy * 80)+"px";
                            doEnter();
                        }
                    }
                }
                top.timeoutFuc.osdTimeoutStartFuc();
            }
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
    // top.ttsLog("focusOn=" + focusOn);
    // top.ttsLog("list_position_h=" + list_position_h);
    var ttsStr = "";
    var currentStatus = "";
    var currentName = findName(list_position_h);
    top.ttsLog("currentName=" + currentName);
    var ttsName = "";

    function isSelected(selectedFlag)
    {
        if(selectedFlag)
        {
            currentStatus = currentStatus + " selected";
        }
        else
        {
            currentStatus = currentStatus + " not selected";
        }
    }

    if(("menu" == focusOn) && (4 == parent.currentShowMenu))
    {
        switch(currentName)
        {
            case "TV rating":
                ttsName = ratingTitleWords[1] + ";";
                currentStatus = "";
                break;
            case "MPAA":
                top.ttsLog("ageRatingVal=" + ageRatingVal);
                ttsName = ratingTitleWords[2] + ";";
                currentStatus = "";
                break;
            default:
                ttsName = "";
                currentStatus = "";
                break;
        }
    }
    else if("TVRating" == focusOn)
    {
        if(listy<2)
        {
            ttsName = tvRatingUSWords[listy] + ";" + listFormText[listx + listy * listxmax].innerHTML + ";";
        }
        else if(listy>2)
        {
            ttsName = tvRatingUSWords[listy-1] + ";" + listFormText[listx + listy * listxmax].innerHTML + ";";
        }
        else
        {
            ttsName = "TV-G:ALL";
        }
        currentStatus = "";
        isSelected(1 == showlock[listx + listy * listxmax]);
    }
    else if("MPAA" == focusOn)
    {
        ttsName = MPAAUSWords[listx + listy * listxmax] + ";" + "ALL" + ";";
        currentStatus = "";
        isSelected(1 == showlock[listx + listy * listxmax]);
    }
    else
    {
        top.ttsLog("focusOn=" + focusOn);
    }
    lastFocusType = focusOn;
    lastFocusName = currentName;
    ttsStr = ttsName + currentStatus;
    if("" != ttsStr)
    {
        top.ttsLog("ttsStr=" + ttsStr);
        //top.ttsLog("form_position_h="+form_position_h);
        top.setTTSSay(top.SPEECH_TYPE_FLUSH, ttsStr);
    }
}

function findName(postion)
{
    var num = -1;
    for(var i = 0; i < menuList.length; i++)
    {
        if(menuList[i].showFlag)
        {
            num++;
        }
        if(num == postion)
        {
            return menuList[i].name;
        }
    }
}