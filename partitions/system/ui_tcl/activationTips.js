var activateTVWords = top.activateTVWords;
var focusOn = "checkCode";//checkCode,customerCenter
var setting = top.g_setting;
var factory = top.g_factory;
var channel = top.g_channel;
var sn = "";
var token = "";
var t = "";
var showQRCodeTimers = 0;
var showCustomerCenterTimers = 0;
var countryCode = "";
var clientCode = "";
var cType = "";
var positionV = 0;					//弹出框焦点位置
var positionH = 1;//表示button的焦点位置
var checkCode = "";
var username = "";
var mail = "";
var phoneNum = "";
var loadingImgs				= ["images/Loading-01.png",
    "images/Loading-02.png",
    "images/Loading-03.png",
    "images/Loading-04.png",
    "images/Loading-05.png",
    "images/Loading-06.png",
    "images/Loading-07.png",
    "images/Loading-08.png"];
var loadingTimer = 0;
var loadingCount = 0;

var pressKeyFlag = 0;
var oldRcKeyTimeOut           =0;
var char_table           = [['0'," ",".",'-','*','&','+','@','#'],
    ['1'],
    ['2','a','b','c','A','B','C'],
    ['3','d','e','f','D','E','F'],
    ['4','g','h','i','G','H','I'],
    ['5','j','k','l','J','K','L'],
    ['6','m','n','o','M','N','O'],
    ['7','p','q','r','s','P','Q','R','S'],
    ['8','t','u','v','T','U','V'],
    ['9','w','x','y','z','W','X','Y','Z'],
];//用来编辑频道名时的字符库

