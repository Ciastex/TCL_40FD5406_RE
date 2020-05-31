/**
 * Created by lqt on 2017/4/5.
 */
var historyWords = [top.recentPageWords[4],top.videosandappsWord[0],top.recentPageWords[0],top.videosandappsWord[2],top.videosandappsWord[0],top.videosandappsWord[3],top.videosandappsWord[0],top.recentPageWords[8],top.recentPageWords[9]];
var deleteHistoryNote = top.deleteHistoryNote;
var done = top.done;
var cancel= top.cancel;
function AppHistory() {

    this.innerHeight = 310;
    this.outerHeight = 431;
    this.leftWidth = 253;//向右移动时，移动的距离
    this.currentArea = 'today';

    this.items_1_index = 0;//第一组，当前焦点的位置
    this.items_2_index = 0;//第二组，当前焦点的位置

    this.borderPostion;

    this.domObj;

    this.itemDivs_1;
    this.itemDivs_2;

    this.deleteType = 'deleteOne';

    this.init();
    return this;
}
AppHistory.prototype = {
    init:function () {
        var border = document.getElementById('animationBorder');
        this.borderPostion =  border.offsetLeft;
        //1、初始化数据（根据localStorage数据）
        this.initData();
        //2、根据界面创建dom树（计算得到焦点的关系）

        this.buildDom();
        //3、初始化焦点的位置
        top.g_temp="homePage";
        //4、绑定一些事件
        this.bound();
    },
    initData:function () {
        var appsHistory = JSON.parse(localStorage.getItem("history"));

        console.log(appsHistory);

        var item_ul_1 = document.getElementById('item_ul_1');
        var item_ul_2 = document.getElementById('item_ul_2');

        var number = document.getElementById('number');
        number.innerHTML = appsHistory.historyItem?appsHistory.historyItem.length:"0";

        //删除所有应用 今天的
        if(item_ul_1.getElementsByClassName('templateLi')[0]){
            var childLen = item_ul_1.getElementsByClassName('templateLi').length;
            for(var k = childLen-1;k>=0;k--){
                if(item_ul_1.getElementsByClassName('templateLi')[k]){
                    item_ul_1.removeChild(item_ul_1.getElementsByClassName('templateLi')[k]);
                }
            }
        }

        //删除所有应用 更早的
        if(item_ul_2.getElementsByClassName('templateLi')[0]){
            var childLen = item_ul_2.getElementsByClassName('templateLi').length;
            for(var k = childLen-1;k>=0;k--){
                if(item_ul_2.getElementsByClassName('templateLi')[k]){
                    item_ul_2.removeChild(item_ul_2.getElementsByClassName('templateLi')[k]);
                }
            }
        }

        for(var i=0,len = appsHistory.historyItem.length;i<len;i++){

            var year = appsHistory.historyItem[i].year;
            var month = appsHistory.historyItem[i].month;
            var day = appsHistory.historyItem[i].day;

            var time = new Date(year+"-"+month+"-"+day).getTime();
            var now  = new Date(new Date().Format("yyyy-MM-dd")).getTime();


            var templateDiv = document.getElementById('templateDiv').getElementsByTagName('li')[0].cloneNode(true);
            //1、设置应用的海报
            templateDiv.getElementsByClassName('itemPic_img')[0].src = appsHistory.historyItem[i].url;

            //2、设置应用的名字
            templateDiv.getElementsByClassName('itemName_span')[0].innerHTML = appsHistory.historyItem[i].title;

            //3、设置启动应用的参数
            templateDiv.getElementsByClassName('itemDiv')[0].setAttribute("appId", appsHistory.historyItem[i].vid);
            templateDiv.getElementsByClassName('itemDiv')[0].setAttribute("appPicUrl", appsHistory.historyItem[i].url);
            templateDiv.getElementsByClassName('itemDiv')[0].setAttribute("appTitle", appsHistory.historyItem[i].title);
            templateDiv.getElementsByClassName('itemDiv')[0].setAttribute("vSource", appsHistory.historyItem[i].source);

            templateDiv.setAttribute('id','item_1_'+i);

            if(time == now){
                item_ul_1.appendChild(templateDiv);
            }else if(time<now){
                item_ul_2.appendChild(templateDiv);
            }
        }
    },
    //2、根据界面创建dom树
    buildDom:function () {

        var root = document.querySelector("[data-role=root]");
        this.domObj = new CalculateFocus(root).getDom();

        this.itemDivs_1 = document.getElementById('items_content_1').getElementsByClassName('itemDiv');
        this.itemDivs_2   = document.getElementById('items_content_2').getElementsByClassName('itemDiv');

        var items_1_count = document.getElementById('items_1_count');
        items_1_count.innerHTML = this.domObj[0]?this.domObj[0].length:'0';

        var items_2_count = document.getElementById('items_2_count');
        items_2_count.innerHTML = this.domObj[1].length?this.domObj[1].length:'0';

        var deleteDiv = document.getElementById('deleteDiv');

        //如果今天没有应用的话
        if(this.domObj[0].length == 0){
            var items_1 = document.getElementById('items_1');//今天的块
            var items_2 = document.getElementById('items_2');//更早的块
            var items_1_top = items_1.style.marginTop;
            var border = document.getElementById('animationBorder');//焦点

            //1、整体向上移动
            if (deleteDiv.style.display == 'block' && this.currentArea == 'earlier')
            {
                //do noting
            }
            else
            {
                items_1.style.marginTop = parseInt(items_1_top.replace('px','')) - this.outerHeight + 'px';
            }
            this.currentArea = 'earlier';

            //2、焦点校正
            this.items_2_index = 0;

            this.borderPostion = (this.items_2_index%6)*(this.leftWidth) + 164;
            border.style.left = this.borderPostion  + "px";
        }
    },
    keyProcess_AppHistory:function (evt) {
        var keycode = evt.which;
        var border = document.getElementById('animationBorder');//焦点


        var items_content_1 = document.getElementById('items_content_1');//今天的内容
        var items_content_2 = document.getElementById('items_content_2');//更早的内容

        var items_content_1_top = items_content_1.style.marginTop;
        var items_content_2_top = items_content_2.style.marginTop;


        var items_1 = document.getElementById('items_1');//今天的块
        var items_2 = document.getElementById('items_2');//更早的块


        var items_1_top = items_1.style.marginTop;

        var deleteDiv = document.getElementById('deleteDiv');

        switch(keycode) {

            case VK_UP: // VK_UP = 38; 按上键：
                if (this.deleteType == 'deleteDialog'){
                    return;
                }
                if(deleteDiv.style.display == 'block'){
                    var delete_img = document.getElementById('delete_img');
                    delete_img.style.marginTop = '-51px';
                    this.deleteType = 'deleteOne';
                    break;
                }

                //焦点在今天的区域
                if(this.currentArea == 'today'){

                    //只有 区域内移动
                    if(parseInt(items_content_1_top.replace('px','')) + this.innerHeight<=0){

                        //1、整块 向下移动
                        items_content_1.style.marginTop = parseInt(items_content_1_top.replace('px','')) + this.innerHeight + 'px';

                        //2、定位焦点
                        this.items_1_index = this.items_1_index -6;

                    }
                }
                //焦点在更早的区域
                else if(this.currentArea == 'earlier'){

                    //区域内移动（如果）
                    if(parseInt(items_content_2_top.replace('px',''))<0){
                        //1、整块 向下移动
                        items_content_2.style.marginTop = parseInt(items_content_2_top.replace('px','')) + this.innerHeight + 'px';

                        this.items_2_index = this.items_2_index -6;
                    }
                    //区域间移动
                    else{

                        if(this.domObj[0].length>0){
                            //整体向下移动
                            items_1.style.marginTop = parseInt(items_1_top.replace('px','')) + this.outerHeight + 'px';
                            this.currentArea = 'today';

                            //校正焦点
                            this.items_1_index = this.domObj[0].length -1;
                            this.borderPostion = (this.items_1_index%6)*(this.leftWidth) + 164;
                            border.style.left = this.borderPostion  + "px";
                        }


                    }
                }

                break;
            case VK_DOWN://VK_DOWN = 40; 按下键：
                if (this.deleteType == 'deleteDialog'){
                    return;
                }
                if(deleteDiv.style.display == 'block'){
                    var delete_img = document.getElementById('delete_img');
                    delete_img.style.marginTop = '0px';
                    this.deleteType = 'deleteAll';
                    break;
                }

                if(this.currentArea == 'today'){


                    //区域内中移动
                    if(-(parseInt(items_content_1_top.replace('px','')) - this.innerHeight) < items_content_1.offsetHeight){
                        //1、整块 向上移动
                        items_content_1.style.marginTop = parseInt(items_content_1_top.replace('px','')) - this.innerHeight + 'px';

                        //2、焦点校正
                        this.items_1_index = this.items_1_index + 6;

                        if(this.items_1_index>=this.domObj[0].length){
                            this.items_1_index = this.domObj[0].length -1;
                        }
                        this.borderPostion = (this.items_1_index%6)*(this.leftWidth) + 164;
                        border.style.left = this.borderPostion  + "px";

                    }
                    //区域内间移动(从今天变成更早)
                    else if(this.domObj[1]&&this.domObj[1].length>0){
                        //1、整体向上移动
                        items_1.style.marginTop = parseInt(items_1_top.replace('px','')) - this.outerHeight + 'px';
                        this.currentArea = 'earlier';

                        //2、焦点校正
                        this.items_2_index = 0;

                        this.borderPostion = (this.items_2_index%6)*(this.leftWidth) + 164;
                        border.style.left = this.borderPostion  + "px";
                    }
                }else if(this.currentArea == 'earlier'){


                    //只有 区域内中移动
                    if(-(parseInt(items_content_2_top.replace('px','')) - this.innerHeight) < items_content_2.offsetHeight){
                        //1、整体向上移动
                        items_content_2.style.marginTop = parseInt(items_content_2_top.replace('px','')) - this.innerHeight + 'px';

                        //2、焦点校正
                        this.items_2_index = this.items_2_index + 6;

                        if(this.items_2_index>=this.domObj[1].length){
                            this.items_2_index = this.domObj[1].length -1;
                        }
                        this.borderPostion = (this.items_2_index%6)*(this.leftWidth) + 164;
                        border.style.left = this.borderPostion  + "px";
                    }
                }

                break;
            case VK_LEFT: // VK_LEFT = 37; 按左键
                if (this.deleteType == 'deleteDialog')
                {
                    var n = document.getElementById("deleteTips");
                    if(n.getAttribute("focusposition")==1)
                    {
                        n.setAttribute("focusposition",0);
                        // n.getElementsByClassName("dialogButton")[0].style.background = '#E11F1F';
                        // n.getElementsByClassName("dialogButton")[1].style.background = '#212025';
                        document.getElementById("dialogFocus").style.left = "140px";
                    }
                    else
                    {
                        n.setAttribute("focusposition",1);
                        // n.getElementsByClassName("dialogButton")[1].style.background = '#E11F1F';
                        // n.getElementsByClassName("dialogButton")[0].style.background = '#212025';
                        document.getElementById("dialogFocus").style.left = "480px";
                    }
                    break;
                }
                
                if(this.currentArea == 'today'){
                    //如果不是最左一列
                    if(this.items_1_index %6 != 0){
                        this.borderPostion -= this.leftWidth;
                        border.style.left = this.borderPostion + "px";
                        this.items_1_index --;
                    }
                }else{
                    if(this.items_2_index %6 != 0){
                        this.borderPostion -= this.leftWidth;
                        border.style.left = this.borderPostion + "px";
                        this.items_2_index --;
                    }
                }


                break;
            case VK_RIGHT: // VK_RIGHT = 39; 按右键
                if (this.deleteType == 'deleteDialog')
                {
                    var n = document.getElementById("deleteTips");
                    if(n.getAttribute("focusposition")==1)
                    {
                        n.setAttribute("focusposition",0);
                        // n.getElementsByClassName("dialogButton")[0].style.background = '#E11F1F';
                        // n.getElementsByClassName("dialogButton")[1].style.background = '#212025';
                        document.getElementById("dialogFocus").style.left = "140px";
                    }
                    else
                    {
                        n.setAttribute("focusposition",1);
                        // n.getElementsByClassName("dialogButton")[1].style.background = '#E11F1F';
                        // n.getElementsByClassName("dialogButton")[0].style.background = '#212025';
                        document.getElementById("dialogFocus").style.left = "480px";
                    }
                    break;
                }
                
                if(this.currentArea == 'today'){
                    //如果 当前 焦点的index，小于 当前行的最大值，且 小于总数的话。
                    if((this.items_1_index < (parseInt(this.items_1_index / 6) + 1) * 6-1) && this.items_1_index<this.domObj[0].length-1){
                        this.borderPostion += this.leftWidth;
                        border.style.left = this.borderPostion + "px";
                        this.items_1_index ++;
                    }
                }else{
                    //如果 当前 焦点的index，小于 当前行的最大值，且 小于总数的话。
                    if((this.items_2_index < (parseInt(this.items_2_index / 6) + 1) * 6-1) && this.items_2_index<this.domObj[1].length-1){
                        this.borderPostion += this.leftWidth;
                        border.style.left = this.borderPostion + "px";
                        this.items_2_index ++;
                    }
                }

                break;
            case VK_ENTER: //确认键
                if(deleteDiv.style.display == 'block'){

                    if(this.currentArea == 'today'){

                        if(this.deleteType == 'deleteOne'){
                            //1、删除此条在localStorage中
                            var appId = this.itemDivs_1[this.items_1_index].getAttribute('appId');
                            var hh = JSON.parse(localStorage.getItem("history"));
                            for(var i=0;i<hh.historyItem.length;i++){
                                if(hh.historyItem[i].vid == appId){
                                    hh.historyItem.splice(i,1);
                                }
                            }

                            localStorage.setItem("history", JSON.stringify(hh));

                            //2、删除此条 在页面中
                            var item_ul_1 = document.getElementById('item_ul_1');
                            item_ul_1.removeChild(item_ul_1.getElementsByClassName('templateLi')[this.items_1_index]);

                            //3、校正焦点（如果焦点是在最后一个位置时）
                            this.buildDom();
                            if(this.items_1_index > this.domObj[0].length-1){

                                if(this.items_1_index %6 != 0){
                                    this.items_1_index = this.domObj[0].length -1;
                                    this.borderPostion = (this.items_1_index%6)*(this.leftWidth) + 164;
                                    border.style.left = this.borderPostion  + "px";
                                }else{

                                }
                            }

                        }else if(this.deleteType == 'deleteAll'){
                            this.deleteType = 'deleteDialog';
                            this.showDeleteDialog();
                            return;
                        }else{
                            if (document.getElementById("deleteTips").getAttribute("focusposition")=="0")
                            {
                                localStorage.setItem("history", JSON.stringify({
                                    historyItem:[]
                                }));
                                //top.enableUpdateScreen(false);
                                window.location = "recentContent.html";
                            }
                            this.hideDeleteDialog();
                            this.deleteType = 'deleteAll';
                        }

                    }else if(this.currentArea == 'earlier'){
                        
                        if(this.deleteType == 'deleteOne'){

                            //1、删除此条在localStorage中
                            var appId = this.itemDivs_2[this.items_2_index].getAttribute('appId');
                            var hh = JSON.parse(localStorage.getItem("history"));
                            for(var i=0;i<hh.historyItem.length;i++){
                                if(hh.historyItem[i].vid == appId){
                                    hh.historyItem.splice(i,1);
                                }
                            }

                            localStorage.setItem("history", JSON.stringify(hh));

                            //2、删除此条 在页面中
                            var item_ul_2 = document.getElementById('item_ul_2');
                            item_ul_2.removeChild(item_ul_2.getElementsByClassName('templateLi')[this.items_2_index]);

                            //3、校正焦点（如果焦点是在最后一个位置时）
                            this.buildDom();
                            if(this.items_2_index > this.domObj[1].length-1){

                                if(this.items_2_index %6 != 0){
                                    this.items_2_index = this.domObj[1].length -1;
                                    this.borderPostion = (this.items_2_index%6)*(this.leftWidth) + 164;
                                    border.style.left = this.borderPostion  + "px";
                                }else{

                                }
                            }
                        }else if(this.deleteType == 'deleteAll'){
                            this.deleteType = 'deleteDialog';
                            this.showDeleteDialog();
                            return;
                        }else{
                            if (document.getElementById("deleteTips").getAttribute("focusposition")=="0")
                            {
                                localStorage.setItem("history", JSON.stringify({
                                    historyItem:[]
                                }));
                                //top.enableUpdateScreen(false);
                                window.location = "recentContent.html";
                            }
                            this.hideDeleteDialog();
                            this.deleteType = 'deleteAll';
                        }
                    }
                    if(this.domObj[0].length == 0 && this.domObj[1].length == 0){
                        top.enableUpdateScreen(false);
                        window.location = top.getHomepage();
                    }
                    break;
                }

                if(this.currentArea == 'today'){
                    var licence_id = this.itemDivs_1[this.items_1_index].getAttribute('vSource');
                    var appId = this.itemDivs_1[this.items_1_index].getAttribute('appId');
                    var appPicUrl = this.itemDivs_1[this.items_1_index].getAttribute('appPicUrl');
                    var appTitle = this.itemDivs_1[this.items_1_index].getAttribute('appTitle');
                    //playVideoById(licence_id, appId, appTitle, appPicUrl)
                    jumpToPlayVideo('localHost?licence_id=' + licence_id + "&pic_url=" + appPicUrl + "&title=" + appTitle + "&vid=" + appId);
                    appHistory.initData();
                    document.getElementById('items_1').style.marginTop = '0px';
                    document.getElementById('items_content_1').style.marginTop = '0px';
                    this.currentArea = 'today';

                    //校正焦点
                    this.items_1_index = 0;
                    this.borderPostion = 164;
                    border.style.left = this.borderPostion  + "px";
                    this.buildDom();
                    document.getElementById('items_1_count').innerHTML = this.domObj[0].length?this.domObj[0].length:'0';
                    document.getElementById('items_2_count').innerHTML = this.domObj[1].length?this.domObj[1].length:'0';
                }else{
                    var licence_id = this.itemDivs_1[this.items_1_index].getAttribute('vSource');
                    var appId = this.itemDivs_2[this.items_2_index].getAttribute('appId');
                    var appPicUrl = this.itemDivs_2[this.items_2_index].getAttribute('appPicUrl');
                    var appTitle = this.itemDivs_2[this.items_2_index].getAttribute('appTitle');
                    //playVideoById(licence_id, appId, appTitle, appPicUrl)
                    jumpToPlayVideo('localHost?licence_id=' + licence_id + "&pic_url=" + appPicUrl + "&title=" + appTitle + "&vid=" + appId);
                    appHistory.initData();
                    document.getElementById('items_1').style.marginTop = '0px';
                    document.getElementById('items_content_1').style.marginTop = '0px';
                    this.currentArea = 'today';

                    //校正焦点
                    this.items_1_index = 0;
                    this.borderPostion = 164;
                    border.style.left = this.borderPostion  + "px";
                    this.buildDom();
                    document.getElementById('items_1_count').innerHTML = this.domObj[0].length?this.domObj[0].length:'0';
                    document.getElementById('items_2_count').innerHTML = this.domObj[1].length?this.domObj[1].length:'0';
                }

                break;
            case VK_BACK_SPACE:
            case VK_BACK:
                if (document.getElementById("deleteTips").style.display == 'block')
                {
                    document.getElementById("deleteTips").style.display = 'none';
                    this.deleteType = 'deleteAll';
                }
                else if (deleteDiv.style.display == 'block')
                {
                    deleteDiv.style.display = 'none';
                }
                else
                {
                    window.location = "recentContent.html";
                }
                return false;
                break;
			case VK_HOME:
			case VK_EXIT:
                top.enableUpdateScreen(false);
                //delete sessionStorage.tabListIndex;
                window.location = top.getHomepage();
				break;

            case 192://菜单键
            case VK_OPTION://菜单键
                if (document.getElementById("deleteTips").style.display == 'block')
                {
                    document.getElementById("deleteTips").style.display = 'none';
                    this.deleteType = 'deleteAll';
                }
                else if(deleteDiv.style.display == 'block'){
                    deleteDiv.style.display = 'none';
                }else{
                    deleteDiv.style.display = 'block';
                }
                break;
            case VK_POWER://power
            case VK_NETFLIX:
            case VK_YOUTUBE:
            case VK_GLOBOPLAY:
            case VK_INTERNET:
            case VK_PANEL_LONG_OK:
            case VK_PANEL_OK:
            case VK_PANEL_LEFT:
            case VK_PANEL_RIGHT:
            case VK_PANEL_DOWN:
            case VK_PANEL_UP:
            case VK_MUTE:
            case VK_FRONT_PANEL_LOCKED:
            case VK_VOLUME_DOWN:
            case VK_VOLUME_UP:
            case VK_MENU:
                top.keyDownProcess(evt);
                break;
        }
    },
    bound:function () {
        document.onkeydown = this.keyProcess_AppHistory.bind(this);
        document.onsystemevent = systemEventHandle;
    },
    showDeleteDialog: function(func) {
        var p = document.getElementById("deleteTips");
        p.style.display = 'block';
        // p.getElementsByClassName("dialogButton")[0].style.background = '#E11F1F';
        // p.getElementsByClassName("dialogButton")[1].style.background = '#212025';
        document.getElementById("dialogFocus").style.left = "140px";
        p.setAttribute("focusposition",0);
    },
    
    hideDeleteDialog: function(func) {
        document.getElementById("deleteTips").style.display = 'none';
    },
};

