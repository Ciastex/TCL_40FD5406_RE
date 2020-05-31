TUtil.println("---run js_set_youtube_volume.js---");
setTimeout('setVolume()',3000); //3s之后将声音设置成1
function setVolume() {
	var vid = document.getElementById('v');
	if (vid) {
		vid.volume = 1.0;
	}
}
