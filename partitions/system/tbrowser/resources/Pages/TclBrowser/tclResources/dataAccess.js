var dataAccess = new DataAccess("/data/tbrowser/config/property.ini");
var history = "";
var favorite = "";
var currentShowPageId = 0;
var bookmarkLength = 0;
var maxLength = 10;
function setProperty(key, value) {
    console.log("---setProperty--key = " + key + " value = " + value);
    dataAccess.set(key, value);
    dataAccess.store();
}

function getProperty(key) {
    console.log("---getProperty--key = " + key);
    var ret = "";
    ret = dataAccess.get(key);
    //console.log("---getProperty--ret = "+ret);
    return ret;
}
/*添加一个json格式的数据，添加之前应先判断是否已经存在
 key 目前为history，favorite
 */
function addData(key, jsonOject) {
    console.log("------addData-----key = " + key + "  jsonOject=" + jsonOject);
    var collections = getProperty(key);
    console.log("------addData-----collections =  " + collections);
    if (collections == null) {
        var collectionStr = "[" + JSON.stringify(jsonOject) + "]";
        console.log("-------addData---collectionStr=" + collectionStr);
        setProperty(key, collectionStr);
    } else { //添加到原有的json字符串里
	var jsonCollections;
	try{
		jsonCollections = JSON.parse(collections);
	}catch(err){
		console.log("JSON.parse error = "+err);
		setProperty(key, "[]");
		return;
	}
	
        jsonCollections.push(jsonOject);
        var jsonCollectionsStr = JSON.stringify(jsonCollections);
        console.log("-------addData---jsonCollectionsStr=" + jsonCollectionsStr);
        setProperty(key, jsonCollectionsStr);
    }
}
/*删除一个json格式的数据
key 目前为history，favorite
*/
function removeData(key, jsonOject) {
    console.log("[js]------removeData---key = " + key);
    var ret = false;
    var collections = getProperty(key);
    console.log("[js]------removeData---collections = " + collections);
    if (collections != null) {	
	var jsonCollections;
	try{
		jsonCollections = JSON.parse(collections);
	}catch(err){
		console.log("JSON.parse error = "+err);
		setProperty(key, "[]");
		return;
	}
		
        for (var i = 0; i < jsonCollections.length; i++) {
            var json = jsonCollections[i];

            if (json != null) {
                console.log("[js]------removeData---json.url = " + json.url + " json.icon = " + json.icon + " json.title = " + json.title);

                var equal = true; //假设bookmarkJson和json完全相同，即可以删除该bookmarkJson
                for (var keys in json) {
                    if (json[keys] != jsonOject[keys]) {
						equal = false;
						break;
					}
                }
                if (equal) {
                    delete jsonCollections[i];
                    console.log("[js]------removeData---i = " + i);
                    ret = true;
                }
            }

        }
        var newJsonStr = "[]";
        var newJson = JSON.parse(newJsonStr);

        for (var i = 0; i < jsonCollections.length; i++) {
            var json = jsonCollections[i];
            if (json != null) {
                newJson.push(json);
            }
        }
        newJsonStr = JSON.stringify(newJson);
        console.log("[js]------removeData---newJsonStr = " + newJsonStr);
        setProperty(key, newJsonStr);

        if (!ret) {
            console.log("------removeData---还未收藏该jsonOject对象---");
        }
    } else {
        console.log("------removeData---还未收藏key对象---");
    }
    return ret;
}

function isDataExit(jsonArray, jsonOject) {
    var ret = false;
    for (var i = 0; i < jsonArray.length; i++) {
        var json = jsonArray[i];
        if (json != null) {
            var equal = true;
            for (var keys in json) {
                if (json[keys] != jsonOject[keys]) {
                    equal = false;
                    break;
                }
            }
            if (equal) {
                ret = true;
                break;
            }
        }
    }
    return ret;
}

