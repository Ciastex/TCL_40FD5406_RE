echo "insmod usb modules begin"
#cd modules
insmod usb-common.ko
insmod usbcore.ko
insmod usb-storage.ko
insmod ehci-hcd.ko

mdev -s

echo "insmod usb modules finish"