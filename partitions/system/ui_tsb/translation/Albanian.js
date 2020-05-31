var  all_country  = ["*","Austri","Belgjikë","Bulgari","Kroaci","Republika Çeke","Danimarkë","Finlandë","Francë","Gjermani","Greqi","Hungari","Itali","Luksemburg","Holandë","Norvegji","Poloni","Portugali","Rumani","Rusi","Serbi","Sloveni","Spanjë","Suedi","Zvicër","Mbretëri e Bashkuar","*"," "/*Arab*/,"Estoni"," "/*Hebrew*/,"Letoni","Slovaki","Turqi","Irlandë","*","*","*","*","Uruguai","Peruja","Argjentina","Kili","Venezuela","Ekuador","Kosta Rika","Paraguaji","Bolivia","Belize","Nikaragua","Guatemala","*","*","Brazil","*","Meksikë","*","*","Të tjera","Lituani"/*新添加的，底层结构体中没有*/,"Ukrainë"/*新添加的，底层结构体中没有*/,"*","*"," "," ","*"," ","*","*","*"," ","*","*"," "," "," ","*"," ","*"," "," "," "," ","*"," "," "," "," "," ","*"," ","Moldavi"," ","EI Salvador"," "," "," ","*"," "," "," "," "," "," "," "," "," "," "," "," ","*"," "," ","*"," "," "," ","*","Shqipëria","Bjellorusi","Islandë","Lituani","*","*","*","*","*","Bosnje Hercegovina","Qipro","Kosovë","Maqedoni","Maltë","Mali i Zi","Të tjera"];	

var all_language = ["Çekisht","*","Danisht","*","*","Gjermanisht","Anglisht","Spanjisht","Greqisht","Frëngjisht",
					"Kroatisht","*","Italisht","Hungarisht","Hollandisht","Norvegjisht","Polonisht","Portugalisht","Rusisht","Rumanisht",
					"Slovenisht","Serbisht","Finlandisht","Suedisht","Bulgarisht","Sllovakisht","Kinezçe","*","Galisht","*",
					"Uellsh","Arabisht","Irlandisht","Letonisht","*","Turqisht","Estonisht","Hollandisht"/*Netherlands*/,"Koreanisht","*",
					"Hindi","*","*","Mandarin","Cantonese","Maori","Audio Origjinale"/*Qaa*/,"E papërcaktuar"/*Undetermined*/,"*","E panjohur",
					"E papërcaktuar","*","*","*","*","*","*","*","*","*",
					"*","*","*","Shqip","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","Baske","*","*",
					"*","*","*","*","*","*","*","Boshnjake","*","*",
					"*","*","*","*","Bjellorusisht","*","*","Katalanase","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","Galiciane","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","Islandisht","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","Japanese","*","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","Lituanisht",
					"*","*","*","*","*","*","*","Maqedonisht","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","Romancë","*","*","*","*",
					"*","*","*","Samisht","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","Teletekst",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","Ukrainase","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","Kinezçe Tradicionale",
					"*"];	


