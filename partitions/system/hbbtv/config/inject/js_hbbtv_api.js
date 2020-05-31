//HBBTV_JSEXT have no function and property
//just build in one libary for Channel KeySet KeyEvent oipfObjectFactory
window.Channel = {};
window.KeySet = {};
window.oipfObjectFactory = {};
window.KeyEvent = {};
//Channel
Object.defineProperties(window.Channel, {
  TYPE_TV : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 0
  },
  TYPE_RADIO : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 1
  },
  TYPE_OTHER : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 2
  }
});

//KeySet
Object.defineProperties(window.KeySet, {
  RED : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 1
  },
  GREEN : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 2
  },
  YELLOW : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 4
  },
  BLUE : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 8
  },
  NAVIGATION : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 16
  },
  VCR : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 32
  },
  SCROLL : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 64
  },
  INFO : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 128
  },
  NUMERIC : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 256
  },
  ALPHA : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 512
  },
  OTHER : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 1024
  }
});

//oipfObjectFactory
//define methods
window.oipfObjectFactory.isObjectSupported = function(mimeType) {
  var supportTypes = new Array(
    "application/oipfApplicationManager",
    "application/oipfCapabilities",
    "application/oipfConfiguration",
    "application/oipfDrmAgent",
    "application/oipfParentalControlManager",
    "application/oipfSearchManager",
    "application/hbbtvMediaSynchroniser",
    "application/hbbtvCSManager",
    "video/broadcast",
    "video/mpeg",
    "video/mp4",
    "audio/mp4",
    "audio/mpeg"
    );
  for (var i = 0;i < supportTypes.length;i++) {
    if (mimeType == supportTypes[i])
      return true;
  }
  return false;
};

//functions to create visual object
window.oipfObjectFactory.createCSManager = function(requiredCapabilities) {
  var newObject = document.getElementById("APPLICATION_HBBTV_CS_MANAGER_ID");
  if (newObject) 
    return newObject;
  newObject = document.createElement('object');
  if (newObject) {
    newObject.setAttribute("type", "application/hbbtvCSManager");
    newObject.setAttribute("id", "APPLICATION_HBBTV_CS_MANAGER_ID");
    newObject.setAttribute("namespaceURI", "http://www.w3.org/1999/xhtml");
    document.getElementsByTagName("body")[0].appendChild(newObject);
    return document.getElementById("APPLICATION_HBBTV_CS_MANAGER_ID");
  }
  throw new TypeError("failed create application/hbbtvCSManager object. ");
  return null;
};

window.oipfObjectFactory.createMediaSynchroniser = function(requiredCapabilities) {
  var newObject = document.getElementById("APPLICATION_MEDIA_SYNCHRONISER_ID");
  if (newObject) 
    return newObject;
  newObject = document.createElement('object');
  if (newObject) {
    newObject.setAttribute("type", "application/hbbtvMediaSynchroniser");
    newObject.setAttribute("id", "APPLICATION_MEDIA_SYNCHRONISER_ID");
    newObject.setAttribute("namespaceURI", "http://www.w3.org/1999/xhtml");
    document.getElementsByTagName("body")[0].appendChild(newObject);
    return document.getElementById("APPLICATION_MEDIA_SYNCHRONISER_ID");
  }
  throw new TypeError("failed create application/hbbtvMediaSynchroniser object. ");
  return null;
};

window.oipfObjectFactory.createVideoBroadcastObject = function(requiredCapabilities) {
  var newObject = document.getElementById("OIPF_VIDEO_BROADCAST_CUSTOM_ID");
  if (newObject) 
    return newObject;
  newObject = document.createElement('object');
  if (newObject) {
    newObject.setAttribute("type", "video/broadcast");
    newObject.setAttribute("id", "OIPF_VIDEO_BROADCAST_CUSTOM_ID");
    newObject.setAttribute("namespaceURI", "http://www.w3.org/1999/xhtml");
    document.getElementsByTagName("body")[0].appendChild(newObject);
    return document.getElementById("OIPF_VIDEO_BROADCAST_CUSTOM_ID");
  }
  throw new TypeError("failed create video/broadcast object. ");
  return null;
};

