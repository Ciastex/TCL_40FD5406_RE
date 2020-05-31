console.log("---run js_hitMuiscOnly.js---");

Main.unload = function(flag){
		
		this.infoUpdater.stopQuery();
		this.advertView.deinitialize();
		TVA_Player.deinit();
		window.history.go(-1);
	}