Util.println("---run js_eltrece---");

window.addEventListener("keydown", function
		(e) {
		var i = e.keyCode;
		switch (i) {
		case 13:
		var e = document.createEvent("MouseEvents");e.initEvent("click", true, true);
		document.getElementById(document.activeElement.id).dispatchEvent(e);
		break;
		}
});
