/******************** created by chenhua ***********************/
var inputSettingTitleWords 		= [top.sourceOptions[0],top.sourceOptions[1],top.sourceOptions[2],top.sourceOptions[3],top.sourceOptions[4],
									top.sourceOptions[5],top.sourceOptions[6],top.sourceOptions[7]];
var inputSettingEnumWords		= top.sysInputSet;

var avName						= 0;
var cmpName						= 0;
var hdmi4Name						= 0;
var hdmi1Name					= 0;
var hdmi2Name					= 0;
var hdmi3Name					= 0;
var vgaName					= 0;
var offset						= 0;					//offset = ratingPosition - form_position_h;
var channel			 			= top.g_channel;
var setting                     = top.g_setting;
var focusOn 					= "menu"; 				//menu,avName,cmpName,hdmi4Name,hdmi1Name,hdmi2Name,hdmi3Name
var list_position_h				= 0;
var form_position_h				= 0;

var SUB_MENU_START 				= 160;					//三级级菜单焦点移动起始位置
var SUB_MENU_STEP 				= 70;					//三级级主菜单焦点移动的step
var FORM_STEP					= 80;					//弹出框焦点移动的step
var PROGRESS_WIDTH				= 400;					//进度条的总宽度
var mainFocus                   = ["../images/Focus_Frame/Focus-1.png","../images/Focus_Frame/Focus-2.png"];

var inputSourceCount = 0;
var inputList =[
{name:top.sourceOptions[0],source:"TV",sourceInput:0,icon:"images/Icon-Sourse_TV.png",showFlag:0},
{name:top.sourceOptions[1],source:"AV",sourceInput:0,icon:"images/Icon-Sourse_scart.png",showFlag:0},
{name:top.sourceOptions[2],source:"CMP",sourceInput:0,icon:"images/Icon-Sourse_CMP.png",showFlag:0},
{name:top.sourceOptions[3],source:"HDMI1",sourceInput:0,icon:"images/Icon-Sourse_HDMI.png",showFlag:0},
{name:top.sourceOptions[4],source:"HDMI2",sourceInput:0,icon:"images/Icon-Sourse_HDMI.png",howFlag:0},
{name:top.sourceOptions[5],source:"HDMI3",sourceInput:0,icon:"images/Icon-Sourse_HDMI.png",showFlag:0},
{name:top.sourceOptions[6],source:"HDMI4",sourceInput:0,icon:"images/Icon-Sourse_HDMI.png",showFlag:0},
{name:top.sourceOptions[7],source:"VGA",sourceInput:0,icon:"images/Icon-Sourse_VGA.png",showFlag:0},
];

var inputListEx = [
{name:"",source:0},
{name:"",source:0},
{name:"",source:0},
{name:"",source:0},
{name:"",source:0},
{name:"",source:0},
{name:"",source:0},
{name:"",source:0},
];

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
		case top.VK_0:
		case top.VK_1:
		case top.VK_2:
		case top.VK_3:
		case top.VK_4:
		case top.VK_5:
		case top.VK_6:
		case top.VK_7:
		case top.VK_8:
		case top.VK_9:
			if(focusOn == "changePassword")
			{
				doCheck(evt.which - 48);
				ret = false;
			}
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
		if(list_position_h >= (inputSourceCount-1))
		{
			list_position_h = 0;
		}
		else
		{
			list_position_h++;
		}
		$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	}
	else
	{
		toDownInListForm(inputSettingEnumWords.length,inputSettingEnumWords);
	}
}

function toUp()
{
	if(focusOn == "menu")
	{
		if(list_position_h <= 0)
		{
			list_position_h = inputSourceCount-1;
		}
		else
		{
			list_position_h--;
		}
		$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	}
	else
	{
		toUpInListForm(inputSettingEnumWords.length,inputSettingEnumWords);
	}
}

