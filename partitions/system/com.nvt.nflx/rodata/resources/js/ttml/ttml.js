nrdp.gibbon.loadScript({url: "libttml.js", async:false, secure: true, headers: {'X-Gibbon-Cache-Control': 'server, max-age=0, no-memory-cache, priority=1'}});

function main() {
    nrdp.gibbon.scene.widget = nrdp.gibbon.makeWidget({name: "scene", width: nrdp.gibbon.scene.width, layout: "h", height: nrdp.gibbon.scene.height});

    function processEvents(e) {
        var output = nrdp.js_options.output;
        if(!output)
            output = nrdp.gibbon.queryParams.output;
        if(output) {
            var serial_number = 0;
            var output_dir = output;
            if(output_dir[0] != '/')
                output_dir = nrdp.cwd + "/" + output_dir;
            nrdp.log.info("Writing: " + output_dir);
            nrdp.gibbon.qa.remove(output_dir + "/");
            nrdp.gibbon.qa.mkdir(output_dir + "/");

            var manifest = output_dir + "/manifest.xml";
            nrdp.gibbon.qa.writeFile(manifest, '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<tt xmlns="http://www.w3.org/ns/ttml" xmlns:ns2="http://www.w3.org/ns/ttml#styling" xmlns:ns3="http://www.netflix.com/ns/ttml#metadata" xmlns:ns4="http://www.w3.org/ns/ttml#parameter" xml:lang="' + nrdp.gibbon.defaultLocale + '" ns4:timeBase="media" ns2:extent="' + nrdp.gibbon.scene.width + 'px ' + nrdp.gibbon.scene.height + 'px">\n  <body>\n', "w");

            function stringTime(time) {
                if(typeof time === "number") {
                    function piece(num, l) {
                        var p = String(time % num);
                        time = parseInt(time / num);
                        while(p.length < l)
                            p = "0" + p;
                        return p;
                    }
                    var str = "." + piece(1000, 3); //ms
                    str = ":" + piece(60, 2) + str; //seconds
                    str = ":" + piece(60, 2) + str; //minutes
                    str = piece(60, 2) + str; //hours
                    return str;
                }
                return time;
            }

            function writeNextSubtitle() {
                var event = e.events.shift();
                if(!event) {
                    nrdp.gibbon.qa.writeFile(manifest, '  </body>\n</tt>\n', "a");
                    nrdp.exit();
                    return;
                }

                nrdp.gibbon.qa.writeFile(manifest, '\n    <!-- event: ' + event.id + ': @' + stringTime(event.begin) + ' for ' + stringTime(event.end-event.begin) + ' -->\n', "a");
                e.showEvent(event);
                nrdp.gibbon.sync();
                var subtitle_count = event.subtitles.length;

                function writeSubtitle(subtitle) {
                    //nrdp.log.info("Writing[" + subtitle_count + "]: " + subtitle.text.contents + " [" + subtitle.png + "] (" + subtitle.globalX + "," + subtitle.globalY + "+" + subtitle.globalWidth + "x" + subtitle.globalHeight + ")");
                    nrdp.gibbon.qa.writeFile(manifest, '    <div ns2:extent="' + subtitle.globalWidth + 'px ' + subtitle.globalHeight + 'px" ns2:origin="' + subtitle.globalX + 'px ' + subtitle.globalY + 'px" begin="' + stringTime(event.begin) + '" end="' + stringTime(event.end) + '"> <!-- region: ' + subtitle.region.id + ' -->\n      <image src="' + subtitle.png + '"/> <!-- subtitle: ' + subtitle.id + ' -->\n    </div>\n', "a");
                    if(!--subtitle_count)
                        writeNextSubtitle();
                }

                event.subtitles.forEach(function(subtitle) {
                    if(subtitle.png) {
                        nrdp.gibbon.setTimeout(function() {
                            writeSubtitle(subtitle, event.begin, event.end);
                        }, 100);
                    } else if(nrdp.js_options.fullscreen) {
                        nrdp.gibbon.scene.widget.grab(function(grab) {
                            ++serial_number;
                            subtitle.png = serial_number + ".png";
                            nrdp.gibbon.qa.writeFile(output_dir + "/" + subtitle.png, grab.png);
                            e.hideEvent(event);
                            writeSubtitle(subtitle);
                        }, {});
                    } else {
                        subtitle.widget.text.info(function(textInfo) {
                            var grabArgs = {
                                rect: textInfo.layout.bounds
                            };
                            subtitle.widget.grab(function(grab) {
                                if(grab) {
                                    ++serial_number;
                                    subtitle.png = serial_number + ".png";
                                    subtitle.globalX = grab.globalX+grabArgs.rect.x;
                                    subtitle.globalY = grab.globalY+grabArgs.rect.y;
                                    subtitle.globalWidth = grabArgs.rect.width;
                                    subtitle.globalHeight = grabArgs.rect.height;
                                    nrdp.gibbon.qa.writeFile(output_dir + "/" + subtitle.png, grab.png);
                                    e.hideEvent(event);
                                    writeSubtitle(subtitle);
                                } else {
                                    nrdp.log.error("Unable to grab: " + event.id);
                                    e.hideEvent(event);
                                    if(!--subtitle_count)
                                        writeNextSubtitle();
                                }
                            }, grabArgs);
                        });
                    }
                });
            }
            writeNextSubtitle();
        } else if(nrdp.js_options.step) {
            var offset = 0;
            var jump_time = ttmlParseTime(nrdp.js_options.step);
            if(jump_time) {
                while(offset < e.events.length) {
                    if(e.events[offset].begin > jump_time)
                        break;
                    ++offset;
                }
            } else {
                var jump_frame = parseInt(nrdp.js_options.step-1);
                if(jump_frame)
                    offset = jump_frame;
            }

            function setCurrentEvent(o) {
                var event = e.events[o];
                nrdp.log.info("Subtitle(" + event.id + "): " + offset + "/" + e.events.length + " @" + event.begin + ":" + (event.end-event.begin));
                e.hideEvent(e.events[offset]);
                e.showEvent(event);
                offset = o;
            }
            nrdp.gibbon.addEventListener('key', function(event) {
                if(event.data.type == "press") {
                    if(event.data.uiEvent == "key.left") {
                        if(offset > 0)
                            setCurrentEvent(offset-1);
                        return;
                    } else if(event.data.uiEvent == "key.right") {
                        if(offset < e.events.length-1)
                            setCurrentEvent(offset+1);
                        return;
                    }
                }
                //nrdp.log.info(JSON.stringify(event.data));
            });
            setCurrentEvent(offset);
        } else {
            var base = 0;
            var counter = 0;
            e.events.forEach(function(event) {
                var offset = counter++;
                nrdp.gibbon.setTimeout(function() {
                    nrdp.log.info("Show(" + event.id + "): " + offset + "/" + e.events.length + " @" + event.begin + ":" + (event.end-event.begin));
                    e.showEvent(event);
                }, event.begin-base);
                nrdp.gibbon.setTimeout(function() {
                    nrdp.log.info("Hide(" + event.id + "): " + offset + "/" + e.events.length + " @" + event.end);
                    e.hideEvent(event);
                }, event.end-base);
                last = event;
            });
        }
    }

    if(nrdp.js_options.play) {
        nrdp.gibbon.loadScript({url: "http://localcontrol.netflix.com/js/quickplayer/libquickplayer.js"}, function() {
            playVideo({ movieId: String(nrdp.js_options.play), trackingId: "13462260" }, function(player) {
                nrdp.log.info("Playing: " + nrdp.js_options.play);
                player.tracksListChanged.subscribe(function(e) {
                    var index = nrdp.js_options.subtitle;
                    if(index === undefined || index > e.subtitleTrackList[index].length)
                        index = e.currentSubtitleTrackIndex;
                    nrdp.log.info("Subtitles: " + JSON.stringify(e.subtitleTrackList));
                    var sdh = e.subtitleTrackList[index].ttDownloadables["dfxp-ls-sdh"];
                    var url = sdh.downloadUrls["20"];
                    nrdp.log.info("Selected:" + index + ": " + url);
                    ttmlLoad(url, nrdp.gibbon.scene.widget, processEvents);
                });
            });
        });
    } else {
        var input = nrdp.js_options.input;
        if(typeof input != "string") {
            input = nrdp.gibbon.queryParams.input;
            if(typeof input != "string") {
                nrdp.log.info("No subtitle specified!");
                nrdp.exit(1);
                return;
            }
        }
        if(input.indexOf("://") == -1) {
            var full_input = "file://";
            if(input[0] != '/')
                full_input += nrdp.cwd;
            full_input += input;
            input = full_input;
        }
        ttmlLoad(input, nrdp.gibbon.scene.widget, processEvents);
    }
}
nrdp.gibbon.init(main);
