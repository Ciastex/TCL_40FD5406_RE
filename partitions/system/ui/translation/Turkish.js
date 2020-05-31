
var all_country 	= ["Avustralya","Avusturya","Belçika","Bulgaristan","Hırvatistan","Çek Cumhuriyeti","Danimarka","Finlandiya","Fransa","Almanya",
						"Yunanistan","Macaristan","İtalya","Lüksemburg","Hollanda","Norveç","Polonya","Portekiz","Romanya","Rusya",
						"Sırbistan","Slovenya","İspanya","İsveç","İsviçre","İngiltere","Yeni Zelanda"," "/*Arab*/,"Estonya"," "/*Hebrew*/,
						"Letonya","Slovakya","Türkiye","İrlanda","Japan","Filipinler","Thailand","Maldives","Uruguay","Peru",
    					"Argentina","Chile","Venezuela","Ecuador","Costa Rica","Paraguay","Bolivia","Belize","Nicaragua","Guatemala",
						"Çin","Taiwan","Brazil","Canada","Mexico","United States","South Korea","Romanya","Vietnam"/*新添加的，底层结构体中没有*/,"Ukrayna"/*新添加的，底层结构体中没有*/,
    					"Iran","Iraq"," ","Kazakhstan","Uzbekistan"," ","Kyrgyzstan","Algeria","Egypt","Tunisia",
    					"Tanzania","Kenya","Pakistan","Indonesia","Kuwait","Saudi Arabia","Qatar","Israel","Lebanon","bahrain",
    					"Angola","Congo","India","Turkmenistan","Colombia","Mongolia","Bangladesh","Nepal","Sri Lanka","North Korea",
						"Moldova","Polynesia","EI Salvador"," ","Fiji","Liberia","Jordan","Myanmar","Ghana","Georgia",
						"Armenia","Oman","yemen","Syria","Palestine","Afghanistan","Morocco","benin","IvoryCoast","Nigeria",
    					"Sudan","Ethiopia","Zambia"," ","South Africa","mozambique","Libya","Arnavutluk","Belarus","Iceland",
						"Litvanya","Mauritius","Dubai","UAE","Tajikistan","Bengal","Bosna Hersek","Kıbrıs","Kosova","Makedonya",
						"Malta","Karadağ","Cameroun","Singapore","Malaysia","NewCaledonia","Suriname","Jamaica","Curacao","Aruba",
    					"Antigua & Barbuda","St Lucia","Barbados","St Vincent","St Kitts & Nevis","Grenada","Trinidad & Tobago","Guyana","Puerto Rico","Panama",
	/*15*/ 				"Dominica","Cuba","Honduras","Haiti","Cambodia","Zimbabwe","Dominican Republic","Bonaire","Somalia","Azerbaijan",
    					"Uganda","Rwanda","Guinea","Burundi","Abkhazia","Andorra","Anguilla","Antarctica","American Samoa","Aland Island",
    					"Burkina-faso","Bermuda","Brunei","Caribbean Netherlands","Saint Barthélemy","Bahamas","Bhutan","Bouvet Island","Botswana","Cocos (Keeling) Islands",
    					"Central African Republic","Cape Verde","Djibouti","Eritrea","Western Sahara","Falkland Islands","Federated States of Micronesia","Faroe Islands","Gabon","Cook Islands",
    					"Gibraltar","Greenland","French Guiana","Guadeloupe","Equatorial Guinea","Guam","Guinea-Bissau","Heard Island and McDonald Islands","Isle of Man","British Indian Ocean Territory",
					/*20*/"Jersey","Kiribati","Comoros","Cayman Islands","Liechtenstein","Lesotho","Monaco","Saint Barthélemy","Madagascar","Mali",
    					"Macao","Martinique","Mauritania","Montserrat","Malawi","Namibia","Niger","Norfolk Island","Nauru","Papua New Guinea",
    					"Pitcairn Islands","Palau","Reunion Island","Solomon Islands","Seychelles","The Svalbard archipelago","Sierra Leone","San Marino","Senegal","South Sudan",
    					"Sao Tome & Principe","Swaziland","Turks & Caicos Islands","Togo","Chad","Tokelau","Timor-Leste (East Timor)","Tonga","Tuvalu","Vatican City State",
    					"British Virgin Islands","United States Virgin Islands","Wallis and Futuna","Samoa","Mayotte","Democratic Republic of the Congo","Guernsey","Gambia","Northern Mariana Islands","French Southern Territories",
				/*25*/"Niue","United States Minor Outlying Islands","Others"];
				
