
//向二级跳转的基础网址。---当二级界面地址时，更改此url
var baseUrl ;

var condition = 0;//1：正式服务器    0、自测
var apps = new Array();

function getUrl(flag)
{
//	baseUrl = "http://54.255.146.242/api/v2/layout/gethtmlsec?";
	baseUrl = "./";
	if(condition == 0)
	{
		if(flag == "history")//历史
		{
			baseUrl = baseUrl + "history/history.html?";
		}
		else if(flag == "search")//搜索
		{
			baseUrl = baseUrl + "search/search.html?";
		}
		else if(flag == "player")//播放
		{
			baseUrl = baseUrl + "playler/player.html?";
		}
		else if(flag == "channel")//分类
		{
			 baseUrl = baseUrl + "channelVideo/channelVideo.html?";
		}
	}
	
	return baseUrl;
}


//1、跳转到  二级页面， 参数：目标URL  如：历史、搜索、分类
function jumpToSubpage(targetUrl)
{
	if(top.checkNetStatus()==false)//top.checkNetStatus()==false
	{
		top.$("operatePage").src="";
        top.preTempPage = "homePage";
		top.$("otherPage").src="connectNetworkRemind.html";
        top.requestFocus(top.otherPage, 0);
        top.setFrameFocusPage("otherPage");
		top.$("otherPage").style.display = "block";	
        parent.onBodyBlur();
        return;
	}
	
	console.log("launcher--jumpToSubpage---targetUrl: " + targetUrl);
	
    tcl.channel.requestInputSource(10);
    sessionStorage.isQuitLauncher = "false";
	window.parent.location = (targetUrl);
}


//2、跳转到 “影片播放” 页面， 参数：许可ID 、 视频ID 、 视频名字      如：影片
function jumpToPlayVideo(targetUrl,appName,startType,playUrl)
{
    
	if(top.checkNetStatus()==false)
	{
		top.$("operatePage").src="";
        top.preTempPage = "homePage";
		top.$("otherPage").src="connectNetworkRemind.html";
        top.requestFocus(top.otherPage, 0);
        top.setFrameFocusPage("otherPage");
		top.$("otherPage").style.display = "block";	
        parent.onBodyBlur();		
        return;
	}
	
	var licence_id=getParameter4General(targetUrl,"licence_id");
    var vid=getParameter4General(targetUrl,"vid");
    var title=getParameter4General(targetUrl,"title");
    var pic_url=getParameter4General(targetUrl,"pic_url");
	
    if (pic_url.indexOf("://")<0)
    {
        pic_url = location.href.substring(0, location.href.lastIndexOf("/")+1) + pic_url;
    }
    console.log("launcher--jumpToPlayVideo---targetUrl: " + targetUrl);
    console.log("launcher---licence_id: " + licence_id+"vid: "+vid+"title: "+title+"pic_url : "+pic_url);
	
    storeHistoryData(licence_id,vid,title,pic_url,appName,startType,playUrl);
    if (licence_id == 43)//SBS视频
    {
    	
        tcl.channel.requestInputSource(10);
        sessionStorage.isQuitLauncher = "false";
        window.parent.location = (targetUrl);
    }
    else
    {
        top.g_setting.scaleVideoWindow(0,0,0,0);
        sessionStorage.pipWindow = 0;
        setTimeout(function () {
            tcl.channel.requestMute(0);
        },1000);
        
        top.appOpenFlag = 1;
        top.g_setting.contextOf5in1 = top.CONTEXT_PANEL_OPERATION;
        
        top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x800,2,0);
        //top.$("main").style.display="none";
        top.main.document.body.style.display = "none";
        top.$("operatePage").style.display="none";
        top.$("otherPage").style.display="none";
        tcl.channel.requestInputSource(10);
        
        if(licence_id == 44)//crackle视频
        {
        	top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        	top.g_ulits.openApplication("tbrowser.common","http://crackleott.s3.amazonaws.com/tcl/prod/index.html?titleid="+vid);
        	
        }else if(licence_id == 52)//wuaki 视频
        {
        	top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        	top.g_ulits.openApplication("tbrowser.common","https://tcl-app.wuaki.tv?titleid="+vid);
        }
        else if(licence_id == 41)//YouTube视频-41
        {
        	top.g_setting.setProperty("app.ui.currentApp","tbrowser.youtube");
            top.g_ulits.openApplication("tbrowser.youtube","https://www.youtube.com/tv?launch=menu&additionalDataUrl=http%3a%2f%2flocalhost%3a56789%2fapps%2fYouTube%2fdial_data&v="+vid);
        }
        else if(licence_id > 100)//其他新增视频源
        {
            top.g_setting.setProperty("app.ui.currentApp",startType);
            top.g_ulits.openApplication(startType,decodeURIComponent(playUrl));
        }
        else//YouTube视频-41
        {
        	top.g_setting.setProperty("app.ui.currentApp","tbrowser.youtube");
            top.g_ulits.openApplication("tbrowser.youtube","https://www.youtube.com/tv?launch=menu&additionalDataUrl=http%3a%2f%2flocalhost%3a56789%2fapps%2fYouTube%2fdial_data&v="+vid);
        
        }
        
    }
}


//二、Videos.html 中涉及到的操作函数：1、跳转到launcher的二级页面---分类

//3、跳转到 “分类” 二级页面， 参数：待定
function jumpToClassify(secRes,channelKey,tplid,tab_id,resolution,client_type,launcher_id,dnum,language,zone,i18n_title,ids)
{
	
	if(top.checkNetStatus()==false)
	{
		top.$("operatePage").src="";
        top.preTempPage = "homePage";
		top.$("otherPage").src="connectNetworkRemind.html";
        top.requestFocus(top.otherPage, 0);
        top.setFrameFocusPage("otherPage");
		top.$("otherPage").style.display = "block";	
        parent.onBodyBlur();		
        return;

	}
	else
	{
		baseUrl = getUrl(secRes);
	}
	
	var targetUrl = baseUrl+"secRes="+secRes+"&channelKey="+channelKey+"&tplid="+tplid+"&tab_id="+tab_id+"&resolution="+resolution+"&client_type="
		+client_type+"&launcher_id="+launcher_id+"&dnum="+dnum+"&language="+language+"&zone="+zone+"&i18n_title="+i18n_title+"&ids="+ids;
	

	console.log("launcher--jumpToClassify---targetUrl: " + targetUrl);
	tcl.channel.requestInputSource(10);
	sessionStorage.isQuitLauncher = "false";
	window.parent.location = (targetUrl);
}






//三、tvNew.html 中涉及到的操作函数：1、进入channelPlay播放电视  2、进入指定信源的channelPlay，播放电视。

//4、跳转到channelPlay.html 页面，播放电视 ，参数：无
function jumpToChannelPlay()
{
    if(top.g_isDownloading == 0){
        top.g_isDownloading = 1;
        top.g_setting.restartDownloadUpdateFile();
    }
    tcl.setting.sendMsgToDBC(4);
	delete sessionStorage.tabListIndex;//删除launcher记忆的tab
    if (tcl.channel.inputSource != top.lastInputSource)
    {
        tcl.channel.inputSource = top.lastInputSource;
    }
	top.jumpPage();
}

