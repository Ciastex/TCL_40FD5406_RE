tvPhilips = false;
Main.ReturnToTVMenu = function(){
	if(isHTML5){
		Main.blockNavigation=false;
		window.open('', '_self', '');
		window.close(); 

	}else{
		Main.player.stop();
		if(isToshiba() && typeOf(com) == "object") com.toshiba.api.goToshibaPlacesPortal();
		else if(HbbTV) app.destroyApplication();
		else if(isSamsung() && widgetAPI) widgetAPI.sendReturnEvent();
		else if(isLG()) window.NetCastBack();
		else if(isPhilips()) history.go(-999);
		else if(isNetRange) history.go(-1);
		else window.close();
			
	}
};