var TCLIME_hostSysEvent;
var TCLIME_currentElement;
var TCLIME;		//\u9009\u4E2D\u6587\u672C\u6846\u7126\u70B9\u5BF9\u8C61
//if (window.top == window) {
	TCLIME_hostSysEvent = document.onsystemevent;
	document.body.TCLIME_hostRemoveChild = document.body.removeChild;
	document.body.removeChild = TCLIME_removeChild;
	document.onsystemevent = tclIME_SysEvent;
	TCLIME = new createTCLIME();     //\u8F6F\u952E\u76D8\u5BF9\u8C61

    console.log("***************quanhw test TCLIME************");
    TUtil.println("--- quanhw run TCLIME ---");
    TUtil.notifyActiveIMEState(0);
//}


function tclIME_SysEvent()
{
    if(TCLIME_hostSysEvent)
    {
        TCLIME_hostSysEvent(event);
    }
    var keyCode = event.eventCode;
    TUtil.println("--- quanhw test tclIME_SysEvent--- " + keyCode);
    switch (keyCode)
    {
		case 1001:
			//TUtil.setEnv("TBROWSER_IME_STATE", "1");
            TUtil.notifyActiveIMEState(1);
            TCLIME_currentElement = event.target;
        	TCLIME.showKeyBoard();
			break;
        case 37:
            TCLIME.toLeft();
            break;
        case 38:
            TCLIME.toUp();
            break;
        case 39:
            TCLIME.toRight();
            break;
        case 40:
            TCLIME.toDown();
            break;
        case 13:
	        	if(event.eventData == 0)
	        	{
	        		TCLIME.toOk();
	        	}
            break;
        case 8:
            TCLIME.toBack();
            break;
        default :
            return true;
    }
    return false;
}

function TCLIME_removeChild(e)
{
    if(e.id != "TCLIME_mainDiv")
    {
        document.body.TCLIME_hostRemoveChild(e);
    }
}

