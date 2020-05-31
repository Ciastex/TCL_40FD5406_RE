(function tclObjDisplayBlockForAll() {
	console.log("---run js_obj_display_block_for_all.js---");
	var objects = document.getElementsByTagName("object");
	if (objects) {
		for ( var i = 0; i < objects.length; i++) {
			if (objects[i]) {
			    if (objects[i].style.display == "none") {
				    objects[i].style.display = "block";
			    }
			}
		}
	}
	
	if (objects[0]) {
	    var appMgr = objects[0].parentNode;
		if (appMgr) {
	        if (appMgr.style.display == "none") {
				appMgr.style.display = "block";
			}
	    }
		  
	}
})();