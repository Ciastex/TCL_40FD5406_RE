/**
 * @defgroup �����ģ�� SITA�м��js��չģ�����ͷ�ļ�
 * @{
 * 
 * @file tcl_jsext.h
 * @brief SITA�м��js��չģ�����ͷ�ļ�
 * 
 * 
 * @author zhaodm
 * @version 1.0 2014-09-16 ����
 */

#ifndef __TCL_JSEXT_H__
#define __TCL_JSEXT_H__

#ifdef __cplusplus
extern "C" {
#endif

#include <stdio.h>

/**
* @brief ע��SITA�м����չJS�ӿ�
* 
* @return �ɹ�����0;ʧ�ܷ�������
*/
int JSExtRegisterSITAInterface(void);

/**
* @brief ע��Ginga�м����չJS�ӿ�
* 
* @return �ɹ�����0;ʧ�ܷ�������
*/
int JSExtRegisterGingaInterface(void);

/**
* @brief ע��video����
* 
* 
* @return �ɹ�����0,ʧ�ܷ�������
*/
int JSRegisterVideoObject(void);

/**
* @brief ע��Amazon�м����չJS�ӿ�
* 
* @return �ɹ�����0;ʧ�ܷ�������
*/
int JSExtRegisterAmazonInterface(void);

#ifdef __cplusplus
}
#endif


#endif	//__TCL_JSEXT_H__