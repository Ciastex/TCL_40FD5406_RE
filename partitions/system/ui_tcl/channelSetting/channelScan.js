/******************** created by chenhua ***********************/
var chScanTitleWords 	= top.chOptions[0];
var chScanOptions 		= top.chScanOptions;
var tunerWords 			= top.tuner;
var countryIndex		=[117,1,118,2,126,3,4,127,5,6,28,7,8,9,
							10,11,119,33,12,128,30,120,13,129,130,90,131,14,15,16,
							17,18,19,20,31,21,22,23,24,32,
							59,25];				//其中>=58的是国家枚举中没有的东西 ,58为Lithuanian
var STTLEnableCtryPstionInCtryIndex=[11/*Finland*/,28/*Norway*/,9/*Denmark*/,37/*Sweden*/,13/*Germany*/];//STTL enable的国家在country_localCountry_index数组中的位置。
var languageIndex 		= [63,5,18,9,107,24,10,8,0,2,36,22,9,5,
							8,13,6,6,12,63,33,279,5,287,6,19,21,14,15,16,
							17,19,18,21,25,20,7,23,5,35,
							468,6];
var passwordWords 		= [top.others[2],top.passError];
var scaningWords		= [top.others[3]];
var chGenreWords		= top.chType;
var scanStatusWords		= top.chScanStatus;
var cleanChWords		= top.chCleanDes;
var yesNoWords 			= top.yesNo;
var countrysWords		= new Array(countryIndex.length);
var offOnWords			= top.offOn;
var lcnStatus			= 0;
for(var i = 0; i < countryIndex.length; i++)
{
	countrysWords[i] = top.all_country[countryIndex[i]];
}
var favNetList;								//在favorite network select中使用
var favNetListSum		= 0;

document.onkeyup 		= keyUpProc;
document.onsystemevent 		= notifyProcess;
var channel 			= top.g_channel;
var setting				= top.g_setting;
var factory             = top.g_factory;


var hotelEnable         = 0;
var tunerLock           = 0;
var list_position_h 	= 0;				//主界面焦点位置
var form_position_h 	= 0;				//弹出页面焦点位置,在atv manual scan中0-2:焦点落在输入选择框系列上，3-4：焦点落在按钮上
var tuner 				= 0;				//0 cable,1 antena
var countryPosition 	= 12;				//country对应在countryIndex中的下标；默认为法国
var countrySum 			= countryIndex.length;
var offset      = 0;
var focusOn 			= "menu";			//menu,password,country,tuner,clean
var freqWords 			= new Array(6);
var sybWords 			= new Array(4);
var MOUSE_CLICK_PARA	= "newAttr";

var SUB_MENU_START 		= 160;				//三四级菜单焦点移动起始位置
var SUB_MENU_STEP 		= 70;				//三四级主菜单焦点移动的step
var FORM_STEP			= 80;				//弹出框焦点移动的step
var DLOG_BUTTON_START	= 200;				//对话框中的按钮焦点开始的位置
var DLOG_BUTTON_STEP	= 250;				//对话框中按钮焦点移动的step

var DISPLAY_COUNT			= 5;			//每一次最多可以显示的行数

var SCAN_FOCUS_START	= 10;				//搜台框输入框焦点起始位置

var channelListState	= 0;

/////////密码框使用
var passStringLength 	= 0;
var passString			= "";
var passFlag            = 0;

/////////搜台时使用
var scanningInfo;
var anologScanCount 	= 0;
var digitalScanCount 	= 0;
var progress 			= 0;
var PROGRESS_WIDTH		= (600 - 10);		//总长为400个像素，但是要去掉表示当前进度的原点：10个像素
var progressFlag 		= 0;				//在analog+digital时使用，这时的进度条分为两段来处理，0 表示前半段，1表示后半段
var mainFocus           = ["../images/Focus_Frame/Focus-1.png","../images/Focus_Frame/Focus-2.png"];

var tunerShowWords = new Array();//要显示的搜台模式，因澳洲(AU)平台搜台方式没有EU那么多，所以在ini文件中配置了要显示的搜台方式
var tunerFlagWords = ["DVB-C","DVB-T","DVB-S"];//此数值跟tuner数据要对应，配置在ini文件中的搜台方式
var tunerFlagWordsLA = ["DVB-C", "ISDB-C"];

var menuList =[
{name:"Country",param:function(){doCountry();},showFlag:1},
{name:"Tuner_mode",param:function(){doTuner_mode();},showFlag:1},
{name:"Automatic_search",param:function(){doAutomatic_search();},showFlag:1},
{name:"Automatic_update",param:function(){doAutomatic_update();},showFlag:1},
{name:"Analogue_manual_scan",param:function(){doAnalogue_manual_scan();},showFlag:1},
{name:"Dvb_manual_installation",param:function(){doDvb_manual_installation();},showFlag:1},
{name:"Satellite_antenna_setup",param:function(){doSatellite_antenna_setup();},showFlag:1},
{name:"Favorite_network_select",param:function(){doFavorite_network_select();},showFlag:1},
{name:"LCN",param:function(){doLCN();},showFlag:1},
{name:"Clean_channel_list",param:function(){doClean_channel_list();},showFlag:1}
];

var isDvbsEnable = 1;

function $(id)
{
	return document.getElementById(id);
}

function testLog(string)
{
	console.log(" =========> Areos test: " + string);
}
function initSetRegion()
{
if (top.uiColourStyleFlag == 1)
	{
		var classlist;
		classlist = document.getElementsByClassName("dialogInputFocus");
		for(var i = 0;i<classlist.length;i++)
		{
			//classlist[i].setAttribute("class","progressImgOtherStyle");
			classlist[i].style.border = "solid" + top.uiColourStyle;
			//classlist[i].className = "progressImgOtherStyle";
		}

		classlist = document.getElementsByClassName("dialogButtonFocus");
		for(var i = 0;i<classlist.length;i++)
		{
			//classlist[i].setAttribute("class","progressImgOtherStyle");
			classlist[i].style.border = "solid medium" + top.uiColourStyle;
			//classlist[i].className = "progressImgOtherStyle";
		}
	}
}

