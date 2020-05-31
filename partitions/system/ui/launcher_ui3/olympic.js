var page = 2;  //0 medal 2 schedule 3 schedule by date
var pageOffset = 0;
var pageOffset1 = 0;
var baroffset = 0;
var dp = 2;
var currentdate;
var slist;
var dlist;
var chlist;
var mlist;
var melist;
var path = "http://sports.tcllauncher.com/";

var country 	= ["Australia","Austria","Belgium","Bulgaria","Croatia","Czech Republic","Denmark","Finland","France","Germany",
						"Greece","Hungary","Italy","Luxembourg","Netherlands","Norway","Poland","Portugal","Romania","Russia",
						"Serbia","Slovenia","Spain","Sweden","Switzerland","Great Britain","New Zealand"," "/*Arab*/,"Estonia"," "/*Hebrew*/,
						"Latvia","Slovakia","Turkey","Ireland","Japan","Philippines","Thailand","Maldives","Uruguay","Peru",
						"Argentina","Chile","Venezuela","Ecuador","Costarica","Paraguay","Bolivia","Belize","Nicaragua","Guatemala",
						"China","Taiwan","Brazil","Canada","Mexico","United States","South Korea","Others","Lithuania"/*新添加的，底层结构体中没有*/,"Ukraine"/*新添加的，底层结构体中没有*/,
						"Iran","Iraq"," "," ","Uzbekistan"," ","Kyrgyzstan","Algeria","Egypt"," ",
						"Tanzania","Kenya"," "," "," ","Saudi Arabia"," ","Israel"," "," ",
						" "," ","India"," "," "," "," "," ","Sri Lanka"," ",
						"Moldova"," ","EI Salvador"," "," "," ","Jordan"," "," "," ",
						" "," "," "," "," "," "," "," "," ","Nigeria",
						" "," ","Zambia"," "," "," ","","Albania","Belarus","Iceland",
						"Lithuania","","Dubai","UAE","Tajikistan","Bengal","Bosnia Hercegovina","Cyprus","Kosovo","Macedonia",
						"Malta","Montenegro","Others"];

document.onkeydown = keyHandle;
document.onsystemevent = systemEventHandle;
top.g_temp="homePage";

function keyHandle(evt)
{
    var keycode = evt.which;
    console.log("olympics "+keycode);
    switch(keycode)
    {
        case VK_LEFT:
            if (page==0)
            {
                changeModelFocus();
            }
            else if (page==1)
            {
                //changeSchedule(-1);
            }
            else if (page==2)
            {
                //updateTeamFocus(-1);
            }
            break;
        case VK_RIGHT:
            if (page==0)
            {
                changeModelFocus();
            }
            else if (page==1)
            {
                //changeSchedule(1);
            }
            else if (page==2)
            {
                //updateTeamFocus(1);
            }
            break;
        case VK_UP:
            if (page==0)
            {
                scrollMedal(-1);
            }
            else if (page==2)
            {
                scrollSchedule(-1);
            }
            else if (page==3)
            {
                scrollScheduleByDate(-1);
            }
            else if (page==4)
            {
                scrollDate(-1);
            }
            break;
        case VK_DOWN:
            if (page==0)
            {
                scrollMedal(1);
            }
            else if (page==2)
            {
                scrollSchedule(1);
            }
            else if (page==3)
            {
                scrollScheduleByDate(1);
            }
            else if (page==4)
            {
                scrollDate(1);
            }
            break;
        case VK_ENTER:
            if (page==4)
            {
                window.location = "scheduleByDate.html?" + dlist[dp];
            }
            else if (page==0)
            {
                changeModel();
            }
            break;
        case VK_BACK:
            if (page==2 || page==0)
            {
                if (top.enableUpdateScreen)
                {
                    top.enableUpdateScreen(false);
                }
                window.location = top.getHomepage();
            }
            else if (page==4)
            {
                page = 2;
                document.getElementById("dateBG").style.display = "none";
            }
            else if (page==3)
            {
                window.location = "scheduleForOlympic.html";
            }
            break;
        case VK_EXIT:
        case VK_HOME:
            if (top.enableUpdateScreen)
            {
                top.enableUpdateScreen(false);
            }
            window.location = top.getHomepage();
            break;
        case VK_OPTION:
        //case 49:
            if (page==2)
            {
                showSelect();
            }
            break;
        case VK_POWER://power
        case VK_NETFLIX:
        case VK_GLOBOPLAY:
        case VK_YOUTUBE:
	case VK_CAREVISION:	
        case VK_INTERNET:
        case VK_PANEL_LONG_OK:
        case VK_PANEL_OK:
		case VK_PANEL3_DOWN://按面板左侧键，-,（三键面板）
		case VK_PANEL3_UP://按面板右侧键，+,（三键面板）
		case VK_PANEL3_OK://按面板菜单键,（三键面板）
		case VK_PANEL3_LONG_OK://长按面板菜单键（三键面板）
        case VK_PANEL_LEFT:
        case VK_PANEL_RIGHT:
        case VK_PANEL_DOWN:
        case VK_PANEL_UP:
        case VK_MUTE:
        case VK_VOLUME_DOWN:
        case VK_VOLUME_UP:
        case VK_MENU:
        case VK_SOURCE:
            top.keyDownProcess(evt);
            break;
        default:
            break;
    }
    return false;
}