var alphabet = [' ','!','\"','#','$','%','&','\'','(',')','*','+',',','-','.','/','0','1','2','3','4','5','6','7','8','9',
    ':',';','<','=','>','?','@',
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
    '[','\\',']','^','_','`',
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    '{','|','}','~'];
var keyCount           = 0;//按键连续按下的次数
var timerID            = 0;//time out 在500ms没有再次按下相同键时被清零
var oldKeyCode         = 0;//上一次的keycode 与本次进行对比用
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
        case top.E_MEDIA_USB_INSERTED:
            break;
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
            if (positionV == 0 && (checkCode.length > 0) && focusOn == "checkCode")
            {
                checkCode = checkCode.substring(0, checkCode.length - 1);
                $("checkCodeContent").innerHTML = top.replaceT(checkCode);
            }
            else if (focusOn == "customerCenter")
            {
                if (positionV == 0 && (username.length > 0))
                {
                    username = username.substring(0, username.length - 1);
                    $("ccInputnameContent").innerHTML = top.replaceT(username);
                }
                else if (positionV == 1 && (mail.length > 0))
                {
                    mail = mail.substring(0, mail.length - 1);
                    $("ccInputmailContent").innerHTML = top.replaceT(mail);
                }
                else if (positionV == 2 && (phoneNum.length > 0))
                {
                    phoneNum = phoneNum.substring(0, phoneNum.length - 1);
                    $("ccInputmobileContent").innerHTML = top.replaceT(phoneNum);
                }
                else
                {
                    toBack();
                }
            }
            else
            {
                toBack();
            }
            break;
        case top.VK_0:
            checkInput(keycode,focusOn,positionV);
            break;
        case top.VK_1:
            checkInput(keycode,focusOn,positionV);
            break;
        case top.VK_2:
            checkInput(keycode,focusOn,positionV);
            break;
        case top.VK_3:
            checkInput(keycode,focusOn,positionV);
            break;
        case top.VK_4:
            checkInput(keycode,focusOn,positionV);
            break;
        case top.VK_5:
            checkInput(keycode,focusOn,positionV);
            break;
        case top.VK_6:
            checkInput(keycode,focusOn,positionV);
            break;
        case top.VK_7:
            checkInput(keycode,focusOn,positionV);
            break;
        case top.VK_8:
            checkInput(keycode,focusOn,positionV);
            break;
        case top.VK_9:
            checkInput(keycode,focusOn,positionV);
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
    if (focusOn == "checkCode")
    {
        if (positionV == 1)
        {
            positionV = 0;
            $("inputFocus").style.display="block";
            $("dialogButtonFocus").style.display="none";
        }
        else
        {
            positionV = 1;
            $("inputFocus").style.display="none";
            $("dialogButtonFocus").style.display="block";
        }
    }
    else if (focusOn == "customerCenter")
    {
        switch (positionV)
        {
            case 0:
                positionV=3;
                $("inputFocus").style.display="none";
                $("dialogButtonFocus").style.display="block";
                break;
            case 1:
                positionV=0;
                $("inputFocus").style.top=330+"px";
                break;
            case 2:
                positionV=1;
                $("inputFocus").style.top=390+"px";
                break;
            case 3:
                positionV=2;
                $("inputFocus").style.top=450+"px";
                $("inputFocus").style.display="block";
                $("dialogButtonFocus").style.display="none";
                break;
        }
    }
    else if(focusOn == "checkCodeEdit" || focusOn == "nameEdit" || focusOn == "mailEdit" || focusOn == "phoneNumEdit")
    {
        top.moveUp();
    }
}
function toDown()
{
    if (focusOn == "checkCode")
    {
        if (positionV == 0)
        {
            positionV = 1;
            $("inputFocus").style.display="none";
            $("dialogButtonFocus").style.display="block";
        }
        else
        {
            positionV = 0;
            $("inputFocus").style.display="block";
            $("dialogButtonFocus").style.display="none";
        }
    }
    else if (focusOn == "customerCenter")
    {
        switch (positionV)
        {
            case 0:
                positionV=1;
                $("inputFocus").style.top=390+"px";
                break;
            case 1:
                positionV=2;
                $("inputFocus").style.top=450+"px";
                break;
            case 2:
                positionV=3;
                $("inputFocus").style.display="none";
                $("dialogButtonFocus").style.display="block";
                break;
            case 3:
                positionV=0;
                $("inputFocus").style.top=330+"px";
                $("inputFocus").style.display="block";
                $("dialogButtonFocus").style.display="none";
                break;
        }
    }
    else if(focusOn == "checkCodeEdit" || focusOn == "nameEdit" || focusOn == "mailEdit" || focusOn == "phoneNumEdit")
    {
        top.moveDown();
    }
}

function toLeft()
{
    if (focusOn == "checkCode")
    {
        if (positionV == 0)
        {

        }
        else if (positionV == 1)
        {
            if(positionH==0)
            {
                positionH=1;
                $("dialogButtonFocus").style.left=200+"px";
            }
            else
            {
                positionH=0;
                $("dialogButtonFocus").style.left=0+"px";
            }
        }
    }
    else if (focusOn == "customerCenter")
    {
        switch (positionV)
        {
            case 3:
                if(positionH==0)
                {
                    positionH=1;
                    $("dialogButtonFocus").style.left=200+"px";
                }
                else
                {
                    positionH=0;
                    $("dialogButtonFocus").style.left=0+"px";
                }
                break;
        }
    }
    else if(focusOn == "checkCodeEdit" || focusOn == "nameEdit" || focusOn == "mailEdit" || focusOn == "phoneNumEdit")
    {
        top.moveLeft();
    }
}
function toRight()
{
    if (focusOn == "checkCode")
    {
        if (positionV == 0)
        {

        }
        else if (positionV == 1)
        {
            if(positionH==0)
            {
                positionH=1;
                $("dialogButtonFocus").style.left=200+"px";
            }
            else
            {
                positionH=0;
                $("dialogButtonFocus").style.left=0+"px";
            }
        }
    }
    else if (focusOn == "customerCenter")
    {
        switch (positionV)
        {
            case 3:
                if(positionH==0)
                {
                    positionH=1;
                    $("dialogButtonFocus").style.left=200+"px";
                }
                else
                {
                    positionH=0;
                    $("dialogButtonFocus").style.left=0+"px";
                }
                break;
        }
    }
    else if(focusOn == "checkCodeEdit" || focusOn == "nameEdit" || focusOn == "mailEdit" || focusOn == "phoneNumEdit")
    {
        top.moveRight();
    }
}

