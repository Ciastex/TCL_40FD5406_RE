/******************** created by chenhua ***********************/
var ratingTitleWords 			= top.parentalRatingNA;//[top.sysOptions[1],top.sysMenuLangOptions[0],top.sysMenuLangOptions[1],top.sysMenuLangOptions[2]];
var ageRatingWords				= top.ageRatingOptions;
var contentRatingWords          = top.contentRatingOptions;
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
var blockunrated                  = 0;
var contentRatingVal 			= 0;
var offset					= 0;					//列表弹出框中的焦点的真实位置和焦点显示位置的差值，比如audio language中offset = audioLang1Pos - form_position_h
var showItemNum = 0;
var SUB_MENU_START 				= 160;					//三级级菜单焦点移动起始位置
var SUB_MENU_STEP 				= 70;					//三级级主菜单焦点移动的step
var FORM_STEP					= 80;					//弹出框焦点移动的step
var PROGRESS_WIDTH				= 500;	
var mainFocus                   = ["../images/Focus_Frame/Focus-1.png","../images/Focus_Frame/Focus-2.png"];
var DIALOG_BUTTON_START		= 190;					//对话框中按钮焦点起始位置
var DIALOG_BUTTON_STEP		= 250;					//对话框焦点移动的step
document.onsystemevent 				= notifyProcess;

var menuList =
[
	{name:"Block unrated rating"		,	param:function(){showBlockSwitch();}			,showFlag:1},
	{name:"Age rating"		,	param:function(){showAgeRating();}			,showFlag:1},
	{name:"Content rating"   ,	param:function(){showContentRating();}		,showFlag:1},
	{name:"US" 			    ,	param:function(){showParentalRatingUS();}	,showFlag:1},
	{name:"Canada" 			,	param:function(){showParentalRatingCanada();}	,showFlag:1},
	{name:"RRT settings"		,	param:function(){showRRTSetting();}			    ,showFlag:1},
	{name:"Reset RRT"			,	param:function(){initResetRRT();}	    		,showFlag:1},
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

function initResetRRT()
{
	var resetFormSpanList = $("resetForm").getElementsByTagName("span");
	resetFormSpanList[0].innerHTML = top.parentalRatingNA[6];
	resetFormSpanList[1].innerHTML = top.sysResetRRT;
	resetFormSpanList[2].innerHTML = top.okCancel[0];
	resetFormSpanList[3].innerHTML = top.okCancel[1];
	resetform_position_h = 1;
	$("resetFocus").style.left = DIALOG_BUTTON_START + DIALOG_BUTTON_STEP*resetform_position_h + "px";
	$("resetForm").style.display = "block";
	top.showDialogPosition($("resetForm"),800,300,1920,1080,0,0);
	top.stopTimeout();
	parent.hiddenPage(3);
	focusOn = "resetRRT";

}

function showBlockSwitch()
{
	$("fourthListFocus").src=mainFocus[1];
	initList(blockunrated,top.offOn);
	focusOn = "blockswitch";
}

function showAgeRating()
{
	$("fourthListFocus").src=mainFocus[1];
	initList(ageRatingVal,ageRatingWords);
	focusOn = "agerating";
}

function showContentRating()
{
	$("fourthListFocus").src=mainFocus[1];
	initList(contentRatingVal,contentRatingWords);
	focusOn = "contentrating";
}

function showRRTSetting()
{
	parent.jumpPage(4,"systemSetting/showRRTSetting.html");
}

function showParentalRatingUS()
{
	parent.jumpPage(4,"systemSetting/parentalRatingUS.html");
}

function showParentalRatingCanada()
{
	parent.jumpPage(4,"systemSetting/parentalRatingCanada.html");
}

function updateUI()
{
	//1、重新得到数据
	//updateItemValues();
	//2、根据数据设置showflag
	checkShowMenu();
	//3、显示每一个item
	showItems();
}

function checkShowMenu()
{
	menuList[1].showFlag = 0;
	menuList[2].showFlag = 0;
	if(setting.isVchipDataAvailable() && setting.getVchipRegionNum() != 0)
	{
		menuList[5].showFlag = 1;
	}
	else
	{
		menuList[5].showFlag = 0;
	}
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
		$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	}
	else if(focusOn == "agerating")
	{
		toDownInList(ageRatingWords.length,ageRatingWords);
	}
	else if(focusOn == "contentrating")
	{
		toDownInList(contentRatingWords.length,contentRatingWords);
	}
	else if(focusOn == "blockswitch")
	{
		toDownInList(top.offOn.length,top.offOn);
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
		$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	}
	else if(focusOn == "agerating")
	{
		toUpInList(ageRatingWords.length,ageRatingWords);
	}
	else if(focusOn == "contentrating")
	{
		toUpInList(contentRatingWords.length,contentRatingWords);
	}
	else if(focusOn == "blockswitch")
	{
		toUpInList(top.offOn.length,top.offOn);
	}
}

