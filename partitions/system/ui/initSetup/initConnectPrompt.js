var initNetRemindWord       = [top.netWireConnRemind[5],top.initialTitle[1],top.initialOptions[1]];
var setting = top.g_setting;
var netFlag=0;
var jumpTimer = 0;
var recFailMsgNum = 0;
var loadingImg                     = ["../images/Loading-01.png","../images/Loading-02.png","../images/Loading-03.png","../images/Loading-04.png","../images/Loading-05.png","../images/Loading-06.png","../images/Loading-07.png","../images/Loading-08.png"];
var loadingImgNum                  = 0;
var lastwirelessfailflag           = 0;//链接网络时下层会断开上一个网络，上来的消息先是fail的消息，需要通过此标志来过滤
document.onsystemevent = notifyProcess;
function notifyProcess(evt)
{
    var msg = evt.which;
	//全局消息
	console.log("I am from PIN CODE------msg=="+msg);
	var value = evt.modifiers;
	console.log("hevens *************** revice msg = "+msg+" value is "+value);
	switch(msg)
	{
		case top.E_NETWORK_CONNECT_TEST_SUCCESS://表示网络连接成功
		case top.E_WIRELESS_CONNECT_SUCCESS:
		case top.E_WIRE_CONNECT_SUCCESS:
		{
			clearTimeout(jumpTimer);
			console.log("I rec a msg E_WIRE_CONNECT_SUCCESS=== "+msg);
			document.location.href="initConnectOkOrFail.html?"+netFlag+".1";
			top.systemEventProc(evt);
			break;
		}
		case top.E_NETWORK_CONNECT_TEST_FAIL:
		case top.E_WIRE_CONNECT_FAILURE://表示网络连接失败
		{
			if(lastwirelessfailflag == 1)
				return;
		}
		case top.E_WIRELESS_CONNECT_FAILURE:
		{
			top.systemEventProc(evt);
			if(value != 0){
				lastwirelessfailflag = 1
				console.log("Ignore CONNECT FAILURE MSG!");
				setTimeout(function(){
					lastwirelessfailflag = 0;
				},1000);
				return;
			}
			console.log("I rec a msg E_WIRE_CONNECT_SUCCESS=== "+msg);
			if(recFailMsgNum<2)
			{
				recFailMsgNum++;
				clearTimeout(jumpTimer);
				jumpTimer=setTimeout(function(){
				document.location.href="initConnectOkOrFail.html?"+netFlag+".0";
				},3000);
			}
			else
			{
				clearTimeout(jumpTimer);
				document.location.href="initConnectOkOrFail.html?"+netFlag+".0";
			}
			break;
		}
		case top.E_DATABASE_FILE_DAMAGE:
		case top.E_STR_SCREEN_OFF:
		{
			top.systemEventProc(evt);
			break;
		}
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
		case top.VK_RED:
			top.changeSource();
			top.jumpPage();
			break;
		case top.VK_BACK:
			clearTimeout(jumpTimer);
			document.location.href="initWireType.html";
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
function loading()
{
	$("loading").src=loadingImg[loadingImgNum];
	loadingImgNum++;
	if(loadingImgNum>=8)
	{
		loadingImgNum=0;
	}
}
function init()
{
    top.initTextDirection(window);
	addMouseListener();
	$("subTitleTag").innerHTML = initNetRemindWord[2];
	parent.updateInitTitle(initNetRemindWord[1]);
	$("remindWord").innerHTML=initNetRemindWord[0];
	setInterval("loading()",300);
	var tempString = window.location.search;//获取URL携带参数
	if(tempString!=null && tempString!="")
	{
		tempString = tempString.substring(tempString.indexOf("?")+1);
		var tempValue = tempString.split(".");
		switch(parseInt(tempValue[0]))
		{
			case 0:
			{
				netFlag=0;
				setting.wireNetworkDHCP();//后续接口需要更改
				//setTimeout("document.location.href='initConnectOkOrFail.html?"+netFlag+".0';",40*1000);
			}
			break;
			case 1:
			{
				netFlag=0;
				top.g_channel.testLog("ip==="+top.initWireManual.ip+"subMask===="+top.initWireManual.subMask+"gateway==="+top.initWireManual.gateway+"priDNS===="+top.initWireManual.priDNS);
				setting.wireNetworkManualSet(top.initWireManual.ip,top.initWireManual.subMask,top.initWireManual.gateway,top.initWireManual.priDNS);//后续接口需要更改
				//setTimeout("document.location.href='initConnectOkOrFail.html?"+netFlag+".0';",40*1000);
			}
			break;
			case 2:
			{
				netFlag=1;
				setTimeout("document.location.href='initConnectOkOrFail.html?"+netFlag+".0';",140*1000);
			}
			break;
			case 3:
			{
				netFlag=1;
				setTimeout("document.location.href='initConnectOkOrFail.html?"+netFlag+".0';",140*1000);
			}
			break;
			case 4:
			{
				netFlag=2;
				console.log("I am from PIN CODE");
				setTimeout("document.location.href='initConnectOkOrFail.html?"+netFlag+".0';",120*1000);
			}
			break;
			case 5:
			{
				netFlag=2;
				if(parseInt(tempValue[1])==0)
				{
					setTimeout("document.location.href='initConnectOkOrFail.html?"+netFlag+".0';",5*1000);
				}
				else if(parseInt(tempValue[1])==1)
				{
					setTimeout("document.location.href='initConnectOkOrFail.html?"+netFlag+".1';",5*1000);
				}
				else if(parseInt(tempValue[1])==2)
				{
					setTimeout(function(){
						setting.cancelPBC();
						document.location.href="initConnectOkOrFail.html?"+netFlag+".0";
						},parseInt(tempValue[2])*1000);
				}
			}
			break;
		}
	}
}

function addMouseListener()
{
	document.body.onmousedown = function(evt){evt.preventDefault();
	}
}
