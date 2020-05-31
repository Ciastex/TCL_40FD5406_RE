#!/bin/bash
#Launch script for each app

export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:../../../engine
export NODE_PATH=.:../../lib:../../srv/decompress:../../srv/xmllite:../../srv:../../../engine:$NODE_PATH
mkdir -p /tmp/astronav
rm -rf /tmp/astronav/*

if [ ! -f ../../../system/astronav ]; then
	export ASTRONAV_BINARY=node
else
	export ASTRONAV_BINARY=astronav
fi

#PRODUCTION MODE:
while true; do {
    UV_THREADPOOL_SIZE=12 `../../../system/${ASTRONAV_BINARY} --expose-gc bundle.js` 2>&1 /dev/null
    if [ $? == 145 ]; then
        echo "RECEIVED SOFT REBOOT..."
        killall ${ASTRONAV_BINARY} # Soft reboot by user action (SIGUSR2)
    else
        exit # Crash or other kind of abnormal termination
    fi
} done

#DEBUG MODE:
#ulimit -c unlimited
#echo "/data/core-globoplay" > /proc/sys/kernel/core_pattern
#UV_THREADPOOL_SIZE=12 `../../../system/${ASTRONAV_BINARY} --expose-gc bundle.js`

