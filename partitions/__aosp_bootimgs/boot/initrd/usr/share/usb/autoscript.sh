#! /bin/sh
#echo "parameter is $1" >> /tmp/error1.txt
#exit 1
#echo "[1]$1">>/tmp/error1.txt
#echo "[2]$2">>/tmp/error1.txt
#echo "[3]$3">>/tmp/error1.txt

if [ "$1" == "" ]; then
#echo "parameter is none" > /tmp/error1.txt
exit 1
fi

## YMK Add for re-entrace sda of sda1
echo $1 | grep "sd[a-zA-Z][0-9]\+" && ISSDA=0 || ISSDA=1
if [ $ISSDA == 1 ]; then
	ls /sys/block/$1/ | grep "sd[a-zA-Z][0-9]\+" && exit 1
#	exit 1
fi
#mounted=`mount | grep $1 | cut -d ' ' -f 3`

# mounted, assume we umount
#if [ ! -z $mounted ]; then
if [ $2 == "remove" ] || [ $2 == "change" ]; then
# not mounted, lets mount under /media

#KILL all process of irgenerator when unplug usb disk	
	pid=$(ps -ef | grep "IR_GEN" | grep -v grep | awk '{print $1}')
	echo "autorun pid: $pid" >> /tmp/error1.txt	
	kill $pid

    pid=$(ps -ef | grep "irgenerator" | grep -v grep | awk '{print $1}')
	echo "irgenrator pid: $pid"	 >> /tmp/error1.txt
	kill $pid
fi

# check whether it is extended partition or not, if yes, then not to mount
if [ `cat /sys/class/block/$1/size` -lt 50 ]; then
  echo "$1 is extended, no need to mount" >>/tmp/error1.txt
  exit 1
fi

if [ $2 == "add" ] || [ $2 == "change" ]; then
	if [ -z "$3" ];then
		dir=$1
	else
		dir=$3
	fi
	
	#Sleep for middle ware mount the usb disk
	sleep 5
	
	#usb autorun checking for ir generator
	usb_autorun_flag="AUTORUN"
	if [ -f "/mnt/usb/$dir/IR_GEN/${usb_autorun_flag}" ] ; then
	  echo "now run irgenerator" >> /tmp/error1.txt
	  chmod 755 /mnt/usb/$dir/IR_GEN/${usb_autorun_flag}
	  /mnt/usb/$dir/IR_GEN/${usb_autorun_flag} "/mnt/usb/$dir/IR_GEN" 1>/dev/console
	else
		echo "no autorun" >> /tmp/error1.txt
	fi
	
fi

exit 0
