/******************** created by chenhua ***********************/
var subtitleTitleWords 			= [top.chOptions[6],top.subOptions[0],top.subOptions[1],top.subOptions[2],top.subOptions[3]];
var subOptions					= top.subOptions;
var offOnWords					= top.offOn;
var subtTypeWords				= top.subType;
var sumSubtLang					= top.audioSttlTtxLang.length - 1;					//可允许的subtitle语言的个数
var subtLangIndex 				= top.audioSttlTtxLang;
var languagesWords				= new Array(sumSubtLang);
for(var i = 0; i < sumSubtLang; i++)
{
	languagesWords[i] = top.all_language[subtLangIndex[i]];
}

var setting 					= top.g_setting;
var channel			 			= top.g_channel;
var focusOn 					= "menu"; 				//menu,subtitle,subtitleLanguage1,subtitleLanguage2
var list_position_h				= 0;
var form_position_h				= 0;
var subtLang1Pos				= 0;					//当前first subtitle language语言在subtLangIndex中的下标
var subtLang2Pos				= 0;					//当前second subtitle language语言在	subtLangIndex中的下标
var offset					= 0;					//列表弹出框中的焦点的真实位置和焦点显示位置的差值，比如subtitle language中offset = subtLang1Pos - form_position_h
var enableSubt					= 0;					//0 off,1 on
var subtType					= 0;					//0 Normal,1 Hearing impaired

var SUB_MENU_START 				= 160;					//三级级菜单焦点移动起始位置
var SUB_MENU_STEP 				= 70;					//三级级主菜单焦点移动的step
var FORM_STEP					= 80;					//弹出框焦点移动的step
var PROGRESS_WIDTH				= 500;	
		
//var mainFocus                   = ["../images/Focus_Frame/Focus-1.png","../images/Focus_Frame/Focus-2.png"];
document.onsystemevent 				= notifyProcess;

var listFormLiList;
var thdMenuRightLiList;
var listFirstSpans;


var showItemNum = 0;

var menuList =
[
	{name:"Subtitle"	  				 ,	param:function(){doSubtitle();      },	showFlag:1},
	{name:"Digital subtitle language"    ,  param:function(){dolanguage();	    }, 	showFlag:1},
	{name:"Digital subtitle language 2nd",  param:function(){dolanguage2nd();   }, 	showFlag:1},
	{name:"Subtitle type"                ,  param:function(){doSubtitleType();  }, 	showFlag:1}
];


function init()
{
    top.initTextDirection(window);
	timeoutInit();
	
	thdMenuRightLiList = $("thdMenuRight").getElementsByTagName("li");				//得到所有的li，一共有5个，算上标题
	var thdMenuRightSpanList = $("thdMenuRight").getElementsByTagName("span");		//得到所有的span，一共有5组，算上标题
	listFirstSpans = $("thdMenuRight").getElementsByClassName("listFirstProperty"); //得到四组span，内容的
	listFormLiList = $("listForm").getElementsByTagName("li");						//得到弹出列表框的li，一共5个
	
	for(var i = 0; i <= menuList.length; i++)
	{
		thdMenuRightSpanList[i].innerHTML = subtitleTitleWords[i];
	}
	
	
	//1、重新得到数据,因为有刷界面的操作，只有第一次进入时从后台拿数据
	updateItemValues();
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
	
	enableSubt = setting.enableSubtitle;
	//if(enableSubt != 0)//subtitle unable
	//{
		subtLang1Pos = fixSubtLangFocus(setting.firstSubtitleLanguage);
		subtLang2Pos = fixSubtLangFocus(setting.secondSubtitleLanguage);
		subtType = setting.subtitleType;
	//}
	
}




//-----------2、得到每个item的showflag标志位------------------
function checkShowMenu()
{
	
	//0 off,1 on
	if(enableSubt == 0)
	{
		menuList[1].showFlag=0;
		menuList[2].showFlag=0;
		menuList[3].showFlag=0;
	}
	else		
	{
		menuList[1].showFlag=1;
		menuList[2].showFlag=1;
		menuList[3].showFlag=1;
	}
	
}


//-----------3、给每个item赋值------------------------------
function setValuesForItems()
{
	
	$("subtStatus").innerHTML = offOnWords[enableSubt];
	if(enableSubt == 1)//0 off,1 on
	{
		$('subtLang1Status').innerHTML = languagesWords[subtLang1Pos];
		$('subtLang2Status').innerHTML = languagesWords[subtLang2Pos];
		$("subtTypeStatus").innerHTML = subtTypeWords[subtType];
	}
	
}



