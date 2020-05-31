
/**@defgroup tcl_browser
@{

@brief TCL�����ģ��

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
@brief ģ������,��TBrowserEnableLogʹ��
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
@brief �����Ҫ����Ļ�������������
*/
    
/**
@brief T-Browser�ĸ�Ŀ¼,��Ŀ¼�±��������Ϊresources��Ŀ¼,������������Դ�ļ�(��T-Browser�ṩ����)
*/
#define TBROWSER_ENV_NAME_TBROWSER_ROOT                 "TBROWSER_ROOT"

/**
@brief ��Ŀ¼�±�������Ϊfonts��Ŀ¼ ����ֿ������ļ�
*/
#define TBROWSER_ENV_FONT_ROOT                          "FONT_ROOT"

/**
@brief https֤�������·��(����֤���ļ���)
*/
#define TBROWSER_ENV_CURL_CA_BUNDLE                     "CURL_CA_BUNDLE"

/**
@brief https֤�������(����֤���ļ���)
*/
#define TBROWSER_ENV_CURL_SSLCERTTYPE                   "CURL_SSLCERTTYPE"

/**
@brief һ������PEM��ʽ֤����ļ���
*/
#define TBROWSER_ENV_CURL_SSLCERT                       "CURL_SSLCERT"

/**
@brief ����SSL˽Կ���ļ���
*/
#define TBROWSER_ENV_CURL_SSLKEY                        "CURL_SSLKEY"

/**
@brief ��CURLOPT_SSLKEY��ָ���˵�SSL˽Կ������
*/
#define TBROWSER_ENV_CURL_SSLCERTPASSWD                 "CURL_SSLCERTPASSWD"

/**
@brief �����������Դ��ʱʱ��
*/
#define TBROWSER_ENV_CURL_CONNECT_TIMEOUT               "CURL_CONNECT_TIMEOUT"

/**
@brief ��ҪT-Browser���صĲ�����·��,��Ŀ¼�±���ֻ�ܴ��ڲ����
*/
#define TBROWSER_ENV_PLUGIN_PATH                        "TBROWSER_PLUGIN_PATH"

/**
@brief ��������洢һЩ������Ϣ�Ŀ�дĿ¼
*/
#define TBROWSER_ENV_CONFIG_PATH                        "TBROWSER_CONFIG_PATH"

/**
@brief ����cookies ·��
*/
#define TBROWSER_ENV_COOKIES_PATH                       "CURL_COOKIE_JAR_PATH"

/**
@brief ����������Ƿ����ؼ�,���Ϊoff�͹رշ��ؼ�����
*/
#define TBROWSER_ENV_NAME_TBROWSER_BACK_KEY_OPTION      "TBROWSER_BACK_KEY_OPTION"

/**
@brief �������������XML �ļ�ģʽ ,���Ϊ0 �ͽ�XML �ļ�����HTML �ļ�����
*/
#define TBROWSER_ENV_XML_PARSING_MODE                   "TBROWSER_XML_PARSING_MODE"

/**
@brief ����������Ƿ�������ݳ����ӵ�enter��,���Ϊon�ͼ�������enter����onkeypress������Ĭ��Ϊoff
*/
#define TBROWSER_ENV_ANCHOR_ENTER_KEY_OPTION             "TBROWSER_ANCHOR_ENTER_KEY_OPTION"

/**
@brief ����������Ƿ񵯳�����ҳ��,���Ϊoff�Ͳ���������ҳ��
*/
#define TBROWSER_ENV_REPORT_ERROR                       "TBROWSER_REPORT_ERROR"

/**
@brief ������������뷨��ǰ״̬��0Ϊ�ر�״̬��1Ϊ����״̬
*/
#define TBROWSER_ENV_IME_STATE                          "TBROWSER_IME_STATE"


/**
@brief ������������뷨�Ƿ���mainframe����Ϣ��0Ϊ�ر�״̬��1Ϊ����״̬
*/
#define TBROWSER_ENV_IME_SEND_TO_MAINFRAME              "TBROWSER_IME_SEND_TO_MAINFRAME"

