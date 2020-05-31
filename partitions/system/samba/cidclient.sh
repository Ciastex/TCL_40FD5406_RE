#!/bin/sh

cleanup() {
    # Check if jobs builtin exists
    type jobs &>/dev/null
    if [ $? -ne 0 ]; then
        pids=$PID
    else
        pids="$(jobs -p) $PID"
    fi
    echo Killing $pids ...
    kill $pids

    sleep 2
    for p in $pids; do
        if [ -e /proc/$p ]; then
            echo "Process $p didn't exit yet, doing kill -9"
            kill -9 $p
        fi
    done
    exit
}

trap "cleanup" 0 1 2 3 6 9 15

##**************************************************************************##
##!!!!!!!!!!!!!!!!!!!!!!!!! IMPORTANT IMPORTANT !!!!!!!!!!!!!!!!!!!!!!!!!!!!##
######################### UPDATE THE VARIABLES BELOW #########################

# Set CIDCLIENT to be the path to the cidclient binary
# either here or passed in as an environment variable
CIDCLIENT="/system/samba/cidclient"

# Set ARGS to be any commands you want to pass to the cidclient. Note that
# arguments passed to this script (cidclient.sh) will also get passed to the
# cidclient binary so make sure you're only giving the argument in one place.
# IMPORTANT: Put the arguments INSIDE the quotes!
CIDCLIENT_HTTP_PORT=8080
ARGS="--httpport=$CIDCLIENT_HTTP_PORT"

# ONLY set this variable if the libraries for cidclient are not already on the
# LD_LIBRARY_PATH. Place additional paths after the ':' and inside the quotes
export LD_LIBRARY_PATH="/data/samba/cidclient/lib:/system/samba:\
/system/lib:$LD_LIBRARY_PATH"

##!!!!!!!!!!!!!!!!!!!!!!!!! IMPORTANT IMPORTANT !!!!!!!!!!!!!!!!!!!!!!!!!!!!##
######################## UPDATE THE VARIABLES ABOVE ##########################
##**************************************************************************##

if [ ! -d "/data/samba" ]; then
    mkdir -p "/data/samba"
fi

if [ -f "/data/samba/samba_debug" ]; then
    if [ -f "/data/samba/cidclient/bin/cidclient" ]; then
        CIDCLIENT="/data/samba/cidclient/bin/cidclient"
        run_num=0
        LOGFILE="/tmp/cidclient_${run_num}.log"
    fi
fi

if [ -z "$CIDCLIENT" ]; then
    echo "Specify path to cidclient binary by editing CIDCLIENT script variable"
    exit 1
fi


# These are all default values, they can also be set on the command line as
# environment variables

# seconds between checks
if [ -z "$INTERVAL" ]; then INTERVAL=20; fi
echo "Interval: $INTERVAL"
# kB at any check interval
if [ -z "$RSS_LIMIT" ]; then RSS_LIMIT=25000; fi
echo "RSS Limit: $RSS_LIMIT"
# minimum seconds to wait before relaunching process
if [ -z "$ORIG_BACKOFF_INTERVAL" ]; then ORIG_BACKOFF_INTERVAL=30; fi
echo "Orig backoff interval: $ORIG_BACKOFF_INTERVAL"
# maximum seconds to wait before relaunching process
if [ -z "$MAX_BACKOFF_INTERVAL" ]; then MAX_BACKOFF_INTERVAL=600; fi
echo "Max backoff interval: $MAX_BACKOFF_INTERVAL"

# current seconds to wait before relaunching process
# doubles on continuous failure until it reaches
# MAX_BACKOFF_INTERVAL. On success, it resets to
# ORIG_BACKOFF_INTERVAL
BACKOFF_INTERVAL=$ORIG_BACKOFF_INTERVAL

CONSECUTIVE=0  # Number of consecutive intervals the current cidclient process
               # has stayed alive.
PID=-1