function init()
{
    top.initTextDirection(window);
	initSetRegion();
	initPageFrame();
	tuner = channel.tunerMode;
    lcnStatus = channel.lcnStatus;
    if(top.isGingaOn && top.GingaObj.isInit == top.GingaStates.True)//UI显示需要暂停Ginga,发送暂停信号到中间件
    {
        //top.gingaEvtProc(top.GingaStates.Events.GINGA_EVT_PAUSE_FOR_CONTROL_LOST);
        top.g_ginga.setNetworkEvent(top.GingaStates.NetworkEvents.GINGA_NW_EVT_TS_UNSELECTED);
    }
	if(top.isAUFlag)//澳洲平台 重新初始化变量
	{
		initAuData();
	}
	else if(top.isLAFlag)
	{
		initLAData();
	}
	else if(top.isNAFlag)
	{
		initNAData();
	}
	else if(top.isAFFlag)
	{
		initAfData();
	}
	else if(top.isCBFlag)
	{
		initCBData();
	}else if(top.isAPFlag || top.isIRNFlag)
	{
		initAPData();
	}
	initTunerShow();
	initAllMenuList();
	addMouseListener();
	if(top.g_nextHtmlPage == "autoSearch.html")
	{
		list_position_h = findPosition("Automatic_search");
		testLog("LINE=976 -----list_position_h===" + list_position_h);
		refreshFocusOfMenuList(0);
		doEnter();
	}
	else if(top.g_nextHtmlPage == "autoUpdate.html")
	{
		list_position_h = findPosition("Automatic_update");
		testLog("LINE=982 -----list_position_h===" + list_position_h);
		refreshFocusOfMenuList(0);
		top.g_nextHtmlPage = "";
		doEnter();
	}
	else
	{
		timeoutInit();
	}
	refreshFocusOfMenuList(0);
	ttsRead();
}

function initPageFrame()
{
	listFormLiList = $("listForm").getElementsByTagName("li");
	optionContentLiList = $("optionContent").getElementsByTagName("li");
	optionContentSpanList = $("optionContent").getElementsByTagName("span");
	channelCleanButtonClassList = $("cleanForm").getElementsByClassName("dialogButton");
	$("titleContent").getElementsByTagName("span")[0].innerText = chScanTitleWords;
}

function notifyProcess(evt)
{
    var msg = evt.which;
	
//所有ＣＩ消息在搜台过程中不发相关的ci消息，这部分有底层去判断，代码此处直接默认处理即可，因为在搜台过程中这是不可能发生的事情
//powerOff消息不会在搜台的时候发送，这是由底层去判断，代码此处直接默认处理即可
//booking消息不会在搜台的时候发送，这是由底层去判断的，代码此处直接默认处理即可

    switch(msg)
    {
		default:
			top.systemEventProc(evt);
			break;
    }
}

function timeoutInit()
{
	document.onkeydown = top.timeoutMyFuc;
	top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyproc;
}

function keyproc(evt)
{
	var ret = true;
	var keycode = evt.which;
	//如果按键不是虚拟按键T键，且不是方向键、确认键、返回键，且不是鼠标左键lqt
	if(keycode!=top.VK_VIRTUAL_REMOTE&&(keycode<top.VK_VIRTUAL_KEYBOARD_LEFT||keycode>top.VK_VIRTUAL_KEYBOARD_BACK)&&keycode!=top.VK_VIRTUAL_MOUSE_OK)
	{
		if(keycode<top.VK_0||keycode>top.VK_9)//按虚拟遥控器会产生的按键，数字键
		{
			//如果是显示的话，就隐藏
			if(top.virtualRemoteState == 1)
			{
				//隐藏虚拟遥控器
				top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
			}
		}
		
	}
	switch(keycode)
	{
		case top.VK_VIRTUAL_REMOTE:
			//显示或者不显示--lqt--更改county时的密码框
			if(top.virtualRemoteState == 0)
			{
				console.log("--channelScan.js--TimeBox--keycode----"+keycode);
				if($("passForm").style.display == "block")
				{
					top.document.getElementById("virtualRemote").contentWindow.showVirtualRemote("TimeBox");
				}
				else
				{
				}
				
			}
			else
			{
				//隐藏虚拟遥控器
				top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
			}
			break;
		//lqt--虚拟遥控器的上键
		case top.VK_VIRTUAL_KEYBOARD_UP:
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForUp();
			
			break;
		}
		//lqt--虚拟遥控器的下键
		case top.VK_VIRTUAL_KEYBOARD_DOWN:
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForDown();
			
			break;
		}
		//lqt--虚拟遥控器的左键
		case top.VK_VIRTUAL_KEYBOARD_LEFT:
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForLeft();
			
			break;
		}
		//lqt--虚拟遥控器的右键
		case top.VK_VIRTUAL_KEYBOARD_RIGHT:
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForRight(); 
			
			break;
		}
		//lqt--鼠标的左键
		case top.VK_VIRTUAL_MOUSE_OK:
		{
			var clientX = top.g_setting.getProperty("memory.app.ui.virtualRemote.clientX", "0");
			var clientY = top.g_setting.getProperty("memory.app.ui.virtualRemote.clientY", "0");
			console.log("lqt---channelScan.js---clientX: "+clientX);
			console.log("lqt---channelScan.js---clientY: "+clientY);
			top.document.getElementById("virtualRemote").contentWindow.keyDownMouseClick(clientX,clientY); 
			
			break;
		}
		//lqt--虚拟遥控器的ok键
		case top.VK_VIRTUAL_KEYBOARD_OK:
		{
			top.document.getElementById("virtualRemote").contentWindow.keyDownForOK(); 
			
			break;
		}
		//lqt--虚拟遥控器的返回键
		case top.VK_VIRTUAL_KEYBOARD_BACK:
		{
			//如果是显示的话，就隐藏
			if(top.virtualRemoteState == 1)
			{
				//隐藏虚拟遥控器
				top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
			}
			
			break;
		}
		case top.VK_LEFT:
			toLeft();
			ttsRead();
			ret = false;
			break;
		case top.VK_UP:
			toUp();
			ttsRead();
			ret = false;
			break;
		case top.VK_RIGHT:
			toRight();
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
		case top.VK_BACK: //back
			toBack();
			break;
		default:
			top.keyDownProcess(evt);
			ret = true;
			break;
	}
	return ret;
}

/*
功能描述：专门用来处理数字键值的函数
参数：
全局变量：
*/
function keyUpProc(evt)
{
	var keycode = evt.which;
	switch(keycode)
	{
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
			if(focusOn == "password")
			{
				doCheckPassword(evt.which);
			}
			break;
		default:
			break;
	}
}

