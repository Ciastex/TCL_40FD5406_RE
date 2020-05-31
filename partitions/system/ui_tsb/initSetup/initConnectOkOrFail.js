var initNetConnectRemind      = [top.initialPrompt[6],top.initialPrompt[7],top.initialTitle[1],top.initialOptions[1]];
var initHelp                  = top.initialHotkeys;
var remindImg                 = ["../images/Network-Connection diagram-02.png","../images/Network-Connection diagram-04.png","../images/Network-Connection diagram-05.png"]
var tempValue;
var focusType                 = "initMenuList";
var setting = top.g_setting;
var bIsReaytoLeave=0;
document.onsystemevent = notifyProcess;
function notifyProcess(evt)
{
    var msg = evt.which;
	//全局消息
	switch(msg)
	{
		case top.E_NETWORK_CONNECT_TEST_SUCCESS:
		{
			if(parseInt(tempValue[0]) == 1){
				$("remindWord").innerHTML=initNetConnectRemind[1].replace("xxxxxxxxx",top.initSSID);
			}else{
				$("remindWord").innerHTML=initNetConnectRemind[1].replace("xxxxxxxxx",top.initialPrompt[30]);
			}
			$("remindImg").src=remindImg[0];
			top.systemEventProc(evt);
		}
		break;
		case top.E_NETWORK_CONNECT_TEST_FAIL:
		{
			if(parseInt(tempValue[0]) == 1){
				$("remindWord").innerHTML=initNetConnectRemind[0].replace("xxxxxxxxx",top.initSSID);
			}else{
				$("remindWord").innerHTML=initNetConnectRemind[0].replace("xxxxxxxxx",top.initialPrompt[30]);
			}
			if(setting.checklocalConnect()==1)
			{
				$("remindImg").src=remindImg[1];
			}
			else
			{
				$("remindImg").src=remindImg[2];
			}
			top.systemEventProc(evt);
		}
		break;
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
		case top.VK_LEFT:
		{
			toLeft();
			ret = false;
			break;
		}
		case top.VK_ENTER:
		{
			toOK();
			break;
		}
		case top.VK_RIGHT:
		{
			if(bIsReaytoLeave==0)
			{
				toRight();
			}
			else
			{
				bIsReaytoLeave=0;
			}
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
function init()
{
    top.initTextDirection(window);
	$("subTitleTag").innerHTML = initNetConnectRemind[3];
	parent.updateInitTitle(initNetConnectRemind[2]);
	$("back").getElementsByTagName("span")[0].innerHTML=initHelp[0];
	$("next").getElementsByTagName("span")[0].innerHTML=initHelp[2];
	var tempString = window.location.search;//获取URL携带参数
	if(tempString!=null && tempString!="")
	{
		tempString = tempString.substring(tempString.indexOf("?")+1);
	    tempValue = tempString.split(".");
		switch(parseInt(tempValue[0]))
		{

			case 1:
			{
				if(parseInt(tempValue[1])==1)
				{
					$("remindWord").innerHTML=initNetConnectRemind[1].replace("xxxxxxxxx",top.initSSID);
					$("remindImg").src=remindImg[0];
					setTimeout(function(){
						bIsReaytoLeave=1;
						toRight();},5000);
				}
				else
				{
					$("remindWord").innerHTML=initNetConnectRemind[0].replace("xxxxxxxxx",top.initSSID);
					if(setting.checklocalConnect()==1)
					 {
						 $("remindImg").src=remindImg[1];
					 }
					 else
					 {
						 $("remindImg").src=remindImg[2];
					 }
				}
			}
			break;
			default:
			{
				if(parseInt(tempValue[1])==1)
				{
					$("remindWord").innerHTML=initNetConnectRemind[1].replace("xxxxxxxxx",top.initialPrompt[30]);
					$("remindImg").src=remindImg[0];
					setTimeout(function(){
						bIsReaytoLeave=1;
						toRight();},5000);
				}
				else
				{
					$("remindWord").innerHTML=initNetConnectRemind[0].replace("xxxxxxxxx",top.initialPrompt[30]);
                     if(setting.checklocalConnect()==1)
					 {
						 $("remindImg").src=remindImg[1];
					 }
					 else
					 {
						 $("remindImg").src=remindImg[2];
					 }
				}
			}
			break;
		}
	}
	addMouseListener();
}
function toLeft()
{
	if(focusType == "initMenuList")
	{
		switch(parseInt(tempValue[0]))
		{
			case 0:
			{
				document.location.href="initWireType.html";
			}
			break;
			case 1:
			case 2:
			{
				document.location.href="initWirelessType.html";
			}
			break;
		}
	}
	else if(focusType == "initTips")
	{
		top.$("otherPage").contentWindow.toLeft();
	}
}
function toRight()
{
	if(focusType == "initMenuList")
	{
		switch(parseInt(tempValue[0]))
		{
			case 0:
			{
				if(parseInt(tempValue[1])==1 || setting.networkStatus())
				{
					//document.cookie = "isSetUpdate=1";
					top.g_setting.setProperty("app.ui.isSetUpdate","1");
                    parent.updateInitProgress(1);
					document.location.href="initSoftwareUpdateSet.html";
				}
				else
				{
					top.$("otherPage").src="initSetup/initNetTips.html";
					top.$("otherPage").style.display = "block";	
					focusType = "initTips";
					top.setFrameFocusPage("otherPage");
				}
			}
			break;
			case 1:
			case 2:
			{
				if(parseInt(tempValue[1])==1 || setting.networkStatus())
				{
					//document.cookie = "isSetUpdate=1";
					top.g_setting.setProperty("app.ui.isSetUpdate","1");
                    parent.updateInitProgress(1);
					document.location.href="initSoftwareUpdateSet.html";
				}
				else
				{
					top.$("otherPage").src="initSetup/initNetTips.html";
					top.$("otherPage").style.display = "block";	
					focusType = "initTips";
					top.setFrameFocusPage("otherPage");
				}
			}
		}
	}
	else if(focusType == "initTips")
	{
		top.$("otherPage").contentWindow.toRight();
	}
}
function toOK()
{
	if(focusType == "initMenuList")
	{
			if(bIsReaytoLeave==0)
			{
				toRight();
			}
			else
			{
				bIsReaytoLeave=0;
			}
	}
	else if(focusType == "initTips")
	{
		top.$("otherPage").contentWindow.toOK();
		top.setFrameFocusPage("main");
	}
}
function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		if(evt.button == 0){//left key
			toRight();
		}
		else if(evt.button == 2)
		{
			toLeft();
		}
	}
	$("back").onmousedown = function(evt){
		if(evt.button==0)
		{
			evt.preventDefault();
			evt.stopPropagation();
			toLeft();
		}
	}
	$("next").onmousedown = function(evt){
		if(evt.button==0)
		{
			toRight();
		}
	}
}
