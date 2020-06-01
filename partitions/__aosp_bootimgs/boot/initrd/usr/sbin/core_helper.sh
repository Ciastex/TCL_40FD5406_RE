#!/bin/sh

log_file="/dev/console"

log_print()
{
  echo $*  >> ${log_file} 
}

usb_ready()
{
    if [ -z "`lsmod | grep "ehci_hcd "`" ] ; then
        log_print "usb driver not ready, install it!!!"
        cd /system/modules
        ./install_usb.sh
        cd -
    fi
}

time_stamp=`date "+%Y%m%d%H%M%S"`
task_pid="$2"
task_name="$3" 
core_name="core_${task_pid}_${time_stamp}"
core_dir="`cat /proc/self/mountstats | grep "/mnt/usb/sd*" | cut -d' '  -f5 | head -n1`"
pid_tcl_mw="`pidof sitatvservice`"

log_print ""
log_print "task_name : ${task_name}"  

cat /tmp/emeg.log >> ${log_file}

if [ -z "${core_dir}" ] ; then
  usb_ready
  log_print "can not find available udisk" 
  #log_print "Use data directory for save coredump file!!!!!!!"
  #core_dir="/data"
  log_print "Please insert usb stick for save coredump file!!!!!!!"
  while [ -z "${core_dir}" ]
  do
    core_dir="`cat /proc/self/mountstats | grep "/mnt/usb/sd*" | cut -d' '  -f5 | head -n1`"
  sleep 5
  log_print "please insert usb for save corefile !! .."
  done 
fi

gdb_cmd="/system/bin/gdb"
task_exe="/proc/${task_pid}/exe"

if [ -r "${task_exe}" ] ; then
  task_exec_path=`stat ${task_exe} -c"%N"  | cut -d' '  -f3 | tr -d \'`
fi

core_path="${core_dir}/${core_name}"

log_print "Start to save gz-core_name : ${core_path}.gz" 
gzip - >  ${core_path}.gz 
sync
log_print "Finished `date` : ${core_path}.gz" 

log_print "Start decompress : ....................."
cp ${core_path}.gz ${core_path}_tmp.gz
sync
gzip -d ${core_path}_tmp.gz
sync
log_print "Finished decompress."

if [ -r "${task_exec_path}" ] ; then
# backtrace after the coredump
  log_print "backtrace dump : ${task_exec_path} " 
  ${gdb_cmd}  -q --batch --ex "set height 0" --ex "bt"  ${task_exec_path}  ${core_path}_tmp   >> ${log_file} 
  rm -f ${core_path}_tmp
fi

#kill sitatvservice to reboot system
kill -9 $pid_tcl_mw