# Propagate arguments to cidclient
if [ -f "/data/samba/samba_debug" ]; then
    CMDLINE="$CIDCLIENT $ARGS $1 $2 $3 $4 $5 &>$LOGFILE &"
else
    CMDLINE="$CIDCLIENT $ARGS $1 $2 $3 $4 $5 &>/dev/null &"
fi
echo "Command line:"
echo $CMDLINE

if [ ! -e /proc/$PID ]; then
    eval $CMDLINE
    PID=$!
    echo "PID = $PID"
fi

while true; do
    # Use sleep and wait in conjunction to allow this script to still respond to
    # signals
    sleep $INTERVAL &
    wait $!

    if [ ! -e /proc/$PID ]; then
        echo "Process $PID died"

        # TODO: Send cidclient log output to backend?

        if [ -z $RANDOM ]; then
            RAND=$BACKOFF_INTERVAL
        else
            RAND=$RANDOM
        fi

        if [ ! -z "$(which expr)" ]; then
            SLEEP=$(expr $RAND % $BACKOFF_INTERVAL)
        elif [ ! -z "$(which bc)" ]; then
            SLEEP=$(echo "$RAND % $BACKOFF_INTERVAL" | bc)
        else
            SLEEP=$BACKOFF_INTERVAL
        fi
        echo "Waiting for $SLEEP seconds to relaunch to prevent flood..."
        sleep $SLEEP &
        wait $!

        # Cidclient will restart if the platform is resuming from suspend.
        # In this case, we do not want to increase our sleep interval
        # (therefore do not change BACKOFF_INTERVAL).
        # NOTE: The suspend indicator filename MUST be the same as that's used
        # in the cidclient binary
        if [ ! -e /tmp/suspended ]; then
            # Double backoff interval and cap it.
            BACKOFF_INTERVAL=$(($BACKOFF_INTERVAL * 2))
            if [ $BACKOFF_INTERVAL -gt $MAX_BACKOFF_INTERVAL ]; then
                BACKOFF_INTERVAL=$MAX_BACKOFF_INTERVAL
            fi
            echo "New backoff interval: $BACKOFF_INTERVAL seconds."
        fi

        if [ -f "/data/samba/samba_debug" ]; then
            run_num=$((run_num+1))
            LOGFILE="/tmp/cidclient_${run_num}.log"
            CMDLINE="$CIDCLIENT $ARGS $1 $2 $3 $4 $5 &>$LOGFILE &"
        else
            CMDLINE="$CIDCLIENT $ARGS $1 $2 $3 $4 $5 &>/dev/null &"
        fi

        eval $CMDLINE
        PID=$!
        sleep 1
#        PROCESS_NEW=$(awk '{print $14 + $15}' /proc/$PID/stat)
#        TOTAL_NEW=$(awk '{print $22}' /proc/self/stat)
        continue
    fi

    # If cidclient has been alive for some number of consecutive intervals,
    # reset the backoff interval
    CONSECUTIVE=$(($CONSECUTIVE + 1))
    if [ $CONSECUTIVE -ge 20 ]; then
        if [ $BACKOFF_INTERVAL -gt $ORIG_BACKOFF_INTERVAL ]; then
            BACKOFF_INTERVAL=$ORIG_BACKOFF_INTERVAL
            echo "Process $PID stayed alive for $CONSECUTIVE intervals,"\
            "resetting backoff to $BACKOFF_INTERVAL"
        fi
    fi

    RSS=$(awk '/^VmRSS/{print $2}' /proc/$PID/status)
    if [ -f "/data/samba/samba_debug" ]; then
        echo "PID $PID"
        echo "RSS $RSS KiB"
    fi

    if [ "$RSS" -gt "$RSS_LIMIT" ]; then
        echo "Above RSS limit"
        kill $PID
        sleep 3
        if [ -e /proc/$PID ]; then
            kill -9 $PID
        fi
    fi

done
