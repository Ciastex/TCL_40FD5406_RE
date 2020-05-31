

document.onkeydown = keyProcess;
document.onsystemevent = systemEventHandle;

//多语言
var tipsWord   = top.clockPageWords[13];
var remindWord = top.clockPageWords[14];
var localWord  = top.clockPageWords[0];
var clockCityWords = [top.clockPageWords[1],top.clockPageWords[2],top.clockPageWords[3],top.clockPageWords[4],
    top.clockPageWords[5],top.clockPageWords[6],top.clockPageWords[7],top.clockPageWords[8],top.clockPageWords[9],
    top.clockPageWords[10],top.clockPageWords[11],top.clockPageWords[12]];
var selectDivs = document.getElementsByClassName("select_div");

//数据
var localCity="Local";

var buttomList=[
    {city: "Beijing", name: clockCityWords[0], select: false, isday:false, focus:false},
    {city: "Tokyo", name: clockCityWords[1], select: false, isday:false, focus:false},
    {city: "Hongkong", name: clockCityWords[2], select: false, isday:false, focus:false},
    {city: "Taipei", name: clockCityWords[3], select: false, isday:false, focus:false},
    {city: "Singapore", name: clockCityWords[4], select: false, isday:false, focus:false},
    {city: "Paris", name: clockCityWords[5], select: false, isday:false, focus:false},
    {city: "London", name: clockCityWords[6], select: false, isday:false, focus:false},
    {city: "Moscow", name: clockCityWords[7], select: false, isday:false, focus:false},
    {city: "New Delhi", name: clockCityWords[8], select: false, isday:false, focus:false},
    {city: "Djakarta", name: clockCityWords[9], select: false, isday:false, focus:false},
    {city: "New York", name: clockCityWords[10], select: false, isday:false, focus:false},
    {city: "Rio", name: clockCityWords[11], select: false, isday:false, focus:false},
];

//底框焦点 0~5
var buttom_focus = 0;

//数据持久化存储
var cityStorage = new Array(0);
var cityStorageName = ["cityClockStorage1","cityClockStorage2","cityClockStorage3"];

var tempSource = 0;//记录进入clock之前信源
var addButtonPage = 0;//记录选择城市的页面

//小时钟 id数组
var little_table=[
    {
        location_span: "location_little1_span",
        time_span: "time_little1_span",
        chassis_img: "chassis_little1_img",
        draw_canvas: "canvas_little_1",
        heart_img:"heart_little_1"
    },
    {
        location_span: "location_little2_span",
        time_span: "time_little2_span",
        chassis_img: "chassis_little2_img",
        draw_canvas: "canvas_little_2",
        heart_img:"heart_little_2"
    },
    {
        location_span: "location_little3_span",
        time_span: "time_little3_span",
        chassis_img: "chassis_little3_img",
        draw_canvas: "canvas_little_3",
        heart_img:"heart_little_3"
    },
    {
        location_span: "location_little4_span",
        time_span: "time_little4_span",
        chassis_img: "chassis_little4_img",
        draw_canvas: "canvas_little_4",
        heart_img:"heart_little_4"
    },
];

//00公共函数
function $(id) {
    return document.getElementById(id);
}

//NewYork，GMT -5 小时，夏令时：3月第二个周日02:00开始，11月第一个周日02:00结束
function NewYorkDate(today) {
    var myDate = new Date(today.getTime());
    myDate.setHours(myDate.getHours()-5); //GMT -5 小时

    var myTime = myDate.getTime();
    var mySummerTime = myTime + 1*60*60*1000; //加1小时
    var dayFrom;
    var dayTo;

    //summerTime From - To
    var sFrom = new Date(myDate.getFullYear(),2,1,02,00,00);
    var sTo = new Date(myDate.getFullYear(),10,1,02,00,00);

    sFrom.getDay()==0 ? dayFrom = 7 : dayFrom = 14;
    sTo.getDay()==0 ? dayTo = 0 : dayTo = 7;
    sFrom.setDate(sFrom.getDate()+dayFrom-sFrom.getDay()); //3月第二个周日
    sTo.setDate(sTo.getDate()+dayTo-sTo.getDay()); //11月第一个周日

    if (sFrom.getTime() <= myTime && mySummerTime < sTo.getTime()) {
        myDate.setHours(myDate.getHours()+1);
    }

    return myDate;
}

