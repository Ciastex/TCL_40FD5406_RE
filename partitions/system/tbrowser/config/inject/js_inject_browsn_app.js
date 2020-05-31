Util.println("---run js_inject_browsn_app.js---");
function TextField(e) {
    function s(e) {
        if (!e) throw "missing parameter input";
        if (!e.type || e.type != "text" && !1) throw "wrong type of input (" + e + ") is not an inputfeld of type Text";
        i = document.createElement("div");
        var t = e.parentElement;
        t || (t = e.parentNode);
        if (!t) throw "error Parent Element was not detectable";
        i.id = e.id,
        i.className = e.className,
        i.name = e.name ? e.name: "",
        n = e.value,
        r = e.maxLength ? e.maxLength: !1,
        t.removeChild(e),
        t.appendChild(i),
        i.tabIndex = "1",
        i.onfocus = that.setActive,
        i.onblur = that.setInActive,
        i.onclick = that.onclick,
        i.onkeypress = that.onkeypress,
		i.onkeydown = that.onkeydown
    }
    if (!e) throw "missing Parameter inputFeld";
    if (!I_TextField) throw "the interface I_TextField is missing";
    I_TextField.call(this),
    that = this,
    this.activeFlag = !1,
    this.passiveFlag = !1;
    var t = 0,
    n = "",
    r = !1,
    i;
    this.setActive = function() {
        this.passiveFlag && this.unSetPassive(),
        this.activeFlag = !0,
        i.focus(),
        _ceckInputValue(),
        _updateText()
    },
    this.setInActive = function() {
        this.activeFlag = !1,
        i.blur(),
        _updateText(!0)
    },
    this.setPassive = function() {
        this.activeFlag && this.setInActive(),
        this.passiveFlag = !0,
        _ceckInputValue(),
        _updateText()
    },
    this.unSetPassive = function() {
        this.passiveFlag = !1,
        _updateText(!0)
    },
    this.addChar = function(e) {
        _ceckInputValue();
        if (e == " ") return;
        e == "space" && (e = " "),
        e == "&" && (e = "&#38;"),
        n = n.slice(0, t) + e + n.slice(t, n.length),
        t += e.length,
        _updateText()
    },
    this.deleteChar = function() {
        _ceckInputValue();
        if (t == 0) return;
        n.slice(t - 5, t) == "&#38;" ? (n = n.slice(0, t - 5) + n.slice(t, n.length), t -= 5) : (n = n.slice(0, t - 1) + n.slice(t, n.length), t -= 1),
        _updateText()
    },
    this.deleteAll = function() {
        n = "",
        t = 0,
        _updateText()
    },
    this.setText = function(e) {
        n = e,
        t = n.length,
        _updateText()
    },
    this.setPos = function(e, t) {},
    this.moveInternH = function(e) {
        _ceckInputValue(),
        e > 0 && t < n.length && (n.slice(t, t + 5) == "&#38;" ? t += 5 : t++),
        e < 0 && t > 0 && (n.slice(t - 5, t) == "&#38;" ? t -= 5 : t--),
        _updateText()
    },
    this.moveInternV = function(e) {},
    this.getText = function() {
        return _ceckInputValue(),
        n
    },
    this.onclick = function(e) {
        log("perform onclick")
    },
    this.onkeypress = function(e) {
		console.log(e.keyCode);
        var inputText = document.getElementById("inputText");
	    if (e.keyCode == VK_LEFT) { 
	        mykeybord.getTextField().moveInternH(-1);
	    }
	    var s = inputText.innerHTML;
	    var u = s.length;
	    var last = s.slice(u-1, u); 
		console.log(VK_RIGHT);
	    if (e.keyCode == VK_RIGHT && last != "|") { 
		    console.log(e.keyCode);
			e.preventDefault();
	        mykeybord.getTextField().moveInternH(1);
 	    }
    },
	this.onkeydown = function(e) {
        var inputText = document.getElementById("inputText");
	    if (e.keyCode == VK_LEFT) { 
	        mykeybord.getTextField().moveInternH(-1);
	    }
	    var s = inputText.innerHTML;
	    var u = s.length;
	    var last = s.slice(u-1, u); 
	    if (e.keyCode == VK_RIGHT && last != "|") { 
		    console.log(e.keyCode);
			e.preventDefault();
	        mykeybord.getTextField().moveInternH(1);
 	    }
    },
    _ceckInputValue = function() {},
    _updateText = function(e) {
        var s = 'style="position: relative;' + (e ? "width: 0px;": "background: url('img/cursor.gif') repeat-y;width: 2px;") + "color: transparent;" + "display: inline-block;" + '" ',
        o = '<span class="tf_curser" ' + s + ">|</span>";
        if (n.length == 0) {
            i.innerHTML = o,
            t = 0;
            return
        }
        var u = !1;
        r && n.length >= r && (u = r - 1, t >= r && (t = u), n = n.slice(0, u)),
        u === !1 && (u = n.length),
        i.innerHTML = n.slice(0, t) + "|" + n.slice(t, u),
        log("textfeld _updateText   text (" + n + ")")
    },
    s(e)
};