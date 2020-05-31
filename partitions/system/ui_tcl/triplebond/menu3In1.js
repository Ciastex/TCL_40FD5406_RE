

var textArray;
//staus的标题翻译
var guideArray;

var timer = null;


var n;// 图片数量
var inow;// 当前图片索引变量
var btn;// 开关，解决连续点击来不及删除元素的问题
var pics;
var pics_ul;
var pics_lis;
var dots;// 获取外层div
var dots_ul;// 获取图片ul
var dots_lis;// 获取图片li

var on_off = "off";
var showTwo = false;
var tempLi;
function initMenu()
{
	//1、找到左右支持的信源
	var sourceIds = findSource();
	
	pics = document.getElementById('imgs_div');		// 获取包裹三张圆形图片的DIV
	pics_ul = pics.getElementsByTagName('ul')[0];	// 获取包裹三张圆形图片的DIV 中的  ul
	pics_lis = pics_ul.getElementsByTagName('li');	// 获取包裹三张圆形图片的DIV 中的  ul 中的  li
	
	dots = document.getElementById('dots_div');		// 获取包裹三张圆点图片的DIV
	dots_ul = dots.getElementsByTagName('ul')[0];	// 获取包裹三张圆点图片的DIV 中的  ul
	dots_lis = dots_ul.getElementsByTagName('li');	// 获取包裹三张圆点图片的DIV 中的  ul 中的  li
	console.log("------menu3-1---top.g_channel.inputSource---"+top.g_channel.inputSource);
	
	changeUI();
	
	//n = pics_lis.length;// 图片数量
	n = 3;// 图片数量
	
	inow = 0;// 当前图片索引变量
	btn = true;// 开关，解决连续点击来不及删除元素的问题
	
	textArray = [top.textArray[0],top.textArray[1],top.textArray[2],top.textArray[3],top.textArray[4],top.textArray[5]];
	guideArray = [top.guideArray[0],top.guideArray[1],top.guideArray[2],top.guideArray[3],top.guideArray[4],top.guideArray[5]];
	
	document.getElementById("guideTitle_text").innerHTML = textArray[4];
	if(textArray[3].length > 14)
	{
		document.getElementById("guideContent_text_middle").innerHTML = '<marquee width="100px" behavior="scroll" align="middle"  direction="left" scrollamount="3" >' + textArray[3] + '</marquee>';
	}
	else
	{
		document.getElementById("guideContent_text_middle").innerHTML = textArray[3];
	}
	
	
	document.getElementById("powerOffText").innerHTML = textArray[5];
	show(inow);// 页面加载完成显示第一张
	
	function show(inow) // 展示函数
	{
		//1、初始化，左右的提示语
		document.getElementById("guideContent_text_left").innerHTML  = guideArray[inow*2];
		document.getElementById("guideContent_text_right").innerHTML = guideArray[inow*2+1];
		
		//2、初始化圆形图标下的提示语
		var text = document.getElementById("text");
		text.innerHTML = textArray[inow];
		
		var l = pics_lis[inow].offsetLeft;// 获取到需要展示的图片的偏移量
		move(pics_ul, {left : -l}, 'buffer');// 偏移量作为运动中left值
	}
	
	
	return sourceIds;
}

function changeUI()
{
	console.log("---top.g_channel.inputSource---"+top.g_channel.inputSource);
	if(top.g_channel.inputSource != 1&&top.g_channel.inputSource != 0)
	{
		showTwo = true;
	}
	else
	{
		showTwo = false;
	}
	
	//console.log("---showTwo---"+showTwo);
	//console.log("---pics_lis.length---"+pics_lis.length);
	
	
	if(showTwo)//如果要显示两个，但是当前是三个的话
	{
		if(pics_lis.length==3)
		{
			tempLi = document.getElementById("secondImgsLi").cloneNode(true);// 复制第二张
			pics_ul.removeChild(document.getElementById("secondImgsLi"));// 移除第二张图-1
		}
		
		
		dots_lis[1].style.visibility = "hidden";//隐藏第二个圆点
	}
	else if(!showTwo)//如果要显示三个，但是当前是两个的话
	{
		if(pics_lis.length==2)
		{
			if(pics_lis[0].getAttribute("id")=="firstImgsLi")
			{
				pics_ul.insertBefore(tempLi,document.getElementById("thirdImgsLi"));// 添加到第二个
			}
			else
			{
				pics_ul.appendChild(tempLi);
			}
		}
		
		
		dots_lis[1].style.visibility = "visible";//显示第二个圆点
	}
}




