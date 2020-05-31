core_dir=`cat /proc/self/mountstats | grep "/mnt/usb/sd*" | cut -d' '  -f5 | head -n1`
if [ "$core_dir" != "" ];then
LOG=${core_dir}/memfree.log
else
LOG=/data/memfree.log
fi
[ -f $LOG ] && rm $LOG -f
while [ 1 ]; do
    echo 3 > /proc/sys/vm/drop_caches
    cat /proc/meminfo | grep MemFree >> $LOG
    sync
    sleep 5
done