var netTipsCon       = [top.initialPrompt[16],top.yesNo[0],top.yesNo[1],top.initialTitle[1],top.initialOptions[1],top.others[28]];
var positionH        = 0;
var setting = top.g_setting;
document.onsystemevent = notifyProcess;
function notifyProcess(evt)
{
    var msg = evt.which;
	//全局消息
	switch(msg)
	{
		case top.E_DATABASE_FILE_DAMAGE:
		case top.E_STR_SCREEN_OFF:
		{
			top.systemEventProc(evt);
		}
		break;
        case top.E_HP_PLUGIN:
        case top.E_HP_PLUGOUT:
        {
            top.systemEventProc(evt);
            break;
        }
		default:
			break;
	}
}
document.onkeydown = keyproc;
function keyproc(e)
{
	var ret = true;
	var keycode = e.which;
	switch (keycode)
	{
		case top.VK_POWER://power
			top.keyDownProcess(e);
			break;
		case top.VK_ENTER:
		{
			//OK 键
			toOK();
			ret = false;
			break;
		}
		case top.VK_LEFT:
		{
			toLeft();
			ret = false;
			break;
		}
		case top.VK_RIGHT:
		{
			toRight();
			break;
		}
		case top.VK_RED:
			top.changeSource();
			top.jumpPage();
			break;
		default:
		break;
	}
	return ret;
}

function $(id)
{
    return document.getElementById(id);
}

function toLeft()
{
	if(positionH==0)
	{
		positionH=1;
		$("TipsButtonFocus").style.left="105px";
	}
	else
	{
		positionH=0;
		$("TipsButtonFocus").style.left="520px";
	}
}
function toRight()
{
	if(positionH==0)
	{
		positionH=1;
		$("TipsButtonFocus").style.left="105px";
	}
	else
	{
		positionH=0;
		$("TipsButtonFocus").style.left="520px";
	}
}
function toOK()
{
	try
	{
		if(positionH==0)
		{
			top.$("otherPage").src="";
			top.$("main").contentWindow.$("initSetupItem").contentWindow.focusType = "initMenuList";
			top.setFrameFocusPage("main");
		}
		else
		{
		//	document.cookie = "isSetNetwork=0";
		//	document.cookie = "isSetUpdate=0";
			top.g_setting.setProperty("app.ui.isSetNetwork","0");
			top.g_setting.setProperty("app.ui.isSetUpdate","0");
			if ((top.supportATVSource == 1) || (top.supportDTVSource == 1))
			{
                top.$("otherPage").src="";
                if (top.isAPFlag && top.g_setting.location == 0 && (top.g_channel.systemCountry == 58 || top.g_channel.systemCountry == 82))//越南/印度电子保单
				{
                    top.$("main").contentWindow.updateInitProgress(1);
                    top.$("main").contentWindow.$("initSetupItem").src = "initRegister.html";//5-1
				}
				else
				{
                    top.$("main").contentWindow.updateInitProgress(2);
                    top.$("main").contentWindow.$("initSetupItem").src = "initChannelInstallEntry.html";//5-1
				}
                top.setFrameFocusPage("main");
			}
			else//没有TV功能，直接跳转到第5/6步
			{
                top.$("otherPage").src="";
                top.$("main").contentWindow.updateInitProgress(3);
				top.$("main").contentWindow.$("initSetupItem").src = "initClockSet.html";
                top.setFrameFocusPage("main");
			}
		}
	}catch(er)
	{
		top.g_channel.testLog("toOK:"+er);
	}
}
function toBack()
{
	top.$("otherPage").src="";
}
function init()
{
    top.initTextDirection(window);
	$("TipsContent").innerHTML=netTipsCon[0];
	var divs=$("TipsButtonList").getElementsByTagName("div");
	divs[0].innerHTML=netTipsCon[1];
	divs[1].innerHTML=netTipsCon[2];
	$("TipsTitle").innerHTML=netTipsCon[5];
  	if(top.g_setting.manufacturer =="JVC")
    {
        $("DumpPicture").src="../images/opera_dump-JVC.png" ;
    }
    else if(top.isAUFlag)
    {
        $("DumpPicture").src="../images/initSetup_foxxum.png" ;
    }
    else if(top.isLAFlag)
    {
        $("DumpPicture").src="../images/initSetup_foxxum.png" ;

    }
    else if(top.isIRNFlag)
    {
        $("DumpPicture").src="../images/initSetup_zeasn.png" ;

    }
	else
    {
        $("DumpPicture").src="../images/initSetup_zeasn.png" ;
    }
	addMouseListener();
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		if(evt.button==2)
		{
			top.$("otherPage").src="";
			top.$("main").contentWindow.focusType = "initMenuList";
			top.setFrameFocusPage("main");
		}
		};
	$("leftButton").onmousedown = function(evt){
		if(evt.button == 0){//left key
			positionH=1;
			$("TipsButtonFocus").style.left="105px";
			toOK();
		}
	}
	$("rightButton").onmousedown = function(evt){
		if(evt.button == 0){//left key
			positionH=0;
			$("TipsButtonFocus").style.left="520px";
			toOK();
		}
	}
}