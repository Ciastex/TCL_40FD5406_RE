/******************** created by chenhua ***********************/
var CCTitleWords = [top.ClosedcaptionName, top.sysCCOptions[0], top.sysCCOptions[1], top.sysCCOptions[2], top.sysCCOptions[3], top.sysCCOPtionItems[0]];
var offOnWords = top.offOn;
var okCancelWords = top.okCancel;
var sysCCmodeOption = top.sysCCmodeOption;
var sysanalogCCOption = top.sysanalogCCOption;
if(top.isNAFlag)
{
	var sysdigitalCCOption = [top.sysdigitalCCOption[0], top.sysdigitalCCOption[1], top.sysdigitalCCOption[2], top.sysdigitalCCOption[3],
	 							top.sysdigitalCCOption[4], top.sysdigitalCCOption[5], top.sysdigitalCCOption[6]];
}
else
{
var sysdigitalCCOption = top.sysdigitalCCOption;
}
var syssuperimposeOption = top.syssuperimposeOption;

var setting = top.g_setting;
var channel = top.g_channel;
var tLink = 0;
var focusOn = "menu"; 				//menu,tLink
var list_position_h = 0;
var form_position_h = 0;
var CCModeStatus = 0;
var analogCCStatus = 0;
var digitalCCStatus = 0;
var superimposeStatus = 0;

var SUB_MENU_START = 160;					//三级级菜单焦点移动起始位置
var SUB_MENU_STEP = 70;					//三级级主菜单焦点移动的step
var FORM_STEP = 80;					//弹出框焦点移动的step

var mainFocus = ["../images/Focus_Frame/Focus-1.png", "../images/Focus_Frame/Focus-2.png"];
var offset = 0;					//列表弹出框中的焦点的真实位置和焦点显示位置的差值，比如audio language中offset = audioLang1Pos - form_position_h

document.onsystemevent = notifyProcess;

var menuList = [
    {name: "CC_mode", param: function () {
        doCC_mode();
    }, showFlag: 1},
    {name: "Analog_CC", param: function () {
        doAnalog_CC();
    }, showFlag: 1},
    {name: "Digital_CC", param: function () {
        doDigital_CC();
    }, showFlag: 1},
    {name: "Superimpose", param: function () {
        doSuperimpose();
    }, showFlag: 0},
    {name: "CCOption", param: function () {
        doCCOption();
    }, showFlag: 0}
]

