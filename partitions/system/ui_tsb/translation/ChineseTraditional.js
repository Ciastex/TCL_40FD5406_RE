var  all_country  = ["澳大利亞","奧地利","比利時","保加利亞","科迪亞","捷克","丹麥","芬蘭","法國","德國",
                     "希臘","匈牙利","意大利","盧森堡","荷蘭","挪威","波蘭","葡萄牙","羅馬尼亞","俄國",
					 "塞爾維亞","斯洛文尼亞","西班牙","瑞典","瑞士","英國","新西蘭"," "/*Arab*/,"愛沙尼亞"," "/*Hebrew*/,
					 "拉脫維亞","斯洛伐克","土耳其","愛爾蘭","日本","菲律賓","泰國","馬爾代夫","烏拉圭","秘魯",
					 "阿根廷","智力","委內瑞拉","厄瓜多爾","哥斯達黎加","巴拉圭","玻利維亞","伯利茲","尼加拉瓜","危地馬拉",
					 "中國","台灣","巴西","加拿大","墨西哥","美國","韓國","其它","立陶宛"/*新添加的，底層結構體中沒有*/,"烏克蘭"/*新添加的，底層結構體中沒有*/,
					 "伊朗","伊拉克"," ","哈薩克斯坦","烏茲別克斯坦"," ","吉爾吉斯斯坦","阿爾及利亞","埃及","突尼斯",
					 "坦桑尼亞","肯尼亞","巴基斯坦","印度尼西亞","科威特","沙特","卡塔爾","以色列","黎巴嫩","巴林",
					 "安哥拉","剛果","印度","土庫曼斯坦","哥倫比亞","蒙古","孟加拉","尼泊爾","斯里蘭卡","北朝鮮",
					 "摩爾多瓦","法屬波利尼西亞","薩爾瓦多"," ","斐濟","利比里亞","約旦","緬甸","加納","格魯吉亞",
					 "亞美尼亞","阿曼","也門","敘利亞","巴勒斯坦","阿富汗","摩洛哥","貝寧","科特迪瓦","尼日利亞",
					 "蘇丹","埃塞俄比亞","贊比亞"," ","南非","莫桑比克","利比亞","阿爾巴尼亞","白俄羅斯","冰島",
					 "立陶宛","毛里求斯","迪拜","阿聯酋","塔吉克斯坦","","波黑","塞浦路斯","科索沃","馬其頓",
					 "馬爾他","波黑"," ","新加坡","馬來西亞","法屬喀裡多尼亞","其它"," "," ","",
						" "," "," "," "," "," "," "," "," ","巴拿馬"];