//5、切换信源，并跳转到channelPlay.html 页面，播放电视 ， 参数：信源ID
function jumpToSouce(sourceId)
{
    if(top.g_isDownloading == 0){
        top.g_isDownloading = 1;
        top.g_setting.restartDownloadUpdateFile();
    }
	if(sourceId == 10)
	{
		jumpToMedia();
		return;
	}
	if((top.g_factory.sourceLock)&&(top.g_factory.hotelEnable))
	{
		if((top.g_channel.inputSource > 1 && sourceId != top.g_channel.inputSource)|| (top.g_channel.inputSource <= 1 && sourceId > 1))
		{
			top.$("operatePage").src = "";
			top.$("otherPage").src = "password.html?sourceLock:homepage&"+sourceId;
			top.$("otherPage").style.display = "block";
			top.requestFocus(top.otherPage, 0);
			top.setFrameFocusPage("otherPage");
		}
		else
		{
			top.g_channel.inputSource = sourceId;
            top.g_isShowInfoBar = 1;
			top.jumpPage();
		}

	}
	else
	{
		top.g_channel.inputSource = sourceId;
        top.g_isShowInfoBar = 1;
		top.jumpPage();
	}
    tcl.setting.sendMsgToDBC(4);
	delete sessionStorage.tabListIndex;//删除launcher记忆的tab

}




//四、apps.html 中涉及到的操作函数