function notifyProcess(evt) {
    var msg = evt.which;
    switch (msg) {
        default:
            top.systemEventProc(evt);
            break;
    }
}
function timeoutInit() {
    document.onkeydown = top.timeoutMyFuc;
    top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyDownProcess;
}
function keyDownProcess(evt) {
    var ret = true;
    var keycode = evt.which;
    switch (keycode) {
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

function $(id) {
    return document.getElementById(id);
}

function toDown() {
    if (focusOn == "menu") {
        if (list_position_h >= findMaxPosition()) {
            list_position_h = 0;
        }
        else {
            list_position_h++;
        }
        refreshFocusOfMenuList();
    }
    else if (focusOn == "CC_mode") {
        toDownAction(sysCCmodeOption.length, sysCCmodeOption);
    }
    else if (focusOn == "Analog_CC") {
        toDownAction(sysanalogCCOption.length, sysanalogCCOption);
    }
    else if (focusOn == "Digital_CC") {
        toDownAction(sysdigitalCCOption.length, sysdigitalCCOption);
    }
    else if (focusOn == "Superimpose") {
        toDownAction(syssuperimposeOption.length, syssuperimposeOption);
    }
}

function toUp() {
    if (focusOn == "menu") {
        if (list_position_h <= 0) {
            list_position_h = findMaxPosition();
        }
        else {
            list_position_h--;
        }
        refreshFocusOfMenuList();
    }
    else if (focusOn == "CC_mode") {
        toUpAction(sysCCmodeOption.length, sysCCmodeOption);
    }
    else if (focusOn == "Analog_CC") {
        toUpAction(sysanalogCCOption.length, sysanalogCCOption);
    }
    else if (focusOn == "Digital_CC") {
        toUpAction(sysdigitalCCOption.length, sysdigitalCCOption);
    }
    else if (focusOn == "Superimpose") {
        toUpAction(syssuperimposeOption.length, syssuperimposeOption);
    }
}

function doEnter() {
    if (focusOn == "menu") {
        if (focusOn == "menu") {
            findFunction(list_position_h);
        }
    }
    else if (focusOn == "CC_mode") {
        $("listForm").style.display = "none";
        $("thdListFocus").src = mainFocus[0];
        CCModeStatus = form_position_h + offset;
        setting.setCCModeEnable(2, CCModeStatus);
        CCModeStatus = setting.getCCModeEnable();
        $("CCModeStatus").innerHTML = sysCCmodeOption[CCModeStatus];
        focusOn = "menu";
        enableCCmode(CCModeStatus);
    }
    else if (focusOn == "Analog_CC") {
        $("listForm").style.display = "none";
        $("thdListFocus").src = mainFocus[0];
        analogCCStatus = form_position_h + offset;
        setting.setAnalogCC(2, analogCCStatus);
        analogCCStatus = setting.getAnalogCC();
        $("analogCCStatus").innerHTML = sysanalogCCOption[analogCCStatus];
        focusOn = "menu";
    }
    else if (focusOn == "Digital_CC") {
        $("listForm").style.display = "none";
        $("thdListFocus").src = mainFocus[0];
        digitalCCStatus = form_position_h + offset;
        setting.setDigitalCC(2, digitalCCStatus);
        digitalCCStatus = setting.getDigitalCC();
        $("digitalCCStatus").innerHTML = sysdigitalCCOption[digitalCCStatus];
        focusOn = "menu";
    }
    else if (focusOn == "Superimpose") {
        $("listForm").style.display = "none";
        $("thdListFocus").src = mainFocus[0];
        superimposeStatus = form_position_h + offset;
        $("superimposeStatus").innerHTML = syssuperimposeOption[superimposeStatus];
        focusOn = "menu";
    }

}
function toBack() {
    if (focusOn == "menu") {
        parent.returnPage(2);
    }
    else if (focusOn == "CC_mode") {
        $("listForm").style.display = "none";
        $("thdListFocus").src = mainFocus[0];
        focusOn = "menu";
    }
    else if (focusOn == "Analog_CC") {
        $("listForm").style.display = "none";
        $("thdListFocus").src = mainFocus[0];
        focusOn = "menu";
    }
    else if (focusOn == "Digital_CC") {
        $("listForm").style.display = "none";
        $("thdListFocus").src = mainFocus[0];
        focusOn = "menu";
    }
    else if (focusOn == "Superimpose") {
        $("listForm").style.display = "none";
        $("thdListFocus").src = mainFocus[0];
        focusOn = "menu";
    }
}
function toLeft() {
    toBack();
}
function toRight() {
    doEnter();
}


var listFormLiList;
var thdMenuRightLiList;
function init() {
    top.initTextDirection(window);
    timeoutInit();
    thdMenuRightLiList = $("thdMenuRight").getElementsByTagName("li");
    var thdMenuRightSpanList = $("thdMenuRight").getElementsByTagName("span");

    thdMenuRightSpanList[0].innerHTML = CCTitleWords[0];
    thdMenuRightSpanList[1].innerHTML = CCTitleWords[1];
    thdMenuRightSpanList[2].innerHTML = CCTitleWords[2];
    thdMenuRightSpanList[3].innerHTML = CCTitleWords[3];
   // thdMenuRightSpanList[4].innerHTML = CCTitleWords[4];
    thdMenuRightSpanList[5].innerHTML = CCTitleWords[5];
    enableCCmode(sysCCmodeOption[CCModeStatus]);

    CCModeStatus = setting.getCCModeEnable();
    analogCCStatus = setting.getAnalogCC();
    digitalCCStatus = setting.getDigitalCC();
    $("CCModeStatus").innerHTML = sysCCmodeOption[CCModeStatus];
    $("analogCCStatus").innerHTML = sysanalogCCOption[analogCCStatus];
    $("digitalCCStatus").innerHTML = sysdigitalCCOption[digitalCCStatus];
    enableCCmode(CCModeStatus);
    //$("superimposeStatus").innerHTML = syssuperimposeOption[superimposeStatus];

    list_position_h = 0;
    $("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP * list_position_h + "px";

    listFormLiList = $("listForm").getElementsByTagName("li");
    addMouseListener();
    ttsRead();
}

var PROGRESS_START_LEFT_OFFSET = 480 + 310;//进度条容器开始位置相对于framework的左偏移，480是进度条的父容器的相对framwork的左偏移，310是进度条容器相对于进度条父容器的左偏移
function addMouseListener() {
    document.body.onmousedown = function (evt) {
        evt.preventDefault();
        top.timeoutFuc.osdTimeoutEndFuc();
        if (evt.button == 2) toBack();//right key
        top.timeoutFuc.osdTimeoutStartFuc();
    }

    //menu
    for (var i = 1; i < 4; i++) {
        thdMenuRightLiList[i].setAttribute("newAttr", i);
        thdMenuRightLiList[i].onmousedown = function (evt) {
            top.timeoutFuc.osdTimeoutEndFuc();
            if (evt.button == 0) {//left key
                if (focusOn == "menu") {
                    if (divxActiveStatus != 1) {
                        if (parseInt(this.getAttribute("newAttr")) < 2) {
                            list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
                        }
                        else if (parseInt(this.getAttribute("newAttr")) > 2) {
                            list_position_h = parseInt(this.getAttribute("newAttr")) - 2;
                        }
                        else {
                            top.timeoutFuc.osdTimeoutStartFuc();
                            return;
                        }
                    }
                    else {
                        list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
                    }
                    $("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP * list_position_h + "px";
                    doEnter();
                }
            }
            top.timeoutFuc.osdTimeoutStartFuc();
        }
    }

    //form
    for (var i = 0; i < 2; i++) {
        listFormLiList[i].setAttribute("newAttr", i);
        listFormLiList[i].onmousedown = function (evt) {
            top.timeoutFuc.osdTimeoutEndFuc();
            if (evt.button == 0) {//left key
                if (focusOn == "tLink") {
                    form_position_h = parseInt(this.getAttribute("newAttr"));
                    $("listFormFocus").style.top = form_position_h * FORM_STEP + "px";
                    doEnter();
                }
            }
            top.timeoutFuc.osdTimeoutStartFuc();
        }
    }
}

function doCC_mode() {
    $("thdListFocus").src = mainFocus[1];
    if (CCModeStatus >= 5) {
        form_position_h = 4;
        offset = CCModeStatus - form_position_h;
    }
    else {
        form_position_h = CCModeStatus;
        offset = 0;
    }
    var topOffset = SUB_MENU_START + SUB_MENU_STEP * list_position_h - 10;
    var leftOffset = 980;
    top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList, sysCCmodeOption, sysCCmodeOption.length, form_position_h, offset);
    focusOn = "CC_mode";
}
function doAnalog_CC() {
    $("thdListFocus").src = mainFocus[1];
    if (analogCCStatus >= 5) {
        form_position_h = 4;
        offset = analogCCStatus - form_position_h;
    }
    else {
        form_position_h = analogCCStatus;
        offset = 0;
    }
    var topOffset = SUB_MENU_START + SUB_MENU_STEP * list_position_h - 10;
    var leftOffset = 980;
    top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList, sysanalogCCOption, sysanalogCCOption.length, form_position_h, offset);
    focusOn = "Analog_CC";
}
function doDigital_CC() {
    $("thdListFocus").src = mainFocus[1];
    if (digitalCCStatus >= 5) {
        form_position_h = 4;
        offset = digitalCCStatus - form_position_h;
    }
    else {
        form_position_h = digitalCCStatus;
        offset = 0;
    }
    var topOffset = SUB_MENU_START + SUB_MENU_STEP * list_position_h - 10;
    var leftOffset = 980;
    top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList, sysdigitalCCOption, sysdigitalCCOption.length, form_position_h, offset);
    focusOn = "Digital_CC";
}
function doSuperimpose() {
    $("thdListFocus").src = mainFocus[1];
    if (superimposeStatus >= 5) {
        form_position_h = 4;
        offset = superimposeStatus - form_position_h;
    }
    else {
        form_position_h = superimposeStatus;
        offset = 0;
    }
    var topOffset = SUB_MENU_START + SUB_MENU_STEP * list_position_h - 10;
    var leftOffset = 980;
    top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList, syssuperimposeOption, syssuperimposeOption.length, form_position_h, offset);
    focusOn = "Superimpose";
}
function doCCOption()
{
	parent.jumpPage(3,"systemSetting/CCOption.html");
}
function findFunction(postion) {
    var num = -1;
    for (var i = 0; i < menuList.length; i++) {
        if (menuList[i].showFlag == 1) {
            num++;
        }
        if (num == postion) {
            menuList[i].param();
            break;
        }
    }
}

