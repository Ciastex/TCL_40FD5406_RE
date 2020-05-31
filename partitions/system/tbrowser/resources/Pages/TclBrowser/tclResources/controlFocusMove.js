document.onkeydown = keyDownProcess;
document.onkeyup = keyUpProcess;
document.onsystemevent = systemEventProcess;
var VK_LEFT = 37;
var VK_UP = 38;
var VK_RIGHT = 39;
var VK_DOWN = 40;
var VK_RETURN = 8;
var VK_EXIT = 120;
function systemEventProcess(evt) {
    var keyCode = evt.keyCode || evt.which || evt.eventCode;
    console.log("------------systemEventProcess-------keyCode = "+keyCode);
    if (keyCode == 1000) { //1000打开地址栏
        removeDiv();
        showToolbar();
        reStartTimer();
        canGoBackorForward();
        changeCollectImg();
        //dataAccess = new DataAccess("/data/tbrowser/config/property.ini");
        console.log("-------------here----------systemEventProcess-------");
        document.getElementById("toolbar_input").focus(); //输入框获得焦点
        console.log("-------------here----------systemEventProcess-------");
        return;
    } else if (keyCode == 1001) { //1001 打开输入法
        document.getElementById("inputLi").style.background = "url('./tclResources/img_1280/input_click.png')";

        showPopupBox("inputPopupBox");
        initInputPrompt();
        if (timer != null) {
          clearTimeout(timer);
        }
    } else if (keyCode == 1002) { //输入法中按enter键直接调用onClickGo()
        onClickGo();
    } else if (keyCode == 2000) { //创建info提示框
        createDiv();
    } else if (keyCode == 2001) { //显示loading图标
        document.getElementById("loading").style.visibility = "visible";
    } else if (keyCode == 2002) { //隐藏loading图标
        document.getElementById("loading").style.visibility = "hidden";
    }
}
function keyUpProcess(evt) {
    reStartTimer(); //重新定时关闭地址栏
    /*处理焦点移上已收藏的星号需要加白边 start*/
    if (document.activeElement.id == "a_Star") {
        var img_src = document.getElementById("img_collect").src;
        console.log("------moveFocus---img_src = " + img_src);
        var change = (img_src.match("star.png") == null) ? false: true;
        console.log("------moveFocus---change = " + change);
        if (change) {
            document.getElementById("img_collect").src = "./tclResources/img_1280/star1.png";
        }
    }
    if (document.activeElement.id == "toolbar_input") {
        var keyCode = event.keyCode || event.which;
        if (keyCode == 13 || keyCode == 8) { //在软件盘点击了ok，或者删除了输入框里的内容	
            initInputPrompt();
        }
    }
}

