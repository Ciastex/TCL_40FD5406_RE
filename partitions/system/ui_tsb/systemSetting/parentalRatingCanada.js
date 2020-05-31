/******************** created by chenhua ***********************/
var ratingTitleWords 			= top.parentalRatingOptionCanada;
var canadaEngWords				= top.sysCanadaEng;
var canadaFreWords          = top.sysCanadaFre;
/*var sumAudioLanguage			= 36;					//可允许的menu 语言的个数
 var audioLangIndex 				= top.audioSttlTtxLang;
 var audioLangWords				= new Array(sumAudioLanguage);
 for(var i = 0; i < sumAudioLanguage; i++)
 {
 audioLangWords[i] = top.all_language[audioLangIndex[i]];
 }


 var menuLangIndex 				= top.mlmLangIndex;
 var sumMenuLanguage				= 27;					//可允许的menu 语言的个数
 */
var setting 					= top.g_setting;
var channel			 			= top.g_channel;
var focusOn 					= "menu"; 				//menu,menuLanguage,audioLanguage1,audioLanguage2
var list_position_h				= 0;
var form_position_h				= 0;
var ageRatingVal               	= 0;
var contentRatingVal 			= 0;
var offset					= 0;					//列表弹出框中的焦点的真实位置和焦点显示位置的差值，比如audio language中offset = audioLang1Pos - form_position_h
var showItemNum = 0;
var SUB_MENU_START 				= 160;					//三级级菜单焦点移动起始位置
var SUB_MENU_STEP 				= 70;					//三级级主菜单焦点移动的step
var FORM_STEP					= 70;					//弹出框焦点移动的step
var PROGRESS_WIDTH				= 500;
var mainFocus                   = ["../images/Focus_Frame/Focus-1.png","../images/Focus_Frame/Focus-2.png"];
document.onsystemevent 				= notifyProcess;

