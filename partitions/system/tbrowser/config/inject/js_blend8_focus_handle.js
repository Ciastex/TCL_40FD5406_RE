Util.println("---run js_blend8_focus_handle.js---");

NR.Navigation =
{
    that:
    {
    },
    handleNavigation: function (event)
    {          
        var keyCode = event.keyCode;

        if (keyCode === 0) 
        {
            if (event.which !== 'undefined')
            {
                keyCode = event.which;
            }
            else if (event.charCode !== 'undefined')
            {
                keyCode = event.charCode;        
            }
        }
                
        switch(keyCode)
        {
            case 412:
            case VK_3:
            case VK_REWIND:
                event.preventDefault();
                previous();
                break;
            case 413:
            case VK_2:
            case VK_STOP:
                playOrPause();
                hidePlayerShowMenu();
                break;
            case 415: // Play
                event.preventDefault();
                playOrPause();
                break;
            case 417:
            case VK_4:
            case VK_FAST_FWD:
                event.preventDefault();
                next();
                break;
            case 19: // Pause
                event.preventDefault();
                playOrPause();
                break;
            case 423:
            case 424:
                event.preventDefault();
                previous();
                break;
            case 425:
                event.preventDefault();
                next();
                break;
            case VK_RIGHT:
            case VK_LEFT:
            case VK_DOWN:
	    case VK_UP:
		console.log("handleDirection");
		if (handleDirection(keyCode))
		    event.preventDefault();
                break;
            case VK_ENTER:
                break;
            case 8:
            case 461:
            case VK_BACK:
            case VK_END:
                break;
            case VK_1:
            case VK_PLAY:
            case VK_PLAY_PAUSE:
            case VK_PAUSE:
                event.preventDefault();
                playOrPause();
                break;
            default:
                break;
        }
    }
};

function handleDirection(keyCode){
	var handled = true;
	if (keyCode == VK_DOWN) {
	    switch(document.activeElement.id) {
	        	case "item_insideVideo_0":
				document.getElementById("item_insideVideo_3").focus();
				break;
			case "item_insideVideo_1":
       		    		document.getElementById("item_insideVideo_4").focus();
		       		break;
			case "item_insideVideo_2":
				document.getElementById("item_insideVideo_5").focus();
				break;
			case "item_insideVideo_3":
				document.getElementById("item_insideVideo_6").focus();
				break;
			case "item_insideVideo_4":
				document.getElementById("item_insideVideo_7").focus();
				break;
			case "item_insideVideo_5":
				document.getElementById("item_insideVideo_8").focus();
				break;
			default:
				handled = false;
			    break;
		}
	} else if (keyCode == VK_UP) {
		 switch(document.activeElement.id) {
			case "item_insideVideo_3":
				document.getElementById("item_insideVideo_0").focus();
				break;
			case "item_insideVideo_4":
				document.getElementById("item_insideVideo_1").focus();
				break;
			case "item_insideVideo_5":
				document.getElementById("item_insideVideo_2").focus();
				break;
			case "item_insideVideo_6":
				document.getElementById("item_insideVideo_3").focus();
				break;
			case "item_insideVideo_7":
				document.getElementById("item_insideVideo_4").focus();
				break;
			case "item_insideVideo_8":
				document.getElementById("item_insideVideo_5").focus();
				break;
			default:
				handled = false;
			    break;
		}
	} else if (keyCode == VK_LEFT) {
		switch(document.activeElement.id) {
			case "item_insideVideo_1":
				document.getElementById("item_insideVideo_0").focus();
				break;
			case "item_insideVideo_2":
				document.getElementById("item_insideVideo_1").focus();
				break;
			case "item_insideVideo_4":
				document.getElementById("item_insideVideo_3").focus();
				break;
			case "item_insideVideo_5":
				document.getElementById("item_insideVideo_4").focus();
				break;
			case "item_insideVideo_7":
				document.getElementById("item_insideVideo_6").focus();
				break;
			case "item_insideVideo_8":
				document.getElementById("item_insideVideo_7").focus();
				break;
			default:
				handled = false;
			    break;
		}
	} else if (keyCode == VK_RIGHT) {
		switch(document.activeElement.id) {
			case "item_insideVideo_0":
				document.getElementById("item_insideVideo_1").focus();
				break;
			case "item_insideVideo_1":
				document.getElementById("item_insideVideo_2").focus();
				break;
			case "item_insideVideo_3":
				document.getElementById("item_insideVideo_4").focus();
				break;
			case "item_insideVideo_4":
				document.getElementById("item_insideVideo_5").focus();
				break;
			case "item_insideVideo_6":
				document.getElementById("item_insideVideo_7").focus();
				break;
			case "item_insideVideo_7":
				document.getElementById("item_insideVideo_8").focus();
				break;
			default:
				handled = false;
			    break;
		}
	} 
	
	return handled;
}