/*
描述：在语言列表出来的时候按Down键刷新焦点的效果
参数：sumLang：允许的语言总数量；langIndexList：所有允许的语言的索引值保存在langIndexList数组中
全局变量：form_position_h；offset;
*/
function toDownInList(sum,IndexList)
{
	if(sum < 5)
	{
		form_position_h = (form_position_h + 1)%sum;
	}
	else
	{
		if (form_position_h == 4 && (form_position_h + offset) >= (sum - 1)) {
			offset = 0;
			for (var i = 0; i < 5; i++) {
				listFormLiList[i].innerHTML = IndexList[i + offset];
			}
			form_position_h = 0;
		}
		else if (form_position_h == 4 && (form_position_h + offset) < (sum - 1)) {
			offset++;
			for (var i = 0; i < 5; i++) {
				listFormLiList[i].innerHTML = IndexList[i + offset];
			}
		}
		else {
			form_position_h++;
		}
	}
	$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
	if(offset > 0)
	{
		$("listUpImg").style.display = "block";
	}
	else
	{
		$("listUpImg").style.display = "none";
	}
	
	if((offset + 4) >= (sum - 1))
	{
		$("listDownImg").style.display = "none";
	}
	else
	{
		$("listDownImg").style.display = "block";
	}
	top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
}

/*
描述：在语言列表出来的时候按Up键刷新焦点的效果
参数：sumLang：允许的语言总数量；langIndexList：所有允许的语言的索引值保存在langIndexList数组中
全局变量：form_position_h；offset;
*/
function toUpInList(sum,IndexList)
{
	if(sum < 5)
	{
		form_position_h = (form_position_h - 1 + sum)%sum;
	}
	else
	{
		if(form_position_h == 0 && offset == 0)
		{
			offset = sum - 5;
			for(var i = 0; i < 5; i++)
			{
				listFormLiList[i].innerHTML = IndexList[i + offset];
			}
			form_position_h = 4;
		}
		else if(form_position_h==0 && offset > 0)
		{
			offset--;
			for(var i = 0; i < 5; i++)
			{
				listFormLiList[i].innerHTML = IndexList[i + offset];
			}
		}
		else if(form_position_h > 0)
		{
			form_position_h--;
		}
	}
	$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
	if(offset > 0)
	{
		$("listUpImg").style.display = "block";
	}
	else
	{
		$("listUpImg").style.display = "none";
	}

	if((offset + 4) >= (sum - 1))
	{
		$("listDownImg").style.display = "none";
	}
	else
	{
		$("listDownImg").style.display = "block";
	}
	top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
}

function initList(position,IndexList)
{
	if(position >= 5)
	{
		form_position_h = 4;
		offset = position - form_position_h;
	}
	else
	{
		form_position_h = position;
		offset = 0;
	}
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,IndexList,IndexList.length,form_position_h,offset);
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

