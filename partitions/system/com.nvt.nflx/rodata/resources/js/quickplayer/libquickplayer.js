var libquickplayer_js_location = nrdp.gibbon.locations;
if(libquickplayer_js_location) {
    libquickplayer_js_location = libquickplayer_js_location[libquickplayer_js_location.length-1];
} else {
    libquickplayer_js_location = nrdp.gibbon.location;
}

if(typeof nrdjs == "undefined") {
    nrdp.gibbon.loadScript({url: "https://secure.netflix.com/us/nrdjs/v2.1.6-144/nrdjs.min.js"}, function(response) {
        if (response.reason !== nrdp.gibbon.SUCCESS) {
            nrdp.log.error("FAILED TO LOAD nrdjs.js");
            nrdp.log.error(JSON.stringify(response));
        } else {
            nrdp.log.error("Loaded NRDJS: " + response.url);
        }});
}

function playVideo(video, callback) {
    function createdPlayerControl(playerControl) {
        var startMono, endMono;
        nrdp.log.error("PlayerControl created.. now starting to play");
        playerControl._media.addEventListener("updatepts", function updatepts() {
            if (!endMono) {
                endMono = nrdp.mono();
                nrdp.log.warn("XID is " + playerControl._media.xid);
                nrdp.log.warn("First PTS in " + (endMono - startMono) + " ms");
            }
        });

        /* if we hit endofstream, we're done, exit successfully */
        playerControl._media.addEventListener("endofstream", function () {
            playerControl._media.close();
        });

        /* if we get any error, assert */
        playerControl._media.addEventListener("error", function() {
            nrdp.log.fatal("Playback failed");
            nrdp.gibbon.setTimeout(nrdp.exit, 0);
        });

        playerControl._media.addEventListener("opencomplete", function opencomplete() {
            playerControl._media.removeEventListener("opencomplete", opencomplete);
            nrdp.log.warn("Open complete in " + (nrdp.mono() - startMono) + " ms");
        });

        if (video.swim > 0) {
            playerControl._media.addEventListener("updatepts", function updatepts() {
                playerControl._media.removeEventListener("updatepts", updatepts);
                var forward = true;
                function swim(skip) {
                    if (!skip && playerControl._media.state !== playerControl._media.CLOSED) {
                        nrdp.log.warn("Swimming " + (forward ? "forward" : "back"));
                        playerControl._media.swim(forward ? 18 * 60 * 1000 : 0, true, undefined, true);
                        forward = !forward;
                        nrdp.gibbon.garbageCollect(function() {
                            nrdp.log.warn("Done with garbage collection");
                        });
                    }
                    nrdp.gibbon.setTimeout(video.swim, video.swim * 1000);
                }
                swim(true);
            });
        }

        if (video.multiple > 0) {
            (function playagain() {
                playerControl._media.addEventListener("updatepts", function updatepts() {
                    playerControl._media.removeEventListener("updatepts", updatepts);
                    nrdp.gibbon.setTimeout(function() {
                        nrdp.log.warn("Closing...");
                        playerControl._media.addEventListener("statechanged", function statechanged() {
                            if (playerControl._media.state == playerControl._media.CLOSED) {
                                playerControl._media.removeEventListener("statechanged", statechanged);
                                nrdp.gibbon.setTimeout(function() {
                                    nrdp.log.warn("Closed, playing again...");
                                    startMono = nrdp.mono();
                                    endMono = null;
                                    playagain();
                                    playerControl.setMovieAndPlay({viewableId : video.movieId, trackingId: video.trackingId});
                                }, video.multiple * 1000);
                            }
                        });
                        playerControl._media.close();
                    }, video.multiple * 1000);
                });
            })();
        }
        startMono = nrdp.mono();
        playerControl.setMovieAndPlay({viewableId : video.movieId, trackingId: video.trackingId});
        if(callback)
            callback(playerControl);
    }

    function createPlayerControl() {
        var configPlaybackErrors = {
            "actionTypes": {
                "nonNetworkPlaybackError": "nonNetworkPlaybackError",
                "handleSubtitleError": "handleSubtitleError",
                "handleConnectionError": "handleConnectionError",
                "notifyGenericErrorAndCallback": "notifyGenericErrorAndCallback",
                "notifyGenericError": "notifyGenericError",
                "handleSecondaryCredentialsError": "handleSecondaryCredentialsError"
            },
            "exception": {
                "ignoreIfPlayingOrOnHeartbeat": true,
                "action": "nonNetworkPlaybackError"
            },
            "actionIds": {
                /***/
                "1": {
                    "id": -1,
                    "key": "NFErr_MC_NCCP_NonRecoverableError",
                    "actionBlock": {
                        "ignoreIfPlayingOrOnHeartbeat": true,
                        "action": "notifyGenericErrorAndCallback"
                    }
                },
                "2": {
                    "id": -2,
                    "key": "NFErr_MC_NCCP_PotentiallyRecoverableError",
                    "actionBlock": {
                        "ignoreIfPlayingOrOnHeartbeat": true,
                        "action": "nonNetworkPlaybackError"
                    }
                },
                "3": {
                    "id": -3,
                    "key": "NFErr_MC_NCCP_CustomError",
                    "actionBlock": {
                        "ignoreIfPlayingOrOnHeartbeat": false,
                        "action": "nonNetworkPlaybackError"
                    }
                },
                "4": {
                    "id": -4,
                    "key": "NFErr_MC_NCCP_RegistrationRequired",
                    "actionBlock": {
                        "ignoreIfPlayingOrOnHeartbeat": true,
                        "action": "notifyGenericErrorAndCallback"
                    }
                },
                "5": {
                    "id": -5,
                    "key": "NFErr_MC_NCCP_CTicketRenewalRequired",
                    "actionBlock": {
                        "ignoreIfPlayingOrOnHeartbeat": true,
                        "action": "notifyGenericErrorAndCallback"
                    }
                },
                "6": {
                    "id": -6,
                    "key": "NFErr_MC_NCCP_MTicketRenewalRequired",
                    "actionBlock": {
                        "ignoreIfPlayingOrOnHeartbeat": true,
                        "action": "nonNetworkPlaybackError"
                    }
                },
                "7": {
                    "id": -7,
                    "key": "NFErr_MC_NCCP_ImpossibleImpossibility",
                    "actionBlock": {
                        "ignoreIfPlayingOrOnHeartbeat": true,
                        "action": "nonNetworkPlaybackError"
                    }
                },
                "8": {
                    "id": -8,
                    "key": "NFErr_MC_NCCP_GetNewCredentials",
                    "actionBlock": {
                        "ignoreIfPlayingOrOnHeartbeat": true,
                        "action": "notifyGenericError"
                    }
                },
                "9": {
                    "id": -9,
                    "key": "NFErr_MC_NCCP_UnsupportedVersion",
                    "actionBlock": {
                        "ignoreIfPlayingOrOnHeartbeat": true,
                        "action": "notifyGenericError"
                    }
                },
                "10": {
                    "id": -10,
                    "key": "NFErr_MC_NCCP_SecondaryCredentialsRenewalRequired",
                    "actionBlock": {
                        "ignoreIfPlayingOrOnHeartbeat": true,
                        "action": "handleSecondaryCredentialsError"
                    }
                },
                "11": {
                    "id": -11,
                    "key": "NFErr_MC_NCCP_AbortPlayback",
                    "actionBlock": {
                        "ignoreIfPlayingOrOnHeartbeat": false,
                        "action": "nonNetworkPlaybackError"
                    }
                },
                "12": {
                    "id": -12,
                    "key": "NFErr_MC_NCCP_StaleCredentials",
                    "actionBlock": {
                        "ignoreIfPlayingOrOnHeartbeat": true,
                        "action": "notifyGenericErrorAndCallback"
                    }
                },
                "13": {
                    "id": -13,
                    "key": "NFErr_MC_NCCP_ResetRequired",
                    "actionBlock": {
                        "ignoreIfPlayingOrOnHeartbeat": true,
                        "action": "notifyGenericError"
                    }
                }
                /****/
            },
            "errors": {
                "NFErr_InvalidStateTransition": {
                    "alwaysIgnore": true
                },
                "NFErr_MC_InvalidStateTransition_ShouldBeStopped" : {
                    "alwaysIgnore": true
                },
                "NFErr_MalformedData": {
                    "ignoreIfPlayingOrOnHeartbeat": false,
                    "action": "nonNetworkPlaybackError"
                },
                "NFErr_MC_SubtitleFailure": {
                    "action": "handleSubtitleError"
                },
                "NFErr_MC_ConnectionFailure": {
                    "action": "handleConnectionError"
                },
                "NFErr_MC_AuthFailure": {
                    "ignoreIfPlayingOrOnHeartbeat": false,
                    "action": "nonNetworkPlaybackError"
                },
                "NFErr_MC_InitStreamFailure": {
                    "ignoreIfPlayingOrOnHeartbeat": false,
                    "action": "nonNetworkPlaybackError"
                },
                "NFErr_MC_StreamSetIncomplete": {
                    "ignoreIfPlayingOrOnHeartbeat": false,
                    "action": "nonNetworkPlaybackError"
                },
                "NFErr_MC_OpenDeviceFailure": {
                    "ignoreIfPlayingOrOnHeartbeat": false,
                    "action": "nonNetworkPlaybackError"
                },
                "NFErr_MC_AcquireLicenseFailure": {
                    "ignoreIfPlayingOrOnHeartbeat": false,
                    "action": "nonNetworkPlaybackError"
                },
                "NFErr_MC_RefuseToPlayNonDrmed": {
                    "ignoreIfPlayingOrOnHeartbeat": false,
                    "action": "nonNetworkPlaybackError"
                },
                "NFErr_MC_DevicePlaybackError": {
                    "ignoreIfPlayingOrOnHeartbeat": false,
                    "action": "nonNetworkPlaybackError"
                },
                "NFErr_PlaybackDeviceError": {
                    "ignoreIfPlayingOrOnHeartbeat": false,
                    "action": "nonNetworkPlaybackError"
                },
                "NFErr_MC_DeviceDecryptionError": {
                    "ignoreIfPlayingOrOnHeartbeat": false,
                    "action": "nonNetworkPlaybackError"
                },
                "NFErr_MC_HttpServerError": {
                    "ignoreIfPlayingOrOnHeartbeat": false,
                    "action": "nonNetworkPlaybackError"
                },
                "NFErr_MC_HttpClientError": {
                    "ignoreIfPlayingOrOnHeartbeat": false,
                    "action": "nonNetworkPlaybackError"
                },
                "NFErr_MC_ContentNotAvailable": {
                    "ignoreIfPlayingOrOnHeartbeat": false,
                    "action": "nonNetworkPlaybackError"
                },
                "NFErr_MC_EncodingError": {
                    "ignoreIfPlayingOrOnHeartbeat": false,
                    "action": "nonNetworkPlaybackError"
                },
                "NFErr_MC_NCCP_RegistrationRequired": {
                    "ignoreIfPlayingOrOnHeartbeat": true,
                    "action": "notifyGenericErrorAndCallback"
                },
                "NFErr_NotAllowed": {
                    "alwaysIgnore": true
                }
            },
            "videoErrors": {
                "MEDIA_ERR_ABORTED": {
                    "ignoreIfPlayingOrOnHeartbeat": false,
                    "action": "nonNetworkPlaybackError"
                },
                "MEDIA_ERR_NETWORK": {
                    "action": "handleConnectionError"
                },
                "MEDIA_ERR_DECODE": {
                    "ignoreIfPlayingOrOnHeartbeat": false,
                    "action": "nonNetworkPlaybackError"
                },
                "MEDIA_ERR_SRC_NOT_SUPPORTED": {
                    "ignoreIfPlayingOrOnHeartbeat": false,
                    "action": "nonNetworkPlaybackError"
                }
            },
            "reasonCodes": {
                "CONCURRENT_STREAM_LIMIT_REACHED": 102
            },
            "stackHandlingRules": {
                "alwaysHandle": {
                    "NFErr_NCCP_RegistrationRequired": {
                        "priority": 1,
                        "convertTo": "NFErr_MC_NCCP_RegistrationRequired"
                    }
                },
                "ignoreErrors": [
                    {}
                ]
            }
        };
        //nrdp.log.error("Model: " + (typeof model));
        var PLAYER_UISETTINGS = {
            'enhancedSubtitles' : (typeof model != "undefined")?model.AppConfig.enhancedSubtitles:false,
            'uiExperience' :  (typeof model != "undefined")?model.uiExperience:undefined
        };
        var playbackConfig = {};
        playbackConfig.uisettings = PLAYER_UISETTINGS;
        playbackConfig.errors = configPlaybackErrors;

        // Fakes config being set - so that JSASE will initialize
        nrdp.setConfigData("streaming", {});

        var playerControl = new nrdp.PlayerControl(playbackConfig, createdPlayerControl);
    }

    function loaded_nfrx(response) {
        if (response.reason !== nrdp.gibbon.SUCCESS) {
            nrdp.log.error("FAILED TO LOAD nfrx.js");
            nrdp.log.error(JSON.stringify(response));
            nrdp.exit();
            return;
        }
        nrdp.log.error("LOADED nfrx.js: " + response.url);
        createPlayerControl();
    }
    function load_nfrx() {
        nrdp.log.error("LOADING nfrx.js");
        var old_baseUrl = nrdp.gibbon._baseUrl;
        nrdp.gibbon._baseUrl = libquickplayer_js_location;
        nrdp.gibbon.loadScript({url: "nfrx.js", async:false, secure: true, headers: {'X-Gibbon-Cache-Control': 'server, max-age=0, no-memory-cache, priority=1'}}, loaded_nfrx );
        nrdp.gibbon._baseUrl = old_baseUrl;
    }

    function select_device_account() {
        var numberOfDeviceAccounts = nrdp.registration.deviceAccounts.length;
        if (!numberOfDeviceAccounts) {
            nrdp.log.warn("No device account, creating one");
            nrdp.registration.createDeviceAccount(function(account) {
                var dak = account.accountKey;
                nrdp.registration.selectDeviceAccount(dak, function() {
                    nrdp.registration.addEventListener("activate", load_nfrx);
                    nrdp.registration.emailActivate(nrdp.options.user_name, nrdp.options.user_password);
                });
            });
        } else {
            nrdp.log.warn("device account available!!!");
            nrdp.registration.selectDeviceAccount(nrdp.registration.deviceAccounts[numberOfDeviceAccounts - 1].accountKey, function() {
                nrdp.log.warn("selected device account!!!");
                load_nfrx();
            });
        }
    }

    if(nrdp.isReady && !nrdjs.isReady) {
        nrdp.log.error(" + INIT");
        nrdp.js.init(select_device_account);
    } else {
        select_device_account();
    }
}