function toDown()
{
	if(focusOn == "menu")
	{
		refreshFocusOfMenuList(1);
	}
	else if(focusOn == "country")
    {
        if (countrySum < DISPLAY_COUNT)
        {
            form_position_h = form_position_h == (countrysWords.length - 1)? 0 : form_position_h + 1;
            refreshFocusOfListForm();
        }
        else
		{
            if(form_position_h == 4 && (offset + form_position_h) == (countrySum-1))
            {
                offset=0;
                //更新焦点
                for(var i = 0; i < 5; i++)
                {
                    listFormLiList[i].innerHTML = countrysWords[offset + i];
                }
                form_position_h = 0;
                refreshFocusOfListForm();
            }
            else if(form_position_h == 4 && (offset + form_position_h) < (countrySum-1))
            {
                offset++;
                for(var i = 0; i < 5; i++)
                {
                    listFormLiList[i].innerHTML = countrysWords[offset + i];
                }
            }
            else
            {
                form_position_h++;
                refreshFocusOfListForm();
            }

            $("listUpImg").style.display = offset > 0 ? 'block' : 'none';
            $("listDownImg").style.display = (offset + 4) >= (countrySum - 1) ? 'none' : 'block';
            top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
		}
    }
	else if(focusOn == "tuner")
    {
		form_position_h = form_position_h >= tunerShowWords.length - 1 ? 0 : form_position_h + 1;
		refreshFocusOfListForm();
		top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
    }
    else if(focusOn == "lcn")
    {
        form_position_h = !form_position_h ? 1 : 0;
        refreshFocusOfListForm();
        top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
    }
}

function toUp()
{
	if(focusOn == "menu")
	{
		refreshFocusOfMenuList(-1);
	}
	else if(focusOn == "country")
    {
        if (countrySum < DISPLAY_COUNT)
		{
            form_position_h = form_position_h == 0 ? countrysWords.length - 1 : form_position_h - 1;
            refreshFocusOfListForm();
		}
		else
		{
            if(form_position_h == 0 && (offset + form_position_h) == 0)
            {
                offset = countrySum - 5;
                for(var i = 0; i < 5; i++)
                {
                    listFormLiList[i].innerHTML = countrysWords[offset + i];
                }
                form_position_h = 4;
                refreshFocusOfListForm();
            }
            else if(form_position_h == 0 && (offset + form_position_h) > 0)
            {
                offset--;
                for(var i = 0; i < 5; i++)
                {
                    listFormLiList[i].innerHTML = countrysWords[offset + i];
                }
            }
            else if(form_position_h>0)
            {
                form_position_h--;
                refreshFocusOfListForm();
            }

            $("listUpImg").style.display = offset > 0 ? 'block' : 'none';
            $("listDownImg").style.display = (offset + 4) >= (countrySum - 1) ? 'none' : 'block';
            top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
		}
    }
	else if(focusOn == "tuner")
	{
		form_position_h = form_position_h <= 0 ? tunerShowWords.length - 1 : form_position_h - 1;
		refreshFocusOfListForm();
		top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
	}
	else if(focusOn == "lcn")
    {
        form_position_h = !form_position_h ? 1 : 0;
        refreshFocusOfListForm();
        top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
    }
}

function toLeft()
{
	if(focusOn == "password")
	{
		if(passStringLength < 1) 
		{
			return;
		}
		else
		{
			passString = passString.substring(0,(passStringLength-1));
			$('passInputContent').innerHTML = $('passInputContent').innerHTML.substring(0, (passStringLength - 1)) + "_";
			passStringLength--;
		}
	}
	else if(focusOn == "clean")
	{
		form_position_h = !form_position_h ? 1 : 0;
		$("cleanFocus").style.left = DLOG_BUTTON_START + form_position_h * DLOG_BUTTON_STEP + "px";
	}
	else
	{
		toBack();
	}
}

function toRight()
{
	if(focusOn == "menu" || focusOn == "country" || focusOn == "tuner" || focusOn == "lcn")
	{
		doEnter();
	}
	else if(focusOn == "clean")
	{
		form_position_h = !form_position_h ? 1 : 0;
		$("cleanFocus").style.left = DLOG_BUTTON_START + form_position_h * DLOG_BUTTON_STEP + "px";
	}
}

function doEnter()
{
	if(focusOn == "menu")
	{
		findFunction(list_position_h);
	}
	else if(focusOn == "country")
	{
		$("thdListFocus").src=mainFocus[0];
		$("countryDisplay").innerHTML=countrysWords[(offset + form_position_h)];
        $("listForm").style.display = "none";
        focusOn = "menu";
		setCountry();//setTimeout("setCountry()",15);
		//if (top.isIRNFlag)
        	initOptionShowStatus(tuner);
		offset = 0;
	}
	else if(focusOn == "tuner")
	{
		if(top.recordStatusFlag==1)
		{
			top.g_pvr.recordStop();
			top.pvrCurrentTime=0;
			top.recordStatusFlag=0;
			top.pvrTotalTime=2*60*60;
			top.g_pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			top.$("globleShow").contentWindow.hiddenRecord();
		}
		else if(top.timeShiftStatusFlag == 1)
		{
			top.g_pvr.timeshiftStop();
			top.g_pvr.returnToLive();//返回实时播放页面
			top.g_pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
			top.timeShiftStatusFlag = 0;
			top.$("globleShow").contentWindow.hiddenTimeShift();
		}
		$("thdListFocus").src=mainFocus[0];
		$("tunerDisplay").innerHTML=tunerShowWords[form_position_h];
		$("listForm").style.display = "none";
        focusOn = "menu";
		setTuner();
	}
    else if(focusOn == "lcn")
	{
        $("thdListFocus").src=mainFocus[0];
        $("lcnDisplay").innerHTML=offOnWords[form_position_h];
        $("listForm").style.display = "none";
        lcnStatus = form_position_h;
        channel.lcnStatus = lcnStatus;
        focusOn = "menu";
	}
	else if(focusOn == "clean")
	{
		if(form_position_h == 0)
		{
			top.parentalLock=0;
	 		top.channelLock=0;
			if(top.recordStatusFlag==1)
			{
				top.g_pvr.recordStop();
				top.pvrCurrentTime=0;
				top.recordStatusFlag=0;
				top.pvrTotalTime=2*60*60;
				top.g_pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
				top.$("globleShow").contentWindow.hiddenRecord();
			}
			else if(top.timeShiftStatusFlag == 1)
			{
				top.g_pvr.timeshiftStop();
				top.g_pvr.returnToLive();//返回实时播放页面
				top.g_pvr.pvrMhegSuspend(0);/*将mheg状态和显示恢复*/
				top.timeShiftStatusFlag = 0;
				top.$("globleShow").contentWindow.hiddenTimeShift();
			}
			channel.cleanChannelList(0);//清除当前tuner下面的所有频道
	        channelListState = 0;
			menuList[9].showFlag = 0;//clean channel list
			refreshAllMenuListShow();
			//顺序不能改变，因为需要用到变量focusOn
			focusOn = "menu";
			toUp();//需要focus作为判断条件
		}
		else
		{
			focusOn = "menu";
		}
		parent.showPage(2);
		$("cleanForm").style.display = "none";
	}
}

