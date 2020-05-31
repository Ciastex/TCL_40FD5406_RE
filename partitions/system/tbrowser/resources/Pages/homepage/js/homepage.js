// JavaScript Document

$(function(){
	addCss();
	$("#bd_input input:first").focus();
	addPic();
	website();	
});

function addPic()
{
	$("#favorite li input").each(function(){
      	var src = $(this).attr("src");
	  	$(this).css({"background-image" : "url(" + "img/website" + window.screen.height + "p/" +src + ")"},{"background-size" : "50px 60px"});
    });
}

function website()
{
	$("#favorite li input").click(function(){
		var html = $(this).attr("title");
		location.href = "http://" + html;
	});
	
	$("#content table td input").click(function(){
		var html = $(this).attr("title");
		location.href = "http://" + html;
	});
}

function search()
{
	var text = $("#bd_input .search_content").val();
	if(text != "")
		window.location.href = "http://www.baidu.com/s?wd=" + text;
	else
		$("#bd_input .search_content").focus();
}

function addCss()
{
	var head = document.getElementsByTagName("head")[0];
	var fileref = document.createElement('link');
	fileref.setAttribute("rel","stylesheet");
	fileref.setAttribute("type","text/css");
	fileref.setAttribute("href", "css/homepage" + window.screen.height + "p.css");
	
	head.appendChild(fileref);
}