#!/bin/sh
echo 0 > /sys/block/mmcblk0boot1/force_ro
echo "0000" > /dev/mmcblk0boot1