var offOn = ["I fikur","I ndezur"];	
var okCancel = ["OK","Anulloj"];	
var yesNo = ["Po","Jo"];	
var level = ["I fikur","Ulët","Lartë","Mesëm"];	
var manualAuto = ["Manual","Automatik"];	
var homeShop = ["Shtëpi","Dyqan"];	
var picPreset = ["Standart","Dinamike","Natyrale","Film","Personale"];	
var picColorTemp = ["Të freskëta","Normale","Të ngrohta","Personalizim"];	
var pic3dNavig = ["Manual","Automatik","Gjysëm-Automatik"];	
var _3dOptions = ["Modaliteti 3D","3D-në-2D","Butoni L-R","Thellësia e fushëpamjes"];	
var pic3DMode = ["I fikur","2D-në -3D","Krah-për-Krah","Lart-dhe-Poshtë","Linja e ndërfaqes"];	
var picEcoOptions = ["Kursim të energjisë","Sensor drite","Errësues lokal","Errësues Miks"];	
var picGeoOptions = ["Gjeometri","Pozicioni.H","Pozicioni.V","Ora","Faza"];	
var picAdWhiteBal = ["Gain R","Gain G","Gain B","Kompensim R","Kompensim G","Kompensim B"];	
var souOptions = ["Zë i paracaktuar","Balancë","Vonesë Audio","SRS TSHD","Kontroll automatik volumi","Tip SPDIF","Vonesë SPDIF","Vendosja e TV","Gjuha e audios","Tipologjia e zërit","Përshkrimi i audios","Amplifikim i basit","Dolby Dixhital Plus"];	
var souSpdifType = ["Automatik"/*Dolby*/,"PCM","I fikur"];	
var colorSpace = ["Automatik","Amtare","Personalizim"];	
var souPresetPara = ["100Hz","500Hz","1.5KHz","5KHz","10KHz"];
var chOptions = ["Skanim i kanaleve","Lista e kanaleve","EPG","Organizues i kanaleve","Diagnostifikimi i kanaleve","Zhvendosje kohore","Subtitra","Teletekst","Lista e llojeve të kanaleve","Shërbimi i të dhënave"];	
var chDiagOptions = ["Fuqia e Sinjalit","Cilësia e Sinjalit","Frekuenca (KHz)","ID-ja e Shërbimit","ID-ja e Rrjetit","Emri i rrjetit"];	
var chScanOptions = ["Vendi","Modaliteti i sintonizuesit","Kërkim automatik","Përditësim automatik","Skanim manual analog",["Instalim manual i kabllit","Instalim manual i antenës","Sintonizim manual satelitor"],"Konfigurim i antenës satelitore","Përzgjedhje e rrjetit të preferuar","Pastro listën e kanaleve","LCN"];
var favNetDes = "Ju lutemi zgjidhni rrjetin tuaj të preferuar";	
var tuner = ["Kabëll","Antenë","Satelit"];	
var passError = "Fjalëkalim i pasaktë.\nJu lutem shkruajeni sërish!";	
var chType = ["Kanalet analogë:","Kanalet dixhitalë:"];	
var chScanStatus = ["Statusi: Duke skanuar","Statusi: Skanimi përfundoi","Statusi: Skanimi u anullua","Statusi: Gabim skanimi"];	
var chScanPara = ["Frekuenca (KHz)","Modulimi","Shkalla e Simbolit (Ksym/s)","ID-ja e Rrjetit","Sistem","Sintonim i imët","Fuqia e Sinjalit","Cilësia e Sinjalit","Modalitet skanimi","ID e Kanalit"];	
var chScanParaMHZ = ["Frekuenca (MHz)"];	
var chAtvManSys = ["Perëndim EUR","Lindje EUR","UK","Francë"];	
var modulation = ["16QAM","32QAM","64QAM","128QAM","256QAM","Automatik"];	
var chCleanDes = "A dëshiron që të pastrosh listën e kanaleve?";	
var chDeletDes = "A dëshiron që të fshish kanalin?";	
var chOperator = ["Ziggo","UPC","Të tjera"];	
var chScanType = ["Dixhital & Analog","Dixhital","Analog"];	
var chScanMode = ["Plot","I avancuar","I shpejtë"];	
var bookingModes = ["Regjistroj","Kujtesë"];	
var dayName = ["Dielë","Hënë","Mar","Mër","Enj","Pre","Shtu"];	
var monthName = ["Jan", "Shku","Mars","Prill","Maj","Qer","Korr","Gush","Shtat","Tet","Nën","Dhje"];	
var filter = ["Filtër","Kategori","Nënkategori"];	
var chEpgFirstGenre = ["Film","Lajme","Spektakël","Sporte","Për fëmijë","Muzikë","Arte","Sociale","Edukim","Kohë e lirë","Speciale"];	
var chEpgSecondGenre = [["Dramë","Detektiv","Aventurë","Fanta-Shkencë","Komedi","Telenovela","Romancë","Serioze","Filma për të rritur"," "," "," "],["Aktualitet","Parashikimi i Motit","Revista e Lajmeve","Dokumentar","Debat"," "," "," "," "," "," "," "],["Spektakël","Spektakël me Lojëra","Spektakël varietet","Talk Show"," "," "," "," "," "," "," "," "],["Sporte","Evente Speciale","Revista Sportive","Futboll","Tenis","Ekipe Sportive","Atletikë","Gara me Motorra","Sporte të Ujit","Sporte Dimërore","Hipizëm","Artet Marciale"],["Për fëmijë","Për fëmijët parashkollorë","Argëtim për fëmijët 6 deri 14","Argëtim për fëmijët 10 deri 16","Informativ","Filma Vizatimorë"," "," "," "," "," "," "," "],["Muzikë","Rrok","Serioze","Folk","Xhaz","Muzikal","Balet"," "," "," "," "," "],["Arte","Arte skenike","Arte të bukura","Fe","Kultura popullore","Literaturë","Film","Eksperimental","Transmetim","Media e re","Revista artistike","Modë"],["Sociale","Revista","Ekonomi","Njerëz të shquar"," "," "," "," "," "," "," "," "],["Edukim","Natyrë","Teknologji","Mjekësi","Vende të Huaja","Shkencat shoqërore","Arsimimi i mëtejshëm","Gjuhët e huaja"," "," "," "," "],["Koha e lirë dhe pasionet","Turizëm","Artizanale","Automobilizëm","Kalitje fizike dhe Shëndeti","Gatim","Reklamë","Kopshtari"," "," "," "," "],["Gjuha origjinale","Bardh e Zi","E papublikuar","Transmetim Live"," "," "," "," "," "," "," "," "]];	
var chEpgFirstGenreLA = ["Lajme","Sporte","Edukative","Telenovelë","Mini-serial","Serial","Spektakël varietet","Reality show","Informacion","Komedi","Fëmijë","Erotike","Film","Lotari, shitje televizive, çmime","Debate/intervista","Të tjera"];	
var chEpgSecondGenreLA = [["Lajme","Reportazh","Dokumentar","Biografi","Të tjera","*","*"],    ["Sporte","Të tjera","*","*","*","*","*"],["Edukative","Të tjera","*","*","*","*","*"],["Telenovelë","Të tjera","*","*","*","*","*"],["Mini-serial","Të tjera","*","*","*","*","*"],["Serial","Të tjera","*","*","*","*","*"],["Auditor","Spektakël","Muzikal","Prapaskenat","Femëror","Spektakël me Lojëra","Të tjera"],["Reality show","Të tjera","*","*","*","*","*"],["Gatim","Modë","Vendi","Shëndeti","Udhëtime","Të tjera","*"],["Komedi","Të tjera","*","*","*","*","*"],["Fëmijë","Të tjera","*","*","*","*","*"],["Erotike","Të tjera","*","*","*","*","*"],["Film","Të tjera","*","*","*","*","*"],["Lotari","Telemarketing","Çmime","Të tjera","*","*","*"],["Debat","Intervista","Të tjera","*","*","*","*"],["Karikatura për te rritur","Ndërvepruese","Politikë","Fe","Shërbime inxhinjerike","Të tjera","*"]];	
var chOrganizer = ["Kapërceje kanalin","Sistemo kanalet","Ndrysho kanalin","Fshi kanalin","Shkëmbe kanalin","Shto kanalin"];	
var chEditPara = ["Emri i rrjetit","Numri i kanalit","Emri i kanalit","Frekuenca","Sistemi i ngjyrave","Sistemi i zërit"];	
var chSatTitles = ["Lloji i satelitit","Konfigurim i antenës satelitore","Përzgjidh satelitin"];	
var chSatEidtOptions = ["Emri i satelitit","Pozicioni","Fuqia LNB","Frekuenca LNB (MHz)","Të dhenat e DiSEqC","Tone 22KHz","Tone burst","Frekuenca (KHz)","Shkalla e Simbolit (Ksym/s)","Polarizim","Fuqia e Sinjalit","Cilësia e Sinjalit","Statusi i Satelitit"];	
var chSatAutoPromt = [["Të gjithë","Rrjet"],["Të gjithë","I lirë/ Falas"]];	
var chSatAutoScanOptions = ["Përzgjidh satelitin","Modalitet skanimi","Kanale"];	
var chSatPosition = ["A","B"];	
var chSatLNBFreq = ["Universale",];	
var chSatDiSEqCInput = ["Çaktivizoj","A","B","C","D"];	
var chSatTone22KHz = ["Automatik","I ndezur","I fikur"];	
var chSatToneBurst = ["Çaktivizoj","Tone burst A","Tone burst B"];	
var chSatPolarization = ["Horizontal","Vertikal"];	
var chSatSetupOptions = ["Lloji i Antenes","Sintonues","Brezi i Frekuencave"];	
var chSatAntennaType = ["Kabëll Njësh","Universale"];	
var chSatUserBands = ["Fasha e Përdoruesit 1","Fasha e Përdoruesit 2","Fasha e Përdoruesit 3","Fasha e Përdoruesit 4","Fasha e Përdoruesit 5","Fasha e Përdoruesit 6","Fasha e Përdoruesit 7","Fasha e Përdoruesit 8"];	
var chSatOthers = ["Transponder"];	
var chSatSetupOthers = ["Përdorues i përcaktuar"];	
var pleaseSelectSat = "Ju lutem përzgjidhni në fillim satelitët!";	
var subOptions = ["Subtitra","Gjuha dixhitale e titrave","Gjuha e dytë dixhitale e titrave","Lloji i Titrave"];	
var gingaOptions = ["Shërbimi automatik i të dhënave","Lista e shërbimit të të dhënave"];	
var ttxOptionsCon = ["Dëshifrimi i gjuhës së ndërfaqes","Gjuha dixhitale e teletekstit"];	
var subType = ["Normale","Personat me vështirësi dëgjimi"];	
var netIntf = ["Ethernet","Wireless"];	
var netConnDes = ["TV është duke testuar lidhjen e rrjetit.\nJu lutem prisni","Testi i lidhjes së rrjetit është i suksesshëm!","Testi i lidhjes së rrjetit deshtoi."];	
var netSsidError = "Gjatësia e vlefshme e SSID është 1~32 karaktere. Ju lutem kontrolloni SSID.";	
var netOthers = ["Kodi PIN"];	
var netWlessAutoDes = ["Ju lutemi sigurohuni që Kodi PIN i mëposhtëm është instaluar në Access Point para se ta klikoni OK.","Ju lutem shtypni butonin në Pikën e Hyrjes brenda 120 sekondave para se të klikoni OK."];	
var netConnRemind = ["Fjalëkalim i pasaktë!","Duke u lidhur. Ju lutem prisni!","Lidhja u krye me sukses dhe adresa IP është marrë!","Lidhja dështoi, ju lutem kontrolloni rrjetin dhe provoni përsëri!","TV po skanon Pikat e Hyrjes. \nJu lutem prisni","Nuk ka Adaptor Wireless të lidhur me TV!"];	
var netWireIpOptions = ["Vendosja e IP","Lloji i Adresës","Adresa IP","Subnet Mask","Default Gateway","DNS Primar","DNS Sekondar"];	
var netWireConnRemind = ["Ju lutem fusni nje vlere midis 0 dhe 255.","Lidhur me sukses!","Ju lutem shkruani një adresë të vlefshme","Lidhur me sukses!","Lidhja dështoi!","Duke u lidhur. Ju lutem prisni!","Ju lutem fusni nje vlere midis 1 dhe 223."];	
var netFlixOptions = ["Ç'aktivizoni","ESN"];	
var netFlixDes = ["Jeni të sigurtë që doni t'a çaktivizoni?"," "/*Are you sure that you want to ESN?*/];	
var netUpdateTitle = "Përditësimi i Software";	
var netUpdateDialogTitle = "Software është duke u përditësuar";	
var netBGDownloadTitle = "Duke shkarkuar";	
var netUpdateLoadingPrompt = ["Duke kërkuar për përmirësim, ju lutem prisni!","Software është duke u shkarkuar... Ju lutem prisni!","Ju lutem MOS fikni televizorin gjatë përditësimit të softwarit!",                            "Përditësimi i domosdoshëm i software është shkarkuar automatikisht në sfond!"];	
var netUpdatePrompt = ["Urime, versionin juaj i software është më e riu!","Eshtë gjetur versioni i ri i softwarit XXXX. A dëshironi ta shkarkoni tani? Kjo mund të marrë pak kohë në varësi të statusit të rrjetit.","Hyrja dështoi, ju lutem kontrolloni dhe lidhuni përsëri!","Nuk arriti të marrë të dhënat, ju lutem provoni përsëri më vonë!","Analiza e përmirësimit të Informacionit dështoi, shtype off/on me telekomandë!","Lidhja dështoi, ju lutem kontrolloni rrjetin dhe provoni përsëri!","Software u shkarkua me sukses. A dëshironi të filloni përditësimin e TV tuaj?","Të dhënat humbën! Shkarkimi dështoi!","Kontrolli i skedarit të Softwerit dështoi, ju lutem provoni përsëri!","Probleme me lidhjen. Ju lutem kontrolloni dhe lidhuni sërish!","Përditësimi dështoi. Ju lutemi shtypni off/on me telekomandë!","Dosja e përmirësimit u fshi papritur. Ju lutem bëni përmirësim nga rrjeti përsëri.","Software është shkarkuar me sukses në sfond. A dëshironi që të bëni përmirësimin?"];	
var netUpdateButtonText = ["Shkarkim", "Përditësim", "Më vonë", "Kurrë", "OK","Vazhdo"];	
var autoDetectPrompt = ["Eshtë gjetur versioni i ri i softwarit XXXX. A dëshironi ta shkarkoni tani? Kjo mund të marrë pak kohë në varësi të statusit të rrjetit.","Eshtë gjetur versioni i ri i softwarit XXXX. A dëshironi që të bëni përditësimin tani?","Procesi i përmirësimit nga rrjeti u ndërpre herën e fundit. Ju duhet të bëni përmirësimin përsëri.",                        "Shkarkim i versionit të ri të software XXXX nuk ka përfunduar. A doni që të vazhdoni tani?",                        "Programi është shkarkuar, A doni t'a përditësoni tani?"];	
var sysOptions = ["Manual elektronik","Menuja e Gjuhës","Kohëmatës","Bllokoj","Cilësimet e Inputit","Përditësimi i Software","Vend","Modaliteti HbbTV","Kukies","Ndërfaqe e përbashkët","Cilësimet e përparuara","Rivendos dyqanin","Treguesi LED","Ndezje e menjëhershme","Auto shop mode","Area","Modaliteti demo"];
var sysResetDes = "A jeni i sigurt që ju doni të bëni veprimin e përzgjedhur?";	
var sysMenuLangOptions = ["Gjuha","Gjuha Audio e Preferuar","Gjuha e dytë Audio"];	
var sysTimerOptions = ["Zona kohore","Emri i Rajonit","Ora","Koha e Fikjes Automatike","Gatishmëria automatike", "Rajoni Vendit"];	
var sysTimeZone = ["Sipas transmetimit","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00","GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30","GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00","GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00","GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00","GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00","GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];	
var sysTimeZoneLA = ["Si transmetues","Rajoni1","Rajoni2","Rajoni3","Rajoni4","Region5"];	
var sysTimeZoneNA = ["*","*","*","*","*","*","*","*","*"];	
var sysSleepTimer = ["I fikur","10 Min","20 Min","30 Min","40 Min","50 Min","60 Min","90 Min","120 Min"];	
var sysStandby = ["I fikur","4 Orë","6 Orë","8 Orë"];	
var sysRegionName = ["Madrid","Ishujt Kanarie"];	
var sysClockOptions = ["Sinkronizimi Automatik","Datë","Ora","Kohëshënues i ndezjes","Kohëmatës","Kanali i ndezjes","Kohëshënues i fikjes","Kohëmatës","Sistemi i orës gjatë verës"];	
var sysTimer = ["I fikur","Përditshëm","Njëherë"];	
var sysInputSet = ["Nuk ka etiketë","DVD","Blu-ray","HDD","DVDR","HD rec.","Lojë","VCR","PC","Dixhital STB","Dixhital STB HD","Kamera","Regjistrues","Të tjera"];	
var sysAvVideoInput = ["Automatik","RGB_CVBS","RGB","CVBS","S-Video"];	
var sysUpdate = ["Nëpërmjet USB","Nëpërmjet rrjetit","Nëpërmjet Kanalit"];	
var sysUpdateDes = [" "," "," ","Nuk mund të gjendet një software i ri në ajër!","Eshtë gjetur versioni i ri i softwarit XXXX. A dëshironi që të bëni përditësimin tani?","Ju lutemi të futur shkopin USB.","Kontrolli i skedarit të Softwerit dështoi, ju lutem provoni përsëri!","Duke përditësuar. Kjo do të marrë disa kohë për tu përfunduar, pastaj TV do të rifillojë automatikisht!","Software është përditësuar me sukses.\npastaj TV do të rifillojë automatikisht!","Eshtë gjetur versioni i ri i softwarit XXXX. A dëshironi ta shkarkoni tani? Kjo mund të marrë pak kohë në varësi të statusit të rrjetit.","Duke shkarkuar","Software u shkarkua me sukses. A dëshironi të filloni përditësimin e TV tuaj?","Përditësimi dështoi!","Duke kërkuar për skedarë të përmirësuar","Software është përditësuar me sukses.\n Ju lutem rindizni TV tani."];	
var sysProductInfo = ["Versioni aktual","Emri i produktit","Emri i Prodhuesit","Emri i shasisë"];	
var sysCiDes = ["Nuk është gjetur karta CI."];	
var sysAdOptions = ["DivX(R) Regjistrimi","DivX(R) Çregjistrimi","T-Link","Gabim autorizimi","Konfirmimi Çregjistrimi","Konfirmimi i Abonimit","Abonimi mbaroi"];	
var sysRegistDes = ["Ju duhet të regjistroni pajisjen tuaj për të luajtur video të mbrojtura DivX(R).","Kodi i Regjistrimit:","Regjistrohuni në http://vod.divx.com"];	
var sysDregistDes = ["Kodi i Çregjistrimit:","Çregjistrohuni në http://vod.divx.com","Vazhdoni me regjistrimin?"];	
var mediaAuthorization = ["Pajisja juaj nuk është i autorizuar për të luajtur këtë video të mbrojtur DivX(R)."];	
var deregistrationConfrimation = ["Pajisja juaj është regjistruar tashmë.","A jeni i sigurt se doni të çregjistroheni?"];	
var rentalConfirmation = "DivX(R) me qira ka përdorur XXXX nga shikimet YYYY. Dëshironi të vazhdoni?";	
var rentalExpired = "DivX(R) me qira ka përdorur XXXX nga shikimet YYYY. Abonimi i DivX ka mbaruar.";	
var parentalRatingLA = ["Vlerësimi prindëror","Vlerësimi i moshës","Vlerësimi i përmbajtjes"];
var parentalRatingNA = ["Vlerësimi prindëror","*","Vlerësimi i moshës","Vlerësimi i përmbajtjes","*","*","*","*"];	
var parentalRatingOptionUS		= ["***","***","***"];
var sysTVRatingUS=["***","***","***","***","***"];
var sysMPAAUS=["***","***","***","***","***","***"];
var parentalRatingOptionCanada		= ["***","***","***"];
var sysCanadaEng=["***","***","***","***","***","***"];
var sysCanadaFre=["***","***","***","***","***",""];
var sysResetRRT=["***"];

var ageRatingOptions = ["L","10","12","14","16","18"];	
var contentRatingOptions = ["I fikur","Drogë","Dhunë","Seks","Dhunë & Drogë","Seks & Drogë","Dhunë & Seks","Dhune, Seks & Drogë"];	
var sysLockOptions = ["Mbyllje kanali","Kyçi intervalit kohor","Vlerësimi prindëror","Kyçi i hyrjeve","Kyçi i panelit ballor","Kyçi i Instalimit","Ndrysho fjalëkalimin","Volumi maksimal","Fshiji të gjitha"];	
var sysTimeIntervals = ["Lloji i kyçit","Koha e fillimit","Koha e mbarimit"];	
var sysRatingOptions = ["Asgjë","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","Vlerësuar me X (Spanjë)"];	
var changePass = ["Ndrysho fjalëkalimin","Fjalëkalim i ri","Konfirmo fjalëkalimin"];	
var changePassDes = ["Fjalëkalim i pasaktë.\nJu lutem shkruajeni sërish!","Fjalëkalimi nuk përputhet. \n Ju lutem futeni përsëri!","Fjalëkalimi u vendos me sukses!","Ky kod është shumë i thjeshtë për t'u vendosur si fjalëkalim.\nJu lutemi vendoseni përsëri!"];	
var sysPowerOnChOptions = "Zgjidhni mënyrën";	
var sysPowerOnCh = ["Gjëndja e fundit","Përzgjedhje përdoruesi"];	
var netWlessSecu = ["Hapur","WEP","WPA/WPA2-PSK"];	
var netWlessSecu2 = ["Asgjë","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK","Nuk mbështetet"];	
var netWlessSecu3 = ["Asgjë","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Nuk mbështetet"];	
var netOptions = ["Lidhje interneti","Ndërfaqja","Konfigurimi i Wirelessit","Parametrat e IP","Informacion","Testi i lidhjes","DLNA","TV Remote","Konfigurimet e Netflix","Treguesi WiFi","Lloji i Adresës","Adresa IP","Subnet Mask","Default Gateway","DNS Primar","DNS Sekondar","SSID","BSSID","Ju lutem vendosni SSID:","ID e Përdoruesit"];	
var chEditDes = ["Numër kanali i duplikuar!","Shtyp Butonin e Kuq për të fshirë karakterin aktual!","Numra kanalesh të pavlefshëm."];	
var chEpgNoProgram = "Nuk gjendet informacion programi, ju lutemi bëni në fillim kërkimine kanaleve!";	
var chEpgWords = ["Udhëzues i Programit","Nuk ka të dhëna të programit.","Kanal I bllokuar!","Nuk ka detaje rreth programit.","Nuk ka titull programi."];	
var chEpgBooking = ["Informacion për orarin", "Numri i kanalit","Data e fillimit","Koha e fillimit","Koha e mbarimit","Lloji i përsëritjes","Lloji i programimit","Shto programimin","Zëvendëso","Ndrysho","Shto/ndrysho"];	
var epgHotKey = ["Dita e mërparshme","Ditën tjetër","Filtër","Lista e Programimeve","Shto programimin"];	
var chEpgBookRemind = ["Kohënisje e pasaktë","Kohëmbarim i pasaktë","Programim i dublikuar","Ruajtur me Sukses.","Fshirë me Sukses."];	
var chSchePara = ["Lista e Programimeve","Koha e fillimit","Data e fillimit","Titulli i Programit","Emri i kanalit","Kohëzgjatja","Përsërit","Programoj","Ndryshoj","Fshij"];	
var dateTimer = ["Njëherë","Përditshëm","Javor"];	
var scheduleDeleteReminds = "A doni të fshini këtë programim?";	
var scheduleNoLists = "Nuk ka listë programimi. Shtyp Butonin \"e Kuq\" për të shtuar një të tillë.";	
var chListWords = ["Lista e kanaleve","Përzgjidh listën","Modaliteti i sintonizuesit","Shto tek të preferuarat","Elimino","Zgjidh listën e kanaleve","Zgjidh mënyrën e sintonimit","Shkëmbej"];	
var chListType = ["Të gjithë","Dixhital","Analog","Radio","I lirë/ Falas","Të parapëlqyer"];	
var chAutoScanOptions = ["Përzgjidh operatorin","Lloji i kanalit","Kërkim automatik"];	
var souSoundType = ["I pavlefshëm","Mono","Mono","Stereo","Stereo","SAP","SAP","Dual1","Dual2","Dual2","Nicam Mono","Nicam Stereo","Nicam dual1","Nicam dual2","Nicam dual","Mono","LL","RR","LR"];	
var souPreset = ["Muzikë","Film","Zëri","Standart","Personale"];	
var picAdRgbMode = ["I fikur","Vetëm e kuqe","Vetëm jeshile","Vetëm blu"];	
var picAdOptions = ["Zvogëlimin e zhurmës","MPEG NR","Modaliteti RGB","Kontrast dinamik","Qartësia e LED në lëvizje","Tonalitete mishi","Modaliteti filma","Modaliteti lojra","Temperatura e ngjyrave","Balancimi i së bardhës","Ngrirje Figure","Shtrirje e zezë","Pamje jashtë ekranit","Gama","Modaliteti HDMI","Balancimi i së bardhës 10P","Zgjatues i ngjyrave","Zvogëlim i mjegullimit","Zvogëlim i lëkundjeve","Hapësira e ngjyrave","Qartësia e lëvizjeve"];	
var pic10Pwhite = ["Interval","E Kuqe","Jeshile","Blu","Kthej në gjendje fillestare","Ngjyrë","E verdhë","Bojëqielli","E purpurt"];	
var picMotionClarity = ["Modalitet lëvizje","Interpolim lëvizjeje","Qartësia e LED në lëvizje","Zvogëlim i mjegullimit","Zvogëlim i lëkundjeve","Kthej në gjendje fillestare"];	
var picMotionMode = ["Film","E lëmuar","Fshij","Sport","Klient"];	
var picResetDes = "Të gjitha konfigurimet personale do të rikthehen në gjendje fillestare. A jeni i sigurt që ju doni të bëni veprimin e përzgjedhur?";	
var pic10PReset = "A jeni të sigurtë që doni të rivendosni ballancen e së bardhes në 10P?";	
var picMotionReset = "A deshironi që të rivendosni qartesimin e lëvizjes?";	
var picColorSpaceReset = "Jeni te sigurte qe doni te rivendosni hapësirën e ngjyrave?";	
var picOptions = ["Figura e paracaktuar","Dritë përballë","Ndriçimi","Kontrasti","Saturimi","Ngjyrimi","Mprehtësia","Temperatura e ngjyrave","Mënyra e ekranit","Autoformatim","Përmirësim i Sportit","3D","Lundrim 3D","Konfigurimet ECO","Gjeometri","Cilësimet e përparuara","Rivendosje e Figurës"];	
var picSize = ["Formati 16:9", "Formati 4:3", "Formati 14:9", "Cinerama","Zmadhim 16:9", "Zmadhim nga afër 16:9","Zmadhim 14:9","Zmadhim i zgjatur","Zmadhim i gjerë","Zmadhim 2","Zmadhim i gjerë 2","Përputhje me ekranin origjinal","Pikë për pikë","Origjinal","Panoramë"];	
var others = ["Volumi","Transmetim","Fjalëkalimi","Statusi","Ruaj","Zëvendëso","Fillo","Dalje","Kërkim","Fshij","Asgjë","Automatik","Skanoj","Sigurim","Lidh","Rifreskoj","Riprovoj","Ndal","Konfigurimet","Kanale","Ndryshoj","Futni","Sinjali","Përfundoj","Stereo","Audio","Burim","Nuk ka Audio","Këshilla","Kthej në gjendje fillestare","Klient","Konfigurim","Ruaj","Përdorues","Mbylle tastierën","Modaliteti i Sigurisë","Çdo ditë","Lista PVR"];	
var direction = ["Majtas","Djathtas","Lart","Poshtë"];	
var audioType = ["MPEG","DOLBY AUDIO"/*"AC3"*/,"MPEG4","AAC", "DOLBY AUDIO"/*"AC3P"*/,"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD"," "," "," "," "," "," ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2","HE-AAC_V4","E panjohur"];
var soundChannels = ["E panjohur","Mono","Sub","Dual Mono","Stereo","Stereo Sub","Stereo Dolby Surround","Surround 2Ch","Surround","3.0Ch","4.0Ch","5.0Ch","Mono Lfe","Dual Mono Lfe","Stereo Lfe","Surround 2Ch Lfe","Surround Lfe","3.1Ch","4.1Ch","5.1Ch","7.1Ch","Stereo e përbashkët","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Majtas","Djathtas","Të tjera"];	
var prompts = ["Rregulloni konfigurimin e figurës që i përshtatet mirë ambientit ku po shikoni.","Rregulloni nivelet e ndriçimit. Sa më afër 100-shes, aq më e ndritshme.","Rregullo nivelet kontrastit. Sa më afër 100-shes, më të mëdha bëhen dallimet dritë erresirë të figurës.","Rregulloni nivelet e saturimit. Sa më afër 100-shes, aq më e intensive bëhet ngjyra.","Rregullo nivelet e mprehtësisë. Sa më afër 100-shes, aq më të qarta bëhen detajet.","Rregullo nivelet e kundërdritës. Sa më afër 100-shes, aq më i ndritshëm bëhet ekrani.","Rregullo nivelet e ngjyrimit. Ky konfigurim ndryshon tonalitetet e ngjyrës.","Zgjidhni formatin e figurës që përshtatet më mirë me programin që po shikoni.","Konfiguroni alternativat e kursimit të energjisë.","Rregulloni parametrat gjeometrik të ekranit kur ta lidhni me pajisjen PC.","Zgjidhni parametrat më të përparuara të figurës.","Rivendosni të gjitha cilësimet e figurës në gjendjen fillestare.","Zgjidhni një modalitet zëri që i përshtatet preferencës suaj personale.","Rregulloni balancën e volumit midis kanalit të majtë dhe atij të djathtë.","Sistemi i Zërit TruSurround HD Siguron performancë të pasur të zërit dhe qartësi në frekuenca të ulëta dhe të larta.","Digital Interface Format e lidh daljen audio dixhitale të TV me pajisjet e zërit të Home Theater.","Zgjidhni gjuhën audio që i përshtatet preferencës suaj personale.","Mundëson njerëzve me probleme shikimi të shijojnë programet televizive.","Provoni figurën, zërin dhe sinjalin e TV tuaj.","Përzgjidhni listën e kanaleve që i përshtaten sinjalit tuaj të TV.","Përzgjidhni gjuhën e nëntitrave të programit që do shfaqen në pjesën e poshtme të ekranit.","Shikoni tekstin dhe imazhet aktuale të kanalit.","Digital Living Network Alliance. Kënaquni me muzikë, foto dhe video me anë të rrjetit të shtëpisë edhe nga pajisje të tjera, të tilla si një PC.","Shfaqni përmbajtjen e smartfonëve tuaj në TV dhe përdorni smartphone si një telekomandë për TV.","Shfaqni përmbajtjen e një pajisje të përshtatshme Android- Miracast në ekranin e TV tuaj.","Vendosni një kyç në televizorin tuaj.","Përzgjidhni një emër për pajisjen tuaj.","Përzgjidhni mjedisin tuaj të shikimit.","Riktheni të gjitha konfigurimet e sistemit tek modaliteti i paracaktuar.","Switch off sports mode for more options.","Enhance the environmental contrast","A special mode to enjoy sport games","Enjoy more CEC functions."];
var initialTitle = ["Mirë se erdhët","Konfigurimi fillestar"];	
var initialPrompt = ["Kryeni konfigurimin fillestar tani dhe ju pret një Botë Eksperiencash Ngazëllyese!","Ju lutem zgjidhni gjuhën tuaj:","Ju lutem zgjidhni vendin tuaj:","Ju lutemi zgjidhni vendndodhjen tuaj:","Ju lutem zgjidhni llojin lidhjes së rrjetit tuaj:","Ju lutem, përzgjidhni mënyrën e lidhjes të rrjetit me kabëll:","Dështoi për t'u lidhur me xxxxxxxxx! Ju lutemi të lidhni pajisjen sipas diagrames së e mëposhtme ose zgjidhni Majtas për t'a rikthyer ne gjendje fillestare.","Lidhur me xxxxxxxxx! Ju lutem, përzgjidhni Djathtas për të vazhduar.","1)TV juaj tashmë mund të ketë një Përshtatës Wireless të inkorporuar\n 2)Ose, në qoftë ju është dhënë një Përshtatës Wireless USB, lidheni atë në TV tuaj.  Pastaj, ju lutem zgjidhni mënyrën lidhjes Wireless.","Duke skanuar. Ju lutem prisni...","Nuk ka Adaptor Wireless të lidhur me TV!","Ju lutemi sigurohuni që kodi PIN që vijon është instaluar në Pikën e Hyrjes para se të klikoni butonin ' Tjetër ' më poshtë.","Ju lutem shtypni butonin Shtyp në AP brënda 120 sekondash para se të shtypni Djathtas!","WPS (Konfigurim i mbrojtur Wi-Fi)","PIN (Numri i Identifikimit Personal)","PBC (Konfigurimi i Butonit Shtyp)","Përmbajtja e mëposhtme mund të aksesohet vetëm me një lidhje në rrjet. A doni që te kapërceni konfigurimin e rrjetit?","Ka përditësime të reja software për ju që të shkarkoni, kjo mund tju marrë kohë në varësi të statusit të rrjetit.","Përditësimi i software-it të TV ju siguron që të gëzoni funksionet dhe shërbimet më të fundit.","Ju nuk do ti gëzoni funksionet dhe shërbimet më të fundit. A dëshironi që të kapërceni përditësimin e Software-it?","Shtypni butonin Djathtas për të vazhduar.","Mos e fikni TV gjatë përditësimit pasi kjo mund të shkaktojë keqfunksionim të tij.","Nëse ju nuk dëshironi që të rinovoni, ju lutem zgjidhni JO.","Duke përditësuar, ju lutem prisni","Ju mund te përditësoni software në SISTEMI/PËRDITËSIM SOFTWARE.","Vendi i zgjedhur kërkon vendosjen e fjalëkalimit. \n Ju lutemi vendosni kodin për TV tuaj dhe e konfirmoni atë.","Ky kod është shumë i thjeshtë. \n Ju lutem përdorni numra të ndryshëm.","Urime! Konfigurimi fillestar ka përfunduar. Ju mund të modifikoni konfigurimin tuaj nëpërmjet Menusë kryesore dhe nën-menuve të ndërlidhura.","JU lutem përzgjidhni modalitetin e sigurisë:","Ju lutem, përzgjidhni mënyrën e lidhjes të rrjetit me wireless:","Rrjet"];	
var initNetCabAndDonRe = ["Nuk ka kabëll rrjeti të lidhur, ju lutemi të vendosni një kabëll rrjeti!","Nuk ka përshtatës wireless të inkorporuar ose nuk është siguruar përshtatësi wireless."];	
var initChPrompt = ["Instalimi i kanaleve TV","Ju lutem, përzgjidhni llojin e skanimit me Antenë.","Sintonizimi automatik duke u procesuar...","U gjetën kanalet e mëposhtme me Antenë:","Ju lutem, përzgjidhni llojin e skanimit me Kabëll.","Ju lutemi zgjidhni një operator nga lista e mëposhtme.","Ju lutem, konfiguroni informacionin e skanimit","U gjetën kanalet e mëposhtme me Kabëll:","Ju lutemi zgjidhni një operator nga lista e mëposhtme","Ju lutem, përzgjidhni satelitet për të skanuar ose modifikoni satelitin e përzgjedhur","Ju lutem vendosni parametrat e satelitit","Kanalet e mëposhtme janë gjetur, dhe skanimi i kanaleve mund të bëhet sërish në Kanal/SkanimKanali"];	
var initClockPrompt = ["Merrni kohën e siguruar nga rrjeti!","Ju lutemi vendosni Datën dhe Kohën:"];	
var initialOptions = ["Ambjenti","Konfigurimi i rrjetit","Përditësimi i Software","Instalim I kanalit","Ora"];	
var initialHotkeys = ["Prapa","Zgjidh","Tjetër"];	
var initLocations = ["Shtëpi","Dyqan","Bëj blerje me demo"];	
var initNets = ["Me tel","Wireless","Unë nuk kam një lidhje rrjeti"];	
var initWireManuals = ["Adresa IP","Subnet Mask","Default Gateway","DNS Primar","DNS Sekondar"];	
var initSoftUpdates = ["Përditëso tani","Përditëso më vonë"];	
var initChannelIns = ["Vazhdo","Unë nuk dua që të instaloj kanalet"];	
var initChScanTypes = ["Dixhital & Analog","Dixhital","Analog","Unë nuk dua që të bëj kërkim"];	
var initChDvbts = ["Kanalet ATV të Antenës:","Kanalet DTV të Antenës:"];	
var initChDvbcs = ["Kanalet ATV të kabllorit:","Kanalet DTV të kabllorit:"];	
var initChDvbss = ["Kanalet e Satelitit:"];	
var initChDvbSOther = ["Unë nuk dua të kërkoj satelitin"];	
var initEndConnectedStatus = ["Shkëputur","E lidhur me WiFi","E lidhur me Kabëll"];	
var initEndInstallations = "Kanalet XXXX janë instaluar";	
var initEndUpdate = ["Përditësuar"];	
var audioScenes = ["Mbi tavolinë","E montuar në mur"];	
var screenSavers = ["Nuk gjendet informacion programi, ju lutemi bëni në fillim kërkimine kanaleve!","Nuk ka sinjal","I koduar","Vetëm të dhënat","Program audio","Nuk ka Audio dhe Video","Nuk është e disponueshme","Nuk ka Teletekst","Nuk ka të dhëna të programit.","Program i mbyllur!","Program i Mbyllur!\n shtyp OK dhe shkruani kodin tuaj.","Nuk ka detaje rreth programit.","Program i dëmshëm për fëmijët.\nshtyp OK dhe vendosni kodin tuaj.","Kanal I bllokuar!","Kanal i Mbyllur!\n shtyp OK dhe shkruani kodin tuaj.","Inputi i mbyllur!\n shtyp OK dhe shkruani kodin tuaj.","Nuk suportohet!","Ky shërbim nuk është i disponueshëm për momentin","Inputi i mbyllur!","Nuk ka titull programi.","Nuk ka Funksion","Nuk ka Subtitra"];
var chBookingPromt = ["Kanali aktual ka një regjistrim të planifikuar, TV do të fillojë regjistrimin.","Eshtë gjetur një regjistrim i planifikuar.\n Kaloni tek XXXX për të regjistruar.","Kanali aktual ka një kujtesë.","U gjet një kujtesë e planifikuar.\n Kalo tek XXXX"];
var timeUnit = ["Sek","Min"];	
var ciPromt = ["Të dhënat e rrjetit kanë ndryshuar. Për ta përditësuar ju mund të kryeni një skanim përditësimi.",];	
var othersPromt = ["Ju lutem prisni...",];	
var menuOptions = ["Figura","Zëri","Kanali","Smart TV","Rrjet","Sistem","Mbështetje teknike"];	
var optionOptions = ["Figura e paracaktuar","Zë i paracaktuar","Ngrirje Figure","T-Link","Zhvendosje kohore","PVR","Lista e Programimeve","Konfigurimet","Demo"];	
var optionTLinkPromt = [["Ndezja automatike ON","Gatishmëria automatike","Menuja udhëzuesit"],["ndezur","në pritje","Volumi i Amplifikatorit"]];	
var powerPromt = ["TV do të fiket së shpejti!\n Ju lutem shtypni cilindo buton për ta anulluar."];	
var ttxLanguage = ["Perëndim EUR","Lindje EUR","Rusisht","Arabisht/Hebraisht","Farsisht","Arabisht","Bjellorusisht","Greqisht","Turqisht"];	
var ttxOptions = ["Zbuloj","Navigo nënfaqet","Gjuha","Faqe alarmi","Lajme flesh"];	
var weekday = ["E Dielë","E Hënë","E Martë","E Mërkurë","E Enjte","E Premte","E Shtunë"];	
var lcnConfflict = "Ky program ka probleme me marrjen e sinjalit. Ka një version tjeter të disponueshëm në kanalin %d";	
var inShopMode = "Televizori juaj është në modalitetin dyqan. Për modalitetin shtëpi, ju lutem zgjidhni 'Sistemi' dhe ndryshoni 'Vendndodhja' në menu.";	
var nitRefresh = "Të dhënat e rrjetit kanë ndryshuar. A doni të bëni skanim të përditësimit?";	
var picHDMIMode = ["Automatik","Grafike","Video"];	
var glassRemind = ["Ju lutemi të çiftoni syzet tuaja 3D me TV\n(Shtypni dhe mbani shtypur butonin ENERGJI në syzet 3D).","Syzet tuaja 3D janë lidhur me TV","*"];	
var pvrRemind = ["Mos e hiqni USB-në ose mos e hiqni nga priza"];	
var pvrConName = ["PVR","Informacion për programin:",["Shënim: Për të regjistruar kanal HD, zgjidhni USB drive (me shpejtësi > 5.0MB/s); për të regjistruar kanal SD, zgjidhni USB drive (me shpejtësi > 3.0MB /sek).","Videoja e regjistruar është ruajtur në skedarin \"pvr\" ."],"Ndal","Regjistroj","Orë","Minutë","Kohëzgjatja","Këshilla","Përdor butonat shigjetë për të caktuar kohëzgjatjen e regjistrimit."];	
var pvrDisRemind = "Ju lutemi futni shkopin USB për të bërë regjistrimin.";	
var pvrRemindWords = ["A doni të dilni?","A doni të ndaloni regjistrimin dhe të kërkoni dokumentat e regjistruar?","Shkopi USB u hoq.","Nuk ka hapësirë të lirë mjaftueshëm.","Nuk ka dosje të regjistruara. Fillo regjistrimin.","PVR nuk mbështetet në kanal të koduar.","Funksioni nuk është i disponueshëm","Ruajtur me Sukses.","A dëshironi të ndaloni procesin e regjistrimit , dhe të ndryshoni burimin e hyrjes së sinjalit?","TV do të përfundojë regjistrimin aktual. A doni të dilni?","Regjistrimi PVR ka nevojë për sinjal televiziv për të punuar si duhet, ju lutem kontrolloni sinjalin tuaj."];	
var pvrChangeCh = ["A dëshironi të ndryshoni kanal?","A dëshironi të ndaloni procesin e regjistrimit, dhe të ndryshoni kanal?"];	
var pvrChangeToPIN8 = ["A doni të ndryshoni burimin tek pajisja e lidhur me fishën SCART?",    "A dëshironi të ndaloni procesin e regjistrimit, dhe të ndryshoni burimin tek pajisja e lidhur me fishën SCART?"];	
var pvrChangeToCEC = ["A doni të ndryshoni burimin tek pajisja e lidhur me fishën HDMI?",   "A dëshironi të ndaloni procesin e regjistrimit, dhe të ndryshoni burimin tek pajisja e lidhur me fishën HDMI?"];	
var pvrGuideJump = ["A dëshironi që të aktivizoni EPG?","A dëshironi të ndaloni procesin e regjistrimit, dhe të aktivizoni EPG?"];	
var pvrMediaJump = ["A dëshironi që të aktivizoni Media?","A dëshironi të ndaloni procesin e regjistrimit, dhe të aktivizoni Media?"];	
var timeshiftExtra = ["A dëshironi të ndaloni zhvendosjen kohore, dhe të ndërroni kanal?","A dëshironi të ndaloni zhvendosjen kohore, dhe të ndryshoni burimin tek pajisja e lidhur me fishën SCART?","A dëshironi të ndaloni zhvendosjen kohore, dhe të ndryshoni burimin tek pajisja e lidhur me fishën HDMI?","Zhvendosja kohore nuk është e suportuar në kanale të koduar.","A dëshironi të ndaloni zhvendosjen kohore, dhe të aktivizoni EPG?","A dëshironi të ndaloni zhvendosjen kohore, dhe të aktivizoni Media?","A dëshironi të ndaloni zhvendosjen kohore, dhe të ndryshoni burimin e sinjalit?","Ju lutemi futni shkopin USB për të bërë regjistrimin.","Kapaciteti i USB drive nuk është i mjaftueshëm.","TV do të përfundojë zhvendosjen kohore aktuale. A doni të dilni?"];	
var timeshiftStatus = ["Ktheje me Shpejtësi Mbrapsh","Ndal","Luaj","Pauzë","Ktheje me Shpejtësi Përpara"];	
var pvrPowerOffRemind = ["Regjistrimi në gjendje pritje","në pritje","TV është duke regjistruar tani, a deshironi që të vazhdoni të regjistroni kur televizori është në modalitetin Pritje?"];	
var timeshiftInitTitle = "Konfigurimi i USB drive";	
var timeshiftInitReminds = ["Ky asistent konfigurimi përdoret që të përgatisë USB drive për zhvendosjen kohore. Ju lutem përzgjidhni mënyrën e konfigurimit .", "Për performancë më të mirë, ne ju rekomandojmë formatimin e USB drive. Kjo do ti fshijë të gjitha të dhënat.", "Ju lutem përzgjidhni kapacitetin e skedarit për zhvendosjen Kohore.", "Duke Formatuar", "Nuk ka hapësirë të lirë mjaftueshëm.", "Duke krijuar dosjen e zhvendosjes kohore", "Duke matur shpejtësinë", "Shpejtësia e USB drive është shumë e vogël (< %f MB/sek) për modalitetin e zhvendosjes kohore!", "USB drive është gati për tu përdorur për zhvendosje kohore. Por ne ju rekomandojmë ta ndryshoni (në shpejtësinë > %f MB/sek) për performancë më të mirë.", "USB drive është gati për tu përdorur për zhvendosje kohore."];	
var timeshiftInitButtons = ["Formatoj","Kapërcej","Anulloj","OK","Përfundoj","Dalje"];	
var timeshiftInitOther = ["Shpejtësia e USB drive:","MB/sek"];	
var selectChoice = "A jeni i sigurt që ju doni të bëni veprimin e përzgjedhur?";	
var chAtvStore = "Ruaje si XXXX";	
var chEpgFirstGenreUK = ["Film","Lajme dhe aktualitet","Zbavitje","Sport","Për fëmijë","Edukim","Stili i Jetës","Dramë"];	
var homePageTitleList = ["APPS","TV","VIDEOS","Faqe Kryesore"];	
var homePageFavAndAllName = ["Apps e preferuar","Të gjitha Apps"];	
var homePageBackUp = ["Manual elektronik","Sinjalizues"];	
var homePageRemind = ["Funksionet e plota janë në dispozicion vetëm pas lidhjes në rrjet.","TV juaj nuk ka ende ndonjë kanal. Programet janë të disponueshme pas skanimit të kanaleve.","Nuk është programuar","Kërko kanalet tani?"];	
var homePageHistory = ["Histori"];	
var miracastTitle = ["Treguesi WiFi","Pajisja TCL"];	
var miracastRemind = ["WiFi display ju lejon për të shfaqur ekranin dhe zërin e pajisjes suaj, si psh. një smartphone ose një tablet në TV tuaj, pa tel (dmth pa e lidhur me kabëll). Kjo bën të mundur për të parë në televizor, në të njëjtën kohë, atë që po shfaq smartfoni ose tableta juaj. Për shembull, ju mund të luani një video në smartphonin tuaj dhe t'a shfaqni atë në të njëjtën kohë në TV, ose të përdorni tabletën tuaj si kontrollues loje dhe përmbajtja e lojës të shfaqet në ekranin e madh të TV tuaj.","WiFi display në TV është gati, ju lutemi të filloni të ndani tani ekranin tuaj e pajisjes me Televizorin.","Duke u lidhur. Ju lutem prisni!","Lidhja dështoi!","Lidhja dështoi. Ju lutem kontrolloni!"];	
var homePageLittleWin = ["Konfigurimet","Media","Kanalet e preferuar","Smart TV","EPG"];	
var hbbtvStopRemind = ["A dëshironi që të ndaloni riprodhimin?"];	
var colorSystem = ["Automatik","PAL","SECAM","NTSC"];	
var deviceTitleTipsText = "Shtyp ≡ për me shumë informacion";	
var emptyListInfo = "Nuk ka asnjë USB drive të lidhur me TV!";	
var optionVideoListArray_1 = ["Figura e paracaktuar", "Zë i paracaktuar", "Modaliteti Play", "Mënyra e ekranit", "Modaliteti 3D",   "Butoni L-R", "Thellësia e fushëpamjes", "Subtitra", "Kolona zanore", "Titulli", "Kapitulli", "Informacion"];	
var optionVideoListArray_2 = ["Figura e paracaktuar", "Zë i paracaktuar", "Modaliteti Play", "Mënyra e ekranit",   "Subtitra", "Kolona zanore", "Titulli", "Kapitulli", "Informacion"];	
var bottomTipsText = ["Luaj/Pauzë", "Ktheje me Shpejtësi Mbrapsh", "Ktheje me Shpejtësi Përpara", "Lista e këngëve", "Konfigurimet"];	
var picturePresetArray = ["Standart", "Dinamike", "Natyrale", "Film", "Personale"];	
var videoPlayModeArray = ["Përsërit të gjitha", "Përsërit njërën", "Normale"];	
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Zmadhim i gjerë", "Zmadhim 2", "Zmadhim i gjerë 2", "Zmadhim i zgjatur", "Automatik"];	
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "Zmadhim 14:9", "Zmadhim 16:9", "Zmadhim nga afër 16:9", "Automatik"];	
var Mode3DArray = ["I fikur", "2D-në -3D", "Krah-për-Krah", "Lart-dhe-Poshtë", "Linja e ndërfaqes"];	
var videoOptionListArray = ["I fikur", "Pistë", "Subtitra", "Titulli", "Kapitulli"];	
var subMenuTitleText = "Subtitra";	
var langMenuTitleText = "Gjuha e audios";	
var titleMenuTitleText = "Titulli";	
var mode3DMenuTitleText = "Modaliteti 3D";	
var langInfoText = "Pistë";	
var STOP_RESUME_INFO = "Ndalo-Rifillo";	
var playListName = "Emër";	
var eb_tips = "Këshilla";	
var ok_button = "OK";	
var eb_info = ["Gabim në deshifrimin Audio.", "Gabim në deshifrimin Video.", "Formati Audio nuk suportohet.",    "Formati Video nuk suportohet.", "Nuk mund të hap këtë dokument.", "Gabim në Playpack , ju lutemi provoni përsëri.",   "Formati i dokumentit nuk suportohet.", "Gabim! Playeri ka ndaluar.",   "Udha e skedarit nuk ekziston ose është e pavlefshme.\n Rivendosni pajisjen ruajtese dhe provoni përsëri.",   "Vazhdo të luash prej gjendjes së mëparshme\n të rishikimit?"];	
var picturePlayErrorTips = ["Ngarkimi dështoi!!!","Figura është shumë e madhe!!!","Gabim rrjeti!!!","Gabim ndërthurje!!!","Gabim parametri!!!","Gabim i panjohur!!!"];
var frameTitleText = "Pajisje e re";	
var eb_quit_info = "A jeni të sigurtë që doni të largoheni?";	
var eb_yes = "Po";	
var eb_no = "Jo";	
var offinfo = "I fikur";	
var naInfo = "Nul";	
var consoleInfoArray = ["Ktheje me Shpejtësi Mbrapsh", "Ktheje me Shpejtësi Përpara", "Luaj/Pauzë", "Lista e këngëve"];	
var cantOperateText = ["Funksioni nuk suportohet."];	
var chapterChangeInfo = "Vetëm kapitujt nga 1 deri XXXX janë të disponueshëm.";	
var metaDataArray = ["Titulli/Edicion i Metadata:", "Kapitulli i Metadata:", "Audio Metadata:", "Nëntitrat Metadata:"];	
var metaTitleInfo = "Titulli";	
var metaChapterInfo = "Kapitulli";	
var videoLoadingInfo = "Duke analizuar...";	
var listLoadingInfo = "Duke ngarkuar...";	
var pgInfo = "Vlerësim i ulët:";	
var fileNameText = "Emër";	
var fileDateText = "Datë";	
var fileSizeText = "Përmasa";	
var fileDurationText = "Kohëzgjatja";	
var fileDirectorText = "Drejtor";	
var fileCopyrightText = "E drejta e autorit";	
var fileArtistText = "Artist";	
var fileAlbumText = "Album";	
var fileGenreText = "Gjinia";	
var fileYearText = "Viti";	
var fileGenreText = "Gjinia";	
var mainListArray = ["Të gjithë", "Figura", "Video", "Muzikë"];	
var sortArray = ["Emër", "Datë"];	
var parserArray = ["Normale", "Ripërsëritës"];	
var emptyTipsInfo = "Gabim! Nuk është gjetur asnjë skedar i suportueshëm.";	
var emptyFolderInfo = "Gabim! Nuk është gjetur asnjë skedar i suportueshëm.";	
var sortName = "Rendit sipas";	
var parserName = "analizoj";	
var divx_str1 = "DivX(R) Regjistrimi";	
var divx_str2 = "DivX(R) Çregjistrimi";	
var infor_str = "Informacion";	
var quickMenuEmptyText = "Nuk ka opsione në dispozicion.";	
var musicSoundPresetArray = ["Standart", "Film", "Muzikë", "Zë i kthjellët", "Personale"];	
var musicInformationArray = ["Emër", "Artist", "Album", "Gjinia:", "Viti:", "Këhëzgjatja:"];	
var playListName = "Emër";	
var playTipsInfo = ["Ju jeni duke luajtur dosjen e parë.", "Ju jeni duke luajtur dosjen e fundit."];	
var musicNameInfo = "Emër";	
var musicArtistInfo = "Artist";	
var musicAlbumInfo = "Informacion";	
var optionSoundPresetInfo = "Zë i paracaktuar";	
var optionBGMInfo = "Luani në sfond";	
var optionAudioOnlyInfo = "Vetëm Audio";	
var optionInfoText = "Informacion";	
var remotePhoneConnecte = "XXXX është lidhur me TV!";	
var tvRemoteTitle = "TV Remote";	
var tvRemoteDeveloper = "Aplikacioni është zhvilluar nga TCL";	
var tvRemoteDeviceTitle = "Emri i Pajisjes:";	
var remoteOption = ["Ndarje e Mediave","Kontrollim në distance","Ndihmë","Rreth","Smart Connect"];	
var remotebottom = "Ju lutem shkarkoni \"TV Remote\" për smartphonin tuaj";	
var remoteStage = ["Android","iOS"];	
var sharingReminds = ["Ndarja e fotografive, videove dhe muzikës në TV me anë të telefonit.","Hapat: \n   1. Kliko \"TV Remote\" në telefon. Lidheni telefonin me TV nëpërmjet rrjetit të njëjtë WiFi;\n   2. Kliko \"Bëj Share Medias \" për të shfletuar dosjet e medias;\n   3. Dërgo media në TV për të luajtur (me një nga alternativat e mëposhtme)","a) Terhiqe & lëshoje dosjen/skedarin tek simboli TV në krye të ekranit,\n      b) Tundni telefonin përpara TV për të luajtur dosjen e parë;\n      c) Luaj media në telefon dhe klikoni në ikonën e ndarjes me TV;","4. Ndërsa është duke u luajtur në TV, shkundni telefonin për të luajtur dosjen paraardhëse ose pasardhëse."];	
var controlReminds = ["Përdoreni telefonin si një telekomandë për të komanduar TV."," ","Hapat: \n   1. Kliko \"TV Remote\" në telefon. Lidheni telefonin me TV nëpërmjet rrjetit të njëjtë WiFi;\n   2. Kliko \"Telekomandënl\" për të komanduar TV."];	
var helpDeviceWords = "Bashkëveprim me shumë ekrane";	
var helpBottom = "Në epokën e teknologjisë cloud, pajisje të zgjuara si telefonat dhe Televizorët janë të lidhur reciprokisht me njëri-tjetrin. Bashkëndani me familjen media në shume-ekrane dhe kontrolloni TV tuaj nëpërmjet telefonit!";	
var helpReminds = ["Parapërgatitjet\n   1. Shkarkoni dhe instaloni \"TV Remote\" nga Google Play ose Apple Store.\n   2. Lidheni telefonin me TV nëpërmjet të njëjtit rrjet WiFi."," ","Telefoni i rekomanduar\n   1. CPU: mbi 800MHz\n   2. Kapaciteti: të pakten 80MB hapësirë të lirë"," ","Mohim i përgjegjësisë\n   Nëse \"TV Remote\" nuk është i disponueshëm për telefonin tuaj, ju lutem kontaktoni me prodhuesin e telefonit."];	
var helpButtons = ["I mëparshëm","Tjetër"];	
var aboutReminds = ["TV Remote","Aplikacioni është zhvilluar nga TCL"];	
var aboutExit = "Dalje";	
var smartReminds = ["Lidhje e shpejtë dhe e zgjuar midis TV dhe telefonit."," ","Hapat \n   1. Lidhni TV dhe smartphone të njëjtin LAN. Kliko \"TV Remote\" në smartphone.\n   2. Kliko \"Smart Connect\" për të skanuar kodin QR.\n   3. Me TV në modalitetin broadcast viewing, shtyp butonin INFO në TV telekomandë për 4 sekonda, një kod QR do të hapet në ekran të plotë.",];	
var smartQRReminds = ["Ju lutem klikoni \"Smart Connect\" në \"TV Remote\" në telefonin tuaj dhe skanoni kodin QR për të lidhur shpejt TV dhe telefonin.","QR code përmban informacionin LAN të llogarisë. Te lutem mbaje të sigurt diku."];	
var consoleTipArray = ["I mëparshëm","Tjetër","Telekomandë","Lista e këngëve"];	
var optionInfoArray = ["Figura e paracaktuar","Modaliteti Play","Kohëzgjatja","Efekt","Informacion"];	
var playModeArray = ["Normale","Përziej","Përsërit"];	
var durationArray = ["Shkurtra (5s)", "Mesme (10s)", "Gjata (15s)"];	
var effectArray = ["Asgjë", "Rotulloj", "Fshij djathtas", "Fshij majtas", "Fshij lart", "Fshij poshtë", "Box in", "Box out", "mënyrë të rastësishme"];	
var infoArray = ["Emri:","Përmasa:","Data:","Vend"];	
var picturePresetBarTitleInfo = "Figura e paracaktuar";	
var picturePresetBarArray = ["Standart","Dinamike","Studio","Film","Personale"];	
var upTipsInfo = "Lëviz foton";	
var consoleTipsArray = ["Telekomandë","I mëparshëm","Tjetër","Lista e këngëve","Konfigurimet"];	
var pictureMoveTipsArray = ["Shtyp DJATHTAS përsëri për të parë foton pasardhëse","Shtyp MAJTAS përsëri për të parë foton parardhëse","Shtyp POSHTË përsëri për të parë listën e fotove"];	
var optionPvrListArray = ["Figura e paracaktuar","Zë i paracaktuar", "Mënyra e ekranit", "Modaliteti 3D", "Subtitra", "Kolona zanore", "Informacion"];	
var titleSpanFirstArray = ["Kontroll & Ndërlidhje","Operacionet bazë","APPS","TV","Konfigurimet","FAQ"];	
var titleSpanSecondArray = [["Kontrollim në distance","Çelësat e panelit","Lundrimi i lehtë","Lidhje TV","Lidhje TV","Lidhje TV","Wireless"],["Mekanizëm lëshimi","Status bar","Burim"],["Duke luajtur apps","Media","TV Remote"],["Rregullo kanalin dhe volumin","Lista e kanaleve","EPG","Instalo Kanalin","Kanale të preferuara"],["Rregullim figure","Rregullim Zëri","Rregullim kanali","Përditësimi i Software","Gjuha","Kontroll Prindëror"],["Pyetjet që bëhen me shpesh","Pyetjet që bëhen me shpesh","Diagnostikimi i problemeve","Diagnostikimi i problemeve","Termat dhe kushtet"]];	
var contentSpan1_1Array = [["FUQIA:","BURIMI:","PARAMETRAT:","ALTERNATIVAT:","PRAPA:","INFORMACION:","FAQJA BAZË","DALJE:","LISTË:"],    ["E ndez ose në gjëndje pritje",        "Zgjidhni burimin e hyrjes",        "Për të shfaqur menunë Settings",        "Për të shfaqur menunë Alternativat",        "Kthehu mbrapa në mënynë të mëparshme ose dil nga një APP që eshtë duke punuar.",        "Tregon informacionin e programit",        "Për të hapur faqen kryesore smart TV",        "Kthehu mbrapa në mënynë të mëparshme ose dil nga një APP që eshtë duke punuar.",        "Shfaqni listën e kanaleve"]];	
var contentSpan1_2Array = ["Kanali i mëparshëm","Kanali i ardhshëm","Ngrejeni volumin lart","Uleni volumin poshtë","Shkon tek faqja fillestare","Konfirmo opsionin","Pritje/Ndezur"];	
var contentSpan1_3Array = ["OK/Guida","Kanali lart","Kanali poshtë","Volumi poshtë","Volumi lart","Të disponueshme si butonat shigjetë në disa funksione."];	
var contentSpan1_4Array = ["LAN","HDMI (MHL)","HDMI","HDMI (ARC)","Përshtatësi AV OUT","LAN","Smartphone","PC/Set-top box/DVD","përforcues Audio","përforcues Audio/Monitor","TV juaj nuk mund të përfshijë të gjitha prizat."];	
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Kufje","përshtatës AV IN","SPDIF","përshtatës CMP AUDIO IN","përshtatës CMP IN (YPbPr)","Pajisje USB","Pajisje USB","Kufje","DVC/Game Console/Set-top box/DVD","përforcues Audio","DVC/Game Console/Set-top box/DVD","TV juaj nuk mund të përfshijë të gjitha prizat."];	
var contentSpan1_6Array = ["Ndërfaqe e përbashkët","SD","VGA","SCART","Mini SCART","ANTENA IN","CI  CAM","Karta SD","PC","Set-top box/DVD","Antena/Kablli/Sateliti","TV juaj nuk mund të përfshijë të gjitha prizat."];	
var contentSpan1_7Array = ["Tabletë","PC","Rugëzues","Telefon","TV"];
var contentSpan1_8Array = ["Funksioni i çelësit/Energjia","Mbajeni shtypur për të shkuar te kohëmatësi i fjetjes","Poshtë","Lart","Volumi/Kanali/Burimi"];
var contentSpan2Array = [["Shtypni butonat me shigjetë për të parë faqen kryesore.","Pastaj shtypni OK për të parë një nga programet e publikuara ose hyni në App."],["Tregojnë datën, rrjetin dhe pajisjen etj në këndin e sipërm të djathtë të ekranit."],["Zgjidhni burimet e hyrjes nga pajisjet të lidhura me TV nëpërmjet portave të ndryshme, të tilla si TV, AV, HDMI etj."]];	
var contentSpan3Array = ["Shijoni dhe shikoni Apps tuaja të preferuara përmes faqes Smart TV.","Shikoni fotot, videot dhe luani muzikë nga një pajisje USB.","Lidhni TV tuaj dhe smartphone ose tabletin në të njëjtën LAN.","Kliko nScreen për TV Remote në smartphone ose tablet.","Ndani fotot, video dhe muzikë me familjen tuaj në multi-ekranet dhe kontrolloni TV nëpërmjet smartphone tuaj."];
var contentSpan4Array = [["Press P+/P- për të kaluar kanalet.","Shtypni V+/V- për të rregulluar volumin."],["Shtypni LIST në telekomandë për të parë listimin e kanaleve.","Shtypni LART/POSHTË për të zgjedhur kanalin tuaj."],["EPG është një udhëzues në ekran që tregon programet e planifikuara televizive. Ju mund të lundroni, zgjidhni, shikoni dhe regjistroni programe."],["Kërkoni dhe instaloni kanalet."],["Shtoni ose redaktimi i kanaleve të preferuara tuaj në listën e Channel."]];	
var contentSpan5Array = ["Shijojini programet tuaja të preferuara përmes video-Apps."];	
var contentSpan6Array = [["Shtypni Opsion pastaj zgjidhni konfigurimet që tregojnë mundësitë e vendosjes e sistemit.","Hyni në parametrat Picture për të rregulluar vlerat."],["Shtypni Opsion pastaj zgjidhni konfigurimet që tregojnë mundësitë e vendosjes e sistemit.","Hyni në parametrat Zëri për të vendosur alternativat."],["Shtypni Opsion pastaj zgjidhni konfigurimet që tregojnë mundësitë e vendosjes e sistemit.","Shkruani parametrat Kanali për të vendosur alternativat."],["Përditësoni TV tuaj, kur një version i ri software është në dispozicion."],["Ju mund të zgjidhni gjuhën tuaj të preferuar të menusë."],["Mundëson prindërve të bllokojnë kanalet apo programet të cilat janë të papërshtatshme për fëmijët."]];	
var contentSpan7_1Array = [["Nuk ka foto, asnjë zë","Kontrolloni nëse siguresa ose automati i sigurisë është në gjëndje pune.","Vendosni një pajisje tjetër elektrike në prizë për t'u siguruar se është duke punuar, ose është e ndezur.","Spina nuk bën mirë kontakt me Prizën.","Kontrollo burimin e sinjalit."],["Figura normale, nuk ka zë","Shtypni vëllim V+ butonin për të rritur volumin.","Konfigurimi i zërit është i pasaktë.","Gabim sinjali nga transmetimi."],["Zëri normal, nuk ka figurë.","Rregullo ndriçimin dhe kontrastin.","Gabim sinjali nga transmetimi.","Kontrolloni nëse është në modalitetin vetëm audio."]];	
var contentSpan7_2Array = [["Ndërhyrje e frekuencave radio","Kjo interference prodhon valëzime lëvizëse ose vija diagonale, dhe në disa raste, humbje të kontrastit në figurë. Gjeni dhe hiqni burimin e radio interferencës."],["Nuk ka ngjyra","Rregullo parametrat e ngjyrave.","Provoni një kanal tjetër. Programi mund të jetë vetë bardh e zi."],["Telekomanda nuk punon","Zëvendësoni bateritë.","Bateritë nuk janë vendosur si duhet. Priza kryesore e TV nuk është e lidhur."]];	
var contentSpan7_3Array = [["Nuk shfaqet përmbajtja e pajisjes USB","Kontrolloni nëse pajisja USB është e përshtatshme me TV.","Kontrolloni nëse formatet e audios dhe të fotografisë janë të suportuar nga TV."],["Duke luajtur pa asnjë zë","Formati audio e video nuk është i suportuar nga TV player."],["Dosjet nuk luajnë mirë.","Performanca transferimit e pajisjes USB mund të kufizojë normën transferimit të të dhënave në TV."]];	
var contentSpan7_4Array = [["Çfarë gjëje duhet të i kushtoj vëmendje kur të bëj përditësimin e software","Nuk duhet të ndërpritet energjia kur po përditësohet software.","Shmangni çdo lloj veprimi me telekomandë, kur software është duke bërë përditësimin.","Jini të durueshëm, sepse procesi i përditësimit software mund të marrë pak më shumë kohë."],["Nuk ka ndryshime të dallueshme të ndërfaqes TV pas përditësimit të software.","Nën kushte të caktuara, përditësimi SW jo vetëm mund të rinovojë ose të shtojë funksione të reja, por edhe mund të përmirësojë performancën e televizorit pa ndryshime të dallueshme të ndërfaqes. Gjithashtu, ndonjëherë ndërfaqja e TV mund të mbetet e paprekur."]];	
var termsTitle = "Termat dhe kushtet";	
var termsConditions = ["Përmbajtja dhe shërbimet (kolektivisht \"Applikacioni i Liçensuar\") vënë në dispozicion për ju nëpërmjet këtij televizori (kjo \"Pajisje \") janë të liçensuar, nuk shiten, për ju për përdorim vetëm në bazë të këtyre termave dhe kushteve. Ofruesit e Aplikacionit të Liçensuar (secili një \"Furnizues Aplikacioni\") rezervojnë të gjitha të drejtat që nuk ju janë dhënë shprehimisht juve. \n 1.Qëllimi i liçencës \n Liçensa e dhënë për ju për një Aplikacion të Liçensuar nga ofruesi përkatës Aplikacionit është e kufizuar në një licencë jo të transferueshme për t'u përdorur vetëm në Aplikacionin e Liçensuar në pajisjen që ju posedoni ose kontrolloni. Aplikacionin e Liçensuar, ju nuk lejoheni që t'a shpërndani ose ta vini në dispozicion në një rrjet, ku ai mund të përdoret nga shumë pajisje të në të njëjtën kohë. Ju nuk mund t'a jepni me qira, me hua, ta shisni, ta shpërndani ose ta nënkontraktoni Aplikacionin Liçensuar. \n Ju pranoni dhe bini dakord që i gjithë Aplikacioni i Liçensuar dhe gjithcka që përfshihet në këtë dokument dhe që është e aksesueshme nëpërmjet Pajisjes i përkasin ofruesit të Aplikacionit dhe mbrohen nga ligjet në fuqi për mbrojtjen e pronës intelektuale. Ju nuk lejoheni që të modifikoni, kopjoni, zbërtheni, të ushtroni inxhinieri inverse, të çmontoni, të publikoni, të ngarkoni, të postoni, të transmetoni, të përktheni, të përpiqeni për të nxjerrë kodin burimor të pajisjes, të krijoni punë derivate, ose ndryshe të shpërdoroni çdo Aplikacion të Liçensuar ose cdo përditësim ose ndonjë pjesë të saj . Nëse ju shkelni këtë kufizim, ju mund t'i nënshtroheni ndjekjes penale dhe pasojave që vijnë nga ligji. Kushtet e licencës do të prevalojnë edhe mbi çdo përmirësim të siguruar nga ofruesi i Aplikacionit që zëvendësojnë dhe/ose plotësojnë Aplikacionin e Liçensuar origjinal, përveç rasteve kur një përmirësim i tillë është shoqëruar me një licensë të veçantë, rast në të cilin do të prevalojnë kushtet e reja të kësaj license. Ju do të jeni përgjegjësit e vetëm për të gjitha shpenzimet (nëse ka) që duhen për përmirësimin e Aplikacionit të Liçensuar. \n 2. Materialet e palëve të treta \n Aplikacioni i Liçensuar mund t'ju mundësojë akses në shërbimet e ofruesit të Aplikacionit dhe si dhe të palëve të treta dhe në faqet e internetit (kolektivisht të \"Shërbime\"). Ju e kuptoni se duke përdorur ndonjë prej shërbimeve, ju mund të hasni përmbajtje që mund të konsiderohen ofenduese, të pahijshme, apo të pakëndshme, që përmbajtja e të cilave mund ose nuk mund të identifikohet që ka gjuhë të ndyrë, dhe se rezultatet e çdo kërkimi ose hyrje në një URL të veçantë automatikisht dhe pa dashje mund tju gjenerojë lidhje ose referenca tek materiale të pakëndshme. Megjithatë, ju pranoni që prodhuesi i Pajisjes (e \"Prodhuesi\") dhe Ofruesi Aplikacionit nuk do të kenë asnjë përgjegjësi ndaj jush për përmbajtjen që ju mund tju duket ofenduese, e pahijshme, ose e pakëndshme. \n Duke përdorur Shërbimet, ju pranoni dhe bini dakord se Prodhuesi nuk është përgjegjës për shqyrtimin ose vlerësimin e përmbajtjes, saktësisë, plotësinë, afateve kohore, vlefshmërisë, pajtueshmërisë me të drejtën e autorit, ligjshmërisë, cilësisë ose të çdo aspekti tjetër të këtyre shërbimeve. Prodhuesi nuk garanton ose miraton dhe nuk hamendëson dhe nuk do të ketë asnjë detyrim apo përgjegjësi për ju ose ndonjë person tjetër për ndonjërin nga shërbimet. \n Ju pranoni dhe bini dakord se Shërbimet mund të përmbajnë përmbajtje të patentuar, informacione dhe materiale (kolektivisht \"Materiale të palëve të treta\") që janë të mbrojtura nga ligji për pronësinë intelektuale, dhe ligje të tjera, dhe se ju në asnjë mënyrë nuk do t'i përdorni këto materiale të palëve të treta, përveç se për përdorimin e lejuar të Shërbimeve. Ju bini dakord për të mos riprodhuar, modifikuar, dhënë me qira, dhënë hua, shitur dhe shpërndarë Materiale të palëve të treta ose punë të krijuara apo të prejardhura prej tyre në çdo mënyrë, dhe nuk do të keqpërdorni Shërbimet në asnjë lloj mënyre të paautorizuar. Për më tej, ju pranoni që në asnjë mënyrë të mos i përdorni Shërbimet që të ngacmojnë, abuzojnë, ndjekin, kërcënojnë, përgojojnë ose që në cdo formë cënojnë apo shkelin të drejtat e ndonjë pale tjetër, dhe se Prodhuesi nuk është në asnjë mënyrë përgjegjës për ndonjë përdorim të tillë nga ju, as për ndonjë ngacmim, kërcënim, shpifje, mesazh ofendues ose të paligjshëm, ose transmetim që ju mund të merrni si rezultat i përdorimit të ndonjërit prej këtyre shërbimeve. \n 3.Pa Garanci\n Ju pranoni dhe bini dakord se përdorimi i Aplikacionit të Liçensuar dhe Shërbimeve bëhen vetëm me përgjegjësinë tuaj. Të gjitha Aplikacionet e Liçensuara dhe Shërbimet ofrohen \"siç është\" dhe \"si në dispozicion\" pa garanci të çfarëdo lloji, të shprehura apo të nënkuptuara. Prodhuesi shprehimisht çlirohet nga përgjegjësia mbi të gjitha garancitë dhe kushtet në lidhje me Aplikacionet e Liçensuara dhe Shërbimet, qoftë të shprehura apo të nënkuptuara, duke përfshirë por pa u kufizuar në, garancitë e tregtimit, të një cilësie të kënaqshme,të përshtatshmërisë për një qëllim të veçantë, të saktësisë, të shijimit të qetë, dhe mos-shkelje e të drejtave të palëve të treta. Prodhuesi nuk garanton saktësinë, vlefshmërinë, afatet kohore, ligjshmërinë, ose plotësinë e çdo Aplikacioni të Liçensuar ose Shërbimeve të vëna në dispozicion përmes kësaj pajisjeje dhe nuk garanton se Pajisja, Aplikacioni i Liçensuar ose Shërbimet do të përmbushin kërkesat tuaja, ose se funksionimi i Aplikacionit të Liçensuar ose Shërbimeve do të jetë i pandërprerë ose pa gabime, apo se defektet në Aplikacionin e Liçensuar ose Shërbimet do të korrigjohen. Nëse Aplikacioni i Liçensuar apo shërbimet dalin me defekt, ju do të merrni përsipër të gjithë koston e të gjitha Shërbimeve të nevojshme, riparimet ose korrigjimet. \nJu pranoni dhe bini dakord që Applikacioni i Liçensuar dhe Shërbimet mund të ndryshohen, pezullohen, hiqen, ndërpriten ose përfundohen, ose aksesi mund të jetë i pamundur, në çdo kohë, pa njoftim, dhe Prodhuesi nuk bën asnjë përfaqësim ose garanci se çdo përmbajtje apo shërbim i përfshirë në Aplikacionin e Liçensuar dhe Shërbimet do të mbetet të disponueshme për çdo periudhë kohore. Përmbajtja dhe shërbime të tilla janë të transmetueshme nga palët e treta me anë të rrjeteve dhe pajisjeve të transmetimit mbi të cilat Prodhuesi nuk ka kontroll. Pa kufizuar përgjithësimin e sa u tha më lart, Prodhuesi shprehimisht çlirohet nga çdo përgjegjësi apo detyrim për çdo ndryshim, ndërprerje, pamundësi, heqjen apo pezullimin e çdo përmbajtje apo shërbimi të vënë në dispozicion nëpërmjet kësaj pajisje. Siguruesi i Aplikacionit dhe ofrues të tjerë të Shërbimeve rezervojnë të drejtën të ndryshojnë, pezullojnë, fshijnë, ose çaktivizojnë qasje në çdo Aplikacion të Liçensuar ose Shërbim në çdo kohë pa paralajmërim. Prodhuesi mund të vendosë kufizime për përdorimin apo qasjen në Aplikacionin e Liçensuar apo Shërbimeve të caktuara, në çdo rast dhe pa njoftim ose përgjegjësi. \nProdhuesi nuk është as përgjegjës as mban përgjegjësi për shërbimin e konsumatorëve në lidhje me Aplikacionin e Liçensuar dhe Shërbimet. Çdo pyetje apo kërkesë për shërbim në lidhje me Aplikacionin e Liçensuar dhe Shërbimet duhet të bëhen direkt tek ofruesi përkatës.\n 4. Mbledhja dhe përdorimi i informacionit \nJu pranoni që Prodhuesi, Ofruesi i Aplikacionit dhe ofruesit e tjerë të Shërbimeve mund të mbledhin dhe të përdorin të dhënat teknike dhe informacione që kanë të bëjnë, duke përfshirë por jo vetëm, me informacione teknike në lidhje me këtë pajisje, sistemin dhe software të aplikacionit dhe pjesëve të saj periferike për të lehtësuar dhënien e përditësimit të programeve, mbështetjen e produkteve dhe shërbimeve të tjera për ju (nëse ka) në lidhje me pajisjen dhe Aplikacionin e Liçensuar. Prodhuesi, Ofruesi i Aplikacionit dhe ofruesit e Shërbimeve mund të përdorin një informacion të tillë, për aq kohë sa ajo është në një formë që nuk ju identifikon ju personalisht, për të përmirësuar produktet e tyre apo për të ofruar shërbime ose teknologji për ju. \n 5. Mungesa e disa veçorive \nPër shkak të kufizimeve të Ofruesit të Aplikacionit, detaje të caktuara, aplikimet, dhe shërbimet mund të mos jenë në dispozicion për këtë pajisje (duke përfshirë pajisjet e saj periferike) ose në të gjitha territoret. Disa veçori për këtë pajisje mund të kërkojnë pajisje shtesë periferike ose tarifa abonimi të cilat shiten veçmas. \n 6.Kufizimi i detyrimeve\n Prodhuesi nuk do të jetë përgjegjës për aq sa i lejon ligji në fuqi, në asnjë rrethanë, duke përfshirë edhe neglizhencën, qoftë në kontratë ose shkelje e një të drejte, për dëmet direkte, indirekte, të rastësishme, të veçantë ose rrjedhimore , tarifat e avokatit, shpenzimet, ose çdo dëmtim tjetër që rrjedhin nga, ose në lidhje me, çdo informacion që gjendet në, ose si rezultat i përdorimit të pajisjes, çdo Aplikacioni të Liçensuar apo ndonjë Shërbimi nga ju ose ndonjë palë e tretë, edhe në qoftë se jeni këshilluar për mundësinë e dëmeve të tilla."];	
var noChannelListRemind = ["Nuk u gjet asnjë kanal. Lista e kanaleve do të jetë e pranishme, mbasi të ketë mbaruar kërkimi i kanaleve.","Skanim i kanaleve"];	
var closeSubtitleRemind = "Funksioni do të jetë i pranishëm kur titrat të jenë Off. A dëshiron ta vendosësh tani?";	
var estickerTitles = ["Realitet i lartë figure","Ngjyra që vijnë në jetë","Lëvizje të gjalla madhështore","Cilësi dinamike e figurës","Dimensionim në shkallë SR UHD","Përjeto botën 3D","Performancë e shpejtë","Përmbatje e ardhshme 4K","Shijo botën online","Akseso përmbajtje ekstra","Sintonues të integruar dixhital","Lidh të gjitha paisjet","Burime të ndryshme 4K","Përmbajtje USB","WIFI i ultra e shpejtë","Përmbajtje celulare në TV","Përmbajtje paisje celulare","Përmbajtje lokale","Miratuar nga DivX","Pamje e përkryer","Kanali Gati","TDT Premium"];	
var estickerDescriptions = ["Eksperiencë e mahnitëshme shikueshmërie falë imazheve 4 herë më të detajuar se Full HD në eknranin UHD","Spektri i gjerë i ngjyrave përcjell emocion në çdo skenë me të kuqet më të gjalla dhe të gjelbërtat si smeraldi.","Interpolim i ekranit 4K dhe ndriçimi i pasëm për të luftuar problemet e mjegullimit të pamjes prej lëvizjeve.","Gjallëria e fotove origjinale për të zgjeruar ekspresionin dinamik me kontrast brilant","Shijo spektakle TV dhe disqe blu-ray me të gjalla se më parë falë teknologjisë Super Resolution.","Përjeto TV 3D ready dhe shiko përmbajtje të ndryshme 3D","Më shumë eksperiencë argëtimi të shijueshme me Quad Core për një ndërveprim sa më të butë dhe performancë të përmirësuar","HEVC (H.265) mbështetje codec për standardin e ardhshëm të video shpërndarjes 4K","Shumëllojshmëri aplikacionesh online, Shërbime VOD, catch-up TVs dhe navigim në internet","Shiko më shumë me shërbimet dhe përmbatjet shtesë nga transmetuesit tuaj të preferuar","Aksesim të kanaleve të TV, në high definition pa sete plotësues top boks","I lehtë për t'u lidhur me shumë paisje dixhitale të pranishme në shtëpi","TV gati për të ardhmen, mund të luajë 4K 50/60Hz nëpërmjet HDMI 2.0 me HDCP 2.2","Video ose foto të lidhura direkt me porten USB, HDD ose kamera në ekranin e madh me rezulucion 4K","Gjenerata e fundit 2x2 MIMO dhe standarti AC ofrojnë shpejtësi interneti të pakrahasueshme","Shijoni fotot, videot, aplikacionet nga paisjet celulare ne ekranin e madh falë teknologjisë screen mirroring","Foto, video, aplikacione nga telefonat smarfone ose tabletat, mund të shfaqen në ekranin e madh.","Shfaq në ekranin e madh përmbajtje lokale si; foto, video nga paisje të cilat janë të lidhura me rrjetin (internetin)","Shiko filma të blerë ose me qera që mbrohen nga DivX","Kornizë ultra e ngushtë dhe dizajn super i hollë","Testuar dhe miratuar nga Canal+","TDT Premium i testuar dhe miratuar"];	
var eManualTextArray = ["Manual elektronik","Të gjitha grafikat brënda janë vetëm për përfaqësim."];	
var frontPanelRemind = "Paneli ballor është i kyçur.";	
var eRPRemind = "Modaliteti Shop nuk i përmbush parametrat e ERP. A jeni i sigurtë që dëshironi ta përzgjidhni?";	
var noRelatedChannel = "Nuk ka ndonjë kanal të ngjashëm";	
var option0624Name = ["BOP","BFS","Ngjarje pas ngjarje","GetUserID","BGM","Rivendos gjithçka","Rivendos dyqanin","NRM","DVB-T2 dhe përzgjedhja e Shtetit","Modaliteti HbbTV"];	
var DVBT2AndChoice = ["I ndezur","Sipas shtetit","I fikur"];	
var hbbtvServiceRemind = "Shërbimi HbbTV është duke ardhur së shpejti.";	
var insertWord = "Futni";	
var viewDetail = "Shiko detajet";	
var remindOAD = "Përditësim Software. Një përditësim i ri software mund të ekzistojë në një kanal tjetër. Nëse pranoni ta shkarkoni, TV do të ndërrojë kanalin automatikisht. A dëshironi ta bëni tani?";	
var LEDStatus = ["Duke pulsuar", "Normale","I fikur"];	
var netFlixRemind = "Ky fuksion do të ndërpritet, aksesi në shërbimet e Netflix do të fillojne kur ju të futeni përsëri.";	
var ESNExplanation = "Numri serial elektronik";	
var resetShopRemind = "Sistemi është duke u ristartuar, ju lutem mos e fikni TV";	
var initialSelectOption = "Ju lutem zgjidhni një opsion:";	
var databaseRemind = "Sistemi ka identifikuar bazën e të dhënave si të dëmtuar për arsye të panjohura dhe e ka rindërtuar automatikisht, shtypni „OK“ për të vazhduar";	
var Deactivation = "Çaktivizim";	
var oadFutureRemind = "Software update. \nNjë Software i ri i rekomandar do të jetë I dsponueshem në %s. Përditësimi mund të kërkojë disa kohë dhe ekrani mund të bëhet i zi. Mos e fikni marrësin gjatë përditësimit. Nëse e pranoni këtë përditësim, ju lutem lëreni marrësin ndezur në kohën e paracaktuar. A dëshironi të merni këtë përditësim?";	
var bt_title = "Bluetooth";	
var bt_soundOutPutName = "Daljet e zërit";	
var bt_soundOutPutTV = "Bokset e TV";	
var bt_soundOutPutBT = "Paisjet bluetooth";	
var bt_soundOutPutBT_TV = "Bluetooth dhe TV";	
var bt_refreshBarName = "Paisjet";	
var bt_settingTips_On = "Ndizni funksionin bluetooth dhe skano për gjetur paisjet.";	
var bt_settingTips_Finding = "Duke gjetur paisje të disponueshme...";	
var bt_settingTips_NoDevice = "Nuk ka paisje të disponueshme.";	
var bt_deviceList_State_NoConnect = "I pa lidhur";	
var bt_deviceList_State_Connecting = "Duke u lidhur...";	
var bt_deviceList_State_Connected = "Lidhur";	
var bt_deviceList_State_Paired = "Çiftuar";	
var bt_deviceList_Conncect_Failed_Tips1 = "Lidhja dështoi.";	
var bt_deviceList_Conncect_Failed_Tips2 = "Ju lutemi konfirmoni funksioni XXX bluetooth është ON";	
var bt_deviceList_Conncect_Success = "Lidhur me paisjen Bluetooth.";	
var bt_deviceList_Disconncect_Success = "Shkëputur nga pajisja Bluetooth.";	
var bt_deviceList_Disconnect = "A jeni i sigurt, që dëshironi të shkëputeni nga XXX?";	
var bt_tipsTitle = "Këshillë";	
var bt_bluetooth_Pairing_Title = "Lidhu me anë të bluetooth";	
var bt_bluetooth_Input_Pin = "Ju lutem, vendosni kodin PIN:";	
var bt_bluetooth_Output_Pin_Tip = "Vendosni PIN-in XXXX me anë të tastjerës.";	
var bt_bluetooth_Pin_Wrong_Tip = "Pin i gabuar";	
var bt_bluetooth_Remove_Pair_Title = "Pyetje";	
var bt_bluetooth_Remove_Pair_Ask = "Fshije këtë paisje?";	
var audioDescriptionName = ["Përshkrimi i audios","Bokse","Volumi i Bokseve","Kufje","Volumi i Kufjeve","AD Volumi","Paisje BT","Volumi i Paisjes BT","Amplifikator","Bokse"];	
var audioDescriptionOptions = ["I fikur","Normale","Përshkrimi i audios"];	
var volumeOffRemind = "Ju lutem vendos XXX \"On\" ne menunë e Konfigurimeve.";	
var mEPSRemind = "Modaliteti i dyqanit nuk plotëson kërkesat e MEPS. A jeni i sigurtë që dëshironi ta përzgjidhni?";	
var parentRatingAUOptions = ["S'ka bllokime", "Blloko G dhe lart (opsionale)", "Blloko PG dhe lart", "Blloko M dhe lart", "Blloko MA dhe lart", "Blloko AV dhe lart",  "Blloko R dhe lart", "Bllokoji të gjitha"];	
var mEPSTips = ["Modaliteti aktual i figurës nuk i plotëson kriteret e MEPS\n, rekomandohet modaliteti standard.",    "Televizori juaj është në modalitetin dyqan.\n për modelin Shtëpi, Ju lutem shikoni menunë e Konfigurimeve."];	
var switchSourceRemind = "E vendosur. A dëshironi ta ndryshoni?";	
var footballModeName = "Modaliteti Sport";	
var resetStadium = "Stadium";	
var atvSearchMenu = "Kërkim manual ATV";	
var dtvSearchMenu = "Kërkim manual Dtv";	
var settingNoticeSourceName = "Burimi automatik";	
var smartTVOptions = ["Portali smart TV","HbbTV","Shpërnda&Shiko","Treguesi WiFi","Politikat e smart TV-së",                            "Rrjeti në pritje","Ristarto smart TV"];	
var supportOptions = ["Diagnostikim nga distanca","Na kontaktoni"];	
var tvDoctor = ["Diagnostikim nga distanca 2.0","App-i është në dispozicion vetëm për Smart TV tuaj për të kryer diagnostikime dhe për të përmirësuar përvojën e produktit. Të dhënat operative të TV dhe informacioni i modelit, që do të mblidhen nga ky aplikacion dhe do të ngarkohen në një server, do të përdoren për të zgjidhur problemin. Informacioni juaj personal nuk do të jetë i aksesueshëm. Sigurohuni që TV juaj të jetë i lidhur siç duhet me internetin.","Diagnostikimi lokal","Ju lutemi, ndiqni këshillat e stafit ndërkohë që diagnostikimi fillon.","Diagnostikim nga distanca","Ju lutem sigurohuni që stafi mbështetës është në linjë.","Numri serial:","&nbsp;&nbsp;&nbsp;&nbsp;User ID:","Duke u lidhur...","E lidhur, ju lutemi mbani rrjetin të lidhur.","E pamundur të hyjmë në internet, ju lutem kontrolloni lidhjen rrjetit.","Dalje"];	
var ClosedcaptionName = "Titull i mbyllur";	
var sysCCOptions = ["Modaliteti CC","CC analoge","CC dixhitale","Mbivendosje","Titull i mbyllur"];	
var sysCCmodeOption = ["I fikur", "I ndezur", "Ndezur kur është Mute"];	
var sysanalogCCOption = ["I fikur", "CC1", "CC2", "CC3", "CC4", "Teksti1", "Teksti2", "Teksti3", "Teksti4"];	
var sysdigitalCCOption = ["I fikur", "Shërbimi 1", "Shërbimi 2", "Shërbimi 3", "Shërbimi 4", "Shërbimi 5", "Shërbimi 6", "Shërbimi 7", "Shërbimi 8"];	
var syssuperimposeOption = ["I fikur", "Shërbimi 1", "Shërbimi 2", "Shërbimi 3", "Shërbimi 4", "Shërbimi 5", "Shërbimi 6", "Shërbimi 7", "Shërbimi 8"];	
var sysCCOPtionItems = ["*","*","*","*","*","*","*","*","*","*"];	
var sysCCOtionMode = ["Personalizim","*"];	
var sysCCOptionFontStyle = ["*","*","*","*","*","*","*","*"];	
var sysCCOptionFontSize = ["*","*","*","Normale"];	
var sysCCOptionFontEdgeStyle = ["*","Asgjë","*","*","*","*"];	
var sysCCOptionFontColor = ["*","*","*","E Kuqe","Jeshile","Blu","E verdhë","E purpurt","Bojëqielli"];	
var sysCCOptionFontOpacity = ["*","*","Duke pulsuar","*","*"];	
var contactUsOption = ["Na kontaktoni",    "Ju lutem, kontaktoni Na nëse hasni probleme përdorimi me këtë paisje.",    "Na kontaktoni",    "Faqja e Web-it: Vizitë",    "Numri i call center:","Informacioni i produktit","Emri i Modelit:",    "Versioni i Software:","*","ID e përdoruesit:","ID e projektit:",    "Lloji i klientit:","Adresa MAC në lidhje valore:","Adresa MAC në lidhje me tel:","Netflix ESN:","Skano informacionin në telefonin tuaj.",    "Pastaj zgjidhni shtetin tuaj."];
var homePageWords = ["Histori", "Kërkim"];	
var titlePageWords = ["Shtëpi", "VIDEOS","TV","APPS"];	
var videosPageWords = ["Film", "Sport","Muzikë","Popullore","Lojë","Edukim","Lajme"];	
var statusPageWords = ["USB","Konfigurimet","WiFi","Me tel"];	
var searchPageWords = ["Kërkim", "Kërkimet më popullore:","Shfaqje, Filma, Njerëz..."];	
var resultSearchPageWords = ["Rezultati për"," ","Ju lutem, provoni fjalë kyçe të tjera.","më vjen keq, ende nuk është gjetur asnjë video për"," "];	
var historyPageWords = ["Histori", "Shtyp","për të fshirë historinë","Fshi vetëm një","Fshiji të gjitha","Dje","Sot","Ju ende nuk keni parë asnjë video.","Fshirja e historisë të shikimeve u realizua me sukses."];	
var channelPageWords = ["Më vjen keq, nuk është gjetur asnjë video ende."];	
var virtualRemoteValues = ["1","2","3","4","5","6","7","8","9",                          "Zvogëlo-","0","Zmadho+",                          "Dalje","0","*",                          "Listë","0","Tekst",                          "Udhëzues","Hyr","Dalje",                          "Menu","Subtitra","Informacion",                          "Ndal",                          "Informacion","Menu","Dalje",                          "Dalje"                          ];	
var sportsModeInitReminds = ["Ky asistent konfigurimi përdoret që të përgatisë USB drive për Modalitetin Sport. Ju lutem përzgjidhni mënyrën e konfigurimit.",
							 "Ju lutem përzgjidhni kapacitetin e skedarit për Modalitetin Sport.", 
							 "Duke krijuar skedarin  Modalitet Sport", 
							 "Shpejtësia e USB drive është shumë e vogël (< %f MB/sek) për Modalitetin Sport!", 
							 "USB drive është gati për t'u përdorur për Modalitetin Sport. Por ne ju rekomandojmë ta ndryshoni (në shpejtësinë > %f MB/sek) për performancë më të mirë.", 
							 "USB drive është gati për tu përdorur për Modalitetin Sport."];	
