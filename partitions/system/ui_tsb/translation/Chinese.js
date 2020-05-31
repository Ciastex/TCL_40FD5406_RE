var  all_country  = ["澳大利亚","奥地利","比利时","保加利亚","科迪亚","捷克","丹麦","芬兰","法国","德国",
					"希腊","匈牙利","意大利","卢森堡","荷兰","挪威","波兰","葡萄牙","罗马尼亚","俄国",
					"塞尔维亚","斯洛文尼亚","西班牙","瑞典","瑞士","英国","新西兰"," "/*Arab*/,"爱沙尼亚"," "/*Hebrew*/,
					"拉脱维亚","斯洛伐克","土耳其","爱尔兰","日本","菲律宾","泰国","马尔代夫","乌拉圭","秘鲁",
					"阿根廷","智力","委内瑞拉","厄瓜多尔","哥斯达黎加","巴拉圭","玻利维亚","伯利兹","尼加拉瓜","危地马拉",
					"中国","台湾","巴西","加拿大","墨西哥","美国","韩国","其它","越南"/*新添加的，底层结构体中没有*/,"乌克兰"/*新添加的，底层结构体中没有*/,
					"伊朗","伊拉克"," ","哈萨克斯坦","乌兹别克斯坦"," ","吉尔吉斯斯坦","阿尔及利亚","埃及","突尼斯",
					"坦桑尼亚","肯尼亚","巴基斯坦","印度尼西亚","科威特","沙特","卡塔尔","以色列","黎巴嫩","巴林",
					"安哥拉","刚果","印度","土库曼斯坦","哥伦比亚","蒙古","孟加拉","尼泊尔","斯里兰卡","北朝鲜",
					"摩尔多瓦","法属波利尼西亚","萨尔瓦多"," ","斐济","利比里亚","约旦","缅甸","加纳","格鲁吉亚",
					"亚美尼亚","阿曼","也门","叙利亚","巴勒斯坦","阿富汗","摩洛哥","贝宁","科特迪瓦","尼日利亚",
					"苏丹","埃塞俄比亚","赞比亚"," ","南非","莫桑比克","利比亚","阿尔巴尼亚","白俄罗斯","冰岛",
					"立陶宛","毛里求斯","迪拜","阿联酋","塔吉克斯坦","","波黑","塞浦路斯","科索沃","马其顿",
					"马尔他","波黑"," ","新加坡","马来西亚","法属喀里多尼亚","其它"," "," "," ",
    				" "," "," "," "," "," "," "," "," ","巴拿马"];
