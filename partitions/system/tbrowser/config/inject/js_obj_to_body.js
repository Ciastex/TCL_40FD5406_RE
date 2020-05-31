(function tclCreateObj(){
	
	Util.println("---run js_obj_to_body.js---");
	var b = document.body;
	
	document.getElementById('pcmgr').parentNode.removeChild(document.getElementById('pcmgr'));
	document.getElementById('video').parentNode.removeChild(document.getElementById('video'));
	document.getElementById('appmgr').parentNode.removeChild(document.getElementById('appmgr'));
	document.getElementById('oipfcfg').parentNode.removeChild(document.getElementById('oipfcfg'));
	
	var obj1 = document.createElement('object');
	obj1.id = 'pcmgr';
	obj1.type = 'application/oipfParentalControlManager';
	obj1.style.cssText = 'position: absolute; left: 0px; top: 0px; width: 0px; height: 0px;';
	
	var obj2 = document.createElement('object');
	obj2.id = 'video';
	obj2.type = 'video/broadcast';
	obj2.style.cssText = 'position: absolute; left: 0; top: 0; width: 1280px; height: 720px;';
	
	var obj3 = document.createElement('object');
	obj3.id = 'appmgr';
	obj3.type = 'application/oipfApplicationManager';
	obj3.style.cssText = 'position: absolute; left: 0px; top: 0px; width: 0px; height: 0px;';
	
	var obj4 = document.createElement('object');
	obj4.id = 'oipfcfg';
	obj4.type = 'application/oipfConfiguration';
	obj4.style.cssText = 'position: absolute; left: 0px; top: 0px; width: 0px; height: 0px;';
	
	b.appendChild(obj1);
	b.appendChild(obj2);
	b.appendChild(obj3);
	b.appendChild(obj4);
})();