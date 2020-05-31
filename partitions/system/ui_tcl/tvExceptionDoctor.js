var user_select = -1;
document.onkeydown = key_event_handle;
document.onsystemevent = notifyProcess;
var text_content = top.tvDoctor;
var doctor = top.g_tvfaultdiagnosis;
var netTipShow = false;

var timeOutId = 0; //lizz added for time out id 2015-10-29
var backNum = 0;

var change_time=200;
var changeCheck;
var index = 0;
var right_img_signal = 0;
var speed=10;
var MarqueeCheck = 0;
function page_onload(){
    top.initTextDirection(window);
	testLog(" ------page_onload ------- ");
var title = document.getElementById("title");
var hint = document.getElementById("prompt_words");
//var left_title = document.getElementById("left-title");
//var left_content = document.getElementById("left-content");
var right_title = document.getElementById("right-title");
var right_content = document.getElementById("right-content");
var dev_infor = document.getElementById("dev_infor");
title.innerHTML = text_content[0];
hint.innerHTML = text_content[1];
//document.getElementById("left-action").style.display="block";
document.getElementById("right-action").style.display="block";
//left_title.innerHTML = text_content[2];
//left_content.innerHTML = text_content[3];

//modified by lizz 2015-12-04
if(top.g_isStartRemount == 0){
	right_title.innerHTML = text_content[4];
}else {
	right_title.innerHTML = text_content[11];
}
//end by lizz 2015-12-04

right_content.innerHTML = text_content[5];
//var registerNum = top.g_factory.getRegisterCode();
//var productNum = top.g_setting.getUserId;
var registerNum = tcl.factory.getSnNum();
var productNum = tcl.factory.getUserID();
//var productNum =top.getDnum();
testLog(" page_onload registerNum "+registerNum+" productNum "+productNum);
dev_infor.innerHTML = text_content[6]+registerNum+"     "+text_content[7]+productNum;
left_action_onfocus();
right_img_signal = document.getElementById("img_action_right_sub_id");
right_action_onfocus();
}

function testLog(tmp)
{
	var str = " tvExceptionDoctors===>" + tmp;
	console.log(str);
}


function key_event_handle(evt){
   testLog("key_event_handle "+window.event.keyCode);
	switch(window.event.keyCode){
		case top.VK_LEFT:    //left key
		//case 49://test: "1" present left
		//testLog("key_event_handle LEFT");
	    //left_action_onfocus();
		break;
	    case top.VK_RIGHT: //right key
		//case 50://test:"2" present right
		//testLog("key_event_handle RIGHT");
	    //right_action_onfocus();
		break;
        case top.VK_ENTER: //enter key
		//testLog("key_event_handle ENTER");
		//if(user_select == 0){
			//leftDoEnter();
		//}else{
		    rightDoEnter();
		//}
		break;
		case top.VK_BACK:
		case top.VK_EXIT:
		case 365:
		//testLog("key_event_handle EXIT");
		toBack();
		break;
        case top.VK_VOLUME_DOWN:
        top.handleVolume(-1);
        break;
        case top.VK_VOLUME_UP:
        top.handleVolume(1);
        break;
	 case top.VK_POWER:
        case top.VK_MUTE:
		top.keyDownProcess(evt);
		break;		
	case 113:
		top.jumpPage();
		//toHomePage();
		//parent.returnPopWindow(2);
		top.restartTimeout();
		//top.keyDownProcess(evt);
		break;
        default:
            top.keyDownProcess(evt);
            break;		
	}
}

function leftDoEnter(){
    left_action_onfocus();
    /*no action now, add after define*/
   var netStatus = top.checkNetStatus();
   testLog("leftDoEnter!!! netStatus is "+netStatus);
   if(netStatus == false){
	    showNetTips();
   }else{

   }
}

function rightDoEnter(){
   //right_action_onfocus();
   
	//begin,for stop long connect 2015-12-04 by lizz
	if(top.g_isStartRemount == 1){
		top.g_isStartRemount = 0;
		doctor.setRemoteParam(0);
		//document.getElementById("right-title").innerHTML = text_content[11];
		top.$("globleShow").contentWindow.hidTvFaultDiagnosisTip();		
		toBack();	
		return;		
	}
	//end 2015-12-04 by lizz
	
	var netStatus = top.checkNetStatus();
	testLog("rightDoEnter!!! netStatus is ="+netStatus+" inition ="+top.tvFaultInited);
	if(netStatus == false){
		showNetTips();
	}else{
		//no long connection
		if(top.tvFaultInited == 0){
			doctor.init();
			top.tvFaultInited = 1;
		}
		testLog("doEnter1111!!!");
		if(top.g_isStartRemount == 0) {
			top.g_isStartRemount = 1;
			doctor.setRemoteParam(1);
 			//doctor.startLongConnect();	

			testLog("doEnter getTvFaultShowType =" +top.$("globleShow").contentWindow.getTvFaultShowType());
			if(top.$("globleShow").contentWindow.getTvFaultShowType() == -1) {
				if(top.g_tvfaultdiagnosis.getConnectState() == top.LONG_CONNECT_OK){
					top.$("globleShow").contentWindow.showTvFaultDiagnosisTip(top.SHOW_CONNECTED);
				} else {
					top.$("globleShow").contentWindow.showTvFaultDiagnosisTip(0);
				}
			}
		} 
		toBack();			

    }
}

