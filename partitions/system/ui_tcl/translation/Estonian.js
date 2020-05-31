
var all_country 	= ["Austraalia","Austria","Belgia","Bulgaaria","Horvaatia","Tšehhi Vabariik","Taani","Soome","Prantsusmaa","Saksamaa",
						"Kreeka","Ungari","Itaalia","Luksemburg","Holland","Norra","Poola","Portugal","Rumeenia","Venemaa",
						"Serbia","Sloveenia","Hispaania","Rootsi","Šveits","Suurbritannia","Uus-Meremaa"," "/*Arab*/,"Eesti"," "/*Hebrew*/,
						"Läti","Slovakkia","Türgi","Iirimaa","Japan","Filipiinid","Thailand","Maldives","Uruguay","Peru",
    					"Argentina","Chile","Venezuela","Ecuador","Costa Rica","Paraguay","Bolivia","Belize","Nicaragua","Guatemala",
						"Hiina","Taiwan","Brazil","Canada","Mexico","United States","South Korea","Romania","Vietnam"/*新添加的，底层结构体中没有*/,"Ukraina"/*新添加的，底层结构体中没有*/,
    					"Iran","Iraq"," ","Kazakhstan","Uzbekistan"," ","Kyrgyzstan","Algeria","Egypt","Tunisia",
    					"Tanzania","Kenya","Pakistan","Indonesia","Kuwait","Saudi Arabia","Qatar","Israel","Lebanon","bahrain",
    					"Angola","Congo","India","Turkmenistan","Colombia","Mongolia","Bangladesh","Nepal","Sri Lanka","North Korea",
    					"Moldova","Polynesia","EI Salvador"," ","Fiji","Liberia","Jordan","Myanmar","Ghana","Georgia",
    					"Armenia","Oman","yemen","Syria","Palestine","Afghanistan","Morocco","benin","IvoryCoast","Nigeria",
    					"Sudan","Ethiopia","Zambia"," ","South Africa","mozambique","Libya","Albaania","Belarus","Iceland",
						"Leedu","Mauritius","Dubai","UAE","Tajikistan","Bengal","Bosnia ja Hertsegoviina","Küpros","Kosovo","Makedoonia",
						"Malta","Montenegro","Cameroun","Singapore","Malaysia","NewCaledonia","Suriname","Jamaica","Curacao","Aruba",
    					"Antigua & Barbuda","St Lucia","Barbados","St Vincent","St Kitts & Nevis","Grenada","Trinidad & Tobago","Guyana","Puerto Rico","Panama",
    					"Dominica","Cuba","Honduras","Haiti","Cambodia","Zimbabwe","Dominican Republic","Bonaire","Somalia","Azerbaijan",
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
				
var all_language 	= ["Tšehhi","*","Taani","*","*","Saksa","Inglise","Hispaania","Kreeka","Prantsuse",
						"Horvaatia","*","Itaalia","Ungari","Hollandi","Norra","Poola","Portugali","Vene","Rumeenia",
						"Sloveenia","Serbia","Soome","Rootsi","Bulgaaria","Slovaki","Chinese","*","Gaeli","*",
						"Uelsi","Araabia","Iiri","Läti","*","Türgi","Eesti","Hollandi"/*Netherlands*/,"Korea","*",
						"Hindi","*","*","Mandarin","Cantonese","Maori","V.O."/*Qaa*/,"Määramata"/*Undetermined*/,"*","Tundmatu",
						"Määramata","*","*","*","*","*","*","*","*","*",
						"*","*","*","Albaania keel","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baski","*","*",
						"*","*","*","*","*","*","*","Bosnia keel","*","*",
						"*","*","*","*","Valgevene","*","*","Katalaani","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galeegi","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Islandi","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Japanese","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Leedu",
						"*","*","*","*","*","*","*","Makedoonia keel","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romantika","*","*","*","*",
						"*","*","*","Saami","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Teletekst",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukraina","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Väljas","Sees"];
var okCancel		= ["OK","Katkesta"];
var yesNo			= ["JAH","EI"];
var level			= ["Väljas","Madal","Kõrge","Keskmine"];
var manualAuto		= ["Manuaalne","Automaatne"];
var homeShop		= ["Kodu","Osta"];
var picPreset		= ["Standard","Dynamic","Loomulik","Film","Isiklik"];
var picColorTemp	= ["Jahe","Parasts","Soe","Kasutaja"];
var pic3dNavig		= ["Manuaalne","Automaatne","Poolautomaatne"];
var _3dOptions		= ["3D Režiim","3D-st 2D-ks","P-V lüliti","Sügavusteravus"];
var pic3DMode       = ["Väljas","2D-st 3D-ks","Kõrvuti","Ülaosa ja alaosa","Vaheldumisi liin"];
var picEcoOptions	= ["Enerģijas taupīšana","Valgusandur","Kohalik hämardus","Virvenduseta hämardus"];
var picGeoOptions	= ["Geomeetria","H.asend","V.asend","Kell","Faas"];//Geometry 无翻译
var picAdWhiteBal	= ["R Suurendus","G Suurendus","B Suurendus","R Nihe","G Nihe","B Nihe"];
var souOptions		= ["Heli valmissäte","Tasakaal","Heli viive","SRS TSHD","Automaatne helitugevuse kontroll",
						"SPDIF tüüp","SPDIF viivitus","Teleri paigutus","Heli keel","Heli tüüp",
						"Suuline kirjeldus","Bassivõim","Dolby Digital Plus"];
var souSpdifType	= ["Automaatne"/*Dolby*/,"PCM","Väljas"];
var colorSpace      = ["Automaatne","Natiivne","Kasutaja"];
var souPresetPara	= ["100Hz","500Hz","1.5KHz","5KHz","10KHz"];
var chOptions		= ["Kanali skaneering","Kanalite nimekiri","EPG","Kanalite korraldaja","Kanali diagnostika",
						"ajanihe","Subtiitrid","Teletekst","Kanālu saraksta tips"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Signaalitugevus","Signaali kvaliteet","Sagedus (KHz)","Teenuse ID","Võrgu ID","Võrgu nimi"];
var chScanOptions	= ["Riik või piirkond","Tuuneri režiim","Automaatne otsing","Automaatne uuendus","Manuaalne analoogskaneering",
						["Kaabli manuaalne skann","Antenni manuaalne skann","Satelliidi manuaalne häälestus"],"Satelliitantenni seadistamine","Lemmikvõrgu valik","Tühjenda kanalite loend","LCN"];
var favNetDes		= "Palun valige eelistatud võrk";
var tuner			= ["Kaabel","Antenn","Satelliit"];//Satelite 无翻译
var passError		= "Vale parool.\nPalun sisestage uuesti!";
var chType			= ["Analoogkanalid: ","Digitaalkanalid: "];
var chScanStatus	= ["Olek: Skannimine","Olek: Skaneering lõpetatud","Olek: Skaneering katkestatud","Olek: Skaneerimise viga"];
var chScanPara		= ["Sagedus (KHz)","Modulatsioon","Sümbolikiirus (Ksym/s)","Võrgu ID","Süsteem",
						"Peenhäälestus","Signaalitugevus","Signaali kvaliteet","Skannimisrežiim","Kanali ID"];
var chScanParaMHZ      = ["Sagedus (MHz)"];
var chAtvManSys		= ["LÄÄNE EUR","IDA EUR","Ühendkuningriik","Prantsusmaa"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Automaatne"];
var chCleanDes		= "Kas soovite kanalite loendi tühjendada?";
var chDeletDes		= "Kas soovite kanali kustutada?";
var chOperator		= ["Ziggo","UPC","Muud"];
var chScanType		= ["Digitaalne & Analoog","Digitaalne","Analoogne"];
var chScanMode		= ["Täielik","Edasi","Kiire"];
var bookingModes	= ["Lindista","Meenutus"];
var dayName			= ["P","E","T","K","N","R","L"];
var monthName		= ["Jan", "Veeb.","Mar.","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dets"];
var filter			= ["Filter","Tüüp","Alamtüüp"];
var chEpgFirstGenre	= ["Film","Uudised","Show","Sport","Lastele","Muusika","Kunstid","Sotsiaal-","Haridus","vaba aeg","SPECIAAL"];
var chEpgSecondGenre= [["Draama","Detektiiv","Seiklus","Ulme","Komöödia","Seep","Romantika","Tõsine","Täiskasvanute film"," "," "," "],
						["Poliitika","Ilmateade","Uudistemagasin","Dokumentaal","Arutelu"," "," "," "," "," "," "," "],
						["Show","Mängushow","Vaheldusshow","Jutusaade"," "," "," "," "," "," "," "," "],
						["Sport","Eriüritused","Spordimagasinid","Jalgpall","Tennis",
							"Meeskonnasport","Võimlemine","Mootorisport","Veesport","Talvesport",
							"Ratsutamine","Võitlusspordid"],
						["Lastele","Eelkooliealistele lastele","Meelelahutus 6...14-aastastele","Meelelahutus 10...16-aastastele","Informatiivne","Joonissaated"," "," "," "," "," "," "," "],
						["Muusika","Roks","Tõsine","Folk","Jazz","Muusikal","Ballett"," "," "," "," "," "],
						["Kunstid","Lavakunstid","Kaunid kunstid","Religioon","Popkultuur",
							"Kirjandus","Film","Eksperimentaalne","Saated","Uus meedia",
							"Kunstiajakirjad","Mood"],
						["Sotsiaal-","Ajakirjad","Majandus","Tähelepanuväärsed isikud"," "," "," "," "," "," "," "," "],
						["Haridus","Loodus","Tehnoloogia","Meditsiin","Välisriigid","Sotsiaalteadused","Edasine haridus","Keeled"," "," "," "," "],
						["Vaba aja hobid","Turism","Käsitöö","Tehnikaalad","Trenn ja tervis","Kokandus","Reklaam","Aiandus"," "," "," "," "],
						["Originaalkeeles","Mustvalge","Avaldamata","Otseülekanne"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Kanali vahelejätmine","Kanali sorteerimine","Kanali muutmine","Kanali kustutamine","kanali vahetus","kanal sisestada"];
var chEditPara 		= ["Võrgu nimi","Kanāla numurs","Kanāla nosaukums","Sagedus","Värvisüsteem","Helisüsteem"];
var chSatTitles		= ["Satelīta tips","Satelliitantenni seadistamine","Vali satelliit"];
var chSatEidtOptions= ["Satelliidi nimi","Pozīcija","LNB Võim","LNB sagedus (MHz)","Diseqc sisend",
						"Toon 22 KHz","tonis eksplozijas","Sagedus (KHz)","Sümbolikiirus (Ksym/s)","Polarisatsioon",
						"Signaalitugevus","Signaali kvaliteet","Satelīta statuss"];
var chSatAutoPromt	= [["Kõik","Võrk"],
						["Kõik","Tasuta"]];
var chSatAutoScanOptions=["Vali satelliit","Skannimisrežiim","Кanalid"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Universaalne",];
var chSatDiSEqCInput= ["Deaktiveeri","A","B","C","D"];
var chSatTone22KHz	= ["Automaatne","Sees","Väljas"];
var chSatToneBurst	= ["Deaktiveeri","tonis eksplozijas A","tonis eksplozijas B"];
var chSatPolarization= ["Horisontaalne","Vertikaalne"];
var chSatSetupOptions=["Antenas tips","Tuuner","Joslas frekvence"];
var chSatAntennaType= ["Viens kabelis","Universaalne"];
var chSatUserBands	= ["Liet. frekv. j. 1","Liet. frekv. j. 2","Liet. frekv. j. 3","Liet. frekv. j. 4","Liet. frekv. j. 5","Liet. frekv. j. 6","Liet. frekv. j. 7","Liet. frekv. j. 8"];
var chSatOthers		= ["Transponder"];
var chSatSetupOthers= ["Kasutaja määratud"];
var pleaseSelectSat = "Palun valige esmalt satelliit!";
var subOptions		= ["Subtiitrid","Digitaalsete subtiitrite keel","Digitaalsete subtiitrite teine keel","Subtiitrite tüüp"];
var ttxOptionsCon      = ["Dekodeerimislehe keel","Digitaalne teleteksti keel"];
var subType			= ["Parasts","Kuulmiskahjustusega"];
var netIntf     	= ["Ethernet","Traadita"];
var netConnDes		= ["TV testib võrguühendust.\nPalun oota",
						"Võrguühenduse katse õnnestus!",
						"Võrguühenduse katse ebaõnnestus."];
var netSsidError	= "Kehtiva SSID pikkus on 1-32 tähemärki. Palun kontrollige SSID üle.";
var netOthers		= ["PIN-kood"];
var netWlessAutoDes	= ["Palun kontrolli järgmise PIN koodi Access Point'i paigaldatust enne nupule OK vajutamist.",
						"Palun vajuta nuppu Access Point'il 120 sekundi jooksul enne OK vajutamist."];
var netConnRemind	= ["Vale parool!",
						"Ühendamine. Palun oodake!",
						"Ühendus õnnestus ja IP on olemas!",
						"Link puudub",
						"Teler skaneerib pääsupunkte\nPalun oota",
						"Teleriga ei ole ühendatud ühtegi traadita seadet!"];
var netWireIpOptions= ["IP seadistus","Aadressi tüüp","IP aadress","Alamvõrgumask","Vaikelüüs","Primaarne DNS","Sekundaarne DNS"];
var netWireConnRemind= ["Palun sisesta väärtus vahemikus 0 - 255.",
						"Edukalt ühendatud!",
						"Palun sisestage kehtiv aadress",
						"Edukalt ühendatud!",
						"Ühendus ebaõnnestus!",
						"Ühendamine. Palun oodake!",
						"Palun sisestage väärtus vahemikus 1-223."];
var netFlixOptions	= ["Deaktiveeri","ESN","Netflixi versioon"];
var netFlixDes	 	= ["Kas oled deaktiveerimises kindel?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Tarkvara uuendus";
var netUpdateDialogTitle = "Tarkvara uuendamine";
var netBGDownloadTitle 	= "Allalaadimine";
var netUpdateLoadingPrompt= ["Uuenduse otsimine, palun oodake!",
							"Tarkvara laetakse alla… Palun oodake!",
							"Palume telerit tarkvara uuendamise ajal MITTE VÄLJA LÜLITADA!",
                            "Hädavajalik tarkvara uuendus laetakse automaatselt taustal alla!"];
var netUpdatePrompt= ["Õnnitlused – sul on olemas tarkvara kõige uuem versioon!",
						"Leiti uus tarkvaraversioon XXXX. Kas tahad selle kohe alla laadida? See võib veidi aega võtta, sõltuvalt võrgu olukorrast.",
						"Sisselogimine ebaõnnestus!",
						"Andmeid ei õnnestunud kätte saada, palun proovige hiljem uuesti!",
						"XML Update sõelumine ebaõnnestus!",
						"Link puudub",
						" Tarkvara allalaadimine edukas. Kas soovite alustada vilgutamist?",
						"Andmed kadunud!Allalaadimine ebaõnnestus!",
						"Paketi kontroll ebaõnnestus,palun proovi uuesti!",
						"Võrk on ebanormaalne.Palun kontrolli ja ühenda uuesti…",
						"Värskendus ebaõnnestus.Palun käivita teler uuesti!",
						"Versiooniuuenduse fail kustutati ootamatult. Palun tehke versiooniuuendus võrgu kaudu uuesti.",
						"Tarkvara taustal alla laadimine õnnestus. Kas tahate alustada versiooniuuendust?"];
var netUpdateButtonText = ["Lae alla", "Uuendus", "Hiljem", "Mitte kunagi", "OK","Jätkake"];
var autoDetectPrompt = ["Leiti uus tarkvaraversioon XXXX. Kas tahad selle kohe alla laadida? See võib veidi aega võtta, sõltuvalt võrgu olukorrast.",
						"Leiti uus tarkvara versioon XXXX. Kas soovite kohe uuendada?",
						"Viimane versiooniuuenduse protsess võrgu kaudu katkestati. Versiooniuuendus tuleb uuesti teha.",
                        "Uue tarkvara versiooni XXXX allalaadimine ei ole lõppenud. Kas soovite allalaadimist kohe jätkata?",
                        "Tarkvara on alla laetud. Kas soovite kohe uuendada?"];
var sysOptions		= ["E-kasutusjuhend","Menüü keel","Taimer","Lukusta","Sisendi seaded",
						"Tarkvara uuendus","Asukoht","HbbTVrežīms","Küpsised","Ühisliides",
						"Täpsemad seaded","Taasta tegevus","LED indikaator","Kohene sisselülitamine","Poe automaatrežiim","Area","Demorežiim"];
var sysResetDes		= "Olete kindel?";
var sysMenuLangOptions=["Keel","Eelistatav kuuldav keel","Teine helikeele eelistus"];
var sysTimerOptions	= ["Ajavöönd","Piirkonna nimi","Kell","Unetaimer","Autom. ootereziim", "Country region"];

var sysTimeZone		= ["Teadustajana","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Väljas","10 min","20 min","30 min","40 min","50 min","60 min","90 min","120 min"];
var sysStandby		= ["Väljas","4 tundi","6 tundi","8 tundi"];
var sysRegionName	= ["Madriid ","Kanaarid"];
var sysClockOptions	= ["Automaatne sünkroniseerimine","Datums","Laiks","Sisselülitustaimer","Taimer",
						"Kanal sees","Väljalülitustaimer","Taimer"];
var sysTimer		= ["Väljas","Iga päev","Üks kord"];

var sysInputSet		= ["Nimetus puudub","DVD","Blu-ray","HDD","DVDR",
						"HD salvestus","Mäng","VCR","PC","Digitaalne STB ",
						"HD digitaalne STB","Kaamera","Salvestaja","Muu"];
var sysAvVideoInput	= ["Automaatne","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["USB kaudu","kaudu võrgu","Kanali kaupa"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Ei suuda eetris uut tarkvara leida!",
						"Leiti uus tarkvara versioon XXXX. Kas soovite kohe uuendada?",
						"Sisestage palun USB-mälupulk.",
						"Paketi kontroll ebaõnnestus,palun proovi uuesti!",
						"Palun ÄRGE ühendage USB pordilukku lahti ja lülitage TV-komplekti välja püsivara uuendamise ajal!!",
						"Tarkvara on edukalt uuendatud.\nTeler taaskäivitub siis automaatselt!",
						"Leiti uus tarkvaraversioon XXXX. Kas tahad selle kohe alla laadida? See võib veidi aega võtta, sõltuvalt võrgu olukorrast.",
						"Allalaadimine",
						" Tarkvara allalaadimine edukas. Kas soovite alustada vilgutamist?",
						"Ei uuendatud!",
						"Toimub uuendusfailide otsimine",
						"Tarkvara uuendamine õnnestus. \nPalun taaskäivitage teler."];
var sysProductInfo	= ["Praegune versioon","Toote nimi","Tootja nimetus","Korpuse nimetus"];
var sysCiDes		= ["CI kaarti pole esitatud."];
var sysAdOptions	= ["DivX(R) lindistus","DivX(R) registreeringu tühistus","T-Link","Authorization Error","Registrist kustutamise kinnitus",
						"Rendi kinnitus","Laenutusaeg on läbi"];
var sysRegistDes	= ["Peate kaitstud DivX videote esitamiseks seadme registreerima",
						"Registreerimiskood:",
						"Registreeri siin: http://vod.divx.com"];
var sysDregistDes	= ["Registreeringu tühistuskood:",
						"Tühistage registreering siin: http://vod.divx.com",
						"Kas jätkate registreerimist?"];
var mediaAuthorization = ["Seadmega ei ole lubatud seda DivX(R) kaitstud videot esitada."];
var deregistrationConfrimation = ["Teie seade on juba registreeritud","Kas olete kindel, et soovite registreeringu tühistada?"];
var rentalConfirmation = "DivX(R) laenutus on kasutanud YYYY vaatamisest XXXX vaatamist. Kas jätkad?";
var rentalExpired 	= "DivX(R) laenutus on ära kasutanud XXXX/YYYY vaatamist. DivX laenutus on aegunud.";

var parentalRatingNA		= ["***","***","***","***","***","***","***","***"];
var parentalRatingOptionUS		= ["***","***","***"];
var sysTVRatingUS=["***","***","***","***","***"];
var sysMPAAUS=["***","***","***","***","***","***"];
var parentalRatingOptionCanada		= ["***","***","***"];
var sysCanadaEng=["***","***","***","***","***","***"];
var sysCanadaFre=["***","***","***","***","***",""];
var sysResetRRT=["***"];

var sysLockOptions	= ["Kanali lukustus","Ajaintervalli lukustus","Vanemlik reiting","Sisendi blokeerimine","Tagapaneeli lukk","Paigalduse lukustamine",
						"Parooli muutmine","Maks. helitugevus","Tühjenda kõik"];
var sysTimeIntervals= ["Lukustuse tüüp","Algusaeg","Lõpu aeg"];
var sysRatingOptions= ["Puudub","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","X-reiting (Hispaania)"];
var changePass		= ["Parooli muutmine","Uus parool","Parooli kinnitamine"];
var changePassDes	= ["Vale parool.\nPalun sisestage uuesti!",
						"Parool ei klapi.\nPalun sisestage uuesti!",
						"Salasõna muutmine õnnestus!",
						"See kood on parooliks liiga lihtne.\nPalun sisesta uuesti!"];
var sysPowerOnChOptions= "Vali režiim";
var sysPowerOnCh	= ["Viimane staatus","Kasutaja valib"];
var netWlessSecu    = ["Avatud","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Puudub","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Toetuseta"];
var netWlessSecu3	= ["Puudub","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Toetuseta"];
var netOptions		= ["Internetiühendus","Liides","Traadita ühenduse seadistused","IP seadistused","Informatsioon",
						"Ühenduse test","DLNA","Teleripult","Netflix’i seaded","Wifi ekraan",
						"Aadressi tüüp","IP aadress","Alamvõrgumask","Vaikelüüs","Primaarne DNS",
						"Sekundaarne DNS","SSID","BSSID","Palun sisesta SSID:","Kasutajatunnus"];
var chEditDes		= ["Korduv kanali number!","Tähemärgi kustutamiseks vajutage punast nuppu!","Vigased kanalinumbrid."];
var chEpgNoProgram	= "Saateinfo puudub, palun otsige esmalt kanaleid!";
var chEpgWords		= ["Programmijuht","Saate andmed puuduvad.","Kanal lukus!","Saate teave puudub.","Saate pealkiri puudub."];
var chEpgBooking	= ["ajakava info", "Kanāla numurs","Alguskuupäev","Algusaeg","Lõpu aeg",
						"Korduse tüüp","Graafiku tüüp","Lisama","Asenda","Muuda",
						"Lisa/muuda"];
var epgHotKey		= ["Eelm. päev","Järgm. päev","Filter","Graafiku loend","Lisa graafik"];
var chEpgBookRemind	= ["Ebaõige algusaeg","Ebaõige lõppaeg","Korduv plaan","Salvestamine edukas.","Edukalt kustutatud."];
var chSchePara		= ["Graafiku loend","Algusaeg","Alguskuupäev","Programmi pealkiri","Kanāla nosaukums",
						"Ilgums","Kordus","Plaan","Muuda","Dzēst"];
var dateTimer		= ["Üks kord","Iga päev","Iga nädal"];
var scheduleDeleteReminds="Kas soovite selle graafikut kustutada?";
var scheduleNoLists	= "Graafikuloend puudub. Vajutage punast nuppu, et lisada graafik.";
var chListWords		= ["Kanalite nimekiri","Vali loend","Tuuneri režiim","Lisa lemmikute hulka","Eemalda",
						"Vali kanalie loend","Vali tuuneri režiim","Vaheta"];
var chListType		= ["Kõik","Digitaalne","Analoogne","Raadio","Tasuta","Lemmikud"];
var chAutoScanOptions=["Atlasiet operatoru","Kanali tüüp","Automaatne otsing"];
var souSoundType	= ["Kehtetu","Mono","Mono","Stereo","Stereo",
						"SAP","SAP","Duaal1","Duaal2","Duaal2",
						"Nicam mono","Nicam stereo","Nicam duāls 1","Nicam duāls 2","Nicam Dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Muusika","Film","Selge hääl","Standard","Isiklik"];
var picAdRgbMode	= ["Väljas","Ainult punane","Ainult roheline","Ainult sinine"];
var picAdOptions	= ["Müravähendus","MPEG NR","RGB mode","Dynamic Contrast","LED-liikumise selgus",
						"Ihutoon","Filmirežiim","Mängurežiim","Värvitemperatuur","White Balance",
						"Külmuta","Black Stretch","Üleskaneering","Gamma","HDMI režiim","10P valge tasakaal","Värvihaarde parandaja",
						"Hägususe vähendamine","Värina vähendamine","Värviruum","Liikumise selgus"];
var pic10Pwhite     = ["Intervall","Punane","Roheline","Sinine","Taastamine","Värv","Kollane","Tsüaansinine","Purpurpunane"];
var picMotionClarity = ["Liikumisrežiim","Liikumise interpolatsioon","LED-liikumise selgus","Hägususe vähendamine","Värina vähendamine","Taastamine"];
var picMotionMode   = ["Film","Sujuv","Tühjenda","Sport","Klient"];
var picResetDes		= "Kõik personaalsed seadistused tühistatakse. Kas olete kindel, et soovite valitud tegevusega jätkata?";
var pic10PReset     = "Kas olete kindel, et soovite 10P valge tasakaalu lähtestada?";
var picMotionReset  = "Kas soovite liikumise selguse lähtestada?";
var picColorSpaceReset    = "Kas olete kindel, et soovite värviruumi lähtestada?";
var picOptions		= ["Pildi eelmääramine",
						"Taustvalgustus","Eredus","Kontrast","Värvitugevus","Värvivarjund","Teravus","Värvitemperatuur","Ekraani režiim","Automaatne vorming",
						"Spordi lisaseade","3D","3D navigācija","ECO Seaded","Geomeetria",
						"Täpsemad seaded","Pildi lähtestus","Mikro hämarus"];
var picSize			= ["16:9 formaat", "4:3 formaat", "14:9-vorming", "Kinovaade",
						"16:9 Suum", "16:9 Suum üles","14:9 Suum","Venitatud suum","Lai suum",
						"Suum 2","Lai suum 2","Algupärase resolutsiooni sobitus","Punkt punkti haaval","Originaal","Panoraam"];
var others			= ["Helitugevus","Pārraide","Parool","Olek","Salvesta","Asenda","Alusta","Välju","Otsing","Dzēst",
						"Puudub","Automaatne","Skaneerimine","Andmeturve","Ühenda","Värskenda","Proovi uuesti","Lõpetamine","Seaded","Кanalid",
						"Muuda","Sisesta","Signaal!","Lõpeta","Stereo","Heli","Allikas","Audio puudub","Nõuanded","Taastamine",
						"Klient","Seadistus","Salvesta","Kasutaja","Sulge klaviatuur","Turvarežiim","Iga päev","PVR-loend"];
var direction		= ["Vasak","Parem","Üles","Alla"];
var audioType 		= ["MPEG","DOLBY AUDIO"/*"AC3"*/,"MPEG4","AAC", "DOLBY AUDIO"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Tundmatu"];
var soundChannels   = ["Tundmatu","Mono","Alam","Kahe kanaliga mono","Stereo","Stereo Sub","Stereo Dolby Surround","Ümbritsev 2CH","Ümbritsev","3.0Ch","4.0Ch","5.0Ch","Mono LFE","Dual Mono LFE","Stereo LFE","Surround 2Ch LFE","Surround LFE","3.1Ch","4.1Ch","5.1CH","7.1CH","Liitstereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Vasak","Parem","Muud"];
var prompts			= ["Seadistage pilt vastavalt enda vaatamiskeskkonnale.",
						"Reguleerige heledust. Mida lähemal 100-le, seda eredam.",
						"Reguleerige kontrastsust. Mida lähemal 100-le, seda suurem on tumeda ja heleda erinevus.",
						"Reguleerige värviküllastust. Mida lähemal 100-le, seda intensiivsem on värv.",
						"Reguleerige teravust. Mida lähemal 100-le, seda selgemad on detailid.",
						"Reguleerige taustvalgustust. Mida lähemal 100-le, seda eredam on ekraan.",
						"Reguleerige värvitooni. See seade muudab värvitoone.",
						"Valige käimasoleva saate jaoks sobivaim pildivorming.",
						"Konfigureerige energiasäästuvalikud.",
						"Reguleerige arvutiseadme ühendamisel ekraanigeomeetria seadeid.",
						"Valige veel täpsemaid pildi seadistusi.",
						"Lähtestage kõik pildi seadistused vaikeseadistustele.",
						"Valige oma isiklike eelistustega sobiv helirežiim.",
						"Reguleerige helitugevuse tasakaalu vasaku kanali ja parema kanali vahel.",
						"Helipäringusüsteem TruSurround HD pakub rikkalikku ja selget heli madalatel või kõrgetel sagedustel.",
						"Digitaalne liidesevorming, mis ühendab teleri digitaalse heliväljundi kodukino helisüsteemiga. ",
						"Valige oma isiklike eelistustega sobiv heli keel.",
						"Võimaldab nägemispuudega inimestel telesaateid nautida.",
						"Kontrollige teleri pilti, heli ja signaali.",
						"Valige oma teleri signaalile sobiv kanalite loendi tüüp.",
						"Valige saate jaoks ekraani allosas kuvatavate subtiitrite keel.",
						"Vaata antud kanali teksti ja pilte",
						"Digital Living Network Alliance. Naudi koduvõrgu vahendusel teistest seadmetest (nt arvutist) muusikat, fotosid ja videoid. ",
						"Kuva nutitelefoni sisu teleris ja kasuta nutitelefoni teleri puldina.",
						"Kuva Miracast-ühilduva Android-seadme sisu enda teleri ekraanil.",
						"Pange oma teler lukku.",
						"Valige oma seadmele nimi.",
						"Valige oma vaatamiskeskkond.",
						"Lähtestage kõik süsteemi seadistused vaikeseadistustele.",
    					"Switch off sports mode for more options.",
    					"Täiustage keskkonna kontrasti",
    					"Eriline režiim, mis laseb nautida spordimänge",
    					"Nautige rohkem CEC-funktsioone."];
var initialTitle	= ["Tere tulemast","Algseadistus"];
var initialPrompt	= ["Tehke algseadistus kohe ja teid ootab maailm täis uusi kogemusi!",
						"Palun valige oma keel:",
						"Valige riik või piirkond:",
						"Palun vali oma asukoht:",
						"Palun valige oma võrguühenduse tüüp:",
						"Palun valige traadiga võrguühenduse režiim:",
						"Xxxxxxxxx ühendamine ebaõnnestus! Palun ühendage seade vastavalt järgnevale skeemile või valige lähtestamiseks „Left\".",
						"Xxxxxxxxx ühendatud! Palun valige „Right”, et jätkata.",
						"1) Teie teleril võib olla juba sisseehitatud juhtmevaba adapter\n 2) Juhtmevaba USB adapteri olemasolul ühendage see teleriga. Seejärel palun valige juhtmevaba võrgu tüüp.",
						"Skaneerimine. Palun oodake…",
						"Teleriga ei ole ühendatud ühtegi traadita seadet!",
						"Palun veendu enne allpool ‘Järgmine’ nupule vajutamist, kas PIN kood on pääsupunkti paigaldatud.",
						"Enne, kui vajutate nupule „Right”, palun vajutage 120 sekundi jooksul vajutusnuppu pääsupunktil (AP).",
						"WPS (Wi-Fi kaitstud häälestus)",
						"PIN-kood",
						"PBC (vajutusnupu konfiguratsioon)",
						"Järgnevale sisule pääseb ligi ainult võrguühendusega. Kas soovite võrgu seadistamise vahele jätta?",
						"Uued tarkvara uuendused on saadaval, uuenduste allalaadimise aeg sõltub teie võrgu olekust.",
						"Teie teleri tarkvara uuendamine kindlustab, et saate nautida uusimaid funktsioone ja teenuseid.",
						"Te jääte ilma kõige uuematest funktsioonidest ja teenustest. Kas soovite tarkvara uuendamise vahele jätta?",
						"Jätkamiseks vajutage paremale noolt.",
						"Teleri väljalülitamine uuendamise ajal võib põhjustada rikkeid.",
						"Kui te ei soovi uuendada, siis palun valige „NO”.",
						"Uuendamine, palun oodake",
						"Tarkvara saab uuendada ka alamenüüst SYSTEM/SOFTWARE UPDATE.",
						"Valitud riik nõuab parooli seadistamist.\nPalun sisesta telerile kood ja kinnita see.",
						"This code is too simple.\nPlease use different digits.",
						"Õnnitleme! Esmane seadistamine on lõpule viidud. Konfiguratsiooni on võimalik muuta peamenüüst ja vastavatest alamenüüdest.",
						"Palun vali turvarežiim:",
						"Palun valige traadita võrguühenduse režiim:",
						"Võrk"];
var initNetCabAndDonRe = ["Võrgukaabel ei ole ühendatud, palun ühendage võrgukaabel!","Puudub sisseehitatud juhtmevaba adapter või juhtmevaba USB adapter."];
var initChPrompt = ["Telekanalite installeerimine","Palun valige antenni skaneerimistüüp.","Automaathäälestuse töötlemine...","Leiti järgmised antenni kanalid:","Palun valige kaabelkanalite otsingu tüüp.","Palun valige järgnevast nimekirjast üks operaator.","Palun konfigureerige otsingu teave","Leiti järgmised kaabelkanalid:","Palun valige üks operaator järgmisest loendist","Palun valige otsitavad satelliidid või redigeerige valitud satelliiti","Palun määrake satelliidi parameetrid","Leiti järgmised kanalid. Kanalite skaneerimist saab uuesti teostada alamenüüs „Channel/Channel Scan”."];
var initClockPrompt = ["Võtke kasutusele võrgu poolt pakutud kellaaeg!",
						"Palun seadistage kuupäev ja kellaaeg:"];
var initialOptions	= ["Keskkond","Võrguhäälestus","Tarkvara uuendus","Kanali paigaldamine","Kell"];
var initialHotkeys	= ["Tagasi","Valimine","Järgmine","Nõustun"];
var initLocations	= ["Kodu","Osta","Osta (demo)"];
var initNets		= ["Traadiga","Traadita","Mul ei ole võrguühendust"];
var initWireManuals	= ["IP aadress","Alamvõrgumask","Vaikelüüs","Primaarne DNS","Sekundaarne DNS"];
var initSoftUpdates = ["Uuenda kohe","Uuenda hiljem"];
var initChannelIns	= ["Jätkake","Ma ei soovi kanaleid installeerida"];
var initChScanTypes	= ["Digitaalne & Analoog","Digitaalne","Analoogne","Ma ei soovi otsida"];
var initChDvbts		= ["Antenni ATV-kanalid:","Antenni DTV-kanalid:"];
var initChDvbcs		= ["Kaabel-analoogtelekanalid:","Kaabel-digitelekanalid:"];
var initChDvbss		= ["Satelliitkanalid:"];
var initChDvbSOther	= ["Ma ei soovi satelliidilt otsida"];
var initEndConnectedStatus= ["Ühendus katkestatud","WiFi-ga ühendatud","Juhtmega ühendatud"];
var initEndInstallations= "XXXX kanalit installeeritud";
var initEndUpdate	= ["Uuendatud"];

var audioScenes 	= ["Laual","Seinakinnitus"];			
var screenSavers	= ["Kanalid puuduvad, palun vajutage ok-klahvi ja skannige!",
						"Signaal puudub!",
						"Segatud signaal",
						"Ainult andmed",
						"Audio programm",
						"Ilma heli ja videota",
						"Pole saadaval",
						"Ilma teletekstita",
						"Saate andmed puuduvad.",
						"Programm lukus!",
						"Programm lukus!\nVajutage OK ja sisestage oma kood.",
						"Saate teave puudub.",
						"Saade on alaealistele ebasobiv.\nVajutage OK ja sisestage kood.",
						"Kanal lukus!",
						"Kanal lukustatud!\nVajutage OK ja sisestage oma kood.",
						"Sisend lukustatud!\nVajutage OK ja sisestage oma kood.",
						"Pole toetatud!",
						"See teenus ei ole hetkel saadaval",
						"Sisend lukus!",
						"Saate pealkiri puudub.",
						"Puuduv funktsioon",
						"Ilma Subtiitrid"
						];
var channelNumberOverPromt = ["The number of search programs has exceeded,you can delete some programs and then retry!"];
var chBookingPromt	= ["Antud kanalil on planeeritud salvestus, teler alustab salvestamist.",
						"Leiti planeeritud salvestamine.\n Lülitage salvestamiseks kanalile XXXX",
						"Käesoleval kanalil on meeldetuletus.",
						"Leiti planeeritud meeldetuletus.\n Lülitage kanalile XXXX"];
var timeUnit		= ["s","min"];
var ciPromt			= ["Võrgu andmed on muutunud. Uuendamiseks teostage uuenduste otsing.",];
var othersPromt		= ["Palun oodake…",];
var menuOptions		= ["Pilt","Heli","Kanal","Smart TV","Võrk","Süsteem","Tugi"];
var optionOptions	= ["Pildi eelmääramine","Heli valmissäte","Külmuta","T-Link","ajanihe","PVR","Graafiku loend","Seaded","*"];
var optionTLinkPromt= [["Automaatne sisselülitamine","Autom. ootereziim","Abimenüü"],
						["Ieslēgšana","Ootel","Võimendi helitugevus"]];
var powerPromt		= ["Teler lülitub varsti välja! Palun vajuta tühistamiseks suvalist klahvi."];
var ttxLanguage		= ["LÄÄNE EUR","IDA EUR","Vene","Araabia/Heebrea","Farsi","Araabia","Valgevene","Kreeka","Türgi"];
var ttxOptions		= ["Paljasta","Alamlehtede kerimine","Keel","Alarmi leht","Uudisnupp"];
var weekday         = ["Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"];
var lcnConfflict	= "Sellel programmil on probleemid vastuvõtuga.";
var inShopMode		= "Teler on poerežiimis. Kodurežiimi jaoks palun valige „System” ja muutke menüüs ära „Location”.";
var nitRefresh		= "Võrguandmed muutusid. Kas soovite läbi viia uuenduste skaneeringu?";
var picHDMIMode     = ["Automaatne","Graafika","Video"];

var glassRemind    	= ["Palun paaristage 3D prillid teleriga\n(Hoidke all POWER nuppu 3D prillidel).","Teie 3D prillid ei ole teleriga ühendatud",""];
var pvrRemind 		= ["Ärge eemaldage USB-seadet ega katkestage toidet"];
var pvrConName   	= ["PVR","Saateinfo:",["Note:If you record the HD channel,please to select  the  disk(of speed >5.0MB/sec),and to select the disk (of speed >3.0MB/sec) when yourecord the SD channel.","Salvestatud video asub kaustas \"PVR\"."],"Lõpetamine","Lindista","tund","Minut","Ilgums","Nõuanded","Kasuta nooleklahve, et muuta salvestamise kestust."];
var pvrDisRemind 	= "Palun sisestage lindistamiseks USB pulk.";
var pvrRemindWords  = ["Kas soovite väljuda?",
							"Kas soovite salvestamist katkestada ja salvestatud faile sirvida?",
							"Disks ir izstumts",
							"Kettal pole piisavalt vaba ruumi.",
							"Salvestatud faile ei ole. Alusta salvestamist.",
							"PVR-i ei saa skrambleeritud kanalis kasutada.",
							"See omadus pole kasutatav",
							"Salvestamine edukas.",
							"Kas tahad peatada lindistuse ja muuta sisendallikat?",
							"Teler lõpetab käimasoleva salvestuse. Kas soovite väljuda?",
							"PVR-salvestamine nõuab head teleri signaali, palun kontrollige signaali tugevust."];
var pvrChangeCh 	= ["Kas vahetan kanalit?",
							"Kas tahad peatada lindistuse ja muuta kanalit?"];
var pvrChangeToPIN8	= ["Kas soovite SCART-sisendiga ühendatud seadme allikaks muuta?  ",
				    		"Kas soovite salvestamisprotsessi lõpetada ja SCART-sisendiga ühendatud seadme allikaks muuta?"];
var pvrChangeToCEC  = ["Kas soovite HDMI-sisendiga ühendatud seadme allikaks muuta?",
				  			 "Kas soovite lõpetada salvestamisprotsessi ja HDMI-sisendiga ühendatud seadme allikaks muuta?"];
var pvrGuideJump    = ["Kas soovite sisestada EPG?",
							"Kas tahad peatada lindistuse ja siseneda ETK-sse?"];
var pvrMediaJump    = ["Kas soovite sisestada andmekandja?",
							"Kas tahad peatada lindistuse ja siseneda Media-sse?"];
var timeshiftExtra	= ["Kas soovite peatada ajanihke ja lülitada muudan kanalit?",
						"Kas soovite ajanihke lõpetada ja SCART-sisendiga ühendatud seadme allikaks muuta?",
						"Kas soovite ajanihke lõpetada ja HDMI-sisendiga ühendatud seadme allikaks muuta?",
						"Ajanihet ei saa skrambleeritud kanalis kasutada.",
						"Kas soovite ajanihke lõpetada ja EPG sisestada?",
						"Kas soovite peatada ajanihke ja lülitada teleri USB-režiimi?",
						"Kas soovite peatada ajanihke ja lülitada Muudan sisendi allikat?",
						"Palun sisestage lindistamiseks USB pulk.",
						"Ketta maht pole piisav",
						"Teler lõpetab käimasoleva ajanihke. Kas soovite väljuda?"];
var timeshiftStatus	= ["Edasikerimine","Lõpetamine","Mängi","Paus","Tagasikerimine"];
var pvrPowerOffRemind= ["Ooterežiimis salvestamine","Ootel","Teler salvestab praegu, kas soovite salvestamist jätkata, kui teler on ooterežiimis?"];
var timeshiftInitTitle= "Ketta seaded";
var timeshiftInitReminds= ["See viisard seadistab USB-kettaseadme ajanihke jaoks. Kasutage seadistusrežiimi.",
						 "Paremaks jõudluseks soovitame USB-ketta formaatida. Nii kustutatakse kõik andmed.",
						 "Ajanihke kasutamiseks valige faili suurus",
						 "Formaatimine",
						 "Kettal pole piisavalt vaba ruumi.",
						 "Ajanihke faili loomine",
						 "Kiiruse test",
						 "Kettaseadme kiirus (< %f MB/sec) on ajanihke funktsiooni aktiveerimiseks liiga väike!",
						 "Ketas on ajanihkeks valmis. Parema jõudluse saavutamiseks soovitame aga ketast muuta (kiirus > %f MB/sec).",
						 "Ketas on ajanihkeks valmis."];
var timeshiftInitButtons= ["Formaadi","Jäta vahele","Katkesta","OK","Lõpeta","Välju"];
var timeshiftInitOther=["Ketta kiirus:","MB/sek"];

var selectChoice	= "Olete kindel?";
var chAtvStore		= "Salvesta kui XXXX";
var chEpgFirstGenreUK= ["Film","Uudised ja päevakaja","MEELELAHUTUS","Sport","Lastele","Haridus","Elustiil","Draama"];
var homePageTitleList = ["RAKENDUSED","TV","VIDEOD","Avaleht"];
var homePageFavAndAllName  = ["Lemmikrakendused","Kõik rakendused"];
var homePageBackUp = ["E-kasutusjuhend","GuideOn"];
var homePageRemind   = ["Täielikud funktsioonid on saadaval ainult võrguühendusega.","Teie teleril ei ole veel ühtegi kanalit. Saated on saadaval peale kanalite skaneerimist.","No Program","Otsi kanaleid kohe?"];
var homePageHistory = ["Ajalugu"];
var miracastTitle = ["Wifi ekraan","TCL-seade"];
var miracastRemind=["Wifi ekraan võimaldab jagada nutitelefonide või tahvelarvuti ekraanipilti ja heli juhtmevabalt teleriga. Selle abil on võimalik vaadata nutitelefoni või tahvelarvuti sisu teleriekraanil. Võite näiteks käivitada oma nutitelefonis video ja näidata seda samal ajal teleriekraanil või tahvelarvutiga mängides mängu suurele teleriekraanile kuvada.","Selle teleri WiFi TV link on valmis. Alustage nüüd oma seadme ekraani teleriga jagamist.","Ühendamine. Palun oodake!","Ühendus ebaõnnestus!","Ühendamine ebaõnnestus. Palun kontrollige!"];
var homePageLittleWin = ["Seaded","Meedium","Lemmikkanalid","Smart TV","EPG"];

var hbbtvStopRemind  = ["Kas soovite taasesitust peatada?"];
var colorSystem = ["Automaatne","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Lisateabe saamiseks vajutage ≡ nuppu";
var emptyListInfo = "TV-ga ei ole ühendatud ühtegi seadet!";
var optionVideoListArray_1 = ["Pildi eelmääramine", "Heli valmissäte", "Taasesitusrežiim", "Ekraani režiim", "3D Režiim", 
							  "P-V lüliti", "Sügavusteravus", "Subtiitrid", "Heliriba", "Pealkiri", "Peatükk", "Informācija"];
var optionVideoListArray_2 = ["Pildi eelmääramine", "Heli valmissäte", "Taasesitusrežiim", "Ekraani režiim", 
							  "Subtiitrid", "Heliriba", "Pealkiri", "Peatükk", "Informācija"];
var bottomTipsText = ["Taasesitus/Paus", "Edasikerimine", "Tagasikerimine", "Esitusloend", "Seaded"];
var picturePresetArray = ["Standard", "Dynamic", "Loomulik", "Film", "Isiklik"];
var videoPlayModeArray = ["Korda kõiki", "Korda ühte", "Parasts"];
var screenModeHDArray = ["16:9", "4:3", "Kinovaade", "Lai suum", "Suum 2", "Lai suum 2", "Venitatud suum", "Automaatne"];
var screenModeSDArray = ["16:9", "4:3", "Kinovaade", "14:9 Suum", "16:9 Suum", "16:9 Suum üles", "Automaatne"];
var Mode3DArray = ["Väljas", "2D-st 3D-ks", "Kõrvuti", "Ülaosa ja alaosa", "Vaheldumisi liin"];
var videoOptionListArray = ["Väljas", "Lugu", "Subtiitrid", "Pealkiri", "Peatükk"];
var subMenuTitleText = "Subtiitrid";
var langMenuTitleText = "Heli keel";
var titleMenuTitleText = "Pealkiri";
var mode3DMenuTitleText = "3D Režiim";
var langInfoText = "Lugu";
var STOP_RESUME_INFO = "Peata-jätka";
var playListName = " nimi";
var eb_tips = "Nõuanded";
var ok_button = "OK";
var eb_info = ["Heli dekodeerimise viga.", "Video dekodeerimise viga.", "Helivorming ei ole toetatud.", 
			   "Videovormingut ei toetata.", "Faili ei ole võimalik avada.", "Viga taasesitamisel, palun proovige uuesti.",
			   "Failivorming ei ole toetatud.", "Oih! Pleier on lakanud töötamast.",
			   "Faili asukoht on vigane või puudub.\n Taassisestage mäluseade ja proovige uuesti.",
			   "Jätka taasesitust poolelijäänud kohast?"];
var picturePlayErrorTips = ["Laadimisrike!!!","Pilt on liiga suur!!!","Võrgu tõrge!!!","Programmiharu tõrge!!!","Parameetri tõrge!!!","Tundmatu tõrge!!!"];
var frameTitleText = "Uus seade";
var eb_quit_info = "Kas olete kindel, et soovite väljuda?";
var eb_yes = "JAH";
var eb_no = "EI";
var offinfo = "Väljas";
var naInfo = "Kehtetu";
var consoleInfoArray = ["Edasikerimine", "Tagasikerimine", "Taasesitus/Paus", "Esitusloend"];
var cantOperateText = ["Funktsiooni ei toetata."];
var chapterChangeInfo = "Ainult peatükid 1 kuni XXXX on saadaval.";
var metaDataArray = ["Pealkirja/väljaande metaandmed:", "Peatüki metaandmed:", "Heli metaandmed:", "Subtiitrite metaandmed:"];
var metaTitleInfo = "Pealkiri";
var metaChapterInfo = "Peatükk";
var videoLoadingInfo = "Analüüsimine…";
var listLoadingInfo = "Laadimine…";
var pgInfo = "Reiting:";
var fileNameText = " nimi";
var fileDateText = "Datums";
var fileSizeText = "Suurus";
var fileDurationText = "Ilgums";
var fileDirectorText = "Režissöör";
var fileCopyrightText = "Autoriõigused";
var fileArtistText = "Esitaja";
var fileAlbumText = "Album";
var fileGenreText = "Žanr";
var fileYearText = "Aasta";
var fileGenreText = "Žanr";
var mainListArray = ["Kõik", "Pilt", "Video", "Muusika"];
var sortArray = [" nimi", "Datums"];
var parserArray = ["Parasts", "Rekursiivne"];
var emptyTipsInfo = "Oih! Ühtegi toetatud faili ei leitud.";
var emptyFolderInfo = "Oih! Ühtegi toetatud faili ei leitud.";
var sortName = "Järjesta";
var parserName = "Parser";
var divx_str1 = "DivX(R) lindistus";
var divx_str2 = "DivX(R) registreeringu tühistus";
var infor_str = "Informācija";
var quickMenuEmptyText = "Saadaval valikuid ei ole.";

var musicSoundPresetArray = ["Standard", "Film", "Muusika", "Selge hääl", "Isiklik"];
var musicInformationArray = [" nimi", "Esitaja", "Album", "Žanr:", "Aasta:", "Kestus:"];
var playListName = " nimi";
var playTipsInfo = ["Taasesitatakse esimest faili.", "Taasesitatakse viimast faili."]
var musicNameInfo = "Name";
var musicArtistInfo = "Esitaja";
var musicAlbumInfo = "Informācija";
var optionSoundPresetInfo = "Heli valmissäte";
var optionBGMInfo = "Mängi taustal";
var optionAudioOnlyInfo = "Ainult heli";
var optionInfoText = "Informācija";

var remotePhoneConnecte = "XXXX on teleriga ühendatud!";
var tvRemoteTitle		= "Teleripult";
var tvRemoteDeveloper	= "Rakenduse on välja töötanud TCL";
var tvRemoteDeviceTitle	= "Seadme nimetus:";
var remoteOption		= ["Meedia jagamine","Kaugjuhtimispult","Abi","Info","Smart Connect"];
var remotebottom		= "Palun laadige „TV Remote” enda nutitelefonis alla";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Telefoni kaudu teleriga fotode, videode ja muusika jagamine.",
							"Sammud: \n   1. Ava telefonis „TV Remote”. Ühenda telefon teleriga läbi sama WiFi-võrgu;\n   2. Kliki „Media Sharing” peal, et sirvida meediafaile;\n   3.  Saada meedia telerisse, et seda taasesitada (kasutades ühte järgnevatest valikutest)",
							"      a) Lohista kataloog/fail ekraani ülaosas teleri ikooni peale;\n      b) Viibuta telefoniga teleri suunas esimese faili esitamise alustamiseks;\n      c) Taasesita fail telefonis ja vajuta ikoonile, mis jagab seda teleriga;",
							"   4. Raputa teleris toimuva taasesituse ajal telefoni eelmise või järgmise faili esitamiseks."];
var controlReminds		= ["Kasuta telefoni teleri kaugjuhtimispuldina.",
							" ",
							"Sammud: \n   1. Ava telefonis „TV Remote”. Ühenda telefon teleriga läbi sama WiFi-võrgu;\n   2. Kliki „Remote Control” peal, et telekat juhtida."];
var helpDeviceWords		= "Mitme ekraani kasutamine";
var helpBottom			= "Pilvetehnoloogia ajastul on nutiseadmed nagu telefon ja teler omavahel ühendatud. Jaga meediat oma perega mitmel ekraanil ja juhi telerit telefoniga!";
var helpReminds			= ["Ettevalmistused\n   1. Lae Google Play või Apple Store keskkonnast alla rakendus „TV Remote” ja installeeri see.\n   2. Ühenda telefon teleriga läbi sama WiFi-võrgu.",
							" ",
							"Soovitatav telefon\n   1. CPU: üle 800 MHz\n   2. Mälu: vähemalt 80 MB vaba mälu",
							" ",
							"Vastutusest loobumine\n   Kui rakendus TV Remote ei ole teie telefonis saadaval, siis võtke ühendust telefoni tootjaga."];
var helpButtons			= ["Eelmine","Järgmine"];
var aboutReminds		= ["Teleripult","Rakenduse on välja töötanud TCL"];
var aboutExit			= "Välju";
var smartReminds		= ["Kiire ning nutikas ühendus teleri ja telefoni vahel.",
							" ",
							"Sammud: \n   1. Ühenda teler ja nutitelefon sama LAN-võrguga. Ava nutitelefonis „TV Remote”.\n   2. Kliki „Smart Connect” peal, et QR-koodi skaneerida.\n   3. Kui teler on saatevaatamisrežiimis, siis vajutage rakenduse TV Remote juhtpaneelil asuvat nuppu „INFO” ja hoidke seda 4 sekundit all. Ekraanile ilmub QR-kood.",];
var smartQRReminds		= ["Palun vajutage „Smart Connect” teie telefoni TV Remote rakenduses ja skaneerige sisse QR-kood, et teler ja telefon kiiresti ühendada.",
							"QR-kood sisaldab LAN konto infot. Palun hoidke seda."];
							

var consoleTipArray = ["Eelmine","Järgmine","Konsool","Esitusloend"];							
var optionInfoArray = ["Pildi eelmääramine","Taasesitusrežiim","Ilgums","Efekt","Informācija"];

var playModeArray = ["Parasts","Segamine","Kordus"];
var durationArray = ["Lühike (5s)", "Keskmine (10s)", "Pikk (15s)"];
var effectArray = ["Puudub", "Pööra", "Pilt paremale", "Pilt vasakule", "Pilt üles", "Pilt alla", "Kasti sisse", "Kastist välja", "Juhuslik"];
var infoArray = ["Nimi:","Suurus:","Kuupäev:","Asukoht"];

var picturePresetBarTitleInfo = "Pildi eelmääramine";
var picturePresetBarArray = ["Standard","Dynamic","Stuudio","Film","Isiklik"];
var upTipsInfo = "Liiguta pilti"; //add yums 2014-10-10
var consoleTipsArray = ["Konsool","Eelmine","Järgmine","Esitusloend","Seaded"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Järgmise pildi esitamiseks vajutage uuesti RIGHT","Eelmise pildi esitamiseks vajutage uuesti LEFT","Esitusloendi kuvamiseks vajutage uuesti DOWN"]; //add yums 2014-10-10

var optionPvrListArray = ["Pildi eelmääramine","Heli valmissäte", "Ekraani režiim", "3D Režiim", "Subtiitrid", "Heliriba", "Informācija"];							
	
var titleSpanFirstArray = ["Juhtimine ja ühendus","Põhitoimingud","RAKENDUSED","TV","Seaded","FAQ"];
var titleSpanSecondArray = [["Kaugjuhtimispult","Paneeli klahvid","Lihtne navigeerimine","Teleri ühendus","Teleri ühendus","Teleri ühendus","Traadita"],["Käivitaja","Olekuriba","Allikas"],["Mängurakendused","Meedium","Teleripult"],["Muuda kanalit ja helitugevust","Kanalite nimekiri","EPG","Kanali paigaldus","Lemmikkanalid"],["Pildi korrigeerimine","Heli korrigeerimine","Kanali korrigeerimine","Tarkvara uuendus","Keel","Lapselukk"],["Korduma kippuvad küsimused","Korduma kippuvad küsimused","Tõrkeotsing","Tõrkeotsing","Tingimused"]];
var contentSpan1_1Array =[["TOIDE:","ALLIKAS:","SEADED:","VALIK:","TAGASI:","INFO:","ESILEHT:","VÄLJU:","LOEND:"],
    ["Toite või ooterežiimi sisse lülitamine",
        "Valige sisendallikas",
        "Seadete menüü kuvamiseks",
        "Valikute menüü kuvamiseks",
        "Naasmine eelmisesse menüüsse või APP tööst väljumiseks",
        "Kuvab saateinfo",
        "SmartTV kodulehele minemiseks",
        "Naasmine eelmisesse menüüsse või APP tööst väljumiseks",
        "Kuvab kanalite loendi"]];
var contentSpan1_2Array = ["Eelmine kanal","Järgmine kanal","Suurenda helitugevust","Vähenda helitugevust","Läheb avalehele","Kinnita valik","Ooterežiim / Toide sisse"];
var contentSpan1_3Array = ["OK/kava","Kanal üles","Kanal alla","Helitugevus alla","Helitugevus üles","Mõningates funktsioonides nooleklahvidena kasutatav."];
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","AV VÄLJA adapter","LAN","Nutitelefon","PC/teleriboks/DVD","Helivõimendi","Helivõimendi/monitor","Teie teleril ei pruugi kõiki pistikuid olemas olla."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Peakomplekt","AV SISSE adapter","SPDIF","CMP AUDIO SISSE adapter","CMP SISSE (YPbPr) adapter","USB-seadmed","USB-seadmed","Peakomplekt","DVC/mängukonsool/ teleriboks/DVD","Helivõimendi","DVC/mängukonsool/ teleriboks/DVD","Teie teleril ei pruugi kõiki pistikuid olemas olla."];
var contentSpan1_6Array = ["Ühisliides","SD","VGA","SCART","Mini SCART","ANTENN SISSE","PCMCIA-kaart","SD-kaart","PC","Teleriboks/DVD","Antenn/kaabel/satelliit","Teie teleril ei pruugi kõiki pistikuid olemas olla."];
var contentSpan1_7Array = ["Tablett","PC","Ruuter","Telefoni","TV"];
var contentSpan1_8Array = ["Lüliti funktsioon/Toide","Ootetaimeri avamiseks hoidke nuppu all","Alla","Üles","Valjus/Kanal/Allikas"];

var contentSpan2Array = [["Vajutage nooleklahve, et avalehte vaadata.","Seejärel vajutage OK, et vaadata esiletõstetud saateid või  siseneda rakendusse."],["Näita kuupäeva, võrku, seadmeid jms ekraani ülemises paremas nurgas."],["Valige sisendallikas teleriga ühendatud seadmete hulgast. Seadmed võivad olla ühendatud läbi mitmesuguste portide, nagu näiteks TV, AV, HDMI jne."]];

var contentSpan3Array = ["Nautige ja vaadake enda lemmikrakendusi Smart TV lehe vahendusel","Vaadake fotosid ja videoid ning kuulake muusikat USB-mäluseadmelt.","Ühenda enda teler ja nutitelefon või tahvelarvuti sama LAN-võrguga","Klikkige enda nutitelefonil või tahvelarvutil nScreen või TV Remote","Jagage enda perega mitmel ekraanil fotosid, videoid ja muusikat ning kasutage teleka juhtimiseks nutitelefoni."];

var contentSpan4Array = [["Kanalite vahetamiseks vajuta UP/DOWN","Helitugevuse muutmiseks vajuta LEFT/RIGHT"],["Vajutage puldil LIST, et vaadata kanalite loendit","Kanali valimiseks vajuta UP/DOWN"],["EPG on ekraanil kuvatav saatekava, mis näitab plaanilisi saateid. Te saate navigeerida, valida, vaadata ja salvestada saateid."],["Otsi ja installeeri kanaleid"],["Lisa ja redigeeri kanaleid"]];

var contentSpan5Array = ["Naudi enda lemmiksaateid videorakenduste abil"];

var contentSpan6Array = [["Süsteemi seadistusvõimaluste kuvamiseks vajuta Valik","Väärtuste muutmiseks sisene pildi seadetesse"],["Süsteemi seadistusvõimaluste kuvamiseks vajuta Valik","Suvandite seadistamiseks sisenege heli seadetesse"],["Süsteemi seadistusvõimaluste kuvamiseks vajuta Valik","Suvandite seadistamiseks sisenege kanali seadetesse"],["Uuendage enda telerit, kui uus tarkvara versioon on saadaval"],["Te saate endale valida eelistatud menüü keele."],["Võimaldab lapsevanematel lukustada lastele ebasobivad kanalid või saated"]];

var contentSpan7_1Array = [["Puudub pilt ja heli","Kontrollige, kas kaitsekork ja voolukatkesti on töökorras.","Ühendage pistikupessa mõni muu elektriseade, et veenduda, kas pistikupesa on sisse lülitatud ja töökorras.","Toitejuhe ei ole pistikupesaga korralikult ühendatud","Kontrollige signaaliallikat."],["Pilt on normaalne, heli puudub","Helitugevuse suurendamiseks vajutage UP nuppu.","Viga heli seadistuses.","Ülekande signaali tõrge."],["Heli on normaalne, pilt puudub","Korrigeeri heledust ja kontrasti","Ülekande signaali tõrge.","Kontrolli, kas see on ainult heli režiimis."]];
var contentSpan7_2Array = [["Raadiosageduse häire","Antud häire põhjustab virvendamist või diagonaalseid triipe, mõningatel juhtudel ka pildi kontrastsuse kadu. Tuvastage raadiohäire allikas ja eemaldage see."],["Värv puudub","Korrigeeri värvi seadeid.","Proovige mõnda muud kanalit. Antud saade võib olla must-valge."],["Pult ei tööta","Vahetage patareisid.","Patareid on ebakorrektselt paigaldatud. Teleri põhitoide ei ole ühendatud."]];
var contentSpan7_3Array = [["USB-seadme sisu ei kuvata","Kontrollige, et USB-mäluseade ühilduks teleriga. ","Kontrollige, et teler toetaks heli- ja pildifailide vormingut."],["Ilma helita esitamine","Teleri pleier ei toeta video helivormingut."],["Failide esitamine ei ole sujuv","USB-mäluseadme ülekande jõudlus võib piirata teleri andmeülekandmiskiirust."]];
var contentSpan7_4Array = [["Millele peaksin tarkvara uuendamisel tähelepanu pöörama","Tarkvara uuendamise ajal ei tohi tekkida voolukatkestusi.","Tarkvara uuendamise ajal tuleks vältida puldi kasutamist.","Varuge kannatust, kuna tarkvara uuendamise protsess võib natukene rohkem aega võtta."],["Tarkvara uuendamine ei põhjusta märgatavaid muudatusi teleri kasutajaliideses.","Tarkvara uuendamine mitte ainult ei uuenda või lisa uusi funktsioone, vaid parandab teatud tingimustel ka teleri jõudlust. Tarkvara uuendamine ei põhjusta märgatavaid muudatusi kasutajaliideses. Mõnikord võib teleri kasutajaliides jääda puutumata."]];
var termsTitle = "Tingimused";
var termsConditions = ["Teleri tootja (TCL) õigusalane info.","SmartTV teenuseid pakkuvate toodete erinevate võimaluste ning saadavaloleva sisu piiratuse tõttu ei pruugi kõik funktsioonid, rakendused ja teenused olla saadaval kõigis seadmetes ega kõigis piirkondades. Mõned SmartTV funktsioonid võivad nõuda ka täiendavaid välisseadmeid või liikmemakse, mida müüakse eraldi. Palun külastage meie kodulehte, kust leiate konkreetsete seadmete andmed ja teavet sisu kättesaadavuse kohta. Teenused ja sisu kättesaadavus SmartTV kaudu võivad aeg-ajalt etteteatamata muutuda. \n   Kogu selle seadme kaudu kättesaadav sisu ja teenused kuuluvad kolmandatele isikutele ja on kaitstud autoriõiguste, patentide, kaubamärkide ja/või muude intellektuaalse omandi seadustega. Seda sisu ja teenuseid pakutakse üksnes isiklikuks mitteäriliseks kasutamiseks. Te ei tohi kasutada seda sisu ega teenuseid viisil, milleks sisu omanik või teenusepakkuja ei ole luba andnud. Ilma piiranguteta eeltoodule, v.a kui sisu omanik või teenusepakkuja ei ole seda selgesõnaliselt lubanud, ei tohi läbi selle seadme näidatud meediasisu muuta, kopeerida, taasavaldada, alla laadida, postitada, edastada, tõlkida, müüa, kasutada sellest tuletatud tööde loomiseks, ega ära kasutada või levitada mistahes viisil. \n   TE KINNITATE JA NÕUSTUTE SELLEGA, ET SEADME KASUTAMINE TOIMUB TEIE OMAL VASTUTUSEL NING TEIE KANDA ON KOGU RISK RAHULDAVA KVALITEEDI, JÕUDLUSE JA TÄPSUSE OSAS. SEADET JA KÕIGI KOLMANDATE ISIKUTE PAKUTAVAID SISU NING TEENUSEID PAKUTAKSE „NAGU ON“ PÕHIMÕTTEL, ILMA GASUGUSE OTSESE EGA KAUDSE GARANTIITA. TCL KEELDUB KÕIGIST OTSESTEST JA KAUDSETEST GARANTIIDEST NING TINGIMUSTEST SEOSES SEADME JA MISTAHES SISU VÕI TEENUSTEGA, KAASA ARVATUD – KUID MITTE AINULT – KAUBANDUSLIKE GARANTIIDE, SOBIVUSGA TEATUD EESMÄRGIKS, TÄPSUSEGA, VAIKSE KESKKONNAGA JA KOLMANDATE ISIKUTE ÕIGUSTE MITTERIKKUMISEGA. TCL EI GARANTEERI SELLE SEADME KAUDU PAKUTAVA MISTAHE SISU EGA TEENUSE TÄPSUST, KEHTIVUST, ÕIGEAEGSUST, SEADUSLIKKUST, EGA TERVIKLIKKUST NING EI GARANTEERI SEDA, ET SEADE, SISU VÕI TEENUSED VASTAVAD TEIE VAJADUSTELE EGA SEDA, ET SEADME NING TEENUSTE TÖÖ ON KATKEMATU VÕI ILMA VIGADETA. MITTE MINGIL TINGIMUSEL EI OLE TCL VASTUTAV EI KOKKULEPPEST EGA ÕIGUSERIKKUMISEST TULENEVAST MISTAHES OTSESTE, KAUDSETE, ERILISTE EGA PÕHJUSLIKE KAHJUDE EEST, MIS TULENEVAD VÕI ON SEOTUD SELLES OLEVA MISTAHES INFORMATSIOONIGA, VÕI MIS ON SEADME VÕI MISTAHES TEIE POOLT VÕI KOLMANDATE ISIKUTE POOLT KASUTATUD SISU VÕI TEENUSE KASUTAMISE TULEMUSEKS, ISEGI KUI TEID ON HOIATATUD TAOLISE KAHJU VÕIMALUSEST. \n   Kolmandate osapoolte teenuseid võib muuta, peatada, eemaldada, lõpetada või katkestada või nendele juurdepääsu võib keelata igal ajal ilma ette teatamata, ja TCL (Thomson kaubamärgiga telerite tootja) ei garanteeri mingil moel, et mistahes sisu või teenus on kättesaadav mistahes aja jooksul. Sisu ja teenuseid edastavad kolmandad osapooled võrkude ja vahendite kaudu, mille üle TCL-l puudub kontroll. Käesolevat vastutamatusesätet piiramata keeldub TCL selgesõnaliselt vastutusest või kohustustest mistahes käesoleva seadme kaudu kättesaadavaks tehtud sisu või teenuse mistahes muutuste, katkestuste, puuete, eemaldamise või peatamise eest. TCL võib kehtestada piirangud teatud teenuste või sisu kasutamisele või juurdepääsule igal juhul ja ilma etteteatamise ning vastutuseta. TCL ei ole kohustatud osutama sisu ja teenustega seotud klienditeenindust ega vastuta selle eest. Sisu või teenustega seotud mistahes küsimused või palved tuleks esitada otse vastava sisu ja teenuse pakkujatele."];

var noChannelListRemind        = ["Ühtegi kanalit ei leitud. Kanalite loend on saadaval peale kanalite skaneerimist.","Kanali skaneering"];
var closeSubtitleRemind   = "Funktsioon muutub kättesaadavaks, kui subtiitrid on väljalülitatud. Kas soovite seda kohe teha?";

var estickerTitles = ["Ülirealistlikud kujutised","Värvid, mis ärkavad ellu","Väga elutruu liikumine","Dünaamiline pildikvaliteet","SR UHD-võimendamine","Koge 3D-maailma","Parem jõudlus","Tulevane 4K-sisu","Naudi internetimaailma","Ligipääs lisamaterjalile","Integreeritud dibiboksid","Ühenda kõik seadmed","Mitmesugused 4K-allikad","USB","Ülikiire WiFi","Mobiili sisu teleris","Mobiilseadme sisu","Kohalik sisu","DivX poolt heaks kiidetud","Sujuv pilt","Kanal valmis","TDT Premium"];
var estickerDescriptions = ["Hämmastavad filmielamused tänu UHD-ekraanile, mis võimaldab 4 korda detailsemat pilti kui Full HD ekraanid","Lai värvispekter kasutab ära erepunaseid ja smaragdroheliseid, et edasi anda iga stseeni emotsioonid","4K kaadri interpolatsioon ja taustvalgustus võitlevad liikumishägu probleemidega","Originaalpildi erksust võimendatakse, et luua tõeliselt dünaamiline väljanägemine koos suurepärase kontrastsusega","Naudi varasemast teravamaid telesaateid ja Blu-Ray plaate tänu super-resolutsiooni tehnoloogiale","Koge 3D-telerit ja vaata mitmesugust 3D-materjali","Quad Core tagab sujuva koostoime ja suurema jõudluse abil veelgi nauditavama meelelahutuskogemuse","HEVC (H.265) koodeki toetus peatselt saabuva standardse 4K-videolevi jaoks","Veebirakenduste, VOD-teenuste, kordusTV-de ja Interneti veebisirvimise küllus ","Lisateenused ja -materjalid teie lemmikutelt saate-edastajatelt võimaldavad näha rohkem","Ligipääs kõrglahutusega telekanalitele ilma täiendava teleriboksita","Mitmete kodus leiduvate digitaalallikate mugav ühendamine","Tulevikuks valmis teler, mis on võimeline taasesitama 4K-videosid kaadrisagedusega 50/60 Hz läbi HDMI 2.0 pordi koos HDCP 2.2-ga","4K-resolutsioonis videod või pildid suurele ekraanile otse USB-draivilt, kõvakettalt või kaamerast","Viimase generatsiooni 2x2 MIMO- ja AC-standard toob teieni konkurentsitu internetiühenduse kiiruse","Ekraanipeegelduse funktsioon lubab teil suurel ekraanil nautida mobiilseadmetest pilte, videosid ja rakendusi","Nutitelefonist ja tahvelarvutist pärit pilte, videosid ja rakendusi on võimalik kuvada suurel ekraanil","Kuvage kohaliku võrguga ühendatud seadmete sisu, nagu näiteks pildid ja videod, suurele ekraanile","Esitage renditud või omaenda filme, mis on DivX poolt kaitstud","Ülipeenike raam ja superõhuke disain","Testitud ja heaks kiidetud Canal+ poolt","Testitud ja heaks kiidetud TDT Premium’i poolt"];							

var eManualTextArray = ["E-kasutusjuhend","Kõik sisalduvad kujutised on illustreerivad. "];
var frontPanelRemind = "Esipaneel lukustatud";
var eRPRemind		 = "Poe režiimis ei saa ERP-päringut täita. Olete kindel?";	
var noRelatedChannel = "Seotud kanalid puuduvad";
var option0624Name          = ["BOP","BFS","Sündmuste kaupa","GetUserID","BGM","Reset all","Taasta tegevus","NRM","DVB-T2 ja riigi valik","HbbTVrežīms"];
var DVBT2AndChoice = ["Sees","Riigi järgi","Väljas"];
var hbbtvServiceRemind = "HbbTV teenus lisatakse peatselt.";
var insertWord = "Sisesta";			
var viewDetail = "Vaata üksikasju";							

var remindOAD  = "Tarkvarauuendus. Teise kanali kaudu võib olla allalaaditav uus soovituslik tarkvarauuendus. Selle allalaadimise aktsepteerimisel võidakse kanalit automaatselt muuta. Kas soovita seda teha kohe?";

var LEDStatus = ["Vilgub", "Parasts","Väljas"];
var netFlixRemind = "See funktsioon katkestab juurdepääsu Netflix'i teenustele kuni uue sisselogimiseni.";
var ESNExplanation = "Elektrooniline seerianumber";
var resetShopRemind = "Toimub süsteemi lähtestamine – ärge lülitage telerit välja";
var initialSelectOption = "Palun valige üks variantidest:";
var databaseRemind   = "Süsteem tuvastas andmebaasi teadmata põhjusel kahjustumise ja taastas selle automaatselt: vajutage jätkamiseks OK";
var Deactivation = "Deaktiveerimine";
var oadFutureRemind = "Tarkvarauuendus.\n Leiate tarkvarauuenduse siit: %s. Uuendamine võib võtta veidi aega ja ekraan võib pimeneda. Vastuvõtjat ei tohi uuenduse ajal välja lülitada. Uuendusega nõustumise korral jäta vastuvõtja ettenähtud ajal sisse. Kas soovid uuenduse vastu võtta?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Heliväljund";
var bt_soundOutPutTV = "Teleri kõlarid";
var bt_soundOutPutBT = "Bluetooth seade";
var bt_soundOutPutBT_TV = "Bluetooth ja teler";
var bt_refreshBarName = "Seadmed";
var bt_settingTips_On = "Lülita sisse Bluetooth-funktsioon ja skänni seadmed. ";
var bt_settingTips_Finding = "Otsitakse kasutatavaid seadmeid...";
var bt_settingTips_NoDevice = "Kasutatavaid seadmeid ei leitud.";
var bt_deviceList_State_NoConnect = "Ei ole ühendatud";
var bt_deviceList_State_Connecting = "Ühendamine...";
var bt_deviceList_State_Connected = "Ühendatud";
var bt_deviceList_State_Paired = "Paaritud";
var bt_deviceList_Conncect_Failed_Tips1 = "Ühendus ebaõnnestus.";
var bt_deviceList_Conncect_Failed_Tips2 = "Kinnitage, kas XXX-i Bluetooth-funktsioon on sees";
var bt_deviceList_Conncect_Success = "Ühendatud Bluetooth seadmega.";
var bt_deviceList_Disconncect_Success = "Ühendus Bluetooth seadmega lõppenud.";
var bt_deviceList_Disconnect = "Oled kindel, et soovid XXX-ga ühenduse katkestada?";
var bt_tipsTitle = "Nõuanne";
var bt_bluetooth_Pairing_Title = "Bluetooth paarimine";
var bt_bluetooth_Input_Pin = "Sisesta PIN:";
var bt_bluetooth_Output_Pin_Tip = "Sisesta klahvidega PIN XXXX.";
var bt_bluetooth_Pin_Wrong_Tip = "Vale PIN";
var bt_bluetooth_Remove_Pair_Title = "Päring";
var bt_bluetooth_Remove_Pair_Ask = "Kustutad seadme mälust?";							
							
							
var audioDescriptionName = ["Suuline kirjeldus","Kõlar","Kõlari helitugevus","Kõrvaklapp","Kõrvaklapi helitugevus","AD helitugevus","BT seade","BT seadme helitugevus","Võimendi","Kõlar"];
var audioDescriptionOptions = ["Väljas","Parasts","Suuline kirjeldus"];
var volumeOffRemind = 'Aktiveeri XXX („On”) menüüs Seaded.';	
var switchSourceRemind   = " sisestatud. Soovid vahetada selle kohe?";

var footballModeName = "Spordi režiim";
var resetStadium = "Staadion";						
							
var atvSearchMenu = "ATV manual search";
var dtvSearchMenu = "DTV manual search";
var settingNoticeSourceName ="Autom. allikas";

var smartTVOptions		= ["Smart TV portaal","HbbTV","Jaga & Vaata","Wifi ekraan","Tingimused",
    "Võrk ooterežiimis","Lähtesta smart TV","Cookie policy","Privaatsusreeglid","Andmete kustutamine"];
var supportOptions		= ["Kaugdiagnoos","Võta ühendust"];
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

var tvDoctor=["Kaugdiagnoos 2.0",
"Rakendus teeb diagnostikat ja parandab tootekogemust ainult teie nutiteleris. Rakendus kogub teleri tööandmeid ja mudeli info, laeb need serverisse ja kasutab neid teleri probleemide lahendamiseks. Teie isikuandmetele juurdepääs puudub. Veenduge, et teie teler on korralikult internetiga ühendatud.",
"Kohalik diagnoos",
"Kui diagnoosimine algab, järgige meie tugiteenuse töötaja juhiseid.",
"Kaugdiagnoos",
"Veenduge enne kasutamist, kas meie tugiteenuse töötaja on hetkel võrgus saadaval.",
"Seerianumber:",
"&nbsp;&nbsp;&nbsp;&nbsp;Kasutajatunnus:",
"Ühendamine...",
"Toimub diagnoosimine. Ärge katkestage võrguühendust.",
"Internetiga ei saa ühendust. Palun kontrollige võrguühendust.",
"Välju"
];
var contactUsOption = ["Võta ühendust",
    "Kui selle seadme kasutamisega on probleeme, Võta ühendust.",
    "Kontakt",
    "Veebisait: minge saidile",
    "Helistage keskuse numbrile:","Teave seadme kohta","Mudeli nimi:",
    "Programmatūras versija:","","Kasutajatunnus:","Projekti ID:",
    "Kliendi tüüp:","Juhtmeta ühenduse MAC aadress:","Püsiühenduse MAC aadress:","Netflix ESN:","Otsige üles teave oma mobiiltelefoni kohta.",
    " ja valige oma asukohamaa."];


//本地launcher的翻译，与服务器无关，只用于本地launcher
var homePageWords = ["Ajalugu", "Otsing"];//home页的翻译
var titlePageWords = ["Kodu", "Videod","TV","Äpid"];//index的标题翻译
var videosPageWords = ["Film", "Sport","Muusika","Populaarsed","Mäng","Hariv","Uudis"];//videos页的内容翻译

//同时应用于本地和服务器
var statusPageWords = ["USB","Seaded","WiFi","Juhtmega"];//状态栏的翻译

//二级页面的翻译
var searchPageWords = ["Otsing", "Populaarsed otsingud:","Saated, filmid, inimesed..."];
var resultSearchPageWords = ["Tulemused järgneva kohta", " ","Proovi muid võtmesõnu.","Vabandame, ei leitud ühtegi videot järgneva kohta "," "];
var historyPageWords = ["Ajalugu", 'Vajuta ajaloo kustutamiseks',' ',"Kustuta üks","Kustuta kõik","Eile","Täna"," Sa ei ole veel ühtegi videot vaadanud.","Vaatamiste ajaloo kustutamine õnnestus!"];
var channelPageWords = ["Vabandame, ühtegi videot ei leitud."];


//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9",
                       	   "Zoom-","0","Zoom+",
                       	   "Välju","0","",
                       	   "Nimekiri","0","Tekst",
                       	   "Vednis","Sisene","Välju",
                       	   "Menüü","Subtiitrid","Info",
                       	   "Stopp",
                       	   "Info","Menüü","Välju",
                       	   "Välju"
                       	   ];

//added for LA sports mode
var sportsModeInitReminds= ["Seda viisardit kasutatakse USB-draiveri seadistamiseks spordirežiimile. Valige seadistusrežiim.",
						 "Valige spordirežiimi faili suurus.",
						 "Spordirežiimi faili loomine",
						 "USB-liidese kiirus on spordirežiimi jaoks liiga aeglane (< %f MB/s)!",
						 "USB-liides on spordirežiimi jaoks valmis. Soovitame vastuvõtu kvaliteedi parandamiseks kiirust siiski suurendada (väärtuseni > %f MB/s).",
						 "USB-liides on spordirežiimi jaoks valmis."];

var sportsModeExtra	= ["Kas soovite spordirežiimi peatada ja kanalit vahetada?",
						"Kas soovite spordirežiimi peatada ja vahetada allikale, mis on ühendatud SCART-sisendile?",
						"Kas soovite spordirežiimi peatada ja vahetada allikale, mis on ühendatud HDMI-sisendile?",
						"Spordirežiimi ei toeta skrambleeritud kanalid.",
						"Kas soovite spordirežiimi peatada ja siseneda elektroonilisse saatekavva (EPG)?",
						"Kas soovite spordirežiimi peatada ja siseneda meediasse?",
						"Kas soovite spordirežiimi peatada ja sisendallikat vahetada?",
						"Teler väljub kasutatavast spordirežiimist. Kas soovite väljuda?"];
var remoteControlNote = "- Kaasasolev kaugjuhtimispult võib erineda vastavalt toote mudelile";


var textArray = ["Volume","Channel","Source","Switch/Power","Guide","seconds to Power OFF"];
var guideArray = ["VOL-","VOL+","CH-","CH+","Pre","Next"];
var favChannelListRemind = ["Lemmikkanalid puuduvad. Palun minge teistesse loenditesse ja kasutage „Rohelist võtit“ lemmikkanalite lisamiseks."];

var proxySetting = ["Puhvri sätted","Port"];
var powerOffShop = ["Soovitus kasutada poerežiimi, kas jätkata?"];
var tcastTextPageWords = ["Palju videoid ja rikkalikult rakendusi","Teleripuldi abil ühe nupuvajutusega","Suurepärane sisu on teie suurel ekraanil"];
var tcastOtherWords = ["Skannige QR-koodi ja laadige alla T-Cast","Teler on ühendatud võrku","Teleri nimi","T-Cast"];
var hbbtvWords = ["HbbTV-seaded","HbbTV","Cookies","Kolmanda osapoole küpsised","Seadme ID","jälgimine"];
var hbbtvTrackingWords = ["YES","NO","Ärge muretsege"];
var eStickerTipWords = ["Salve mahtuvus on alla 400 M, kas soovite esitlusrežiimi videod kustutada, et saada rohkem mälumahtu?"];
var delEstickerVideoRemid = ["Video on edukalt kustutatud"];
var selectSatRemind = "Saate valida ainult 20 satelliiti!";
var cookiePolicyTitle = "Küpsiste teatis – veebi nutiTV teenused";
var cookiePolicyConditions = ["Ettevõtte austab enda toodetud nutiTV-de valmistamisel ja pakutavate Teenuste pakkumisel teie privaatsust. Küpsiseid kasutavad paljud veebisaidid ja muud internetiteenused ning teie nutiTV võtab vastu, salvestab ja edastab küpsiseid, et need veebisaidid ning teenused toimiksid korralikult. Lisaks kasutab ettevõtte küpsiseid siis, kui pakub teile Teenuseid. Käesolevas Küpsiste Privaatsusteatised kirjeldab Ettevõtte, mis küpsiseid salvestatakse teie nutiTV-sse ja kuidas saate hallata.\nPalun pidage meeles, et Privaatsusteatis kehtib kõikidele isikuandmetele, mida Ettevõtte kogub ja/või töötleb küpsiste kaudu või nende abil ning peaksite lugema nii Küpsiste Teatist kui ka Privaatsusteatist.\n1. Mis asi on küpsis?\nKüpsised on teie nutiTV-sse paigutatud väikesed tekstifailid. Kui kasutatakse telekanali veebisaiti või punase-nupu-teenust, siis veebisait või teenus võivad nutiTV-s hoiustada küpsist. Korduval kasutamisel saadab nutiTV-sse paigutatud küpsis selle paigutanule teavet. Küpsised on laialt levinud ja neid kasutatakse mitmetes veebisaitides ja teenustes. Kõik küpsised sisaldavad tavaliselt küpsise looja domeeni nime, küpsise „kehtivust“ ja väärtust (tavaliselt ainulaadne number). Küpsiste põhjalikuma selgituse ja toimimise teabe saamiseks külastage www.allaboutcookies.org.\nKüpsiseid saab jagada funktsiooniküpsisteks ja funktsioonituteks küpsisteks. Funktsiooniküpsised on küpsised, mida on väga vaja teile nutiTV teenuste pakkumiseks, veebisaitidele ja muudele teenustele, et nutiTV-sse jõuaks õige sisu. Funktsioonitud küpsised on kõik muud küpsised.\nKäesolev Küpsiste Teatis viitab küpsistele, mille oleme paigutanud meie või ka reklaamküpsistele, mida kolmandad osapooled võivad paigutada teie nutiTV-sse meie teenuste kaudu. Käesolev Küpsiste Teatis ei viita küpsistele, mida võidaks paigutada siis, kui kasutate nutiTV teenuseid kolmanda osapoole veebisaitide, teenuste või rakenduste kasutamiseks. Selliste küpsiste puhul suuname teid selliste kolmanda osapoole vastava küpsiste teatise juurde. Sellegipoolest kirjeldab käesolev Küpsiste Teatis selliste küpsiste kustutamist (vt allpool peatükki 4).\n2. Milliseid funktsioonituid küpsiseid kasutame?\nReklaam: teie nutiTV-s võidakse nutiTV teenuste kasutamise ajal kuvada video- ja piltreklaame. Neid reklaame võime näidata meie või meie reklaamiserveri, millel on keskne suunav roll selliste reklaamide näitamisel, kaudu kolmandad osapooled. Meie või kolmanda osapoole reklaamiserver paigaldab teie nutiTV-e küpsise. Selle küpsise kaudu registreerib reklaamiserver, kas reklaam on edastatud teie nutiTV-e või, kas keegi on teie nutiTV-s klõpsanud reklaamil. Me kasutame sellisesse reklaamküpsisesse salvestatud teavet selleks, et jätta meelde, millised reklaame teie nutiTV-e on edastatud. Nii saame veenduda, et ühes nutiTV-s ei näidata samu reklaame liiga palju ja et suudame tasuda oma reklaamipartneritega sõlmitud kaubanduskokkuleppeid. Me ei kasuta seda teavet suunatud reklaamide näitamiseks. Lisaks võivad kolmandad osapooled edastada meie reklaamisüsteemi kaudu reklaame ja selliste reklaamide näitamisel paigutada küpsiseid teie nutiTV-e. \nMuuhulgas sisaldavad need küpsised teavet näidatavate reklaamide kohta, millistel rakendustel või domeenidel selliseid reklaame näidatakse ning teie IP-aadressi. Selle eesmärk on meelde jätta, kui sageli teatud reklaami näidatakse ja ennetada sama reklaami pidevat kordumist. Kõrvalised kolmanda osapoole reklaamijad, kes samuti paigaldavad reklaame, võivad samuti küpsistega jälgida teie tegevust mitmetes veebisaitides ja näidata teie isiklikele eelistustele vastavaid reklaame.\n3. Kolmanda osapoole veebisaidid\nKui külastate oma nutiTV teenuste kaudu kolmandate osapoolte veebisaite või teenuseid, siis sellised veebisaidid või teenused võivad paigaldada küpsiseid teie nutiTV-e ning sellised veebisaidid jälgivad ja salvestavad teie tegevust sellistel veebisaitidel. Me ei taotle ega julgusta selliseid tegevusi ja me ei kasuta sellist teavet. Selliste osapoolte küpsiste kasutamist puudutav lisateave on loetav taoliste veebisaitide ja teenuste vastavate küpsiste teatisest ja privaatsusteatisest.\n4. Küpsise kustutamine\nTeie nutiTV kasutajaliides võimaldab kustutada kõiki küpsiseid ja teisi nutiTV kohaliku veebilehitseja mälu. Enne nutiTV müümist või edasi andmist soovitatakse tungivalt eemaldada kõik küpsised ja lokaalselt salvestatud seaded.\n5. Võtke meiega ühendust\nKui teil on meie Küpsiste Teatise või meie küpsiste kasutamisviiside kohta mistahes küsimusi või arvamusi, siis saate meile saata e-kirja aadressile FRsupport@tcl.com.\nVersioon: 1,0\n"];
var privacyPolicyTitle = "Privaatsusteatis – veebi nutiTV teenused";
var privacyPolicyConditions = ["Teie isikuandmete käsitlemisel austame teie privaatsust. Käesolev Privaatsuspoliitika kirjeldab üksust, mis vastutab meie nutiTV teenuste („Teenused“) kasutamise tõttu teilt kogutavate andmete kogumise, töötlemise ja kasutamise eest, milliseid isikuandmeid me teilt kogume, mida me nendega teeme ja teie õigusi seoses sellega, kuidas me kasutame isikuandmeid. \n1. Vastutav andmetöötleja\nTeenuste kasutamisel hoiustab, töötleb ja kasutab kogutud isikuandmeid Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzheni linn, Guangdong provints, Hiina („Ettevõtte“). Ent, palun pidage meeles, et me ei vastuta kõikide allpool mainitud andmetöötluse viiside eest. Sellest hoolimata oleme vastavaid tegevusi kirjeldanud oma Privaatsusteatises, kuna asjakohane töötlemine on seotud sellega, kuidas kasutate nutiTV-d.\n2. Nõusolek andmete töötlemiseks\nTeie andmete teatud kogumis-, töötlemis- ja/või kasutamisviisid vajavad teie nõusolekut. \nKui olete nõustunud, et teie isikuandmeid kasutatakse teenuse täiustamiseks, siis teie nõusolek on sõnastatud järgmiselt:\n„Olen nõus, et kasutajate harjumuste analüüsimiseks kogutakse, töödeldakse ja kasutatakse minu seadme käivitamise aega, DTV kanali loendit, lemmikute loendit, külastusaega ja vaadatud kanaleid, et pakkuda paremaid Teenuseid ja/või analüüsida kui palju ettevõtte veebikasutajaid on päevas/kuus/aastas ning jagada seda teavet TV-jaamadega.“\nKui olete nõustunud, et teie isikuandmeid kasutatakse teie huvidele vastavate reklaamide pakkumiseks, siis teie nõusolek on sõnastatud järgmiselt:\n„Olen nõus, et soovitud reklaami saamiseks kogutakse, töödeldakse ja kasutatakse minu kliendi tüüpi ja riiki.“\nNõusoleku andmine on vabatahtlik ja keeldumise korral saate jätkata Teenuste kasutamist. Sellegipoolest võite näha oma eelistusi mitte arvestavaid reklaame ja muud sisu. Olenemata teie nõusolekust jätab ettevõtte endale õiguse koguda, töödelda ja/või kasutada ülal olevaid andmeid vastavalt kohaldatava õigusega lubatud ulatuses.\nVõite tulevikus eelnimetatuga nõustumisest loobuda igal ajal. Võite esitada vastuväite oma isikuandmete kasutamisele turunduslikel eesmärkidel ning turu- ja arvamusküsitluses ning Teenuste asjakohastamiseks vastavalt teie vajadustele. Nõusolekust loobumiseks ja/või vastuväite esitamiseks muutke oma nutiTV-s vastavaid privaatsusseadeid.\n3. Kogutud isikuandmed\nOlenemata teie nõusolekust kogub, töötleb, salvestab ja kasutab ettevõtte järgmisi andmeid:\nseadme-ID: teie nutiTV salvestab kindla ja ainulaadse numbri, mille alusel saame tuvastada nutiTV-d ja tõestada selle ehtsust Teenuste kasutamise ajal. Seda numbrit nimetatakse seadme-ID-ks. Seadme-ID edastatakse meie teeninduspartnerile, et teile saaks pakkuda Teenust. Lisaks edastame seadme-ID-d valitud sisupartneritele ehtsuse tõestamise eesmärkidel. Need sisupartnerid tõestavad teie nutiTV ehtsust seadme-ID abil, et tagada ligipääs sisupartneri teenustele;\nIP-aadress ja MAC-aadress: teie nutiTV-le määratakse IP-aadress, kui kasutate internetti. See IP-aadress edastatakse meile ja meie töötleme seda iga kord, kui nutiTV pärib Teenustelt teavet või andmeid. Ruuterit (nt kohalikku koduvõrku või kohalikku RLAN-i) kasutava nutiTV puhul võime koguda ja töödelda ruuteri IP-aadressi. MAC-aadress on teie nutiTV kõikidele võrguliidestele määratud ainulaadne number. Lisaks kogume ja töötleme MAC-aadressi, kui nutiTV pärib Teenustelt teavet või andmeid;\nteenuse taodeldavad andmed: Kui ühendate oma nutiTV internetiga ja lülitate sisse nutiTV, siis see ühendub automaatselt meie teeninduspartneri hallatavate Teenustega. Seejärel tõestatakse, et teie nutiTV võib ligi pääseda Teenustele. Teenused salvestavad tõestamise eesmärgil ühe või mitu ainulaadset numbrilist tuvastajat, mis on seotud teie nutiTV-ga. Teenusega ühendumisel saadab nutiTV määratud IP-aadressi ja seadmepõhise teabe (nutiTV mudeli, tarkvara versiooni), et kontrollida tarkvarauuenduste olemasolu;\nteenuse seaded: teenuste tavalise funktsionaalsuse osana saate ise määrata Teenuste kuvatavate rakenduste järjekorda. Meie teeninduspartner salvestab järjekorra ja eelistused, mille olete määranud Teenuste kasutamise ajal. See teave seostatakse seadme-ID-ga;\nseadmepõhine teave: nutiTV salvestab enda ja oma seadistuste kohta erinevat teavet. Sinna hulka kuulub nutiTV tüüp, nutiTV operatsioonisüsteemi versioon, nutiTV paneeli eraldusvõime, projekti ID (nt seadistusfailide teave), kasutajaagent, veebilehitseja nimi, veebilehitseja versioon ning nutiTV-s seadustatud keel ja riik. Seda teavet kasutame meie ja edastame meie teeninduspartnerile ning sisupartneritele;\nreklaam: teenused võivad esitada reklaame. Neid reklaame esitame meie või meie reklaami inventuuri kasutavad kolmandad osapooled. Kõik reklaamid edastatakse meie reklaamiserveri või selle vahendite kaudu. See täidab reklaamide edastamisel koordineerivat rolli. Meie või kolmanda osapoole reklaamiserver võib nutiTV-e salvestada küpsise. Nende küpsiste kohta leiate lisateavet meie Küpsiste teatisest;\nteenindus- ja sisu-partneri internetikasutus: teenuste kasutamisel taotleb nutiTV interneti kaudu Teenustelt andmeid. Vastavalt eespool mainitule saadetakse nende taotluste osana teie IP-aadress ning nutiTV-s seadistatud keel ja riik. Meie teeninduspartner töötleb asjakohaseid andmeid vastavalt oma privaatsusteatisele;\nteise ekraani kasutamine: Kui kasutate meie teise ekraani rakendust, siis meie kogume ja töötleme oma serveris rakenduses lubatud käske ning riigi- ja keeleseadeid, DTV kanali loendit, lemmikute loendeid, kavade loendeid, praegust kanalit, teie nutiTV protokolli versiooni ja IP-aadressi. Seejärel haldavad meie serverid teie nutiTV-d vastavalt sellele, kuidas kasutate teise ekraani rakendust;\nHbbTV – „punane nupp“: telekanalid („Kanalid“) võivad oma TV-signaali kaudu saata lisateavet. Kui nutiTV-le laekub sellise lisateabe näol erijuhised ja kui nutiTV on ühendatud internetiga, siis nutiTV laeb alla Kanali veebisaidilt pildi või väikese lehekülje ning kuvab need koos kaugjuhtimispuldil „punast nuppu“ vajutada soovitava teabega, kui soovite kasutada Kanali pakutavaid lisateenuseid. See juhtub igal kord, kui vahetate Kanalit. Kui kanali veebilehelt laetakse alla pilti, siis nutiTV edastab teatud isikuandmeid, nt DTV kanali loendit, praegust kanalit, sündmuse teabetabelit, TV-aega, teie nutiTV IP-aadressi ja (olemasolu korral) nutiTV-le talletatud küpsiseid. Kanal vastutab selliste andmete kogumise, töötlemise ja/või kasutamise eest. Kui kasutate Punase Nupu kaudu ka Kanali pakutavaid lisateenuseid, siis Kanalid võivad koguda teie kohta muid isikuandmeid (nt milliseid tellitavaid videoid vaatate, uudiseid loete jne).\n4. Põhjused, miks me töötleme ja/või kasutame teie isikuandmeid\nMe töötleme kogutud andmeid järgmistel eesmärkidel:\nteenuste pakkumiseks: Kasutame IP-aadressi, MAC-aadressi, seadme-ID-d, nutiTV operatsioonisüsteemi versiooni, nutiTV kliendi tüüpi ja selle eraldusvõimet, projekti ID-d (ehk seadistusfailidega seonduvat teavet), oma DTV kanali loendit, vaadatud kanaleid, ajavööndit, riigi- ja keeleseadeid selleks, et võimaldada teie nutiTV-l ligi pääseda Teenustele ja sisupartnerite pakutavatele teenustele. Eesmärkideks on (muu hulgas) ehtsuse tõestamine, asukohapõhiste teenuste (nt ilmateated) pakkumine, solvamistega toimetulek, ohtudega tegelemine, Teenuste saadavalolevuse jälgimine ja kasutajaeelistest tagavarakoopiaid tegevate teenuste pakkumine;\nehtsuse tõestamine: kasutame seadme-ID-d ja MAC-aadressi ehtsuse tõestamiseks;\ntarkvarauuendused; Iga kord, kui lülitate nutiTV sisse, saadab see meile teie nutiTV IP-aadressi, seadme-ID, tarkvara versiooni ja kliendi tüübi, projekti ID (ehk seadistusfaile), kasutaja ID ja seerianumbri, et pakkuda ja esitada teile asjakohaseid tarkvarauuendusi; \nteenuste täiustamine: teenuste kasutajakogemuse täiustamiseks kasutame koondatud või varjatud kasutamisandmeid (ehk andmeid selle kohta, kuidas kasutate Teenust);\nreklaamide esitamine: Reklaamiküpsise teabega lubame süsteemil logida nutiTV-l näidatavaid reklaame, et te ei saaks liiga palju sarnaseid reklaame ja et suudaksime tasuda oma reklaamipartneritega sõlmitud kaubanduskokkuleppeid. Kõrvalised reklaamijad, kes pakuvad reklaame Teenustes või pärast meie reklaamiserveriga ühildamist sisupartneri veebisaitidel, võivad samuti küpsistega jälgida teil erinevatel veebisaitidel ja esitada reklaame vastavalt teie isiklikele eelistustele;\nreklaamide optimeerimine: reklaamide vaatamiste ja nendel klõpsamise arvu kasutame Teenuse tarbijate reklaamikogemuse optimeerimiseks;\nallahindlused; valitud sisupartneritele pakume seadme-ID-d, et nad saaksid tuvastada, kuidas pakkuda nende kollektsioonis olevatele tellitud pealkirjadele tasuta ligipääsu;\nkorrakaitse; võib-olla peame esitama andmeid pädevatele õiguskaitseasutustele või kohtutele. Kui me seda teeme, siis ainult vastavalt siduvale õigusaktile nagu korraldusele või kohtumäärusele, mille tõttu oleme kohustatud tegema koostööd vastavate asutustega.\nTeenuseid saab kasutada varjunimedega, välja-arvatud juhul kui teatud teenused nõuavad teilt nime ja/või e-posti aadressi esitamist.\n5. Saajate kategooriad\nEttevõtte jagab teie Teenuste kasutamise ajal kogutud isikuandmed ainult järgnevate kolmandate osapooltega:\nnutiTV teenuste kolmas osapool, kui nõuate selliseid teenuseid (nt kui käivitate nutiTV-s Netflixi rakenduse, siis võime Netflixiga jagada teie IP-aadressi, MAC-aadressi, tarkvara versiooni ja teleka mudelit);\nkolmanda osapoolena olevate sisupartneritega, kui taotlete selliste sisupartnerite olemasolul teatud sisu (Nt GoLive IP TV teenuse pakkumiseks võime juriidilisest isikust GoLive teenusepakkujale jagada teleka klienditüüpi, IP-aadressi ja keele seadeid).\nEttevõtte jagab teatud teie isikuandmeid ülalmainitud kolmandate osapooltega ulatuses, millele olete nõusoleku andnud.\nteenust vahendavad teenusepakkujad kui volitatud andmetöötlejad, kes aitavad Teenuseid pakkuvat Ettevõtet.\nEttevõtte jagab teie isikuandmeid teiste kolmandate osapooltega ainult siis, kui Ettevõtte on selleks kohustatud vastavalt seadustele (nt kohtutele või uurimisorganitele), teil on asjakohaseks jagamiseks luba olemas või jagamine on vastavalt kohaldatavale õigusele muul viisil seaduslik.\n6. Riigid, kus teie andmeid töödeldakse\nEttevõtte ja/või osad ülal nimetatud teie isikuandmete saajad ei pruugi asuda Euroopa Majanduspiirkonnas (ehk järgmistes riikides: Hiina Rahvavabariigis ja Ameerika Ühendriigis). Seega võidakse teie isikuandmeid töödelda riikides, mille isikuandmete kaitset ei peeta piisavaks vastavalt Euroopa Parlamendi ja nõukogu direktiivile 95/46/EÜ, 24. oktoober 1995, üksikisikute kaitse kohta isikuandmete töötlemisel ja selliste andmete vaba liikumise kohta.\n7. Teie õigused\nVõite ettevõttega ühendust võtta, et uurida, kuidas ettevõtte töötleb teie isikuandmeid ja/või kasutada oma seadusjärgseid õigusi seoses enda isikuandmete ligipääsemise, parandamise, kustutamise ja sulgemise osas ja/või esitada oma isikuandmete turunduslikel ja/või arvamusküsitluste läbiviimise eesmärkidel töötlemise kohta vastuväite.\n8. Privaatsusteatise muudatused\nOma Teenuste täiustamiseks võime nõuda käesoleva Privaatsusteatise muutmist – nt uute tehnoloogiate kasutusele võtmiseks või uute teenuste tutvustamiseks. Jätame endale õiguse muuta või täiendada käesolevat Privaatsusteatist igal ajal.\n9. Kontaktteave\nKui teil on Privaatsusteatise kohta mistahes küsimusi või kui soovite esitada kaebuse selles kohta, kuidas me käsitleme teie isikuandmeid, võtke ühendust ühe all oleva suhtlusviisi kaudu:\ne-posti aadress: FRsupport@tcl.com\nVersioon: 1,0\n"];
var privacyPolicyTerms = [
    "Aktiveeri nuti-TV teenus",
    "Olen nõust, et kasutajate harjumuste analüüsimiseks kogutakse, töödeldakse ja kasutatakse minu seadme käivitamise aega, DTV kanali loendit, lemmikute loendit, külastusaega ja vaadatud kanaleid, et pakkuda paremaid teenuseid ja/või analüüsida kui palju TCL-i veebikasutajaid on päevas/kuus/aastas ning jagada seda teavet TV-jaamadega.",
    "Aktiveeri soovitusteenus.",
    "Aktiveeri mobiilse seadme jaoks teine aknarakendus",
    "Aktiveeri tarkvara automaatvärskendused.",
    "Aktiveerige FreeviewPlay teenus"
];
var privacyPolicyTips = [
    "Kõik Smart TV teenused on aktiveeritud.",
    "HbbTV teenus, mida pakuvad TV-kanalid, kui see on tüünerisse sisse ehitatud, on deaktiveeritud.",
    "Sisu- ja TV-programmide soovitusteenus on deaktiveeritud.",
    "Teise ekraani rakendus on deaktiveeritud.",
    "Teler ei laadi automaatselt alla tarkavara uuendusi ja uusi saadaolevaid funktsioone.",
    "FreeviewPlay sisu on deaktiveeritud."
];
var privacyPolicyRemind = "Märgistage vastav märkeruut valikus Sätted.";
var set = "seadistamine";
var copyShopDemoTips = ["Ühendatud USB-ga. Kas kopeerida video mälupulgale?","Kopeeri video mälupulgale","Video on edukalt kopeeritud.","Video kopeerimisel ilmnes viga."];
var dataDeletionWords = ["Kustutage taustaserveritest oma nutiTV teenuse andmed.","Märkused: pärast selle valiku valimist kustutatakse teie nutiTV kasutajaga seotud andmed 1 kuu jooksul. Palun pidage meeles, et kustutamine ei mõjuta TV-s talletatavaid andmeid.","Ära enam saada nutiTV serverile andmeid.","Märkused:  pärast selle valiku valimist ei edastata teie nutiTV teenuste kasutamisega seotud andmeid enam serverisse. Teie TV ei saa enam soovitatud teenuseid.","Lisateabe leiate veebisaidilt www.tcl.eu"];
var miracastWords = ["Juhtmevaba ühendus","Androidi telefoni telerisse peegeldamine","Klõpsake ühendamiseks","See funktsioon on saadaval vaid Androidi telefonides"];
var miracastTips = ["Ühendamise sammud","Avage süsteemi sätted","Veel võimalusi ühendamiseks \n / Teised juhtmeta ühendused","Valige juhtmeta kuvar","Klõpsake ühendamiseks \n leidmise ootamine"];
var termsAndConditions = ["\nKäesoleva teleri (käesoleva „Seadme“) kaudu teile kättesaadav sisu ja teenused (ühiselt „Litsentseeritud rakendus“) on teile litsentsitud, mitte müüdud, selleks et neid kasutada ainult vastavalt esitatud tingimustele. Kõik õigused kuuluvad litsentseeritud rakenduse pakkujatele (ehk „Rakenduse pakkujatele“), kui neid õigusi pole selgesõnaliselt teile antud.\n\n1.	Litsentsi ulatus\n\nAsjakohase Rakenduse pakkuja poolt teile antud Litsentseeritud rakenduse litsentsi edasiandmise õigus on piiratud, et kasutada teile kuuluvas või kasutatavas Seadmes Litsentseeritud rakendusi. Litsentseeritud Rakendust ei tohi jagada ega avaldada võrgus, kus seda võiks kasutada mitu seadet samal ajal. Litsentseeritud Rakendust ei tohi välja laenata, anda kasutus- ja kapitalirendile, edasi levitada või all-litsentsida. \n\nKõik Litsentseeritud rakendused ja kogu nende kaudu ligipääsetav sisu kuulub Rakenduse pakkujale ning on kaitstud kohaldavate intellektuaalomandi õigusaktidega. Kui kohaldatav seadus ei määra teisiti, siis te ei tohi mistahes Litsentseeritud Rakendust või mistahes värskendust või nende mistahes osa muuta, kopeerida, dekompileerida, pöördprojekteerida, lahti võtta, taasavaldada, üles laadida, postitada, edastada, tõlkida, lähtekoodi hankida, luua või muul viisil avalikustada. Selle piirangu rikkumise korral võib teid võtta vastutusele ja nõuda sisse tekitatud kahju. Litsentsi tingimused reguleerivad Rakenduse pakkuja kõiki uuendusi, mis asendavad ja/või täiendavad algset Litsentseeritud Rakendust, välja arvatud juhul, kui sellise uuendusega kaasneb eraldi litsents, sellisel juhul kehtivad selle litsentsi tingimused. Ainult teie üksi vastutate Litsentseeritud Rakenduse uuendamisega seotud mistahes osa- ja kogukulude eest (olemasolu korral).\n\n2.	Kolmandate poolte materjalid\n\nLitsentseeritud Rakendus võib lubada juurdepääsu Rakenduse pakkuja ning kolmanda poole teenustele ja veebisaitidele (ühiselt „Teenused“). Kõikide Teenuste kasutamisel võite märgata sisu, mida võidakse käsitleda solvava, siivutu või vastuolulisena ja mis võib või ei või sisaldada roppusi ning mistahes otsingu tulemused või teatud URL-i sisestamine võib automaatselt ja tahtmatult luua linke või viiteid vastuolulisele materjalile. Sellegipoolest ei ole käesoleva Seadme tootjal („Tootja“) ja Rakenduse pakkujal teie ees mingeid kohutusi solvava, siivutu või vastuolulisena tunduva sisu eest. \n\nTootja ei vastuta sisu uurimise või hindamise eest ja selliste Teenuste mistahes muu teguri õigsuse, täielikkuse, ajakohasuse, kehtivuse, autoriõigusele vastavuse, seaduslikkuse ja kvaliteedi eest. Tootja ei garanteeri, toeta ega eelda, et teie ega muu isiku ees oleks kohustus vastutada mistahes Teenuse eest. \n\nTeenused võivad sisaldada salastatud sisu, teavet ja materjali (ühiselt „Kolmanda poole materjale“), mida kaitsevad kohaldatavad intellektuaalomandi ja muud seadused ning te ei tohi selliseid Kolmanda poole materjale kasutada mingil muul viisil, va lubatud viisil Teenuseid. Kui kohaldatav õigus ei sätesta teisiti, siis te ei tohi reprodutseerida, muuta, välja laenata, anda kasutus- ja kapitalirendile, müüa ega edastada Kolmanda poole materjale ega luua nendest mistahes viisil tuletatud teoseid ega kasuta neid Teenuseid mingil volitamata viisil. Te ei tohi kasutada Teenuseid mistahes viisil ühegi teise poole ahistamiseks, kiusamiseks, ähvardamiseks, laimamiseks ega õiguste muul viisil rikkumiseks või rüvetamiseks, kusjuures Tootja ei vastuta mingil viisil sellise toimimisviisi eest ega mistahes ahistamise, ähvardamise, laimamise, rünnaku või muu ebaseadusliku teate või selle edastamiste eest, mille võite saada mistahes Teenuste kasutamisel. \n\n3.	Mingit garantiid\n\nKõiki litsentseeritud rakendusi ja Teenuseid pakutakse „nagu on“ põhimõttel ja „kättesaadaval kujul“ ilma mingi otsese ega kaudse garantiita. Tootja keeldub kõigist otsestest ja kaudsetest garantiidest ning tingimustest seoses Litsentseeritud Rakenduse ja Teenusega, k.a, kuid mitte ainult kaubanduslike garantiide, teatud eesmärgiks sobivuse, täpsusega, vaikse nautimise ja kolmandate isikute õiguste mitterikkumise eest. Tootja ei garanteeri selle seadme kaudu pakutava mistahes Litsentseeritud rakenduse ega Teenuse täpsust, kehtivust, õigeaegsust, seaduslikkust, ega terviklikkust ning ei garanteeri seda, et Seade, Litsentseeritud rakendused või Teenused vastaksid teie vajadustele ega seda, et seadme ning Teenuste töö oleks katkematu või ilma vigadeta. Kui Litsentseeritud Rakendus või Teenus on vigane, siis maksate kõigi vajalike hooldamise, parandamise või täpsustamise kulude eest ainult teie.\n\nLitsentseeritud Rakendusi ja Teenuseid võib muuta, peatada, eemaldada, lõpetada või katkestada või nendele juurdepääsu võib keelata igal ajal ilma ette teatamata, ja Tootja ei garanteeri mingil moel, et mistahes Litsentseeritud Rakenduse ja Teenusega kaasnev sisu või teenus on kättesaadav mistahes aja jooksul. Sellist sisu ja teenuseid edastavad kolmandad pooled võrkude ja vahendite kaudu, mille üle Tootjal puudub kontroll. Eelolevat üldreeglit piiramata keeldub Tootja selgesõnaliselt vastutusest või kohustustest mistahes käesoleva Seadme kaudu kättesaadavaks tehtud sisu või teenuse mistahes muutuste, katkestuste, puuete, eemaldamise või peatamise eest. Tarkvara pakkuja ja muud Teenusepakkujad jätavad endale õiguse muuta, peatada, eemaldada või keelata juurdepääsu mistahes Litsentseeritud rakendusele või Teenusele igal ajal ilma etteteatamiseta. Lisaks võib Tootja kehtestada piirangud teatud Litsentseeritud rakenduse või Teenuse kasutamisele või juurdepääsule igal juhul ja etteteatamise ning vastutuseta.\n\nTootja ei paku Litsentseeritud rakendustele ega Teenustele klienditeenindust. Litsentseeritud rakenduste või Teenustega seotud mistahes küsimused või taotlused tuleks esitada otse vastavale pakkujale.\n\n4.	Teabe kogumine ja kasutamine\n\nTootja, Rakenduse pakkujad ja Teenusepakkujad võivad koguda ning kasutada tehnilisi andmeid ja asjakohast teavet, sealhulgas, kuid mitte ainult, käesoleva Seadme ning välisseadmete süsteemi ja rakenduse tarkvara tehnilist teavet, et pakkuda teile (olemasolu korral) tarkvaravärskendusi, tootetuge ja muid teenuseid, mis on seotud Seadme ja Litsentseeritud rakendusega. Tootja, Rakenduse pakkujad ja Teenusepakkujad võivad sellist teavet kasutada niikaua, kuni see on vormingus mis ei võimalda teie tuvastamist, täiustada oma tooteid või pakkuda teile teenuseid ja tehnoloogiat. Kogumise ja kasutamise kohta lisateabe saamiseks külastage meie privaatsuspõhimõtete saiti: http://www.tcl.eu/en/.\n\n5.	Teatud funktsioonide kättesaadamatus\n\nRakenduse pakkuja piirangute tõttu ei pruugi kõik funktsioonid, rakendused ja teenused olla saadaval käesolevas Seadmes (sealhulgas välisseadmetes) ega kõigis piirkondades. Mõned käesoleva Seadme funktsioonid võivad nõuda ka täiendavaid välisseadmeid või liikmemakse, mida müüakse eraldi.\n\n6.	Kohustuste piirangud\n\nKohaldatava seaduse ulatuses pole Tootja mingis olukorras, k.a hooletus, vastutav ei kokkuleppest ega õiguserikkumisest tulenevast mistahes otseste, kaudsete, juhuslike, eriliste ega põhjuslike kahjustuste eest, advokaaditasude, kulutuste eest, mis tulenevad või on seotud selles sisalduva mistahes teabega või mis on seotud Seadme, mistahes Litsentsitud rakenduse või mistahes teie või kolmandate poolte Teenuse kasutamisega, isegi kui teid on hoiatatud taolise kahjustuse võimalusest.\n\nTootja vastutab ainult tahtliku ja raske hooletuse korral."];
var privacyNotice = ["\nIsikuandmete töötlemisel austame teie privaatsust. See privaatsusavaldus kirjeldab teilt kogutavate nutiTV-teenuste („Teenused”) kasutamist iseloomustavaid isikuandmeid töötlevat vastutavat töötlejat, kogutavate isikuandmete tüüpi, nende suhtes rakendatavaid tegevusi ja teie õigusi meie poolt kasutatavate isikuandmete suhtes. \n\n1.	Vastutav töötleja ja esindaja Euroopa Liidus\n\nTeenuste kasutamisel hoiustab, töötleb ja kasutab kogutud isikuandmeid Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, Hiina („Ettevõte“). Meie ja meie Euroopa Liidu esindaja kontaktandmed on toodud jaotises 12 all. Ent, pidage meeles, et me ei vastuta kõikide all mainitud andmetöötlusviiside eest. Me pole privaatsusavalduses siiski andnud asjakohaste toimingute kirjeldust, sest andmete töötlemine on seotud sellega, kuidas te nutiTV-d kasutate.\n\n2.	Nõusolek andmete töötlemiseks\n\nMõnede andmetöötlusega seotud toimingute tegemiseks on vaja teie nõusolekut, nt teie isikuandmete kasutamiseks Teenuste täiustamise eesmärgil.\n\nNõusoleku andmine on vabatahtlik ja keeldumise korral saate jätkata Teenuste kasutamist. Võite siiski näha sisu, mis pole teie eelistustele vastavalt kohandatud. Sõltumata teie nõusolekust jätame endale õiguse töödelda teie isikuandmeid kohaldavate õigusaktidega lubatud ulatuses.\n\nVõite oma nõusoleku igal hetkel tagasi võtta. Nõusolekust keeldumine ei mõjuta enne keeldumist töödeldud andmete töötlemise seaduslikkust. Selleks et oma nõusolekut tagasi võtta ja/või esitada vastuväiteid (vastuväidete esitamise kohta vt Teie õigused,  jaotis 10 ja lisa all) muutke vastavalt nutiTV privaatsussätteid.\n\n3.	Isikuandmete erikategooriad\n\nTäpsemalt öeldes me töötleme järgmiseid andmete kategooriaid.\n\nSeadme ID: nutiTV salvestab kindla ja ainulaadse numbri, mille alusel saame tuvastada nutiTV ja tõestada selle autentsust Teenuste kasutamise ajal. Seda numbrit nimetatakse seadme ID-koodiks. \n\nIP-aadress ja MAC-aadress: kui kasutate internetti, omistatakse teie nutiTV-le IP-aadress. Kui nutiTV on ühendatud ruuteriga (nt kodusesse kohtvõrku või kohalikku WLAN-i), võime töödelda selle ruuteri IP-aadressi. MAC-aadress on teie nutiTV igale võrguliidestele omistatud ainulaadne number. \n\nSeadmepõhine teave: nutiTV salvestab enda ja oma sätete kohta erinevat teavet. Sinna hulka kuulub nutiTV tüüp, nutiTV operatsioonisüsteemi versioon, nutiTV ekraani eraldusvõime, projekti ID (nt seadistusfailide teave), kasutajaagent, veebilehitseja nimi, veebilehitseja versioon ning nutiTV-s seadistatud keel ja riik. \n\nSeda teavet võime me kasutada ja anda ka oma teenuse- ja sisupartneritele all selgitatud eesmärkidel.\n\n4.	Eesmärgid, milleks me töötleme ja/või kasutame teie isikuandmeid ja õiguslik alus\n\nEesmärgid, milleks me töötleme teie isikuandmeid ja vastav õiguslik alus on kirjeldatud all. Me ei saa pakkuda teile Teenuseid ulatuses, mis määratletakse lepinguliste kohustustega ja on all mainitud kui õiguslik alus, kui te ei varusta meid vajalike andmetega. Teil on vaba valik, kas anda või võtta tagasi oma nõusolek ulatuses, mille õiguslik alus on määratletud teie nõusolekuga. Kui te ei anna oma nõusolekut, ei töötle me teie isikuandmeid ettenähtud eesmärkidel.\n\n•	Teenuste pakkumine Kasutame IP-aadressi, MAC-aadressi, seadme ID-d, nutiTV operatsioonisüsteemi versiooni, nutiTV kliendi tüüpi ja selle ekraani eraldusvõimet, projekti ID-d (ehk seadistusfailidega seonduvat teavet), oma DTV kanalite loendit, vaadatud kanaleid, ajavööndit, riigi- ja keeleseadeid selleks, et võimaldada teie nutiTV-l juurde pääseda Teenustele ja sisupartnerite pakutavatele teenustele. Eesmärgid sisaldavad (kuid pole nendega piiratud) pakkuda teile asukohapõhiseid teenuseid (nt ilmaennustusi); väärkasutuse käsitlemist, turvaintsidentide haldust, Teenuste saadavuse seiret ja kasutajaeelistele vastavalt varundusteenuste osutamist.\n\nNutiTV-teenuste kasutamisel nõutakse Teenustelt interneti kaudu andmeid. Vastavalt üleval kirjeldatule saadetakse nende päringute osana teie IP-aadress ning nutiTV-s seadistatud keel ja riik meie teenusepartneritele. Meie teenusepartner töötleb asjakohaseid andmeid vastavalt oma privaatsusavaldusele.\n\nLepinguliste kohustuste täitmiseks peab isikuandmete asjakohase töötlemise õiguslik alus vastama isikuandmete kaitse üldmääruse („GDPR“) artikkel 6 (1) b) nõuetele.\n\n•	Teenusesätted Teenuste tavalise funktsionaalse osana saate ise määrata järjestuse, millega Teenused kuvavad rakendusi. Meie teenusepartner salvestab tehtud korralduse ja muud eelistused, mida võite teha Teenuste kasutamise ajal. See teave seostatakse seadme-ID-ga.\n\nLepinguliste kohustuste täitmiseks peab isikuandmete asjakohase töötlemise õiguslik alus vastama GDPR-i artikkel 6 (1) b) nõuetele.\n\n•	Autentimine Kui ühendate oma nutiTV internetiga ja lülitate sisse nutiTV, siis ühendatakse see automaatselt meie teeninduspartneri hallatavate Teenustega. Seejärel autenditakse nutiTV sertifikaadi kohaselt, kas see nutiTV võib Teenustele juurde pääseda. Teenused salvestavad autentimise eesmärgil ühe või mitu ainulaadset numbrilist identifikaatorit, mis on seotud selle nutiTV-ga. Autentimiseks kasutame seadme ID-d ja MAC-aadressi. Lisaks edastame seadme ID autentimiseks valitud sisupartneritele. Need sisupartnerid kasutavad nutiTV autentimiseks ja sisupartneri teenustele juurdepääsuks seadme ID-d.\n\nLepinguliste kohustuste täitmiseks peab isikuandmete asjakohase töötlemise õiguslik alus vastama GDPR-i artikkel 6 (1) b) nõuetele.\n\n•	Kaugdiagnostika Osutavate Teenuste osana pakume kaugdiagnostika teenuseid. Sellega seoses töötleme me seadme ID-koodi, seadme numbrit, seerianumbrit, MAC-aadressi ja tõrkelogisid, tõrkekoode ja kirjeldusi, mida väljastavad rikkis moodulid (rakendused, vahetarkvarasüsteemid).\n\nLepinguliste kohustuste täitmiseks peab isikuandmete asjakohase töötlemise õiguslik alus vastama GDPR-i artikkel 6 (1) b) nõuetele.\n\n•	Müügijärgne teenindus Vastavalt kohaldatavale seadusele omate õigust müügijärgsele teenindusele garantii või muu sarnase õiguse korras. TCL Europe, 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, Prantsusmaa, on vastutav garantiinõuete ja muude müügijärgsete teenuste käsitlemise ja sellega seotud isikuandmete töötlemise eest. Nt müügijärgsete teenuste osutamise eesmärgil tegutseb TCL Europe vastutava töötlejana ja meie ei pea vastutama asjakohaste isikuandmete töötlemise eest.\n\nKui taotlete mingit müügijärgset teenust, siis on võimalik, et müügijärgse teenuse osutamiseks küsitakse teilt arvel olevat nime, e-posti aadressi, telefoninumbrit, teenuse taotlust ja postiaadressi. Seda teavet võidakse koguda ka edasimüüjale müügijärgset teenust osutavate partnerite või volitatud teenusepakkujate käest, kui olete neilt teenust taotlenud. Lisateabe saamiseks isikuandmete kaitse kohta müügijärgsete teenuste pakkumisel võite pöörduda TCL Europe poole vastavalt kontaktandmetele, mis on toodud all jaotises 12.\n\nVastava töötlemise õiguslik alus kohustab järgima GDPR-i artiklis 6 (1) c) toodud õiguslikke kohustusi.\n\n•	T-Launcher T-Launcher on nutiTV esileht Linuxi operatsioonisüsteemis (kasutust Android-operatsioonisüsteemis vt allt) ja see võimaldab valida soovitud sisu.\n\nT-Launcheri kasutamiseks vajalike isikuandmete töötlemise õiguslik alus peab lepingulistel kohustuste täitmiseks vastama GDPR-i artikli 6 (1) b) nõuetele.\n\nVastavalt eelnevale nõusolekule jälgime me T-Launcheri kasutamist, mh järgmistel juhtudel.\n	Kui hakkate kasutama T-Launcherit salvestame me T-Launcherisse sisenemise ja väljumise aja.\n	Kui hakkate T-Launcheris esitama mingit videot, salvestame me video nime ja kestvuse (pole kohaldatav Netflixi, YouTube’i või muu kolmanda poole pakutava teenuse korral).\n	Kui sisenete või väljute mingile leheküljele, salvestame me aja, mille jooksul te sellele lehele jäite.\n	Kui liigutate kursori ühest kohast teise, või sisenete mingisse rakendusse, salvestame me selle sündmuse.\n	Kui paigaldate, eemaldate või värskendate mingi rakenduse, salvestame me selle sündmuse, k.a rakenduse nime.\n\nMe kogume seda teavet põhiliselt mahukate andmete analüüsiks, et muuta toodet paremaks ja pakkuda kasutajatele paremaid sisuteenuseid.\n\nTeie nõusolekul peab T-Launcheri kasutamise seirega seotud isikuandmete töötlemise õiguslik alus vastama GDPR-i artikli 6 (1) b) nõuetele.\n\nKui olete ostnud Android TV ja kasutate Google’i android-operatsioonisüsteemi, töötleb teie isikuandmeid Google ja me ei vastutata sellise töötlemise eest. Oma andmete asjakohase töötlemise kohta ja oma õiguste kohta teabe saamiseks lugege Google’i privaatsusavaldust.\n\n•	T-Cast T-Cast võimaldab teil kontrollida telefoni abil oma telerit ja jagada videoid, muusikat ning pilte, mis on salvestatud telerist nutitelefoni. T-Cast võimaldab ka esitada nutitelefoni sisu oma telerist.\n\nRakenduse allalaadimine ja kasutamine on vabatahtlik. Kui peaksite rakenduse alla laadima ja hakkama seda kasutama, hakkame me töötlema MAC-aadressi, et arvutada kokku, mitut T–Cast versiooni on turul kasutatud. Seda peame tegema, et olla võimelised pakkuma seda teenust. Kui kasutate teisel ekraanil esitamise funktsiooni, siis andmed rakenduses aktiveeritud juhtseadiste, riigi- ja keelesätete, DTV-kanalite loendi, lemmikkanalite loendi, ajakava loendi, seadme ID-koodi, praegu kasutatava kanali, nutiTV protokolli versiooni ja IP-aadressi kohta kogutakse kokku ja töödeldakse meie jaoks meie serverites. Meie serverid hakkavad seejärel juhtima teie nutiTV-d rakenduses seadistatud viisil.\n\nLepinguliste kohustuste täitmiseks peab isikuandmete asjakohase töötlemise õiguslik alus vastama GDPR-i artikkel 6 (1) b) nõuetele.\n\n•	Tarkvaravärskendused Tarkvaravärskendused on osa osutatavatest Teenustest. Sellisel viisil edastatakse meile iga kord pärast nutiTV toite sisselülitamist IP-aadress, seadme ID-kood, seadme nr, tarkvara versioon, nutiTV kliendi tüüp, projekti ID-kood (st seadistusfailid), kasutaja ID-kood ja seerianumber, et kontrollida, kas värskendused on saadaval ja pakkuda teile asjakohaseid tarkvaravärskendusi.\n\nLepinguliste kohustuste täitmiseks peab isikuandmete asjakohase töötlemise õiguslik alus vastama GDPR-i artikkel 6 (1) b) nõuetele.\n\n•	Korrakaitse Võimalik, et peame esitama andmeid pädevatele õiguskaitseasutustele või kohtutele. Kui me seda teeme, siis ainult vastavalt siduvale õigusaktile, nagu korraldusele või kohtumäärusele, mille tõttu oleme kohustatud tegema koostööd vastavate asutustega.\n\nVastava töötlemise õiguslik alus kohustab järgima GDPR-i artikkel 6 (1) c) toodud õiguslikke kohustusi.\n\nTeenuseid saab kasutada varjunimedega, välja-arvatud juhul kui teatud teenused nõuavad teilt nime ja/või e-posti aadressi esitamist.\n\n5.	16-aastast nooremate laste privaatsus ja ohutus\n\nMe mõistame täiendavate ettevaatusabinõude rakendamise tähtsust laste privaatsuse ja ohutuse tagamiseks meie Teenuste kasutamisel. 16-aastast nooremate lastelt või samaväärse minimaalse eaga lastelt asjakohases õiguskorras pole lubatud esitada enda isikuandmeid teleri kaudu või müügijärgsete teenuste tellimisel, va juhul kui nende vanemad pole andnud kontrollitava nõusoleku.\n\nKuna me kunagi ei kogu kasutajate sünnikuupäevi, ei suuda me tuvastada ka kasutajate vanust. Kuid kui me leiame, et oleme kogunud 16-aastastest nooremate või samaväärse minimaalse eaga asjakohases õiguskorras laste isikuandmeid, siis ülevaltoodud asjaolusid välistades võtame kasutusele kõik võimalused selle teabe kustutamiseks nii kiiresti kui võimalik.\n\n6.	Kolmandate poolte rakendused\n\nSee nutiTV võimaldab kasutada kolmandate poolte pakutavaid rakendusi, nagu Netflix, YouTube või HbbTV (teleprogrammide levitajate punase nupu teenused). Rakendusi võite alla laadida rakenduste kauplustest või aktiveerida seadmesse juba eelnevalt paigaldatud rakendusi. Seadmesse eelnevalt paigaldatud kolmandate poolte rakendused ei kogu isikuandmeid ilma eelneva autoriseerimiseta. Nt Netflix on seadmesse juba eelnevalt paigaldatud, kuid hakkab koguma andmeid ainult siis, kui logite sisse oma Netflixi kontosse. HbbTV kogub andmeid ainult siis, kui nõustute kogumisega, vajutades ettenähtud nuppu kaugjuhtimispuldil.\n\nKui lubate kolmandate poolte rakenduse, hakkab rakenduse pakkuja teie isikuandmeid töötlema. Meie ei vastuta sellise töötlemise eest. Oma andmete asjakohase töötlemise ja õiguste kohta teabe saamiseks lugege kolmandate poolte rakenduste privaatsusavaldust.\n\n7.	Saajate kategooriad\n\nKui tellite teatud sisu sellist sisu omavatelt partneritelt või teenusepakkujatelt, jagame me Teenuste kasutamise ajal kogutud isikuandmeid ainult kolmandast pooltest sisupartneritele, nagu andmetöötlejatele, kes abistavad meid Teenuste pakkumisel.\n\nMe jagame teie isikuandmeid kolmandatele pooltele ainult siis, kui oleme õiguslikel alusel kohustatud selliselt toimima (nt kohtutele või õiguskaitseasutustele), kui olete nõustunud vastava jagamisega või jagamine on muul viisil kohaldatava seadusega lubatud.\n\n8.	Riigid, kus teie andmeid töödeldakse\n\nMeie ja/või mõned üleval loetletud isikuandmete saajad võivad asuda väljaspool Euroopa Majanduspiirkonda (nt Hiina Rahvavabariigis või Ameerika Ühendriikides). Järelikult, teie isikuandmeid võidakse töödelda riikides, kus andmekaitse seadused võivad pakkuda teie kohtualluvuse õigusaktidega võrreldes erineva tasemega kaitset, mis pole kooskõlas GDPR-i nõuetega tunnustatud kui piisava tasemega isikuandmete kaitse. Riigid, mis pakuvad Euroopa andmekaitse õigusaktidega võrreldes ka piisava tasemega andmekaitset on näiteks Andorra, Argentiina, Kanada, Šveits, Fääri saared, Guernsey, Israel, Man saar, Jersey, Uus-Meremaa ja Uruguay Idavabariik. Andmete saajaid USA-s võib osaliselt EL-USA andmekaitseraamistiku Privacy Shield alusel sertifitseerida ja järelikult võib neid Euroopa andmekaitse alaste õigusaktide seisukohast tunnustada kui piisava andmekaitse tasemega riike. \n\nKui on nõutud, rakendame me andmeedastuse korral andmete saajatele väljaspool Euroopa Liitu asjakohaseid turvanõudeid, juhul kui need ei taga piisaval tasemel andmekaitset. Võimalik on taotleda asjakohaste meetmete koopiat, kui pöördute meie poole jaotises 12 all kirjeldatud viisil.\n\n9.	Hoiustamisaeg\n\nTeenuste pakkumiseks hoitakse teie isikuandmed alles niikaua kui vaja. Enamike andmete jaoks see üldiselt tähendab, et me hoiame teie andmeid ühe kuu jooksul. Kaugdiagnostika ja müügijärgse teeninduse eesmärgil võime me teie andmeid säilitada kuni kümme aastat. Kui me enam ei vaja teie isikuandmeid lepinguliste või seadusjärgsete kohustuste täitmiseks, eemaldame need oma süsteemist ja andmikest ja/või muudame need täielikult anonüümseks, et teid poleks võimalik nende abil tuvastada.\n\n10.	Teie õigused\n\nKohaldatava andmekaitse seaduse järgi võite omada järgmiseid õigusi: taotleda juurdepääsu oma isikuandmetele ja oma isikuandmete parandamist või kustutamist, piirata oma isikuandmete töötlemist; taotleda andmete ülekantavust ja esitada vastuväiteid oma isikuandmete töötlemise suhtes. Pidage silmas, et need üleval loetletud õigused võivad olla piiratud kohaldatava riikliku andmekaitseseaduse põhjal. Lisateabe saamiseks nende õiguste kohta lugege alltoodud lisa Teie õigused.\n\nKa on teil õigus esitada kaebusi kompetentsele andmekaitse järelevalve teostajale.\n\nOma õiguste rakendamiseks pöörduge meie poole nagu alltoodud jaotises 12 sätestatud.\n\n11.	Privaatsusavalduse muudatused\n\nTeenuste täiustamiseks võime taotleda sellele privaatsusavaldusele laiendusi, nt rakendades uusi tehnoloogiaid või juurutades uusi teenuseid. Me jätame endale õiguse nende privaatsusnõuete muutmiseks või täiendamiseks mistahes ajal.\n\n12.	Kontaktteave ja esindaja Euroopa Liidus\n\nKui teil tekivad privaatsusavalduse kohta mistahes küsimused või soovite esitada kaebuse isikuandmete käitlemise kohta, palun pöörduge meie poole järgmiseid kontaktandmeid kasutades.\n\nPöördumise vorm: www.tcl.eu/privacy/support\n\nMeie esindaja Euroopa Liidus on: TCL Europe, kelle büroo asub aadressil 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, Prantsusmaa. Võite pöörduda TCL Europe poole kontaktvormiga, mille link oli üleval toodud.\n\nVersioon: 2.0\n\nLisa Teie õigused\n\na.	Õigus juurdepääsule Teil on õigus saada meilt kinnitus, kas teid puudutavad isikuandmed on töödeldud või mitte ja kui on, siis taotleda juurdepääsu isikuandmetele. Juurdepääs teabele sisaldab muuhulgas järgmist: töötlemise eesmärgid, asjakohaste isikuandmete kategooria ja andmete saajad või saajate kategooriad, kellele isikuandmed avalikustati või avalikustatakse. See pole siiski absoluutne õigus ja muude isikute huvid võivad piirata teie juurdepääsuõigust.\n\nTeil on õigus saada koopia töödeldavatest isikuandmetest. Edaspidiste koopiate taotlemisel võime me teilt soovida mõistlikku hinda administreerimiskulude katteks. \n\nb.	Õigus parandada Teil on õigus parandada ennastpuutuvaid ebatäpseid isikuandmeid. Sõltuvalt töötlemise eesmärkidest on teil õigus täiendada oma ebatäielikke isikuandmeid, k.a täiendava avalduse esitamise teel.\n\nc.	Õigus kustutada („õigus olla unustatud”) Teatud olukordades on teil õigus nõuda meilt ennastpuudutavate isikuandmete kustutamist ja me oleme kohustatud sellised isikuandmed kustutama. \n\nd.	Õigus piirata töötlemist Teatud olukordades on teil õigus nõuda ennastpuudutavate isikuandmete töötlemise piiramist. Sellisel juhul vastavad andmed märgistatakse ja me võime neid töödelda ainult teatud eesmärkidel.\n\ne.	Õigus andmeid ülekanda Teatud olukordades on teil õigus saada endale meile saadetud ennastpuudutavaid isikuandmeid, struktureeritult, üldkasutatavas ja masinloetavas vormingus ja teil on õigus neid andmeid edastada teisele üksusele ilma meiepoolsete takistusteta.\n\nf.	Õigus esitada vastuväiteid\n\nTeatud olukordades on teil õigus esitada vastuväiteid mistahes ajal teie isikuandmete töötlemise suhtes, mingi erilise olukorraga seotud põhjustel või kui isikuandmeid on töödeldud otseturustuse eesmärgil. Sellisel juhul oleme sunnitud teie isikuandmeid enam mitte töötlema.\n\nVeelgi enam, kui te isikuandmeid on töödeldud otseturustuse tarbeks, on teil õigus mistahes ajal esitada vastuväiteid ennastpuudutavate isikuandmete töötlemise pärast sellise turustamise jaoks, mis hõlmab ka otseturustamisega seotud profileerimist. Sellisel juhul ei töötle me teie isikuandmeid enam sellistel eesmärkidel. "];
var cookieNotice = ["\nMe austame teie privaatsust meie toodetud nutiTV ja teile pakutavate Teenuste kasutamisel. Küpsiseid kasutavad paljud veebisaidid ja muud internetiteenused. See nutiTV võtab vastu, salvestab ja edastab küpsiseid, et tagada nende veebisaitide ja teenuste korralik toimimine. \n\nMeie ei kasuta küpsiseid teile Teenuste pakkumiseks. Kolmandad pooled (nt kolmandate poole rakenduste pakkujad) võivad siiski nutiTV kasutamisel teenustele juurepääsuks küpsiseid kasutada. See küpsiste kasutamise märkus annab ainult piiratud teavet küpsiste kohta, mida sisestavad kolmandad pooled. Lisateabe saamiseks kolmandate poolte tegelikult kasutatavate küpsiste ja nende funktsioonide kohta soovitame lugeda kolmandate poolte vastavaid avaldusi küpsiste kasutamise kohta. Selles küpsiste kasutamise märkuses kirjeldame siiski üldiselt, milliseid küpsiseid võidakse sisestada nutiTV-sse ja kuidas neid hallata.\n\n1.	Mis on küpsis?\n\nKüpsised on teie nutiTV-sse paigutatud väikesed tekstifailid. Kui kasutatakse telejaama veebisaiti või punase nupu teenust, siis veebisait või teenus võivad nutiTV-sse hoiustada küpsise. Korduval juurdepääsul saadab nutiTV-sse paigutatud küpsis selle paigutanud poolele vajalikku teavet. Küpsised on eriti laialt levinud ja neid kasutatakse mitmetes veebisaitides ja teenustes. Kõik küpsised sisaldavad tavaliselt küpsise looja domeeni nime, küpsise „kehtivust“ ja väärtust (tavaliselt ainulaadne number). Küpsiste põhjalikuma selgituse ja toimimise teabe saamiseks külastage saiti www.allaboutcookies.org.\n\nKüpsiseid saab jagada funktsiooniküpsisteks ja funktsioonituteks küpsisteks. Funktsiooniküpsised on küpsised, mis on rangelt vajalikud teenuse osutamiseks. Kõik muud küpsised on funktsioonideta küpsised.\n\n2.	Kolmandate poolte veebisaidid\n\nKui külastate veebisaite või teenuseid nutiTV Teenuste kaudu, on võimalik, et sellised veebisaidid või teenused sisestavad nutiTV-sse küpsiseid ja sellised veebisaidid jälgivad ning salvestavad suhtlust nende veebisaitidega. Me ei taotle ega julgusta selliseid tegevusi ja me ei kasuta sellist teavet. Lisateabe saamiseks selliste poolte küpsiste kasutamise kohta lugege vastava küpsise ja veebisaidi privaatsusavaldust.\n\n3.	Küpsiste kustutamine\n\nTeie nutiTV kasutajaliides võimaldab nutiTV-st kustutada kõiki küpsiseid ja kohaliku brauseri mälu. Enne nutiTV müümist või edasiandmist soovitatakse tungivalt eemaldada kõik küpsised ja lokaalselt salvestatud sätted.\n\nVersioon: 2.0"];
var privacyPolicy = ["Kui soovite kasutada meie nutiTV-teenuseid ja seotud teenuseid, märgistage palun märkeruut/märkeruudud. Nende teenuste kasutamiseks on vaja töödelda teie isikuandmeid, nagu kirjeldati meie Privaatsusavalduses: http://www.tcl.eu/en/","Aktiveeri nutiTV-teenus, teenusesätete salvestamine ja nutiTV automaatne autentimine. Kui eemaldate märgise ruudust, saate kasutada ainult tavalist televisiooni ja HDMI-liidest.","Lubage tarkvara automaatvärskendused. Oma toote uusimate tarkvaravärskendustega ajakohasena hoidmiseks ja parima jõudluse tagamiseks märgistage see ruut.","(Tarkvara värskendamine on tähtis teleri õigeks toimimiseks, sest need pakuvad uusi funktsioone, stabiilsust ja turvalisust. Seetõttu soovitame see märkeruut märgistada.)","Märgistage märkeruut, kui nõustute oma isikuandmete töötlemisega ka järgmistel all loetletud eesmärkidel. Lisateavet isikuandmete töötlemise kohta leiate Privaatsusavaldusest: http://www.tcl.eu/en/","Ma nõustun oma isikuandmete (nt T-Launcherisse sisenemise ja väljumise aeg) töötlemisega TLC-toodete täiustamise ja nutiTV paremate sisuteenuste pakkumise eesmärgil."];
var termsFirTitle = ["Kehtivad tingimused","Privaatsusteatis","Küpsiste teatis"];
var termsSecTitle = ["Lugege tingimused läbi ja andke oma nõusolek.","Palun lugege privaatsusteatist ja nõustuge sellega.","Palun lugege küpsiste teatist ja nõustuge sellega."];
var tickall = "Märkige kõik ruudud";
var tickremindWords = "Palun märkige ruudud või te ei saa nautida nutiTV teenust.";