function systemEventHandle(evt)
{
    var msg = evt.which;
    var p1 = evt.modifiers;
    console.log("in system receive event "+msg);
    switch (msg)
    {
        case E_APP_CLOSE:
            console.log("launcher: the app closed");
            if (top.scheduleApp == top.SCHEDULE_NETFLIX)
            {
                top.scheduleApp = 0;
                top.g_setting.setProperty("app.ui.currentApp","vod.netflix");
                top.g_ulits.sendMsgToApplication("vod.netflix", 0xF063);
                top.g_ulits.sendMsgToApplication("vod.netflix", 0xF041);
                return;
            }
			else if(top.scheduleApp == top.SCHEDULE_KODI)
			{
				top.scheduleApp = 0;
				top.appOpenFlag = 0;
				if(top.g_pushType<4)
				{
					top.enterMediaPlay();
					if(top.g_pushType==1)
					{
						top.$("main").src = "musicPlay.html?dmr";
					}
					else if(top.g_pushType==2)
					{
						top.$("main").src = "picturePlay.html?dmr";
					}
					else if(top.g_pushType==3)
					{
						top.$("main").src = "videoPlay.html?dmr";
					}
				}
				else
				{
					top.enterKodi(1);
				}
				return;
			}
            else if(top.scheduleApp == top.SCHEDULE_CEC)
            {
                top.scheduleApp = 0;
                top.appOpenFlag = 0;
                top.tochangeCEC(top.lastInputSource);
                return;
            }
            else if(top.scheduleApp == top.SCHEDULE_YOUTUBE)
            {
                top.scheduleApp = 0;
                top.g_setting.setProperty("app.ui.currentApp","tbrowser.youtube");
                top.g_ulits.openApplication("tbrowser.youtube","https://www.youtube.com/tv?launch=menu&additionalDataUrl=http%3a%2f%2flocalhost%3a56789%2fapps%2fYouTube%2fdial_data");
                return;
            }
            else if(top.scheduleApp == top.SCHEDULE_INTERNET)
            {
                top.scheduleApp = 0;
                top.g_setting.setProperty("app.ui.currentApp","tbrowser.browser");
                if(52 == top.g_channel.systemCountry)// Brazil
                {
                    top.g_ulits.openApplication("tbrowser.browser","http://eu.guide.huan.tv/huan123/skin/home2015List.action?skin=D1280_2015&data=BRA_mt56#");
                }
                else
                {
                    top.g_ulits.openApplication("tbrowser.browser","http://eu.guide.huan.tv/huan123/skin/home2015List.action?skin=D1280_2015&data=GBR_mt56#");
                }
                return;
            }

            if(top.scheduleApp == top.SCHEDULE_LOCAL_EPG)
            {
                top.scheduleApp = 0;
                top.$("main").onload=function(){
                    top.appOpenFlag = 0;
                    top.main.document.body.style.display = "block";
                    top.$("operatePage").style.display="block";
                    top.$("otherPage").style.display="block";
                    top.$("globleShow").style.display="block";
                    top.$("main").onload=function(){};
                }
                if(top.isNAFlag)
                {
                    top.$("main").src = "programGuide_NA.html";
                }
                else
                {
                        top.$("main").src = "programGuide.html";
                }
                return;
            }
            else if (top.scheduleApp == top.SCHEDULE_SETTING)
            {
                top.scheduleApp = 0;
                top.appOpenFlag = 0;
                openSetting();
                top.main.document.body.style.display = "block";
                top.$("operatePage").style.display="block";
                top.$("otherPage").style.display="block";
                top.$("globleShow").style.display="block";
                return;
            }
            else if (top.scheduleApp == top.SCHEDULE_HOMEPAGE)
            {
                top.scheduleApp = 0;
                top.appOpenFlag = 0;
                if (top.enableUpdateScreen)
                {
                    top.enableUpdateScreen(false);
                }
                window.location = top.getHomepage();
                return;
            }
            else if (top.scheduleApp == top.SCHEDULE_SOURCE)
            {
                top.scheduleApp = 0;
                top.appOpenFlag = 0;
                openSource();
                top.main.document.body.style.display = "block";
                top.$("operatePage").style.display="block";
                top.$("otherPage").style.display="block";
                top.$("globleShow").style.display="block";
                return;
            }
            else if (top.scheduleApp == top.SCHEDULE_STR)
            {
                top.scheduleApp = 0;
                top.appOpenFlag = 0;
                top.toPowerOff();
            }
            if(top.scheduleApp == top.SCHEDULE_TV)
            {
                top.scheduleApp = 0;
                top.$("operatePage").src = "";
                top.$("otherPage").src = "";
                top.g_previousHtmlPage = "channelPlay.html";
                top.g_remindWord = "TvHotKey";
                top.$("main").src = "intermediate.html";
                top.requestFocus(top.main, 1);
            }
            
            top.appOpenFlag = 0;
            tcl.setting.contextOf5in1   = top.CONTEXT_HOME_PAGE;
            top.g_ulits.setKeySet(0x1|0x2|0x4|0x8|0x10|0x20|0x40|0x80|0x100|0x200|0x400|0x800,0,2);
            top.main.document.body.style.display = "block";
            top.$("operatePage").style.display="block";
            top.$("otherPage").style.display="block";
            top.$("globleShow").style.display="block";
            break;
        case E_POWER_OFF_TIMER:
        case E_POWER_OFF_TIMER_EX:
        case E_DLNA_DMR_PUSH_MOVIE://dmr push movie
        case E_DLNA_DMR_PUSH_MUSIC://dmr push music
		case E_DLNA_DMR_PUSH_PICTURE:
		case E_DLNA_DMR_PUSH_KODI:
		case E_DLNA_DMR_PUSH_YOUTUBE:
        case E_STR_SCREEN_OFF:
        case E_STR_SCREEN_ON:
            top.systemEventProc(evt);
            break;
        case E_MEDIA_USB_INSERTED:
            //top.systemEventProc(evt);
            break;
        case E_PVR_DISK_UNPLUG:
        case E_MEDIA_USB_REMOVE:
        case E_MEDIA_USB_REMOVE_OTHER:
            break;
        case E_NETWORK_CONNECT_TEST_SUCCESS:
        case E_NETWORK_CONNECT_TEST_FAIL:
        case E_WIRE_CONNECT_SUCCESS:
        case E_WIRELESS_CONNECT_SUCCESS:
        case E_WIRE_CONNECT_FAILURE:
        case E_WIRELESS_CONNECT_FAILURE:
        case E_TERMINAL_MANAGER_START:
        case E_TV_FAULT_DIAGNOSIS_CONNECT_ON:
        case E_TV_FAULT_DIAGNOSIS_CONNECT_OFF:
        case E_BOOKING_PLAY_START://booking play start����ʱ��ĿԤ����ʱ���ѹ���������ȻҪ�����û���һЩ��̨�Ȳ���
        case E_BOOKING_RECORD_START://booking record start����ʱ¼��Ԥ���Ѿ����ڣ�������ȻҪ�����û���̨¼��
        case E_BOOKING_AHEAD_PLAY_START://booking ahead play start,������������̨���ѣ�һ����ǰ����
        case E_BOOKING_AHEAD_RECORD_START://booking ahead record start����������¼������,��һ����ǰ����	
        case E_VOICE_COLLECT_ENTRIES:
        case E_VOICE_CONTROL:
            top.systemEventProc(evt);
            break;
        default:
            break;
    }
}

