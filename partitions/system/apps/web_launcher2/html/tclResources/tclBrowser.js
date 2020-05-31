var VK_LEFT = 37,
VK_UP = 38,
VK_RIGHT = 39,
VK_DOWN = 40,
VK_RETURN = 8,
VK_EXIT = 27,
MAX_TAB_NUM = 6,
VK_ENTER = 13,
//enter
VK_INFO = 57347;
var g_activeTabName, g_openTabNames = [],
g_nowFocusId,
g_nowFocusClass,
g_isPressInfoCreated = false,
g_showLoading = false,
//指示loading能否显示
g_toolbar = $("toolbar"),
g_inputUrl = $("inputUrl"),
g_morePopupBox = $("morePopupBox"),
g_addTab = $("addTab"),
g_tabList = $("tabList"),
g_tabIndex = 0,
g_edit = $("edit"),
g_edit_H = $("edit_H"),
g_a_Favorite = $("a_Favorite"),
g_a_History = $("a_History"),
g_mouseMode = "enable", // disable 表示按键，enable 表示是鼠标
g_userAgentMode = "Mobile", // PC 表示 使用pc的ua,Mobile 表示使用安卓手机的ua
g_isHappenedError = false,//是否发生报错的标志位
g_timer = null;   //记录导航栏自动消失的timer
function $(ById) {
    return document.getElementById(ById);
}
function displayHide(ele) {
    $(ele).style.display = "none";
}
function displayShow(ele) {
    $(ele).style.display = "block";
}
function changeStateIMG(id, src) {
    var src = "./tclResources/img_1280/" + src;
    $(id).getElementsByTagName("img")[0].src = src;
}

function resetActiveTab(evt, active_tabName) { //reset active tab
    g_activeTabName = active_tabName;
    var liClass = g_tabList.getElementsByTagName("li");
    for (var i = 0; i < liClass.length; i++) {
        if (liClass[i].id == active_tabName) {
            liClass[i].className = "active";
            console.log("[js]----resetActiveTab----active_tabName:" + active_tabName);
            evt.preventDefault();
            $(active_tabName).firstElementChild.focus();
        } else {
            liClass[i].className = "";
            liClass[i].removeAttribute("style");
        }
    }
}

