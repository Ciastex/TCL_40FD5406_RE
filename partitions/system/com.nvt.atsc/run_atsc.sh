script_dir="${0%/*}"
cd "${script_dir:-/}"

export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$PWD/
./com.nvt.atsc
