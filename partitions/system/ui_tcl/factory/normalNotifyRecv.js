document.onsystemevent = notifyProcess;
function notifyProcess(evt)
{
    var msg = evt.which;
	//ȫ����Ϣ
	switch(msg)
	{
		case top.E_SS_INVALID_SERVICE://invalid service
		case top.E_SS_SCRAMBLED_PROGRAM:// screamble
		case top.E_SS_CH_BLOCK:// channel lock
		case top.E_SS_PARENTAL_BLOCK://parental lock
		case top.E_SS_AUDIO_ONLY://audio only
		case top.E_SS_DATA_ONLY://data only
		case top.E_SS_COMMON_VIDEO:// service ready
		case top.E_SIGNAL_UNLOCK://unlock
		case top.E_PVR_NO_SIGNAL:
		case top.E_SIGNAL_LOCK://lock
		case top.E_DLNA_DMR_PUSH_MOVIE://dmr push movie
		case top.E_DLNA_DMR_PUSH_MUSIC://dmr push music
		case top.E_DLNA_DMR_PUSH_PICTURE:
		case top.E_DLNA_DMR_PUSH_KODI:
		case top.E_DLNA_DMR_PUSH_YOUTUBE:
		case top.E_POWER_OFF_TIMER://power off timer
		case top.E_POWER_OFF_TIMER_EX:
		case top.E_BOOKING_PLAY_START://booking play start����ʱ��ĿԤ����ʱ���ѹ�����ȻҪ�����û���һЩ��̨�Ȳ���
		case top.E_BOOKING_PLAY_END://booking play end
		case top.E_BOOKING_RECORD_START://booking record start����ʱ¼��Ԥ���Ѿ����ڣ�������ȻҪ�����û���̨¼��
		case top.E_BOOKING_RECORD_END://booking record end
		case top.E_BOOKING_AHEAD_PLAY_START://booking ahead play start,���������̨���ѣ�һ����ǰ����
		case top.E_BOOKING_AHEAD_RECORD_START://booking ahead record start�������¼������,��һ����ǰ����
		case top.E_CI_OP_UPDATE_CHANNEL://CMD_UI_NOTIFY_OP_UPDATE_CHANNEL
		case top.E_CI_OP_UPDATE_NIT://CMD_UI_NOTIFY_OP_UPDATE_NIT
		case top.E_CI_DATA_READY://ci data ready
		case top.E_FACTORY_OSD_HIDE://for factory menu hide
		case top.E_FACTORY_INFORMATION_HIDE://for factory information menu hide
		case top.E_FACTORY_WARMUP_OFF://for warmup 
		case top.E_CHANNEL_CLEANED:
		case top.E_DTV_NIT_VERSION_CHANGED:
        case top.E_STR_SCREEN_OFF:
        case top.E_STR_SCREEN_ON:
		case top.E_FACTORY_SET_OSD_LANGUAGE:
			top.systemEventProc(evt);
			return;
		default:
			break;
	}
}

