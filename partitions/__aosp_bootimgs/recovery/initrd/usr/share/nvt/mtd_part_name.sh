#!/bin/sh
if [ ! -d "/dev/nvt-part-name" ]; then
	mkdir -p /dev/nvt-part-name
fi

if [ "$2" != add ]; then
	exit 0
fi

DEVNAME=$(echo $1 | grep 'mtd')

if [ -n "$DEVNAME" ]; then

	PNAME=$(cat /sys/class/mtd/$1/name)
	if [ -n "$PNAME" ]; then
		ln -sf /dev/$1 /dev/nvt-part-name/mtd_$PNAME
	fi
fi