function toBack()
{
	switch(focusOn)
	{
		case "menu":
			parent.returnPage(2);
            if(top.isGingaOn && top.GingaObj.isInit == top.GingaStates.True)//恢复Ginga
            {
                //top.gingaEvtProc(top.GingaStates.Events.GINGA_EVT_RESUME_FROM_CONTROL_LOST);
                top.g_ginga.setNetworkEvent(top.GingaStates.NetworkEvents.GINGA_NW_EVT_TS_SELECTED);
            }
			parent.$("subMenu1").contentWindow.init();
			break;
		case "password":
			$("thdListFocus").src = mainFocus[0];
			$("passForm").style.display = "none";
			parent.showPage(2);
			focusOn = "menu";
			break;
		case  "country":	
			$("thdListFocus").src = mainFocus[0];
			$("listForm").style.display = "none";
			offset = 0;
			focusOn = "menu";
			break;
		case "tuner":
			$("thdListFocus").src = mainFocus[0];
			$("listForm").style.display = "none";
			focusOn = "menu";
			break;
        case "lcn":
            $("thdListFocus").src = mainFocus[0];
            $("listForm").style.display = "none";
            focusOn = "menu";
            break;
		default:
			break;
	}
}

function doCountry()
{
	$("thdListFocus").src=mainFocus[1];
	passFlag = 0;
	initPass();
	focusOn = "password";
}

function doTuner_mode()
{
	tunerLock = factory.tunerLock;
	hotelEnable = factory.hotelEnable;
	if(tunerLock && hotelEnable)
	{
		passFlag  = 1;
        $("thdListFocus").src=mainFocus[1];
		initPass();
		focusOn = "password";
	}
	else
	{
		$("thdListFocus").src=mainFocus[1];
		initTuner();
		focusOn = "tuner";
	}
}

function doAutomatic_search()
{
	if(tuner == 0 || tuner == 1)
	{
		parent.popWindow(3,"channelSetting/autoSearch.html");
	}
	else
	{
		parent.popWindow(3,"channelSetting/satAutoSearch.html");
	}
}
function doAutomatic_update()
{
	parent.popWindow(3,"channelSetting/autoUpdate.html");
}

function doAnalogue_manual_scan()
{
	parent.popWindow(3,"channelSetting/manualSearch.html?0");
}

function doDvb_manual_installation()
{
	if(tuner == 0)
	{
		parent.popWindow(3,"channelSetting/manualSearch.html?1");//cable
	}
	else if(tuner == 1)
	{
		parent.popWindow(3,"channelSetting/manualSearch.html?2");//antenna
	}
	else
	{
		parent.popWindow(3,"channelSetting/satManualSearch.html");
	}
}
function doSatellite_antenna_setup()
{
	parent.jumpPage(3,"channelSetting/satAntennaSet.html");
}
function doFavorite_network_select()
{	
	if(favNetListSum <= 1)
	{
		//clean channel list
		initCleanDialog();
		focusOn = "clean";
	}
	else
	{
		parent.jumpPage(3,"channelSetting/dtvFavNetList.html");
	}
}

function doLCN()
{
    form_position_h = lcnStatus;
    var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
    var leftOffset = 778;
    top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,
        offOnWords,offOnWords.length,form_position_h,0);
    focusOn = "lcn";
}
function doClean_channel_list()
{
	initCleanDialog();
	focusOn = "clean";
}

function findFunction(position)
{
	var num = -1;
	for(var i = 0; i < menuList.length; i++)
	{
		if(menuList[i].showFlag)
		{
			num++;
		}
		if(num == position)
		{
			menuList[i].param();
			break;
		}
	}
}

function findName(position)
{
	var num = -1;
	for(var i = 0; i < menuList.length; i++)
	{
		if(menuList[i].showFlag)
		{
			num++;
		}
		if(num == position)
		{
			return menuList[i].name;
		}
	}
}

function findPosition(name)
{
	var position = 0;
	for(var i = 0; i < menuList.length; i++)
	{
		if(menuList[i].name == name)
		{
			break;
		}
		if(menuList[i].showFlag)
		{
			position++;
		}
	}
	return position;
}
function findMaxPosition()
{
	var num = -1;
	for(var i = 0; i < menuList.length; i++)
	{
		if(menuList[i].showFlag)
		{
			num++;
		}
	}
	return num;
}
function findRealPosition(postion)
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
            return i;
        }
    }
}
function findPositionOfTagIndex(index)
{
	var num = -1;
	for(var i = 0;i <= index && i < menuList.length; i++)
	{
		if(menuList[i].showFlag)
		{
			num++;
		}
	}
	return num;
}

//type[0]: refresh menu list focus. 
//type[-1]: refresh menu list focus for up movement
//type[1]: refresh menu list focus for down movement
function refreshFocusOfMenuList(type)
{
	if(type)
	{
		if(type == 1)//down
		{
			list_position_h = list_position_h >= findMaxPosition() ? 0 : list_position_h + 1;
		}
		else if(type == -1)//up
		{
			list_position_h = list_position_h <= 0 ? findMaxPosition() : list_position_h - 1;
		}
	}
	$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP * list_position_h + "px";
    top.doEleScrForNoOption(optionContentSpanList, findRealPosition(list_position_h), type);
}

function refreshFocusOfListForm()
{
	$("listFormFocus").style.top = form_position_h * FORM_STEP + "px";
}


/*
功能描述：初始化密码框
参数：
全局变量：passString；passStringLength；
*/
function initPass()
{	
	$('passTitle').innerHTML = passwordWords[0];
	$("passInputTitle").innerHTML = passwordWords[0];
	passString="";
	passStringLength = 0;
	$('passInputContent').innerHTML="_";
	$("passRemind").innerHTML = "";
	$("passForm").style.display = "block";
	parent.hiddenPage(2);
	top.showDialogPosition($("passForm"),800,350,1920,1080,0,0);
}

