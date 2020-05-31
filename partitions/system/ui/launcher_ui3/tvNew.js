

var source;
var currentSource;
var currSourceList = 0;
var sourceList =
[
	{name:top.sourceOptions[0],   id:"0",  icon:"images/TV.png?md5=191cc04ee79c291286a224ef699798bc",    icon_disable:"images/TV_disable.png?md5=d7229a1a6f255ce0d8f1bac4096b717f"},
	{name:top.sourceOptions[0],   id:"1",  icon:"images/TV.png?md5=191cc04ee79c291286a224ef699798bc",    icon_disable:"images/TV_disable.png?md5=d7229a1a6f255ce0d8f1bac4096b717f"},
	{name:top.sourceOptions[1],  id:"2",  icon:"images/av.png?md5=0fb7e837afcd45718c7bed8b6c8bdf85", icon_disable:"images/av_disable.png?md5=87962c7b3b0ea3bd545bad3f06cfc79b"},
	{name:top.sourceOptions[1],  id:"3",  icon:"images/av.png?md5=0fb7e837afcd45718c7bed8b6c8bdf85", icon_disable:"images/av_disable.png?md5=87962c7b3b0ea3bd545bad3f06cfc79b"},
	{name:top.sourceOptions[1],   id:"11", icon:"images/scart.png?md5=1aea9b541fc5df3de5de66c433eabd53", icon_disable:"images/scart_disable.png?md5=a7bb3f355909e7575a196a5a3afe3c9e"},
	{name:top.sourceOptions[2],  id:"4",  icon:"images/cmp.png?md5=e25f77baf3920305ac1ee5297e3472f5", 	 icon_disable:"images/cmp_disable.png?md5=8afee7bff82175156b0774e2ffb8149e"},
	{name:top.sourceOptions[3],id:"6",  icon:"images/HDM1.png?md5=3ce1ac0e15671016306dcfec65a12aba",  icon_disable:"images/HDM1_disable.png?md5=8e701e74846c88481712f4f705e4eeec"},
	{name:top.sourceOptions[4],id:"7",  icon:"images/HDM1.png?md5=3ce1ac0e15671016306dcfec65a12aba",  icon_disable:"images/HDM1_disable.png?md5=8e701e74846c88481712f4f705e4eeec"},
	{name:top.sourceOptions[5],id:"8",  icon:"images/HDM1.png?md5=3ce1ac0e15671016306dcfec65a12aba",  icon_disable:"images/HDM1_disable.png?md5=8e701e74846c88481712f4f705e4eeec"},
	{name:top.sourceOptions[6],id:"12", icon:"images/HDM1.png?md5=3ce1ac0e15671016306dcfec65a12aba",  icon_disable:"images/HDM1_disable.png?md5=8e701e74846c88481712f4f705e4eeec"},
	{name:top.sourceOptions[8]?top.sourceOptions[8]:"Media",id:"10", icon:"images/USB.png?md5=89ed2d87f29a388c82117764a20664e9",   icon_disable:"images/USB_disable.png?md5=0480e2110e3a17c8191858db6dc9898a"},
    {name:top.sourceOptions[7],id:"5", icon:"images/VGA.png?md5=07d47ce9ad4b0bcc9412fdab8d345487",   icon_disable:"images/VGA_disable.png?md5=c1d099c1f5a6cc3c876f6d2ad50ac09f"},
];


