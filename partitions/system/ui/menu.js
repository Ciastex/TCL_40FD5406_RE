var positionV = 0;
var menuListName = top.menuOptions;
var menuListPicture = [["images/SS_icon/Cross_UI_SS_icon-1-1.png", "images/SS_icon/Cross_UI_SS_icon-2-1.png", "images/SS_icon/Cross_UI_SS_icon-3-1.png", "images/SS_icon/Cross_UI_SS_icon-4-1.png", "images/SS_icon/Cross_UI_SS_icon-5-1.png"], ["images/SS_icon/Cross_UI_SS_icon-1-2.png", "images/SS_icon/Cross_UI_SS_icon-2-2.png", "images/SS_icon/Cross_UI_SS_icon-3-2.png", "images/SS_icon/Cross_UI_SS_icon-4-2.png", "images/SS_icon/Cross_UI_SS_icon-5-2.png"]];
var SUB_MENU_START = 140;					//menu菜单焦点移动起始位置
var SUB_MENU_STEP = 120;					//menu主菜单焦点移动的step
var imgs;                                           //获取menu图片列表
var menuLists;                                      //获取menu li列表
var urls = ["userPictureSet.html", "soundSet.html", "channelSet.html","smartTVSet.html", "networkSetting.html", "systemSet.html","supportSet.html"];
document.onsystemevent = notifyProcess;
var menuOptions		= ["Picture","Sound","Channel","Smart TV","Network","System","Support"];
var menuList =
    [
        {name:"Picture"			         ,  param:function(){        },	urls:"userPictureSet.html",	showFlag:1},
        {name:"Sound"               	 ,  param:function(){		  }, 	urls:"soundSet.html",	showFlag:1},
        {name:"Channel"               	 ,  param:function(){		  }, 	urls:"channelSet.html",	showFlag:1},
        {name:"Smart TV"               	 ,  param:function(){		  }, 	urls:"smartTVSet.html",	showFlag:1},
        {name:"Network"               	 ,  param:function(){		  }, 	urls:"networkSetting.html",	showFlag:1},
        {name:"System"               	 ,  param:function(){		  }, 	urls:"systemSet.html",	showFlag:1},
        {name:"Support"                  ,  param:function(){	      }, 	urls:"supportSet.html",	showFlag:1}
    ];

