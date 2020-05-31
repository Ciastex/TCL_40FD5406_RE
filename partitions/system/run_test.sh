echo "[BOOT] Jun testmain start"
export DFBHOME=$PWD/etc/mp                
export DFBLIBS=$PWD/lib/dfb/directfb-1.7-1
export PANEL_WIDTH=1920                                                                    
export PANEL_HEIGHT=1080

export GST_PLUGIN_PATH_1_0=$PWD/lib/gstreamer/gstreamer-1.0
export GST_REGISTRY_1_0=/tmp/gst-registry.bin
export GST_REGISTRY_FORK=no
export GST_OMX_CONFIG_DIR=$PWD
export GST_PLUGIN_SCANNER=$PWD/lib/gstreamer/libexec/gstreamer-1.0/gst-plugin-scanner
export PATH=$PATH:$PWD/lib/gstreamer/bin
export ALSA_CONFIG_PATH=$PWD/etc/alsa.conf
export GST_MEDIA_CODEC_PATH=$PWD/media_codecs.xml
export GIO_MODULE_DIR=$PWD/lib/gstreamer/gio/modules
export GST_OPEN_DRM=1

export LD_LIBRARY_PATH=$PWD/fpp_test:$PWD/lib/:$PWD/lib/dfb:$PWD/lib/nlib:$PWD/lib/libs:$PWD/lib/gstreamer:$PWD/lib/gstreamer/gstreamer-1.0
export LD_PRELOAD="$PWD/lib/libNDAL.so $PWD/lib/libNDAL_EX.so $PWD/lib/libesplyrclient.so $PWD/lib/libesplyrsrv.so $PWD/lib/libs/libz.so.1 $PWD/lib/nlib/libnpc.so $PWD/lib/libs/libjpeg.so.9 $PWD/lib/libs/libpng16.so.16 $PWD/lib/nlib/libnpc.so $PWD/lib/gstreamer/libgstreamer-1.0.so.0 $PWD/lib/libdrm.so.2 $PWD/lib/libv4l2.so.0 $PWD/lib/libs/libasound.so $PWD/lib/libs/libtinycompress.so $PWD/lib/gstreamer/gstreamer-1.0/libgstnvtsink.so $PWD/lib/libnteec.so"
#export LD_LIBRARY_PATH=$PWD/fpp_test:$PWD/lib:$PWD/lib/dfb:$PWD/lib/atsc:$PWD/lib/nlib:$PWD/lib/libs:$PWD/lib/client:$PWD/com.nvt.nflx/lib:$PWD/lib/gstreamer:$PWD/lib/gstreamer/gstreamer-1.0:$PWD/com.nvt.ntts/lib:$PWD/com.nvt.wfdapp/lib:$PWD/com.nvt.p2pmgr/lib
#export LD_PRELOAD="$PWD/lib/libesplyrclient.so $PWD/lib/libesplyrsrv.so $PWD/lib/libs/libz.so.1 $PWD/lib/libs/libjpeg.so.9 $PWD/lib/libs/libpng16.so.16 $PWD/lib/nlib/libnpc.so $PWD/lib/gstreamer/libgstreamer-1.0.so.0 $PWD/lib/libdrm.so.2 $PWD/lib/libv4l2.so.0 $PWD/lib/libs/libasound.so $PWD/lib/libs/libtinycompress.so $PWD/lib/gstreamer/gstreamer-1.0/libgstnvtsink.so $PWD/lib/libnteec.so"
cd /system/fpp_test
./testmain ./libfpptestcase.so