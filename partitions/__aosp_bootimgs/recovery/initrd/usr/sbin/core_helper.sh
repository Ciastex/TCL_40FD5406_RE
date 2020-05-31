#!/bin/sh


log_file="/dev/console"
log_print()
{
  echo $*  >> ${log_file} 
}

time_stamp=`date "+%Y%m%d%H%M%S"`
core_name="core_$1-$2-$3_${time_stamp}"
core_dir="`cat /proc/self/mountstats | grep "/media/sd*" | cut -d' '  -f5 | head -n1`"

if [ -z "${core_dir}" ] ; then
  log_print "can not find available udisk" 
  log_print "Please insert usb stick for save coredump file!!!!!!!"
  while [ -z "${core_dir}" ]
  do
    core_dir="`cat /proc/self/mountstats | grep "/media/sd*" | cut -d' '  -f5 | head -n1`"
¡@¡@sleep 1
  done 
fi

core_path="${core_dir}/${core_name}"



log_print "" 
log_print "save coredump : `date` : ${core_path}" 
exec cat -  >  ${core_path} 
#gzip - >  ${core_path}.gz 
