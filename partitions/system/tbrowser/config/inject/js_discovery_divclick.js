function sendClickEventToDIV(dir)
{
	var elems=document.getElementsByTagName("div");
	var targets=new Array();
	var i, j, tmp;
	for(i=0, j=0, tmp=0;i<elems.length;i++){
		if(elems[i].className=="item"||elems[i].className=="item active"){
			targets.push(elems[i]);
			if(elems[i].className=="item active")
				tmp=j;
			j++;
		}
	}
	var evt = document.createEvent('MouseEvents');
	evt.initEvent('click', true, false);
	tmp=(tmp+dir+targets.length)%targets.length;
	targets[tmp].dispatchEvent(evt);
}

(function tclAddDivClickEvents(){
    console.log("---js_discovery_divclick.js:run---");
	var elems=document.getElementsByTagName("div");
	var targets=new Array();
	var i;
	for(i=0;i<elems.length;i++){
		if(elems[i].className.indexOf("hover-arrow")>-1){
			elems[i].onclick=function(e){
				console.log("---js_discovery_divclick.js:onclick---");
				if(e.target.className=="hover-arrow left-arrow")
					sendClickEventToDIV(-1);
				else
					sendClickEventToDIV(1);
			};
		}
	}
})();
