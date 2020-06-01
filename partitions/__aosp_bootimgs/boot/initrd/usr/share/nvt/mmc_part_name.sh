#!/bin/sh
if [ ! -d "/dev/nvt-part-name" ]; then
	mkdir -p /dev/nvt-part-name
fi

if [ "$2" != add ]; then
	exit 0
fi

DEVNAME=$(echo $1 | grep 'mmcblk0')

if [ -n "$DEVNAME" ]; then

	PNAME=$(cat /sys/block/mmcblk0/$1/uevent | grep 'PARTNAME=')
	PNAME=${PNAME##'PARTNAME='}
	PNAME=${PNAME##'\n'}
	if [ -n "$PNAME" ]; then
		ln -sf /dev/$1 /dev/nvt-part-name/"$PNAME"
	fi
fi