function toOK()
{
    if (focusOn == "checkCode")
    {
        if (positionV == 0)
        {
            //激活码输入不要调出键盘
            /*try
            {
                top.mouseCallBack.funcOk=toOk;
                top.mouseCallBack.funcBack=toBack;
                top.mouseCallBack.funcMouseUp=repeatkeyupproc;
            }catch(er)
            {
                top.g_channel.testLog("manual:"+er)
            }
            top.showKeyBoard();
            focusOn = "checkCodeEdit";*/
        }
        else
        {
            //ok button or cancel button
            console.log("--hzm took QRcode get checkCode = " + checkCode + "  length = " + checkCode.length);
            if (positionH == 1)//激活
            {
                //激活码算法：sn码后5位 * 9 + 2018。得到结果后不足6位前面加0
                var z = parseInt(sn.substr(sn.length-5,5));
                var k = z * 9 + 2018;
                console.log("--hzm took QRcode k  = " + k);
                if (checkCode == "" || checkCode.length <= 5 || checkCode != k)
                {
                    console.log("--hzm took QRcode checkCode error !! ");
                    $("remindWord").style.display="block";
                    $("remindWord").innerHTML = "Verification code error.";
                    setTimeout(function () {
                        $("remindWord").style.display="none";
                    },2000);
                }
                else
                {
                    setting.setProperty("app.ui.skipQRCode","100");
                    toBack();
                }
            }
            else//跳过激活
            {
                console.log("--hzm took QRcode and cancel this showQRCodeTimers = " + showQRCodeTimers);
                if (showQRCodeTimers >= 3)//第三次跳过，之后将不再显示
                {
                    setting.setProperty("app.ui.skipQRCode","200");
                }
                else
                {
                    showQRCodeTimers++;
                    setting.setProperty("app.ui.skipQRCode",showQRCodeTimers);
                }
                toBack();
            }
        }
    }
    else if(focusOn == "checkCodeEdit" )
    {
        var key=top.toOkGetChar();
        if(key=="back")
        {
            if(checkCode.length>0)
            {
                checkCode=checkCode.substring(0,checkCode.length-1);
                $("checkCodeContent").innerHTML=top.replaceT(checkCode);
            }

            //NT563平台持续按输入法的回退按键会导致setInterval里的函数无限循环执行，从而导致输入法无法输入字符
            if (repeatTimerIndex != 0)
            {
                clearInterval(repeatTimerIndex);
                repeatTimerIndex = 0;
            }

            repeatTimerIndex = setInterval(function() {
                if(checkCode.length>0)
                {
                    checkCode=checkCode.substring(0,checkCode.length-1);
                    $("checkCodeContent").innerHTML=top.replaceT(checkCode);
                }
            },300);
        }
        else if(key=="!one" || key =="shift" || key=="symPage1" || key=="symPage2" ||key=="changeChar" || key=="changeLang" || key=="setting")
        {
            return;
        }
        else
        {
            if(checkCode.length<32)
            {
                checkCode=checkCode+key;
                $("checkCodeContent").innerHTML=top.replaceT(checkCode);
            }
        }
    }
    else if (focusOn == "customerCenter")
    {
        switch (positionV)
        {
            case 0:
                try
                {
                    top.mouseCallBack.funcOk=toOk;
                    top.mouseCallBack.funcBack=toBack;
                    top.mouseCallBack.funcMouseUp=repeatkeyupproc;
                }catch(er)
                {
                    top.g_channel.testLog("manual:"+er)
                }
                top.showKeyBoard();
                focusOn = "nameEdit";
                break;
            case 1:
                try
                {
                    top.mouseCallBack.funcOk=toOk;
                    top.mouseCallBack.funcBack=toBack;
                    top.mouseCallBack.funcMouseUp=repeatkeyupproc;
                }catch(er)
                {
                    top.g_channel.testLog("manual:"+er)
                }
                top.showKeyBoard();
                focusOn = "mailEdit";
                break;
            case 2:
                //电话号码输入不要调出键盘
                /*try
                {
                    top.mouseCallBack.funcOk=toOk;
                    top.mouseCallBack.funcBack=toBack;
                    top.mouseCallBack.funcMouseUp=repeatkeyupproc;
                }catch(er)
                {
                    top.g_channel.testLog("manual:"+er)
                }
                top.showKeyBoard();
                focusOn = "phoneNumEdit";*/
                break;
            case 3:
                //ok button or cancel button
                console.log("--hzm to ok customerCenter username = " + username + "  mail = " + mail + "  phoneNum = " + phoneNum);
                if (positionH == 1)//终端上报激活状态
                {
                    var status = 1;
                    var data = "sn=" + sn + "&token=" + token + "&status=" + status + "&contryCode=" + countryCode + "&clientCode=" + clientCode + "&email=" + mail + "&username=" + username + "&phoneNum=" + phoneNum;
                    //var url = "http://testoverseabaodan.api.my7v.com/auth/activity/activationStatus?"+data;//测试链接
                    var url = "http://overseabaodan.api.my7v.com/auth/activity/activationStatus?"+data;
                    console.log("--hzm ok customerCenter url = " + url);
                    ajaxPost(url);
                    //终端上报设备信息
                    //var infourl = "https://tvactivity.api.my7v.com/auth/activity/deviceInfo";
                    //var type = 1;
                    //var infodata = "sn=" + sn + "&token=" + token + "&status=" + status + "&type=" + type + "&did=" + top.getDeviceId() + "&mac=" + top.getMac() + "&clienttype=" + cType + "&uuid=" + cType + "&dnum=" + top.getDnum();
                }
                else //取消上报激活状态
                {
                    console.log("--hzm ok customerCenter cancel button click !  showCustomerCenterTimers = " +showCustomerCenterTimers);
                    if (showCustomerCenterTimers >= 3)//第三次跳过，之后将不再显示
                    {
                        setting.setProperty("app.ui.skipCustomerCenter","200");
                    }
                    else
                    {
                        showCustomerCenterTimers++;
                        setting.setProperty("app.ui.skipCustomerCenter",showCustomerCenterTimers);
                    }
                    toBack();
                }
                break;
        }
    }
    else if (focusOn == "nameEdit")
    {
        var key=top.toOkGetChar();
        if(key=="back")
        {
            if(username.length>0)
            {
                username=username.substring(0,username.length-1);
                $("ccInputnameContent").innerHTML=top.replaceT(username);
            }

            //NT563平台持续按输入法的回退按键会导致setInterval里的函数无限循环执行，从而导致输入法无法输入字符
            if (repeatTimerIndex != 0)
            {
                clearInterval(repeatTimerIndex);
                repeatTimerIndex = 0;
            }

            repeatTimerIndex = setInterval(function() {
                if(username.length>0)
                {
                    username=username.substring(0,username.length-1);
                    $("ccInputnameContent").innerHTML=top.replaceT(username);
                }
            },300);
        }
        else if(key=="!one" || key =="shift" || key=="symPage1" || key=="symPage2" ||key=="changeChar" || key=="changeLang" || key=="setting")
        {
            return;
        }
        else
        {
            if(username.length<32)
            {
                username=username+key;
                $("ccInputnameContent").innerHTML=top.replaceT(username);
            }
        }
    }
    else if (focusOn == "mailEdit")
    {
        var key=top.toOkGetChar();
        if(key=="back")
        {
            if(mail.length>0)
            {
                mail=mail.substring(0,mail.length-1);
                $("ccInputmailContent").innerHTML=top.replaceT(mail);
            }

            //NT563平台持续按输入法的回退按键会导致setInterval里的函数无限循环执行，从而导致输入法无法输入字符
            if (repeatTimerIndex != 0)
            {
                clearInterval(repeatTimerIndex);
                repeatTimerIndex = 0;
            }

            repeatTimerIndex = setInterval(function() {
                if(mail.length>0)
                {
                    mail=mail.substring(0,mail.length-1);
                    $("ccInputmailContent").innerHTML=top.replaceT(mail);
                }
            },300);
        }
        else if(key=="!one" || key =="shift" || key=="symPage1" || key=="symPage2" ||key=="changeChar" || key=="changeLang" || key=="setting")
        {
            return;
        }
        else
        {
            if(mail.length<32)
            {
                mail=mail+key;
                $("ccInputmailContent").innerHTML=top.replaceT(mail);
            }
        }
    }
    else if (focusOn == "phoneNumEdit")
    {
        var key=top.toOkGetChar();
        if(key=="back")
        {
            if(phoneNum.length>0)
            {
                phoneNum=phoneNum.substring(0,phoneNum.length-1);
                $("ccInputmobileContent").innerHTML=top.replaceT(phoneNum);
            }

            //NT563平台持续按输入法的回退按键会导致setInterval里的函数无限循环执行，从而导致输入法无法输入字符
            if (repeatTimerIndex != 0)
            {
                clearInterval(repeatTimerIndex);
                repeatTimerIndex = 0;
            }

            repeatTimerIndex = setInterval(function() {
                if(phoneNum.length>0)
                {
                    phoneNum=phoneNum.substring(0,phoneNum.length-1);
                    $("ccInputmobileContent").innerHTML=top.replaceT(phoneNum);
                }
            },300);
        }
        else if(key=="!one" || key =="shift" || key=="symPage1" || key=="symPage2" ||key=="changeChar" || key=="changeLang" || key=="setting")
        {
            return;
        }
        else
        {
            if(phoneNum.length<32)
            {
                phoneNum=phoneNum+key;
                $("ccInputmobileContent").innerHTML=top.replaceT(phoneNum);
            }
        }
    }
}
function toBack()
{
    if (focusOn == "checkCode" || focusOn == "customerCenter")
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
    else if(focusOn == "checkCodeEdit")
    {
        if(top.tobackKeyBoard()=="menuBack")
        {
            focusOn = "checkCode";
        }
    }
    else if(focusOn == "nameEdit" || focusOn == "mailEdit" || focusOn == "phoneNumEdit")
    {
        if(top.tobackKeyBoard()=="menuBack")
        {
            focusOn = "customerCenter";
        }
    }
}