//Paris,Berlin GMT +1小时，夏令时：3月最后一个周日02:00 开始，10月最后一个周日03:00结束
function EuropeDate(today) {
    var myDate = new Date(today.getTime());
    myDate.setHours(myDate.getHours()+1); //GMT +1小时

    var myTime = myDate.getTime();
    var mySummerTime = myTime + 1*60*60*1000; //加1小时

    //summerTime From - To
    var sFrom = new Date(myDate.getFullYear(),2,31,02,00,00); //03.31
    var sTo = new Date(myDate.getFullYear(),9,31,03,00,00); //10.31

    sFrom.setDate(sFrom.getDate()-sFrom.getDay()); //3月最后一个周日
    sTo.setDate(sTo.getDate()-sTo.getDay()); //10月最后一个周日

    if (sFrom.getTime() <= myTime && mySummerTime < sTo.getTime()) {
        myDate.setHours(myDate.getHours()+1);
    }

    return myDate;
}

//LondonGMT +0小时，夏令时：3月最后一个周日01:00 开始，10月最后一个周日02:00 结束
function LondonDate(today) {
    var myDate = new Date(today.getTime());
    var myTime = myDate.getTime();
    var mySummerTime = myTime + 1*60*60*1000; //加1小时

    //summerTime From - To
    var sFrom = new Date(myDate.getFullYear(),2,31,01,00,00); //03.31
    var sTo = new Date(myDate.getFullYear(),9,31,02,00,00); //10.31

    sFrom.setDate(sFrom.getDate()-sFrom.getDay()); //3月最后一个周日
    sTo.setDate(sTo.getDate()-sTo.getDay()); //10月最后一个周日

    if (sFrom.getTime() <= myTime && mySummerTime < sTo.getTime()) {
        myDate.setHours(myDate.getHours()+1);
    }

    return myDate;
}

function calcDateZone(today, offsetHours) {
    var myDate = new Date(today.getTime());
    if((offsetHours != parseInt(offsetHours))) //存在半时区, date相关函数自动进位，不需要判断是否大于60
    {
        myDate.setMinutes(myDate.getMinutes() + (offsetHours%1)*60);
    }
    myDate.setHours(myDate.getHours()+offsetHours);
    return myDate;
}

function getLocalDate(today) {
    var myDate = new Date(today.getTime());
    //var hour = today.getHours(); //PC test
    //var minute = today.getMinutes(); //PC test
    var hour = parseInt(top.g_setting.currentTime.substring(0, 2)); //TV
    var minute = parseInt(top.g_setting.currentTime.substring(3, 5));//时区可能会是5：30，会有分钟差异
    myDate.setHours(hour);
    myDate.setMinutes(minute);
    return myDate;
}

function cityDate(today, city) {
    var buttom = buttomList;
    var date;

    switch (city) {
        case localCity:
            date = getLocalDate(today);
            break;
        case buttom[0].city://Beijing:GMT+8区
            date = calcDateZone(today, 8);
            break;
        case buttom[1].city://Tokyo:GMT+9区
            date = calcDateZone(today, 9);
            break;
        case buttom[2].city://Hongkong:GMT+8区
            date = calcDateZone(today, 8);
            break;
        case buttom[3].city://Taipei:GMT+8区
            date = calcDateZone(today, 8);
            break;
        case buttom[4].city://Singapore:GMT+8区
            date = calcDateZone(today, 8);
            break;
        case buttom[5].city://Paris:GMT+1区
            date = EuropeDate(today);
            break;
        case buttom[6].city://London:GMT0区
            date = LondonDate(today);
            break;
        case buttom[7].city://Moscow:GMT+3区
            date = calcDateZone(today, 3);
            break;
        case buttom[8].city://New Delhi:GMT+5.5区     ？夏令时不确定
            date = calcDateZone(today, 5.5);
            break;
        case buttom[9].city://Djakarta:GMT+7区       ？夏令时不确定
            date = calcDateZone(today, 7);
            break;
        case buttom[10].city://New York:GMT-5区
            date = NewYorkDate(today);
            break;
        case buttom[11].city://Rio:GMT-3区         ？夏令时不确定
            date = calcDateZone(today, -3);
            break;
        default:
            date = today;
    }

    return date;
}

