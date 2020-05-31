var oldPromptText = "";
var titleText = top.netUpdateDialogTitle;
var promptLoadingText = top.netUpdateLoadingPrompt;
var promptText = top.netUpdatePrompt;
var buttonTextYesOrNo = top.netUpdateButtonText;

var updateInfo;

var buttonPositionLeft = "123px"; /* 98px--> 125px-2px=123px */
var buttonPositionCenter = "323px";
var buttonPositionRight = "473px"; /* 548px */

var loadingInterval;
var loadingDotInterval;

var whetherGoBack = 1;  // 0:Not to go back 1:Go back
var howManyButtonShow = 0;  // 0:NOT show buttons 1:Show 1 buttons 3:Show 3 buttons
var whereIsFocusButton = "right";  // left center right

var MENU_TIME_OUT = 3000;

var setting = top.g_setting;

document.onkeydown = keyproc;
document.onsystemevent = notifyProcess;


/******************************************************************************
 * $() will not work without prototype.js framework. Let's define $() here.
 * Please comment this function if prototype.js framework is used.
******************************************************************************/
function $(obj){
 return document.getElementById(obj);
}

/******************************************************************************
 * Description: Function for loading picture. Draw the loading picture with
 *              H5Draw.js.
******************************************************************************/
function startLoadingPic(){
	var radius = 25;
	var centerX = $('loadingPic').width/2;
	var canterY = $('loadingPic').height/2;
	var angle = [20,50,80,115,150,190,235];
	var alpha = [0.4,0.5,0.6,0.7,0.8,0.9,1];
	var sizeFactor = radius/15;  //factor of each circles size
	var size = [2,2.5,3,3.5,4,4.5,4.6];  // radius of small circle
	var h5dctx = H5D.D2('loadingPic');
	loadingInterval = setInterval(function(){
		h5dctx.clear();
		for(var i = 0;i < 7;i++){
			if(angle[i]==360){angle[i]=0;}
			var x = radius*Math.cos((angle[i])*Math.PI/180)+centerX;
			var y = radius*Math.sin((angle[i])*Math.PI/180)+canterY;
			h5dctx.drawCircle(x,y,size[i]*sizeFactor).fill({
				color:"rgba(255,255,255,"+alpha[i]+")"
			});
			angle[i]+=5;
		}
	},40);  // Period(ms) of loading picture.
}
function stopLoadingPic(){
	var h5dctx = H5D.D2('loadingPic');
	if(loadingInterval){
		window.clearInterval(loadingInterval);
	}
	h5dctx.clear();
}

/******************************************************************************
 * Description: Function for loading dot. Add some dot behind prompt text.
 * Input: textContent, text to be shown before the loading dot.
******************************************************************************/
function startLoadingDot(textContent){
	var newPromptText = "";
	var count = 0;
	
	oldPromptText = textContent;
	loadingDotInterval = setInterval(function(){
		if(count == 0){
			newPromptText = oldPromptText;
		}
		else if(count == 1){
			newPromptText = oldPromptText.concat(".");
		}
		else if(count == 2){
			newPromptText = oldPromptText.concat("..");
		}
		else{
			newPromptText = oldPromptText.concat("...");
		}
		$("promptText").innerHTML = newPromptText;
		count = (count + 1)%4;
	},400);  // Period(ms) of loading prompt text.
}
function stopLoadingDot(){
	if(loadingDotInterval){
		window.clearInterval(loadingDotInterval);
	}
	$("promptText").innerHTML = oldPromptText;
}

function toLeft(){
    /*
	if(howManyButtonShow == 3){
		if(whereIsFocusButton == "center"){
			whereIsFocusButton = "left";
			$("networkUpdateButtonFocus").style.left = buttonPositionLeft;
		}
		else if(whereIsFocusButton == "right"){
			whereIsFocusButton = "center";
			$("networkUpdateButtonFocus").style.left = buttonPositionCenter;
		}
        else if(whereIsFocusButton == "left"){
            whereIsFocusButton = "right";
            $("networkUpdateButtonFocus").style.left = buttonPositionRight;
        }
	}
	*/
    if(howManyButtonShow == 2){
        if(whereIsFocusButton == "right"){
            whereIsFocusButton = "left";
            $("networkUpdateButtonFocus").style.left = buttonPositionLeft;
        }
        else if(whereIsFocusButton == "left"){
            whereIsFocusButton = "right";
            $("networkUpdateButtonFocus").style.left = buttonPositionRight;
        }
    }
	else if(howManyButtonShow == 0){
		if(whetherGoBack == 1){
			if(loadingInterval){
				stopLoadingPic();
			}
			if(loadingDotInterval){
				startLoadingDot();
			}
			//parent.returnPage(3);
	parent.returnPopWindow(3);
		}
	}
}

