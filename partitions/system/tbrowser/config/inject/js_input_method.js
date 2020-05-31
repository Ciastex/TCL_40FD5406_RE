debug("---run js_input_method.js---");

var tim_hostKeyDown = document.onkeydown;
var tim_hostKeyUp = document.onkeyup;

var tim_hostOnload = window.onload;
window.onload = tim_myOnload;

document.onsystemevent = tim_mySysEvent;

var tim_inputTypeSupport = new Array("text", "password", "email", "url");

var tim_currentElement;
var tim_softKey;
var tim_vk_IME;
var tim_curIMElement;

var TIM_IME_Heighter_IM_flag = false;

var tim_initFirstFocusId = -1;
var tim_initIMEShowId = -1;
var tim_imFocusId = -1;

var tim_vk_IME_flag = false;

var tim_time_0 = 500;
var tim_time_1 = 500;
var tim_time_2 = 500;
var tim_isIMShow = false;

function tim_myKeyDown(e)
{
	debug("----------zhongzw----myKeyDown:" + e.which);
	if(tim_hostKeyDown && tim_softKey.style.display == "none"){
		debug("--------zhongzw  tim_hostKeyDown");
		tim_hostKeyDown(e);
	}
	
	else if(e.which == 27) {
		if(tim_softKey.style.display != "none"){
			var temp = document.getElementById("tempInputID");
			if(temp)
				temp.removeAttribute("id");
			
			VirtualKeyboard.hide();
			
			tim_softKey.style.display = "none";
			tim_currentElement.removeAttribute("disabled"); 
			tim_currentElement.focus();
			
			tim_curIMElement = null;
			tim_initFirstFocusId = -1;
			tim_initIMEShowId = -1;
			tim_imFocusId = -1;
			tim_isIMShow = false;
			
			return false;
		}
		else
			return true;
	}
	else if(e.which == 38) {
		if(tim_softKey.style.display == "none")
			return true;
		try {
		if(tim_curIMElement.id == "kb_b0" || tim_curIMElement.id == "kb_b1" || tim_curIMElement.id == "kb_b2" || 
			tim_curIMElement.id == "kb_b3" || tim_curIMElement.id == "kb_b4" || tim_curIMElement.id == "kb_b5" || 
			tim_curIMElement.id == "kb_b6" || tim_curIMElement.id == "kb_b7" || tim_curIMElement.id == "kb_b8" || 
			tim_curIMElement.id == "kb_b9" || tim_curIMElement.id == "kb_b10" || tim_curIMElement.id == "kb_b11" ||
			tim_curIMElement.id == "kb_b12" || tim_curIMElement.id == "kb_b13" || tim_curIMElement.id == "kb_bbackspace" ) {
				if(tim_vk_IME && tim_vk_IME.style.display == "block" && TIM_IME_Heighter_IM_flag) {
					tim_vk_IME.firstChild.firstChild.firstChild.firstChild.nextSibling.firstChild.firstChild.firstChild.firstChild.firstChild.focus();
				}
				return false;
		}else if(tim_vk_IME && tim_vk_IME.style.display == "block" && tim_curIMElement.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id == "tim_VirtualKeyboardIME") {
			
			if(!TIM_IME_Heighter_IM_flag && tim_curIMElement.parentNode == tim_vk_IME.firstChild.firstChild.firstChild.firstChild.nextSibling.firstChild.firstChild.firstChild) {
				document.getElementById("kb_bctrl_left").firstChild.focus();
				return false;
			}
			else if(TIM_IME_Heighter_IM_flag && tim_curIMElement.parentNode == tim_vk_IME.firstChild.firstChild.firstChild.firstChild.nextSibling.firstChild.firstChild.firstChild)
				return false;
		}
		return true;
		}
		catch(e) {
		}
	}
	else if(e.which == 40) {
		if(tim_softKey.style.display == "none")
			return true;
		try {
			if(tim_curIMElement.id == "kb_bctrl_left" || tim_curIMElement.id == "kb_balt_left" || tim_curIMElement.id == "kb_bspace" || 
				tim_curIMElement.id == "kb_balt_right" || tim_curIMElement.id == "kb_bctrl_right" || tim_curIMElement.id == "kb_binput_method") {
					if(tim_vk_IME && tim_vk_IME.style.display == "block" && !TIM_IME_Heighter_IM_flag) {
						tim_vk_IME.firstChild.firstChild.firstChild.firstChild.nextSibling.firstChild.firstChild.firstChild.firstChild.firstChild.focus();
						return false;
					}
				return false;	
			}
			else if(tim_curIMElement.id == "kb_b45") {
				document.getElementById("kb_balt_right").firstChild.focus();
				return false;
			}
			else if(tim_vk_IME && tim_vk_IME.style.display == "block" && tim_curIMElement.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id == "tim_VirtualKeyboardIME") {
				if(tim_vk_IME.firstChild.firstChild.firstChild.nextSibling.firstChild.firstChild) {
					tim_vk_IME.firstChild.firstChild.firstChild.nextSibling.firstChild.firstChild.addEventListener("keydown", tim_imeKeyDown, false);
					var temp;
					temp = tim_vk_IME.firstChild.firstChild.firstChild.firstChild.nextSibling.firstChild.firstChild.firstChild;
					while(temp.nextSibling)
						temp = temp.nextSibling;
						
					if(document.activeElement.parentNode.parentNode == temp){
						tim_vk_IME.firstChild.firstChild.firstChild.nextSibling.firstChild.firstChild.firstChild.nextSibling.focus();
						return false;
					}
					else
						return true;
				}
			}
		}
		catch(e){
			debug("key code 40 execption:" + e);
			return true;
		}
	}
	else if(e.which == 39) {
		if(tim_softKey.style.display == "none")
			return true;
		if(tim_curIMElement.id == "kb_bbackspace" || tim_curIMElement.id == "kb_benter" || tim_curIMElement.id == "kb_bdel" || tim_curIMElement.id == "kb_binput_method")
			return false;
	}
	else if(e.which >= 48 && e.which <= 57 && tim_softKey.style.display != "none") {
		var t = $("#" + tim_currentElement.id).val();
		if(!tim_vk_IME_flag || !tim_vk_IME || tim_vk_IME.style.display == "none") {
			if(e.which == 48) {
				t = t + "0";
			}
			else {
				t = t + new String(e.which - 48);
			}
			$("#" + tim_currentElement.id).val(t);
		}
		else
		{
			var a = tim_vk_IME.firstChild.firstChild.firstChild.firstChild.nextSibling.firstChild.firstChild.firstChild.firstChild;
			var font;
			
			if(e.which == 48) {
				while(a.nextSibling)
					a = a.nextSibling;
			}
			else {
				for(i = 49; i < e.which; i++)
					a = a.nextSibling;
			}
			font = a.firstChild.text;
			try{
				if(document.activeElement.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id == "tim_VirtualKeyboardIME")
					document.getElementById("kb_b0").firstChild.focus();
			}catch(e){
			}
			DocumentSelection.insertAtCursor(tim_currentElement, font.charAt(font.length - 1));
			VirtualKeyboard.IME.hide();
		}
		return false;
	}
}

