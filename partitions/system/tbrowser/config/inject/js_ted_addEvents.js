function tclAddEvents(){
	var elems=document.getElementsByTagName("div");
	var i, j;
	for(i=0, j=0;i<elems.length;i++){
		if(elems[i].className=="talk-grid__tile__inner"){
			if(elems[i].tabIndex!=0){
				j++;
				elems[i].tabIndex=0;
				elems[i].onfocus=function(e){
					Util.println("---js_ted_addEvents.js:onfocus---");
					var evt = document.createEvent('MouseEvents');
					evt.initEvent('mouseover', true, false);
					e.target.dispatchEvent(evt);
				};
				elems[i].onblur=function(e){
					Util.println("---js_ted_addEvents.js:onblur---");
					var evt = document.createEvent('MouseEvents');
					evt.initEvent('mouseout', true, false);
					e.target.dispatchEvent(evt);
				};
				elems[i].onkeyup=function(e){
					if(e.which==13){//VK_OK
						Util.println("---js_ted_addEvents.js:onkeyup(OK)---");
						var evt = document.createEvent('MouseEvents');
						evt.initEvent('click', true, false);
						e.target.dispatchEvent(evt);
					}
				};
			}
		}
	}
	Util.println("---js_ted_addEvents.js:"+j+" target div---");
}

setInterval(tclAddEvents, 3000);