function toRight(){
    /*
	if(howManyButtonShow == 3){
		if(whereIsFocusButton == "left"){
			whereIsFocusButton = "center";
			$("networkUpdateButtonFocus").style.left = buttonPositionCenter;
		}
		else if(whereIsFocusButton == "center"){
			whereIsFocusButton = "right";
			$("networkUpdateButtonFocus").style.left = buttonPositionRight;
		}
        else if(whereIsFocusButton == "right"){
            whereIsFocusButton = "left";
            $("networkUpdateButtonFocus").style.left = buttonPositionLeft;
        }
	}
	*/
    if(howManyButtonShow == 2){
        if(whereIsFocusButton == "left"){
            whereIsFocusButton = "right";
            $("networkUpdateButtonFocus").style.left = buttonPositionRight;
        }
        else if(whereIsFocusButton == "right"){
            whereIsFocusButton = "left";
            $("networkUpdateButtonFocus").style.left = buttonPositionLeft;
        }
    }
}

function doEnter(){
	if(howManyButtonShow == 2){ //3

        if(whereIsFocusButton == "right"){

            var dataFreeSize = top.g_setting.getDataFreeSize();
            if (dataFreeSize < 400)
            {
                top.delStickerVideo();
            }else{
			setting.networkDownloadButton = 0;
    			parent.returnPage(0);
			setting.startDownloadUpdateFile(1);
            }
		}
		else if(whereIsFocusButton == "left"){ //center
			// Download the software later.
			//setting.networkDownloadButton = 1;
			//parent.returnPage(3);
			parent.returnPopWindow(3);
		}
        /*
		else if(whereIsFocusButton == "left"){
			// Never download the software.
			//parent.returnPage(3);
            top.focusToIndexHtml(2);
			setting.networkDownloadButton = 2;
            setting.networkUpdateButton = 0; //The last time firmware have been download completely and select later of update dialog.
			if(updateInfo){
                if(updateInfo.version.length > 15)
                {
				setting.networkUpdateSoftwareVersionInDB = parseInt(updateInfo.version.slice(15), 10);
			}
			}
			setting.deleteDownloadUpdateFile();
		}
		*/
	}
	else if(howManyButtonShow == 1){
		if(whereIsFocusButton == "center"){
			toBack();
		}
	}
}

function toBack(){
	if(whetherGoBack == 1){
		if(loadingInterval){
			stopLoadingPic();
		}
		if(loadingDotInterval){
			startLoadingDot();
		}
	top.restartTimeout();
	parent.returnPopWindow(3);
		//parent.returnPage(3);
	}
}

function keyproc(e){
	var ret = true;
	var keycode = e.which;

	switch (keycode){
		case top.VK_LEFT:
			toLeft();
			ret = false;
			break;
		case top.VK_RIGHT:
			toRight();
			ret = false;
			break;
		case top.VK_ENTER:
			doEnter();
			ret = false;
			break;
		case top.VK_BACK:
			whetherGoBack = 1;
			toBack();
			ret = false;
			break;
		case top.VK_POWER:
			top.keyDownProcess(e);
			break;
		case top.VK_EXIT:
			if(loadingInterval){
				stopLoadingPic();
			}
			top.keyDownProcess(e);
			break;
		default:
			ret = true;
			break;
	}

	return ret;
}

