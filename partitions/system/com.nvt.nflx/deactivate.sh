#!/bin/sh

#echo "--------------------------------------------------------"
#echo " Deactivation SCRIPT for NETFLIX"
#echo "--------------------------------------------------------"
#echo " NF_DATA_DIR  = $NF_DATA_DIR"
#echo " NF_WDATA_DIR = $NF_WDATA_DIR"
#echo "--------------------------------------------------------"
rm -rf $NF_WDATA_DIR
mkdir -p $NF_WDATA_DIR/dpi/playready/storage
sync
#sleep 5

#echo "--------------------------------------------------------"
#echo " ---> DONE !!!!"
#echo "--------------------------------------------------------"
