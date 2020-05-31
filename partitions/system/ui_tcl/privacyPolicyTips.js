var policyTextspans;
var privacy_li_list;
var privacy_img_list;
var focusOn = "privacypolicy";
var checkPicture            = ["./images/option/check_2.png","./images/option/check_3.png"];//复选框图片
var setting = top.g_setting;
var channel = top.g_channel;
var isCheckBox = 0;
var checkindex = 0;
var form_position_h = 0;					//弹出框焦点位置
var urlAttribute;
var checkboxList;
var overHeight = 0;

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
            top.systemEventProc(evt);
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
        case top.VK_LEFT:
        {
            toLeft();
            break;
        }
        case top.VK_RIGHT:
        {
            toRight();
            break;
        }
        case top.VK_BACK:
        case top.VK_EXIT:
            toBack();
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

function toUp()
{
    if (isCheckBox == 0)
    {
        $("policyText").scrollTop = $("policyText").scrollTop - 40;
        getPolicyScrollTop();
    }
    else
    {
        /*if (checkindex == 0) return;
        privacy_li_list[checkindex--].style.background = "";
        privacy_li_list[checkindex].style.background = "#A9A9A9";*/
        if (checkindex > 0)
        {
            checkboxList[checkindex].getElementsByTagName("span")[0].style.color = "";
            checkindex--;
            $("policyNoticeTable").scrollTop = $("policyNoticeTable").scrollTop - overHeight/2;
            checkboxList[checkindex].getElementsByTagName("span")[0].style.color = top.uiColourStyle;
        }
    }
    // $("policyText").scrollTop = $("policyText").scrollTop - 40;
    // getDisclaimerScrollTop();
}
function toDown()
{
    if (isCheckBox == 0)
    {
        $("policyText").scrollTop = $("policyText").scrollTop + 40;
        getPolicyScrollTop();
    }
    else
    {
        /*if (channel.systemCountry != 25 && checkindex == 4) return;
        else if (checkindex == 5) return;
        privacy_li_list[checkindex++].style.background = "";
        privacy_li_list[checkindex].style.background = "#A9A9A9";*/
        if (checkindex < 2)
        {
            checkboxList[checkindex].getElementsByTagName("span")[0].style.color = "";
            checkindex++;
            $("policyNoticeTable").scrollTop = $("policyNoticeTable").scrollTop + overHeight/2;
            checkboxList[checkindex].getElementsByTagName("span")[0].style.color = top.uiColourStyle;
        }
    }
    // $("policyText").scrollTop = $("policyText").scrollTop + 40;
    // getDisclaimerScrollTop();
}
function toLeft()
{
    if (focusOn == "privacypolicy")
    {
        isCheckBox = 0;
        $("policyText").style.overflow = "scroll";
        //privacy_li_list[checkindex].style.background = "";
        checkboxList[checkindex].getElementsByTagName("span")[0].style.color = "";
    }
    else if (focusOn=="privacyTips")
    {
        if(form_position_h == 0)
        {
            form_position_h = 1;
            $("tipsButtonFocus").style.left = "476px";
        }
        else
        {
            form_position_h = 0;
            $("tipsButtonFocus").style.left = "150px";
        }
    }
}
function toRight()
{
    if (focusOn == "privacypolicy")
    {
        isCheckBox = 1;
        $("policyText").style.overflow = "hidden";
        //privacy_li_list[checkindex].style.background = "#A9A9A9";
        checkboxList[checkindex].getElementsByTagName("span")[0].style.color = top.uiColourStyle;
    }
    else if (focusOn=="privacyTips")
    {
        if(form_position_h == 0)
        {
            form_position_h = 1;
            $("tipsButtonFocus").style.left = "476px";
        }
        else
        {
            form_position_h = 0;
            $("tipsButtonFocus").style.left = "150px";
        }
    }
}
function toOK()
{
    if(focusOn=="privacypolicy")
    {
        console.log("--hzm took isCheckBox = " + isCheckBox);
        if(isCheckBox == 1)
        {
            /*if (privacy_img_list[checkindex].src.indexOf("check_3.png") != -1)//取消勾选
            {
                initPrivacyTips(checkindex);
            }
            else
            {
                console.log("--hzm took checkindex = " + checkindex);
                switch (checkindex)
                {
                    case 0://smart tv
                        setting.setProperty("app.ui.quickKey", "1");
                        break;
                    case 1://hbbtv disable
                        setting.setProperty("app.ui.hbbtv", "1");
                        break;
                    case 2://launcher update disable
                        setting.setProperty("app.ui.update", "1");
                        break;
                    case 3://second screen disable
                        setting.dlnaEnable = 1;
                        break;
                    case 4://software update disable
                        setting.setProperty("app.ui.software", "1");
                        break;
                    case 5://freeview play
                        setting.hbbTVMdsState = 1;
                        break;
                    default:
                        break;
                }
                privacy_img_list[checkindex].src = checkPicture[1];
            }*/
            if (checkboxList[checkindex].getElementsByTagName("img")[0].src.indexOf("check_3.png") != -1)//取消勾选
            {
                checkboxList[checkindex].getElementsByTagName("img")[0].src = checkPicture[0];
                switch (checkindex)
                {
                    case 0:
                        setting.setProperty("app.ui.smart_tv_service", "0");
                        break;
                    case 1:
                        setting.setProperty("app.ui.software_update", "0");
                        break;
                    case 2:
                        setting.setProperty("app.ui.personal_data", "0");
                        break;
                }
            }
            else //确认勾选
            {
                checkboxList[checkindex].getElementsByTagName("img")[0].src = checkPicture[1];
                switch (checkindex)
                {
                    case 0:
                        setting.setProperty("app.ui.smart_tv_service", "1");
                        break;
                    case 1:
                        setting.setProperty("app.ui.software_update", "1");
                        break;
                    case 2:
                        setting.setProperty("app.ui.personal_data", "1");
                        break;
                }
            }
        }
    }
    else if (focusOn=="privacyTips")
    {
        if(form_position_h == 0)//yes
        {
            privacy_img_list[checkindex].src = checkPicture[0];
            switch (checkindex)
            {
                case 0://smart tv
                    setting.setProperty("app.ui.quickKey", "0");
                    break;
                case 1://hbbtv disable
                    setting.setProperty("app.ui.hbbtv", "0");
                    break;
                case 2://launcher update disable
                    setting.setProperty("app.ui.update", "0");
                    break;
                case 3://second screen disable
                    setting.dlnaEnable = 0;
                    break;
                case 4://software update disable
                    setting.setProperty("app.ui.software", "0");
                    break;
                case 5://freeview play
                    setting.hbbTVMdsState = 0;
                    break;
            }
        }
        $("policyTips").style.display = "none";
        focusOn = "privacypolicy";
    }
}
function toBack()
{
    if (focusOn == "privacypolicy")
    {
        console.log("--hzm toback top.preTempPage = " + top.preTempPage + "  top.g_temp = " + top.g_temp);
        if(top.preTempPage=="homePage" || top.g_temp=="homePage")
        {
            top.$("operatePage").src = "";
            top.requestFocus(top.main, 1);
            top.setFrameFocusPage("main");
        }
        else
        {
            top.$("otherPage").src="";
            top.$("operatePage").src="";
            top.$('main').style.display="block";
            top.$('main').src = "channelPlay.html";

            top.requestFocus(top.main, 1);
            top.setFrameFocusPage("main");
        }
    }
    else if (focusOn == "privacyTips")
    {
        $("policyTips").style.display = "none";
        focusOn = "privacypolicy";
    }
}