function init()
{
    if (parent.isCache)
    {
        return;
    }
	//得到Source数组
	currSourceList = getSources();
	
	//得到显示信源的div
	var tvPageDivs = document.getElementById("tvPage").getElementsByClassName("elem");
	var tvPageFocusDivs = document.getElementById("tvPage").getElementsByClassName("elem_border");
	//为每个位置增加点击函数、图片、信源名字
	for(var i = 0 ;i<currSourceList.length;i++)
	{
		var source = currSourceList[i];
		tvPageDivs[i+1].sourceId = source.getId();
		tvPageDivs[i+1].onclick = function()
		{
			jumpToSouce(this.sourceId);
  		};

		tvPageFocusDivs[i+1].sourceId = source.getId();
		tvPageFocusDivs[i+1].onclick = function()
		{
			jumpToSouce(this.sourceId);
		};
		tvPageDivs[i+1].getElementsByTagName("img")[0].src = ""+source.getIcon();
		tvPageDivs[i+1].getElementsByTagName("span")[0].innerHTML = ""+source.getName();
        var downPosition = i+1+3;
        var rightPosition = i+1+1;
        if (downPosition>9 || downPosition>currSourceList.length)
        {
            downPosition = 0;
        }
        if (rightPosition>currSourceList.length)
        {
            tvPageDivs[i+1].setAttribute("data-right","-1");
        }
        if (downPosition==0)
        {
            tvPageDivs[i+1].setAttribute("data-down","0");
        }
        else
        {
            tvPageDivs[i+1].setAttribute("data-down","tv_0"+downPosition);
        }
		//console.log("currSourceList["+i+"] Id is "+source.getId()+"Icon is "+source.getIcon()+" Name is "+source.getName());
	}
    showCurrentChannelInfo(); 
}

function updateSource()
{
    if (currSourceList == 0)
    {
        return;
    }
	
	//得到显示信源的div
	var tvPageDivs = document.getElementById("tvPage").getElementsByClassName("elem");
	//为每个位置增加点击函数、图片、信源名字
	for(var i = 0 ;i<currSourceList.length;i++)
	{
		var source = currSourceList[i];

		tvPageDivs[i+1].getElementsByTagName("img")[0].src = ""+source.getIcon();	
	}
}

//得到 当前电视所 支持的信源
function getSources()
{
	var showSourceList = new Array();
	var setting = tcl.setting;
	

    if((top.supportATVSource == 1) || (top.supportDTVSource == 1))
    {
    	 var currentChannel = tcl.channel.getCurrentChannelInfo();
    	 if(currentChannel.number != 0)
    	 {
    	 	currentSource = getSourceBySourceId(currentChannel.serviceType?1:0);
    	 }
    	 else
    	 {
        	currentSource = getSourceBySourceId(1);
         }
        source = new Source(currentSource.name,currentSource.id,currentSource.icon,currentSource.icon_disable);
		showSourceList.push(source);
    }

    if (top.supportSCARTSource == 1||setting.getProperty("ro.sita.model.LiveTV.SCART","FALSE") == "TRUE")
    {
        currentSource = getSourceBySourceId(11);
        if (0)
        {
            var tmp = getSourceBySourceId(2);
            source = new Source(currentSource.name,currentSource.id,tmp.icon,tmp.icon_disable);
        }
        else
        {
            source = new Source(currentSource.name,currentSource.id,currentSource.icon,currentSource.icon_disable);
        }
		showSourceList.push(source);
    }
    else if(top.supportAV1Source == 1||setting.getProperty("ro.sita.model.LiveTV.AV","FALSE") == "TRUE")
    {
        currentSource = getSourceBySourceId(2);
        source = new Source(currentSource.name,currentSource.id,currentSource.icon,currentSource.icon_disable);
        showSourceList.push(source);
    }
    else if(top.supportAV2Source == 1||setting.getProperty("ro.sita.model.LiveTV.AV2","FALSE") == "TRUE")
    {
        currentSource = getSourceBySourceId(3);
        source = new Source(currentSource.name,currentSource.id,currentSource.icon,currentSource.icon_disable);
        showSourceList.push(source);
    }

    if (top.supportYPBPRSource == 1||setting.getProperty("ro.sita.model.LiveTV.YPBPR","FALSE") == "TRUE")
    {
        currentSource = getSourceBySourceId(4);
        source = new Source(currentSource.name,currentSource.id,currentSource.icon,currentSource.icon_disable);
        showSourceList.push(source);
    }
    if (top.supportHDMI1Source == 1||setting.getProperty("ro.sita.model.LiveTV.HDMI1","FALSE") == "TRUE")
    {
        currentSource = getSourceBySourceId(6);
        source = new Source(currentSource.name,currentSource.id,currentSource.icon,currentSource.icon_disable);
		showSourceList.push(source);
    }
    if (top.supportHDMI2Source == 1||setting.getProperty("ro.sita.model.LiveTV.HDMI2","FALSE") == "TRUE")
    {
        currentSource = getSourceBySourceId(7);
        source = new Source(currentSource.name,currentSource.id,currentSource.icon,currentSource.icon_disable);
		showSourceList.push(source);
    }
    if (top.supportHDMI3Source == 1||setting.getProperty("ro.sita.model.LiveTV.HDMI3","FALSE") == "TRUE")
    {
        currentSource = getSourceBySourceId(8);
        source = new Source(currentSource.name,currentSource.id,currentSource.icon,currentSource.icon_disable);
        showSourceList.push(source);
    }
    if (top.supportHDMI4Source == 1||setting.getProperty("ro.sita.model.LiveTV.HDMI4","FALSE") == "TRUE")
    {
        currentSource = getSourceBySourceId(12);
        source = new Source(currentSource.name,currentSource.id,currentSource.icon,currentSource.icon_disable);
        showSourceList.push(source);
    }
    if (top.supportVGASource == 1||setting.getProperty("ro.sita.model.LiveTV.VGA","FALSE") == "TRUE")
    {
        currentSource = getSourceBySourceId(5);
        source = new Source(currentSource.name,currentSource.id,currentSource.icon,currentSource.icon_disable);
        showSourceList.push(source);
    }
    
    //默认Media信源是显示的
    currentSource = getSourceBySourceId(10);
    source = new Source(currentSource.name,currentSource.id,currentSource.icon,currentSource.icon_disable);
    showSourceList.push(source);
	
	return showSourceList;
}


