/******************** created by chenhua ***********************/
var CCTitleWords = top.sysCCOPtionItems;
var offOnWords = top.offOn;
var okCancelWords = top.okCancel;
var modeOption = top.sysCCOtionMode;
var fontStyleOption = top.sysCCOptionFontStyle;
var fontSizeOption = top.sysCCOptionFontSize;
var fontEdgeStyleOption = top.sysCCOptionFontEdgeStyle;
var fontColorOption = top.sysCCOptionFontColor;
var fontOpacityOption = top.sysCCOptionFontOpacity;

//global system parameters
var setting = top.g_setting;
var channel = top.g_channel;

//module parmeters
var modeValue = 0;
var fontStyleValue = 0;
var fontSizeValue = 0;
var fontEdgeStyleValue = 0;
var fontEdgeColorValue = 0;
var fgColorValue = 0;
var bgColorValue = 0;
var fgOpacityValue = 0;
var bgOpacityValue = 0;

//UI parameters
var focusOn = "menu"; 				//menu
var list_position_h = 0;
var form_position_h = 0;
var SUB_MENU_START = 160;					//三级级菜单焦点移动起始位置
var SUB_MENU_STEP = 70;					//三级级主菜单焦点移动的step
var FORM_STEP = 80;					//弹出框焦点移动的step
var mainFocus = ["../images/Focus_Frame/Focus-1.png", "../images/Focus_Frame/Focus-2.png"];
var offset = 0;					//列表弹出框中的焦点的真实位置和焦点显示位置的差值，比如audio language中offset = audioLang1Pos - form_position_h

document.onsystemevent = notifyProcess;

var menuList = [
    {name: "Mode", 				param: function() {doMode();}, 				showFlag: 1},
    {name: "Font Style", 		param: function() {doFontStyle();}, 		showFlag: 1},
    {name: "Font Size", 		param: function() {doFontSize();}, 			showFlag: 1},
    {name: "Font Edge Style", 	param: function() {doFontEdgeStyle();}, 	showFlag: 0},
	{name: "Font Edge Color", 	param: function() {doFontEdgeColor();}, 	showFlag: 0},
	{name: "FG Color", 			param: function() {doFGColor();}, 			showFlag: 0},
	{name: "BG Color", 			param: function() {doBGColor();}, 			showFlag: 0},
	{name: "FG Opacity", 		param: function() {doFGOpacity();}, 		showFlag: 0},
	{name: "BG Opacity", 		param: function() {doBGOpacity();}, 		showFlag: 0},
]

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
function timeoutInit() 
{
    document.onkeydown = top.timeoutMyFuc;
    top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyDownProcess;
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
    if (focusOn == "menu") 
	{
        if (list_position_h >= findMaxPosition()) 
		{
            list_position_h = 0;
        }
        else 
		{
            list_position_h++;
        }
        refreshFocusOfMenuList();
    }
    else if (focusOn == "mode") 
	{
        toDownAction(modeOption.length, modeOption);
    }
    else if (focusOn == "fontStyle") 
	{
        toDownAction(fontStyleOption.length, fontStyleOption);
    }
    else if (focusOn == "fontSize") 
	{
        toDownAction(fontSizeOption.length, fontSizeOption);
    }
    else if (focusOn == "fontEdgeStyle") 
	{
        toDownAction(fontEdgeStyleOption.length, fontEdgeStyleOption);
    }
	else if (focusOn == "fontEdgeColor") 
	{
        toDownAction(fontColorOption.length, fontColorOption);
    }
	else if (focusOn == "fgColor") 
	{
        toDownAction(fontColorOption.length, fontColorOption);
    }
	else if (focusOn == "bgColor") 
	{
        toDownAction(fontColorOption.length, fontColorOption);
    }
	else if (focusOn == "fgOpacity") 
	{
        toDownAction(fontOpacityOption.length, fontOpacityOption);
    }
	else if (focusOn == "bgOpacity") 
	{
        toDownAction(fontOpacityOption.length, fontOpacityOption);
    }
}

