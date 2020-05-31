/**@defgroup �¼�����ģ��
@{

@brief �����¼��ķ��ͺͽ��մ���

@author yfg@tcl.com

@version 1.0.0 2014/12/25 ����
*/

#ifndef __FPI_EVENT_MANAGER_H__    
#define __FPI_EVENT_MANAGER_H__    

#include <pthread.h>
#include <sita_types.h>

#ifdef __cplusplus
extern "C" {
#endif




#define EVT_TYPE_ANY    (uint32_t)0xffffffff	///< ���������¼�
#define EVT_TYPE_INVALID (uint32_t)0x00		///< ��Ч�¼�����
#define EVT_CODE_ANY    (uint32_t)0xffffffff	///< ����code���¼�
#define EVT_CODE_INVALID    (uint32_t)0x00	///< ��Ч�¼���code
#define EVT_THREAD_DEMON  (pthread_t)0xfffffffe ///< demon�߳�
#define EVT_THREAD_ANY  (pthread_t)0xffffffff 	///< �����߳�
#define EVT_THREAD_CURRENT  (pthread_t)0x00		///< ��ǰ�߳�
#define EVT_CALLBACK_ANY (uint32_t)0xffffffff		///< ȫ��callback id
#define EVT_CALLBACK_INVALID (uint32_t)0x00		///< ��Ч��callback id


/**
@brief ����������
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
  TIMER_REPITION_TYPE_0 = 0,///< һ��0���1:time0+time1+time1+time1+time1+time1+...+time1
  TIMER_REPITION_TYPE_1 = 1,///< 0��1�������:time0+time1+time0+time1+time0+time1+...+time0+time1
  TIMER_REPITION_TYPE_2 = 2	///< ���0һ��1:time0+time0+time0+...+time0+time0+...+time0+time1
}EvtTimerRepitionType;

/*---------------------------------------------------------------------------+
 |------------------------    Structure Definition    -----------------------|
 +-------------------------------------------- ------------------------------*/


/**
@brief �����¼����ݽṹ
*/
typedef struct _EvtEventEntry {
  uint32_t type; ///<  event type 
  uint32_t code; ///<  event code 
  void  *data0; ///< <additional data of a Event 
  void  *data1; ///< <additional data of a Event 
  void  *data2; ///< <additional data of a Event 
}EvtEventEntry;

/**
@brief �����¼��е������ͷź���
*/
typedef void (*EvtFreeFunc)(
  EvtEventEntry *event	///< ���ͷ����ݵ��¼�
);

/**
@brief �����¼�����ص�����
*/
typedef int32_t (*EvtCallbackFunc)(
  const EvtEventEntry *event, 	///< �������¼�
  void  *client_data			///< �ͻ�ע���¼�ʱ����������
);



/**
@brief ע���¼�����

@param[in] 	thread_id ע���¼����߳�id��EVT_THREAD_CURRENTΪ��ǰ�̡߳�EVT_THREAD_DEMONΪ��demon�߳���ע��
@param[in] 	type 	�¼�����
@param[in] 	code	�¼�����
@param[in] 	func	�¼�������
@param[in] 	client_data	client˽������
			
@param[out] callback_id	��ʾ�˴�ע���callbackid����id������ע��ʱ��Ӧ�Ĳ������ݣ�����Unregister�õ� 

@return �ɹ�����EVT_SUCCESS��ʧ�ܷ��ش������
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
@brief ȡ���¼�����

@param[in] 	thread_id callbackid���ڵ��̵߳��߳�id
@param[in] 	callback_id	��ʾ�˴�ȡ��������callbackid
			
@return �ɹ�����EVT_SUCCESS��ʧ�ܷ��ش������
*/
int32_t EvtUnregisterCallback (pthread_t thread_id, uint32_t callback_id);

/**
@brief �޸��¼�����Ļص�����

@param[in] 	callback_id ���޸Ļص�������callback_id
@param[in] 	func		�µ��¼�������

@return �ɹ�����EVT_SUCCESS��ʧ�ܷ��ش������
*/
int32_t EvtSetCallback (uint32_t callback_id, EvtCallbackFunc func);

/**
@brief �޸��¼������client����

@param[in] 	callback_id 	���޸�client���ݵ�callback_id
@param[in] 	client_data		�µ�client����

@return �ɹ�����EVT_SUCCESS��ʧ�ܷ��ش������
*/
int32_t EvtSetCallbackData (uint32_t callback_id, void  *client_data);

/**
@brief �ӱ��̵߳��¼�������get����ĳ����Χ��һ���¼�

@param[in] 	type �¼�����
@param[in] 	code_min �¼�code��Χ������
@param[in] 	code_max �¼�code��Χ������
@param[in] 	blocking �Ƿ�����ֱ���յ�һ���¼��ŷ��أ���������û���¼�������������
			��������:
	type									code_min			code_max			����
	EVT_TYPE_ANY							����				����				��ȡ���͵����̵߳�����һ���¼�
	>EVT_TYPE_INVALID &&< EVT_TYPE_ANY		EVT_CODE_ANY		0x10000				��ȡ��Ӧtype��codeΪ1-0x10000֮�ڵ��¼�
	>EVT_TYPE_INVALID &&< EVT_TYPE_ANY		0x10000				EVT_CODE_ANY		��ȡ��Ӧtype��codeΪ0x10000-0xFFFFFFFE֮�ڵ��¼�
	>EVT_TYPE_INVALID &&< EVT_TYPE_ANY	 	0x5000				0x6000				��ȡ��Ӧtype��codeΪ0x5000-0x6000֮�ڵ��¼�
	EVT_TYPE_INVALID	 					EVT_CODE_INVALID	EVT_CODE_INVALID	����һ����Чֵ�򷵻ش���

@param[out] event ��ȡ�����¼� 

@return �ɹ�����EVT_SUCCESS��ʧ�ܷ��ش������
*/
int32_t EvtGetEvent (uint32_t type, uint32_t code_min,uint32_t code_max, EvtEventEntry *event,
			    bool blocking);

/**
@brief �����¼�������ע���¼�����ʱ�Ļص�����������ͨ�ͷ��¼����ݵ��ͷź���

@param[in] event ͨ��EvtGetEvent()��õ��¼�

@return �ɹ�����EVT_SUCCESS��ʧ�ܷ��ش������
*/
int32_t EvtProcessEvent (EvtEventEntry *event);

/**
@brief �㲥һ���¼�

@param[in] 	event ���㲥���¼�
@param[in] 	freeFunc �¼��������ͷź���,����ΪNULL

@return �ɹ�����EVT_SUCCESS��ʧ�ܷ��ش������
*/
int32_t EvtBroadcastEvent (EvtEventEntry *event, EvtFreeFunc freeFunc);

/**
@brief ���ض��߳��з���һ���¼�

@param[in] 	thread_id �����¼����߳�
@param[in] 	event ���㲥���¼�
@param[in] 	freeFunc �¼��������ͷź���,����ΪNULL

@return �ɹ�����EVT_SUCCESS��ʧ�ܷ��ش������
*/
int32_t EvtSendEvent (pthread_t thread_id, EvtEventEntry *event,EvtFreeFunc freeFunc);

/**
@brief �Ƴ�ĳ����Χ�ڵ��¼�

@param[in] 	thread_id ���Ƴ��¼����߳�id
@param[in] 	type �¼�����
@param[in] 	code_min �¼�code��Χ������
@param[in] 	code_max �¼�code��Χ������

@return �ɹ�����EVT_SUCCESS��ʧ�ܷ��ش������
*/
int32_t EvtRemoveEvent (pthread_t thread_id, uint32_t type, uint32_t code_min, uint32_t code_max);

/**
@brief ����timer,timer�����п�����Ϊһ���ߵص�ƽ����ķ�����time1��time0�ֱ�Ϊ�ߵ͵�ƽ������ʱ��

@param[in] 	time0 time0
@param[in] 	time1 time1
@param[in] 	repition time0��time1����ѭ���Ĵ�����time0��time1����һ��Ϊһ��repition,�������ﵽrepitionʱtimer�Զ�ֹͣ
@param[in] 	repeatType time0��time1����ѭ���ķ�ʽ
				
@param[out] timer_id ���timerid����ʶ��timer�¼���delete timer

@return �ɹ�����EVT_SUCCESS��ʧ�ܷ��ش������
*/
int32_t EvtCreateTimer(uint32_t time0, uint32_t time1, int32_t repition, EvtTimerRepitionType repeatType,uint32_t *timer_id);

/**
@brief ��ͣ/ֹͣtimer

@param[in] 	timer_id ����ͣ/ֹͣ���е�timer id
@param[in] 	stop	Ϊtrue������Ѿ����еļ������´ο�ʼʱ���¼���
					Ϊfalseʱ������Ѿ����еļ������´ο�ʼʱ��������

@return �ɹ�����EVT_SUCCESS��ʧ�ܷ��ش������
*/
int32_t EvtPauseTimer(uint32_t timer_id,bool stop);

/**
@brief �ָ�timer

@param[in] 	timer_id ���ָ����еĵ�timer id

@return �ɹ�����EVT_SUCCESS��ʧ�ܷ��ش������
*/
int32_t EvtResumeTimer(uint32_t timer_id);

/**
@brief �޸�timer�Ĳ��������´�ͷ��ʼ����,@see EvtCreateTimer

@param[in] 	timer_id ���޸ĵ�timer��timer id
@param[in] 	time0 time0
@param[in] 	time1 time1
@param[in] 	repition time0��time1����ѭ���Ĵ�����time0��time1����һ��Ϊһ��repition,�������ﵽrepitionʱtimer�Զ�ֹͣ
@param[in] 	repeatType time0��time1����ѭ���ķ�ʽ
				
@return �ɹ�����EVT_SUCCESS��ʧ�ܷ��ش������
*/
int32_t EvtSetTimer(uint32_t timer_id,uint32_t time0, uint32_t time1, int32_t repition, EvtTimerRepitionType repeatType);

/**
@brief ɾ��timer

@param[in] 	timer_id ��ɾ��timer��timer id

@return �ɹ�����EVT_SUCCESS��ʧ�ܷ��ش������
*/
int32_t EvtRemoveTimer(uint32_t timer_id);

/**
@brief dump���߳����е��߳�

@return ��
*/
void EvtDumpThreads(void);

/**
@brief dump���߳��¼������е������¼�

@param[in] thread_id �߳�id

@return ��
*/
void EvtDumpEvents(pthread_t thread_id);

#ifdef __cplusplus
}
#endif

/** @} */

#endif 