/**
@brief �������������Ҫ������ļ���ʽ������:�ر�js���͸�ֵΪ"javascript"��
          �ر�js��css���͸�ֵΪ"javascript&css"��Ϊ"" Ĭ�ϴ�����
*/
#define TBROWSER_ENV_CLOSE_CACHE_FORMAT_OPTION          "TBROWSER_CLOSE_CACHE_FORMAT_OPTION"

/**
@brief �������������Ĵ�С����λ��byte. Ĭ��Ϊ 8388608 (8M),���õ�ֵ������Ĭ��ֵ��4��Ĭ��ֵ֮��,
       ������ֵС��Ĭ��ֵȡĬ��ֵ������4��Ĭ��ֵȡ4��Ĭ��ֵ��
*/
#define TBROWSER_ENV_CACHE_CAPACTIY                     "TBROWSER_CACHE_CAPACTIY"

/**
@brief ������������߻���Ĵ�С����λ��byte. �����ø�����Ĭ��Ϊ 20M,���ø��������ֵΪ52428800(50M),
����50M��50M����
*/
#define TBROWSER_ENV_APP_CACHE_CAPACITY                 "TBROWSER_APP_CACHE_CAPACITY"

/**
@brief ������������߻��浱ǰ״̬��1Ϊ����״̬��û�����û������κ�ֵ��Ϊδ����״̬
*/
#define TBROWSER_ENV_APP_CACHE_OPTION                   "TBROWSER_APP_CACHE_OPTION"

/**
@brief ������������̻��浱ǰ״̬��0Ϊ�ر�״̬��1Ϊ����״̬
*/
#define TBROWSER_ENV_DISK_CACHE_OPTION                          "TBROWSER_DISK_CACHE_OPTION"
/**
@brief �������������Ӧdfb��keyRelease�¼���0��ʾĬ�ϴ���1��ʾ����Ӧdfb��keyRelease�¼�������keyPress��keydown,keyup�¼�
*/
#define TBROWSER_ENV_REMOVE_KEYRELEASE_ENABLE                          "TBROWSER_REMOVE_KEYRELEASE_ENABLE"

/**
@brief ����������������ģʽ��0��ʾfalse��1��ʾtrue
*/
#define TBROWSER_ENV_VIRTUAL_MOUSE_MODE                          "TBROWSER_VIRTUAL_MOUSE_MODE"

/**
@brief �����������Ҫ���ȼ��ص��ļ���
����:"mime=audio&mime=video&get_video_info"��ʾ���ȼ����ַ�������mimi=audio���߰���mime=video���߰���get_video_info����Դ
*/
#define TBROWSER_ENV_IMPORTANT_RESOURCE                          "TBROWSER_IMPORTANT_RESOURCE"

/**
@brief ����CURL�Ƿ���Ҫ����res_init������0��ʾfalse��1��ʾtrue
*/
#define TBROWSER_ENV_CURL_RES_INIT_ENABLE                        "TBROWSER_CURL_RES_INIT_ENABLE"

/**
@brief ��������SKDfbBitMap�������������������������ա�������Ĭ��Ϊ80������Ϊ0���������
*/
#define TBROWSER_ENV_MAX_SkDFBBITMAP_NUM                         "TBROWSER_MAX_SkDFBBITMAP_NUM"


/**
@brief ���ô洢�����cookies��������������ֵ�������cookies�� ������Ĭ��Ϊ1000��������Ϊ0���������
*/
#define TBROWSER_ENV_MAX_COOKIES_NUM                             "TBROWSER_MAX_COOKIES_NUM"

/**
@brief ����ͼƬ����ʧ��ʱ�Ƿ���ʾ��ɫ�߿� ������Ĭ����ʾ��ɫ�߿�����Ϊ1������ʾ��
*/
#define TBROWSER_ENV_DRAW_REPLACED_RECT                       "TBROWSER_ENV_DRAW_REPLACED_RECT"

/**
@brief ���뷨��
*/
#define TBROWSER_TVOS_EVENT_IME                         1001
#define TBROWSER_TVOS_EVENT_WINDOW_CLOSE                1002
#define TBROWSER_TVOS_EVENT_SHOW_TOOLBAR                1000

