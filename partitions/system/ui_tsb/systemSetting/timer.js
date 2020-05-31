/******************** created by chenhua ***********************/
var timerTitleWords 			= [top.sysOptions[2], top.sysTimerOptions[0], top.sysTimerOptions[1],
								   top.sysTimerOptions[5], top.sysTimerOptions[2], top.sysTimerOptions[3],
								   top.sysTimerOptions[4],top.sysTimerOptions[6]];
var timeZoneWords				= top.sysTimeZone;
var offOnWords					= top.offOn;
var sleepTimerWords				= top.sysSleepTimer;
var standbyWords	 			= top.sysStandby;
var regionNameWords 			= top.sysRegionName;
if(typeof(top.sysTimeZoneNA) != "undefined")
{
	var timeZoneWordsNA			= top.sysTimeZoneNA
}
else
{
var timeZoneWordsNA				= ["Newfoundland","Atlantic","Eastern","Central","Mountain","Pacific","Alaska","Hawaii","Samoa"];
}
var enableNATimeZone			= (top.isNAFlag && !top.isCAFlag)?1:0; //只有NA的需要此时区，CA继承于NA，在此特殊处理
var timeZone					= 0;
var sumZone						= 35;					//time zone  个数
var offset						= 0;					//列表弹出框中的焦点的真实位置和焦点显示位置的差值，比如time zone中offset = timeZone - form_position_h;在sleep timer 框中offset = sleepTimeValue - form_position_h
var regionName					= 0;
var sleepTimerValue				= 0;
var sleepTimer 					= 0;//睡眠倒计时使用
var sumSleep					= 9;
var standby						= 0;
var remainSleepTime 			= 0;					//离睡眠还有的时间
var setting 					= top.g_setting;
var channel			 			= top.g_channel;
var focusOn 					= "menu"; 				//menu,timeZone,regionName,sleepTimer,
var list_position_h				= 0;
var form_position_h				= 0;
var country						= 0;					//22 == spain
var regionFlag					= 0;					//0 no region name ;1 have a region name
var hijri						= 0;
var PERSIANDATE_SWITCH_STATE_FOR_DB = "app.persiandate.switch";//存入数据库中波斯日历开关状态

var SUB_MENU_START 				= 160;					//三级级菜单焦点移动起始位置
var SUB_MENU_STEP 				= 70;					//三级级主菜单焦点移动的step
var FORM_STEP					= 80;					//弹出框焦点移动的step
// var mainFocus                   = ["../images/Focus_Frame/Focus-1.png","../images/Focus_Frame/Focus-2.png"];

var timerZoneIndex		= -1;
var regionNameIndex		= -1;
var countryRegionIndex	= -1;
var clockIndex			= -1;
var sleepTimerIndex		= -1;
var autoStandbyIndex	= -1;
var skipCRFlag			= false;//skip country region flag
var australiaCRValue = 0;
var CRArray	= ["NSW(ACT)", "VIC", "QLD", "SA", "WA", "TAS", "NT"];
document.onsystemevent 				= notifyProcess;

var thdMenuRightSpanList;
var thdMenuRightLiList;
var listFormLiList;

var showItemNum = 0;

var isLABrazilFlag				= false;
var timeZoneWordsLA				= top.sysTimeZoneLA;
var autoSync 					= 0; //autoSync:ON,timezone need hide

var menuList = 
[
	{name:"Time zone",			param:function(){showTimeZone();}	         ,	showFlag:1},
	{name:"Region name",		param:function(){showRegionName();}		     ,	showFlag:1},
	{name:"Country region",	 	param:function(){showCountryRegion();}		 ,	showFlag:1},
	{name:"Clock",				param:function(){showClock();}				 ,	showFlag:1},
	{name:"Sleep timer",		param:function(){showSleepTimer();}			 ,	showFlag:1},
	{name:"Auto standby",		param:function(){showAutoStandby();}		 ,	showFlag:1},
    {name:"Persian calendar",		param:function(){showHijri();}		 ,	showFlag:1}//波斯日历
];

