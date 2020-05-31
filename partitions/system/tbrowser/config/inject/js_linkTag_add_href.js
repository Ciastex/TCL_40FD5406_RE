Util.println("---run js_linkTag_add_href.js---");
function addHref()
{
	var links = document.getElementsByTagName("a");
	for(var i = 0; i < links.length; i++)
	{
		if(links[i].href == ""){
			links[i].href = "javascript:void(0);";
		}
	}
}
var oldLoadHandler = window.onload; 
var oldOnKeyup = document.onkeyup;
window.onload = function() 
{ 
	if (oldLoadHandler) { 
		oldLoadHandler(); 
	} 
	addHref();
	document.onkeyup = myOnKeyup;
}; 

function myOnKeyup(e)
{
	if(oldOnKeyup){
		oldOnKeyup(e);
	}
	if(e.which == 13){
		addHref();
	}	
}

