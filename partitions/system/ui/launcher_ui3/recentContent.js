/**
 * Created by lqt on 2017/3/28.
 */
var recentPageWords = top.recentPageWords;
var deleteHistoryNote = top.deleteHistoryNote;
var done = top.done;
var cancel= top.cancel;
function RecentContent() {

    //最近观看
    this.recentWatch;
    this.currentVideoElement;

    //最近应用
    this.recentApp;
    this.currentAppElement;

    this.recentType = 'recentWatch';

    this.currentId;

    //滚动
    this.textVal;
    this.initWidth;
    this.intervalId = null;
    this.raf;
    this.delay;
    this.text = null;



    this.isShow = true;
    this.init();
    console.log("--hzm RecentContent --");
    return this;
}
RecentContent.prototype = {
    init: function () {
        console.log("--hzm init --");
        //1.1、初始化翻译
        this.initTranslate();

        //1、初始化数据
        this.initData();


        //2、根据界面创建dom树
        this.buildDom();
        //3、初始化焦点的位置
        this.setFocus(true, this.recentType);
        this.deleteType = 'deleteOne';

        top.g_temp="homePage";
        //绑定一些事件
        this.bound();
        //this.isShow = false;
        //this.hideSelf();
        return this;
    },
    //1、初始化数据  创建界面
    initData: function () {
        //最近应用
		document.getElementById('videoBody').getElementsByClassName('videoDiv')[0].classList.remove('videoActive');
		document.getElementById('appBody').getElementsByClassName('appDiv')[0].classList.remove('appActive');
        var appHistory = localStorage.getItem("appHistory");
        appHistory = JSON.parse(appHistory);
        if (appHistory && appHistory.historyItem && appHistory.historyItem.length > 0) {

            var appUl = document.getElementById('appUl');
            if (appUl.getElementsByClassName('appTemplateLi')[0]) {
                var childLen = appUl.getElementsByClassName('appTemplateLi').length;
                for (var j = childLen - 1; j >= 0; j--) {
                    if (appUl.getElementsByClassName('appTemplateLi')[j]) {
                        appUl.removeChild(appUl.getElementsByClassName('appTemplateLi')[j]);
                    }
                }
            }

            for (var len = appHistory.historyItem.length < 6 ? appHistory.historyItem.length - 1 : 5, i = len; i >= 0; i--) {
                var appTemplate = document.querySelector('.appTemplate').getElementsByTagName('li')[0].cloneNode(true);

                //1、设置应用的海报
                appTemplate.getElementsByClassName('appPic_img')[0].src = appHistory.historyItem[i].appPicUrl;

                //2、设置应用的名字
                appTemplate.getElementsByClassName('appName_span')[0].innerHTML = appHistory.historyItem[i].appTitle;

                //3、设置启动应用的参数
                appTemplate.getElementsByClassName('appDiv')[0].setAttribute("appId", appHistory.historyItem[i].appId);
                appTemplate.getElementsByClassName('appDiv')[0].setAttribute("appPicUrl", appHistory.historyItem[i].appPicUrl);
                appTemplate.getElementsByClassName('appDiv')[0].setAttribute("appTitle", appHistory.historyItem[i].appTitle);
				appTemplate.getElementsByClassName('appDiv')[0].setAttribute("appUrl", appHistory.historyItem[i].appUrl);


                //5、加入到Dom中
                appUl.appendChild(appTemplate);
            }

            //2、显示 去找片
            document.getElementById('moreAppTip').style.display = 'block';
            document.getElementById('noAppTip').style.display = 'none';

            if (appHistory.historyItem.length <= 6) {
                document.getElementById('moreAppTipLi').style.display = 'none';
            } else {
                document.getElementById('moreAppTipLi').style.display = 'block';
            }
        } else {
            //1、删除所有的
            var appUl = document.getElementById('appUl');
            if (appUl.getElementsByClassName('appTemplateLi')[0]) {
                var childLen = appUl.getElementsByClassName('appTemplateLi').length;
                for (var j = childLen - 1; j >= 0; j--) {
                    if (appUl.getElementsByClassName('appTemplateLi')[j]) {
                        appUl.removeChild(appUl.getElementsByClassName('appTemplateLi')[j]);
                    }
                }
            }

            //2、显示 去找片
            document.getElementById('moreAppTip').style.display = 'none';
            document.getElementById('noAppTip').style.display = 'block';
            document.getElementById('moreAppTipLi').style.display = 'block';

        }

        var history = JSON.parse(localStorage.getItem("history"));

        if (history && history.historyItem && history.historyItem.length > 0) {
            var videoUl = document.getElementById('videoUl');

            //删除所有视频
            if (videoUl.getElementsByClassName('videoTemplateLi')[0]) {
                var childLen = videoUl.getElementsByClassName('videoTemplateLi').length;
                for (var k = childLen - 1; k >= 0; k--) {
                    if (videoUl.getElementsByClassName('videoTemplateLi')[k]) {
                        videoUl.removeChild(videoUl.getElementsByClassName('videoTemplateLi')[k]);
                    }
                }
            }


                //增加6个视频
            for(var len = history.historyItem.length < 6 ? history.historyItem.length - 1 : 5, i = len; i >= 0; i--) {

                var videoTemplate = document.querySelector('.videoTemplate').getElementsByTagName('li')[0].cloneNode(true);

                //1、设置影片的海报
                videoTemplate.getElementsByClassName('videoImg')[0].src = history.historyItem[i].url;

                //2、设置影片的名字
                videoTemplate.getElementsByClassName('videoTitle')[0].innerHTML = history.historyItem[i].title + "&nbsp;&nbsp;&nbsp";

                //3、设置视频的相关属性：
                videoTemplate.getElementsByClassName('videoDiv')[0].setAttribute("vid", history.historyItem[i].vid);
                videoTemplate.getElementsByClassName('videoDiv')[0].setAttribute("licenceId", history.historyItem[i].source);
                videoTemplate.getElementsByClassName('videoDiv')[0].setAttribute("picUrl", history.historyItem[i].url);
                videoTemplate.getElementsByClassName('videoDiv')[0].setAttribute("title", history.historyItem[i].title);

                //5、加入到Dom中
                videoUl.appendChild(videoTemplate);
            }


            //2、显示 去找片
            document.getElementById('moreVideoTip').style.display = 'block';
            document.getElementById('noVideoTip').style.display = 'none';

            if (history.historyItem.length <= 6) {
                document.getElementById('moreVideoTipLi').style.display = 'none';
            } else {
                document.getElementById('moreVideoTipLi').style.display = 'block';
            }


        } else {
            //删除所有视频
            var videoUl = document.getElementById('videoUl');
            if (videoUl.getElementsByClassName('videoTemplateLi')[0]) {
                var childLen = videoUl.getElementsByClassName('videoTemplateLi').length;
                for (var k = childLen - 1; k >= 0; k--) {
                    if (videoUl.getElementsByClassName('videoTemplateLi')[k]) {
                        videoUl.removeChild(videoUl.getElementsByClassName('videoTemplateLi')[k]);
                    }
                }
            }

            //2、显示 去找片
            document.getElementById('moreVideoTip').style.display = 'none';
            document.getElementById('noVideoTip').style.display = 'block';
            document.getElementById('moreVideoTipLi').style.display = 'block';

        }

    },
    //1.1、初始化翻译
    initTranslate:function () {
        if(!window.recentContent){
            var needTranslateSpans = document.getElementsByClassName('needTranslate_recent');
            for (var i = 0; i < needTranslateSpans.length; i++) {
                if(recentPageWords){
                    needTranslateSpans[i].innerHTML = recentPageWords[i];
                }
            }
            var objs = document.getElementsByClassName('needTranslate_recent_dailog');
            if(deleteHistoryNote && objs.length==3){
                objs[0].innerHTML = deleteHistoryNote;
                objs[1].innerHTML = done;
                objs[2].innerHTML = cancel;
            }
        }

    },

    //2、根据界面创建dom树
    buildDom: function () {
        this.recentWatch = document.getElementById('videoBody').getElementsByClassName('videoDiv');
        this.recentApp = document.getElementById('appBody').getElementsByClassName('appDiv');

    },

    //失去焦点
    loseFocus: function (currentEle, recentType) {
        //如果当前焦点在 最近观看上
        if (recentType == 'recentWatch') {
            this.recentWatch[currentEle].classList.remove('videoActive');
        }
        //如果当前焦点在 最近应用上
        else if (recentType == 'recentApp') {
            this.recentApp[currentEle].classList.remove('appActive');
        }

    },

    /*
     * 初始化焦点的位置
     * initFlag : true  第一次进。
     * currentEle:按完按键，焦点将要落到的位置。
     * lastEle：按按键时，焦点的位置
     * */
    setFocus: function (initFlag, recentType, lastEle, currentEle) {
        //如果当前焦点在 最近观看上
        if (recentType == 'recentWatch') {

            if(this.raf && this.text){
                cancelAnimationFrame(this.raf);
                this.text.innerHTML = this.textVal;
                this.text.style.left = '0px';
                this.raf = null;
            }

            //第一次进
            if (initFlag) {
                //默认焦点在最有一个元素上
                this.currentVideoElement = this.recentWatch.length - 1;
                this.recentWatch[this.currentVideoElement].classList.add('videoActive');
                this.currentId = 'video_' + this.recentWatch.length - 1;
            } else {
                //
                if (currentEle != 0 && currentEle != this.recentWatch.length) {
                    if (lastEle != 0) {
                        this.recentWatch[lastEle].classList.remove('videoActive');
                        this.recentWatch[currentEle].classList.add('videoActive');
                    } else {
                        this.recentWatch[lastEle].classList.remove('videoActive');
                        this.recentWatch[currentEle].classList.add('videoActive');
                    }

                } else if (currentEle == 0) {
                    this.recentWatch[lastEle].classList.remove('videoActive');
                    this.recentWatch[currentEle].classList.add('videoActive');

                } else if (currentEle == this.recentWatch.length - 1) {
                }

            }


            if (this.intervalId) {
                clearInterval(this.intervalId);
                this.text.innerHTML = this.textVal;
                this.text.style.left = '18px';
            }

            this.text = this.recentWatch[this.currentVideoElement].getElementsByClassName('scrollSpan')[0];
            var wrap = this.recentWatch[this.currentVideoElement].getElementsByClassName('videoInfo')[0];
            // console.log("--hzm setFocus text = " + this.text);
            // console.log("--hzm setFocus this.text.offsetWidth = " + this.text.offsetWidth);
            // console.log("--hzm setFocus wrap.offsetWidth = " + wrap.offsetWidth);
            // console.log("--hzm setFocus this.isShow = " + this.isShow);

            if (this.text) {

                if (this.text.offsetWidth >= wrap.offsetWidth && this.isShow) {
                    this.scrollText(this.text, wrap);
                } else {
                    this.intervalId = null;
                }
            }

            //焦点在应用栏
        } else if (recentType == 'recentApp') {
            //第一次进
            if (initFlag) {
                this.currentAppElement = this.recentApp.length - 1;
                this.recentApp[this.currentAppElement].classList.add('appActive');
            } else {
                //
                if (currentEle != 0 && currentEle != this.recentApp.length) {
                    //app的处理
                    if (lastEle != 0) {
                        this.recentApp[lastEle].classList.remove('appActive');

                        this.recentApp[currentEle].classList.add('appActive');
                    }
                    //more app的处理
                    else {
                        this.recentApp[lastEle].classList.remove('appActive');
                        this.recentApp[currentEle].classList.add('appActive');

                    }

                } else if (currentEle == 0) {
                    this.recentApp[lastEle].classList.remove('appActive');
                    this.recentApp[currentEle].classList.add('appActive');

                } else if (currentEle == this.recentApp.length - 1) {
                }
            }
        }

    },

    scrollText: function (text, wrap) {

        if(text&&wrap){
            this.initWidth = text.offsetWidth;
            this.textVal = text.innerHTML;


            this.animate(text, wrap);
        }
    },
    keyProcess_Recent: function (evt) {
        var keycode = evt.which;
        console.log("--hzm get keyevent keycode = " + keycode);
        switch (keycode) {

            case VK_UP: // VK_UP = 38; 按上键： 1、隐藏 最近观看   2、显示 最近应用
                this.up();
                break;
            case VK_DOWN://VK_DOWN = 40; 按下键： 1、隐藏 最近应用   2、显示 最近观看
                this.down();
                break;
            case VK_LEFT: // VK_LEFT = 37;
                this.left();
                break;
            case VK_RIGHT: // VK_RIGHT = 39;
                this.right();
                break;
            case VK_OPTION:
                if (!this.hideDelete())
                    this.showDelete();
                break;
            case VK_ENTER:
                this.ok();
                break;
            case VK_EXIT:
            case VK_BACK:
                if (!this.hideDelete())
                    window.location = top.getHomepage();
                break;
            case VK_HOME:
                window.location = top.getHomepage();
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

    //向上移动
    up: function () {

        if (this.recentType == 'recentWatch') {

            var currentMask = this.recentWatch[this.currentVideoElement].getElementsByClassName('mask')[0];
            if(currentMask && currentMask.style.display == 'block'){
                if (this.deleteType == 'deleteDialog'){
                    return;
                }
                var delete_img = currentMask.getElementsByClassName('delete_img')[0];
                delete_img.style.marginTop = '2px';
                this.deleteType = 'deleteOne';
                return;
            }


            //1、隐藏 最近观看
            var recentWatchContent = document.getElementById('recentWatch');
            recentWatchContent.classList.add('upHide');

            //2、隐藏 最近观看  的焦点
            this.loseFocus(this.currentVideoElement, this.recentType);

            //3、焦点类型改为 最近应用
            this.recentType = 'recentApp';

            //4、显示 最近应用  的焦点
            this.setFocus(true, this.recentType);

            var recentWatch = document.getElementById('recentWatch');
            // recentWatch.style.zIndex=-10;

            //5、显示 最近应用
            var recentAppContent = document.getElementById('recentApp');
            recentAppContent.classList.add('upShow');
        }else{
            var currentMask = this.recentApp[this.currentAppElement].getElementsByClassName('mask')[0];
            if(currentMask && currentMask.style.display == 'block'){
                if (this.deleteType == 'deleteDialog'){
                    return;
                }
                var delete_img = currentMask.getElementsByClassName('delete_img')[0];
                delete_img.style.marginTop = '2px';
                this.deleteType = 'deleteOne';

                return;
            }
        }
    },

    //向下移动
    down: function () {

        if (this.recentType == 'recentApp') {

            var currentMask = this.recentApp[this.currentAppElement].getElementsByClassName('mask')[0];
            if(currentMask && currentMask.style.display == 'block'){
                if (this.deleteType == 'deleteDialog'){
                    return;
                }
                var delete_img = currentMask.getElementsByClassName('delete_img')[0];
                delete_img.style.marginTop = '53px';
                this.deleteType = 'deleteAll';
                return;
            }

            //1、隐藏 最近应用
            var recentAppContent = document.getElementById('recentApp');
            recentAppContent.classList.remove('upShow');

            //2、隐藏 最近应用  的焦点
            this.loseFocus(this.currentAppElement, this.recentType);

            //3、焦点类型改为 最近应用
            this.recentType = 'recentWatch';

            //4、显示 最近观看  的焦点
            this.setFocus(true, this.recentType);


            var recentWatch = document.getElementById('recentWatch');
            recentWatch.style.zIndex = 10;

            //5、显示 最近观看
            var recentWatchContent = document.getElementById('recentWatch');
            recentWatchContent.classList.remove('upHide');

        }else{
            var currentMask = this.recentWatch[this.currentVideoElement].getElementsByClassName('mask')[0];
            if(currentMask && currentMask.style.display == 'block'){
                if (this.deleteType == 'deleteDialog'){
                    return;
                }
                var delete_img = currentMask.getElementsByClassName('delete_img')[0];
                delete_img.style.marginTop = '53px';
                this.deleteType = 'deleteAll';

                return;
            }
        }
    },

    //向左移动
    left: function () {

        if (this.recentType == 'recentWatch') {

            var currentMask = this.recentWatch[this.currentVideoElement]&&this.recentWatch[this.currentVideoElement].getElementsByClassName('mask')[0];
            if(currentMask && currentMask.style.display == 'block'){
                if (this.deleteType == 'deleteDialog')
                {
                    var n = document.getElementById("deleteTips");
                    if(n.getAttribute("focusposition")==1)
                    {
                        n.setAttribute("focusposition",0);
                        // n.getElementsByClassName("dialogButton")[0].style.background = '#E11F1F';
                        // n.getElementsByClassName("dialogButton")[1].style.background = '#212025';
                        // n.getElementsByClassName("dialogButton")[0].src = "../images/Focus_Pop_up_box.png";
                        // n.getElementsByClassName("dialogButton")[1].src = "../images/Focus_Pop_up_box_no.png";
                        document.getElementById("dialogFocus").style.left = "140px";
                    }
                    else
                    {
                        n.setAttribute("focusposition",1);
                        // n.getElementsByClassName("dialogButton")[1].style.background = '#E11F1F';
                        // n.getElementsByClassName("dialogButton")[0].style.background = '#212025';
                        // n.getElementsByClassName("dialogButton")[1].src = "../images/Focus_Pop_up_box.png";
                        // n.getElementsByClassName("dialogButton")[0].src = "../images/Focus_Pop_up_box_no.png";
                        document.getElementById("dialogFocus").style.left = "480px";
                    }
                }
                return;
            }

            var leftLimit = 0;
            if (document.getElementById('moreVideoTipLi').style.display == 'none') {
                leftLimit = 1;
            }

            if (this.currentVideoElement > leftLimit) {
                this.setFocus(false, this.recentType, this.currentVideoElement, --this.currentVideoElement);
            } else {
                // parent.focus();
            }
        } else if (this.recentType == 'recentApp') {

            var currentMask = this.recentApp[this.currentAppElement]&&this.recentApp[this.currentAppElement].getElementsByClassName('mask')[0];
            if(currentMask && currentMask.style.display == 'block'){
                if (this.deleteType == 'deleteDialog')
                {
                    var n = document.getElementById("deleteTips");
                    if(n.getAttribute("focusposition")==1)
                    {
                        n.setAttribute("focusposition",0);
                        // n.getElementsByClassName("dialogButton")[0].style.background = '#E11F1F';
                        // n.getElementsByClassName("dialogButton")[1].style.background = '#212025';
                        // n.getElementsByClassName("dialogButton")[0].src = "../images/Focus_Pop_up_box.png";
                        // n.getElementsByClassName("dialogButton")[1].src = "../images/Focus_Pop_up_box_no.png";
                        document.getElementById("dialogFocus").style.left = "140px";
                    }
                    else
                    {
                        n.setAttribute("focusposition",1);
                        // n.getElementsByClassName("dialogButton")[1].style.background = '#E11F1F';
                        // n.getElementsByClassName("dialogButton")[0].style.background = '#212025';
                        // n.getElementsByClassName("dialogButton")[1].src = "../images/Focus_Pop_up_box.png";
                        // n.getElementsByClassName("dialogButton")[0].src = "../images/Focus_Pop_up_box_no.png";
                        document.getElementById("dialogFocus").style.left = "480px";
                    }
                }
                return;
            }


            var leftLimit = 0;
            if (document.getElementById('moreAppTipLi').style.display == 'none') {
                leftLimit = 1;
            }

            if (this.currentAppElement > leftLimit) {
                this.setFocus(false, this.recentType, this.currentAppElement, --this.currentAppElement);
            } else {
                // parent.focus();
            }
        }
    },

    //向右移动
    right: function () {

        if (this.recentType == 'recentWatch') {
            var currentMask = this.recentWatch[this.currentVideoElement].getElementsByClassName('mask')[0];
            if(currentMask && currentMask.style.display == 'block'){
                if (this.deleteType == 'deleteDialog')
                {
                    var n = document.getElementById("deleteTips");
                    if(n.getAttribute("focusposition")==1)
                    {
                        n.setAttribute("focusposition",0);
                        // n.getElementsByClassName("dialogButton")[0].style.background = '#E11F1F';
                        // n.getElementsByClassName("dialogButton")[1].style.background = '#212025';
                        // n.getElementsByClassName("dialogButton")[0].src = "../images/Focus_Pop_up_box.png";
                        // n.getElementsByClassName("dialogButton")[1].src = "../images/Focus_Pop_up_box_no.png";
                        document.getElementById("dialogFocus").style.left = "140px";
                    }
                    else
                    {
                        n.setAttribute("focusposition",1);
                        // n.getElementsByClassName("dialogButton")[1].style.background = '#E11F1F';
                        // n.getElementsByClassName("dialogButton")[0].style.background = '#212025';
                        // n.getElementsByClassName("dialogButton")[1].src = "../images/Focus_Pop_up_box.png";
                        // n.getElementsByClassName("dialogButton")[0].src = "../images/Focus_Pop_up_box_no.png";
                        document.getElementById("dialogFocus").style.left = "480px";
                    }
                }
                return;
            }

            if (this.currentVideoElement < this.recentWatch.length - 1) {
                this.setFocus(false, this.recentType, this.currentVideoElement, ++this.currentVideoElement);
            } else {

                /*if (allTitleList.length != titleList.length) {
                    return;
                }*/
                window.location = top.getHomepage();
                clearTimeout(this.delay);
                cancelAnimationFrame(this.raf);
                top.recentFlag = false;
            }
        } else if (this.recentType == 'recentApp') {
            var currentMask = this.recentApp[this.currentAppElement]&&this.recentApp[this.currentAppElement].getElementsByClassName('mask')[0];
            if(currentMask && currentMask.style.display == 'block'){
                if (this.deleteType == 'deleteDialog')
                {
                    var n = document.getElementById("deleteTips");
                    if(n.getAttribute("focusposition")==1)
                    {
                        n.setAttribute("focusposition",0);
                        // n.getElementsByClassName("dialogButton")[0].style.background = '#E11F1F';
                        // n.getElementsByClassName("dialogButton")[1].style.background = '#212025';
                        // n.getElementsByClassName("dialogButton")[0].src = "../images/Focus_Pop_up_box.png";
                        // n.getElementsByClassName("dialogButton")[1].src = "../images/Focus_Pop_up_box_no.png";
                        document.getElementById("dialogFocus").style.left = "140px";
                    }
                    else
                    {
                        n.setAttribute("focusposition",1);
                        // n.getElementsByClassName("dialogButton")[1].style.background = '#E11F1F';
                        // n.getElementsByClassName("dialogButton")[0].style.background = '#212025';
                        // n.getElementsByClassName("dialogButton")[1].src = "../images/Focus_Pop_up_box.png";
                        // n.getElementsByClassName("dialogButton")[0].src = "../images/Focus_Pop_up_box_no.png";
                        document.getElementById("dialogFocus").style.left = "480px";
                    }
                }
                return;
            }

            if (this.currentAppElement < this.recentApp.length - 1) {
                this.setFocus(false, this.recentType, this.currentAppElement, ++this.currentAppElement);
            } else {
                /*if (allTitleList.length != titleList.length) {
                    return;
                }*/
                window.location = top.getHomepage();
                clearTimeout(this.delay);
                cancelAnimationFrame(this.raf);
                top.recentFlag = false;
            }
        }
    },

    //确认键
    ok: function () {
        sessionStorage.subpageFlag = 1;
        //如果是在最近观看
        if (this.recentType == 'recentWatch') {

            var currentMask = this.recentWatch[this.currentVideoElement].getElementsByClassName('mask')[0];
            if(currentMask && currentMask.style.display == 'block'){
                if(this.deleteType == 'deleteOne'){
                    //1、删除此条在localStorage中
                    var vid = this.recentWatch[this.currentVideoElement].getAttribute('vid');
                    var history = JSON.parse(localStorage.getItem("history"));
                    for(var i=0;i<history.historyItem.length;i++){
                        if(history.historyItem[i].vid == vid){
                            history.historyItem.splice(i,1);
                        }
                    }
                    localStorage.setItem("history", JSON.stringify(history));

                }else if (this.deleteType == 'deleteAll') {
                    this.deleteType = 'deleteDialog';
                    this.showDeleteDialog();
                    return;
                }
                else{
                    this.hideDeleteDialog();
                    this.deleteType = 'deleteAll';
                    if (document.getElementById("deleteTips").getAttribute("focusposition")=="0")
                    {
                        localStorage.removeItem('history');
                    }
                    else
                    {
                        return;
                    }
                }

                //2、校正焦点
                this.showSelf();

                return;
            }


            if (this.currentVideoElement == 0 && document.getElementById('moreVideoTip').style.display == 'block') {
                //jumpToSubpage('history.html?tplid=location&tab_id=recent&ids=0_0_0_0&type=recentWatch');
				window.location = "recenthistory.html?tplid=location&tab_id=recent&ids=0_0_0_0&type=recentWatch";
            }
            else if (this.currentVideoElement == 0 && document.getElementById('moreVideoTip').style.display == 'none') {
                //跳转到Home页
                /*var index = 1;
                for (var i=0;i<iframeListDiv_0.length;i++)
                {
                    if (iframeListDiv_0[i].id == "homePage")
                    {
                        index = i;
                        break;
                    }
                }
                this.jumpToLauncher(index);*/
            } else {
                var licence_id = this.recentWatch[this.currentVideoElement].getAttribute('licenceId');
                var pic_url = this.recentWatch[this.currentVideoElement].getAttribute('picurl');
                var title = this.recentWatch[this.currentVideoElement].getAttribute('title');
                var vid = this.recentWatch[this.currentVideoElement].getAttribute('vid');

                jumpToPlayVideo('localHost?licence_id=' + licence_id + "&pic_url=" + pic_url + "&title=" + title + "&vid=" + vid);
            }

            //如果是在最近应用页
        } else if (this.recentType == 'recentApp') {

            var currentMask = this.recentApp[this.currentAppElement].getElementsByClassName('mask')[0];
            if(currentMask && currentMask.style.display == 'block'){
                if(this.deleteType == 'deleteOne'){
                    //1、删除此条在localStorage中
                    var appId = this.recentApp[this.currentAppElement].getAttribute('appid');
                    var appHistory = JSON.parse(localStorage.getItem("appHistory"));
                    for(var i=0;i<appHistory.historyItem.length;i++){
                        if(appHistory.historyItem[i].appId == appId){
                            appHistory.historyItem.splice(i,1);
                        }
                    }

                    localStorage.setItem("appHistory", JSON.stringify(appHistory));

                }else if (this.deleteType == 'deleteAll'){
                    this.deleteType = 'deleteDialog';
                    this.showDeleteDialog();
                    return;
                }
                else{
                    this.hideDeleteDialog();
                    this.deleteType = 'deleteAll';
                    if (document.getElementById("deleteTips").getAttribute("focusposition")=="0")
                    {
                        localStorage.removeItem('appHistory');
                    }
                    else
                    {
                        return;
                    }
                }

                //2、校正焦点
                this.showSelf();

                return;
            }

            if (this.currentAppElement == 0 && document.getElementById('moreAppTip').style.display == 'block') {
                //jumpToSubpage('apphistory.html');
				window.location = "apphistory.html";
            }
            else if (this.currentAppElement == 0 && document.getElementById('moreAppTip').style.display == 'none') {
                //跳转到APP页
                /*var index = 1;
                for (var i=0;i<iframeListDiv_0.length;i++)
                {
                    if (iframeListDiv_0[i].id == "appsPage")
                    {
                        index = i;
                        break;
                    }
                }
                this.jumpToLauncher(index);*/
            } else {
                var appId = this.recentApp[this.currentAppElement].getAttribute('appId');
                var appPicUrl = this.recentApp[this.currentAppElement].getAttribute('appPicUrl');
                var appTitle = this.recentApp[this.currentAppElement].getAttribute('appTitle');
				var appUrl = this.recentApp[this.currentAppElement].getAttribute('appUrl');
				pressOkObject = null;
                if (appId == "nscreen" || appId == "tcast" || appId == "miracast" || appId == "emanual")
                {
                    jumpLocalApps(appId);
                }
                else
                {
                    jumpToApp(appId,appUrl);
                }
                storeAppData(appId, appPicUrl, appTitle, appUrl);
            }
        }
    },
    showDelete:function () {
        if (this.recentType == 'recentWatch') {
            var currentMask = this.recentWatch[this.currentVideoElement].getElementsByClassName('mask')[0];
            if(currentMask && currentMask.style.display == 'block'){

                currentMask.style.display = 'none';
                var delete_img = currentMask.getElementsByClassName('delete_img')[0];
                delete_img.style.marginTop = '2px';
                this.deleteType = 'deleteOne';


            }else if(currentMask){
                currentMask.style.display = 'block';
            }

        } else if (this.recentType == 'recentApp') {
            var currentMask = this.recentApp[this.currentAppElement].getElementsByClassName('mask')[0];
            if(currentMask && currentMask.style.display == 'block'){
                currentMask.style.display = 'none';
                var delete_img = currentMask.getElementsByClassName('delete_img')[0];
                delete_img.style.marginTop = '2px';
                this.deleteType = 'deleteOne';
            }else if(currentMask){
                currentMask.style.display = 'block';
            }
        }
    },

    hideDelete:function () {
        if (document.getElementById("deleteTips").style.display == 'block')
        {
            document.getElementById("deleteTips").style.display = 'none';
            this.deleteType = 'deleteAll';
            return 1;
        }
        if (this.recentType == 'recentWatch') {
            var currentMask = this.recentWatch[this.currentVideoElement].getElementsByClassName('mask')[0];
            if(currentMask && currentMask.style.display == 'block'){

                currentMask.style.display = 'none';
                var delete_img = currentMask.getElementsByClassName('delete_img')[0];
                delete_img.style.marginTop = '2px';
                this.deleteType = 'deleteOne';
                return 1;
            }

        } else if (this.recentType == 'recentApp') {
            var currentMask = this.recentApp[this.currentAppElement].getElementsByClassName('mask')[0];
            if(currentMask && currentMask.style.display == 'block'){
                currentMask.style.display = 'none';
                var delete_img = currentMask.getElementsByClassName('delete_img')[0];
                delete_img.style.marginTop = '2px';
                this.deleteType = 'deleteOne';
                return 1;
            }
        }
        return 0;
    },

    showDeleteDialog: function(func) {
        var p = document.getElementById("deleteTips");
        p.style.display = 'block';
        // p.getElementsByClassName("dialogButton")[0].style.background = '#E11F1F';
        // p.getElementsByClassName("dialogButton")[1].style.background = '#212025';
        // p.getElementsByClassName("dialogButton")[0].src = "../images/Focus_Pop_up_box.png";
        // p.getElementsByClassName("dialogButton")[1].src = "../images/Focus_Pop_up_box_no.png";
        document.getElementById("dialogFocus").style.left = "140px";
        p.setAttribute("focusposition",0);
    },

    hideDeleteDialog: function(func) {
        document.getElementById("deleteTips").style.display = 'none';
    },

    //返回launcher
    goHome: function () {
        var index = 1;
        for (var i=0;i<iframeListDiv_0.length;i++)
        {
            if (iframeListDiv_0[i].id == "homePage")
            {
                index = i;
                break;
            }
        }
        this.jumpToLauncher(index);
    },

    //显示最近浏览
    showSelf: function () {
        this.isShow = true;
        document.getElementById('recentPage').setAttribute('style', 'display:block');
        //重新构建内容
        this.init();
        document.getElementById('recentPage').setAttribute('style', 'display:block');
        this.isShow = true;
    },
    //隐藏最近浏览
    hideSelf: function () {
        document.getElementById('recentPage').setAttribute('style', 'display:none');
    },

    jumpToLauncher: function (index) {
        //1、退出最近浏览，把标志位置 false
        top.recentFlag = false;
        //2、隐藏最近浏览页面
        this.hideSelf();
        //3、显示状态栏和标题栏
        shwoState();
        //4、设置返回到home页
        currentElemInBottomTitleIndex = index;
        //6、切换窗口内容、切换iframe
        refleshIframeLeft(currentElemInBottomTitleIndex);
        if (currentFocusBorderEle) {
            // 原来页面区的焦点失去
            switchLoseFocusOnPage(currentFocusObj, currentFocusBorderEle);
        }

        // 显示标题的焦点
        switchFocusOnTitle(titleList[currentElemInBottomTitleIndex]);
        clearTimeout(this.delay);
        cancelAnimationFrame(this.raf);
    },


    animate: function (text,wrap) {
        if(!text||!wrap){
            return;
        }



        var _this = this;

        var textWidth = text.offsetWidth;//文字的宽度
        var wrapWidth = wrap.offsetWidth;//容器的宽度



        /**
         * 获取在css中设置的left
         *
         * 如果当时style.left 不存在，则赋予初始值
         */
        if (!text.style.left) {
            text.style.left = document.defaultView.getComputedStyle(text, null)['left'];
        }

        /**
         * textWidth - wrapWidth : 文字长度，超出 容器长度的  数值、
         * 超出部分 - 当前向左移动的距离
         * 如果，超出部分的长度，已经，全部移动到左侧了，也就是，文字已经显示到结尾了。distance<=0
         * @type {number}
         */
        var distance = (textWidth - wrapWidth) - Math.abs(parseInt(text.style.left, 10));



        if (distance > 0) {
            text.style.left = parseInt(text.style.left, 10) - 1 + 'px';
        } else {

            //1、在文字尾部，增加相同的文字
            text.innerHTML = text.innerHTML + this.textVal;

            //2、如果当前累加后的文字的长度 > 初始时文字的长度的两倍
            if (text.offsetWidth > 3 * _this.initWidth) {
                //1、文字整体向右移动 初始时文字的宽度 initWidth （ -2 是为了微调，去除颤动的效果 ）
                text.style.left = parseInt(text.style.left, 10) + _this.initWidth - 2 + 'px';
                //2、同时，把文字的内容，截取最前面的一部分。
                text.innerHTML = text.innerHTML.substring(0, _this.textVal.length);
            }
        }


        /**
         * 当判断，文字到容器头了，先暂停，再开始
         */
        if (parseInt(text.style.left, 10) % this.initWidth == 0 && parseInt(text.style.left, 10) != 0) {
            cancelAnimationFrame(_this.raf);
            clearTimeout(_this.delay);
            _this.delay  = setTimeout(function () {
                _this.raf = requestAnimationFrame(_this.animate.bind(_this,text, wrap));
            }, 2000);
        } else {
            _this.raf = requestAnimationFrame(_this.animate.bind(_this,text, wrap));

        }
    },
    //绑定一些事件
    bound: function () {
        document.onkeydown = this.keyProcess_Recent.bind(this);
        document.onsystemevent = systemEventHandle;
    }
};

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

window.onload = function () {
    window.recentContent = new RecentContent();
    console.log("--hzm window.onload--");
};