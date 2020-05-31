/**
 * Created by liudingchang on 2016/11/25.
 */
var areaTitleWords = ["Luzon","Visayas","Mindanao"];

var _region = [
    ["NCR","CAR","REGION 1","REGION 2","REGION 3","REGION 4-A","REGION 4-B","REGION 5"],
    ["REGION 6","REGION 7","REGION 8"],
    ["REGION 9","REGION 10","REGION 11","REGION 12","REGION 13","ARMM"]
];
var allCityName = [
    ["Caloocan","Las Pinas","Makati","Malabon","Mandaluyong","Manila","Marikina","Muntinlupa","Navotas","Paranaque","Pasay","Pasig","Pateros","Quezon City","San Juan","Taguig","Valenzuela"],
    ["Abra","Apayao","Baguio","Benguet","lfugao","Kalinga","Mt. Province"],
    ["llocos Norte","llocos Sur","La Union","Pangasinan"],
    ["Batanes","Cagayan","lsabela","Nueva Vizcaya","Quirino","Santiago"],
    ["Angeles","Aurora","Bataan","Bulacan","Nueva Ecija","Olongapo","Pampanga","Tralac","Zambales"],
    ["Batangas","Cavite","Laguna","Lucena","Quezon","Rizal"],
    ["Marinduque","Occidental Mindoro","Oriental Mindoro","Palawan","Puerto Princesa","Romblon"],
    ["Albay","Camarines Sur","Camarines Norte","Catanduanes","Masbata","Naga","Sorsogon"],
    ["Aklan","Antique","Bacolod","Capiz","Guimaras","lloilo","lloilo City","Negros Occidental"],
    ["Bohol","Cebu","Cebu City","Lapu Lapu","Negros Oriental","Siquijor"],
    ["Biliran","Eastern Samar","Leyte","Northem Samar","Oromc","Samar","Southern Leyte","Tacloban"],
    ["lsabela City","Zamboanga City","Zamboanga del Norte","Zamboanga del Sur","Zamboanga Sibuga"],
    ["Bukidnon","Cagayan de Oro","Camiguin","lligan","Lanao del Norte","Misamis Occidental","Misamis Oriental"],
    ["Compostela Valley","Davao City","Davao del Norte","Davao del Sur","Davao Oriental"],
    ["Cotabato","Cotabato City","General Santos","Saranggani","South Cotabato","Sultan Kudarat"],
    ["Agusan del Norte","Agusan del Sur	","Butuan","Dinagat lslands","Surigao del Norte","Surigao del Sur"],
    ["Basilan","Lanao del Sur","Maguindanao","Sulu","Tawi-Tawi"]
];

var cityList;                                           //listFrom中显示城市名称的数组
var cityListLength;                                     //
var position_on_AreaZoneList = 0;
var position_on_RegionList = 0;
var position_on_CityList = 0;
var whichCityList = 0;

var regionTitleWords = _region;
var _area = ["Area"];
var Region = "";
var sendNumber;
var regionName = areaTitleWords;
var setting 					= top.g_setting;
var channel			 			= top.g_channel;
var focusOn 					= "menu"; 				//menu,Luzon,Visayas,Mindanao,region,city
var offset						= 0;					//列表弹出框中的焦点的真实位置和焦点显示位置的差值
var list_position_h				= 0;
var list_position_h_f           = 0;
var form_position_h				= 0;
var SUB_MENU_START 				= 160;					//三级级菜单焦点移动起始位置
var SUB_MENU_STEP 				= 70;					//三级级主菜单焦点移动的step
var FORM_STEP					= 80;					//弹出框焦点移动的step
var listFormLiList;
var regionItemCount = 0;
var listFormIndex = 0;
var showItemNum = 0;
var mainFocus                   = ["../images/Focus_Frame/Focus-1.png","../images/Focus_Frame/Focus-2.png"];
var regionFocus                 = ["../images/arrow/focus_R-Focus.png","../images/arrow/R-Focus.png"];//亮与不亮

document.onsystemevent 				= notifyProcess;
var menuList =
    [
        {name:"Luzon",param:function(){showLuzon();},showFlag:1},
        {name:"Visayas",param:function(){showVisayas();},showFlag:1},
        {name:"Mindanao",param:function(){showMindanao();},showFlag:1}
    ];

