var xhr1;
var xhr2;

function getUploadPeriod(prefix)
{
    if (!xhr1)
    {
        xhr1 = new XMLHttpRequest();
    }
    var url = prefix+"/log/getconfig?param=" + new Date().getTime();
    xhr1.open("GET",url,true);
    xhr1.onreadystatechange = function() {
        
        if (xhr1.readyState == 4 && xhr1.status == 200) 
        {
            var cc = JSON.parse(xhr1.responseText);
            if (cc && cc.error_code == "1000")
            {
                console.log("webworker getUploadPeriod "+cc.upload_interval);
                postMessage('{"action":"getUploadPeriod","period":"'+cc.upload_interval+'"}');
            }
        }
    }
    xhr1.send();
}

function uploadData(url, data)
{
    if (!xhr2)
    {
        xhr2 = new XMLHttpRequest();
    }
    xhr2.open("POST", url ,true);
    xhr2.onreadystatechange = function() {
        
        if (xhr2.readyState == 4 && xhr2.status == 200) 
        {
            console.log("webworker uploadData success");
        }
    }
    xhr2.send(data);
}

onmessage = function (evt) {
    //console.log("webworker receive message "+evt.data);
    eval(evt.data.replace(/[\n]/g, "\\n"));
}
