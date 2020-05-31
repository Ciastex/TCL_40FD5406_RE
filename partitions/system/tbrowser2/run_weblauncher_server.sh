#!/bin/sh

# Created by zhaodm@tcl.com 2016.5.12
# Sets up environment for runing weblauncher on TBrowser_V2.0


# This only exists to set local variables. Don't call this manually.
weblauncher_run_main() {
  local dirname="dirname"
  command -v dirname >/dev/null 2>&1 || local dirname="busybox dirname"
  local SCRIPT_DIR="$(cd `$dirname $1`; pwd)"
  echo "SCRIPT_DIR = ${SCRIPT_DIR}"

  export TBROWSER2_ROOT=/system/tbrowser2
  echo "TBROWSER2_ROOT = ${TBROWSER2_ROOT}"
}
# In zsh, $0 is the name of the file being sourced.
weblauncher_run_main "${BASH_SOURCE:-$0}"
unset -f weblauncher_run_main

export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/system/apps/input_method/lib:/system/hbbtv/lib:/system/tplayer/lib:/tvos/libGlibc:$TBROWSER2_ROOT/lib

export DRM_CERT_PATH=/data/vendor/tplayer_drm_certs
#--disable-logging --enable-logging=log_to_console --enable-logging=log_to_file
#--enable-heap-profiling --trace-config-file=${TBROWSER2_ROOT}/trace.config //enable memorydump
${TBROWSER2_ROOT}/weblauncher_server --no-sandbox --process-per-tab --enable-spatial-navigation --egl-native-display-type=1 --content-shell-host-window-size=1280x720 --allow-running-insecure-content --allow-file-access-from-files --enable-logging=log_to_sita --audio-buffer-size=2048 $*  &