/*
功能描述：根据密码框中输入的数字来做相应的判断和处理
参数：which，按键值
全局变量：passString;passStringLength;top.g_superPassword
*/
function doCheckPassword(which)
{
	/*
	需要说明的是String.fromCharCode(which)的值总是大写的，因为onkeyup和onkeydown事件不能主动判断键盘的大小写，onkeypress可以判断大小写。其中只有onkeyup事件能获取键盘按下去后的结果值，因为此处需用到要清除键盘按下去后的值，所以只能用onkeyup事件，考虑到遥控器只有数字键，没有大小写之分，所以够用了
	*/
	if(which>=48 && which<=57)
	{
			passString = passString+String.fromCharCode(which);
			$('passInputContent').innerHTML = $('passInputContent').innerHTML.substring(0,passStringLength)+"*"+"_";
			passStringLength++;
			var length = passString.length;
			if(length==4)
			{
                var password = "";
                var superPword = top.g_superPassword;
                if(passFlag  == 0)
				{
                    superPword = "0423";
                    password =setting.password;
				}
				else
				{
                    superPword = "2013";
                    password = factory.hotelPassword;//"1968";
                    console.log("--hzm get hotel password = " + password);
					if (password == undefined || password == "")
                        password = "1968";
				}
				if(passString != password &&  passString != superPword/*setting.checkPassword(passString)!= 1*/)
				{
					$('passRemind').innerHTML = passwordWords[1];
					passString="";
					$('passInputContent').innerHTML="_";
					passStringLength=0;
					var ttsStr =passwordWords[1];
					top.ttsLog("ttsStr=" + ttsStr);
					top.setTTSSay(top.SPEECH_TYPE_FLUSH,ttsStr);
				}
				else
				{
					$("passForm").style.display = "none";
					if(top.virtualRemoteState == 1)
					{
						//隐藏虚拟遥控器--lqt
						top.document.getElementById("virtualRemote").contentWindow.hideVirtualRemote();
					}
					if(passFlag  == 0)
					{
						focusOn = "country";
						initCountry();
					}
					else
					{
						focusOn = "tuner";
						initTuner();
					}
					parent.showPage(2);
				}
			}
	}
}

/*
功能描述：初始化国家选择选项列表框
参数：
全局变量：form_position_h;countryPosition
*/
function initCountry()
{
	form_position_h = 0;
	var i = 0;
	if(countryPosition > 4)
	{
		form_position_h = 4;
		offset = countryPosition - form_position_h;
		/*for(i=0;i<5;i++)
		{
			listFormLiList[i].innerHTML = countrysWords[offset + i];
		}*/
	}
	else
	{
		offset = 0;
		form_position_h = countryPosition;
		/*for(i=0;i<5;i++)
		{
			listFormLiList[i].innerHTML = countrysWords[offset + i];
		}*/
	}
	
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,countrysWords,countrysWords.length,form_position_h,offset);
				
}

/*
功能描述：设置一些国家属性更改后需要变更的系统属性
参数：
全局变量：countryPosition;
*/
function setCountry()
{
	countryPosition = offset + form_position_h;
	channel.systemCountry = countryIndex[countryPosition];
	setting.firstAudioLanguage = languageIndex[countryPosition];
	setting.firstSubtitleLanguage = languageIndex[countryPosition];
	setting.teletextLanguage = languageIndex[countryPosition];

	top.setHBBTVEnableForEU();//EU区域要求在英国和德国打开HBBTV的支持
	if(countryIndex[countryPosition] == 8)//france
	{
		if(setting.parentalRating == 0)
		{
			setting.parentalRating = 18;
		}
	}
	if(countryIndex[countryPosition] == 98)//加纳时区为0，需要设置偏移为0
	{
		setting.setClockOffset(0);
	}
	else if(countryIndex[countryPosition] == 134)//马来西亚时区为GMT8
	{
		setting.timeZone = 14;
		factory.otherBGM = 1;
	}
	var i = 0;
	for(i = 0; i < STTLEnableCtryPstionInCtryIndex.length; i++)
	{
		if(countryPosition == STTLEnableCtryPstionInCtryIndex[i])
		{
			setting.enableSubtitle=1;
			break;
		}
	}
	if(i == STTLEnableCtryPstionInCtryIndex.length)
	{
		setting.enableSubtitle=0;
		if(countryIndex[countryPosition] == 22)/*spain*/
		{
			setting.hbbTVMode = 1;
		}
	}
	if(top.isAUFlag && countryIndex[countryPosition] == 26 && setting.location == 2)
	{
		//AU:当国家选到新西兰并且location为shop with demo时，需要将location切换为shop。因为新西兰location只有home、shop
        setting.location = 1;
	}
	if (top.isIRNFlag)
	{
		if (countryIndex[countryPosition] == 60)
		{
            setting.setProperty("app.persiandate.switch","1");//伊朗日历 国家为伊朗时为开
		}
		else
		{
            setting.setProperty("app.persiandate.switch","0");//伊朗日历 国家非伊朗时关闭
		}
	}
  top.preloadLauncher(1);
}

/*
功能描述：初始tuner选项列表框
参数：
全局变量：form_position_h;tuner
*/
function initTuner()
{
	form_position_h = tunerPositionTosTuner(tuner);
	var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h - 10;
	var leftOffset = 778;
	top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,
		tunerShowWords,tunerShowWords.length,form_position_h,0);
				
}

/*
功能描述：设置一些tuner mode 更改后需要变更的系统属性和UI状态
参数：
全局变量：tuner;form_position_h；channelListState
*/
function setTuner()
{
	tuner = sTunerPositionToTuner(form_position_h);
	// if(top.isGingaOn && top.GingaObj.isInit == top.GingaStates.True)//tunermode切换暂停Ginga已移置中间件做
	// {
	// 	if(sTunerPositionToTuner(form_position_h) != (top.isLAFlag ? 5 : 6))
	// 	{
	// 		top.gingaEvtProc(top.GingaStates.Events.GINGA_EVT_TUNER_MODE_CHANGE);
	// 	}
	// }
	//channel.tunerMode = top.isLAFlag ? (tuner == 1 ? 5 : tuner) : tuner;
	var currentRealTuner = 0;

    if(top.isLAFlag && !top.isCBFlag)
	{
		currentRealTuner = tuner == 1 ? 5 : tuner;
	}
	else if(top.isNAFlag)
	{
		currentRealTuner = tuner == 1 ? 6 : 7;
	}
	else
	{
		currentRealTuner = tuner;
	}
	
	console.log("top.g_temp is "+top.g_temp+" top.preTempPage is "+top.preTempPage+" top.lastInputSource is "+top.lastInputSource+" top.g_channel.inputSource is "+top.g_channel.inputSource);
	if(top.g_temp == "menu" && top.preTempPage == "homePage")//是否在launch页面下
	{
		top.closeLauncherUI();
		console.log("channel.tunerMode is "+channel.tunerMode+" currentRealTuner "+currentRealTuner);
		if(channel.tunerMode == currentRealTuner) //切换相同的tuner
		{
			channel.setServiceType(1);//设置tuner mode只有DTV才可以,故此处默认设置为DTV
		}
		else
		{
			channel.tunerMode = currentRealTuner;
		}		
	}
	else
	{
		channel.tunerMode = currentRealTuner;	
	}
	console.log("tuner is "+tuner);
	optionContentSpanList[5].innerHTML = (top.isLAFlag || top.isNAFlag) ? top.dtvSearchMenu : chScanOptions[5][tuner];
	initOptionShowStatus(tuner);
}

