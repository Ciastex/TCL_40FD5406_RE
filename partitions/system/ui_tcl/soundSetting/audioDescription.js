/******************** created by chenhua ***********************/
var audioDescriptionTitleWords 	= [top.souOptions[10],top.souOptions[10],top.others[0]];
var audioDescriptionName    	= [top.audioDescriptionName[0], top.isAPFlag?top.audioDescriptionName[1]:top.audioDescriptionName[9], top.audioDescriptionName[3], top.audioDescriptionName[6], top.audioDescriptionName[5]];
var audDesOptions     			= [top.audioDescriptionOptions[1], top.audioDescriptionOptions[2]];
//var headphoneOptions           = top.audioDescriptionOptions
//var offOnWords					= top.offOn;

var setting 					= top.g_setting;
var channel			 			= top.g_channel;
var audioDescription			= 0;
var volume						= 0;
var focusOn 					= "menu"; 				//menu,preset
var list_position_h				= 0;
var form_position_h				= 0;
var positionV                   = 0;//主界面坐标

var SUB_MENU_START 				= 160;					//三级级菜单焦点移动起始位置
var SUB_MENU_STEP 				= 70;					//三级级主菜单焦点移动的step
var FORM_STEP					= 80;					//弹出框焦点移动的step
var PROGRESS_WIDTH				= 250;	
var EXTRA_PROGRESS_WIDTH		= 900;					// 弹出式进度条的宽度			
var mainFocus                   = ["../images/Focus_Frame/Focus-1.png","../images/Focus_Frame/Focus-2.png"];			

var speakerValue = 0;
var headphoneValue = 0;
var btdeviceValue = 0;
var	btDeviceConfigVal = 1;
var ADVolumeValue = 0;
var presetFocusWidth       = 230;
var presetPositionH        = 0;

var listFormLiList;
var fourthMenuRightLiList;
var listFirstSpans;
var progressDivList;
var presetSpans;

var PROGRESS_START_LEFT_OFFSET = 270+310;//进度条容器开始位置相对于framework的左偏移，480是进度条的父容器的相对framwork的左偏移，310是进度条容器相对于进度条父容器的左偏移
document.onsystemevent 				= notifyProcess;