function getMatch()
{
    page = 3;
    currentdate = decodeURI(document.location.search.substring(1));
    document.getElementById("title").innerHTML = currentdate;
    showLoading();
    var xhr = new XMLHttpRequest();
    xhr.open("GET",path+"olympics-schedule/v1/everyday/match?country="+zone(),true);
    xhr.onreadystatechange = function() {
        
        if (xhr.readyState == 4 && xhr.status == 200) 
        {
            var cc = JSON.parse(xhr.responseText);
            mlist = cc.data;
            if (mlist)
            {
                console.log("olympics getGroup "+mlist.length);
                //document.getElementById("scorecenter").style.display = "block";
                updateScheduleByDate(mlist);
            }
            hideLoading();
        }
    }
    xhr.send();
}

function updateScheduleByDate(data)
{
    var size = data.length;
    var cc = document.getElementById("SDContainer");
    var j =0;
    for (var i=0; i<size; i++)
    {
        if (data[i].matchDay!=currentdate)
            continue;
        var row = document.createElement("div");
        row.className = "row4";
        var rect = document.createElement("div");
        rect.className = "rect6";
        //var img = document.createElement("img");
        var cou = document.createElement("div");
        //img.src = "";
        cou.innerHTML = data[i].matchName;
        //rect.appendChild(img);
        rect.appendChild(cou);
        var rect1 = document.createElement("div");
        rect1.className = "rect7";
        rect1.innerHTML = data[i].matchTime;
        row.appendChild(rect);
        row.appendChild(rect1);
        row.style.top = 113*j + "px";
        cc.appendChild(row);
        j++;
    }
    document.getElementById("SDbg1").style.top = 113*j - 47 + 20 + "px";
    document.getElementById("SDbg").style.height = 113*j - 47 + 20 + "px";
    if (size>6)
    {
        document.getElementById("progressbarbg").style.display = "block";
    }
}

