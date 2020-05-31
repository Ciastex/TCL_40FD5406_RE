/**@defgroup ����ģ��
@{

@brief ����,��ȡ,�洢ϵͳ���û�����.��Ҫ�����Զ���С���ݵĴ洢.

һ�����Ա�ʾһ�����ڱ��صĿɱ��ֵ,��Ӧ�ü��м�����û��ȡ.
���Ե�ֵ��洢�ڱ���,�Թ��´ο���ʱ���¼���.
�ָ���������ʱ��Щֵ����ָ�ΪĬ��ֵ.

@author lihui02@tcl.com

@version 1.0.0 2014/10/16 ����
@version 1.0.1 2014/10/16 ȥ����fpi�����붨�������
@version 1.0.2 2014/10/16 ����Key�������淶.
@version 1.0.3 2014/10/17 ɾ��flush�ӿڼ���ص�˵��,С����ֱ��д�뼴��.����getʱ�ڴ���������.
@version 1.0.4 2014/10/18 ���remove�ӿ�.
@version 1.0.5 2014/10/28 ��ӻ����м��������Ϣר��Key����.
*/

#ifndef __SITA_PROPERTY_H__
#define __SITA_PROPERTY_H__

#ifdef __cplusplus
extern "C" {
#endif

/*
Load property to memory from flash, it should be called when tv start up
*/
int sita_property_init(void);

/**
@brief ��������

��һ������ֵ���õ����Թ���ģ����,��key�Ѵ����򸲸ǵ�ǰֵ.
����Key��ȡֵ,��������¹淶:
- sita.$ģ����.$Key����              �м������ǰ׺,�����м�������Key����Ӵ������淶.��"sita.atv.pic.mode"
- ro.sita.$�����ļ���.$����.$�ֶ���    ��ȡ�м��������Ϣר��Key,���ڻ�ȡֻ����,�м����ƽ̨��������Ϣ.���ֶε�����ֱ�Ϊ:
    -# �����ļ���(common) ͨ��������Ϣ,��Ӧ$F1_CONFIG��������ָ���������ļ��е�����
    -# �����ļ���(model) �뵱ǰģ����ص�������Ϣ,��ӦModel ini�����ļ��е�����
    -# ����   ����������,��Ӧ�����ļ��е�����,��ini�ļ���[]�еĲ���
    -# �ֶ���  ������,��Ӧ�����ļ��е�Key
    -# ����: ro.sita.model.PROJECT_NAME_CFG.PROJECT_NAME�ɻ�ȡ��ǰģ��(��)������.��ϸ�������ļ���Ϣ��μ�<SITA������.xlsx>
    -# ע��: ����Key��Ҫ���м��ʵ��ʱ,���ж�ȡ�м���������ļ�.Ӧ�������ע�����,ֱ�Ӷ�ȡ����.
- app.$Ӧ������.$Key����             Ӧ�ñ���ǰ׺,����Ӧ�ö����Key����Ӵ������淶.��"app.ipepg.switch"
- ����                              ��ʱ����,����ģ�������ʹ��.

@param[in] key ȫ��Ψһ���Թؼ���.
@param[in] value ���Ե�ֵ.
@return �ɹ�����0;ʧ�ܷ���<0�Ĵ������
*/
int sita_property_set(const char *key,const char *value);

/**
@brief ��ȡ����

�����Թ���ģ���л�ȡĳ������,��key������,�򷵻�defValue.
���ӿڲ���ı��κ����Ե�״̬,��key������ʱ,defValue����洢.

@note ��Key����,����ֵ���ڴ��ɱ�ģ�����,Ӧ�ò����ͷ�(free).��Key������,��ֱ�ӷ���defValueָ��,������������defValue��ͬ.
@note ����ģ����hash��ʵ��key-value�Ĵ洢������,�Լ����ڴ�������ͷż���Ƭ��.

@param[in] key ȫ��Ψһ���Թؼ���.
@param[in] defValue Ĭ�ϵ����Ե�ֵ,��key��������ֱ�ӷ��ظ�ֵ.
@return �ɹ��������Ե�ֵ,���򷵻�defValue.
*/
const char * sita_property_get(const char *key,const char *defValue);

/**
@brief ɾ��ָ������

ɾ����,Key��Ӧ������Ϊ������״̬.
ɾ��һ�������ڵ�Key�᷵��ʧ��.
@return �ɹ�����0;ʧ�ܷ���<0�Ĵ������.
*/
int sita_property_remove(const char *key);

/**
@brief ɾ�����е�����ֵ

���ڻָ��������õȳ���.
@return �ɹ�����0;ʧ�ܷ���<0�Ĵ������.
*/
int sita_property_reset(void);

#ifdef __cplusplus
}
#endif
/** @} */
#endif
