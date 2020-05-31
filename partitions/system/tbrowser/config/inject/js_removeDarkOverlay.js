console.log("----inject file js_removeDarkOverlay----");
function tcl_removeDarkOverlay(e) {
	console.log("----tcl_removeDarkOverlay----");
	var code = e.keyCode;
	if (code == RedButton && isVideoActive()) {
		console.log("----tcl_removeDarkOverlay--receive RedButton--");
		var b = document.body;
		var darkoverlay_a = $("div.darkoverlay");
		var length = darkoverlay_a.length;
		console.log("----tcl_removeDarkOverlay--div.darkoverlay.length == " + length + "--");
		for (var i = 0;i < length;i++) {
			b.removeChild(darkoverlay_a[i]);
		}
	}
}
document.addEventListener("keyup",tcl_removeDarkOverlay,false);