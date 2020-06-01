#!/bin/sh
emmc_dir=rdqs_log
if [ -d "/mtd_rwarea/$emmc_dir" ]; then
    echo "The /mtd_rwarea/rdqs_log exists."
else
    echo "Directory /path/to/dir does not exists."
    mkdir /mtd_rwarea/$emmc_dir
    sync
fi
emmc_phase_scan