var all_language = ["捷克語","Chamic","丹麥語","Dargwa","Landdayak","德語","英語","西班牙語","希臘語","法語","克羅地亞語","Sorbianupper","意大利語","匈牙利語","荷蘭語","挪威語","波蘭語","葡萄牙語","俄羅斯語","羅馬尼亞語","斯洛文尼亞語","塞爾維亞語","芬蘭語","瑞典語","保加利亞語","斯洛伐克語","簡體中文","Chuukese","蓋爾語","Gbaya","威爾士語","阿拉伯語","愛爾蘭語","拉脫維亞語","Hebrew","土耳其語","愛沙尼亞語","荷蘭語"/*Netherlands*/,"Korean","Kosraean","Hindi","Hittite","Hmong","Mandarin","Cantonese","Maori","原始音頻"/*Qaa*/,"未定義"/*Undetermined*/,"Ad","未知","未定義","Abkhazian","Achinese","Acoli","Adangme","Adyghe","Afar","Afrihili","Afrikaans","Afro","Ainu","Akan","Akkadian","Albanian","Aleut","Algonquian","Altaisouthern","Altaic","Amharic","Apache","Aramaic","Aragonese","Arapaho","Araucanian","Arawak","Armenian","Artificial","Assamese","Asturian","Athapascan","Austronesian","Australian","Avaric","Avestan","Awadhi","Aymara","Azerbaijani","Aztec","Balinese","Baltic","Baluchi","Bambara","Bamileke","Banda","Bantu","Basa","Bashkir","巴斯克語","Beja","Bemba","Bengali","Berber","Bhojpuri","Bihari","Bikol","Bini","Bislama","Bosnian","Braj","Breton","Buginese","Buriat","Burmese","Blin","白俄羅斯語","Caddo","Carib","加泰羅尼亞語","Caucasian","Cebuano","Celtic","Centralamericanindian","Chagatai","Chamorro","Chechen","Cherokee","Cheyenne","Chibcha","Chinookjargon","Choctaw","Chipewyan","Churchslavic","Chuvash","Coptic","Cornish","Corsican","Cree","Creek","Creolesandpidgins","Crimeantatar","Creolesandpidginsenglish","Creolesandpidginsfrench","Creolesandpidginsportuguese","Kashubian","Cushitic","Dakota","Delaware","Slavey","Dogrib","Dhivehi","Dinka","Divehi","Dogri","Dravidian","Sorbianlower","Duala","Dutchmiddle","Dyula","Dzongkha","Efik","Egyptian","Ekajuk","Elamite","Englishmiddle","Englishold","Angika","Eskimo","Esperanto","Ewe","Ewondo","Fang","Fanti","Faroese","Fijian","Filipino","Finnougrian","Fon","Frenchmiddle","Frenchold","Frisiannorthern","Frisianeastern","Frisian","Fulah","Friulian","Ga","加利西亞語","Ganda","Gayo","Geez","Georgian","Germanmiddlehigh","Germanoldhigh","Gorontalo","Germanic","Gilbertese","Gondi","Gothic","Grebo","Greekancient","Greenlandic","Guarani","Swissgerman","Gujarati","Gwichin","Haida","Haitiancreole","Hausa","Hawaiian","Herero","Hiligaynon","Himachali","Hirimotu","Hupa","Iban","冰島語","Ido","Nuosu","Igbo","Ijo","Iloko","Indic","Indoeuropean","Ingush","Indonesian","Interlingua","Interlingue","Inuktitut","Inupiak","Iranian","Irishold","Irishmiddle","Iroquoian","Japanese","Javanese","Lojban","Judeoarabic","Judeopersian","Kabyle","Kachin","Kamba","Kannada","Kanuri","Karakalpak","Karen","Kashmiri","Kawi","Kazakh","Circassian","Khasi","Khmer","Khoisan","Khotanese","Kikuyu","Kinyarwanda","Kirghiz","Kimbundu","Komi","Kongo","Konkani","Kpelle","Karachaybalkar","Karelian","Kru","Kuanyama","Kumyk","Kurdish","Kurukh","Kusaie","Kutenai","Ladino","Lahnda","Lamba","Langue","Lao","Latin","Luxembourgish","Lezghian","Limburgish","Lingala","立陶宛語","Lozi","Lubalulua","Lubakatanga","Luiseno","Lunda","Luo","Lushai","Macedonian","Madurese","Magahi","Maithili","Makasar","Malagasy","Malay","Moksha","Mandar","Malayalam","Maltese","Manchu","Mandingo","Manipuri","Manobo","Manx","Marathi","Mari","Marshall","Mirandese","Marwari","Masai","Mayan","Erzya","Mende","Micmac","Minangkabau","Miscellaneous","Mohawk","Moldavian","Monkmer","Mongo","Mongolian","Mossi","Multiple","Munda","Neapolitan","Nauru","Navajo","Ndebelenorth","Ndebelesouth","Ndongo","Germanlow","Nepali","Newari","Nias","Nigerkordofanian","Nilosaharan","Niuean","Norwegianbokmal","Nogai","Norseold","Northamericanindian","Norwegiannynorsk","Nubian","Nyamwezi","Newariclassical","Nyanja","Nyankole","Nyoro","Nzema","Ojibwa","Oriya","Oromo","Osage","Ossetic","Otomian","Pahlavi","Palauan","Pali","Pampanga","Pangasinan","Panjabi","Papiamento","Papuanaustralian","Persian","Persianold","Phoenician","Philippine","Ponape","Prakrit","Provencalold","Pushto","Quechua","Rhaetoromance","Rajasthani","Rapanui","Rarotongan","浪漫","Romany","Rundi","Aromanian","Salishan","Samaritanaramaic","Samisouthern","Saminorthern","薩米語","Lulesami","Inarisami","Samoan","Skoltsami","Sandawe","Sango","Sanskrit","Sardinian","Sasak","Santali","Sicilian","Scots","Selkup","Semitic","Sranantongo","Serbocroatian","Serer","Sign","Shan","Shona","Sidamo","Siksika","Sindhi","Soninke","Singhalese","Sinotibetan","Siouan","Slavic","Siswant","Sogdian","Somali","Songhai","Sorbian","Walloon","Nko","Sothonorthern","Sothosouthern","Southamericanindian","Sukuma","Sumerian","Sudanese","Susu","Swahili","Swazi","Swize","Syriacclassical","Syriac","Tagalog","Tahitian","Tetum","Tajik","Tamashek","Tai","Tamil","Tatar","圖文信息","Telugu","Tereno","Thai","Tibetan","Tigre","Tigrinya","Timne","Tivi","Klingon","Tokelau","Tlingit","Tonganyasa","Tongaislands","Truk","Tokpisin","Tsimshian","Tsonga","Tswana","Tumbuka","Tupian","Turkishottoman","Turkmen","Tuvinian","Tuvalu","Twi","Udmurt","Ugaritic","Uighur","烏克蘭語","Umbundu","Urdu","Uzbek","Vai","Venda","Vietnamese","Volapuk","Votic","Wakashan","Walamo","Waray","Washo","Wolof","Kalmyk","Xhosa","Yakut","Yao","Yap","Yiddish","Yoruba","Yupik","Zapotec","Blissymbolics","Zenaga","Zhuang","Zande","Zulu","Zuni","Zazaki","Valencian","繁體中文","ChineseS","QAB","QAC","ArabicEgypt","*","*","Dagbani","Kasem","*"];
var offOn = ["關","開"];	
var okCancel = ["確認","取消"];	
var yesNo = ["是","否"];	
var level = ["關","低","高","中"];	
var manualAuto = ["手動","自動"];	
var homeShop = ["家庭","商場"];	
var picPreset = ["標準","明亮","柔和","電影","自定義"];
var picColorTemp = ["冷","標準","暖","自定義"];
var pic3dNavig = ["手動","自動","半自動"];	
var _3dOptions = ["3D模式","3D轉2D","左右轉換","景深"];	
var pic3DMode = ["關","2D轉3D","左右轉換","上下轉換","線性交錯"];	
var picEcoOptions = ["節能","光感器","本地調光","混合調光"];	
var picGeoOptions = ["幾何","水平位置","垂直位置","時鐘","相位調整"];
var picAdWhiteBal = ["增加R值","增加G值","增加B值","R值補償","G值補償","B值補償"];	
var souOptions = ["聲效","平衡","聲音延遲","音效","自動音量控制","數字音頻輸出","數字音頻輸出延遲","聲音場景","音頻語言","聲音類型","旁白","低音增強","杜比＋"];
var souSpdifType = ["自動"/*Dolby*/,"PCM","關"];
var colorSpace = ["自動","本地","用戶設定"];
var souPresetPara	= ["100Hz","500Hz","1.5KHz","5KHz","10KHz"];
var chOptions = ["搜台","頻道列表","節目指南","頻道管理","頻道診斷","時移","字幕","圖文","頻道列表類型"];
var chDiagOptions = ["信號強度","信號質量","頻率（KHz）","服務ID","網絡ID","網絡名"];	
var chScanOptions = ["國家","調諧器類型","自動搜索","自動更新","模擬手動掃描",["有線手動安裝","天線手動搜索","衛星手動調音"],"衛星地面設置","偏好網絡選擇","清除頻道列表","LCN"];
var favNetDes = "請選擇你的網絡";	
var tuner = ["有線","天線","衛星"];	
var passError = "密碼不正確，請再次輸入！";	
var chType = ["模擬信號: ","數字信號: "];
var chScanStatus = ["狀態：掃描","狀態：掃描完成","狀態：掃描取消","狀態：掃描錯誤"];	
var chScanPara = ["頻率（KHz）","調製","符號率（Ksym/s）","網絡ID","系統","頻道微調","信號強度","信號質量","掃描模式","頻道ID"];	
var chScanParaMHZ = ["頻率（MHz)"];	
var chAtvManSys = ["西歐","東歐","英國","法國"];	
var modulation = ["16QAM","32QAM","64QAM","128QAM","256QAM","自動"];	
var chCleanDes = "確定要清除頻道列表嗎？";	
var chDeletDes = "確定要刪除此頻道嗎？";	
var chOperator = ["Ziggo","UPC","其它"];	
var chScanType = ["數字和模擬","數字","模擬"];	
var chScanMode = ["全頻點","高級","快"];	
var bookingModes = ["錄製的視頻將被保存在名為“pvr”的文件夾。","提醒"];	
var dayName = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];	
var monthName = ["一月", "二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];	
var filter = ["分類","類型","子類型"];	
var chEpgFirstGenre = ["電影","新聞","節目","運動","兒童","音樂","藝術","社交","教育","娛樂","專題"];	
var chEpgSecondGenre = [["戲劇","偵探","冒險","科幻","喜劇","電視劇","浪漫","莊重","成人電影"," "," "," "],["時事","天氣預報","新聞雜誌","紀錄片","討論"," "," "," "," "," "," "," "],["節目","遊戲節目","綜藝節目","脫口秀"," "," "," "," "," "," "," "," "],["運動","特別活動","運動雜誌","足球","網球","團隊運動","田徑","摩託運動","水上運動","冬季運動","馬術","武術"],["兒童","學前兒童","6~14歲","10~16歲","信息","卡通"," "," "," "," "," "," "," "],["音樂","搖滾","莊重","民謠","爵士","歌劇","芭蕾"," "," "," "," "," "],["藝術","表演藝術","美術","宗教","流行文化","文學","電影","典型","廣播","新媒體","藝術雜誌","時尚"],["社交","雜誌","經濟","名人"," "," "," "," "," "," "," "," "],["教育","自然","科技","藥物","海外","社會科學","繼續教育","語言"," "," "," "," "],["休閑愛好","旅遊","手工藝","駕駛","健身","烹飪","廣告","園藝"," "," "," "," "],["初始語言","黑白","未發布","直播"," "," "," "," "," "," "," "," "]];	
var chOrganizer = ["跳過頻道","頻道分類","頻道編輯","刪除頻道","交換頻道","插入頻道"];	
var chEditPara = ["網絡名稱","頻道號","頻道名稱","頻率","顏色系統","聲音系統"];	
var chSatTitles = ["衛星類型","衛星地面設置","選擇衛星"];	
var chSatEidtOptions = ["衛星名稱","地址","LNB開關","LNB頻率（MHz）","DiSEqC輸入","22KHz音調","音頻脈衝","頻率（KHz）","符號率（Ksym/s）","偏振","信號強度","信號質量","衛星狀態"];	
var chSatAutoPromt = [["全部","網絡"],["全部","免費"]];	
var chSatAutoScanOptions = ["選擇衛星","掃描模式","頻道"];	
var chSatPosition = ["A","B"];	
var chSatLNBFreq = ["通用",];	
var chSatDiSEqCInput = ["禁用","A","B","C","D"];	
var chSatTone22KHz = ["自動","開","關"];	
var chSatToneBurst = ["禁用","音頻脈衝A","音頻脈衝B"];	
var chSatPolarization = ["水平位置","垂直位置"];	
var chSatSetupOptions = ["天線類型","調音","帶頻"];	
var chSatAntennaType = ["單芯電纜","通用"];	
var chSatUserBands = ["寬帶1","寬帶2","寬帶3","寬帶4","寬帶5","寬帶6","寬帶7","寬帶8"];	
var chSatOthers = ["應答機"];	
var chSatSetupOthers = ["用戶定義"];	
var pleaseSelectSat = "請先選擇衛星！";	
var subOptions = ["字幕","數位字幕語言","數位字幕語言2","字幕類型"];	
var ttxOptionsCon = ["解碼頁面語言","數字圖文電視"];	
var subType = ["正常","聽力障礙"];	
var netIntf = ["有線","無線"];
var netConnDes = ["正在測試網絡連接，請稍等。","網絡連接測試成功。","網絡連接測試失敗。"];	
var netSsidError = "SSID的有效長度為1~32字節，請檢查SSID。";	
var netOthers = ["PIN碼"];	
var netWlessAutoDes = ["請在確認以下的PIN碼已被裝入接入點後再點擊確定。","請在點擊確定之前的120秒之內按下接入點上的按鈕。"];	
var netConnRemind = ["密碼錯誤！","連接中，請稍候！","連接成功，IP地址已獲取！","連接失敗，請檢查網絡連接並再試一次！","電視正在掃描接入點，請稍候","沒有無線適配器連接到電視！"];	
var netWireIpOptions = ["IP設置","地址類型","IP地址","子網掩碼","默認網關","首選DNS","備用DNS"];	
var netWireConnRemind = ["請在0到255之間輸入有效值","成功連接！","請輸入有效地址","成功連接！","連接失敗。","連接中，請稍候！","請在1到233中輸入一個有效值"];	
var netFlixOptions = ["取消啟動","ESN","Netflix版本"];	
var netFlixDes = ["是否確定停用？"," "/*Are you sure that you want to ESN?*/];	
var netUpdateTitle = "軟件升級";	
var netUpdateDialogTitle = "軟件升級中";	
var netBGDownloadTitle = "下載中";	
var netUpdateLoadingPrompt = ["正在尋找升級，請稍候！","正在下載軟件…請稍候！","請不要在軟件升級的過程中關閉電視！",                            "軟件正在後台自動下載！"];	
var netUpdatePrompt = ["恭喜，你的軟件版本已經是最新版本了！","已檢測到新的系統版本XXXX，想要現在下載嗎？可能會根據網絡狀況需要一段時間。","登入失敗，請檢查並再次連接！","獲取數據失敗，請稍候再試！","升級失敗，請用遙控器切換開關！","連接失敗，請檢查網絡連接並再試一次！","系統已成功下載。想要現在開始升級你的電視嗎？","數據丟失，下載失敗！","系統文件檢查失敗，請再嘗試一次！","連接出現問題，請檢查並重新連接！","升級失敗，請用遙控器切換開關。","升級文件被意外刪除，請連網重新升級。","系統升級包已在後台成功下載，想要現在進行升級嗎?"];	
var netUpdateButtonText = ["下載中", "升級", "稍後", "永不", "確認","繼續"];	
var autoDetectPrompt = ["已檢測到新的系統版本XXXX，想要現在下載嗎？可能會根據網絡狀況需要一段時間。","已檢測到新的系統版本XXXX， 想要現在升級嗎？","上次的升級過程被網絡中止了。你需要重新升級。",                        "最新版本XXXX的下載還沒有結束。需要繼續完成嗎？",                        "系統升級包已下載，想要現在升級嗎？"];	
var sysOptions = ["使用指南","菜單語言","時間設置","保護鎖","信源命名","軟件升級","使用地點","HbbTV模式","Cookies","公用接口","高級設置","重置","LED指示燈","快速開機","自動商場模式","地區","演示模式"];
var sysResetDes = "你確定需要執行選定操作嗎？";	
var sysMenuLangOptions = ["語言","首選語言","首選語言2"];
var sysTimerOptions = ["時區","區域名","時鐘","定時睡眠","自動待機", "國家區域","回曆"];
var sysTimeZone = ["根據廣播","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00","GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30","GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00","GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00","GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00","GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00","GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];	
var sysTimeZoneLA = ["廣播","國家1","國家2","國家3","國家4","國家5"];	
var sysSleepTimer = ["關","10分鐘","20分鐘","30分鐘","40分鐘","50分鐘","60分鐘","90分鐘","120分鐘"];	
var sysStandby = ["關","4小時","6小時","8小時"];	
var sysRegionName = ["馬德里","加納利群島"];	
var sysClockOptions = ["自動同步","日期","時間","定時開機","時鐘","頻道開關","定時關機","時鐘"];
var sysTimer = ["關","每日","一次"];	
var sysInputSet = ["無標籤","DVD","藍光","HDD","DVDR","HD rec","遊戲","VCR","PC","數字機頂盒","高清數字機頂盒","相機","錄音機","其它"];	
var sysAvVideoInput = ["自動","RGB_CVBS","RGB","CVBS","S-Video"];	
var sysUpdate = ["通過USB","通過網絡","通過頻道"];	
var sysUpdateDes = [" "," "," ","未檢測到可供更新的系統！","已檢測到新的系統版本XXXX， 想要現在升級嗎？","請插入USB。","系統文件檢查失敗，請再嘗試一次！","升級中。可能會需要一些時間完成，電視將會在完成後自動重啟","系統已成功升級。電視即將自動重啟","已檢測到新的系統版本XXXX，想要現在下載嗎？可能會根據網絡狀況需要一段時間。","下載中","系統已成功下載。想要現在開始升級你的電視嗎？","升級失敗","尋找升級文件","系統已成功升級，請重啟電視。"];	
var sysProductInfo = ["現在版本","產品名稱","生產者名稱","機芯名稱"];
var sysCiDes = ["沒有可用的CI卡。"];	
var sysAdOptions = ["DivX®註冊","DivX®註銷","T-Link","授權錯誤","註銷確認","租賃確認","租賃期限"];	
var sysRegistDes = ["只有註冊您的設備才能播放保護視頻","產品註冊碼：","在http://vod.divx.com註冊"];	
var sysDregistDes = ["註銷碼：","在http://vod.divx.com註銷","繼續註冊？"];	
var mediaAuthorization = ["你的設備未被授權播放此保護視頻"];	
var deregistrationConfrimation = ["你的設備已經被註冊了","是否確定註銷？"];	
var rentalConfirmation = "DivX®租借已經用掉了XXX/YYY，繼續嗎？";	
var rentalExpired = "DivX®租借已經用掉了XXX/YYY，租借已過期。";	
var parentalRatingLA = ["父母鎖","年齡等級","內容等級"];
var parentalRatingNA		= ["***","***","***","***","***","***","***","***"];
var parentalRatingOptionUS		= ["***","***","***"];
var sysTVRatingUS=["***","***","***","***","***"];
var sysMPAAUS=["***","***","***","***","***","***"];
var parentalRatingOptionCanada		= ["***","***","***"];
var sysCanadaEng=["***","***","***","***","***","***"];
var sysCanadaFre=["***","***","***","***","***",""];
var sysResetRRT=["***"];
var ageRatingOptions = ["無","低 10","低 12","低 14","低 16","低 18"];	
var contentRatingOptions = ["關","毒品","暴力","色情","暴力&毒品","色情&毒品","暴力&色情","暴力，色情&毒品"];
var sysLockOptions = ["頻道鎖","時間間隔鎖","父母鎖","信源鎖","面板鎖","搜臺鎖","更改密碼","最大音量","清除所有"];
var sysTimeIntervals = ["鎖類型","開始時間","結束時間"];	
var sysRatingOptions = ["無","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","三級片"];	
var changePass = ["更改密碼","新的密碼","確認密碼"];	
var changePassDes = ["密碼不正確，請再次輸入！","密碼不匹配，請再次輸入！","密碼設置成功！","密碼過於簡單，請再次輸入！"];	
var sysPowerOnChOptions = "選擇模式";	
var sysPowerOnCh = ["最新狀態","用戶選擇"];	
var netWlessSecu = ["開始時間","WEP","WPA/WPA2-PSK"];	
var netWlessSecu2 = ["無","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK","不支持"];	
var netWlessSecu3 = ["無","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","不支持"];	
var netOptions = ["網絡連接","連接方式","無線設置","IP設置","信息","連接測試","DLNA","多屏互動","Netflix設置","無線互聯","地址類型","IP地址","子網掩碼","默認網關","首選DNS","備用DNS","SSID","BSSID","請輸入SSID：","用戶ID"];
var chEditDes = ["複製頻道號碼！","按紅鍵來刪除當前頻道","無效頻道號"];	
var chEpgNoProgram = "沒有節目信息，請先搜尋頻道！";	
var chEpgWords = ["節目指南","沒有節目數據","頻道被鎖！","無節目說明","無節目名稱"];	
var chEpgBooking = ["計劃信息", "頻道號","開始日期","開始時間","結束時間","重複類型","計劃類型","添加計劃","替代","改變","增加/修改"];	
var epgHotKey = ["前一天","後一天","分類","計劃列表","添加計劃"];	
var chEpgBookRemind = ["開始時間有誤","結束時間有誤","複製計劃","成功保留","成功刪除"];	
var chSchePara = ["計劃列表","開始時間","開始日期","節目名稱","頻道名稱","持續時間","重複","計劃","編輯","刪除"];	
var dateTimer = ["一次","每日","每周"];	
var scheduleDeleteReminds = "確定想要刪除這個計劃嗎？";	
var scheduleNoLists = "暫無預約節目列表。按紅色鍵添加。";	
var chListWords = ["頻道列表","選擇列表","調諧器類型","添加到收藏","移動","選擇頻道列表","選擇調諧器類型","交換"];	
var chListType = ["全部","數字","模擬","收音機","免費","收藏"];	
var chAutoScanOptions = ["選擇操作器","頻道類型","自動搜索"];	
var souSoundType = ["無效","單聲道","單聲道","立體聲道","立體聲道","副聲道","副聲道","雙聲道1","雙聲道3","雙聲道3","麗音單聲道","麗音立體聲","麗音雙聲道1","麗音雙聲道2","麗音雙聲道","單聲道","左聲道","右聲道","模擬雙聲道"];
var souPreset = ["音樂","影院","新聞","標準","自定義"];
var picAdRgbMode = ["關","紅模式","綠模式","藍模式"];
var picAdOptions = ["降噪","MPEG 降噪","紅綠藍模式","動態對比度","LED運動清晰度","膚色","電影模式","遊戲模式","色溫 ","白平衡","畫面凍結","黑電平延伸","視野","伽馬","HDMI模式","10點白平衡","顏色增強","減少模糊","減少抖動","色彩空間","動作清晰度"];	
var pic10Pwhite = ["間隔","紅","綠","藍","重置","顏色","黃","藍綠色","品紅"];	
var picMotionClarity = ["動作模式","運動插值","LED運動清晰度","減少模糊","減少抖動","重置"];	
var picMotionMode = ["電影","光滑","清晰","運動","定製化"];	
var picResetDes = "所有個性化設定將會被重置，是否確定繼續？";	
var pic10PReset = "是否確定想要重置10P白平衡？";	
var picMotionReset = "是否想要重置運動清晰度？";	
var picColorSpaceReset = "是否確定想要重置色彩空間？";	
var picOptions = ["圖效","背光","亮度","對比度","飽和度","色調","銳度","色溫 ","屏幕模式","自動格式","動作加強","3D","3D導航","ECO設置","幾何","高級設置","圖效重置","區域對比度"];
var picSize = ["16 :9 格式", "4：3 格式", "14:9 格式", "寬屏模式","16:9 放大", "16:9 放大","14:9 放大","交叉縮放","廣角","縮放2","廣角2","屏幕本地匹配","點對點","原生","全景"];	
var others = ["音量","廣播","密碼","狀態","保留","替代","開始","退出","搜索","刪除","無","自動","掃描","安全性","連接","刷新","重試","停止","設置","頻道","編輯","插入","信號","完成","立體聲道","音頻","信源","無音頻","提示","重置","定製化","設置","商場","用戶","關閉鍵盤","安全模式","每天","PVR列表"];	
var direction = ["左","右","上","下"];	
var audioType = ["MPEG","DOLBY AUDIO"/*"AC3"*/,"MPEG4","AAC", "DOLBY AUDIO"/*"AC3P"*/,"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD"," "," "," "," "," "," ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2","HE-AAC_V4","未知"];
var soundChannels = ["未知","單聲道","代替","雙單聲道","立體聲道","立體聲子","立體杜比環繞聲","環繞 2Ch","環繞 2Ch","3.0Ch","4.0Ch","5.0Ch","單聲道LFE","雙單LFE","立體聲LFE","第二環繞聲LFE","環繞聲LFE","3.1Ch","4.1Ch","5.1Ch","7.1Ch","聯合立體聲","單聲道","立體聲","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","左","右","其它"];	
var prompts = ["根據播放環境調整最好的畫面設置","調整亮度，數值越接近100，亮度越大","調整對比度，數值越接近100，畫面的明暗對比差別會越大","調整飽和度，數值越接近100，顏色越強烈","調整銳度。數值越接近100，細節越清晰","調整背光強度。數值越接近100， 屏幕越亮","調整色調。這項設置改變色調。","選擇最適合當前播放節目的畫面格式","配置節能選項","連接至PC設備時調整屏幕幾何設置","選擇更多畫面高級設置","重置所有畫面設定回默認狀態","選擇你個人偏好的聲音模式","在左右聲道之間調整音量平衡","聲響歸真環繞高清體系可在高、低頻提供豐富的音量表現效果和清晰度","數字界面格式連接至電視數字音響輸出到家庭劇院音響設備","選擇你個人偏好的音響語言","能夠讓視覺障礙者享受電視節目","測試你的電視畫面，聲音與信號","選擇適合你的電視信號的頻道列表","選擇顯示在屏幕底端的節目字幕語言。","觀看當前頻道的文字與圖片","數字直播網絡聯盟。通過家庭網絡中的其它設備（比如PC）享受音樂、照片和視頻","將你的手機內容展示在電視上並將智能手機當做遙控器使用。","將帶有Miracast適配的安卓設備展示在電視屏幕上","給您的電視上鎖","為您的設備選一個名字","選擇您的播放環境","將所有系統設置重置回默認狀態","Switch off sports mode for more options.","Enhance the environmental contrast","A special mode to enjoy sport games","Enjoy more CEC functions."];
var initialTitle = ["歡迎","初始設置"];	
var initialPrompt = ["請先進行初始設置，一個充滿精彩體驗的世界在等你！","請選擇您的語言：","請選擇您的國家：","請選擇您的地點：","請選擇您的網絡連接類型：","請選擇您的有線網絡連接模式：","連接到XXXXX失敗！ 請根據以下的圖表連接設備或按左鍵重設","連接到XXXX! 請按右鍵繼續。","1） 您的電視可能已經擁有內置無線適配器 2）或者，如果有無線USB適配器提供，將它連接至你的電視。然後，請選擇無線網絡連接模式","掃描中。請稍候…","沒有無線適配器連接到電視！","請在按下一步之前確保以下的PIN碼已經安裝在接入點中","請在按右鍵繼續前的120秒內按下接入點上的按鈕！","WPS（無線保護設置）","PIN（個人識別編號）","PBC（按鈕配置）","以下內容僅可以在連接網絡的情況下接入。仍然要跳過網絡設置嗎？","檢測到一些新的軟件升級可供下載，這可能需要根據你的網絡狀況花費一些時間。","升級電視軟件可以讓您享受最新的推薦和服務。","您將無法享受最新推薦和服務，確定繼續跳過軟件升級嗎？","按右鍵繼續","請不要在升級過程中關機，可能會導致電視故障","如果你不希望升級，請選“不”。","升級中，請稍候","你也可以在“系統/軟件升級”中升級軟件","選擇國家需要設置密碼，請設置你的電視密碼並且確認。","密碼過於簡單，請使用不同數字。","恭喜！初步設置已完成。你可以通過主菜單和相關的副菜單修正設置。","請選擇安全模式：","請選擇無線網絡連接模式：","網絡"];	
var initNetCabAndDonRe = ["沒有有限網絡連接，請插入有線網絡！","沒有內置無線適配器或者無線USB適配器提供。"];	
var initChPrompt = ["電視頻道安裝","請選擇天線掃描類型。","搜臺中...","已發現以下天線頻道：","請選擇有線掃描類型：","請從以下菜單選擇一個控制器。","請配置掃描信息","已發現以下有線頻道：","請從以下菜單選擇一個控制器。","請選擇供掃描的衛星或編輯已選中的衛星","請設置衛星參數","已發現以下頻道，頻道掃描也可以在“頻道/頻道掃描”菜單中重新操作"];	
var initClockPrompt = ["獲得提供網絡時間！","請設置日期和時間："];	
var initialOptions = ["環境","網絡設置","軟件更新","頻道安裝","時鐘"];
var initialHotkeys = ["返回","選擇","下一個"];	
var initLocations = ["家庭","商場","商場演示"];	
var initNets = ["有線","無線","我沒有網絡連接"];	
var initWireManuals = ["IP地址","子網掩碼","默認網關","首選DNS","備用DNS"];	
var initSoftUpdates = ["現在升級","待會升級"];	
var initChannelIns = ["繼續","我不想安裝頻道"];	
var initChScanTypes = ["數字和模擬","數字","模擬","我不希望掃描"];	
var initChDvbts = ["天線ATV頻道：","天線DTV頻道："];	
var initChDvbcs = ["有線ATV頻道：","有線DTV頻道："];	
var initChDvbss = ["衛星頻道："];	
var initChDvbSOther = ["我不想要衛星搜台"];	
var initEndConnectedStatus = ["未連接","已連接無線","已連接有線"];	
var initEndInstallations = "XXXX頻道被導入";	
var initEndUpdate = ["升級"];	
var audioScenes = ["桌面","壁掛"];	
var screenSavers = ["沒有節目信息，請先搜尋頻道！","無信號！","擾頻","只有數據","音頻節目","沒有音視頻","不可用","沒有圖文","沒有節目數據","節目已被鎖！","節目已被鎖！按確定鍵輸入你的密碼。","無節目說明","此節目需要家長指引，請輸入你的密碼。","頻道被鎖！","頻道已被鎖！請按確定鍵輸入密碼。","輸入被鎖！請按確定鍵輸入密碼。","不支持！","此設備暫不可用","輸入已被鎖！","無節目名稱","無功能","沒有字幕"];
var chBookingPromt = ["當前頻道有錄製計劃，電視將開始錄製。","檢測到錄製計劃。調到XXX台開始錄製","當前頻道有提示","檢測到有提醒的頻道。調到XXX台"];	
var timeUnit = ["秒","分鐘"];	
var ciPromt = ["網絡數據已經改變，可通過升級掃描進行升級",];	
var othersPromt = ["請稍候…",];	
var menuOptions = ["圖像","聲音","頻道","智能電視","網絡","系統","支持"];	
var optionOptions = ["圖效","聲效","畫面凍結","T-Link","時移","PVR","計劃列表","設置","演示"];
var optionTLinkPromt = [["自動開機","自動待機","指導菜單"],["電影 開","待機","音量放大器"]];
var powerPromt = ["電視即將關機，請按任意鍵取消"];	
var ttxLanguage = ["西歐","東歐","俄羅斯語","阿拉伯語/希伯來語","波斯語","阿拉伯語","白俄羅斯語","希臘語","土耳其語"];	
var ttxOptions = ["揭示","循環子頁面","語言","警告頁面","簡明新聞"];	
var weekday = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];	
var lcnConfflict = "此頻道有接收問題。在%d 頻道有另一版本可供觀看。";	
var inShopMode = "電視在購物模式。回到主頁請選“系統”並在菜單中改變“位置”";	
var nitRefresh = "網絡數據已改變。是否需要進行升級掃描？";	
var picHDMIMode = ["自動","電腦桌面","視頻"];	
var glassRemind = ["請將3D眼鏡與電視進行配對（持續按3D眼鏡上的電源鍵）","你的3D眼鏡已連接至電視",""];	
var pvrRemind = ["請不要拔出USB或關閉電源"];	
var pvrConName = ["PVR","節目信息：",["提示：若要錄製高清頻道，請選擇傳輸速度大於5MB每秒的USB設備；若要錄製超清頻道，選擇傳輸速度大於3MB每秒的USB設備","錄製視頻已保存在\"PVR\"文件夾內"],"停止","錄製的視頻將被保存在名為“pvr”的文件夾。","小時","分鐘","持續時間","提示","用方向鍵設置錄製時間。"];	
var pvrDisRemind = "請插入USB進行錄製";	
var pvrRemindWords = ["你想要退出嗎？","確定停止錄製並瀏覽已錄製文件？","USB已被移除。","沒有足夠的剩餘空間。","沒有錄製的文件。開始錄製。","付費頻道不支持錄製功能","暫不提供此功能。","成功保留","確定停止錄製，改變輸入信源嗎？","電視將會結束當前錄製，確定離開？","PVR的錄製需要電視信源正常工作，請檢查電視信號。"];	
var pvrChangeCh = ["確定更換頻道？","確定結束錄製，並更換頻道？"];	
var pvrChangeToPIN8 = ["確定更換到連接音視頻輸入接口的設備信源嗎？",    "確定結束錄製，並更換到連接音視頻輸入接口的設備信源嗎？"];	
var pvrChangeToCEC = ["確定更換到連接HDMI輸入接口的設備信源嗎？",   "確定結束錄製，並更換到連接HDMI輸入接口的設備信源嗎？"];	
var pvrGuideJump = ["是否進入電子節目單？","確定結束錄製，並進入電子節目單？"];	
var pvrMediaJump = ["是否進入多媒體?","確定結束錄製，並進入多媒體？"];	
var timeshiftExtra = ["確定結束時移，並更換頻道？","確定結束時移，並更換到連接音視頻輸入接口的設備信源？","確定結束時移，並更換到連接HDMI輸入接口的設備信源嗎？","付費頻道不支持時移功能","確定結束時移，並進入電子節目單？","確定結束時移，並進入多媒體？","確定結束時移，並改變輸入信源？","請插入USB進行錄製","USB的空間不夠。","電視將會結束當前時移，確定離開？"];
var timeshiftStatus = ["快退","停止","播放","暫停","快進"];	
var pvrPowerOffRemind = ["暫停錄製","待機","電視正在錄製，是否需要在待機模式中保持錄製？"];	
var timeshiftInitTitle = "USB設置";	
var timeshiftInitReminds = ["此嚮導是用於設置時移模式中的USB，請選擇設置模式。", "為了更好的使用，我們推薦格式化USB。這將會清除其中的所有數據。", "請為時移選擇文件大小", "格式化中", "沒有足夠的剩餘空間。", "創建時移文件", "速度測試", "此USB設備傳輸時移錄製速度過慢！", "此USB設備已經可以開始時移，但我們推薦為了更好的效果更換更快的USB.", "此USB設備已經可以開始時移。"];
var timeshiftInitButtons = ["格式化","跳過","取消","確認","完成","退出"];	
var timeshiftInitOther = ["USB設備傳輸速度：","MB每秒"];	
var selectChoice = "你確定需要執行選定操作嗎？";	
var chAtvStore = "存儲為XXXX";	
var chEpgFirstGenreUK = ["電影","新聞","娛樂","運動","兒童","教育","生活","戲劇"];	
var homePageTitleList = ["應用","電視","視頻","主頁"];	
var homePageFavAndAllName = ["收藏應用","全部應用"];	
var homePageBackUp = ["使用指南","節目指南"];	
var homePageRemind = ["只有在網絡連接後才能使用所有功能。","你的電視暫時無法提供頻道內容，請在搜索頻道後收看節目。","暫時無法提供節目內容。","現在搜索頻道嗎？"];	
var homePageHistory = ["歷史記錄"];	
var miracastTitle = ["無線互聯","TCL設備"];
var miracastRemind = ["無線互聯讓你的設備之間進行屏幕共享，比如將你的手機或平板無線連接至電視。讓你能在電視上同步觀看手機或平板設備上的內容。例如，你可以在手機上發布一個視頻然後在電視上同步進行播放，或者將你的平板變成電視大屏幕上內容的遊戲控制器。","無線互聯已準備好，可以開始將您設備的屏幕分享到電視了。","連接中，請稍候！","連接失敗。","連接失敗。請檢查！"];
var homePageLittleWin = ["設置","多媒體","收藏頻道","智能電視","節目指南"];
var hbbtvStopRemind = ["你想要停止重播嗎？"];	
var colorSystem = ["自動","PAL","SECAM","NTSC"];	
var deviceTitleTipsText = "點擊≡鍵獲取更多信息";
var emptyListInfo = "現在沒有USB設備連接至電視！";	
var optionVideoListArray_1 = ["圖效", "聲效", "播放模式", "屏幕模式", "3D模式",   "左右轉換", "景深", "字幕", "音軌", "標題", "章節", "信息"];	
var optionVideoListArray_2 = ["圖效", "聲效", "播放模式", "屏幕模式",   "字幕", "音軌", "標題", "章節", "信息"];	
var bottomTipsText = ["播放/暫停", "快退", "快進", "播放列表", "設置"];	
var picturePresetArray = ["標準", "明亮", "柔和", "電影", "自定義"];
var videoPlayModeArray = ["全部循環", "單曲循環", "正常"];	
var screenModeHDArray = ["16:9", "4:3", "寬屏模式", "廣角", "縮放2", "廣角2", "交叉縮放", "自動"];	
var screenModeSDArray = ["16:9", "4:3", "寬屏模式", "14:9 放大", "16:9 放大", "16:9 放大", "自動"];	
var Mode3DArray = ["關", "2D轉3D", "左右轉換", "上下轉換", "交錯格式"];	
var videoOptionListArray = ["關", "軌道", "字幕", "標題", "章節"];	
var subMenuTitleText = "字幕";	
var langMenuTitleText = "音頻語言";	
var titleMenuTitleText = "標題";	
var mode3DMenuTitleText = "3D模式";	
var langInfoText = "軌道";	
var STOP_RESUME_INFO = "停止-恢復";	
var playListName = "名稱";	
var eb_tips = "提示";	
var ok_button = "確認";	
var eb_info = ["音頻解碼錯誤。", "視頻解碼錯誤。", "不支持此音頻格式。",    "不支持此視頻格式。", "不能打開此文件", "回放錯誤，請重新嘗試。",   "不支持此文件格式。", "啊哦，播放器停止運行了。",   "文件路徑不存在或無效。重新插入儲存設備再試一次。",   "繼續播放當前或重放？"];	
var picturePlayErrorTips = ["加載失敗!!!","圖片太大!!!","網絡錯誤!!!","線程錯誤!!!","參數錯誤!!!","未知錯誤!!!"];
var frameTitleText = "新設備";	
var eb_quit_info = "是否確定退出？";	
var eb_yes = "是";	
var eb_no = "否";	
var offinfo = "關";	
var naInfo = "空";	
var consoleInfoArray = ["快退", "快進", "播放/暫停", "播放列表"];	
var cantOperateText = ["不支持此功能"];	
var chapterChangeInfo = "只可選擇1到XXXX章節";	
var metaDataArray = ["標題/版本信息", "章節：", "音頻：", "字幕："];	
var metaTitleInfo = "標題";	
var metaChapterInfo = "章節";	
var videoLoadingInfo = "分析…";	
var listLoadingInfo = "加載中…";	
var pgInfo = "Law Rating:";	
var fileNameText = "名稱";	
var fileDateText = "日期";	
var fileSizeText = "大小";	
var fileDurationText = "持續時間";	
var fileDirectorText = "指導者";	
var fileCopyrightText = "版權";	
var fileArtistText = "藝術家";	
var fileAlbumText = "專輯";	
var fileGenreText = "類型";	
var fileYearText = "年份";	
var fileGenreText = "類型";	
var mainListArray = ["全部", "畫面", "視頻", "音樂"];	
var sortArray = ["名稱", "日期"];	
var parserArray = ["正常", "循環"];	
var emptyTipsInfo = "沒有找到支持文件。";	
var emptyFolderInfo = "沒有找到支持文件。";	
var sortName = "分類";	
var parserName = "分析程序";	
var divx_str1 = "DivX(R) 註冊";	
var divx_str2 = "DivX(R) 註銷";	
var infor_str = "信息";	
var quickMenuEmptyText = "沒有可用選項。";	
var musicSoundPresetArray = ["標準", "電影", "音樂", "高清音質", "自定義"];
var musicInformationArray = ["名稱", "藝術家", "專輯", "類型：", "年份：", "持續時間："];	
var playListName = "名稱";	
var playTipsInfo = ["你正在播放第一個文件", "你正在播放最後一個文件"];	
var musicNameInfo = "名稱";	
var musicArtistInfo = "藝術家";	
var musicAlbumInfo = "信息";	
var optionSoundPresetInfo = "聲音預設";	
var optionBGMInfo = "作為背景音樂播放";	
var optionAudioOnlyInfo = "只有音頻";	
var optionInfoText = "信息";	
var remotePhoneConnecte = "XXXX已連接到電視！";	
var tvRemoteTitle = "多屏互動";
var tvRemoteDeveloper = "此應用由TCL開發";	
var tvRemoteDeviceTitle = "設備名稱：";	
var remoteOption = ["分享媒體","遙控器","幫助","關於","智能連接"];	
var remotebottom = "請將\"多屏互動\"下載至你的智能手機";
var remoteStage = ["安卓","iOS"];	
var sharingReminds = ["與電視分享手機上的照片、視頻與音樂","步驟：\n1. 在手機上點擊\"多屏互動\"。通過同樣的WIFI網絡將手機與電視連接 \n2. 點擊\"文件分享\"來瀏覽媒體文件\n3. 將文件傳輸至電視播放（下面的選項之一）","   a) 將文件或文件夾拖至屏幕上的電視圖標；\n   b)  將手機對準電視來發送第一個文件；\n   c) 在手機上播放媒體文件然後點擊電視分享的圖標","4. 在電視上播放時，搖動手機來播放上一個或下一個文件。 "];
var controlReminds = ["用手機作為操控電視的遙控器。"," ","步驟： \n   1. 在手機上點擊\"多屏互動\"。將手機與電視通過同一無線網絡連接； \n   2. 點擊 \"遙控\" 來操作電視。 "];
var helpDeviceWords = "多屏互動";	
var helpBottom = "在雲技術領域，像手機與電視這樣的智能設備可以相互連接。與你的家人在多屏上分享媒體文件，並通過手機控制電視吧！";	
var helpReminds = ["準備\n    1.下載並從Google Play或者蘋果商店安裝\"多屏互動\"。\n    2. 將手機與電視通過同一無線網絡連接。"," ","手機推薦 1. CPU： 800MHz\n以上  2.存儲空間：最少80MB"," ","聲明\n    如果\"多屏互動\"在你的手機上不可用，請聯繫手機運營商。"];
var helpButtons = ["當前","下一個"];	
var aboutReminds = ["多屏互動","此應用由TCL開發"];
var aboutExit = "退出";	
var smartReminds = ["電視與手機的快速智能連接"," ","步驟 \n  1. 將電視與智能手機通過同一網絡連接。在手機上點擊\"多屏互動\" 。\n  2.點擊\"智能遙控\"來掃描二維碼 。\n  3. 當電視在播放觀看模式時，點擊電視遙控器上的INFO鍵四秒，一個全屏二維碼將會跳出。",];
var smartQRReminds = ["請在你的手機上的\"多屏互動\"上點擊\"智能連接\"並掃描二維碼快速連接電視與手機。","二維碼包含網絡賬戶信息，請保證在安全環境下使用。"];
var consoleTipArray = ["當前","下一個","控制台","播放列表"];	
var optionInfoArray = ["圖效","播放模式","持續時間","影響","信息"];	
var playModeArray = ["正常","隨機播放","重複"];	
var durationArray = ["短（5s)", "中（10s)", "長（15s)"];	
var effectArray = ["無", "旋转", "向右擦除", "向左擦除", "向上擦除", "向下擦除", "矩形縮小", "矩形擴大", "隨機"];	
var infoArray = ["名稱：","大小：","日期：","定位"];	
var picturePresetBarTitleInfo = "畫面預設";	
var picturePresetBarArray = ["標準","明亮","錄音室","電影","自定義"];
var upTipsInfo = "動態畫面";	
var consoleTipsArray = ["控制台","當前","下一個","播放列表","設置"];	
var pictureMoveTipsArray = ["按右鍵播放下一個畫面","按左鍵播放上一個畫面","再次按下鍵顯示播放列表"];	
var optionPvrListArray = ["圖效","聲效", "屏幕模式", "3D模式", "字幕", "音軌", "信息"];	
var titleSpanFirstArray = ["控制與連接","基礎操作","應用","電視","設置","常見問題"];	
var titleSpanSecondArray = [["遙控器","面板按鍵","五合一按鍵","電視連接","電視連接","電視連接","無線"],["主頁","狀態欄","信源"],["打開應用","多媒體","多屏互動"],["調整頻道與音量","頻道列表","節目指南","安裝頻道","收藏頻道"],["畫面調節","聲音調節","頻道調節","軟件升級","語言","童鎖"],["常見問題","常見問題","故障排除","故障排除","免責聲明"]];
var contentSpan1_1Array = [["電源：","信源：","設置：","快捷菜單：","返回：","信息：","主頁：","退出：","列表："],
  ["開機或待機",
  "選擇信源",        
  "出現設置菜單",        
  "出現快捷設置",        
  "返回上一級菜單或退出應用",        
  "顯示節目信息",        
  "回到TV主頁",        
  "返回上一級菜單或退出應用",        
  "顯示頻道列表"]];	
var contentSpan1_2Array = ["上一個頻道","下一個頻道","增大音量","減小音量","去往主頁","確認選擇","待機/開機"];	
var contentSpan1_3Array = ["確認鍵/導航鍵","上一頻道","下一頻道","減小音量","增加音量","在某些功能下，作為方向鍵使用"];	
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","音頻輸出適配器","路由器LAN口","手機","PC/機頂盒/DVD","功放機","功放機/顯示屏","你的電視可能不包含所有配件"];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","耳機","音頻輸入適配器","SPDIF","CMP音頻輸入適配器","CMP輸入適配器","USB設備","USB設備","耳機","DVC/遊戲控制器/機頂盒/DVD","功放機","DVC/遊戲控制器/機頂盒/DVD","你的電視可能不包含所有配件"];	
var contentSpan1_6Array = ["公用接口","SD","視頻輸出插座","網口","迷你接口","天線輸入","CI卡","SD卡","PC","機頂盒/DVD","天線/有線/衛星","你的電視可能不包含所有配件"];	
var contentSpan1_7Array = ["平板","PC","路由器","手機","電視"];	
var contentSpan2Array = [["通過方向鍵瀏覽主頁。","然後通過OK鍵觀看推薦節目或者打開APP。"],["在屏幕右上角顯示日期，網絡和設備等信息。"],["從通過不同接口連接至電視的設備中選擇輸入源，比如TV、AV、HDMI等。"]];	
var contentSpan3Array = ["通過Smart TV頁瀏覽享受你最喜愛的App。","從USB儲存設備中瀏覽照片，觀看視頻並播放音樂。","將你的電視與手機或平板連接至同一局域網。","在手機或平板上點擊多屏互動或多屏互動。","與您的家人在多屏互動中分享照片，視頻和音樂，並用智能手機控制電視。"];
var contentSpan4Array = [["按P+/P-切換頻道。","按V+/V-調整音量。"],["在遙控器上按LIST鍵以列表形式瀏覽頻道。","通過 上/下 鍵選擇你的頻道。"],["節目指南是屏幕上顯示節目播放計劃的指導。你可以切換，選擇，瀏覽並錄製節目。"],["搜索並安裝頻道。"],["在頻道列表添加或者編輯你收藏的頻道。"]];
var contentSpan5Array = ["通過視頻APP享受收藏的節目。"];	
var contentSpan6Array = [["按菜單鍵呼出系統設置菜單。","在畫面設置調整數值。"],["按菜單鍵呼出系統設置菜單。","在聲音設置設置選項。"],["按菜單鍵呼出系統設置菜單。","進入頻道設置設置選項。"],["當有可供更新的軟件版本時，請更新您的電視。"],["您可以選擇偏好的菜單語言。"],["允許家長將不適宜兒童觀看的頻道或節目屏蔽。"]];
var contentSpan7_1Array = [["無圖像，無聲音","請檢查保險絲與斷路器是否在工作。","將其它電子設備插入插頭確保插頭已被打開或是正常工作。","電源插座與插頭接觸不良。","檢查信號源。"],["正常圖像，無聲音","用音量V+鍵來調大音量。","聲音設置不正確。","廣播信號錯誤。"],["正常聲音，無圖像","調整亮度與對比度。","廣播信號錯誤。","是否在單獨聽模式中。"]];	
var contentSpan7_2Array = [["無線電頻率干擾","此干擾產生移動波紋或斜紋；有時使圖像失去對比度。例如：手機等，使機器遠離干擾源。"],["沒有顏色","調整色彩設置。","是否為黑白電視節目。"],["無法操作遙控器","更換電池。","電池安裝是否正確。"]];
var contentSpan7_3Array = [["無法檢測到USB設備","檢查該USB儲存設備是否與電視適配。","檢查電視是否支持該音頻與圖像文件的格式。"],["播放無聲音","播放器不支持該音頻格式。"],["文件播放不流暢","USB儲存設備的傳輸性能可能會影響文件傳輸速度。"]];	
var contentSpan7_4Array = [["當我升級軟件時，我應該注意什麼","軟件升級時不要切斷電源。","軟件升級時請不要在遙控器上進行任何操作。","軟件升級可能需要較長時間，請耐心等待。"],["升級後電視界面不會有明顯改變","在某些情況下，軟件升級可能不僅僅升級或添加新功能，同時會在界面沒有明顯改變的情況下增強性能。同時，電視界面有時會維持不變。"]];
var termsTitle = "免責聲明";	
var termsConditions = ["您通過本電視機（“本機”）獲得的內容與服務（統稱“應用程序”），不是售予以給您，而僅是許可給您在本條款下使用。該等應用的提供方（“應用程序提供方”）保留所有沒有明確授予您的權利。\n1．許可範圍\n    應用程序提供方就應用程序所授予給您的許可是一個不可轉讓的許可，僅允許您在您所擁有或控制的本機上使用該應用程序。您不得派發或或通過網絡與其他設備共享該等應用程序，也不得出租、出借、出售、租賃、轉發或轉授權該等應用程序。\n   您確認並同意，您通過本機接觸到的所有應用程序及其內容的所有權均屬於應用程序提供方，並且受相關知識產權法律的保護。您不得修改、複製、編譯、拆解、再版、上傳、傳輸、翻譯任何應用程序的全部或任何部分（包括應用程序的升級版或更新版），或對其進行反向工程，或試圖提取其源代碼，或開發其衍生品，或以其它任何方式利用該等應用程序的全部或任何部分（包括應用程序的升級版或更新版）。如果您違反該限制，您可能會遭到起訴或索賠。授予給您的許可所包含的條款將適用於應用程序提供方提供的對原應用程序的替代和/或更新版本。但若該替代和/或更新版本附有單獨的許可文件，該單獨的許可文件的條款應適用。您應承擔對應用程序進行升級的全部費用（若有）。\n2．第三方內容\n   您可能能通過應用程序進入或接觸到應用程序提供方或第三方的網站或提供的服務（以下統稱“第三方服務”）。您理解在使用第三方服務的過程中，可能會遇到一些另您不愉快的、不得體的、或令人反感內容，這些內容可能不能通過明示的語言識別，並且通過搜索或進入某些鏈接可能會自動並無意中產生或帶出令人不愉快的內容。您同意本機的生產商（“生產商”）以及應用程序提供方不對您接觸到的令您不愉快的、不得體的、或令人反感內容承擔任何責任。\n   您確認並同意，生產商無義務對第三方服務的內容、準確性、完整性、及時性、有效性、版權、合法性、質量或其它他任何方面進行審核或評估。對於第三方服務，生產商不向您或任何其他人提供任何保證或認可或承擔任何責任或義務。\n   您確認並同意，第三方服務中可能包含一些受知識產權法及其他法律保護的專有內容、信息或資料（統稱為“第三方內容”）。除第三方服務許可的方式以外，您不能以任何其它形式使用該等第三方內容。您同意不複製、修改、租賃、出借、銷售、分發該等第三方內容或製作其衍生作品，且您同意不會以任何未經授權的方式利用第三方服務。您進一步同意不會利用第三方服務來騷擾、濫用、追蹤、威脅、誹謗或其他侵犯或違反任何第三方的權利，且生產商不對您的該等行為以及您在使用第三方服務過程中收到的擾亂、威脅、誹謗、令人不愉快的或不合法的信息承擔任何責任。\n3．不保證\n   您確認並同意，您對使用應用程序及第三方服務承擔所有的風險。所有應用程序及第三方服務均按提供時或獲得時的狀態向您提供，其提供方不向您提供任何明示或暗示的保證。生產商明確聲明，其對於應用程序及第三方服務不作任何明示或暗示的保證，包括但不限於對於其適銷性、質量滿意度、適用於特定目的、準確性、平靜受益權、及不侵犯任何第三方權利的保證。生產商亦不保證通過本機獲得的應用程序及第三方服務的準確性、有效性、時效性、合法性或完整性，也不保證本機、應用程序及第三方服務能滿足您的要求，不保證應用程序及第三方服務的運行不會被中斷或無任何錯誤，不保證應用程序及第三方服務的瑕疵會被修復。若任何應用程序或第三方服務被證明是有瑕疵的，您需要承擔所有必要的服務、修復及更正所產生的全部費用。\n   您確認並同意，應用程序及第三方服務在可能在任何時候會未經通知而被更改、暫停、移除、終止、中斷或禁用，且生產商對其中的內容或服務在任何時間段內的可持續獲得不提供任何聲明或保證。該等內容與服務是第三方通過製造商不能控制的網絡或其他傳輸設備傳輸的。在不影響上述一般性原則的前提下，生產商明確聲明，其對通過本機獲得或接觸的任何內容及服務的變更、中斷、禁用、移除或暫停不承擔任何責任或義務。應用程序提供方或其他服務提供方保留不經通知隨時變更、暫停、移除或禁用應用程序或第三方服務的權利。生產商可在任何情況下限制您使用或進入應用程序或第三方服務，且對此不承擔任何責任。\n   生產商對應用程序及第三方服務相關的客戶服務不負任何責任。您若有任何與應用程序及第三方服務相關的問題及服務需求，均應直接聯繫相關的提供方。\n4．信息的收集和使用\n   您同意生產商、應用程序提供方和第三方服務提供方可以收集並使用技術數據及相關信息，包括但不限於關於本機、系統和應用軟件、以及外圍部設備的的技術信息，以便向您提供與本機和應用程序相關的軟件升級、產品支持及其它服務（若有）。生產商、應用程序提供方和第三方服務提供方可以在確保不讓您的身份被識別的情況下使用該等信息以改進其產品或改善向您提供的服務或技術支持。\n5．某些功能缺失\n   由於應用程序提供方的限制，某些功能、應用及服務可能在本機（包括其外圍設備）上缺失或無法在所有地區提供。本機上的某些功能可能需要您購買額外的設備或支付會員費。\n6．責任限制\n    在法律未禁止的範圍內，生產商在任何情況下（包括在疏忽的情況下）均不對您或任何第三方因使用本機、應用程序或第三方服務或因本機、應用程序或第三方服務中所包含的任何信息造成或引起的直接、間接、偶然、特定或附帶的損失、律師費、支出或其它損失承擔任何合同或侵權責任，即使生產商已經被告知這種損失發生的可能性。"];	
var noChannelListRemind = ["無頻道信息。頻道列表功能需要在搜台後才能使用。","頻道搜台"];	
var closeSubtitleRemind = "只有當字幕關閉時才能使用該功能。是否需要現在設置？";	
var estickerTitles = ["Highly realistic images","Colors that come alive","栩栩如生的動作","Dynamic picture quality","SR UHD upscaling","Experience 3D world","更快速的性能","Future 4K content","享受上網的衝浪世界。","Access extra content","Integrated digital tuners","Connect all devices","Various 4K sources","USB content","Ultra fast WIFI","Mobile content on TV","Mobile device content","Local content","Approved by DivX","Seamless picture","Canal Ready","TDT Premium"];	
var estickerDescriptions = ["Amazing viewing experience thanks to images with four times the detail of Full HD on UHD screen","廣色域釋放情感，在場景中釋放出生動的紅色域與翠綠色。","4K frame interpolation and backlight driving to combat motion blur problems","The vividness of the original image is enhanced to produce truly dynamic expression with brilliant contrast","Enjoy crisper than before TV shows and Blu-Ray discs thanks to Super Resolution technology","Experience 3D TV ready and watch various 3D content","為你提供流暢的交互及優越的節目，享受更多的四核娛樂體驗。","HEVC (H.265) codec support for upcoming standard of 4K video distribution","Wealth of online applications, VOD services, catch-up TVs and Internet web browsing","See more with additional services and content from your favorite broadcasters","Access TV channels in high definition without additional set top box","Easy to connect many digital sources available at home","TV ready for future, able to playback 4K 50/60Hz via HDMI 2.0 with HDCP 2.2","Video or photo content directly from USB drive, HDD or camera on big screen in 4K resolution","Latest generation 2x2 MIMO and AC standard delivers unrivaled Internet access speed","Enjoy photos, videos, applications from mobile devices on big screen thanks to screen mirroring technology","Photos, videos, applications from smartphone or tablet can be displayed on big screen ","Display on big screen local content like photos, videos from devices connected to local network","Play rented or own movies protected by DivX","Ultra narrow bezel and super slim design","Tested and approved by Canal+","TDT Premium tested and approved"];	
var eManualTextArray = ["使用指南","裡面的所有圖片僅供展示使用。"];	
var frontPanelRemind = "前面板被鎖定";	
var eRPRemind = "商場模式無法滿足ERP需求。是否確定選擇該模式？";	
var noRelatedChannel = "沒有相關頻道";	
var option0624Name = ["BOP","BFS","方式","獲取用戶ID","BGM","全部重設","重置","NRM","DVB-T2與國家選擇","HbbTV模式"];	
var DVBT2AndChoice = ["開","按國家區分","關"];	
var hbbtvServiceRemind = "HbbTV服務即將上線";	
var insertWord = "插入";	
var viewDetail = "查看細節";	
var remindOAD = "軟件升級。有推薦的軟件升級可能在另外一個頻道上。如果您需要下載，電視將自動跳轉至該頻道。您是否想要現在下載？";	
var LEDStatus = ["閃爍", "普通","關"];
var netFlixRemind = "取消啟動後，下次需要重新登陸";	
var ESNExplanation = "Electronic Serial Number";	
var resetShopRemind = "系統正在重新設置中，請不要關閉電源";	
var initialSelectOption = "請選擇一個選項：";	
var databaseRemind = "系統已因某些未知原因將該數據庫視為受損，並想要進行自動重建，按確定鍵繼續。";	
var Deactivation = "Deactivation";	
var oadFutureRemind = "軟件升級。\n 新的軟件推薦可在 %s上獲取。該升級可能需要較長時間，並出現黑屏。請不要在升級過程中關閉接收器。如果您接受該更新，請讓接收器處於打開壯闊或在預定時間內待機。是否確定更新？";	
var bt_title = "藍牙";	
var bt_soundOutPutName = "聲音輸出";	
var bt_soundOutPutTV = "TV揚聲器";	
var bt_soundOutPutBT = "藍牙設備";	
var bt_soundOutPutBT_TV = "藍牙與電視";	
var bt_refreshBarName = "設備";	
var bt_settingTips_On = "打開藍牙功能並掃描設備";	
var bt_settingTips_Finding = "尋找可用設備…";	
var bt_settingTips_NoDevice = "未找到可用設備";	
var bt_deviceList_State_NoConnect = "未連接";	
var bt_deviceList_State_Connecting = "遠程診斷連接中…";	
var bt_deviceList_State_Connected = "已連接";	
var bt_deviceList_State_Paired = "Paired";	
var bt_deviceList_Conncect_Failed_Tips1 = "連接失敗";	
var bt_deviceList_Conncect_Failed_Tips2 = "請確認XXX藍牙功能已開啟";	
var bt_deviceList_Conncect_Success = "已連接至藍牙設備";	
var bt_deviceList_Disconncect_Success = "已斷開與藍牙設備的連接";	
var bt_deviceList_Disconnect = "你確定要斷開與XXX的連接嗎？";	
var bt_tipsTitle = "提示";	
var bt_bluetooth_Pairing_Title = "Bluetooth pairing";	
var bt_bluetooth_Input_Pin = "Please input PIN:";	
var bt_bluetooth_Output_Pin_Tip = "通過鍵盤輸入PIN XXXX";	
var bt_bluetooth_Pin_Wrong_Tip = "PIN錯誤";	
var bt_bluetooth_Remove_Pair_Title = "詢問";	
var bt_bluetooth_Remove_Pair_Ask = "是否不記錄該設備？";	
var audioDescriptionName = ["旁白","音量","揚聲器音量","耳機","耳機音量","AD音量","藍牙設備","藍牙設備音量","功放","揚聲器"];
var audioDescriptionOptions = ["關","正常","旁白"];
var volumeOffRemind = "在設置菜單將 xxx打開。";	
var mEPSRemind = "商場模式無法滿足MEPS需求。是否確定選擇該模式？";	
var parentRatingAUOptions = ["不鎖定", "鎖定G及以上級別（可選）", "鎖定PG及以上級別", "鎖定M及以上級別", "鎖定MA及以上級別", "鎖定AV及以上級別",  "鎖定R及以上級別", "鎖定全部"];	
var mEPSTips = ["目前的圖像模式無法滿足MEPS需求，推薦使用基礎模式",    "您的TV現在為商場模式。\n請到設置菜單中切換為家庭模式"];	
var switchSourceRemind = "已插入。是否需要切換？";	
var footballModeName = "足球模式";	
var resetStadium = "體育館";	
var atvSearchMenu = "ATV手動搜台";	
var dtvSearchMenu = "DTV手動搜台";	
var settingNoticeSourceName = "來電通";	
var smartTVOptions = ["智能電視門戶","HbbTV","網路設備","無線互聯","免責聲明",                            "網路喚醒","重置"];
var supportOptions = ["遠程診斷","聯繫我們"];
var tvDoctor = ["智能電視產品體檢系統2.0","該應用僅用於智能電視產品健康狀態檢查，使用過程中，請保持網絡暢通。為提高產\n品體驗，操作過程中會收集該電視相關信息。","本地診斷","請按照售後人員提示進行相應操作","遠程診斷","使用前請先與售後人員確認對方在線","產品註冊碼：","&nbsp;&nbsp;&nbsp;&nbsp;設備序列號：","遠程診斷連接中…","遠程診斷正在運行,請保持網絡連接狀態","遠程診斷異常，請檢查網絡","退出"];
var ClosedcaptionName = "字幕";
var sysCCOptions = ["字幕模式","模擬字幕","數字字幕","安裝","字幕"];	
var sysCCmodeOption = ["關", "開", "靜音開"];	
var sysanalogCCOption = ["關", "字幕1", "字幕2", "字幕3", "字幕4", "文本1", "文本2", "文本3", "文本4"];	
var sysdigitalCCOption = ["關", "服務1", "服務2", "服務3", "服務4", "服務5", "服務6", "服務7", "服務8"];	
var syssuperimposeOption = ["關", "服務1", "服務2", "服務3", "服務4", "服務5", "服務6", "服務7", "服務8"];	
var contactUsOption = ["聯繫我們",    "如有問題，請隨時聯繫我們。",    "聯繫我們",    "網頁：瀏覽",    "客服電話：","產品信息","型號：",    "軟件版本：","","用戶名：","項目名：",    "客戶類型：","MAC無線地址：","MAC有線地址：","Netflix ESN:","通過手機掃描信息",    " 然後選擇國家。"];
var homePageWords = ["歷史記錄", "搜索"];	
var titlePageWords = ["主頁", "影視","TV","應用"];	
var videosPageWords = ["電影", "運動","音樂","熱門","遊戲","教育","新聞"];	