function toUp() {
    if (focusOn == "menu") 
	{
        if (list_position_h <= 0) 
		{
            list_position_h = findMaxPosition();
        }
        else 
		{
            list_position_h--;
        }
        refreshFocusOfMenuList();
    }
	 else if (focusOn == "mode") 
	{
        toUpAction(modeOption.length, modeOption);
    }
    else if (focusOn == "fontStyle") 
	{
        toUpAction(fontStyleOption.length, fontStyleOption);
    }
    else if (focusOn == "fontSize") 
	{
        toUpAction(fontSizeOption.length, fontSizeOption);
    }
    else if (focusOn == "fontEdgeStyle") 
	{
        toUpAction(fontEdgeStyleOption.length, fontEdgeStyleOption);
    }
	else if (focusOn == "fontEdgeColor") 
	{
        toUpAction(fontColorOption.length, fontColorOption);
    }
	else if (focusOn == "fgColor") 
	{
        toUpAction(fontColorOption.length, fontColorOption);
    }
	else if (focusOn == "bgColor") 
	{
        toUpAction(fontColorOption.length, fontColorOption);
    }
	else if (focusOn == "fgOpacity") 
	{
        toUpAction(fontOpacityOption.length, fontOpacityOption);
    }
	else if (focusOn == "bgOpacity") 
	{
        toUpAction(fontOpacityOption.length, fontOpacityOption);
    }
}