function startUrl() { //get start URL
    var url = "http://browsernav.api.my7v.com/tvbase/pageSearchApi/redirect";
    var clientType = TBrowser.getClientType();
    var countryCode = TBrowser.getCountryCode();
    var customerCode = TBrowser.getCustomerCode();
    var menuLanguage = TBrowser.getMenuLanguage();
    if (clientType != null && clientType != "") {
        url = url + "?clientType=" + clientType;
    }
    if (countryCode != null && countryCode != "") {
        url = url + "&country=" + countryCode;
    }
    if (customerCode != null && customerCode != "") {
        url = url + "&customerCode=" + customerCode;
    }
    if (menuLanguage != null && menuLanguage != "") {
        url = url + "&language=" + menuLanguage;
    }
    console.log("--------startUrl--URL=" + url);
    return url;
}
function addTab(evt) { //add new tab
    var li = document.createElement("li");
    li.id = "tab_" + g_tabIndex++;
    li.className = "active";
    g_tabList.appendChild(li);
    li.innerHTML = '<button class="a_btn"><img class="loading" src="tclResources/img_1280/icon-t.png"><i>new tab</i></button><button class="close_btn"></button>';
    if (li.id == "tab_0") {
        TBrowser.openTab(li.id, startUrl() + "&type=homepage");
    } else {
        TBrowser.openTab(li.id, startUrl() + "&type=navigationPage");
    }
    console.log("addTab---g_openTabNames:[" + g_openTabNames + "]  addTab tab_name = " + li.id);
    switchTab(evt, li.id); //switch new tab
    g_openTabNames.push(li.id);
    if (g_tabList.childNodes.length >= MAX_TAB_NUM) { //six tabs
        g_addTab.style.display = "none"; //hide "+" button
        g_tabList.lastElementChild.style.backgroundImage = 'url("./tclResources/img_1280/tab-labels-f1.png")';
        evt.preventDefault();
        g_tabList.lastElementChild.firstElementChild.focus();
        return false;
    } else {
        g_addTab.focus();
    }
}
function closeTab(evt, tab_name) {
    var _target = $(tab_name);
    if (_target == null || typeof(_target) == "undefined" || _target.parentNode.id != "tabList") return;
    console.log("closeTab---tab_name = " + tab_name + ",active_tabName = " + g_activeTabName);
    if (g_tabList.childElementCount == 1) { //only one tab
        onClickExit();
        return false;
    }
    if (g_activeTabName == tab_name) { //close active tab 
        if (_target == g_tabList.lastElementChild) { //close the last tab
            var switch_tabName = g_openTabNames[g_openTabNames.length - 2];
            switchTab(evt, switch_tabName);
            closeTabFocusMove("last", _target);
        } else {
            var switch_tabName = g_openTabNames[g_openTabNames.indexOf(tab_name) + 1];
            switchTab(evt, switch_tabName);
            closeTabFocusMove("nolast", _target);
        }
    } else { //close the tab which is not active
        if (_target == g_tabList.lastElementChild) { //close the last tab
            closeTabFocusMove("last", _target);
        } else {
            closeTabFocusMove("nolast", _target);
        }
    }
    g_tabList.removeChild(_target);
    g_openTabNames.splice(g_openTabNames.indexOf(tab_name), 1);
    var liLength = g_tabList.childNodes.length;
    if (liLength == 0) {
        g_addTab.style.display = "none";
        onClickExit();
    } else {
        g_addTab.style.display = "inline-block";
    }
}
function switchTab(evt, tab_name) {
    console.log("switchTab---tab_name = " + tab_name + ",active_tabName = " + g_activeTabName + ",g_openTabNames:[" + g_openTabNames + "]");
    var target = $(tab_name);
    if (target == null || typeof(target) == "undefined" || target.parentNode.id != "tabList" || tab_name == g_activeTabName) return;
    TBrowser.closeTab(g_activeTabName);
    var url = $(tab_name).getAttribute("tab_url"); //get the last url
    TBrowser.openTab(tab_name, url);
    resetActiveTab(evt, tab_name);
    canGoBackorForward();
    TBrowser.switchTab(tab_name);
    evt.preventDefault();
    $(tab_name).firstElementChild.focus();
}
var SystemEvent = {
  TOS_WebBrowser_EVENT_SHOW_TOOLBAR:1000, //显示地址栏
  TOS_WebBrowser_EVENT_ImeOpen:1001, //输入法按了enter
  TOS_WebBrowser_EVENT_ImeEnter:1002, //输入法按了enter
  TOS_WebBrowser_EVENT_TBrowserCallBack:1003, //浏览器回调消息事件
}
var TBrowserEvent = {
  TOS_TBROWSER_CBEVENT_TYPE_CHANGE_URL:0,                ///<切换页面的消息,code是const char*类型,表示要切换到的新的URL地址
  TOS_TBROWSER_CBEVENT_TYPE_LOAD_PAGE_START:1,           ///<开始加载新页面,code是const char*类型,表示加载的URL地址
  TOS_TBROWSER_CBEVENT_TYPE_LOAD_PAGE_END:2,             ///<页面加载结束,code是const char*类型,表示加载的URL地址
  TOS_TBROWSER_CBEVENT_TYPE_LOAD_FRAME_START:3,          ///<开始加载新frame,code是const char*类型,表示加载的URL地址
  TOS_TBROWSER_CBEVENT_TYPE_LOAD_FRAME_END:4,            ///<frame加载结束,code是const char*类型,表示加载的URL地址
  TOS_TBROWSER_CBEVENT_TYPE_PROGRESS_CHANGED:5,        ///<加载进度变化,code是int类型,表示进度比,取值0-100
  TOS_TBROWSER_CBEVENT_TYPE_UNHANDLED_KEYEVENT:6,        ///<处理浏览器未处理的按键事件    TOS_TBROWSER_CBEVENT_TYPE_SHOULD_OVERRIDE_KEYEVENT,  ///<是否浏览器按键事件,浏览器接收到遥控器事件后会先发送此消息进行询问,
  TOS_TBROWSER_CBEVENT_TYPE_SHOULD_OVERRIDE_KEYEVENT:7,  ///<是否浏览器按键事件,浏览器接收到遥控器事件后会先发送此消息进行询问,
                                                            ///<返回0表示不处理,直接交给浏览器;返回-1表示应用在回调中自己处理此消息,不要浏览器处理.
                                                            ///<code是TBrowserEvent_S*类型                                                         
  TOS_TBROWSER_CBEVENT_TYPE_LOAD_URL_FAILED:8,            ///<URL打开失败,code是int类型,表示失败的错误码,取值                                              
  TOS_TBROWSER_CBEVENT_TYPE_WINDOW_CLOSE:9,               ///<需要关闭应用>
  TOS_TBROWSER_CBEVENT_TYPE_CANNOT_SCROLL:10,              ///<页面在某个方向上已经不能滚动>code是int 类型,详见FocusDirection.h文件中的定义。
  TOS_TBROWSER_CBEVENT_TYPE_Input_Method_State_Changed:11,             ///<当前页面焦点是否可输入, 0代表不可输入,其它代表可输入
  TOS_TBROWSER_CBEVENT_TYPE_RENDER_EXIT:12,                ///RENDER进程非正常退出了
  TOS_TBROWSER_CBEVENT_TYPE_RENDER_MEMORY_PRESSURE:13,     ///render进程的内存使用情况
  TOS_TBROWSER_CBEVENT_TYPE_V8_MEMORY_MAX_USE:14           ///V8使用内存超出最大值时情况，建议应用销毁render
}
var TosMessageEvent = {
  CMD_UI_NOTIFY_NETWORK_CONNECT_TEST_SUCCESS:1140,//add by hzz 2013.11.19
  CMD_UI_NOTIFY_NETWORK_CONNECT_TEST_FAIL:1141 //add by hzz 2013.11.19
}
function systemEventProcess(evt) {
    var eventCode = evt.eventCode;
    console.log("systemEventProcess-------eventCode = " + eventCode);
    if (eventCode == SystemEvent.TOS_WebBrowser_EVENT_SHOW_TOOLBAR) {
        console.log("systemEventProcess---TOS_WebBrowser_EVENT_SHOW_TOOLBAR");
        showToolBar();
        g_inputUrl.focus();
    } else if (eventCode == SystemEvent.TOS_WebBrowser_EVENT_ImeOpen) { //1001 打开输入法
        console.log("TOS_WebBrowser_EVENT_ImeOpen");
    } else if (eventCode == SystemEvent.TOS_WebBrowser_EVENT_ImeEnter) { //输入法中按enter键直接调用onClickGo()
        onClickGo();
    } else if (eventCode == SystemEvent.TOS_WebBrowser_EVENT_TBrowserCallBack) {//处理浏览器回调事件
        console.log("systemEventProcess-------eventData = " + evt.eventData);
        var json = JSON.parse(TBrowser.getTVOSEventData("WebBrowser", evt.eventData));
        console.log("systemEventProcess-------event_code = " + json.event_code);
        if (json.event_code == TBrowserEvent.TOS_TBROWSER_CBEVENT_TYPE_LOAD_PAGE_START) { //load start
            $(json.page_name).setAttribute("tab_url", json.code);
            var str = '<button class="a_btn"><img  class="loading" src="tclResources/img_1280/icon-t.png">' + json.code + '</button><button class="close_btn"></button>';
            canGoBackorForward();
            if ($("toolbar").style.display == "none") {
                $("loading").style.visibility = "visible";
                g_showLoading = true;
                setTimeout(function() {
                	$("loading").style.visibility = "hidden"
                }, 30000);
            }
        } else if (json.event_code == TBrowserEvent.TOS_TBROWSER_CBEVENT_TYPE_LOAD_PAGE_END) { //load finish
            $("loading").style.visibility = "hidden"; //hide "loading"
            g_showLoading = false;
            var str = '<button class="a_btn"><img src="' + TBrowser.getIcon(json.page_name) + '" onerror="javascript:this.src=\'tclResources/img_1280/icon-t1.png\'"><span><i>' + TBrowser.getTitle(json.page_name) + '</i></span></button><button class="close_btn"></button>';
            isWeburlCollected("favorite", TBrowser.getUrl(json.page_name));
            $(json.page_name).innerHTML = str;
            var dataArr = {
                'weburl': TBrowser.getUrl(json.page_name),
                'icon': TBrowser.getIcon(json.page_name)
            };
            localStorageData("history", dataArr); //save the history
            console.log("---json.page_name=" + json.page_name + "----g_activeTabName=" + g_activeTabName);
            if (json.page_name == g_activeTabName) {
                canGoBackorForward();
            }
        } else if (json.event_code == TBrowserEvent.TOS_TBROWSER_CBEVENT_TYPE_RENDER_MEMORY_PRESSURE && g_isHappenedError == false) { //memory use too much
            console.log("systemEventProcess---TOS_TBROWSER_CBEVENT_TYPE_RENDER_MEMORY_PRESSURE----");
            showErrorBox(-13,"The web content  is overloaded.The browser will shut down in a few seconds!");
            setTimeout(onClickExit(),10000);
        } else if (json.event_code == TBrowserEvent.TOS_TBROWSER_CBEVENT_TYPE_CHANGE_URL) {
          console.log("systemEventProcess---TOS_TBROWSER_CBEVENT_TYPE_CHANGE_URL----json.code = "+json.code);
          TBrowser.loadUrl(json.page_name, json.code);
        }
    }
}
function keyDownProcess(evt) {    
    var keyCode = evt.keyCode || evt.which;
    if (keyCode !== VK_RETURN && !(keyCode == VK_DOWN && (document.activeElement.parentNode.id == "divinput" || document.activeElement.parentNode.id == "toolbar"))) {
        setTimeout(evt => resetTimer(evt));     // 每次按键重置隐藏地址栏的计时器
    }
    var target = evt.target || evt.srcElement;
    g_nowFocusId = document.activeElement.id;
    g_nowFocusClass = document.activeElement.className;
    console.log("keyDownProcess-------keyCode = " + keyCode);
    ifActiveTabBlurFocus(); //reset active tab focus
    var ret = false;
    if (g_isHappenedError && keyCode != VK_EXIT && keyCode != VK_ENTER)
      return false;
    switch (keyCode) {
    case VK_LEFT:
        ret = keydownLeft(evt);
        break;
    case VK_UP:
        ret = keydownUp(evt);
        break;
    case VK_RIGHT:
        ret = keydownRight(evt);
        break;
    case VK_DOWN:
        ret = keydownDown(evt);
        break;
    case VK_RETURN:
        ret = keydownReturn(evt);
        break;
    case VK_EXIT:
        onClickExit();
        break;
    case VK_ENTER:
        ret = keydownEnter(evt);
        break;
    case VK_INFO:
        canGoBackorForward();
        break;
    default:
        break;
    }
    console.log("keyDownProcess-------ret = " + ret);
    return true;
}
function keydownReturn(evt) {
    if ($("inputUrl").className != "propertychange" && $("inputUrl").value.length <= 0) {
        stopTitleMarquee(evt);
        hideToolBar(evt);
    }
}
function keydownEnter(evt) {
    var target = evt.target || evt.srcElement;
    if (g_nowFocusClass == "a_btn") {
        switchTab(evt, target.parentNode.id);
    }
    if (g_nowFocusClass == "close_btn") {
        closeTab(evt, target.parentNode.id);
    }
    if (g_nowFocusId == "addTab") {
        addTab(evt);
    }
    if (target.getAttribute("data-url")) {
        TBrowser.loadUrl(g_activeTabName, target.getAttribute("data-url"));
    }
    let nowKeyDown = g_nowFocusId || g_nowFocusClass;
    switchFocusIdResponse(evt, nowKeyDown);
}
function keydownUp(evt) {
    removeliBg();
    if (g_nowFocusClass == "" && g_nowFocusId == "" && document.activeElement.nodeName.toLowerCase() == "body") {
        g_inputUrl.focus();
    }
    if (g_nowFocusId == "addTab" || g_nowFocusClass == "a_btn" || g_nowFocusClass == "close_btn") {
        stopTitleMarquee(evt);
        g_inputUrl.focus();
    }
    if (g_nowFocusId == "edit") {
        evt.preventDefault();
        $("a_Favorite").focus();
    }
    if (g_nowFocusId == "edit_H") {
        evt.preventDefault();
        $("a_History").focus();
    }
    if (g_nowFocusId == "a_Favorite" || g_nowFocusId == "a_History") {
        evt.preventDefault();
        $("a_Home").focus();
        changeStateIMG("a_Home", "bookmark.png");
    }
    if (g_nowFocusId == "about") {
        evt.preventDefault();
        $("a_Menu").focus();
        changeStateIMG("a_Menu", "more.png");
    }

    if (g_nowFocusId == "about") {
        evt.preventDefault();
        $("a_Menu").focus();
        changeStateIMG("a_Menu", "more.png");
    }

    if (g_nowFocusId == "clearcacheCancel" || g_nowFocusId == "clearAllCookieCancel"|| g_nowFocusId == "clearcacheOK"|| g_nowFocusId == "clearAllCookieOK" ) {
        evt.preventDefault();
    }

    if (g_nowFocusId == "clearCache") {
        evt.preventDefault();
        changeStateIMG("a_Menu", "more1.png");
        displayHide("privacyPopupBox");
        displayShow("morePopupBox");
        $("privacy").focus();
    }
}
function keydownDown(evt) {
    if (g_nowFocusId == "a_Home") {
        changeStateIMG("a_Home", "bookmark1.png");
    }
    if (g_nowFocusId == "a_Menu") {
        changeStateIMG("a_Menu", "more1.png");
    }
    if (g_nowFocusId == "addTab" || document.activeElement.parentNode.parentNode.id == "tabList") {
        onTabPressDown(evt);
    }
    if (g_nowFocusId == "inputUrl" || g_nowFocusId == "a_Go") {
        toobarToFocusTab();
        hideToolBar(evt);
    }
    if (g_nowFocusId == "clearcacheCancel" || g_nowFocusId == "clearAllCookieCancel"|| g_nowFocusId == "clearcacheOK"|| g_nowFocusId == "clearAllCookieOK" || g_nowFocusId == "clearAllCookie") {
        evt.preventDefault();
    }

    if (document.activeElement.parentNode.id == "toolbar") {
        if ($("homePopupBox").style.display != "block" && $("morePopupBox").style.display != "block") {
            evt.preventDefault();
            if ($("aboutPopupBox").style.display == "block") {
                changeStateIMG("a_Menu", "more.png");
            }else{
                toobarToFocusTab();
                hideToolBar(evt);
            }
            return false;
        }
    }
}
function keydownLeft(evt) {
    tabGetFocus(evt, "left");
    if ($("homePopupBox").style.display == "block") {
        customHomeFocusMove(evt, "left");
    }
    if (g_nowFocusId == "a_Home") {
        displayHide("homePopupBox");
    }
    if (g_nowFocusId == "a_Menu") {
        displayHide("morePopupBox");
        displayHide("aboutPopupBox");
    }
    if (g_nowFocusId == "a_Favorite" || g_nowFocusId == "about"|| g_nowFocusId == "privacy" || g_nowFocusId == "mousemode" || g_nowFocusId == "changeua" || g_nowFocusId == "exit"|| g_nowFocusId == "clearCache"|| g_nowFocusId == "acceptCookies"|| g_nowFocusId == "clearAllCookie" || g_nowFocusId == "clearcacheCancel"|| g_nowFocusId == "clearAllCookieCancel") { //阻止焦点左移
        evt.preventDefault();
    }
    if (g_nowFocusId == "a_Star" && $(g_nowFocusId).className == "collect") {
        changeStateIMG("a_Star", "star.png");
    }
    if (g_nowFocusId == "a_Home" && $(g_nowFocusId).previousElementSibling.className == "collect") {
        changeStateIMG("a_Star", "star1.png");
    }
}
function keydownRight(evt) {
    tabGetFocus(evt, "right");
    if ($("homePopupBox").style.display == "block") {
        customHomeFocusMove(evt, "right");
    }
    if (g_nowFocusId == "addTab") {
        evt.preventDefault();
    }
    if (g_nowFocusId == "a_Home") {
        displayHide("homePopupBox");
    }
    if (g_nowFocusId == "a_History" || g_nowFocusId == "about" || g_nowFocusId == "privacy" || g_nowFocusId == "mousemode" || g_nowFocusId == "changeua" || g_nowFocusId == "exit"|| g_nowFocusId == "clearCache"|| g_nowFocusId == "acceptCookies"|| g_nowFocusId == "clearAllCookie" || g_nowFocusId == "clearcacheOK"|| g_nowFocusId == "clearAllCookieOK" ) { //阻止焦点右移
        evt.preventDefault();
    }
    if (g_nowFocusId == "a_Star" && $(g_nowFocusId).className == "collect") {
        changeStateIMG("a_Star", "star.png");
    }
    if (g_nowFocusId == "a_Go" && $(g_nowFocusId).nextElementSibling.className == "collect") {
        changeStateIMG("a_Star", "star1.png");
    }
}
function closeTabFocusMove(flag, ele) {
    if (flag == "last") { //the last tab
        g_tabList.lastElementChild.previousElementSibling.style.backgroundImage = 'url("./tclResources/img_1280/tab-labels-f1.png")';
        g_tabList.lastElementChild.previousElementSibling.firstElementChild.focus();
        g_tabList.lastElementChild.previousElementSibling.className = "active";
        marqueeFocusTitle(g_tabList.lastElementChild);
    }
    if (flag == "nolast") { //not the last tab
        ele.nextElementSibling.style.backgroundImage = 'url("./tclResources/img_1280/tab-labels-f1.png")';
        ele.nextElementSibling.firstElementChild.focus();
        marqueeFocusTitle(ele.nextElementSibling);
    }
}
function onMouseOver(e) {
    var target = e.target || e.srcElement;
    if (target.parentNode.className == "active") {
        target.parentNode.style.color = "#6e6e6e";
        target.parentNode.style.backgroundImage = "url(./tclResources/img_1280/tab-labels-hi.png)";
    }
}
function showToolBar() {
    console.log("--------showToolBar-------");
    $("loading").style.visibility = "hidden";
    displayShow("toolbar");
    displayShow("tab");
    canGoBackorForward();
}
function hideToolBar(evt) {
    console.log("---------hideToolBar-------");
    restoreHomeSetting("edit", "favoriteList", "favoriteTab");
    restoreHomeSetting("edit_H", "historyList", "historyTab");
    if ($("homePopupBox").style.display == "block") {
        displayHide("homePopupBox");
        evt.preventDefault();
        $("a_Home").focus();
        changeStateIMG("a_Home", "bookmark.png");
    } else if (($("morePopupBox").style.display == "block")) {
        displayHide("morePopupBox");
        evt.preventDefault();
        $("a_Menu").focus();
        changeStateIMG("a_Menu", "more.png");
    } else if (($("aboutPopupBox").style.display == "block")) {
        displayHide("aboutPopupBox");
        displayShow("morePopupBox");
        evt.preventDefault();
        $("a_Menu").focus();
        changeStateIMG("a_Menu", "more.png");
    } else if (($("privacyPopupBox").style.display == "block")) {
        displayHide("privacyPopupBox");
        displayShow("morePopupBox");
        evt.preventDefault();
        $("privacy").focus();
    } else {
        g_inputUrl.focus();
        removeliBg();
        displayHide("toolbar");
        displayHide("tab");
        if (g_showLoading == true) {
            $("loading").style.visibility = "visible";
        }
        if (g_isPressInfoCreated == false) {
            createDiv();
            g_isPressInfoCreated = true;
        }
        if(g_timer != null) {
            clearTimeout(g_timer);
        }
        TBrowser.hideToolBar();
    }
}
function customHomeFocusMove(evt, direction) { //homePopBox move focus
    var evt = window.event ? window.event: evt;
    var targetEle = evt.srcElement || evt.target;
    var target = targetEle.parentNode;
    while (target.nodeName.toLowerCase() != "div" && target.nodeName.toLowerCase() != "html") { //find "homePopupBox"
        target = target.parentNode;
    }
    if (target.id == "homePopupBox") {
        evt.preventDefault();
        if (direction == "left") {
            $("a_Favorite").focus();
            restoreHomeSetting("edit", "favoriteList", "favoriteTab");
        } else {
            $("a_History").focus();
            restoreHomeSetting("edit_H", "historyList", "historyTab");
        }
        return false;
    }
    if (direction == "left") {
        if (target.id == "favoriteTab" || target.id == "historyTab") {
            if (target.className.indexOf("lineup") > -1 && targetEle.nodeName.toLowerCase() == "button") { //如果是编辑状态 can not move left
                evt.preventDefault();
            } else if (target.className.indexOf("lineup") > -1 && targetEle.nodeName.toLowerCase() == "a") {
                target.previousElementSibling.focus();
            } else {
                evt.preventDefault();
            }
        }
        return false;
    }
    if (direction == "right") {
        if (target.id == "favoriteTab" || target.id == "historyTab") {
            evt.preventDefault();
        }
        return false;
    }
}
function restoreHomeSetting(id, showList, showTab) {
    $(id).innerHTML = "Edit";
    $(showList).className = "favorite_urlList";
    $(showTab).className = 'favoriteTab';
}
function toobarToFocusTab() {
    if ($("a_Star").className == "collect") {
        changeStateIMG("a_Star", "star.png");
    }
    changeStateIMG("a_Menu", "more.png");
    changeStateIMG("a_Home", "bookmark.png");
    var tags = g_tabList.getElementsByTagName("li");
    for (var i = 0; i < tags.length; i++) {
        if (tags[i].getAttribute("class") == "active") {
            tags[i].firstElementChild.focus();
            tags[i].style.backgroundImage = 'url("./tclResources/img_1280/tab-labels-f1.png")';
            marqueeFocusTitle(tags[i]);
        }
    }
}
function onTabPressDown(evt) {
    console.log("onTabPressDown");
    stopTitleMarquee(evt);
    hideToolBar();
}
function canGoBackorForward() {
    console.log("[js]-----canGoBackorForward()------" + g_activeTabName);
    var backCount = TBrowser.getBackCount(g_activeTabName);
    var forwardCount = TBrowser.getForwardCount(g_activeTabName);
    if (backCount > 0) {
        changeStateIMG("a_Back", "back.png");
    } else {
        changeStateIMG("a_Back", "cannotBack.png");
    }

    if (forwardCount > 0) {
        changeStateIMG("a_Forward", "next.png");
    } else {
        changeStateIMG("a_Forward", "cannotNext.png");
    }
}
function onClickBack() {
    var backCount = TBrowser.getBackCount(g_activeTabName);
    console.log("[js]-----onClickBack()-----backCount = " + backCount);
    if (backCount > 0) {
        TBrowser.goBack(g_activeTabName);
    }
    canGoBackorForward();
}
function onClickForward() {
    var forwardCount = TBrowser.getForwardCount(g_activeTabName);
    console.log("[js]-----onClickForward()-----forwardCount = " + forwardCount);
    if (forwardCount > 0) {
        TBrowser.goForward(g_activeTabName);
    }
    canGoBackorForward();
}
function onClickReload() {
    TBrowser.reload(g_activeTabName);
}
function onClickHome() {
    displayHide("morePopupBox");
    var isShow = $("homePopupBox").style.display;
    if (isShow == "block") {
        displayHide("homePopupBox");
    } else {
        displayShow("homePopupBox");
        onClickFavorite();
    }
}
function onClickMenu() {
    displayHide("homePopupBox");
    var isShow = $("morePopupBox").style.display;
    if (isShow == "block") {
        displayHide("morePopupBox");
    } else {
        displayShow("morePopupBox");
        displayHide("aboutPopupBox");
    }
}
function onClickAbout() {
    displayShow("aboutPopupBox");
    displayHide("morePopupBox");
    changeStateIMG("a_Menu", "more.png");
    $("a_Menu").focus();
}
function onClickPrivacy(){
    console.log('----onClickPrivacy-----'+localStorage.getItem('acceptCookies'));
    displayHide("morePopupBox");
    displayShow("privacyPopupBox");
    $("clearCache").focus();

    if (localStorage.getItem('acceptCookies') == "true") { 
        $("acceptCookiesCheckbox").setAttribute("class", "checkbox");
    } else {
        $("acceptCookiesCheckbox").removeAttribute("class");
    }
}
function onClickChangeUA() {
    console.log("onClickChangeUA---g_userAgentMode = " + g_userAgentMode);
    if (g_userAgentMode == "Mobile") {
        $("changeua").innerHTML = "PC UA";
        TBrowser.setMobileUA(false);
        g_userAgentMode = "PC";
    } else {
        $("changeua").innerHTML = "Mobile UA";
        TBrowser.setMobileUA(true);
        g_userAgentMode = "Mobile";
    }
}