function initPrivacyTips(checkindex)
{
    form_position_h = 0;
    $("tipsTitle").innerHTML = top.smartTVOptions[8];
    var buttons = $("policyTips").getElementsByTagName("div");
    focusOn = "privacyTips";
    switch (checkindex)
    {
        case 0:
            $("tipsContent").innerHTML = top.privacyPolicyTips[0];
            break;
        case 1:
            $("tipsContent").innerHTML = top.privacyPolicyTips[1];
            break;
        case 2:
            $("tipsContent").innerHTML = top.privacyPolicyTips[2];
            break;
        case 3:
            $("tipsContent").innerHTML = top.privacyPolicyTips[3];
            break;
        case 4:
            $("tipsContent").innerHTML = top.privacyPolicyTips[4];
            break;
        case 5:
            $("tipsContent").innerHTML = top.privacyPolicyTips[5];
            break;
    }
    buttons[0].innerHTML = top.yesNo[0];
    buttons[1].innerHTML = top.yesNo[1];
    $("tipsButtonFocus").style.left = "150px";
    $("policyTips").style.display = "block";
}

function init()
{
    top.initTextDirection(window);
    policyTextspans = $("policyTextContainer").getElementsByTagName("span");
    privacy_li_list = $("policyTextContainer").getElementsByTagName("li");
    privacy_img_list = $("policyTextContainer").getElementsByTagName("img");
    checkboxList = document.getElementsByClassName("policyNoticeCheckbox");
    var policyDiv = $("smartTvPolicyDiv");
    var textDiv = $("policyText");
    var titleDiv = $("titleName");
    var scrollDiv =  $("ScrollBar");
    titleDiv.innerHTML = top.termsFirTitle[1];
    textDiv.innerHTML = getSmartTvText(top.privacyNotice);
    policyDiv.style.display = "block";
    /*var smartvservice = setting.getProperty("app.ui.quickKey", "1");
    var hbbtvservice = setting.getProperty("app.ui.hbbtv", "1");
    var launcherupdateservice = setting.getProperty("app.ui.update", "1");
    var dlnaservice = setting.dlnaEnable;
    var softwareupdaeservice = setting.getProperty("app.ui.software", "1");
    var freeviewplayservice = setting.hbbTVMdsState;
    console.log("--hzm freeviewplayservice = " +freeviewplayservice);
    for (var i = 0; i<policyTextspans.length;i++)
    {
        policyTextspans[i].innerText=top.privacyPolicyTerms[i];
    }
    privacy_img_list[0].src = checkPicture[smartvservice];
    privacy_img_list[1].src = checkPicture[hbbtvservice];
    privacy_img_list[2].src = checkPicture[launcherupdateservice];
    privacy_img_list[3].src = checkPicture[dlnaservice];
    privacy_img_list[4].src = checkPicture[softwareupdaeservice];
    privacy_img_list[5].src = checkPicture[freeviewplayservice];
    if (channel.systemCountry == 25)//uk
    {
        privacy_li_list[5].style.display = "block";
    }
    else
        privacy_li_list[5].style.display = "none";*/
    var smart_tv_service = setting.getProperty("app.ui.smart_tv_service","1");
    var software_update = setting.getProperty("app.ui.software_update","0");
    var personal_data = setting.getProperty("app.ui.personal_data","0");
    checkboxList[0].getElementsByTagName("img")[0].src = checkPicture[smart_tv_service];
    checkboxList[1].getElementsByTagName("img")[0].src = checkPicture[software_update];
    checkboxList[2].getElementsByTagName("img")[0].src = checkPicture[personal_data];
    $("policyNoticeText1").innerHTML = top.privacyPolicy[0];
    $("checkboxText1").innerHTML = top.privacyPolicy[1];
    $("checkboxText2").innerHTML = top.privacyPolicy[2];
    $("checkboxText3").innerHTML = top.privacyPolicy[5];
    $("policyNoticeText2").innerHTML = top.privacyPolicy[3];
    $("policyNoticeTable").scrollTop = "0px";

    var divtotal = $("policyNoticeTable").offsetHeight;
    var text1height = $("policyNoticeText1").offsetHeight;
    var text2height = $("checkboxText1").offsetHeight;
    var text3height = $("checkboxText2").offsetHeight;
    var text4height = $("checkboxText3").offsetHeight;
    var text5height = $("policyNoticeText2").offsetHeight;
    var realtotal = text1height + text2height + text3height + text4height +text5height;
    if (realtotal > divtotal)
    {
        overHeight = realtotal - divtotal + 30;
    }

    console.log("--hzm init textDiv.scrollHeight = " + textDiv.scrollHeight);
    console.log("--hzm init textDiv.clientHeight = " + textDiv.clientHeight);
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
    focusOn = "privacypolicy";
    getPolicyScrollTop();
	addMouseListener();
}

