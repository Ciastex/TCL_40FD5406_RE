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
		case top.VK_UP:
		{
            toUp();
			ret = false;
			break;
		}
		case top.VK_DOWN:
		{
            toDown();
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

function toUp()
{
    $("disclaimerText").scrollTop = $("disclaimerText").scrollTop - 40;
    getDisclaimerScrollTop();
}
function toDown()
{
    $("disclaimerText").scrollTop = $("disclaimerText").scrollTop + 40;
    getDisclaimerScrollTop();
}
function toOK()
{
    top.$("otherPage").src="";
    if((top.isNAFlag == 0 && top.isCBFlag==0) || top.isCAFlag == 1)
    {
        top.$("main").contentWindow.$("initSetupItem").contentWindow.initCountrySet();
    }
    else
    {
        top.$("main").contentWindow.$("initSetupItem").contentWindow.SetDefaultCountry();
    }
	top.$("main").contentWindow.$("initSetupItem").contentWindow.focusOn = "country";
	top.setFrameFocusPage("main");
}
function toBack()
{
	top.$("otherPage").src="";
}
function init()
{
    top.initTextDirection(window);
    var policyDiv = $("disclaimerDiv");
    var textDiv = $("disclaimerText");
    var titleDiv = $("titleName");
    var scrollDiv =  $("ScrollBar");
    $("okButton").innerHTML = top.ok_button;
    titleDiv.innerHTML = top.termsTitle;
    textDiv.innerHTML = getDisclaimerText();
    policyDiv.style.display = "block";
    if(textDiv.scrollHeight == textDiv.clientHeight)
    {
        scrollDiv.style.display = "none";
    }
    else
    {
        scrollDiv.style.display = "block";
        scrollDiv.style.height = Math.round(textDiv.clientHeight * textDiv.clientHeight / (textDiv.clientHeight + textDiv.scrollHeight)) + "px";
    }
    textDiv.scrollTop = "0px";
    getDisclaimerScrollTop();
	addMouseListener();
}

/**
 * 获取Disclaimer滚动条的top
 */
function getDisclaimerScrollTop()
{
    var vDiv =  $("disclaimerText");
    $("ScrollBar").style.top =  Math.round(vDiv.clientHeight * vDiv.scrollTop / vDiv.scrollHeight + 150) + "px";
}

/**
 * 获取Disclaimer text
 * 主要是格式化文本
 * @returns {格式化之后的文本}
 */
function getDisclaimerText()
{
    var tempText = new Array();
    var disclaimerText = "";

    if(top.termsConditions.length > 1)
    {
        tempText  =  top.termsConditions[1].split("\n");
    }
    else
    {
        tempText  =  top.termsConditions[0].split("\n");
    }

    if (top.termsConditions.length > 1) {
        disclaimerText = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+top.termsConditions[0]+tempText[0]
            +"<br>&nbsp;&nbsp;&nbsp;"+tempText[1]
            +"<br>&nbsp;&nbsp;&nbsp;"+tempText[2]
            +"<br>&nbsp;&nbsp;&nbsp;"+tempText[3];
    }
    else
    {
        disclaimerText = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+tempText[0];
        for (var i = 1; i < tempText.length; i++) {
            if(i==1 || i==4 || i==8 || i==12 || i==14 || i==16)
            {
                disclaimerText = disclaimerText+"<br><br>&nbsp;&nbsp;&nbsp;"+tempText[i];
            }
            else
            {
                disclaimerText = disclaimerText+"<br>&nbsp;&nbsp;&nbsp;"+tempText[i];
            }
        }
    }
    return disclaimerText;
}

function addMouseListener()
{
	$("okButton").onmousedown = function(evt){
		if(evt.button == 0){//ok key
			toOK();
		}
	}
}