function timeIn()
{
	var time = document.getElementById("powerOffNum");
	textArray = [top.textArray[0],top.textArray[1],top.textArray[2],top.textArray[3],top.textArray[4],top.textArray[5]];
	document.getElementById("powerOffText").innerHTML = textArray[5];
	time.innerHTML = 5;
	timer = setInterval(function()
	{
		if(time.innerHTML == 0)
		{
			clearInterval(timer);
			hideMenu3In1();

			console.log("timeIn  top.g_setting.suspendStatus = " +　top.g_setting.suspendStatus);
			if(top.g_setting.suspendStatus == 1){
				setTimeout("top.preSTRPowerOff()", 100);
				setTimeout("tcl.utils.sendTBrowserTVOSEvent(top.E_STR_SCREEN_OFF, 0)", 100);
			}else{
				setTimeout("tcl.setting.powerOff(0)", 100);
				setTimeout("tcl.setting.powerOff(3)", 100);
			}
		}
		else
		{
			time.innerHTML = parseInt(time.innerHTML) - 1;
		}
		
	}, 1000);
}

function unInitMenu()
{
	for(var i = 0 ;i<dots_lis.length;i++)
	{
		if(pics_lis[0].id != "firstImgsLi")
		{
			var newli = pics_lis[0].cloneNode(true);// 复制第一张
			pics_ul.appendChild(newli);// 添加到ul最后
			pics_ul.removeChild(pics_lis[0]);// 移除第一张图
		}
		var img = dots_lis[i].getElementsByTagName('img')[0];
		
		if(i==0)
		{
			img.src = "images/dotfocused2.png";
		}
		else
		{
			img.src = "images/dotunfocuse.png";
		}
	}
	
}


//move(pics_ul, {left : -l}, 'buffer');// 偏移量作为运动中left值
function move(obj, oTarget, iType, fnCallBack, fnDuring)
{
	if(obj.timer)
	{
		clearInterval(obj.timer);
	}
	
	obj.timer=setInterval(function ()
	{
		do_buffer_move(obj, oTarget, fnCallBack, fnDuring);
		
	}, 30);
	
}


function do_buffer_move(obj, oTarget, fnCallBack, fnDuring)
{
	var bStop=true;
	var attr='left';
	var speed=0;
	var currentAttr=0;
	
	currentAttr=changeOrGetOCss(obj, attr);
	if(oTarget[attr]!=currentAttr)
	{
		bStop=false;
			
		speed=(oTarget[attr]-currentAttr)/5;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		changeOrGetOCss(obj, attr, currentAttr+speed);
	}
	
	if(bStop)
	{
		clearInterval(obj.timer);
		obj.timer=null;
		if(fnCallBack)
		{
			fnCallBack();
		}
	}
}


document.onclick = function() // 下一个按钮被点击
{
	show_next();// 展示下一张
};


