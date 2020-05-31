Util.println("---run js_voice_control.js---");
var txtLinkMap = new Array();

var index;

function TCLParseHTML()
{
    index = 0;
    txtLinkMap = []; 
    var keys = new Array();
    keys = ParseElement("a",keys);
    keys = ParseElement("input",keys);
    keys = ParseElement("form",keys);
    var jsonObjForUp  = {_commands:{key0:keys}};
    return JSON.stringify(jsonObjForUp);
};
	
//1、解析<X>标签
function ParseElement(elementName,elementkeys)
{
	var keys = elementkeys;
	if(elementName == "a")
	{
		//得到所有带href属性的a标签
		var as = document.links;
			
		//以每一个a标签为父节点，循环处理每一个a标签
		for(var i = 0;i<as.length;i++)
		{
			//1、得到href属性的内容
			var text = as[i].innerHTML.replace(/<\/?.+?>/g,"");//去掉所有的html标记;//删除每一个a标签中的子节点，得到纯文字
			
			//2、得到<a>标签里面的文字，如果有文字，则下面的操作才有意义，否则不做任何操作，过掉
			if(text.trim()!="")
			{
				var href = as[i].href;
				txtLinkMap[text] = href;//储存文字和url的对应关系，本地执行使用
				keys.push(text);//储存语音分析的字符串
				console.log("index-a:"+index+"  --a-text--:"+text+"  --a-href--:"+href);
				index++;
			}
				
		}
			
			
		return keys;
	}
	else if(elementName == "input")
	{
		var input_text = "";
		var input_onclick = "";
		//得到所有的input标签
		var inputEmls = document.getElementsByTagName("input");
		for(var i = 0;i<inputEmls.length;i++)
		{
			//如果input的type是button
			if(inputEmls[i].getAttribute("type") == "button")
			{
				if(inputEmls[i].getAttribute("value")!=undefined&&inputEmls[i].getAttribute("onclick")!=undefined)
				{
					//1、得到此标签的value属性，就是text
					input_text    = inputEmls[i].getAttribute("value");
					//2、得到对应的onclick属性
					input_onclick = inputEmls[i].getAttribute("onclick");
					//3、添加到本地的对应表中
					txtLinkMap[input_text.trim()] = input_onclick;
					//4、拼接关键字到字符串中
					keys.push(input_text.trim());//储存语音分析的字符串
					console.log("index-input:"+index+"  --input-text--:"+input_text.trim()+"  --input-onclick--:"+input_onclick);
					index++;
				}
				
			}
			
		}
		return keys;
	}
	else if(elementName == "form")
	{
		var input_text = "";
		var form_action = "";
		
		var formEmls = document.getElementsByTagName("form");
		for(var i = 0;i<formEmls.length;i++)
		{
			//1、得到form标签的id或者name
			var form_sign = "tcl_"+index;
			if(formEmls[i].id != undefined)
			{
				form_sign = formEmls[i].id;
			}
			else if(formEmls[i].name != undefined)
			{
				form_sign = formEmls[i].name;
			}
			else
			{
				formEmls[i].name = form_sign;
			}
			
			var formInputEmls = formEmls[i].getElementsByTagName("input");
			for(var j = 0;j<formInputEmls.length;j++)
			{
				//如果input的type是button
				if(formInputEmls[j].getAttribute("type") == "submit"&&formInputEmls[j].getAttribute("value")!=undefined)
				{
					//1、得到此标签的value属性，就是text
					input_text    = formInputEmls[j].getAttribute("value");
					form_action   = "document.getElementById('"+form_sign+"').submit()";
					
					txtLinkMap[input_text.trim()] = form_action;
					keys.push(input_text.trim());//储存语音分析的字符串
					
					console.log("index-form:"+index+"  --form-text--:"+input_text.trim()+"  --form-onclick--:"+form_action);
					index++;
				}
			}
		}
		return keys;
	}
	return keys;
}


tcl.setting.initVoiceCtrol();

function tcl_voice_match(value)
{
    var x1 = value>>16;
    var x2 = value&0x0000ffff;
    if (x1==1)
    {
        var result = tcl.setting.getVoiceResult(x2);
        console.log("liyanru check "+result);
        document.location.href = txtLinkMap[result];
    }
}
function tcl_voice_post()
{
    //var jsonx = {"_commands":{"key0":["News","Sport","Weather","Shop","Earth","Travel","Capital","iPlayer"]}};//TCLParseHTML();
    var jsonx = TCLParseHTML();
    /*
    txtLinkMap["News"] = "http://www.bbc.com/news/";
    txtLinkMap["Sport"] = "http://www.bbc.com/sport/";
    txtLinkMap["Weather"] = "http://www.bbc.com/weather/";
    txtLinkMap["Shop"] = "http://shop.bbc.com/";
    txtLinkMap["Earth"] = "http://www.bbc.com/earth/";
    txtLinkMap["Travel"] = "http://www.bbc.com/travel/";
    txtLinkMap["Capital"] = "http://www.bbc.com/capital/";
    txtLinkMap["iPlayer"] = "http://www.bbc.com/iplayer/";
    */
    tcl.setting.updateVoiceContext(jsonx);
}
document.onglobalevent = function(evt)
{
    var msg = evt.which;
    var p1 = evt.modifiers
    switch (msg)
    {
        case 0x8301:
        break;
        case 0x8302:
        tcl_voice_post();
        break;
        case 0x8303:
        tcl_voice_match(p1);
        break;
    }
}
