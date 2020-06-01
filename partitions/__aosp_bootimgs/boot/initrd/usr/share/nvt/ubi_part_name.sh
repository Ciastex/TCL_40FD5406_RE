#!/bin/sh
if [ ! -d "/dev/nvt-part-name" ]; then
	mkdir -p /dev/nvt-part-name
fi

if [ "$2" != add ]; then
	exit 0
fi

DEVNAME=$(echo $1 | grep 'ubi')

if [ -n "$DEVNAME" ]; then

	PNAME=$(cat /sys/class/ubi/$1/name)

	while [ -z "$PNAME" ]; do
		PNAME=$(cat /sys/class/ubi/$1/name)
	done
	if [ -n "$PNAME" ]; then
		ln -sf /dev/$1 /dev/nvt-part-name/$PNAME
	fi
fi


