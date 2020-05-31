var initWirelessAutoCOn       = [top.initialTitle[1],top.initialOptions[1],top.initialPrompt[13],top.initialPrompt[14],top.initialPrompt[15]]
var initHelp                  = top.initialHotkeys;
//var netSelectImg              = ["../images/option/Radio_3.PNG","../images/option/Radio_2.PNG"];
var positionV                 = 0;//主界面焦点的位置坐标
var setting = top.g_setting;
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
function init()
{
    top.initTextDirection(window);
	$("subTitleTag").innerHTML = initWirelessAutoCOn[1];
	parent.updateInitTitle(initWirelessAutoCOn[0]);
	containerLiList = $("container").getElementsByTagName("li");		 
	$("back").getElementsByTagName("span")[0].innerHTML=initHelp[0];
	$("select").getElementsByTagName("span")[0].innerHTML=initHelp[1];
	$("next").getElementsByTagName("span")[0].innerHTML=initHelp[2];
	var spans=$("initDialog").getElementsByTagName("span");
	for(var i=0;i<3;i++)
	{
		spans[i+1].innerHTML=initWirelessAutoCOn[i+2];
	}
	if("true" == top.isSCBCFlag)
	{
		containerLiList[0].style.display = "none";
	}
	addMouseListener();
}
function toUp()
{
	if("true" == top.isSCBCFlag)
	{
		positionV = 1;
	}
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
			positionV=0;
			$("initListFormFocus").style.top=70*positionV+"px";
		}
		break;
		default:
		break;
	}
}

function toDown()
{
	if("true" == top.isSCBCFlag)
	{
		positionV = 1;
	}
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
			positionV=0;
			$("initListFormFocus").style.top=70*positionV+"px";
		}
		break;
		default:
		break;
	}
}
function toRight()
{
	if("true" == top.isSCBCFlag)
	{
		document.location.href="initWirelessAutoPBC.html";
		return;
	}
	switch(positionV)
	{
		case 0:
		{
			document.location.href="initWirelessAutoPIN.html";
		}
		break;
		case 1:
		{
			document.location.href="initWirelessAutoPBC.html";
		}
		break;
		default:
		break;
	}
}
function toLeft()
{
	document.location.href="initWirelessType.html";
}

function addMouseListener()
{
    document.body.onmousedown = function(evt){evt.preventDefault();
		if(evt.button==2)
		{
			toLeft();
		}
	}
	for(var i = 0; i < 2; i++)
	{
		containerLiList[i].setAttribute("newAttr",i);
		containerLiList[i].onmousedown = function(evt){
			if(evt.button == 0){//left key
				if("true" == top.isSCBCFlag)
				{
					positionV = 0;
				}
				else
				{
					positionV = parseInt(this.getAttribute("newAttr"),10);
				}
				$("initListFormFocus").style.top=70*positionV+"px";
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