function notifyProcess(evt){
	var msg = evt.which;

	switch (msg){
		case top.E_UPDATE_LOGIN_FAILED_POTAL:
            var getNetConnectStatus = evt.modifiers;
            //top.g_channel.testLog("~~~E_UPDATE_LOGIN_FAILED_POTAL  getNetConnectStatus="+getNetConnectStatus);
			stopLoadingDot();
			stopLoadingPic();
            if(getNetConnectStatus == 1){
			$("promptText").innerHTML = promptText[5]; //IR4443 2->5
            }
            else{
                $("promptText").innerHTML = promptText[2];
            }
			whetherGoBack = 1;
			howManyButtonShow = 1;
			whereIsFocusButton = "center";
			$("networkUpdateButtonFocus").style.left = buttonPositionCenter;
			$("networkUpdateButtonCenter").innerHTML = buttonTextYesOrNo[4];
			$("networkUpdateButton").style.display = "block";
			$("networkUpdateButtonLeft").style.display = "none";
			$("networkUpdateButtonRight").style.display = "none";
			//setTimeout("toBack()", MENU_TIME_OUT);
			break;
		case top.E_UPDATE_NOT_GET_TO_UPDATE_INFORMATION:
			var getPortalDataStatus = evt.modifiers;  // 0:Failed to get 1:Failed to parse

			if(getPortalDataStatus == 0){
				stopLoadingDot();
				stopLoadingPic();
				$("promptText").innerHTML = promptText[3];
			}
			else if(getPortalDataStatus == 1){
				stopLoadingDot();
				stopLoadingPic();
				$("promptText").style.textAlign = "left";
				$("promptText").innerHTML = promptText[4];
			}
			whetherGoBack = 1;
			howManyButtonShow = 1;
			whereIsFocusButton = "center";
			$("networkUpdateButtonFocus").style.left = buttonPositionCenter;
			$("networkUpdateButtonCenter").innerHTML = buttonTextYesOrNo[4];
			$("networkUpdateButton").style.display = "block";
			$("networkUpdateButtonLeft").style.display = "none";
			$("networkUpdateButtonRight").style.display = "none";
			//setTimeout("toBack()", MENU_TIME_OUT);
			break;
		case top.E_NETWORK_UPDATE_GET_UPDATED_INFORMATION:
			var isNewSoftwareFound = evt.modifiers;  // <=0:Not found >0:Found
			updateInfo = setting.getUpdateInfo();
			if(isNewSoftwareFound > 0){
                 //top.g_channel.testLog("~~~networkUpdate.js information g_isDownloading="+top.g_isDownloading + "isNewSoftwareFound="+isNewSoftwareFound);
                 if(isNewSoftwareFound == 200) // 200:force package 100:unforce package 0: no package
                 {
                        stopLoadingDot();
                        stopLoadingPic();
                        //$("promptText").innerHTML = promptLoadingText[1]; //follow spec2.2 3->1
                     	$("promptText").innerHTML = promptLoadingText[1]+"   "+top.g_downloadProgress+"%";//下载过程中，如果是强制升级，需要在提示框中显示下载进度百分比。
                        if(top.g_isDownloading != 1)
                        {
                            top.g_channel.testLog("~~~Detect force upgrade from menu.There is not downloading!");
                            setting.startDownloadUpdateFile(1);
                        }
                        setTimeout("toBack()",MENU_TIME_OUT );
                 }
                 else {
				whetherGoBack = 0;
                        howManyButtonShow = 2; //3->2
				$("networkUpdateButton").style.display = "block";
                        $("networkUpdateButtonCenter").style.display = "none";
				stopLoadingDot();
				stopLoadingPic();
                        if(updateInfo)
                        {
					$("promptText").innerHTML = promptText[1].replace(/XXXX/,updateInfo.version);
					$("promptText").style.textAlign = "left";
						$("networkUpdateReleaseNote").innerHTML = updateInfo.note;
                            if($("networkUpdateReleaseNote").clientHeight != 0)
                            {
						var releaseNoteHeight = $("networkUpdateReleaseNote").offsetHeight;
						var backgroundTop = $("networkUpdateBackground").offsetTop;
						var backgroundHeight = $("networkUpdateBackground").clientHeight;
						$("networkUpdateReleaseNote").style.textAlign = "left";
						$("networkUpdateReleaseNote").style.top = ($("promptText").offsetTop + $("promptText").offsetHeight) + "px";
						$("networkUpdateBackground").style.top = (backgroundTop - releaseNoteHeight/2) + "px";
						$("networkUpdateBackground").style.height = (backgroundHeight + releaseNoteHeight) + "px";
					}
					else{
						top.g_channel.testLog("note is empty.");
						$("networkUpdateReleaseNote").style.padding = "0";
					}
				}
                  } //else isNewSoftwareFound == 100:unforce package
			}  //else 0: no package
			else{
				stopLoadingDot();
				stopLoadingPic();
				$("promptText").innerHTML = promptText[0];
				whetherGoBack = 1;
				howManyButtonShow = 1;
				whereIsFocusButton = "center";
				$("networkUpdateButtonFocus").style.left = buttonPositionCenter;
				$("networkUpdateButtonCenter").innerHTML = buttonTextYesOrNo[4];
				$("networkUpdateButton").style.display = "block";
				$("networkUpdateButtonLeft").style.display = "none";
				$("networkUpdateButtonRight").style.display = "none";
				//setTimeout("toBack()", MENU_TIME_OUT);
			}
			break;
		case top.E_STR_SCREEN_OFF_EX:
			top.systemEventProc(evt);
			break;
		case top.E_STR_SCREEN_OFF:
			if(loadingInterval){
				stopLoadingPic();
			}
			if(top.preTempPage=="homePage"||top.preTempPage=="media"||top.g_temp=="homePage")
			{
				top.$("otherPage").src = "";
				top.$("operatePage").src = "";
				top.resumeFocus();
				top.setFrameFocusPage("main");
			}
			else
				top.jumpPage();
			top.systemEventProc(evt);
			break;
		case top.E_UPDATE_DOWNLOAD_PROGRESS:
            top.g_downloadProgress = evt.modifiers;////下载过程中，更新下载进度百分比.
            break;
		default:
			break;
	}
	ttsRead();
}

