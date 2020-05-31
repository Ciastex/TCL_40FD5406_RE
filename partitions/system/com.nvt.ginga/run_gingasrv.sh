
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$PWD:$PWD/lib:/system:/system/lib:/system/lib/dfb:/system/lib/nlib:/system/lib/libs:/tvos/libGlibc:/system/lib/gstreamer:/system/lib/gstreamer/gstreamer-1.0
export DFBHOME='/system/etc/mp'
export DFBLIBS='/system/lib/dfb/directfb-1.7-1'


export GST_PLUGIN_PATH_1_0=/system/lib/gstreamer/gstreamer-1.0
export GST_REGISTRY_1_0=/tmp/gst-registry.bin
export GST_REGISTRY_FORK=no
export GST_OMX_CONFIG_DIR=/system
#export GST_PLUGIN_SCANNER=$PWD/lib/gstreamer/libexec/gstreamer-1.0/gst-plugin-scanner
export PATH=$PATH:/system/lib/gstreamer/bin
export ALSA_CONFIG_PATH=/system/etc/alsa.conf
export GST_MEDIA_CODEC_PATH=/system/media_codecs.xml
export GIO_MODULE_DIR="/system/lib/gstreamer/gio/modules"
#export GST_DEBUG=2
#export GST_DEBUG_MEMORY_LEAK=yes
#export GST_DEBUG=libav:7,omx*:7
#export GST_DEBUG_FILE=/mnt/usb/sda1/gst.log 
export G_SLICE=always-malloc



curdir=$PWD
mkdir /mtd_apexe/board/lib/ginga_tqtvd  -p 
cd /mtd_apexe/board/lib/ginga_tqtvd
ln -sf $curdir/lib /mtd_apexe/board/lib/ginga_tqtvd
cd $curdir
./ginga_sp

