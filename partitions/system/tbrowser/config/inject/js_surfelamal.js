Util.println("run--------------------js_surfelamal---------------------");

devicePlayer.play = function() {
    if (!this.videoObject) throw "(DevicePlayer.play): " + noActiveVideo_EXC;
    try {
        if (this.videoObject.play){
	    this.videoObject.play(1);
	}else {
	    setTimeout("Player.play()",1000);
	}
    } catch(e) {}
    nr_main.addCssClass("loading-icon", "hidden");
    nr_main.stopTimer()
};