/**
@brief ȫ�����ⰴ������
*/
#define TBROWSER_TVGLOBAL_EVENT_ERROR_CODE              1000

/**
@brief �������ʼ������
*/
typedef struct {
    int m_size;             ///<���븳ֵ����ֵΪsizeof(TBrowserInitParam_S).���ṹ���С,�������ֱ��ṹ��Ĳ�ͬ�汾
    int m_resolutionW;      ///<�ֱ��ʿ�
    int m_resolutionH;      ///<�ֱ��ʸ�
    int m_threadPriority;   ///<�߳�������ȼ� 0-100:0-linuxĬ�����ȼ�
}TBrowserInitParam_S;

/**
@brief ������ص���Ϣ�¼�����
*/
typedef enum {
    EN_TBROWSER_CBEVENT_TYPE_CHANGE_URL,                ///<�л�ҳ�����Ϣ,code��const char*����,��ʾҪ�л������µ�URL��ַ
    EN_TBROWSER_CBEVENT_TYPE_LOAD_PAGE_START,           ///<��ʼ������ҳ��,code��const char*����,��ʾ���ص�URL��ַ
    EN_TBROWSER_CBEVENT_TYPE_LOAD_PAGE_END,             ///<ҳ����ؽ���,code��const char*����,��ʾ���ص�URL��ַ
    EN_TBROWSER_CBEVENT_TYPE_LOAD_FRAME_START,          ///<��ʼ������frame,code��const char*����,��ʾ���ص�URL��ַ
    EN_TBROWSER_CBEVENT_TYPE_LOAD_FRAME_END,            ///<frame���ؽ���,code��const char*����,��ʾ���ص�URL��ַ
    EN_TBROWSER_CBEVENT_TYPE_PROGRESS_CHANGED=5,        ///<���ؽ��ȱ仯,code��int����,��ʾ���ȱ�,ȡֵ0-100
    EN_TBROWSER_CBEVENT_TYPE_UNHANDLED_KEYEVENT,        ///<���������δ����İ����¼�,code��TBrowserEvent_S*����
    EN_TBROWSER_CBEVENT_TYPE_SHOULD_OVERRIDE_KEYEVENT,  ///<�Ƿ�����������¼�,��������յ�ң�����¼�����ȷ��ʹ���Ϣ����ѯ��,
                                                            ///<����0��ʾ������,ֱ�ӽ��������;����-1��ʾӦ���ڻص����Լ��������Ϣ,��Ҫ���������.
                                                            ///<code��TBrowserEvent_S*����
    EN_TBROWSER_CBEVENT_TYPE_LOAD_URL_FAILED,            ///<URL��ʧ��,code��int����,��ʾʧ�ܵĴ�����,ȡֵ
    EN_TBROWSER_CBEVENT_TYPE_WINDOW_CLOSE,                ///<��Ҫ�ر�Ӧ��>
    EN_TBROWSER_CBEVENT_TYPE_CANNOT_SCROLL,               ///<ҳ����ĳ���������Ѿ����ܹ���>code��int ����,���FocusDirection.h�ļ��еĶ��塣
    EN_TBROWSER_CBEVENT_TYPE_MEMORY_FULL,                  ///<�������ʹ���ڴ�ﵽӦ��ָ�������ʹ�ô�С���׸�Ӧ���ڴ�����Ϣ>
    EN_TBROWSER_CBEVENT_TYPE_UNHANDLED_SYSTEMEVENT        ///<���������δ����ҳ���system event����Ϣ������SDL_UserEvent 
}TBrowserCbEventType_E;