/*
功能描述：初始化clean channel list dialog
参数：
全局变量：countryPosition;
*/
function initCleanDialog()
{
	$("cleanTitle").innerHTML = chScanOptions[8];
	$("cleanContent").innerHTML = cleanChWords;
	var cleanDivList = $("cleanForm").getElementsByTagName("div");
	cleanDivList[0].innerHTML = yesNoWords[0];
	cleanDivList[1].innerHTML = yesNoWords[1];
	form_position_h = 1;
	$("cleanFocus").style.left = DLOG_BUTTON_START + form_position_h*DLOG_BUTTON_STEP + "px";
	$("cleanForm").style.display = "block";
	parent.hiddenPage(2);
	top.showDialogPosition($("cleanForm"),800,250,1920,1080,0,0);
}

/*
功能描述：获取系统当前国家在页面显示的国家列表中的下标位置
参数：
全局变量：countryPosition;
*/
function fixCountryFocus()
{
    var index = channel.systemCountry;
    for(var i = 0; i < countryIndex.length; i++)
    {
        if (countryIndex[i] == index)
        {
            countryPosition = i;
            break;
        }
    }
}

/*
功能描述：显示选项中某些项显示状态
参数：value:tuner
全局变量：channelListState;tuner
*/
function initOptionShowStatus(value)
{
	for(var i = 0; i < menuList.length; i++)
	{
		menuList[i].showFlag = 1;
	}
	if(top.isNAFlag)
	{
		menuList[0].showFlag = 0;//country
	}

	if(top.isLAFlag || top.isCBFlag)//current product is LA
	{
		if(value == 0)//cable
		{
			menuList[0].showFlag = 0;//country
			menuList[1].showFlag = 1;//tuner
			menuList[2].showFlag = 1;//auto search
			menuList[3].showFlag = 0;//auto update
			menuList[4].showFlag = 1;//analog manual
			menuList[5].showFlag = 0;//dtv manual
			menuList[6].showFlag = 0;//satellite setup
			menuList[7].showFlag = 0;//favorite network id
            menuList[8].showFlag = 0;//lcn
			menuList[9].showFlag = 0;//clean channel list
		}
		else if(value == 1)//antenna
		{
			menuList[0].showFlag = 0;//country
			menuList[1].showFlag = 1;//tuner
			menuList[2].showFlag = 1;//auto search
			menuList[3].showFlag = 0;//auto update
			menuList[4].showFlag = 1;//analog manual
			menuList[5].showFlag = 1;//dtv manual
			menuList[6].showFlag = 0;//satellite setup
			menuList[7].showFlag = 0;//favorite network id
            menuList[8].showFlag = 0;//lcn
			menuList[9].showFlag = 0;//clean channel list
		}
	}
	else if(top.isNAFlag)//current product is NA
	{
		if(value == 0)//cable
		{
			menuList[0].showFlag = 0;//country
			menuList[1].showFlag = 1;//tuner
			menuList[2].showFlag = 1;//auto search
			menuList[3].showFlag = 0;//auto update
			menuList[4].showFlag = 1;//analog manual
			menuList[5].showFlag = 1;//dtv manual
			menuList[6].showFlag = 0;//satellite setup
			menuList[7].showFlag = 0;//favorite network id
            menuList[8].showFlag = 0;//lcn
			menuList[9].showFlag = 0;//clean channel list
		}
		else if(value == 1)//antenna
		{
			menuList[0].showFlag = 0;//country
			menuList[1].showFlag = 1;//tuner
			menuList[2].showFlag = 1;//auto search
			menuList[3].showFlag = 0;//auto update
			menuList[4].showFlag = 1;//analog manual
			menuList[5].showFlag = 1;//dtv manual
			menuList[6].showFlag = 0;//satellite setup
			menuList[7].showFlag = 0;//favorite network id
            menuList[8].showFlag = 0;//lcn
			menuList[9].showFlag = 0;//clean channel list
		}
	}
	else 
	{
		if(top.isAUFlag)
		{
			menuList[1].showFlag = 0;
		}
		if(top.recordStatusFlag == 1 || top.timeShiftStatusFlag == 1)
		{
			menuList[1].showFlag = 0;//tuner
			menuList[2].showFlag = 0;//auto search
			menuList[3].showFlag = 0;//auto update
			menuList[4].showFlag = 0;//analog manual
			menuList[5].showFlag = 0;//dtv manual
			menuList[6].showFlag = 0;//satellite setup
			menuList[7].showFlag = 0;//favorite network id
            menuList[8].showFlag = 0;//lcn
			menuList[9].showFlag = 0;//clean channel list
		}
		else
		{
			if(value == 0)//cable
			{
				menuList[3].showFlag = 0;//auto update
				menuList[4].showFlag = 0;//analog manual
				menuList[6].showFlag = 0;//satellite setup
				menuList[7].showFlag = 0;//favorite network id
			}
			else if(value == 1)
			{
				menuList[6].showFlag = 0;//satellite setup
				
				var tStr = channel.dtvFavNetList();
				top.Log("channel.dtvFavNetList() = " + tStr);
				if(tStr == "")
				{
					favNetListSum = 0;
				}
				else
				{
					favNetList = tStr.split("#");
					favNetListSum = favNetList.length;
				}
				top.Log("favNetListSum = " + favNetListSum);
				if(favNetListSum <= 1)
				{
					menuList[7].showFlag = 0;//favorite network id
				}
			}
			else if(value == 2)//satellite
			{
				menuList[3].showFlag = 0;//auto update
				menuList[4].showFlag = 0;//analog manual
				menuList[6].showFlag = 0;//satellite setup
				menuList[7].showFlag = 0;//favorite network id
			}
			channelListState = channel.channelProgramStatus();
			if(channelListState == 0)
			{
				menuList[9].showFlag = 0;//clean channel list
			}
            if(channel.systemCountry == 60)
                menuList[8].showFlag = 1;//lcn
            else
                menuList[8].showFlag = 0;//lcn

			if (tuner_num == 1)
                menuList[1].showFlag = 0;
        }
	}
	refreshAllMenuListShow();
}

