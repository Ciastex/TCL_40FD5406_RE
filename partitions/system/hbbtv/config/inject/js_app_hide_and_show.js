console.log("---run js_app_hide_and_show.js---");
var tclPreShown = true;
function tclAppShowOrHide() {
	var curShown = HbbTV.Core.Cntrl.isApplicationShown();
    console.log("pre state:" + tclPreShown + ", current state:" + curShown);
	if (tclPreShown != curShown) {
		tclPreShown = curShown;
        var temp = document.getElementById("HbbTV-iAppMgr").getOwnerApplication(document);
        if (curShown)
            temp.show();
        else
            temp.hide();
    }
}
setInterval(tclAppShowOrHide, 5000);

