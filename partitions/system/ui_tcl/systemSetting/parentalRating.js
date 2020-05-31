/******************** created by chenhua ***********************/
var ratingTitleWords 			= top.parentalRatingLA;//[top.sysOptions[1],top.sysMenuLangOptions[0],top.sysMenuLangOptions[1],top.sysMenuLangOptions[2]];
var ageRatingWords				= [top.sysRatingOptions[0],top.ageRatingOptions[1],top.ageRatingOptions[2],top.ageRatingOptions[3],top.ageRatingOptions[4],top.ageRatingOptions[5]];
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
var contentRatingVal 			= 0;
var offset					= 0;					//列表弹出框中的焦点的真实位置和焦点显示位置的差值，比如audio language中offset = audioLang1Pos - form_position_h

var SUB_MENU_START 				= 160;					//三级级菜单焦点移动起始位置
var SUB_MENU_STEP 				= 70;					//三级级主菜单焦点移动的step
var FORM_STEP					= 80;					//弹出框焦点移动的step
var PROGRESS_WIDTH				= 500;	
var mainFocus                   = ["../images/Focus_Frame/Focus-1.png","../images/Focus_Frame/Focus-2.png"];
document.onsystemevent 				= notifyProcess;
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
			ret = false;
			break;
		case top.VK_DOWN:
			toDown();
			ret = false;
			break;
		case top.VK_ENTER:
			doEnter();
			ret = false;
			break;
		case top.VK_LEFT:
			toLeft();
			ret = false;
			break;  
		case top.VK_RIGHT:
			toRight();
			ret = false;
			break;
		case top.VK_BACK:
			toBack();
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
	if(focusOn == "menu")
	{
		if(list_position_h >= 1)
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
	/*else if(focusOn == "menuLanguage")
	{
		toDownInLanguages(sumMenuLanguage,menuLangIndex);
	}
	else if(focusOn == "audioLanguage1")
	{
		toDownInLanguages(sumAudioLanguage,audioLangIndex);
	}
	else if(focusOn == "audioLanguage2")
	{
		toDownInLanguages(sumAudioLanguage,audioLangIndex);
	}*/
}
function toUp()
{
	if(focusOn == "menu")
	{			
		if(list_position_h <= 0)
		{
			list_position_h = 1;
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
}

/*
 描述：menu language切换获取新的显示数据
*/
function refreshUIWhenLanguageChange()
{
    top.initTextDirection(window);
	menuLangTitleWords 			= [top.sysOptions[1],top.sysMenuLangOptions[0],top.sysMenuLangOptions[1],top.sysMenuLangOptions[2]];
 	menuLangWords				= top.sysMenuLang;
	for(var i = 0; i < sumAudioLanguage; i++)
	{
		audioLangWords[i] = top.all_language[audioLangIndex[i]];
	}

	for(var i = 0; i < 4; i++)
	{
		thdMenuRightSpanList[i].innerHTML = menuLangTitleWords[i];
	}
	
	$('menuLangStatus').innerHTML = menuLangWords[menuLangPos];
	$('audioLang1Status').innerHTML = audioLangWords[audioLang1Pos];
	$('audioLang2Status').innerHTML = audioLangWords[audioLang2Pos];
}

/*
描述：在语言列表出来的时候按Down键刷新焦点的效果
参数：sumLang：允许的语言总数量；langIndexList：所有允许的语言的索引值保存在langIndexList数组中
全局变量：form_position_h；offset;
*/
function toDownInList(sum,IndexList)
{
	if(list_position_h == 0)//menu language
	{
		if(form_position_h == 4 && (form_position_h + offset) >= (sum - 1))
		{
			offset=0;
			for(var i = 0; i < 5; i++)
			{
				listFormLiList[i].innerHTML = IndexList[i+offset];
			}
			form_position_h = 0;
		}
		else if(form_position_h == 4 && (form_position_h + offset) < (sum - 1))
		{
			offset++;
			for(var i = 0; i < 5; i++)
			{
				listFormLiList[i].innerHTML = IndexList[i+offset];
			}
		}
		else
		{
			form_position_h++;
		}
	}
	else
	{
		if(form_position_h == 4 && (form_position_h + offset) >= (sum - 1))
		{
			offset=0;
			for(var i = 0; i < 5; i++)
			{
				listFormLiList[i].innerHTML = IndexList[i+offset];
			}
			form_position_h = 0;
		}
		else if(form_position_h == 4 && (form_position_h + offset) < (sum - 1))
		{
			offset++;
			for(var i = 0; i < 5; i++)
			{
				listFormLiList[i].innerHTML = IndexList[i+offset];
			}
		}
		else
		{
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
	if(list_position_h == 0)//menu language
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

function doEnter()
{
	if(focusOn == "menu")
	{
		$("fourthListFocus").src=mainFocus[1];
		if(list_position_h == 0)
		{
			initList(ageRatingVal,ageRatingWords);
			focusOn = "agerating";
		}
		else if(list_position_h == 1)
		{
			initList(contentRatingVal,contentRatingWords);
			focusOn = "contentrating";
		}
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
}
function toBack()
{
	if(focusOn == "menu")
	{
		parent.returnPage(3);
	}
	else if(focusOn == "agerating" ||focusOn == "contentrating")
	{
		$("fourthListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "menu";
		offset = 0;
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
	toBack();
}
function toRight()
{
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
    $("titleNameSpan").innerHTML = ratingTitleWords[0];
	for(var i = 1; i < 3; i++)
	{
		thdMenuRightSpanList[i].innerHTML = ratingTitleWords[i];
	}
	ageRatingVal = setting.parentalRating-1;
	if(ageRatingVal < 0)//0;//setting.ageRating;////zenglm fix me //in case database init value is 0;
	{
		ageRatingVal = 0;  
	}
	contentRatingVal = setting.getContentLockLevel(); //0;//setting.contenRating;////zenglm fix me
	$('ageRating').innerHTML = ageRatingWords[ageRatingVal];
	$('contentRating').innerHTML = contentRatingWords[contentRatingVal];
	
	list_position_h = 0;
	$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	
	listFormLiList = $("listForm").getElementsByTagName("li");
	addMouseListener();
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
	
}



