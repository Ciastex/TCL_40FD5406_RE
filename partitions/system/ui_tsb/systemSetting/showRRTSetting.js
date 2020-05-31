/******************** created by chenhua ***********************/
var thdMenuRightSpanList;
var thdMenuRightLiList;
var thdMenuRightImgList;
var useString = new Array();
var lockflag = [0,0,0,0,0,0,0,0];
var stringnum = 0;
var startindex = 0;
var list_position_h = 0;
var SUB_MENU_START 				= 160;					//三级级菜单焦点移动起始位置
var SUB_MENU_STEP 				= 70;					//三级级主菜单焦点移动的step
var ITEM_NUM                      = 12;
var focusOn                       ;
var realLevelNum = 0;
var menuFlag;
var firstSubmenuPosition_h = 0;
var secondSubmenuPosition_h = 0;
document.onsystemevent 				= notifyProcess;
var setting 					= top.g_setting;

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

function toDown()
{
    var index;
    list_position_h = (list_position_h+1)%useString.length;
    index = list_position_h;
    if(list_position_h>=ITEM_NUM)
    {
        startindex = list_position_h - ITEM_NUM + 1;
        for(var i =  0; i < stringnum; i++)
        {
            thdMenuRightSpanList[i+1+ menuFlag * ITEM_NUM].innerHTML = useString[i +startindex];
        }
        index=ITEM_NUM - 1;
    }
    else
    {
        if(startindex !=0)
        {
            for(var i =  0; i < stringnum; i++)
            {
                thdMenuRightSpanList[i+1+ menuFlag * ITEM_NUM].innerHTML = useString[i];
            }
        }
        startindex = 0;
    }
    $("fifthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*index + "px";
    /*if(focusOn == "thirdMenu")
        showTheImage();*/
}
function toUp()
{
    var index;
    list_position_h = (list_position_h-1+useString.length)%useString.length;
    index = list_position_h;
    if(list_position_h>=ITEM_NUM)
    {
        startindex = list_position_h - ITEM_NUM + 1;
        for(var i =  0; i < stringnum; i++)
        {
            thdMenuRightSpanList[i+1+ menuFlag * ITEM_NUM].innerHTML = useString[i +startindex];
        }
        index=ITEM_NUM - 1;
    }
    else
    {
        if(startindex !=0)
        {
            for(var i =  0; i < stringnum; i++)
            {
                thdMenuRightSpanList[i+1+ menuFlag * ITEM_NUM].innerHTML = useString[i];
            }
        }
        startindex = 0;
    }
    $("fifthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*index + "px";
    /*if(focusOn == "thirdMenu")
        showTheImage();*/
}
function doEnter()
{
    if(focusOn == "firstMenu")
    {
        firstSubmenuPosition_h = list_position_h;
        secondMenuinit();
        focusOn = "secondMenu"
    }
    else if(focusOn == "secondMenu")
    {
        secondSubmenuPosition_h = list_position_h;
        thirdMenuinit();
        focusOn = "thirdMenu"
    }
    else if(focusOn == "thirdMenu")
    {
        console.log("VchipLevelBlock start getOSTimeCount = " + setting.getOSTimeCount());
        var VchipLevelBlock = setting.getVchipLevelBlockForNTK(firstSubmenuPosition_h,secondSubmenuPosition_h,list_position_h);
        var data = VchipLevelBlock.split("/");
        console.log("VchipLevelBlock = " + VchipLevelBlock);
        if(1) //(setting.getVchipDimensiongrad(firstSubmenuPosition_h,secondSubmenuPosition_h))//是否联动
        {
            if(data[list_position_h] == 0)//if(setting.getVchipLevelBlock(firstSubmenuPosition_h,secondSubmenuPosition_h,list_position_h) == 0)
            {
                setting.setVchipLevelBlock(firstSubmenuPosition_h,secondSubmenuPosition_h,list_position_h);
                /*for(var i = list_position_h;i<realLevelNum;i++)
                {
                    if(data.length > i && data[i] !=1)//if(setting.getVchipLevelBlock(firstSubmenuPosition_h,secondSubmenuPosition_h,i) !=1)
                    {
                        setting.setVchipLevelBlock(firstSubmenuPosition_h,secondSubmenuPosition_h,i);
                    }
                }*/
            }
            else
            {
                setting.setVchipLevelBlock(firstSubmenuPosition_h,secondSubmenuPosition_h,list_position_h);
                /*for(var i = 0;i<=list_position_h;i++)
                {
                    if(data.length > i && data[i] != 0)//if(setting.getVchipLevelBlock(firstSubmenuPosition_h,secondSubmenuPosition_h,i) !=0)
                    {
                        setting.setVchipLevelBlock(firstSubmenuPosition_h,secondSubmenuPosition_h,i);
                    }
                }*/
            }
        }
        else
        {
            setting.setVchipLevelBlock(firstSubmenuPosition_h,secondSubmenuPosition_h,list_position_h);
        }
        showTheImage();
        console.log("VchipLevelBlock end  getOSTimeCount = " + setting.getOSTimeCount());
    }
}
function toBack()
{
    if(focusOn == "firstMenu")
    {
        firstSubmenuPosition_h = 0;
        parent.returnPage(4);

    }
    else if(focusOn == "secondMenu")
    {
        secondSubmenuPosition_h = 0;
        firstMenuinit();
        focusOn = "firstMenu"
    }
    else if(focusOn == "thirdMenu")
    {
        secondMenuinit();
        focusOn = "secondMenu"
    }
}
function toLeft()
{
    toBack();
}
function toRight()
{
    doEnter();
}

function init()
{
    top.initTextDirection(window);
    thdMenuRightLiList = $("fifthMenuRight").getElementsByTagName("li");
    thdMenuRightSpanList = $("fifthMenuRight").getElementsByTagName("span");
    thdMenuRightImgList = $("fifthMenuRight").getElementsByTagName("img");
    firstMenuinit();
    timeoutInit();
    focusOn = "firstMenu";
    addMouseListener();  
    ttsRead();
}
function firstMenuinit()
{
    var realRegionNum = 0;
    $("showFirstMenu").style.display="block";
    $("showSecondMenu").style.display="none";
    $("showThirdMenu").style.display="none";

    menuFlag = 0;
    startindex = 0;
    thdMenuRightSpanList[0].innerHTML = "RRT settings";
    realRegionNum = setting.getVchipRegionNum();
    useString = [];//清空数组
    for(var k = 0;k<realRegionNum;k++)
        useString[k] = setting.getVchipRegionInfo(k);
    for(var i = 0;i<ITEM_NUM ;i++)
    {
        thdMenuRightLiList[ + i+ menuFlag * ITEM_NUM].style.display="block";
    }
    if(realRegionNum>ITEM_NUM)
    {
        stringnum = ITEM_NUM;
        $("listDownRemind").style.display="block";
        $("listUpRemind").style.display="block";
    }
    else
    {
        stringnum = realRegionNum;
        $("listDownRemind").style.display="none";
        $("listUpRemind").style.display="none";
        for(var i = 0;i<ITEM_NUM - realRegionNum;i++)
        {
            thdMenuRightLiList[realRegionNum + i+ menuFlag * ITEM_NUM].style.display="none";
        }
    }
    list_position_h = firstSubmenuPosition_h;
    if(list_position_h >=ITEM_NUM)
        startindex = list_position_h - ITEM_NUM + 1;
    for(var i =  0; i < stringnum; i++)
    {
        thdMenuRightSpanList[i+1+ menuFlag * ITEM_NUM].innerHTML = setting.getVchipRegionInfo(i +startindex);
    }

    $("fifthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*(list_position_h-startindex) + "px";
}

function showTheImage()
{
    var VchipLevelBlock = setting.getVchipLevelBlockForNTK(firstSubmenuPosition_h,secondSubmenuPosition_h,list_position_h);
    var data = VchipLevelBlock.split("/");
    console.log("VchipLevelBlock = " + VchipLevelBlock);
    for(var i =  0; i < stringnum; i++)
    {
        if(data[i + startindex] == 0)// if(setting.getVchipLevelBlock(firstSubmenuPosition_h,secondSubmenuPosition_h,i+startindex) == 0)
        {
            thdMenuRightImgList[i+1+ menuFlag * ITEM_NUM].src="../images/option/check_1.png";
        }
        else
        {
            thdMenuRightImgList [i+1+ menuFlag * ITEM_NUM].src="../images/option/check_3.png";
        }
    }
}

function thirdMenuinit()
{
    $("showFirstMenu").style.display="none";
    $("showSecondMenu").style.display="none";
    $("showThirdMenu").style.display="block";

    realLevelNum = 0;
    menuFlag = 2;
    startindex = 0;
    thdMenuRightSpanList[0].innerHTML = "RRT settings";
    realLevelNum = setting.getVchipLevelNum(firstSubmenuPosition_h,secondSubmenuPosition_h);
    useString = [];//清空数组
    for(var k = 0;k<realLevelNum;k++)
        useString[k] = setting.getVchipLevelInfo(firstSubmenuPosition_h,secondSubmenuPosition_h,k);

    for(var i = 0;i<ITEM_NUM ;i++)
    {
        thdMenuRightLiList[ + i+ menuFlag * ITEM_NUM].style.display="block";
    }
    if(realLevelNum>ITEM_NUM)
    {
        stringnum = ITEM_NUM;
        $("listDownRemind").style.display="block";
        $("listUpRemind").style.display="block";
    }
    else
    {
        stringnum = realLevelNum;
        $("listDownRemind").style.display="none";
        $("listUpRemind").style.display="none";
        for(var i = 0;i<ITEM_NUM - realLevelNum;i++)
        {
            thdMenuRightLiList[realLevelNum + i+ menuFlag * ITEM_NUM].style.display="none";
        }
    }
    showTheImage();
//alert("the num is " + realLevelNum);
    list_position_h = 0;
    if(list_position_h >=ITEM_NUM)
        startindex = list_position_h - ITEM_NUM + 1;
    for(var i =  0; i < stringnum; i++)
    {
        thdMenuRightSpanList[i+1+ menuFlag * ITEM_NUM].innerHTML = setting.getVchipLevelInfo(firstSubmenuPosition_h,secondSubmenuPosition_h,i +startindex);
        //alert("the name" + thdMenuRightSpanList[i+1+ menuFlag * ITEM_NUM].innerHTML);
    }

    $("fifthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*(list_position_h-startindex) + "px";
}

function secondMenuinit()
{
    var realDimensionNum = 0;
    $("showFirstMenu").style.display="none";
    $("showSecondMenu").style.display="block";
    $("showThirdMenu").style.display="none";
    startindex = 0;
    menuFlag = 1;
    thdMenuRightSpanList[0].innerHTML = "RRT settings";
    realDimensionNum = setting.getVchipDimensionNum(firstSubmenuPosition_h);
    useString = [];//清空数组
    for(var k = 0;k<realDimensionNum;k++)
        useString[k] = setting.getVchipDimensionInfo(firstSubmenuPosition_h,k);
    for(var i = 0;i<ITEM_NUM ;i++)
    {
        thdMenuRightLiList[ + i+ menuFlag * ITEM_NUM].style.display="block";
    }
    if(realDimensionNum>ITEM_NUM)
    {
        stringnum = ITEM_NUM;
        $("listDownRemind").style.display="block";
        $("listUpRemind").style.display="block";
    }
    else
    {
        stringnum = realDimensionNum;
        $("listDownRemind").style.display="none";
        $("listUpRemind").style.display="none";
        for(var i = 0;i<ITEM_NUM - realDimensionNum;i++)
        {
            thdMenuRightLiList[realDimensionNum + i+ menuFlag * ITEM_NUM].style.display="none";
        }
    }
    list_position_h = secondSubmenuPosition_h;
    if(list_position_h >=ITEM_NUM)
        startindex = list_position_h - ITEM_NUM + 1;
    for(var i =  0; i < stringnum; i++)
    {
        thdMenuRightSpanList[i+1+ menuFlag * ITEM_NUM].innerHTML = setting.getVchipDimensionInfo(firstSubmenuPosition_h,i +startindex);
    }

    $("fifthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*(list_position_h-startindex) + "px";
}
function addMouseListener()
{
    document.body.onmousedown = function(evt){evt.preventDefault();
        top.timeoutFuc.osdTimeoutEndFuc();
        if(evt.button == 2) toBack();//right key
        top.timeoutFuc.osdTimeoutStartFuc();
    }

    for(var i = 0; i < 3 * ITEM_NUM; i++)
    {
        thdMenuRightLiList[i].setAttribute("newAttr",i);
        thdMenuRightLiList[i].onmousedown = function(evt){
            top.timeoutFuc.osdTimeoutEndFuc();
            if(evt.button == 0){//left key
                if(focusOn == "firstMenu")
                {
                    list_position_h = parseInt(this.getAttribute("newAttr")) ;
                    list_position_h = list_position_h + startindex;
                    $("fifthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*(list_position_h- startindex) + "px";
                    doEnter();
                }
                else if(focusOn == "secondMenu")
                {
                    list_position_h = parseInt(this.getAttribute("newAttr")) - ITEM_NUM;
                    list_position_h = list_position_h + startindex;
                    $("fifthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*(list_position_h- startindex) + "px";
                    doEnter();
                }
                else if(focusOn == "thirdMenu")
                {
                    list_position_h = parseInt(this.getAttribute("newAttr")) - 2 * ITEM_NUM ;
                    list_position_h = list_position_h + startindex;
                    $("fifthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*(list_position_h- startindex) + "px";
                    doEnter();
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
    top.ttsLog("list_position_h=" + list_position_h);
    //top.ttsLog("focus_off_set="+focus_off_set);
    top.ttsLog("parent.currentShowMenu=" + parent.currentShowMenu);
    //$("listForm").style.display = "none";
    //top.ttsLog("$('listForm').style.display ="+$("listForm").style.display );
    var ttsStr = "";
    var currentStatus = "";
    var currentName = "";
    var ttsName = "";

    function isSelected(selectedFlag)
    {
        if(selectedFlag)
        {
            return "selected";
        }
        else
        {
            return "not selected";
        }
    }
    if((("firstMenu" == focusOn) || ("secondMenu" == focusOn)) && (4 == parent.currentShowMenu))
    {
        ttsName = useString[list_position_h] + ",";
        currentStatus = "";
    }
    if(("thirdMenu" == focusOn) && (4 == parent.currentShowMenu))
    {
        ttsName = useString[list_position_h] + ",";
        currentStatus = isSelected(setting.getVchipLevelBlock(firstSubmenuPosition_h,secondSubmenuPosition_h,list_position_h) !=0);
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