/**
@brief Dsmcc��ص�FS������
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
* @brief ������û��¼���ֵ����
*/
typedef enum {
    EN_SDL_USER_EVENT_CODE_TIMER,                   ///<�������ʱ���¼�
    EN_SDL_USER_EVENT_CODE_FUNCTION_CALL,           ///<����ָ������ָ��,��ʱ,
                                                    ///<userEvent.data1��ʾSDLUserEventFunction_fn���ͺ���ָ��
                                                    ///<userEvent.data2��userEvent.data3��ʾSDLUserEventFunction_fn��������ڲ���
    EN_SDL_USER_EVENT_CODE_SEND_VIRTUAL_KEYCODE,    ///<�������ⰴ���¼�,��ʱ,
                                                    ///<userEvent.data1��ʾ���ⰴ���ļ�ֵ
                                                    ///<userEvent.data2��ʾ���ⰴ���ĸ�������
    EN_SDL_USER_EVENT_CODE_SEND_GLOBAL_KEYCODE,     ///<����UIȫ�ְ�������ʱ��
                                                    ///<userEvent.data1��ʾ���ⰴ���ļ�ֵ
                                                    ///<userEvent.data2��ʾ���ⰴ���ĸ�������
    EN_SDL_USER_EVENT_CODE_CHECK_ALIVE,             ///<У��������߳��Ƿ�������ִ��
    EN_SDL_USER_EVENT_CODE_REPAINT_SCREEN,          ///�ػ���Ļ�¼�
    EN_SDL_USER_EVENT_CODE_KEYBOARD_TEXT            ///�������뷨���������¼�
}SDLUserEventCode_E;

typedef int (*SDLUserEventFunction_fn)(void* param1, void* param2);

/**
* @brief ��ȡ DSMCC ��غ����ṹ�壬�ýṹ��������DSMCC��ز����ĺ���ָ��
* @return ���� һ��ȫ�ֵĽṹ�����ָ�룬
*/
WEBKIT_API TBrowserDsmccProtocol_S* TBrowserGetDsmccProtocol();

/**
* @brief ע�� DSMCC protocol���Խṹ����г�ʼ����ֵ
* @return ���� 0��
*/
WEBKIT_API int TBrowserRegisterDsmccProtocol(TBrowserDsmccProtocol_S* protocol);

/**
@brief ������Ļص��������Ͷ���

@param[in] event �������¼�����ö��
@param[in] code �������¼���������,����event���Ͳ�ͬ�в�ͬ�Ķ���,��ϸ��TBrowserCbEventType_E��ÿ�����͵Ķ���˵��
@param[in] userData �û�����,��ֵΪ����TBrowserAddCallbackʱ������û�����

@return ����ֵ����event���Ͳ�ͬ�в�ͬ�Ķ���,��ϸ��TBrowserCbEventType_E��ÿ�����͵Ķ���˵��
*/
typedef int (*TBrowserCallback_fn)(TBrowserCbEventType_E event, void* code, void* userData);


/**
@brief ��ʼ�������ģ��

@param[in] initParam ��ʼ�����ò��� 
@return �ɹ�����0;ʧ�ܷ�������
*/
WEBKIT_API int TBrowserInit(TBrowserInitParam_S *initParam);

/**
@brief ���������ģ��

@return �ɹ�����0;ʧ�ܷ�������
*/
WEBKIT_API int TBrowserDestroy(void);

/**
@brief ���������ص�

@param[in] cb �ص�����
@param[in] userData �û��Զ�������
@return �ɹ�����0;ʧ�ܷ�������
*/
WEBKIT_API int TBrowserAddCallback(TBrowserCallback_fn cb, void* userData);

/**
@brief ɾ��������ص�

@param[in] cb �ص�����
@return �ɹ�����0;ʧ�ܷ�������
*/
WEBKIT_API int TBrowserRemoveCallback(TBrowserCallback_fn cb);

/**
@brief ���������ص�

@param[in] cb �ص�����
@param[in] userData �û��Զ�������
@return �ɹ�����0;ʧ�ܷ�������
*/
WEBKIT_API int TBrowserAddCallbackEx(TOS_TBrowser_Event_Callback cb, void* userData);

/**
@brief ɾ��������ص�

@param[in] cb �ص�����
@return �ɹ�����0;ʧ�ܷ�������
*/
WEBKIT_API int TBrowserRemoveCallbackEx(TOS_TBrowser_Event_Callback cb);

/**
@brief ��ָ��ҳ��

@param[in] url ҳ���ַ
@return �ɹ�����0;ʧ�ܷ�������
*/
WEBKIT_API int TBrowserLoadUrl(const char * url);