function doEnter()
{
	if(focusOn == "menu")
	{
		$("thdListFocus").src=mainFocus[1];
        initMoreThanFiveLists(inputListEx[list_position_h].name,inputSettingEnumWords);
        focusOn = inputListEx[list_position_h].focus;
        /*
		switch(list_position_h)
		{
			case 0:
				initMoreThanFiveLists(avName,inputSettingEnumWords);
				focusOn = "avName";
				break;
			case 1:
				initMoreThanFiveLists(cmpName,inputSettingEnumWords);
				focusOn = "cmpName";
				break;
			case 2:
				initMoreThanFiveLists(hdmi1Name,inputSettingEnumWords);
				focusOn = "hdmi1Name";
				break;
			case 3:
				initMoreThanFiveLists(hdmi2Name,inputSettingEnumWords);
				focusOn = "hdmi2Name";
				break;
			case 4:
				initMoreThanFiveLists(hdmi3Name,inputSettingEnumWords);
				focusOn = "hdmi3Name";
				break;
			case 5:
				initMoreThanFiveLists(hdmi4Name,inputSettingEnumWords);
				focusOn = "hdmi4Name";
				break;
            case 6:
				initMoreThanFiveLists(vgaName,inputSettingEnumWords);
				focusOn = "vgaName";
				break;
			default:	
				break;
		}
        */
	}
	else if(focusOn == "avName")
	{
		$("thdListFocus").src=mainFocus[0];
		avName = form_position_h + offset;
		if (top.supportSCARTSource == 1)
		{
			channel.setInputSourceDeviceName(top.E_INPUT_SCART,avName);
		}
		else if(top.supportAV1Source == 1)
		{
			channel.setInputSourceDeviceName(top.E_INPUT_AV_I,avName);//av-i
		}
		else if(top.supportAV2Source == 1)
		{
			channel.setInputSourceDeviceName(top.E_INPUT_AV_II,avName);//av-ii
		}
		else
		{
			channel.setInputSourceDeviceName(top.E_INPUT_SCART,avName);
		}
		thdMenuRightDivList[list_position_h].innerHTML = inputSettingEnumWords[avName];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn == "cmpName")
	{
		$("thdListFocus").src=mainFocus[0];
		cmpName = form_position_h + offset;
		channel.setInputSourceDeviceName(4/*ypbpr*/,cmpName);
		thdMenuRightDivList[list_position_h].innerHTML = inputSettingEnumWords[cmpName];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn == "hdmi4Name")
	{
		$("thdListFocus").src=mainFocus[0];
		hdmi4Name = form_position_h + offset;
		channel.setInputSourceDeviceName(12/*hdmi4*/,hdmi4Name);
		thdMenuRightDivList[list_position_h].innerHTML = inputSettingEnumWords[hdmi4Name];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn == "hdmi1Name")
	{
		$("thdListFocus").src=mainFocus[0];
		hdmi1Name = form_position_h + offset;
		channel.setInputSourceDeviceName(6/*hdmi1*/,hdmi1Name);
		thdMenuRightDivList[list_position_h].innerHTML = inputSettingEnumWords[hdmi1Name];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn == "hdmi2Name")
	{
		$("thdListFocus").src=mainFocus[0];
		hdmi2Name = form_position_h + offset;
		channel.setInputSourceDeviceName(7/*hdmi2*/,hdmi2Name);
		thdMenuRightDivList[list_position_h].innerHTML = inputSettingEnumWords[hdmi2Name];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
	else if(focusOn == "hdmi3Name")
	{
		$("thdListFocus").src=mainFocus[0];
		hdmi3Name = form_position_h + offset;
		channel.setInputSourceDeviceName(8/*hdmi3*/,hdmi3Name);
		thdMenuRightDivList[list_position_h].innerHTML = inputSettingEnumWords[hdmi3Name];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
    else if(focusOn == "vgaName")
	{
		$("thdListFocus").src=mainFocus[0];
		vgaName = form_position_h + offset;
		channel.setInputSourceDeviceName(5/*vga*/,vgaName);
		thdMenuRightDivList[list_position_h].innerHTML = inputSettingEnumWords[vgaName];
		$("listForm").style.display = "none";
		focusOn = "menu";
	}
}
function toBack()
{
	if(focusOn == "menu")
	{
		parent.returnPage(2);
	}
	else
	{
		$("thdListFocus").src=mainFocus[0];
		$("listForm").style.display = "none";
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
描述：初始化多于5个选项的列表
参数：value：enum,wordsList:枚举对应的文字显示数组
全局变量：form_position_h;offset;list_position_h;
*/
function initMoreThanFiveLists(value,wordsList)
{
	if(value >= 5)
	{
		form_position_h = 4;
		offset = value - form_position_h;
	}
	else
	{
		offset = 0;
		form_position_h = value;
	}
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,wordsList,14,form_position_h,offset);
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
描述：在列表出来的时候按Up键刷新焦点的效果
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

var thdMenuRightSpanList;
var thdMenuRightDivList;
var thdMenuRightLiList;
var listFormLiList;
function init()
{
    top.initTextDirection(window);
	timeoutInit();
	thdMenuRightLiList = $("thdMenuRight").getElementsByClassName("list");
	thdMenuRightSpanList = $("thdMenuRight").getElementsByClassName("listFirstProperty");
    $("titleNameSpan").innerHTML = top.sysOptions[4];
    /*
    if (setting.getProperty("ro.sita.model.LiveTV.TV","FALSE") == "TRUE")
    {
        inputList[0].showFlag = 1;
        inputSourceCount++;
    }
    */
    if (top.supportSCARTSource == 1)
    {
        inputList[1].showFlag = 1;
        inputList[1].sourceInput = top.E_INPUT_SCART;
        inputSourceCount++;
    }
    else if(top.supportAV1Source == 1)
    {
        inputList[1].showFlag = 1;
        inputList[1].sourceInput = top.E_INPUT_AV_I;
        inputSourceCount++;
    }
    else if(top.supportAV2Source == 1)
    {
        inputList[1].showFlag = 1;
        inputList[1].sourceInput = top.E_INPUT_AV_II;
        inputSourceCount++;
    }
    if (top.supportYPBPRSource == 1)
    {
        inputList[2].showFlag = 1;
        inputList[2].sourceInput = top.E_INPUT_YPBPR;
        inputSourceCount++;
    }
    if (top.supportHDMI1Source == 1)
    {
        inputList[3].showFlag = 1;
        inputList[3].sourceInput = top.E_INPUT_HDMI_I;
        inputSourceCount++;
    }
    if (top.supportHDMI2Source == 1)
    {
        inputList[4].showFlag = 1;
        inputList[4].sourceInput = top.E_INPUT_HDMI_II;
        inputSourceCount++;
    }
    if (top.supportHDMI3Source == 1)
    {
        inputList[5].showFlag = 1;
        inputList[5].sourceInput = top.E_INPUT_HDMI_III;
        inputSourceCount++;
    }
    if (top.supportHDMI4Source == 1)
    {
        inputList[6].showFlag = 1;
        inputList[6].sourceInput = top.E_INPUT_HDMI_IV;
        inputSourceCount++;
    }
    if (top.supportVGASource == 1)
    {
        inputList[7].showFlag = 1;
        inputList[7].sourceInput = top.E_INPUT_PC;
        inputSourceCount++;
    }
    var x1 = 0;
	for(var i = 0; i < inputList.length; i++)
	{
        if(inputList[i].showFlag)
        {
            thdMenuRightSpanList[x1].innerHTML = inputSettingTitleWords[i];
            thdMenuRightLiList[x1].getElementsByTagName("img")[0].style.display = "block";
            x1++;
        }
	}
	
	
	
	avName = channel.inputSourceDeviceName(inputList[1].sourceInput/*av*/);
	cmpName = channel.inputSourceDeviceName(inputList[2].sourceInput/*ypbpr*/);
	hdmi1Name = channel.inputSourceDeviceName(inputList[3].sourceInput/*hdmi1*/);
	hdmi2Name = channel.inputSourceDeviceName(inputList[4].sourceInput/*hdmi2*/);
	hdmi3Name = channel.inputSourceDeviceName(inputList[5].sourceInput/*hdmi3*/);
	hdmi4Name = channel.inputSourceDeviceName(inputList[6].sourceInput/*hdmi4*/);
    vgaName = channel.inputSourceDeviceName(inputList[7].sourceInput/*pc*/);
	channel.testLog("after inputSourceDeviceName " + avName + " " + cmpName + " " + hdmi1Name + " " + hdmi2Name + " " + hdmi3Name + " " + hdmi4Name);
	
	thdMenuRightDivList = $("thdMenuRight").getElementsByClassName("listSecondProperty");

    var j = 0;
    if (inputList[1].showFlag)
    {
        thdMenuRightDivList[j].innerHTML = inputSettingEnumWords[avName];
        inputListEx[j].name = avName;
        inputListEx[j].focus = "avName";
        j++;
    }
    if (inputList[2].showFlag)
    {
        thdMenuRightDivList[j].innerHTML = inputSettingEnumWords[cmpName];
        inputListEx[j].name = cmpName;
        inputListEx[j].focus = "cmpName";
        j++;
    }
    if (inputList[3].showFlag)
    {
        thdMenuRightDivList[j].innerHTML = inputSettingEnumWords[hdmi1Name];
        inputListEx[j].name = hdmi1Name;
        inputListEx[j].focus = "hdmi1Name";
        j++;
    }
    if (inputList[4].showFlag)
    {
        thdMenuRightDivList[j].innerHTML = inputSettingEnumWords[hdmi2Name];
        inputListEx[j].name = hdmi2Name;
        inputListEx[j].focus = "hdmi2Name";
        j++;
    }
    if (inputList[5].showFlag)
    {
        thdMenuRightDivList[j].innerHTML = inputSettingEnumWords[hdmi3Name];
        inputListEx[j].name = hdmi3Name;
        inputListEx[j].focus = "hdmi3Name";
        j++;
    }
    if (inputList[6].showFlag)
    {
        thdMenuRightDivList[j].innerHTML = inputSettingEnumWords[hdmi4Name];
        inputListEx[j].name = hdmi4Name;
        inputListEx[j].focus = "hdmi4Name";
        j++;
    }
    if (inputList[7].showFlag)
    {
        thdMenuRightDivList[j].innerHTML = inputSettingEnumWords[vgaName];
        inputListEx[j].name = vgaName;
        inputListEx[j].focus = "vgaName";
        j++;
    }
	
	list_position_h = 0;
	$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	
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
	
	//menu
	for(var i = 0; i < thdMenuRightLiList.length; i++)
	{
		thdMenuRightLiList[i].setAttribute("newAttr",i);
		thdMenuRightLiList[i].onmousedown = function(evt){
			top.timeoutFuc.osdTimeoutEndFuc();
			if(evt.button == 0){//left key
				if(focusOn == "menu")
				{
					list_position_h = parseInt(this.getAttribute("newAttr"));
					$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
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

	if(("menu" == focusOn) && (2 == parent.currentShowMenu))
	{
		switch(currentName)
		{
			case top.sourceOptions[0]:/*TV没有*/
				top.ttsLog("avName=" + avName);
				ttsName = top.sourceOptions[0] + ",";
				currentStatus = "";
				break;
			case top.sourceOptions[1]:
				top.ttsLog("avName=" + avName);
				ttsName = inputSettingTitleWords[1] + ",";
				currentStatus = inputSettingEnumWords[avName];
				break;
			case top.sourceOptions[2]:
				top.ttsLog("avName=" + cmpName);
				ttsName = inputSettingTitleWords[2] + ",";
				currentStatus = inputSettingEnumWords[cmpName];
				break;
			case top.sourceOptions[3]:
				top.ttsLog("avName=" + hdmi1Name);
				ttsName = inputSettingTitleWords[3] + ",";
				currentStatus = inputSettingEnumWords[hdmi1Name];
				break;
			case top.sourceOptions[4]:
				top.ttsLog("avName=" + hdmi2Name);
				ttsName = inputSettingTitleWords[4] + ",";
				currentStatus = inputSettingEnumWords[hdmi2Name];
				break;
			case top.sourceOptions[5]:
				top.ttsLog("avName=" + hdmi3Name);
				ttsName = inputSettingTitleWords[5] + ",";
				currentStatus = inputSettingEnumWords[hdmi3Name];
				break;
			case top.sourceOptions[6]:
				top.ttsLog("avName=" + hdmi4Name);
				ttsName = inputSettingTitleWords[6] + ",";
				currentStatus = inputSettingEnumWords[hdmi4Name];
				break;
			case top.sourceOptions[7]:
				top.ttsLog("avName=" + vgaName);
				ttsName = inputSettingTitleWords[7] + ",";
				currentStatus = inputSettingEnumWords[vgaName];
				break;
			default:
				ttsName = "";
				currentStatus = "";
				break;
		}
	}
	else if("avName" == focusOn)
	{
		top.ttsLog("avName=" + avName + "   form_position_h + offset=" + (form_position_h + offset));
		ttsName = "";
		currentStatus = inputSettingEnumWords[form_position_h + offset];
		isSelected(inputSettingEnumWords[avName] == currentStatus);
	}
	else if("cmpName" == focusOn)
	{
		top.ttsLog("cmpName=" + cmpName + "   form_position_h + offset=" + (form_position_h + offset));
		ttsName = "";
		currentStatus = inputSettingEnumWords[form_position_h + offset];
		isSelected(inputSettingEnumWords[cmpName] == currentStatus);
	}
	else if("hdmi1Name" == focusOn)
	{
		top.ttsLog("cmpName=" + cmpName + "   form_position_h + offset=" + (form_position_h + offset));
		ttsName = "";
		currentStatus = inputSettingEnumWords[form_position_h + offset];
		isSelected(inputSettingEnumWords[cmpName] == currentStatus);
	}
	else if("hdmi2Name" == focusOn)
	{
		top.ttsLog("hdmi2Name=" + hdmi2Name + "   form_position_h + offset=" + (form_position_h + offset));
		ttsName = "";
		currentStatus = inputSettingEnumWords[form_position_h + offset];
		isSelected(inputSettingEnumWords[hdmi2Name] == currentStatus);
	}
	else if("hdmi3Name" == focusOn)
	{
		top.ttsLog("hdmi3Name=" + hdmi3Name + "   form_position_h + offset=" + (form_position_h + offset));
		ttsName = "";
		currentStatus = inputSettingEnumWords[form_position_h + offset];
		isSelected(inputSettingEnumWords[hdmi3Name] == currentStatus);
	}
	else if("hdmi4Name" == focusOn)
	{
		top.ttsLog("hdmi4Name=" + hdmi4Name + "   form_position_h + offset=" + (form_position_h + offset));
		ttsName = "";
		currentStatus = inputSettingEnumWords[form_position_h + offset];
		isSelected(inputSettingEnumWords[hdmi4Name] == currentStatus);
	}
	else if("vgaName" == focusOn)
	{
		top.ttsLog("vgaName=" + vgaName + "   form_position_h + offset=" + (form_position_h + offset));
		ttsName = "";
		currentStatus = inputSettingEnumWords[form_position_h + offset];
		isSelected(inputSettingEnumWords[vgaName] == currentStatus);
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
	for(var i = 0; i < inputList.length; i++)
	{
		if(inputList[i].showFlag)
		{
			num++;
		}
		if(num == postion)
		{
			return inputList[i].name;
		}
	}
}