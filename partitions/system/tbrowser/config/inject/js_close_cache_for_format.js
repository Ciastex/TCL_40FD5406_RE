Util.println("---run js_close_cache.js---");
/*
@brief 相应文件类型表，如果多选，格式为"javascript&css"以&分开，为""默认打开全部
js  : "javascript" or"application/javascript" or "text/javascript"
css : "css" or "text/css"
png : "png" or "image/png"
jpg : "jpeg" or "image/jpeg"
gif : "gif" or "image/gif"
ttf : "ttf" or "font/ttf"
*/
Util.setEnv("TBROWSER_CLOSE_CACHE_FORMAT_OPTION","javascript");