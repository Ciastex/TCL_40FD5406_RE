var initNetConName            = [top.initialOptions[1],top.initialPrompt[4],top.initNets[1],top.initNets[0],top.initNets[2],top.initialHotkeys[0],top.initialHotkeys[1],top.initialHotkeys[2]];
//var netSelectImg              = ["../images/option/Radio_3.PNG","../images/option/Radio_2.PNG"];
var netTypeImg                = ["../images/Pic-Network_Wired.png","../images/Pic-Network_Wireless.png"];
var positionV                 = 0;//主界面焦点的位置坐标
var focusType                 = "initMenuList";
var setting = top.g_setting;
var showRemindTimer  = 0;
document.onsystemevent = notifyProcess;
function notifyProcess(evt)
{
    var msg = evt.which;
	//全局消息
	switch(msg)
	{
		case top.E_NETWORK_CONNECT_TEST_SUCCESS:
		case top.E_NETWORK_CONNECT_TEST_FAIL:
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
		case top.VK_UP:
		{
			//up
			toUp();
			ret = false;
			break;
		}
			
		case top.VK_DOWN:
		{
			//down
			toDown();
			ret = false;
			break;
		}
		case top.VK_LEFT:
		{
			toLeft();
			ret = false;
			break;  
		}
		case top.VK_ENTER:
		{
			toOK();
		}
		break;
		case top.VK_RIGHT:
		{
			toRight();
			ret = false;
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
	if(focusType == "initMenuList")
	{
        parent.updateInitProgress(-1);
		window.location.href = "initEnvironmentSet.html?network";
	}
	else if(focusType == "initTips")
	{
		top.$("otherPage").contentWindow.toLeft();
	}
}

var containerLiList;
function init()
{
    top.initTextDirection(window);
	try
	{	
		containerLiList = $("container").getElementsByTagName("li"); 
		var spans=document.body.getElementsByTagName("span");
        parent.updateInitTitle(top.initialTitle[1]);
		for(var i=0;i<8;i++)
		{
			spans[i].innerHTML=initNetConName[i];
		}
		//showTypeImg();
	}catch(er)
	{
		top.g_channel.testLog(er);
	}
	addMouseListener();
}
function showTypeImg()
{
	switch(positionV)
	{
		case 0:
		$("wireTypePic").src=netTypeImg[1];
		$("wireTypePic").style.display="block";
		break;
		case 1:
		$("wireTypePic").src=netTypeImg[0];
		$("wireTypePic").style.display="block";
		break;
		case 2:
		$("wireTypePic").src="";
		$("wireTypePic").style.display="none";
		break;
	}
}
function toUp()
{
	if(focusType == "initMenuList")
	{
		$("showRemind").style.display="none";
		clearTimeout(showRemindTimer);
		switch(positionV)
		{
			case 0:
			{
				positionV=2;
				$("initListFormFocus").style.top=70*positionV+"px";
			}
			break;
			case 1:
			{
				positionV=0;
				$("initListFormFocus").style.top=70*positionV+"px";
			}
			break;
			case 2:
			{
				positionV=1;
				$("initListFormFocus").style.top=70*positionV+"px";
			}
			break;
			default:
			break;
		}
		showTypeImg();
	}
}

function toDown()
{
	if(focusType == "initMenuList")
	{
		$("showRemind").style.display="none";
		clearTimeout(showRemindTimer);
		switch(positionV)
		{
			case 0:
			{

				positionV=1;
				$("initListFormFocus").style.top=70*positionV+"px";
			}
			break;
			case 1:
			{
				positionV=2;
				$("initListFormFocus").style.top=70*positionV+"px";
			}
			break;
			case 2:
			{
				positionV=0;
				$("initListFormFocus").style.top=70*positionV+"px";
			}
			break;
			default:
			break;
		}
		showTypeImg();
	}
}
function toRight()
{
	if(focusType == "initMenuList")
	{
		switch(positionV)
		{
			case 0:
			{
				//document.cookie = "isSetNetwork=1";
				top.g_setting.setProperty("app.ui.isSetNetwork","1");
				var adapterStatus=setting.wirelessNetworkStatus;
				if(adapterStatus==0)
				{
					$("showRemind").getElementsByTagName("span")[0].innerHTML=top.initNetCabAndDonRe[1];
					$("showRemind").style.display="block";
					showRemindTimer = setTimeout(function(){$("showRemind").style.display="none";},3*1000);
					return;
				}
				setting.setInterfaceType(2);
				setting.networkEnable =1;
				document.location.href="initWirelessType.html";
			}
			break;
			case 1:
			{
				//document.cookie = "isSetNetwork=1";
				top.g_setting.setProperty("app.ui.isSetNetwork","1");
				var cableStatus=setting.wireNetworkStatus;
				if(cableStatus==0)
				{
					$("showRemind").getElementsByTagName("span")[0].innerHTML=top.initNetCabAndDonRe[0];
					$("showRemind").style.display="block";
					showRemindTimer = setTimeout(function(){$("showRemind").style.display="none";},3*1000);
					return;
				}

				if(setting.wireNetworkAccess == 0)
					setting.setInterfaceType(0);//auto
				else
					setting.setInterfaceType(1);//manual
				setting.networkEnable =1;
				document.location.href="initWireType.html";
			}
			break;
			case 2:
			{
				if(setting.networkStatus())
				{
					setting.setProperty("app.ui.isSetUpdate","1");
					parent.updateInitProgress(1);
					document.location.href="initSoftwareUpdateSet.html";
				}
				else
				{
					top.$("otherPage").src="initSetup/initNetTips.html";
					top.$("otherPage").style.display = "block";
					top.setFrameFocusPage("otherPage");
					focusType = "initTips";
				}
			}
			break;
			default:
			break;
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
		toRight();
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
		if(evt.button==2)
		{
			toLeft();
		}
	}
	for(var i = 0; i < 3; i++)
	{
		containerLiList[i].setAttribute("newAttr",i)
		containerLiList[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				positionV = parseInt(this.getAttribute("newAttr"),10);
				$("initListFormFocus").style.top=70*positionV+"px";
				showTypeImg();
				toRight();
			}
		}
	}
    $("back").onmousedown = function(evt){
		if(evt.button==0)
		{
			toLeft();
		}
	}
	$("next").onmousedown = function(evt){
		if(evt.button==0)
		{
			toRight();
		}
	}
	$("select").onmousedown = function(evt){
		if(evt.button==0)
		{
			toDown();
		}
	}
}