//6、进入到对应的app
function jumpToApp()
{
    var appName = arguments[0];
    if(appName !== "netflix" && top.checkNetStatus()==false)
    {
        top.$("operatePage").src="";
        top.preTempPage = "homePage";
        top.$("otherPage").src="connectNetworkRemind.html";
        top.requestFocus(top.otherPage, 0);
        top.setFrameFocusPage("otherPage");
        top.$("otherPage").style.display = "block";
        parent.onBodyBlur();
        return;
    }

    top.g_setting.scaleVideoWindow(0,0,0,0);
    sessionStorage.pipWindow = 0;
    //if (appName == "mmh")
    {
        setTimeout(function () {
            tcl.channel.requestMute(0);
        },1000);
    }
	
    top.appOpenFlag = 1;
    top.g_setting.contextOf5in1   = top.CONTEXT_PANEL_OPERATION;
	
    top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x800,2,0);
    //top.$("main").style.display="none";
    top.main.document.body.style.display = "none";
    top.$("operatePage").style.display="none";
    top.$("otherPage").style.display="none";
    if (appName == "youtube")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.youtube");
        top.g_ulits.openApplication("tbrowser.youtube","https://www.youtube.com/tv?launch=menu&additionalDataUrl=http%3a%2f%2flocalhost%3a56789%2fapps%2fYouTube%2fdial_data");
    }else if (appName == "youtube-test")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.youtube");
        top.g_ulits.openApplication("tbrowser.youtube","http://2017.qual-e.appspot.com/");
    }else if (appName == "html-test")
    {
        tcl.channel.requestInputSource(10)
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.youtube");
        top.g_ulits.openApplication("tbrowser.youtube","http://sm.sw.tclking.com/tcl_browser_test/index.htm");
    }
    else if (appName == "mmh")
    {
        top.RemoteConntrolType = "HbbTV";//lqt- 设置虚拟遥控器的场景类型
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.mmh");
        top.g_ulits.openApplication("tbrowser.mmh","https://5ee0c98f1dcfd0ea1049c70a166bb78b.002d734450b3be6f5d0cb4939aa0a4bc.com");
    }
    else if (appName == "netflix")
    {
        top.RemoteConntrolType = "Netflix";//lqt- 设置虚拟遥控器的场景类型
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","vod.netflix");
        top.g_ulits.sendMsgToApplication("vod.netflix", 0xF063);
        top.g_ulits.sendMsgToApplication("vod.netflix",0xF042);
    }
    else if (appName == "ipla")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/270?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5");
    }
    else if (appName == "golive")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.golive");
        top.g_ulits.openApplication("tbrowser.golive","http://tv.gole.tv/?clientType="+tcl.factory.getClientTypeKey()+"&language="+tcl.setting.menuLanguageCode+"&client_mac="+tcl.setting.networkMAC);
    }
    else if (appName == "browser")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.browser");
        if (localStorage.getItem("navigationURL"))
        {
            top.g_ulits.openApplication("tbrowser.browser",localStorage.getItem("navigationURL"));
        }
        else
        {
            top.g_ulits.openApplication("tbrowser.browser","http://eu.guide.huan.tv/huan123/skin/home2015List.action?skin=D1280_2015&data=GBR_mt56");
        }
    }
    else if (appName == "chili")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","https://zeasn.chili.com/");
    }
    else if (appName == "Chili-eu")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","https://zeasn.chili.com/");
    }
    else if (appName == "viewster")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://www.viewster.tv/viewster_v3/telesystem.html");
    }
    else if (appName == "viewster-foxxum")
    {//Brazil 模板使用的viewster应用，于2019.08.30应产品规划要求下架----by laixg
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://1067564395.a.fxmconnect.com/?app=viewster-16");
    }
    else if (appName == "Viewster-eu")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/171?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5");
    }
    else if (appName == "viewster-v5")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://www.viewster.tv/Viewster_v5/index.html");
    }
    else if (appName == "crash")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://crash.app.nrmmh.tv/live/");
    }
    else if (appName == "sbs")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://s3.tcllauncher.com/html5/SBS/indexTcl.html");
    }
    else if (appName == "yupptv")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://www.yupptv.com/tcl/index.html");
    }
    else if (appName == "foxxum")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://5495564812.fxm6263467844.com/");
    }
    else if (appName == "foxxum-la")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://9723638891.fxm6263467844.com/");
    }
    else if (appName == "foxxum-ida")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://5495564812-india.fxm6263467844.com/");
    }
    else if (appName == "foxxum-ap")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://1022774893.fxm6263467844.com/");
    }
    else if (appName == "foxxum-nt72563-la")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://1022774893.fxm6263467844.com/");
    }
    else if (appName == "orf")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","orf");
        top.g_ulits.openApplication("orf","http://orfhbbtv.orf.apa.net/orf/tvthek/index.html?rb=false&portal=false");
    }
    else if (appName == "deezer")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://apps.zeasn.tv/deezer_music_h5/html/");
    }
    else if (appName == "deezer-foxxum")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://1067564395.a.fxmconnect.com/?app=deezer");
    }
    else if (appName == "deezer-eu")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.mmh");
        top.g_ulits.openApplication("tbrowser.mmh","http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/55?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5");
    }
    else if (appName == "deezer-ph")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.mmh");
        top.g_ulits.openApplication("tbrowser.mmh","https://tv.deezer.com/smarttv/8caf9315c1740316053348a24d25afc7/philips/");
    }
    else if (appName == "dailymotion-foxxum")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://1067564395.a.fxmconnect.com/?app=dailymotion");
    }
    else if (appName == "dailymotion")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","https://tvapp.zeasn.tv/homepage_api/rect/dailymotion");
    }
    else if (appName == "cinetrailer")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://1067564395.a.fxmconnect.com/?app=cinetrailer");
    }
    else if (appName == "Cinetrailer-eu")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/222?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5");
    }
    else if (appName == "hellokids")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://1067564395.a.fxmconnect.com/?app=hellokids");
    }
    else if (appName == "icflix")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://native.icflix.com/cotjnlort7gnfAsWFelr/tcl/index.html");
    }
    else if (appName == "lanacion")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://smart.lanacion.com/");
    }
    else if (appName == "EpicTV")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/58?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5");
    }
    else if (appName == "epic_tv")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://www.yupptv.com/tcl/index.html");
    }
    else if (appName == "vilanoise")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://1067564395.a.fxmconnect.com/?app=vilanoise");
    }
    else if (appName == "ToonGoggles")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/161?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5");
    }
    else if (appName == "toongoggles-h5")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://html5.toongoggles.com");
    }
    else if (appName == "amazon")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.amazon");
        top.g_ulits.openApplication("tbrowser.amazon","https://atv-ext-eu.amazon.com/blast-app-hosting/html5/index.html?deviceTypeID=A3T3XXY42KZQNP&geoLocation=de");
    }
    else if (appName == "Crackle")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://crackleott.s3.amazonaws.com/svod/tcl/prod/index.html");
    }
    else if (appName == "crackle-a")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://crackleott.s3.amazonaws.com/tcl/prod/index.html");
    }
    else if (appName == "CrackleTest")//暂时给AU测试  使用
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://crackleott.s3.amazonaws.com/svod/tcl/qa/index.html?geoCode=MX");
    }
    else if (appName == "Euronews")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/62?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5");
    }
    else if (appName == "iConcerts")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/87?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5");
    }
    else if (appName == "iconcerts")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","https://www3.iconcerts.com/tvapps/nettv/index.html");
    }
    else if (appName == "Banaxi")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/201?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5");
    }
    else if (appName == "Euroleague")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/61?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5");
    }
    else if (appName == "Howdini")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/81?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5");
    }
    else if (appName == "Babbidiboo")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://1067564395.a.fxmconnect.com/?app=babi");
    }
    else if (appName == "dbu")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/229?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5");
    }
    else if (appName == "Deutscher-Kanu-Verband")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/232?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5");
    }
    else if (appName == "Goodwood-Festival-of-Speed")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/75?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5");
    }
    else if (appName == "Inside-Sailing")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/91?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5");
    }
    else if (appName == "lfl")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/101?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5");
    }
    else if (appName == "Mongoose-Jam")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/113?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5");
    }
    else if (appName == "kodi")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.kodi");
        top.g_ulits.openApplication("tbrowser.common","http://127.0.0.1:1234/index.html");
    }
    else if (appName == "bigstar")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://preview.bigstar.tv/tcl/");
    }
    else if (appName == "bigstar-latino")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://bigstarlatino.com/tcl/");
    }
    else if (appName == "hungama")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://vizio.tvapps.hungama.com/");
    }
    else if (appName == "filmboxlive")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://www.filmboxliveapp.net/opr/tvapp/");
    }
    else if (appName == "tunein")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://tv.tunein.com/");
    }
    else if (appName == "zeasn")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://tcl.store.zeasn.com/v1.1/?language="+tcl.setting.menuLanguageCode+"&region="+tcl.setting.zoneCode+"&client_type="+tcl.factory.getClientTypeKey()+"&userid="+tcl.setting.getUserId);
    }
	else if (appName == "zeasn-scbc")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://linux.store.zeasn.com/odm/v1.1/index.html?language="+tcl.setting.menuLanguageCode+
            "&user_id="+tcl.setting.getUserId +"&client_type="+tcl.factory.getClientTypeKey());
    }
    else if (appName == "wuaki")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","https://tcl-app.wuaki.tv/");
    }
    else if (appName == "wsj")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://api-cbd.netrange.com/netrange/v1/open_url/174?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5");
    }
    else if (appName == "sailing")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://api-cbd.netrange.com/netrange/v1/open_url/159?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5");
    }
    else if (appName == "giong-hat-viet")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://apps.store.zeasn.com/btcgionghatvietnhi/show.html");
    }
    else if (appName == "yan_news")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://apps.store.zeasn.com/YanNewsTube/show.html");
    }
    else if (appName == "60_giay_official")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://apps.store.zeasn.com/UCRjzfa1E0gA50lvDQipbDMg/show.html");
    }
    else if (appName == "the_voice_global")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://apps.store.zeasn.com/thevoiceglobal/show.html");
    }
    else if (appName == "abs_cbn_news")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://apps.store.zeasn.com/abscbnnews/show.html");
    }
    else if (appName == "myxtv")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://apps.store.zeasn.com/myxtvusa/show.html");
    }
    else if (appName == "indysong_kids")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://apps.store.zeasn.com/indysong/show.html");
    }
    else if (appName == "doonung_comedy")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://apps.store.zeasn.com/UCNOuO6uOrpyw-hpf8pyB0eQ/show.html");
    }
    else if (appName == "gmm25thailand")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://apps.store.zeasn.com/gmmchannel/show.html");
    }
    else if (appName == "weather_nation")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://data.weathernationtv.com/apps/operatv/index.html?uid=7f377ecb70d038b4efc4181f943af986e7b53f1fd347adbd02088b2dbd487d05xweathernation");
    }
    else if (appName == "ivi")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://stb.ivi.ru");
    }
    else if (appName == "megogo")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://tcl-app.megogo.net");
    }
    else if (appName == "tvigle")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://zeasn.v4.tvigle.ru");
    }
    else if (appName == "bonus-tv")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://bonus-tv.ru:90/nettv/");
    }
    else if (appName == "adagio_tv")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://apps.tvstore.opera.com/video_application/?bg=jpg&target_user=adagio_tv&app_id=134944#fix");
    }
    else if (appName == "tvrain")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://smarttv.tvrain.ru/");
    }
    else if (appName == "btv-tvigle")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://zeasn.btv.tvigle.ru");
    }
    else if (appName == "yandex")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common"," http://hw.yandex.ru/ph");
    }
    else if (appName == "ludo")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://smartgames.tv/SG/ludo/");
    }
    else if (appName == "see-ua")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://nettv.see.ua");
    }
    else if (appName == "meteonews")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://meteo.dotscreen.com/2.0/phg.phcehtml?utm_source=NetTV&utm_medium=portal&utm_campaign=V2");
    }
    else if (appName == "qubit")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://1067564395.a.fxmconnect.com/?app=qubit");
    }
    else if (appName == "globo")
    {

		var str = tcl.factory.getProductInfo().swName;
        var version = parseInt(str.substring(15,str.length));
        if(version>=128)
		{
			tcl.channel.requestInputSource(10);
			top.g_setting.setProperty("app.ui.currentApp","globoSDK");
			top.g_ulits.openApplication("tvos.globoplay.activity","");			
		}
		else
		{
			tcl.channel.requestInputSource(10);
			top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
			top.g_ulits.openApplication("tbrowser.common","https://tv.globoplay.com.br/semp/index.html");			
		}
    }
    else if (appName == "Globoplay-SDK")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","globoSDK");
        top.g_ulits.openApplication("tvos.globoplay.activity","");
    }
    else if (appName == "looke")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://tcllooke.ottvs.com.br/");
    }
    else if (appName == "kidsplay")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://1067564395.a.fxmconnect.com/?app=playkids");
    }
    else if (appName == "sbt")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://1067564395.a.fxmconnect.com/?app=sbt");
    }
    else if (appName == "babidiboo")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://brasil.fxmconnect.com/babidiboo/app/");
    }
    else if (appName == "russia_24")//LZZV069  russia  SCBC-EU-MT5655-0PKVL
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://apps.store.zeasn.com/Russia24TV/show.html");
    }    
    else if (appName == "tnt_music")//LZZV069  russia  SCBC-EU-MT5655-0PKVL
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://tntmusic.tv.infolio-lab.com/tntmusic/");
    }
    else if (appName == "radioline")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://zeasn.radioline.co/");
    }
    else if (appName == "soundcloud")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","https://apps.zeasn.tv/soundcloud_web/html/index.html?snum=TCL_v1.0.0");
    }
    else if (appName == "skuff-foxxum")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://1067564395.a.fxmconnect.com/?app=skufftv");
    }
    else if (appName == "telediario")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://1067564395.a.fxmconnect.com/?app=telediario");
    }
    else if (appName == "vilanoise-mmh")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://api-cbd.netrange.com/netrange/v1/open_url/172?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5");
    }
    else if (appName == "baeblemusic")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://smarttv.baeblemusic.com/");
    }
    else if (appName == "sambaHotlist")
    {
        
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","https://hotlist.samba.tv");
    }
	else if (appName == "TelecinePlay")
    {
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.common");
        top.g_ulits.openApplication("tbrowser.common","http://tlc-tv-apps.s3.amazonaws.com/prod/semptcl/index.html");
    }
    else if (arguments.length>1)
    {
        var mode;
        var url;
        if (arguments.length==2)
        {
            mode = "tbrowser.common";
            url = arguments[1];
        }
        else if (arguments.length==3)
        {
            mode = arguments[1];
            url = arguments[2];
        }
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp",mode);
        top.g_ulits.openApplication(mode,url);
    }
    else
    {
        var targetUrl = appName.replace("client_type","clienttype");
        targetUrl = targetUrl.replace("mac","client_mac");
        tcl.channel.requestInputSource(10);
        top.g_setting.setProperty("app.ui.currentApp","tbrowser.golive");
        top.g_ulits.openApplication("tbrowser.golive","http://tv.gole.tv/index.php?"+targetUrl);
       
        
        var title=getParameter4General2(appName,"title");
        var pic_url=getParameter4General2(appName,"pic_url");
        
        storeHistoryData('42',targetUrl,title,pic_url);//42:golive视频   
    }
    try {
        if (top.pressOkObject) {
            var appPicUrl = top.pressOkObject.getElementsByTagName('img')[0].src;
            var fore = top.pressOkObject.getElementsByClassName('app_foreground');
            if (fore.length>0)
            {
                appPicUrl = fore[0].src;
            }
            var appTitle = top.pressOkObject.getElementsByClassName('elem_block_title')[0].innerHTML;
            if (!appTitle) {
                appTitle = arguments[0];
                if(appTitle == 'zeasn' || appTitle == 'foxxum'){
                    appTitle = 'App Store';
                }
                else if (appTitle == 'netflix'){
                    appTitle = 'Netflix';
                }
            }
            if (appPicUrl.indexOf("#original=") != -1)
            {
                appPicUrl = decodeURIComponent(appPicUrl.substring(appPicUrl.indexOf("#original=")+10, appPicUrl.length));
            }
            storeAppData(arguments[0], appPicUrl, appTitle, getappURL(appName));//id，海报，标题
        }
    } catch (e) {
        console.log(e);
    }
}

