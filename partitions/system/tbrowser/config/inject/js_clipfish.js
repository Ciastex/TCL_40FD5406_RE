Util.println("---run js_clikfishs.js-----");


var Clipfish; (function(b, c) {
    var d = "",
    a = {
        "000": function() {
            c.Debug.getInstance().enabled ? c.Debug.getInstance().hide() : Config.debug && c.Debug.getInstance().show()
        },
        1973 : function() {}
    },
    e = function(e) {
        function h(a) {
            e.call(this, a)
        }
        c.__extends(h, e);
        h.prototype.prepare = function() {
            e.prototype.prepare.call(this);
            var g = this.hbbtv.getKeySet();
            this.hbbtv.registerKeyMask(g.RED + g.GREEN + g.YELLOW + g.BLUE + g.NAVIGATION + g.VCR + g.NUMERIC + g.ALPHA);
            c.IVW.getInstance().setBasePath(Config.ivwBase);
            this.events.add("keyup",
            function(b) {
                switch (b) {
                case "RED":
                    this.closeApp();
                    break;
                case "GREEN":
                case "YELLOW":
                case "BLUE":
                    break;
                default:
                    var c = !1,
                    e;
                    for (e in a) if ( - 1 < e.indexOf(d + b)) {
                        c = !0;
                        break
                    }
                    c ? (d += b, e === d && (a[e].call(this), d = "")) : d = ""
                }
            });
            this.launcherView = new b.LauncherView
        };
        h.prototype.ready = function() {
            e.prototype.ready.call(this);
            this.render(this.launcherView);
            this.launcherView.show()
        };
        h.prototype.isLG = function() {
            switch (this.getReturnParameter()) {
            case "":
            case "launcher_lg":
                return ! 0;
            default:
                return ! 1
            }
        };
        h.prototype.isNetrange = function() {
            switch (this.getReturnParameter()) {
            case "netrange":
                return ! 0;
            default:
                return ! 1
            }
        };
        h.prototype.getReturnParameter = function() {
            var a = this.getUrlParameter("return");
            a || (a = this.getUrlParameter("returnapp"));
            return a
        };
        h.prototype.getCurrentStation = function() {
            switch (this.getReturnParameter()) {
            case "redbutton_rtl":
            case "redbutton_rtl_at":
            case "redbutton_rtl_ch":
            case "portal_rtl":
                return "rtl";
            case "redbutton_vox":
            case "redbutton_vox_at":
            case "redbutton_vox_ch":
                return "rtl";
            case "redbutton_rtl":
            case "redbutton_rtl_at":
            case "redbutton_rtl_ch":
            case "portal_vox":
                return "vox";
            case "rtlnitro":
                return "nitro";
            default:
                return ! 1
            }
        };
        h.prototype.closeApp = function() {
            var a = this.getReturnParameter();
            switch (a) {
            case "redbutton_rtl":
            case "redbutton_rtl_at":
            case "redbutton_rtl_ch":
            case "redbutton_vox":
            case "redbutton_vox_at":
            case "redbutton_vox_ch":
            case "rtlnitro":
            case "portal_rtl":
            case "portal_vox":
                this.switchApp(Config.returnapp[a]);
                break;
            case "netrange":
                this.destroy()
            }
        };
        h.prototype.switchApp = function(a) {
            if (this.isLG()) {
				 try {
                    if ((b = this.hbbtv.getApp()) && b.createApplication(a.xmlUrl, !1)) return ! 0
                } catch(c) {}
                a.httpUrl && (document.location.href = a.httpUrl)
            } else if (this.isNetrange()) {
                try {
                    if ((b = this.hbbtv.getApp()) && b.createApplication(a.xmlUrl, !1)) return ! 0
                } catch(c) {}
                a.httpUrl && (document.location.href = a.httpUrl)
            } else this.exit(a)
        };
        return h
    } (c.ApplicationHBBTV);
    b.Application = e
})(Clipfish || (Clipfish = {}), RTLiTV); 