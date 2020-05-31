echo "insmod bluetooth modules begin"
#cd modules
insmod bluetooth.ko
#insmod btusb.ko
insmod rfcomm.ko
insmod bnep.ko
insmod hidp.ko
insmod rtk_btusb.ko

#for bluetooth
mkdir /var/run/dbus
#/system/dbus-daemon --config-file=/system/etc/bluetooth/dbus-1/system.conf
#/system/bluetoothd &
#zengqz add run bluez
#export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/system/lib/pulse-6.0/modules:/system/lib/btlib
#echo $LD_LIBRARY_PATH
/system/dbus/bin/dbus-daemon --system &
#/system/dbus/bin/dbus-daemon --config-file=/system/etc/bluetooth/dbus-1/system.conf &
#/system/bluez/bin/bluetoothd -n -d &
#/system/bluez/bin/hciconfig hci0 up &

export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/system/lib/pulse-6.0/modules:/system/lib/btlib
echo "insmod bluetooth modules finish"

#export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/system/lib/pulse-6.0/modules
echo "Run PulseAudio begin"
/system/bluez/bin/bluetoothd -n -d &
/system/pulseaudio/bin/pulseaudio -n --log-level=3 --dl-search-path=/system/lib/pulse-6.0/modules/ --file=/etc/pulse/system.pa --system &

#/system/bluez/bin/bluetoothd -n -d &