function getGMTDate() {
    var today = new Date();
    var offset = today.getTimezoneOffset() * 60 * 1000;
    //算出现在的时间：
    var nowDate = today.getTime();
    //算出对应的格林位置时间
    return new Date(nowDate + offset);
}

function checkDay(h) {
    return (h>=6 && h<18);
}

function checkTime(i)  {
    if (i<10) {
        i="0" + i
    }
    return i;
}


//01表盘
function bigTimeUpdate(today) {
    var date = cityDate(today, localCity);
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    var isday = checkDay(h); //day or night
    $("chassis_img").setAttribute("src", "clock_images/" + (isday?"DayClockChassis.png":"NightClockChassis.png"));
    $("heart_big").setAttribute("src","clock_images/" + (isday?"big_day_heart.png":"big_night_heart.png"));
    $("location_span").innerHTML = localWord;
    $("time_span").innerHTML =(checkTime(h) + " : " + checkTime(m));
    drawClockHand("canvas_big",960,540,h,m,s,isday,1);
}

function littleTimeUpdate(today, location, clock) {
    var date = cityDate(today, location);
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var buttom = buttomList;
    var isday = checkDay(h); //day or night

    $(clock.time_span).innerHTML = (checkTime(h) + " : " + checkTime(m));

    if (location == localCity) {
        $(clock.location_span).innerHTML = (localWord);
    }
    else {
        for (var i=0; i<buttom.length; i++) {
            if (buttom[i].city == location) {
                $(clock.location_span).innerHTML = (buttom[i].name);
            }
        }
    }
    $(clock.chassis_img).setAttribute("src", "clock_images/" + (isday?"DayClockChassisLittle.png":"NightClockChassisLittle.png"));
    $(clock.heart_img).setAttribute("src","clock_images/" + (isday?"little_day_heart.png":"little_night_heart.png"));
    drawClockHand(clock.draw_canvas,176,176,h,m,s,isday,0);
}

function timeUpdate() {
    var today = getGMTDate();

    //对应的时钟表盘显示才更新时间显示
    if ( $("big_clock").style.display == "block" ) {
        bigTimeUpdate(today);
    }

    if ( $("little_clock").style.display == "block" ) {
        littleTimeUpdate(today, localCity, little_table[0]);

        if ($("little_clock_2").style.display == "block" ) {
            littleTimeUpdate(today, cityStorage[0], little_table[1]);
        }

        if ($("little_clock_3").style.display == "block" ) {
            littleTimeUpdate(today, cityStorage[1], little_table[2]);
        }

        if ($("little_clock_4").style.display == "block" ) {
            littleTimeUpdate(today, cityStorage[2], little_table[3]);
        }
    }
}

function showLittleClock2()
{
    $("little_clock_1").style.left="557px";
    $("little_clock_2").style.left="1010px";
}

//1259宽度（353*3+100*2），左边距330，右边距331
function showLittleClock3()
{
    $("little_clock_1").style.left="330px";//330+121
    $("little_clock_2").style.left="783px";//330+353+100
    $("little_clock_3").style.left="1236px";//783+353+100
}

//1712 宽度（353*4+100*3），左边距104，右边距104
function showLittleClock4()
{
    $("little_clock_1").style.left="104px";//104
    $("little_clock_2").style.left="557px";//104+353+100
    $("little_clock_3").style.left="1010px";//557+353+100
    $("little_clock_4").style.left="1463px";//1010+353+100
}