function tim_mySysEvent(event)
{
	var keyCode = event.keyCode || event.which;
	if(keyCode == 1001) {
		var id;
		/*判断当前input框是否有ID*/
		tim_currentElement = document.activeElement;
		if(!tim_currentElement.id)
			tim_currentElement.id = "tempInputID";
		id = tim_currentElement.id;
		
		/*判断当前input水平居上还是居下*/
		var p = DOM.getOffset(tim_currentElement);
		var offset;
		if((p.y - document.body.scrollTop) > window.innerHeight / 2) {
			TIM_IME_Heighter_IM_flag = false;
			offset = 0;
		}
		else {
			TIM_IME_Heighter_IM_flag = true;
			offset = window.innerHeight - $("#softkey").height();
		}	
		tim_softKey.style.top = offset + "px";
		
		/*显示输入法*/
		var t = $("#" + tim_currentElement.id).val();
		$("#" + tim_currentElement.id).val("").focus().val(t);
		tim_currentElement.setAttribute("disabled", "disabled");
		tim_softKey.style.display = "block";
		VirtualKeyboard.show(id, 'softkey');
		$("#kb_langselector, #kb_mappingselector, #copyrights").css("display", "none");
		
		if(!tim_isIMShow) {
			if(document.getElementById("kb_b0")) {
				debug("=====zhongzw====== tim_myKeyUp kb_b0 focus success");
				document.getElementById("kb_b0").firstChild.focus();
			}
			else
				tim_initFirstFocusId = setInterval("tim_initFirstFocus()", tim_time_0);
				
			tim_isIMShow = true;
		}
	}
}