function jumpLocalApps(name)
{
    //delete sessionStorage.tabListIndex;
    if (name == "miracast")
    {
        top.jumpToOperatePage("networkSetting/miracast.html");
    }
    else if (name == "emanual")
    {
    	top.preTempPage = "homePage";
        top.jumpToOperatePage("eManual/eManualFirst.html?0");
    }
    else if (name == "nscreen")
    {
        top.jumpToOperatePage("nScreenStart.html");
    }
    else if (name == "tcast")
    {
        top.jumpToOperatePage("tcast.html");
    }
    try {
        if (top.pressOkObject) {
            var appPicUrl = top.pressOkObject.getElementsByTagName('img')[0].src;
            var fore = top.pressOkObject.getElementsByClassName('app_foreground');
            if (fore.length>0)
            {
                appPicUrl = fore[0].src;
            }
            var appTitle = top.pressOkObject.getElementsByClassName('elem_block_title')[0].innerHTML;
            if (!appTitle) {
                appTitle = arguments[0];
            }
            if (appPicUrl.indexOf("#original=") != -1)
            {
                appPicUrl = decodeURIComponent(appPicUrl.substring(appPicUrl.indexOf("#original=")+10, appPicUrl.length));
            }
            storeAppData(arguments[0], appPicUrl, appTitle);//id，海报，标题
        }
    } catch (e) {

    }
}


//5、上导航栏内容

//7、跳转到 “媒体中心” 页面  参数：无
function jumpToMedia()
{
	var usbLock = top.g_factory.usbLock;
	var hotelEnable = top.g_factory.hotelEnable;
	delete sessionStorage.tabListIndex;//删除launcher记忆的tab
	if((usbLock) && (hotelEnable))
	{
		top.$('main').src = "password.html?usbLock";
		top.main.focus();
	}
	else
	{
		top.isFromOptionIntoUsb=0;
		top.$('main').src = "deviceList.html";
		top.main.focus();
	}
}

//8、跳转到 “设置” 页面  参数：无
function jumpToSetting()
{
	top.jumpToOperatePage("index.html");
}


//9、跳转到 “网络设置” 页面 参数：无
function jumpToNetwork()
{
	top.g_nextHtmlPage = "networkSetting.html";
	top.jumpToOperatePage("index.html");
}


//解析URL中参数的函数
function getParameter4General(url,navName)
{
	var n=url.indexOf("?");
	var urlStr=url.substring(n+1,url.length);
	var result=urlStr.split('&');

	for(var i=0;i<result.length;i++)
	{

		var keyValue=result[i].toString();
		if(keyValue.indexOf(navName)==0)
		{
			var n2=keyValue.indexOf('=');
			var strr=keyValue.substring(n2+1,keyValue.length);
			return strr;
		}
	}
}


