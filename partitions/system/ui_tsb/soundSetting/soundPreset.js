/******************** created by chenhua ***********************/
var soundPresetTitleWords 		= [top.souOptions[0],top.souOptions[0],top.souPresetPara[0],top.souPresetPara[1],top.souPresetPara[2],top.souPresetPara[3],top.souPresetPara[4]];
var soundPresetModeWords 		= [top.souPreset[0], top.souPreset[1], top.souPreset[2], 
					   top.souPreset[3], top.resetStadium, top.souPreset[4], top.picHDMIMode[0]];

var setting 					= top.g_setting;
var channel			 			= top.g_channel;
var soundPreset					= 0;
var soundPresetProgress			= new Array(5);
var focusOn 					= "menu"; 				//menu,preset
var list_position_h				= 0;
var form_position_h				= 0;

var SUB_MENU_START 				= 130;					//三级级菜单焦点移动起始位置
var SUB_MENU_STEP 				= 70;					//三级级主菜单焦点移动的step
var FORM_STEP					= 70;					//弹出框焦点移动的step
var PROGRESS_WIDTH				= 500;	
var mainFocus                   = ["../images/Focus_Frame/Focus-1.png","../images/Focus_Frame/Focus-2.png"];
var previewSound                = 0;

var footballMode = 0;//[0]off [1]on
var soundPresetOffSet = 0;

document.onsystemevent 				= notifyProcess;

var PROGRESS_START_LEFT_OFFSET = 0 + 44 + 120;//进度条容器开始位置相对于framework的左偏移

var thdMenuRightSpanList;
var thdMenuRightLiList;
var listFormLiList;
var progressContainerClassList;
var listFirstSpans;

var showItemNum = 0;

var menuList = 
[
	{name:"Sound preset", param:function(){showSoundPreset();}	,showFlag:0},
	{name:"100HZ",		  param:function(){return;}				,showFlag:0},
	{name:"300HZ",		  param:function(){return;}				,showFlag:0},
	{name:"1KHZ",		  param:function(){return;}				,showFlag:0},
	{name:"3KHZ",		  param:function(){return;}				,showFlag:0},
	{name:"10KHZ",		  param:function(){return;}				,showFlag:0}
];



function init()
{
    top.initTextDirection(window);
	timeoutInit();
	
	footballMode = setting.footballMode;
	
	progressContainerClassList = $("thdMenuRight").getElementsByClassName("progressContainer");//得到5个进度条
	
	thdMenuRightLiList = $("thdMenuRight").getElementsByTagName("li");//得到7个li，算上标题
	thdMenuRightSpanList = $("thdMenuRight").getElementsByTagName("span");//得到7个span，算上标题
	
	listFormLiList = $("listForm").getElementsByTagName("li");//得到弹出列表框 的5个li
	listFirstSpans = $("thdMenuRight").getElementsByClassName("listFirstProperty");//得到6个span，不算标题
	
	
	for(var i = 0; i <= menuList.length; i++)
	{
		thdMenuRightSpanList[i].innerHTML = soundPresetTitleWords[i];
	}
	
	
	
	for(var i = 0; i < thdMenuRightLiList.length; i++)
	{
		thdMenuRightLiList[i].style.color = footballMode ? "#666" : "#FFF";
	}
	$("thdListFocus").src = footballMode ? mainFocus[1] : mainFocus[0];
	
	
	updateUI();
	
	
	list_position_h = 0;
	$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	
	addMouseListener();
	top.doEleScrForNoOption(listFirstSpans,list_position_h, 0);
}




//-----------0、刷新界面----------------------------------
function updateUI()
{
	//1、重新得到数据--只有第一次会在后台拿数据，否则会有延时
	initVarValue();
	
	//2、根据数据设置showflag
	checkShowMenu();
	
	//3、为每个item重新赋值
	setValuesForItems();
	
	//4、显示每一个item
	showUIList();
}


//1、得到初始值
function initVarValue()
{
	soundPreset	=soundModeTransform(setting.soundPreset, 0); //setting.soundPreset;
}


//2、根据初始值，设置showFlag
function checkShowMenu()
{
	for(var i = 0;i<menuList.length;i++)//无条件
	{
		menuList[i].showFlag = 1;
	}
}