function keyDownProcess(evt) {
    var keycode = evt.which || evt.keyCode;
    var pageId = getMainPageId();
    var ret = true;
    console.log("controlFocusMove.js------keyDownProcess keycode = " + keycode);
    switch (keycode) {
    case VK_RETURN:
        //return
        var home_visibility = document.getElementById("homePopupBox").style.visibility;
        var more_visibility = document.getElementById("morePopupBox").style.visibility;
        var about_visibility = document.getElementById("aboutPopupBox").style.visibility;
        var input_visibility = document.getElementById("inputPopupBox").style.visibility;
        var input = document.getElementById("toolbar_input");
        if (! (input == document.activeElement)) {
            if (about_visibility == "visible") {
                document.getElementById("aboutPopupBox").style.visibility = "hidden";
                document.getElementById("a_About").blur();
                document.getElementById("more").src = "./tclResources/img_1280/more.png";
                document.getElementById("a_Menu").focus();
            } else if (home_visibility == "visible") {
                document.getElementById("homePopupBox").style.visibility = "hidden";
                document.getElementById("home").src = "./tclResources/img_1280/bookmark.png";
                document.getElementById("a_Home").focus();
            } else if (more_visibility == "visible") {
                document.getElementById("morePopupBox").style.visibility = "hidden";
                document.getElementById("more").src = "./tclResources/img_1280/more.png";
                document.getElementById("a_Menu").focus();
            } else if (input_visibility == "visible") {
                document.getElementById("inputPopupBox").style.visibility = "hidden";
                document.getElementById("toolbar_input").focus();
            } else {
                var activePageId = Util.getActivePageId();
                var mainPageId = Util.getMainPageId();
                if (activePageId == mainPageId) {
                    onClickExit();
                } else {
                    closeToolBar();
                }
            }
        }
        break;
    case VK_LEFT:
        //left
    case VK_UP:
        //up
    case VK_RIGHT:
        //right
    case VK_DOWN:
        //down
        if (keycode == VK_DOWN) {
            var home_visibility = document.getElementById("homePopupBox").style.visibility;
            var more_visibility = document.getElementById("morePopupBox").style.visibility;
            var about_visibility = document.getElementById("aboutPopupBox").style.visibility;
            var input_visibility = document.getElementById("inputPopupBox").style.visibility;
            if (home_visibility == "hidden" && more_visibility == "hidden" && about_visibility == "hidden" && input_visibility == "hidden") {
                closeToolBar();
            }
        }
        ret = moveFocus(keycode);
        break;
    case VK_EXIT:
        //exit
        onClickExit();
        break;
    default:
        break;
    }
    console.log("controlFocusMove.js------keyDownProcess ret = " + ret);
    return ret;
}
function moveFocus(keycode) {
    console.log("------moveFocus---keycode = " + keycode);
    var activeElement = document.activeElement;
    console.log("------moveFocus---activeElement.id = " + activeElement.id);
    console.log("------moveFocus---activeElement.className = " + activeElement.className);

    /*处理焦点移上已收藏的星号需要加白边 start*/
    if ((activeElement.id == "a_Go" && keycode == VK_RIGHT) || (activeElement.id == "a_Home" && keycode == VK_LEFT)) {
        var img_src = document.getElementById("img_collect").src;
        console.log("------moveFocus---img_src = " + img_src);
        var change = (img_src.match("star.png") == null) ? false: true;
        console.log("------moveFocus---change = " + change);
        if (change) {
            document.getElementById("img_collect").src = "./tclResources/img_1280/star1.png";
        }
    }
    if (activeElement.id == "a_Star" && keycode != VK_UP) {
        var img_src = document.getElementById("img_collect").src;
        console.log("------moveFocus---img_src = " + img_src);
        var change = (img_src.match("star1.png") == null) ? false: true;
        console.log("------moveFocus---change = " + change);
        if (change) {
            document.getElementById("img_collect").src = "./tclResources/img_1280/star.png";
        }
    }
    /*处理焦点移上已收藏的星号需要加白边 start*/
    /*处理a_Home的焦点移动 start*/
    if (activeElement.id == "a_Home") { //处理home移入移出焦点
        var home_visibility = document.getElementById("homePopupBox").style.visibility;
        if (keycode == VK_LEFT || keycode == VK_RIGHT) {
            if (home_visibility == "visible") {
                document.getElementById("homePopupBox").style.visibility = "hidden";
                home_visibility = "hidden";
            }
        }
        if (keycode == VK_DOWN || keycode == VK_LEFT || keycode == VK_RIGHT) {
            if (home_visibility == "visible") {
                document.getElementById("home").src = "./tclResources/img_1280/bookmark1.png";
            } else {
                document.getElementById("home").src = "./tclResources/img_1280/bookmark.png";
            }
        }
    }
    
    if (activeElement.id == "a_Edit_Lineup") { //处理a_Edit_Lineup向下移动焦点
        if (keycode == VK_DOWN) {
            console.log("activeElement.id == a_Edit_Lineup.li[0] focus");
            var ul = document.getElementById("homePopupBox_ul");
            var li = ul.getElementsByTagName("li");
            if (li.length > 0) {
                document.getElementById("a_Edit_Lineup").blur();
                li[0].getElementsByTagName("a")[0].focus();
                return false;
            }
        }
    }
    if (activeElement.id.match("homePopupBox_bottom_li_")) { //处理a_Edit_Lineup向下移动焦点，这里只处理了记录的前9个（0-8）最后一个是单独处理的
      var index = activeElement.id.replace(/[^0-8]/ig,"");
      var ul = document.getElementById("homePopupBox_ul");
      var li = ul.getElementsByTagName("li");
      console.log("----index = "+index+", li.length = "+li.length);
      if (keycode == VK_UP) {
        if (index > 0) {
          li[index].getElementsByTagName("a")[0].blur();
          li[--index].getElementsByTagName("a")[0].focus();
          return false;
        }
      }
      if (keycode == VK_DOWN) {
        if (index < li.length - 1) {
          li[index].getElementsByTagName("a")[0].blur();
          li[++index].getElementsByTagName("a")[0].focus();
          return false;
        }
      }
    }
    if (activeElement.id == "homePopupBox_bottom_ul_bottom") {  //单独处理最后一个记录
      if (keycode == VK_DOWN){
        document.getElementById("homePopupBox_bottom_ul_bottom").blur();
		document.getElementById("homePopupBox_bottom_Next").focus();		
		return false;
	  }
      if (keycode == VK_UP) {
        var ul = document.getElementById("homePopupBox_ul");
        var li = ul.getElementsByTagName("li");
        if (li.length > 2) {
          document.getElementById("homePopupBox_bottom_ul_bottom").blur();
          li[li.length - 2].getElementsByTagName("a")[0].focus();
          return false;
        }
      }
    }
    if (currentShowDataKey == "favorite") {
        if (activeElement.id == "a_Favorite") {
            if (keycode == VK_UP || keycode == VK_DOWN || keycode == VK_RIGHT) {
                document.getElementById("a_Favorite").style.color = "#FF7F00"; //橘色
            }
        } else {
            if ((activeElement.id == "a_History" && keycode == VK_LEFT) || (activeElement.id == "a_Edit_Lineup" && keycode == VK_UP)) {
                document.getElementById("a_Favorite").style.color = "#FFFFFF"; //白色
            }
        }
    } else {
        if (activeElement.id == "a_History") {
            if (keycode == VK_UP || keycode == VK_DOWN || keycode == VK_LEFT) {
                document.getElementById("a_History").style.color = "#FF7F00"; //橘色
            }
        } else {
            if ((activeElement.id == "a_Favorite" && keycode == VK_RIGHT) || (activeElement.id == "a_Home" && keycode == VK_DOWN)) {
                document.getElementById("a_History").style.color = "#FFFFFF"; //白色
            }
        }
    }

    if (activeElement.id == "a_Favorite" || activeElement.id == "a_History") { //处理向上和向下移动焦点设置
        console.log("---------activeElement.id = " + activeElement.id);
        if (keycode == VK_UP) {
            console.log("---------do not use default focus move-----");
            document.getElementById("home").src = "./tclResources/img_1280/bookmark.png";
            document.getElementById("a_Favorite").blur();
            document.getElementById("a_History").blur();
            document.getElementById("a_Home").focus();
            return false;
        }
        if (keycode == VK_DOWN) {
            var down = (activeElement.className.match("down") == null) ? true: false;
            console.log("---------activeElement.className = " + activeElement.className + "  down = " + down);
            if (down) {
                console.log("---------do not use default focus move-----");
                document.getElementById("a_Favorite").blur();
                document.getElementById("a_History").blur();
                document.getElementById("a_Edit_Lineup").focus();
            } else { //该else为临时解决方法，不清除为什么不能移动焦点会变色
                if (activeElement.id == "a_Favorite" && currentShowDataKey == "favorite") {
                    document.getElementById("a_Favorite").style.color = "#FFFFFF"; //白色
                }
                if (activeElement.id == "a_History" && currentShowDataKey == "history") {
                    document.getElementById("a_History").style.color = "#FFFFFF"; //白色
                }
            }
            return false;
        }
    }

    /*处理a_Home的焦点移动 end*/

    /*处理a_Menu的焦点移动 start*/
    if (activeElement.id == "a_Menu") {
        var more_visibility = document.getElementById("morePopupBox").style.visibility;
        if (keycode == VK_LEFT) {
            if (more_visibility == "visible") {
                document.getElementById("morePopupBox").style.visibility = "hidden";
                more_visibility = "hidden";
            }
        }
        if (keycode == VK_DOWN || keycode == VK_LEFT) {
            if (more_visibility == "visible") {
                document.getElementById("more").src = "./tclResources/img_1280/more1.png";
            } else {
                document.getElementById("more").src = "./tclResources/img_1280/more.png";
            }
        }
        if (keycode == VK_DOWN && document.getElementById("morePopupBox").style.visibility == "visible") {
            document.getElementById("a_Menu").blur();
            document.getElementById("a_About").focus();
            return false;
        }
    }
    if (activeElement.id == "a_About" && keycode == VK_UP) {
        console.log("---------do not use default focus move-----");
        document.getElementById("more").src = "./tclResources/img_1280/more.png";
        document.getElementById("a_About").blur();
        document.getElementById("a_Menu").focus();
        return false;
    }

    if (activeElement.id == "a_About" && keycode == VK_DOWN) {
        console.log("---------do not use default focus move-----");
        document.getElementById("a_About").blur();
        document.getElementById("a_Pointer").focus();
        return false;
    }

    if (activeElement.id == "a_Pointer" && keycode == VK_DOWN) {
        console.log("---------do not use default focus move-----");
        document.getElementById("a_Pointer").blur();
        document.getElementById("a_Exit").focus();
        return false;
    }

    /*处理a_Menu的焦点移动 end*/

    /*处理homePopupBox_bottom翻页焦点移动 start*/
    if (activeElement.id == "homePopupBox_bottom_Pre" && keycode == VK_UP) {
        console.log("---------do not use default focus move-----");
        document.getElementById("homePopupBox_bottom_Pre").blur();
        document.getElementById("homePopupBox_bottom_ul_bottom").focus();
        return false;
    }

    if (activeElement.id == "homePopupBox_bottom_Next" && keycode == VK_UP) {
        console.log("---------do not use default focus move-----");
        document.getElementById("homePopupBox_bottom_Next").blur();
        document.getElementById("homePopupBox_bottom_ul_bottom").focus();
        return false;
    }
    /*处理homePopupBox_bottom翻页焦点移动 end*/

    var activeElementNotMove = activeElement.className;
    var up = (activeElementNotMove.match("up") == null) ? true: false; //false 代表不能向上移动
    var right = (activeElementNotMove.match("right") == null) ? true: false;
    var down = (activeElementNotMove.match("down") == null) ? true: false;
    var left = (activeElementNotMove.match("left") == null) ? true: false;

    if (!up && keycode == VK_UP) {
        console.log("---------do not use default focus move-----");
        return false;
    }
    if (!right && keycode == VK_RIGHT) {
        console.log("---------do not use default focus move-----");
        return false;
    }
    if (!down && keycode == VK_DOWN) {
        console.log("---------do not use default focus move-----");
        return false;
    }
    if (!left && keycode == VK_LEFT) {
        console.log("---------do not use default focus move-----");
        return false;
    }
    console.log("----use default focus move-----");
    return true;
}