Util.println("-----run js_lanacion_exit.js-----");

if (!window.NetCastReturn) {
	window.NetCastReturn = function(a) {
		window.close();
	}
}
