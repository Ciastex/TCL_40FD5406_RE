/******************** created by chenhua ***********************/
// 0:Advance setting, balance, audio language, audio type, audiodescription, 5:speaker, speaker vol, hp , he vol, bt, 10:bt vol
var soundSetTitleWords 		= [top.picOptions[15], top.souOptions[1], top.souOptions[8], top.souOptions[9], top.souOptions[10], top.audioDescriptionName[1],
							   top.audioDescriptionName[2], top.audioDescriptionName[3],  top.audioDescriptionName[4], top.audioDescriptionName[6], top.audioDescriptionName[7]];
var soundTypeWords 			= top.souSoundType;
var none					= top.all_language[50]; //none
var offOnWords				= top.offOn;
//var soundPgreTitleWords 	= [top.souOptions[1],top.souOptions[2]];
var soundAdvancedPromptCon =[top.prompts[16],top.prompts[17]];
var showPromptContTimer = 0;


var setting 				= top.g_setting;
var channel			 		= top.g_channel;
var bluetooth  		 		= top.bluetooth;//add yums
var inputSource 			= 0;//channel.inputSource;
var speakerVolume			= 20;
var headphoneVolume			= 20;
var btDeviceVolume			= 20;
var speakerStatus			= 1;
var headphoneStatus			= 1;
var btDeviceStatus			= 1;
var listMaxNum				= soundSetTitleWords.length - 1;
var list_position_h 		= 0;					//主界面坐标
var form_position_h			= 0;					//弹出框焦点位置
var soundBalance			= 0;
var audioDelay				= 0;
var audioModeIndex 			= 0;					//默认为audio language为None
var soundTypeInfo;									//保存sound type的信息
var soundTypeItems;									//保存sound type的soundTypeItems数组字符串
var soundTypeLength 		= 0;
var focusOn					= "menu";				//menu,audioMode;soundType;progressBar
var OUT_PUT_NAME_FOR_DB = top.OUT_PUT_NAME_FOR_DB; 
var progressDivList;
var maxVolume = 0;

var offset				= 0;					//列表弹出框中的焦点的真实位置和焦点显示位置的差值，比如audio language中offset = audioModeIndex - form_position_h

var SUB_MENU_START 			= 160;					//二级级菜单焦点移动起始位置
var SUB_MENU_STEP 			= 70;					//二级级主菜单焦点移动的step
var FORM_STEP				= 80;					//弹出框焦点移动的step
var PROGRESS_WIDTH			= 300;
var EXTRA_PROGRESS_WIDTH	= 900;					// 弹出式进度条的宽度	
// var mainFocus               = ["../images/Focus_Frame/Focus-1.png","../images/Focus_Frame/Focus-2.png"];
document.onsystemevent = notifyProcess;