/**
@brief ��ҳ�淢��TVOS�¼�

@param[in] event �¼�codeֵ,data:�¼�������
@return �ɹ�����0;ʧ�ܷ�������
*/
WEBKIT_API int TBrowserPushTVOSEvent(int event, int data);

/**
@brief ��ҳ�淢��TVGlobal�¼�

@param[in] event �¼�codeֵ,data:�¼�������
@return �ɹ�����0;ʧ�ܷ�������
*/
WEBKIT_API int TBrowserPushTVGlobalEvent(int event, int data);

/**
@brief ��ҳ�淢��keyboard Text�¼�

@param[in] event �¼�����
@return �ɹ�����0;ʧ�ܷ�������
*/
WEBKIT_API int TBrowserPushkeyBoardTextEvent(SDL_Event* event);

/**
@brief ��ҳ�淢���¼�

@param[in] event �¼�����
@return �ɹ�����0;ʧ�ܷ�������
*/
WEBKIT_API int TBrowserPushEvent(SDL_Event *event);

/**
@brief �����չJavaScript�ӿ�

@param[in] name JS��������. ��ָ��ָ��ĵ�ַ��Ҫһֱ��Ч
@param[in] npClass JS�����Ӧ��NPClass����ָ��. ��ָ��ָ��ĵ�ַ��Ҫһֱ��Ч
@return �ɹ�����0;ʧ�ܷ�������
*/
WEBKIT_API int TBrowserAddJavaScriptInterface(const char * name, NPClass *npClass);

/**
@brief ��ȡNPNetscapeFuncs,��js��չʵ��ʹ��

ע��,��һ�����functions�ṹ���е�ÿһ����������ֵ,����ʹ��functions�еĺ�������֮ǰ,һ��Ҫ���пձ���

@param[out] functions �������
@return �ɹ�����0;ʧ�ܷ�������
*/
WEBKIT_API int TBrowserGetNPNetscapeFuncs(NPNetscapeFuncs *functions);

/**
@brief ִ��javascript�ű�.��js��չʵ�ֺͲ��ʹ��

@note ע��,�˺�������ֻ����������߳��е���!!

@param[in] isPlugin �Ƿ��ǲ������
@param[in] npp ���봫���ڱ�JS����allocateʱ��npp
@param[in] script Ҫִ�еĽű�
@param[out] �ű����ؽ��
@return �ɹ�����0;ʧ�ܷ�������
*/
WEBKIT_API int TBrowserEvaluateScript(bool isPlugin, NPP npp, char* script, NPVariant* result);

/**
@brief ��ָ��ģ��Ĵ�ӡ

�˽ӿ���Ҫ�ڵ���TBrowserInit֮ǰ����,�����������ʼ�����̵Ĵ�ӡ�ʹ�ӡ������
����release����û�����õ�,release����û�д�ӡ��

@param[in] moduleName ģ������,ȡֵ�����ļ��ĺ궨��
@return �ɹ�����0;ʧ�ܷ�������
*/
WEBKIT_API int TBrowserEnableLog(const char * moduleName);

/**
@brief �����Զ����userAgent

@param[in] userAgent �µ�userAgent

*/
WEBKIT_API void TBrowserSetUserAgent(const char* userAgent);

/**
@brief ��ȡuserAgent

@return �ɹ�����UserAgent��ֵ;ʧ�ܷ���NULL
*/
WEBKIT_API const char* TBrowserGetUserAgent();

/**
@brief �����µļ�ֵӳ���ļ�

@note ӳ���ļ������ݸ�ʽΪÿ��������old_key=new_key

@param[in] fileName ��ֵӳ���ļ�·��

@return �ɹ�����0;ʧ�ܷ�������
*/
WEBKIT_API int TBrowserLoadKeymapFile(const char * fileName);

/**
@brief ����js�Լ�css��ע�������ļ�

@note �����ļ��ĸ�ʽΪxml��ʽ����������Ҫ�ο�����ʾ��:
https://10.120.92.6/svn/TMER/Trunk/TMER/external/tcl_browser/external/webkitsdl/Tools/SDLWebLauncher/config/inject/inject_file_config.xml

@param[in] injectFile ע�������ļ�·��

*/
WEBKIT_API int TBrowserLoadInjectFile(const char * injectFile);

