/**@defgroup 事件管理模块
@{

@brief 用于事件的发送和接收处理

@author yfg@tcl.com

@version 1.0.0 2014/12/25 初稿
*/

#ifndef __FPI_EVENT_MANAGER_H__    
#define __FPI_EVENT_MANAGER_H__    

#include <pthread.h>
#include <sita_types.h>

#ifdef __cplusplus
extern "C" {
#endif




#define EVT_TYPE_ANY    (uint32_t)0xffffffff	///< 任意类型事件
#define EVT_TYPE_INVALID (uint32_t)0x00		///< 无效事件类型
#define EVT_CODE_ANY    (uint32_t)0xffffffff	///< 任意code的事件
#define EVT_CODE_INVALID    (uint32_t)0x00	///< 无效事件的code
#define EVT_THREAD_DEMON  (pthread_t)0xfffffffe ///< demon线程
#define EVT_THREAD_ANY  (pthread_t)0xffffffff 	///< 所有线程
#define EVT_THREAD_CURRENT  (pthread_t)0x00		///< 当前线程
#define EVT_CALLBACK_ANY (uint32_t)0xffffffff		///< 全部callback id
#define EVT_CALLBACK_INVALID (uint32_t)0x00		///< 无效的callback id


/**
@brief 定义错误代码
*/
enum _EvtErrorCode
{
  EVT_SUCCESS = 0,
  ERR_EVT_OUT_OF_MEMORY = -2,
  ERR_EVT_INVALID_PARAM = -3,
  ERR_EVT_ILLEGAL_ACCESS = -4,
  ERR_EVT_NOT_FOUND = -5,
  ERR_EVT_HAS_GRABBED = -6,
  ERR_EVT_NO_EVENT = -7,
  ERR_EVT_TIMER_FAILED = -8,
  ERR_EVT_NOT_FREE_DATA = -9
};

typedef enum _EvtTimerRepitionType
{
  TIMER_REPITION_TYPE_0 = 0,///< 一个0多个1:time0+time1+time1+time1+time1+time1+...+time1
  TIMER_REPITION_TYPE_1 = 1,///< 0和1交替进行:time0+time1+time0+time1+time0+time1+...+time0+time1
  TIMER_REPITION_TYPE_2 = 2	///< 多个0一个1:time0+time0+time0+...+time0+time0+...+time0+time1
}EvtTimerRepitionType;

/*---------------------------------------------------------------------------+
 |------------------------    Structure Definition    -----------------------|
 +-------------------------------------------- ------------------------------*/


/**
@brief 定义事件数据结构
*/
typedef struct _EvtEventEntry {
  uint32_t type; ///<  event type 
  uint32_t code; ///<  event code 
  void  *data0; ///< <additional data of a Event 
  void  *data1; ///< <additional data of a Event 
  void  *data2; ///< <additional data of a Event 
}EvtEventEntry;

/**
@brief 定义事件中的数据释放函数
*/
typedef void (*EvtFreeFunc)(
  EvtEventEntry *event	///< 待释放数据的事件
);

/**
@brief 定义事件处理回调函数
*/
typedef int32_t (*EvtCallbackFunc)(
  const EvtEventEntry *event, 	///< 带处理事件
  void  *client_data			///< 客户注册事件时附带的数据
);



/**
@brief 注册事件监听

@param[in] 	thread_id 注册事件的线程id，EVT_THREAD_CURRENT为当前线程、EVT_THREAD_DEMON为向demon线程中注册
@param[in] 	type 	事件类型
@param[in] 	code	事件代码
@param[in] 	func	事件处理函数
@param[in] 	client_data	client私有数据
			
@param[out] callback_id	标示此次注册的callbackid，此id包含了注册时对应的参数内容，方便Unregister用到 

@return 成功返回EVT_SUCCESS，失败返回错误代码
*/
int32_t EvtRegisterCallback (
  pthread_t thread_id,
  uint32_t type,
  uint32_t code,
  EvtCallbackFunc func,
  void  *client_data,
  uint32_t *callback_id
);

/**
@brief 取消事件监听

@param[in] 	thread_id callbackid所在的线程的线程id
@param[in] 	callback_id	标示此次取消监听的callbackid
			
@return 成功返回EVT_SUCCESS，失败返回错误代码
*/
int32_t EvtUnregisterCallback (pthread_t thread_id, uint32_t callback_id);

/**
@brief 修改事件处理的回调函数

@param[in] 	callback_id 待修改回调函数的callback_id
@param[in] 	func		新的事件处理函数

@return 成功返回EVT_SUCCESS，失败返回错误代码
*/
int32_t EvtSetCallback (uint32_t callback_id, EvtCallbackFunc func);

/**
@brief 修改事件处理的client数据

@param[in] 	callback_id 	待修改client数据的callback_id
@param[in] 	client_data		新的client数据

@return 成功返回EVT_SUCCESS，失败返回错误代码
*/
int32_t EvtSetCallbackData (uint32_t callback_id, void  *client_data);

/**
@brief 从本线程的事件队列中get符合某个范围的一个事件

@param[in] 	type 事件类型
@param[in] 	code_min 事件code范围的下限
@param[in] 	code_max 事件code范围的上限
@param[in] 	blocking 是否阻塞直到收到一个事件才返回，否则不论有没有事件都会立即返回
			组合详见下:
	type									code_min			code_max			期望
	EVT_TYPE_ANY							任意				任意				获取发送到本线程的任意一个事件
	>EVT_TYPE_INVALID &&< EVT_TYPE_ANY		EVT_CODE_ANY		0x10000				获取对应type的code为1-0x10000之内的事件
	>EVT_TYPE_INVALID &&< EVT_TYPE_ANY		0x10000				EVT_CODE_ANY		获取对应type的code为0x10000-0xFFFFFFFE之内的事件
	>EVT_TYPE_INVALID &&< EVT_TYPE_ANY	 	0x5000				0x6000				获取对应type的code为0x5000-0x6000之内的事件
	EVT_TYPE_INVALID	 					EVT_CODE_INVALID	EVT_CODE_INVALID	任意一个无效值则返回错误

@param[out] event 获取到的事件 

@return 成功返回EVT_SUCCESS，失败返回错误代码
*/
int32_t EvtGetEvent (uint32_t type, uint32_t code_min,uint32_t code_max, EvtEventEntry *event,
			    bool blocking);

/**
@brief 处理事件，调用注册事件监听时的回调函数，并调通释放事件数据的释放函数

@param[in] event 通过EvtGetEvent()获得的事件

@return 成功返回EVT_SUCCESS，失败返回错误代码
*/
int32_t EvtProcessEvent (EvtEventEntry *event);

/**
@brief 广播一个事件

@param[in] 	event 待广播的事件
@param[in] 	freeFunc 事件的数据释放函数,可以为NULL

@return 成功返回EVT_SUCCESS，失败返回错误代码
*/
int32_t EvtBroadcastEvent (EvtEventEntry *event, EvtFreeFunc freeFunc);

/**
@brief 往特定线程中发送一个事件

@param[in] 	thread_id 接收事件的线程
@param[in] 	event 待广播的事件
@param[in] 	freeFunc 事件的数据释放函数,可以为NULL

@return 成功返回EVT_SUCCESS，失败返回错误代码
*/
int32_t EvtSendEvent (pthread_t thread_id, EvtEventEntry *event,EvtFreeFunc freeFunc);

/**
@brief 移除某个范围内的事件

@param[in] 	thread_id 待移除事件的线程id
@param[in] 	type 事件类型
@param[in] 	code_min 事件code范围的下限
@param[in] 	code_max 事件code范围的上限

@return 成功返回EVT_SUCCESS，失败返回错误代码
*/
int32_t EvtRemoveEvent (pthread_t thread_id, uint32_t type, uint32_t code_min, uint32_t code_max);

/**
@brief 创建timer,timer的运行可以视为一个高地电平交替的方波，time1和time0分别为高低电平持续的时间

@param[in] 	time0 time0
@param[in] 	time1 time1
@param[in] 	repition time0和time1交替循环的次数，time0和time1交替一次为一个repition,当计数达到repition时timer自动停止
@param[in] 	repeatType time0和time1交替循环的方式
				
@param[out] timer_id 输出timerid方便识别timer事件和delete timer

@return 成功返回EVT_SUCCESS，失败返回错误代码
*/
int32_t EvtCreateTimer(uint32_t time0, uint32_t time1, int32_t repition, EvtTimerRepitionType repeatType,uint32_t *timer_id);

/**
@brief 暂停/停止timer

@param[in] 	timer_id 待暂停/停止运行的timer id
@param[in] 	stop	为true则清空已经运行的计数，下次开始时重新计数
					为false时不清空已经运行的计数，下次开始时继续计数

@return 成功返回EVT_SUCCESS，失败返回错误代码
*/
int32_t EvtPauseTimer(uint32_t timer_id,bool stop);

/**
@brief 恢复timer

@param[in] 	timer_id 待恢复运行的的timer id

@return 成功返回EVT_SUCCESS，失败返回错误代码
*/
int32_t EvtResumeTimer(uint32_t timer_id);

/**
@brief 修改timer的参数并重新从头开始运行,@see EvtCreateTimer

@param[in] 	timer_id 待修改的timer的timer id
@param[in] 	time0 time0
@param[in] 	time1 time1
@param[in] 	repition time0和time1交替循环的次数，time0和time1交替一次为一个repition,当计数达到repition时timer自动停止
@param[in] 	repeatType time0和time1交替循环的方式
				
@return 成功返回EVT_SUCCESS，失败返回错误代码
*/
int32_t EvtSetTimer(uint32_t timer_id,uint32_t time0, uint32_t time1, int32_t repition, EvtTimerRepitionType repeatType);

/**
@brief 删除timer

@param[in] 	timer_id 待删除timer的timer id

@return 成功返回EVT_SUCCESS，失败返回错误代码
*/
int32_t EvtRemoveTimer(uint32_t timer_id);

/**
@brief dump出线程所有的线程

@return 无
*/
void EvtDumpThreads(void);

/**
@brief dump出线程事件缓冲中的所有事件

@param[in] thread_id 线程id

@return 无
*/
void EvtDumpEvents(pthread_t thread_id);

#ifdef __cplusplus
}
#endif

/** @} */

#endif 

