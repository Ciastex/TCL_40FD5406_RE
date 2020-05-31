Util.println("---run js_netrange_search.js---");
function TextField(t_inputFeld) {

// [check precondition -->
    if (!t_inputFeld)
        throw "missing Parameter inputFeld";

    if (!I_TextField)
        throw "the interface I_TextField is missing";

// <-- check precondition ]
// [extend/implement -->

    I_TextField.call(this);	// to implement this Interface , just copy and past this line

// <-- extend/implement ]
// [ Var -->
    that = this;
    this.activeFlag = false;
    this.passiveFlag = false;

    var pos = 0;
    var text = "";
    var _lasttext = null;
    var maxLength = false;

// <-- Var ]
// [ Public Functions -->

    /**
     * Aktiviert das TextFeld
     */
    this.setActive = function () {
        if (that.passiveFlag)
            that.unSetPassive();

        that.activeFlag = true;
        t_inputFeld.focus();
        _ceckInputValue();
        _updateText(true);
    };

    /**
     * Deaktiviert das TextFeld
     */
    this.setInActive = function () {

        _ceckInputValue();
        that.activeFlag = false;

        t_inputFeld.blur();
        _updateText(true);
    };

    /**
     * A mode in witch the the curser is visible (example by using a Onscreen
     * KeyBord) but the Textfeld is not active
     */
    this.setPassive = function () {
        if (that.activeFlag)
            that.setInActive();

        if (!that.passiveFlag) {
            _ceckInputValue();
            _lasttext = null;
            that.passiveFlag = true;
        }
        _updateText();
    };

    /**
     * Deaktiviert das TextFeld
     */
    this.unSetPassive = function () {
        that.passiveFlag = false;
        _updateText(true);
    };


    /* add char at cursor.pos-1 */
    this.addChar = function (t_string) {
        that.setPassive();

        if (t_string == " ")
            return;
        if (t_string == "space")
            t_string = " ";

        text = text.slice(0, pos) + t_string + text.slice(pos, text.length);
        pos += t_string.length;

        _updateText();
    };

    /* delete char at cursor.pos-1 or nothing if cursor.pos == 0 */
    this.deleteChar = function () {
        that.setPassive();

        if (pos == 0)
            return;
        text = text.slice(0, pos - 1) + text.slice(pos, text.length);
        pos -= 1;

        _updateText();
    };

    this.deleteAll = function () {
        that.setPassive();

        text = "";
        pos = 0;

        _updateText();
    };

    this.setText = function (s_text) {
        that.setPassive();

        text = s_text;
        pos = text.length;

        _updateText();
    };

    this.setPos = function (i_x, i_y) {

    };

    /* cursor Left Right  Pflicht*/
    this.moveInternH = function (step) {
        that.setPassive();

        if (step > 0 && pos < text.length)
            pos++;
        if (step < 0 && pos > 0)
            pos--;

        _updateText();
    };

    /* cursor Up Down  optional*/
    this.moveInternV = function (step) {

    };

    this.getText = function () {
        _ceckInputValue();
        return text;
    };

    this.onclick = function (event) {
        // ignore for now
        // TODO think about the idear to popup a real Textfeld (with device handling) after pressing ok
        log("perform onclick");
    };

    this.onkeypress = function (event) {
        // ignore for now
        // thinkabout adding input text (for example t is pressed so add a t to the text)
        log("perform onkeypress");
    };

// <-- Public Functions ]
// [ Private Funktions -->

    _ceckInputValue = function () {
        //	log("textfeld _ceckInputValue    inputFeld:"+inputFeld.value.length +" text:"+text.length );

        if (!that.passiveFlag) {
            text = t_inputFeld.value;
            pos = t_inputFeld.selectionEnd; //= t_inputFeld.selectionStart;
        }

    };


    _updateText = function (hideCurserFlag) {

        // casching to avoid unnessasary calls
        if (_lasttext && _lasttext == text)
            return
        else
            _lasttext == text;

        // TODO superior to use a Css class instead of inline StyleCode
        // define Curserstyle
        /*		var curserStyle = ""
         +"style=\""
         +"position: relative;"
         +((!hideCurserFlag)
         ?
         "background: url(\'img/cursor.gif\') repeat-y;"
         +"width: 2px;"
         //				+"height: 50%;"
         //				+"top: 25%;"
         :
         "width: 0px;"	// just leaf the background image to hide the curser
         )
         +"color: transparent;"
         +"display: inline-block;"
         +"\" ";
         */
        // define Curser
//		var curser = "<p "+curserStyle+">|</p>";
//		var curser = "<span class=\"tf_curser\" "+curserStyle+">|</span>";
        var curser = "|";


        if (!text || text.length == 0 || text == curser) {
            if (hideCurserFlag) {
                t_inputFeld.value = "";
            } else {
                t_inputFeld.value = curser || "|"; 	// the ||"|"; part is a bugfix for Sharp 2013
            }

            t_inputFeld.selectionEnd = t_inputFeld.selectionStart = pos = 0;
            return;
        }

        // checking maxLength
        var endPos = false;

        if (maxLength && text.length >= maxLength) {	// (maxLength == false||maxLength == 0)? ignore the length:check if the text is to long;
            endPos = maxLength - 1;
            if (pos >= maxLength) {
                pos = endPos;
            }
            text = text.slice(0, endPos);
        }

        if (endPos === false)	// if nothing is set do autosetting
            endPos = text.length;


        if (hideCurserFlag) {
            // add text to the textbox and reset the curser
            t_inputFeld.value = text;
            t_inputFeld.selectionEnd = t_inputFeld.selectionStart = pos;
        } else {
            // add text and curser to the textbox
            t_inputFeld.value = text.slice(0, pos) + curser + text.slice(pos, endPos);
        }


        //	log("textfeld _updateText   text ("+text+")");
    };

    // [ INIT -->

    try {
        t_inputFeld.addEventListener('focus', this.setActive, true);
        t_inputFeld.addEventListener('blur', this.setInActive, true);

    } catch (e) {
        log("errror while initialising textfield " + e);
    }




    // <-- INIT ]


    // Variable

    // inputFeld.textLength 		// Returns the length of the text in a form control.	//opera/firefox
    // inputFeld.size				// Specifies or returns the width of a control, in characters.	//all
    // inputFeld.selectionStart		// Specifies or returns the start position of the selected text within the current element.
    // inputFeld.selectionEnd		// Specifies or returns the end position of the selected text within the current element.
    // inputFeld.maxLength			// Sets or retrieves the maximum number of characters allowed in a text box.
    // inputFeld.disabled			// Sets or retrieves the state of an object for user interaction.
    // inputFeld.contentEditable	// Sets or retrieves whether the contents of the object are editable.

// Function

    // inputFeld.blur()				// Removes the focus from the current element, and fires the onblur event.
    // inputFeld.focus()			// Sets the focus on the current element.


    // <-- Private Funktions ]
}