function onClickExit() {
    console.log("onClickExit");
    //TBrowser.closeTab(g_activeTabName);
    TBrowser.closeApp();
}
function ifActiveTabBlurFocus() {
    var isBlurEle = document.activeElement.nodeName.toLowerCase();
    var isActive = $(g_activeTabName).style.backgroundImage.indexOf("tab-labels-f1");
    if (isBlurEle == "body" && isActive > -1) {
        $(g_activeTabName).firstElementChild.focus();
    }
}
function OpenUrl(url) { //url为网址
    var openUrl = "";
    if (url.substring(0, 7) == "http://" || url.substring(0, 7) == "file://" || url.substring(0, 8) == "https://") {
        openUrl = url;
    } else {
        openUrl = "http://" + url;
    }
    console.log("[js]-----OpenUrl()--g_activeTabName--" + g_activeTabName + "---openUrl = " + openUrl);
    TBrowser.loadUrl(g_activeTabName, openUrl);
}
function checkURL(URL) {
    
    var str = URL;
    //判断URL地址的正则表达式为:http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?
    //下面的代码中应用了转义字符"\"输出一个字符"/"
    var Expression = /([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
    var objExp = new RegExp(Expression);
    if (objExp.test(str) == true) {
        return true;
    } else {
        return false;
    }
}
function changeMouseMode() {
    console.log("changeMouseMode ----g_mouseMode = " + g_mouseMode);
    if (g_mouseMode == "disable") {
        TBrowser.setMouseMode(true);
        document.getElementById("mousemode").innerHTML = "Mouse Mode";
        g_mouseMode = "enable";
    } else { //当前是鼠标模式
        TBrowser.setMouseMode(false);
        document.getElementById("mousemode").innerHTML = "Pointer Mode";
        g_mouseMode = "disable";
    }
}
function onClickGo() {
    var inputValue = $("inputUrl").value;
    console.log("onClickGo-------inputValue =" + inputValue);
    if (inputValue.length != 0 && inputValue.match("Search or input website") == null) {
        if (checkURL(inputValue)) {
            OpenUrl(inputValue);
        } else {
            OpenUrl("https://www.google.com/#q=" + inputValue);
        }
    }
    $("inputUrl").value = "";
}
function onClickCollect(evt) { //click collect
    var json = JSON.parse(TBrowser.getTVOSEventData("WebBrowser", evt.eventData));
    var dataArr = { //get url and icon
        'weburl': TBrowser.getUrl(g_activeTabName),
        'icon': TBrowser.getIcon(g_activeTabName)
    };
    if ($("a_Star").className == "collect") {
        changeStateIMG("a_Star", "collect.png");
        $("a_Star").className = "";
        var keyArr = localStorage.getItem("favorite");
        keyArr = eval('(' + keyArr + ')');
        for (var i = 0; i < keyArr.length; i++) {
            if (dataArr.weburl == keyArr[i].weburl) {
                keyArr.splice(i, 1);
            }
        }
        localStorage.setItem("favorite", JSON.stringify(keyArr));
    } else {
        changeStateIMG("a_Star", "star1.png");
        $("a_Star").className = "collect";
        localStorageData("favorite", dataArr);
    }
}
function onClickFavorite() {
    changeHistoryOrFavor("favorite", "historyTab", "favoriteTab", "favoriteList");
}
function changeHistoryOrFavor(key, hideDiv, showDiv, showList) {
    displayHide(hideDiv);
    displayShow(showDiv);
    var keyT = eval('(' + localStorage.getItem(key) + ')') ? eval('(' + localStorage.getItem(key) + ')') : 0;
    displayShow("homePopupBox");
    if (keyT.length > 0) {
        displayHide("homePopupBox_no_available");
        initCollectList(keyT, $(showList));
        var showTab = $(showDiv);
        showTab.style.display = "block";
    } else {
        displayHide(showDiv);
        displayShow("homePopupBox_no_available");
        $("history_favorite").innerHTML = key;
        return false;
    }
}
function onClickHistory() {
    changeHistoryOrFavor("history", "favoriteTab", "historyTab", "historyList");
}
function onClickClearCache(){
    displayHide("privacyPopupBox");
    displayShow("clearCacheBox");
    $("clearcacheOK").focus();
}
function onClickAcceptCookies(){
    if (localStorage.getItem('acceptCookies') == "true") { //enter时为选中状态
        $("acceptCookiesCheckbox").removeAttribute("class");
        TBrowser.acceptCookies(g_activeTabName,0);
        localStorage.setItem('acceptCookies', false);
    } else {
        $("acceptCookiesCheckbox").setAttribute("class", "checkbox");
        TBrowser.acceptCookies(g_activeTabName,1);
        localStorage.setItem('acceptCookies', true);
    }

    console.log('------acceptCookies---------------'+localStorage.getItem('acceptCookies'));
}
function onClickClearAllCookie(){
    displayHide("privacyPopupBox");
    displayShow("clearAllCookieBox");
    $("clearAllCookieOK").focus();
}

function onClickClearCancel(){
    displayHide("clearAllCookieBox");
    displayHide("clearCacheBox");
    g_inputUrl.focus();
    changeStateIMG("a_Menu", "more.png");
}
function onClickClearcacheOK(){
    TBrowser.clearData(1);
    displayHide("clearCacheBox");
    g_inputUrl.focus();
    changeStateIMG("a_Menu", "more.png");
}
function onClickClearAllCookieOK(){
    TBrowser.clearData(0);
    displayHide("clearAllCookieBox");
    g_inputUrl.focus();
    changeStateIMG("a_Menu", "more.png");
}
function initCollectList(arr, wrap) {
    wrap.innerHTML = "";
    for (var i = 0; i < arr.length; i++) {
        var str = document.createElement('li');
        str.innerHTML = '<button class="remove"></button><a href="javascript:void(0);" data-url="' + arr[i].weburl + '"><img src="' + arr[i].icon + '" class="logo" onerror="javascript:this.src=\'tclResources/img_1280/icon-t1.png\'">' + arr[i].weburl + '</a>';
        wrap.appendChild(str);
    }
}
function isWeburlCollected(key, url) { //check url collected or not
    var keyrArr = localStorage.getItem(key) ? localStorage.getItem(key) : '[]';
    keyrArr = eval('(' + keyrArr + ')');
    for (var i = 0; i < keyrArr.length; i++) {
        if (url == keyrArr[i].weburl) {
            if (key == "favorite") {
                $("a_Star").className = "collect";
                changeStateIMG("a_Star", "star.png");
                return false;
            }
        } else {
            $("a_Star").className = "";
            changeStateIMG("a_Star", "collect.png");
        }
    }
}
function localStorageData(key, dataArr) { //save data; key is "favorite" or "history"
    var keyrArr = localStorage.getItem(key) ? localStorage.getItem(key) : '[]';
    keyrArr = eval('(' + keyrArr + ')');
    for (var i = 0; i < keyrArr.length; i++) {
        if (dataArr.weburl == keyrArr[i].weburl) {
            if (key == "favorite") {
                $("a_Star").className = "collect";
                changeStateIMG("a_Star", "star1.png");
            }
            return false;
        }
    }
    keyrArr.unshift(dataArr);
    if (keyrArr.length > 30) {
        keyrArr.splice(keyrArr.length - 1, 1);
    }
    keyrArr = JSON.stringify(keyrArr);
    localStorage.setItem(key, keyrArr);
}
function removeList(evt) {
    var target = evt.target || evt.srcElement;
    console.log("remove:--" + target.nextElementSibling.text + "  " + target.parentNode.parentNode.id);
    var removeUrl = target.nextElementSibling.text;
    var listwrapId = target.parentNode.parentNode.id; //favoriteList/historyList
    if (listwrapId == "favoriteList") {
        var key = "favorite";
        var noArrayFocus = "a_Favorite";
    } else {
        var key = "history";
        var noArrayFocus = "a_History";
    }
    var keyArr = localStorage.getItem(key);
    keyArr = eval('(' + keyArr + ')');
    for (var i = 0; i < keyArr.length; i++) {
        console.log(keyArr[i].weburl + "  " + removeUrl);
        if (removeUrl == keyArr[i].weburl || removeUrl == JSON.stringify(keyArr[i].weburl)) {
            keyArr.splice(i, 1);
            var tabId = $("tabList").getElementsByClassName("active")[0].id;
            if (key == "favorite" && removeUrl == TBrowser.getUrl(tabId)) {
                changeStateIMG("a_Star", "collect.png");
                $("a_Star").className = "";
            }
        }
    }
    if (keyArr.length == 0) {
        $(noArrayFocus).focus();
        displayHide("historyTab");
        displayHide("favoriteTab");
        displayShow("homePopupBox_no_available");
        $("history_favorite").innerHTML = key;
    } else {
        evt.preventDefault();
        if (target.parentNode.nextElementSibling) {
            target.parentNode.nextElementSibling.firstElementChild.focus();
        } else {
            target.parentNode.previousElementSibling.firstElementChild.focus();
        }
        $(listwrapId).removeChild(target.parentNode);
    }
    localStorage.setItem(key, JSON.stringify(keyArr));
}
function editFavorite() {
    editHomeList(this, "favoriteList", "favoriteTab");
}
function editHistory() {
    editHomeList(this, "historyList", "historyTab");
}
function editHomeList(_this, listwrap, listBox) {
    var html = _this.innerHTML;
    var list = $(listwrap);
    var btnlen = list.getElementsByTagName("button").length;
    if (html == "Edit") {
        _this.innerHTML = "Line up";
        list.className = "favorite_urlList lineup";
        $(listBox).className = 'favoriteTab lineup';
        for (var i = 0; i < btnlen; i++) {
            list.getElementsByTagName("button")[i].className = "remove";
        }
    } else {
        _this.innerHTML = "Edit";
        list.className = "favorite_urlList";
        $(listBox).className = listBox;
        for (var i = 0; i < btnlen; i++) {
            list.getElementsByTagName("button")[i].className = "";
        }
    }
}
/*input输入事件*/
function inputURL() {
    this.className = "propertychange";
    if (this.value.length == 0) {
        this.className = "";
    }
}
function inputURLBlur() {
    this.className = "";
}
function tabGetFocus(evt, direction) {
    var focus = document.activeElement;
    if (focus.parentNode.parentNode.id == "tabList") {
        focus.parentNode.removeAttribute("style");
        if (document.activeElement.className == "close_btn") {
            siblings(focus);
            if (direction == "left") {
                focus.parentNode.style.backgroundImage = 'url("./tclResources/img_1280/tab-labels-f1.png")';
                marqueeFocusTitle(focus.parentNode);
                if (!focus.parentNode.previousElementSibling) {
                    evt.preventDefault();
                    focus.previousElementSibling.focus();
                }
            }
            if (direction == "right") {
                if (focus.parentNode.nextElementSibling) {
                    focus.parentNode.nextElementSibling.style.backgroundImage = 'url("./tclResources/img_1280/tab-labels-f1.png")';
                    marqueeFocusTitle(focus.parentNode.nextElementSibling);
                }
            }
        }
        if (focus.className == "a_btn" && focus.parentNode == $("tabList").firstElementChild) {
            focus.parentNode.style.backgroundImage = 'url("./tclResources/img_1280/tab-labels-f1.png")';
            if (direction == "left") {
                return false;
            }
            if (direction == "right" && focus.parentNode.className != "active") {
                focus.parentNode.style.backgroundImage = 'url("./tclResources/img_1280/tab-labels.png")';
            }
            if (direction == "right" && focus.parentNode.className == "active") {
                focus.parentNode.style.backgroundImage = 'url("./tclResources/img_1280/tab-labels-hi.png")';
            }
        }
        if (focus.className == "a_btn") {
            var title = focus.getElementsByTagName("span")[0];
            title.innerHTML = "<i>" + title.firstChild.innerHTML + "</i>";
        }
    }
}
function marqueeFocusTitle(activeElement) {
    var marqueeTitle = activeElement.getElementsByTagName("span")[0];
    if (parseInt(marqueeTitle.clientWidth) < parseInt(marqueeTitle.scrollWidth)) {
        console.log("--roll--" + marqueeTitle.clientWidth + ";" + marqueeTitle.scrollWidth);
        var cNode = marqueeTitle.firstElementChild.cloneNode(true);
        marqueeTitle.appendChild(cNode);
        marqueeTitle.firstElementChild.className = "marquee";
        marqueeTitle.lastElementChild.className = "marquee";
        var titleRate = 30; //title move rate
        var time = marqueeTitle.scrollWidth / titleRate;
        marqueeTitle.firstElementChild.style.webkitAnimationDuration = time + "s";
        marqueeTitle.lastElementChild.style.webkitAnimationDuration = time + "s";
    }
}
function stopTitleMarquee(evt) {
    if (g_nowFocusClass == "a_btn") {
        console.log("---------stop title roll----------");
        var target = evt.target || evt.srcElement;
        var title = target.getElementsByTagName("span")[0];
        $(target.parentNode.id).getElementsByTagName("span")[0].innerHTML = "<i>" + title.firstChild.innerHTML + "</i>";
    }
}
function siblings(elm) {
    var p = elm.parentNode.parentNode.children;
    for (var i = 0,
    pl = p.length; i < pl; i++) {
        if (p[i] !== elm.parentNode.parentNode) {
            p[i].firstElementChild.removeAttribute("style");
            p[i].style.backgroundImage = 'url("./tclResources/img_1280/tab-labels.png")';
        }
    }
    var tags = g_tabList.getElementsByTagName("li");
    for (var i = 0; i < tags.length; i++) {
        if (tags[i].getAttribute("class") == "active") {
            tags[i].style.backgroundImage = 'url("./tclResources/img_1280/tab-labels-hi.png")';
        }
    }
}
function removeliBg() {
    var str = g_tabList.innerHTML;
    if (str.indexOf("tab-labels-f1") > -1) {
        g_tabList.innerHTML = str.replace(/tab-labels-f1/g, "tab-labels");
    }
    var tags = g_tabList.getElementsByTagName("li");
    for (var i = 0; i < tags.length; i++) {
        if (tags[i].getAttribute("class") == "active") {
            tags[i].removeAttribute("style");
        }
    }
}
function createDiv() {
    var oDiv = document.createElement("div");
    oDiv.setAttribute("id", "tcl_messageBox");
    console.log("---run js_show_message.js---2");
    oDiv.innerHTML = "<p>Press <span>INFO</span> to the toolbar</p>";
    document.body.appendChild(oDiv);
    setTimeout("removeDiv()", 10000);
}
function removeDiv() {
    var my = document.getElementById("tcl_messageBox");
    if (my != null) my.parentNode.removeChild(my);
}
function tabListClick(e) {
    var target = e.target || e.srcElement;
    var chooseOn = target.className.toLowerCase();
    switch (chooseOn) {
    case 'a_btn':
        switchTab(e, target.parentNode.id);
        break;
    case 'close_btn':
        closeTab(e, target.parentNode.id);
        break;
    }
}
function init() {
    if (localStorage.MouseMode) {
        g_mouseMode = localStorage.MouseMode;
        console.log("init ----g_mouseMode = " + g_mouseMode);
        if (g_mouseMode == "disable") { //默认是鼠标
            TBrowser.setMouseMode(false);
            document.getElementById("mousemode").innerHTML = "Pointer Mode";
        }
    }
    if (localStorage.UserAgentMode) {
        g_userAgentMode = localStorage.UserAgentMode;
        console.log("init ----g_userAgentMode = " + g_userAgentMode);
        if (g_userAgentMode == "Mobile") { //默认是PC UA
            $("changeua").innerHTML = "Mobile UA";
            TBrowser.setMobileUA(true);
        }
    }
    g_a_Favorite.addEventListener("focus", onClickFavorite, false);
    g_a_History.addEventListener("focus", onClickHistory, false);
    g_inputUrl.addEventListener("input", inputURL, false);
    g_inputUrl.addEventListener("blur", inputURLBlur, false);
    g_edit.addEventListener("click", editFavorite, false);
    g_edit_H.addEventListener("click", editHistory, false);
}

function showErrorBox(error_code,error_description,errorUrl) {
    console.log("showErrorBox-----error_code = "+error_code+",error_description = "+error_description+",errorUrl = "+errorUrl);
    g_isHappenedError = true;
    document.getElementById("errorCode").innerHTML = "errorCode="+error_code;
    document.getElementById("errorDescription").innerHTML = "errorDescription="+error_description;
    if (typeof(errorUrl) != "undefined")
      document.getElementById("errorUrl").innerHTML = "failURL="+error_url;
    document.getElementById("errorMessageBox").style.visibility = "visible";
    document.getElementById("ok_button").focus();
}
function removeErrorBox() {
    document.getElementById("errorMessageBox").style.visibility = "hidden";
}
function checkDate() {
  	var myDate = new Date();
  	var myYear = myDate.getFullYear();
  	if(myYear < "2018")
  		return false;
  	else
  		return true;
}
function setCookieState() {
    if (localStorage.getItem('acceptCookies') == "true") {
        TBrowser.acceptCookies("tab_0",1);
    } else {
        TBrowser.acceptCookies("tab_0",0);
    }
}
function resetTimer(evt) {
    if(g_timer != null) {
        clearTimeout(g_timer);
    }
    if(document.activeElement.id != "inputUrl") {
        g_timer = setTimeout(function() {
            hideToolBar(evt);
        },10000);
    }
}
document.onmousedown = mouseDownProcess;
document.onkeydown = keyDownProcess;
document.onsystemevent = systemEventProcess;
window.onload = function(e) {
    init();
    addTab(e); //default open new tab
    g_inputUrl.focus();
    setCookieState();
    if(!checkDate())
        showErrorBox(-201,"The system time is wrong. Please reset it.");
    resetTimer(e);
}
window.onunload = function(e) {
    localStorage.MouseMode = g_mouseMode;
    localStorage.UserAgentMode = g_userAgentMode;
}
function switchFocusIdResponse(evt, nowClick){
    console.log('-------switchFocusIdResponse(id or class)-----'+nowClick)
	switch (nowClick) {
		case 'aboutPopupBox':
			displayHide("aboutPopupBox");
			break;
		case 'a_Back':
			onClickBack();
			break;
		case 'a_Forward':
			onClickForward();
			break;
		case 'a_Reload':
			onClickReload();
			break;
		case 'a_Go':
			onClickGo();
			break;
		case 'a_Star':
			onClickCollect(evt);
			break;
		case 'a_Home':
			onClickHome();
			break;
		case 'a_Menu':
			onClickMenu();
			break;
		case 'a_Favorite':
			onClickFavorite();
			break;
		case 'a_History':
			onClickHistory();
			break;
		case 'clearCache':
			onClickClearCache();
			break;
		case 'acceptCookies':
			onClickAcceptCookies();
			break;
		case 'clearAllCookie':
			onClickClearAllCookie();
			break;
		case 'clearcacheCancel':
		case 'clearAllCookieCancel':
			onClickClearCancel();
			break;
		case 'clearcacheOK':
			onClickClearcacheOK();
			break;
		case 'clearAllCookieOK':
			onClickClearAllCookieOK();
			break;
		case 'about':
			onClickAbout();
			break;
		case 'privacy':
			onClickPrivacy();
			break;
		case 'mousemode':
			changeMouseMode();
			break;
		case 'changeua':
			onClickChangeUA();
			break;
		case 'exit':
			onClickExit();
			break;
        case 'remove':
            removeList(evt);
            break;
	}
}
function mouseDownProcess(evt){
	let mouseDownElement = checkIfInBlankArea(evt.x, evt.y);
	console.log(mouseDownElement)
	if(!mouseDownElement){
		hideAllPopupBox();
		hideToolBar(evt);
		return;
	}
	
	let target = evt.target || evt.srcElement;
	let nowMouseDown = target.id || target.parentNode.id || target.className;
	console.log('--------mouseDownProcess----in-------'+nowMouseDown)
	if(nowMouseDown == 'a_Back' || nowMouseDown == 'a_Forward'|| nowMouseDown == 'a_Reload'|| nowMouseDown == 'inputUrl'|| nowMouseDown == 'a_Go'|| nowMouseDown == 'a_Star'){
		hideAllPopupBox();
	}
  if(nowMouseDown == 'a_Menu' && $("privacyPopupBox").style.display == 'block'){
    hideAllPopupBox();
  }
  if (target.getAttribute("data-url")) {
    TBrowser.loadUrl(g_activeTabName, target.getAttribute("data-url"));
  }
	switchFocusIdResponse(evt, nowMouseDown);
}
function hideAllPopupBox(){
	displayHide("privacyPopupBox");
	displayHide("morePopupBox");
	displayHide("aboutPopupBox");
	displayHide("homePopupBox");
}
function checkIfInBlankArea(x, y){
    let clickEle; 
    let blockOrVisibleList = [];
    let needCareElements = Array.from(document.body.children);
    needCareElements.forEach(ele =>{
        let style = window.getComputedStyle(ele);
        if(style.display == 'block' && style.visibility == 'visible'){
            blockOrVisibleList.push(ele)
        }
    })
    blockOrVisibleList.forEach(el=>{
        let coord = el.getBoundingClientRect();
        if(coord.left < x && coord.right > x && coord.top < y && coord.bottom > y){
            console.log('-----mousedown in toolar-------------')
            clickEle =  el;
        }
    })
    return clickEle; //if clickEle == undefined -> no 
}