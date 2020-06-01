#!/bin/sh

#random read  /file level test
#fio --name fio_test_read  --direct=1 --rw=randread  --bs=4k --size=10M --numjobs=4 --runtime=360000 --group_reporting   --iodepth=4 --time_based=360000

#random write 
#fio --name fio_test_write --direct=1 --rw=randwrite --bs=4k --size=10M --numjobs=4 --runtime=360000 --group_reporting   --iodepth=4 --time_based=360000

#random read/write /file level
fio --name fio_test_randrw --direct=1 --rw=randrw --bs=4k --size=10M --numjobs=4 --runtime=360000 --group_reporting   --iodepth=4 --time_based=360000

#random read/write block level
#fio --filename=/dev/mmcblk0p12 --direct=1 --rw=randrw  --bs=4k --runtime=360000 --name=test --numjobs=4 --time_based=360000
