#!/bin/sh
chmod 777 /var
chmod 777 /tmp
export PATH=/system/bin:$PATH
export DFBHOME=/system/etc/mp                
export DFBLIBS=/system/lib/dfb/directfb-1.7-1

#export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/tvos/libGlibc:/system/lib:/system/lib/libs/:/system/lib/dfb/:/system/lib/gstreamer/:/system/lib/gstreamer/gstreamer-1.0
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/system/tbrowser/libs:/tvos/libGlibc:/system/lib:/system/lib/dfb:system/lib/atsc:/system/lib/nlib:/system/lib/libs:/system/lib/client:/system/com.nvt.nflx/lib:/system/lib/gstreamer:/system/lib/gstreamer/gstreamer-1.0:/system/com.nvt.ntts/lib:/system/com.nvt.wfdapp/lib:/system/com.nvt.p2pmgr/lib:/system/tplayer/lib:/system/nscreen/lib:/system/lib/btlib
export LD_PRELOAD="/system/lib/libs/libz.so.1 /system/lib/libs/libjpeg.so.9 /system/lib/libs/libpng16.so.16 /system/lib/nlib/libnpc.so /system/lib/libdrm.so.2 /system/lib/libv4l2.so.0 /system/lib/libs/libasound.so /system/lib/libs/libtinycompress.so /system/lib/libnteec.so /system/lib/libesplyrclient.so /system/lib/libesplyrsrv.so /system/lib/libs/libz.so.1 /system/lib/nlib/libnpc.so /system/lib/libs/libjpeg.so.9 /system/lib/libs/libpng16.so.16 /system/lib/nlib/libnpc.so /system/lib/gstreamer/libgstreamer-1.0.so.0 /system/lib/libdrm.so.2 /system/lib/libv4l2.so.0 /system/lib/libs/libasound.so /system/lib/libs/libtinycompress.so /system/lib/gstreamer/gstreamer-1.0/libgstnvtsink.so /system/lib/libnteec.so"

export TBROWSER_ROOT=/system/tbrowser
TBROWSER_CONFIG_PATH=/system/tbrowser/config
#export PANEL_WIDTH=1920                                                                    
#export PANEL_HEIGHT=1080

export F1_CONFIG=/tclconfig/json_sys.ini
#export MALLOC_RECORD=1

chmod 777 /system/lib/libfpp.so

#ifconfig lo up
#ifconfig eth0 192.168.0.22

#add coredump folder
#ulimit -c unlimited
#echo "1" > /proc/sys/kernel/core_uses_pid
#echo "/dev/null" > /proc/sys/kernel/core_pattern
chmod 777 logd
/tvos/bin/logd &
chmod 777 /tvos/bin/log_out
/tvos/bin/log_out -o &

echo "run tcl mw process start"
#chmod 777 /tvos/bin/sitatvservice	 
#chmod 777 /database 					
#chmod 777 /tvos/libGlibc/libsitatv.so
#mount -o rw,remount /system
#chmod 777 /system/bin/AudioShareService
#mount -o ro,remount /system			

# create EPG database in RAM
mkdir -p /userdata/epg -m 0777 root system
mount -t tmpfs -o size=32m,mode=0777 tmpfs /userdata/epg
touch /userdata/epg/EpgData.db
chmod 0666 /userdata/epg/EpgData.db

nice -n -19 /tvos/bin/sitatvservice &
sleep 1

path_launcher="/data/launcher"
path_launcher1="/data/launcher1"
path_launcher_images="/data/launcher/images"
path_launcher1_images="/data/launcher1/images"

#source /system/tbrowser2/run_weblauncher_server.sh &

/tvos/bin/appmanager --app-path=/system/apps:/system/tplayer --log=logcat --repeat-time=0-200 --recycle-size=75000-20000 --key-layout-file=/tvos/bin/keylayout.kl --enable-mouse=/system/tbrowser2/config/img/Mouse.png &

if [ ! -d "path_launcher" ]; then      
mkdir "$path_launcher"                 
fi
if [ ! -d "path_launcher1" ]; then      
mkdir "$path_launcher1"                 
fi
if [ ! -d "path_launcher_images" ]; then                          
mkdir "$path_launcher_images"                                     
fi
if [ ! -d "path_launcher1_images" ]; then                          
mkdir "$path_launcher1_images"                                     
fi

sum=0  
while [ ! -e /tmp/sita_service_ready ];
do
	sleep 0.5
    let "sum+=1"  
    if [ "$sum" -gt 10 ]  
    then   
        break  
    fi  
done
source /system/tbrowser2/run_weblauncher_server.sh &
#source /system/tplayer/envsetup.sh
#/system/bin/logwrapper /tvos/bin/sitatvservice &
#/system/tplayer/mediaserver &
#/system/bin/logwrapper /system/bin/AudioShareService &
#chmod 777 /tvos/bin/update_recovery
#/tvos/bin/update_recovery &
echo "run tcl mw process end"
ifconfig lo 127.0.0.1
cp /system/nscreen/nvt.dat /tmp
/system/nscreen/bin/nscreenService &  

#********************************************EU area boot does not start terminal management service Start********************************************#

#echo ---laixg11--- `pwd`
cd /data
#echo ---laixg22--- `pwd`
if [ -f "getClientType.txt" ]; then
	#echo ---laixg--- file exist!!
	rm getClientType.txt
fi	
#echo ---laixg--- file not exist!!
/tvos/bin/tcli tos.factory.get_system_info > getClientType.txt
getType=`awk '/Client type/{print}' getClientType.txt`
#echo ---laixg---getType = $getType
strTCLEU="TCL-EU-NT63EP-S1"
strTHMEU="THOM-EU-NT63EP-S1"
getTCLEU=$(echo $getType | grep "${strTCLEU}")
getTHMEU=$(echo $getType | grep "${strTHMEU}")
if [[ "$getTCLEU" != "" ]] || [[ "$getTHMEU" != "" ]]
then
	#echo ---laixg---EU
else
	#echo ---laixg--- not EU
	/tvos/bin/tvDiagnosisService &
fi
cd -
#echo ---laixg33--- `pwd`

#********************************************EU area boot does not start terminal management service End********************************************#


if [ ! -f "/data/mem.sh" ]; then                          
	cp mem.sh  /data/                                    
fi
