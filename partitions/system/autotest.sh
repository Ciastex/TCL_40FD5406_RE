#!/bin/sh
usb_autorun_flag="AUTORUN"

autoRun_on_usb() {
    if [ -f "/mnt/usb/sda1/IR_GEN/${usb_autorun_flag}" ] ; then
		echo "auto Run On usb"
		chmod 755 /mnt/usb/sda1/IR_GEN/${usb_autorun_flag}
		/mnt/usb/sda1/IR_GEN/${usb_autorun_flag} "/mnt/usb/sda1/IR_GEN/" 1>/dev/console
    else
        echo "No AutoRun Found"
    fi
}


ulimit -c 0

# enter loop to detect usb
is_changed=0
usb_find=0
while [ 1 ]
do
    usb_find=0
    for usb_path in `cat /proc/mounts | grep /mnt/usb/`
    do
        usb_path=${usb_path#*" "}
        usb_path=${usb_path%%" "*}

        if [ "${usb_path}" == "/mnt/usb/sda1" ]
        then
                if [ ${is_changed} -eq 0 ]
                then
                        autoRun_on_usb
                        is_changed=1
                fi
                usb_find=1
        #else
        #       is_changed=0
        fi
    done
    
    if [ ${usb_find} -eq 0 ]
    then
        #echo "usb not found"
        is_changed=0
    fi
    sleep 2

done