window.oipfObjectFactory.createVideoMpegObject = function(requiredCapabilities) {
  var newObject = document.getElementById("OIPF_VIDEO_MPEG_CUSTOM_ID");
  if (newObject) 
    return newObject;
  newObject = document.createElement('object');
  if (newObject) {
    newObject.setAttribute("type", "video/mpeg");
    newObject.setAttribute("id", "OIPF_VIDEO_MPEG_CUSTOM_ID");
    newObject.setAttribute("namespaceURI", "http://www.w3.org/1999/xhtml");
    document.getElementsByTagName("body")[0].appendChild(newObject);
    return document.getElementById("OIPF_VIDEO_MPEG_CUSTOM_ID");
  }
  throw new TypeError("failed create video/mpeg object. ");
  return null;
};

//functions to create non-visual object
window.oipfObjectFactory.createApplicationManagerObject = function() {
  var newObject = document.getElementById("OIPF_APPLICATION_MANAGER_CUSTOM_ID");
  if (newObject) 
    return newObject;
  newObject = document.createElement('object');
  if (newObject) {
    newObject.setAttribute("type", "application/oipfApplicationManager");
    newObject.setAttribute("id", "OIPF_APPLICATION_MANAGER_CUSTOM_ID");
    newObject.setAttribute("namespaceURI", "http://www.w3.org/1999/xhtml");
    document.getElementsByTagName("body")[0].appendChild(newObject);
    return document.getElementById("OIPF_APPLICATION_MANAGER_CUSTOM_ID");
  }
  throw new TypeError("failed create application/oipfApplicationManager object. ");
  return null;
};

window.oipfObjectFactory.createConfigurationObject = function() {
  var newObject = document.getElementById("OIPF_APPLICATION_CONFIGURATION_CUSTOM_ID");
  if (newObject) 
    return newObject;
  newObject = document.createElement('object');
  if (newObject) {
    newObject.setAttribute("type", "application/oipfConfiguration");
    newObject.setAttribute("id", "OIPF_APPLICATION_CONFIGURATION_CUSTOM_ID");
    newObject.setAttribute("namespaceURI", "http://www.w3.org/1999/xhtml");
    document.getElementsByTagName("body")[0].appendChild(newObject);
    return document.getElementById("OIPF_APPLICATION_CONFIGURATION_CUSTOM_ID");
  }
  throw new TypeError("failed create application/oipfConfiguration object. ");
  return null;
};

window.oipfObjectFactory.createDrmAgentObject = function() {
  var newObject = document.getElementById("OIPF_APPLICATION_DRM_AGENT_CUSTOM_ID");
  if (newObject) 
    return newObject;
  newObject = document.createElement('object');
  if (newObject) {
    newObject.setAttribute("type", "application/oipfDrmAgent");
    newObject.setAttribute("id", "OIPF_APPLICATION_DRM_AGENT_CUSTOM_ID");
    newObject.setAttribute("namespaceURI", "http://www.w3.org/1999/xhtml");
    document.getElementsByTagName("body")[0].appendChild(newObject);
    return document.getElementById("OIPF_APPLICATION_DRM_AGENT_CUSTOM_ID");
  }
  throw new TypeError("failed create application/oipfDrmAgent object. ");
  return null;
};

window.oipfObjectFactory.createParentalControlManagerObject = function() {
  var newObject = document.getElementById("OIPF_APPLICATION_PARENTAL_CONTROL_MANAGER_CUSTOM_ID");
  if (newObject) 
    return newObject;
  newObject = document.createElement('object');
  if (newObject) {
    newObject.setAttribute("type", "application/oipfParentalControlManager");
    newObject.setAttribute("id", "OIPF_APPLICATION_PARENTAL_CONTROL_MANAGER_CUSTOM_ID");
    newObject.setAttribute("namespaceURI", "http://www.w3.org/1999/xhtml");
    document.getElementsByTagName("body")[0].appendChild(newObject);
    return document.getElementById("OIPF_APPLICATION_PARENTAL_CONTROL_MANAGER_CUSTOM_ID");
  }
  throw new TypeError("failed create application/oipfParentalControlManager object. ");
  return null;
};

window.oipfObjectFactory.createCapabilitiesObject = function() {
  var newObject = document.getElementById("OIPF_APPLICATION_CAPABILITIES_CUSTOM_ID");
  if (newObject) 
    return newObject;
  newObject = document.createElement('object');
  if (newObject) {
    newObject.setAttribute("type", "application/oipfCapabilities");
    newObject.setAttribute("id", "OIPF_APPLICATION_CAPABILITIES_CUSTOM_ID");
    newObject.setAttribute("namespaceURI", "http://www.w3.org/1999/xhtml");
    document.getElementsByTagName("body")[0].appendChild(newObject);
    return document.getElementById("OIPF_APPLICATION_CAPABILITIES_CUSTOM_ID");
  }
  throw new TypeError("failed create application/oipfCapabilities object. ");
  return null;
};

