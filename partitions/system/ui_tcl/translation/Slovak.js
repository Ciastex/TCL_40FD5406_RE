
var all_country 	= ["Austrália","Rakúsko","Belgicko","Bulharsko","Chorvátsko","Česká republika","Dánsko","Fínsko","Francúzsko","Nemecko",
						"Grécko","Maďarsko","Taliansko","Luxembursko","Holandsko","Nórsko","Poľsko","Portugalsko","Rumunsko","Rusko",
						"Srbsko","Slovinsko","Španielsko","Švédsko","Švajčiarsko","Spojené kráľovstvo","Nový Zéland"," "/*Arab*/,"Estónsko"," "/*Hebrew*/,
						"Lotyšsko","Slovensko","Turecko","Írsko","Japan","Filipíny","Thailand","Maldives","Uruguay","Peru",
    					"Argentina","Chile","Venezuela","Ecuador","Costa Rica","Paraguay","Bolivia","Belize","Nicaragua","Guatemala",
						"Čína","Taiwan","Brazil","Canada","Mexico","United States","South Korea","Romania","Vietnam"/*新添加的，底层结构体中没有*/,"Ukrajina"/*新添加的，底层结构体中没有*/,
    					"Iran","Iraq"," ","Kazakhstan","Uzbekistan"," ","Kyrgyzstan","Algeria","Egypt","Tunisia",
    					"Tanzania","Kenya","Pakistan","Indonesia","Kuwait","Saudi Arabia","Qatar","Israel","Lebanon","bahrain",
    					"Angola","Congo","India","Turkmenistan","Colombia","Mongolia","Bangladesh","Nepal","Sri Lanka","North Korea",
						"Moldavsko","Polynesia","EI Salvador"," ","Fiji","Liberia","Jordan","Myanmar","Ghana","Georgia",
    					"Armenia","Oman","yemen","Syria","Palestine","Afghanistan","Morocco","benin","IvoryCoast","Nigeria",
    					"Sudan","Ethiopia","Zambia"," ","South Africa","mozambique","Libya","Albánsko","Belarus","Iceland",
						"Litva","Mauritius","Dubai","UAE","Tajikistan","Bengal","Bosna a Hercegovina","Cyprus","Kosovo","Macedónia",
						"Malta","Čierna Hora","Cameroun","Singapore","Malaysia","NewCaledonia","Suriname","Jamaica","Curacao","Aruba",
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
				
var all_language 	= ["Český","*","Dánsky","*","*","Nemčina","Angličtina","francúzština","Grécky","španielčina",
						"Chorvátsky","*","taliančina","Maďarský","Holandský","Nórsky","Poľský","Portugalský","Ruský","Rumunský",
						"Slovenščina","Srbský","Fínsky","Švédsky","Bulharský","Slovenčina","Chinese","*","Galský","*",
						"Waleský","Arabsky","Irlantilainen","Lotyšský","*","Turecky","Estónsky","Holandský"/*Netherlands*/,"Kórejský","*",
						"hindčina","*","*","mandarínka","kantonský","Maori","Pôvodný zvuk"/*Qaa*/,"Nedefinované"/*Undetermined*/,"*","Neznámy",
						"Nedefinované","*","*","*","*","*","*","*","*","*",
						"*","*","*","Albánčina","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baskický","*","*",
						"*","*","*","*","*","*","*","Bosniančina","*","*",
						"*","*","*","*","Valkovenäjä","*","*","Katalánsky","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galícijský","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Islandský","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","japonský","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Litovský",
						"*","*","*","*","*","*","*","Macedónčina","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romantický","*","*","*","*",
						"*","*","*","Sami","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Teletext",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukrajinský","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Vypnúť","Zapnúť"];
var okCancel		= ["OK","Zrušiť"];
var yesNo			= ["ÁNO","NIE"];
var level			= ["Vypnúť","Nízke","Vysoké","Stredné"];
var manualAuto		= ["Manuálne","Automaticky"];
var homeShop		= ["Domov","Obchod"];
var picPreset		= ["Štandardné","Dynamický","Prírodné","Kino","Užívateľ"];
var picColorTemp	= ["Studený","Normálne","Teplý","Užívateľ"];
var pic3dNavig		= ["Manuálne","Automaticky","Poloautomaticky"];
var _3dOptions		= ["Režim 3D","3D na 2D","Prepnúť Ľ-P","Hĺbka poľa"];
var pic3DMode       = ["Vypnúť","2D na 3D","Vedľa seba","Hore a dole","Prekl. riadkovanie"];
var picEcoOptions	= ["Úspora energie","Senzor svetla","Lokálne tlmenie","Zmiešané stmievanie"];
var picGeoOptions	= ["Geometria","Horiz. poloha","Vertikálna poloha","Synchronizácia","Fáza"];//Geometry 无翻译
var picAdWhiteBal	= ["Pridať Č","Pridať Z","Pridať M","Vyvážiť Č","Vyvážiť Z","Vyvážiť M"];
var souOptions		= ["Prednastavený zvuk","Vyváženie","Oneskorenie zvuku","SRS TSHD","Aut. ovl. hlasit.",
						"Typ SPDIF","SPDIF oneskorenie","Umiestnenie TV"," Jazyk audia","Zvukový kanál",
						"Zvukový popis","Zosilnenie basov","Dolby Digital Plus"];
var souSpdifType	= ["Automaticky"/*Dolby*/,"PCM","Vypnúť"];
var colorSpace      = ["Automaticky","Natívne","Užívateľ"];
var souPresetPara	= ["100Hz","500Hz","1.5KHz","5KHz","10KHz"];
var chOptions		= ["Vyhľadávanie kanálov","Zoznam kanálov","EPG","Organizátor kanálov","Diagnostika kanálov",
						"timeshift","Titulky","Teletext","Typ zoznamu kanálov"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Intenzita signálu","Kvalita signálu","Frekvencia (kHz)","ID služby","ID siete","Názov siete"];
var chScanOptions	= ["Krajina/oblasť","Režim tunera","Preskúmanie kanála","Aktualne preskúmanie","Manuálne preskúmanie analógu",
						["Ručné hľadanie (kábel)","Ručné hľadanie (anténa)","Manuálne ladenie satelitu"],"Nastavenie satelitnej antény","Výber obľúbenej siete","Vymazať zoznam kanálov","LCN"];
var favNetDes		= "Prosím vyberte vašu obľúbenú sieť";
var tuner			= ["Kábel","Anténa","Satelit"];//Satelite 无翻译
var passError		= "Heslo je nesprávne.\nZadajte ho ešte raz prosím!";
var chType			= ["Analógové kanály: ","Digitálne kanály: "];
var chScanStatus	= ["Stav: Hľadá sa","Stav: Preskúmanie bolo dokončené","Stav: Zrušiť preskúmanie","Stav: Chyba preskúmania"];
var chScanPara		= ["Frekvencia (kHz)","Modulácia","Rýchl. symb. (ksym/s.)","ID siete","Systém",
						"Jemné ladenie","Intenzita signálu","Kvalita signálu","Režim hľadania","Č. kanálu"];
var chScanParaMHZ      = ["Frekvencia (MHz)"];
var chAtvManSys		= ["ZÁPADNÁ EURÓPA","VÝCHODNÁ EURÓPA","GB","Francúzsko"];
var modulation		= ["16 QAM","32 QAM","64 QAM","128 QAM","256 QAM","Automaticky"];
var chCleanDes		= "Chcete vymazať zoznam kanálov?";
var chDeletDes		= "Ali želite izbrisati kanal?";
var chOperator		= ["Ziggo","UPC","Ostatné"];
var chScanType		= ["Digitálny & Analógový","Digitálny","Analógový"];
var chScanMode		= ["Úplne","Dopredu","Rýchle"];
var bookingModes	= ["Nahrať","Opomnik"];
var dayName			= ["Ne","Po","Ut","St","Št","Pi","So"];
var monthName		= ["jan.", "feb.","mar.","apr.","máj","jún","júl","aug.","sep.","okt.","nov.","dec."];
var filter			= ["Filtro","Typ","Podtyp"];
var chEpgFirstGenre	= ["Kino","Novinky","Zábavný program","Športy","Detské","Hudba","Umenie","Spoločenský","Vzdelávanie","Voľný čas","ŠPECIÁLNY"];
var chEpgSecondGenre= [["Dráma","Detektívka","Dobrodružný","Scie-fi","Komédia","Ľahký žáner","Romantický","Vážny","Film pre dospelých"," "," "," "],
						["Aktuálne udalosti","Správy o počasí","Spravodajský magazín","Dokumentárny","Diskusia"," "," "," "," "," "," "," "],
						["Zábavný program","Súťažný program","Estrádny program","Talk show"," "," "," "," "," "," "," "," "],
						["Športy","Špeciálne podujatia","Športové magazíny","Futbal","Tenis",
							"Kolektívne športy","Atletika","Motoristický šport","Vodné športy","Zimné športy",
							"Jazdectvo","Bojové športy"],
						["Detské","Pre deti predškolského veku","Zábava pre deti vo veku 6 až 14 rokov","Zábava pre deti vo veku 10 až 16 rokov","Informácie","Kreslené filmy"," "," "," "," "," "," "," "],
						["Hudba","Rock","Vážny","Folk","Džez","Muzikál","Balet"," "," "," "," "," "],
						["Umenie","Inscenačné umenie","Hudba a výtvarné umenia","Náboženstvo ","Ľudová kultúra",
							"Súhrn literatúry","Film","Experimentálne","Rozhlas a vysielanie","Nové médiá",
							"Časopisy o umení","Móda"],
						["Spoločenský","Magazíny","Ekonomika","Významné osobnosti"," "," "," "," "," "," "," "," "],
						["Vzdelávanie","Príroda","Technológie","Medicína","Cudzie krajiny","Spoločenské vedy","Ďalšie vzdelávanie","Jazyky"," "," "," "," "],
						["Oddych a hobby","Turistika","Remeslá","Motorizmus","Kondícia a zdravie","Varenie","Reklama","Záhradkárstvo"," "," "," "," "],
						["Pôvodný jazyk","Čiernobiela","Nepublikované","Živé vysielanie"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Preskočenie kanála","Triedenie kanálov","Editovanie kanála","Odstrániť kanál","kanál swapu","kanál vložka"];
var chEditPara 		= ["Názov siete","Číslo kanála","Názov kanála","Frekvencia","Systém farieb","Systém zvuku"];
var chSatTitles		= ["Typ satelitu","Nastavenie satelitnej antény","Vybrať satelit"];
var chSatEidtOptions= ["Názov satelitu","Pozícia","LNB Energie","Frekvencia LNB (MHz)","Diseqc vstup",
						"Tón 22 kHz","Tone Burst","Frekvencia (kHz)","Rýchl. symb. (ksym/s.)","Polarizácia",
						"Intenzita signálu","Kvalita signálu","Stav satelitu"];
var chSatAutoPromt	= [["Všetky","Sieť"],
						["Všetky","Voľné"]];
var chSatAutoScanOptions=["Vybrať satelit","Režim hľadania","Kanály"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Univerzálny",];
var chSatDiSEqCInput= ["Vypnúť","A","B","C","D"];
var chSatTone22KHz	= ["Automaticky","Zapnúť","Vypnúť"];
var chSatToneBurst	= ["Vypnúť","Tone Burst A","Tone Burst B"];
var chSatPolarization= ["Vodorovná","Zvislá"];
var chSatSetupOptions=["Typ antény","Vylaďovač","Frekvencia pásma"];
var chSatAntennaType= ["Jeden kábel","Univerzálny"];
var chSatUserBands	= ["Vlastné pásmo 1","Vlastné pásmo 2","Vlastné pásmo 3","Vlastné pásmo 4","Vlastné pásmo 5","Vlastné pásmo 6","Vlastné pásmo 7","Vlastné pásmo 8"];
var chSatOthers		= ["Transpondér"];
var chSatSetupOthers= ["Definované používateľom"];
var pleaseSelectSat = "Najskôr vyberte satelity!";
var subOptions		= ["Titulky","Jazyk dig. titulkov","2.jazyk dig. titulkov ","Typ titulkov"];
var ttxOptionsCon      = ["Dekódovanie jazyka stránky","Jazyk digitál. teletextu"];
var subType			= ["Normálne","Poškodený sluch"];
var netIntf     	= ["Ethernet","Bezdrôtové"];
var netConnDes		= ["TV testuje sieťové pripojenie.\nProsím, čakajte",
						"Test pripojenia k sieti úspešný!",
						"Test pripojenia k sieti neúspešný."];
var netSsidError	= "Platná dĺžka SSID je 1~32 znakov. Skontrolujte prosím SSID.";
var netOthers		= ["Koda PIN "];
var netWlessAutoDes	= ["Pred kliknutím na tlačidlo OK sa uistite, či je na prístupovom bode nainštalovaný nasledujúci kód PIN.",
						"Pred kliknutím na tlačidlo OK stlačte do 120 sekúnd tlačidlo na prístupovom bode."];
var netConnRemind	= ["Heslo je nesprávne!",
						"Povezovanje. Prosimo, počakajte!",
						"Pripojenie úspešné, IP adresa získaná!",
						"Prepojenie zlyhalo",
						"TV hľadá prístupové body\nČakajte, prosím",
						"Žiadne bezdrôtové zariadenie pripojené k TV!"];
var netWireIpOptions= ["Nastavenie IP","Typ adresy","Adresa IP","Maska podsiete","Predvolená brána","Primárny DNS","Sekundárny DNS"];
var netWireConnRemind= ["Zadajte hodnotu od 0 do 255.",
						"Úspešne pripojené!",
						"Zadajte platnú adresu",
						"Úspešne pripojené!",
						"Povezava ni bila uspešna!",
						"Povezovanje. Prosimo, počakajte!",
						"Zadajte prosím hodnotu od 1 do 233."];
var netFlixOptions	= ["Deaktivovať","ESN","Verzia Netflix"];
var netFlixDes	 	= ["Naozaj chcete deaktivovať?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Aktualiz. softvéru";
var netUpdateDialogTitle = "Prebieha aktualizácia softvéru";
var netBGDownloadTitle 	= "Preberá sa";
var netUpdateLoadingPrompt= ["Prebieha vyhľadávanie aktualizácií, počkajte, prosím!",
							"Prebieha preberanie softvéru... Počkajte, prosím!",
							"Počas aktualizácie softvéru NEVYPÍNAJTE televízor!",
                            "Povinná aktualizácia softvéru je preberie automaticky na pozadí!"];
var netUpdatePrompt= ["Blahoželáme, máte najnovšiu verziu softvéru!",
						"Našla sa nová verzia softvéru: XXXX. Chcete ju teraz prevziať? Môže to chvíľu trvať, závisí to od stavu siete.",
						"Prihlásenie neúspešné!",
						"Načítanie údajov zlyhalo, skúste prosím neskôr!",
						"Analýza aktualizácie XML neúspešná!",
						"Prepojenie zlyhalo",
						"Prenos programske opreme je končan. Ali želite začeti s flashem?",
						"Údaje sa stratili! Preberanie bolo neúspešné!",
						"Kontrola balíka bolo neúspešné, skúste znova!",
						"Sieť v nenormálnom stave! Skontrolujte a skúste znova…",
						"Aktualizácia neúspešná. Reštartujte TV!",
						"Súbor s inováciou bol nečakane odstránený. Inovujte cez sieť znova.",
						"Softvér bol úspešne na pozadí prevzatý. Chcete inovovať?"];
var netUpdateButtonText = ["Prevziať", "Aktualizovať", "Neskôr", "Nikdy", "OK","Pokračovať"];
var autoDetectPrompt = ["Našla sa nová verzia softvéru: XXXX. Chcete ju teraz prevziať? Môže to chvíľu trvať, závisí to od stavu siete.",
						"Našla sa nová verzia softvéru: XXXX. Chcete aktualizovať teraz?",
						"Proces inovácie cez sieť bol naposledy prerušený. Mali by ste inovovať znova.",
                        "Preberanie novej verzie softvéru XXXX nie je dokončené. Chcete teraz pokračovať?",
                        "Softvér stiahnutý, chcete teraz spustiť aktualizáciu?"];
var sysOptions		= ["Elektronická príručka","Jazyk OSD","Nastavenie času","Zamknúť","Nastavenia vstupu",
						"Aktualiz. softvéru","Miesto","Režim HbbTV","Cookies","Spoločné rozhranie",
						"Rozšírené nastavenia","Reset shop","LED kontrolka","Okamžité zapnutie","Automatický režim Obchod","Area","Režim ukážky"];
var sysResetDes		= "Ste si istý?";
var sysMenuLangOptions=["Jazyk","Preferovaný jazyk zvuku","Preferovaný 2.jazyk audia"];
var sysTimerOptions	= ["Časové pásmo","Ime področja","Synchronizácia","Časovač vypnutia","Autom. pohotovosť", "Country region"];

var sysTimeZone		= ["Podľa vysielača","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Vypnúť","10 min.","20 min.","30 min.","40 min.","50 min.","60 min.","90 min.","120 min."];
var sysStandby		= ["Vypnúť","4 hodiny","6 hodiny","8 hodiny"];
var sysRegionName	= ["Madrid","Kanársky"];
var sysClockOptions	= ["Automatická synchronizácia","Dátum","Čas","Časovač zapnutia","Nastavenie času",
						"Kanál pri zapnutí","Časovač vypnutia","Nastavenie času"];
var sysTimer		= ["Vypnúť","Dnevno","Enkrat"];

var sysInputSet		= ["Bez označenia  ","DVD","Modrý lúč","HDD","DVDR",
						"Nahrávanie HD","Hry","VCR","PC","Digitálne STB",
						"HD digitálne STB","Fotoaparát","Prehrávač","Iné"];
var sysAvVideoInput	= ["Automaticky","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["Cez USB","Cez siete","Podľa kanála"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Nedá sa nájsť žiadny nový softvér v sieti!",
						"Našla sa nová verzia softvéru: XXXX. Chcete aktualizovať teraz?",
						"Vstavite USB-ključ.",
						"Kontrola balíka bolo neúspešné, skúste znova!",
						"NEVYBERAJTE USB kľúč a nevypínajte. TV prijímač počas aktual. firmvéru!!",
						"Softvér bol úspešne aktualizovaný.\nTelevizor sa potom automaticky reštartuje!",
						"Našla sa nová verzia softvéru: XXXX. Chcete ju teraz prevziať? Môže to chvíľu trvať, závisí to od stavu siete.",
						"Preberá sa",
						"Prenos programske opreme je končan. Ali želite začeti s flashem?",
						"Akt. neúspešná!",
						"Hľadajú sa súbory inovácie",
						"Softvér bol úspešne aktualizovaný.\nTeraz reštartujte TV."];
var sysProductInfo	= ["Súčasná verzia","Ime izdelka","Názov výrobcu","Názov skrine"];
var sysCiDes		= ["Nebola nájená CI karta"];
var sysAdOptions	= ["Registrácia DivX(R)","Zrušenie registrácie pre DivX(R)","T-Link","Authorization Error","Potvrdenie zrušenia registrácie",
						"Potvrdenie zapožičania","Koniec vypožičania"];
var sysRegistDes	= ["Vašo napravo morate registrirati za predvajanje DivX zaščitenih videoposnetkov.",
						"Registracijska koda:",
						"Registrirajte se na http://vod.divx.com"];
var sysDregistDes	= ["Kód zrušenia registrácie:",
						"Zrušenie registrácie na http://vod.divx.com",
						"Pokračovať v registrácii?"];
var mediaAuthorization = ["Zariadenie nie je oprávnené prehrať toto chránené video DivX(R)."];
var deregistrationConfrimation = ["Vaše zariadenie už je zaregistrované.","Určite si želáte zrušiť registráciu?"];
var rentalConfirmation = "Počet použití zapožičaného videa DivX(R): XXXX z celkového počtu YYYY zobrazení. Pokračovať?";
var rentalExpired 	= "Prenájom DivX(R) použil XXXX z počtu YYYY zobrazení. Platnosť prenájmu DivX uplynula.";

var parentalRatingNA		= ["***","***","***","***","***","***","***","***"];
var parentalRatingOptionUS		= ["***","***","***"];
var sysTVRatingUS=["***","***","***","***","***"];
var sysMPAAUS=["***","***","***","***","***","***"];
var parentalRatingOptionCanada		= ["***","***","***"];
var sysCanadaEng=["***","***","***","***","***","***"];
var sysCanadaFre=["***","***","***","***","***",""];
var sysResetRRT=["***"];
var sysLockOptions	= ["Zablokovanie kanála","Zámok časového intervalu","Zablokovanie programu","Zablokovanie vstupu","Zámok predného panelu","Inštalácia zámku",
						"Zmeniť heslo","Maximálna hlasitosť","Vymazať všetky"];
var sysTimeIntervals= ["Typ zámku","Čas začiatku","Čas ukončenia"];
var sysRatingOptions= ["Ei mitään","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","X-rated (Španielsko)"];
var changePass		= ["Zmeniť heslo","Nové heslo","Potvrdiť heslo"];
var changePassDes	= ["Heslo je nesprávne.\nZadajte ho ešte raz prosím!",
						"Heslo nesúhlasí.\nZadajte ho ešte raz, prosím!",
						"Heslo úspešne nastavené!",
						"Ta koda je preveč enostavna za geslo. \nProsimo za ponovni vnos!"];
var sysPowerOnChOptions= "Vybrať režim";
var sysPowerOnCh	= ["Posledný stav","Vybrať používateľa"];
var netWlessSecu    = ["Otvoriť","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Ei mitään","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Bez podpory"];
var netWlessSecu3	= ["Ei mitään","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Bez podpory"];
var netOptions		= ["Pripojenie na Internet","Rozhranie","Nastavenie bezdrôtového spojenia","Nastavenie IP","Informácie",
						"Test spojenia","DLNA","Diaľ. ovlád. TV","Nastavenie Netfix","Wifi displej",
						"Typ adresy","Adresa IP","Maska podsiete","Predvolená brána","Primárny DNS",
						"Sekundárny DNS","SSID","BSSID","Zadajte SSID:","ID užívateľa"];
var chEditDes		= ["Duplicitné číslo kanála!","Za izbris trenutnega znaka pritisnite rdeči gumb.","Neplatné čísla kanálov."];
var chEpgNoProgram	= "V tomto momente žiadne informácie o programe. Najskôr prosím vyhľadajte kanály!";
var chEpgWords		= ["Zoznam programov","Ni podatkov o programu.","Kanál je zablokovaný!","Ni podrobnosti o programu.","Ni naslova programa."];
var chEpgBooking	= ["plán info", "Číslo kanála","Dátum štartu","Čas začiatku","Čas ukončenia",
						"Typ opakovania","Typ rozvrhu","Dodaj","Nahradiť","Zmeniť",
						"Pridať/Upraviť"];
var epgHotKey		= ["Predchádzajúci deň","Nasledujúci deň","Filtro","Urnik","Dodaj urnik"];
var chEpgBookRemind	= ["Nesprávny čas začiatku","Nesprávny čas konca","Duplicitný plán","Úspešne uložené.","Úspešne odstránené."];
var chSchePara		= ["Urnik","Čas začiatku","Dátum štartu","Názov programu","Názov kanála",
						"Trvanie","Opakovať","Plán","Upraviť","Odstrániť"];
var dateTimer		= ["Enkrat","Dnevno","Týždenne"];
var scheduleDeleteReminds="Ali želite izbrisati ta razpored?";
var scheduleNoLists	= "Na voljo ni seznama razporedov. Za dodajanje seznama razporedov pritisnite rdeč gumb.";
var chListWords		= ["Zoznam kanálov","Vybrať zoznam","Režim tunera","Pridať k obľúbeným","Odstrániť",
						"Vyberte zoznam kanálov","Vyberte režim tunera","Vymeniť"];
var chListType		= ["Všetky","Digitálny","Analógový","Rádiový","Voľné","Obľúbené"];
var chAutoScanOptions=["Vybrať operátora","Typ kanála","Preskúmanie kanála"];
var souSoundType	= ["Neplatné","Mono","Mono","Stereo","Stereo",
						"SAP","SAP","Duálny 1","Duálny 2","Duálny 2",
						"Nicam mono","Nicam stereo","Nicam dual1","Nicam dual2","Nicam dvojni",
						"Mono","LL","RR","LR"];
var souPreset		= ["Hudba","Kino","Jasný hlas","Štandardné","Užívateľ"];
var picAdRgbMode	= ["Vypnúť","Len červené","Len zelené","Len modré"];
var picAdOptions	= ["DNR","MPEG NR","RGB mode","Dynamický Kontrast","Zreteľnosť pohybu LED",
						"Farba pokožky ","Filmový režim","Režim hry","Teplota farieb","Vyváženie Bielej",
						"Zastaviť","Black Stretch","Nadsnímať","Gama","Režim HDMI","Vyváženie bielej 10P","Rozšírenie farebného spektra",
						"Zníženie rozostrenia","Zníženie otrasov","Farebný priestor","Zreteľnosť pohybu"];
var pic10Pwhite     = ["Interval","Červené","Zelené","Modré","Vynulovanie","Farba","Žltá","Azúrová","Purpúrová"];
var picMotionClarity = ["Režim pohybu","Interpolácia pohybu","Zreteľnosť pohybu LED","Zníženie rozostrenia","Zníženie otrasov","Vynulovanie"];
var picMotionMode   = ["Film","Vyrovnať","Vymazať","Šport","Zákazník"];
var picResetDes		= "Všetky osobné nastavenia budú obnovené. Naozaj chcete vykonať vybratú akciu?";
var pic10PReset     = "Naozaj chcete vynulovať vyváženie bielej 10P?";
var picMotionReset  = "Chcete obnoviť zreteľnosť pohybu?";
var picColorSpaceReset    = "Naozaj chcete vynulovať farebný priestor?";
var picOptions		= ["Režim pre obraz",
						"Podsvietenie","Jas","Kontrast","Sýtosť","Odtieň","Ostrosť","Teplota farieb","Režim obrazovky","Automatický formát",
						"Vylepšenie pre šport","3D","3D navigácia","ECO Nastavenie","Geometria",
						"Rozšírené nastavenia","Vynulovanie obrazu","Mikro stmievanie"];
var picSize			= ["formát 16:9", "Formát 4:3", "Oblika zapisa 14 : 9", "Cinerama",
						"Zoom 16:9", "Zoom máximo 16:9","Zoom 14:9","Zoom expandido","Zoom alargado",
						"Zoom 2","Zoom alargado 2","Natívne prispôsobenie obrazovky","Ponto por ponto","Pôvodné","Panoráma"];
var others			= ["Hlasitosť","Vysielanie","Heslo","Stav","Uložiť","Nahradiť","Spustiť","Ukončiť","Vyhľadávanie","Odstrániť",
						"Ei mitään","Automaticky","Preskúmať","Zabezpečenie","Pripojiť","Osveži","Znova","Ukončiť ","Nastavenie","Kanály",
						"Upraviť","Vložiť","Signálu!","Dokončiť","Stereo","Zvuk","Vir","Bez zvuku","Tipy","Vynulovanie",
						"Zákazník","Nastavenia","Uložiť","Používateľ","Zatvoriť klávesnicou","Režim zabezpečenia","Každý deň","Zoznam PVR"];
var direction		= ["Doľava","Doprava","Nahor","Nadol"];
var audioType 		= ["MPEG","DOLBY AUDIO"/*"AC3"*/,"MPEG4","AAC", "DOLBY AUDIO"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Neznámy"];
var soundChannels   = ["Neznámy","Mono","Sub","Dvojité mono","Stereo","Stereo Sub","Stereo Dolby Surround","Priestorový 2 kanálový","Priestorový","3.0Ch","4.0Ch","5.0Ch","Mono Lfe","Dual Mono Lfe","Stereo Lfe","Surround 2Ch Lfe","Surround Lfe","3.1Ch","4.1Ch","5.1 kanálový","7.1 kanálový","Joint Stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Doľava","Doprava","Ostatné"];
var prompts			= ["Prilagodite nastavitev slike tako, da vam najbolje ustreza.",
						"Prilagodite nivoje osvetlitve. Osvetlitev je močnejša bližje številu 100. ",
						"Prilagodite nivoje kontrasta. Razlika med temno in svetlo sliko je večja bližje številu 100. ",
						"Prilagodite nivoje nasičenosti. Barva je močnejša bližje številu 100.",
						"Prilagodite nivoje ostrine. Slika je bolj jasna bližje številu 100.",
						"Prilagodite nivoje osvetlitve v ozadju. Zaslon je svetlejši bližje številu 100. ",
						"Prilagodite nivoje odtenka. Ta nastavitev spremeni ton barve.",
						"Izberite obliko slike, ki najbolj ustreza predvajanemu programu.",
						"Nakonfigurujte možnosti úspory energie.",
						"Prilagodite nastavitve zaslonske geometrije, ko priključite računalnik.",
						"Vyberte ďalšie rozšírené nastavenia obrazu.",
						"Obnovte všetky nastavenia obrazu na predvolené.",
						"Vyberte režim zvuku, ktorý najviac zodpovedá vašim osobným potrebám.",
						"Upravte vyváženie hlasitosti medzi ľavým a pravým kanálom.",
						"Zvočni sistem TruSurround HD zagotavlja bogat zvok in jasnosti pri nizkih in visokih frekvencah.",
						"Oblika digitalnega vmesnika za povezovanje digitalnega avdio TV izhoda na opremo domačega kina. ",
						"Vyberte jazyk zvuku, ktorý zodpovedá vašim osobným potrebám.",
						"Omogočite nastavitev za slabovidne in uživajte v televizijskem programu.",
						"Otestujte obraz, zvuk a signál vášho TV.",
						"Vyberte typ zoznamu kanálov, ktorý zodpovedá vášmu TV signálu.",
						"Izberite jezik podnapisov, ki bodo prikazani na dnu zaslonu.",
						"Pregled besedila in slik trenutnega kanala.",
						"Standard Digital Living Network Alliance. Uživajte v glasbi, fotografijah in videoposnetkih preko domačega omrežja in drugih naprav, kot je računalnik.",
						"Prikažite vsebino svojega pametnega telefona na televizorju in telefon uporabite kot daljinski upravljalnik za televizor. ",
						"Prikažite vsebino iz naprave Android, združljive z Miracast, na vašem zaslonu televizorja.",
						"Uzamknite TV.",
						"Vyberte názov svojho zariadenia.",
						"Vyberte prostredie, v ktorom pozeráte.",
						"Obnovte všetky systémové nastavenia na predvolené.",
    					"Switch off sports mode for more options.",
    					"Zlepšiť kontrast okolia",
    					"Špeciálny režim pre športové hry",
    					"Využite ďalšie funkcie CEC."];
var initialTitle	= ["Vitajte","Počiatočné nastavenie"];
var initialPrompt	= ["Izvedite začetno namestitev in čaka vas svet razburljivih dogodivščin!",
						"Zvoľte svoj jazyk prosím:",
						"Vyberte svoju krajinu/oblasť:",
						"Vyberte umiestnenie",
						"Vyberte typ pripojenia k sieti:",
						"Vyberte režim pripojenia ku káblovej sieti:",
						"Nepodarilo sa pripojiť k xxxxxxxxx! Pripojte prosím zariadenie podľa nasledujúcej schémy alebo vyberte doľava pre obnovenie.",
						"Pripojené k xxxxxxxxx! Zvoľte prosím Doprava pre pokračovanie.",
						"1)Vaš TV morda že ima vgrajen brezžični vmesnik\n 2)Ali, če ste dobili brezžični USB vmesnik, ga priključite na vaš TV. Nato prosimo izberite način priključitve preko brezžičnega omrežja",
						"Prebieha skenovanie. Počkajte, prosím...",
						"Žiadne bezdrôtové zariadenie pripojené k TV!",
						"Pred kliknutím na „Ďalej“ sa uistite, či je na prístupovom bode nainštalovaný tento kód PIN.",
						"Pred stlačením tlačidla Doprava stlačte do 120 sekúnd tlačidlo na AP!",
						"WPS (Wi-Fi Protected Setup)",
						"PIN (osobné identifikačné číslo)",
						"PBC (Konfigurácia tlačidla)",
						"K nasledujúcemu obsahu možno pristupovať len so sieťovým pripojením. Chcete preskočiť nastavenia siete?",
						"Na voljo je nova programska oprema za prenos. Prenos lahko traja nekaj časa, odvisno od stanja omrežja.  ",
						"Aktualizácia softvéru TV zaistí, že budete môcť využiť najnovšie funkcie a služby.",
						"Ne boste mogli uporabljati najnovejših funkcij in storitev. Ali želite preskočiti posodobitev programske opreme? ",
						"Pritisnite desni gumb za nadaljevanje.",
						"Med posodobitvijo ne izključite napajanja, saj lahko to povzroči nepravilno delovanje televizorja.",
						"Ak nechcete aktualizovať, vyberte NIE.",
						"Prebieha aktualizácia, počkajte, prosím",
						"Softvér tiež môžete aktualizovať v časti SYSTÉM/AKTUALIZÁCIA SOFTVÉRU.",
						"Za izbrano državo potrebujete nastavitev gesla. \nProsimo nastavite kodo za vaš TV in jo potrdite.",
						"This code is too simple.\nPlease use different digits.",
						"Blahoželáme! Počiatočné nastavenie dokončené. Môžete zmeniť konfiguráciu cez hlavnú ponuku a súvisiace podponuky.",
						"Vyberte režim zabezpečenia:",
						"Vyberte režim pripojenia bezdrôtovej siete:",
						"Sieť"];
var initNetCabAndDonRe = ["Žiadny sieťový kábel nie je pripojený. Pripojte sieťový kábel!","Nie je k dispozícii žiadny vstavaný bezdrôtový adaptér alebo žiadny bezdrôtový USB adaptér."];
var initChPrompt = ["Uloženie TV kanálov","Vyberte typ skenovania anténnych kanálov.","Prebieha automatické ladenie...","Tieto anténne kanály boli nájdené:","Vyberte typ vyhľadávanie káblového vysielania.","Vyberte jedného operátora z nasledujúceho zoznamu.","Nakonfigurujte informácie vyhľadávania","Našli sa nasledujúce káblové kanály:","Vyberte jedného operátora z nasledujúceho zoznamu","Vyberte satelity, ktoré prehľadať, prípadne upravte vybraný satelit","Nastavte parametre satelitu","Tieto kanály boli nájdené. Skenovanie kanálov môžete opäť spustiť v časti Kanál/skenovanie kanál/skenovanie"];
var initClockPrompt = ["Získať čas zo siete!",
						"Nastavte dátum a čas:"];
var initialOptions	= ["Prostredie","Nastavenie siete","Aktualiz. softvéru","Inštalácia kanála","Synchronizácia"];
var initialHotkeys	= ["Späť","Zvoliť","Ďalej","Súhlasím"];
var initLocations	= ["Domov","Obchod","Trgovina s predstavitvijo"];
var initNets		= ["Káblová","Bezdrôtové","Nemám pripojenie k sieti"];
var initWireManuals	= ["Adresa IP","Maska podsiete","Predvolená brána","Primárny DNS","Sekundárny DNS"];
var initSoftUpdates = ["Aktualizovať teraz","Aktualizovať neskôr"];
var initChannelIns	= ["Pokračovať","Nechcem do ukladať kanály"];
var initChScanTypes	= ["Digitálny & Analógový","Digitálny","Analógový","Nechcem vyhľadávať"];
var initChDvbts		= ["Kanály prijímané cez anténu ATV:","Kanály prijímané cez anténu DTV:"];
var initChDvbcs		= ["Káblové kanály ATV:","Káblové kanály DTV:"];
var initChDvbss		= ["Satelitné kanály:"];
var initChDvbSOther	= ["Nechcem prehľadávať satelit"];
var initEndConnectedStatus= ["Odpojené","Pripojené cez WiFi","Pripojené cez kábel"];
var initEndInstallations= "Uložených XXXX kanálov";
var initEndUpdate	= ["Aktualizované"];

var audioScenes 	= ["Na stole","Montáž na stenu"];			
var screenSavers	= ["Žiadne kanály, stlačte tlačidlo OK a vyhľadajte!",
						"Bez signálu!",
						"Kódovaný",
						"Len údaje",
						"Program so zvukom",
						"Bez zvuku a obrazu",
						"Nie je k dispozícii",
						"Bez teletextu",
						"Ni podatkov o programu.",
						"Program je zablokovaný!",
						"Program je zablokovaný!\nStlačte OK a vložte svoj kód.",
						"Ni podrobnosti o programu.",
						"Program škodlivý pre maloleté.\nStlačte OK a zadajte kód.",
						"Kanál je zablokovaný!",
						"Kanál je zamknutý!\nStlačte OK a vložte svoj kód.",
						"Vstup je zamknutý!\nStlačte OK a vložte svoj kód.",
						"Bez podpory!",
						"Táto služba momentálne nie je k dispozícii",
						"Vstup zamknutý!",
						"Ni naslova programa.",
						"Bez funkcie",
    					"Bez Titulky"
						];
var channelNumberOverPromt = ["The number of search programs has exceeded,you can delete some programs and then retry!"];
var chBookingPromt	= ["Kanál má naplánované nahrávanie, TV začne nahrávanie.",
						"Našlo sa naplánované nahrávanie,\nprepína sa na XXXX pre nahrávanie",
						"Na aktuálnom kanáli je pripomenutie.",
						"Našlo sa naplánované pripomenutie.\nPrepína sa na XXXX"];
var timeUnit		= ["s.","min"];
var ciPromt			= ["Sieťové údaje boli zmenené. Pre aktualizáciu môžete spustiť kontrolu aktualizácií. ",];
var othersPromt		= ["Počkajte prosím...",];
var menuOptions		= ["Obraz  ","Zvuk","Kanál","Smart TV","Sieť","Systém","Podpora"];
var optionOptions	= ["Režim pre obraz","Prednastavený zvuk","Zastaviť","T-Link","timeshift","PVR","Urnik","Nastavenie","*"];
var optionTLinkPromt= [["Automatické zapnutie","Autom. pohotovosť","Menu sprievodcu"],
						["Zapnúť","Pohot. režim","Hlasitosť zosilňovača"]];
var powerPromt		= ["Televízor sa čoskoro vypne! Zrušíte stlačením ľubovoľného tlačidla."];
var ttxLanguage		= ["ZÁPADNÁ EURÓPA","VÝCHODNÁ EURÓPA","Ruský","Arabsky/Hebrejsky","Farejsky","Arabsky","Valkovenäjä","Grécky","Turecky"];
var ttxOptions		= ["Odhaliť","Cykliť podstrany","Jazyk","Strana alarmu","Horúce novinky"];
var weekday         = ["Nedeľa","Pondelok","Utorok","Streda","štvrtok","Piatok","Sobota"];
var lcnConfflict	= "Tento program má problémy so signálom. Iná verzia je prístupná na kanáli %.";
var inShopMode		= "Váš TV je v režime obchodu. Domáci režim vyberte v časti \"Systém\" a v ponuke zmeňte \"Umiestenie\".";
var nitRefresh		= "Údaje siete boli zmenené. Chcete spustiť aktualizáciu?";
var picHDMIMode     = ["Automaticky","Grafický","Video"];

var glassRemind    	= ["Spárujte prosím vaše 3D okuliare s TV\n (pridržajte vypínač na 3D okuliaroch).","Vaše 3D okuliare sú pripojené k TV ",""];
var pvrRemind 		= ["Nevytiahujte USB zariadenie a neprerušujte napájanie"];
var pvrConName   	= ["PVR","Informácie o programe:",["Note: If you record the HD channel, please to select  the  disk(of speed >5.0MB/sec), and to select the disk (of speed >3.0MB/sec) when you want to record the SD channel.","Nahraté video je uložené v “PVR“ adresári."],"Ukončiť ","Nahrať","hodina","Minúta","Trvanie","Tipy","Použite šípky na nastavenie dĺžky nahrávania."];
var pvrDisRemind 	= "Zapojte USB kľúč na nahrávanie.";
var pvrRemindWords  = ["Chcete ukončiť?",
							"Chcete zastaviť nahrávanie a prechádzať nahraté súbory?",
							"Disk je vytiahnutý.",
							"Nedostatok voľného miesta. ",
							"Žiadne nahraté súbory. Spustite nahrávanie.",
							"PVR nemožno spustiť na zakódovanom kanáli.",
							"Funkcia nedostupná",
							"Úspešne uložené.",
							"Chcete zastaviť proces nahrávania a zmeniť zdroj vstupu?",
							"TV skončí aktuálne nahrávanie. Chcete ukončiť?",
							"PVR nahrávanie potrebuje, aby televízny signál fungoval správne. Skontrolujte váš signál."];
var pvrChangeCh 	= ["Chcete prepnúť kanál?",
							"Chcete zastaviť proces nahrávania a zmeniť kanál?"];
var pvrChangeToPIN8	= ["Chcete zmeniť zdroj na zariadenie pripojené cez vstup SCART?",
				    		"Chcete zastaviť nahrávanie a zmeniť zdroj na zariadenie pripojené cez vstup SCART?"];
var pvrChangeToCEC  = ["Chcete zmeniť zdroj na zariadenie pripojené cez vstup HDMI?",
				  			 "Chcete zastaviť nahrávanie a zmeniť zdroj na zariadenie pripojené cez vstup HDMI?"];
var pvrGuideJump    = ["Chcete otvoriť EPG?",
							"Chcete zastaviť proces nahrávania a vstúpiť do EPG?"];
var pvrMediaJump    = ["Chcete otvoriť médiá?",
							"Chcete zastaviť proces nahrávania a vstúpiť do Media?"];
var timeshiftExtra	= ["Želáte si zastaviť časový posun a zmeniť TV zmeniť kanál?",
						"Chcete zrušiť časový posun a zmeniť zdroj na zariadenie pripojené cez vstup SCART?",
						"Chcete zrušiť časový posun a zmeniť zdroj na zariadenie pripojené cez vstup HDMI?",
						"Časový posun nemožno spustiť na kódovanom kanáli.",
						"Chcete zrušiť časový posun a otvoriť EPG?",
						"Želáte si zastaviť časový posun a zmeniť TV na USB mód?",
						"Želáte si zastaviť časový posun a zmeniť vstupný zdroj?",
						"Zapojte USB kľúč na nahrávanie.",
						"Veľkosť disku nepostačuje.",
						"TV skončí aktuálny časový posun. Chcete ukončiť?"];
var timeshiftStatus	= ["Rýchlo dozadu","Ukončiť ","Hrať","Pauza","Rýchlo dopredu"];
var pvrPowerOffRemind= ["Nahrávanie v pohotovostnom režime","Pohot. režim","TV teraz nahráva. Chcete pokračovať v nahrávaní, keď je TV v pohotovostnom režime?"];
var timeshiftInitTitle= "Nastavenie disku";
var timeshiftInitReminds= ["K nastaveniu disku pre časový posun slúži tento návod. Prosím zvoľte si mód pre nastavenie.",
						 "Pre zlepšenie výkonu doporučujeme naformátovať USB disk. Týmto krokom zmažete všetky údaje.",
						 "Prosím zvoľte veľkosť súboru pre časový posun.",
						 "Formátuje sa",
						 "Nedostatok voľného miesta. ",
						 "Vytvára sa súbor pre časový posun",
						 "Testuje sa rýchlosť",
						 "Rýchlosť disku je príliš pomalá (< %f MB/sek) pre spustenie funkcie časového posunu!",
						 "Disk je pripravený pre časový posun. Pre zlepšenie výkonu však doporučujeme vymeniť disk (s rýchlosťou > %f MB/sek)",
						 "Disk je pripravený pre časový posun."];
var timeshiftInitButtons= ["Formátovať","Preskočiť","Zrušiť","OK","Dokončiť","Ukončiť"];
var timeshiftInitOther=["Rýchlosť disku:","MB/s"];

var selectChoice	= "Ste si istý?";
var chAtvStore		= "Uložiť ako XXXX";
var chEpgFirstGenreUK= ["Kino","Správy a informácie","ZÁBAVA","Šport","Detské","Vzdelávanie","Životný štýl","Dráma"];
var homePageTitleList = ["APLIKÁCIE","TV","VIDEÁ","Domovská stránka"];
var homePageFavAndAllName  = ["Obľúbené aplikácie","Všetky aplikácie"];
var homePageBackUp = ["Elektronická príručka","GuideOn"];
var homePageRemind   = ["Všetky funkcie sú k dispozícii len po pripojení na sieť.","Váš televízor zatiaľ nemá žiadne kanály. Programy sú k dispozícii po skenovaní kanálov.","Žiadny program","Hľadať kanály teraz?"];
var homePageHistory = ["História"];
var miracastTitle = ["Wifi displej","Zariadenie TCL"];
var miracastRemind=["Funkcia Odkaz na WiFi TV umožňuje bezdrôtovo (tzn. bez káblov) zdieľať obrazovku a zvuk zo zariadenia, ako je napríklad smartfón alebo tablete, na televízore. Vďaka tomu môžete súčasne pozerať na televízore to isté, čo sa zobrazuje na smartfóne alebo tablete. Môžete napríklad na smartfóne spustiť video a zobrazovať ho súčasne na televízore, prípadne môžete použiť tablet ako herný ovládač s obsahom zobrazeným na veľkej obrazovke televízora.","Wi-Fi TV linka na TV je pripravená. Spustite a zdieľajte obrazovku zariadenia na televízore.","Povezovanje. Prosimo, počakajte!","Povezava ni bila uspešna!","Ni mogoče povezati. Prosimo, preverite!"];
var homePageLittleWin = ["Nastavenie","Médiá","Obľúbené kanály","Smart TV","EPG"];

var hbbtvStopRemind  = ["Ali želite zaustaviti predvajanje?"];
var colorSystem = ["Automaticky","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Stlačte ≡ pre viac informácií";
var emptyListInfo = "Neexistuje zariadenie pripojené k TV!";
var optionVideoListArray_1 = ["Režim pre obraz", "Prednastavený zvuk", "Režim prehrávania", "Režim obrazovky", "Režim 3D", 
							  "Prepnúť Ľ-P", "Hĺbka poľa", "Titulky", "Zvuková stopa", "Názov", "Kapitola", "Informácie"];
var optionVideoListArray_2 = ["Režim pre obraz", "Prednastavený zvuk", "Režim prehrávania", "Režim obrazovky", 
							  "Titulky", "Zvuková stopa", "Názov", "Kapitola", "Informácie"];
var bottomTipsText = ["Prehrať/Pozast.", "Rýchlo dozadu", "Rýchlo dopredu", "Zoznam skladieb", "Nastavenie"];
var picturePresetArray = ["Štandardné", "Dynamický", "Prírodné", "Kino", "Užívateľ"];
var videoPlayModeArray = ["Opakovať všetko", "Opakovať jednu", "Normálne"];
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Zoom alargado", "Zoom 2", "Zoom alargado 2", "Zoom expandido", "Automaticky"];
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "Zoom 14:9", "Zoom 16:9", "Zoom máximo 16:9", "Automaticky"];
var Mode3DArray = ["Vypnúť", "2D na 3D", "Vedľa seba", "Hore a dole", "Prekl. riadkovanie"];
var videoOptionListArray = ["Vypnúť", "Stopa", "Titulky", "Názov", "Kapitola"];
var subMenuTitleText = "Titulky";
var langMenuTitleText = " Jazyk audia";
var titleMenuTitleText = "Názov";
var mode3DMenuTitleText = "Režim 3D";
var langInfoText = "Stopa";
var STOP_RESUME_INFO = "Stop-Pokračovať";
var playListName = "názov";
var eb_tips = "Tipy";
var ok_button = "OK";
var eb_info = ["Chyba dekódovania zvuku.", "Chyba dekódovania videa.", "Audio formát nie je podporovaný.", 
			   "Formát videa nie je podporovaný.", "Ne morem odpreti te datoteke.", "Napaka pri predvajanju, prosimo poskusite ponovno.",
			   "Format ni podprt.", "Ups! Predvajalnik je prenehal delovati.",
			   "Pot datoteke ne obstaja ne obstaja ali ni veljavna.\n Ponovno vstavite napravo za shranjevanje in poskusite znova.",
			   "Nadaljujem s predvajanjem od zadnje\n točke predvajanja?"];
var picturePlayErrorTips = ["Chyba pri načítaní!!!","Obrázok je príliš veľký!!!","Chyba siete!!!","Chyba vlákna!!!","Chyba parametra!!!","Neznáma chyba!!!"];
var frameTitleText = "Nové zariadenie";
var eb_quit_info = "Naozaj chcete ukončiť?";
var eb_yes = "ÁNO";
var eb_no = "NIE";
var offinfo = "Vypnúť";
var naInfo = "Null";
var consoleInfoArray = ["Rýchlo dozadu", "Rýchlo dopredu", "Prehrať/Pozast.", "Zoznam skladieb"];
var cantOperateText = ["Funkcia nie je podporovaná."];
var chapterChangeInfo = "K dispozícii sú iba kapitoly 1 až XXXX.";
var metaDataArray = ["Názov/vydanie - metadáta: ", "Kapitola - metadáta: ", "Audio - metadáta: ", "Podtitulky - metadáta: "];
var metaTitleInfo = "Názov";
var metaChapterInfo = "Kapitola";
var videoLoadingInfo = "Analyzujem...";
var listLoadingInfo = "Načítavam...";
var pgInfo = "Zákonné hodnotenie: ";
var fileNameText = "názov";
var fileDateText = "Dátum";
var fileSizeText = "Veľkosť";
var fileDurationText = "Trvanie";
var fileDirectorText = "Režisér";
var fileCopyrightText = "Autorské práva";
var fileArtistText = "Umelec";
var fileAlbumText = "Album";
var fileGenreText = "Žáner";
var fileYearText = "Rok";
var fileGenreText = "Žáner";
var mainListArray = ["Všetky", "Obraz  ", "Video", "Hudba"];
var sortArray = ["názov", "Dátum"];
var parserArray = ["Normálne", "Rekurzívne  "];
var emptyTipsInfo = "Ups. Nobena podprta datoteka ni bila najdena.";
var emptyFolderInfo = "Ups. Nobena podprta datoteka ni bila najdena.";
var sortName = "Triediť podľa";
var parserName = "Prehľadávač";
var divx_str1 = "Registrácia DivX(R)";
var divx_str2 = "Zrušenie registrácie pre DivX(R)";
var infor_str = "Informácie";
var quickMenuEmptyText = "Žiadne dostupné možnosti.";

var musicSoundPresetArray = ["Štandardné", "Kino", "Hudba", "Jasný hlas", "Užívateľ"];
var musicInformationArray = ["názov", "Umelec", "Album", "Žáner:", "Rok:", "Trvanie:"];
var playListName = "názov";
var playTipsInfo = ["Predvajate prvo datoteko.", "Predvajate zadnje datoteka."]
var musicNameInfo = "Name";
var musicArtistInfo = "Umelec";
var musicAlbumInfo = "Informácie";
var optionSoundPresetInfo = "Prednastavený zvuk";
var optionBGMInfo = "Prehrávanie na pozadí";
var optionAudioOnlyInfo = "Len zvuk";
var optionInfoText = "Informácie";

var remotePhoneConnecte = "XXXX je pripojené k TV!";
var tvRemoteTitle		= "Diaľ. ovlád. TV";
var tvRemoteDeveloper	= "Aplikáciu vyvinula spoločnosť TCL";
var tvRemoteDeviceTitle	= "Názov zariadenia:";
var remoteOption		= ["Zdieľanie médií","Diaľkové ovládanie","Pomoc","Čo je...","Inteligentné pripojenie"];
var remotebottom		= " Stiahnite si \"TV Remote\" na váš smartphone ";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Zdieľanie fotografií, videa a hudby s TV cez telefón.",
							"Kroky: \n   1. Kliknite na \"TV Remote\" na telefóne. Spojte telefón s TV cez rovnakú WiFi sieť;\n   2. Kliknite na \"Zdieľanie médií\" a prehľadávajte mediálne súbory;\n   3. Pošlite mediálne súbory do TV a prehrajte ich (s niektorou z nasledovných možností)",
							"      a) Potiahnite priečinok alebo súbor na ikonu TV vo vrchnej časti obrazovky.\n      b) Nasmerujte telefón na TV, ak chcete spustiť prvý súbor.\n      c) Na telefóne spustite prehrávanie média a kliknite na ikonu zdieľania.",
							"   4. Počas prehrávania na TV môžete zatrasením telefónu prehrať predchádzajúci alebo nasledujúci súbor."];
var controlReminds		= ["Použite telefón ako diaľkové ovládanie TV.",
							" ",
							"Kroky: \n   1. Kliknite na \"TV Remote\" na telefóne. Spojte telefón s TV cez rovnakú WiFi sieť;\n   2. Kliknite na \"Diaľkové ovládanie\" pre ovládanie TV."];
var helpDeviceWords		= "Práca s viacerými obrazovkami";
var helpBottom			= " V období technológie Cloud sú inteligentné zariadenia, ako napríklad telefóny a televízory, vzájomne prepojené. Podeľte sa o médiá so svojou rodinou na viacerých obrazovkách a ovládajte televízor pomocou telefónu! ";
var helpReminds			= ["Príprava\n   1. Stiahnite a nainštalujte \"TV Remote\" z Google Play alebo z Apple Store.\n   2. Spojte telefón s TV cez rovnakú WiFi sieť.",
							" ",
							"Odporúčaný telefón\n   1. Procesor: viac ako 800 MHz\n   2. Pamäť: aspoň 80 MB voľného miesta",
							" ",
							"Zavrnitev odgovornosti\n   Če možnost TV-daljinca na vašem telefonu ni na voljo, se obrnite na proizvajalca telefona. "];
var helpButtons			= ["Predch.","Ďalej"];
var aboutReminds		= ["Diaľ. ovlád. TV","Aplikáciu vyvinula spoločnosť TCL"];
var aboutExit			= "Ukončiť";
var smartReminds		= ["Rýchle a inteligentné spojenie medzi TV a telefónom.",
							" ",
							"Kroky \n   1. Pripojte TV a smartphone k rovnakej sieti LAN. Kliknite na \"TV Remote\" na smartphone.\n   2. Kliknite na \"Inteligentné pripojenie\" a naskenujte QR kód.\n   3. S televízorov v režime na prezeranie vysielania stlačte tlačidlo INFO na diaľkovom ovládaní TV na 4 sekundy. Otvorí sa QR kód cez celú obrazovku.",];
var smartQRReminds		= ["Kliknite na Inteligentné pripojenie v TV Remote na telefóne a naskenujte QR kód pre rýchle spojenie TV a telefónu.",
							"QR kód obsahuje informácie o účte LAN. Dobre ho uchovajte."];
							

var consoleTipArray = ["Predch.","Ďalej","Konzola","Zoznam skladieb"];							
var optionInfoArray = ["Režim pre obraz","Režim prehrávania","Trvanie","Efekt","Informácie"];

var playModeArray = ["Normálne","Miešať","Opakovať"];
var durationArray = ["Krátky (5 s)", "Stredný (10 s)", "Dlhý (15 s)"];
var effectArray = ["Ei mitään", "Otočiť", "Zotrieť napravo", "Zotrieť naľavo", "Zotrieť nahor", "Zotrieť nadol", "Obdĺžník-roztiahnuť", "Obdĺžník-stiahnuť", "Náhodne"];
var infoArray = ["Názov:","Veľkosť:","Dátum:","Miesto"];

var picturePresetBarTitleInfo = "Režim pre obraz";
var picturePresetBarArray = ["Štandardné","Dynamický","Štúdio","Kino","Užívateľ"];
var upTipsInfo = "Posun obrazu"; //add yums 2014-10-10
var consoleTipsArray = ["Konzola","Predch.","Ďalej","Zoznam skladieb","Nastavenie"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Stlačte opäť DOPRAVA pre zobrazenie ďalšieho obrázku","Stlačte opäť DOľaVA pre zobrazenie predchádzajúceho obrázku","Stlačte opäť NADOL pre zobrazenie zoznamu skladieb"]; //add yums 2014-10-10

var optionPvrListArray = ["Režim pre obraz","Prednastavený zvuk", "Režim obrazovky", "Režim 3D", "Titulky", "Zvuková stopa", "Informácie"];							
	
var titleSpanFirstArray = ["Ovládanie a pripojenie","Základné operácie","APLIKÁCIE","TV","Nastavenie","FAQ"];
var titleSpanSecondArray = [["Diaľkové ovládanie","Tlačidlá na panelu","Preprosto krmarjenje","TV pripojenie","TV pripojenie","TV pripojenie","Bezdrôtové"],["Spúšťač","Stavový riadok","Vir"],["Aplikácie na prehrávanie","Médiá","Diaľ. ovlád. TV"],["Nastaviť hlasitosť a kanál","Zoznam kanálov","EPG","Kanály","Obľúbené kanály"],["Nastavenie obrazu","Nastavenie zvuku","Nastavenie kanálu","Aktualiz. softvéru","Jazyk","Rodičovský zámok"],["Často kladené otázky","Často kladené otázky","Riešenie problémov","Riešenie problémov","Pogoji uporabe"]];
var contentSpan1_1Array =[["NAPÁJANIE:","ZDROJ:","NASTAVENIA:","MOŽNOSTI:","SPÄŤ:","INFO:","DOMOV:","SKONČIŤ:","ZOZNAM:"],
    ["Zapnúť alebo do pohotovostného režimu",
        "Vybrať vstupný zdroj",
        "Zobrazenie ponuky Nastavenia",
        "Zobrazenie ponuky Možnosti",
        "Prejdite naspäť do predchádzajúcej ponuky, prípadne zatvorte aplikáciu",
        "Zobrazuje informácie o programe",
        "Otvorenie hlavnej stránky Inteligentný TV",
        "Prejdite naspäť do predchádzajúcej ponuky, prípadne zatvorte aplikáciu",
        "Zobrazuje zoznam kanálov"]];
var contentSpan1_2Array = ["Prejšnji kanal","Naslednji kanal","Zvýšenie hlasitosti","Zníženie hlasitosti","Prejde na domovskú stránku","Potvrdiť voľbu","Pohotovostný režim/zapnutie"];
var contentSpan1_3Array = ["OK/vodnik","Kanal gor","Kanal dol","Glasnost gor","Glasnost dol","Na voljo kot puščični gumbi z istimi funkcijami."];
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","Adaptér AV OUT","LAN","Smartphone","PC/Set-top box/DVD","Audio zosilňovač","Audio zosilňovač/monitor","Váš televízor nemusí mať všetky zásuvky."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Slúchadlá","Adaptér AV IN","SPDIF","Adaptér CMP AUDIO IN","Adaptér CMP IN (YPbPr)","USB zariadenia","USB zariadenia","Slúchadlá","DVC/herná konzola/Set-top box/DVD","Audio zosilňovač","DVC/herná konzola/Set-top box/DVD","Váš televízor nemusí mať všetky zásuvky."];
var contentSpan1_6Array = ["Spoločné rozhranie","SD","VGA","SCART","Mini SCART","ANTÉNA IN","Karta PCMCIA","Karta SD","PC","Set-top box/DVD","Anténa/kábel/satelit","Váš televízor nemusí mať všetky zásuvky."];
var contentSpan1_7Array = ["Tablet","PC","Smerovač","Telefón","TV"];
var contentSpan1_8Array = ["Prepnúť funkciu/Zapnúť","Stlačením a podržaním prejdete na časovač režimu spánku","Nadol","Nahor","Hlasitosť/Kanál/Zdroj"];

var contentSpan2Array = [["Za prikaz domače strani pritisnite puščične gumbe.","Potom stlačte OK pre spustenie odporúčaného programu alebo otvorte aplikáciu."],["Zobraziť dátum, sieť a zariadenia atď v pravom hornom rohu obrazovky."],["Vyberte vstupný zdroj zo zariadenia pripojeného k TV prostredníctvom rôznych portov, ako je TV, AV, HDMI atď."]];

var contentSpan3Array = ["Uživajte v svojih priljubljenih aplikacij prek strani pametne televizije (Smart TV)","Oglejte si fotografije, glejte videoposnetke in predvajajte glasbo iz USB-naprave za shranjevanje.","Spojte TV a smartphone alebo tablet do rovnakej siete LAN.","Kliknite nScreen ali daljinski upravljalnik na pametnem telefonu ali tabličnem računalniku. ","Omogočite skupno rabo fotografij, videoposnetkov in glasbe na več zaslonih, z vašo družino in upravljajte televizor preko pametnega telefona. "];

var contentSpan4Array = [["Stlačte HORE/DOLE pre prepínanie kanálov","Stlačte DOĽAVA/DOPRAVA pre nastavenie hlasitosti"],["Pritisnite LIST na daljinskem upravljalniku za pregled seznama kanalov","Stlačte HORE/DOLE pre výber kanálu"],["EPG je sprievodca na obrazovke, ktorý zobrazuje naplánované TV programy. Môžete prechádzať, vyberať, prezerať a nahrávať programy."],["Hľadanie a ukladanie kanálov"],["Pridajte alebo upravte vaše obľúbené kanály v Zozname kanálov"]];

var contentSpan5Array = ["Vychutnajte si svoje obľúbené programy prostredníctvom video aplikácií"];

var contentSpan6Array = [["Stlačením Možnosť pre zobrazenie možností nastavenia systému","Otvorte Nastavenia obrazu a hodnoty upravte"],["Stlačením Možnosť pre zobrazenie možností nastavenia systému","Otvorte Nastavenia zvuku a voľby nastavte"],["Stlačením Možnosť pre zobrazenie možností nastavenia systému","Otvorte Nastavenia kanálov a voľby nastavte"],["Aktualizovať televízor, keď je k dispozícii nová verzia softvéru"],["Môžete si vybrať preferovaný jazyk ponuky"],["Umožňuje rodičom uzamknúť kanály alebo programy, ktoré sú nevhodné pre deti"]];

var contentSpan7_1Array = [["Žiadny obraz, žiadny zvuk","Skontrolujte, či poistka alebo istič funguje.","Zapojte do elektrickej zásuvky iné elektrické zariadenie a uistite sa, že funguje a je zapnuté.","Zástrčka má v elektrickej zásuvke zlý kontakt","Skontrolujte zdroj signálu."],["Normálny obraz, žiadny zvuk","Stlačte tlačidlo na zvýšenie hlasitosti a zvýšite hlasitosť.","Nastavenie zvuku je nesprávne.","Chyba signálu z vysielania."],["Normálny zvuk, žiadny obraz","Nastavte jas a kontrast","Chyba signálu z vysielania.","Skontrolujte, či nie je v režime len zvuk."]];
var contentSpan7_2Array = [["Rušenie rádiového vysielania","Toto rušenie produkuje pohyblivé vlny alebo diagonálne pruhy a v niektorých prípadoch stratu kontrastu v obraze. Vyhľadajte a odstránte zdroj rušenia rádiového vysielania."],["Žiadna farba","Upravte nastavenia farieb.","Skúste iný kanál. Možno prijímate čiernobiely program."],["Ďiaľkové ovládanie nefunguje","Vymeňte batérie.","Batérie nie sú správne vložené. Hlavné napájanie TV nie je pripojené."]];
var contentSpan7_3Array = [["Obsah USB zariadenia nie je zobrazený","Zkontrolujte, že pamäťové USB zariadenie je kompatibilné s TV.","Skontrolujte, že TV podporuje formáty zvukových a obrazových súborov."],["Prehrávanie bez zvuku","TV prehrávač nepodporuje zvukový formát videa."],["Súbory sa neprehrávajú plynulo","Prenosový výkon pamäťového USB zariadenia môže obmedziť rýchlosť prenosu dát do televízoru."]];
var contentSpan7_4Array = [["Čomu mám venovať pozornosť pri aktualizácii softvéru","Žiadne výpadky napájania počas aktualizácie softvéru.","Pri aktualizácii softvéru sa vyhnite akýmkoľvek operáciám s diaľkovým ovládaním.","Buďte trpezliví, pretože aktualizácia softvéru môže trvať trochu dlhšie."],["Po aktualizácii softvéru nedochádza k žiadnym zreteľným zmenám rozhrania TV.","Za určitých podmienok môže pri aktualizácii SW dôjsť nielen k aktualizácii alebo pridaní nových funkcií, ale tiež ke zvýšeniu výkonnosti televízora bez zreteľných zmien rozhrania. Rozhranie televízora môže tiež niekedy zostať beze zmeny."]];
var termsTitle = "Pogoji uporabe";
var termsConditions = ["(Pravna izjava) družbe TCL – proizvajalca tega televizorja. ","Kvôli rozmanitosti možností výrobkov s podporou služieb inteligentného TV, ako aj kvôli obmedzeniam v dostupnom obsahu, nemusia byť určité funkcie, aplikácie a služby k dispozícii na všetkých zariadeniach alebo na všetkých územiach. Niektoré funkcie inteligentného TV tiež môžu vyžadovať ďalšie periférne zariadenia alebo členské poplatky, ktoré sa zakupujú osobitne. Ďalšie informácie o konkrétnom zariadení a dostupnosti obsahu nájdete na našej webovej stránke. Služby a dostupnosť obsahu prostredníctvom inteligentného TV sa môžu občas zmeniť bez predchádzajúceho oznámenia. \n   Všetok obsah a služby, ktoré sú k dispozícii prostredníctvom tohto zariadenia, prináležia tretím stranám a sú chránené autorským právom, patentmi, ochrannými známkami alebo inými zákonmi na ochranu duševného vlastníctva. Tento obsah a služby sa poskytujú výhradne na osobné nekomerčné používanie. Nesmiete používať žiadny obsah alebo služby spôsobom, ktorý nie je vlastníkom práv alebo poskytovateľom služieb povolený. Bez obmedzenia na predchádzajúce vyhlásenie, a ak to nie je výslovne povolené príslušným vlastníkom obsahu alebo poskytovateľom služieb, nesmiete upravovať, kopírovať, znova uverejňovať, odovzdávať, pridávať, prenášať, prekladať, predávať, vytvárať odvodeniny, zneužívať ani nijakým spôsobom rozširovať žiadny obsah alebo služby zobrazované prostredníctvom tohto zariadenia. \n   VÝSLOVNE BERIETE NA VEDOMIE A SÚHLASÍTE S TÝM, ŽE ZARIADENIE POUŽÍVATE NA SVOJE VÝHRADNÉ RIZIKO, A ŽE ÚPLNÉ RIZIKO USPOKOJIVEJ KVALITY, VÝKONU A PRESNOSTI NESIETE VY. ZARIADENIE A VŠETOK OBSAH TRETÍCH STRÁN A SLUŽBY SA POSKYTUJÚ „TAK AKO SÚ“ BEZ ZÁRUKY AKÉHOKOĽVEK DRUHU, VÝSLOVNEJ ALEBO PREDPOKLADANEJ. SPOLOČNOSŤ TCL VÝSLOVNE NEPOSKYTUJE ŽIADNE ZÁRUKY A PODMIENKY TYKAJÚCE SA ZARIADENIA A AKÉHOKOĽVEK OBSAHU A SLUŽIEB, ČI UŽ VÝSLOVNÉ ALEBO PREDPOKLADANÉ, OKREM INÉHO ZÁRUKY PREDAJNOSTI, USPOKOJIVEJ KVALITY, VHODNOSTI NA KONKRÉTNY ÚČEL, PRESNOSTI, POKOJNÉHO VYUŽÍVANIA A NEPORUŠOVANIA PRÁV TRETÍCH STRÁN. SPOLOČNOSŤ TCL NEZARUČUJE PRESNOSŤ, PLATNOSŤ, ČASOVÚ NEOBMEDZENOSŤ, LEGÁLNOSŤ ANI ÚPLNOSŤ ŽIADNEHO OBSAHU ALEBO SLUŽBY DOSTUPNÝCH PROSTREDNÍCTVOM TOHTO ZARIADENIA A NERUČÍ ZA TO, ŽE BUDE OBSAH ALEBO SLUŽBA SPĹŇAŤ VAŠE POŽIADAVKY, A ANI ZA TO, ŽE BUDE PREVÁDZKA ZARIADENIA ALEBO SLUŽIEB NEPRERUŠOVANÁ ALEBO BEZCHYBNÁ. ZA ŽIADNYCH OKOLNOSTÍ VRÁTANE NEDBANLIVOSTI NENESIE SPOLOČNOSŤ TCL ZMLUVNÚ ANI TRESTNOPRÁVNU ZODPOVEDNOSŤ ZA ŽIADNE PRIAME, NEPRIAME, NÁHODNÉ, ZVLÁŠTNE ANI NÁSLEDNÉ ŠKODY, NÁKLADY NA PRÁVNE ZASTUPOVANIE ANI AKÉKOĽVEK INÉ ŠKODY VZNIKNUTÉ V SÚVISLOSTI S POUŽÍVANÍM ZARIADENIA, OBSAHU ALEBO SLUŽIEB, KTORÉ Sú K DISPOZÍCII VÁM ALEBO TRETEJ STRANE, A TO ANI V PRÍPADE, ŽE STE BOLI S TAKÝMITO ŠKODAMI OBOZNÁMENÍ. \n   Služby tretích strán môžu byť kedykoľvek bez oznámenia zmenené, pozastavené, odstránené, ukončené alebo prerušené, prípadne k nim môže byť prístup zrušený. Spoločnosť TCL (výrobca televízorov pod značkou Thomson) neposkytuje žiadne záruky na to, že bude obsah alebo služby k dispozícii po určitú dobu. Obsah a služby sú prenášané tretími stranami. To znamená, že spoločnosť TCL neriadi siete a zariadenia určené na prenos. Bez obmedzenia na všeobecnosť tohto vyhlásenia spoločnosť TCL výslovne odmieta akúkoľvek zodpovednosť za zmenu, prerušenie, vypnutie, odstránenie alebo pozastavenie obsahu alebo služby, ktoré sú k dispozícii prostredníctvom tohto zariadenia. Spoločnosť TCL môže kedykoľvek a bez oznámenia zaviesť obmedzenia využitia alebo prístupu k určitým službám alebo obsahu. Spoločnosť TCL nezodpovedá za zákaznícke služby súvisiace s obsahom a službami. Všetky otázky alebo žiadosti o servis súvisiaci s obsahom alebo službami je potrebné smerovať priamo na príslušného poskytovateľa obsahu alebo služieb."];

var noChannelListRemind        = ["Žiadne kanály nenájdené. Zoznam kanálov je k dispozícii po skenovaní kanálov.","Vyhľadávanie kanálov"];
var closeSubtitleRemind   = "Funkcia bude k dispozícii, keď budú titulky vypnuté. Chcete teraz nastaviť?";

var estickerTitles = ["Vysoko realistické obrazy","Farby, ktoré ožívajú","Skvelý prirodzený pohyb","Kvalita dynamického obrazu","SR UHD upscaling","Svet 3D skúseností","Rýchlejší výkon","Budúci obsah 4K","Vychutnajte si online svet","Prístup k extra obsahu","Integrované digitálne tunery","Pripojiť všetky zariadenia","Rôzne zdroje 4K","USB obsah","Ultra rýchle WiFi","Mobilný obsah na TV","Obsah mobilného zariadenia","Lokálny obsah","Schválené DivX","Plynulý obraz","Canal Ready","TDT Premium"];
var estickerDescriptions = ["Úžasný zážitok zo sledovania vďaka obrazu s štyrikrát viac detailmi oproti obrazovce Full HD na UHD","Široký škála farieb prináša emócie v každej scéne s živou červenou alebo smaragdovo zelenou","Interpolácia rámu 4K a podsvietenie proti problémom s rozostrením pri pohybu","Živosť pôvodného obrazu je zvýraznená a prináša naozaj dynamický prejav so skvelým kontrastom","Užite si televízne relácie a Blu-Ray disky ostrejší než kedykoľvek predtým vďaka technológii Super Resolution","Zažite 3D TV ready sledujte rôzne obsahy 3D","Viac zábavy a skúsenosti s Quad Core pre plynulú interakciu, zvýšenie výkonu","Podpora kodeku HEVC (H.265) pre nadchádzujúci štandard distribúcie videa 4K","Množstvo online aplikácií, VOD služieb, zachýtenie TV vysielaní a prezeranie webových stránok","S ďalšími doplnkovými službami a obsahom z vašich obľúbených staníc získate viac","Prístup k TV kanálom vo vysokom rozlíšení bez dodatočného set-top boxu","Jednoduché pripojenie mnohých digitálnych zdrojov, ktoré sú dostupné doma","TV pripravený na budúcnosť, ktorý dokáže prehrávať 4K 50/60 Hz cez HDMI 2.0 s HDCP 2.2","Video alebo fotografie priamo z USB disku, pevného disku alebo fotoaparátu na veľkej obrazovke v rozlíšení 4K","Posledná generácia 2x2 MIMO a AC štandard prináša bezkonkurenčnú rýchlosť prístupu na internet","Užite si fotografie, videá, aplikácie z mobilných zariadení na veľkej obrazovke vďaka technológii zrkadlenia obrazovky","Fotografie, videá, aplikácie z chytrého telefónu alebo tabletu môžete prezerať na veľkej obrazovke ","Zobrazenie miestneho obsahu, ako sú fotografie, videa zo zariadení pripojených k lokálnej sieti, na veľkej obrazovke","Prehrávanie vypožičaných alebo vlastných filmov chránených cez DivX","Ultra tenký rám a super tenké prevedenie","Testované a schválené od Canal+","Testované a schválené od TDT Premium"];							

var eManualTextArray = ["Elektronická príručka","Vsi grafični prikazi v priročniku so namenjeni zgolj ponazoritvi."];
var frontPanelRemind = "Predný panel zamknutý.";
var eRPRemind		 = "Režim Obchod nemôže uspokojiť požiadavku ERP. Ste si istý?";	
var noRelatedChannel = "Ni povezanega kanala";
var option0624Name          = ["BOP","BFS","Po každej udalosti","GetUserID","BGM","Reset all","Reset shop","NRM","DVB-T2 in izbira države","Režim HbbTV"];
var DVBT2AndChoice = ["Zapnúť","Po državi","Vypnúť"];
var hbbtvServiceRemind = "Služba HbbTV bude k dispozícii čoskoro.";
var insertWord = "Vložiť";		
var viewDetail = "Zobraziť detail";							
							

var remindOAD  = "Aktualizácia softwaru. Nový doporučený software môže byť dostupný na inom kanáli. Ak sa rozhodne ho stiahnuť, môže byť kanál automaticky zmenený. Želáte si vykonať to teraz?";

var LEDStatus = ["Blikanie", "Normálne","Vypnúť"];
var netFlixRemind = "Táto funkcia preruší prístup k službám Netflix, kým sa znova neprihlásite.";
var ESNExplanation = "Elektronické sériové číslo";
var resetShopRemind = "Systém sa resetuje, nevypínajte TV";
var initialSelectOption = "Vyberte možnosť:";
var databaseRemind   = "Systém identifikoval databázu ako z neznámeho dôvodu poškodenú a automaticky ju znova zostaví. Pokračujte stlačením tlačidlo OK";
var Deactivation = "Deaktivovanie";
var oadFutureRemind = "Aktualizácia softvéru.\n Nový odporúčaný softvér bude k dispozícii o %s. Aktualizácia môže chvíľu trvať a počas tohto procesu môže byť obrazovka čierna. Počas aktualizácie nevypínajte prijímač. Ak súhlasíte s touto aktualizáciou, v naplánovanom čase nechajte prijímač zapnutý. Chcete prijať túto aktualizáciu?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Zvukový výstup";
var bt_soundOutPutTV = "TV reproduktory";
var bt_soundOutPutBT = "Zariadenie Bluetooth";
var bt_soundOutPutBT_TV = "Bluetooth a TV";
var bt_refreshBarName = "Zariadenia";
var bt_settingTips_On = "Zapnúť funkciu Bluetooth a hľadať zariadenia.";
var bt_settingTips_Finding = "Hľadám dostupné zariadenia...";
var bt_settingTips_NoDevice = "Žiadne zariadenie k dispozícii.";
var bt_deviceList_State_NoConnect = "Nepripojené";
var bt_deviceList_State_Connecting = "Pripájam…";
var bt_deviceList_State_Connected = "Pripojené";
var bt_deviceList_State_Paired = "Spárované";
var bt_deviceList_Conncect_Failed_Tips1 = "Pripojenie zlyhalo.";
var bt_deviceList_Conncect_Failed_Tips2 = "Potvrďte prosím, že funkcie Bluetooth XXX je zap";
var bt_deviceList_Conncect_Success = "Pripojené k zariadeniu Bluetooth.";
var bt_deviceList_Disconncect_Success = "Odpojené od zariadenia Bluetooth.";
var bt_deviceList_Disconnect = "Ste si istí, že chcete odpojiť od XXX?";
var bt_tipsTitle = "Tip";
var bt_bluetooth_Pairing_Title = "Párovanie Bluetooth";
var bt_bluetooth_Input_Pin = "Zadajte PIN:";
var bt_bluetooth_Output_Pin_Tip = "Zadať PIN XXXX cez klávesnicu.";
var bt_bluetooth_Pin_Wrong_Tip = "Nesprávny PIN";
var bt_bluetooth_Remove_Pair_Title = "Dotaz";
var bt_bluetooth_Remove_Pair_Ask = "Zabudnúť toto zariadenie?";
							
var audioDescriptionName = ["Zvukový popis","Reproduktor","Hlasitosť reproduktora","Slúchadlá","Hlasitosť slúchadiel","Hlasitosť AD","Zariadenie s rozhraním Bluetooth","Hlasitosť zariadenia s rozhraním Bluetooth","Zosilňovač","Reproduktor"];
var audioDescriptionOptions = ["Vypnúť","Normálne","Zvukový popis"];
var volumeOffRemind = 'V ponuke Nastavenia nastavte pre XXX možnosť „Zap.“.';
var switchSourceRemind   = " Je vlož. Chcete teraz prepnúť?";
var footballModeName = "Režim Šport";
var resetStadium = "Štadión";						

var atvSearchMenu = "ATV manual search";
var dtvSearchMenu = "DTV manual search";
var settingNoticeSourceName ="Automatický zdroj";

var smartTVOptions		= ["Portál Smart TV","HbbTV","Zdieľať a zobraziť","Wifi displej","Zmluvné podmienky",
    "V sieti v pohotovostnom režime","Resetovať smart TV","Cookie policy","Zásady súkromia","Odstránenie údajov"];
var supportOptions		= ["Diagnostika na diaľku","Kontaktujte nás"];
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
							
var tvDoctor=["Diagnostika na diaľku 2.0",
"Aplikácia funguje len pre váš Smart TV, a to na vykonanie diagnostickej kontroly a vylepšenie používania produktu. Táto aplikácia bude zhromažďovať údaje o činnosti TV a modeli, odovzdá ich serveru a použije ich na vyriešenie problému TV. Nebude získavať prístup k vašim osobným údajom. Váš TV správne pripojte k internetu.",
"Lokálna diagnostika",
"Po spustení diagnostiky postupujte podľa pokynov nášho technika podpory.",
"Diagnostika na diaľku",
"Pred použitím skontrolujte, či je technik podpory on-line.",
"Sériové číslo:",
"&nbsp;&nbsp;&nbsp;&nbsp;ID užívateľa:",
"Pripája sa...",
"Prebieha diagnostika. Zabezpečte správne pripojenie k sieti. ",
"Nemožno získať prístup k internetu; skontrolujte sieťové pripojenie.",
"Ukončiť"
];
var contactUsOption = ["Kontakte nás",
    "Ak máte problémy s používaním zariadenia, obráťte sa na spoločnosť TCL.",
    "Kontakte nás",
    "Webová stránka: navštívte stránku",
    "Číslo zákazníckej linky:","Informácie o výrobku","Názov modelu:",
    "Verzia softvéru:","","ID užívateľa:","ID projektu:",
    "Typ klienta:","Bezdrôtová adresa MAC:","Káblová adresa MAC:","Netflix ESN:","Naskenujte informácie na mobilnom telefóne.",
    ", potom vyberte svoju krajinu."];



//本地launcher的翻译，与服务器无关，只用于本地launcher
var homePageWords = ["História", "Vyhľadať"];//home页的翻译
var titlePageWords = ["Domov", "Videá","Televízor","Aplikácie"];//index的标题翻译
var videosPageWords = ["Kino", "Sport","Hudba","Obľúbené","Hry","Vzdelávanie","Správy"];//videos页的内容翻译

//同时应用于本地和服务器
var statusPageWords = ["USB","Nastavenia","WiFi","Káblová"];//状态栏的翻译

//二级页面的翻译
var searchPageWords = ["Vyhľadať", "Obľúbené vyhľadávanie:","Relácie, Filmy, Ľudia ..."];
var resultSearchPageWords = ["Výsledky pre"," ","Skúste iné kľúčové slová.","Ľutujeme, nenašlo sa žiadne video o  "," "];
var historyPageWords = ["História", 'Stlačením tlačidla','odstránite históriu',"Odstrániť jednu","Odstrániť všetky","Včera","Dnes"," Zatiaľ ste nepozerali žiadne video.","Odstránenie histórie pozerania úspešné!"];
var channelPageWords = ["Ľutujeme, zatiaľ sa nenašlo žiadne video."];


//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9",
                       	   "Zoom-","0","Zoom+",
                       	   "Ukončiť","0","",
                       	   "Zoznam","0","Text",
                       	   "Sprievodca","Zadať","Ukončiť",
                       	   "Ponuka","Titulky","Informácie",
                       	   "Zastaviť",
                       	   "Info","Menu","Ukončiť",
                       	   "Ukončiť"
                       	   ];	

//added for LA sports mode
var sportsModeInitReminds= ["Tento sprievodca sa používa na inštaláciu USB jednotky pre režim Šport. Vyberte režim inštalácie.",
						 "Vyberte veľkosť súboru pre režim Šport.",
						 "Vytvára sa súbor pre režim Šport",
						 "USB jednotka je príliš pomalá (< %f MB/s.) pre funkciu režimu Šport!",
						 "USB jednotka je pripravená pre režim Šport. Z dôvodu lepšieho výkonu ju ale odporúčame zmeniť (na rýchlosť > %f MB/s.).",
						 "USB jednotka je pripravená pre režim Šport."];

var sportsModeExtra	= ["Chcete zastaviť režim Šport a zmeniť kanál?",
						"Chcete zastaviť režim Šport a zmeniť na zariadenie pripojené k vstupu SCART?",
						"Chcete zastaviť režim Šport a zmeniť na zariadenie pripojené k vstupu HDMI?",
						"Režim Šport nie je podporovaný na zakódovanom kanáli.",
						"Chcete zastaviť režim Šport a otvoriť EPG?",
						"Chcete zastaviť režim Šport a otvoriť Médiá?",
						"Chcete zastaviť režim Šport a zmeniť zdroj vstupu?",
						"TV ukončí aktuálny režim Šport. Chcete ukončiť?"];
var remoteControlNote = "– Dodávané diaľkové ovládanie sa môže líšiť v závislosti od modelu produktu";


var textArray = ["Volume","Channel","Source","Switch/Power","Guide","seconds to Power OFF"];
var guideArray = ["VOL-","VOL+","CH-","CH+","Pre","Next"];
var favChannelListRemind = ["Žiadne obľúbené kanály. Prejdite do iných zoznamov a „Zeleným tlačidlom“ pridajte obľúbené kanály."];

var proxySetting = ["Nastavenie Proxy","Port"];
var powerOffShop = ["Odporúčame použiť režim V obchode, pokračovať?"];
var tcastTextPageWords = ["Množstvo videí a bohaté aplikácie","Diaľkové ovládanie TV priamo v rukách","Výborný obsah, zdieľanie na veľkej obrazovke"];
var tcastOtherWords = ["NASKENOVAŤ kód QR a prevziať T-CAST","Sieť pripojená k TV","Názov TV","T-Cast"];
var hbbtvWords = ["Nastavenie Hbbtv","HbbTV","Cookies","Súbory cookies tretích strán","ID zariadenia","sledovanie"];
var hbbtvTrackingWords = ["YES","NO","V poriadku"];
var eStickerTipWords = ["Úložisko má menej ako 400 M, želáte si vymazať videá v režime Demo, aby ste získali viac priestoru?"];
var delEstickerVideoRemid = ["Video bolo úspešne odstránené."];
var selectSatRemind = "Nie je možné vybrať viac než 20 satelitov!";
var cookiePolicyTitle = "Zásady používania súborov cookie – Služby Online Smart TV";
var cookiePolicyConditions = ["Spoločnosť rešpektuje vaše súkromie pri používaní Smart TV vyrobených a Služieb poskytovaných spoločnosťou. Súbory cookie využíva množstvo webových lokalít a ďalších internetových služieb, pričom váš Smart TV bude prijímať, ukladať a prenášať súbory cookie s cieľom dosiahnuť správne fungovanie týchto webových lokalít a služieb. Spoločnosť zároveň používa súbory cookie pri poskytovaní Služieb. V rámci týchto Zásad používania súborov cookie Spoločnosť popisuje, ktoré súbory cookie sa ukladajú vo vašom Smart TV a ako ich môžete spravovať.\nUpozorňujeme, že všetky osobné údaje, ktoré Spoločnosť získava a/alebo spracúva prostredníctvom alebo pomocou súborov cookie, podliehajú ustanoveniam Ochrany osobných údajov, a preto by ste si mali okrem týchto Zásad používania súborov cookie prečítať aj znenie Ochrany osobných údajov.\n1. Čo je to súbor cookie?\nSúbory cookie sú malé textové súbory, ktoré sa môžu ukladať vo vašom Smart TV. Počas prístupu k webovej lokalite alebo službe „červeného tlačidla“ v rámci TV stanice sa môže stať, že daná webová lokalita alebo služba prenesie do Smart TV súbor cookie. Počas nasledujúcich prístupov bude tento súbor cookie uložený vo vašom Smart TV posielať informácie subjektu, ktorý ho tam umiestnil. Súbory cookie sú úplne bežné a využíva ich veľa webových lokalít a služieb. Každý súbor cookie spravidla obsahuje názov domény, z ktorej pochádza, „životný cyklus“ daného súboru cookie a hodnotu (väčšinou ide o jedinečné číslo). Podrobnejšie vysvetlenie toho, čo sú súbory cookie a ako fungujú, nájdete na adrese www.allaboutcookies.org.\nSúbory cookie možno rozdeliť na funkčné a nefunkčné. Funkčné súbory cookie sú také, ktoré sa používajú výhradne na účely poskytovania služieb Smart TV a na to, aby mohli webové lokality a ďalšie služby vášmu Smart TV poskytovať vhodný obsah. Do skupiny nefunkčných súborov cookie patria všetky ostatné.\nTieto Zásady používania súborov cookie sa týkajú súborov cookie, ktoré sami umiestňujeme, ako aj reklamných súborov cookie, ktoré môžu umiestňovať tretie strany prostredníctvom našich Služieb do vášho Smart TV. Tieto Zásady používania súborov cookie sa netýkajú súborov cookie, ktoré sa môžu uložiť do vášho Smart TV počas prístupu k webovým lokalitám, službám alebo aplikáciám tretích strán. V takomto prípade vám odporúčame prečítať si konkrétne zásady používania súborov cookie od týchto tretích strán. Tieto Zásady používania súborov cookie však popisujú, ako môžete takéto súbory cookie odstrániť (prečítajte si časť 4 nižšie).\n2. Ktoré nefunkčné súbory cookie používame?\nReklamy: Pri využívaní služieb Smart TV môžu byť do vášho Smart TV vysielané videoreklamy alebo obrazové reklamy. Tieto reklamy vám môžeme poskytovať my alebo tretie strany, a to prostredníctvom alebo pomocou koordinácie reklamného servera, ktorý zohráva pri poskytovaní týchto reklám hlavnú koordinačnú úlohu. Náš reklamný server alebo reklamný server tretích strán vloží do vášho Smart TV súbor cookie. Prostredníctvom tohto súboru cookie bude reklamný server zaznamenávať, či bola do vášho Smart TV vyslaná reklama alebo či osoba, ktorá používala váš Smart TV, klikla na reklamu. Informácie uložené v takomto reklamnom súbore cookie využívame na to, aby sme si zapamätali, ktoré reklamy už boli do vášho Smart TV vyslané, aby sme sa uistili, že na žiadnom Smart TV nevysielame príliš veľa rovnakých reklám a že dokážeme uzatvárať obchodné dohody s našimi reklamnými partnermi. Tieto informácie nebudeme využívať na poskytovanie cielených reklám. Okrem toho môžu tretie strany využívať náš reklamný systém na poskytovanie reklám a umiestňovanie súborov cookie vo vašom Smart TV pri vysielaní týchto reklám. \nTieto súbory cookie obsahujú okrem iného aj informácie o poskytovaných reklamách, informácie o tom, v rámci ktorej aplikácie alebo domény sú tieto reklamy poskytované, a vašu IP adresu. Dôvodom je, aby došlo k zapamätaniu toho, ako často sa určitá reklama zobrazuje a zamedzeniu príliš častého zobrazovania rovnakých reklám. Externí poskytovatelia reklám tretích strán môžu pri poskytovaní reklám zároveň používať súbory cookie na sledovanie vašej činnosti na viacerých webových lokalitách a na poskytovanie reklám, ktoré zodpovedajú vašim osobným preferenciám.\n3. Webové lokality tretích strán\nKeď prostredníctvom služieb Smart TV navštevujete webové lokality alebo využívate služby tretích strán na vašom Smart TV, môže sa stať, že tieto webové lokality alebo služby umiestnia do vášho Smart TV súbory cookie a že tieto webové lokality budú sledovať a ukladať si činnosti, ktoré na nich budete vykonávať. Naša spoločnosť nepožaduje ani nepodporuje takéto činnosti a nebude používať tieto informácie. Ďalšie informácie o tom, ako tieto subjekty využívajú dané súbory cookie, nájdete v príslušných zásadách používania súborov cookie a ochrany osobných údajov súvisiacich s týmito webovými lokalitami a službami.\n4. Odstránenie súborov cookie\nV rámci používateľského rozhrania vášho Smart TV môžete odstrániť všetky súbory cookie a ďalšie súbory lokálne uložené v prehliadači z vášho Smart TV. Skôr než predáte alebo darujete váš Smart TV, dôrazne vám odporúčame odstrániť všetky súbory cookie a lokálne uložené nastavenia.\n5. Kontakt\nV prípade akýchkoľvek otázok alebo pripomienok týkajúcich sa našich Zásad používania súborov cookie alebo našich metód pri používaní súborov cookie nám môžete poslať e-mail na adresu FRsupport@tcl.com.\nVerzia: 1.0\n"];
var privacyPolicyTitle = "Ochrana osobných údajov – Služby Online Smart TV";
var privacyPolicyConditions = ["Rešpektujeme vaše súkromie pri spracovaní vašich osobných údajov. Táto Ochrana osobných údajov popisuje subjekt zodpovedný za získavanie, spracovanie a používanie osobných údajov, ktoré od vás získavame v súvislosti s využívaním našich služieb Smart TV („Služby“), s tým, aké typy osobných údajov o vás získavame a čo s nimi robíme, ako aj s vašimi právami vo vzťahu k nášmu využívaniu vašich osobných údajov. \n1. Prevádzkovateľ údajov\nZískavanie, spracovanie a používanie osobných údajov získaných od vás v rámci využívania Služieb vykonáva spoločnosť Shenzhen TCL New Technology Co., Ltd., č. 5, Industrial Avenue (M), priemyselná zóna Sheko, mesto Šen-čen, provincia Guangdong, Čína („Spoločnosť“). Upozorňujeme však na to, že nie sme zodpovední za všetky činnosti spojené so spracovaním údajov, ktoré sú uvedené nižšie. Napriek tomu uvádzame v našej Ochrane osobných údajov popisy jednotlivých činností, pretože toto spracovanie údajov je spojené s vaším využívaním služieb Smart TV.\n2. Súhlas so spracovaním údajov\nNa niektoré druhy získavania, spracovania a/alebo používania vašich osobných údajov je potrebný váš súhlas. \nAk ste odsúhlasili používanie vašich osobných údajov s cieľom zlepšovania Služieb, váš súhlas bude mať nasledovné znenie:\n„Súhlasím so získavaním, spracovaním a používaním času spustenia môjho zariadenia, zoznamu kanálov DTV, zoznamu obľúbených kanálov, času návštevy a sledovaných kanálov s cieľom analýzy návykov používateľa a následného zlepšenia Služieb a/alebo analýzy počtu používateľov Spoločnosti za deň/mesiac/rok, ako aj so zdieľaním týchto informácií s TV stanicami.“\nAk ste odsúhlasili používanie vašich osobných údajov s cieľom poskytovania reklám, ktoré budú prispôsobené vašim záujmom, váš súhlas bude mať nasledovné znenie:\n„Súhlasím so získavaním, spracovaním a používaním môjho typu klienta a krajiny s cieľom získavania vhodných reklám.“\nVáš súhlas je dobrovoľný, a teda budete môcť Služby využívať aj za predpokladu, že ho neudelíte. V takomto prípade sa vám však môže zobrazovať reklamný a iný obsah, ktorý nebude prispôsobený vašim preferenciám. Bez ohľadu na váš súhlas si Spoločnosť vyhradzuje právo získavať, spracovať a/alebo používať vyššie uvedené typy údajov v rozsahu, ktorý umožňujú platné zákony.\nSvoj súhlas s ktoroukoľvek z vyššie uvedených činností môžete s budúcou platnosťou kedykoľvek stiahnuť. Môžete namietať proti používaniu vašich osobných údajov na účely prieskumu marketingu, trhu alebo mienky, ako aj na prispôsobenie Služieb vašim potrebám. Ak chcete stiahnuť súhlas a/alebo vysloviť námietku, zmeňte si podľa toho nastavenia súkromia na Smart TV.\n3. Získavané osobné údaje\nBez ohľadu na váš súhlas Spoločnosť získava, spracúva, ukladá a používa údaje patriace do nasledujúcich kategórií:\nID zariadenia: Váš Smart TV má uložené fixné jedinečné číslo, pomocou ktorého ho môžeme identifikovať a overiť, keď využívate naše Služby. Toto číslo sa nazýva ID zariadenia. ID zariadenia poskytujeme nášmu poskytovateľovi služieb, ktorý vám bude poskytovať Služby. Okrem toho poskytujeme ID zariadenia aj vybraným poskytovateľom obsahu na účely overovania. Títo poskytovatelia obsahu použijú ID zariadenia na overenie toho, či má váš Smart TV prístup k službám, ktoré prináša poskytovateľ obsahu.\nIP adresa a adresa MAC: Vášmu Smart TV pridelíme v rámci prístupu na internet IP adresu. Túto IP adresu budeme zachytávať a spracúvať vždy,keď si váš Smart TV vyžiada v rámci Služieb informácie alebo údaje. Ak je váš Smart TV napojený na smerovač (napr. v miestnej domácej sieti alebo miestnej sieti WLAN), môžeme získať a spracovať IP adresu tohto smerovača. Adresa MAC je jedinečné číslo priradené každému sieťovému rozhraniu vášho Smart TV. Túto adresu MAC budeme taktiež získavať a spracúvať,keď si váš Smart TV vyžiada v rámci Služieb informácie alebo údaje.\nÚdaje požadované v rámci Služby: Keď pripojíte Smart TV k internetu a zapnete ho, automaticky sa napojí na Služby, ktoré spravuje náš poskytovateľ služieb. Váš Smart TV následne prejde overovaním, ktoré posúdi, či má oprávnenie na prístup k Službám. Na účely overovania sa v rámci Služieb ukladá jeden alebo viac jedinečných identifikátorov spojených s vaším Smart TV. Keď sa napájate na Služby, vyšle Smart TV svoju pridelenú IP adresu a zároveň s ňou aj informácie špecifické pre zariadenie (model Smart TV, verzia softvéru) s cieľom zistiť, či sú dostupné softvérové aktualizácie.\nNastavenia Služieb: Súčasťou bežného prevádzkovania Služieb je aj možnosť manuálne si preskupiť poradie zobrazovania aplikácií v rámci Služieb. Náš poskytovateľ služieb si uloží vaše rozloženie a ďalšie nastavenia, ktoré pri využívaní Služieb prípadne vykonáte. Tieto informácie budú prepojené s ID zariadenia.\nInformácie špecifické pre zariadenie: Smart TV si ukladá viaceré informácie o sebe a svojej konfigurácii. Medzi tieto informácie patrí typ Smart TV, verzia operačného systému Smart TV, rozlíšenie panela, ID projektu (t. j. informácie o konfiguračných súboroch), agent používateľa, názov prehliadača, verzia prehliadača, jazyk a krajina, ktorá bola nakonfigurovaná v rámci Smart TV. Tieto informácie budeme používať a zároveň ich poskytneme nášmu poskytovateľovi služieb aj poskytovateľom obsahu.\nReklamy: V rámci Služieb môžete vidieť reklamy. Tieto reklamy vám budeme poskytovať my alebo tretie strany pomocou reklamných nástrojov, ktoré sme im sprístupnili. Všetky reklamy sú poskytované prostredníctvom nášho reklamného servera, ktorý plní koordinačnú úlohu pri poskytovaní reklám. Náš reklamný server alebo reklamný server tretích strán môže vložiť do Smart TV súbor cookie. Ďalšie informácie o súboroch cookie nájdete v našich Zásadách používania súborov cookie.\nAktivita poskytovateľov služieb a obsahu: Pri využívaní Služieb si bude váš Smart TV cez internet od týchto Služieb vyžadovať údaje. V rámci týchto požiadaviek sa bude nášmu poskytovateľovi služieb odovzdávať vyššie popísaná IP adresa a krajina, ktorú ste si nakonfigurovali v Smart TV. Náš poskytovateľ služieb spracuje príslušné údaje v súlade so svojou Ochranou osobných údajov.\nPoužívanie druhej obrazovky: Ak používate našu aplikáciu pre druhú obrazovku, budeme na našich serveroch získavať a spracúvať ovládacie prvky, ktoré aktivujete v rámci aplikácie, nastavenia krajiny a jazyka, zoznam kanálov DTV, zoznamy obľúbených kanálov, zoznamy plánov, ID zariadenia, aktuálny kanál, verziu protokolu a IP adresu vášho Smart TV. Naše servery následne riadia váš Smart TV podľa vašich pokynov na aplikácii pre druhú obrazovku.\nHbbTV – „červené tlačidlo“: TV stanice („Stanice“) môžu spolu so svojím TV signálom odosielať aj ďalšie informácie. Ak Smart TV dostane prostredníctvom týchto informácií špecifické pokyny a ak je pripojený k internetu, stiahne si Smart TV fotografiu alebo zmenšenú verziu stránky z webovej lokality Stanice, ktorú následne zobrazí spolu s výzvou na stlačenie „červeného tlačidla“ na diaľkovom ovládači v prípade, ak sa rozhodnete využívať ďalšie služby poskytované danou Stanicou. Táto situácia nastane pri každom prepnutí. Pri stiahnutí fotografie z webovej lokality Smart TV sa prenášajú aj určité osobné údaje, t. j. zoznam kanálov DTV, aktuálny kanál, informačná tabuľa udalosti, čas v TV, IP adresa vášho Smart TV a súbory cookie uložené v Smart TV (ak tam nejaké sú). Stanica zodpovedá za získavanie, spracovanie a/alebo používanie týchto údajov. Ak okrem toho využívate ďalšie služby, ktoré Stanica ponúka cez „červené tlačidlo“, môže Stanica získavať aj ďalšie osobné údaje súvisiace s vami (napr. ktoré videá na požiadanie sledujete, ktoré správy čítate a pod.).\n4. Účely spracovania a/alebo používania osobných údajov\nOsobné údaje spracúvame na nasledujúce účely:\nPoskytovanie Služieb: Využívame IP adresu a adresu MAC, ID zariadenia, verziu operačného systému Smart TV, typ klienta vášho Smart TV a rozlíšenie jeho panela, ID projektu (t. j. informácie o konfiguračných súboroch), váš zoznam kanálov DTV, sledované kanály, časové pásmo, nastavenia krajiny a jazyka na to, aby sme umožnili vášmu Smart TV prístup k Službám a ďalším službám od poskytovateľov obsahu. Medzi tieto účely patrí (okrem iného aj) overovanie, poskytovanie služieb na základe vašej polohy (napr. predpovede počasia), riešenie nesprávneho zaobchádzania, riadenie bezpečnostných incidentov, monitorovanie dostupnosti Služieb a poskytovanie záložných služieb podľa preferencií používateľov.\nOverovanie: ID zariadenia a adresu MAC používame na účely overovania.\nSoftvérové aktualizácie: Pri každom zapnutí nám váš Smart TV poskytne IP adresu, ID zariadenia, verziu softvéru, typ klienta vášho Smart TV, ID projektu (t. j. konfiguračné súbory), ID používateľa a sériové číslo, aby sme vám mohli ponúkať a poskytovať vhodné softvérové aktualizácie. \nZlepšovanie Služieb: Na zlepšovanie skúsenosti používateľov Služieb využívame agregované a anonymizované údaje o používaní služby (t. j. údaje súvisiace s vaším využívaním Služieb).\nPoskytovanie reklám: Informácie obsiahnuté v reklamných súboroch cookie používame na to, aby mohol systém zaznamenávať, ktoré reklamy boli zobrazené na vašom Smart TV s cieľom uistiť sa, že nedostávate príliš veľa rovnakých reklám, vďaka čomu môžeme uzatvárať obchodné dohody s našimi reklamnými partnermi. Externí poskytovatelia reklám, ktorí poskytujú reklamy na Služby alebo na webové lokality poskytovateľov obsahu po koordinácii cez náš reklamný server, môžu tiež používať súbory cookie na to, aby vás sledovali na viacerých webových lokalitách a poskytovali vám reklamy, ktoré odzrkadľujú vaše osobné preferencie.\nOptimalizácia reklám: Údaje súvisiace s počtom zhliadnutí reklám či kliknutí na reklamy používame na optimalizáciu spotrebiteľskej skúsenosti s reklamami v rámci využívania Služieb.\nZľavy: ID zariadenia poskytujeme vybraným poskytovateľom obsahu, aby dokázali identifikovať, do akej miery vám môžu poskytnúť bezplatný prístup k videám na požiadanie zo svojej zbierky.\nPresadzovanie práva: Môže sa od nás vyžadovať, aby sme poskytovali údaje kompetentným právnym alebo súdnym orgánom. V takomto prípade to urobíme iba po predložení záväzného právneho dokumentu, akým je zatykač alebo súdny príkaz, ktorý si bude vyžadovať našu spoluprácu s príslušnými orgánmi.\nSlužby môžete využívať aj pod pseudonymom, pokiaľ si špecifický druh služby nevyžaduje, aby ste uviedli vaše meno a/alebo e-mailovú adresu.\n5. Kategórie recipientov\nSpoločnosť zdieľa vaše osobné údaje, získané v rámci vášho využívania Služby, výhradne s nasledujúcimi tretími stranami:\nS externými poskytovateľmi služieb Smart TV v prípade, že si takéto služby vyžiadate (napr. ak spustíte aplikáciu Netflix na vašom Smart TV, môžeme so spoločnosťou Netflix zdieľať vašu IP adresu, adresu MAC, verziu softvéru a názov modelu TV).\nS externými poskytovateľmi obsahu v prípade, že si vyžiadate určitý obsah, ktorý tieto subjekty poskytujú (napr. na poskytovanie služby GoLive IP TV môžeme s právnickou osobou poskytujúcou služby GoLive zdieľať váš typ TV klienta, IP adresu a nastavenia jazyka).\nV rozsahu, ktorý ste odsúhlasili v súvislosti so zdieľaním špecifických osobných údajov s vyššie uvedenými tretími stranami, bude Spoločnosť s týmito tretími stranami zdieľať vaše osobné údaje.\nVďaka outsourcingu poskytovateľov služieb, ktorí sa stávajú spracovateľmi údajov, môže Spoločnosť poskytovať Služby.\nSpoločnosť zdieľa vaše osobné údaje s inými tretími stranami iba v prípade, že je povinná takto konať na základe právnych požiadaviek (napr. záväzky voči súdom alebo orgánov činných v trestnom konaní). S takýmto zdieľaním údajov ste vyjadrili súhlas, pokiaľ ide o zákonnú činnosť v zmysle platného zákona.\n6. Krajiny, v ktorých sa budú údaje spracúvať\nSpoločnosť a/alebo niektorí vyššie uvedení recipienti vašich osobných údajov môžu sídliť mimo Európskeho hospodárskeho priestoru (t. j. v nasledovných krajinách: Čínska ľudovodemokratická republika, Spojené štáty americké). Preto môžu byť vaše osobné údaje spracované v krajinách, ktoré nemajú schválenú adekvátnu úroveň ochrany osobných údajov v súlade s nariadeniami Smernice 95/46/ES Európskeho parlamentu a Rady z 24. októbra 1995 o ochrane jednotlivcov pri spracovaní osobných údajov a voľnom pohybe týchto údajov.\n7. Vaše práva\nNa Spoločnosť sa môžete obrátiť v prípade, ak chcete dostávať informácie týkajúce sa spracovania vašich osobných údajov Spoločnosťou a/alebo si uplatniť svoje zákonné práva súvisiace s prístupom, nápravou, odstraňovaním a blokovaním vašich osobných údajov a/alebo namietať voči spracovaniu vašich osobných údajov na účely prieskumu marketingu a/alebo trhu či mienky.\n8. Zmeny v rámci Ochrany osobných údajov\nV rámci snahy o zlepšenie našich Služieb možno budeme musieť túto Ochranu osobných údajov upravovať – napr. v dôsledku implementácie nových technológií alebo zavedenia nových služieb. Vyhradzujeme si právo túto Ochranu osobných údajov kedykoľvek zmeniť alebo doplniť.\n9. Kontaktné údaje\nV prípade akýchkoľvek otázok o tejto Ochrane osobných údajov alebo sťažností týkajúcich sa nášho spracovania osobných údajov sa obráťte na niektorý z nasledovných kontaktov:\nE-mail: FRsupport@tcl.com\nVerzia: 1,0\n"];
var privacyPolicyTerms = [
    "Povoliť službu Inteligentný TV",
    "Súhlasím so zhromažďovaním, spracovávaním a využívaním mojich údajov o čase spustenia zariadenia, zozname kanálov DTV, zozname obľúbených kanálov, čase návštevy a zobrazených kanálov na účely analýzy návykov používateľa v rámci vylepšovania služieb a/alebo analýzy počtu online používateľov TCL za deň/mesiac/rok a so zdieľaním týchto údajov s TV stanicami.",
    "Povoliť službu odporúčaní",
    "Povoliť druhú obrazovku aplikácie pre mobilné zariadenia",
    "Povoliť automatické aktualizácie softvéru",
    "Povoliť službu FreeviewPlay."
];
var privacyPolicyTips = [
    "Všetky služby Inteligentný TV budú deaktivované.",
    "Keď sa používa zabudovaný tuner, služba HbbTV poskytovaná TV kanálmi bude deaktivovaná.",
    "Služba odporúčania obsahu a TV programu bude deaktivovaná.",
    "Aplikácia Druhá obrazovka bude deaktivovaná.",
    "TV nebude automaticky kontrolovať aktualizácie softvéru a nové funkcie.",
    "Obsah služby FreeviewPlay bude deaktivovaný."
];
var privacyPolicyRemind = "Začiarknite príslušné políčko v položke Nastavenia.";
var set = "Nastaviť";
var copyShopDemoTips = ["Pripojené k USB, chcete video skopírovať na jednotku flash?","Kopírovať video na flash","Video bolo úspešne skopírované!","Chyba pri kopírovaní videa!"];
var dataDeletionWords = ["Odstráňte svoje údaje služby Inteligentný TV z backend serverov.","Poznámky: Údaje týkajúce sa vášho používania inteligentného TV budú odstránené do jedného mesiaca od označenia tejto položky. Majte na pamäti, že odstránenie nemá vplyv na lokálne údaje uložené v TV.","Už žiadne údaje správ na server služby Inteligentný TV.","Poznámky:  Vaše údaje v spojitosti s používaním služieb Inteligentný TV už nebudú po označení tejto položky prenášané na server. TV už nebude naďalej prijímať odporúčané služby.","Ak potrebujete ďalšie informácie, navštívte webovú stránku www.tcl.eu"];
var miracastWords = ["Bezdrôtové pripojenie","Zrkadliť telefón Android do TV","Kliknutím pripojte","Táto funkcia je k dispozícii na telefóne Android"];
var miracastTips = ["Kroky pripojenia","Otvoriť nastavenia systému","Ďalšie spôsoby pripojenia\n / Iné bezdrôtové pripojenia","Zvoľte bezdrôtovú obrazovku","Kliknutím pripojte\n čaká sa na nájdenie"];
var termsAndConditions = ["\nObsah a služby (spolu ako „Licencované aplikácie“), ktoré vám sprístupňujeme prostredníctvom tejto TV súpravy (ďalej ako „Zariadenie“), sú vám poskytované formou licencie, nie predaja, na použitie v zmysle týchto zmluvných podmienok. Poskytovatelia týchto Licencovaných aplikácií (ďalej ako „Poskytovatelia aplikácií“) si vyhradzujú všetky práva, ktoré vám nie sú výslovne prisudzované.\n\n1.	Rozsah licencie\n\nRozsah licencie, ktorú vám poskytuje príslušný Poskytovateľ aplikácií na Licencovanú aplikáciu, sa obmedzuje iba na neprenosnú licenciu určenú na používanie Licencovanej aplikácie na Zariadení, ktoré vlastníte a regulujete. Licencovanú aplikáciu nesmiete distribuovať ani sprístupňovať na sieti, ku ktorej môže mať prístup viacero zariadení súčasne. Licencovanú aplikáciu nesmiete prenajímať, požičiavať, predávať, redistribuovať alebo sublicencovať. \n\nVšetky Licencované aplikácie a všetok obsah v nich zahrnutý sú k dispozícii cez toto Zariadenie patriace Poskytovateľovi aplikácií a sú chránené príslušnými zákonmi o duševnom vlastníctve. Ak to nepovoľujú platné zákony, nesmiete žiadne Licencované aplikácie ani ich aktualizácie či jednotlivé časti upravovať, kopírovať, dekompilovať, spätne dešifrovať, rozoberať, znovu publikovať, nahrávať, zverejňovať, prenášať, prekladať ani sa pokúšať o získanie ich zdrojového kódu, vytvárať z nich odvodené diela či inak ich zneužívať. Ak porušíte toto obmedzenie, môžete byť trestne stíhaní a zodpovední za vzniknuté škody. Ustanovenia licencie upravujú všetky aktualizácie od Poskytovateľa aplikácií, ktoré nahrádzajú a/alebo dopĺňajú pôvodnú Licencovanú aplikáciu, ak tieto aktualizácie nie sú spojené so samostatnou licenciou, následkom čoho budú určujúce ustanovenia tejto licencie. Budete niesť výhradnú zodpovednosť za všetky náklady (ak nejaké budú) spojené s aktualizáciou Licencovanej aplikácie.\n\n2.	Materiály tretej strany\n\nLicencovaná aplikácia vám môže poskytnúť prístup k službám a webovým lokalitám Poskytovateľa aplikácií a tretích strán (spolu ako „Služby“). Pri využívaní niektorej zo Služieb môžete naraziť na obsah, ktorý možno považovať za urážlivý, nemravný, nevhodný alebo ktorý môže, ale nemusí obsahovať explicitné výrazy, a výsledkom vyhľadávania alebo zadávania určitých URL adries môže byť automatické alebo náhodné vygenerovanie odkazov či referencií na nevhodný materiál. Napriek tomu výrobca Zariadenia („Výrobca“) a Poskytovateľ aplikácií nebudú niesť žiadnu zodpovednosť voči vám za obsah, ktorý budete prípadne považovať za urážlivý, nemravný alebo nevhodný. \n\nVýrobca nie je zodpovedný za skúmanie alebo hodnotenie obsahu ani za presnosť, úplnosť, včasnosť, platnosť, súlad s autorským zákonom, zákonnosť, kvalitu či iný aspekt týchto Služieb. Výrobca nezaručuje, neschvaľuje, neručí ani nepreberá žiadnu zodpovednosť za vás ani žiadnu inú osobu v súvislosti s využívaním niektorej zo Služieb. \n\nSlužby môžu obsahovať vlastnícky obsah, informácie či materiály (spolu ako „Materiály tretích strán“), ktoré sú chránené príslušnými zákonmi o duševnom vlastníctve a ďalšími zákonmi, a vy nesmiete takéto Materiály tretích strán využívať na iné účely ako tie, ktoré umožňuje používanie Služieb. Ak to nepovoľujú platné zákony, nesmiete Materiály tretích strán žiadnym spôsobom reprodukovať, upravovať, prenajímať, požičiavať, predávať, distribuovať ani vytvárať z ich odvodené diela, a nesmiete zneužívať Služby na akékoľvek neoprávnené účely. Služby nemôžete žiadnym spôsobom využívať na obťažovanie, urážanie, sledovanie, vyhrážanie, hanobenie alebo iné nedodržiavanie či porušovanie zákonov iných strán, pričom Výrobca v žiadnom prípade nezodpovedá za takéto využívanie Služieb z vašej strany ani za prípadné obťažujúce, výhražné, hanobiace, urážlivé alebo protizákonné správy či prenosy, ktoré by ste mohli zachytiť v dôsledku využívania niektorej zo Služieb. \n\n3.	Bez záruky\n\nVšetky Licencované aplikácie a Služby sú poskytované „tak, ako sú“ a „podľa dostupnosti“ bez akejkoľvek záruky, či už výslovnej, alebo predpokladanej. Výrobca výslovne odmieta všetky záruky a podmienky týkajúce sa Licencovaných aplikácií a Služieb, či už výslovné, alebo predpokladané, okrem iného aj vrátane záruk obchodovateľnosti, uspokojivej kvality, vhodnosti na určitý účel, presnosti, pokojnej držby a neporušenia práv tretích strán. Výrobca nezaručuje presnosť, platnosť, včasnosť, zákonnosť ani úplnosť akejkoľvek Licencovanej aplikácie či Služby poskytovanej prostredníctvom tohto Zariadenia a nezaručuje, že Zariadenie, Licencované aplikácie alebo Služby splnia vaše požiadavky ani že bude prevádzka Licencovaných aplikácií alebo Služieb neprerušovaná a bezchybná, prípadne že budú chyby v rámci Licencovanej aplikácie alebo Služieb odstránené. Ak sa ukáže, že je Licencovaná aplikácia alebo Služba chybná, ste zodpovední za zaplatenie celej výšky nákladov na opravu, servis alebo nápravu chyby.\n\nLicencované aplikácie a Služby sa môžu kedykoľvek a bez predchádzajúceho upozornenia zmeniť, pozastaviť, odstrániť, ukončiť, prerušiť alebo zneprístupniť a Výrobca nezaručuje ani sa nevyjadruje k tomu, že by akýkoľvek obsah či služba zahrnutá v rámci Licencovaných aplikácií a Služieb musela zostať dostupná na určitý čas. Tento obsah a služby prenášajú tretie strany prostredníctvom sietí a prenosných zariadení, nad ktorými nemá Výrobca žiadnu kontrolu. Bez obmedzenia platnosti vyššie uvedených ustanovení Výrobca výslovne odmieta zodpovednosť alebo záruku za akékoľvek zmeny, prerušenia, zrušenie, odstránenie alebo pozastavenie akéhokoľvek obsahu či služieb poskytovaných prostredníctvom tohto Zariadenia. Poskytovateľ aplikácií a ďalší poskytovatelia Služieb si vyhradzujú právo kedykoľvek a bez predchádzajúceho upozornenia zmeniť, pozastaviť, odstrániť či zneprístupniť akúkoľvek Licencovanú aplikáciu alebo Službu. Výrobca môže zároveň kedykoľvek a bez predchádzajúceho upozornenia či prevzatia zodpovednosti uvaliť obmedzenia na používanie určitých Licencovaným aplikácií či Služieb alebo prístup k nim.\n\nVýrobca neposkytuje zákaznícky servis v súvislosti s Licencovanými aplikáciami a Službami. Každá otázka alebo žiadosť o servis v súvislosti s Licencovanými aplikáciami a Službami musí byť smerovaná priamo na príslušného poskytovateľa.\n\n4.	Zhromažďovanie a využívanie informácií\n\nVýrobca, Poskytovatelia aplikácií a poskytovatelia Služieb môžu získavať a používať technické údaje a súvisiace informácie, okrem iného aj vrátane technických informácií o tomto Zariadení, systéme a softvére aplikácie či periférnych zariadeniach s cieľom poskytovať vám softvérové aktualizácie, produktovú podporu a ďalšie služby (ak sa nejaké vyžadujú) súvisiace so Zariadením a s Licencovanou aplikáciou. Výrobca, Poskytovatelia aplikácií a poskytovatelia Služieb môžu tieto informácie používať, ak sú dostupné v podobe, ktorá vás osobne neidentifikuje, s cieľom zlepšiť kvalitu poskytovaných produktov, služieb alebo technológií. Ďalšie informácie o zhromažďovaní a využívaní informácií nájdete v našich zásadách ochrany osobných údajov: http://www.tcl.eu/en/.\n\n5.	Nedostupnosť určitých funkcií\n\nVzhľadom na obmedzenia Poskytovateľa aplikácií nemusia byť na tomto Zariadení alebo na konkrétnych územiach dostupné určité funkcie, aplikácie či služby. Niektoré funkcie tohto Zariadenia si tiež môžu vyžadovať pripojenie ďalších periférnych zariadení či zaplatenie členských poplatkov, ktoré sa predávajú samostatne.\n\n6.	Obmedzenie zodpovednosti\n\nV rozsahu povolenom platnými zákonmi nesmie byť Výrobca za žiadnych okolností vrátane prípadov nedbalosti zodpovedný, či už pri porušení zmluvy alebo občianskoprávnom delikte, za žiadne priame, nepriame, sprievodné, špeciálne alebo následné škody, poplatky za právnu obhajobu, výdavky či iné škody vyplývajúce alebo súvisiace s informáciami zahrnutými alebo vyplývajúcimi z používania Zariadenia, Licencovanej aplikácie či Služby vami alebo treťou stranou, a to ani v prípade poučenia o možnosti vzniku takýchto škôd.\n\nVýrobca bude zodpovedný iba za úmyselné poškodenie alebo hrubú nedbalosť."];
var privacyNotice = ["\nRešpektujeme vaše súkromie pri spracovaní vašich osobných údajov. Toto oznámenie o ochrane osobných údajov opisuje subjekt zodpovedný za spracovávanie osobných údajov, ktoré od vás zhromažďujeme v spojitosti s používaním našich služieb inteligentného TV („služby“), ktoré typy osobných údajov o vás zhromažďujeme, čo s nimi robíme a vaše práva vo vzťahu k využívaniu vašich osobných údajov. \n\n1.	Spracovateľ údajov a zástupca v Európskej únii\n\nZískavanie, spracovanie a používanie osobných údajov získaných od vás v rámci využívania Služieb vykonáva spoločnosť Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, Čína („Spoločnosť“). Naše kontaktné údaje, ako aj kontaktné údaje nášho zástupcu v Európskej únii, sú uvedené ďalej v časti 12. Upozorňujeme však na to, že nie sme zodpovední za všetky činnosti spojené so spracovaním údajov, ktoré sú uvedené nižšie. Napriek tomu sme uviedli popis príslušných činností v našom oznámení o ochrane osobných údajov, pretože toto spracovávanie súvisí s používaním inteligentného TV.\n\n2.	Súhlas so spracovaním osobných údajov\n\nNiektoré z činností pri spracovávaní údajov, ktoré vykonávame, vyžadujú váš súhlas, napr. používanie vašich osobných údajov na účely zlepšenia služieb.\n\nVáš súhlas je dobrovoľný, a teda budete môcť Služby využívať aj za predpokladu, že ho neudelíte. Môže sa však zobraziť obsah, ktorý nie je prispôsobený vašim preferenciám. Bez ohľadu na váš súhlas si vyhradzujeme právo na spracovanie vašich osobných údajov v rozsahu povolenom platnými zákonmi.\n\nSvoj súhlas môžete kedykoľvek odvolať. Odvolanie súhlasu nemá vplyv na zákonnosť spracovania na základe súhlasu pred jeho odvolaním. Ak chcete odvolať svoj súhlas a/alebo podať námietku (podľa časti 10 a dodatku k vašim právam na vznesenie námietok), zmeňte patrične nastavenie súkromia v inteligentnom TV.\n\n3.	Špecifické kategórie osobných údajov\n\nSpracovávame najmä tieto kategórie údajov:\n\nID zariadenia: Váš Inteligentný TV má uložené fixné jedinečné číslo, pomocou ktorého ho môžeme identifikovať a overiť, keď využívate naše Služby. Toto číslo sa nazýva ID zariadenia. \n\nIP adresa a adresa MAC: Vášmu Inteligentnému TV pridelíme v rámci prístupu na internet IP adresu. Ak je inteligentný TV za smerovačom (napr. v lokálnej domácej sieti alebo lokálnej sieti WLAN), môžeme spracovávať IP adresu takéhoto smerovača. Adresa MAC je jedinečné číslo priradené každému sieťovému rozhraniu vášho Inteligentného TV. \n\nInformácie špecifické pre zariadenie: Inteligentný TV si ukladá viaceré informácie o sebe a svojej konfigurácii. Medzi tieto informácie patrí typ Inteligentného TV, verzia operačného systému Inteligentného TV, rozlíšenie panela, ID projektu (t. j. informácie o konfiguračných súboroch), agent používateľa, názov prehliadača, verzia prehliadača, jazyk a krajina, ktorá bola nakonfigurovaná v rámci Inteligentného TV. \n\nTieto informácie využijeme a poskytneme servisným partnerom a poskytovateľom obsahu na účely uvedené ďalej.\n\n4.	Účely, na ktoré spracovávame a/alebo používame vaše osobné údaje a právne základy\n\nÚčely, na ktoré spracovávame vaše osobné údaje, a príslušné právne základy sú opísané ďalej. Pokiaľ sú zmluvné účely uvedené ako právny základ, nemôžeme vám poskytnúť služby, ak nám neposkytnete príslušné údaje. Pokiaľ je ako právny základ uvedený váš súhlas, môžete ho poskytnúť alebo odmietnuť. Ak neposkytnete svoj súhlas, vaše osobné údaje nebudeme spracovávať na príslušný účel.\n\n•	Poskytovanie služieb: Využívame IP adresu a adresu MAC, ID zariadenia, verziu operačného systému Inteligentného TV, typ klienta vášho Inteligentného TV a rozlíšenie jeho panela, ID projektu (t. j. informácie o konfiguračných súboroch), váš zoznam kanálov DTV, sledované kanály, časové pásmo, nastavenia krajiny a jazyka na to, aby sme umožnili vášmu Inteligentnému TV prístup k Službám a ďalším službám od poskytovateľov obsahu. Medzi účely patrí (okrem iného) poskytovanie služieb založených na vašej polohe (napríklad predpovede počasia); riešenie zneužívania, spravovanie bezpečnostných incidentov, monitorovanie dostupnosti služieb a poskytovanie zálohových služieb preferencií používateľov.\n\nPri využívaní Služieb si bude váš Inteligentný TV cez internet od týchto Služieb vyžadovať údaje. V rámci týchto požiadaviek sa bude nášmu poskytovateľovi služieb odovzdávať vyššie popísaná IP adresa a krajina, ktorú ste si nakonfigurovali v Inteligentnom TV. Náš servisný partner spracováva príslušné údaje v súlade s vlastným oznámením o ochrane osobných údajov.\n\nPrávny základ na spracovanie vašich osobných údajov sú zmluvné účely podľa článku 6 ods. 1 písm. b) Všeobecného nariadenia o ochrane údajov (ďalej len „GDPR“).\n\n•	Nastavenia služby: Súčasťou bežného prevádzkovania Služieb je aj možnosť manuálne si preskupiť poradie zobrazovania aplikácií v rámci Služieb. Náš servisný partner uloží vaše usporiadanie a iné preferencie, ktoré môžete nastaviť počas používania služieb. Tieto informácie budú prepojené s ID zariadenia.\n\nPrávny základ na spracovanie vašich osobných údajov sú zmluvné účely podľa článku 6 ods. 1 písm. b) GDPR.\n\n•	Overenie: Keď pripojíte Inteligentný TV k internetu a zapnete ho, automaticky sa napojí na Služby, ktoré spravuje náš poskytovateľ služieb. Váš Inteligentný TV následne prejde overovaním, ktoré posúdi, či má oprávnenie na prístup k Službám. Na účely overovania sa v rámci Služieb ukladá jeden alebo viac jedinečných identifikátorov spojených s vaším Inteligentným TV. ID zariadenia a adresu MAC používame na účely overovania. Okrem toho poskytujeme ID zariadenia aj vybraným poskytovateľom obsahu na účely overovania. Títo poskytovatelia obsahu použijú ID zariadenia na overenie toho, či má váš Inteligentný TV prístup k službám, ktoré prináša poskytovateľ obsahu.\n\nPrávny základ na spracovanie vašich osobných údajov sú zmluvné účely podľa článku 6 ods. 1 písm. b) GDPR.\n\n•	Diagnostika na diaľku: V rámci našich služieb poskytujeme služby diagnostiky na diaľku. Spracovávame teda ID zariadenia, číslo zariadenia, sériové číslo, adresu MAC a protokoly o chybách, kódy chýb a popisy chýb, ktoré poskytuje chybný modul (aplikácia, systém middleware).\n\nPrávny základ na spracovanie vašich osobných údajov sú zmluvné účely podľa článku 6 ods. 1 písm. b) GDPR.\n\n•	Popredajné služby: Podľa platných zákonov môžete mať záručné alebo podobné práva na získanie záručného servisu. Spoločnosť TCL Europe, 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, Francúzsko zodpovedá za spracovanie záručných nárokov a ďalších požiadaviek na popredajné služby a spracovanie vašich osobných údajov s nimi spojených. Preto na účely popredajných služieb koná spoločnosť TCL Europe ako spracovateľ údajov a nezodpovedáme za spracovanie vašich osobných údajov.\n\nKeď požiadate o našu službu súvisiacu s popredajnými službami, môžu sa požadovať vaše meno, e-mailová adresa, telefónne číslo, žiadosť o poskytnutie služby a poštová adresa uvedené vo faktúre na účely poskytnutia popredajného servisu. Informácie je možné zhromažďovať aj prostredníctvom popredajných partnerov našich predajcov alebo autorizovaných poskytovateľov služieb, ak im zavoláte so žiadosťou o službu. Ak chcete získať ďalšie informácie o ochrane osobných údajov v súvislosti s popredajnými službami, môžete sa obrátiť na spoločnosť TCL Europe na kontaktných miestach uvedených ďalej v časti 12.\n\nPrávny základ na príslušné spracovanie je povinnosť dodržiavať zákonné povinnosti podľa § 6 ods. 1 písm. c) GDPR.\n\n•	T-Launcher: T-Launcher je hlavná stránka na používanie inteligentného TV v operačnom systéme Linux (informácie o použití systému Android nájdete ďalej) a umožňuje vám zvoliť si určitý obsah.\n\nPrávny základ na spracovanie vašich osobných údajov, ktoré je potrebné na používanie funkcie T-Launcher, sú zmluvné účely podľa článku 6 ods. 1 písm. b) GDPR.\n\nPo vašom predchádzajúcom súhlase budeme sledovať aj používanie funkcie T-Launcher, to znamená:\n Keď spustíte funkciu T-Launcher, zaznamenáme čas spustenia a ukončenia funkcie T-Launcher.\n Keď spustíte prehrávanie videa vo funkcii T-Launcher, zaznamenáme názov a dĺžku videa (neplatí pre videá zo služieb Netflix, YouTube ani žiadnej inej služby poskytovanej treťou stranou).\n Keď otvoríte alebo zatvoríte stránku, zaznamenáme dobu, po ktorú ste na stránke boli.\n Keď presuniete kurzor z jedného miesta na druhé, prípadne otvoríte aplikáciu, zaznamenáme túto udalosť.\n Keď nainštalujete, odstránite alebo aktualizujete aplikácie, zaznamenáme tieto udalosti vrátane názvu aplikácií.\n\nTieto informácie zhromažďujeme najmä na účely analýzy veľkého množstva údajov s cieľom vylepšenia produktov a poskytovanie lepšieho obsahu používateľom.\n\nPrávny základ na spracovanie vašich osobných údajov v súvislosti s monitorovaním používania funkcie T-Launcher je váš súhlas podľa článku 6 ods. 1 písm. a) GDPR.\n\nAk ste si zakúpili Android TV a používate operačný systém Android od spoločnosti Google, vaše osobné údaje spracováva spoločnosť Google a my nie sme zodpovední za takéto spracovanie. Informácie o súvisiacom spracovaní vašich údajov a príslušných právach nájdete v oznámení o ochrane osobných údajov od spoločnosti Google.\n\n•	T-Cast: Funkcia T-Cast vám umožňuje ovládať TV pomocou telefónu a zdieľať videá, hudbu a obrázky uložené v smartfóne na TV. Funkcia T-Cast umožňuje aj vytvoriť zrkadlový obraz smartfónu na TV.\n\nPrevzatie a použitie aplikácie je dobrovoľné. Ak si aplikáciu prevezmete a použijete, spracovávame adresu MAC na výpočet toho, koľko verzií funkcie T-Cast bolo na trhu použitých. To je potrebné, aby mohla byť táto služba poskytovaná. Ak použijete funkciu druhej obrazovky, naše servery budú zhromažďovať a spracovávať tieto informácie: ovládacie prvky, ktoré ste aktivovali v aplikácii, nastavenia krajiny a jazyka, zoznam kanálov DTV, zoznamy obľúbených kanálov, verzia protokolu a IP adresa vášho inteligentného TV. Naše servery budú potom riadiť váš inteligentný TV podľa vašich pokynov v aplikácii.\n\nPrávny základ na spracovanie vašich osobných údajov sú zmluvné účely podľa článku 6 ods. 1 písm. b) GDPR.\n\n•	Softvérové aktualizácie: Súčasťou služieb sú aktualizácie softvéru. Pri každom zapnutí inteligentného TV nám poskytne IP adresu, ID zariadenia, číslo zariadenia, verziu softvéru, typ klienta Inteligentného TV, ID projektu (tzn. súbory konfigurácie), ID používateľa a sériové číslo. Tieto údaje sú potrebné na vyhľadanie dostupných aktualizácií softvéru, ktoré vám ponúkneme a poskytneme.\n\nPrávny základ na spracovanie vašich osobných údajov sú zmluvné účely podľa článku 6 ods. 1 písm. b) GDPR.\n\n•	Presadzovanie práva: Môže sa od nás vyžadovať, aby sme poskytovali údaje kompetentným právnym alebo súdnym orgánom. V takomto prípade to urobíme iba po predložení záväzného právneho dokumentu, akým je zatykač alebo súdny príkaz, ktorý si bude vyžadovať našu spoluprácu s príslušnými orgánmi.\n\nPrávny základ na príslušné spracovanie je naša povinnosť splniť právne záväzky vyplývajúce z článku 6 ods. 1 písm. c) GDPR.\n\nSlužby môžete využívať aj pod pseudonymom, pokiaľ si špecifický druh služby nevyžaduje, aby ste uviedli vaše meno a/alebo e-mailovú adresu.\n\n5.	Súkromie a bezpečnosť detí mladších ako 16 rokov\n\nChápeme, že je dôležité prijať osobitné opatrenia na ochranu súkromia a bezpečnosti detí využívajúcich naše služby. Deti vo veku do 16 rokov alebo ekvivalentného minimálneho veku v príslušnej jurisdikcii nesmú poskytovať svoje osobné informácie prostredníctvom televízneho prijímača ani keď požiadajú o popredajnú službu, pokiaľ ich rodič neposkytol overiteľný súhlas.\n\nPretože nikdy nezhromažďujeme informácie o dátume narodenia používateľov, nedokážeme identifikovať vek používateľov. Ak sa však dozvieme, že sme zhromaždili osobné údaje dieťaťa mladšieho ako 16 rokov alebo ekvivalentného minimálneho veku v závislosti od jurisdikcie, okrem hore uvedených okolností podnikneme kroky na čo najskoršie odstránenie informácií.\n\n6.	Aplikácie od tretej strany\n\nInteligentný TV umožňuje používať aplikácie poskytované treťou stranou, napríklad Netflix, YouTube alebo HbbTV (červené tlačidlo služby poskytované televíznymi stanicami). Môžete si prevziať aplikácie z obchodu s aplikáciami, prípadne aktivovať aplikácie tretej strany, ktoré sú už v zariadení nainštalované. Aplikácie tretej strany, ktoré sú v zariadení nainštalované, nezhromažďujú vaše osobné údaje bez vášho predchádzajúceho súhlasu. Napr. aplikácia Netflix je už v zariadení nainštalovaná, ale zhromažďuje údaje len vtedy, keď sa prihlásite na svoje konto služby Netflix. Aplikácia HbbTV zhromažďuje údaje len vtedy, keď súhlasíte so zhromažďovaním stlačením určeného tlačidla na diaľkovom ovládaní.\n\nAk aktivujete aplikáciu tretej strany, vaše osobné údaje môže zhromažďovať poskytovateľ aplikácie. Nezodpovedáme za takéto spracovávanie. Pozrite si oznámenie o ochrane osobných údajov pre aplikáciu tretej strany, kde nájdete informácie o súvisiacom spracovávaní vašich údajov a vašich príslušných právach.\n\n7.	Kategórie príjemcov\n\nVaše osobné údaje zhromaždené pri používaní služieb poskytujeme iba poskytovateľom obsahu tretích strán, ak požadujete určitý obsah poskytovaný týmito poskytovateľmi obsahu alebo poskytovateľmi služieb, pretože spracovatelia údajov nám pomáhajú pri poskytovaní služieb.\n\nVaše osobné údaje poskytujeme iným tretím stranám iba vtedy, ak sme povinní tak urobiť na základe zákonných požiadaviek (napr. súdom alebo na orgánoch činných v trestnom konaní), ak ste súhlasili s príslušným poskytovaním, prípadne ak je poskytovanie inak zákonné podľa platných zákonov.\n\n8.	Krajiny, v ktorých sa budú údaje spracúvať\n\nMy a/alebo niektorí z príjemcov vašich osobných údajov uvedených vyššie môžeme sídliť mimo Európskeho hospodárskeho priestoru (napríklad v Číne alebo v USA). Vaše osobné údaje teda môžu byť spracované v krajinách, kde zákony na ochranu údajov môžu poskytovať inú úroveň ochrany v porovnaní so zákonmi vo vašej jurisdikcii, a ktoré nie sú uznané ako poskytujúce primeranú úroveň ochrany osobných údajov v súlade s GDPR. Medzi krajiny, ktoré poskytujú primeranú úroveň ochrany údajov z pohľadu európskeho zákona o ochrane údajov, patria: Andorra, Argentína, Kanada, Švajčiarsko, Faerské ostrovy, Guernsey, Izrael, ostrov Man, Jersey, Nový Zéland a Uruguaj. Príjemcovia v USA môžu byť čiastočne certifikovaní v rámci dohody o súkromí medzi EÚ a USA, preto sa uznáva, že poskytujú primeranú úroveň ochrany údajov z pohľadu európskeho zákona o ochrane údajov. \n\nV prípade potreby zavedieme primerané bezpečnostné opatrenia, pokiaľ ide o prenos údajov príjemcom mimo Európskej únie, ktorí neposkytujú primeranú úroveň ochrany údajov. Kópiu príslušného opatrenia si môžete vyžiadať na našich kontaktných miestach, ako je uvedené ďalej v časti 12.\n\n9.	Obdobie uchovávania\n\nVaše osobné údaje budú uchované, dokým to bude potrebné na poskytovanie služieb. Pri väčšine údajov to znamená, že vaše údaje uchováme po dobu jedného mesiaca. Na účel diagnostiky na diaľku a popredajné služby môžeme vaše údaje uchovávať až desať rokov. Keď už nebudeme potrebovať používať vaše osobné údaje na splnenie zmluvných alebo zákonných povinností, odstránime ich z našich systémov a záznamov a/alebo podnikneme kroky na ich správnu anonymizáciu, aby ste z nich už nemohli byť identifikovaní.\n\n10.	Vaše práva\n\nPodľa platných zákonov o ochrane údajov môžete mať právo: požiadať o prístup k svojim osobným údajom, požiadať o opravu svojich osobných údajov, požiadať o vymazanie svojich osobných údajov, požiadať o obmedzenie spracovania svojich osobných údajov, požiadať o prenos údajov a namietať voči spracovaniu svojich osobných údajov. Upozorňujeme, že uvedené práva môžu byť obmedzené podľa platných vnútroštátnych právnych predpisov o ochrane údajov. Ďalšie informácie nájdete ďalej v dodatku k vašim právam.\n\nMáte tiež právo podať sťažnosť príslušnému orgánu dohľadu nad ochranou údajov.\n\nAk chcete uplatniť svoje práva, obráťte sa na nás, ako je uvedené ďalej v časti 12.\n\n11.	Zmeny v oznámení o ochrane osobných údajov\n\nV rámci zlepšenia našich Služieb môžu byť potrebné zmeny a doplnenia tohto oznámenia o ochrane osobných údajov, napr. pri implementovaní nových technológií alebo zavádzaní nových služieb. Vyhradzujeme si právo kedykoľvek zmeniť alebo nahradiť toto oznámenie o ochrane osobných údajov.\n\n12.	Kontaktné informácie a zástupca v Európskej únii\n\nAk máte nejaké otázky týkajúce sa oznámenia o ochrane osobných údajov, prípadne chcete podať námietku voči spracovávaniu svojich osobných údajov, obráťte sa na nás niektorým z nasledujúcich spôsobov:\n\nKontaktný formulár: www.tcl.eu/privacy/support\n\nNáš zástupca v Európskej únii je: TCL Europe so sídlom na adrese 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, Francúzsko. Na spoločnosť TCL Europe sa môžete obrátiť cez hore uvedený kontaktný formulár.\n\nVerzia: 2,0\n\nDodatok k vašim právam\n\na.	Právo na prístup: Môžete mať právo získať od nás potvrdenie o tom, či sa osobné údaje, ktoré sa vás týkajú, spracúvajú alebo nie, a ak je to tak, požiadať o prístup k osobným údajom. Prístupné informácie zahŕňajú okrem iného aj účely spracovania, kategórie príslušných osobných údajov a príjemcov alebo kategórie príjemcov, ktorým boli alebo budú sprístupnené osobné údaje. Toto však nie je absolútne právo a záujmy iných jednotlivcov môžu obmedziť vaše právo na prístup.\n\nMôžete mať právo získať kópiu osobných údajov, ktoré sú predmetom spracovania. Za ďalšie požadované kópie môžeme účtovať primeraný poplatok na základe administratívnych nákladov. \n\nb.	Právo na nápravu: Môžete mať voči nám právo na opravu nepresných osobných údajov, ktoré sa vás týkajú. V závislosti od účelu spracovania môžete mať právo na doplnenie neúplných osobných údajov vrátane poskytnutia dodatočného vyhlásenia.\n\nc.	Právo na vymazanie („právo byť zabudnutý“): Za určitých okolností môže voči nám uplatniť právo na vymazanie osobných údajov, ktoré sa vás týkajú, a my môžeme byť povinní tieto osobné údaje vymazať. \n\nd.	Právo na obmedzenie spracovávania: Za určitých okolností môžete mať právo požadovať obmedzenie spracovania osobných údajov, ktoré sa vás týkajú. V takom prípade budú príslušné údaje označené a môžu byť spracované iba na určité účely.\n\ne.	Právo na prenosnosť údajov: Za určitých okolností môžete mať právo získať osobné údaje, ktoré sa vás týkajú, ktoré ste nám poskytli, v štruktúrovanom, bežne používanom a strojovo čitateľnom formáte a môžete mať právo na prenos týchto údajov inej osobe bez ďalších prekážok.\n\nf.	Právo na námietku:\n\nZa určitých okolností môžete mať právo kedykoľvek vzniesť námietku voči spracovávaniu svojich osobných údajov z dôvodov súvisiacich s vašou konkrétnou situáciou alebo keď sú osobné údaje spracovávané na účely priameho marketingu a môžete nás požiadať, aby sme už nespracovávali vaše osobné údaje.\n\nAk sú okrem toho vaše osobné údaje spracovávané na účely priameho marketingu, máte právo kedykoľvek vzniesť námietku voči spracovaniu osobných údajov, ktoré sa vás týkajú, na účely takéhoto marketingu, čo zahŕňa aj profilovanie v rozsahu súvisiacom s takýmto priamym marketingom. V takom prípade už nebudeme vaše osobné údaje na tieto účely spracovávať."];
var cookieNotice = ["\nPri používaní nami vyrobených inteligentných TV a nami poskytovaných služieb rešpektujeme vaše súkromie. Súbory cookie využíva množstvo webových lokalít a ďalších internetových služieb, pričom váš Inteligentný TV bude prijímať, ukladať a prenášať súbory cookie s cieľom dosiahnuť správne fungovanie týchto webových lokalít a služieb. \n\nPri poskytovaní služieb nepoužívame súbory cookie. Tretie strany (napr. poskytovatelia aplikácií tretej strany) však môžu používať súbory cookie, keď využívate Inteligentný TV na prístup k ich službám. Toto oznámenie o súboroch cookie poskytuje len obmedzené informácie týkajúce sa súborov cookie, ktoré môžu byť umiestnené treťou stranou. Ak potrebujete informácie o súboroch cookie používaných treťou stranou a ich funkciách, vyhľadajte príslušné oznámenia o súboroch cookie týchto tretích strán. V tomto oznámení o súboroch cookie vám však poskytneme všeobecný popis, ktoré súbory cookie môžu byť vo vašom inteligentnom TV umiestnené, a ako ich môžete spravovať.\n\n1.	Čo je súbor cookie?\n\nSúbory cookie sú malé textové súbory, ktoré sa môžu ukladať vo vašom Inteligentnom TV. Počas prístupu k webovej lokalite alebo službe „červeného tlačidla“ v rámci TV stanice sa môže stať, že daná webová lokalita alebo služba prenesie do Inteligentného TV súbor cookie. Počas nasledujúcich prístupov bude tento súbor cookie uložený vo vašom Inteligentnom TV posielať informácie subjektu, ktorý ho tam umiestnil. Súbory cookie sú úplne bežné a využíva ich veľa webových lokalít a služieb. Každý súbor cookie spravidla obsahuje názov domény, z ktorej pochádza, „životný cyklus“ daného súboru cookie a hodnotu (väčšinou ide o jedinečné číslo). Podrobnejšie vysvetlenie toho, čo sú súbory cookie a ako fungujú, nájdete na adrese www.allaboutcookies.org.\n\nSúbory cookie možno rozdeliť na funkčné a nefunkčné. Funkčné súbory cookie sú súbory cookie, ktoré sú potrebné výhradne na účel poskytovania služieb. Do skupiny nefunkčných súborov cookie patria všetky ostatné.\n\n2.	Webové stránky tretej strany\n\nKeď navštívite webové stránky alebo služby tretích strán prostredníctvom služieb inteligentného TV, je možné, že takéto webové stránky alebo služby umiestnia súbory cookie do inteligentného TV, a že dané webové stránky sledujú a ukladajú vaše interakcie na takýchto webových stránkach. Naša spoločnosť nepožaduje ani nepodporuje takéto činnosti a nebude používať tieto informácie. Ďalšie informácie o používaní takýchto súborov cookie tretími stranami nájdete v príslušných oznámeniach o súboroch cookie a ochrane osobných údajov na daných webových stránkach.\n\n3.	Odstránenie súborov cookie\n\nV rámci používateľského rozhrania vášho Inteligentného TV môžete odstrániť všetky súbory cookie a ďalšie súbory lokálne uložené v prehľadávači z Inteligentného TV. Skôr než predáte alebo darujete váš Inteligentný TV, dôrazne vám odporúčame odstrániť všetky súbory cookie a lokálne uložené nastavenia.\n\nVerzia: 2,0"];
var privacyPolicy = ["Označte ďalej uvedené políčka, ak chcete používať naše služby inteligentného TV a súvisiace služby. Pri využívaní týchto služieb je potrebné spracovávať vaše osobné údaje spôsobom opísaným v našom dokumente Oznámenie o ochrane osobných údajov: http://www.tcl.eu/en/","Povoliť službu inteligentného TV, ukladanie nastavení služby a automatické overenie inteligentného TV. Ak zrušíte označenie tohto políčka, budete mať len štandardný TV a HDMI.","Povoliť automatické aktualizácie softvéru. Označením tohto políčka zachováte produkt aktualizovaný najnovšími aktualizáciami softvéru a najlepší výkon.","(Aktualizácie softvéru sú dôležité pre správne fungovanie TV, pretože poskytujú nové funkcie, stabilitu a zabezpečenie. Odporúčame teda toto políčko označiť.)","Označte ďalej uvedené políčko, ak súhlasíte so spracovávaním svojich osobných údajov aj na nasledujúci uvedený účel. Ďalšie informácie o spôsobe spracovávania vašich osobných údajov nájdete v dokumente Oznámenie k ochrane osobných údajov: http://www.tcl.eu/en/","Súhlasím so spracovávaním mojich osobných údajov (napr. čas spustenia a ukončenia služby T-Launcher) na účel vylepšenia produktov TCL a poskytovanie služieb s lepším obsahom v inteligentnom TV."];
var termsFirTitle = ["Podmienky","Vyhlásenie o ochrane osobných údajov","Vyhlásenie o používaní súborov cookie"];
var termsSecTitle = ["Prečítajte si zmluvné podmienky a prijmite.","Prečítajte si a schváľte vyhlásenie o ochrane osobných údajov.","Prečítajte si a schváľte vyhlásenie o používaní súborov cookie."];
var tickall = "Označiť všetko";
var tickremindWords = "Označte začiarkavacie políčka, inak nebudete môcť využívať službu Smart TV.";