function scrollScheduleByDate(offset)
{
    var len = document.getElementsByClassName("row4").length;
    if (offset==-1)
    {
        if (len>6 && pageOffset<0)
        {
            pageOffset += 113;
            baroffset -= 496/(len-6);
        }
    }
    else
    {
        if (len>6 && (len-6)*(-113)<pageOffset)
        {
            pageOffset -= 113;
            baroffset += 496/(len-6);
            
        }
    }
    document.getElementById("progressbar").style.top = baroffset + "px";
    document.getElementById("SDContainer").style.top = pageOffset + "px";
}

function showSelect()
{
    page = 4;
    //updateDate();
    document.getElementById("dateBG").style.display = "block";
}

function getSchedule()
{
    page = 2;
    getDate();
    getSports();
    getMoreSchedule(); 
}

function getMoreSchedule()
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET",path+"olympics-schedule/v1/list/day?country="+zone(),true);
    showLoading();
    xhr.onreadystatechange = function() {
        
        if (xhr.readyState == 4 && xhr.status == 200) 
        {
            var cc = JSON.parse(xhr.responseText);
            chlist = cc.data;
            if (chlist)
            {
                console.log("olympics getMoreSchedule "+chlist.length);
                //document.getElementById("scorecenter").style.display = "block";
                updateMoreSchedule(chlist);
            }
            hideLoading();
        }
    }
    xhr.send();
}

function getDate()
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET",path+"olympics-schedule/v1/list/date?country="+zone(),true);
    xhr.onreadystatechange = function() {
        
        if (xhr.readyState == 4 && xhr.status == 200) 
        {
            var cc = JSON.parse(xhr.responseText);
            dlist = cc.data;
            if (dlist)
            {
                console.log("olympics getDate "+dlist.length);
                //document.getElementById("scorecenter").style.display = "block";
                updateDates(dlist);
                updateDate(dlist);
            }
        }
    }
    xhr.send();
}