var menuList =
    [
        {name:"Canada Eng"		,	param:function(){showCanadaEng();}			,showFlag:1},
        {name:"Canada Fre"   ,	param:function(){showCanadaFre();}		,showFlag:1},
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
function showCanadaEng()
{
    $("fifthListFocus").src=mainFocus[1];
    showCanadaEngOptions();
    focusOn = "CanadaEng";
}

function showCanadaFre()
{
    $("fifthListFocus").src=mainFocus[1];
    showCanadaFreOptions();
    focusOn = "CanadaFre";
}

function updateUI()
{
    //1、重新得到数据
    //updateItemValues();
    //2、根据数据设置showflag
    //checkShowMenu();
    //3、显示每一个item
    showItems();
}

function showItems()
{
    showItemNum = -1;
    //设置item是否显示
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
    else if(focusOn == "CanadaEng")
    {
        ChangeSumenuFocus(top.VK_DOWN);
    }
    else if(focusOn == "CanadaFre")
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
    else if(focusOn == "CanadaEng")
    {
        ChangeSumenuFocus(top.VK_UP);
    }
    else if(focusOn == "CanadaFre")
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
        if(num==positionTemp)//找到此位置
        {
            menuList[i].param();//执行函数
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
        if(focusOn == "CanadaEng")
        {
            analysisCanEng(0);
            analysisCanEng(1);
        }
        else if(focusOn == "CanadaFre")
        {
            analysisCanFre(0);
            analysisCanFre(1);
        }
        showLockIcon();
    }
    listFormImg[0].style.left = (focusStart + listx * 100)+"px";
    listFormImg[0].style.top = (listy * 80)+"px";
}

function doEnter()
{
    if(focusOn == "menu")
    {
        executeFunction(list_position_h);
    }
    else if(focusOn == "CanadaEng")
    {
        ChangeSumenuFocus(top.VK_ENTER);
    }
    else if(focusOn == "CanadaFre")
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
    else if(focusOn == "CanadaEng" ||focusOn == "CanadaFre")
    {
        $("fifthListFocus").src=mainFocus[0];
        $("listForm").style.display = "none";
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
    else if(focusOn == "CanadaEng")
    {
        ChangeSumenuFocus(top.VK_LEFT);
    }
    else if(focusOn == "CanadaFre")
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
    else if(focusOn == "CanadaEng")
    {
        ChangeSumenuFocus(top.VK_RIGHT);
    }
    else if(focusOn == "CanadaFre")
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
var showlist = [1,1,1,1,1,1];
var showlock = [0,0,0,0,0,0];
var listx = 0;
var listy = 0;
var listxmax = 1;
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
    listFormText = $("listForm").getElementsByClassName("liListSubName");
    addMouseListener();
    ttsRead();
}

function analysisCanFre(flag)//0 设置 1 得到
{
    var value = 0;
    value = setting.vchipCanFreRating;
    if(flag)
    {

        for(var i = 0;i<showlist.length;i++)
        {
            if(i>=(value - 1))
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
        if(listx+listy*listxmax >= value - 1)
            setting.vchipCanFreRating = listx+listy*listxmax + 2;
        else
            setting.vchipCanFreRating = listx+listy*listxmax + 1;
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

function analysisCanEng(flag)//0 设置 1 得到
{
    var value = 0;
    value = setting.vchipCanEngRating;
    if(flag)
    {
        value = setting.vchipCanEngRating;
        for(var i = 0;i<showlist.length;i++)
        {
            if(i>=(value - 1))
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
        if(listx+listy*listxmax >= value - 1 )
            setting.vchipCanEngRating = listx+listy*listxmax + 2;
        else
            setting.vchipCanEngRating = listx+listy*listxmax + 1;
    }

}



function showCanadaFreOptions()
{
    listx = 0;
    listy = 0;
    focusStart = 110;
    listxmax = 1;
    listymax = 6;
    showlist = [1,1,1,1,1,0];
    showlock = [0,0,0,0,0,0];
    $("listForm").style.display = "block";

    $("listForm").style.left = "778px";
    $("listForm").style.top =(SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10)+"px";
    listFormImg = $("listForm").getElementsByTagName("img");
    listFormLiList = $("listForm").getElementsByClassName("liListName");
    for(var i = 0;i<listymax;i++)
    {
        if (showlist[i] == 0)
        {
            listFormText[i].innerHTML = "";
        }
        else
        {
            listFormText[i].innerHTML = "ALL";
        }

        listFormLiList[i].innerHTML = top.sysCanadaFre[i];
        listFormImg[i+1].style.display = "none";
    }
    listFormImg[0].style.left = (focusStart + listx * 100)+"px";
    listFormImg[0].style.top = (listy * 80)+"px";
    analysisCanFre(1);
    showLockIcon();

}

function showCanadaEngOptions()
{
    listx = 0;
    listy = 0;
    focusStart = 110;
    listxmax = 1;
    listymax = 6;
    showlist = [1,1,1,1,1,1];
    showlock = [0,0,0,0,0,0];
    $("listForm").style.display = "block";

    $("listForm").style.left = "778px";
    $("listForm").style.top =(SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10)+"px";
    listFormImg = $("listForm").getElementsByTagName("img");
    listFormLiList = $("listForm").getElementsByClassName("liListName");
    for(var i = 0;i<listymax;i++)
    {
        if (showlist[i] == 0)
        {
            listFormText[i].innerHTML = "";
        }
        else
        {
            listFormText[i].innerHTML = "ALL";
        }
        listFormLiList[i].innerHTML = top.sysCanadaEng[i];
        listFormImg[i+1].style.display = "none";
    }
    listFormImg[0].style.left = (focusStart + listx * 100)+"px";
    listFormImg[0].style.top = (listy * 80)+"px";
    analysisCanEng(1);
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

    for(var i = 0; i < listFormText.length; i++)
    {
        listFormText[i].setAttribute("newAttr",i);
        listFormText[i].onmousedown = function(evt){
            top.timeoutFuc.osdTimeoutEndFuc();
            if(evt.button == 0){//left key
                if(focusOn != "menu")
                {
                    listx = parseInt(parseInt(this.getAttribute("newAttr"))%listxmax);
                    listy = parseInt(parseInt(this.getAttribute("newAttr"))/listxmax);
                    if(showlist[listx+listy*listxmax]!=0)
                    {
                        listFormImg[0].style.left = (focusStart + listx * 100)+"px";
                        listFormImg[0].style.top = (listy * 80)+"px";
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
    top.ttsLog("focusOn=" + focusOn);
    top.ttsLog("list_position_h=" + list_position_h + " form_position_h=" + form_position_h);
    //top.ttsLog("focus_off_set="+focus_off_set);
    top.ttsLog("parent.currentShowMenu=" + parent.currentShowMenu);
    //$("listForm").style.display = "none";
    top.ttsLog("$('listForm').style.display =" + $("listForm").style.display);
    var ttsStr = "";
    var currentStatus = "";
    var currentName = findName(list_position_h);
    top.ttsLog("currentName=" + currentName);
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

    if(("menu" == focusOn) && (4 == parent.currentShowMenu))
    {
        switch(currentName)
        {
            case "Canada Eng":
                ttsName = ratingTitleWords[1] + ",";
                currentStatus = "";
                break;
            case "Canada Fre":
                top.ttsLog("ageRatingVal=" + ageRatingVal);
                ttsName = ratingTitleWords[2] + ",";
                currentStatus = "";
                break;
            default:
                ttsName = "";
                currentStatus = "";
                break;
        }
    }
    else if("CanadaEng" == focusOn)
    {
        top.ttsLog("list_position_h=" + list_position_h);
        top.ttsLog("top.sysCanadaEng[list_position_h]=" + top.sysCanadaEng[list_position_h]);
        ttsName = top.sysCanadaEng[listx + listy * listxmax] + "," + "ALL" + ",";
        currentStatus = "";
        top.ttsLog("showlock[list_position_h]=" + showlock[list_position_h] + " listx+listy*listxmax=" + listx + listy * listxmax + " showlock[listx+listy*listxmax]=" + showlock[listx + listy * listxmax]);
        isSelected(1 == showlock[listx + listy * listxmax]);
    }
    else if("CanadaFre" == focusOn)
    {
        top.ttsLog("list_position_h=" + list_position_h);
        top.ttsLog("top.sysCanadaFre[list_position_h]=" + top.sysCanadaFre[list_position_h]);
        ttsName = top.sysCanadaFre[listx + listy * listxmax] + "," + "ALL" + ",";
        currentStatus = "";
        top.ttsLog("showlock[list_position_h]=" + showlock[list_position_h] + " listx+listy*listxmax=" + listx + listy * listxmax + " showlock[listx+listy*listxmax]=" + showlock[listx + listy * listxmax]);
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
        top.ttsLog("form_position_h=" + form_position_h);
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
