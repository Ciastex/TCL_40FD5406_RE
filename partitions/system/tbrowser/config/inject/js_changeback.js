Util.println("---run js_changeback.js---");

function TemplateModel() {

  this.activeScreen;
  this.screenBefore;
  this.screens = {};
  this.modalDialog;
  this.isDialogVisible = false;

  this.dataArray = [];


  this.favoriteVideos = [];
  this.favoriteEdited = false;
  this.isAlreadyConfirmed = undefined;

  this.allowEnter = true;
  
};

// ----------------------------------

Template = {
  className: "Template"
};

// ----------------------------------

Template.onReady = function () {

    Log.write(this.className, Log.INFO, "focusEngineReady", null);

    Loader.init();
    Service.init();
    Keys.init();
    FocusEngine.setFirstFocus();
    Keyboard.init();
    Platform.rewriteSetting();
    Platform.initKeys();
    Platform.checkVersion();
    Storage.init();
    //   Audio.init();

    // Messaging.init();
    FocusEngine.addScreens();

    //Template.loadFavoriteVideos();
    Template.applyWorkarounds();

};

// ----------------------------------

    Template.showDialog = function (params, callback, vm) {

      var dataArray = Template.model.dataArray[params.DataName];

      switch (params.Target) {
        case "Impressum":

          vm.showModalDialog({
            //text: Main.setting.App.Imprint.Label,
              text: dataArray.Content.ContentItems[0].Title,
              content: dataArray.Content.ContentItems[0].Text,
            message_type: Constants["ModalDialog"].MESSAGE_TYPE_IPRINT,
            window_type: Constants["ModalDialog"].WINDOW_TYPE_OK,
            callback: callback
          });
        break;
        case "ExitApp":
            vm.showModalDialog({
            text: params.Title,
            content: params.Text,
            message_type: Constants["ModalDialog"].MESSAGE_TYPE_INFO,
            window_type: Constants["ModalDialog"].WINDOW_TYPE_YES_NO,
            callback: callback,
            context: vm
        });
        break;
   
      }

    }

    // ----------------------------------

    Template.appStartLoaded = function () {

        var screens = $("#ContainerRoot")

        screens.css("background", "url(" + Utils.getServerPrefix(Template.model.dataArray.AppStart.Content.RemoteSettings.BackgroundImageUrl) + ")");
        screens.css("background-repeat", "no-repeat");
        screens.css("background-position", "0 0");
        
    };

    // ----------------------------------

    Template.applyWorkarounds = function () {

        // trick for Loewe TV -  yellow button as return button
        if (Main.setting.UseInputBoxWorkaround[Main.setting.Service.ClientType]) {
            var input1 = $("<input type='text' id='dummy-input' value='test' />");
            var input2 = $("<input type='text' id='dummy-input2' value='test' />");

            $("body").append(input1);
            $("body").append(input2);
            $("#dummy-input").focus();
        }

    };

    // -----------------------------------------------------

    Template.keyDown = function (_event, mouseInfo) {
				Util.println("---run keyDown-- 117-");
        if (Main.setting.UseInputBoxWorkaround[Main.setting.Service.ClientType]) {
				Util.println("---run keyDown-- 119-");
            _event.preventDefault();

            //            Log.write(this.className, Log.INFO, "VK_RETURN: " + VK_RETURN, null);

            //            Log.write(this.className, Log.INFO, "VK_BLUE: " + VK_BLUE, null);
            //            Log.write(this.className, Log.INFO, "VK_YELLOW: " + VK_YELLOW, null);
            //            Log.write(this.className, Log.INFO, "VK_GREEN: " + VK_GREEN, null);
            //            Log.write(this.className, Log.INFO, "VK_RED: " + VK_RED, null);

            //            Log.write(this.className, Log.INFO, "VK_0: " + VK_0, null);
            //            Log.write(this.className, Log.INFO, "VK_1: " + VK_1, null);
            //            Log.write(this.className, Log.INFO, "VK_2: " + VK_2, null);
            //            Log.write(this.className, Log.INFO, "VK_3: " + VK_3, null);
            //            Log.write(this.className, Log.INFO, "VK_4: " + VK_4, null);
            //            Log.write(this.className, Log.INFO, "VK_5: " + VK_5, null);
            //            Log.write(this.className, Log.INFO, "VK_6: " + VK_6, null);
            //            Log.write(this.className, Log.INFO, "VK_7: " + VK_7, null);
            //            Log.write(this.className, Log.INFO, "VK_8: " + VK_8, null);
            //            Log.write(this.className, Log.INFO, "VK_9: " + VK_9, null);
        }

        Log.write("Template", Log.INFO, "keyDown ", null);

        if (mouseInfo != undefined) {
            FocusEngine.focusInfo.mouseEvent = mouseInfo.mouseEvent;
        } else {
            FocusEngine.focusInfo.mouseEvent = undefined;
        }

        var _keyCode;
        var _eventForSend;

        switch (Main.setting.Service.ClientType) {
            case "SamsungTV":
                if (mouseInfo != undefined) {
                    if (mouseInfo.mouseEvent) {
                        _keyCode = _event.keyCode;
                    } else {
                        _keyCode = event.keyCode;
                    }
                    _eventForSend = _event;
                } else {
                    _keyCode = event.keyCode;
                }

                if (_keyCode == Keys.VK_RETURN) {
                    widgetAPI.blockNavigation(event);
                    //  widgetAPI.blockNavigation(_event);
                }

                if (_keyCode == 7 || _keyCode == 11 || _keyCode == 27) {
                    Platform.initKeys();

                    switch (_keyCode) {
                        case 7:
                            _keyCode = Keys.VK_VOLUME_UP;
                            break;
                        case 11:
                            _keyCode = Keys.VK_VOLUME_DOWN;
                            break;
                        case 27:
                            _keyCode = Keys.VK_VOLUME_MUTE;
                            break;
                    }
                }

                break;
            default:
                if (typeof _event.preventDefault == "function") {
                    _event.preventDefault();
                    Log.write(this.className, Log.INFO, "set preventDefault()", null);
                } else {
                    Log.write(this.className, Log.INFO, "can't set preventDefault()", null);
                }
                _keyCode = _event.keyCode;
                _eventForSend = _event;
                break;
        }



        Log.write("Template", Log.INFO, "keyCode " + _keyCode, null);
				Util.println("---run _keyCode-- -"+_keyCode);

        if (Main.loading)
            return;

        switch (_keyCode) {
            case Keys.VK_DOWN:
                //Log.write(Keys.className, Log.INFO, "keyDown " + _keyCode + " down", null);
                $("body").trigger('keyPressedFocusEngine', [Keys.FocusEngineDOWN]);
                break;
            case Keys.VK_UP:
                //Log.write(Keys.className, Log.INFO, "keyDown " + _keyCode + " up", null);
                $("body").trigger('keyPressedFocusEngine', [Keys.FocusEngineUP]);
                break;
            case Keys.VK_LEFT:
                //Log.write(Keys.className, Log.INFO, "keyDown " + _keyCode + " left", null);
                $("body").trigger('keyPressedFocusEngine', [Keys.FocusEngineLEFT]);
                break;
            case Keys.VK_RIGHT:
                //Log.write(Keys.className, Log.INFO, "keyDown " + _keyCode + " right", null);
                $("body").trigger('keyPressedFocusEngine', [Keys.FocusEngineRIGHT]);
                break;
            case Keys.VK_ENTER:
                Log.write(Keys.className, Log.INFO, "keyDown " + _keyCode + " enter " + Template.model.allowEnter, null);

                if (Template.model.allowEnter) {
                    Template.model.allowEnter = false;
                    $("body").trigger('keyPressedFocusEngine', [Keys.FocusEngineENTER]);
                    setTimeout(function () {
                        Template.model.allowEnter = true;
                    }, 500);
                }

                break;
            case 8:
                // case 8: // Loewew test
                //Log.write(Keys.className, Log.INFO, "keyDown " + _keyCode + " return", null);
								Util.println("---run line-- 239-");                
                $("body").trigger('keyPressedFocusEngine', [Keys.FocusEngineRETURN]);
                break;
            case Keys.VK_00:
                $("body").trigger('keyPressedFocusEngine', ["Keys.VK_00"]);
                break;
            case Keys.VK_01:
                $("body").trigger('keyPressedFocusEngine', ["Keys.VK_01"]);
                break;
            case Keys.VK_02:
                $("body").trigger('keyPressedFocusEngine', ["Keys.VK_02"]);
                break;
            case Keys.VK_03:
                $("body").trigger('keyPressedFocusEngine', ["Keys.VK_03"]);
                break;
            case Keys.VK_04:
                $("body").trigger('keyPressedFocusEngine', ["Keys.VK_04"]);
                break;
            case Keys.VK_05:
                $("body").trigger('keyPressedFocusEngine', ["Keys.VK_05"]);
                break;
            case Keys.VK_06:
                $("body").trigger('keyPressedFocusEngine', ["Keys.VK_06"]);
                break;
            case Keys.VK_07:
                $("body").trigger('keyPressedFocusEngine', ["Keys.VK_07"]);
                break;
            case Keys.VK_08:
                $("body").trigger('keyPressedFocusEngine', ["Keys.VK_08"]);
                break;
            case Keys.VK_09:
                $("body").trigger('keyPressedFocusEngine', ["Keys.VK_09"]);
                break;
            case Keys.VK_YELLOW:
                $("body").trigger('keyPressedFocusEngine', ["Keys.VK_YELLOW"]);
                break;
            case Keys.VK_BLUE:
                $("body").trigger('keyPressedFocusEngine', ["Keys.VK_BLUE"]);
                break;
            case Keys.VK_GREEN:
                $("body").trigger('keyPressedFocusEngine', ["Keys.VK_GREEN"]);
                break;
            case Keys.VK_RED:
                $("body").trigger('keyPressedFocusEngine', ["Keys.VK_RED"]);
                break;
            case Keys.VK_PAUSE:
                $("body").trigger('keyPressedFocusEngine', ['Keys.VK_PAUSE']);
                break;
            case Keys.VK_PLAY:
                $("body").trigger('keyPressedFocusEngine', ['Keys.VK_PLAY']);
                break;
            case Keys.VK_STOP:
                $("body").trigger('keyPressedFocusEngine', ['Keys.VK_STOP']);
                break;
            case Keys.VK_FFB:
                $("body").trigger('keyPressedFocusEngine', ['Keys.VK_FFB']);
                break;
            case Keys.VK_FRB:
                $("body").trigger('keyPressedFocusEngine', ['Keys.VK_FRB']);
                break;
            case Keys.VK_VOLUME_UP:
                if (Main.setting.Service.ClientType == "SamsungTV") {
                    //Log.write(Keys.className, Log.INFO, "keyDown volume up", null);
                    if (Audio.mute == 0)
                        Audio.setRelativeVolume(0);
                    widgetAPI.blockNavigation(event);
                }
                break;
            case Keys.VK_VOLUME_DOWN:
                if (Main.setting.Service.ClientType == "SamsungTV") {
                    //Log.write(Keys.className, Log.INFO, "keyDown volume down", null);
                    if (Audio.mute == 0)
                        Audio.setRelativeVolume(1);
                    widgetAPI.blockNavigation(event);
                }
                break;
            case Keys.VK_VOLUME_MUTE:
                if (Main.setting.Service.ClientType == "SamsungTV") {
                    //Log.write(Keys.className, Log.INFO, "keyDown mute", null);
                    Audio.muteMode();
                }
                break;
            default:
                Log.write(Keys.className, Log.INFO, "key default " + _keyCode, null);
                if (Keyboard.model.isVisible) {
                    Log.write(Keys.className, Log.INFO, "Keyboard.model.isVisible", null);
                    Keyboard.writeChar(_eventForSend);
                }
                break;
        };

    }

// ----------------------------------

Template.exitApp = function () {

  Platform.doExit();

}

// ----------------------------------