var menuList = [
    {name:soundSetTitleWords[1],func:function(){showBalance();},showFlag:1},
    {name:soundSetTitleWords[2],func:function(){showAudioLang();},showFlag:1},
	{name:soundSetTitleWords[3],func:function(){showAudioType();},showFlag:1},
	{name:soundSetTitleWords[4],func:function(){showAudioDescription();},showFlag:1},
    {name:soundSetTitleWords[5],func:function(){showSpeakerStatus();},showFlag:1},
    {name:soundSetTitleWords[6],func:function(){showSpeakerVolume();},showFlag:1},
    {name:soundSetTitleWords[7],func:function(){showHeadphoneStatus();},showFlag:1},
	{name:soundSetTitleWords[8],func:function(){showHeadphoneVolume();},showFlag:1},
    {name:soundSetTitleWords[9],func:function(){showBTDeviceStatus();},showFlag:1},
	{name:soundSetTitleWords[10],func:function(){showBTDeviceVolume();},showFlag:1}
]
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
		case top.E_HP_PLUGIN:
			if(!top.supportHeadphone)
			{
				break;
			}
			var devCurNum = setting.getProperty("app.ui.audioDeviceStatus","000");//2 ARC; 1 bt; 0:hp
			var devNewNum = devCurNum.charAt(0)+devCurNum.charAt(1)+"1";
			setting.setProperty("app.ui.audioDeviceStatus",devNewNum);
			if(setting.speakerStatus == 1)
			{
				setting.speakerStatus = 0;
				speakerStatus = setting.speakerStatus;
			}
		        prepareMenuShow();
	                refreshMenuShow();
			break;
		case top.E_HP_PLUGOUT:
			if(!top.supportHeadphone)
			{
				break;
			}
			var devCurNum = setting.getProperty("app.ui.audioDeviceStatus","000");//2 ARC; 1 bt; 0:hp
			var devNewNum = devCurNum.charAt(0)+devCurNum.charAt(1)+"0";
			setting.setProperty("app.ui.audioDeviceStatus",devNewNum);
			if(setting.speakerStatus == 0 && devNewNum == "000")
			{
				setting.speakerStatus = 1;
				speakerStatus = setting.speakerStatus;
			}
			prepareMenuShow();
	                refreshMenuShow();
			break;
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
    showPromptCont();
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
		list_position_h = findNextPosition(list_position_h,0);
		$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
        addMouseListener(list_position_h);
		top.doEleScrForNoOption(listFirstSpans,list_position_h, 1);
	}
	else if(focusOn == "audioMode")
	{
		if(audioModeCount > 5)
		{
			if(form_position_h == 4 && (form_position_h + offset) >= (audioModeCount - 1))
			{
				offset=0;
				for(var i = 0; i < 5; i++)
				{
					listFormLiList[i].innerHTML = langShows[i+offset];
				}
				form_position_h = 0;
			}
			else if(form_position_h == 4 && (form_position_h + offset) < (audioModeCount - 1))
			{
				offset++;
				for(var i = 0; i < 5; i++)
				{
					listFormLiList[i].innerHTML = langShows[i+offset];
				}
			}
			else
			{
				form_position_h++;
			}
		}
		else
		{
			if(form_position_h >= (audioModeCount - 1))
			{
				form_position_h = 0;
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
		
		if((offset + 4) >= (audioModeCount - 1))
		{
			$("listDownImg").style.display = "none";
		}
		else
		{
			$("listDownImg").style.display = "block";
		}
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
	}
	else if(focusOn == "soundType")
	{
		if(form_position_h == (soundTypeLength - 1)) 
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
	else if(focusOn == "speakerStatus" || focusOn == "headphoneStatus" || focusOn == "btDeviceStatus")
	{

		if(form_position_h == offOnWords.length - 1)
		{
			form_position_h = 0;
		}
		else
		{
			form_position_h++;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
	/*
	else if(focusOn == "progressBar")
	{
		if(progressNumber >= (SAME_FUNCTION_OPTION_SUM - 1))
		{
			progressNumber = 0;
		}
		else
		{
			progressNumber++;
		}
		refreshProgressBar(progressNumber);
	}
	*/
}
function toUp()
{
	if(focusOn == "menu")
	{
		list_position_h = findNextPosition(list_position_h,1);
		$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
        addMouseListener(list_position_h);
		top.doEleScrForNoOption(listFirstSpans,list_position_h, -1);
	}
	else if(focusOn == "audioMode")
	{
		if(audioModeCount > 5)
		{
			if(form_position_h == 0 && offset == 0)
			{
				offset = audioModeCount - 5;
				for(var i = 0; i < 5; i++)
				{
					listFormLiList[i].innerHTML = langShows[i + offset];
				}
				form_position_h = 4;
			}
			else if(form_position_h==0 && offset > 0)
			{
				offset--;
				for(var i = 0; i < 5; i++)
				{
					listFormLiList[i].innerHTML = langShows[i + offset];
				}
			}
			else if(form_position_h > 0)
			{
				form_position_h--;
			}
		}
		else
		{
			if(form_position_h == 0)
			{
				form_position_h = audioModeCount - 1;
			}
			else
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
		
		if((offset + 4) >= (audioModeCount - 1))
		{
			$("listDownImg").style.display = "none";
		}
		else
		{
			$("listDownImg").style.display = "block";
		}
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
	else if(focusOn == "soundType")
	{
		if(form_position_h == 0) 
		{
			form_position_h = soundTypeLength - 1;
		}
		else
		{
			form_position_h--;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
	else if(focusOn == "speakerStatus" || focusOn == "headphoneStatus" || focusOn == "btDeviceStatus")
	{
		if(form_position_h == 0) 
		{
			form_position_h = offOnWords.length - 1;
		}
		else
		{
			form_position_h--;
		}
		$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
	/*else if(focusOn == "progressBar")
	{
		if(progressNumber <= 0)
		{
			progressNumber = SAME_FUNCTION_OPTION_SUM - 1;
		}
		else
		{
			progressNumber--;
		}
		refreshProgressBar(progressNumber);
	}*/
}
function doEnter()
{
	if(focusOn == "menu")
	{
		findFunction(list_position_h);
	}
	else if(focusOn == "audioMode")
	{
		// $("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		audioModeIndex = form_position_h + offset;
		$("audioLanguage").innerHTML = langShows[audioModeIndex];
		currentChannel.setProgramAudioMode(audioModeIndex);
		offset = 0;
		focusOn = "menu";
	}
	else if(focusOn == "soundType")
	{
		// $("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		setting.setSoundType(soundTypeInfo.mode,form_position_h);
		$("soundTypeStatus").innerHTML = soundTypeWords[parseInt(soundTypeItems[form_position_h],10)];
		focusOn = "menu";
		offset = 0;
	}
	else if(focusOn == "speakerStatus")
	{
		// $("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		speakerStatus = form_position_h;
		setting.speakerStatus = speakerStatus;
		prepareMenuShow();
		refreshMenuShow();
		$("speakerStatus").innerHTML = offOnWords[form_position_h];
		focusOn = "menu";
		offset = 0;
	}
	else if(focusOn == "headphoneStatus")
	{
		// $("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		headphoneStatus = form_position_h;
		setting.headphoneStatus = headphoneStatus;
		prepareMenuShow();
		refreshMenuShow();
		$("headphoneStatus").innerHTML = offOnWords[form_position_h];
		focusOn = "menu";
		offset = 0;
	}
	else if(focusOn == "btDeviceStatus")
	{
		// $("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		btDeviceStatus = form_position_h;
		var btDeviceStatusStr = btDeviceStatus.toString();
		setting.setProperty(OUT_PUT_NAME_FOR_DB,btDeviceStatusStr);	
		if(btDeviceStatus == 0)
		{
			bluetooth.setBluetoothMute(1);
			top.bt_soundOutPutValue = 0;
		}
		else
		{
			bluetooth.setBluetoothMute(0);
			top.bt_soundOutPutValue = 1;
		}
		prepareMenuShow();
		refreshMenuShow();
		$("btDeviceStatus").innerHTML = offOnWords[form_position_h];
		focusOn = "menu";
		offset = 0;
	}
}
function toBack()
{
	if(focusOn == "menu")
	{
		parent.returnPage(2);
	}
	else if(focusOn == "soundBalance" || focusOn == "speakerVolume" || focusOn == "headphoneVolume"  || focusOn == "btDeviceVolume" )
	{
		top.timeoutFuc.timeoutTimes = 30;
		refreshMenuShow();
		$("adjustProgressBox").style.display="none";
		parent.showPage(2);
		focusOn = "menu";
	}
	else
	{
		// $("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "menu";
		offset = 0;
	}
}
function toLeft()
{
	if(focusOn == "soundBalance")
	{
		if(soundBalance + 50 > 0)
			soundBalance -= 1;
		$("adjustProgValue").innerHTML = soundBalance;
		setting.soundBalance = soundBalance;
		progressDivList[0].style.width = parseInt((soundBalance + 50)*EXTRA_PROGRESS_WIDTH/100,10) + "px";
		progressDivList[2].style.width = parseInt((100 - (soundBalance + 50))*EXTRA_PROGRESS_WIDTH/100,10) + "px";
	}
	else if(focusOn == "speakerVolume")
	{
		if(speakerVolume > 0)
		{
			speakerVolume -= 1;
		}
		$("adjustProgValue").innerHTML = speakerVolume;
		top.g_channel.volume = speakerVolume;
		progressDivList[0].style.width = parseInt(speakerVolume*EXTRA_PROGRESS_WIDTH/100,10) + "px";
		progressDivList[2].style.width = parseInt((100 - speakerVolume)*EXTRA_PROGRESS_WIDTH/100,10) + "px";
			
	}
	else if(focusOn == "headphoneVolume")
	{
		if(headphoneVolume > 0)
		{
			headphoneVolume -= 1;
		}
		$("adjustProgValue").innerHTML = headphoneVolume;
		setting.headphoneVolume = headphoneVolume;
		progressDivList[0].style.width = parseInt(headphoneVolume*EXTRA_PROGRESS_WIDTH/100,10) + "px";
		progressDivList[2].style.width = parseInt((100 - headphoneVolume)*EXTRA_PROGRESS_WIDTH/100,10) + "px";
	}
	else if(focusOn == "btDeviceVolume")
	{
		if(btDeviceVolume > 0)
		{
			btDeviceVolume -= 1;
		}
		$("adjustProgValue").innerHTML = btDeviceVolume;
		bluetooth.setBluetoothVolume(btDeviceVolume);
		progressDivList[0].style.width = parseInt(btDeviceVolume*EXTRA_PROGRESS_WIDTH/100,10) + "px";
		progressDivList[2].style.width = parseInt((100 - btDeviceVolume)*EXTRA_PROGRESS_WIDTH/100,10) + "px";
	}
	else
	{
		toBack();
	}
}
function toRight()
{
	if(focusOn == "soundBalance")
	{
		if(soundBalance + 50 < 100)
			soundBalance += 1;
		$("adjustProgValue").innerHTML = soundBalance;
		setting.soundBalance = soundBalance;
		progressDivList[0].style.width = parseInt((soundBalance + 50)*EXTRA_PROGRESS_WIDTH/100,10) + "px";
		progressDivList[2].style.width = parseInt((100 - (soundBalance + 50))*EXTRA_PROGRESS_WIDTH/100,10) + "px";
	}
	else if(focusOn == "speakerVolume")
	{
		if(speakerVolume < maxVolume)
		{
			speakerVolume += 1;
		}
		if(top.mute_status == 1)
		{
			top.showMute(1);
		}
		$("adjustProgValue").innerHTML = speakerVolume;
		top.g_channel.volume = speakerVolume;
		progressDivList[0].style.width = parseInt(speakerVolume*EXTRA_PROGRESS_WIDTH/100,10) + "px";
		progressDivList[2].style.width = parseInt((100 - speakerVolume)*EXTRA_PROGRESS_WIDTH/100,10) + "px";
			
	}
	else if(focusOn == "headphoneVolume")
	{
		if(headphoneVolume < maxVolume)
		{
			headphoneVolume += 1;
		}
		$("adjustProgValue").innerHTML = headphoneVolume;
		if(top.mute_status == 1)
		{
			top.showMute(1);
		}
		setting.headphoneVolume = headphoneVolume;
		progressDivList[0].style.width = parseInt(headphoneVolume*EXTRA_PROGRESS_WIDTH/100,10) + "px";
		progressDivList[2].style.width = parseInt((100 - headphoneVolume)*EXTRA_PROGRESS_WIDTH/100,10) + "px";
	}
	else if(focusOn == "btDeviceVolume")
	{
		if(btDeviceVolume < maxVolume)
		{
			btDeviceVolume += 1;
		}
		if(top.mute_status == 1)
		{
			top.showMute(1);
		}
		$("adjustProgValue").innerHTML = btDeviceVolume;
		bluetooth.setBluetoothVolume(btDeviceVolume);
		progressDivList[0].style.width = parseInt(btDeviceVolume*EXTRA_PROGRESS_WIDTH/100,10) + "px";
		progressDivList[2].style.width = parseInt((100 - btDeviceVolume)*EXTRA_PROGRESS_WIDTH/100,10) + "px";
	}
	else
	{
		doEnter();
	}
}
function findNextPosition(curPosition,dir) //dir: 0:next, 1:previous
{
	var nextPosition = 0;
	if(dir == 0)
	{
		if(curPosition >= listMaxNum - 1)
		{
			nextPosition = 0;
		}
		else
		{
			nextPosition = curPosition + 1;
		}
	}
	else
	{
		if(curPosition <= 0)
		{
			nextPosition = listMaxNum - 1;
		}
		else
		{
			nextPosition = curPosition - 1;
		}
	}
	return nextPosition;
}

function findMaxPosition()
{
	var num = -1;
	for(var i = 0; i < menuList.length; i++)
	{
		if(menuList[i].showFlag == 1)
		{
			num++;
		}
	}
	return num;
}

function findFunction(postion)
{
    var num=-1;
    for(var i=0;i<menuList.length;i++)
    {
        if(menuList[i].showFlag==1)
        {
            num++;
        }
        if(num==postion)
        {
            menuList[i].func();
            break;
        }
    }
}
function initProgressBar(name)
{
	top.timeoutFuc.timeoutTimes = 10;
    parent.hiddenPage(2);
	var tmpvolume = 0;
	switch(name)
	{
		case "soundBalance":
			tmpvolume = soundBalance + 50;
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[1];
			break;
		case "speakerVolume":
			tmpvolume = speakerVolume;
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[5];
			break;
		case "headphoneVolume":
			tmpvolume = headphoneVolume;
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[7];
			break;
		case "btDeviceVolume":
			tmpvolume = btDeviceVolume;
			$("adjustProgMain").getElementsByTagName("span")[0].innerHTML = soundSetTitleWords[9];
			break;
		default:
	}
    	progressDivList[0].style.width = parseInt(tmpvolume*EXTRA_PROGRESS_WIDTH/100,10) + "px";
    	progressDivList[2].style.width = parseInt((100 - tmpvolume)*EXTRA_PROGRESS_WIDTH/100,10) + "px";
	if(name == "soundBalance")
	{
		$("adjustProgValue").innerHTML = soundBalance;
	}
	else
	{
   		$("adjustProgValue").innerHTML = tmpvolume;
	}
    $("adjustProgressBox").style.display="block";
}
function showBalance()
{
	initProgressBar("soundBalance");
	focusOn = "soundBalance";	
}
function showAudioLang()
{
	initAudioMode();
}
function showAudioType()
{
	if(soundTypeLength <= 0)
	{
		return;
	}
	else
	{
		// $("thdListFocus").src=mainFocus[1];
		initSoundType();
		form_position_h = soundTypeInfo.index; 
		
		var soundNameList = new Array(soundTypeLength);
		for(var i = 0; i < soundTypeLength; i++)
		{
			soundNameList[i] = soundTypeWords[parseInt(soundTypeItems[i],10)];
		}
		var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
		var leftOffset = 980;
		top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,soundNameList,soundTypeLength,form_position_h,0);
		focusOn = "soundType";
	}
}
function showAudioDescription()
{
	 parent.jumpPage(3,"soundSetting/audioDescription.html");
}
function showSpeakerStatus()
{	
	// $("thdListFocus").src=mainFocus[1];
	form_position_h = speakerStatus; 

	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 980;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,offOnWords.length,form_position_h,0);
	focusOn = "speakerStatus";
}
function showSpeakerVolume()
{
	initProgressBar("speakerVolume");
	focusOn = "speakerVolume";
}
function showHeadphoneStatus()
{
	// $("thdListFocus").src=mainFocus[1];
	form_position_h = headphoneStatus; 

	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 980;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,offOnWords.length,form_position_h,0);
	focusOn = "headphoneStatus";
}
function showHeadphoneVolume()
{
	initProgressBar("headphoneVolume");
	focusOn = "headphoneVolume";
}
function showBTDeviceStatus()
{
	// $("thdListFocus").src=mainFocus[1];
	form_position_h = btDeviceStatus; 

	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 980;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,offOnWords,offOnWords.length,form_position_h,0);
	focusOn = "btDeviceStatus";
}
function showBTDeviceVolume()
{
	initProgressBar("btDeviceVolume");
	focusOn = "btDeviceVolume";
}



/*
描述：刷新显示列表
参数：position:焦点在所有可选属性列表中的位置
全局变量：progressSpanList；progressDivList；SAME_FUNCTION_OPTION_SUM
*/
/*function refreshProgressBar(position)
{
	for(var i = 0; i < 1; i++)
	{
		if((position + i) <= (SAME_FUNCTION_OPTION_SUM - 1))
		{
			progressSpanList[i].innerHTML = soundPgreTitleWords[position + i];
		}
		else
		{
			progressSpanList[i].innerHTML =  soundPgreTitleWords[(position + i) - SAME_FUNCTION_OPTION_SUM];
		}
	}
	progressDivList[0].style.width = parseInt(progressList[position]*EXTRA_PROGRESS_WIDTH/100,10) + "px";
	progressDivList[2].style.width = parseInt((100 - progressList[position])*EXTRA_PROGRESS_WIDTH/100,10) + "px";
	if(position == 0)
	{
		$("adjustProgValue").innerHTML = soundBalance;
		progressDivList[0].style.background = "#383838";
	}
	else if(position == 1)
	{
		$("adjustProgValue").innerHTML = audioDelay;
		progressDivList[0].style.background = "#FFFFFF";
	}
}
*/
/*
描述：获取sound type的信息,并初始化相关的变量
参数：
全局变量：soundTypeInfo；soundTypeItems；
*/
function initSoundType()
{
	soundTypeInfo = setting.getSoundType();
	soundTypeItems = soundTypeInfo.items.split("/");
	soundTypeLength = soundTypeInfo.length;
}


var audioModeCount = 0;
function getAudioInfo()
{
	//channel.testLog("in getAudioInfo");
	var audioInfo = currentChannel.programAudioMode();
	audioModeCount = audioInfo.audioSelCount;
	audioModeIndex	= audioInfo.curAudioIdx;
	//channel.testLog("in getAudioInfo language list = " + audioInfo.langCodeList);
	var langs = audioInfo.langCodeList.split("/");
	/**********处理audio mode中的语言问题start************/
	var count = 1;
	var nowIndex = 0;
	var afterIndex = 0;
	var beforeIndex = 0;
	var isExist = 0;
	for(nowIndex = 0; nowIndex < audioModeCount; nowIndex++)
	{
		for(beforeIndex = 0; beforeIndex < nowIndex; beforeIndex++)//判断先前是否已经对这个数据做过判断
		{
			if(langs[nowIndex] == langs[beforeIndex])
			{
				isExist = 1;
			}
		}
	
		if(isExist)//先前已经做过判断，直接处理下一个数据
		{
			isExist = 0;
			continue;
		}
		else
		{
			for(afterIndex = ( nowIndex + 1); afterIndex < audioModeCount; afterIndex++)//判断后面是否有相同的语言，如果有需要做特殊处理
			{
				if(langs[nowIndex] == langs[afterIndex])
				{
					count++;
					if(count == 2)//对第一次的语言做处理
					{
						langShows[nowIndex] = top.all_language[langs[nowIndex]] + 1;
					}
					langShows[afterIndex] = top.all_language[langs[afterIndex]] + count;
				}
			}
			if(count == 1)
			{
				langShows[nowIndex] = top.all_language[langs[nowIndex]];
			}
			count = 1;
		}
	}
}

function initAudioMode() //初始化info 信息中的audio
{
	if(audioModeIndex >= audioModeCount || audioModeCount <= 0)
	{
		return;
	}
	
	// $("thdListFocus").src=mainFocus[1];
	if(audioModeCount > 5)
	{
		if(audioModeIndex >= 5)
		{
			form_position_h = 4;
			offset = audioModeIndex - form_position_h;
		}
		else
		{
			form_position_h = audioModeIndex;
			offset = 0;
		}
	}
	else
	{
		form_position_h = audioModeIndex;
		offset = 0;
	}
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 980;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,langShows,audioModeCount,form_position_h,offset);
	focusOn = "audioMode";
}

/*
描述：刷新menu菜单中的进度条
*/
function refreshMenuProgress()
{
	$("soundBalanceValue").innerHTML = soundBalance;
	$("audioDelayValue").innerHTML = audioDelay;
	
	$("soundBalancePgreLeft").style.width = parseInt(progressList[0]*PROGRESS_WIDTH/100,10) + "px";
	$("soundBalancePgreRight").style.width = parseInt((100 - progressList[0])*PROGRESS_WIDTH/100,10) + "px";
	
	$("audioDelayPgreLeft").style.width = parseInt(progressList[1]*PROGRESS_WIDTH/100,10) + "px";
	$("audioDelayPgreRight").style.width = parseInt((100 - progressList[1])*PROGRESS_WIDTH/100,10) + "px";
}
function setShowFlagByName(name, flag)
{
	switch(name)
	{
		case "soundBalance":
			menuList[0].showFlag = flag;
			break;
		case "audioLanguage":
			menuList[1].showFlag = flag;
			break;
		case "audioType":
			menuList[2].showFlag = flag;
			break;
		case "audioDescription":
			menuList[3].showFlag = flag;
			break;
		case "speakerStatus":
			menuList[4].showFlag = flag;
			break;
		case "speakerVolume":
			menuList[5].showFlag = flag;
			break;
		case "headphoneStatus":
			menuList[6].showFlag = flag;
			break;
		case "headphoneVolume":
			menuList[7].showFlag = flag;
			break;
		case "btDeviceStatus":
			menuList[8].showFlag = flag;
			break;
		case "btDeviceVolume":
			menuList[9].showFlag = flag;
			break;
		default:
			channel.testLog("soundAdvanced setting: setShowFlagByName, wrong show flag name, it should not happen!! name = "+ name);
			break;
	}
}
function getShowFlagByName(name)
{
	var flag = 1;
	switch(name)
	{
		case "soundBalance":
			flag = menuList[0].showFlag;
			break;
		case "audioLanguage":
			flag = menuList[1].showFlag;
			break;
		case "audioType":
			flag = menuList[2].showFlag;
			break;
		case "audioDescription":
			flag = menuList[3].showFlag;
			break;
		case "speakerStatus":
			flag = menuList[4].showFlag;
			break;
		case "speakerVolume":
			flag = menuList[5].showFlag;
			break;
		case "headphoneStatus":
			flag = menuList[6].showFlag;
			break;
		case "headphoneVolume":
			flag = menuList[7].showFlag;
			break;
		case "btDeviceStatus":
			flag = menuList[8].showFlag;
			break;
		case "btDeviceVolume":
			flag = menuList[9].showFlag;
			break;
		default:
			channel.testLog("soundAdvanced setting: getShowFlagByName, wrong show flag name, it should not happen!! name = "+name);
			break;
	}
	return flag;
}
function prepareMenuShow()//隐藏处理函数，后续添加配置项设置，可在这个函数里面设置showFlag值
{
	var listnum = 0;
	for(var i = 0; i < menuList.length; i++)//clean all setting
	{
		menuList[i].showFlag = 1;
	}

	if(inputSource != 0)
	{
		setShowFlagByName("audioType", 0);
	}

	if(inputSource != 1)//sound type able,Visually impaired unable
	{
		setShowFlagByName("audioDescription", 0);
	}

    if(inputSource != 1)
    {
        setShowFlagByName("audioLanguage", 0);
    }
    if(top.isLAFlag || top.isNAFlag)
    {
        setShowFlagByName("audioDescription", 0);
    }
	if(0 == speakerStatus)
	{
		setShowFlagByName("speakerVolume", 0);
	}
	if(0 == headphoneStatus)
	{
		setShowFlagByName("headphoneVolume", 0);
	}

    if(0 == top.supportHeadphone)
    {
        setShowFlagByName("headphoneStatus", 0);
        setShowFlagByName("headphoneVolume", 0);
    }

    if(0 == top.supportBluetooth)
	{
		setShowFlagByName("btDeviceStatus", 0);
		setShowFlagByName("btDeviceVolume", 0);
	}
	else if(top.bt_soundOutputShowFlag == true)
	{
		if(0 == btDeviceStatus)
		{
			setShowFlagByName("btDeviceVolume", 0);
		}	
	}
	else
	{
		setShowFlagByName("btDeviceStatus", 0);
		setShowFlagByName("btDeviceVolume", 0);
	}

    setShowFlagByName("soundBalance",0);   //5655EU把balance移到sound
	for(var i = 0; i < menuList.length; i++)
	{
		if(menuList[i].showFlag == 1)
			listnum++;
	}
	listMaxNum = listnum;
}
function prepareAudioInfo()
{
	if(getShowFlagByName("audioLanguage") == 1)
	{
		getAudioInfo();
	}
	if(getShowFlagByName("audioType") == 1)
	{
		initSoundType();
	}
}
function findPosition(name)
{
	var position=0;
	for(var i=0;i<menuList.length;i++)
	{
		if(menuList[i].name==name)
		{
			break;
		}
		if(menuList[i].showFlag==1)
		{
			position++;
		}
	}
	return position;
}
function refreshMenuShow()
{
	for(var i = 0; i < menuList.length; i++)
	{
		if(menuList[i].showFlag == 0)
		{
			thdMenuRightLiList[i+1].style.display = "none";
		}
		else
		{
			thdMenuRightLiList[i+1].style.display = "block";
		}
	}
	if(getShowFlagByName("soundBalance") == 1)
	{
		$("soundBalanceValue").innerHTML = soundBalance;	
		$("soundBalanceLeft").style.width = parseInt((soundBalance+50)*PROGRESS_WIDTH/100,10) + "px";
		$("soundBalanceRight").style.width = parseInt((100 - (soundBalance+50))*PROGRESS_WIDTH/100,10) + "px";
	}
	if(getShowFlagByName("audioLanguage") == 1)
	{
		if(audioModeCount > 0)
		{
			$("audioLanguage").innerHTML = langShows[audioModeIndex];
		}
		else
		{
			$("audioLanguage").innerHTML = none;
		}
	}
	if(getShowFlagByName("audioType") == 1)
	{
		$("soundTypeStatus").innerHTML = soundTypeWords[parseInt(soundTypeItems[soundTypeInfo.index],10)];
	}
	//if(getShowFlagByName("audioDescription") == 1)
	//{
		// do nothing		
	//}
	if(getShowFlagByName("speakerStatus") == 1)
	{
		$("speakerStatus").innerHTML = offOnWords[speakerStatus];
	}
	if(getShowFlagByName("speakerVolume") == 1)
	{
		$("speakerVolumeValue").innerHTML = speakerVolume;	
		$("speakerVolumeLeft").style.width = parseInt(speakerVolume*PROGRESS_WIDTH/100,10) + "px";
		$("speakerVolumeRight").style.width = parseInt((100 - speakerVolume)*PROGRESS_WIDTH/100,10) + "px";
	}
	if(getShowFlagByName("headphoneStatus") == 1)
	{
		$("headphoneStatus").innerHTML = offOnWords[headphoneStatus];
	}
	if(getShowFlagByName("headphoneVolume") == 1)
	{
		$("headphoneVolumeValue").innerHTML = headphoneVolume;	
		$("headphoneVolumeLeft").style.width = parseInt((headphoneVolume)*PROGRESS_WIDTH/100,10) + "px";
		$("headphoneVolumeRight").style.width = parseInt((100 - headphoneVolume)*PROGRESS_WIDTH/100,10) + "px";
	}
	if(getShowFlagByName("btDeviceStatus") == 1)
	{
		$("btDeviceStatus").innerHTML = offOnWords[btDeviceStatus];
	}
	if(getShowFlagByName("btDeviceVolume") == 1)
	{
		$("btDeviceVolumeValue").innerHTML = btDeviceVolume;	
		$("btDeviceVolumeLeft").style.width = parseInt(btDeviceVolume*PROGRESS_WIDTH/100,10) + "px";
		$("btDeviceVolumeRight").style.width = parseInt((100 - btDeviceVolume)*PROGRESS_WIDTH/100,10) + "px";
	}
	if(list_position_h > listMaxNum - 1)
	{
		list_position_h = listMaxNum - 1;
		$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	}
	
}
var thdMenuRightSpanList;
var thdMenuRightLiList;
var listFormLiList;
var currentChannel;
var listFirstSpans;
var langShows = new Array(20); //国家显示文字数组
function init()
{
    top.initTextDirection(window);
	timeoutInit();
    initSetRegion();
   //showPromptCont();

	progressDivList = $("adjustProgBar").getElementsByTagName("div");
	inputSource = channel.inputSource;
	//channel.testLog("inptu = " + inputSource + ",isfirstinsound = " + top.g_sound_settings.isFirstTimeIntoSound);
	thdMenuRightLiList = $("thdMenuRight").getElementsByTagName("li");
	thdMenuRightSpanList = $("thdMenuRight").getElementsByTagName("span");
	for(var i = 0; i < thdMenuRightLiList.length; i++)
	{
		thdMenuRightSpanList[i].innerHTML = soundSetTitleWords[i];
	}
	currentChannel = channel.getCurrentChannelInfo();
	
	soundBalance = setting.soundBalance;
	audioDelay = setting.audioDelay;
	speakerVolume = top.g_channel.volume;
	headphoneVolume = setting.headphoneVolume;
	btDeviceVolume = bluetooth.getBluetoothVolume();
	speakerStatus = setting.speakerStatus;
	headphoneStatus = setting.headphoneStatus;
    maxVolume = top.g_setting.maxVolume;
	if(top.bt_soundOutputShowFlag == true)
	{
		btDeviceStatus =  parseInt(setting.getProperty(OUT_PUT_NAME_FOR_DB,"0"));//获取上一次保存的蓝牙设置界面设置的通导
		if(btDeviceStatus > 1)
			btDeviceStatus = 1;
		if(btDeviceStatus < 0)
			btDeviceStatus = 0;
	}
	prepareMenuShow();
	prepareAudioInfo();
	/*if(inputSource == 1)
	{
		//channel.testLog("in init before getAudioInfo");
		getAudioInfo();
		//channel.testLog("in init after getAudioInfo audioModeIndex = " + audioModeIndex);
		if(audioModeCount > 0)
		{
			$("audioLanguage").innerHTML = langShows[audioModeIndex];
		}
		else
		{
			$("audioLanguage").innerHTML = "unknown";
		}
		thdMenuRightLiList[4].style.display = "none";//sound type none
	}
	else if(inputSource == 0 || inputSource == 3 || inputSource == 4)//sound type able,Visually impaired unable
	{
		initSoundType();
		$("soundTypeStatus").innerHTML = soundTypeWords[parseInt(soundTypeItems[soundTypeInfo.index],10)];
		thdMenuRightLiList[3].style.display = "none";// audio language none
		thdMenuRightLiList[5].style.display = "none";//audio description none
	}
	else
	{
		thdMenuRightLiList[3].style.display = "none";// audio language none
		thdMenuRightLiList[4].style.display = "none";//sound type none
		thdMenuRightLiList[5].style.display = "none";//audio description none
	}	
	*/
	refreshMenuShow();
	//把三个有进度条的值转换成0-100的进度保存到progressList中
	/*progressList[0] = soundBalance + 50;
	progressList[1] = parseInt(audioDelay/10,10);
	refreshMenuProgress();

	list_position_h = 0;
	$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	$("thdListFocus").src=mainFocus[0];
	thdMenuRightLiList[2].style.display = "none";//audio description none
	*/
	listFormLiList = $("listForm").getElementsByTagName("li");
	listFirstSpans = $("thdMenuRight").getElementsByClassName("listFirstProperty");
	addMouseListener();
    showPromptCont();
	top.doEleScrForNoOption(listFirstSpans,list_position_h, 0);
	ttsRead();
}

function uninit()
{
	top.timeoutFuc.timeoutTimes = 30;
}

function initSetRegion()
{
    if (top.uiColourStyleFlag == 1)
    {
        $("progressBarLeftDiv").style.background =  top.uiColourStyle;
    }
}

function updateData()
{
	if(inputSource == 1)
	{
		//channel.testLog("in init before getAudioInfo");
		var audioInfo = currentChannel.programAudioMode();
		audioModeCount = audioInfo.audioSelCount;
		audioModeIndex	= audioInfo.curAudioIdx;
		//channel.testLog("in init after getAudioInfo audioModeIndex = " + audioModeIndex);
		if(audioModeCount > 0)
		{
			$("audioLanguage").innerHTML = langShows[audioModeIndex];
		}
		else
		{
			$("audioLanguage").innerHTML = none;
		}
		thdMenuRightLiList[3].style.display = "none";//sound type none
	}
}

var PROGRESS_START_LEFT_OFFSET = 270 + 310;//进度条容器开始位置相对于framework的左偏移，480是进度条的父容器的相对framwork的左偏移，310是进度条容器相对于进度条父容器的左偏移
var PROGRESS_MAX_VALUE = 100;
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	}

	for (var i = 0; i < menuList.length; i++)
	{
		//console.log("i = "+i+"focusOn = "+focusOn);
		thdMenuRightLiList[i].setAttribute("newAttr",i);
		thdMenuRightLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "menu"){
					list_position_h = findPosition(menuList[parseInt(this.getAttribute("newAttr"))].name) - 1;
				
					if(list_position_h >= 0)
					{
						$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
						doEnter();	
					}
                    showPromptCont();
					
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	
	for(var i = 0; i < 5; i++)
	{
		listFormLiList[i].setAttribute("newAttr",i);
		listFormLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				console.log("in mouse focusOn = "+focusOn);
				if(focusOn == "audioMode" || focusOn == "soundType"||focusOn == "speakerStatus"||focusOn == "headphoneStatus"||focusOn == "btDeviceStatus"){
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
			if(focusOn == "audioMode")
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
			if(focusOn == "audioMode")
			{
				form_position_h = 4;
				$("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
				toDown();
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}

	
	$("adjustProgMain").onmousedown = function(evt){
		console.log("in onmousedown list adjustProgMain = " + focusOn + ",evt.clientX = " + evt.clientX);
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			var value = parseInt((evt.clientX - PROGRESS_START_LEFT_OFFSET)*PROGRESS_MAX_VALUE/EXTRA_PROGRESS_WIDTH,10);
			console.log("current dex is "+evt.clientX+" value is "+value);
			if(focusOn == "speakerVolume")
			{
				speakerVolume = value;
				if(speakerVolume < 0)
				{
					speakerVolume = 0;
				}
				else if(speakerVolume > 100)
				{
					speakerVolume = 100;
				}
				$("adjustProgValue").innerHTML = speakerVolume;
				top.g_channel.volume = speakerVolume;
				progressDivList[0].style.width = parseInt(speakerVolume*EXTRA_PROGRESS_WIDTH/100,10) + "px";
				progressDivList[2].style.width = parseInt((100 - speakerVolume)*EXTRA_PROGRESS_WIDTH/100,10) + "px";
			}
			else if(focusOn == "headphoneVolume")
			{
				headphoneVolume = value;
				if(headphoneVolume < 0)
				{
					headphoneVolume = 0;
				}
				else if(headphoneVolume > 100)
				{
					headphoneVolume = 100;
				}
				$("adjustProgValue").innerHTML = headphoneVolume;
				setting.headphoneVolume = headphoneVolume;
				progressDivList[0].style.width = parseInt(headphoneVolume*EXTRA_PROGRESS_WIDTH/100,10) + "px";
				progressDivList[2].style.width = parseInt((100 - headphoneVolume)*EXTRA_PROGRESS_WIDTH/100,10) + "px";
			}
			else if(focusOn == "btDeviceVolume")
			{
				btDeviceVolume = value;
				if(btDeviceVolume < 0)
				{
					btDeviceVolume = 0;
				}
				else if(btDeviceVolume > 100)
				{
					btDeviceVolume = 100;
				}
				$("adjustProgValue").innerHTML = btDeviceVolume;
				bluetooth.setBluetoothVolume(btDeviceVolume);
				progressDivList[0].style.width = parseInt(btDeviceVolume*EXTRA_PROGRESS_WIDTH/100,10) + "px";
				progressDivList[2].style.width = parseInt((100 - btDeviceVolume)*EXTRA_PROGRESS_WIDTH/100,10) + "px";
			}
			/*
			if(focusOn == "progressBar")
			{
				var prog = parseInt((evt.clientX - PROGRESS_START_LEFT_OFFSET)*100/EXTRA_PROGRESS_WIDTH,10);
				if(prog < 0)
				{
					prog = 0;
				}
				else if(prog > 100)
				{
					prog = 100;
				}
				progressList[progressNumber] = prog;
				progressDivList[0].style.width = parseInt(progressList[progressNumber]*EXTRA_PROGRESS_WIDTH/100,10) + "px";
				progressDivList[2].style.width = parseInt((100 - progressList[progressNumber])*EXTRA_PROGRESS_WIDTH/100,10) + "px";
				
				if(progressNumber == 0)
				{
					soundBalance = progressList[progressNumber] - 50;
					setting.soundBalance = soundBalance
					$("adjustProgValue").innerHTML = soundBalance;
				}
				else if(progressNumber == 1)
				{
					audioDelay = progressList[progressNumber]*10;
					setting.audioDelay = audioDelay
					$("adjustProgValue").innerHTML = audioDelay;
				}
			}*/
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
}

function findName(postion)
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
            return menuList[i].name;
        }
    }
}

function showPromptCont()//显示提示语内容函数
{
    if (focusOn == "menu" && parent.currentShowMenu == 2)
    {
        clearTimeout(showPromptContTimer);
        showPromptContTimer = setTimeout(function ()
        {
            $("promptWin").style.display = "none"
        }, 5000);
        $("promptWin").style.top = 110 + list_position_h * 70 + "px";


          var currentItemName = findName(list_position_h);
        if("Sound type" == currentItemName)
        {
            $("promptContent").innerHTML = soundAdvancedPromptCon[0];
            showPromptImg();
        }
        else if("Speaker" == currentItemName)
        {
            $("promptContent").innerHTML = soundAdvancedPromptCon[1];
            showPromptImg();
        }
        else
        {
            $("promptWin").style.display = "none";
        }


        /*switch (list_position_h)
        {
            case 0:
                $("promptContent").innerHTML = soundAdvancedPromptCon[0];
                showPromptImg();
                break;
            case 1:
                $("promptContent").innerHTML = soundAdvancedPromptCon[1];
                showPromptImg();
                break;
            case 2:
                $("promptWin").style.display = "none";
                break;
            case 3:
                $("promptWin").style.display = "none";
                break;
            case 4:
                $("promptWin").style.display = "none";
                break;
            case 5:
                $("promptWin").style.display = "none";
                break;
            case 6:
                $("promptWin").style.display = "none";
                break;
            case 7:
                $("promptWin").style.display = "none";
                break;
            case 8:
                $("promptWin").style.display = "none";
                break;
            case 9:
                $("promptWin").style.display = "none";
                break;
            default:
                $("promptWin").style.display = "none";
                break;
        }*/
    }
    else
    {
        $("promptWin").style.display = "none";
    }
}
var soundAdvancedPromptImg = ["../images/info-1_2.png", "../images/info-1_3.png", "../images/info-1_4.png", "../images/info-1_5.png", "../images/info-1_6.png"];
var ONE_LINE_TOP = 35;
var TWO_LINE_TOP = 12;
var THREE_LINE_TOP = 18;
var FOUR_LINE_TOP = 28;
var FIVE_LINE_TOP = 35;
var SIX_LINE_TOP = 40;
function showPromptImg()
{
    $("promptWin").style.display = "block";
    var height = $("promptContent").offsetHeight;
    var img = $("promptWin").getElementsByTagName("img");
    var div = $("promptWin").getElementsByTagName("div");
    if (height == 40)
    {
        img[0].src = soundAdvancedPromptImg[0];
        $("promptContent").style.top = ONE_LINE_TOP + "px";
        img[0].style.height = "110px";
        div[0].style.height = "102px";
        $("promptWin").style.top = 80 + list_position_h * 70 + "px";
    }
    else if (height == 80)
    {
        img[0].src = soundAdvancedPromptImg[0];
        $("promptContent").style.top = TWO_LINE_TOP + "px";
        img[0].style.height = "110px";
        div[0].style.height = "102px";
        $("promptWin").style.top = 80 + list_position_h * 70 + "px";
    }
    else if (height == 120)
    {
        img[0].src = soundAdvancedPromptImg[1];
        $("promptContent").style.top = THREE_LINE_TOP + "px";
        img[0].style.height = "160px";
        div[0].style.height = "152px";
        $("promptWin").style.top = 50 + list_position_h * 70 + "px";
    }
    else if (height == 160)
    {
        img[0].src = soundAdvancedPromptImg[2];
        $("promptContent").style.top = FOUR_LINE_TOP + "px";
        img[0].style.height = "220px";
        div[0].style.height = "212px";
        $("promptWin").style.top = 20 + list_position_h * 70 + "px";
    }
    else if (height == 200)
    {
        img[0].src = soundAdvancedPromptImg[3];
        $("promptContent").style.top = FIVE_LINE_TOP + "px";
        img[0].style.height = "280px";
        div[0].style.height = "272px";
        $("promptWin").style.top = -10 + list_position_h * 70 + "px";
    }
    else if (height == 240)
    {
        img[0].src = soundAdvancedPromptImg[4];
        $("promptContent").style.top = SIX_LINE_TOP + "px";
        img[0].style.height = "340px";
        div[0].style.height = "332px";
        $("promptWin").style.top = -30 + list_position_h * 70 + "px";
    }
    else if (height == 0)
    {
        img[0].src = soundAdvancedPromptImg[0];
        $("promptContent").style.top = TWO_LINE_TOP + "px";
        img[0].style.height = "110px";
        div[0].style.height = "102px";
        $("promptWin").style.top = 80 + list_position_h * 70 + "px";
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
	var ttsStr = "";
	var currentStatus = "";
	var currentName = findName(list_position_h);
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

	if("menu" == focusOn && 2 == parent.currentShowMenu)
	{
		switch(currentName)
		{
			case soundSetTitleWords[1]:
				ttsName = currentName + ",";
				currentStatus = soundBalance;
				break;
			case soundSetTitleWords[2]:
				ttsName = currentName + ",";
				currentStatus = langShows[audioModeIndex];
				break;
			case soundSetTitleWords[3]:
				ttsName = currentName + ",";
				currentStatus = soundTypeWords[parseInt(soundTypeItems[soundTypeInfo.index], 10)];
				break;
			case soundSetTitleWords[4]:
				ttsName = currentName;
				currentStatus = "";
				break;
			case soundSetTitleWords[5]:
				ttsName = currentName + ",";
				currentStatus = offOnWords[speakerStatus];
				break;
			case soundSetTitleWords[6]:
				ttsName = currentName + ",";
				currentStatus = speakerVolume;
				break;
			case soundSetTitleWords[7]:
				ttsName = currentName + ",";
				currentStatus = offOnWords[headphoneStatus];
				break;
			case soundSetTitleWords[8]:
				ttsName = currentName + ",";
				currentStatus = headphoneVolume;
				break;
			case soundSetTitleWords[9]:
				ttsName = currentName + ",";
				currentStatus = offOnWords[btDeviceStatus];
				break;
			case soundSetTitleWords[10]:
				ttsName = currentName + ",";
				currentStatus = btDeviceVolume;
				break;
			default:
				ttsName = "";
				currentStatus = "";
				break;
		}
	}
	else if("speakerStatus" == focusOn)  //soundPreset选项菜单
	{
		ttsName = "";
		currentStatus = offOnWords[form_position_h];
		isSelected(offOnWords[speakerStatus] == currentStatus);
	}
	else if("headphoneStatus" == focusOn)
	{
		ttsName = "";
		currentStatus = offOnWords[form_position_h];
		isSelected(offOnWords[headphoneStatus] == currentStatus);
	}
	else if("btDeviceStatus" == focusOn)
	{
		ttsName = "";
		currentStatus = offOnWords[form_position_h];
		isSelected(offOnWords[btDeviceStatus] == currentStatus);
	}
	else if("soundType" == focusOn)
	{
		ttsName = "";
		currentStatus = soundTypeWords[parseInt(soundTypeItems[form_position_h], 10)];
		isSelected(soundTypeWords[parseInt(soundTypeItems[soundTypeInfo.index], 10)] == currentStatus);
	}
	else if("audioMode" == focusOn)
	{
		ttsName = "";
		currentStatus = langShows[form_position_h + offset];
		isSelected(langShows[audioModeIndex] == currentStatus);

	}
	else if($("adjustProgressBox").style.display == "block")
	{
		switch(focusOn)
		{
			case "soundBalance":
				ttsName = soundSetTitleWords[1];
				currentStatus = soundBalance;
				break;
			case "speakerVolume":
				ttsName = soundSetTitleWords[6];
				currentStatus = speakerVolume;
				break;
			case "headphoneVolume":
				ttsName = soundSetTitleWords[8];
				currentStatus = headphoneVolume;
				break;
			case "btDeviceVolume":
				ttsName = soundSetTitleWords[10];
				currentStatus = btDeviceVolume;
				break;
			default:
				break;
		}
		if(lastFocusName == currentName && lastFocusType == focusOn)
		{
			ttsName = "";
		}
		else
		{
			ttsName = ttsName + ",";
		}
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