function getParameter4General2(url,navName)
{
	var urlStr=url;
	var result=urlStr.split('&');
	
	for(var i=0;i<result.length;i++)
	{
	
	    var keyValue=result[i].toString();
	  	if(keyValue.indexOf(navName)==0)
	  	{
	  		var n2=keyValue.indexOf('=');
	  		var strr=keyValue.substring(n2+1,keyValue.length);
	  		return strr;
	  	}
	} 
}


// store the play video to history 
var json;
function storeHistoryData(licenceId,vid,titleValue,urlImageValue,appName,startType,playUrl)
{  
    var historyData;
    if(supportLocalStorage())
    {
        json=JSON.parse(localStorage.getItem("history"));
    }
    else
    {
        console.log("不支持localStorage");
    }

    var myDate = new Date();
    var year=myDate.getFullYear();;
    var month=RunTime(myDate.getMonth()+1,2);
    var day=RunTime(myDate.getDate(),2);
    
    historyData =
	{	
    	"year": year,
	    "month": month,
	    "day": day,
	    "source": licenceId,
	    "vid":vid,
	    "title": titleValue,
	    "url": urlImageValue,
	    "totaltime": "5",
	    "playtime": "3",
        //新增参数
        "appName": appName,
        "startType": startType,
        "playUrl": playUrl,
    };
    //delete push
    if(json)
    {
        json=delSecond(vid);
        json= delLastOne();
        json.historyItem.unshift(historyData);
    }
    else
    {
        json={ "historyItem": []};
        json.historyItem.push(historyData);
    }
    var strHis=JSON.stringify(json);
    if(supportLocalStorage())
    {
        try
        {
            localStorage.setItem("history",strHis);
        }
        catch(e)
        {
            if(e==QUOTA_EXCEEDED_ERR)
            {
                console.log('Storage capacity');
            }
        }
    }
    else
    {
        console.log("不支持localStorage");
    }
}

var appJson;
//储存App的信息
function storeAppData(appId, appPicUrl, appTitle, url) {
    var historyData;
    if (supportLocalStorage()) {
        appJson = JSON.parse(localStorage.getItem("appHistory"));
    }
    else {
        console.log("不支持localStorage");
    }


    var myDate = new Date();
    var year = myDate.getFullYear();
    ;
    var month = RunTime(myDate.getMonth() + 1, 2);
    var day = RunTime(myDate.getDate(), 2);


    if (appPicUrl && appPicUrl.indexOf("://") < 0) {
        appPicUrl = location.href.substring(0, location.href.lastIndexOf("/") + 1) + appPicUrl;
    }
    console.log("--hzm storeAppData appId = " + appId + "  appPicUrl = " + appPicUrl + "  appTitle = " + appTitle + "  url = " + url);
    historyData = {
        "year": year,
        "month": month,
        "day": day,
        "appId": appId,
        "appPicUrl": appPicUrl,
        "appTitle": appTitle,
        "appUrl": url
    };
    //delete push
    if (appJson) {
        appJson = delSecondApp(appTitle);
        appJson = delLastOneApp();
        appJson.historyItem.unshift(historyData);
    }
    else {
        appJson = {
            "historyItem": []
        };
        appJson.historyItem.push(historyData);
    }
    var strHis = JSON.stringify(appJson);
    if (supportLocalStorage()) {
        try {
            localStorage.setItem("appHistory", strHis);
        }
        catch (e) {
            if (e == QUOTA_EXCEEDED_ERR) {
                console.log('Storage capacity');
            }
        }
    }
    else {
        console.log("不支持localStorage");
    }
}

function RunTime(num, n)
{
    var len = num.toString().length;
    while(len<n)
    {
        num = "0" + num;
        len++;	
    }
    return num;
}

function supportLocalStorage()
{
    try{

        if(!!window.localStorage)return window.localStorage;
    }
    catch(e)
    {
        return undefined;
    }
}

//delete last one
function delLastOne()
{
    var n=json.historyItem.length;
    if(n>25000)
    {
        json.historyItem.splice(n-1,1);
    }
    return json;
}

//delete repeat data
function delSecond(id)
{
    for(var k=0;k<json.historyItem.length;k++)
    {
        if(json.historyItem[k].vid==id)
        {
            json.historyItem.splice(k,1);
        }
    }
    return json;
}

//delete last one App
function delLastOneApp() {
    var n = appJson.historyItem.length;
    if (n > 99) {
        appJson.historyItem.splice(n - 1, 1);
    }
    return appJson;
}
//delete repeat data App
function delSecondApp(appId) {
    for (var k = 0; k < appJson.historyItem.length; k++) {
        if (appJson.historyItem[k].appTitle == appId) {
            appJson.historyItem.splice(k, 1);
        }
    }
    return appJson;
}

function formatId(id) {
    return (id < 10 ? 'apps_0' : 'apps_') + id;
}

function formatBorderId(id) {
    return (id < 10 ? 'border_apps_0' : 'border_apps_') + id;
}

