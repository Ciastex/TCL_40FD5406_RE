var userPicEcoName        = [top.picOptions[13],top.picEcoOptions[0],top.picEcoOptions[1],top.picEcoOptions[2],top.picEcoOptions[3]];
var energySavSel          = top.level;
var lightSenSel           = top.offOn;
var energySavValue        = 0;
var lightSenValue         = 0;
var localDimValue         = 0;
var mixDimValue         = 0;
var lis;
var positionV             = 0;//主界面坐标
var presetPositionH       = 0;//preset 界面焦点坐标
var presetFocusWidth      = 200;
var MENU_START 			  = 160;//菜单焦点移动起始位置
var MENU_STEP 			  = 70;//主菜单焦点移动的step
var setting = top.g_setting;
var focusType="ecoMenuList";
var listFirstSpans;
var menuList  = [
{name:userPicEcoName[1],func:function(){showEnergySavMenu();},showFlag:1},
{name:userPicEcoName[2],func:function(){showLightSenMenu();},showFlag:1},
{name:userPicEcoName[3],func:function(){showLocalDimMenu();},showFlag:1},
{name:userPicEcoName[4],func:function(){showMixDimMenu();},showFlag:1},
]
document.onsystemevent = notifyProcess;
function notifyProcess(evt)
{
    var msg = evt.which;
	//全局消息
	switch(msg)
	{
		default:
			top.systemEventProc(evt);
			break;
	}
}
function keyDownProcess(evt)/*接收按键*/
{
	var ret = true;
	var keycode = evt.which;
	switch (keycode)
	{
		case top.VK_UP:
		{
			//up
			toUp();
			ttsRead();
			ret = false;
			break;
		}
			
		case top.VK_DOWN:
		{
			//down
			toDown();
			ttsRead();
			ret = false;
			break;
		}
		case top.VK_RIGHT:
		{
			toRight();
			ttsRead();
			break;
		}
		case top.VK_ENTER:
		{
			//OK 键
			toOK();
			ttsRead();
			ret = false;
			break;
		}
		case top.VK_BACK: //back
		{
			toBack();
			ttsRead();
			break;
		}
		case top.VK_LEFT:
		{
			toLeft();
			ttsRead();
			ret = false;
			break;
		}
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
function initValue()
{
	energySavValue=setting.energySaving;
	lightSenValue=setting.lightSensor;
	localDimValue = setting.localDimming;
        mixDimValue = setting.mixDimming;
}
function init()
{
    top.initTextDirection(window);
	timeoutInit();
	initValue();
	lis=$("thdMenuRight").getElementsByTagName("li");
	var spans=$("thdMenuRight").getElementsByTagName("span");
	listFirstSpans = $("thdMenuRight").getElementsByClassName("listFirstProperty");
	for(var i=0;i<=menuList.length;i++)
	{
		spans[i].innerHTML=userPicEcoName[i];
	}
	showEnergyMenu();
	showLightMenu();
	showLocalMenu();
	showMixMenu();
	checkShowMenu();
	showMenuList();
	addMouseListener();
	top.doEleScrForNoOption(listFirstSpans, findRealPosition(positionV), 0)
	ttsRead();
}
function showEnergyMenu()
{
	var divs=lis[1].getElementsByTagName("div");
	divs[0].innerHTML=energySavSel[energySavValue];
}
function showLightMenu()
{
	var divs=lis[2].getElementsByTagName("div");
	divs[0].innerHTML=lightSenSel[lightSenValue];
}
function showLocalMenu()
{
	var divs=lis[3].getElementsByTagName("div");
	divs[0].innerHTML=lightSenSel[localDimValue];
}
function showMixMenu()
{
    var divs=lis[4].getElementsByTagName("div");
    divs[0].innerHTML=lightSenSel[mixDimValue];
}
function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyDownProcess;
}
function toRight()
{
    if(focusType=="energySavMenu")
	{
		presetPositionH++;
		if(presetPositionH>2)
		{
			presetPositionH=0;
		}
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		setting.previewEnergySaving(presetPositionH)
	}
	else if(focusType=="lightSenMenu")
	{
		presetPositionH++;
		if(presetPositionH>1)
		{
			presetPositionH=0;
		}
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		setting.previewLightSensor(presetPositionH);
	}
	else if(focusType=="localDimMenu")
	{
		presetPositionH++;
		if(presetPositionH>1)
		{
			presetPositionH=0;
		}
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		setting.previewLocalDimming(presetPositionH);
	}
    else if(focusType=="mixDimMenu")
    {
        presetPositionH++;
        if(presetPositionH>1)
        {
            presetPositionH=0;
        }
        $("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		setting.previewMixDimming(presetPositionH);
    }
	else
	{
		toOK();
	}
}
function toLeft()
{
    if(focusType=="energySavMenu")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH=2;
		}
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		setting.previewEnergySaving(presetPositionH)
	}
	else if(focusType=="lightSenMenu")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH=1;
		}
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		setting.previewLightSensor(presetPositionH);
	}
	else if(focusType=="localDimMenu")
	{
		presetPositionH--;
		if(presetPositionH<0)
		{
			presetPositionH=1;
		}
		$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		setting.previewLocalDimming(presetPositionH);
	}
    else if(focusType=="mixDimMenu")
    {
        presetPositionH--;
        if(presetPositionH<0)
        {
            presetPositionH=1;
        }
        $("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
		setting.previewMixDimming(presetPositionH);
    }
	else
	{
		toBack();
	}
}
function toBack()
{
	if(focusType=="ecoMenuList")
	{
		parent.returnPage(2);
		parent.$("subMenu1").contentWindow.changeEnergySaving(energySavValue);
	}
	else if(focusType=="energySavMenu")
	{
		setting.previewEnergySaving(energySavValue)
		showEnergyMenu();
		$("preSetBar").style.display="none";
		parent.showPage(2);
		focusType="ecoMenuList";
	}
	else if(focusType=="lightSenMenu")
	{
		setting.previewLightSensor(lightSenValue);
		showLightMenu();
		$("preSetBar").style.display="none";
		parent.showPage(2);
		focusType="ecoMenuList";
	}
	else if(focusType=="localDimMenu")
	{
		setting.previewLocalDimming(localDimValue);
		showLocalMenu();
		$("preSetBar").style.display="none";
		parent.showPage(2);
		focusType="ecoMenuList";
	}
    else if(focusType=="mixDimMenu")
    {
		setting.previewMixDimming(mixDimValue);
        showLocalMenu();
        $("preSetBar").style.display="none";
        parent.showPage(2);
        focusType="ecoMenuList";
    }
}
function toOK()
{
	if(focusType=="ecoMenuList")
	{
		findFunction(positionV);
	}
	else if(focusType=="energySavMenu")
	{
		energySavValue=presetPositionH;
		setting.energySaving=energySavValue;
		showEnergyMenu();
		$("preSetBar").style.display="none";
		parent.showPage(2);
		focusType="ecoMenuList";
	}
	else if(focusType=="lightSenMenu")
	{
		lightSenValue=presetPositionH;
		setting.lightSensor=lightSenValue;
		showLightMenu();
		$("preSetBar").style.display="none";
		parent.showPage(2);
		focusType="ecoMenuList";
	}
	else if(focusType=="localDimMenu")
	{
		localDimValue = presetPositionH;
		setting.localDimming = localDimValue;
		showLocalMenu();
		$("preSetBar").style.display="none";
		parent.showPage(2);
		focusType="ecoMenuList";
	}
    else if(focusType=="mixDimMenu")
    {
        mixDimValue = presetPositionH;
        setting.mixDimming = mixDimValue;
        showMixMenu();
        $("preSetBar").style.display="none";
        parent.showPage(2);
        focusType="ecoMenuList";
    }
}
function toUp()
{
	if(focusType=="ecoMenuList")
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
		top.doEleScrForNoOption(listFirstSpans, findRealPosition(positionV), -1)
	}
}
function toDown()
{
	if(focusType=="ecoMenuList")
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
		top.doEleScrForNoOption(listFirstSpans, findRealPosition(positionV), 1)
	}
}
function showEnergySavMenu()//显示energy选择列表
{
	showPersetSelect(3);
	$("preSetOption").innerHTML=userPicEcoName[1];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<3;i++)
	{
		spans[i+1].innerHTML=energySavSel[i];
	}
	presetPositionH=energySavValue;
	$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(2)
	$("preSetBar").style.display="block"
	focusType="energySavMenu";
}
function showLightSenMenu()//显示Light选择列表
{
	showPersetSelect(2);
	$("preSetOption").innerHTML=userPicEcoName[2];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<2;i++)
	{
		spans[i+1].innerHTML=lightSenSel[i];
	}
	presetPositionH=lightSenValue;
	$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(2)
	$("preSetBar").style.display="block"
	focusType="lightSenMenu";
}
function showLocalDimMenu()
{
	showPersetSelect(2);
	$("preSetOption").innerHTML=userPicEcoName[3];
	var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
	for(var i=0;i<2;i++)
	{
		spans[i+1].innerHTML=lightSenSel[i];
	}
	presetPositionH=localDimValue;
	$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
	$("currentOption").style.display = "block";
	parent.hiddenPage(2)
	$("preSetBar").style.display="block"
	focusType="localDimMenu";
}

