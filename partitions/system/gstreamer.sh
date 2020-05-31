export GA_BUF_SIZE=0x3500000
echo 4 > /proc/sys/vm/min_free_order_shift
echo 65536 > /proc/sys/vm/min_free_kbytes
echo 49152 > /proc/sys/vm/extra_free_kbytes

# coredump enable
echo "[BOOT] run.sh start"


# insert ko
export NVT_DTB_PATH=$PWD/modules/memory.dtb
cd modules                           
./install_fpga.sh
cd ../

echo "run.sh call install_fpga.sh finish"

ulimit -c unlimited
echo "run.sh ulimit -c unlimited finish"

# debug message level
# dmesg -n 8

pwd | grep -q "/media"
if [ $? == 0 ]; then
    echo "---------------------------------------------"
    echo "@ USB"
    echo "   --> create symbol link /mtd_apexe/mtd_usb to $PWD" 
    echo "   --> create new app configure (nvt.app.ini.usb)" 
    echo "---------------------------------------------"
    rm /mtd_apexe/mtd_usb
    ln -sf $PWD /mtd_apexe/mtd_usb
    cd /mtd_apexe/mtd_usb
    cp -f $PWD/data/nvt.app.ini $PWD/data/nvt.app.ini.usb
    sync
    NVT_APP_INI=$PWD/data/nvt.app.ini.usb

elif [ $PWD == "/mtd_apexe" -o $PWD == "/mtd_apexe0" ]; then
    NVT_APP_INI=$PWD/data/nvt.app.ini

else
    echo "---------------------------------------------"
    echo "@ OTHER (default : /mtd_apexe)"
    echo "   --> create new app configure (nvt.app.ini.tmp)" 
    echo "---------------------------------------------"
    cp -f $PWD/data/nvt.app.ini $PWD/data/nvt.app.ini.tmp
    sync
    NVT_APP_INI=$PWD/data/nvt.app.ini.tmp
fi


echo "run.sh cp nvt.app.ini finish"

# environment
export DFBHOME=$PWD/etc/sp
export DFBLIBS=$PWD/lib/dfb/directfb-1.7-1
export LD_LIBRARY_PATH=$PWD/lib:$PWD/lib/dfb:$PWD/lib/atsc:$PWD/lib/nlib:$PWD/lib/libs:$PWD/com.nvt.nflx/lib:$PWD/lib/gstreamer:$PWD/lib/gstreamer/gstreamer-1.0
export LD_PRELOAD="$PWD/lib/libDrv.so $PWD/lib/libdev.so $PWD/lib/libs/libz.so.1 $PWD/lib/libs/libjpeg.so.9 $PWD/lib/libs/libpng16.so.16 $PWD/lib/nlib/libnpc.so $PWD/lib/gstreamer/libgstreamer-1.0.so.0" 
export GST_PLUGIN_PATH_1_0=$PWD/lib/gstreamer/gstreamer-1.0
export GST_REGISTRY_1_0=/tmp/gst-registry.bin
export GST_REGISTRY_FORK=no
export GST_OMX_CONFIG_DIR=$PWD
export GST_PLUGIN_SCANNER=$PWD/lib/gstreamer/libexec/gstreamer-1.0/gst-plugin-scanner
export PATH=$PATH:$PWD/lib/gstreamer/bin
export ALSA_CONFIG_PATH=$PWD/etc/alsa.conf
export GST_MEDIA_CODEC_PATH=$PWD/media_codecs.xml
export GST_OPEN_DRM=1
export VALGRIND_LIB=/mtd_apexe/board/valgrind/lib/
#export GST_DEBUG=2
#export GST_DEBUG_MEMORY_LEAK=play-times:5,size:2040,size-times:11

# for novatek
export NVT_FONT_DIR=$PWD/fonts
export NVT_NAM_DEBUG=1 # 1.error(default), 2.error/warning, 3.error/warning/message, 4.error/warning/message/debug, 5.error/warning/message/debug/trace
export NVT_NPC_DEBUG=1 # 1.error(default), 2.error/warning, 3.error/warning/message, 4.error/warning/message/debug, 5.error/warning/message/debug/trace
export NVT_NETWORK_FUN=1
# export NVT_MIRACAST=1
# export NVT_YOUTUBE=1
# export NVT_OPERA_TV=1
export NVT_DLNA=1

# for directfb
#export DFB_CLEAR_FB=2
export PANEL_WIDTH=1920
export PANEL_HEIGHT=1080
#export DFB_PALETTE_LAYER=2
#export NVT_MMAP_PATH="$PWD/nvt_mmap.conf"


echo "run.sh export finish"
export WIFI_CONF_DIR=/mtd_apdat/wifi
$PWD/script_network.sh &


insmod $PWD/modules/fusion.ko
echo "run.sh insmod fusion.ko finish"

mkdir /dev/shm
mount tmpfs /dev/shm -t tmpfs
echo "run.sh mount tmpfs finish"


#MALI_MINOR=`grep mali /proc/misc |cut -c 1-3`
#echo "MALI-MINOR=" $MALI_MINOR
#mknod /dev/mali      c 10 $MALI_MINOR

#UMP_NODE=`grep ump /proc/devices |cut -c 1-3`
#mknod /dev/ump      c $UMP_NODE	0


if [ $PWD == "/mtd_apexe" -o $PWD == "/mtd_apexe0" ]; then
    if [ "$(grep -ci module-dir=$DFBLIBS $DFBHOME/.directfbrc)" == "0" ]; then
        sed -i "s|module-dir.*$|module-dir=$DFBLIBS|" $DFBHOME/.directfbrc                                                                                              
        sync
    fi                                                                                                                                                
else                                                                                                                                                
    sed -i "s|/mtd_apexe/|$PWD/|" $NVT_APP_INI                                                                                                      
    sed -i "s|module-dir.*$|module-dir=$DFBLIBS|" $DFBHOME/.directfbrc                                                                              
    sync                                                                                                                                            
fi  

#remove this when rootfs update
#CHECK_APDAT=`stat /mtd_rwarea/apdat | grep File`

#if test "$CHECK_APDAT" = ""
#then
#     mkdir /mtd_rwarea/apdat
#fi

chmod +x amixer
./amixer -c 0 cset name='main out source select' 'MM';
./amixer -c 0 cset name='main out mute' 0
./amixer -c 0 cset name='spdif out gain' 100
./amixer -c 0 cset name='spdif out mute' 0

chmod +x /mtd_apexe/board/lib/gstreamer/bin/nvt-mmplayer
#$PWD/com.nvt.preproc/com.nvt.preproc --keymap=$PWD/data/nvt.key.nec.ini
#$PWD/com.nvt.preproc/com.nvt.preproc --keymap=$PWD/data/nvt.key.rc6.ini
#echo "run.sh call com.nvt.preproc"
#$PWD/com.nvt.preproc/com.nvt.preproc --keymap=$PWD/data/n22.key.rc6.ini
#echo "[BOOT] run.sh call com.nvt.idtv"
#$PWD/com.nvt.idtv/com.nvt.idtv
