
var all_country 	= ["Avstralija","Avstrija","Belgija","Bolgarija","Hrvaška","Češka","Danska","Finska","Francija","Nemčija",
						"Grčija","Madžarska","Italija","Luksemburg","Nizozemska","Norveška","Poljska","Portugalska","Romunija","Rusija",
						"Srbija","Slovenija","Španija","Švedska","Švica","Združeno Kraljestvo","Nova Zelandija"," "/*Arab*/,"Estonija"," "/*Hebrew*/,
						"Latvija","Slovaška","Turčija","Irska","Japan","Filipini","Thailand","Maldives","Uruguay","Peru",
    					"Argentina","Chile","Venezuela","Ecuador","Costa Rica","Paraguay","Bolivia","Belize","Nicaragua","Guatemala",
						"Kitajska","Taiwan","Brazil","Canada","Mexico","United States","South Korea","Romania","Vietnam"/*新添加的，底层结构体中没有*/,"Ukrajina"/*新添加的，底层结构体中没有*/,
    					"Iran","Iraq"," ","Kazakhstan","Uzbekistan"," ","Kyrgyzstan","Algeria","Egypt","Tunisia",
    					"Tanzania","Kenya","Pakistan","Indonesia","Kuwait","Saudi Arabia","Qatar","Israel","Lebanon","bahrain",
    					"Angola","Congo","India","Turkmenistan","Colombia","Mongolia","Bangladesh","Nepal","Sri Lanka","North Korea",
						"Moldavija","Polynesia","EI Salvador"," ","Fiji","Liberia","Jordan","Myanmar","Ghana","Georgia",
    					"Armenia","Oman","yemen","Syria","Palestine","Afghanistan","Morocco","benin","IvoryCoast","Nigeria",
    					"Sudan","Ethiopia","Zambia"," ","South Africa","mozambique","Libya","Albanija","Belarus","Iceland",
						"Litva","Mauritius","Dubai","UAE","Tajikistan","Bengal","Bosna in Hercegovina","Ciper","Kosovo","Makedonija",
						"Malta","Črna Gora","Cameroun","Singapore","Malaysia","NewCaledonia","Suriname","Jamaica","Curacao","Aruba",
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
				
var all_language 	= ["Češčina","*","Danščina","*","*","nemščina","angleščina","francoščina","Grščina","španščina",
						"Hrvaščina","*","italijanščina","Madžarščina","Nizozemščina","Norveščina","Poljščina","Portugalščina","Ruščina","Romunščina",
						"Slovenščina","Srbščina","Finščina","Švedščina","Bolgarščina","Slovaščina","Chinese","*","Keltščina","*",
						"Valižanščina","Arabščina","Irländska","Latvijščina","*","Turščina","Estonščina","Nizozemščina"/*Netherlands*/,"Korejščina","*",
						"hindi","*","*","Mandarin","kantonski","Maori","Original zvok"/*Qaa*/,"Ni določen"/*Undetermined*/,"*","Neznano",
						"Ni določen","*","*","*","*","*","*","*","*","*",
						"*","*","*","Albanščina","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baskovščina","*","*",
						"*","*","*","*","*","*","*","Bosanščina","*","*",
						"*","*","*","*","Vitryska","*","*","Katalonščina","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galicijščina","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Islandščina","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Japonski","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Litvanščina",
						"*","*","*","*","*","*","*","Makedonščina","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romantika","*","*","*","*",
						"*","*","*","Samijščina","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Teletekst",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukrajinščina","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Izklop","Vklop"];
var okCancel		= ["V redu","Prekliči"];
var yesNo			= ["DA","NE"];
var level			= ["Izklop","Nizko","Visoko","Srednje"];
var manualAuto		= ["Ročno","Samodejno"];
var homeShop		= ["Domov","Trgovina"];
var picPreset		= ["Standardna","Dinamično","Naraven","Film","Osebno"];
var picColorTemp	= ["Hladno","Normalno","Toplo","Uporabnik"];
var pic3dNavig		= ["Ročno","Samodejno","Polavtomatsko"];
var _3dOptions		= ["3D način","3D-na-2D","L-D stikalo","Globina polja"];
var pic3DMode       = ["Izklop","2D-na-3D","En ob drugem","Zgoraj in spodaj","Prepletanje vrstic"];
var picEcoOptions	= ["Varčevanje z energijo","Svetlobni senzor","Lokalno zatemnjevanje","Optimizacija prikaza"];
var picGeoOptions	= ["Geometrija","Vodoravni položaj","Navpični položaj","Ura","Faza"];//Geometry 无翻译
var picAdWhiteBal	= ["Povečaj R","Povečaj G","Povečaj B","Izravnava R","Izravnava G","Izravnava B"];
var souOptions		= ["Prednastavitev zvoka","Ravnovesje","Avdio zamik","SRS TSHD","Samodejna nastavitev glasnosti",
						"Vrsta SPDIF","Zakasnitev SPDIF","Postavitev TV-ja","Jezik avdia","Vrsta zvoka",
						"Opis zvoka","Ojačanje basa","Dolby Digital Plus"];
var souSpdifType	= ["Samodejno"/*Dolby*/,"PCM","Izklop"];
var colorSpace      = ["Samodejno","Izvorno","Uporabnik"];
var souPresetPara	= ["100Hz","500Hz","1.5KHz","5KHz","10KHz"];
var chOptions		= ["Skeniranje kanalov","Seznam kanalov","EPG","Organizacija kanalov","Diagnostika kanala",
						"timeshit","Podnapisi","Teletekst","Tip seznama kanalov"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Moč signala","Kakovost signala","Frekvenca (kHz)","ID storitve","ID omrežja","Ime omrežja"];
var chScanOptions	= ["Država/regija","Način tunerja","Samodejno iskanje","Samodejna posodobitev","Ročno analogno skeniranje",
						["Ročno iskanje kabel. kanalov","Ročno iskanje antene","Ročno nastavljanje satelita"],"Namestitev satelitske antene","Izbira priljubljenega omrežja","Počisti seznam kanalov","LCN"];
var favNetDes		= "Prosimo izberite svoje najljubše omrežje";
var tuner			= ["Kabel","Antena","Satelit"];//Satelite 无翻译
var passError		= "Geslo ni pravilno.\nPonovite vnos!";
var chType			= ["Analogni kanali: ","Digitalni kanali: "];
var chScanStatus	= ["Status: Iskanje","Status: skeniranje končano","Status: skeniranje preklicano","Status: napaka pri skeniranju"];
var chScanPara		= ["Frekvenca (kHz)","Modulacija","Frekvenca simbolov (Ksym/s)","ID omrežja","Sistem",
						"Fina nastavitev","Moč signala","Kakovost signala","Način iskanja","Identifikacija kanala"];
var chScanParaMHZ      = ["Frekvenca (MHz)"];
var chAtvManSys		= ["ZAHODNA EVROPA","VZHODNA EVROPA","Velika Britanija","Francija"];
var modulation		= ["16 QAM","32 QAM","64 QAM","128 QAM","256 QAM","Samodejno"];
var chCleanDes		= "Ali želite izbrisati seznam kanalov?";
var chDeletDes		= "Ali želite izbrisati kanal?";
var chOperator		= ["Ziggo","UPC","Drugi"];
var chScanType		= ["Digitalno & Analogno","Digitalno","Analogno"];
var chScanMode		= ["Celotno","Napredno","Hitro"];
var bookingModes	= ["Snemanje","Opomnik"];
var dayName			= ["ned","pon","tor","sre","čet","pet","sob"];
var monthName		= ["Jan", "Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"];
var filter			= ["Filter","Vrsta","Podzvrst"];
var chEpgFirstGenre	= ["Film","News","Razvedrilne oddaje","Šport","Za otroke","Glasba","Umetnost","Družabne vsebine","Izobraževalno","Prosti čas","POSEBNO"];
var chEpgSecondGenre= [["Drama","Detektivske zgodbe","Pustolovščina","Znanstvena fantastika","Komedija","Telenovele","Romantika","Resne vsebine","Film za odrasle"," "," "," "],
						["Aktualne vsebine","Vremenska napoved","Informativne oddaje","Dokumentarne oddaje","Informativno-pogovorne oddaje"," "," "," "," "," "," "," "],
						["Razvedrilne oddaje","Kvizi in igre","Variete","Pogovorne oddaje"," "," "," "," "," "," "," "," "],
						["Šport","Posebni dogodki","Športni pregledi","Nogomet","Tenis",
							"Ekipni športi","Atletika","Motošport","Vodni športi","Zimski športi",
							"Konjeništvo","Borilni športi"],
						["Za otroke","Predšolski otroci","Zabava za 6 do 14 let","Zabava za 10 do 16 let","Informativne oddaje","Risanke"," "," "," "," "," "," "," "],
						["Glasba","Rock ","Resne vsebine","Ljudska ","Jazz","Muzikli","Balet"," "," "," "," "," "],
						["Umetnost","Uprizoritvene umetnosti","Likovne umetnosti","Verske oddaje","Popularna kultura",
							"Literarne oddaje","Film","Zabavne znanstvene oddaje","Prenos","Novi mediji",
							"Oddaje o umetnosti","Moda"],
						["Družabne vsebine","Kronike","Gospodarstvo","Izjemni ljudje"," "," "," "," "," "," "," "," "],
						["Izobraževalno","Narava","Tehnologija","Medicina","Tuje države","Družbene vede","Dodatno izobraževanje","Jeziki"," "," "," "," "],
						["Konjički","Turizem","Ročna dela","Mehanika","Zdravje in dobro počutje","Kuhanje","Oglaševanje","Vrtnarjenje"," "," "," "," "],
						["Izvorni jezik","Črno-belo","Neobjavljeno","Prenos v živo"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Preskoči kanal","Razvrsti kanale","Uredi kanal","Brisanje kanala","Kanal Menjaj","kanal vložek"];
var chEditPara 		= ["Ime omrežja","Številka kanala","Ime kanala","Frekvenca","Barvni sistem","Zvočni sistem "];
var chSatTitles		= ["Tip satelita","Namestitev satelitske antene","Izbira satelita"];
var chSatEidtOptions= ["Ime satelita","Položaj","LNB Moč","LNB frekvenca (MHz)","Vhod diseqc",
						"Ton 22KHz","ton počil","Frekvenca (kHz)","Frekvenca simbolov (Ksym/s)","Polarizacija",
						"Moč signala","Kakovost signala","Stanje satelita"];
var chSatAutoPromt	= [["Vse","Omrežje"],
						["Vse","Brezplačno"]];
var chSatAutoScanOptions=["Izbira satelita","Način iskanja","Kanali"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Univerzalno",];
var chSatDiSEqCInput= ["Onemogočeno","A","B","C","D"];
var chSatTone22KHz	= ["Samodejno","Vklop","Izklop"];
var chSatToneBurst	= ["Onemogočeno","ton počil A","ton počil B"];
var chSatPolarization= ["Vodoravno","Navpično"];
var chSatSetupOptions=["Tip antene","Sprejemnik","Frekvenca pasu"];
var chSatAntennaType= ["Enojni kabel","Univerzalno"];
var chSatUserBands	= ["Uporabniški pas 1","Uporabniški pas 2","Uporabniški pas 3","Uporabniški pas 4","Uporabniški pas 5","Uporabniški pas 6","Uporabniški pas 7","Uporabniški pas 8"];
var chSatOthers		= ["Odzivnik"];
var chSatSetupOthers= ["Uporabniško določeno"];
var pleaseSelectSat = "Prosimo, najprej izberite satelite!";
var subOptions		= ["Podnapisi","Jezik digitalnih podnapisov","2. jezik digitalnih podnapisov","Vrsta podnapisov"];
var ttxOptionsCon      = ["Dekodiranje jezika strani","Jezik digitalnega teleteksta"];
var subType			= ["Normalno","Za gluhe in naglušne"];
var netIntf     	= ["Ethernet","Brezžično"];
var netConnDes		= ["TV preizkuša omrežno povezavo.\nProsimo počakajte",
						"Preizkus omrežne povezave uspešen!",
						"Preizkus omrežne povezave neuspešen."];
var netSsidError	= "Veljavna dolžina SSID imena je med 1-32 znaki. Prosimo, preverite SSID ime.";
var netOthers		= ["PIN koda"];
var netWlessAutoDes	= ["Preden kliknete OK se prepričajte, da je PIN koda nameščena v dostopno točko.",
						"Prosimo pritisnite tipko na dostopni točki v roku 120 sekund od klika tipke OK."];
var netConnRemind	= ["Geslo ni pravilno.",
						"Povezovanje. Prosimo, počakajte!",
						"Povezava je bila uspešna in IP je pridobljen!",
						"Neuspešna povezava",
						"TV skenira DT\nProsimo počakajte.",
						"Na TV ni priključena nobena brezžična naprava!"];
var netWireIpOptions= ["IP nastavitev","Tip naslova","IP naslov","Maska podomrežja","Privzeti prehod","Primarni DNS","Sekundarni DNS"];
var netWireConnRemind= ["Prosimo vpišite vrednost med 0 in 255.",
						"Uspešno povezano!",
						"Prosimo vtipkajte veljaven naslov",
						"Uspešno povezano!",
						"Pripojenie zlyhalo!",
						"Povezovanje. Prosimo, počakajte!",
						"Prosimo vnesite vrednost med 1 in 223."];
var netFlixOptions	= ["Deaktiviraj","ESN","Verzija Netflixa"];
var netFlixDes	 	= ["Ali želite deaktivirati?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Posodobitev programske opreme";
var netUpdateDialogTitle = "Posodabljanje programske opreme";
var netBGDownloadTitle 	= "Prenašam";
var netUpdateLoadingPrompt= ["Iskanje nadgradnje, prosimo počakajte!",
							"Programska oprema se prenaša ... Prosimo počakajte!",
							"Med posodabljanjem TV-ja NE UGAŠAJTE!",
                            "Nujno potrebna programska oprema se prenese samodejno v ozadju!"];
var netUpdatePrompt= ["Čestitamo, imate najnovejšo programsko opremo!",
						"Najdena je bila programske opreme z novejšo različico XXXX. Ali jo želite prenesti? Prenos lahko traja nekaj časa in je odvisen od vašega omrežja.",
						"Napaka v prijavi!",
						"Prenos podatkov ni uspel, prosimo poskusite ponovno kasneje!",
						"Napaka pri preb. Update XML!",
						"Neuspešna povezava",
						"Prenos programske opreme je končan. Ali želite začeti s flashem?",
						"Izguba podatkov! Napaka pri prenosu!",
						"Napaka pri preverjanu paleta, prosimo poskusite znova!",
						"Napaka v omrežju. Prosimo preverite in se ponovno povežite…",
						"Napaka pri posodabljanju. Prosimo zaženite TV!",
						"Datoteka, ki vsebuje nadgradnjo je bila nepričakovano izbrisana. Nadgradnjo omrežja zaženite znova.",
						"Programska oprema je bila uspešno prenesena v ozadje. Ali jo želite nadgraditi?"];
var netUpdateButtonText = ["Prenos", "Posodobi", "Kasneje", "Nikoli", "V redu","Nadaljuj"];
var autoDetectPrompt = ["Najdena je bila programske opreme z novejšo različico XXXX. Ali jo želite prenesti? Prenos lahko traja nekaj časa in je odvisen od vašega omrežja.",
						"Najdena nova različica programske opreme XXXX. Ali želite posodobiti?",
						"Zadnja nadgradnja omrežja je bila prekinjena. Nadgradnjo morate zagnati znova.",
                        "Prenos nove programske opreme, različica XXXX ni zaključen. Ali želite zdaj nadaljevati?",
                        "Programska oprema prenesena, ali jo želite posodobiti zdaj?"];
var sysOptions		= ["E-priročnik","Jezik menijev","Časovnik","Zaklepanje","Vnos nastavitev",
						"Posodobitev programske opreme","Lokacija","HbbTV način","Piškotki","Skupni vmesnik",
						"Napredne nastavitve","Ponastavi na tovarniške nastavitve","Indikatorska LED lučka","Takojšen vklop","Način samodejnega nakupovanja","Area","Način demo"];
var sysResetDes		= "Ste prepričani?";
var sysMenuLangOptions=["Jezik","Preferenčni jezik avdia","2. prioritetni avdio jezik"];
var sysTimerOptions	= ["Časovni pas","Naziv regije","Ura","Izklopni časovnik","Samodejno mirovanje", "Country region"];

var sysTimeZone		= ["Kot izdajatelj programa","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Izklop","10 Min","20 Min","30 Min","40 Min","50 Min","60 Min","90 Min","120 Min"];
var sysStandby		= ["Izklop","4 uri","6 uri","8 uri"];
var sysRegionName	= ["Madrid","Kanarski otoki"];
var sysClockOptions	= ["Samodejna sinhronizacija","Datum","Čas","Vklopi časovnik","Časovnik",
						"Kanal pri vklopu","Izklopi časovnik","Časovnik"];
var sysTimer		= ["Izklop","Denne","Raz"];

var sysInputSet		= ["Ni oznake","DVD","Blu-ray","HDD","DVDR",
						"HD snemanje","Igrice","Video rekorder","Osebni računalnik","Digitalni STB",
						"HD digitalni STB","Kamera","Snemalnik","Drugo"];
var sysAvVideoInput	= ["Samodejno","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["Z USB","Z omrežja","Po kanalu"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Ne najdem nove programske opreme!",
						"Najdena nova različica programske opreme XXXX. Ali želite posodobiti?",
						"Vložte prosím USB disk.",
						"Napaka pri preverjanu paleta, prosimo poskusite znova!",
						"NE odstranite USB ključa in NE izklopite TV med posodabljanjem sistemskega programa!",
						"Programska oprema je bila uspešno posodobljena.\nTV se bo samodejno ponovno zagnal!",
						"Najdena je bila programske opreme z novejšo različico XXXX. Ali jo želite prenesti? Prenos lahko traja nekaj časa in je odvisen od vašega omrežja.",
						"Prenašam",
						"Prenos programske opreme je končan. Ali želite začeti s flashem?",
						"Neusp.posodob.!",
						"Iščem datoteke za posodobitev",
						"Programska oprema je bil posodobljena.\nProsimo ponovno zaženite TV."];
var sysProductInfo	= ["Trenutna različica","Ime izdelka","Proizvajalec","Ime šasije"];
var sysCiDes		= ["Ni CI kartice."];
var sysAdOptions	= ["DivX(R) registracija","DivX(R) odjava","T-Link","Authorization Error","Potrditev odjave",
						"Potrditev najema","Izposoja potekla"];
var sysRegistDes	= ["Vašo napravo morate registrirati za predvajanje DivX zaščitenih videoposnetkov.",
						"Registračný kód:",
						"Registrirajte se na http://vod.divx.com"];
var sysDregistDes	= ["Odjavna šifra:",
						"Odjavite se na http://vod.divx.com",
						"Želite nadaljevati z registracijo?"];
var mediaAuthorization = ["Vaša naprava ni pooblaščena za predvajanje tega zaščitenega DivX(R) video posnetka."];
var deregistrationConfrimation = ["Vaša naprava je že registrirana.","Ali ste prepričani, da jo želite odjaviti?"];
var rentalConfirmation = "Ta DivX(R) najem je porabil XXXX od YYYY ogledov. Nadaljujem?";
var rentalExpired 	= "DivX(R) izposoja je bila uporabljena XXXX krat od YYYY ogledov. DivX izposoja je potekla.";

var parentalRatingNA		= ["***","***","***","***","***","***","***","***"];
var parentalRatingOptionUS		= ["***","***","***"];
var sysTVRatingUS=["***","***","***","***","***"];
var sysMPAAUS=["***","***","***","***","***","***"];
var parentalRatingOptionCanada		= ["***","***","***"];
var sysCanadaEng=["***","***","***","***","***","***"];
var sysCanadaFre=["***","***","***","***","***",""];
var sysResetRRT=["***"];
var sysLockOptions	= ["Zaklepanje kanala","Intervalni zaklep","Starševska ocena","Blokiraj vnos","Zaklep sprednje plošče","Zakleni namestitev",
						"Zamenjaj geslo","Največja glasnost","Počisti vse"];
var sysTimeIntervals= ["Tip zaklepa","Začetni čas","Končni čas"];
var sysRatingOptions= ["Ni","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","Cenzurirano (Španija)"];
var changePass		= ["Zamenjaj geslo","Novo geslo","Potrdi geslo"];
var changePassDes	= ["Geslo ni pravilno.\nPonovite vnos!",
						"Geslo ne ustreza.\nProsim vnesite ga ponovno!",
						"Geslo nastavljeno!",
						"Ta koda je preveč enostavna za geslo. \nProsimo za ponovni vnos!"];
var sysPowerOnChOptions= "Izberite način";
var sysPowerOnCh	= ["Zadnje stanje","Izbira uporabnika"];
var netWlessSecu    = ["Odprto","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Ni","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Ni podpore"];
var netWlessSecu3	= ["Ni","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Ni podpore"];
var netOptions		= ["Internetna povezava","Vmesnik","Brezžične nastavitve","Nastavitve IP","Informacije",
						"Preizkus povezave","DLNA","Daljinski upr.","Netflix nastavitve","Wifi-zaslon",
						"Tip naslova","IP naslov","Maska podomrežja","Privzeti prehod","Primarni DNS",
						"Sekundarni DNS","SSID","BSSID","Prosimo vpišite SSID:","Uporabniška identifikacija"];
var chEditDes		= ["Podvojena številka kanala!","Za izbris trenutnega znaka pritisnite rdeči gumb.","Neveljavne številke kanalov."];
var chEpgNoProgram	= "Brez programskih informacij, prosimo, najprej poiščite kanale!";
var chEpgWords		= ["Programski vodič","Ni podatkov o programu.","Kanal je zaklenjen!","Ni podrobnosti o programu.","Ni naslova programa."];
var chEpgBooking	= ["Razpored info", "Številka kanala","Datum začetka","Začetni čas","Končni čas",
						"Vrsta ponovitve","Vrsta razporeda","Dodajte urnik","Zamenjaj","Spremeni",
						"Dodaj/uredi"];
var epgHotKey		= ["Prejšnji dan","Naslednji dan","Filtru","Zoznam plánu","Pridať plán"];
var chEpgBookRemind	= ["Nepravilen čas začetka","Nepravilen čas zaključka","Podvojen urnik","Uspešno shranjeno.","Uspešno izbrisan."];
var chSchePara		= ["Zoznam plánu","Začetni čas","Datum začetka","Naslov programa","Ime kanala",
						"Trajanje","Ponovi","Urnik","Urejanje","Briši"];
var dateTimer		= ["Raz","Denne","Tedensko"];
var scheduleDeleteReminds="Ali želite izbrisati ta razpored?";
var scheduleNoLists	= "Na voljo ni seznama razporedov. Za dodajanje seznama razporedov pritisnite rdeč gumb.";
var chListWords		= ["Seznam kanalov","Izbira seznama","Način tunerja","Dodaj med priljubljene","Odstrani",
						"Izberi seznam kanalov","Izberi način tunerja","Zamenjaj"];
var chListType		= ["Vse","Digitalno","Analogno","Radio","Brezplačno","Priljubljene"];
var chAutoScanOptions=["Izberite operaterja","Channel tip","Samodejno iskanje"];
var souSoundType	= ["Nepravilno","Mono","Mono","Stereo","Stereo",
						"SAP","SAP","Dvojno 1","Dvojno 2","Dvojno 2",
						"Nicam mono","Nicam stereo","Nicam dual1","Nicam dual2","Nicam dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Glasba","Film","Jasen glas","Standardna","Osebno"];
var picAdRgbMode	= ["Izklop","Samo rdeče","Samo zeleno","Samo modro"];
var picAdOptions	= ["Zmanjšanje šuma","MPEG NR","RGB mode","Dinamično Kontrastno","LED Jasnost premikanja",
						"Kožni odtenek","Filmski način","Igralni način","Barvna temperatura","Beline",
						"Zamrzni","črna Stretch","Črn rob","Gamma","Način HDMI","10P ravnovesje beline","Podaljševalec barve",
						"Zmanjšanje zamegljenosti","Zmanjšanje tresljajev","Barvni prostor","Razjasnitev premikanja"];
var pic10Pwhite     = ["Interval","Rdeče","Zeleno","Modro","Ponastavi","Barva","Rumena","Cijan","Magenta"];
var picMotionClarity = ["Način premikanja","Interpolacija premikanja","LED Jasnost premikanja","Zmanjšanje zamegljenosti","Zmanjšanje tresljajev","Ponastavi"];
var picMotionMode   = ["Film","Gladko","Počisti","Šport","Stranka"];
var picResetDes		= "Vse osebne nastavitve bodo ponastavljene. Ali ste prepričani, da žeite izvesti izbrano dejanje?";
var pic10PReset     = "Ali ste prepričani, da želite ponastaviti 10P ravnovesje beline?";
var picMotionReset  = "Ali želite ponastaviti Jasnost premikanja?";
var picColorSpaceReset    = "Ali ste prepričani, da želite ponastaviti barvno mesto?";
var picOptions		= ["Prednastavljena slika",
						"Osvetlitev odzadaj","Svetlost","Kontrast","Nasičenost","Odtenek","Ostrina","Barvna temperatura","Način zaslona","Samodejna nastavitev formata",
						"Izboljšanje športa","3D","3D navigacija","ECO Nastavitve","Geometrija",
						"Napredne nastavitve","Ponastavitev slike","Mikro zatemnitev"];
var picSize			= ["Format 16:9", "oblika 4:3", "Formát 14:9", "Cinerama",
						"Zoom 16:9", "Zoom 16:9 zgoraj","Zoom 14:9","Raztegnjeni zoom","Široki zoom",
						"Zoom 2","Široki zoom 2","Izvorno uparjanje zaslona","Korak za korakom","Izvirnik","Panorama"];
var others			= ["Glasnost","Oddajanje","Geslo","Stanje","Shrani","Zamenjaj","Začni","Izhod","Iskanje","Briši",
						"Ni","Samodejno","Skeniraj","Varnost","Poveži","Aktualizovať","Ponovi","Ustavi","Nastavitve","Kanali",
						"Urejanje","Vstavi","Signala!","Končaj","Stereo","Avdio","Vir","Ni avdia","Napotki","Ponastavi",
						"Stranka","Nastavitev","Shrani","Uporabnik","Bližnja tipkovnica","Varnostni način","Vsak dan","Seznam PVR"];
var direction		= ["Levo","Desno","Gor","Dol"];
var audioType 		= ["MPEG","DOLBY AUDIO"/*"AC3"*/,"MPEG4","AAC", "DOLBY AUDIO"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Neznano"];
var soundChannels   = ["Neznano","Mono","Pomožni","Dvojni mono","Stereo","Stereo nizkotonec","Stereo Dolby prostorski zvok","2-kanalni prostorski","Prostorski","3.0Ch","4.0Ch","5.0Ch","Mono Lfe","Dvojni mono Lfe","Stereo Lfe","Prostorski 2Ch Lfe","Prostorski Lfe","3.1Ch","4.1Ch","5,1-kanalni","7,1-kanalni","Združeni stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dvojni","Levo","Desno","Drugi"];
var prompts			= ["Prilagodite nastavitev slike tako, da vam najbolje ustreza.",
						"Prilagodite nivoje osvetlitve. Osvetlitev je močnejša bližje številu 100. ",
						"Prilagodite nivoje kontrasta. Razlika med temno in svetlo sliko je večja bližje številu 100. ",
						"Prilagodite nivoje nasičenosti. Barva je močnejša bližje številu 100.",
						"Prilagodite nivoje ostrine. Slika je bolj jasna bližje številu 100.",
						"Prilagodite nivoje osvetlitve v ozadju. Zaslon je svetlejši bližje številu 100. ",
						"Prilagodite nivoje odtenka. Ta nastavitev spremeni ton barve.",
						"Izberite obliko slike, ki najbolj ustreza predvajanemu programu.",
						"Nastavite možnosti varčevanja z energijo.",
						"Prilagodite nastavitve zaslonske geometrije, ko priključite računalnik.",
						"Izberite več naprednih nastavitev slike.",
						"Ponastavite vse nastavitve slike na privzete.",
						"Izberite način zvoka, ki vam najbolj ustreza.",
						"Prilagodite ravnovesje glasnosti med levim in desnim kanalom.",
						"Zvočni sistem TruSurround HD zagotavlja bogat zvok in jasnosti pri nizkih in visokih frekvencah.",
						"Oblika digitalnega vmesnika za povezovanje digitalnega avdio TV izhoda na opremo domačega kina. ",
						"Izberite jezik zvoka, ki vam najbolj ustreza.",
						"Omogočite nastavitev za slabovidne in uživajte v televizijskem programu.",
						"Testirajte TV sliko, zvok in signal.",
						"Izberite tip seznama kanalov, ki ustreza vašemu TV signalu.",
						"Izberite jezik podnapisov, ki bodo prikazani na dnu zaslonu.",
						"Pregled besedila in slik trenutnega kanala.",
						"Standard Digital Living Network Alliance. Uživajte v glasbi, fotografijah in videoposnetkih preko domačega omrežja in drugih naprav, kot je računalnik.",
						"Prikažite vsebino svojega pametnega telefona na televizorju in telefon uporabite kot daljinski upravljalnik za televizor. ",
						"Prikažite vsebino iz naprave Android, združljive z Miracast, na vašem zaslonu televizorja.",
						"Zaklenite vaš TV.",
						"Izberite ime vaše naprave.",
						"Izberite prostor predvajanja.",
						"Ponastavite vse sistemske nastavitve na privzete.",
    					"Switch off sports mode for more options.",
    					"Izboljšajte okoljski kontrast",
    					"Poseben način za uživanje v športnih igrah",
    					"Uživajte v več funkcijah CEC."];
var initialTitle	= ["Dobrodošli","Začetna nastavitev"];
var initialPrompt	= ["Izvedite začetno namestitev in čaka vas svet razburljivih dogodivščin!",
						"Prosim, izberite jezik:",
						"Izberite svojo državo/regijo:",
						"Prosimo, izberite lokacijo:",
						"Prosimo izberite tip omrežne povezave:",
						"Prosimo izberite način omrežne povezave:",
						"Povezava do xxxxxxxxx ni uspela! Prosimo povežite napravo glede na sledeči diagram ali izberite Levo za ponastavitev.",
						"Povezan z  xxxxxxxxx! Prosimo izberite Desno za nadaljevanje.",
						"1)Vaš TV morda že ima vgrajen brezžični vmesnik\n 2)Ali, če ste dobili brezžični USB vmesnik, ga priključite na vaš TV. Nato prosimo izberite način priključitve preko brezžičnega omrežja",
						"Iskanje. Prosimo počakajte ...",
						"Na TV ni priključena nobena brezžična naprava!",
						"Prosimo preverite ali je PIN koda nameščena na DT, preden kliknete na spodnjo \"Next\" tipko.",
						"Prosimo, pritisnite gumb na vstopni točki, prej kot v 120 sekundah, preden pritisnete tipko Desno!",
						"WPS (namestitev zaščitenega Wi-Fi)",
						"PIN(Osebna identifikacijska številka)",
						"PBC(Konfiguracija na pritisk tipke)",
						"Do naslednjih vsebin je mogoče dostopati samo s pomočjo omrežne povezave. Ali želite preskočiti nastavljanje omrežja?",
						"Na voljo je nova programska oprema za prenos. Prenos lahko traja nekaj časa, odvisno od stanja omrežja.  ",
						"S posodobitvijo programske opreme TV-ja lahko uživate v najnovejših funkcijah in storitvah.",
						"Ne boste mogli uporabljati najnovejših funkcij in storitev. Ali želite preskočiti posodobitev programske opreme? ",
						"Pritisnite desni gumb za nadaljevanje.",
						"Med posodobitvijo ne izključite napajanja, saj lahko to povzroči nepravilno delovanje televizorja.",
						"Če ne želite zagnati posodobitve, prosimo izberite NE.",
						"Posodabljamo, prosimo počakajte",
						"Prav tako lahko posodobite programsko opremo v SISTEMSKI/PROGRAMSKI POSODOBITVI.",
						"Za izbrano državo potrebujete nastavitev gesla. \nProsimo nastavite kodo za vaš TV in jo potrdite.",
						"Ta koda je prelahka uporabite druge številke.",
						"Čestitamo! Prva nastavitev je končana. Konfiguracijo lahko spreminjate preko glavnega menija in povezanih podmenijev.",
						"Prosimo izberite način varnosti:",
						"Prosimo izberite način brezžične omrežne povezave:",
						"Omrežje"];
var initNetCabAndDonRe = ["Omrežni kabel ni priključen, prosimo priključite omrežni kabel!","Ni vgrajenega brezžičnega adapterja ali USB adapter ni prisoten."];
var initChPrompt = ["Namestitev TV kanalov","Prosimo izberite tip iskanja s pomočjo antene.","Obdelava samodejnega iskanja...","Naslednji antenski kanali so bili najdeni:","Prosimo izberite iskanje kabelskih kanalov.","Prosimo izberite enega operaterja s seznama.","Prosimo nastavite informacije iskanja","Najdeni so bili naslednji kabelski kanali:","Prosimo izberite enega operaterja iz naslednjega seznama","Prosimo izberite satelite za iskanje ali uredite izbrane satelite","Prosimo nastavite parametre satelita","Najdeni so bili naslednji kanali, ponovno iskanje kanalov lahko sprožite pod Kanal/Iskanje kanalov"];
var initClockPrompt = ["Pridobite čas s pomočjo omrežja!",
						"Prosimo nastavite datum in čas:"];
var initialOptions	= ["Prostor","Namestitev omrežja","Posodobitev programske opreme","Namestitev kanala","Ura"];
var initialHotkeys	= ["Nazaj","Izberi","Naslednje","Strinjam se"];
var initLocations	= ["Domov","Trgovina","Obchod a demo"];
var initNets		= ["Ožičeno","Brezžično","Nimam omrežne povezave"];
var initWireManuals	= ["IP naslov","Maska podomrežja","Privzeti prehod","Primarni DNS","Sekundarni DNS"];
var initSoftUpdates = ["Posodobi zdaj","Posodobi kasneje"];
var initChannelIns	= ["Nadaljuj","Ne želim namestiti kanalov"];
var initChScanTypes	= ["Digitalno & Analogno","Digitalno","Analogno","Ne želim iskanja"];
var initChDvbts		= ["Antenski ATV kanali:","Antenski DTV kanali:"];
var initChDvbcs		= ["Kabelski ATV kanali:","Kabelski DTV kanali:"];
var initChDvbss		= ["Satelitski kanali:"];
var initChDvbSOther	= ["Ne želim iskanja satelitov"];
var initEndConnectedStatus= ["Prekinjen","Brezžično omrežje je povezano","Kabelska povezava"];
var initEndInstallations= "XXXX nameščenih kanalov";
var initEndUpdate	= ["Posodobljeno"];

var audioScenes 	= ["Na mizi","Na zidu"];			
var screenSavers	= ["Ni kanalov, prosimo, pritisnite tipko OK in začnite skeniranje!",
						"Ni signala!",
						"Kodirano",
						"Samo podatki",
						"Avdio program",
						"Ni zvoka in slike",
						"Ni na voljo",
						"Ni teleteksta",
						"Ni podatkov o programu.",
						"Program je zaklenjen!",
						"Program je zaklenjen!\nPritisnite OK in vnesite kodo.",
						"Ni podrobnosti o programu.",
						"Program je škodljiv za mladoletne.\nPritisnite OK in vnesite vašo kodo.",
						"Kanal je zaklenjen!",
						"Kanal je zaklenjen!\nPritisnite OK in vnesite kodo.",
						"Vnos je zaklenjen!\n Pritisnite OK in vnesite kodo.",
						"Ni podprto!",
						"Storitev trenutno ni na voljo",
						"Vnos zaklenjen!",
						"Ni naslova programa.",
						"Ni funkcije",
    					"Ni Podnapisi"
						];
var channelNumberOverPromt = ["The number of search programs has exceeded,you can delete some programs and then retry!"];
var chBookingPromt	= ["Trenutni kanal ima nastavljeno snemanje, TV bo začnel snemati.",
						"Snemanje je najdeno.\n Preklopite na XXXX za snemanje",
						"Trenutni kanal ima opomnik.",
						"Opomnik je najden.\n Preklopite na XXXX"];
var timeUnit		= ["Sek","min"];
var ciPromt			= ["Omrežni podatki so se spremenili. Za nadgradnjo lahko izvedete pregled nadgradenj.",];
var othersPromt		= ["Prosim počakajte …",];
var menuOptions		= ["Slika","Zvok","Kanala","Smart TV","Omrežje","Sistem","Podpora"];
var optionOptions	= ["Prednastavljena slika","Prednastavitev zvoka","Zamrzni","T-Link","timeshit","PVR","Zoznam plánu","Nastavitve","*"];
var optionTLinkPromt= [["Samodejni vklop","Samodejno mirovanje","Meni vodiča"],
						["Vklop","Mirovanje","Pojačala za volumen"]];
var powerPromt		= ["TV se bo kmalu ugasnil! Prosimo pritisnite poljubno tipko za preklic."];
var ttxLanguage		= ["ZAHODNA EVROPA","VZHODNA EVROPA","Ruščina","Arabščina/hebrejščina","Perzijščina","Arabščina","Vitryska","Grščina","Turščina"];
var ttxOptions		= ["Razkrij","Listaj po podstraneh","Jezik","Alarmna stran","Zadnja novica"];
var weekday         = ["Nedelja","Ponedeljek","Torek","Sreda","četrtek","Petek","Sobota"];
var lcnConfflict	= "Motnje pri sprejemu tega programa.";
var inShopMode		= "Vaš TV je v načinu za nakupe. Za domači način izberite \"Sistem\" in spremenite postavko \"Lokacija\" v meniju.";
var nitRefresh		= "Podatki o omrežju so se spremenili. Želite zagnati posodobljeno skeniranje?";
var picHDMIMode     = ["Samodejno","Grafični","Video"];

var glassRemind    	= ["Prosimo, uparite vaša 3D očala s TV-jem\n(Pritisnite in držite gumb za prižig na 3D očalih).","Vaša 3D očala so povezana s TV-jem",""];
var pvrRemind 		= ["Ne izklapljajte USB naprave ali prekinjajte napetosti"];
var pvrConName   	= ["PVR","Informacije o programu:",["Za snemanje HD kanala izberite USB ključ(s hitrostjo večjo od 5mb/s), za snemanje SD kanala pa izberite USB ključ(s hitrostjo višjo od 3mb/s)","Posnet video je shranjen v mapo \"PVR\". "],"Ustavi","Snemanje","ura","Minuta","Trajanje","Napotki","Nastavite dolžino snemanja s pomočjo smernih tipk."];
var pvrDisRemind 	= "Prosimo vstavite USB ključ za snemanje.";
var pvrRemindWords  = ["Ali želite končati?",
							"Ali želite ustaviti snemanje in brskati med posnetimi datotekami?",
							"Disk je odstranjen.",
							"Ni dovolj prostora.  ",
							"Ni posnetkov. Začnite s snemanjem.",
							"PVR ne deluje v Kodiranih Kanalih.",
							"Funkcija ni na voljo",
							"Uspešno shranjeno.",
							"Ali želite ustaviti snemanje in spremeniti vhodni vir?",
							"TV bo končal trenutno snemanje. Ali želite končati?",
							"PVR snemanje potrebuje TV signal za pravilno delovanje, prosimo preverite signal."];
var pvrChangeCh 	= ["Ali želite zamenjati kanal?",
							"Ali želite ustaviti snemanje in spremeniti kanal?"];
var pvrChangeToPIN8	= ["Ali želite zamenjati vir na napravo, ki je priključena na vhod SCART?",
				    		"Ali želite, da se ustavi postopek zapisa in spremenite vir naprave, priključene na vhod SCART? "];
var pvrChangeToCEC  = ["Ali želite spremeniti vir naprave, priključene na HDMI vhod? ",
				  			 "Ali želite, da se ustavi postopek zapisa in spremenite vir naprave, priključene na HDMI vhod? "];
var pvrGuideJump    = ["Ali želite vnesti EPG? ",
							"Ali želite ustaviti snemanje in vstopiti v EPG?"];
var pvrMediaJump    = ["Želite vstopiti v medij? ",
							"Ali želite ustaviti snemanje in vstopiti v Media?"];
var timeshiftExtra	= ["Ali želite ustaviti timeshift in spremeniti TV zamenjaj kanal?",
						"Ali želite, ustaviti časovni razmik in spremeniti vir na napravo, priključeno na vhod SCART? ",
						"Ali želite, ustaviti časovni razmik in spremeniti vir na napravo, priključeno na vhod HDMI? ",
						"Časovni zamik ne deluje v Kodiranih Kanalih.",
						"Ali želite, da se ustavi časovnega razmika in vpišite EPG? ",
						"Ali želite ustaviti timeshift in spremeniti TV v način USB?",
						"Ali želite ustaviti timeshift in spremenit zamenjaj vir?",
						"Prosimo vstavite USB ključ za snemanje.",
						"Velikost diska ni zadostna.",
						"TV bo končal trenutni časovni zamik. Ali želite končati? "];
var timeshiftStatus	= ["Hitro vrtenje nazaj","Ustavi","Predvajaj","Premor","Hitro vrtenje naprej"];
var pvrPowerOffRemind= ["Pripravljenost snemanja","Mirovanje","TV snema zdaj, želite shraniti posnetek, ko je TV v stanju pripravljenosti? "];
var timeshiftInitTitle= "Nastavitev diska";
var timeshiftInitReminds= ["S tem čarovnikom nastavite USB disk za funkcijo timeshift. Prosimo izberite način nastavitev.",
						 "Za boljše delovanje vam priporočamo, da formatirate USB disk. Izbrisali boste vse podatke.",
						 "Prosimo izberite velikost datoteke za timeshift.",
						 "Formatiranje",
						 "Ni dovolj prostora.  ",
						 "Izdelava timeshift datoteke",
						 "Preizkus hitrosti",
						 "Disk je prepročasen (< %f MB/sec), da bi omogočili funkcijo timeshift!",
						 "Disk je pripravljen za timeshift. Pripročamo vam, da zamenjate  disk  (hitrosti > %f MB/sec) za boljše delovanje.",
						 "Disk je pripravljen za timeshift. "];
var timeshiftInitButtons= ["Formatiranje","Preskoči","Prekliči","V redu","Končaj","Izhod"];
var timeshiftInitOther=["Hitr. diska:","MB/s"];

var selectChoice	= "Ste prepričani?";
var chAtvStore		= "Shrani kot XXXX ";
var chEpgFirstGenreUK= ["Film","Novice in dejstva","ZABAVA","Šport","Za otroke","Izobraževalno","Način življenja","Drama"];
var homePageTitleList = ["APLIKACIJE","TV","VIDEI","Domača stran"];
var homePageFavAndAllName  = ["Priljubljene aplikacije","Vse aplikacije"];
var homePageBackUp = ["E-priročnik","GuideOn "];
var homePageRemind   = ["Polne funkcije so na voljo le po vzpostavitvi omrežne povezave.","Vaš TV nima še nobenih kanalov. Programi so na voljo po končanem iskanju kanalov.. ","Ni programa","Poiščem kanale zdaj?"];
var homePageHistory = ["zgodovina "];
var miracastTitle = ["Wifi-zaslon","TCL naprava"];
var miracastRemind=["WiFi TV vam omogoča brezžično (tj. brez kablov) deljenje zaslona in zvoka iz vaše naprave, kot je naprimer pametni telefon ali tablični računalnik na vaš TV. S tem lahko na vašem TV-ju gledate isto sliko, ki je prikazana na vašem pametnem telefonu ali tabličnem računalniku. Na primer, na pametnem telefonu lahko predvajate video posnetek in ga hkrati prikažete na TV-ju, ali pa uporabite vaš tablični računalnik kot kontrole za igre z vsebino, ki je prikazana na velikem zaslonu vašega TV-ja.","Wifi-zaslon na TV je pripravljena. Prosimo zaženite in delite zaslon vaše naprave na TV.","Povezovanje. Prosimo, počakajte!","Povezava ni bila uspešna!","Ni mogoče povezati. Prosimo, preverite!"];
var homePageLittleWin = ["Nastavitve","Medij","Priljubljeni programi","Smart TV","EPG"];

var hbbtvStopRemind  = ["Chcete prerušiť prehrávanie?"];
var colorSystem = ["Samodejno","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Za več informacij pritisnite ≡";
var emptyListInfo = "Na TV ni priključene naprave !";
var optionVideoListArray_1 = ["Prednastavljena slika", "Prednastavitev zvoka", "Način predvajanja", "Način zaslona", "3D način", 
							  "L-D stikalo", "Globina polja", "Podnapisi", "Filmska glasba", "Naslov", "Poglavje", "Info"];
var optionVideoListArray_2 = ["Prednastavljena slika", "Prednastavitev zvoka", "Način predvajanja", "Način zaslona", 
							  "Podnapisi", "Filmska glasba", "Naslov", "Poglavje", "Info"];
var bottomTipsText = ["Predvajaj/premor", "Hitro vrtenje nazaj", "Hitro vrtenje naprej", "Seznam predvajanja", "Nastavitve"];
var picturePresetArray = ["Standardna", "Dinamično", "Naraven", "Film", "Osebno"];
var videoPlayModeArray = ["Ponovi vse", "Ponovi eno ", "Normalno"];
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Široki zoom", "Zoom 2", "Široki zoom 2", "Raztegnjeni zoom", "Samodejno"];
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "Zoom 14:9", "Zoom 16:9", "Zoom 16:9 zgoraj", "Samodejno"];
var Mode3DArray = ["Izklop", "2D-na-3D", "En ob drugem", "Zgoraj in spodaj", "Prepletanje vrstic"];
var videoOptionListArray = ["Izklop", "Posnetek", "Podnapisi", "Naslov", "Poglavje"];
var subMenuTitleText = "Podnapisi";
var langMenuTitleText = "Jezik avdia";
var titleMenuTitleText = "Naslov";
var mode3DMenuTitleText = "3D način";
var langInfoText = "Posnetek";
var STOP_RESUME_INFO = "Ustavi-Nadaljuj";
var playListName = "Ime omrežja:";
var eb_tips = "Napotki";
var ok_button = "V redu";
var eb_info = ["Napaka pri dekodiranju zvoka.", "Napaka pri dekodiranju videa.", "Audio format ni podprt. ", 
			   "Oblika videozapisa ni podprta.", "Ne morem odpreti te datoteke.", "Napaka pri predvajanju, prosimo poskusite ponovno.",
			   "Format ni podprt.", "Ups! Predvajalnik je prenehal delovati.",
			   "Pot datoteke ne obstaja ne obstaja ali ni veljavna.\n Ponovno vstavite napravo za shranjevanje in poskusite znova.",
			   "Nadaljujem s predvajanjem od zadnje\n točke predvajanja?"];
var picturePlayErrorTips = ["Napaka pri nalaganju!!!","Slika je prevelika!!!","Omrežna napaka!!!","Napaka niti!!!","Napaka parametra!!!","Neznana napaka!!!"];
var frameTitleText = "Nova naprava";
var eb_quit_info = "Ali ste prepričani, da želite končati? ";
var eb_yes = "DA";
var eb_no = "NE";
var offinfo = "Izklop";
var naInfo = "Nič";
var consoleInfoArray = ["Hitro vrtenje nazaj", "Hitro vrtenje naprej", "Predvajaj/premor", "Seznam predvajanja"];
var cantOperateText = ["Funkcija ni podprta. "];
var chapterChangeInfo = "Samo poglavja od 1 do XXXX so na voljo. ";
var metaDataArray = ["Naslov / urejanje metapodatkov: ", "Metapodatki poglavja:", "Metapodatki zvoka:", "Metapodatki podnapisa:"];
var metaTitleInfo = "Naslov";
var metaChapterInfo = "Poglavje";
var videoLoadingInfo = "Analiziranje ... ";
var listLoadingInfo = "Nalaganje ... ";
var pgInfo = "Pravna ocena:";
var fileNameText = "Ime omrežja:";
var fileDateText = "Datum";
var fileSizeText = "Velikost";
var fileDurationText = "Trajanje";
var fileDirectorText = "Režiser";
var fileCopyrightText = "Avtorske pravice";
var fileArtistText = "Izvajalec";
var fileAlbumText = "Album";
var fileGenreText = "Zvrst";
var fileYearText = "Leto";
var fileGenreText = "Zvrst";
var mainListArray = ["Vse", "Slika", "Video", "Glasba"];
var sortArray = ["Ime omrežja:", "Datum"];
var parserArray = ["Normalno", "Rekurzivno"];
var emptyTipsInfo = "Ups. Nobena podprta datoteka ni bila najdena.";
var emptyFolderInfo = "Ups. Nobena podprta datoteka ni bila najdena.";
var sortName = "Razvrsti po ";
var parserName = "Parser";
var divx_str1 = "DivX(R) registracija";
var divx_str2 = "DivX(R) odjava";
var infor_str = "Info";
var quickMenuEmptyText = "Možnosti niso na voljo.";

var musicSoundPresetArray = ["Standardna", "Film", "Glasba", "Jasen glas", "Osebno"];
var musicInformationArray = ["Ime omrežja:", "Izvajalec", "Album", "Zvrst:", "Leto:", "Čas trajanja:"];
var playListName = "Ime omrežja:";
var playTipsInfo = ["Prehrávate prvý súbor.", "Predvajate zadnje datoteka."]
var musicNameInfo = "Name";
var musicArtistInfo = "Izvajalec";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Prednastavitev zvoka";
var optionBGMInfo = "Predvajaj v ozadju ";
var optionAudioOnlyInfo = "Samo avdio";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX je priključen na TV! ";
var tvRemoteTitle		= "Daljinski upr.";
var tvRemoteDeveloper	= "Program je razvilo podjetje TCL";
var tvRemoteDeviceTitle	= "Ime naprave:";
var remoteOption		= ["Deljenje medijev","Daljinski nadzor","Pomoč","O programu","Pametna povezava"];
var remotebottom		= "  Prosimo, da prenesete \"TV daljinec« na vaš pametni telefon";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Deljenje fotografij, videoposnetkov in glasbe s TV preko telefona. ",
							"Koraki: \n 1. Kliknite \"TV daljinec\" na telefonu. Povežite telefon s TV-jem preko istega omrežja WiFi; \n 2. Kliknite \"Deljenje medija\" za brskanje medijskih datotek, \n 3. Pošljite medij na TV za predvajanje (z eno od naslednjih možnosti) ",
							"      a) Povlecite in spustite mapo/datoteko na TV ikono na vrhu zaslona;\n      b) Zamahnite s telefonom proti TV-ju za zagon prve datoteke;\n      c) Predvajajte medij na telefonu in klinite ikono za deljenje na TV;",
							" 4. Med predvajanjem na TV-ju, telefon stresite za predvajanje prejšnje ali naslednje datoteke."];
var controlReminds		= ["Uporabite telefon kot daljinski upravljalnik za TV.",
							" ",
							"Koraki: \n 1. Kliknite \"TV daljinec\" na telefonu. Povežite telefon s TV-jem preko istega omrežja WiFi; \n 2. Kliknite \"Oddaljen nadzor\" za nadzor TV-ja. "];
var helpDeviceWords		= "Interakcija na več zaslonih";
var helpBottom			= " V času tehnologije oblaka so pametne naprave kot sta telefon in TV povezane. Z vašo družino lahko uživate v medijih na več zaslonih in nadzorujete vaš TV preko telefona! ";
var helpReminds			= ["Priprave\n 1. Prenos in namestitev \"TV daljinca\" iz Google Play ali Apple Store. \n 2. Povežite telefon s TV-jem preko istega omrežja WiFi. ",
							" ",
							"Priporočila za telefon\n   1. CPE: nad 800MHz\n   2. Pomnilnik: najmanj 80MB prostora",
							" ",
							"Zavrnitev odgovornosti\n   Če možnost TV-daljinca na vašem telefonu ni na voljo, se obrnite na proizvajalca telefona."];
var helpButtons			= ["Prejšnje","Naslednje"];
var aboutReminds		= ["Daljinski upr.","Program je razvilo podjetje TCL"];
var aboutExit			= "Izhod";
var smartReminds		= ["Hitra in pametna povezava med TV in telefonom.",
							" ",
							"Koraki \n 1. Povežite televizor in pametni telefon v istem lokalnem omrežju. Kliknite \"TV daljinec\" na pametnem telefonu. \n 2. Kliknite \"Smart Connect\" za skeniranje QR kode. \n 3. S TV-jem načinu oddajanja, pritisnite tipko INFO na daljinskem upravljalniku televizorja za 4 sekunde, dokler se ne prikaže celozaslonska QR koda.",];
var smartQRReminds		= ["Prosimo kliknite Smart Connect na TV daljincu na vašem telefonu in poskenirajte QR kodo za hitro povezavo TV-ja in telefona.",
							"QR koda vsebuje informacije o računu lokalnega omrežja. Prosimo, da ga shranite."];
							

var consoleTipArray = ["Prejšnje","Naslednje","konzola ","Seznam predvajanja"];							
var optionInfoArray = ["Prednastavljena slika","Način predvajanja","Trajanje","Učinek","Info"];

var playModeArray = ["Normalno","Naključni izbor","Ponovi"];
var durationArray = ["Kratki (5s) ", "Srednji (10s) ", "Dolg (15s) "];
var effectArray = ["Ni", "Zasuči", "Brisanje desno", "Brisanje levo", "Brisanje gor", "Brisanje gor", "Okvir navznoter", "Okvir navzven", "Naključno"];
var infoArray = ["Ime:","Velikost:","Datum:","Lokacija"];

var picturePresetBarTitleInfo = "Prednastavljena slika";
var picturePresetBarArray = ["Standardna","Dinamično","Studio","Film","Osebno"];
var upTipsInfo = "Premik slike"; //add yums 2014-10-10
var consoleTipsArray = ["konzola ","Prejšnje","Naslednje","Seznam predvajanja","Nastavitve"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Ponovno pritisnite RIGHT za predvajanje naslednje slike","Ponovno pritisnite LEFT za predvajanje prejšnje slike","Ponovno pritisnite DOWN za prikaz seznama predvajanja"]; //add yums 2014-10-10

var optionPvrListArray = ["Prednastavljena slika","Prednastavitev zvoka", "Način zaslona", "3D način", "Podnapisi", "Filmska glasba", "Info"];							
	
var titleSpanFirstArray = ["Nadzor & povezava","Osnovne funkcije","APLIKACIJE","TV","Nastavitve","Pogosta vprašanja "];
var titleSpanSecondArray = [["Daljinski nadzor","Tipke plošče","Preprosto krmarjenje","TV povezava","TV povezava","TV povezava","Brezžično"],["Zaganjalnik","Statusna vrstica","Vir"],["Predvajanje aplikacij","Medij","Daljinski upr."],["Prilagodite kanal in glasnost","Seznam kanalov","EPG","Namestitev kanala","Najljubši kanali "],["Prilagoditev slike ","Prilagoditev zvoka","Prilagoditev kanala","Posodobitev programske opreme","Jezik","Starševski zaklep "],["Pogosta vprašanja ","Pogosta vprašanja ","Odpravljanje težav ","Odpravljanje težav ","Pogoji uporabe"]];
var contentSpan1_1Array =[["NAPAJANJE:","VIR:","NASTAVITVE:","MOŽNOST:","NAZAJ:","INFORMACIJE:","DOMOV:","IZHOD:","SEZNAM:"],
    ["Vključi napravo ali način mirovanja",
        "Izbere vhodni vir",
        "Za prikaz menija Nastavitve",
        "Za prikaz menija Možnost",
        "Pojdite nazaj na prejšnji meni ali zaprite trenutno aplikacijo",
        "Prikazuje informacije o programu",
        "Za dostop do domače strani pametnega televizorja (SmartTV)",
        "Pojdite nazaj na prejšnji meni ali zaprite trenutno aplikacijo",
        "Prikazuje seznam kanalov"]];
var contentSpan1_2Array = ["Predchádzajúci kanál","Nasledujúci kanál","Povišanje glasnosti","Zmanjšanje glasnosti","Gre na domačo stran ","Potrdite možnost ","Pripravljenosti / vklop "];
var contentSpan1_3Array = ["OK/vodnik","Kanal gor","Kanal dol","Glasnost gor","Glasnost dol","Na voljo kot puščični gumbi z istimi funkcijami."];
var contentSpan1_4Array = ["LAN ","HDMI (MHL) ","HDMI ","HDMI (ARC) ","AV OUT adapter ","LAN (Lokalno omrežje)","Pametni telefon","Osebni računanik /Sprejemnik/DVD","Audio ojačevalnik ","Audio ojačevalnik / Monitor ","Vaš TV morda nima vseh potrebnih vtičnic."];
var contentSpan1_5Array = ["USB 2.0 ","USB 3.0 ","Slušalke","AV IN adapter ","SPDIF ","CMP AUDIO IN adapter ","CMP IN (YPbPr) adapter ","USB naprave ","USB naprave ","Slušalke","DVC / Igralna konzole / Sprejemnik / DVD ","Audio ojačevalnik ","DVC / Igralna konzole / Sprejemnik / DVD ","Vaš TV morda nima vseh potrebnih vtičnic."];
var contentSpan1_6Array = ["Skupni vmesnik","SD ","VGA","SCART","mini SCART","VHOD ZA ANTENO","PCMCIA kartica ","SD kartica","Osebni računalnik","Sprejemnik / DVD ","Antena /Kabelski način/Satelitski način","Vaš TV morda nima vseh potrebnih vtičnic."];
var contentSpan1_7Array = ["Tablet","Osebni računalnik","Usmerjevalnik","Telefon","TV"];
var contentSpan1_8Array = ["Preklopi funkcijo/Vklop","Dolgi pritisk za časovnik mirovanja","Dol","Gor","Glasnost/kanal/vir"];

var contentSpan2Array = [["Stlačte šípky pre zobrazenie domovskej stránky.","Nato pritisnite OK za ogled enega izmed predstavljenih programov ali za vhod v aplikacijo."],["Prikaži datum, omrežja in naprav itd. v zgornjem desnem kotu zaslona. "],["Izberite vhodni vir med napravami, priključenimi na TV prek različnih vrat, kot so TV, AV, HDMI itd. "]];

var contentSpan3Array = ["Uživajte v svojih priljubljenih aplikacij prek strani pametne televizije (Smart TV)","Oglejte si fotografije, glejte videoposnetke in predvajajte glasbo iz USB-naprave za shranjevanje.","Povežite svoj televizor in pametni telefon ali tablični računalnik v istem omrežju","Kliknite nScreen ali daljinski upravljalnik na pametnem telefonu ali tabličnem računalniku.","Omogočite skupno rabo fotografij, videoposnetkov in glasbe na več zaslonih, z vašo družino in upravljajte televizor preko pametnega telefona."];

var contentSpan4Array = [["Pritisnite UP / DOWN za preklop kanalov ","Pritisnite LEFT/RIGHT za prilagoditev glasnosti "],["Pritisnite LIST na daljinskem upravljalniku za pregled seznama kanalov"],["EPG je vodnik na zaslonu, ki prikazuje TV-programe. Programe lahko pomikate, izbrate, pogledate in snemate. "],["Iskanje in namestitev kanalov "],["Dodajte ali urejajte vaše priljubljene kanale na seznamu kanalov "]];

var contentSpan5Array = ["Uživajte v vaših priljubljenih programov prek video aplikacij "];

var contentSpan6Array = [["Pritisnite Možnost za prikaz možnosti nastavitev sistema ","Vhod v nastavitve slike za prilagoditev vrednosti "],["Pritisnite Možnost za prikaz možnosti nastavitev sistema ","Vnesite Nastavitve zvoka, da nastavite možnosti "],["Pritisnite Možnost za prikaz možnosti nastavitev sistema ","Vhod v nastavitve kanalov za nastavitev možnosti"],["Posodobite televizijo, ko je na voljo nova različica programske opreme "],["Lahko izberete želeni jezik menija "],["Omogoča staršem, da zaklenete kanale ali programe, ki so neprimerni za otroke "]];

var contentSpan7_1Array = [["Ni slike, ni zvoka ","Preverite, če je varovalka ali odklopnik deluje. ","Priklopite dodatno električno napravo v električno vtičnico se prepričajte, da deluje ali je vklopljen. ","Omrežni vtič je v slabem stiku z vtičnico ","Preverite vir signala. "],["Normalna slika, ni zvoka ","Pritisnite gumb za glasnost navzgor, da povečate glasnost. ","Nastavitev zvoka je napačna. ","Signal napake iz oddaje. "],["Normalen zvok, ni slike ","Prilagodite svetlost in kontrast ","Signal napake iz oddaje. ","Preverite, če je v načinu samo avdio. "]];
var contentSpan7_2Array = [["Radijske frekvence motenj ","Ta poseg proizvaja gibljive valove ali diagonalne črte, v nekaterih primerih, izgubo kontrasta v sliki. Poiščite in odstranite vir radijskih motenj. "],["Brez barve ","Prilagodite nastavitve barve. ","Poskusite drug kanal. Črno-beli program je morda dosegljiv."],["Daljinski upravljalnik ne deluje ","Zamenjajte baterije. ","Baterije niso nameščeni pravilno.TV morda ni priključen na električno omrežje."]];
var contentSpan7_3Array = [["Vsebina naprave USB se ne prikaže ","Preverite, ali je naprava za shranjevanje USB združljiva s TV-jem. ","Preverite, da so zvočne in slikovne datoteke podprte na TV-ju."],["Predvajanje brez zvoka","Audio format videa ni podprt s strani TV predvajalnika. "],["Datoteke se ne predvajajo gladko ","Zmogljivost prenosa iz naprave za shranjevanje USB, morda omejuje hitrost prenosa podatkov v TV."]];
var contentSpan7_4Array = [["Na kaj je treba paziti pri posodobitvi programske opreme ","Brez električnih prekinitev med posodobitvijo programske opreme.","Izogibajte se vseh operacij z vašim daljinskim upravljalnikom pri posodabljanju programske opreme. ","Bodite potrpežljivi, saj lahko postopek posodabljanja programske opreme traja malo dlje. "],["Po posodobitvi programske opreme ne bo prišlo do bistvenih sprememb TV vmesnika.","Pod določenimi pogoji lahko posodabljanje programske opreme pomeni ne le dodajanje novih funkcij, ampak tudi izboljša delovanje TV-ja brez bistvenih sprememb vmesnika. Prav tako lahko TV vmesnik ostane včasih nespremenjen. "]];
var termsTitle = "Obchodné podmienky";
var termsConditions = ["(Zákonné prehlásenie) spoločnosti TCL - výrobcu tohto televízora. ","Zaradi različnih zmogljivosti izdelkov s funkcijo Pametni TV - Storitve in zaradi omejitev glede razpoložljive vsebine določene funkcije, aplikacije in storitve ne bodo na voljo na vseh napravah oz. v vseh območjih. Za nekatere funkcije, ki so del SmartTV, boste morda potrebovali dodatne zunanje naprave oz. bo treba zanjo plačati članstvo, kar je treba kupiti oz. plačati posebej. Prosimo, da za več informacij o posameznih napravah in razpoložljivosti vsebine obiščete naše spletno mesto. Storitve in razpoložljivost vsebin v okviru funkcije SmartTV so lahko občasno spremenjene brez predhodnega obvestila. \n   Celotna vsebina in storitve, do katerih je mogoče dostopati s to napravo, so last tretjih strank in so zaščitene z avtorskimi pravicami, patenti, trgovskimi znamkami in/ali drugimi zakoni, ki se nanašajo na intelektualno lastnino. Tovrstna vsebina in storitve so namenjene izključno vaši osebni in nekomercialni rabi. Teh vsebin in storitev ne smete uporabljati na način, ki ga lastnih vsebin oz. ponudnik storitev ni odobril. Ne omejujoč se na navedeno, razen če to izrecno odobri zadevni lastnik vsebin ali ponudnik storitev, vsebin oz. storitev, ki so prikazane s to napravo, ni dovoljeno na noben način oz. z nobenim sredstvom spreminjati, kopirati, ponovno objavljati, nalagati, objavljati, oddajati, prevajati, prodajati, ustvarjati izpeljana dela, izkoriščati ali distribuirati. \n   IZRECNO PRIZNAVATE IN SE STRINJATE, DA NAPRAVO UPORABLJATE NA LASTNO ODGOVORNOST IN DA V CELOTI PREVZEMATE ODGOVORNOST GLEDE ZADOVOLJIVE KAKOVOSTI, UČINKOVITOSTI DELOVANJA IN NATANČNOSTI. NAPRAVA IN CELOTNA VSEBINA TER STORITVE TRETJIH STRANK SO ZAGOTOVLJENE KOT \"VIDENO-KUPLJENO\", BREZ KAKRŠNE KOLI GARANCIJE, BODISI IZRECNE BODISI IMPLICITNE. PODJETJE TCL IZRECNO ZAVRAČA VSA JAMSTVA IN POGOJE V ZVEZI S TO NAPRAVO IN KAKRŠNO KOLI VSEBINO IN STORITVAMI, BODISI IZRECNIMI BODISI IMPLICITNIMI, VKLJUČNO Z, A NE OMEJENO NA PRODAJNA JAMSTVA, ZADOVOLJIVO KAKOVOST, USTREZNOST ZA DOLOČEN NAMEN, NATANČNOST, NEMOTEN UŽITEK IN NEKRŠITEV PRAVIC TRETJIH STRANK. PODJETJE TCL NE JAMČI NATANČNOSTI, VELJAVNOSTI, PRAVOČASNOSTI, ZAKONITOSTI ALI CELOVITOSTI VSEBIN OZ. STORITEV, KI SO NA VOLJO S TO NAPRAVO, IN NE JAMČI, DA BODO NAPRAVA, VSEBINA ALI STORITVE USTREZALI VAŠIM ZAHTEVAM OZ. DA BO DELOVANJE NAPRAVE OZ. STORITEV NEMOTENO IN BREZ NAPAK. PODJETJE TCL NE BOD POD NOBENIMI POGOJI, NITI V PRIMERU MALOMARNOSTI, ODGOVORNO, BODISI POGODBENO BODISI ODŠKODNINSKO, ZA KAKRŠNO KOLI NEPOSREDNO, POSREDNO, NAKLJUČNO, POSEBNO ALI POSLEDIČNO ŠKODO, ODVETNIŠKE TARIFE, STROŠKE ALI DRUGO ŠKODO, KI IZHAJA IZ ALI JE V ZVEZI S KAKRŠNI KOLI INFORMACIJAMI OZ. KI JE POSLEDICA UPORABE NAPRAVE, ALI V ZVEZI S KAKŠNO KOLI VSEBINO ALI STORITVIJO, DO KATERE IMATE DOSTOP VI ALI TRETJA STRANKA, TUDI ČE STE BILI OBVEŠČENI O MOŽNOSTI NASTANKE TOVRSTNE ŠKODE. \n   Storitve tretjih strank so lahko kadar koli in brez predhodnega obvestila spremenjene, začasno ustavljene, odstranjene, ukinjene ali prekinjene oz. je do njih onemogočen dostop, podjetje TCL (proizvajalec televizorjev znamke Thomson) pa ne zastopa ali jamči, da bosta vsebine ali storitve za kakršno koli obdobje razpoložljive. Tretje stranke vsebino in storitve oddajajo preko omrežij in sredstev za prenos podatkov, nad katerimi podjetje TCL nima nadzora. Podjetje TCL ne omejujoč se na splošne navedbe te zavrnitve odgovornosti izrecno zavrača vsakršno odgovornost za spremembe, prekinitve, onemogočene, odstranjene ali začasno ukinjene vsebine oz. storitve, ki so na voljo s to napravo. Podjetje TCL lahko v vsakem primeru in brez predhodnega obvestila ali odgovornosti omeji uporabo ali dostop do določenih storitev oz. vsebin. Podjetje TCL ne odgovarja za storitve strankam, ki se nanašajo na vsebino in storitve. Kakršna koli vprašanja ali zahteve glede storitev, ki se nanašajo na vsebino ali storitve, naslovite neposredno na zadevnega ponudnika vsebine in storitev."];

var noChannelListRemind        = ["Ni najdenih kanalov. Seznam kanalov bo na voljo po končanem iskanju kanalov.","Skeniranje kanalov"];
var closeSubtitleRemind   = "Funkcija bo na voljo, ko bodo podnapisi izklopljeni. Ali želite to nastaviti sedaj? ";

var estickerTitles = ["Visoko realistične slike","Barva, ki oživi","Mogočno, realistično premikanje","Sinamična kakovost slike","SR UHD prilagajanje","Izkusite 3D svet","Hitrejše delovanje ","Prihodnja 4k vsebina","Uživajte v svetu spletnih vsebin ","Dostopajte do dodatnih vsebin","Vgrajeni digitalni sprejemniki","Povežite vse naprave","Različni viri 4K ","USB vsebina","Izjemno hiter WiFi","Mobilne vsebine na televiziji ","Vsebine mobilnih naprav ","lokalne vsebine ","Odobreno s strani DivX","Brezhibna slika","Pripravljenost na kanale","TDT Premium"];
var estickerDescriptions = ["Neverjetna izkušnja gledanja zahvaljujoč slikam s štirikrat večjimi podrobnostmi polne visoke ločljivosti na UHD zaslonu ","Širok barvni razpon omogoča čustva v vsakem prizoru z živahnimi rdečimi in smaragdno zelenimi ","4K interpolacija okvirja in ovetlitev v ozadju, ki skrbi za odpravljanje zamegljenosti pri gibanju","Živost originalne slike je izboljšana in prikazuje resnično dinamične izraze z odličnim kontrastom ","Uživajte v jasnih in natančno prikazanih TV oddajah in v Blu-ray diskih, zahvaljujoč tehnologiji Super Resolution ","Izkusite TV s 3D pripravljenostjo in glejte različne 3D vsebine ","Bolj prijetna zabavna izkušnja s štirijedrnim procesorjem za nemoteno interakcijo, izboljšano delovanje ","HEVC (H.265) kodek podpora za prihajajoči standard 4K distribucijo videa ","Izobilje spletnih aplikacij, video na zahtevo, ogled preteklih vsebin in brskanje po spletu","Oglejte si več z dodatnimi storitvami in vsebino iz vaših najljubših oddaj","Dostopajte do TV kanalov v visoki ločljivosti brez dodatnega sprejemnika ","Enostaven priklop številnih digitalnih virov, ki so na voljo doma","TV pripravljen za prihodnost, ki lahko predvaja 4K 50 / 60Hz preko HDMI 2.0 z HDCP 2.2 ","Video in foto vsebin neposredno iz USB diska, trdega diska ali kamere na velikem zaslonu v 4K ločljivosti ","Najnovejša generacija 2x2 MIMO in AC standarda zagotavlja neprimerljivo hitrost dostopa do interneta ","Uživajte v fotografijah, video posnetkih, aplikacijah iz mobilnih naprav na velikem zaslonu, zahvaljujoč tehnologiji za zrcaljenje zaslona ","Fotografije, video posnetke, aplikacije iz pametnega telefona ali tabličnega mogoče prikazati na velikem zaslonu ","Prikaz lokalnih vsebin na velikem zaslonu , kot so fotografije, video posnetki iz naprav, povezanih v lokalno omrežje ","Igrajo v najem ali lastnih filmov zaščitena z DivX ","Izjemno ozek okvir in zelo tanka oblika","Testirano in odobreno s strani Canal+","Testirano in odobreno s strani TDT Premium"];							

var eManualTextArray = ["E-priročnik","Všetky grafické prvky vo vnútri sú len pre ilustráciu."];
var frontPanelRemind = "Sprednja plošča je zaklenjena.";
var eRPRemind		 = "Način Shop (Trgovina) ne izpolnjuje zahteve ERP. Ste prepričani?";	
var noRelatedChannel = "Žiadny súvisiaci kanál";
var option0624Name          = ["BOP","BFS","Po dogodkih","GetUserID","BGM","Reset all","Ponastavi na tovarniške nastavitve","NRM","Voľba DVB-T2 a Krajiny","HbbTV način"];
var DVBT2AndChoice = ["Vklop","Podľa krajiny","Izklop"];
var hbbtvServiceRemind = "Storitev HbbTV bo na voljo kmalu.";
var insertWord = "Vstavi";			
var viewDetail = "Ogled podrobnosti";							

var remindOAD  = "Posodobitev programske opreme. Posodobitev programske opreme obstaja na drugem kanalu. Če sprejmete prenos se bo kanal samodejno spremenil. Ali želite izvesti posodobitev?";

var LEDStatus = ["Utripa", "Normalno","Izklop"];
var netFlixRemind = "Ta funkcija bo prekinila dostop do storitev Netflix, dokler se ponovno ne vpišete.";
var ESNExplanation = "Elektronska serijska številka";
var resetShopRemind = "Sistem se ponovno zaganja, prosimo ne ugasnite TV-ja";
var initialSelectOption = "Prosimo izberite eno možnost:";
var databaseRemind   = "Sistem je zaznal, da je podatkovna baza iz neznanega razloga poškodovana in jo je samodejno ponovno zgradil. Pritisnite OK za nadaljevanje";
var Deactivation = "Deaktiviranje";
var oadFutureRemind = "Posodobitve programske opreme. Posodobitev nove priporočene programske opreme bo na voljo čez %s. Posodabljanje lahko traja nekaj časa in ekran se lahko zatemni. Ne ugašajte sprejemnika med posodabljanjem. Za sprejem posodobitev ob načrtovanem času prosimo, da pustite sprejemnik prižgan ali v stanju pripravljenosti.  Ali želie prejeti posodobitve?";
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Zvočni izhod";
var bt_soundOutPutTV = "TV-zvočniki";
var bt_soundOutPutBT = "Naprava Bluetooth";
var bt_soundOutPutBT_TV = "Bluetooth in TV";
var bt_refreshBarName = "Naprave";
var bt_settingTips_On = "Vključite Bluetooth in preglejte napravo.";
var bt_settingTips_Finding = "Iskanje naprav na voljo…";
var bt_settingTips_NoDevice = "Na voljo ni naprav.";
var bt_deviceList_State_NoConnect = "Ni povezano";
var bt_deviceList_State_Connecting = "Povezovanje…";
var bt_deviceList_State_Connected = "Povezano";
var bt_deviceList_State_Paired = "Združeno";
var bt_deviceList_Conncect_Failed_Tips1 = "Povezava ni uspela.";
var bt_deviceList_Conncect_Failed_Tips2 = "Potrdite, da je Bluetooth XXX vklopljen";
var bt_deviceList_Conncect_Success = "Povezano z napravo Bluetooth.";
var bt_deviceList_Disconncect_Success = "Povezava z Bluetooth prekinjena.";
var bt_deviceList_Disconnect = "Ali resnično želite izključiti iz XXX?";
var bt_tipsTitle = "Nasvet";
var bt_bluetooth_Pairing_Title = "Združevanje Bluetooth";
var bt_bluetooth_Input_Pin = "Vnesite PIN:";
var bt_bluetooth_Output_Pin_Tip = "Vnos PIN XXXX s tipkovnico.";
var bt_bluetooth_Pin_Wrong_Tip = "Napačen PIN";
var bt_bluetooth_Remove_Pair_Title = "Poizvedba";
var bt_bluetooth_Remove_Pair_Ask = "Pozabi to napravo?";
							
var audioDescriptionName = ["Opis zvoka","Zvočnik","Glasnost zvočnika","Slušalke","Glasnost slušalk","Glasnost AD","Naprava BT","Glasnost naprave BT","Ojačevalnik","Zvočnik"];
var audioDescriptionOptions = ["Izklop","Normalno","Opis zvoka"];
var volumeOffRemind = 'V meniju Nastavitve, izberite “Vklop” za možnost XXX.';
var switchSourceRemind   = " Vstavljen. Ali želite preklopiti?";
var footballModeName = "Športni način";
var resetStadium = "Stadion";							

var atvSearchMenu = "ATV manual search";
var dtvSearchMenu = "DTV manual search";
var settingNoticeSourceName ="Samodejni vir";

var smartTVOptions		= ["Portal Smart TV-ja","HbbTV","Deli in gledaj","Wifi-zaslon","Pogoji poslovanja",
    "Mirovanje preko omrežja","Ponastavi smart TV","Cookie policy","Politika zasebnosti","Brisanje podatkov"];
var supportOptions		= ["Diagnostika na daljavo","Stik"];
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
							
var tvDoctor=["Diagnostika na daljavo 2.0",
"Aplikacija se uporablja za izvajanje diagnostike in izboljšanje uporabniške izkušnje za vaš pametni TV. Za odpravljanje težav s TV-jem plikacija prenese delovne podatke in model TV-ja. Do osebnih podatkov aplikacija ne dostopa. Zagotovite, da je TV priključen na omrežno povezavo.",
"Lokalna diagnostika",
"Ko se diagnostika začne, prosimo sledite navodilom našega inženirja za podporo.",
"Diagnostika na daljavo",
"Pred uporabo se prepričajte, da je inženir za podporo na voljo.",
"Serijska številka:",
"&nbsp;&nbsp;&nbsp;&nbsp;Uporabniška identifikacija:",
"Povezujem…",
"Diagnostika poteka. \nProsimo pustite omrežje priključeno.",
"Ni dostopa do spleta, \nprosimo preverite omrežno povezavo.",
"Izhod"
];
var contactUsOption = ["Stik",
    "Kontaktirajte TCL, če imate težave z uporabo naprave.",
    "Stik",
    "Spletna stran: obiščite",
    "Številka klicnega centra:","Informacije o izdelku","Ime modela:",
    "Različica progr.opreme:","","Uporabniška identifikacija:","ID projekta:",
    "Tip odjemalca:","Brezžični MAC naslov:","Ožičen MAC naslov:","Netflix ESN:","Preglejte informacije na vašem mobilnem telefonu.",
    " in nato izberite vašo državo."];


//本地launcher的翻译，与服务器无关，只用于本地launcher
var homePageWords = ["zgodovina ", "Iskanje"];//home页的翻译
var titlePageWords = ["Domov", "Video","TV","Aplikacije"];//index的标题翻译
var videosPageWords = ["Film", "Sport","Glasba","Popularno","Igre","Izobraževanje","Novice"];//videos页的内容翻译

//同时应用于本地和服务器
var statusPageWords = ["USB","Nastavitve","WiFi","Omrež"];//状态栏的翻译

//二级页面的翻译
var searchPageWords = ["Iskanje", "Popularna iskanja:","Oddaje, filmi, ljudje ..."];
var resultSearchPageWords = ["Rezultati o", " ","Prosimo poiskusite druge ključne besede.","Žal, videa o  ","nismo našli."];
var historyPageWords = ["zgodovina", 'Pritisnite','za brisanje zgodovine.',"Izbriši eno","Izbriši vse","Včeraj","Danes"," Niste gledali še nobenega videa.","Zgodovina gledanja je uspešno izbrisana!"];
var channelPageWords = ["Žal videa nismo našli."];


//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9",
                       	   "Zoom-","0","Zoom+",
                       	   "Izhod","0","",
                       	   "Seznam","0","Besedilo",
                       	   "Vodič","Potrdi","Izhod",
                       	   "Meni","Podnapisi","Info",
                       	   "Ustavi",
                       	   "Info","Meni","Izhod",
                       	   "Izhod"
                       	   ];	

//added for LA sports mode
var sportsModeInitReminds= ["S tem čarovnikom lahko nastavite pogon USB za športni način. Prosimo izberite način namestitve.",
						 "Prosimo izberite velikost datoteke za športni način.",
						 "Izdelava datoteke za športni način",
						 "Pogon USB je prepočasen (< %f MB/sek) za funkcijo športnega načina!",
						 "Pogon USB je pripravljen za športni način. Za boljši učinek vam priporočamo, da spremenite hitrost, ki je > %f MB/sek.",
						 "Pogon USB je pripravljen za športni način."];

var sportsModeExtra	= ["Ali želite ustaviti športni način in spremeniti kanal?",
						"Ali želite ustaviti športni način in spremeniti vir naprave, ki je priključena na vhod SCART?",
						"Ali želite ustaviti športni način in spremeniti vir naprave, ki je priključena na vhod HDMI?",
						"Športni način ne deluje na kodiranih kanalih.",
						"Ali želite ustaviti športni način in odpreti EPG?",
						"Ali želite ustaviti športni način in odpreti Medije?",
						"Ali želite ustaviti športni način in spremeniti vhodni vir?",
						"TV bo končal trenutni športni način. Ali želite zapustiti?"];
var remoteControlNote = "– Priložen daljinski upravljalnik se lahko razlikuje, odvisno od modela izdelka";


var textArray = ["Volume","Channel","Source","Switch/Power","Guide","seconds to Power OFF"];
var guideArray = ["VOL-","VOL+","CH-","CH+","Pre","Next"];
var favChannelListRemind = ["Ni priljubljenih kanalov. Prosimo odprite druge sezname in uporabite “zelen gumb” za dodajanje priljubljenih kanalov."];

var proxySetting = ["Proxy nastavitve","Vhod"];
var powerOffShop = ["Priporočena uporaba načina Nakupuj, se strinjate?"];
var tcastTextPageWords = ["Obilo video posnetkov, bogatih aplikacij","preko TV daljinca, na dosegu s konicami prstov","Kakovostna vsebina na velikem zaslonu"];
var tcastOtherWords = ["SKENIRAJTE QR-kodo in prenesite T-CAST","Omrežje je povezano na TV","Ime TV-ja","T-Cast"];
var hbbtvWords = ["Nastavitev HbbTV","HbbTV","Piškotki","Piškotki tretjih oseb","ID naprave","sledenje"];
var hbbtvTrackingWords = ["YES","NO","Ne zanima me"];
var eStickerTipWords = ["Na voljo je manj kot 400 M shranjevalnega prostora, ali bi želeli izbrisati videe v načinu Demo, da bi pridobili več prostora?"];
var delEstickerVideoRemid = ["Video je bil uspešno izbrisan"];
var selectSatRemind = "Izberete lahko največ 20 satelitov!";
var cookiePolicyTitle = "Cookie Policy – Online Smart TV Services";
var cookiePolicyConditions = ["Company respects your privacy when using Smart TVs manufactured and Services provided by Company. Cookies are used by many websites and other Internet services and your Smart TV will accept, store and transmit cookies to ensure that these websites and services operate properly. Company also uses cookies when providing you Services. In this Cookie Policy Company describes which cookies are set on your Smart TV and how you can manage them.\nPlease note that all personal data that Company collects and/or processes through or with the help of cookies is subject to the Privacy Policy and you should read the Cookie Policy together with the Privacy Policy.\n1. What is a cookie?\nCookies are small text files that may be placed on your Smart TV. When a website or the red-button service of a TV station is accessed, the website or service may store a cookie in the Smart TV. During subsequent accesses, a cookie that is placed on your Smart TV will send information to the party that has placed the cookie. Cookies are extremely common and used on a number of websites and services. Each cookie will typically contain the name of the domain from which the cookie has come, the \"lifetime\" of the cookie, and a value (usually a unique number). For a more thorough explanation of what cookies are and how they operate, please visit www.allaboutcookies.org.\nCookies can be categorized into functional cookies and non-functional cookies. Functional cookies are cookies that are strictly required for the purpose of providing you the Smart TV services and for websites and other services to provide the right content to the Smart TV. Non-functional cookies are all other cookies.\nThis Cookie Policy relates to cookies that are placed by us, as well as advertising cookies that may be placed by third parties through our services on your Smart TV. This Cookie Policy does not relate to cookies that may be placed when you use the Smart TV services to access third party websites, services or applications. For these cookies we refer you to the respective cookie policies of such third parties. However, this Cookie Policy describes how to delete such cookies (see section 4 below).\n2. Which non-functional cookies do we use?\nAdvertising: In-video and display advertisements may be served to your Smart TV when using Smart TV services. These advertisements can be served by us or by third parties via, or as coordinated by, our advertising server, which performs a central coordinating role in relation to the serving of such advertisements. Our advertising server or a third party advertising server will set a cookie on your Smart TV. By means of this cookie an advertising server will register whether an advertisement has been served to your Smart TV or whether someone using your Smart TV has clicked on an advertisement. We use the information saved in such advertising cookie to remember which advertisements have been served on your Smart TV so we can make sure that not too many of the same advertisements are served on any particular Smart TV, and that we are able to settle our commercial arrangements with our advertising partners. We shall not use this information to serve targeted advertisements. Furthermore, third parties may use our advertising system to serve advertisements to your Smart TV and place cookies on your Smart TV when such advertisements are served. \nThese cookies contain, among others, information about the served advertisements, information on in which application or domain such advertisements are served, and your IP address. This is done to remember how often a particular advertisement is shown, and in order to prevent the same advertisement being shown too often. External third party advertisers that may place advertisements may also use cookies to track your activity over multiple websites, and to provide advertisements that correspond to your personal preferences.\n3. Third party websites\nWhen you visit websites or services of third parties via the Smart TV services of your Smart TV, it is possible that such websites or services place cookies on your Smart TV, and that such websites track and store your interactions on such websites. We do not request or encourage such activities and will not use such information. Please refer to the respective cookie and privacy policies of such websites and services for more information about such parties’ use of such cookies.\n4. Cookie deletion\nYour user interface of your Smart TV allows you to delete all cookies and other local browser storage from the Smart TV. It is highly advisable to remove all cookies and locally stored settings prior to selling or giving away your Smart TV.\n5. Contacting us\nIf you have any questions or comments regarding our Cookie Policy or our practice of using cookies you can send us an e-mail via FRsupport@tcl.com.\nVersion: 1.0\n"];
var privacyPolicyTitle = "Privacy Policy – Online Smart TV Services";
var privacyPolicyConditions = ["We respect your privacy when handling your personal data. This Privacy Policy describes the entity responsible for the collection, processing and use of personal data we collect from you in connection with the use of our Smart TV services (\"Services\"), what types of personal data we collect about you, what we do with it, and your rights in relation to our use of the personal data. \n1. Data controller\nThe collection, processing and use of the personal data collected from you when using the Services is conducted by Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, China (\"Company\"). Please note, however, that we are not responsible for all data processing activities set out below. We have nevertheless included a description of the respective activities in our Privacy Policy because this processing is connected with your use of the Smart TV.\n2. Data processing consent\nSome of the collection, processing and/or use of your personal data require your consent. \nIf you have consented to the use of your personal data for the purpose of improving the Services, your consent had the following wording:\n\"I consent to the collection, processing and use of my device start time, DTV channel list, favorite channels list, visit time, and viewed channels for the purposes of analyzing user habits to improve the Services and/or to analyze how many online users Company has per day/month/year and to the sharing of this information with TV stations.\"\nIf you have consented to the use of your personal data for advertisements that are tailored to your interests, your consent had the following wording:\n\"I consent to the collection, processing and use of my client type and country for the purpose of receiving appropriate advertisements.\"\nConsent is voluntary and you will still be able to use the Services if you do not consent. However, you may see advertisements and other content that is not tailored to your preferences. Irrespective of your consent Company reserves the right to collect, process and/or use the above data to the extent permitted by applicable law.\nYou may withdraw your consent to any of the above with effect for the future at any time. You may object to a use of your personal data for marketing, market or opinion research and to the tailoring of the Services to your needs. In order to withdraw your consent and/or to object, please change the privacy settings of your Smart TV accordingly.\n3. Personal data collected\nIrrespective of your consent, Company collects, processes, stores and uses the following data categories:\nDevice-ID: Your Smart TV stores a fixed unique number that enables us to identify and authenticate the Smart TV when you use the Services. This number is called the Device-ID. The Device-ID will be provided to our service partner to provide you the Services. We also provide the Device-ID to selected content partners for authentication purposes. These content partners use the Device-ID to authenticate your Smart TV for access to services provided by a content partner.\nIP address and MAC address: Your Smart TV will be assigned an IP address when accessing the Internet. This IP address will be transmitted to us and processed by us each time the Smart TV requests information or data from the Services. If your Smart TV is behind a router (e.g. in a local home network or local WLAN), we may collect and process the IP address of such router. The MAC address is a unique number assigned to each network interface of your Smart TV. The MAC address will also be collected and processed by us when the Smart TV requests information or data from the Services.\nService request data: Whenever you connect your Smart TV to the Internet and turn on the Smart TV, it will automatically connect to the Services, which are managed by our service partner. Your Smart TV will then be authenticated as being certified for access to the Services. For authentication purposes, the Services store one or more unique numeric identifiers related to your Smart TV. When connecting to the Service, the Smart TV will transmit the IP address it has been assigned and will transmit device specific information (Smart TV model, software version) to look whether software updates are available.\nService settings: As part of the regular functionality of the Services you can manually arrange the order in which apps are displayed by the Services. Our service partner will store your arrangement and other preferences you may set during using the Services. This information will be linked to the Device-ID.\nDevice specific information: The Smart TV stores several information about itself and its configuration. This information includes the Smart TV type, the version of the operation system of the Smart TV, its panel resolution, the project ID (i.e. information regarding configuration files), the user agent, browser name, browser version, and the language and country that have been configured in the Smart TV. This information will be used by us and will be provided to our service partner and content partners.\nAdvertising: The Services may serve advertisements. These advertisements are served by us, or by third parties using advertising inventory assigned by us. All advertisements are served by means of, or via, our advertising server, which fulfills a coordinating role for the serving of advertisements. Our advertising server or the third party advertising server may set a cookie on the Smart TV. Please refer to our Cookie Policy for more information about these cookies.\nService and Content Partner traffic: When you use the Services your Smart TV will request data from the Services via the Internet. As part of these requests your IP address as described above and the language and country that has been configured in your Smart TV will be transmitted to our service partner. Our service partner will process the respective data in accordance with its privacy policy.\nSecond screen usage: If you use our second screen application, the controls you activate on the application and the country and language settings, DTV channel list, favorite channels lists, schedule lists, Device-ID, current channel, protocol version and IP address of your Smart TV will be collected and processed by us on our servers. Our servers will then control your Smart TV as directed by you in the second screen app.\nHbbTV - \"Red Button\": TV stations (\"Stations\") may send additional information with their TV signal. If the Smart TV receives specific instructions in such additional information and if it is connected to the Internet, the Smart TV will download a picture or small page from the Station's website and display it together with the information to press the \"Red Button\" on your remote control if you want to use additional services provided by the Station. This happens each time you zap. Downloading the picture from the Station's website the Smart TV will transmit some personal data, i.e. the DTV channel list, current channel, event information table, TV time, IP address of your Smart TV and cookies stored on the Smart TV (if any). The Station is responsible for the collection, processing and/or use of this data. Moreover, if you use additional services offered by a Station through the Red Button, the Station may collect other personal data about you (e.g. which on-demand videos you watch, the news you read, etc.).\n4. Purposes for which we process and/or use your personal data\nWe process collected data for the following purposes:\n• Providing the Services: We use the IP address and MAC address, Device-ID, the version of the operation system of the Smart TV, client type of your Smart TV and its panel resolution, the project ID (i.e. information regarding configuration files), your DTV channel list, viewed channels, time zone, country and language settings to provide your Smart TV with access to the Services and services provided by content partners. Purposes include (but are not limited to) authentication, providing location based services to you (e.g. weather forecasts); abuse handling, management of security incidents, monitoring of availability of the Services, and providing backup services of user preferences.\n• Authentication: We use the Device-ID and MAC address for authentication purposes.\n• Software updates: Each time your Smart TV is powered on, it will provide us with the IP address, Device-ID, software version, client type of your Smart TV, project ID (i.e. configuration files), user ID, serial number to offer you and provide you with appropriate software updates. \n• Improving the Services: We use aggregated and anonymized usage data (i.e. data about your interaction with the Services) to improve the user experience of the Services.\n• Serving advertisements: We use the information in advertising cookies to allow the system to log which advertisements have been shown on your Smart TV in order to make sure that you do not receive too many similar advertisements, and we are able to settle our commercial arrangements with our advertising partners. External advertisers that serve advertisements on the Services or the content partner websites after coordination by our advertising server, may also use cookies to track you over multiple websites, and to serve advertisements that reflect your personal preferences.\n• Optimizing advertisements: We use data related to advertising views and clicks on advertisements to optimize the advertising experience of consumers in the Service.\n• Discounts: We provide the Device-ID to selected content partners to enable these partners to identify to what extent they can provide you with free access to Video on Demand titles in their collection.\n• Law enforcement: We may be required to provide data to competent law enforcement authorities or courts of justice. If we do so, we will only do so subject to a binding legal instrument like a warrant or a judicial order, which requires us to cooperate with the relevant authorities.\nUse of the Services is possible by using pseudonyms, unless specific services require that you provide your name and/or email address.\n5. Categories of recipients\nCompany shares your personal data collected during your use of the Services only with the following third parties:\n• With third party providers of Smart TV services if you request such services (e.g. if you start the Netflix application on your Smart TV we may share your IP address, MAC address, software version and TV model name with Netflix).\n• With third party content partners if you request certain content provided by such content partners (e.g. in order to provide you with the GoLive IP TV service, we may share your TV client type, IP address and language settings with the legal entity providing the GoLive service).\n• To the extent you have consented to the sharing of specific personal data with third parties above, Company will share your personal data with such third parties.\n• With outsourcing service providers as data processors assisting Company with providing the Services.\nCompany shares your personal data with other third parties only if Company is obligated to do so on the basis of legal requirements (e.g. to courts or criminal prosecution authorities), you have consented to the respective sharing or the sharing is otherwise lawful under applicable law.\n6. Countries in which your data will be processed\nCompany and/or some of the recipients of your personal data listed above may be located outside of the European Economic Area (i.e. in the following countries: Peoples Republic of China, United States of America). Therefore, your personal data may be processed in countries which are not recognized as providing an adequate level of protection of personal data in accordance with Directive 95/46/EC of the European Parliament and of the Council of 24 October 1995 on the protection of individuals with regard to the processing of personal data and on the free movement of such data.\n7. Your rights\nYou may contact Company in order to receive information about your personal data processed by Company and/or to exercise your statutory rights regarding access, rectification, deletion and blocking of your personal data; and/or to object the processing of your personal data for purposes of marketing and/or market or opinion research.\n8. Changes to the Privacy Policy\nTo improve our Services we may require amendments to this Privacy Policy – e.g. by the implementation of new technologies or the introduction of new services. We reserve the right to change or supplement this Privacy Policy at any time.\n9. Contact information\nIf you have any questions about the Privacy Policy or would like to complain about our handling of your personal data, please contact us by using one of the following contact details:\nEmail: FRsupport@tcl.com\nVersion: 1.0\n"];
var privacyPolicyTerms = [
    "Omogoči storitev Smart TV",
    "Soglašam z zbiranjem, obdelavo in uporabo mojega časa zagona naprave, seznama kanalov DTV, seznama priljubljenih kanalov, časa obiska in pregledanih kanalov, da bi analizirali uporabniške navade za izboljšanje storitev in/ali analizirali, koliko uporabnikov na spletu TCL Ima na dan/mesec/leto in na izmenjavo teh informacij s televizijskimi postajami.",
    "Omogoči storitev priporočeno.",
    "Omogoči aplikacijo drugega zaslona za mobilne naprave",
    "Omogoči samodejno posodabljanje programske opreme.",
    "Omogoči funkcijo Freeview Play"
];
var privacyPolicyTips = [
    "Vse storitve Smart TV bodo onemogočene.",
    "StoritevHbbTV , ki ga zagotavljajo TV kanali, ko je v uporabi vgrajeni sprejemnik, bo onemogočena.",
    "Vsebina in storitev priporočenih TV programov bosta onemogočena.",
    "Uporaba drugega zaslona bo onemogočena.",
    "TV ne bo avtomatično preverjala programske opreme in novih funkcionalnosti.",
    "Vsebina Freeview Play bo onemogočena."
];
var privacyPolicyRemind = "Prosimo, označite ustrezen kvadratek v Nastavitvah.";
var set = "Nastavi";
var copyShopDemoTips = ["Povezava z USB je vzpostavljena, ali želite prekopirati video na USB-ključ?","Prekopiraj video na USB-ključ","Video je bil uspešno prekopiran!","Napaka v kopiranju videa!"];
var dataDeletionWords = ["Izbriši podatke o storitvi pametnega televizorja na zalednih strežnikih.","Opombe: Podatki, povezani z vašo uporabo pametnega televizorja, bodo izbrisani v enem mesecu po označitvi tega elementa. To brisanje ne vpliva na lokalne podatke, shranjene v vašem televizorju.","Ne pošiljaj več podatkov na strežnik pametnega televizorja.","Opombe:  Ko označite ta element, se vaši podatki, povezani z uporabo storitev pametnega televizorja, ne bodo več prenašali na strežnik. Vaš televizor ne bo več prejemal priporočenih storitev.","Če želite izvedeti več, obiščite spletno mesto www.tcl.eu"];
var miracastWords = ["Brezžična povezava","Zrcaljenje android telefona na TV","Kliknite za povezavo","Ta funkcija je na voljo le na android telefonih"];
var miracastTips = ["Koraki povezovanja","Odprite sistemske nastavitve","Več načinov povezovanja \n / Druge brezžične povezave","Izberite brezžični zaslon","Kliknite za povezavo \n čakanje na iskalne rezultate"];
var termsAndConditions = ["\nThe contents and services (collectively the \"Licensed Application\") made available to you through this TV set (this \"Device\") are licensed, not sold, to you for use only under these terms and conditions. The providers of the Licensed Application (each an \"Application Provider\") reserve all rights not expressly granted to you.\n\n1.Scope of License\n\nThe license granted to you for a Licensed Application by the relevant Application Provider is limited to a non-transferable license to use the Licensed Application on the Device that you own or control. You may not distribute or make the Licensed Application available over a network where it could be used by multiple devices at the same time. You may not rent, lease, lend, sell, redistribute or sublicense the Licensed Application. \n\nAll Licensed Applications and all contents included therein that are accessible through this Device belong to the Application Provider and are protected by applicable intellectual property laws. Unless otherwise permitted by applicable law, you may not modify, copy, decompile, reverse engineer, disassemble, republish, upload, post, transmit, translate, attempt to derive the source code of, create derivative works of, or otherwise exploit any Licensed Application or any updates or any part thereof. If you breach this restriction, you may be subject to prosecution and damage claims. The terms of the license will govern any upgrades provided by the Application Provider that replace and/or supplement the original Licensed Application, unless such upgrade is accompanied by a separate license in which case the terms of that license will govern. You shall be solely responsible for any and all costs (if any) for the upgrading of the Licensed Application.\n\n2.Third-party Materials\n\nThe Licensed Application may enable access to Application Provider’s and third party services and web sites (collectively the \"Services\"). By using any of the Services, you may encounter contents that may be deemed offensive, indecent, or objectionable, which contents may or may not be identified as having explicit language, and that the results of any search or entering of a particular URL may automatically and unintentionally generate links or references to objectionable material. Nevertheless, the manufacturer of this Device (the \"Manufacturer\") and the Application Provider shall not have any liability to you for contents that may be found to be offensive, indecent, or objectionable. \n\nThe Manufacturer shall not be responsible for examining or evaluating the content, accuracy, completeness, timeliness, validity, copyright compliance, legality, quality or any other aspect of such Services. The Manufacturer does not warrant or endorse and shall not assume and shall not have any liability or responsibility to you or any other person for any of the Services. \n\nThe Services may contain proprietary content, information and material (collectively \"Third-party Materials\") that are protected by applicable intellectual property and other laws, and you shall not use such Third-party Materials in any way whatsoever except for permitted use of the Services. Unless otherwise permitted by applicable law, you shall not reproduce, modify, rent, lease, loan, sell, distribute the Third-party Materials or create derivative works thereof in any manner, and you shall not exploit the Services in any unauthorized way whatsoever. You shall not use the Services in any manner to harass, abuse, stalk, threaten, defame or otherwise infringe or violate the rights of any other party, and the Manufacturer shall not in any way be responsible for any such use by you, nor for any harassing, threatening, defamatory, offensive or illegal messages or transmissions that you may receive as a result of using any of the Services. \n\n3.No Warranty\n\nAll Licensed Applications and Services are provided \"as is\" and \"as available\" without warranty of any kind, either express or implied. The Manufacturer expressly disclaims all warranties and conditions with respect to the Licensed Applications and the Services, either express or implied, including but not limited to, warranties of merchantability, of satisfactory quality, of fitness for a particular purpose, of accuracy, of quiet enjoyment, and of non-infringement of third party rights. The Manufacturer does not guarantee the accuracy, validity, timeliness, legality, or completeness of any Licensed Application or Service made available through this Device and does not warrant that the Device, the Licensed Applications or the Services will meet your requirements, or that operation of the Licensed Applications or the Services will be uninterrupted or error-free, or that defects in the Licensed Application or Services will be corrected. Should the Licensed Application or Services prove to be defective, you shall assume the entire cost of all necessary servicing, repair or correction.\n\nThe Licensed Applications and Services may be changed, suspended, removed, terminated or interrupted, or access may be disabled at any time, without notice, and the Manufacturer makes no representation or warranty that any content or service included in the Licensed Applications and Services will remain available for any period of time. Such contents and services are transmitted by third parties by means of networks and transmission facilities over which the Manufacturer has no control. Without limiting the generality of the foregoing, the Manufacturer expressly disclaims any responsibility or liability for any change, interruption, disabling, removal of or suspension of any content or service made available through this Device. The Application Provider and other providers of the Services reserve the right to change, suspend, remove, or disable access to any Licensed Application or Services at any time without notice. The Manufacturer may also impose limits on the use of or access to certain Licensed Applications or Services, in any case and without notice or liability.\n\nThe Manufacturer does not provide customer service related to the Licensed Applications and the Services. Any question or request for service relating to the Licensed Applications and the Services should be made directly to the respective provider.\n\n4.Collection and Use of Information\n\nThe Manufacturer, the Application Providers and the providers of the Services may collect and use technical data and related information, including but not limited to technical information about this Device, system and application software, and peripherals, to facilitate the provision of software updates, product support and other services to you (if any) related to the Device and the Licensed Application. The Manufacturer, the Application Providers and the providers of the Services may use such information, as long as it is in a form that does not personally identify you, to improve its products or to provide services or technologies to you. For more information on the collection and use of information, please visit our privacy policy: http://www.tcl.eu/en/.\n\n5.Unavailability of Certain Features\n\nDue to restrictions of Application Provider, certain features, applications, and services may not be available on this Device (including its peripheral devices) or in all territories. Some features on this Device may also require additional peripheral devices or membership fees that are sold separately.\n\n6.Limitation of Liabilities\n\nTo the extent not prohibited by applicable law, under no circumstances, including negligence, shall the Manufacturer be liable, whether in contract or tort, for any direct, indirect, incidental, special or consequential damages, attorney fees, expenses, or any other damages arising out of, or in connection with, any information contained in, or as a result of the use of the Device, any Licensed Application or any Service by you or any third party, even if advised of the possibility of such damages.\n\nThe Manufacturer shall only be liable for intent and gross negligence."];
var privacyNotice = ["\nWe respect your privacy when handling your personal data. This Privacy Notice describes the entity responsible for the processing of personal data we collect from you in connection with the use of our Smart TV services (\"Services\"), what types of personal data we collect about you, what we do with it, and your rights in relation to our use of the personal data. \n\n1.Data controller and representative in the European Union\n\nThe collection, processing and use of the personal data collected from you when using the Services is conducted by Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, China (\"Company\"). Our contact details as well as the contact details of our representative in the European Union are provided under Section 12 below. Please note, however, that we are not responsible for all data processing activities set out below. We have nevertheless included a description of the respective activities in our Privacy Notice because this processing is connected with your use of the Smart TV.\n\n2.Data processing consent\n\nSome of the data processing activities that we conduct require your consent, e.g. the use of your personal data for the purpose of improving the Services.\n\nConsent is voluntary and you will still be able to use the Services if you do not consent. However, you may see content that is not tailored to your preferences. Irrespective of your consent we reserve the right to process your personal data to the extent permitted by applicable law.\n\nYou may withdraw your consent at any time. The withdrawal of consent shall not affect the lawfulness of processing based on consent before its withdrawal. In order to withdraw your consent and/or to object (c.f. Section 10 and Appendix Your Rights below for your rights to object), please change the privacy settings of your Smart TV accordingly.\n\n3.Specific categories of personal data\n\nWe process in particular the following data categories:\n\nDevice-ID: Your Smart TV stores a fixed unique number that enables us to identify and authenticate the Smart TV when you use the Services. This number is called the Device-ID. \n\nIP address and MAC address: Your Smart TV will be assigned an IP address when accessing the Internet. If your Smart TV is behind a router (e.g. in a local home network or local WLAN), we may process the IP address of such router. The MAC address is a unique number assigned to each network interface of your Smart TV. \n\nDevice specific information: The Smart TV stores several information about itself and its configuration. This information includes the Smart TV type, the version of the operation system of the Smart TV, its panel resolution, the project ID (i.e. information regarding configuration files), the user agent, browser name, browser version, and the language and country that have been configured in the Smart TV. \n\nThese information will be used by us and will be provided to our service partner and content partners for the purposes described below.\n\n4.Purposes for which we process and/or use your personal data and legal bases\n\nThe purposes for which we process your personal data and the respective legal bases are described below. To the extent that contractual purposes are mentioned below as legal basis, we cannot provide you with the Services if you do not provide us with the respective data. To the extent that your consent is mentioned as legal basis, you are free to provide or withhold your consent. If you do not provide your consent, we will not process your personal data for the respective purpose.\n\n•Providing the Services: We use the IP address and MAC address, Device-ID, the version of the operation system of the Smart TV, client type of your Smart TV and its panel resolution, the project ID (i.e. information regarding configuration files), your DTV channel list, viewed channels, time zone, country and language settings to provide your Smart TV with access to the Services and services provided by content partners. Purposes include (but are not limited to) providing location based services to you (e.g. weather forecasts); abuse handling, management of security incidents, monitoring of availability of the Services, and providing backup services of user preferences.\n\nWhen you use the Services your Smart TV will request data from the Services via the Internet. As part of these requests your IP address as described above and the language and country that has been configured in your Smart TV will be transmitted to our service partner. Our service partner will process the respective data in accordance with its privacy notice.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) General Data Protection Regulation (“GDPR”).\n\n•Service Settings: As part of the regular functionality of the Services you can manually arrange the order in which apps are displayed by the Services. Our service partner will store your arrangement and other preferences you may set during use of the Services. This information will be linked to the Device-ID.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•Authentication: Whenever you connect your Smart TV to the Internet and turn on the Smart TV, it will automatically connect to the Services, which are managed by our service partner. Your Smart TV will then be authenticated as being certified for access to the Services. For authentication purposes, the Services store one or more unique numeric identifiers related to your Smart TV. We use the Device-ID and MAC address for authentication purposes. We also provide the Device-ID to selected content partners for authentication purposes. These content partners use the Device-ID to authenticate your Smart TV for access to services provided by a content partner.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•Remote diagnostics: As part of the Services, we provide you with remote diagnostic services. Therefore, we process the Device-ID, device number, serial number, MAC address, and error logs, error codes and error descriptions which are provided by the faulty module (application, middleware system).\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•After-sales service: Pursuant to applicable law you may have warranty or similar rights to obtain after-sales services. TCL Europe, 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, France is responsible for handling warranty claims and other requests for after-sales services and the processing of your personal data associated therewith. I.e., for the purposes of after sales services, TCL Europe acts as data controller and we are not responsible for the respective processing of your personal data.\n\nWhen you ask for our after-sales related service, your name, e-mail address, phone number, service request and postal address included in the invoice may be required for the purpose of providing you with the after-sales service. The information may also be collected through the after-sales partners of our resellers or authorized service providers if you call them for service. You can contact TCL Europe under the contact details stated in Section 12 below for more information about the protection of personal data in connection with after-sales services.\n\nThe legal basis for the respective processing is the obligation to comply with legal obligations pursuant to Article 6 (1) c) GDPR.\n\n•T-Launcher: T-Launcher is the main page for the use of the Smart TV on Linux operating system (please see below for the use of the android operating system) and allows you to select certain content.\n\nThe legal basis for the processing of your personal data that is necessary for your use of the T-Launcher are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\nSubject to your prior consent, we will also monitor the use of the T-Launcher, i.e.:\n\n-	When you start to use T-Launcher, we will record the time of entering and exiting T-Launcher.\n-	When you start to play a video of T-Launcher, we will record the name and the duration time of the video (not applicable to Netflix, YouTube or any other service provided by a third party).\n-	When you enter or exit a page, we will record the staying time on the page.\n-	When you move your cursor from one location to another, or enter an application, we will record this event.\n-	When you install, remove or update applications, we will record these events, including the name of applications.\n\nWe collect these information mainly for big data analysis to improve products and to provide better content services to users.\n\nThe legal basis for the processing of your personal data in connection with the monitoring of your use of the T-Launcher is your consent pursuant to Article 6 (1) a) GDPR.\n\nIf you have bought an Android TV and use Google’s android operating system, your personal data will be processed by Google and we are not responsible for such processing. Please refer to Google’s privacy notice for information about the related processing of your data and your respective rights.\n\n•T-Cast: T-Cast allows you to control your TV using your phone and to share videos, music and pictures stored in your smart phone on the TV. T-Cast also allows you to mirror your smartphone on your TV.\n\nThe download and use of the app is voluntary. If you download and use the app, we will process the MAC address to calculate how many T–Cast versions have been used in the market. This is required to be able to offer you this service. If you use our second screen functionality, the controls you activate on the application and the country and language settings, DTV channel list, favorite channels lists, schedule lists, Device-ID, current channel, protocol version and IP address of your Smart TV will be collected and processed by us on our servers. Our servers will then control your Smart TV as directed by you in the app.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•Software updates: Software updates are part of the Services. Thus, each time your Smart TV is powered on, it will provide us with the IP address, Device-ID, device number, software version, client type of your Smart TV, project ID (i.e. configuration files), user ID, and serial number to look whether software updates are available and to offer you and provide you with appropriate software updates.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•Law enforcement: We may be required to provide data to competent law enforcement authorities or courts of justice. If we do so, we will only do so subject to a binding legal instrument like a warrant or a judicial order, which requires us to cooperate with the relevant authorities.\n\nThe legal basis for the respective processing is our obligation to comply with legal obligations pursuant to Article 6 (1) c) GDPR.\n\nUse of the Services is possible by using pseudonyms, unless specific services require that you provide your name and/or email address.\n\n5.Privacy and safety of children under 16\n\nWe understand the importance of taking extra precautions to protect the privacy and safety of children using our Services. Children under the age of 16, or equivalent minimum age in the relevant jurisdiction, are not permitted to provide their personal information via the TV set or when they call for after-sales service, unless their parent provided verifiable consent.\n\nAs we never collect birth dates of users, we can't identify the age of users. But if we learn that we have collected the personal information of a child under 16, or equivalent minimum age depending on the jurisdiction, outside of the above circumstances we will take steps to delete the information as soon as possible.\n\n6.Third party apps\n\nYour Smart TV allows the use of apps provided by third parties, such as Netflix, YouTube or HbbTV (red button service provided by TV broadcasters). You may download the apps from the app store or activate third party apps that are already pre-installed on your device. Third party apps that are pre-installed on your device do not collect personal data without your prior authorization. E.g. Netflix is already pre-installed on the device but only collects data when you log into your Netflix account. HbbTV only collects data when you consent to the collection by pressing the designated button on your remote control.\n\nIf you enable a third party app, personal data about you may be processed by the app provider. We are not responsible for such processing; please refer to the privacy notice of the third party app for information about the related processing of your data and your respective rights.\n\n7.Categories of recipients\n\nWe share your personal data collected during your use of the Services only with third party content partners if you request certain content provided by such content partners or with service providers as data processors assisting us with the provision of the Services.\n\nWe share your personal data with other third parties only if we are obligated to do so on the basis of legal requirements (e.g. to courts or criminal prosecution authorities), if you have consented to the respective sharing or if the sharing is otherwise lawful under applicable law.\n\n8.Countries in which your data will be processed\n\nWe and/or some of the recipients of your personal data listed above may be located outside of the European Economic Area (e.g. in the Peoples Republic of China, or United States of America). Therefore, your personal data may be processed in countries where the data protection laws may provide a different level of protection compared to the laws in your jurisdiction and which are not recognized as providing an adequate level of protection of personal data in accordance with the GDPR. The countries which provide an adequate level of data protection from a European data protection law perspective include Andorra, Argentina, Canada, Switzerland, Faeroe Islands, Guernsey, the State of Israel, Isle of Man, Jersey, New Zealand and the Eastern Republic of Uruguay. Recipients in the USA may partially be certified under the EU-U.S. Privacy Shield and thereby recognized as providing an adequate level of data protection from an European data protection law perspective. \n\nWhere required, we will implement appropriate safeguards with regard to data transfers to recipients outside of the European Union that do not provide an adequate level of data protection. A copy of the respective measure may be requested by contacting us as stated under Section 12. below.\n\n9.Storage Period\n\nYour personal data will be retained as long as necessary to provide you with the Services. For most data this generally means that we will retain your data for one month. For the purpose of remote diagnostics and after-sales services we may retain your data up to ten years. When we no longer need to use your personal data to comply with contractual or statutory obligations, we will remove it from our systems and records and/or take steps to properly anonymize it so that you can no longer be identified from it.\n\n10.Your rights\n\nPursuant to applicable data protection law you may have the right to: request access to your personal data, request rectification of your personal data; request erasure of your personal data, request restriction of processing of your personal data; request data portability, and object to the processing of your personal data. Please note that these aforementioned rights might be limited under the applicable national data protection law. For further information on these rights please refer to the Appendix Your Rights below.\n\nYou also have the right to lodge a complaint with the competent data protection supervisory authority.\n\nTo exercise your rights please contact us as stated in Section 12 below.\n\n11.Changes to the Privacy Notice\n\nTo improve our Services we may require amendments to this Privacy Notice – e.g. by the implementation of new technologies or the introduction of new services. We reserve the right to change or supplement this Privacy Notice at any time.\n\n12.Contact information and representative in the European Union\n\nIf you have any questions about the Privacy Notice or would like to complain about our handling of your personal data, please contact us by using the following contact details:\n\nContact form: www.tcl.eu/privacy/support\n\nOur representative in the European Union is: TCL Europe having offices at 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, France. You may contact TCL Europe via the contact form stated above.\n\nVersion: 2.0\n\nAppendix Your Rights\n\na.Right of access: You may have the right to obtain from us confirmation as to whether or not personal data concerning you is processed, and, where that is the case, to request access to the personal data. The access information includes - inter alia - the purposes of the processing, the categories of personal data concerned, and the recipients or categories of recipients to whom the personal data have been or will be disclosed. However, this is not an absolute right and the interests of other individuals may restrict your right of access.\n\nYou may have the right to obtain a copy of the personal data undergoing processing. For further copies requested by you, we may charge a reasonable fee based on administrative costs. \n\nb.Right to rectification: You may have the right to obtain from us the rectification of inaccurate personal data concerning you. Depending on the purposes of the processing, you may have the right to have incomplete personal data completed, including by means of providing a supplementary statement.\n\nc.Right to erasure (\"right to be forgotten\"): Under certain circumstances, you may have the right to obtain from us the erasure of personal data concerning you and we may be obligated to erase such personal data. \n\nd.Right to restriction of processing: Under certain circumstances, you may have the right to require the restriction of processing of personal data concerning you. In this case, the respective data will be marked and may only be processed by us for certain purposes.\n\ne.Right to data portability: Under certain circumstances, you may have the right to receive the personal data concerning you, which you have provided to us, in a structured, commonly used and machine-readable format and you may have the right to transmit those data to another entity without hindrance from us.\n\nf.Right to object:\n\nUnder certain circumstances, you may have the right to object, on grounds relating to your particular situation, or where personal data are processed for direct marketing purposes at any time to the processing of your personal data by us and we can be required to no longer process your personal data.\n\nMoreover, if your personal data is processed for direct marketing purposes, you have the right to object at any time to the processing of personal data concerning you for such marketing, which includes profiling to the extent that it is related to such direct marketing. In this case your personal data will no longer be processed for such purposes by us."];
var cookieNotice = ["\nWe respect your privacy when using Smart TVs manufactured and Services provided by us. Cookies are used by many websites and other internet services and your Smart TV will accept, store and transmit cookies to ensure that these websites and services operate properly. \n\nWe do not use cookies when providing the Services to you. However, third parties (e.g. third party app providers) may use cookies when you use the Smart TV to access their services. This Cookie Notice can only provide limited information concerning cookies that may be placed by third parties. For information on the actual cookies used by third parties and their functionalities we refer you to the respective cookie notices of such third parties. However, in this Cookie Notice we provide a general description which cookies can be set on your Smart TV and how you can manage them.\n\n1.What is a cookie?\n\nCookies are small text files that may be placed on your Smart TV. When a website or the red-button service of a TV station is accessed, the website or service may store a cookie in the Smart TV. During subsequent accesses, a cookie that is placed on your Smart TV will send information to the party that has placed the cookie. Cookies are extremely common and used on a number of websites and services. Each cookie will typically contain the name of the domain from which the cookie has come, the \"lifetime\" of the cookie, and a value (usually a unique number). For a more thorough explanation of what cookies are and how they operate, please visit www.allaboutcookies.org.\n\nCookies can be categorized into functional cookies and non-functional cookies. Functional cookies are cookies that are strictly required for the purpose of providing you services. Non-functional cookies are all other cookies.\n\n2.Third party websites\n\nWhen you visit websites or services of third parties via the Services of your Smart TV, it is possible that such websites or services place cookies on your Smart TV, and that such websites track and store your interactions on such websites. We do not request or encourage such activities and will not use such information. Please refer to the respective cookie and privacy notices of such websites and services for more information about such parties’ use of such cookies.\n\n3.Cookie deletion\n\nYour user interface of your Smart TV allows you to delete all cookies and other local browser storage from the Smart TV. It is highly advisable to remove all cookies and locally stored settings prior to selling or giving away your Smart TV.\n\nVersion: 2.0"];
var privacyPolicy = ["Označite spodnje polje/polja, če želite uporabljati naše storitve pametnega televizorja in povezane storitve. Za uporabo teh storitev je potrebna obdelava vaših osebnih podatkov, kot je opisano v naši Izjavi o varovanju zasebnosti: http://www.tcl.eu/en/","Omogoči storitev pametnega televizorja, shranjevanje nastavitev storitve in samodejno preverjanje pristnosti storitve pametnega televizorja. Če ne izberete tega polja, boste imeli samo standardno TV in HDMI.","Omogoči samodejno posodabljanje programske opreme. Označite to polje za najnovejše posodobitve programske opreme in najboljše delovanje izdelka.","(Posodobitve programske opreme so pomembne za pravilno delovanje televizorja, saj zagotavljajo nove funkcije, stabilnost in varnost. Zato priporočamo, da označite to polje.)","Označite spodnje polje, če soglašate z našo obdelavo vaših osebnih podatkov tudi za naslednje namene. Za več informacij o tem, kako obdelujemo vaše osebne podatke, si oglejte našo Izjavo o varovanju zasebnosti: http://www.tcl.eu/en/","Soglašam z obdelavo mojih osebnih podatkov (npr. čas vstopa v aplikacijo T-Launcher in izstopa iz nje) za namen izboljševanja izdelkov podjetja TCL in zagotavljanja storitev z boljšo vsebino na pametnih televizorjih."];
var termsFirTitle = ["Pogoji uporabe","Izjava o zasebnosti","Obvestilo o piškotkih"];
var termsSecTitle = ["Prosimo, preberite in potrdite pogoje in določila.","Prosimo, preberite in potrdite izjavo o zasebnosti.","Prosimo, preberite in potrdite izjavo o piškotkih."];
var tickall = "Označi vse";
var tickremindWords = "Prosimo, označite potrditvena polja ali pa ne boste mogli uživati v pametnih TV storitvah.";