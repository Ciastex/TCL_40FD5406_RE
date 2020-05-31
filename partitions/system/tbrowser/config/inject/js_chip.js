console.log("run js_chip.js")
function onKeyLeft(e) {
	if(navigator.userAgent.toLowerCase().indexOf("opera") >= 0 && navigator.userAgent.toLowerCase().indexOf("nettv") >= 0){
		
	} else {
		e.preventDefault();
		update_focus('left');
	}
}
function onKeyRight(e) {
	if(navigator.userAgent.toLowerCase().indexOf("opera") >= 0 && navigator.userAgent.toLowerCase().indexOf("nettv") >= 0){

	} else {
		e.preventDefault();
		update_focus('right');
	}
}
function onKeyUp(e) {
	
     if ($("#video").length > 0) {
         sdhd();  					
     } else {
         if ($("#up").length > 0 && $("*:focus").parents(".noscroll").length < 1 && DEVICE_TYPE == DEVICE_TYPES.PHILIPS) {
       	    scrollyukari();
         } else {
      	     if(navigator.userAgent.toLowerCase().indexOf("opera") >= 0 && navigator.userAgent.toLowerCase().indexOf("nettv") >= 0){
		
	     } else {
	         e.preventDefault();
		 update_focus('up');
	     }
         }
    }
}
function onKeyDown(e) {
	
    if ($("#down").length > 0 && $("*:focus").parents(".noscroll").length < 1 && DEVICE_TYPE == DEVICE_TYPES.PHILIPS) {
        scrollasagi();            
    } else {
        if(navigator.userAgent.toLowerCase().indexOf("opera") >= 0 && navigator.userAgent.toLowerCase().indexOf("nettv") >= 0){
							
	} else {
	    e.preventDefault();
	    update_focus('down');
	}
    }
}