function createTCLIME()
{
    var keyBoardSymbolPage1 = [["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "back"], ["\\", "#", "$", "%", "&", "*", "(", ")", "/", "_", "..."], ["symPage1", ",", ".", "?", "!", ":", ";", "\"", "'", "<", ">"]];
    var keyBoardSymbolPage2 = [["[", "]", "{", "}", "+", "-", "\u00D7", "\u00F7", "=", "\u00B1", "back"], ["\u00AB", "\u00BB", "\u00A6", "\u00B4", "^", "~", "\u00A9", "\u00AE", "\u00A5", "\u00A3", "\u20AC"], ["symPage2", "www.", "wap.", ".com", ".cn", ".org", ".net", "bbs.", "blog.", "http:", "3g."]];
    var enCapitalLetter = [["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "back"], ["A", "S", "D", "F", "G", "H", "J", "K", "L", "!", "/"], ["shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "?"]];//\u5927\u5199\u5B57\u6BCD\u96C6
    var enMinuscules = [["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "back"], ["a", "s", "d", "f", "g", "h", "j", "k", "l", "!", "/"], ["shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?"]];//\u5C0F\u5199\u5B57\u6BCD\u96C6

    var fraCapitalLetter = [[["Q"], ["W"], ["E", "\u0116", "\u0112", "\u0118", "\u00CA", "\u00C9", "\u00C8", "\u00CB"], ["R"], ["T"], ["Y", "\u0178"], ["U", "\u016A", "\u00DC", "\u00DB", "\u00D9", "\u00DA"], ["I", "\u012A", "\u012E", "\u00CC", "\u00CE", "\u00CF", "\u00CD"], ["O", "\u014C", "\u00D5", "\u00D8", "\u00D3", "\u00D6 ", "\u00D4", "\u0152", "\u00D2"], ["P"], "back"], [["A", "\u00C3", "\u00C5", "\u0100", "\u00C0", "\u00C2", "\u00C6", "\u00C1", "\u00C4"], ["S"], ["D"], ["F"], ["G"], ["H"], ["J"], ["K"], ["L"], ["!"], ["/"]], ["shift", ["Z"], ["X"], ["C", "\u010C", "\u00C7", "\u0106"], ["V"], ["B"], ["N", "\u00D1", "\u0143"], ["M"], [","], ["."], ["?"]]];//\u5927\u5199\u5B57\u6BCD\u96C6
    var fraMinuscules = [[["q"], ["w"], ["e", "\u0117", "\u0113", "\u0119", "\u00EA", "\u00E9", "\u00E8", "\u00EB"], ["r"], ["t"], ["y", "\u00FF"], ["u", "\u016B", "\u00FC", "\u00FB", "\u00F9", "\u00FA"], ["i", "\u012B", "\u012F", "\u00EC", "\u00EE", "\u00EF", "\u00ED"], ["o", "\u014D", "\u00F5", "\u00F8", "\u00F3", "\u00F6", "\u00F4", "\u0153", "\u00F2"], ["p"], "back"], [["a", "\u00E3", "\u00E5", "\u0101", "\u00E0", "\u00E2", "\u00E6", "\u00E1", "\u00E4"], ["s"], ["d"], ["f"], ["g"], ["h"], ["j"], ["k"], ["l"], ["!"], ["/"]], ["shift", ["z"], ["x"], ["c", "\u010D", "\u00E7", "\u0107"], ["v"], ["b"], ["n", "\u00F1", "\u0144"], ["m"], [","], ["."], ["?"]]];//\u5C0F\u5199\u5B57\u6BCD\u96C6

    var porCapitalLetter = [[["Q"], ["W"], ["E", "\u0116", "\u0112", "\u0118", "\u00CA", "\u00C9", "\u00C8", "\u00CB"], ["R"], ["T"], ["Y", "\u0178"], ["U", "\u016A", "\u00DC", "\u00DB", "\u00D9", "\u00DA"], ["I", "\u012A", "\u012E", "\u00CC", "\u00CE", "\u00CF", "\u00CD"], ["O", "\u014C", "\u00D5", "\u00D8", "\u00D3", "\u00D6 ", "\u00D4", "\u0152", "\u00D2"], ["P"], "back"], [["A", "\u00C3", "\u00C5", "\u0100", "\u00C0", "\u00C2", "\u00C6", "\u00C1", "\u00C4"], ["S"], ["D"], ["F"], ["G"], ["H"], ["J"], ["K"], ["L"], ["!"], ["/"]], ["shift", ["Z"], ["X"], ["C", "\u010C", "\u00C7", "\u0106"], ["V"], ["B"], ["N", "\u00D1", "\u0143"], ["M"], [","], ["."], ["?"]]];//\u5927\u5199\u5B57\u6BCD\u96C6
    var porMinuscules = [[["q"], ["w"], ["e", "\u0117", "\u0113", "\u0119", "\u00EA", "\u00E9", "\u00E8", "\u00EB"], ["r"], ["t"], ["y", "\u00FF"], ["u", "\u016B", "\u00FC", "\u00FB", "\u00F9", "\u00FA"], ["i", "\u012B", "\u012F", "\u00EC", "\u00EE", "\u00EF", "\u00ED"], ["o", "\u014D", "\u00F5", "\u00F8", "\u00F3", "\u00F6", "\u00F4", "\u0153", "\u00F2"], ["p"], "back"], [["a", "\u00E3", "\u00E5", "\u0101", "\u00E0", "\u00E2", "\u00E6", "\u00E1", "\u00E4"], ["s"], ["d"], ["f"], ["g"], ["h"], ["j"], ["k"], ["l"], ["!"], ["/"]], ["shift", ["z"], ["x"], ["c", "\u010D", "\u00E7", "\u0107"], ["v"], ["b"], ["n", "\u00F1", "\u0144"], ["m"], [","], ["."], ["?"]]];//\u5C0F\u5199\u5B57\u6BCD\u96C6

    var espCapitalLetter = [[["Q"], ["W"], ["E", "\u0116", "\u0112", "\u0118", "\u00CA", "\u00C9", "\u00C8", "\u00CB"], ["R"], ["T"], ["Y", "\u0178"], ["U", "\u016A", "\u00DC", "\u00DB", "\u00D9", "\u00DA"], ["I", "\u012A", "\u012E", "\u00CC", "\u00CE", "\u00CF", "\u00CD"], ["O", "\u014C", "\u00D5", "\u00D8", "\u00D3", "\u00D6 ", "\u00D4", "\u0152", "\u00D2"], ["P"], "back"], [["A", "\u00C3", "\u00C5", "\u0100", "\u00C0", "\u00C2", "\u00C6", "\u00C1", "\u00C4"], ["S", "\u0160"], ["D", "\u0110"], ["F"], ["G"], ["H"], ["J"], ["K"], ["L"], ["!"], ["/"]], ["shift", ["Z"], ["X"], ["C", "\u010C", "\u00C7", "\u0106"], ["V"], ["B"], ["N", "\u00D1", "\u0143"], ["M"], [","], ["."], ["?"]]];//\u5927\u5199\u5B57\u6BCD\u96C6
    var espMinuscules = [[["q"], ["w"], ["e", "\u0117", "\u0113", "\u0119", "\u00EA", "\u00E9", "\u00E8", "\u00EB"], ["r"], ["t"], ["y", "\u00FF"], ["u", "\u016B", "\u00FC", "\u00FB", "\u00F9", "\u00FA"], ["i", "\u012B", "\u012F", "\u00EC", "\u00EE", "\u00EF", "\u00ED"], ["o", "\u014D", "\u00F5", "\u00F8", "\u00F3", "\u00F6", "\u00F4", "\u0153", "\u00F2"], ["p"], "back"], [["a", "\u00E3", "\u00E5", "\u0101", "\u00E0", "\u00E2", "\u00E6", "\u00E1", "\u00E4"], ["s", "\u0161"], ["d", "\u0111"], ["f"], ["g"], ["h"], ["j"], ["k"], ["l"], ["!"], ["/"]], ["shift", ["z"], ["x"], ["c", "\u010D", "\u00E7", "\u0107"], ["v"], ["b"], ["n", "\u00F1", "\u0144"], ["m"], [","], ["."], ["?"]]];//\u5C0F\u5199\u5B57\u6BCD\u96C6

    var deuCapitalLetter = [[["Q"], ["W"], ["E", "\u0116", "\u00CA", "\u00C9", "\u00C8", "\u00CB"], ["R"], ["T"], ["Y", "\u0178"], ["U", "\u016A", "\u00DB", "\u00D9", "\u00DA"], ["I", "\u012A", "\u00CC", "\u00CE", "\u00CF", "\u00CD"], ["O", "\u014C", "\u00D5", "\u00D8", "\u00D3", "\u00D4", "\u0152", "\u00D2"], ["P"], "back"], [["A", "\u00C3", "\u00C5", "\u0100", "\u00C0", "\u00C2", "\u00C6", "\u00C1"], ["S", "\u0160", "\u015A", "\u00DF"], ["D"], ["F"], ["G"], ["H"], ["J"], ["K"], ["L"], ["!"], ["/"]], ["shift", ["Z"], ["X"], ["C", "\u010C", "\u00C7", "\u0106"], ["V"], ["B"], ["N", "\u00D1", "\u0143"], ["M"], [","], ["."], ["?"]]];//\u5927\u5199\u5B57\u6BCD\u96C6
    var deuMinuscules = [[["q"], ["w"], ["e", "\u0117", "\u00EA", "\u00E9", "\u00E8", "\u00EB"], ["r"], ["t"], ["y", "\u00FF"], ["u", "\u016B", "\u00FB", "\u00F9", "\u00FA"], ["i", "\u012B", "\u00EC", "\u00EE", "\u00EF", "\u00ED"], ["o", "\u014D", "\u00F5", "\u00F8", "\u00F3", "\u00F4", "\u0153", "\u00F2"], ["p"], "back"], [["a", "\u00E3", "\u00E5", "\u0101", "\u00E0", "\u00E2", "\u00E6", "\u00E1"], ["s", "\u0161", "\u015B", "\u00DF"], ["d"], ["f"], ["g"], ["h"], ["j"], ["k"], ["l"], ["!"], ["/"]], ["shift", ["z"], ["x"], ["c", "\u010D", "\u00E7", "\u0107"], ["v"], ["b"], ["n", "\u00F1", "\u0144"], ["m"], [","], ["."], ["?"]]];//\u5C0F\u5199\u5B57\u6BCD\u96C6


    var polCapitalLetter = [[["Q"], ["W"], ["E", "\u0116", "\u0112", "\u0118", "\u00CA", "\u00C9", "\u00C8", "\u00CB"], ["R"], ["T"], ["Y", "\u0178"], ["U", "\u016A", "\u00DB", "\u00D9", "\u00DA"], ["I"], ["O", "\u014C", "\u00D5", "\u00D8", "\u00D3", "\u00D6", "\u00D4", "\u0152", "\u00D2"], ["P"], "back"], [["A", "\u00C3", "\u00C5", "\u00C0", "\u00C2", "\u00C6", "\u00C1", "\u00C4", "\u0104", "\u0100"], ["S", "\u0160", "\u015A", "\u00DF"], ["D"], ["F"], ["G"], ["H"], ["J"], ["K"], ["L", "\u0141"], ["!"], ["/"]], ["shift", ["Z", "\u017D", "\u017B", "\u0179"], ["X"], ["C", "\u010C", "\u00C7", "\u0106"], ["V"], ["B"], ["N", "\u00D1", "\u0143"], ["M"], [","], ["."], ["?"]]];//\u5927\u5199\u5B57\u6BCD\u96C6
    var polMinuscules = [[["q"], ["w"], ["e", "\u0117", "\u0113", "\u0119", "\u00EA", "\u00E9", "\u00E8", "\u00EB"], ["r"], ["t"], ["y", "\u00FF"], ["u", "\u016B", "\u00FB", "\u00F9", "\u00FA"], ["i"], ["o", "\u014D", "\u00F5", "\u00F8", "\u00F3", "\u00F6", "\u00F4", "\u0153", "\u00F2"], ["p"], "back"], [["a", "\u00E3", "\u00E5", "\u00E0", "\u00E2", "\u00E6", "\u00E1", "\u00E4", "\u0105", "\u0101"], ["s", "\u0161", "\u015B", "\u00DF"], ["d"], ["f"], ["g"], ["h"], ["j"], ["k"], ["l", "\u0142"], ["!"], ["/"]], ["shift", ["z", "\u017E", "\u017C", "\u017A"], ["x"], ["c", "\u010D", "\u00E7", "\u0107"], ["v"], ["b"], ["n", "\u00F1", "\u0144"], ["m"], [","], ["."], ["?"]]];//\u5C0F\u5199\u5B57\u6BCD\u96C6


    var sveCapitalLetter = [[["Q"], ["W"], ["E", "\u0118", "\u00CA", "\u00C9", "\u00C8", "\u00CB"], ["R"], ["T"], ["Y", "\u0178"], ["U", "\u016A", "\u00DC", "\u00DB", "\u00D9", "\u00DA"], ["I"], ["O", "\u014C", "\u00D5", "\u00D3", "\u00D4", "\u0152", "\u00D2"], ["P"], "back"], [["A", "\u00C3", "\u00C5", "\u00C1", "\u00C4"], ["S", "\u0160", "\u015A", "\u00DF"], ["D"], ["F"], ["G"], ["H"], ["J"], ["K"], ["L"], ["!"], ["/"]], ["shift", ["Z", "\u017D", "\u017B", "\u0179"], ["X"], ["C"], ["V"], ["B"], ["N"], ["M"], [","], ["."], ["?"]]];//\u5927\u5199\u5B57\u6BCD\u96C6
    var sveMinuscules = [[["q"], ["w"], ["e", "\u0119", "\u00EA", "\u00E9", "\u00E8", "\u00EB"], ["r"], ["t"], ["y", "\u00FF"], ["u", "\u016B", "\u00FC", "\u00FB", "\u00F9", "\u00FA"], ["i"], ["o", "\u014D", "\u00F5", "\u00F3", "\u00F4", "\u0153", "\u00F2"], ["p"], "back"], [["a", "\u00E3", "\u00E5", "\u00E1", "\u00E4"], ["s", "\u0161", "\u015B", "\u00DF"], ["d"], ["f"], ["g"], ["h"], ["j"], ["k"], ["l"], ["!"], ["/"]], ["shift", ["z", "\u017E", "\u017C", "\u017A"], ["x"], ["c"], ["v"], ["b"], ["n"], ["m"], [","], ["."], ["?"]]];//\u5C0F\u5199\u5B57\u6BCD\u96C6

    var itaCapitalLetter = [[["Q"], ["W"], ["E", "\u0116", "\u0112", "\u0118", "\u00CA", "\u00C9", "\u00C8", "\u00CB"], ["R"], ["T"], ["Y", "\u0178"], ["U", "\u016A", "\u00DC", "\u00DB", "\u00D9", "\u00DA"], ["I", "\u012A", "\u012E", "\u00CC", "\u00CE", "\u00CF", "\u00CD"], ["O", "\u014C", "\u00D5", "\u00D8", "\u00D3", "\u00D6", "\u00D4", "\u0152", "\u00D2"], ["P"], "back"], [["A", "\u00C3", "\u00C5", "\u0100", "\u00C0", "\u00C2", "\u00C6", "\u00C1", "\u00C4"], ["S"], ["D"], ["F"], ["G"], ["H"], ["J"], ["K"], ["L"], ["!"], ["/"]], ["shift", ["Z", "\u017D", "\u017B", "\u0179"], ["X"], ["C"], ["V"], ["B"], ["N"], ["M"], [","], ["."], ["?"]]];//\u5927\u5199\u5B57\u6BCD\u96C6
    var itaMinuscules = [[["q"], ["w"], ["e", "\u0117", "\u0113", "\u0119", "\u00EA", "\u00E9", "\u00E8", "\u00EB"], ["r"], ["t"], ["y", "\u00FF"], ["u", "\u016B", "\u00FC", "\u00FB", "\u00F9", "\u00FA"], ["i", "\u012B", "\u012F", "\u00EC", "\u00EE", "\u00EF", "\u00ED"], ["o", "\u014D", "\u00F5", "\u00F8", "\u00F3", "\u00F6", "\u00F4", "\u0153", "\u00F2"], ["p"], "back"], [["a", "\u00E3", "\u00E5", "\u0101", "\u00E0", "\u00E2", "\u00E6", "\u00E1", "\u00E4"], ["s"], ["d"], ["f"], ["g"], ["h"], ["j"], ["k"], ["l"], ["!"], ["/"]], ["shift", ["z", "\u017E", "\u017C", "\u017A"], ["x"], ["c"], ["v"], ["b"], ["n"], ["m"], [","], ["."], ["?"]]];//\u5C0F\u5199\u5B57\u6BCD\u96C6

    var pycCapitalLetter = [[["\u0419"], ["\u0426"], ["\u0423"], ["\u041A"], ["\u0415", "\u0401"], ["\u041D"], ["\u0413"], ["\u0428"], ["\u0429"], ["\u0417"], "back"], [["\u0425"], ["\u0424"], ["\u042B"], ["\u0412"], ["\u0410"], ["\u041F"], ["\u0420"], ["\u041E"], ["\u041B"], ["\u0414"], ["\u0416"]], ["shift", ["\u042D"], ["\u042F"], ["\u0427"], ["\u0421"], ["\u041C"], ["\u0418"], ["\u0422"], ["\u042C"], ["\u0411"], ["\u042E"]]];
    var pycMinuscules = [[["\u0419"], ["\u0446"], ["\u0443"], ["\u043A"], ["\u0435", "\u0451"], ["\u043D"], ["\u0433"], ["\u0448"], ["\u0449"], ["\u0437"], "back"], [["\u0445"], ["\u0444"], ["\u044B"], ["\u0432"], ["\u0430"], ["\u043F"], ["\u0440"], ["\u043E"], ["\u043B"], ["\u0434"], ["\u0436"]], ["shift", ["\u044D"], ["\u044F"], ["\u0447"], ["\u0441"], ["\u043C"], ["\u0438"], ["\u0442"], ["\u044C"], ["\u0431"], ["\u044E"]]];
    var pycBoardSymbolPage1 = [["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "\\", "back"], ["@", "#", "$", "%", "&", "*", "(", ")", "/", "_", "..."], ["symPage1", ",", ".", "?", "!", ":", ";", "\"", "'", "<", ">"]];
    var pycBoardSymbolPage2 = [["[", "]", "{", "}", "+", "-", "\u00D7", "\u00F7", "=", "\u00B1", "\u00B0", "back"], ["\u00AB", "\u00BB", "\u00A6", "\u00B4", "^", "~", "\u00A9", "\u00AE", "\u00A5", "\u00A3", "\u20AC"], ["symPage2", "www.", "wap.", ".com", ".cn", ".org", ".net", "bbs.", "blog.", "http:", "3g."]];
    var spansFocus = ["file:///system/hbbtv/IMEimages/Focus_1.png", "file:///system/hbbtv/IMEimages/Focus_1-2.png"];
    var cabImgs = ["file:///system/hbbtv/IMEimages/Caps_s_1.png", "file:///system/hbbtv/IMEimages/Caps_A_1.png"];
    var checkImg = ["file:///system/hbbtv/IMEimages/option/check_1.png", "file:///system/hbbtv/IMEimages/option/check_3.png"];
    var keyBoardChar = enMinuscules;
    var langList = ["EN", "FRA", "POR", "ESP", "DEU", "POL", "SVE", "ITA", "PYC"];
    var language = ["English", "Francaise", "Portugal", "Espa\u00F1ola", "Deutsch", "Polski", "Svenska", "Italian", "Russian"];
    var spanList;
    var imgList;
    var mulCharList;
    var charFlag = 0;//0\u8868\u793A\u4E3A\u5B57\u6BCD  1 \u8868\u793A\u7B26\u53F7
    var letterCapFlag = 0;//0\u8868\u793A\u5C0F\u5199   1\u8868\u793A\u5927\u5199
    var positionH = 0;
    var positionV = 0;
    var mulPositionV = 0;
    var setPositionH = 0;
    var selectImgList;
    var symbolPageFlag = 0;//0\u8868\u793A\u7B2C\u4E00\u9875 1\u8868\u793A\u7B2C\u4E8C\u9875
    var countryList = [-1, -1, -1];
    var countryCount = 0;

    var curCountry = 0;
    var keyBoardFocus = "keyboard";
    this.keyBoardFlag = 0;

    var MUL_START = 92;
    var MUL_STEP = 98;
    var KEY_BOARD_START_PYC = -4;
    var KEY_BOARD_STEP_PYC = 136;
    var KEY_BOARD_START_OTHER = 0;
    var KEY_BOARD_STEP_OTHER = 100;
    var KEY_BOARD_TOP_START_PYC = -4;
    var KEY_BOARD_TOP_STEP_PYC = 136;
    var KEY_BOARD_TOP_START_OTHER = 0;
    var KEY_BOARD_TOP_STEP_OTHER = 66;
    var KEY_SETTING_TOP_START = 70;
    var KEY_SETTING_TOP_STEP = 47;
    var ButtonImg = ["url('file:///system/hbbtv/IMEimages/Button_1.png')", "url('file:///system/hbbtv/IMEimages/Button_2.png')", "url('file:///system/hbbtv/IMEimages/Button_3.png')", "url('file:///system/hbbtv/IMEimages/Button_4.png')"]

    var mouseCallBack = {
        Url: "",
        funcOk: function ()
        {
        	TCLIME.toOk();
        },
        funcBack: function ()
        {
        }
    };


    function $(id)
    {
        return document.getElementById(id);
    }

    function checkKeyBoardEnable()
    {
        var k = 0;
        for (var i = 0; i < 9; i++)
        {
            //if(top.g_setting.getKeyBoardEnable(i)==1)
            if (1)
            {
                countryList[k] = i;
                k++;
            }
            if (k >= 3)
            {
                break;
            }
        }
        countryCount = k;
    }

    function tobackKeyBoard()
    {
        if (keyBoardFocus == "keySetting")
        {
            hiddenKeySetting();
            return "settingBack";
        }
        else
        {
            document.body.removeChild($("TCLIME_mainDiv"));
            // document.body.removeChild($("TCLIME_showMulChar"));
            charFlag = 0;//0\u8868\u793A\u4E3A\u5B57\u6BCD  1 \u8868\u793A\u7B26\u53F7
            letterCapFlag = 0;//0\u8868\u793A\u5C0F\u5199   1\u8868\u793A\u5927\u5199
            positionH = 0;
            positionV = 0;
            mulPositionV = 0;
            symbolPageFlag = 0;//0\u8868\u793A\u7B2C\u4E00\u9875 1\u8868\u793A\u7B2C\u4E8C\u9875
            keyBoardFocus = "keyboard";
            this.keyBoardFlag = 0;
            return "menuBack";
        }
    }

    this.hiddenKeyBoard = function ()
    {
        if (this.keyBoardFlag == 1)
        {
            if (keyBoardFocus == "keySetting")
            {
                hiddenKeySetting();
            }
	    document.body.TCLIME_hostRemoveChild($("TCLIME_mainDiv"));
            //document.body.removeChild($("TCLIME_mainDiv"));
            //document.body.removeChild($("TCLIME_showMulChar"));
            charFlag = 0;//0\u8868\u793A\u4E3A\u5B57\u6BCD  1 \u8868\u793A\u7B26\u53F7
            letterCapFlag = 0;//0\u8868\u793A\u5C0F\u5199   1\u8868\u793A\u5927\u5199
            positionH = 0;
            positionV = 0;
            mulPositionV = 0;
            symbolPageFlag = 0;//0\u8868\u793A\u7B2C\u4E00\u9875 1\u8868\u793A\u7B2C\u4E8C\u9875
            keyBoardFocus = "keyboard";
            this.keyBoardFlag = 0;
	    //TUtil.setEnv("TBROWSER_IME_STATE", "0");
        TUtil.notifyActiveIMEState(0);
        }
    }

    this.showKeyBoard = function ()
    {
        //curCountry =top.g_setting.currentKeyBoardIndex;
        //top.g_channel.testLog("===================================curCountry="+curCountry)
        checkKeyBoardEnable();
        switch (curCountry)
        {
            case 0:
            {
                keyBoardChar = enMinuscules;
            }
                break;
            case 1:
            {
                keyBoardChar = fraMinuscules;
            }
                break;
            case 2:
            {
                keyBoardChar = porMinuscules;
            }
                break;
            case 3:
            {
                keyBoardChar = espMinuscules;
            }
                break;
            case 4:
            {
                keyBoardChar = deuMinuscules;
            }
                break;
            case 5:
            {
                keyBoardChar = polMinuscules;
            }
                break;
            case 6:
            {
                keyBoardChar = sveMinuscules;
            }
                break;
            case 7:
            {
                keyBoardChar = itaMinuscules;
            }
                break;
            case 8:
            {
                keyBoardChar = pycMinuscules;
            }
                break;
        }

        /*document.body.onmousedown = function (evt)
        {
            evt.preventDefault();
        };*/
        this.keyBoardFlag = 1;
        var mainDiv = document.createElement("div");    //\u521B\u5EFA\u80CC\u666FDIV
        mainDiv.style.position = "fixed";
        mainDiv.style.height = "720px";
        mainDiv.style.width = "1280px";
        mainDiv.style.left = "0px";
        mainDiv.style.bottom = "0px";
        mainDiv.style.zIndex = "2147483641";
        mainDiv.id = "TCLIME_mainDiv";
        document.body.appendChild(mainDiv);
        var bgDiv = document.createElement("div");    //\u521B\u5EFA\u80CC\u666FDIV
        bgDiv.style.height = "296px";
        bgDiv.style.width = "1280px";
        bgDiv.style.left = "0px";
        bgDiv.style.position = "absolute";
        bgDiv.style.top = "420px";
        bgDiv.style.background = "#000000";
        bgDiv.style.borderTop = "4px solid #1b1b1b";
        bgDiv.style.opacity = "0.92";
        bgDiv.style.zIndex = "2147483642";
        bgDiv.id = "TCLIME_keyBoardBg";
        try
        {
            bgDiv.onmousedown = function (evt)
            {
                evt.preventDefault();
                //top.timeoutFuc.osdTimeoutEndFuc();
                if (evt.button == 2)                    //\u7ED1\u5B9A\u9F20\u6807\u53F3\u952E\u8FD4\u56DE\u4E8B\u4EF6
                {
                    mouseCallBack.funcBack();
                }
                //top.timeoutFuc.osdTimeoutStartFuc();
                //right key
            }
        }
        catch (er)
        {
            //g_channel.testLog("key:" + er);
        }
        $("TCLIME_mainDiv").appendChild(bgDiv);
        var bodyDiv = document.createElement("div");//\u521B\u5EFA\u952E\u76D8\u533A\u57DF
        bodyDiv.style.height = "263px";
        bodyDiv.style.left = "87px";
        bodyDiv.style.width = "1100px";
        bodyDiv.style.position = "absolute";
        bodyDiv.style.top = "10px";
        bodyDiv.id = "TCLIME_keyBoard";
        $("TCLIME_keyBoardBg").appendChild(bodyDiv);
        try
        {
            for (var i = 0; i < 3; i++)
            {
                for (var j = 0; j < 11; j++)
                {
                    var span = document.createElement("span");
                    span.style.position = "absolute";
                    span.style.width = "107px";
                    span.style.height = "73px";
                    span.style.textAlign = "center";
                    span.style.lineHeight = "73px";
                    span.style.color = "#aaaaaa";
                    span.style.margin = "0px -7px -7px 0px";
                    span.style.left = j * 100 + "px";
                    span.style.top = i * 66 + "px";
                    span.style.fontSize = "24px";
                    span.setAttribute("newAttr", i);
                    span.setAttribute("newAttr1", j);
                    span.style.backgroundImage = "url('file:///system/hbbtv/IMEimages/Button_1.png')";
                    span.style.backgroundPosition = "center";
                    span.style.backgroundRepeat = "no-repeat";
                    span.onmousedown = function (evt)
                    {
                        if (evt.button == 0)
                        {
                            //right key
                            if (keyBoardFocus == "keyboard")                    //\u521B\u5EFA\u6309\u952E
                            {
                                spanList[positionH * 11 + positionV].style.backgroundImage = showButtonImg();
                                positionH = parseInt(this.getAttribute("newAttr"));
                                positionV = parseInt(this.getAttribute("newAttr1"));
                                spanList[positionH * 11 + positionV].style.backgroundImage = "none";
                                $("TCLIME_spanFocus").style.display = "block";
                                $("TCLIME_spanFocus").style.left = KEY_BOARD_START_OTHER + positionV * KEY_BOARD_STEP_OTHER + "px";
                                $("TCLIME_spanFocus").style.top = KEY_BOARD_TOP_START_OTHER + positionH * KEY_BOARD_TOP_STEP_OTHER + "px";
                                $("TCLIME_imgFocus0").style.display = "none";
                                $("TCLIME_imgFocus1").style.display = "none";
                                $("TCLIME_imgFocus2").style.display = "none";
                                $("TCLIME_imgFocus3").style.display = "none";
                                $("TCLIME_imgFocus4").style.display = "none";
                                $("TCLIME_imgFocus5").style.display = "none";
                                mouseCallBack.funcOk();
                            }
                        }
                    }
                    $("TCLIME_keyBoard").appendChild(span);
                }
            }
        }
        catch (er)
        {
            g_channel.testLog("key:" + er);
        }

        var spanFocus = document.createElement("img");      //\u521B\u5EFA\u7126\u70B9\u6846
        spanFocus.style.position = "absolute";
        spanFocus.style.width = "107px";
        spanFocus.style.height = "74px";
        spanFocus.style.top = "0px";
        spanFocus.style.left = "0px";
        spanFocus.src = "file:///system/hbbtv/IMEimages/Focus_1.png";
        spanFocus.id = "TCLIME_spanFocus";
        spanFocus.style.zIndex = "2147483640";
        spanFocus.onmousedown = function (evt)
        {
            if (evt.button == 0)
            {
                if (keyBoardFocus == "keyboard")
                {
                    mouseCallBack.funcOk();
                }
            }
        }
        $("TCLIME_keyBoard").appendChild(spanFocus);

        var span = document.createElement("span");
        span.style.position = "absolute";
        span.style.width = "138px";
        span.style.height = "54px";
        span.style.textAlign = "center";
        span.style.lineHeight = "54px";
        span.style.margin = "10px 10px";
        span.style.top = "200px";
        span.style.left = "0px";
        span.id = "TCLIME_langBg";
        span.style.fontSize = "24px";
        span.style.color = "#aaaaaa";
        span.style.backgroundImage = "url('file:///system/hbbtv/IMEimages/Button_2.png')";
        span.onmousedown = function (evt)
        {
            if (evt.button == 0)
            {
                //right key
                if (keyBoardFocus == "keyboard")
                {
                    spanList[positionH * 11 + positionV].style.backgroundImage = showButtonImg();
                    positionH = 3;
                    positionV = 0;
                    spanList[positionH * 11 + positionV].style.backgroundImage = "none";
                    $("TCLIME_spanFocus").style.display = "none";
                    $("TCLIME_imgFocus0").style.display = "block";
                    $("TCLIME_imgFocus1").style.display = "none";
                    $("TCLIME_imgFocus2").style.display = "none";
                    $("TCLIME_imgFocus3").style.display = "none";
                    $("TCLIME_imgFocus4").style.display = "none";
                    $("TCLIME_imgFocus5").style.display = "none";
                    mouseCallBack.funcOk();
                }
            }
        }
        $("TCLIME_keyBoard").appendChild(span);
        var div = document.createElement("div");
        div.style.position = "absolute";
        div.style.width = "74px";
        div.style.height = "54px";
        div.style.textAlign = "left";
        div.style.lineHeight = "54px";
        div.style.left = "74px";
        div.style.fontSize = "24px";
        div.id = "TCLIME_langChange";
        div.innerHTML = "EN";

        $("TCLIME_langBg").appendChild(div);
        var span = document.createElement("span");
        span.style.position = "absolute";
        span.style.width = "137px";
        span.style.height = "54px";
        span.style.textAlign = "center";
        span.style.lineHeight = "54px";
        span.style.margin = "10px 10px";
        span.style.top = "200px";
        span.style.left = "150px";
        span.style.fontSize = "24px";
        span.style.color = "#aaaaaa";
        span.innerHTML = "123#";
        span.style.fontFamily = "Segoe Condensed";
        span.id = "TCLIME_charChange";
        span.style.backgroundImage = "url('file:///system/hbbtv/IMEimages/Button_2.png')"
        span.onmousedown = function (evt)
        {
            if (evt.button == 0)
            {
                //right key
                if (keyBoardFocus == "keyboard")
                {
                    spanList[positionH * 11 + positionV].style.backgroundImage = showButtonImg();
                    positionH = 3;
                    positionV = 1;
                    spanList[positionH * 11 + positionV].style.backgroundImage = "none";
                    $("TCLIME_spanFocus").style.display = "none";
                    $("TCLIME_imgFocus0").style.display = "none";
                    $("TCLIME_imgFocus1").style.display = "block";
                    $("TCLIME_imgFocus2").style.display = "none";
                    $("TCLIME_imgFocus3").style.display = "none";
                    $("TCLIME_imgFocus4").style.display = "none";
                    $("TCLIME_imgFocus5").style.display = "none";
                    mouseCallBack.funcOk();
                }
            }
        }
        $("TCLIME_keyBoard").appendChild(span);
        var span = document.createElement("span");
        span.style.position = "absolute";
        span.style.width = "487px";
        span.style.height = "54px";
        span.style.textAlign = "center";
        span.style.lineHeight = "70px";
        span.style.margin = "10px 10px";
        span.style.top = "200px";
        span.style.left = "300px";
        span.style.color = "#aaaaaa";
        span.style.fontSize = "24px";
        span.id = "TCLIME_space";
        span.style.backgroundImage = "url('file:///system/hbbtv/IMEimages/Button_4.png')";
        span.onmousedown = function (evt)
        {
            if (evt.button == 0)
            {
                //right key
                if (keyBoardFocus == "keyboard")
                {
                    spanList[positionH * 11 + positionV].style.backgroundImage = showButtonImg();
                    positionH = 3;
                    positionV = 2;
                    spanList[positionH * 11 + positionV].style.backgroundImage = "none";
                    $("TCLIME_spanFocus").style.display = "none";
                    $("TCLIME_imgFocus0").style.display = "none";
                    $("TCLIME_imgFocus1").style.display = "none";
                    $("TCLIME_imgFocus2").style.display = "block";
                    $("TCLIME_imgFocus3").style.display = "none";
                    $("TCLIME_imgFocus4").style.display = "none";
                    $("TCLIME_imgFocus5").style.display = "none";
                    mouseCallBack.funcOk();
                }
            }
        }
        $("TCLIME_keyBoard").appendChild(span);
        var span = document.createElement("span");
        span.style.position = "absolute";
        span.style.width = "87px";
        span.style.height = "54px";
        span.style.textAlign = "center";
        span.style.lineHeight = "54px";
        span.style.color = "#aaaaaa";
        span.style.margin = "10px 10px";
        span.style.top = "200px";
        span.style.left = "800px";
        span.style.fontSize = "24px";
        span.style.fontFamily = "Segoe Condensed";
        span.id = "TCLIME_netFlag";
        span.innerHTML = "@";
        span.style.backgroundImage = "url('file:///system/hbbtv/IMEimages/Button_1.png')";
        span.onmousedown = function (evt)
        {
            if (evt.button == 0)
            {
                //right key
                if (keyBoardFocus == "keyboard")
                {
                    spanList[positionH * 11 + positionV].style.backgroundImage = showButtonImg();
                    positionH = 3;
                    positionV = 3;
                    spanList[positionH * 11 + positionV].style.backgroundImage = "none";
                    $("TCLIME_spanFocus").style.display = "none";
                    $("TCLIME_imgFocus0").style.display = "none";
                    $("TCLIME_imgFocus1").style.display = "none";
                    $("TCLIME_imgFocus2").style.display = "none";
                    $("TCLIME_imgFocus3").style.display = "block";
                    $("TCLIME_imgFocus4").style.display = "none";
                    $("TCLIME_imgFocus5").style.display = "none";
                    mouseCallBack.funcOk();
                }
            }
        }
        $("TCLIME_keyBoard").appendChild(span);
        var span = document.createElement("span");
        span.style.position = "absolute";
        span.style.width = "87px";
        span.style.height = "54px";
        span.style.textAlign = "center";
        span.style.lineHeight = "54px";
        span.style.color = "#aaaaaa";
        span.style.margin = "10px 10px";
        span.style.top = "200px";
        span.style.left = "900px";
        span.style.fontSize = "24px";
        span.id = "TCLIME_setting";
        span.onmousedown = function (evt)
        {
            if (evt.button == 0)
            {
                //right key
                if (keyBoardFocus == "keyboard")
                {
                    spanList[positionH * 11 + positionV].style.backgroundImage = showButtonImg();
                    positionH = 3;
                    positionV = 4;
                    spanList[positionH * 11 + positionV].style.backgroundImage = "none";
                    $("TCLIME_spanFocus").style.display = "none";
                    $("TCLIME_imgFocus0").style.display = "none";
                    $("TCLIME_imgFocus1").style.display = "none";
                    $("TCLIME_imgFocus2").style.display = "none";
                    $("TCLIME_imgFocus3").style.display = "none";
                    $("TCLIME_imgFocus4").style.display = "block";
                    $("TCLIME_imgFocus5").style.display = "none";
                    mouseCallBack.funcOk();
                }
            }
        }
        span.style.backgroundImage = "url('file:///system/hbbtv/IMEimages/Button_1.png')"
        $("TCLIME_keyBoard").appendChild(span);

        var span = document.createElement("span");
        span.style.position = "absolute";
        span.style.width = "87px";
        span.style.height = "54px";
        span.style.textAlign = "center";
        span.style.lineHeight = "54px";
        span.style.color = "#aaaaaa";
        span.style.margin = "10px 10px";
        span.style.top = "200px";
        span.style.left = "1000px";
        span.style.fontSize = "24px";
        span.id = "TCLIME_Done";
        span.onmousedown = function (evt)
        {
            if (evt.button == 0)
            {
                //right key
                if (keyBoardFocus == "keyboard")
                {
                    spanList[positionH * 11 + positionV].style.backgroundImage = showButtonImg();
                    positionH = 3;
                    positionV = 5;
                    spanList[positionH * 11 + positionV].style.backgroundImage = "none";
                    $("TCLIME_spanFocus").style.display = "none";
                    $("TCLIME_imgFocus0").style.display = "none";
                    $("TCLIME_imgFocus1").style.display = "none";
                    $("TCLIME_imgFocus2").style.display = "none";
                    $("TCLIME_imgFocus3").style.display = "none";
                    $("TCLIME_imgFocus4").style.display = "none";
                    $("TCLIME_imgFocus5").style.display = "block";
                    mouseCallBack.funcOk();
                }
            }
        }
        span.style.backgroundImage = "url('file:///system/hbbtv/IMEimages/Button_1.png')";
        $("TCLIME_keyBoard").appendChild(span);

        spanList = $("TCLIME_keyBoard").getElementsByTagName("span");
        for (var i = 0; i < 3; i++)
        {
            for (var j = 0; j < 11; j++)
            {
                spanList[i * 11 + j].innerHTML = replaceToken(keyBoardChar[i][j][0]);
            }
        }
        spanList[0].style.backgroundImage = "none";
        spanList[10].innerHTML = "";
        var backImg = document.createElement("img");
        backImg.style.position = "absolute";
        backImg.style.top = "25px";
        backImg.style.left = "1035px";
        backImg.src = "file:///system/hbbtv/IMEimages/Backspace_1.png";
        //backImg.style.zIndex = "2147483640";
        backImg.onmousedown = function (evt)
        {
            if (evt.button == 0)
            {
                //right key
                if (keyBoardFocus == "keyboard")                    //\u521B\u5EFA\u6309\u952E
                {
                    spanList[positionH * 11 + positionV].style.backgroundImage = showButtonImg();
                    positionH = 0;
                    positionV = 10;
                    spanList[10].style.backgroundImage = "none";
                    $("TCLIME_spanFocus").style.display = "block";
                    $("TCLIME_spanFocus").style.left = KEY_BOARD_START_OTHER + positionV * KEY_BOARD_STEP_OTHER + "px";
                    $("TCLIME_spanFocus").style.top = KEY_BOARD_TOP_START_OTHER + positionH * KEY_BOARD_TOP_STEP_OTHER + "px";
                    $("TCLIME_imgFocus0").style.display = "none";
                    $("TCLIME_imgFocus1").style.display = "none";
                    $("TCLIME_imgFocus2").style.display = "none";
                    $("TCLIME_imgFocus3").style.display = "none";
                    $("TCLIME_imgFocus4").style.display = "none";
                    $("TCLIME_imgFocus5").style.display = "none";
                    mouseCallBack.funcOk();
                }
            }
        };
        $("TCLIME_keyBoard").appendChild(backImg);

        spanList[22].innerHTML = "";
        var cabImg = document.createElement("img");
        cabImg.style.position = "absolute";
        cabImg.style.top = "153px";
        cabImg.style.left = "45px";
        cabImg.id = "TCLIME_cabImg";
        cabImg.src = "file:///system/hbbtv/IMEimages/Caps_s_1.png";
        $("TCLIME_keyBoard").appendChild(cabImg);
        /*************************/

        var langImg = document.createElement("img");
        langImg.style.position = "absolute";
        langImg.style.top = "13px";
        langImg.style.left = "40px";
        langImg.src = "file:///system/hbbtv/IMEimages/language_1.png";
        $("TCLIME_langBg").appendChild(langImg);

        var imgFocus0 = document.createElement("img");
        imgFocus0.style.position = "absolute";
        imgFocus0.style.top = "201px";
        imgFocus0.style.left = "0px";
        imgFocus0.src = "file:///system/hbbtv/IMEimages/Focus3_1.png"
        imgFocus0.id = "TCLIME_imgFocus0";
        imgFocus0.style.display = "none";
        imgFocus0.onmousedown = function (evt)
        {
            if (evt.button == 0)
            {
                if (keyBoardFocus == "keyboard")
                {
                    mouseCallBack.funcOk();
                }
            }
        }
        $("TCLIME_keyBoard").appendChild(imgFocus0);

        var imgFocus1 = document.createElement("img");
        imgFocus1.style.position = "absolute";
        imgFocus1.style.top = "201px";
        imgFocus1.style.left = "150px";
        imgFocus1.src = "file:///system/hbbtv/IMEimages/Focus3_1.png"
        imgFocus1.id = "TCLIME_imgFocus1";
        imgFocus1.style.display = "none";
        imgFocus1.onmousedown = function (evt)
        {
            if (evt.button == 0)
            {
                if (keyBoardFocus == "keyboard")
                {
                    mouseCallBack.funcOk();
                }
            }
        }
        $("TCLIME_keyBoard").appendChild(imgFocus1);

        var imgFocus2 = document.createElement("img");
        imgFocus2.style.position = "absolute";
        imgFocus2.style.top = "201px";
        imgFocus2.style.left = "301px";
        imgFocus2.src = "file:///system/hbbtv/IMEimages/Focus5_1.png"
        imgFocus2.id = "TCLIME_imgFocus2";
        imgFocus2.style.display = "none";
        imgFocus2.onmousedown = function (evt)
        {
            if (evt.button == 0)
            {
                if (keyBoardFocus == "keyboard")
                {
                    mouseCallBack.funcOk();
                }
            }
        }
        $("TCLIME_keyBoard").appendChild(imgFocus2);

        var imgFocus3 = document.createElement("img");
        imgFocus3.style.position = "absolute";
        imgFocus3.style.top = "201px";
        imgFocus3.style.left = "801px";
        imgFocus3.src = "file:///system/hbbtv/IMEimages/Focus_1.png";
        imgFocus3.id = "TCLIME_imgFocus3";
        imgFocus3.style.display = "none";
        imgFocus3.onmousedown = function (evt)
        {
            if (evt.button == 0)
            {
                if (keyBoardFocus == "keyboard")
                {
                    mouseCallBack.funcOk();
                }
            }
        }
        $("TCLIME_keyBoard").appendChild(imgFocus3);

        var img = document.createElement("img");
        img.style.position = "absolute";
        img.style.top = "13px";
        img.src = "file:///system/hbbtv/IMEimages/setting_1.png";
        img.style.left = "30px";
        $("TCLIME_setting").appendChild(img);

        var imgFocus4 = document.createElement("img");
        imgFocus4.style.position = "absolute";
        imgFocus4.style.top = "201px";
        imgFocus4.style.left = "901px";
        imgFocus4.src = "file:///system/hbbtv/IMEimages/Focus_1.png";
        imgFocus4.id = "TCLIME_imgFocus4";
        imgFocus4.style.display = "none";
        imgFocus4.onmousedown = function (evt)
        {
            if (evt.button == 0)
            {
                if (keyBoardFocus == "keyboard")
                {
                    mouseCallBack.funcOk();
                }
            }
        }
        $("TCLIME_keyBoard").appendChild(imgFocus4);
        var img = document.createElement("img");
        img.style.position = "absolute";
        img.style.top = "15px";
        img.src = "file:///system/hbbtv/IMEimages/Done_1.png";
        img.style.left = "25px";
        $("TCLIME_Done").appendChild(img);

        var imgFocus5 = document.createElement("img");
        imgFocus5.style.position = "absolute";
        imgFocus5.style.top = "201px";
        imgFocus5.style.left = "1001px";
        imgFocus5.src = "file:///system/hbbtv/IMEimages/Focus_1.png";
        imgFocus5.id = "TCLIME_imgFocus5";
        imgFocus5.style.display = "none";
        imgFocus5.onmousedown = function (evt)
        {
            if (evt.button == 0)
            {
                if (keyBoardFocus == "keyboard")
                {
                    mouseCallBack.funcOk();
                }
            }
        }
        $("TCLIME_keyBoard").appendChild(imgFocus5);

        var showMulCharDiv = document.createElement("div");
        showMulCharDiv.style.height = "50px";
        showMulCharDiv.style.width = "1280px";
        showMulCharDiv.style.position = "absolute";
        showMulCharDiv.style.top = "373px";
        showMulCharDiv.style.background = "#000000";
        showMulCharDiv.id = "TCLIME_showMulChar";
        showMulCharDiv.style.display = "none";
        showMulCharDiv.style.zIndex = "2147483641";
        showMulCharDiv.onmousedown = function (evt)
        {
            if (evt.button == 2)
            {
                if (keyBoardFocus == "mulChar")
                {
                    $("TCLIME_showMulFocus").style.left = "0px";
                    $("TCLIME_showMulChar").style.display = "none";
                    mulPositionV = 0;
                    $("TCLIME_spanFocus").src = spansFocus[0];
                    keyBoardFocus = "keyboard";
                }
            }
        }
        $("TCLIME_mainDiv").appendChild(showMulCharDiv);

        var span = document.createElement("span");
        span.style.position = "absolute";
        span.style.width = "92px";
        span.style.height = "30px";
        span.style.top = "10px";
        span.style.textAlign = "center";
        span.style.lineHeight = "67px";
        span.style.color = "#000000";
        span.style.borderRight = "1px solid #666";
        span.style.fontSize = "50px";
        $("TCLIME_showMulChar").appendChild(span);
        for (var i = 0; i < 11; i++)
        {
            var span = document.createElement("span");
            span.style.position = "absolute";
            span.style.width = "98px";
            span.style.height = "30px";
            span.style.top = "10px";
            span.style.textAlign = "center";
            span.style.lineHeight = "30px";
            span.style.color = "#ffffff";
            span.innerHTML = "a";
            span.style.borderRight = "1px solid #666";
            span.style.left = 92 + i * 98 + "px";
            span.style.fontSize = "16px";
            span.setAttribute("newAttr", i);
            span.onmousedown = function (evt)
            {
                if (evt.button == 0)
                {
                    //right key
                    if (keyBoardFocus == "mulChar" && parseInt(this.getAttribute("newAttr")) <= keyBoardChar[positionH][positionV].length - 1)
                    {
                        $("TCLIME_showMulFocus").style.display = "block";
                        mulPositionV = parseInt(this.getAttribute("newAttr"));
                        $("TCLIME_showMulFocus").style.left = MUL_START + mulPositionV * MUL_STEP + "px";
                        mouseCallBack.funcOk();
                    }
                }
            };
            $("TCLIME_showMulChar").appendChild(span);
        }
        var showMulFocus = document.createElement("img");
        showMulFocus.style.position = "absolute";
        showMulFocus.style.left = "61px";
        showMulFocus.style.height = "50px";
        showMulFocus.style.width = "98px";
        showMulFocus.src = "file:///system/hbbtv/IMEimages/Focus_2.png";
        showMulFocus.style.display = "block";
        showMulFocus.id = "TCLIME_showMulFocus";
        showMulFocus.onmousedown = function (evt)
        {
            if (evt.button == 0)
            {
                //right key
                if (keyBoardFocus == "mulChar")
                {
                    mouseCallBack.funcOk();
                }
            }
        }
        $("TCLIME_showMulChar").appendChild(showMulFocus);
        mulCharList = $("TCLIME_showMulChar").getElementsByTagName("span");
        $("TCLIME_langChange").innerHTML = langList[curCountry];
    }

    function hiddenKeySetting()
    {
        console.log("TCLIME run hiddenKeySetting");
        $("TCLIME_imgFocus4").src = "file:///system/hbbtv/IMEimages/Focus_1.png";
        $("TCLIME_mainDiv").removeChild($("TCLIME_bgLeft"));
        $("TCLIME_mainDiv").removeChild($("TCLIME_bgRight"));
        setPositionH = 0;
        keyBoardFocus = "keyboard";
    }

    function showLangSetting()
    {
        $("TCLIME_imgFocus4").src = "file:///system/hbbtv/IMEimages/Focus_1-2.png";
        var setDivBgLeft = document.createElement("div");
        setDivBgLeft.style.position = "absolute";
        setDivBgLeft.style.border = "4px solid #1b1b1b";
        setDivBgLeft.style.height = "712px";
        setDivBgLeft.style.width = "267px";
        setDivBgLeft.style.background = "#000000";
        setDivBgLeft.style.opacity = "0.92";
        setDivBgLeft.id = "TCLIME_bgLeft";
        setDivBgLeft.style.zIndex = "2147483642";
        setDivBgLeft.onmousedown = function (evt)
        {
            //top.timeoutFuc.osdTimeoutEndFuc();
            if (evt.button == 2)
            {
                //right key
                if (keyBoardFocus == "keySetting")
                {
                    mouseCallBack.funcBack();
                }
            }
            //top.timeoutFuc.osdTimeoutStartFuc();
        };
        //document.body.appendChild(setDivBgLeft);
        $("TCLIME_mainDiv").appendChild(setDivBgLeft);
        var remindSpan = document.createElement("div");
        remindSpan.style.position = "absolute";
        remindSpan.style.width = "243px";
        remindSpan.style.top = "66px";
        remindSpan.style.left = "27px";
        remindSpan.style.height = "67px";
        remindSpan.style.color = "#FFFFFF";
        remindSpan.style.fontSize = "16px";
        remindSpan.style.lineHeight = "67px";
        remindSpan.innerHTML = "Keyboard and input method";
        $("TCLIME_bgLeft").appendChild(remindSpan);
        var remindImg = document.createElement("img");
        remindImg.style.position = "absolute";
        remindImg.style.width = "242px";
        remindImg.style.top = "66px";
        remindImg.style.left = "12px";
        remindImg.style.height = "67px";
        remindImg.src = "file:///system/hbbtv/IMEimages/Icon-Sourse_Focus.png";
        $("TCLIME_bgLeft").appendChild(remindImg);
        var setDivBgRight = document.createElement("div");
        setDivBgRight.style.border = "4px solid #1b1b1b";
        setDivBgRight.style.borderLeft = "0px solid #1b1b1b";
        setDivBgRight.style.position = "absolute";
        setDivBgRight.style.height = "712px";
        setDivBgRight.style.width = "334px";
        setDivBgRight.style.left = "267px";
        setDivBgRight.style.background = "#000000";
        setDivBgRight.style.opacity = "0.92";
        setDivBgRight.id = "TCLIME_bgRight";
        setDivBgRight.style.zIndex = "2147483642";
        setDivBgRight.onmousedown = function (evt)
        {
            //top.timeoutFuc.osdTimeoutEndFuc();
            if (evt.button == 2)
            {
                //right key
                if (keyBoardFocus == "keySetting")
                {
                    mouseCallBack.funcBack();
                }
            }
            // top.timeoutFuc.osdTimeoutStartFuc();
        }
        $("TCLIME_mainDiv").appendChild(setDivBgRight);
        for (var i = 0; i < 9; i++)
        {
            var selectImg = document.createElement("img");
            selectImg.style.position = "absolute";
            selectImg.style.top = 87 + i * 47 + "px";
            selectImg.style.left = 48 + "px";
            selectImg.src = checkImg[0];
            selectImg.setAttribute("newAttr", i);
            selectImg.onmousedown = function (evt)
            {
                if (evt.button == 0)
                {
                    //right key
                    if (keyBoardFocus == "keySetting")
                    {
                        setPositionH = parseInt(this.getAttribute("newAttr"));
                        $("TCLIME_selectImgFocus").style.top = KEY_SETTING_TOP_START + KEY_SETTING_TOP_STEP * setPositionH + "px";
                        mouseCallBack.funcOk();
                    }
                }
            }
            $("TCLIME_bgRight").appendChild(selectImg);
        }
        selectImgList = $("TCLIME_bgRight").getElementsByTagName("img");
        for (var i = 0; i < countryCount; i++)
        {
            selectImgList[countryList[i]].src = checkImg[1];
        }
        for (var i = 0; i < 9; i++)
        {
            var selectSpan = document.createElement("span");
            selectSpan.style.position = "absolute";
            selectSpan.style.top = 87 + i * 47 + "px";
            selectSpan.style.left = 137 + "px";
            selectSpan.style.width = "67px";
            selectSpan.style.height = "54px";
            selectSpan.style.color = "#ffffff";
            selectSpan.style.fontSize = "16px";
            selectSpan.innerHTML = language[i];
            selectSpan.setAttribute("newAttr", i);
            selectSpan.onmousedown = function (evt)
            {
                if (evt.button == 0)
                {
                    //right key
                    if (keyBoardFocus == "keySetting")
                    {
                        setPositionH = parseInt(this.getAttribute("newAttr"));
                        $("TCLIME_selectImgFocus").style.top = KEY_SETTING_TOP_START + KEY_SETTING_TOP_STEP * setPositionH + "px"
                        mouseCallBack.funcOk();
                    }
                }
            };
            $("TCLIME_bgRight").appendChild(selectSpan);
        }
        var selectImgFocus = document.createElement("img");
        selectImgFocus.style.position = "absolute";
        selectImgFocus.style.top = 67 + "px";
        selectImgFocus.style.left = 13 + "px";
        selectImgFocus.style.width = "267px";
        selectImgFocus.style.height = "58px";
        selectImgFocus.id = "TCLIME_selectImgFocus";
        selectImgFocus.src = "file:///system/hbbtv/IMEimages/Icon-Sourse_Focus.png";
        selectImgFocus.onmousedown = function (evt)
        {
            if (evt.button == 0)
            {
                //right key
                if (keyBoardFocus == "keySetting")
                {
                    mouseCallBack.funcOk();
                }
            }
        }
        $("TCLIME_bgRight").appendChild(selectImgFocus);
        keyBoardFocus = "keySetting";
    }

    function showButtonImg()
    {
        if (positionH < 3)
        {
            return ButtonImg[0];
        }
        else
        {
            switch (positionV)
            {
                case 0:
                case 1:
                    return ButtonImg[1];
                case 2:
                    return ButtonImg[3];
                case 3:
                case 4:
                case 5:
                    return ButtonImg[0];
            }
        }
    }

    this.toLeft = function ()
    {
        if (keyBoardFocus == "mulChar")
        {
            mulPositionV--;
            if (mulPositionV < 0)
            {
                mulPositionV = keyBoardChar[positionH][positionV].length - 1;
            }
            $("TCLIME_showMulFocus").style.left = MUL_START + mulPositionV * MUL_STEP + "px";
        }
        else if (keyBoardFocus == "keyboard")
        {
            if (positionH < 3)
            {
                spanList[positionH * 11 + positionV].style.backgroundImage = showButtonImg();
                ;
                positionV--;
                if (positionV < 0)
                {
                    positionV = 10;
                }
                spanList[positionH * 11 + positionV].style.backgroundImage = "none";
                $("TCLIME_spanFocus").style.left = KEY_BOARD_START_OTHER + positionV * KEY_BOARD_STEP_OTHER + "px";
            }
            else
            {
                spanList[positionH * 11 + positionV].style.backgroundImage = showButtonImg();
                $("TCLIME_imgFocus" + positionV).style.display = "none";
                positionV--;
                if (positionV < 0)
                {
                    positionV = 5;
                }
                spanList[positionH * 11 + positionV].style.background = "none";
                $("TCLIME_imgFocus" + positionV).style.display = "block";
            }
        }
        else if (keyBoardFocus == "keySetting")
        {
            hiddenKeySetting();
        }
    }

    this.toRight = function ()
    {
        if (keyBoardFocus == "mulChar")
        {
            mulPositionV++;
            if (mulPositionV > keyBoardChar[positionH][positionV].length - 1)
            {
                mulPositionV = 0;
            }
            $("TCLIME_showMulFocus").style.left = MUL_START + mulPositionV * MUL_STEP + "px";
        }
        else if (keyBoardFocus == "keyboard")
        {
            if (positionH < 3)
            {
                try
                {
                    spanList[positionH * 11 + positionV].style.backgroundImage = showButtonImg();
                    positionV++;
                    if (positionV > 10)
                    {
                        positionV = 0;
                    }
                    spanList[positionH * 11 + positionV].style.backgroundImage = "none";
                    $("TCLIME_spanFocus").style.left = KEY_BOARD_START_OTHER + positionV * KEY_BOARD_STEP_OTHER + "px";
                }
                catch (er)
                {
                    //g_channel.testLog("er:" + er);
                }
            }
            else
            {
                $("TCLIME_imgFocus" + positionV).style.display = "none";
                spanList[positionH * 11 + positionV].style.backgroundImage = showButtonImg();
                positionV++;
                if (positionV > 5)
                {
                    positionV = 0;
                }
                spanList[positionH * 11 + positionV].style.backgroundImage = "none";
                $("TCLIME_imgFocus" + positionV).style.display = "block";
            }
        }
        else if (keyBoardFocus == "keySetting")
        {
            this.toOkGetChar();
        }
    }

    this.toUp = function ()
    {
        if (keyBoardFocus == "keyboard")
        {
            spanList[positionH * 11 + positionV].style.backgroundImage = showButtonImg();
            switch (positionH)
            {
                case 0:
                {

                    if (positionV == 0 || positionV == 1)
                    {
                        $("TCLIME_spanFocus").style.display = "none";
                        $("TCLIME_imgFocus0").style.display = "block";
                        positionH = 3;
                        positionV = 0;
                    }
                    else if (positionV == 2)
                    {
                        $("TCLIME_spanFocus").style.display = "none";
                        $("TCLIME_imgFocus1").style.display = "block";
                        positionH = 3;
                        positionV = 1;
                    }
                    else if (positionV > 2 && positionV < 8)
                    {
                        $("TCLIME_spanFocus").style.display = "none";
                        $("TCLIME_imgFocus2").style.display = "block";
                        positionH = 3;
                        positionV = 2;
                    }
                    else if (positionV == 8)
                    {
                        $("TCLIME_spanFocus").style.display = "none";
                        $("TCLIME_imgFocus3").style.display = "block";
                        positionH = 3;
                        positionV = 3;
                    }
                    else if (positionV == 9)
                    {
                        $("TCLIME_spanFocus").style.display = "none";
                        $("TCLIME_imgFocus4").style.display = "block";
                        positionH = 3;
                        positionV = 4;
                    }
                    else if (positionV == 10)
                    {
                        $("TCLIME_spanFocus").style.display = "none";
                        $("TCLIME_imgFocus5").style.display = "block";
                        positionH = 3;
                        positionV = 5;
                    }

                }
                    break;
                case 1:
                {

                    positionH--;
                    $("TCLIME_spanFocus").style.top = KEY_BOARD_TOP_START_OTHER + positionH * KEY_BOARD_TOP_STEP_OTHER + "px";

                }
                    break;
                case 2:
                {
                    positionH--;
                    $("TCLIME_spanFocus").style.top = KEY_BOARD_TOP_START_OTHER + positionH * KEY_BOARD_TOP_STEP_OTHER + "px";
                }
                    break;
                case 3:
                {
                    if (positionV == 0)
                    {
                        $("TCLIME_spanFocus").style.display = "block";
                        $("TCLIME_imgFocus0").style.display = "none";
                        positionH = 2;
                        positionV = 0;
                    }
                    else if (positionV == 1)
                    {
                        $("TCLIME_spanFocus").style.display = "block";
                        $("TCLIME_imgFocus1").style.display = "none";
                        positionH = 2;
                        positionV = 2;
                    }
                    else if (positionV == 2)
                    {
                        $("TCLIME_spanFocus").style.display = "block";
                        $("TCLIME_imgFocus2").style.display = "none";
                        positionH = 2;
                        positionV = 3;
                    }
                    else if (positionV == 3)
                    {
                        $("TCLIME_spanFocus").style.display = "block";
                        $("TCLIME_imgFocus3").style.display = "none";
                        positionH = 2;
                        positionV = 8;
                    }
                    else if (positionV == 4)
                    {
                        $("TCLIME_spanFocus").style.display = "block";
                        $("TCLIME_imgFocus4").style.display = "none";
                        positionH = 2;
                        positionV = 9;
                    }
                    else if (positionV == 5)
                    {
                        $("TCLIME_spanFocus").style.display = "block";
                        $("TCLIME_imgFocus5").style.display = "none";
                        positionH = 2;
                        positionV = 10;
                    }
                    $("TCLIME_spanFocus").style.top = KEY_BOARD_TOP_START_OTHER + positionH * KEY_BOARD_TOP_STEP_OTHER + "px";
                    $("TCLIME_spanFocus").style.left = KEY_BOARD_START_OTHER + positionV * KEY_BOARD_STEP_OTHER + "px";
                }
                    break;
            }
            spanList[positionH * 11 + positionV].style.backgroundImage = "none";
        }
        else if (keyBoardFocus == "keySetting")
        {
            setPositionH--;
            if (setPositionH < 0)
            {
                setPositionH = 8;
            }
            $("TCLIME_selectImgFocus").style.top = KEY_SETTING_TOP_START + KEY_SETTING_TOP_STEP * setPositionH + "px"
        }
    }

    this.toDown = function ()
    {
        if (keyBoardFocus == "mulChar")
        {
            $("TCLIME_showMulFocus").style.left = "0px";
            $("TCLIME_showMulChar").style.display = "none";
            mulPositionV = 0;
            $("TCLIME_spanFocus").src = spansFocus[0];
            keyBoardFocus = "keyboard";
        }
        else if (keyBoardFocus == "keyboard")
        {
            spanList[positionH * 11 + positionV].style.backgroundImage = showButtonImg();
            switch (positionH)
            {
                case 0:
                {

                    positionH++;
                    $("TCLIME_spanFocus").style.top = KEY_BOARD_TOP_START_OTHER + positionH * KEY_BOARD_TOP_STEP_OTHER + "px";

                }
                    break;
                case 1:
                {
                    positionH++;
                    $("TCLIME_spanFocus").style.top = KEY_BOARD_TOP_START_OTHER + positionH * KEY_BOARD_TOP_STEP_OTHER + "px";
                }
                    break;
                case 2:
                {
                    if (positionV == 0 || positionV == 1)
                    {
                        $("TCLIME_spanFocus").style.display = "none";
                        $("TCLIME_imgFocus0").style.display = "block";
                        positionH = 3;
                        positionV = 0;
                    }
                    else if (positionV == 2)
                    {
                        $("TCLIME_spanFocus").style.display = "none";
                        $("TCLIME_imgFocus1").style.display = "block";
                        positionH = 3;
                        positionV = 1;
                    }
                    else if (positionV > 2 && positionV < 8)
                    {
                        $("TCLIME_spanFocus").style.display = "none";
                        $("TCLIME_imgFocus2").style.display = "block";
                        positionH = 3;
                        positionV = 2;
                    }
                    else if (positionV == 8)
                    {
                        $("TCLIME_spanFocus").style.display = "none";
                        $("TCLIME_imgFocus3").style.display = "block";
                        positionH = 3;
                        positionV = 3;
                    }
                    else if (positionV == 9)
                    {
                        $("TCLIME_spanFocus").style.display = "none";
                        $("TCLIME_imgFocus4").style.display = "block";
                        positionH = 3;
                        positionV = 4;
                    }
                    else if (positionV == 10)
                    {
                        $("TCLIME_spanFocus").style.display = "none";
                        $("TCLIME_imgFocus5").style.display = "block";
                        positionH = 3;
                        positionV = 5;
                    }
                }
                    break;
                case 3:
                {

                    if (positionV == 0)
                    {
                        $("TCLIME_spanFocus").style.display = "block";
                        $("TCLIME_imgFocus0").style.display = "none";
                        positionH = 0;
                        positionV = 0;
                    }
                    else if (positionV == 1)
                    {
                        $("TCLIME_spanFocus").style.display = "block";
                        $("TCLIME_imgFocus1").style.display = "none";
                        positionH = 0;
                        positionV = 2;
                    }
                    else if (positionV == 2)
                    {
                        $("TCLIME_spanFocus").style.display = "block";
                        $("TCLIME_imgFocus2").style.display = "none";
                        positionH = 0;
                        positionV = 3;
                    }
                    else if (positionV == 3)
                    {
                        $("TCLIME_spanFocus").style.display = "block";
                        $("TCLIME_imgFocus3").style.display = "none";
                        positionH = 0;
                        positionV = 8;
                    }
                    else if (positionV == 4)
                    {
                        $("TCLIME_spanFocus").style.display = "block";
                        $("TCLIME_imgFocus4").style.display = "none";
                        positionH = 0;
                        positionV = 9;
                    }
                    else if (positionV == 5)
                    {
                        $("TCLIME_spanFocus").style.display = "block";
                        $("TCLIME_imgFocus5").style.display = "none";
                        positionH = 0;
                        positionV = 10;
                    }
                    $("TCLIME_spanFocus").style.top = KEY_BOARD_TOP_START_OTHER + positionH * KEY_BOARD_TOP_STEP_OTHER + "px";
                    $("TCLIME_spanFocus").style.left = KEY_BOARD_START_OTHER + positionV * KEY_BOARD_STEP_OTHER + "px";


                }
                    break;
            }
            spanList[positionH * 11 + positionV].style.backgroundImage = "none";
        }
        else if (keyBoardFocus == "keySetting")
        {
            setPositionH++;
            if (setPositionH > 8)
            {
                setPositionH = 0;
            }
            $("TCLIME_selectImgFocus").style.top = KEY_SETTING_TOP_START + KEY_SETTING_TOP_STEP * setPositionH + "px"
        }
    }

    /*************************************************************************/
    /*  \u529F\u80FD\u63CF\u8FF0\uFF1A\u83B7\u53D6\u5B57\u7B26
     /*  \u8FD4\u56DE\u503C\uFF1A\u5982\u679C\u8FD4\u56DE!one\u8868\u793A\u8BE5\u5B57\u7B26\u6709\u591A\u97F3\u8282 \u8FD4\u56DEback\u8868\u793Abackspace\u952E \u8FD4\u56DEshift\u8868\u793A\u5927\u5C0F\u5199\u5207\u6362
     /*         \u8FD4\u56DEpage1\u6216page2\u8868\u793A\u8D27\u53F7\u9875\u5207\u6362 \u8FD4\u56DEsetting \u8868\u793A\u952E\u76D8\u8BBE\u7F6E\u9875\u9762\u6253\u5F00 \u8FD4\u56DEchangeChar\u8868\u793A\u7B26\u53F7\u548C\u5B57\u6BCD\u4E4B\u95F4\u5207\u6362 \u8FD4\u56DE changeLang \u8868\u793A\u5207\u6362\u8BED\u8A00
     /************************************************************************/
    this.toOkGetChar = function ()
    {
        if (keyBoardFocus == "keyboard")
        {
            switch (positionH)
            {
                case 0:
                {
                    if (positionV == 10)
                    {
                        return keyBoardChar[positionH][positionV];
                    }
                    else
                    {
                        if (charFlag == 1)
                        {
                            return keyBoardChar[positionH][positionV];
                        }
                        else
                        {
                            if (keyBoardChar[positionH][positionV].length == 1)
                            {
                                return keyBoardChar[positionH][positionV][0];
                            }
                            else
                            {
                                $("TCLIME_showMulFocus").style.left = MUL_START + "px";
                                $("TCLIME_showMulChar").style.display = "block";
                                mulPositionV = 0;
                                for (var i = 0; i < keyBoardChar[positionH][positionV].length; i++)
                                {
                                    mulCharList[i + 1].innerHTML = replaceToken(keyBoardChar[positionH][positionV][i]);
                                }
                                for (var i = keyBoardChar[positionH][positionV].length; i < 11; i++)
                                {
                                    mulCharList[i + 1].innerHTML = "";
                                }
                                $("TCLIME_spanFocus").src = spansFocus[1];
                                keyBoardFocus = "mulChar";
                                return "!one";
                            }
                        }
                    }
                }
                    break;
                case 1:
                {
                    if (charFlag == 1)
                    {
                        return keyBoardChar[positionH][positionV];
                    }
                    else
                    {
                        if (keyBoardChar[positionH][positionV].length == 1)
                        {
                            return keyBoardChar[positionH][positionV][0];
                        }
                        else
                        {
                            $("TCLIME_showMulFocus").style.left = MUL_START + "px";
                            $("TCLIME_showMulChar").style.display = "block";
                            mulPositionV = 0;
                            for (var i = 0; i < keyBoardChar[positionH][positionV].length; i++)
                            {
                                mulCharList[i + 1].innerHTML = replaceToken(keyBoardChar[positionH][positionV][i]);
                            }
                            for (var i = keyBoardChar[positionH][positionV].length; i < 11; i++)
                            {
                                mulCharList[i + 1].innerHTML = "";
                            }
                            $("TCLIME_spanFocus").src = spansFocus[1];
                            keyBoardFocus = "mulChar";
                            return "!one";
                        }
                    }
                }
                    break;
                case 2:
                {
                    if (positionV == 0)
                    {
                        if (charFlag == 0)
                        {
                            toChangeCharCap();
                        }
                        else
                        {
                            toChangeSymPage();
                        }
                        return keyBoardChar[positionH][positionV];
                    }
                    else
                    {
                        if (charFlag == 1)
                        {
                            return keyBoardChar[positionH][positionV];
                        }
                        else
                        {
                            if (keyBoardChar[positionH][positionV].length == 1)
                            {
                                return keyBoardChar[positionH][positionV][0];
                            }
                            else
                            {
                                $("TCLIME_showMulFocus").style.left = MUL_START + "px";
                                $("TCLIME_showMulChar").style.display = "block";
                                mulPositionV = 0;
                                for (var i = 0; i < keyBoardChar[positionH][positionV].length; i++)
                                {
                                    mulCharList[i + 1].innerHTML = replaceToken(keyBoardChar[positionH][positionV][i]);
                                }
                                for (var i = keyBoardChar[positionH][positionV].length; i < 11; i++)
                                {
                                    mulCharList[i + 1].innerHTML = "";
                                }
                                $("TCLIME_spanFocus").src = spansFocus[1];
                                keyBoardFocus = "mulChar";
                                return "!one";
                            }
                        }
                    }
                }
                    break;
                case 3:
                {
                    if (positionV == 0)
                    {
                        toChangeLang();
                        return "changeLang";
                    }
                    else if (positionV == 1)
                    {
                        toChangeChar();
                        return "changeChar";
                    }
                    else if (positionV == 2)
                    {
                        return " ";
                    }
                    else if (positionV == 3)
                    {
                        return "@";
                    }
                    else if (positionV == 4)
                    {
                        showLangSetting();
                        return "setting";
                    }
                    else if (positionV == 5)
                    {
                        mouseCallBack.funcBack();
                        return "enter";
                    }
                }
                    break;
            }
        }
        else if (keyBoardFocus == "mulChar")
        {
            $("TCLIME_showMulFocus").style.left = MUL_START + "px";
            $("TCLIME_showMulChar").style.display = "none";
            $("TCLIME_spanFocus").src = spansFocus[0];
            keyBoardFocus = "keyboard";
            var key = keyBoardChar[positionH][positionV][mulPositionV];
            mulPositionV = 0;
            return key;
        }
        else if (keyBoardFocus == "keySetting")
        {
            var countryFlag = 0;
            for (var i = 0; i < countryCount; i++)
            {
                if (setPositionH == countryList[i])
                {
                    countryFlag = 1;
                    if (setPositionH == curCountry)
                    {
                    }
                    else
                    {
                        selectImgList[setPositionH].src = checkImg[0];
                        deleteLang(setPositionH);
                        //top.g_setting.setKeyBoardEnable(setPositionH, 0);
                        //countryList=getLangList();
                    }
                    break;
                }
            }

            if (countryFlag == 1)
            {

            }
            else
            {
                if (countryCount < 3)
                {
                    selectImgList[setPositionH].src = checkImg[1];
                    addLang(setPositionH);
                    //top.g_setting.setKeyBoardEnable(setPositionH, 1);
                    //countryList=getLangList();
                }
            }
        }
    }

    function deleteLang(index)
    {
        for (var i = 0; i < countryList.length; i++)
        {
            if (countryList[i] == index)
            {
                for (var j = i; j < countryList.length; j++)
                {
                    countryList[j] = countryList[j + 1];
                }
                countryList[countryList.length - 1] = -1;
                countryCount--;
                break;
            }
        }
    }

    function addLang(index)
    {
        countryList[countryCount] = index;
        countryCount++;
    }

    function toChangeChar()
    {
        if (charFlag == 0)
        {
            keyBoardChar = keyBoardSymbolPage1;
            charFlag = 1;
            symbolPageFlag = 0;
            $("TCLIME_charChange").innerHTML = "abc";
            $("TCLIME_cabImg").style.display = "none";
        }
        else
        {
            if (letterCapFlag == 0)
            {
                switch (curCountry)
                {
                    case 0:
                    {
                        keyBoardChar = enMinuscules;
                    }
                        break;
                    case 1:
                    {
                        keyBoardChar = fraMinuscules;
                    }
                        break;
                    case 2:
                    {
                        keyBoardChar = porMinuscules;
                        ;
                    }
                        break;
                    case 3:
                    {
                        keyBoardChar = espMinuscules;
                    }
                        break;
                    case 4:
                    {
                        keyBoardChar = deuMinuscules;
                    }
                        break;
                    case 5:
                    {
                        keyBoardChar = polMinuscules;
                    }
                        break;
                    case 6:
                    {
                        keyBoardChar = sveMinuscules;
                    }
                        break;
                    case 7:
                    {
                        keyBoardChar = itaMinuscules;
                    }
                        break;
                    case 8:
                    {
                        keyBoardChar = pycMinuscules;
                    }
                        break;
                }
                $("TCLIME_charChange").innerHTML = "123#";
                $("TCLIME_cabImg").src = cabImgs[0];
            }
            else
            {
                switch (curCountry)
                {
                    case 0:
                    {
                        keyBoardChar = enCapitalLetter;
                    }
                        break;
                    case 1:
                    {
                        keyBoardChar = fraCapitalLetter;
                    }
                        break;
                    case 2:
                    {
                        keyBoardChar = porCapitalLetter;
                    }
                        break;
                    case 3:
                    {
                        keyBoardChar = espCapitalLetter;
                    }
                        break;
                    case 4:
                    {
                        keyBoardChar = deuCapitalLetter;
                    }
                        break;
                    case 5:
                    {
                        keyBoardChar = polCapitalLetter;
                    }
                        break;
                    case 6:
                    {
                        keyBoardChar = sveCapitalLetter;
                    }
                        break;
                    case 7:
                    {
                        keyBoardChar = itaCapitalLetter;
                    }
                        break;
                    case 8:
                    {
                        keyBoardChar = pycCapitalLetter;
                    }
                        break;
                }
                $("TCLIME_charChange").innerHTML = "123#";
                $("TCLIME_cabImg").src = cabImgs[1];
            }
            charFlag = 0;
            $("TCLIME_cabImg").style.display = "block";
        }

        if (charFlag == 0)
        {

            for (var i = 0; i < 3; i++)
            {
                for (var j = 0; j < 11; j++)
                {
                    spanList[i * 11 + j].innerHTML = replaceToken(keyBoardChar[i][j][0]);
                }
            }
            spanList[10].innerHTML = "";
            spanList[22].innerHTML = "";

        }
        else
        {

            for (var i = 0; i < 3; i++)
            {
                for (var j = 0; j < 11; j++)
                {
                    spanList[i * 11 + j].innerHTML = replaceToken(keyBoardChar[i][j]);
                }
            }
            spanList[10].innerHTML = "";
            spanList[22].innerHTML = "&lt;1/2&gt;";

        }
    }

    function toChangeCharCap()
    {
        if (letterCapFlag == 1)
        {
            switch (curCountry)
            {
                case 0:
                {
                    keyBoardChar = enMinuscules;
                }
                    break;
                case 1:
                {
                    keyBoardChar = fraMinuscules;
                }
                    break;
                case 2:
                {
                    keyBoardChar = porMinuscules;
                }
                    break;
                case 3:
                {
                    keyBoardChar = espMinuscules;
                }
                    break;
                case 4:
                {
                    keyBoardChar = deuMinuscules;
                }
                    break;
                case 5:
                {
                    keyBoardChar = polMinuscules;
                }
                    break;
                case 6:
                {
                    keyBoardChar = sveMinuscules;
                }
                    break;
                case 7:
                {
                    keyBoardChar = itaMinuscules;
                }
                    break;
                case 8:
                {
                    keyBoardChar = pycMinuscules;
                }
                    break;
            }
            letterCapFlag = 0;
            $("TCLIME_cabImg").src = cabImgs[0];
        }
        else
        {
            switch (curCountry)
            {
                case 0:
                {
                    keyBoardChar = enCapitalLetter;
                }
                    break;
                case 1:
                {
                    keyBoardChar = fraCapitalLetter;
                }
                    break;
                case 2:
                {
                    keyBoardChar = porCapitalLetter;
                }
                    break;
                case 3:
                {
                    keyBoardChar = espCapitalLetter;
                }
                    break;
                case 4:
                {
                    keyBoardChar = deuCapitalLetter;
                }
                    break;
                case 5:
                {
                    keyBoardChar = polCapitalLetter;
                }
                    break;
                case 6:
                {
                    keyBoardChar = sveCapitalLetter;
                }
                    break;
                case 7:
                {
                    keyBoardChar = itaCapitalLetter;
                }
                    break;
                case 8:
                {
                    keyBoardChar = pycCapitalLetter;
                }
                    break;
            }
            letterCapFlag = 1;
            $("TCLIME_cabImg").src = cabImgs[1];
        }
        $("TCLIME_cabImg").style.display = "block";

        for (var i = 0; i < 3; i++)
        {
            for (var j = 0; j < 11; j++)
            {
                spanList[i * 11 + j].innerHTML = replaceToken(keyBoardChar[i][j][0]);
            }
        }
        spanList[10].innerHTML = "";
        spanList[22].innerHTML = "";

    }

    function toChangeSymPage()
    {
        if (symbolPageFlag == 0)
        {

            keyBoardChar = keyBoardSymbolPage2;

            symbolPageFlag = 1;
        }
        else
        {

            keyBoardChar = keyBoardSymbolPage1;

            symbolPageFlag = 0;
        }


        for (var i = 0; i < 3; i++)
        {
            for (var j = 0; j < 11; j++)
            {
                spanList[i * 11 + j].innerHTML = replaceToken(keyBoardChar[i][j]);
            }
        }
        if (symbolPageFlag == 1)
        {
            spanList[22].innerHTML = "&lt;2/2&gt;";
        }
        else
        {
            spanList[22].innerHTML = "&lt;1/2&gt;";
        }
        spanList[10].innerHTML = "";

    }

    function toChangeLang()
    {
        if (countryCount == 1)
        {
            return;
        }
        var preCountry = curCountry;
        /*
         if(curCountry==8)
         {
         hiddenKeyBoard();
         }
         */
        for (var i = 0; i < countryList.length; i++)
        {
            if (curCountry == countryList[i])
            {
                i++;
                if (i >= countryCount)
                {
                    i = 0;
                }
                curCountry = countryList[i];
                //top.g_setting.currentKeyBoardIndex = curCountry;
                break;
            }
        }
        switch (curCountry)
        {
            case 0:
            {
                keyBoardChar = enMinuscules;
            }
                break;
            case 1:
            {
                keyBoardChar = fraMinuscules;
            }
                break;
            case 2:
            {
                keyBoardChar = porMinuscules;
            }
                break;
            case 3:
            {
                keyBoardChar = espMinuscules;
            }
                break;
            case 4:
            {
                keyBoardChar = deuMinuscules;
            }
                break;
            case 5:
            {
                keyBoardChar = polMinuscules;
            }
                break;
            case 6:
            {
                keyBoardChar = sveMinuscules;
            }
                break;
            case 7:
            {
                keyBoardChar = itaMinuscules;
            }
                break;
            case 8:
            {
                keyBoardChar = pycMinuscules;
            }
                break;
        }


        for (var i = 0; i < 3; i++)
        {
            for (var j = 0; j < 11; j++)
            {
                TUtil.println("--- quanhw test keyBoardChar[i][j][0] ---" + keyBoardChar[i][j][0]);
                spanList[i * 11 + j].innerHTML = replaceToken(keyBoardChar[i][j][0]);
            }
        }
        spanList[10].innerHTML = "";
        spanList[22].innerHTML = "";

        charFlag = 0;
        symbolPageFlag = 0;
        $("TCLIME_langChange").innerHTML = langList[curCountry];
        $("TCLIME_charChange").innerHTML = "123#";
        $("TCLIME_cabImg").src = cabImgs[0];
        $("TCLIME_cabImg").style.display = "block";
    }

    function replaceToken(s)
    {
        var key = s;
        //top.g_channel.testLog("string="+s);
        /*
        key = key.replace(/&/g, "&amp;");
        key = key.replace(/</g, "&lt;");
        key = key.replace(/>/g, "&gt;");
        key = key.replace(/\u00D7/g, "&times;");
        key = key.replace(/\u00F7/g, "&divide;");
        key = key.replace(/\u00B1/g, "&plusmn;");
        key = key.replace(/\u00AB/g, "&laquo;");
        key = key.replace(/\u00BB/g, "&raquo;");
        key = key.replace(/\u00A6/g, "&brvbar;");
        key = key.replace(/\u00B4/g, "&acute;");
        key = key.replace(/\u00A9/g, "&copy;");
        key = key.replace(/\u00AE/g, "&reg;");
        key = key.replace(/\u00A5/g, "&yen;");
        key = key.replace(/\u00A3/g, "&pound;");
        key = key.replace(/\u20AC/g, "&euro;");
        */
        //key=key.replace(/\u00B0/g,"&deg;");
        //top.g_channel.testLog("key15="+key);
        return key;
    }
    function tokenToCode(s)
    {
        var key = s;
        //top.g_channel.testLog("string="+s);
        
        key = key.replace(/×/g, "215");
        key = key.replace(/÷/g, "247");
        key = key.replace(/±/g, "177");
        key = key.replace(/«/g, "171");
        key = key.replace(/»/g, "187");
        key = key.replace(/¦/g, "166");
        key = key.replace(/´/g, "180");
        key = key.replace(/©/g, "169");
        key = key.replace(/®/g, "174");
        key = key.replace(/¥/g, "165");
        key = key.replace(/£/g, "163");
        key = key.replace(/€/g, "8364");
        
        //key=key.replace(/°/g,"&deg;");
        //top.g_channel.testLog("key15="+key);
        return parseInt(key);
    }
    this.toOk = function ()
    {
        var result = this.toOkGetChar();
        var virtualEvent = document.createEvent('HTMLEvents');
        TUtil.println("--- quanhw test toOkGetChar result = " + result + " ---");
        if (typeof(result) == "undefined")
        {
            return false;
        }
        switch (result)
        {
            case "undefined":
                break;
            case "back":        //\u5220\u9664
                TUtil.println("--- quanhw test deleteStr(TCLIME_currentElement,1) ");
                TUtil.deleteCharacter();
                //deleteStr(TCLIME_currentElement, 1);
                break;
            case "shift":
                break;
            case "symPage1":
                break;
            case "symPage2":
                break;
            case "changeChar":
                break;
            case "changeLang":
                break;
            case "setting":
                break;
            case "!one":
                break;
            case "enter":      //enter
                this.hiddenKeyBoard();
                virtualEvent.VK_ENTER = 13;
                virtualEvent.keyCode = virtualEvent.VK_ENTER;
                dispatchVirtualEvent(virtualEvent, "keydown");
                break;
            default:
                //TCLIME_currentElement.value += TCLIME.toOkGetChar();
                insertStr(TCLIME_currentElement, result);
                break;
        }
        if (/^[A-Za-z]+$/.test(result) && result.length == 1) {
            switch(result) {
            case "A":
                virtualEvent.charCode = 0x41;
                break;
            case "B":
                virtualEvent.charCode = 0x42;
                break;
            case "C":
                virtualEvent.charCode = 0x43;
                break;
            case "D":
                virtualEvent.charCode = 0x44;
                break;
            case "E":
                virtualEvent.charCode = 0x45;
                break;
            case "F":
                virtualEvent.charCode = 0x46;
                break;
            case "G":
                virtualEvent.charCode = 0x47;
                break;
            case "H":
                virtualEvent.charCode = 0x48;
                break;
            case "I":
                virtualEvent.charCode = 0x49;
                break;
            case "J":
                virtualEvent.charCode = 0x4A;
                break;
            case "K":
                virtualEvent.charCode = 0x4B;
                break;
            case "L":
                virtualEvent.charCode = 0x4C;
                break;
            case "M":
                virtualEvent.charCode = 0x4D;
                break;
            case "N":
                virtualEvent.charCode = 0x4E;
                break;
            case "O":
                virtualEvent.charCode = 0x4F;
                break;
            case "P":
                virtualEvent.charCode = 0x50;
                break;
            case "Q":
                virtualEvent.charCode = 0x51;
                break;
            case "R":
                virtualEvent.charCode = 0x52;
                break;
            case "S":
                virtualEvent.charCode = 0x53;
                break;
            case "T":
                virtualEvent.charCode = 0x54;
                break;
            case "U":
                virtualEvent.charCode = 0x55;
                break;
            case "V":
                virtualEvent.charCode = 0x56;
                break;
            case "W":
                virtualEvent.charCode = 0x57;
                break;
            case "X":
                virtualEvent.charCode = 0x58;
                break;
            case "Y":
                virtualEvent.charCode = 0x59;
                break;
            case "Z":
                virtualEvent.charCode = 0x5A;
                break;
            case "a":
                virtualEvent.charCode = 0x61;
                break;
            case "b":
                virtualEvent.charCode = 0x62;
                break;
            case "c":
                virtualEvent.charCode = 0x63;
                break;
            case "d":
                virtualEvent.charCode = 0x64;
                break;
            case "e":
                virtualEvent.charCode = 0x65;
                break;
            case "f":
                virtualEvent.charCode = 0x66;
                break;
            case "g":
                virtualEvent.charCode = 0x67;
                break;
            case "h":
                virtualEvent.charCode = 0x68;
                break;
            case "i":
                virtualEvent.charCode = 0x69;
                break;
            case "j":
                virtualEvent.charCode = 0x6A;
                break;
            case "k":
                virtualEvent.charCode = 0x6B;
                break;
            case "l":
                virtualEvent.charCode = 0x6C;
                break;
            case "m":
                virtualEvent.charCode = 0x6D;
                break;
            case "n":
                virtualEvent.charCode = 0x6E;
                break;
            case "o":
                virtualEvent.charCode = 0x6F;
                break;
            case "p":
                virtualEvent.charCode = 0x70;
                break;
            case "q":
                virtualEvent.charCode = 0x71;
                break;
            case "r":
                virtualEvent.charCode = 0x72;
                break;
            case "s":
                virtualEvent.charCode = 0x73;
                break;
            case "t":
                virtualEvent.charCode = 0x74;
                break;
            case "u":
                virtualEvent.charCode = 0x75;
                break;
            case "v":
                virtualEvent.charCode = 0x76;
                break;
            case "w":
                virtualEvent.charCode = 0x77;
                break;
            case "x":
                virtualEvent.charCode = 0x78;
                break;
            case "y":
                virtualEvent.charCode = 0x79;
                break;
            case "z":
                virtualEvent.charCode = 0x7A;
                break;
            case "0":
                virtualEvent.charCode = 0x30;
                break;
            case "1":
                virtualEvent.charCode = 0x31;
                break;
            case "2":
                virtualEvent.charCode = 0x32;
                break;
            case "3":
                virtualEvent.charCode = 0x33;
                break;
            case "4":
                virtualEvent.charCode = 0x34;
                break;
            case "5":
                virtualEvent.charCode = 0x35;
                break;
            case "6":
                virtualEvent.charCode = 0x36;
                break;
            case "7":
                virtualEvent.charCode = 0x37;
                break;
            case "8":
                virtualEvent.charCode = 0x38;
                break;
            case "9":
                virtualEvent.charCode = 0x39;
                break;
            }
            dispatchVirtualEvent(virtualEvent, "keypress");
        }
    };

    this.toBack = function ()
    {
        console.log("TCLIME run toBack");
        if (keyBoardFocus == "keyboard")
        {
            this.hiddenKeyBoard();
        }
        else if (keyBoardFocus == "keySetting")
        {
        	TUtil.notifyActiveIMEState(1);
            hiddenKeySetting();
        }
    };

    /*向文本框发送事件  for
    */
    function dispatchVirtualEvent(e, type) {
        var element = document.activeElement;
        e.initEvent(type, true, true);
        if(element)
            element.dispatchEvent(e);
        else
            console.log("------ element: " + elementId + " get fail!! ------");
    }

    /*\u5411\u6587\u672C\u6846\u8F93\u5165\u5355\u4E2A\u6216\u8005\u591A\u4E2A\u5B57\u7B26\u7684\u63A5\u53E3
     param: input\u6307\u8F93\u5165\u6846\u5143\u7D20,str\u6307\u8981\u4F20\u5165\u7684\u5B57\u7B26,isBlur\u4E0D\u4F20\u5165\u503C\u6216\u8005\u4F20\u5165false\u5219\u53EF\u4EE5\u83B7\u53D6\u7126\u70B9,\u4F20\u5165true\u5219\u4E0D\u83B7\u53D6\u7126\u70B9
     */
    function insertStr(inputElement, str, isBlur)
    {
        /*if (inputElement)
        {
            if (inputElement.setSelectionRange)
            {
                var rangeStart = inputElement.selectionStart;
                var rangeEnd = inputElement.selectionEnd;
                var tempStr1 = inputElement.value.substring(0, rangeStart);
                var tempStr2 = inputElement.value.substring(rangeEnd);
                var tempStr3 = tempStr1 + str;
                inputElement.value = tempStr1 + str + tempStr2;
                console.log("chenhui add insertStr == "+tempStr1 + str + tempStr2);
                console.log("chenhui add inputElement.value == "+inputElement.value);
                if (!arguments[2])
                    setCaretPos(inputElement, tempStr3.length);
                else
                    setCaretPosNoFocus(inputElement, tempStr3.length);
            }
        }
        else
        {
            console.log("error:" + "input element undefined!");
        }*/
        //var haveSend = false;
		/*for (var i=0;i<str.length;i++)
		{
			var str1 = str.charCodeAt(i);
			TUtil.sendKeyboardCHNEvent(str1);
		}*/
        TUtil.sendKeyboardCHNEvent(str);
        /*var str1 = tokenToCode(str);
				TUtil.println("--- quanhw test after change code ==  "+str1); 
        switch (str1){
        	case 215:
        	case 247:
        	case 177:
        	case 12298:
        	case 12299:
        	case 163:
        	case 165:
        	case 166:
        	case 169:
        	case 171:
        	case 174:
        	case 180:
        	case 187:
        	case 8364:
        	{
					TUtil.sendKeyboardCHNEvent(str1);  
					haveSend = true;
					}     	
					break;					
        }

        TUtil.println("--- quanhw test insertStr(inputElement, str, isBlur) "); 
        if(haveSend == false)
            TUtil.sendKeyboardEvent(str);
            //TUtil.sendKeyboardCHNEvent(str);  */
    }

    /*\u5220\u9664\u7F16\u8F91\u6846\u82E5\u5E72\u4E2A\u5B57\u7B26
     param: inputElement\u6307\u8F93\u5165\u6846\u5143\u7D20,count: \u9700\u8981\u5220\u9664\u7684\u5B57\u7B26\u4E2A\u6570
     */
    function deleteStr(inputElement, count)
    {
    	console.log("event.target node = " + inputElement.tagName);
        if (inputElement)
        {
    	    if (inputElement.setSelectionRange)
			{
			var rangeStart = inputElement.selectionStart;
			var rangeEnd = inputElement.selectionEnd;
			var tempStr1 = inputElement.value.substring(0, rangeStart);
			var tempStr2 = inputElement.value.substring(rangeEnd);
			tempStr1 = tempStr1.substring(0, tempStr1.length - count);
			inputElement.value = tempStr1 + tempStr2;
			setCaretPos(inputElement, tempStr1.length);
	    	}
        }
        else
        {
            console.log("error:" + "input element undefined!");
        }
    }

    /*\u8BBE\u7F6E\u5149\u6807\u79FB\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E\u7684\u63A5\u53E3
     param: inputElement\u6307\u8F93\u5165\u6846\u5143\u7D20,pos\u6307\u8981\u5B57\u7B26\u5728\u54EA\u4E2A\u4F4D\u7F6E(\u4F20\u6570\u5B57)
     */
    function setCaretPos(inputElement, pos)
    {
        if (inputElement)
        {
            inputElement.focus();
            if (inputElement.setSelectionRange)
            {
                inputElement.setSelectionRange(pos, pos);
            }
        }
        else
        {
            console.log("error:" + "input element undefined!");
        }
    }

    /*\u8BBE\u7F6E\u5149\u6807\u79FB\u52A8\u5230\u6307\u5B9A\u4F4D\u7F6E\u7684\u63A5\u53E3\uFF08\u4E0D\u53EF\u83B7\u53D6\u8F93\u5165\u6846\u7126\u70B9,\u5149\u6807\u65E0\u6CD5\u663E\u793A\uFF09
     param: inputElement\u6307\u8F93\u5165\u6846\u5143\u7D20,pos\u6307\u8981\u5B57\u7B26\u5728\u54EA\u4E2A\u4F4D\u7F6E(\u4F20\u6570\u5B57)
     */
    function setCaretPosNoFocus(inputElement, pos)
    {
        if (inputElement)
        {
            if (inputElement.setSelectionRange)
            {
                inputElement.setSelectionRange(pos, pos);
            }
        }
        else
        {
            console.log("error:" + "input element undefined!");
        }
    }
}
