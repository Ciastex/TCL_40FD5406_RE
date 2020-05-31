
/**@defgroup tcl_browser
@{

@brief TCL浏览器模块

*/


#ifndef __TCL_BROWSER_H__
#define __TCL_BROWSER_H__

#ifdef __cplusplus
extern "C" {
#endif

#include <stdio.h>
#include "tos_tbrowser.h"
#include "WebKitDefines.h"
#include "npruntime.h"
#include "npfunctions.h"
#include <SDL.h>

/**
@brief 模块名称,供TBrowserEnableLog使用
*/
#define TBROWSER_MODULE_NAME_ALL                 "All"
#define TBROWSER_MODULE_NAME_BACKFORWARD         "BackForward"
#define TBROWSER_MODULE_NAME_EDITING             "Editing"
#define TBROWSER_MODULE_NAME_EVENTS              "Events"
#define TBROWSER_MODULE_NAME_FRAMES              "Frames"
#define TBROWSER_MODULE_NAME_FTP                 "FTP"
#define TBROWSER_MODULE_NAME_HISTORY             "History"
#define TBROWSER_MODULE_NAME_ICONDATABASE        "IconDatabase"
#define TBROWSER_MODULE_NAME_LOADING             "Loading"
#define TBROWSER_MODULE_NAME_MEDIA               "Media"
#define TBROWSER_MODULE_NAME_NETWORK             "Network"
#define TBROWSER_MODULE_NAME_NOTYETIMPLEMENTED   "NotYetImplemented"
#define TBROWSER_MODULE_NAME_PAGECACHE           "PageCache"
#define TBROWSER_MODULE_NAME_PLATFORMLEAKS       "PlatformLeaks"
#define TBROWSER_MODULE_NAME_RESOURCELOADING     "ResourceLoading"
#define TBROWSER_MODULE_NAME_PLUGINS             "Plugins"
#define TBROWSER_MODULE_NAME_POPUPBLOCKING       "PopupBlocking"
#define TBROWSER_MODULE_NAME_PROGRESS            "Progress"
#define TBROWSER_MODULE_NAME_SPELLINGANDGRAMMAR  "SpellingAndGrammar"
#define TBROWSER_MODULE_NAME_SQLDATABASE         "SQLDatabase"
#define TBROWSER_MODULE_NAME_STORAGEAPI          "StorageAPI"
#define TBROWSER_MODULE_NAME_LIVECONNECT         "LiveConnect"
#define TBROWSER_MODULE_NAME_THREADING           "Threading"
#define TBROWSER_MODULE_NAME_FILEAPI             "FileAPI"


/**
@brief 浏览器要求定义的环境变量的名字
*/
    
/**
@brief T-Browser的根目录,此目录下必须存在名为resources的目录,存放浏览器的资源文件(由T-Browser提供发布)
*/
#define TBROWSER_ENV_NAME_TBROWSER_ROOT                 "TBROWSER_ROOT"

/**
@brief 此目录下必须有名为fonts的目录 存放字库配置文件
*/
#define TBROWSER_ENV_FONT_ROOT                          "FONT_ROOT"

/**
@brief https证书的完整路径(包含证书文件名)
*/
#define TBROWSER_ENV_CURL_CA_BUNDLE                     "CURL_CA_BUNDLE"

/**
@brief https证书的类型(包含证书文件名)
*/
#define TBROWSER_ENV_CURL_SSLCERTTYPE                   "CURL_SSLCERTTYPE"

/**
@brief 一个包含PEM格式证书的文件名
*/
#define TBROWSER_ENV_CURL_SSLCERT                       "CURL_SSLCERT"

/**
@brief 包含SSL私钥的文件名
*/
#define TBROWSER_ENV_CURL_SSLKEY                        "CURL_SSLKEY"

/**
@brief 在CURLOPT_SSLKEY中指定了的SSL私钥的密码
*/
#define TBROWSER_ENV_CURL_SSLCERTPASSWD                 "CURL_SSLCERTPASSWD"

/**
@brief 浏览器下载资源超时时间
*/
#define TBROWSER_ENV_CURL_CONNECT_TIMEOUT               "CURL_CONNECT_TIMEOUT"

/**
@brief 需要T-Browser加载的插件库的路径,此目录下必须只能存在插件库
*/
#define TBROWSER_ENV_PLUGIN_PATH                        "TBROWSER_PLUGIN_PATH"

/**
@brief 给浏览器存储一些配置信息的可写目录
*/
#define TBROWSER_ENV_CONFIG_PATH                        "TBROWSER_CONFIG_PATH"

/**
@brief 设置cookies 路径
*/
#define TBROWSER_ENV_COOKIES_PATH                       "CURL_COOKIE_JAR_PATH"

/**
@brief 设置浏览器是否处理返回键,如果为off就关闭返回键操作
*/
#define TBROWSER_ENV_NAME_TBROWSER_BACK_KEY_OPTION      "TBROWSER_BACK_KEY_OPTION"

/**
@brief 设置浏览器解析XML 文件模式 ,如果为0 就将XML 文件当做HTML 文件解析
*/
#define TBROWSER_ENV_XML_PARSING_MODE                   "TBROWSER_XML_PARSING_MODE"

/**
@brief 设置浏览器是否继续传递超链接的enter键,如果为on就继续传递enter键到onkeypress操作；默认为off
*/
#define TBROWSER_ENV_ANCHOR_ENTER_KEY_OPTION             "TBROWSER_ANCHOR_ENTER_KEY_OPTION"

/**
@brief 设置浏览器是否弹出错误页面,如果为off就不弹出错误页面
*/
#define TBROWSER_ENV_REPORT_ERROR                       "TBROWSER_REPORT_ERROR"

/**
@brief 设置浏览器输入法当前状态，0为关闭状态，1为启动状态
*/
#define TBROWSER_ENV_IME_STATE                          "TBROWSER_IME_STATE"


/**
@brief 设置浏览器输入法是否向mainframe发消息，0为关闭状态，1为启动状态
*/
#define TBROWSER_ENV_IME_SEND_TO_MAINFRAME              "TBROWSER_IME_SEND_TO_MAINFRAME"

/**
@brief 设置浏览器不需要缓存的文件格式，例如:关闭js，就赋值为"javascript"，
          关闭js和css，就赋值为"javascript&css"，为"" 默认打开所有
*/
#define TBROWSER_ENV_CLOSE_CACHE_FORMAT_OPTION          "TBROWSER_CLOSE_CACHE_FORMAT_OPTION"

/**
@brief 设置浏览器缓存的大小，单位是byte. 默认为 8388608 (8M),设置的值必须在默认值和4倍默认值之间,
       若设置值小于默认值取默认值，大于4倍默认值取4倍默认值。
*/
#define TBROWSER_ENV_CACHE_CAPACTIY                     "TBROWSER_CACHE_CAPACTIY"

/**
@brief 设置浏览器离线缓存的大小，单位是byte. 不设置该属性默认为 20M,设置该属性最大值为52428800(50M),
超过50M按50M处理
*/
#define TBROWSER_ENV_APP_CACHE_CAPACITY                 "TBROWSER_APP_CACHE_CAPACITY"

/**
@brief 设置浏览器离线缓存当前状态，1为启动状态，没有设置或其他任何值都为未启动状态
*/
#define TBROWSER_ENV_APP_CACHE_OPTION                   "TBROWSER_APP_CACHE_OPTION"

/**
@brief 设置浏览器磁盘缓存当前状态，0为关闭状态，1为启动状态
*/
#define TBROWSER_ENV_DISK_CACHE_OPTION                          "TBROWSER_DISK_CACHE_OPTION"
/**
@brief 设置浏览器不响应dfb的keyRelease事件，0表示默认处理，1表示不响应dfb的keyRelease事件，且由keyPress发keydown,keyup事件
*/
#define TBROWSER_ENV_REMOVE_KEYRELEASE_ENABLE                          "TBROWSER_REMOVE_KEYRELEASE_ENABLE"

/**
@brief 设置浏览器虚拟鼠标模式，0表示false，1表示true
*/
#define TBROWSER_ENV_VIRTUAL_MOUSE_MODE                          "TBROWSER_VIRTUAL_MOUSE_MODE"

/**
@brief 设置浏览器需要优先加载的文件，
例如:"mime=audio&mime=video&get_video_info"表示优先加载字符串包含mimi=audio或者包含mime=video或者包含get_video_info的资源
*/
#define TBROWSER_ENV_IMPORTANT_RESOURCE                          "TBROWSER_IMPORTANT_RESOURCE"

/**
@brief 设置CURL是否需要调用res_init函数，0表示false，1表示true
*/
#define TBROWSER_ENV_CURL_RES_INIT_ENABLE                        "TBROWSER_CURL_RES_INIT_ENABLE"

/**
@brief 设置最大的SKDfbBitMap个数，超过个数进行垃圾回收。不设置默认为80，设置为0代表无穷大。
*/
#define TBROWSER_ENV_MAX_SkDFBBITMAP_NUM                         "TBROWSER_MAX_SkDFBBITMAP_NUM"


/**
@brief 设置存储的最大cookies条数，超过设置值后不再添加cookies。 不设置默认为1000条，设置为0代表无穷大。
*/
#define TBROWSER_ENV_MAX_COOKIES_NUM                             "TBROWSER_MAX_COOKIES_NUM"

/**
@brief 设置图片加载失败时是否显示灰色边框。 不设置默认显示灰色边框，设置为1代表不显示。
*/
#define TBROWSER_ENV_DRAW_REPLACED_RECT                       "TBROWSER_ENV_DRAW_REPLACED_RECT"

/**
@brief 输入法键
*/
#define TBROWSER_TVOS_EVENT_IME                         1001
#define TBROWSER_TVOS_EVENT_WINDOW_CLOSE                1002
#define TBROWSER_TVOS_EVENT_SHOW_TOOLBAR                1000

/**
@brief 全局特殊按键定义
*/
#define TBROWSER_TVGLOBAL_EVENT_ERROR_CODE              1000

/**
@brief 浏览器初始化参数
*/
typedef struct {
    int m_size;             ///<必须赋值且其值为sizeof(TBrowserInitParam_S).本结构体大小,用于区分本结构体的不同版本
    int m_resolutionW;      ///<分辨率宽
    int m_resolutionH;      ///<分辨率高
    int m_threadPriority;   ///<线程相对优先级 0-100:0-linux默认优先级
}TBrowserInitParam_S;

/**
@brief 浏览器回调消息事件类型
*/
typedef enum {
    EN_TBROWSER_CBEVENT_TYPE_CHANGE_URL,                ///<切换页面的消息,code是const char*类型,表示要切换到的新的URL地址
    EN_TBROWSER_CBEVENT_TYPE_LOAD_PAGE_START,           ///<开始加载新页面,code是const char*类型,表示加载的URL地址
    EN_TBROWSER_CBEVENT_TYPE_LOAD_PAGE_END,             ///<页面加载结束,code是const char*类型,表示加载的URL地址
    EN_TBROWSER_CBEVENT_TYPE_LOAD_FRAME_START,          ///<开始加载新frame,code是const char*类型,表示加载的URL地址
    EN_TBROWSER_CBEVENT_TYPE_LOAD_FRAME_END,            ///<frame加载结束,code是const char*类型,表示加载的URL地址
    EN_TBROWSER_CBEVENT_TYPE_PROGRESS_CHANGED=5,        ///<加载进度变化,code是int类型,表示进度比,取值0-100
    EN_TBROWSER_CBEVENT_TYPE_UNHANDLED_KEYEVENT,        ///<处理浏览器未处理的按键事件,code是TBrowserEvent_S*类型
    EN_TBROWSER_CBEVENT_TYPE_SHOULD_OVERRIDE_KEYEVENT,  ///<是否浏览器按键事件,浏览器接收到遥控器事件后会先发送此消息进行询问,
                                                            ///<返回0表示不处理,直接交给浏览器;返回-1表示应用在回调中自己处理此消息,不要浏览器处理.
                                                            ///<code是TBrowserEvent_S*类型
    EN_TBROWSER_CBEVENT_TYPE_LOAD_URL_FAILED,            ///<URL打开失败,code是int类型,表示失败的错误码,取值
    EN_TBROWSER_CBEVENT_TYPE_WINDOW_CLOSE,                ///<需要关闭应用>
    EN_TBROWSER_CBEVENT_TYPE_CANNOT_SCROLL,               ///<页面在某个方向上已经不能滚动>code是int 类型,详见FocusDirection.h文件中的定义。
    EN_TBROWSER_CBEVENT_TYPE_MEMORY_FULL,                  ///<当浏览器使用内存达到应用指定的最大使用大小，抛给应用内存满消息>
    EN_TBROWSER_CBEVENT_TYPE_UNHANDLED_SYSTEMEVENT        ///<处理浏览器未发给页面的system event。消息类型是SDL_UserEvent 
}TBrowserCbEventType_E;


/**
@brief Dsmcc相关的FS的类型
*/
typedef enum
{
    EN_TBROWSER_FS_ENTRY_TYPE_FILE,
    EN_TBROWSER_FS_ENTRY_TYPE_DIR,
    EN_TBROWSER_FS_ENTRY_TYPE_STE
}TBrowserFSEntryType_E;

typedef struct
{
	TBrowserFSEntryType_E entryType;
	int entryPayloadLen;
	char* entryPayload;
}TBrowserFSEntryDescriptor;

typedef TBrowserFSEntryDescriptor* (*TBrowserGetFileContent_fn)(const char* entryURI);
typedef TBrowserFSEntryDescriptor* (*TBrowserGetDirContent_fn)(const char* entryURI);
typedef int (*TBrowserReleaseEntryDescriptor_fn)(TBrowserFSEntryDescriptor* entryURI);
typedef TBrowserFSEntryType_E (*TBrowserCheckEntryType_fn)(const char* entryURI);
typedef TBrowserFSEntryDescriptor* (*TBrowserGetStreamEventList_fn)(const char* entryURI);

typedef struct
{
    TBrowserGetFileContent_fn  getFileContent;
    TBrowserGetDirContent_fn   getDirContent;
    TBrowserReleaseEntryDescriptor_fn  releaseEntryDescriptor;
    TBrowserCheckEntryType_fn   checkEntryType;
    TBrowserGetStreamEventList_fn  getStreamEventList;
}TBrowserDsmccProtocol_S;

typedef struct {
	char* type;
	char* injectFilePath;
	char* whiteUrl;
	char* injectTime;
}TBrowserInjectInfo_S;

typedef struct {
	int   left;
	int   top;
	int   width;
	int   height;
}TBrowserRect_S;



/**
* @brief 浏览器用户事件码值定义
*/
typedef enum {
    EN_SDL_USER_EVENT_CODE_TIMER,                   ///<浏览器计时器事件
    EN_SDL_USER_EVENT_CODE_FUNCTION_CALL,           ///<调用指定函数指针,此时,
                                                    ///<userEvent.data1表示SDLUserEventFunction_fn类型函数指针
                                                    ///<userEvent.data2与userEvent.data3表示SDLUserEventFunction_fn函数的入口参数
    EN_SDL_USER_EVENT_CODE_SEND_VIRTUAL_KEYCODE,    ///<发送虚拟按键事件,此时,
                                                    ///<userEvent.data1表示虚拟按键的键值
                                                    ///<userEvent.data2表示虚拟按键的附带数据
    EN_SDL_USER_EVENT_CODE_SEND_GLOBAL_KEYCODE,     ///<发送UI全局按键，此时，
                                                    ///<userEvent.data1表示虚拟按键的键值
                                                    ///<userEvent.data2表示虚拟按键的附带数据
    EN_SDL_USER_EVENT_CODE_CHECK_ALIVE,             ///<校验浏览器线程是否还在正常执行
    EN_SDL_USER_EVENT_CODE_REPAINT_SCREEN,          ///重绘屏幕事件
    EN_SDL_USER_EVENT_CODE_KEYBOARD_TEXT            ///定义输入法输入中文事件
}SDLUserEventCode_E;

typedef int (*SDLUserEventFunction_fn)(void* param1, void* param2);

/**
* @brief 获取 DSMCC 相关函数结构体，该结构体里面有DSMCC相关操作的函数指针
* @return 返回 一个全局的结构体变量指针，
*/
WEBKIT_API TBrowserDsmccProtocol_S* TBrowserGetDsmccProtocol();

/**
* @brief 注册 DSMCC protocol，对结构体进行初始化赋值
* @return 返回 0，
*/
WEBKIT_API int TBrowserRegisterDsmccProtocol(TBrowserDsmccProtocol_S* protocol);

/**
@brief 浏览器的回调函数类型定义

@param[in] event 产生的事件类型枚举
@param[in] code 产生的事件附带数据,根据event类型不同有不同的定义,详细见TBrowserCbEventType_E中每个类型的定义说明
@param[in] userData 用户数据,其值为调用TBrowserAddCallback时传入的用户数据

@return 返回值根据event类型不同有不同的定义,详细见TBrowserCbEventType_E中每个类型的定义说明
*/
typedef int (*TBrowserCallback_fn)(TBrowserCbEventType_E event, void* code, void* userData);


/**
@brief 初始化浏览器模块

@param[in] initParam 初始化配置参数 
@return 成功返回0;失败返回其他
*/
WEBKIT_API int TBrowserInit(TBrowserInitParam_S *initParam);

/**
@brief 销毁浏览器模块

@return 成功返回0;失败返回其他
*/
WEBKIT_API int TBrowserDestroy(void);

/**
@brief 添加浏览器回调

@param[in] cb 回调函数
@param[in] userData 用户自定义数据
@return 成功返回0;失败返回其他
*/
WEBKIT_API int TBrowserAddCallback(TBrowserCallback_fn cb, void* userData);

/**
@brief 删除浏览器回调

@param[in] cb 回调函数
@return 成功返回0;失败返回其他
*/
WEBKIT_API int TBrowserRemoveCallback(TBrowserCallback_fn cb);

/**
@brief 添加浏览器回调

@param[in] cb 回调函数
@param[in] userData 用户自定义数据
@return 成功返回0;失败返回其他
*/
WEBKIT_API int TBrowserAddCallbackEx(TOS_TBrowser_Event_Callback cb, void* userData);

/**
@brief 删除浏览器回调

@param[in] cb 回调函数
@return 成功返回0;失败返回其他
*/
WEBKIT_API int TBrowserRemoveCallbackEx(TOS_TBrowser_Event_Callback cb);

/**
@brief 打开指定页面

@param[in] url 页面地址
@return 成功返回0;失败返回其他
*/
WEBKIT_API int TBrowserLoadUrl(const char * url);

/**
@brief 向页面发送TVOS事件

@param[in] event 事件code值,data:事件的数据
@return 成功返回0;失败返回其他
*/
WEBKIT_API int TBrowserPushTVOSEvent(int event, int data);

/**
@brief 向页面发送TVGlobal事件

@param[in] event 事件code值,data:事件的数据
@return 成功返回0;失败返回其他
*/
WEBKIT_API int TBrowserPushTVGlobalEvent(int event, int data);

/**
@brief 向页面发送keyboard Text事件

@param[in] event 事件内容
@return 成功返回0;失败返回其他
*/
WEBKIT_API int TBrowserPushkeyBoardTextEvent(SDL_Event* event);

/**
@brief 向页面发送事件

@param[in] event 事件内容
@return 成功返回0;失败返回其他
*/
WEBKIT_API int TBrowserPushEvent(SDL_Event *event);

/**
@brief 添加扩展JavaScript接口

@param[in] name JS对象名称. 该指针指向的地址需要一直有效
@param[in] npClass JS对象对应的NPClass类型指针. 该指针指向的地址需要一直有效
@return 成功返回0;失败返回其他
*/
WEBKIT_API int TBrowserAddJavaScriptInterface(const char * name, NPClass *npClass);

/**
@brief 获取NPNetscapeFuncs,供js扩展实现使用

注意,不一定会对functions结构体中的每一个函数都赋值,所以使用functions中的函数调用之前,一定要做判空保护

@param[out] functions 输出参数
@return 成功返回0;失败返回其他
*/
WEBKIT_API int TBrowserGetNPNetscapeFuncs(NPNetscapeFuncs *functions);

/**
@brief 执行javascript脚本.供js扩展实现和插件使用

@note 注意,此函数必须只能在浏览器线程中调用!!

@param[in] isPlugin 是否是插件调用
@param[in] npp 必须传入在本JS对象allocate时的npp
@param[in] script 要执行的脚本
@param[out] 脚本返回结果
@return 成功返回0;失败返回其他
*/
WEBKIT_API int TBrowserEvaluateScript(bool isPlugin, NPP npp, char* script, NPVariant* result);

/**
@brief 打开指定模块的打印

此接口需要在调用TBrowserInit之前调用,否则浏览器初始化过程的打印就打印不出来
对于release库是没有作用的,release库是没有打印的

@param[in] moduleName 模块名称,取值见本文件的宏定义
@return 成功返回0;失败返回其他
*/
WEBKIT_API int TBrowserEnableLog(const char * moduleName);

/**
@brief 设置自定义的userAgent

@param[in] userAgent 新的userAgent

*/
WEBKIT_API void TBrowserSetUserAgent(const char* userAgent);

/**
@brief 获取userAgent

@return 成功返回UserAgent的值;失败返回NULL
*/
WEBKIT_API const char* TBrowserGetUserAgent();

/**
@brief 设置新的键值映射文件

@note 映射文件的内容格式为每行内容是old_key=new_key

@param[in] fileName 键值映射文件路径

@return 成功返回0;失败返回其他
*/
WEBKIT_API int TBrowserLoadKeymapFile(const char * fileName);

/**
@brief 设置js以及css的注入配置文件

@note 配置文件的格式为xml格式，其内容需要参考如下示例:
https://10.120.92.6/svn/TMER/Trunk/TMER/external/tcl_browser/external/webkitsdl/Tools/SDLWebLauncher/config/inject/inject_file_config.xml

@param[in] injectFile 注入配置文件路径

*/
WEBKIT_API int TBrowserLoadInjectFile(const char * injectFile);

/**
@brief 设置页面的可见性

@param[in] visible 可见性 true表示页面可见 false表示页面不可见

@return 成功返回0;失败返回其他
*/
WEBKIT_API int TBrowserSetVisible(bool visible);

/**
@brief 设置页面背景是否透明

如果没有设置，默认背景是透明。

@param[in] transparent 是否透明 true表示透明，false表示不透明

@return 成功返回0;失败返回其他
*/
WEBKIT_API int TBrowserSetBGColorTransparent(bool transparent);


/**
@brief 设置浏览器cookie是否可用
设置cookie不可用之后页面不可以再设置或读取cookie。

如果不调用此接口设置，默认是可用的
@param[in] enable true表示可用，false表示不可用
@return 成功返回0;失败返回其他
*/
WEBKIT_API int TBrowserEnableCookie(bool enable);

/**
@brief 获取当前页面的URL

*/
WEBKIT_API const char* TBrowserGetCurrentURL();

/**
@brief 清除历史浏览记录

@note 会保留当前的URL

@return  成功返回0;失败返回其他
*/
WEBKIT_API int TBrowserClearHistory();

/**
@brief 获取页面的前进列表URL的个数
@return 获取当前页面之后可以跳转的页面个数
*/
WEBKIT_API int TBrowserGetForwardCount(unsigned int pageId);

/**
@brief 获取页面的后退列表URL的个数

@return 获取当前页面之前可以跳转的页面个数
*/
WEBKIT_API int TBrowserGetBackCount(int pageId);

/**
@brief 获取页面指定位置的URL
@param[in] pageId 指定的页面ID
@param[in] index 指定页面位置
@return 获取指定位置的URL
*/
WEBKIT_API const char* TBrowserGetBackUrl(int pageId, int index);
/**
@brief 打开指定页面
@param[in] pageId 指定的页面ID
@param[in] url 页面地址
@return 成功返回0;失败返回其他
*/
WEBKIT_API int TBrowserLoaderPageUrl(unsigned pageId,const char* url);
/**
@brief 销毁指定页面
@param[in] pageId 指定销毁的页面ID
@return 成功返回0;失败返回其他
*/
WEBKIT_API int TBrowserDestroyPage(unsigned pageId);
/**
@brief 获取当前页面的个数
@return -1表示函数调用出错，其他值为返回页面个数
*/
WEBKIT_API int TBrowserGetPageCount();
/**
@brief 创建一个页面
@param[in] width 创建页面的宽
@param[in] height创建页面的高
@return 成功返回pageId;失败返回-1
*/
WEBKIT_API int TBrowserCreatePage(unsigned int width,unsigned int height);
/**
@brief指定当前活动的page，该page效应事件
@param[in] pageId 活动的页面ID
@return 成功返回0;失败返回其他
*/
WEBKIT_API int TBrowserSetActivePage(unsigned int pageId);

/**
@brief设置页面是否需要显示焦点框
@param[in] needSetFocusRing = 0为不显示，needSetFocusRing =1 显示
@return 成功返回0;失败返回其他
*/
WEBKIT_API int TBrowserSetDrawFocusRing(bool needSetFocusRing);

/**
@brief获取当前页面的url
@param[in] pageId 页面ID
@param[out] url 返回页面url
@param[in] length url的长度
@return 成功返回0;失败返回其他
*/
WEBKIT_API int TBrowserGetUrl(unsigned int pageId, char* url, int length);


/**
@brief获取当前页面的title
@param[in] pageId 页面ID
param[out] title 返回页面title
@param[in] length title的长度
@return 成功返回0;失败返回其他
*/
WEBKIT_API int TBrowserGetTitle(unsigned int pageId, char* title, int length);

/**
@brief 注册允许访问本地资源的协议类型
@param[in] scheme 协议的名字 如http、https等
@return 成功返回0;失败返回其他
*/
WEBKIT_API int TBrowserRegisterURLSchemeAsLocal(const char* scheme);




/**
@brief后退一个网页
@param[in] pageId 页面ID
@return 无
*/
WEBKIT_API int TBrowserGoBack(unsigned int pageId);

/**
@brief前进一个网页
@param[in] pageId 页面ID
@return 无
*/
WEBKIT_API int TBrowserGoForward(unsigned int pageId);

/**
@brief前进或后退steps个网页
@param[in] pageId 页面ID
@return 无
*/
WEBKIT_API int TBrowserGoBackOrForward(int pageId, int steps);

/**
@brief重新下载页面
@param[in] pageId 页面ID
@return 成功返回0；失败返回其他
*/
WEBKIT_API int TBrowserReload(unsigned int pageId);

/**
@brief设置页面叠加时最底层的页面
@param[in] pageId 页面ID
@return 成功返回0；失败返回其他
*/
WEBKIT_API int TBrowserSetMainpage(unsigned int pageId);

/**
@brief 输入一串字符串并显示到页面上的输入框内
@param[in] strSerial 串口输入一个任意字符串
@return 成功返回0;失败返回-1
*/
WEBKIT_API int TBrowserInsertText(char* strSerial);

/**
@brief 打印浏览器使用的内存信息level>=3会将结果写入文件，慎用!
@return 目前已经申请的内存,单位是Byte
*/
WEBKIT_API int TBrowserPrintMemoryStatus(int level);

/**
@brief 得到网页小图标的url，在页面没有下载完全之前调用可能返回NULL
@param[in] pageId 页面ID 
@param[out] iconUrl 返回页面的小图标地址
@param[in] length iconUrl的最大长度
@return 成功返回0;失败返回-1
*/
WEBKIT_API int TBrowserGetIconUrl(unsigned int pageId, char* iconUrl, int length);

/**
@brief 注入一段js或css，立即生效
@param[in] injectInfo 注入信息 
@return 成功返回0;失败返回-1
*/
WEBKIT_API int TBrowserInjectFile(TBrowserInjectInfo_S* injectInfo);

/**
@brief 获取当前activePage的PageId
@return 当前activePage的PageId
*/
WEBKIT_API int TBrowserGetActivePageId();

/**
@brief 获取mainPage 的PageId
@return mainPage 的PageId
*/
WEBKIT_API int TBrowserGetMainPageId();

/**
@brief 清除浏览器缓存
@return 成功返回0;失败返回-1
*/
WEBKIT_API int TBrowserRemoveCache();

/**
@brief 清除浏览器2.0缓存
@return 成功返回0;失败返回-1
*/

WEBKIT_API int TBrowser2RemoveCache();


/**
@brief 判断当前element是否支持输入法
@return 成功返回0;失败返回-1
*/
WEBKIT_API int TBrowserCurElementShouldUseInputMethod();

/**
@brief 删除应用离线缓存
@return 成功返回0;失败返回-1
*/
WEBKIT_API int TBrowserDeleteApplicationCache();

/**
@brief 设置DNT 的值
@param[in]value 设置DNT环境变量的值。取值范围:0,需要跟踪;1,不需要跟踪;其它字符串;
@return 空
*/
WEBKIT_API void TBrowserSetDNTValue(char* value);

/**
@brief 设置浏览器最大使用内存
@param[in]maxUseMemSize最大使用内存单位:字节.比如10M--10*1024*1024
@return 空
*/
WEBKIT_API void TBrowserSetMaxMem(int maxUseMemSize);

/**
@brief 设置网站可以加载本地的url的文件
@param[in] allowedUrl 本地资源的url
@return 成功返回0;失败返回-1
*/
WEBKIT_API int TBrowserSetAllowedUrl(const char* allowedUrl);

/**
@brief 获取一个对象渲染后的绝对位置
@param[in]     elementId 对象的ID
@param[out]    rect      获取到的位置
@return 成功返回0;失败返回-1
*/
WEBKIT_API int TBrowserGetNodeAbsoluteRectbyId(const char *elementId, TBrowserRect_S *rect);

/**
@brief 设置强制HTML解析的注入配置文件

@note 配置文件为ini格式,每行都是URL地址

@param[in] injectFile 注入配置文件路径

@return 成功返回0;失败返回其他
*/
WEBKIT_API int TBrowserLoadHtmlParserUrlList(const char * filePath);

/**
@brief 判断一个url是否需要以HTML解析方式解析
@param[in]     url 网页的url
@return 成功返回true;失败返回false
*/
WEBKIT_API bool TBrowserIsUseHtmlParseUrl(const char *url);

/**
@brief 设置是否允许刷新
@param[in]     enable false表示不刷新页面，true表示刷新
@return 成功返回0;失败返回-1
*/
WEBKIT_API bool TBrowserEnableUpdateScreen(bool enable);


/**
@brief 设置FixedFontFamily, (-webkit-monospace对应的等宽字体)
@param[in] fontFamily 字体Family名
*/
WEBKIT_API void TBrowserSetFixedFontFamily(const char* fontFamily);

/**
* @brief Push事件中间件扩展JS接口
* 
* @param[in] eventType:事件类型
* @param[in] jsonData:事件附加json数据,限定最大存储1024字节数据
*
* @return 成功返回0;失败返回-1
*/
WEBKIT_API int TBrowserJSExtPushEventInterface(int eventType, const char *jsonData);

/**
* @brief Get事件中间件扩展JS接口
* 
* @param[in] modifiers:事件描述符
* @param[out] buffer:获取json数据的缓冲区
* @param[in] length:缓冲区最大获取长度

* @return 成功返回0;失败返回-1
*/
WEBKIT_API int TBrowserJSGetEventInterface(int modifiers, char* buffer, int length);

/**
* @brief 回收浏览器内存和memorycache
* 
* @param[] 无

* @return 无
*/
WEBKIT_API void TBrowserGarbageCollectNow();

/**
@brief 更新注入文件

@param[in] serverUrl  服务器注入文件版本信息文件地址  即inject_file_list.xml 下载地址
@param[in] savePath  版本信息文件和注入文件的保存路径,  默认注入文件保存在相同路径
*/
WEBKIT_API void TBrowserUpdateInjectFile(const char* serverUrl, const char* savePath);

/**
@brief 获取当前注入文件地址

@return 成功返回当前注入文件地址( TBrowserUpdateInjectFile 中传过来的savePath )
*/
WEBKIT_API const char* TBrowserGetInjectFilePath();

#ifdef __cplusplus
}
#endif


#endif	//__TCL_BROWSER_H__