/**
@brief ����ҳ��Ŀɼ���

@param[in] visible �ɼ��� true��ʾҳ��ɼ� false��ʾҳ�治�ɼ�

@return �ɹ�����0;ʧ�ܷ�������
*/
WEBKIT_API int TBrowserSetVisible(bool visible);

/**
@brief ����ҳ�汳���Ƿ�͸��

���û�����ã�Ĭ�ϱ�����͸����

@param[in] transparent �Ƿ�͸�� true��ʾ͸����false��ʾ��͸��

@return �ɹ�����0;ʧ�ܷ�������
*/
WEBKIT_API int TBrowserSetBGColorTransparent(bool transparent);


/**
@brief ���������cookie�Ƿ����
����cookie������֮��ҳ�治���������û��ȡcookie��

��������ô˽ӿ����ã�Ĭ���ǿ��õ�
@param[in] enable true��ʾ���ã�false��ʾ������
@return �ɹ�����0;ʧ�ܷ�������
*/
WEBKIT_API int TBrowserEnableCookie(bool enable);

/**
@brief ��ȡ��ǰҳ���URL

*/
WEBKIT_API const char* TBrowserGetCurrentURL();

/**
@brief �����ʷ�����¼

@note �ᱣ����ǰ��URL

@return  �ɹ�����0;ʧ�ܷ�������
*/
WEBKIT_API int TBrowserClearHistory();

/**
@brief ��ȡҳ���ǰ���б�URL�ĸ���
@return ��ȡ��ǰҳ��֮�������ת��ҳ�����
*/
WEBKIT_API int TBrowserGetForwardCount(unsigned int pageId);

/**
@brief ��ȡҳ��ĺ����б�URL�ĸ���

@return ��ȡ��ǰҳ��֮ǰ������ת��ҳ�����
*/
WEBKIT_API int TBrowserGetBackCount(int pageId);

/**
@brief ��ȡҳ��ָ��λ�õ�URL
@param[in] pageId ָ����ҳ��ID
@param[in] index ָ��ҳ��λ��
@return ��ȡָ��λ�õ�URL
*/
WEBKIT_API const char* TBrowserGetBackUrl(int pageId, int index);
/**
@brief ��ָ��ҳ��
@param[in] pageId ָ����ҳ��ID
@param[in] url ҳ���ַ
@return �ɹ�����0;ʧ�ܷ�������
*/
WEBKIT_API int TBrowserLoaderPageUrl(unsigned pageId,const char* url);
/**
@brief ����ָ��ҳ��
@param[in] pageId ָ�����ٵ�ҳ��ID
@return �ɹ�����0;ʧ�ܷ�������
*/
WEBKIT_API int TBrowserDestroyPage(unsigned pageId);
/**
@brief ��ȡ��ǰҳ��ĸ���
@return -1��ʾ�������ó�������ֵΪ����ҳ�����
*/
WEBKIT_API int TBrowserGetPageCount();
/**
@brief ����һ��ҳ��
@param[in] width ����ҳ��Ŀ�
@param[in] height����ҳ��ĸ�
@return �ɹ�����pageId;ʧ�ܷ���-1
*/
WEBKIT_API int TBrowserCreatePage(unsigned int width,unsigned int height);
/**
@briefָ����ǰ���page����pageЧӦ�¼�
@param[in] pageId ���ҳ��ID
@return �ɹ�����0;ʧ�ܷ�������
*/
WEBKIT_API int TBrowserSetActivePage(unsigned int pageId);

/**
@brief����ҳ���Ƿ���Ҫ��ʾ�����
@param[in] needSetFocusRing = 0Ϊ����ʾ��needSetFocusRing =1 ��ʾ
@return �ɹ�����0;ʧ�ܷ�������
*/
WEBKIT_API int TBrowserSetDrawFocusRing(bool needSetFocusRing);

