(function tcldivDisplayBlock() {
	console.log("---run js_RTL2_div_display_block.js---");
	var div = document.getElementsByTagName("div");
	if (div) {
		for ( var i = 0; i < div.length; i++) {
			if (div[i]) {
				if (div[i].className == "objectwrapper") {	
					div[i].style.display = "block";	
				}	
			}			
		}
	}	
})();