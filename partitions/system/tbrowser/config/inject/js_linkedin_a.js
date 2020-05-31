Util.println("---run js_linkedin.js---------");
(function seta_Target(){
	var elems=document.getElementsByTagName("a");
	console.log("weiguangj---length="+elems.length);
	for(var i=0;i<elems.length;i++){
		elems[i].target="_self";	
	}
	
})()