var all_language = ["捷克语","Chamic","丹麦语","Dargwa","Landdayak","德语","英语","西班牙语","希腊语","法语","克罗地亚语","Sorbianupper","意大利语","匈牙利语","荷兰语","挪威语","波兰语","葡萄牙语","俄罗斯语","罗马尼亚语","斯洛文尼亚语","塞尔维亚语","芬兰语","瑞典语","保加利亚语","斯洛伐克语","简体中文","Chuukese","盖尔语","Gbaya","威尔士语","阿拉伯语","爱尔兰语","拉脱维亚语","Hebrew","土耳其语","爱沙尼亚语","荷兰语"/*Netherlands*/,"Korean","Kosraean","Hindi","Hittite","Hmong","Mandarin","Cantonese","Maori","原始音频"/*Qaa*/,"未定义"/*Undetermined*/,"Ad","未知","未定义","Abkhazian","Achinese","Acoli","Adangme","Adyghe","Afar","Afrihili","Afrikaans","Afro","Ainu","Akan","Akkadian","Albanian","Aleut","Algonquian","Altaisouthern","Altaic","Amharic","Apache","Aramaic","Aragonese","Arapaho","Araucanian","Arawak","Armenian","Artificial","Assamese","Asturian","Athapascan","Austronesian","Australian","Avaric","Avestan","Awadhi","Aymara","Azerbaijani","Aztec","Balinese","Baltic","Baluchi","Bambara","Bamileke","Banda","Bantu","Basa","Bashkir","巴斯克语","Beja","Bemba","Bengali","Berber","Bhojpuri","Bihari","Bikol","Bini","Bislama","Bosnian","Braj","Breton","Buginese","Buriat","Burmese","Blin","白俄罗斯语","Caddo","Carib","加泰罗尼亚语","Caucasian","Cebuano","Celtic","Centralamericanindian","Chagatai","Chamorro","Chechen","Cherokee","Cheyenne","Chibcha","Chinookjargon","Choctaw","Chipewyan","Churchslavic","Chuvash","Coptic","Cornish","Corsican","Cree","Creek","Creolesandpidgins","Crimeantatar","Creolesandpidginsenglish","Creolesandpidginsfrench","Creolesandpidginsportuguese","Kashubian","Cushitic","Dakota","Delaware","Slavey","Dogrib","Dhivehi","Dinka","Divehi","Dogri","Dravidian","Sorbianlower","Duala","Dutchmiddle","Dyula","Dzongkha","Efik","Egyptian","Ekajuk","Elamite","Englishmiddle","Englishold","Angika","Eskimo","Esperanto","Ewe","Ewondo","Fang","Fanti","Faroese","Fijian","Filipino","Finnougrian","Fon","Frenchmiddle","Frenchold","Frisiannorthern","Frisianeastern","Frisian","Fulah","Friulian","Ga","加利西亚语","Ganda","Gayo","Geez","Georgian","Germanmiddlehigh","Germanoldhigh","Gorontalo","Germanic","Gilbertese","Gondi","Gothic","Grebo","Greekancient","Greenlandic","Guarani","Swissgerman","Gujarati","Gwichin","Haida","Haitiancreole","Hausa","Hawaiian","Herero","Hiligaynon","Himachali","Hirimotu","Hupa","Iban","冰岛语","Ido","Nuosu","Igbo","Ijo","Iloko","Indic","Indoeuropean","Ingush","Indonesian","Interlingua","Interlingue","Inuktitut","Inupiak","Iranian","Irishold","Irishmiddle","Iroquoian","Japanese","Javanese","Lojban","Judeoarabic","Judeopersian","Kabyle","Kachin","Kamba","Kannada","Kanuri","Karakalpak","Karen","Kashmiri","Kawi","Kazakh","Circassian","Khasi","Khmer","Khoisan","Khotanese","Kikuyu","Kinyarwanda","Kirghiz","Kimbundu","Komi","Kongo","Konkani","Kpelle","Karachaybalkar","Karelian","Kru","Kuanyama","Kumyk","Kurdish","Kurukh","Kusaie","Kutenai","Ladino","Lahnda","Lamba","Langue","Lao","Latin","Luxembourgish","Lezghian","Limburgish","Lingala","立陶宛语","Lozi","Lubalulua","Lubakatanga","Luiseno","Lunda","Luo","Lushai","Macedonian","Madurese","Magahi","Maithili","Makasar","Malagasy","Malay","Moksha","Mandar","Malayalam","Maltese","Manchu","Mandingo","Manipuri","Manobo","Manx","Marathi","Mari","Marshall","Mirandese","Marwari","Masai","Mayan","Erzya","Mende","Micmac","Minangkabau","Miscellaneous","Mohawk","Moldavian","Monkmer","Mongo","Mongolian","Mossi","Multiple","Munda","Neapolitan","Nauru","Navajo","Ndebelenorth","Ndebelesouth","Ndongo","Germanlow","Nepali","Newari","Nias","Nigerkordofanian","Nilosaharan","Niuean","Norwegianbokmal","Nogai","Norseold","Northamericanindian","Norwegiannynorsk","Nubian","Nyamwezi","Newariclassical","Nyanja","Nyankole","Nyoro","Nzema","Ojibwa","Oriya","Oromo","Osage","Ossetic","Otomian","Pahlavi","Palauan","Pali","Pampanga","Pangasinan","Panjabi","Papiamento","Papuanaustralian","Persian","Persianold","Phoenician","Philippine","Ponape","Prakrit","Provencalold","Pushto","Quechua","Rhaetoromance","Rajasthani","Rapanui","Rarotongan","浪漫","Romany","Rundi","Aromanian","Salishan","Samaritanaramaic","Samisouthern","Saminorthern","萨米语","Lulesami","Inarisami","Samoan","Skoltsami","Sandawe","Sango","Sanskrit","Sardinian","Sasak","Santali","Sicilian","Scots","Selkup","Semitic","Sranantongo","Serbocroatian","Serer","Sign","Shan","Shona","Sidamo","Siksika","Sindhi","Soninke","Singhalese","Sinotibetan","Siouan","Slavic","Siswant","Sogdian","Somali","Songhai","Sorbian","Walloon","Nko","Sothonorthern","Sothosouthern","Southamericanindian","Sukuma","Sumerian","Sudanese","Susu","Swahili","Swazi","Swize","Syriacclassical","Syriac","Tagalog","Tahitian","Tetum","Tajik","Tamashek","Tai","Tamil","Tatar","图文信息","Telugu","Tereno","Thai","Tibetan","Tigre","Tigrinya","Timne","Tivi","Klingon","Tokelau","Tlingit","Tonganyasa","Tongaislands","Truk","Tokpisin","Tsimshian","Tsonga","Tswana","Tumbuka","Tupian","Turkishottoman","Turkmen","Tuvinian","Tuvalu","Twi","Udmurt","Ugaritic","Uighur","乌克兰语","Umbundu","Urdu","Uzbek","Vai","Venda","Vietnamese","Volapuk","Votic","Wakashan","Walamo","Waray","Washo","Wolof","Kalmyk","Xhosa","Yakut","Yao","Yap","Yiddish","Yoruba","Yupik","Zapotec","Blissymbolics","Zenaga","Zhuang","Zande","Zulu","Zuni","Zazaki","Valencian","繁体中文","ChineseS","QAB","QAC","ArabicEgypt","*","*","Dagbani","Kasem","*"];
var offOn = ["关","开"];	
var okCancel = ["确认","取消"];	
var yesNo = ["是","否"];
var level = ["关","低","高","中"];	
var manualAuto = ["手动","自动"];	
var homeShop = ["家庭","商场"];	
var picPreset = ["标准","明亮","柔和","电影","自定义"];
var picColorTemp = ["冷","标准","暖","自定义"];
var pic3dNavig = ["手动","自动","半自动"];	
var _3dOptions = ["3D模式","3D转2D","左右转换","景深"];	
var pic3DMode = ["关","2D转3D","左右转换","上下转换","线性交错"];	
var picEcoOptions = ["节能","光感器","本地调光","混合调光"];	
var picGeoOptions = ["几何","水平位置","垂直位置","时钟","相位调整"];
var picAdWhiteBal = ["增加R值","增加G值","增加B值","R值补偿","G值补偿","B值补偿"];	
var souOptions = ["声效","平衡","声音延迟","音效","自动音量控制","数字音频输出","数字音频输出延迟","声音场景","音频语言","声音类型","旁白","低音增强","杜比＋"];
var souSpdifType = ["自动"/*Dolby*/,"PCM","关"];
var colorSpace = ["自动","本地","用户设定"];
var souPresetPara	= ["100Hz","500Hz","1.5KHz","5KHz","10KHz"];
var chOptions = ["搜台","频道列表","节目指南","频道管理","频道诊断","时移","字幕","图文","频道列表类型"];
var chDiagOptions = ["信号强度","信号质量","频率（KHz）","服务ID","网络ID","网络名"];	
var chScanOptions = ["国家","调谐器类型","自动搜索","自动更新","模拟手动扫描",["有线手动安装","天线手动搜索","卫星手动调音"],"卫星地面设置","偏好网络选择","清除频道列表","LCN"];
var favNetDes = "请选择你的网络";
var tuner = ["有线","天线","卫星"];	
var passError = "密码不正确，请再次输入！";	
var chType = ["模拟信号: ","数字信号: "];
var chScanStatus = ["状态：扫描","状态：扫描完成","状态：扫描取消","状态：扫描错误"];	
var chScanPara = ["频率（KHz）","调制","符号率（Ksym/s）","网络ID","系统","频道微调","信号强度","信号质量","扫描模式","频道ID"];	
var chScanParaMHZ = ["频率（MHz)"];	
var chAtvManSys = ["西欧","东欧","英国","法国"];	
var modulation = ["16QAM","32QAM","64QAM","128QAM","256QAM","自动"];	
var chCleanDes = "确定要清除频道列表吗？";	
var chDeletDes = "确定要删除此频道吗？";	
var chOperator = ["Ziggo","UPC","其它"];	
var chScanType = ["数字和模拟","数字","模拟"];	
var chScanMode = ["全频点","高级","快"];	
var bookingModes = ["录制的视频将被保存在名为“pvr”的文件夹。","提醒"];	
var dayName = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];	
var monthName = ["一月", "二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];	
var filter = ["分类","类型","子类型"];	
var chEpgFirstGenre = ["电影","新闻","节目","运动","儿童","音乐","艺术","社交","教育","娱乐","专题"];	
var chEpgSecondGenre = [["戏剧","侦探","冒险","科幻","喜剧","电视剧","浪漫","庄重","成人电影"," "," "," "],["时事","天气预报","新闻杂志","纪录片","讨论"," "," "," "," "," "," "," "],["节目","游戏节目","综艺节目","脱口秀"," "," "," "," "," "," "," "," "],["运动","特别活动","运动杂志","足球","网球","团队运动","田径","摩托运动","水上运动","冬季运动","马术","武术"],["儿童","学前儿童","6~14岁","10~16岁","信息","卡通"," "," "," "," "," "," "," "],["音乐","摇滚","庄重","民谣","爵士","歌剧","芭蕾"," "," "," "," "," "],["艺术","表演艺术","美术","宗教","流行文化","文学","电影","典型","广播","新媒体","艺术杂志","时尚"],["社交","杂志","经济","名人"," "," "," "," "," "," "," "," "],["教育","自然","科技","药物","海外","社会科学","继续教育","语言"," "," "," "," "],["休闲爱好","旅游","手工艺","驾驶","健身","烹饪","广告","园艺"," "," "," "," "],["初始语言","黑白","未发布","直播"," "," "," "," "," "," "," "," "]];	
var chOrganizer = ["跳过频道","频道分类","频道编辑","删除频道","交换频道","插入频道"];	
var chEditPara = ["网络名称","频道号","频道名称","频率","颜色系统","声音系统"];	
var chSatTitles = ["卫星类型","卫星地面设置","选择卫星"];	
var chSatEidtOptions = ["卫星名称","地址","LNB开关","LNB频率（MHz）","DiSEqC输入","22KHz音调","音频脉冲","频率（KHz）","符号率（Ksym/s）","偏振","信号强度","信号质量","卫星状态"];	
var chSatAutoPromt = [["全部","网络"],["全部","免费"]];	
var chSatAutoScanOptions = ["选择卫星","扫描模式","频道"];	
var chSatPosition = ["A","B"];	
var chSatLNBFreq = ["通用",];	
var chSatDiSEqCInput = ["禁用","A","B","C","D"];	
var chSatTone22KHz = ["自动","开","关"];	
var chSatToneBurst = ["禁用","音频脉冲A","音频脉冲B"];	
var chSatPolarization = ["水平位置","垂直位置"];	
var chSatSetupOptions = ["天线类型","调音","带频"];	
var chSatAntennaType = ["单芯电缆","通用"];	
var chSatUserBands = ["宽带1","宽带2","宽带3","宽带4","宽带5","宽带6","宽带7","宽带8"];	
var chSatOthers = ["应答机"];	
var chSatSetupOthers = ["用户定义"];	
var pleaseSelectSat = "请先选择卫星！";	
var subOptions = ["字幕","数位字幕语言","数位字幕语言2","字幕类型"];	
var ttxOptionsCon = ["解码页面语言","数字图文电视"];	
var subType = ["正常","听力障碍"];	
var netIntf = ["有线","无线"];
var netConnDes = ["正在测试网络连接，请稍等。","网络连接测试成功。","网络连接测试失败。"];	
var netSsidError = "SSID的有效长度为1~32字节，请检查SSID。";	
var netOthers = ["PIN码"];	
var netWlessAutoDes = ["请在确认以下的PIN码已被装入接入点后再点击确定。","请在点击确定之前的120秒之内按下接入点上的按钮。"];	
var netConnRemind = ["密码错误！","连接中，请稍候！","连接成功，IP地址已获取！","连接失败，请检查网络连接并再试一次！","电视正在扫描接入点，请稍候","没有无线适配器连接到电视！"];	
var netWireIpOptions = ["IP设置","地址类型","IP地址","子网掩码","默认网关","首选DNS","备用DNS"];	
var netWireConnRemind = ["请在0到255之间输入有效值","成功连接！","请输入有效地址","成功连接！","连接失败。","连接中，请稍候！","请在1到233中输入一个有效值"];	
var netFlixOptions = ["取消激活","ESN","Netflix版本"];	
var netFlixDes = ["是否确定停用？"," "/*Are you sure that you want to ESN?*/];	
var netUpdateTitle = "软件升级";	
var netUpdateDialogTitle = "软件升级中";	
var netBGDownloadTitle = "下载中";	
var netUpdateLoadingPrompt = ["正在寻找升级，请稍候！","正在下载软件…请稍候！","请不要在软件升级的过程中关闭电视！",                            "软件正在后台自动下载！"];	
var netUpdatePrompt = ["恭喜，你的软件版本已经是最新版本了！","已检测到新的系统版本XXXX，想要现在下载吗？可能会根据网络状况需要一段时间。","登入失败，请检查并再次连接！","获取数据失败，请稍候再试！","升级失败，请用遥控器切换开关！","连接失败，请检查网络连接并再试一次！","系统已成功下载。想要现在开始升级你的电视吗？","数据丢失，下载失败！","系统文件检查失败，请再尝试一次！","连接出现问题，请检查并重新连接！","升级失败，请用遥控器切换开关。","升级文件被意外删除，请连网重新升级。","系统升级包已在后台成功下载，想要现在进行升级吗?"];	
var netUpdateButtonText = ["下载中", "升级", "稍后", "永不", "确认","继续"];	
var autoDetectPrompt = ["已检测到新的系统版本XXXX，想要现在下载吗？可能会根据网络状况需要一段时间。","已检测到新的系统版本XXXX， 想要现在升级吗？","上次的升级过程被网络中止了。你需要重新升级。",                        "最新版本XXXX的下载还没有结束。需要继续完成吗？",                        "系统升级包已下载，想要现在升级吗？"];	
var sysOptions = ["使用指南","菜单语言","时间设置","保护锁","信源命名","软件升级","使用地点","HbbTV模式","Cookies","公用接口","高级设置","重置","LED指示灯","快速开机","自动商场模式","地区","演示模式"];
var sysResetDes = "你确定需要执行选定操作吗？";	
var sysMenuLangOptions = ["语言","首选语言","首选语言2"];
var sysTimerOptions = ["时区","区域名","时钟","定时睡眠","自动待机", "国家区域","回历"];
var sysTimeZone = ["根据广播","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00","GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30","GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00","GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00","GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00","GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00","GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];	
var sysTimeZoneLA = ["广播","国家1","国家2","国家3","国家4","国家5"];	
var sysSleepTimer = ["关","10分钟","20分钟","30分钟","40分钟","50分钟","60分钟","90分钟","120分钟"];	
var sysStandby = ["关","4小时","6小时","8小时"];	
var sysRegionName = ["马德里","加纳利群岛"];	
var sysClockOptions = ["自动同步","日期","时间","定时开机","时钟","频道开关","定时关机","时钟"];
var sysTimer = ["关","每日","一次"];	
var sysInputSet = ["无标签","DVD","蓝光","HDD","DVDR","HD rec","游戏","VCR","PC","数字机顶盒","高清数字机顶盒","相机","录音机","其它"];	
var sysAvVideoInput = ["自动","RGB_CVBS","RGB","CVBS","S-Video"];	
var sysUpdate = ["通过USB","通过网络","通过频道"];	
var sysUpdateDes = [" "," "," ","未检测到可供更新的系统！","已检测到新的系统版本XXXX， 想要现在升级吗？","请插入USB。","系统文件检查失败，请再尝试一次！","升级中。可能会需要一些时间完成，电视将会在完成后自动重启","系统已成功升级。电视即将自动重启","已检测到新的系统版本XXXX，想要现在下载吗？可能会根据网络状况需要一段时间。","下载中","系统已成功下载。想要现在开始升级你的电视吗？","升级失败","寻找升级文件","系统已成功升级，请重启电视。"];	
var sysProductInfo = ["现在版本","产品名称","生产者名称","机芯名称"];
var sysCiDes = ["没有可用的CI卡。"];	
var sysAdOptions = ["DivX®注册","DivX®注销","T-Link","授权错误","注销确认","租赁确认","租赁期限"];	
var sysRegistDes = ["只有注册您的设备才能播放保护视频","产品注册码：","在http://vod.divx.com注册"];	
var sysDregistDes = ["注销码：","在http://vod.divx.com注销","继续注册？"];	
var mediaAuthorization = ["你的设备未被授权播放此保护视频"];	
var deregistrationConfrimation = ["你的设备已经被注册了","是否确定注销？"];	
var rentalConfirmation = "DivX®租借已经用掉了XXX/YYY，继续吗？";	
var rentalExpired = "DivX®租借已经用掉了XXX/YYY，租借已过期。";	
var parentalRatingLA = ["父母锁","年龄等级","内容等级"];
var parentalRatingNA		= ["***","***","***","***","***","***","***","***"];
var parentalRatingOptionUS		= ["***","***","***"];
var sysTVRatingUS=["***","***","***","***","***"];
var sysMPAAUS=["***","***","***","***","***","***"];
var parentalRatingOptionCanada		= ["***","***","***"];
var sysCanadaEng=["***","***","***","***","***","***"];
var sysCanadaFre=["***","***","***","***","***",""];
var sysResetRRT=["***"];
var ageRatingOptions = ["无","低 10","低 12","低 14","低 16","低 18"];	
var contentRatingOptions = ["关","毒品","暴力","色情","暴力&毒品","色情&毒品","暴力&色情","暴力，色情&毒品"];
var sysLockOptions = ["频道锁","时间间隔锁","父母锁","信源锁","面板锁","搜台锁","更改密码","最大音量","清除所有"];
var sysTimeIntervals = ["锁类型","开始时间","结束时间"];	
var sysRatingOptions = ["无","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","三级片"];	
var changePass = ["更改密码","新的密码","确认密码"];	
var changePassDes = ["密码不正确，请再次输入！","密码不匹配，请再次输入！","密码设置成功！","密码过于简单，请再次输入！"];	
var sysPowerOnChOptions = "选择模式";	
var sysPowerOnCh = ["最新状态","用户选择"];	
var netWlessSecu = ["开始时间","WEP","WPA/WPA2-PSK"];	
var netWlessSecu2 = ["无","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK","不支持"];	
var netWlessSecu3 = ["无","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","不支持"];	
var netOptions = ["网络连接","连接方式","无线设置","IP设置","信息","连接测试","DLNA","多屏互动","Netflix设置","无线互联","地址类型","IP地址","子网掩码","默认网关","首选DNS","备用DNS","SSID","BSSID","请输入SSID：","用户ID"];
var chEditDes = ["复制频道号码！","按红键来删除当前频道","无效频道号"];	
var chEpgNoProgram = "没有节目信息，请先搜寻频道！";	
var chEpgWords = ["节目指南","没有节目数据","频道被锁！","无节目说明","无节目名称"];	
var chEpgBooking = ["计划信息", "频道号","开始日期","开始时间","结束时间","重复类型","计划类型","添加计划","替代","改变","增加/修改"];	
var epgHotKey = ["前一天","后一天","分类","计划列表","添加计划"];	
var chEpgBookRemind = ["开始时间有误","结束时间有误","复制计划","成功保留","成功删除"];	
var chSchePara = ["计划列表","开始时间","开始日期","节目名称","频道名称","持续时间","重复","计划","编辑","删除"];	
var dateTimer = ["一次","每日","每周"];	
var scheduleDeleteReminds = "确定想要删除这个计划吗？";	
var scheduleNoLists = "暂无预约节目列表。按红色键添加。";	
var chListWords = ["频道列表","选择列表","调谐器类型","添加到收藏","移动","选择频道列表","选择调谐器类型","交换"];	
var chListType = ["全部","数字","模拟","收音机","免费","收藏"];	
var chAutoScanOptions = ["选择操作器","频道类型","自动搜索"];	
var souSoundType = ["无效","单声道","单声道","立体声道","立体声道","副声道","副声道","双声道1","双声道3","双声道3","丽音单声道","丽音立体声","丽音双声道1","丽音双声道2","丽音双声道","单声道","左声道","右声道","模拟双声道"];
var souPreset = ["音乐","影院","新闻","标准","自定义"];
var picAdRgbMode = ["关","红模式","绿模式","蓝模式"];
var picAdOptions = ["降噪","MPEG 降噪","红绿蓝模式","动态对比度","LED运动清晰度","肤色","电影模式","游戏模式","色温 ","白平衡","画面冻结","黑电平延伸","视野","伽马","HDMI模式","10点白平衡","颜色增强","减少模糊","减少抖动","色彩空间","动作清晰度"];	
var pic10Pwhite = ["间隔","红","绿","蓝","重置","颜色","黄","蓝绿色","品红"];	
var picMotionClarity = ["动作模式","运动插值","LED运动清晰度","减少模糊","减少抖动","重置"];	
var picMotionMode = ["电影","光滑","清晰","运动","定制化"];	
var picResetDes = "所有个性化设定将会被重置，是否确定继续？";	
var pic10PReset = "是否确定想要重置10P白平衡？";	
var picMotionReset = "是否想要重置运动清晰度？";	
var picColorSpaceReset = "是否确定想要重置色彩空间？";	
var picOptions = ["图效","背光","亮度","对比度","饱和度","色调","锐度","色温 ","屏幕模式","自动格式","动作加强","3D","3D导航","ECO设置","几何","高级设置","图效重置","区域对比度"];
var picSize = ["16 :9 格式", "4：3 格式", "14:9 格式", "宽屏模式","16:9 放大", "16:9 放大","14:9 放大","交叉缩放","广角","缩放2","广角2","屏幕本地匹配","点对点","原生","全景"];	
var others = ["音量","广播","密码","状态","保留","替代","开始","退出","搜索","删除","无","自动","扫描","安全性","连接","刷新","重试","停止","设置","频道","编辑","插入","信号","完成","立体声道","音频","信源","无音频","提示","重置","定制化","设置","商场","用户","关闭键盘","安全模式","每天","PVR列表"];	
var direction = ["左","右","上","下"];	
var audioType = ["MPEG","DOLBY AUDIO"/*"AC3"*/,"MPEG4","AAC", "DOLBY AUDIO"/*"AC3P"*/,"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD"," "," "," "," "," "," ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2","HE-AAC_V4","未知"];
var soundChannels = ["未知","单声道","代替","双单声道","立体声道","立体声子","立体杜比环绕声","环绕 2Ch","环绕 2Ch","3.0Ch","4.0Ch","5.0Ch","单声道LFE","双单LFE","立体声LFE","第二环绕声LFE","环绕声LFE","3.1Ch","4.1Ch","5.1Ch","7.1Ch","联合立体声","单声道","立体声","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","左","右","其它"];	
var prompts = ["根据播放环境调整最好的画面设置","调整亮度，数值越接近100，亮度越大","调整对比度，数值越接近100，画面的明暗对比差别会越大","调整饱和度，数值越接近100，颜色越强烈","调整锐度。数值越接近100，细节越清晰","调整背光强度。数值越接近100， 屏幕越亮","调整色调。这项设置改变色调。","选择最适合当前播放节目的画面格式","配置节能选项","连接至PC设备时调整屏幕几何设置","选择更多画面高级设置","重置所有画面设定回默认状态","选择你个人偏好的声音模式","在左右声道之间调整音量平衡","声响归真环绕高清体系可在高、低频提供丰富的音量表现效果和清晰度","数字界面格式连接至电视数字音响输出到家庭剧院音响设备","选择你个人偏好的音响语言","能够让视觉障碍者享受电视节目","测试你的电视画面，声音与信号","选择适合你的电视信号的频道列表","选择显示在屏幕底端的节目字幕语言。","观看当前频道的文字与图片","数字直播网络联盟。通过家庭网络中的其它设备（比如PC）享受音乐、照片和视频","将你的手机内容展示在电视上并将智能手机当做遥控器使用。","将带有Miracast适配的安卓设备展示在电视屏幕上","给您的电视上锁","为您的设备选一个名字","选择您的播放环境","将所有系统设置重置回默认状态","Switch off sports mode for more options.","Enhance the environmental contrast","A special mode to enjoy sport games","Enjoy more CEC functions."];
var initialTitle = ["欢迎","初始设置"];	
var initialPrompt = ["请先进行初始设置，一个充满精彩体验的世界在等你！","请选择您的语言：","请选择您的国家：","请选择您的地点：","请选择您的网络连接类型：","请选择您的有线网络连接模式：","连接到XXXXX失败！ 请根据以下的图表连接设备或按左键重设","连接到XXXX! 请按右键继续。","1） 您的电视可能已经拥有内置无线适配器 2）或者，如果有无线USB适配器提供，将它连接至你的电视。然后，请选择无线网络连接模式","扫描中。请稍候…","没有无线适配器连接到电视！","请在按下一步之前确保以下的PIN码已经安装在接入点中","请在按右键继续前的120秒内按下接入点上的按钮！","WPS（无线保护设置）","PIN（个人识别编号）","PBC（按钮配置）","以下内容仅可以在连接网络的情况下接入。仍然要跳过网络设置吗？","检测到一些新的软件升级可供下载，这可能需要根据你的网络状况花费一些时间。","升级电视软件可以让您享受最新的推荐和服务。","您将无法享受最新推荐和服务，确定继续跳过软件升级吗？","按右键继续","请不要在升级过程中关机，可能会导致电视故障","如果你不希望升级，请选“不”。","升级中，请稍候","你也可以在“系统/软件升级”中升级软件","选择国家需要设置密码，请设置你的电视密码并且确认。","密码过于简单，请使用不同数字。","恭喜！初步设置已完成。你可以通过主菜单和相关的副菜单修正设置。","请选择安全模式：","请选择无线网络连接模式：","网络"];	
var initNetCabAndDonRe = ["没有有限网络连接，请插入有线网络！","没有内置无线适配器或者无线USB适配器提供。"];	
var initChPrompt = ["电视频道安装","请选择天线扫描类型。","搜台中...","已发现以下天线频道：","请选择有线扫描类型：","请从以下菜单选择一个控制器。","请配置扫描信息","已发现以下有线频道：","请从以下菜单选择一个控制器。","请选择供扫描的卫星或编辑已选中的卫星","请设置卫星参数","已发现以下频道，频道扫描也可以在“频道/频道扫描”菜单中重新操作"];	
var initClockPrompt = ["获得提供网络时间！","请设置日期和时间："];	
var initialOptions = ["环境","网络设置","软件更新","频道安装","时钟"];
var initialHotkeys = ["返回","选择","下一个"];	
var initLocations = ["家庭","商场","商场演示"];	
var initNets = ["有线","无线","我没有网络连接"];	
var initWireManuals = ["IP地址","子网掩码","默认网关","首选DNS","备用DNS"];	
var initSoftUpdates = ["现在升级","待会升级"];	
var initChannelIns = ["继续","我不想安装频道"];	
var initChScanTypes = ["数字和模拟","数字","模拟","我不希望扫描"];	
var initChDvbts = ["天线ATV频道：","天线DTV频道："];	
var initChDvbcs = ["有线ATV频道：","有线DTV频道："];	
var initChDvbss = ["卫星频道："];	
var initChDvbSOther = ["我不想要卫星搜台"];	
var initEndConnectedStatus = ["未连接","已连接无线","已连接有线"];	
var initEndInstallations = "XXXX频道被导入";	
var initEndUpdate = ["升级"];	
var audioScenes = ["桌面","壁挂"];	
var screenSavers = ["没有节目信息，请先搜寻频道！","无信号！","扰频","只有数据","音频节目","没有音视频","不可用","没有图文","没有节目数据","节目已被锁！","节目已被锁！按确定键输入你的密码。","无节目说明","此节目需要家长指引，请输入你的密码。","频道被锁！","频道已被锁！请按确定键输入密码。","输入被锁！请按确定键输入密码。","不支持！","此设备暂不可用","输入已被锁！","无节目名称","无功能","没有字幕"];
var chBookingPromt = ["当前频道有录制计划，电视将开始录制。","检测到录制计划。调到XXX台开始录制","当前频道有提示","检测到有提醒的频道。调到XXX台"];	
var timeUnit = ["秒","分钟"];	
var ciPromt = ["网络数据已经改变，可通过升级扫描进行升级",];	
var othersPromt = ["请稍候…",];	
var menuOptions = ["图像","声音","频道","智能电视","网络","系统","支持"];	
var optionOptions = ["图效","声效","画面冻结","T-Link","时移","PVR","计划列表","设置","演示"];
var optionTLinkPromt = [["自动开机","自动待机","指导菜单"],["电影 开","待机","音量放大器"]];
var powerPromt = ["电视即将关机，请按任意键取消"];	
var ttxLanguage = ["西欧","东欧","俄罗斯语","阿拉伯语/希伯来语","波斯语","阿拉伯语","白俄罗斯语","希腊语","土耳其语"];	
var ttxOptions = ["揭示","循环子页面","语言","警告页面","简明新闻"];	
var weekday = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];	
var lcnConfflict = "此频道有接收问题。在%d 频道有另一版本可供观看。";	
var inShopMode = "电视在购物模式。回到主页请选“系统”并在菜单中改变“位置”";	
var nitRefresh = "网络数据已改变。是否需要进行升级扫描？";	
var picHDMIMode = ["自动","电脑桌面","视频"];	
var glassRemind = ["请将3D眼镜与电视进行配对（持续按3D眼镜上的电源键）","你的3D眼镜已连接至电视",""];	
var pvrRemind = ["请不要拔出USB或关闭电源"];	
var pvrConName = ["PVR","节目信息：",["提示：若要录制高清频道，请选择传输速度大于5MB每秒的USB设备；若要录制超清频道，选择传输速度大于3MB每秒的USB设备","录制视频已保存在\"PVR\"文件夹内"],"停止","录制的视频将被保存在名为“pvr”的文件夹。","小时","分钟","持续时间","提示","用方向键设置录制时间。"];	
var pvrDisRemind = "请插入USB进行录制";	
var pvrRemindWords = ["你想要退出吗？","确定停止录制并浏览已录制文件？","USB已被移除。","没有足够的剩余空间。","没有录制的文件。开始录制。","付费频道不支持录制功能","暂不提供此功能。","成功保留","确定停止录制，改变输入信源吗？","电视将会结束当前录制，确定离开？","PVR的录制需要电视信源正常工作，请检查电视信号。"];	
var pvrChangeCh = ["确定更换频道？","确定结束录制，并更换频道？"];	
var pvrChangeToPIN8 = ["确定更换到连接音视频输入接口的设备信源吗？",    "确定结束录制，并更换到连接音视频输入接口的设备信源吗？"];	
var pvrChangeToCEC = ["确定更换到连接HDMI输入接口的设备信源吗？",   "确定结束录制，并更换到连接HDMI输入接口的设备信源吗？"];	
var pvrGuideJump = ["是否进入电子节目单？","确定结束录制，并进入电子节目单？"];	
var pvrMediaJump = ["是否进入多媒体?","确定结束录制，并进入多媒体？"];	
var timeshiftExtra = ["确定结束时移，并更换频道？","确定结束时移，并更换到连接音视频输入接口的设备信源？","确定结束时移，并更换到连接HDMI输入接口的设备信源吗？","付费频道不支持时移功能","确定结束时移，并进入电子节目单？","确定结束时移，并进入多媒体？","确定结束时移，并改变输入信源？","请插入USB进行录制","USB的空间不够。","电视将会结束当前时移，确定离开？"];
var timeshiftStatus = ["快退","停止","播放","暂停","快进"];	
var pvrPowerOffRemind = ["暂停录制","待机","电视正在录制，是否需要在待机模式中保持录制？"];	
var timeshiftInitTitle = "USB设置";	
var timeshiftInitReminds = ["此向导是用于设置时移模式中的USB，请选择设置模式。", "为了更好的使用，我们推荐格式化USB。这将会清除其中的所有数据。", "请为时移选择文件大小", "格式化中", "没有足够的剩余空间。", "创建时移文件", "速度测试", "此USB设备传输时移录制速度过慢！", "此USB设备已经可以开始时移，但我们推荐为了更好的效果更换更快的USB.", "此USB设备已经可以开始时移。"];
var timeshiftInitButtons = ["格式化","跳过","取消","确认","完成","退出"];	
var timeshiftInitOther = ["USB设备传输速度：","MB每秒"];	
var selectChoice = "你确定需要执行选定操作吗？";	
var chAtvStore = "存储为XXXX";	
var chEpgFirstGenreUK = ["电影","新闻","娱乐","运动","儿童","教育","生活","戏剧"];	
var homePageTitleList = ["应用","电视","视频","主页"];	
var homePageFavAndAllName = ["收藏应用","全部应用"];	
var homePageBackUp = ["使用指南","节目指南"];	
var homePageRemind = ["只有在网络连接后才能使用所有功能。","你的电视暂时无法提供频道内容，请在搜索频道后收看节目。","暂时无法提供节目内容。","现在搜索频道吗？"];	
var homePageHistory = ["历史记录"];	
var miracastTitle = ["无线互联","TCL设备"];
var miracastRemind = ["无线互联让你的设备之间进行屏幕共享，比如将你的手机或平板无线连接至电视。让你能在电视上同步观看手机或平板设备上的内容。例如，你可以在手机上发布一个视频然后在电视上同步进行播放，或者将你的平板变成电视大屏幕上内容的游戏控制器。","无线互联已准备好，可以开始将您设备的屏幕分享到电视了。","连接中，请稍候！","连接失败。","连接失败。请检查！"];
var homePageLittleWin = ["设置","多媒体","收藏频道","智能电视","节目指南"];
var hbbtvStopRemind = ["你想要停止重播吗？"];	
var colorSystem = ["自动","PAL","SECAM","NTSC"];	
var deviceTitleTipsText = "点击≡键获取更多信息";	
var emptyListInfo = "现在没有USB设备连接至电视！";	
var optionVideoListArray_1 = ["图效", "声效", "播放模式", "屏幕模式", "3D模式",   "左右转换", "景深", "字幕", "音轨", "标题", "章节", "信息"];	
var optionVideoListArray_2 = ["图效", "声效", "播放模式", "屏幕模式",   "字幕", "音轨", "标题", "章节", "信息"];	
var bottomTipsText = ["播放/暂停", "快退", "快进", "播放列表", "设置"];	
var picturePresetArray = ["标准", "明亮", "柔和", "电影", "自定义"];
var videoPlayModeArray = ["全部循环", "单曲循环", "正常"];	
var screenModeHDArray = ["16:9", "4:3", "宽屏模式", "广角", "缩放2", "广角2", "交叉缩放", "自动"];	
var screenModeSDArray = ["16:9", "4:3", "宽屏模式", "14:9 放大", "16:9 放大", "16:9 放大", "自动"];	
var Mode3DArray = ["关", "2D转3D", "左右转换", "上下转换", "交错格式"];	
var videoOptionListArray = ["关", "轨道", "字幕", "标题", "章节"];	
var subMenuTitleText = "字幕";	
var langMenuTitleText = "音频语言";	
var titleMenuTitleText = "标题";	
var mode3DMenuTitleText = "3D模式";	
var langInfoText = "轨道";	
var STOP_RESUME_INFO = "停止-恢复";	
var playListName = "名称";	
var eb_tips = "提示";	
var ok_button = "确认";	
var eb_info = ["音频解码错误。", "视频解码错误。", "不支持此音频格式。",    "不支持此视频格式。", "不能打开此文件", "回放错误，请重新尝试。",   "不支持此文件格式。", "啊哦，播放器停止运行了。",   "文件路径不存在或无效。重新插入储存设备再试一次。",   "继续播放当前或重放？"];	
var picturePlayErrorTips = ["加载失败!!!","图片太大!!!","网络错误!!!","线程错误!!!","参数错误!!!","未知错误!!!"];
var frameTitleText = "新设备";	
var eb_quit_info = "是否确定退出？";	
var eb_yes = "是";	
var eb_no = "否";	
var offinfo = "关";	
var naInfo = "空";	
var consoleInfoArray = ["快退", "快进", "播放/暂停", "播放列表"];	
var cantOperateText = ["不支持此功能"];	
var chapterChangeInfo = "只可选择1到XXXX章节";	
var metaDataArray = ["标题/版本信息", "章节：", "音频：", "字幕："];	
var metaTitleInfo = "标题";	
var metaChapterInfo = "章节";	
var videoLoadingInfo = "分析…";	
var listLoadingInfo = "加载中…";	
var pgInfo = "Law Rating:";	
var fileNameText = "名称";	
var fileDateText = "日期";	
var fileSizeText = "大小";	
var fileDurationText = "持续时间";	
var fileDirectorText = "指导者";	
var fileCopyrightText = "版权";	
var fileArtistText = "艺术家";	
var fileAlbumText = "专辑";	
var fileGenreText = "类型";	
var fileYearText = "年份";	
var fileGenreText = "类型";	
var mainListArray = ["全部", "画面", "视频", "音乐"];	
var sortArray = ["名称", "日期"];	
var parserArray = ["正常", "循环"];	
var emptyTipsInfo = "没有找到支持文件。";	
var emptyFolderInfo = "没有找到支持文件。";	
var sortName = "分类";	
var parserName = "分析程序";	
var divx_str1 = "DivX(R) 注册";	
var divx_str2 = "DivX(R) 注销";	
var infor_str = "信息";	
var quickMenuEmptyText = "没有可用选项。";	
var musicSoundPresetArray = ["标准", "电影", "音乐", "高清音质", "自定义"];
var musicInformationArray = ["名称", "艺术家", "专辑", "类型：", "年份：", "持续时间："];	
var playListName = "名称";	
var playTipsInfo = ["你正在播放第一个文件", "你正在播放最后一个文件"];	
var musicNameInfo = "名称";	
var musicArtistInfo = "艺术家";	
var musicAlbumInfo = "信息";	
var optionSoundPresetInfo = "声效";	
var optionBGMInfo = "作为背景音乐播放";	
var optionAudioOnlyInfo = "只有音频";	
var optionInfoText = "信息";	
var remotePhoneConnecte = "XXXX已连接到电视！";	
var tvRemoteTitle = "多屏互动";
var tvRemoteDeveloper = "此应用由TCL开发";	
var tvRemoteDeviceTitle = "设备名称：";	
var remoteOption = ["分享媒体","遥控器","帮助","关于","智能连接"];	
var remotebottom = "请将\"多屏互动\"下载至你的智能手机";
var remoteStage = ["安卓","iOS"];	
var sharingReminds = ["与电视分享手机上的照片、视频与音乐","步骤：\n1. 在手机上点击\"多屏互动\"。通过同样的WIFI网络将手机与电视连接 \n2. 点击\"文件分享\"来浏览媒体文件\n3. 将文件传输至电视播放（下面的选项之一）","   a) 将文件或文件夹拖至屏幕上的电视图标；\n   b)  将手机对准电视来发送第一个文件；\n   c) 在手机上播放媒体文件然后点击电视分享的图标","4. 在电视上播放时，摇动手机来播放上一个或下一个文件。 "];
var controlReminds = ["用手机作为操控电视的遥控器。"," ","步骤： \n   1. 在手机上点击\"多屏互动\"。将手机与电视通过同一无线网络连接； \n   2. 点击 \"遥控\" 来操作电视。 "];
var helpDeviceWords = "多屏互动";	
var helpBottom = "在云技术领域，像手机与电视这样的智能设备可以相互连接。与你的家人在多屏上分享媒体文件，并通过手机控制电视吧！";	
var helpReminds = ["准备\n    1.下载并从Google Play或者苹果商店安装\"多屏互动\"。\n    2. 将手机与电视通过同一无线网络连接。"," ","手机推荐 1. CPU： 800MHz\n以上  2.存储空间：最少80MB"," ","声明\n    如果\"多屏互动\"在你的手机上不可用，请联系手机运营商。"];
var helpButtons = ["当前","下一个"];	
var aboutReminds = ["多屏互动","此应用由TCL开发"];
var aboutExit = "退出";	
var smartReminds = ["电视与手机的快速智能连接"," ","步骤 \n  1. 将电视与智能手机通过同一网络连接。在手机上点击\"多屏互动\" 。\n  2.点击\"智能遥控\"来扫描二维码 。\n  3. 当电视在播放观看模式时，点击电视遥控器上的INFO键四秒，一个全屏二维码将会跳出。",];
var smartQRReminds = ["请在你的手机上的\"多屏互动\"上点击\"智能连接\"并扫描二维码快速连接电视与手机。","二维码包含网络账户信息，请保证在安全环境下使用。"];
var consoleTipArray = ["当前","下一个","控制台","播放列表"];	
var optionInfoArray = ["图效","播放模式","持续时间","影响","信息"];	
var playModeArray = ["正常","随机播放","重复"];	
var durationArray = ["短（5s)", "中（10s)", "长（15s)"];	
var effectArray = ["无", "旋转", "向右擦除", "向左擦除", "向上擦除", "向下擦除", "矩形缩小", "矩形扩大", "随机"];	
var infoArray = ["名称：","大小：","日期：","定位"];	
var picturePresetBarTitleInfo = "画面预设";	
var picturePresetBarArray = ["标准","明亮","录音室","电影","自定义"];
var upTipsInfo = "动态画面";	
var consoleTipsArray = ["控制台","当前","下一个","播放列表","设置"];	
var pictureMoveTipsArray = ["按右键播放下一个画面","按左键播放上一个画面","再次按下键显示播放列表"];	
var optionPvrListArray = ["图效","声效", "屏幕模式", "3D模式", "字幕", "音轨", "信息"];	
var titleSpanFirstArray = ["控制与连接","基础操作","应用","电视","设置","常见问题"];	
var titleSpanSecondArray = [["遥控器","面板按键","五合一按键","电视连接","电视连接","电视连接","无线"],["主页","状态栏","信源"],["打开应用","多媒体","多屏互动"],["调整频道与音量","频道列表","节目指南","安装频道","收藏频道"],["画面调节","声音调节","频道调节","软件升级","语言","童锁"],["常见问题","常见问题","故障排除","故障排除","免责声明"]];
var contentSpan1_1Array = [["电源：","信源：","设置：","快捷菜单：","返回：","信息：","主页：","退出：","列表："],
  ["开机或待机",
  "选择信源",        
  "出现设置菜单",        
  "出现快捷设置",        
  "返回上一级菜单或退出应用",        
  "显示节目信息",        
  "回到TV主页",        
  "返回上一级菜单或退出应用",        
  "显示频道列表"]];	
var contentSpan1_2Array = ["上一个频道","下一个频道","增大音量","减小音量","去往主页","确认选择","待机/开机"];	
var contentSpan1_3Array = ["确认键/导航键","上一频道","下一频道","减小音量","增加音量","在某些功能下，作为方向键使用"];	
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","音频输出适配器","路由器LAN口","手机","PC/机顶盒/DVD","功放机","功放机/显示屏","你的电视可能不包含所有配件"];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","耳机","音频输入适配器","SPDIF","CMP音频输入适配器","CMP输入适配器","USB设备","USB设备","耳机","DVC/游戏控制器/机顶盒/DVD","功放机","DVC/游戏控制器/机顶盒/DVD","你的电视可能不包含所有配件"];	
var contentSpan1_6Array = ["公用接口","SD","视频输出插座","网口","迷你接口","天线输入","CI卡","SD卡","PC","机顶盒/DVD","天线/有线/卫星","你的电视可能不包含所有配件"];	
var contentSpan1_7Array = ["平板","PC","路由器","手机","电视"];	
var contentSpan2Array = [["通过方向键浏览主页。","然后通过OK键观看推荐节目或者打开APP。"],["在屏幕右上角显示日期，网络和设备等信息。"],["从通过不同接口连接至电视的设备中选择输入源，比如TV、AV、HDMI等。"]];	
var contentSpan3Array = ["通过Smart TV页浏览享受你最喜爱的App。","从USB储存设备中浏览照片，观看视频并播放音乐。","将你的电视与手机或平板连接至同一局域网。","在手机或平板上点击多屏互动或多屏互动。","与您的家人在多屏互动中分享照片，视频和音乐，并用智能手机控制电视。"];
var contentSpan4Array = [["按P+/P-切换频道。","按V+/V-调整音量。"],["在遥控器上按LIST键以列表形式浏览频道。","通过 上/下 键选择你的频道。"],["节目指南是屏幕上显示节目播放计划的指导。你可以切换，选择，浏览并录制节目。"],["搜索并安装频道。"],["在频道列表添加或者编辑你收藏的频道。"]];
var contentSpan5Array = ["通过视频APP享受收藏的节目。"];	
var contentSpan6Array = [["按菜单键呼出系统设置菜单。","在画面设置调整数值。"],["按菜单键呼出系统设置菜单。","在声音设置设置选项。"],["按菜单键呼出系统设置菜单。","进入频道设置设置选项。"],["当有可供更新的软件版本时，请更新您的电视。"],["您可以选择偏好的菜单语言。"],["允许家长将不适宜儿童观看的频道或节目屏蔽。"]];
var contentSpan7_1Array = [["无图像，无声音","请检查保险丝与断路器是否在工作。","将其它电子设备插入插头确保插头已被打开或是正常工作。","电源插座与插头接触不良。","检查信号源。"],["正常图像，无声音","用音量V+键来调大音量。","声音设置不正确。","广播信号错误。"],["正常声音，无图像","调整亮度与对比度。","广播信号错误。","是否在单独听模式中。"]];	
var contentSpan7_2Array = [["无线电频率干扰","此干扰产生移动波纹或斜纹；有时使图像失去对比度。例如：手机等，使机器远离干扰源。"],["没有颜色","调整色彩设置。","是否为黑白电视节目。"],["无法操作遥控器","更换电池。","电池安装是否正确。"]];
var contentSpan7_3Array = [["无法检测到USB设备","检查该USB储存设备是否与电视适配。","检查电视是否支持该音频与图像文件的格式。"],["播放无声音","播放器不支持该音频格式。"],["文件播放不流畅","USB储存设备的传输性能可能会影响文件传输速度。"]];	
var contentSpan7_4Array = [["当我升级软件时，我应该注意什么","软件升级时不要切断电源。","软件升级时请不要在遥控器上进行任何操作。","软件升级可能需要较长时间，请耐心等待。"],["升级后电视界面不会有明显改变","在某些情况下，软件升级可能不仅仅升级或添加新功能，同时会在界面没有明显改变的情况下增强性能。同时，电视界面有时会维持不变。"]];
var termsTitle = "免责声明";	
var termsConditions = ["您通过本电视机（“本机”）获得的内容与服务（统称“应用程序”），不是售予以给您，而仅是许可给您在本条款下使用。该等应用的提供方（“应用程序提供方”）保留所有没有明确授予您的权利。\n1．许可范围\n应用程序提供方就应用程序所授予给您的许可是一个不可转让的许可，仅允许您在您所拥有或控制的本机上使用该应用程序。您不得派发或或通过网络与其他设备共享该等应用程序，也不得出租、出借、出售、租赁、转发或转授权该等应用程序。\n您确认并同意，您通过本机接触到的所有应用程序及其内容的所有权均属于应用程序提供方，并且受相关知识产权法律的保护。您不得修改、复制、编译、拆解、再版、上传、传输、翻译任何应用程序的全部或任何部分（包括应用程序的升级版或更新版），或对其进行反向工程，或试图提取其源代码，或开发其衍生品，或以其它任何方式利用该等应用程序的全部或任何部分（包括应用程序的升级版或更新版）。如果您违反该限制，您可能会遭到起诉或索赔。授予给您的许可所包含的条款将适用于应用程序提供方提供的对原应用程序的替代和/或更新版本。但若该替代和/或更新版本附有单独的许可文件，该单独的许可文件的条款应适用。您应承担对应用程序进行升级的全部费用（若有）。\n2．第三方内容\n您可能能通过应用程序进入或接触到应用程序提供方或第三方的网站或提供的服务（以下统称“第三方服务”）。您理解在使用第三方服务的过程中，可能会遇到一些另您不愉快的、不得体的、或令人反感内容，这些内容可能不能通过明示的语言识别，并且通过搜索或进入某些链接可能会自动并无意中产生或带出令人不愉快的内容。您同意本机的生产商（“生产商”）以及应用程序提供方不对您接触到的令您不愉快的、不得体的、或令人反感内容承担任何责任。\n您确认并同意，生产商无义务对第三方服务的内容、准确性、完整性、及时性、有效性、版权、合法性、质量或其它他任何方面进行审核或评估。对于第三方服务，生产商不向您或任何其他人提供任何保证或认可或承担任何责任或义务。\n您确认并同意，第三方服务中可能包含一些受知识产权法及其他法律保护的专有内容、信息或资料（统称为“第三方内容”）。除第三方服务许可的方式以外，您不能以任何其它形式使用该等第三方内容。您同意不复制、修改、租赁、出借、销售、分发该等第三方内容或制作其衍生作品，且您同意不会以任何未经授权的方式利用第三方服务。您进一步同意不会利用第三方服务来骚扰、滥用、追踪、威胁、诽谤或其他侵犯或违反任何第三方的权利，且生产商不对您的该等行为以及您在使用第三方服务过程中收到的扰乱、威胁、诽谤、令人不愉快的或不合法的信息承担任何责任。\n3．不保证\n您确认并同意，您对使用应用程序及第三方服务承担所有的风险。所有应用程序及第三方服务均按提供时或获得时的状态向您提供，其提供方不向您提供任何明示或暗示的保证。生产商明确声明，其对于应用程序及第三方服务不作任何明示或暗示的保证，包括但不限于对于其适销性、质量满意度、适用于特定目的、准确性、平静受益权、及不侵犯任何第三方权利的保证。生产商亦不保证通过本机获得的应用程序及第三方服务的准确性、有效性、时效性、合法性或完整性，也不保证本机、应用程序及第三方服务能满足您的要求，不保证应用程序及第三方服务的运行不会被中断或无任何错误，不保证应用程序及第三方服务的瑕疵会被修复。若任何应用程序或第三方服务被证明是有瑕疵的，您需要承担所有必要的服务、修复及更正所产生的全部费用。\n您确认并同意，应用程序及第三方服务在可能在任何时候会未经通知而被更改、暂停、移除、终止、中断或禁用，且生产商对其中的内容或服务在任何时间段内的可持续获得不提供任何声明或保证。该等内容与服务是第三方通过制造商不能控制的网络或其他传输设备传输的。在不影响上述一般性原则的前提下，生产商明确声明，其对通过本机获得或接触的任何内容及服务的变更、中断、禁用、移除或暂停不承担任何责任或义务。应用程序提供方或其他服务提供方保留不经通知随时变更、暂停、移除或禁用应用程序或第三方服务的权利。生产商可在任何情况下限制您使用或进入应用程序或第三方服务，且对此不承担任何责任。\n生产商对应用程序及第三方服务相关的客户服务不负任何责任。您若有任何与应用程序及第三方服务相关的问题及服务需求，均应直接联系相关的提供方。\n4．信息的收集和使用\n您同意生产商、应用程序提供方和第三方服务提供方可以收集并使用技术数据及相关信息，包括但不限于关于本机、系统和应用软件、以及外围部设备的的技术信息，以便向您提供与本机和应用程序相关的软件升级、产品支持及其它服务（若有）。生产商、应用程序提供方和第三方服务提供方可以在确保不让您的身份被识别的情况下使用该等信息以改进其产品或改善向您提供的服务或技术支持。\n5．某些功能缺失\n由于应用程序提供方的限制，某些功能、应用及服务可能在本机（包括其外围设备）上缺失或无法在所有地区提供。本机上的某些功能可能需要您购买额外的设备或支付会员费。\n6．责任限制\n在法律未禁止的范围内，生产商在任何情况下（包括在疏忽的情况下）均不对您或任何第三方因使用本机、应用程序或第三方服务或因本机、应用程序或第三方服务中所包含的任何信息造成或引起的直接、间接、偶然、特定或附带的损失、律师费、支出或其它损失承担任何合同或侵权责任，即使生产商已经被告知这种损失发生的可能性。"];	
var noChannelListRemind = ["无频道信息。频道列表功能需要在搜台后才能使用。","频道搜台"];	
var closeSubtitleRemind = "只有当字幕关闭时才能使用该功能。是否需要现在设置？";	
var estickerTitles = ["Highly realistic images","Colors that come alive","栩栩如生的动作","Dynamic picture quality","SR UHD upscaling","Experience 3D world","更快速的性能","Future 4K content","享受上网的冲浪世界。","Access extra content","Integrated digital tuners","Connect all devices","Various 4K sources","USB content","Ultra fast WIFI","Mobile content on TV","Mobile device content","Local content","Approved by DivX","Seamless picture","Canal Ready","TDT Premium"];	
var estickerDescriptions = ["Amazing viewing experience thanks to images with four times the detail of Full HD on UHD screen","广色域释放情感，在场景中释放出生动的红色域与翠绿色。","4K frame interpolation and backlight driving to combat motion blur problems","The vividness of the original image is enhanced to produce truly dynamic expression with brilliant contrast","Enjoy crisper than before TV shows and Blu-Ray discs thanks to Super Resolution technology","Experience 3D TV ready and watch various 3D content","为你提供流畅的交互及优越的节目，享受更多的四核娱乐体验。","HEVC (H.265) codec support for upcoming standard of 4K video distribution","Wealth of online applications, VOD services, catch-up TVs and Internet web browsing","See more with additional services and content from your favorite broadcasters","Access TV channels in high definition without additional set top box","Easy to connect many digital sources available at home","TV ready for future, able to playback 4K 50/60Hz via HDMI 2.0 with HDCP 2.2","Video or photo content directly from USB drive, HDD or camera on big screen in 4K resolution","Latest generation 2x2 MIMO and AC standard delivers unrivaled Internet access speed","Enjoy photos, videos, applications from mobile devices on big screen thanks to screen mirroring technology","Photos, videos, applications from smartphone or tablet can be displayed on big screen ","Display on big screen local content like photos, videos from devices connected to local network","Play rented or own movies protected by DivX","Ultra narrow bezel and super slim design","Tested and approved by Canal+","TDT Premium tested and approved"];	
var eManualTextArray = ["使用指南","里面的所有图片仅供展示使用。"];	
var frontPanelRemind = "前面板被锁定";	
var eRPRemind = "商场模式无法满足ERP需求。是否确定选择该模式？";	
var noRelatedChannel = "没有相关频道";	
var option0624Name = ["BOP","BFS","方式","获取用户ID","BGM","全部重设","重置","NRM","DVB-T2与国家选择","HbbTV模式"];	
var DVBT2AndChoice = ["开","按国家区分","关"];	
var hbbtvServiceRemind = "HbbTV服务即将上线";	
var insertWord = "插入";	
var viewDetail = "查看细节";	
var remindOAD = "软件升级。有推荐的软件升级可能在另外一个频道上。如果您需要下载，电视将自动跳转至该频道。您是否想要现在下载？";	
var LEDStatus = ["闪烁", "普通","关"];
var netFlixRemind = "取消激活后，下次需要重新登陆";	
var ESNExplanation = "Electronic Serial Number";	
var resetShopRemind = "系统正在重新设置中，请不要关闭电源";	
var initialSelectOption = "请选择一个选项：";	
var databaseRemind = "系统已因某些未知原因将该数据库视为受损，并想要进行自动重建，按确定键继续。";	
var Deactivation = "Deactivation";	
var oadFutureRemind = "软件升级。\n 新的软件推荐可在 %s上获取。该升级可能需要较长时间，并出现黑屏。请不要在升级过程中关闭接收器。如果您接受该更新，请让接收器处于打开壮阔或在预定时间内待机。是否确定更新？";	
var bt_title = "蓝牙";	
var bt_soundOutPutName = "声音输出";	
var bt_soundOutPutTV = "TV扬声器";	
var bt_soundOutPutBT = "蓝牙设备";	
var bt_soundOutPutBT_TV = "蓝牙与电视";	
var bt_refreshBarName = "设备";	
var bt_settingTips_On = "打开蓝牙功能并扫描设备";	
var bt_settingTips_Finding = "寻找可用设备…";	
var bt_settingTips_NoDevice = "未找到可用设备";	
var bt_deviceList_State_NoConnect = "未连接";	
var bt_deviceList_State_Connecting = "远程诊断连接中…";	
var bt_deviceList_State_Connected = "已连接";	
var bt_deviceList_State_Paired = "Paired";	
var bt_deviceList_Conncect_Failed_Tips1 = "连接失败";	
var bt_deviceList_Conncect_Failed_Tips2 = "请确认XXX蓝牙功能已开启";	
var bt_deviceList_Conncect_Success = "已连接至蓝牙设备";	
var bt_deviceList_Disconncect_Success = "已断开与蓝牙设备的连接";	
var bt_deviceList_Disconnect = "你确定要断开与XXX的连接吗？";	
var bt_tipsTitle = "提示";	
var bt_bluetooth_Pairing_Title = "Bluetooth pairing";	
var bt_bluetooth_Input_Pin = "Please input PIN:";	
var bt_bluetooth_Output_Pin_Tip = "通过键盘输入PIN XXXX";	
var bt_bluetooth_Pin_Wrong_Tip = "PIN错误";	
var bt_bluetooth_Remove_Pair_Title = "询问";	
var bt_bluetooth_Remove_Pair_Ask = "是否不记录该设备？";	
var audioDescriptionName = ["旁白","音量","扬声器音量","耳机","耳机音量","AD音量","蓝牙设备","蓝牙设备音量","功放","扬声器"];
var audioDescriptionOptions = ["关","正常","旁白"];
var volumeOffRemind = "在设置菜单将 xxx打开。";	
var mEPSRemind = "商场模式无法满足MEPS需求。是否确定选择该模式？";	
var parentRatingAUOptions = ["不锁定", "锁定G及以上级别（可选）", "锁定PG及以上级别", "锁定M及以上级别", "锁定MA及以上级别", "锁定AV及以上级别",  "锁定R及以上级别", "锁定全部"];	
var mEPSTips = ["目前的图像模式无法满足MEPS需求，推荐使用基础模式",    "您的TV现在为商场模式。\n请到设置菜单中切换为家庭模式"];	
var switchSourceRemind = "已插入。是否需要切换？";	
var footballModeName = "足球模式";	
var resetStadium = "体育馆";	
var atvSearchMenu = "ATV手动搜台";	
var dtvSearchMenu = "DTV手动搜台";	
var settingNoticeSourceName = "来电通";	
var smartTVOptions = ["智能电视门户","HbbTV","网络设备","无线互联","免责声明",                            "网络唤醒","重置"];
var supportOptions = ["远程诊断","联系我们"];
var tvDoctor = ["智能电视产品体检系统2.0","该应用仅用于智能电视产品健康状态检查，使用过程中，请保持网络畅通。为提高产\n品体验，操作过程中会收集该电视相关信息。","本地诊断","请按照售后人员提示进行相应操作","远程诊断","使用前请先与售后人员确认对方在线","产品注册码：","&nbsp;&nbsp;&nbsp;&nbsp;设备序列号：","远程诊断连接中…","远程诊断正在运行,请保持网络连接状态","远程诊断异常，请检查网络","退出"];
var ClosedcaptionName = "字幕";
var sysCCOptions = ["字幕模式","模拟字幕","数字字幕","安装","字幕"];	
var sysCCmodeOption = ["关", "开", "静音开"];	
var sysanalogCCOption = ["关", "字幕1", "字幕2", "字幕3", "字幕4", "文本1", "文本2", "文本3", "文本4"];	
var sysdigitalCCOption = ["关", "服务1", "服务2", "服务3", "服务4", "服务5", "服务6", "服务7", "服务8"];	
var syssuperimposeOption = ["关", "服务1", "服务2", "服务3", "服务4", "服务5", "服务6", "服务7", "服务8"];	
var contactUsOption = ["联系我们",    "如有问题，请随时联系我们。",    "联系我们",    "网页：浏览",    "客服电话：","产品信息","型号：",    "软件版本：","","用户名：","项目名：",    "客户类型：","MAC无线地址：","MAC有线地址：","Netflix ESN:","通过手机扫描信息",    " 然后选择国家。"];
var homePageWords = ["历史记录", "搜索"];	
var titlePageWords = ["主页", "影视","TV","应用"];	
var videosPageWords = ["电影", "运动","音乐","热门","游戏","教育","新闻"];	
var statusPageWords = ["USB","设置","WiFi","有线"];	
var searchPageWords = ["搜索", "热门搜索:","节目、电影、人群……"];	
var resultSearchPageWords = ["","的搜索结果", "请试一下其他关键词","抱歉，没有发现关于","的影片"];	
var historyPageWords = ["历史记录", '按','删除历史记录',"清除该内容","清除所有","昨天","今天"," 您还没有观看过影片","成功清除所有观看记录!"];	
var channelPageWords = ["抱歉，没有发现影片"];	

