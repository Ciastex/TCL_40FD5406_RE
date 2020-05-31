TUtil.println("---run js_remove_default_keyevent.js---");

document.onkeydown = focusManagerKeydown;

function focusManagerKeydown(e)
{
  var key = translateKeycode(e);
  var activeElement = document.activeElement;
  if (key == 'Enter' && !!activeElement.exec) {
    console.log("focusManagerKeydown---do not handle Enter,because page will handle click event");
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
  return true;
}