echo "insmod usb modules begin"
#cd modules
insmod usb-common.ko
insmod usbcore.ko
insmod usb-storage.ko
insmod ehci-hcd.ko
insmod usbhid.ko
#mdev -s

echo "insmod usb modules finish"

echo "insmod wifi modules begin"
insmod cfg80211.ko
insmod mtprealloc.ko
insmod mt7603u_sta.ko
echo "insmod wifi modules finish"
