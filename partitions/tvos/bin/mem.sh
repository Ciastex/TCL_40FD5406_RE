LOG=memfree.log
[ -f $LOG ] && rm $LOG -f
while [ 1 ]; do
    echo 3 > /proc/sys/vm/drop_caches
    cat /proc/meminfo | grep MemFree >> $LOG
    sync
    sleep 5
done