function showMixDimMenu()
{
    showPersetSelect(2);
    $("preSetOption").innerHTML=userPicEcoName[4];
    var spans=$("preSetBar").getElementsByTagName("span");//picPreset[pictureMode];
    for(var i=0;i<2;i++)
    {
        spans[i+1].innerHTML=lightSenSel[i];
    }
    presetPositionH=mixDimValue;
    $("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
    $("currentOption").style.left = 320+presetPositionH*presetFocusWidth+"px";
    $("currentOption").style.display = "block";
    parent.hiddenPage(2)
    $("preSetBar").style.display="block"
    focusType="mixDimMenu";
}

function showPersetSelect(optionMax)//用来显示或者隐藏preset选项
{
	var spans=$("preSetBar").getElementsByTagName("span");
	for(var i=0;i<optionMax;i++)
	{
		spans[i+1].style.display="block";
	}
	for(var i=optionMax;i<spans.length-1;i++)
	{
		spans[i+1].style.display="none";
	}
	if(parseInt(1920-310-optionMax*230)/2>0)
	{
		$("preSetBar").style.left = parseInt(1920-310-optionMax*230)/2+"px"
	}
	else
	{
		$("preSetBar").style.left = 0+"px"
	}
	$("preSetBar").style.width=310+optionMax*230+"px";
	presetFocusWidth=230;
}
function checkShowMenu()
{
	try
	{
        var lightSenorEnable = setting.getProperty("ro.sita.model.LIGHT_SENSOR.bLightSensorSupport","0");
        var localDimmingEnable = setting.getProperty("ro.sita.model.FUNCTION_ENABLE_CFG.cfg_LocalDimming_enable", "0");
        var mixDimmingEnable = setting.getProperty("ro.sita.model.MIX_ADJUST_BACKLIGHT_CFG.MIX_ADJUST_BACKLIGHT_ENABLE", "0");
        if(lightSenorEnable == 1)
		{
			menuList[1].showFlag = 1;
		}
		else
		{
			menuList[1].showFlag = 0;
		}

		if(localDimmingEnable == 1)
		{
			menuList[2].showFlag = 1;
		}
		else
		{
			menuList[2].showFlag = 0;
		}

        if(mixDimmingEnable == 1)
        {
            menuList[3].showFlag = 1;
        }
        else
        {
            menuList[3].showFlag = 0;
        }
	}catch(er)
	{
		top.g_channel.testLog(er);
	}
}
function showMenuList()
{
	try
	{
		for(var i=0;i<menuList.length;i++)
		{
			if(menuList[i].showFlag==1)
			{
				lis[i+1].style.display="block";
			}
			else
			{
				lis[i+1].style.display="none";
			}
		}
	}catch(er)
	{
		top.g_channel.testLog(er);
	}
}
function doOffsetMenuList(postion)
{
	try
	{
	$("thdListFocus").style.top=MENU_START+postion*MENU_STEP+"px";
	}catch(er)
	{
		top.g_channel.testLog("doOffsetMenuList:"+er);
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
function uninit()
{
	if(focusType=="energySavMenu")
	{
		setting.previewEnergySaving(energySavValue)
	}
	else if(focusType=="lightSenMenu")
	{
		setting.previewLightSensor(lightSenValue);
	}
	else if(focusType=="localDimMenu")
	{
		setting.previewLocalDimming(localDimValue);
	}
	else if(focusType=="mixDimMenu")
	{
		setting.previewMixDimming(mixDimValue);
	}
}
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		if(evt.button == 2)
		{
		 toBack();//right key
		}
	}
	for(var i = 0; i < 2; i++)
	{
		lis[i+1].setAttribute("newAttr",i);
		lis[i+1].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusType=="ecoMenuList")
				{
					positionV = parseInt(this.getAttribute("newAttr"),10);
					$("thdListFocus").style.top=MENU_START+positionV*MENU_STEP+"px";
					toOK();
				}
			}
				top.timeoutFuc.osdTimeoutStartFuc();
		}
	}
	var spans=$("preSetBar").getElementsByTagName("span");
	for(var i = 0; i < 3; i++)
	{
		spans[i+1].setAttribute("newAttr",i);
		spans[i+1].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusType=="energySavMenu" )
				{
					presetPositionH = parseInt(this.getAttribute("newAttr"),10);
					$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
					setting.lightSensor = presetPositionH;
					toOK();
				}
				else if(focusType=="lightSenMenu")
				{
					presetPositionH = parseInt(this.getAttribute("newAttr"),10);
					$("preSetSelectFocus").style.left=305+presetPositionH*presetFocusWidth+"px";
					setting.energySaving = presetPositionH;
					toOK();
				}
			}
			top.timeoutFuc.osdTimeoutStartFuc();
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

	top.ttsLog("parent.currentShowMenu=" + parent.currentShowMenu);
	if(focusType == "ecoMenuList" && 2 == parent.currentShowMenu)
	{
		switch(currentName)
		{
			case userPicEcoName[1]:
				ttsName = userPicEcoName[1] + ",";
				currentStatus = energySavSel[energySavValue];
				break;
			case userPicEcoName[2]:
				ttsName = userPicEcoName[2] + ",";
				currentStatus = lightSenSel[lightSenValue];
				break;
			case userPicEcoName[3]:
				ttsName = userPicEcoName[3] + ",";
				currentStatus = lightSenSel[localDimValue];
				break;
			case userPicEcoName[4]:
				ttsName = userPicEcoName[4] + ",";
				currentStatus = lightSenSel[mixDimValue];
				break;
			default:
				ttsName = "";
				currentStatus = "";
				break;
		}
	}
	else if(focusType == "energySavMenu")
	{
		ttsName = "";
		currentStatus = energySavSel[presetPositionH];
		isSelected(energySavSel[energySavValue] == currentStatus);
	}
	else if(focusType == "lightSenMenu")
	{
		ttsName = "";
		currentStatus = lightSenSel[presetPositionH];
		isSelected(lightSenSel[lightSenValue] == currentStatus);
	}
	else if(focusType == "localDimMenu")
	{
		ttsName = "";
		currentStatus = lightSenSel[presetPositionH];
		isSelected(lightSenSel[localDimValue] == currentStatus);
	}
	else if(focusType == "mixDimMenu")
	{
		ttsName = "";
		currentStatus = lightSenSel[presetPositionH];
		isSelected(lightSenSel[mixDimValue] == currentStatus);
	}
	ttsStr = ttsName + currentStatus;
	if("" != ttsStr)
	{
		top.ttsLog("ttsStr=" + ttsStr);
		top.ttsLog("focusType=" + focusType);
		top.ttsLog("presetPositionH=" + presetPositionH);
		top.setTTSSay(top.SPEECH_TYPE_FLUSH, ttsStr);
	}
}