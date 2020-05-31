console.log("---------run js_mmh_jukebo_btm.js---------");
var inject_data_url = video.data;
var video = document.getElementById("video");
video.onPlayStateChange=checkPlayState;
video.data = inject_data_url;
video.play(1);


