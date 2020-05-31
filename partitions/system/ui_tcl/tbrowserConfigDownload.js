var fileCount = 0;
var version = "";
var path = "http://s3.tcllauncher.com/html5/inject_config/inject_file_list.json";
var prefix = "http://s3.tcllauncher.com/html5/inject_config/";
function updateConfig(branch)
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET",path,true);
    xhr.onreadystatechange = function() {
        
        if (xhr.readyState == 4 && xhr.status == 200) 
        {
            var cc = JSON.parse(xhr.responseText);
            var tlist = cc.tbrowser_file_list;
            if (tlist)
            {
                console.log("webworker updateConfig "+tlist.length);
                for (var i=0;i<tlist.length;i++)
                {
                    fileCount++;
                    requestFile(tlist[i]);
                }
            }
            var hlist = cc.hbbtv_file_list;
            if (hlist)
            {
                console.log("webworker updateConfig "+hlist.length);
                for (var i=0;i<hlist.length;i++)
                {
                    fileCount++;
                    requestFile(hlist[i]);
                }
            }
        }
    }
    xhr.send();
}

function requestFile(url)
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET",prefix+url,true);
    xhr.onreadystatechange = function() {
        
        if (xhr.readyState == 4 && xhr.status == 200) 
        {
            fileCount--;
            var data = '{"action":"requestFile","url":"'+url+'","data":""}';
            var bb = JSON.parse(data);
            bb.data = xhr.responseText;
            postMessage(JSON.stringify(bb));
            if (fileCount<=0)
            {
                postMessage('{"action":"updateConfig","version":"'+version+'"}');
            }
            console.log("webworker requestFile success");
        }
    }
    xhr.send();
}

function checkVersion()
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET",path,true);
    xhr.onreadystatechange = function() {
        
        if (xhr.readyState == 4 && xhr.status == 200) 
        {
            var cc = JSON.parse(xhr.responseText);
            version = cc.version;
            console.log("webworker checkVersion "+version);
            postMessage('{"action":"checkVersion","version":"'+version+'"}');
        }
    }
    xhr.send();
}
onmessage = function (evt) {
    console.log("webworker receive message "+evt.data);
    eval(evt.data);
}