function updateMoreSchedule(data)
{
    if (!slist)
    {
        setTimeout(function (){updateMoreSchedule(data);}, 500);
    }
    var ss = document.getElementById("scheduleContainer").getElementsByClassName("ScheduleItem");
    for (var i=0; i<ss.length/* && i<data.length*/; i++)
    {
        var es = ss[i].getElementsByClassName("item1");
        for (var j=0; j<es.length && j<data[slist[i]].length; j++)
        {
            if (data[slist[i]][j].matchType=="Event")
            {
                es[j].getElementsByTagName("div")[0].style.backgroundImage = "url(images/Events.png)";
            }
            else if (data[slist[i]][j].matchType=="Medal")
            {
                es[j].getElementsByTagName("div")[0].style.backgroundImage = "url(images/Medalevent.png)";
            }
            else if (data[slist[i]][j].matchType=="empty")
            {
                //es[j].getElementsByTagName("div")[0].style.backgroundImage = "url(images/Events.png)";
            }
        }
    }
}

function updateDates(data)
{
    var ds = document.getElementById("ScheduleDate").getElementsByClassName("date1");
    for (var i=0; i<data.length && i<ds.length; i++)
    {
        ds[i].innerText = parseInt(data[i].split(',')[1].split(' ')[1]);
    }
}

function getSports()
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET",path+"olympics-schedule/v1/list/sports?country="+zone(),true);
    xhr.onreadystatechange = function() {
        
        if (xhr.readyState == 4 && xhr.status == 200) 
        {
            var cc = JSON.parse(xhr.responseText);
            slist = cc.data;
            if (slist)
            {
                console.log("olympics getSports "+slist.length);
                //document.getElementById("scorecenter").style.display = "block";
                updateSchedule(slist);
            }
        }
    }
    xhr.send();
}

function updateSchedule(data)
{
    var size = data.length;
    var cc = document.getElementById("scheduleContainer");
    for (var i=0; i<size; i++)
    {
        var row = document.createElement("div");
        row.className = "ScheduleItem";
        var rect = document.createElement("div");
        rect.className = "item0";
        //var img = document.createElement("img");
        var cou = document.createElement("div");
        //img.src = "";
        cou.innerHTML = data[i];
        //rect.appendChild(img);
        rect.appendChild(cou);
        row.appendChild(rect);
        for (var j=0; j<19; j++)
        {
            var rect1 = document.createElement("div");
            var img = document.createElement("div");
            //img.src = "images/Events.png";
            rect1.appendChild(img);
            rect1.className = "item1";
            rect1.style.left = 207+78*j+"px";
            row.appendChild(rect1);
        }
        row.style.top = 20 + 98*i + "px";
        cc.appendChild(row);
    }
    document.getElementById("schedulebg1").style.top = 98*size - 48 + "px";
    document.getElementById("schedulebg").style.height = 98*size -48 + "px";
    if (size>7)
    {
        document.getElementById("progressbarbg").style.display = "block";
    }
}

function scrollSchedule(offset)
{
    var len = document.getElementsByClassName("ScheduleItem").length;
    if (offset==-1)
    {
        if (len>7 && pageOffset<0)
        {
            pageOffset += 98;
            baroffset -= 496/(len-7);
        }
    }
    else
    {
        if (len>7 && (len-7)*(-98)<pageOffset)
        {
            pageOffset -= 98;
            baroffset += 496/(len-7);
            
        }
    }
    document.getElementById("progressbar").style.top = baroffset + "px";
    document.getElementById("scheduleContainer").style.top = pageOffset + "px";
}

function getMedal()
{
    page = 0;
    var xhr = new XMLHttpRequest();
    xhr.open("GET",path+"olympics-schedule/v1/list/medal?country="+zone(),true);
    xhr.onreadystatechange = function() {
        
        if (xhr.readyState == 4 && xhr.status == 200) 
        {
            var cc = JSON.parse(xhr.responseText);
            melist = cc.data;
            if (melist)
            {
                console.log("olympics getSports "+melist.length);
                //document.getElementById("scorecenter").style.display = "block";
                updateMedal(melist);
            }
        }
    }
    xhr.send();
}