//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9",
                       	   "Zoom-","0","Zoom+",
                       	   "退出","0","",
                       	   "列表","0","文字",
                       	   "导航键","进入","退出",
                       	   "菜单","字幕","信息",
                       	   "停止",
                       	   "信息","菜单","退出",
                       	   "退出"
                       	   ];

//added for LA sports mode
var sportsModeInitReminds= ["This wizard is used to set up the USB drive for Sports Mode. Please select the setup mode.",
						 "Please select the file size for Sports Mode.",
						 "Creating Sports Mode file",
						 "The USB drive speed is too slow (< %f MB/sec) for Sports Mode feature!",
						 "The USB drive is ready for Sports Mode. But we recommend changing it (to speed > %f MB/sec) for better performance.",
						 "The USB drive is ready for Sports Mode."];

var sportsModeExtra	= ["Do you want to stop the Sports Mode, and change channel?",
						"Do you want to stop the Sports Mode, and change source to device connected to SCART input?",
						"Do you want to stop the Sports Mode, and change source to device connected to an HDMI input?",
						"Sports Mode is not supported on Scrambled Channel.",
						"Do you want to stop the Sports Mode, and enter EPG?",
						"Do you want to stop the Sports Mode, and enter Media?",
						"Do you want to stop the Sports Mode, and change input source?",
						"TV will end the current Sports Mode. Do you want to exit?"];
var remoteControlNote = "注：不同型号的遥控器，其按钮的外观和功能可能不一样。";


var textArray = ["音量","频道","信源","切换/电源","向导","秒将关机"];
var guideArray = ["VOL-","VOL+","CH-","CH+","Pre","Next"];
var favChannelListRemind = ["暂无喜好频道。请进入其他清单，按绿色键添加喜好频道。"];

var proxySetting = ["代理服务器","端口"];
var powerOffShop = ["推荐使用卖场模式，是否继续？"];
var tcastTextPageWords = ["海量影视 多彩应用","电视遥控 就在指尖","精彩内容 大屏分享"];
var tcastOtherWords = ["扫描二维码 下载多屏互动","电视所在网络","电视名称","多屏互动"];
var hbbtvWords = ["HbbTV Setting","HbbTV","Cookies","Thrid Party Cookies","Device ID","Tracking"];
var hbbtvTrackingWords = ["YES","NO","Don't care"];
var eStickerTipWords = ["Storage is under 500M,would you like to delete the videos in Demo mode bo obtain more space?"];
var delEstickerVideoRemid = ["The video has been deleted successfully"];
var selectSatRemind = "选择不能超过20个卫星!";