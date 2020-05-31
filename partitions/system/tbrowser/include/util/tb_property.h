/**@defgroup ����ģ��
  @{
 
 @brief ����,��ȡ,�洢�û�����.��Ҫ�����Զ���С���ݵĴ洢.
 
 һ�����Ա�ʾһ�����ڱ��صĿɱ��ֵ,��Ӧ�����û��ȡ.
 ���Ե�ֵ��洢�ڱ���,�Թ��´ο���ʱ���¼���.
 
 @author zhaodm@tcl.com
 
 @version 1.0.0 2015/9/9 ����
 */

#ifndef __TB_PROPERTY_H__
#define __TB_PROPERTY_H__

#ifdef __cplusplus
extern "C" {
#endif

/**
 @brief ���������ļ�����ʵ��
 
 ����ָ���������ļ�
 
 @param[in] file �����ļ�����·��
 @return �ɹ����ؾ����ʧ�ܷ���NULL
 */
void* TBProCreate(const char* file);

/**
 @brief ����ʵ��
 
 @param[in] handle ����TBProCreate���صľ��
 @return none
 */
void TBProDestory(void* handle);

/**
 @brief ��������
 
 ��һ������ֵ���õ����Թ���ģ����,��key�Ѵ����򸲸ǵ�ǰֵ
 
 @note �˺��������Զ����浽flash���������TBProStore�ſ�
 
 @param[in] handle ����TBProCreate���صľ��
 @param[in] key ȫ��Ψһ���Թؼ���.
 @param[in] value ���Ե�ֵ.
 @return �ɹ�����0;ʧ�ܷ���<0�Ĵ������
 */
bool TBProSetProperty(void* handle, const char* key, const char *value);

/**
 @brief ��ȡ����
 
 �����Թ���ģ���л�ȡĳ������,��key������,�򷵻�defaultValue.
 ���ӿڲ���ı��κ����Ե�״̬,��key������ʱ,defaultValue����洢.
 
 @note ��Key����,����ֵ���ڴ��ɱ�ģ�����,Ӧ�ò����ͷ�(free).��Key������,��ֱ�ӷ���defValueָ��.
 
 @param[in] handle ����TBProCreate���صľ��
 @param[in] key ȫ��Ψһ���Թؼ���.
 @param[in] defaultValue Ĭ�ϵ����Ե�ֵ,��key��������ֱ�ӷ��ظ�ֵ.
 @return �ɹ��������Ե�ֵ,���򷵻�defaultValue.
 */
const char* TBProGetProperty(void* handle, const char* key, const char* defaultValue);

/**
 @brief ɾ��ָ������
 
 ɾ����,Key��Ӧ������Ϊ������״̬.
 ɾ��һ�������ڵ�Key�᷵��ʧ��.
 
 @param[in] handle ����TBProCreate���صľ��
 @param[in] key ȫ��Ψһ���Թؼ��֣������NULL��ʾ�������key
 @return �ɹ�����0;ʧ�ܷ���<0�Ĵ������.
 */
bool TBProRemove(void* handle, const char* key);

/**
 @brief �����������Ե�flash
 
 @note �˽ӿڿ��ܻ�ȽϺ�ʱ���мǲ�ҪƵ�����ã�
 
 ���ڻָ��������õȳ���.
 @return �ɹ�����0;ʧ�ܷ���<0�Ĵ������.
 */
bool TBProStore(void* handle);
    
#ifdef __cplusplus
}
#endif
/** @} */
#endif