function getGoldMedal()
{
    page = 0;
    var xhr = new XMLHttpRequest();
    xhr.open("GET",path+"olympics-schedule/v1/list/goldmedal?country="+zone(),true);
    xhr.onreadystatechange = function() {
        
        if (xhr.readyState == 4 && xhr.status == 200) 
        {
            var cc = JSON.parse(xhr.responseText);
            meglist = cc.data;
            if (meglist)
            {
                console.log("olympics getSports "+meglist.length);
                //document.getElementById("scorecenter").style.display = "block";
                updateMedal(meglist);
            }
        }
    }
    xhr.send();
}

function updateMedal(data)
{
    var size = data.length;
    var cc = document.getElementById("medalContainer");
    var xx = document.getElementById("mainMedal").getElementsByClassName("row")[1];
    var dd = cc.getElementsByClassName("row1");
    if (dd.length>0)
    {
        for (var i=0; i<size; i++)
        {
            dd[i].getElementsByClassName("rect0")[0].innerText = data[i].rank;
            dd[i].getElementsByTagName("img")[0].src = data[i].countrypicture;
            dd[i].getElementsByClassName("rect3")[0].innerHTML = data[i].country;
            var me = [data[i].gold,data[i].silver,data[i].bronze,data[i].total];
            for (var j=0; j<4; j++)
            {
                dd[i].getElementsByClassName("rect2")[j+1].innerHTML = me[j];
                if (country[tcl.channel.systemCountry]==data[i].country)
                {
                    xx.getElementsByClassName("rect2")[j+1].innerHTML = me[j];
                }
            }
            if (country[tcl.channel.systemCountry]==data[i].country)
            {
                xx.getElementsByClassName("rect0")[0].innerText = data[i].rank;
                xx.getElementsByTagName("img")[0].src = data[i].countrypicture;
                xx.getElementsByClassName("rect3")[0].innerHTML = data[i].country;
            }
        }
        if (xx.getElementsByClassName("rect0")[0].innerText=="")
        {
            xx.getElementsByClassName("rect0")[0].innerText = data[0].rank;
            xx.getElementsByTagName("img")[0].src = data[0].countrypicture;
            xx.getElementsByClassName("rect3")[0].innerHTML = data[0].country;
            var me = [data[0].gold,data[0].silver,data[0].bronze,data[0].total];
            for (var j=0; j<4; j++)
            {
                xx.getElementsByClassName("rect2")[j+1].innerHTML = me[j];
            }
        }
    }
    else
    {
        for (var i=0; i<size; i++)
        {
            var row = document.createElement("div");
            row.className = "row1";
            var rect = document.createElement("div");
            rect.className = "rect0";
            rect.innerHTML = data[i].rank;
            row.appendChild(rect);
            var rect = document.createElement("div");
            rect.className = "rect2";
            rect.style.left = 166+"px";
            var img = document.createElement("img");
            img.src = data[i].countrypicture;
            rect.appendChild(img);
            row.appendChild(rect);
            var rect = document.createElement("div");
            rect.className = "rect3";
            rect.style.left = 407+"px";
            rect.innerHTML = data[i].country;
            row.appendChild(rect);
            var me = [data[i].gold,data[i].silver,data[i].bronze,data[i].total];
            for (var j=0; j<4; j++)
            {
                var rect1 = document.createElement("div");
                rect1.innerHTML = me[j];
                rect1.className = "rect2";
                rect1.style.left = 729+241*j+"px";
                row.appendChild(rect1);
                if (country[tcl.channel.systemCountry]==data[i].country)
                {
                    xx.getElementsByClassName("rect2")[j+1].innerHTML = me[j];
                }
            }
            row.style.top = 77*i + "px";
            if (i==(size-1))
            {
                row.style.height = 79 + "px";
            }
            cc.appendChild(row);
            if (country[tcl.channel.systemCountry]==data[i].country)
            {
                xx.getElementsByClassName("rect0")[0].innerText = data[i].rank;
                xx.getElementsByTagName("img")[0].src = data[i].countrypicture;
                xx.getElementsByClassName("rect3")[0].innerHTML = data[i].country;
            }
        }
        if (xx.getElementsByClassName("rect0")[0].innerText=="")
        {
            var me = [data[0].gold,data[0].silver,data[0].bronze,data[0].total];
            for (var j=0; j<4; j++)
            {
                xx.getElementsByClassName("rect2")[j+1].innerHTML = me[j];
            }
            xx.getElementsByClassName("rect0")[0].innerText = data[0].rank;
            xx.getElementsByTagName("img")[0].src = data[0].countrypicture;
            xx.getElementsByClassName("rect3")[0].innerHTML = data[0].country;
        }
    }
    xx.getElementsByTagName("img")[0].style.display = "inline";
    //document.getElementById("schedulebg1").style.top = 77*size - 48 + "px";
    //document.getElementById("schedulebg").style.height = 77*size -48 + "px";
    if (size>7)
    {
        document.getElementById("progressbarbg").style.display = "block";
    }
}

