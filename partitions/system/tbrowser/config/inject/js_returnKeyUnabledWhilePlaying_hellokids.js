
function ignoreKeyPress(e) {
	var testUrl= decodeURIComponent(location.href);
    var testN=testUrl.indexOf("?");
	if(testN>0){
   switch(e.keyCode) {
		case VK_LEFT:
		case VK_RIGHT:
		case VK_DOWN:
		case VK_UP:
		case VK_ENTER:
		    e.preventDefault();
		    return false;
		break;

		case VK_RED:
		case VK_GREEN:
		case VK_YELLOW:
		    e.preventDefault();
		    return false;
		break;

		case VK_BLUE:
		    e.preventDefault();
		    return false;
		break;  
  
		case VK_BACK:
		    return false;
	    break;

        case VK_PLAY:
        case VK_PAUSE:
        case VK_STOP:
        case VK_FAST_FWD:
        case VK_REWIND:
		case VK_BACK_SPACE:
            e.preventDefault();
        break;
    }
	return;
	}
    if(document.getElementById('loadingDiv').style.display == 'block' || blockRemoteControl == true || fxm.isBlocked()){
        e.preventDefault();
        return false;
    }
    
   switch(e.keyCode) {
		case VK_LEFT:
		case VK_RIGHT:
		case VK_DOWN:
		case VK_UP:
		case VK_ENTER:
            e.preventDefault();
            return false;
		break;
        
		case VK_RED:
		case VK_GREEN:
		case VK_YELLOW:
            e.preventDefault();
            return false;
		break;
        
		case VK_BLUE:
            e.preventDefault();
            return false;
		break;
        
        case VK_BACK:
        	return false;
		break;
        case VK_PLAY:
        case VK_PAUSE:
        case VK_STOP:
        case VK_FAST_FWD:
        case VK_REWIND:
        case VK_BACK_SPACE:   
            e.preventDefault();
        break;
    }
}

function handleRemoteButtons(e) {
    var testUrl= decodeURIComponent(location.href);
    var testN=testUrl.indexOf("?");
    if(testN>0){
    switch(e.keyCode) {
		case VK_ENTER:
		case VK_LEFT:
		case VK_RIGHT:
		case VK_UP:
		case VK_DOWN:
		case VK_GREEN:
		case VK_YELLOW:
		case VK_BACK_SPACE:
	        handleNavigationButtons(e);
    	break;
        
		case VK_INFO:
		    e.preventDefault();
		    if(currentView == 'portal') 
				location.href='/portal/imprint';
		    return false;
		break;
        
	    default:
		    e.preventDefault();
		    return false;
		break;
    }
    return;	
	}
    showNavigation();
    switch(e.keyCode) {
		case VK_ENTER:
		case VK_LEFT:
		case VK_RIGHT:
		case VK_UP:
		case VK_DOWN:
		case VK_GREEN:
		case VK_YELLOW:
		case VK_STOP:
		case 404:
		case 71:
		case VK_BACK_SPACE:
			if(!blockRemoteKeys)
	        	handleNavigationButtons(e);
        break;
        
		case VK_INFO:
		    e.preventDefault();
		    if(currentView == 'portal') location.href='/portal/imprint';
		    return false;
		break;
    	default:
		    e.preventDefault();
		    return false;
		break;
    }
}

function handleNavigationButtons(e){
	var testUrl= decodeURIComponent(location.href);
    var testN=testUrl.indexOf("?");
    if(testN>0){
    switch(e.keyCode) {
		case VK_ENTER:
            fxm.currNav.click();
        break;
	
		case VK_LEFT:
            fxm.currNav.moveLeft();
			setDescription();
        break;
        
        case VK_RIGHT:
            fxm.currNav.moveRight();
			setDescription();			
        break;
        
		case VK_UP:
            fxm.currNav.moveUp();
			setDescription();
		break;
        
        case VK_DOWN:
            fxm.currNav.moveDown();
			setDescription();
        break;
        
		case VK_GREEN:        
		case 502:
        case VK_YELLOW:
		case VK_BACK_SPACE:
            history.back();
        break;
    }
	return;
	}
  
  if(document.getElementById('loadingDiv').style.display == 'block'){
        e.preventDefault();
        return false;
    }
    switch(e.keyCode) {
		case VK_ENTER:
            fxm.currNav.click();
        break;

		case VK_LEFT:
            fxm.currNav.moveLeft();
        break;

        case VK_RIGHT:
            fxm.currNav.moveRight();
        break;

		case VK_UP:
            fxm.currNav.moveUp();
		break;

        case VK_DOWN:
            fxm.currNav.moveDown();
        break;

		case VK_STOP:
		case VK_GREEN:
		case 502:
        case VK_YELLOW:
		case VK_BACK_SPACE:
            history.back();
        break;
    }
}
document.onkeydown = handleRemoteButtons;
document.addEventListener("keypress", ignoreKeyPress, true);