window.oipfObjectFactory.createSearchManagerObject = function() {
  var newObject = document.getElementById("OIPF_APPLICATION_SEARCH_MANAGER_ID");
  if (newObject) 
    return newObject;
  newObject = document.createElement('object');
  if (newObject) {
    newObject.setAttribute("type", "application/oipfSearchManager");
    newObject.setAttribute("id", "OIPF_APPLICATION_SEARCH_MANAGER_ID");
    newObject.setAttribute("namespaceURI", "http://www.w3.org/1999/xhtml");
    document.getElementsByTagName("body")[0].appendChild(newObject);
    return document.getElementById("OIPF_APPLICATION_SEARCH_MANAGER_ID");
  }
  throw new TypeError("failed create application/oipfSearchManager object. ");
  return null;
};

//KeyEvent
Object.defineProperties(window.KeyEvent,{
  VK_UNDEFINED : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 0
  },
  VK_CANCEL : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 3
  },
  VK_BACK_SPACE : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 8
  },
  VK_TAB : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 9
  },
  VK_CLEAR : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 12
  },
  VK_ENTER : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 13
  },
  VK_SHIFT : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 16
  },
  VK_CONTROL : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 17
  },
  VK_ALT : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 18
  },
  VK_PAUSE : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 19
  },
  VK_CAPS_LOCK : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 20
  },
  VK_KANA : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 21
  },
  VK_FINAL : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 24
  },
  VK_KANJI : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 25
  },
  VK_ESCAPE : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 27
  },
  VK_CONVERT : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 28
  },
  VK_NONCONVERT : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 29
  },
  VK_ACCEPT : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 30
  },
  VK_MODECHANGE : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 31
  },
  VK_SPACE : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 32
  },
  VK_PAGE_UP : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 33
  },
  VK_PAGE_DOWN : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 34
  },
  VK_END : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 35
  },
  VK_HOME : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 36
  },
  VK_LEFT : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 37
  },
  VK_UP : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 38
  },
  VK_RIGHT : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 39
  },
  VK_DOWN : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 40
  },
  VK_COMMA : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 44
  },
  VK_PERIOD : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 46
  },
  VK_SLASH : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 47
  },
  VK_0 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 48
  },
  VK_1 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 49
  },
  VK_2 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 50
  },
  VK_3 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 51
  },
  VK_4 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 52
  },
  VK_5 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 53
  },
  VK_6 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 54
  },
  VK_7 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 55
  },
  VK_8 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 56
  },
  VK_9 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 57
  },
  VK_SEMICOLON : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 59
  },
  VK_EQUALS : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 61
  },
  VK_A : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 65
  },
  VK_B : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 66
  },
  VK_C : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 67
  },
  VK_D : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 68
  },
  VK_E : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 69
  },
  VK_F : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 70
  },
  VK_G : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 71
  },
  VK_H : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 72
  },
  VK_I : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 73
  },
  VK_J : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 74
  },
  VK_K : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 75
  },
  VK_L : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 76
  },
  VK_M : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 77
  },
  VK_N : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 78
  },
  VK_O : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 79
  },
  VK_P : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 80
  },
  VK_Q : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 81
  },
  VK_R : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 82
  },
  VK_S : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 83
  },
  VK_T : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 84
  },
  VK_U : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 85
  },
  VK_V : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 86
  },
  VK_W : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 87
  },
  VK_X : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 88
  },
  VK_Y : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 89
  },
  VK_Z : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 90
  },
  VK_OPEN_BRACKET : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 91
  },
  VK_BACK_SLASH : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 92
  },
  VK_CLOSE_BRACKET : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 93
  },
  VK_NUMPAD0 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 96
  },
  VK_NUMPAD1 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 97
  },
  VK_NUMPAD2 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 98
  },
  VK_NUMPAD3 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 99
  },
  VK_NUMPAD4 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 100
  },
  VK_NUMPAD5 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 101
  },
  VK_NUMPAD6 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 102
  },
  VK_NUMPAD7 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 103
  },
  VK_NUMPAD8 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 104
  },
  VK_NUMPAD9 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 105
  },
  VK_MULTIPLY : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 106
  },
  VK_ADD : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 107
  },
  VK_SEPARATER : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 108
  },
  VK_SUBTRACT : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 109
  },
  VK_DECIMAL : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 110
  },
  VK_DIVIDE : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 111
  },
  VK_F1 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 112
  },
  VK_F2 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 113
  },
  VK_F3 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 114
  },
  VK_F4 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 115
  },
  VK_F5 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 116
  },
  VK_F6 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 117
  },
  VK_F7 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 118
  },
  VK_F8 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 119
  },
  VK_F9 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 120
  },
  VK_F10 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 121
  },
  VK_F11 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 122
  },
  VK_F12 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 123
  },
  VK_DELETE : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 127
  },
  VK_NUM_LOCK : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 144
  },
  VK_SCROLL_LOCK : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 145
  },
  VK_PRINTSCREEN : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 154
  },
  VK_INSERT : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 155
  },
  VK_HELP : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 156
  },
  VK_META : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 157
  },    
  VK_BACK_QUOTE : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 192
  },  
  VK_QUOTE : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 222
  },  
  VK_RED : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 403
  },
  VK_GREEN : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 404
  },
  VK_YELLOW : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 405
  },  
  VK_BLUE : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 406
  },
  VK_GREY : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 407
  },            
  VK_BROWN : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 408
  }, 
  VK_POWER : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 409
  },   
  VK_DIMMER : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 410
  },     
  VK_WINK : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 411
  },
  VK_REWIND : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 412
  },   
  VK_STOP : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 413
  },
  VK_EJECT_TOGGLE : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 414
  },
  VK_PLAY : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 415
  },
  VK_RECORD : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 416
  },
  VK_FAST_FWD : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 417
  },
  VK_PLAY_SPEED_UP : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 418
  },
  VK_PLAY_SPEED_DOWN : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 419
  },
  VK_PLAY_SPEED_RESET : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 420
  },
  VK_RECORD_SPEED_NEXT : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 421
  },
  VK_GO_TO_START : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 422
  },
  VK_GO_TO_END : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 423
  },
  VK_PREV : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 424
  },
  VK_NEXT : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 425
  },
  VK_RANDOM_TOGGLE : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 426
  },
  VK_CHANNEL_UP : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 427
  },
  VK_CHANNEL_DOWN : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 428
  },  
  VK_STORE_FAVORITE_0 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 429
  },
  VK_STORE_FAVORITE_1 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 430
  },
  VK_STORE_FAVORITE_2 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 431
  },
  VK_STORE_FAVORITE_3 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 432
  },  
  VK_RECALL_FAVORITE_0 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 433
  },
  VK_RECALL_FAVORITE_1 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 434
  },
  VK_RECALL_FAVORITE_2 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 435
  },
  VK_RECALL_FAVORITE_3 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 436
  },
  VK_CLEAR_FAVORITE_0 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 437
  },
  VK_CLEAR_FAVORITE_1 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 438
  },
  VK_CLEAR_FAVORITE_2 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 439
  },
  VK_CLEAR_FAVORITE_3 : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 440
  },
  VK_SCAN_CHANNELS_TOGGLE : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 441
  },  
  VK_PINP_TOGGLE : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 442
  },  
  VK_SPLIT_SCREEN_TOOGLE : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 443
  },  
  VK_DISPLAY_SWAP : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 444
  },  
  VK_SCREEN_MODE_NEXT : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 445
  },  
  VK_VIDEO_MODE_NEXT : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 446
  },
  VK_VOLUME_UP : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 447
  },
  VK_VOLUME_DOWN : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 448
  },
  VK_MUTE : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 449
  },  
  VK_SURROUND_MODE_NEXT : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 450
  },   
  VK_BALANCE_RIGHT : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 451
  },   
  VK_BALANCE_LEFT : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 452
  },   
  VK_FADDER_FRONT : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 453
  },   
  VK_FADDER_REAR : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 454
  },   
  VK_BASS_BOOST_UP : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 455
  },   
  VK_BASS_BOOST_DOWN : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 456
  },   
  VK_INFO : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 457
  },   
  VK_GUIDE : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 458
  },   
  VK_TELETEXT : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 459
  },  
  VK_SUBTITLE : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 460
  },  
  VK_BACK : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 461
  },   
  VK_MENU : {
    configurable : false,
    enumerable: true,
    writable : false,
    value : 462
  }
});