var sportsModeExtra = ["A dëshironi që të ndaloni Modalitetin Sport dhe të ndërroni kanal?",
						"A dëshironi që të ndaloni Modalitetin Sport, dhe të ndërroni burimin tek pajisja e lidhur me fishën SCART?",
						"A dëshironi që të ndaloni Modalitetin Sport, dhe të ndërroni burimin tek pajisja e lidhur me fishën HDMI?",
						"Modaliteti Sport nuk mbështetet në Kanalin e Koduar.",
						"A dëshironi të ndaloni Modalitetin Sport, dhe të aktivizoni EPG?",
						"A dëshironi të ndaloni Modalitetin Sport, dhe të aktivizoni Media?",
						"A dëshironi të ndaloni Modalitetin Sport, dhe të ndryshoni burimin hyrës të sinjalit?",
						"TV do të përfundojë Modalitetin Sport aktual. A dëshironi të dilni?"];	
var remoteControlNote = "*";	


var textArray = ["Volumi","Kanali","Burim","Switch/Power","Udhëzues","seconds to Power OFF"];
var guideArray = ["VOL-","VOL+","CH-","CH+","Pre","Tjetër"];
var favChannelListRemind = ['Nuk ka kanale të preferuar. Ju lutem shkoni tek listat e tjera dhe Përdorimi "Butonin Jeshil" për të shtuar kanale të preferuar.'];
var proxySetting = ["Cilësimet Proxy (IP së rreme)","Portë"];
var powerOffShop = ["Ju rekomandojmë që të përdorni mënyrën Shop, a dëshironi që të vazhdoni?"];
var tcastTextPageWords = ["Plenty of videos, rich applications","TV remote, right at your fingertips","Great contents, share on a large screen"];
var tcastOtherWords = ["Scan QR code and download T-Cast","Network connected to TV","TV name","T-Cast"];
var hbbtvWords = ["HbbTV Setting","HbbTV","Cookies","Thrid Party Cookies","Device ID","Tracking"];
var hbbtvTrackingWords = ["YES","NO","Don't care"];
var eStickerTipWords = ["Magazinimi është nën 500M, a do të dëshironit që të fshini videot në regjimin Demo për të përftuar më shumë hapësirë?"];
var delEstickerVideoRemid = ["Videoja është fshirë me sukses"];
var selectSatRemind = "Може да изберете до 20 сателити!";