function init()
{
    top.initTextDirection(window);
	timeoutInit();	
	thdMenuRightLiList = $("thdMenuRight").getElementsByTagName("li");//得到所有的li，算上标题，一共七个
	thdMenuRightSpanList = $("thdMenuRight").getElementsByTagName("span");//得到所有的span，算上标题，一共七个
	
	listFormLiList = $("listForm").getElementsByTagName("li");//弹出框的5个li
    $("titleNameSpan").innerHTML = timerTitleWords[0];
	for(var i = 1; i < thdMenuRightLiList.length; i++)
	{
		thdMenuRightSpanList[i].innerHTML = timerTitleWords[i];
	}
	
	
	
	updateUI();
//	showUiList();
	
	list_position_h = 0;
	$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	addMouseListener();
	ttsRead();
}



//-----------0、初始化、更新界面------------
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


//1、重新得到数据--只有第一次会在后台拿数据，否则会有延时
function updateItemValues()
{
	
	country	= channel.systemCountry;
	timeZone = setting.timeZone;
	regionName = setting.regionName;
	sleepTimerValue = setting.sleepTimer;
	standby = setting.autoStandby;
	remainSleepTime = setting.getSleepTime();
    hijri = setting.getProperty(PERSIANDATE_SWITCH_STATE_FOR_DB,"0");
	
	timerZoneIndex		= 0;
	regionNameIndex		= -1;
	countryRegionIndex	= -1;	

	//add for LA 
	console.log(regionName);
	/*
	if(top.isLAFlag && (country == 52))//Brazil
	{
		isLABrazilFlag =true;
	}
	*/

	if(top.isLAFlag)
	{
		autoSync = setting.timeSync;

		if(country == 52) //Brazil
		{
			isLABrazilFlag = true;
		}
	}

	if(isLABrazilFlag)
	{
		timeZoneWords = top.sysTimeZoneLA;
		sumZone = timeZoneWords.length;

		if(setting.getTimeRegion() == 0)
		{
			//timeZone = setting.timeZone;
			timeZone = 0;
			setting.timeZone = timeZone;
		}
		else
		{
			timeZone = setting.getTimeRegion();
		}
	}
	else if(enableNATimeZone)
	{
		timeZoneWords = timeZoneWordsNA; //top.sysTimeZoneNA;
		sumZone = timeZoneWords.length;
		timeZone = timeZoneValueConvertForNA(timeZone,0);
	}
	else if(top.isCAFlag)
	{
		timeZoneWords = [top.sysTimeZone[1], top.sysTimeZone[2], top.sysTimeZone[3], top.sysTimeZone[4], top.sysTimeZone[5],
			top.sysTimeZone[6], top.sysTimeZone[7], top.sysTimeZone[8], top.sysTimeZone[9], top.sysTimeZone[10],
			top.sysTimeZone[11], top.sysTimeZone[12], top.sysTimeZone[13], top.sysTimeZone[14], top.sysTimeZone[15],
			top.sysTimeZone[16], top.sysTimeZone[17], top.sysTimeZone[18], top.sysTimeZone[19], top.sysTimeZone[20],
			top.sysTimeZone[21], top.sysTimeZone[22], top.sysTimeZone[23], top.sysTimeZone[24], top.sysTimeZone[25],
			top.sysTimeZone[26], top.sysTimeZone[27], top.sysTimeZone[28], top.sysTimeZone[29], top.sysTimeZone[30],
			top.sysTimeZone[31], top.sysTimeZone[32], top.sysTimeZone[33], top.sysTimeZone[34]];
		sumZone = timeZoneWords.length;
		timeZone = setting.timeZone - 1;//CA没有广播自动更新时区，所以位置需要加一
	}
	else
	{
		timeZoneWords = top.sysTimeZone;
		sumZone = timeZoneWords.length;
		timeZone = setting.timeZone;
	}
	
	
	if(timeZone == 0 && country == 22)//country:22为spain
	{
		regionNameIndex	= 1;
		regionFlag = 0;
		clockIndex = regionNameIndex + 1;
		sleepTimerIndex = clockIndex + 1;
		autoStandbyIndex = sleepTimerIndex + 1;
	}
	else if(timeZone == 0 && country == 0)//add for AU[0]
	{
		australiaCRValue = setting.australiaCR;
		countryRegionIndex = 1;
		regionFlag = 1;
		clockIndex = countryRegionIndex + 1;
		sleepTimerIndex = clockIndex + 1;
		autoStandbyIndex = sleepTimerIndex + 1;
	}
	else
	{
		regionFlag = 0;
		clockIndex = timerZoneIndex + 1;
		sleepTimerIndex = clockIndex + 1;
		autoStandbyIndex = sleepTimerIndex + 1;
	}
	
}