//area对应的region,
function someCommonContent(){
    RegionMenuRightLiList = $("regionAndCity").getElementsByTagName("li");
    RegionMenuRightSpanList = $("regionAndCity").getElementsByTagName("span");

    list_position_h_f = 0;
    $("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h_f + "px";

    $("thdHtml").style.display = "none";
    $("regionAndCity").style.display = "block";
    $("listRightRemindF").style.display = "block";
}

function showLuzon(){
    someCommonContent();
    $("titleNameSpanF_1").innerHTML = _area[0];
    $("titleNameSpanF_2").innerHTML = areaTitleWords[0];

    for(var i = 2; i < RegionMenuRightLiList.length; i++)
    {
        if(regionTitleWords[0][i-2]){
            RegionMenuRightSpanList[i].innerHTML = regionTitleWords[0][i-2];
            RegionMenuRightLiList[i].style.display = "block";
            regionItemCount++;
        }else{
            RegionMenuRightLiList[i].style.display = "none";
        }
    }
    focusOn = "Luzon";
    Region = focusOn;
}

function showVisayas(){
    someCommonContent();
    $("titleNameSpanF_1").innerHTML = _area[0];
    $("titleNameSpanF_2").innerHTML = areaTitleWords[1];

    for(var i = 2; i < RegionMenuRightLiList.length; i++)
    {
        if(regionTitleWords[1][i-2]){
            RegionMenuRightSpanList[i].innerHTML = regionTitleWords[1][i-2];
            RegionMenuRightLiList[i].style.display = "block";
            regionItemCount++;
        }else{
            RegionMenuRightLiList[i].style.display = "none";
        }
    }
    focusOn = "Visayas";
    Region = focusOn;
}

function showMindanao(){
    someCommonContent();
    $("titleNameSpanF_1").innerHTML = _area[0];
    $("titleNameSpanF_2").innerHTML = areaTitleWords[2];

    for(var i = 2; i < RegionMenuRightLiList.length; i++)
    {
        if(regionTitleWords[2][i-2]){
            RegionMenuRightSpanList[i].innerHTML = regionTitleWords[2][i-2];
            RegionMenuRightLiList[i].style.display = "block";
            regionItemCount++;
        }else{
            RegionMenuRightLiList[i].style.display = "none";
        }
    }
    focusOn = "Mindanao";
    Region = focusOn;
}
function executeFunction(positionTemp)
{
    var num=-1;
    for(var i=0;i<menuList.length;i++)
    {
        if(menuList[i].showFlag==1)
        {
            num++;
        }
        if(num==positionTemp)//找到此位置
        {
            menuList[i].param();//执行函数
            break;
        }
    }
}
function init()
{
    top.initTextDirection(window);
    timeoutInit();

    thdMenuRightLiList = $("thdMenuRight").getElementsByTagName("li");
    thdMenuRightSpanList = $("thdMenuRight").getElementsByTagName("span");

    $("titleNameSpan").innerHTML = _area[0];
    for(var i = 1; i < thdMenuRightLiList.length; i++)
    {
        thdMenuRightSpanList[i].innerHTML = areaTitleWords[i-1];
    }

    list_position_h = 0;
    $("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";

    showItems();
    addMouseListener();
}

function timeoutInit()
{
    document.onkeydown = top.timeoutMyFuc;
    top.timeoutFuc.osdTimeoutStartFuc();
    top.timeoutFuc.keydownFuc = keyDownProcess;
}
function notifyProcess(evt)
{
    var msg = evt.which;
    switch(msg)
    {
        default:
            top.systemEventProc(evt);
            break;
    }
}

function keyDownProcess(evt)
{
    var ret = true;
    var keycode = evt.which;
    switch (keycode)
    {
        case top.VK_UP:
            toUp();
            ret = false;
            break;
        case top.VK_DOWN:
            toDown();
            ret = false;
            break;
        case top.VK_ENTER:
            doEnter();
            ret = false;
            break;
        case top.VK_LEFT:
            toLeft();
            ret = false;
            break;
        case top.VK_RIGHT:
            toRight();
            ret = false;
            break;
        case top.VK_BACK:
            toBack();
            break;
        default:
            top.keyDownProcess(evt);
            break;
    }
    return ret;
}

function $(id)
{
    return document.getElementById(id);
}

/*
 * 十进制转二进制函数
 */
function dec2bin(num){
    if(isNaN(num))return;
    return parseInt(num,10).toString(2);
}

function initCityForPosition(_position)
{
    var topOffset = SUB_MENU_START + SUB_MENU_STEP*list_position_h_f - 10;
    var leftOffset = 778;
    cityList = allCityName[_position];
    cityListLength = allCityName[_position].length;

    listFormLiList = $("listForm").getElementsByTagName("li");//弹出框的5个li
    top.initListForm($("listForm"),topOffset,leftOffset,listFormLiList,cityList,cityListLength,form_position_h,offset);
}

function countCityArrayPosition(area_h,region_h){
    if(area_h == 0){
        listFormIndex = region_h;
    }
    else if(area_h == 1)
    {
        listFormIndex = _region[area_h-1].length + region_h;
    }
    else if(area_h == 2){
        listFormIndex = _region[area_h-2].length + _region[area_h-1].length + region_h;
    }
    return listFormIndex;
}

/*
 描述：在列表出来的时候按Up键刷新焦点的效果
 参数：sum：允许的enum总数量；wordsList：所有允许的enmu的文字描述保存在该数组中
 全局变量：form_position_h；offset;
 */
function toDownInListForm(sum,wordsList)
{
    if(form_position_h == 3 && (form_position_h + offset) >= (sum - 1))
    {
        offset = 0;
        for(var i = 0; i < 4; i++)
        {
            listFormLiList[i].innerHTML = wordsList[i+offset];
        }
        form_position_h = 0;
    }
    else if(form_position_h == 4 && (form_position_h + offset) >= (sum - 1))
    {
        offset = 0;
        for(var i = 0; i < 5; i++)
        {
            listFormLiList[i].innerHTML = wordsList[i+offset];
        }
        form_position_h = 0;
    }
    else if(form_position_h == 4 && (form_position_h + offset) < (sum - 1))
    {
        offset++;
        for(var i = 0; i < 5; i++)
        {
            listFormLiList[i].innerHTML = wordsList[i+offset];
        }
    }
    else
    {
        form_position_h++;
    }
    $("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
    if(offset > 0)
    {
        $("listUpImg").style.display = "block";
    }
    else
    {
        $("listUpImg").style.display = "none";
    }

    if((offset + 4) >= (sum - 1))
    {
        $("listDownImg").style.display = "none";
    }
    else
    {
        $("listDownImg").style.display = "block";
    }
    top.doEleScrForNoOption(listFormLiList, form_position_h, 1);
}

/*
 描述：在列表出来的时候按Up键刷新焦点的效果
 参数：sum：允许的enum总数量；wordsList：所有允许的enmu的文字描述保存在该数组中
 全局变量：form_position_h；offset;
 */
function toUpInListForm(sum,wordsList)
{
    if(form_position_h == 0 && offset == 0 && sum == 4)
    {
        offset = sum - 4;
        for(var i = 0; i < 4; i++)
        {
            listFormLiList[i].innerHTML = wordsList[i + offset];
        }
        form_position_h = 3;
    }
    else if(form_position_h == 0 && offset == 0)
    {
        offset = sum - 5;
        for(var i = 0; i < 5; i++)
        {
            listFormLiList[i].innerHTML = wordsList[i + offset];
        }
        form_position_h = 4;
    }
    else if(form_position_h==0 && offset > 0)
    {
        offset--;
        for(var i = 0; i < 5; i++)
        {
            listFormLiList[i].innerHTML = wordsList[i + offset];
        }
    }
    else if(form_position_h > 0)
    {
        form_position_h--;
    }
    $("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
    if(offset > 0)
    {
        $("listUpImg").style.display = "block";
    }
    else
    {
        $("listUpImg").style.display = "none";
    }

    if((offset + 4) >= (sum - 1))
    {
        $("listDownImg").style.display = "none";
    }
    else
    {
        $("listDownImg").style.display = "block";
    }
    top.doEleScrForNoOption(listFormLiList, form_position_h, -1);
}

function doEnter()
{
    if(focusOn == "menu")
    {
        executeFunction(list_position_h);
        position_on_RegionList = 0;
    }
    else if(focusOn == "Luzon")
    {
        //根据area和当前region的位置初始化弹出列表框内容，参数position_on_AreaZoneList,position_on_RegionList

        whichCityList = countCityArrayPosition(position_on_AreaZoneList,position_on_RegionList);
        initCityForPosition(whichCityList);
        $("fourthListFocus").src = mainFocus[1];
        $("menuUlF").getElementsByClassName("listThirdPropertyImg")[position_on_RegionList].src = regionFocus[1];
        $("listForm").style.display = "block";
        focusOn = "City";
    }
    else if(focusOn == "Visayas")
    {
        whichCityList = countCityArrayPosition(position_on_AreaZoneList,position_on_RegionList);
        initCityForPosition(whichCityList);
        $("fourthListFocus").src = mainFocus[1];
        $("menuUlF").getElementsByClassName("listThirdPropertyImg")[position_on_RegionList].src = regionFocus[1];
        $("listForm").style.display = "block";
        focusOn = "City";

    }
    else if(focusOn == "Mindanao")
    {
        whichCityList = countCityArrayPosition(position_on_AreaZoneList,position_on_RegionList);
        initCityForPosition(whichCityList);
        $("fourthListFocus").src = mainFocus[1];
        $("menuUlF").getElementsByClassName("listThirdPropertyImg")[position_on_RegionList].src = regionFocus[1];
        $("listForm").style.display = "block";
        focusOn = "City";

    }
    else if(focusOn == "City")
    {
        $("listForm").style.display = "none";
        $("fourthListFocus").src = mainFocus[0];
        $("menuUlF").getElementsByClassName("listThirdPropertyImg")[position_on_RegionList].src = regionFocus[0];
        position_on_CityList = offset + form_position_h;
		var areaCode = ((position_on_AreaZoneList+2)<<9)|((position_on_RegionList+1)<<5)|(position_on_CityList+1)
        sendNumber = dec2bin(areaCode);
        console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVsendNumber:"+sendNumber+" areaCode is "+areaCode);
		channel.systemAreacode = areaCode;
        focusOn = Region;
        form_position_h = 0;
        offset = 0;
    }

}

function toDown()
{
    if(focusOn == "menu")
    {
        if(list_position_h >= (showItemNum-1))
        {
            list_position_h = 0;
        }
        else
        {
            list_position_h++;
        }
        position_on_AreaZoneList = list_position_h;
        $("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
    }else if(focusOn == "Luzon")
    {
        if(list_position_h_f >= (regionItemCount-1))
        {
            list_position_h_f = 0;
        }
        else
        {
            list_position_h_f++;
        }
        position_on_RegionList = list_position_h_f;
        $("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h_f + "px";
    }else if(focusOn == "Visayas")
    {
        if(list_position_h_f >= (regionItemCount-1))
        {
            list_position_h_f = 0;
        }
        else
        {
            list_position_h_f++;
        }
        position_on_RegionList = list_position_h_f;
        $("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h_f + "px";
    }else if(focusOn == "Mindanao"){
        if(list_position_h_f >= (regionItemCount-1))
        {
            list_position_h_f = 0;
        }
        else
        {
            list_position_h_f++;
        }
        position_on_RegionList = list_position_h_f;
        $("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h_f + "px";
    }
    else
    {
        toDownInListForm(cityListLength,cityList);
    }
}

function toUp()
{
    if(focusOn == "menu")
    {
        if(list_position_h <= 0)
        {
            list_position_h = showItemNum-1;
        }
        else
        {
            list_position_h--;
        }
        position_on_AreaZoneList = list_position_h;
        $("thdListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h + "px";
    }else if(focusOn == "Luzon"){
        if(list_position_h_f <= 0)
        {
            list_position_h_f = regionItemCount-1;
        }
        else
        {
            list_position_h_f--;
        }
        position_on_RegionList = list_position_h_f;
        $("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h_f + "px";
    }else if(focusOn == "Visayas"){
        if(list_position_h_f <= 0)
        {
            list_position_h_f = regionItemCount-1;
        }
        else
        {
            list_position_h_f--;
        }
        position_on_RegionList = list_position_h_f;
        $("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h_f + "px";

    }else if(focusOn == "Mindanao"){
        if(list_position_h_f <= 0)
        {
            list_position_h_f = regionItemCount-1;
        }
        else
        {
            list_position_h_f--;
        }
        position_on_RegionList = list_position_h_f;
        $("fourthListFocus").style.top = SUB_MENU_START + SUB_MENU_STEP*list_position_h_f + "px";
    }
    else
    {
        toUpInListForm(cityListLength,cityList);
    }
}

function toLeft()
{
    toBack();
}
function toRight()
{
    doEnter();
}

function toBack()
{
    if(focusOn == "menu")
    {
        parent.returnPage(2);
    }
    else if(focusOn == "Luzon" || focusOn == "Visayas" || focusOn == "Mindanao")
    {
        $("thdHtml").style.display = "block";
        $("regionAndCity").style.display = "none";
        regionItemCount = 0;
        form_position_h = 0;
        offset = 0;
        focusOn = "menu";
    }
    else if(focusOn == "City")
    {
        $("listForm").style.display = "none";
        $("fourthListFocus").src = mainFocus[0];
        $("menuUlF").getElementsByClassName("listThirdPropertyImg")[position_on_RegionList].src = regionFocus[0];
        form_position_h = 0;
        offset = 0;
        focusOn = Region;
    }
}

//-----------根据showflag来显示内容----------------
function showItems()
{
    showItemNum = 0;

    thdMenuRightLiList[0].style.display = "block";//标题是一定显示的
    //设置item是否显示
    for(var i=0;i<menuList.length;i++)
    {
        if(menuList[i].showFlag == 1)
        {
            thdMenuRightLiList[i+1].style.display = "block";
            showItemNum ++;
        }
        else if(menuList[i].showFlag == 0)
        {
            thdMenuRightLiList[i+1].style.display = "none";
        }
        else
        {
            thdMenuRightLiList[i+1].style.display = "none";
        }

    }
}
function addMouseListener()
{
    document.body.onmousedown = function(evt)
    {
        evt.preventDefault();
        top.timeoutFuc.osdTimeoutEndFuc();
        if(evt.button == 2) toBack();//right key
        top.timeoutFuc.osdTimeoutStartFuc();
    };

    for(var i = 1; i < thdMenuRightLiList.length; i++)
    {
        thdMenuRightLiList[i].setAttribute("newAttr",i);
        thdMenuRightLiList[i].onmousedown = function(evt)
        {
            top.timeoutFuc.osdTimeoutEndFuc();
            if(evt.button == 0)//left key
            {
                if(focusOn == "menu")
                {
                    if(regionFlag == 1)
                    {
                        list_position_h = parseInt(this.getAttribute("newAttr")) - 1;
                    }
                    else
                    {
                        list_position_h = findRealPosition(parseInt(this.getAttribute("newAttr")));
                    }
                    updateFocus();
                    doEnter();
                }
            }
            top.timeoutFuc.osdTimeoutStartFuc();
        };
    }

    for(var i = 1; i < RegionMenuRightLiList.length; i++)
    {
        RegionMenuRightLiList[i].setAttribute("newAttr",i);
        RegionMenuRightLiList[i].onmousedown = function(evt)
        {
            top.timeoutFuc.osdTimeoutEndFuc();
            if(evt.button == 0)//left key
            {
                if(focusOn == Region)
                {
                    if(showFlag == 1)
                    {
                        list_position_h_f = parseInt(this.getAttribute("newAttr")) - 1;
                    }
                    else
                    {
                        list_position_h_f = findRealPosition(parseInt(this.getAttribute("newAttr")));
                    }
                    updateFocus();
                    doEnter();
                }
            }
            top.timeoutFuc.osdTimeoutStartFuc();
        };
    }

    for(var i = 0; i < 5; i++)
    {
        listFormLiList[i].setAttribute("newAttr",i);
        listFormLiList[i].onmousedown = function(evt)
        {
            top.timeoutFuc.osdTimeoutEndFuc();
            if(evt.button == 0)//left key
            {
                if(focusOn != "menu")
                {
                    form_position_h = parseInt(this.getAttribute("newAttr"));
                    $("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
                    doEnter();
                }
            }
            top.timeoutFuc.osdTimeoutStartFuc();
        };
    }
    $("listUpImg").onmousedown = function(evt)
    {
        top.timeoutFuc.osdTimeoutEndFuc();
        if(evt.button == 0)//left key
        {
            if(focusOn != "menu")
            {
                form_position_h = 0;
                $("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
                toUp();
            }
        }
        top.timeoutFuc.osdTimeoutStartFuc();
    };

    $("listDownImg").onmousedown = function(evt)
    {
        top.timeoutFuc.osdTimeoutEndFuc();
        if(evt.button == 0)//left key
        {
            if(focusOn != "menu")
            {
                form_position_h = 4;
                $("listFormFocus").style.top = form_position_h*FORM_STEP + "px";
                toDown();
            }
        }
        top.timeoutFuc.osdTimeoutStartFuc();
    };
}
