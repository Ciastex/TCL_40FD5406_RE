(function tclTagesschauObjDisplayBlock() {
	Util.println("---run js_tagesschau_obj_display_block.js---");
	var appMgr = document.getElementById('oipfAppMan').parentNode;
	if (appMgr) {
	    if (appMgr.style.display == "none")
		    appMgr.style.display = "block";
	}
})();