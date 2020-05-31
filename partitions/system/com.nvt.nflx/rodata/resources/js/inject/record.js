/*global nrdp, GibbonSyncObject*/

/* Record: --inject-js record
 * Play:   --inject-js record -J play
 * Play:   --inject-js record -J play=../file.foobar
 */

var _recordMono;
var _recordSyncObjects;
var _recordURL = "http://localcontrol.netflix.com/js/inject/record.js";
function _recordStart() {
    if(_recordMono !== undefined)
        return;
    _recordMono = nrdp.mono();

    var global = this;

    var _recordFile = nrdp.options.write_data_path + "/record.log";

    if(nrdp.js_options.play) {
        nrdp.gibbon._runConsole("/set debug debugWidgetProperties=true");
        if(nrdp.gibbon.location != _recordURL) {
            nrdp.gibbon.location = _recordURL;
            return;
        } else if(_recordSyncObjects) {
            return;
        }
        _recordSyncObjects = {};
        var url = "file://" + _recordFile;
        if(typeof nrdp.js_options.play == "string") {
            if(nrdp.js_options.play.indexOf("://") == -1) {
                url = "file://";
                if(nrdp.js_options.play[0] != '/')
                    url += nrdp.cwd;
                url += nrdp.js_options.play;
            } else {
                url = nrdp.js_options.play;
            }
        }
        nrdp.log.warn("RecordPlayback: " + url);

        var result;
        var frame = 1;
        var step;
        if(nrdp.js_options.step === true)
            step = 0;
        else if(nrdp.js_options.step === false)
            step = undefined;
        else
            step = nrdp.js_options.step;
        nrdp.gibbon.load({url: url}, function(event) {
            if(event.statusCode != 200) {
                nrdp.log.error("Unable to load: " + JSON.stringify(event));
                return;
            }

            var offset = 0;
            var data = JSON.parse("[" + event.data + "]", function(key, value) {
                if(!(value instanceof Array) || value.length != 2 || typeof value[0] != "string" || value[0].lastIndexOf("_gibbon_record_", 0) != 0)
                    return value;
                function decodeArrayBuffer()
                {
                    var ret = new ArrayBuffer(value[1].length);
                    var view = new Uint8Array(ret);
                    for(var i=0; i<value[1].length; ++i)
                        view[i] = value[1][i];
                    return ret;
                }
                var type = value[0].substr(15);
                if(type == "ArrayBuffer")
                    return decodeArrayBuffer();
                return new global[type](decodeArrayBuffer());
            });
            //nrdp.log.error("Parsed: " + event.data.length + " " + data.length);

            function next() {
                if(offset < data.length-1)
                    return data[offset++];
                return undefined;
            }
            function processCommand(command) {
                try {
                    switch(command.name) {
                    case "event_begin":
                        nrdp.gibbon.beginPendingSync();
                        break;
                    case "event_end":
                        nrdp.gibbon.endPendingSync();
                        break;
                    case "GibbonSyncObject_create":
                        var widget;
                        switch(command.args.params[1]) {
                        case nrdp.gibbon._sync_Widget:
                            _recordSyncObjects[command.args.id] = new nrdp.gibbon.Widget(command.args.params[0]);
                            break;
                        case nrdp.gibbon._sync_Text:
                            widget = _recordSyncObjects[command.args.params[0] + "_" + nrdp.gibbon._sync_Widget];
                            _recordSyncObjects[command.args.id] = new nrdp.gibbon.Text(widget);
                            break;
                        case nrdp.gibbon._sync_Image:
                            widget = _recordSyncObjects[command.args.params[0] + "_" + nrdp.gibbon._sync_Widget];
                            _recordSyncObjects[command.args.id] = new nrdp.gibbon.Image(widget, command.args.params[3], command.args.params[2]);
                            break;
                        case nrdp.gibbon._sync_Effect:
                            widget = _recordSyncObjects[command.args.params[0] + "_" + nrdp.gibbon._sync_Widget];
                            _recordSyncObjects[command.args.id] = new nrdp.gibbon.Effect(widget, command.args.params[3], command.args.params[2]);
                            break;
                        }
                        break;
                    case "GibbonSyncObject_setSyncProperty":
                        _recordSyncObjects[command.args.id]._object.setSyncProperty(command.args.params[0], command.args.params[1], command.args.params[2]);
                        break;
                    case "GibbonSyncObject_destroy":
                        delete _recordSyncObjects[command.args.id];
                        break;
                    default:
                        nrdp._backchannel[command.name.substr(12)].apply(nrdp._backchannel, command.args);
                        break;
                    }
                } catch(e) {
                    nrdp.log.error("Got an exception: " + e.toString());
                }
            }
            function processNext() {
                if(step === 0)
                    return;
                var command = next();
                if(command == undefined)
                    return;

                if(1 && command.name == "event_begin") {
                    while(true) {
                        var subcommand = next();
                        if(subcommand == undefined)
                            return;
                        if(subcommand.name == "event_end")
                            break;
                        processCommand(subcommand);
                    }
                } else {
                    processCommand(command);
                }
                if(step === undefined)
                    nrdp.log.warn("RecordFrame(" + frame + "): " + offset + "/" + data.length + ": " + nrdp.describeEvent(command.args));
                else
                    nrdp.log.warn("RecordStep(" + frame + "): " + offset + "/" + data.length + " (" + step + "): " + nrdp.describeEvent(command.args));
                if(offset < data.length) {
                    if(step)
                        --step;
                    nrdp.gibbon.setTimeout(processNext, step ? 0 : data[offset].time-data[offset-1].time);
                } else {
                    step = 0;
                    nrdp.log.warn("RecordPlaybackDone");
                }
                ++frame;
            }
            function pause(s) {
                if(s === undefined)
                    s = (step !== 0);
                if(s === true) {
                    nrdp.log.warn("RecordPaused");
                    step = 0;
                } else {
                    if(s === false) {
                        nrdp.log.warn("RecordRun");
                        step = undefined;
                    } else {
                        nrdp.log.warn("RecordStep: " + s);
                        step = s;
                    }
                    processNext();
                }
            }

            var accumulator = "";
            nrdp.gibbon.addEventListener('key', function(event) {
                if(event.data.type == "press") {
                    if(!isNaN(parseInt(event.data.text))) {
                        accumulator = accumulator + "" + event.data.text;
                        return;
                    }
                    if(event.data.uiEvent == "key.pause") {
                        pause(true);
                    } else if(event.data.uiEvent == "key.play") {
                        pause(false);
                    } else if(event.data.uiEvent == "key.right") {
                        step = 1;
                        processNext();
                    } else if(event.data.uiEvent == "key.enter") {
                        if(step === 0) {
                            pause(accumulator.length ? parseInt(accumulator) : false);
                        } else {
                            pause(true);
                        }
                    }
                    accumulator = "";
                }
            });
            if(step !== 0)
                nrdp.gibbon.setTimeout(processNext, data[offset].time);
        });
    } else { //record mode
        nrdp.log.warn("Recording: " + _recordFile);
        var gibbonOnly = nrdp.js_options.gibbonOnly;
        if(gibbonOnly)
            nrdp.log.warn("  + RecordGibbonOnly");

        var jsonCount = 0;
        var jsonIndent = 0;

        var _record = 0;

        function encodeTransform(key, value)
        {
            function arrayData(view) {
                var ret = [];
                var len = view.byteLength;
                for(var i=0; i<len; ++i)
                    ret.push(view[i]);
                return ret;
            }

            switch (true) {
            case (!(value instanceof Object)):
                break;
            case (value instanceof ArrayBuffer):
                return ["_gibbon_record_ArrayBuffer", arrayData(new Uint8Array(value)) ];
            case (value instanceof Int8Array):
                return ["_gibbon_record_Int8Array", arrayData(value) ];
            case (value instanceof Uint8Array):
                return ["_gibbon_record_Uint8Array", arrayData(value) ];
            case (value instanceof Uint8ClampedArray):
                return ["_gibbon_record_Uint8ClampedArray", arrayData(value) ];
            case (value instanceof Int16Array):
                return ["_gibbon_record_Int16Array", arrayData(new Uint8Array(value.buffer, value.byteOffset, value.byteLength)) ];
            case (value instanceof DataView):
                return ["_gibbon_record_DataView", arrayData(new Uint8Array(value.buffer, value.byteOffset, value.byteLength)) ];
            case (value instanceof Uint16Array):
                return ["_gibbon_record_Uint16Array", arrayData(new Uint8Array(value.buffer, value.byteOffset, value.byteLength)) ];
            case (value instanceof Int32Array):
                return ["_gibbon_record_Int32Array", arrayData(new Uint8Array(value.buffer, value.byteOffset, value.byteLength)) ];
            case (value instanceof Uint32Array):
                return ["_gibbon_record_Uint32Array", arrayData(new Uint8Array(value.buffer, value.byteOffset, value.byteLength)) ];
            case (value instanceof Float32Array):
                return ["_gibbon_record_Float32Array", arrayData(new Uint8Array(value.buffer, value.byteOffset, value.byteLength)) ];
            case (value instanceof Float64Array):
                return ["_gibbon_record_Float64Array", arrayData(new Uint8Array(value.buffer, value.byteOffset, value.byteLength)) ];
            }
            return value;
        }

        function toJSON(object) {
            try {
                return JSON.stringify(object, encodeTransform);
            } catch(e) { //try again with decycling
                var seen = [];
                function decycleEncodeTransform(key, value) {
                    if(value instanceof Object) {
                        if(seen.indexOf(value) != -1)
                            return '__cycle__';
                        seen.push(value);
                    }
                    return encodeTransform(key, value);
                }
                try {
                    return JSON.stringify(object, decycleEncodeTransform);
                } catch(e) {
                    nrdp.log.error("Record exception: " + e.toString());
                }
            }
            return undefined;
        }

        function _recordAppend(data)
        {
            if(!_record) {
                ++_record;
                data.time = nrdp.mono() - _recordMono;
                var json = "";
                var mode = "w";
                if(jsonCount++) {
                    json += ",\n";
                    mode = "a";
                }
                for(var i = 0; i < jsonIndent; ++i)
                    json += "  ";
                json += toJSON(data);
                nrdp.gibbon.qa.writeFile(_recordFile, json, mode);
                --_record;
            }
        }

        var _record_old_GibbonSyncObject = GibbonSyncObject;
        GibbonSyncObject = function(thiz, id, type, arg4, arg5) {
            this.syncObject = new _record_old_GibbonSyncObject(thiz, id, type, arg4, arg5);
            if(type == nrdp.gibbon._sync_Image || type == nrdp.gibbon._sync_Effect)
                this.id = arg4 + "_" + type;
            else
                this.id = id + "_" + type;
            _recordAppend({name: "GibbonSyncObject_create", args: { id: this.id, params: [ id, type, arg4, arg5 ]}});
        };
        GibbonSyncObject.prototype = {
            constructor: GibbonSyncObject,
            setSyncProperty: function(key, value, append) {
                _recordAppend({name: "GibbonSyncObject_setSyncProperty", args: { id: this.id, params: [ key, value, append ] }});
                this.syncObject.setSyncProperty(key, value, append);
            }
        };
        nrdp.gibbon.addEventListener("syncObjectDestroy", function(event) {
            var id;
            if(event.data.type == nrdp.gibbon._sync_Image || event.data.type == nrdp.gibbon._sync_Effect)
                id = event.data.id + "_" + event.data.type;
            else
                id = event.data.widget + "_" + event.data.type;
            _recordAppend({name: "GibbonSyncObject_destroy", args: { id: id }});
        });
        var _record_old_GibbonSyncEvent = nrdp._sendSyncdEvent;
        nrdp._sendSyncdEvent = function(fn, that, event) {
            if(event && event.object instanceof Object) { //avoid cycle
                var event_object = event.object;
                event.object = event.object._path || "__unknown__";
                _recordAppend({name: "event_begin", args: event });
                event.object = event_object;
            } else {
                _recordAppend({name: "event_begin", args: event });
            }
            ++jsonIndent;
            _record_old_GibbonSyncEvent.apply(_record_old_GibbonSyncEvent, arguments);
            --jsonIndent;
            _recordAppend({name: "event_end"});
        };

        var _record_old_backchannel = nrdp._backchannel;
        nrdp._backchannel = {
            name: "GibbonRecord",
            isNative: true,
            console: function() {
                if(!gibbonOnly)
                    _recordAppend({name: "backchannel_console", args: Array.prototype.slice.call(arguments)});
                return _record_old_backchannel.console.apply(_record_old_backchannel, arguments);
            },
            setProperty: function() {
                if(!gibbonOnly || (arguments[0] && !arguments[0].indexOf("gibbon.")))
                    _recordAppend({name: "backchannel_setProperty", args: Array.prototype.slice.call(arguments)});
                return _record_old_backchannel.setProperty.apply(_record_old_backchannel, arguments);
            },
            invoke: function() {
                if(!gibbonOnly || (arguments[0] && !arguments[0].indexOf("gibbon.")))
                    _recordAppend({name: "backchannel_invoke", args: Array.prototype.slice.call(arguments)});
                return _record_old_backchannel.invoke.apply(_record_old_backchannel, arguments);
            },
            atob: function() {
                if(!gibbonOnly)
                    _recordAppend({name: "backchannel_atob", args: Array.prototype.slice.call(arguments)});
                return _record_old_backchannel.atob.apply(_record_old_backchannel, arguments);
            },
            btoa: function() {
                if(!gibbonOnly)
                    _recordAppend({name: "backchannel_btoa", args: Array.prototype.slice.call(arguments)});
                return _record_old_backchannel.btoa.apply(_record_old_backchannel, arguments);
            },
            mono: function() {
                if(!gibbonOnly)
                    _recordAppend({name: "backchannel_mono", args: Array.prototype.slice.call(arguments)});
                return _record_old_backchannel.mono.apply(_record_old_backchannel, arguments);
            },
            pmono: function() {
                if(!gibbonOnly)
                    _recordAppend({name: "backchannel_pmono", args: Array.prototype.slice.call(arguments)});
                return _record_old_backchannel.pmono.apply(_record_old_backchannel, arguments);
            },
            atoutf8: function() {
                if(!gibbonOnly)
                    _recordAppend({name: "backchannel_atoutf8", args: Array.prototype.slice.call(arguments)});
                return _record_old_backchannel.atoutf8.apply(_record_old_backchannel, arguments);
            },
            utf8toa: function() {
                if(!gibbonOnly)
                    _recordAppend({name: "backchannel_utf8toa", args: Array.prototype.slice.call(arguments)});
                return _record_old_backchannel.utf8toa.apply(_record_old_backchannel, arguments);
            },
            parseJSON: function() {
                if(!gibbonOnly)
                    _recordAppend({name: "backchannel_parseJSON", args: Array.prototype.slice.call(arguments)});
                return _record_old_backchannel.parseJSON.apply(_record_old_backchannel, arguments);
            },
            parseXML: function() {
                if(!gibbonOnly)
                    _recordAppend({name: "backchannel_parseXML", args: Array.prototype.slice.call(arguments)});
                return _record_old_backchannel.parseXML.apply(_record_old_backchannel, arguments);
            },
            compress: function() {
                if(!gibbonOnly)
                    _recordAppend({name: "backchannel_compress", args: Array.prototype.slice.call(arguments)});
                return _record_old_backchannel.compress.apply(_record_old_backchannel, arguments);
            },
            uncompress: function() {
                if(!gibbonOnly)
                    _recordAppend({name: "backchannel_uncompress", args: Array.prototype.slice.call(arguments)});
                return _record_old_backchannel.uncompress.apply(_record_old_backchannel, arguments);
            },
            random: function() {
                if(!gibbonOnly)
                    _recordAppend({name: "backchannel_random", args: Array.prototype.slice.call(arguments)});
                return _record_old_backchannel.random.apply(_record_old_backchannel, arguments);
            },
            gctag: function() {
                if(!gibbonOnly)
                    _recordAppend({name: "backchannel_gctag", args: Array.prototype.slice.call(arguments)});
                return _record_old_backchannel.gctag.apply(_record_old_backchannel, arguments);
            },
            platform: _record_old_backchannel.platform
        };
    }
}
if(nrdp.isReady) {
    _recordStart();
} else {
    nrdp.addEventListener('init', _recordStart);
    if(nrdp.gibbon.location == _recordURL)
        nrdp.init();
}
