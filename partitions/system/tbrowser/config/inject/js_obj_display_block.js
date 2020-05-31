(function tclObjDisplayBlock(){
	
	Util.println("---run js_obj_display_block.js---");
	var appMgr = document.getElementById('appmgr');
	if(appMgr.style.display == "none")
	{
		appMgr.style.display = "block";
		var app = appMgr.getOwnerApplication(window.document);
		app.show();
		app.privateData.keyset.setValue(0x33F);
		app.privateData.keyset.value = 0x330;

	}
})();