/**
 * 获取Smart TV Policy 滚动条的top
 */
function getPolicyScrollTop()
{
    var vDiv =  $("policyText");
    $("ScrollBar").style.top =  Math.round(vDiv.clientHeight * vDiv.scrollTop / vDiv.scrollHeight + 150) + "px";
}

/**
 * 获取Policy text
 * 主要是格式化文本
 * @returns {格式化之后的文本}
 */
function getSmartTvText(text)
{
    var tempText = new Array();
    var policyText = "";

    if(text.length > 1)
    {
        tempText  =  text[1].split("\n");
    }
    else
    {
        tempText  =  text[0].split("\n");
    }

    if (text.length > 1) {
        policyText = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+text[0]+tempText[0]
            +"<br>&nbsp;&nbsp;&nbsp;"+tempText[1]
            +"<br>&nbsp;&nbsp;&nbsp;"+tempText[2]
            +"<br>&nbsp;&nbsp;&nbsp;"+tempText[3];
    }
    else
    {
        policyText = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+tempText[0];
        for (var i = 1; i < tempText.length; i++) {
            if(i==1 || i==4 || i==8 || i==12 || i==14 || i==16)
            {
                policyText = policyText+"<br><br>&nbsp;&nbsp;&nbsp;"+tempText[i];
            }
            else
            {
                policyText = policyText+"<br>&nbsp;&nbsp;&nbsp;"+tempText[i];
            }

        }
    }

    return policyText;

}

function addMouseListener()
{
	// $("okButton").onmousedown = function(evt){
	// 	if(evt.button == 0){//ok key
	// 		toOK();
	// 	}
	// }
}