//3、给每个item赋值------------------------------
function setValuesForItems()
{
	$("soundPresetStatus").innerHTML = soundPresetModeWords[soundPreset];
	initProgressByPreset(soundPreset);
}

//4、根据showFlag 设置是否显示
function showUIList()
{
	showItemNum = 0;
	
	thdMenuRightLiList[0].style.display="block";//标题是一定显示的
	
	for(var i = 0;i<menuList.length;i++)
	{
		if(menuList[i].showFlag == 1)//只要是 showflag = 1，就显示
		{
			thdMenuRightLiList[i+1].style.display="block";
			showItemNum ++;
		}
		else
		{
			thdMenuRightLiList[i+1].style.display="none";
		}
	}
}


function showSoundPreset()
{
	$("thdListFocus").src=mainFocus[1];
	initPresetForm();
	focusOn = "preset";
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
	else if(focusOn == "preset")
	{
		$("thdListFocus").src=mainFocus[0];
		soundPreset = form_position_h;
		//channel.testLog("before set sound preset soundPreset = " + soundPreset);
		setting.soundPreset =soundModeTransform(soundPreset,1);
		//channel.testLog("after set sound preset setting.soundPreset = " + setting.soundPreset);
		$("soundPresetStatus").innerHTML = soundPresetModeWords[soundPreset];
		initProgressByPreset(soundPreset);
		$("listForm").style.display = "none";
		focusOn = "menu";
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
	else if(focusOn == "preset")
	{
		setSoundPresetFocus(-1);//[1]down [-1]up
		previewSound=form_position_h + soundPresetOffSet;
		setting.previewSoundEffect(soundModeTransform(previewSound,1));
		$("listFormFocus").style.top = form_position_h * (FORM_STEP + 10) + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
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
	else if(focusOn == "preset")
	{
		setSoundPresetFocus(1);//[1]down [-1]up
		previewSound=form_position_h + soundPresetOffSet;
		setting.previewSoundEffect(soundModeTransform(previewSound,1));
	        $("listFormFocus").style.top = form_position_h * (FORM_STEP + 10) + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
}



function keyDownProcess(evt)
{
	var ret = true;
	var keycode = evt.which;
	switch (keycode)
	{
		case top.VK_UP:
			if(footballMode) return;
			toUp();
			ret = false;
			break;
		case top.VK_DOWN:
			if(footballMode) return;
			toDown();
			ret = false;
			break;
		case top.VK_ENTER:
			if(footballMode) return;
			doEnter();
			ret = false;
			break;
		case top.VK_LEFT:
			toLeft();
			ret = false;
			break;  
		case top.VK_RIGHT:
			if(footballMode) return;
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

function toBack()
{
	if(focusOn == "menu")
	{
		parent.returnPage(2);
	}
	else if(focusOn == "preset")
	{
		setting.previewSoundEffect(soundModeTransform(soundPreset,1));
		$("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
}
function toLeft()
{
	if(focusOn == "menu")
	{
		if(list_position_h > 0)
		{
			if (soundPresetProgress[list_position_h - 1] <= 0) return;
			soundPresetProgress[list_position_h - 1]--;
			refreshPresetProgress(list_position_h,soundPresetProgress[list_position_h - 1]);
		}
		else
		{
			toBack();
		}
	}
	else
	{
		toBack();
	}
}
function toRight()
{
	if(focusOn == "menu")
	{
		if(list_position_h > 0)
		{
			if (soundPresetProgress[list_position_h - 1] >= 100) return;
			soundPresetProgress[list_position_h - 1]++;
			refreshPresetProgress(list_position_h,soundPresetProgress[list_position_h - 1]);
		}
		else
		{
			doEnter();
		}
	}
	else
	{
		doEnter();
	}
}

/*
描述：初始化preset列表框
参数：
全局变量：listFormLiList；soundPreset；form_position_h
*/
function initPresetForm()
{
	form_position_h = soundPreset;
	if(form_position_h > 4)//0~4
	{
		soundPresetOffSet = form_position_h - 5;
		form_position_h = 4;
	}
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList,
		soundPresetModeWords, soundPresetModeWords.length, form_position_h, 0);
	$("listFormFocus").style.top = form_position_h * (FORM_STEP + 10) + "px";
}

/*
描述：刷新preset中某一项进度
参数：position：要刷新的进度条的位置；progress：进度数
全局变量：
*/
function refreshPresetProgress(position,progress)
{
	if(soundPreset != 4)
	{
		soundPreset = 4;
		setting.soundPreset =soundModeTransform(soundPreset,1);		
		$("soundPresetStatus").innerHTML = soundPresetModeWords[soundPreset];
		setting.soundPreset100 = soundPresetProgress[0];
		setting.soundPreset300 = soundPresetProgress[1];
		setting.soundPreset1000 = soundPresetProgress[2];
		setting.soundPreset3000 = soundPresetProgress[3];
		setting.soundPreset10000 = soundPresetProgress[4];
	}
	
	switch(position)
	{
		case 1:
			$("100PgreLeft").style.width = parseInt(progress*PROGRESS_WIDTH/100,10) + "px";
			$("100PgreRight").style.width = parseInt((100 - progress)*PROGRESS_WIDTH/100,10) + "px";
			$("100Value").innerHTML = progress;
			setting.soundPreset100 = progress;
			break;
		case 2:
			$("300PgreLeft").style.width = parseInt(progress*PROGRESS_WIDTH/100,10) + "px";
			$("300PgreRight").style.width = parseInt((100 - progress)*PROGRESS_WIDTH/100,10) + "px";
			$("300Value").innerHTML = progress;
			setting.soundPreset300 = progress;
			break;
		case 3:
			$("1KPgreLeft").style.width = parseInt(progress*PROGRESS_WIDTH/100,10) + "px";
			$("1KPgreRight").style.width = parseInt((100 - progress)*PROGRESS_WIDTH/100,10) + "px";
			$("1KValue").innerHTML = progress;
			setting.soundPreset1000 = progress;
			break;
		case 4:
			$("3KPgreLeft").style.width = parseInt(progress*PROGRESS_WIDTH/100,10) + "px";
			$("3KPgreRight").style.width = parseInt((100 - progress)*PROGRESS_WIDTH/100,10) + "px";
			$("3KValue").innerHTML = progress;
			setting.soundPreset3000 = progress;
			break;
		case 5:
			$("10KPgreLeft").style.width = parseInt(progress*PROGRESS_WIDTH/100,10) + "px";
			$("10KPgreRight").style.width = parseInt((100 - progress)*PROGRESS_WIDTH/100,10) + "px";
			$("10KValue").innerHTML = progress;
			setting.soundPreset10000 = progress;
			break;
		default:
			break;
	}
}

/*
描述：由于soundPreset选线的改变而刷新所有相关的进度
参数：soundP：soundPreset
全局变量：soundPresetProgress;
*/
function initProgressByPreset(soundP)
{
	soundPresetProgress[0] = setting.soundPreset100;
	soundPresetProgress[1] = setting.soundPreset300;
	soundPresetProgress[2] = setting.soundPreset1000;
	soundPresetProgress[3] = setting.soundPreset3000;
	soundPresetProgress[4] = setting.soundPreset10000;
	
	$("100PgreLeft").style.width = parseInt(soundPresetProgress[0]*PROGRESS_WIDTH/100,10) + "px";
	$("100PgreRight").style.width = parseInt((100 - soundPresetProgress[0])*PROGRESS_WIDTH/100,10) + "px";
	$("100Value").innerHTML = soundPresetProgress[0];
	
	$("300PgreLeft").style.width = parseInt(soundPresetProgress[1]*PROGRESS_WIDTH/100,10) + "px";
	$("300PgreRight").style.width = parseInt((100 - soundPresetProgress[1])*PROGRESS_WIDTH/100,10) + "px";
	$("300Value").innerHTML = soundPresetProgress[1];
	
	$("1KPgreLeft").style.width = parseInt(soundPresetProgress[2]*PROGRESS_WIDTH/100,10) + "px";
	$("1KPgreRight").style.width = parseInt((100 - soundPresetProgress[2])*PROGRESS_WIDTH/100,10) + "px";
	$("1KValue").innerHTML = soundPresetProgress[2];
	
	$("3KPgreLeft").style.width = parseInt(soundPresetProgress[3]*PROGRESS_WIDTH/100,10) + "px";
	$("3KPgreRight").style.width = parseInt((100 - soundPresetProgress[3])*PROGRESS_WIDTH/100,10) + "px";
	$("3KValue").innerHTML = soundPresetProgress[3];
	
	$("10KPgreLeft").style.width = parseInt(soundPresetProgress[4]*PROGRESS_WIDTH/100,10) + "px";
	$("10KPgreRight").style.width = parseInt((100 - soundPresetProgress[4])*PROGRESS_WIDTH/100,10) + "px";
	$("10KValue").innerHTML = soundPresetProgress[4];
}

function setSoundPresetFocus(dir)//[1]down [-1]up
{
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	if(dir > 0)//down
	{
		if(form_position_h == 4 && form_position_h + soundPresetOffSet == soundPresetModeWords.length - 1)//bottom
		{
			form_position_h = 0;
			soundPresetOffSet = 0;
			top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList,
				soundPresetModeWords, soundPresetModeWords.length, form_position_h, soundPresetOffSet);
		}
		else if(form_position_h == 4 && form_position_h + soundPresetOffSet < soundPresetModeWords.length - 1)
		{
			soundPresetOffSet++;
			top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList,
				soundPresetModeWords, soundPresetModeWords.length, form_position_h, soundPresetOffSet);
		}
		else if(form_position_h < 4)
		{
			form_position_h++;
		}
	}
	else if(dir < 0)//up
	{
		if(!form_position_h && !soundPresetOffSet)
		{
			form_position_h = 4;
			soundPresetOffSet = soundPresetModeWords.length - 5;
			top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList,
				soundPresetModeWords, soundPresetModeWords.length, form_position_h, soundPresetOffSet);
		}
		else if(!form_position_h && soundPresetOffSet > 0)
		{
			soundPresetOffSet--;
			top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList,
				soundPresetModeWords, soundPresetModeWords.length, form_position_h, soundPresetOffSet);
		}
		else if(form_position_h > 0)
		{
			form_position_h--;
		}
	}
}




function uninit()
{
    //maybe be previewed,need to resume
    setting.previewSoundEffect(soundModeTransform(soundPreset,1));
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

function soundModeTransform(preMode, type)//type[0]: mw to ui; [1]ui to mw
{
    var aftMode = preMode;
    if(type)//ui to mw
    {
        if(4 == preMode)
        {
            aftMode = 6;
        }
        else if(5 == preMode)
        {
            aftMode = 4;
        }
    }
    else//mw to ui
    {
        if(6 == preMode)
        {
            aftMode = 4;
        }
        else if(4 == preMode)
        {
            aftMode = 5;
        }
    }
    return aftMode;
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
	
	
	thdMenuRightLiList[1].onmousedown = function(evt)
	{
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0)//left key
		{
			if(focusOn == "menu")
			{
				list_position_h = 0;
				$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
				doEnter();
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	};
	
	
	for(var i = 0; i < 5; i++)
	{
		listFormLiList[i].setAttribute("newAttr",i);
		listFormLiList[i].onmousedown = function(evt)
		{
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0)//left key
			{
				if(focusOn == "preset")
				{
					form_position_h = parseInt(this.getAttribute("newAttr"));
					$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		};
	}
	
	for(var i = 0; i < 5; i++)
	{
		progressContainerClassList[i].setAttribute("newAttr",i);
		progressContainerClassList[i].onmousedown = function(evt)
		{
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0)//left key
			{
				if(focusOn == "menu")
				{
					list_position_h = parseInt(this.getAttribute("newAttr")) + 1;
					$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
					var downX = evt.clientX;
					if(list_position_h > 0)
					{
						var prog = parseInt((downX - PROGRESS_START_LEFT_OFFSET)*100/PROGRESS_WIDTH,10);
						if(prog < 0)
						{
							prog = 0;
						}
						else if(prog > 100)
						{
							prog = 100;
						}
						soundPresetProgress[list_position_h - 1] = prog;
						refreshPresetProgress(list_position_h,soundPresetProgress[list_position_h - 1]);
					}
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		};
	}
}