function keyproc(evt)
{
    var ret = true;
    var keycode = evt.which;
    switch (keycode)
    {
        case top.VK_UP:
        {
            //up
            oldPosition = positionV;
            toUp();
            ttsRead();
            newPosition = positionV;
            doElementScroll();
            ret = false;
            break;
        }

        case top.VK_DOWN:
        {
            //down
            oldPosition = positionV;
            toDown();
            ttsRead();
            newPosition = positionV;
            doElementScroll();
            ret = false;
            break;
        }
        case top.VK_RIGHT:
        case top.VK_ENTER:
        {
            //OK 键
            toOk();
            ret = false;
            break;
        }
        case top.VK_BACK: //back
        case top.VK_LEFT:
            toBack();
            ret = false;
            break;
        case top.VK_EXIT:
            if(top.g_setting.location != 0 && top.iseStickerPlaying == 1)
            {
                top.$("otherPage").src = "";
                top.$("operatePage").src = "";
                top.requestFocus(top.main, 1);
                top.setFrameFocusPage("main");
                top.showEsticker();
                ret = false;
                break;
            }
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

function notifyProcess(evt)
{
    top.g_channel.testLog("in menu notifyProcess");
    var msg = evt.which;
    switch (msg)
    {
        case top.E_REFRESH_PICTURE_SIZE:
        {
            if (positionV == 0)
            {
                parent.$("subMenu1").contentWindow.updatePicture();
            }
            break;
        }
        default:
            top.systemEventProc(evt);
            break;
    }

}

function toDown()
{
    if (parent.onLoadPage == 0)
    {
        top.g_channel.testLog("menu  down onLoadPage  0.....");
        return;
    }
    if (findName(positionV) == findLastName())
    {
        positionV = findPosition(findFirstName());
    }
    else
    {
        positionV++;
    }
    $("menuFocus").style.top = SUB_MENU_START + positionV * SUB_MENU_STEP + "px";
    parent.jumpPage(1, findUrls(positionV));
}
function toUp()
{
    if (parent.onLoadPage == 0)
    {
        top.g_channel.testLog("menu  up onLoadPage  0.....");
        return;
    }
    if (findName(positionV) == findFirstName())
    {
        positionV = findPosition(findLastName());
    }
    else
    {
        positionV--;
    }
    $("menuFocus").style.top = SUB_MENU_START + positionV * SUB_MENU_STEP + "px";
    parent.jumpPage(1, findUrls(positionV));
}
function toOk()
{
    if (parent.onLoadPage == 0)
    {
        top.g_channel.testLog("menu  onLoadPage  0.....");
        return;
    }
    parent.showSubMenu1Focus();
}
function toBack()
{
    parent.returnPage(0);

}

function checkShowMenu()
{
    if((1 == top.appOpenFlag) || (top.timeShiftStatusFlag == 1) || (top.recordStatusFlag == 1))//隐藏 channel 菜单 add liukl
    {
        menuList[0].showFlag = 1;
        menuList[1].showFlag = 1;
        menuList[2].showFlag = 0;
        menuList[3].showFlag = 1;
        menuList[4].showFlag = 1;
        menuList[5].showFlag = 1;
        menuList[6].showFlag = 1;
    }
    else if("media" == top.preTempPage)
    {
        if (top.$("main").src.indexOf("picturePlay.html") != -1)
        {
            menuList[0].showFlag = 0;
            menuList[1].showFlag = 1;
            menuList[2].showFlag = 0;
            menuList[3].showFlag = 1;
            menuList[4].showFlag = 1;
            menuList[5].showFlag = 1;
            menuList[6].showFlag = 1;
        }
        else
        {
            menuList[0].showFlag = 1;
            menuList[1].showFlag = 1;
            menuList[2].showFlag = 0;
            menuList[3].showFlag = 1;
            menuList[4].showFlag = 1;
            menuList[5].showFlag = 1;
            menuList[6].showFlag = 1;
        }
    }
    else if("homePage" == top.preTempPage || top.g_channel.inputSource > 1)
    {
        menuList[0].showFlag = 1;
        menuList[1].showFlag = 1;
        menuList[2].showFlag = 0;
        menuList[3].showFlag = 1;
        menuList[4].showFlag = 1;
        menuList[5].showFlag = 1;
        menuList[6].showFlag = 1;
    }
    else
    {
        menuList[0].showFlag = 1;
        menuList[1].showFlag = 1;
        menuList[2].showFlag = 1;
        menuList[3].showFlag = 1;
        menuList[4].showFlag = 1;
        menuList[5].showFlag = 1;
        menuList[6].showFlag = 1;
    }
}

function showItems()
{
    showItemNum = 0;

    for (var i = 0; i < menuList.length; i++)
    {
        if (menuList[i].showFlag == 1)
        {
            menuLists[i].style.display = "block";
            showItemNum++;
        }
        else if (menuList[i].showFlag == 0)
        {
            menuLists[i].style.display = "none";
        }
        else
        {
            menuLists[i].style.display = "none";
        }
    }
}
/*
 描述：menu language切换获取新的显示数据
 */
function refreshUIWhenLanguageChange()
{
    top.initTextDirection(window);
    menuListName = top.menuOptions;
    for (var i = 0; i < menuList.length; i++)
    {
        var divs = menuLists[i].getElementsByTagName("div");
        divs[1].innerHTML = menuListName[i];
        divs[1].setAttribute("contentText", divs[1].innerHTML);
    }
}

var oldPosition = 0;
var newPosition = 0;
function doElementScroll()
{
    setScrollAttribute(menunameClassList, oldPosition, newPosition);
    /*setTimeout(function(){*/
    resetScrollHtmlInner(menunameClassList, oldPosition, newPosition);//},1);
}

function isOverflowed(element)
{
    return element.scrollWidth > element.clientWidth;
}

/*
 把整个列表属性更改，如果当前焦点选项真实句子长度长于预留的长度则需要做滚动显示
 htmlTagList:内容标签列表；oldFocusPositon：原来的焦点位置；newfocusPosition：当前焦点选项在内容标签上的位置
 */
function setScrollAttribute(htmlTagList, oldFocusPositon, newfocusPosition)
{
    if (oldFocusPositon != newfocusPosition)
    {
        //恢复老焦点
        htmlTagList[oldFocusPositon].style.overflowX = "hidden";
        htmlTagList[oldFocusPositon].style.textOverflow = "ellipsis";
        htmlTagList[oldFocusPositon].innerHTML = "";
    }

    //根据情况刷新新焦点
    htmlTagList[newfocusPosition].setAttribute("contentText", htmlTagList[newfocusPosition].innerHTML);
    if (isOverflowed(htmlTagList[newfocusPosition]))//如果当前焦点选项真实句子长度长于预留的长度则需要做滚动显示
    {
        htmlTagList[newfocusPosition].style.overflowX = "-webkit-marquee";
        htmlTagList[newfocusPosition].style.textOverflow = "clip";
        /*htmlTagList[i].innerHTML = tempText;*/
    }
    else
    {
        htmlTagList[newfocusPosition].style.overflowX = "hidden";
        htmlTagList[newfocusPosition].style.textOverflow = "ellipsis";
        /*htmlTagList[i].innerHTML = tempText;*/
    }
    htmlTagList[newfocusPosition].innerHTML = "";
}
/*
 重新为整个列表属性更改完成的列表赋值
 htmlTagList:内容标签列表；ListLength：当前有内容的列表标签的个数
 */
function resetScrollHtmlInner(htmlTagList, oldFocusPositon, newfocusPosition)
{
    htmlTagList[oldFocusPositon].innerHTML = htmlTagList[oldFocusPositon].getAttribute("contentText");
    htmlTagList[newfocusPosition].innerHTML = htmlTagList[newfocusPosition].getAttribute("contentText");
}

var menunameClassList;
function init()
{
    top.initTextDirection(window);
    menuLists = $("menu").getElementsByTagName("li");
    menunameClassList = $("menu").getElementsByClassName("menuname");
    imgs = $("menu").getElementsByTagName("img");
    for (var i = 0; i < 7; i++)
    {
        var divs = menuLists[i].getElementsByTagName("div");
        divs[1].innerHTML = menuListName[i];
    }
    checkShowMenu();
    initMenuFocus();
    showItems();
    addMouseListener();
    doElementScroll();
    if (top.g_setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1") != "0")
    {
        top.g_setting.setMEMC(0);
    }
}
function uninit()
{
    if (top.g_setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_Tcon_type", "1") != "0")
    {
        top.g_setting.setMEMC(1);
    }
    top.timeoutFuc.timeoutEnable = 1;
    top.clearMyTimeout();
    if(top.g_setting.location != 0 && top.iseStickerPlaying == 1)
    {
        top.$("otherPage").src = "";
        top.$("operatePage").src = "";
        top.requestFocus(top.main, 1);
        top.setFrameFocusPage("main");
        top.showEsticker();
    }
}
function timeoutInit()
{
    top.timeoutFuc.timeoutEnable = 1;
    document.onkeydown = top.timeoutMyFuc;
    top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyproc;
}
/*
 描述：根据焦点位置显示焦点
 */
function initFocus(focusP)
{
    var pos = 0;
    for (var i = 0; i < focusP; i++)
    {
        if (menuList[i].showFlag == 1)
        {
            pos++;
        }
    }
    positionV = pos;
    $("menuFocus").style.top = SUB_MENU_START + positionV * SUB_MENU_STEP + "px";
}

function addMouseListener()
{
    document.body.onmousedown = function (evt)
    {
        evt.preventDefault();
        if (evt.button == 2) toBack();//right key
    }
    var Listlength = menuList.length;
    var newAttrIndex = -1;
    for (var i = 0; i < Listlength; i++)
    {
        if(1 == menuList[i].showFlag)
        {
            newAttrIndex++;
        }
        else
        {
            continue;
        }

        menuLists[i].setAttribute("newAttr", newAttrIndex);
        menuLists[i].onmousedown = function (evt)
        {
            if (evt.button == 0)
            {//left key
                top.timeoutFuc.osdTimeoutEndFuc();
                oldPosition = positionV;
                positionV = parseInt(this.getAttribute("newAttr"));
                $("menuFocus").style.top = SUB_MENU_START + positionV * SUB_MENU_STEP + "px";
                parent.$("subMenu1").src = "";
                parent.$("subMenu2").src = "";
                parent.$("subMenu3").src = "";
                parent.$("subMenu4").src = "";
                $("menuFocus").src = parent.mentFocusImg[0];
                document.body.focus();
                if (document.hasFocus())
                {
                    console.log("Menu get focus!!!");
                }
                else
                {
                    console.log("Menu do not get focus!!!");
                }
                newPosition = positionV;
                doElementScroll();
                setTimeout(function ()
                {
                    parent.jumpPage(1, findUrls(positionV));
                    //setTimeout("toOk()",300);
                    if (document.hasFocus())
                    {
                        console.log("Menu has get focus!!!");
                    }
                    else
                    {
                        console.log("Menu do not has get focus!!!");
                    }

                    parent.currentShowMenu = 0;
                    parent.focusToMenu();
                    timeoutInit();
                    //parent.hiddenSubMenu1Focus();
                    parent.setIndexFocusPage("homeMenu");
                }, 200);
                top.timeoutFuc.osdTimeoutStartFuc();
            }
        }

    }
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
function findUrls(postion)
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
            return  menuList[i].urls;
        }
    }
    return false;
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

function initMenuFocus()
{
    ttsRead();
    if (top.g_nextHtmlPage == "common_interface.html" || top.g_nextHtmlPage == "ciList.html")
    {
        positionV = 5;
        initFocus(positionV);
        //$("menuFocus").style.top = SUB_MENU_START + positionV * SUB_MENU_STEP + "px"
    }
    else if (top.g_nextHtmlPage == "channelScan.html")
    {
        positionV = 2;
        initFocus(positionV);
    }
    else if (top.g_nextHtmlPage == "channelSet.html")
    {
        positionV = 2;
        initFocus(positionV);
    }
    else if (top.g_nextHtmlPage == "autoSearch.html" || top.g_nextHtmlPage == "autoUpdate.html")
    {
        positionV = 2;
        initFocus(positionV);
    }
    else if (top.g_nextHtmlPage == "networkSetting.html" || top.g_nextHtmlPage == "wirelessScan.html")
    {
        positionV = 4;
        initFocus(positionV);
    }
    else
    {
        timeoutInit();
        positionV = 0;
        initFocus(positionV);
    }
    oldPosition = positionV;
    newPosition = positionV;
}

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
    if(0 == parent.currentShowMenu || 1 == parent.currentShowMenu)
    {
        switch(currentName)
        {
            case "Picture":
                ttsName = menuListName[0];
                currentStatus = "";
                break;
            case "Sound":
                ttsName = menuListName[1];
                currentStatus = "";
                break;
            case "Channel":
                ttsName = menuListName[2];
                currentStatus = "";
                break;
            case "Smart TV":
                ttsName = menuListName[3];
                currentStatus = "";
                break;
            case "Network":
                ttsName = menuListName[4];
                currentStatus = "";
                break;
            case "System":
                ttsName = menuListName[5];
                currentStatus = "";
                break;
            case "Support":
                ttsName = menuListName[6];
                currentStatus = "";
                break;
            default:
                ttsName = "";
                currentStatus = "";
                break;
        }
    }
    ttsStr = ttsName + currentStatus;
    if("" != ttsStr)
    {
        top.ttsLog("ttsStr=" + ttsStr);
        top.setTTSSay(top.SPEECH_TYPE_FLUSH, ttsStr);
    }
}