//同时应用于本地和服务器
var statusPageWords = ["USB","設置","WiFi","有線"];		//状态栏的翻译

//二级页面的翻译
var searchPageWords = ["搜索", "熱門搜索:","節目、電影、人群……"];	
var resultSearchPageWords = ["","的搜索結果", "請試壹下其他關鍵詞","抱歉，沒有發現關於","的影片"];	
var historyPageWords = ["歷史記錄", '按','刪除歷史記錄',"清除該內容","清除所有","昨天","今天"," 您還沒有觀看過影片","成功清除所有觀看記錄!"];	
var channelPageWords = ["抱歉，沒有發現影片"];


//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9",
                       	   "Zoom-","0","Zoom+",
                       	   "退出","0","",
                       	   "列表","0","文字",
                       	   "導航鍵","進入","退出",
                       	   "菜單","字幕","信息",
                       	   "停止",
                       	   "信息","菜單","退出",
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
var remoteControlNote = "Note: for certain models, the button may be different in appearance or function.";


var textArray = ["音量","頻道","信源","切換/電源","嚮導","秒將關機"];
var guideArray = ["VOL-","VOL+","CH-","CH+","Pre","Next"];
var favChannelListRemind = ["暫無喜好頻道。請進入其他清單，按綠色鍵添加喜好頻道。"];

var proxySetting = ["代理服务器","端口"];
var powerOffShop = ["推荐使用卖场模式，是否继续？"];
var tcastTextPageWords = ["海量影視 多彩應用","電視遙控 就在指尖","精彩內容 大屏分享"];
var tcastOtherWords = ["掃描二維碼 下載多屏互動","電視所在網路","電視名稱","多屏互動"];
var hbbtvWords = ["HbbTV Setting","HbbTV","Cookies","Thrid Party Cookies","Device ID","Tracking"];
var hbbtvTrackingWords = ["YES","NO","Don't care"];
var eStickerTipWords = ["Storage is under 500M,would you like to delete the videos in Demo mode bo obtain more space?"];
var delEstickerVideoRemid = ["The video has been deleted successfully"];
var selectSatRemind = "選擇不能超過20個衛星!";