/**
@brief��ȡ��ǰҳ���url
@param[in] pageId ҳ��ID
@param[out] url ����ҳ��url
@param[in] length url�ĳ���
@return �ɹ�����0;ʧ�ܷ�������
*/
WEBKIT_API int TBrowserGetUrl(unsigned int pageId, char* url, int length);


/**
@brief��ȡ��ǰҳ���title
@param[in] pageId ҳ��ID
param[out] title ����ҳ��title
@param[in] length title�ĳ���
@return �ɹ�����0;ʧ�ܷ�������
*/
WEBKIT_API int TBrowserGetTitle(unsigned int pageId, char* title, int length);

/**
@brief ע��������ʱ�����Դ��Э������
@param[in] scheme Э������� ��http��https��
@return �ɹ�����0;ʧ�ܷ�������
*/
WEBKIT_API int TBrowserRegisterURLSchemeAsLocal(const char* scheme);




/**
@brief����һ����ҳ
@param[in] pageId ҳ��ID
@return ��
*/
WEBKIT_API int TBrowserGoBack(unsigned int pageId);

/**
@briefǰ��һ����ҳ
@param[in] pageId ҳ��ID
@return ��
*/
WEBKIT_API int TBrowserGoForward(unsigned int pageId);

/**
@briefǰ�������steps����ҳ
@param[in] pageId ҳ��ID
@return ��
*/
WEBKIT_API int TBrowserGoBackOrForward(int pageId, int steps);

/**
@brief��������ҳ��
@param[in] pageId ҳ��ID
@return �ɹ�����0��ʧ�ܷ�������
*/
WEBKIT_API int TBrowserReload(unsigned int pageId);

/**
@brief����ҳ�����ʱ��ײ��ҳ��
@param[in] pageId ҳ��ID
@return �ɹ�����0��ʧ�ܷ�������
*/
WEBKIT_API int TBrowserSetMainpage(unsigned int pageId);

/**
@brief ����һ���ַ�������ʾ��ҳ���ϵ��������
@param[in] strSerial ��������һ�������ַ���
@return �ɹ�����0;ʧ�ܷ���-1
*/
WEBKIT_API int TBrowserInsertText(char* strSerial);

/**
@brief ��ӡ�����ʹ�õ��ڴ���Ϣlevel>=3�Ὣ���д���ļ�������!
@return Ŀǰ�Ѿ�������ڴ�,��λ��Byte
*/
WEBKIT_API int TBrowserPrintMemoryStatus(int level);

/**
@brief �õ���ҳСͼ���url����ҳ��û��������ȫ֮ǰ���ÿ��ܷ���NULL
@param[in] pageId ҳ��ID 
@param[out] iconUrl ����ҳ���Сͼ���ַ
@param[in] length iconUrl����󳤶�
@return �ɹ�����0;ʧ�ܷ���-1
*/
WEBKIT_API int TBrowserGetIconUrl(unsigned int pageId, char* iconUrl, int length);

/**
@brief ע��һ��js��css��������Ч
@param[in] injectInfo ע����Ϣ 
@return �ɹ�����0;ʧ�ܷ���-1
*/
WEBKIT_API int TBrowserInjectFile(TBrowserInjectInfo_S* injectInfo);

/**
@brief ��ȡ��ǰactivePage��PageId
@return ��ǰactivePage��PageId
*/
WEBKIT_API int TBrowserGetActivePageId();

/**
@brief ��ȡmainPage ��PageId
@return mainPage ��PageId
*/
WEBKIT_API int TBrowserGetMainPageId();

/**
@brief ������������
@return �ɹ�����0;ʧ�ܷ���-1
*/
WEBKIT_API int TBrowserRemoveCache();

/**
@brief ��������2.0����
@return �ɹ�����0;ʧ�ܷ���-1
*/

WEBKIT_API int TBrowser2RemoveCache();


/**
@brief �жϵ�ǰelement�Ƿ�֧�����뷨
@return �ɹ�����0;ʧ�ܷ���-1
*/
WEBKIT_API int TBrowserCurElementShouldUseInputMethod();

/**
@brief ɾ��Ӧ�����߻���
@return �ɹ�����0;ʧ�ܷ���-1
*/
WEBKIT_API int TBrowserDeleteApplicationCache();