var menuList = [
    {name:audioDescriptionName[0],func:function(){showSpeaker()},showFlag:1},
    {name:audioDescriptionName[1],func:function(){showHeadphone()},showFlag:1},
    {name:audioDescriptionName[2],func:function(){showBTDevice()},showFlag:1},
    {name:audioDescriptionName[3],func:function(){showADvolume()},showFlag:1},
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

function toDown()
{
    if(focusOn=="menu")
    {
        if(findName(positionV)==findLastName())
        {
            positionV=findPosition(findFirstName());
        }
        else
        {
            positionV++;
        }
        doOffsetMenuList(positionV);
        top.doEleScrForNoOption(listFirstSpans, findRealPosition(positionV), 1);
    }
}
function toUp()
{
    if(focusOn=="menu")
    {
        if(findName(positionV)==findFirstName())
        {
            positionV=findPosition(findLastName());
        }
        else
        {
            positionV--;
        }
        doOffsetMenuList(positionV);
        top.doEleScrForNoOption(listFirstSpans, findRealPosition(positionV), -1);
    }
}
function doEnter()
{
	if(focusOn == "menu")
	{
        findFunction(positionV);
	}
	else if(focusOn == "speaker")
	{
        //setting.motionEnhancementSwitch = picMotionModeVal;
        speakerValue = presetPositionH;
        setting.speakerType = speakerValue;
        updateMenu(audioDescriptionName[0]);
        $("preSetBar").style.display="none";
        parent.showPage(3);
        focusOn="menu";
	}
    else if(focusOn == "headphone")
    {
        //setting.motionEnhancementSwitch = picMotionModeVal;
        headphoneValue = presetPositionH;
        setting.headphoneType = headphoneValue;
        updateMenu(audioDescriptionName[1]);
        $("preSetBar").style.display="none";
        parent.showPage(3);
        focusOn="menu";
    }
	 else if(focusOn == "btdevice")
    {
        //setting.motionEnhancementSwitch = picMotionModeVal;
        btdeviceValue = presetPositionH;
        //setting.headphoneType = btdeviceValue; //fixme
        updateMenu(audioDescriptionName[2]);
        $("preSetBar").style.display="none";
        parent.showPage(3);
        focusOn="menu";
    }
}
function toBack()
{
	if(focusOn == "menu")
	{
		parent.returnPage(3);
	}
    else if(focusOn == "speaker")
    {
        updateMenu(audioDescriptionName[0]);
        $("preSetBar").style.display="none";
        parent.showPage(3);
        focusOn="menu";
    }
    else if(focusOn == "headphone")
    {
        updateMenu(audioDescriptionName[1]);
        $("preSetBar").style.display="none";
        parent.showPage(3);
        focusOn="menu";
    }
	 else if(focusOn == "btdevice")
    {
        updateMenu(audioDescriptionName[2]);
        $("preSetBar").style.display="none";
        parent.showPage(3);
        focusOn="menu";
    }
    else if(focusOn == "ADVolumeValue")
    {
        updateMenu(audioDescriptionName[3]);
        $("adjustProgressBox").style.display="none";
        parent.showPage(3);
        focusOn="menu";
    }
	else
	{
		$("fourthListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
}
function toLeft()
{
	if(focusOn == "menu")
	{
		toBack();
	}
    else if(focusOn == "speaker")
    {
        presetPositionH--;
        if(presetPositionH<0)
        {
            presetPositionH=1;
        }
        $("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
        //setting.previewAutoFormat(presetPositionH);
        top.doElementScroll(presetSpans,presetPositionH);
    }
    else if(focusOn == "headphone")
    {
        presetPositionH--;
        if(presetPositionH<0)
        {
            presetPositionH=1;
        }
        $("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
        //setting.previewAutoFormat(presetPositionH);
        top.doElementScroll(presetSpans,presetPositionH);
    }
	else if(focusOn == "btdevice")
    {
        presetPositionH--;
        if(presetPositionH<0)
        {
            presetPositionH=1;
        }
        $("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
        //setting.previewAutoFormat(presetPositionH);
        top.doElementScroll(presetSpans,presetPositionH);
    }
    else if(focusOn == "ADVolumeValue")
    {
        if(ADVolumeValue > 0)
        {
            ADVolumeValue--;
            progressDivList[0].style.width = parseInt(ADVolumeValue*EXTRA_PROGRESS_WIDTH/100,10) + "px";
            progressDivList[2].style.width = parseInt((100 - ADVolumeValue)*EXTRA_PROGRESS_WIDTH/100,10) + "px";
            setting.mixingLevel = ADVolumeValue;
            $("adjustProgValue").innerHTML = ADVolumeValue;
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
		doEnter();
	}
	else if(focusOn == "speaker")
    {
        presetPositionH++;
        if(presetPositionH>1)
        {
            presetPositionH=0;
        }
        $("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
        //setting.previewAutoFormat(presetPositionH);
        top.doElementScroll(presetSpans,presetPositionH);
    }
    else if(focusOn == "headphone")
    {
        presetPositionH++;
        if(presetPositionH>1)
        {
            presetPositionH=0;
        }
        $("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
        //setting.previewAutoFormat(presetPositionH);
        top.doElementScroll(presetSpans,presetPositionH);
    }
	else if(focusOn == "btdevice")
    {
        presetPositionH++;
        if(presetPositionH>1)
        {
            presetPositionH=0;
        }
        $("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
        //setting.previewAutoFormat(presetPositionH);
        top.doElementScroll(presetSpans,presetPositionH);
    }
    else if(focusOn == "ADVolumeValue")
    {
        if(ADVolumeValue < 100)
        {
            ADVolumeValue++;
            progressDivList[0].style.width = parseInt(ADVolumeValue*EXTRA_PROGRESS_WIDTH/100,10) + "px";
            progressDivList[2].style.width = parseInt((100 - ADVolumeValue)*EXTRA_PROGRESS_WIDTH/100,10) + "px";
            setting.mixingLevel = ADVolumeValue;
            $("adjustProgValue").innerHTML = ADVolumeValue;
        }
    }
	else
	{
		doEnter();
	}
}

/*
 描述：初始化需要通过进度显示的设置项
 参数：选择项的名称
*/

function showSpeaker()
{
    showPersetSelect(2);
    $("preSetOption").innerHTML=audioDescriptionName[1];
	var spans=$("preSetBar").getElementsByTagName("span");
    for(var i=0;i<2;i++)
    {
        spans[i+1].innerHTML=audDesOptions[i];
    }
    presetPositionH=speakerValue;
    top.doElementScroll(presetSpans,presetPositionH);
    $("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
    $("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
    $("currentOption").style.display = "block";
    parent.hiddenPage(3)
    $("preSetBar").style.display="block"
    focusOn="speaker";
}
function showHeadphone()
{
    showPersetSelect(2);
    $("preSetOption").innerHTML=audioDescriptionName[2];
    var spans=$("preSetBar").getElementsByTagName("span");
    for(var i=0;i<2;i++)
    {
        spans[i+1].innerHTML=audDesOptions[i];
    }
    presetPositionH=headphoneValue;
    top.doElementScroll(presetSpans,presetPositionH);
    $("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
    $("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
    $("currentOption").style.display = "block";
    parent.hiddenPage(3)
    $("preSetBar").style.display="block"
    focusOn="headphone";
}
function showBTDevice()
{
	showPersetSelect(2);
	$("preSetOption").innerHTML=audioDescriptionName[3];
    var spans=$("preSetBar").getElementsByTagName("span");
    for(var i=0;i<2;i++)
    {
        spans[i+1].innerHTML=audDesOptions[i];
    }
    presetPositionH=btdeviceValue;
    top.doElementScroll(presetSpans,presetPositionH);
    $("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
    $("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
    $("currentOption").style.display = "block";
    parent.hiddenPage(3)
    $("preSetBar").style.display="block"
    focusOn="btdevice";
}
function showADvolume()
{
    top.timeoutFuc.timeoutTimes = 10;
    parent.hiddenPage(3);
    $("adjustProgMain").getElementsByTagName("span")[0].innerHTML = audioDescriptionName[4];
    progressDivList[0].style.width = parseInt(ADVolumeValue*EXTRA_PROGRESS_WIDTH/100,10) + "px";
    progressDivList[2].style.width = parseInt((100 - ADVolumeValue)*EXTRA_PROGRESS_WIDTH/100,10) + "px";
    $("adjustProgValue").innerHTML = ADVolumeValue;
    $("adjustProgressBox").style.display="block";
    focusOn="ADVolumeValue";
}

function showVolumeProgress(progress)
{
    $("ADVolumePgreLeft").style.width = parseInt(progress*PROGRESS_WIDTH/100,10) + "px";
    $("ADVolumePgreRight").style.width = parseInt((100 - progress)*PROGRESS_WIDTH/100,10) + "px";
    $("ADVolumeValue").innerHTML = progress;
}

/*
描述：刷新主菜单的显示项
参数：audioDesc：audioDescription
全局变量：
*/
function showMenuList()
{
	if(setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_BluetoothSoundbox_support", "0")=="0")
	{
		 menuList[2].showFlag=0;
	}
    if(speakerValue == 1 || headphoneValue == 1 || (btdeviceValue == 1 &&  menuList[2].showFlag == 1))//off
    {
        menuList[3].showFlag=1;
        showVolumeProgress(ADVolumeValue);
    }
    else
    {
        menuList[3].showFlag=0;
    }

    try
    {
        for(var i=0;i<menuList.length;i++)
        {
            if(menuList[i].showFlag==1)
            {
                fourthMenuRightLiList[i+1].style.display="block";
            }
            else
            {
                fourthMenuRightLiList[i+1].style.display="none";
            }
        }
    }catch(er)
    {
        top.g_channel.testLog(er);
    }
}

/*
描述：初始化audio description列表
参数：position：form_position_h
全局变量：list_position_h,listFormLiList
*/

function init()
{
    top.initTextDirection(window);
	timeoutInit();
    initSetRegion();
	progressDivList = $("adjustProgBar").getElementsByTagName("div");
	listFormLiList = $("listForm").getElementsByTagName("li");	
	fourthMenuRightLiList = $("fourthMenuRight").getElementsByTagName("li");
    presetSpans=$("preSetBar").getElementsByTagName("span");
	var fourthMenuRightSpanList = $("fourthMenuRight").getElementsByTagName("span");
    for(var i = 0;i<fourthMenuRightLiList.length;i++)
    {
        fourthMenuRightSpanList[i].innerHTML = audioDescriptionName[i];
    }
    positionV = 0;
    $("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*positionV + "px";
    listFirstSpans = $("fourthMenuRight").getElementsByClassName("listFirstProperty");

    initVarValue();
    initSpeakerMenu();
    initHeadphoneMenu();
	initBTDeviceMenu();
	showMenuList();
	addMouseListener();
	top.doEleScrForNoOption(listFirstSpans,positionV, 0);
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

function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) toBack();//right key
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	for(var i = 1;i < fourthMenuRightLiList.length; i++)
	{
		fourthMenuRightLiList[i].setAttribute("newAttr",i-1);
		fourthMenuRightLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "menu"){
					//console.log("name is "+menuList[parseInt(this.getAttribute("newAttr"))].name);
					positionV = findPosition(menuList[parseInt(this.getAttribute("newAttr"))].name);
					//console.log("in mouse positionV is "+positionV);
					$("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*positionV + "px";
					doEnter();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	for(var i = 1; i < presetSpans.length; i++)
	{
		//console.log("I will bind click presetSpans["+(i+1)+"]");
		presetSpans[i].setAttribute("newAttr",i-1);
		presetSpans[i].onmousedown = function(evt){
			//console.log("I click focusOn=="+focusOn);
			if(evt.button == 0){//left key
			    presetPositionH = parseInt(this.getAttribute("newAttr"));
				//console.log("focusOn=="+focusOn+"====presetPositionH=="+presetPositionH+"presetSpans is ");
				doEnter();
			}
		}
	}
	$("adjustProgBar").onmousedown = function(evt){
		//console.log("in onmousedown list adjustProgBar = " + focusOn + ",evt.clientX = " + evt.clientX);
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 0){//left key
			if(focusOn == "ADVolumeValue")
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
				volume = prog;
				
				progressDivList[0].style.width = parseInt(volume*EXTRA_PROGRESS_WIDTH/100,10) + "px";
				progressDivList[2].style.width = parseInt((100 - volume)*EXTRA_PROGRESS_WIDTH/100,10) + "px";
				
				setting.mixingLevel = volume;
				$("adjustProgValue").innerHTML = volume;
			}
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
}

function initVarValue()
{
    speakerValue = setting.speakerType;
    //speakerVolumeValue = setting.speakerVolume;
    headphoneValue = setting.headphoneType;
	btdeviceValue = 0;//fixme
    //headphoneVolumeValue = setting.headphoneVolume;
    ADVolumeValue = setting.mixingLevel;
}

function initSpeakerMenu()
{
    $("speakerStatus").innerHTML = audDesOptions[speakerValue];
}

function initHeadphoneMenu()
{
    $("HeadphoneStatus").innerHTML = audDesOptions[headphoneValue];
}

function initBTDeviceMenu()
{
    $("BTDeviceStatus").innerHTML = audDesOptions[btdeviceValue];
}


function showPersetSelect(optionMax)//用来显示或者隐藏preset选项
{
    presetSpans=$("preSetBar").getElementsByTagName("span");
    for(var i=0;i<optionMax;i++)
    {
        presetSpans[i+1].style.display="block";
    }
    for(var i=optionMax;i<presetSpans.length-1;i++)
    {
        presetSpans[i+1].style.display="none";
    }
    $("preSetBar").style.left=parseInt((1920-310-optionMax*230)/2)+"px";
    $("preSetBar").style.width=310+optionMax*230+"px";
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
function findRealPosition(postion)
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
            return i;
        }
    }
}
function findName(postion)
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
            return menuList[i].name;
        }
    }
}
function findLastName()
{
    for(var i=menuList.length-1;i>=0;i--)
    {
        if(menuList[i].showFlag==1)
        {
            return menuList[i].name;
        }
    }
}
function findFirstName()
{
    for(var i=0;i<menuList.length;i++)
    {
        if(menuList[i].showFlag==1)
        {
            return menuList[i].name;
        }
    }
}

function doOffsetMenuList(postion)
{
    try
    {
        $("fourthListFocus").style.top=SUB_MENU_START+postion*SUB_MENU_STEP+"px";
    }catch(er)
    {
        top.g_channel.testLog("doOffsetMenuList:"+er);
    }
}

function updateMenu(name)
{
    //initVarValue();
    initSpeakerMenu();
    initHeadphoneMenu();
    initBTDeviceMenu();
    showMenuList();
    positionV=findPosition(name);
    doOffsetMenuList(positionV);
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
    var currentName = findName(positionV);
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

    if("menu" == focusOn && 3 == parent.currentShowMenu)
    {
        switch(currentName)
        {
            case audioDescriptionName[0]:
                ttsName = audioDescriptionName[1] + ",";
                currentStatus = audDesOptions[speakerValue];
                break;
            case audioDescriptionName[1]:
                ttsName = audioDescriptionName[2] + ",";
                currentStatus = audDesOptions[headphoneValue];
                break;
            case audioDescriptionName[2]:
                ttsName = audioDescriptionName[3] + ",";
                currentStatus = audDesOptions[btdeviceValue];
                break;
            case audioDescriptionName[3]:
                ttsName = audioDescriptionName[4] + ",";
                currentStatus = ADVolumeValue;
                break;
            default:
                ttsName = "";
                currentStatus = "";
                break;
        }
    }
    else if("speaker" == focusOn)  //soundPreset选项菜单
    {
        ttsName = "";
        currentStatus = audDesOptions[presetPositionH];
        isSelected(audDesOptions[headphoneValue] == currentStatus);
    }
    else if("headphone" == focusOn)
    {
        ttsName = "";
        currentStatus = audDesOptions[presetPositionH];
        isSelected(audDesOptions[headphoneValue] == currentStatus);
    }
    else if("btdevice" == focusOn)
    {
        ttsName = "";
        currentStatus = audDesOptions[presetPositionH];
        isSelected(audDesOptions[btdeviceValue] == currentStatus);
    }
    else if($("adjustProgressBox").style.display == "block")
    {
        switch(focusOn)
        {
            case "ADVolumeValue":
                ttsName = audioDescriptionName[4];
                currentStatus = ADVolumeValue;
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