//-----------4、根据showflag来显示内容-----------------------
function showItems()
{
	showItemNum = 0;
	//设置显示0-4是否显示
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



function doSubtitle()
{
	initSubt();
	focusOn = "subtitle";
}

function dolanguage()
{
	initLanguages(subtLang1Pos);
	focusOn = "subtitleLanguage1";
}

function dolanguage2nd()
{
	initLanguages(subtLang2Pos);
	focusOn = "subtitleLanguage2";
}

function doSubtitleType()
{
	initSubtType();
	focusOn = "subtitleType";
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
		////$("thdListFocus").src=mainFocus[1];
		executeFunction(list_position_h);
	}
	else if(focusOn == "subtitle")
	{
		////$("thdListFocus").src=mainFocus[0];
		enableSubt = form_position_h;
		setting.enableSubtitle = enableSubt;
		$("listForm").style.display = "none";
		focusOn = "menu";
		
		updateUI();//刷新界面
	}
	else if(focusOn == "subtitleLanguage1")
	{
		////$("thdListFocus").src=mainFocus[0];
		subtLang1Pos = form_position_h + offset;
		setting.firstSubtitleLanguage = subtLangIndex[subtLang1Pos];
		$('subtLang1Status').innerHTML = languagesWords[subtLang1Pos];
		$("listForm").style.display = "none";
		focusOn = "menu";
		offset = 0;
	}
	else if(focusOn == "subtitleLanguage2")
	{
		////$("thdListFocus").src=mainFocus[0];
		subtLang2Pos = form_position_h + offset;
		setting.secondSubtitleLanguage = subtLangIndex[subtLang2Pos];
		//channel.testLog("subtLang2Pos = " + subtLang2Pos);
		$('subtLang2Status').innerHTML = languagesWords[subtLang2Pos];
		$("listForm").style.display = "none";
		focusOn = "menu";
		offset = 0;
	}
	else if(focusOn == "subtitleType")
	{
		////$("thdListFocus").src=mainFocus[0];
		subtType = form_position_h;
		setting.subtitleType = subtType;
		$('subtTypeStatus').innerHTML = subtTypeWords[subtType];
		$("listForm").style.display = "none";
		focusOn = "menu";
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
	else if(focusOn == "subtitle" || focusOn == "subtitleType")
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
	else if(focusOn == "subtitleLanguage1")
	{
		toDownInLanguages(sumSubtLang);
	}
	else if(focusOn == "subtitleLanguage2")
	{
		toDownInLanguages(sumSubtLang);
	}
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
	else if(focusOn == "subtitle" || focusOn == "subtitleType")
	{
		if(form_position_h == 0)
		{
			form_position_h = 1;
		}
		else
		{
			form_position_h = 0;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
	else if(focusOn == "subtitleLanguage1")
	{
		toUpInLanguages(sumSubtLang);
	}
	else if(focusOn == "subtitleLanguage2")
	{
		toUpInLanguages(sumSubtLang);
	}
	
}


function toBack()
{
	if(focusOn == "menu")
	{
		parent.returnPage(2);
	}
	else if(focusOn == "subtitleLanguage1" || focusOn == "subtitleLanguage2" || focusOn == "subtitle" || focusOn == "subtitleType")
	{
		////$("thdListFocus").src=mainFocus[0];
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

/*
描述：初始化subtitle enable 列表
参数：
返回值：
全局变量：
*/
function initSubt()
{
	form_position_h = enableSubt;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 980;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
}


/*
描述： 初始化在语言列表
参数：position：语言在索引数组中的下标；
全局变量：form_position_h；offset;
*/
function initLanguages(position)
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
	}/*
	for(i = 0; i < 5; i++)
	{
		listFormLiList[i].innerHTML = languagesWords[i + offset];
	}*/
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 980;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,languagesWords,sumSubtLang,form_position_h,offset);
}

/*
描述：在语言列表出来的时候按Down键刷新焦点的效果
参数：sumLang：允许的语言总数量；
全局变量：form_position_h；offset;
*/
function toDownInLanguages(sumLang)
{
	if(form_position_h == 4 && (form_position_h + offset) >= (sumLang - 1))
	{
		offset=0;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = languagesWords[i+offset];
		}
		form_position_h = 0;
	}
	else if(form_position_h == 4 && (form_position_h + offset) < (sumLang - 1))
	{
		offset++;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = languagesWords[i+offset];
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

/*
描述：在语言列表出来的时候按Up键刷新焦点的效果
参数：sumLang：允许的语言总数量；
全局变量：form_position_h；offset;
*/
function toUpInLanguages(sumLang)
{
	if(form_position_h == 0 && offset == 0)
	{
		offset = sumLang - 5;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = languagesWords[i + offset];
		}
		form_position_h = 4;
	}
	else if(form_position_h==0 && offset > 0)
	{
		offset--;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = languagesWords[i + offset];
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
描述：初始化subtitle type 列表
参数：
返回值：
全局变量：
*/
function initSubtType()
{
	form_position_h = subtType;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 980;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,subtTypeWords,2,form_position_h,0);
}
/*
描述：获取当前选择的subtitle language 在subtLangIndex中的下标
参数：langIndex:subtitle language的枚举值（在所有语言中的索引值）
返回值：当前选择的subtitle language 在subtLangIndex中的下标
全局变量：
*/
function fixSubtLangFocus(langIndex)
{
    for (var i=0; i< sumSubtLang; i++)
    {
        if (subtLangIndex[i] == langIndex)
        {
            return i;
        }
    }
	return 10;//默认为english
}

/*
*描述：根据subtitle是否可用的状态刷新菜单
*/
function initMenuOfSubtitleStatus(subStatus)
{
	if(subStatus == 0)//subtitle unable
	{
		thdMenuRightLiList[2].style.display = "none";
		thdMenuRightLiList[3].style.display = "none";
		thdMenuRightLiList[4].style.display = "none";
	}
	else
	{
		//channel.testLog("subtitle lang 1 = " + setting.firstSubtitleLanguage);
		subtLang1Pos = fixSubtLangFocus(setting.firstSubtitleLanguage);
		subtLang2Pos = fixSubtLangFocus(setting.secondSubtitleLanguage);
		//channel.testLog("subtLang1Pos = " + subtLang1Pos + ",subtLang2Pos = " + subtLang2Pos);
		$('subtLang1Status').innerHTML = languagesWords[subtLang1Pos];
		$('subtLang2Status').innerHTML = languagesWords[subtLang2Pos];
		
		subtType = setting.subtitleType;
		$("subtTypeStatus").innerHTML = subtTypeWords[subtType];
		thdMenuRightLiList[2].style.display = "block";
		thdMenuRightLiList[3].style.display = "block";
		thdMenuRightLiList[4].style.display = "block";
	}
}


function $(id)
{
    return document.getElementById(id);
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


function addMouseListener()
{
	document.body.onmousedown = function(evt)
	{
		evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	};
	
	
	for(var i = 1; i < 5; i++)
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
				ttsName = top.subOptions[0] + ",";
				currentStatus = offOnWords[enableSubt];
				break;
			case 1:
				ttsName = top.subOptions[1] + ",";
				currentStatus = languagesWords[subtLang1Pos];
				break;
			case 2:
				ttsName = top.subOptions[2] + ",";
				currentStatus = languagesWords[subtLang2Pos];
				break;
			case 3:
				ttsName = top.subOptions[3] + ",";
				currentStatus = subtTypeWords[subtType];
				break;
			default:
				ttsName = "";
				currentStatus = "";
				break;
		}
	}
	else if(focusOn == "subtitle")
	{
		ttsName = "";
		currentStatus = offOnWords[form_position_h];
		isSelected(offOnWords[enableSubt] == currentStatus);
	}
	else if(focusOn == "subtitleLanguage1")
	{
		ttsName = "";
		currentStatus = languagesWords[form_position_h + offset];
		isSelected(languagesWords[subtLang1Pos] == currentStatus);
	}
	else if(focusOn == "subtitleLanguage2")
	{
		ttsName = "";
		currentStatus = languagesWords[form_position_h + offset];
		isSelected(languagesWords[subtLang2Pos] == currentStatus);
	}
	else if(focusOn == "subtitleType")
	{
		ttsName = "";
		currentStatus = subtTypeWords[form_position_h];
		isSelected(subtTypeWords[subtType] == currentStatus);
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