//top.checkProperty("PC","ro.sita.model.Apps.source_support",1);OK
var supportATVSource = 0;
var supportDTVSource = 0;
var supportHDMI1Source = 0;
var supportHDMI2Source = 0;
var supportHDMI3Source = 0;
var supportHDMI4Source = 0;
var supportYPBPRSource = 0;
var supportSCARTSource = 0;
var supportVGASource   = 0;
var supportAV1Source   = 0;
var supportAV2Source   = 0;
var supportUSBSource   = 0;
var supportATVCable  	   = -1;
var supportATVAntenna  	   = -1;
var supportDTVCable  	   = -1;
var supportDTVAntenna  	   = -1;
var supportDVBS  	   = -1;
var supportEPG 		   = 0;
var supportmhl 		   = 0;
var supportnfc 		   = 0;
var supportCI 		   = 0;
var supportCII 		   = 0;
var supportLightSensor = 0;
var supportLocalDimming= 0;
var supportHDR 		   = 0;
var supportHAMA 	   = 0;
var supportHDMI2 	   = 0;
var supportCommonInterface= 0;
var supportcec 		   = 0;
var supportBluetooth   = 0;
var supportNicam 	   = 0;
var supportHeadphone   = 0;

var supportEManual = 0;
var supportESticker = 0;
var supportTVRemote = 0;
var supportTCast = 0;
var supportWiFiDisplay = 0;
var supportContactUs= 0;
var supportNetworkedStandby = 0;
var supportSmartTVPortal = 0;
var supportAutoSource = 0;
var supportRemoteDiagnosis = 0;
var supportInstantPowerOn = 0;
var supportHBBTV = 0;

var isEUFlag            = 0;   //欧洲区域
var isAUFlag            = 0;   //澳洲区域
var isLAFlag            = 0;   //拉美区域
var isNAFlag            = 0;   //北美区域
var isAFFlag            = 0;   //非洲区域
var isCBFlag            = 0;   //哥伦比亚区域
var isAPFlag            = 0;   //亚太区域
var isCAFlag            = 0;   //中美区域，从北美区域派生
var isIRNFlag           = 0;   //伊朗

