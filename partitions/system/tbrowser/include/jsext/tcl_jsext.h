/**
 * @defgroup 浏览器模块 SITA中间件js扩展模块对外头文件
 * @{
 * 
 * @file tcl_jsext.h
 * @brief SITA中间件js扩展模块对外头文件
 * 
 * 
 * @author zhaodm
 * @version 1.0 2014-09-16 初稿
 */

#ifndef __TCL_JSEXT_H__
#define __TCL_JSEXT_H__

#ifdef __cplusplus
extern "C" {
#endif

#include <stdio.h>

/**
* @brief 注册SITA中间件扩展JS接口
* 
* @return 成功返回0;失败返回其他
*/
int JSExtRegisterSITAInterface(void);

/**
* @brief 注册Ginga中间件扩展JS接口
* 
* @return 成功返回0;失败返回其他
*/
int JSExtRegisterGingaInterface(void);

/**
* @brief 注册video对象
* 
* 
* @return 成功返回0,失败返回其他
*/
int JSRegisterVideoObject(void);

/**
* @brief 注册Amazon中间件扩展JS接口
* 
* @return 成功返回0;失败返回其他
*/
int JSExtRegisterAmazonInterface(void);

#ifdef __cplusplus
}
#endif


#endif	//__TCL_JSEXT_H__