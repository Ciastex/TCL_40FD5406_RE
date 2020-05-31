#! /bin/sh
#echo "parameter is $1" >> /tmp/error1.txt
echo "[1]$1">>/tmp/error1.txt
echo "[2]$2">>/tmp/error1.txt
echo "[3]$3">>/tmp/error1.txt

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
mounted=`mount | grep $1 | cut -d ' ' -f 3`

# mounted, assume we umount
#if [ ! -z $mounted ]; then
if [ $2 == "remove" ] || [ $2 == "change" ]; then
echo "R$mounted, 1111111" >>/tmp/error1.txt
	if ! umount "/dev/$1"; then
	if ! umount -l "/dev/$1"; then
	echo "F/dev/$1, 77777" >>/tmp/error1.txt
	echo " " > /etc/usbpath
	exit 1
	fi
	fi
	if ! rmdir "/media/$1"; then
	exit 1
	fi
# not mounted, lets mount under /media
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
#echo "A/media/$dir 22222">>/tmp/error1.txt
#echo "mkdir -p /media/$dir">>/tmp/error1.txt	
	if ! mkdir "/media/$dir"; then
#echo "mkdir fail" 2>& 1 >>/tmp/error1.txt	
	exit 1
	fi

#echo "dir is $dir" >> /tmp/error1.txt
	#if ! mount -t ntfs "/dev/$1" "/media/$dir"; then
#echo "! mount -t ntfs /dev/$1 /media/$dir" >>/tmp/error1.txt
  if ! mount -t ext4 "/dev/$1" "/media/$dir"; then
	if ! ntfs-3g "/dev/$1" "/media/$dir"; then
		#if ! mount -t vfat "/dev/$1" "/media/$dir"; then
#echo "! mount -t vfat /dev/$1 /media/$dir" >>/tmp/error1.txt
#		if ! mount -t vfat -o iocharset=iso8859-1,utf8 "/dev/$1" "/media/$dir"; then
			# failed to mount, clean up mountpoint
#echo "! mount -t vfat /dev/$1 /media/$dir" >>/tmp/error1.txt
    if ! mount -t vfat -o iocharset=iso8859-1,utf8,shortname=winnt "/dev/$1" "/media/$dir"; then
      # failed to mount, clean up mountpoint
			if ! rmdir "/media/$dir"; then
#echo "rmdir /media/$dir">>/tmp/error1.txt			
				exit 1
			fi
			exit 1
		fi
	fi
	fi
	echo "A/media/$dir" >> /tmp/usbmnt.log
	echo "A/media/$dir" > /tmp/fifo.1
	echo "/media/$dir"  > /etc/usbpath
fi
exit 0
