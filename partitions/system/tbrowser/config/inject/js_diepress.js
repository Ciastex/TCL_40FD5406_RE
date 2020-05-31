Util.println("-----run js_diepress.js-----");

document.addEventListener('keydown',mybload,true);
function mybload (event){
	if(oldHash == "#Start"){		
	} else {
		bload();
		document.removeEventListener('keydown',mybload,true);
	}
}
