#insmod $PWD/modules/8812au.ko ifname=wlan0 if2name=p2p0

#mkdir -p /lib/modules
#rm -rf /lib/modules/8812au.ko
#ln -s $PWD/modules/8812au.ko /lib/modules/8812au.ko

#rm -rf /sbin/wpa_supplicant
#ln -s $PWD/wpa_supplicant /sbin/wpa_supplicant

insmod $PWD/modules/cfg80211.ko 
insmod $PWD/modules/mac80211.ko 

mkdir -p /var/run/sockets
mkdir -p $WIFI_CONF_DIR

if [ -f $WIFI_CONF_DIR/wpa_supplicant.conf ]
then
    echo "wpa-exit"
else
    echo "wpa-copy"
    cp $PWD/etc/wpa_supplicant.conf $WIFI_CONF_DIR/wpa_supplicant.conf
fi

cp $PWD/etc/p2p_supplicant.conf $WIFI_CONF_DIR/p2p_supplicant.conf
cp $PWD/etc/udhcpd-p2p.conf $WIFI_CONF_DIR/udhcpd-p2p.conf
cp $PWD/com.nvt.wfdapp/nvt.dat /tmp

#start wpa_supplicant and p2pd for wfd app
#wpa_supplicant -B -ip2p0 -Dnl80211 -c/$WIFI_CONF_DIR/p2p_supplicant.conf >/dev/null 2>&1 
#-N -iwlan0 -Dnl80211 -c/$WIFI_CONF_DIR/wpa_supplicant.conf