function doEnter()
{
	if(focusOn == "menu")
	{
		executeFunction(list_position_h);
	}
	else if(focusOn == "agerating")
	{
		$("fourthListFocus").src=mainFocus[0];
		ageRatingVal = form_position_h + offset;
		if(ageRatingVal!=0)
		{
			setting.parentalRating = ageRatingVal + 1;
		}
		else
		{
			setting.parentalRating = ageRatingVal;
		}
		//setting.ageRating = ageRatingVal;//zenglm fix me
		$('ageRating').innerHTML = ageRatingWords[ageRatingVal];
		$("listForm").style.display = "none";
		focusOn = "menu";
		offset = 0;
	}
	else if(focusOn == "contentrating")
	{
		$("fourthListFocus").src=mainFocus[0];
		contentRatingVal = form_position_h + offset;
		setting.setContentLockLevel(contentRatingVal);//= contentRatingVal;
		//setting.contentRating = contentRatingVal;  //zenglm fix me
		$('contentRating').innerHTML = contentRatingWords[contentRatingVal];
		$("listForm").style.display = "none";
		focusOn = "menu";
		offset = 0;
	}
	else if(focusOn == "resetRRT")
	{
		if(resetform_position_h == 0)
		{
			setting.reSetVchip();
			updateUI();
		}
		if(list_position_h > showItemNum)
		{
			list_position_h = showItemNum;
			$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
		}
		$("resetForm").style.display = "none";
		focusOn = "menu";
		parent.showPage(3);
	}
	else if(focusOn == "blockswitch")
	{
		$("fourthListFocus").src=mainFocus[0];
		blockunrated = form_position_h + offset;
		//setting.setContentLockLevel(contentRatingVal);//= contentRatingVal;
		//setting.contentRating = contentRatingVal;  //zenglm fix me
		setting.vchipBlockUnrated = blockunrated;
		$('blockSwitch').innerHTML = top.offOn[blockunrated];
		$("listForm").style.display = "none";
		focusOn = "menu";
		offset = 0;
	}
}
function toBack()
{
	if(focusOn == "menu")
	{
		parent.returnPage(3);
	}
	else if(focusOn == "agerating" ||focusOn == "contentrating" || focusOn == "blockswitch")
	{
		$("fourthListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "menu";
		offset = 0;
	}
	else if(focusOn == "resetRRT")
	{
		$("resetForm").style.display = "none";
		focusOn = "menu";
		parent.showPage(3);
	}
	else if(focusOn == "menuLanguage" || focusOn == "audioLanguage1" || focusOn == "audioLanguage2")
	{
		$("fourthListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "menu";
		offset = 0;
	}
}
function toLeft()
{
	if(focusOn == "resetRRT")
	{
		if(resetform_position_h == 0)
		{
			resetform_position_h = 1;
		}
		else
		{
			resetform_position_h = 0;
		}
		$("resetFocus").style.left = DIALOG_BUTTON_START + DIALOG_BUTTON_STEP*resetform_position_h + "px";
	}
	else
		toBack();
}
function toRight()
{
	if(focusOn == "resetRRT")
	{
		if(resetform_position_h == 0)
		{
			resetform_position_h = 1;
		}
		else
		{
			resetform_position_h = 0;
		}
		$("resetFocus").style.left = DIALOG_BUTTON_START + DIALOG_BUTTON_STEP*resetform_position_h + "px";
	}
	else
		doEnter();
}

var thdMenuRightSpanList;
var thdMenuRightLiList;
var listFormLiList;
function init()
{
    top.initTextDirection(window);
	timeoutInit();
	thdMenuRightLiList = $("fourthMenuRight").getElementsByTagName("li");
	thdMenuRightSpanList = $("fourthMenuRight").getElementsByTagName("span");

	ageRatingVal = setting.parentalRating-1;
	if(ageRatingVal < 0)//0;//setting.ageRating;////zenglm fix me //in case database init value is 0;
	{
		ageRatingVal = 0;  
	}
	contentRatingVal = setting.getContentLockLevel(); //0;//setting.contenRating;////zenglm fix me

	blockunrated = setting.vchipBlockUnrated;
	$('blockSwitch').innerHTML = top.offOn[blockunrated];
	$('ageRating').innerHTML = ageRatingWords[ageRatingVal];
	$('contentRating').innerHTML = contentRatingWords[contentRatingVal];
	
	list_position_h = 0;
	$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	updateUI();
	$("titleNameSpan").innerHTML = ratingTitleWords[0];
	for(var i = 1; i < thdMenuRightSpanList.length; i++)
	{
		thdMenuRightSpanList[i].innerHTML = ratingTitleWords[i];
	}
	listFormLiList = $("listForm").getElementsByTagName("li");
	addMouseListener();
	ttsRead();
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	
	for(var i = 1; i < 7; i++)
	{
		thdMenuRightLiList[i].setAttribute("newAttr",i);
		thdMenuRightLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "menu")
				{
					list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
					$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}

	//form
	for(var i = 0; i < 5; i++)
	{
		listFormLiList[i].setAttribute("newAttr",i);
		listFormLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn != "menu")
				{
					form_position_h = parseInt(this.getAttribute("newAttr"));
					$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	$("listUpImg").onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusOn != "menu")
			{
				form_position_h = 0;
				$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
				toUp();
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	$("listDownImg").onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusOn != "menu")
			{
				form_position_h = 4;
				$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
				toDown();
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	var resetButton = $("resetForm").getElementsByClassName("dialogButton");
	resetButton[0].onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusOn == "resetRRT"){
				resetform_position_h = 0;
				doEnter();
			}
		}
	}
	resetButton[1].onmousedown = function(evt){
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusOn == "resetRRT"){
				resetform_position_h = 1;
				doEnter();
			}
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

	if(("menu" == focusOn) && (3 == parent.currentShowMenu))
	{
		switch(currentName)
		{
			case "Block unrated rating":
				top.ttsLog("blockunrated=" + blockunrated);
				ttsName = ratingTitleWords[1] + ",";
				currentStatus = top.offOn[blockunrated];
				break;
			case "Age rating":
				top.ttsLog("ageRatingVal=" + ageRatingVal);
				ttsName = ratingTitleWords[2] + ",";
				currentStatus = ageRatingWords[ageRatingVal];
				break;
			case "Content rating":
				top.ttsLog("contentRatingVal=" + contentRatingVal);
				ttsName = ratingTitleWords[3] + ",";
				currentStatus = contentRatingWords[contentRatingVal];
				break;
			case "US":
				ttsName = ratingTitleWords[4] + ",";
				currentStatus = "";
				break;
			case "Canada":
				ttsName = ratingTitleWords[5] + ",";
				currentStatus = "";
				break;
			case "RRT settings":
				ttsName = ratingTitleWords[6] + ",";
				currentStatus = "";
				break;
			case "Reset RRT":
				ttsName = ratingTitleWords[7] + ",";
				currentStatus = "";
				break;
			default:
				ttsName = "";
				currentStatus = "";
				break;
		}
	}
	else if("blockswitch" == focusOn)
	{
		top.ttsLog("blockunrated=" + blockunrated + " form_position_h=" + form_position_h);
		ttsName = "";
		currentStatus = top.offOn[form_position_h];
		isSelected(top.offOn[blockunrated] == currentStatus);
	}
	else if("agerating" == focusOn)
	{
		top.ttsLog("ageRatingVal=" + ageRatingVal + " form_position_h=" + form_position_h);
		ttsName = "";
		currentStatus = sysanalogCCOption[form_position_h];
		isSelected(ageRatingWords[ageRatingVal] == currentStatus);
	}
	else if(("menu" == focusOn) && (4 == parent.currentShowMenu))
	{
		top.ttsLog("");
		parent.$("subMenu4").contentWindow.ttsRead();
	}
	else if(("resetRRT" == focusOn) && ("block" == $("resetForm").style.display))
	{
		top.ttsLog("resetform_position_h=" + resetform_position_h);
		ttsName = top.sysResetRRT + ",";
		currentStatus = top.okCancel[resetform_position_h];
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