function doEnter() {
    if (focusOn == "menu") 
	{
        if (focusOn == "menu") 
		{
            findFunction(list_position_h);
        }
    }
    else if (focusOn == "mode") 
	{
        $("listForm").style.display = "none";
        $("fourthListFocus").src = mainFocus[0];
        modeValue = form_position_h + offset;
		setting.setCCOptionMode(modeValue, 2);
        $("mode").innerHTML = modeOption[modeValue];
        focusOn = "menu";
		checkMenuShow();
    }
    else if (focusOn == "fontStyle") 
	{
        $("listForm").style.display = "none";
        $("fourthListFocus").src = mainFocus[0];
        fontStyleValue = form_position_h + offset;
		setting.setCCStyleByType(0,fontStyleValue,2);
        $("fontStyle").innerHTML = fontStyleOption[fontStyleValue];
        focusOn = "menu";
    }
	else if (focusOn == "fontSize") 
	{
        $("listForm").style.display = "none";
        $("fourthListFocus").src = mainFocus[0];
        fontSizeValue = form_position_h + offset;
        setting.setCCStyleByType(1,fontSizeValue,2);
        $("fontSize").innerHTML = fontSizeOption[fontSizeValue];
        focusOn = "menu";
    }
	else if (focusOn == "fontEdgeStyle") 
	{
        $("listForm").style.display = "none";
        $("fourthListFocus").src = mainFocus[0];
        fontEdgeStyleValue = form_position_h + offset;
        setting.setCCStyleByType(2,fontEdgeStyleValue,2);
        $("fontEdgeStyle").innerHTML = fontEdgeStyleOption[fontEdgeStyleValue];
        focusOn = "menu";
    }
	else if (focusOn == "fontEdgeColor") 
	{
        $("listForm").style.display = "none";
        $("fourthListFocus").src = mainFocus[0];
        fontEdgeColorValue = form_position_h + offset;
        setting.setCCStyleByType(3,fontEdgeColorValue,2);
        $("fontEdgeColor").innerHTML = fontColorOption[fontEdgeColorValue];
        focusOn = "menu";
    }
	else if (focusOn == "fgColor") 
	{
        $("listForm").style.display = "none";
        $("fourthListFocus").src = mainFocus[0];
        fgColorValue = form_position_h + offset;
        setting.setCCStyleByType(4,fgColorValue,2);
        $("fgColor").innerHTML = fontColorOption[fgColorValue];
        focusOn = "menu";
    }
	else if (focusOn == "bgColor") 
	{
        $("listForm").style.display = "none";
        $("fourthListFocus").src = mainFocus[0];
        bgColorValue = form_position_h + offset;
        setting.setCCStyleByType(5,bgColorValue,2);
        $("bgColor").innerHTML = fontColorOption[bgColorValue];
        focusOn = "menu";
    }
	else if (focusOn == "fgOpacity") 
	{
        $("listForm").style.display = "none";
        $("fourthListFocus").src = mainFocus[0];
        fgOpacityValue = form_position_h + offset;
        setting.setCCStyleByType(6,fgOpacityValue,2);
        $("fgOpacity").innerHTML = fontOpacityOption[fgOpacityValue];
        focusOn = "menu";
    }
	else if (focusOn == "bgOpacity") 
	{
        $("listForm").style.display = "none";
        $("fourthListFocus").src = mainFocus[0];
        bgOpacityValue = form_position_h + offset;
        setting.setCCStyleByType(7,bgOpacityValue,2);
        $("bgOpacity").innerHTML = fontOpacityOption[bgOpacityValue];
        focusOn = "menu";
    }

}
function toBack() {
    if (focusOn == "menu") 
	{
        parent.returnPage(3);
    }
    else 
	{
        $("listForm").style.display = "none";
        $("fourthListFocus").src = mainFocus[0];
        focusOn = "menu";
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
/*
0:font_style;
1:font_size;
2:font_edge_style;
3:cc_style.font_edge_color;
4:cc_style.fg_color;
5:cc_style.bg_color;
6:cc_style.fg_opacity;
7:cc_style.bg_opacity;
*/
function initModuleParam()
{
	modeValue = setting.getCCOptionMode();
	fontStyleValue = setting.getCCStyleByType(0);
	fontSizeValue = setting.getCCStyleByType(1);
	fontEdgeStyleValue = setting.getCCStyleByType(2);
	fontEdgeColorValue = setting.getCCStyleByType(3);
	fgColorValue = setting.getCCStyleByType(4);
	bgColorValue = setting.getCCStyleByType(5);
	fgOpacityValue = setting.getCCStyleByType(6);
	bgOpacityValue = setting.getCCStyleByType(7);
}
function checkMenuShow()
{	
	menuList[0].showFlag = 1;	
	if(modeValue == 0)
	{
		for (var i = 1; i < menuList.length; i++) 
		{
			menuList[i].showFlag = 1;
		}
    }
	else
	{
		for (var i = 1; i < menuList.length; i++) 
		{
			menuList[i].showFlag = 0;
		}
	}
	for (var i = 0; i < menuList.length; i++)
	{
        if (menuList[i].showFlag == 1) 
		{
            fourthMenuRightLiList[i + 1].style.display = "block";
        }
        else 
		{
            fourthMenuRightLiList[i + 1].style.display = "none";
        }
    }
}

function refreshMenuShow()
{
	$("mode").innerHTML = modeOption[modeValue];
	$("fontStyle").innerHTML = fontStyleOption[fontStyleValue];
	$("fontSize").innerHTML = fontSizeOption[fontSizeValue];
	$("fontEdgeStyle").innerHTML = fontEdgeStyleOption[fontEdgeStyleValue];
	$("fontEdgeColor").innerHTML = fontColorOption[fontEdgeColorValue];
	$("fgColor").innerHTML = fontColorOption[fgColorValue];
	$("bgColor").innerHTML = fontColorOption[bgColorValue];
	$("fgOpacity").innerHTML = fontOpacityOption[fgOpacityValue];
	$("bgOpacity").innerHTML = fontOpacityOption[bgOpacityValue];
}
var listFormLiList;
var fourthMenuRightLiList;
function init() 
{
    top.initTextDirection(window);
    timeoutInit();
    fourthMenuRightLiList = $("fourthMenuRight").getElementsByTagName("li");
    var fourthMenuRightSpanList = $("fourthMenuRight").getElementsByTagName("span");
	for(var i = 0; i < fourthMenuRightSpanList.length; i++)
	{
    	fourthMenuRightSpanList[i].innerHTML = CCTitleWords[i];
	}
	initModuleParam();
    checkMenuShow();
	refreshMenuShow();	

    list_position_h = 0;
    $("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP * list_position_h + "px";

    listFormLiList = $("listForm").getElementsByTagName("li");
    addMouseListener();
    ttsRead();
}

function addMouseListener() 
{
    document.body.onmousedown = function (evt) 
	{
        evt.preventDefault();
        top.timeoutFuc.osdTimeoutEndFuc();
        if (evt.button == 2) toBack();//right key
        top.timeoutFuc.osdTimeoutStartFuc();
    }

    //menu
    for (var i = 1; i < 4; i++) 
	{
        fourthMenuRightLiList[i].setAttribute("newAttr", i);
        fourthMenuRightLiList[i].onmousedown = function (evt) 
		{
            top.timeoutFuc.osdTimeoutEndFuc();
            if (evt.button == 0) 
			{//left key
                if (focusOn == "menu") 
				{
                    if (divxActiveStatus != 1) 
					{
                        if (parseInt(this.getAttribute("newAttr")) < 2) 
						{
                            list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
                        }
                        else if (parseInt(this.getAttribute("newAttr")) > 2) 
						{
                            list_position_h = parseInt(this.getAttribute("newAttr")) - 2;
                        }
                        else 
						{
                            top.timeoutFuc.osdTimeoutStartFuc();
                            return;
                        }
                    }
                    else 
					{
                        list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
                    }
                    $("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP * list_position_h + "px";
                    doEnter();
                }
            }
            top.timeoutFuc.osdTimeoutStartFuc();
        }
    }

    //form
    for (var i = 0; i < 2; i++) 
	{
        listFormLiList[i].setAttribute("newAttr", i);
        listFormLiList[i].onmousedown = function (evt) 
		{
            top.timeoutFuc.osdTimeoutEndFuc();
            if (evt.button == 0) 
			{//left key
                if (focusOn == "tLink") 
				{
                    form_position_h = parseInt(this.getAttribute("newAttr"));
                    $("listFormFocus").style.top = form_position_h * FORM_STEP + "px";
                    doEnter();
                }
            }
            top.timeoutFuc.osdTimeoutStartFuc();
        }
    }
}


function doMode()
{
	$("fourthListFocus").src = mainFocus[1];
	if (modeValue >= 5) 
	{
		form_position_h = 4;
		offset = modeValue - form_position_h;
	}
	else 
	{
		form_position_h = modeValue;
		offset = 0;
	}
	var topOffset = SUB_MENU_START + SUB_MENU_STEP * list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList, modeOption, modeOption.length, form_position_h, offset);
	focusOn = "mode";

}
function doFontStyle()
{
	$("fourthListFocus").src = mainFocus[1];
	if (fontStyleValue >= 5) 
	{
		form_position_h = 4;
		offset = fontStyleValue - form_position_h;
	}
	else 
	{
		form_position_h = fontStyleValue;
		offset = 0;
	}
	var topOffset = SUB_MENU_START + SUB_MENU_STEP * list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList, fontStyleOption, fontStyleOption.length, form_position_h, offset);
	focusOn = "fontStyle";
}
function doFontSize()
{
	$("fourthListFocus").src = mainFocus[1];
	if (fontSizeValue >= 5) 
	{
		form_position_h = 4;
		offset = fontSizeValue - form_position_h;
	}
	else 
	{
		form_position_h = fontSizeValue;
		offset = 0;
	}
	var topOffset = SUB_MENU_START + SUB_MENU_STEP * list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList, fontSizeOption, fontSizeOption.length, form_position_h, offset);
	focusOn = "fontSize";
}
function doFontEdgeStyle()
{
	$("fourthListFocus").src = mainFocus[1];
	if (fontEdgeStyleValue >= 5) 
	{
		form_position_h = 4;
		offset = fontEdgeStyleValue - form_position_h;
	}
	else 
	{
		form_position_h = fontEdgeStyleValue;
		offset = 0;
	}
	var topOffset = SUB_MENU_START + SUB_MENU_STEP * list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList, fontEdgeStyleOption, fontEdgeStyleOption.length, form_position_h, offset);
	focusOn = "fontEdgeStyle";
}
function doFontEdgeColor()
{
	$("fourthListFocus").src = mainFocus[1];
	if (fontEdgeColorValue >= 5) 
	{
		form_position_h = 4;
		offset = fontEdgeColorValue - form_position_h;
	}
	else 
	{
		form_position_h = fontEdgeColorValue;
		offset = 0;
	}
	var topOffset = SUB_MENU_START + SUB_MENU_STEP * list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList, fontColorOption, fontColorOption.length, form_position_h, offset);
	focusOn = "fontEdgeColor";
}
function doFGColor()
{
	$("fourthListFocus").src = mainFocus[1];
	if (fgColorValue >= 5) 
	{
		form_position_h = 4;
		offset = fgColorValue - form_position_h;
	}
	else 
	{
		form_position_h = fgColorValue;
		offset = 0;
	}
	var topOffset = SUB_MENU_START + SUB_MENU_STEP * list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList, fontColorOption, fontColorOption.length, form_position_h, offset);
	focusOn = "fgColor";
}
function doBGColor()
{
	$("fourthListFocus").src = mainFocus[1];
	if (bgColorValue >= 5) 
	{
		form_position_h = 4;
		offset = bgColorValue - form_position_h;
	}
	else 
	{
		form_position_h = bgColorValue;
		offset = 0;
	}
	var topOffset = SUB_MENU_START + SUB_MENU_STEP * list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList, fontColorOption, fontColorOption.length, form_position_h, offset);
	focusOn = "bgColor";
}
function doFGOpacity()
{
	$("fourthListFocus").src = mainFocus[1];
	if (fgOpacityValue >= 5) 
	{
		form_position_h = 4;
		offset = fgOpacityValue - form_position_h;
	}
	else 
	{
		form_position_h = fgOpacityValue;
		offset = 0;
	}
	var topOffset = SUB_MENU_START + SUB_MENU_STEP * list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList, fontOpacityOption, fontOpacityOption.length, form_position_h, offset);
	focusOn = "fgOpacity";
}
function doBGOpacity()
{
	$("fourthListFocus").src = mainFocus[1];
	if (bgOpacityValue >= 5) 
	{
		form_position_h = 4;
		offset = bgOpacityValue - form_position_h;
	}
	else 
	{
		form_position_h = bgOpacityValue;
		offset = 0;
	}
	if(list_position_h > 7)
	{
		var topOffset = SUB_MENU_START + SUB_MENU_STEP * 7 - 10;
	}
	else
	{
	var topOffset = SUB_MENU_START + SUB_MENU_STEP * list_position_h - 10;
	}
	var leftOffset = 778;
	top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList, fontOpacityOption, fontOpacityOption.length, form_position_h, offset);
	focusOn = "bgOpacity";
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
            menuList[i].param();
            break;
        }
    }
}

