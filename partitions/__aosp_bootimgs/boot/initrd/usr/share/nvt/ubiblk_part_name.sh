#!/bin/sh
if [ ! -d "/dev/nvt-part-name" ]; then
	mkdir -p /dev/nvt-part-name
fi

if [ "$2" != add ]; then
	exit 0
fi

DEVNAME=$(echo $1 | grep 'ubiblock')

if [ -n "$DEVNAME" ]; then

	BNAME=${DEVNAME/ubiblock/ubi}
	PNAME=$(cat /sys/class/ubi/$BNAME/name)
	if [ -n "$PNAME" ]; then
		ln -sf /dev/$1 /dev/nvt-part-name/ubiblk_$PNAME
	fi
fi