function init()
{
    top.initTextDirection(window);
    showQRCodeTimers = setting.getProperty("app.ui.skipQRCode","0");
    showCustomerCenterTimers = setting.getProperty("app.ui.skipCustomerCenter","0");
    console.log("--hzm init showQRCodeTimers = " + showQRCodeTimers);
    console.log("--hzm init showCustomerCenterTimers = " + showCustomerCenterTimers);
    var buttonList = $("buttonList").getElementsByTagName("div");
    buttonList[0].innerHTML = top.okCancel[1];
    buttonList[1].innerHTML = top.okCancel[0];
    sn = factory.getProductInfo().sn;
    token = hex_md5(sn+"policy2016@tcl.com");
    setting.setProperty("app.ui.token",token);
    t = setting.getOSTimeCount();
    countryCode = setting.zoneCode;
    clientCode = setting.manufacturer;
    cType = factory.getClientTypeKey();
    console.log("--hzm init sn = " + sn + "  token = " + token + "  t = " + t + "  countryCode = " + countryCode + "  clientCode = " + clientCode + "  cType = " + cType);

    if(setting.networkStatus())
    {
        showCustomerCenter();
    }
    else
    {
        initCheckCode();
        getRealurl(makeQrcode);//回调函数，避免动画字符卡住
    }
	addMouseListener();
}

