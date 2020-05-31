echo "[BOOT] recovery run.sh start"
export GA_BUF_SIZE=0x3100000
export CWD=$PWD
export KERDRV=/system/modules
export NVT_DTB_PATH=$KERDRV/memory.dtb



export DFBHOME=$PWD/etc/mp
export DFBLIBS=/lib/dfb/directfb-1.7-1
export LD_LIBRARY_PATH=$PWD/test:$PWD/lib:$PWD/lib/dfb:$PWD/lib/atsc:$PWD/lib/nlib:$PWD/lib/libs:$PWD/lib/client:$PWD/com.nvt.nflx/lib:$PWD/lib/gstreamer:$PWD/lib/gstreamer/gstreamer-1.0:$PWD/com.nvt.ntts/lib:$PWD/com.nvt.wfdapp/lib:$PWD/com.nvt.p2pmgr/lib
# for directfb
#export DFB_CLEAR_FB=2
export PANEL_WIDTH=1920
export PANEL_HEIGHT=1080
#export DFB_PALETTE_LAYER=2
#export NVT_MMAP_PATH="$PWD/nvt_mmap.conf"


echo "run.sh export finish"
echo "insmod kernel driver begin"
echo "cur folder $PWD"

#cd /lib/modules

insmod /lib/modules/PreInit.ko

echo "insmod kernel driver finish"

./lib/modules/install_usb.sh
