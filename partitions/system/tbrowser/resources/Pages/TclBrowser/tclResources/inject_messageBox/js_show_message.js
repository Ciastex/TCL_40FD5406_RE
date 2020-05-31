console.log("---run js_show_message.js---1");

var TCLMessageBox_sign = 0;
if (typeof(TCLMessageBox_hostSysEvent) == "undefined") {
    TCLMessageBox_sign = 1;
    var TCLMessageBox_hostSysEvent = document.onsystemevent;
}
document.onsystemevent = tclMessageBox_SysEvent;

function tclMessageBox_SysEvent() {
    if(TCLMessageBox_hostSysEvent)
    {
        TCLMessageBox_hostSysEvent(event);
    }
    var keyCode = event.keyCode || event.which;
    Util.println("---tclMessageBox_SysEvent---" + keyCode);
    switch (keyCode)
    {
		case 1000:
			removeDiv();
		break;
		default :
		break;
    }
}
function createDiv() {
    if ('showed' != Util.getEnv('weblauncherShowbar')) {
        Util.setEnv('weblauncherShowbar', 'showed');
        var oDiv = document.createElement("div");
        oDiv.setAttribute("id", "tcl_messageBox");
        console.log("---run js_show_message.js---2");
        oDiv.innerHTML = "<p>Press <span>INFO</span> to the toolbar</p>";
        document.body.appendChild(oDiv);
        setTimeout("removeDiv()", 10000);
    }
}
function removeDiv() {
    var my = document.getElementById("tcl_messageBox");
    if (my != null) my.parentNode.removeChild(my);
}
if (TCLMessageBox_sign)
    createDiv();