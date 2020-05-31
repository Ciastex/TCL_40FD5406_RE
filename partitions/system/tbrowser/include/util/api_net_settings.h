/**@defgroup 网络设置模块
@{

@brief 用于网络设置，支持eth、wifi和ppoe

@author yfg@tcl.com

@version 1.0.0 2014/12/25 初稿
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
@brief 定义结构体
*/
typedef struct API_WIFI_LIST
{
    int page;					///<
    int pageIndex;				///<
}API_WIFI_LIST_SIZE_PAGE;

/**
@brief 定义枚举
*/
typedef enum
{
    E_NET_ACCESS_NOTIFY_PHY_DISCONNECT, ///< RJ45 pulled out
    E_NET_ACCESS_NOTIFY_PHY_CONNECTTED, ///< RJ45 pluged in
    
}EN_API_NET_ACCESS_NOTIFY_E;

/**
@brief 定义网络信息结构体
*/
typedef struct{
	char ip[API_NET_16_LENGTH];			///<	ip地址
	char mask[API_NET_16_LENGTH];		///< 网络mask
	char gateway[API_NET_16_LENGTH];	///<	网关
	char dns1[API_NET_16_LENGTH];		///<	dns
	char dns2[API_NET_16_LENGTH];		///<	备用dns
} st_api_net_info;

/**
@brief 定义wifi cipher枚举
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
@brief 定义wifi security枚举
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
@brief 定义wifi 无线模式枚举
*/
typedef enum
{
    E_NET_WIFI_MODE_B,      ///< 802.11b
    E_NET_WIFI_MODE_G,      ///< 802.11g
    E_NET_WIFI_MODE_N,     ///< 802.11n
    E_NET_WIFI_MODE_NUM    ///< 
}API_EN_NET_WIFI_MODE;

/**
@brief 定义网络模块工作模式枚举
*/
typedef enum   
{
    E_NET_PATTERN_WIRED,   	///< 802.11b   
    E_NET_PATTERN_WIERLESS,	///< 802.11b      
    E_NET_PATTERN_PPPOE		///< 802.11b	
}API_NET_PATTERN;

/**
@brief 定义access point information结构体
*/
typedef struct
{
	char ssid[API_NET_64_LENGTH];		///< ssid of ap
	char name[API_NET_64_LENGTH];		///< 
    char cipher[API_NET_20_LENGTH ];	///< 
	char pwd[API_NET_64_LENGTH];		 ///< password of ap
	char encryption[API_NET_20_LENGTH];  ///< encryption of ap
    API_EN_NET_SECURITY_TYPE encryType;	///< 
	API_EN_NET_WIFI_MODE mode;          ///< 802.11标准
	int32_t strength;
} st_api_net_ap_info;

/**
@brief 定义结构体
*/
typedef struct __st_api_net_wifi_channel_info{
	char speed[API_NET_16_LENGTH];		///< speed
	char duration[API_NET_16_LENGTH];	///< duration
	char mids[API_NET_16_LENGTH];		///< mids
	char ssid[API_NET_16_LENGTH];		///< 当前连接的wifi的ssid
	int32_t quality;					///< quality
	int32_t signal_quality;				///< signal_quality
	int32_t signal_strength;			///< signal_strength
	int32_t encryption;					///< encryption
	int32_t validation;					///< validation
	int32_t hotpots;					///< wifi热点个数
	char channel_freq[API_NET_16_LENGTH];	///< channel_freq
} st_api_net_wifi_channel_info;

/**
@brief 获取网线插拔状态

@param[in] net_parttern 网络模式

@param[out] cable_status 
			EM_NETWORK_ACCESS_NOTIFY_PHY_CONNECTTED:网线连接良好   
			EM_NETWORK_ACCESS_NOTIFY_PHY_DISCONNECT:网线没有插好
			E_NETWORK_ACCESS_NOTIFY_FAILED 

@return 成功返回fpi_error_success，失败返回错误代码
*/
fpi_error api_net_get_status(API_NET_PATTERN net_parttern,EN_API_NET_ACCESS_NOTIFY_E *cable_status);

