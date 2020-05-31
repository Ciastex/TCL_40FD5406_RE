Util.println("-----run js_amazon.js------");

if(window.tclHawaii) {
	window.hawaii = function() {};
	window.hawaii.registerMessageListener = function(callback) {
		window.tclHawaii.registerMessageListener(callback);
	}
	window.hawaii.sendMessage = function(data) {
        window.tclHawaii.sendMessage(data);
    }
}