//2、根据初始值设置item的showflag标志位----是否显示，显示为1，不显示为0--------------
function checkShowMenu()
{
	//暂不条件，是否显示，所以都显示
	for(var i = 0;i<menuList.length;i++)
	{
		menuList[i].showFlag = 1;
	}
	
	if(timeZone == 0 && country == 22)//country:22为spain
	{
		menuList[1].showFlag = 1;
		menuList[2].showFlag = 0;
	}
	else if(timeZone == 0 && country == 0)//add for AU[0]
	{
		menuList[1].showFlag = 0;
		menuList[2].showFlag = 1;
	}
	else
	{
		menuList[1].showFlag = 0;
		menuList[2].showFlag = 0;
	}

	if(top.isLAFlag || top.isNAFlag || top.isCAFlag) //for LA
	{
		if(top.isLAFlag)//NA和LA可能不一致
			menuList[0].showFlag = (autoSync == 0) ? 1 : 0;//autoSync:ON,timezone need hide
		else if(top.isCAFlag)
			menuList[0].showFlag =  1;//CA要求打开供用户选择
		menuList[1].showFlag = 0;
		menuList[2].showFlag = 0;
	}

    if(top.isIRNFlag && country == 60)//国家为伊朗，显示伊朗日历选项
    {
        menuList[6].showFlag = 1;
    }
    else
	{
        menuList[6].showFlag = 0;
	}
}


//-----------3、给每个item赋值------------------------------
function setValuesForItems()
{
	
	$("timeZoneStatus").innerHTML = timeZoneWords[timeZone];
	$("regionStatus").innerHTML = regionNameWords[regionName];
	$("standbyStatus").innerHTML = standbyWords[standby];
    $("hijriStatus").innerHTML = offOnWords[hijri];

    if(sleepTimerValue == 0)
	{
		$("sleepTimerStatus").innerHTML = sleepTimerWords[0];
	}
	else
	{
		
		$("sleepTimerStatus").innerHTML = doTime(remainSleepTime);
		if(sleepTimer!=0)
		{
			clearInterval(sleepTimer);
		}
		sleepTimer = setInterval("refreshSleepTime()",1000);
	}
	
	if(timeZone == 0 && country == 0)//add for AU[0]
	{
		$("countryRegion").innerHTML = CRArray[australiaCRValue];
	}
}