//显示表盘
function showClock() {
    if (cityStorage==null || cityStorage.length == 0) {
        //show big clock
        $("big_clock").style.display = "block";
        $("little_clock").style.display = "none";
    }
    else {
        //show litle clock
        $("big_clock").style.display = "none";
        $("little_clock").style.display = "block";
        switch (cityStorage.length) {
            case 1:
                $("little_clock_1").style.display = "block";
                $("little_clock_2").style.display = "block";
                $("little_clock_3").style.display = "none";
                $("little_clock_4").style.display = "none";
                showLittleClock2();
                break;
            case 2:
                $("little_clock_1").style.display = "block";
                $("little_clock_2").style.display = "block";
                $("little_clock_3").style.display = "block";
                $("little_clock_4").style.display = "none";
                showLittleClock3();
                break;
            case 3:
                $("little_clock_1").style.display = "block";
                $("little_clock_2").style.display = "block";
                $("little_clock_3").style.display = "block";
                $("little_clock_4").style.display = "block";
                showLittleClock4();
                break;
        }
    }
}

function getCityStorage() {
    //localStorage.removeItem("cityStorageName");

    var storage = localStorage.getItem("cityStorageName");

    if (storage) {
        cityStorage = storage.split(",");
    }

    //console.log("cityStorage typeof: "+typeof cityStorage+", cityStorage: "+cityStorage+", length="+cityStorage.length);
}


function initAddButtomCityName(buttom,page)
{
    if(0 == page)//第一页
    {
        for(var i = 0; i< 6 ;i++)
        {
            selectDivs[i].getElementsByTagName("span")[0].innerHTML = buttom[i].name;
        }
    }else
    {
        for(var i = 6; i< buttom.length ;i++)
        {
            selectDivs[i%6].getElementsByTagName("span")[0].innerHTML = buttom[i].name;
        }
    }
}

function initSpanForLocation() {
    $("tips_span").innerHTML=tipsWord;
    $("remind_span").innerHTML=remindWord;
}

function init()
{
    tempSource = top.g_channel.inputSource;
    if(tempSource != 10)
    {
        top.g_channel.requestInputSource(10);
    }
    //初始化文本
    initSpanForLocation();

    //取出城市时钟记录
    getCityStorage();
	
    //show表盘,如果没有记录show大表盘，有则show小表盘
    showClock();
	
    //show时间，表针
    timeUpdate();

    //根据时钟记录初始化底框时钟选择Icon
    initAddButtomCityName(buttomList,addButtonPage);
    initAddButtomSelectData(buttomList);

    //时间更新
    setInterval("timeUpdate()", 1000);//1000为1秒钟
}
//end 01

function uninit() {
    top.g_channel.changeToPrevSource();
}

//02底框
function switchFocus(newFocus, oldFocus)
{
    selectDivs[oldFocus].getElementsByTagName("img")[2].style.display = "none";
    selectDivs[newFocus].getElementsByTagName("img")[2].style.display = "block";
}

//select clock ifcon opt
function selectClock(num) {
    //console.log("selectClock num=", num);
    selectDivs[num%6].getElementsByTagName("img")[0].setAttribute("src", "clock_images/SelectIcon.png");
}

function unselectClock(num) {
    //console.log("unselectClock num=", num);
    selectDivs[num%6].getElementsByTagName("img")[0].setAttribute("src", "clock_images/UnselectedIcon.png");
}


//Icon

function showSelectImg(buttom, page)
{
    if(0 == page)
    {
        var j = 0;
    }else
    {
        j = 6;
    }
    for(var i = 0;((i < 6) && (j<buttom.length));i++,j++)
    {
        if (buttom[j].select == true) {
            selectDivs[i].getElementsByTagName("img")[0].setAttribute("src", "clock_images/SelectIcon.png");
        }
        else {
            selectDivs[i].getElementsByTagName("img")[0].setAttribute("src", "clock_images/UnselectedIcon.png");
        }

        if (buttom[j].isday == true) {
            selectDivs[i].getElementsByTagName("img")[1].setAttribute("src", "clock_images/AddDayClockIcon.png");
        }
        else {
            selectDivs[i].getElementsByTagName("img")[1].setAttribute("src", "clock_images/AddNightClockIcon.png");
        }
    }
}