Date.prototype.Format = function(fmt){
    var o = {
        "M+" : this.getMonth()+1,                 //月份
        "d+" : this.getDate(),                          //日
        "h+" : this.getHours(),                        //小时
        "m+" : this.getMinutes(),                   //分
        "s+" : this.getSeconds(),                    //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S"  : this.getMilliseconds()               //毫秒
    };
    if(/(y+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    for(var k in o){
        if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
    return fmt;
};


window.onload = function () {
    window.appHistory = new AppHistory();
    var needTranslateSpans = document.getElementsByClassName("needTranslate_history");
    for (var i = 0; i < needTranslateSpans.length; i++) {
        if(historyWords){
            needTranslateSpans[i].innerHTML = historyWords[i];
        }
    }

    var objs = document.getElementsByClassName('needTranslate_recent_dailog');
    if(deleteHistoryNote && objs.length==3){
        objs[0].innerHTML = deleteHistoryNote;
        objs[1].innerHTML = done;
        objs[2].innerHTML = cancel;
    }
};

function CalculateFocus(root) {
    this.root = root;
    this.domObj;
    this.init();

    return this;
}

function systemEventHandle(evt){
    var msg = evt.which;
    console.log("in system receive event "+msg);
    switch (msg)
    {
        case E_APP_CLOSE:
            top.appOpenFlag = 0;
            top.main.document.body.style.display = "block";
            top.$("operatePage").style.display="block";
            top.$("otherPage").style.display="block";
            top.$("globleShow").style.display="block";
            break;
        case E_POWER_OFF_TIMER:
        case E_DLNA_DMR_PUSH_MOVIE://dmr push movie
        case E_DLNA_DMR_PUSH_MUSIC://dmr push music
        case E_DLNA_DMR_PUSH_PICTURE:
        case E_DLNA_DMR_PUSH_KODI:
        case E_DLNA_DMR_PUSH_YOUTUBE:
        case E_STR_SCREEN_OFF:
        case E_STR_SCREEN_ON:
        case E_NETWORK_CONNECT_TEST_SUCCESS:
        case E_NETWORK_CONNECT_TEST_FAIL:
        case E_WIRE_CONNECT_SUCCESS:
        case E_WIRELESS_CONNECT_SUCCESS:
        case E_WIRE_CONNECT_FAILURE:
        case E_WIRELESS_CONNECT_FAILURE:
        case E_TERMINAL_MANAGER_START:
        case E_TV_FAULT_DIAGNOSIS_CONNECT_ON:
        case E_TV_FAULT_DIAGNOSIS_CONNECT_OFF:
        case E_BOOKING_PLAY_START://booking play start开机时节目预定的时间已过，但是依然要提醒用户做一些切台等操作
        case E_BOOKING_RECORD_START://booking record start开机时录制预定已经过期，但是依然要提醒用户切台录制
        case E_BOOKING_AHEAD_PLAY_START://booking ahead play start,正常情况下切台提醒，一分钟前提醒
        case E_BOOKING_AHEAD_RECORD_START://booking ahead record start正常情况下录制提醒,，一分钟前提醒
        case E_VOICE_COLLECT_ENTRIES:
        case E_VOICE_CONTROL:
            top.systemEventProc(evt);
            break;
        default:
            break;
    }
}

CalculateFocus.prototype = {
    init:function () {
        this.traversal();
    },

    traversal:function () {
        var root = this.root;
        this.domObj = {};
        var blocks = root.querySelectorAll("[data-role=block]");
        for(var i=0;i<blocks.length;i++){
            var nodes = blocks[i].querySelectorAll('[data-role=node]');
            this.domObj[i] = [];
            for(var j = 0;j<nodes.length;j++){
                var node = nodes[j];
                this.domObj[i].push({
                    index:j,
                    offsetLeft:node.offsetLeft,
                    offsetTop:node.offsetTop,
                    width:node.offsetWidth,
                    height:node.offsetHeight
                });
            }
        }
    },
    getDom:function () {
        return this.domObj;
    }
};