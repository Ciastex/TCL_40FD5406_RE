echo "insmod kernel driver begin"

insmod standalone_osd.ko \
gau32BufAddrSize=0x08d00000,0x08500000 \
gau32PlaneWinSize=256,256,256,256,1280,720,256,256,256,256 \
gau32PlaneOrder=5,0 \
gu32NumOfBuffer=2 \
gu32FastLogoPlaneID=1
    
echo "insmod kernel driver finish"