function updateZeasn() {
    var data = '[]';
    if (!tcl.utils.getData)
      return;
    var fav = JSON.parse(tcl.utils.getData("zeasn-fav-app", data));
    
    var container = document.getElementById('appsPage');
	var root = document;
	if (!container)
	{
		var tabs = document.getElementById("iframeDiv").getElementsByTagName("iframe");
		for (var i=0; i<tabs.length; i++)
		{
			container = tabs[i].contentWindow.document.getElementById('appsPage');
			if (container)
			{
				root = tabs[i].contentWindow.document;
				break;
			}
		}
		if (!container)
			return;
	}
    var apps = container.getElementsByClassName('appicon');
    var borders = container.getElementsByClassName('border');

    var j = apps.length;
    var rightPage = [apps[j - 2].getAttribute('data-rightPage'), apps[j - 1].getAttribute('data-rightPage')];
    for (var i=0;i<apps.length;)
    {
      if (apps[i].getAttribute('data-type')=='zeasn')
      {
        container.removeChild(apps[i]);
        container.removeChild(borders[i+1]);
      }
      else
      {
        i++;
      }
    }

    j = apps.length;
    var id = parseInt(apps[j - 3].id.replace('apps_', ''));
    var left = apps[j - 1].style.left;
    var top = apps[j - 1].style.top;
    
    if (fav.length == 0) {
        if (top == '63px') {
            apps[j - 1].setAttribute('data-down', '0');
            apps[j - 1].setAttribute('data-up', '0');
            apps[j - 1].setAttribute('data-right', '-1');

            apps[j - 2].setAttribute('data-right', '-1');
            apps[j - 2].setAttribute('data-down', '0');
            
            apps[j - 3].setAttribute('data-down', formatId(101));
            apps[j - 3].setAttribute('data-right', formatId(100));
            
            apps[j - 4].setAttribute('data-right', formatId(101));
            
            apps[j - 1].setAttribute('id', formatId(100));
            root.getElementById(apps[j - 1].getAttribute('data-focus_id')).setAttribute('id', formatBorderId(100));
            apps[j - 1].setAttribute('data-focus_id', formatBorderId(100));
            
            apps[j - 2].setAttribute('id', formatId(101));
            root.getElementById(apps[j - 2].getAttribute('data-focus_id')).setAttribute('id', formatBorderId(101));
            apps[j - 2].setAttribute('data-focus_id', formatBorderId(101));
        }
        else {
            apps[j - 1].setAttribute('data-down', '0');
            apps[j - 1].setAttribute('data-up', formatId(100));
            apps[j - 1].setAttribute('data-right', '-1');

            apps[j - 2].setAttribute('data-right', '-1');
            apps[j - 2].setAttribute('data-down', formatId(101));
            
            apps[j - 4].setAttribute('data-right', formatId(100));
            
            apps[j - 3].setAttribute('data-right', formatId(101));
            
            apps[j - 1].setAttribute('id', formatId(101));
            root.getElementById(apps[j - 1].getAttribute('data-focus_id')).setAttribute('id', formatBorderId(101));
            apps[j - 1].setAttribute('data-focus_id', formatBorderId(101));
            
            apps[j - 2].setAttribute('id', formatId(100));
            root.getElementById(apps[j - 2].getAttribute('data-focus_id')).setAttribute('id', formatBorderId(100));
            apps[j - 2].setAttribute('data-focus_id', formatBorderId(100));
        }
        apps[j - 1].setAttribute('data-rightPage', rightPage.shift());
        apps[j - 2].setAttribute('data-rightPage', rightPage.shift());
        id += 2;
    }
    else if (fav.length == 1) {
        apps[j - 2].setAttribute('id', formatId(id + 1));
        root.getElementById(apps[j - 2].getAttribute('data-focus_id')).setAttribute('id', formatBorderId(id + 1));
        apps[j - 2].setAttribute('data-focus_id', formatBorderId(id + 1));
        if (top == '63px') {
            apps[j - 2].setAttribute('data-right', formatId(101));
            apps[j - 1].setAttribute('data-down', formatId(101));
            apps[j - 3].setAttribute('data-down', formatId(id + 1));
            apps[j - 3].setAttribute('data-right', formatId(100));
            
            apps[j - 1].setAttribute('id', formatId(100));
            root.getElementById(apps[j - 1].getAttribute('data-focus_id')).setAttribute('id', formatBorderId(100));
            apps[j - 1].setAttribute('data-focus_id', formatBorderId(100));
        }
        else {
            apps[j - 2].setAttribute('data-right', formatId(100));
            apps[j - 1].setAttribute('data-up', formatId(id + 1));
            apps[j - 2].setAttribute('data-down', formatId(101));
            apps[j - 3].setAttribute('data-right', formatId(101));
            
            apps[j - 1].setAttribute('id', formatId(101));
            root.getElementById(apps[j - 1].getAttribute('data-focus_id')).setAttribute('id', formatBorderId(101));
            apps[j - 1].setAttribute('data-focus_id', formatBorderId(101));
        }
        apps[j - 4].setAttribute('data-right', formatId(id + 1));
        id += 2;
    }
    else {
        apps[j - 2].setAttribute('id', formatId(id + 1));
        root.getElementById(apps[j - 2].getAttribute('data-focus_id')).setAttribute('id', formatBorderId(id + 1));
        apps[j - 2].setAttribute('data-focus_id', formatBorderId(id + 1));
        if (top == '63px') {
            apps[j - 2].setAttribute('data-right', (fav.length > 2) ? formatId(id + 3) : formatId(101));
            apps[j - 2].setAttribute('data-up', formatId(id));
            apps[j - 3].setAttribute('data-down', formatId(id + 1));
            apps[j - 1].setAttribute('data-right', (fav.length > 3) ? formatId(id + 4) : formatId(100));
            apps[j - 1].setAttribute('data-down', (fav.length > 2) ? formatId(id + 1) : formatId(101));
        }
        else {
            apps[j - 2].setAttribute('data-right', (fav.length > 2) ? formatId(id + 3) : formatId(100));
            apps[j - 2].setAttribute('data-down', formatId(id + 2));
            apps[j - 1].setAttribute('data-up', formatId(id + 1));
            apps[j - 1].setAttribute('data-right', (fav.length > 3) ? formatId(id + 4) : formatId(101));
        }

        apps[j - 4].setAttribute('data-right', formatId(id + 1));
        apps[j - 3].setAttribute('data-right', formatId(id + 2));
        apps[j - 1].setAttribute('id', formatId(id + 2));
        root.getElementById(apps[j - 1].getAttribute('data-focus_id')).setAttribute('id', formatBorderId(id + 2));
        apps[j - 1].setAttribute('data-focus_id', formatBorderId(id + 2));

        id += 2;
    }
    for (var i = 0; i < fav.length; i++) {
        var app = document.createElement('div');
        var border = document.createElement('div');
        app.className = 'appicon';

        if (top == "63px") {
            app.style.top = top = '353px';
            app.style.left = left;
            app.id = ((i + 2) < fav.length) ? formatId(id + 1) : formatId(101);
            app.setAttribute('data-up', ((i+1)<fav.length)?formatId(id):formatId(100));
            app.setAttribute('data-down', '0');
            app.setAttribute('data-right', ((i + 2) < fav.length) ? (((i + 4) < fav.length) ? formatId(id + 3) : formatId(101)) : '-1');
            border.id = ((i + 2) < fav.length) ? formatBorderId(id + 1) : formatBorderId(101);
            border.style.left = parseInt(left) - 25 + "px";
            border.style.top = '328px';
        }
        else {
            app.style.top = top = '63px';
            app.style.left = left = parseInt(left) + 291 + "px";
            app.id = ((i + 2) < fav.length) ? formatId(id + 1) : formatId(100);
            app.setAttribute('data-up', '0');
            app.setAttribute('data-down', ((i + 1) < fav.length) ? (((i + 3) < fav.length) ? formatId(id + 2) : formatId(101)) : '0');
            app.setAttribute('data-right', ((i + 2) < fav.length) ? (((i + 4) < fav.length) ? formatId(id + 3) : formatId(100)) : '-1');
            border.id = ((i + 2) < fav.length) ? formatBorderId(id + 1) : formatBorderId(100);
            border.style.left = parseInt(left) - 25 + "px";
            border.style.top = '38px';
        }
        app.setAttribute('onclick', "jumpToApp('zeasn-app','" + fav[i].url + "');FocusId('"+app.id+"');actionFive_Click('5','0_au_apps03_0','" + fav[i].name + "','')");
        app.setAttribute('data-left', formatId(id - 1));

        if ((i + 2) >= fav.length) {
            app.setAttribute('data-rightPage', rightPage.shift());
        }
        app.setAttribute('data-focus_id', border.id);
        app.innerHTML = '<img src="' + fav[i].icon + '"  class="iconimag"/><span class="elem_block_title">' + fav[i].name + '</span>';
        app.setAttribute('data-type', 'zeasn');
        container.appendChild(app);
        border.className = 'elem_border border';
        border.style.visibility = "hidden";
        border.style.width = "268px";
        border.style.height = "268px";
        border.setAttribute('onclick', "jumpToApp('zeasn-app','" + fav[i].url + "')");
        container.appendChild(border);
        id += 1;
    }
}