function refreshFocusOfMenuList() 
{
    $("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP * list_position_h + "px";
}

function findMaxPosition() 
{
    var num = -1;
    for (var i = 0; i < menuList.length; i++) 
	{
        if (menuList[i].showFlag == 1) 
		{
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
function toUpAction(optionCount, optionList) 
{
    if (form_position_h == 0 && offset == 0) 
	{
        offset = (optionCount < 5 ? 0 : (optionCount - 5));
        for (var i = 0; i < (optionCount < 5 ? optionCount : 5); i++) 
		{
            listFormLiList[i].innerHTML = optionList[i + offset];
        }
        form_position_h = (optionCount < 5 ? (optionCount - 1) : 4);
    }
    else if (form_position_h == 0 && offset > 0) 
	{
        offset--;
        for (var i = 0; i < 5; i++) 
		{
            listFormLiList[i].innerHTML = optionList[i + offset];
        }
    }
    else if (form_position_h > 0) 
	{
        form_position_h--;
    }

    $("listFormFocus").style.top = form_position_h * FORM_STEP + "px";
    if (offset > 0) 
	{
        $("listUpImg").style.display = "block";
    }
    else {
        $("listUpImg").style.display = "none";
    }

    if ((offset + 4) >= (optionCount - 1)) 
	{
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
function toDownAction(optionCount, optionList) 
{
    if ((form_position_h + offset) >= (optionCount - 1)) 
	{
        offset = 0;
        for (var i = 0; i < (optionCount < 5 ? optionCount : 5); i++) 
		{
            listFormLiList[i].innerHTML = optionList[i + offset];
        }
        form_position_h = 0;
    }
    else if (form_position_h == 4) 
	{
        offset++;
        for (var i = 0; i < 5; i++) 
		{
            listFormLiList[i].innerHTML = optionList[i + offset];
        }
    }
    else {
        form_position_h++;
    }
    $("listFormFocus").style.top = form_position_h * FORM_STEP + "px";
    if (offset > 0) 
	{
        $("listUpImg").style.display = "block";
    }
    else 
	{
        $("listUpImg").style.display = "none";
    }

    if ((offset + 4) >= (optionCount - 1)) 
	{
        $("listDownImg").style.display = "none";
    }
    else {
        $("listDownImg").style.display = "block";
    }
    top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
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

    if(("menu" == focusOn) && (3 == parent.currentShowMenu))
    {
        switch(currentName)
        {
            case "Mode":
                top.ttsLog("modeValue=" + modeValue);
                ttsName = CCTitleWords[1] + ",";
                currentStatus = modeOption[modeValue];
                break;
            case "Font Style":
                top.ttsLog("fontStyleValue=" + fontStyleValue);
                ttsName = CCTitleWords[2] + ",";
                currentStatus = fontStyleOption[fontStyleValue];
                break;
            case "Font Size":
                top.ttsLog("fontSizeValue=" + fontSizeValue);
                ttsName = CCTitleWords[3] + ",";
                currentStatus = fontSizeOption[fontSizeValue];
                break;
            case "Font Edge Style":
                top.ttsLog("fontEdgeStyleValue=" + fontEdgeStyleValue);
                ttsName = CCTitleWords[4] + ",";
                currentStatus = fontEdgeStyleOption[fontEdgeStyleValue];
                break;
            case "Font Edge Color":
                top.ttsLog("fontEdgeColorValue=" + fontEdgeColorValue);
                ttsName = CCTitleWords[5] + ",";
                currentStatus = fontColorOption[fontEdgeColorValue];
                break;
            case "FG Color":
                top.ttsLog("fgColorValue=" + fgColorValue);
                ttsName = CCTitleWords[6] + ",";
                currentStatus = fontColorOption[fgColorValue];
                break;
            case "BG Color":
                top.ttsLog("bgColorValue=" + bgColorValue);
                ttsName = CCTitleWords[7] + ",";
                currentStatus = fontColorOption[bgColorValue];
                break;
            case "FG Opacity":
                top.ttsLog("fgOpacityValue=" + fgOpacityValue);
                ttsName = CCTitleWords[8] + ",";
                currentStatus = fontOpacityOption[fgOpacityValue];
                break;
            case "BG Opacity":
                top.ttsLog("bgOpacityValue=" + bgOpacityValue);
                ttsName = CCTitleWords[9] + ",";
                currentStatus = fontOpacityOption[bgOpacityValue];
                break;
            default:
                ttsName = "";
                currentStatus = "";
                break;
        }
    }
    else if("mode" == focusOn)
    {
        top.ttsLog("modeValue=" + modeValue + "   form_position_h + offset=" + (form_position_h + offset));
        ttsName = "";
        currentStatus = modeOption[form_position_h + offset];
        isSelected(modeOption[modeValue] == currentStatus);
    }
    else if("fontStyle" == focusOn)
    {
        top.ttsLog("fontStyleValue=" + fontStyleValue + "   form_position_h + offset=" + (form_position_h + offset));
        ttsName = "";
        currentStatus = fontStyleOption[form_position_h + offset];
        isSelected(fontStyleOption[fontStyleValue] == currentStatus);
    }
    else if("fontSize" == focusOn)
    {
        top.ttsLog("fontSizeValue=" + fontSizeValue + "   form_position_h + offset=" + (form_position_h + offset));
        ttsName = "";
        currentStatus = fontSizeOption[form_position_h + offset];
        isSelected(fontSizeOption[fontSizeValue] == currentStatus);
    }
    else if("fontEdgeStyle" == focusOn)
    {
        top.ttsLog("fontEdgeStyleValue=" + fontEdgeStyleValue + "   form_position_h + offset=" + (form_position_h + offset));
        ttsName = "";
        currentStatus = fontEdgeStyleOption[form_position_h + offset];
        isSelected(fontEdgeStyleOption[fontEdgeStyleValue] == currentStatus);
    }
    else if("fontEdgeColor" == focusOn)
    {
        top.ttsLog("fontEdgeColorValue=" + fontEdgeColorValue + "   form_position_h + offset=" + (form_position_h + offset));
        ttsName = "";
        currentStatus = fontColorOption[form_position_h + offset];
        isSelected(fontColorOption[fontEdgeColorValue] == currentStatus);
    }
    else if("fgColor" == focusOn)
    {
        top.ttsLog("fgColorValue=" + fgColorValue + "   form_position_h + offset=" + (form_position_h + offset));
        ttsName = "";
        currentStatus = fontColorOption[form_position_h + offset];
        isSelected(fontColorOption[fgColorValue] == currentStatus);
    }
    else if("bgColor" == focusOn)
    {
        top.ttsLog("bgColorValue=" + bgColorValue + "   form_position_h + offset=" + (form_position_h + offset));
        ttsName = "";
        currentStatus = fontColorOption[form_position_h + offset];
        isSelected(fontColorOption[bgColorValue] == currentStatus);
    }
    else if("fgOpacity" == focusOn)
    {
        top.ttsLog("fgOpacityValue=" + fgOpacityValue + "   form_position_h + offset=" + (form_position_h + offset));
        ttsName = "";
        currentStatus = fontOpacityOption[form_position_h + offset];
        isSelected(fontOpacityOption[fgOpacityValue] == currentStatus);
    }
    else if("bgOpacity" == focusOn)
    {
        top.ttsLog("bgOpacityValue=" + bgOpacityValue + "   form_position_h + offset=" + (form_position_h + offset));
        ttsName = "";
        currentStatus = fontOpacityOption[form_position_h + offset];
        isSelected(fontOpacityOption[bgOpacityValue] == currentStatus);
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