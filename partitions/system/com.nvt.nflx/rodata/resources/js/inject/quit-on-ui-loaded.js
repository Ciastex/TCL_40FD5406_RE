// to use:
// ./netflix --inject-js quit-on-ui-loaded
// or
// ./netflix --inject-js quit-on-ui-loaded -J quit-on-ui-loaded-delay 10000 // to quit ten seconds after ui-loaded
// ./netflix --inject-js quit-on-ui-loaded -J quit-on-ui-loaded-exit-code 4  // to quit with exit code 4

/*global nrdp */
if (!nrdp.gibbon.origLoaded) {
    nrdp.gibbon.origLoaded = nrdp.gibbon.loaded;
    nrdp.gibbon.loaded = function() {
        nrdp.gibbon.origLoaded();
        var exitCode = 0;
        var delay = 0;
        if (nrdp.js_options) {
            exitCode = nrdp.js_options["quit-on-ui-loaded-exit-code"] || 0;
            delay = nrdp.js_options["quit-on-ui-loaded-delay"] || 0;
        }
        if (delay) {
            nrdp.gibbon.setTimeout(function() { nrdp.exit(exitCode); }, delay);
        } else {
            nrdp.exit(exitCode);
        }
    };
}