function initCheckCode()
{
    $("checkCodeInput").style.display = "block";
    $("QRSacn").style.display = "block";
    $("titleName").innerHTML = activateTVWords[0];//"Activate your TV";
    $("checkCodeTitle").innerHTML = activateTVWords[1];//"Please enter verification code.";
    $("descriptionWords").innerHTML = activateTVWords[2];//"Enjoy more services after activating your TV";
    $("scanWords").innerHTML = activateTVWords[3];//"Scan QR code to obtain verification code.";
    $("snNum").innerHTML = "SN: " + sn.replace(/(.{4})/g,' $1 ');
    $("qrcodetitle").innerHTML = activateTVWords[4];//"You can also get the verification code as follow:";
    //var content = "Call 1800588880, Press 1, and then provide SN to get verification code.";
    $("qrcodcontent").innerHTML = activateTVWords[5].replace(/SN/,sn.replace(/(.{4})/g,' $1 '));
}
//定义主函数，回调函数作为参数
var realUrl = "";
function getRealurl(callback) {
    console.log('i am main');
    focusOn = "checkCode";
    startloading();
    //var url = "http://testoverseabaodan.api.my7v.com/activity/index.html?";//测试连接
    var url = "http://overseabaodan.api.my7v.com/activity/index.html?";
    realUrl = url + "sn="+ sn + "&token=" + token + "&t=" + t + "&countryCode=" + countryCode + "&clientCode=" + clientCode + "&cType=" + cType;
    console.log("--hzm test realUrl = " + realUrl);
    callback();
}