function showData(key, param, showPageId) {
    var key = key;
    var param = param;
    console.log("[js]---------showData()------ key = " + key);
    var ul = document.getElementById("homePopupBox_ul");
    var t = ul.childNodes.length;
    for (var i = 0; i < t; i++) //先删除原有的节点，重新创建
    {
        ul.removeChild(ul.childNodes[0]);
    }
    var bookmarks = getProperty(key); //得到收藏的网址 favorite or history
    console.log("[js]---------showData()-----bookmarks = " + bookmarks);

    var hasRecord = false;
    currentShowPageId = showPageId;
    console.log("[js]------wuyuqi:showPageId:" + showPageId);

    var bookmarkJsons;
    bookmarkLength = 0;
    if (bookmarks != null) {
	try{
		bookmarkJsons = JSON.parse(bookmarks);
	}catch(err){
		console.log("JSON.parse error = "+err);
		setProperty(key, "[]");
		return;
	}
		
        if (bookmarkJsons.length != 0) {
            bookmarkLength = bookmarkJsons.length;
            hasRecord = true;
        }
    }
    if (hasRecord) {
        var startRecord = (showPageId * maxLength < bookmarkLength) ? showPageId * maxLength: 0;
        var endRecord = ((startRecord + maxLength) > bookmarkLength) ? bookmarkLength: (startRecord + maxLength);
        for (var i = startRecord; i < endRecord; i++) {
            var data_reminder = 'shouldChange';
            var json = bookmarkJsons[i];
            console.log("[js]---------showData()------json" + json);
            if (json != null) {
                console.log("[js]---------showData()-------json.url=" + json.url);
                var li = document.createElement("li");
                if (param) {
                    li.className = "homePopupBox_ul_delete";
                    if (i == endRecord - 1) {
                      console.log("[js]---------showData()---aaa----json.title=" + json.title);
                      var str_title = json.title;
                      if(json.title.indexOf("'") >= 0){
                        str_title = json.title.replace(/'/g, '&apos;');
                        console.log("[js]---------showData()---aaa----str_title=" + str_title);
                      }

                      li.innerHTML = "<a href=\"javascript:void(0);\" class=\"not_move_right_left\" id='homePopupBox_bottom_ul_bottom' onmouseover='reStartTimer()' onmounseout='reStartTimer()' onclick='onClickRemoveData(\"" + key + "\",\"" + json.icon + "\",\"" + str_title + "\",\"" + json.url + "\")'><img src=./tclResources/img_1280/remove.png /></a><img src=" + json.icon + "  width=\"36\" height=\"36\" /><span>" + json.url + "</span>";

                      console.log("[js]---------showData()------- li.innerHTML=" +  li.innerHTML);
                    } else {
                      console.log("[js]---------showData()-------json.title=" + json.title);
                      var str_title = json.title;
                      if(json.title.indexOf("'") >= 0){
                        str_title = json.title.replace(/'/g,'&apos;');
                        console.log("[js]---------showData()-------str_title=" + str_title);
                      }

                      li.innerHTML = "<a href=\"javascript:void(0);\" class=\"not_move_right_left\" id='homePopupBox_bottom_li_"+i+"' onmouseover='reStartTimer()' onmounseout='reStartTimer()' onclick='onClickRemoveData(\"" + key + "\",\"" + json.icon + "\",\"" + str_title + "\",\"" + json.url + "\")'><img src=./tclResources/img_1280/remove.png /></a><img src=" + json.icon + "  width=\"36\" height=\"36\" /><span>" + json.url + "</span>";
                      console.log("[js]---------showData()------- li.innerHTML=" +  li.innerHTML);
                    }
                } else {
                    console.log("------------json.url = " + json.url);
                    li.className = "homePopupBox_ul_show";
                    if (i == endRecord - 1) {
                        li.innerHTML = "<a href=\"javascript:void(0);\" id='homePopupBox_bottom_ul_bottom' onmouseover='reStartTimer()' onmouseout='reStartTimer()' onclick='OpenUrl(\"" + json.url + "\")' class=\"not_move_right_left\"><img src=" + json.icon + " />" + json.url + "</a>";
                    } else {
                        li.innerHTML = "<a href=\"javascript:void(0);\" id='homePopupBox_bottom_li_"+i+"' onmouseover='reStartTimer()' onmouseout='reStartTimer()' onclick='OpenUrl(\"" + json.url + "\")' class=\"not_move_right_left\"><img src=" + json.icon + " />" + json.url + "</a>";
                    }
                }
                ul.appendChild(li);
            }
        }

        var container = document.getElementById('homePopupBox_bottom');
        var containerName = container.className;
        var containerLength = container.childNodes.length;
        console.log("-----------containerLength =" + containerLength);
        if (bookmarkLength > 10) {
            if (containerLength == 0) {
                var div = document.createElement("div");
                div.innerHTML = "<a href='javascript:void(0);' class='homePopupBox_bottom_a not_move_down_left'  id='homePopupBox_bottom_Pre'><span>Previous</sapn></a><a href='javascript:void(0);' class='homePopupBox_bottom_a not_move_down_right' id='homePopupBox_bottom_Next'><span>Next</sapn></a>";
                container.appendChild(div);
                document.getElementById('homePopupBox_bottom_Pre').style.color = 'gray';
                document.getElementById('homePopupBox_bottom_Next').style.color = '#ffffff';
                document.getElementById("homePopupBox_bottom_Pre").addEventListener("click", handleOnPopboxClick, false);
                document.getElementById("homePopupBox_bottom_Next").addEventListener("click", handleOnPopboxClick, false);
                changeClassName(container, containerName, 'homePopupBox_bottom_none', 'homePopupBox_bottom_more');
            } else {
                if (showPageId > 0) {
                    document.getElementById('homePopupBox_bottom_Pre').style.color = '#ffffff';
                } else {
                    document.getElementById('homePopupBox_bottom_Pre').style.color = 'gray';
                }
                if ((showPageId + 1) * maxLength > bookmarkLength) {
                    document.getElementById('homePopupBox_bottom_Next').style.color = 'gray';
                } else {
                    document.getElementById('homePopupBox_bottom_Next').style.color = '#ffffff';
                }
            }
        } else {
            for (var i = 0; i < containerLength; i++) {
                container.removeChild(container.childNodes[0]);
            }
            changeClassName(container, containerName, 'homePopupBox_bottom_more', 'homePopupBox_bottom_none');
        }

    } else {
        var container = document.getElementById('homePopupBox_bottom');
        var containerName = container.className;
        var containerLength = container.childNodes.length;
        console.log("-----------containerLength =" + containerLength);
        for (var i = 0; i < containerLength; i++) {
            container.removeChild(container.childNodes[0]);
        }
        changeClassName(container, containerName, 'homePopupBox_bottom_more', 'homePopupBox_bottom_none');
    }
    if (hasRecord == true) {
        document.getElementById("a_Edit_Lineup").className = "not_move_right_left";
        document.getElementById("a_Favorite").className = "not_move_left";
        document.getElementById("a_History").className = "not_move_right";
        document.getElementById("homePopupBox_edit").style.display = "block";
        document.getElementById("homePopupBox_no_available").style.display = "none";
    } else {

        document.getElementById("a_Edit_Lineup").className = "not_move_right_down_left";
        document.getElementById("a_Favorite").className = "not_move_down_left";
        document.getElementById("a_History").className = "not_move_right_down";

        document.getElementById("homePopupBox_no_available").style.display = "block";
        document.getElementById("homePopupBox_edit").style.display = "none";
        if (key == "favorite") {
            document.getElementById("history_favorite").innerHTML = "favorite";
        } else {
            document.getElementById("history_favorite").innerHTML = "history";
        }
    }
}
//为Element替换和添加className
function changeClassName(element, className, oldClass, newClass) {
    if (null == element) {
        console.log("function changeClassName null ==  element=null");
        return;
    }
    //如果oldClass不为空，完成替换oldClass
    if (null != className && null != oldClass && className.match(oldClass) != null) {
        if (null == newClass) element.className = className.replace(oldClass, '');
        else element.className = className.replace(oldClass, newClass);
    }
    //如果newClass不为空，要检验newClass是否已经添加
    if (null != newClass && (null == className || className.match(newClass) == null)) {
        element.className = className + ' ' + newClass;
    }
}

function onClickRemoveData(key, icon, title, url) {
    event.stopPropagation(); //阻止事件抛给body造成toolbar隐藏
    reStartTimer();
    var json = {
        "title": title,
        "url": url,
        "icon": icon
    };
    var mode = getProperty("Pointer");
    removeData(key, json);
    if (currentShowPageId * maxLength < bookmarkLength) {
        showData(key, true, currentShowPageId);
    } else {
        showData(key, true, currentShowPageId - 1);
    }
    changeCollectImg();
    if (currentShowDataKey == "favorite") {
        if (mode && mode == "true") {
            document.getElementById("a_Favorite").style.color = "#FFFFFF"; //°×é?
            document.getElementById("a_Favorite").focus();
        }
    } else {
        if (mode && mode == "true") {
            document.getElementById("a_History").style.color = "#FFFFFF"; //°×é?
            document.getElementById("a_History").focus();
        }
    }
    return false;
}