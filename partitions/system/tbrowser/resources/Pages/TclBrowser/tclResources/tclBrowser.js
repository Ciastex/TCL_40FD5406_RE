var g_setting = tcl.setting;
var g_language = g_setting.menuLanguage;

var mlmLangIndex = [6, 7, 9, 5, 12, 0, 10, 2, 13, 14, 15, 16, 17, 19, 25, 20, 21, 22, 23, 35, 8, 24, 18, 33, 279, 36, 468];
var mlmName = ["English", "Spanish", "French", "German", "Italian", "Czech", "Croatian", "Danish", "Hungarian", "Dutch", "Norwegian", "Polish", "Portuguese", "Romanian", "Slovak", "Slovenian", "Serbian", "Finnish", "Swedish", "Turkish", "Greek", "Bulgarian", "Russian", "Latvian", "Lithuanian", "Estonian", "Ukrainian"];

var currentShowDataKey = "";
function getMainPageId() {
    var pageId = Util.getMainPageId();
    console.log("[js]------getMainPageId---pageId=" + pageId);
    return pageId;
}
function getUrl() {
    var pageId = getMainPageId();
    var url = Util.getUrl(pageId);
	if(url == null) url = "";
    console.log("[js]------getUrl---url=" + url);
    return url;
}
function getTitle() {
    var pageId = getMainPageId();
    var title = Util.getTitle(pageId);
	if(title == null) title = "";
    return title;
}
function getIcon() {
    var pageId = getMainPageId();
    var icon = Util.getIcon(pageId);
    if (icon == null) {
        icon = "file:///system/tbrowser/resources/Pages/TclBrowser/tclResources/img_1280/default_icon.png";
    }
    console.log("[js]------getIcon---icon=" + icon);
    return icon;
}
function closeToolBar() {
    var activePageId = Util.getActivePageId();
    var mainPageId = getMainPageId();
    var visibilityMore = document.getElementById("morePopupBox").style.visibility;
    var visibilityHome = document.getElementById("homePopupBox").style.visibility;
    if (visibilityMore == "visible" || visibilityHome == "visible") {
        showPopupBox("none");
        document.getElementById("toolbar_input").blur(); //输入框失去焦点
        document.getElementById("home").src = "./tclResources/img_1280/bookmark.png";
        document.getElementById("more").src = "./tclResources/img_1280/more.png";
    }
    if (activePageId != mainPageId) {
        Util.closePage(mainPageId);
    }
}
function OpenUrl(url) //url为网址
{
    showPopupBox("none");

    if (document.getElementById("toolbar_input").value != "Search or input website") {
        document.getElementById("toolbar_input").value = "";
    }

    var openUrl = "";
    if (url.substring(0, 7) == "http://" || url.substring(0, 7) == "file://" || url.substring(0, 8) == "https://") {
        openUrl = url;
    } else {
        openUrl = "http://" + url;
    }
    console.log("[js]-----OpenUrl()-------openUrl = " + openUrl);
    var pageId = getMainPageId();
    if (url.length != 0) {
        Util.openUrl(pageId, openUrl);
    }
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
function showInputFocus() {
    console.log("-------------showInputFocus------------");
    var input_div = document.getElementById("inputLi");
    input_div.style.background = "url('./tclResources/img_1280/input_focus.png')";
    if (document.getElementById("toolbar_input").value == "Search or input website") {
        document.getElementById("toolbar_input").value = "";
    }
    document.getElementById("toolbar_input").style.color = "#000000";
    document.getElementById("toolbar_input").style.paddingLeft = "10px";
    document.getElementById("toolbar_input").style.background = "url(\"./tclResources/img_1280/search.png\") no-repeat 10px";
	
}
function unShowInputFocus() {
    console.log("------------unShowInputFocus-----------");
    var input_div = document.getElementById("inputLi");
    input_div.style.background = "url('./tclResources/img_1280/input_normal1.png')";
    console.log("unShowInputFocus----value = " + document.getElementById("toolbar_input").value);
    if (document.getElementById("toolbar_input").value == "") {
        document.getElementById("toolbar_input").value = "Search or input website";
        document.getElementById("toolbar_input").style.color = "#AAAAAA";
    }
    document.getElementById("toolbar_input").style.paddingLeft = "40px";
    document.getElementById("toolbar_input").style.background = "";
}
function showPopupBox(name) {
    console.log("------------showPopupBox--------name = " + name);
    var homePopupBox = document.getElementById("homePopupBox");
    var morePopupBox = document.getElementById("morePopupBox");
    var aboutPopupBox = document.getElementById("aboutPopupBox");
    var inputPopupBox = document.getElementById("inputPopupBox");

    if (morePopupBox.style.visibility == "visible") document.getElementById("more").src = "./tclResources/img_1280/more.png";
    if (homePopupBox.style.visibility == "visible") document.getElementById("home").src = "./tclResources/img_1280/bookmark.png";

    homePopupBox.style.visibility = "hidden";
    morePopupBox.style.visibility = "hidden";
    aboutPopupBox.style.visibility = "hidden";
    inputPopupBox.style.visibility = "hidden";
    if (name == "homePopupBox") {
        document.getElementById("home").focus();
        homePopupBox.style.visibility = "visible";
    } else if (name == "morePopupBox") {
        document.getElementById("more").focus();
        morePopupBox.style.visibility = "visible";
    } else if (name == "aboutPopupBox") {
        document.getElementById("more").focus();
        aboutPopupBox.style.visibility = "visible";
    } else if (name == "inputPopupBox") {
        inputPopupBox.style.visibility = "visible";
    } else {
        console.log("------------showPopupBox--------" + name);
    }
}
function onClickGo() {
    var inputValue = document.getElementById("toolbar_input").value;
    console.log("------------onClickGo-------inputValue =" + inputValue);

    if (inputValue.length != 0 && inputValue.match("Search or input website") == null) {
        console.log("------------onClickGo-----------ready to save inputValue = " + inputValue);
        var json = {
            "record": inputValue
        };
        var isRecorded = false;
        var records = getProperty("records");
        if (records != null) {
		var jsonRecords;
		try{
			jsonRecords = JSON.parse(records);
		}catch(err){
			console.log("JSON.parse error = "+err);
			setProperty("records", "[]");
			return;
		}
		isRecorded = isDataExit(jsonRecords, json);
        }

        if (isRecorded) {
            console.log("[js]-----onClickGo()------already exist");
        } else {
            addData("records", json);
            console.log("[js]-----onClickGo()-----recorded");
        }

        if (checkURL(inputValue)) {
            OpenUrl(inputValue);
        } else {
            OpenUrl("https://www.google.com/#q=" + inputValue);
        }
    }
}
function changeCollectImg() {
    var url = getUrl();
    var icon = getIcon();
    var title = getTitle();
    var json = {
        "title": title,
        "url": url,
        "icon": icon
    };

    var isCollected = false;
    var collections = getProperty("favorite");
    if (collections != null) {
	var jsonCollections;
	try{
		jsonCollections = JSON.parse(collections);
	}catch(err){
		console.log("JSON.parse error = "+err);
		setProperty("favorite", "[]");
		return;
	}
	isCollected = isDataExit(jsonCollections, json);
    }

    if (isCollected) {
        if (document.activeElement.id == "a_Star") {
            document.getElementById("img_collect").src = "./tclResources/img_1280/star1.png";
        } else {
            document.getElementById("img_collect").src = "./tclResources/img_1280/star.png";
        }
    } else {
        document.getElementById("img_collect").src = "./tclResources/img_1280/collect.png";
    }
}
function onClickCollect() {
    console.log("[js]-----onClickCollect()------");
    var url = getUrl();
    var icon = getIcon();
    var title = getTitle();
    var json = {
        "title": title,
        "url": url,
        "icon": icon
    };
    var isCollected = false;
    var collections = getProperty("favorite");
    if (collections != null) {
	var jsonCollections;
	try{
		jsonCollections = JSON.parse(collections);
	}catch(err){
		console.log("JSON.parse error = "+err);
		setProperty("favorite", "[]");
		return;
	}
	isCollected = isDataExit(jsonCollections, json);
    }

    if (isCollected) {
        console.log("[js]-----onClickCollect()------需要收藏的网址已存在-----");
        removeData("favorite", json);
        console.log("[js]-----onClickCollect()------需要收藏的网址已删除-----");
    } else {
        addData("favorite", json);
        console.log("[js]-----onClickCollect()-----网址已收藏-----");
    }
    changeCollectImg();
    showPopupBox("none");
    return false;
}

function onClickEdit() {
    var txt = document.getElementById("a_Edit_Lineup").innerHTML;
    if (txt == g_Edit_Lineup[0]) {
        document.getElementById("a_Edit_Lineup").innerHTML = g_Edit_Lineup[1];
        var ul = document.getElementById("homePopupBox_ul");
        var li = ul.getElementsByTagName("li");
        for (var i = 0; i < li.length; i++) {
            li[i].style.backgroundImage = "url('./tclResources/img_1280/alert1.9.png')";
        }
        document.getElementById("homePopupBox_edit").style.backgroundImage = "url('./tclResources/img_1280/alert1.9.png')";
        showData(currentShowDataKey, true, currentShowPageId);
    } else {
        document.getElementById("a_Edit_Lineup").innerHTML = g_Edit_Lineup[0];
        var ul = document.getElementById("homePopupBox_ul");
        var li = ul.getElementsByTagName("li");
        for (var i = 0; i < li.length; i++) {
            li[i].style.backgroundImage = "url('./tclResources/img_1280/alert.9.png')";
        }
        document.getElementById("homePopupBox_edit").style.backgroundImage = "url('./tclResources/img_1280/alert.9.png')";
        showData(currentShowDataKey, false, currentShowPageId);
    }
    return false;
}
function onClickHome() {
    console.log("[js]-----onClickHome()------");
    var visibility = document.getElementById("homePopupBox").style.visibility;

    if (visibility == "visible") {
        showPopupBox("none");
    } else {
        showPopupBox("homePopupBox");
        document.getElementById("a_Edit_Lineup").innerHTML = g_Edit_Lineup[0];
        currentShowDataKey = "favorite";
        document.getElementById("a_History").style.color = "#FFFFFF"; //白色
        document.getElementById("a_Favorite").style.color = "#FF7F00"; //橘色
        showData("favorite", false, 0);
    }
    return false;
}

function onClickPointer() {
    var mode = getProperty("Pointer");
    console.log("mode = "+mode);
    if (mode && mode == "true") {
        setProperty("Pointer", "false");
        Util.setEnv("TBROWSER_VIRTUAL_MOUSE_MODE", "1");
        document.getElementById("a_Pointer").innerHTML = g_Highlight;
    } else {
        setProperty("Pointer", "true");
        Util.setEnv("TBROWSER_VIRTUAL_MOUSE_MODE", "0");
        document.getElementById("a_Pointer").innerHTML = g_Pointer;
    }
}

function onClickAbout() {
    showPopupBox("aboutPopupBox");
}
function onClickExit() {
    console.log("-----onClickExit-------");
    window.close();
}
function onClickMore() {
    console.log("[js]-----onClickMore()------");
    var visibility = document.getElementById("morePopupBox").style.visibility;
    if (visibility == "visible") {
        console.log("[js]-----onClickMore()----visible--");
        showPopupBox("none");
    } else {
        console.log("[js]-----onClickMore()-----hidden-");
        showPopupBox("morePopupBox");
    }
    return false;
}
function onClickFavorite() {
    if (currentShowDataKey == "favorite") {
        return false;
    }
    showData("favorite", false, 0);
    document.getElementById("a_Edit_Lineup").innerHTML = g_Edit_Lineup[0];
    currentShowDataKey = "favorite";
    document.getElementById("a_Favorite").style.color = "#FFFFFF"; //白色
    document.getElementById("a_History").style.color = "#FFFFFF"; //白色
    return false;
}
function onClickHistory() {
    if (currentShowDataKey == "history") {
        return false;
    }
    showData("history", false, 0);
    document.getElementById("a_Edit_Lineup").innerHTML = g_Edit_Lineup[0];
    currentShowDataKey = "history";
    document.getElementById("a_Favorite").style.color = "#FFFFFF"; //白色
    document.getElementById("a_History").style.color = "#FFFFFF"; //白色
    return false;
}
function canGoBackorForward() {
    console.log("[js]-----canGoBackorForward()------");
    var pageId = getMainPageId();
    var backCount = Util.getBackCount(pageId);
    var forwardCount = Util.getForwardCount(pageId);
    console.log("[js]-----canGoBackorForward()------backCount = " + backCount);
    console.log("[js]-----canGoBackorForward()------forwardCount = " + forwardCount);
    if (backCount > 0) {
        document.getElementById("img_back").src = "./tclResources/img_1280/back.png";
    } else {
        document.getElementById("img_back").src = "./tclResources/img_1280/cannotBack.png";
    }

    if (forwardCount > 0) {
        document.getElementById("img_next").src = "./tclResources/img_1280/next.png";
    } else {
        document.getElementById("img_next").src = "./tclResources/img_1280/cannotNext.png";
    }
}
function goBack() {
    console.log("[js]-----goBack()------");
    var pageId = getMainPageId();
    var backCount = Util.getBackCount(pageId);
    if (backCount > 0) {
        Util.goBack(pageId);
    } else {
        console.log("[js]-----goBack()-----backCount = " + backCount);
    }
}
function goForward() {
    console.log("[js]-----goForward()------");
    var pageId = getMainPageId();
    var forwardCount = Util.getForwardCount(pageId);
    if (forwardCount > 0) {
        Util.goForward(pageId);
    } else {
        console.log("[js]-----goForward()-----forwardCount = " + forwardCount);
    }
}
function reloadPage() {
    console.log("[js]-----reloadPage()------");
    var pageId = getMainPageId();
    Util.reload(pageId);
}
var timer = null;
function reStartTimer() //在subPage中十秒钟没有按键操作就隐藏浏览器页面
{
    console.log("[js]----reStartTimer()-------");
    var mainPageId = getMainPageId();
    var activePageId = Util.getActivePageId();
    if (activePageId != mainPageId) {
        if (timer != null) {
            clearTimeout(timer);
        }
        if (!document.getElementById('TCLIME_mainDiv') && !document.getElementById('ime_keyboard_ui')) {
            console.log("reStartTimer success");
            timer = setTimeout(function() {
              closeToolBar();
            },10000);
        }
    }
}
function doChangeMultilanguage(m_language) {
    console.log("in doChangeMultilanguage m_language = " + m_language);
    document.getElementById("translation").innerHTML = "";
    var languageSrc = "./tclResources/translation/";
    if (m_language != undefined) {
        for (var i = 0; i < 27; i++) {
            if (m_language == mlmLangIndex[i]) {
                break;
            }
        }
        if (i < 27) {
            languageSrc = languageSrc + mlmName[i] + ".js";
        } else {
            console.log("----in doChangeMultilanguage not found this language----");
            languageSrc = languageSrc + "English.js";
        }
    } else {
        languageSrc = languageSrc + "English.js";
    }
    var piece = document.createElement('script');
    piece.setAttribute("type", "text/javascript"); //firefox
    piece.setAttribute("src", languageSrc); //firefox
    document.getElementById("translation").appendChild(piece);
}
function InitLanguageText() {
    document.getElementById("a_Favorite").innerHTML = g_favorite;
    document.getElementById("a_History").innerHTML = g_history;
    document.getElementById("a_Edit_Lineup").innerHTML = g_Edit_Lineup[0];
    console.log("------------g_About = " + g_About);
    document.getElementById("a_About").innerHTML = g_About;
    document.getElementById("a_Exit").innerHTML = g_Exit;
}

function initPointerMode() {
    var mode = getProperty("Pointer");
    console.log("initPointerMode mode = "+mode);
    if (mode && mode == "true") {
		Util.setEnv("TBROWSER_VIRTUAL_MOUSE_MODE", "0");
        document.getElementById("a_Pointer").innerHTML = g_Pointer;
    } else {
		Util.setEnv("TBROWSER_VIRTUAL_MOUSE_MODE", "1");
        document.getElementById("a_Pointer").innerHTML = g_Highlight;
    }
}

function onStarMouseOver() {
    document.getElementById("a_Star").focus();
    var img_src = document.getElementById("img_collect").src;
    var change = (img_src.match("star.png") == null) ? false: true;
    if (change) {
        document.getElementById("img_collect").src = "./tclResources/img_1280/star1.png";
    }
}

function onStarMouseOut() {
    document.getElementById("a_Star").blur();
    var img_src = document.getElementById("img_collect").src;
    var change = (img_src.match("star1.png") == null) ? false: true;
    if (change) {
        document.getElementById("img_collect").src = "./tclResources/img_1280/star.png";
    }
}

function onHomeMouseOver() {
    document.getElementById("a_Home").focus();
    document.getElementById("home").src = "./tclResources/img_1280/bookmark.png";
}

function onHomeMouseOut() {
    document.getElementById("a_Home").blur();
    var home_visibility = document.getElementById("homePopupBox").style.visibility;
    if (home_visibility == "visible") {
        document.getElementById("home").src = "./tclResources/img_1280/bookmark1.png";
    } else {
        document.getElementById("home").src = "./tclResources/img_1280/bookmark.png";
    }
}

function onMenuMouseOver() {
    document.getElementById("a_Menu").focus();
    document.getElementById("more").src = "./tclResources/img_1280/more.png";

}

function onMenuMouseOut() {
    document.getElementById("a_Menu").blur();
    var more_visibility = document.getElementById("morePopupBox").style.visibility;

    if (more_visibility == "visible") {
        document.getElementById("more").src = "./tclResources/img_1280/more1.png";
    } else {
        document.getElementById("more").src = "./tclResources/img_1280/more.png";
    }
}

function toolbarInputMouseOver() {
    document.getElementById("toolbar_input").focus();
}

function toolbarInputMouseOut() {
    document.getElementById("toolbar_input").blur();
}

function onBackMouseOver() {
    document.getElementById("a_Back").focus();
}

function onBackMouseOut() {
    document.getElementById("a_Back").blur();
}

function onForwardMouseOver() {
    document.getElementById("a_Forward").focus();
}

function onForwardMouseOut() {
    document.getElementById("a_Forward").blur();
}

function onReloadMouseOver() {
    document.getElementById("a_Reload").focus();
}

function onReloadMouseOut() {
    document.getElementById("a_Reload").blur();
}

function onGoMouseOver() {
    document.getElementById("a_Go").focus();
}

function onGoMouseOut() {
    document.getElementById("a_Go").blur();
}
function onPointerMouseOver() {
    document.getElementById("a_Pointer").focus();
}

function onPointerMouseOut() {
    document.getElementById("a_Pointer").blur();
}

function onFavoriteMouseOver() {
    if (currentShowDataKey == "favorite") {
        document.getElementById("a_Favorite").style.color = "#FFFFFF"; //白色
    }
}

function onFavoriteMouseOut() {
    if (currentShowDataKey == "favorite") {
        document.getElementById("a_Favorite").style.color = "#FF7F00"; //橘色
    }
}

function onHistoryMouseOver() {
    if (currentShowDataKey == "history") {
        document.getElementById("a_History").style.color = "#FFFFFF"; //白色
    }
}

function onHistoryMouseOut() {
    if (currentShowDataKey == "history") {
        document.getElementById("a_History").style.color = "#FF7F00"; //橘色
    }
}

function handleOnClick(event) {
    event.stopPropagation(); //阻止事件抛给body造成toolbar隐藏
    reStartTimer();
    console.log(this.id);
    if (this.id == "toolbar_input" || this.id == "a_Back" || this.id == "a_Forward" || this.id == "a_Reload" || this.id == "a_Go") {
        showPopupBox("none");
    } else {
        document.getElementById("toolbar_input").blur();
    }
}

function handleOnPopboxClick(event) {
    event.stopPropagation(); //阻止事件抛给body造成toolbar隐藏
    reStartTimer();
    console.log(this.id);
    var txt = document.getElementById("a_Edit_Lineup").innerHTML;
    if (this.id == "homePopupBox_bottom_Pre") {
        if (currentShowPageId > 0) {
            if (txt == g_Edit_Lineup[0]) {
                showData(currentShowDataKey, false, currentShowPageId - 1);
            } else {
                showData(currentShowDataKey, true, currentShowPageId - 1);
            }
        } else {
            console.log("Have no more previous records.");
        }
    } else {
        if ((currentShowPageId + 1) * maxLength > bookmarkLength) {
            console.log("Have no more next records.");
        } else {
            if (txt == g_Edit_Lineup[0]) {
                showData(currentShowDataKey, false, currentShowPageId + 1);
            } else {
                showData(currentShowDataKey, true, currentShowPageId + 1);
            }
        }
    }
}

function addClickListener() {
    document.body.addEventListener("click", reStartTimer, false); //在页面非toolbar控件区域触发click事件，隐藏toolbar
    document.getElementById("a_Back").addEventListener("click", goBack, false);
    document.getElementById("a_Forward").addEventListener("click", goForward, false);
    document.getElementById("a_Reload").addEventListener("click", reloadPage, false);
    document.getElementById("a_Go").addEventListener("click", onClickGo, false);
    document.getElementById("a_Star").addEventListener("click", onClickCollect, false);
    document.getElementById("a_Home").addEventListener("click", onClickHome, false);
    document.getElementById("a_Menu").addEventListener("click", onClickMore, false);
    document.getElementById("a_Favorite").addEventListener("click", onClickFavorite, false);
    document.getElementById("a_History").addEventListener("click", onClickHistory, false);
    document.getElementById("a_Edit_Lineup").addEventListener("click", onClickEdit, false);
    document.getElementById("a_About").addEventListener("click", onClickAbout, false);
    document.getElementById("a_Pointer").addEventListener("click", onClickPointer, false);
    document.getElementById("a_Exit").addEventListener("click", onClickExit, false);

    var as = document.getElementsByTagName("a");
    for (var i = 0; i < as.length; i++) {
        as[i].addEventListener("click", handleOnClick, false);
        as[i].addEventListener("mouseover", reStartTimer, false);
        as[i].addEventListener("mouseout", reStartTimer, false);
    }

    document.getElementById("toolbar_input").addEventListener("click", handleOnClick, false);
    document.getElementById("toolbar_input").addEventListener("mouseover", toolbarInputMouseOver, false);
    //document.getElementById("toolbar_input").addEventListener("mouseout", toolbarInputMouseOut, false);
    document.getElementById("a_Back").addEventListener("mouseover", onBackMouseOver, false);
    document.getElementById("a_Back").addEventListener("mouseout", onBackMouseOut, false);
    document.getElementById("a_Forward").addEventListener("mouseover", onForwardMouseOver, false);
    document.getElementById("a_Forward").addEventListener("mouseout", onForwardMouseOut, false);
    document.getElementById("a_Reload").addEventListener("mouseover", onReloadMouseOver, false);
    document.getElementById("a_Reload").addEventListener("mouseout", onReloadMouseOut, false);
    document.getElementById("a_Go").addEventListener("mouseover", onGoMouseOver, false);
    document.getElementById("a_Go").addEventListener("mouseout", onGoMouseOut, false);

    document.getElementById("a_Star").addEventListener("mouseover", onStarMouseOver, false);
    /*处理焦点移上已收藏的星号需要加白边*/
    document.getElementById("a_Star").addEventListener("mouseout", onStarMouseOut, false);
    /*处理焦点移出已收藏的星号去除白边*/
    document.getElementById("a_Home").addEventListener("mouseover", onHomeMouseOver, false);
    /*处理焦点移上弹出home时a_Home需要加白边*/
    document.getElementById("a_Home").addEventListener("mouseout", onHomeMouseOut, false);
    /*处理焦点移出home去除白边*/
    document.getElementById("a_Menu").addEventListener("mouseover", onMenuMouseOver, false);
    /*处理焦点移上弹出home时a_Home需要加白边*/
    document.getElementById("a_Menu").addEventListener("mouseout", onMenuMouseOut, false);
    /*处理焦点移出home去除白边*/

    document.getElementById("a_Favorite").addEventListener("mouseover", onFavoriteMouseOver, false);
    /*处理焦点移上Favorite时字变白色*/
    document.getElementById("a_Favorite").addEventListener("mouseout", onFavoriteMouseOut, false);
    /*处理焦点移出Favorite时字变回橘色*/
    document.getElementById("a_History").addEventListener("mouseover", onHistoryMouseOver, false);
    /*处理焦点移上History时字变白色*/
    document.getElementById("a_History").addEventListener("mouseout", onHistoryMouseOut, false);
    /*处理焦点移出History时字变回橘色*/
     document.getElementById("a_Pointer").addEventListener("mouseover", onPointerMouseOver, false);
    /*处理焦点移上History时字变白色*/
    document.getElementById("a_Pointer").addEventListener("mouseout", onPointerMouseOut, false);
    /*处理焦点移出History时字变回橘色*/

}

function getInputPromptJson() {
    var inputValue = document.getElementById("toolbar_input").value;
    console.log("------------getInputPromptJson-------inputValue ==" + inputValue);

    var inputPromptJsons = []; //符合要求的提示，格式为json
    var maxInputPrompt = 5; //最多显示5条提示
    var inputPromptNum = 0; //已添加提示个数
    if (inputValue.length != 0 && inputValue.match("Search or input website") == null) {
        var records = getProperty("records");

        console.log("getInputPromptJson--------records = " + records);

        if (records != null) {
		var jsonRecords;
		try{
			jsonRecords = JSON.parse(records);
		}catch(err){
			console.log("JSON.parse error = "+err);
			setProperty("records", "[]");
			return;
		}
		var recordsLength = jsonRecords.length;
		for (var i = 0; i < recordsLength; i++) {
			var json = jsonRecords[i];
			if (json.record.match(inputValue) && inputPromptNum < maxInputPrompt) {
			    var exist = isDataExit(inputPromptJsons, json);
			    if (!exist) {
			        inputPromptJsons.push(json);
			        inputPromptNum++;
			    }
			}
		}
        }
    }
    console.log("------------getInputPromptJson-------inputPromptJsons ==" + inputPromptJsons);
    return inputPromptJsons;
}
function setInputValue(value, event) {
    event.stopPropagation();
    var toolbar_input = document.getElementById("toolbar_input");
    if (toolbar_input) {
        console.log("-------------setInputValue----input value + " + value);
        toolbar_input.value = value;
        document.getElementById("a_Go").focus();
    } else {
        console.log("-------------setInputValue----no toolbar_input");
    }
    var ul = document.getElementById("inputPopupBox_ul");
    var t = ul.childNodes.length;
    for (var i = 0; i < t; i++)
    {
        ul.removeChild(ul.childNodes[0]);
    }
}
function initInputPrompt() {
    var ul = document.getElementById("inputPopupBox_ul");
    var t = ul.childNodes.length;
    for (var i = 0; i < t; i++) //先删除原有的节点，重新创建
    {
        ul.removeChild(ul.childNodes[0]);
    }

    var inputPromptJsons = getInputPromptJson();

    if (inputPromptJsons.length != 0) {
        var endRecord = inputPromptJsons.length;
        for (var i = 0; i < endRecord; i++) {
            var json = inputPromptJsons[i];
            console.log("[js]---------initInputPrompt()------json.record =" + json.record);
            if (json != null) {
                var li = document.createElement("li");
                if (i == endRecord - 1) {
                    li.innerHTML = "<a href=\"javascript:void(0);\" class=\"not_move_right_down_left\" onmouseover='reStartTimer()' onmounseout='reStartTimer()' onClick='setInputValue(\"" + json.record + "\",event)'><span>" + json.record + "</span><span>  -  Google</span></a>";
                } else {
                    li.innerHTML = "<a href=\"javascript:void(0);\" class=\"not_move_right_left\" onmouseover='reStartTimer()' onmounseout='reStartTimer()' onClick='setInputValue(\"" + json.record + "\",event)'><span>" + json.record + "</span><span>  -  Google</span></a>";
                }
                ul.appendChild(li);
            }
        }
    }
}

function createDiv() {
    if ('showed' != Util.getEnv('weblauncherShowbar')) {
        Util.setEnv('weblauncherShowbar', 'showed');
        var oDiv = document.createElement("div");
        oDiv.setAttribute("id", "tcl_messageBox");
        console.log("---run js_show_message.js---2");
        oDiv.innerHTML = "<p>Press <span>INFO</span> to the toolbar</p>";
        document.body.appendChild(oDiv);
        setTimeout("removeDiv()", 10000);
    }
}
function removeDiv() {
    var my = document.getElementById("tcl_messageBox");
    if (my != null) my.parentNode.removeChild(my);
}

function showToolbar() {
    console.log("[js]-----showToolbar()------");
    var toolbar = document.getElementById("toolbar");
    toolbar.style.visibility = "visible";
}

function Init() {
    console.log("[js]---------Init()-----1.15--");
    addClickListener();
    initPointerMode();
    doChangeMultilanguage(g_language);
    InitLanguageText(); //bug 多语言还有问题，此时语言js还没请求下来调用无效
    changeCollectImg();
    canGoBackorForward();
    reStartTimer();
}