//Data

function initAddButtomSelectData(buttom) {
    for (var i=0; i < buttom.length; i++)
    {
        buttom[i].select = false;
    }

    for (var num = 0; cityStorage!=null && num < cityStorage.length; num++)
    {
        for (var i=0; i < buttom.length; i++)
        {
            //console.log("buttom[i].city: "+buttom[i].city+", cityStorage[num]: "+cityStorage[num])
            if (buttom[i].city == cityStorage[num])
            {
                buttom[i].select = true;
                //console.log(i+", "+buttom[i].city+" true");
            }
        }
    }
}

//获取底框城市白天or黑夜
function updateAddButtomClockData(buttom) {
    var today = getGMTDate();
    var date;
    var h;

    for (var i=0; i < buttom.length; i++) {
        var date = cityDate(today,buttom[i].city);
        h = date.getHours();
        buttom[i].isday = checkDay(h); //day or night
    }
}

//显示底框UI元素
function showAddButtomIcon(buttom) {
    $("add_bottom").style.display = "block";
    showSelectImg(buttom,addButtonPage);

    switchFocus(0, buttom_focus);
    buttom_focus = 0;
}

//显示底框
function showAddButtom(buttom) {
    updateAddButtomClockData(buttom);
     showAddButtomIcon(buttom);
}

//隐藏底框
function hideAddButtom() {
    $("add_bottom").style.display = "none";
}

function isAddButtomdisplay() {
    return $("add_bottom").style.display == "block";
}

function selectAddButtomClock() {
    var focus = buttom_focus + (addButtonPage?6:0);
    var city = buttomList[focus].city;
    var index = 0;

    if ( !buttomList[focus].select )
    {
        if (cityStorage!=null && cityStorage.length < 3) {
            //if( cityStorage.indexOf(city) == -1 )
            cityStorage.push(buttomList[focus].city);
            localStorage.setItem("cityStorageName", cityStorage);
            selectClock(focus);
        } else {
            showRemind();
            return;
        }
    }
    else {
        index = cityStorage.indexOf(city);
        if( index != -1 )
        {
            cityStorage.splice(index, 1);
            localStorage.setItem("cityStorageName", cityStorage);
        }
        unselectClock(focus);
    }

    buttomList[focus].select = !buttomList[focus].select;

    //console.log("cityStorage lenght="+cityStorage.length);

    showClock();
    timeUpdate();
}

function toExit(evt) {
    if(sessionStorage.getItem("NewSanPrePage") == "smartkey") {
        sessionStorage.setItem("NewSanPrePage" , "miracast");
        top.$("main").style.display="block";
        top.$("otherPage").src = "smartKey/smart.html";
        top.$("otherPage").style.display = "block";
        top.requestFocus(top.otherPage, 0);
        top.setFrameFocusPage("otherPage");
    }
    else if (top.g_temp == "miracast") {
        top.$("main").src = "smartKey/smart.html";
        top.$("main").style.display="block";
        top.$("otherPage").src = "";
        top.requestFocus(top.main, 1);
        top.setFrameFocusPage("main");
    }
    else {
        top.keyDownProcess(evt);
    }
}

