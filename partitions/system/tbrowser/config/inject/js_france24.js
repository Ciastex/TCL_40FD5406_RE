Util.println("---run js_france24.js---");
function Ha(a) {
    a.W.a.style.visibility = "hidden";
    a.ga = f;
    var b = document.getElementById("video");
    console.log("Ha(a) setFullScreen:"+h);
    //b.setFullScreen && b.setFullScreen(h);
    E(a.t, h);
    a.ib = a.wa().duration;
    b = o().c;
    G(a.D.f, b + "Gfx/Misc/PictoPause.png");
    G(a.H.f, b + "Gfx/Misc/PictoPause.png");
    a.Kb || p.Qa()
};

function Fa(a, b) {
    var c = p,
    d = document.getElementById("video");
    if (d) if (d.canPlayType) d.pause(),
    d.src = a,
    d.load(),
    d.play();
    else {
        try {
            d.stop()
        } catch(j) {}
        d.data = a;
        d.play(1);
	console.log("Fa(a, b) setFullScreen:"+h);
        d.setFullScreen && d.setFullScreen(h)
    } else {
        navigator.userAgent.match(/hbbtv/i) || (d = document.createElement("video"));
        var t = function(a) {
            a.id = "video";
            a.width = 448;
            a.height = 252;
            a.style.width = "448px";
            a.style.height = "252px";
            document.getElementById("videocontainer").appendChild(a)
        },
        A;
        d && d.canPlayType && d.canPlayType("video/mp4") && !navigator.userAgent.match(/technisat|LGE|philips|nettv/i) ? (m.ub("HTML5"), A = f) : (m.ub("CE-HTML"), A = h);
        if (A) d.src = a,
        d.type = "video/mp4",
        t(d),
        d.load(),
        d.play(),
        d.addEventListener("canplaythrough",
        function() {
            Ha(p)
        },
        h),
        d.addEventListener("canplay", i(), h),
        d.addEventListener("ended",
        function() {
            Da(p)
        },
        h),
        d.addEventListener("error",
        function() {
            Ca(p)
        },
        h),
        d.addEventListener("pause",
        function() {
            Ba(p)
        },
        h),
        d.addEventListener("pause", i(), h),
        d.addEventListener("play", i(), h),
        d.addEventListener("loadstart", i(), h),
        d.addEventListener("abort", i(), h),
        d.addEventListener("suspend", i(), h),
        d.addEventListener("emptied", i(), h),
        d.addEventListener("stalled", i(), h),
        d.addEventListener("loadedmetadata", i(), h),
        d.addEventListener("loadeddata", i(), h),
        d.addEventListener("playing",
        function() {
            Ha(p)
        },
        h),
        d.addEventListener("waiting", i(), h),
        d.addEventListener("durationchange", i(), h),
        d.addEventListener("readystatechange", i(), h),
        q.prototype.wa = function() {
            return {
                Aa: d.currentTime,
                duration: d.duration,
                ya: d.currentTime / d.duration
            }
        };
        else {
            d = document.createElement("object");
            d.type = "video/mp4";
            t(d);
            var N = function() {
                L && (clearInterval(L), L = g);
                try {
                    try {
		         console.log("N setFullScreen:"+h);
                        //d.setFullScreen && d.setFullScreen(h)
                    } catch(a) {}
                    switch (d.playState) {
                    case 0:
                        c.ib = e;
                        var b = o().c;
                        c.ga = h;
                        c.$ && p.v.g();
                        G(c.D.f, b + "Gfx/Misc/PictoPlay.png");
                        y(c.elapsedTime, 0);
                        break;
                    case 1:
                        Ha(c);
                        break;
                    case 2:
                        Ba(c);
                        break;
                    case 3:
                        E(c.t, f);
                        break;
                    case 4:
                        E(c.t, f);
                        break;
                    case 5:
                        Da(c);
                        break;
                    case 6:
                        Ca(c)
                    }
                } catch(j) {}
            };
            d.onPlayStateChange = N;
            var L = setInterval(function() {
                d.onPlayStateChange = N
            },
            500);
            d.data = a;
            d.play(1);
            q.prototype.wa = function() {
                return {
                    Aa: d.playPosition / 1E3,
                    duration: d.playTime / 1E3,
                    ya: d.playPosition / d.playTime
                }
            }
        }
    }
    m.Ob(b);
    E(p.t, f)
}
