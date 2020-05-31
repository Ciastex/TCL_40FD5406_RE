#!/bin/sh

IFNAME=$1
CMD=$2

echo "IFNAME=$IFNAME"
echo "CMD=$CMD"

kill_daemon() {
    NAME=$1
    PF=$2

    if [ ! -r $PF ]; then
        return
    fi

    PID=`cat $PF`
    if [ $PID -gt 0 ]; then
        if ps $PID | grep -q $NAME; then
            kill $PID
        fi
    fi
    rm $PF
}

if [ "$CMD" = "P2P-PROV-DISC-PBC-REQ" ]; then
/system/nscreen/bin/wpa_cli_auto -ip2p1 wps_pbc any
sleep 1
fi

if [ "$CMD" = "AP-STA-CONNECTED" ]; then
    ifconfig p2p1 192.168.179.1 up
    /system/nscreen/dhcpd/dhcpd -cf /system/nscreen/dhcpd/dhcpd.conf -lf /tmp/dhcpd.leases p2p1
    sleep 1
fi

if [ "$CMD" = "AP-STA-DISCONNECTED" ]; then
    kill_daemon /system/nscreen/dhcpd/dhcpd /var/run/dhcpd.pid
    ifconfig p2p1 0.0.0.0
    sleep 1
fi

if [ "$CMD" = "P2P-CROSS-CONNECT-ENABLE" ]; then
    GIFNAME=$3
    UPLINK=$4
    # enable NAT/masquarade $GIFNAME -> $UPLINK
    iptables -P FORWARD DROP
    iptables -t nat -A POSTROUTING -o $UPLINK -j MASQUERADE
    iptables -A FORWARD -i $UPLINK -o $GIFNAME -m state --state RELATED,ESTABLISHED -j ACCEPT
    iptables -A FORWARD -i $GIFNAME -o $UPLINK -j ACCEPT
    sysctl net.ipv4.ip_forward=1
fi

if [ "$CMD" = "P2P-CROSS-CONNECT-DISABLE" ]; then
    GIFNAME=$3
    UPLINK=$4
    # disable NAT/masquarade $GIFNAME -> $UPLINK
    sysctl net.ipv4.ip_forward=0
    iptables -t nat -D POSTROUTING -o $UPLINK -j MASQUERADE
    iptables -D FORWARD -i $UPLINK -o $GIFNAME -m state --state RELATED,ESTABLISHED -j ACCEPT
    iptables -D FORWARD -i $GIFNAME -o $UPLINK -j ACCEPT
fi

echo "exit p2p-action-udhcp.sh"

