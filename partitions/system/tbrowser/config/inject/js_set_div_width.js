Util.println("---run js_set_div_width.js-----");
var elems=document.getElementById("head").getElementsByTagName("div");
var i;
console.log("for elems.length == "+elems.length);
for(i=0;i<elems.length;i++){
	if(elems[i].className=="breadcrumb"){
		console.log("for i = "+i+"  set width == "+elems[i].className);
		elems[i].style.width = "300px";
	}
}
