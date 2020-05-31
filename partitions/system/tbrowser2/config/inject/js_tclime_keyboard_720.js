var ime_hostSystemevent = document.onsystemevent;//\u4FDD\u5B58\u539F\u6765\u7684systemevent
document.onsystemevent = ime_keyDown;//\u76D1\u542Consystemevent

var ime_is_tv_first_on = "ime.is.tv.first.on";//\u7B2C\u4E00\u6B21\u5F00\u673A\u7684\u6807\u5FD7
var ime_g_setting = TUtil; //tcl ime_g_setting
var zoomFactor = window.screen.width / 1280;
var ime_notice_change_language;
var ime_keyboard;

var ime_button_proxy;//\u6309button ok\u65F6\u5B9E\u9645\u54CD\u5E94\u7684\u7C7B

var imagepath;
var ime_setting;
var ime_specialflag = 0;
var ime_candidate;
var ime_repeatTimerIndex = 0;
var ime_mouseflag = 0;
var nowInputValueA;
var nowInputValueD;
var virtualEvent = document.createEvent('HTMLEvents');
var uiEvent = document.createEvent('UIEvents');

TUtil.notifyInjectState(1);//\u521b\u5efa\u8f93\u5165\u6cd5\u6ce8\u5165\u6807\u5fd7\u4f4d

function ime_requestIQQI(method) {
	var json ={};
	var length = arguments.length;
	var param ="size";
	json[param] = length-1;
	for(var j=1;j<length;j++){
		param ="m"+j;
		json[param]=arguments[j];
	}
	var jsonstr = JSON.stringify(json);
	return IQQI.request(method, jsonstr);
}

var method = {
    setCurntIMECode   :0,
    initial			   :1,
    clearUnicode      :2,
    appendUnicode     :3,
    getCandidateCount :4,
    getCandidates	  :5,
    getEntry		  :6,
    learnWord         :7,
    deInitial         :9
};

function dispatchVirtualEvent(e, type) {
    var element = document.activeElement;
    e.initEvent(type, true, true);
    if(element)
        element.dispatchEvent(e);
    else
        console.log("------ element: " + elementId + " get fail!! ------");
}

function dispatchUIEvent(e, type) {
    var element = document.activeElement;
    e.initUIEvent(type, true, true, window, 1);
    if(element)
        element.dispatchEvent(e);
    else
        console.log("------ element: " + elementId + " get fail!! ------");
}

function ime_getEID(id)
{
    return document.getElementById(id);
}

var ime_Candidate = (function ()
{
    /**
     *\u95ED\u5305\u5355\u4F8B\u6A21\u5F0F
     */
    function candidate()
    {
        var ime_position  = 0;
        var ime_MAX_NUM_LINE = 5;
        var ime_drawposition = 0;
        var ime_mulCharList;
        var ime_count = 0;
        var  ime_inputstring ="";
        var  ime_focusonmulchar = 0;
        var  ime_Stringlist ;
        var  ime_editprestring ;
        var  ime_curlanguageIndex = 0;

        var ime_unicodeVector = "";//ime_g_setting.aPI_IQQI_GetUnicodeVector();


        var ime_littlechar ='';
        var ime_portuguese_compositeSymbol_smallLetterList = ["\u00E2","\u00E3","\u00E0","\u00E1","\u00E4","\u00EA","\u1EBD","\u00E8","\u00E9","\u00EB","\u00EE","\u0129","\u00EC","\u00ED","\u00EF","\u00F4","\u00F5","\u00F2","\u00F3","\u00F6","\u00FB","\u0169","\u00F9","\u00FA","\u00FC","\u00FD","\u00FF","\u00F1"];
        var ime_portuguese_compositeSymbol_CaptialLetterList = ["\u00C2","\u00C3","\u00C0","\u00C1","\u00C4","\u00CA","\u1EBC","\u00C8","\u00C9","\u00CB","\u00CE","\u0128","\u00CC","\u00CD","\u00CF","\u00D4","\u00D5","\u00D2","\u00D3","\u00D6","\u00DB","\u0168","\u00D9","\u00DA","\u00DC","\u00DD","\u0178","\u00D1"];
        var ime_vietnamese_compositeSymbol_smallLetterList = [
            ["\u00E0","\u1EA3","\u00E3","\u00E1","\u1EA1"],
            ["\u1EB1","\u1EB3","\u1EB5","\u1EAF","\u1EB7"],
            ["\u1EA7","\u1EA9","\u1EAB","\u1EA5","\u1EAD"],
            ["\u00E8","\u1EBB","\u1EBD","\u00E9","\u1EB9"],
            ["\u1EC1","\u1EC3","\u1EC5","\u1EBF","\u1EC7"],
            ["\u00EC","\u1EC9","\u0129","\u00ED","\u1ECB"],
            ["\u00F2","\u1ECF","\u00F5","\u00F3","\u1ECD"],
            ["\u1ED3","\u1ED5","\u1ED7","\u1ED1","\u1ED9"],
            ["\u1EDD","\u1EDF","\u1EE1","\u1EDB","\u1EE3"],
            ["\u00F9","\u1EE7","\u0169","\u00FA","\u1EE5"],
            ["\u1EEB","\u1EED","\u1EEF","\u1EEB","\u1EF1"],
            ["\u1EF3","\u1EF7","\u1EF9","\u00FD","\u1EF5"]
        ];
        var ime_vietnamese_compositeSymbol_CapitalLetterList = [
            ["\u00C0","\u1EA2","\u00C3","\u00C1","\u1EA0"],
            ["\u1EB0","\u1EB2","\u1EB4","\u1EAE","\u1EB6"],
            ["\u1EA6","\u1EA8","\u1EAA","\u1EA4","\u1EAC"],
            ["\u00C8","\u1EBA","\u1EBC","\u00C9","\u1EB8"],
            ["\u1EC0","\u1EC2","\u1EC4","\u1EBE","\u1EC6"],
            ["\u00CC","\u1EC8","\u0128","\u00CD","\u1ECA"],
            ["\u00D2","\u1ECE","\u00D5","\u00D3","\u1ECC"],
            ["\u1ED2","\u1ED4","\u1ED6","\u1ED0","\u1ED8"],
            ["\u1EDC","\u1EDE","\u1EE0","\u1EDA","\u1EE2"],
            ["\u00D9","\u1EE6","\u0168","\u00DA","\u1EE4"],
            ["\u1EEA","\u1EEC","\u1EEE","\u1EE8","\u1EF0"],
            ["\u1EF2","\u1EF6","\u1EF8","\u00DD","\u1EF4"]
        ];
        var ime_i_index = -1, ime_j_index = -1;
        var ime_letterflag = -1;

        var ime_get_count = 0;//\u5B9E\u9645\u4F20\u7ED9\u5F15\u64CE\u7684\u6570\u91CF
        var ime_move_count = 0;//\u53F3\u79FB\u52A0\u4E00\uFF0C\u5DE6\u79FB\u51CF\u4E00

        function ime_setCurLanguage(language)
        {
            ime_curlanguageIndex = language;
            ime_requestIQQI(method.setCurntIMECode,""+ime_curlanguageIndex);
        }

        function ime_getEID(id){
            return document.getElementById(id);
        }

        function ime_drawCandidateBar()
        {

            var ime_keyboard_ui_bar = document.createElement("div");
            ime_keyboard_ui_bar.style.cssText = " width: 1280px; height: 56px; margin: 2px auto; background-image: url("+imagepath+"images/ime/bg_bar.png) ; position: absolute; z-index: 2147483641;";
            ime_keyboard_ui_bar.style.display = "none";
            ime_keyboard_ui_bar.id= "ime_keyboard_ui_bar";
            ime_getEID("ime_keyboard_ui").appendChild(ime_keyboard_ui_bar);

            for(var i = 1;i<=ime_MAX_NUM_LINE;i++)
            {
                var ime_keyboard_char_span=document.createElement("span");
                ime_keyboard_char_span.style.cssText= "position: absolute; width: 250px; height: 50px; top: 2px; text-align: center; line-height: 50px; color: #ffffff; overflow: hidden; font-size: 30px; -webkit-marquee-direction: backwards; -webkit-marquee-style: scroll; -webkit-marquee-speed: fast; -webkit-marquee-increment: small; -webkit-marquee-repetition: infinite; marquee-direction: forward; marquee-style: scroll; marquee-speed: fast; marquee-play-count: infinite";
                ime_keyboard_char_span.innerHTML=" ";
                ime_keyboard_char_span.style.left=i*200 - 60+"px";
                ime_keyboard_ui_bar.appendChild(ime_keyboard_char_span);

                ime_keyboard_char_span.setAttribute("newAttr",i);
                ime_keyboard_char_span.onmousedown = function(evt)
                {
                    var index = 0;
                    evt.preventDefault();
                    index = parseInt(this.getAttribute("newAttr"));
                    if(evt.button == 0) {
                        if (ime_count >= index) {
                            ime_drawposition = index - 1;

                            document.activeElement.value = nowInputValueA;
                            ime_char_enter();
                            setTimeout(function () {
                                nowInputValueA = document.activeElement.value;
                            }, 0);
                            virtualEvent.VK_ENTER = 20;
                            virtualEvent.keyCode = virtualEvent.VK_ENTER;
                            dispatchVirtualEvent(virtualEvent, "keydown");
                        }
                    }
                }



            }

            var ime_keyboard_leftarrow=document.createElement("img");
            ime_keyboard_leftarrow.id= "ime_keyboard_leftarrow";
            ime_keyboard_leftarrow.src = ""+imagepath+"images/ime/left.png";
            ime_keyboard_leftarrow.style.cssText= "position: absolute; top: 14px; left:53px;width: 20px; height: 34px; ";
            ime_keyboard_leftarrow.style.display = "none";
            ime_keyboard_ui_bar.appendChild(ime_keyboard_leftarrow);

            var ime_keyboard_rightarrow=document.createElement("img");
            ime_keyboard_rightarrow.src = ""+imagepath+"images/ime/right.png";
            ime_keyboard_rightarrow.id = "ime_keyboard_rightarrow";
            ime_keyboard_rightarrow.style.cssText= "position: absolute;  top: 14px; left:1207px;width: 20px; height: 34px; ";
            ime_keyboard_rightarrow.style.display = "none";
            ime_keyboard_ui_bar.appendChild(ime_keyboard_rightarrow);

            var ime_keyboard_char_focus=document.createElement("img");
            ime_keyboard_char_focus.id= "ime_keyboard_char_focus";
            ime_keyboard_char_focus.src = ""+imagepath+"images/ime/focus_words.png";
            ime_keyboard_char_focus.style.cssText= "position: absolute;  top: 0px; left:200px;width: 270px; height: 61px; ";
            ime_keyboard_char_focus.style.display = "none";
            ime_keyboard_ui_bar.appendChild(ime_keyboard_char_focus);

            ime_mulCharList = ime_getEID("ime_keyboard_ui_bar").getElementsByTagName("span");
        }

        function ime_showstring()
        {
            for(var i = 0; i < ime_MAX_NUM_LINE; i ++)
            {
                if(typeof(ime_mulCharList[i]) != "object")
                {
                    break;
                }
                if((ime_mulCharList[i].scrollWidth > ime_mulCharList[i].clientWidth))
                {
                    var tempMarquee = document.createElement("marquee");
                    tempMarquee.setAttribute("scrollamount", 6);
                    tempMarquee.innerText = ime_mulCharList[i].innerText;
                    ime_mulCharList[i].innerHTML = "";
                    ime_mulCharList[i].appendChild(tempMarquee);
                }
                else
                {
                    console.log("youhao Static");
                    ime_mulCharList[i].style.overflowX = "hidden";
                    ime_mulCharList[i].style.textOverflow = "ellipsis";
                }
            }

        }

        function ime_candidate_moveright()
        {
            if(ime_count <= 1)
            {
                return ;
            }else if(ime_count <= ime_MAX_NUM_LINE)
            {
                //  ime_mulCharList[ime_drawposition].style.overflowX = "hidden";
                //   ime_mulCharList[ime_drawposition].style.textOverflow = "ellipsis";
                ime_drawposition++;
                if(ime_drawposition >= ime_count)
                {
                    ime_drawposition = 0;
                }

            }else
            {
                //  ime_mulCharList[ime_drawposition].style.overflowX = "hidden";
                //   ime_mulCharList[ime_drawposition].style.textOverflow = "ellipsis";
                if(ime_drawposition <= 3 && ime_drawposition < ime_count- ime_move_count*ime_MAX_NUM_LINE -1)
                {
                    ime_drawposition++;
                }else
                {
                    ime_drawposition = 0;
                    if(ime_count-(ime_move_count+1)*ime_MAX_NUM_LINE > 0)
                    {
                        ime_move_count++;
                        console.log("ime_inputstring="+ime_inputstring);
                        ime_findchar(ime_inputstring, ime_move_count);
                    }else
                    {
                        ime_move_count = 0;
                        console.log("else ime_inputstring="+ime_inputstring);
                        ime_findchar(ime_inputstring, 0);
                    }
                }
            }
            ime_getEID("ime_keyboard_char_focus").style.left =  ((ime_drawposition+1) * 200 - 70 )+"px";
        //    ime_showstring();

        }
        function ime_candidate_moveleft()
        {
            if(ime_drawposition > 0)
            {
                //   ime_mulCharList[ime_drawposition].style.overflowX = "hidden";
                //     ime_mulCharList[ime_drawposition].style.textOverflow = "ellipsis";
                ime_drawposition--;

            }else if(ime_drawposition == 0 && ime_move_count > 0)
            {
                ime_move_count--;
                ime_findchar(ime_inputstring, ime_move_count);
            }
            ime_getEID("ime_keyboard_char_focus").style.left =  ((ime_drawposition+1) * 200 - 70 )+"px";
 //           ime_showstring();
        }

        function ime_char_enter()
        {

            // document.activeElement.value = ime_editprestring + ime_mulCharList[ime_drawposition].innerHTML;
            //ime_unicodeVector.clearUnicode();
            //for(var i = 0; i < ime_mulCharList[ime_drawposition].innerHTML.length; i++)
            {
                // ime_unicodeVector.appendUnicode(ime_mulCharList[ime_drawposition].innerHTML.charCodeAt(i));
                // Util.sendKeyboardCHNEvent(ime_mulCharList[ime_drawposition].innerHTML.charCodeAt(i));

                TUtil.sendKeyboardCHNEvent(ime_mulCharList[ime_drawposition].innerText);
            }
            //ime_g_setting.aPI_IQQI_LearnWord(ime_curlanguageIndex,ime_unicodeVector,ime_unicodeVector);
            ime_back();
        }

        function _ime_findchar()
        {
            ime_inputstring = ime_inputstring+ime_littlechar;

            ime_findchar(ime_inputstring, 0);
        }

        function ime_findchar(inputStr, begin)
        {
            ime_requestIQQI(method.clearUnicode);
            for(var i = 0; i < inputStr.length; i++)
            {
                ime_requestIQQI(method.appendUnicode,""+inputStr.charCodeAt(i));
            }
	
            ime_count = ime_requestIQQI(method.getCandidateCount);
			var ime_zhuyinIndex = ime_Languages.getLanguageID("CHINESE_TRAD");
			var ime_pinyinIndex = ime_Languages.getLanguageID("CHINESE_SIMPLE");

            if(ime_count <= 0)
            {
                ime_mulCharList[0].innerHTML=replaceT(inputStr);
                for(var i=1;i<ime_MAX_NUM_LINE;i++)
                {
                    ime_mulCharList[i].innerHTML="";
                }
                ime_count = 1;
            }
			else if(ime_count < ime_MAX_NUM_LINE)
            {
                ime_getEID("ime_keyboard_leftarrow").style.display = "none";
                ime_getEID("ime_keyboard_rightarrow").style.display = "none";

                ime_requestIQQI(method.getCandidates, ""+ime_count, ""+0);
				
                for(var i=0;i<ime_count;i++)
                {
					var entry=ime_requestIQQI(method.getEntry,""+i);
                    var s=entry.substring(1 ,entry.length);
                    s=inputStr[0] + s;

                    if(ime_curlanguageIndex == ime_zhuyinIndex || ime_curlanguageIndex == ime_pinyinIndex)
                        ime_mulCharList[i].innerHTML=replaceT(entry);
                    else
                        ime_mulCharList[i].innerHTML=replaceT(s);
                }
                for(var i=ime_count;i<ime_MAX_NUM_LINE;i++)
                {
                    ime_mulCharList[i].innerHTML="";
                }
                ime_count += 1;
            }else
            {
                ime_getEID("ime_keyboard_leftarrow").style.display = "block";
                ime_getEID("ime_keyboard_rightarrow").style.display = "block";
                if(begin == 0)
                {
                    ime_get_count = ime_MAX_NUM_LINE;
                    ime_requestIQQI(method.getCandidates, ""+ime_get_count, ""+0);
		
                    for (var i = 0; i < ime_get_count; i++)
					{
						var entry = ime_requestIQQI(method.getEntry,""+i);
                        var s=entry.substring(1 ,entry.length);
                        s=inputStr[0] + s;

                        if(ime_curlanguageIndex == ime_zhuyinIndex || ime_curlanguageIndex == ime_pinyinIndex)
                            ime_mulCharList[i].innerHTML=replaceT(entry);
                        else
                            ime_mulCharList[i].innerHTML=replaceT(s);
                    }
                }
                else
                {
                    ime_get_count = ime_count - begin * ime_MAX_NUM_LINE;
                    if (ime_get_count > 0 && ime_get_count <= ime_MAX_NUM_LINE) 
					{
                        ime_requestIQQI(method.getCandidates, ""+ime_get_count, ""+(begin * ime_MAX_NUM_LINE));
						
                        for (var i = 0; i < ime_get_count; i++)
						{
							var entry = ime_requestIQQI(method.getEntry,""+i);
                            var s = entry.substring(1 ,entry.length);
                            s = inputStr[0] + s;

                            if(ime_curlanguageIndex == ime_zhuyinIndex || ime_curlanguageIndex == ime_pinyinIndex)
                                ime_mulCharList[i].innerHTML=replaceT(entry);
                            else
                                ime_mulCharList[i].innerHTML=replaceT(s);
                        }
                        for (var i = ime_get_count; i < ime_MAX_NUM_LINE; i++) 
						{
                            ime_mulCharList[i].innerHTML = "";
                        }
                    } 
					else if (ime_get_count > 0 && ime_get_count > ime_MAX_NUM_LINE) 
					{
                        ime_get_count = ime_MAX_NUM_LINE;
                        ime_requestIQQI(method.getCandidates, ""+ime_get_count, ""+(begin * ime_MAX_NUM_LINE));
				
                        for (var i = 0; i < ime_MAX_NUM_LINE; i++)
						{ 
							var entry = ime_requestIQQI(method.getEntry,""+i);
                            var s = entry.substring(1 ,entry.length);
                            s = inputStr[0] + s;

                            if(ime_curlanguageIndex == ime_zhuyinIndex || ime_curlanguageIndex == ime_pinyinIndex)
                                ime_mulCharList[i].innerHTML=replaceT(entry);
                            else
                                ime_mulCharList[i].innerHTML=replaceT(s);
                        }
                    }
                }
                ime_count += 1;
            }
            ime_showstring();
        }

        function ime_back()
        {
            ime_getEID("ime_keyboard_ui_bar").style.display = "none";
            ime_getEID("ime_keyboard_char_focus").style.display = "none";
            ime_Stringlist= "";
            ime_count = 0;
            ime_focusonmulchar = 0;
            ime_inputstring ="";
            ime_position = 0;
            ime_drawposition = ime_position;
            for (var i = 0; i < ime_MAX_NUM_LINE; i++)
            {
                ime_mulCharList[i].style.overflowX = "hidden";
                ime_mulCharList[i].style.textOverflow = "ellipsis";
                ime_mulCharList[i].innerHTML="";
            }
            ime_keyboard.ime_getfocus();
        }

        function ime_candidate_clear()
        {
            ime_Stringlist= "";
            ime_inputstring ="";
            ime_count = 0;
            ime_focusonmulchar = 0;
            ime_position = 0;
            ime_drawposition = ime_position;
        }

        function ime_find_portuguese_compositeSymbol(parame)
        {
            switch(parame)
            {
                case "^":
                    ime_j_index = 0;
                    break;
                case "~":
                    ime_j_index = 1;
                    break;
                case "`":
                    ime_j_index = 2;
                    break;
                case "\u00B4":
                    ime_j_index = 3;
                    break;
                case "\u00A8":
                    ime_j_index = 4;
                    break;
                case "a":
                    ime_letterflag = 1;
                    ime_i_index = 0;
                    break;
                case "e":
                    ime_letterflag = 1;
                    ime_i_index = 1;
                    break;
                case "i":
                    ime_letterflag = 1;
                    ime_i_index = 2;
                    break;
                case "o":
                    ime_letterflag = 1;
                    ime_i_index = 3;
                    break;
                case "u":
                    ime_letterflag = 1;
                    ime_i_index = 4;
                    break;
                case "y":
                    ime_letterflag = 1;
                    ime_i_index = 5;
                    break;
                case "n":
                    ime_letterflag = 1;
                    ime_i_index = 6;
                    break;
                case "A":
                    ime_letterflag = 1;
                    ime_i_index = 0;
                    break;
                case "E":
                    ime_letterflag = 2;
                    ime_i_index = 1;
                    break;
                case "I":
                    ime_letterflag = 2;
                    ime_i_index = 2;
                    break;
                case "O":
                    ime_letterflag = 2;
                    ime_i_index = 3;
                    break;
                case "U":
                    ime_letterflag = 2;
                    ime_i_index = 4;
                    break;
                case "Y":
                    ime_letterflag = 2;
                    ime_i_index = 5;
                    break;
                case "N":
                    ime_letterflag = 2;
                    ime_i_index = 6;
                    break;
            }
        }

        function ime_portuguese_compositeSymbol() {
            var lastchar = ime_inputstring.substr(ime_inputstring.length - 1, 1);

            ime_find_portuguese_compositeSymbol(lastchar);
            ime_find_portuguese_compositeSymbol(ime_littlechar);

            if(ime_i_index != -1 && ime_j_index != -1 ) {
                if (ime_letterflag == 1) {
                    if (ime_i_index >= 5)
                    {
                        if (ime_i_index == 5 && ime_j_index == 3) {
                            ime_inputstring = ime_inputstring.substr(0, ime_inputstring.length - 1);
                            ime_littlechar = ime_portuguese_compositeSymbol_smallLetterList[ime_i_index * 5];
                        }
                        else if (ime_i_index == 5 && ime_j_index == 4) {
                            ime_inputstring = ime_inputstring.substr(0, ime_inputstring.length - 1);
                            ime_littlechar = ime_portuguese_compositeSymbol_smallLetterList[ime_i_index * 5 + 1];
                        }
                        else if (ime_i_index == 6 && ime_j_index == 1) {
                            ime_inputstring = ime_inputstring.substr(0, ime_inputstring.length - 1);
                            ime_littlechar = ime_portuguese_compositeSymbol_smallLetterList[5 * 5 + 2];
                        }
                    }
                    else
                    {
                        ime_inputstring = ime_inputstring.substr(0, ime_inputstring.length - 1);
                        ime_littlechar = ime_portuguese_compositeSymbol_smallLetterList[ime_i_index * 5 + ime_j_index];
                    }
                }
                else if (ime_letterflag == 2)
                {
                    if (ime_i_index >= 5)
                    {
                        if (ime_i_index == 5 && ime_j_index == 3) {
                            ime_inputstring = ime_inputstring.substr(0, ime_inputstring.length - 1);
                            ime_littlechar = ime_portuguese_compositeSymbol_CaptialLetterList[ime_i_index * 5 ];
                        }
                        else if (ime_i_index == 5 && ime_j_index == 4) {
                            ime_inputstring = ime_inputstring.substr(0, ime_inputstring.length - 1);
                            ime_littlechar = ime_portuguese_compositeSymbol_CaptialLetterList[ime_i_index * 5 + 1];
                        }
                        else if (ime_i_index == 6 && ime_j_index == 1) {
                            ime_inputstring = ime_inputstring.substr(0, ime_inputstring.length - 1);
                            ime_littlechar = ime_portuguese_compositeSymbol_CaptialLetterList[5 * 5 + 2];
                        }
                    }
                    else
                    {
                        ime_inputstring = ime_inputstring.substr(0, ime_inputstring.length - 1);
                        ime_littlechar = ime_portuguese_compositeSymbol_CaptialLetterList[ime_i_index * 5 + ime_j_index];
                    }
                }
            }
            ime_i_index = -1;
            ime_j_index = -1;
            ime_letterflag = -1;
        }
        function ime_find_vietnamese_compositeSymbol(parame)
        {
            switch (parame)
            {
                //small letter
                case "\u0061":
                    ime_i_index = 0;
                    ime_letterflag = 1;
                    break;
                case "\u0103":
                    ime_i_index = 1;
                    ime_letterflag = 1;
                    break;
                case "\u00E2":
                    ime_i_index = 2;
                    ime_letterflag = 1;
                    break;
                case "\u0065":
                    ime_i_index = 3;
                    ime_letterflag = 1;
                    break;
                case "\u00EA":
                    ime_i_index = 4;
                    ime_letterflag = 1;
                    break;
                case "\u0069":
                    ime_i_index = 5;
                    ime_letterflag = 1;
                    break;
                case "\u006F":
                    ime_i_index = 6;
                    ime_letterflag = 1;
                    break;
                case "\u00F4":
                    ime_i_index = 7;
                    ime_letterflag = 1;
                    break;
                case "\u01A1":
                    ime_i_index = 8;
                    ime_letterflag = 1;
                    break;
                case "\u0075":
                    ime_i_index = 9;
                    ime_letterflag = 1;
                    break;
                case "\u01B0":
                    ime_i_index = 10;
                    ime_letterflag = 1;
                    break;
                case "\u0079":
                    ime_i_index = 11;
                    ime_letterflag = 1;
                    break;

                //capital letter
                case "\u0041":
                    ime_i_index = 0;
                    ime_letterflag = 2;
                    break;
                case "\u0102":
                    ime_i_index = 1;
                    ime_letterflag = 2;
                    break;
                case "\u00C2":
                    ime_i_index = 2;
                    ime_letterflag = 2;
                    break;
                case "\u0045":
                    ime_i_index = 3;
                    ime_letterflag = 2;
                    break;
                case "\u00CA":
                    ime_i_index = 4;
                    ime_letterflag = 2;
                    break;
                case "\u0049":
                    ime_i_index = 5;
                    ime_letterflag = 2;
                    break;
                case "\u004F":
                    ime_i_index = 6;
                    ime_letterflag = 2;
                    break;
                case "\u00D4":
                    ime_i_index = 7;
                    ime_letterflag = 2;
                    break;
                case "\u01A0":
                    ime_i_index = 8;
                    ime_letterflag = 2;
                    break;
                case "\u0055":
                    ime_i_index = 9;
                    ime_letterflag = 2;
                    break;
                case "\u01AF":
                    ime_i_index = 10;
                    ime_letterflag = 2;
                    break;
                case "\u0059":
                    ime_i_index = 11;
                    ime_letterflag = 2;
                    break;

                //tone letter
                case "\u0300":
                    ime_j_index = 0;
                    break;
                case "\u0309":
                    ime_j_index = 1;
                    break;
                case "\u0303":
                    ime_j_index = 2;
                    break;
                case "\u0301":
                    ime_j_index = 3;
                    break;
                case "\u0323":
                    ime_j_index = 4;
                    break;
            }
        }
        
        function ime_vietnamese_compositeSymbol()
        {
            var lastchar = ime_inputstring.substr(ime_inputstring.length - 1, 1);
            if("\u0077" == ime_littlechar)
            {
                ime_littlechar = "\u01b0";
            }else if("\u0057" == ime_littlechar)
            {
                ime_littlechar = "\u01AF";
            }
            ime_find_vietnamese_compositeSymbol(lastchar);
            ime_find_vietnamese_compositeSymbol(ime_littlechar);
            if(-1 != ime_i_index && -1 != ime_j_index)
            {
                if(1 == ime_letterflag)
                {
                    ime_inputstring = ime_inputstring.substr(0, ime_inputstring.length - 1);
                    ime_littlechar = ime_vietnamese_compositeSymbol_smallLetterList[ime_i_index][ime_j_index];
                }else if(2 == ime_letterflag)
                {
                    ime_inputstring = ime_inputstring.substr(0, ime_inputstring.length - 1);
                    ime_littlechar = ime_vietnamese_compositeSymbol_CapitalLetterList[ime_i_index][ime_j_index];
                }
            }
            ime_i_index = -1;
            ime_j_index = -1;
            ime_letterflag = -1;
        }

        function ime_find_thai_compositeSymbol(parame)
        {
            switch (parame)
            {
                case " ":
                case "":
                case undefined:
                    ime_letterflag = -1;
                    break;
                case"\u0E38":
                case "\u0E36":
                case "\u0E31":
                case "\u0E35":
                case "\u0E49":
                case "\u0E48":
                case "\u0E34":
                case "\u0E37":
                case "\u0E39":
                case "\u0E4D":
                case "\u0E4A":
                case "\u0E47":
                case "\u0E4B":
                case "\u0E3A":
                case "\u0E4c":
                    ime_i_index = 1;
                    break;
                default:
                    ime_letterflag = 1;
            }
        }

        function ime_thai_compositeSymbol()
        {
            var lastchar = ime_inputstring.substr(ime_inputstring.length - 1, 1);
            ime_find_thai_compositeSymbol(lastchar);
            ime_find_thai_compositeSymbol(ime_littlechar);
            if(-1 == ime_letterflag)
            {
                if(1 == ime_i_index)
                {
                    ime_inputstring = ime_inputstring.substr(0, ime_inputstring.length - 1);
                    if(0 == ime_inputstring.length)
                    {
                        ime_getEID("ime_keyboard_ui_bar").style.display = "none";
                    }
                    ime_littlechar = lastchar;
                    ime_i_index = -1;
                }
            }
        }

        function ime_french_compositeSymbol()
        {
            ime_portuguese_compositeSymbol();
        }

        function ime_keydown_bar(evt) {
            var code = evt.eventCode;
            switch (code) {
                case 39:
                    ime_candidate_moveright();
                    break;
                case 37://left
                    ime_candidate_moveleft();
                    break;
                case 13://enter
                    if(1)//evt.modifiers == 0)
                        document.activeElement.value=nowInputValueA;
                    ime_char_enter();
                    setTimeout(function () {
                        nowInputValueA=document.activeElement.value;
                    }, 0);
                    virtualEvent.VK_ENTER = 20;
                    virtualEvent.keyCode = virtualEvent.VK_ENTER;
                    dispatchVirtualEvent(virtualEvent, "keydown");
                    break;
                case 8://back
                    ime_back();

                    break;
                case 40://down
                case 38://up
                {
                    ime_getEID("ime_keyboard_char_focus").style.display = "none";
                    ime_mulCharList[ime_drawposition].style.overflowX = "hidden";
                    ime_mulCharList[ime_drawposition].style.textOverflow = "ellipsis";
                    ime_mulCharList[ime_drawposition].innerHTML = replaceT(ime_mulCharList[ime_drawposition].innerHTML);
                    ime_focusonmulchar = 0;
                    ime_position = 0;
                    ime_drawposition = ime_position;
                    ime_keyboard.ime_getfocus();
                }
                    break;
                default:
                    code = evt.eventData;
                    //if (evt.modifiers & 0x100 ) {
                    //    code = code | 0x200;
                    //    ime_language_hardKeyBoard(code);
                    //}
                    //else if (evt.modifiers & 0x2000 )
                    //{
                    //    ime_language_specialHardKeyBoard(code)
                    //    if(ime_specialflag == 0)
                    //    {
                    //        ime_language_hardKeyBoard(code);
                    //    }
                    //}
                    //else
                    {
                        ime_language_hardKeyBoard(code);
                    }

            }
        }

        function ime_candidateWordsGetFocus()
        {
            ime_getEID("ime_keyboard_char_focus").style.display = "block";
            ime_getEID("ime_keyboard_char_focus").style.left =  ((ime_drawposition+1) * 200 - 70)+"px";
            ime_focusonmulchar = 1;
            //           ime_showstring();
        }


        function replaceT(s)
        {
            var key=s;
            //console.log("string="+s);
            //key=key.replace(/\u00B0/g,"&deg;");
            //console.log("key15="+key);
            return key;
        }

        function ime_submitString()
        {
            // ime_unicodeVector.clearUnicode();
           // for(var i = 0; i < ime_inputstring.length; i++)
            {
                //   ime_unicodeVector.appendUnicode(ime_inputstring.charCodeAt(i));
                // Util.sendKeyboardCHNEvent(ime_inputstring.charCodeAt(i));

                TUtil.sendKeyboardCHNEvent(ime_mulCharList[ime_drawposition].innerText);
            }
            ime_back();
        }

        function ime_deleteString()
        {
            if (ime_inputstring.length > 0) {
                ime_inputstring = ime_inputstring.substr(0, ime_inputstring.length - 1);
                nowInputValueD=document.activeElement.value;
                nowInputValueD=nowInputValueD.substring(0,nowInputValueD.length-1);
                document.activeElement.value=nowInputValueD;
                if (ime_inputstring.length == 0) {
                    ime_getEID("ime_keyboard_ui_bar").style.display = "none";
                    ime_getEID("ime_keyboard_char_focus").style.display = "none";
                }
                else
                    ime_findchar(ime_inputstring, 0);
            }
            else
            {
                ime_editprestring = document.activeElement.value;
                ime_editprestring = ime_editprestring.substr(0, ime_editprestring.length - 1);
                document.activeElement.value = ime_editprestring;
                nowInputValueA = document.activeElement.value;
            }
        }

        function ime_candidateInit(letter)
        {
            ime_getEID("ime_keyboard_ui_bar").style.display = "block";
            ime_position = 0;
            ime_drawposition = ime_position;
            ime_focusonmulchar = 0;
            ime_editprestring = document.activeElement.value;
            ime_littlechar = letter;
        }

        function ime_getInputString()
        {
            return ime_inputstring;
        }

        function ime_candidate_IsDisplay()
        {
            return ime_focusonmulchar?true:false;
        }


        /**
         * \u66B4\u9732\u7684public\u65B9\u6CD5\u548C\u5C5E\u6027
         */
        return{
            ime_drawCandidateBar:ime_drawCandidateBar,//\u7ED8\u5236candidate
            ime_submitString:ime_submitString, //\u4ECEcandidate\u63D0\u4EA4\u5230\u8F93\u5165\u6846
            ime_deleteString:ime_deleteString,//delete\u6309\u952E\u529F\u80FD
            ime_back:ime_back,//candidate\u6D88\u5931
            _ime_findchar:_ime_findchar,//\u6B64\u65B9\u6CD5\u540E\u7EED\u8981\u4F18\u5316
            ime_candidateInit:ime_candidateInit,//\u6B64\u65B9\u6CD5\u540E\u7EED\u8981\u4F18\u5316
            ime_french_compositeSymbol:ime_french_compositeSymbol,
            ime_portuguese_compositeSymbol:ime_portuguese_compositeSymbol,
            ime_vietnamese_compositeSymbol:ime_vietnamese_compositeSymbol,
            ime_thai_compositeSymbol:ime_thai_compositeSymbol,
            ime_keydown_bar:ime_keydown_bar,
            ime_candidateWordsGetFocus:ime_candidateWordsGetFocus,
            ime_candidate_IsDisplay:ime_candidate_IsDisplay,
            ime_candidate_clear:ime_candidate_clear,
            ime_setCurLanguage:ime_setCurLanguage,
            ime_getInputString:ime_getInputString
        };

    }

    /**
     * \u5B9E\u4F8B\u5BB9\u5668
     */
    var instance;

    return {
        getInstance: function ()
        {
            if (instance === undefined)
            {
                instance =  candidate();
            }
            return instance;
        }
    };
})();

//\u6309\u952E\u4EE3\u7406\u7C7B
var IME_Button_Proxy = function () {

};
IME_Button_Proxy.prototype.ime_setLanguage = function (ime_language) {
    this.ime_language = ime_language;
};
IME_Button_Proxy.prototype.ime_press_enter = function (ime_letter) {

    switch(ime_letter)
    {
        case "enter":
            document.activeElement.value=nowInputValueA;
            ime_candidate.ime_submitString();
            ime_closeKeyBoard();
            nowInputValueA=document.activeElement.value;
            virtualEvent.VK_ENTER = 13;
            virtualEvent.keyCode = virtualEvent.VK_ENTER;
            dispatchVirtualEvent(virtualEvent, "keydown");
            TUtil.sendEvent("addressInput",1002,0);
            break;
        case "delete":
            if (ime_repeatTimerIndex != 0)
            {
                clearInterval(ime_repeatTimerIndex);
                ime_repeatTimerIndex = 0;
            }
            ime_candidate.ime_deleteString();


            virtualEvent.VK_ENTER = 20;
            virtualEvent.keyCode = virtualEvent.VK_ENTER;
            dispatchVirtualEvent(virtualEvent, "keydown");
            //if (ime_mouseflag == 0)
            //{
            //    ime_repeatTimerIndex = setInterval(function () {
            //        ime_candidate.ime_deleteString();
            //    }, 400);
            //}
            ime_mouseflag = 0;
            break;
        case "setting":
            ime_setting.ime_showLangSetting();
            break;
        case "language":
            ime_candidate.ime_back();
            ime_setting.ime_change_language();
            break;
        case "shift":
            var string = ime_candidate.ime_getInputString();
            ime_candidate.ime_back();
            ime_switchShift();
            if(string != undefined  &&string!=null && string!="")
            {
                ime_candidate.ime_candidateInit(string);
                this.ime_language.ime_press_enter(string);
                ime_candidate._ime_findchar();
            }
            break;
        case "123#":
            var string = ime_candidate.ime_getInputString();
            ime_candidate.ime_back();
            ime_switchKeyboard();
            ime_display_number();
            if(string != undefined  &&string!=null&& string!="")
            {
                ime_candidate.ime_candidateInit(string);
                this.ime_language.ime_press_enter(string);
                ime_candidate._ime_findchar();
            }
            break;
        case  "abc":
            var string = ime_candidate.ime_getInputString();
            ime_display_language(ime_curLanguageSymbol);
            if(string != undefined  &&string!=null&& string!="")
            {
                ime_candidate.ime_candidateInit(string);
                this.ime_language.ime_press_enter(string);
                ime_candidate._ime_findchar();
            }
            break;
        case  "<1/2>":
            ime_display_symbol();
            break;
        case  "<2/2>":
            ime_display_number();
            break;
        default:
            ime_candidate.ime_candidateInit(ime_letter);
            //document.activeElement.value="";
            TUtil.sendKeyboardCHNEvent(ime_letter);
            this.ime_language.ime_press_enter(ime_letter);
            ime_candidate._ime_findchar();
            virtualEvent.VK_ENTER = 20;
            virtualEvent.keyCode = virtualEvent.VK_ENTER;
            dispatchVirtualEvent(virtualEvent, "keydown");//\u5B57\u7B26\u4E32\u7B49\u5DF2\u5904\u7406\u5B8C\u6BD5\u5F00\u59CB\u4E0EIQQI\u5F15\u64CE\u4EA4\u4E92
            break;
    }


};


//\u72B6\u6001
var IME_Language = function(){};
IME_Language.prototype.ime_press_enter = function ()
{
    throw new Error("\u8BE5\u65B9\u6CD5\u5FC5\u987B\u88AB\u91CD\u8F7D!");
};

//IME_English\u72B6\u6001
var IME_English = function ()
{
    IME_Language.apply(this);
};
IME_English.prototype = new IME_Language();
IME_English.prototype.ime_press_enter = function(ime_letter) {
   // window.alert("IME_English : " + ime_letter);


};

//IME_French\u72B6\u6001
var IME_French = function ()
{
    IME_Language.apply(this);
};
IME_French.prototype = new IME_Language();
IME_French.prototype.ime_press_enter = function(ime_letter) {
    // window.alert("french : "+ Integer.valueOf(ime_letter));

    ime_candidate.ime_french_compositeSymbol();
};



//IME_Number\u72B6\u6001
var IME_Number = function ()
{
    IME_Language.apply(this);
};
IME_Number.prototype = new IME_Language();
IME_Number.prototype.ime_press_enter = function(ime_letter)
{

   // window.alert("number : "+ime_letter);

};

//IME_Portugal
var IME_Portugal = function ()
{
    IME_Language.apply(this);
};
IME_Portugal.prototype = new IME_Language();
IME_Portugal.prototype.ime_press_enter = function(ime_letter)
{

    ime_candidate.ime_portuguese_compositeSymbol();
};

//IME_Spanish\u72B6\u6001
var IME_Spanish = function ()
{
    IME_Language.apply(this);
};
IME_Spanish.prototype = new IME_Language();
IME_Spanish.prototype.ime_press_enter = function(ime_letter)
{
   // window.alert("IME_Spanish : "+ime_letter);
};

//IME_Deutsch
var IME_Deutsch = function ()
{
    IME_Language.apply(this);
};
IME_Deutsch.prototype = new IME_Language();
IME_Deutsch.prototype.ime_press_enter = function(ime_letter)
{
   // window.alert("IME_Deutsch : "+ime_letter);
};


//IME_Polski
var IME_Polski = function ()
{
    IME_Language.apply(this);
};
IME_Polski.prototype = new IME_Language();
IME_Polski.prototype.ime_press_enter = function(ime_letter)
{
  //  window.alert("IME_Polski : "+ime_letter);
};


//IME_Svenska
var IME_Svenska = function ()
{
    IME_Language.apply(this);
};
IME_Svenska.prototype = new IME_Language();
IME_Svenska.prototype.ime_press_enter = function(ime_letter)
{
    //window.alert("IME_Svenska : "+ime_letter);
};


//IME_Italian
var IME_Italian = function ()
{
    IME_Language.apply(this);
};
IME_Italian.prototype = new IME_Language();
IME_Italian.prototype.ime_press_enter = function(ime_letter)
{


};

//IME_Russian
var IME_Russian = function ()
{
    IME_Language.apply(this);
};
IME_Russian.prototype = new IME_Language();
IME_Russian.prototype.ime_press_enter = function(ime_letter)
{


};

//IME_Czech
var IME_Czech = function ()
{
    IME_Language.apply(this);
};
IME_Czech.prototype = new IME_Language();
IME_Czech.prototype.ime_press_enter = function(ime_letter)
{


};


//IME_Croatian
var IME_Croatian = function ()
{
    IME_Language.apply(this);
};
IME_Croatian.prototype = new IME_Language();
IME_Croatian.prototype.ime_press_enter = function(ime_letter)
{


};

//IME_Latvian
var IME_Latvian = function ()
{
    IME_Language.apply(this);
};
IME_Latvian.prototype = new IME_Language();
IME_Latvian.prototype.ime_press_enter = function(ime_letter)
{


};

//IME_Hungarian
var IME_Hungarian = function ()
{
    IME_Language.apply(this);
};
IME_Hungarian.prototype = new IME_Language();
IME_Hungarian.prototype.ime_press_enter = function(ime_letter)
{


};

//IME_Romanian
var IME_Romanian = function ()
{
    IME_Language.apply(this);
};
IME_Romanian.prototype = new IME_Language();
IME_Romanian.prototype.ime_press_enter = function(ime_letter)
{


};

//IME_Norwegian
var IME_Norwegian = function ()
{
    IME_Language.apply(this);
};
IME_Norwegian.prototype = new IME_Language();
IME_Norwegian.prototype.ime_press_enter = function(ime_letter)
{


};

//IME_Slovenian
var IME_Slovenian = function ()
{
    IME_Language.apply(this);
};
IME_Slovenian.prototype = new IME_Language();
IME_Slovenian.prototype.ime_press_enter = function(ime_letter)
{


};


//IME_Turkish
var IME_Turkish = function ()
{
    IME_Language.apply(this);
};
IME_Turkish.prototype = new IME_Language();
IME_Turkish.prototype.ime_press_enter = function(ime_letter)
{


};

//IME_Ukrainain
var IME_Ukrainain = function ()
{
    IME_Language.apply(this);
};
IME_Ukrainain.prototype = new IME_Language();
IME_Ukrainain.prototype.ime_press_enter = function(ime_letter)
{


};

//IME_Greek
var IME_Greek = function ()
{
    IME_Language.apply(this);
};
IME_Greek.prototype = new IME_Language();
IME_Greek.prototype.ime_press_enter = function(ime_letter)
{


};

//IME_Lithuanian
var IME_Lithuanian = function ()
{
    IME_Language.apply(this);
};
IME_Lithuanian.prototype = new IME_Language();
IME_Lithuanian.prototype.ime_press_enter = function(ime_letter)
{


};

//IME_Esthonian
var IME_Esthonian = function ()
{
    IME_Language.apply(this);
};
IME_Esthonian.prototype = new IME_Language();
IME_Esthonian.prototype.ime_press_enter = function(ime_letter)
{


};

//IME_Bulgarian
var IME_Bulgarian = function ()
{
    IME_Language.apply(this);
};
IME_Bulgarian.prototype = new IME_Language();
IME_Bulgarian.prototype.ime_press_enter = function(ime_letter)
{


};

//IME_Danish
var IME_Danish = function ()
{
    IME_Language.apply(this);
};
IME_Danish.prototype = new IME_Language();
IME_Danish.prototype.ime_press_enter = function(ime_letter)
{


};

//IME_Finnish
var IME_Finnish = function ()
{
    IME_Language.apply(this);
};
IME_Finnish.prototype = new IME_Language();
IME_Finnish.prototype.ime_press_enter = function(ime_letter)
{


};

//IME_Dutch
var IME_Dutch = function ()
{
    IME_Language.apply(this);
};
IME_Dutch.prototype = new IME_Language();
IME_Dutch.prototype.ime_press_enter = function(ime_letter)
{


};

//IME_Slovak
var IME_Slovak = function ()
{
    IME_Language.apply(this);
};
IME_Slovak.prototype = new IME_Language();
IME_Slovak.prototype.ime_press_enter = function(ime_letter)
{


};

//IME_Serbian
var IME_Serbian = function ()
{
    IME_Language.apply(this);
};
IME_Serbian.prototype = new IME_Language();
IME_Serbian.prototype.ime_press_enter = function(ime_letter)
{


};

//IME_Hebrew
var IME_Hebrew = function ()
{
    IME_Language.apply(this);
};
IME_Hebrew.prototype = new IME_Language();
IME_Hebrew.prototype.ime_press_enter = function(ime_letter)
{


};

//IME_Arabic
var IME_Arabic = function ()
{
    IME_Language.apply(this);
};
IME_Arabic.prototype = new IME_Language();
IME_Arabic.prototype.ime_press_enter = function(ime_letter)
{


};

//IME_Farsi
var IME_Farsi = function ()
{
    IME_Language.apply(this);
};
IME_Farsi.prototype = new IME_Language();
IME_Farsi.prototype.ime_press_enter = function(ime_letter)
{


};

//IME_Uzbek
var IME_Uzbek = function ()
{
    IME_Language.apply(this);
};
IME_Uzbek.prototype = new IME_Language();
IME_Uzbek.prototype.ime_press_enter = function(ime_letter)
{


};

//IME_Thai
var IME_Thai = function ()
{
    IME_Language.apply(this);
};
IME_Thai.prototype = new IME_Language();
IME_Thai.prototype.ime_press_enter = function(ime_letter)
{

    ime_candidate.ime_thai_compositeSymbol();
};


//IME_Vietnamese
var IME_Vietnamese = function ()
{
    IME_Language.apply(this);
};
IME_Vietnamese.prototype = new IME_Language();
IME_Vietnamese.prototype.ime_press_enter = function(ime_letter)
{
    ime_candidate.ime_vietnamese_compositeSymbol();
};

//IME_Malay
var IME_Malay = function ()
{
    IME_Language.apply(this);
};
IME_Malay.prototype = new IME_Language();
IME_Malay.prototype.ime_press_enter = function(ime_letter)
{


};

//IME_Indonesian
var IME_Indonesian = function ()
{
    IME_Language.apply(this);
};
IME_Indonesian.prototype = new IME_Language();
IME_Indonesian.prototype.ime_press_enter = function(ime_letter)
{


};

//IME_Mongol
var IME_Mongol = function ()
{
    IME_Language.apply(this);
};
IME_Mongol.prototype = new IME_Language();
IME_Mongol.prototype.ime_press_enter = function(ime_letter)
{


};

//IME_ChineseTrad
var IME_ChineseTrad = function ()
{
    IME_Language.apply(this);
};
IME_ChineseTrad.prototype = new IME_Language();
IME_ChineseTrad.prototype.ime_press_enter = function(ime_letter)
{

};

//IME_ChineseSimple
var IME_ChineseSimple = function ()
{
    IME_Language.apply(this);
};
IME_ChineseSimple.prototype = new IME_Language();
IME_ChineseSimple.prototype.ime_press_enter = function(ime_letter)
{

};

var ime_set_press_language = function(language)
{
    var ime_language_class;
    var ime_curlanguageindex;//IQQI\u8BED\u8A00ID
    switch(language)
    {
        case ime_Languages.getLanguage("ENGLISH"):
            ime_language_class = new IME_English();
            ime_curlanguageindex = ime_Languages.getLanguageID("ENGLISH");
            break;
        case ime_Languages.getLanguage("FRANCAISE"):
            ime_language_class = new IME_French();
            ime_curlanguageindex = ime_Languages.getLanguageID("FRANCAISE");
            break;
        case ime_Languages.getLanguage("PORTUGAL"):
            ime_language_class = new IME_Portugal();
            ime_curlanguageindex = ime_Languages.getLanguageID("PORTUGAL");
            break;
        case ime_Languages.getLanguage("SPANISH"):
            ime_language_class = new IME_Spanish();
            ime_curlanguageindex = ime_Languages.getLanguageID("SPANISH");
            break;
        case ime_Languages.getLanguage("DEUTSCH"):
            ime_language_class = new IME_Deutsch();
            ime_curlanguageindex = ime_Languages.getLanguageID("DEUTSCH");
            break;
        case ime_Languages.getLanguage("POLSKI"):
            ime_language_class = new IME_Polski();
            ime_curlanguageindex = ime_Languages.getLanguageID("POLSKI");
            break;
        case ime_Languages.getLanguage("SVENSKA"):
            ime_language_class = new IME_Svenska();
            ime_curlanguageindex = ime_Languages.getLanguageID("SVENSKA");
            break;
        case ime_Languages.getLanguage("ITALIAN"):
            ime_language_class = new IME_Italian();
            ime_curlanguageindex = ime_Languages.getLanguageID("ITALIAN");
            break;
        case ime_Languages.getLanguage("RUSSIAN"):
            ime_language_class = new IME_Russian();
            ime_curlanguageindex = ime_Languages.getLanguageID("RUSSIAN");
            break;
        case ime_Languages.getLanguage("CZECH"):
            ime_language_class = new IME_Czech();
            ime_curlanguageindex = ime_Languages.getLanguageID("CZECH");
            break;
        case ime_Languages.getLanguage("CROATIAN"):
            ime_language_class = new IME_Croatian();
            ime_curlanguageindex = ime_Languages.getLanguageID("CROATIAN");
            break;
        case ime_Languages.getLanguage("LATVIAN"):
            ime_language_class = new IME_Latvian();
            ime_curlanguageindex = ime_Languages.getLanguageID("LATVIAN");
            break;
        case ime_Languages.getLanguage("LITHUANIAN"):
            ime_language_class = new IME_Lithuanian();
            ime_curlanguageindex = ime_Languages.getLanguageID("LITHUANIAN");
            break;
        case ime_Languages.getLanguage("ROMANIAN"):
            ime_language_class = new IME_Romanian();
            ime_curlanguageindex = ime_Languages.getLanguageID("ROMANIAN");
            break;
        case ime_Languages.getLanguage("NORWEGIAN"):
            ime_language_class = new IME_Norwegian();
            ime_curlanguageindex = ime_Languages.getLanguageID("NORWEGIAN");
            break;
        case ime_Languages.getLanguage("SLOVENIAN"):
            ime_language_class = new IME_Slovenian();
            ime_curlanguageindex = ime_Languages.getLanguageID("SLOVENIAN");
            break;
        case ime_Languages.getLanguage("TURKISH"):
            ime_language_class = new IME_Turkish();
            ime_curlanguageindex = ime_Languages.getLanguageID("TURKISH");
            break;
        case ime_Languages.getLanguage("UKRAINAIN"):
            ime_language_class = new IME_Ukrainain();
            ime_curlanguageindex = ime_Languages.getLanguageID("UKRAINAIN");
            break;
        case ime_Languages.getLanguage("GREEK"):
            ime_language_class = new IME_Greek();
            ime_curlanguageindex = ime_Languages.getLanguageID("GREEK");
            break;
        case ime_Languages.getLanguage("HUNGARIAN"):
            ime_language_class = new IME_Hungarian();
            ime_curlanguageindex = ime_Languages.getLanguageID("HUNGARIAN");
            break;
        case ime_Languages.getLanguage("ESTHONIAN"):
            ime_language_class = new IME_Esthonian();
            ime_curlanguageindex = ime_Languages.getLanguageID("ESTHONIAN");
            break;
        case ime_Languages.getLanguage("BULGARIAN"):
            ime_language_class = new IME_Bulgarian();
            ime_curlanguageindex = ime_Languages.getLanguageID("BULGARIAN");
            break;
        case ime_Languages.getLanguage("DANISH"):
            ime_language_class = new IME_Danish();
            ime_curlanguageindex = ime_Languages.getLanguageID("DANISH");
            break;
        case ime_Languages.getLanguage("FINNISH"):
            ime_language_class = new IME_Finnish();
            ime_curlanguageindex = ime_Languages.getLanguageID("FINNISH");
            break;
        case ime_Languages.getLanguage("DUTCH"):
            ime_language_class = new IME_Dutch();
            ime_curlanguageindex = ime_Languages.getLanguageID("DUTCH");
            break;
        case ime_Languages.getLanguage("SLOVAK"):
            ime_language_class = new IME_Slovak();
            ime_curlanguageindex = ime_Languages.getLanguageID("SLOVAK");
            break;
        case ime_Languages.getLanguage("SERBIAN"):
            ime_language_class = new IME_Serbian();
            ime_curlanguageindex = ime_Languages.getLanguageID("SERBIAN");
            break;
        case ime_Languages.getLanguage("HEBREW"):
            ime_language_class = new IME_Hebrew();
            ime_curlanguageindex = ime_Languages.getLanguageID("HEBREW");
            break;
        case ime_Languages.getLanguage("ARABIC"):
            ime_language_class = new IME_Arabic();
            ime_curlanguageindex = ime_Languages.getLanguageID("ARABIC");
            break;
        case ime_Languages.getLanguage("FARSI"):
            ime_language_class = new IME_Farsi();
            ime_curlanguageindex = ime_Languages.getLanguageID("FARSI");
            break;
        case ime_Languages.getLanguage("UZBEK"):
            ime_language_class = new IME_Uzbek();
            ime_curlanguageindex = ime_Languages.getLanguageID("UZBEK");
            break;
        case ime_Languages.getLanguage("THAI"):
            ime_language_class = new IME_Thai();
            ime_curlanguageindex = ime_Languages.getLanguageID("THAI");
            break;
        case ime_Languages.getLanguage("VIETNAMESE"):
            ime_language_class = new IME_Vietnamese();
            ime_curlanguageindex = ime_Languages.getLanguageID("VIETNAMESE");
            break;
        case ime_Languages.getLanguage("MALAY"):
            ime_language_class = new IME_Malay();
            ime_curlanguageindex = ime_Languages.getLanguageID("MALAY");
            break;
        case ime_Languages.getLanguage("INDONESIAN"):
            ime_language_class = new IME_Indonesian();
            ime_curlanguageindex = ime_Languages.getLanguageID("INDONESIAN");
            break;
        case ime_Languages.getLanguage("MONGOL"):
            ime_language_class = new IME_Mongol();
            ime_curlanguageindex = ime_Languages.getLanguageID("MONGOL");
            break;
        case ime_Languages.getLanguage("CHINESE_TRAD"):
            ime_language_class = new IME_ChineseTrad();
            ime_curlanguageindex = ime_Languages.getLanguageID("CHINESE_TRAD");
            break;
        case ime_Languages.getLanguage("CHINESE_SIMPLE"):
            ime_language_class = new IME_ChineseSimple();
            ime_curlanguageindex = ime_Languages.getLanguageID("CHINESE_SIMPLE");
            break;
    }
    ime_button_proxy.ime_setLanguage(ime_language_class);//\u8BBE\u7F6E\u5BF9\u5E94\u7684\u8BED\u8A00\u7C7B
    ime_candidate.ime_setCurLanguage(ime_curlanguageindex);//\u8BBE\u7F6EIQQI\u8BED\u8A00
};

/**
 *
* \u89C2\u5BDF\u8005\u6A21\u5F0F\u5DE5\u5177\u7C7B
* @param name
* @constructor
*/
var IME_Notice = function(name)
{
    this.name = name;
    this.registers = [];//\u6BCF\u4E00\u4E2A\u5143\u7D20\u662F\u51FD\u6570\u7C7B\u578B
};
//IME_Notice\u7C7B\u7684\u5B9E\u4F8B\u5BF9\u8C61\u53BB\u53D1\u5E03\u6D88\u606F
IME_Notice.prototype.ime_notice = function(news)
{
    var ime_notice = this;
    this.registers.forEach(function(fn){
        fn(news,ime_notice);//\u628A\u65B0\u6D88\u606F\u53D1\u7ED9\u8BA2\u9605\u8005
    });
    return this;
};

//\u8BA2\u9605\u7684\u65B9\u6CD5
Function.prototype.ime_regist = function(ime_notice)
{
    var sub = this;//\u53D6\u5F97\u5177\u4F53\u8BA2\u9605\u8005\u8FD9\u4E2A\u4EBA
    var alreadyExists = ime_notice.registers.some(function(item){
        return item === sub;
    });
    if(!alreadyExists)
    {
        ime_notice.registers.push(this);
    }
    return this;
};


var ime_Keyboard = (function ()
{
    /**
     *\u95ED\u5305\u5355\u4F8B\u6A21\u5F0F
     */
    function keyboard(buttonProxy)
    {
        var _languageJson;//\u4F20\u8FDB\u6765\u7684json\u6570\u636E
        var ime_body;//\u952E\u76D8\u63D2\u5165\u9875\u7684body
        var rows;//\u952E\u76D8\u5171\u6709\u51E0\u884C
        var columns;//\u952E\u76D8\u6BCF\u884C\u5171\u6709\u51E0\u4E2A\u6309\u952E

        var cur_row;//\u4E0A\u4E0B\u5DE6\u53F3\u79FB\u52A8\u7528\u5230\u7684
        var cur_column;//\u4E0A\u4E0B\u5DE6\u53F3\u79FB\u52A8\u7528\u5230\u7684
        var ime_keyboard_ui;
        var _buttonProxy = buttonProxy;
        var keboardTransportView;

        function ime_getEID(id){
            return document.getElementById(id);
        }
        /**
         *\u8BBE\u7F6E\u8BED\u8A00\u51FD\u6570,\u4E3B\u8981\u4E3A\u4E86\u662F4\u884C\u8FD8\u662F5\u884C
         */
        var ime_setLanguage = function(languageJson)
        {
            if(_languageJson != languageJson)
            {
            
            	_languageJson = languageJson;
	            rows = _languageJson.length;
	            columns = _languageJson[0].length;
	            
	            for(var i = 0; i < rows; i++)
	            {
	                for(var j = 0; j < columns; j++)
	                {
	                	var normalimg = languageJson[i][j].normal_img;
	                	var focusimg  = languageJson[i][j].focus_img;
                        _languageJson[i][j].normal_img =  normalimg.replace("url(images","url("+imagepath+"images");
	                	_languageJson[i][j].focus_img  =  focusimg.replace("url(images","url("+imagepath+"images");
	                }
	            }
            }


            if(ime_body != null || ime_body != undefined )//\u5207\u6362\u884C\u6570\u65F6\u5148\u79FB\u9664\u539F\u6765\u7684
            {
                ime_body.removeChild(ime_keyboard_ui);
            }
            if(keboardTransportView!=null || keboardTransportView != undefined)
            {
            	ime_body.removeChild(keboardTransportView);
            }
        };

        /**
         *\u7ED8\u5236\u952E\u76D8\u51FD\u6570
         */
        var ime_DrawKeyboard = function()
        {
            cur_row = 0;
            cur_column = 0;
            rows = _languageJson.length;
            columns = _languageJson[0].length;
            ime_body = document.getElementsByTagName("body")[0];


            keboardTransportView = document.createElement("div");
            keboardTransportView.style.cssText = " height: 720px;width: 1280px;left:0px;bottom:0px;position:fixed;z-index: 2147483640;background-color: rgba(0,0,0,0)";
            keboardTransportView.style.zoom = zoomFactor;
            keboardTransportView.id = "keboardTransport";
            document.body.appendChild(keboardTransportView);

             keboardTransportView.onmousedown=function(evt)
            {
            	evt.preventDefault();
                //document.body.removeChild(setDivBgRight);
                 ime_closeKeyBoard();

            };



            //\u6574\u4E2AUI div
            ime_keyboard_ui = document.createElement("div");
            ime_keyboard_ui.id = "ime_keyboard_ui";
            ime_keyboard_ui.style.cssText = "width: 1280px; height: 311px;left:0px;  z-index: 2147483641; bottom:0px;position:fixed";
            ime_keyboard_ui.style.zoom = zoomFactor;
            ime_body.appendChild(ime_keyboard_ui);

            ime_keyboard_ui.onmousedown = function(evt)
            {
                evt.preventDefault();
                if(evt.button == 2)
                {
                    ime_closeKeyBoard();
                }

            }

            //\u952E\u76D8\u90E8\u5206div
            var ime_keyboard_ui_main = document.createElement("div");
            ime_keyboard_ui_main.style.cssText = "width: 1280px; height: 254px; margin: 57px auto; background-image: url("+imagepath+"images/ime/bg_keyboard.png) ; position: absolute; z-index: 2147483641;";
            ime_keyboard_ui.appendChild(ime_keyboard_ui_main);
            //\u952E\u76D8\u548C\u5019\u9009\u8BCD\u5206\u5272\u7EBFdiv
            var ime_keyboard_ui_line = document.createElement("div");
            ime_keyboard_ui_line.style.cssText = "width: 1280px; height: 1px; margin: 56px auto; background-image: url("+imagepath+"images/ime/bg_line.png) ; position: absolute; z-index: 2147483641;";
            ime_keyboard_ui.appendChild(ime_keyboard_ui_line);

            //\u952E\u76D8ul
            var ime_keyboard_ui_main_ul = document.createElement("ul");
            ime_keyboard_ui_main_ul.id = "ime_keyboard_ui_main_ul";
            if(columns == 12 && rows == 4)
            {
            		//alert("arabic");
             		ime_keyboard_ui_main_ul.style.cssText = " width: 1015px; height: 254px; margin: 5px 155px auto; padding: 0px; list-style-type: none;";
            }else if(columns == 12 && rows == 5)
            {
            		//alert("arabic");
             		ime_keyboard_ui_main_ul.style.cssText = " width: 1060px; height: 254px; margin: 5px 130px auto; padding: 0px; list-style-type: none;";
            }
            else
            {
				ime_keyboard_ui_main_ul.style.cssText = " width: 960px; height: 254px; margin: 5px auto; padding: 0px; list-style-type: none;";
            }

            ime_keyboard_ui_main_ul.style.verticalAlign="top";
            ime_keyboard_ui_main.appendChild(ime_keyboard_ui_main_ul);
            //\u521B\u5EFA\u9664\u53BB\u6700\u540E\u4E00\u884C\u7684\u6309\u952E

            for(var i = 0; i < rows-1; i++)
            {
                for(var j = 0; j < columns; j++)
                {
                    var ime_keyboard_letters_li = document.createElement("li");
                    ime_keyboard_letters_li.id = _languageJson[i][j].li_id;
                    var ime_keyboard_letters = document.createElement("input");
                    ime_keyboard_letters.id = _languageJson[i][j].input_id;
                    ime_keyboard_letters.type = "button";
                    ime_keyboard_letters.value = _languageJson[i][j].input_value;
                    ime_keyboard_letters_li.appendChild(ime_keyboard_letters);
                    ime_keyboard_ui_main_ul.appendChild(ime_keyboard_letters_li);
                    if(columns == 11 && rows == 4)//4\u884C\u952E\u76D8\u7684\u6837\u5F0F

                    {
                        ime_keyboard_letters_li.style.cssText = "width: auto; height: 61px; border: 0px; float:left; padding: 0px; margin: -3px -2px auto;list-style-type: none;";
                        ime_keyboard_letters.style.cssText = "outline:none; background-color: transparent; background-image: url("+imagepath+"images/ime/normal_letters.png); width: 87px; height: 61px; border: 0px; padding: 0px; font-size: 20px; font-weight:500; color: white;margin:0;";
                    }else if(columns == 11 && rows == 5)//5\u884C\u952E\u76D8\u7684\u6837\u5F0F
                    {
                        ime_keyboard_letters_li.style.cssText = "width: auto; height: 41px; border: 0px; float:left; padding: 0px; margin: 3px  auto;list-style-type: none;";
                        ime_keyboard_letters.style.cssText = "outline:none; background-color: transparent; background-image: url("+imagepath+"images/french/normal_letters.png); width: 87px; height: 41px; border: 0px; padding: 0px; font-size: 20px; font-weight:500; color: white;margin:0;";
                    }
                    else if(columns == 12 && rows == 4)//5\u884C\u952E\u76D8\u7684\u6837\u5F0F
                    {
                    //	alert("arabic 2");
   					ime_keyboard_letters_li.style.cssText = "width: auto; height: 61px; border: 0px; float:left; padding: 0px; margin: -3px -2px auto;list-style-type: none;";
          			ime_keyboard_letters.style.cssText = "outline:none; background-color: transparent; background-image: url("+imagepath+"images/ime/normal_letters.png); width: 87px; height: 61px; border: 0px; padding: 0px; font-size: 20px; font-weight:500; color: white;margin:0;";

                       }
                    else if(columns == 12 && rows == 5)
                    {
                    	ime_keyboard_letters_li.style.cssText = "width: auto; height: 41px; border: 0px; float:left; padding: 0px; margin: 3px  auto;list-style-type: none;";
                     	ime_keyboard_letters.style.cssText = "outline:none; background-color: transparent; background-image: url("+imagepath+"images/french/normal_letters.png); width: 87px; height: 41px; border: 0px; padding: 0px; font-size: 20px; font-weight:500; color: white;margin:0;";
                    }

                    ime_keyboard_letters_li.style.verticalAlign = "top";
                    ime_keyboard_letters.style.verticalAlign = "top";

                    ime_keyboard_letters.setAttribute("newAttrC",j);
                    ime_keyboard_letters.setAttribute("newAttrR",i);
                    ime_keyboard_letters.onmousedown = function(evt)
                    {
                        evt.preventDefault();
                        if(evt.button == 0)
                        {
                            ime_getEID(_languageJson[cur_row][cur_column].input_id).style.backgroundImage = _languageJson[cur_row][cur_column].normal_img;
                            cur_row = parseInt(this.getAttribute("newAttrR"));
                            cur_column = parseInt(this.getAttribute("newAttrC"));
                            ime_getEID(_languageJson[cur_row][cur_column].input_id).style.backgroundImage = _languageJson[cur_row][cur_column].focus_img;
                            ime_enter();
                        }
                    }
                    ime_keyboard_letters.onmouseup = function(evt)
                    {
                        ime_mouseflag = 1;
                    }
                }
            }
            //delete\u6309\u952E\u53E0\u52A0\u5C42
            ime_getEID(_languageJson[0][columns-1].li_id).style.backgroundImage = _languageJson[0][columns-1].normal_img;
            //shift\u6309\u952E\u53E0\u52A0\u5C42
           
            if(_languageJson[rows-2][0].input_name == "shift")
            	ime_getEID(_languageJson[rows-2][0].li_id).style.backgroundImage = _languageJson[rows-2][0].normal_img;
            if(_languageJson[rows-2][columns-1].input_name == "delete")
                ime_getEID(_languageJson[rows-2][columns-1].li_id).style.backgroundImage = _languageJson[rows-2][columns-1].normal_img;


            for(var k = 0; k < columns; k++)
            {
                if(_languageJson[rows - 1][k].repeat_flag != 0)//\u91CD\u590D\u7684\u6309\u952E\u4E0D\u521B\u5EFA
                {

                    var ime_keyboard_letters_li = document.createElement("li");
                    ime_keyboard_letters_li.id = _languageJson[rows - 1][k].li_id;
                    var ime_keyboard_letters = document.createElement("input");
                    ime_keyboard_letters.id = _languageJson[rows - 1][k].input_id;
                    ime_keyboard_letters.type = "button";
                    ime_keyboard_letters.value = _languageJson[rows - 1][k].input_value;
                    ime_keyboard_letters_li.appendChild(ime_keyboard_letters);
                    ime_keyboard_ui_main_ul.appendChild(ime_keyboard_letters_li);
                    if(columns == 11 && rows == 4)
                    {
                        ime_keyboard_letters_li.style.cssText = "width: auto; height: 61px; border: 0px; float:left; padding: 0px; margin: -3px -2px auto;list-style-type: none;";
                    }else if(columns == 11 && rows == 5)
                    {
                        ime_keyboard_letters_li.style.cssText = "width: auto; height: 41px; border: 0px; float:left; padding: 0px; list-style-type: none;margin: 3px  auto;";
                    }
                    else if(columns == 12 && rows == 4)
                    {
                        ime_keyboard_letters_li.style.cssText =  "width: auto; height: 61px; border: 0px; float:left; padding: 0px; margin: -3px -2px auto;list-style-type: none;";
                    }
                    else if(columns == 12 && rows == 5)
                    {
                    
                        ime_keyboard_letters_li.style.cssText =   "width: auto; height: 41px; border: 0px; float:left; padding: 0px; list-style-type: none;margin: 3px  auto;";
                    }
                    ime_keyboard_letters_li.style.verticalAlign = "top";
                    ime_keyboard_letters.style.verticalAlign = "top";

                    ime_keyboard_letters.setAttribute("newAttrC",k);
                    ime_keyboard_letters.setAttribute("newAttrR",rows - 1);
                    ime_keyboard_letters.onmousedown = function(evt)
                    {
                        evt.preventDefault();
                        if(evt.button == 0)
                        {
                            ime_getEID(_languageJson[cur_row][cur_column].input_id).style.backgroundImage = _languageJson[cur_row][cur_column].normal_img;
                            cur_row = parseInt(this.getAttribute("newAttrR"));
                            cur_column = parseInt(this.getAttribute("newAttrC"));
                            ime_getEID(_languageJson[cur_row][cur_column].input_id).style.backgroundImage = _languageJson[cur_row][cur_column].focus_img;
                            ime_enter();
                        }
                    }
                }
            }
            if(rows == 4 && _languageJson[rows-1][3].repeat_flag == 5)//4\u884C\u952E\u76D8\u7A7A\u683C\u53605\u4E2A\u5B57\u7B26\u7684\u6837\u5F0F
            {
                ime_getEID(_languageJson[rows-1][0].input_id).style.cssText = "outline:none; width: 128px; height: 61px; background-color: transparent; background-image: url("+imagepath+"images/ime/normal_language.png); border: 0px; font-size: 20px; font-weight:500; color: white;margin:0;vertical-align:top";
                ime_getEID(_languageJson[rows-1][2].input_id).style.cssText = "outline:none; width: 128px; height: 61px; background-color: transparent; background-image: url("+imagepath+"images/ime/normal_language.png); border: 0px; font-size: 20px; font-weight:500; color: white;margin:0;vertical-align:top";
                ime_getEID(_languageJson[rows-1][3].input_id).style.cssText = "outline:none; width: 420px; height: 61px; background-image:url("+imagepath+"images/ime/normal_space.png); border: 0px; background-color: transparent;margin:0;vertical-align:top";
                ime_getEID(_languageJson[rows-1][8].input_id).style.cssText = "outline:none; background-color: transparent; background-image: url("+imagepath+"images/ime/normal_letters.png); width: 87px; height: 61px; border: 0px; padding: 0px; font-size: 20px; font-weight:500; color: white;margin:0;vertical-align:top";
                if(columns == 11) {
                    ime_getEID(_languageJson[rows-1][9].input_id).style.cssText = "outline:none; background-color: transparent; background-image: url("+imagepath+"images/ime/setting.png); width: 87px; height: 61px; border: 0px; padding: 0px;margin:0;vertical-align:top";
                    ime_getEID(_languageJson[rows-1][10].input_id).style.cssText = "outline:none; background-color: transparent; background-image: url("+imagepath+"images/ime/enter.png); width: 87px; height: 61px; border: 0px; padding: 0px;margin:0;vertical-align:top";
                }
                else if(columns == 12){
                    ime_getEID(_languageJson[rows-1][9].input_id).style.cssText = "outline:none; background-color: transparent; background-image: url("+imagepath+"images/ime/normal_letters.png); width: 87px; height: 61px; border: 0px; padding: 0px; font-size: 20px; font-weight:500; color: white;margin:0;vertical-align:top";
                    ime_getEID(_languageJson[rows-1][10].input_id).style.cssText = "outline:none; background-color: transparent; background-image: url("+imagepath+"images/ime/setting.png); width: 87px; height: 61px; border: 0px; padding: 0px;margin:0;vertical-align:top";
                    ime_getEID(_languageJson[rows-1][11].input_id).style.cssText = "outline:none; background-color: transparent; background-image: url("+imagepath+"images/ime/enter.png); width: 87px; height: 61px; border: 0px; padding: 0px;margin:0;vertical-align:top";
                }
                //space\u6309\u952E\u53E0\u52A0\u5C42
                ime_getEID(_languageJson[rows-1][3].li_id).style.backgroundImage = "url("+imagepath+"images/ime/space.png)";
            }else if(columns == 11 && rows == 4 && _languageJson[rows-1][3].repeat_flag == 2)//4\u884C\u952E\u76D8\u7A7A\u683C\u53602\u4E2A\u5B57\u7B26\u7684\u6837\u5F0F
            {
                ime_getEID(_languageJson[rows-1][0].input_id).style.cssText = "outline:none; width: 128px; height: 61px; background-color: transparent; background-image: url("+imagepath+"images/ime/normal_language.png); border: 0px; font-size: 20px; font-weight:500; color: white;margin:0;vertical-align:top";
                ime_getEID(_languageJson[rows-1][2].input_id).style.cssText = "outline:none; width: 128px; height: 61px; background-color: transparent; background-image: url("+imagepath+"images/ime/normal_language.png); border: 0px; font-size: 20px; font-weight:500; color: white;margin:0;vertical-align:top";
                ime_getEID(_languageJson[rows-1][3].input_id).style.cssText = "outline:none; width: 172px; height: 61px; background-image:url("+imagepath+"images/ime/normal_space_2.png); border: 0px; background-color: transparent;margin:0;vertical-align:top";
                ime_getEID(_languageJson[rows-1][5].input_id).style.cssText = "outline:none; background-color: transparent; background-image: url("+imagepath+"images/ime/normal_letters.png); width: 87px; height: 61px; border: 0px; padding: 0px; font-size: 20px; font-weight:500; color: white;margin:0;vertical-align:top";
                ime_getEID(_languageJson[rows-1][6].input_id).style.cssText = "outline:none; background-color: transparent; background-image: url("+imagepath+"images/ime/normal_letters.png); width: 87px; height: 61px; border: 0px; padding: 0px; font-size: 20px; font-weight:500; color: white;margin:0;vertical-align:top";
                ime_getEID(_languageJson[rows-1][7].input_id).style.cssText = "outline:none; background-color: transparent; background-image: url("+imagepath+"images/ime/normal_letters.png); width: 87px; height: 61px; border: 0px; padding: 0px; font-size: 20px; font-weight:500; color: white;margin:0;vertical-align:top";
                ime_getEID(_languageJson[rows-1][8].input_id).style.cssText = "outline:none; background-color: transparent; background-image: url("+imagepath+"images/ime/normal_letters.png); width: 87px; height: 61px; border: 0px; padding: 0px; font-size: 20px; font-weight:500; color: white;margin:0;vertical-align:top";
                ime_getEID(_languageJson[rows-1][9].input_id).style.cssText = "outline:none; background-color: transparent; background-image: url("+imagepath+"images/ime/setting.png); width: 87px; height: 61px; border: 0px; padding: 0px;margin:0;vertical-align:top";
                ime_getEID(_languageJson[rows-1][10].input_id).style.cssText = "outline:none; background-color: transparent; background-image: url("+imagepath+"images/ime/enter.png); width: 87px; height: 61px; border: 0px; padding: 0px;margin:0;vertical-align:top";
                //space\u6309\u952E\u53E0\u52A0\u5C42
                ime_getEID(_languageJson[rows-1][3].li_id).style.backgroundImage = "url("+imagepath+"images/ime/space_2.png)";
            }else if(columns == 11 && rows == 5)//5\u884C\u952E\u76D8\u7684\u6837\u5F0F
            {
                ime_getEID(_languageJson[rows-1][0].input_id).style.cssText = "outline:none; width: 130px; height: 41px; background-color: transparent; background-image: url("+imagepath+"images/french/normal_language.png); border: 0px; font-size: 20px; font-weight:500; color: white;margin:0;vertical-align:top";
                ime_getEID(_languageJson[rows-1][2].input_id).style.cssText = "outline:none; width: 130px; height: 41px; background-color: transparent; background-image: url("+imagepath+"images/french/normal_language.png); border: 0px; font-size: 20px; font-weight:500; color: white;margin:0;vertical-align:top";
                ime_getEID(_languageJson[rows-1][3].input_id).style.cssText = "outline:none; width: 436px; height: 41px; background-image:url("+imagepath+"images/french/normal_space.png); border: 0px; background-color: transparent;margin:0;vertical-align:top";
                ime_getEID(_languageJson[rows-1][8].input_id).style.cssText = "outline:none; background-color: transparent; background-image: url("+imagepath+"images/french/normal_letters.png); width: 87px; height: 41px; border: 0px; padding: 0px; font-size: 20px; font-weight:500; color: white;margin:0;vertical-align:top";
                ime_getEID(_languageJson[rows-1][9].input_id).style.cssText = "outline:none; background-color: transparent; background-image: url("+imagepath+"images/french/setting.png); width: 87px; height: 41px; border: 0px; padding: 0px;margin:0;vertical-align:top";
                ime_getEID(_languageJson[rows-1][10].input_id).style.cssText = "outline:none; background-color: transparent; background-image: url("+imagepath+"images/french/enter.png); width: 87px; height: 41px; border: 0px; padding: 0px;margin:0;vertical-align:top";
                //space\u6309\u952E\u53E0\u52A0\u5C42
                ime_getEID(_languageJson[rows-1][3].li_id).style.backgroundImage = "url("+imagepath+"images/french/space.png)";
            }else if(columns == 12 && rows == 4)
            {
               ime_getEID(_languageJson[rows - 1][0].input_id).style.cssText = "outline:none; width: 128px; height: 61px; background-color: transparent; background-image: url("+imagepath+"images/ime/normal_language.png); border: 0px; font-size: 20px; font-weight:500; color: white;margin:0;vertical-align:top";
		     ime_getEID(_languageJson[rows - 1][2].input_id).style.cssText = "outline:none; width: 128px; height: 61px; background-color: transparent; background-image: url("+imagepath+"images/ime/normal_language.png); border: 0px; font-size: 20px; font-weight:500; color: white;margin:0;vertical-align:top";
		     ime_getEID(_languageJson[rows - 1][3].input_id).style.cssText = "outline:none; width: 420px; height: 61px; background-image:url("+imagepath+"images/ime/normal_space.png); border: 0px; background-color: transparent;margin:0;vertical-align:top";
		     ime_getEID(_languageJson[rows - 1][8].input_id).style.cssText = "outline:none; background-color: transparent; background-image: url("+imagepath+"images/ime/normal_letters.png); width: 87px; height: 61px; border: 0px; padding: 0px; font-size: 20px; font-weight:500; color: white;margin:0;vertical-align:top";
		     ime_getEID(_languageJson[rows - 1][9].input_id).style.cssText = "outline:none; background-color: transparent; background-image: url("+imagepath+"images/ime/normal_letters.png); width: 87px; height: 61px; border: 0px; padding: 0px; font-size: 20px; font-weight:500; color: white;margin:0;vertical-align:top";
		     ime_getEID(_languageJson[rows - 1][10].input_id).style.cssText = "outline:none; background-color: transparent; background-image: url("+imagepath+"images/ime/setting.png); width: 87px; height: 61px; border: 0px; padding: 0px;margin:0;vertical-align:top";
		     ime_getEID(_languageJson[rows - 1][11].input_id).style.cssText = "outline:none; background-color: transparent; background-image: url("+imagepath+"images/ime/enter.png); width: 87px; height: 61px; border: 0px; padding: 0px;margin:0;vertical-align:top";
		     ime_getEID(_languageJson[rows - 1][3].li_id).style.backgroundImage = "url(file:///system/ui/images/ime/space.png)";
            }else if(columns == 12 && rows == 5)
            {
               ime_getEID(_languageJson[rows - 1][0].input_id).style.cssText = "outline:none; width: 130px; height: 41px; background-color: transparent; background-image: url("+imagepath+"images/french/normal_language.png); border: 0px; font-size: 20px; font-weight:500; color: white;margin:0;vertical-align:top";
   			ime_getEID(_languageJson[rows - 1][2].input_id).style.cssText = "outline:none; width: 130px; height: 41px; background-color: transparent; background-image: url("+imagepath+"images/french/normal_language.png); border: 0px; font-size: 20px; font-weight:500; color: white;margin:0;vertical-align:top";
   			ime_getEID(_languageJson[rows - 1][3].input_id).style.cssText = "outline:none; width: 436px; height: 41px; background-image:url("+imagepath+"images/french/normal_space.png); border: 0px; background-color: transparent;margin:0;vertical-align:top";
    			ime_getEID(_languageJson[rows - 1][8].input_id).style.cssText = "outline:none; background-color: transparent; background-image: url("+imagepath+"images/french/normal_letters.png); width: 87px; height: 41px; border: 0px; padding: 0px; font-size: 20px; font-weight:500; color: white;margin:0;vertical-align:top";
    			ime_getEID(_languageJson[rows - 1][9].input_id).style.cssText = "outline:none; background-color: transparent; background-image: url("+imagepath+"images/french/normal_letters.png); width: 87px; height: 41px; border: 0px; padding: 0px; font-size: 20px; font-weight:500; color: white;margin:0;vertical-align:top";
    			ime_getEID(_languageJson[rows - 1][10].input_id).style.cssText = "outline:none; background-color: transparent; background-image: url("+imagepath+"images/french/setting.png); width: 87px; height: 41px; border: 0px; padding: 0px;margin:0;vertical-align:top";
    			ime_getEID(_languageJson[rows - 1][11].input_id).style.cssText = "outline:none; background-color: transparent; background-image: url("+imagepath+"images/french/enter.png); width: 87px; height: 41px; border: 0px; padding: 0px;margin:0;vertical-align:top";
                ime_getEID(_languageJson[rows-1][3].li_id).style.backgroundImage = "url("+imagepath+"images/french/space.png)";
            }

            //language\u6309\u952E\u53E0\u52A0\u5C42
            ime_getEID(_languageJson[rows-1][0].li_id).style.backgroundImage = _languageJson[rows-1][0].normal_img;
            //number\u6309\u952E\u53E0\u52A0\u5C42
            ime_getEID(_languageJson[rows-1][2].li_id).style.backgroundImage = _languageJson[rows-1][2].normal_img;

            //setting\u6309\u952E\u53E0\u52A0\u5C42
            ime_getEID(_languageJson[rows-1][columns - 2].li_id).style.backgroundImage = _languageJson[rows-1][columns - 2].normal_img;
            //enter\u6309\u952E\u53E0\u52A0\u5C42
            ime_getEID(_languageJson[rows-1][columns - 1].li_id).style.backgroundImage = _languageJson[rows-1][columns - 1].normal_img;

            //\u7ED8\u5236\u5B8C\u6BD5\u540E\u8BA9\u6309\u952E\u805A\u7126
            ime_getEID(_languageJson[0][0].input_id).style.backgroundImage = _languageJson[0][0].focus_img;

        };

        var ime_enter = function()
        {
           // alert("the input value is " +(_languageJson[cur_row][cur_column].input_value));
            if((ime_getEID(_languageJson[cur_row][cur_column].input_id).value) == "" || _languageJson[cur_row][cur_column].input_name == "language" )
                _buttonProxy.ime_press_enter((_languageJson[cur_row][cur_column].input_name));
            else
                _buttonProxy.ime_press_enter((ime_getEID(_languageJson[cur_row][cur_column].input_id).value));
        };

        var ime_hardkeyboard = function(value)
        {
            _buttonProxy.ime_press_enter(value);
        };

        var ime_right = function()
        {
            if(cur_row < rows-1)//\u4E0D\u662F\u6700\u540E\u4E00\u884C
            {
                ime_getEID(_languageJson[cur_row][cur_column].input_id).style.backgroundImage = _languageJson[cur_row][cur_column].normal_img;
                if(cur_column < columns-1)
                {
                    cur_column+=1;
                }else
                {
                    cur_column = 0;
                }
                ime_getEID(_languageJson[cur_row][cur_column].input_id).style.backgroundImage = _languageJson[cur_row][cur_column].focus_img;
            }else//\u6700\u540E\u4E00\u884C
            {
                ime_getEID(_languageJson[cur_row][cur_column].input_id).style.backgroundImage = _languageJson[cur_row][cur_column].normal_img;
                if(cur_column < columns-1)
                {
                    var ime_cur_button = _languageJson[cur_row][cur_column].input_id;
                    cur_column += 1;
                    for(;cur_column < columns;cur_column++)//\u53BB\u9664\u91CD\u590D\u7684\u5143\u7D20
                    {
                        if(ime_cur_button !=  _languageJson[cur_row][cur_column].input_id)
                        {
                            break;
                        }
                    }
                }else
                {
                    cur_column = 0;

                }
                ime_getEID(_languageJson[cur_row][cur_column].input_id).style.backgroundImage = _languageJson[cur_row][cur_column].focus_img;
            }
        };

        var ime_left = function()
        {
            if(cur_row < rows-1)//\u4E0D\u662F\u6700\u540E\u4E00\u884C
            {
                ime_getEID(_languageJson[cur_row][cur_column].input_id).style.backgroundImage = _languageJson[cur_row][cur_column].normal_img;
                if(cur_column == 0)
                {
                    cur_column = columns - 1;
                }else
                {
                    cur_column -= 1;
                }
                ime_getEID(_languageJson[cur_row][cur_column].input_id).style.backgroundImage = _languageJson[cur_row][cur_column].focus_img;

            }else//\u6700\u540E\u4E00\u884C
            {
                ime_getEID(_languageJson[cur_row][cur_column].input_id).style.backgroundImage = _languageJson[cur_row][cur_column].normal_img;
                if(cur_column == 0 || cur_column == 1)
                {
                    cur_column = columns -1;
                }
                else
                {
                    var ime_cur_button = _languageJson[cur_row][cur_column].input_id;
                    cur_column -= 1;
                    for(;cur_column > 0;cur_column--)//\u53BB\u9664\u91CD\u590D\u7684\u5143\u7D20
                    {

                        if(ime_cur_button !=  _languageJson[cur_row][cur_column].input_id)
                        {
                            break;
                        }
                    }
                }
                ime_getEID(_languageJson[cur_row][cur_column].input_id).style.backgroundImage = _languageJson[cur_row][cur_column].focus_img;
            }
        };

        var ime_down = function()
        {
            ime_getEID(_languageJson[cur_row][cur_column].input_id).style.backgroundImage = _languageJson[cur_row][cur_column].normal_img;
            if(cur_row < rows -1)
            {
                cur_row += 1;
            }else
            {
                cur_row = 0;
            }
            ime_getEID(_languageJson[cur_row][cur_column].input_id).style.backgroundImage = _languageJson[cur_row][cur_column].focus_img;
        };

        var ime_up = function()
        {
            ime_getEID(_languageJson[cur_row][cur_column].input_id).style.backgroundImage = _languageJson[cur_row][cur_column].normal_img;
            if(cur_row == 0)
            {
                cur_row = rows - 1;
            }else
            {
                cur_row -= 1;
            }
            ime_getEID(_languageJson[cur_row][cur_column].input_id).style.backgroundImage = _languageJson[cur_row][cur_column].focus_img;
        };

        var ime_cur_row =function()///\u5F97\u5230\u5F53\u524D\u6240\u5728\u884C
        {
            return cur_row;
        };

        var ime_cur_rownum =function()///\u5F97\u5230\u5F53\u524D\u952E\u76D8\u603B\u884C\u6570
        {
            return rows;
        };

        var ime_lostfocus = function()//\u952E\u76D8\u5931\u7126\u70B9\u5230\u5019\u9009\u8BCD\u6846
        {
            ime_getEID(_languageJson[cur_row][cur_column].input_id).style.backgroundImage = _languageJson[cur_row][cur_column].normal_img;
        };

        var ime_setfocus = function(row,column)
        {
            cur_row = row;
            cur_column = column;
        };

        var ime_getfocus = function()//\u952E\u76D8\u5F97\u5230\u7126\u70B9
        {
            ime_getEID(_languageJson[cur_row][cur_column].input_id).style.backgroundImage = _languageJson[cur_row][cur_column].focus_img;
        };
        var ime_destoryKeyboard = function()//\u952E\u76D8\u5F97\u5230\u7126\u70B9
        {
            ime_body = undefined;
            ime_keyboard_ui = undefined;
            keboardTransportView = undefined;
        };
        /**
         * \u66B4\u9732\u7684public\u65B9\u6CD5\u548C\u5C5E\u6027
         */
        return{
        ime_setLanguage:ime_setLanguage,
        ime_DrawKeyboard:ime_DrawKeyboard,
        ime_right:ime_right,
        ime_left:ime_left,
        ime_down:ime_down,
        ime_up:ime_up,
        ime_enter:ime_enter,
        ime_cur_row:ime_cur_row,
        ime_cur_rownum:ime_cur_rownum,
        ime_lostfocus:ime_lostfocus,
        ime_getfocus:ime_getfocus,
        ime_destoryKeyboard:ime_destoryKeyboard,
        ime_setfocus:ime_setfocus,
        ime_hardkeyboard:ime_hardkeyboard
    };

    }

    /**
     * \u5B9E\u4F8B\u5BB9\u5668
     */
    var instance;

    return {
        getInstance: function (buttonProxy)
        {
            if (instance === undefined)
            {
                instance =  keyboard(buttonProxy);
            }
            return instance;
        }
    };
})();


var number_values = [{"inputid":"ime_keyboard_letters_/","value":"1"},{"inputid":"ime_keyboard_letters_\u05F3","value":"2"},
    {"inputid":"ime_keyboard_letters_\u05E7","value":"3"},{"inputid":"ime_keyboard_letters_\u05E8","value":"4"},{"inputid":"ime_keyboard_letters_\u05D0","value":"5"},
    {"inputid":"ime_keyboard_letters_\u05D8","value":"6"},{"inputid":"ime_keyboard_letters_\u05D5","value":"7"},{"inputid":"ime_keyboard_letters_\u05DF","value":"8"},
    {"inputid":"ime_keyboard_letters_\u05DD","value":"9"},{"inputid":"ime_keyboard_letters_\u05E4","value":"0"},{"inputid":"ime_keyboard_letters_\u05E9","value":"\\"},
    {"inputid":"ime_keyboard_letters_\u05D3","value":"#"},{"inputid":"ime_keyboard_letters_\u05D2","value":"$"},{"inputid":"ime_keyboard_letters_\u05DB","value":"%"},
    {"inputid":"ime_keyboard_letters_\u05E2","value":"&"},{"inputid":"ime_keyboard_letters_\u05D9","value":"*"},{"inputid":"ime_keyboard_letters_\u05D7","value":"("},
    {"inputid":"ime_keyboard_letters_\u05DC","value":")"},{"inputid":"ime_keyboard_letters_\u05DA","value":"/"},{"inputid":"ime_keyboard_letters_\u05E3","value":"_"},
    {"inputid":"ime_keyboard_letters_,","value":"..."},{"inputid":"ime_keyboard_letters_\u05D6","value":"<1/2>"},{"inputid":"ime_keyboard_letters_\u05E1","value":","},
    {"inputid":"ime_keyboard_letters_\u05D1","value":"."},{"inputid":"ime_keyboard_letters_\u05D4","value":"?"},{"inputid":"ime_keyboard_letters_\u05E0","value":"!"},
    {"inputid":"ime_keyboard_letters_\u05DE","value":":"},{"inputid":"ime_keyboard_letters_\u05E6","value":";"},{"inputid":"ime_keyboard_letters_\u05EA","value":"\""},
    {"inputid":"ime_keyboard_letters_\u05E5","value":"\'"},{"inputid":"ime_keyboard_letters_.","value":"<"},{"inputid":"ime_keyboard_letters_;","value":">"},
    {"inputid":"ime_keyboard_letters_number","value":"abc"}
];
var faris_number_values = [{"inputid":"ime_keyboard_letters_/","value":"1"},{"inputid":"ime_keyboard_letters_\u05F3","value":"2"},
    {"inputid":"ime_keyboard_letters_\u05E7","value":"3"},{"inputid":"ime_keyboard_letters_\u05E8","value":"4"},{"inputid":"ime_keyboard_letters_\u05D0","value":"5"},
    {"inputid":"ime_keyboard_letters_\u05D8","value":"6"},{"inputid":"ime_keyboard_letters_\u05D5","value":"7"},{"inputid":"ime_keyboard_letters_\u05DF","value":"8"},
    {"inputid":"ime_keyboard_letters_\u05DD","value":"9"},{"inputid":"ime_keyboard_letters_\u05E4","value":"0"},{"inputid":"ime_keyboard_letters_\u05E9","value":"\\"},
    {"inputid":"ime_keyboard_letters_\u05D3","value":"#"},{"inputid":"ime_keyboard_letters_\u05D2","value":"$"},{"inputid":"ime_keyboard_letters_\u05DB","value":"%"},
    {"inputid":"ime_keyboard_letters_\u05E2","value":"&"},{"inputid":"ime_keyboard_letters_\u05D9","value":"*"},{"inputid":"ime_keyboard_letters_\u05D7","value":"("},
    {"inputid":"ime_keyboard_letters_\u05DC","value":")"},{"inputid":"ime_keyboard_letters_\u05DA","value":"/"},{"inputid":"ime_keyboard_letters_\u05E3","value":"_"},
    {"inputid":"ime_keyboard_letters_,","value":"\u062A\u0648\u0645\u0627\u0646"},{"inputid":"ime_keyboard_letters_\u05D6","value":"<1/2>"},{"inputid":"ime_keyboard_letters_\u05E1","value":"\u060c"},
    {"inputid":"ime_keyboard_letters_\u05D1","value":"\u0640"},{"inputid":"ime_keyboard_letters_\u05D4","value":"\u061F"},{"inputid":"ime_keyboard_letters_\u05E0","value":"!"},
    {"inputid":"ime_keyboard_letters_\u05DE","value":":"},{"inputid":"ime_keyboard_letters_\u05E6","value":"\u061B"},{"inputid":"ime_keyboard_letters_\u05EA","value":"\""},
    {"inputid":"ime_keyboard_letters_\u05E5","value":"\'"},{"inputid":"ime_keyboard_letters_.","value":"<"},{"inputid":"ime_keyboard_letters_;","value":">"},
    {"inputid":"ime_keyboard_letters_number","value":"abc"}
];


//\u7B26\u53F7\u9875\u9762\u7684value\u503C
var symbol_values = [{"inputid":"ime_keyboard_letters_/","value":"["},{"inputid":"ime_keyboard_letters_\u05F3","value":"]"},
    {"inputid":"ime_keyboard_letters_\u05E7","value":"{"},{"inputid":"ime_keyboard_letters_\u05E8","value":"}"},{"inputid":"ime_keyboard_letters_\u05D0","value":"+"},
    {"inputid":"ime_keyboard_letters_\u05D8","value":"-"},{"inputid":"ime_keyboard_letters_\u05D5","value":"\u00D7"},{"inputid":"ime_keyboard_letters_\u05DF","value":"\u00F7"},
    {"inputid":"ime_keyboard_letters_\u05DD","value":"="},{"inputid":"ime_keyboard_letters_\u05E4","value":"\u00B1"},{"inputid":"ime_keyboard_letters_\u05E9","value":"\u00AB"},
    {"inputid":"ime_keyboard_letters_\u05D3","value":"\u00BB"},{"inputid":"ime_keyboard_letters_\u05D2","value":"\u00A6"},{"inputid":"ime_keyboard_letters_\u05DB","value":"\u00B4"},
    {"inputid":"ime_keyboard_letters_\u05E2","value":"^"},{"inputid":"ime_keyboard_letters_\u05D9","value":"~"},{"inputid":"ime_keyboard_letters_\u05D7","value":"\u00A9"},
    {"inputid":"ime_keyboard_letters_\u05DC","value":"\u00AE"},{"inputid":"ime_keyboard_letters_\u05DA","value":"\u00A5"},{"inputid":"ime_keyboard_letters_\u05E3","value":"\u00A3"},
    {"inputid":"ime_keyboard_letters_,","value":"\u20AC"},{"inputid":"ime_keyboard_letters_\u05D6","value":"<2/2>"},{"inputid":"ime_keyboard_letters_\u05E1","value":"www."},
    {"inputid":"ime_keyboard_letters_\u05D1","value":"wap."},{"inputid":"ime_keyboard_letters_\u05D4","value":".com"},{"inputid":"ime_keyboard_letters_\u05E0","value":".cn"},
    {"inputid":"ime_keyboard_letters_\u05DE","value":".org"},{"inputid":"ime_keyboard_letters_\u05E6","value":".net"},{"inputid":"ime_keyboard_letters_\u05EA","value":"bbs."},
    {"inputid":"ime_keyboard_letters_\u05E5","value":"blog."},{"inputid":"ime_keyboard_letters_.","value":"http:"},{"inputid":"ime_keyboard_letters_;","value":"3g."},
    {"inputid":"ime_keyboard_letters_number","value":"abc"}
];
//\u82F1\u8BED\u5927\u5199\u5B57\u6BCD\u7684value\u503C
var english_big_values = [{"inputid":"ime_keyboard_letters_Q","value":"Q"},{"inputid":"ime_keyboard_letters_W","value":"W"},
    {"inputid":"ime_keyboard_letters_E","value":"E"},{"inputid":"ime_keyboard_letters_R","value":"R"},{"inputid":"ime_keyboard_letters_T","value":"T"},
    {"inputid":"ime_keyboard_letters_Y","value":"Y"},{"inputid":"ime_keyboard_letters_U","value":"U"},{"inputid":"ime_keyboard_letters_I","value":"I"},
    {"inputid":"ime_keyboard_letters_O","value":"O"},{"inputid":"ime_keyboard_letters_P","value":"P"},{"inputid":"ime_keyboard_letters_A","value":"A"},
    {"inputid":"ime_keyboard_letters_S","value":"S"},{"inputid":"ime_keyboard_letters_D","value":"D"},{"inputid":"ime_keyboard_letters_F","value":"F"},
    {"inputid":"ime_keyboard_letters_G","value":"G"},{"inputid":"ime_keyboard_letters_H","value":"H"},{"inputid":"ime_keyboard_letters_J","value":"J"},
    {"inputid":"ime_keyboard_letters_K","value":"K"},{"inputid":"ime_keyboard_letters_L","value":"L"},{"inputid":"ime_keyboard_letters_exclamation","value":"!"},
    {"inputid":"ime_keyboard_letters_slash","value":"/"},{"inputid":"ime_keyboard_letters_shift","value":""},{"inputid":"ime_keyboard_letters_Z","value":"Z"},
    {"inputid":"ime_keyboard_letters_X","value":"X"},{"inputid":"ime_keyboard_letters_C","value":"C"},{"inputid":"ime_keyboard_letters_V","value":"V"},
    {"inputid":"ime_keyboard_letters_B","value":"B"},{"inputid":"ime_keyboard_letters_N","value":"N"},{"inputid":"ime_keyboard_letters_M","value":"M"},
    {"inputid":"ime_keyboard_letters_comma","value":","},{"inputid":"ime_keyboard_letters_point","value":"."},{"inputid":"ime_keyboard_letters_question","value":"?"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_language","value":"English"}
];
//\u82F1\u8BED\u5C0F\u5199\u5199\u5B57\u6BCD\u7684value\u503C
var english_small_values = [{"inputid":"ime_keyboard_letters_Q","value":"q"},{"inputid":"ime_keyboard_letters_W","value":"w"},
    {"inputid":"ime_keyboard_letters_E","value":"e"},{"inputid":"ime_keyboard_letters_R","value":"r"},{"inputid":"ime_keyboard_letters_T","value":"t"},
    {"inputid":"ime_keyboard_letters_Y","value":"y"},{"inputid":"ime_keyboard_letters_U","value":"u"},{"inputid":"ime_keyboard_letters_I","value":"i"},
    {"inputid":"ime_keyboard_letters_O","value":"o"},{"inputid":"ime_keyboard_letters_P","value":"p"},{"inputid":"ime_keyboard_letters_A","value":"a"},
    {"inputid":"ime_keyboard_letters_S","value":"s"},{"inputid":"ime_keyboard_letters_D","value":"d"},{"inputid":"ime_keyboard_letters_F","value":"f"},
    {"inputid":"ime_keyboard_letters_G","value":"g"},{"inputid":"ime_keyboard_letters_H","value":"h"},{"inputid":"ime_keyboard_letters_J","value":"j"},
    {"inputid":"ime_keyboard_letters_K","value":"k"},{"inputid":"ime_keyboard_letters_L","value":"l"},{"inputid":"ime_keyboard_letters_exclamation","value":"!"},
    {"inputid":"ime_keyboard_letters_slash","value":"/"},{"inputid":"ime_keyboard_letters_shift","value":""},{"inputid":"ime_keyboard_letters_Z","value":"z"},
    {"inputid":"ime_keyboard_letters_X","value":"x"},{"inputid":"ime_keyboard_letters_C","value":"c"},{"inputid":"ime_keyboard_letters_V","value":"v"},
    {"inputid":"ime_keyboard_letters_B","value":"b"},{"inputid":"ime_keyboard_letters_N","value":"n"},{"inputid":"ime_keyboard_letters_M","value":"m"},
    {"inputid":"ime_keyboard_letters_comma","value":","},{"inputid":"ime_keyboard_letters_point","value":"."},{"inputid":"ime_keyboard_letters_question","value":"?"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_language","value":"English"}
];

var english_hardkeyboard_values = [
    {"value":"q","keycode":0x71},{"value":"w","keycode":0x77},
    {"value":"e","keycode":0x65},{"value":"r","keycode":0x72},{"value":"t","keycode":0x74},
    {"value":"y","keycode":0x79},{"value":"u","keycode":0x75},{"value":"i","keycode":0x69},
    {"value":"o","keycode":0x6F},{"value":"p","keycode":0x70},{"value":"a","keycode":0x61},
    {"value":"s","keycode":0x73},{"value":"d","keycode":0x64},{"value":"f","keycode":0x66},
    {"value":"g","keycode":0x67},{"value":"h","keycode":0x68},{"value":"j","keycode":0x6A},
    {"value":"k","keycode":0x6B},{"value":"l","keycode":0x6C},{"value":"!","keycode":0x21},
    {"value":"/","keycode":0x2F},{"value":"z","keycode":0x7A},
    {"value":"x","keycode":0x78},{"value":"c","keycode":0x63},{"value":"v","keycode":0x76},
    {"value":"b","keycode":0x62},{"value":"n","keycode":0x6E},{"value":"m","keycode":0x6D},
    {"value":",","keycode":0x2C},{"value":".","keycode":0x2E},{"value":"?","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":"Q","keycode":0x51},{"value":"W","keycode":0x57},
    {"value":"E","keycode":0x45},{"value":"R","keycode":0x52},{"value":"T","keycode":0x54},
    {"value":"Y","keycode":0x59},{"value":"U","keycode":0x55},{"value":"I","keycode":0x49},
    {"value":"O","keycode":0x4F},{"value":"P","keycode":0x50},{"value":"A","keycode":0x41},
    {"value":"S","keycode":0x53},{"value":"D","keycode":0x44},{"value":"F","keycode":0x46},
    {"value":"G","keycode":0x47},{"value":"H","keycode":0x48},{"value":"J","keycode":0x4A},
    {"value":"K","keycode":0x4B},{"value":"L","keycode":0x4C},{"value":"Z","keycode":0x5A},
    {"value":"X","keycode":0x58},{"value":"C","keycode":0x43},{"value":"V","keycode":0x56},
    {"value":"B","keycode":0x42},{"value":"N","keycode":0x4E},{"value":"M","keycode":0x4D},
    {"value":"1","keycode":0x31},{"value":"2","keycode":0x32},
    {"value":"3","keycode":0x33},{"value":"4","keycode":0x34},{"value":"5","keycode":0x35},
    {"value":"6","keycode":0x36},{"value":"7","keycode":0x37},{"value":"8","keycode":0x38},
    {"value":"9","keycode":0x39},{"value":"0","keycode":0x30},{"value":"\\","keycode":0x5C},
    {"value":"#","keycode":0x23},{"value":"$","keycode":0x24},{"value":"%","keycode":0x25},
    {"value":"&","keycode":0x26},{"value":"*","keycode":0x2A},{"value":"(","keycode":0x28},
    {"value":")","keycode":0x29},{"value":"_","keycode":0x5F},
    {"value":":","keycode":0x3A},{"value":";","keycode":0x3B},{"value":"\"","keycode":0x22},
    {"value":"\'","keycode":0x27},{"value":"<","keycode":0x3C},{"value":">","keycode":0x3E},
    {"value":"[","keycode":0x5B},{"value":"]","keycode":0x5D},
    {"value":"{","keycode":0x7B},{"value":"}","keycode":0x7D},{"value":"+","keycode":0x2B},
    {"value":"-","keycode":0x2D}, {"value":"=","keycode":0x3D},{"value":"`","keycode":0x60},
    {"value":"@","keycode":0x40},{"value":"|","keycode":0x7C}, {"value":"^","keycode":0x5E},{"value":"~","keycode":0x7E},
];


var italian_big_values=[{"inputid":"ime_keyboard_letters_Q","value":"Q"},{"inputid":"ime_keyboard_letters_W","value":"W"},
    {"inputid":"ime_keyboard_letters_E","value":"E"},{"inputid":"ime_keyboard_letters_R","value":"R"},{"inputid":"ime_keyboard_letters_T","value":"T"},
    {"inputid":"ime_keyboard_letters_Y","value":"Y"},{"inputid":"ime_keyboard_letters_U","value":"U"},{"inputid":"ime_keyboard_letters_I","value":"I"},
    {"inputid":"ime_keyboard_letters_O","value":"O"},{"inputid":"ime_keyboard_letters_P","value":"P"},{"inputid":"ime_keyboard_letters_A","value":"A"},
    {"inputid":"ime_keyboard_letters_S","value":"S"},{"inputid":"ime_keyboard_letters_D","value":"D"},{"inputid":"ime_keyboard_letters_F","value":"F"},
    {"inputid":"ime_keyboard_letters_G","value":"G"},{"inputid":"ime_keyboard_letters_H","value":"H"},{"inputid":"ime_keyboard_letters_J","value":"J"},
    {"inputid":"ime_keyboard_letters_K","value":"k"},{"inputid":"ime_keyboard_letters_L","value":"l"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u00EC"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u00C8"},{"inputid":"ime_keyboard_letters_Z","value":"Z"},
    {"inputid":"ime_keyboard_letters_X","value":"X"},{"inputid":"ime_keyboard_letters_C","value":"C"},{"inputid":"ime_keyboard_letters_V","value":"V"},
    {"inputid":"ime_keyboard_letters_B","value":"B"},{"inputid":"ime_keyboard_letters_N","value":"N"},{"inputid":"ime_keyboard_letters_M","value":"M"},
    {"inputid":"ime_keyboard_letters_comma","value":"\u00D2"},{"inputid":"ime_keyboard_letters_point","value":"\u00C0"},{"inputid":"ime_keyboard_letters_question","value":"\u00D9"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_1","value":"\\"},{"inputid":"ime_keyboard_letters_2","value":"@"},
    {"inputid":"ime_keyboard_letters_3","value":","},{"inputid":"ime_keyboard_letters_at","value":"."},{"inputid":"ime_keyboard_letters_language","value":"Italian"}
];

var italian_small_values=[{"inputid":"ime_keyboard_letters_Q","value":"q","keycode":0x171},{"inputid":"ime_keyboard_letters_W","value":"w","keycode":0x177},
    {"inputid":"ime_keyboard_letters_E","value":"e","keycode":0x165},{"inputid":"ime_keyboard_letters_R","value":"r","keycode":0x172},{"inputid":"ime_keyboard_letters_T","value":"t","keycode":0x174},
    {"inputid":"ime_keyboard_letters_Y","value":"y","keycode":0x179},{"inputid":"ime_keyboard_letters_U","value":"u","keycode":0x175},{"inputid":"ime_keyboard_letters_I","value":"i","keycode":0x169},
    {"inputid":"ime_keyboard_letters_O","value":"o","keycode":0x16F},{"inputid":"ime_keyboard_letters_P","value":"p","keycode":0x170},{"inputid":"ime_keyboard_letters_A","value":"a","keycode":0x161},
    {"inputid":"ime_keyboard_letters_S","value":"s","keycode":0x173},{"inputid":"ime_keyboard_letters_D","value":"d","keycode":0x164},{"inputid":"ime_keyboard_letters_F","value":"f","keycode":0x166},
    {"inputid":"ime_keyboard_letters_G","value":"g","keycode":0x167},{"inputid":"ime_keyboard_letters_H","value":"h","keycode":0x168},{"inputid":"ime_keyboard_letters_J","value":"j","keycode":0x16A},
    {"inputid":"ime_keyboard_letters_K","value":"k","keycode":0x16B},{"inputid":"ime_keyboard_letters_L","value":"l","keycode":0x16C},{"inputid":"ime_keyboard_letters_exclamation","value":"\u00EC","keycode":0x3D},
    {"inputid":"ime_keyboard_letters_slash","value":"\u00E8","keycode":0x5B},{"inputid":"ime_keyboard_letters_Z","value":"z","keycode":0x17A},
    {"inputid":"ime_keyboard_letters_X","value":"x","keycode":0x178},{"inputid":"ime_keyboard_letters_C","value":"c","keycode":0x163},{"inputid":"ime_keyboard_letters_V","value":"v","keycode":0x176},
    {"inputid":"ime_keyboard_letters_B","value":"b","keycode":0x162},{"inputid":"ime_keyboard_letters_N","value":"n","keycode":0x16E},{"inputid":"ime_keyboard_letters_M","value":"m","keycode":0x16D},
    {"inputid":"ime_keyboard_letters_comma","value":"\u00F2","keycode":0x3B},{"inputid":"ime_keyboard_letters_point","value":"\u00E0","keycode":0x127},{"inputid":"ime_keyboard_letters_question","value":"\u00F9","keycode":0x5C},
    {"inputid":"ime_keyboard_letters_number","value":"123#","keycode":0xFFF},{"inputid":"ime_keyboard_letters_1","value":"\\","keycode":0x60},{"inputid":"ime_keyboard_letters_2","value":"@"},
    {"inputid":"ime_keyboard_letters_3","value":","},{"inputid":"ime_keyboard_letters_at","value":"."},{"inputid":"ime_keyboard_letters_language","value":"Italian"}
];

var italian_hardkeyboard_values = [
    {"value":"q","keycode":0x171},{"value":"w","keycode":0x177},
    {"value":"e","keycode":0x165},{"value":"r","keycode":0x172},{"value":"t","keycode":0x174},
    {"value":"y","keycode":0x179},{"value":"u","keycode":0x175},{"value":"i","keycode":0x169},
    {"value":"o","keycode":0x16F},{"value":"p","keycode":0x170},{"value":"a","keycode":0x161},
    {"value":"s","keycode":0x173},{"value":"d","keycode":0x164},{"value":"f","keycode":0x166},
    {"value":"g","keycode":0x167},{"value":"h","keycode":0x168},{"value":"j","keycode":0x16A},
    {"value":"k","keycode":0x16B},{"value":"l","keycode":0x16C},{"value":"!","keycode":0x21},
    {"value":"-","keycode":0x2F},{"value":"z","keycode":0x17A},
    {"value":"x","keycode":0x178},{"value":"c","keycode":0x163},{"value":"v","keycode":0x176},
    {"value":"b","keycode":0x162},{"value":"n","keycode":0x16E},{"value":"m","keycode":0x16D},
    {"value":",","keycode":0x2C},{"value":".","keycode":0x2E},{"value":"_","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":"Q","keycode":0x51},{"value":"W","keycode":0x57},
    {"value":"E","keycode":0x45},{"value":"R","keycode":0x52},{"value":"T","keycode":0x54},
    {"value":"Y","keycode":0x59},{"value":"U","keycode":0x55},{"value":"I","keycode":0x49},
    {"value":"O","keycode":0x4F},{"value":"P","keycode":0x50},{"value":"A","keycode":0x41},
    {"value":"S","keycode":0x53},{"value":"D","keycode":0x44},{"value":"F","keycode":0x46},
    {"value":"G","keycode":0x47},{"value":"H","keycode":0x48},{"value":"J","keycode":0x4A},
    {"value":"K","keycode":0x4B},{"value":"L","keycode":0x4C},{"value":"Z","keycode":0x5A},
    {"value":"X","keycode":0x58},{"value":"C","keycode":0x43},{"value":"V","keycode":0x56},
    {"value":"B","keycode":0x42},{"value":"N","keycode":0x4E},{"value":"M","keycode":0x4D},
    {"value":"1","keycode":0x31},{"value":"2","keycode":0x32},
    {"value":"3","keycode":0x33},{"value":"4","keycode":0x34},{"value":"5","keycode":0x35},
    {"value":"6","keycode":0x36},{"value":"7","keycode":0x37},{"value":"8","keycode":0x38},
    {"value":"9","keycode":0x39},{"value":"0","keycode":0x30},{"value":"\u00F9","keycode":0x5C},
    {"value":"\u00A3","keycode":0x23},{"value":"$","keycode":0x24},{"value":"%","keycode":0x125},
    {"value":"/","keycode":0x126},{"value":"(","keycode":0x2A},{"value":")","keycode":0x128},
    {"value":"=","keycode":0x29},{"value":"?","keycode":0x5F},
    {"value":"\u00E7","keycode":0x3A},{"value":"\u00F2","keycode":0x3B},{"value":"\u00B0","keycode":0x22},
    {"value":"\u00E0","keycode":0x127},{"value":";","keycode":0x3C},{"value":":","keycode":0x3E},
    {"value":"\u00E8","keycode":0x5B},{"value":"+","keycode":0x5D},
    {"value":"\u00E9","keycode":0x7B},{"value":"*","keycode":0x7D},{"value":"^","keycode":0x2B},
    {"value":"\'","keycode":0x2D}, {"value":"\u00EC","keycode":0x3D},{"value":"\\","keycode":0x60},
    {"value":"\"","keycode":0x40},{"value":"\u00A7","keycode":0x7C}, {"value":"&","keycode":0x5E},{"value":"|","keycode":0x7E},
    {"value":"\u20AC","keycode":0x235},{"value":"\u20AC","keycode":0x365},{"value":"[","keycode":0x25B},{"value":"]","keycode":0x25D},
    {"value":"#","keycode":0x327},{"value":"@","keycode":0x23B},
];

var portuguese_big_values=[{"inputid":"ime_keyboard_letters_Q","value":"Q"},{"inputid":"ime_keyboard_letters_W","value":"W"},
    {"inputid":"ime_keyboard_letters_E","value":"E"},{"inputid":"ime_keyboard_letters_R","value":"R"},{"inputid":"ime_keyboard_letters_T","value":"T"},
    {"inputid":"ime_keyboard_letters_Y","value":"Y"},{"inputid":"ime_keyboard_letters_U","value":"U"},{"inputid":"ime_keyboard_letters_I","value":"I"},
    {"inputid":"ime_keyboard_letters_O","value":"O"},{"inputid":"ime_keyboard_letters_P","value":"P"},{"inputid":"ime_keyboard_letters_A","value":"A"},
    {"inputid":"ime_keyboard_letters_S","value":"S"},{"inputid":"ime_keyboard_letters_D","value":"D"},{"inputid":"ime_keyboard_letters_F","value":"F"},
    {"inputid":"ime_keyboard_letters_G","value":"G"},{"inputid":"ime_keyboard_letters_H","value":"H"},{"inputid":"ime_keyboard_letters_J","value":"J"},
    {"inputid":"ime_keyboard_letters_K","value":"K"},{"inputid":"ime_keyboard_letters_L","value":"L"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u00C7"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u00B4"},{"inputid":"ime_keyboard_letters_Z","value":"Z"},
    {"inputid":"ime_keyboard_letters_X","value":"X"},{"inputid":"ime_keyboard_letters_C","value":"C"},{"inputid":"ime_keyboard_letters_V","value":"V"},
    {"inputid":"ime_keyboard_letters_B","value":"B"},{"inputid":"ime_keyboard_letters_N","value":"N"},{"inputid":"ime_keyboard_letters_M","value":"M"},
    {"inputid":"ime_keyboard_letters_comma","value":"^"},{"inputid":"ime_keyboard_letters_point","value":"~"},{"inputid":"ime_keyboard_letters_question","value":"`"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_1","value":"\\"},{"inputid":"ime_keyboard_letters_2","value":"@"},
    {"inputid":"ime_keyboard_letters_3","value":","},{"inputid":"ime_keyboard_letters_at","value":"."},{"inputid":"ime_keyboard_letters_language","value":"Portuguese"}
];

var portuguese_small_values=[{"inputid":"ime_keyboard_letters_Q","value":"q"},{"inputid":"ime_keyboard_letters_W","value":"w"},
    {"inputid":"ime_keyboard_letters_E","value":"e"},{"inputid":"ime_keyboard_letters_R","value":"r"},{"inputid":"ime_keyboard_letters_T","value":"t"},
    {"inputid":"ime_keyboard_letters_Y","value":"y"},{"inputid":"ime_keyboard_letters_U","value":"u"},{"inputid":"ime_keyboard_letters_I","value":"i"},
    {"inputid":"ime_keyboard_letters_O","value":"o"},{"inputid":"ime_keyboard_letters_P","value":"p"},{"inputid":"ime_keyboard_letters_A","value":"a"},
    {"inputid":"ime_keyboard_letters_S","value":"s"},{"inputid":"ime_keyboard_letters_D","value":"d"},{"inputid":"ime_keyboard_letters_F","value":"f"},
    {"inputid":"ime_keyboard_letters_G","value":"g"},{"inputid":"ime_keyboard_letters_H","value":"h"},{"inputid":"ime_keyboard_letters_J","value":"j"},
    {"inputid":"ime_keyboard_letters_K","value":"k"},{"inputid":"ime_keyboard_letters_L","value":"l"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u00E7"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u00B4"},{"inputid":"ime_keyboard_letters_Z","value":"z"},
    {"inputid":"ime_keyboard_letters_X","value":"x"},{"inputid":"ime_keyboard_letters_C","value":"c"},{"inputid":"ime_keyboard_letters_V","value":"v"},
    {"inputid":"ime_keyboard_letters_B","value":"b"},{"inputid":"ime_keyboard_letters_N","value":"n"},{"inputid":"ime_keyboard_letters_M","value":"m"},
    {"inputid":"ime_keyboard_letters_comma","value":"^"},{"inputid":"ime_keyboard_letters_point","value":"~"},{"inputid":"ime_keyboard_letters_question","value":"`"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_1","value":"\\"},{"inputid":"ime_keyboard_letters_2","value":"@"},
    {"inputid":"ime_keyboard_letters_3","value":","},{"inputid":"ime_keyboard_letters_at","value":"."},{"inputid":"ime_keyboard_letters_language","value":"Portuguese"}
];

var portuguese_hardkeyboard_values = [
    {"value":"q","keycode":0x171},{"value":"w","keycode":0x177},
    {"value":"e","keycode":0x165},{"value":"r","keycode":0x172},{"value":"t","keycode":0x174},
    {"value":"y","keycode":0x179},{"value":"u","keycode":0x175},{"value":"i","keycode":0x169},
    {"value":"o","keycode":0x16F},{"value":"p","keycode":0x170},{"value":"a","keycode":0x161},
    {"value":"s","keycode":0x173},{"value":"d","keycode":0x164},{"value":"f","keycode":0x166},
    {"value":"g","keycode":0x167},{"value":"h","keycode":0x168},{"value":"j","keycode":0x16A},
    {"value":"k","keycode":0x16B},{"value":"l","keycode":0x16C},{"value":"!","keycode":0x21},
    {"value":"-","keycode":0x2F},{"value":"z","keycode":0x17A},
    {"value":"x","keycode":0x178},{"value":"c","keycode":0x163},{"value":"v","keycode":0x176},
    {"value":"b","keycode":0x162},{"value":"n","keycode":0x16E},{"value":"m","keycode":0x16D},
    {"value":",","keycode":0x2C},{"value":".","keycode":0x2E},{"value":"_","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":"Q","keycode":0x51},{"value":"W","keycode":0x57},
    {"value":"E","keycode":0x45},{"value":"R","keycode":0x52},{"value":"T","keycode":0x54},
    {"value":"Y","keycode":0x59},{"value":"U","keycode":0x55},{"value":"I","keycode":0x49},
    {"value":"O","keycode":0x4F},{"value":"P","keycode":0x50},{"value":"A","keycode":0x41},
    {"value":"S","keycode":0x53},{"value":"D","keycode":0x44},{"value":"F","keycode":0x46},
    {"value":"G","keycode":0x47},{"value":"H","keycode":0x48},{"value":"J","keycode":0x4A},
    {"value":"K","keycode":0x4B},{"value":"L","keycode":0x4C},{"value":"Z","keycode":0x5A},
    {"value":"X","keycode":0x58},{"value":"C","keycode":0x43},{"value":"V","keycode":0x56},
    {"value":"B","keycode":0x42},{"value":"N","keycode":0x4E},{"value":"M","keycode":0x4D},
    {"value":"1","keycode":0x31},{"value":"2","keycode":0x32},
    {"value":"3","keycode":0x33},{"value":"4","keycode":0x34},{"value":"5","keycode":0x35},
    {"value":"6","keycode":0x36},{"value":"7","keycode":0x37},{"value":"8","keycode":0x38},
    {"value":"9","keycode":0x39},{"value":"0","keycode":0x30},{"value":"~","keycode":0x5C},
    {"value":"#","keycode":0x23},{"value":"$","keycode":0x24},{"value":"%","keycode":0x125},
    {"value":"/","keycode":0x126},{"value":"(","keycode":0x2A},{"value":")","keycode":0x128},
    {"value":"=","keycode":0x29},{"value":"?","keycode":0x5F},
    {"value":"\u00C7","keycode":0x3A},{"value":"\u00E7","keycode":0x3B},{"value":"\u00AA","keycode":0x22},
    {"value":"\u00BA","keycode":0x127},{"value":";","keycode":0x3C},{"value":":","keycode":0x3E},
    {"value":"+","keycode":0x5B},{"value":"\u00B4","keycode":0x5D},
    {"value":"*","keycode":0x7B},{"value":"`","keycode":0x7D},{"value":"\u00BB","keycode":0x2B},
    {"value":"\'","keycode":0x2D}, {"value":"\u00AB","keycode":0x3D},{"value":"\\","keycode":0x60},
    {"value":"\"","keycode":0x40},{"value":"^","keycode":0x7C}, {"value":"&","keycode":0x5E},{"value":"|","keycode":0x7E},
    {"value":"@","keycode":0x232},
    {"value":"\u00A3","keycode":0x233},{"value":"\u00A7","keycode":0x234},{"value":"\u20AC","keycode":0x235},
    {"value":"{","keycode":0x237},{"value":"[","keycode":0x238},
    {"value":"]","keycode":0x239},{"value":"}","keycode":0x230},{"value":"\u20AC","keycode":0x365},{"value":"\u00A8","keycode":0x25B},{"value":"]","keycode":0x25D},
];

var portuguese_specialhardkeyboard_values = [
    {"value":"\u00E7","keycode":0x3A},{"value":"\u00C7","keycode":0x3B}
];

var russian_big_values=[{"inputid":"ime_keyboard_letters_Q","value":"\u0419"},{"inputid":"ime_keyboard_letters_W","value":"\u0426"},
    {"inputid":"ime_keyboard_letters_E","value":"\u0423"},{"inputid":"ime_keyboard_letters_R","value":"\u041A"},{"inputid":"ime_keyboard_letters_T","value":"\u0415"},
    {"inputid":"ime_keyboard_letters_Y","value":"\u041D"},{"inputid":"ime_keyboard_letters_U","value":"\u0413"},{"inputid":"ime_keyboard_letters_I","value":"\u0428"},
    {"inputid":"ime_keyboard_letters_O","value":"\u0429"},{"inputid":"ime_keyboard_letters_P","value":"\u0417"},{"inputid":"ime_keyboard_letters_A","value":"\u0424"},
    {"inputid":"ime_keyboard_letters_S","value":"\u042B"},{"inputid":"ime_keyboard_letters_D","value":"\u0412"},{"inputid":"ime_keyboard_letters_F","value":"\u0410"},
    {"inputid":"ime_keyboard_letters_G","value":"\u041F"},{"inputid":"ime_keyboard_letters_H","value":"\u0420"},{"inputid":"ime_keyboard_letters_J","value":"\u041E"},
    {"inputid":"ime_keyboard_letters_K","value":"\u041B"},{"inputid":"ime_keyboard_letters_L","value":"\u0414"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u0416"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u042D"},{"inputid":"ime_keyboard_letters_Z","value":"\u042F"},
    {"inputid":"ime_keyboard_letters_X","value":"\u0427"},{"inputid":"ime_keyboard_letters_C","value":"\u0421"},{"inputid":"ime_keyboard_letters_V","value":"\u041C"},
    {"inputid":"ime_keyboard_letters_B","value":"\u0418"},{"inputid":"ime_keyboard_letters_N","value":"\u0422"},{"inputid":"ime_keyboard_letters_M","value":"\u042C"},
    {"inputid":"ime_keyboard_letters_comma","value":"\u0411"},{"inputid":"ime_keyboard_letters_point","value":"\u042E"},{"inputid":"ime_keyboard_letters_question","value":"\u0425"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_1","value":","},{"inputid":"ime_keyboard_letters_2","value":"."},
    {"inputid":"ime_keyboard_letters_3","value":"\u0401"},{"inputid":"ime_keyboard_letters_at","value":"\u042A"},{"inputid":"ime_keyboard_letters_language","value":"Russian"}
];

var russian_small_values=[{"inputid":"ime_keyboard_letters_Q","value":"\u0439"},{"inputid":"ime_keyboard_letters_W","value":"\u0446"},
    {"inputid":"ime_keyboard_letters_E","value":"\u0443"},{"inputid":"ime_keyboard_letters_R","value":"\u043A"},{"inputid":"ime_keyboard_letters_T","value":"\u0435"},
    {"inputid":"ime_keyboard_letters_Y","value":"\u043D"},{"inputid":"ime_keyboard_letters_U","value":"\u0433"},{"inputid":"ime_keyboard_letters_I","value":"\u0448"},
    {"inputid":"ime_keyboard_letters_O","value":"\u0449"},{"inputid":"ime_keyboard_letters_P","value":"\u0437"},{"inputid":"ime_keyboard_letters_A","value":"\u0444"},
    {"inputid":"ime_keyboard_letters_S","value":"\u044B"},{"inputid":"ime_keyboard_letters_D","value":"\u0432"},{"inputid":"ime_keyboard_letters_F","value":"\u0430"},
    {"inputid":"ime_keyboard_letters_G","value":"\u043F"},{"inputid":"ime_keyboard_letters_H","value":"\u0440"},{"inputid":"ime_keyboard_letters_J","value":"\u043E"},
    {"inputid":"ime_keyboard_letters_K","value":"\u043B"},{"inputid":"ime_keyboard_letters_L","value":"\u0434"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u0436"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u044D"},{"inputid":"ime_keyboard_letters_Z","value":"\u044F"},
    {"inputid":"ime_keyboard_letters_X","value":"\u0447"},{"inputid":"ime_keyboard_letters_C","value":"\u0441"},{"inputid":"ime_keyboard_letters_V","value":"\u043C"},
    {"inputid":"ime_keyboard_letters_B","value":"\u0438"},{"inputid":"ime_keyboard_letters_N","value":"\u0442"},{"inputid":"ime_keyboard_letters_M","value":"\u044C"},
    {"inputid":"ime_keyboard_letters_comma","value":"\u0431"},{"inputid":"ime_keyboard_letters_point","value":"\u044E"},{"inputid":"ime_keyboard_letters_question","value":"\u0445"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_1","value":","},{"inputid":"ime_keyboard_letters_2","value":"."},
    {"inputid":"ime_keyboard_letters_3","value":"\u0451"},{"inputid":"ime_keyboard_letters_at","value":"\u044A"},{"inputid":"ime_keyboard_letters_language","value":"Russian"}
];

var russian_hardkeyboard_values = [
    {"value":"\u0439","keycode":0x171},{"value":"\u0446","keycode":0x177},
    {"value":"\u0443","keycode":0x165},{"value":"\u043A","keycode":0x172},{"value":"\u0435","keycode":0x174},
    {"value":"\u043D","keycode":0x179},{"value":"\u0433","keycode":0x175},{"value":"\u0448","keycode":0x169},
    {"value":"\u0449","keycode":0x16F},{"value":"\u0437","keycode":0x170},{"value":"\u0444","keycode":0x161},
    {"value":"\u044B","keycode":0x173},{"value":"\u0432","keycode":0x164},{"value":"\u0430","keycode":0x166},
    {"value":"\u043F","keycode":0x167},{"value":"\u0440","keycode":0x168},{"value":"\u043E","keycode":0x16A},
    {"value":"\u043B","keycode":0x16B},{"value":"\u0434","keycode":0x16C},{"value":"!","keycode":0x21},
    {"value":".","keycode":0x2F},{"value":"\u044F","keycode":0x17A},
    {"value":"\u0447","keycode":0x178},{"value":"\u0441","keycode":0x163},{"value":"\u043C","keycode":0x176},
    {"value":"\u0438","keycode":0x162},{"value":"\u0442","keycode":0x16E},{"value":"\u044C","keycode":0x16D},
    {"value":"\u0431","keycode":0x2C},{"value":"\u044E","keycode":0x2E},{"value":",","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":"\u0419","keycode":0x51},{"value":"\u0426","keycode":0x57},
    {"value":"\u0423","keycode":0x45},{"value":"\u041A","keycode":0x52},{"value":"\u0415","keycode":0x54},
    {"value":"\u041D","keycode":0x59},{"value":"\u0413","keycode":0x55},{"value":"\u0428","keycode":0x49},
    {"value":"\u0429","keycode":0x4F},{"value":"\u0417","keycode":0x50},{"value":"\u0424","keycode":0x41},
    {"value":"\u042B","keycode":0x53},{"value":"\u0412","keycode":0x44},{"value":"\u0410","keycode":0x46},
    {"value":"\u041F","keycode":0x47},{"value":"\u0420","keycode":0x48},{"value":"\u041E","keycode":0x4A},
    {"value":"\u041B","keycode":0x4B},{"value":"\u0414","keycode":0x4C},{"value":"\u042F","keycode":0x5A},
    {"value":"\u0427","keycode":0x58},{"value":"\u0421","keycode":0x43},{"value":"\u041C","keycode":0x56},
    {"value":"\u0418","keycode":0x42},{"value":"\u0422","keycode":0x4E},{"value":"\u042C","keycode":0x4D},
    {"value":"1","keycode":0x31},{"value":"2","keycode":0x32},
    {"value":"3","keycode":0x33},{"value":"4","keycode":0x34},{"value":"5","keycode":0x35},
    {"value":"6","keycode":0x36},{"value":"7","keycode":0x37},{"value":"8","keycode":0x38},
    {"value":"9","keycode":0x39},{"value":"0","keycode":0x30},{"value":"\\","keycode":0x5C},
    {"value":"\u2116","keycode":0x23},{"value":";","keycode":0x24},{"value":"%","keycode":0x125},
    {"value":"?","keycode":0x126},{"value":"*","keycode":0x2A},{"value":"(","keycode":0x128},
    {"value":")","keycode":0x29},{"value":"_","keycode":0x5F},
    {"value":"\u0416","keycode":0x3A},{"value":"\u0436","keycode":0x3B},{"value":"\u042D","keycode":0x22},
    {"value":"\u044D","keycode":0x127},{"value":"\u0411","keycode":0x3C},{"value":"\u042E","keycode":0x3E},
    {"value":"\u0445","keycode":0x5B},{"value":"\u044A","keycode":0x5D},
    {"value":"\u0425","keycode":0x7B},{"value":"\u042A","keycode":0x7D},{"value":"+","keycode":0x2B},
    {"value":"-","keycode":0x2D}, {"value":"=","keycode":0x3D},{"value":"\u0451","keycode":0x60},
    {"value":"\"","keycode":0x40},{"value":"/","keycode":0x7C}, {"value":":","keycode":0x5E},{"value":"\u0401","keycode":0x7E},
    {"value":"[","keycode":0x25B},{"value":"]","keycode":0x25D},
];

var russian_specialhardkeyboard_values = [
    {"value":"\u0401","keycode":0x60},{"value":"\u0451","keycode":0x7E},{"value":"\u0425","keycode":0x5B},{"value":"\u0445","keycode":0x7B},
    {"value":"\u042A","keycode":0x5D}, {"value":"\u044A","keycode":0x7D},{"value":"\u0436","keycode":0x3A},{"value":"\u0416","keycode":0x3B},
    {"value":"\u044D","keycode":0x22}, {"value":"\u042D","keycode":0x127},{"value":"\u0411","keycode":0x2C},{"value":"\u0431","keycode":0x3C},
    {"value":"\u044E","keycode":0x3E},{"value":"\u042E","keycode":0x2E},
];


var french_big_values=[
    {"inputid":"ime_keyboard_letters_\u00E9","value":"\u00C9"},{"inputid":"ime_keyboard_letters_double_quotation","value":"\""},{"inputid":"ime_keyboard_letters_single_quotation","value":"\'"},{"inputid":"ime_keyboard_letters_left_bracket","value":"("},
    {"inputid":"ime_keyboard_letters_midline","value":"-"},{"inputid":"ime_keyboard_letters_\u00E8","value":"\u00C8"},{"inputid":"ime_keyboard_letters_baseline","value":"_"},{"inputid":"ime_keyboard_letters_\u00E7","value":"\u00C7"},
    {"inputid":"ime_keyboard_letters_\u00E0","value":"\u00C0"},{"inputid":"ime_keyboard_letters_right_bracket","value":")"},{"inputid":"ime_keyboard_letters_A","value":"A"},{"inputid":"ime_keyboard_letters_Z","value":"Z"},
    {"inputid":"ime_keyboard_letters_E","value":"E"},{"inputid":"ime_keyboard_letters_R","value":"R"},{"inputid":"ime_keyboard_letters_T","value":"T"},{"inputid":"ime_keyboard_letters_Y","value":"Y"},
    {"inputid":"ime_keyboard_letters_U","value":"U"},{"inputid":"ime_keyboard_letters_I","value":"I"},{"inputid":"ime_keyboard_letters_O","value":"O"},{"inputid":"ime_keyboard_letters_P","value":"P"},
    {"inputid":"ime_keyboard_letters_^","value":"^"},{"inputid":"ime_keyboard_letters_Q","value":"Q"},{"inputid":"ime_keyboard_letters_S","value":"S"},{"inputid":"ime_keyboard_letters_D","value":"D"},
    {"inputid":"ime_keyboard_letters_F","value":"F"},{"inputid":"ime_keyboard_letters_G","value":"G"},{"inputid":"ime_keyboard_letters_H","value":"H"},{"inputid":"ime_keyboard_letters_J","value":"J"},
    {"inputid":"ime_keyboard_letters_K","value":"K"},{"inputid":"ime_keyboard_letters_L","value":"L"},{"inputid":"ime_keyboard_letters_M","value":"M"},{"inputid":"ime_keyboard_letters_\u00F9","value":"\u00D9"},
    {"inputid":"ime_keyboard_letters_W","value":"W"},{"inputid":"ime_keyboard_letters_X","value":"X"},{"inputid":"ime_keyboard_letters_C","value":"C"},{"inputid":"ime_keyboard_letters_V","value":"V"},
    {"inputid":"ime_keyboard_letters_B","value":"B"},{"inputid":"ime_keyboard_letters_N","value":"N"},{"inputid":"ime_keyboard_letters_comma","value":","},{"inputid":"ime_keyboard_letters_point","value":"."},
    {"inputid":"ime_keyboard_letters_semicolon","value":";"},{"inputid":"ime_keyboard_letters_colon","value":":"},{"inputid":"ime_keyboard_letters_at","value":"@"},{"inputid":"ime_keyboard_letters_language","value":"French"}
];

var french_small_values=[
    {"inputid":"ime_keyboard_letters_\u00E9","value":"\u00E9"},{"inputid":"ime_keyboard_letters_double_quotation","value":"\""},{"inputid":"ime_keyboard_letters_single_quotation","value":"\'"},{"inputid":"ime_keyboard_letters_left_bracket","value":"("},
    {"inputid":"ime_keyboard_letters_midline","value":"-"},{"inputid":"ime_keyboard_letters_\u00E8","value":"\u00E8"},{"inputid":"ime_keyboard_letters_baseline","value":"_"},{"inputid":"ime_keyboard_letters_\u00E7","value":"\u00E7"},
    {"inputid":"ime_keyboard_letters_\u00E0","value":"\u00E0"},{"inputid":"ime_keyboard_letters_right_bracket","value":")"},{"inputid":"ime_keyboard_letters_A","value":"a"},{"inputid":"ime_keyboard_letters_Z","value":"z"},
    {"inputid":"ime_keyboard_letters_E","value":"e"},{"inputid":"ime_keyboard_letters_R","value":"r"},{"inputid":"ime_keyboard_letters_T","value":"t"},{"inputid":"ime_keyboard_letters_Y","value":"y"},
    {"inputid":"ime_keyboard_letters_U","value":"u"},{"inputid":"ime_keyboard_letters_I","value":"i"},{"inputid":"ime_keyboard_letters_O","value":"o"},{"inputid":"ime_keyboard_letters_P","value":"p"},
    {"inputid":"ime_keyboard_letters_^","value":"^"},{"inputid":"ime_keyboard_letters_Q","value":"q"},{"inputid":"ime_keyboard_letters_S","value":"s"},{"inputid":"ime_keyboard_letters_D","value":"d"},
    {"inputid":"ime_keyboard_letters_F","value":"f"},{"inputid":"ime_keyboard_letters_G","value":"g"},{"inputid":"ime_keyboard_letters_H","value":"h"},{"inputid":"ime_keyboard_letters_J","value":"j"},
    {"inputid":"ime_keyboard_letters_K","value":"k"},{"inputid":"ime_keyboard_letters_L","value":"l"},{"inputid":"ime_keyboard_letters_M","value":"m"},{"inputid":"ime_keyboard_letters_\u00F9","value":"\u00F9"},
    {"inputid":"ime_keyboard_letters_W","value":"w"},{"inputid":"ime_keyboard_letters_X","value":"x"},{"inputid":"ime_keyboard_letters_C","value":"c"},{"inputid":"ime_keyboard_letters_V","value":"v"},
    {"inputid":"ime_keyboard_letters_B","value":"b"},{"inputid":"ime_keyboard_letters_N","value":"n"},{"inputid":"ime_keyboard_letters_comma","value":","},{"inputid":"ime_keyboard_letters_point","value":"."},
    {"inputid":"ime_keyboard_letters_semicolon","value":";"},{"inputid":"ime_keyboard_letters_colon","value":":"},{"inputid":"ime_keyboard_letters_at","value":"@"},{"inputid":"ime_keyboard_letters_language","value":"French"}
];

var french_hardkeyboard_values = [
    {"value":"a","keycode":0x171},{"value":"z","keycode":0x177},
    {"value":"e","keycode":0x165},{"value":"r","keycode":0x172},{"value":"t","keycode":0x174},
    {"value":"y","keycode":0x179},{"value":"u","keycode":0x175},{"value":"i","keycode":0x169},
    {"value":"o","keycode":0x16F},{"value":"p","keycode":0x170},{"value":"q","keycode":0x161},
    {"value":"s","keycode":0x173},{"value":"d","keycode":0x164},{"value":"f","keycode":0x166},
    {"value":"g","keycode":0x167},{"value":"h","keycode":0x168},{"value":"j","keycode":0x16A},
    {"value":"k","keycode":0x16B},{"value":"l","keycode":0x16C},{"value":"1","keycode":0x21},
    {"value":"!","keycode":0x2F},{"value":"w","keycode":0x17A},
    {"value":"x","keycode":0x178},{"value":"c","keycode":0x163},{"value":"v","keycode":0x176},
    {"value":"b","keycode":0x162},{"value":"n","keycode":0x16E},{"value":",","keycode":0x16D},
    {"value":";","keycode":0x2C},{"value":":","keycode":0x2E},{"value":"\u00A7","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":"A","keycode":0x51},{"value":"Z","keycode":0x57},
    {"value":"E","keycode":0x45},{"value":"R","keycode":0x52},{"value":"T","keycode":0x54},
    {"value":"Y","keycode":0x59},{"value":"U","keycode":0x55},{"value":"I","keycode":0x49},
    {"value":"O","keycode":0x4F},{"value":"P","keycode":0x50},{"value":"Q","keycode":0x41},
    {"value":"S","keycode":0x53},{"value":"D","keycode":0x44},{"value":"F","keycode":0x46},
    {"value":"G","keycode":0x47},{"value":"H","keycode":0x48},{"value":"J","keycode":0x4A},
    {"value":"K","keycode":0x4B},{"value":"L","keycode":0x4C},{"value":"W","keycode":0x5A},
    {"value":"X","keycode":0x58},{"value":"C","keycode":0x43},{"value":"V","keycode":0x56},
    {"value":"B","keycode":0x42},{"value":"N","keycode":0x4E},{"value":"?","keycode":0x4D},
    {"value":"&","keycode":0x31},{"value":"\u00E9","keycode":0x32},
    {"value":"\"","keycode":0x33},{"value":"\'","keycode":0x34},{"value":"(","keycode":0x35},
    {"value":"-","keycode":0x36},{"value":"\u00E8","keycode":0x37},{"value":"_","keycode":0x38},
    {"value":"\u00E7","keycode":0x39},{"value":"\u00E0","keycode":0x30},{"value":"*","keycode":0x5C},
    {"value":"3","keycode":0x23},{"value":"4","keycode":0x24},{"value":"5","keycode":0x125},
    {"value":"7","keycode":0x126},{"value":"8","keycode":0x2A},{"value":"9","keycode":0x128},
    {"value":"0","keycode":0x29},{"value":"\u00B0","keycode":0x5F},
    {"value":"M","keycode":0x3A},{"value":"m","keycode":0x3B},{"value":"%","keycode":0x22},
    {"value":"\u00F9","keycode":0x127},{"value":".","keycode":0x3C},{"value":"/","keycode":0x3E},
    {"value":"^","keycode":0x5B},{"value":"$","keycode":0x5D},
    {"value":"\u00A8","keycode":0x7B},{"value":"\u00A3","keycode":0x7D},{"value":"+","keycode":0x2B},
    {"value":")","keycode":0x2D}, {"value":"=","keycode":0x3D},{"value":"\u00B2","keycode":0x60},
    {"value":"2","keycode":0x40},{"value":"\u00B5","keycode":0x7C}, {"value":"6","keycode":0x5E},{"value":"\u00B2","keycode":0x7E},
    {"value":"~","keycode":0x232},{"value":"\u00A4","keycode":0x25D},
    {"value":"#","keycode":0x233},{"value":"{","keycode":0x234},{"value":"[","keycode":0x235},
    {"value":"|","keycode":0x236},{"value":"`","keycode":0x237},{"value":"\\","keycode":0x238},
    {"value":"^","keycode":0x239},{"value":"@","keycode":0x230},
    {"value":"]","keycode":0x22D}, {"value":"}","keycode":0x23D}, {"value":"\u20AC","keycode":0x365},

];

var french_specialhardkeyboard_values = [
    {"value":"\u00C9","keycode":0x32},{"value":"\u00C8","keycode":0x37},{"value":"\u00C7","keycode":0x39},{"value":"\u00C0","keycode":0x30},
    {"value":"M","keycode":0x3B},{"value":"\u00D9","keycode":0x127},{"value":",","keycode":0x4D},
];

var spanish_big_values=[
    {"inputid":"ime_keyboard_letters_\u00E9","value":"\u00DC"},{"inputid":"ime_keyboard_letters_double_quotation","value":","},{"inputid":"ime_keyboard_letters_single_quotation","value":"."},{"inputid":"ime_keyboard_letters_left_bracket","value":"\u00BF"},
    {"inputid":"ime_keyboard_letters_midline","value":"\\"},{"inputid":"ime_keyboard_letters_\u00E8","value":"*"},{"inputid":"ime_keyboard_letters_baseline","value":"\""},{"inputid":"ime_keyboard_letters_\u00E7","value":"#"},
    {"inputid":"ime_keyboard_letters_\u00E0","value":"("},{"inputid":"ime_keyboard_letters_right_bracket","value":")"},{"inputid":"ime_keyboard_letters_A","value":"Q"},{"inputid":"ime_keyboard_letters_Z","value":"W"},
    {"inputid":"ime_keyboard_letters_E","value":"E"},{"inputid":"ime_keyboard_letters_R","value":"R"},{"inputid":"ime_keyboard_letters_T","value":"T"},{"inputid":"ime_keyboard_letters_Y","value":"Y"},
    {"inputid":"ime_keyboard_letters_U","value":"U"},{"inputid":"ime_keyboard_letters_I","value":"I"},{"inputid":"ime_keyboard_letters_O","value":"O"},{"inputid":"ime_keyboard_letters_P","value":"P"},
    {"inputid":"ime_keyboard_letters_^","value":"\u00DA"},{"inputid":"ime_keyboard_letters_Q","value":"A"},{"inputid":"ime_keyboard_letters_S","value":"S"},{"inputid":"ime_keyboard_letters_D","value":"D"},
    {"inputid":"ime_keyboard_letters_F","value":"F"},{"inputid":"ime_keyboard_letters_G","value":"G"},{"inputid":"ime_keyboard_letters_H","value":"H"},{"inputid":"ime_keyboard_letters_J","value":"J"},
    {"inputid":"ime_keyboard_letters_K","value":"K"},{"inputid":"ime_keyboard_letters_L","value":"L"},{"inputid":"ime_keyboard_letters_M","value":"\u00CD"},{"inputid":"ime_keyboard_letters_\u00F9","value":"\u00C9"},
    {"inputid":"ime_keyboard_letters_W","value":"Z"},{"inputid":"ime_keyboard_letters_X","value":"X"},{"inputid":"ime_keyboard_letters_C","value":"C"},{"inputid":"ime_keyboard_letters_V","value":"V"},
    {"inputid":"ime_keyboard_letters_B","value":"B"},{"inputid":"ime_keyboard_letters_N","value":"N"},{"inputid":"ime_keyboard_letters_comma","value":"M"},{"inputid":"ime_keyboard_letters_point","value":"\u00D3"},
    {"inputid":"ime_keyboard_letters_semicolon","value":"\u00C1"},{"inputid":"ime_keyboard_letters_colon","value":"\u00D1"},{"inputid":"ime_keyboard_letters_at","value":"@"},{"inputid":"ime_keyboard_letters_language","value":"Spanish"}
];

var spanish_small_values=[
    {"inputid":"ime_keyboard_letters_\u00E9","value":"\u00FC"},{"inputid":"ime_keyboard_letters_double_quotation","value":","},{"inputid":"ime_keyboard_letters_single_quotation","value":"."},{"inputid":"ime_keyboard_letters_left_bracket","value":"\u00BF"},
    {"inputid":"ime_keyboard_letters_midline","value":"\\"},{"inputid":"ime_keyboard_letters_\u00E8","value":"*"},{"inputid":"ime_keyboard_letters_baseline","value":"\""},{"inputid":"ime_keyboard_letters_\u00E7","value":"#"},
    {"inputid":"ime_keyboard_letters_\u00E0","value":"("},{"inputid":"ime_keyboard_letters_right_bracket","value":")"},{"inputid":"ime_keyboard_letters_A","value":"q"},{"inputid":"ime_keyboard_letters_Z","value":"w"},
    {"inputid":"ime_keyboard_letters_E","value":"e"},{"inputid":"ime_keyboard_letters_R","value":"r"},{"inputid":"ime_keyboard_letters_T","value":"t"},{"inputid":"ime_keyboard_letters_Y","value":"y"},
    {"inputid":"ime_keyboard_letters_U","value":"u"},{"inputid":"ime_keyboard_letters_I","value":"i"},{"inputid":"ime_keyboard_letters_O","value":"o"},{"inputid":"ime_keyboard_letters_P","value":"p"},
    {"inputid":"ime_keyboard_letters_^","value":"\u00FA"},{"inputid":"ime_keyboard_letters_Q","value":"a"},{"inputid":"ime_keyboard_letters_S","value":"s"},{"inputid":"ime_keyboard_letters_D","value":"d"},
    {"inputid":"ime_keyboard_letters_F","value":"f"},{"inputid":"ime_keyboard_letters_G","value":"g"},{"inputid":"ime_keyboard_letters_H","value":"h"},{"inputid":"ime_keyboard_letters_J","value":"j"},
    {"inputid":"ime_keyboard_letters_K","value":"k"},{"inputid":"ime_keyboard_letters_L","value":"l"},{"inputid":"ime_keyboard_letters_M","value":"\u00ED"},{"inputid":"ime_keyboard_letters_\u00F9","value":"\u00E9"},
    {"inputid":"ime_keyboard_letters_W","value":"z"},{"inputid":"ime_keyboard_letters_X","value":"x"},{"inputid":"ime_keyboard_letters_C","value":"c"},{"inputid":"ime_keyboard_letters_V","value":"v"},
    {"inputid":"ime_keyboard_letters_B","value":"b"},{"inputid":"ime_keyboard_letters_N","value":"n"},{"inputid":"ime_keyboard_letters_comma","value":"m"},{"inputid":"ime_keyboard_letters_point","value":"\u00F3"},
    {"inputid":"ime_keyboard_letters_semicolon","value":"\u00E1"},{"inputid":"ime_keyboard_letters_colon","value":"\u00F1"},{"inputid":"ime_keyboard_letters_at","value":"@"},{"inputid":"ime_keyboard_letters_language","value":"Spanish"}
];

var spanish_hardkeyboard_values = [
    {"value":"q","keycode":0x171},{"value":"w","keycode":0x177},
    {"value":"e","keycode":0x165},{"value":"r","keycode":0x172},{"value":"t","keycode":0x174},
    {"value":"y","keycode":0x179},{"value":"u","keycode":0x175},{"value":"i","keycode":0x169},
    {"value":"o","keycode":0x16F},{"value":"p","keycode":0x170},{"value":"a","keycode":0x161},
    {"value":"s","keycode":0x173},{"value":"d","keycode":0x164},{"value":"f","keycode":0x166},
    {"value":"g","keycode":0x167},{"value":"h","keycode":0x168},{"value":"j","keycode":0x16A},
    {"value":"k","keycode":0x16B},{"value":"l","keycode":0x16C},{"value":"!","keycode":0x21},
    {"value":"-","keycode":0x2F},{"value":"z","keycode":0x17A},
    {"value":"x","keycode":0x178},{"value":"c","keycode":0x163},{"value":"v","keycode":0x176},
    {"value":"b","keycode":0x162},{"value":"n","keycode":0x16E},{"value":"m","keycode":0x16D},
    {"value":",","keycode":0x2C},{"value":".","keycode":0x2E},{"value":"_","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":"Q","keycode":0x51},{"value":"W","keycode":0x57},
    {"value":"E","keycode":0x45},{"value":"R","keycode":0x52},{"value":"T","keycode":0x54},
    {"value":"Y","keycode":0x59},{"value":"U","keycode":0x55},{"value":"I","keycode":0x49},
    {"value":"O","keycode":0x4F},{"value":"P","keycode":0x50},{"value":"A","keycode":0x41},
    {"value":"S","keycode":0x53},{"value":"D","keycode":0x44},{"value":"F","keycode":0x46},
    {"value":"G","keycode":0x47},{"value":"H","keycode":0x48},{"value":"J","keycode":0x4A},
    {"value":"K","keycode":0x4B},{"value":"L","keycode":0x4C},{"value":"Z","keycode":0x5A},
    {"value":"X","keycode":0x58},{"value":"C","keycode":0x43},{"value":"V","keycode":0x56},
    {"value":"B","keycode":0x42},{"value":"N","keycode":0x4E},{"value":"M","keycode":0x4D},
    {"value":"1","keycode":0x31},{"value":"2","keycode":0x32},
    {"value":"3","keycode":0x33},{"value":"4","keycode":0x34},{"value":"5","keycode":0x35},
    {"value":"6","keycode":0x36},{"value":"7","keycode":0x37},{"value":"8","keycode":0x38},
    {"value":"9","keycode":0x39},{"value":"0","keycode":0x30},{"value":"\u00E7","keycode":0x5C},
    {"value":"\u00B7","keycode":0x23},{"value":"$","keycode":0x24},{"value":"%","keycode":0x125},
    {"value":"/","keycode":0x126},{"value":"(","keycode":0x2A},{"value":")","keycode":0x128},
    {"value":"=","keycode":0x29},{"value":"?","keycode":0x5F},
    {"value":"\u00D1","keycode":0x3A},{"value":"\u00F1","keycode":0x3B},{"value":"\u00A8","keycode":0x22},
    {"value":"\u00B4","keycode":0x127},{"value":";","keycode":0x3C},{"value":":","keycode":0x3E},
    {"value":"`","keycode":0x5B},{"value":"+","keycode":0x5D},
    {"value":"^","keycode":0x7B},{"value":"*","keycode":0x7D},{"value":"\u00BF","keycode":0x2B},
    {"value":"\'","keycode":0x2D}, {"value":"\u00A1","keycode":0x3D},{"value":"\u00BA","keycode":0x60},
    {"value":"\"","keycode":0x40},{"value":"\u00C7","keycode":0x7C}, {"value":"&","keycode":0x5E},{"value":"\u00AA","keycode":0x7E},

    {"value":"|","keycode":0x231},{"value":"@","keycode":0x232},
    {"value":"#","keycode":0x233},{"value":"~","keycode":0x234},{"value":"\u20AC","keycode":0x235},
    {"value":"\u00AC","keycode":0x236},{"value":"\u20AC","keycode":0x365}, {"value":"[","keycode":0x25B},{"value":"]","keycode":0x25D},
    {"value":"{","keycode":0x327},{"value":"}","keycode":0x25C},{"value":"\\","keycode":0x260},
];

var spanish_specialhardkeyboard_values = [
    {"value":"\u00E7","keycode":0x7C},{"value":"\u00C7","keycode":0x5C},
];

var polski_big_values = [{"inputid":"ime_keyboard_letters_Q","value":"Q"},{"inputid":"ime_keyboard_letters_W","value":"W"},
    {"inputid":"ime_keyboard_letters_E","value":"E"},{"inputid":"ime_keyboard_letters_R","value":"R"},{"inputid":"ime_keyboard_letters_T","value":"T"},
    {"inputid":"ime_keyboard_letters_Y","value":"Y"},{"inputid":"ime_keyboard_letters_U","value":"U"},{"inputid":"ime_keyboard_letters_I","value":"I"},
    {"inputid":"ime_keyboard_letters_O","value":"O"},{"inputid":"ime_keyboard_letters_P","value":"P"},{"inputid":"ime_keyboard_letters_A","value":"A"},
    {"inputid":"ime_keyboard_letters_S","value":"S"},{"inputid":"ime_keyboard_letters_D","value":"D"},{"inputid":"ime_keyboard_letters_F","value":"F"},
    {"inputid":"ime_keyboard_letters_G","value":"G"},{"inputid":"ime_keyboard_letters_H","value":"H"},{"inputid":"ime_keyboard_letters_J","value":"J"},
    {"inputid":"ime_keyboard_letters_K","value":"K"},{"inputid":"ime_keyboard_letters_L","value":"L"},{"inputid":"ime_keyboard_letters_exclamation","value":"!"},
    {"inputid":"ime_keyboard_letters_slash","value":"/"},{"inputid":"ime_keyboard_letters_shift","value":""},{"inputid":"ime_keyboard_letters_Z","value":"Z"},
    {"inputid":"ime_keyboard_letters_X","value":"X"},{"inputid":"ime_keyboard_letters_C","value":"C"},{"inputid":"ime_keyboard_letters_V","value":"V"},
    {"inputid":"ime_keyboard_letters_B","value":"B"},{"inputid":"ime_keyboard_letters_N","value":"N"},{"inputid":"ime_keyboard_letters_M","value":"M"},
    {"inputid":"ime_keyboard_letters_comma","value":","},{"inputid":"ime_keyboard_letters_point","value":"."},{"inputid":"ime_keyboard_letters_question","value":"?"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_language","value":"Polski"}
];

var polski_small_values = [{"inputid":"ime_keyboard_letters_Q","value":"q"},{"inputid":"ime_keyboard_letters_W","value":"w"},
    {"inputid":"ime_keyboard_letters_E","value":"e"},{"inputid":"ime_keyboard_letters_R","value":"r"},{"inputid":"ime_keyboard_letters_T","value":"t"},
    {"inputid":"ime_keyboard_letters_Y","value":"y"},{"inputid":"ime_keyboard_letters_U","value":"u"},{"inputid":"ime_keyboard_letters_I","value":"i"},
    {"inputid":"ime_keyboard_letters_O","value":"o"},{"inputid":"ime_keyboard_letters_P","value":"p"},{"inputid":"ime_keyboard_letters_A","value":"a"},
    {"inputid":"ime_keyboard_letters_S","value":"s"},{"inputid":"ime_keyboard_letters_D","value":"d"},{"inputid":"ime_keyboard_letters_F","value":"f"},
    {"inputid":"ime_keyboard_letters_G","value":"g"},{"inputid":"ime_keyboard_letters_H","value":"h"},{"inputid":"ime_keyboard_letters_J","value":"j"},
    {"inputid":"ime_keyboard_letters_K","value":"k"},{"inputid":"ime_keyboard_letters_L","value":"l"},{"inputid":"ime_keyboard_letters_exclamation","value":"!"},
    {"inputid":"ime_keyboard_letters_slash","value":"/"},{"inputid":"ime_keyboard_letters_shift","value":""},{"inputid":"ime_keyboard_letters_Z","value":"z"},
    {"inputid":"ime_keyboard_letters_X","value":"x"},{"inputid":"ime_keyboard_letters_C","value":"c"},{"inputid":"ime_keyboard_letters_V","value":"v"},
    {"inputid":"ime_keyboard_letters_B","value":"b"},{"inputid":"ime_keyboard_letters_N","value":"n"},{"inputid":"ime_keyboard_letters_M","value":"m"},
    {"inputid":"ime_keyboard_letters_comma","value":","},{"inputid":"ime_keyboard_letters_point","value":"."},{"inputid":"ime_keyboard_letters_question","value":"?"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_language","value":"Polski"}
];

var polski_hardkeyboard_values = [
    {"value":"q","keycode":0x171},{"value":"w","keycode":0x177},
    {"value":"e","keycode":0x165},{"value":"r","keycode":0x172},{"value":"t","keycode":0x174},
    {"value":"y","keycode":0x179},{"value":"u","keycode":0x175},{"value":"i","keycode":0x169},
    {"value":"o","keycode":0x16F},{"value":"p","keycode":0x170},{"value":"a","keycode":0x161},
    {"value":"s","keycode":0x173},{"value":"d","keycode":0x164},{"value":"f","keycode":0x166},
    {"value":"g","keycode":0x167},{"value":"h","keycode":0x168},{"value":"j","keycode":0x16A},
    {"value":"k","keycode":0x16B},{"value":"l","keycode":0x16C},{"value":"!","keycode":0x21},
    {"value":"/","keycode":0x2F},{"value":"z","keycode":0x17A},
    {"value":"x","keycode":0x178},{"value":"c","keycode":0x163},{"value":"v","keycode":0x176},
    {"value":"b","keycode":0x162},{"value":"n","keycode":0x16E},{"value":"m","keycode":0x16D},
    {"value":",","keycode":0x2C},{"value":".","keycode":0x2E},{"value":"?","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":"Q","keycode":0x51},{"value":"W","keycode":0x57},
    {"value":"E","keycode":0x45},{"value":"R","keycode":0x52},{"value":"T","keycode":0x54},
    {"value":"Y","keycode":0x59},{"value":"U","keycode":0x55},{"value":"I","keycode":0x49},
    {"value":"O","keycode":0x4F},{"value":"P","keycode":0x50},{"value":"A","keycode":0x41},
    {"value":"S","keycode":0x53},{"value":"D","keycode":0x44},{"value":"F","keycode":0x46},
    {"value":"G","keycode":0x47},{"value":"H","keycode":0x48},{"value":"J","keycode":0x4A},
    {"value":"K","keycode":0x4B},{"value":"L","keycode":0x4C},{"value":"Z","keycode":0x5A},
    {"value":"X","keycode":0x58},{"value":"C","keycode":0x43},{"value":"V","keycode":0x56},
    {"value":"B","keycode":0x42},{"value":"N","keycode":0x4E},{"value":"M","keycode":0x4D},
    {"value":"1","keycode":0x31},{"value":"2","keycode":0x32},
    {"value":"3","keycode":0x33},{"value":"4","keycode":0x34},{"value":"5","keycode":0x35},
    {"value":"6","keycode":0x36},{"value":"7","keycode":0x37},{"value":"8","keycode":0x38},
    {"value":"9","keycode":0x39},{"value":"0","keycode":0x30},{"value":"\\","keycode":0x5C},
    {"value":"#","keycode":0x23},{"value":"$","keycode":0x24},{"value":"%","keycode":0x125},
    {"value":"&","keycode":0x126},{"value":"*","keycode":0x2A},{"value":"(","keycode":0x128},
    {"value":")","keycode":0x29},{"value":"_","keycode":0x5F},
    {"value":":","keycode":0x3A},{"value":";","keycode":0x3B},{"value":"\"","keycode":0x22},
    {"value":"\'","keycode":0x127},{"value":"<","keycode":0x3C},{"value":">","keycode":0x3E},
    {"value":"[","keycode":0x5B},{"value":"]","keycode":0x5D},
    {"value":"{","keycode":0x7B},{"value":"}","keycode":0x7D},{"value":"+","keycode":0x2B},
    {"value":"-","keycode":0x2D}, {"value":"=","keycode":0x3D},{"value":"`","keycode":0x60},
    {"value":"@","keycode":0x40},{"value":"|","keycode":0x7C}, {"value":"^","keycode":0x5E},{"value":"~","keycode":0x7E},

    {"value":"\u00A1","keycode":0x231},{"value":"\u00B2","keycode":0x232},
    {"value":"\u00B3","keycode":0x233},{"value":"\u00A4","keycode":0x234},{"value":"\u20AC","keycode":0x235},
    {"value":"\u00BC","keycode":0x236},{"value":"\u00BD","keycode":0x237},{"value":"\u00BE","keycode":0x238},
    {"value":"\u2018","keycode":0x239},{"value":"\u2019","keycode":0x230},{"value":"\u00A5","keycode":0x22D}, {"value":"\u00D7","keycode":0x23D},
    {"value":"\u00E4","keycode":0x371},{"value":"\u00E5","keycode":0x377},
    {"value":"\u00E9","keycode":0x365},{"value":"\u00AE","keycode":0x372},{"value":"\u00FE","keycode":0x374},
    {"value":"\u00FC","keycode":0x379},{"value":"\u00FA","keycode":0x375},{"value":"\u00ED","keycode":0x369},
    {"value":"\u00F3","keycode":0x36F},{"value":"\u00F6","keycode":0x370},
    {"value":"\u00AB","keycode":0x25B},{"value":"\u00BB","keycode":0x25D},{"value":"\u00AC","keycode":0x25C},
    {"value":"\u00E1","keycode":0x361},
    {"value":"\u00DF","keycode":0x373},{"value":"\u00F0","keycode":0x364},
    {"value":"\u00F8","keycode":0x36C},{"value":"\u00B6","keycode":0x23B},{"value":"\u00B4","keycode":0x327},
    {"value":"\u00E6","keycode":0x37A}, {"value":"\u00A9","keycode":0x363},{"value":"\u00F1","keycode":0x36E},{"value":"\u00B5","keycode":0x36D},
    {"value":"\u00E7","keycode":0x22C}, {"value":"\u00BF","keycode":0x22F},

];

var svenska_big_values=[{"inputid":"ime_keyboard_letters_Q","value":"Q"},{"inputid":"ime_keyboard_letters_W","value":"W"},
    {"inputid":"ime_keyboard_letters_E","value":"E"},{"inputid":"ime_keyboard_letters_R","value":"R"},{"inputid":"ime_keyboard_letters_T","value":"T"},
    {"inputid":"ime_keyboard_letters_Y","value":"Y"},{"inputid":"ime_keyboard_letters_U","value":"U"},{"inputid":"ime_keyboard_letters_I","value":"I"},
    {"inputid":"ime_keyboard_letters_O","value":"O"},{"inputid":"ime_keyboard_letters_P","value":"P"},{"inputid":"ime_keyboard_letters_A","value":"A"},
    {"inputid":"ime_keyboard_letters_S","value":"S"},{"inputid":"ime_keyboard_letters_D","value":"D"},{"inputid":"ime_keyboard_letters_F","value":"F"},
    {"inputid":"ime_keyboard_letters_G","value":"G"},{"inputid":"ime_keyboard_letters_H","value":"H"},{"inputid":"ime_keyboard_letters_J","value":"J"},
    {"inputid":"ime_keyboard_letters_K","value":"K"},{"inputid":"ime_keyboard_letters_L","value":"L"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u00C5"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u00D6"},{"inputid":"ime_keyboard_letters_Z","value":"Z"},
    {"inputid":"ime_keyboard_letters_X","value":"X"},{"inputid":"ime_keyboard_letters_C","value":"C"},{"inputid":"ime_keyboard_letters_V","value":"V"},
    {"inputid":"ime_keyboard_letters_B","value":"B"},{"inputid":"ime_keyboard_letters_N","value":"N"},{"inputid":"ime_keyboard_letters_M","value":"M"},
    {"inputid":"ime_keyboard_letters_comma","value":"\u00C4"},{"inputid":"ime_keyboard_letters_point","value":"\uFF01"},{"inputid":"ime_keyboard_letters_question","value":"?"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_1","value":"\\"},{"inputid":"ime_keyboard_letters_2","value":"@"},
    {"inputid":"ime_keyboard_letters_3","value":","},{"inputid":"ime_keyboard_letters_at","value":"."},{"inputid":"ime_keyboard_letters_language","value":"Svenska"}
];

var svenska_small_values=[{"inputid":"ime_keyboard_letters_Q","value":"q"},{"inputid":"ime_keyboard_letters_W","value":"w"},
    {"inputid":"ime_keyboard_letters_E","value":"e"},{"inputid":"ime_keyboard_letters_R","value":"r"},{"inputid":"ime_keyboard_letters_T","value":"t"},
    {"inputid":"ime_keyboard_letters_Y","value":"y"},{"inputid":"ime_keyboard_letters_U","value":"u"},{"inputid":"ime_keyboard_letters_I","value":"i"},
    {"inputid":"ime_keyboard_letters_O","value":"o"},{"inputid":"ime_keyboard_letters_P","value":"p"},{"inputid":"ime_keyboard_letters_A","value":"a"},
    {"inputid":"ime_keyboard_letters_S","value":"s"},{"inputid":"ime_keyboard_letters_D","value":"d"},{"inputid":"ime_keyboard_letters_F","value":"f"},
    {"inputid":"ime_keyboard_letters_G","value":"g"},{"inputid":"ime_keyboard_letters_H","value":"h"},{"inputid":"ime_keyboard_letters_J","value":"j"},
    {"inputid":"ime_keyboard_letters_K","value":"k"},{"inputid":"ime_keyboard_letters_L","value":"l"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u00E5"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u00F6"},{"inputid":"ime_keyboard_letters_Z","value":"z"},
    {"inputid":"ime_keyboard_letters_X","value":"x"},{"inputid":"ime_keyboard_letters_C","value":"c"},{"inputid":"ime_keyboard_letters_V","value":"v"},
    {"inputid":"ime_keyboard_letters_B","value":"b"},{"inputid":"ime_keyboard_letters_N","value":"n"},{"inputid":"ime_keyboard_letters_M","value":"m"},
    {"inputid":"ime_keyboard_letters_comma","value":"\u00E4"},{"inputid":"ime_keyboard_letters_point","value":"\uFF01"},{"inputid":"ime_keyboard_letters_question","value":"?"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_1","value":"\\"},{"inputid":"ime_keyboard_letters_2","value":"@"},
    {"inputid":"ime_keyboard_letters_3","value":","},{"inputid":"ime_keyboard_letters_at","value":"."},{"inputid":"ime_keyboard_letters_language","value":"Svenska"}
];

var svenska_hardkeyboard_values = [
    {"value":"q","keycode":0x171},{"value":"w","keycode":0x177},
    {"value":"e","keycode":0x165},{"value":"r","keycode":0x172},{"value":"t","keycode":0x174},
    {"value":"y","keycode":0x179},{"value":"u","keycode":0x175},{"value":"i","keycode":0x169},
    {"value":"o","keycode":0x16F},{"value":"p","keycode":0x170},{"value":"a","keycode":0x161},
    {"value":"s","keycode":0x173},{"value":"d","keycode":0x164},{"value":"f","keycode":0x166},
    {"value":"g","keycode":0x167},{"value":"h","keycode":0x168},{"value":"j","keycode":0x16A},
    {"value":"k","keycode":0x16B},{"value":"l","keycode":0x16C},{"value":"!","keycode":0x21},
    {"value":"-","keycode":0x2F},{"value":"z","keycode":0x17A},
    {"value":"x","keycode":0x178},{"value":"c","keycode":0x163},{"value":"v","keycode":0x176},
    {"value":"b","keycode":0x162},{"value":"n","keycode":0x16E},{"value":"m","keycode":0x16D},
    {"value":",","keycode":0x2C},{"value":".","keycode":0x2E},{"value":"_","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":"Q","keycode":0x51},{"value":"W","keycode":0x57},
    {"value":"E","keycode":0x45},{"value":"R","keycode":0x52},{"value":"T","keycode":0x54},
    {"value":"Y","keycode":0x59},{"value":"U","keycode":0x55},{"value":"I","keycode":0x49},
    {"value":"O","keycode":0x4F},{"value":"P","keycode":0x50},{"value":"A","keycode":0x41},
    {"value":"S","keycode":0x53},{"value":"D","keycode":0x44},{"value":"F","keycode":0x46},
    {"value":"G","keycode":0x47},{"value":"H","keycode":0x48},{"value":"J","keycode":0x4A},
    {"value":"K","keycode":0x4B},{"value":"L","keycode":0x4C},{"value":"Z","keycode":0x5A},
    {"value":"X","keycode":0x58},{"value":"C","keycode":0x43},{"value":"V","keycode":0x56},
    {"value":"B","keycode":0x42},{"value":"N","keycode":0x4E},{"value":"M","keycode":0x4D},
    {"value":"1","keycode":0x31},{"value":"2","keycode":0x32},
    {"value":"3","keycode":0x33},{"value":"4","keycode":0x34},{"value":"5","keycode":0x35},
    {"value":"6","keycode":0x36},{"value":"7","keycode":0x37},{"value":"8","keycode":0x38},
    {"value":"9","keycode":0x39},{"value":"0","keycode":0x30},{"value":"\'","keycode":0x5C},
    {"value":"#","keycode":0x23},{"value":"\u00A4","keycode":0x24},{"value":"%","keycode":0x125},
    {"value":"/","keycode":0x126},{"value":"(","keycode":0x2A},{"value":")","keycode":0x128},
    {"value":"=","keycode":0x29},{"value":"?","keycode":0x5F},
    {"value":"\u00D6","keycode":0x3A},{"value":"\u00F6","keycode":0x3B},{"value":"\u00C4","keycode":0x22},
    {"value":"\u00E4","keycode":0x127},{"value":";","keycode":0x3C},{"value":":","keycode":0x3E},
    {"value":"\u00E5","keycode":0x5B},{"value":"\u00A8","keycode":0x5D},
    {"value":"\u00C5","keycode":0x7B},{"value":"^","keycode":0x7D},{"value":"`","keycode":0x2B},
    {"value":"+","keycode":0x2D}, {"value":"\u00B4","keycode":0x3D},{"value":"\u00A7","keycode":0x60},
    {"value":"\"","keycode":0x40},{"value":"*","keycode":0x7C}, {"value":"&","keycode":0x5E},{"value":"\u00BD","keycode":0x7E},
    {"value":"@","keycode":0x232}, {"value":"\u00A3","keycode":0x233},{"value":"$","keycode":0x234},{"value":"\u20AC","keycode":0x235},
    {"value":"{","keycode":0x237},{"value":"[","keycode":0x238},{"value":"\\","keycode":0x22D},
    {"value":"]","keycode":0x239},{"value":"}","keycode":0x230},{"value":"\u20AC","keycode":0x365},{"value":"~","keycode":0x25D},
    {"value":"\u00B5","keycode":0x36D},

];


var svenska_specialhardkeyboard_values = [
    {"value":"\u00E5","keycode":0x7B},{"value":"\u00C5","keycode":0x5B},{"value":"\u00C4","keycode":0x127},{"value":"\u00E4","keycode":0x22},
    {"value":"\u00F6","keycode":0x3A},{"value":"\u00D6","keycode":0x3B},
];

var deutsch_big_values=[{"inputid":"ime_keyboard_letters_Q","value":"Q"},{"inputid":"ime_keyboard_letters_W","value":"W"},
    {"inputid":"ime_keyboard_letters_E","value":"E"},{"inputid":"ime_keyboard_letters_R","value":"R"},{"inputid":"ime_keyboard_letters_T","value":"T"},
    {"inputid":"ime_keyboard_letters_Y","value":"Z"},{"inputid":"ime_keyboard_letters_U","value":"U"},{"inputid":"ime_keyboard_letters_I","value":"I"},
    {"inputid":"ime_keyboard_letters_O","value":"O"},{"inputid":"ime_keyboard_letters_P","value":"P"},{"inputid":"ime_keyboard_letters_A","value":"A"},
    {"inputid":"ime_keyboard_letters_S","value":"S"},{"inputid":"ime_keyboard_letters_D","value":"D"},{"inputid":"ime_keyboard_letters_F","value":"F"},
    {"inputid":"ime_keyboard_letters_G","value":"G"},{"inputid":"ime_keyboard_letters_H","value":"H"},{"inputid":"ime_keyboard_letters_J","value":"J"},
    {"inputid":"ime_keyboard_letters_K","value":"K"},{"inputid":"ime_keyboard_letters_L","value":"L"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u00DC"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u00DF"},{"inputid":"ime_keyboard_letters_Z","value":"Y"},
    {"inputid":"ime_keyboard_letters_X","value":"X"},{"inputid":"ime_keyboard_letters_C","value":"C"},{"inputid":"ime_keyboard_letters_V","value":"V"},
    {"inputid":"ime_keyboard_letters_B","value":"B"},{"inputid":"ime_keyboard_letters_N","value":"N"},{"inputid":"ime_keyboard_letters_M","value":"M"},
    {"inputid":"ime_keyboard_letters_comma","value":"\u00D6"},{"inputid":"ime_keyboard_letters_point","value":"\u00C4"},{"inputid":"ime_keyboard_letters_question","value":"\uFF1F"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_1","value":"\\"},{"inputid":"ime_keyboard_letters_2","value":"@"},
    {"inputid":"ime_keyboard_letters_3","value":","},{"inputid":"ime_keyboard_letters_at","value":"."},{"inputid":"ime_keyboard_letters_language","value":"German"}
];

var deutsch_small_values=[{"inputid":"ime_keyboard_letters_Q","value":"q"},{"inputid":"ime_keyboard_letters_W","value":"w"},
    {"inputid":"ime_keyboard_letters_E","value":"e"},{"inputid":"ime_keyboard_letters_R","value":"r"},{"inputid":"ime_keyboard_letters_T","value":"t"},
    {"inputid":"ime_keyboard_letters_Y","value":"z"},{"inputid":"ime_keyboard_letters_U","value":"u"},{"inputid":"ime_keyboard_letters_I","value":"i"},
    {"inputid":"ime_keyboard_letters_O","value":"o"},{"inputid":"ime_keyboard_letters_P","value":"p"},{"inputid":"ime_keyboard_letters_A","value":"a"},
    {"inputid":"ime_keyboard_letters_S","value":"s"},{"inputid":"ime_keyboard_letters_D","value":"d"},{"inputid":"ime_keyboard_letters_F","value":"f"},
    {"inputid":"ime_keyboard_letters_G","value":"g"},{"inputid":"ime_keyboard_letters_H","value":"h"},{"inputid":"ime_keyboard_letters_J","value":"j"},
    {"inputid":"ime_keyboard_letters_K","value":"k"},{"inputid":"ime_keyboard_letters_L","value":"l"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u00FC"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u00DF"},{"inputid":"ime_keyboard_letters_Z","value":"y"},
    {"inputid":"ime_keyboard_letters_X","value":"x"},{"inputid":"ime_keyboard_letters_C","value":"c"},{"inputid":"ime_keyboard_letters_V","value":"v"},
    {"inputid":"ime_keyboard_letters_B","value":"b"},{"inputid":"ime_keyboard_letters_N","value":"n"},{"inputid":"ime_keyboard_letters_M","value":"m"},
    {"inputid":"ime_keyboard_letters_comma","value":"\u00F6"},{"inputid":"ime_keyboard_letters_point","value":"\u00E4"},{"inputid":"ime_keyboard_letters_question","value":"\uFF1F"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_1","value":"\\"},{"inputid":"ime_keyboard_letters_2","value":"@"},
    {"inputid":"ime_keyboard_letters_3","value":","},{"inputid":"ime_keyboard_letters_at","value":"."},{"inputid":"ime_keyboard_letters_language","value":"German"}
];

var deutsch_hardkeyboard_values = [
    {"value":"q","keycode":0x171},{"value":"w","keycode":0x177},
    {"value":"e","keycode":0x165},{"value":"r","keycode":0x172},{"value":"t","keycode":0x174},
    {"value":"z","keycode":0x179},{"value":"u","keycode":0x175},{"value":"i","keycode":0x169},
    {"value":"o","keycode":0x16F},{"value":"p","keycode":0x170},{"value":"a","keycode":0x161},
    {"value":"s","keycode":0x173},{"value":"d","keycode":0x164},{"value":"f","keycode":0x166},
    {"value":"g","keycode":0x167},{"value":"h","keycode":0x168},{"value":"j","keycode":0x16A},
    {"value":"k","keycode":0x16B},{"value":"l","keycode":0x16C},{"value":"!","keycode":0x21},
    {"value":"-","keycode":0x2F},{"value":"y","keycode":0x17A},
    {"value":"x","keycode":0x178},{"value":"c","keycode":0x163},{"value":"v","keycode":0x176},
    {"value":"b","keycode":0x162},{"value":"n","keycode":0x16E},{"value":"m","keycode":0x16D},
    {"value":",","keycode":0x2C},{"value":".","keycode":0x2E},{"value":"_","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":"Q","keycode":0x51},{"value":"W","keycode":0x57},
    {"value":"E","keycode":0x45},{"value":"R","keycode":0x52},{"value":"T","keycode":0x54},
    {"value":"Z","keycode":0x59},{"value":"U","keycode":0x55},{"value":"I","keycode":0x49},
    {"value":"O","keycode":0x4F},{"value":"P","keycode":0x50},{"value":"A","keycode":0x41},
    {"value":"S","keycode":0x53},{"value":"D","keycode":0x44},{"value":"F","keycode":0x46},
    {"value":"G","keycode":0x47},{"value":"H","keycode":0x48},{"value":"J","keycode":0x4A},
    {"value":"K","keycode":0x4B},{"value":"L","keycode":0x4C},{"value":"Y","keycode":0x5A},
    {"value":"X","keycode":0x58},{"value":"C","keycode":0x43},{"value":"V","keycode":0x56},
    {"value":"B","keycode":0x42},{"value":"N","keycode":0x4E},{"value":"M","keycode":0x4D},
    {"value":"1","keycode":0x31},{"value":"2","keycode":0x32},
    {"value":"3","keycode":0x33},{"value":"4","keycode":0x34},{"value":"5","keycode":0x35},
    {"value":"6","keycode":0x36},{"value":"7","keycode":0x37},{"value":"8","keycode":0x38},
    {"value":"9","keycode":0x39},{"value":"0","keycode":0x30},{"value":"#","keycode":0x5C},
    {"value":"\u00A7","keycode":0x23},{"value":"$","keycode":0x24},{"value":"%","keycode":0x125},
    {"value":"/","keycode":0x126},{"value":"(","keycode":0x2A},{"value":")","keycode":0x128},
    {"value":"=","keycode":0x29},{"value":"?","keycode":0x5F},
    {"value":"\u00D6","keycode":0x3A},{"value":"\u00F6","keycode":0x3B},{"value":"\u00C4","keycode":0x22},
    {"value":"\u00E4","keycode":0x127},{"value":";","keycode":0x3C},{"value":":","keycode":0x3E},
    {"value":"\u00FC","keycode":0x5B},{"value":"+","keycode":0x5D},
    {"value":"\u00DC","keycode":0x7B},{"value":"*","keycode":0x7D},{"value":"`","keycode":0x2B},
    {"value":"\u00DF","keycode":0x2D}, {"value":"\u00B4","keycode":0x3D},{"value":"^","keycode":0x60},
    {"value":"\"","keycode":0x40},{"value":"\'","keycode":0x7C}, {"value":"&","keycode":0x5E},{"value":"\u00B0","keycode":0x7E},

    {"value":"\u00B2","keycode":0x232},{"value":"~","keycode":0x25D},
    {"value":"\u00B3","keycode":0x233},{"value":"{","keycode":0x237},{"value":"[","keycode":0x238},
    {"value":"]","keycode":0x239},{"value":"}","keycode":0x230},{"value":"\\","keycode":0x22D},
    {"value":"@","keycode":0x371},{"value":"\u20AC","keycode":0x365},{"value":"\u00B5","keycode":0x36D},

];

var deutsch_specialhardkeyboard_values = [
    {"value":"\u00DC","keycode":0x5B},{"value":"\u00FC","keycode":0x7B},{"value":"\u00F6","keycode":0x3A},{"value":"\u00D6","keycode":0x3B},
    {"value":"\u00E4","keycode":0x22}, {"value":"\u00C4","keycode":0x127},
];

var esthonian_big_values=[{"inputid":"ime_keyboard_letters_Q","value":"Q"},{"inputid":"ime_keyboard_letters_W","value":"W"},
    {"inputid":"ime_keyboard_letters_E","value":"E"},{"inputid":"ime_keyboard_letters_R","value":"R"},{"inputid":"ime_keyboard_letters_T","value":"T"},
    {"inputid":"ime_keyboard_letters_Y","value":"Y"},{"inputid":"ime_keyboard_letters_U","value":"U"},{"inputid":"ime_keyboard_letters_I","value":"I"},
    {"inputid":"ime_keyboard_letters_O","value":"O"},{"inputid":"ime_keyboard_letters_P","value":"P"},{"inputid":"ime_keyboard_letters_A","value":"A"},
    {"inputid":"ime_keyboard_letters_S","value":"S"},{"inputid":"ime_keyboard_letters_D","value":"D"},{"inputid":"ime_keyboard_letters_F","value":"F"},
    {"inputid":"ime_keyboard_letters_G","value":"G"},{"inputid":"ime_keyboard_letters_H","value":"H"},{"inputid":"ime_keyboard_letters_J","value":"J"},
    {"inputid":"ime_keyboard_letters_K","value":"K"},{"inputid":"ime_keyboard_letters_L","value":"L"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u00DC"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u00D5"},{"inputid":"ime_keyboard_letters_Z","value":"Z"},
    {"inputid":"ime_keyboard_letters_X","value":"X"},{"inputid":"ime_keyboard_letters_C","value":"C"},{"inputid":"ime_keyboard_letters_V","value":"V"},
    {"inputid":"ime_keyboard_letters_B","value":"B"},{"inputid":"ime_keyboard_letters_N","value":"N"},{"inputid":"ime_keyboard_letters_M","value":"M"},
    {"inputid":"ime_keyboard_letters_comma","value":"\u00D6"},{"inputid":"ime_keyboard_letters_point","value":"\u00C4"},{"inputid":"ime_keyboard_letters_question","value":"\uFF1F"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_1","value":"\\"},{"inputid":"ime_keyboard_letters_2","value":"@"},
    {"inputid":"ime_keyboard_letters_3","value":","},{"inputid":"ime_keyboard_letters_at","value":"."},{"inputid":"ime_keyboard_letters_language","value":"Estonian"}
];

var esthonian_small_values=[{"inputid":"ime_keyboard_letters_Q","value":"q"},{"inputid":"ime_keyboard_letters_W","value":"w"},
    {"inputid":"ime_keyboard_letters_E","value":"e"},{"inputid":"ime_keyboard_letters_R","value":"r"},{"inputid":"ime_keyboard_letters_T","value":"t"},
    {"inputid":"ime_keyboard_letters_Y","value":"y"},{"inputid":"ime_keyboard_letters_U","value":"u"},{"inputid":"ime_keyboard_letters_I","value":"i"},
    {"inputid":"ime_keyboard_letters_O","value":"o"},{"inputid":"ime_keyboard_letters_P","value":"p"},{"inputid":"ime_keyboard_letters_A","value":"a"},
    {"inputid":"ime_keyboard_letters_S","value":"s"},{"inputid":"ime_keyboard_letters_D","value":"d"},{"inputid":"ime_keyboard_letters_F","value":"f"},
    {"inputid":"ime_keyboard_letters_G","value":"g"},{"inputid":"ime_keyboard_letters_H","value":"h"},{"inputid":"ime_keyboard_letters_J","value":"j"},
    {"inputid":"ime_keyboard_letters_K","value":"k"},{"inputid":"ime_keyboard_letters_L","value":"l"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u00FC"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u00F5"},{"inputid":"ime_keyboard_letters_Z","value":"z"},
    {"inputid":"ime_keyboard_letters_X","value":"x"},{"inputid":"ime_keyboard_letters_C","value":"c"},{"inputid":"ime_keyboard_letters_V","value":"v"},
    {"inputid":"ime_keyboard_letters_B","value":"b"},{"inputid":"ime_keyboard_letters_N","value":"n"},{"inputid":"ime_keyboard_letters_M","value":"m"},
    {"inputid":"ime_keyboard_letters_comma","value":"\u00F6"},{"inputid":"ime_keyboard_letters_point","value":"\u00E4"},{"inputid":"ime_keyboard_letters_question","value":"\uFF1F"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_1","value":"\\"},{"inputid":"ime_keyboard_letters_2","value":"@"},
    {"inputid":"ime_keyboard_letters_3","value":","},{"inputid":"ime_keyboard_letters_at","value":"."},{"inputid":"ime_keyboard_letters_language","value":"Estonian"}
];


var esthonian_hardkeyboard_values = [
    {"value":"q","keycode":0x171},{"value":"w","keycode":0x177},
    {"value":"e","keycode":0x165},{"value":"r","keycode":0x172},{"value":"t","keycode":0x174},
    {"value":"y","keycode":0x179},{"value":"u","keycode":0x175},{"value":"i","keycode":0x169},
    {"value":"o","keycode":0x16F},{"value":"p","keycode":0x170},{"value":"a","keycode":0x161},
    {"value":"s","keycode":0x173},{"value":"d","keycode":0x164},{"value":"f","keycode":0x166},
    {"value":"g","keycode":0x167},{"value":"h","keycode":0x168},{"value":"j","keycode":0x16A},
    {"value":"k","keycode":0x16B},{"value":"l","keycode":0x16C},{"value":"!","keycode":0x21},
    {"value":"-","keycode":0x2F},{"value":"z","keycode":0x17A},
    {"value":"x","keycode":0x178},{"value":"c","keycode":0x163},{"value":"v","keycode":0x176},
    {"value":"b","keycode":0x162},{"value":"n","keycode":0x16E},{"value":"m","keycode":0x16D},
    {"value":",","keycode":0x2C},{"value":".","keycode":0x2E},{"value":"_","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":"Q","keycode":0x51},{"value":"W","keycode":0x57},
    {"value":"E","keycode":0x45},{"value":"R","keycode":0x52},{"value":"T","keycode":0x54},
    {"value":"Y","keycode":0x59},{"value":"U","keycode":0x55},{"value":"I","keycode":0x49},
    {"value":"O","keycode":0x4F},{"value":"P","keycode":0x50},{"value":"A","keycode":0x41},
    {"value":"S","keycode":0x53},{"value":"D","keycode":0x44},{"value":"F","keycode":0x46},
    {"value":"G","keycode":0x47},{"value":"H","keycode":0x48},{"value":"J","keycode":0x4A},
    {"value":"K","keycode":0x4B},{"value":"L","keycode":0x4C},{"value":"Z","keycode":0x5A},
    {"value":"X","keycode":0x58},{"value":"C","keycode":0x43},{"value":"V","keycode":0x56},
    {"value":"B","keycode":0x42},{"value":"N","keycode":0x4E},{"value":"M","keycode":0x4D},
    {"value":"1","keycode":0x31},{"value":"2","keycode":0x32},
    {"value":"3","keycode":0x33},{"value":"4","keycode":0x34},{"value":"5","keycode":0x35},
    {"value":"6","keycode":0x36},{"value":"7","keycode":0x37},{"value":"8","keycode":0x38},
    {"value":"9","keycode":0x39},{"value":"0","keycode":0x30},{"value":"\'","keycode":0x5C},
    {"value":"#","keycode":0x23},{"value":"\u00A4","keycode":0x24},{"value":"%","keycode":0x125},
    {"value":"/","keycode":0x126},{"value":"(","keycode":0x2A},{"value":")","keycode":0x128},
    {"value":"=","keycode":0x29},{"value":"?","keycode":0x5F},
    {"value":"\u00D6","keycode":0x3A},{"value":"\u00F6","keycode":0x3B},{"value":"\u00C4","keycode":0x22},
    {"value":"\u00E4","keycode":0x127},{"value":";","keycode":0x3C},{"value":":","keycode":0x3E},
    {"value":"\u00FC","keycode":0x5B},{"value":"\u00F5","keycode":0x5D},
    {"value":"\u00DC","keycode":0x7B},{"value":"\u00D5","keycode":0x7D},{"value":"`","keycode":0x2B},
    {"value":"+","keycode":0x2D}, {"value":"\u00B4","keycode":0x3D},{"value":"\u02C7","keycode":0x60},
    {"value":"\"","keycode":0x40},{"value":"*","keycode":0x7C}, {"value":"&","keycode":0x5E},{"value":"~","keycode":0x7E},
    {"value":"@","keycode":0x232}, {"value":"\u00A3","keycode":0x233},{"value":"$","keycode":0x234},{"value":"\u20AC","keycode":0x235},
    {"value":"{","keycode":0x237},{"value":"[","keycode":0x238},
    {"value":"]","keycode":0x239},{"value":"}","keycode":0x230},{"value":"\u20AC","keycode":0x365},{"value":"\u00A7","keycode":0x25D},
    {"value":"\u0161","keycode":0x373},{"value":"\u017E","keycode":0x37A},{"value":"\u00BD","keycode":0x25C}, {"value":"\\","keycode":0x22D},

];

var esthonian_specialhardkeyboard_values = [
    {"value":"\u00DC","keycode":0x5B},{"value":"\u00FC","keycode":0x7B},{"value":"\u00D5","keycode":0x5D}, {"value":"\u00F5","keycode":0x7D},
    {"value":"\u00F6","keycode":0x3A},{"value":"\u00D6","keycode":0x3B},{"value":"\u00E4","keycode":0x22}, {"value":"\u00C4","keycode":0x127},
];

var bulgarian_big_values=[
    {"inputid":"ime_keyboard_letters_\u00E9","value":"\u0406"},{"inputid":"ime_keyboard_letters_double_quotation","value":"V"},{"inputid":"ime_keyboard_letters_single_quotation","value":","},{"inputid":"ime_keyboard_letters_left_bracket","value":"."},
    {"inputid":"ime_keyboard_letters_midline","value":"\\"},{"inputid":"ime_keyboard_letters_\u00E8","value":"*"},{"inputid":"ime_keyboard_letters_baseline","value":"\""},{"inputid":"ime_keyboard_letters_\u00E7","value":"#"},
    {"inputid":"ime_keyboard_letters_\u00E0","value":"("},{"inputid":"ime_keyboard_letters_right_bracket","value":")"},{"inputid":"ime_keyboard_letters_A","value":"\u042B"},{"inputid":"ime_keyboard_letters_Z","value":"Y"},
    {"inputid":"ime_keyboard_letters_E","value":"\u0415"},{"inputid":"ime_keyboard_letters_R","value":"\u0418"},{"inputid":"ime_keyboard_letters_T","value":"\u0428"},{"inputid":"ime_keyboard_letters_Y","value":"\u0429"},
    {"inputid":"ime_keyboard_letters_U","value":"\u041A"},{"inputid":"ime_keyboard_letters_I","value":"\u0421"},{"inputid":"ime_keyboard_letters_O","value":"\u0414"},{"inputid":"ime_keyboard_letters_P","value":"\u0417"},
    {"inputid":"ime_keyboard_letters_^","value":"\u0426"},{"inputid":"ime_keyboard_letters_Q","value":"\u042C"},{"inputid":"ime_keyboard_letters_S","value":"\u042F"},{"inputid":"ime_keyboard_letters_D","value":"\u0410"},
    {"inputid":"ime_keyboard_letters_F","value":"\u041E"},{"inputid":"ime_keyboard_letters_G","value":"\u0416"},{"inputid":"ime_keyboard_letters_H","value":"\u0413"},{"inputid":"ime_keyboard_letters_J","value":"\u0422"},
    {"inputid":"ime_keyboard_letters_K","value":"\u041D"},{"inputid":"ime_keyboard_letters_L","value":"\u0412"},{"inputid":"ime_keyboard_letters_M","value":"\u041C"},{"inputid":"ime_keyboard_letters_\u00F9","value":"\u0427"},
    {"inputid":"ime_keyboard_letters_W","value":"\u042E"},{"inputid":"ime_keyboard_letters_X","value":"\u0419"},{"inputid":"ime_keyboard_letters_C","value":"\u042A"},{"inputid":"ime_keyboard_letters_V","value":"\u042D"},
    {"inputid":"ime_keyboard_letters_B","value":"\u0424"},{"inputid":"ime_keyboard_letters_N","value":"\u0425"},{"inputid":"ime_keyboard_letters_comma","value":"\u041F"},{"inputid":"ime_keyboard_letters_point","value":"\u0420"},
    {"inputid":"ime_keyboard_letters_semicolon","value":"\u041B"},{"inputid":"ime_keyboard_letters_colon","value":"\u0411"},{"inputid":"ime_keyboard_letters_at","value":"@"},{"inputid":"ime_keyboard_letters_language","value":"Bulgarian"}
];

var bulgarian_small_values=[
    {"inputid":"ime_keyboard_letters_\u00E9","value":"\u0456"},{"inputid":"ime_keyboard_letters_double_quotation","value":"v"},{"inputid":"ime_keyboard_letters_single_quotation","value":","},{"inputid":"ime_keyboard_letters_left_bracket","value":"."},
    {"inputid":"ime_keyboard_letters_midline","value":"\\"},{"inputid":"ime_keyboard_letters_\u00E8","value":"*"},{"inputid":"ime_keyboard_letters_baseline","value":"\""},{"inputid":"ime_keyboard_letters_\u00E7","value":"#"},
    {"inputid":"ime_keyboard_letters_\u00E0","value":"("},{"inputid":"ime_keyboard_letters_right_bracket","value":")"},{"inputid":"ime_keyboard_letters_A","value":"\u044B"},{"inputid":"ime_keyboard_letters_Z","value":"\u0443"},
    {"inputid":"ime_keyboard_letters_E","value":"\u0435"},{"inputid":"ime_keyboard_letters_R","value":"\u0438"},{"inputid":"ime_keyboard_letters_T","value":"\u0448"},{"inputid":"ime_keyboard_letters_Y","value":"\u0449"},
    {"inputid":"ime_keyboard_letters_U","value":"\u043A"},{"inputid":"ime_keyboard_letters_I","value":"\u0441"},{"inputid":"ime_keyboard_letters_O","value":"\u0434"},{"inputid":"ime_keyboard_letters_P","value":"\u0437"},
    {"inputid":"ime_keyboard_letters_^","value":"\u0446"},{"inputid":"ime_keyboard_letters_Q","value":"\u044C"},{"inputid":"ime_keyboard_letters_S","value":"\u044F"},{"inputid":"ime_keyboard_letters_D","value":"\u0430"},
    {"inputid":"ime_keyboard_letters_F","value":"\u043E"},{"inputid":"ime_keyboard_letters_G","value":"\u0436"},{"inputid":"ime_keyboard_letters_H","value":"\u0433"},{"inputid":"ime_keyboard_letters_J","value":"\u0442"},
    {"inputid":"ime_keyboard_letters_K","value":"\u043D"},{"inputid":"ime_keyboard_letters_L","value":"\u0432"},{"inputid":"ime_keyboard_letters_M","value":"\u043C"},{"inputid":"ime_keyboard_letters_\u00F9","value":"\u0447"},
    {"inputid":"ime_keyboard_letters_W","value":"\u044E"},{"inputid":"ime_keyboard_letters_X","value":"\u0439"},{"inputid":"ime_keyboard_letters_C","value":"\u044A"},{"inputid":"ime_keyboard_letters_V","value":"\u044D"},
    {"inputid":"ime_keyboard_letters_B","value":"\u0444"},{"inputid":"ime_keyboard_letters_N","value":"\u0445"},{"inputid":"ime_keyboard_letters_comma","value":"\u043F"},{"inputid":"ime_keyboard_letters_point","value":"\u0440"},
    {"inputid":"ime_keyboard_letters_semicolon","value":"\u043B"},{"inputid":"ime_keyboard_letters_colon","value":"\u0431"},{"inputid":"ime_keyboard_letters_at","value":"@"},{"inputid":"ime_keyboard_letters_language","value":"Bulgarian"}
];

var bulgarian_hardkeyboard_values = [
    {"value":",","keycode":0x171},{"value":"\u0443","keycode":0x177},
    {"value":"e","keycode":0x165},{"value":"\u0438","keycode":0x172},{"value":"\u0448","keycode":0x174},
    {"value":"\u0449","keycode":0x179},{"value":"\u043A","keycode":0x175},{"value":"\u0441","keycode":0x169},
    {"value":"\u0434","keycode":0x16F},{"value":"\u0437","keycode":0x170},{"value":"\u044C","keycode":0x161},
    {"value":"\u044F","keycode":0x173},{"value":"\u0430","keycode":0x164},{"value":"\u043E","keycode":0x166},
    {"value":"\u0436","keycode":0x167},{"value":"\u0433","keycode":0x168},{"value":"\u0442","keycode":0x16A},
    {"value":"\u043D","keycode":0x16B},{"value":"\u0432","keycode":0x16C},{"value":"!","keycode":0x21},
    {"value":"\u0431","keycode":0x2F},{"value":"\u044E","keycode":0x17A},
    {"value":"\u0439","keycode":0x178},{"value":"\u044A","keycode":0x163},{"value":"\u044D","keycode":0x176},
    {"value":"\u0444","keycode":0x162},{"value":"\u0445","keycode":0x16E},{"value":"\u043F","keycode":0x16D},
    {"value":"\u0440","keycode":0x2C},{"value":"\u043B","keycode":0x2E},{"value":"\u0411","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":"\u044B","keycode":0x51},{"value":"\u0423","keycode":0x57},
    {"value":"\u0415","keycode":0x45},{"value":"\u0418","keycode":0x52},{"value":"\u0428","keycode":0x54},
    {"value":"\u0429","keycode":0x59},{"value":"\u041A","keycode":0x55},{"value":"\u0421","keycode":0x49},
    {"value":"\u0414","keycode":0x4F},{"value":"\u0417","keycode":0x50},{"value":"\u042C","keycode":0x41},
    {"value":"\u042F","keycode":0x53},{"value":"\u0410","keycode":0x44},{"value":"\u041E","keycode":0x46},
    {"value":"\u0416","keycode":0x47},{"value":"\u0413","keycode":0x48},{"value":"\u0422","keycode":0x4A},
    {"value":"\u041D","keycode":0x4B},{"value":"\u0412","keycode":0x4C},{"value":"\u042E","keycode":0x5A},
    {"value":"\u0419","keycode":0x58},{"value":"\u042A","keycode":0x43},{"value":"\u042D","keycode":0x56},
    {"value":"\u0424","keycode":0x42},{"value":"\u0425","keycode":0x4E},{"value":"\u041F","keycode":0x4D},
    {"value":"1","keycode":0x31},{"value":"2","keycode":0x32},
    {"value":"3","keycode":0x33},{"value":"4","keycode":0x34},{"value":"5","keycode":0x35},
    {"value":"6","keycode":0x36},{"value":"7","keycode":0x37},{"value":"8","keycode":0x38},
    {"value":"9","keycode":0x39},{"value":"0","keycode":0x30},{"value":"(","keycode":0x5C},
    {"value":"+","keycode":0x23},{"value":"\"","keycode":0x24},{"value":"%","keycode":0x125},
    {"value":":","keycode":0x126},{"value":"/","keycode":0x2A},{"value":"_","keycode":0x128},
    {"value":"\u2116","keycode":0x29},{"value":"\u0406","keycode":0x5F},
    {"value":"\u041C","keycode":0x3A},{"value":"\u043C","keycode":0x3B},{"value":"\u0427","keycode":0x22},
    {"value":"\u0447","keycode":0x127},{"value":"\u0420","keycode":0x3C},{"value":"\u041B","keycode":0x3E},
    {"value":"\u0446","keycode":0x5B},{"value":";","keycode":0x5D},
    {"value":"\u0426","keycode":0x7B},{"value":"\u00A7","keycode":0x7D},{"value":"V","keycode":0x2B},
    {"value":"-","keycode":0x2D}, {"value":".","keycode":0x3D},{"value":"`","keycode":0x60},
    {"value":"?","keycode":0x40},{"value":")","keycode":0x7C}, {"value":"=","keycode":0x5E},{"value":"~","keycode":0x7E},
];

var bulgarian_specialhardkeyboard_values = [
    {"value":"\u044B","keycode":0x171},{"value":"\uFF0C","keycode":0x51},{"value":"\u0426","keycode":0x5B},{"value":"\u0446","keycode":0x7B},
    {"value":"\u043C","keycode":0x3A},{"value":"\u041C","keycode":0x3B},{"value":"\u0447","keycode":0x22}, {"value":"\u0427","keycode":0x127},
    {"value":"\u0420","keycode":0x2C},{"value":"\u0440","keycode":0x3C},{"value":"\u043B","keycode":0x3E},{"value":"\u041B","keycode":0x2E},
    {"value":"\u0411","keycode":0x2F},{"value":"\u0431","keycode":0x3F},
];

var danish_big_values = [{"inputid":"ime_keyboard_letters_Q","value":"Q"},{"inputid":"ime_keyboard_letters_W","value":"W"},
    {"inputid":"ime_keyboard_letters_E","value":"E"},{"inputid":"ime_keyboard_letters_R","value":"R"},{"inputid":"ime_keyboard_letters_T","value":"T"},
    {"inputid":"ime_keyboard_letters_Y","value":"Y"},{"inputid":"ime_keyboard_letters_U","value":"U"},{"inputid":"ime_keyboard_letters_I","value":"I"},
    {"inputid":"ime_keyboard_letters_O","value":"O"},{"inputid":"ime_keyboard_letters_P","value":"P"},{"inputid":"ime_keyboard_letters_A","value":"A"},
    {"inputid":"ime_keyboard_letters_S","value":"S"},{"inputid":"ime_keyboard_letters_D","value":"D"},{"inputid":"ime_keyboard_letters_F","value":"F"},
    {"inputid":"ime_keyboard_letters_G","value":"G"},{"inputid":"ime_keyboard_letters_H","value":"H"},{"inputid":"ime_keyboard_letters_J","value":"J"},
    {"inputid":"ime_keyboard_letters_K","value":"K"},{"inputid":"ime_keyboard_letters_L","value":"L"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u00C6"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u00D8"},{"inputid":"ime_keyboard_letters_shift","value":""},{"inputid":"ime_keyboard_letters_Z","value":"Z"},
    {"inputid":"ime_keyboard_letters_X","value":"X"},{"inputid":"ime_keyboard_letters_C","value":"C"},{"inputid":"ime_keyboard_letters_V","value":"V"},
    {"inputid":"ime_keyboard_letters_B","value":"B"},{"inputid":"ime_keyboard_letters_N","value":"N"},{"inputid":"ime_keyboard_letters_M","value":"M"},
    {"inputid":"ime_keyboard_letters_comma","value":","},{"inputid":"ime_keyboard_letters_point","value":"."},{"inputid":"ime_keyboard_letters_question","value":"\u00C5"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_language","value":"Danish"}
];

var danish_small_values = [{"inputid":"ime_keyboard_letters_Q","value":"q"},{"inputid":"ime_keyboard_letters_W","value":"w"},
    {"inputid":"ime_keyboard_letters_E","value":"e"},{"inputid":"ime_keyboard_letters_R","value":"r"},{"inputid":"ime_keyboard_letters_T","value":"t"},
    {"inputid":"ime_keyboard_letters_Y","value":"y"},{"inputid":"ime_keyboard_letters_U","value":"u"},{"inputid":"ime_keyboard_letters_I","value":"i"},
    {"inputid":"ime_keyboard_letters_O","value":"o"},{"inputid":"ime_keyboard_letters_P","value":"p"},{"inputid":"ime_keyboard_letters_A","value":"a"},
    {"inputid":"ime_keyboard_letters_S","value":"s"},{"inputid":"ime_keyboard_letters_D","value":"d"},{"inputid":"ime_keyboard_letters_F","value":"f"},
    {"inputid":"ime_keyboard_letters_G","value":"g"},{"inputid":"ime_keyboard_letters_H","value":"h"},{"inputid":"ime_keyboard_letters_J","value":"j"},
    {"inputid":"ime_keyboard_letters_K","value":"k"},{"inputid":"ime_keyboard_letters_L","value":"l"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u00E6"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u00F8"},{"inputid":"ime_keyboard_letters_shift","value":""},{"inputid":"ime_keyboard_letters_Z","value":"z"},
    {"inputid":"ime_keyboard_letters_X","value":"x"},{"inputid":"ime_keyboard_letters_C","value":"c"},{"inputid":"ime_keyboard_letters_V","value":"v"},
    {"inputid":"ime_keyboard_letters_B","value":"b"},{"inputid":"ime_keyboard_letters_N","value":"n"},{"inputid":"ime_keyboard_letters_M","value":"m"},
    {"inputid":"ime_keyboard_letters_comma","value":","},{"inputid":"ime_keyboard_letters_point","value":"."},{"inputid":"ime_keyboard_letters_question","value":"\u00E5"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_language","value":"Danish"}
];

var danish_hardkeyboard_values = [
    {"value":"q","keycode":0x171},{"value":"w","keycode":0x177},
    {"value":"e","keycode":0x165},{"value":"r","keycode":0x172},{"value":"t","keycode":0x174},
    {"value":"y","keycode":0x179},{"value":"u","keycode":0x175},{"value":"i","keycode":0x169},
    {"value":"o","keycode":0x16F},{"value":"p","keycode":0x170},{"value":"a","keycode":0x161},
    {"value":"s","keycode":0x173},{"value":"d","keycode":0x164},{"value":"f","keycode":0x166},
    {"value":"g","keycode":0x167},{"value":"h","keycode":0x168},{"value":"j","keycode":0x16A},
    {"value":"k","keycode":0x16B},{"value":"l","keycode":0x16C},{"value":"!","keycode":0x21},
    {"value":"-","keycode":0x2F},{"value":"z","keycode":0x17A},
    {"value":"x","keycode":0x178},{"value":"c","keycode":0x163},{"value":"v","keycode":0x176},
    {"value":"b","keycode":0x162},{"value":"n","keycode":0x16E},{"value":"m","keycode":0x16D},
    {"value":",","keycode":0x2C},{"value":".","keycode":0x2E},{"value":"_","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":"Q","keycode":0x51},{"value":"W","keycode":0x57},
    {"value":"E","keycode":0x45},{"value":"R","keycode":0x52},{"value":"T","keycode":0x54},
    {"value":"Y","keycode":0x59},{"value":"U","keycode":0x55},{"value":"I","keycode":0x49},
    {"value":"O","keycode":0x4F},{"value":"P","keycode":0x50},{"value":"A","keycode":0x41},
    {"value":"S","keycode":0x53},{"value":"D","keycode":0x44},{"value":"F","keycode":0x46},
    {"value":"G","keycode":0x47},{"value":"H","keycode":0x48},{"value":"J","keycode":0x4A},
    {"value":"K","keycode":0x4B},{"value":"L","keycode":0x4C},{"value":"Z","keycode":0x5A},
    {"value":"X","keycode":0x58},{"value":"C","keycode":0x43},{"value":"V","keycode":0x56},
    {"value":"B","keycode":0x42},{"value":"N","keycode":0x4E},{"value":"M","keycode":0x4D},
    {"value":"1","keycode":0x31},{"value":"2","keycode":0x32},
    {"value":"3","keycode":0x33},{"value":"4","keycode":0x34},{"value":"5","keycode":0x35},
    {"value":"6","keycode":0x36},{"value":"7","keycode":0x37},{"value":"8","keycode":0x38},
    {"value":"9","keycode":0x39},{"value":"0","keycode":0x30},{"value":"\'","keycode":0x5C},
    {"value":"#","keycode":0x23},{"value":"\u00A4","keycode":0x24},{"value":"%","keycode":0x125},
    {"value":"/","keycode":0x126},{"value":"(","keycode":0x2A},{"value":")","keycode":0x128},
    {"value":"=","keycode":0x29},{"value":"?","keycode":0x5F},
    {"value":"\u00C6","keycode":0x3A},{"value":"\u00E6","keycode":0x3B},{"value":"\u00D8","keycode":0x22},
    {"value":"\u00F8","keycode":0x127},{"value":";","keycode":0x3C},{"value":":","keycode":0x3E},
    {"value":"\u00E5","keycode":0x5B},{"value":"\u00A8","keycode":0x5D},
    {"value":"\u00C5","keycode":0x7B},{"value":"^","keycode":0x7D},{"value":"`","keycode":0x2B},
    {"value":"+","keycode":0x2D}, {"value":"\u00B4","keycode":0x3D},{"value":"\u00BD","keycode":0x60},
    {"value":"\"","keycode":0x40},{"value":"*","keycode":0x7C}, {"value":"&","keycode":0x5E},{"value":"\u00A7","keycode":0x7E},
    {"value":"@","keycode":0x232}, {"value":"\u00A3","keycode":0x233},{"value":"$","keycode":0x234},{"value":"\u20AC","keycode":0x235},
    {"value":"{","keycode":0x237},{"value":"[","keycode":0x238},
    {"value":"]","keycode":0x239},{"value":"}","keycode":0x230},{"value":"\u20AC","keycode":0x365},{"value":"~","keycode":0x25D},
    {"value":"|","keycode":0x23D},{"value":"\u00B5","keycode":0x36D},
];


var danish_specialhardkeyboard_values = [
    {"value":"\u00E6","keycode":0x3A},{"value":"\u00C6","keycode":0x3B},{"value":"\u00F8","keycode":0x22}, {"value":"\u00D8","keycode":0x127},
    {"value":"\u00C5","keycode":0x5B},{"value":"\u00E5","keycode":0x7B},
];

var finnish_big_values = [{"inputid":"ime_keyboard_letters_Q","value":"Q"},{"inputid":"ime_keyboard_letters_W","value":"W"},
    {"inputid":"ime_keyboard_letters_E","value":"E"},{"inputid":"ime_keyboard_letters_R","value":"R"},{"inputid":"ime_keyboard_letters_T","value":"T"},
    {"inputid":"ime_keyboard_letters_Y","value":"Y"},{"inputid":"ime_keyboard_letters_U","value":"U"},{"inputid":"ime_keyboard_letters_I","value":"I"},
    {"inputid":"ime_keyboard_letters_O","value":"O"},{"inputid":"ime_keyboard_letters_P","value":"P"},{"inputid":"ime_keyboard_letters_A","value":"A"},
    {"inputid":"ime_keyboard_letters_S","value":"S"},{"inputid":"ime_keyboard_letters_D","value":"D"},{"inputid":"ime_keyboard_letters_F","value":"F"},
    {"inputid":"ime_keyboard_letters_G","value":"G"},{"inputid":"ime_keyboard_letters_H","value":"H"},{"inputid":"ime_keyboard_letters_J","value":"J"},
    {"inputid":"ime_keyboard_letters_K","value":"K"},{"inputid":"ime_keyboard_letters_L","value":"L"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u00C5"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u00D6"},{"inputid":"ime_keyboard_letters_shift","value":""},{"inputid":"ime_keyboard_letters_Z","value":"Z"},
    {"inputid":"ime_keyboard_letters_X","value":"X"},{"inputid":"ime_keyboard_letters_C","value":"C"},{"inputid":"ime_keyboard_letters_V","value":"V"},
    {"inputid":"ime_keyboard_letters_B","value":"B"},{"inputid":"ime_keyboard_letters_N","value":"N"},{"inputid":"ime_keyboard_letters_M","value":"M"},
    {"inputid":"ime_keyboard_letters_comma","value":","},{"inputid":"ime_keyboard_letters_point","value":"."},{"inputid":"ime_keyboard_letters_question","value":"\u00C4"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_language","value":"Finnish"}
];

var finnish_small_values = [{"inputid":"ime_keyboard_letters_Q","value":"q"},{"inputid":"ime_keyboard_letters_W","value":"w"},
    {"inputid":"ime_keyboard_letters_E","value":"e"},{"inputid":"ime_keyboard_letters_R","value":"r"},{"inputid":"ime_keyboard_letters_T","value":"t"},
    {"inputid":"ime_keyboard_letters_Y","value":"y"},{"inputid":"ime_keyboard_letters_U","value":"u"},{"inputid":"ime_keyboard_letters_I","value":"i"},
    {"inputid":"ime_keyboard_letters_O","value":"o"},{"inputid":"ime_keyboard_letters_P","value":"p"},{"inputid":"ime_keyboard_letters_A","value":"a"},
    {"inputid":"ime_keyboard_letters_S","value":"s"},{"inputid":"ime_keyboard_letters_D","value":"d"},{"inputid":"ime_keyboard_letters_F","value":"f"},
    {"inputid":"ime_keyboard_letters_G","value":"g"},{"inputid":"ime_keyboard_letters_H","value":"h"},{"inputid":"ime_keyboard_letters_J","value":"j"},
    {"inputid":"ime_keyboard_letters_K","value":"k"},{"inputid":"ime_keyboard_letters_L","value":"l"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u00E5"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u00F6"},{"inputid":"ime_keyboard_letters_shift","value":""},{"inputid":"ime_keyboard_letters_Z","value":"z"},
    {"inputid":"ime_keyboard_letters_X","value":"x"},{"inputid":"ime_keyboard_letters_C","value":"c"},{"inputid":"ime_keyboard_letters_V","value":"v"},
    {"inputid":"ime_keyboard_letters_B","value":"b"},{"inputid":"ime_keyboard_letters_N","value":"n"},{"inputid":"ime_keyboard_letters_M","value":"m"},
    {"inputid":"ime_keyboard_letters_comma","value":","},{"inputid":"ime_keyboard_letters_point","value":"."},{"inputid":"ime_keyboard_letters_question","value":"\u00E4"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_language","value":"Finnish"}
];

var finnish_hardkeyboard_values = [
    {"value":"q","keycode":0x171},{"value":"w","keycode":0x177},
    {"value":"e","keycode":0x165},{"value":"r","keycode":0x172},{"value":"t","keycode":0x174},
    {"value":"y","keycode":0x179},{"value":"u","keycode":0x175},{"value":"i","keycode":0x169},
    {"value":"o","keycode":0x16F},{"value":"p","keycode":0x170},{"value":"a","keycode":0x161},
    {"value":"s","keycode":0x173},{"value":"d","keycode":0x164},{"value":"f","keycode":0x166},
    {"value":"g","keycode":0x167},{"value":"h","keycode":0x168},{"value":"j","keycode":0x16A},
    {"value":"k","keycode":0x16B},{"value":"l","keycode":0x16C},{"value":"!","keycode":0x21},
    {"value":"-","keycode":0x2F},{"value":"z","keycode":0x17A},
    {"value":"x","keycode":0x178},{"value":"c","keycode":0x163},{"value":"v","keycode":0x176},
    {"value":"b","keycode":0x162},{"value":"n","keycode":0x16E},{"value":"m","keycode":0x16D},
    {"value":",","keycode":0x2C},{"value":".","keycode":0x2E},{"value":"_","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":"Q","keycode":0x51},{"value":"W","keycode":0x57},
    {"value":"E","keycode":0x45},{"value":"R","keycode":0x52},{"value":"T","keycode":0x54},
    {"value":"Y","keycode":0x59},{"value":"U","keycode":0x55},{"value":"I","keycode":0x49},
    {"value":"O","keycode":0x4F},{"value":"P","keycode":0x50},{"value":"A","keycode":0x41},
    {"value":"S","keycode":0x53},{"value":"D","keycode":0x44},{"value":"F","keycode":0x46},
    {"value":"G","keycode":0x47},{"value":"H","keycode":0x48},{"value":"J","keycode":0x4A},
    {"value":"K","keycode":0x4B},{"value":"L","keycode":0x4C},{"value":"Z","keycode":0x5A},
    {"value":"X","keycode":0x58},{"value":"C","keycode":0x43},{"value":"V","keycode":0x56},
    {"value":"B","keycode":0x42},{"value":"N","keycode":0x4E},{"value":"M","keycode":0x4D},
    {"value":"1","keycode":0x31},{"value":"2","keycode":0x32},
    {"value":"3","keycode":0x33},{"value":"4","keycode":0x34},{"value":"5","keycode":0x35},
    {"value":"6","keycode":0x36},{"value":"7","keycode":0x37},{"value":"8","keycode":0x38},
    {"value":"9","keycode":0x39},{"value":"0","keycode":0x30},{"value":"\'","keycode":0x5C},
    {"value":"#","keycode":0x23},{"value":"\u00A4","keycode":0x24},{"value":"%","keycode":0x125},
    {"value":"/","keycode":0x126},{"value":"(","keycode":0x2A},{"value":")","keycode":0x128},
    {"value":"=","keycode":0x29},{"value":"?","keycode":0x5F},
    {"value":"\u00D6","keycode":0x3A},{"value":"\u00F6","keycode":0x3B},{"value":"\u00C4","keycode":0x22},
    {"value":"\u00E4","keycode":0x127},{"value":";","keycode":0x3C},{"value":":","keycode":0x3E},
    {"value":"\u00E5","keycode":0x5B},{"value":"\u00A8","keycode":0x5D},
    {"value":"\u00C5","keycode":0x7B},{"value":"^","keycode":0x7D},{"value":"`","keycode":0x2B},
    {"value":"+","keycode":0x2D}, {"value":"\u00B4","keycode":0x3D},{"value":"\u00A7","keycode":0x60},
    {"value":"\"","keycode":0x40},{"value":"*","keycode":0x7C}, {"value":"&","keycode":0x5E},{"value":"\u00BD","keycode":0x7E},
    {"value":"@","keycode":0x232}, {"value":"\u00A3","keycode":0x233},{"value":"$","keycode":0x234},{"value":"\u20AC","keycode":0x235},
    {"value":"{","keycode":0x237},{"value":"[","keycode":0x238},
    {"value":"]","keycode":0x239},{"value":"}","keycode":0x230},{"value":"\u20AC","keycode":0x365},{"value":"\\","keycode":0x22D},
    {"value":"\u00E2","keycode":0x371},{"value":"\u0167","keycode":0x374},{"value":"\u00EF","keycode":0x369},
    {"value":"\u00F5","keycode":0x36F},{"value":"~","keycode":0x25D},{"value":"\u00E1","keycode":0x361},
    {"value":"\u0161","keycode":0x373},{"value":"\u0111","keycode":0x364},{"value":"\u01E5","keycode":0x366},
    {"value":"\u01E7","keycode":0x367},{"value":"\u021F","keycode":0x368},{"value":"\u01E9","keycode":0x36B},{"value":"\u00F8","keycode":0x23B},
    {"value":"\u00E6","keycode":0x327},{"value":"\u017E","keycode":0x37A},
    {"value":"\u010D","keycode":0x363},{"value":"\u01EF" ,"keycode":0x376},
    {"value":"\u0292","keycode":0x362},{"value":"\u014B","keycode":0x36E},{"value":"\u00B5","keycode":0x36D},
];

var finnish_specialhardkeyboard_values = [
    {"value":"\u00C5","keycode":0x5B}, {"value":"\u00E5","keycode":0x7B},{"value":"\u00F6","keycode":0x3A},{"value":"\u00D6","keycode":0x3B},
    {"value":"\u00E4","keycode":0x22}, {"value":"\u00C4","keycode":0x127},
];

var dutch_big_values = [{"inputid":"ime_keyboard_letters_Q","value":"Q"},{"inputid":"ime_keyboard_letters_W","value":"W"},
    {"inputid":"ime_keyboard_letters_E","value":"E"},{"inputid":"ime_keyboard_letters_R","value":"R"},{"inputid":"ime_keyboard_letters_T","value":"T"},
    {"inputid":"ime_keyboard_letters_Y","value":"Y"},{"inputid":"ime_keyboard_letters_U","value":"U"},{"inputid":"ime_keyboard_letters_I","value":"I"},
    {"inputid":"ime_keyboard_letters_O","value":"O"},{"inputid":"ime_keyboard_letters_P","value":"P"},{"inputid":"ime_keyboard_letters_A","value":"A"},
    {"inputid":"ime_keyboard_letters_S","value":"S"},{"inputid":"ime_keyboard_letters_D","value":"D"},{"inputid":"ime_keyboard_letters_F","value":"F"},
    {"inputid":"ime_keyboard_letters_G","value":"G"},{"inputid":"ime_keyboard_letters_H","value":"H"},{"inputid":"ime_keyboard_letters_J","value":"J"},
    {"inputid":"ime_keyboard_letters_K","value":"K"},{"inputid":"ime_keyboard_letters_L","value":"L"},{"inputid":"ime_keyboard_letters_exclamation","value":"!"},
    {"inputid":"ime_keyboard_letters_slash","value":"/"},{"inputid":"ime_keyboard_letters_shift","value":""},{"inputid":"ime_keyboard_letters_Z","value":"Z"},
    {"inputid":"ime_keyboard_letters_X","value":"X"},{"inputid":"ime_keyboard_letters_C","value":"C"},{"inputid":"ime_keyboard_letters_V","value":"V"},
    {"inputid":"ime_keyboard_letters_B","value":"B"},{"inputid":"ime_keyboard_letters_N","value":"N"},{"inputid":"ime_keyboard_letters_M","value":"M"},
    {"inputid":"ime_keyboard_letters_comma","value":","},{"inputid":"ime_keyboard_letters_point","value":"."},{"inputid":"ime_keyboard_letters_question","value":"?"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_language","value":"Dutch"}
];

var dutch_small_values = [{"inputid":"ime_keyboard_letters_Q","value":"q"},{"inputid":"ime_keyboard_letters_W","value":"w"},
    {"inputid":"ime_keyboard_letters_E","value":"e"},{"inputid":"ime_keyboard_letters_R","value":"r"},{"inputid":"ime_keyboard_letters_T","value":"t"},
    {"inputid":"ime_keyboard_letters_Y","value":"y"},{"inputid":"ime_keyboard_letters_U","value":"u"},{"inputid":"ime_keyboard_letters_I","value":"i"},
    {"inputid":"ime_keyboard_letters_O","value":"o"},{"inputid":"ime_keyboard_letters_P","value":"p"},{"inputid":"ime_keyboard_letters_A","value":"a"},
    {"inputid":"ime_keyboard_letters_S","value":"s"},{"inputid":"ime_keyboard_letters_D","value":"d"},{"inputid":"ime_keyboard_letters_F","value":"f"},
    {"inputid":"ime_keyboard_letters_G","value":"g"},{"inputid":"ime_keyboard_letters_H","value":"h"},{"inputid":"ime_keyboard_letters_J","value":"j"},
    {"inputid":"ime_keyboard_letters_K","value":"k"},{"inputid":"ime_keyboard_letters_L","value":"l"},{"inputid":"ime_keyboard_letters_exclamation","value":"!"},
    {"inputid":"ime_keyboard_letters_slash","value":"/"},{"inputid":"ime_keyboard_letters_shift","value":""},{"inputid":"ime_keyboard_letters_Z","value":"z"},
    {"inputid":"ime_keyboard_letters_X","value":"x"},{"inputid":"ime_keyboard_letters_C","value":"c"},{"inputid":"ime_keyboard_letters_V","value":"v"},
    {"inputid":"ime_keyboard_letters_B","value":"b"},{"inputid":"ime_keyboard_letters_N","value":"n"},{"inputid":"ime_keyboard_letters_M","value":"m"},
    {"inputid":"ime_keyboard_letters_comma","value":","},{"inputid":"ime_keyboard_letters_point","value":"."},{"inputid":"ime_keyboard_letters_question","value":"?"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_language","value":"Dutch"}
];

var dutch_hardkeyboard_values = [
    {"value":"q","keycode":0x171},{"value":"w","keycode":0x177},
    {"value":"e","keycode":0x165},{"value":"r","keycode":0x172},{"value":"t","keycode":0x174},
    {"value":"y","keycode":0x179},{"value":"u","keycode":0x175},{"value":"i","keycode":0x169},
    {"value":"o","keycode":0x16F},{"value":"p","keycode":0x170},{"value":"a","keycode":0x161},
    {"value":"s","keycode":0x173},{"value":"d","keycode":0x164},{"value":"f","keycode":0x166},
    {"value":"g","keycode":0x167},{"value":"h","keycode":0x168},{"value":"j","keycode":0x16A},
    {"value":"k","keycode":0x16B},{"value":"l","keycode":0x16C},{"value":"!","keycode":0x21},
    {"value":"-","keycode":0x2F},{"value":"z","keycode":0x17A},
    {"value":"x","keycode":0x178},{"value":"c","keycode":0x163},{"value":"v","keycode":0x176},
    {"value":"b","keycode":0x162},{"value":"n","keycode":0x16E},{"value":"m","keycode":0x16D},
    {"value":",","keycode":0x2C},{"value":".","keycode":0x2E},{"value":"=","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":"Q","keycode":0x51},{"value":"W","keycode":0x57},
    {"value":"E","keycode":0x45},{"value":"R","keycode":0x52},{"value":"T","keycode":0x54},
    {"value":"Y","keycode":0x59},{"value":"U","keycode":0x55},{"value":"I","keycode":0x49},
    {"value":"O","keycode":0x4F},{"value":"P","keycode":0x50},{"value":"A","keycode":0x41},
    {"value":"S","keycode":0x53},{"value":"D","keycode":0x44},{"value":"F","keycode":0x46},
    {"value":"G","keycode":0x47},{"value":"H","keycode":0x48},{"value":"J","keycode":0x4A},
    {"value":"K","keycode":0x4B},{"value":"L","keycode":0x4C},{"value":"Z","keycode":0x5A},
    {"value":"X","keycode":0x58},{"value":"C","keycode":0x43},{"value":"V","keycode":0x56},
    {"value":"B","keycode":0x42},{"value":"N","keycode":0x4E},{"value":"M","keycode":0x4D},
    {"value":"1","keycode":0x31},{"value":"2","keycode":0x32},
    {"value":"3","keycode":0x33},{"value":"4","keycode":0x34},{"value":"5","keycode":0x35},
    {"value":"6","keycode":0x36},{"value":"7","keycode":0x37},{"value":"8","keycode":0x38},
    {"value":"9","keycode":0x39},{"value":"0","keycode":0x30},{"value":"<","keycode":0x5C},
    {"value":"#","keycode":0x23},{"value":"$","keycode":0x24},{"value":"%","keycode":0x125},
    {"value":"_","keycode":0x126},{"value":"(","keycode":0x2A},{"value":")","keycode":0x128},
    {"value":"\'","keycode":0x29},{"value":"?","keycode":0x5F},
    {"value":"\u00B1","keycode":0x3A},{"value":"+","keycode":0x3B},{"value":"`","keycode":0x22},
    {"value":"\u00B4","keycode":0x127},{"value":";","keycode":0x3C},{"value":":","keycode":0x3E},
    {"value":"\u00A8","keycode":0x5B},{"value":"*","keycode":0x5D},
    {"value":"^","keycode":0x7B},{"value":"|","keycode":0x7D},{"value":"~","keycode":0x2B},
    {"value":"/","keycode":0x2D}, {"value":"\u00B0","keycode":0x3D},{"value":"@","keycode":0x60},
    {"value":"\"","keycode":0x40},{"value":">","keycode":0x7C}, {"value":"&","keycode":0x5E},{"value":"\u00A7","keycode":0x7E},

    {"value":"\u00B9","keycode":0x231},{"value":"\u00B2","keycode":0x232},
    {"value":"\u00B3","keycode":0x233},{"value":"\u00BC","keycode":0x234},{"value":"\u00BD","keycode":0x235},
    {"value":"\u00BE","keycode":0x236},{"value":"\u00A3","keycode":0x237},{"value":"{","keycode":0x238},
    {"value":"}","keycode":0x239},
    {"value":"\u20AC","keycode":0x365},{"value":"\u00B6","keycode":0x372},
    {"value":"\u00DF","keycode":0x373},{"value":"\u00AB","keycode":0x37A},
    {"value":"\u00BB","keycode":0x378},{"value":"\u00A2","keycode":0x363},{"value":"\u00B5","keycode":0x36D},
    {"value":".","keycode":0x22E},{"value":"\\","keycode":0x22D}, {"value":"\u00B8","keycode":0x23D},
    {"value":"\u00AC","keycode":0x260},
];

var czech_big_values=[
    {"inputid":"ime_keyboard_letters_\u00E9","value":"\u011A"},{"inputid":"ime_keyboard_letters_double_quotation","value":"\u0160"},{"inputid":"ime_keyboard_letters_single_quotation","value":"\u010C"},{"inputid":"ime_keyboard_letters_left_bracket","value":"\u0158"},
    {"inputid":"ime_keyboard_letters_midline","value":"\u017D"},{"inputid":"ime_keyboard_letters_\u00E8","value":"\u00DD"},{"inputid":"ime_keyboard_letters_baseline","value":"\u00C1"},{"inputid":"ime_keyboard_letters_\u00E7","value":"\u00CD"},
    {"inputid":"ime_keyboard_letters_\u00E0","value":"\u00C9"},{"inputid":"ime_keyboard_letters_right_bracket","value":"/"},{"inputid":"ime_keyboard_letters_A","value":"Q"},{"inputid":"ime_keyboard_letters_Z","value":"W"},
    {"inputid":"ime_keyboard_letters_E","value":"E"},{"inputid":"ime_keyboard_letters_R","value":"R"},{"inputid":"ime_keyboard_letters_T","value":"T"},{"inputid":"ime_keyboard_letters_Y","value":"Z"},
    {"inputid":"ime_keyboard_letters_U","value":"U"},{"inputid":"ime_keyboard_letters_I","value":"I"},{"inputid":"ime_keyboard_letters_O","value":"O"},{"inputid":"ime_keyboard_letters_P","value":"P"},
    {"inputid":"ime_keyboard_letters_^","value":"\u00DA"},{"inputid":"ime_keyboard_letters_Q","value":"A"},{"inputid":"ime_keyboard_letters_S","value":"S"},{"inputid":"ime_keyboard_letters_D","value":"D"},
    {"inputid":"ime_keyboard_letters_F","value":"F"},{"inputid":"ime_keyboard_letters_G","value":"G"},{"inputid":"ime_keyboard_letters_H","value":"H"},{"inputid":"ime_keyboard_letters_J","value":"J"},
    {"inputid":"ime_keyboard_letters_K","value":"K"},{"inputid":"ime_keyboard_letters_L","value":"L"},{"inputid":"ime_keyboard_letters_M","value":"\u016E"},{"inputid":"ime_keyboard_letters_\u00F9","value":"!"},
    {"inputid":"ime_keyboard_letters_W","value":"Y"},{"inputid":"ime_keyboard_letters_X","value":"X"},{"inputid":"ime_keyboard_letters_C","value":"C"},{"inputid":"ime_keyboard_letters_V","value":"V"},
    {"inputid":"ime_keyboard_letters_B","value":"B"},{"inputid":"ime_keyboard_letters_N","value":"N"},{"inputid":"ime_keyboard_letters_comma","value":"M"},{"inputid":"ime_keyboard_letters_point","value":","},
    {"inputid":"ime_keyboard_letters_semicolon","value":"."},{"inputid":"ime_keyboard_letters_colon","value":"?"},{"inputid":"ime_keyboard_letters_at","value":"@"},{"inputid":"ime_keyboard_letters_language","value":"Czech"}
];

var czech_small_values=[
    {"inputid":"ime_keyboard_letters_\u00E9","value":"\u011B"},{"inputid":"ime_keyboard_letters_double_quotation","value":"\u0161"},{"inputid":"ime_keyboard_letters_single_quotation","value":"\u010D"},{"inputid":"ime_keyboard_letters_left_bracket","value":"\u0159"},
    {"inputid":"ime_keyboard_letters_midline","value":"\u017E"},{"inputid":"ime_keyboard_letters_\u00E8","value":"\u00FD"},{"inputid":"ime_keyboard_letters_baseline","value":"\u00E1"},{"inputid":"ime_keyboard_letters_\u00E7","value":"\u00ED"},
    {"inputid":"ime_keyboard_letters_\u00E0","value":"\u00E9"},{"inputid":"ime_keyboard_letters_right_bracket","value":"/"},{"inputid":"ime_keyboard_letters_A","value":"q"},{"inputid":"ime_keyboard_letters_Z","value":"w"},
    {"inputid":"ime_keyboard_letters_E","value":"e"},{"inputid":"ime_keyboard_letters_R","value":"r"},{"inputid":"ime_keyboard_letters_T","value":"t"},{"inputid":"ime_keyboard_letters_Y","value":"z"},
    {"inputid":"ime_keyboard_letters_U","value":"u"},{"inputid":"ime_keyboard_letters_I","value":"i"},{"inputid":"ime_keyboard_letters_O","value":"o"},{"inputid":"ime_keyboard_letters_P","value":"p"},
    {"inputid":"ime_keyboard_letters_^","value":"\u00FA"},{"inputid":"ime_keyboard_letters_Q","value":"a"},{"inputid":"ime_keyboard_letters_S","value":"s"},{"inputid":"ime_keyboard_letters_D","value":"d"},
    {"inputid":"ime_keyboard_letters_F","value":"f"},{"inputid":"ime_keyboard_letters_G","value":"g"},{"inputid":"ime_keyboard_letters_H","value":"h"},{"inputid":"ime_keyboard_letters_J","value":"j"},
    {"inputid":"ime_keyboard_letters_K","value":"k"},{"inputid":"ime_keyboard_letters_L","value":"l"},{"inputid":"ime_keyboard_letters_M","value":"\u016F"},{"inputid":"ime_keyboard_letters_\u00F9","value":"!"},
    {"inputid":"ime_keyboard_letters_W","value":"y"},{"inputid":"ime_keyboard_letters_X","value":"x"},{"inputid":"ime_keyboard_letters_C","value":"c"},{"inputid":"ime_keyboard_letters_V","value":"v"},
    {"inputid":"ime_keyboard_letters_B","value":"b"},{"inputid":"ime_keyboard_letters_N","value":"n"},{"inputid":"ime_keyboard_letters_comma","value":"m"},{"inputid":"ime_keyboard_letters_point","value":","},
    {"inputid":"ime_keyboard_letters_semicolon","value":"."},{"inputid":"ime_keyboard_letters_colon","value":"?"},{"inputid":"ime_keyboard_letters_at","value":"@"},{"inputid":"ime_keyboard_letters_language","value":"Czech"}
];

var czech_hardkeyboard_values = [
    {"value":"q","keycode":0x171},{"value":"w","keycode":0x177},
    {"value":"e","keycode":0x165},{"value":"r","keycode":0x172},{"value":"t","keycode":0x174},
    {"value":"z","keycode":0x179},{"value":"u","keycode":0x175},{"value":"i","keycode":0x169},
    {"value":"o","keycode":0x16F},{"value":"p","keycode":0x170},{"value":"a","keycode":0x161},
    {"value":"s","keycode":0x173},{"value":"d","keycode":0x164},{"value":"f","keycode":0x166},
    {"value":"g","keycode":0x167},{"value":"h","keycode":0x168},{"value":"j","keycode":0x16A},
    {"value":"k","keycode":0x16B},{"value":"l","keycode":0x16C},{"value":"1","keycode":0x21},
    {"value":"-","keycode":0x2F},{"value":"y","keycode":0x17A},
    {"value":"x","keycode":0x178},{"value":"c","keycode":0x163},{"value":"v","keycode":0x176},
    {"value":"b","keycode":0x162},{"value":"n","keycode":0x16E},{"value":"m","keycode":0x16D},
    {"value":",","keycode":0x2C},{"value":".","keycode":0x2E},{"value":"_","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":"Q","keycode":0x51},{"value":"W","keycode":0x57},
    {"value":"E","keycode":0x45},{"value":"R","keycode":0x52},{"value":"T","keycode":0x54},
    {"value":"Z","keycode":0x59},{"value":"U","keycode":0x55},{"value":"I","keycode":0x49},
    {"value":"O","keycode":0x4F},{"value":"P","keycode":0x50},{"value":"A","keycode":0x41},
    {"value":"S","keycode":0x53},{"value":"D","keycode":0x44},{"value":"F","keycode":0x46},
    {"value":"G","keycode":0x47},{"value":"H","keycode":0x48},{"value":"J","keycode":0x4A},
    {"value":"K","keycode":0x4B},{"value":"L","keycode":0x4C},{"value":"Y","keycode":0x5A},
    {"value":"X","keycode":0x58},{"value":"C","keycode":0x43},{"value":"V","keycode":0x56},
    {"value":"B","keycode":0x42},{"value":"N","keycode":0x4E},{"value":"M","keycode":0x4D},
    {"value":"+","keycode":0x31},{"value":"\u011B","keycode":0x32},
    {"value":"\u0161","keycode":0x33},{"value":"\u010D","keycode":0x34},{"value":"\u0159","keycode":0x35},
    {"value":"\u017E","keycode":0x36},{"value":"\u00FD","keycode":0x37},{"value":"\u00E1","keycode":0x38},
    {"value":"\u00ED","keycode":0x39},{"value":"\u00E9","keycode":0x30},{"value":"\u00A8","keycode":0x5C},
    {"value":"3","keycode":0x23},{"value":"4","keycode":0x24},{"value":"5","keycode":0x125},
    {"value":"7","keycode":0x126},{"value":"8","keycode":0x2A},{"value":"9","keycode":0x128},
    {"value":"0","keycode":0x29},{"value":"%","keycode":0x5F},
    {"value":"\"","keycode":0x3A},{"value":"\u016F","keycode":0x3B},{"value":"!","keycode":0x22},
    {"value":"\u00A7","keycode":0x127},{"value":"?","keycode":0x3C},{"value":":","keycode":0x3E},
    {"value":"\u00FA","keycode":0x5B},{"value":")","keycode":0x5D},
    {"value":"/","keycode":0x7B},{"value":"(","keycode":0x7D},{"value":"\u02C7","keycode":0x2B},
    {"value":"=","keycode":0x2D}, {"value":"\u00B4","keycode":0x3D},{"value":";","keycode":0x60},
    {"value":"2","keycode":0x40},{"value":"\u2018","keycode":0x7C}, {"value":"6","keycode":0x5E},{"value":"\u00B0","keycode":0x7E},

    {"value":"\\","keycode":0x371},{"value":"|","keycode":0x377},
    {"value":"\u20AC","keycode":0x365},
    {"value":"\u0111","keycode":0x373},{"value":"\u0110","keycode":0x364},{"value":"[","keycode":0x366},
    {"value":"]","keycode":0x367},
    {"value":"\u0142","keycode":0x36B},{"value":"\u0141","keycode":0x36C},
    {"value":"*","keycode":0x22F},
    {"value":"#","keycode":0x378},{"value":"&","keycode":0x363},{"value":"@","keycode":0x376},
    {"value":"{","keycode":0x362},{"value":"}","keycode":0x36E},
    {"value":"~","keycode":0x231},{"value":"\u02C7","keycode":0x232},
    {"value":"^","keycode":0x233},{"value":"\u02D8","keycode":0x234},{"value":"\u00B0","keycode":0x235},
    {"value":"\u02DB","keycode":0x236},{"value":"`","keycode":0x237},{"value":"\u02D9","keycode":0x238},
    {"value":"\u00B4","keycode":0x239},{"value":"\"","keycode":0x230},
    {"value":"\u00F7","keycode":0x25B},{"value":"\u00D7","keycode":0x25D},
    {"value":"\u00A8","keycode":0x22D}, {"value":"\u00B8","keycode":0x23D},{"value":"\u00A4","keycode":0x25C},
    {"value":"$","keycode":0x23B}, {"value":"\u00DF","keycode":0x327},
    {"value":"<","keycode":0x22C},{"value":">","keycode":0x22E},

];

var czech_specialhardkeyboard_values = [
    {"value":"\u011A","keycode":0x32},{"value":"\u0160","keycode":0x33},{"value":"\u010C","keycode":0x34},{"value":"\u0158","keycode":0x35},
    {"value":"\u017D","keycode":0x36},{"value":"\u00DD","keycode":0x37},{"value":"\u00C1","keycode":0x38},
    {"value":"\u00CD","keycode":0x39},{"value":"\u00C9","keycode":0x30},{"value":"\u00DA","keycode":0x5B},{"value":"\u016E","keycode":0x3B},
];

var croatian_big_values=[{"inputid":"ime_keyboard_letters_Q","value":"Q"},{"inputid":"ime_keyboard_letters_W","value":"W"},
    {"inputid":"ime_keyboard_letters_E","value":"E"},{"inputid":"ime_keyboard_letters_R","value":"R"},{"inputid":"ime_keyboard_letters_T","value":"T"},
    {"inputid":"ime_keyboard_letters_Y","value":"Z"},{"inputid":"ime_keyboard_letters_U","value":"U"},{"inputid":"ime_keyboard_letters_I","value":"I"},
    {"inputid":"ime_keyboard_letters_O","value":"O"},{"inputid":"ime_keyboard_letters_P","value":"P"},{"inputid":"ime_keyboard_letters_A","value":"A"},
    {"inputid":"ime_keyboard_letters_S","value":"S"},{"inputid":"ime_keyboard_letters_D","value":"D"},{"inputid":"ime_keyboard_letters_F","value":"F"},
    {"inputid":"ime_keyboard_letters_G","value":"G"},{"inputid":"ime_keyboard_letters_H","value":"H"},{"inputid":"ime_keyboard_letters_J","value":"J"},
    {"inputid":"ime_keyboard_letters_K","value":"K"},{"inputid":"ime_keyboard_letters_L","value":"L"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u0160"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u0110"},{"inputid":"ime_keyboard_letters_Z","value":"Y"},
    {"inputid":"ime_keyboard_letters_X","value":"X"},{"inputid":"ime_keyboard_letters_C","value":"C"},{"inputid":"ime_keyboard_letters_V","value":"V"},
    {"inputid":"ime_keyboard_letters_B","value":"B"},{"inputid":"ime_keyboard_letters_N","value":"N"},{"inputid":"ime_keyboard_letters_M","value":"M"},
    {"inputid":"ime_keyboard_letters_comma","value":"\u017D"},{"inputid":"ime_keyboard_letters_point","value":"\u010C"},{"inputid":"ime_keyboard_letters_question","value":"\u0106"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_1","value":"\\"},{"inputid":"ime_keyboard_letters_2","value":"@"},
    {"inputid":"ime_keyboard_letters_3","value":","},{"inputid":"ime_keyboard_letters_at","value":"."},{"inputid":"ime_keyboard_letters_language","value":"Croatian"}
];

var croatian_small_values=[{"inputid":"ime_keyboard_letters_Q","value":"q"},{"inputid":"ime_keyboard_letters_W","value":"w"},
    {"inputid":"ime_keyboard_letters_E","value":"e"},{"inputid":"ime_keyboard_letters_R","value":"r"},{"inputid":"ime_keyboard_letters_T","value":"t"},
    {"inputid":"ime_keyboard_letters_Y","value":"z"},{"inputid":"ime_keyboard_letters_U","value":"u"},{"inputid":"ime_keyboard_letters_I","value":"i"},
    {"inputid":"ime_keyboard_letters_O","value":"o"},{"inputid":"ime_keyboard_letters_P","value":"p"},{"inputid":"ime_keyboard_letters_A","value":"a"},
    {"inputid":"ime_keyboard_letters_S","value":"s"},{"inputid":"ime_keyboard_letters_D","value":"d"},{"inputid":"ime_keyboard_letters_F","value":"f"},
    {"inputid":"ime_keyboard_letters_G","value":"g"},{"inputid":"ime_keyboard_letters_H","value":"h"},{"inputid":"ime_keyboard_letters_J","value":"j"},
    {"inputid":"ime_keyboard_letters_K","value":"k"},{"inputid":"ime_keyboard_letters_L","value":"l"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u0161"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u0111"},{"inputid":"ime_keyboard_letters_Z","value":"y"},
    {"inputid":"ime_keyboard_letters_X","value":"x"},{"inputid":"ime_keyboard_letters_C","value":"c"},{"inputid":"ime_keyboard_letters_V","value":"v"},
    {"inputid":"ime_keyboard_letters_B","value":"b"},{"inputid":"ime_keyboard_letters_N","value":"n"},{"inputid":"ime_keyboard_letters_M","value":"m"},
    {"inputid":"ime_keyboard_letters_comma","value":"\u017E"},{"inputid":"ime_keyboard_letters_point","value":"\u010D"},{"inputid":"ime_keyboard_letters_question","value":"\u0107"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_1","value":"\\"},{"inputid":"ime_keyboard_letters_2","value":"@"},
    {"inputid":"ime_keyboard_letters_3","value":","},{"inputid":"ime_keyboard_letters_at","value":"."},{"inputid":"ime_keyboard_letters_language","value":"Croatian"}
];

var croatian_hardkeyboard_values = [
    {"value":"q","keycode":0x171},{"value":"w","keycode":0x177},
    {"value":"e","keycode":0x165},{"value":"r","keycode":0x172},{"value":"t","keycode":0x174},
    {"value":"z","keycode":0x179},{"value":"u","keycode":0x175},{"value":"i","keycode":0x169},
    {"value":"o","keycode":0x16F},{"value":"p","keycode":0x170},{"value":"a","keycode":0x161},
    {"value":"s","keycode":0x173},{"value":"d","keycode":0x164},{"value":"f","keycode":0x166},
    {"value":"g","keycode":0x167},{"value":"h","keycode":0x168},{"value":"j","keycode":0x16A},
    {"value":"k","keycode":0x16B},{"value":"l","keycode":0x16C},{"value":"!","keycode":0x21},
    {"value":"-","keycode":0x2F},{"value":"y","keycode":0x17A},
    {"value":"x","keycode":0x178},{"value":"c","keycode":0x163},{"value":"v","keycode":0x176},
    {"value":"b","keycode":0x162},{"value":"n","keycode":0x16E},{"value":"m","keycode":0x16D},
    {"value":",","keycode":0x2C},{"value":".","keycode":0x2E},{"value":"_","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":"Q","keycode":0x51},{"value":"W","keycode":0x57},
    {"value":"E","keycode":0x45},{"value":"R","keycode":0x52},{"value":"T","keycode":0x54},
    {"value":"Z","keycode":0x59},{"value":"U","keycode":0x55},{"value":"I","keycode":0x49},
    {"value":"O","keycode":0x4F},{"value":"P","keycode":0x50},{"value":"A","keycode":0x41},
    {"value":"S","keycode":0x53},{"value":"D","keycode":0x44},{"value":"F","keycode":0x46},
    {"value":"G","keycode":0x47},{"value":"H","keycode":0x48},{"value":"J","keycode":0x4A},
    {"value":"K","keycode":0x4B},{"value":"L","keycode":0x4C},{"value":"Y","keycode":0x5A},
    {"value":"X","keycode":0x58},{"value":"C","keycode":0x43},{"value":"V","keycode":0x56},
    {"value":"B","keycode":0x42},{"value":"N","keycode":0x4E},{"value":"M","keycode":0x4D},
    {"value":"1","keycode":0x31},{"value":"2","keycode":0x32},
    {"value":"3","keycode":0x33},{"value":"4","keycode":0x34},{"value":"5","keycode":0x35},
    {"value":"6","keycode":0x36},{"value":"7","keycode":0x37},{"value":"8","keycode":0x38},
    {"value":"9","keycode":0x39},{"value":"0","keycode":0x30},{"value":"\u017E","keycode":0x5C},
    {"value":"#","keycode":0x23},{"value":"$","keycode":0x24},{"value":"%","keycode":0x125},
    {"value":"/","keycode":0x126},{"value":"(","keycode":0x2A},{"value":")","keycode":0x128},
    {"value":"=","keycode":0x29},{"value":"?","keycode":0x5F},
    {"value":"\u010C","keycode":0x3A},{"value":"\u010D","keycode":0x3B},{"value":"\u0106","keycode":0x22},
    {"value":"\u0107","keycode":0x127},{"value":";","keycode":0x3C},{"value":":","keycode":0x3E},
    {"value":"\u0161","keycode":0x5B},{"value":"\u0111","keycode":0x5D},
    {"value":"\u0160","keycode":0x7B},{"value":"\u0110","keycode":0x7D},{"value":"*","keycode":0x2B},
    {"value":"\'","keycode":0x2D}, {"value":"+","keycode":0x3D},{"value":"\u00B8","keycode":0x60},
    {"value":"\"","keycode":0x40},{"value":"\u017D","keycode":0x7C}, {"value":"&","keycode":0x5E},{"value":"\u00A8","keycode":0x7E},
    {"value":"~","keycode":0x231},{"value":"\u02C7","keycode":0x232},
    {"value":"^","keycode":0x233},{"value":"\u02D8","keycode":0x234},{"value":"\u00B0","keycode":0x235},
    {"value":"\u02DB","keycode":0x236},{"value":"`","keycode":0x237},{"value":"\u02D9","keycode":0x238},
    {"value":"\u00B4","keycode":0x239},{"value":"\u02DD","keycode":0x230},{"value":"\u00A8","keycode":0x22D},
    {"value":"\u00B8","keycode":0x23D},{"value":"\\","keycode":0x371},{"value":"|","keycode":0x377},
    {"value":"\u20AC","keycode":0x365},{"value":"\u00F7","keycode":0x25B},{"value":"\u00D7","keycode":0x25D},
    {"value":"\u00A4","keycode":0x25C},{"value":"[","keycode":0x366},
    {"value":"]","keycode":0x367}, {"value":"\u0142","keycode":0x36B},{"value":"\u0141","keycode":0x36C},
    {"value":"\u00DF","keycode":0x327},{"value":"@","keycode":0x376},
    {"value":"{","keycode":0x362},{"value":"}","keycode":0x36E},{"value":"\u00A7","keycode":0x36D},
    {"value":"<","keycode":0x22C},{"value":">","keycode":0x22E},
];


var croatian_specialhardkeyboard_values = [
    {"value":"\u0160","keycode":0x5B},{"value":"\u0161","keycode":0x7B},{"value":"\u0110","keycode":0x5D}, {"value":"\u0111","keycode":0x7D},
    {"value":"\u017E","keycode":0x7C},{"value":"\u017D","keycode":0x5C},{"value":"\u010D","keycode":0x3A},{"value":"\u010C","keycode":0x3B},
    {"value":"\u0107","keycode":0x22}, {"value":"\u0106","keycode":0x127},
];

var latvian_big_values=[{"inputid":"ime_keyboard_letters_Q","value":"\u016A"},{"inputid":"ime_keyboard_letters_W","value":"G"},
    {"inputid":"ime_keyboard_letters_E","value":"J"},{"inputid":"ime_keyboard_letters_R","value":"R"},{"inputid":"ime_keyboard_letters_T","value":"M"},
    {"inputid":"ime_keyboard_letters_Y","value":"V"},{"inputid":"ime_keyboard_letters_U","value":"N"},{"inputid":"ime_keyboard_letters_I","value":"Z"},
    {"inputid":"ime_keyboard_letters_O","value":"\u0112"},{"inputid":"ime_keyboard_letters_P","value":"\u010C"},{"inputid":"ime_keyboard_letters_A","value":"\u0160"},
    {"inputid":"ime_keyboard_letters_S","value":"U"},{"inputid":"ime_keyboard_letters_D","value":"S"},{"inputid":"ime_keyboard_letters_F","value":"I"},
    {"inputid":"ime_keyboard_letters_G","value":"L"},{"inputid":"ime_keyboard_letters_H","value":"D"},{"inputid":"ime_keyboard_letters_J","value":"A"},
    {"inputid":"ime_keyboard_letters_K","value":"T"},{"inputid":"ime_keyboard_letters_L","value":"E"},{"inputid":"ime_keyboard_letters_exclamation","value":"C"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u017D"},{"inputid":"ime_keyboard_letters_Z","value":"\u0122"},
    {"inputid":"ime_keyboard_letters_X","value":"\u0145"},{"inputid":"ime_keyboard_letters_C","value":"B"},{"inputid":"ime_keyboard_letters_V","value":"\u012A"},
    {"inputid":"ime_keyboard_letters_B","value":"K"},{"inputid":"ime_keyboard_letters_N","value":"P"},{"inputid":"ime_keyboard_letters_M","value":"O"},
    {"inputid":"ime_keyboard_letters_comma","value":"\u0100"},{"inputid":"ime_keyboard_letters_point","value":"H"},{"inputid":"ime_keyboard_letters_question","value":"\u0136"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_1","value":"F"},{"inputid":"ime_keyboard_letters_2","value":"\u013B"},
    {"inputid":"ime_keyboard_letters_3","value":","},{"inputid":"ime_keyboard_letters_at","value":"."},{"inputid":"ime_keyboard_letters_language","value":"Latvian"}
];

var latvian_small_values=[{"inputid":"ime_keyboard_letters_Q","value":"\u016B"},{"inputid":"ime_keyboard_letters_W","value":"g"},
    {"inputid":"ime_keyboard_letters_E","value":"j"},{"inputid":"ime_keyboard_letters_R","value":"r"},{"inputid":"ime_keyboard_letters_T","value":"m"},
    {"inputid":"ime_keyboard_letters_Y","value":"v"},{"inputid":"ime_keyboard_letters_U","value":"n"},{"inputid":"ime_keyboard_letters_I","value":"z"},
    {"inputid":"ime_keyboard_letters_O","value":"\u0113"},{"inputid":"ime_keyboard_letters_P","value":"\u010D"},{"inputid":"ime_keyboard_letters_A","value":"\u0161"},
    {"inputid":"ime_keyboard_letters_S","value":"u"},{"inputid":"ime_keyboard_letters_D","value":"s"},{"inputid":"ime_keyboard_letters_F","value":"i"},
    {"inputid":"ime_keyboard_letters_G","value":"l"},{"inputid":"ime_keyboard_letters_H","value":"d"},{"inputid":"ime_keyboard_letters_J","value":"a"},
    {"inputid":"ime_keyboard_letters_K","value":"t"},{"inputid":"ime_keyboard_letters_L","value":"e"},{"inputid":"ime_keyboard_letters_exclamation","value":"c"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u017E"},{"inputid":"ime_keyboard_letters_Z","value":"\u0123"},
    {"inputid":"ime_keyboard_letters_X","value":"\u0146"},{"inputid":"ime_keyboard_letters_C","value":"b"},{"inputid":"ime_keyboard_letters_V","value":"\u012B"},
    {"inputid":"ime_keyboard_letters_B","value":"k"},{"inputid":"ime_keyboard_letters_N","value":"p"},{"inputid":"ime_keyboard_letters_M","value":"o"},
    {"inputid":"ime_keyboard_letters_comma","value":"\u0101"},{"inputid":"ime_keyboard_letters_point","value":"h"},{"inputid":"ime_keyboard_letters_question","value":"\u0137"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_1","value":"f"},{"inputid":"ime_keyboard_letters_2","value":"\u013C"},
    {"inputid":"ime_keyboard_letters_3","value":","},{"inputid":"ime_keyboard_letters_at","value":"."},{"inputid":"ime_keyboard_letters_language","value":"Latvian"}
];

var latvian_hardkeyboard_values = [
    {"value":"\u016B","keycode":0x171},{"value":"g","keycode":0x177},
    {"value":"j","keycode":0x165},{"value":"r","keycode":0x172},{"value":"m","keycode":0x174},
    {"value":"v","keycode":0x179},{"value":"n","keycode":0x175},{"value":"z","keycode":0x169},
    {"value":"\u0113","keycode":0x16F},{"value":"\u010D","keycode":0x170},{"value":"\u0161","keycode":0x161},
    {"value":"u","keycode":0x173},{"value":"s","keycode":0x164},{"value":"i","keycode":0x166},
    {"value":"l","keycode":0x167},{"value":"d","keycode":0x168},{"value":"a","keycode":0x16A},
    {"value":"t","keycode":0x16B},{"value":"e","keycode":0x16C},{"value":"!","keycode":0x21},
    {"value":"\u013C","keycode":0x2F},{"value":"\u0146","keycode":0x17A},
    {"value":"b","keycode":0x178},{"value":"\u012B","keycode":0x163},{"value":"k","keycode":0x176},
    {"value":"p","keycode":0x162},{"value":"o","keycode":0x16E},{"value":"\u0101","keycode":0x16D},
    {"value":",","keycode":0x2C},{"value":".","keycode":0x2E},{"value":"\u013B","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":"\u016A","keycode":0x51},{"value":"G","keycode":0x57},
    {"value":"J","keycode":0x45},{"value":"R","keycode":0x52},{"value":"M","keycode":0x54},
    {"value":"V","keycode":0x59},{"value":"N","keycode":0x55},{"value":"Z","keycode":0x49},
    {"value":"\u0112","keycode":0x4F},{"value":"\u010C","keycode":0x50},{"value":"\u0160","keycode":0x41},
    {"value":"U","keycode":0x53},{"value":"S","keycode":0x44},{"value":"I","keycode":0x46},
    {"value":"L","keycode":0x47},{"value":"D","keycode":0x48},{"value":"A","keycode":0x4A},
    {"value":"T","keycode":0x4B},{"value":"E","keycode":0x4C},{"value":"\u0145","keycode":0x5A},
    {"value":"B","keycode":0x58},{"value":"\u012A","keycode":0x43},{"value":"K","keycode":0x56},
    {"value":"P","keycode":0x42},{"value":"O","keycode":0x4E},{"value":"\u0100","keycode":0x4D},
    {"value":"1","keycode":0x31},{"value":"2","keycode":0x32},
    {"value":"3","keycode":0x33},{"value":"4","keycode":0x34},{"value":"5","keycode":0x35},
    {"value":"6","keycode":0x36},{"value":"7","keycode":0x37},{"value":"8","keycode":0x38},
    {"value":"9","keycode":0x39},{"value":"0","keycode":0x30},{"value":"\u0137","keycode":0x5C},
    {"value":"\u00BB","keycode":0x23},{"value":"$","keycode":0x24},{"value":"%","keycode":0x125},
    {"value":"&","keycode":0x126},{"value":"\u00D7","keycode":0x2A},{"value":"(","keycode":0x128},
    {"value":")","keycode":0x29},{"value":"_","keycode":0x5F},
    {"value":"C","keycode":0x3A},{"value":"c","keycode":0x3B},{"value":"\u00B0","keycode":0x22},
    {"value":"\u00B4","keycode":0x127},{"value":";","keycode":0x3C},{"value":":","keycode":0x3E},
    {"value":"\u017E","keycode":0x5B},{"value":"h","keycode":0x5D},
    {"value":"\u017D","keycode":0x7B},{"value":"H","keycode":0x7D},{"value":"F","keycode":0x2B},
    {"value":"-","keycode":0x2D}, {"value":"f","keycode":0x3D},{"value":"-","keycode":0x60},
    {"value":"\u00AB","keycode":0x40},{"value":"\u0136","keycode":0x7C}, {"value":"/","keycode":0x5E},{"value":"?","keycode":0x7E},

    {"value":"\u00AB","keycode":0x231},{"value":"\u20AC","keycode":0x234},{"value":"\"","keycode":0x235},
    {"value":"\'","keycode":0x236},{"value":":","keycode":0x238}, {"value":"\u2013","keycode":0x22D}, {"value":"=","keycode":0x23D},
    {"value":"q","keycode":0x371},{"value":"\u0123","keycode":0x377},
    {"value":"\u0157","keycode":0x372},{"value":"w","keycode":0x374},
    {"value":"y","keycode":0x379}, {"value":"[","keycode":0x25B},{"value":"]","keycode":0x25D},{"value":"\u20AC","keycode":0x36C},
    {"value":"\u00B4","keycode":0x327},{"value":"x","keycode":0x378},{"value":"\u0137","keycode":0x376},
    {"value":"\u00F5","keycode":0x36E},{"value":"<","keycode":0x22C},{"value":">","keycode":0x22E},

];

var latvian_specialhardkeyboard_values = [
    {"value":"f","keycode":0x2B},{"value":"F","keycode":0x3D},{"value":"\u017D","keycode":0x5B},{"value":"\u017E","keycode":0x7B},
    {"value":"H","keycode":0x5D},{"value":"h","keycode":0x7D},{"value":"\u0137","keycode":0x7C},{"value":"\u0136","keycode":0x5C},
    {"value":"c","keycode":0x3A},{"value":"C","keycode":0x3B}, {"value":"\u013B","keycode":0x2F},{"value":"\u013C","keycode":0x3F},
];

var lithuanian_big_values=[
    {"inputid":"ime_keyboard_letters_\u00E9","value":"\u0104"},{"inputid":"ime_keyboard_letters_double_quotation","value":"\u010C"},{"inputid":"ime_keyboard_letters_single_quotation","value":"\u0118"},{"inputid":"ime_keyboard_letters_left_bracket","value":"\u0116"},
    {"inputid":"ime_keyboard_letters_midline","value":"\u012E"},{"inputid":"ime_keyboard_letters_\u00E8","value":"\u0160"},{"inputid":"ime_keyboard_letters_baseline","value":"\u0172"},{"inputid":"ime_keyboard_letters_\u00E7","value":"\u016A"},
    {"inputid":"ime_keyboard_letters_\u00E0","value":"("},{"inputid":"ime_keyboard_letters_right_bracket","value":")"},{"inputid":"ime_keyboard_letters_A","value":"q"},{"inputid":"ime_keyboard_letters_Z","value":"w"},
    {"inputid":"ime_keyboard_letters_E","value":"E"},{"inputid":"ime_keyboard_letters_R","value":"R"},{"inputid":"ime_keyboard_letters_T","value":"T"},{"inputid":"ime_keyboard_letters_Y","value":"Y"},
    {"inputid":"ime_keyboard_letters_U","value":"U"},{"inputid":"ime_keyboard_letters_I","value":"I"},{"inputid":"ime_keyboard_letters_O","value":"O"},{"inputid":"ime_keyboard_letters_P","value":"P"},
    {"inputid":"ime_keyboard_letters_^","value":"\u017D"},{"inputid":"ime_keyboard_letters_Q","value":"A"},{"inputid":"ime_keyboard_letters_S","value":"S"},{"inputid":"ime_keyboard_letters_D","value":"D"},
    {"inputid":"ime_keyboard_letters_F","value":"F"},{"inputid":"ime_keyboard_letters_G","value":"G"},{"inputid":"ime_keyboard_letters_H","value":"H"},{"inputid":"ime_keyboard_letters_J","value":"J"},
    {"inputid":"ime_keyboard_letters_K","value":"K"},{"inputid":"ime_keyboard_letters_L","value":"L"},{"inputid":"ime_keyboard_letters_M","value":"!"},{"inputid":"ime_keyboard_letters_\u00F9","value":"/"},
    {"inputid":"ime_keyboard_letters_W","value":"Z"},{"inputid":"ime_keyboard_letters_X","value":"X"},{"inputid":"ime_keyboard_letters_C","value":"C"},{"inputid":"ime_keyboard_letters_V","value":"V"},
    {"inputid":"ime_keyboard_letters_B","value":"B"},{"inputid":"ime_keyboard_letters_N","value":"N"},{"inputid":"ime_keyboard_letters_comma","value":"M"},{"inputid":"ime_keyboard_letters_point","value":","},
    {"inputid":"ime_keyboard_letters_semicolon","value":"."},{"inputid":"ime_keyboard_letters_colon","value":"?"},{"inputid":"ime_keyboard_letters_at","value":"@"},{"inputid":"ime_keyboard_letters_language","value":"Lithuanian"}
];

var lithuanian_small_values=[
    {"inputid":"ime_keyboard_letters_\u00E9","value":"\u0105"},{"inputid":"ime_keyboard_letters_double_quotation","value":"\u010D"},{"inputid":"ime_keyboard_letters_single_quotation","value":"\u0119"},{"inputid":"ime_keyboard_letters_left_bracket","value":"\u0117"},
    {"inputid":"ime_keyboard_letters_midline","value":"\u012F"},{"inputid":"ime_keyboard_letters_\u00E8","value":"\u0161"},{"inputid":"ime_keyboard_letters_baseline","value":"\u0173"},{"inputid":"ime_keyboard_letters_\u00E7","value":"\u016B"},
    {"inputid":"ime_keyboard_letters_\u00E0","value":"("},{"inputid":"ime_keyboard_letters_right_bracket","value":")"},{"inputid":"ime_keyboard_letters_A","value":"q"},{"inputid":"ime_keyboard_letters_Z","value":"w"},
    {"inputid":"ime_keyboard_letters_E","value":"e"},{"inputid":"ime_keyboard_letters_R","value":"r"},{"inputid":"ime_keyboard_letters_T","value":"t"},{"inputid":"ime_keyboard_letters_Y","value":"y"},
    {"inputid":"ime_keyboard_letters_U","value":"u"},{"inputid":"ime_keyboard_letters_I","value":"i"},{"inputid":"ime_keyboard_letters_O","value":"o"},{"inputid":"ime_keyboard_letters_P","value":"p"},
    {"inputid":"ime_keyboard_letters_^","value":"\u017E"},{"inputid":"ime_keyboard_letters_Q","value":"a"},{"inputid":"ime_keyboard_letters_S","value":"s"},{"inputid":"ime_keyboard_letters_D","value":"d"},
    {"inputid":"ime_keyboard_letters_F","value":"f"},{"inputid":"ime_keyboard_letters_G","value":"g"},{"inputid":"ime_keyboard_letters_H","value":"h"},{"inputid":"ime_keyboard_letters_J","value":"j"},
    {"inputid":"ime_keyboard_letters_K","value":"k"},{"inputid":"ime_keyboard_letters_L","value":"l"},{"inputid":"ime_keyboard_letters_M","value":"!"},{"inputid":"ime_keyboard_letters_\u00F9","value":"/"},
    {"inputid":"ime_keyboard_letters_W","value":"z"},{"inputid":"ime_keyboard_letters_X","value":"x"},{"inputid":"ime_keyboard_letters_C","value":"c"},{"inputid":"ime_keyboard_letters_V","value":"v"},
    {"inputid":"ime_keyboard_letters_B","value":"b"},{"inputid":"ime_keyboard_letters_N","value":"n"},{"inputid":"ime_keyboard_letters_comma","value":"m"},{"inputid":"ime_keyboard_letters_point","value":","},
    {"inputid":"ime_keyboard_letters_semicolon","value":"."},{"inputid":"ime_keyboard_letters_colon","value":"?"},{"inputid":"ime_keyboard_letters_at","value":"@"},{"inputid":"ime_keyboard_letters_language","value":"Lithuanian"}
];

var lithuanian_hardkeyboard_values = [
    {"value":"q","keycode":0x171},{"value":"w","keycode":0x177},
    {"value":"e","keycode":0x165},{"value":"r","keycode":0x172},{"value":"t","keycode":0x174},
    {"value":"y","keycode":0x179},{"value":"u","keycode":0x175},{"value":"i","keycode":0x169},
    {"value":"o","keycode":0x16F},{"value":"p","keycode":0x170},{"value":"a","keycode":0x161},
    {"value":"s","keycode":0x173},{"value":"d","keycode":0x164},{"value":"f","keycode":0x166},
    {"value":"g","keycode":0x167},{"value":"h","keycode":0x168},{"value":"j","keycode":0x16A},
    {"value":"k","keycode":0x16B},{"value":"l","keycode":0x16C},{"value":"\u0104","keycode":0x21},
    {"value":"/","keycode":0x2F},{"value":"z","keycode":0x17A},
    {"value":"x","keycode":0x178},{"value":"c","keycode":0x163},{"value":"v","keycode":0x176},
    {"value":"b","keycode":0x162},{"value":"n","keycode":0x16E},{"value":"m","keycode":0x16D},
    {"value":",","keycode":0x2C},{"value":".","keycode":0x2E},{"value":"?","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":"Q","keycode":0x51},{"value":"W","keycode":0x57},
    {"value":"E","keycode":0x45},{"value":"R","keycode":0x52},{"value":"T","keycode":0x54},
    {"value":"Y","keycode":0x59},{"value":"U","keycode":0x55},{"value":"I","keycode":0x49},
    {"value":"O","keycode":0x4F},{"value":"P","keycode":0x50},{"value":"A","keycode":0x41},
    {"value":"S","keycode":0x53},{"value":"D","keycode":0x44},{"value":"F","keycode":0x46},
    {"value":"G","keycode":0x47},{"value":"H","keycode":0x48},{"value":"J","keycode":0x4A},
    {"value":"K","keycode":0x4B},{"value":"L","keycode":0x4C},{"value":"Z","keycode":0x5A},
    {"value":"X","keycode":0x58},{"value":"C","keycode":0x43},{"value":"V","keycode":0x56},
    {"value":"B","keycode":0x42},{"value":"N","keycode":0x4E},{"value":"M","keycode":0x4D},
    {"value":"\u0105","keycode":0x31},{"value":"\u010D","keycode":0x32},
    {"value":"\u0119","keycode":0x33},{"value":"\u0117","keycode":0x34},{"value":"\u012F","keycode":0x35},
    {"value":"\u0161","keycode":0x36},{"value":"\u0173","keycode":0x37},{"value":"\u016B","keycode":0x38},
    {"value":"9","keycode":0x39},{"value":"0","keycode":0x30},{"value":"\\","keycode":0x5C},
    {"value":"\u0118","keycode":0x23},{"value":"\u0116","keycode":0x24},{"value":"\u012E","keycode":0x125},
    {"value":"\u0172","keycode":0x126},{"value":"\u016A","keycode":0x2A},{"value":"(","keycode":0x128},
    {"value":")","keycode":0x29},{"value":"_","keycode":0x5F},
    {"value":":","keycode":0x3A},{"value":";","keycode":0x3B},{"value":"\"","keycode":0x22},
    {"value":"\'","keycode":0x127},{"value":"<","keycode":0x3C},{"value":">","keycode":0x3E},
    {"value":"[","keycode":0x5B},{"value":"]","keycode":0x5D},
    {"value":"{","keycode":0x7B},{"value":"}","keycode":0x7D},{"value":"\u017D","keycode":0x2B},
    {"value":"-","keycode":0x2D}, {"value":"\u017E","keycode":0x3D},{"value":"`","keycode":0x60},
    {"value":"\u010C","keycode":0x40},{"value":"|","keycode":0x7C}, {"value":"\u0160","keycode":0x5E},{"value":"~","keycode":0x7E},
    {"value":"1","keycode":0x231},{"value":"2","keycode":0x232},
    {"value":"3","keycode":0x233},{"value":"4","keycode":0x234},{"value":"5","keycode":0x235},
    {"value":"6","keycode":0x236},{"value":"7","keycode":0x237},{"value":"8","keycode":0x238},
    {"value":"9","keycode":0x239},{"value":"0","keycode":0x230},
    {"value":"=","keycode":0x23D},{"value":"\u20AC","keycode":0x365},
];

var lithuanian_specialhardkeyboard_values = [
    {"value":"\u0105","keycode":0x21},{"value":"\u0104","keycode":0x31},{"value":"\u010D","keycode":0x40},{"value":"\u010C","keycode":0x32},
    {"value":"\u0119","keycode":0x23},{"value":"\u0118","keycode":0x33},{"value":"\u0117","keycode":0x24},{"value":"\u0116","keycode":0x34},
    {"value":"\u012E","keycode":0x35},{"value":"\u012F","keycode":0x125},{"value":"\u0160","keycode":0x36},{"value":"\u0161","keycode":0x5E},
    {"value":"\u0172","keycode":0x37},{"value":"\u0173","keycode":0x126},{"value":"\u016B","keycode":0x2A},{"value":"\u016A","keycode":0x38},
    {"value":"\u017E","keycode":0x2B},{"value":"\u017D","keycode":0x3D}
];


var romanian_big_values=[{"inputid":"ime_keyboard_letters_Q","value":"Q"},{"inputid":"ime_keyboard_letters_W","value":"W"},
    {"inputid":"ime_keyboard_letters_E","value":"E"},{"inputid":"ime_keyboard_letters_R","value":"R"},{"inputid":"ime_keyboard_letters_T","value":"T"},
    {"inputid":"ime_keyboard_letters_Y","value":"Y"},{"inputid":"ime_keyboard_letters_U","value":"U"},{"inputid":"ime_keyboard_letters_I","value":"I"},
    {"inputid":"ime_keyboard_letters_O","value":"O"},{"inputid":"ime_keyboard_letters_P","value":"P"},{"inputid":"ime_keyboard_letters_A","value":"A"},
    {"inputid":"ime_keyboard_letters_S","value":"S"},{"inputid":"ime_keyboard_letters_D","value":"D"},{"inputid":"ime_keyboard_letters_F","value":"F"},
    {"inputid":"ime_keyboard_letters_G","value":"G"},{"inputid":"ime_keyboard_letters_H","value":"H"},{"inputid":"ime_keyboard_letters_J","value":"J"},
    {"inputid":"ime_keyboard_letters_K","value":"K"},{"inputid":"ime_keyboard_letters_L","value":"L"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u0218"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u021A"},{"inputid":"ime_keyboard_letters_Z","value":"Z"},
    {"inputid":"ime_keyboard_letters_X","value":"X"},{"inputid":"ime_keyboard_letters_C","value":"C"},{"inputid":"ime_keyboard_letters_V","value":"V"},
    {"inputid":"ime_keyboard_letters_B","value":"B"},{"inputid":"ime_keyboard_letters_N","value":"N"},{"inputid":"ime_keyboard_letters_M","value":"M"},
    {"inputid":"ime_keyboard_letters_comma","value":"\u0102"},{"inputid":"ime_keyboard_letters_point","value":"\u00CE"},{"inputid":"ime_keyboard_letters_question","value":"\u00C2"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_1","value":"\\"},{"inputid":"ime_keyboard_letters_2","value":"@"},
    {"inputid":"ime_keyboard_letters_3","value":","},{"inputid":"ime_keyboard_letters_at","value":"."},{"inputid":"ime_keyboard_letters_language","value":"Romanian"}
];

var romanian_small_values=[{"inputid":"ime_keyboard_letters_Q","value":"q"},{"inputid":"ime_keyboard_letters_W","value":"w"},
    {"inputid":"ime_keyboard_letters_E","value":"e"},{"inputid":"ime_keyboard_letters_R","value":"r"},{"inputid":"ime_keyboard_letters_T","value":"t"},
    {"inputid":"ime_keyboard_letters_Y","value":"y"},{"inputid":"ime_keyboard_letters_U","value":"u"},{"inputid":"ime_keyboard_letters_I","value":"i"},
    {"inputid":"ime_keyboard_letters_O","value":"o"},{"inputid":"ime_keyboard_letters_P","value":"p"},{"inputid":"ime_keyboard_letters_A","value":"a"},
    {"inputid":"ime_keyboard_letters_S","value":"s"},{"inputid":"ime_keyboard_letters_D","value":"d"},{"inputid":"ime_keyboard_letters_F","value":"f"},
    {"inputid":"ime_keyboard_letters_G","value":"g"},{"inputid":"ime_keyboard_letters_H","value":"h"},{"inputid":"ime_keyboard_letters_J","value":"j"},
    {"inputid":"ime_keyboard_letters_K","value":"k"},{"inputid":"ime_keyboard_letters_L","value":"l"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u0219"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u021B"},{"inputid":"ime_keyboard_letters_Z","value":"z"},
    {"inputid":"ime_keyboard_letters_X","value":"x"},{"inputid":"ime_keyboard_letters_C","value":"c"},{"inputid":"ime_keyboard_letters_V","value":"v"},
    {"inputid":"ime_keyboard_letters_B","value":"b"},{"inputid":"ime_keyboard_letters_N","value":"n"},{"inputid":"ime_keyboard_letters_M","value":"m"},
    {"inputid":"ime_keyboard_letters_comma","value":"\u0103"},{"inputid":"ime_keyboard_letters_point","value":"\u00EE"},{"inputid":"ime_keyboard_letters_question","value":"\u00E2"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_1","value":"\\"},{"inputid":"ime_keyboard_letters_2","value":"@"},
    {"inputid":"ime_keyboard_letters_3","value":","},{"inputid":"ime_keyboard_letters_at","value":"."},{"inputid":"ime_keyboard_letters_language","value":"Romanian"}
];


var romanian_hardkeyboard_values = [
    {"value":"q","keycode":0x171},{"value":"w","keycode":0x177},
    {"value":"e","keycode":0x165},{"value":"r","keycode":0x172},{"value":"t","keycode":0x174},
    {"value":"y","keycode":0x179},{"value":"u","keycode":0x175},{"value":"i","keycode":0x169},
    {"value":"o","keycode":0x16F},{"value":"p","keycode":0x170},{"value":"a","keycode":0x161},
    {"value":"s","keycode":0x173},{"value":"d","keycode":0x164},{"value":"f","keycode":0x166},
    {"value":"g","keycode":0x167},{"value":"h","keycode":0x168},{"value":"j","keycode":0x16A},
    {"value":"k","keycode":0x16B},{"value":"l","keycode":0x16C},{"value":"!","keycode":0x21},
    {"value":"/","keycode":0x2F},{"value":"z","keycode":0x17A},
    {"value":"x","keycode":0x178},{"value":"c","keycode":0x163},{"value":"v","keycode":0x176},
    {"value":"b","keycode":0x162},{"value":"n","keycode":0x16E},{"value":"m","keycode":0x16D},
    {"value":",","keycode":0x2C},{"value":".","keycode":0x2E},{"value":"?","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":"Q","keycode":0x51},{"value":"W","keycode":0x57},
    {"value":"E","keycode":0x45},{"value":"R","keycode":0x52},{"value":"T","keycode":0x54},
    {"value":"Y","keycode":0x59},{"value":"U","keycode":0x55},{"value":"I","keycode":0x49},
    {"value":"O","keycode":0x4F},{"value":"P","keycode":0x50},{"value":"A","keycode":0x41},
    {"value":"S","keycode":0x53},{"value":"D","keycode":0x44},{"value":"F","keycode":0x46},
    {"value":"G","keycode":0x47},{"value":"H","keycode":0x48},{"value":"J","keycode":0x4A},
    {"value":"K","keycode":0x4B},{"value":"L","keycode":0x4C},{"value":"Z","keycode":0x5A},
    {"value":"X","keycode":0x58},{"value":"C","keycode":0x43},{"value":"V","keycode":0x56},
    {"value":"B","keycode":0x42},{"value":"N","keycode":0x4E},{"value":"M","keycode":0x4D},
    {"value":"1","keycode":0x31},{"value":"2","keycode":0x32},
    {"value":"3","keycode":0x33},{"value":"4","keycode":0x34},{"value":"5","keycode":0x35},
    {"value":"6","keycode":0x36},{"value":"7","keycode":0x37},{"value":"8","keycode":0x38},
    {"value":"9","keycode":0x39},{"value":"0","keycode":0x30},{"value":"\u00E2","keycode":0x5C},
    {"value":"#","keycode":0x23},{"value":"$","keycode":0x24},{"value":"%","keycode":0x125},
    {"value":"&","keycode":0x126},{"value":"*","keycode":0x2A},{"value":"(","keycode":0x128},
    {"value":")","keycode":0x29},{"value":"_","keycode":0x5F},
    {"value":"\u0218","keycode":0x3A},{"value":"\u0219","keycode":0x3B},{"value":"\u021A","keycode":0x22},
    {"value":"\u021B","keycode":0x127},{"value":";","keycode":0x3C},{"value":":","keycode":0x3E},
    {"value":"\u0103","keycode":0x5B},{"value":"\u00EE","keycode":0x5D},
    {"value":"\u0102","keycode":0x7B},{"value":"\u00CE","keycode":0x7D},{"value":"+","keycode":0x2B},
    {"value":"-","keycode":0x2D}, {"value":"=","keycode":0x3D},{"value":"\u201E","keycode":0x60},
    {"value":"@","keycode":0x40},{"value":"\u00C2","keycode":0x7C}, {"value":"^","keycode":0x5E},{"value":"\u201D","keycode":0x7E},
    {"value":"~","keycode":0x231},{"value":"\u02C7","keycode":0x232},{"value":"`","keycode":0x260},
    {"value":"^","keycode":0x233},{"value":"\u02D8","keycode":0x234},{"value":"\u00B0","keycode":0x235},
    {"value":"\u02DB","keycode":0x236},{"value":"`","keycode":0x237},{"value":"\u02D9","keycode":0x238},
    {"value":"\u00B4","keycode":0x239},{"value":"\u02DD","keycode":0x230},{"value":"\u00A8","keycode":0x22D},
    {"value":"\u00B8","keycode":0x23D},{"value":"\u20AC","keycode":0x365},{"value":"\u00A7","keycode":0x370},
    {"value":"[","keycode":0x25B},{"value":"]","keycode":0x25D},{"value":"\\","keycode":0x25C},
    {"value":"\u00DF","keycode":0x373},{"value":"\u0111","keycode":0x364},{"value":"\u0142","keycode":0x36C},
    {"value":";","keycode":0x23B},{"value":"\'","keycode":0x327},{"value":"\u00A9","keycode":0x363},
    {"value":"<","keycode":0x22C},{"value":">","keycode":0x22E},
];

var romanian_specialhardkeyboard_values = [
    {"value":"\u0102","keycode":0x5B},{"value":"\u0103","keycode":0x7B},{"value":"\u00CE","keycode":0x5D}, {"value":"\u00EE","keycode":0x7D},
    {"value":"\u00E2","keycode":0x7C},{"value":"\u00C2","keycode":0x5C}, {"value":"\u0219","keycode":0x3A},{"value":"\u0218","keycode":0x3B},
    {"value":"\u021B","keycode":0x22}, {"value":"\u021A","keycode":0x127},
];

var norwegian_big_values = [{"inputid":"ime_keyboard_letters_Q","value":"Q"},{"inputid":"ime_keyboard_letters_W","value":"W"},
    {"inputid":"ime_keyboard_letters_E","value":"E"},{"inputid":"ime_keyboard_letters_R","value":"R"},{"inputid":"ime_keyboard_letters_T","value":"T"},
    {"inputid":"ime_keyboard_letters_Y","value":"Z"},{"inputid":"ime_keyboard_letters_U","value":"U"},{"inputid":"ime_keyboard_letters_I","value":"I"},
    {"inputid":"ime_keyboard_letters_O","value":"O"},{"inputid":"ime_keyboard_letters_P","value":"P"},{"inputid":"ime_keyboard_letters_A","value":"A"},
    {"inputid":"ime_keyboard_letters_S","value":"S"},{"inputid":"ime_keyboard_letters_D","value":"D"},{"inputid":"ime_keyboard_letters_F","value":"F"},
    {"inputid":"ime_keyboard_letters_G","value":"G"},{"inputid":"ime_keyboard_letters_H","value":"H"},{"inputid":"ime_keyboard_letters_J","value":"J"},
    {"inputid":"ime_keyboard_letters_K","value":"K"},{"inputid":"ime_keyboard_letters_L","value":"L"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u00D8"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u00C6"},{"inputid":"ime_keyboard_letters_shift","value":""},{"inputid":"ime_keyboard_letters_Z","value":"Y"},
    {"inputid":"ime_keyboard_letters_X","value":"X"},{"inputid":"ime_keyboard_letters_C","value":"C"},{"inputid":"ime_keyboard_letters_V","value":"V"},
    {"inputid":"ime_keyboard_letters_B","value":"B"},{"inputid":"ime_keyboard_letters_N","value":"N"},{"inputid":"ime_keyboard_letters_M","value":"M"},
    {"inputid":"ime_keyboard_letters_comma","value":","},{"inputid":"ime_keyboard_letters_point","value":"."},{"inputid":"ime_keyboard_letters_question","value":"\u00C5"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_language","value":"Norwegian"}
];

var norwegian_small_values = [{"inputid":"ime_keyboard_letters_Q","value":"q"},{"inputid":"ime_keyboard_letters_W","value":"w"},
    {"inputid":"ime_keyboard_letters_E","value":"e"},{"inputid":"ime_keyboard_letters_R","value":"r"},{"inputid":"ime_keyboard_letters_T","value":"t"},
    {"inputid":"ime_keyboard_letters_Y","value":"z"},{"inputid":"ime_keyboard_letters_U","value":"u"},{"inputid":"ime_keyboard_letters_I","value":"i"},
    {"inputid":"ime_keyboard_letters_O","value":"o"},{"inputid":"ime_keyboard_letters_P","value":"p"},{"inputid":"ime_keyboard_letters_A","value":"a"},
    {"inputid":"ime_keyboard_letters_S","value":"s"},{"inputid":"ime_keyboard_letters_D","value":"d"},{"inputid":"ime_keyboard_letters_F","value":"f"},
    {"inputid":"ime_keyboard_letters_G","value":"g"},{"inputid":"ime_keyboard_letters_H","value":"h"},{"inputid":"ime_keyboard_letters_J","value":"j"},
    {"inputid":"ime_keyboard_letters_K","value":"k"},{"inputid":"ime_keyboard_letters_L","value":"l"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u00F8"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u00E6"},{"inputid":"ime_keyboard_letters_shift","value":""},{"inputid":"ime_keyboard_letters_Z","value":"y"},
    {"inputid":"ime_keyboard_letters_X","value":"x"},{"inputid":"ime_keyboard_letters_C","value":"c"},{"inputid":"ime_keyboard_letters_V","value":"v"},
    {"inputid":"ime_keyboard_letters_B","value":"b"},{"inputid":"ime_keyboard_letters_N","value":"n"},{"inputid":"ime_keyboard_letters_M","value":"m"},
    {"inputid":"ime_keyboard_letters_comma","value":","},{"inputid":"ime_keyboard_letters_point","value":"."},{"inputid":"ime_keyboard_letters_question","value":"\u00E5"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_language","value":"Norwegian"}
];

var norwegian_hardkeyboard_values = [
    {"value":"q","keycode":0x171},{"value":"w","keycode":0x177},
    {"value":"e","keycode":0x165},{"value":"r","keycode":0x172},{"value":"t","keycode":0x174},
    {"value":"y","keycode":0x179},{"value":"u","keycode":0x175},{"value":"i","keycode":0x169},
    {"value":"o","keycode":0x16F},{"value":"p","keycode":0x170},{"value":"a","keycode":0x161},
    {"value":"s","keycode":0x173},{"value":"d","keycode":0x164},{"value":"f","keycode":0x166},
    {"value":"g","keycode":0x167},{"value":"h","keycode":0x168},{"value":"j","keycode":0x16A},
    {"value":"k","keycode":0x16B},{"value":"l","keycode":0x16C},{"value":"!","keycode":0x21},
    {"value":"-","keycode":0x2F},{"value":"z","keycode":0x17A},
    {"value":"x","keycode":0x178},{"value":"c","keycode":0x163},{"value":"v","keycode":0x176},
    {"value":"b","keycode":0x162},{"value":"n","keycode":0x16E},{"value":"m","keycode":0x16D},
    {"value":",","keycode":0x2C},{"value":".","keycode":0x2E},{"value":"_","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":"Q","keycode":0x51},{"value":"W","keycode":0x57},
    {"value":"E","keycode":0x45},{"value":"R","keycode":0x52},{"value":"T","keycode":0x54},
    {"value":"Y","keycode":0x59},{"value":"U","keycode":0x55},{"value":"I","keycode":0x49},
    {"value":"O","keycode":0x4F},{"value":"P","keycode":0x50},{"value":"A","keycode":0x41},
    {"value":"S","keycode":0x53},{"value":"D","keycode":0x44},{"value":"F","keycode":0x46},
    {"value":"G","keycode":0x47},{"value":"H","keycode":0x48},{"value":"J","keycode":0x4A},
    {"value":"K","keycode":0x4B},{"value":"L","keycode":0x4C},{"value":"Z","keycode":0x5A},
    {"value":"X","keycode":0x58},{"value":"C","keycode":0x43},{"value":"V","keycode":0x56},
    {"value":"B","keycode":0x42},{"value":"N","keycode":0x4E},{"value":"M","keycode":0x4D},
    {"value":"1","keycode":0x31},{"value":"2","keycode":0x32},
    {"value":"3","keycode":0x33},{"value":"4","keycode":0x34},{"value":"5","keycode":0x35},
    {"value":"6","keycode":0x36},{"value":"7","keycode":0x37},{"value":"8","keycode":0x38},
    {"value":"9","keycode":0x39},{"value":"0","keycode":0x30},{"value":"\'","keycode":0x5C},
    {"value":"#","keycode":0x23},{"value":"\u00A4","keycode":0x24},{"value":"%","keycode":0x125},
    {"value":"/","keycode":0x126},{"value":"(","keycode":0x2A},{"value":")","keycode":0x128},
    {"value":"=","keycode":0x29},{"value":"?","keycode":0x5F},
    {"value":"\u00D8","keycode":0x3A},{"value":"\u00F8","keycode":0x3B},{"value":"\u00C6","keycode":0x22},
    {"value":"\u00E6","keycode":0x127},{"value":";","keycode":0x3C},{"value":":","keycode":0x3E},
    {"value":"\u00E5","keycode":0x5B},{"value":"\u00A8","keycode":0x5D},
    {"value":"\u00C5","keycode":0x7B},{"value":"^","keycode":0x7D},{"value":"`","keycode":0x2B},
    {"value":"+","keycode":0x2D}, {"value":"\\","keycode":0x3D},{"value":"|","keycode":0x60},
    {"value":"\"","keycode":0x40},{"value":"*","keycode":0x7C}, {"value":"&","keycode":0x5E},{"value":"\u00A7","keycode":0x7E},

    {"value":"@","keycode":0x232},{"value":"~","keycode":0x25D},{"value":"\u00B5","keycode":0x36D},
    {"value":"\u00A3","keycode":0x233},{"value":"$","keycode":0x234},{"value":"\u20AC","keycode":0x235},
    {"value":"{","keycode":0x237},{"value":"[","keycode":0x238},{"value":"\u20AC","keycode":0x365},
    {"value":"]","keycode":0x239},{"value":"}","keycode":0x230},{"value":"\u00B4","keycode":0x23D},

];

var norwegian_specialhardkeyboard_values = [
    {"value":"\u00C5","keycode":0x5B},{"value":"\u00E5","keycode":0x7B},{"value":"\u00F8","keycode":0x3A},{"value":"\u00D8","keycode":0x3B},
    {"value":"\u00E6","keycode":0x22}, {"value":"\u00C6","keycode":0x127},
];

var slovenian_big_values=[{"inputid":"ime_keyboard_letters_Q","value":"Q"},{"inputid":"ime_keyboard_letters_W","value":"W"},
    {"inputid":"ime_keyboard_letters_E","value":"E"},{"inputid":"ime_keyboard_letters_R","value":"R"},{"inputid":"ime_keyboard_letters_T","value":"T"},
    {"inputid":"ime_keyboard_letters_Y","value":"Z"},{"inputid":"ime_keyboard_letters_U","value":"U"},{"inputid":"ime_keyboard_letters_I","value":"I"},
    {"inputid":"ime_keyboard_letters_O","value":"O"},{"inputid":"ime_keyboard_letters_P","value":"P"},{"inputid":"ime_keyboard_letters_A","value":"A"},
    {"inputid":"ime_keyboard_letters_S","value":"S"},{"inputid":"ime_keyboard_letters_D","value":"D"},{"inputid":"ime_keyboard_letters_F","value":"F"},
    {"inputid":"ime_keyboard_letters_G","value":"G"},{"inputid":"ime_keyboard_letters_H","value":"H"},{"inputid":"ime_keyboard_letters_J","value":"J"},
    {"inputid":"ime_keyboard_letters_K","value":"K"},{"inputid":"ime_keyboard_letters_L","value":"L"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u010C"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u0106"},{"inputid":"ime_keyboard_letters_Z","value":"Y"},
    {"inputid":"ime_keyboard_letters_X","value":"X"},{"inputid":"ime_keyboard_letters_C","value":"C"},{"inputid":"ime_keyboard_letters_V","value":"V"},
    {"inputid":"ime_keyboard_letters_B","value":"B"},{"inputid":"ime_keyboard_letters_N","value":"N"},{"inputid":"ime_keyboard_letters_M","value":"M"},
    {"inputid":"ime_keyboard_letters_comma","value":"\u0160"},{"inputid":"ime_keyboard_letters_point","value":"\u0110"},{"inputid":"ime_keyboard_letters_question","value":"\u017D"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_1","value":"\\"},{"inputid":"ime_keyboard_letters_2","value":"@"},
    {"inputid":"ime_keyboard_letters_3","value":","},{"inputid":"ime_keyboard_letters_at","value":"."},{"inputid":"ime_keyboard_letters_language","value":"Slovenian"}
];

var slovenian_small_values=[{"inputid":"ime_keyboard_letters_Q","value":"q"},{"inputid":"ime_keyboard_letters_W","value":"w"},
    {"inputid":"ime_keyboard_letters_E","value":"e"},{"inputid":"ime_keyboard_letters_R","value":"r"},{"inputid":"ime_keyboard_letters_T","value":"t"},
    {"inputid":"ime_keyboard_letters_Y","value":"z"},{"inputid":"ime_keyboard_letters_U","value":"u"},{"inputid":"ime_keyboard_letters_I","value":"i"},
    {"inputid":"ime_keyboard_letters_O","value":"o"},{"inputid":"ime_keyboard_letters_P","value":"p"},{"inputid":"ime_keyboard_letters_A","value":"a"},
    {"inputid":"ime_keyboard_letters_S","value":"s"},{"inputid":"ime_keyboard_letters_D","value":"d"},{"inputid":"ime_keyboard_letters_F","value":"f"},
    {"inputid":"ime_keyboard_letters_G","value":"g"},{"inputid":"ime_keyboard_letters_H","value":"h"},{"inputid":"ime_keyboard_letters_J","value":"j"},
    {"inputid":"ime_keyboard_letters_K","value":"k"},{"inputid":"ime_keyboard_letters_L","value":"l"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u010D"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u0107"},{"inputid":"ime_keyboard_letters_Z","value":"y"},
    {"inputid":"ime_keyboard_letters_X","value":"x"},{"inputid":"ime_keyboard_letters_C","value":"c"},{"inputid":"ime_keyboard_letters_V","value":"v"},
    {"inputid":"ime_keyboard_letters_B","value":"b"},{"inputid":"ime_keyboard_letters_N","value":"n"},{"inputid":"ime_keyboard_letters_M","value":"m"},
    {"inputid":"ime_keyboard_letters_comma","value":"\u0161"},{"inputid":"ime_keyboard_letters_point","value":"\u0111"},{"inputid":"ime_keyboard_letters_question","value":"\u017E"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_1","value":"\\"},{"inputid":"ime_keyboard_letters_2","value":"@"},
    {"inputid":"ime_keyboard_letters_3","value":","},{"inputid":"ime_keyboard_letters_at","value":"."},{"inputid":"ime_keyboard_letters_language","value":"Slovenian"}
];

var slovenian_hardkeyboard_values = [
    {"value":"q","keycode":0x171},{"value":"w","keycode":0x177},
    {"value":"e","keycode":0x165},{"value":"r","keycode":0x172},{"value":"t","keycode":0x174},
    {"value":"z","keycode":0x179},{"value":"u","keycode":0x175},{"value":"i","keycode":0x169},
    {"value":"o","keycode":0x16F},{"value":"p","keycode":0x170},{"value":"a","keycode":0x161},
    {"value":"s","keycode":0x173},{"value":"d","keycode":0x164},{"value":"f","keycode":0x166},
    {"value":"g","keycode":0x167},{"value":"h","keycode":0x168},{"value":"j","keycode":0x16A},
    {"value":"k","keycode":0x16B},{"value":"l","keycode":0x16C},{"value":"!","keycode":0x21},
    {"value":"-","keycode":0x2F},{"value":"y","keycode":0x17A},
    {"value":"x","keycode":0x178},{"value":"c","keycode":0x163},{"value":"v","keycode":0x176},
    {"value":"b","keycode":0x162},{"value":"n","keycode":0x16E},{"value":"m","keycode":0x16D},
    {"value":",","keycode":0x2C},{"value":".","keycode":0x2E},{"value":"_","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":"Q","keycode":0x51},{"value":"W","keycode":0x57},
    {"value":"E","keycode":0x45},{"value":"R","keycode":0x52},{"value":"T","keycode":0x54},
    {"value":"Z","keycode":0x59},{"value":"U","keycode":0x55},{"value":"I","keycode":0x49},
    {"value":"O","keycode":0x4F},{"value":"P","keycode":0x50},{"value":"A","keycode":0x41},
    {"value":"S","keycode":0x53},{"value":"D","keycode":0x44},{"value":"F","keycode":0x46},
    {"value":"G","keycode":0x47},{"value":"H","keycode":0x48},{"value":"J","keycode":0x4A},
    {"value":"K","keycode":0x4B},{"value":"L","keycode":0x4C},{"value":"Y","keycode":0x5A},
    {"value":"X","keycode":0x58},{"value":"C","keycode":0x43},{"value":"V","keycode":0x56},
    {"value":"B","keycode":0x42},{"value":"N","keycode":0x4E},{"value":"M","keycode":0x4D},
    {"value":"1","keycode":0x31},{"value":"2","keycode":0x32},
    {"value":"3","keycode":0x33},{"value":"4","keycode":0x34},{"value":"5","keycode":0x35},
    {"value":"6","keycode":0x36},{"value":"7","keycode":0x37},{"value":"8","keycode":0x38},
    {"value":"9","keycode":0x39},{"value":"0","keycode":0x30},{"value":"\u017E","keycode":0x5C},
    {"value":"#","keycode":0x23},{"value":"$","keycode":0x24},{"value":"%","keycode":0x125},
    {"value":"/","keycode":0x126},{"value":"(","keycode":0x2A},{"value":")","keycode":0x128},
    {"value":"=","keycode":0x29},{"value":"?","keycode":0x5F},
    {"value":"\u010C","keycode":0x3A},{"value":"\u010D","keycode":0x3B},{"value":"\u0106","keycode":0x22},
    {"value":"\u0107","keycode":0x127},{"value":";","keycode":0x3C},{"value":":","keycode":0x3E},
    {"value":"\u0161","keycode":0x5B},{"value":"\u0111","keycode":0x5D},
    {"value":"\u0160","keycode":0x7B},{"value":"\u0110","keycode":0x7D},{"value":"*","keycode":0x2B},
    {"value":"\'","keycode":0x2D}, {"value":"+","keycode":0x3D},{"value":"\u00B8","keycode":0x60},
    {"value":"\"","keycode":0x40},{"value":"\u017D","keycode":0x7C}, {"value":"&","keycode":0x5E},{"value":"\u00A8","keycode":0x7E},
    {"value":"~","keycode":0x231},{"value":"\u02C7","keycode":0x232},
    {"value":"^","keycode":0x233},{"value":"\u02D8","keycode":0x234},{"value":"\u00B0","keycode":0x235},
    {"value":"\u02DB","keycode":0x236},{"value":"`","keycode":0x237},{"value":"\u02D9","keycode":0x238},
    {"value":"\u00B4","keycode":0x239},{"value":"\u02DD","keycode":0x230},{"value":"\u00A8","keycode":0x22D},
    {"value":"\u00B8","keycode":0x23D},{"value":"\\","keycode":0x371},{"value":"|","keycode":0x377},
    {"value":"\u20AC","keycode":0x365},{"value":"\u00F7","keycode":0x25B},{"value":"\u00D7","keycode":0x25D},
    {"value":"\u00A4","keycode":0x25C},{"value":"[","keycode":0x366},
    {"value":"]","keycode":0x367}, {"value":"\u0142","keycode":0x36B},{"value":"\u0141","keycode":0x36C},
    {"value":"\u00DF","keycode":0x327},{"value":"@","keycode":0x376},
    {"value":"{","keycode":0x362},{"value":"}","keycode":0x36E},{"value":"\u00A7","keycode":0x36D},
    {"value":"<","keycode":0x22C},{"value":">","keycode":0x22E},
];

var slovenian_specialhardkeyboard_values = [
    {"value":"\u0160","keycode":0x5B},{"value":"\u0161","keycode":0x7B},{"value":"\u0110","keycode":0x5D},{"value":"\u0111","keycode":0x7D},
    {"value":"\u010D","keycode":0x3A},{"value":"\u010C","keycode":0x3B},{"value":"\u0107","keycode":0x22}, {"value":"\u0106","keycode":0x127},
    {"value":"\u017D","keycode":0x5C},{"value":"\u017E","keycode":0x7C}
];

var turkish_big_values=[{"inputid":"ime_keyboard_letters_Q","value":"Q"},{"inputid":"ime_keyboard_letters_W","value":"W"},
    {"inputid":"ime_keyboard_letters_E","value":"E"},{"inputid":"ime_keyboard_letters_R","value":"R"},{"inputid":"ime_keyboard_letters_T","value":"T"},
    {"inputid":"ime_keyboard_letters_Y","value":"Y"},{"inputid":"ime_keyboard_letters_U","value":"U"},{"inputid":"ime_keyboard_letters_I","value":"I"},
    {"inputid":"ime_keyboard_letters_O","value":"O"},{"inputid":"ime_keyboard_letters_P","value":"P"},{"inputid":"ime_keyboard_letters_A","value":"A"},
    {"inputid":"ime_keyboard_letters_S","value":"S"},{"inputid":"ime_keyboard_letters_D","value":"D"},{"inputid":"ime_keyboard_letters_F","value":"F"},
    {"inputid":"ime_keyboard_letters_G","value":"G"},{"inputid":"ime_keyboard_letters_H","value":"H"},{"inputid":"ime_keyboard_letters_J","value":"J"},
    {"inputid":"ime_keyboard_letters_K","value":"K"},{"inputid":"ime_keyboard_letters_L","value":"L"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u015E"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u0130"},{"inputid":"ime_keyboard_letters_Z","value":"Z"},
    {"inputid":"ime_keyboard_letters_X","value":"X"},{"inputid":"ime_keyboard_letters_C","value":"C"},{"inputid":"ime_keyboard_letters_V","value":"V"},
    {"inputid":"ime_keyboard_letters_B","value":"B"},{"inputid":"ime_keyboard_letters_N","value":"N"},{"inputid":"ime_keyboard_letters_M","value":"M"},
    {"inputid":"ime_keyboard_letters_comma","value":"\u00D6"},{"inputid":"ime_keyboard_letters_point","value":"\u00C7"},{"inputid":"ime_keyboard_letters_question","value":"\u011E"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_1","value":"\u00DC"},{"inputid":"ime_keyboard_letters_2","value":"@"},
    {"inputid":"ime_keyboard_letters_3","value":","},{"inputid":"ime_keyboard_letters_at","value":"."},{"inputid":"ime_keyboard_letters_language","value":"Turkish"}
];

var turkish_small_values=[{"inputid":"ime_keyboard_letters_Q","value":"q"},{"inputid":"ime_keyboard_letters_W","value":"w"},
    {"inputid":"ime_keyboard_letters_E","value":"e"},{"inputid":"ime_keyboard_letters_R","value":"r"},{"inputid":"ime_keyboard_letters_T","value":"t"},
    {"inputid":"ime_keyboard_letters_Y","value":"y"},{"inputid":"ime_keyboard_letters_U","value":"u"},{"inputid":"ime_keyboard_letters_I","value":"i"},
    {"inputid":"ime_keyboard_letters_O","value":"o"},{"inputid":"ime_keyboard_letters_P","value":"p"},{"inputid":"ime_keyboard_letters_A","value":"a"},
    {"inputid":"ime_keyboard_letters_S","value":"s"},{"inputid":"ime_keyboard_letters_D","value":"d"},{"inputid":"ime_keyboard_letters_F","value":"f"},
    {"inputid":"ime_keyboard_letters_G","value":"g"},{"inputid":"ime_keyboard_letters_H","value":"h"},{"inputid":"ime_keyboard_letters_J","value":"j"},
    {"inputid":"ime_keyboard_letters_K","value":"k"},{"inputid":"ime_keyboard_letters_L","value":"l"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u015F"},
    {"inputid":"ime_keyboard_letters_slash","value":"i"},{"inputid":"ime_keyboard_letters_Z","value":"z"},
    {"inputid":"ime_keyboard_letters_X","value":"x"},{"inputid":"ime_keyboard_letters_C","value":"c"},{"inputid":"ime_keyboard_letters_V","value":"v"},
    {"inputid":"ime_keyboard_letters_B","value":"b"},{"inputid":"ime_keyboard_letters_N","value":"n"},{"inputid":"ime_keyboard_letters_M","value":"m"},
    {"inputid":"ime_keyboard_letters_comma","value":"\u00F6"},{"inputid":"ime_keyboard_letters_point","value":"\u00E7"},{"inputid":"ime_keyboard_letters_question","value":"\u011F"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_1","value":"\u00FC"},{"inputid":"ime_keyboard_letters_2","value":"@"},
    {"inputid":"ime_keyboard_letters_3","value":","},{"inputid":"ime_keyboard_letters_at","value":"."},{"inputid":"ime_keyboard_letters_language","value":"Turkish"}
];

var turkish_hardkeyboard_values = [
    {"value":"q","keycode":0x171},{"value":"w","keycode":0x177},
    {"value":"e","keycode":0x165},{"value":"r","keycode":0x172},{"value":"t","keycode":0x174},
    {"value":"y","keycode":0x179},{"value":"u","keycode":0x175},{"value":"i","keycode":0x169},
    {"value":"o","keycode":0x16F},{"value":"p","keycode":0x170},{"value":"a","keycode":0x161},
    {"value":"s","keycode":0x173},{"value":"d","keycode":0x164},{"value":"f","keycode":0x166},
    {"value":"g","keycode":0x167},{"value":"h","keycode":0x168},{"value":"j","keycode":0x16A},
    {"value":"k","keycode":0x16B},{"value":"l","keycode":0x16C},{"value":"!","keycode":0x21},
    {"value":".","keycode":0x2F},{"value":"z","keycode":0x17A},
    {"value":"x","keycode":0x178},{"value":"c","keycode":0x163},{"value":"v","keycode":0x176},
    {"value":"b","keycode":0x162},{"value":"n","keycode":0x16E},{"value":"m","keycode":0x16D},
    {"value":"\u00F6","keycode":0x2C},{"value":"\u00E7","keycode":0x2E},{"value":":","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":"Q","keycode":0x51},{"value":"W","keycode":0x57},
    {"value":"E","keycode":0x45},{"value":"R","keycode":0x52},{"value":"T","keycode":0x54},
    {"value":"Y","keycode":0x59},{"value":"U","keycode":0x55},{"value":"I","keycode":0x49},
    {"value":"O","keycode":0x4F},{"value":"P","keycode":0x50},{"value":"A","keycode":0x41},
    {"value":"S","keycode":0x53},{"value":"D","keycode":0x44},{"value":"F","keycode":0x46},
    {"value":"G","keycode":0x47},{"value":"H","keycode":0x48},{"value":"J","keycode":0x4A},
    {"value":"K","keycode":0x4B},{"value":"L","keycode":0x4C},{"value":"Z","keycode":0x5A},
    {"value":"X","keycode":0x58},{"value":"C","keycode":0x43},{"value":"V","keycode":0x56},
    {"value":"B","keycode":0x42},{"value":"N","keycode":0x4E},{"value":"M","keycode":0x4D},
    {"value":"1","keycode":0x31},{"value":"2","keycode":0x32},
    {"value":"3","keycode":0x33},{"value":"4","keycode":0x34},{"value":"5","keycode":0x35},
    {"value":"6","keycode":0x36},{"value":"7","keycode":0x37},{"value":"8","keycode":0x38},
    {"value":"9","keycode":0x39},{"value":"0","keycode":0x30},{"value":",","keycode":0x5C},
    {"value":"^","keycode":0x23},{"value":"+","keycode":0x24},{"value":"%","keycode":0x125},
    {"value":"/","keycode":0x126},{"value":"(","keycode":0x2A},{"value":")","keycode":0x128},
    {"value":"=","keycode":0x29},{"value":"?","keycode":0x5F},
    {"value":"\u015E","keycode":0x3A},{"value":"\u015F","keycode":0x3B},{"value":"\u0130","keycode":0x22},
    {"value":"i","keycode":0x127},{"value":"\u00D6","keycode":0x3C},{"value":"\u00C7","keycode":0x3E},
    {"value":"\u011F","keycode":0x5B},{"value":"\u00FC","keycode":0x5D},
    {"value":"\u011E","keycode":0x7B},{"value":"\u00DC","keycode":0x7D},{"value":"_","keycode":0x2B},
    {"value":"*","keycode":0x2D}, {"value":"-","keycode":0x3D},{"value":"\"","keycode":0x60},
    {"value":"\'","keycode":0x40},{"value":";","keycode":0x7C}, {"value":"&","keycode":0x5E},{"value":"\u00E9","keycode":0x7E},
    {"value":">","keycode":0x231},{"value":"\u00A3","keycode":0x232},
    {"value":"#","keycode":0x233},{"value":"$","keycode":0x234},{"value":"\u00BD","keycode":0x235},
    {"value":"{","keycode":0x237},{"value":"[","keycode":0x238},
    {"value":"]","keycode":0x239},{"value":"}","keycode":0x230},
    {"value":"\\","keycode":0x22D}, {"value":"|","keycode":0x23D},
    {"value":"@","keycode":0x371},{"value":"\u20AC","keycode":0x365},{"value":"i","keycode":0x369},
    {"value":"\u00A8","keycode":0x25B},{"value":"~","keycode":0x25D},{"value":"`","keycode":0x25C},{"value":"<","keycode":0x260},
    {"value":"\u00E6","keycode":0x361}, {"value":"\u00DF","keycode":0x373},{"value":"\u00B4","keycode":0x23B},

];

var turkish_specialhardkeyboard_values = [
    {"value":"\u011E","keycode":0x5B},{"value":"\u011F","keycode":0x7B},{"value":"\u00DC","keycode":0x5D},{"value":"\u00FC","keycode":0x7D},
    {"value":"\u015F","keycode":0x3A},{"value":"\u015E","keycode":0x3B},{"value":"i","keycode":0x22},{"value":"\u0130","keycode":0x169},
    {"value":"\u00D6","keycode":0x2C},{"value":"\u00F6","keycode":0x3C},{"value":"\u00E7","keycode":0x3E},{"value":"\u00C7","keycode":0x2E},
];

var ukrainain_big_values=[{"inputid":"ime_keyboard_letters_Q","value":"\u0419"},{"inputid":"ime_keyboard_letters_W","value":"\u0426"},
    {"inputid":"ime_keyboard_letters_E","value":"\u0423"},{"inputid":"ime_keyboard_letters_R","value":"\u041A"},{"inputid":"ime_keyboard_letters_T","value":"\u0415"},
    {"inputid":"ime_keyboard_letters_Y","value":"\u041D"},{"inputid":"ime_keyboard_letters_U","value":"\u0413"},{"inputid":"ime_keyboard_letters_I","value":"\u0428"},
    {"inputid":"ime_keyboard_letters_O","value":"\u0429"},{"inputid":"ime_keyboard_letters_P","value":"\u0417"},{"inputid":"ime_keyboard_letters_A","value":"\u0424"},
    {"inputid":"ime_keyboard_letters_S","value":"\u0406"},{"inputid":"ime_keyboard_letters_D","value":"\u0412"},{"inputid":"ime_keyboard_letters_F","value":"\u0410"},
    {"inputid":"ime_keyboard_letters_G","value":"\u043F"},{"inputid":"ime_keyboard_letters_H","value":"\u0420"},{"inputid":"ime_keyboard_letters_J","value":"\u041E"},
    {"inputid":"ime_keyboard_letters_K","value":"\u041B"},{"inputid":"ime_keyboard_letters_L","value":"\u0414"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u0416"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u0404"},{"inputid":"ime_keyboard_letters_Z","value":"\u0490"},
    {"inputid":"ime_keyboard_letters_X","value":"\u042F"},{"inputid":"ime_keyboard_letters_C","value":"\u0427"},{"inputid":"ime_keyboard_letters_V","value":"\u0421"},
    {"inputid":"ime_keyboard_letters_B","value":"\u041C"},{"inputid":"ime_keyboard_letters_N","value":"\u0418"},{"inputid":"ime_keyboard_letters_M","value":"\u0422"},
    {"inputid":"ime_keyboard_letters_comma","value":"\u042C"},{"inputid":"ime_keyboard_letters_point","value":"\u0411"},{"inputid":"ime_keyboard_letters_question","value":"\u042E"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_1","value":"\u0425"},{"inputid":"ime_keyboard_letters_2","value":"\u0407"},
    {"inputid":"ime_keyboard_letters_3","value":","},{"inputid":"ime_keyboard_letters_at","value":"."},{"inputid":"ime_keyboard_letters_language","value":"Ukrainain"}
];

var ukrainain_small_values=[{"inputid":"ime_keyboard_letters_Q","value":"\u0439"},{"inputid":"ime_keyboard_letters_W","value":"\u0446"},
    {"inputid":"ime_keyboard_letters_E","value":"\u0443"},{"inputid":"ime_keyboard_letters_R","value":"\u043A"},{"inputid":"ime_keyboard_letters_T","value":"\u0435"},
    {"inputid":"ime_keyboard_letters_Y","value":"\u043D"},{"inputid":"ime_keyboard_letters_U","value":"\u0433"},{"inputid":"ime_keyboard_letters_I","value":"\u0448"},
    {"inputid":"ime_keyboard_letters_O","value":"\u0449"},{"inputid":"ime_keyboard_letters_P","value":"\u0437"},{"inputid":"ime_keyboard_letters_A","value":"\u0444"},
    {"inputid":"ime_keyboard_letters_S","value":"\u0456"},{"inputid":"ime_keyboard_letters_D","value":"\u0432"},{"inputid":"ime_keyboard_letters_F","value":"\u0430"},
    {"inputid":"ime_keyboard_letters_G","value":"\u043F"},{"inputid":"ime_keyboard_letters_H","value":"\u0440"},{"inputid":"ime_keyboard_letters_J","value":"\u043E"},
    {"inputid":"ime_keyboard_letters_K","value":"\u043B"},{"inputid":"ime_keyboard_letters_L","value":"\u0434"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u0436"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u0454"},{"inputid":"ime_keyboard_letters_Z","value":"\u0491"},
    {"inputid":"ime_keyboard_letters_X","value":"\u044F"},{"inputid":"ime_keyboard_letters_C","value":"\u0447"},{"inputid":"ime_keyboard_letters_V","value":"\u0441"},
    {"inputid":"ime_keyboard_letters_B","value":"\u043C"},{"inputid":"ime_keyboard_letters_N","value":"\u0438"},{"inputid":"ime_keyboard_letters_M","value":"\u0442"},
    {"inputid":"ime_keyboard_letters_comma","value":"\u044C"},{"inputid":"ime_keyboard_letters_point","value":"\u0431"},{"inputid":"ime_keyboard_letters_question","value":"\u044E"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_1","value":"\u0445"},{"inputid":"ime_keyboard_letters_2","value":"\u0457"},
    {"inputid":"ime_keyboard_letters_3","value":","},{"inputid":"ime_keyboard_letters_at","value":"."},{"inputid":"ime_keyboard_letters_language","value":"Ukrainain"}
];

var ukrainain_hardkeyboard_values = [
    {"value":"\u0439","keycode":0x171},{"value":"\u0446","keycode":0x177},
    {"value":"\u0443","keycode":0x165},{"value":"\u043A","keycode":0x172},{"value":"\u0435","keycode":0x174},
    {"value":"\u043D","keycode":0x179},{"value":"\u0433","keycode":0x175},{"value":"\u0448","keycode":0x169},
    {"value":"\u0449","keycode":0x16F},{"value":"\u0437","keycode":0x170},{"value":"\u0444","keycode":0x161},
    {"value":"\u0456","keycode":0x173},{"value":"\u0432","keycode":0x164},{"value":"\u0430","keycode":0x166},
    {"value":"\u043F","keycode":0x167},{"value":"\u0440","keycode":0x168},{"value":"\u043E","keycode":0x16A},
    {"value":"\u043B","keycode":0x16B},{"value":"\u0434","keycode":0x16C},{"value":"!","keycode":0x21},
    {"value":".","keycode":0x2F},{"value":"\u044F","keycode":0x17A},
    {"value":"\u0447","keycode":0x178},{"value":"\u0441","keycode":0x163},{"value":"\u043C","keycode":0x176},
    {"value":"\u0438","keycode":0x162},{"value":"\u0442","keycode":0x16E},{"value":"\u044C","keycode":0x16D},
    {"value":"\u0431","keycode":0x2C},{"value":"\u044E","keycode":0x2E},{"value":",","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":"\u0419","keycode":0x51},{"value":"\u0426","keycode":0x57},
    {"value":"\u0423","keycode":0x45},{"value":"\u041A","keycode":0x52},{"value":"\u0415","keycode":0x54},
    {"value":"\u041D","keycode":0x59},{"value":"\u0413","keycode":0x55},{"value":"\u0428","keycode":0x49},
    {"value":"\u0429","keycode":0x4F},{"value":"\u0417","keycode":0x50},{"value":"\u0424","keycode":0x41},
    {"value":"\u0406","keycode":0x53},{"value":"\u0412","keycode":0x44},{"value":"\u0410","keycode":0x46},
    {"value":"\u041F","keycode":0x47},{"value":"\u0420","keycode":0x48},{"value":"\u041E","keycode":0x4A},
    {"value":"\u041B","keycode":0x4B},{"value":"\u0414","keycode":0x4C},{"value":"\u042F","keycode":0x5A},
    {"value":"\u0427","keycode":0x58},{"value":"\u0421","keycode":0x43},{"value":"\u041C","keycode":0x56},
    {"value":"\u0418","keycode":0x42},{"value":"\u0422","keycode":0x4E},{"value":"\u042C","keycode":0x4D},
    {"value":"1","keycode":0x31},{"value":"2","keycode":0x32},
    {"value":"3","keycode":0x33},{"value":"4","keycode":0x34},{"value":"5","keycode":0x35},
    {"value":"6","keycode":0x36},{"value":"7","keycode":0x37},{"value":"8","keycode":0x38},
    {"value":"9","keycode":0x39},{"value":"0","keycode":0x30},{"value":"\\","keycode":0x5C},
    {"value":"\u2116","keycode":0x23},{"value":";","keycode":0x24},{"value":"%","keycode":0x125},
    {"value":"?","keycode":0x126},{"value":"*","keycode":0x2A},{"value":"(","keycode":0x128},
    {"value":")","keycode":0x29},{"value":"_","keycode":0x5F},
    {"value":"\u0416","keycode":0x3A},{"value":"\u0436","keycode":0x3B},{"value":"\u0404","keycode":0x22},
    {"value":"\u0454","keycode":0x127},{"value":"\u0411","keycode":0x3C},{"value":"\u042E","keycode":0x3E},
    {"value":"\u0445","keycode":0x5B},{"value":"\u0457","keycode":0x5D},
    {"value":"\u0425","keycode":0x7B},{"value":"\u0407","keycode":0x7D},{"value":"+","keycode":0x2B},
    {"value":"-","keycode":0x2D}, {"value":"=","keycode":0x3D},{"value":"\'","keycode":0x60},
    {"value":"\"","keycode":0x40},{"value":"/","keycode":0x7C}, {"value":":","keycode":0x5E},{"value":"\u20B4","keycode":0x7E},
    {"value":"\u0491","keycode":0x375}

];

var ukrainain_specialhardkeyboard_values = [
    {"value":"\u0425","keycode":0x5B},{"value":"\u0445","keycode":0x7B},{"value":"\u0407","keycode":0x5D},{"value":"\u0457","keycode":0x7D},
    {"value":"\u0436","keycode":0x3A},{"value":"\u0416","keycode":0x3B},{"value":"\u0454","keycode":0x22},
    {"value":"\u0404","keycode":0x127},{"value":"\u0411","keycode":0x2C},{"value":"\u0431","keycode":0x3C},
    {"value":"\u044E","keycode":0x3E},{"value":"\u042E","keycode":0x2E},
];

var greek_big_values = [{"inputid":"ime_keyboard_letters_Q","value":"\u0395"},{"inputid":"ime_keyboard_letters_W","value":"\u03A1"},
    {"inputid":"ime_keyboard_letters_E","value":"\u03A4"},{"inputid":"ime_keyboard_letters_R","value":"\u03A5"},{"inputid":"ime_keyboard_letters_T","value":"\u0398"},
    {"inputid":"ime_keyboard_letters_Y","value":"\u0399"},{"inputid":"ime_keyboard_letters_U","value":"\u039F"},{"inputid":"ime_keyboard_letters_I","value":"\u03A0"},
    {"inputid":"ime_keyboard_letters_O","value":"("},{"inputid":"ime_keyboard_letters_P","value":")"},{"inputid":"ime_keyboard_letters_A","value":"\u0391"},
    {"inputid":"ime_keyboard_letters_S","value":"\u03A3"},{"inputid":"ime_keyboard_letters_D","value":"\u0394"},{"inputid":"ime_keyboard_letters_F","value":"\u03A6"},
    {"inputid":"ime_keyboard_letters_G","value":"\u0393"},{"inputid":"ime_keyboard_letters_H","value":"\u0397"},{"inputid":"ime_keyboard_letters_J","value":"\u039E"},
    {"inputid":"ime_keyboard_letters_K","value":"\u039A"},{"inputid":"ime_keyboard_letters_L","value":"\u039B"},{"inputid":"ime_keyboard_letters_exclamation","value":"!"},
    {"inputid":"ime_keyboard_letters_slash","value":"/"},{"inputid":"ime_keyboard_letters_shift","value":""},{"inputid":"ime_keyboard_letters_Z","value":"\u0396"},
    {"inputid":"ime_keyboard_letters_X","value":"\u03A7"},{"inputid":"ime_keyboard_letters_C","value":"\u03A8"},{"inputid":"ime_keyboard_letters_V","value":"\u03A9"},
    {"inputid":"ime_keyboard_letters_B","value":"\u0392"},{"inputid":"ime_keyboard_letters_N","value":"\u039D"},{"inputid":"ime_keyboard_letters_M","value":"\u039C"},
    {"inputid":"ime_keyboard_letters_comma","value":","},{"inputid":"ime_keyboard_letters_point","value":"."},{"inputid":"ime_keyboard_letters_question","value":"?"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_language","value":"Greek"}
];

var greek_small_values = [{"inputid":"ime_keyboard_letters_Q","value":"\u03C2"},{"inputid":"ime_keyboard_letters_W","value":"\u03B5"},
    {"inputid":"ime_keyboard_letters_E","value":"\u03C1"},{"inputid":"ime_keyboard_letters_R","value":"\u03C4"},{"inputid":"ime_keyboard_letters_T","value":"\u03C5"},
    {"inputid":"ime_keyboard_letters_Y","value":"\u03B8"},{"inputid":"ime_keyboard_letters_U","value":"\u03B9"},{"inputid":"ime_keyboard_letters_I","value":"\u03BF"},
    {"inputid":"ime_keyboard_letters_O","value":"\u03C0"},{"inputid":"ime_keyboard_letters_P","value":"#"},{"inputid":"ime_keyboard_letters_A","value":"\u03B1"},
    {"inputid":"ime_keyboard_letters_S","value":"\u03C3"},{"inputid":"ime_keyboard_letters_D","value":"\u03B4"},{"inputid":"ime_keyboard_letters_F","value":"\u03C6"},
    {"inputid":"ime_keyboard_letters_G","value":"\u03B3"},{"inputid":"ime_keyboard_letters_H","value":"\u03B7"},{"inputid":"ime_keyboard_letters_J","value":"\u03BE"},
    {"inputid":"ime_keyboard_letters_K","value":"\u03BA"},{"inputid":"ime_keyboard_letters_L","value":"\u03BB"},{"inputid":"ime_keyboard_letters_exclamation","value":"!"},
    {"inputid":"ime_keyboard_letters_slash","value":"/"},{"inputid":"ime_keyboard_letters_shift","value":""},{"inputid":"ime_keyboard_letters_Z","value":"\u03B6"},
    {"inputid":"ime_keyboard_letters_X","value":"\u03C7"},{"inputid":"ime_keyboard_letters_C","value":"\u03C8"},{"inputid":"ime_keyboard_letters_V","value":"\u03C9"},
    {"inputid":"ime_keyboard_letters_B","value":"\u03B2"},{"inputid":"ime_keyboard_letters_N","value":"\u03BD"},{"inputid":"ime_keyboard_letters_M","value":"\u03BC"},
    {"inputid":"ime_keyboard_letters_comma","value":","},{"inputid":"ime_keyboard_letters_point","value":"."},{"inputid":"ime_keyboard_letters_question","value":"?"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_language","value":"Greek"}
];

var greek_hardkeyboard_values = [
    {"value":";","keycode":0x171},{"value":"\u03C2","keycode":0x177},
    {"value":"\u03B5","keycode":0x165},{"value":"\u03C1","keycode":0x172},{"value":"\u03C4","keycode":0x174},
    {"value":"\u03C5","keycode":0x179},{"value":"\u03B8","keycode":0x175},{"value":"\u03B9","keycode":0x169},
    {"value":"o","keycode":0x16F},{"value":"\u03C0","keycode":0x170},{"value":"\u03B1","keycode":0x161},
    {"value":"\u03C3","keycode":0x173},{"value":"\u03B4","keycode":0x164},{"value":"\u03C6","keycode":0x166},
    {"value":"\u03B3","keycode":0x167},{"value":"\u03B7","keycode":0x168},{"value":"\u03BE","keycode":0x16A},
    {"value":"\u03BA","keycode":0x16B},{"value":"\u03BB","keycode":0x16C},{"value":"!","keycode":0x21},
    {"value":"/","keycode":0x2F},{"value":"\u03B6","keycode":0x17A},
    {"value":"\u03C7","keycode":0x178},{"value":"\u03C8","keycode":0x163},{"value":"\u03C9","keycode":0x176},
    {"value":"\u03B2","keycode":0x162},{"value":"\u03BD","keycode":0x16E},{"value":"\u03BC","keycode":0x16D},
    {"value":",","keycode":0x2C},{"value":".","keycode":0x2E},{"value":"?","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":":","keycode":0x51},{"value":"\u0385","keycode":0x57},
    {"value":"\u0395","keycode":0x45},{"value":"\u03A1","keycode":0x52},{"value":"\u03A4","keycode":0x54},
    {"value":"\u03A5","keycode":0x59},{"value":"\u0398","keycode":0x55},{"value":"\u0399","keycode":0x49},
    {"value":"\u039F","keycode":0x4F},{"value":"\u03A0","keycode":0x50},{"value":"\u0391","keycode":0x41},
    {"value":"\u03A3","keycode":0x53},{"value":"\u0394","keycode":0x44},{"value":"\u03A6","keycode":0x46},
    {"value":"\u0393","keycode":0x47},{"value":"\u0397","keycode":0x48},{"value":"\u039E","keycode":0x4A},
    {"value":"\u039A","keycode":0x4B},{"value":"\u039B","keycode":0x4C},{"value":"\u0396","keycode":0x5A},
    {"value":"\u03A7","keycode":0x58},{"value":"\u03A8","keycode":0x43},{"value":"\u03A9","keycode":0x56},
    {"value":"\u0392","keycode":0x42},{"value":"\u039D","keycode":0x4E},{"value":"\u039C","keycode":0x4D},
    {"value":"1","keycode":0x31},{"value":"2","keycode":0x32},
    {"value":"3","keycode":0x33},{"value":"4","keycode":0x34},{"value":"5","keycode":0x35},
    {"value":"6","keycode":0x36},{"value":"7","keycode":0x37},{"value":"8","keycode":0x38},
    {"value":"9","keycode":0x39},{"value":"0","keycode":0x30},{"value":"\\","keycode":0x5C},
    {"value":"#","keycode":0x23},{"value":"$","keycode":0x24},{"value":"%","keycode":0x125},
    {"value":"&","keycode":0x126},{"value":"*","keycode":0x2A},{"value":"(","keycode":0x128},
    {"value":")","keycode":0x29},{"value":"_","keycode":0x5F},
    {"value":"\u00A8","keycode":0x3A},{"value":"\u0384","keycode":0x3B},{"value":"\"","keycode":0x22},
    {"value":"\'","keycode":0x127},{"value":"<","keycode":0x3C},{"value":">","keycode":0x3E},
    {"value":"[","keycode":0x5B},{"value":"]","keycode":0x5D},
    {"value":"{","keycode":0x7B},{"value":"}","keycode":0x7D},{"value":"+","keycode":0x2B},
    {"value":"-","keycode":0x2D}, {"value":"=","keycode":0x3D},{"value":"`","keycode":0x60},
    {"value":"@","keycode":0x40},{"value":"|","keycode":0x7C}, {"value":"^","keycode":0x5E},{"value":"~","keycode":0x7E},
    {"value":"\u00B2","keycode":0x232},
    {"value":"\u00B3","keycode":0x233},{"value":"\u00A3","keycode":0x234},{"value":"\u00A7","keycode":0x235},
    {"value":"\u00B6","keycode":0x236},{"value":"\u00A4","keycode":0x238},
    {"value":"\u00A6","keycode":0x239},{"value":"\u00B0","keycode":0x230},
    {"value":"\u00B1","keycode":0x22D}, {"value":"\u00BD","keycode":0x23D}, {"value":"\u20AC","keycode":0x365},
    {"value":"\u00AE","keycode":0x372}, {"value":"\u00A5","keycode":0x379},
    {"value":"\u00AB","keycode":0x25B},{"value":"\u00BB","keycode":0x25D},{"value":"\u00AC","keycode":0x25C},
    {"value":"\u0385","keycode":0x23B},
    {"value":"\u00A9","keycode":0x363},
];

var greek_specialhardkeyboard_values = [
    {"value":";","keycode":0x51},{"value":":","keycode":0x171},{"value":"\u03C2","keycode":0x57},{"value":"\u0385","keycode":0x177},
];

var hungarian_big_values = [
    {"inputid":"ime_keyboard_letters_\u00E9","value":"\u00CD"},{"inputid":"ime_keyboard_letters_double_quotation","value":"\u00DC"},{"inputid":"ime_keyboard_letters_single_quotation","value":"\u00D3"},{"inputid":"ime_keyboard_letters_left_bracket","value":"\u00DA"},
    {"inputid":"ime_keyboard_letters_midline","value":"\u0170"},{"inputid":"ime_keyboard_letters_\u00E8","value":"\u00D6"},{"inputid":"ime_keyboard_letters_baseline","value":"\u00C9"},{"inputid":"ime_keyboard_letters_\u00E7","value":"\u00C1"},
    {"inputid":"ime_keyboard_letters_\u00E0","value":"("},{"inputid":"ime_keyboard_letters_right_bracket","value":")"},{"inputid":"ime_keyboard_letters_A","value":"Q"},{"inputid":"ime_keyboard_letters_Z","value":"W"},
    {"inputid":"ime_keyboard_letters_E","value":"E"},{"inputid":"ime_keyboard_letters_R","value":"R"},{"inputid":"ime_keyboard_letters_T","value":"T"},{"inputid":"ime_keyboard_letters_Y","value":"Y"},
    {"inputid":"ime_keyboard_letters_U","value":"U"},{"inputid":"ime_keyboard_letters_I","value":"I"},{"inputid":"ime_keyboard_letters_O","value":"O"},{"inputid":"ime_keyboard_letters_P","value":"P"},
    {"inputid":"ime_keyboard_letters_^","value":"\u0150"},{"inputid":"ime_keyboard_letters_Q","value":"A"},{"inputid":"ime_keyboard_letters_S","value":"S"},{"inputid":"ime_keyboard_letters_D","value":"D"},
    {"inputid":"ime_keyboard_letters_F","value":"F"},{"inputid":"ime_keyboard_letters_G","value":"G"},{"inputid":"ime_keyboard_letters_H","value":"H"},{"inputid":"ime_keyboard_letters_J","value":"J"},
    {"inputid":"ime_keyboard_letters_K","value":"K"},{"inputid":"ime_keyboard_letters_L","value":"L"},{"inputid":"ime_keyboard_letters_M","value":"!"},{"inputid":"ime_keyboard_letters_\u00F9","value":"/"},
    {"inputid":"ime_keyboard_letters_W","value":"Z"},{"inputid":"ime_keyboard_letters_X","value":"X"},{"inputid":"ime_keyboard_letters_C","value":"C"},{"inputid":"ime_keyboard_letters_V","value":"V"},
    {"inputid":"ime_keyboard_letters_B","value":"B"},{"inputid":"ime_keyboard_letters_N","value":"N"},{"inputid":"ime_keyboard_letters_comma","value":"M"},{"inputid":"ime_keyboard_letters_point","value":","},
    {"inputid":"ime_keyboard_letters_semicolon","value":"."},{"inputid":"ime_keyboard_letters_colon","value":"?"},{"inputid":"ime_keyboard_letters_at","value":"@"},{"inputid":"ime_keyboard_letters_language","value":"Hungarian"}
];

var hungarian_small_values = [
    {"inputid":"ime_keyboard_letters_\u00E9","value":"\u00ED"},{"inputid":"ime_keyboard_letters_double_quotation","value":"\u00FC"},{"inputid":"ime_keyboard_letters_single_quotation","value":"\u00F3"},{"inputid":"ime_keyboard_letters_left_bracket","value":"\u00FA"},
    {"inputid":"ime_keyboard_letters_midline","value":"\u0171"},{"inputid":"ime_keyboard_letters_\u00E8","value":"\u00F6"},{"inputid":"ime_keyboard_letters_baseline","value":"\u00E9"},{"inputid":"ime_keyboard_letters_\u00E7","value":"\u00E1"},
    {"inputid":"ime_keyboard_letters_\u00E0","value":"("},{"inputid":"ime_keyboard_letters_right_bracket","value":")"},{"inputid":"ime_keyboard_letters_A","value":"q"},{"inputid":"ime_keyboard_letters_Z","value":"w"},
    {"inputid":"ime_keyboard_letters_E","value":"e"},{"inputid":"ime_keyboard_letters_R","value":"r"},{"inputid":"ime_keyboard_letters_T","value":"t"},{"inputid":"ime_keyboard_letters_Y","value":"y"},
    {"inputid":"ime_keyboard_letters_U","value":"u"},{"inputid":"ime_keyboard_letters_I","value":"i"},{"inputid":"ime_keyboard_letters_O","value":"o"},{"inputid":"ime_keyboard_letters_P","value":"p"},
    {"inputid":"ime_keyboard_letters_^","value":"\u0151"},{"inputid":"ime_keyboard_letters_Q","value":"a"},{"inputid":"ime_keyboard_letters_S","value":"s"},{"inputid":"ime_keyboard_letters_D","value":"d"},
    {"inputid":"ime_keyboard_letters_F","value":"f"},{"inputid":"ime_keyboard_letters_G","value":"g"},{"inputid":"ime_keyboard_letters_H","value":"h"},{"inputid":"ime_keyboard_letters_J","value":"j"},
    {"inputid":"ime_keyboard_letters_K","value":"k"},{"inputid":"ime_keyboard_letters_L","value":"l"},{"inputid":"ime_keyboard_letters_M","value":"!"},{"inputid":"ime_keyboard_letters_\u00F9","value":"/"},
    {"inputid":"ime_keyboard_letters_W","value":"z"},{"inputid":"ime_keyboard_letters_X","value":"x"},{"inputid":"ime_keyboard_letters_C","value":"c"},{"inputid":"ime_keyboard_letters_V","value":"v"},
    {"inputid":"ime_keyboard_letters_B","value":"b"},{"inputid":"ime_keyboard_letters_N","value":"n"},{"inputid":"ime_keyboard_letters_comma","value":"m"},{"inputid":"ime_keyboard_letters_point","value":","},
    {"inputid":"ime_keyboard_letters_semicolon","value":"."},{"inputid":"ime_keyboard_letters_colon","value":"?"},{"inputid":"ime_keyboard_letters_at","value":"@"},{"inputid":"ime_keyboard_letters_language","value":"Hungarian"}
];

var hungarian_hardkeyboard_values = [
    {"value":"q","keycode":0x171},{"value":"w","keycode":0x177},
    {"value":"e","keycode":0x165},{"value":"r","keycode":0x172},{"value":"t","keycode":0x174},
    {"value":"z","keycode":0x179},{"value":"u","keycode":0x175},{"value":"i","keycode":0x169},
    {"value":"o","keycode":0x16F},{"value":"p","keycode":0x170},{"value":"a","keycode":0x161},
    {"value":"s","keycode":0x173},{"value":"d","keycode":0x164},{"value":"f","keycode":0x166},
    {"value":"g","keycode":0x167},{"value":"h","keycode":0x168},{"value":"j","keycode":0x16A},
    {"value":"k","keycode":0x16B},{"value":"l","keycode":0x16C},{"value":"\'","keycode":0x21},
    {"value":"-","keycode":0x2F},{"value":"y","keycode":0x17A},
    {"value":"x","keycode":0x178},{"value":"c","keycode":0x163},{"value":"v","keycode":0x176},
    {"value":"b","keycode":0x162},{"value":"n","keycode":0x16E},{"value":"m","keycode":0x16D},
    {"value":",","keycode":0x2C},{"value":".","keycode":0x2E},{"value":"_","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":"Q","keycode":0x51},{"value":"W","keycode":0x57},
    {"value":"E","keycode":0x45},{"value":"R","keycode":0x52},{"value":"T","keycode":0x54},
    {"value":"Z","keycode":0x59},{"value":"U","keycode":0x55},{"value":"I","keycode":0x49},
    {"value":"O","keycode":0x4F},{"value":"P","keycode":0x50},{"value":"A","keycode":0x41},
    {"value":"S","keycode":0x53},{"value":"D","keycode":0x44},{"value":"F","keycode":0x46},
    {"value":"G","keycode":0x47},{"value":"H","keycode":0x48},{"value":"J","keycode":0x4A},
    {"value":"K","keycode":0x4B},{"value":"L","keycode":0x4C},{"value":"Y","keycode":0x5A},
    {"value":"X","keycode":0x58},{"value":"C","keycode":0x43},{"value":"V","keycode":0x56},
    {"value":"B","keycode":0x42},{"value":"N","keycode":0x4E},{"value":"M","keycode":0x4D},
    {"value":"1","keycode":0x31},{"value":"2","keycode":0x32},
    {"value":"3","keycode":0x33},{"value":"4","keycode":0x34},{"value":"5","keycode":0x35},
    {"value":"6","keycode":0x36},{"value":"7","keycode":0x37},{"value":"8","keycode":0x38},
    {"value":"9","keycode":0x39},{"value":"\u00F6","keycode":0x30},{"value":"\u0171","keycode":0x5C},
    {"value":"+","keycode":0x23},{"value":"!","keycode":0x24},{"value":"%","keycode":0x125},
    {"value":"=","keycode":0x126},{"value":"(","keycode":0x2A},{"value":")","keycode":0x128},
    {"value":"\u00D6","keycode":0x29},{"value":"\u00DC","keycode":0x5F},
    {"value":"\u00C9","keycode":0x3A},{"value":"\u00E9","keycode":0x3B},{"value":"\u00C1","keycode":0x22},
    {"value":"\u00E1","keycode":0x127},{"value":"?","keycode":0x3C},{"value":":","keycode":0x3E},
    {"value":"\u0151","keycode":0x5B},{"value":"\u00FA","keycode":0x5D},
    {"value":"\u0150","keycode":0x7B},{"value":"\u00DA","keycode":0x7D},{"value":"\u00D3","keycode":0x2B},
    {"value":"\u00FC","keycode":0x2D}, {"value":"\u00F3","keycode":0x3D},{"value":"0","keycode":0x60},
    {"value":"\"","keycode":0x40},{"value":"\u0170","keycode":0x7C}, {"value":"/","keycode":0x5E},{"value":"\u00A7","keycode":0x7E},

    {"value":"~","keycode":0x231},{"value":"\u02C7","keycode":0x232},
    {"value":"^","keycode":0x233},{"value":"\u02D8","keycode":0x234},{"value":"\u00B0","keycode":0x235},
    {"value":"\u02DB","keycode":0x236},{"value":"`","keycode":0x237},{"value":"\u02D9","keycode":0x238},
    {"value":"\u00B4","keycode":0x239},{"value":"\u02DD","keycode":0x230}, {"value":"\u00A8","keycode":0x22D}, {"value":"\u00B8","keycode":0x23D},
    {"value":"\\","keycode":0x371},{"value":"|","keycode":0x377},
    {"value":"\u00C4","keycode":0x365},{"value":"\u20AC","keycode":0x375},{"value":"\u00CD","keycode":0x369},
    {"value":"\u00E4","keycode":0x361},
    {"value":"\u0111","keycode":0x373},{"value":"\u0110","keycode":0x364},{"value":"[","keycode":0x366},
    {"value":"]","keycode":0x367},{"value":"\u00ED","keycode":0x36A},
    {"value":"\u0142","keycode":0x36B},{"value":"\u0141","keycode":0x36C},{"value":">","keycode":0x37A},
    {"value":"#","keycode":0x378},{"value":"$","keycode":0x363},{"value":"@","keycode":0x376},
    {"value":"{","keycode":0x362},{"value":"}","keycode":0x36E},{"value":"<","keycode":0x36D},
    {"value":"\u00F7","keycode":0x25B},{"value":"\u00D7","keycode":0x25D},{"value":"\u00A4","keycode":0x25C},
    {"value":"$","keycode":0x23B}, {"value":"\u00DF","keycode":0x327},{"value":"*","keycode":0x22F},
    {"value":";","keycode":0x22C},{"value":">","keycode":0x22E},
];

var hungarian_specialhardkeyboard_values = [
    {"value":"\u00D6","keycode":0x30},{"value":"\u00F6","keycode":0x29},{"value":"\u00FC","keycode":0x5F},{"value":"\u00DC","keycode":0x2D},
    {"value":"\u00D3","keycode":0x3D},{"value":"\u00F3","keycode":0x2B},{"value":"\u0150","keycode":0x5B},{"value":"\u0151","keycode":0x7B},
    {"value":"\u00DA","keycode":0x5D},{"value":"\u00FA","keycode":0x7D},{"value":"\u0171","keycode":0x7C},{"value":"\u0170","keycode":0x5C},
    {"value":"\u00E9","keycode":0x3A},{"value":"\u00C9","keycode":0x3B},{"value":"\u00E1","keycode":0x22}, {"value":"\u00C1","keycode":0x127},
];

var slovak_big_values = [
    {"inputid":"ime_keyboard_letters_\u00E9","value":"\u013D"},{"inputid":"ime_keyboard_letters_double_quotation","value":"\u0160"},{"inputid":"ime_keyboard_letters_single_quotation","value":"\u010C"},{"inputid":"ime_keyboard_letters_left_bracket","value":"\u0164"},
    {"inputid":"ime_keyboard_letters_midline","value":"\u017D"},{"inputid":"ime_keyboard_letters_\u00E8","value":"\u00DD"},{"inputid":"ime_keyboard_letters_baseline","value":"\u00C1"},{"inputid":"ime_keyboard_letters_\u00E7","value":"\u00CD"},
    {"inputid":"ime_keyboard_letters_\u00E0","value":"\u00C9"},{"inputid":"ime_keyboard_letters_right_bracket","value":"\u0147"},{"inputid":"ime_keyboard_letters_A","value":"Q"},{"inputid":"ime_keyboard_letters_Z","value":"W"},
    {"inputid":"ime_keyboard_letters_E","value":"E"},{"inputid":"ime_keyboard_letters_R","value":"R"},{"inputid":"ime_keyboard_letters_T","value":"T"},{"inputid":"ime_keyboard_letters_Y","value":"Z"},
    {"inputid":"ime_keyboard_letters_U","value":"U"},{"inputid":"ime_keyboard_letters_I","value":"I"},{"inputid":"ime_keyboard_letters_O","value":"O"},{"inputid":"ime_keyboard_letters_P","value":"P"},
    {"inputid":"ime_keyboard_letters_^","value":"\u00DA"},{"inputid":"ime_keyboard_letters_Q","value":"A"},{"inputid":"ime_keyboard_letters_S","value":"S"},{"inputid":"ime_keyboard_letters_D","value":"D"},
    {"inputid":"ime_keyboard_letters_F","value":"F"},{"inputid":"ime_keyboard_letters_G","value":"G"},{"inputid":"ime_keyboard_letters_H","value":"H"},{"inputid":"ime_keyboard_letters_J","value":"J"},
    {"inputid":"ime_keyboard_letters_K","value":"K"},{"inputid":"ime_keyboard_letters_L","value":"L"},{"inputid":"ime_keyboard_letters_M","value":"\u00D4"},{"inputid":"ime_keyboard_letters_\u00F9","value":"\u00C4"},
    {"inputid":"ime_keyboard_letters_W","value":"Y"},{"inputid":"ime_keyboard_letters_X","value":"X"},{"inputid":"ime_keyboard_letters_C","value":"C"},{"inputid":"ime_keyboard_letters_V","value":"V"},
    {"inputid":"ime_keyboard_letters_B","value":"B"},{"inputid":"ime_keyboard_letters_N","value":"N"},{"inputid":"ime_keyboard_letters_comma","value":"M"},{"inputid":"ime_keyboard_letters_point","value":","},
    {"inputid":"ime_keyboard_letters_semicolon","value":"."},{"inputid":"ime_keyboard_letters_colon","value":"\u010E"},{"inputid":"ime_keyboard_letters_at","value":"\u0154"},{"inputid":"ime_keyboard_letters_language","value":"Slovak"}
];

var slovak_small_values = [
    {"inputid":"ime_keyboard_letters_\u00E9","value":"\u013E"},{"inputid":"ime_keyboard_letters_double_quotation","value":"\u0161"},{"inputid":"ime_keyboard_letters_single_quotation","value":"\u010D"},{"inputid":"ime_keyboard_letters_left_bracket","value":"\u0165"},
    {"inputid":"ime_keyboard_letters_midline","value":"\u017E"},{"inputid":"ime_keyboard_letters_\u00E8","value":"\u00FD"},{"inputid":"ime_keyboard_letters_baseline","value":"\u00E1"},{"inputid":"ime_keyboard_letters_\u00E7","value":"\u00ED"},
    {"inputid":"ime_keyboard_letters_\u00E0","value":"\u00E9"},{"inputid":"ime_keyboard_letters_right_bracket","value":"\u0148"},{"inputid":"ime_keyboard_letters_A","value":"q"},{"inputid":"ime_keyboard_letters_Z","value":"w"},
    {"inputid":"ime_keyboard_letters_E","value":"e"},{"inputid":"ime_keyboard_letters_R","value":"r"},{"inputid":"ime_keyboard_letters_T","value":"t"},{"inputid":"ime_keyboard_letters_Y","value":"z"},
    {"inputid":"ime_keyboard_letters_U","value":"u"},{"inputid":"ime_keyboard_letters_I","value":"i"},{"inputid":"ime_keyboard_letters_O","value":"o"},{"inputid":"ime_keyboard_letters_P","value":"p"},
    {"inputid":"ime_keyboard_letters_^","value":"\u00FA"},{"inputid":"ime_keyboard_letters_Q","value":"a"},{"inputid":"ime_keyboard_letters_S","value":"s"},{"inputid":"ime_keyboard_letters_D","value":"d"},
    {"inputid":"ime_keyboard_letters_F","value":"f"},{"inputid":"ime_keyboard_letters_G","value":"g"},{"inputid":"ime_keyboard_letters_H","value":"h"},{"inputid":"ime_keyboard_letters_J","value":"j"},
    {"inputid":"ime_keyboard_letters_K","value":"k"},{"inputid":"ime_keyboard_letters_L","value":"l"},{"inputid":"ime_keyboard_letters_M","value":"\u00F4"},{"inputid":"ime_keyboard_letters_\u00F9","value":"\u00E4"},
    {"inputid":"ime_keyboard_letters_W","value":"y"},{"inputid":"ime_keyboard_letters_X","value":"x"},{"inputid":"ime_keyboard_letters_C","value":"c"},{"inputid":"ime_keyboard_letters_V","value":"v"},
    {"inputid":"ime_keyboard_letters_B","value":"b"},{"inputid":"ime_keyboard_letters_N","value":"n"},{"inputid":"ime_keyboard_letters_comma","value":"m"},{"inputid":"ime_keyboard_letters_point","value":","},
    {"inputid":"ime_keyboard_letters_semicolon","value":"."},{"inputid":"ime_keyboard_letters_colon","value":"\u010F"},{"inputid":"ime_keyboard_letters_at","value":"\u0155"},{"inputid":"ime_keyboard_letters_language","value":"Slovak"}
];


var slovak_hardkeyboard_values = [
    {"value":"q","keycode":0x171},{"value":"w","keycode":0x177},
    {"value":"e","keycode":0x165},{"value":"r","keycode":0x172},{"value":"t","keycode":0x174},
    {"value":"y","keycode":0x179},{"value":"u","keycode":0x175},{"value":"i","keycode":0x169},
    {"value":"o","keycode":0x16F},{"value":"p","keycode":0x170},{"value":"a","keycode":0x161},
    {"value":"s","keycode":0x173},{"value":"d","keycode":0x164},{"value":"f","keycode":0x166},
    {"value":"g","keycode":0x167},{"value":"h","keycode":0x168},{"value":"j","keycode":0x16A},
    {"value":"k","keycode":0x16B},{"value":"l","keycode":0x16C},{"value":"1","keycode":0x21},
    {"value":"-","keycode":0x2F},{"value":"z","keycode":0x17A},
    {"value":"x","keycode":0x178},{"value":"c","keycode":0x163},{"value":"v","keycode":0x176},
    {"value":"b","keycode":0x162},{"value":"n","keycode":0x16E},{"value":"m","keycode":0x16D},
    {"value":",","keycode":0x2C},{"value":".","keycode":0x2E},{"value":"_","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":"Q","keycode":0x51},{"value":"W","keycode":0x57},
    {"value":"E","keycode":0x45},{"value":"R","keycode":0x52},{"value":"T","keycode":0x54},
    {"value":"Y","keycode":0x59},{"value":"U","keycode":0x55},{"value":"I","keycode":0x49},
    {"value":"O","keycode":0x4F},{"value":"P","keycode":0x50},{"value":"A","keycode":0x41},
    {"value":"S","keycode":0x53},{"value":"D","keycode":0x44},{"value":"F","keycode":0x46},
    {"value":"G","keycode":0x47},{"value":"H","keycode":0x48},{"value":"J","keycode":0x4A},
    {"value":"K","keycode":0x4B},{"value":"L","keycode":0x4C},{"value":"Z","keycode":0x5A},
    {"value":"X","keycode":0x58},{"value":"C","keycode":0x43},{"value":"V","keycode":0x56},
    {"value":"B","keycode":0x42},{"value":"N","keycode":0x4E},{"value":"M","keycode":0x4D},
    {"value":"+","keycode":0x31},{"value":"\u013E","keycode":0x32},
    {"value":"\u0161","keycode":0x33},{"value":"\u010D","keycode":0x34},{"value":"\u0165","keycode":0x35},
    {"value":"\u017E","keycode":0x36},{"value":"\u00FD","keycode":0x37},{"value":"\u00E1","keycode":0x38},
    {"value":"\u00ED","keycode":0x39},{"value":"\u00E9","keycode":0x30},{"value":"\u0148","keycode":0x5C},
    {"value":"3","keycode":0x23},{"value":"4","keycode":0x24},{"value":"5","keycode":0x125},
    {"value":"7","keycode":0x126},{"value":"8","keycode":0x2A},{"value":"9","keycode":0x128},
    {"value":"0","keycode":0x29},{"value":"%","keycode":0x5F},
    {"value":"\"","keycode":0x3A},{"value":"\u00F4","keycode":0x3B},{"value":"!","keycode":0x22},
    {"value":"\u00A7","keycode":0x127},{"value":"?","keycode":0x3C},{"value":":","keycode":0x3E},
    {"value":"\u00FA","keycode":0x5B},{"value":"\u00E4","keycode":0x5D},
    {"value":"/","keycode":0x7B},{"value":"(","keycode":0x7D},{"value":"\u02C7","keycode":0x2B},
    {"value":"=","keycode":0x2D}, {"value":"\u00B4","keycode":0x3D},{"value":";","keycode":0x60},
    {"value":"2","keycode":0x40},{"value":")","keycode":0x7C}, {"value":"6","keycode":0x5E},{"value":"\u00B0","keycode":0x7E},

    {"value":"~","keycode":0x231},{"value":"\u02C7","keycode":0x232},
    {"value":"^","keycode":0x233},{"value":"\u02D8","keycode":0x234},{"value":"\u00B0","keycode":0x235},
    {"value":"\u02DB","keycode":0x236},{"value":"`","keycode":0x237},{"value":"\u02D9","keycode":0x238},
    {"value":"\u00B4","keycode":0x239},{"value":"\u02DD","keycode":0x230}, {"value":"\u00A8","keycode":0x22D}, {"value":"\u00B8","keycode":0x23D},
    {"value":"\\","keycode":0x371},{"value":"|","keycode":0x377},
    {"value":"\u20AC","keycode":0x365},{"value":"\'","keycode":0x370},
    {"value":"\u0111","keycode":0x373},{"value":"\u0110","keycode":0x364},{"value":"[","keycode":0x366},
    {"value":"]","keycode":0x367},
    {"value":"\u0142","keycode":0x36B},{"value":"\u0141","keycode":0x36C},{"value":">","keycode":0x37A},
    {"value":"#","keycode":0x378},{"value":"$","keycode":0x363},{"value":"@","keycode":0x376},
    {"value":"{","keycode":0x362},{"value":"}","keycode":0x36E},{"value":"<","keycode":0x22C},
    {"value":"\u00F7","keycode":0x25B},{"value":"\u00D7","keycode":0x25D},{"value":"\u00A4","keycode":0x25C},
    {"value":"$","keycode":0x23B}, {"value":"\u00DF","keycode":0x327},{"value":"*","keycode":0x22F},
    {"value":">","keycode":0x22E},
];

var serbian_big_values=[{"inputid":"ime_keyboard_letters_Q","value":"\u0409"},{"inputid":"ime_keyboard_letters_W","value":"\u040A"},
    {"inputid":"ime_keyboard_letters_E","value":"\u0415"},{"inputid":"ime_keyboard_letters_R","value":"\u0420"},{"inputid":"ime_keyboard_letters_T","value":"\u0422"},
    {"inputid":"ime_keyboard_letters_Y","value":"\u0417"},{"inputid":"ime_keyboard_letters_U","value":"\u0423"},{"inputid":"ime_keyboard_letters_I","value":"\u0418"},
    {"inputid":"ime_keyboard_letters_O","value":"\u041E"},{"inputid":"ime_keyboard_letters_P","value":"\u041F"},{"inputid":"ime_keyboard_letters_A","value":"\u0410"},
    {"inputid":"ime_keyboard_letters_S","value":"\u0421"},{"inputid":"ime_keyboard_letters_D","value":"\u0414"},{"inputid":"ime_keyboard_letters_F","value":"\u0424"},
    {"inputid":"ime_keyboard_letters_G","value":"\u0413"},{"inputid":"ime_keyboard_letters_H","value":"\u0425"},{"inputid":"ime_keyboard_letters_J","value":"\u0408"},
    {"inputid":"ime_keyboard_letters_K","value":"\u041A"},{"inputid":"ime_keyboard_letters_L","value":"\u041B"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u0427"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u040B"},{"inputid":"ime_keyboard_letters_Z","value":"\u0405"},
    {"inputid":"ime_keyboard_letters_X","value":"\u040F"},{"inputid":"ime_keyboard_letters_C","value":"\u0426"},{"inputid":"ime_keyboard_letters_V","value":"\u0412"},
    {"inputid":"ime_keyboard_letters_B","value":"\u0411"},{"inputid":"ime_keyboard_letters_N","value":"\u041D"},{"inputid":"ime_keyboard_letters_M","value":"\u041C"},
    {"inputid":"ime_keyboard_letters_comma","value":"\u0428"},{"inputid":"ime_keyboard_letters_point","value":"\u0402"},{"inputid":"ime_keyboard_letters_question","value":"\u0416"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_1","value":"\\"},{"inputid":"ime_keyboard_letters_2","value":"@"},
    {"inputid":"ime_keyboard_letters_3","value":","},{"inputid":"ime_keyboard_letters_at","value":"."},{"inputid":"ime_keyboard_letters_language","value":"Serbian"}
];

var serbian_small_values=[{"inputid":"ime_keyboard_letters_Q","value":"\u0459"},{"inputid":"ime_keyboard_letters_W","value":"\u045A"},
    {"inputid":"ime_keyboard_letters_E","value":"\u0435"},{"inputid":"ime_keyboard_letters_R","value":"\u0440"},{"inputid":"ime_keyboard_letters_T","value":"\u0442"},
    {"inputid":"ime_keyboard_letters_Y","value":"\u0437"},{"inputid":"ime_keyboard_letters_U","value":"\u0443"},{"inputid":"ime_keyboard_letters_I","value":"\u0438"},
    {"inputid":"ime_keyboard_letters_O","value":"\u043E"},{"inputid":"ime_keyboard_letters_P","value":"\u043F"},{"inputid":"ime_keyboard_letters_A","value":"\u0430"},
    {"inputid":"ime_keyboard_letters_S","value":"\u0441"},{"inputid":"ime_keyboard_letters_D","value":"\u0434"},{"inputid":"ime_keyboard_letters_F","value":"\u0444"},
    {"inputid":"ime_keyboard_letters_G","value":"\u0433"},{"inputid":"ime_keyboard_letters_H","value":"\u0445"},{"inputid":"ime_keyboard_letters_J","value":"\u0458"},
    {"inputid":"ime_keyboard_letters_K","value":"\u043A"},{"inputid":"ime_keyboard_letters_L","value":"\u043B"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u0447"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u045B"},{"inputid":"ime_keyboard_letters_Z","value":"\u0455"},
    {"inputid":"ime_keyboard_letters_X","value":"\u045F"},{"inputid":"ime_keyboard_letters_C","value":"\u0446"},{"inputid":"ime_keyboard_letters_V","value":"\u0432"},
    {"inputid":"ime_keyboard_letters_B","value":"\u0431"},{"inputid":"ime_keyboard_letters_N","value":"\u043D"},{"inputid":"ime_keyboard_letters_M","value":"\u043C"},
    {"inputid":"ime_keyboard_letters_comma","value":"\u0448"},{"inputid":"ime_keyboard_letters_point","value":"\u0452"},{"inputid":"ime_keyboard_letters_question","value":"\u0436"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_1","value":"\\"},{"inputid":"ime_keyboard_letters_2","value":"@"},
    {"inputid":"ime_keyboard_letters_3","value":","},{"inputid":"ime_keyboard_letters_at","value":"."},{"inputid":"ime_keyboard_letters_language","value":"Serbian"}
];


var serbian_hardkeyboard_values = [
    {"value":"\u0459","keycode":0x171},{"value":"\u045A","keycode":0x177},
    {"value":"\u0435","keycode":0x165},{"value":"\u0440","keycode":0x172},{"value":"\u0442","keycode":0x174},
    {"value":"\u0437","keycode":0x179},{"value":"\u0443","keycode":0x175},{"value":"\u0438","keycode":0x169},
    {"value":"\u043E","keycode":0x16F},{"value":"\u043F","keycode":0x170},{"value":"\u0430","keycode":0x161},
    {"value":"\u0441","keycode":0x173},{"value":"\u0434","keycode":0x164},{"value":"\u0444","keycode":0x166},
    {"value":"\u0433","keycode":0x167},{"value":"\u0445","keycode":0x168},{"value":"\u0458","keycode":0x16A},
    {"value":"\u043A","keycode":0x16B},{"value":"\u043B","keycode":0x16C},{"value":"!","keycode":0x21},
    {"value":"-","keycode":0x2F},{"value":"\u0455","keycode":0x17A},
    {"value":"\u045F","keycode":0x178},{"value":"\u0446","keycode":0x163},{"value":"\u0432","keycode":0x176},
    {"value":"\u0431","keycode":0x162},{"value":"\u043D","keycode":0x16E},{"value":"\u043C","keycode":0x16D},
    {"value":",","keycode":0x2C},{"value":".","keycode":0x2E},{"value":"_","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":"\u0409","keycode":0x51},{"value":"\u040A","keycode":0x57},
    {"value":"\u0415","keycode":0x45},{"value":"\u0420","keycode":0x52},{"value":"\u0422","keycode":0x54},
    {"value":"\u0417","keycode":0x59},{"value":"\u0423","keycode":0x55},{"value":"\u0418","keycode":0x49},
    {"value":"\u041E","keycode":0x4F},{"value":"\u041F","keycode":0x50},{"value":"\u0410","keycode":0x41},
    {"value":"\u0421","keycode":0x53},{"value":"\u0414","keycode":0x44},{"value":"\u0424","keycode":0x46},
    {"value":"\u0413","keycode":0x47},{"value":"\u0425","keycode":0x48},{"value":"\u0408","keycode":0x4A},
    {"value":"\u041A","keycode":0x4B},{"value":"\u041B","keycode":0x4C},{"value":"\u0405","keycode":0x5A},
    {"value":"\u040F","keycode":0x58},{"value":"\u0426","keycode":0x43},{"value":"\u0412","keycode":0x56},
    {"value":"\u0411","keycode":0x42},{"value":"\u041D","keycode":0x4E},{"value":"\u041C","keycode":0x4D},
    {"value":"1","keycode":0x31},{"value":"2","keycode":0x32},
    {"value":"3","keycode":0x33},{"value":"4","keycode":0x34},{"value":"5","keycode":0x35},
    {"value":"6","keycode":0x36},{"value":"7","keycode":0x37},{"value":"8","keycode":0x38},
    {"value":"9","keycode":0x39},{"value":"0","keycode":0x30},{"value":"\u0436","keycode":0x5C},
    {"value":"#","keycode":0x23},{"value":"$","keycode":0x24},{"value":"%","keycode":0x125},
    {"value":"/","keycode":0x126},{"value":"(","keycode":0x2A},{"value":")","keycode":0x128},
    {"value":"=","keycode":0x29},{"value":"?","keycode":0x5F},
    {"value":"\u0427","keycode":0x3A},{"value":"\u0447","keycode":0x3B},{"value":"\u040B","keycode":0x22},
    {"value":"\u045B","keycode":0x127},{"value":";","keycode":0x3C},{"value":":","keycode":0x3E},
    {"value":"\u0448","keycode":0x5B},{"value":"\u0452","keycode":0x5D},
    {"value":"\u0428","keycode":0x7B},{"value":"\u0402","keycode":0x7D},{"value":"*","keycode":0x2B},
    {"value":"\'","keycode":0x2D}, {"value":"+","keycode":0x3D},{"value":"`","keycode":0x60},
    {"value":"\"","keycode":0x40},{"value":"\u0416","keycode":0x7C}, {"value":"&","keycode":0x5E},{"value":"~","keycode":0x7E},
    {"value":"\u20AC","keycode":0x365},{"value":"<","keycode":0x22C},{"value":">","keycode":0x22E},
];

var serbian_specialhardkeyboard_values = [
    {"value":"\u0428","keycode":0x5B},{"value":"\u0448","keycode":0x7B},{"value":"\u0402","keycode":0x5D}, {"value":"\u0452","keycode":0x7D},
    {"value":"\u0416","keycode":0x5C},{"value":"\u0436","keycode":0x7C},{"value":"\u0447","keycode":0x3A},{"value":"\u0427","keycode":0x3B},
    {"value":"\u045B","keycode":0x22}, {"value":"\u040B","keycode":0x127},
];


var hebrew_small_values = [
        {"inputid":"ime_keyboard_letters_/","value":"/"},
        {"inputid":"ime_keyboard_letters_\u05F3","value":"\u05F3"},
        {"inputid":"ime_keyboard_letters_\u05E7","value":"\u05E7"},
        {"inputid":"ime_keyboard_letters_\u05E8","value":"\u05E8"},
        {"inputid":"ime_keyboard_letters_\u05D0","value":"\u05D0"},
        {"inputid":"ime_keyboard_letters_\u05D8","value":"\u05D8"},
        {"inputid":"ime_keyboard_letters_\u05D5","value":"\u05D5"},
        {"inputid":"ime_keyboard_letters_\u05DF","value":"\u05DF"},
        {"inputid":"ime_keyboard_letters_\u05DD","value":"\u05DD"},
        {"inputid":"ime_keyboard_letters_\u05E4","value":"\u05E4"},
        {"inputid":"ime_keyboard_letters_\u05E9","value":"\u05E9"},
        {"inputid":"ime_keyboard_letters_\u05D3","value":"\u05D3"},
        {"inputid":"ime_keyboard_letters_\u05D2","value":"\u05D2"},
        {"inputid":"ime_keyboard_letters_\u05DB","value":"\u05DB"},
        {"inputid":"ime_keyboard_letters_\u05E2","value":"\u05E2"},
        {"inputid":"ime_keyboard_letters_\u05D9","value":"\u05D9"},
        {"inputid":"ime_keyboard_letters_\u05D7","value":"\u05D7"},
        {"inputid":"ime_keyboard_letters_\u05DC","value":"\u05DC"},
        {"inputid":"ime_keyboard_letters_\u05DA","value":"\u05DA"},
        {"inputid":"ime_keyboard_letters_\u05E3","value":"\u05E3"},
        {"inputid":"ime_keyboard_letters_,","value":","},
        {"inputid":"ime_keyboard_letters_\u05D6","value":"\u05D6"},
        {"inputid":"ime_keyboard_letters_\u05E1","value":"\u05E1"},
        {"inputid":"ime_keyboard_letters_\u05D1","value":"\u05D1"},
        {"inputid":"ime_keyboard_letters_\u05D4","value":"\u05D4"},
        {"inputid":"ime_keyboard_letters_\u05E0","value":"\u05E0"},
        {"inputid":"ime_keyboard_letters_\u05DE","value":"\u05DE"},
        {"inputid":"ime_keyboard_letters_\u05E6","value":"\u05E6"},
        {"inputid":"ime_keyboard_letters_\u05EA","value":"\u05EA"},
        {"inputid":"ime_keyboard_letters_\u05E5","value":"\u05E5"},
        {"inputid":"ime_keyboard_letters_.","value":"."},
        {"inputid":"ime_keyboard_letters_;","value":";"},
        {"inputid":"ime_keyboard_letters_language","value":"Hebrew"},
        {"inputid":"ime_keyboard_letters_number","value":"123#"}
];


var hebrew_hardkeyboard_values = [
    {"value":"/","keycode":0x171},{"value":"\u0027\u0027","keycode":0x177},
    {"value":"\u05E7","keycode":0x165},{"value":"\u05E8","keycode":0x172},{"value":"\u05D0","keycode":0x174},
    {"value":"\u05D8","keycode":0x179},{"value":"\u05D5","keycode":0x175},{"value":"\u05DF","keycode":0x169},
    {"value":"\u05DD","keycode":0x16F},{"value":"\u05E4","keycode":0x170},{"value":"\u05E9","keycode":0x161},
    {"value":"\u05D3","keycode":0x173},{"value":"\u05D2","keycode":0x164},{"value":"\u05DB","keycode":0x166},
    {"value":"\u05E2","keycode":0x167},{"value":"\u05D9","keycode":0x168},{"value":"\u05D7","keycode":0x16A},
    {"value":"\u05DC","keycode":0x16B},{"value":"\u05DA","keycode":0x16C},{"value":"!","keycode":0x21},
    {"value":".","keycode":0x2F},{"value":"\u05D6","keycode":0x17A},
    {"value":"\u05E1","keycode":0x178},{"value":"\u05D1","keycode":0x163},{"value":"\u05D4","keycode":0x176},
    {"value":"\u05E0","keycode":0x162},{"value":"\u05DE","keycode":0x16E},{"value":"\u05E6","keycode":0x16D},
    {"value":"\u05EA","keycode":0x2C},{"value":"\u05E5","keycode":0x2E},{"value":"?","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":"Q","keycode":0x51},{"value":"W","keycode":0x57},
    {"value":"E","keycode":0x45},{"value":"R","keycode":0x52},{"value":"T","keycode":0x54},
    {"value":"Y","keycode":0x59},{"value":"U","keycode":0x55},{"value":"I","keycode":0x49},
    {"value":"O","keycode":0x4F},{"value":"P","keycode":0x50},{"value":"A","keycode":0x41},
    {"value":"S","keycode":0x53},{"value":"D","keycode":0x44},{"value":"F","keycode":0x46},
    {"value":"G","keycode":0x47},{"value":"H","keycode":0x48},{"value":"J","keycode":0x4A},
    {"value":"K","keycode":0x4B},{"value":"L","keycode":0x4C},{"value":"Z","keycode":0x5A},
    {"value":"X","keycode":0x58},{"value":"C","keycode":0x43},{"value":"V","keycode":0x56},
    {"value":"B","keycode":0x42},{"value":"N","keycode":0x4E},{"value":"M","keycode":0x4D},
    {"value":"1","keycode":0x31},{"value":"2","keycode":0x32},
    {"value":"3","keycode":0x33},{"value":"4","keycode":0x34},{"value":"5","keycode":0x35},
    {"value":"6","keycode":0x36},{"value":"7","keycode":0x37},{"value":"8","keycode":0x38},
    {"value":"9","keycode":0x39},{"value":"0","keycode":0x30},{"value":"\\","keycode":0x5C},
    {"value":"#","keycode":0x23},{"value":"$","keycode":0x24},{"value":"%","keycode":0x125},
    {"value":"&","keycode":0x126},{"value":"*","keycode":0x2A},{"value":")","keycode":0x128},
    {"value":"(","keycode":0x29},{"value":"_","keycode":0x5F},
    {"value":":","keycode":0x3A},{"value":";","keycode":0x3B},{"value":"\"","keycode":0x22},
    {"value":"\'","keycode":0x127},{"value":">","keycode":0x3C},{"value":"<","keycode":0x3E},
    {"value":"]","keycode":0x5B},{"value":"[","keycode":0x5D},
    {"value":"}","keycode":0x7B},{"value":"{","keycode":0x7D},{"value":"+","keycode":0x2B},
    {"value":"-","keycode":0x2D}, {"value":"=","keycode":0x3D},{"value":";","keycode":0x60},
    {"value":"@","keycode":0x40},{"value":"|","keycode":0x7C}, {"value":"^","keycode":0x5E},{"value":"~","keycode":0x7E},
    {"value":"\u20aa","keycode":0x234}, {"value":"\u05bf","keycode":0x22D},{"value":"\u20ac","keycode":0x365},
    {"value":"\u05f0","keycode":0x375}, {"value":"\u05f2","keycode":0x368},{"value":"\u05f1","keycode":0x36A},
];


var farsi_hardkeyboard_values = [
    {"value":"\u0636","keycode":0x171},{"value":"\u0635","keycode":0x177},
    {"value":"\u062B","keycode":0x165},{"value":"\u0642","keycode":0x172},{"value":"\u0641","keycode":0x174},
    {"value":"\u063A","keycode":0x179},{"value":"\u0639","keycode":0x175},{"value":"\u0647","keycode":0x169},
    {"value":"\u062E","keycode":0x16F},{"value":"\u062D","keycode":0x170},{"value":"\u0634","keycode":0x161},
    {"value":"\u0633","keycode":0x173},{"value":"\u06CC","keycode":0x164},{"value":"\u0628","keycode":0x166},
    {"value":"\u0644","keycode":0x167},{"value":"\u0627","keycode":0x168},{"value":"\u062A","keycode":0x16A},
    {"value":"\u0646","keycode":0x16B},{"value":"\u0645","keycode":0x16C},{"value":"!","keycode":0x21},
    {"value":"/","keycode":0x2F},{"value":"\u0638","keycode":0x17A},
    {"value":"\u0637","keycode":0x178},{"value":"\u0632","keycode":0x163},{"value":"\u0631","keycode":0x176},
    {"value":"\u0630","keycode":0x162},{"value":"\u062F","keycode":0x16E},{"value":"\u0626","keycode":0x16D},
    {"value":"\u0648","keycode":0x2C},{"value":".","keycode":0x2E},{"value":"\u061F","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":"\u064B","keycode":0x51},{"value":"\u064C","keycode":0x57},
    {"value":"\u064D","keycode":0x45},{"value":"\u0631\u064A\u0627\u0644","keycode":0x52},{"value":"\u060C","keycode":0x54},
    {"value":"\u061B","keycode":0x59},{"value":",","keycode":0x55},{"value":"]","keycode":0x49},
    {"value":"[","keycode":0x4F},{"value":"\\","keycode":0x50},{"value":"\u064E","keycode":0x41},
    {"value":"\u064F","keycode":0x53},{"value":"\u0650","keycode":0x44},{"value":"\u0651","keycode":0x46},
    {"value":"\u06C0","keycode":0x47},{"value":"\u0622","keycode":0x48},{"value":"\u0640","keycode":0x4A},
    {"value":"\u00AB","keycode":0x4B},{"value":"\u00BB","keycode":0x4C},{"value":"\u0629","keycode":0x5A},
    {"value":"\u064A","keycode":0x58},{"value":"\u0698","keycode":0x43},{"value":"\u0624","keycode":0x56},
    {"value":"\u0625","keycode":0x42},{"value":"\u0623","keycode":0x4E},{"value":"\u0621","keycode":0x4D},
    {"value":"1","keycode":0x31},{"value":"2","keycode":0x32},
    {"value":"3","keycode":0x33},{"value":"4","keycode":0x34},{"value":"5","keycode":0x35},
    {"value":"6","keycode":0x36},{"value":"7","keycode":0x37},{"value":"8","keycode":0x38},
    {"value":"9","keycode":0x39},{"value":"0","keycode":0x30},{"value":"\u067E","keycode":0x5C},
    {"value":"#","keycode":0x23},{"value":"$","keycode":0x24},{"value":"%","keycode":0x125},
    {"value":"&","keycode":0x126},{"value":"*","keycode":0x2A},{"value":")","keycode":0x128},
    {"value":"(","keycode":0x29},{"value":"_","keycode":0x5F},
    {"value":":","keycode":0x3A},{"value":";","keycode":0x3B},{"value":"\"","keycode":0x22},
    {"value":"\u06AF","keycode":0x127},{"value":"<","keycode":0x3C},{"value":">","keycode":0x3E},
    {"value":"\u062C","keycode":0x5B},{"value":"\u0686","keycode":0x5D},
    {"value":"}","keycode":0x7B},{"value":"{","keycode":0x7D},{"value":"+","keycode":0x2B},
    {"value":"-","keycode":0x2D}, {"value":"=","keycode":0x3D},{"value":"\u00F7","keycode":0x60},
    {"value":"@","keycode":0x40},{"value":"|","keycode":0x7C}, {"value":"^","keycode":0x5E},{"value":"~","keycode":0x7E},
];


var arabic_small_values = [
        {"inputid":"ime_keyboard_letters_\u0630","value":"\u0630"},
        {"inputid":"ime_keyboard_letters_\u0636","value":"\u0636"},
        {"inputid":"ime_keyboard_letters_\u0635","value":"\u0635"},
        {"inputid":"ime_keyboard_letters_\u062B","value":"\u062B"},
        {"inputid":"ime_keyboard_letters_\u0642","value":"\u0642"},
        {"inputid":"ime_keyboard_letters_\u0641","value":"\u0641"},
        {"inputid":"ime_keyboard_letters_\u063A","value":"\u063A"},
        {"inputid":"ime_keyboard_letters_\u0639","value":"\u0639"},
        {"inputid":"ime_keyboard_letters_\u062E","value":"\u062E"},
        {"inputid":"ime_keyboard_letters_\u062D","value":"\u062D"},
        {"inputid":"ime_keyboard_letters_\u062C","value":"\u062C"},
        {"inputid":"ime_keyboard_letters_\u0634","value":"\u0634"},
        {"inputid":"ime_keyboard_letters_\u0633","value":"\u0633"},
        {"inputid":"ime_keyboard_letters_\u064A","value":"\u064A"},
        {"inputid":"ime_keyboard_letters_\u0628","value":"\u0628"},
        {"inputid":"ime_keyboard_letters_\u0644","value":"\u0644"},
        {"inputid":"ime_keyboard_letters_\u0627","value":"\u0627"},
        {"inputid":"ime_keyboard_letters_\u062A","value":"\u062A"},
        {"inputid":"ime_keyboard_letters_\u0646","value":"\u0646"},
        {"inputid":"ime_keyboard_letters_\u0645","value":"\u0645"},
        {"inputid":"ime_keyboard_letters_\u0643","value":"\u0643"},
        {"inputid":"ime_keyboard_letters_\u0637","value":"\u0637"},
        {"inputid":"ime_keyboard_letters_\u062F","value":"\u062F"},
        {"inputid":"ime_keyboard_letters_\u0621","value":"\u0621"},
        {"inputid":"ime_keyboard_letters_\u0624","value":"\u0624"},
        {"inputid":"ime_keyboard_letters_\u0626","value":"\u0626"},
        {"inputid":"ime_keyboard_letters_\u0631","value":"\u0631"},
        {"inputid":"ime_keyboard_letters_\u0644\u0627","value":"\u0644\u0627"},
        {"inputid":"ime_keyboard_letters_\u0649","value":"\u0649"},
        {"inputid":"ime_keyboard_letters_\u0629","value":"\u0629"},
        {"inputid":"ime_keyboard_letters_\u0647","value":"\u0647"},
        {"inputid":"ime_keyboard_letters_\u0648","value":"\u0648"},
        {"inputid":"ime_keyboard_letters_\u0632","value":"\u0632"},
        {"inputid":"ime_keyboard_letters_\u0638","value":"\u0638"},
        {"inputid":"ime_keyboard_letters_\u060c","value":"\u060c"},
        {"inputid":"ime_keyboard_letters_\u002e","value":"\u002e"},
        {"inputid":"ime_keyboard_letters_language","value":"Arabic"}
];

var arabic_hardkeyboard_values = [
    {"value":"\u0636","keycode":0x171},{"value":"\u0635","keycode":0x177},
    {"value":"\u062B","keycode":0x165},{"value":"\u0642","keycode":0x172},{"value":"\u0641","keycode":0x174},
    {"value":"\u063A","keycode":0x179},{"value":"\u0639","keycode":0x175},{"value":"\u0647","keycode":0x169},
    {"value":"\u062E","keycode":0x16F},{"value":"\u062D","keycode":0x170},{"value":"\u0634","keycode":0x161},
    {"value":"\u0633","keycode":0x173},{"value":"\u064A","keycode":0x164},{"value":"\u0628","keycode":0x166},
    {"value":"\u0644","keycode":0x167},{"value":"\u0627","keycode":0x168},{"value":"\u062A","keycode":0x16A},
    {"value":"\u0646","keycode":0x16B},{"value":"\u0645","keycode":0x16C},{"value":"!","keycode":0x21},
    {"value":"\u0638","keycode":0x2F},{"value":"\u0626","keycode":0x17A},
    {"value":"\u0621","keycode":0x178},{"value":"\u0624","keycode":0x163},{"value":"\u0631","keycode":0x176},
    {"value":"\u0644\u0627","keycode":0x162},{"value":"\u0649","keycode":0x16E},{"value":"\u0629","keycode":0x16D},
    {"value":"\u0648","keycode":0x2C},{"value":"\u0632","keycode":0x2E},{"value":"\u061F","keycode":0x3F},
    {"value":" ","keycode":0x20}, {"value":"\u064E","keycode":0x51},{"value":"\u064B","keycode":0x57},
    {"value":"\u064F","keycode":0x45},{"value":"\u064C","keycode":0x52},{"value":"\u0644\u0625","keycode":0x54},
    {"value":"\u0625","keycode":0x59},{"value":"\u2018","keycode":0x55},{"value":"\u00F7","keycode":0x49},
    {"value":"\u00D7","keycode":0x4F},{"value":"\u061B","keycode":0x50},{"value":"\u0650","keycode":0x41},
    {"value":"\u064D","keycode":0x53},{"value":"]","keycode":0x44},{"value":"[","keycode":0x46},
    {"value":"\u0644\u0623","keycode":0x47},{"value":"\u0623","keycode":0x48},{"value":"\u0640","keycode":0x4A},
    {"value":"\u060c","keycode":0x4B},{"value":"/","keycode":0x4C},{"value":"~","keycode":0x5A},
    {"value":"\u0652","keycode":0x58},{"value":"}","keycode":0x43},{"value":"{","keycode":0x56},
    {"value":"\u0644\u0622","keycode":0x42},{"value":"\u0622","keycode":0x4E},{"value":"\'","keycode":0x4D},
    {"value":"1","keycode":0x31},{"value":"2","keycode":0x32},
    {"value":"3","keycode":0x33},{"value":"4","keycode":0x34},{"value":"5","keycode":0x35},
    {"value":"6","keycode":0x36},{"value":"7","keycode":0x37},{"value":"8","keycode":0x38},
    {"value":"9","keycode":0x39},{"value":"0","keycode":0x30},{"value":"\\","keycode":0x5C},
    {"value":"#","keycode":0x23},{"value":"$","keycode":0x24},{"value":"%","keycode":0x125},
    {"value":"&","keycode":0x126},{"value":"*","keycode":0x2A},{"value":"(","keycode":0x128},
    {"value":")","keycode":0x29},{"value":"_","keycode":0x5F},
    {"value":":","keycode":0x3A},{"value":"\u0643","keycode":0x3B},{"value":"\"","keycode":0x22},
    {"value":"\u0637","keycode":0x127},{"value":",","keycode":0x3C},{"value":".","keycode":0x3E},
    {"value":"\u062F","keycode":0x5D},{"value":"[","keycode":0x5B},
    {"value":"<","keycode":0x7B},{"value":">","keycode":0x7D},{"value":"+","keycode":0x2B},
    {"value":"-","keycode":0x2D}, {"value":"=","keycode":0x3D},{"value":"\u0630","keycode":0x60},
    {"value":"@","keycode":0x40},{"value":"|","keycode":0x7C}, {"value":"^","keycode":0x5E},{"value":"\u0651","keycode":0x7E},
    {"value":"2","keycode":0x232},{"value":"\u062F","keycode":0x25D},
    {"value":"3","keycode":0x233},{"value":"4","keycode":0x234},{"value":"5","keycode":0x235},
    {"value":"6","keycode":0x236},{"value":"7","keycode":0x237},{"value":"8","keycode":0x238},
    {"value":"9","keycode":0x239},{"value":"0","keycode":0x230},
    {"value":"-","keycode":0x22D}, {"value":"=","keycode":0x23D}, {"value":"\u062B","keycode":0x365},
];

var arabic_big_values = [{"inputid":"ime_keyboard_letters_Q","value":"\u0661"},{"inputid":"ime_keyboard_letters_W","value":"\u0662"},
    {"inputid":"ime_keyboard_letters_E","value":"\u0663"},{"inputid":"ime_keyboard_letters_R","value":"\u0664"},{"inputid":"ime_keyboard_letters_T","value":"\u0665"},
    {"inputid":"ime_keyboard_letters_Y","value":"\u0666"},{"inputid":"ime_keyboard_letters_U","value":"\u0667"},{"inputid":"ime_keyboard_letters_I","value":"\u0668"},
    {"inputid":"ime_keyboard_letters_O","value":"\u0669"},{"inputid":"ime_keyboard_letters_P","value":"\u0660"},{"inputid":"ime_keyboard_letters_A","value":"\u0000\u0651"},
    {"inputid":"ime_keyboard_letters_S","value":"\u064E"},{"inputid":"ime_keyboard_letters_D","value":"\u064B"},{"inputid":"ime_keyboard_letters_F","value":"\u064F"},
    {"inputid":"ime_keyboard_letters_G","value":"\u064C"},{"inputid":"ime_keyboard_letters_H","value":"\u0650"},{"inputid":"ime_keyboard_letters_J","value":"\u064D"},
    {"inputid":"ime_keyboard_letters_K","value":"\u0652"},{"inputid":"ime_keyboard_letters_L","value":"\u0640"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u060C"},
    {"inputid":"ime_keyboard_letters_slash","value":":"},{"inputid":"ime_keyboard_letters_shift","value":""},{"inputid":"ime_keyboard_letters_Z","value":"\u0621"},
    {"inputid":"ime_keyboard_letters_X","value":"\u0624"},{"inputid":"ime_keyboard_letters_C","value":"\u0644\u0623"},{"inputid":"ime_keyboard_letters_V","value":"\u0644\u0625"},
    {"inputid":"ime_keyboard_letters_B","value":"\u0644\u0622"},{"inputid":"ime_keyboard_letters_N","value":"\u0623"},{"inputid":"ime_keyboard_letters_M","value":"\u0623"},
    {"inputid":"ime_keyboard_letters_comma","value":"\u0622"},{"inputid":"ime_keyboard_letters_point","value":"\u061B"},{"inputid":"ime_keyboard_letters_question","value":"\u061F"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_language","value":"Arabic"}
];




var uzbek_small_values = [{"inputid":"ime_keyboard_letters_Q","value":"q"},{"inputid":"ime_keyboard_letters_W","value":"w"},
    {"inputid":"ime_keyboard_letters_E","value":"e"},{"inputid":"ime_keyboard_letters_R","value":"r"},{"inputid":"ime_keyboard_letters_T","value":"t"},
    {"inputid":"ime_keyboard_letters_Y","value":"y"},{"inputid":"ime_keyboard_letters_U","value":"u"},{"inputid":"ime_keyboard_letters_I","value":"i"},
    {"inputid":"ime_keyboard_letters_O","value":"o"},{"inputid":"ime_keyboard_letters_P","value":"p"},{"inputid":"ime_keyboard_letters_A","value":"a"},
    {"inputid":"ime_keyboard_letters_S","value":"s"},{"inputid":"ime_keyboard_letters_D","value":"d"},{"inputid":"ime_keyboard_letters_F","value":"f"},
    {"inputid":"ime_keyboard_letters_G","value":"g"},{"inputid":"ime_keyboard_letters_H","value":"h"},{"inputid":"ime_keyboard_letters_J","value":"j"},
    {"inputid":"ime_keyboard_letters_K","value":"k"},{"inputid":"ime_keyboard_letters_L","value":"l"},{"inputid":"ime_keyboard_letters_exclamation","value":"'"},
    {"inputid":"ime_keyboard_letters_slash","value":":"},{"inputid":"ime_keyboard_letters_shift","value":""},{"inputid":"ime_keyboard_letters_Z","value":"z"},
    {"inputid":"ime_keyboard_letters_X","value":"x"},{"inputid":"ime_keyboard_letters_C","value":"c"},{"inputid":"ime_keyboard_letters_V","value":"v"},
    {"inputid":"ime_keyboard_letters_B","value":"b"},{"inputid":"ime_keyboard_letters_N","value":"n"},{"inputid":"ime_keyboard_letters_M","value":"m"},
    {"inputid":"ime_keyboard_letters_comma","value":","},{"inputid":"ime_keyboard_letters_point","value":"."},{"inputid":"ime_keyboard_letters_question","value":";"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_language","value":"Uzbek"}
];

var uzbek_big_values = [{"inputid":"ime_keyboard_letters_Q","value":"Q"},{"inputid":"ime_keyboard_letters_W","value":"W"},
    {"inputid":"ime_keyboard_letters_E","value":"E"},{"inputid":"ime_keyboard_letters_R","value":"R"},{"inputid":"ime_keyboard_letters_T","value":"T"},
    {"inputid":"ime_keyboard_letters_Y","value":"Y"},{"inputid":"ime_keyboard_letters_U","value":"U"},{"inputid":"ime_keyboard_letters_I","value":"I"},
    {"inputid":"ime_keyboard_letters_O","value":"O"},{"inputid":"ime_keyboard_letters_P","value":"P"},{"inputid":"ime_keyboard_letters_A","value":"A"},
    {"inputid":"ime_keyboard_letters_S","value":"S"},{"inputid":"ime_keyboard_letters_D","value":"D"},{"inputid":"ime_keyboard_letters_F","value":"F"},
    {"inputid":"ime_keyboard_letters_G","value":"G"},{"inputid":"ime_keyboard_letters_H","value":"H"},{"inputid":"ime_keyboard_letters_J","value":"J"},
    {"inputid":"ime_keyboard_letters_K","value":"K"},{"inputid":"ime_keyboard_letters_L","value":"L"},{"inputid":"ime_keyboard_letters_exclamation","value":"'"},
    {"inputid":"ime_keyboard_letters_slash","value":":"},{"inputid":"ime_keyboard_letters_shift","value":""},{"inputid":"ime_keyboard_letters_Z","value":"Z"},
    {"inputid":"ime_keyboard_letters_X","value":"X"},{"inputid":"ime_keyboard_letters_C","value":"C"},{"inputid":"ime_keyboard_letters_V","value":"V"},
    {"inputid":"ime_keyboard_letters_B","value":"B"},{"inputid":"ime_keyboard_letters_N","value":"N"},{"inputid":"ime_keyboard_letters_M","value":"M"},
    {"inputid":"ime_keyboard_letters_comma","value":","},{"inputid":"ime_keyboard_letters_point","value":"."},{"inputid":"ime_keyboard_letters_question","value":";"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_language","value":"Uzbek"}
];

var thai_small_values = [
    {"inputid":"ime_keyboard_letters_\u0E45","value":"\u0E45"},
    {"inputid":"ime_keyboard_letters_\u05DA","value":"/"},
    {"inputid":"ime_keyboard_letters_\u05E3","value":"-"},
    {"inputid":"ime_keyboard_letters_\u0E20","value":"\u0E20"},
    {"inputid":"ime_keyboard_letters_\u0E16","value":"\u0E16"},
    {"inputid":"ime_keyboard_letters_\u0E38","value":"\u0E38"},
    {"inputid":"ime_keyboard_letters_\u0E36","value":"\u0E36"},
    {"inputid":"ime_keyboard_letters_\u0E04","value":"\u0E04"},
    {"inputid":"ime_keyboard_letters_\u0E15","value":"\u0E15"},
    {"inputid":"ime_keyboard_letters_\u0E08","value":"\u0E08"},
    {"inputid":"ime_keyboard_letters_\u0E02","value":"\u0E02"},
    {"inputid":"ime_keyboard_letters_\u0E0A","value":"\u0E0A"},

    {"inputid":"ime_keyboard_letters_\u0E46","value":"\u0E46"},
    {"inputid":"ime_keyboard_letters_\u0E44","value":"\u0E44"},
    {"inputid":"ime_keyboard_letters_\u0E33","value":"\u0E33"},
    {"inputid":"ime_keyboard_letters_\u0E1E","value":"\u0E1E"},
    {"inputid":"ime_keyboard_letters_\u0E30","value":"\u0E30"},
    {"inputid":"ime_keyboard_letters_\u0E31","value":"\u0E31"},
    {"inputid":"ime_keyboard_letters_\u0E35","value":"\u0E35"},
    {"inputid":"ime_keyboard_letters_\u0E23","value":"\u0E23"},
    {"inputid":"ime_keyboard_letters_\u0E19","value":"\u0E19"},
    {"inputid":"ime_keyboard_letters_\u0E22","value":"\u0E22"},
    {"inputid":"ime_keyboard_letters_\u0E1A","value":"\u0E1A"},
    {"inputid":"ime_keyboard_letters_\u0E25","value":"\u0E25"},

    {"inputid":"ime_keyboard_letters_\u0E1F","value":"\u0E1F"},
    {"inputid":"ime_keyboard_letters_\u0E2B","value":"\u0E2B"},
    {"inputid":"ime_keyboard_letters_\u0E01","value":"\u0E01"},
    {"inputid":"ime_keyboard_letters_\u0E14","value":"\u0E14"},
    {"inputid":"ime_keyboard_letters_\u0E40","value":"\u0E40"},
    {"inputid":"ime_keyboard_letters_\u0E49","value":"\u0E49"},
    {"inputid":"ime_keyboard_letters_\u0E48","value":"\u0E48"},
    {"inputid":"ime_keyboard_letters_\u0E32","value":"\u0E32"},
    {"inputid":"ime_keyboard_letters_\u0E2A","value":"\u0E2A"},
    {"inputid":"ime_keyboard_letters_\u0E27","value":"\u0E27"},
    {"inputid":"ime_keyboard_letters_\u0E07","value":"\u0E07"},
    {"inputid":"ime_keyboard_letters_\u0E03","value":"\u0E03"},

    {"inputid":"ime_keyboard_letters_\u0E1C","value":"\u0E1C"},
    {"inputid":"ime_keyboard_letters_\u0E1B","value":"\u0E1B"},
    {"inputid":"ime_keyboard_letters_\u0E41","value":"\u0E41"},
    {"inputid":"ime_keyboard_letters_\u0E2D","value":"\u0E2D"},
    {"inputid":"ime_keyboard_letters_\u0E34","value":"\u0E34"},
    {"inputid":"ime_keyboard_letters_\u0E37","value":"\u0E37"},
    {"inputid":"ime_keyboard_letters_\u0E17","value":"\u0E17"},
    {"inputid":"ime_keyboard_letters_\u0E21","value":"\u0E21"},
    {"inputid":"ime_keyboard_letters_\u0E43","value":"\u0E43"},
    {"inputid":"ime_keyboard_letters_\u0E1D","value":"\u0E1D"},

    {"inputid":"ime_keyboard_letters_language","value":"Thai"}
];

var thai_hardkeyboard_values = [
    {"value":"_","keycode":0x60},
    {"value":"\u0E45","keycode":0x31},{"value":"/","keycode":0x32},{"value":"-","keycode":0x33},{"value":"\u0E20","keycode":0x34},{"value":"\u0E16","keycode":0x35},
    {"value":"\u0E38","keycode":0x36},{"value":"\u0E36","keycode":0x37},{"value":"\u0E04","keycode":0x38},{"value":"\u0E15","keycode":0x39},{"value":"\u0E08","keycode":0x30},
    {"value":"\u0E02","keycode":0x2D},{"value":"\u0E0A","keycode":0x3D},
    {"value":"\u0E46","keycode":0x71},{"value":"\u0E44","keycode":0x77},{"value":"\u0E33","keycode":0x65},{"value":"\u0E1E","keycode":0x72},{"value":"\u0E30","keycode":0x74},
    {"value":"\u0E31","keycode":0x79},{"value":"\u0E35","keycode":0x75},{"value":"\u0E23","keycode":0x69},{"value":"\u0E19","keycode":0x6F},{"value":"\u0E22","keycode":0x70},
    {"value":"\u0E1A","keycode":0x5B},{"value":"\u0E25","keycode":0x5D},
    {"value":"\u0E1F","keycode":0x61},{"value":"\u0E2B","keycode":0x73},{"value":"\u0E01","keycode":0x64},{"value":"\u0E14","keycode":0x66},{"value":"\u0E40","keycode":0x67},
    {"value":"\u0E49","keycode":0x68},{"value":"\u0E48","keycode":0x6A},{"value":"\u0E32","keycode":0x6B},{"value":"\u0E2A","keycode":0x6C},{"value":"\u0E27","keycode":0x3B},
    {"value":"\u0E07","keycode":0x27},{"value":"\u0E03","keycode":0x5C},
    {"value":"\u0E1C","keycode":0x7A},{"value":"\u0E1B","keycode":0x78},{"value":"\u0E41","keycode":0x63},{"value":"\u0E2D","keycode":0x76},{"value":"\u0E34","keycode":0x62},
    {"value":"\u0E37","keycode":0x6E},{"value":"\u0E17","keycode":0x6D},{"value":"\u0E21","keycode":0x2C},{"value":"\u0E43","keycode":0x2E},{"value":"\u0E1D","keycode":0x2F},

    {"value":"%","keycode":0x7E},
    {"value":"+","keycode":0x21},{"value":"\u0E51","keycode":0x40},{"value":"\u0E52","keycode":0x23},{"value":"\u0E53","keycode":0x24},{"value":"\u0E54","keycode":0x25},
    {"value":"\u0E39","keycode":0x5E},{"value":"\u0E3F","keycode":0x26},{"value":"\u0E55","keycode":0x2A},{"value":"\u0E56","keycode":0x28},{"value":"\u0E57","keycode":0x29},
    {"value":"\u0E58","keycode":0x5F},{"value":"\u0E59","keycode":0x2B},
    {"value":"\u0E50","keycode":0x51},{"value":"\"","keycode":0x57}, {"value":"\u0E0E","keycode":0x45},{"value":"\u0E11","keycode":0x52},{"value":"\u0E18","keycode":0x54},
    {"value":"\u0E4D","keycode":0x59},{"value":"\u0E4A","keycode":0x55},{"value":"\u0E13","keycode":0x49}, {"value":"\u0E2F","keycode":0x4F},{"value":"\u0E0D","keycode":0x50},
    {"value":"\u0E10","keycode":0x7B},{"value":",","keycode":0x7D},
    {"value":"\u0E24","keycode":0x41},{"value":"\u0E06","keycode":0x53},{"value":"\u0E0F","keycode":0x44},{"value":"\u0E42","keycode":0x46},{"value":"\u0E0C","keycode":0x47},
    {"value":"\u0E47","keycode":0x48},{"value":"\u0E4B","keycode":0x4A},{"value":"\u0E29","keycode":0x4B},{"value":"\u0E28","keycode":0x4C},{"value":"\u0E0B","keycode":0x3A},
    {"value":".","keycode":0x22},{"value":"\u0E05","keycode":0x7C},
    {"value":"(","keycode":0x5A},{"value":")","keycode":0x58},{"value":"\u0E09","keycode":0x43},{"value":"\u0E2E","keycode":0x56},{"value":"\u0E3A","keycode":0x42},
    {"value":"\u0E4C","keycode":0x4E},{"value":"?","keycode":0x4D},{"value":"\u0E12","keycode":0x3C},{"value":"\u0E2C","keycode":0x3E},{"value":"\u0E26","keycode":0x3F},

    {"value":" ","keycode":0x20},
];

var thai_big_values = [
    {"inputid":"ime_keyboard_letters_\u0E45","value":"+"},
    {"inputid":"ime_keyboard_letters_\u05DA","value":"\u0E51"},
    {"inputid":"ime_keyboard_letters_\u05E3","value":"\u0E52"},
    {"inputid":"ime_keyboard_letters_\u0E20","value":"\u0E53"},
    {"inputid":"ime_keyboard_letters_\u0E16","value":"\u0E54"},
    {"inputid":"ime_keyboard_letters_\u0E38","value":"\u0E39"},
    {"inputid":"ime_keyboard_letters_\u0E36","value":"\u0E3F"},
    {"inputid":"ime_keyboard_letters_\u0E04","value":"\u0E55"},
    {"inputid":"ime_keyboard_letters_\u0E15","value":"\u0E56"},
    {"inputid":"ime_keyboard_letters_\u0E08","value":"\u0E57"},
    {"inputid":"ime_keyboard_letters_\u0E02","value":"\u0E58"},
    {"inputid":"ime_keyboard_letters_\u0E0A","value":"\u0E59"},

    {"inputid":"ime_keyboard_letters_\u0E46","value":"\u0E50"},
    {"inputid":"ime_keyboard_letters_\u0E44","value":"\""},
    {"inputid":"ime_keyboard_letters_\u0E33","value":"\u0E0E"},
    {"inputid":"ime_keyboard_letters_\u0E1E","value":"\u0E11"},
    {"inputid":"ime_keyboard_letters_\u0E30","value":"\u0E18"},
    {"inputid":"ime_keyboard_letters_\u0E31","value":"\u0E4D"},
    {"inputid":"ime_keyboard_letters_\u0E35","value":"\u0E4A"},
    {"inputid":"ime_keyboard_letters_\u0E23","value":"\u0E13"},
    {"inputid":"ime_keyboard_letters_\u0E19","value":"\u0E2F"},
    {"inputid":"ime_keyboard_letters_\u0E22","value":"\u0E0D"},
    {"inputid":"ime_keyboard_letters_\u0E1A","value":"\u0E10"},
    {"inputid":"ime_keyboard_letters_\u0E25","value":","},

    {"inputid":"ime_keyboard_letters_\u0E1F","value":"\u0E24"},
    {"inputid":"ime_keyboard_letters_\u0E2B","value":"\u0E06"},
    {"inputid":"ime_keyboard_letters_\u0E01","value":"\u0E0F"},
    {"inputid":"ime_keyboard_letters_\u0E14","value":"\u0E42"},
    {"inputid":"ime_keyboard_letters_\u0E40","value":"\u0E0C"},
    {"inputid":"ime_keyboard_letters_\u0E49","value":"\u0E47"},
    {"inputid":"ime_keyboard_letters_\u0E48","value":"\u0E4B"},
    {"inputid":"ime_keyboard_letters_\u0E32","value":"\u0E29"},
    {"inputid":"ime_keyboard_letters_\u0E2A","value":"\u0E28"},
    {"inputid":"ime_keyboard_letters_\u0E27","value":"\u0E0B"},
    {"inputid":"ime_keyboard_letters_\u0E07","value":"."},
    {"inputid":"ime_keyboard_letters_\u0E03","value":"\u0E05"},

    {"inputid":"ime_keyboard_letters_\u0E1C","value":"("},
    {"inputid":"ime_keyboard_letters_\u0E1B","value":")"},
    {"inputid":"ime_keyboard_letters_\u0E41","value":"\u0E09"},
    {"inputid":"ime_keyboard_letters_\u0E2D","value":"\u0E2E"},
    {"inputid":"ime_keyboard_letters_\u0E34","value":"\u0E3A"},
    {"inputid":"ime_keyboard_letters_\u0E37","value":"\u0E4C"},
    {"inputid":"ime_keyboard_letters_\u0E17","value":"?"},
    {"inputid":"ime_keyboard_letters_\u0E21","value":"\u0E12"},
    {"inputid":"ime_keyboard_letters_\u0E43","value":"\u0E2C"},
    {"inputid":"ime_keyboard_letters_\u0E1D","value":"\u0E26"},

    {"inputid":"ime_keyboard_letters_language","value":"Thai"}
];

var vietnamese_small_values = [
    {"inputid":"ime_keyboard_letters_\u00E9","value":"\u0103"},
    {"inputid":"ime_keyboard_letters_double_quotation","value":"\u00E2"},
    {"inputid":"ime_keyboard_letters_single_quotation","value":"\u00EA"},
    {"inputid":"ime_keyboard_letters_left_bracket","value":"\u00F4"},
    {"inputid":"ime_keyboard_letters_midline","value":"\u0300"},
    {"inputid":"ime_keyboard_letters_\u00E8","value":"\u0309"},
    {"inputid":"ime_keyboard_letters_baseline","value":"\u0303"},
    {"inputid":"ime_keyboard_letters_\u00E7","value":"\u0301"},
    {"inputid":"ime_keyboard_letters_\u00E0","value":"\u0323"},
    {"inputid":"ime_keyboard_letters_right_bracket","value":"\u0111"},

    {"inputid":"ime_keyboard_letters_A","value":"\u0071"},
    {"inputid":"ime_keyboard_letters_Z","value":"\u0077"},
    {"inputid":"ime_keyboard_letters_E","value":"\u0065"},
    {"inputid":"ime_keyboard_letters_R","value":"\u0072"},
    {"inputid":"ime_keyboard_letters_T","value":"\u0074"},
    {"inputid":"ime_keyboard_letters_Y","value":"\u0079"},
    {"inputid":"ime_keyboard_letters_U","value":"\u0075"},
    {"inputid":"ime_keyboard_letters_I","value":"\u0069"},
    {"inputid":"ime_keyboard_letters_O","value":"\u006F"},
    {"inputid":"ime_keyboard_letters_P","value":"\u0070"},

    {"inputid":"ime_keyboard_letters_^","value":"\u01B0"},
    {"inputid":"ime_keyboard_letters_Q","value":"\u01A1"},
    {"inputid":"ime_keyboard_letters_S","value":"\u0061"},
    {"inputid":"ime_keyboard_letters_D","value":"\u0073"},
    {"inputid":"ime_keyboard_letters_F","value":"\u0064"},
    {"inputid":"ime_keyboard_letters_G","value":"\u0066"},
    {"inputid":"ime_keyboard_letters_H","value":"\u0067"},
    {"inputid":"ime_keyboard_letters_J","value":"\u0068"},
    {"inputid":"ime_keyboard_letters_K","value":"\u006A"},
    {"inputid":"ime_keyboard_letters_L","value":"\u006B"},

    {"inputid":"ime_keyboard_letters_M","value":"\u006C"},
    {"inputid":"ime_keyboard_letters_\u00F9","value":"?"},
    {"inputid":"ime_keyboard_letters_W","value":"\u007A"},
    {"inputid":"ime_keyboard_letters_X","value":"\u0078"},
    {"inputid":"ime_keyboard_letters_C","value":"\u0063"},
    {"inputid":"ime_keyboard_letters_V","value":"\u0076"},
    {"inputid":"ime_keyboard_letters_B","value":"\u0062"},
    {"inputid":"ime_keyboard_letters_N","value":"\u006E"},
    {"inputid":"ime_keyboard_letters_comma","value":"\u006D"},
    {"inputid":"ime_keyboard_letters_point","value":"\u002C"},

    {"inputid":"ime_keyboard_letters_semicolon","value":"\u002E"},
    {"inputid":"ime_keyboard_letters_colon","value":"\""},
    {"inputid":"ime_keyboard_letters_at","value":"!"},
    {"inputid":"ime_keyboard_letters_language","value":"Vietnamese"}
];
var vietnamese_hardkeyboard_values = [

];

var vietnamese_big_values = [
    {"inputid":"ime_keyboard_letters_\u00E9","value":"\u0102"},
    {"inputid":"ime_keyboard_letters_double_quotation","value":"\u00C2"},
    {"inputid":"ime_keyboard_letters_single_quotation","value":"\u00CA"},
    {"inputid":"ime_keyboard_letters_left_bracket","value":"\u00D4"},
    {"inputid":"ime_keyboard_letters_midline","value":"\u0300"},
    {"inputid":"ime_keyboard_letters_\u00E8","value":"\u0309"},
    {"inputid":"ime_keyboard_letters_baseline","value":"\u0303"},
    {"inputid":"ime_keyboard_letters_\u00E7","value":"\u0301"},
    {"inputid":"ime_keyboard_letters_\u00E0","value":"\u0323"},
    {"inputid":"ime_keyboard_letters_right_bracket","value":"\u0110"},

    {"inputid":"ime_keyboard_letters_A","value":"\u0051"},
    {"inputid":"ime_keyboard_letters_Z","value":"\u0057"},
    {"inputid":"ime_keyboard_letters_E","value":"\u0045"},
    {"inputid":"ime_keyboard_letters_R","value":"\u0052"},
    {"inputid":"ime_keyboard_letters_T","value":"\u0054"},
    {"inputid":"ime_keyboard_letters_Y","value":"\u0059"},
    {"inputid":"ime_keyboard_letters_U","value":"\u0055"},
    {"inputid":"ime_keyboard_letters_I","value":"\u0049"},
    {"inputid":"ime_keyboard_letters_O","value":"\u004F"},
    {"inputid":"ime_keyboard_letters_P","value":"\u0050"},

    {"inputid":"ime_keyboard_letters_^","value":"\u01AF"},
    {"inputid":"ime_keyboard_letters_Q","value":"\u01A0"},
    {"inputid":"ime_keyboard_letters_S","value":"\u0041"},
    {"inputid":"ime_keyboard_letters_D","value":"\u0053"},
    {"inputid":"ime_keyboard_letters_F","value":"\u0044"},
    {"inputid":"ime_keyboard_letters_G","value":"\u0046"},
    {"inputid":"ime_keyboard_letters_H","value":"\u0047"},
    {"inputid":"ime_keyboard_letters_J","value":"\u0048"},
    {"inputid":"ime_keyboard_letters_K","value":"\u004A"},
    {"inputid":"ime_keyboard_letters_L","value":"\u004B"},

    {"inputid":"ime_keyboard_letters_M","value":"\u004C"},
    {"inputid":"ime_keyboard_letters_\u00F9","value":"?"},
    {"inputid":"ime_keyboard_letters_W","value":"\u005A"},
    {"inputid":"ime_keyboard_letters_X","value":"\u0058"},
    {"inputid":"ime_keyboard_letters_C","value":"\u0043"},
    {"inputid":"ime_keyboard_letters_V","value":"\u0056"},
    {"inputid":"ime_keyboard_letters_B","value":"\u0042"},
    {"inputid":"ime_keyboard_letters_N","value":"\u004E"},
    {"inputid":"ime_keyboard_letters_comma","value":"\u004D"},
    {"inputid":"ime_keyboard_letters_point","value":"\u002C"},

    {"inputid":"ime_keyboard_letters_semicolon","value":"\u002E"},
    {"inputid":"ime_keyboard_letters_colon","value":"\""},
    {"inputid":"ime_keyboard_letters_at","value":"!"},
    {"inputid":"ime_keyboard_letters_language","value":"Vietnamese"}
];

var malay_small_values = [{"inputid":"ime_keyboard_letters_Q","value":"q"},{"inputid":"ime_keyboard_letters_W","value":"w"},
    {"inputid":"ime_keyboard_letters_E","value":"e"},{"inputid":"ime_keyboard_letters_R","value":"r"},{"inputid":"ime_keyboard_letters_T","value":"t"},
    {"inputid":"ime_keyboard_letters_Y","value":"y"},{"inputid":"ime_keyboard_letters_U","value":"u"},{"inputid":"ime_keyboard_letters_I","value":"i"},
    {"inputid":"ime_keyboard_letters_O","value":"o"},{"inputid":"ime_keyboard_letters_P","value":"p"},{"inputid":"ime_keyboard_letters_A","value":"a"},
    {"inputid":"ime_keyboard_letters_S","value":"s"},{"inputid":"ime_keyboard_letters_D","value":"d"},{"inputid":"ime_keyboard_letters_F","value":"f"},
    {"inputid":"ime_keyboard_letters_G","value":"g"},{"inputid":"ime_keyboard_letters_H","value":"h"},{"inputid":"ime_keyboard_letters_J","value":"j"},
    {"inputid":"ime_keyboard_letters_K","value":"k"},{"inputid":"ime_keyboard_letters_L","value":"l"},{"inputid":"ime_keyboard_letters_exclamation","value":"!"},
    {"inputid":"ime_keyboard_letters_slash","value":"/"},{"inputid":"ime_keyboard_letters_shift","value":""},{"inputid":"ime_keyboard_letters_Z","value":"z"},
    {"inputid":"ime_keyboard_letters_X","value":"x"},{"inputid":"ime_keyboard_letters_C","value":"c"},{"inputid":"ime_keyboard_letters_V","value":"v"},
    {"inputid":"ime_keyboard_letters_B","value":"b"},{"inputid":"ime_keyboard_letters_N","value":"n"},{"inputid":"ime_keyboard_letters_M","value":"m"},
    {"inputid":"ime_keyboard_letters_comma","value":","},{"inputid":"ime_keyboard_letters_point","value":"."},{"inputid":"ime_keyboard_letters_question","value":"?"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_language","value":"Malay"}
];
var malay_hardkeyboard_values = [];
var malay_big_values = [{"inputid":"ime_keyboard_letters_Q","value":"Q"},{"inputid":"ime_keyboard_letters_W","value":"W"},
    {"inputid":"ime_keyboard_letters_E","value":"E"},{"inputid":"ime_keyboard_letters_R","value":"R"},{"inputid":"ime_keyboard_letters_T","value":"T"},
    {"inputid":"ime_keyboard_letters_Y","value":"Y"},{"inputid":"ime_keyboard_letters_U","value":"U"},{"inputid":"ime_keyboard_letters_I","value":"I"},
    {"inputid":"ime_keyboard_letters_O","value":"O"},{"inputid":"ime_keyboard_letters_P","value":"P"},{"inputid":"ime_keyboard_letters_A","value":"A"},
    {"inputid":"ime_keyboard_letters_S","value":"S"},{"inputid":"ime_keyboard_letters_D","value":"D"},{"inputid":"ime_keyboard_letters_F","value":"F"},
    {"inputid":"ime_keyboard_letters_G","value":"G"},{"inputid":"ime_keyboard_letters_H","value":"H"},{"inputid":"ime_keyboard_letters_J","value":"J"},
    {"inputid":"ime_keyboard_letters_K","value":"K"},{"inputid":"ime_keyboard_letters_L","value":"L"},{"inputid":"ime_keyboard_letters_exclamation","value":"!"},
    {"inputid":"ime_keyboard_letters_slash","value":"/"},{"inputid":"ime_keyboard_letters_shift","value":""},{"inputid":"ime_keyboard_letters_Z","value":"Z"},
    {"inputid":"ime_keyboard_letters_X","value":"X"},{"inputid":"ime_keyboard_letters_C","value":"C"},{"inputid":"ime_keyboard_letters_V","value":"V"},
    {"inputid":"ime_keyboard_letters_B","value":"B"},{"inputid":"ime_keyboard_letters_N","value":"N"},{"inputid":"ime_keyboard_letters_M","value":"M"},
    {"inputid":"ime_keyboard_letters_comma","value":","},{"inputid":"ime_keyboard_letters_point","value":"."},{"inputid":"ime_keyboard_letters_question","value":"?"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_language","value":"Malay"}
];

var indonesian_small_values = [{"inputid":"ime_keyboard_letters_Q","value":"q"},{"inputid":"ime_keyboard_letters_W","value":"w"},
    {"inputid":"ime_keyboard_letters_E","value":"e"},{"inputid":"ime_keyboard_letters_R","value":"r"},{"inputid":"ime_keyboard_letters_T","value":"t"},
    {"inputid":"ime_keyboard_letters_Y","value":"y"},{"inputid":"ime_keyboard_letters_U","value":"u"},{"inputid":"ime_keyboard_letters_I","value":"i"},
    {"inputid":"ime_keyboard_letters_O","value":"o"},{"inputid":"ime_keyboard_letters_P","value":"p"},{"inputid":"ime_keyboard_letters_A","value":"a"},
    {"inputid":"ime_keyboard_letters_S","value":"s"},{"inputid":"ime_keyboard_letters_D","value":"d"},{"inputid":"ime_keyboard_letters_F","value":"f"},
    {"inputid":"ime_keyboard_letters_G","value":"g"},{"inputid":"ime_keyboard_letters_H","value":"h"},{"inputid":"ime_keyboard_letters_J","value":"j"},
    {"inputid":"ime_keyboard_letters_K","value":"k"},{"inputid":"ime_keyboard_letters_L","value":"l"},{"inputid":"ime_keyboard_letters_exclamation","value":"!"},
    {"inputid":"ime_keyboard_letters_slash","value":"/"},{"inputid":"ime_keyboard_letters_shift","value":""},{"inputid":"ime_keyboard_letters_Z","value":"z"},
    {"inputid":"ime_keyboard_letters_X","value":"x"},{"inputid":"ime_keyboard_letters_C","value":"c"},{"inputid":"ime_keyboard_letters_V","value":"v"},
    {"inputid":"ime_keyboard_letters_B","value":"b"},{"inputid":"ime_keyboard_letters_N","value":"n"},{"inputid":"ime_keyboard_letters_M","value":"m"},
    {"inputid":"ime_keyboard_letters_comma","value":","},{"inputid":"ime_keyboard_letters_point","value":"."},{"inputid":"ime_keyboard_letters_question","value":"?"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_language","value":"Indonesian"}
];
var indonesian_hardkeyboard_values = [];
var indonesian_big_values = [{"inputid":"ime_keyboard_letters_Q","value":"Q"},{"inputid":"ime_keyboard_letters_W","value":"W"},
    {"inputid":"ime_keyboard_letters_E","value":"E"},{"inputid":"ime_keyboard_letters_R","value":"R"},{"inputid":"ime_keyboard_letters_T","value":"T"},
    {"inputid":"ime_keyboard_letters_Y","value":"Y"},{"inputid":"ime_keyboard_letters_U","value":"U"},{"inputid":"ime_keyboard_letters_I","value":"I"},
    {"inputid":"ime_keyboard_letters_O","value":"O"},{"inputid":"ime_keyboard_letters_P","value":"P"},{"inputid":"ime_keyboard_letters_A","value":"A"},
    {"inputid":"ime_keyboard_letters_S","value":"S"},{"inputid":"ime_keyboard_letters_D","value":"D"},{"inputid":"ime_keyboard_letters_F","value":"F"},
    {"inputid":"ime_keyboard_letters_G","value":"G"},{"inputid":"ime_keyboard_letters_H","value":"H"},{"inputid":"ime_keyboard_letters_J","value":"J"},
    {"inputid":"ime_keyboard_letters_K","value":"K"},{"inputid":"ime_keyboard_letters_L","value":"L"},{"inputid":"ime_keyboard_letters_exclamation","value":"!"},
    {"inputid":"ime_keyboard_letters_slash","value":"/"},{"inputid":"ime_keyboard_letters_shift","value":""},{"inputid":"ime_keyboard_letters_Z","value":"Z"},
    {"inputid":"ime_keyboard_letters_X","value":"X"},{"inputid":"ime_keyboard_letters_C","value":"C"},{"inputid":"ime_keyboard_letters_V","value":"V"},
    {"inputid":"ime_keyboard_letters_B","value":"B"},{"inputid":"ime_keyboard_letters_N","value":"N"},{"inputid":"ime_keyboard_letters_M","value":"M"},
    {"inputid":"ime_keyboard_letters_comma","value":","},{"inputid":"ime_keyboard_letters_point","value":"."},{"inputid":"ime_keyboard_letters_question","value":"?"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_language","value":"Indonesian"}
];

var mongol_small_values=[{"inputid":"ime_keyboard_letters_Q","value":"\u0439"},{"inputid":"ime_keyboard_letters_W","value":"\u0446"},
    {"inputid":"ime_keyboard_letters_E","value":"\u0443"},{"inputid":"ime_keyboard_letters_R","value":"\u043A"},{"inputid":"ime_keyboard_letters_T","value":"\u0435"},
    {"inputid":"ime_keyboard_letters_Y","value":"\u043D"},{"inputid":"ime_keyboard_letters_U","value":"\u0433"},{"inputid":"ime_keyboard_letters_I","value":"\u0448"},
    {"inputid":"ime_keyboard_letters_O","value":"\u0449"},{"inputid":"ime_keyboard_letters_P","value":"\u0437"},{"inputid":"ime_keyboard_letters_A","value":"\u0444"},
    {"inputid":"ime_keyboard_letters_S","value":"\u044B"},{"inputid":"ime_keyboard_letters_D","value":"\u0432"},{"inputid":"ime_keyboard_letters_F","value":"\u0430"},
    {"inputid":"ime_keyboard_letters_G","value":"\u043F"},{"inputid":"ime_keyboard_letters_H","value":"\u0440"},{"inputid":"ime_keyboard_letters_J","value":"\u043E"},
    {"inputid":"ime_keyboard_letters_K","value":"\u043B"},{"inputid":"ime_keyboard_letters_L","value":"\u0434"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u0436"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u044D"},{"inputid":"ime_keyboard_letters_Z","value":"\u044F"},
    {"inputid":"ime_keyboard_letters_X","value":"\u0447"},{"inputid":"ime_keyboard_letters_C","value":"\u0441"},{"inputid":"ime_keyboard_letters_V","value":"\u043C"},
    {"inputid":"ime_keyboard_letters_B","value":"\u0438"},{"inputid":"ime_keyboard_letters_N","value":"\u0442"},{"inputid":"ime_keyboard_letters_M","value":"\u044C"},
    {"inputid":"ime_keyboard_letters_comma","value":"\u0431"},{"inputid":"ime_keyboard_letters_point","value":"\u044E"},{"inputid":"ime_keyboard_letters_question","value":"\u0445"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_1","value":"\u04E9"},{"inputid":"ime_keyboard_letters_2","value":"\u04EF"},
    {"inputid":"ime_keyboard_letters_3","value":"\u0451"},{"inputid":"ime_keyboard_letters_at","value":"\u044A"},{"inputid":"ime_keyboard_letters_language","value":"Mongol"}
];
var mongol_hardkeyboard_values = [];
var mongol_big_values=[{"inputid":"ime_keyboard_letters_Q","value":"\u0419"},{"inputid":"ime_keyboard_letters_W","value":"\u0426"},
    {"inputid":"ime_keyboard_letters_E","value":"\u0423"},{"inputid":"ime_keyboard_letters_R","value":"\u041A"},{"inputid":"ime_keyboard_letters_T","value":"\u0415"},
    {"inputid":"ime_keyboard_letters_Y","value":"\u041D"},{"inputid":"ime_keyboard_letters_U","value":"\u0413"},{"inputid":"ime_keyboard_letters_I","value":"\u0428"},
    {"inputid":"ime_keyboard_letters_O","value":"\u0429"},{"inputid":"ime_keyboard_letters_P","value":"\u0417"},{"inputid":"ime_keyboard_letters_A","value":"\u0424"},
    {"inputid":"ime_keyboard_letters_S","value":"\u042B"},{"inputid":"ime_keyboard_letters_D","value":"\u0412"},{"inputid":"ime_keyboard_letters_F","value":"\u0410"},
    {"inputid":"ime_keyboard_letters_G","value":"\u041F"},{"inputid":"ime_keyboard_letters_H","value":"\u0420"},{"inputid":"ime_keyboard_letters_J","value":"\u041E"},
    {"inputid":"ime_keyboard_letters_K","value":"\u041B"},{"inputid":"ime_keyboard_letters_L","value":"\u0414"},{"inputid":"ime_keyboard_letters_exclamation","value":"\u0416"},
    {"inputid":"ime_keyboard_letters_slash","value":"\u042D"},{"inputid":"ime_keyboard_letters_Z","value":"\u042F"},
    {"inputid":"ime_keyboard_letters_X","value":"\u0427"},{"inputid":"ime_keyboard_letters_C","value":"\u0421"},{"inputid":"ime_keyboard_letters_V","value":"\u041C"},
    {"inputid":"ime_keyboard_letters_B","value":"\u0418"},{"inputid":"ime_keyboard_letters_N","value":"\u0422"},{"inputid":"ime_keyboard_letters_M","value":"\u042C"},
    {"inputid":"ime_keyboard_letters_comma","value":"\u0411"},{"inputid":"ime_keyboard_letters_point","value":"\u042E"},{"inputid":"ime_keyboard_letters_question","value":"\u0425"},
    {"inputid":"ime_keyboard_letters_number","value":"123#"},{"inputid":"ime_keyboard_letters_1","value":"\u04E8"},{"inputid":"ime_keyboard_letters_2","value":"\u04AE"},
    {"inputid":"ime_keyboard_letters_3","value":"\u0401"},{"inputid":"ime_keyboard_letters_at","value":"\u042A"},{"inputid":"ime_keyboard_letters_language","value":"Mongol"}
];

var chineseTrad_small_values = [
    {"inputid":"ime_keyboard_letters_\u06F1","value":"\u3105"},
    {"inputid":"ime_keyboard_letters_\u06F2","value":"\u3109"},
    {"inputid":"ime_keyboard_letters_\u06F3","value":"\u02C7"},
    {"inputid":"ime_keyboard_letters_\u06F4","value":"\u02CB"},
    {"inputid":"ime_keyboard_letters_\u06F5","value":"\u3113"},
    {"inputid":"ime_keyboard_letters_\u06F6","value":"\u02CA"},
    {"inputid":"ime_keyboard_letters_\u06F7","value":"\u02D9"},
    {"inputid":"ime_keyboard_letters_\u06F8","value":"\u311A"},
    {"inputid":"ime_keyboard_letters_\u06F9","value":"\u311E"},
    {"inputid":"ime_keyboard_letters_\u06F0","value":"\u3122"},
    {"inputid":"ime_keyboard_letters_\u060C","value":"\u3106"},

    {"inputid":"ime_keyboard_letters_\u0636","value":"\u310A"},
    {"inputid":"ime_keyboard_letters_\u0635","value":"\u310D"},
    {"inputid":"ime_keyboard_letters_\u062B","value":"\u3110"},
    {"inputid":"ime_keyboard_letters_\u0642","value":"\u3114"},
    {"inputid":"ime_keyboard_letters_\u0641","value":"\u3117"},
    {"inputid":"ime_keyboard_letters_\u063A","value":"\u3127"},
    {"inputid":"ime_keyboard_letters_\u0639","value":"\u311B"},
    {"inputid":"ime_keyboard_letters_\u0647","value":"\u311F"},
    {"inputid":"ime_keyboard_letters_\u062E","value":"\u3123"},
    {"inputid":"ime_keyboard_letters_\u062D","value":"\u3107"},
    {"inputid":"ime_keyboard_letters_\u062C","value":"\uFF08"},
    {"inputid":"ime_keyboard_letters_\u0686","value":"\uFF09"},

    {"inputid":"ime_keyboard_letters_\u0634","value":"\u310B"},
    {"inputid":"ime_keyboard_letters_\u0633","value":"\u310E"},
    {"inputid":"ime_keyboard_letters_\u06CC","value":"\u3111"},
    {"inputid":"ime_keyboard_letters_\u0628","value":"\u3115"},
    {"inputid":"ime_keyboard_letters_\u0644","value":"\u3118"},
    {"inputid":"ime_keyboard_letters_\u0622","value":"\u3128"},
    {"inputid":"ime_keyboard_letters_\u0627","value":"\u311C"},
    {"inputid":"ime_keyboard_letters_\u062A","value":"\u3120"},
    {"inputid":"ime_keyboard_letters_\u0646","value":"\u3124"},
    {"inputid":"ime_keyboard_letters_\u0645","value":"\u3108"},
    {"inputid":"ime_keyboard_letters_\u06A9","value":"\u201C"},
    {"inputid":"ime_keyboard_letters_\u06AF","value":"\u201D"},

    {"inputid":"ime_keyboard_letters_\u064A","value":"\u310C"},
    {"inputid":"ime_keyboard_letters_\u0626","value":"\u310F"},
    {"inputid":"ime_keyboard_letters_\u0638","value":"\u3112"},
    {"inputid":"ime_keyboard_letters_\u0637","value":"\u3116"},
    {"inputid":"ime_keyboard_letters_\u0698","value":"\u3119"},
    {"inputid":"ime_keyboard_letters_\u0632","value":"\u3129"},
    {"inputid":"ime_keyboard_letters_\u0631","value":"\u311D"},
    {"inputid":"ime_keyboard_letters_\u0630","value":"\u3121"},
    {"inputid":"ime_keyboard_letters_\u062F","value":"\u3125"},
    {"inputid":"ime_keyboard_letters_\u067E","value":"\u3126"},
    {"inputid":"ime_keyboard_letters_\u0648","value":"\uFF0C"},
    {"inputid":"ime_keyboard_letters_.","value":"\u3002"},

    {"inputid":"ime_keyboard_letters_language","value":"\u4e2d\u6587\u0028\u7e41\u0029"},
    {"inputid":"ime_keyboard_letters_\u061f","value":"\uFF1F"},
    {"inputid":"ime_keyboard_letters_at","value":"\uFF01"}
];
var chineseTrad_hardkeyboard_values = [];

var chineseSimple_small_values = [
    {"inputid":"ime_keyboard_letters_Q","value":"q"},
    {"inputid":"ime_keyboard_letters_W","value":"w"},
    {"inputid":"ime_keyboard_letters_E","value":"e"},
    {"inputid":"ime_keyboard_letters_R","value":"r"},
    {"inputid":"ime_keyboard_letters_T","value":"t"},
    {"inputid":"ime_keyboard_letters_Y","value":"y"},
    {"inputid":"ime_keyboard_letters_U","value":"u"},
    {"inputid":"ime_keyboard_letters_I","value":"i"},
    {"inputid":"ime_keyboard_letters_O","value":"o"},
    {"inputid":"ime_keyboard_letters_P","value":"p"},

    {"inputid":"ime_keyboard_letters_A","value":"a"},
    {"inputid":"ime_keyboard_letters_S","value":"s"},
    {"inputid":"ime_keyboard_letters_D","value":"d"},
    {"inputid":"ime_keyboard_letters_F","value":"f"},
    {"inputid":"ime_keyboard_letters_G","value":"g"},
    {"inputid":"ime_keyboard_letters_H","value":"h"},
    {"inputid":"ime_keyboard_letters_J","value":"j"},
    {"inputid":"ime_keyboard_letters_K","value":"k"},
    {"inputid":"ime_keyboard_letters_L","value":"l"},
    {"inputid":"ime_keyboard_letters_exclamation","value":"\uff01"},
    {"inputid":"ime_keyboard_letters_slash","value":"/"},

    {"inputid":"ime_keyboard_letters_shift","value":""},
    {"inputid":"ime_keyboard_letters_Z","value":"z"},
    {"inputid":"ime_keyboard_letters_X","value":"x"},
    {"inputid":"ime_keyboard_letters_C","value":"c"},
    {"inputid":"ime_keyboard_letters_V","value":"v"},
    {"inputid":"ime_keyboard_letters_B","value":"b"},
    {"inputid":"ime_keyboard_letters_N","value":"n"},
    {"inputid":"ime_keyboard_letters_M","value":"m"},
    {"inputid":"ime_keyboard_letters_comma","value":"\uff0c"},
    {"inputid":"ime_keyboard_letters_point","value":"\u3002"},
    {"inputid":"ime_keyboard_letters_question","value":"\uff1f"},

    {"inputid":"ime_keyboard_letters_number","value":"123#"},
    {"inputid":"ime_keyboard_letters_language","value":"\u4e2d\u6587\u0028\u7b80\u0029"}
];
var ime_lastKeyboardType = 0;
var ime_curLanguageSymbol = "";
var ime_curShift = 0;//0 :small  1:big
//\u663E\u793A\u6570\u5B57\u9875\u9762
function ime_switchKeyboard()
{
    if (ime_lastKeyboardType != 4) {
        ime_keyboard.ime_setLanguage(ime_hebrew_keyboard_json);
        ime_keyboard.ime_DrawKeyboard();
        ime_candidate.ime_drawCandidateBar();
        ime_lastKeyboardType = 4;
    }
    ime_getEID("ime_keyboard_letters_language").value = ime_curLanguageSymbol;
}

function ime_display_number()
{
	var number_tmp;
	if( ime_curLanguageSymbol != "Farsi")
	{
		number_tmp = number_values;
	}else
	{
		number_tmp = faris_number_values;
	}
    var number_length = eval(number_tmp).length;
    for(var i = 0; i < number_length; i++)
    {
    	
        ime_getEID(number_tmp[i].inputid).value = number_tmp[i].value;
    }
}
//\u663E\u793A\u7B26\u53F7\u9875\u9762
function ime_display_symbol()
{

    //  symbol_values[6].value = String.fromCharCode(215);//\u00D7
    var number_length = eval(symbol_values).length;
    for(var i = 0; i < number_length; i++)
    {
        ime_getEID(symbol_values[i].inputid).value = symbol_values[i].value;
    }

}

function ime_language_specialHardKeyBoard(keycode) {
    var language = ime_curLanguageSymbol;
    var language_length = 0;
    var i;

    ime_specialflag = 0;
    switch (language) {
        case ime_Languages.getLanguage("SPANISH"):
            language_length = eval(spanish_specialhardkeyboard_values).length;
            language = spanish_specialhardkeyboard_values;
            break;
        case ime_Languages.getLanguage("DEUTSCH"):
            language_length = eval(deutsch_specialhardkeyboard_values).length;
            language = deutsch_specialhardkeyboard_values;
            break;
        case ime_Languages.getLanguage("SVENSKA"):
            language_length = eval(svenska_specialhardkeyboard_values).length;
            language = svenska_specialhardkeyboard_values;
            break;
        case ime_Languages.getLanguage("PORTUGAL"):
            language_length = eval(portuguese_specialhardkeyboard_values).length;
            language = portuguese_specialhardkeyboard_values;
            break;
        case ime_Languages.getLanguage("RUSSIAN"):
            language_length = eval(russian_specialhardkeyboard_values).length;
            language = russian_specialhardkeyboard_values;
            break;
        case ime_Languages.getLanguage("FRANCAISE")://\u7C7B\u578B3
            language_length = eval(french_specialhardkeyboard_values).length;
            language = french_specialhardkeyboard_values;
            break;
        case ime_Languages.getLanguage("CZECH"):
            language_length = eval(czech_specialhardkeyboard_values).length;
            language = czech_specialhardkeyboard_values;
            break;
        case ime_Languages.getLanguage("CROATIAN"):
            language_length = eval(croatian_specialhardkeyboard_values).length;
            language = croatian_specialhardkeyboard_values;
            break;
        case ime_Languages.getLanguage("LATVIAN"):
            language_length = eval(latvian_specialhardkeyboard_values).length;
            language = latvian_specialhardkeyboard_values;
            break;
        case ime_Languages.getLanguage("LITHUANIAN"):
            language_length = eval(lithuanian_specialhardkeyboard_values).length;
            language = lithuanian_specialhardkeyboard_values;
            break;
        case ime_Languages.getLanguage("ROMANIAN"):
            language_length = eval(romanian_specialhardkeyboard_values).length;
            language = romanian_specialhardkeyboard_values;
            break;
        case ime_Languages.getLanguage("NORWEGIAN"):
            language_length = eval(norwegian_specialhardkeyboard_values).length;
            language = norwegian_specialhardkeyboard_values;
            break;
        case ime_Languages.getLanguage("SLOVENIAN"):
            language_length = eval(slovenian_specialhardkeyboard_values).length;
            language = slovenian_specialhardkeyboard_values;
            break;
        case ime_Languages.getLanguage("TURKISH"):
            language_length = eval(turkish_specialhardkeyboard_values).length;
            language = turkish_specialhardkeyboard_values;
            break;
        case ime_Languages.getLanguage("UKRAINAIN"):
            language_length = eval(ukrainain_specialhardkeyboard_values).length;
            language = ukrainain_specialhardkeyboard_values;
            break;
        case ime_Languages.getLanguage("GREEK"):
            language_length = eval(greek_specialhardkeyboard_values).length;
            language = greek_specialhardkeyboard_values;
            break;
        case ime_Languages.getLanguage("HUNGARIAN"):
            language_length = eval(hungarian_specialhardkeyboard_values).length;
            language = hungarian_specialhardkeyboard_values;
            break;
        case ime_Languages.getLanguage("ESTHONIAN"):
            language_length = eval(esthonian_specialhardkeyboard_values).length;
            language = esthonian_specialhardkeyboard_values;
            break;
        case ime_Languages.getLanguage("BULGARIAN"):
            language_length = eval(bulgarian_specialhardkeyboard_values).length;
            language = bulgarian_specialhardkeyboard_values;
            break;
        case ime_Languages.getLanguage("DANISH"):
            language_length = eval(danish_specialhardkeyboard_values).length;
            language = danish_specialhardkeyboard_values;
            break;
        case ime_Languages.getLanguage("FINNISH"):
            language_length = eval(finnish_specialhardkeyboard_values).length;
            language = finnish_specialhardkeyboard_values;
            break;
        case ime_Languages.getLanguage("SERBIAN"):
            language_length = eval(serbian_specialhardkeyboard_values).length;
            language = serbian_specialhardkeyboard_values;
            break;
    }
    for (i = 0; i < language_length; i++) {
        if (keycode == language[i].keycode) {
            ime_keyboard.ime_hardkeyboard(language[i].value);
            break;
        }
    }

    if (language_length != i)
    {
        ime_specialflag = 1;
        ime_keyboard.ime_lostfocus();
        ime_candidate.ime_candidateWordsGetFocus();
    }
}

function ime_language_hardKeyBoard(keycode) {
    var language = ime_curLanguageSymbol;
    var language_length =0;
    var i;
    switch (language) {
       case ime_Languages.getLanguage("ENGLISH"):
    //    case ime_Languages.getLanguage("UZBEK"):
           language_length = eval(english_hardkeyboard_values).length;
           language = english_hardkeyboard_values;
           break;
    //    case ime_Languages.getLanguage("SPANISH"):
    //        language_length = eval(spanish_hardkeyboard_values).length;
    //        language = spanish_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("DEUTSCH"):
    //        language_length = eval(deutsch_hardkeyboard_values).length;
    //        language = deutsch_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("POLSKI"):
    //        language_length = eval(polski_hardkeyboard_values).length;
    //        language = polski_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("SVENSKA"):
    //        language_length = eval(svenska_hardkeyboard_values).length;
    //        language = svenska_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("ITALIAN")://\u7C7B\u578B2
    //        language_length = eval(italian_hardkeyboard_values).length;
    //        language = italian_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("PORTUGAL"):
    //        language_length = eval(portuguese_hardkeyboard_values).length;
    //        language = portuguese_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("RUSSIAN"):
    //        language_length = eval(russian_hardkeyboard_values).length;
    //        language = russian_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("FRANCAISE")://\u7C7B\u578B3
    //        language_length = eval(french_hardkeyboard_values).length;
    //        language = french_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("CZECH"):
    //        language_length = eval(czech_hardkeyboard_values).length;
    //        language = czech_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("CROATIAN"):
    //        language_length = eval(croatian_hardkeyboard_values).length;
    //        language = croatian_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("LATVIAN"):
    //        language_length = eval(latvian_hardkeyboard_values).length;
    //        language = latvian_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("LITHUANIAN"):
    //        language_length = eval(lithuanian_hardkeyboard_values).length;
    //        language = lithuanian_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("ROMANIAN"):
    //        language_length = eval(romanian_hardkeyboard_values).length;
    //        language = romanian_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("NORWEGIAN"):
    //        language_length = eval(norwegian_hardkeyboard_values).length;
    //        language = norwegian_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("SLOVENIAN"):
    //        language_length = eval(slovenian_hardkeyboard_values).length;
    //        language = slovenian_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("TURKISH"):
    //        language_length = eval(turkish_hardkeyboard_values).length;
    //        language = turkish_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("UKRAINAIN"):
    //        language_length = eval(ukrainain_hardkeyboard_values).length;
    //        language = ukrainain_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("GREEK"):
    //        language_length = eval(greek_hardkeyboard_values).length;
    //        language = greek_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("HUNGARIAN"):
    //        language_length = eval(hungarian_hardkeyboard_values).length;
    //        language = hungarian_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("ESTHONIAN"):
    //        language_length = eval(esthonian_hardkeyboard_values).length;
    //        language = esthonian_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("BULGARIAN"):
    //        language_length = eval(bulgarian_hardkeyboard_values).length;
    //        language = bulgarian_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("DANISH"):
    //        language_length = eval(danish_hardkeyboard_values).length;
    //        language = danish_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("FINNISH"):
    //        language_length = eval(finnish_hardkeyboard_values).length;
    //        language = finnish_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("DUTCH"):
    //        language_length = eval(dutch_hardkeyboard_values).length;
    //        language = dutch_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("SLOVAK"):
    //        language_length = eval(slovak_hardkeyboard_values).length;
    //        language = slovak_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("SERBIAN"):
    //        language_length = eval(serbian_hardkeyboard_values).length;
    //        language = serbian_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("ARABIC"):
    //        language_length = eval(arabic_hardkeyboard_values).length;
    //        language = arabic_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("FARSI"):
    //        language_length = eval(farsi_hardkeyboard_values).length;
    //        language = farsi_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("HEBREW"):
    //        language_length = eval(hebrew_hardkeyboard_values).length;
    //        language = hebrew_hardkeyboard_values;
    //        break;
       case ime_Languages.getLanguage("THAI"):
           language_length = eval(thai_hardkeyboard_values).length;
           language = thai_hardkeyboard_values;
           break;
    //    case ime_Languages.getLanguage("VIETNAMESE"):
    //        language_length = eval(vietnamese_hardkeyboard_values).length;
    //        language = vietnamese_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("MALAY"):
    //        language_length = eval(malay_hardkeyboard_values).length;
    //        language = malay_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("INDONESIAN"):
    //        language_length = eval(indonesian_hardkeyboard_values).length;
    //        language = indonesian_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("MONGOL"):
    //        language_length = eval(mongol_hardkeyboard_values).length;
    //        language = mongol_hardkeyboard_values;
    //        break;
    //    case ime_Languages.getLanguage("CHINESE_TRAD"):
    //        language_length = eval(chineseTrad_hardkeyboard_values).length;
    //        language = chineseTrad_hardkeyboard_values;
    //        break;
        default:
    language_length = eval(english_hardkeyboard_values).length;
    language = english_hardkeyboard_values;
    }

    for (i = 0; i < language_length; i++) {
        if (language[i].keycode == 0xFFF)
            continue;
        if (keycode == language[i].keycode) {
            ime_keyboard.ime_hardkeyboard(language[i].value);
            break;
        }
    }
    if (language_length != i)
    {
        ime_keyboard.ime_lostfocus();
        ime_candidate.ime_candidateWordsGetFocus();
    }
}

function ime_switchShift()
{
    if(ime_curShift)
    {
        ime_display_language_small();
        ime_curShift = 0;
    }
    else
    {
        ime_display_language_big();
        ime_curShift = 1;
    }
}
//\u663E\u793A\u5927\u5199\u8BED\u8A00\u9875\u9762
function ime_display_language_big()
{
    var language_big_length;
    var language_big;
    var language = ime_curLanguageSymbol;
    switch(language)
    {
        case ime_Languages.getLanguage("ENGLISH")://\u7C7B\u578B1
            language_big_length = eval(english_big_values).length;
            language_big = english_big_values;
            break;
        case ime_Languages.getLanguage("SPANISH"):
            language_big_length = eval(spanish_big_values).length;
            language_big = spanish_big_values;
            break;
        case ime_Languages.getLanguage("DEUTSCH"):
            language_big_length = eval(deutsch_big_values).length;
            language_big = deutsch_big_values;
            break;
        case ime_Languages.getLanguage("POLSKI"):
            language_big_length = eval(polski_big_values).length;
            language_big = polski_big_values;
            break;
        case ime_Languages.getLanguage("SVENSKA"):
            language_big_length = eval(svenska_big_values).length;
            language_big = svenska_big_values;
            break;
        case ime_Languages.getLanguage("ITALIAN")://\u7C7B\u578B2
            language_big_length = eval(italian_big_values).length;
            language_big = italian_big_values;
            break;
        case ime_Languages.getLanguage("PORTUGAL"):
            language_big_length = eval(portuguese_big_values).length;
            language_big = portuguese_big_values;
            break;
        case ime_Languages.getLanguage("RUSSIAN"):
            language_big_length = eval(russian_big_values).length;
            language_big = russian_big_values;
            break;
        case ime_Languages.getLanguage("FRANCAISE")://\u7C7B\u578B3
            ime_keyboard.ime_setLanguage(ime_french_keyboard_json);
            ime_keyboard.ime_DrawKeyboard();
            ime_candidate.ime_drawCandidateBar();
            ime_lastKeyboardType = 3;
            language_big_length = eval(french_big_values).length;
            language_big = french_big_values;
            break;
        case ime_Languages.getLanguage("CZECH"):
            language_big_length = eval(czech_big_values).length;
            language_big = czech_big_values;
            break;
        case ime_Languages.getLanguage("CROATIAN"):
            language_big_length = eval(croatian_big_values).length;
            language_big = croatian_big_values;
            break;
        case ime_Languages.getLanguage("LATVIAN"):
            language_big_length = eval(latvian_big_values).length;
            language_big = latvian_big_values;
            break;
        case ime_Languages.getLanguage("LITHUANIAN"):
            language_big_length = eval(lithuanian_big_values).length;
            language_big = lithuanian_big_values;
            break;
        case ime_Languages.getLanguage("ROMANIAN"):
            language_big_length = eval(romanian_big_values).length;
            language_big = romanian_big_values;
            break;
        case ime_Languages.getLanguage("NORWEGIAN"):
            language_big_length = eval(norwegian_big_values).length;
            language_big = norwegian_big_values;
            break;
        case ime_Languages.getLanguage("SLOVENIAN"):
            language_big_length = eval(slovenian_big_values).length;
            language_big = slovenian_big_values;
            break;
        case ime_Languages.getLanguage("TURKISH"):
            language_big_length = eval(turkish_big_values).length;
            language_big = turkish_big_values;
            break;
        case ime_Languages.getLanguage("UKRAINAIN"):
            language_big_length = eval(ukrainain_big_values).length;
            language_big = ukrainain_big_values;
            break;
        case ime_Languages.getLanguage("GREEK"):
            language_big_length = eval(greek_big_values).length;
            language_big = greek_big_values;
            break;
        case ime_Languages.getLanguage("HUNGARIAN"):
            language_big_length = eval(hungarian_big_values).length;
            language_big = hungarian_big_values;
            break;
        case ime_Languages.getLanguage("ESTHONIAN"):
            language_big_length = eval(esthonian_big_values).length;
            language_big = esthonian_big_values;
            break;
        case ime_Languages.getLanguage("BULGARIAN"):
            language_big_length = eval(bulgarian_big_values).length;
            language_big = bulgarian_big_values;
            break;
        case ime_Languages.getLanguage("DANISH"):
            language_big_length = eval(danish_big_values).length;
            language_big = danish_big_values;
            break;
        case ime_Languages.getLanguage("FINNISH"):
            language_big_length = eval(finnish_big_values).length;
            language_big = finnish_big_values;
            break;
        case ime_Languages.getLanguage("DUTCH"):
            language_big_length = eval(dutch_big_values).length;
            language_big = dutch_big_values;
            break;
        case ime_Languages.getLanguage("SLOVAK"):
            language_big_length = eval(slovak_big_values).length;
            language_big = slovak_big_values;
            break;
        case ime_Languages.getLanguage("SERBIAN"):
            language_big_length = eval(serbian_big_values).length;
            language_big = serbian_big_values;
            break;
         case ime_Languages.getLanguage("ARABIC"):
            ime_lastKeyboardType = 8;
            ime_keyboard.ime_setLanguage(ime_english_keyboard_json);
      	   ime_keyboard.ime_DrawKeyboard();
       	   ime_candidate.ime_drawCandidateBar();
       	   language_big_length = eval(arabic_big_values).length;
       	   language_big = arabic_big_values;
       	   ime_getEID(ime_english_keyboard_json[1][0].li_id).style.backgroundImage = "url("+imagepath+"images/french/arabic1.png)";
       	   ime_getEID(ime_english_keyboard_json[1][1].li_id).style.backgroundImage = "url("+imagepath+"images/french/arabic2.png)";
       	   ime_getEID(ime_english_keyboard_json[1][2].li_id).style.backgroundImage = "url("+imagepath+"images/french/arabic3.png)";
       	   ime_getEID(ime_english_keyboard_json[1][3].li_id).style.backgroundImage = "url("+imagepath+"images/french/arabic4.png)";
       	   ime_getEID(ime_english_keyboard_json[1][4].li_id).style.backgroundImage = "url("+imagepath+"images/french/arabic5.png)";
       	   ime_getEID(ime_english_keyboard_json[1][5].li_id).style.backgroundImage = "url("+imagepath+"images/french/arabic6.png)";
       	   ime_getEID(ime_english_keyboard_json[1][6].li_id).style.backgroundImage = "url("+imagepath+"images/french/arabic7.png)";
       	   ime_getEID(ime_english_keyboard_json[1][7].li_id).style.backgroundImage = "url("+imagepath+"images/french/arabic8.png)";
            break;
        case ime_Languages.getLanguage("UZBEK"):
            language_big_length = eval(uzbek_big_values).length;
            language_big = uzbek_big_values;
            break;
        case ime_Languages.getLanguage("THAI"):
            language_big_length = eval(thai_big_values).length;
            language_big = thai_big_values;
            break;
        case ime_Languages.getLanguage("VIETNAMESE"):
            language_big_length = eval(vietnamese_big_values).length;
            language_big = vietnamese_big_values;
            break;
        case ime_Languages.getLanguage("MALAY"):
            language_big_length = eval(malay_big_values).length;
            language_big = malay_big_values;
            break;
        case ime_Languages.getLanguage("INDONESIAN"):
            language_big_length = eval(indonesian_big_values).length;
            language_big = indonesian_big_values;
            break;
        case ime_Languages.getLanguage("MONGOL"):
            language_big_length = eval(mongol_big_values).length;
            language_big = mongol_big_values;
            break;
    }
    for(var i = 0; i < language_big_length; i++)
    {
        ime_getEID(language_big[i].inputid).value = language_big[i].value;
    }
}

//\u663E\u793A\u5927\u5199\u8BED\u8A00\u9875\u9762
function ime_display_language_small()
{
    var language_small_length;
    var language_small;
    var language = ime_curLanguageSymbol;
    switch(language)
    {
        case ime_Languages.getLanguage("ENGLISH")://\u7C7B\u578B1
            language_small_length = eval(english_small_values).length;
            language_small = english_small_values;
            break;
        case ime_Languages.getLanguage("SPANISH"):
            language_small_length = eval(spanish_small_values).length;
            language_small = spanish_small_values;
            break;
        case ime_Languages.getLanguage("DEUTSCH"):
            language_small_length = eval(deutsch_small_values).length;
            language_small = deutsch_small_values;
            break;
        case ime_Languages.getLanguage("POLSKI"):
            language_small_length = eval(polski_small_values).length;
            language_small = polski_small_values;
            break;
        case ime_Languages.getLanguage("SVENSKA"):
            language_small_length = eval(svenska_small_values).length;
            language_small = svenska_small_values;
            break;
        case ime_Languages.getLanguage("ITALIAN")://\u7C7B\u578B2
            language_small_length = eval(italian_small_values).length;
            language_small = italian_small_values;
            break;
        case ime_Languages.getLanguage("PORTUGAL"):
            language_small_length = eval(portuguese_small_values).length;
            language_small = portuguese_small_values;
            break;
        case ime_Languages.getLanguage("RUSSIAN"):
            language_small_length = eval(russian_small_values).length;
            language_small = russian_small_values;
            break;
        case ime_Languages.getLanguage("FRANCAISE")://\u5927\u5199\u952E\u76D8\u7C7B\u578B1
            ime_keyboard.ime_setLanguage(ime_french_keyboard_json);
            ime_keyboard.ime_DrawKeyboard();
            ime_candidate.ime_drawCandidateBar();
            ime_lastKeyboardType = 3;
            language_small_length = eval(french_small_values).length;
            language_small = french_small_values;
            break;
        case ime_Languages.getLanguage("CZECH"):
            language_small_length = eval(czech_small_values).length;
            language_small = czech_small_values;
            break;
        case ime_Languages.getLanguage("CROATIAN"):
            language_small_length = eval(croatian_small_values).length;
            language_small = croatian_small_values;
            break;
        case ime_Languages.getLanguage("LATVIAN"):
            language_small_length = eval(latvian_small_values).length;
            language_small = latvian_small_values;
            break;
        case ime_Languages.getLanguage("LITHUANIAN"):
            language_small_length = eval(lithuanian_small_values).length;
            language_small = lithuanian_small_values;
            break;
        case ime_Languages.getLanguage("ROMANIAN"):
            language_small_length = eval(romanian_small_values).length;
            language_small = romanian_small_values;
            break;
        case ime_Languages.getLanguage("NORWEGIAN"):
            language_small_length = eval(norwegian_small_values).length;
            language_small = norwegian_small_values;
            break;
        case ime_Languages.getLanguage("SLOVENIAN"):
            language_small_length = eval(slovenian_small_values).length;
            language_small = slovenian_small_values;
            break;
        case ime_Languages.getLanguage("TURKISH"):
            language_small_length = eval(turkish_small_values).length;
            language_small = turkish_small_values;
            break;
        case ime_Languages.getLanguage("UKRAINAIN"):
            language_small_length = eval(ukrainain_small_values).length;
            language_small = ukrainain_small_values;
            break;
        case ime_Languages.getLanguage("GREEK"):
            language_small_length = eval(greek_small_values).length;
            language_small = greek_small_values;
            break;
        case ime_Languages.getLanguage("HUNGARIAN"):
            language_small_length = eval(hungarian_small_values).length;
            language_small = hungarian_small_values;
            break;
        case ime_Languages.getLanguage("ESTHONIAN"):
            language_small_length = eval(esthonian_small_values).length;
            language_small = esthonian_small_values;
            break;
        case ime_Languages.getLanguage("BULGARIAN"):
            language_small_length = eval(bulgarian_small_values).length;
            language_small = bulgarian_small_values;
            break;
        case ime_Languages.getLanguage("DANISH"):
            language_small_length = eval(danish_small_values).length;
            language_small = danish_small_values;
            break;
        case ime_Languages.getLanguage("FINNISH"):
            language_small_length = eval(finnish_small_values).length;
            language_small = finnish_small_values;
            break;
        case ime_Languages.getLanguage("DUTCH"):
            language_small_length = eval(dutch_small_values).length;
            language_small = dutch_small_values;
            break;
        case ime_Languages.getLanguage("SLOVAK"):
            language_small_length = eval(slovak_small_values).length;
            language_small = slovak_small_values;
            break;
        case ime_Languages.getLanguage("SERBIAN"):
            language_small_length = eval(serbian_small_values).length;
            language_small = serbian_small_values;
            break;
        case ime_Languages.getLanguage("ARABIC"):
            ime_lastKeyboardType = 6;
            ime_keyboard.ime_setLanguage(ime_arabic_keyboard_json);
      	  ime_keyboard.ime_DrawKeyboard();
       	  ime_candidate.ime_drawCandidateBar();
       	  language_small_length = eval(arabic_small_values).length;
       	  language_small = arabic_small_values;
            break;
        case ime_Languages.getLanguage("UZBEK"):
            language_small_length = eval(uzbek_small_values).length;
            language_small = uzbek_small_values;
            break;
        case ime_Languages.getLanguage("THAI"):
            language_small_length = eval(thai_small_values).length;
            language_small = thai_small_values;
            break;
        case ime_Languages.getLanguage("VIETNAMESE"):
            language_small_length = eval(vietnamese_small_values).length;
            language_small = vietnamese_small_values;
            break;
        case ime_Languages.getLanguage("MALAY"):
            language_small_length = eval(malay_small_values).length;
            language_small = malay_small_values;
            break;
        case ime_Languages.getLanguage("INDONESIAN"):
            language_small_length = eval(indonesian_small_values).length;
            language_small = indonesian_small_values;
            break;
        case ime_Languages.getLanguage("MONGOL"):
            language_small_length = eval(mongol_small_values).length;
            language_small = mongol_small_values;
            break;
        case ime_Languages.getLanguage("CHINESE_TRAD"):
            language_small_length = eval(chineseTrad_small_values).length;
            language_small = chineseTrad_small_values;
            break;
        case ime_Languages.getLanguage("CHINESE_SIMPLE"):
            language_small_length = eval(chineseSimple_small_values).length;
            language_small = chineseSimple_small_values;
            break;
    }
    for(var i = 0; i < language_small_length; i++)
    {
        ime_getEID(language_small[i].inputid).value = language_small[i].value;
    }
}


//\u54CD\u5E94\u901A\u77E5\uFF0C\u663E\u793A\u5177\u4F53\u8BED\u8A00\u7684\u51FD\u6570
var ime_display_language = function(language)
{
    switch(language) {
        case ime_Languages.getLanguage("ENGLISH")://\u7C7B\u578B1
        case ime_Languages.getLanguage("POLSKI"):
        case ime_Languages.getLanguage("NORWEGIAN"):
        case ime_Languages.getLanguage("GREEK"):
        case ime_Languages.getLanguage("DANISH"):
        case ime_Languages.getLanguage("FINNISH"):
        case ime_Languages.getLanguage("DUTCH"):
        case ime_Languages.getLanguage("UZBEK"):
        case ime_Languages.getLanguage("MALAY"):
        case ime_Languages.getLanguage("INDONESIAN"):
        case ime_Languages.getLanguage("CHINESE_SIMPLE"):
            if (ime_lastKeyboardType != 1) {
                ime_keyboard.ime_setLanguage(ime_english_keyboard_json);
                ime_keyboard.ime_DrawKeyboard();
                ime_candidate.ime_drawCandidateBar();
                ime_lastKeyboardType = 1;
            }
            break;
        case ime_Languages.getLanguage("ITALIAN"):
        case ime_Languages.getLanguage("PORTUGAL"):
        case ime_Languages.getLanguage("RUSSIAN"):
        case ime_Languages.getLanguage("DEUTSCH"):
        case ime_Languages.getLanguage("SVENSKA"):
        case ime_Languages.getLanguage("CROATIAN"):
        case ime_Languages.getLanguage("LATVIAN"):
        case ime_Languages.getLanguage("ROMANIAN"):
        case ime_Languages.getLanguage("SLOVENIAN"):
        case ime_Languages.getLanguage("TURKISH"):
        case ime_Languages.getLanguage("UKRAINAIN"):
        case ime_Languages.getLanguage("ESTHONIAN"):
        case ime_Languages.getLanguage("SERBIAN"):
        case ime_Languages.getLanguage("MONGOL"):
            if (ime_lastKeyboardType != 2) {
                ime_keyboard.ime_setLanguage(ime_russian_keyboard_json);
                ime_keyboard.ime_DrawKeyboard();
                ime_candidate.ime_drawCandidateBar();
                ime_lastKeyboardType = 2;

            }
            break;
        case ime_Languages.getLanguage("BULGARIAN"):
        case ime_Languages.getLanguage("FRANCAISE"):
        case ime_Languages.getLanguage("SPANISH"):
        case ime_Languages.getLanguage("CZECH"):
        case ime_Languages.getLanguage("LITHUANIAN"):
        case ime_Languages.getLanguage("SLOVAK"):
        case ime_Languages.getLanguage("HUNGARIAN"):
        case ime_Languages.getLanguage("VIETNAMESE"):
            if (ime_lastKeyboardType != 3)
            {
                ime_keyboard.ime_setLanguage(ime_french_keyboard_json);
                ime_keyboard.ime_DrawKeyboard();
                ime_candidate.ime_drawCandidateBar();
                ime_lastKeyboardType = 3;
            }
            break;
        case ime_Languages.getLanguage("HEBREW"):
            if (ime_lastKeyboardType != 5) {
                ime_keyboard.ime_setLanguage(ime_hebrew_keyboard_json);
                ime_keyboard.ime_DrawKeyboard();
                ime_candidate.ime_drawCandidateBar();
                ime_lastKeyboardType = 5;
            }
            break;
        case ime_Languages.getLanguage("ARABIC"):
            if (ime_lastKeyboardType != 6)
            {
                ime_keyboard.ime_setLanguage(ime_arabic_keyboard_json);
                ime_keyboard.ime_DrawKeyboard();
                ime_candidate.ime_drawCandidateBar();
                ime_lastKeyboardType = 6;
            }
            break;
        case ime_Languages.getLanguage("FARSI"):
        case ime_Languages.getLanguage("CHINESE_TRAD"):
            if (ime_lastKeyboardType != 7)
            {
                ime_keyboard.ime_setLanguage(ime_farsi_keyboard_json);
                ime_keyboard.ime_DrawKeyboard();
                ime_candidate.ime_drawCandidateBar();
                ime_lastKeyboardType = 7;
            }
            break;
        case ime_Languages.getLanguage("THAI"):
            if (ime_lastKeyboardType != 8)
            {
                ime_keyboard.ime_setLanguage(ime_thai_keyboard_json);
                ime_keyboard.ime_DrawKeyboard();
                ime_candidate.ime_drawCandidateBar();
                ime_lastKeyboardType = 8;
            }
            break;
    }
    ime_candidate.ime_back();
    ime_curLanguageSymbol =language;
    ime_display_language_small();
    ime_curShift = 0;
};

/**
 * Created by rengb on 2015/11/23.
 *
 * hold json data of every language
 *
 * json\u4E8C\u7EF4\u6570\u7EC4\uFF0C\u4E8C\u7EF4\u6570\u7EC4\u957F\u5EA6\u5373\u952E\u76D8\u7684\u5217\u6570
 */


/**
 * \u56DB\u884C\u7684\u4E8C\u7EF4json\u6570\u7EC4
 */


var ime_english_keyboard_json = [
    [
        {"li_id":"ime_keyboard_Q","input_id":"ime_keyboard_letters_Q","input_value":"Q","input_name":"Q","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_W","input_id":"ime_keyboard_letters_W","input_value":"W","input_name":"W","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_E","input_id":"ime_keyboard_letters_E","input_value":"E","input_name":"E","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_R","input_id":"ime_keyboard_letters_R","input_value":"R","input_name":"R","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_T","input_id":"ime_keyboard_letters_T","input_value":"T","input_name":"T","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_Y","input_id":"ime_keyboard_letters_Y","input_value":"Y","input_name":"Y","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_U","input_id":"ime_keyboard_letters_U","input_value":"U","input_name":"U","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_I","input_id":"ime_keyboard_letters_I","input_value":"I","input_name":"I","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_O","input_id":"ime_keyboard_letters_O","input_value":"O","input_name":"O","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_P","input_id":"ime_keyboard_letters_P","input_value":"P","input_name":"P","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_delete","input_id":"ime_keyboard_letters_delete","input_value":"","input_name":"delete","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/delete.png)"}
    ],
    [
        {"li_id":"ime_keyboard_A","input_id":"ime_keyboard_letters_A","input_value":"A","input_name":"A","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_S","input_id":"ime_keyboard_letters_S","input_value":"S","input_name":"S","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_D","input_id":"ime_keyboard_letters_D","input_value":"D","input_name":"D","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_F","input_id":"ime_keyboard_letters_F","input_value":"F","input_name":"F","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_G","input_id":"ime_keyboard_letters_G","input_value":"G","input_name":"G","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_H","input_id":"ime_keyboard_letters_H","input_value":"H","input_name":"H","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_J","input_id":"ime_keyboard_letters_J","input_value":"J","input_name":"J","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_K","input_id":"ime_keyboard_letters_K","input_value":"K","input_name":"K","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_L","input_id":"ime_keyboard_letters_L","input_value":"L","input_name":"L","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_exclamation","input_id":"ime_keyboard_letters_exclamation","input_value":"!","input_name":"exclamation","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_slash","input_id":"ime_keyboard_letters_slash","input_value":"/","input_name":"slash","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"}
    ],
    [
        {"li_id":"ime_keyboard_shift","input_id":"ime_keyboard_letters_shift","input_value":"","input_name":"shift","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/shift.png)"},
        {"li_id":"ime_keyboard_Z","input_id":"ime_keyboard_letters_Z","input_value":"Z","input_name":"Z","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_X","input_id":"ime_keyboard_letters_X","input_value":"X","input_name":"X","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_C","input_id":"ime_keyboard_letters_C","input_value":"C","input_name":"C","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_V","input_id":"ime_keyboard_letters_V","input_value":"V","input_name":"V","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_B","input_id":"ime_keyboard_letters_B","input_value":"B","input_name":"B","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_N","input_id":"ime_keyboard_letters_N","input_value":"N","input_name":"N","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_M","input_id":"ime_keyboard_letters_M","input_value":"M","input_name":"M","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_comma","input_id":"ime_keyboard_letters_comma","input_value":",","input_name":"comma","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_point","input_id":"ime_keyboard_letters_point","input_value":".","input_name":"point","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_question","input_id":"ime_keyboard_letters_question","input_value":"?","input_name":"question","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"}
    ],

    [
        {"li_id":"ime_keyboard_language_button_english","input_id":"ime_keyboard_letters_language","input_value":"English","input_name":"language","repeat_flag":2,"focus_img":"url(images/ime/focus_languages.png)","normal_img":"url(images/ime/normal_language.png)"},
        {"li_id":"ime_keyboard_language_button_english","input_id":"ime_keyboard_letters_language","input_value":"English","input_name":"language","repeat_flag":0,"focus_img":"url(images/ime/focus_languages.png)","normal_img":"url(images/ime/normal_language.png)"},
        {"li_id":"ime_keyboard_language_button_number","input_id":"ime_keyboard_letters_number","input_value":"123#","input_name":"number","repeat_flag":1,"focus_img":"url(images/ime/focus_languages.png)","normal_img":"url(images/ime/normal_language.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":5,"focus_img":"url(images/ime/focus_space.png)","normal_img":"url(images/ime/normal_space.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":0,"focus_img":"url(images/ime/focus_space.png)","normal_img":"url(images/ime/normal_space.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":0,"focus_img":"url(images/ime/focus_space.png)","normal_img":"url(images/ime/normal_space.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":0,"focus_img":"url(images/ime/focus_space.png)","normal_img":"url(images/ime/normal_space.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":0,"focus_img":"url(images/ime/focus_space.png)","normal_img":"url(images/ime/normal_space.png)"},
        {"li_id":"ime_keyboard_at","input_id":"ime_keyboard_letters_at","input_value":"@","input_name":"at","repeat_flag":1,"focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_function_setting","input_id":"ime_keyboard_letters_setting","input_value":"","input_name":"setting","repeat_flag":1,"focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/setting.png)"},
        {"li_id":"ime_keyboard_function_enter","input_id":"ime_keyboard_letters_enter","input_value":"","input_name":"enter","repeat_flag":1,"focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/enter.png)"}
    ]
];

/*russian*/

var ime_russian_keyboard_json = [
    [
        {"li_id":"ime_keyboard_Q","input_id":"ime_keyboard_letters_Q","input_value":"\u0439","input_name":"Q","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_W","input_id":"ime_keyboard_letters_W","input_value":"\u0446","input_name":"W","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_E","input_id":"ime_keyboard_letters_E","input_value":"\u0443","input_name":"E","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_R","input_id":"ime_keyboard_letters_R","input_value":"\u043A","input_name":"R","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_T","input_id":"ime_keyboard_letters_T","input_value":"\u0435","input_name":"T","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_Y","input_id":"ime_keyboard_letters_Y","input_value":"\u043D","input_name":"Y","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_U","input_id":"ime_keyboard_letters_U","input_value":"\u0433","input_name":"U","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_I","input_id":"ime_keyboard_letters_I","input_value":"\u0448","input_name":"I","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_O","input_id":"ime_keyboard_letters_O","input_value":"\u0449","input_name":"O","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_P","input_id":"ime_keyboard_letters_P","input_value":"\u0437","input_name":"P","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_delete","input_id":"ime_keyboard_letters_delete","input_value":"","input_name":"delete","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/delete.png)"}
    ],
    [
        {"li_id":"ime_keyboard_A","input_id":"ime_keyboard_letters_A","input_value":"\u0444","input_name":"A","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_S","input_id":"ime_keyboard_letters_S","input_value":"\u044B","input_name":"S","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_D","input_id":"ime_keyboard_letters_D","input_value":"\u0432","input_name":"D","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_F","input_id":"ime_keyboard_letters_F","input_value":"\u0430","input_name":"F","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_G","input_id":"ime_keyboard_letters_G","input_value":"\u043F","input_name":"G","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_H","input_id":"ime_keyboard_letters_H","input_value":"\u0440","input_name":"H","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_J","input_id":"ime_keyboard_letters_J","input_value":"\u043E","input_name":"J","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_K","input_id":"ime_keyboard_letters_K","input_value":"\u043B","input_name":"K","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_L","input_id":"ime_keyboard_letters_L","input_value":"\u0434","input_name":"L","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_exclamation","input_id":"ime_keyboard_letters_exclamation","input_value":"\u0436","input_name":"exclamation","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_slash","input_id":"ime_keyboard_letters_slash","input_value":"\u044D","input_name":"slash","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"}
    ],
    [
        {"li_id":"ime_keyboard_shift","input_id":"ime_keyboard_letters_shift","input_value":"","input_name":"shift","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/shift.png)"},
        {"li_id":"ime_keyboard_Z","input_id":"ime_keyboard_letters_Z","input_value":"\u044F","input_name":"Z","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_X","input_id":"ime_keyboard_letters_X","input_value":"\u0447","input_name":"X","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_C","input_id":"ime_keyboard_letters_C","input_value":"\u0441","input_name":"C","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_V","input_id":"ime_keyboard_letters_V","input_value":"\u043C","input_name":"V","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_B","input_id":"ime_keyboard_letters_B","input_value":"\u0438","input_name":"B","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_N","input_id":"ime_keyboard_letters_N","input_value":"\u0442","input_name":"N","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_M","input_id":"ime_keyboard_letters_M","input_value":"\u044C","input_name":"M","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_comma","input_id":"ime_keyboard_letters_comma","input_value":"\u0431","input_name":"comma","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_point","input_id":"ime_keyboard_letters_point","input_value":"\u044E","input_name":"point","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_question","input_id":"ime_keyboard_letters_question","input_value":"\u0445","input_name":"question","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"}
    ],

    [
        {"li_id":"ime_keyboard_language_button_english","input_id":"ime_keyboard_letters_language","input_value":"English","input_name":"language","repeat_flag":2,"focus_img":"url(images/ime/focus_languages.png)","normal_img":"url(images/ime/normal_language.png)"},
        {"li_id":"ime_keyboard_language_button_english","input_id":"ime_keyboard_letters_language","input_value":"English","input_name":"language","repeat_flag":0,"focus_img":"url(images/ime/focus_languages.png)","normal_img":"url(images/ime/normal_language.png)"},
        {"li_id":"ime_keyboard_language_button_number","input_id":"ime_keyboard_letters_number","input_value":"123#","input_name":"number","repeat_flag":1,"focus_img":"url(images/ime/focus_languages.png)","normal_img":"url(images/ime/normal_language.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":2,"focus_img":"url(images/ime/focus_space_2.png)","normal_img":"url(images/ime/normal_space_2.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":0,"focus_img":"url(images/ime/focus_space_2.png)","normal_img":"url(images/ime/normal_space_2.png)"},
        {"li_id":"ime_keyboard_1","input_id":"ime_keyboard_letters_1","input_value":",","input_name":"1","repeat_flag":1,"focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_2","input_id":"ime_keyboard_letters_2","input_value":".","input_name":"2","repeat_flag":1,"focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_3","input_id":"ime_keyboard_letters_3","input_value":"\u0451","input_name":"3","repeat_flag":1,"focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_at","input_id":"ime_keyboard_letters_at","input_value":"\u044A","input_name":"at","repeat_flag":1,"focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_function_setting","input_id":"ime_keyboard_letters_setting","input_value":"","input_name":"setting","repeat_flag":1,"focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/setting.png)"},
        {"li_id":"ime_keyboard_function_enter","input_id":"ime_keyboard_letters_enter","input_value":"","input_name":"enter","repeat_flag":1,"focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/enter.png)"}
    ]
];

/**
 * \u4E94\u884C\u7684\u4E8C\u7EF4json\u6570\u7EC4
 */


var ime_french_keyboard_json = [
    [
        {"li_id":"ime_keyboard_?","input_id":"ime_keyboard_letters_\u00E9","input_value":"\u00E9","input_name":"?","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_double_quotation" ,"input_id":"ime_keyboard_letters_double_quotation","input_value":"\"","input_name":"double_quotation","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_single_quotation","input_id":"ime_keyboard_letters_single_quotation","input_value":"\'","input_name":"single_quotation","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_left_bracket","input_id":"ime_keyboard_letters_left_bracket","input_value":"(","input_name":"left_bracket","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_midline","input_id":"ime_keyboard_letters_midline","input_value":"-","input_name":"midline","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_?","input_id":"ime_keyboard_letters_\u00E8","input_value":"\u00E8","input_name":"?","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_baseline","input_id":"ime_keyboard_letters_baseline","input_value":"_","input_name":"baseline","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_?","input_id":"ime_keyboard_letters_\u00E7","input_value":"\u00E7","input_name":"?","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_?","input_id":"ime_keyboard_letters_\u00E0","input_value":"\u00E0","input_name":"?","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_right_bracket","input_id":"ime_keyboard_letters_right_bracket","input_value":")","input_name":"right_bracket","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_delete","input_id":"ime_keyboard_letters_delete","input_value":"","input_name":"delete","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/delete.png)"}
    ],
    [
        {"li_id":"ime_keyboard_A","input_id":"ime_keyboard_letters_A","input_value":"a","input_name":"A","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_Z","input_id":"ime_keyboard_letters_Z","input_value":"z","input_name":"Z","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_E","input_id":"ime_keyboard_letters_E","input_value":"e","input_name":"E","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_R","input_id":"ime_keyboard_letters_R","input_value":"r","input_name":"R","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_T","input_id":"ime_keyboard_letters_T","input_value":"t","input_name":"T","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_Y","input_id":"ime_keyboard_letters_Y","input_value":"y","input_name":"Y","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_U","input_id":"ime_keyboard_letters_U","input_value":"u","input_name":"U","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_I","input_id":"ime_keyboard_letters_I","input_value":"i","input_name":"I","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_O","input_id":"ime_keyboard_letters_O","input_value":"o","input_name":"O","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_P","input_id":"ime_keyboard_letters_P","input_value":"p","input_name":"P","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_^","input_id":"ime_keyboard_letters_^","input_value":"^","input_name":"^","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"}
    ],
    [
        {"li_id":"ime_keyboard_Q","input_id":"ime_keyboard_letters_Q","input_value":"q","input_name":"Q","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_S","input_id":"ime_keyboard_letters_S","input_value":"s","input_name":"S","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_D","input_id":"ime_keyboard_letters_D","input_value":"d","input_name":"D","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_F","input_id":"ime_keyboard_letters_F","input_value":"f","input_name":"F","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_G","input_id":"ime_keyboard_letters_G","input_value":"g","input_name":"G","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_H","input_id":"ime_keyboard_letters_H","input_value":"h","input_name":"H","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_J","input_id":"ime_keyboard_letters_J","input_value":"j","input_name":"J","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_K","input_id":"ime_keyboard_letters_K","input_value":"k","input_name":"K","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_L","input_id":"ime_keyboard_letters_L","input_value":"l","input_name":"L","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_M","input_id":"ime_keyboard_letters_M","input_value":"m","input_name":"M","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_?","input_id":"ime_keyboard_letters_\u00F9","input_value":"\u00F9","input_name":"?","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"}
    ],
    [
        {"li_id":"ime_keyboard_shift","input_id":"ime_keyboard_letters_shift","input_value":"","input_name":"shift","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/shift.png)"},
        {"li_id":"ime_keyboard_W","input_id":"ime_keyboard_letters_W","input_value":"w","input_name":"W","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_X","input_id":"ime_keyboard_letters_X","input_value":"x","input_name":"X","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_C","input_id":"ime_keyboard_letters_C","input_value":"c","input_name":"C","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_V","input_id":"ime_keyboard_letters_V","input_value":"v","input_name":"V","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_B","input_id":"ime_keyboard_letters_B","input_value":"b","input_name":"B","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_N","input_id":"ime_keyboard_letters_N","input_value":"n","input_name":"N","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_comma","input_id":"ime_keyboard_letters_comma","input_value":",","input_name":"comma","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_point","input_id":"ime_keyboard_letters_point","input_value":".","input_name":"point","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_semicolon","input_id":"ime_keyboard_letters_semicolon","input_value":";","input_name":"semicolon","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_colon","input_id":"ime_keyboard_letters_colon","input_value":":","input_name":"colon","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"}
    ],
    [
        {"li_id":"ime_keyboard_language_button_english","input_id":"ime_keyboard_letters_language","input_value":"English","input_name":"language","repeat_flag":2,"focus_img":"url(images/french/focus_languages.png)","normal_img":"url(images/french/normal_language.png)"},
        {"li_id":"ime_keyboard_language_button_english","input_id":"ime_keyboard_letters_language","input_value":"English","input_name":"language","repeat_flag":0,"focus_img":"url(images/french/focus_languages.png)","normal_img":"url(images/french/normal_language.png)"},
        {"li_id":"ime_keyboard_language_button_number","input_id":"ime_keyboard_letters_number","input_value":"123#","input_name":"number","repeat_flag":1,"focus_img":"url(images/french/focus_languages.png)","normal_img":"url(images/french/normal_language.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":5,"focus_img":"url(images/french/focus_space.png)","normal_img":"url(images/french/normal_space.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":0,"focus_img":"url(images/french/focus_space.png)","normal_img":"url(images/french/normal_space.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":0,"focus_img":"url(images/french/focus_space.png)","normal_img":"url(images/french/normal_space.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":0,"focus_img":"url(images/french/focus_space.png)","normal_img":"url(images/french/normal_space.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":0,"focus_img":"url(images/french/focus_space.png)","normal_img":"url(images/french/normal_space.png)"},
        {"li_id":"ime_keyboard_at","input_id":"ime_keyboard_letters_at","input_value":"@","input_name":"at","repeat_flag":1,"focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_function_setting","input_id":"ime_keyboard_letters_setting","input_value":"","input_name":"setting","repeat_flag":1,"focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/setting.png)"},
        {"li_id":"ime_keyboard_function_enter","input_id":"ime_keyboard_letters_enter","input_value":"","input_name":"enter","repeat_flag":1,"focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/enter.png)"}
    ]
];


var ime_hebrew_keyboard_json = [
    [
        {"li_id":"ime_keyboard_/","input_id":"ime_keyboard_letters_/","input_value":"/","input_name":"/","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u05F3","input_id":"ime_keyboard_letters_\u05F3","input_value":"\u05F3","input_name":"\u05F3","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u05E7","input_id":"ime_keyboard_letters_\u05E7","input_value":"\u05E7","input_name":"\u05E7","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u05E8","input_id":"ime_keyboard_letters_\u05E8","input_value":"\u05E8","input_name":"\u05E8","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u05D0","input_id":"ime_keyboard_letters_\u05D0","input_value":"\u05D0","input_name":"\u05D0","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u05D8","input_id":"ime_keyboard_letters_\u05D8","input_value":"\u05D8","input_name":"\u05D8","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u05D5","input_id":"ime_keyboard_letters_\u05D5","input_value":"\u05D5","input_name":"\u05D5","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u05DF","input_id":"ime_keyboard_letters_\u05DF","input_value":"\u05DF","input_name":"\u05DF","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u05DD","input_id":"ime_keyboard_letters_\u05DD","input_value":"\u05DD","input_name":"\u05DD","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u05E4","input_id":"ime_keyboard_letters_\u05E4","input_value":"\u05E4","input_name":"\u05E4","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_delete","input_id":"ime_keyboard_letters_delete","input_value":"","input_name":"delete","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/delete.png)"}
    ],
    [
        {"li_id":"ime_keyboard_\u05E9","input_id":"ime_keyboard_letters_\u05E9","input_value":"\u05E9","input_name":"\u05E9","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u05D3","input_id":"ime_keyboard_letters_\u05D3","input_value":"\u05D3","input_name":"\u05D3","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u05D2","input_id":"ime_keyboard_letters_\u05D2","input_value":"\u05D2","input_name":"\u05D2","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u05DB","input_id":"ime_keyboard_letters_\u05DB","input_value":"\u05DB","input_name":"\u05DB","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u05E2","input_id":"ime_keyboard_letters_\u05E2","input_value":"\u05E2","input_name":"\u05E2","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u05D9","input_id":"ime_keyboard_letters_\u05D9","input_value":"\u05D9","input_name":"\u05D9","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u05D7","input_id":"ime_keyboard_letters_\u05D7","input_value":"\u05D7","input_name":"\u05D7","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u05DC","input_id":"ime_keyboard_letters_\u05DC","input_value":"\u05DC","input_name":"\u05DC","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u05DA","input_id":"ime_keyboard_letters_\u05DA","input_value":"\u05DA","input_name":"\u05DA","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u05E3","input_id":"ime_keyboard_letters_\u05E3","input_value":"\u05E3","input_name":"\u05E3","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_,","input_id":"ime_keyboard_letters_,","input_value":",","input_name":",","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"}
    ],
    [
        {"li_id":"ime_keyboard_\u05D6","input_id":"ime_keyboard_letters_\u05D6","input_value":"\u05D6","input_name":"\u05D6","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u05E1","input_id":"ime_keyboard_letters_\u05E1","input_value":"\u05E1","input_name":"\u05E1","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u05D1","input_id":"ime_keyboard_letters_\u05D1","input_value":"\u05D1","input_name":"\u05D1","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u05D4","input_id":"ime_keyboard_letters_\u05D4","input_value":"\u05D4","input_name":"\u05D4","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u05E0","input_id":"ime_keyboard_letters_\u05E0","input_value":"\u05E0","input_name":"\u05E0","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u05DE","input_id":"ime_keyboard_letters_\u05DE","input_value":"\u05DE","input_name":"\u05DE","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u05E6","input_id":"ime_keyboard_letters_\u05E6","input_value":"\u05E6","input_name":"\u05E6","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u05EA","input_id":"ime_keyboard_letters_\u05EA","input_value":"\u05EA","input_name":"\u05EA","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u05E5","input_id":"ime_keyboard_letters_\u05E5","input_value":"\u05E5","input_name":"\u05E5","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_.","input_id":"ime_keyboard_letters_.","input_value":".","input_name":".","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_;","input_id":"ime_keyboard_letters_;","input_value":";","input_name":";","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"}
    ],

    [
        {"li_id":"ime_keyboard_language_button_Hebrew","input_id":"ime_keyboard_letters_language","input_value":"Hebrew","input_name":"language","repeat_flag":2,"focus_img":"url(images/ime/focus_languages.png)","normal_img":"url(images/ime/normal_language.png)"},
        {"li_id":"ime_keyboard_language_button_Hebrew","input_id":"ime_keyboard_letters_language","input_value":"Hebrew","input_name":"language","repeat_flag":0,"focus_img":"url(images/ime/focus_languages.png)","normal_img":"url(images/ime/normal_language.png)"},
        {"li_id":"ime_keyboard_language_button_number","input_id":"ime_keyboard_letters_number","input_value":"123#","input_name":"number","repeat_flag":1,"focus_img":"url(images/ime/focus_languages.png)","normal_img":"url(images/ime/normal_language.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":5,"focus_img":"url(images/ime/focus_space.png)","normal_img":"url(images/ime/normal_space.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":0,"focus_img":"url(images/ime/focus_space.png)","normal_img":"url(images/ime/normal_space.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":0,"focus_img":"url(images/ime/focus_space.png)","normal_img":"url(images/ime/normal_space.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":0,"focus_img":"url(images/ime/focus_space.png)","normal_img":"url(images/ime/normal_space.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":0,"focus_img":"url(images/ime/focus_space.png)","normal_img":"url(images/ime/normal_space.png)"},
        {"li_id":"ime_keyboard_at","input_id":"ime_keyboard_letters_at","input_value":"@","input_name":"at","repeat_flag":1,"focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_function_setting","input_id":"ime_keyboard_letters_setting","input_value":"","input_name":"setting","repeat_flag":1,"focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/setting.png)"},
        {"li_id":"ime_keyboard_function_enter","input_id":"ime_keyboard_letters_enter","input_value":"","input_name":"enter","repeat_flag":1,"focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/enter.png)"}
    ]
];

var ime_arabic_keyboard_json = [
    [
        {"li_id":"ime_keyboard_\u0630","input_id":"ime_keyboard_letters_\u0630","input_value":"\u0630","input_name":"\u0630","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0636","input_id":"ime_keyboard_letters_\u0636","input_value":"\u0636","input_name":"\u0636","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0635","input_id":"ime_keyboard_letters_\u0635","input_value":"\u0635","input_name":"\u0635","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u062B","input_id":"ime_keyboard_letters_\u062B","input_value":"\u062B","input_name":"\u062B","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0642","input_id":"ime_keyboard_letters_\u0642","input_value":"\u0642","input_name":"\u0642","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0641","input_id":"ime_keyboard_letters_\u0641","input_value":"\u0641","input_name":"\u0641","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u063A","input_id":"ime_keyboard_letters_\u063A","input_value":"\u063A","input_name":"\u063A","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0639","input_id":"ime_keyboard_letters_\u0639","input_value":"\u0639","input_name":"\u0639","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u062E","input_id":"ime_keyboard_letters_\u062E","input_value":"\u062E","input_name":"\u062E","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u062D","input_id":"ime_keyboard_letters_\u062D","input_value":"\u062D","input_name":"\u062D","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u062C","input_id":"ime_keyboard_letters_\u062C","input_value":"\u062C","input_name":"\u062C","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_delete","input_id":"ime_keyboard_letters_delete","input_value":"","input_name":"delete","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/delete.png)"}
    ],
    [
        {"li_id":"ime_keyboard_\u0634","input_id":"ime_keyboard_letters_\u0634","input_value":"\u0634","input_name":"\u0634","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0633","input_id":"ime_keyboard_letters_\u0633","input_value":"\u0633","input_name":"\u0633","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u064A","input_id":"ime_keyboard_letters_\u064A","input_value":"\u064A","input_name":"\u064A","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0628","input_id":"ime_keyboard_letters_\u0628","input_value":"\u0628","input_name":"\u0628","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0644","input_id":"ime_keyboard_letters_\u0644","input_value":"\u0644","input_name":"\u0644","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0627","input_id":"ime_keyboard_letters_\u0627","input_value":"\u0627","input_name":"\u0627","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u062A","input_id":"ime_keyboard_letters_\u062A","input_value":"\u062A","input_name":"\u062A","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0646","input_id":"ime_keyboard_letters_\u0646","input_value":"\u0646","input_name":"\u0646","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0645","input_id":"ime_keyboard_letters_\u0645","input_value":"\u0645","input_name":"\u0645","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0643","input_id":"ime_keyboard_letters_\u0643","input_value":"\u0643","input_name":"\u0643","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0637","input_id":"ime_keyboard_letters_\u0637","input_value":"\u0637","input_name":"\u0637","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u062F","input_id":"ime_keyboard_letters_\u062F","input_value":"\u062F","input_name":"\u062F","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"}
    ],
    [
        {"li_id":"ime_keyboard_shift","input_id":"ime_keyboard_letters_shift","input_value":"","input_name":"shift","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/shift.png)"},
        {"li_id":"ime_keyboard_\u0621","input_id":"ime_keyboard_letters_\u0621","input_value":"\u0621","input_name":"\u0621","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0624","input_id":"ime_keyboard_letters_\u0624","input_value":"\u0624","input_name":"\u0624","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0626","input_id":"ime_keyboard_letters_\u0626","input_value":"\u0626","input_name":"\u0626","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0631","input_id":"ime_keyboard_letters_\u0631","input_value":"\u0631","input_name":"\u0631","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0644\u0627","input_id":"ime_keyboard_letters_\u0644\u0627","input_value":"\u0644\u0627","input_name":"\u0644\u0627","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0649","input_id":"ime_keyboard_letters_\u0649","input_value":"\u0649","input_name":"\u0649","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0629","input_id":"ime_keyboard_letters_\u0629","input_value":"\u0629","input_name":"\u0629","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0647","input_id":"ime_keyboard_letters_\u0647","input_value":"\u0647","input_name":"\u0647","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0648","input_id":"ime_keyboard_letters_\u0648","input_value":"\u0648","input_name":"\u0648","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0632","input_id":"ime_keyboard_letters_\u0632","input_value":"\u0632","input_name":"\u0632","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0638","input_id":"ime_keyboard_letters_\u0638","input_value":"\u0638","input_name":"\u0638","focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"}
    ],

    [
        {"li_id":"ime_keyboard_language_button_english","input_id":"ime_keyboard_letters_language","input_value":"Arabic","input_name":"language","repeat_flag":2,"focus_img":"url(images/ime/focus_languages.png)","normal_img":"url(images/ime/normal_language.png)"},
        {"li_id":"ime_keyboard_language_button_english","input_id":"ime_keyboard_letters_language","input_value":"Arabic","input_name":"language","repeat_flag":0,"focus_img":"url(images/ime/focus_languages.png)","normal_img":"url(images/ime/normal_language.png)"},
        {"li_id":"ime_keyboard_language_button_number","input_id":"ime_keyboard_letters_number","input_value":"123#","input_name":"number","repeat_flag":1,"focus_img":"url(images/ime/focus_languages.png)","normal_img":"url(images/ime/normal_language.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":5,"focus_img":"url(images/ime/focus_space.png)","normal_img":"url(images/ime/normal_space.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":0,"focus_img":"url(images/ime/focus_space.png)","normal_img":"url(images/ime/normal_space.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":0,"focus_img":"url(images/ime/focus_space.png)","normal_img":"url(images/ime/normal_space.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":0,"focus_img":"url(images/ime/focus_space.png)","normal_img":"url(images/ime/normal_space.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":0,"focus_img":"url(images/ime/focus_space.png)","normal_img":"url(images/ime/normal_space.png)"},
        {"li_id":"ime_keyboard_\u060c","input_id":"ime_keyboard_letters_\u060c","input_value":"\u060c","input_name":"\u060c","repeat_flag":1,"focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u002e","input_id":"ime_keyboard_letters_\u002e","input_value":"\u002e","input_name":"\u002e","repeat_flag":1,"focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/normal_letters.png)"},
        {"li_id":"ime_keyboard_function_setting","input_id":"ime_keyboard_letters_setting","input_value":"","input_name":"setting","repeat_flag":1,"focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/setting.png)"},
        {"li_id":"ime_keyboard_function_enter","input_id":"ime_keyboard_letters_enter","input_value":"","input_name":"enter","repeat_flag":1,"focus_img":"url(images/ime/focus_letters.png)","normal_img":"url(images/ime/enter.png)"}
    ]
];

var ime_farsi_keyboard_json = [
    [
        {"li_id":"ime_keyboard_\u06F1","input_id":"ime_keyboard_letters_\u06F1","input_value":"\u06F1","input_name":"\u06F1","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u06F2","input_id":"ime_keyboard_letters_\u06F2","input_value":"\u06F2","input_name":"\u06F2","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u06F3","input_id":"ime_keyboard_letters_\u06F3","input_value":"\u06F3","input_name":"\u06F3","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u06F4","input_id":"ime_keyboard_letters_\u06F4","input_value":"\u06F4","input_name":"\u06F4","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u06F5","input_id":"ime_keyboard_letters_\u06F5","input_value":"\u06F5","input_name":"\u06F5","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u06F6","input_id":"ime_keyboard_letters_\u06F6","input_value":"\u06F6","input_name":"\u06F6","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u06F7","input_id":"ime_keyboard_letters_\u06F7","input_value":"\u06F7","input_name":"\u06F7","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u06F8","input_id":"ime_keyboard_letters_\u06F8","input_value":"\u06F8","input_name":"\u06F8","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u06F9","input_id":"ime_keyboard_letters_\u06F9","input_value":"\u06F9","input_name":"\u06F9","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u06F0","input_id":"ime_keyboard_letters_\u06F0","input_value":"\u06F0","input_name":"\u06F0","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u060C","input_id":"ime_keyboard_letters_\u060C","input_value":"\u060C","input_name":"\u060C","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_delete","input_id":"ime_keyboard_letters_delete","input_value":"","input_name":"delete","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/delete.png)"}
    ],
    [
        {"li_id":"ime_keyboard_\u0636","input_id":"ime_keyboard_letters_\u0636","input_value":"\u0636","input_name":"\u0636","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0635","input_id":"ime_keyboard_letters_\u0635","input_value":"\u0635","input_name":"\u0635","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u062B","input_id":"ime_keyboard_letters_\u062B","input_value":"\u062B","input_name":"\u062B","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0642","input_id":"ime_keyboard_letters_\u0642","input_value":"\u0642","input_name":"\u0642","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0641","input_id":"ime_keyboard_letters_\u0641","input_value":"\u0641","input_name":"\u0641","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u063A","input_id":"ime_keyboard_letters_\u063A","input_value":"\u063A","input_name":"\u063A","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0639","input_id":"ime_keyboard_letters_\u0639","input_value":"\u0639","input_name":"\u0639","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0647","input_id":"ime_keyboard_letters_\u0647","input_value":"\u0647","input_name":"\u0647","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u062E","input_id":"ime_keyboard_letters_\u062E","input_value":"\u062E","input_name":"\u062E","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u062D","input_id":"ime_keyboard_letters_\u062D","input_value":"\u062D","input_name":"\u062D","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u062C","input_id":"ime_keyboard_letters_\u062C","input_value":"\u062C","input_name":"\u062C","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0686","input_id":"ime_keyboard_letters_\u0686","input_value":"\u0686","input_name":"\u0686","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"}
    ],
    [
        {"li_id":"ime_keyboard_\u0634","input_id":"ime_keyboard_letters_\u0634","input_value":"\u0634","input_name":"\u0634","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0633","input_id":"ime_keyboard_letters_\u0633","input_value":"\u0633","input_name":"\u0633","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u06CC","input_id":"ime_keyboard_letters_\u06CC","input_value":"\u06CC","input_name":"\u06CC","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0628","input_id":"ime_keyboard_letters_\u0628","input_value":"\u0628","input_name":"\u0628","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0644","input_id":"ime_keyboard_letters_\u0644","input_value":"\u0644","input_name":"\u0644","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0622","input_id":"ime_keyboard_letters_\u0622","input_value":"\u0622","input_name":"\u0622","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0627","input_id":"ime_keyboard_letters_\u0627","input_value":"\u0627","input_name":"\u0627","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u062A","input_id":"ime_keyboard_letters_\u062A","input_value":"\u062A","input_name":"\u062A","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0646","input_id":"ime_keyboard_letters_\u0646","input_value":"\u0646","input_name":"\u0646","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0645","input_id":"ime_keyboard_letters_\u0645","input_value":"\u0645","input_name":"\u0645","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u06A9","input_id":"ime_keyboard_letters_\u06A9","input_value":"\u06A9","input_name":"\u06A9","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u06AF","input_id":"ime_keyboard_letters_\u06AF","input_value":"\u06AF","input_name":"\u06AF","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"}
    ],
    [
        {"li_id":"ime_keyboard_\u064A","input_id":"ime_keyboard_letters_\u064A","input_value":"\u064A","input_name":"\u064A","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0626","input_id":"ime_keyboard_letters_\u0626","input_value":"\u0626","input_name":"\u0626","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0638","input_id":"ime_keyboard_letters_\u0638","input_value":"\u0638","input_name":"\u0638","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0637","input_id":"ime_keyboard_letters_\u0637","input_value":"\u0637","input_name":"\u0637","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0698","input_id":"ime_keyboard_letters_\u0698","input_value":"\u0698","input_name":"\u0698","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0632","input_id":"ime_keyboard_letters_\u0632","input_value":"\u0632","input_name":"\u0632","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0631","input_id":"ime_keyboard_letters_\u0631","input_value":"\u0631","input_name":"\u0631","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0630","input_id":"ime_keyboard_letters_\u0630","input_value":"\u0630","input_name":"\u0630","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u062F","input_id":"ime_keyboard_letters_\u062F","input_value":"\u062F","input_name":"\u062F","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u067E","input_id":"ime_keyboard_letters_\u067E","input_value":"\u067E","input_name":"\u067E","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0648","input_id":"ime_keyboard_letters_\u0648","input_value":"\u0648","input_name":"\u0648","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_.","input_id":"ime_keyboard_letters_.","input_value":".","input_name":".","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"}
    ],
    [
        {"li_id":"ime_keyboard_language_button_english","input_id":"ime_keyboard_letters_language","input_value":"Farsi","input_name":"language","repeat_flag":2,"focus_img":"url(images/french/focus_languages.png)","normal_img":"url(images/french/normal_language.png)"},
        {"li_id":"ime_keyboard_language_button_english","input_id":"ime_keyboard_letters_language","input_value":"Farsi","input_name":"language","repeat_flag":0,"focus_img":"url(images/french/focus_languages.png)","normal_img":"url(images/french/normal_language.png)"},
        {"li_id":"ime_keyboard_language_button_number","input_id":"ime_keyboard_letters_number","input_value":"123#","input_name":"number","repeat_flag":1,"focus_img":"url(images/french/focus_languages.png)","normal_img":"url(images/french/normal_language.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":5,"focus_img":"url(images/french/focus_space.png)","normal_img":"url(images/french/normal_space.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":0,"focus_img":"url(images/french/focus_space.png)","normal_img":"url(images/french/normal_space.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":0,"focus_img":"url(images/french/focus_space.png)","normal_img":"url(images/french/normal_space.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":0,"focus_img":"url(images/french/focus_space.png)","normal_img":"url(images/french/normal_space.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":0,"focus_img":"url(images/french/focus_space.png)","normal_img":"url(images/french/normal_space.png)"},
        {"li_id":"ime_keyboard_\u061f","input_id":"ime_keyboard_letters_\u061f","input_value":"\u061f","input_name":"\u061f","repeat_flag":1,"focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_at","input_id":"ime_keyboard_letters_at","input_value":"@","input_name":"at","repeat_flag":1,"focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_function_setting","input_id":"ime_keyboard_letters_setting","input_value":"","input_name":"setting","repeat_flag":1,"focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/setting.png)"},
        {"li_id":"ime_keyboard_function_enter","input_id":"ime_keyboard_letters_enter","input_value":"","input_name":"enter","repeat_flag":1,"focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/enter.png)"}
    ]
];

var ime_thai_keyboard_json = [
    [
        {"li_id":"ime_keyboard_\u0E45","input_id":"ime_keyboard_letters_\u0E45","input_value":"\u0E45","input_name":"\u0E45","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u05DA","input_id":"ime_keyboard_letters_\u05DA","input_value":"\u05DA","input_name":"\u05DA","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u05E3","input_id":"ime_keyboard_letters_\u05E3","input_value":"\u05E3","input_name":"\u05E3","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E20","input_id":"ime_keyboard_letters_\u0E20","input_value":"\u0E20","input_name":"\u0E20","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E16","input_id":"ime_keyboard_letters_\u0E16","input_value":"\u0E16","input_name":"\u0E16","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E38","input_id":"ime_keyboard_letters_\u0E38","input_value":"\u0E38","input_name":"\u0E38","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E36","input_id":"ime_keyboard_letters_\u0E36","input_value":"\u0E36","input_name":"\u0E36","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E04","input_id":"ime_keyboard_letters_\u0E04","input_value":"\u0E04","input_name":"\u0E04","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E15","input_id":"ime_keyboard_letters_\u0E15","input_value":"\u0E15","input_name":"\u0E15","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E08","input_id":"ime_keyboard_letters_\u0E08","input_value":"\u0E08","input_name":"\u0E08","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E02","input_id":"ime_keyboard_letters_\u0E02","input_value":"\u0E02","input_name":"\u0E02","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E0A","input_id":"ime_keyboard_letters_\u0E0A","input_value":"\u0E0A","input_name":"\u0E0A","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"}
    ],
    [
        {"li_id":"ime_keyboard_\u0E46","input_id":"ime_keyboard_letters_\u0E46","input_value":"\u0E46","input_name":"\u0E46","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E44","input_id":"ime_keyboard_letters_\u0E44","input_value":"\u0E44","input_name":"\u0E44","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E33","input_id":"ime_keyboard_letters_\u0E33","input_value":"\u0E33","input_name":"\u0E33","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E1E","input_id":"ime_keyboard_letters_\u0E1E","input_value":"\u0E1E","input_name":"\u0E1E","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E30","input_id":"ime_keyboard_letters_\u0E30","input_value":"\u0E30","input_name":"\u0E30","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E31","input_id":"ime_keyboard_letters_\u0E31","input_value":"\u0E31","input_name":"\u0E31","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E35","input_id":"ime_keyboard_letters_\u0E35","input_value":"\u0E35","input_name":"\u0E35","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E23","input_id":"ime_keyboard_letters_\u0E23","input_value":"\u0E23","input_name":"\u0E23","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E19","input_id":"ime_keyboard_letters_\u0E19","input_value":"\u0E19","input_name":"\u0E19","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E22","input_id":"ime_keyboard_letters_\u0E22","input_value":"\u0E22","input_name":"\u0E22","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E1A","input_id":"ime_keyboard_letters_\u0E1A","input_value":"\u0E1A","input_name":"\u0E1A","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E25","input_id":"ime_keyboard_letters_\u0E25","input_value":"\u0E25","input_name":"\u0E25","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"}
    ],
    [
        {"li_id":"ime_keyboard_\u0E1F","input_id":"ime_keyboard_letters_\u0E1F","input_value":"\u0E1F","input_name":"\u0E1F","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E2B","input_id":"ime_keyboard_letters_\u0E2B","input_value":"\u0E2B","input_name":"\u0E2B","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E01","input_id":"ime_keyboard_letters_\u0E01","input_value":"\u0E01","input_name":"\u0E01","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E14","input_id":"ime_keyboard_letters_\u0E14","input_value":"\u0E14","input_name":"\u0E14","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E40","input_id":"ime_keyboard_letters_\u0E40","input_value":"\u0E40","input_name":"\u0E40","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E49","input_id":"ime_keyboard_letters_\u0E49","input_value":"\u0E49","input_name":"\u0E49","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E48","input_id":"ime_keyboard_letters_\u0E48","input_value":"\u0E48","input_name":"\u0E48","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E32","input_id":"ime_keyboard_letters_\u0E32","input_value":"\u0E32","input_name":"\u0E32","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E2A","input_id":"ime_keyboard_letters_\u0E2A","input_value":"\u0E2A","input_name":"\u0E2A","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E27","input_id":"ime_keyboard_letters_\u0E27","input_value":"\u0E27","input_name":"\u0E27","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E07","input_id":"ime_keyboard_letters_\u0E07","input_value":"\u0E07","input_name":"\u0E07","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E03","input_id":"ime_keyboard_letters_\u0E03","input_value":"\u0E03","input_name":"\u0E03","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"}
    ],
    [
        {"li_id":"ime_keyboard_shift","input_id":"ime_keyboard_letters_shift","input_value":"","input_name":"shift","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/shift.png)"},
        {"li_id":"ime_keyboard_\u0E1C","input_id":"ime_keyboard_letters_\u0E1C","input_value":"\u0E1C","input_name":"\u0E1C","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E1B","input_id":"ime_keyboard_letters_\u0E1B","input_value":"\u0E1B","input_name":"\u0E1B","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E41","input_id":"ime_keyboard_letters_\u0E41","input_value":"\u0E41","input_name":"\u0E41","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E2D","input_id":"ime_keyboard_letters_\u0E2D","input_value":"\u0E2D","input_name":"\u0E2D","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E34","input_id":"ime_keyboard_letters_\u0E34","input_value":"\u0E34","input_name":"\u0E34","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E37","input_id":"ime_keyboard_letters_\u0E37","input_value":"\u0E37","input_name":"\u0E37","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E17","input_id":"ime_keyboard_letters_\u0E17","input_value":"\u0E17","input_name":"\u0E17","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E21","input_id":"ime_keyboard_letters_\u0E21","input_value":"\u0E21","input_name":"\u0E21","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E43","input_id":"ime_keyboard_letters_\u0E43","input_value":"\u0E43","input_name":"\u0E43","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_\u0E1D","input_id":"ime_keyboard_letters_\u0E1D","input_value":"\u0E1D","input_name":"\u0E1D","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_delete","input_id":"ime_keyboard_letters_delete","input_value":"","input_name":"delete","focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/delete.png)"}
    ],
    [
        {"li_id":"ime_keyboard_language_button_english","input_id":"ime_keyboard_letters_language","input_value":"Thai","input_name":"language","repeat_flag":2,"focus_img":"url(images/french/focus_languages.png)","normal_img":"url(images/french/normal_language.png)"},
        {"li_id":"ime_keyboard_language_button_english","input_id":"ime_keyboard_letters_language","input_value":"Thai","input_name":"language","repeat_flag":0,"focus_img":"url(images/french/focus_languages.png)","normal_img":"url(images/french/normal_language.png)"},
        {"li_id":"ime_keyboard_language_button_number","input_id":"ime_keyboard_letters_number","input_value":"123#","input_name":"number","repeat_flag":1,"focus_img":"url(images/french/focus_languages.png)","normal_img":"url(images/french/normal_language.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":5,"focus_img":"url(images/french/focus_space.png)","normal_img":"url(images/french/normal_space.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":0,"focus_img":"url(images/french/focus_space.png)","normal_img":"url(images/french/normal_space.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":0,"focus_img":"url(images/french/focus_space.png)","normal_img":"url(images/french/normal_space.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":0,"focus_img":"url(images/french/focus_space.png)","normal_img":"url(images/french/normal_space.png)"},
        {"li_id":"ime_keyboard_space","input_id":"ime_keyboard_letters_space","input_value":" ","input_name":"space","repeat_flag":0,"focus_img":"url(images/french/focus_space.png)","normal_img":"url(images/french/normal_space.png)"},
        {"li_id":"ime_keyboard_\u05E0","input_id":"ime_keyboard_letters_\u05E0","input_value":"!","input_name":"\u05E0","repeat_flag":1,"focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_at","input_id":"ime_keyboard_letters_at","input_value":"@","input_name":"at","repeat_flag":1,"focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/normal_letters.png)"},
        {"li_id":"ime_keyboard_function_setting","input_id":"ime_keyboard_letters_setting","input_value":"","input_name":"setting","repeat_flag":1,"focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/setting.png)"},
        {"li_id":"ime_keyboard_function_enter","input_id":"ime_keyboard_letters_enter","input_value":"","input_name":"enter","repeat_flag":1,"focus_img":"url(images/french/focus_letters.png)","normal_img":"url(images/french/enter.png)"}
    ]
];

/**
 * Created by rengb on 2015/12/4.
 */
/**
 * \u5E38\u91CF\u7C7B\uFF0C\u7528\u6765\u4FDD\u5B58\u6240\u6709\u56FD\u5BB6\u8BED\u8A00
 */
var ime_Languages = (function() {
    // Constants(Created as private static attributes)
    var constants = {
        ENGLISH     : "English",
        FRANCAISE   : "French",
        PORTUGAL    : "Portuguese",
        SPANISH     : "Spanish",
        DEUTSCH     : "German",
        POLSKI      : "Polski",
        SVENSKA     : "Svenska",
        ITALIAN     : "Italian",
        RUSSIAN     : "Russian",
        CZECH       : "Czech",
        CROATIAN    :"Croatian",
        LATVIAN     :"Latvian",
        LITHUANIAN   :"Lithuanian",
        ROMANIAN     :"Romanian",
        NORWEGIAN    :"Norwegian",
        SLOVENIAN    :"Slovenian",
        TURKISH      :"Turkish",
        UKRAINAIN    : "Ukrainain",
        GREEK         :"Greek",
        HUNGARIAN   :"Hungarian",
        ESTHONIAN    :"Estonian",
        BULGARIAN    :  "Bulgarian",
        DANISH       :  "Danish",
        FINNISH      :"Finnish",
        DUTCH        :"Dutch",
        SLOVAK       :"Slovakian",
        SERBIAN      :"Serbian",
        HEBREW      :"Hebrew",
        ARABIC           :"Arabic",
        FARSI              :"Farsi",
        UZBEK		   :"Uzbek",
        THAI            :"Thai",
        VIETNAMESE      :"Vietnamese",
        MALAY            :"Malay",
        INDONESIAN      :"Indonesian",
        MONGOL           :"Mongol",
        CHINESE_TRAD     :"ChineseTrad",
        CHINESE_SIMPLE     :"ChineseSimple",
    };
    var language_id = {
        ENGLISH : 0,
        FRANCAISE : 12,
        PORTUGAL : 0,//\u6682\u65E0\u8461\u8404\u7259\u8BED
        SPANISH : 15,
        DEUTSCH : 11,
        POLSKI : 34,
        SVENSKA : 31,
        ITALIAN : 13,
        RUSSIAN : 14,
        CZECH       : 55,
        CROATIAN    :40,
        LATVIAN     :58,
        HUNGARIAN   :35,
        ROMANIAN     :51,
        NORWEGIAN    :29,
        SLOVENIAN    :42,
        TURKISH      :27,
        UKRAINAIN    :46,
        GREEK         :36,
        LITHUANIAN   :54,
        ESTHONIAN    :53,
        BULGARIAN    :45,
        DANISH       :30,
        FINNISH      :37,
        DUTCH        :33,
        SLOVAK       :41,
        SERBIAN      :38,
        HEBREW      :26,
        ARABIC        :22,
        FARSI           :25,
        UZBEK         :61,
        THAI           :16,
        VIETNAMESE      :24,
        MALAY            :18,
        INDONESIAN      :17,
        MONGOL           :0,
        CHINESE_TRAD    :2,
        CHINESE_SIMPLE :1,
    };
    var languages = [];//\u4ECEsetting\u4E2D\u79FB\u5230\u4E86\u8FD9\u91CC\uFF0C\u4FDD\u8BC1\u540E\u7EED\u4FEE\u6539\u8BED\u8A00\u65F6\u53EA\u4FEE\u6539\u5E38\u91CF\u7C7B\u5373\u53EF
    for(var str in constants)
    {
        languages.push(constants[str]);
    }
    var ime_language_property_names =[];
    for(var str in constants)
    {
        ime_language_property_names.push("ime.ui.language."+constants[str]);
    }
    var ctor = function( constructorArguments ) {

    };
    // privileged static method
    ctor.getLanguage  = function( name ) {
        return constants[name ];
    };
    ctor.getLanguageID  = function( name ) {
        return language_id[name ];
    };
    ctor.getLanguageCount = function()
    {
        return languages.length;
    };
    ctor.getLanguagesArray = function()
    {

        return languages;
    };
    ctor.getLanguagePropertyNames = function()
    {
        return ime_language_property_names;
    };
    return ctor;
})();

var ime_Setting = (function ()
{
    /**
     *\u95ED\u5305\u5355\u4F8B\u6A21\u5F0F
     */
    function setting(ime_notice,ime_g_setting)
    {
        var ime_checkImg                  =[""+imagepath+"images/ime/unselected.png",""+imagepath+"images/ime/selected.png"];
        var ime_focusImg                  = ["url('')","url('"+imagepath+"images/ime/bg_normal_focus.png')"];
        var ime_setPositionH              =0;
        var ime_selectImgList;
        var ime_focusImgList;
        var ime_countryList               =[-1,-1,-1];
        var ime_countryCount              = 0;
        var ime_curCountry                =  "ime_cur_country";
        var ime_keyBoardFocus                 ="keyboard";
        var ime_mouseCallBack             = {Url:"",funcOk:function(){ime_toOkGetChar();},funcBack:function(){ime_hiddenKeySetting();}};
        var ime_KEY_SETTING_TOP_START    = 12;
        var ime_KEY_SETTING_TOP_STEP     = 61;
        var ime_prograssbarheigth = 0;
        var ime_onepagecount = 8;
        var ime_onepageheigth = 486;
        var ime_former_keydown;//\u539F\u6765\u7684onkeydown\u4E8B\u4EF6
	    var  ime_tips_flag = false;

        function ime_getEID(id)
        {
            return document.getElementById(id);
        }

        function getCurCountry()
        {
            return ime_curCountry;
        }

        function ime_checkKeyBoardEnable()//\u83B7\u53D6\u4FDD\u5B58\u7684\u8BED\u8A00\u5C5E\u6027
        {
            var k=0;
            for(var i=0;i<ime_Languages.getLanguageCount();i++)
            {

                if(TUtil.getProperty(ime_Languages.getLanguagePropertyNames()[i],"0")=="1")
                {
                    ime_countryList[k]=i;
                    k++;

                }
                if(k>=3)
                {
                    break;
                }
            }
            ime_countryCount=k;
        }

        function ime_hiddenKeySetting()//\u9690\u85CF\u8BED\u8A00\u9009\u62E9\u6846
        {
            document.body.removeChild(ime_getEID("bgRight"));
             document.body.removeChild(ime_getEID("settingTransportView"));
            ime_setPositionH=0;
            ime_keyBoardFocus = "keyboard";
            ime_checkKeyBoardEnable();//\u8BBE\u7F6E\u5B8C\u6BD5\u66F4\u65B0\u72B6\u6001,\u8FD9\u6837language button\u624D\u80FD\u6B63\u786E\u54CD\u5E94
            document.onsystemevent = ime_former_keydown;//\u9690\u85CF\u540E\u5C06\u6309\u952E\u4E8B\u4EF6\u8FD8\u7ED9\u539F\u6765\u7684
        }

        function ime_showLangSetting()//\u663E\u793A\u8BED\u8A00\u9009\u62E9\u6846
        {
            ime_former_keydown = document.onsystemevent;
            document.onsystemevent = ime_settingKeyDown;


            var transportView = document.createElement("div");
            transportView.style.cssText = " height: 720px;width: 1280px;bottom:0px;position:fixed;z-index: 2147483641;background-color: rgba(0,0,0,0)";
            transportView.style.zoom = zoomFactor;
            transportView.id = "settingTransportView";
            document.body.appendChild(transportView);

            var setDivBgRight = document.createElement("div");
            setDivBgRight.style.position="fixed";
            setDivBgRight.style.height="567px";
            setDivBgRight.style.width="592px";
            setDivBgRight.style.left="366px";
            setDivBgRight.style.bottom="53px";
            setDivBgRight.style.zoom = zoomFactor;
       //     setDivBgRight.style.opacity="0.92";
            setDivBgRight.id="bgRight";
            setDivBgRight.style.zIndex="2147483642";
            setDivBgRight.style.backgroundImage="url('"+imagepath+"images/ime/bg_setting.png')";
            setDivBgRight.onmousedown = function(evt){
                //   top.timeoutFuc.osdTimeoutEndFuc();
                evt.preventDefault();
                if(evt.button == 2){
                    //right key
                    if(ime_keyBoardFocus == "keySetting")
                    {
                        ime_mouseCallBack.funcBack()
                    }
                }
                //	top.timeoutFuc.osdTimeoutStartFuc();
            };

            document.body.appendChild(setDivBgRight);

             transportView.onmousedown=function(evt)
            {
            	evt.preventDefault();
                //document.body.removeChild(setDivBgRight);
                ime_mouseCallBack.funcBack()

            };

            var remindSpan   = document.createElement("div");
            remindSpan.style.position="absolute";
            remindSpan.style.width ="460px";
            remindSpan.style.top = "0px";
            remindSpan.style.left = "40px";
            remindSpan.style.height="80px"
            remindSpan.style.color="#FFFFFF";
            remindSpan.style.fontSize="30px"
            remindSpan.style.lineHeight="80px";
            remindSpan.innerHTML="Keyboard and input methods";
            ime_getEID("bgRight").appendChild(remindSpan);

            var selectdiv = document.createElement("div");
            selectdiv.style.position="absolute";
            selectdiv.style.top=77+"px";
            selectdiv.style.left=2+"px";
            selectdiv.style.width="579px";
            selectdiv.style.height="488px";
            selectdiv.id="selectdiv";
            selectdiv.style.overflow="hidden";

            ime_getEID("bgRight").appendChild(selectdiv);
            var selectul = document.createElement("ul");
            selectul.id = "selectul";
            selectul.style.position="absolute";
            selectul.style.top = "0px";
            selectul.style.left = "0px";
            selectul.style.margin = "0px";
            selectul.style.padding = "0px";
            ime_getEID("selectdiv").appendChild(selectul);
            for(var i=0;i<ime_Languages.getLanguageCount();i++)
            {
                var selectli = document.createElement("li");
                selectli.style.top=0+"px";
                selectli.style.left=2+"px";
                selectli.style.width="392px";
                selectli.style.height="61px";
                selectli.style.listStyle = "none";
                selectli.float = "left";
                selectli.setAttribute("newAttr",i);
                selectli.id = "selectli"+i;
                ime_getEID("selectul").appendChild(selectli);

                var selectImgFocus = document.createElement("div");
                selectImgFocus.style.position="absolute";
                selectImgFocus.style.top=i*61+"px";
                selectImgFocus.style.left="0px";
                selectImgFocus.style.width="867px";
                selectImgFocus.style.height="61px";
                selectImgFocus.style.backgroundImage=ime_focusImg[0];

                var selectImg = document.createElement("img");
                selectImg.src=ime_checkImg[0];
                selectImg.style.position="absolute";
                selectImg.style.top=12+i*61+"px";
                selectImg.style.left="20px";
                var selectSpan = document.createElement("span");
                selectSpan.style.position="absolute";
                selectSpan.style.top=12+i*61+"px";
                selectSpan.style.left=100+"px";
                selectSpan.style.width="488px";
                selectSpan.style.height="61px";
                selectSpan.style.color="#ffffff";
                selectSpan.style.fontSize="30px";
                selectSpan.innerHTML=ime_Languages.getLanguagesArray()[i];
                selectli.onmousedown = function(evt){
                    if(evt.button == 0){
                        evt.preventDefault();
                        //right key
                        if(ime_keyBoardFocus == "keySetting")
                        {
                            ime_focusImgList[ime_setPositionH].style.backgroundImage=ime_focusImg[0];
                            ime_setPositionH = parseInt(this.getAttribute("newAttr"));
                            ime_focusImgList[ime_setPositionH].style.backgroundImage=ime_focusImg[1];
                            ime_mouseCallBack.funcOk();
                        }
                    }
                };
                ime_getEID("selectli"+ i).appendChild(selectImgFocus);
                ime_getEID("selectli"+ i).appendChild(selectImg);
                ime_getEID("selectli"+ i).appendChild(selectSpan);
            }

            var progressBarBg   = document.createElement("img");
            progressBarBg.style.position="absolute";
            progressBarBg.style.width ="11px";
            progressBarBg.style.top = "77px";
            progressBarBg.style.left = "579px";
            progressBarBg.style.height="486px"
            progressBarBg.src=""+imagepath+"images/ime/settscrollbarbg.png";
            progressBarBg.id="progressBarBg";

            ime_getEID("bgRight").appendChild(progressBarBg);

            var limitTips = document.createElement("div");//tips
            limitTips.id = "LimitTips";
            limitTips.style.cssText = " background-color:rgba(32,32,33,1);height: 60px;line-height:60px;width: 572px; position: absolute ;font-size: 19px;color:white;font-weight:bold; text-align: center;vertical-align: middle;display:none;border:5px solid;border-color:rgb(55,62,63)";
			limitTips.style.zIndex="2147483641";
			limitTips.style.left="349px";
            limitTips.style.top="200px";
			document.body.appendChild(limitTips);

            var progressBar   = document.createElement("img");
            progressBar.style.position="absolute";
            progressBar.style.width ="11px";
            progressBar.style.top = "77px";
            progressBar.style.left = "579px";
            progressBar.style.height="486px";
            progressBar.src=""+imagepath+"images/ime/settscrollbar.png";
            progressBar.id="progressBar";
            ime_getEID("bgRight").appendChild(progressBar);
            progressBarBg.onmousedown = function(evt){
                if(evt.button == 0){
                    evt.preventDefault();
                    //right key
                    if(ime_keyBoardFocus == "keySetting") {
                    	var heightFlag = getAbsoluteTop(progressBar) + parseInt(progressBar.style.height);
                    	var moveHeight = (parseInt(progressBarBg.style.height)-ime_prograssbarheigth)/(ime_Languages.getLanguageCount()-ime_onepagecount);
                    	moveHeight.toFixed(10);
                    	if(evt.clientY > heightFlag){
                    		 
				            progressBar.style.top = (parseFloat(progressBar.style.top)+moveHeight).toFixed(10)+'px';
				             
				            selectul.style.top = parseInt(selectul.style.top)-61+'px';
				        }else if(evt.clientY < getAbsoluteTop(progressBar)){
				        
				            progressBar.style.top =  (parseFloat(progressBar.style.top)-moveHeight).toFixed(10)+'px';
				             
				            selectul.style.top = parseInt(selectul.style.top)+61+'px';
				        }
                	}
                }
            };
            if(ime_Languages.getLanguageCount()> ime_onepagecount)
                ime_prograssbarheigth =ime_onepagecount * ime_onepageheigth/ime_Languages.getLanguageCount();
            else
                ime_prograssbarheigth =(ime_onepagecount * ime_KEY_SETTING_TOP_STEP);
            ime_getEID("progressBar").style.height=ime_prograssbarheigth + "px";

            ime_focusImgList=ime_getEID("selectul").getElementsByTagName("div");
            ime_focusImgList[0].style.backgroundImage=ime_focusImg[1];

            ime_selectImgList=ime_getEID("selectul").getElementsByTagName("img");
            for(var i=0;i<ime_countryCount;i++)
            {
                ime_selectImgList[ime_countryList[i]].src=ime_checkImg[1];
            }
            ime_keyBoardFocus = "keySetting";
        }
		function getAbsoluteTop(e){
	        var offset=e.offsetTop;
	        if(e.offsetParent!=null) offset+=getAbsoluteTop(e.offsetParent);
	        return offset;
  		}

        function ime_moveLeft()
        {
            ime_hiddenKeySetting();
        }

        function ime_moveRight()
        {
            ime_toOkGetChar();
        }
        function ime_moveUp()
        {
            var position = 0;

            ime_focusImgList[ime_setPositionH ].style.backgroundImage=ime_focusImg[0];
            ime_setPositionH--;
            if(ime_setPositionH<0)
            {
                ime_setPositionH=ime_selectImgList.length - 1;
            }
            if(ime_setPositionH >=7)
            {
                position = 7;
                ime_getEID("selectul").style.top=-(ime_setPositionH-position)*61+"px";
            }
            else
                position = ime_setPositionH;
            ime_focusImgList[ime_setPositionH ].style.backgroundImage=ime_focusImg[1];
            if(ime_setPositionH >7)
                ime_getEID("progressBar").style.top=77 + (ime_setPositionH-7) * ime_prograssbarheigth/ime_onepagecount + "px";
            else
                ime_getEID("progressBar").style.top="77px";
        }
        function ime_moveDown()
        {
            var position = 0;

            ime_focusImgList[ime_setPositionH ].style.backgroundImage=ime_focusImg[0];
            ime_setPositionH++;
            if(ime_setPositionH>=ime_selectImgList.length)
            {
                ime_setPositionH=0;
                ime_getEID("selectul").style.top="0px";
            }
            if(ime_setPositionH >=7)
            {
                position = 7;
                ime_getEID("selectul").style.top=-(ime_setPositionH-position)*61+"px";
            }
            else
                position = ime_setPositionH;

            ime_focusImgList[ime_setPositionH ].style.backgroundImage=ime_focusImg[1];

            if(ime_setPositionH >7)
                ime_getEID("progressBar").style.top=77 + (ime_setPositionH-7) * ime_prograssbarheigth/ime_onepagecount + "px";
            else
                ime_getEID("progressBar").style.top="77px";
        }

        function ime_toOkGetChar()
        {
            for (var i=0;i<ime_countryCount;i++)
            {
                if(ime_setPositionH==ime_countryList[i])
                {
                    //  if(ime_setPositionH==localStorage.getItem(ime_curCountry))//\u5220\u9664\u5F53\u524D\u6B63\u5728\u4F7F\u7528\u7684\u8BED\u8A00\uFF0C\u5FFD\u7565\u5220\u9664\u64CD\u4F5C
                    if(ime_setPositionH==parseInt(ime_g_setting.getProperty(ime_curCountry,"0")))//\u5220\u9664\u5F53\u524D\u6B63\u5728\u4F7F\u7528\u7684\u8BED\u8A00\uFF0C\u5FFD\u7565\u5220\u9664\u64CD\u4F5C
                    {
                    	cancelTipsDisplay();
                        return;
                    }
                    else
                    {

                        ime_selectImgList[ime_setPositionH].src=ime_checkImg[0];
                        ime_deleteLang(ime_setPositionH);

                        ime_g_setting.setProperty(ime_Languages.getLanguagePropertyNames()[ime_setPositionH],"0");
                    }
                    return;
                }
            }

            if(ime_countryCount<3)//\u8BED\u8A00\u6700\u591A\u4E09\u79CD
            {
                ime_selectImgList[ime_setPositionH].src=ime_checkImg[1];
                ime_addLang(ime_setPositionH);
                ime_g_setting.setProperty(ime_Languages.getLanguagePropertyNames()[ime_setPositionH],"1");

            }else{
            	limitTipsDisplay();
            }
        }

        function ime_deleteLang(index)//\u5220\u9664\u8BED\u8A00
        {
            for(var i=0;i<ime_countryList.length;i++)
            {
                if(ime_countryList[i]==index)
                {
                    for(var j=i;j<ime_countryList.length;j++)
                    {
                        ime_countryList[j]=ime_countryList[j+1];
                    }
                    ime_countryList[ime_countryList.length-1]=-1;
                    ime_countryCount--;
                    break;
                }
            }
        }
        function ime_addLang(index)//\u6DFB\u52A0\u8BED\u8A00
        {
            ime_countryList[ime_countryCount]=index;
            ime_countryCount++;
        }

        function ime_change_language()//\u6309language button\u5207\u6362\u8BED\u8A00
        {
            var i = 0;
            // var ime_cur = localStorage.getItem(ime_curCountry);
            var ime_cur =  parseInt(ime_g_setting.getProperty(ime_curCountry,"0"));
            for(;i < ime_countryCount; i++)
            {
                if(ime_cur == ime_countryList[i])//\u83B7\u53D6\u5F53\u524D\u8BED\u8A00\u5728imecountryList\u4E2D\u7684index
                {
                    break;
                }
            }
            if(i+1 < ime_countryCount)
            {
                i +=1;
            }else
            {
                i = 0;
            }
            ime_notice.ime_notice(ime_Languages.getLanguagesArray()[ime_countryList[i]]);//\u901A\u77E5\u663E\u793A\u54EA\u79CD\u8BED\u8A00
            //  localStorage.setItem(ime_curCountry,ime_countryList[i]);//\u8BBE\u7F6E\u5F53\u524D\u8BED\u8A00\u7684index
            ime_g_setting.setProperty(ime_curCountry,""+ime_countryList[i]);
        }

		function drawTips(str)
		{
			 var tips = document.createElement("div");
             tips.style.cssText = "height: 567px;width: 592px;position: absolute;background-color: rgba(0,0,0,0.8)";
          	ime_getEID("bgRight").appendChild(tips);
             var tipsImg = document.createElement("div");
             tipsImg.style.cssText = "width: 552px;height: 119px;position: absolute;margin-top: 224px;margin-left:20px";
             tipsImg.style.backgroundImage = "url("+imagepath+"images/ime/settingTip.png)";
             tips.appendChild(tipsImg);
             var tipSpan = document.createElement("div");
             tipSpan.style.cssText = " position: absolute;font-size: 22px;color: #AFB5BA;margin-left: 110px;margin-top: 45px;width: 430px;height: auto;text-align: center;";
             tipSpan.innerHTML = str;
             tipsImg.appendChild(tipSpan);
             setTimeout(function(){ ime_tips_flag = false; ime_getEID("bgRight").removeChild(tips);},3000);
		}
		 function limitTipsDisplay()
        {
        	ime_tips_flag = true;
            drawTips("You can choose three language at most.");
        }

        function cancelTipsDisplay()
        {
            ime_tips_flag = true;
            drawTips("The current language can't be cancelled.");
        }

        //\u76D1\u542C\u6309\u952E\u4E8B\u4EF6
        function ime_settingKeyDown(evt)
        {
            var code = evt.eventCode;
			if(ime_tips_flag)
				return;
            switch(code) {
                case 8://\u54CD\u5E94back\u6309\u952E
                    ime_hiddenKeySetting();
                    break;
                case 40://down
                    ime_moveDown();
                    break;
                case 38://up
                    ime_moveUp();
                    break;
                case 13://ok
                    if(1)//evt.modifiers == 0)
                        ime_toOkGetChar();
                    break;
            }
        }





        /**
         * \u66B4\u9732\u7684public\u65B9\u6CD5\u548C\u5C5E\u6027
         */
        return{
            ime_change_language:ime_change_language,//\u6309\u8BED\u8A00\u6309\u952E\u65F6\u5207\u6362\u8BED\u8A00
            ime_showLangSetting:ime_showLangSetting,//\u663E\u793Asetting
            getCurCountry:getCurCountry,//\u83B7\u53D6\u5F53\u524D\u7684country
            ime_checkKeyBoardEnable:ime_checkKeyBoardEnable//\u8BBE\u7F6E\u540E\u6216\u5F00\u673A\u65F6\u68C0\u7D22\u54EA\u4E9B\u8BED\u8A00\u88AB\u9009\u4E2D\u4E86
        };

    }

/**
 * \u5B9E\u4F8B\u5BB9\u5668
 */
var instance;

return {
    getInstance: function (ime_notice,ime_g_setting)
    {
        if (instance === undefined)
        {
            instance =  setting(ime_notice,ime_g_setting);
        }
        return instance;
    }
};
})();



function initSetRegion()
{
	//imagepath = ime_g_setting.getProperty("ro.sita.model.Apps.ui_branch", "file:///system/ui_tcl/framework.html");
   // imagepath = prefix.replace("framework.html", "");
   //imagepath = "file:///system/ui3/utils/js/"
   imagepath = "file:///system/ui/";

//imagepath = ""
//imagepath = "file:///system/tbrowser2/config/inject/"
}
//\u952E\u76D8\u521D\u59CB\u5316\u51FD\u6570
function ime_keyboard_Onload()
{
    var loadFlag = sessionStorage.getItem("IME_LOAD_FLAG");
    if(1 == loadFlag)
    {
        return;
    }
    else
    {
        sessionStorage.setItem("IME_LOAD_FLAG",1);
    }
    nowInputValueA=document.activeElement.value;
    initSetRegion();
    ime_button_proxy = new IME_Button_Proxy();

    ime_candidate = ime_Candidate.getInstance();

    console.log("keyboard IQQI initial start");
    var ret = ime_requestIQQI(method.initial,"/system/apps/input_method/IQQIDB/PredicDB","/data/IQQIDB/UserDB");
    console.log("keyboard IQQI initial ret="+ret);

    //\u8C03\u7528\u952E\u76D8\u7C7B
    ime_keyboard = ime_Keyboard.getInstance(ime_button_proxy);

    ime_notice_change_language = new IME_Notice();
    ime_set_press_language.ime_regist(ime_notice_change_language);
    ime_display_language.ime_regist(ime_notice_change_language);

    //setting\u7C7B
    ime_setting = ime_Setting.getInstance(ime_notice_change_language, ime_g_setting);

    if(ime_g_setting.getProperty(ime_is_tv_first_on,"0")=="0")
    {
        //window.alert("first tv on");
        ime_notice_change_language.ime_notice(ime_Languages.getLanguage("ENGLISH"));
        ime_g_setting.setProperty(ime_Languages.getLanguagePropertyNames()[0],"1");
        ime_g_setting.setProperty(ime_is_tv_first_on,"1");
        ime_g_setting.setProperty(ime_setting.getCurCountry(),"0");

    }else
    {
        //\u542F\u52A8\u952E\u76D8\u65F6\u83B7\u53D6\u4FDD\u5B58\u7684\u5F53\u524D\u8BED\u8A00
        ime_notice_change_language.ime_notice(ime_Languages.getLanguagesArray()[parseInt(ime_g_setting.getProperty(ime_setting.getCurCountry(),"0"))]);
    }

    ime_setting.ime_checkKeyBoardEnable();//\u663E\u793A\u952E\u76D8\u65F6\u68C0\u7D22\u54EA\u4E9B\u8BED\u8A00\u88AB\u9009\u4E2D\u4E86
}



function ime_keyDown(evt)
{
    if(ime_hostSystemevent)
    {
        ime_hostSystemevent(evt);
    }
    var code = evt.keyCode || evt.which;
    if(ime_candidate != undefined && ime_candidate.ime_candidate_IsDisplay())
    {
        ime_candidate.ime_keydown_bar(evt);
        return;
    }


    code = evt.eventCode;
    console.log("keyboard the code is "+code +"the modifiers is "+ evt.eventData);
    if(ime_getEID("ime_keyboard_ui")==null && code != 1001){
        ime_closeKeyBoard();
    }

    switch(code){
        case 1001:
           TUtil.setEnv("TBROWSER_IME_STATE", "1");
           TUtil.notifyActiveIMEState(1);
            ime_keyboard_Onload();
            break;
        case 39:
            ime_keyboard.ime_right();
            break;
        case 37://left
            ime_keyboard.ime_left();
            break;
        case 40://down
            if (ime_getEID("ime_keyboard_ui_bar").style.display == "block") {
                if (ime_keyboard.ime_cur_row() == ime_keyboard.ime_cur_rownum() - 1)
                {
                    ime_keyboard.ime_lostfocus();
                    ime_candidate.ime_candidateWordsGetFocus();
                }
                else
                    ime_keyboard.ime_down();
            }
            else
                ime_keyboard.ime_down();
            break;
        case 38://up
            if (ime_getEID("ime_keyboard_ui_bar").style.display == "block")
            {
                if (ime_keyboard.ime_cur_row() == 0)
                {
                    ime_keyboard.ime_lostfocus();
                    ime_candidate.ime_candidateWordsGetFocus();
                }
                else
                    ime_keyboard.ime_up();
            }
            else
                ime_keyboard.ime_up();
            break;
        case 13://enter
            if(1)//evt.modifiers == 0)
                ime_keyboard.ime_enter();
            else
            {
                if (ime_repeatTimerIndex != 0)
                {
                    clearInterval(ime_repeatTimerIndex);
                    ime_repeatTimerIndex = 0;
                }
            }
            break;
        case 8 ://back
		case 27://exit
            ime_closeKeyBoard();
            break;
        default:
            if(code > 1000 && code != 1001){
                break;
            }
            code = evt.eventData;
            //if (evt.modifiers & 0x100 ) {
            //    code = code | 0x200;
            //    ime_language_hardKeyBoard(code);
            //}
            //else if (evt.modifiers & 0x2000 )
            //{
            //    ime_language_specialHardKeyBoard(code)
            //    if(ime_specialflag == 0)
            //    {
            //        ime_language_hardKeyBoard(code);
            //    }
            //}
            //else
            {
                ime_language_hardKeyBoard(code);
            }

    }
}

function ime_closeKeyBoard()//\u9000\u51FA\u591A\u529F\u80FD\u8F93\u5165\u6CD5
{
   // ime_candidate.ime_candidate_clear();//\u6E05\u695A\u72B6\u6001
    dispatchUIEvent(uiEvent, "keypress");
    ime_lastKeyboardType = 0;
    TUtil.notifyActiveIMEState(0);
    TUtil.setEnv("TBROWSER_IME_STATE", "0");

    var uiNode = ime_getEID("ime_keyboard_ui");
    if(uiNode != undefined && uiNode != null) {
        document.body.removeChild(uiNode);
    }

    var keyboardNode = ime_getEID("keboardTransport");
    if(keyboardNode != undefined && keyboardNode != null) {
        document.body.removeChild(keyboardNode);
    }
    if(ime_keyboard != undefined && ime_keyboard != null){
        ime_keyboard.ime_destoryKeyboard();
    }
    
    sessionStorage.setItem("IME_LOAD_FLAG",0);

	AppManager.sendBroadcast("tos.broadcast.close.ime","");
    //ime_g_setting.aPI_IQQI_Deinitial();
}