/*
提供给autoSearch在antenna搜台完成后判断dtvFavNetListSum > 1时要跳转到选择favorite network时调用
*/
function directToDtvFavNetListHtml()
{
	initOptionShowStatus(tuner);
	top.$("operatePage").style.display = "block";
	parent.returnPopWindow(3);
	top.requestFocus(top.$("operatePage").contentWindow.subMenu2, 1);
	top.$("operatePage").contentWindow.setIndexFocusPage("subMenu2");
	top.$("operatePage").contentWindow.$("subMenu2").contentWindow.timeoutInit()
	
	list_position_h = 6;
	$("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
	doEnter();
}

function uninit()
{
	parent.$("subMenu1").contentWindow.init();
	testLog("---------------channel scan page uninit ------------------>")
}

function initAllMenuList()
{
	optionContentSpanList[0].innerHTML = chScanOptions[0];
	optionContentSpanList[1].innerHTML = chScanOptions[1];
	optionContentSpanList[2].innerHTML = chScanOptions[2];
	optionContentSpanList[3].innerHTML = chScanOptions[3];
	optionContentSpanList[4].innerHTML = (top.isLAFlag || top.isNAFlag) ? top.atvSearchMenu : chScanOptions[4];
	optionContentSpanList[5].innerHTML = (top.isLAFlag || top.isNAFlag) ? top.dtvSearchMenu : chScanOptions[5][tuner];
	optionContentSpanList[6].innerHTML = chScanOptions[6];
	optionContentSpanList[7].innerHTML = chScanOptions[7];
	optionContentSpanList[8].innerHTML = chScanOptions[9];
    optionContentSpanList[9].innerHTML = chScanOptions[8];
	
	if(!top.isLAFlag)
	{
		fixCountryFocus();
		$("countryDisplay").innerHTML = countrysWords[countryPosition];
	}
	$("tunerDisplay").innerHTML = top.isAUFlag ? tunerShowWords[0] : tunerShowWords[tuner];
    $("lcnDisplay").innerHTML = offOnWords[lcnStatus];
	console.log("[zhaokuntest] ----channelScan-----------tunerShowWords[0]:"+tunerShowWords[0]+"---tunerShowWords[tuner]:"+tunerShowWords[tuner]+"---tuner:"+tuner);
	
	console.log("in initAllMenuList tuner is "+tuner);
	initOptionShowStatus(tuner);
}

function refreshAllMenuListShow()
{
	for(var i = 0; i< menuList.length; i++)
	{
		optionContentLiList[i].style.display = menuList[i].showFlag ? "block" : "none";
	}
}
var optionContentLiList;
var listFormLiList;
var optionContentSpanList;
var channelCleanButtonClassList

//初始化AU配置，主要是语言和国家
function initAuData()
{
	countryIndex	=[0,26];
	languageIndex 	=[6,5,9,24,10,0,2,36,22,9,5,
					8,13,6,12,33,279,5,14,6,15,16,
					17,19,18,21,25,20,7,23,5,35,
					468,6];		//同语言对应(选择国家后audiolang，Subtitle，teletext对应的语言在语言数组中的位置);
	countrySum = countryIndex.length;
    countrysWords = [top.all_country[0],top.all_country[26]];
	/*for(var i = 0; i < countryIndex.length; i++)
	{
		countrysWords[i] = countryIndex[i] == 85 ? top.all_country[58] : top.all_country[countryIndex[i]];
	}*/
	if(tuner != 1)
	{
		channel.tunerMode = 1;
		tuner = 1;
	}
	form_position_h = 0;						
}
function initAfData()
{
	countryIndex	=[67,125,122,68,82,
						60,61,77,96,71,
						66,109,75,88,124,
						70,35,123,64,112];				
	languageIndex 	=[6,6,6,6,6,
						6,6,6,6,6,
						6,6,6,6,6,
						6,6,6,6,6,];		//同语言对应(选择国家后audiolang，Subtitle，teletext对应的语言在语言数组中的位置);
	countrySum = countryIndex.length;		
	for(var i = 0; i < countryIndex.length; i++)
	{
		countrysWords[i] = top.all_country[countryIndex[i]];
	}
	form_position_h = 0;						
}

function initLAData()
{
	tunerFlagWords = tunerFlagWordsLA;
    if(!top.isCBFlag)
    {
        tuner = tuner == 5 ? 1 : tuner;//[5]ISDB: Antenna in LA products need to use ISDB instead of air[1]
    }
    form_position_h = tuner;
}
function initCBData()
{
	tunerFlagWords = tunerFlagWordsLA;
	console.log("in initCBData tuner is "+tuner);
    form_position_h = tuner;
}
function initNAData()
{
	tunerFlagWords = tunerFlagWordsLA;
	//[6]ATSC: Antenna in NA products need to use ATSC instead of air[1]
	if(tuner == 6)
	{
		tuner = 1;
	}
	else if (tuner == 7)
	{
		tuner = 0;
	}
	form_position_h = tuner;
}

function initAPData()
{
    if (top.isIRNFlag)
	{
        countryIndex = top.mlmCountryIndexIRN;
        languageIndex = top.mlmLangIndexIRN;
	}
	else
	{
        countryIndex = top.mlmCountryIndexAP;
        languageIndex = top.mlmLangIndexAP;
	}
	countrySum = countryIndex.length;
	for(var i = 0; i < countryIndex.length; i++)
	{
		countrysWords[i] = top.all_country[countryIndex[i]];
	}
	form_position_h = 0;
	if(tuner == 5)
	{
		tuner = 1;
	}
}
var tuner_num = 0;
function initTunerShow()
{
/* 	var num = 0;
	if(top.isLAFlag|| top.isNAFlag)//test for temp
	{
		tunerShowWords[0] = tunerWords[0];
		tunerShowWords[1] = tunerWords[1];
		return;
	}
	else if(top.isAUFlag)
	{
		tunerShowWords[0] = tunerWords[1];
		return;
	}
	for(var i = 0;i<tunerWords.length;i++)
	{
		if(setting.getProperty("ro.sita.model.LiveTV." + tunerFlagWords[i],"TRUE") == "TRUE")
		{
			tunerShowWords[num] = tunerWords[i];
			num++;
		}
	} */
	console.log(" supportATVCable is "+top.supportATVCable+" supportATVAntenna is "+top.supportATVAntenna+" supportDTVCable is"+top.supportDTVCable+" supportDTVAntenna is "+top.supportDTVAntenna+"supportDVBS is "+top.supportDVBS)

	if(top.supportATVCable != -1 || top.supportDTVCable != -1)
	{
        tuner_num++;
		tunerShowWords[0] = tunerWords[0];
	}
	if(top.supportATVAntenna != -1 || top.supportDTVAntenna != -1)
	{
        tuner_num++;
		tunerShowWords[1] = tunerWords[1];
	}
	if(top.supportDVBS != -1)
	{
        tuner_num++;
		tunerShowWords[2] = tunerWords[2];
	}
}

/*
功能描述:把tuner在tuner数组中的元素的位置对应到showTuner数组中去
tuner:表示tuner数组中的位置
return:参数tuner数组中tuner位置元素对应在showTuner中的位置
*/
function tunerPositionTosTuner(tuner)
{
	var position = 0;
	for(var i=0;i<tunerShowWords.length;i++)
	{
		if(tunerShowWords[i] == tunerWords[tuner])
		{
			position = i;
			return position;
		}		
	}
	return position;
}

/*
功能描述:把form_position_h在showTuner数组中的元素的位置对应到showTuner数组中去
form_position_h:表示showTuner数组中的位置
return:参数showTuner数组中form_position_h位置元素对应在tuner中的位置
*/
function sTunerPositionToTuner(form_position_h)
{
	var position = 0;
	for(var i=0;i<tunerWords.length;i++)
	{
		console.log("tunerShowWords["+form_position_h+"] is "+tunerShowWords[form_position_h]+" tunerWords["+i+"] is "+tunerWords[i]);
		if(tunerShowWords[form_position_h] == tunerWords[i])
		{
			position = i;
			return position;
		}
	}
	console.log("position is "+position);
	if(top.isLAFlag && !top.isCBFlag)
	{
		position = position == 1 ? 5 : position;
	}
	else if(top.isNAFlag)
	{
		position = position == 1 ? 6 : 7;
	}
	console.log("position is "+position);
	return position;
}

function addMouseListener()
{
	document.body.onmousedown = function(evt)
	{
		evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		top.timeoutFuc.osdTimeoutStartFuc();
		if(evt.button == 2)
		{
			toBack();
		}
	}
	
	for(var i = 0; i < 9; i++)
	{
		optionContentLiList[i].setAttribute(MOUSE_CLICK_PARA, i);
		optionContentLiList[i].onmousedown = function(evt)
		{
			if(evt.button == 0 && focusOn == "menu")//left key
			{
				var number = findPositionOfTagIndex(parseInt(this.getAttribute(MOUSE_CLICK_PARA)));
				if(number >= 0)
				{
					list_position_h = number;
					refreshFocusOfMenuList(0, 0);
					doEnter();
				}
			}
		}
	}
	
	for(var i = 0; i < 5; i++)
	{
		listFormLiList[i].setAttribute(MOUSE_CLICK_PARA, i);
		listFormLiList[i].onmousedown = function(evt)
		{
			if(evt.button == 0 && (focusOn == "country" || focusOn == "tuner"))//left key
			{
				form_position_h = parseInt(this.getAttribute(MOUSE_CLICK_PARA));
				refreshFocusOfListForm();
				doEnter();
			}
		}
	}

	$("listUpImg").onmousedown = function(evt)
	{
		if(evt.button == 0 && focusOn == "country")//left key
		{
			form_position_h = 0;
			refreshFocusOfListForm();
			toUp();
		}
	}

	$("listDownImg").onmousedown = function(evt)
	{
		if(evt.button == 0 && focusOn == "country")//left key
		{
			form_position_h = 4;
			refreshFocusOfListForm();
			toDown();
		}
	}
	
	for(var i = 0; i < 2; i++)
	{
		channelCleanButtonClassList[i].setAttribute(MOUSE_CLICK_PARA, i);
		channelCleanButtonClassList[i].onmousedown = function(evt)
		{
			if(evt.button == 0 && focusOn == "clean")//left key
			{
				form_position_h = parseInt(this.getAttribute(MOUSE_CLICK_PARA));
				$("cleanFocus").style.left = DLOG_BUTTON_START + form_position_h * DLOG_BUTTON_STEP + "px";
				doEnter();
			}
		}
	}
}

var lastFocusName;
var lastFocusType;
var lastFocusName2 = "";
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

	if(focusOn == "menu" && 2 == parent.currentShowMenu)
	{
		lastFocusName2 = "";
		switch(currentName)
		{
			case "Country":
				ttsName = chScanOptions[0] + ",";
				currentStatus = countrysWords[countryPosition];
				break;
			case "Tuner_mode":
				ttsName = chScanOptions[1] + ",";
				currentStatus = tunerWords[tuner];
				break;
			case "Automatic_search":
				ttsName = chScanOptions[2] + ",";
				currentStatus = "";
				break;
			case "Automatic_update":
				ttsName = chScanOptions[3] + ",";
				currentStatus = "";
				break;
			case "Analogue_manual_scan":
				if(top.isLAFlag || top.isNAFlag)
				{
					ttsName = top.atvSearchMenu;
				}
				else
				{
					ttsName = chScanOptions[4];
				}
				currentStatus = "";
				break;
			case "Dvb_manual_installation":
				if(top.isLAFlag || top.isNAFlag)
				{
					ttsName = top.dtvSearchMenu + ",";
				}
				else
				{
					ttsName = chScanOptions[5][tuner] + ",";
				}
				currentStatus = "";
				break;
			case "Satellite_antenna_setup":
				ttsName = chScanOptions[6] + ",";
				currentStatus = "";
				break;
			case "Favorite_network_select":
				ttsName = chScanOptions[7] + ",";
				currentStatus = "";
				break;
			case "Clean_channel_list":
				ttsName = chScanOptions[8] + ",";
				currentStatus = "";
				break;
			default:
				ttsName = "";
				currentStatus = "";
				break;
		}
	}
	else if(focusOn == "country")
	{
		ttsName = "";
		currentStatus = countrysWords[(offset + form_position_h)];
		isSelected(countrysWords[countryPosition] == currentStatus);
	}
	else if(focusOn == "password")
	{
		ttsName = passwordWords[0];
		currentStatus = "";
	}
	else if(focusOn == "tuner")
	{
		ttsName = "";
		currentStatus = tunerWords[(form_position_h)];
		isSelected(tunerWords[tuner] == currentStatus);
	}
	else if(focusOn == "clean")
	{
		ttsName = cleanChWords;
		if(lastFocusName2 == ttsName)
		{
			ttsName = "";
		}
		lastFocusName2 = cleanChWords;
		if(form_position_h)
		{
			currentStatus = yesNoWords[1];
		}
		else
		{
			currentStatus = yesNoWords[0];
		}
	}
	else
	{
		ttsName = "";
		currentStatus = "";
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