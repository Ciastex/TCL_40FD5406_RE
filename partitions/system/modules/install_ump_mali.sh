echo "insmod mali begin"
cd modules
## soc/graphic/mali
insmod mali.ko \
    mali_dedicated_mem_start=0 \
    mali_dedicated_mem_size=0 \
    mali_shared_mem_size=0x20000000 \
    mali_fb_size=0x4980000 \
    mali_fb_start=0x08680000
    
cd ../
    
echo "insmod mali finish"