//按键函数
function keyProcess(evt) {
    var keycode = evt.which;
    //console.log("keycode:"+keycode);
    var old_focus;
    var new_focus;

    switch(keycode)
    {
        case VK_RIGHT: // 按right var VK_RIGHT = 39;
            if (isAddButtomdisplay())
            {
                old_focus = buttom_focus;
                new_focus = old_focus + 1;
                if(new_focus>5)
                {
                    if(0 == addButtonPage)
                    {
                        new_focus = 0;
                        $("right_arrow").style.display = "none";
                        $("left_arrow").style.display = "block";
                        addButtonPage = 1;
                        initAddButtomCityName(buttomList,addButtonPage);
                        showSelectImg(buttomList,addButtonPage);
                    }else
                    {
                        new_focus = 5;
                    }
                }
                buttom_focus = new_focus;
                switchFocus(new_focus, old_focus);
                //console.log("new_focus="+new_focus+", old="+old_focus);
            }
            break;
        case VK_LEFT:
            if (isAddButtomdisplay())
            {
                old_focus = buttom_focus;
                new_focus = old_focus - 1;
                if(new_focus < 0)
                {
                    if(1 == addButtonPage)
                    {
                        new_focus = 5;
                        $("right_arrow").style.display = "block";
                        $("left_arrow").style.display = "none";
                        addButtonPage = 0;
                        initAddButtomCityName(buttomList,addButtonPage);
                        showSelectImg(buttomList,addButtonPage);
                    }else
                    {
                        new_focus = 0;
                    }
                }
                buttom_focus = new_focus;
                switchFocus(new_focus, old_focus);
                //console.log("new_focus="+new_focus+", old="+old_focus);
            }
            break;
        case VK_ENTER:
            if (isAddButtomdisplay())
            {
                selectAddButtomClock();
            }
            else {
                showAddButtom(buttomList);
            }
            break;
        case VK_BACK:
            if (isAddButtomdisplay()) {
                hideAddButtom();
            }
            else {
                toExit(evt);
            }
            break;
        case VK_HOME:
        case VK_EXIT:
            toExit(evt);
            break;
        case VK_POWER:
            top.keyDownProcess(evt);
            break;
        case VK_UP:
        case VK_DOWN:
        default:
            break;
    }
}

function systemEventHandle(evt) {
    var msg = evt.which;
    switch (msg)    {
        case E_POWER_OFF_TIMER:
        case E_DLNA_DMR_PUSH_MOVIE://dmr push movie
        case E_DLNA_DMR_PUSH_MUSIC://dmr push music
        case E_DLNA_DMR_PUSH_PICTURE://dmr push picture
        case E_STR_SCREEN_OFF:
        case E_STR_SCREEN_ON:
            top.systemEventProc(evt);
            break;
        case E_NETWORK_CONNECT_TEST_SUCCESS:
        case E_NETWORK_CONNECT_TEST_FAIL:
        case E_WIRE_CONNECT_SUCCESS:
        case E_WIRELESS_CONNECT_SUCCESS:
        case E_WIRE_CONNECT_FAILURE:
        case E_WIRELESS_CONNECT_FAILURE:
            top.systemEventProc(evt);
            break;
        case E_APP_PROCESS_INITIALIZATION:
            top.systemEventProc(evt);
            break;
        case E_TERMINAL_MANAGER_START:
        case E_TV_FAULT_DIAGNOSIS_CONNECT_ON:
        case E_TV_FAULT_DIAGNOSIS_CONNECT_OFF:
            top.systemEventProc(evt);
            break;
        case E_SRC_CHANGE_SET_INPUT_SOURCE:
            top.systemEventProc(evt);
            break;
        case E_SS_NO_CI_MODULE:
        case E_SS_INVALID_SERVICE://invalid service
        case E_SS_SCRAMBLED_PROGRAM:// screamble
        case E_SS_AUDIO_ONLY://audio only
        case E_SS_DATA_ONLY://data only
        case E_SIGNAL_UNLOCK://unlock signal
        case E_PVR_NO_SIGNAL:
        case E_SIGNAL_LOCK://lock signal
        case E_DTV_SS_RUNNING_STATUS_NOT_RUNNING:
        case E_SS_COMMON_VIDEO:
        case E_SS_CH_BLOCK:
        case E_SS_PARENTAL_BLOCK:
        case E_DTV_SS_INPUT_BLOCK:
        {
            if(top.appOpenFlag==0 && top.isGingaOn && top.GingaObj.isInit == top.GingaStates.True)
            {
                top.systemEventProc(evt);
            }
            break;
        }
        case E_DTV_SERVICE_PLAY:
        case E_CHANNEL_PLAY_END:
        case E_TV_EXCHANGE_END:
        case E_DTV_EPG_PF_FINISH:
        {
            if(top.appOpenFlag==0)
            {
                top.systemEventProc(evt);
            }
            break;
        }
        case E_BOOKING_PLAY_START://booking play start开机时节目预定的时间已过，但是依然要提醒用户做一些切台等操作
        case E_BOOKING_RECORD_START://booking record start开机时录制预定已经过期，但是依然要提醒用户切台录制
        case E_BOOKING_AHEAD_PLAY_START://booking ahead play start,正常情况下切台提醒，一分钟前提醒
        case E_BOOKING_AHEAD_RECORD_START://booking ahead record start正常情况下录制提醒,，一分钟前提醒
            top.systemEventProc(evt);
            break;
        case E_VOICE_COLLECT_ENTRIES:
        case E_VOICE_CONTROL:
            top.systemEventProc(evt);
            break;
        default:
            break;
    }
}

