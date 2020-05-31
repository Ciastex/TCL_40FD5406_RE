Util.println("---run js_twitter.js-----");
var elems=document.getElementsByTagName("a");
var i;
for(i=0;i<elems.length;){
	if(elems[i].className=="last"){
		elems[i].parentNode.removeChild(elems[i]);
	} else {
		i++;
	}
}
