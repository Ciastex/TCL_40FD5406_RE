
var all_country 	= ["Austrálie","Rakousko","Belgie","Bulharsko","Chorvatsko","Česká republika","Dánsko","Finsko","Francie","Německo",
						"Řecko","Maďarsko","Itálie","Lucembursko","Nizozemsko","Norsko","Polsko","Portugalsko","Rumunsko","Rusko",
						"Srbsko","Slovinsko","Španělsko","Švédsko","Švýcarsko","Velká Británie","Nový Zéland"," "/*Arab*/,"Estonsko"," "/*Hebrew*/,
						"Lotyšsko","Slovensko","Turecko","Irsko","Japan","Filipíny","Thailand","Maldives","Uruguay","Peru",
    					"Argentina","Chile","Venezuela","Ecuador","Costa Rica","Paraguay","Bolivia","Belize","Nicaragua","Guatemala",
						"Čína","Taiwan","Brazil","Canada","Mexico","United States","South Korea","Romania","Vietnam"/*新添加的，底层结构体中没有*/,"Ukrajina"/*新添加的，底层结构体中没有*/,
    					"Iran","Iraq"," ","Kazakhstan","Uzbekistan"," ","Kyrgyzstan","Algeria","Egypt","Tunisia",
    					"Tanzania","Kenya","Pakistan","Indonesia","Kuwait","Saudi Arabia","Qatar","Israel","Lebanon","bahrain",
    					"Angola","Congo","India","Turkmenistan","Colombia","Mongolia","Bangladesh","Nepal","Sri Lanka","North Korea",
						"Moldavsko","Polynesia","EI Salvador"," ","Fiji","Liberia","Jordan","Myanmar","Ghana","Georgia",
    					"Armenia","Oman","yemen","Syria","Palestine","Afghanistan","Morocco","benin","IvoryCoast","Nigeria",
    					"Sudan","Ethiopia","Zambia"," ","South Africa","mozambique","Libya","Albánie","Belarus","Iceland",
						"Litva","Mauritius","Dubai","UAE","Tajikistan","Bengal","Bosna a Hercegovina","Kypr","Kosovo","Makedonie",
						"Malta","Černá Hora","Cameroun","Singapore","Malaysia","NewCaledonia","Suriname","Jamaica","Curacao","Aruba",
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
				
var all_language 	= ["Čeština","*","Dánsky","*","*","němčina","angličtina","francouzština","řecky","španělština",
						"Chorvatsky","*","italština","Maďarsky","Holandsky","Norsky","Polsky","Portugalsky","rusky","Rumunsky",
						"Slovinsky","Srbsky","Finsky","Švédsky","Bulharsky","Slovensky","Chinese","*","Galsky","*",
						"Velšsky","arabsky","Irlandais","Lotyšsky","*","turecky","Estonsky","Holandsky"/*Netherlands*/,"Korejština","*",
						"hindština","*","*","Mandarinka","kantonský","Maori","Ориг. Аудио"/*Qaa*/,"Není definováno"/*Undetermined*/,"*","Neznámé",
						"Není definováno","*","*","*","*","*","*","*","*","*",
						"*","*","*","Albánština","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baskicky","*","*",
						"*","*","*","*","*","*","*","Bosenština","*","*",
						"*","*","*","*","Hviderussisk","*","*","Katalánsky","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galiciánsky","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Islandsky","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","japonský","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Litevsky",
						"*","*","*","*","*","*","*","Makedonština","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romantika","*","*","*","*",
						"*","*","*","Sami","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Teletext",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukrajinsky","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Vyp","Zap"];
var okCancel		= ["Ok","Storno"];
var yesNo			= ["ANO","NE"];
var level			= ["Vyp","Nízká","Vysoké","Střední"];
var manualAuto		= ["Ručně","Automaticky"];
var homeShop		= ["Domů","Obchod"];
var picPreset		= ["Standardní","Dynamický","Přírodní","Kino","Uživatel"];
var picColorTemp	= ["Studené","Normální","Teplé","Uživatel"];
var pic3dNavig		= ["Ručně","Automaticky","Poloautomaticky"];
var _3dOptions		= ["3D režim","3D na 2D","Přepínač L/P oka","Hloubka pole"];
var pic3DMode       = ["Vyp","2D na 3D","Snímky vedle sebe","Snímky pod sebou","Prokládání řádků"];
var picEcoOptions	= ["Šetření energie","Světelné čidlo","Lokální ztlumení","Smíšené tlumení"];
var picGeoOptions	= ["Geometrie","H. poloha","V. poloha","Čas","Fáze"];//Geometry 无翻译
var picAdWhiteBal	= ["Zvýraznit Č","Zvýraznit Z","Zvýraznit M","Posun Č","Posun Z","Posun M"];
var souOptions		= ["Předn. zvuk","Zůstatek","Zpoždění zvuku","SRS TSHD","Auto. ovl. hlasit.",
						"Typ SPDIF","SPDIF Delay","Umístění TV","Jazyk zvuku","Zvukový kanál",
						"Automatický popis","Zesílení basů","Dolby Digital Plus"];
var souSpdifType	= ["Automaticky"/*Dolby*/,"PCM","Vyp"];
var colorSpace      = ["Automaticky","Nativní","Uživatel"];
var souPresetPara	= ["100Hz","500Hz","1.5KHz","5KHz","10KHz"];
var chOptions		= ["Vyhledat kanály","Seznam kanálů","EPG","Uspořádání kanálů","Diagnostika kanálů",
						"časový posun","Titulky","Teletext","Typ seznamu kanálů"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Intenzita signálu","Kvalita signálu","Frekvence (kHz)","ID služby","ID sítě","Název sítě:"];
var chScanOptions	= ["Země / region","Režim tuneru","Aut. hledání","Aktual. hledání","Ručně hledat anal",
						["Ruční skenování kabelu","Ruční skenování antény","Ruční ladění satelitu"],"Nastavení satelitní antény","Výběr oblíbené sítě","Vyčištění seznamu kanálů","LCN"];
var favNetDes		= "Vyberte svou oblíbenou síť";
var tuner			= ["Kabel","Anténa","Satelit"];//Satelite 无翻译
var passError		= "Nesprávné heslo.\nZadejte heslo znovu!";
var chType			= ["Analogové kanály:","Digitální kanály:"];
var chScanStatus	= ["Stav: Skenování","Stav: Vyhledávání dokončeno","Stav: Vyhledávání zrušeno","Stav: Chyba vyhledávání"];
var chScanPara		= ["Frekvence (kHz)","Modulace","Přenos.rychlost (Ksym/s)","ID sítě","Systém",
						"Jemné ladění","Intenzita signálu","Kvalita signálu","Režim sken.","Č. kanálu"];
var chScanParaMHZ      = ["Frekvence (MHz)"];
var chAtvManSys		= ["ZÁP EVR","VÝCH EVR","Spojené Království","Francie"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Automaticky"];
var chCleanDes		= "Chcete vymazat seznam kanálů?";
var chDeletDes		= "Přejete si kanál odstranit?";
var chOperator		= ["Ziggo","UPC","Ostatní"];
var chScanType		= ["Digitální & Analog","Digitální","Analogový"];
var chScanMode		= ["Plné","Dopředu","Rychle"];
var bookingModes	= ["Záznam","Připomenutí"];
var dayName			= ["ne","po","út","st","čt","pá","so"];
var monthName		= ["led", "úno","bře","dub","květen","čen","čec","srp","zář","říj","lis","pro"];
var filter			= ["Filtr","Typ","Podtyp"];
var chEpgFirstGenre	= ["Kino","Novinky","Záb. pořad","Sport","Pro děti","Hudba","Umění","Společnost","Vzdělávání","Volný čas","SPECIÁLNÍ"];
var chEpgSecondGenre= [["Dramatické umění","Detektivní","Dobrodružný","Scifi","Komedie","Telenovela","Romantika","Vážná","Film pro dospělé"," "," "," "],
						["Aktuální události","Počasí","Zprávy","Dokument","Diskuze"," "," "," "," "," "," "," "],
						["Záb. pořad","Soutěžní pořad","Varietní pořad","Talk Show"," "," "," "," "," "," "," "," "],
						["Sport","Zvláštní události","Sportovní magazíny","Fotbal","Tenis",
							"Kolektivní sporty","Atletika","Motoristické sporty","Vodní sporty","Zimní sporty",
							"Jezdectví","Bojové sporty"],
						["Pro děti","Předškolní děti","Zábava pro 6 až 14","Zábava pro 10 až 16","Informativní","Animované"," "," "," "," "," "," "," "],
						["Hudba","Rock","Vážná","Folk","Jazz","Muzikál","Balet"," "," "," "," "," "],
						["Umění","Užitné umění","Výtvarné umění","Náboženství","Populárně-kulturní",
							"Literatura","Film","Experimentální","Vysílání","Nová média",
							"Magazíny o umění","Móda"],
						["Společnost","Magazíny","Ekonomika","Významné osoby"," "," "," "," "," "," "," "," "],
						["Vzdělávání","Příroda","Technika","Lékařství","Cizí země","Společenské vědy","Další vzdělávání","Jazyky"," "," "," "," "],
						["Záliby","Turistika","Kutilství","Motorismus","Tělesná kondice a zdraví","Vaření","Reklamy","Zahrádkářství"," "," "," "," "],
						["Původní jazyk","ČB","Nepublikováno","Živé vysílání"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Přeskočit kanál","Seřadit kanály","Upravit kanál","Smazání kanálů","kanál swapu","kanál vložka"];
var chEditPara 		= ["Název sítě:","Číslo kanálu","Název kanálu","Frekvence","Barevný systém","Zvukový systém"];
var chSatTitles		= ["Typ satelitu","Nastavení satelitní antény","Vyberte satelit"];
var chSatEidtOptions= ["Název satelitu","Pozice","LNB Energie","Frekvence LNB (MHz)","Diseqc vstup",
						"Tón 22KHz","tone Burst","Frekvence (kHz)","Přenos.rychlost (Ksym/s)","Polarizace",
						"Intenzita signálu","Kvalita signálu","Stav satelitu"];
var chSatAutoPromt	= [["Vše","Síť"],
						["Vše","Volné"]];
var chSatAutoScanOptions=["Vyberte satelit","Režim sken.","Kanály"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Univerzální",];
var chSatDiSEqCInput= ["Zakázat","A","B","C","D"];
var chSatTone22KHz	= ["Automaticky","Zap","Vyp"];
var chSatToneBurst	= ["Zakázat","tone Burst A","tone Burst B"];
var chSatPolarization= ["Horizontální","Vertikální"];
var chSatSetupOptions=["Typ antény","Tuner","Frekvence pásma"];
var chSatAntennaType= ["Jeden kabel","Univerzální"];
var chSatUserBands	= ["Uživatel. pásmo 1","Uživatel. pásmo 2","Uživatel. pásmo 3","Uživatel. pásmo 4","Uživatel. pásmo 5","Uživatel. pásmo 6","Uživatel. pásmo 7","Uživatel. pásmo 8"];
var chSatOthers		= ["Transpondér"];
var chSatSetupOthers= ["Vlastní"];
var pleaseSelectSat = "Vyberte prosím nejprve satelity!";
var subOptions		= ["Titulky","Jazyk digitálních titulků","Jazyk digitálních titulků 2","Typ titulků"];
var ttxOptionsCon      = ["Dekódování jaz. str.","Jazyk dig. teletextu"];
var subType			= ["Normální","Sluchově postižení"];
var netIntf     	= ["Ethernet  ","Bezdrátové"];
var netConnDes		= ["TV testuje síťové připojení.\nČekejte prosím",
						"Test připojení sítě proběhl úspěšně!",
						"Test připojení sítě se nezdařil."];
var netSsidError	= "Platná délka SSID je 1~32 znaků. Zkontrolujte SSID.";
var netOthers		= ["PIN kód "];
var netWlessAutoDes	= ["Než klepnete na tlačítko OK, zkontrolujte, zda následující PIN kód souhlasí s přístupovým bodem.",
						"Stiskněte tlačítko na přístupovém bodu maximálně 120 sekund předtím, než klepnete na tlačítko OK."];
var netConnRemind	= ["Nesprávné heslo!",
						"Připojuji se. Čekejte, prosím!",
						"Úspěšné připojení a získání IP adresy! ",
						"Porucha spojení",
						"TV vyhledává přístupové body\\nProsím čekejte ",
						"K TV není připojeno žádné bezdrátové zařízení! "];
var netWireIpOptions= ["Nastavení IP","Typ adresy","Adresa IP","Maska podsítě","Výchozí brána","Primární DNS","Sekundární DNS"];
var netWireConnRemind= ["Zadejte hodnotu mezi 0 a 255.",
						"Připojení úspěšné!",
						"Zadejte platnou adresu",
						"Připojení úspěšné!",
						"Neúspěšné připojení!",
						"Připojuji se. Čekejte, prosím!",
						"Zadejte prosím hodnotu od 1 do 223."];
var netFlixOptions	= ["Deaktivovat","ESN","Verze Netflix"];
var netFlixDes	 	= ["Opravdu chcete deaktivovat?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Aktualizace softwaru ";
var netUpdateDialogTitle = "Aktualizace software";
var netBGDownloadTitle 	= "Stahování";
var netUpdateLoadingPrompt= ["Hledání aktualizací, čekejte prosím!",
							"Probíhá stahování software... Čekejte, prosím!",
							"Během aktualizace softwaru NEVYPÍNEJTE televizor.",
                            "Povinná aktualizace software se stáhne automaticky na pozadí!"];
var netUpdatePrompt= ["Blahopřejeme – máte nejnovější verzi softwaru!",
						"Byla nalezena nová verze softwaru XXXX. Chcete ji stáhnout nyní? Stažení může chvíli trvat v závislosti na stavu sítě.",
						"Přihlášení selhalo!",
						"Příjem dat se nezdařil, zkuste prosím později!",
						"Analýza aktual. formátu definice kanálu selhala!",
						"Porucha spojení",
						"Stažení softwaru bylo úspěšné! Chcete zahájit flashování?",
						"Ztráta dat.Stahování selhalo!",
						"Kontrola programového balíku selhala, zkuste to prosím znovu!",
						"Síť nepracuje normálně.Zkontrolujte ji a připojte se znovu...",
						"Aktualizace selhala.Restartujte prosím TV!",
						"Soubor upgradu byl neočekávaně odstraněn. Upgrade po síti je nutné znovu provést.",
						"Software byl úspěšně stažen na pozadí. Chcete provést upgrade?"];
var netUpdateButtonText = ["Stáhnout", "Aktualizovat", "Později", "Nikdy", "Ok","Pokračovat"];
var autoDetectPrompt = ["Byla nalezena nová verze softwaru XXXX. Chcete ji stáhnout nyní? Stažení může chvíli trvat v závislosti na stavu sítě.",
						"Byla nalezena nová verze softwaru XXXX. Chcete aktualizovat nyní?",
						"Při posledním upgradu po síti došlo k přerušení. Upgrade je nutné znovu provést.",
                        "Stahování nové verze software XXXX není dokončeno. Chcete nyní pokračovat?",
                        "Software stažen, chcete nyní spustit aktualizaci?"];
var sysOptions		= ["Elektronická příručka","Jazyk OSD","Nastavení času","Zamknout","Nastavení vstupů",
						"Aktualizace softwaru ","Místo","Režim HbbTV","Cookies","Společné rozhraní",
						"Upřesňující nastavení","Reset shop","LED indikátor","Okamžité zapnutí","Režim automatického nákupu","Area","Režim Demo"];
var sysResetDes		= "Opravdu?";
var sysMenuLangOptions=["Jazyk","Preferovaný jazyk zvuku","2. upřednostňovaný jazyk zvuku"];
var sysTimerOptions	= ["Časové pásmo","Název regionu","Čas","Časovač vypnutí","Autom. pohot. režim", "Country region"];

var sysTimeZone		= ["Jako vysílač","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Vyp","10 min","20 min","30 min","40 min","50 min","60 min","90 min","120 min"];
var sysStandby		= ["Vyp","4 hod.","6 hod.","8 hod."];
var sysRegionName	= ["Madrid ","Kanárková"];
var sysClockOptions	= ["Aut. synchronizace","Datum","Čas","Časovač zapnutí","Nastavení času",
						"Zapnout kanál","Časovač vypnutí","Nastavení času"];
var sysTimer		= ["Vyp","Denně","Jednou"];

var sysInputSet		= ["Bez štítku","DVD","Blu-ray","HDD","DVDR",
						"HD nahr.","Hra","VCR","PC","Digital STB",
						"HD dig STB","Kamera","Rekordér","Jiné"];
var sysAvVideoInput	= ["Automaticky","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["Přes USB","Přes sítě","Dle kanálu"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Bezdrátově nelze nový software vyhledat!",
						"Byla nalezena nová verze softwaru XXXX. Chcete aktualizovat nyní?",
						"Vložte prosím USB disk.",
						"Kontrola programového balíku selhala, zkuste to prosím znovu!",
						"Během aktualizace firmwaru NEODPOJUJTE adaptér USB klíče a nevypínejte televizor !!",
						"Aktualizace software byla úspěšná.\nTV se nyní automaticky restartuje!",
						"Byla nalezena nová verze softwaru XXXX. Chcete ji stáhnout nyní? Stažení může chvíli trvat v závislosti na stavu sítě.",
						"Stahování",
						"Stažení softwaru bylo úspěšné! Chcete zahájit flashování?",
						"Chyb. aktual.! ",
						"Vyhledávání souborů aktualizace",
						"Software úspěšně aktualizován.\nRestartujte nyní televizor."];
var sysProductInfo	= ["Aktuální verze","Název produktu","Název výrobce","Název skříně"];
var sysCiDes		= ["Žádná karta CI."];
var sysAdOptions	= ["Registrace DivX®","Zrušení registrace DivX(R)","T-Link","Authorization Error","Potvrzení zrušení registrace",
						"Potvrzení půjčení","Pronájem vypršel"];
var sysRegistDes	= ["K přehrávání chráněných DivX videí musíte své zařízení zaregistrovat",
						"Registrační kód:",
						"Zaregistrujte se na http://vod.divx.com"];
var sysDregistDes	= ["Kód k zrušení registrace:",
						"Registraci zrušte na http://vod.divx.com",
						"Pokračovat v registraci?"];
var mediaAuthorization = ["Zařízení není oprávněno přehrávat toto chráněné video DivX(R)."];
var deregistrationConfrimation = ["Vaše zařízení je již zaregistrováno.","Opravdu chcete zrušit registraci?"];
var rentalConfirmation = "Z půjčeného disku DivX(R) bylo využito XXXX ze YYYY zhlédnutí. Pokračovat?";
var rentalExpired 	= "Pro zapůjčení DivX(R) bylo vyčerpáno XXXX shlédnutí z YYYY. Platnost zapůjčení DivX vypršela.";

var parentalRatingNA		= ["***","***","***","***","***","***","***","***"];
var parentalRatingOptionUS		= ["***","***","***"];
var sysTVRatingUS=["***","***","***","***","***"];
var sysMPAAUS=["***","***","***","***","***","***"];
var parentalRatingOptionCanada		= ["***","***","***"];
var sysCanadaEng=["***","***","***","***","***","***"];
var sysCanadaFre=["***","***","***","***","***",""];
var sysResetRRT=["***"];

var sysLockOptions	= ["Blokovat kanál","Zámek časového intervalu","Hodnocení obsahu","Blokovat vstup","Zámek předního panelu","Instalace zámku",
						"Změnit heslo","Max.hlasitost","Vyčistit vše"];
var sysTimeIntervals= ["Typ zámku","Čas spuštění ","Čas ukončení"];
var sysRatingOptions= ["Žádný","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","X-rated (Španělsko)"];
var changePass		= ["Změnit heslo","Nové Heslo","Potvrdit heslo"];
var changePassDes	= ["Nesprávné heslo.\nZadejte heslo znovu!",
						"Heslo se neshoduje.\nZadejte heslo znovu!",
						"Heslo úspěšně nastaveno!",
						"Kód je pro nastavení hesla příliš jednoduchý.\nVložte prosím znovu jiný!"];
var sysPowerOnChOptions= "Vybrat režim";
var sysPowerOnCh	= ["Poslední stav","Výběr uživatele"];
var netWlessSecu    = ["Otevřít","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Žádný","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Není podporováno"];
var netWlessSecu3	= ["Žádný","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Není podporováno"];
var netOptions		= ["Připojení k internetu","Rozhraní","Bezdrátová nastavení","Nastavení IP","Informace",
						"Test připojení","DLNA","Dálkový ovládač","Nastavení Netflix","Zobrazení Wi-Fi",
						"Typ adresy","Adresa IP","Maska podsítě","Výchozí brána","Primární DNS",
						"Sekundární DNS","SSID","BSSID","Zadejte identifikátor SSID:","Uživatelské jméno"];
var chEditDes		= ["Duplicitní číslo kanálu!","Stiskněte červené tlačítko pro odstranění aktuálního znaku!","Neplatná čísla kanálu."];
var chEpgNoProgram	= "Nyní žádné programové info, nejprve prosím hledejte stanice!";
var chEpgWords		= ["Programový průvodce","Žádná programová data.","Kanál uzamčen!","Žádná informace o programu.","Žádný název programu."];
var chEpgBooking	= ["Plán info", "Číslo kanálu","Datum od","Čas spuštění ","Čas ukončení",
						"Typ opakování","Typ harmonogramu","Přidat","Nahradit","Změnit",
						"Přidat/upravit"];
var epgHotKey		= ["Předchozí den","Následující den","Filtr","Seznam nahrávek","Přidat do seznamu"];
var chEpgBookRemind	= ["Nesprávný počáteční čas","Nesprávný koncový čas","Duplicitní plán","Úspěšně uloženo.","Úspěšně smazáno."];
var chSchePara		= ["Seznam nahrávek","Čas spuštění ","Datum od","Název programu","Název kanálu",
						"Délka","Opakovat","Plán","Editovat","Vymazání"];
var dateTimer		= ["Jednou","Denně","Týdně"];
var scheduleDeleteReminds="Chcete odstranit tento záznam?";
var scheduleNoLists	= "Neexistuje žádný seznam nahrávek. Stiskněte červené tlačítko pro přidání.";
var chListWords		= ["Seznam kanálů","Vyberte seznam","Režim tuneru","Přidat k oblíbeným","Odstranit",
						"Vyberte seznam kanálů","Vyberte režim tuneru","Zaměnit"];
var chListType		= ["Vše","Digitální","Analogový","Rádio","Volné","Oblíbené"];
var chAutoScanOptions=["Vyberte operátora","Typ kanálu","Aut. hledání"];
var souSoundType	= ["Neplatné","Mono","Mono","Stereo","Stereo",
						"SAP","SAP","Duální1","Duální2","Duální2",
						"Nicam mono","Nicam stereo","Nicam dual1","Nicam dual2","Nicam dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Hudba","Kino","Jasný hlas","Standardní","Uživatel"];
var picAdRgbMode	= ["Vyp","Pouze červená","Pouze zelená","Pouze modrá"];
var picAdOptions	= ["DNR","MPEG NR","RGB mode","Dynamický Kontrast","Jasnost pohybu LED",
						"Pleťový tón","Režim filmu","Herní režim","Teplota barev","Vyvážení Bílé",
						"Zmrazit","Black Stretch","Zvětšit","Gamma","Režim HDMI","Vyvážení bílé 10P","Rozšíření barevného spektra",
						"Redukce rozmazání","Snížení třesu","Barevn prostor","Zřetelnost pohybu"];
var pic10Pwhite     = ["interval","Červená","Zelená","Modrá","Reset","Barva","Žlutá","Azurová","Purpurová"];
var picMotionClarity = ["Režim pohybu","Interpolace pohybu","Jasnost pohybu LED","Redukce rozmazání","Snížení třesu","Reset"];
var picMotionMode   = ["Film","Vyhlazení","Vymazat","Sport","Zákazník"];
var picResetDes		= "Všechna osobní nastavení budou resetována. Jste si jisti, že vybranou akci chcete provést?";
var pic10PReset     = "Jste si jisti, že chcete obnovit vyvážení bílé 10P?";
var picMotionReset  = "Chcete obnovit zřetelnost pohybu?";
var picColorSpaceReset    = "Jste si jisti, že chcete obnovit barevný prostor?";
var picOptions		= ["Režim obrazu",
						"Podsvícení"," Jas ","Kontrast","Sytost","Odstín","Ostrost","Teplota barev","Režim obrazovky","Aut. formát ",
						"Vylepšení pro sport","3D","3D navigace","ECO Nastavení","Geometrie",
						"Upřesňující nastavení","Resetovat obraz","Mikro ztlumení"];
var picSize			= ["16:09", "Formát 4:3", "Formát 14:9", "Cinerama",
						"Μεγέθυνση 16:9", "Μεγέθυνση 16:9","Μεγέθυνση 14:9","Άπλωμα Μεγέθυνσης","Πλατιά Μεγέθυνση",
						"Μεγέθυνση 2","Πλατιά Μεγέθυνση 2","Screen Native Match","Dot by Dot","Původní","Panorama"];
var others			= ["Zvuk","Vysílání","Heslo","Stav","Uložit","Nahradit","Spustit","Konec","Hledat","Vymazání",
						"Žádný","Automaticky","Vyhledat","Zabezpečení","Připojit","Obnovení","Opakovat","Zastavit","Nastavení","Kanály",
						"Editovat","Vložit","Signál!","Dokončit","Stereo","Zvuk","Zdroj","Žádný zvuk","Tipy","Reset",
						"Zákazník","Nastavení","Uložit","Uživatel","Zavřít klávesnici","Režim zabezpečení","Každý den","Seznam PVR"];
var direction		= ["Vlevo","Vpravo","Nahoru","Dolů"];
var audioType 		= ["MPEG","DOLBY AUDIO"/*"AC3"*/,"MPEG4","AAC", "DOLBY AUDIO"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Neznámé"];
var soundChannels   = ["Neznámé","Mono","Dílčí","Duální mono","Stereo","Stereo Sub","Stereo Dolby Surround","Surround 2CH","Surround","3.0Ch","4.0Ch","5.0Ch","Mono Lfe","Dual Mono Lfe","Stereo Lfe","Surround 2Ch Lfe","Surround Lfe","3.1Ch","4.1Ch","5.1K","7.1K","Joint Stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Vlevo","Vpravo","Ostatní"];
var prompts			= ["Upravte nastavení obrazu, které nejlépe vyhovuje vašemu prostředí pro sledování.",
						"Upravit úroveň jasu. Čím blíže k 100, tím jasnější.",
						"Upravit úrovně kontrastu. Čím blíže k 100, tím větší jsou rozdíly mezi tmavým a světlým v obrazu.",
						"Upravit úrovně sytosti. Čím blíž k 100, tím jsou barvy sytější.",
						"Upravit úrovně ostrosti. Čím blíž k 100, tím jsou detaily ostřejší.",
						"Upravit úrovně podsvícení. Čím blíž k 100, tím je obrazovka jasnější.",
						"Upravit úrovně odstínů. Toto nastavení změní barevné tóny.",
						"Zvolte formát obrazu, který nejlépe vyhovuje sledovanému programu.",
						"Nakonfigurujte možnosti úspory energie.",
						"Upravte nastavení geometrie obrazovky při připojení PC zařízení.",
						"Vyberte více pokročilých nastavení obrazu.",
						"Obnovte výchozí hodnoty všech nastavení obrazu.",
						"Vyberte režim zvuku dle osobních preferencí.",
						"Upravte vyvážení hlasitosti mezi levým a pravým kanálem.",
						"Systém vyhledávání zvuku TruSurround HD poskytuje bohatý zvukový výkon a zřetelnost při nízkých a vysokých frekvencích.",
						"Formát digitálního rozhraní pro připojení digitálního zvukového výstupu televizoru do audio zařízení domácího kina.",
						"Vyberte jazyk zvuku dle osobních preferencí.",
						"Dejte zrakově postiženým možnost vychutnat si televizní programy.",
						"Otestujte si obraz, zvuk a signál vaší TV.",
						"Vyberte typ seznamu kanálů, který odpovídá televiznímu signálu.",
						"Zvolte jazyk titulků k programu, které budou zobrazeny v dolní části obrazovky.",
						"Zobrazit text a obrázky k aktuálnímu kanálu.",
						"Digital Living Network Alliance (DLNA). Vychutnejte si hudbu, fotografie a video prostřednictvím domácí sítě z jiných zařízení, jako je osobní počítač.",
						"Zobrazujte na televizoru obsahy vašeho chytrého telefonu a použijte jej jako dálkové ovládání pro televizor.",
						"Zobrazujte na obrazovce televizoru obsahy ze zařízení se systémem Android, která jsou kompatibilní s Miracast.",
						"Mějte televizor ve svých rukou.",
						"Vyberte pro zařízení název.",
						"Vyberte prostředí sledování.",
						"Obnovte výchozí hodnoty všech nastavení systému.",
    					"Switch off sports mode for more options.",
    					"Zvýšit environmentální kontrast.",
    					"Speciální režim pro lepší zážitek ze sportovních přenosů",
    					"Užijte si více funkcí CEC."];
var initialTitle	= ["Vítejte","Počáteční nastavení"];
var initialPrompt	= ["Spusťte počáteční nastavení nyní – vzrušující svět zážitků vás již očekává!",
						"Vyberte jazyk:",
						"Vyberte svou zemi/region:",
						"Vyberte své umístění:",
						"Vyberte typ připojení k síti:",
						"Vyberte režim kabelového připojení k síti:",
						"Nepodařilo se připojit k xxxxxxxxx! Připojte prosím zařízení podle následujícího schématu a zvolte Doleva pro reset.",
						"Připojeno k xxxxxxxxx! Zvolte prosím Doprava pro pokračování.",
						"1) Váš televizor již může mít vestavěný bezdrátový adaptér\n 2) V případě, že používáte USB adaptér, připojte jej do vašeho televizoru.  Potom zvolte režim bezdrátového připojení k síti",
						"Probíhá skenování. Čekejte, prosím...",
						"K TV není připojeno žádné bezdrátové zařízení! ",
						"Před stiskem tlačítka \"Další\" se ujistěte, že je následující PIN nainstalován na přístupovém bodu. ",
						"Stiskněte tlačítko na AP během 120 vteřin, než stisknete tlačítko Doprava!",
						"WPS (chráněné nastavení Wi-Fi)",
						"PIN (osobní identifikační číslo)",
						"PBC (konfigurace tlačítka)",
						"K následujícímu obsahu je možné přistupovat pouze s připojením k síti. Chcete přeskočit Nastavení sítě?",
						"K dispozici jsou nové softwarové aktualizace, které si můžete stáhnout. V závislosti na stavu vaší sítě to může nějakou dobu trvat.",
						"Aktualizace softwaru televizoru zajistí, že si budete moci vychutnat nejnovější funkce a služby.",
						"Nebudete využívat nejnovější funkce a služby. Chcete přeskočit aktualizaci softwaru?",
						"Stiskněte pravé tlačítko pro pokračování.",
						"Nevypínejte během aktualizace napájení, mohlo by dojít k poškození správného fungování televizoru.",
						"Pokud nechcete spustit aktualizace, vyberte NE.",
						"Probíhá aktualizace, čekejte prosím",
						"Software můžete také aktualizovat části SYSTÉM/AKTUALIZACE SOFTWARE.",
						"Při výběru země dojde k výzvě o nastavení hesla.\nNastavte prosím kód vaší televize a potvrďte ho.",
						"This code is too simple.\nPlease use different digits.",
						"Blahopřejeme vám! Počáteční nastavení skončeno. Můžete změnit konfiguraci přes hlavní nabídku a navazující dílčí nabídky.",
						"Vyberte režim zabezpečení:",
						"Vyberte prosím režim připojení k bezdrátové síti:",
						"Síť"];
var initNetCabAndDonRe = ["Žádný síťový kabel není připojen. Připojte síťový kabel!","Není k dispozici žádný vestavěný bezdrátový adaptér, ani bezdrátový USB adaptér."];
var initChPrompt = ["Uložení TV stanice","Vyberte typ skenování přes anténu.","Probíhá automatické ladění…","Bylo nalezeny anténní kanály:","Vyberte kabelový typ vyhledávání.","Prosím, vyberte jednoho operátora z následujícího seznamu.","Nakonfigurujte info o vyhledávání","Byly nalezeny následující kabelové kanály:","Z následujícího seznamu vyberte jednoho provozovatele","Vyberte satelity k vyhledávání nebo upravte vybraný satelit","Nastavte parametry satelitu","Byly nalezeny následující kanály. Vyhledávání kanálů je také možné znovu spustit v nabídce Kanál/Skenovat kanály"];
var initClockPrompt = ["Získat čas ze sítě!",
						"Nastavte prosím datum a čas:"];
var initialOptions	= ["Prostředí","Nastavení sítě","Aktualizace softwaru ","Instalace kanálů","Čas"];
var initialHotkeys	= ["Zpět","Vybrat","Další","Souhlasím"];
var initLocations	= ["Domů","Obchod","Obchod a demo"];
var initNets		= ["Kabelem","Bezdrátové","Nemám připojení k síti"];
var initWireManuals	= ["Adresa IP","Maska podsítě","Výchozí brána","Primární DNS","Sekundární DNS"];
var initSoftUpdates = ["Aktualizovat nyní","Aktualizovat později"];
var initChannelIns	= ["Pokračovat","Nechci ukládat programy"];
var initChScanTypes	= ["Digitální & Analog","Digitální","Analogový","Nechci vyhledat"];
var initChDvbts		= ["Anténní kanály ATV:","Anténní kanály DTV:"];
var initChDvbcs		= ["Kabelové ATV kanály:","Kabelové DTV kanály:"];
var initChDvbss		= ["Satelitní kanály:"];
var initChDvbSOther	= ["Nechci vyhledat satelity"];
var initEndConnectedStatus= ["Odpojeno","Připojeno přes WiFi","Připojeno kabelem"];
var initEndInstallations= "Uloženo XXXX kanálů";
var initEndUpdate	= ["Aktualizováno"];

var audioScenes 	= ["Na stole","Nástěnný držák"];			
var screenSavers	= ["Žádné kanály, stiskněte tlačítko ok a proveďte hledání!",
						"Žádný signál!",
						"Kódované",
						"Pouze data",
						"Zvukový program",
						"Žádný zvuk ani video",
						"Není k dispozici",
						"Žádný teletext",
						"Žádná programová data.",
						"Program uzamčen!",
						"Program uzamčen!\nStiskněte OK a zadejte svůj kód.",
						"Žádná informace o programu.",
						"Program škodlivý pro nezletilé.\nStikněte OK zadejte svůj kód.",
						"Kanál uzamčen!",
						"Kanál uzamčen!\nStiskněte OK a zadejte svůj kód.",
						"Vstup uzamčen!\nStiskněte OK a zadejte svůj kód.",
						"Není podporováno!",
						"Tato služba není nyní k dispozici",
						"Vstup uzamčen!",
						"Žádný název programu.",
						"Bez funkce",
						"Žádný Titulky"
						];
var channelNumberOverPromt = ["The number of search programs has exceeded,you can delete some programs and then retry!"];
var chBookingPromt	= ["Aktuální kanál má naplánované nahrávání, TV začne nahrávat.",
						"Bylo nalezeno naplánované nahrávání.\n Nahrávejte přepnutím na XXXX",
						"Pro aktuální kanál je nastaveno připomenutí.",
						"Bylo nalezeno naplánované připomenutí.\n Přepněte na XXXX"];
var timeUnit		= ["s","min."];
var ciPromt			= ["Data sítě byla změněna. Chcete-li provést aktualizaci, můžete spustit sken pro aktualizaci. ",];
var othersPromt		= ["Počkejte prosím...",];
var menuOptions		= ["Obraz ","Zvuk","Kanál","Smart TV","Síť","Systém","Podpora"];
var optionOptions	= ["Režim obrazu","Předn. zvuk","Zmrazit","T-Link","časový posun","PVR","Seznam nahrávek","Nastavení","*"];
var optionTLinkPromt= [["Automatické zapnutí","Autom. pohot. režim","Nab. průvodce"],
						["Zapnuto","Pohotov. režim","Zesilovač objem"]];
var powerPromt		= ["Televizor se brzy vypne! Akci zrušíte stisknutím jakéhokoli tlačítka."];
var ttxLanguage		= ["ZÁP EVR","VÝCH EVR","rusky","arabsky/hebrejsky","persky","arabsky","Hviderussisk","řecky","turecky"];
var ttxOptions		= ["Odkrýt","Procházet dílčí stránky","Jazyk","Strana alarmů","Newsflash"];
var weekday         = ["Neděle","Pondělí","úterý","Středa","čtvrtek","Pátek","Sobota"];
var lcnConfflict	= "Tento program má slabý příjem.";
var inShopMode		= "Váš televizor je v režimu obchodu. Pro domácí režim vyberte \"Systém\" a v nabídce změňte \"Umístění\".";
var nitRefresh		= "Síťová data se změnila. Chcete provést aktualizační prohledávání?";
var picHDMIMode     = ["Automaticky","Grafické","Video"];

var glassRemind    	= ["Spárujte prosím 3D brýle s TV\n(Držte tlačítko Napájení na 3D brýlích).","Vaše 3D brýle jsou připojeny k televizoru ",""];
var pvrRemind 		= ["Nevytahujte USB zařízení a nepřerušujte napájení"];
var pvrConName   	= ["PVR","Programové informace:",["Note: If you record the HD channel, please to select  the  disk(of speed >5.0MB/sec), and to select the disk (of speed >3.0MB/sec) when you want to record the SD channel.","Nahrané video je uloženo ve složce \"PVR\"."],"Zastavit","Záznam","hodina","Minuta","Délka","Tipy","Pomocí šipek nastavte délku nahrávání."];
var pvrDisRemind 	= "K nahrávání vložte USB klíčenku.";
var pvrRemindWords  = ["Chcete ukončit?",
							"Chcete zastavit nahrávání a prohlížet nahrané soubory?",
							"Disk je vyjmut",
							"Není dostatek volného místa.",
							"Žádné nahrané soubory. Začněte nahrávat.",
							"Osob. videorekordér nelze spustit v šifr. kanálu. ",
							"Funkce není dostupná",
							"Úspěšně uloženo.",
							"Chcete zastavit proces nahrávání a změnit vstupní zdroj?",
							"TV ukončí probíhající nahrávání. Chcete ukončit?",
							"Nahrávání PVR potřebuje pro správné fungování televizní signál. Zkontrolujte prosím signál."];
var pvrChangeCh 	= ["Chcete spustit kanál?",
							"Chcete zastavit proces nahrávání a změnit kanál?"];
var pvrChangeToPIN8	= ["Chcete změnit zdroj na zařízení připojené na vstup SCART?",
				    		"Chcete zastavit nahrávání a změnit zdroj na zařízení připojené na vstup SCART?"];
var pvrChangeToCEC  = ["Chcete změnit zdroj na zařízení připojené na vstup HDMI?",
				  			 "Chcete zastavit nahrávání a změnit zdroj na zařízení připojené na vstup HDMI?"];
var pvrGuideJump    = ["Chcete otevřít EPG?",
							"Chcete zastavit proces nahrávání a přejít na EPG?"];
var pvrMediaJump    = ["Chcete otevřít média?",
							"Chcete zastavit proces nahrávání a přejít na Media?"];
var timeshiftExtra	= ["Chcete zastavit časový posun a přepnout TV Změnit kanál?",
						"Chcete přerušit časový posun a změnit zdroj na zařízení připojené na vstup SCART?",
						"Chcete přerušit časový posun a změnit zdroj na zařízení připojené na vstup HDMI?",
						"Časový posun nelze spustit v šifr. kanálu. ",
						"Chcete přerušit časový posun a otevřít EPG?",
						"Chcete zastavit časový posun a přepnout TV do režimu USB?",
						"Chcete zastavit časový posun a přepnout Změnit vstupní zdroj?",
						"K nahrávání vložte USB klíčenku.",
						"Velikost disku není dostačující.",
						"TV ukončí aktuální časový posun. Chcete ukončit?"];
var timeshiftStatus	= ["Rychle zpět","Zastavit","Přehrát","Pauza","Rychle vpřed"];
var pvrPowerOffRemind= ["Nahrávání v pohotovostním režimu","Pohotov. režim","TV nyní nahrává, chcete pokračovat v záznamu, když bude televizor v pohotovostním režimu?"];
var timeshiftInitTitle= "Nastavení disku";
var timeshiftInitReminds= ["Tento průvodce se používá pro nastavení disku USB na časový posun. Vyberte prosím režim nastavení.",
						 "Pro lepší výkon doporučujeme disk USB naformátovat. Tím se vymažou všechna data.",
						 "Vyberte prosím velikost souboru pro časový posun.",
						 "Formátování",
						 "Není dostatek volného místa.",
						 "Vytvoření souboru časového posunu",
						 "Testování rychlosti",
						 "Rychlost disku je pro umožnění funkce časového posunu příliš nízká (< %f MB/sek)!",
						 "Disk je připraven pro časový posun. Avšak doporučujeme změnit disk (rychlost > %f MB/sek) pro lepší výkon.",
						 "Disk je připraven pro časový posun. "];
var timeshiftInitButtons= ["Formátovat","Přeskočit","Storno","Ok","Dokončit","Konec"];
var timeshiftInitOther=["Rychl. disku:","MB/s"];

var selectChoice	= "Opravdu?";
var chAtvStore		= "Uložit jako XXXX";
var chEpgFirstGenreUK= ["Kino","Novinky a fakta","ZÁBAVA","Sport","Pro děti","Vzdělávání","Životní styl","Dramatické umění"];
var homePageTitleList = ["Aplikace","TV","Videa","Domovská stránka"];
var homePageFavAndAllName  = ["Oblíbené aplikace","Všechny aplikace"];
var homePageBackUp = ["Elektronická příručka","PrůvodceZap"];
var homePageRemind   = ["Všechny funkce jsou k dispozici pouze po připojení k síti.","Vaše TV ještě nemá žádné kanály. Programy jsou dostupné po skenování kanálů.","Žádný program","Vyhledávát kanály nyní?"];
var homePageHistory = ["Historie"];
var miracastTitle = ["Zobrazení Wi-Fi","Zařízení TCL"];
var miracastRemind=["Funkcia Zobrazení Wi-Fi umožňuje bezdrôtovo (tzn. bez káblov) zdieľať obrazovku a zvuk zo zariadenia, ako je napríklad smartfón alebo tablete, na televízore. Vďaka tomu môžete súčasne pozerať na televízore to isté, čo sa zobrazuje na smartfóne alebo tablete. Môžete napríklad na smartfóne spustiť video a zobrazovať ho súčasne na televízore, prípadne môžete použiť tablet ako herný ovládač s obsahom zobrazeným na veľkej obrazovke televízora.","WiFi TV vstup na televizoru je připravený. Začněte prosím sdílet obrazovku svého zařízení s televizorem.","Připojuji se. Čekejte, prosím!","Neúspěšné připojení!","Připojení se nezdařilo. Zkontrolujte, prosím!"];
var homePageLittleWin = ["Nastavení","Média","Obl. kanály","Smart TV","EPG"];

var hbbtvStopRemind  = ["Chcete přerušit přehrávání?"];
var colorSystem = ["Automaticky","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Stiskněte ≡ pro více informací";
var emptyListInfo = "K TV není připojen žádný přístroj!";
var optionVideoListArray_1 = ["Režim obrazu", "Předn. zvuk", "Režim přehrávání", "Režim obrazovky", "3D režim", 
							  "Přepínač L/P oka", "Hloubka pole", "Titulky", "Zvuková stopa", "Název", "Kapitola", "Info"];
var optionVideoListArray_2 = ["Režim obrazu", "Předn. zvuk", "Režim přehrávání", "Režim obrazovky", 
							  "Titulky", "Zvuková stopa", "Název", "Kapitola", "Info"];
var bottomTipsText = ["Přehrávání/pauza", "Rychle zpět", "Rychle vpřed", "Seznam skladeb", "Nastavení"];
var picturePresetArray = ["Standardní", "Dynamický", "Přírodní", "Kino", "Uživatel"];
var videoPlayModeArray = ["Opakovat vše", "Opakovat jednu", "Normální"];
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Πλατιά Μεγέθυνση", "Μεγέθυνση 2", "Πλατιά Μεγέθυνση 2", "Άπλωμα Μεγέθυνσης", "Automaticky"];
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "Μεγέθυνση 14:9", "Μεγέθυνση 16:9", "Μεγέθυνση 16:9", "Automaticky"];
var Mode3DArray = ["Vyp", "2D na 3D", "Snímky vedle sebe", "Snímky pod sebou", "Prokládání řádků"];
var videoOptionListArray = ["Vyp", "Skladba", "Titulky", "Název", "Kapitola"];
var subMenuTitleText = "Titulky";
var langMenuTitleText = "Jazyk zvuku";
var titleMenuTitleText = "Název";
var mode3DMenuTitleText = "3D režim";
var langInfoText = "Skladba";
var STOP_RESUME_INFO = "Zastav.-pokrač.";
var playListName = " název";
var eb_tips = "Tipy";
var ok_button = "Ok";
var eb_info = ["Chyba dekódování zvuku.", "Chyba dekódování video.", "Zvukový formát není podporován.", 
			   "Videoformát není podporován.", "Tento soubor není možné otevřít.", "Chyba přehrávání, zkuste prosím znovu.",
			   "Nepodporovaný formát souboru.", "Přehrávač přestal správně fungovat.",
			   "Cesta k souboru neexistuje nebo je neplatná.\n Vložte znovu paměťové zařízení a opakujte.",
			   "Pokračovat v přehrávání od předchozího\n stavu přehrávání?"];
var picturePlayErrorTips = ["Chyba načítání!!!","Snímek je příliš velký!!!","Chyba sítě!!!","Chyba vlákna!!!","Chyba parametrů!!!","Neznámá chyba!!!"];
var frameTitleText = "Nové zařízení";
var eb_quit_info = "Určitě chcete odejít?";
var eb_yes = "ANO";
var eb_no = "NE";
var offinfo = "Vyp";
var naInfo = "Null";
var consoleInfoArray = ["Rychle zpět", "Rychle vpřed", "Přehrávání/pauza", "Seznam skladeb"];
var cantOperateText = ["Funkce není podporována."];
var chapterChangeInfo = "K dispozici jsou pouze kapitoly od 1 do XXXX.";
var metaDataArray = ["Titul/vydání - metadata: ", "Kapitola - metadata: ", "Audio - metadata: ", "Podtitulek - metadata: "];
var metaTitleInfo = "Název";
var metaChapterInfo = "Kapitola";
var videoLoadingInfo = "Probíhá analýza...";
var listLoadingInfo = "Probíhá nahrávání...";
var pgInfo = "Zákonné hodnocení: ";
var fileNameText = " název";
var fileDateText = "Datum";
var fileSizeText = "Velikost";
var fileDurationText = "Délka";
var fileDirectorText = "Režie";
var fileCopyrightText = "Copyright";
var fileArtistText = "Autor";
var fileAlbumText = "Album";
var fileGenreText = "Žánr";
var fileYearText = "Rok";
var fileGenreText = "Žánr";
var mainListArray = ["Vše", "Obraz ", "Video", "Hudba"];
var sortArray = [" název", "Datum"];
var parserArray = ["Normální", "Rekurzivní  "];
var emptyTipsInfo = "Nebyl nalezen žádný podporovaný soubor.";
var emptyFolderInfo = "Nebyl nalezen žádný podporovaný soubor.";
var sortName = "Seřadit podle";
var parserName = "Parser";
var divx_str1 = "Registrace DivX®";
var divx_str2 = "Zrušení registrace DivX(R)";
var infor_str = "Info";
var quickMenuEmptyText = "Žádné dostupné možnosti.";

var musicSoundPresetArray = ["Standardní", "Kino", "Hudba", "Jasný hlas", "Uživatel"];
var musicInformationArray = [" název", "Autor", "Album", "Žánr:", "Rok:", "Doba trvání:"];
var playListName = " název";
var playTipsInfo = ["Přehráváte první soubor.", "Přehráváte poslední soubor."]
var musicNameInfo = "Name";
var musicArtistInfo = "Autor";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Předn. zvuk";
var optionBGMInfo = "Přehrávat na pozadí";
var optionAudioOnlyInfo = "Pouze zvuk";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX připojeno k TV!";
var tvRemoteTitle		= "Dálkový ovládač";
var tvRemoteDeveloper	= "Aplikaci vyvinula společnost TCL";
var tvRemoteDeviceTitle	= "Název zařízení:";
var remoteOption		= ["Sdílení médií","Dálkové ovládání","Nápověda","O aplikaci","Chytré připojení"];
var remotebottom		= " Stáhněte si prosím \"TV Remote\" do svého telefonu ";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Sdílení fotografií, videa a hudby s televizí přes telefon.",
							"Kroky: \n   1. Klepněte na \"TV Remote\" na telefonu. Spojte telefon s TV přes stejnou WiFi síť;\n   2. Klepněte na \"Sdílení médií\" p procházejte mediální soubory;\n   3. Pošlete média do televize pro přehrávání (s jednou z následujících možností)",
							"      a) Přetáhněte složku nebo soubor na ikonu televizoru v horní části obrazovky.\n      b) Mávněte telefonem směrem k televizoru a spusťte tak první soubor.\n      c) Přehrajte média v telefonu a klepněte na ikonu sdílení s televizorem.",
							"   4. Chcete-li během přehrávání v televizoru přehrát předchozí nebo další soubor, zatřeste telefonem."];
var controlReminds		= ["Použijte telefon jako dálkové ovládání k televizoru.",
							" ",
							"Kroky: \n   1. Klepněte na \"TV Remote\" na telefonu. Spojte telefon s TV přes stejnou WiFi síť;\n   2. Klepněte na \"Dálkové ovládání\" pro ovládání televizoru."];
var helpDeviceWords		= "Interakce s více obrazovkami";
var helpBottom			= " V době cloudových technologií jsou chytrá zařízení jako telefon a televizor vzájemně propojená. Sdílejte média se svou rodinou na jakékoliv obrazovce a ovládejte televizor ze svého telefonu! ";
var helpReminds			= ["Příprava\n   1. Stáhněte si a nainstalujte \"TV Remote\" z Google Play nebo z Apple Store.\n   2. Spojte telefon s TV přes stejnou WiFi síť.",
							" ",
							"Doporučení pro telefon\n   1. Procesor: více než 800 MHz\n   2. Úložiště: alespoň 80 MB volného místa",
							" ",
							"Vyloučení odpovědnosti\n  Není-li TV Remote dostupné na vašem telefonu, obraťte se prosím na výrobce telefonu. "];
var helpButtons			= ["Předešlý","Další"];
var aboutReminds		= ["Dálkový ovládač","Aplikaci vyvinula společnost TCL"];
var aboutExit			= "Konec";
var smartReminds		= ["Rychlé a inteligentní spojení mezi telefonem a televizorem.",
							" ",
							"Kroky \n   1. Připojte televizor a chytrý telefon ke stejné síti LAN. Klepněte na \"TV Remote\" na chytrém telefonu.\n   2. Klepněte na \"Chytré připojení\" pro naskenování QR kódu.\n   3. Když je televizor v režimu obrazu vysílání, stiskněte tlačítko INFO na dálkovém ovládání televizoru na 4 sekundy. Otevře se QR kód přes celou obrazovku.",];
var smartQRReminds		= ["Klepněte na chytré připojení v TV Remote na vašem telefonu a naskenujte QR kód pro rychlé spojení televize a telefonu.",
							"QR kód obsahuje informace o LAN účtu. Dobře jej prosím uchovejte."];
							

var consoleTipArray = ["Předešlý","Další","Konzola","Seznam skladeb"];							
var optionInfoArray = ["Režim obrazu","Režim přehrávání","Délka","Efekt","Info"];

var playModeArray = ["Normální","Náhodně","Opakovat"];
var durationArray = ["Krátký (5 s)", "Střední (10 s)", "Dlouhý (15 s)"];
var effectArray = ["Žádný", "Otočit", "Posun doprava", "Posun doleva", "Posun nahoru", "Posun dolů", "Čtverec dovnitř", "Čtverec ven", "Náhodně"];
var infoArray = ["Název:","Velikost:","Datum:","Místo"];

var picturePresetBarTitleInfo = "Režim obrazu";
var picturePresetBarArray = ["Standardní","Dynamický","Studio","Kino","Uživatel"];
var upTipsInfo = "Posunutí obrázku"; //add yums 2014-10-10
var consoleTipsArray = ["Konzola","Předešlý","Další","Seznam skladeb","Nastavení"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Znovu stiskněte DOPRAVA pro přehrání dalšího obrázku","Znovu stiskněte DOLEVA pro přehrání předchozího obrázku","Znovu stiskněte DOLŮ pro zobrazení seznamu skladeb"]; //add yums 2014-10-10

var optionPvrListArray = ["Režim obrazu","Předn. zvuk", "Režim obrazovky", "3D režim", "Titulky", "Zvuková stopa", "Info"];							
	
var titleSpanFirstArray = ["Ovládání a připojení","Základní operace","Aplikace","TV","Nastavení","FAQ"];
var titleSpanSecondArray = [["Dálkové ovládání","Tlačítka na panelu","Snadná navigace","Připojení k TV","Připojení k TV","Připojení k TV","Bezdrátové"],["Spouštěč","Stavový řádek","Zdroj"],["Spušptěné aplikace","Média","Dálkový ovládač"],["Upravit kanál a hlasitost","Seznam kanálů","EPG","Kanály","Oblíbené kanály"],["Nastavení obrazu","Nastavení zvuku","Nastavení kanálu","Aktualizace softwaru ","Jazyk","Rodičovský zámek"],["Často kladené otázky","Často kladené otázky","Odstraňování problémů","Odstraňování problémů","Obchodní podmínky"]];
var contentSpan1_1Array =[["NAPÁJENÍ:","ZDROJ:","NASTAVENÍ:","MOŽNOST:","ZPĚT:","INFO:","DOMŮ:","KONEC:","SEZNAM:"],
    ["Zapne nebo uvede do pohotovostního režimu",
        "Vyberte vstupní zdroj",
        "Slouží k zobrazení nabídky Nastavení",
        "Slouží k zobrazení nabídky Možnost",
        "Vraťte se do předchozí nabídky nebo spuštěnou aplikaci ukončete",
        "Zobrazí informace o programu",
        "Slouží k přístupu na domovskou stránku SmartTV",
        "Vraťte se do předchozí nabídky nebo spuštěnou aplikaci ukončete",
        "Zobrazí seznam kanálů"]];
var contentSpan1_2Array = ["Předchozí kanál","Následující kanál","Zvýšit hlasitost","Snížit hlasitost","Přejde na domovskou stránku","Potvrdit volbu","Pohotovostní režim/Zapnutí"];
var contentSpan1_3Array = ["OK/Průvodce","O kanál výš","O kanál níž","Snížit hlasitost","Zvýšit hlasitost","Dostupné jako šipky v některých funkcích."];
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","Adaptér AV OUT","LAN","Chytrý telefon","PC/Set-top box/DVD","Audio zesilovač","Audio zesilovač/monitor","Váš televizor nemusí mít všechny zdířky."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Sluchátka","Adaptér AV IN","SPDIF","Adaptér CMP AUDIO IN","Adaptér CMP IN (YPbPr)","USB zařízení","USB zařízení","Sluchátka","DVC/herní konzole/Set-top box/DVD","Audio zesilovač","DVC/herní konzole/Set-top box/DVD","Váš televizor nemusí mít všechny zdířky."];
var contentSpan1_6Array = ["Společné rozhraní","SD","VGA","SCART","Mini SCART","ANTÉNA IN","Karta PCMCIA","Karta SD","PC","Set-top box/DVD","Anténa/kabel/satelit","Váš televizor nemusí mít všechny zdířky."];
var contentSpan1_7Array = ["Tablet","PC","Směrovač","Telefon","TV"];
var contentSpan1_8Array = ["Funkce přepínání/napájení","Dlouhým stisknutím přejdete na čas režimu spánku","Dolů","Nahoru","Hlasitost/kanál/zdroj"];

var contentSpan2Array = [["Stiskněte šipky pro zobrazení domovské stránky.","Stiskněte tlačítko OK pro sledování některého z doporučených programů nebo pro otevření aplikace."],["Zobrazit datum, síť a zařízení atd. v horním pravém rohu obrazovky."],["Vyberte vstupní zdroj ze zařízení připojených k televizoru prostřednictvím různých portů, jako je TV, AV, HDMI atd."]];

var contentSpan3Array = ["Užijte si a procházejte své oblíbené aplikace prostřednictvím stránky Smart TV","Prohlížejte fotografie, sledujte video a přehrávejte hudbu z paměťového zařízení USB.","Připojte televizor a chytrý telefon nebo tablet ke stejné síti LAN","Klepněte na nScreen nebo TV remote na chytrém telefonu nebo tabletu","Sdílejte fotografie, videa a hudbu na více obrazovkách se svou rodinou a ovládejte televizor prostřednictvím svého chytrého telefonu."];

var contentSpan4Array = [["Stiskněte nahoru/dolů pro přepínání kanálů","Stiskněte doleva/doprava pro nastavení hlasitosti"],["Pro zobrazení kanálů stiskněte tlačítko LIST na dálkovém ovládání","Stiskněte nahoru/dolů pro výběr kanálu"],["EPG je průvodce na obrazovce, který zobrazuje naplánované televizní programy. Můžete procházet, vybírat, prohlížet a nahrávat programy."],["Hledat a uložit kanály"],["Přidejte nebo upravte své oblíbené kanály v seznamu kanálů"]];

var contentSpan5Array = ["Vychutnejte si své oblíbené programy prostřednictvím video aplikací"];

var contentSpan6Array = [["Stiskněte Možnost pro zobrazení možností nastavení systému","Otevřete Nastavení obrazu pro úpravu hodnot"],["Stiskněte Možnost pro zobrazení možností nastavení systému","Otevřete Nastavení zvuku pro nastavení možností"],["Stiskněte Možnost pro zobrazení možností nastavení systému","Otevřete Nastavení kanálu pro nastavení možností"],["Aktualizovat televizor, když je k dispozici nová verze softwaru"],["Můžete si vybrat svůj preferovaný jazyk nabídky"],["Umožňuje rodičům zamknutí kanálů nebo programů, které nejsou vhodné pro děti"]];

var contentSpan7_1Array = [["Žádný obraz, žádný zvuk","Zkontrolujte, zda pojistka nebo jistič funguje.","Připojte do zásuvky jiné elektrické zařízení, abyste se ujistili, že zásuvka funguje nebo je zapnutá.","Elektrická zástrčka má špatný kontakt se zásuvkou","Zkontrolujte zdroj signálu."],["Normální obraz, žádný zvuk","Stiskněte tlačítko pro zvýšení hlasitosti a zvyšte hlasitost.","Nastavení zvuku je nesprávné.","Chyba signálu z vysílání."],["Normální zvuk, žádný obraz","Nastavte jas a kontrast","Chyba signálu z vysílání.","Zkontrolujte, zda není v režimu pouze zvuk."]];
var contentSpan7_2Array = [["Rušení rádiových frekvencí","Toto rušení je zdrojem pohybujícícj se vln nebo šikmých pruhů a v některých případech ztrátu kontrastu obrazu. Najděte a odstraňte zdroj rádiového rušení."],["Chybí barva","Upravte nastavení barev.","Vyzkoušejte jiný kanál. Možná přijímáte černobílý program."],["Dálkové ovládání nefunguje","Výměňte baterie.","Baterie nejsou správně vloženy. Hlavní napájení televizoru není připojeno."]];
var contentSpan7_3Array = [["Obsah USB zařízení není zobrazen","Zkontrolujte, že USB zařízení je kompatibilní s televizorem.","Zkontrolujte, že televize podporuje formáty souborů zvuku a obrazu."],["Přehrávání bez zvuku","Televizní přehrávač nepodporuje formát audio souboru videa."],["Soubory se nepřehrávají hladce","Přenosový výkon paměťového zařízení USB může omezit rychlost přenosu dat do televizoru."]];
var contentSpan7_4Array = [["Na co mám dávat pozor při aktualizaci software","Žádné výpadky elektřiny při aktualizaci softwaru.","Při aktualizaci software se vyvarujte jakýmkoliv operacím s dálkovým ovládáním.","Buďte trpěliví, protože aktualizace softwaru může trvat o něco déle."],["Po aktualizaci softwaru nedojde k žádným zjevným změnám rozhraní televizoru.","Za určitých podmínek může při aktualizaci software dojít nejen k aktualizaci nebo přidání nových funkcí, ale také ke zlepšení výkonu televizoru bez zjevných změn rozhraní. Rozhraní televizoru může někdy také zůstat nezměněné."]];
var termsTitle = "Obchodní podmínky";
var termsConditions = ["(Zákonné prohlášení) společnosti TCL - výrobce tohoto televizoru. ","Kvůli různým možnostem výrobků s vlastnostmi Smart TV – služby i omezení dostupného obsahu, určité vlastnosti, aplikace a služby nemusí být dostupné na všech zařízeních nebo ve všech oblastech. Některé funkce Smart TV mohou také vyžadovat doplňková periferní zařízení nebo poplatky za členství, které jsou prodávány samostatně. Více informací o konkrétních funkcích zařízení a dostupnosti obsahu naleznete na našich webových stránkách. Služby a dostupnost obsahu Smart TV podléhají čas od času změnám bez předchozího upozornění. \n   Veškerý obsah a služby přístupné přes toto zařízení náležejí třetím stranám a jsou chráněny autorským právem, patentem, ochrannou známkou a/nebo zákony o duševním vlastnictví. Takovýto obsah a služby jsou poskytovány výhradně pro osobní nekomerční využití. Nesmíte jakýkoliv obsah nebo služby používat způsobem, který není autorizován vlastníkem obsahu nebo poskytovatelem služeb. Výše uvedený software můžete používat bez omezení, je-li výslovně udělena autorizace příslušného obsahu vlastníkem nebo poskytovatelem služeb jinak nesmíte modifikovat, kopírovat, znovu publikovat, uploadovat, posílat, přenášet, překládat, prodávat a vytvářet nepůvodní práce, zneužívat nebo distribuovat jakýmkoliv způsobem nebo medializovat jakýkoliv obsah nebo služby zobrazené na tomto zařízení. \n   OSOBNĚ VÝSLOVNĚ UZNÁVÁTE A SOUHLASÍTE, ŽE UŽÍVÁNÍ TOHOTO ZAŘÍZENÍ JE NA VAŠE VÝHRADNÍ RIZIKO A ŽE CELÉ RIZIKO, POKUD JDE O USPOKOJIVOU KVALITU, CHOD ZAŘÍZENÍ A PŘESNOST, JE NA VÁS. ZAŘÍZENÍ, VEŠKERÝ OBSAH TŘETÍ STRANY A SLUŽBY JSOU POSKYTOVÁNY „TAK, JAK JSOU“ BEZ JAKÉKOLIV ZÁRUKY, AŤ JIŽ VYJÁDŘENÉ VÝSLOVNĚ ČI KONKLUDENTNĚ. SPOLEČNOST TCL SE VÝSLOVNĚ ZŘÍKÁ VŠECH ZÁRUK A PODMÍNEK TÝKAJÍCÍCH SE TOHOTO ZAŘÍZENÍ A JAKÉHOKOLIV OBSAHU A SLUŽEB VYJÁDŘENÝCH VÝSLOVNĚ NEBO KONKLUDENTNĚ, VČETNĚ NAPŘÍKLAD ZÁRUK PRODEJNOSTI, USPOKOJIVÉ KVALITY, ZPŮSOBILOSTI PRO URČITÝ ÚČEL, PŘESNOSTI, NERUŠENÉHO UŽÍVÁNÍ A BEZ NEOPRÁVNĚNÉHO ZÁSAHU DO PRÁV TŘETÍ STRANY. SPOLEČNOST TCL NEPOSKYTUJE ZÁRUKU NA PŘESNOST, PLATNOST, VČASNOST, LEGÁLNOST NEBO KOMPLETNOST JAKÉHOKOLIV OBSAHU NEBO SLUŽBY, KTERÉ JSOU DOSTUPNÉ PŘES TOTO ZAŘÍZENÍ A NEZARUČUJE, ŽE TOTO ZAŘÍZENÍ, OBSAH NEBO SLUŽBY BUDOU SPLŇOVAT VAŠE POŽADAVKY NEBO ŽE FUNKCE TOHOTO ZAŘÍZENÍ NEBO SLUŽEB NEBUDE NARUŠENA ČI BEZCHYBNÁ. ZA ŽÁDNÝCH OKOLNOSTÍ VČETNĚ NEDBALOSTI NEBUDE SPOLEČNOST TCL ODPOVĚDNÁ, AŤ JIŽ SMLUVNĚ, NEBO PŘI ÚMYSLNÉM PORUŠENÍ PRÁV, ZA JAKÉKOLIV PŘÍMÉ ČI NEPŘÍMÉ, ZVLÁŠTNÍ NEBO VYPLÝVAJÍCÍ ŠKODY, PENÁLE, VÝDAJE NEBO PŘI JAKÝCHKOLIV ŠKODÁCH VZNIKLÝCH Z NEBO VE SPOJENÍ S JAKOUKOLIV OBSAŽENOU INFORMACÍ NEBO V DŮSLEDKU POUŽITÍ TOHOTO ZAŘÍZENÍ NEBO V RÁMCI JAKÉHOKOLIV OBSAHU NEBO SLUŽBY, KE KTERÝM PŘISTUPUJETE VY NEBO JAKÁKOLIV TŘETÍ STRANA, I KDYBY BYLA VYJÁDŘENA MOŽNOST TAKOVÝCHTO ŠKOD. \n   Služby třetích stran mohou být změněny, pozastaveny, vyjmuty, ukončeny nebo přerušeny nebo přístup může být po určitou dobu blokován bez upozornění a společnost TCL (výrobce značky televizorů Thomson) neposkytuje žádná fakta nebo záruky týkajícího se jakéhokoliv obsahu nebo služby, která zůstává k dispozici po jakoukoliv dobu. Obsah a služby jsou přenášeny třetími stranami pomocí sítí a přenosovými prostředky, nad kterými nemá společnost TCL žádnou kontrolu. V rámci tohoto zřeknutí se práv v univerzálním pojetí bez omezení se společnost TCL výslovně zříká jakékoliv odpovědnosti nebo ručení za jakoukoliv změnu, přerušení, deaktivaci, vyjmutí nebo pozastavení jakéhokoliv obsahu nebo služby, ke kterým toto zařízení přistupuje. Společnost TCL může nařídit omezení v použití nebo v přístupu k určitým službám nebo obsahu za všech okolností a bez upozornění nebo odpovědnosti. Společnost TCL není zodpovědná ani neručí za služby zákazníkům, které se vztahují k obsahu nebo službám. Jakákoliv otázka či požadavek týkající se obsahu nebo služeb by měla být adresována přímo poskytovateli příslušného obsahu nebo poskytovatelům služeb."];

var noChannelListRemind        = ["Žádné kanály nenalezeny. Seznam kanálů je k dispozici po skenování kanálů.","Vyhledat kanály"];
var closeSubtitleRemind   = "Funkce bude k dispozici, když budou titulky vypnuty. Chcete nyní provést nastavení?";

var estickerTitles = ["Velmi realistické obrazy","Barvy, které ožívají","Velmi realistický pohyb","Kvalita dynamického obrazu","SR UHD upscaling","Svět 3D zkušeností","Rychlejší výkon","Budoucí obsah 4K","Užijte si online svět","Přístup k extra obsahu","Integrované digitální tunery","Připojit všechna zařízení","Různé zdroje 4K","Obsah USB","Ultra rychlé WiFi","Mobilní obsah v televizi","Obsah mobilního zařízení","Lokální obsah","Schváleno DivX","Nekonečný obraz","Kanál připraven","TDT Premium"];

var estickerDescriptions = ["Úžasný zážitek ze sledování díky obrazu se čtyřnásobným detailem obrazovky Full HD na UHD","Široká škála barev přináší emoce v každé scéně s živě červenou barvou a smaragdově zelenou","Interpolace rámu 4K a podsvícení proti problémům s rozostřením při pohybu","Živost původního obrazu je zvyšována s cílem vytvořit opravdu dynamický výraz s vynikajícím kontrastem","Užijte si televizní pořady a Blu-Ray disky ostřejší než kdy předtím díky technologii Super Resolution","Vychutnejte si televizor 3D ready sledujte různý 3D obsah","Příjemnější zábava díky Quad Core pro hladkou interakce, zvýšený výkon","Podpora kodeku HEVC (H.265) pro nadcházející standard distribuce videa 4K","Množství online aplikací, VOD služeb, sledování televize a brouzdání po Internetu","Více s doplňkovými službami a obsahem z vašeho oblíbeného televizního vysílání","Přístup k televizním kanálům ve vysokém rozlišení bez dalšího set-top boxu","Snadné připojení mnoha digitálních zdrojů, které jsou k dispozici doma","Televizor připravený na budoucnost, možnost přehrávání 4K 50/60Hz přes HDMI 2.0 s HDCP 2.2","Video nebo fotografie přímo z USB disku, pevného disku nebo fotoaparátu na velkou obrazovku v rozlišení 4K","Nejnovější generace 2x2 MIMO a AC standard přináší bezkonkurenční rychlost internetového připojení","Užijte si fotografie, videa, aplikace z mobilních zařízení na velké obrazovce díky technologii zrcadlení obrazovky","Fotografie, videa, aplikace z telefonu nebo tabletu lze zobrazit na velké obrazovce ","Zobrazit na velké obrazovce místní obsah, jako jsou fotografie, videa ze zařízení připojených k místní síti","Přehrát vypůjčené nebo vlastní filmy chráněné DivX","Ultra úzké zkosené hrany a super tenký design","Testováno a schváleno Canal+","Testováno a schváleno TDT Premium"];							

var eManualTextArray = ["Elektronická příručka","Všechny grafické prvky uvnitř jsou pouze pro ilustraci."];
var frontPanelRemind = "Čelní panel uzamčen.";
var eRPRemind		 = "Režim Shop (Obchod) nemůže splnit požadavek ERP. Opravdu?";	
var noRelatedChannel = "Žádný související kanál";
var option0624Name          = ["BOP","BFS","Výpis událostí","GetUserID","BGM","Reset all","Reset shop","NRM","Volba DVB-T2 a Země","Režim HbbTV"];
var DVBT2AndChoice = ["Zap","Podle země","Vyp"];
var hbbtvServiceRemind = "Služba HbbTV již bude brzy k dispozici.";
var insertWord = "Vložit";		
var viewDetail = "Zobrazit podrobnosti";							

var remindOAD  = "Aktualizace softwaru. Nová doporučovaná aktualizace softwaru může existovat na jiném kanálu. Akceptujete-li její stažení, může na kanál přejít automaticky. Chcete toto provést právě nyní?";

var LEDStatus = ["Blikání", "Normální","Vyp"];
var netFlixRemind = "Touto funkcí přerušíte přístup ke službám společnosti Netflix do doby, než se opět přihlásíte.";
var ESNExplanation = "Elektronické sériové číslo";
var resetShopRemind = "Nyní probíhá resetování systému, nevypínejte televizor";
var initialSelectOption = "Vyberte jednu možnost:";
var databaseRemind   = "Systém identifikoval databázi jako z nějakého neznámého důvodu poškozenou a automaticky ji znovu vytvořil. Pokračujte stisknutím tlačítka OK";
var Deactivation = "Deaktivace";
var oadFutureRemind = "Aktualizace softwaru.\n Nová doporučená aktualizace softwaru bude k dispozici za % s. Aktualizace může nějakou dobu trvat a obrazovka může zčernat. Během aktualizace nevypínejte přijímač. Jestliže chcete tuto aktualizaci nainstalovat, ponechejte v naplánovaném čase přijímač zapnutý. Chcete tuto aktualizaci přijmout?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Výstup zvuku";
var bt_soundOutPutTV = "TV reproduktory";
var bt_soundOutPutBT = "Zařízení Bluetooth";
var bt_soundOutPutBT_TV = "Bluetooth a TV";
var bt_refreshBarName = "Zařízení";
var bt_settingTips_On = "Zapne funkci Bluetooth a vyhledá zařízení.";
var bt_settingTips_Finding = "Hledám dostupná zařízení…";
var bt_settingTips_NoDevice = "Žádná dostupná zařízení.";
var bt_deviceList_State_NoConnect = "Nepřipojeno";
var bt_deviceList_State_Connecting = "Připojuji se…";
var bt_deviceList_State_Connected = "Připojeno";
var bt_deviceList_State_Paired = "Spárováno";
var bt_deviceList_Conncect_Failed_Tips1 = "Připojení selhalo.";
var bt_deviceList_Conncect_Failed_Tips2 = "Přesvědčte se, zda má XXX zapnuté Bluetooth";
var bt_deviceList_Conncect_Success = "Připojeno k zařízení Bluetooth.";
var bt_deviceList_Disconncect_Success = "Odpojeno od zařízení Bluetooth.";
var bt_deviceList_Disconnect = "Opravdu se chcete odpojit od XXX?";
var bt_tipsTitle = "Tip";
var bt_bluetooth_Pairing_Title = "Párování Bluetooth";
var bt_bluetooth_Input_Pin = "Zadejte prosím PIN:";
var bt_bluetooth_Output_Pin_Tip = "Zadejte PIN XXXX na klávesnici.";
var bt_bluetooth_Pin_Wrong_Tip = "Špatné PIN";
var bt_bluetooth_Remove_Pair_Title = "Dotaz";
var bt_bluetooth_Remove_Pair_Ask = "Zapomenout zařízení?";							
							
var audioDescriptionName = ["Automatický popis","Reproduktor","Hlasitost reproduktoru","Sluchátka","Hlasitost sluchátek","AD Hlasitost","Zařízení BT","Hlasitost zařízení BT","Zesilovač","Reproduktor"];
var audioDescriptionOptions = ["Vyp","Normální","Automatický popis"];
var volumeOffRemind = 'V nabídce Nastavení nastavte možnost XXX na hodnotu „Zapnout“.';	
var switchSourceRemind   = " Vloženo. Chcete nyní provést přepnutí?";
var footballModeName = "Režim Sport";
var resetStadium = "Stadion";								
							
							
var atvSearchMenu = "ATV manual search";
var dtvSearchMenu = "DTV manual search";
var settingNoticeSourceName ="Autom. zdroj";

var smartTVOptions		= ["Portál Smart TV","HbbTV","Prohlížení obsahu a jeho sdílení","Zobrazení Wi-Fi","Smluvní podmínky",
    "Síťový pohotovostní režim","Resetovat funkci smart TV","Cookie policy","Zásady ochrany osobních údajů","Odstranění dat"];
var supportOptions		= ["Vzdálená diagnostika","Obraťte se na nás"];
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

var tvDoctor=["Vzdálená diagnostika 2.0",
"Aplikace funguje pouze u funkce Smart TV za účelem spuštění diagnostických kontrol a zlepšení používání výrobku. Tato aplikace shromažďuje provozní údaje televizoru a informace o modelu a odesílá je na server. Údaje se pak využívají k řešení problémů s televizorem. Vaše osobní údaje přístupné nebudou. Zkontrolujte, zda je televizor řádně připojen k internetu.",
"Místní diagnostika",
"Jakmile dojde ke spuštění diagnostiky, postupujte podle pokynů našeho pracovníka podpory.",
"Vzdálená diagnostika",
"Před jejím použitím zkontrolujte, zda je náš pracovník podpory online.",
"Sériové číslo:",
"&nbsp;&nbsp;&nbsp;&nbsp;Uživatelské jméno:",
"Probíhá připojování…",
"Probíhá diagnostika. \nZachovejte řádné připojení k síti.  ",
"Nelze získat přístup k internetu. \nZkontrolujte připojení k síti.",
"Konec"
];
var contactUsOption = ["Obraťte se na nás",
    "Máte-li problémy s provozem tohoto zařízení, obraťte se na společnost nás.",
    "Obraťte se na společnost nás",
    "Web: Navštivte web",
    "Zavolejte číslo centra:","Informace o výrobku","Název modelu:",
    "Verze software:","","Uživatelské jméno:","ID projektu:",
    "Typ klienta:","Adresa MAC v bezdrátové síti:","Adresa MAC v kabelové síti:","Netflix ESN:","Vyhledejte informace na mobilním telefonu.",
    ", poté vyberte svou zemi."];


//本地launcher的翻译，与服务器无关，只用于本地launcher
var homePageWords = ["Historie", "Hledat"];//home页的翻译
var titlePageWords = ["Domů", "Videa","TV","Aplikace"];//index的标题翻译
var videosPageWords = ["Kino", "Sport","Hudba","Oblíbené","Hra","Vzdělávací","Zprávy"];//videos页的内容翻译

//同时应用于本地和服务器
var statusPageWords = ["USB","Nastavení","Wi-Fi","Kabelem"];//状态栏的翻译

//二级页面的翻译
var searchPageWords = ["Hledat", "Oblíbená vyhledávání:","Show, Filmy, Lidé..."];
var resultSearchPageWords = ["Výsledky týkající se výrazu"," ", "Zkuste jiná klíčová slova.","Je nám líto, nebylo nalezeno žádné video týkající se výrazu"," "];
var historyPageWords = ["Historie", 'Stisknutím tlačítka','odstraníte historii',"Odstranit jeden","Odstranit vše","Včera","Dnes"," Dosud jste nesledovali žádná videa.","Historie sledování byla úspěšně odstraněna!"];
var channelPageWords = ["Je nám líto, nebylo zatím nalezeno žádné video."];


//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9",
                       	   "Zoom-","0","Zoom+",
                       	   "Konec","0","",
                       	   "Seznam","0","Text",
                       	   "Průvodce","Potvrdit","Konec",
                       	   "Menu","Titulky","Info",
                       	   "Konec",
                       	   "Info","Menu","Konec",
                       	   "Konec"
                       	   ];

//added for LA sports mode
var sportsModeInitReminds= ["Tento průvodce slouží k nastavení disku USB na režim Sport. Vyberte režim nastavení.",
						 "Vyberte velikost souboru pro režim Sport.",
						 "Vytváření souboru pro režim Sport",
						 "Rychlost disku USB je pro režim Sport příliš nízká (< %f MB/s)!",
						 "Disk USB je připraven pro režim Sport. Pro lepší výkon však doporučujeme zvýšit jeho rychlost (na > %f MB/s).",
						 "Disk USB je připraven pro režim Sport."];

var sportsModeExtra	= ["Chcete ukončit režim Sport a změnit kanál?",
						"Chcete ukončit režim Sport a změnit zdroj na zařízení připojené ke vstupu SCART?",
						"Chcete ukončit režim Sport a změnit zdroj na zařízení připojené ke vstupu HDMI?",
						"Režim Sport není u šifrovaného kanálu podporován.",
						"Chcete ukončit režim Sport a spustit průvodce EPG?",
						"Chcete ukončit režim Sport a spustit média?",
						"Chcete ukončit režim Sport a změnit vstupní zdroj?",
						"Aktuální režim Sport se v televizoru ukončí. Chcete ukončit?"];
var remoteControlNote = "– Dodané dálkové ovládání se může lišit v závislosti na modelu produktu";


var textArray = ["Volume","Channel","Source","Switch/Power","Guide","seconds to Power OFF"];
var guideArray = ["VOL-","VOL+","CH-","CH+","Pre","Další"];
var favChannelListRemind = ["Žádné oblíbené kanály. Přejděte prosím na ostatní seznamy a použijte „Zelené tlačítko“ k přidání oblíbených kanálů."];

var proxySetting = ["Nastavení serveru proxy","Port"];
var powerOffShop = ["Doporučujeme použít režim Obchod. Pokračovat v něm?"];
var tcastTextPageWords = ["Velké množství videí, bohatá řada aplikací","Dálkové ovládání TV přímo u vašich prstů","Vynikající obsah sdílený na velké obrazovce"];
var tcastOtherWords = ["Naskenujte kód QR a stáhněte si T-Cast","Síť je připojena k TV","Název TV","T-Cast"];
var hbbtvWords = ["Nastavení Hbbtv","HbbTV","Cookies","Soubory cookies třetích stran","ID zařízení","sledování"];
var hbbtvTrackingWords = ["YES","NO","Není třeba řešit"];
var eStickerTipWords = ["K dispozici je méně než 400 MB místa. Chcete získat více místa odstraněním videí v režimu Demo?"];
var delEstickerVideoRemid = ["Video bylo úspěšně odstraněno."];
var selectSatRemind = "Nemůžete vybrat více než 20 satelitů!";
var cookiePolicyTitle = "Zásady pro soubory cookie – služby online Smart TV";
var cookiePolicyConditions = ["Společnost respektuje při používání výrobků a Služeb Smart TV poskytovaných Společností vaše soukromí. Soubory cookie využívá mnoho webových stránek a jiných internetových služeb. Televizor Smart TV bude soubory cookie přijímat, ukládat a přenášet, aby zajistil správné fungování těchto webových stránek a služeb. Společnost soubory cookie používá také při poskytování Služeb. V těchto Zásadách pro soubory cookie popisuje Společnost, jaké soubory cookie se v televizoru Smart TV nastaví a jak je můžete spravovat.\nUpozorňujeme, že všechny osobní údaje, které Společnost shromažďuje a zpracovává prostřednictvím nebo s pomocí souborů cookie, podléhají Zásadám ochrany osobních údajů a je třeba si tyto Zásady pro soubory cookie přečíst společně se Zásadami ochrany osobních údajů.\n1. Co je soubor cookie?\nSoubory cookie jsou malé textové soubory, které mohou být ukládány v televizoru Smart TV. Dojde-li k přístupu na webovou stránku nebo službu červeného tlačítka televizní stanice, tato webová stránka nebo služba mohou v televizoru Smart TV uložit soubor cookie. Při pozdějších přístupech odešle soubor cookie uložený v televizoru Smart TV informace straně, která soubor cookie uložila. Soubory cookie jsou mimořádně rozšířené a používají se na mnoha webových stránkách a v mnoha službách. Jednotlivé soubory cookie obvykle obsahují název domény, ze které byl soubor cookie přijat, životnost souboru cookie a hodnotu (obvykle jedinečné číslo). Podrobnější vysvětlení, co jsou soubory cookie a jak fungují, naleznete na webu www.allaboutcookies.org.\nSoubory cookie lze rozdělit na funkční soubory cookie a jiné než funkční soubory cookie. Funkční soubory cookie jsou soubory cookie, které jsou vyžadovány výhradně k poskytování služeb Smart TV a k tomu, aby webové stránky a jiné služby poskytovaly televizoru Smart TV správný obsah. Jiné než funkční soubory cookie jsou všechny ostatní soubory cookie.\nTyto Zásady pro soubory cookie se vztahují na soubory cookie, které ukládáme my, stejně jako na reklamní soubory cookie, které mohou ukládat třetí strany prostřednictvím našich služeb v televizoru Smart TV. Tyto Zásady pro soubory cookie se nevztahují na soubory cookie, které se mohou ukládat, když používáte služby Smart TV k přístupu na webové stránky, služby nebo aplikace třetích stran. Na tyto soubory cookie se vztahují příslušné zásady pro soubory cookie těchto třetích stran. Tyto Zásady pro soubory cookie však popisují způsob, jak tyto soubory cookie odstranit (viz část 4 níže).\n2. Jaké jiné než funkční soubory cookie používáme?\nReklama: Ve videu a zobrazení mohou být při používání služeb Smart TV poskytovány televizoru Smart TV reklamy. Tyto reklamy mohou být poskytovány námi nebo třetími stranami prostřednictvím našeho reklamního serveru nebo jeho koordinací. Tento server má ve vztahu k poskytování těchto reklam ústřední koordinační roli. Náš reklamní server nebo reklamní server třetí strany nastaví v televizoru Smart TV soubor cookie. Reklamní server pomocí tohoto souboru cookie registruje, zda byla reklama televizoru Smart TV poskytnuta nebo zda někdo pomocí televizoru Smart TV na nějakou reklamu klikl. Informace uložené v takovém reklamním souboru cookie použijeme k zapamatování, které reklamy byly televizoru Smart TV poskytnuty, abychom zajistili, že jednomu konkrétnímu televizoru Smart TV není poskytováno příliš mnohou stejných reklam, a také k tomu, abychom dojednali naše obchodní smlouvy s reklamními partnery. Tyto informace nepoužijeme k poskytování cílené reklamy. Třetí strany mohou navíc používat náš reklamní systém k poskytování reklam v televizoru Smart TV a ukládat v něm při poskytování těchto reklam soubory cookie. \nTyto soubory cookie obsahují mimo jiné informace o poskytnutých reklamách, informace o tom, v jaké aplikaci nebo na jaké doméně byly tyto reklamy poskytnuty, a IP adresu. Činí se tak z důvodu zapamatování, jak často se jednotlivé reklamy zobrazují, a k zabránění tomu, aby se stejná reklama zobrazovala příliš často. Třetí strana-externí inzerenti, kteří mohou zadávat reklamy, mohou ke sledování vaší aktivity na více webových stránkách a k poskytování reklam, které odpovídají vašim osobním preferencím, také používat soubory cookie.\n3. Webové stránky třetích stran\nPokud prostřednictvím služeb Smart TV televizoru Smart TV navštívíte webové stránky nebo služby třetích stran, je možné, že tyto webové stránky nebo služby uloží v televizoru Smart TV soubory cookie a že na těchto webových stránkách budou sledovány a ukládány vaše interakce. My tyto aktivity nevyžadujeme ani k nim nevyzýváme a tyto informace nevyužíváme. Další informace o používání těchto souborů cookie takovýmito třetími stranami naleznete v příslušných zásadách pro soubory cookie a v zásadách ochrany osobních údajů těchto webových stránek a služeb.\n4. Odstranění souborů cookie\nUživatelské rozhraní televizoru Smart TV umožňuje odstranění všech souborů cookie a jiného lokálního úložiště prohlížeče z televizoru. Důrazně doporučujeme před prodejem televizoru Smart TV nebo před jeho předáním odstranit všechny soubory cookie a místně uložená nastavení.\n5. Kontaktujte nás\nMáte-li jakékoli dotazy nebo připomínky týkající se našich Zásad pro soubory cookie nebo našich postupů při používání souborů cookie, můžete nám odeslat e-mail na adresu FRsupport@tcl.com.\nVerze: 1.0\n"];
var privacyPolicyTitle = "Zásady ochrany osobních údajů – služby online Smart TV";
var privacyPolicyConditions = ["Při manipulaci s osobními údaji respektujeme vaše soukromí. V těchto Zásadách ochrany osobních údajů je popsána entita zodpovědná za shromažďování, zpracovávání a využívání osobních údajů, které od vás v souvislosti s používáním našich služeb Smart TV (dále nazývaných „Služby“) získáme, dále typy osobních údajů, které o vás shromažďujeme, jak s nimi nakládáme a jaká jsou ve spojitosti s naším používáním osobních údajů vaše práva. \n1. Datový řadič\nShromažďování, zpracovávání a používání osobních údajů, které od vás získáme při používání Služeb, je prováděno společností Shenzhen TCL New Technology Co., Ltd., Industrial Avenue (M) č. 5, průmyslová zóna Sheko, město Šen-Čen, provincie Guangdong, Čína (dále nazývanou „Společnost“). Upozorňujeme však, že nejsme zodpovědní za všechny aktivity spojené se zpracováním údajů, které jsou uvedeny níže. Popis příslušných aktivit jsme však do našich Zásad ochrany osobních údajů zahrnuli, protože toto zpracování je spojené s používáním televizoru Smart TV.\n2. Souhlas se zpracováním osobních údajů\nK některým z úkonů shromažďování, zpracovávání a používání osobních údajů je třeba váš souhlas. \nPokud jste souhlasili s používáním svých osobních údajů za účelem vylepšení služeb, má váš souhlas následující znění:\n„Souhlasím se shromažďováním, zpracováváním a používáním údajů o mém času spuštění zařízení, seznamu kanálů DTV, seznamu oblíbených kanálů, době návštěvy a zhlédnutých kanálech za účelem analýzy zvyků uživatelů ke zlepšení Služeb a analýze, kolik uživatelů má Společnost za den/měsíc/rok, a ke sdílení těchto informací s televizními stanicemi.“\nPokud jste souhlasili s používáním svých osobních údajů za účelem reklamy, která bude přizpůsobena vašim zájmům, má váš souhlas následující znění:\n„Souhlasím se shromažďováním, zpracováváním a používáním údajů o typu klienta a země za účelem přijímání příslušné reklamy.“\nSouhlas je dobrovolný a i v případě, že jej neposkytnete, budete moci Služby stále využívat. Mohou se vám však zobrazovat reklamy a další obsah, které nebudou přizpůsobeny vašim preferencím. Bez ohledu na poskytnutí či neposkytnutí vašeho souhlasu si Společnost vyhrazuje právo ke shromažďování, zpracovávání a používání výše uvedených údajů v rozsahu povoleném příslušnými zákony.\nSvůj souhlas s jakoukoli výše uvedenou činností můžete s platností do budoucna kdykoli odvolat. Je možné, že nebude souhlasit s používáním svých osobních údajů k marketingu, průzkumům trhu či mínění a k přizpůsobení Služeb vašim potřebám. Pokud s tímto nesouhlasíte nebo chcete svůj souhlas odvolat, změňte příslušným způsobem nastavení ochrany soukromí v televizoru Smart TV.\n3. Shromažďované osobní údaje\nBez ohledu na váš souhlas Společnost shromažďuje, zpracovává, ukládá a používá následující kategorie dat:\nID zařízení: V televizoru Smart TV je uloženo pevné jedinečné číslo, které nám při používání Služeb umožňuje identifikaci a ověření televizoru Smart TV. Toto číslo se nazývá ID zařízení. ID zařízení poskytneme našemu servisnímu partnerovi, aby vám mohl poskytovat Služby. K ověřovacím účelům poskytujeme ID zařízení také vybraným partnerům obsahu. Tito partneři obsahu používají ID zařízení k ověření přístupu televizoru Smart TV ke službám poskytovaným partnerem obsahu.\nIP adresa a adresa MAC: Televizoru Smart TV se při přístupu k internetu přiřadí IP adresa. Tato IP adresa se odešle k nám a bude se zpracovávat při každém požadavku televizoru Smart TV na informace nebo data ze Služeb. Pokud je televizor Smart TV umístěn za směrovačem (např. v místní domácí síti nebo v místní síti WLAN), můžeme shromažďovat a zpracovávat IP adresu tohoto směrovače. Adresa MAC je jedinečné číslo přiřazené každému síťovému rozhraní televizoru Smart TV. Tuto adresu MAC budeme také shromažďovat a zpracovávat při každém požadavku televizoru Smart TV na informace nebo data ze Služeb.\nData požadavků na služby: Při každém připojení televizoru Smart TV k internetu a zapnutí televizoru Smart TV se televizor automaticky připojí ke Službám, které jsou spravovány našimi partnery pro služby. Poté se bude ověřovat, zda je televizor Smart TV k přístupu ke Službám certifikován. K ověřovacím účelům ukládají Služby jedno nebo více jedinečných číselných identifikátorů spojených s televizorem Smart TV. Při připojení ke Službám odešle televizor Smart TV IP adresu, která mu byla přiřazena, a odešle i informace specifické pro zařízení (model televizoru Smart TV, verzi softwaru), aby bylo možné zjistit, zda jsou k dispozici aktualizace softwaru.\nNastavení Služeb: Součástí běžných funkcí Služeb je možnost ručně uspořádat pořadí, ve kterém Služby zobrazují aplikace. Náš partner pro služby ukládá vaše uspořádání a další preference, které jste během používání Služeb mohli nastavit. Tato informace se propojí s ID zařízení.\nInformace specifické pro zařízení: V televizoru Smart TV je uloženo několik informací o televizoru samotném a o jeho konfiguraci. Tyto informace zahrnují typ televizoru Smart TV, verzi operačního systému televizoru Smart TV, jeho rozlišení obrazovky, ID projektu (tzn. informace týkající se konfiguračních souborů), uživatelského agenta, název prohlížeče, verzi prohlížeče a jazyk a zemi, které byly v televizoru Smart TV nakonfigurovány. Tyto informace použijeme my a poskytneme je i našim partnerům pro služby a partnerům obsahu.\nReklama: Služby mohou obsahovat reklamy. Tyto reklamy poskytujeme my nebo třetí strany, které používají námi přiřazený reklamní inventář. Všechny reklamy jsou poskytovány pomocí nebo prostřednictvím našeho reklamního serveru, který má při poskytování reklamy koordinační roli. Náš reklamní server nebo reklamní server třetí strany může v televizoru Smart TV nastavit soubory cookie. Více informací o těchto souborech cookie naleznete v našich Zásadách pro soubory cookie.\nProvoz partnera pro služby a partnera obsahu: Při používání Služeb bude televizor Smart TV prostřednictvím internetu požadovat ze Služeb data. Jako součást těchto požadavků bude našemu partnerovi pro služby odeslána IP adresa, popsaná výše, jazyk a země, které jste v televizoru Smart TV nakonfigurovali. Náš partner pro služby příslušná data zpracuje v souladu se svými zásadami pro ochranu osobních údajů.\nPoužívání druhé obrazovky: Používáte-li naši aplikaci pro druhou obrazovku, budeme na našich serverech shromažďovat a zpracovávat informace o ovládacích prvcích, které v aplikaci aktivujete, informace o nastavení země a jazyka, seznamu kanálů DTV, seznamu oblíbených kanálů, seznamu naplánovaných nahrávek, ID zařízení, aktuálním kanálu, verzi protokolu a IP adrese televizoru Smart TV. Naše servery budou poté televizor Smart TV ovládat tak, jak jej budete pomocí aplikace pro druhou obrazovku řídit.\nSlužba HbbTV – „červené tlačítko“: Televizní stanice („Stanice“) mohou se svým televizním signálem odesílat doplňkové informace. Pokud televizor Smart TV přijímá v těchto doplňkových informacích specifické pokyny a pokud je připojen k internetu, stáhne televizor Smart TV z webové stránky Stanice obrázek nebo malou stránku a zobrazí jej spolu s informací o stisknutí „červeného tlačítka“ na dálkovém ovladači, pokud budete chtít využívat doplňkové služby poskytované Stanicí. K této akci dojde při každém přepnutí televizního kanálu. Při stažení obrázku z webové stránky Stanice odešle televizor Smart TV některé osobní údaje, tzn. seznam kanálů DTV, aktuální kanál, tabulku s informacemi o událostech, čas televizoru, IP adresu televizoru Smart TV a soubory cookie uložené v televizoru Smart TV (pokud jsou nějaké k dispozici). Za shromažďování, zpracování a používání těchto údajů je zodpovědná Stanice. Pokud navíc používáte doplňkové služby nabízené Stanicí prostřednictvím červeného tlačítka, může o vás Stanice shromažďovat osobní údaje (např. která videa na vyžádání zhlížíte, jaké zprávy čtete atd.).\n4. Účely našeho zpracovávání a používání osobních údajů\nShromážděné údaje zpracováváme z následujících důvodů:\nPoskytování Služeb: Informace o IP adrese a adrese MAC, ID zařízení, verzi operačního systému televizoru Smart TV, typu klienta televizoru Smart TV a jeho rozlišení obrazovky, ID projektu (tzn. informace týkající se konfiguračních souborů), seznamu kanálů DTV, zobrazených kanálech, časovém pásmu, nastavení země a jazyka používáme k tomu, abychom televizoru Smart TV poskytli přístup ke Službám a a službám poskytovaným našimi partnery obsahu. Mezi účely patří (ale nikoli výhradně) ověřování, poskytování služeb založených na poloze (např. předpovědi počasí), nakládání s nevhodným chováním, správa incidentů zabezpečení, monitorování dostupnosti Služeb a poskytování záložních služeb uživatelských preferencí.\nOvěřování: K účelu ověřování používáme ID zařízení a adresu MAC.\nAktualizace softwaru: Při každém zapnutí televizoru Smart TV nám televizor poskytne IP adresu, ID zařízení, verzi softwaru, typ klienta televizoru Smart TV, ID projektu (tzn. konfigurační soubory), ID uživatele a sériové číslo, abychom vám nabídli a poskytli příslušné aktualizace softwaru. \nZlepšování Služeb: Úhrnná a anonymizovaná data o používání (tzn. data o interakci se Službami) využíváme ke zlepšení činnosti uživatele Služeb.\nPoskytování reklam: Informace v reklamních souborech cookie používáme k tomu, aby systém mohl protokolovat, které reklamy jste v televizoru Smart TV zobrazili, abychom zajistili, že nebudete přijímat příliš mnoho podobných reklam. Jsme schopni s našimi reklamními partnery dojednat dohody týkající se reklam. Soubory cookie mohou po koordinaci s naším reklamním serverem k vašemu sledování přes více webových stránek a k poskytování reklam, které odráží vaše osobní preference, používat i externí inzerenti, kteří poskytují reklamy ve Službách nebo na webových stránkách partnerů obsahu.\nOptimalizace reklam: Používáme data spojená se zobrazením reklam a kliknutím na reklamy k tomu, abychom optimalizovali zkušenost spotřebitelů s reklamou ve Službách.\nSlevy: ID zařízení poskytujeme vybraným partnerům obsahu, abychom jim umožnili identifikovat, do jaké míry vám mohou udělovat volný přístup k titulům videa na vyžádání ze svých kolekcí.\nVymáhání práva: Můžeme být požádání, abychom poskytli údaje kompetentním orgánům pro vymáhání práva nebo soudům. Pokud tak učiníme, uděláme tak pouze v souladu se závazným právním nástrojem, jako je příkaz nebo soudní nařízení, které vyžadují, abychom s příslušnými orgány spolupracovali.\nPokud konkrétní služba nevyžaduje, abyste poskytli své jméno nebo e-mailovou adresu, je možné Služby používat s použitím pseudonymů.\n5. Kategorie příjemců\nSpolečnost sdílí vaše osobní údaje shromážděné během používání Služeb pouze s následujícími třetími stranami:\nSe třetími stranami-poskytovali služeb televizoru Smart TV, pokud takové služby požadujete (např. pokud v televizoru Smart TV spustíte aplikaci Netflix, můžeme se společností Netflix sdílet vaši IP adresu, adresu MAC, verzi softwaru a název modelu televizoru).\nSe třetími stranami-partnery obsahu, pokud požadujete určitý obsah, který takoví partneři poskytují (např. k poskytnutí IP televizní služby GoLive můžeme s právním subjektem poskytujícím službu GoLive sdílet typ klienta televizoru, IP adresu a jazykové nastavení).\nSpolečnost budete s takovýmito třetími stranami sdílet osobní údaje do rozsahu, ke kterému jste výše dali souhlas ke sdílení konkrétních osobních údajů se třetími stranami.\nS outsourcovanými poskytovali služeb, jako jsou zpracovatelé dat, které Společnosti s poskytováním Služeb pomáhají.\nS jinými třetími stranami sdílí Společnost osobní údaje pouze v případě, že je tak Společnost zavázána na základě právních požadavků (např. soudů nebo orgánů činných v trestním řízení), v případě, že jste s příslušným sdílením souhlasili nebo je sdílení jinak právně vyžadováno příslušnými zákony.\n6. Země, ve kterých se údaje zpracovávají\nSpolečnost nebo někteří výše uvedení příjemci osobních údajů mohou být umístěni mimo Evropský hospodářský prostor (tzn. v následujících zemích: Čínská lidová republika a Spojené státy americké). Osobní údaje mohou být proto zpracovávány v zemích, které dle směrnice Evropského parlamentu a Rady 95/46/ES ze dne 24. října 1995 o ochraně fyzických osob v souvislosti se zpracováním osobních údajů a o volném pohybu těchto údajů nepatří mezi země zajišťující vhodnou úroveň ochrany osobních údajů.\n7. Vaše práva\nChcete-li získat informace o svých osobních údajích zpracovávaných Společností, uplatnit svá zákonná práce týkající se přístupu, opravy, odstranění a blokování svých osobních údajů nebo nesouhlasíte se zpracováním svých osobních údajů k marketingovým účelům nebo k průzkumům trhu či mínění, můžete se obrátit na Společnost.\n8. Změny v Zásadách ochrany osobních údajů\nKe zlepšení našich Služeb můžeme požadovat změny v těchto Zásadách ochrany osobních údajů – např. implementaci nových technologií nebo uvedení nových služeb. Vyhrazujeme si právo kdykoli tyto Zásady ochrany osobních údajů změnit nebo do nich vložit dodatek.\n9. Kontaktní údaje\nMáte-li jakékoli dotazy týkající se Zásad ochrany osobních údajů nebo chcete vznést stížnost na naše zpracování vašich osobních údajů, obraťte se na nás prostřednictvím jedné z našich možností kontaktu:\nE-mail: FRsupport@tcl.com\nVerze: 1.0\n"];
var privacyPolicyTerms = [
    "Povolit službu Smart TV",
    "Souhlasím se shromážděním, zpracováním a použitím informací o čase spuštění zařízení, seznamu kanálů DTV, seznamu oblíbených kanálů, době návštěvy a zobrazených kanálech pro účely analýzy návyků uživatelů, vylepšení služeb a analýzy, kolik uživatelů online má společnost TCL za den/měsíc/rok, a pro účely sdílení těchto informací s televizními stanicemi.",
    "Povolte službu doporučení.",
    "Povolit aplikaci na druhé obrazovce pro mobilní zařízení",
    "Povolte automatické aktualizace softwaru.",
    "Povolit službu FreeviewPlay"
];
var privacyPolicyTips = [
    "Všechny služby Smart TV budou zakázány.",
    "Pokud bude použit vestavěný tuner, bude služba HbbTV poskytovaná TV kanály zakázána.",
    "Obsah a služba doporučení TV programu bude zakázána.",
    "Použití druhé obrazovky bude zakázáno.",
    "TV nebude automaticky vyhledávat aktualizace softwaru a nové funkce.",
    "Obsah FreeviewPlay bude zakázán."
];
var privacyPolicyRemind = "V možnosti Nastavení zaškrtněte příslušné políčko.";
var set = "Nastavit";
var copyShopDemoTips = ["Připojeno k USB, chcete video zkopírovat na flash disk?","Zopírovat na flash disk","Video bylo úspěšně zkopírováno!","Chyba při kopírování videa!"];
var dataDeletionWords = ["Odstranit data služby Smart TV z backend serverů.","Poznámky: Data týkající se používání Smart TV budou odstraněna jeden měsíc po zaškrtnutí tohoto políčka. Upozorňujeme, že odstranění nebude mít vliv na místní data uložená ve vaší TV.","Ukončit přenos dat na server Smart TV.","Poznámky:  Vaše data spojená s využíváním služeb Smart TV již nebudou po zaškrtnutí tohoto políčka přenášena na server. Vaše TV již nebude přijímat doporučené služby.","Pokud se chcete dozvědět více, jděte na www.tcl.eu"];
var miracastWords = ["Bezdrátové připojení","Zrcadlit telefon se systémem Android na televizor","Připojte kliknutím","Tato funkce je k dispozici pouze na telefonu se systémem Android"];
var miracastTips = ["Kroky připojování","Otevřete nastavení systému","Více způsobů připojení \n / Jiná bezdrátová připojení","Vyberte bezdrátové zobrazení","Připojte kliknutím \n vyhledávání – čekejte, prosím"];
var termsAndConditions = ["\nObsah a služby (souhrnně nazývané „Licencovaná aplikace“), které vám dáváme k dispozici prostřednictvím tohoto televizního přijímače (dále nazývaného „Zařízení“), jsou licencované, neprodejné a určené k používání vámi pouze za těchto smluvních podmínek. Poskytovatelé Licencované aplikace (jednotliví „Poskytovatelé aplikací“) si vyhrazují všechna práva, která nejsou výslovně udělena vám.\n\n1.	Oblast působnosti Licence\n\nLicence, kterou vám příslušný Poskytovatel aplikace udělil k Licencované aplikaci, je omezena na nepřenosnou licenci k používání Licencované aplikace na vámi vlastněném nebo ovládaném Zařízení. Licencovanou aplikaci nesmíte distribuovat ani jinak zpřístupňovat přes síť, kde by mohla být využívána na více zařízeních zároveň. Licencovanou aplikaci nesmíte pronajímat, půjčovat za poplatek, zapůjčovat, prodávat, opětovně distribuovat ani sublicencovat. \n\nVšechny Licencované aplikace a veškerý v nich zahrnutý obsah, který je přístupný prostřednictvím tohoto Zařízení, náleží Poskytovateli aplikace a jsou chráněny příslušnými zákony o duševním vlastnictví. Pokud není jinak povoleno příslušnými zákony, nesmíte upravovat, kopírovat, dekompilovat, provádět zpětnou analýzu, převádět ze strojového kódu, znovu publikovat, nahrávat, zveřejňovat, přenášet, překládat, pokoušet se o derivaci zdrojového kódu, vytvářet odvozené práce ani jinak zneužívat Licencovanou aplikaci, její aktualizace, ani žádnou její část. Pokud toto omezení porušíte, můžete být soudně stíháni nebo žalováni o náhradu škody. Podmínky licence se vztahují na všechny upgrady poskytované Poskytovatelem aplikace, které nahrazují nebo doplňují původní Licencovanou aplikaci, pokud není takový upgrade doprovázen samostatnou licencí. V takovém případě se na upgrade bude vztahovat tato licence. Za jakékoli a veškeré náklady (pokud nějaké vzniknou) na upgrade Licencované aplikace jste zodpovědní výhradně vy.\n\n2.	Materiály třetích stran\n\nLicencovaná aplikace může umožňovat přístup ke službám a webovým stránkám Poskytovatele aplikace a třetích stran (souhrnně nazývaným „Služby“). Při používání kterékoli z těchto Služeb se můžete setkat s obsahem, který může být považován za urážlivý, nemravný nebo nevhodný, dále s obsahem, který může nebo nemusí být identifikován jako obsahující nevhodný jazyk, a s tím, že výsledky libovolného vyhledávání nebo zadání určité adresy URL mohou automaticky a neúmyslně generovat odkazy nebo reference na nevhodný materiál. Přesto výrobce tohoto Zařízení (dále jen „Výrobce“) ani Poskytovatel aplikace nenesou vůči vám za obsah, který může být shledán urážlivým, nemravným nebo nevhodným, žádnou zodpovědnost. \n\nVýrobce není zodpovědný za prozkoumání nebo vyhodnocení obsahu, jeho přesnosti, úplnosti, časové správnosti, platnosti, souladu s autorskými zákony, legálnosti, kvality ani žádného jiného aspektu těchto Služeb. Na žádnou z těchto Služeb neposkytuje Výrobce žádnou záruku ani ji neschvaluje a nepřebírá a ani nemá žádné ručení nebo zodpovědnost směrem k vám ani k žádné jiné osobě. \n\nSlužby mohou obsahovat patentovaný obsah, informace a materiál (souhrnně nazývané „Materiály třetích stran“), které jsou chráněny příslušnými zákony o duševním vlastnictví a jinými zákony a takové Materiály třetích stran nesmíte za žádných okolností používat žádným jiným způsobem, než je povolené používání Služeb. Pokud to není jinak povoleno platnými zákony, nesmíte Materiály třetích stran reprodukovat, upravovat, pronajímat, půjčovat za poplatek, zapůjčovat, prodávat ani distribuovat ani z nich jakýmkoli způsobem vytvářet odvozené práce, a za žádných okolností nesmíte Služby jakýmkoli nezákonným způsobem zneužívat. Služby nesmíte žádným způsobem používat k obtěžování, zneužívání, sledování, ohrožování, hanobení ani k jinému způsobu omezování či porušování práv jakékoli jiné strany. Výrobce není žádným způsobem zodpovědný za žádné takovéto používání ani za obtěžování, ohrožování, hanobení, urážlivé nebo nelegální zprávy nebo přenosy, které můžete dostat následkem používání Služeb. \n\n3.	Žádná záruka\n\nVšechny Licencované aplikace a Služby jsou poskytovány „tak, jak jsou“ a „jak jsou dostupné“ bez záruky jakéhokoli druhu, ať již vyjádřené či předpokládané. Výrobce se výslovně zříká všech záruk a podmínek ve vztahu k Licencovaným aplikacím a Službám, ať již vyjádřených či předpokládaných, včetně, ale nikoli výhradně, záruk obchodovatelnosti, uspokojivé kvality, vhodnosti pro určitý účel, přesnosti, nerušeného užívání a bez neoprávněného zásahu do práv třetích stran. Výrobce nezaručuje přesnost, platnost, časovou správnou, legálnost ani úplnost žádné Licencované aplikace nebo Služby, která je prostřednictvím tohoto Zařízení k dispozici. Výrobce také nezaručuje, že Zařízení, Licencované aplikace nebo Služby splní vaše požadavky, že provoz Licencovaných aplikací nebo Služeb bude nepřerušený a bezchybný, ani že závady Licencované aplikace nebo Služeb budou napraveny. Ukáže-li se, že Licencovaná aplikace nebo Služby obsahují chyby, ponesete veškeré náklady na nezbytný servis, opravu nebo nápravu.\n\nLicencované aplikace a Služby mohou být bez upozornění změněny, pozastaveny, vyjmuty, ukončeny nebo přerušeny nebo k nim může být na určitou dobu zablokován přístup, a Výrobce neposkytuje žádný slib ani záruku, že veškerý obsah nebo služby obsažené v Licencovaných aplikacích a Službách zůstanou po jakoukoliv dobu k dispozici. Takový obsah a služby jsou přenášeny třetími stranami pomocí sítí a přenosových prostředků, nad kterými nemá Výrobce žádnou kontrolu. Bez omezení obecné platnosti předchozího se Výrobce výslovně zříká jakékoliv odpovědnosti nebo ručení za jakoukoliv změnu, přerušení, deaktivaci, vyjmutí nebo pozastavení jakéhokoliv obsahu nebo služby, ke kterým prostřednictvím tohoto Zařízení přistupuje. Poskytovatel aplikace a další poskytovatelé Služeb si vyhrazují právo na změnu, pozastavení, vyjmutí nebo zakázání přístupu k jakékoli Licencované aplikaci nebo Službám kdykoli a bez upozornění. Výrobce může také nařídit omezení použití nebo přístupu k určitým Licencovaným aplikacím nebo Službám, za všech okolností a bez upozornění nebo odpovědnosti.\n\nVýrobce neposkytuje ve vztahu k Licencovaným aplikacím a Službám žádný zákaznický servis. Jakýkoli dotaz či požadavek na službu vztahující se k Licencovaným aplikacím a Službám by měl být adresován přímo příslušnému poskytovateli.\n\n4.	Shromažďování a používání informací\n\nVýrobce, Poskytovatelé aplikací a poskytovatelé Služeb mohou shromažďovat a používat technické údaje a související informace, včetně, ale nikoli výhradně, technických údajů o tomto Zařízení, systému a aplikačním softwaru a periferních zařízeních k usnadnění poskytování aktualizací softwaru, pro podporo produktů a jiných vám poskytovaných služeb (pokud jsou nějaké k dispozici) souvisejících se Zařízením a Licencovanou aplikací. Výrobce, Poskytovatelé aplikace a poskytovatelé Služeb mohou tyto informace používat potud, pokud budou v podobě neumožňující vás osobně identifikovat, ke zlepšování svých produktů nebo k poskytování služeb a technologií pro vás. Další informace o shromažďování a používání informací naleznete v našich zásadách ochrany osobních údajů: http://www.tcl.eu/en/.\n\n5.	Nedostupnost určitých funkcí\n\nVzhledem k omezení Poskytovatele aplikace mohou být v tomto Zařízení (či v jeho periferních zařízeních) nedostupné určité funkce, aplikace a služby, nebo nemusí být k dispozici ve všech oblastech. Některé funkce tohoto Zařízení mohou také vyžadovat doplňková periferní zařízení nebo poplatky za členství, které jsou prodávány samostatně.\n\n6.	Omezení odpovědnosti\n\nDo rozsahu, který není příslušnými zákony zakázán, není za žádných okolností, včetně nedbalosti, odpovědný Výrobce, ať již smluvně nebo při úmyslném porušení práv, a to za žádné přímé či nepřímé, náhodné, zvláštní nebo vyplývající škody, penále, výdaje nebo při jakýchkoli škodách vzniklých z nebo ve spojení s jakoukoli obsaženou informací nebo v důsledku používání tohoto Zařízení, jakékoli Licencované aplikace nebo jakékoli Služby vámi nebo jakoukoli třetí stranou, a to ani v případě, že byl o možnosti těchto škod informován.\n\nVýrobce bude zodpovědný pouze za úmyslnou a hrubou nedbalost."];
var privacyNotice = ["\nPři manipulaci s osobními údaji respektujeme vaše soukromí. Toto oznámení o ochraně osobních údajů vymezuje subjekt odpovědný za zpracování osobních údajů, které od vás shromažďujeme v souvislosti s používáním našich služeb Smart TV (dále jen „Služby“), jaké typy vašich osobních údajů shromažďujeme, jak s nimi nakládáme, a vaše práva v souvislosti s naším využíváním vašich osobních údajů. \n\n1.	Správce údajů a zástupce v Evropské unii\n\nShromažďování, zpracovávání a používání osobních údajů, které od vás získáme při používání Služeb, je prováděno společností Shenzhen TCL New Technology Co., Ltd.,No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, Čína (dále nazývanou „Společnost“). Naše kontaktní údaje a rovněž kontaktní údaje našeho zástupce v Evropské unii jsou uvedeny v oddílu 12 níže. Upozorňujeme však, že nejsme zodpovědní za všechny aktivity spojené se zpracováním údajů, které jsou uvedeny níže. Přesto jsme do našeho Oznámení o ochraně osobních údajů zahrnuli popis příslušných činností, protože toto zpracování souvisí s používáním televizoru Smart TV.\n\n2.	Souhlas se zpracováním údajů\n\nNěkteré námi prováděné činnosti zpracování údajů, např. používání vašich osobních údajů za účelem zlepšování Služeb, vyžadují váš souhlas.\n\nSouhlas je dobrovolný a i v případě, že jej neposkytnete, budete moci Služby stále využívat. Může se vám však zobrazovat obsah, který nebude přizpůsoben vašim preferencím. Bez ohledu na váš souhlas si vyhrazujeme právo zpracovávat vaše osobní údaje v rozsahu povoleném platnými právními předpisy.\n\nSvůj souhlas můžete kdykoli odvolat. Odvolání souhlasu nemá vliv na zákonnost zpracování na základě souhlasu před jeho odvoláním. Chcete-li svůj souhlas odvolat a/nebo vznést námitku (srov. oddíl 10 a příloha Vaše práva uvedená níže), změňte příslušným způsobem nastavení ochrany soukromí na televizoru Smart TV.\n\n3.	Konkrétní kategorie osobních údajů\n\nZpracováváme zejména následující kategorie údajů:\n\nID zařízení: V televizoru Smart TV je uloženo pevné jedinečné číslo, které nám při používání Služeb umožňuje identifikaci a ověření televizoru Smart TV. Toto číslo se nazývá ID zařízení. \n\nIP adresa a adresa MAC: Vašemu televizoru Smart TV bude při přístupu k internetu přiřazena adresa IP. Pokud se váš televizor Smart TV připojuje k internetu prostřednictvím směrovače (například v místní domácí síti nebo v místní WLAN), můžeme zpracovávat adresu IP tohoto směrovače. Adresa MAC je jedinečné číslo přiřazené každému síťovému rozhraní televizoru Smart TV. \n\nInformace specifické pro zařízení: V televizoru Smart TV je uloženo několik informací o televizoru samotném a o jeho konfiguraci. Tyto informace zahrnují typ televizoru Smart TV, verzi operačního systému televizoru Smart TV, jeho rozlišení obrazovky, ID projektu (tzn. informace týkající se konfiguračních souborů), uživatelského agenta, název prohlížeče, verzi prohlížeče a jazyk a zemi, které byly v televizoru Smart TV nakonfigurovány. \n\nTyto informace budeme využívat a budou poskytovány našemu partnerovi pro služby a partnerům pro obsah za účely popsanými níže.\n\n4.	Účely, pro které zpracováváme a/nebo využíváme vaše osobní údaje a právní základy\n\nÚčely, pro které zpracováváme vaše osobní údaje, a příslušné právní základy jsou popsány níže. Pokud je jako právní základ níže uvedeno splnění smlouvy, nemůžeme vám poskytovat Služby, pokud nám neposkytnete příslušné údaje. Pokud je jako právní základ uveden váš souhlas, můžete se svobodně rozhodnout, zda udělit nebo neudělit souhlas. Pokud souhlas neposkytnete, nebudeme zpracovávat vaše osobní údaje pro příslušný účel.\n\n•	Poskytování Služeb: Informace o adrese IP a adrese MAC, ID zařízení, verzi operačního systému televizoru Smart TV, typu klienta televizoru Smart TV a jeho rozlišení obrazovky, ID projektu (tzn. informace týkající se konfiguračních souborů), vašem seznamu kanálů DTV, zobrazených kanálech, časovém pásmu, nastavení země a jazyka používáme k tomu, abychom televizoru Smart TV zajistili přístup ke Službám a službám poskytovaným našimi partnery pro obsah. Mezi účely patří (avšak nikoliv výlučně) poskytování služeb souvisejících s místem (například předpověď počasí), zamezení neoprávněnému využívání, řízení bezpečnostních incidentů, sledování dostupnosti Služeb a poskytování služby zálohování uživatelských preferencí.\n\nPři používání Služeb bude televizor Smart TV požadovat data ze Služeb prostřednictvím internetu. Jako součást těchto požadavků bude našemu partnerovi pro služby odeslána IP adresa, popsaná výše, jazyk a země, které jste v televizoru Smart TV nakonfigurovali. Náš partner pro služby bude příslušné údaje zpracovávat v souladu se svým oznámením o ochraně osobních údajů.\n\nPrávním základem pro příslušné zpracování vašich osobních údajů je splnění smlouvy podle čl. 6 odst. 1 písm. b) obecného nařízení o ochraně údajů (dále jen „GDPR“).\n\n•	Nastavení služeb: Součástí běžných funkcí Služeb je možnost ručně uspořádat pořadí, ve kterém Služby zobrazují aplikace. Náš partner pro služby uloží vaše uspořádání a další předvolby, které můžete při používání Služeb nastavovat. Tato informace bude spojena s ID zařízení.\n\nPrávním základem pro příslušné zpracování vašich osobních údajů jsou smluvní účely podle čl. 6, odst. 1, písm. b) GDPR.\n\n•	Ověřování: Při každém připojení televizoru Smart TV k internetu a zapnutí televizoru Smart TV se televizor automaticky připojí ke Službám, které jsou spravovány našimi partnery pro služby. Poté se bude ověřovat, zda je televizor Smart TV certifikován pro přístup ke Službám. Za účelem ověřování ukládají Služby jedno nebo více jedinečných číselných identifikátorů spojených s televizorem Smart TV. Za účelem ověřování používáme ID zařízení a adresu MAC. Za účelem ověřování dále poskytujeme ID zařízení vybraným partnerům pro obsah. Tito partneři pro obsah používají ID zařízení k ověření přístupu vašeho televizoru Smart TV ke službám poskytovaným partnerem pro obsah.\n\nPrávním základem pro příslušné zpracování vašich osobních údajů jsou smluvní účely podle čl. 6, odst. 1, písm. b) GDPR.\n\n•	Dálková diagnostika: Jako součást Služeb vám poskytujeme služby dálkové diagnostiky. Proto zpracováváme ID zařízení, číslo zařízení, sériové číslo, adresu MAC a protokoly o chybách, kódy chyb a popisy chyb, které jsou poskytovány vadným modulem (aplikace, systém middleware).\n\nPrávním základem pro příslušné zpracování vašich osobních údajů jsou smluvní účely podle čl. 6, odst. 1, písm. b) GDPR.\n\n•	Poprodejní servis: Podle platných právních předpisů můžete mít právo na záruku nebo obdobná práva na obdržení poprodejních služeb. Za řešení reklamací a jiných požadavků na poprodejní služby a zpracování vašich osobních údajů s nimi spojených zodpovídá společnost TCL Europe, 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, Francie. To znamená, že pro účely poprodejních služeb působí společnost TCL Europe jako správce údajů a my za zpracování vašich osobních údajů neneseme odpovědnost.\n\nPokud požadujete naši službu týkající se poprodejního servisu, mohou být za účelem poskytnutí poprodejního servisu vyžadovány údaje jako vaše jméno, e-mailová adresa, telefonní číslo, požadavek na službu a poštovní adresa uvedené na faktuře. Informace mohou být také shromažďovány prostřednictvím poprodejních partnerů našich prodejců nebo autorizovaných poskytovatelů servisu, pokud je požádáte o servis. Pro více informací o ochraně osobních údajů v souvislosti s poprodejními službami můžete kontaktovat společnost TCL Europe na základě kontaktních údajů uvedených v oddílu 12 níže.\n\nPrávním základem pro příslušné zpracování je povinnost pro splnění právní povinnosti podle čl. 6, odst. 1, písm. c) GDPR.\n\n•	Stránka T-Launcher: T-Launcher je hlavní stránka pro použití televizoru Smart TV v operačním systému Linux (informace pro použití operačního systému Android naleznete níže), která umožňuje vybrat určitý obsah.\n\nPrávním základem pro zpracování vašich osobních údajů, které jsou nezbytné pro vaše používání stránky T-Launcher, jsou smluvní účely podle čl. 6, odst. 1, písm. b) GDPR.\n\nNa základě vašeho předchozího souhlasu budeme také sledovat používání stránky T-Launcher, tj.:\n	Když začnete používat stránku T-Launcher, zaznamenáme čas vstupu na stránku T-Launcher a jejího opuštění.\n	Když zahájíte přehrávání videa ze stránky T-Launcher, zaznamenáme název a délku videa (nevztahuje se na Netflix, YouTube nebo jiné služby poskytované třetí stranou).\n	Když vstoupíte na stránku nebo ji opustíte, zaznamenáme čas strávený na stránce.\n	Když přesunete kurzor z jednoho místa na jiné nebo vstoupíte do aplikace, zaznamenáme tuto událost.\n	Když nainstalujete, odstraníte nebo aktualizujete aplikací, zaznamenáme tyto události včetně názvu aplikací.\n\nTyto informace shromažďujeme především pro analýzu velkých objemů dat za účelem zlepšení produktů a poskytování lepších obsahových služeb uživatelům.\n\nPrávním základem pro zpracování vašich osobních údajů v souvislosti se sledováním vašeho používání stránky T-Launcher je váš souhlas podle čl. 6, odst. 1, písm. a) GDPR.\n\nPokud jste si zakoupili televizor Android TV a požíváte operační systém Android společnosti Google, vaše osobní údaje budou zpracovávány společností Google a my za toto zpracování nebudeme zodpovídat. Informace o souvisejícím zpracování vašich údajů a o svých příslušných právech naleznete v oznámení o ochraně osobních údajů společnosti Google.\n\n•	Služba T-Cast: Služba T-Cast umožňuje ovládat televizor pomocí telefonu a sdílet videa, hudbu a obrázky uložené v telefonu na televizoru. Služba T-Cast také umožňuje zrcadlit obrazovku smartphonu na televizoru.\n\nStažení a používání aplikace je dobrovolné. Pokud aplikaci stáhnete a použijete, zpracujeme adresu MAC , abychom mohli spočítat, kolik verzí T-Cast bylo na trhu použito. To je zapotřebí k tomu, abychom vám tuto službu mohli nabízet. Pokud používáte naši funkci druhé obrazovky, shromažďujeme a zpracováváme na našich serverech ovládací prvky, které aktivujete v aplikaci, nastavení země a jazyka, seznam kanálů DTV, seznamy oblíbených kanálů, seznamy plánů, ID zařízení, aktuální kanál, verzi protokolu a adresu IP televizoru Smart TV. Naše servery poté budou ovládat váš televizor Smart TV podle vašich pokynů v aplikaci.\n\nPrávním základem pro příslušné zpracování vašich osobních údajů jsou smluvní účely podle čl. 6, odst. 1, písm. b) GDPR.\n\n•	Aktualizace softwaru: Aktualizace softwaru tvoří součást Služeb. Takže pokaždé, když bude televizor Smart TV zapnutý, bude nám poskytovat adresu IP, ID zařízení, číslo zařízení, verzi softwaru, typ klienta televizoru Smart TV, ID projektu (tj. konfigurační soubory), ID uživatele a sériové číslo za účelem zjištění, zda jsou dostupné aktualizace softwaru, a nabídnutí a poskytnutí odpovídající aktualizace softwaru.\n\nPrávním základem pro příslušné zpracování vašich osobních údajů jsou smluvní účely podle čl. 6, odst. 1, písm. b) GDPR.\n\n•	Vymáhání práva: Můžeme být požádání, abychom poskytli údaje kompetentním orgánům pro vymáhání práva nebo soudům. Pokud tak učiníme, uděláme tak pouze v souladu se závazným právním nástrojem, jako je příkaz nebo soudní nařízení, kterými se po nás vyžaduje spolupráce s příslušnými orgány.\n\nPrávním základem pro příslušné zpracování je naše povinnost pro splnění právní povinnosti podle čl. 6 odst. 1, písm. c) GDPR.\n\nPokud konkrétní služba nevyžaduje, abyste poskytli své jméno nebo e-mailovou adresu, je možné Služby používat s použitím pseudonymů.\n\n5.	Ochrana soukromí a bezpečnosti dětí mladších 16 let\n\nChápeme důležitost přijetí zvláštních opatření na ochranu soukromí a bezpečí dětí využívajících naše Služby. Děti mladší než 16 let nebo než kolik činí odpovídající věková hranice v příslušné jurisdikci nesmějí poskytovat své osobní informace prostřednictvím televizoru ani při požadavku na poprodejní servis, jestliže jejich rodič neposkytl ověřitelný souhlas.\n\nVzhledem k tomu, že nikdy neshromažďujeme údaje o datu narození uživatelů, nemůžeme určit věk uživatelů. Pokud však zjistíme, že jsme za nesplnění výše uvedených okolností shromáždili osobní údaje dítěte mladšího než 16 let nebo než kolik činí odpovídající věková hranice v příslušné jurisdikci, neprodleně podnikneme kroky k vymazání informací.\n\n6.	Aplikace třetích stran\n\nTelevizor Smart TV umožňuje použití aplikací poskytovaných třetími stranami, jako jsou Netflix, YouTube nebo HbbTV (služba červeného tlačítka poskytovaná provozovateli televizního vysílání). Aplikace si můžete stáhnout z obchodu s aplikacemi nebo můžete aktivovat aplikace třetích stran, které jsou již v zařízení předem nainstalovány. Aplikace třetích stran, které jsou v zařízení předem nainstalovány, vaše osobní údaje bez předchozího povolení neshromažďují. Např. aplikace Netflix je již v zařízení předem nainstalována, ale shromažďuje údaje pouze při přihlášení do vašeho účtu Netflix. HbbTV shromažďuje údaje pouze tehdy, pokud dáte stisknutím příslušného tlačítka na dálkovém ovladači souhlas se shromažďováním údajů.\n\nPokud povolíte nějakou aplikaci od třetí strany, vaše osobní údaje mohou být zpracovávány poskytovatelem aplikace. Za toto zpracování neneseme odpovědnost; více informací o souvisejícím zpracování vašich údajů a příslušných vašich právech naleznete v oznámení o ochraně osobních údajů k aplikaci třetí strany.\n\n7.	Kategorie příjemců\n\nVaše osobní údaje shromážděné během používání služeb sdílíme pouze s externími partnery pro obsah, pokud požadujete určitý obsah poskytovaný těmito partnery pro obsah, nebo s poskytovateli služeb ve funkci zpracovatelů údajů, kteří nám pomáhají při poskytování Služeb.\n\nS jinými třetími stranami vaše osobní údaje sdílíme pouze, pokud jsme povinni tak učinit na základě právních požadavků (např. vůči soudům nebo orgánům činným v trestním řízení), pokud jste s příslušným sdílením souhlasili, nebo pokud je sdílení jinak zákonné podle příslušných právních předpisů.\n\n8.	Země, ve kterých se vaše údaje budou zpracovávat\n\nMy a/nebo někteří příjemci vašich osobních údajů uvedených výše mohou mít sídlo mimo Evropský hospodářský prostor (např. v Číně nebo ve Spojených státech amerických). Z tohoto důvodu mohou být vaše osobní údaje zpracovávány v zemích, v nichž právní předpisy o ochraně osobních údajů mohou poskytovat jinou úroveň ochrany ve srovnání se zákony ve vaší jurisdikci, a které nejsou považovány za poskytující odpovídající úroveň ochrany osobních údajů v souladu s GDPR. Mezi země, které poskytují odpovídající úroveň ochrany údajů z hlediska evropských právních předpisů o ochraně údajů, patří Andorra, Argentina, Kanada, Švýcarsko, Faerské ostrovy, Guernsey, Izrael, Ostrov Man, Jersey, Nový Zéland a Uruguayská východní republika. Příjemci v USA mohou být částečně certifikováni v rámci Evropsko-americké ochrany soukromí a z tohoto důvodu uznáni jako poskytující odpovídající úroveň ochrany údajů z hlediska evropských právních předpisů. \n\nV případě potřeby zavedeme příslušné záruky, pokud jde o předávání údajů příjemcům mimo Evropskou unii, kteří neposkytují odpovídající úroveň ochrany údajů. Kopii příslušného opatření lze vyžádat tak, že nás kontaktujete, jak je uvedeno v oddílu 12. níže.\n\n9.	Doba uložení\n\nVaše osobní údaje budou uchovávány tak dlouho, jak to bude nezbytné pro to, abychom vám mohli poskytovat Služby. U většiny údajů to obecně znamená, že vaše údaje budeme uchovávat po dobu jednoho měsíce. Pro účely vzdálené diagnostiky a poprodejních služeb můžeme vaše údaje uchovávat až po dobu deseti let. Když už nebudeme potřebovat používání vašich osobních údajů ke splnění smluvních nebo zákonných povinností, odstraníme je z našich systémů a záznamů a/nebo podnikneme kroky k jejich náležité anonymizaci, aby vás z nich již nebylo možné identifikovat.\n\n10.	Vaše práva\n\nPodle platných právních předpisů o ochraně osobních údajů můžete mít právo: požádat o přístup k vašim osobním údajům, požádat o opravu vašich osobních údajů; požádat o výmaz vašich osobních údajů, požádat o omezení zpracování vašich osobních údajů; požádat o přenositelnost údajů a vznést námitku proti zpracování vašich osobních údajů. Upozorňujeme, že výše uvedená práva mohou být omezena v souladu s platnými národními zákony o ochraně údajů. Další informace o těchto právech naleznete v níže uvedené příloze Vaše práva.\n\nMáte také právo podat stížnost u příslušného dozorového úřadu v oblasti ochrany údajů.\n\nChcete-li uplatnit svá práva, kontaktujte nás způsobem popsaným v níže uvedeném oddílu 12.\n\n11.	Změny v oznámení o ochraně osobních údajů\n\nZa účelem zlepšování našich Služeb může vyvstat potřeba změnit toto oznámení o ochraně osobních údajů, např. zavedením nových technologií nebo zavedením nových služeb. Vyhrazujeme si právo kdykoliv změnit nebo doplnit toto oznámení o ochraně osobních údajů.\n\n12.	Kontaktní informace a zástupce v Evropské unii\n\nPokud máte jakékoli dotazy týkající se oznámení o ochraně osobních údajů nebo si přejete vznést stížnost ohledně zacházení s vašimi osobními údaji, kontaktujte nás pomocí následujících kontaktních údajů:\n\nKontaktní formulář: www.tcl.eu/privacy/support\n\nNaším zástupcem v Evropské unii je: TCL Europe se sídlem na adrese 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, Francie. Společnost TCL Europe můžete kontaktovat prostřednictvím výše uvedeného kontaktního formuláře.\n\nVerze: 2.0\n\nPříloha Vaše práva\n\na.	Právo na přístup: Můžete mít právo obdržet od nás potvrzení o tom, zda vaše osobní údaje jsou nebo nejsou zpracovávány, a v případě, že zpracovávány jsou, požádat o přístup k osobním údajům. Informace, k nimž máte přístup, mimo jiné zahrnují účely zpracování, kategorie dotčených osobních údajů a příjemce nebo kategorie příjemců, kterým tyto osobní údaje byly nebo budou vyzrazeny. Nicméně se však nejedná o právo absolutní a vaše právo na přístup může být omezeno zájmy jiných osob.\n\nMůžete mít právo získat kopii osobních údajů, které jsou předmětem zpracování. V případě, že budete požadovat další kopie, můžeme účtovat přiměřený poplatek na základě administrativních nákladů. \n\nb.	Právo na opravu: Můžete mít právo obdržet od nás opravu nepřesných osobních údajů, které se vás týkají. V závislosti na účelu zpracování můžete mít právo na doplnění neúplných osobních údajů, jako například prostřednictvím dodatečného prohlášení.\n\nc.	Právo na výmaz („právo být zapomenut“): Za určitých okolností můžete mít právo obdržet od nás výmaz osobních údajů, které se vás týkají, a my můžeme být povinni tyto osobní údaje vymazat. \n\nd.	Právo na omezení zpracování: Za určitých okolností můžete mít právo požadovat omezení zpracování osobních údajů, které se vás týkají. V tomto případě budou příslušné údaje označeny a můžeme je zpracovávat pouze pro určité účely.\n\ne.	Právo na přenositelnost údajů: Za určitých okolností můžete mít právo obdržet osobní údaje, které se vás týkají a které jste nám poskytli, ve strukturovaném, běžně používaném a strojově čitelném formátu, a můžete mít právo předat tyto údaje jinému subjektu, aniž bychom tomu bránili.\n\nf.	Právo vznést námitku:\n\nZa určitých okolností můžete mít z důvodů týkajících se vaší konkrétní situace, nebo pokud se osobní údaje zpracovávají pro účely přímého marketingu účelu, právo vznést kdykoliv námitku proti zpracování osobních údajů, které se vás týkají, a my můžeme být povinni vaše osobní údaje již nezpracovávat.\n\nNavíc, pokud jsou vaše osobní údaje zpracovávány pro účely přímého marketingu, máte právo kdykoli vznést námitku proti zpracování osobních údajů, které se vás týkají, pro tento marketing, což zahrnuje i profilování, pokud se týká tohoto přímého marketingu. V takovém případě nebudeme vaše osobní údaje pro takové účely nadále zpracovávat."];
var cookieNotice = ["\nKdyž používáte námi vyrobené televizory Smart TV a námi poskytované Služby, dodržujeme právo na vaše soukromí. Soubory cookie využívá mnoho webových stránek a jiných internetových služeb. Váš televizor Smart TV bude soubory cookie přijímat, ukládat a přenášet, aby tyto webové stránky a služby fungovaly správně. \n\nPři poskytování Služeb nepoužíváme soubory cookie. Nicméně třetí strany (např. poskytovatelé aplikací třetích stran) mohou používat soubory cookie když používáte televizor Smart TV pro přístup k jejich službám. V rámci tohoto oznámení o používání souborů cookie lze poskytnout pouze omezené informace týkající se souborů cookie, které mohou být umístěny třetími stranami. Více informací o souborech cookie skutečně používaných třetími stranami a jejich funkčnosti naleznete v příslušných oznámeních o používání souborů cookie těchto třetích stran. V tomto oznámení o používání souborů cookie však poskytujeme obecný popis toho, které soubory cookie lze nastavit na televizoru Smart TV a jakým způsobem je můžete spravovat.\n\n1.	Co je soubor cookie?\n\nSoubory cookie jsou malé textové soubory, které mohou být ukládány v televizoru Smart TV. Dojde-li k přístupu na webovou stránku nebo službu červeného tlačítka televizní stanice, tato webová stránka nebo služba mohou v televizoru Smart TV uložit soubor cookie. Při pozdějších přístupech bude soubor cookie uložený v televizoru Smart TV odesílat informace straně, která soubor cookie uložila. Soubory cookie jsou mimořádně rozšířené a používají se na mnoha webových stránkách a v mnoha službách. Jednotlivé soubory cookie obvykle obsahují název domény, ze které byl soubor cookie přijat, životnost souboru cookie a hodnotu (obvykle jedinečné číslo). Podrobnější vysvětlení o tom, co soubory cookie jsou a jak fungují, naleznete na webu www.allaboutcookies.org.\n\nSoubory cookie lze rozdělit na funkční a jiné než funkční. Funkční soubory cookie jsou soubory cookie, které jsou nezbytně pro účely poskytování služeb. Jiné než funkční soubory cookie jsou všechny ostatní soubory cookie.\n\n2.	Webové stránky třetích stran\n\nPokud navštívíte webové stránky nebo služby třetích stran prostřednictvím služeb televizoru Smart TV, je možné, že tyto webové stránky nebo služby do televizoru Smart TV umístí soubory cookie, a že tyto webové stránky budou sledovat a ukládat vaše interakce na těchto webových stránkách. My tyto aktivity nevyžadujeme ani k nim nevyzýváme a tyto informace nevyužíváme. Další informace o používání takových souborů cookie těchto webových stránek a služeb naleznete v příslušných oznámeních o používání souborů cookie a oznámeních o ochraně osobních údajů.\n\n3.	Odstranění souborů cookie\n\nUživatelské rozhraní televizoru Smart TV umožňuje odstranit z televizoru všechny soubory cookie a jiné lokální soubory uložené v prohlížeči. Před prodejem nebo předáním televizoru Smart TV jiné osobě důrazně doporučujeme odstranit všechny soubory cookie a místně uložená nastavení.\n\nVerze: 2.0"];
var privacyPolicy = ["Pokud chcete využívat naše služby televizoru Smart TV a související služby, zaškrtněte políčko(-a) níže. Používání těchto služeb vyžaduje zpracování vašich osobních údajů, jak je popsáno v našem Oznámení o ochraně osobních údajů: http://www.tcl.eu/en/","Povolit službu Smart TV, ukládání nastavení služeb a automatické ověřování televizoru Smart TV. Pokud zrušíte zaškrtnutí tohoto políčka, budete mít k dispozici pouze standardní TV a HDMI.","Povolit automatické aktualizace softwaru. Pro průběžnou aktualizaci produktu pomocí nejnovějších aktualizací softwaru a nejlepší výkon zaškrtněte toto políčko.","(Aktualizace softwaru jsou důležité pro správné fungování televizoru, protože poskytují nové funkce, stabilitu a zabezpečení. Z tohoto důvodu doporučujeme toto políčko zaškrtnout.)","Pokud souhlasíte s tím, abychom zpracovávali vaše osobní údaje i pro níže uvedený účel, zaškrtněte políčko uvedené níže. Další informace o tom, jak zpracováváme vaše osobní údaje, najdete v našem Oznámení o ochraně osobních údajů: http://www.tcl.eu/en/","Souhlasím se zpracováním svých osobních údajů (např. čas vstupu na stránku T-Launcher a jejího opuštění) za účelem zlepšování produktů společnosti TCL a poskytování služeb s lepším obsahem na televizorech Smart TV."];
var termsFirTitle = ["Pravidla a podmínky","Prohlášení o ochraně osobních údajů","Upozornění o souborech cookie"];
var termsSecTitle = ["Přečtěte si smluvní podmínky a potvrďte souhlas.","Přečtěte si prohlášení o ochraně osobních údajů a potvrďte svůj souhlas.","Přečtěte si upozornění o souborech cookie a potvrďte svůj souhlas."];
var tickall = "Zaškrtnout vše";
var tickremindWords = "Chcete-li využívat služby Smart TV, je nutné zaškrtnout zaškrtávací políčka.";