var dialogButtonClassList;

function initSetRegion()
{
	if (top.uiColourStyleFlag == 1)
	{
		var classlist;
		classlist = document.getElementsByClassName("dialogButtonFocus");
		for (var i = 0; i < classlist.length; i++) 
		{
			//classlist[i].setAttribute("class","progressImgOtherStyle");
			classlist[i].style.border = "solid medium" + top.uiColourStyle;
			//classlist[i].className = "progressImgOtherStyle";
		}
	}
}
function init(){
    top.initTextDirection(window);
	initSetRegion();
	top.stopTimeout();
	dialogButtonClassList = $("networkUpdateBackground").getElementsByClassName("dialogButton");
	$("networkUpdateTitle").innerHTML = titleText;
	whetherGoBack = 1;
	if(top.g_isDownloading == 1){
		if (!top.g_isForceUpgrade) {
            $("promptText").innerHTML = promptLoadingText[1];
            setTimeout("toBack()", MENU_TIME_OUT);
		}
        else {//下载过程中，如果是强制升级，需要在手动检测升级包后的提示框中显示下载进度百分比。 非强制升级，已经有做右下角的进度圈。
            $("promptText").innerHTML = promptLoadingText[1]+"   "+top.g_downloadProgress+"%";
            setTimeout("toBack()", MENU_TIME_OUT);
        }
	}
	else{
		$("promptText").innerHTML = promptLoadingText[0];
		$("networkUpdateButtonLeft").innerHTML = buttonTextYesOrNo[2]; //3->
		//$("networkUpdateButtonCenter").innerHTML = buttonTextYesOrNo[2];
		$("networkUpdateButtonRight").innerHTML = buttonTextYesOrNo[0];
		$("networkUpdateButtonFocus").style.left = buttonPositionRight;

		setting.softwareUpdate(1);
		//startLoadingDot($("promptText").innerHTML); //IR5291
		startLoadingPic();
	}
	addMouseListener();
	ttsRead();
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
		top.timeoutFuc.osdTimeoutEndFuc();
		if(evt.button == 2) 
		{
			whetherGoBack = 1;
			toBack();//right key
		}
		top.timeoutFuc.osdTimeoutStartFuc();
	}
	
	for(var i = 0; i < 3; i++) //3
	{
		dialogButtonClassList[i].setAttribute("newAttr",i);
		dialogButtonClassList[i].onmousedown = function(evt){
			if(evt.button == 0){
				if(howManyButtonShow == 2){ //3
					if(parseInt(this.getAttribute("newAttr")) == 0)
					{
						whereIsFocusButton = "left";
						$("networkUpdateButtonFocus").style.left = buttonPositionLeft;
					}
                    /*
					else if(i == 1)
					{
						whereIsFocusButton = "center";
						$("networkUpdateButtonFocus").style.left = buttonPositionCenter;
					}
					*/
					else if(parseInt(this.getAttribute("newAttr")) == 2) //2
					{
						whereIsFocusButton = "right";
						$("networkUpdateButtonFocus").style.left = buttonPositionRight;
					}
				}
				else if(howManyButtonShow == 1)
				{
					if(parseInt(this.getAttribute("newAttr")) == 1)
					{
						whereIsFocusButton = "center";
					}
				}
				doEnter();
			}
		}
	}
	
}

function ttsRead()
{
	if(0 == top.g_setting.ttsSwitch)
	{
		top.ttsLog("ttsSwitch is off");
		return;
	}
	var ttsStr = "";
	ttsStr = $("promptText").innerHTML;
	top.ttsLog("ttsStr=" + ttsStr);
	top.setTTSSay(top.SPEECH_TYPE_FLUSH,ttsStr);
}