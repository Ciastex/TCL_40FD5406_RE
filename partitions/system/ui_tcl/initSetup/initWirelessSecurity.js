var initWireTypeCon           = [top.initialOptions[1],top.initialPrompt[28],top.netWlessSecu3[0],top.netWlessSecu3[1],top.netWlessSecu3[2],top.netWlessSecu3[3],top.netWlessSecu3[4],top.netWlessSecu3[5],top.netWlessSecu3[6],top.initialHotkeys[0],top.initialHotkeys[1],top.initialHotkeys[2]]
//var netSelectImg              = ["../images/option/Radio_3.PNG","../images/option/Radio_2.PNG"];
var positionV                 = 0;//主界面焦点的位置坐标
var setting = top.g_setting;
var offset = 0;
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
		case top.VK_BACK: //back
		case top.VK_LEFT:
		{
			toLeft();
			ret = false;
			break;  
		}
		case top.VK_ENTER:
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
var containerLiList;
function initSetRegion()
{
	if (top.uiColourStyleFlag == 1)
	{
		var classlist;
		classlist = document.getElementsByClassName("dialogButtonFocus");
		for (var i = 0; i < classlist.length; i++) {
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
	containerLiList = $("container").getElementsByTagName("li");
	var spans=document.body.getElementsByTagName("span");
    parent.updateInitTitle(top.initialTitle[1]);
	for(var i=0;i<12;i++)
	{
		spans[i].innerHTML=initWireTypeCon[i];
	}
	showUpDownFlagImg(5,offset);
	addMouseListener();
}
function toUp()
{
	switch(positionV)
	{
		case 0:
		{
			positionV=6;
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
		case 3:
		{
			positionV=2;
			$("initListFormFocus").style.top=70*positionV+"px";
		}
		break;
		case 4:
		{
			positionV=3;
			$("initListFormFocus").style.top=70*positionV+"px";
		}
		break;
		case 5:
		{
			positionV=4;
			$("initListFormFocus").style.top=70*positionV+"px";
		}
		break;
		case 6:
		{
			positionV=5;
			$("initListFormFocus").style.top=70*positionV+"px";
		}
		break;
		default:
		break;
	}
	showUpDownFlagImg(5,offset);
}

function toDown()
{
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
			positionV=3;
			$("initListFormFocus").style.top=70*positionV+"px";
		}
		break;
		case 3:
		{
			positionV=4;
			$("initListFormFocus").style.top=70*positionV+"px";
		}
		break;
		case 4:
		{
			positionV=5;
			$("initListFormFocus").style.top=70*positionV+"px";
		}
		break;
		case 5:
		{
			positionV=6;
			$("initListFormFocus").style.top=70*positionV+"px";
		}
		break;
		case 6:
		{
			positionV=0;
			$("initListFormFocus").style.top=70*positionV+"px";
		}
		break;
		default:
		break;
	}
	showUpDownFlagImg(5,offset);
}
function toRight()
{
	switch(positionV)
	{
		case 0:
		{
			top.g_setting.wirelessNetworkConnect(top.initSSID,"NONE",positionV,"");
			document.location.href="initNetConnectPrompt.html?03.0"//设置成功
		}
		break;
		default:
		top.initSecurityMode = positionV;
		document.location.href="initWirelessPassword.html"
		break;
	}
}
function toLeft()
{
	document.location.href="initWirelessManual.html";
}
function showUpDownFlagImg(optionSum,positionOffset)
{
	//��һ�׶β�����꣬�������ء�
	$("initListUpImg").style.opacity = 0;
	$("initListDownImg").style.opacity = 0;
	return;
	//��һ�׶β�����꣬�������ء�
	
	if(optionSum <= 5)
	{
		$("initListUpImg").style.opacity = 0;
		$("initListDownImg").style.opacity = 0;
		return;
	}
	
	if(positionOffset > 0)
	{
		$("initListUpImg").style.opacity = 1;
	}
	else
	{
		$("initListUpImg").style.opacity = 0;
	}
	
	if((positionOffset + 4) >= (optionSum - 1))
	{
		$("initListDownImg").style.opacity = 0;
	}
	else
	{
		$("initListDownImg").style.opacity = 1;
	}
}

function addMouseListener()
{
	//form
	for(var i = 0; i < 7; i++)
	{
		containerLiList[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				positionV = i;
				$("initListFormFocus").style.top=70*positionV+"px";
				toRight();
			}
		}
	}
}