/******************** created by chenhua ***********************/
var teletextTitleWords 			= [top.chOptions[7],top.ttxOptionsCon[0],top.ttxOptionsCon[1]];
var ttxLanguageList             = top.ttxLanguage;
var sumTtxLang					= top.audioSttlTtxLang.length - 1;
var ttxLangIndex 				= top.audioSttlTtxLang;
var languagesWords				= new Array(sumTtxLang);
for(var i = 0; i < sumTtxLang; i++)
{
	languagesWords[i] = top.all_language[ttxLangIndex[i]];
}

var sumPageLang					= 9;
var offset                		= 0;
var setting 					= top.g_setting;
var channel			 			= top.g_channel;
var focusOn 					= "menu"; 				//menu,subtitle,subtitleLanguage1,subtitleLanguage2
var list_position_h				= 0;
var form_position_h				= 0;
var ttxPageLang1Pos				= 0;					//当decoding page language语言在ttxLangIndex中的下标
var ttxLangPos				    = 0;					//当前digital teletext language语言在	ttxLangIndex中的下标

var SUB_MENU_START 				= 160;					//三级级菜单焦点移动起始位置
var SUB_MENU_STEP 				= 70;					//三级级主菜单焦点移动的step
var FORM_STEP					= 80;					//弹出框焦点移动的step
var PROGRESS_WIDTH				= 500;	
		
// var mainFocus                   = ["../images/Focus_Frame/Focus-1.png","../images/Focus_Frame/Focus-2.png"];
document.onsystemevent 				= notifyProcess;


var thdMenuRightLiList;
var listFormLiList;
var listFirstSpans;

var showItemNum = 0;

var menuList =
[
	{name:"Decoding page language"	  	 ,	param:function(){doDecodinglanguage();   },		showFlag:1},
	{name:"Digital teletext language"    ,  param:function(){doteletextlanguage();	 }, 	showFlag:1}
];

function init()
{
	timeoutInit();
    top.initTextDirection(window);
	
	thdMenuRightLiList = $("thdMenuRight").getElementsByTagName("li");				//得到所有的 li，算上标题，一共3个
	var thdMenuRightSpanList = $("thdMenuRight").getElementsByTagName("span");		//得到所有的span，算上标题，一共3个
	listFirstSpans = $("thdMenuRight").getElementsByClassName("listFirstProperty");	//得到除了 标题的 span，2个
	listFormLiList = $("listForm").getElementsByTagName("li");						//得到弹出列表框的li，一共5个
	
	
	for(var i = 0; i <= menuList.length; i++)//赋值
	{
		thdMenuRightSpanList[i].innerHTML = teletextTitleWords[i];
	}
	
	
	//刷新界面
	updateUI();
	
	
	list_position_h = 0;
	$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	
	addMouseListener();
	top.doEleScrForNoOption(listFirstSpans,list_position_h, 0);
	ttsRead();
}

//-----------0、刷新界面----------------------------------
function updateUI()
{
	//1、重新得到数据
	updateItemValues();
	
	//2、根据数据设置showflag
	checkShowMenu();
	
	//3、为每个item重新赋值
	setValuesForItems();
	
	//4、显示每一个item
	showItems();
}



//-----------1、得到每个item的初始值--------------------------
function updateItemValues()
{
	ttxPageLang1Pos = setting.ttsLanguage;
	ttxLangPos = fixSubtLangFocus(setting.teletextLanguage);
}


//-----------2、得到每个item的showflag标志位------------------
function checkShowMenu()
{
	//此 js 没有条件设置显示与否。默认全部显示
	for(var i=0;i<menuList.length;i++)
	{
		menuList[i].showFlag=1;
	}
}


//-----------3、给每个item赋值------------------------------
function setValuesForItems()
{
	$('decLang').innerHTML = ttxLanguageList[ttxPageLang1Pos];
	$('digLang').innerHTML = languagesWords[ttxLangPos];
}



//-----------4、根据showflag来显示内容-----------------------
function showItems()
{
	showItemNum = 0;
	//设置item是否显示，且记录显示的个数
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag == 1)
		{
			thdMenuRightLiList[i+1].style.display = "block";
			showItemNum++;
		}
		else 
		{
			thdMenuRightLiList[i+1].style.display = "none";
		}
	}
}


