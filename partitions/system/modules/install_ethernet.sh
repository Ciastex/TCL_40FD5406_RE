echo "insmod ethernet modules begin"
#cd modules
insmod ntkethmac.ko

MAC_FILE='/impdata/mac.bin'

if [ -f $MAC_FILE ]; then
    MAC_ADDR=`od -An -N6 -tx1 $MAC_FILE | sed  's/ /:/g'`
    MAC_ADDR=${MAC_ADDR#:}
else
    MAC_ADDR='00:A0:C5:00:00:01'
fi

ifconfig eth0 down
ifconfig eth0 hw ether $MAC_ADDR
echo "insmod ethernet modules finish"

ifconfig eth0 up

#udhcpc -ieth0 > /tmp/udhcpc_result.log &
