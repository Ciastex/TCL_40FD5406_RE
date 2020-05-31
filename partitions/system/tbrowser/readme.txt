tbrowser发布内容说明：

fonts - 存放字库配置文件、字库和符编码转换需要的数据文件(icudt52l.dat)
include - tbrowser对外头文件
libs - tbrowser发布的库文件
resources - 资源文件，比如证书、进度条图片、弹出框图片、默认首页、错误提示页面以及用到的相关js文件和图片


对系统的依赖：
如果要正常使用tbrowser，必须设定如下条件：
1、配置TBROWSER_ROOT环境变量
2、$TBROWSER_ROOT路径下必须有fonts文件夹，其内放置字库文件、字库配置的xml文件、以及icudt52l.dat文件
3、resources目录必须放置在$TBROWSER_ROOT文件夹下面

