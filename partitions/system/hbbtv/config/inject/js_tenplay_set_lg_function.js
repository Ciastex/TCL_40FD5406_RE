console.log("---run js_tenplay_set_lg_function--");
try {
	for (var i = 0; i < tv.switch.patchList.length; i++) {
		if (tv.switch.patchList[i].component === "tv.switch.player" && tv.switch.patchList[i].ua === "HbbTV" && tv.switch.patchList[i].patch === "hbbtv.generic") {
			tv.switch.patchList[i].patch = "hbbtv.lg";
		}
	}
} catch (e) {
	
}