/**
@brief ����DNT ��ֵ
@param[in]value ����DNT����������ֵ��ȡֵ��Χ:0,��Ҫ����;1,����Ҫ����;�����ַ���;
@return ��
*/
WEBKIT_API void TBrowserSetDNTValue(char* value);

/**
@brief ������������ʹ���ڴ�
@param[in]maxUseMemSize���ʹ���ڴ浥λ:�ֽ�.����10M--10*1024*1024
@return ��
*/
WEBKIT_API void TBrowserSetMaxMem(int maxUseMemSize);

/**
@brief ������վ���Լ��ر��ص�url���ļ�
@param[in] allowedUrl ������Դ��url
@return �ɹ�����0;ʧ�ܷ���-1
*/
WEBKIT_API int TBrowserSetAllowedUrl(const char* allowedUrl);

/**
@brief ��ȡһ��������Ⱦ��ľ���λ��
@param[in]     elementId �����ID
@param[out]    rect      ��ȡ����λ��
@return �ɹ�����0;ʧ�ܷ���-1
*/
WEBKIT_API int TBrowserGetNodeAbsoluteRectbyId(const char *elementId, TBrowserRect_S *rect);

/**
@brief ����ǿ��HTML������ע�������ļ�

@note �����ļ�Ϊini��ʽ,ÿ�ж���URL��ַ

@param[in] injectFile ע�������ļ�·��

@return �ɹ�����0;ʧ�ܷ�������
*/
WEBKIT_API int TBrowserLoadHtmlParserUrlList(const char * filePath);

/**
@brief �ж�һ��url�Ƿ���Ҫ��HTML������ʽ����
@param[in]     url ��ҳ��url
@return �ɹ�����true;ʧ�ܷ���false
*/
WEBKIT_API bool TBrowserIsUseHtmlParseUrl(const char *url);

/**
@brief �����Ƿ�����ˢ��
@param[in]     enable false��ʾ��ˢ��ҳ�棬true��ʾˢ��
@return �ɹ�����0;ʧ�ܷ���-1
*/
WEBKIT_API bool TBrowserEnableUpdateScreen(bool enable);


/**
@brief ����FixedFontFamily, (-webkit-monospace��Ӧ�ĵȿ�����)
@param[in] fontFamily ����Family��
*/
WEBKIT_API void TBrowserSetFixedFontFamily(const char* fontFamily);

/**
* @brief Push�¼��м����չJS�ӿ�
* 
* @param[in] eventType:�¼�����
* @param[in] jsonData:�¼�����json����,�޶����洢1024�ֽ�����
*
* @return �ɹ�����0;ʧ�ܷ���-1
*/
WEBKIT_API int TBrowserJSExtPushEventInterface(int eventType, const char *jsonData);

/**
* @brief Get�¼��м����չJS�ӿ�
* 
* @param[in] modifiers:�¼�������
* @param[out] buffer:��ȡjson���ݵĻ�����
* @param[in] length:����������ȡ����

* @return �ɹ�����0;ʧ�ܷ���-1
*/
WEBKIT_API int TBrowserJSGetEventInterface(int modifiers, char* buffer, int length);

/**
* @brief ����������ڴ��memorycache
* 
* @param[] ��

* @return ��
*/
WEBKIT_API void TBrowserGarbageCollectNow();

/**
@brief ����ע���ļ�

@param[in] serverUrl  ������ע���ļ��汾��Ϣ�ļ���ַ  ��inject_file_list.xml ���ص�ַ
@param[in] savePath  �汾��Ϣ�ļ���ע���ļ��ı���·��,  Ĭ��ע���ļ���������ͬ·��
*/
WEBKIT_API void TBrowserUpdateInjectFile(const char* serverUrl, const char* savePath);

/**
@brief ��ȡ��ǰע���ļ���ַ

@return �ɹ����ص�ǰע���ļ���ַ( TBrowserUpdateInjectFile �д�������savePath )
*/
WEBKIT_API const char* TBrowserGetInjectFilePath();

#ifdef __cplusplus
}
#endif


#endif	//__TCL_BROWSER_H__