function initAllProperty()
{
    if (g_setting.getTunerCount()>=1)
    {
        supportATVSource = 1;
        supportDTVSource = 1;
    }
	if(checkProperty("HDMI1","ro.sita.model.Apps.source_support",1))
	{
		supportHDMI1Source = 1;
	}
	if(checkProperty("HDMI2","ro.sita.model.Apps.source_support",1))
	{
		supportHDMI2Source = 1;
	}
	if(checkProperty("HDMI3","ro.sita.model.Apps.source_support",1))
	{
		supportHDMI3Source = 1;
	}
	if(checkProperty("HDMI4","ro.sita.model.Apps.source_support",1))
	{
		supportHDMI4Source = 1;
	}
	if(checkProperty("YPBPR","ro.sita.model.Apps.source_support",1))
	{
		supportYPBPRSource = 1;
	}
	if(checkProperty("SCART","ro.sita.model.Apps.source_support",1))
	{
		supportSCARTSource = 1;
	}
	if(checkProperty("PC","ro.sita.model.Apps.source_support",1))
	{
		supportVGASource = 1;
	}
	if(checkProperty("AV1","ro.sita.model.Apps.source_support",1))
	{
		supportAV1Source = 1;
	}
	if(checkProperty("AV2","ro.sita.model.Apps.source_support",1))
	{
		supportAV2Source = 1;
	}
	if(checkProperty("USB","ro.sita.model.Apps.source_support",1))
	{
		supportUSBSource = 1;
	}
	if(checkProperty("Cable","ro.sita.model.Apps.ATVSerach_type",2))
	{
		supportATVCable = 0;
	}
	if(checkProperty("Antenna","ro.sita.model.Apps.ATVSerach_type",2))
	{
		supportATVAntenna = 1;
	}
	if(checkProperty("DVB-C","ro.sita.model.Apps.DTVSerach_type",2))
	{
		supportDTVCable = 0;
	}
	else if(checkProperty("ATSC-C","ro.sita.model.Apps.DTVSerach_type",2))
	{
		supportDTVCable = 7;
	}
	if(checkProperty("DVB-T","ro.sita.model.Apps.DTVSerach_type",2))
	{	
		supportDTVAntenna = 1;
	}
	else if (checkProperty("ISDB-T","ro.sita.model.Apps.DTVSerach_type",2))
	{
		supportDTVAntenna = 5;
	}
	else if(checkProperty("ATSC-T","ro.sita.model.Apps.DTVSerach_type",2))
	{	
		supportDTVAntenna = 6;
	}
	else if(checkProperty("DTMB","ro.sita.model.Apps.DTVSerach_type",2))
	{	
		supportDTVAntenna = 4;
	}
	if(checkProperty("DVB-S","ro.sita.model.Apps.DTVSerach_type",2))
	{
		supportDVBS = 2;
	}
	if(checkProperty("EPG","ro.sita.model.Apps.tuner_type",2))
	{
		supportEPG = 1;
	}
	if(checkProperty("mhl","ro.sita.model.Apps.hardware_support",2))
	{
		supportmhl = 1;
	}
	if(checkProperty("nfc","ro.sita.model.Apps.hardware_support",2))
	{
		supportnfc = 1;
	}
	if(checkProperty("CI","ro.sita.model.Apps.hardware_support",2) || (g_setting.getProperty("ro.sita.model.LiveTV.CI","TRUE") == "TRUE"))
	{
		supportCI = 1;
	}
	if(checkProperty("CI+","ro.sita.model.Apps.hardware_support",2) || (g_setting.getProperty("ro.sita.model.LiveTV.CI+","TRUE") == "TRUE"))
	{
		supportCII = 1;
	}
	if(checkProperty("light_sensor","ro.sita.model.Apps.hardware_support",2))
	{
		supportLightSensor = 1;
	}
	if(checkProperty("local_dimming","ro.sita.model.Apps.hardware_support",2))
	{
		supportLocalDimming = 1;
	}
	if(checkProperty("HDR","ro.sita.model.Apps.hardware_support",2))
	{
		supportHDR = 1;
	}
	if(checkProperty("HAMA","ro.sita.model.Apps.hardware_support",2))
	{
		supportHAMA = 1;
	}
	if(checkProperty("HDMI2.0","ro.sita.model.Apps.hardware_support",2))
	{
		supportHDMI2 = 1;
	}
	if(bluetooth.hasBtPlugIn() == 1)//(checkProperty("Bluetooth","ro.sita.model.Apps.hardware_support",2) || (g_setting.getProperty("ro.sita.model.LiveTV.BlueTooth","TRUE") == "TRUE"))
	{
		supportBluetooth = 1;
	}
	if(checkProperty("common_interface","ro.sita.model.Apps.hardware_support",2))
	{
		supportCommonInterface = 1;
	}
	if(checkProperty("Nicam","ro.sita.model.Apps.hardware_support",2))
	{
		supportNicam = 1;
	}	
	if(checkProperty("headphone","ro.sita.model.Apps.hardware_support",2))
	{
        supportHeadphone = 1;
	}

    if(checkProperty("EManual","ro.sita.model.Apps.menu_option",2))
    {
        supportEManual = 1;
    }
    if(checkProperty("ESticker","ro.sita.model.Apps.menu_option",2))
    {
        supportESticker = 1;
    }
    if(checkProperty("TVRemote","ro.sita.model.Apps.menu_option",2))
    {
        supportTVRemote = 1;
    }
    if(checkProperty("TCast","ro.sita.model.Apps.menu_option",2))
    {
        supportTCast = 1;
    }
    if(checkProperty("WiFiDisplay","ro.sita.model.Apps.menu_option",2))
    {
        supportWiFiDisplay = 1;
    }
    if(checkProperty("ContactUs","ro.sita.model.Apps.menu_option",2))
    {
        supportContactUs = 1;
    }
    if(checkProperty("NetworkedStandby","ro.sita.model.Apps.menu_option",2))
    {
        supportNetworkedStandby = 1;
    }
    if(checkProperty("SmartTVPortal","ro.sita.model.Apps.menu_option",2))
    {
        supportSmartTVPortal = 1;
    }
    if(checkProperty("AutoSource","ro.sita.model.Apps.menu_option",2))
    {
        supportAutoSource = 1;
    }
    if(checkProperty("RemoteDiagnosis","ro.sita.model.Apps.menu_option",2))
    {
        supportRemoteDiagnosis = 1;
    }
    if(checkProperty("InstantPowerOn","ro.sita.model.Apps.menu_option",2))
    {
        supportInstantPowerOn = 1;
    }
    if(checkProperty("HBBTV","ro.sita.model.Apps.menu_option",2))
    {
        supportHBBTV = 1;
    }
	var properyName = g_setting.getProperty("ro.sita.model.MODEL_REGION_NAME_CFG.REGION_NAME", "AP");
	if(properyName == "LA")
	{
        isLAFlag = 1;
	}
	else if(properyName == "AU" || properyName == "NZ")
	{
		isAUFlag = 1;
	}
	else if(properyName == "NA")
	{
		isNAFlag = 1;
	}
	else if(properyName == "AF")
	{
		isAFFlag = 1;
	}
    else if(properyName == "CB")
    {
        isLAFlag = 1;
        isCBFlag = 1;
    }
	else if(properyName == "AP")
	{
		isAPFlag = 1;
	}
	else if(properyName == "IRN")//新增伊朗flag
    {
        isAPFlag = 1;
        isIRNFlag = 1;
    }
	else if(properyName == "CA")
	{
		isNAFlag = 1;
		isCAFlag = 1;
	}
    else
	{
		isEUFlag = 1;
	}
	console.log("supportATVSource is "+supportATVSource+" supportDTVSource is "+supportDTVSource+" supportHDMI1Source is "+supportHDMI1Source+" supportHDMI2Source is "+supportHDMI2Source+" supportHDMI3Source is "+supportHDMI3Source+"  supportHDMI4Source is "+supportHDMI4Source+" supportYPBPRSource is "+supportYPBPRSource+" supportSCARTSource  is "+supportSCARTSource+" supportVGASource is "+supportVGASource+" supportAV1Source is "+supportAV1Source+" supportAV2Source is "+supportAV2Source+" supportUSBSource is "+supportUSBSource);
	
	console.log(" supportATVCable is "+supportATVCable+" supportATVAntenna is "+supportATVAntenna+" supportDTVCable is"+supportDTVCable+" supportDTVAntenna is "+supportDTVAntenna+"supportDVBS is "+supportDVBS+" supportEPG is "+supportEPG);
	
	console.log("supportmhl is "+supportmhl+"supportnfc is "+supportnfc+" supportCI is "+supportCI+"  supportCII is "+supportCII+" supportLightSensor is "+supportLightSensor+" supportLocalDimming is "+supportLocalDimming+" supportHDR is "+supportHDR+" supportHAMA is "+supportHAMA+" supportHDMI2 is "+supportHDMI2+" supportCommonInterface is "+supportCommonInterface+"supportcec is "+supportcec+" supportBluetooth is "+supportBluetooth+" supportNicam is "+supportNicam+"  supportHeadphone is "+supportHeadphone);
	
	console.log("properyName is "+properyName+" isLAFlag is "+isLAFlag+" isAUFlag is "+isAUFlag+" isNAFlag is "+isNAFlag+" isEUFlag is "+isEUFlag+" isCBFlag is "+isCBFlag+" isAPFlag is "+isAPFlag+" isCAFlag is "+isCAFlag+" isIRNFlag is "+isIRNFlag);
}