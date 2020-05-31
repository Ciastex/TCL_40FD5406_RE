// JavaScript Document
Util.println("---run setNoThink.js---------");
document.getElementsByName("q").item(0).addEventListener("keydown",myfunction,false);


function myfunction(){
	if (event.keyCode == 40){
	  console.log("weiguangj=---------2-----event.keyCode="+event.keyCode);
		document.getElementsByName("btnG").item(0).focus();	  
		event.stopPropagation();
		event.preventDefault();
		return false;
	}	  
}

/*去掉联想出来的内容*/
tcl_google_time = setInterval( function() {
     var gst = document.getElementsByClassName('gstl_0 gssb_c').item(0); 
     if (gst) {
         gst.parentNode.removeChild(gst);
         clearInterval(tcl_google_time);
     }
}, 100); 

  
  