function getappURL(appname) {
    apps["youtube"] = {"url": "https://www.youtube.com/tv?launch=menu&additionalDataUrl=http%3a%2f%2flocalhost%3a56789%2fapps%2fYouTube%2fdial_data"};
    apps["youtube-test"] = {"url": "http://2017.qual-e.appspot.com/"};
    apps["html-test"] = {"url": "http://sm.sw.tclking.com/tcl_browser_test/index.htm"};
    apps["mmh"] = {"url": "https://5ee0c98f1dcfd0ea1049c70a166bb78b.002d734450b3be6f5d0cb4939aa0a4bc.com"};
    apps["netflix"] = {"url": ""};
    apps["ipla"] = {"url": "http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/270?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5"};
    apps["golive"] = {"url": "http://tv.gole.tv/?clientType="+tcl.factory.getClientTypeKey()+"&language="+tcl.setting.menuLanguageCode+"&client_mac="+tcl.setting.networkMAC};
    apps["browser"] = {"url": "http://eu.guide.huan.tv/huan123/skin/home2015List.action?skin=D1280_2015&data=GBR_mt56"};
    apps["chili"] = {"url": "https://zeasn.chili.com/"};
    apps["Chili-eu"] = {"url": "https://zeasn.chili.com/"};
    apps["viewster"] = {"url": "http://www.viewster.tv/viewster_v3/telesystem.html"};
    apps["viewster-foxxum"] = {"url": "http://1067564395.a.fxmconnect.com/?app=viewster-16"};
    apps["Viewster-eu"] = {"url": "http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/171?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5"};
    apps["viewster-v5"] = {"url": "http://www.viewster.tv/Viewster_v5/index.html"};
    apps["crash"] = {"url": "http://crash.app.nrmmh.tv/live/"};
    apps["sbs"] = {"url": "http://s3.tcllauncher.com/html5/SBS/indexTcl.html"};
    apps["yupptv"] = {"url": "http://www.yupptv.com/tcl/index.html"};
    apps["foxxum"] = {"url": "http://5495564812.fxm6263467844.com/"};
    apps["foxxum-la"] = {"url": "http://9723638891.fxm6263467844.com/"};
    apps["foxxum-ida"] = {"url": "http://5495564812-india.fxm6263467844.com/"};
    apps["foxxum-ap"] = {"url": "http://1577279406.fxm6263467844.com/"};
    apps["foxxum-nt72563-la"] = {"url": "http://1022774893.fxm6263467844.com/"};
    apps["orf"] = {"url": "http://orfhbbtv.orf.apa.net/orf/tvthek/index.html?rb=false&portal=false"};
    apps["deezer"] = {"url": "http://apps.zeasn.tv/deezer_music_h5/html/"};
    apps["deezer-foxxum"] = {"url": "http://1067564395.a.fxmconnect.com/?app=deezer"};
    apps["deezer-eu"] = {"url": "http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/55?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5"};
    apps["deezer-ph"] = {"url": "https://tv.deezer.com/smarttv/8caf9315c1740316053348a24d25afc7/philips/"};
    apps["dailymotion-foxxum"] = {"url": "http://1067564395.a.fxmconnect.com/?app=dailymotion"};
    apps["dailymotion"] = {"url": "https://tvapp.zeasn.tv/homepage_api/rect/dailymotion"};
    apps["cinetrailer"] = {"url": "http://1067564395.a.fxmconnect.com/?app=cinetrailer"};
    apps["Cinetrailer-eu"] = {"url": "http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/222?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5"};
    apps["hellokids"] = {"url": "http://1067564395.a.fxmconnect.com/?app=hellokids"};
    apps["icflix"] = {"url": "http://native.icflix.com/cotjnlort7gnfAsWFelr/tcl/index.html"};
    apps["lanacion"] = {"url": "http://smart.lanacion.com/"};
    apps["EpicTV"] = {"url": "http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/58?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5"};
    apps["epic_tv"] = {"url": "http://www.yupptv.com/tcl/index.html"};
    apps["vilanoise"] = {"url": "http://1067564395.a.fxmconnect.com/?app=vilanoise"};
    apps["ToonGoggles"] = {"url": "http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/161?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5"};
    apps["toongoggles-h5"] = {"url": "http://html5.toongoggles.com"};
    apps["amazon"] = {"url": "https://atv-ext-eu.amazon.com/blast-app-hosting/html5/index.html?deviceTypeID=A3T3XXY42KZQNP&geoLocation=de"};
    apps["Crackle"] = {"url": "http://crackleott.s3.amazonaws.com/svod/tcl/prod/index.html"};
    apps["crackle-a"] = {"url": "http://crackleott.s3.amazonaws.com/tcl/prod/index.html"};
    apps["CrackleTest"] = {"url": "http://crackleott.s3.amazonaws.com/svod/tcl/qa/index.html?geoCode=MX"};
    apps["Euronews"] = {"url": "http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/62?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5"};
    apps["euronews-zeasn"] = {"url": "http://www.euronews.com/_partners/philips/"};
    apps["iConcerts"] = {"url": "http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/87?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5"};
    apps["iconcerts"] = {"url": "https://www3.iconcerts.com/tvapps/nettv/index.html"};
    apps["Banaxi"] = {"url": "http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/201?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5"};
    apps["Euroleague"] = {"url": "http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/61?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5"};
    apps["Howdini"] = {"url": "http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/81?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5"};
    apps["Babbidiboo"] = {"url": "http://1067564395.a.fxmconnect.com/?app=babi"};
    apps["dbu"] = {"url": "http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/229?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5"};
    apps["Deutscher-Kanu-Verband"] = {"url": "http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/232?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5"};
    apps["Goodwood-Festival-of-Speed"] = {"url": "http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/75?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5"};
    apps["Inside-Sailing"] = {"url": "http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/91?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5"};
    apps["lfl"] = {"url": "http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/101?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5"};
    apps["Mongoose-Jam"] = {"url": "http://backend.drupal7.netrangemmh.com/netrange/v1/open_url/113?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5"};
    apps["kodi"] = {"url": "http://127.0.0.1:1234/index.html"};
    apps["bigstar"] = {"url": "http://preview.bigstar.tv/tcl/"};
    apps["bigstar-latino"] = {"url": "http://bigstarlatino.com/tcl/"};
    apps["hungama"] = {"url": "http://vizio.tvapps.hungama.com/"};
    apps["filmboxlive"] = {"url": "http://www.filmboxliveapp.net/opr/tvapp/"};
    apps["tunein"] = {"url": "http://tv.tunein.com/"};
    apps["zeasn"] = {"url": "http://tcl.store.zeasn.com/v1.1/?language="+tcl.setting.menuLanguageCode+"&region="+tcl.setting.zoneCode+"&client_type="+tcl.factory.getClientTypeKey()+"&userid="+tcl.setting.getUserId};
    apps["zeasn-scbc"] = {"url": "http://linux.store.zeasn.com/odm/v1.1/index.html?language="+tcl.setting.menuLanguageCode+"&user_id="+tcl.setting.getUserId +"&client_type="+tcl.factory.getClientTypeKey()};
    apps["wuaki"] = {"url": "https://tcl-app.wuaki.tv/"};
    apps["wsj"] = {"url": "http://api-cbd.netrange.com/netrange/v1/open_url/174?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5"};
    apps["sailing"] = {"url": "http://api-cbd.netrange.com/netrange/v1/open_url/159?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5"};
    apps["giong-hat-viet"] = {"url": "http://apps.store.zeasn.com/btcgionghatvietnhi/show.html"};
    apps["yan_news"] = {"url": "http://apps.store.zeasn.com/YanNewsTube/show.html"};
    apps["60_giay_official"] = {"url": "http://apps.store.zeasn.com/UCRjzfa1E0gA50lvDQipbDMg/show.html"};
    apps["the_voice_global"] = {"url": "http://apps.store.zeasn.com/thevoiceglobal/show.html"};
    apps["abs_cbn_news"] = {"url": "http://apps.store.zeasn.com/abscbnnews/show.html"};
    apps["myxtv"] = {"url": "http://apps.store.zeasn.com/myxtvusa/show.html"};
    apps["indysong_kids"] = {"url": "http://apps.store.zeasn.com/indysong/show.html"};
    apps["doonung_comedy"] = {"url": "http://apps.store.zeasn.com/UCNOuO6uOrpyw-hpf8pyB0eQ/show.html"};
    apps["gmm25thailand"] = {"url": "http://apps.store.zeasn.com/gmmchannel/show.html"};
    apps["weather_nation"] = {"url": "http://1067564395.a.fxmconnect.com/?app=weather"};
    apps["ivi"] = {"url": "http://stb.ivi.ru"};
    apps["megogo"] = {"url": "http://tcl-app.megogo.net"};
    apps["tvigle"] = {"url": "http://zeasn.v4.tvigle.ru"};
    apps["bonus-tv"] = {"url": "http://bonus-tv.ru:90/nettv/"};
    apps["adagio_tv"] = {"url": "http://apps.tvstore.opera.com/video_application/?bg=jpg&target_user=adagio_tv&app_id=134944#fix"};
    apps["tvrain"] = {"url": "http://smarttv.tvrain.ru/"};
    apps["btv-tvigle"] = {"url": "http://zeasn.btv.tvigle.ru"};
    apps["yandex"] = {"url": "http://hw.yandex.ru/ph"};
    apps["ludo"] = {"url": "http://smartgames.tv/SG/ludo/"};
    apps["see-ua"] = {"url": "http://nettv.see.ua"};
    apps["meteonews"] = {"url": "http://meteo.dotscreen.com/2.0/phg.phcehtml?utm_source=NetTV&utm_medium=portal&utm_campaign=V2"};
    apps["qubit"] = {"url": "http://1067564395.a.fxmconnect.com/?app=qubit"};
    apps["globo"] = {"url": "https://tv.globoplay.com.br/semp/index.html"};
    apps["looke"] = {"url": "http://tcllooke.ottvs.com.br/"};
    apps["kidsplay"] = {"url": "http://1067564395.a.fxmconnect.com/?app=playkids"};
    apps["sbt"] = {"url": "http://1067564395.a.fxmconnect.com/?app=sbt"};
    apps["babidiboo"] = {"url": "http://brasil.fxmconnect.com/babidiboo/app/"};
    apps["russia_24"] = {"url": "http://apps.store.zeasn.com/Russia24TV/show.html"};
    apps["tnt_music"] = {"url": "http://tntmusic.tv.infolio-lab.com/tntmusic/"};
    apps["radioline"] = {"url": "http://zeasn.radioline.co/"};
    apps["soundcloud"] = {"url": "https://apps.zeasn.tv/soundcloud_web/html/index.html?snum=TCL_v1.0.0"};
    apps["skuff-foxxum"] = {"url": "http://1067564395.a.fxmconnect.com/?app=skufftv"};
    apps["telediario"] = {"url": "http://1067564395.a.fxmconnect.com/?app=telediario"};
    apps["vilanoise-mmh"] = {"url": "http://api-cbd.netrange.com/netrange/v1/open_url/172?prkey=MzM1I2RlYjU0ZmZiNDFlMDg1ZmQ3ZjY5YTc1YjYzNTljOTg5"};
    apps["baeblemusic"] = {"url": "http://smarttv.baeblemusic.com/"};
    apps["sports5"] = {"url": "http://apps.store.zeasn.com/UCXDG9ue-emCN8Ad3h7lERqQ/show.html"};
    apps[""] = {"url": ""};
    apps[""] = {"url": ""};
    return apps[appname].url;
}