function show_next() 
{
	//console.log("----show_next--showTwo-"+showTwo+"---pics_lis.length---"+pics_lis.length);
	if (btn) 
	{
		if(!showTwo&&pics_lis.length==4)
		{
			pics_ul.removeChild(pics_lis[0]);// 移除第一张图
		}
		else if(showTwo&&pics_lis.length==3)
		{
			pics_ul.removeChild(pics_lis[2]);// 移除第一张图
		}
		btn = false;// 将开关关闭，直到下次打开之前点击按钮将无效
		var newli = pics_lis[0].cloneNode(true);// 复制第一张
		pics_ul.appendChild(newli);// 添加到ul最后
		var l = pics_lis[1].offsetWidth;
		move(pics_ul, {left : -l}, 'buffer', function() // 切换至第二张图
		{
			if(!showTwo&&pics_lis.length==3)
			{
			}
			else if(showTwo&&pics_lis.length==2)
			{
			}
			else
			{
				pics_ul.removeChild(pics_lis[0]);// 移除第一张图
			}
			pics_ul.style.left = 0;// 重设left为0
			btn = true;// 打开开关
		});
		
		
		var img;
		if(inow == 1&&pics_ul.getElementsByTagName('li').length==3)
		{
			inow = inow+1;
		}
		
		img = dots_lis[inow].getElementsByTagName('img')[0];
		img.src = "images/dotunfocuse.png";
		
		if (inow < n - 1) // 更改索引值
		{
			inow++;
		}
		else 
		{
			inow = 0;
		}
		
		
		if(inow == 1&&pics_ul.getElementsByTagName('li').length==3)
		{
			inow = inow+1;
		}
		img = dots_lis[inow].getElementsByTagName('img')[0];
		img.src = "images/dotfocused2.png";
		
		var text = document.getElementById("text");
		text.innerHTML = textArray[inow];
		
		var guideContent_text_left = document.getElementById("guideContent_text_left");
		guideContent_text_left.innerHTML = guideArray[inow*2];
		
		var guideContent_text_right = document.getElementById("guideContent_text_right");
		guideContent_text_right.innerHTML = guideArray[inow*2+1];
		
		
	}
}



function changeOrGetOCss(obj, attr, value)
{
	if(arguments.length==2)
	{
		var tempvar = parseInt(obj.currentStyle?obj.currentStyle[attr]:document.defaultView.getComputedStyle(obj, false)[attr]);
		return tempvar;
	}
	else if(arguments.length==3)
	{
		obj.style[attr] = value+'px';
	}
}


function findSource()
{
	var sourceIds = new Array();
	var sourceId;
    if ((top.supportATVSource == 1) || (top.supportDTVSource == 1))
    {
		var currentChannel = channel.getCurrentChannelInfo();
		console.log("serviceType = "+currentChannel.serviceType);
		sourceId = (currentChannel.serviceType==0)?0:1;
		sourceIds.push(sourceId);
    }

    if (setting.getProperty("ro.sita.model.LiveTV.SCART","FALSE") == "TRUE")
    {
        sourceId = top.E_INPUT_SCART;
        sourceIds.push(sourceId);
    }
    else if(setting.getProperty("ro.sita.model.LiveTV.AV","FALSE") == "TRUE")
    {
    	sourceId = top.E_INPUT_AV_I;//av-i
    	sourceIds.push(sourceId);
    }
    else if(setting.getProperty("ro.sita.model.LiveTV.AV2","FALSE") == "TRUE")
    {
    	sourceId = top.E_INPUT_AV_II;//av-ii
    	sourceIds.push(sourceId);
    }

    if (setting.getProperty("ro.sita.model.LiveTV.YPBPR","FALSE") == "TRUE")
    {
        sourceId = top.E_INPUT_YPBPR;
        sourceIds.push(sourceId);
    }
    if (setting.getProperty("ro.sita.model.LiveTV.HDMI1","FALSE") == "TRUE")
    {
        sourceId = top.E_INPUT_HDMI_I;
        sourceIds.push(sourceId);
    }
    if (setting.getProperty("ro.sita.model.LiveTV.HDMI2","FALSE") == "TRUE")
    {
        sourceId = top.E_INPUT_HDMI_II;
        sourceIds.push(sourceId);
    }
    if (setting.getProperty("ro.sita.model.LiveTV.HDMI3","FALSE") == "TRUE")
    {
        sourceId = top.E_INPUT_HDMI_III;
        sourceIds.push(sourceId);
    }
    if (setting.getProperty("ro.sita.model.LiveTV.HDMI4","FALSE") == "TRUE")
    {
        sourceId = top.E_INPUT_HDMI_IV;
        sourceIds.push(sourceId);
    }
    if(top.checkProperty("PC","ro.sita.model.Apps.source_support",1) || (setting.getProperty("ro.sita.model.LiveTV.VGA","FALSE") == "TRUE"))
	{
    	sourceId = top.E_INPUT_PC;
        sourceIds.push(sourceId);
	}
    
    return sourceIds;
}