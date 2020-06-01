#!/bin/sh
if [ ! -d "/dev/nvt-part-name" ]; then
	mkdir -p /dev/nvt-part-name
fi

if [ "$2" != add ]; then
	exit 0
fi

#for ubiblock case