function tim_myKeyUp(e)
{
	debug("----------zhongzw----myKeyUp:" + e.which);
	if(tim_hostKeyUp && tim_softKey.style.display == "none"){
		debug("--------zhongzw  tim_hostKeyUp");
		tim_hostKeyUp(e);
	}
	
	if(e.which == 27 || (e.which >= 48 && e.which <= 57 && tim_softKey.style.display != "none")) {
		if(document.activeElement.className == "tim_left" || document.activeElement.className == "tim_right") {
			tim_myKeyDown(e);
			document.getElementById("kb_b0").firstChild.focus();
		}
	}
	else if(e.which == 13) {
		if(tim_curIMElement) {
			if(tim_curIMElement.id == "kb_binput_method") {
				if(document.activeElement.parentNode != tim_curIMElement) {
					debug("=====zhongzw====== tim_myKeyUp kb_binput_method focus success");
					document.getElementById("kb_binput_method").firstChild.focus();
				}
			}
		}
		if(tim_vk_IME && tim_curIMElement.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id == "tim_VirtualKeyboardIME")
			document.getElementById("kb_b0").firstChild.focus();
			
		return false;
	}
}

function tim_imKeyDown(element)
{
	if(tim_hostKeyDown && tim_softKey.style.display == "none"){
		debug("--------zhongzw  tim_hostKeyDown");
		tim_hostKeyDown(event);
	}
	tim_curIMElement = element.parentNode;
	
	if(event.which == 13) {
		if(tim_curIMElement.id == "kb_binput_method") {
			
			debug("=====zhongzw====  setInterval(tim_inputMethedFocus())");
			tim_imFocusId = setInterval("tim_inputMethedFocus()", tim_time_2);
			
			if(!tim_vk_IME_flag) {
				tim_initIMEShowId = setInterval("tim_initIMEShow()", tim_time_1);
				tim_vk_IME_flag = true;
			}
		}
		
	}
}

function tim_imeKeyDown()
{
	try {
		if(event.which == 40 && TIM_IME_Heighter_IM_flag) {
			document.getElementById("kb_b0").firstChild.focus();
			return false;
		}
		else if(event.which == 13 || event.which == 38)
		{
			tim_vk_IME.firstChild.firstChild.firstChild.firstChild.nextSibling.firstChild.firstChild.firstChild.firstChild.firstChild.focus();
			return false;
		}
	}catch(e) {
	}
}

function tim_initFirstFocus()
{
	if(document.getElementById("kb_b0")) {
		document.getElementById("kb_b0").firstChild.focus();
		debug("====zhongzw==== tim_initFirstFocus sucuss");
		tim_time_0 = 500;
		clearInterval(tim_initFirstFocusId);
	}
	else
		tim_time_0 += 100;
		
	if(tim_time_0 == 1600)
		tim_time_0 = 500;
}

function tim_inputMethedFocus()
{
	if(document.getElementById("kb_binput_method")) {
		document.getElementById("kb_binput_method").firstChild.focus();
		debug("====zhongzw==== tim_inputMethedFocus sucuss");
		tim_time_2 = 500;
		clearInterval(tim_imFocusId);
	}
	else
		tim_time_2 += 100;
	
	if(tim_time_2 == 1600)
		tim_time_2 = 500;
}

function tim_initIMEShow()
{
	if(document.getElementById("tim_VirtualKeyboardIME")) {
		tim_vk_IME = document.getElementById("tim_VirtualKeyboardIME");
		debug("====zhongzw==== tim_initIMEShow sucuss");
		window.clearInterval(tim_initIMEShowId);
	}
}

function tim_myOnload()
{		
	if(tim_hostOnload) {
		debug("-----zhongzw-- tim_hostOnload");
		tim_hostOnload();
	}
			
	var head = document.getElementsByTagName("head")[0];
	var loader = document.createElement('script'); 
	loader.type = 'text/javascript'; 
	loader.src = 'file://' + Util.getEnv('env.TBROWSER_RESOURCE_PATH') + '/SoftKey/vk_loader.js?vk_layout=US%20US&vk_skin=flat_gray';
	
	var jquery = document.createElement('script');
	jquery.type = 'text/javascript'; 
	jquery.src = 'file://' + Util.getEnv('env.TBROWSER_RESOURCE_PATH') + '/SoftKey/jquery-1.8.2.min.js';
	
	head.appendChild(loader); 
	head.appendChild(jquery);

	debug("-----showIMstart----");
	
	var b = document.getElementsByTagName("body")[0];
	
	var im = document.createElement("div");
	im.id = "softkey";
	im.style.cssText="width: 720px; height: 214px; position: fixed; border: 0px; display: none; z-index:200002; margin: 0; padding: 0;";

	b.appendChild(im);
	
	tim_softKey = document.getElementById("softkey");
	
	document.onkeydown = tim_myKeyDown;
	document.onkeyup = tim_myKeyUp;
	debug("-----showIMend----");
}

function tim_isInputTypeSupport(type)
{
	var i;
	for(i = 0 ;i < tim_inputTypeSupport.length; i++) {
		if(type == tim_inputTypeSupport[i])
			return true;
	}
	return false;
}