function stopAnimation()
{
	testLog("stopAnimation-----");
	set_action_bg(1,false);
	//set_action_bg(0,false);
	clearTimeout(changeCheck);
	//clearTimeout(moveCheck);
}
function restartAnimation()
{
	testLog("restartAnimation-----user_select = "+user_select);
	set_action_bg(1,true);
	//set_right_action_img();
	changeCheck=setTimeout(set_right_action_img,change_time);
	/*
	if(user_select == 1)
	{
		set_action_bg(0,false);
		set_action_bg(1,true);
		clearTimeout(moveCheck);
		set_right_action_img();
	}
	else
	{
		set_action_bg(1,false);
		set_action_bg(0,true);
		clearTimeout(changeCheck);
		move();
	}
	*/
}
function showNetTips()
{
   // testLog("enter showNetTips-----");
	stopAnimation();
	document.getElementById("netTips").style.display="block";
	document.getElementById("tipName").innerHTML=top.others[28];
	document.getElementById("tipContent").innerHTML=top.homePageRemind[0];
	netTipShow = true;

	clearTimeout(timeOutId);
	timeOutId = setTimeout("hidNetTips()", 3000);
}

function hidNetTips(){
   document.getElementById("netTips").style.display="none";
    netTipShow = false;
    restartAnimation();
}

function toBack(){
     testLog("toBack-----------");
     clearTimeout(changeCheck);
     clearTimeout(MarqueeCheck);
 /*    if(top.opentvfaultdiagnosis_hotkey == 0)
     {
         top.focusToIndexHtml(1);
         top.restartTimeout();
     }
     else
     {*/
         //top.jumpPage();
    top.jumpHotkeyPage("option0624.html");
	top.restartTimeout();
     //}	
	 /*top.$("main").style.display = "block";
	 top.$("operatePage").src = "";
	 top.main.focus();
     top.setFrameFocusPage("main");*/
}

function left_action_onfocus(){
    if(user_select != 0){
        set_action_bg(1,false);
        set_action_text(1,false);
        set_action_bg(0,true);
        set_action_text(0,true);
        user_select = 0;
        clearTimeout(changeCheck);
        move();
    }
}
var demo=document.getElementById("action-content");
var demo1=document.getElementById("right-content");
var demo2=document.getElementById("right-content-2");
function Marquee(){
   // if(demo1.offsetHeight > demo.offsetHeight){
	//demo2.innerHTML=demo1.innerHTML;

       /* if(demo.scrollTop>=demo1.offsetHeight)
            demo.scrollTop-=demo2.offsetHeight;
        else{
            demo.scrollTop = demo.scrollTop+2;
        }*/

	if(demo.scrollTop-demo1.scrollHeight -35<=0)  //当滚动条向下滚动的距离小于等于demo1滚动的高度时;
		demo.scrollTop = demo.scrollTop+2;  //滚动条滚动加1
	else{ //当滚动体滚动的距离等于demo1的滚动高度时;
		demo.scrollTop=-35;//滚动条回到最顶端
	}

	MarqueeCheck = setTimeout(Marquee,speed);		
   //}
}
//var MyMar=setInterval(Marquee,speed);
//demo.onmouseover=function() {clearInterval(MyMar);};
//demo.onmouseout=function() {MyMar=setInterval(Marquee,speed);}	;

function right_action_onfocus(){

    //setInterval(Marquee,speed);
    set_action_bg(1,true);
    set_action_text(1,true);
    set_right_action_img();
    if(demo1.offsetHeight > demo.offsetHeight){
	 demo2.innerHTML=demo1.innerHTML;
	 demo2.style.color = demo1.style.color;
        Marquee();
    }
	
/*
    if(user_select != 1){
        set_action_bg(0,false);
        set_action_text(0,false);
        set_action_bg(1,true);
        set_action_text(1,true);
        user_select = 1;
        clearTimeout(moveCheck);
        set_right_action_img();
	}
*/

}

