function ttmlParseTime(time) {
    var result = 0;
    var caps = /([0-9]+):([0-9][0-9]):([0-9][0-9]):([0-9][0-9])/.exec(time);
    if(caps) {
        result += parseInt(caps[1]) * 60 * 60 * 1000;
        result += parseInt(caps[2]) * 60 * 1000;
        result += parseInt(caps[3]) * 1000;
        result += parseInt(caps[4]);
    } else {
        caps = /([0-9]+):([0-9][0-9]):([0-9][0-9]).([0-9][0-9][0-9])/.exec(time);
        if(caps) {
            result += parseInt(caps[1]) * 60 * 60 * 1000;
            result += parseInt(caps[2]) * 60 * 1000;
            result += parseInt(caps[3]) * 1000;
            result += parseInt(caps[4]);
        } else {
            caps = /([0-9]+).([0-9]+)s/.exec(time);
            if(caps) {
                result += parseInt(caps[1]) * 1000;
                result += parseInt(caps[2]);
            } else {
                caps = /([0-9]+)t/.exec(time);
                if(caps) {
                    result = parseInt(caps[1]) / 10000;
                }
            }
        }
    }
    return result;
}

function ttmlLoad(input, scene, processEvents)
{
    var xml;
    var showDebug = nrdp.js_options.debug;
    nrdp.gibbon.load({url: input, secure: true}, function(response) {
        if(response.statusCode != 200) {
            nrdp.log.error("Unable to load: " + JSON.stringify(response));
            return;
        }

        var familyOverride = {
            "ar_Arial": "Arabic_Naskh",
            "fa-ir_Arial": "Arabic_Nastliq"
        };

        function makeRegion() {
            return {
                position: "center",
                displayAlign: "before"
            };
        }

        var styling = {
            default_region: "__default__",
            default_div_style: undefined,
            styles: {},
            regions: { "__default__": makeRegion() }
        };
        styling.regions[styling.default_region].id = styling.default_region;
        styling.default_style = {
            "id": "__default__",
            "opacity": 1.0,
            "displayAlign": "before",
            "direction": "ltr",
            "extent": undefined,
            "origin": undefined,
            "unicodeBidi": "normal",
            "backgroundColor": "transparent",
            "lineHeight": undefined,
            "textDecoration": "none",
            "textOutline": "none",
            "textShadow": "none",
            "showBackground": "always",
            "textAlign": "center",
            "fontFamily": "Arial",
            "fontWeight": "normal",
            "fontShear": "0%",
            "fontSize": "32px",
            "color": "yellow"
        };

        function copyStyle(style, attr) {
            for(var key in attr) {
                var value = attr[key];
                if(key == "writingMode") {
                    key = "direction";
                    if(value == "lrtb")
                        value = "ltr";
                    else if(value == "rltb")
                        value = "rtl";
                    else
                        nrdp.log.error("Unhandled writing mode: " + value);
                } else if(key == "fontStyle") {
                    if(value == "italic") {
                        key = "fontShear";
                        value = "16%";
                    } else if(value == "bold") {
                        key = "fontWeight";
                        value = "bold";
                    }
                }
                //nrdp.log.error("SetStyle: " + key + " " + value);
                if(styling.default_style.hasOwnProperty(key))
                    style[key] = value;
            }
        }

        function makeStyle(attr) {
            var result = {};
            if(attr)
                copyStyle(result, attr);
            return result;
        }

        function resolveAttr(attr, styles) {
            var value;
            for(var i = styles.length-1; !value && i >= 0; --i)
                value = styles[i][attr];
            if(typeof value == "string")
                value = value.trim();
            return value;
        }
        function resolveMetric(metric, container, direction) {
            if(!direction)
                direction = "width";
            if(metric !== undefined) {
                if(metric.substr(metric.length-2) == "vh") {
                    return (container.height / 100) * parseFloat(metric.substr(0, metric.length-2));
                } else if(metric.substr(metric.length-2) == "vw") {
                    return (container.width / 100) * parseFloat(metric.substr(0, metric.length-2));
                } else if(metric.substr(metric.length-1) == "%") {
                    return (container[direction] / 100) * parseFloat(metric.substr(0, metric.length-1));
                } else if(metric.substr(metric.length-2) == "em") {
                    return parseFloat(metric.substr(0, metric.length-2)) * resolveMetric(styling.default_style.fontSize, container);
                } else if(metric.substr(metric.length-2) == "px") {
                    return parseFloat(metric.substr(0, metric.length-2));
                }
            }
            return undefined;
        }
        function escapeXML(xml) {
            return xml.replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&apos;');
        }
        function resolveFontSize(size, container) {
            if(size && size.substr(size.length-1) == "%")
                return (resolveMetric(styling.default_style.fontSize, container) / 100) * parseFloat(size.substr(0, size.length-1));
            return resolveMetric(size, container);
        }
        function setValue(text, attr, value, styles, region, bounds) {
            //nrdp.log.info("SetValue: " + attr + " " + JSON.stringify(value));
            if(value) {
                if(attr == "textAlign") {
                    if(value == "start")
                        value = "left";
                    else if(value == "end")
                        value = "right";
                    else if(value == "center")
                        value = "center-horizontal";
                    if(text.directStyle[attr] && text.directStyle[attr] != value) {
                        nrdp.log.info(attr + " set multiple times: " + value + " vs " + text.directStyle[attr]);
                    } else {
                        if(text.displayProperties.displayAlign == "after")
                            value = "bottom " + value;
                        else
                            value = "top " + value;
                        text.directStyle[attr] = value;
                        text.align = value; //outer style
                    }
                } else if(attr == "textShadow") {
                    if(text.directStyle[attr] && text.directStyle[attr] != value) {
                        nrdp.log.info(attr + " set multiple times: " + value + " vs " + text.directStyle[attr]);
                    } else {
                        text.directStyle[attr] = value;
                        if(value == "none") {
                            text.shadow = undefined;
                        } else {
                            var args = value.split(" ");
                            var offset = resolveMetric(args[0], bounds);
                            if(args.length > 1)
                                offset += resolveMetric(args[1], bounds);
                            var color = text.color;
                            if(args.length > 2)
                                color = resolveMetric(args[2], bounds);
                            text.shadow = { offsetX: offset, offsetY: offset, outlineColor: color };
                        }
                    }
                } else if(attr == "textOutline") {
                    if(text.directStyle[attr] && text.directStyle[attr] != value) {
                        nrdp.log.info(attr + " set multiple times: " + value + " vs " + text.directStyle[attr]);
                    } else {
                        text.directStyle[attr] = value;
                        if(value == "none") {
                            text.edgeEffect = undefined;
                        } else {
                            var args = value.split(" ");
                            var width = 1;
                            if(args.length >= 2) {
                                width = resolveMetric(args[1], bounds);
                                if(args.length > 2)
                                    width += resolveMetric(args[2], bounds);
                            }
                            text.edgeEffect = { type: "outline", width: width, outlineColor: args[0] };
                        }
                    }
                } else if(attr == "textDecoration") {
                    if(text.directStyle[attr] && text.directStyle[attr] != value) {
                        if(!text.span)
                            text.span = {};
                        if(value == "underline")
                            text.span.underline = true;
                        else if(value == "none")
                            text.span.underline = false;
                    } else {
                        if(value == "underline") {
                            text.directStyle.underline = true;
                            text.underline = true;
                        } else if(value == "none") {
                            text.directStyle.underline = false;
                            text.underline = false;
                        }
                    }
                } else if(attr == "direction") {
                    if(resolveAttr("unicodeBidi", styles) == "bidiOverride") {
                        text.tags.push('bdo direction="' + value + '"');
                    } else if(text.directStyle[attr] && text.directStyle[attr] != value) {
                        if(!text.span)
                            text.span = {};
                        text.span.direction = value;
                    } else {
                        text.directStyle[attr] = value;
                        text.direction = value;
                    }
                } else if(attr == "color") {
                    if(text.directStyle[attr] && text.directStyle[attr] != value) {
                        if(!text.span)
                            text.span = {};
                        text.span.color = value;
                    } else {
                        text.directStyle[attr] = value;
                        text.color = value;
                    }
                } else if(attr == "backgroundColor") {
                    if(value == "transparent")
                        value = "#00000000";
                    if(text.directStyle[attr] && text.directStyle[attr] != value) {
                        if(!text.span)
                            text.span = {};
                        text.span.bgcolor = value;
                    } else {
                        text.directStyle[attr] = value;
                        text.backgroundColor = value;
                    }
                } else if(attr == "fontFamily") {
                    var family = familyOverride[scene.text.locale + "_" + value];
                    if(!family)
                        family = value;
                    if(text.directStyle[attr] && text.directStyle[attr] != value) {
                        if(!text.span)
                            text.span = {};
                        text.span.font_family = family;
                    } else {
                        text.directStyle[attr] = value;
                        text.family = family;
                    }
                } else if(attr == "fontWeight") {
                    if(text.directStyle[attr] && text.directStyle[attr] != value) {
                        if(!text.span)
                            text.span = {};
                        text.span.bold = value == "bold" ? "true" : "false";
                    } else {
                        text.directStyle[attr] = value;
                        text.bold = value == "bold";
                    }
                } else if(attr == "fontShear") {
                    if(text.directStyle[attr] && text.directStyle[attr] != value) {
                        if(!text.span)
                            text.span = {};
                        text.span.italic = value != "0%" ? "true" : "false";
                    } else {
                        text.directStyle[attr] = value;
                        text.italic = value != "0%";
                    }
                } else if(attr == "fontSize") {
                    value = value.split(" ");
                    if(value.length != 1)
                        nrdp.log.error("Unable to handle vertical scaling in " + attr);
                    value = resolveFontSize(value[0], bounds);
                    if(text.directStyle[attr] && text.directStyle[attr] != value) {
                        if(!text.span)
                            text.span = {};
                        text.span.size = value;
                    } else {
                        text.directStyle[attr] = value;
                        text.size = value;
                    }
                } else if(attr == "lineHeight") {
                    value = resolveMetric(value, bounds, "height");
                    if(text.directStyle[attr] && text.directStyle[attr] != value) {
                        nrdp.log.error(attr + " set multiple times: " + value + " vs " + text.directStyle[attr]);
                    } else {
                        text.directStyle[attr] = value;
                        text.lineHeight = value; //outer style
                    }
                } else if(attr == "opacity" || attr == "origin" || attr == "extent" || attr == "displayAlign" || attr == "unicodeBidi") { //nothing, handled elsewhere
                } else if(attr == "showBackground") { //not sure what I should do here
                } else {
                    nrdp.log.error("Unknown attribute: " + attr);
                    value = resolveMetric(value.split(" ")[0], bounds);
                    text.contents += ' ' + attr + '="' + value + '"';
                }
            }
        }
        function makeSpan(text, span, styles, region) {
            var tag;
            var tags = [];
            text.tags = [];
            var bounds = { width: nrdp.gibbon.scene.width, height: nrdp.gibbon.scene.height };
            // if(region.extent) {
            //     var extent = region.extent.split(" ");
            //     bounds.width = resolveMetric(extent[0], bounds);
            //     bounds.height = resolveMetric(extent[1], bounds);
            // }

            for(var property in styling.default_style) {
                if(property != "id")
                    setValue(text, property, resolveAttr(property, styles), styles, region, bounds);
            }
            if(text.span) {
                //nrdp.log.info("Span Create: " + JSON.stringify(text.span));
                text.contents += "<span ";
                for(var s in text.span)
                    text.contents += s + '="' + escapeXML(text.span[s]) + '" ';
                text.contents += ">";
            }
            for(tag = 0; tag < text.tags.length; ++tag) {
                var t = text.tags[tag];
                //nrdp.log.info(tag + ": Tag Create: " +  t);
                text.contents += "<" + t + ">";
                tags.push(t.split(' ')[0]);
            }
            if(span) {
                if(span instanceof Object)
                    makeGibbonText(text, span, styles, region);
                else
                    text.contents += escapeXML(span);
            }
            for(tag = 0; tag < tags.length; ++tag) {
                //nrdp.log.info(tag + ": Tag(" +  tags[tag] + " Done!");
                text.contents += "</" + tags[tag] + ">";
            }
            if(text.span) {
                //nrdp.log.info("Span Done!");
                text.contents += "</span>";
            }
        }
        function stylePush(style, styles) {
            if(!style)
                return 0;

            if(typeof style === "string") {
                style = styling.styles[style];
                if(!style)
                    return 0;
            }
            var pushed = 1;
            if(style.style)
                pushed += stylePush(style.style, styles);
            //nrdp.log.info("Style Push: " + JSON.stringify(style));
            styles.push(style);
            return pushed;
        }
        function makeGibbonText(text, span, styles, region) {
            if(span instanceof Object) {
                var attr = span["$attributes"];
                var children = span["$children"];
                for(var i = 0; children && i < children.length; ++i) {
                    var style_pop = 0;
                    var child = children[i];
                    if(child instanceof Object) {
                        var name = child["$name"];
                        if(name == "span") {
                            var attributes = child["$attributes"];
                            if(attributes) {
                                var style_name = attributes.style;
                                if(style_name)
                                    style_pop += stylePush(style_name, styles);
                                style_pop += stylePush(makeStyle(attributes), styles);
                            }
                            makeSpan(text, child, styles, region);
                        } else if(name == "br") {
                            text.contents += "<" + child["$name"] + "/>";
                        } else {
                            nrdp.log.error("Cannot process: " + name);
                        }
                    } else {
                        makeSpan(text, child, styles, region);
                    }
                    while(style_pop) {
                        --style_pop;
                        styles.pop();
                        //nrdp.log.info("Style Done!");
                    }
                }
            } else {
                text.contents += escapeXML(span);
            }
        }

        function makeHorizontalSection(n) {
            var w = nrdp.gibbon.makeWidget({name: n, height: nrdp.gibbon.scene.height, layout: "v", parent: scene});;
            w.top = nrdp.gibbon.makeWidget({name: "top", layout: "v", parent: w});
            nrdp.gibbon.makeWidget({name: "stretch", parent: w, layoutStretch: 90});
            w.center = nrdp.gibbon.makeWidget({name: "center", layout: "v", parent: w});
            nrdp.gibbon.makeWidget({name: "stretch", parent: w, layoutStretch: 90});
            w.bottom = nrdp.gibbon.makeWidget({name: "bottom", layout: "v", parent: w});
            scene[n] = w;
        }
        makeHorizontalSection("left");
        nrdp.gibbon.makeWidget({name: "stretch", parent: scene, layoutStretch: 90});
        makeHorizontalSection("center");
        nrdp.gibbon.makeWidget({name: "stretch", parent: scene, layoutStretch: 90});
        makeHorizontalSection("right");

        var subtitles = [];
        function parseTTML(path, xml) {
            if(path.length)
                path += ".";
            path += xml["$name"];

            var attr = xml["$attributes"];
            if(path == "tt.head.styling.style") {
                var new_style = styling.styles[attr.id];
                if(!new_style)
                    new_style = styling.styles[attr.id] = makeStyle();
                copyStyle(new_style, attr);
                return;
            } else if(path == "tt.head.styling.initial") {
                copyStyle(styling.default_style, attr);
                return;
            } else if(path == "tt.head.layout.region") {
                var new_region = styling.regions[attr.id];
                if(!new_region)
                    new_region = styling.regions[attr.id] = makeRegion();
                copyStyle(new_region, attr);
                return;
            } else if(path == "tt.body.div.p") {
                var region_id = attr["region"];
                if(!region_id)
                    region_id = styling.default_region;
                var region = styling.regions[region_id];
                var styles = [];
                var id = "subtitle_" + subtitles.length;
                stylePush(styling.default_style, styles);
                stylePush("__body__", styles); //body
                stylePush(makeStyle(attr), styles); //inline
                if(region && region.style)
                    stylePush(region.style, styles);
                if(styling.default_div_style)
                    stylePush(styling.default_div_style, styles);
                if(attr) {
                    if(attr.style)
                        stylePush(attr.style, styles);
                    if(attr.id)
                        id = attr.id;
                }

                var text = { directStyle: {}, contents: "", padding: -1, displayProperties: {}  };
                function initTextValue(property) {
                    var value = resolveAttr(property, styles);
                    if(!value && region)
                        value = region[property];
                    text.displayProperties[property] = value;
                }
                initTextValue("opacity");
                initTextValue("displayAlign");
                initTextValue("position");
                initTextValue("extent");
                initTextValue("origin");
                makeGibbonText(text, xml, styles, region);

                if(text.contents.length) {
                    var subtitle = {id: id, region: region, p: xml, text: text, begin: ttmlParseTime(xml["$attributes"].begin), end: ttmlParseTime(xml["$attributes"].end)};
                    //nrdp.log.info("Subtitle: " + JSON.stringify(subtitle));
                    subtitles.push(subtitle);
                }
                return;
            } else if(path == "tt.body.div") {
                if(attr) {
                    if(attr.style)
                        styling.default_div_style = attr.style;
                    if(attr.region)
                        styling.default_region = attr.region;
                }
            } else if(path == "tt") {
                if(attr && attr.lang && attr.lang.length)
                    scene.text.locale = attr.lang;
            } else if(path == "tt.body") {
                if(attr) {
                    var body_style = {};
                    copyStyle(body_style, attr);
                    styling.styles["__body__"] = body_style;
                    if(attr.region)
                        styling.default_region = attr.region;
                }
            }

            var children = xml["$children"];
            for(var i = 0; children && i < children.length; ++i)
                parseTTML(path, children[i]);
        }
        parseTTML("", nrdp_platform.parseXML(response.data, true)); //avoid __fixXML;

        function makeRegionWidget(subtitle) {
            var widget; // = scene[subtitle.region.id];
            if(!widget) {
                widget = scene[subtitle.region.id] = nrdp.gibbon.makeWidget({name: "container" });
                if(showDebug)
                    widget.backgroundColor = "#FF0000";
                if(subtitle.text.displayProperties.extent) {
                    var extents = subtitle.text.displayProperties.extent.split(" ");
                    widget.width = resolveMetric(extents[0], scene);
                    widget.height = resolveMetric(extents[1], scene, "height");
                }

                var padding = { };

                var positions = subtitle.text.displayProperties.position.split(" ");
                var position_offset = 0;

                var h_align = positions[position_offset++];
                if(position_offset < positions.length) {
                    var h_edge = resolveMetric(positions[position_offset], scene);
                    if(h_edge !== undefined) {
                        padding[h_align] = h_edge;
                        ++position_offset;
                    }
                }

                var v_align;
                if(position_offset < positions.length) {
                    v_align = positions[position_offset++];
                    if(position_offset < positions.length) {
                        var v_edge = resolveMetric(positions[position_offset], scene, "height");
                        if(v_edge !== undefined) {
                            padding[v_align] = v_edge;
                            ++position_offset;
                        }
                    }
                } else {
                    v_align = "center";
                }

                var displayAlign = subtitle.text.displayProperties.displayAlign;
                if(!displayAlign)
                    displayAlign = h_align;
                if(displayAlign == "before")
                    displayAlign = "top";
                if(displayAlign == "after")
                    displayAlign = "bottom";
                widget.area = nrdp.gibbon.makeWidget({name: "region:" + subtitle.region.id, layout: { layout: "h", align: displayAlign } });

                if(subtitle.text.displayProperties.origin) {
                    var origins = subtitle.text.displayProperties.origin.split(" ");
                    widget.area.parent = scene;
                    widget.area.x = resolveMetric(origins[0], scene);
                    widget.area.y = origins.length >= 2 ? resolveMetric(origins[1], scene, "height") : widget.area.x;
                } else {
                    widget.area.parent = scene[h_align][displayAlign];
                }

                widget.parent = widget.area;
                widget.padding = padding;
                widget.layout = { layout: "v", align: displayAlign };
            }
            return widget;
        }

        function makeSubtitleWidget(subtitle) {
            //nrdp.log.info("Showing: " + JSON.stringify(subtitle));
            var widget = subtitle.widget;
            if(!subtitle.widget) {
                widget = subtitle.widget = nrdp.gibbon.makeWidget({sendRenderProperties: true, name: subtitle.id});
                widget.container = widget;
                widget.opacity = subtitle.text.displayProperties.opacity;
                widget.subtitle = subtitle;
                widget.text = subtitle.text;
                widget.text.richText = true;
                widget.text.wrap = true;
                if(subtitle.region) {
                    var region = makeRegionWidget(subtitle);
                    widget.container = region;
                    widget.parent = nrdp.gibbon.makeWidget({parent: region, name: "parent"});
                    if(showDebug)
                        widget.parent.backgroundColor = { a: 127, r: 0, g: 0, b: 0 };
                    widget.width = region.width;
                }
            }
            return widget;
        }

        var events = {
            setEventVisible: function setEventVisible(event, v) {
                for(var i = 0; i < event.subtitles.length; ++i) {
                    makeSubtitleWidget(event.subtitles[i]);
                    nrdp.log.info((v ? " + Show" : " - Hide") + ": " + event.subtitles[i].id);
                    event.subtitles[i].widget.container.visible = v;
                }
            },
            showEvent: function showEvent(event) { this.setEventVisible(event, true); },
            hideEvent: function hideEvent(event) { this.setEventVisible(event, false); },
            events: []
        };
        var time = subtitles[0].begin;
        while(true) {
            var next_time = undefined;
            var event = { id: "event" + events.events.length, begin: time, subtitles: [] };
            for(var i = 0; i < subtitles.length; ++i) {
                var subtitle = subtitles[i];
                if(subtitle.begin <= time) {
                    if(subtitle.end > time) {
                        if(event.end === undefined || subtitle.end < event.end)
                            event.end = subtitle.end;
                        event.subtitles.push(subtitle);
                    }
                } else if(next_time === undefined || subtitle.begin < next_time) {
                    next_time = subtitle.begin;
                    if(next_time < event.end)
                        event.end = next_time;
                }
            }
            if(!event.subtitles.length)
                break;
            if(event.subtitles.length == 1 && event.subtitles[0].id)
                event.id = "event_" + event.subtitles[0].id;
            nrdp.log.info("Event(" + event.id + "): " + (event.begin/1000) + "s->" + (event.end/1000) + "s: " + event.subtitles.length);
            events.events.push(event);
            time = next_time === undefined ? event.end : next_time;
        }
        processEvents(events);
    });
}
