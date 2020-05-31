Util.println("-----run js_joomeo_key_event.js------");

(function (global) {
	// -- handler
	var getNextId = function (element, reverse) {
		
		var current_id = element.id;
		//console.log("getNextId current_id = " + current_id);
		if (/^a\d+$/.test(current_id)) {
			var index = parseInt(current_id.substring(1));
			//console.log("getNextId index = " + index);
			if (reverse && index >= 0)
				return "a" + (index-1)
			else
				return "a" + (index+1)
		}
		return "";
	};

	var handleCssNav = function (event) {
		
		if (event.keyCode != 37 && event.keyCode != 38 && event.keyCode != 39 && event.keyCode != 40) {
			return;
		}
		var nextId, nextEl;
		//console.log("getNextId event.keyCode = " + event.keyCode);
		var reverse = (event.keyCode === 37 || event.keyCode === 38);
		//console.log("getNextId reverse = " + reverse);
		nextId = getNextId(document.activeElement, reverse);
		//console.log("getNextId nextId = " + nextId);
		if (nextId !== ""){
			nextEl = document.getElementById(nextId);
			if (nextEl) {
				nextEl.focus();
			}
			event.preventDefault();
		    event.stopPropagation();
		}
	};
	global.addEventListener("keydown", handleCssNav, false);
})(window);