(function(){
    if (!window.tcl){
        var tclApi = {};
        var settingApi = {};
        var channelApi = {};
        var mediaApi = {};
        var factoryApi = {};
        var utilsApi = {};
        settingApi.scaleVideoWindow = function(){}
        settingApi.sendMsgToDBC = function(){}
        settingApi.getProperty = function(){return "";}
        settingApi.setProperty = function(){}
        settingApi.currentDate = "2021-7-7";
        settingApi.currentTime = "11:11:11";
        settingApi.networkIP = "";
        
        channelApi.requestInputSource = function(){}
        channelApi.systemCountry = 0;
        
        mediaApi.deviceStatus = function(){return false;}
        
        utilsApi.setData = function(){}
        
        factoryApi.getProductInfo =function(){return {"swName":""};}
        factoryApi.getClientTypeKey = function(){return "";}
        tclApi.setting = settingApi;
        tclApi.channel = channelApi;
        tclApi.media = mediaApi;
        tclApi.factory = factoryApi;
        tclApi.utils = utilsApi
        window.tcl = tclApi;
        top.titlePageWords = ["Home","Video","TV","App",""];
        top.statusPageWords = ["","","","",""];
        top.homePageWords = ["","","","",""];
        top.videosPageWords = ["","","","",""];
        top.sourceOptions = ["","","","",""];
        top.videosPageWords  = ["","","","",""];
        top.videosPageWords   = ["","","","",""];
        top.checkNetStatus = function(){return true;}
        top.getClientType = function(){return "";}
        top.getDnum = function(){return "";}
        top.getMac = function(){return "";}
        top.getlauncherId = function(){return "";}
        top.getClientType = function(){return "";}
        top.getClientType = function(){return "";}
        top.getClientType = function(){return "";}
        top.getClientType = function(){return "";}
        top.g_setting = settingApi;
    }
})();

(function(){
    var link = document.getElementById("theme");
    //var link = document.createElement("link");
    if (tcl.channel.systemCountry == 41)
    {
        //link.href = "theme_chile.css";
        link.href = link.href.replace("theme_thomson","theme_chile");
    }
    else
    {
        //link.href = "theme_thomson.css";
    }
    //link.setAttribute('rel','stylesheet');
    //link.setAttribute('type','text/css');
    //document.getElementsByTagName("head")[0].appendChild(link);
})();
