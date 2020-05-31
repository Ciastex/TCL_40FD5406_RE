export GST_PLAYER_PATH=/system/tplayer
export PATH=${GST_PLAYER_PATH}/bin:$PATH
export LD_LIBRARY_PATH=/tvos/libBionic:${GST_PLAYER_PATH}/lib:${GST_PLAYER_PATH}/lib/gstreamer-1.0:$LD_LIBRARY_PATH
export GST_PLUGIN_PATH=/system/tplayer/lib/gstreamer-1.0/

mkdir /tmp/tplayer

if [ -e "/tmp/tplayer/fuse.ko" ];
then
ls /tmp/tplayer/fuse.ko -l
else
ln -s /basic/modules/fuse.ko /tmp/tplayer/fuse.ko
fi

if [ -e "/tmp/tplayer/ntfs-3g" ];
then
ls /tmp/tplayer/ntfs-3g -l
else
ln -s /bin/ntfs-3g /tmp/tplayer/ntfs-3g
fi