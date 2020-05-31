nrdp.gibbon.loadScript({url: "libquickplayer.js", async:false, secure: true, headers: {'X-Gibbon-Cache-Control': 'server, max-age=0, no-memory-cache, priority=1'}});

nrdp.gibbon.init(function () {
    /* if using directfb, this will make sure video goes in the same window */
    var a = nrdp.gibbon.scene.widget = nrdp.gibbon.makeWidget();
    a.rect = { x: 0, y: 0, width: nrdp.gibbon.scene.width, height: nrdp.gibbon.scene.height };
    a.color = { r: 255, g: 255, b: 255, a: 0 };

    function createdPlayer(playerControl) {
        nrdp.gibbon.addEventListener("key", function(event) {
            //nrdp.log.fatal(JSON.stringify(event, null, "   "));
            if (event.data.uiEvent == "key.back") {
                playerControl._media.addEventListener("statechanged", function () {
                    if (playerControl._media.state == playerControl._media.CLOSED) {
                        nrdp.gibbon.setTimeout(nrdp.exit.bind(nrdp), 0);
                    }
                });
                playerControl._media.close();
            }
        });
    }
    var SWIM = 0, MULTIPLE = 0;
    playVideo({movieId: "70136810", trackingId: "13462260", swim: SWIM, multiple: MULTIPLE }, createdPlayer); // example short with bitrate
});
