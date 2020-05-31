/**@defgroup ��������ģ��
@{

@brief �����������ã�֧��eth��wifi��ppoe

@author yfg@tcl.com

@version 1.0.0 2014/12/25 ����
*/

#ifndef _API_NET_SETTINGS_H_
#define _API_NET_SETTINGS_H_
#include "fpi_error_code.h"
#include "fpi_base_type.h"
#ifdef __cplusplus
extern "C" {
#endif


#define API_NET_16_LENGTH 16 //IP ,MASK,GATE DNS LENGTH
#define API_NET_18_LENGTH 18 // MAC LENGTH

#define API_NET_64_LENGTH 64
#define API_NET_128_LENGTH 128
#define API_NET_20_LENGTH 20



/**
@brief ����ṹ��
*/
typedef struct API_WIFI_LIST
{
    int page;					///<
    int pageIndex;				///<
}API_WIFI_LIST_SIZE_PAGE;

/**
@brief ����ö��
*/
typedef enum
{
    E_NET_ACCESS_NOTIFY_PHY_DISCONNECT, ///< RJ45 pulled out
    E_NET_ACCESS_NOTIFY_PHY_CONNECTTED, ///< RJ45 pluged in
    
}EN_API_NET_ACCESS_NOTIFY_E;

/**
@brief ����������Ϣ�ṹ��
*/
typedef struct{
	char ip[API_NET_16_LENGTH];			///<	ip��ַ
	char mask[API_NET_16_LENGTH];		///< ����mask
	char gateway[API_NET_16_LENGTH];	///<	����
	char dns1[API_NET_16_LENGTH];		///<	dns
	char dns2[API_NET_16_LENGTH];		///<	����dns
} st_api_net_info;

/**
@brief ����wifi cipherö��
*/
typedef enum
{
	E_NET_WIFI_CIPHER_NONE = 0,		///< CIPHER_NONE
	E_NET_WIFI_CIPHER_WEP,			///< CIPHER_WEP
	E_NET_WIFI_CIPHER_TKIP,			///< CIPHER_TKIP
	E_NET_WIFI_CIPHER_AES,			///< CIPHER_AES
	E_NET_WIFI_CIPHER_CCMP			///<	CIPHER_CCMP
}EN_NET_WIFI_CIPHER;

/**
@brief ����wifi securityö��
*/
typedef enum
{
    E_NET_ENCRY_NONE = 0,			///< WI-FI secutiry type is None
    E_NET_ENCRY_WEP,				///< WI-FI security type is WEP
    E_NET_ENCRY_WPA_PSK,			///< WI-FI security type is WPA-PSK
    E_NET_ENCRY_WPA2_PSK,			///< WI-FI security type is WPA2-PSK
    E_NET_ENCRY_MIXED,	///< WI-FI security type is WPA/WPA2-PSK
    E_NET_ENCRY_NOT_SUPPORTED		///< WI-FI security type is WPA/WPA2-PSK
}API_EN_NET_SECURITY_TYPE;

/**
@brief ����wifi ����ģʽö��
*/
typedef enum
{
    E_NET_WIFI_MODE_B,      ///< 802.11b
    E_NET_WIFI_MODE_G,      ///< 802.11g
    E_NET_WIFI_MODE_N,     ///< 802.11n
    E_NET_WIFI_MODE_NUM    ///< 
}API_EN_NET_WIFI_MODE;

/**
@brief ��������ģ�鹤��ģʽö��
*/
typedef enum   
{
    E_NET_PATTERN_WIRED,   	///< 802.11b   
    E_NET_PATTERN_WIERLESS,	///< 802.11b      
    E_NET_PATTERN_PPPOE		///< 802.11b	
}API_NET_PATTERN;

/**
@brief ����access point information�ṹ��
*/
typedef struct
{
	char ssid[API_NET_64_LENGTH];		///< ssid of ap
	char name[API_NET_64_LENGTH];		///< 
    char cipher[API_NET_20_LENGTH ];	///< 
	char pwd[API_NET_64_LENGTH];		 ///< password of ap
	char encryption[API_NET_20_LENGTH];  ///< encryption of ap
    API_EN_NET_SECURITY_TYPE encryType;	///< 
	API_EN_NET_WIFI_MODE mode;          ///< 802.11��׼
	int32_t strength;
} st_api_net_ap_info;

/**
@brief ����ṹ��
*/
typedef struct __st_api_net_wifi_channel_info{
	char speed[API_NET_16_LENGTH];		///< speed
	char duration[API_NET_16_LENGTH];	///< duration
	char mids[API_NET_16_LENGTH];		///< mids
	char ssid[API_NET_16_LENGTH];		///< ��ǰ���ӵ�wifi��ssid
	int32_t quality;					///< quality
	int32_t signal_quality;				///< signal_quality
	int32_t signal_strength;			///< signal_strength
	int32_t encryption;					///< encryption
	int32_t validation;					///< validation
	int32_t hotpots;					///< wifi�ȵ����
	char channel_freq[API_NET_16_LENGTH];	///< channel_freq
} st_api_net_wifi_channel_info;

/**
@brief ��ȡ���߲��״̬

@param[in] net_parttern ����ģʽ

@param[out] cable_status 
			EM_NETWORK_ACCESS_NOTIFY_PHY_CONNECTTED:������������   
			EM_NETWORK_ACCESS_NOTIFY_PHY_DISCONNECT:����û�в��
			E_NETWORK_ACCESS_NOTIFY_FAILED 

@return �ɹ�����fpi_error_success��ʧ�ܷ��ش������
*/
fpi_error api_net_get_status(API_NET_PATTERN net_parttern,EN_API_NET_ACCESS_NOTIFY_E *cable_status);

/**
@brief ��ȡ������Ϣ��ip��mac��dns��

@param[in] net_parttern ����ģʽ

@param[out] network_info �ṹst_api_net_infoָ�룬���ڱ���������Ϣ

@return �ɹ�����fpi_error_success��ʧ�ܷ��ش������
*/
fpi_error api_net_get_info(API_NET_PATTERN net_parttern,st_api_net_info *network_info);

/**
@brief ���������ţ�ip��mac��dns��

@param[in] 	net_parttern 	����ģʽ
@param[in] 	network_info 	�ṹst_api_net_infoָ�룬���ڴ���������Ϣ
@param[in] 	dhcp			trueʱ��ʾ�Զ���ȡ�����Ժ���network_info����Ϣ

@return �ɹ�����fpi_error_success��ʧ�ܷ��ش������
*/
fpi_error api_net_set_info(API_NET_PATTERN net_parttern,st_api_net_info *network_info,fpi_bool dhcp);

/**
@brief ��ȡwifi����Ϣ

@param[out] channel_info �ṹst_api_net_wifi_channel_infoָ�룬�������wifi channel��Ϣ

@return �ɹ�����fpi_error_success��ʧ�ܷ��ش������
*/
fpi_error api_net_get_wifi_info(st_api_net_wifi_channel_info *channel_info);


/**
@brief ������ֹͣwifi��scan

@param[in] start Ϊtrueʱ����scan������ֹͣscan

@return �ɹ�����fpi_error_success��ʧ�ܷ��ش������
*/
fpi_error api_net_wifi_scan(fpi_bool start);

/**
@brief ��ȡɨ�赽������ap����Ϣ

@param[in] count wireless_info�����Ԫ�ظ���
			
@param[out] total ʵ�ʿ��õ�ap�ĸ���
@param[out] wireless_info ������count��st_api_net_wifi_network_info��������

@return �ɹ�����fpi_error_success��ʧ�ܷ��ش������
*/
fpi_error api_net_get_all_aps(st_api_net_ap_info[] wireless_info,int32_t count,int *total);

/**
@brief ��ȡ���һ�����ӵ�ap�������Ϣ

@param[in] api_ap_info ���ap��Ϣ
			
@return �ɹ�����fpi_error_success��ʧ�ܷ��ش������
*/
fpi_error api_net_get_connected_ap(st_api_net_ap_info*  api_ap_info);

/**
@brief ����һ���ȵ�

@param[in] ap_info �ȵ���Ϣ

@return �ɹ�����fpi_error_success��ʧ�ܷ��ش������
*/
fpi_error api_net_connect_ap(st_api_net_ap_info *ap_info);

/**
@brief ʹ��ȷ��������ģʽ

@param[in]	net_parttern ����ģʽ
@param[in] 	enable �Ƿ�ʹ�ܣ�true��ʾʹ�ܣ�false��ʾ��ʹ�� 

@return �ɹ�����fpi_error_success��ʧ�ܷ��ش������
*/
fpi_error api_net_enable(API_NET_PATTERN net_parttern,fpi_bool enable);

/**
@brief ��ѯȷ��������ģʽ�Ƿ�ʹ��

@param[in] net_parttern ����ģʽ
			
@param[out] enable �Ƿ�ʹ�ܣ�true��ʾʹ�ܣ�false��ʾδʹ�� 

@return �ɹ�����fpi_error_success��ʧ�ܷ��ش������
*/
fpi_error api_net_is_enable(API_NET_PATTERN net_parttern,fpi_bool *enable);

/**
@brief ��ȡ��ǰʹ�õ�����ģʽ������״̬

@param[out] net_pattern �������ģʽ
@param[out] connected   �Ƿ��Ѿ�������
			
@return �ɹ�����fpi_error_success��ʧ�ܷ��ش������
*/
fpi_error api_net_get_pattern(API_NET_PATTERN *net_pattern,fpi_bool *connected);

/**
@brief ���õ�ǰʹ�õ�����ģʽ,eth��wifi or pppoe

@param[in] net_pattern ����ģʽ
			
@return �ɹ�����fpi_error_success��ʧ�ܷ��ش������
*/
fpi_error api_net_set_pattern(API_NET_PATTERN net_pattern);

/**
@brief ������ֹͣpbc

@param[in] enable Ϊtrueʱ����pbc��Ϊfalseʱ�ر�pbc����
			
@return �ɹ�����fpi_error_success��ʧ�ܷ��ش������
*/
fpi_error api_net_set_pbc(fpi_bool enable);

/**
@brief ��ȡwps������

@param[in] length pin_out���ֽ���
			
@param[out] pin_out �����ȡ��������

@return �ɹ�����fpi_error_success��ʧ�ܷ��ش������
*/
fpi_error api_net_get_wps_pin(char *pin_out,int32_t length);

/**
@brief ������ֹͣmiracast

@param[in] enable Ϊtrueʱ����miracast��Ϊfalseʱ�ر�miracast����
			
@return �ɹ�����fpi_error_success��ʧ�ܷ��ش������
*/
fpi_bool api_net_enable_miracast(fpi_bool enable);


#ifdef __cplusplus
}
#endif
/** @} */

#endif 
