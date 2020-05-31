// to use:
// ./netflix --inject-js randomtimeouts
// or
// ./netflix --inject-js randomtimeouts -J randomtimeouts-delay=10000 // start messing with timeouts after 10 seconds
// ./netflix --inject-js randomtimeouts -J randomtimeouts-min=100 -J randomtimeouts-max=200 // set timeouts in the range 100-200 ms

/*global nrdp */
if (!nrdp.gibbon.orig_prepareNetworkRequest) {
    nrdp.gibbon.orig_prepareNetworkRequest = nrdp.gibbon._prepareNetworkRequest;
    var start;
    var min;
    var max;
    nrdp.gibbon._prepareNetworkRequest = function(object) {
        if (!min) {
            if (nrdp.js_options instanceof Object) {
                if (nrdp.js_options.hasOwnProperty("randomtimeouts-delay"))
                    start = nrdp.mono() + parseInt(nrdp.js_options["randomtimeouts-delay"]);
                min = nrdp.js_options["randomtimeouts-min"] || 20;
                max = nrdp.js_options["randomtimeouts-max"] || 1000;
            } else {
                return nrdp.gibbon.orig_prepareNetworkRequest(object);
            }
        }
        if (object === undefined)
            return object;

        if (start) {
            var now = nrdp.mono();
            if (now < start) {
                return nrdp.gibbon.orig_prepareNetworkRequest(object);
            }
            start = undefined;
        }
        if (!(object instanceof Object)) {
            object = { url: object };
        }
        if (!object.timeout) {
            object.timeout = Math.floor(Math.random() * (max - min + 1) + min);
            nrdp.log.info("setting timeout for " + object.url + " to " + object.timeout);
        }
        return nrdp.gibbon.orig_prepareNetworkRequest(object);
    };
}