//支持鼠标操作
function jumpToAddButtom() {
    showAddButtom(buttomList);
}

function onClickSelectClock(focus) {
    switchFocus(focus, buttom_focus);
    buttom_focus = focus;
    selectAddButtomClock();  
}

//显示提示框
var remindTimer = 0;
function showRemind() {
    if(remindTimer)
    {
        clearTimeout(remindTimer);
    }

    $("remind").style.display = "block";
    remindTimer = setTimeout(function() {
        $("remind").style.display = "none";
    }, 2000);
}


/*
 drawDiv                 绘制的canvas ID；
 origin_x origin_y       时钟的原点,即中心点坐标
 hour min sec            需要绘制的时分秒
 isDay                   是否是白天        0：晚上   1：白天
 isBig                   是否是大时钟      0：小时钟 1：大时钟
 */
function drawClockHand(drawDiv,origin_x,origin_y,hour,min,sec,isDay,isBig)
{
    var canvasDom = document.getElementById(drawDiv);
    var ctx = canvasDom.getContext('2d');
    var Hour_length;
    var Min_length;
    var Sec_length;
    var Hour_width;
    var Min_width;
    var Sec_width;
    var canvas_width;//时钟大小，用于清除画布内容
    if(1 == isBig)
    {
        Hour_length = 240;
        Min_length = 327;
        Sec_length = 317;
        Hour_width = 16;
        Min_width = 9;
        Sec_width = 7;
        canvas_width = 912;
    }else
    {
        Hour_length = 90;
        Min_length = 128;
        Sec_length = 124;
        Hour_width = 6;
        Min_width = 4;
        Sec_width = 3;
        canvas_width = 353;
    }
    ctx.clearRect(origin_x-canvas_width/2,origin_y-canvas_width/2,canvas_width,canvas_width);

    //时针
    ctx.save();
    ctx.strokeStyle = isDay?"black":"white";
    ctx.lineWidth = Hour_width;
    ctx.beginPath();
    ctx.translate(origin_x,origin_y);
    ctx.rotate((hour%12+90)*30/180*Math.PI);
    ctx.moveTo(0,0);
    ctx.lineTo(0,Hour_length);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();

    //分针
    ctx.save();
    ctx.strokeStyle = isDay?"black":"white";
    ctx.lineWidth = Min_width;
    ctx.beginPath();
    ctx.translate(origin_x,origin_y);
    ctx.rotate((min*6+180)/180*Math.PI);
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.lineTo(0,Min_length);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    //秒针
    ctx.save();
    ctx.strokeStyle = "red";
    ctx.lineWidth = Sec_width;
    ctx.beginPath();
    ctx.translate(origin_x,origin_y);
    ctx.rotate((sec*6+180)/180*Math.PI);
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.lineTo(0,Sec_length);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
}