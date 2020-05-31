Util.println("-----run js_yahoo.js-----");
var tcl_hasOwnProperty = Object.prototype.hasOwnProperty;
Object.prototype.hasOwnProperty = function(e){
	this.hasOwnProperty = tcl_hasOwnProperty;
	return this.hasOwnProperty(e);
}