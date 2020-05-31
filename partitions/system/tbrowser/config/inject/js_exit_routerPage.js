Util.println("---run js_exit_routerPage.js---");
var VK_EXIT = 120;
function keyDownfunc(evt)
{
	var keycode = evt.which;
	Util.println("---run js_exit_routerPage.js---keyDownfunc ------ keycode == "+keycode);
	switch(keycode)
 	{
		case VK_EXIT:
			Util.println("---run js_exit_routerPage.js---keyDownfunc -----VK_EXIT ");
			top.jumpPage();
			break;
		default:
			return;
	}
}
document.onkeydown = keyDownfunc;