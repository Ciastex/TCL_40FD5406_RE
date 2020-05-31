echo "[BOOT] run.sh start"
export GA_BUF_SIZE=0x3100000
#echo 4 > /proc/sys/vm/min_free_order_shift
#echo 65536 > /proc/sys/vm/min_free_kbytes
#echo 49152 > /proc/sys/vm/extra_free_kbytes

insmod $PWD/modules/fusion.ko
echo "run.sh insmod fusion.ko finish"

mkdir /dev/shm
mount tmpfs /dev/shm -t tmpfs
echo "run.sh mount tmpfs finish"

NF_CACHE=/data/com.nvt.nflx
mkdir -p ${NF_CACHE}/data/dpi/playready/storage
echo "run.sh mkdir storage finish"

mkdir -p /lib/firmware
mount --bind $PWD/firmware /lib/firmware
echo "run.sh mount /lib/firmware finish"
/tvos/bin/update_recovery &
#show boot logo.
echo "[BOOT] show boot logo"
cd bootlogo
./bootlogo -p 1712128@/dev/mmcblk0p1 -a 512 -f /nvtdata/bootlogo/bootlogo.jpg -t 5 -i 1 -b 145752064 -m 0 &
cd ../

# insert ko
export NVT_DTB_PATH=$PWD/modules/memory.dtb
export MALI_NOCLEAR=1
cd modules
insmod PreInit.ko &
insmod ntkdriver.ko \
gau32BufAddrSize=0x08b00000,0x02200000 \
gau32PlaneWinSize=1920,1080,1280,720,1280,720,256,256,256,256 \
gau32PlaneOrder=5,0 \
gu32NumOfBuffer=2 \
gu32FastLogoPlaneID=0

insmod ntkndpdrm.ko &
echo "1" > /tmp/ntkndpdrm_completed
                      
./install_fpga.sh &
./install_ethernet.sh &
./install_usb.sh &
cd ../
echo "run.sh call install_fpga.sh finish"

ulimit -c unlimited
echo "run.sh ulimit -c unlimited finish"

# debug message level
# dmesg -n 8

# environment
if [-f "/system/opera_home" ]; then
    cp /system/modules/opera.json /system/opera_home/
else
    mkdir /system/opera_home
    cp /system/modules/opera.json /system/opera_home/
fi
#cp /system/modules/opera.json /system/opera_home/
export WIFI_MODULES_PATH=$PWD/modules
export WPA_SUPPLICANT_PATH=$PWD
export MINIDLNA_PATH=$PWD/com.nvt.minidlna
export MINIDLNA_CONF_DIR=/mtd_apdat/minidlna
export FRAMEBUFFER_1=/dev/fb0
export FRAMEBUFFER_2=/dev/fb1
export FRAMEBUFFER_3=/dev/fb2

#export NF_LOAD_PATH=/tkconfig/nflx.idfile
export NF_DATA_DIR=$PWD/com.nvt.nflx/rodata
export NF_WDATA_DIR=${NF_CACHE}/data
export NF_EGL_DISPLAY_ID=2
export NF_MODEL_NAME=TCL_40D2900
export NFXHOME=$PWD/com.nvt.nflx/ 
export BCP47HOME=/data/bcp47.txt
export DFBHOME=$PWD/etc/mp
export DFBLIBS=$PWD/lib/dfb/directfb-1.7-1
export LD_LIBRARY_PATH=$PWD/lib:$PWD/lib/dfb:$PWD/lib/atsc:$PWD/lib/nlib:$PWD/lib/libs:$PWD/lib/client:$PWD/com.nvt.nflx/lib:$PWD/lib/gstreamer:$PWD/lib/gstreamer/gstreamer-1.0:$PWD/com.nvt.ntts/lib:/system/com.nvt.ginga:/system/com.nvt.ginga/lib
export LD_PRELOAD="$PWD/lib/libNDAL.so $PWD/lib/libNDAL_EX.so $PWD/lib/libs/libz.so.1 $PWD/lib/libs/libjpeg.so.9 $PWD/lib/libs/libpng16.so.16 $PWD/lib/nlib/libnpc.so $PWD/lib/libdrm.so.2 $PWD/lib/libv4l2.so.0 $PWD/lib/libs/libasound.so $PWD/lib/libs/libtinycompress.so $PWD/lib/libnteec.so"
export RESOULITON_ENV=1080P
export HOME=$PWD/etc/mp

export GST_PLUGIN_PATH_1_0=$PWD/lib/gstreamer/gstreamer-1.0
export GST_REGISTRY_1_0=/tmp/gst-registry.bin
export GST_REGISTRY_FORK=no
export GST_OMX_CONFIG_DIR=$PWD
#export GST_PLUGIN_SCANNER=$PWD/lib/gstreamer/libexec/gstreamer-1.0/gst-plugin-scanner
export PATH=$PATH:$PWD/lib/gstreamer/bin
export ALSA_CONFIG_PATH=$PWD/etc/alsa.conf
export GST_MEDIA_CODEC_PATH=$PWD/media_codecs.xml
export GIO_MODULE_DIR="/system/lib/gstreamer/gio/modules"
#export GST_DEBUG=2
#export GST_DEBUG_MEMORY_LEAK=yes
export G_SLICE=always-malloc

# for novatek
export APPMGRHOME=/system/com.nvt.appmgr/
export NVT_FONT_DIR=$PWD/fonts
export NVT_NAM_DEBUG=1 # 1.error(default), 2.error/warning, 3.error/warning/message, 4.error/warning/message/debug, 5.error/warning/message/debug/trace
export NVT_NPC_DEBUG=1 # 1.error(default), 2.error/warning, 3.error/warning/message, 4.error/warning/message/debug, 5.error/warning/message/debug/trace
export NVT_NETWORK_FUN=1
export NVT_MIRACAST=1
export NVT_YOUTUBE=1
export NVT_OPERA_TV=1
export NVT_DLNA=1
export NVT_NLOGGER_HOME=$PWD/
#for Youtube Vp9
export UVA_FORCE_ENABLED_TYPES="video/webm"
export OPERA_VIDEO_WIDTH=1920
export OPERA_VIDEO_HEIGHT=1080

#for mark the NPC PQ setting
#export GST_OPEN_DRM=1

# for directfb
#export DFB_CLEAR_FB=2
export PANEL_WIDTH=1920
export PANEL_HEIGHT=1080
#export DFB_PALETTE_LAYER=2
#export NVT_MMAP_PATH="$PWD/nvt_mmap.conf"

# Arguments for Netflix AMIXER
export NFLX_AMIXER_ARGS="name=channel0,mmap"

export WIFI_CONF_DIR=/mtd_apdat/wifi
export ATSC_CNAHHEL_DB=/userdata/ATSCChannelData.db3
export ATSC_EVENT_T_DB=/userdata/ATSC_event_t.db
export NVT_ATSC_NC_LIB=$PWD/com.nvt.atsc/libatscnpctv.so
export NVT_NLOGGER_HOME=$PWD/
export ATSC_MW_DB=/userdata/atsc/

echo "run.sh export finish"

#increase the maximum socket receive buffer for miracast
echo 721164 > /proc/sys/net/core/rmem_max



cd /system/modules
./install_bluetooth.sh &
#sh /system/autotest.sh &
cd ../
sleep 3
mkdir /mnt/usb/sda1 -p
mount /dev/sda1 /mnt/usb/sda1

echo "[BOOT] run.sh call com.nvt.appmgr"
NVT_APP_INI=/system/com.nvt.appmgr/nvt.app.ini
/system/com.nvt.appmgr/com.nvt.appmgr --applist=$NVT_APP_INI

