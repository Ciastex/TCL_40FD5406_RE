console.log("---run js_fix_calendar_breakline.js-22--");

function getStyle(obj, name)
{
	if(obj.currentStyle)
	{
	return obj.currentStyle[name];
	}
	else
	{
	return getComputedStyle(obj,false)[name];
	}
};
 

var calendar = document.getElementById("calendar");
if (calendar != null){	
	var orginWidth = getStyle(calendar, 'width');
	console.log("---js_fix_calendar_breakline fixed---orginWidth = "+orginWidth);
	calendar.style.width = (parseInt(orginWidth) - 5)+"px";
}
