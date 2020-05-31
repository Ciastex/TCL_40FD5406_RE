/**@defgroup 属性模块
  @{
 
 @brief 设置,获取,存储用户属性.主要用于自定义小数据的存储.
 
 一个属性表示一个存在本地的可变的值,供应用设置或获取.
 属性的值会存储在本地,以供下次开机时重新加载.
 
 @author zhaodm@tcl.com
 
 @version 1.0.0 2015/9/9 初稿
 */

#ifndef __TB_PROPERTY_H__
#define __TB_PROPERTY_H__

#ifdef __cplusplus
extern "C" {
#endif

/**
 @brief 根据配置文件创建实例
 
 加载指定的配置文件
 
 @param[in] file 配置文件完整路径
 @return 成功返回句柄，失败返回NULL
 */
void* TBProCreate(const char* file);

/**
 @brief 销毁实例
 
 @param[in] handle 调用TBProCreate返回的句柄
 @return none
 */
void TBProDestory(void* handle);

/**
 @brief 设置属性
 
 将一个属性值设置到属性管理模块中,若key已存在则覆盖当前值
 
 @note 此函数不会自动保存到flash，必须调用TBProStore才可
 
 @param[in] handle 调用TBProCreate返回的句柄
 @param[in] key 全局唯一属性关键字.
 @param[in] value 属性的值.
 @return 成功返回0;失败返回<0的错误代码
 */
bool TBProSetProperty(void* handle, const char* key, const char *value);

/**
 @brief 获取属性
 
 从属性管理模块中获取某个属性,若key不存在,则返回defaultValue.
 本接口不会改变任何属性的状态,即key不存在时,defaultValue不会存储.
 
 @note 若Key存在,返回值的内存由本模块管理,应用不能释放(free).若Key不存在,则直接返回defValue指针.
 
 @param[in] handle 调用TBProCreate返回的句柄
 @param[in] key 全局唯一属性关键字.
 @param[in] defaultValue 默认的属性的值,若key不存在则直接返回该值.
 @return 成功返回属性的值,否则返回defaultValue.
 */
const char* TBProGetProperty(void* handle, const char* key, const char* defaultValue);

/**
 @brief 删除指定属性
 
 删除后,Key对应的属性为不存在状态.
 删除一个不存在的Key会返回失败.
 
 @param[in] handle 调用TBProCreate返回的句柄
 @param[in] key 全局唯一属性关键字，如果传NULL表示清空所有key
 @return 成功返回0;失败返回<0的错误代码.
 */
bool TBProRemove(void* handle, const char* key);

/**
 @brief 保存所有属性到flash
 
 @note 此接口可能会比较耗时，切记不要频繁调用！
 
 用于恢复出厂设置等场景.
 @return 成功返回0;失败返回<0的错误代码.
 */
bool TBProStore(void* handle);
    
#ifdef __cplusplus
}
#endif
/** @} */
#endif