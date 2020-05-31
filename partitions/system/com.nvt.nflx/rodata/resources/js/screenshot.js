
var terminal;
var _nbpdUrl;
function nbpdUrl() {
    if(!_nbpdUrl) {
    var port;
    var hostname = window.location.host;
    var h = hostname.split(":");
    hostname = h[0];
    if(h[1].length)
        port = h[1];
    else
        port = 6359;
    var query = window.location.search;
    if(query && query.length) {
        query = query.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if(decodeURIComponent(pair[0]) == "nbpd") {
            var h = decodeURIComponent(pair[1]).split(":");
            if(h[0].length)
            hostname = h[0];
            if(h[1].length)
            port = h[1];
            break;
        }
        }
    }
    _nbpdUrl = "http://" + hostname + ":" + port;
    }
    return _nbpdUrl;
}

var screenShotLast;
var screenShotPending;
function updateScreenshot() {
    if(screenShotPending) {
        if(screenShotPending == "load")
            screenShotPending = "again";
        return;
    }
    screenShotPending = "load";
    document.getElementById("screenshot").src ="/img/screenshot?" + new Date().getTime();
}
function updatedScreenshot() {
    var lastScreenShotPending = screenShotPending;
    screenShotPending = undefined;

    lastScreenShot = new Date().getTime();
    if(lastScreenShotPending == "again")
        updateScreenshot();
}

function setDebugFlags(name, value) {
    var data = {
    object: "nrdp.debugger",
    method: "enableRender",
    types: [ { name: name, value: value }]
    };
    jQuery.ajax({
    url: nbpdUrl() + "/ipc",
    type: "POST",
    contentType:"text/plain",
    dataType: "json",
    data: JSON.stringify(data)
    });
}

function turnDomKeyEventIntoGibbonKeyEvent(event) {
    $.post(nbpdUrl() + "/ipc",
           "object=nrdp.debugger&method=sendKeyEvent&type=" + (event.type == "keyup" ? "release" : "press") + "&code=" + event.which + "&key=" + event.keyIdentifier);
}
document.addEventListener("keyup", turnDomKeyEventIntoGibbonKeyEvent);
document.addEventListener("keydown", turnDomKeyEventIntoGibbonKeyEvent);

$(document).ready(function() {
    var nbpdEventSource = new EventSource(nbpdUrl() + "/eventsource?objectFilter=nrdp.debugger");
    nbpdEventSource.onmessage = function(event) {
        var data = JSON.parse(event.data);
        if(data.object == "nrdp.debugger" && data.name == "InstrumentationEvent") {
            if(data.data.instrumentation[0] == "gibbon.render")
                updateScreenshot();
        } else if(data.object == "nrdp.debugger" && data.name == "LogEvent") {
            terminal.echo(data.data.message);
        }
    };
    $.post(nbpdUrl() + "/ipc", "object=nrdp.debugger&method=enableDebug");
    $.post(nbpdUrl() + "/ipc", "object=nrdp.debugger&method=enableProfile");

    document.getElementById("screenshot").onload = updatedScreenshot;
    updateScreenshot();
});


jQuery(function($, undefined) {
    terminal = $('#console').terminal(function(command, term) {
        if (command !== '') {
            $.post(nbpdUrl() + "/ipc", "object=nrdp.debugger&method=evaluate&group=console&expression=" + command);
        } else {
            term.echo('');
        }
    }, {
        greetings: '',
        name: 'console',
        prompt: '$ '
    });
});
