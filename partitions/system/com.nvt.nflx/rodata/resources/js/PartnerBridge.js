/* global nrdp, nrdpPartner */

nrdp.nrdpPartner = {

    Keys: {
        // Define how your key codes are mapped to key names
        //      Key names are defined by Netflix and should not be modified
        //      Key code mappings can be freely modified by the partner
        //      See the partner key mapping documentation on the Netflix portal for more details
        //
        // SUPPORTED:
        //      The key code for a mapping can be changed
        //      A key code mapping can be removed if there is no applicable key for the device
        //      Multiple key codes can be mapped to the same key name
        //

     // code    key name               Typical remote key      Netflix UI typical usage
        "13":   "key.enter",        // Enter                   Select/Enter
        "61512":   "key.back",         // Return / Back           Back Navigation
        "113":   "key.netflix",      // Netflix button          UI Home Shortcut
        "35":   "key.options",      // Options / Tools
        "37":   "key.left",         // Left                    Left Navigation
        "38":   "key.up",           // Up                      Up Navigation
        "39":   "key.right",        // Right                   Right Navigation
        "40":   "key.down",         // Down                    Down Navigation
        "61460":   "key.info",         // Info                    Info
        "48":   "key.0",            // Numeric 0
        "49":   "key.1",            // Numeric 1
        "50":   "key.2",            // Numeric 2
        "51":   "key.3",            // Numeric 3
        "52":   "key.4",            // Numeric 4
        "53":   "key.5",            // Numeric 5
        "54":   "key.6",            // Numeric 6
        "55":   "key.7",            // Numeric 7
        "56":   "key.8",            // Numeric 8
        "57":   "key.9",            // Numeric 9
        "97":   "key.step_prev",    // Slow/Step Prev
        "61472":   "key.subtitle",     // Subtitle
        "99":   "key.step_next",    // Slow/Step Next
        "61501":  "key.display",      // Display                  Display Bitrate Info
        "61458":  "key.top_menu",     // Top Menu / Menu          UI Home Shortcut
        "102":  "key.search",       // Search                   Show Search Screen
        "61531":  "key.track_prev",   // Track Prev
        "104":  "key.popup_menu",   // Popup Menu
        "61532":  "key.track_next",   // Track Next
        "106":  "key.clear",        // Clear
        "109":  "key.time",         // Time
        "111":  "key.angle",        // Angle
        "114":  "key.skip_back",    // Skip back
        "115":  "key.skip_forward", // Skip forward
        "116":  "key.dotcom",       // .com                     Enter .com into form input fields for login/signup
        "19":  "key.pause",        // Pause                    Playback/Trickplay Pause
        "61529":  "key.rewind",       // Scan/Rewind              Playback/Trickplay Rewind
        "61521":  "key.play",         // Play (or Play/Pause)     Playback/Trickplay Play/Pause Toggle
        "61530":  "key.fastfwd",      // Scan/FastFwd             Playback/Trickplay FastFwd
        "61522":  "key.stop",         // Stop                     Playback/Trickplay Stop
        "61481":  "key.audio",        // Audio
        "61538":  "key.exit",         // Exit
        "187":  "key.power",        // Power
        "219":  "key.red",          // Color Red
        "220":  "key.green",        // Color Green
        "221":  "key.blue",         // Color Blue
        "222":  "key.yellow",       // Color Yellow
        "223":  "key.ttspause"      // Pause text-to-speech
    }
};

// The UI expects nrdpPartner to be a top-level bridge, and not under nrdp.
// Alias out a pointer to move nrdp.nrdpPartner up to the global namespace.
nrdpPartner = nrdp.nrdpPartner;
