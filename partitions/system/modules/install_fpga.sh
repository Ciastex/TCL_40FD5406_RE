echo "insmod DTV driver begin"
insmod ntkndpextin.ko
insmod ntkndptuner.ko
#insmod ndp_atvtuner.ko
insmod ntkndpdemod.ko
insmod ntkndpci.ko
insmod ntkndptsd.ko &
insmod ntkndpcodec.ko &
insmod ntkndp_pq.ko &
insmod ntkndpalsa.ko CUSTOMER_NAME="NVT"
echo "insmod DTV driver finish"

echo "insmod HDMI driver begin"
insmod ntkndphdmi.ko
insmod ntkndphdmiswitch.ko
echo "insmod HDMI driver finish"

echo "insmod kteeclient driver begin"
insmod kteeclient.ko &
echo "insmod kteeclient driver finish"

#move insmod ump & mali into idtv to speed up dc on time
## soc/graphic/ump
#insmod ump.ko \
#    ump_memory_size=0x08000000 \
#    ump_backend=1

## soc/graphic/mali
echo "insmod mali driver begin"
insmod mali.ko \
    mali_dedicated_mem_start=0 \
    mali_dedicated_mem_size=0 \
    mali_shared_mem_size=0x20000000 \
    mali_fb_size=0x08500000 \
    mali_fb_start=0x08d00000
    
echo "insmod mali driver finish"

#set file flag to prevent _initialise() call PLAT_DRV_INI_Init() earlier
echo "1" > /tmp/ntkdriver_completed

