/**
 * @defgroup ��ӡ���� SITA�м��LOG��ӡ����
 * @{
 * 
 * @file sita_debug.h
 * @brief SITA�м����ӡ����ģ��ͷ�ļ�
 * 
 * ��ģ�����ؼ��ּ��������־��Ϣ��������Ϳ���
 * ��������ļ��𲻵��ڶ�Ӧģ����������ʱ���������־��Ϣ
 * 
 * @author zhaodm
 * @version 1.0 2014-08-28 ����
 */

#ifndef __SITA_DEBUG_H__
#define __SITA_DEBUG_H__

#ifdef __cplusplus
extern "C" {
#endif

#include <stdio.h>

#ifndef _SITA_DEBUG
#define _SITA_DEBUG
#endif

/**
* @brief ���Լ�
*/
#define DEBUG_LEVEL		    (2)

/**
* @brief ���̵���ʾ��
*/
#define INFO_LEVEL 		    (3)

/**
* @brief ���漶
*/
#define WARN_LEVEL 		    (4)

/**
* @brief ����
*/
#define ERROR_LEVEL		    (5)


/**@cond */
#ifdef _SITA_DEBUG
	#define SITA_ASSERT(expression)  \
	do{ \
		if(!(expression)) \
			SITADebug("SITA_Debug",ERROR_LEVEL,"Assertion: \"%s\" failed, in file %s, line %d\n", \
				#expression, __FILE__, __LINE__); \
	}while(0)
	
	#define SITA_DEBUG  SITADebug
#else
	#define SITA_ASSERT(x) ((void)0)
	#define SITA_DEBUG(module, ...) ((void)0)
#endif
/**@endcond*/

/**
* @brief ��ָ���������ĳ��ģ�����־
* 
* ��nDebugLevel >= pcModuleName����־����ʱ,�����־��Ϣ,����ֱ�ӷ���
* @param[in] pcModuleName ģ�����ؼ���
* @param[in] nDebugLevel ��־�������
* @param[in] pcFormat ��־�ַ�������ʽ,ͬprintf�Ķ���
*/
void SITADebug(const char * pcModuleName, int nDebugLevel, const char *pcFormat, ...);

/**
* @brief ����Ĭ�ϴ�ӡ����
* 
* �������ģ����Ч
* @param[in] nDefaultLevel ��־�������
*/
void SITADebugSetDefaultLevel(int nDefaultLevel);

/**
* @brief ����ָ��ģ��Ĵ�ӡ����
* 
* ���ȼ�����SITADebugSetDefaultLevel��ֵ
* @param[in] pcModuleName ģ�����ؼ���
* @param[in] nDebugLevel ��־�������
*/
void SITADebugSetLevel(const char * pcModuleName, int nDebugLevel);

/**
* @brief ����Ĭ���Ƿ��ӡʱ��
* 
* �������ģ����Ч
* @param[in] shouldShowTime �Ƿ��ӡʱ�䣬1��ʾ��ӡʱ�䣬Ĭ����0(����ӡ)
*/
void SITADebugSetShouldShowTime(int shouldShowTime);

#ifdef __cplusplus
}
#endif


#endif	//__SITA_DEBUG_H__