/**
@brief 获取网线信息，ip、mac、dns等

@param[in] net_parttern 网络模式

@param[out] network_info 结构st_api_net_info指针，用于保存网络信息

@return 成功返回fpi_error_success，失败返回错误代码
*/
fpi_error api_net_get_info(API_NET_PATTERN net_parttern,st_api_net_info *network_info);

/**
@brief 设置网线信，ip、mac、dns等

@param[in] 	net_parttern 	网络模式
@param[in] 	network_info 	结构st_api_net_info指针，用于传递网络信息
@param[in] 	dhcp			true时表示自动获取，可以忽略network_info的信息

@return 成功返回fpi_error_success，失败返回错误代码
*/
fpi_error api_net_set_info(API_NET_PATTERN net_parttern,st_api_net_info *network_info,fpi_bool dhcp);

/**
@brief 获取wifi的信息

@param[out] channel_info 结构st_api_net_wifi_channel_info指针，用于输出wifi channel信息

@return 成功返回fpi_error_success，失败返回错误代码
*/
fpi_error api_net_get_wifi_info(st_api_net_wifi_channel_info *channel_info);


/**
@brief 启动、停止wifi的scan

@param[in] start 为true时启动scan，否则停止scan

@return 成功返回fpi_error_success，失败返回错误代码
*/
fpi_error api_net_wifi_scan(fpi_bool start);

/**
@brief 获取扫描到的所有ap的信息

@param[in] count wireless_info数组的元素个数
			
@param[out] total 实际可用的ap的个数
@param[out] wireless_info 连续的count个st_api_net_wifi_network_info的数据组

@return 成功返回fpi_error_success，失败返回错误代码
*/
fpi_error api_net_get_all_aps(st_api_net_ap_info[] wireless_info,int32_t count,int *total);

/**
@brief 获取最后一个连接的ap的相关信息

@param[in] api_ap_info 输出ap信息
			
@return 成功返回fpi_error_success，失败返回错误代码
*/
fpi_error api_net_get_connected_ap(st_api_net_ap_info*  api_ap_info);

/**
@brief 连接一个热点

@param[in] ap_info 热点信息

@return 成功返回fpi_error_success，失败返回错误代码
*/
fpi_error api_net_connect_ap(st_api_net_ap_info *ap_info);

/**
@brief 使能确定的网络模式

@param[in]	net_parttern 网络模式
@param[in] 	enable 是否使能，true表示使能，false表示不使能 

@return 成功返回fpi_error_success，失败返回错误代码
*/
fpi_error api_net_enable(API_NET_PATTERN net_parttern,fpi_bool enable);

/**
@brief 查询确定的网络模式是否使能

@param[in] net_parttern 网络模式
			
@param[out] enable 是否使能，true表示使能，false表示未使能 

@return 成功返回fpi_error_success，失败返回错误代码
*/
fpi_error api_net_is_enable(API_NET_PATTERN net_parttern,fpi_bool *enable);

/**
@brief 获取当前使用的网络模式及连接状态

@param[out] net_pattern 输出网络模式
@param[out] connected   是否已经连接上
			
@return 成功返回fpi_error_success，失败返回错误代码
*/
fpi_error api_net_get_pattern(API_NET_PATTERN *net_pattern,fpi_bool *connected);

/**
@brief 设置当前使用的网络模式,eth、wifi or pppoe

@param[in] net_pattern 网络模式
			
@return 成功返回fpi_error_success，失败返回错误代码
*/
fpi_error api_net_set_pattern(API_NET_PATTERN net_pattern);

/**
@brief 启动、停止pbc

@param[in] enable 为true时启动pbc，为false时关闭pbc功能
			
@return 成功返回fpi_error_success，失败返回错误代码
*/
fpi_error api_net_set_pbc(fpi_bool enable);

/**
@brief 获取wps的密码

@param[in] length pin_out的字节数
			
@param[out] pin_out 输出获取到的密码

@return 成功返回fpi_error_success，失败返回错误代码
*/
fpi_error api_net_get_wps_pin(char *pin_out,int32_t length);

/**
@brief 启动、停止miracast

@param[in] enable 为true时启动miracast，为false时关闭miracast功能
			
@return 成功返回fpi_error_success，失败返回错误代码
*/
fpi_bool api_net_enable_miracast(fpi_bool enable);


#ifdef __cplusplus
}
#endif
/** @} */

#endif 