function doDecodinglanguage()
{
	initDecPageLang();
	focusOn = "decodingPage";
}


function doteletextlanguage()
{
	initDigTTXLang();
	focusOn = "digitalTtx";
}


//-----------辅助函数：找到此item在所有item中的真实位置，并执行对应函数-----------
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
			menuList[i].param();//执行函数，最好根据界面显示的item的名字在数组中寻找
			break;
		}
	}
}








function doEnter()
{
	if(focusOn == "menu")
	{
		//$("thdListFocus").src=mainFocus[1];//style.display = "none";
		executeFunction(list_position_h);
	}
	else if(focusOn == "decodingPage")
	{
		//$("thdListFocus").src=mainFocus[0];
		setting.ttsLanguage = form_position_h + offset;
		$('decLang').innerHTML = ttxLanguageList[form_position_h + offset];
		$("listForm").style.display = "none";
		focusOn = "menu";
		offset = 0;
	}
	else if(focusOn == "digitalTtx")
	{
		//$("thdListFocus").src=mainFocus[0];
		setting.teletextLanguage=ttxLangIndex[form_position_h + offset];
		channel.testLog(ttxLangIndex[form_position_h + offset]);
		$('digLang').innerHTML = languagesWords[form_position_h + offset];
		channel.testLog(languagesWords[form_position_h + offset]);
		$("listForm").style.display = "none";
		focusOn = "menu";
		offset = 0;
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


function toUp()
{
	if(focusOn == "menu")
	{			
		if(list_position_h <= 0)
		{
			list_position_h = showItemNum-1;
		}
		else
		{
			list_position_h--;
		}
		
		$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
		top.doEleScrForNoOption(listFirstSpans,list_position_h, -1);
	}
	else if(focusOn == "decodingPage" || focusOn == "digitalTtx")
	{
		toUpInLanguages();
	}	
}




function toDown()
{
	if(focusOn == "menu")
	{
		if(list_position_h >= showItemNum-1)
		{
			list_position_h = 0;
		}
		else
		{
			list_position_h++;
		}
		
		$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
		top.doEleScrForNoOption(listFirstSpans,list_position_h, 1);
	}
	else if(focusOn == "decodingPage" || focusOn == "digitalTtx")
	{
		toDownInLanguages();
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



function toBack()
{
	if(focusOn == "menu")
	{
		parent.returnPage(2);
	}
	else if(focusOn == "decodingPage" || focusOn == "digitalTtx")
	{
		//$("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
}



function initDecPageLang()
{
	ttxPageLang1Pos = setting.ttsLanguage;
	if(ttxPageLang1Pos >= 5)
	{
		form_position_h = 4;
		offset = ttxPageLang1Pos - form_position_h;
	}
	else
	{
		form_position_h = ttxPageLang1Pos;
		offset = 0;
	}
	
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 980;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,ttxLanguageList,9,form_position_h,offset);
}



function initDigTTXLang()
{
	ttxLangPos = fixSubtLangFocus(setting.teletextLanguage);
	channel.testLog("ttxLangPos="+ttxLangPos);
	if(ttxLangPos >= 5)
	{
		form_position_h = 4;
		offset = ttxLangPos - form_position_h;
	}
	else
	{
		form_position_h = ttxLangPos;
		offset = 0;
	}
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 980;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,languagesWords,sumTtxLang,form_position_h,offset);
}



function toDownInLanguages()
{
	var optionWords = "";
	var sumLang	= 0;
	if(focusOn == "decodingPage")
	{
		optionWords = ttxLanguageList;
		sumLang = sumPageLang;
	}
	else if(focusOn == "digitalTtx")
	{
		optionWords = languagesWords;
		sumLang = sumTtxLang;
	}
	
	if(form_position_h == 4 && (form_position_h + offset) >= (sumLang - 1))
	{
		offset=0;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = optionWords[i+offset];
		}
		form_position_h = 0;
	}
	else if(form_position_h == 4 && (form_position_h + offset) < (sumLang - 1))
	{
		offset++;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = optionWords[i+offset];
		}
	}
	else
	{
		form_position_h++;
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
	
	if((offset + 4) >= (sumLang - 1))
	{
		$("listDownImg").style.display = "none";
	}
	else
	{
		$("listDownImg").style.display = "block";
	}
	top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
}


function toUpInLanguages()
{
	var optionWords = "";
	var sumLang	= 0;
	if(focusOn == "decodingPage")
	{
		optionWords = ttxLanguageList;
		sumLang = sumPageLang;
	}
	else if(focusOn == "digitalTtx")
	{
		optionWords = languagesWords;
		sumLang = sumTtxLang;
	}
	
	if(form_position_h == 0 && offset == 0)
	{
		offset = sumLang - 5;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = optionWords[i + offset];
		}
		form_position_h = 4;
	}
	else if(form_position_h==0 && offset > 0)
	{
		offset--;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = optionWords[i + offset];
		}
	}
	else if(form_position_h > 0)
	{
		form_position_h--;
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
	
	if((offset + 4) >= (sumLang - 1))
	{
		$("listDownImg").style.display = "none";
	}
	else
	{
		$("listDownImg").style.display = "block";
	}
	top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
}


/*
描述：获取当前选择的subtitle language 在subtLangIndex中的下标
参数：langIndex:subtitle language的枚举值（在所有语言中的索引值）
返回值：当前选择的subtitle language 在subtLangIndex中的下标
全局变量：
*/
function fixSubtLangFocus(langIndex)
{
    for (var i=0; i < sumTtxLang; i++)
    {
        if (ttxLangIndex[i] == langIndex)
        {
            return i;
        }
    }
	return 10;//默认为english
}



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


function $(id)
{
    return document.getElementById(id);
}

function addMouseListener()
{
	document.body.onmousedown = function(evt)
	{
		evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	};
	
	
	for(var i = 1; i < 3; i++)
	{
		thdMenuRightLiList[i].setAttribute("newAttr",i);
		thdMenuRightLiList[i].onmousedown = function(evt)
		{
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0)//left key
			{
				if(focusOn == "menu")
				{
					list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
					$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		};
	}
	
	for(var i = 0; i < 5; i++)
	{
		listFormLiList[i].setAttribute("newAttr",i);
		listFormLiList[i].onmousedown = function(evt)
		{
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0)//left key
			{
				if(focusOn != "menu")
				{
					form_position_h = parseInt(this.getAttribute("newAttr"));
					$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		};
	}
	
	
	$("listUpImg").onmousedown = function(evt)
	{
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0)//left key
		{
			if(focusOn != "menu")
			{
				form_position_h = 0;
				$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
				toUp();
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	};
	
	
	$("listDownImg").onmousedown = function(evt)
	{
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0)//left key
		{
			if(focusOn != "menu")
			{
				form_position_h = 4;
				$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
				toDown();
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	};
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
	var ttsStr = "";
	var currentStatus = "";
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

	if(focusOn == "menu" && 2 == parent.currentShowMenu)
	{
		switch(list_position_h)
		{
			case 0:
				ttsName = top.ttxOptionsCon[0] + ",";
				currentStatus = ttxLanguageList[ttxPageLang1Pos];
				break;
			case 1:
				ttsName = top.ttxOptionsCon[1] + ",";
				currentStatus = languagesWords[ttxLangPos];
				break;
			default:
				ttsName = "";
				currentStatus = "";
				break;
		}
	}
	else if(focusOn == "decodingPage")
	{
		ttsName = "";
		currentStatus = ttxLanguageList[form_position_h + offset];
		isSelected(ttxLanguageList[ttxPageLang1Pos] == currentStatus);
	}
	else if(focusOn == "digitalTtx")
	{
		ttsName = "";
		currentStatus = languagesWords[form_position_h + offset];
		isSelected(languagesWords[ttxLangPos] == currentStatus);
	}
	ttsStr = ttsName + currentStatus;
	if("" != ttsStr)
	{
		top.ttsLog("ttsStr=" + ttsStr);
		//top.ttsLog("focusOn="+focusOn);
		//top.ttsLog("presetPositionH="+presetPositionH);
		top.setTTSSay(top.SPEECH_TYPE_FLUSH, ttsStr);
	}
}
