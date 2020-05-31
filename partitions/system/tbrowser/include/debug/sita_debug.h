/**
 * @defgroup 打印控制 SITA中间件LOG打印控制
 * @{
 * 
 * @file sita_debug.h
 * @brief SITA中间件打印控制模块头文件
 * 
 * 按模块名关键字及级别对日志信息进行输出和控制
 * 当输出语句的级别不低于对应模块的输出级别时，输出该日志信息
 * 
 * @author zhaodm
 * @version 1.0 2014-08-28 初稿
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
* @brief 调试级
*/
#define DEBUG_LEVEL		    (2)

/**
* @brief 流程等提示级
*/
#define INFO_LEVEL 		    (3)

/**
* @brief 警告级
*/
#define WARN_LEVEL 		    (4)

/**
* @brief 错误级
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
* @brief 以指定级别输出某个模块的日志
* 
* 当nDebugLevel >= pcModuleName的日志级别时,输出日志信息,否则直接返回
* @param[in] pcModuleName 模块名关键字
* @param[in] nDebugLevel 日志输出级别
* @param[in] pcFormat 日志字符串及格式,同printf的定义
*/
void SITADebug(const char * pcModuleName, int nDebugLevel, const char *pcFormat, ...);

/**
* @brief 设置默认打印级别
* 
* 针对所有模块有效
* @param[in] nDefaultLevel 日志输出级别
*/
void SITADebugSetDefaultLevel(int nDefaultLevel);

/**
* @brief 设置指定模块的打印级别
* 
* 优先级高于SITADebugSetDefaultLevel的值
* @param[in] pcModuleName 模块名关键字
* @param[in] nDebugLevel 日志输出级别
*/
void SITADebugSetLevel(const char * pcModuleName, int nDebugLevel);

/**
* @brief 设置默认是否打印时间
* 
* 针对所有模块有效
* @param[in] shouldShowTime 是否打印时间，1表示打印时间，默认是0(不打印)
*/
void SITADebugSetShouldShowTime(int shouldShowTime);

#ifdef __cplusplus
}
#endif


#endif	//__SITA_DEBUG_H__