//index:0-left;1:right;
function set_action_bg(index, focus){
   var right_action = document.getElementById("right-action");
   if(focus){
        right_action.className="action-item-right-focus";
   }else{
        right_action.className="action-item-right";
   }
	
/*
  var left_action = document.getElementById("left-action");
  var right_action = document.getElementById("right-action");
  if(index == 0){
    if(focus){
	   // left_action.style.background="url(./images/tvExceptionDoctor/focus.png) no-repeat";
	   left_action.className="action-item-left-focus";
	}else{
	  //  left_action.style.background="url(./images/tvExceptionDoctor/tv_health_left_icon.png) no-repeat 100% 100%";
	  left_action.className="action-item-left";
	}
  }else{
   if(focus){
      //  right_action.style.background="url(./images/tvExceptionDoctor/focus.png)";
        right_action.className="action-item-right-focus";
	}else{
	   // right_action.style.background="url(./images/tvExceptionDoctor/tv_health_right_icon.png)";
	   right_action.className="action-item-right";
	}
  }
  */
}

function set_action_text(index, focus){
	var right_title = document.getElementById("right-title");
	var right_content = document.getElementById("right-content");
	
	if(focus){
		right_title.style.color="#000000";
		right_content.style.color="#000000";
	}else{
		right_title.style.color="#ffffff";
		right_content.style.color="#ffffff";
	}
/*	
	var left_title = document.getElementById("left-title");
	var left_content = document.getElementById("left-content");
	var right_title = document.getElementById("right-title");
	var right_content = document.getElementById("right-content");
	if(index == 0){
        if(focus){
	        left_title.style.color="#000000";
	        left_content.style.color="#000000";
	    }else{
	        left_title.style.color="#ffffff";
	        left_content.style.color="#ffffff";
	    }
	}else{
	    if(focus){
	        right_title.style.color="#000000";
	        right_content.style.color="#000000";
	    }else{
	        right_title.style.color="#ffffff";
	        right_content.style.color="#ffffff";
	    }
	}
*/	
}
//[S:]left focus animation
var move_time=30;
var moveCheck;
var td2 = document.getElementById("td2");
var td1 = document.getElementById("td1");
var div1 = document.getElementById("left_subimg_div");
td2.innerHTML=td1.innerHTML;
function move(){
//testLog("td2 width"+td2.offsetWidth+" div1 scroll left"+div1.scrollLeft);
if(div1.scrollLeft>0){
    div1.scrollLeft--;
}else{
   div1.scrollLeft=td1.offsetWidth;
}
moveCheck=setTimeout(move,move_time);
}
//[E:]left focus animation

//[S:]right focus animation

function set_right_action_img(){
    testLog("set_right_action_img  index = " +index);
   var path = "images/tvExceptionDoctor/remote_signal_0.png";
 switch(index%4){
    case 0:
		//testLog("set_right_action_img 1");
	path = "images/tvExceptionDoctor/remote_signal_0.png";
	index++;
	break;
    case 1:
	index++;
	//testLog("set_right_action_img 2");
	path = "images/tvExceptionDoctor/remote_signal_1.png";
	break;
    case 2:
	index++;
	//testLog("set_right_action_img 3");
	path = "images/tvExceptionDoctor/remote_signal_2.png";
	break;
    case 3:
	index = 0;
	//testLog("set_right_action_img 4");
	path = "images/tvExceptionDoctor/remote_signal_3.png";
	break;
 }
 //testLog("set_right_action_img 5");
 right_img_signal.src=path;
// testLog("set_right_action_img 6");
 changeCheck=setTimeout(set_right_action_img,change_time);
 //testLog("set_right_action_img 7");
}
//[E:]right focus animation


function notifyProcess(evt) {
	var msg = evt.which;
	//testLog("notifyProcess evt is "+msg+" netTipShow "+netTipShow);
	switch (msg) {
		case top.E_NETWORK_CONNECT_TEST_SUCCESS:
		case top.E_WIRE_CONNECT_SUCCESS:
		case top.E_WIRELESS_CONNECT_SUCCESS:
		testLog("notifyProcess evt is E_NETWORK_CONNECT_TEST_SUCCESS");
		if(netTipShow){
			 hidNetTips();
		}
            top.systemEventProc(evt);
            break;			
		case top.E_NETWORK_CONNECT_TEST_FAIL:
		case top.E_WIRE_CONNECT_FAILURE:
		case top.E_WIRELESS_CONNECT_FAILURE:	
		    testLog("notifyProcess evt is E_NETWORK_CONNECT_TEST_FAIL");
			top.systemEventProc(evt);
			break;
		case top.E_TERMINAL_MANAGER_START:
			if(top.g_isStartRemount == 0)
			{
				top.g_isStartRemount = 1;
				document.getElementById("right-title").innerHTML = text_content[11];
			}
			top.systemEventProc(evt);
			break;
		default:
			if(top.appOpenFlag==0)
			{
				top.systemEventProc(evt);
			}
			break;
	}
}

function toHomePage()
{
       parent.returnPopWindow(2);
	top.restartTimeout();
	top.g_isMediaCenter = top.NDM_Others;
	top.g_temp = "";
	top.$("main").src = top.getHomepage("?tv&media");
	top.requestFocus(top.main, 1);
}

