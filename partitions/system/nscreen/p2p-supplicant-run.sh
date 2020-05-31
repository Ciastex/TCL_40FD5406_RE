#!/bin/sh
#export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/system/lib/libs
/system/nscreen/bin/wpa_supplicant -Dnl80211 -iwlan0 -c /system/nscreen/wpa.conf -N -Dnl80211 -t -ip2p0 -c /data/wifi/p2p.conf -puse_p2p_group_interface=1 &