//定义回调函数
function makeQrcode(){
    //setTimeout("console.log('我是回调函数')", 3000);//模仿耗时操作
    console.log('i am sub');
    /**
     * 二维码生成
     */
    setTimeout(function () {
        if(loadingTimer)
        {
            clearTimeout(loadingTimer);
        }
        $("loading").style.display = "none";
        var qrcode = new QRCode(document.getElementById("qrcode"), { width : 200, height : 200 });
        qrcode.makeCode(realUrl);
    },2000);
    /*****二维码******/
}
/*
 描述：开始加载等待
 */
function startloading()
{
    $("loading").src = loadingImgs[loadingCount%8];
    loadingCount++;
    loadingTimer=setTimeout("startloading()",300);
}
function showCustomerCenter()
{
    $("titleName").innerHTML = activateTVWords[6];//"Customer Center";
    $("descriptionWords").innerHTML = activateTVWords[7];//"Please fill in the information,you will get your warranty service and we will extend your service for one month";
    $("ccInputnameTitle").innerHTML = top.fileNameText+": ";//"Name: ";
    $("ccInputmailTitle").innerHTML = top.emailWord+" ";//"E-mail: ";
    $("ccInputmobileTitle").innerHTML = top.contentSpan1_7Array[3]+": ";//"Mobile: ";

    positionV = 0;
    $("QRSacn").style.display = "none";
    $("checkCodeInput").style.display = "none";
    $("dialogButtonFocus").style.display = "none";
    $("inputFocus").style.display = "block";
    $("inputFocus").style.left = 561+"px";
    $("inputFocus").style.top = 330+"px";
    $("customerCenter").style.display = "block";
    focusOn = "customerCenter";
}
// ajax 对象
function ajaxObject() {
    var xmlHttp;
    try {
        // Firefox, Opera 8.0+, Safari
        xmlHttp = new XMLHttpRequest();
    }
    catch (e) {
        // Internet Explorer
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                alert("您的浏览器不支持AJAX！");
                return false;
            }
        }
    }
    return xmlHttp;
}

