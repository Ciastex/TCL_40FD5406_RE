#!/bin/sh

while true
do
	sleep 2
	pid=`ps -ef | grep "ginga_sp" | grep -v "grep" | awk '{print $1}'`
	if [ -z "$pid" ]
	then
		echo "Ginga server has died"
		/system/com.nvt.ginga/ginga_sp &
		break
	fi
done