function getSourceBySourceId(SourceId)
{
	for(var i = 0;i<sourceList.length;i++)
	{
		if(SourceId == sourceList[i].id)
		{
            if (SourceId != "0" && SourceId != "1")
            {
                var index = tcl.channel.inputSourceDeviceName(SourceId);
				if(index != 0)
				{
					sourceList[i].name = top.sysInputSet[index];
				}
            }
			return sourceList[i];
		}
	}
}


function Source(name,id,icon,icon_disable)
{
	this.name = name;
	this.id   = id;
	this.icon = icon;
    this.icon_disable = icon_disable;
	
	this.getName = function()
	{
		return this.name;
	};
	this.getId = function()
	{
		return this.id;
	};
	this.getIcon = function()
	{
        if (tcl.setting.isSourceInsert(this.id))
        {
            return this.icon;
        }
        else if (this.id == 10 && tcl.media.deviceStatus())
        {
            return this.icon;
        }
        else if (this.id == top.lastInputSource)
        {
            return this.icon;
        }
        else
        {
            return this.icon_disable;
        }
	};
}

function showCurrentChannelInfo()
{
	var signalStatus = tcl.channel.currentSignalStatus;
	
	if(tcl.channel.inputSource==1)
	{
		var screenMode = tcl.channel.currentScreenSaverMode;
		if(!signalStatus && top.inputLock == 0)
		{
			document.getElementById("currentProgramRemind").innerHTML = top.screenSavers[1];
			document.getElementById("currentProgramRemind").style.display = "block";
		}
		else if (screenMode == 3 || screenMode==1)
		{
			document.getElementById("currentProgramRemind").innerHTML = top.screenSavers[2];
			document.getElementById("currentProgramRemind").style.display = "block";
		}
		else if (screenMode == 6)
		{
			document.getElementById("currentProgramRemind").innerHTML = top.screenSavers[4];
			document.getElementById("currentProgramRemind").style.display = "block";
		}
		else
		{
			document.getElementById("currentProgramRemind").style.display = "none";
		}
		
	}
	else
	{
		if(!signalStatus && top.inputLock == 0 )
		{
			document.getElementById("currentProgramRemind").innerHTML = top.screenSavers[1];
			document.getElementById("currentProgramRemind").style.display = "block";
		}
		else
		{
			document.getElementById("currentProgramRemind").style.display = "none";
		}
	}
}