//-----------4、根据showflag来显示内容-----------------------
function showItems()
{
	showItemNum = 0;
	
	thdMenuRightLiList[0].style.display = "block";//标题是一定显示的
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





function showTimeZone()
{
	//$("thdListFocus").src = mainFocus[1];
	initTimeZone(timeZone);
	focusOn = "timeZone";
}
function showRegionName()
{
	//$("thdListFocus").src = mainFocus[1];
	initRegionName(regionName);
	focusOn = "regionName";
}
function showCountryRegion()
{
	//$("thdListFocus").src = mainFocus[1];
	initCRlist(australiaCRValue);
	focusOn = "countryRegion";
}
function showClock()
{
	parent.jumpPage(3,"systemSetting/clock.html");
}
function showSleepTimer()
{
	//$("thdListFocus").src = mainFocus[1];
	initSleepTimer(sleepTimerValue);
	focusOn = "sleepTimer";
}
function showAutoStandby()
{
	//$("thdListFocus").src = mainFocus[1];
	initStandby(standby);
	focusOn = "standby";
}

function showHijri()
{
    //$("thdListFocus").src = mainFocus[1];
    initHijri(hijri);
    focusOn = "hijri";
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

function findRealPosition(index)
{
	var list_position = -1;
	for(var i = 1 ,len = thdMenuRightLiList.length;i<=index&&i<len ;i++)
	{
		if(thdMenuRightLiList[i].style.display == "none")
		{
			
		}
		else
		{
			list_position++;
		}
	}
	return list_position;
}
function doEnter()
{
	if(focusOn == "menu")
	{
		executeFunction(list_position_h);
	}
	else if(focusOn == "timeZone")
	{
		//$("thdListFocus").src=mainFocus[0];
		timeZone = form_position_h + offset;
		//add for LA 
		if(isLABrazilFlag)
		{
			if(timeZone == 0)
			{
				setting.timeZone = timeZone;
			}	
			setting.setTimeRegion(timeZone);
		}	
		else if(enableNATimeZone)
		{
			setting.timeZone = timeZoneValueConvertForNA(timeZone,1);
		}
		else if(top.isCAFlag){
			//CA没有广播自动更新时区，所以位置需要加一
			setting.timeZone = timeZone + 1;
		}
		else
		{
			setting.timeZone = timeZone;
		}
		$("timeZoneStatus").innerHTML = timeZoneWords[timeZone];
		$("listForm").style.display = "none";
		focusOn = "menu";
		updateUI();
	}
	else if(focusOn == "regionName")
	{
		//$("thdListFocus").src=mainFocus[0];
		regionName = form_position_h;
		setting.regionName = regionName;
		$("regionStatus").innerHTML = regionNameWords[regionName];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn == "countryRegion")
	{
		//$("thdListFocus").src = mainFocus[0];
		australiaCRValue = form_position_h + offset;
		setting.australiaCR = australiaCRValue;
		$("countryRegion").innerHTML = CRArray[australiaCRValue];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn == "sleepTimer")
	{
		//$("thdListFocus").src=mainFocus[0];
		sleepTimerValue = form_position_h + offset;
		setting.sleepTimer = sleepTimerValue;
		if(sleepTimerValue == 0)
		{
			$("sleepTimerStatus").innerHTML = sleepTimerWords[0];
		}
		else
		{
			remainSleepTime = setting.getSleepTime();
			$("sleepTimerStatus").innerHTML = doTime(remainSleepTime);
			if(sleepTimer!=0)
			{
				clearInterval(sleepTimer);
			}
			sleepTimer = setInterval("refreshSleepTime()",1000);
		}
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn == "standby")
	{
		//$("thdListFocus").src=mainFocus[0];
		standby = form_position_h;
		setting.autoStandby = standby;
        top.standByTime = setting.autoStandby;//standByTime需要同步更新
        /****
		 * shopmode 2.3需求
		 * autostandby 设置为OFF后，再判断是否是home模式。是的话就开始计时运行9小时，否则清除计时
		 * ****/
        var autoShopmodeValue = parseInt(setting.getProperty("app.ui.autoshopmode.switch","0"));
		if (standby == 0 && setting.location == 0 && autoShopmodeValue == 1)
		{
            top.startrecord();
		}
		else//其他情况，清除计时
		{
            top.cancelrecord();
		}
        /****shopmode 2.3需求****/
		$("standbyStatus").innerHTML = standbyWords[standby];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn == "hijri")
    {
        //$("thdListFocus").src=mainFocus[0];
        hijri = form_position_h;
        setting.setProperty(PERSIANDATE_SWITCH_STATE_FOR_DB,hijri);
        $("hijriStatus").innerHTML = offOnWords[hijri];
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
	}
	else if(focusOn == "timeZone")
	{
		toUpInListForm(sumZone,timeZoneWords);
	}
	else if(focusOn == "regionName")
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
	else if(focusOn == "countryRegion")
	{
		toUpInListForm(CRArray.length, CRArray);
	}
	else if(focusOn == "sleepTimer")
	{
		toUpInListForm(sumSleep,sleepTimerWords);
	}
	else if(focusOn == "standby")
	{
		if(form_position_h <= 0)
		{
			form_position_h = 3;
		}
		else
		{
			form_position_h--;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
    else if(focusOn == "hijri")
    {
        if(form_position_h <= 0)
        {
            form_position_h = 1;
        }
        else
        {
            form_position_h--;
        }
        $("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
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
	}
	else if(focusOn == "timeZone")
	{
		toDownInListForm(sumZone,timeZoneWords);
	}
	else if(focusOn == "regionName")
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
	else if(focusOn == "countryRegion")
	{
		toDownInListForm(CRArray.length, CRArray);
	}
	else if(focusOn == "sleepTimer")
	{
		toDownInListForm(sumSleep,sleepTimerWords);
	}
	else if(focusOn == "standby")
	{
		if(form_position_h >= 3)
		{
			form_position_h = 0;
		}
		else
		{
			form_position_h++;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
    else if(focusOn == "hijri")
    {
        if(form_position_h >= 1)
        {
            form_position_h = 0;
        }
        else
        {
            form_position_h++;
        }
        $("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
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


function toBack()
{
	console.log("focusOn is "+focusOn);
	if(focusOn == "menu")
	{
		parent.returnPage(2);
	}
	else if(focusOn == "timeZone" || focusOn == "regionName" || focusOn == "countryRegion" 
		|| focusOn == "sleepTimer" || focusOn == "standby" || focusOn == "hijri")
	{
		//$("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "menu";
		if(setting.sleepTimer == 0)
		{
			$("sleepTimerStatus").innerHTML = sleepTimerWords[0];
		}
		else
		{
			remainSleepTime = setting.getSleepTime();
			$("sleepTimerStatus").innerHTML = doTime(remainSleepTime);
			if(sleepTimer!=0)
			{
				clearInterval(sleepTimer);
			}
			sleepTimer = setInterval("refreshSleepTime()",1000);
		}
		
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

function timeZoneValueConvertForNA(value,type) // type: 0:setting to OSD, 1, OSD to setting.
{
	var result = 0;
	switch(type)
	{
		case 0:
		{
			switch(value)
			{
				case 19: //GMT +12
				case 20:
				case 21: //GMT +13
                case 22: // GMT -12
                case 23: // GMT -11
                    result = 8;
					break;
				case 24: //GMT -10
					result = 7;
					break;
				case 25: //GMT -9
					result = 6;
					break;
				case 26: //GMT -8
					result = 5;
					break;
				case 27: //GMT -7
					result = 4;
					break;
				case 28: //GMT -6
					result = 3;
					break;
				case 29: //GMT -5
					result = 2;
					break;
				case 30: //GMT -4
					result = 1;
					break;
				case 31: //GMT -3：30
					result = 0;
					break;
				default:
					result = 0;
					break;
			}
		}
			break;
		case 1:
		{
			switch(value)
			{
				case 0:
					result = 31;
					break;
				case 1:
					result = 30;
					break;
				case 2:
					result = 29;
					break;
				case 3:
					result = 28;
					break;
				case 4:
					result = 27;
					break;
				case 5:
					result = 26;
					break;
				case 6:
					result = 25;
					break;
				case 7:
					result = 24;
					break;
				case 8:
					result = 23;
					break;
				default:
					break;
			}
		}
			break;
		default:
			break;
	}
	return result;
}
/*
描述：初始化time zone
参数：zone：time zone 的枚举
全局变量：form_position_h;offset;list_position_h;timeZoneWords
*/
function initTimeZone(zone)
{
	if(zone >= 5)
	{
		form_position_h = 4;
		offset = zone - form_position_h;
	}
	else
	{
		offset = 0;
		form_position_h = zone;
	}
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 980;
	//add for LA
	sumZone = (isLABrazilFlag) ? timeZoneWordsLA.length : timeZoneWords.length;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,timeZoneWords,sumZone,form_position_h,offset);
	//top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,timeZoneWords,35,form_position_h,offset);

}

/*
描述：初始化
参数：region:regionName enum
全局变量：form_position_h;list_position_h;
*/
function initRegionName(region)
{
	form_position_h = region;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 980;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,regionNameWords,2,form_position_h,0);
}

function initCRlist(index)
{
	if(index >= 5)
	{
		form_position_h = 4;
		offset = index - form_position_h;
	}
	else
	{
		offset = 0;
		form_position_h = index;
	}
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 980;
	top.initListForm($("listForm"), topOffset, leftOffset, listFormLiList, CRArray, CRArray.length, form_position_h, offset);
}

/*
描述：初始化
参数：sleepT:sleepTimerValue enum
全局变量：form_position_h;offset;list_position_h;sleepTimerWords
*/
function initSleepTimer(sleepT)
{
	if(sleepTimer > 0)
	{
		clearInterval(sleepTimer);
		sleepTimer = 0;
	}
	
	if(sleepT >= 5)
	{
		form_position_h = 4;
		offset = sleepT - form_position_h;
	}
	else
	{
		offset = 0;
		form_position_h = sleepT;
	}
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 980;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,sleepTimerWords,9,form_position_h,offset);
}

/*
描述：初始化
参数：stand:standby enum
全局变量：form_position_h;list_position_h;standbyWords
*/
function initStandby(stand)
{
	form_position_h = stand;
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 980;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,standbyWords,4,form_position_h,0);
}

/*
 描述：初始化
 参数：hijri:hijri enum
 全局变量：form_position_h;list_position_h;offOnWords
 */
function initHijri(hijri)
{
    form_position_h = hijri;
    var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
    var leftOffset = 980;
    top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,2,form_position_h,0);
}

/*
描述：在弹出列表出来的时候按Down键刷新焦点的效果
参数：sum：允许enum总数量；wordsList：所有允许的enmu的文字描述保存在该数组中
全局变量：form_position_h；offset;
*/
function toDownInListForm(sum,wordsList)
{
	if(form_position_h == 4 && (form_position_h + offset) >= (sum - 1))
	{
		offset = 0;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = wordsList[i+offset];
		}
		form_position_h = 0;
	}
	else if(form_position_h == 4 && (form_position_h + offset) < (sum - 1))
	{
		offset++;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = wordsList[i+offset];
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
参数：sum：允许的enum总数量；wordsList：所有允许的enmu的文字描述保存在该数组中
全局变量：form_position_h；offset;
*/
function toUpInListForm(sum,wordsList)
{
	if(form_position_h == 0 && offset == 0)
	{
		offset = sum - 5;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = wordsList[i + offset];
		}
		form_position_h = 4;
	}
	else if(form_position_h==0 && offset > 0)
	{
		offset--;
		for(var i = 0; i < 5; i++)
		{
			listFormLiList[i].innerHTML = wordsList[i + offset];
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

/*
描述：切分时间，将以秒为单位的时间切分出时，分，秒的字符串
参数：time：时间，以毫秒为单位
返回值：形如hh:mm:ss时间显示的字符串
*/
function doTime(time)
{
	var hour = parseInt(time/3600,10);
	var minute =  parseInt((time - hour*3600)/60,10);
	var second = time%60;
	if(hour < 10)
	{
		hour = "0" + hour;
	}
	if(minute < 10)
	{
		minute = "0" + minute;
	}
	if(second < 10)
	{
		second = "0" + second;
	}
	return (hour + ":" + minute + ":" + second);
}

/*
描述：刷新sleep time的倒计时
参数：
返回值：
全局变量：remainSleepTime
*/
function refreshSleepTime()
{
	remainSleepTime--;
	$("sleepTimerStatus").innerHTML = doTime(remainSleepTime);
}

/*
描述：因为国家为spain的时候回比其他时候多处一个region name的选项，需要重新调整整个Ui list的布局,
	  add "country region" for AU products
参数：
全局变量：timeZone;country;regionFlag;thdMenuRightLiList;
*/
//function showUiList()
//{
//	timerZoneIndex		= 0;
//	regionNameIndex		= -1;
//	countryRegionIndex	= -1;	
//	
//	if(timeZone == 0 && country == 22)//country:22为spain
//	{
//		regionNameIndex	= 1;
//		regionFlag = 1;
//		thdMenuRightLiList[2].style.display = "block";
//		clockIndex = regionNameIndex + 1;
//		sleepTimerIndex = clockIndex + 1;
//		autoStandbyIndex = sleepTimerIndex + 1;
//	}
//	else if(timeZone == 0 && country == 0)//add for AU[0]
//	{
//		australiaCRValue = setting.australiaCR;
//		$("countryRegion").innerHTML = CRArray[australiaCRValue];
//
//		countryRegionIndex = 1;
//		regionFlag = 0;
//		thdMenuRightLiList[2].style.display = "none";
//		thdMenuRightLiList[3].style.display = "block";
//		clockIndex = countryRegionIndex + 1;
//		sleepTimerIndex = clockIndex + 1;
//		autoStandbyIndex = sleepTimerIndex + 1;
//	}
//	else
//	{
//		regionFlag = 0;
//		thdMenuRightLiList[2].style.display = "none";
//		thdMenuRightLiList[3].style.display = "none";
//		clockIndex = timerZoneIndex + 1;
//		sleepTimerIndex = clockIndex + 1;
//		autoStandbyIndex = sleepTimerIndex + 1;
//	}
//}



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
	
	for(var i = 1; i < thdMenuRightLiList.length; i++)
	{
		thdMenuRightLiList[i].setAttribute("newAttr",i);
		thdMenuRightLiList[i].onmousedown = function(evt)
		{
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0)//left key
			{
				if(focusOn == "menu")
				{
					if(regionFlag == 1)
					{
						list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
					}
					else
					{
						list_position_h = findRealPosition(parseInt(this.getAttribute("newAttr")));
					}
					updateFocus();
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

function updateFocus()
{
    $("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
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
	top.ttsLog("list_position_h=" + list_position_h);
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
			case "Time zone":
				top.ttsLog("timeZone=" + timeZone);
				ttsName = timerTitleWords[1] + ",";
				currentStatus = timeZoneWords[timeZone];//setting.timeZone;
				break;
			case "Region name":
				top.ttsLog("regionName=" + regionName);
				ttsName = timerTitleWords[2] + ",";
				currentStatus = regionNameWords[regionName];
				break;
			case "Country region":
				top.ttsLog("australiaCRValue=" + australiaCRValue);
				ttsName = timerTitleWords[3] + ",";
				currentStatus = CRArray[australiaCRValue];
				break;
			case "Clock":
				ttsName = timerTitleWords[4] + ",";
				currentStatus = "";
				break;
			case "Sleep timer":
				top.ttsLog("sleepTimerValue=" + sleepTimerValue);
				ttsName = timerTitleWords[5] + ",";
				currentStatus = sleepTimerWords[sleepTimerValue];//setting.sleepTimer;//
				break;
			case "Auto standby":
				top.ttsLog("standby=" + standby);
				ttsName = timerTitleWords[6] + ",";
				currentStatus = standbyWords[standby];
				break;
            case "Persian calendar":
                top.ttsLog("hijri=" + hijri);
                ttsName = timerTitleWords[7] + ",";
                currentStatus = offOnWords[hijri];
                break;
			default:
				ttsName = "";
				currentStatus = "";
				break;
		}
	}
	else if(("password" == focusOn) && (2 == parent.currentShowMenu))
	{
		ttsName = psswordWords;
		currentStatus = "";
	}
	else if(("menu" == focusOn) && (3 == parent.currentShowMenu))
	{
		parent.$("subMenu3").contentWindow.ttsRead();
	}
	else if("timeZone" == focusOn)
	{
		top.ttsLog("form_position_h + offset=" + (form_position_h + offset));
		ttsName = "";
		currentStatus = timeZoneWords[form_position_h + offset];
		isSelected(timeZoneWords[timeZone] == currentStatus);
	}
	else if("regionName" == focusOn)
	{
		top.ttsLog("regionName=" + regionName + "   form_position_h=" + form_position_h);
		ttsName = "";
		currentStatus = regionNameWords[form_position_h];
		isSelected(regionNameWords[regionName] == currentStatus);
	}
	else if("countryRegion" == focusOn)
	{
		top.ttsLog("australiaCRValue=" + australiaCRValue + "   form_position_h + offset=" + (form_position_h + offset));
		ttsName = "";
		currentStatus = CRArray[form_position_h + offset];
		isSelected(CRArray[australiaCRValue] == currentStatus);
	}
	else if("sleepTimer" == focusOn)
	{
		top.ttsLog("sleepTimerValue=" + sleepTimerValue + "   form_position_h + offset=" + (form_position_h + offset));
		ttsName = "";
		currentStatus = sleepTimerWords[form_position_h + offset];
		isSelected(sleepTimerWords[sleepTimerValue] == currentStatus);
	}
	else if("standby" == focusOn)
	{
		top.ttsLog("standby=" + standby + " form_position_h=" + form_position_h);
		ttsName = "";
		currentStatus = standbyWords[form_position_h];
		isSelected(standbyWords[standby] == currentStatus);
	}
    else if("hijri" == focusOn)
    {
        top.ttsLog("hijri=" + hijri + " form_position_h=" + form_position_h);
        ttsName = "";
        currentStatus = offOnWords[form_position_h];
        isSelected(offOnWords[hijri] == currentStatus);
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