function scrollMedal(offset)
{
    var len = document.getElementsByClassName("row1").length;
    if (offset==-1)
    {
        if (len>7 && pageOffset<0)
        {
            pageOffset += 77;
            baroffset -= 496/(len-7);
        }
    }
    else
    {
        if (len>7 && (len-7)*(-77)<pageOffset)
        {
            pageOffset -= 77;
            baroffset += 496/(len-7);
            
        }
    }
    document.getElementById("progressbar").style.top = baroffset + "px";
    document.getElementById("medalContainer").style.top = pageOffset + "px";
}

var model = 0;
function changeModelFocus()
{
    if (model == 0)
    {
        model = 1;
        document.getElementById("mtime").style.background = "url(images/button-noselect.png)";
        document.getElementById("rtime").style.background = "url(images/button-select.png)";
    }
    else
    {
        model = 0;
        document.getElementById("rtime").style.background = "url(images/button-noselect.png)";
        document.getElementById("mtime").style.background = "url(images/button-select.png)";
    }
}

function changeModel()
{
    if (model == 1)
    {
        getGoldMedal();
        
    }
    else
    {
        getMedal();
    }
    baroffset = 0;
    pageOffset = 0;
    document.getElementById("progressbar").style.top = baroffset + "px";
    document.getElementById("medalContainer").style.top = pageOffset + "px";
}

function updateDate(data)
{
    var size = data.length;
    var cc = document.getElementById("dates");
    for (var i=0; i<size; i++)
    {
        var row = document.createElement("div");
        row.innerHTML = data[i];
        cc.appendChild(row);
    }
}

function scrollDate(offset)
{
    var len = document.getElementById("dates").getElementsByTagName("div").length;
    if (offset==-1)
    {
        if (pageOffset1<260)
        {
            pageOffset1 += 130;
            dp+=offset;
        }
    }
    else
    {
        if ((len-3)*(-130)<pageOffset1)
        {
            pageOffset1 -= 130;
            dp+=offset;
        }
    }
    document.getElementById("dates").style.top = pageOffset1 + "px";
}

function zone()
{
    var z = top.getZone();
    if (z == "aze")
    {
        z = "az";
    }
    if (z!="de" && z!="fr")
    {
        z = "gb"
    }
    return z;
}

function openSource()
{
    top.$("operatePage").onload = function(){
        top.resetFramePacking3DMode();
        top.$("operatePage").onload = function(){};
    }
    top.$('operatePage').src = "inputSource.html";
    top.requestFocus(top.operatePage, 0);
    if(top.g_isDownloading == 0){
        top.g_isDownloading = 1;
        tcl.setting.restartDownloadUpdateFile();
    }
}

function openSetting()
{
    top.$("operatePage").onload = function(){
        top.resetFramePacking3DMode();
        top.$("operatePage").onload = function(){};
    }
    top.$('operatePage').src = "index.html";
    top.requestFocus(top.operatePage, 0);
    if(top.g_isDownloading == 0){
        top.g_isDownloading = 1;
        tcl.setting.restartDownloadUpdateFile();
    }
}

function showLoading()
{
    //document.getElementById("loading").style.display = "block";
}

function hideLoading()
{
    document.getElementById("loading").style.display = "none";
}

(function() {
    if (tcl.channel.inputSource != 10)
    {
        tcl.channel.requestInputSource(10);
    }
})();
