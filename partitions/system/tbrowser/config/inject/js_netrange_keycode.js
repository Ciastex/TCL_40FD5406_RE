Util.println("---run js_netrange_keycode.js---");
var VK_UNSUPPORTED = null;
var env = Util.getEnv('env.SDL_KEY_SET_NAME');
console.log("--the env="+env);
if (env == "tbrowser.mmh")
{
	if (typeof(VK_BACK) == "undefined")
		var VK_BACK = KeyEvent.VK_BACK;
} else {
	if (typeof(VK_BACK) == "undefined")	
		var VK_BACK = KeyEvent.VK_BACK_SPACE;
}
console.log("VK_BACK="+VK_BACK);
var VK_BACK_SPACE = KeyEvent.VK_BACK_SPACE;
var VK_ENTER      = KeyEvent.VK_ENTER;

var VK_LEFT  = KeyEvent.VK_LEFT;
var VK_UP    = KeyEvent.VK_UP;
var VK_RIGHT = KeyEvent.VK_RIGHT;
var VK_DOWN  = KeyEvent.VK_DOWN;

var VK_0 = KeyEvent.VK_0;
var VK_1 = KeyEvent.VK_1;
var VK_2 = KeyEvent.VK_2;
var VK_3 = KeyEvent.VK_3;
var VK_4 = KeyEvent.VK_4;
var VK_5 = KeyEvent.VK_5;
var VK_6 = KeyEvent.VK_6;
var VK_7 = KeyEvent.VK_7;
var VK_8 = KeyEvent.VK_8;
var VK_9 = KeyEvent.VK_9;

<!-- Color keys F1 - F4 -->
var VK_RED = KeyEvent.VK_RED;
var VK_GREEN = KeyEvent.VK_GREEN;
var VK_YELLOW = KeyEvent.VK_YELLOW;
var VK_BLUE = KeyEvent.VK_BLUE;

var VK_REWIND       = KeyEvent.VK_REWIND;
var VK_STOP         = KeyEvent.VK_STOP;
var VK_PLAY         = KeyEvent.VK_PLAY;
var VK_FAST_FWD     = KeyEvent.VK_FAST_FWD;
var VK_INFO         = KeyEvent.VK_INFO;
var VK_SUBTITLE     = KeyEvent.VK_SUBTITLE;
var VK_MENU         = KeyEvent.VK_MENU;
var VK_PAUSE        = KeyEvent.VK_PAUSE;

var VK_RECORD       = VK_UNSUPPORTED;
var VK_CHANNEL_UP   = VK_UNSUPPORTED;
var VK_CHANNEL_DOWN = VK_UNSUPPORTED;
var VK_VOLUME_UP    = VK_UNSUPPORTED;
var VK_VOLUME_DOWN  = VK_UNSUPPORTED;
var VK_MUTE         = VK_UNSUPPORTED;



