/*
 * (c) 1997-2016 Netflix, Inc.  All content herein is protected by
 * U.S. copyright and other applicable intellectual property laws and
 * may not be copied without the express permission of Netflix, Inc.,
 * which reserves all rights.  Reuse of any of this content for any
 * purpose without the permission of Netflix, Inc. is strictly
 * prohibited.
 */

/*global nrdp*/

nrdp.gibbon.splash = {
    options: { scale: 1.0 },

    addEventListener: function addEventListener(evt, listener) { nrdp._addEventListener(this, evt, listener); },
    removeEventListener: function removeEventListener(evt, listener) { nrdp._removeEventListener(this, evt, listener); },

    init: function init(visible) {
        var firstPage = (nrdp.gibbon._locationCount == 1);
        var splash_queryParams = nrdp.gibbon._parseQueryParams(nrdp.gibbon._splashUrl);
        var animated = splash_queryParams["animated"];
        if(animated === undefined || parseInt(animated)) {
            animated = {
                    in: splash_queryParams["animatedIn"],
                   out: splash_queryParams["animatedOut"],
               spinner: splash_queryParams["animatedSpinner"]
            };
            animated.out = (animated.out === undefined) ? true : (parseInt(animated.out) != 0);
            animated.spinner = (animated.spinner === undefined) ? true : (parseInt(animated.spinner) != 0);
            animated.in = (animated.in === undefined) ? firstPage : (parseInt(animated.in) != 0);
            nrdp.gibbon.splash.options.animated = animated;
        }
        nrdp.gibbon.splash.options.scale = nrdp.gibbon.scene.height / 720;

        if(nrdp.gibbon._locationCount == 1)
            nrdp.log.warn("SplashOptions: " + JSON.stringify(nrdp.gibbon.splash.options));
        nrdp.gibbon.splash._update(visible);
    },
    _scaleValue: function _scaleValue(v) { return v * nrdp.gibbon.splash.options.scale; },
    _imageUrl: function _imageUrl(file) {
        return "http://localcontrol.netflix.com/img/splash/" + nrdp.gibbon.scene.height + "/" + file;
    },
    _update: function _update(visible) {
        var splashWidget;
        if(!visible) {
            splashWidget = nrdp.gibbon.splash.root;
            if(splashWidget) {
                if(nrdp.gibbon.splash.options.animated && nrdp.gibbon.splash.options.animated.out && splashWidget.c.background.visible) {
                    splashWidget.opaque = false;
                    splashWidget.color = undefined;
                    splashWidget.c.background.startAnimation("opacity", undefined, 0, 1200, "ease-in-out-quint");
                    splashWidget.c.background.addEventListener("animationFinished", function(a) {
		    if(nrdp.gibbon.scene.overlay == splashWidget && a.data.property == "opacity" && !a.data.value) {
                            nrdp.gibbon.scene.overlay = undefined;
                            nrdp._callEventListeners(nrdp.gibbon.splash, { type: "splashChanged", visible: visible });
                        }
                    });
                    if(splashWidget.c.spinner)
                        splashWidget.c.spinner.startAnimation("opacity", undefined, 0, 300, "linear");

                    splashWidget.c.logo.startAnimation("opacity", undefined, 0, 600, "ease-in-quint");
                    splashWidget.c.logo.startAnimation("scale", undefined, 1.2, 1000, "ease-in-out-quint");

                } else if(nrdp.gibbon.scene.overlay == splashWidget || !splashWidget.c.background.visible) {
                    nrdp.gibbon.scene.overlay = undefined;
                    nrdp._callEventListeners(nrdp.gibbon.splash, { type: "splashChanged", visible: visible });
                }
            } else {
                nrdp.gibbon.scene.overlay = undefined;
                nrdp._callEventListeners(nrdp.gibbon.splash, { type: "splashChanged", visible: visible });
            }
            if(nrdp.gibbon.splash.root && nrdp.gibbon.splash.root.c)
                nrdp.gibbon.splash.root.c.background.pending = 0;
            nrdp.gibbon.splash.root = undefined;
        } else if(!nrdp.gibbon.splash.root) {
            if(nrdp.gibbon.scene.root && nrdp.gibbon.scene.root.visible)
                return;

            splashWidget = nrdp.gibbon.splash.root = nrdp.gibbon.makeWidget();
            splashWidget.name = "SplashWidget";
            splashWidget.cache = false;
            splashWidget.color = "#050505";
            splashWidget.opaque = true;
            splashWidget.x = nrdp.gibbon.splash._scaleValue(0);
            splashWidget.y = nrdp.gibbon.splash._scaleValue(0);
            splashWidget.width = nrdp.gibbon.splash._scaleValue(1280);
            splashWidget.height = nrdp.gibbon.splash._scaleValue(720);
            splashWidget.c = {};

            var background = splashWidget.c.background = nrdp.gibbon.makeWidget();
            background.pending = 0;
            background.visible = false;
            background.parent = splashWidget;
            background.name = "SplashWidget::Background";
            background.cache = false;
            background.color = "#050505";
            background.x = nrdp.gibbon.splash._scaleValue(0);
            background.y = nrdp.gibbon.splash._scaleValue(0);
            background.width = nrdp.gibbon.splash._scaleValue(1280);
            background.height = nrdp.gibbon.splash._scaleValue(720);
            background.addPending = function(cb) {
                ++background.pending;
                return function(e) {
                    if(cb)
                        cb(e);
                    if(nrdp.gibbon.splash.root && !--background.pending) {
                        nrdp.gibbon.scene.overlay = splashWidget;
                        background.visible = true;
                        if(nrdp.gibbon.splash.options.animated && nrdp.gibbon.splash.options.animated.in) {
                            if(!nrdp.gibbon.capabilities.splash.device || nrdp.gibbon._locationCount != 1)
                                background.startAnimation("opacity", 0, 1, 500, "ease-in-quint");
                            if(spinner)
                                spinner.startAnimation("opacity", 0, 1, 2000, "ease-in-quint");
                        }
                        nrdp._callEventListeners(nrdp.gibbon.splash, { type: "splashChanged", visible: visible });
                    }
                };
            };

            var logo = splashWidget.c.logo = nrdp.gibbon.makeWidget();
            logo.parent = background;
            logo.name = "SplashWidget::Logo";
            logo.cache = false;
            logo.smoothScale = true;
            logo.transformOriginX = nrdp.gibbon.splash._scaleValue(200);
            logo.transformOriginY = nrdp.gibbon.splash._scaleValue(54);
            logo.x = nrdp.gibbon.splash._scaleValue(440);
            logo.y = nrdp.gibbon.splash._scaleValue(306);
            logo.width = nrdp.gibbon.splash._scaleValue(400);
            logo.height = nrdp.gibbon.splash._scaleValue(108);
            logo.image.halign = logo.image.valign = "center stretch";
            logo.image.url = nrdp.gibbon.splash._imageUrl("Netflix_Logo_Splash.png");
            logo.image.addEventListener("imageLoaded", background.addPending());

            if(nrdp.gibbon.splash.options.animated && nrdp.gibbon.splash.options.animated.spinner) {
                var spinner = splashWidget.c.spinner = nrdp.gibbon.makeWidget();
                spinner.parent = background;
                spinner.name = "SplashWidget::Spinner";
                spinner.cache = false;
		spinner.smoothScale = true;
                spinner.x = nrdp.gibbon.splash._scaleValue(616);
                spinner.y = nrdp.gibbon.splash._scaleValue(585);
                spinner.width = nrdp.gibbon.splash._scaleValue(48);
                spinner.height = nrdp.gibbon.splash._scaleValue(48);
		spinner.image.halign = spinner.image.valign = "center stretch";
                spinner.image.url = nrdp.gibbon.splash._imageUrl("Spinner_Splash.sng");
                spinner.image.addEventListener("imageLoaded", background.addPending());
            }
        }
    }
};
nrdp.addEventListener("init", function() { nrdp.gibbon.splash.init(true); });
nrdp.gibbon.scene.addEventListener("rootChanged", function() {
    nrdp.gibbon.splash._update(!nrdp.gibbon.scene.root || !nrdp.gibbon.scene.root.visible);
});
nrdp.isReady ? nrdp.gibbon.splash.init(true) : nrdp.init();