// ajax post请求：
function ajaxPost ( url , data ) {
    var ajax = ajaxObject();
    ajax.open( "get" , url , true );
    //ajax.setRequestHeader( "Content-Type" , "application/x-www-form-urlencoded" );
    ajax.onreadystatechange = function () {
        if( ajax.readyState == 4 ) {
            if( ajax.status == 200 ) {
                //fnSucceed( ajax.responseText );
                console.log("--hzm test ajaxPost success ajax.responseText = " + ajax.responseText);
                setting.setProperty("app.ui.skipCustomerCenter","100");
            }
            else {
                //fnFail( "HTTP请求错误！错误码："+ajax.status );
                console.log("--hzm test ajaxPost fail error code = " + ajax.status);
            }
            toBack();
        }
        else {
            //fnLoading();
            console.log("--hzm test ajaxPost loading ");
        }
    }
    //ajax.send( data );
    ajax.send();
}

function checkInput(keycode,focusOn,index)//修改SSID的函数
{
    //第一次的时候
    var inputChar = '';
    if (oldRcKeyTimeOut != 0)
    {
        clearTimeout(oldRcKeyTimeOut);
        oldRcKeyTimeOut = 0;
    }

    if (pressKeyFlag==0)
    {
        console.log("--hzm checkInput 1");
        pressKeyFlag = 1;
        if ((keycode>=32 && keycode<=47) || (keycode>=58 && keycode<=96) ||(keycode>=353 && keycode<=378)||(keycode>=123 && keycode<=126)||(keycode>=293 && keycode<=296))
        {
            keyCount = 0;
            pressKeyFlag = 0;
            if((keycode>=32 && keycode<=47) || (keycode>=58 && keycode<=96)||(keycode>=123 && keycode<=126))
                inputChar = alphabet[keycode-32];
            else if(keycode>=353 && keycode<=378)
            {
                inputChar = alphabet[keycode-288];
            }
            else
            {
                inputChar = alphabet[keycode-288]
            }
        }
        else
        {
            var keyTableLine = keycode - 48;
            if (keyCount>=char_table[keyTableLine].length)
            {
                keyCount = 0;
            }
            if(1 ==char_table[keyTableLine].length)
            {
                pressKeyFlag = 0;
            }
            inputChar = char_table[keyTableLine][keyCount];
        }
        if (focusOn == "checkCode")
        {
            if (index == 0)
            {
                if(checkCode.length<32)
                {
                    checkCode=checkCode+inputChar;
                    $("checkCodeContent").innerHTML=top.replaceT(checkCode);
                }
            }
        }
        else if (focusOn == "customerCenter")
        {
            switch (index)
            {
                case 0:
                    if(username.length<32)
                    {
                        username=username+inputChar;
                        $("ccInputnameContent").innerHTML=top.replaceT(username);
                    }
                    break;
                case 1:
                    if(mail.length<32)
                    {
                        mail=mail+inputChar;
                        $("ccInputmailContent").innerHTML=top.replaceT(mail);
                    }
                    break;
                case 2:
                    if(phoneNum.length<32)
                    {
                        phoneNum=phoneNum+inputChar;
                        $("ccInputmobileContent").innerHTML=top.replaceT(phoneNum);
                    }
                    break;
            }
        }
        oldRcKeyTimeOut = setTimeout(function(){pressKeyFlag = 0;keyCount = 0;}, 800);
    }
    else//其他时候
    {
        console.log("--hzm checkInput 2");
        //输入激活码或者电话号码时不需要字母，只需要数字字符即可。isNum判断是否输入激活码或者电话号码
        var isNum = 0;
        if ((focusOn == "checkCode" && index == 0) || (focusOn == "customerCenter" && index == 2))
        {
            isNum = 1;
        }
        if (oldKeyCode == keycode && isNum == 0)
        {
            if ((keycode>=32 && keycode<=47) || (keycode>=58 && keycode<=96) ||(keycode>=353 && keycode<=378)||(keycode>=123 && keycode<=126)||(keycode>=293 && keycode<=296))
            {
                keyCount = 0;
                if((keycode>=32 && keycode<=47) || (keycode>=58 && keycode<=96)||(keycode>=123 && keycode<=126))
                    inputChar = alphabet[keycode-32];
                else if(keycode>=353 && keycode<=378)
                {
                    inputChar = alphabet[keycode-288];
                }
                else
                {
                    inputChar = alphabet[keycode-288]
                }
            }
            else
            {
                keyCount++;
                var keyTableLine = keycode - 48;
                if (keyCount>=char_table[keyTableLine].length)
                {
                    keyCount = 0;
                }
                inputChar = char_table[keyTableLine][keyCount];
            }
            console.log("--hzm in checkInput the focusOn is "+focusOn);
            if (focusOn == "checkCode")
            {
                if (index == 0)
                {
                    if(checkCode.length<32)
                    {
                        checkCode=checkCode.substring(0,checkCode.length-1);
                        checkCode=checkCode+inputChar;
                        $("checkCodeContent").innerHTML=top.replaceT(checkCode);
                    }
                }
            }
            else if (focusOn == "customerCenter")
            {
                switch (index)
                {
                    case 0:
                        if(username.length<32)
                        {
                            username=username.substring(0,username.length-1);
                            username=username+inputChar;
                            $("ccInputnameContent").innerHTML=top.replaceT(username);
                        }
                        break;
                    case 1:
                        if(mail.length<32)
                        {
                            mail=mail.substring(0,mail.length-1);
                            mail=mail+inputChar;
                            $("ccInputmailContent").innerHTML=top.replaceT(mail);
                        }
                        break;
                    case 2:
                        if(phoneNum.length<32)
                        {
                            phoneNum=phoneNum.substring(0,phoneNum.length-1);
                            phoneNum=phoneNum+inputChar;
                            $("ccInputmobileContent").innerHTML=top.replaceT(phoneNum);
                        }
                        break;
                }
            }
            oldRcKeyTimeOut = setTimeout(function(){pressKeyFlag = 0;keyCount = 0;}, 800);
        }
        else
        {
            keyCount = 0;
            if ((keycode>=32 && keycode<=47) || (keycode>=58 && keycode<=96) ||(keycode>=353 && keycode<=378)||(keycode>=123 && keycode<=126)||(keycode>=293 && keycode<=296))
            {
                if((keycode>=32 && keycode<=47) || (keycode>=58 && keycode<=96)||(keycode>=123 && keycode<=126))
                    inputChar = alphabet[keycode-32];
                else if(keycode>=353 && keycode<=378)
                {
                    inputChar = alphabet[keycode-288];
                }
                else
                {
                    inputChar = alphabet[keycode-288]
                }
            }
            else
            {
                var keyTableLine = keycode - 48;
                inputChar = char_table[keyTableLine][keyCount];
            }
            if (focusOn == "checkCode")
            {
                if (index == 0)
                {
                    if(checkCode.length<32)
                    {
                        checkCode=checkCode+inputChar;
                        $("checkCodeContent").innerHTML=top.replaceT(checkCode);
                    }
                }
            }
            else if (focusOn == "customerCenter")
            {
                switch (index)
                {
                    case 0:
                        if(username.length<32)
                        {
                            username=username+inputChar;
                            $("ccInputnameContent").innerHTML=top.replaceT(username);
                        }
                        break;
                    case 1:
                        if(mail.length<32)
                        {
                            mail=mail+inputChar;
                            $("ccInputmailContent").innerHTML=top.replaceT(mail);
                        }
                        break;
                    case 2:
                        if(phoneNum.length<32)
                        {
                            phoneNum=phoneNum+inputChar;
                            $("ccInputmobileContent").innerHTML=top.replaceT(phoneNum);
                        }
                        break;
                }
            }
            oldRcKeyTimeOut = setTimeout(function(){pressKeyFlag = 0;keyCount = 0;}, 800);
        }
    }
    oldKeyCode = keycode;
}
function addMouseListener()
{
	// $("okButton").onmousedown = function(evt){
	// 	if(evt.button == 0){//ok key
	// 		toOK();
	// 	}
	// }
}