var all_language 	= ["Çekçe","*","Danca","*","*","Almanca","İngilizce","İspanyolca","Yunanca","Fransızca",
						"Hırvatça","*","İtalyanca","Macarca","Felemenkçe","Norveççe","Lehçe","Portekizce","Rusça","Romence",
						"Slovence","Sırpça","Fince","İsveççe","Bulgarca","Slovakça","Chinese","*","Kelt dili","*",
						"Welsh","Arapça","İrlanda","Letonyaca","*","Türkçe","Estonyaca","Felemenkçe"/*Netherlands*/,"Korece","*",
						"Hindi","*","*","Mandarin","Cantonese","Maori","Orijinal Ses"/*Qaa*/,"Tanımsız"/*Undetermined*/,"*","Bilinmiyor",
						"Tanımsız","*","*","*","*","*","*","*","*","*",
						"*","*","*","Arnavutça","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Bask dili","*","*",
						"*","*","*","*","*","*","*","Boşnakça","*","*",
						"*","*","*","*","Белорусский","*","*","Katalan dili","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galiçya lehçesi","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","İzlandaca","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Japanese","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Litvanyaca",
						"*","*","*","*","*","*","*","Makedonca","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romantik ","*","*","*","*",
						"*","*","*","Samice","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Teleteks",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukraynaca","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Kapalı","Açık"];
var okCancel		= ["Tamam","İptal"];
var yesNo			= ["EVET","HAYIR"];
var level			= ["Kapalı","Düşük","Yüksek","Orta"];
var manualAuto		= ["Manuel","Oto"];
var homeShop		= ["Giriş","Mağaza"];
var picPreset		= ["Standart","Dinamik","Doğal","Sinema","Kişisel"];
var picColorTemp	= ["Serin ","Normal","Sıcak","Kullanıcı "];
var pic3dNavig		= ["Manuel","Oto","Yarı otomatik"];
var _3dOptions		= ["3D Modu","3D'den 2D'ye","Sl-Sğ Değiştir","Alan Derinliği"];
var pic3DMode       = ["Kapalı","2D'den 3D'ye","Yan Yana","Üst ve Alt","Satır Ekleme"];
var picEcoOptions	= ["Enerji tasarrufu","Işık sensörü","Yerel karartma","Karışık karartma"];
var picGeoOptions	= ["Geometri","Yatay Konum","Dikey Konum","Saat ","Safha "];//Geometry 无翻译
var picAdWhiteBal	= ["R Kazancı ","G Kazancı","B Kazancı","R Dengesi","G Dengesi","B Dengesi"];
var souOptions		= ["Ses ayarı","Denge","Ses gecikmesi","SRS TSHD","Oto. Ses Sev. Kont.",
						"SPDIF Tipi ","SPDIF Gecikmesi","TV yerleştirme","Ses Dili ","Ses Kanalı ",
						"Ses Açıklaması","Bas yükseltici","Dolby Digital Plus"];
var souSpdifType	= ["Oto"/*Dolby*/,"PCM","Kapalı"];
var colorSpace      = ["Oto","Ana dil","Kullanıcı "];
var souPresetPara	= ["100Hz","500Hz","1.5KHz","5KHz","10KHz"];
var chOptions		= ["Kanal Tarama","Kanal Listesi ","EPG","Kanal düzenleyici","Kanal kontrolleri",
						"zaman kaydırma","Altyazı ","Teleteks","Kanal Listesi Tipi"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Sinyal gücü","Sinyal Kalitesi","Frekans (KHz)","Hizmet Kodu","Ağ Kodu","Ağ adı"];
var chScanOptions	= ["Ülke / Bölge ","Ayar modu","Otomatik arama","Taramayı Güncelle ","Analogue Elle Tarama",
						["Kablo manuel taraması","Anten elle taraması","Uydu manüel ayarı "],"Uydu anteni kurulumu","Favori ağ seçimi","Kanal listesini temizle","LCN"];
var favNetDes		= "Lütfen en sevdiğiniz ağı seçin";
var tuner			= ["Kablo","Anten","Uydu"];//Satelite 无翻译
var passError		= "Şifre yanlış \ Lütfen tekrar girin! ";
var chType			= ["Analog Kanallar : ","Dijital Kanallar: "];
var chScanStatus	= ["Durum: Tarıyor","Durum: Tarama Tamamlandı ","Durum: Tarama İptal Edildi ","Durum: Tarama Hatası "];
var chScanPara		= ["Frekans (KHz)","Modülasyon","Sembol hızı (Ksym/s)","Ağ Kodu","Sistem",
						"İnce ayar","Sinyal gücü","Sinyal Kalitesi","Tarama Modu","Kanal kimliği"];
var chScanParaMHZ      = ["Frekans (MHz)"];
var chAtvManSys		= ["BATI AVR ","DOĞU AVR ","Birleşik Krallık","Fransa"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Oto"];
var chCleanDes		= "Kanal listesini temizlemek istiyor musunuz?";
var chDeletDes		= "Kanalı silmek istiyor musunuz?";
var chOperator		= ["Ziggo","UPC","Diğerleri"];
var chScanType		= ["Dijital & Analog","Dijital","Analog"];
var chScanMode		= ["Tam","Gelişmiş","Hızlı"];
var bookingModes	= ["Kayıt  ","Hatırlatıcı"];
var dayName			= ["Paz","Pts","Sal","Çar","Per","Cum","Cts"];
var monthName		= ["Oca", "Şub","Mar","Nis","Mayıs","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"];
var filter			= ["Filter","Tip ","Alt türler  "];
var chEpgFirstGenre	= ["Sinema","Haberler","Şov","Spor","Çocuk","Müzik","Sanat ","Sosyal","Eğitim","Hobi","ÖZEL "];
var chEpgSecondGenre= [["Drama","Polisiye","Macera ","Bilim Kurgu ","Komedi ","Dizi ","Romantik ","Ciddi","Yetişkin Filmi "," "," "," "],
						["Güncel olaylar ","Hava Durumu ","Haber Dergisi ","Belgesel ","Tartışma "," "," "," "," "," "," "," "],
						["Şov","Yarışma Programı","Değişik Gösteri ","Talk Show"," "," "," "," "," "," "," "," "],
						["Spor","Özel Etkinlikler ","Spor Magazini ","Futbol ","Tenis",
							"Takım Sporları ","Atletizm ","Motor Sporları ","Su Sporları ","Kış Sporları ",
							"Binicilik","Dövüş Sporları "],
						["Çocuk","Okul öncesi çocuk ","6 ila 14 yaş için eğlence ","10 ila 16 yaş için eğlence ","Bilgisel ","Çizgifilm "," "," "," "," "," "," "," "],
						["Müzik","Rock","Ciddi","Halk ","Jazz","Müzikal ","Bale"," "," "," "," "," "],
						["Sanat ","Sahne Sanatları ","Güzel Sanatlar ","Din ","Popüler kültür ",
							"Literatür","Film","Deneysel ","Yayıncılık ","Yeni Medya ",
							"Sanal dergileri","Moda "],
						["Sosyal","Magazin ","Ekonomi","Özel insanlar "," "," "," "," "," "," "," "," "],
						["Eğitim","Doğa ","Teknoloji ","Tıp ","Yabancı Ülkeler ","Sosyal bilimler ","İleri Eğitim ","Diller "," "," "," "," "],
						["Boş vakit hobileri ","Turizm ","El Sanatları ","Otomobil","Zindelik ve Sağlık ","Aşçılık ","Reklamcılık ","Bahçıvanlık "," "," "," "," "],
						["Asıl dil ","Siyah ve beyaz ","Yayınlanmamış ","Canlı Yayın "," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Kanal Atlama ","Kanalları Sıralama","Kanal Düzenleme ","Kanal silme","kanal takas","kanal ekleme"];
var chEditPara 		= ["Ağ adı","Kanal Numarası","Kanal Adı","Frekans ","Renk sistemi ","Ses sistemi "];
var chSatTitles		= ["Uydu Tipi","Uydu anteni kurulumu","Uydu Seç"];
var chSatEidtOptions= ["Uydu adı","Konum","LNB Güç","LNB frekansı (MHz)","Diseqc girişi",
						"Ton 22KHz","sesi patlama","Frekans (KHz)","Sembol hızı (Ksym/s)","Polarizasyon",
						"Sinyal gücü","Sinyal Kalitesi","Uydu durumu"];
var chSatAutoPromt	= [["Tümü","Ağ"],
						["Tümü","Boş"]];
var chSatAutoScanOptions=["Uydu Seç","Tarama Modu","Kanallar"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Evrensel",];
var chSatDiSEqCInput= ["Engelle","A","B","C","D"];
var chSatTone22KHz	= ["Oto","Açık","Kapalı"];
var chSatToneBurst	= ["Engelle","sesi patlama A","sesi patlama B"];
var chSatPolarization= ["Yatay","Dikey"];
var chSatSetupOptions=["Anten tipi","Ayar","Band frekansı"];
var chSatAntennaType= ["Tek Kablolu","Evrensel"];
var chSatUserBands	= ["Kullanıcı bandı 1","Kullanıcı bandı 2","Kullanıcı bandı 3","Kullanıcı bandı 4","Kullanıcı bandı 5","Kullanıcı bandı 6","Kullanıcı bandı 7","Kullanıcı bandı 8"];
var chSatOthers		= ["Transponder"];
var chSatSetupOthers= ["Kullanıcı tanımlı"];
var pleaseSelectSat = "Lütfen ilk önce uyduları seçin!";
var subOptions		= ["Altyazı ","Dijital Altyazı Dili ","Dijital Altyazı Dili 2","Altyazı Tipi "];
var ttxOptionsCon      = ["Syf Dili Şifr. Çözlyor","Dijital Teleteks Dili "];
var subType			= ["Normal","İşitme Engelli "];
var netIntf     	= ["Ethernet ","Kablosuz"];
var netConnDes		= ["TV ağ bağlantısını test ediyor.\nLütfen bekleyin",
						"Ağ bağlantı testi başarılı!",
						"Ağ bağlantı testi başarısız."];
var netSsidError	= "SSID geçerli uzunluğu 1~32 karakterdir. Lütfen SSID'yi kotrol edin.";
var netOthers		= ["PIN Kodu "];
var netWlessAutoDes	= ["Lütfen aşağıdaki PIN kodunun, TAMAM’a tıklamadan önce Erişim Noktasına yüklendiğinden emin olun.",
						"TAMAM’a tıklamadan önce lütfen Erişim Noktasındaki düğmeye 120 saniye içinde basın."];
var netConnRemind	= ["Şifre yanlış !",
						"Bağlanıyor. Lütfen bekleyin!",
						"Bağlantı başarılı ve IP alındı!",
						"Bağlantı Hatası",
						"TV AP'leri arıyor\nLütfen bekleyin",
						"TV'ye bağlı bulunan kablosuz bir aygıt yok!"];
var netWireIpOptions= ["IP ayarı","Adres türü","IP adresi","Altağ maskesi","Varsayılan ağ geçidi","Asıl DNS","Yardımcı DNS"];
var netWireConnRemind= ["Lütfen 0 ile 255 arasında bir değer girin.",
						"Başarıyla bağlandı!",
						"Lütfen geçerli bir adres yazın",
						"Başarıyla bağlandı!",
						"Bağlantı başarısız!",
						"Bağlanıyor. Lütfen bekleyin!",
						"Lütfen 1 ile 223 arasında bir değer girin."];
var netFlixOptions	= ["Engelle","ESN","Netflix sürümü"];
var netFlixDes	 	= ["Engellemek istediğinize emin misiniz?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Yazılım yükseltme";
var netUpdateDialogTitle = "Yazılım güncelleme";
var netBGDownloadTitle 	= "İndiriliyor";
var netUpdateLoadingPrompt= ["Yükseltme aranıyor, lütfen bekleyin!",
							"Yazılım indiriyor... Lütfen bekleyin!",
							"Lütfen yazılım yükseltme esnasında TV setini kapatmayın!",
                            "Zorunlu yazılım güncelleştirmesi arka planda otomatik olarak indirilir!"];
var netUpdatePrompt= ["Tebrikler, artık yazılım sürümünüz yeni!",
						"Yeni yazılım sürümü XXXX bulundu. Şimdi indirmek istiyor musunuz? Bu işlem ağ durumunuza bağlı olarak biraz vakit alabilir.",
						"Oturum açamadı!",
						"Veril alınamadı, lütfen daha sonra tekrar deneyin!",
						"Temizlik Güncelleme XML başarısız!",
						"Bağlantı Hatası",
						"Yazılımı karşıdan yükleme başarılı oldu. Flash işlemini başlatmak istiyor musunuz?",
						"Veri kaybı! İndiremedi!",
						"Paketi kontrol edemedi, lütfen tekrar deneyin!",
						"Ağ normal değil. Lütfen kontrol edin ve tekrar bağlanın.",
						"Güncelleyemedi. Lütfen TV'yi yeniden başlatın!",
						"Yükseltme dosyası beklenmedik şekilde silindi. Lütfen ağ vasıtasıyla yükseltme işlemini tekrarlayın.",
						"Yazılım arka planda başarılı şekilde indirildi. Yükseltme işlemini yapmak istiyor musunuz?"];
var netUpdateButtonText = ["İndir", "Güncelle", "Sonra", "Hiçbir zaman", "Tamam","Devam"];
var autoDetectPrompt = ["Yeni yazılım sürümü XXXX bulundu. Şimdi indirmek istiyor musunuz? Bu işlem ağ durumunuza bağlı olarak biraz vakit alabilir.",
						"Yeni yazılım sürümü XXXX bulundu. Şimdi güncellemek istiyor musunuz?",
						"Ağ vasıtasıyla yükseltme işlemi son seferde iptal edildi. Yükseltme işlemini tekrar yapmalısınız.",
                        "Yeni yazılım sürümü XXXX indirme tamamlanmadı. Devam etmek istiyor musunuz?",
                        "Yazılım indirildi, şimdi güncellemek istiyor musunuz?"];
var sysOptions		= ["E-Kılavuz","Menü dili","Zamanlayıcı","Kilitle","Giriş Ayarları",
						"Yazılım yükseltme","Yer","HbbTV modu","Çerezler","Ortak Arayüz ",
						"Gelişmiş ayarlar","Alışverişi sıfırla","LED Gösterge","Hızlı açma","Otomatik mağaza modu","Area","Demo Modu"];
var sysResetDes		= "Emin misiniz ?";
var sysMenuLangOptions=["Dil","Tercih edilen sesli dil","Tercih edilen 2. ses dili"];
var sysTimerOptions	= ["Zaman Dilimi ","Bölge adı","Saat ","Uyku Zamanlaycs ","Oto. bekleme modu", "Country region"];

var sysTimeZone		= ["Yayıncı Olarak ","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Kapalı","10 Dak.","20 Dak.","30 Dak.","40 Dak.","50 Dak.","60 Dak.","90 Dak.","120 Dak."];
var sysStandby		= ["Kapalı","4 Saat","6 Saat","8 Saat"];
var sysRegionName	= ["Madrid ","Kanarya"];
var sysClockOptions	= ["Otomatik Eşzamanlama","Tarih","Saat","Aygıt Açma Zamanl.","Zamanlayıcı",
						"Kanala güç ver","Aygıt Kapama Zam.","Zamanlayıcı"];
var sysTimer		= ["Kapalı","Günlük","Bir kez"];

var sysInputSet		= ["Etiket yok","DVD","Mavi ışın","HDD","DVDR",
						"HD kyd.","Oyun  ","VCR","PC","Dijital STB",
						"HD dij STB","Kamera","Kaydedici","Diğer"];
var sysAvVideoInput	= ["Oto","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["USB ile","Ağ Kodu ile","Kanal ile"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Uyduda yeni yazılım bulunamadı!",
						"Yeni yazılım sürümü XXXX bulundu. Şimdi güncellemek istiyor musunuz?",
						"Lütfen bir USB aygıtı takın.",
						"Paketi kontrol edemedi, lütfen tekrar deneyin!",
						"Ltf firma yzlm güncelleştirilirken USB donanım kilidini ÇIKARMAYIN ve TV'yi KAPATMAYIN!",
						"Yazılım başarıyla güncellendi.\nTV daha sonra otomatik olarak yeniden başlatılacak!",
						"Yeni yazılım sürümü XXXX bulundu. Şimdi indirmek istiyor musunuz? Bu işlem ağ durumunuza bağlı olarak biraz vakit alabilir.",
						"İndiriliyor",
						"Yazılımı karşıdan yükleme başarılı oldu. Flash işlemini başlatmak istiyor musunuz?",
						"Gncllme bşrsız!",
						"Güncelleme dosyaları aranıyor",
						"Yazılım başarıyla güncelleştirildi.\nLütfen TV’yi yeniden açın."];
var sysProductInfo	= ["Mevcut sürüm","Ürün adı","Üreticinin adı","Şasi adı"];
var sysCiDes		= ["CI kartı koyulmadı."];
var sysAdOptions	= ["DivX(R) kaydı","DivX(R) kayıt silme","T-Link","Authorization Error","Kayıt iptali onayı",
						"Kira Onayı","Kira. süresi dolmuş"];
var sysRegistDes	= ["DivX korumalı videoları oynatmak için aygıtınızı kaydettirmelisiniz",
						"Kayıt Kodu:",
						"http://vod.divx.com sitesine kaydedin"];
var sysDregistDes	= ["Kayıt silme kodu:",
						"\"\"\"http://vod.divx.com\"\" adresinde kaydınızı silin.\"",
						"Kayıt işlemine devam edilsin mi?"];
var mediaAuthorization = ["Cihazınızın, bu DivX(R) korumalı videoyu oynatma yetkisi bulunmamaktadır."];
var deregistrationConfrimation = ["Aygıtınız önceden kaydedildi.","Kaydı kaldırmak istediğinizden emin misiniz?"];
var rentalConfirmation = "DivX(R) kiralama, YYYY izleme üzerinden XXXX kez kullanıldı. Devam edilsin mi?";
var rentalExpired 	= "DivX(R) kiralaması YYYY görüşten XXXX'ini kullandı. DivX kiralama süresi doldu.";
var parentalRatingNA		= ["***","***","***","***","***","***","***","***"];
var parentalRatingOptionUS		= ["***","***","***"];
var sysTVRatingUS=["***","***","***","***","***"];
var sysMPAAUS=["***","***","***","***","***","***"];
var parentalRatingOptionCanada		= ["***","***","***"];
var sysCanadaEng=["***","***","***","***","***","***"];
var sysCanadaFre=["***","***","***","***","***",""];
var sysResetRRT=["***"];
						
var sysLockOptions	= ["Kanal kilidi","Zaman aralık kilidi","Ebeveyn engelleme","Giriş Engelleme ","Ön panel kilidi","Kilitleme kurulumu",
						"Şifreyi Değiştir ","Maks ses","Tümünü Temizle "];
var sysTimeIntervals= ["Kilit türü","Başlangıç zamanı","Bitiş zamanı"];
var sysRatingOptions= ["Hiçbiri","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","X-rated (İspanya)"];
var changePass		= ["Şifreyi Değiştir ","Yeni Şifre ","Şifreyi Doğrula "];
var changePassDes	= ["Şifre yanlış \ Lütfen tekrar girin! ",
						"Şifreler uyuşmadı.\nLütfen tekrar girin!",
						"Parola başarıyla belirlendi!",
						"Bu kod parola olarak ayarlanmak için çok basit.\nLütfen tekrar girin!"];
var sysPowerOnChOptions= "Mod seç";
var sysPowerOnCh	= ["Son durum","Kullanıcı seçimi"];
var netWlessSecu    = ["Aç","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Hiçbiri","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Desteklenmiyor"];
var netWlessSecu3	= ["Hiçbiri","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Desteklenmiyor"];
var netOptions		= ["İnternet bağlantısı","Arayüz","Kablosuz ayarlar","IP ayarları","Bilgi",
						"Bağlantı testi","DLNA","TV uzaktan","Netflix ayarları","Wifi ekranı",
						"Adres türü","IP adresi","Altağ maskesi","Varsayılan ağ geçidi","Asıl DNS",
						"Yardımcı DNS","SSID","BSSID","Lütfen SSID girin:","Kullanıcı Kimliği"];
var chEditDes		= ["Çift kanal numarası!","Mevcut karakteri silmek için Kırmızı Düğmeye basın!","Geçersiz Kanal Numaraları."];
var chEpgNoProgram	= "Şuanda hiçbir program bilgisi yok, lütfen önce kanalları arayın!";
var chEpgWords		= ["Program Kılavuzu","Program verileri yok.","Kanal Kitlendi!","Program detayları yok.","Program başlığı yok."];
var chEpgBooking	= ["Zamanlama bilgi", "Kanal Numarası","Başlangıç tarihi","Başlangıç zamanı","Bitiş zamanı",
						"Tekrar türü","Program türü","Ekle","Değiştir","Değiştir",
						"Ekle/Değiştir"];
var epgHotKey		= ["Önceki gün ","Sonraki gün","Filter","Program listesi","Program ekle"];
var chEpgBookRemind	= ["Hatalı Başlangıç Saati","Hatalı Bitiş Saati","Çift Çizelge","Başarıyla Kaydedildi.","Başarıyla silindi."];
var chSchePara		= ["Program listesi","Başlangıç zamanı","Başlangıç tarihi","Program Başlığı","Kanal Adı",
						"Süre","Yinele","Çizelge","Düzenle","Sil"];
var dateTimer		= ["Bir kez","Günlük","Haftalık"];
var scheduleDeleteReminds="Bu programı silmek istiyor musunuz?";
var scheduleNoLists	= "Hiçbir program listesi yok. Eklemek için \"Kırmızı\" düğmeye basın.";
var chListWords		= ["Kanal Listesi ","Listeyi Seç","Ayar modu","Favorilere Ekle","Kaldır",
						"Kanal listesi seçin","Tarayıcı modunu seçin","Değiştir"];
var chListType		= ["Tümü","Dijital","Analog","Radyo","Boş","Favoriler"];
var chAutoScanOptions=["Operatörü seçin","Kanal tipi","Otomatik arama"];
var souSoundType	= ["Geçersiz","Mono","Mono","Stereo","Stereo",
						"SAP","SAP","Dual1","Dual2","Dual2",
						"Nicam mono","Nicam stereo","Nicam dual1","Nicam dual2","Nicam çift",
						"Mono","LL","RR","LR"];
var souPreset		= ["Müzik","Sinema","Net ses","Standart","Kişisel"];
var picAdRgbMode	= ["Kapalı","Sadece Kırmızı","Sadece Yeşil","Sadece Mavi"];
var picAdOptions	= ["Gürültü azaltma","MPEG NR","RGB mode","Dinamik Kontrast","LED Hareket netliği",
						"Ten Tonu ","Film Modu","Oyun Modu","Renk Isısı ","Beyaz Ayarı",
						"Dondur","Siyah Iyileştirme","Overscan","Gama","HDMI Modu ","10P beyaz dengesi","Renk genişletici",
						"Bulanıklık azaltma","Titreme azaltma","Renk alanı","Hareket netliği"];
var pic10Pwhite     = ["Aralık","Kırmızı","Yeşil","Mavi","Sıfırla","Renk","Sarı","Deniz Mavisi","Macenta"];
var picMotionClarity = ["Hareket modu","Hareket enterpolasyonu","LED Hareket netliği","Bulanıklık azaltma","Titreme azaltma","Sıfırla"];
var picMotionMode   = ["Film","Pürüzsüz","Temizle ","Spor","Müşteri"];
var picResetDes		= "Tüm kişisel ayarlar sıfırlanacak. Seçilen işlemi yapmak istediğinizden emin misiniz?";
var pic10PReset     = "10P beyaz dengesini sıfırlamak istediğinizden emin misiniz?";
var picMotionReset  = "Hareket netliğini sıfırlamak istiyor musunuz?";
var picColorSpaceReset    = "Renk alanını sıfırlamak istediğinizden emin misiniz?";
var picOptions		= ["Resim önayarı ",
						"Arkı ışık","Parlaklık ","Kontrast","Doygunluk ","Ton","Netlik","Renk Isısı ","Ekran Modu ","Oto biçim",
						"Spor geliştirme","3D  ","3D navigasyon","ECO Ayarlar","Geometri",
						"Gelişmiş ayarlar","Resim sıfırlama","mikro karartma"];
var picSize			= ["16:9 biçimi", "4:3 format", "14:9 formatı", "Sinerama",
						"16:9  Zoom", "16:9 uvećanje","14:9 Zoom","Stretch Zoom","Wide Zoom",
						"Zoom 2","Wide Zoom 2","Ekran Doğal Uyumu","Tačkasto","Orijinal","Panorama"];
var others			= ["Ses Seviyesi ","Yayın","Şifre ","Durum","Kaydet","Değiştir","Başlat","Çıkış ","Ara","Sil",
						"Hiçbiri","Otomatik","Tara","Güvenlik","Bağlan","Yenile","Tkr dn","Durdur","Ayarlar","Kanallar",
						"Düzenle","Ekle","Sinyal! ","Bitir","Stereo","Ses","Kaynak","Ses Yok ","İpuçları","Sıfırla",
						"Müşteri","Kurulum","Yükle","Kullanıcı","Klavyeyi kapat","Güvenlik modu","Hergün ","PVR listesi"];
var direction		= ["Sol","Sağ","Yukarı","Aşağı"];
var audioType 		= ["MPEG","DOLBY AUDIO"/*"AC3"*/,"MPEG4","AAC", "DOLBY AUDIO"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Bilinmiyor"];
var soundChannels   = ["Bilinmiyor","Mono","Alt","Çift Mono","Stereo","Stereo Sub","Stereo Dolby Surround","Surround 2CH","Surround","3.0Ch","4.0Ch","5.0Ch","Mono Lfe","Dual Mono Lfe","Stereo Lfe","Surround 2Ch Lfe","Surround Lfe","3.1Ch","4.1Ch","5.1CH","7.1CH","Joint Stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Sol","Sağ","Diğerleri"];
var prompts			= ["İzleme ortamınıza en uygun resim ayarlarını ayarlayın.",
						"Parlaklık seviyelerini ayarlayın. 100'e yaklaştıkça parlaklık artar.",
						"Kontrast seviyelerini ayarlayın. 100'e yaklaştıkça resim koyu-açık farklılığı artar.",
						"Doygunluk seviyelerini ayarlayın. 100'e yaklaştıkça renk güçlenir.",
						"Keskinlik seviyelerini ayarlayın. 100'e yaklaştıkça detaylar belirginleşir.",
						"Arka aydınlatma seviyelerini ayarlayın. 100'e yaklaştıkça ekran parlaklaşır.",
						"Renk tonu seviyelerini ayarlayın. Bu ayar renk tonlarını değiştirir.",
						"İzleyeceğiniz programa en uygun resim formatını seçin.",
						"Enerji tasarrufu seçeneklerini yapılandır.",
						"Bir PC'ye bağlarken ekran geometri ayarlarını yapın.",
						"Daha fazla resim gelişmiş ayarlarını seçin.",
						"Tüm resim ayarlarını varsayılana geri yükle.",
						"Kişisel tercihinize uygun bir ses modu seçin.",
						"Sol ve sağ kanal arasındaki ses dengesini ayarlayın.",
						"Ses Geri Alma Sistemi TruSurround HD yüksek ses performansıyla birlikte düşük ve yüksek frekanslarda berraklık sağlar.",
						"TV dijital ses çıkışını ev sinema ses donanımına bağlarken Dijital Arabirim Formatı.",
						"Kişisel tercihinize uyan ses dilini seçin.",
						"Görme Engellilerin televizyon programlarının keyfini çıkarmalarını sağlayın.",
						"TV'nizin resim, ses ve sinyalini test edin.",
						"TV sinyalinize uyan kanal listesi türünü seçin.",
						"Ekranın alt kısmında görüntülenen programın altyazı dilini seçin.",
						"Geçerli kanalın metin ve resimlerini görüntüleyin.",
						"Digital Living Network Alliance. Bir PC gibi ev ağına bağlı diğer cihazlardan müzik, resim ve videoların keyfini çıkarın.",
						"Akıllı telefonunuzdaki içerikleri TV'de görüntüleyin ve akıllı telefonunuzu bir TV kumandası olarak kullanın.",
						"TV'nizin ekranında bir Miracast uyumlu Android cihazdaki içerikleri görüntüleyin.",
						"TV’nize kilit koyun.",
						"Cihazınız için bir ad seçin.",
						"İzleme ortamınızı seçin.",
						"Tüm Sistem Ayarlarını varsayılana geri yükle.",
    					"Switch off sports mode for more options.",
    					"Çevresel kontrastı geliştir",
    					"Spor keyfi için özel bir mod",
    					"Diğer CEC işlevlerinden yararlanın."];
var initialTitle	= ["Hoşgeldiniz ","İlk kurulum "];
var initialPrompt	= ["İlk Kurulumunuzu yapın ve Heyecan Verici Deneyim Dünyası sizi bekliyor!",
						"Lütfen dilinizi seçin:",
						"Ülkenizi / Bölgenizi seçin:",
						"Lütfen yerinizi seçin:",
						"Lütfen ağ bağlantı türünüzü seçin:",
						"Lütfen kablolu ağ bağlantı modunuzu seçin:",
						"xxxxxxxxx bağlantısı başarısız! Lütfen cihazı aşağıdaki Diyagram göre bağlayın veya sıfırlamak için Sol seçin.",
						"xxxxxxxxx bağlantısı kuruldu! Devam etmek için Sağ seçin.",
						"1) TV'niz bir yerleşik Kablosuz Adaptörüne sahip olabilir\n 2) Veya bir Kablosuz USB adaptörü sağlanmış olabilir. Bunu TV'nize bağlayın. Ardından lütfen kablosuz ağ bağlantısı modunu seçin.",
						"Taranıyor. Lütfen bekleyin...",
						"TV'ye bağlı bulunan kablosuz bir aygıt yok!",
						"Aşağıdaki \"İleri\" tuşuna tıklamadan önce lütfen aşağıdaki PIN kodunun AP'ye kurulduğundan emin olun.",
						"Sağ düğmeye basmadan önce 120 saniye içinde AP üzerindeki düğmeye basın!",
						" WPS (Wi-Fi Korumalı Kurulum)",
						"PIN (Kişisel Kimlik Numarası)",
						"PBC (Basmalı Düğme Yapılandırması)",
						"Aşağıdaki içerikler yalnızca bir ağ bağlantısı ile ulaşılabilir. Ağ Kurulumunu atlamak istiyor musunuz?",
						"İndirmeniz için bekleyen yeni yazılım güncellemeleri var ve ağınızın durumuna bağlı olarak indirme işlemi biraz zaman alabilir.",
						"TV’nizin yazılımını güncellemek, en son özellik ve hizmetlerden faydalanmanızı sağlar.",
						"En yeni özellikler ve servislerin keyfini çıkaramayacaksınız. Yazılım Güncellemesini atlamak istiyor musunuz?",
						"Devam etmek için Sağ düğmeye basın.",
						"Güncelleme sırasında gücü kesmeyin aksi halde TV'niz arızalanabilir.",
						"Güncelleştirmek istemiyorsanız, HAYIR seçeneğini seçin.",
						"Güncelleniyor, lütfen bekleyin",
						"Ayrıca SİSTEM/YAZILIM GÜNCELLEME menüsünde yazılımı güncelleyebilirsiniz.",
						"Seçilen ülke parola ayarı yapılmasını istiyor.\nLütfen televizyonunuz için kodu ayarlayın ve onaylayın.",
						"This code is too simple.\nPlease use different digits.",
						"Tebrikler! İlk kurulum tamamlandı. Ana Menüden ve ilgili alt menülerden yapılandırmanızı değiştirebilirsiniz.",
						"Lütfen güvenlik modunu seçin:",
						"Lütfen kablosuz ağ bağlantısı modunu seçin:",
						"Ağ"];
var initNetCabAndDonRe = ["Hiçbir ağ kablosu bağlı değil, lütfen bir ağ kablosu takın!","Yerleşik adaptör veya kablosuz USB adaptörü sağlanmamış."];
var initChPrompt = ["TV Kanal kurulumu","Lütfen Anten tarama türünü seçin.","Otomatik ayarlama devam ediyor...","Aşağıdaki Anten kanalları bulundu:","Lütfen Kablolu arama türünü seçin.","Lütfen aşağıdaki listeden bir operatör seçin.","Lütfen arama bilgisini yapılandırın","Aşağıdaki Kablolu kanallar bulundu:","Lütfen aşağıdaki listeden bir operatör seçin","Lütfen aranacak uyduları seçin veya seçili uyduyu düzenleyin","Lütfen uydu parametrelerini ayarlayın","Aşağıdaki kanallar bulundu, ve kanal taraması Kanal/Kanal Tarama menüsünde yeniden gerçekleştirilebilir"];
var initClockPrompt = ["Ağ tarafından sağlanan zamanı alın!",
						"Lütfen Tarih ve Saati ayarlayın:"];
var initialOptions	= ["Ortam","Ağ Ayarı","Yazılım yükseltme","Kanal Kurulumu","Saat "];
var initialHotkeys	= ["Geri ","Seç","Sonraki","Kabul ediyorum"];
var initLocations	= ["Giriş","Mağaza","Gösterim ve Mağaza"];
var initNets		= ["Kablolu","Kablosuz","Bir ağ bağlantım yok"];
var initWireManuals	= ["IP adresi","Altağ maskesi","Varsayılan ağ geçidi","Asıl DNS","Yardımcı DNS"];
var initSoftUpdates = ["Şimdi güncelle","Sonra güncelle"];
var initChannelIns	= ["Devam","Kanalları yüklemek istemiyorum"];
var initChScanTypes	= ["Dijital & Analog","Dijital","Analog","Aramak istemiyorum"];
var initChDvbts		= ["Anten ATV kanalları:","Anten DTV kanalları:"];
var initChDvbcs		= ["Kablolu ATV kanallar:","Kablolu DTV kanallar:"];
var initChDvbss		= ["Uydu kanalları:"];
var initChDvbSOther	= ["Uydu aramak istemiyorum"];
var initEndConnectedStatus= ["Bağlantı kesildi","Wi-Fi bağlı","Kabloyla bağlı"];
var initEndInstallations= "XXXX kanalları yüklü";
var initEndUpdate	= ["Güncellendi"];

var audioScenes 	= ["Masa üstü","Duvara monte"];			
var screenSavers	= ["Kanal yok, lütfen tamam tuşuna basın ve tarayın!",
						"Sinyal Yok! ",
						"Şifreli ",
						"Sadece Veri",
						"Ses Programı ",
						"Ses ve Video Yok ",
						"Kullanılamaz",
						"Teleteks Yok",
						"Program verileri yok.",
						"Program Kitlendi!",
						"Program Kitlendi!\nTamam'a basın ve kodunuzu girin.",
						"Program detayları yok.",
						"Çocuklar için zararlı program.\nTAMAM düğmesine basın ve kodu girin.",
						"Kanal Kitlendi!",
						"Kanal Kilitli!\nTamam'a basın ve kodunuzu girin.",
						"Giriş Kilitli!\nTamam'a basın ve kodunuzu girin.",
						"Desteklenmiyor!",
						"Bu hizmet şu anda kullanılmıyor",
						"Giriş Kilitli!",
						"Program başlığı yok.",
						"İşlev yok",
    					"Altyazı Yok"
						];
var channelNumberOverPromt = ["The number of search programs has exceeded,you can delete some programs and then retry!"];
var chBookingPromt	= ["Mevcut kanalda planlanmış bir kayıt var, TV kayda başlayacak.",
						"Programlı bir kayıt bulundu.\n Kaydetmek için XXXX geç",
						"Şu anki kanal bir hatırlatıcıya sahip.",
						"Programlı bir hatırlatıcı bulundu.\n XXXX geç"];
var timeUnit		= ["San.","dak"];
var ciPromt			= ["Ağ verileri değiştirildi. Güncellemek için bir güncelleme taraması gerçekleştirebilirsiniz. ",];
var othersPromt		= ["Lütfen Bekleyin...",];
var menuOptions		= ["Resim  ","Ses ","Kanal","Smart TV","Ağ","Sistem","Destek"];
var optionOptions	= ["Resim önayarı ","Ses ayarı","Dondur","T-Link","zaman kaydırma","PVR","Program listesi","Ayarlar","*"];
var optionTLinkPromt= [["Otomatik aç","Oto. bekleme modu","Kılavuz menü"],
						["Gücü Aç","Bekleme modu","Amplifikatör Sesi"]];
var powerPromt		= ["TV şimdi kapanacak! İptal etmek için lütfen bir düğmeye basın."];
var ttxLanguage		= ["BATI AVR ","DOĞU AVR ","Rusça","Arapça/İbranice","Farsça","Arapça","Белорусский","Yunanca","Türkçe"];
var ttxOptions		= ["Göster","Dairesel Alt Sayfalar","Dil","Alarm Sayfası","Yeni flaş"];
var weekday         = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
var lcnConfflict	= "Bu programda sorun algılaması vardır.";
var inShopMode		= "TV'niz mağaza modunda. Ev modu için lütfen 'Sistem' seçin ve menüden 'Yer' seçeneğini değiştirin.";
var nitRefresh		= "Şebeke verileri değiştirildi. Güncelleme taraması yapmak istiyor musunuz?";
var picHDMIMode     = ["Oto","Grafik","Video"];

var glassRemind    	= ["Lütfen 3B gözlüklerinizi TV'niz ile eşleştirin\n(3B gözlük üzerindeki GÜÇ düğmesine basılı tutun).","3B gözlüğünüz TV'nize bağlandı ",""];
var pvrRemind 		= ["USB aygıtını çıkarmayın veya gücü kesmeyin"];
var pvrConName   	= ["PVR","Program bilgileri:",["Note: If you record the HD channel, please to select  the  disk(of speed >5.0MB/sec), and to select the disk (of speed >3.0MB/sec) when you want to record the SD channel.","Kaydedilen video \"PVR\" klasörüne kaydedildi."],"Durdur","Kayıt  ","saat","Dakika","Süre","İpuçları","Kayıt süresini ayarlamak için ok tuşlarını kullanın."];
var pvrDisRemind 	= "Kayıt için lütfen USB çubuk takın.";
var pvrRemindWords  = ["Çıkmak istiyor musunuz?",
							"Kaydı durdurmak ve kayıtlı dosyalara göz atmak istiyor musunuz?",
							"Disk çıkartıldı.",
							"Yeterli boş alan yok.",
							"Kayıtlı dosya yok. Kaydı başlat.",
							"PVR, Şifreli Kanalda başlayamaz.",
							"Özellik bulunmamaktadır",
							"Başarıyla Kaydedildi.",
							"Kayıt sürecini durdurmak ve kaynak girişini değiştirmek istiyor musun?",
							"TV mevcut kaydı sonlandıracak. Çıkmak istiyor musunuz?",
							"PVR kaydı için TV sinyalinin düzgün olması gerekir, lütfen sinyalinizi kontrol edin."];
var pvrChangeCh 	= ["Kanalı açmak istiyor musunuz?",
							"Kayıt sürecini durdurmak ve kanalı değiştirmek istiyor musun?"];
var pvrChangeToPIN8	= ["Kaynağı SCART girişine bağlı aygıta değiştirmek istiyor musunuz?",
				    		"Kaydı durdurmak ve kaynağı SCART girişine bağlı aygıta değiştirmek istiyor musunuz?"];
var pvrChangeToCEC  = ["Kaynağı HDMI girişine bağlı aygıta değiştirmek istiyor musunuz?",
				  			 "Kaydı durdurmak ve kaynağı bir HDMI girişine bağlı aygıta değiştirmek istiyor musunuz?"];
var pvrGuideJump    = ["EPG girmek istiyor musunuz?",
							"Kayıt sürecini durdurmak ve EPG'ye girmek istiyor musun?"];
var pvrMediaJump    = ["Medya girmek istiyor musunuz?",
							"Kayıt sürecini durdurmak ve Media'ye girmek istiyor musun?"];
var timeshiftExtra	= ["Zmn kydrmyı drdrmk ve kanalı değiştir?",
						"Süre değişmeyi durdurmak ve kaynağı SCART girişine bağlı aygıta değiştirmek istiyor musunuz?",
						"Süre değişmeyi durdurmak ve kaynağı bir HDMI girişine bağlı aygıta değiştirmek istiyor musunuz?",
						"Zaman Kaydırma, Sifreli Kanalda başlayamaz.",
						"Süre değiştirmeyi durdurmak ve EPG girmek istiyor musunuz?",
						"Zmn kydrmyı drdrmk ve TV'yi USB moduna dğştrmek istiyor musunuz?",
						"Zmn kydrmyı drdrmk ve giriş kaynağını değiştir?",
						"Kayıt için lütfen USB çubuk takın.",
						"Disk boyutu yeterli değil.",
						"TV mevcut süre değiştirmeyi sonlandıracak. Çıkmak istiyor musunuz?"];
var timeshiftStatus	= ["Hızlı Geri","Durdur","Çal","Duraklat","Hızlı İleri"];
var pvrPowerOffRemind= ["Beklemede Kayıt","Bekleme modu","TV şuanda kayıt yapıyor, TV bekleme modundayken kaydı sürdürmek istiyor musunuz?"];
var timeshiftInitTitle= "Disk Ayarı";
var timeshiftInitReminds= ["Bu sihirbaz zaman kaydırmak için USD diskini ayarlamada kullanılır. Lütfen ayar modunu seçin.",
						 "Daha iyi performans elde etmek için USB diskini biçimlendirmenizi öneririz. Tüm verileri silecektir.",
						 "Lütfen zaman kaydırma için dosya boyutunu seçin.",
						 "Biçimlendiriyor",
						 "Yeterli boş alan yok.",
						 "Zaman kaydırma dosyası oluşturuyor",
						 "Hız testi",
						 "Zaman kaydırma özelliğini etkinleştirmek için disk hızı çok yavaş (< %f MB/san)!",
						 "Disk, zaman kaydırması için hazır. Fakat daha iyi performans için diski değiştirmenizi öneririz (hızı > %f MB/san olan).",
						 "Disk, zaman kaydırması için hazır."];
var timeshiftInitButtons= ["Biçimlendir ","Atla","İptal","Tamam","Bitir","Çıkış "];
var timeshiftInitOther=["Disk Hızı:","MB/sn"];

var selectChoice	= "Emin misiniz ?";
var chAtvStore		= "XXXX olarak sakla";
var chEpgFirstGenreUK= ["Sinema","Haberler ve Olaylar","EĞLENCE","Spor","Çocuk","Eğitim","Yaşam tarzı","Drama"];
var homePageTitleList = ["UYGULAMALAR","TV","VİDEOLAR","Ana sayfa"];
var homePageFavAndAllName  = ["Favori Uygulamalar","Tüm Uygulamalar"];
var homePageBackUp = ["E-Kılavuz","Kılavuz Açık"];
var homePageRemind   = ["Tüm işlevler yalnızca ağ bağlantısı kurulduktan sonra kullanılabilir.","TV'nizde henüz hiçbir kanal yok. Programlar kanal taramasından sonra kullanılabilir.","Program yok","Kanalları şimdi ara?"];
var homePageHistory = ["Geçmiş"];
var miracastTitle = ["Wifi ekranı","TCL cihazı"];
var miracastRemind=["Wifi ekranı, bir akıllı telefon veya bir tablet gibi cihazlarınızın ekranını ve sesini kablosuz (ör. kablolar olmadan) olarak TV'nizle paylaşmanıza imkân verir. Böylece akıllı telefonunuzda veya tabletinizde gördüğünüzü aynı zamanda TV'nizde de görebilirsiniz. Örneğin, akıllı telefonunuzda bir video başlatabilir ve aynı anda TV'nizde görüntüleyebilirsiniz veya içeriği TV'nizin büyük ekranında görüntülenen oyun kontrolcüsü olarak tabletinizi kullanın.","TV’de Wifi ekranı hazır. Lütfen cihazınızın ekranını şimdi TV ile paylaşın.","Bağlanıyor. Lütfen bekleyin!","Bağlantı başarısız!","Bağlanamadı. Lütfen kontrol edin!"];
var homePageLittleWin = ["Ayarlar","Ortam","Fav kanallar","Smart TV","EPG"];

var hbbtvStopRemind  = ["Oynatmayı durdurmak istiyor musunuz?"];
var colorSystem = ["Oto","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Daha fazla bilgi için ≡ düğmesine basın";
var emptyListInfo = "TV'ye bağlı bir aygıt yok!";
var optionVideoListArray_1 = ["Resim önayarı ", "Ses ayarı", "Oynat modu", "Ekran Modu ", "3D Modu", 
							  "Sl-Sğ Değiştir", "Alan Derinliği", "Altyazı ", "Ses bandı", "Başlık", "Bölüm", "Bilgiler"];
var optionVideoListArray_2 = ["Resim önayarı ", "Ses ayarı", "Oynat modu", "Ekran Modu ", 
							  "Altyazı ", "Ses bandı", "Başlık", "Bölüm", "Bilgiler"];
var bottomTipsText = ["Oynat/Duraklat", "Hızlı Geri", "Hızlı İleri", "Oynatma listesi", "Ayarlar"];
var picturePresetArray = ["Standart", "Dinamik", "Doğal", "Sinema", "Kişisel"];
var videoPlayModeArray = ["Tümünü Yinele", "Birini Yinele", "Normal"];
var screenModeHDArray = ["16:9", "4:3", "Sinerama", "Wide Zoom", "Zoom 2", "Wide Zoom 2", "Stretch Zoom", "Otomatik"];
var screenModeSDArray = ["16:9", "4:3", "Sinerama", "14:9 Zoom", "16:9  Zoom", "16:9 uvećanje", "Otomatik"];
var Mode3DArray = ["Kapalı", "2D'den 3D'ye", "Yan Yana", "Üst ve Alt", "Satır Ekleme"];
var videoOptionListArray = ["Kapalı", "Parça", "Altyazı ", "Başlık", "Bölüm"];
var subMenuTitleText = "Altyazı ";
var langMenuTitleText = "Ses Dili ";
var titleMenuTitleText = "Başlık";
var mode3DMenuTitleText = "3D Modu";
var langInfoText = "Parça";
var STOP_RESUME_INFO = "Durdur-Devam Et";
var playListName = " adı";
var eb_tips = "İpuçları";
var ok_button = "Tamam";
var eb_info = ["Ses kod çözme hatası.", "Video kod çözme hatası.", "Ses formatı desteklenmiyor.", 
			   "Video formatı desteklenmiyor.", "Bu dosya açılamaz.", "Oynatma hatası, lütfen tekrar deneyin.",
			   "Dosya biçimi desteklenmiyor.", "Eyvah! Oynatıcı çalışmayı durdurdu.",
			   "Dosya yolu mevcut değil veya geçersiz.\n Depolama aygıtını yeniden bağlayın ve tekrar deneyin.",
			   "Önceki\n oynatma durumundan oynatmaya devam edilsin mi?"];
var picturePlayErrorTips = ["Yükleme hatası!!!","Resim çok büyük!!!","Ağ hatası!!!","Başlık hatası!!!","Param. hatası!!!","Bilinmeyen hata!!!"];
var frameTitleText = "Yeni Cihaz";
var eb_quit_info = "Çıkmak istediğinizden emin misiniz?";
var eb_yes = "EVET";
var eb_no = "HAYIR";
var offinfo = "Kapalı";
var naInfo = "Boş";
var consoleInfoArray = ["Hızlı Geri", "Hızlı İleri", "Oynat/Duraklat", "Oynatma listesi"];
var cantOperateText = ["İşlev desteklenmiyor."];
var chapterChangeInfo = "Yalnızca 1 ila XXXX arasındaki Bölümler kullanılabilir.";
var metaDataArray = ["Başlık/Sürüm Metaverisi: ", "Bölüm Metaverisi: ", "Ses Metaverisi: ", "Altyazı Metaverisi: "];
var metaTitleInfo = "Başlık";
var metaChapterInfo = "Bölüm";
var videoLoadingInfo = "Analiz ediliyor...";
var listLoadingInfo = "Yükleniyor...";
var pgInfo = "Yasal Derecelendirme: ";
var fileNameText = " adı";
var fileDateText = "Tarih";
var fileSizeText = "Boyut";
var fileDurationText = "Süre";
var fileDirectorText = "Direktör";
var fileCopyrightText = "Telif hakkı";
var fileArtistText = "Sanatçı";
var fileAlbumText = "Albüm";
var fileGenreText = "Tür";
var fileYearText = "Yıl";
var fileGenreText = "Tür";
var mainListArray = ["Tümü", "Resim  ", "Video", "Müzik"];
var sortArray = [" adı", "Tarih"];
var parserArray = ["Normal", "Tekrarlı  "];
var emptyTipsInfo = "Eyvah! Desteklenen dosya bulunamadı.";
var emptyFolderInfo = "Eyvah! Desteklenen dosya bulunamadı.";
var sortName = "Sıralama biçimi";
var parserName = "Derleyici";
var divx_str1 = "DivX(R) kaydı";
var divx_str2 = "DivX(R) kayıt silme";
var infor_str = "Bilgiler";
var quickMenuEmptyText = "Kullanılabilir Seçenek Yok.";

var musicSoundPresetArray = ["Standart", "Sinema", "Müzik", "Net ses", "Kişisel"];
var musicInformationArray = [" adı", "Sanatçı", "Albüm", "Tür:", "Yıl:", "Süre:"];
var playListName = " adı";
var playTipsInfo = ["İlk dosyayı oynatıyorsunuz", "Son dosyayı oynatıyorsunuz"]
var musicNameInfo = "Name";
var musicArtistInfo = "Sanatçı";
var musicAlbumInfo = "Bilgiler";
var optionSoundPresetInfo = "Ses ayarı";
var optionBGMInfo = "Arka planda çal";
var optionAudioOnlyInfo = "Sadece ses";
var optionInfoText = "Bilgiler";

var remotePhoneConnecte = "XXXX TV'ye bağlandı!";
var tvRemoteTitle		= "TV uzaktan";
var tvRemoteDeveloper	= "Uygulama, TCL tarafından geliştirilmiştir";
var tvRemoteDeviceTitle	= "Cihaz Adı:";
var remoteOption		= ["Medya Paylaşım","Uzaktan Kumanda","Yardım","Hakkında","Akıllı Bağlantı"];
var remotebottom		= " Lütfen akıllı telefonunuz için \"TV Kumandası\" uygulamasını indirin ";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Telefonunuz üzerinden fotoğraflar, videolar ve müziklerinizi TV'nizde paylaşımı.",
							"Adımlar: \n   1. Telefondaki \"TV Remote\" uygulamasını tıklatın. Telefonu aynı WiFi ağıyla TV'ye bağlayın;\n   2. Medya dosyalarını taramak için \"Medya Paylaşımı\" seçeneğini tıklatın;\n   3. Medyayı oynatmak üzere TV'ye gönderin (aşağıdaki seçeneklerden birisiyle)",
							"      a)  Klasörü/dosyayı sürükleyin ve ekranın en üstünde bulunan TV simgesine bırakın;\n      b) İlk dosyayı başlatmak için telefonu televizyona doğru sallayın;\n      c) Medya dosyasını telefonda çaldırın ve TV paylaşım simgesine tıklayın;",
							"   4.TV'de çalarken önceki veya sonraki dosyayı çaldırmak için telefonu sallayın."];
var controlReminds		= ["Televizyonu yönetmek için telefonu bir uzaktan kumanda gibi kullanın.",
							" ",
							"Adımlar: \n   1. Telefondaki \"TV Remote\" uygulamasını tıklatın. Telefonu aynı WiFi ağıyla TV'ye bağlayın;\n   2. TV'yi çalıştırmak için \"Uzaktan Kumanda\" seçeneğini tıklatın."];
var helpDeviceWords		= "Çoklu ekran etkileşimi";
var helpBottom			= "Bulut teknolojisi çağında, telefon ve TV gibi akıllı cihazlar ortak olarak bağlanır. Çoklu ekranlarda ailenizle medya paylaşın ve TV’yi telefondan kumanda edin! ";
var helpReminds			= ["Hazırlıklar\n   1. Google Play veya Apple Store'den \"TV Remote\" uygulamasını indirin.\n   2. Telefonu aynı WiFi ağıyla TV'ye bağlayın.",
							" ",
							"Önerilen telefon\n   1. İşlemci: 800MHz üzeri\n   2. Depolama: en az 80MB boş yer",
							" ",
							"Feragat\n   Telefonunuzda \"TV Remote\" uygulaması kullanılamıyorsa lütfen telefon üreticinizle irtibata geçin. "];
var helpButtons			= ["Geri","Sonraki"];
var aboutReminds		= ["TV uzaktan","Uygulama, TCL tarafından geliştirilmiştir"];
var aboutExit			= "Çıkış ";
var smartReminds		= ["TV ve telefon arasında hızlı ve akıllı bağlantı.",
							" ",
							"Adımlar\n   1. TV ve akıllı telefonu aynı LAN ağına bağlayın. Akıllı telefonda \"TV Remote\" uygulamasını tıklatın.\n   2. QR kodunu taramak için \"Smart Connect\" (Akıllı Bağlantı) seçeneğini tıklatın.\n   3. TV'niz yayın izleme modundayken, 4 saniye boyunca TV kumandasındaki INFO (BİLGİ) düğmesine basılı tutun ve tam ekran QR kodu açılacaktır.",];
var smartQRReminds		= ["Telefonunuzdaki TV Remote uygulamasındaki Smart Connect (Akıllı Bağlantı) seçeneğini tıklatın ve TV ve telefonu hızlı bir şekilde bağlamak için QR kodunu taratın.",
							"QR code LAN hesap bilgilerini içerir. Lütfen bu bilgileri saklayın."];
							

var consoleTipArray = ["Geri","Sonraki","Konsol","Oynatma listesi"];							
var optionInfoArray = ["Resim önayarı ","Oynat modu","Süre","Etki ","Bilgiler"];

var playModeArray = ["Normal","Karma","Yinele"];
var durationArray = ["Kısa(5sn)", "Orta(10sn)", "Uzun(15sn)"];
var effectArray = ["Hiçbiri", "Döndür", "Sağa sil", "Sola sil", "Yukarı sil", "Aşağı sil", "Kutu içi", "Kutu dışı", "Rastgele"];
var infoArray = ["Adı:","Boyut:","Tarih:","Yer"];

var picturePresetBarTitleInfo = "Resim önayarı ";
var picturePresetBarArray = ["Standart","Dinamik","Stüdyo","Sinema","Kişisel"];
var upTipsInfo = "Resmi Taşı"; //add yums 2014-10-10
var consoleTipsArray = ["Konsol","Geri","Sonraki","Oynatma listesi","Ayarlar"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Sonraki resmi görüntülemek için tekrar SAĞ düğmeye basın","Önceki resmi görüntülemek için tekrar SOL düğmeye basın","Oynatma listesini açmak için tekrar AŞAĞI düğmesine basın"]; //add yums 2014-10-10

var optionPvrListArray = ["Resim önayarı ","Ses ayarı", "Ekran Modu ", "3D Modu", "Altyazı ", "Ses bandı", "Bilgiler"];							
	
var titleSpanFirstArray = ["Kontrol ve Bağlantı","Temel İşlemler","UYGULAMALAR","TV","Ayarlar","Sıkça soru \n sormak"];
var titleSpanSecondArray = [["Uzaktan Kumanda","Panel Kontrol Düğmeleri","Kolay Navigasyon","TV Bağlantısı","TV Bağlantısı","TV Bağlantısı","Kablosuz"],["Başlatıcı","Durum çubuğu","Kaynak"],["Çalışan uygulamalar","Ortam","TV uzaktan"],["Kanal ve ses düzeyini ayarla","Kanal Listesi ","EPG","Kanal kurulumu kaldır","Favori kanallar"],["Resim ayarı","Ses ayarı","Kanal ayarı","Yazılım yükseltme","Dil","Ebeveyn kilidi"],["Sıkça soru sormak","Sıkça soru sormak","Sorun giderme","Sorun giderme","Şartlar ve koşullar"]];
var contentSpan1_1Array =[["POWER (GÜÇ):","SOURCE (KAYNAK):","AYARLAR:","SEÇENEK:","GERİ:","INFO (BİLGİ):","ANA SAYFA:","ÇIKIŞ:","LIST (LİSTE):"],
    ["Gücü açar veya bekleme modundan çıkar",
        "Giriş kaynağını seçin",
        "Ayarlar menüsünü görüntülemek için",
        "Seçenek menüsünü görüntülemek için",
        "Önceki menüye dönün veya çalışan bir uygulamadan çıkın",
        "Program bilgilerini gösterir",
        "SmartTV ana sayfasına gitmek için",
        "Önceki menüye dönün veya çalışan bir uygulamadan çıkın",
        "Kanal listesini gösterir"]];
var contentSpan1_2Array = ["Önceki kanal","Sonraki kanal","Ses düzeyini artır","Ses düzeyini azalt","Ana sayfaya gider","Seçeneği onayla","Bekleme / Güç açık"];
var contentSpan1_3Array = ["OK/Guide","Kanal yukarı","Kanal aşağı","Ses azalt","Ses artır","Bazı işlevlerde ok tuşları olarak kullanılabilir."];
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","AV OUT adaptörü","LAN","Akıllı telefon","PC/Set üstü kutusu/DVD","Ses yükseltici","Ses yükseltici/Monitör","TV'niz tüm soketleri içermeyebilir."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Kulaklık","AV IN adaptörü","SPDIF","CMP AUDIO GİRİŞİ adaptörü","CMP GİRİŞİ (YPbPr) adaptörü","USB cihazları","USB cihazları","Kulaklık","DVC/Oyun Konsolu/Set üstü kutusu/DVD","Ses yükseltici","DVC/Oyun Konsolu/Set üstü kutusu/DVD","TV'niz tüm soketleri içermeyebilir."];
var contentSpan1_6Array = ["Ortak Arayüz ","SD","VGA","SCART","Mini SCART","ANTEN GİRİŞİ","PCMCIA Kartı","SD Kartı","PC","Set üstü kutusu/DVD","Anten/Kablo/Uydu","TV'niz tüm soketleri içermeyebilir."];
var contentSpan1_7Array = ["Tablet","PC","Yönlendirici","Telefon","TV"];
var contentSpan1_8Array = ["Düğme fonksiyonu/Güç","Uyku zamanlayıcısına gitmek için uzun süreli basın","Aşağı","Yukarı","Ses/Kanal/Kaynak"];

var contentSpan2Array = [["Giriş Sayfasını görmek için ok tuşlarına basın.","Ardından öne çıkan programlardan birini izlemek veya uygulamaya girmek için TAMAM düğmesine basın."],["Ekranın sağ üst köşesinde tarih, ağ ve aygıtları gösterin."],["Farklı bağlantı noktaları üzerinden TV, AV, HDMI gibi TV'ye bağlı aygıtlardan giriş kaynağını seçin."]];

var contentSpan3Array = ["Smart TV sayfası üzerinden sevdiğiniz Uygulamalarınızı görüntüleyin ve keyfini çıkarın","Bir USB depolama aygıtındaki fotoğrafları görüntüleyin, videoları izleyin ve müzikleri dinleyin açın","TV ve akıllı telefonunuzu veya tabletinizi aynı LAN ağına bağlayın.","Akıllı telefon ya da tabletinizdeki nScreen veya TV Remote uygulamasını tıklatın.","Çoklu ekranlarda akıllı telefonunuz aracılığıyla TV'niz üzerinden fotoğraflarınızı, videolarınızı ve müziklerinizi ailenizle paylaşın."];

var contentSpan4Array = [["Kanalları değiştirmek için YUKARI/AŞAĞI düğmelerine basın","Ses düzeyini ayarlamak için SOL/SAĞ düğmelere basın"],["Kanalları sıralı şekilde görmek için kumandadaki LIST düğmesine basın","Kanalınızı seçmek için YUKARI/AŞAĞI düğmelerine basın"],["EPG planlanan TV programlarını görüntüleyen ekran üzeri bir kılavuzdur. Programlarda gezinebilir, bunları seçebilir, görüntüleyebilir ve kaydedebilirsiniz."],["Kanalları ara ve yükle"],["Kanal listesine favori kanallarınızı ekleyin veya bunları düzenleyin"]];

var contentSpan5Array = ["Video uygulamalarıyla favori programlarınızın keyfini çıkarın"];

var contentSpan6Array = [["Sistem ayarları seçeneklerini göstermek için Seçenek düğmesine basın","Değerleri ayarlamak için Resim ayarlarını girin"],["Sistem ayarları seçeneklerini göstermek için Seçenek düğmesine basın","Seçenekleri ayarlamak için Ses ayarlarını girin"],["Sistem ayarları seçeneklerini göstermek için Seçenek düğmesine basın","Seçenekleri ayarlamak için Kanal ayarlarını girin"],["Yeni bir yazılım sürümü mevcut olduğunda TV'nizi güncelleyin"],["Tercih ettiğiniz menü dilini seçebilirsiniz"],["Ebeveynlerin çocuklar için uygun olmayan kanalları veya programları kilitlemelerini sağlar"]];

var contentSpan7_1Array = [["Resim yok, ses yok","Sigorta veya devre kesicinin çalıştığını kontrol edin.","Çalıştığından veya açık olduğundan emin olmak için elektrik prizine başka bir elektrikli cihaz bağlayın.","Fiş ile priz teması düzgün değil","Sinyal kaynağını kontrol edin."],["Normal resim, ses yok","Sesi düzeyini artırmak için ses YUKARI düğmesine basın.","Ses ayarları yanlış.","Yayınından sinyal hatası."],["Normal ses, resim yok","Parlaklığı ve kontrastı ayarlayın","Yayınından sinyal hatası.","Yalnızca ses modunda olup olmadığını kontrol edin."]];
var contentSpan7_2Array = [["Radyo frekansı paraziti","Bu parazit hareketli dalgalanmalar veya çapraz çizgiler oluşturur ve bazı durumlarda resimde kontrast kaybına neden olur. Radyo paraziti kaynağını bulun ve düzeltin."],["Renk yok","Renk ayarlarını değiştirin.","Başka bir kanalı deneyin. Siyah-beyaz program alınabilir."],["Uzaktan kumanda çalışmıyor","Pilleri değiştirin.","Piller düzgün yüklü değil. TV'nin ana güç kaynağı bağlı değil."]];
var contentSpan7_3Array = [["USB aygıtının içeriği görüntülenmiyor","USB depolama aygıtının TV ile uyumlu olduğunu kontrol edin.","Ses ve resim dosyası biçimlerinin TV tarafından desteklendiğini kontrol edin."],["Ses olmadan oynatılıyor","Videonun ses biçimi TV oynatıcı tarafından desteklenmiyor."],["Dosyalar sorunsuz oynatılmıyor","USB depolama aygıtının transfer performansı TV'ye veri transfer hızını sınırlayabilir."]];
var contentSpan7_4Array = [["Yazılım güncellemesi yaparken nelere dikkat etmeliyim?","Yazılım güncellemesi sırasında güç kesilmemeli.","Yazılım güncellemesi sırasında kumandanızda hiçbir işlem yapmayın.","Sabırlı olun çünkü yazılım güncelleme işlemi biraz zaman alabilir."],["Yazılım güncellemesinden sonra TV arabiriminde belirgin değişiklikler olmadı.","Bazı durumlarda SW güncellemesi güncelleme ve yeni işlevler eklemenin yanı sıra arabirimde belirgin değişiklikler olmadan TV setinizin performansını artırabilir. Ayrıca, TV arabirimi bazen dokunulmadan kalabilir."]];
var termsTitle = "Şartlar ve koşullar";
var termsConditions = ["TCL (Yasal Uyarı) - Bu TV setinin üreticisi. ","Akıllı TV özelliğini içeren ürünlerin çeşitli kapasitelerinden, hizmetlerden ve aynı zamanda kullanılabilir içerikteki kısıtlamadan dolayı belirli özellikler, uygulamalar ve hizmetler her cihazda veya bölgede kullanılamayabilir. AkıllıTV’de bulunan bazı özellikler aynı zamanda ilave çevresel aygırlar veya ayrı olarak satılan üyelik ücretleri gerektirebilir. Belirli cihaz bilgileri ve içerik kullanılabilirliği hakkında daha fazla bilgi için lütfen web sitemsizi ziyaret edin. AkıllıTV üzerinde alınan hizmetler ve içerik kullanılabilirliği önceden haber verilmeksizin zaman zaman değişikliğe tabidir. \n   Bu cihaz üzerinden ulaşılabilir olan tüm içerik ve hizmetler üçüncü kişilere aittir ve telif hakkı, patent, tescilli marka ve/veya diğer fikri mülkiyet kanunları tarafından korunurlar. Bu tip içerik ve hizmetler, kişisel ticari olmayan kullanımınız için ayrı olarak sağlanmaktadır. Hiç bir içerik veya hizmeti, içerik sahibi veya hizmet sağlayıcısı tarafından yetki verilmemiş şekilde kullanamazsanız. İlgili içerik sahibi veya hizmet sağlayıcısı tarafından açıkça yetki verilmedikçe, öncekini sınırlamaksızın bu cihaz aracılığıyla görüntülenen hiçbir içerik veya hizmeti hiçbir şekilde ve ortamda değiştiremez, kopyalayamaz, yeniden yayınlayamaz, internete yükleyemez, gönderemez, aktaramaz, çevirisini yapamaz, satamaz, türemiş çalışmalar oluşturamaz, faydalanamaz veya dağıtamazsınız. \n   CİHAZ KULLANIM RİSKİNİN VE TATMİN EDİCİ KALİTE, PERFORMANS VE DOĞRULUK GİBİ TÜM RİSKİN SİZE AİT OLDUĞUNU AÇIKÇA KABUL ETMİŞ VE ONAYLAMIŞ OLURSUNUZ. CİHAZ VE TÜM ÜÇÜNCÜ ŞAHIS İÇERİK VE, AÇIKÇA İMA YOLUYLA HERHANGİ BİR ÇEŞİT GARANTİ OLMAKSIZIN OLDUĞU GİBİ SAĞLANIR. TCL, TİCARETE ELVERİŞLİLİK, TATMİN EDİCİ KALİTE, BELİRLİ AMACA UYGUNLUK, DOĞRULUK, MÜDAHALESİZ KULLANIM VE ÜÇÜNCÜ TARAF HAKLARININ İHLALİ İLE SINIRLI OLMAMAK ÜZERE AÇIKÇA VEYA İMA YOLUYLA CİHAZ VE TÜM İÇERİK VE SERVİS İLE İLGİLİ TÜM GARANTİLERİ VE ŞARTLARI AÇIKÇA REDDEDER. TCL, BU CİHAZ VASITASIYLA SAĞLANAN HİÇBİR İÇREK VEYA HİZMETİN DOĞRULUĞUNU, GEÇERLİLİĞİNİ, ZAMANLAMASINI, KANUNA UYGUNLUĞUNU VEYA BÜTÜNLÜĞÜNÜ GARANTİ EDEMEZ VE CİHAZIN, İÇERİK VEYA HİZMETLERİN İHTİYAÇLARINIZI KARŞILAYACAĞINA VEYA CİHAZIN ÇALIŞMASININ YA DA HİZMETLERİN KESİLMEYECEĞİNE VEYA HATASIZ OLACAĞINA GARANTİ VERMEZ. İHMAL DAHİL HİÇBİR KOŞULDA TCL, SÖZLEŞMEDE YA DA FİİLİYATTA, HİÇBİR DOĞRUDAN, DOLAYLI, TESADÜFİ, ÖZEL VEYA BAĞLI OLAN HASARLAR, AVUKAT GİDERLERİ, HARCAMALAR VEYA İÇERDİĞİ BİLGİLERDEN YA DA CİHAZIN VEYA TARAFINIZDA ERİŞİNLE İÇERİK YA DA HİZMETİN KULLANIMINDAN VEYA ÜÇÜNCÜ TARAFTAN KAYNAKLANACAK DİĞER HASARLARDAN BU TİP HASARLARIN OLASILIĞI HAKKINDA BİLGİLENDİRİLSE DAHİ SORUMLU OLMAYACAKTIR. \n   Üçüncü taraf hizmetleri değiştirilebilir, bekletilebilir, kaldırılabilir, sonlandırılabilir veya kesilebilir ya da bildirilmeksizin herhangi bir zamanda erişim engellenebilir ve TCL (Thomson markalı TV’nin üreticisi) herhangi bir zaman diliminde herhangi bir içeriğin ya da hizmetin kullanılabilir olacağını beyan edemez veya garanti edemez. İçerik ve hizmetler, üzerlerinde TCL’nin kontrolünün olmadığı ağlar ve aktarma tesisleri vasıtasıyla üçüncü taraflarca aktarılır. Bu feragatnamenin genel çerçevesini kısıtlamadan TCL, açıkça bu cihaz tarafından kullanılabilir yapılan bir içerik veya hizmetin değiştirilmesi, kesilmesi, devre dışı bırakılması, kaldırılması veya askıya alınması tüm sorumluluğu ve yükümlülüğü reddeder. TCL, her durumda bildirmeksizin ve sorumluluk almadan belirli servis veya hizmetlerin kullanılması veya bunlara ulaşılması hakkında sınırlamalar koyabilir. TCL, içerik ve hizmetlerle ilgili müşteri hizmetlerinden sorumlu ve yükümlü değildir. İçerik ve hizmetlerle ilgili tüm soru ve istekler doğrudan ilgili içerik ve hizmet sağlayıcılarına yöneltilmelidir."];

var noChannelListRemind        = ["Kanal bulunamadı. Kanal listesi kanal taramasından sonra kullanılabilir.","Kanal Tarama"];
var closeSubtitleRemind   = "Altyazı kapalıyken işlev kullanılabilir olacaktır. Şimdi ayarlamak istiyor musunuz?";

var estickerTitles = ["Son derece gerçekçi görüntüler","Canlı renkler","Üstün gerçek hareketler","Dinamik görüntü kalitesi","SR UHD yükseltme","3B dünya deneyimi","Daha hızlı performans","Gelecek 4K içerik","Çevrimiçi dünyanın keyfini çıkarın","Ekstra içeriklere erişim","Entegre dijital ayarlayıcılar","Tüm aygıtlarına bağlantı","Çeşitli 4K kaynaklar","USB içeriği","Ultra hızlı WIFI","TV'de mobil içeriği","Mobil cihaz içeriği","Yerel içerik","DivX tarafından onaylanmış","Kusursuz resim","Kanal Hazır","TDT Premium"];
var estickerDescriptions = ["UHD ekranda Full HD detaylarını dörde katlayan görüntüler sayesinde mükemmel seyir deneyimi","Geniş renk yelpazesi canlı kırmızılar ve zümrüt yeşilleri ile her sahnede ayrı duygu yaşatır","4K çerçeve enterpolasyonu ve arka aydınlatma hareket bulanıklığı sorunlarıyla baş eder","Orijinal görüntünün canlılığı harikulade kontrast ile gerçek dinamik ifadeler oluşturmak için geliştirilmiştir.","Süper Çözünürlük teknolojisi sayesinde eskisine göre daha etkileyici TV şovları ve Blu-Ray disklerin keyfini çıkarın","3B TV ready deneyimini yaşayın ve çeşitli 3B içerikleri izleyin","Sorunsuz etkileşim, gelişmiş performans içn Dört Çekirdek ile daha keyifli eğlence deneyimi","Gelecek 4K video dağıtım standardı için HEVC (H.265) kodek desteği","Çevrimiçi uygulamalar, VOD hizmetleri, catch-up TV'ler ve internet web taraması zenginliği","En sevdiğiniz yayıncıların ek hizmetleri ve içeriklerinden daha fazlasını keşfedin","Ek set üstü kutusu olmadan yüksek netlikte TV kanallarına erişin","Evinizden birçok dijital kaynağa kolayca bağlanın","Gelecek için TV ready özelliği, HDCP 2.2 ile HDMI 2.0 üzerinden 4K 50/60Hz oynatabilme","USB sürücüsü, HDD veya kameradaki video veya fotoğraf içeriğini 4K çözünürlüklü büyük ekranda doğrudan görüntüleme","Rakipsiz internet erişim hızı sunan yeni nesil 2x2 MIMO ve AC standardı","Ekran aynalama teknolojisi sayesinde mobil cihazlarınızdaki fotoğraflar, videolar ve uygulamaları büyük ekranda görüntülemenin keyfini çıkarın","Akıllı telefon veya tabletteki fotoğraflar, videolar, uygulamalar büyük ekranda görüntülenebilir ","Yerel ağa bağlı cihazlardaki fotoğraflar ve videolar gibi yerel içerikleri büyük ekranda görüntüleyin","DivX korumalı kiralık veya satın alınmış filmleri izleyin","Ultra dar çerçeve ve süper ince tasarım","Canal+ tarafından test edilmiş ve onaylanmış","TDT Premium tarafından test edilmiş ve onaylanmış"];							

var eManualTextArray = ["E-Kılavuz","Tüm grafikler yalnızca temsili amaçlıdır."];
var frontPanelRemind = "Ön panel kilitli.";
var eRPRemind		 = "Alışveriş modu ERP talebini karşılayamıyor. Emin misiniz ?";	
var noRelatedChannel = "İlgili kanal yok";
var option0624Name          = ["BOP","BFS","Etkinlikten Etkinliğe","GetUserID","BGM","Reset all","Alışverişi sıfırla","NRM","DVB-T2 ve Ülke Seçimi,","HbbTV modu"];
var DVBT2AndChoice = ["Açık","Ülkeye göre","Kapalı"];
var hbbtvServiceRemind = "HbbTV hizmeti çok yakında.";
var insertWord = "Ekle";		
var viewDetail = "Detayları gör";							
							

var remindOAD  = "Yazılım güncellemesi. Yeni bir önerilen yazılım güncellemesi başka bir kanalda bulunmaktadır. Bunu indirmeyi kabul ederseniz, kanalı otomatik olarak değiştirebilir. Bunu şimdi yapmak ister misiniz?";

var LEDStatus = ["Yanıp sönme", "Normal","Kapalı"];
var netFlixRemind = "Bu fonksiyon, siz tekrar oturum açana kadar Netflix hizmetlerine olan erişimi keser.";
var ESNExplanation = "Elektronik Seri Numarası";
var resetShopRemind = "Sistem şimdi sıfırlanıyor, lütfen televizyonunuzu kapatmayın";
var initialSelectOption = "Lütfen bir seçenek seçin:";
var databaseRemind   = "Sistem, bilinmeyen bazı nedenlerden dolayı veri tabanının zarar gördüğünü belirledi ve otomatik olarak onardı, devam etmek için Tamam’a basın";
var Deactivation = "Etkisizleştirme";
var oadFutureRemind = "Yazılım güncellemesi.\n Yeni bir önerilen yazılım %s kısmında bulunmaktadır. Güncelleme biraz sürebilir ve ekran kararabilir. Güncelleme sırasında alıcıyı kapatmayın. Bu güncellemeyi kabul ediyorsanız, lütfen alıcıyı programlanan zamanda açık bırakın. Bu güncellemeyi almak istiyor musunuz?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Ses çıkışı";
var bt_soundOutPutTV = "TV Hoparlörü";
var bt_soundOutPutBT = "Bluetooth Cihazı";
var bt_soundOutPutBT_TV = "Bluetooth ve TV";
var bt_refreshBarName = "Cihazlar";
var bt_settingTips_On = "Bluetooth işlevini açın ve cihazları arayın";
var bt_settingTips_Finding = "Uygun cihazlar bulunuyor…";
var bt_settingTips_NoDevice = "Uygun cihaz yok.";
var bt_deviceList_State_NoConnect = "Bağlı değil";
var bt_deviceList_State_Connecting = "Bağlanıyor…";
var bt_deviceList_State_Connected = "Bağlandı";
var bt_deviceList_State_Paired = "Eşleşti";
var bt_deviceList_Conncect_Failed_Tips1 = "Bağlantı başarısız.";
var bt_deviceList_Conncect_Failed_Tips2 = "XXX Bluetooth işlevinin Açık olduğunu onaylayın";
var bt_deviceList_Conncect_Success = "Bluetooth cihaza bağlandı";
var bt_deviceList_Disconncect_Success = " Bluetooth cihaz bağlantısı kesildi.";
var bt_deviceList_Disconnect = "XXX bağlantısını kesmek istediğinizden emin misiniz?";
var bt_tipsTitle = "İpucu";
var bt_bluetooth_Pairing_Title = "Bluetooth eşleme";
var bt_bluetooth_Input_Pin = "Lütfen PIN girin:";
var bt_bluetooth_Output_Pin_Tip = "Klavyeyle PIN XXXX girin";
var bt_bluetooth_Pin_Wrong_Tip = "Yanlış PIN";
var bt_bluetooth_Remove_Pair_Title = "Sorgula";
var bt_bluetooth_Remove_Pair_Ask = "Bu cihaz unutulsun mu?";
							
var audioDescriptionName = ["Ses Açıklaması","Hoparlör","Hoparlör ses seviyesi","Kulaklık","Kulaklık ses seviyesi","AD ses seviyesi","BT cihazı","BT cihazı ses seviyesi","Amplifikatör","Hoparlör"];
var audioDescriptionOptions = ["Kapalı","Normal","Ses Açıklaması"];
var volumeOffRemind = 'Lütfen XXX öğesini Ayarlar menüsünde “Açık” olarak ayarlayın.';
var switchSourceRemind   = " takıldı. Şimdi değiştirmek istiyor musunuz?";
var footballModeName = "Spor modu";
var resetStadium = "Stadyum";							

var atvSearchMenu = "ATV manual search";
var dtvSearchMenu = "DTV manual search";
var settingNoticeSourceName ="Otomatik kaynak";

var smartTVOptions		= ["Smart TV portalı","HbbTV","Paylaş ve Gör","Wifi ekranı","Şartlar ve koşullar",
    "Ağ tabanlı bekleme","smart TV’yi sıfırla","Cookie policy","Gizlilik politikası","Veri Sime"];
var supportOptions		= ["Uzaktan tanılama","İletişim"];
var ClosedcaptionName ="Closed caption";
var sysCCOptions	= ["CC mode","Analog CC","Digital CC","Superimpose","Closed caption"];							
var sysCCmodeOption = ["Off", "On", "On When Mute"];
var sysanalogCCOption = ["Off", "CC1", "CC2", "CC3", "CC4", "Text1", "Text2", "Text3", "Text4"];
var sysdigitalCCOption = ["Off", "Service 1", "Service 2", "Service 3", "Service 4", "Service 5", "Service 6", "Service 7", "Service 8"];
var syssuperimposeOption = ["Off", "Service 1", "Service 2", "Service 3", "Service 4", "Service 5", "Service 6", "Service 7", "Service 8"];
var sysCCOPtionItems = ["CC Option","Mode","Font Style","Font Size","Font Edge Style","Font Edge Color","FG Color","BG Color","FG Opacity","BG Opacity"];
var sysCCOtionMode = ["Custom","Default"];
var sysCCOptionFontStyle = ["Default","Font1","Font2","Font3","Font4","Font5","Font6","Font7"];
var sysCCOptionFontSize = ["Default","Large","Small","Normal"];
var sysCCOptionFontEdgeStyle = ["Default","None","Raised","Depressed","Left Shadow","Right Shadow"];
var sysCCOptionFontColor = ["Default","Black","White","Red","Green","Blue","Yellow","Magenta","Cyan"];
var sysCCOptionFontOpacity = ["Default","Solid","Flashing","Translucent","Transparent"];
							
var tvDoctor=["Uzaktan tanılama 2.0",
"Uygulama sadece Smart TV’nizde tanılayıcı kontroller çalıştırmanız ve ürün deneyimini geliştirmeniz için çalışır. TV kullanma verisi ve model bilgisi, sunucuya yüklenen ve TV sorunlarını çözmek için kullanılan bu Uygulama tarafından toplanacaktır. Kişisel bilgilerinize erişilemez. Lütfen TV’nizin internete düzgün şekilde bağlı olduğundan emin olun.",
"Yakından tanılama",
"Tanılama başladığında lütfen destek mühendisimizden gelen talimatı takip edin.",
"Uzaktan tanılama",
"Kullanmadan önce lütfen destek mühendisimizin çevrimiçi olduğundan emin olun.",
"Seri numarası:",
"&nbsp;&nbsp;&nbsp;&nbsp;Kullanıcı Kimliği:",
"Bağlanıyor…",
"Tanılama devam ediyor. Lütfen ağın düzgün şekilde bağlı olmasını sağlayın.",
"İnternete ulaşılamıyor, lütfen ağ bağlantısını kontrol edin.",
"Çıkış"
];
var contactUsOption = ["İletişim",
    "Bu cihazı kullanmakta sorunlar yaşıyorsanız lütfen TCL ile iletişime geçin.",
    "İletişim",
    "Web sitesi:",
    "Çağrı merkezi numarası:","Ürün bilgileri","Model Adı:",
    "Yazılım Sürümü:","","Kullanıcı Kimliği:","Proje Kodu:",
    "İstemci tipi:","Kablosuz MAC adresi:","Kablolu MAC adresi:","Netflix ESN:","Cep telefonunuzdaki bilgileri taratın.",
    " adresini ziyaret ederek ülkenizi seçin."];


//本地launcher的翻译，与服务器无关，只用于本地launcher
var homePageWords = ["Geçmiş", "Ara"];//home页的翻译
var titlePageWords = ["Giriş", "Videolar","TV","Uygulamalar"];//index的标题翻译
var videosPageWords = ["Sinema", "Sport","Müzik","Popüler","Oyun","Eğitim","Haberler"];//videos页的内容翻译

//同时应用于本地和服务器
var statusPageWords = ["USB","Ayarlar","WiFi","Kablolu"];//状态栏的翻译

//二级页面的翻译
var searchPageWords = ["Ara", "Popüler Aramalar:","Gösteriler, Filmler, İnsan ..."];
var resultSearchPageWords = [" ", "ile ilgili sonuçlar","Lütfen başka anahtar sözcük kullanın.","Üzgünüz, ","ile ilgili video bulunamadı."];
var historyPageWords = ["Geçmiş", 'Geçmişi silmek için','düğmesine basın',"Birini sil","Tümünü sil","Dün","Bugün"," Henüz video izlemediniz.","İzleme geçmişi başarıyla silindi!"];
var channelPageWords = ["Üzgünüz henüz video bulunamadı."];


//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9",
                       	   "Zoom-","0","Zoom+",
                       	   "Çıkış","0","",
                       	   "Listele","0","Metin",
                       	   "Rehber","Gir","Çıkış",
                       	   "Menü","Altyazı","Bilgi",
                       	   "Durdur",
                       	   "Bilgi","Menü","Çıkış",
                       	   "Çıkış"
                       	   ];	

//added for LA sports mode
var sportsModeInitReminds= ["Bu sihirbaz, Spor Modunun USB sürücüsünü kurmak için kullanılır. Lütfen kurulum modunu seçin.",
						 "Lütfen Spor Modu için dosya boyutunu seçin.",
						 "Spor Modu dosyası oluşturuluyor",
						 "USB sürücü hızı Spor Modu özelliği için çok yavaş (%f MB/san.'den yavaş)!",
						 "USB sürücüsü, Spor Modu için hazır. Ancak daha iyi performans için değiştirmenizi (%f MB/san. daha fazla bir hıza) öneririz.",
						 "USB sürücüsü, Spor Modu için hazır."];

var sportsModeExtra	= ["Spor Modunu durdurarak kanalı değiştirmek istiyor musunuz?",
						"Spor Modunu durdurarak kaynağı, SCART girişine bağlı olan cihaz olarak değiştirmek istiyor musunuz?",
						"Spor Modunu durdurarak kaynağı, bir HDMI girişine bağlı olan cihaz olarak değiştirmek istiyor musunuz?",
						"Spor Modu, Şifreli Kanalda desteklenmez.",
						"Spor Modunu durdurarak EPG'ye girmek istiyor musunuz?",
						"Spor Modunu durdurarak Medyaya girmek istiyor musunuz?",
						"Spor Modunu durdurarak giriş kaynağını değiştirmek istiyor musunuz?",
						"Televizyon mevcut Spor Modunu sonlandıracak. Çıkmak istiyor musunuz?"];
var remoteControlNote = "- Cihazla birlikte verilen uzaktan kumanda cihazı, cihazın modeline bağlı olarak değişiklik gösterebilir";


var textArray = ["Volume","Channel","Source","Switch/Power","Guide","seconds to Power OFF"];
var guideArray = ["VOL-","VOL+","CH-","CH+","Pre","Next"];
var favChannelListRemind = ["Sık kullanılan kanallarınız yok mu? Lütfen diğer listeye gidin ve sık kullanılan kanalları eklemek için “Yeşil Tuş”u kullanın."];

var proxySetting = ["Proxy Ayarları","Port"];
var powerOffShop = ["Mağaza modunu kullanmanız önerilir, kullanacak mısınız?"];
var tcastTextPageWords = ["Bolca video, zengin uygulamalar","TV uzaktan kumandası, parmaklarınızın ucunda","Harika içerikler, büyük ekranda paylaşım yapın"];
var tcastOtherWords = ["QR KODUNU taratın ve T-CAST'i indirin","Ağ, TV'ye bağlandı","TV adı","T-Cast"];
var hbbtvWords = ["Hbbtv ayarı","HbbTV","Çerezler","Üçüncü Taraf Çerezleri","Aygıt Kimliği","takip"];
var hbbtvTrackingWords = ["YES","NO","Önemsemeyin"];
var eStickerTipWords = ["Depolama birimi boyutu 400 M’nin altında, Daha fazla alan elde etmek için Demo modundaki videoları silmek ister misiniz?"];
var delEstickerVideoRemid = ["Video başarıyla silindi."];
var selectSatRemind = "20 uydudan fazla seçemezsiniz!";
var cookiePolicyTitle = "Cookie Policy – Online Smart TV Services";
var cookiePolicyConditions = ["Company respects your privacy when using Smart TVs manufactured and Services provided by Company. Cookies are used by many websites and other Internet services and your Smart TV will accept, store and transmit cookies to ensure that these websites and services operate properly. Company also uses cookies when providing you Services. In this Cookie Policy Company describes which cookies are set on your Smart TV and how you can manage them.\nPlease note that all personal data that Company collects and/or processes through or with the help of cookies is subject to the Privacy Policy and you should read the Cookie Policy together with the Privacy Policy.\n1. What is a cookie?\nCookies are small text files that may be placed on your Smart TV. When a website or the red-button service of a TV station is accessed, the website or service may store a cookie in the Smart TV. During subsequent accesses, a cookie that is placed on your Smart TV will send information to the party that has placed the cookie. Cookies are extremely common and used on a number of websites and services. Each cookie will typically contain the name of the domain from which the cookie has come, the \"lifetime\" of the cookie, and a value (usually a unique number). For a more thorough explanation of what cookies are and how they operate, please visit www.allaboutcookies.org.\nCookies can be categorized into functional cookies and non-functional cookies. Functional cookies are cookies that are strictly required for the purpose of providing you the Smart TV services and for websites and other services to provide the right content to the Smart TV. Non-functional cookies are all other cookies.\nThis Cookie Policy relates to cookies that are placed by us, as well as advertising cookies that may be placed by third parties through our services on your Smart TV. This Cookie Policy does not relate to cookies that may be placed when you use the Smart TV services to access third party websites, services or applications. For these cookies we refer you to the respective cookie policies of such third parties. However, this Cookie Policy describes how to delete such cookies (see section 4 below).\n2. Which non-functional cookies do we use?\nAdvertising: In-video and display advertisements may be served to your Smart TV when using Smart TV services. These advertisements can be served by us or by third parties via, or as coordinated by, our advertising server, which performs a central coordinating role in relation to the serving of such advertisements. Our advertising server or a third party advertising server will set a cookie on your Smart TV. By means of this cookie an advertising server will register whether an advertisement has been served to your Smart TV or whether someone using your Smart TV has clicked on an advertisement. We use the information saved in such advertising cookie to remember which advertisements have been served on your Smart TV so we can make sure that not too many of the same advertisements are served on any particular Smart TV, and that we are able to settle our commercial arrangements with our advertising partners. We shall not use this information to serve targeted advertisements. Furthermore, third parties may use our advertising system to serve advertisements to your Smart TV and place cookies on your Smart TV when such advertisements are served. \nThese cookies contain, among others, information about the served advertisements, information on in which application or domain such advertisements are served, and your IP address. This is done to remember how often a particular advertisement is shown, and in order to prevent the same advertisement being shown too often. External third party advertisers that may place advertisements may also use cookies to track your activity over multiple websites, and to provide advertisements that correspond to your personal preferences.\n3. Third party websites\nWhen you visit websites or services of third parties via the Smart TV services of your Smart TV, it is possible that such websites or services place cookies on your Smart TV, and that such websites track and store your interactions on such websites. We do not request or encourage such activities and will not use such information. Please refer to the respective cookie and privacy policies of such websites and services for more information about such parties’ use of such cookies.\n4. Cookie deletion\nYour user interface of your Smart TV allows you to delete all cookies and other local browser storage from the Smart TV. It is highly advisable to remove all cookies and locally stored settings prior to selling or giving away your Smart TV.\n5. Contacting us\nIf you have any questions or comments regarding our Cookie Policy or our practice of using cookies you can send us an e-mail via FRsupport@tcl.com.\nVersion: 1.0\n"];
var privacyPolicyTitle = "Privacy Policy – Online Smart TV Services";
var privacyPolicyConditions = ["We respect your privacy when handling your personal data. This Privacy Policy describes the entity responsible for the collection, processing and use of personal data we collect from you in connection with the use of our Smart TV services (\"Services\"), what types of personal data we collect about you, what we do with it, and your rights in relation to our use of the personal data. \n1. Data controller\nThe collection, processing and use of the personal data collected from you when using the Services is conducted by Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, China (\"Company\"). Please note, however, that we are not responsible for all data processing activities set out below. We have nevertheless included a description of the respective activities in our Privacy Policy because this processing is connected with your use of the Smart TV.\n2. Data processing consent\nSome of the collection, processing and/or use of your personal data require your consent. \nIf you have consented to the use of your personal data for the purpose of improving the Services, your consent had the following wording:\n\"I consent to the collection, processing and use of my device start time, DTV channel list, favorite channels list, visit time, and viewed channels for the purposes of analyzing user habits to improve the Services and/or to analyze how many online users Company has per day/month/year and to the sharing of this information with TV stations.\"\nIf you have consented to the use of your personal data for advertisements that are tailored to your interests, your consent had the following wording:\n\"I consent to the collection, processing and use of my client type and country for the purpose of receiving appropriate advertisements.\"\nConsent is voluntary and you will still be able to use the Services if you do not consent. However, you may see advertisements and other content that is not tailored to your preferences. Irrespective of your consent Company reserves the right to collect, process and/or use the above data to the extent permitted by applicable law.\nYou may withdraw your consent to any of the above with effect for the future at any time. You may object to a use of your personal data for marketing, market or opinion research and to the tailoring of the Services to your needs. In order to withdraw your consent and/or to object, please change the privacy settings of your Smart TV accordingly.\n3. Personal data collected\nIrrespective of your consent, Company collects, processes, stores and uses the following data categories:\nDevice-ID: Your Smart TV stores a fixed unique number that enables us to identify and authenticate the Smart TV when you use the Services. This number is called the Device-ID. The Device-ID will be provided to our service partner to provide you the Services. We also provide the Device-ID to selected content partners for authentication purposes. These content partners use the Device-ID to authenticate your Smart TV for access to services provided by a content partner.\nIP address and MAC address: Your Smart TV will be assigned an IP address when accessing the Internet. This IP address will be transmitted to us and processed by us each time the Smart TV requests information or data from the Services. If your Smart TV is behind a router (e.g. in a local home network or local WLAN), we may collect and process the IP address of such router. The MAC address is a unique number assigned to each network interface of your Smart TV. The MAC address will also be collected and processed by us when the Smart TV requests information or data from the Services.\nService request data: Whenever you connect your Smart TV to the Internet and turn on the Smart TV, it will automatically connect to the Services, which are managed by our service partner. Your Smart TV will then be authenticated as being certified for access to the Services. For authentication purposes, the Services store one or more unique numeric identifiers related to your Smart TV. When connecting to the Service, the Smart TV will transmit the IP address it has been assigned and will transmit device specific information (Smart TV model, software version) to look whether software updates are available.\nService settings: As part of the regular functionality of the Services you can manually arrange the order in which apps are displayed by the Services. Our service partner will store your arrangement and other preferences you may set during using the Services. This information will be linked to the Device-ID.\nDevice specific information: The Smart TV stores several information about itself and its configuration. This information includes the Smart TV type, the version of the operation system of the Smart TV, its panel resolution, the project ID (i.e. information regarding configuration files), the user agent, browser name, browser version, and the language and country that have been configured in the Smart TV. This information will be used by us and will be provided to our service partner and content partners.\nAdvertising: The Services may serve advertisements. These advertisements are served by us, or by third parties using advertising inventory assigned by us. All advertisements are served by means of, or via, our advertising server, which fulfills a coordinating role for the serving of advertisements. Our advertising server or the third party advertising server may set a cookie on the Smart TV. Please refer to our Cookie Policy for more information about these cookies.\nService and Content Partner traffic: When you use the Services your Smart TV will request data from the Services via the Internet. As part of these requests your IP address as described above and the language and country that has been configured in your Smart TV will be transmitted to our service partner. Our service partner will process the respective data in accordance with its privacy policy.\nSecond screen usage: If you use our second screen application, the controls you activate on the application and the country and language settings, DTV channel list, favorite channels lists, schedule lists, Device-ID, current channel, protocol version and IP address of your Smart TV will be collected and processed by us on our servers. Our servers will then control your Smart TV as directed by you in the second screen app.\nHbbTV - \"Red Button\": TV stations (\"Stations\") may send additional information with their TV signal. If the Smart TV receives specific instructions in such additional information and if it is connected to the Internet, the Smart TV will download a picture or small page from the Station's website and display it together with the information to press the \"Red Button\" on your remote control if you want to use additional services provided by the Station. This happens each time you zap. Downloading the picture from the Station's website the Smart TV will transmit some personal data, i.e. the DTV channel list, current channel, event information table, TV time, IP address of your Smart TV and cookies stored on the Smart TV (if any). The Station is responsible for the collection, processing and/or use of this data. Moreover, if you use additional services offered by a Station through the Red Button, the Station may collect other personal data about you (e.g. which on-demand videos you watch, the news you read, etc.).\n4. Purposes for which we process and/or use your personal data\nWe process collected data for the following purposes:\n• Providing the Services: We use the IP address and MAC address, Device-ID, the version of the operation system of the Smart TV, client type of your Smart TV and its panel resolution, the project ID (i.e. information regarding configuration files), your DTV channel list, viewed channels, time zone, country and language settings to provide your Smart TV with access to the Services and services provided by content partners. Purposes include (but are not limited to) authentication, providing location based services to you (e.g. weather forecasts); abuse handling, management of security incidents, monitoring of availability of the Services, and providing backup services of user preferences.\n• Authentication: We use the Device-ID and MAC address for authentication purposes.\n• Software updates: Each time your Smart TV is powered on, it will provide us with the IP address, Device-ID, software version, client type of your Smart TV, project ID (i.e. configuration files), user ID, serial number to offer you and provide you with appropriate software updates. \n• Improving the Services: We use aggregated and anonymized usage data (i.e. data about your interaction with the Services) to improve the user experience of the Services.\n• Serving advertisements: We use the information in advertising cookies to allow the system to log which advertisements have been shown on your Smart TV in order to make sure that you do not receive too many similar advertisements, and we are able to settle our commercial arrangements with our advertising partners. External advertisers that serve advertisements on the Services or the content partner websites after coordination by our advertising server, may also use cookies to track you over multiple websites, and to serve advertisements that reflect your personal preferences.\n• Optimizing advertisements: We use data related to advertising views and clicks on advertisements to optimize the advertising experience of consumers in the Service.\n• Discounts: We provide the Device-ID to selected content partners to enable these partners to identify to what extent they can provide you with free access to Video on Demand titles in their collection.\n• Law enforcement: We may be required to provide data to competent law enforcement authorities or courts of justice. If we do so, we will only do so subject to a binding legal instrument like a warrant or a judicial order, which requires us to cooperate with the relevant authorities.\nUse of the Services is possible by using pseudonyms, unless specific services require that you provide your name and/or email address.\n5. Categories of recipients\nCompany shares your personal data collected during your use of the Services only with the following third parties:\n• With third party providers of Smart TV services if you request such services (e.g. if you start the Netflix application on your Smart TV we may share your IP address, MAC address, software version and TV model name with Netflix).\n• With third party content partners if you request certain content provided by such content partners (e.g. in order to provide you with the GoLive IP TV service, we may share your TV client type, IP address and language settings with the legal entity providing the GoLive service).\n• To the extent you have consented to the sharing of specific personal data with third parties above, Company will share your personal data with such third parties.\n• With outsourcing service providers as data processors assisting Company with providing the Services.\nCompany shares your personal data with other third parties only if Company is obligated to do so on the basis of legal requirements (e.g. to courts or criminal prosecution authorities), you have consented to the respective sharing or the sharing is otherwise lawful under applicable law.\n6. Countries in which your data will be processed\nCompany and/or some of the recipients of your personal data listed above may be located outside of the European Economic Area (i.e. in the following countries: Peoples Republic of China, United States of America). Therefore, your personal data may be processed in countries which are not recognized as providing an adequate level of protection of personal data in accordance with Directive 95/46/EC of the European Parliament and of the Council of 24 October 1995 on the protection of individuals with regard to the processing of personal data and on the free movement of such data.\n7. Your rights\nYou may contact Company in order to receive information about your personal data processed by Company and/or to exercise your statutory rights regarding access, rectification, deletion and blocking of your personal data; and/or to object the processing of your personal data for purposes of marketing and/or market or opinion research.\n8. Changes to the Privacy Policy\nTo improve our Services we may require amendments to this Privacy Policy – e.g. by the implementation of new technologies or the introduction of new services. We reserve the right to change or supplement this Privacy Policy at any time.\n9. Contact information\nIf you have any questions about the Privacy Policy or would like to complain about our handling of your personal data, please contact us by using one of the following contact details:\nEmail: FRsupport@tcl.com\nVersion: 1.0\n"];
var privacyPolicyTerms = [
    "Akıllı TV hizmetini etkinleştir",
    "Aygıtımın başlatma zamanı, DTV kanal listesi, sık kullanılan kanallar listesi, ziyaret zamanı ve görüntülenen kanallarının, hizmetleri iyileştirme ve TCL'nin günlük/aylık/yıllık kaç çevrimiçi kullanıcıya sahip olduğunu analiz etme amacıyla işlenmesine, kullanılmasına ve bu bilgilerin TV istasyonları ile paylaşılmasına izin veriyorum.",
    "Öneri hizmetini etkinleştir.",
    "Mobil aygıtlar için ikinci ekran uygulamasını etkinleştir",
    "Otomatik yazılım güncellemelerini etkinleştir.",
    "FreeviewPlay hizmetini etkinleştir"
];
var privacyPolicyTips = [
    "Tüm Akıllı TV hizmetleri devre dışı kalacak.",
    "Dahili kanal arayıcı kullanıldığında TV kanalları tarafından sağlanan HbbTV hizmeti devre dışı kalır.",
    "İçerik ve TV programı öneri hizmeti devre dışı kalır.",
    "İkinci ekran uygulaması devre dışı kalır.",
    "TV, yazılım güncellemelerini ve yeni fonksiyonları otomatik olarak kontrol etmez.",
    "FreeviewPlay içeriği devre dışı kalır."
];
var privacyPolicyRemind = "Lütfen Ayarlarda ilgili işaret kutusunu işaretleyin.";
var set = "Ayarla";
var copyShopDemoTips = ["USB’ye bağlanıldı, videoyu flash belleğe kaydetmek istiyor musunuz?","Videoyu flash belleğe kaydet","Video başarılı şekilde kaydedildi!","Video kopyalama hatası!"];
var dataDeletionWords = ["Arka uç sunucularda Akıllı TV hizmeti verilerinizi silin.","Notlar: Akıllı TV’nizin kullanıcısıyla ilişkili veri, bu ögeyi işaretlemenizden sonraki bir ay içerisinde silinecek. Lütfen silme işleminin TV’nizde kayıtlı bulunan yerel bilgiyi etkilemeyeceğini unutmayın.","Artık Akıllı TV sunucusuna veri raporu gönderme.","Notlar:  Akıllı TV hizmetlerinin kullanımına ilişkin verileriniz, bu ögeyi işaretlemenizden sonra sunucuya aktarılmayacak. TV’niz önerilen hizmetleri bundan sonra almayacak.","Daha fazla bilgi almak için lütfen www.tcl.eu web sitesini ziyaret edin."];
var miracastWords = ["Kablosuz bağlantı","Android telefonu TV\\'ye yansıtın","Bağlanmak için tıklayın","Bu fonksiyon sadece android telefonda kullanılabilir"];
var miracastTips = ["Bağlanma adımları","Sistem ayarlarını açın","Daha fazla bağlanma yolları \n / Diğer kablosuz bağlantılar","Kablosuz görüntüyü seçin","Bağlanmak için tıklayın \n bulunması bekleniyor"];
var termsAndConditions = ["\nThe contents and services (collectively the \"Licensed Application\") made available to you through this TV set (this \"Device\") are licensed, not sold, to you for use only under these terms and conditions. The providers of the Licensed Application (each an \"Application Provider\") reserve all rights not expressly granted to you.\n\n1.Scope of License\n\nThe license granted to you for a Licensed Application by the relevant Application Provider is limited to a non-transferable license to use the Licensed Application on the Device that you own or control. You may not distribute or make the Licensed Application available over a network where it could be used by multiple devices at the same time. You may not rent, lease, lend, sell, redistribute or sublicense the Licensed Application. \n\nAll Licensed Applications and all contents included therein that are accessible through this Device belong to the Application Provider and are protected by applicable intellectual property laws. Unless otherwise permitted by applicable law, you may not modify, copy, decompile, reverse engineer, disassemble, republish, upload, post, transmit, translate, attempt to derive the source code of, create derivative works of, or otherwise exploit any Licensed Application or any updates or any part thereof. If you breach this restriction, you may be subject to prosecution and damage claims. The terms of the license will govern any upgrades provided by the Application Provider that replace and/or supplement the original Licensed Application, unless such upgrade is accompanied by a separate license in which case the terms of that license will govern. You shall be solely responsible for any and all costs (if any) for the upgrading of the Licensed Application.\n\n2.Third-party Materials\n\nThe Licensed Application may enable access to Application Provider’s and third party services and web sites (collectively the \"Services\"). By using any of the Services, you may encounter contents that may be deemed offensive, indecent, or objectionable, which contents may or may not be identified as having explicit language, and that the results of any search or entering of a particular URL may automatically and unintentionally generate links or references to objectionable material. Nevertheless, the manufacturer of this Device (the \"Manufacturer\") and the Application Provider shall not have any liability to you for contents that may be found to be offensive, indecent, or objectionable. \n\nThe Manufacturer shall not be responsible for examining or evaluating the content, accuracy, completeness, timeliness, validity, copyright compliance, legality, quality or any other aspect of such Services. The Manufacturer does not warrant or endorse and shall not assume and shall not have any liability or responsibility to you or any other person for any of the Services. \n\nThe Services may contain proprietary content, information and material (collectively \"Third-party Materials\") that are protected by applicable intellectual property and other laws, and you shall not use such Third-party Materials in any way whatsoever except for permitted use of the Services. Unless otherwise permitted by applicable law, you shall not reproduce, modify, rent, lease, loan, sell, distribute the Third-party Materials or create derivative works thereof in any manner, and you shall not exploit the Services in any unauthorized way whatsoever. You shall not use the Services in any manner to harass, abuse, stalk, threaten, defame or otherwise infringe or violate the rights of any other party, and the Manufacturer shall not in any way be responsible for any such use by you, nor for any harassing, threatening, defamatory, offensive or illegal messages or transmissions that you may receive as a result of using any of the Services. \n\n3.No Warranty\n\nAll Licensed Applications and Services are provided \"as is\" and \"as available\" without warranty of any kind, either express or implied. The Manufacturer expressly disclaims all warranties and conditions with respect to the Licensed Applications and the Services, either express or implied, including but not limited to, warranties of merchantability, of satisfactory quality, of fitness for a particular purpose, of accuracy, of quiet enjoyment, and of non-infringement of third party rights. The Manufacturer does not guarantee the accuracy, validity, timeliness, legality, or completeness of any Licensed Application or Service made available through this Device and does not warrant that the Device, the Licensed Applications or the Services will meet your requirements, or that operation of the Licensed Applications or the Services will be uninterrupted or error-free, or that defects in the Licensed Application or Services will be corrected. Should the Licensed Application or Services prove to be defective, you shall assume the entire cost of all necessary servicing, repair or correction.\n\nThe Licensed Applications and Services may be changed, suspended, removed, terminated or interrupted, or access may be disabled at any time, without notice, and the Manufacturer makes no representation or warranty that any content or service included in the Licensed Applications and Services will remain available for any period of time. Such contents and services are transmitted by third parties by means of networks and transmission facilities over which the Manufacturer has no control. Without limiting the generality of the foregoing, the Manufacturer expressly disclaims any responsibility or liability for any change, interruption, disabling, removal of or suspension of any content or service made available through this Device. The Application Provider and other providers of the Services reserve the right to change, suspend, remove, or disable access to any Licensed Application or Services at any time without notice. The Manufacturer may also impose limits on the use of or access to certain Licensed Applications or Services, in any case and without notice or liability.\n\nThe Manufacturer does not provide customer service related to the Licensed Applications and the Services. Any question or request for service relating to the Licensed Applications and the Services should be made directly to the respective provider.\n\n4.Collection and Use of Information\n\nThe Manufacturer, the Application Providers and the providers of the Services may collect and use technical data and related information, including but not limited to technical information about this Device, system and application software, and peripherals, to facilitate the provision of software updates, product support and other services to you (if any) related to the Device and the Licensed Application. The Manufacturer, the Application Providers and the providers of the Services may use such information, as long as it is in a form that does not personally identify you, to improve its products or to provide services or technologies to you. For more information on the collection and use of information, please visit our privacy policy: http://www.tcl.eu/en/.\n\n5.Unavailability of Certain Features\n\nDue to restrictions of Application Provider, certain features, applications, and services may not be available on this Device (including its peripheral devices) or in all territories. Some features on this Device may also require additional peripheral devices or membership fees that are sold separately.\n\n6.Limitation of Liabilities\n\nTo the extent not prohibited by applicable law, under no circumstances, including negligence, shall the Manufacturer be liable, whether in contract or tort, for any direct, indirect, incidental, special or consequential damages, attorney fees, expenses, or any other damages arising out of, or in connection with, any information contained in, or as a result of the use of the Device, any Licensed Application or any Service by you or any third party, even if advised of the possibility of such damages.\n\nThe Manufacturer shall only be liable for intent and gross negligence."];
var privacyNotice = ["\nWe respect your privacy when handling your personal data. This Privacy Notice describes the entity responsible for the processing of personal data we collect from you in connection with the use of our Smart TV services (\"Services\"), what types of personal data we collect about you, what we do with it, and your rights in relation to our use of the personal data. \n\n1.Data controller and representative in the European Union\n\nThe collection, processing and use of the personal data collected from you when using the Services is conducted by Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, China (\"Company\"). Our contact details as well as the contact details of our representative in the European Union are provided under Section 12 below. Please note, however, that we are not responsible for all data processing activities set out below. We have nevertheless included a description of the respective activities in our Privacy Notice because this processing is connected with your use of the Smart TV.\n\n2.Data processing consent\n\nSome of the data processing activities that we conduct require your consent, e.g. the use of your personal data for the purpose of improving the Services.\n\nConsent is voluntary and you will still be able to use the Services if you do not consent. However, you may see content that is not tailored to your preferences. Irrespective of your consent we reserve the right to process your personal data to the extent permitted by applicable law.\n\nYou may withdraw your consent at any time. The withdrawal of consent shall not affect the lawfulness of processing based on consent before its withdrawal. In order to withdraw your consent and/or to object (c.f. Section 10 and Appendix Your Rights below for your rights to object), please change the privacy settings of your Smart TV accordingly.\n\n3.Specific categories of personal data\n\nWe process in particular the following data categories:\n\nDevice-ID: Your Smart TV stores a fixed unique number that enables us to identify and authenticate the Smart TV when you use the Services. This number is called the Device-ID. \n\nIP address and MAC address: Your Smart TV will be assigned an IP address when accessing the Internet. If your Smart TV is behind a router (e.g. in a local home network or local WLAN), we may process the IP address of such router. The MAC address is a unique number assigned to each network interface of your Smart TV. \n\nDevice specific information: The Smart TV stores several information about itself and its configuration. This information includes the Smart TV type, the version of the operation system of the Smart TV, its panel resolution, the project ID (i.e. information regarding configuration files), the user agent, browser name, browser version, and the language and country that have been configured in the Smart TV. \n\nThese information will be used by us and will be provided to our service partner and content partners for the purposes described below.\n\n4.Purposes for which we process and/or use your personal data and legal bases\n\nThe purposes for which we process your personal data and the respective legal bases are described below. To the extent that contractual purposes are mentioned below as legal basis, we cannot provide you with the Services if you do not provide us with the respective data. To the extent that your consent is mentioned as legal basis, you are free to provide or withhold your consent. If you do not provide your consent, we will not process your personal data for the respective purpose.\n\n•Providing the Services: We use the IP address and MAC address, Device-ID, the version of the operation system of the Smart TV, client type of your Smart TV and its panel resolution, the project ID (i.e. information regarding configuration files), your DTV channel list, viewed channels, time zone, country and language settings to provide your Smart TV with access to the Services and services provided by content partners. Purposes include (but are not limited to) providing location based services to you (e.g. weather forecasts); abuse handling, management of security incidents, monitoring of availability of the Services, and providing backup services of user preferences.\n\nWhen you use the Services your Smart TV will request data from the Services via the Internet. As part of these requests your IP address as described above and the language and country that has been configured in your Smart TV will be transmitted to our service partner. Our service partner will process the respective data in accordance with its privacy notice.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) General Data Protection Regulation (“GDPR”).\n\n•Service Settings: As part of the regular functionality of the Services you can manually arrange the order in which apps are displayed by the Services. Our service partner will store your arrangement and other preferences you may set during use of the Services. This information will be linked to the Device-ID.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•Authentication: Whenever you connect your Smart TV to the Internet and turn on the Smart TV, it will automatically connect to the Services, which are managed by our service partner. Your Smart TV will then be authenticated as being certified for access to the Services. For authentication purposes, the Services store one or more unique numeric identifiers related to your Smart TV. We use the Device-ID and MAC address for authentication purposes. We also provide the Device-ID to selected content partners for authentication purposes. These content partners use the Device-ID to authenticate your Smart TV for access to services provided by a content partner.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•Remote diagnostics: As part of the Services, we provide you with remote diagnostic services. Therefore, we process the Device-ID, device number, serial number, MAC address, and error logs, error codes and error descriptions which are provided by the faulty module (application, middleware system).\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•After-sales service: Pursuant to applicable law you may have warranty or similar rights to obtain after-sales services. TCL Europe, 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, France is responsible for handling warranty claims and other requests for after-sales services and the processing of your personal data associated therewith. I.e., for the purposes of after sales services, TCL Europe acts as data controller and we are not responsible for the respective processing of your personal data.\n\nWhen you ask for our after-sales related service, your name, e-mail address, phone number, service request and postal address included in the invoice may be required for the purpose of providing you with the after-sales service. The information may also be collected through the after-sales partners of our resellers or authorized service providers if you call them for service. You can contact TCL Europe under the contact details stated in Section 12 below for more information about the protection of personal data in connection with after-sales services.\n\nThe legal basis for the respective processing is the obligation to comply with legal obligations pursuant to Article 6 (1) c) GDPR.\n\n•T-Launcher: T-Launcher is the main page for the use of the Smart TV on Linux operating system (please see below for the use of the android operating system) and allows you to select certain content.\n\nThe legal basis for the processing of your personal data that is necessary for your use of the T-Launcher are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\nSubject to your prior consent, we will also monitor the use of the T-Launcher, i.e.:\n\n-	When you start to use T-Launcher, we will record the time of entering and exiting T-Launcher.\n-	When you start to play a video of T-Launcher, we will record the name and the duration time of the video (not applicable to Netflix, YouTube or any other service provided by a third party).\n-	When you enter or exit a page, we will record the staying time on the page.\n-	When you move your cursor from one location to another, or enter an application, we will record this event.\n-	When you install, remove or update applications, we will record these events, including the name of applications.\n\nWe collect these information mainly for big data analysis to improve products and to provide better content services to users.\n\nThe legal basis for the processing of your personal data in connection with the monitoring of your use of the T-Launcher is your consent pursuant to Article 6 (1) a) GDPR.\n\nIf you have bought an Android TV and use Google’s android operating system, your personal data will be processed by Google and we are not responsible for such processing. Please refer to Google’s privacy notice for information about the related processing of your data and your respective rights.\n\n•T-Cast: T-Cast allows you to control your TV using your phone and to share videos, music and pictures stored in your smart phone on the TV. T-Cast also allows you to mirror your smartphone on your TV.\n\nThe download and use of the app is voluntary. If you download and use the app, we will process the MAC address to calculate how many T–Cast versions have been used in the market. This is required to be able to offer you this service. If you use our second screen functionality, the controls you activate on the application and the country and language settings, DTV channel list, favorite channels lists, schedule lists, Device-ID, current channel, protocol version and IP address of your Smart TV will be collected and processed by us on our servers. Our servers will then control your Smart TV as directed by you in the app.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•Software updates: Software updates are part of the Services. Thus, each time your Smart TV is powered on, it will provide us with the IP address, Device-ID, device number, software version, client type of your Smart TV, project ID (i.e. configuration files), user ID, and serial number to look whether software updates are available and to offer you and provide you with appropriate software updates.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•Law enforcement: We may be required to provide data to competent law enforcement authorities or courts of justice. If we do so, we will only do so subject to a binding legal instrument like a warrant or a judicial order, which requires us to cooperate with the relevant authorities.\n\nThe legal basis for the respective processing is our obligation to comply with legal obligations pursuant to Article 6 (1) c) GDPR.\n\nUse of the Services is possible by using pseudonyms, unless specific services require that you provide your name and/or email address.\n\n5.Privacy and safety of children under 16\n\nWe understand the importance of taking extra precautions to protect the privacy and safety of children using our Services. Children under the age of 16, or equivalent minimum age in the relevant jurisdiction, are not permitted to provide their personal information via the TV set or when they call for after-sales service, unless their parent provided verifiable consent.\n\nAs we never collect birth dates of users, we can't identify the age of users. But if we learn that we have collected the personal information of a child under 16, or equivalent minimum age depending on the jurisdiction, outside of the above circumstances we will take steps to delete the information as soon as possible.\n\n6.Third party apps\n\nYour Smart TV allows the use of apps provided by third parties, such as Netflix, YouTube or HbbTV (red button service provided by TV broadcasters). You may download the apps from the app store or activate third party apps that are already pre-installed on your device. Third party apps that are pre-installed on your device do not collect personal data without your prior authorization. E.g. Netflix is already pre-installed on the device but only collects data when you log into your Netflix account. HbbTV only collects data when you consent to the collection by pressing the designated button on your remote control.\n\nIf you enable a third party app, personal data about you may be processed by the app provider. We are not responsible for such processing; please refer to the privacy notice of the third party app for information about the related processing of your data and your respective rights.\n\n7.Categories of recipients\n\nWe share your personal data collected during your use of the Services only with third party content partners if you request certain content provided by such content partners or with service providers as data processors assisting us with the provision of the Services.\n\nWe share your personal data with other third parties only if we are obligated to do so on the basis of legal requirements (e.g. to courts or criminal prosecution authorities), if you have consented to the respective sharing or if the sharing is otherwise lawful under applicable law.\n\n8.Countries in which your data will be processed\n\nWe and/or some of the recipients of your personal data listed above may be located outside of the European Economic Area (e.g. in the Peoples Republic of China, or United States of America). Therefore, your personal data may be processed in countries where the data protection laws may provide a different level of protection compared to the laws in your jurisdiction and which are not recognized as providing an adequate level of protection of personal data in accordance with the GDPR. The countries which provide an adequate level of data protection from a European data protection law perspective include Andorra, Argentina, Canada, Switzerland, Faeroe Islands, Guernsey, the State of Israel, Isle of Man, Jersey, New Zealand and the Eastern Republic of Uruguay. Recipients in the USA may partially be certified under the EU-U.S. Privacy Shield and thereby recognized as providing an adequate level of data protection from an European data protection law perspective. \n\nWhere required, we will implement appropriate safeguards with regard to data transfers to recipients outside of the European Union that do not provide an adequate level of data protection. A copy of the respective measure may be requested by contacting us as stated under Section 12. below.\n\n9.Storage Period\n\nYour personal data will be retained as long as necessary to provide you with the Services. For most data this generally means that we will retain your data for one month. For the purpose of remote diagnostics and after-sales services we may retain your data up to ten years. When we no longer need to use your personal data to comply with contractual or statutory obligations, we will remove it from our systems and records and/or take steps to properly anonymize it so that you can no longer be identified from it.\n\n10.Your rights\n\nPursuant to applicable data protection law you may have the right to: request access to your personal data, request rectification of your personal data; request erasure of your personal data, request restriction of processing of your personal data; request data portability, and object to the processing of your personal data. Please note that these aforementioned rights might be limited under the applicable national data protection law. For further information on these rights please refer to the Appendix Your Rights below.\n\nYou also have the right to lodge a complaint with the competent data protection supervisory authority.\n\nTo exercise your rights please contact us as stated in Section 12 below.\n\n11.Changes to the Privacy Notice\n\nTo improve our Services we may require amendments to this Privacy Notice – e.g. by the implementation of new technologies or the introduction of new services. We reserve the right to change or supplement this Privacy Notice at any time.\n\n12.Contact information and representative in the European Union\n\nIf you have any questions about the Privacy Notice or would like to complain about our handling of your personal data, please contact us by using the following contact details:\n\nContact form: www.tcl.eu/privacy/support\n\nOur representative in the European Union is: TCL Europe having offices at 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, France. You may contact TCL Europe via the contact form stated above.\n\nVersion: 2.0\n\nAppendix Your Rights\n\na.Right of access: You may have the right to obtain from us confirmation as to whether or not personal data concerning you is processed, and, where that is the case, to request access to the personal data. The access information includes - inter alia - the purposes of the processing, the categories of personal data concerned, and the recipients or categories of recipients to whom the personal data have been or will be disclosed. However, this is not an absolute right and the interests of other individuals may restrict your right of access.\n\nYou may have the right to obtain a copy of the personal data undergoing processing. For further copies requested by you, we may charge a reasonable fee based on administrative costs. \n\nb.Right to rectification: You may have the right to obtain from us the rectification of inaccurate personal data concerning you. Depending on the purposes of the processing, you may have the right to have incomplete personal data completed, including by means of providing a supplementary statement.\n\nc.Right to erasure (\"right to be forgotten\"): Under certain circumstances, you may have the right to obtain from us the erasure of personal data concerning you and we may be obligated to erase such personal data. \n\nd.Right to restriction of processing: Under certain circumstances, you may have the right to require the restriction of processing of personal data concerning you. In this case, the respective data will be marked and may only be processed by us for certain purposes.\n\ne.Right to data portability: Under certain circumstances, you may have the right to receive the personal data concerning you, which you have provided to us, in a structured, commonly used and machine-readable format and you may have the right to transmit those data to another entity without hindrance from us.\n\nf.Right to object:\n\nUnder certain circumstances, you may have the right to object, on grounds relating to your particular situation, or where personal data are processed for direct marketing purposes at any time to the processing of your personal data by us and we can be required to no longer process your personal data.\n\nMoreover, if your personal data is processed for direct marketing purposes, you have the right to object at any time to the processing of personal data concerning you for such marketing, which includes profiling to the extent that it is related to such direct marketing. In this case your personal data will no longer be processed for such purposes by us."];
var cookieNotice = ["\nWe respect your privacy when using Smart TVs manufactured and Services provided by us. Cookies are used by many websites and other internet services and your Smart TV will accept, store and transmit cookies to ensure that these websites and services operate properly. \n\nWe do not use cookies when providing the Services to you. However, third parties (e.g. third party app providers) may use cookies when you use the Smart TV to access their services. This Cookie Notice can only provide limited information concerning cookies that may be placed by third parties. For information on the actual cookies used by third parties and their functionalities we refer you to the respective cookie notices of such third parties. However, in this Cookie Notice we provide a general description which cookies can be set on your Smart TV and how you can manage them.\n\n1.What is a cookie?\n\nCookies are small text files that may be placed on your Smart TV. When a website or the red-button service of a TV station is accessed, the website or service may store a cookie in the Smart TV. During subsequent accesses, a cookie that is placed on your Smart TV will send information to the party that has placed the cookie. Cookies are extremely common and used on a number of websites and services. Each cookie will typically contain the name of the domain from which the cookie has come, the \"lifetime\" of the cookie, and a value (usually a unique number). For a more thorough explanation of what cookies are and how they operate, please visit www.allaboutcookies.org.\n\nCookies can be categorized into functional cookies and non-functional cookies. Functional cookies are cookies that are strictly required for the purpose of providing you services. Non-functional cookies are all other cookies.\n\n2.Third party websites\n\nWhen you visit websites or services of third parties via the Services of your Smart TV, it is possible that such websites or services place cookies on your Smart TV, and that such websites track and store your interactions on such websites. We do not request or encourage such activities and will not use such information. Please refer to the respective cookie and privacy notices of such websites and services for more information about such parties’ use of such cookies.\n\n3.Cookie deletion\n\nYour user interface of your Smart TV allows you to delete all cookies and other local browser storage from the Smart TV. It is highly advisable to remove all cookies and locally stored settings prior to selling or giving away your Smart TV.\n\nVersion: 2.0"];
var privacyPolicy = ["Akıllı TV ve diğer hizmetlerimizden yararlanmak istiyorsanız lütfen aşağıdaki kutucuğu/kutucukları işaretleyin. Bu hizmetlerin kullanılabilmesi için kişisel verilerinizin Gizlilik Politikası’nda belirtildiği şekilde işlenmesi gerekmektedir: http://www.tcl.eu/en/","Akıllı TV hizmetini, servis ayarlarının saklanmasını ve otomatik Akıllı TV kimlik doğrulamasını etkinleştir. Bu seçeneğin işaretini kaldırdığınızda yalnızca standart TV ve HDMI’a sahip olacaksınız.","Otomatik yazılım güncellemelerini etkinleştir. Ürününüzün en son yazılım güncellemeleri ve performans iyileştirmeleri ile güncel tutmak için bu kutucuğu işaretleyin.","(Yeni özellikler, istikrar ve güvenlik iyileştirmeleri sunduğundan yazılım güncellemeleri TV’nizin düzgün çalışması için son derece önemlidir. Bu nedenle, bu kutucuğu işaretlemenizi tavsiye ediyoruz.)","Aşağıda listelenen amaçlarla kişisel verilerinizin tarafımızca işlenmesine izin vermek için lütfen kutucuğu işaretleyin. Kişisel verilerinizi nasıl işlediğimiz konusunda detaylı bilgi için lütfen Gizlilik Politikası’na bakın: http://www.tcl.eu/en/","TCL ürünlerinin iyileştirilmesi ve Akıllı TV’ler üzerinden daha iyi içerik hizmetlerinin sağlanabilmesi için kişisel verilerimin (örneğin T-Başlatıcı’ya giriş ve çıkış zamanı) işlenmesine izin veriyorum."];
var termsFirTitle = ["Hükümler ve Koşullar","Gizlilik Bildirimi","Çerez bildirimi"];
var termsSecTitle = ["Lütfen şartları ve koşulları okuyun ve kabul edin.","Lütfen gizlilik bildirimini okuyarak kabul edin.","Lütfen çerez bildirimini okuyarak kabul edin."];
var tickall = "Tümünü işaretle";
var tickremindWords = "Lütfen işaret kutularını işaretleyin aksi takdirde Akıllı TV Hizmetinden yararlanamazsınız.";