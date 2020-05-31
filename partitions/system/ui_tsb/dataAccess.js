function setProperty(dataAccess,filename,value)
{
	dataAccess.set(filename,value);
	dataAccess.store();
}

function getProperty(dataAccess,filename)
{
	var ret = "";
	ret = dataAccess.get(filename);
    return ret;
}

function addData(dataAccess,filename,jsonOject)
{
    var collections = getProperty(dataAccess,filename);
    if(collections  == null){
        var collectionStr = "["+JSON.stringify(jsonOject)+"]";
        setProperty(dataAccess,filename,collectionStr);
    }else{
        var jsonCollections = JSON.parse(collections);
        jsonCollections.push(jsonOject);
        var jsonCollectionsStr=JSON.stringify(jsonCollections);
        setProperty(dataAccess,filename,jsonCollectionsStr);
    }
}

function removeData(dataAccess,filename,jsonOject)
{
    var ret = false;
    var collections = getProperty(dataAccess,filename);
    if(collections != null)
    {
        var jsonCollections = JSON.parse(collections);
        for(var i = 0;i<jsonCollections.length;i++)
        {
            var json = jsonCollections[i];

            if(json != null&&json.name==jsonOject.name)
            {
                delete jsonCollections[i];
                ret = true;
            }
         }
	var newJsonStr = "[]";
	var newJson = JSON.parse(newJsonStr);
		
	for(var i = 0;i<jsonCollections.length;i++)
        {
            var json = jsonCollections[i];
            if(json != null)
            {
                newJson.push(json);
            }
        }
	newJsonStr=JSON.stringify(newJson);
	setProperty(dataAccess,filename,newJsonStr);
    }
    return ret;
}


function getData(dataAccess,filename,jsonOject)
{
    var collections = getProperty(dataAccess,filename);
    if(collections != null){
        var jsonCollections = JSON.parse(collections);
        for(var i = 0;i<jsonCollections.length;i++)
        {
            var json = jsonCollections[i];
            if(json != null&&json.name==jsonOject.name)
            {
            		return json.value;
            }
        }
    }
    return 0;
}


