console.log("-------inject------------js_remove_tabindex.js-------------");
var x=document.getElementsByTagName("*");
for (var i=0; i<x.length; i++) {
  if (x[i].getAttribute('TabIndex')) {		
	console.log(x[i].getAttribute('TabIndex'));
        x[i].setAttribute('TabIndex','-1');
  	console.log(x[i].getAttribute('TabIndex'));
  }
}