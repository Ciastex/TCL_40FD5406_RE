//console.log("-----run js_chili.js   ------");

document.getElementById('_popup').addEventListener('DOMSubtreeModified',function(){

		if(document.getElementById("bot_Delete")!== null && document.getElementById("erase_img")==null)
		{
			
		//	console.log('-----run js_chili.js  addEventListener ------');
			var curNode = document.getElementById("bot_Delete"); 
			curNode.style.cssText='background-image:none;padding-left:10px; font-size:19px;';
			var newDiv = document.createElement("div"); 
			newDiv.id = 'erase_img';
			newDiv.style.cssText = "float:right;width:42px;height:31px;background:url(../imagenes/erase.png) no-repeat white;background-position:-4px -4px;margin-top:11px;border-radius:7px;"; 
			curNode.parentNode.insertBefore(newDiv,curNode.nextSibling);
		}
		
	},false);

