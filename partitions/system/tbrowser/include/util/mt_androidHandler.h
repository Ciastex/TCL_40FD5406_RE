/**@defgroup MT_AndroidHandler [MT_AndroidHandler] Native implement of android handler

@version 0.1 2014/03/12 Created
@{
*/
#ifndef __MATRIX_ANDROID_HANDLER_H__
#define __MATRIX_ANDROID_HANDLER_H__

#ifdef __cplusplus
extern "C" {
#endif

typedef struct _mt_Looper_T   mt_Looper_T;

typedef struct {
	int what;
	int arg1;
	int arg2;
	void* obj;
}mt_androidHandler_message;

typedef void (*mt_androidHandler_handleMessage)(mt_Looper_T* looper,const mt_androidHandler_message* msg,void* userdata);

///< Same as android.os.Looper::Looper but we limited that one looper has only one hanlder
mt_Looper_T* matrix_androidHandler_createLooper(const char* name,int maxMsgs,mt_androidHandler_handleMessage handleMessage,void* ud);

///< Same as android.os.Looper::finalize 
int matrix_androidHandler_destroyLooper(mt_Looper_T* looper);


///< Same as android.os.Looper::loop
int matrix_androidHandler_loop(mt_Looper_T* looper);

///< Same as android.os.Looper::quit
int matrix_androidHandler_quit(mt_Looper_T* looper);



///< Same as android.os.Handler::sendMessage
int matrix_androidHandler_sendMessage(mt_Looper_T* looper,const mt_androidHandler_message* msg);

///< Same as android.os.Handler::sendMessageDelay
int matrix_androidHandler_sendMessageDelay(mt_Looper_T* looper,const mt_androidHandler_message* msg,long delayMillis);




///< Same as android.os.Handler::sendEmptyMessage
int matrix_androidHandler_sendEmptyMessage(mt_Looper_T* looper,int what);

///< Same as android.os.Handler::sendEmptyMessageDelayed
int matrix_androidHandler_sendEmptyMessageDelayed(mt_Looper_T* looper,int what,long delayMillis);




///< Same as android.os.Handler::removeMessages(what)
int matrix_androidHandler_removeEmptyMessages(mt_Looper_T* looper,int what);

///< Same as android.os.Handler::removeMessages(what,obj)
int matrix_androidHandler_removeMessages(mt_Looper_T* looper,int what,void* obj);



///< Same as android.os.Handler::hasMessages(what)
int matrix_androidHandler_hasEmptyMessages(mt_Looper_T* looper,int what);

///< Same as android.os.Handler::hasMessages(what,obj)
int matrix_androidHandler_hasMessages(mt_Looper_T* looper,int what,void* obj);


#ifdef __cplusplus
}
#endif
/** @} */
#endif