function refreshFocusOfMenuList() {
    $("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP * list_position_h + "px";
}

function findMaxPosition() {
    var num = -1;
    for (var i = 0; i < menuList.length; i++) {
        if (menuList[i].showFlag == 1) {
            num++;
        }
    }
    return num;
}
/*
 描述：在选项列表出来的时候按Up键刷新焦点的效果
 参数：optionCount：允许的选项总数量；optionList：所有允许的选项的索引值保存在optionList数组中
 全局变量：form_position_h；offset;
 */
function toUpAction(optionCount, optionList) {
    if (form_position_h == 0 && offset == 0) {
        offset = (optionCount < 5 ? 0 : (optionCount - 5));
        for (var i = 0; i < (optionCount < 5 ? optionCount : 5); i++) {
            listFormLiList[i].innerHTML = optionList[i + offset];
        }
        form_position_h = (optionCount < 5 ? (optionCount - 1) : 4);
    }
    else if (form_position_h == 0 && offset > 0) {
        offset--;
        for (var i = 0; i < 5; i++) {
            listFormLiList[i].innerHTML = optionList[i + offset];
        }
    }
    else if (form_position_h > 0) {
        form_position_h--;
    }

    $("listFormFocus").style.top = form_position_h * FORM_STEP + "px";
    if (offset > 0) {
        $("listUpImg").style.display = "block";
    }
    else {
        $("listUpImg").style.display = "none";
    }

    if ((offset + 4) >= (optionCount - 1)) {
        $("listDownImg").style.display = "none";
    }
    else {
        $("listDownImg").style.display = "block";
    }
    top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
}
/*
 描述：在选项列表出来的时候按Down键刷新焦点的效果
 参数：optionCount：允许的选项总数量；optionList：所有允许的语言的选项值保存在optionList数组中
 全局变量：form_position_h；offset;
 */
function toDownAction(optionCount, optionList) {
    if ((form_position_h + offset) >= (optionCount - 1)) {
        offset = 0;
        for (var i = 0; i < (optionCount < 5 ? optionCount : 5); i++) {
            listFormLiList[i].innerHTML = optionList[i + offset];
        }
        form_position_h = 0;
    }
    else if (form_position_h == 4) {
        offset++;
        for (var i = 0; i < 5; i++) {
            listFormLiList[i].innerHTML = optionList[i + offset];
        }
    }
    else {
        form_position_h++;
    }
    $("listFormFocus").style.top = form_position_h * FORM_STEP + "px";
    if (offset > 0) {
        $("listUpImg").style.display = "block";
    }
    else {
        $("listUpImg").style.display = "none";
    }

    if ((offset + 4) >= (optionCount - 1)) {
        $("listDownImg").style.display = "none";
    }
    else {
        $("listDownImg").style.display = "block";
    }
    top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
}

function enableCCmode(status)
{
    if (0 == status)
    {
        for (var i = 1; i < menuList.length; i++)
        {
            menuList[i].showFlag = 0;
        }
    }
    else
    {
        for (var i = 1; i < menuList.length; i++)
        {
            if (i < 3)
            {
                menuList[i].showFlag = 1;
            }
            else if (i == 4 && top.isNAFlag == 1)
            {
                menuList[4].showFlag = 1;
            }
        }
    }
    if(top.isCBFlag)
    {
        menuList[2].showFlag = 0;
    }


    for (var i = 0; i < menuList.length; i++)
    {
        if (menuList[i].showFlag == 1)
        {
            thdMenuRightLiList[i + 1].style.display = "block";
        }
        else
        {
            thdMenuRightLiList[i + 1].style.display = "none";
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
    top.ttsLog("list_position_h=" + list_position_h + "   form_position_h=" + form_position_h);
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

    if(("menu" == focusOn) && (2 == parent.currentShowMenu))
    {
        switch(currentName)
        {
            case "CC_mode":
                top.ttsLog("CCModeStatus=" + CCModeStatus);
                ttsName = CCTitleWords[1] + ",";
                currentStatus = sysCCmodeOption[CCModeStatus];
                break;
            case "Analog_CC":
                top.ttsLog("analogCCStatus=" + analogCCStatus);
                ttsName = CCTitleWords[2] + ",";
                currentStatus = sysanalogCCOption[analogCCStatus];
                break;
            case "Digital_CC":
                top.ttsLog("digitalCCStatus=" + digitalCCStatus);
                ttsName = CCTitleWords[3] + ",";
                currentStatus = sysdigitalCCOption[digitalCCStatus];
                break;
            case "Superimpose":
                top.ttsLog("superimposeStatus=" + superimposeStatus);
                ttsName = CCTitleWords[4] + ",";
                currentStatus = syssuperimposeOption[superimposeStatus];
                break;
            case "CCOption":
                ttsName = CCTitleWords[5] + ",";
                currentStatus = "";
                break;
            default:
                ttsName = "";
                currentStatus = "";
                break;
        }
    }
    else if("CC_mode" == focusOn)
    {
        top.ttsLog("CCModeStatus=" + CCModeStatus + "   form_position_h + offset=" + (form_position_h + offset));
        ttsName = "";
        currentStatus = sysCCmodeOption[form_position_h + offset];
        isSelected(sysCCmodeOption[CCModeStatus] == currentStatus);
    }
    else if("Analog_CC" == focusOn)
    {
        top.ttsLog("analogCCStatus=" + analogCCStatus + "   form_position_h + offset=" + (form_position_h + offset));
        ttsName = "";
        currentStatus = sysanalogCCOption[form_position_h + offset];
        isSelected(sysanalogCCOption[analogCCStatus] == currentStatus);
    }
    else if("Digital_CC" == focusOn)
    {
        top.ttsLog("digitalCCStatus=" + digitalCCStatus + "   form_position_h+offset=" + (form_position_h + offset));
        ttsName = "";
        currentStatus = sysdigitalCCOption[form_position_h + offset];
        isSelected(sysdigitalCCOption[digitalCCStatus] == currentStatus);
    }
    else if("Superimpose" == focusOn)
    {
        top.ttsLog("superimposeStatus=" + superimposeStatus + "   form_position_h + offset=" + (form_position_h + offset));
        ttsName = "";
        currentStatus = syssuperimposeOption[form_position_h + offset];
        isSelected(syssuperimposeOption[superimposeStatus] == currentStatus);
    }
    else if(("menu" == focusOn) && (3 == parent.currentShowMenu))
    {
        parent.$("subMenu3").contentWindow.ttsRead();
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