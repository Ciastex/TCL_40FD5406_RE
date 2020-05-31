
var all_country 	= ["Austrālija","Austrija","Beļģija","Bulgārija","Horvātija","Čehija","Dānija","Somija","Francija","Vācija",
						"Grieķija","Ungārija","Itālija","Luksemburga","Nīderlande","Norvēģija","Polija","Portugāle","Rumānija","Krievija",
						"Serbija","Slovēnija","Spānija","Zviedrija","Šveice","Apvienotā Karaliste","Jaunzēlande"," "/*Arab*/,"Igaunija"," "/*Hebrew*/,
						"Latvija","Slovākija","Turcija","Īrija","Japan","Filipīnas","Thailand","Maldives","Uruguay","Peru",
    					"Argentina","Chile","Venezuela","Ecuador","Costa Rica","Paraguay","Bolivia","Belize","Nicaragua","Guatemala",
						"Ķīna","Taiwan","Brazil","Canada","Mexico","United States","South Korea","Rumānija","Vietnam"/*新添加的，底层结构体中没有*/,"Ukraina"/*新添加的，底层结构体中没有*/,
    					"Iran","Iraq"," ","Kazakhstan","Uzbekistan"," ","Kyrgyzstan","Algeria","Egypt","Tunisia",
    					"Tanzania","Kenya","Pakistan","Indonesia","Kuwait","Saudi Arabia","Qatar","Israel","Lebanon","bahrain",
    					"Angola","Congo","India","Turkmenistan","Colombia","Mongolia","Bangladesh","Nepal","Sri Lanka","North Korea",
						"Moldova","Polynesia","EI Salvador"," ","Fiji","Liberia","Jordan","Myanmar","Ghana","Georgia",
    					"Armenia","Oman","yemen","Syria","Palestine","Afghanistan","Morocco","benin","IvoryCoast","Nigeria",
    					"Sudan","Ethiopia","Zambia"," ","South Africa","mozambique","Libya","Albānija","Belarus","Iceland",
						"Lietuva","Mauritius","Dubai","UAE","Tajikistan","Bengal", "Bosnija un Hercegovina","Kipra","Kosova","Maķedonija",
						"Malta","Melnkalne","Cameroun","Singapore","Malaysia","NewCaledonia","Suriname","Jamaica","Curacao","Aruba",
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
				
var all_language 	= ["Čehu","*","Dāņu","*","*","vācu","angļu","spāņu","grieķu","franču",
						"Horvātu","*","itāļu","Ungāru","Holandiešu","Norvēģu","Poļu","Portugāļu","krievu","Rumāņu",
						"Slovēņu","Serbu","Somu","Zviedru","Bulgāru","Slovāku","Chinese","*","Gēlu","*",
						"Velsiešu","arābu","Īru","Latviešu","*","turku","Igauņu","Holandiešu"/*Netherlands*/,"Korejiešu","*",
						"Hindi","*","*","Mandarin","Cantonese","Maori","V.O."/*Qaa*/,"Nedefinēts"/*Undetermined*/,"*","Nezināms",
						"Nedefinēts","*","*","*","*","*","*","*","*","*",
						"*","*","*","Albāņu","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Basku","*","*",
						"*","*","*","*","*","*","*","Bosniešu","*","*",
						"*","*","*","*","baltkrievu","*","*","Katalāņu","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galīciešu","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Islandiešu","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Japanese","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Lietuviešu",
						"*","*","*","*","*","*","*","Maķedoniešu","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romantiska filma","*","*","*","*",
						"*","*","*","Sāmu","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Teleteksts",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukraiņu","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Izslēgts","Ieslēgts"];
var okCancel		= ["OK","Atcelt"];
var yesNo			= ["JĀ","Nr."];
var level			= ["Izslēgts","Zems","Augsts","Vidējs"];
var manualAuto		= ["Manuāli","Auto"];
var homeShop		= ["Mājas","Veikals"];
var picPreset		= ["Standarts","Dinamiskais","Dabisks","Filma","Personīgs"];
var picColorTemp	= ["Vēsa","Normaalne","Silta","Lietotājs"];
var pic3dNavig		= ["Manuāli","Auto","Pusautomātiski"];
var _3dOptions		= ["3D režīms","No 3D uz 2D","K-L slēdzis","Lauka dziļums"];
var pic3DMode       = ["Izslēgts","No 2D uz 3D","No sāniem","No augšas un ap.","Rindu laikdale"];
var picEcoOptions	= ["Energia säästmine","Gaismas sensors","Vietējā aptumšošana","Jaukta aptumšošana"];
var picGeoOptions	= ["Ģeometrija","H novietojums","V novietojums","Pulkstenis","Fāze"];//Geometry 无翻译
var picAdWhiteBal	= ["R pastiprinājums","G pastiprinājums","B pastiprinājums","R nobīde","G nobīde","B nobīde"];
var souOptions		= ["Skaņas sākotnējā iestatīšana","Balanss","Audio aizture","SRS TSHD","Automātiska skaļuma regulēšana",
						"SPDIF tips","SPDIF aizkave","TV izvietošana","Audio valoda","Skaņas tips",
						"Audio apraksts","Basa pastiprinājums","Dolby Digital Plus"];
var souSpdifType	= ["Auto"/*Dolby*/,"PCM","Izslēgts"];
var colorSpace      = ["Auto","Standarta","Lietotājs"];
var souPresetPara	= ["100Hz","500Hz","1.5KHz","5KHz","10KHz"];
var chOptions		= ["Kanālu meklēšana","Kanālu saraksts","EPG","Kanālu organizētājs","Kanālu diagnostika",
						"laika nobīde","Subtitri","Teleteksts","Kanaliloendi tüüp"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Signāla stiprums","Signāla kvalitāte","Frekvence (kHz)","Pakalpojuma ID","Tīkla ID","Tīkla nosaukums"];
var chScanOptions	= ["Valsts / Reģions","Uztvērēja režīms","Automātiskā meklēšana","Automātiskā atjaunināšana","Analogā manuālā meklēšana",
						["Kabeļtelev. manuāla mekl.","Antenas manuālā mekl.","Satelīta manuālā regulēšana"],"Satelīta antenas uzstādīšana","Izlases tīkla atlase","Dzēst kanālu sarakstu","LCN"];
var favNetDes		= "Lūdzu, atlasiet savu iecienītāko tīklu";
var tuner			= ["Kabelis","Antena","Satelīts"];//Satelite 无翻译
var passError		= "Nepareiza parole.\nLūdzu, ievadiet vēlreiz!";
var chType			= ["Analogie kanāli: ","Digitālie kanāli: "];
var chScanStatus	= ["Statuss: Meklēšana","Statuss: Meklēšana pabeigta","Statuss: Meklēšana atcelta","Statuss: Meklēšanas kļūda"];
var chScanPara		= ["Frekvence (kHz)","Modulācija","Pārraides ātr. (Ksimb/s)","Tīkla ID","Sistēma",
						"Precīza noskaņošana","Signāla stiprums","Signāla kvalitāte","Meklēš. rež.","Kanālu id"];
var chScanParaMHZ      = ["Frekvence (MHz)"];
var chAtvManSys		= ["RIETUMEIROPA","AUSTRUMEIROPA","AK","Francija"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Auto"];
var chCleanDes		= "Vai vēlaties izdzēst kanālu sarakstu?";
var chDeletDes		= "Vai vēlaties dzēst kanālu?";
var chOperator		= ["Ziggo","UPC","Citi"];
var chScanType		= ["Digitāls & Analogs","Digitāls","Analogs"];
var chScanMode		= ["Pilnekrāna","Uz priekšu","Ātri"];
var bookingModes	= ["Ierakstīt","Atgādinājums"];
var dayName			= ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var monthName		= ["Janv.", "Feb.","Mar.","Apr.","Maijs","Jūn.","Jūl.","Aug.","Sept.","Okt.","Nov.","Dec."];
var filter			= ["Filtrs","Tips","Apakštips"];
var chEpgFirstGenre	= ["Filma","ziņa","Šovs","Sports","Bērnu","Mūzika","Māksla","Sociālie jautājumi","Izglītība","atpūta","SPETS."];
var chEpgSecondGenre= [["Drāma","Detektīvfilma","Piedzīvojumu filma","Zinātniskā fantastika","Komēdija","Seriāls","Romantiska filma","Nopietna filma","Filma pieaugušajiem"," "," "," "],
						["Jaunumi","Laika ziņas","Ziņu izlaidums","Dokumentālā filma","Diskusija"," "," "," "," "," "," "," "],
						["Šovs","Spēļu raidījums","Izklaides raidījums","Sarunu šovs"," "," "," "," "," "," "," "," "],
						["Sports","Īpaši notikumi","Sporta žurnāli","Futbols","Teniss",
							"Komandu sporta veidi","Vieglatlētika","Auto-moto sporta veidi","Ūdenssports","Ziemas sporta veidi",
							"Jāšana","Cīņas sporta veidi"],
						["Bērnu","Pirmskolas vecuma bērniem","Izklaide no 6 līdz 14","Izklaide no 10 līdz 16","Informatīvās pārraides","Multiplikācijas filmas"," "," "," "," "," "," "," "],
						["Mūzika","Rock","Nopietna filma","Folkmūzika","Džezs","Mūzikls","Balets"," "," "," "," "," "],
						["Māksla","Skatuves māksla","Tēlotājmāksla","Reliģija","Populārā kultūra",
							"Literatūra","Filma","Eksperimentālā pārraide","Apraide","Jaunie mēdiji",
							"Mākslas žurnāli","Mode"],
						["Sociālie jautājumi","Žurnāli","Ekonomika","Ievērojamie cilvēki"," "," "," "," "," "," "," "," "],
						["Izglītība","Daba","Tehnoloģija","Medicīna","Ārvalstis","Sabiedriskās zinātnes","Tālākizglītība","Valodas"," "," "," "," "],
						["Vaļasprieki atpūtai","Tūrisms","Mājamatniecība","Autosports","Fitness un veselība","Ēdiena gatavošana","Reklāma","Dārzniecība"," "," "," "," "],
						["Oriģinālvaloda","Melnbalts","Nepublicēts","Tiešraide"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Kanāla izlaišana","Kanālu šķirošana","Kanālu rediģēšana","Kanāla dzēšana","kanāls mijmaiņas","kanāls ieliktnis"];
var chEditPara 		= ["Tīkla nosaukums","Kanali number","Kanali nimi","Frekvence","Krāsu sistēma","Skaņas sistēma"];
var chSatTitles		= ["Satelliit, tüüp","Satelīta antenas uzstādīšana","Atlasīt satelītu"];
var chSatEidtOptions= ["Satelīta nosaukums","Asukoht","LNB Jauda","LNB frekvence (MHz)","Diseqc ievade",
						"Tonis 22 KHz","tooni","Frekvence (kHz)","Pārraides ātr. (Ksimb/s)","Polarizācija",
						"Signāla stiprums","Signāla kvalitāte","Satelliidi olek"];
var chSatAutoPromt	= [["Visi","Tīkls"],
						["Visi","Bez maksas"]];
var chSatAutoScanOptions=["Atlasīt satelītu","Meklēš. rež.","Кanāli"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Universāls",];
var chSatDiSEqCInput= ["Atspējot","A","B","C","D"];
var chSatTone22KHz	= ["Auto","Ieslēgts","Izslēgts"];
var chSatToneBurst	= ["Atspējot","tooni A","tooni B"];
var chSatPolarization= ["Horizontāli","Vertikāli"];
var chSatSetupOptions=["Antenni tüüp","Tūneris","Sagedusala"];
var chSatAntennaType= ["SingleCable","Universāls"];
var chSatUserBands	= ["Kasutaja ala 1","Kasutaja ala 2","Kasutaja ala 3","Kasutaja ala 4","Kasutaja ala 5","Kasutaja ala 6","Kasutaja ala 7","Kasutaja ala 8"];
var chSatOthers		= ["Retranslators"];
var chSatSetupOthers= ["Lietotāja definēts"];
var pleaseSelectSat = "Lūdzu, vispirms atlasiet satelītus!";
var subOptions		= ["Subtitri","Digitālo subtitru valoda","Otrā digitālo subtitru valoda","Subtitru tips"];
var ttxOptionsCon      = ["Lapas valodas dekodēšana","Digitālā teleteksta valoda"];
var subType			= ["Normaalne","Vājdzirdīgajiem"];
var netIntf     	= ["Ethernet ","Bezvadu"];
var netConnDes		= ["TV pārbauda tīkla savienojumu.\nLūdzu, uzgaidiet",
						"Tīkla savienojuma pārbaude veiksmīga!",
						"Tīkla savienojuma pārbaude neizdevās!"];
var netSsidError	= "SSID derīgais garums ir 1 ~ 32 rakstzīmes. Lūdzu, pārbaudiet SSID.";
var netOthers		= ["PIN kods"];
var netWlessAutoDes	= ["Pirms noklikšķināt OK, piekļuves punktā jāiestata norādītais PIN kods.",
						"Nospiediet pogu uz piekļuves punkta 120 sekunžu laikā, pirms noklikšķināt OK."];
var netConnRemind	= ["Parole nav pareiza!",
						"Veido savienojumu. Lūdzu, gaidiet.",
						"Savienojums izveidots un iegūta IP adrese!",
						"Saites kļūme",
						"TV meklē piekļuves punktus,\nlūdzu, uzgaidiet",
						"TV nav pievienota neviena bezvadu ierīce!"];
var netWireIpOptions= ["IP iestatījums","Adreses tips","IP adrese","Apakštīkla maska","Noklusējuma vārteja","Primārais DNS","Sekundārais DNS"];
var netWireConnRemind= ["Ievadiet vērtību no 0 līdz 255.",
						"Savienojums ir izveidots veiksmīgi!",
						"Lūdzu, ievadiet derīgu adresi.",
						"Savienojums ir izveidots veiksmīgi!",
						"Sakaru kļūme!",
						"Veido savienojumu. Lūdzu, gaidiet.",
						"Lūdzu, ievadiet vērtību no 1 līdz 223."];
var netFlixOptions	= ["Dezaktivēt","ESN","Netflix versija"];
var netFlixDes	 	= ["Vai tiešām vēlaties dezaktivēt?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Program. atjaunin.";
var netUpdateDialogTitle = "Programmatūras atjaunināšana";
var netBGDownloadTitle 	= "Lejupielāde";
var netUpdateLoadingPrompt= ["Meklē jauninājums, lūdzu, uzgaidiet!",
							"Programmatūra tiek lejupielādēta... Lūdzu, uzgaidiet",
							"Programmatūras atjaunināšanas laikā NEIZSLĒDZIET televizoru!",
                            "Obligātais programmatūras atjauninājums tiek lejupielādēts automātiski fonā!"];
var netUpdatePrompt= ["Apsveicam! Jums ir jaunākā programmatūras versija!",
						"Atrasta jauna programmatūras versija XXXX. Vai lejupielādēt tagad? Nepieciešamais laiks ir atkarīgs no tīkla statusa.",
						"Neizdevās pieteikties!",
						"Neizdevās saņemt datus, lūdzu, mēģiniet vēlreiz vēlāk!",
						"XML faila atjaunināšanas parsēšana!",
						"Saites kļūme",
						" Programmatūras lejupielāde ir veiksmīga. Vai vēlaties atkārtot flešošanu?",
						"Dati zaudēti! Neizdevās lejupielādēt!",
						"Neizdevās pārbaudīt pakotni, lūdzu, mēģiniet vēlreiz!",
						"Tīkls ir anormāls. Lūdzu, pārbaudiet un pievienojiet  vēlreiz…",
						"Atjaunināšana neizdevās. Lūdzu, restartējiet TV!",
						"Jauninājuma fails negaidot tika izdzēsts. Veiciet jaunināšanu, izmantojot tīklu, vēlreiz.",
						"Programmatūra tika veiksmīgi lejupielādēta fona režīmā. Vai vēlaties veikt jaunināšanu?"];
var netUpdateButtonText = ["Lejupielādēt", "Atjaunināt", "Vēlāk", "Nekad", "OK","Turpināt"];
var autoDetectPrompt = ["Atrasta jauna programmatūras versija XXXX. Vai lejupielādēt tagad? Nepieciešamais laiks ir atkarīgs no tīkla statusa.",
						"Atrasta jauna programmatūras versija XXXX. Vai vēlaties atjaunināt tagad?",
						"Jaunināšana, izmantojot tīklu, iepriekšējā reizē tika priekšlaikus pārtraukta. Veiciet to vēlreiz.",
                        "Jaunas programmatūras versijas XXXX lejupielāde nav pabeigta. Vai vēlaties turpināt tagad?",
                        "Programmatūra ir lejupielādēta, vai vēlaties atjaunināt tagad?"];
var sysOptions		= ["E-rokasgrāmata","Izvēlnes valoda","Taimeris","Bloķēt","Ieejas iestatījumi",
						"Program. atjaunin.","Atrašanās vieta","HbbTV režiim","Sīkfaili","Kopējā saskarne",
						"Papildu uzstādījumi","Atiestatīt veikal režīmu","LED indikators","Tūlītēja ieslēgšana","Automātisks veikala režīms","Area","Demonstrācijas režīms"];
var sysResetDes		= "Vai esat pārliecināts?";
var sysMenuLangOptions=["Valoda","Vēlamā audio valoda","Vēlamā otrā audio valoda"];
var sysTimerOptions	= ["Laika zona","Reģiona nosauk.","Pulkstenis","Izslēgšanās taimeris","Autom. gaidstāve", "Country region"];

var sysTimeZone		= ["Kā pārraidītājs","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Izslēgts","10 min","20 min","30 min","40 min","50 min","60 min","90 min","120 min"];
var sysStandby		= ["Izslēgts","4 stundas","6 stundas","8 stundas"];
var sysRegionName	= ["Madride","Kanāriju salas"];
var sysClockOptions	= ["Automātiskā sinhronizācija","Kuupäev","Aeg","Ieslēgšanās taimeris","Taimeris",
						"Ieslēgt kanālu","Izslēgšanās taimeris","Taimeris"];
var sysTimer		= ["Izslēgts","Katru dienu","Vienreiz"];

var sysInputSet		= ["Bez etiķetes","DVD","Blu-ray","HDD","DVDR",
						"HR ier.","Spēle","Videomagnetofons","Dators","TV dekoders (digitālais STB)",
						"HD dig. STB","Kamera","Rakstītājs","Citi"];
var sysAvVideoInput	= ["Auto","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["Pa USB","Pa Tīkla","Pēc kanāla"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Nevar atrast jaunu programmatūru!",
						"Atrasta jauna programmatūras versija XXXX. Vai vēlaties atjaunināt tagad?",
						"Ievietojiet USB zibatmiņas disku.",
						"Neizdevās pārbaudīt pakotni, lūdzu, mēģiniet vēlreiz!",
						"Lūdzu, programmaparatūras atjaunināšanas laikā NEatvienojiet USB sargspraudni un izslēdziet televizoru.",
						"Programmatūra ir veiksmīgi atjaunināta.\nTV tiek automātiski restartēta!",
						"Atrasta jauna programmatūras versija XXXX. Vai lejupielādēt tagad? Nepieciešamais laiks ir atkarīgs no tīkla statusa.",
						"Lejupielāde",
						" Programmatūras lejupielāde ir veiksmīga. Vai vēlaties atkārtot flešošanu?",
						"Atjaun. neizd.!",
						"Meklē jaunināšanas failus",
						"Programmatūra veiksmīgi atjaunināta.\nRestartējiet televizoru tagad."];
var sysProductInfo	= ["Pašreiz. versija","Izstr. nosauk.","Ražotāja nosaukums","Korpusa nosaukums"];
var sysCiDes		= ["Nav uzrādīta CI karte."];
var sysAdOptions	= ["DivX(R) reģistrēšana","DivX(R) reģistrācijas deaktivizēšana","T-Link","Authorization Error","Reģistrācijas atcelšanas apstiprinājums",
						"Nomas apstiprinājums","Filipīnas"];
var sysRegistDes	= ["Lai atskaņotu aizsargātus DivX video, jūsu ierīcei jābūt reģistrētai.",
						"Reģistrācijas kods:",
						"Reģistēties http://vod.divx.com"];
var sysDregistDes	= ["Reģistrācijas deaktiv. kods:",
						"Reģistrāciju deaktiv. vietnē http://vod.divx.com",
						"Vai turpināsiet reģistrāciju?"];
var mediaAuthorization = ["Ierīcē nav atļauts atskaņot šo DivX(R) aizsargāto video."];
var deregistrationConfrimation = ["Jūsu ierīce jau ir reģistrēta.","Vai tiešām vēlties dzēst reģistrāciju?"];
var rentalConfirmation = "DivX(R) noma izmantojusi XXXX no YYYY skatījumiem. Turpināt?";
var rentalExpired 	= "DivX(R) noma izmantoja XXXX no YYYY skatījumiem. DivX nomas derīgums ir beidzies.";

var parentalRatingNA		= ["***","***","***","***","***","***","***","***"];
var parentalRatingOptionUS		= ["***","***","***"];
var sysTVRatingUS=["***","***","***","***","***"];
var sysMPAAUS=["***","***","***","***","***","***"];
var parentalRatingOptionCanada		= ["***","***","***"];
var sysCanadaEng=["***","***","***","***","***","***"];
var sysCanadaFre=["***","***","***","***","***",""];
var sysResetRRT=["***"];
var sysLockOptions	= ["Kanālu bloķēšana","Laika intervāla bloķēšana","Vecāku vērtējums","Bloķēt ievadi","Priekšējā paneļa bloķēšana","Slēgt uzstādīšanu",
						"Mainīt paroli","Maks. skaļums","Notīrīt visu"];
var sysTimeIntervals= ["Bloķēšanas veids","Sākuma laiks","Beigu laiks"];
var sysRatingOptions= ["Nav","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","X-reitinga (Spānija)"];
var changePass		= ["Mainīt paroli","Jauna parole","Apstiprināt paroli"];
var changePassDes	= ["Nepareiza parole.\nLūdzu, ievadiet vēlreiz!",
						"Parole neatbilst.\nLūdzu, ievadiet vēlreiz!",
						"Parole iestatīta veiksmīgi!",
						"Šis kods ir pārāk vienkāršs, lai to iestatītu kā paroli.\nLūdzu, ievadiet citu!"];
var sysPowerOnChOptions= "Atlasīt režīmu";
var sysPowerOnCh	= ["Pēdējais statuss","Atlasīt lietotāju"];
var netWlessSecu    = ["Atvērt","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Nav","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ",""];
var netWlessSecu3	= ["Nav","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)",""];
var netOptions		= ["Interneta pieslēgums","Saskarne","Bezvadu iestatījumi","IP iestatījumi","Informācija",
						"Pieslēguma tests","DLNA","TV tālvadība","Netflix iestatījumi","WiFi displejs",
						"Adreses tips","IP adrese","Apakštīkla maska","Noklusējuma vārteja","Primārais DNS",
						"Sekundārais DNS","SSID","BSSID","Ievadiet SSID:","Lietotāja ID"];
var chEditDes		= ["Dublēts kanāla numurs!","Nospiediet sarkano taustiņu, lai dzēstu pašreizējo rakstzīmi.","Nederīgi kanālu numuri."];
var chEpgNoProgram	= "Nav nevienas programmas informācijas tagad, lūdzu, vispirms meklējiet kanālus!";
var chEpgWords		= ["Programmu ceļvedis","Nav programmas datu.","Kanāls bloķēts!","Nav programmas informācijas.","Nav programmas nosaukuma."];
var chEpgBooking	= ["Kalendārs info", "Kanali number","Sākuma datums","Sākuma laiks","Beigu laiks",
						"Atkārtošanas veids","Plānojuma veids","Pievienot","Aizstāt","Mainīt",
						"Pievienot/Pārveidot"];
var epgHotKey		= ["Iepr. diena","Nāk. diena","Filtrs","Plānojuma saraksts","Pievienot plānojumu"];
var chEpgBookRemind	= ["Nepareizs sākuma laiks","Nepareizs beigu laiks","Dublēts grafiks","Veiksmīgi saglabāts.","Veiksmīgi izdzēsts."];
var chSchePara		= ["Plānojuma saraksts","Sākuma laiks","Sākuma datums","Programmas nosaukums","Kanali nimi",
						"Kestvus","Atkārtot","Grafiks","Rediģēt","Kustuta"];
var dateTimer		= ["Vienreiz","Katru dienu","Katru nedēļu"];
var scheduleDeleteReminds="Vai vēlaties dzēst šo sarakstu?";
var scheduleNoLists	= "Nav plānojuma saraksta. Nospiediet sarkano taustiņu, lai to pievienotu.";
var chListWords		= ["Kanālu saraksts","Atlasīt sarakstu","Uztvērēja režīms","Pievienot izlasei","Izņemt",
						"Izvēlēties kanālu sarakstu","Izvēlēties uztvērēja režīmu","Samainīt"];
var chListType		= ["Visi","Digitāls","Analogs","Radio","Bez maksas","Izlase"];
var chAutoScanOptions=["Vali operaator","kanāla tipa","Automātiskā meklēšana"];
var souSoundType	= ["Nederīgs","Mono","Mono","Stereo","Stereo",
						"SAP","SAP","Dual1","Dual2","Dual2",
						"Nicam mono","Nicam stereo","Nicam dual1","Nicam dual2","Nicam Dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Mūzika","Filma","Skaidra balss","Standarts","Personīgs"];
var picAdRgbMode	= ["Izslēgts","Tikai sarkans","Tikai zaļš","Tikai zils"];
var picAdOptions	= ["Traucējumu samazināšana","MPEG NR","RGB mode","Dinamiskais Kontrasts","LED rezolūcijas skaidrība",
						"Miesas tonis","Filmu režīms","Spēļu režīms","Krāsu temperatūra","Baltās Krāsas Balansēšanas Iespējas",
						"Iesaldēt","Melns Stretch","Palielināts ekrāna izmērs","Gamma","HDMI režīms","10P baltā balanss","Krāsu paplašinātājs",
						"Neskaidras kontūras samazināšana","Stipru vibrāciju samazināšana","Krāsu telpa","Kustību skaidrība"];
var pic10Pwhite     = ["Intervāls","Sarkans","Zaļš","Zils","Atiestatīt","Krāsu","Dzeltena krāsa","Zili zaļa krāsa","Fuksīns"];
var picMotionClarity = ["Kustību režīms","Kustību interpolācija","LED rezolūcijas skaidrība","Neskaidras kontūras samazināšana","Stipru vibrāciju samazināšana","Atiestatīt"];
var picMotionMode   = ["Filma","Vienveidīgs","Notīrīt","Sports","Klients"];
var picResetDes		= "Visi individuālie iestatījumi tiks atiestatīti. Vai esat pārliecināts, ka vēlaties darīt atlasīto darbību?";
var pic10PReset     = "Vai tiešām vēlaties atiestatīt 10P baltā balansu?";
var picMotionReset  = "Vai vēlaties atiestatīt kustību skaidrību?";
var picColorSpaceReset    = "Vai tiešām vēlaties atiestatīt krāsu telpu?";
var picOptions		= ["Attēla sākotnējā iestatīšana",
						"Fona apgaismojums","Spilgtums","Kontrasts","Piesātinājums","Tonis","Asums","Krāsu temperatūra","Ekrāna režīms","Automātiskā formatēšana",
						"Sporta uzlabošana","3D","3D navigatsioon","ECO Iestatījumi","Ģeometrija",
						"Papildu uzstādījumi","Attēla atiestatīšana","mikroaptumšošana"];
var picSize			= ["16:9 formāts", "4:3 formāts", "14:9 formāts", "Panorāmas kino sistēma",
						"16:9 tālummaiņa", "16:9 pacelšana uz augšu","14:9 tālummaiņa","Izstieptais režīms","Apgrieztais režīms",
						"Tālummaiņa 2","Apgrieztais režīms 2","Ekrāna vietējā saskaņošana","Punktu pa punktam","Oriģināls","Panorāma"];
var others			= ["Skaņas skaļums","Ülekanne","Parole","Stāvoklis","Saglabāt","Aizstāt","Sākt","Iziet","Meklēšana","Kustuta",
						"Nav","Automātiski","Meklēt","Drošība","Savienot","Atsvaidzināt","Atkārtot","Beigt","Iestatījumi","Кanāli",
						"Rediģēt","Ievietot","Signāla!","Beigt","Stereo","Audio","Avots","Nav audio","Padomi","Atiestatīt",
						"Klients","Iestatīšana","Saglabāt","Lietotājs","Slēgta tastatūra","Drošības režīms","Katru dienu","PVR saraksts"];
var direction		= ["Pa kreisi","Pa labi","Augšup","Lejup"];
var audioType 		= ["MPEG","DOLBY AUDIO"/*"AC3"*/,"MPEG4","AAC", "DOLBY AUDIO"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Nezināms"];
var soundChannels   = ["Nezināms","Mono","Sub","Duālais mono","Stereo"," Stereo Sub"," Stereo Dolby Surround","Telpiska skaņa 2CH","Telpiska skaņa","3.0Ch","4.0Ch","5.0Ch"," Mono Lfe"," Dual Mono Lfe"," Stereo Lfe"," Surround 2Ch Lfe"," Surround Lfe","3.1Ch","4.1Ch","5.1CH","7.1CH","Kopīga Stereo sistēma","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Pa kreisi","Pa labi","Citi"];
var prompts			= ["Pielāgojiet attēla iestatījumu, kas vislabāk atbilst jūsu skatīšanās videi. ",
						"Pielāgojiet spilgtuma līmeņus. Jo tuvāk vērtībai 100, jo spilgtāk. ",
						"Pielāgojiet kontrasta līmeņus. Jo tuvāk vērtībai 100, jo lielāka attēla tumšs/gaišs starpība. ",
						"Pielāgojiet piesātinājuma līmeņus. Jo tuvāk vērtībai 100, jo spēcīgāka krāsa.  ",
						"Pielāgojiet asuma līmeņus. Jo tuvāk vērtībai 100, jo skaidrākas detaļas. ",
						"Pielāgojiet izgaismojuma līmeņus. Jo tuvāk vērtībai 100, jo spilgtāks ekrāns.",
						"Pielāgojiet toņu līmeņus. Šis iestatījums pārveido krāsu toņus.  ",
						"Izvēlieties attēla formātu, kas vislabāk atbilst pārraidei, ko skatīsities. ",
						"Konfigurējiet enerģijas taupīšanas opcijas.",
						"Pielāgojiet ģeometrijas iestatījumus, izveidojot savienojumu ar datoru. ",
						"Izvēlieties vairāk attēla uzlabotos iestatījumus.",
						"Atjaunojiet visus attēla iestatījumus uz noklusējumu.",
						"Izvēlieties skaņas režīmu, kas atbilst jūsu personīgajām vēlmēm.",
						"Pielāgojiet skaļuma balansu starp kreisās un labās puses kanāliem.",
						"Skaņas atgūšanas sistēma TruSurround HD nodrošina bagātīgu un skaidru skaņu zemās un augstās frekvencēs. ",
						"Digitālā interfeisa formāts, kas savieno televizora digitālās skaņas izeju ar mājas kinozāles audio aprīkojumu. ",
						"Izvēlieties audio valodu, kas atbilst jūsu personīgajām vēlmēm.",
						"Iespēja vājredzīgajiem baudīt televīzijas pārraides. ",
						"Pārbaudiet TV attēlu, skaņu un signālu.",
						"Izvēlieties kanālu saraksta tipu, kas atbilst jūsu TV signālam.",
						"Izvēlieties valodu programmas subtitriem, kas tiks rādīti ekrāna apakšā. ",
						"Skatiet pašreizējā kanāla tekstu un attēlus. ",
						"Digital Living Network Alliance. Izmantojot mājas tīklu, baudiet mūziku, fotoattēlus un video no citām ierīcēm, piemēram, datora. ",
						"Parādiet sava viedtālruņa saturu televizorā un izmantojiet viedtālruni kā televizora tālvadības pulti. ",
						"Rādiet sava televizora ekrānā saturu no Android ierīces, kas saderīga ar Miracast. ",
						"Nobloķējiet televizoru.",
						"Izvēlieties ierīces nosaukumu.",
						"Izvēlieties skatīšanas vidi.",
						"Atjaunojiet visus sistēmas iestatījumus uz noklusējumu.",
    					"Switch off sports mode for more options.",
    					"Uzlabot vides kontrastu",
    					"Īpašs režīms sporta spēļu baudīšanai",
						"Izbaudiet vairāk CEC funkciju."];
var initialTitle	= ["Sveicināti","Sākotnējā iestatīšana"];
var initialPrompt	= ["Tagad veiciet sākotnējo iestatīšanu - jūs gaida aizraujoša pieredze! ",
						"Lūdzu, izvēlieties valodu:",
						"Izvēlieties savu valsti / reģionu:",
						"Lūdzu, izvēlieties atrašanās vietu:",
						"Izvēlieties tīkla savienojuma veidu:",
						"Izvēlieties vadu tīkla savienojuma režīmu:",
						"Neizdevās savienoties ar xxxxxxxxx! Lūdzu, pievienojiet ierīci saskaņā ar šādu diagrammu vai atlasiet pogu Left (pa keisi), lai to atiestatītu.",
						"Savienojiet ar xxxxxxxxx! Lūdzu, atlasiet pogu Right (pa labi), lai turpinātu.",
						"1) Jūsu televizoram var jau būt iebūvēts bezvadu adapteris\n 2)Vai, ja ir pieejams bezvadu USB adapteris, savienojiet to ar televizoru.  Tad izvēlieties bezvadu tīkla savienojuma režīmu",
						"Skenēšana. Lūdzu, uzgaidiet...",
						"TV nav pievienota neviena bezvadu ierīce!",
						"Lūdzu, pirms zemāk pieejāmās pogas \"Nākamais\" nosp. pārliec., vai šis PIN kods ir uzst. piekļ. p.",
						"Lūdzu, nospiediet spiedpogu uz AP 120 sekunžu laikā, pirms nospiest pogu Right!",
						"WPS (Wi-Fi aizsargāta iestatīšana)",
						"PIN (Personīgais identifikācijas numurs)",
						"PBC (spiedpogas konfigurācija)",
						"Šādiem saturiem var piekļūt tikai ar tīkla savienojumu. Vai vēlaties izlaist tīkla iestatīšanu?",
						"Lejupielādei ir pieejami programmatūras atjauninājumi. Tas var aizņemt laiku atkarībā no tīkla stāvokļa.  ",
						"Televizora programmatūras atjaunināšana nodrošina jums iespēju izmantot jaunākās funkcijas un pakalpojumus.",
						"Jūs nevarēsit lietot jaunākās funkcijas un pakalpojumus. Vai vēlaties izlaist programmatūras atjaunināšanu? ",
						"Nospiediet labās puses pogu, lai turpinātu. ",
						"Neizslēdziet atjaunināšanas laikā, jo tas var radīt televizora nepareizu darbību. ",
						"Ja nevēlaties atjaunināt, lūdzu, atlasiet NĒ.",
						"Notiek atjaunināšana, lūdzu, uzgaidiet",
						"Jūs varat arī atjaunināt programmatūru SYSTEM (SISTĒMA)/SOFTWARE UPDATE (PROGRAMMATŪRAS ATJAUNINĀJUMS).",
						"Atlasītajai valstij tiek pieprasīt paroles iestatījums.\nLūdzu, iestatiet savam TV kodu un apstipriniet to.",
						"This code is too simple.\nPlease use different digits.",
						"Apsveicam! Sākotnējā uzstādīšana ir pabeigta. Jūs varat mainīt savu konfigurāciju, izmantojot galveno izvēlni un saistītās apakšgrupas izvēlnes.",
						"Izvēlieties drošības režīmu:",
						"Lūdzu, atlasiet bezvadu tīkla savienojuma režīmu:",
						"Tīkls"];
var initNetCabAndDonRe = ["Nav pievienots tīkla kabelis, lūdzu, pievienojiet tīkla kabeli!","Nav iebūvēts bezvadu adapteris vai nav piegādāts bezvadu USB adapteris."];
var initChPrompt = ["TV kanāla uzstādīšana","Lūdzu, atlasiet antenas skenēšanas veidu.","Automātiskā uztveršana...","Tika atrasti šādi antenas kanāli:","Izvēlieties kabeļu meklēšanas veidu.","Lūdzu, atlasiet vienu operatoru šajā sarakstā.","Konfigurējiet meklēšanas informāciju","Atrasti šādi kabeļu TV kanāli:","Sarakstā izvēlieties vienu operatoru","Izvēlieties satelītus meklēšanai vai rediģējiet izvēlēto satelītu","Iestatiet satelīta parametrus","Šādi kanāli tika atrasti, un kanālu skenēšana var veikt arī no jauna Channel (Kanāls)/Channel Scan (Kanālu skenēšana)"];
var initClockPrompt = ["Iegūstiet tīkla nodrošinātu laiku!",
						"Lūdzu, iestatiet datumu un laiku:"];
var initialOptions	= ["Vide","Tīkla iestatīšana","Program. atjaunin.","Kanālu iestatīšana","Pulkstenis"];
var initialHotkeys	= ["Atpakaļ","Izvēlieties","Nākamais","Es piekrītu"];
var initLocations	= ["Mājas","Veikals","Veikals ar demo"];
var initNets		= ["Vadu","Bezvadu","Nav tīkla savienojuma"];
var initWireManuals	= ["IP adrese","Apakštīkla maska","Noklusējuma vārteja","Primārais DNS","Sekundārais DNS"];
var initSoftUpdates = ["Atjaunināt tagad","Atjaunināt vēlāk"];
var initChannelIns	= ["Turpināt","Es nevēlos instalēt kanālus"];
var initChScanTypes	= ["Digitāls & Analogs","Digitāls","Analogs","Nevēlos meklēt"];
var initChDvbts		= ["Antenas ATV kanāli:","Antenas DTV kanāli:"];
var initChDvbcs		= ["Kabeļu ATV kanāli:","Kabeļu DTV kanāli:"];
var initChDvbss		= ["Satelīta kanāli:"];
var initChDvbSOther	= ["Nevēlos meklēt satelītu"];
var initEndConnectedStatus= ["Atvienots","Izveidots WiFi tīklāja savienojums","Izveidots vadu savienojums"];
var initEndInstallations= "XXXX kanāli ir uzstādīti";
var initEndUpdate	= ["Atjaunināts"];

var audioScenes 	= ["Galds","Sienas stiprinājums"];			
var screenSavers	= ["Nav kanālu, nospiediet taustiņu OK un meklējiet!",
						"Nav signāla!",
						"Kodēts",
						"Tikai dati",
						"Audio programma",
						"Nav audio un video",
						"Nav pieejams",
						"Nav teleteksta",
						"Nav programmas datu.",
						"Programma bloķēta!",
						"Programma bloķēta!\nNospiediet OK un ievadiet savu kodu.",
						"Nav programmas informācijas.",
						"Programma ir kaitīga nepilngadīgajiem.\nNospiediet OK (LABI) un ievadiet savu kodu.",
						"Kanāls bloķēts!",
						"Kanāls bloķēts!\nNospiediet OK un ievadiet savu kodu.",
						"Ievade bloķēta!\nNospiediet OK un ievadiet savu kodu.",
						"Netiek atbalstīts!",
						"Šis pakalpojums pašlaik nav pieejams",
						"Ievade bloķēta",
						"Nav programmas nosaukuma.",
						"Nav funkcijas",
    					"Nav Subtitri"
						];
var channelNumberOverPromt = ["The number of search programs has exceeded,you can delete some programs and then retry!"];
var chBookingPromt	= ["Pašreizējam kanālam ir plānota ierakstīšana, TV sāks ierakstīt.",
						"Atrasts plānots ieraksts.\n Pārslēdziet uz XXXX, lai ierakstītu",
						"Pašreizējam kanālam ir atgādinājums.",
						"Atrasts plānots atgādinājums.\n Pārslēdziet uz XXXX"];
var timeUnit		= ["Sekundes","min"];
var ciPromt			= ["Tīkla dati ir mainījušies. Lai atjauninātu, jūs varat veikt atjauninājumu skenēšanu. ",];
var othersPromt		= ["Lūdzu, uzgaidiet ...",];
var menuOptions		= ["Attēls","Skaņa","Kanāls","Smart TV","Tīkls","Sistēma","Atbalsts"];
var optionOptions	= ["Attēla sākotnējā iestatīšana","Skaņas sākotnējā iestatīšana","Iesaldēt","T-Link","laika nobīde","PVR","Plānojuma saraksts","Iestatījumi","*"];
var optionTLinkPromt= [["Automātiskā ieslēgšanās","Autom. gaidstāve","Ceļveža izvēlne"],
						["Vool sees","Gaidstāve","Pastiprinātāja skaļums"]];
var powerPromt		= ["Televizors drīz izslēgsies! Nospiediet jebkuru taustiņu, lai atceltu."];
var ttxLanguage		= ["RIETUMEIROPA","AUSTRUMEIROPA","krievu","arābu/ebreju","farsi","arābu","baltkrievu","grieķu","turku"];
var ttxOptions		= ["Atklāt","Secīgi mainīt apakšlapas","Valoda","Brīdinājumu lapa","Jaunākās ziņas"];
var weekday         = ["Svētdiena","Pirmdiena","Otrdiena","Trešdiena","Ceturtdiena","Piektdiena","Sestdiena"];
var lcnConfflict	= "Šai programmai ir uztveršanas traucējumi.";
var inShopMode		= "Jūsu TV ir veikala režīmā. Mājas režīmā, lūdzu, atlasiet \"Sistēma\" un mainiet izvēlnē \"Atrašanās vieta\".";
var nitRefresh		= "Tīkla dati ir mainīti. Vai vēlaties veikt atjauninājumu meklēšanu?";
var picHDMIMode     = ["Auto","Grafisks","Video"];

var glassRemind    	= ["Lūdzu, sapārojiet 3D brilles ar TV\n(Turiet ieslēgtu 3D briļļu IESLĒGŠANAS taustiņu).","Jūsu 3D brilles ir savienotas ar TV ",""];
var pvrRemind 		= ["Neizvelciet USB ierīci vai nepārtrauciet strāvas padevi"];
var pvrConName   	= ["PVR","Programmas informācija:",["Note: If you record the HD channel, please to select  the  disk(of speed >5.0MB/sec), and to select the disk (of speed >3.0MB/sec) when you want to record the SD channel.","Ierakstītais video tika saglabāts mapē \"PVR\"."],"Beigt","Ierakstīt","stunda","Minūte","Kestvus","Padomi","Izmantojiet bultiņu taustiņus, lai iestatītu ierakstīšanas ilgumu."];
var pvrDisRemind 	= "Ievietojiet USB zibatmiņu, lai veiktu ierakstu.";
var pvrRemindWords  = ["Vai vēlaties iziet?",
							"Vai vēlaties pārtraukt ierakstīšanu un pārlūkot ierakstītos failus?",
							"Ketas on välja tõmmatud.",
							"Nepietiek brivās vietas.",
							"Nav ierakstītu failu. Uzsākt ierakstu.",
							"PVR nevar startēt kodēta kanāla režīmā.",
							"Līdzeklis nav pieejams",
							"Veiksmīgi saglabāts.",
							"Vai vēlaties apturēt ieraksta procesu un mainīt ievades avotu?",
							"TV beigs pašreizējo ierakstu. Vai vēlaties iziet?",
							"Lai darbotos pareizi, PVR ierakstam ir nepieciešams TV signāls, lūdzu, pārbaudiet savu signālu."];
var pvrChangeCh 	= ["Vai vēlaties pārslēgt kanālu?",
							"Vai vēlaties apturēt ieraksta procesu un mainīt kanālu?"];
var pvrChangeToPIN8	= ["Vai vēlaties mainīt avotu ierīcei, kas ir pievienota SCART ieejai?",
				    		"Vai vēlaties apturēt ierakstīšanas procesu un mainītu avotu ierīcei, kas ir pievienota SCART ieejai?"];
var pvrChangeToCEC  = ["Vai vēlaties mainīt avotu ierīcei, kas ir pievienota SCART ieejai?",
				  			 "Vai vēlaties apturēt ierakstīšanas procesu un mainīt avotu ierīcei, kas ir pievienota SCART ieejai?"];
var pvrGuideJump    = ["Vai vēlaties ieiet EPG?",
							"Vai vēlaties apturēt ieraksta procesu un ievadīt EPG?"];
var pvrMediaJump    = ["Vai vēlaties ieiet Media?",
							"Vai vēlaties apturēt ieraksta procesu un ievadīt Media?"];
var timeshiftExtra	= ["Vai vēlaties apturēt laika nobīdi un nomainīt Vai nomainīt kanālu?",
						"Vai vēlaties apturēt laika nobīdi un mainīt avotu ierīcei, kas ir pievienota SCART ieejai?",
						"Vai vēlaties apturēt laika nobīdi un mainīt avotu ierīcei, kas ir pievienota HDMI ieejai?",
						"Laika nobīdi nevar startēt kodēta kanāla režīmā.",
						"Vai vēlaties apturēt laika nobīdi, un ievadīt EPG?",
						"Vai vēlaties apturēt laika nobīdi un nomainīt TV režīmu uz USB?",
						"Vai vēlaties apturēt laika nobīdi un nomainīt Vai nomainīt ieejas avotu?",
						"Ievietojiet USB zibatmiņu, lai veiktu ierakstu.",
						"Diskā nepietiek vietas.",
						"TV beigs pašreizējo laika nobīdi. Vai vēlaties iziet?"];
var timeshiftStatus	= ["Ātri atpakaļ","Beigt","Atskaņot","Pauze","Ātri uz priekšu"];
var pvrPowerOffRemind= ["Gaidstāves ierakstīšana","Gaidstāve","TV tagad ieraksta, vai vēlaties turpināt ierakstu, kad TV ir gaidstāves režīmā?"];
var timeshiftInitTitle= "Diska iestatīšana";
var timeshiftInitReminds= ["Šo vedni izmanto USB diska laika nobīdes iestatīšanai. Lūdzu, atlasiet iestatīšanas režīmu.",
						 "Labākai veiktspējai iesakām veikt USB diska formatēšanu. Šādi tiks dzēsti visi dati.",
						 "Lūdzu, atlasiet laika nobīdes faila lielumu.",
						 "Formatēšana",
						 "Nepietiek brivās vietas.",
						 "Laika nobīdes faila izveidošana",
						 "Ātruma pārbaude",
						 "Diska ātrums ir pārāk mazs (< %f MB/sek), lai iespējotu laika nobīdes līdzekli!",
						 "Disks ir gatavs laika nobīdei. Tomēr iesakām labākai veiktspējai nomainīt disku (lai ātrums būtu > %f MB/sek).",
						 "Disks ir gatavs laika nobīdei. "];
var timeshiftInitButtons= ["Formāts","Izlaist","Atcelt","OK","Beigt","Iziet"];
var timeshiftInitOther=["Diska ātrums:","MB/s"];

var selectChoice	= "Vai esat pārliecināts?";
var chAtvStore		= "Saglabāt kā XXXX";
var chEpgFirstGenreUK= ["Filma","Ziņas un fakti","IZKLAIDE","Sports","Bērnu","Izglītība","Dzīvesveids","Drāma"];
var homePageTitleList = ["LIETOTNES","TV","VIDEO","Sākumlapa"];
var homePageFavAndAllName  = ["Iecienītākās lietotnes","Visas lietotnes"];
var homePageBackUp = ["E-rokasgrāmata","GuideOn"];
var homePageRemind   = ["Pilnas funkcijas ir pieejamas tikai pēc tīkla savienojuma izveidošanas.","Jūsu TV tagad nav neviena kanāla. Programmas ir pieejamas pēc kanālu skenēšanas.","nē programma","Meklēt kanālus tagad?"];
var homePageHistory = ["Vēsture"];
var miracastTitle = ["WiFi displejs","TCL ierīce"];
var miracastRemind=["WiFi displejs ļauj jums kopīgot ierīces, piemēram, viedtālruņa vai planšetdatora, ekrānu un skaņu ar televizoru bezvadu režīmā (t.i., neizmantojot kabeļus). Tādējādi to, kas tiek rādīts viedtālrunī vai planšetdatorā, vienlaicīgi varat skatīt savā televizorā. Piemēram, jūs varat palaist video savā viedtālrunī un vienlaicīgi rādīt to televizorā vai izmantot planšetdatoru spēļu vadībai, attēlojot saturu lielajā televizora ekrānā.","WiFi TV saite televizorā ir gatava. Sāciet koplietot ierīces ekrānu ar televizoru.","Veido savienojumu. Lūdzu, gaidiet.","Sakaru kļūme!","Neizdevās izveidot savienojumu. Lūdzu, pārbaudiet!"];
var homePageLittleWin = ["Iestatījumi","Vide","Iecienītie kanāli","Smart TV","EPG"];

var hbbtvStopRemind  = ["Vai vēlaties beigt atskaņošanu?"];
var colorSystem = ["Auto","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Nospiediet pogu ≡ (OPCIJA), lai iegūtu sīkāku informāciju.";
var emptyListInfo = "Ierīce nav pievienota televizoram!";
var optionVideoListArray_1 = ["Attēla sākotnējā iestatīšana", "Skaņas sākotnējā iestatīšana", "Atskaņošanas režīms", "Ekrāna režīms", "3D režīms", 
							  "K-L slēdzis", "Lauka dziļums", "Subtitri", "Skaņu ieraksts", "Nosaukums", "Nodaļa", "Info"];
var optionVideoListArray_2 = ["Attēla sākotnējā iestatīšana", "Skaņas sākotnējā iestatīšana", "Atskaņošanas režīms", "Ekrāna režīms", 
							  "Subtitri", "Skaņu ieraksts", "Nosaukums", "Nodaļa", "Info"];
var bottomTipsText = ["Atskaņot/Pauze", "Ātri atpakaļ", "Ātri uz priekšu", "Atskaņošanas saraksts", "Iestatījumi"];
var picturePresetArray = ["Standarts", "Dinamiskais", "Dabisks", "Filma", "Personīgs"];
var videoPlayModeArray = ["Atkārtot visus", "Atkārtot vienu", "Normaalne"];
var screenModeHDArray = ["16:9", "4:3", "Panorāmas kino sistēma", "Apgrieztais režīms", "Tālummaiņa 2", "Apgrieztais režīms 2", "Izstieptais režīms", "Automātiski"];
var screenModeSDArray = ["16:9", "4:3", "Panorāmas kino sistēma", "14:9 tālummaiņa", "16:9 tālummaiņa", "16:9 pacelšana uz augšu", "Automātiski"];
var Mode3DArray = ["Izslēgts", "No 2D uz 3D", "No sāniem", "No augšas un ap.", "Rindu laikdale"];
var videoOptionListArray = ["Izslēgts", "Ieraksts", "Subtitri", "Nosaukums", "Nodaļa"];
var subMenuTitleText = "Subtitri";
var langMenuTitleText = "Audio valoda";
var titleMenuTitleText = "Nosaukums";
var mode3DMenuTitleText = "3D režīms";
var langInfoText = "Ieraksts";
var STOP_RESUME_INFO = "Apturēt-Atsākt";
var playListName = " nosaukums";
var eb_tips = "Padomi";
var ok_button = "OK";
var eb_info = ["Audio dekodēšanas kļūda.", "Video dekodēšanas kļūda.", "Audio formāts nav atbalstīts.", 
			   "Neatbalsta video formātu.", "Nevar atvērt šo failu.", "Atskaņošanas kļūda, lūdzu, mēģiniet vēlreiz.",
			   "Faila formāts netiek atbalstīts.", "Diemžēl atskaņotājs ir pārtraucis darboties.",
			   "Faila ceļš nepastāv vai ir nederīgs.\n No jauna ievietojiet atmiņas ierīci un mēģiniet vēlreiz.",
			   "Turpināt atskaņošanu no iepriekšējā\n atskaņošanas stāvokļa?"];
var picturePlayErrorTips = ["Ielādes kļūme!!!","Attēls ir pārāk liels!!!","Tīkla kļūda!!!","Pavediena kļūda!!!","Parametru kļūda!!!","Nezināma kļūda!!!"];
var frameTitleText = "Jaunā ierīce";
var eb_quit_info = "Vai tiešām vēlaties iziet?";
var eb_yes = "JĀ";
var eb_no = "Nr.";
var offinfo = "Izslēgts";
var naInfo = "Nulle";
var consoleInfoArray = ["Ātri atpakaļ", "Ātri uz priekšu", "Atskaņot/Pauze", "Atskaņošanas saraksts"];
var cantOperateText = ["Funkcija netiek atbalstīta."];
var chapterChangeInfo = "Tikai nodaļas no 1 līdz XXXX ir pieejamas.";
var metaDataArray = ["Nosaukums/Metadatu rediģēšana: ", "Metadatu nodaļa: ", "Metadatu audio: ", "Metadatu apakšvirsraksts: "];
var metaTitleInfo = "Nosaukums";
var metaChapterInfo = "Nodaļa";
var videoLoadingInfo = "Analizē...";
var listLoadingInfo = "Lādējas...";
var pgInfo = "Zems reitings: ";
var fileNameText = " nosaukums";
var fileDateText = "Kuupäev";
var fileSizeText = "Izmērs";
var fileDurationText = "Kestvus";
var fileDirectorText = "Direktors";
var fileCopyrightText = "Autortiesības";
var fileArtistText = "Izpildītājs";
var fileAlbumText = "Albūms";
var fileGenreText = "Žanrs";
var fileYearText = "Gads";
var fileGenreText = "Žanrs";
var mainListArray = ["Visi", "Attēls", "Video", "Mūzika"];
var sortArray = [" nosaukums", "Kuupäev"];
var parserArray = ["Normaalne", "Rekursīvs  "];
var emptyTipsInfo = "Diemžēl nav atrasts neviens atbalstīts fails.";
var emptyFolderInfo = "Diemžēl nav atrasts neviens atbalstīts fails.";
var sortName = "Kārtot pēc";
var parserName = "Parsētājs";
var divx_str1 = "DivX(R) reģistrēšana";
var divx_str2 = "DivX(R) reģistrācijas deaktivizēšana";
var infor_str = "Info";
var quickMenuEmptyText = "Nav pieejamas opcijas.";

var musicSoundPresetArray = ["Standarts", "Filma", "Mūzika", "Skaidra balss", "Personīgs"];
var musicInformationArray = [" nosaukums", "Izpildītājs", "Albūms", "Žanrs:", "Gads:", "Ilgums:"];
var playListName = " nosaukums";
var playTipsInfo = ["Jūs atskaņojat pirmo failu.", "Jūs atskaņojat pēdējo failu."]
var musicNameInfo = "Name";
var musicArtistInfo = "Izpildītājs";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Skaņas sākotnējā iestatīšana";
var optionBGMInfo = "Atskaņot fonā";
var optionAudioOnlyInfo = "Tikai audio";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX ir savienots ar TV!";
var tvRemoteTitle		= "TV tālvadība";
var tvRemoteDeveloper	= "Lietotni izstrādājis TCL";
var tvRemoteDeviceTitle	= "Ierīces nosaukums:";
var remoteOption		= ["Multivides koplietošana","Tālvadības pults","Palīdzība","Par","Viedā savienošana"];
var remotebottom		= " Lūdzu, lejupielādējiet \"TV remote\" (\"TV tālvadība\") viedtālrunim ";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Fotogrāfijas, video un mūzika ar TV koplietošanu, izmantojot tālruni.",
							"Soļi: \n   1. Noklikšķiniet tālrunī uz \"TV Remote\". Savienojiet tālruni ar TV, izmantojot to pašu WiFi tīklu;\n   2. Noklikšķiniet uz \"Media Sharing\" (\"Multivides koplietošana\") lai pārlūkotu multivides failus;\n   3. Nosūtiet multividi uz TV atskaņošanai (ar vienu no šādām iespējām)",
							"      a) velciet un nometiet mapi/failu uz televizora ikonu ekrāna augšdaļā;\n      b) pagrieziet telefonu virzienā uz televizoru, lai palaistu pirmo failu;\n      c) atskaņojiet multivides failu telefonā un noklikšķiniet uz televizora koplietošanas ikonas;",
							"   4. Atskaņojot televizorā, pakratiet telefonu, lai atskaņotu iepriekšējo vai nākamo failu."];
var controlReminds		= ["Izmantojiet telefonu kā televizora tālvadības pulti.",
							" ",
							"Soļi: \n   1. Noklikšķiniet tālrunī uz \"TV Remote\". Savienojiet tālruni ar TV, izmantojot to pašu WiFi tīklu;\n   2. Noklikšķiniet uz \"Remote Control\" (\"Tālvadības pults\"), lai darbotos TV."];
var helpDeviceWords		= "Vairāku ekrānu mijiedarbība";
var helpBottom			= "Mākoņu tehnoloģijas laikmetā tādas viedās ierīces kā tālrunis un televizors ir savstarpēji savienojami. Koplietojiet medijus ar savu ģimeni vairākos ekrānos un pārvaldiet televizoru, izmantojot tālruni! ";
var helpReminds			= ["Sagatavošanās\n   1. Lejupielādējiet \"TV Remote\" no Google Play vai Apple Store un uzinstalējiet.\n   2. Savienojiet tālruni ar TV, izmantojot to pašu WiFi tīklu.",
							" ",
							"Ieteicamais telefons\n   1. Centrālais procesors: virs 800 MHz\n   2. Atmiņa: vismaz 80 MB brīva vieta",
							" ",
							"Saistību atruna\n   Ja jūsu telefonā nav pieejama funkcija \"TV pults\", lūdzu, sazinieties ar telefona ražotāju."];
var helpButtons			= ["Iepriekš.","Nākamais"];
var aboutReminds		= ["TV tālvadība","Lietotni izstrādājis TCL"];
var aboutExit			= "Iziet";
var smartReminds		= ["Ātrs un vieds savienojums starp TV un tālruni.",
							" ",
							"Soļi \n   1. Pievienojiet TV un viedtālruni tam pašam LAN tīklam. Noklikšķiniet viedtālrunī uz \"TV Remote\".\n   2. Noklikšķiniet uz \"Smart Connect\" (\"Viedais savienojums\"), lai skenētu QR kodu.\n   3. Ar TV raidījuma skatīšanās režīmā, nospiediet taustiņu INFO uz TV tālvadības pults 4 sekundes, uznirs pilnekrāna QR kods.",];
var smartQRReminds		= ["Lūdzu, noklikšķiniet tālruņa TV pultī uz „Smart Connect” un skenējiet QR kodu, lai savienotu ātri TV ar tālruni.",
							"QR kods satur LAN konta informāciju. Lūdzu, saglabājiet to"];
							

var consoleTipArray = ["Iepriekš.","Nākamais","Konsole","Atskaņošanas saraksts"];							
var optionInfoArray = ["Attēla sākotnējā iestatīšana","Atskaņošanas režīms","Kestvus","Efekts","Info"];

var playModeArray = ["Normaalne","Sajaukt","Atkārtot"];
var durationArray = ["Īss (5s)", "Vidējs (10s)", "Garš (15s)"];
var effectArray = ["Nav", "Pagriezt", "Slaucīt pa labi", "Slaucīt pa kreisi", "Slaucīt uz augšu", "Slaucīt uz leju", "Uz centru", "No centra", "Jauktā secībā"];
var infoArray = ["Nosaukums:","Izmērs:","Datums:","Atrašanās vieta"];

var picturePresetBarTitleInfo = "Attēla sākotnējā iestatīšana";
var picturePresetBarArray = ["Standarts","Dinamiskais","Kinoteātris","Filma","Personīgs"];
var upTipsInfo = "Pārvietot attēlu"; //add yums 2014-10-10
var consoleTipsArray = ["Konsole","Iepriekš.","Nākamais","Atskaņošanas saraksts","Iestatījumi"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Nospiediet vēlreiz pogu RIGHT (PA LABI), lai atskaņotu nākamo attēlu","Nospiediet vēlreiz pogu LEFT (PA KREISI), lai atskaņotu iepriekšējo attēlu","Nospiediet vēlreiz pogu DOWN (UZ LEJU), lai parādītu atskaņošanas sarakstu"]; //add yums 2014-10-10

var optionPvrListArray = ["Attēla sākotnējā iestatīšana","Skaņas sākotnējā iestatīšana", "Ekrāna režīms", "3D režīms", "Subtitri", "Skaņu ieraksts", "Info"];							
	
var titleSpanFirstArray = ["Kontrole un savienojums","Pamatdarbības","LIETOTNES","TV","Iestatījumi","BUJ"];
var titleSpanSecondArray = [["Tālvadības pults","Paneļa taustiņi","Viegla navigācija","TV savienojums","TV savienojums","TV savienojums","Bezvadu"],["Palaidējs","Statusa josla","Avots"],["Tiek atskaņotas lietotnes","Vide","TV tālvadība"],["Kanālu un skaļuma regulēšana","Kanālu saraksts","EPG","Kanālu iestatīšana","Iecienītākie kanāli"],["Attēla korekcija","Skaņas regulēšana","Kanālu regulēšana","Program. atjaunin.","Valoda","Vecāku slēdzene"],["Biežāk uzdotie jautājumi","Biežāk uzdotie jautājumi","Problēmrisinājumi","Problēmrisinājumi","Noteikumi"]];
var contentSpan1_1Array =[["BAROŠANA:","AVOTS:","IESTATĪJUMI:","OPCIJA:","ATPAKAĻ:","INFORMĀCIJA:","SĀKUMS:","IZIET:","SARAKSTS:"],
    ["Ieslēdz ierīci vai gaidstāves režīmu",
        "Izvēlieties ievades avotu",
        "Lai parādītu iestatījumu izvēlni",
        "Lai parādītu opciju izvēlni",
        "Atgriezties iepriekšējā izvēlnē vai aizvērt darbojošos lietojumprogrammu",
        "Rāda programmas informāciju",
        "Lai piekļūtu SmartTV sākumlapai",
        "Atgriezties iepriekšējā izvēlnē vai aizvērt darbojošos lietojumprogrammu",
        "Rāda kanālu sarakstu"]];
var contentSpan1_2Array = ["Iepriekšējais kanāls","Nākamais kanāls","Palielināt skaļumu","Samazināt skaļumu","Dodieties uz sākumlapu","Apstiprināt opciju","Gaidstāves režīms/Barošana ieslēgta"];
var contentSpan1_3Array = ["Labi/Ceļvedis","Kanāls augšup","Kanāls lejup","Skaļums lejup","Skaļums augšup","Atsevišķās funkcijās pieejami kā bultu taustiņi."];
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","AV OUT adapteris","LAN","Viedtālrunis","PC/pierīce/DVD","Audio pastiprinātājs","Audio pastiprinātājs/Monitors","Jūsu TV var neietvert visas ligzdas."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Radioaustiņas","AV IN adapteris","SPDIF","CMP AUDIO IN adapteris","CMP IN (YPbPr) adapteris","USB ierīces","USB ierīces","Radioaustiņas","DVC/Spēļu konsole/pierīce/DVD","Audio pastiprinātājs","DVC/Spēļu konsole/pierīce/DVD","Jūsu TV var neietvert visas ligzdas."];
var contentSpan1_6Array = ["Kopējā saskarne","SD","VGA","SCART","Mini SCART","ANTENNA IN","PCMCIA karte","SD karte","Dators","Pierīce/DVD","Antena/Kabelis/Satelīts","Jūsu TV var neietvert visas ligzdas."];
var contentSpan1_7Array = ["Tabletes","Dators","Maršrutētājs","Tālrunis","TV"];
var contentSpan1_8Array = ["Funkcijas slēdzis/Barošana","Ilgstoši nospiest, lai pārietu uz miega taimeri","Lejup","Augšup","Skaļums/kanālu/Avots"];

var contentSpan2Array = [["Nospiediet bultu taustiņus, lai skatītu sākumlapu.","Pēc tam nospiediet OK (LABI), lai noskatītos kādu no raksturīgajām programmām vai ievadītu lietotni."],["Augšējā labējā ekrāna stūrī parādās datums, tīkls un ierīces utt."],["Atlasiet ieejas avotu ierīcē, kas ir savienota ar TV, izmantojot dažādas pieslēgvietas, piemēram, TV, AV, HDMI u.c."]];

var contentSpan3Array = ["Izbaudiet un skatiet savas iecienītākās programmas no Smart TV lapas","Skatiet fotoattēlus, skatieties video un atskaņojiet mūziku no USB atmiņas ierīces.","Pievienojiet savu TV un viedtālruni vai planšetdatoru tam pašam LAN tīklam","Noklikšķiniet nScreen vai TV Remote viedtālrunī vai planšetdatorā","Kopīgojiet fotoattēlus, video un mūziku vairākos ekrānos ar savu ģimeni un regulējiet televizoru, izmantojot savu viedtālruni"];

var contentSpan4Array = [["Nospiediet pogu UP/DOWN (UZ AUGŠU/UZ LEJU), lai pārslēgtu kanālus","Nospiediet LEFT/RIGHT (PA KREISI/PA LABI), lai noregulētu skaļumu"],["Nospiediet LIST uz tālvadības pults, lai skatītu kanālu sarakstu","Nospiediet pogu UP/DOWN (UZ AUGŠU/UZ LEJU), lai atlasītu savu kanālu"],["EPG ir ekrāna ceļvedis, kas parāda plānotās TV programmas. Jūs varat pārvietoties, atlasīt, apskatīt un ierakstīt programmas."],["Meklējiet un instalējiet kanālus"],["Pievienojiet vai rediģējiet savus iecienītākos kanālus Kanālu sarakstā"]];

var contentSpan5Array = ["Baudiet savas iecienītākās programmas, izmantojot video lietotnes"];

var contentSpan6Array = [["Nospiediet pogu Opcija, lai parādītu sistēmas iestatīšanas opcijas","Ievadiet attēla iestatījumus, lai pielāgotu vērtības"],["Nospiediet pogu Opcija, lai parādītu sistēmas iestatīšanas opcijas","Ievadiet Skaņas iestatījumus, lai iestatītu opcijas"],["Nospiediet pogu Opcija, lai parādītu sistēmas iestatīšanas opcijas","Ievadiet Kanālu iestatījumus, lai iestatītu opcijas"],["Atjauniniet savu TV, kad ir pieejama jauna programmatūras versija "],["Jūs varat izvēlēties sev vēlamo izvēlnes valodu"],["Ļauj vecākiem bloķēt kanālus vai programmas, kas nav piemērotas bērniem"]];

var contentSpan7_1Array = [["Nav attēla, nav skaņas","Pārbaudiet, vai drošinātājs vai slēgiekārta darbojas.","Pievienojiet citu elektrisko ierīci strāvas kontaktligzdai, lai pārliecinātos, vai tā darbojas, vai arī ir ieslēgta.","Strāvas spraudnim ir slikts kontakts ar strāvas kontaktligzdu","Pārbaudiet signāla avotu."],["Normāls attēls, nav skaņas","Nospiediet skaļuma pogu UP, lai palielinātu skaļumu.","Skaņas iestatījums nav pareizs.","Pārraides signāla kļūda."],["Normāla skaņa, nav attēla","Pielāgojiet spilgtumu un kontrastu","Pārraides signāla kļūda.","Pārbaudiet, vai tas ir tikai audio režīmā."]];
var contentSpan7_2Array = [["Radiofrekvences traucējumi","Šie traucējumi rada kustīgus viļņus vai diagonālas svītras, un dažos gadījumos, attēla kontrasta zaudējumu. Atrodiet un noņemiet radiotraucējumu avotu."],["Nav krāsu","Noregulējiet krāsu iestatījumus.","Mēģiniet citu kanālu. Melnbaltu programmu var saņemt."],["Tālvadības pults nedarbojas","Nomainiet baterijas.","Baterijas nav ievietotas pareizi. TV pieslēgts galvenajam barošanas avotam."]];
var contentSpan7_3Array = [["USB ierīces saturs netiek rādīts","Pārbaudiet, vai USB atmiņas ierīce ir saderīga ar TV.","Pārbaudiet, vai TV atbalsta audio un attēlu failu formātus."],["Atskaņo bez skaņas","TV atskaņotājs neatbalsta video audio formātu."],["Faili netiek atskaņoti vienmērīgi","USB atmiņas ierīces nodošanas sniegums var ierobežot TV datu pārraides ātrumu."]];
var contentSpan7_4Array = [["Kam jāpievērš uzmanība, veicot programmatūras atjaunināšanu","Programmatūras atjaunināšanas laikā nedrīkst būt strāvas padeves pārtraukuma.","Novērsiet jebkādas darbības ar tālvadības pulti programmatūras atjaunināšanas laikā.","Esiet pacietīgi, jo programmatūras atjaunināšanas process var aizņemt nedaudz ilgāku laiku."],["Pēc programmatūras atjaunināšana nav atsevišķā TV interfeisa izmaiņu.","Zināmos apstākļos programmatūras atjaunināšana var būt ne tikai atjaunināšana vai jaunu funkciju pievienošana, bet TV komplekta bez atšķirīgām interfeisa izmaiņām uzlabošana. Reizēm arī TV interfeiss var palikt neskarts."]];
var termsTitle = "Noteikumi";
var termsConditions = ["(Juridisko paziņojumu) sniedz TCL - šī televizora ražotājs","Tā kā produktiem ar SmartTV pakalpojumiem ir dažādas iespējas, kā arī ierobežojumi attiecībā uz pieejamo saturu, noteiktas funkcijas, lietojumi un pakalpojumi var nebūt pieejami visām ierīcēm un visās teritorijās. Dažām SmartTV funkcijām var būt nepieciešamas papildu perifērijas ierīces vai atsevišķa abonentmaksa. Apmeklējiet mūsu tīmekļa vietni, lai iegūtu vairāk informācijas par konkrētām ierīcēm un pieejamo saturu. Pakalpojumi un pieejamais saturs, izmantojot SmartTV, laiku pa laikam var tikt mainīti bez iepriekšēja paziņojuma. \n   Viss saturs un pakalpojumi, kuriem var piekļūt, izmantojot šo ierīci, pieder trešajām pusēm, un tos aizsargā likumi par autortiesībām, patentiem, prečzīmēm un/vai citu intelektuālo īpašumu. Šāds saturs un pakalpojumi tiek sniegti vienīgi jūsu personīgai nekomerciālai lietošanai. Jūs nedrīkstat izmantot nekāda veida saturu vai pakalpojumus veidā, kas nav atļauts no satura īpašnieka vai pakalpojuma sniedzēja puses. Neierobežojot iepriekšminēto, ja vien attiecīgais satura īpašnieks vai pakalpojuma sniedzējs nav skaidri atļāvis, jūs nedrīkstat pārveidot, kopēt, pārpublicēt, augšupielādēt, izvietot, pārsūtīt, tulkot, pārdot, izmantot, jebkādā veidā izplatīt saturu un pakalpojumus, kuri pieejami, izmantojot šo ierīci, kā arī radīt to atvasinātus darbus. \n   JŪS SKAIDRI APLIECINĀT UN PIEKRĪTAT, KA PILNĪBĀ UZŅEMATIES RISKU PAR ŠĪS IERĪCES LIETOŠANU, TĀS APMIERINOŠU KVALITĀTI, VEIKTSPĒJU UN PRECIZITĀTI. IERĪCE UN VISS TREŠO PUŠU SATURS UN PAKALPOJUMI TIEK SNIEGTI „TĀDI, KĀ IR” UN BEZ JEBKĀDA VEIDA SKAIDRI IZTEIKTAS VAI NETIEŠI NORĀDĪTAS GARANTIJAS. TCL SKAIDRI ATSAKĀS NO VISĀM SKAIDRI IZTEIKTĀM VAI NETIEŠI NORĀDĪTĀM GARANTIJĀM UN NOSACĪJUMIEM ATTIECĪBĀ UZ IERĪCI UN JEBKĀDU SATURU UN PAKAKPOJUMIEM, TAI SKAITĀ, BET NE TIKAI, GARANTIJĀM ATTIECĪBĀ UZ PIEPRASĪJUMU, APMIERINOŠU KVALITĀTI, ATBILSTĪBU KONKRĒTAM MĒRĶIM, PRECIZITĀTI, PATIKU UN TREŠO PUŠU TIESĪBU NEPĀRKĀPŠANU. TCL NEGARANTĒ SATURA VAI PAKALPOJUMU, KURI PIEEJAMI, IZMANTOJOT ŠO IERĪCI, PRECIZITĀTI, DERĪGUMU, SAVLAICĪGUMU, LIKUMĪGUMU UN PILNĪBU, KĀ ARĪ NEGARANTĒ, KA IERĪCE, SATURS VAI PAKALPOJUMI ATBILDĪS JŪSU PRASĪBĀM UN IERĪCES DARBĪBA VAI PAKALPOJUMI BŪS NEPĀRTRAUKTI UN BEZ KĻŪDĀM. NEKĀDOS APSTĀKĻOS, TAI SKAITĀ NEVĒRĪBAS GADĪJUMĀ, TCL NEUZŅEMAS ATBILDĪBU, SASKAŅĀ AR LĪGUMU VAI LIKUMU, PAR JEBKURIEM TIEŠIEM, NETIEŠIEM, NEJAUŠIEM, TĪŠIEM VAI IZRIETOŠIEM ZAUDĒJUMIEM, ADVOKĀTU IZMAKSĀM, IZDEVUMIEM VAI JEBKURIEM CITIEM ZAUDĒJUMIEM SAISTĪBĀ AR JEBKĀDU INFORMĀCIJU VAI IERĪCES LIETOŠANAS REZULTĀTĀ JEBKURU SATURU VAI PAKALPOJUMU, KURAM PIEKĻŪSTAT JŪS VAI JEBKURA TREŠĀ PUSE, PAT JA IR PAZIŅOTS PAR ŠĀDU ZAUDĒJUMU IESPĒJAMĪBU. \n   Trešo pušu pakalpojumi jebkurā laikā bez iepriekšēja paziņojuma var tikt mainīti, atlikti, atcelti, izbeigti vai pārtraukti vai piekļuve tiem var tikt liegta, un TCL (Thomson zīmola televizoru ražotājs) neizsaka protestus un nesniedz garantiju attiecībā uz to, ka jebkurš saturs vai pakalpojums saglabāsies pieejams uz jebkuru laika periodu. Saturu un pakalpojumus pārraida trešās puses, izmantojot tīklus un pārraides aprīkojumu, kuri nav TCL kontrolē. Neierobežojot šīs atrunas vispārību, TCL skaidri atsakās no jebkādas atbildības vai saistībām attiecībā uz saturu vai pakalpojumu, kuri pieejami, izmantojot šo ierīci, jebkādām izmaiņām, pārtraukumu, liegumu, atcelšanu vai atlikšanu. TCL var piemērot ierobežojumus konkrētu pakalpojumu vai satura izmantošanai vai piekļuvei jebkādos gadījumos un bez paziņojuma vai saistībām. TCL neuzņemas atbildību un saistības par klientu apkalpošanu saistībā ar saturu un pakalpojumiem. Jebkuri jautājumi vai prasības saistībā ar saturu vai pakalpojumiem ir adresējami tieši attiecīgajiem satura un pakalpojumu sniedzējiem."];

var noChannelListRemind        = ["Neviens kanāls nav atrasts. Kanālu saraksts ir pieejams pēc kanālu skenēšanas.","Kanālu meklēšana"];
var closeSubtitleRemind   = "Funkcija būs pieejama, kad apakšvirsraksts ir izslēgts. Vai vēlaties iestatīt tagad?";

var estickerTitles = ["Ļoti reāli attēli","Krāsa, kas ir dzīva","Lieliskas reālas kustības","Dinamiska attēla kvalitāte","SR UHD paaugstināta pārveidošana","Pieredze 3D pasaulē","Ātrāka veiktspēja","Nākotnes 4K saturs","Izbaudiet tiešsaistes pasauli","Pieeja papildus saturam","Integrēti ciparu uztvērēji","Savieno visas ierīces","Dažādi 4K avoti","USB saturs","Ļoti ātrs WIFI tīklojums","Mobilās ierīces saturs TV","Mobilās ierīces saturs","Vietējais saturs","DivX apstiprināts","Attēls bez apakšfona kontūrām","Kanāls gatavs","TDT Premium"];
var estickerDescriptions = ["Apbrīnojama skatīšanās pieredze, pateicoties četrkārtīgas detalizācijas attēliem pilna HD UHD ekrānā","Plaša krāsu gamma nodrošina emocijas katrā skatījumā ar spilgtu sarkanu un smaragdzaļu krāsu","4K kadru interpolācija un aizmugurgaismojuma vadība, lai apkarotu kustības izraisītu defektu problēmas","Sākotnējā attēla spilgtums ir uzlabots, lai iegūtu patiesi dinamisku izteiksmi ar spīdošu kontrastu","Izbaudiet asākā skatījumā nekā iepriekš TV raidījumus un Blu-ray diskus, pateicoties augstas rezolūcijas tehnoloģijai","Izbaudiet 3D TV un skatieties dažādu 3D saturu","Papildu patīkamas izklaides pieredze, izmantojot Quad Core, vienmērīgai mijiedarbībai, uzlabojot sniegumu","HEVC (H.265) kodekss atbalsta gaidāmo 4K video izplatīšanas standartu","Tiešsaistes lietotņu bagātība, VOD pakalpojumi, TV uztveršanas pieaugums un interneta tīmekļa pārlūkošana","Skatiet vairāk, izmantojot papildu pakalpojumus un jūsu iecienītāko pārraidītāju saturu","Piekļūstiet augstas izšķirtspējas TV kanāliem bez papildu pierīces","Daudzie digitālie avoti, kas ir viegli pievienojami, ir pieejami mājās","TV gatavs nākotnei, spēj atskaņot 4K 50/60Hz, izmantojot HDMI 2.0 ar HDCP 2.2","Video vai fotoattēlu saturs tieši no USB diska, HDD vai kameras lielajā ekrānā ar 4K izšķirtspēju","Jaunākās paaudzes 2x2 MIMO un AC standarts nodrošina nepārspējamu interneta piekļuves ātrumu","Izbaudiet fotoattēlus, videoklipus, lietotnes no mobilajām ierīcēm lielajā ekrānā, pateicoties ekrāna atspoguļošanas tehnoloģijai","Fotogrāfijas, video, lietotnes no viedtālruņa vai planšetdatora var parādīt lielajā ekrānā ","Parādiet lielajā ekrānā vietējo saturu, piemēram, fotogrāfijas, videoierakstus no ierīces, kas ir savienota ar lokālo tīklu","Atskaņojiet DivX aizsargātas iznomātās vai pašu filmas ","Ļoti šaurs ietvars un ļoti plāns dizains","Canal + ir pārbaudījis un apstiprinājis","TDT Premium ir pārbaudījis un apstiprinājis"];							

var eManualTextArray = ["E-rokasgrāmata","Visa iekļautā grafika ir sniegta tikai uzskates nolūkos."];
var frontPanelRemind = "Priekšējais panelis ir bloķēts.";
var eRPRemind		 = "Veikala režīms nevar apmierināt produkta enerģijas patēriņam izvirzītās prasības. Vai esat pārliecināts?";	
var noRelatedChannel = "Nav saistīta kanāla";
var option0624Name          = ["BOP","BFS","Notikums pēc notikuma","GetUserID","BGM","Reset all","Atiestatīt veikal režīmu","NRM","DVB-T2 un valsts izvēle","HbbTV režiim"];
var DVBT2AndChoice = ["Ieslēgts","Pēc valsts","Izslēgts"];
var hbbtvServiceRemind = "Drīz būs pieejams HbbTV pakalpojums.";
var insertWord = "Ievietot";		
var viewDetail = "Detalizēti";							

var remindOAD  = "Programmatūras jauninājums. Iespējams, citā kanālā ir jauns ieteicamais progr. jauninājums. Ja ļausiet tā lejupielādi, šādi, iespējams, automātiski tiks nomainīts kanāls. Vai vēlaties to darīt tagad?";

var LEDStatus = ["Mirgo", "Normaalne","Izslēgts"];
var netFlixRemind = "Šī funkcija pārtrauks piekļuvi Netflix pakalpojumiem, līdz pieteiksieties atkārtoti.";
var ESNExplanation = "Elektroniskais sērijas numurs";
var resetShopRemind = "Sistēma tiek atiestatīta, lūdzu, neizslēdziet televizoru";
var initialSelectOption = "Lūdzu, izvēlieties vienu opciju:";
var databaseRemind   = "Sistēma ir identificējusi datubāzi kā bojātu nezināmu iemeslu dēļ un automātiski to pārveidojusi, nospiediet OK, lai turpinātu";
var Deactivation = "Deaktivizēšana";
var oadFutureRemind = "Programmatūras atjauninājums.\n. Jauns ieteicamais programmatūras atjauninājums būs pieejams pēc %s. Atjaunināšana var ilgt zināmu laika periodu, un tās laikā ekrāns var izslēgties. Atjaunināšanas laikā neizslēdziet uztvērēju. Ja pieņemat šo atjauninājumu, lūdzu, plānotajā laikā atstājiet uztvērēju ieslēgtu. Vai vēlaties saņemt šo atjauninājumu?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Skaņas izeja";
var bt_soundOutPutTV = "TV skaļruņi";
var bt_soundOutPutBT = "Bluetooth ierīce";
var bt_soundOutPutBT_TV = "Bluetooth un TV";
var bt_refreshBarName = "Ierīces";
var bt_settingTips_On = "Ieslēgt Bluetooth funkciju un skenēt ierīces.";
var bt_settingTips_Finding = "Atrod pieejamās ierīces...";
var bt_settingTips_NoDevice = "Nav pieejamu ierīču.";
var bt_deviceList_State_NoConnect = "Nav savienots";
var bt_deviceList_State_Connecting = "Savienojas...";
var bt_deviceList_State_Connected = "Savienots";
var bt_deviceList_State_Paired = "Sapārots";
var bt_deviceList_Conncect_Failed_Tips1 = "Neizdevās savienot.";
var bt_deviceList_Conncect_Failed_Tips2 = "Pārliecinieties, ka XXX Bluetooth ir ieslēgts";
var bt_deviceList_Conncect_Success = "Savienots ar Bluetooth ierīci.";
var bt_deviceList_Disconncect_Success = "Atvienots no Bluetooth ierīces.";
var bt_deviceList_Disconnect = "Vai tiešām vēlaties atvienoties no XXX?";
var bt_tipsTitle = "Padoms";
var bt_bluetooth_Pairing_Title = "Bluetooth sapārošana";
var bt_bluetooth_Input_Pin = "Ievadiet PIN:";
var bt_bluetooth_Output_Pin_Tip = "Ievadiet XXXX PIN ar tastatūru.";
var bt_bluetooth_Pin_Wrong_Tip = "Nepareizs PIN";
var bt_bluetooth_Remove_Pair_Title = "Vaicājums";
var bt_bluetooth_Remove_Pair_Ask = "Aizmirst šo ierīci?";

var audioDescriptionName = ["Audio apraksts","Skaļrunis","Skaļruņa skaļums","Austiņas","Austiņu skaļums","AD skaļums","Bluetooth ierīce","Bluetooth ierīces skaļums","Pastiprinātājs","Skaļrunis"];
var audioDescriptionOptions = ["Izslēgts","Normaalne","Audio apraksts"];
var volumeOffRemind = 'Iestatījumu izvēlnē iestatiet XXX „Ieslēgt”.';
var switchSourceRemind   = " ievietots. Vai vēlaties pārslēgt tagad?";
var footballModeName = "Sporta režīms";
var resetStadium = "Stadions";

var atvSearchMenu = "ATV manual search";
var dtvSearchMenu = "DTV manual search";
var settingNoticeSourceName ="Automātisks avots";

var smartTVOptions		= ["Smart TV portāls","HbbTV","Koplietot un skatīties","WiFi displejs","Noteikumi un nosacījumi",
    "Tīkla gaidstāve","Atiestatīt smart TV","Cookie policy","Privātuma politika","Datu dzēšana"];
var supportOptions		= ["Attālā diagnostika","Sazinieties ar mums"];
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

var tvDoctor=["Attālā diagnostika 2.0",
"Lietojumprogramma darbojas tikai Smart TV, lai veiktu diagnostikas pārbaudes un uzlabotu izstrādājuma darbību. Šī lietojumprogramma apkopos televizora darbības datus un modeļa informāciju, tie tiks augšupielādēti serverī un izmantoti, lai atrisinātu televizora problēmas. Jūsu personīgajai informācijai piekļuves nebūs. Nodrošiniet televizora pareizu savienojumu ar internetu.",
"Lokālā diagnostika",
"Uzsākot diagnostiku, ievērojiet atbalsta inženiera norādījumus.",
"Attālā diagnostika",
"Pirms lietošanas pārliecinieties, ka atbalsta inženieris ir tiešsaistē.",
"Sērijas numurs:",
"&nbsp;&nbsp;&nbsp;&nbsp;Lietotāja ID:",
"Savienojas…",
"Tiek veikta diagnostika. Nepārtrauciet savienojumu.",
"Nevar piekļūt internetam, pārbaudiet tīkla savienojumu.",
"Iziet"
];
var contactUsOption = ["Sazinieties ar mums",
    "Ja jums rodas problēmas, lietojot šo ierīci, lūdzu, sazinieties ar mums.",
    "Sazināties ar mums",
    "Tīmekļa vietne: apmeklējiet",
    "Zvanu centra numurs:","Informācija par izstrādājumu","Modeļa nosaukums:",
    "Tarkvara versioon:","","Lietotāja ID:","Projekta ID:",
    "Klienta tips:","Bezvadu MAC adrese:","Vadu MAC adrese:","Netflix ESN:","Meklējiet informāciju savā mobilajā tālrunī.",
    ", pēc tam izvēlieties savu valsti."];
							

//本地launcher的翻译，与服务器无关，只用于本地launcher
var homePageWords = ["Vēsture", "Meklēt"];//home页的翻译
var titlePageWords = ["Mājas", "Video","TV","Lietojumprogrammas"];//index的标题翻译
var videosPageWords = ["Filma", "Sports","Mūzika","Populāri","Spēle","Izglītība","Uudis"];//videos页的内容翻译

//同时应用于本地和服务器
var statusPageWords = ["USB","Iestatījumi","WiFi","Vadu"];//状态栏的翻译

//二级页面的翻译
var searchPageWords = ["Meklēt", "Populāri meklējumi:","Šovi, filmas, cilvēki ..."];
var resultSearchPageWords = ["Rezultāti par"," ","Lūdzu, mēģiniet citus atslēgas vārdus.","Atvainojiet, nav atrasts neviens video par "," "];
var historyPageWords = ["Vēsture", 'Nospiediet','lai izdzēstu vēsturi',"Izdzēst vienu","Izdzēst visu","Vakar","Šodien"," Jūs neesat skatījies nevienu video.","Skatīšanās vēsture veiksmīgi izdzēsta!"];
var channelPageWords = ["Atvainojiet, nav atrasts neviens video."];


//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9",
                       	   "Zoom-","0","Zoom+",
                       	   "Iziet","0","",
                       	   "Saraksts","0","Teksts",
                       	   "Kava","Ievadīt","Iziet",
                       	   "Izvēlne","Subtitri","Informācija",
                       	   "Apstādināšana",
                       	   "Informācija","Izvēlne","Iziet",
                       	   "Iziet"
                       	   ];	

//added for LA sports mode
var sportsModeInitReminds= ["Šis vednis tiek izmantots, lai iestatītu USB disku sporta režīmam. Lūdzu, izvēlieties iestatīšanas režīmu.",
						 "Lūdzu, izvēlieties faila izmēru sporta režīmam.",
						 "Sporta režīma faila izveide",
						 "USB diska ātrums ir pārāk mazs (< %f MB/s) sporta režīma funkcijai!",
						 "USB disks ir gatavs sporta režīmam. Tomēr mēs iesakām to mainīt (uz ātrumu > %f MB/s), lai nodrošinātu labāku veiktspēju.",
						 "USB disks ir gatavs sporta režīmam."];

var sportsModeExtra	= ["Vai vēlaties apturēt sporta režīmu un mainīt kanālu?",
						"Vai vēlaties apturēt sporta režīmu un mainīt avotu uz ierīci, kas savienota ar SCART ieeju?",
						"Vai vēlaties apturēt sporta režīmu un mainīt avotu uz ierīci, kas savienota ar HDMI ieeju?",
						"Skremblēts kanāls neatbalsta sporta režīmu.",
						"Vai vēlaties apturēt sporta režīmu un sākt EPG režīmu?",
						"Vai vēlaties apturēt sporta režīmu un sākt multivides režīmu?",
						"Vai vēlaties apturēt sporta režīmu un mainīt ievades avotu?",
						"Televizors beigs pašreizējo sporta režīmu. Vai vēlaties iziet?"];
var remoteControlNote = "- Komplektā iekļautā tālvadības pults var atšķirties atkarībā no produkta modeļa";
						


var textArray = ["Volume","Channel","Source","Switch/Power","Guide","seconds to Power OFF"];
var guideArray = ["VOL-","VOL+","CH-","CH+","Pre","Next"];
var favChannelListRemind = ["Nessun canale preferito. Accedere agli altri elenchi e aggiungere i canali preferiti utilizzando il “Tasto verde”."];

var proxySetting = ["Starpniekservera iestatījumi","Ports"];
var powerOffShop = ["Iesakām izmantot Veikala režīmu, vai izmantosiet?"];
var tcastTextPageWords = ["Milzumdaudz video un lietotņu","TV tālvadība jūsu ērtībām","Lielisks saturs koplietošanai uz liela ekrāna"];
var tcastOtherWords = ["NOSKENĒJIET QR kodu un lejupielādējiet T-CAST","Tīkls savienots ar TV","TV nosaukums","T-Cast"];
var hbbtvWords = ["Hbbtv iestatīšana","HbbTV","Sīkfaili","Trešo pušu sīkfaili","Ierīces ID","izsekošana"];
var hbbtvTrackingWords = ["YES","NO","Labi"];
var eStickerTipWords = ["Atmiņa ir mazāk kā 400 MB. Vai izdzēst video Demonstrācijas režīmā, lai atbrīvotu vietu?"];
var delEstickerVideoRemid = ["Video ir veiksmīgi izdzēsts"];
var selectSatRemind = "Jūs varat izvēlēties ne vairāk kā 20 satelītus!";
var cookiePolicyTitle = "Sīkfailu politika – Smart TV tiešsaistes pakalpojumi";
var cookiePolicyConditions = ["Uzņēmums respektē jūsu privātumu, izmantojot Uzņēmuma ražotos Smart TV un sniegtos Pakalpojumus. Sīkfailus izmanto daudzas tīmekļa vietnes un citi interneta pakalpojumi, un jūsu Smart TV pieņems, glabās un pārsūtīs sīkfailus, lai nodrošinātu, ka šīs tīmekļa vietnes un pakalpojumi darbojas pareizi. Uzņēmums arī izmanto sīkfailus, sniedzot jums Pakalpojumus. Šajā Sīkfailu politikā Uzņēmums apraksta, kādi sīkfaili tiek izveidoti jūsu Smart TV un kā jūs tos varat pārvaldīt.\nLūdzu, ņemiet vērā, ka visi personas dati, ko Uzņēmums apkopo un/vai apstrādā, izmantojot sīkfailus, ir pakļauti Privātuma politikai, un jums ir jāizlasa Sīkfailu politika un Privātuma politika.\n1. Kas ir sīkfails?\nSīkfaili ir nelieli teksta faili, kas var tikt izvietoti jūsu Smart TV. Piekļūstot TV stacijas tīmekļa vietnei vai sarkanās pogas pakalpojumam, tīmekļa vietne vai pakalpojums var saglabāt sīkfailu jūsu Smart TV. Turpmāko piekļūšanu laikā sīkfails, kas izvietots jūsu Smart TV, nosūtīs informāciju pusei, kas izvietojusi sīkfailu. Sīkfaili ir ļoti izplatīti, tos izmanto daudzas tīmekļa vietnes un daudzi pakalpojumi. Katrs sīkfails parasti ietver domēna nosaukumu, no kura sīkfails ir nācis, sīkfaila „dzīves laiku” un vērtību (parasti unikāls skaitlis). Lai iegūtu pilnīgāku paskaidrojumu par to, kas ir sīkfaili un kā tie darbojas, lūdzu, apmeklējiet www.allaboutcookies.org.\nSīkfailus var iedalīt funkcionālo un nefunkcionālo sīkfailu kategorijās. Funkcionāli sīkfaili ir sīkfaili, kas ir noteikti nepieciešami, lai nodrošinātu jums Smart TV pakalpojumus, kā arī tīmekļa vietnēm un citiem pakalpojumiem, lai nodrošinātu pareizo saturu Smart TV. Nefunkcionālie sīkfaili ir visi pārējie sīkfaili.\nŠī Sīkfailu politika attiecas uz sīkfailiem, ko izvietojam mēs, kā arī reklāmas sīkfailiem, ko var izvietot trešās puses, izmantojot mūsu pakalpojumus jūsu Smart TV. Šī Sīkfailu politika neattiecas uz sīkfailiem, kas var tikt izvietoti, kad jūs izmantojat Smart TV pakalpojumus, lai piekļūtu trešo pušu tīmekļa vietnēm, pakalpojumiem vai lietotnēm. Šādu sīkfailu gadījumā mēs iesakām iepazīties ar šo trešo pušu attiecīgajām sīkfailu politikām. Tomēr šajā Sīkfailu politikā ir aprakstīts, kā izdzēst šādus sīkfailus (skatīt zemāk 4. nodaļu).\n2. Kādus nefunkcionālos sīkfailus mēs izmantojam?\nReklāma: Jūsu Smart TV var saņemt video iekļautas un displeja reklāmas, kad izmantojat Smart TV pakalpojumus. Šīs reklāmas varam izvietot mēs vai trešās puses, izmantojot mūsu reklāmas serveri vai saskaņā ar tā norādījumiem - tas pilda centrālo saskaņošanas lomu attiecībā uz šādu reklāmu izvietošanu. Mūsu reklāmas serveris vai trešās puses reklāmas serveris izveidos sīkfailu jūsu Smart TV. Izmantojot šo sīkfailu, reklāmas serveris reģistrēs, vai reklāma ir izvietota jūsu Smart TV vai kāds, kurš izmanto jūsu Smart TV, ir noklikšķinājis uz reklāmas. Mēs izmantojam šādā reklāmas sīkfailā saglabāto informāciju, lai atcerētos, kādas reklāmas ir nosūtītas jūsu Smart TV un varētu būt pārliecināti, ka vienam noteiktam Smart TV netiek nosūtītas pārāk daudzas vienādas reklāmas, un mēs spētu īstenot savas komerciālās aktivitātes ar reklāmas partneriem. Mēs neizmantosim šo informāciju, lai sūtītu mērķorientētas reklāmas. Turklāt trešās puses var izmantot mūsu reklāmas sistēmu, lai nosūtītu reklāmas uz jūsu Smart TV un izvietotu sīkfailus jūsu Smart TV, kad šādas reklāmas tiek nosūtītas. \nŠie sīkfaili cita starpā ietver informāciju par nosūtītajām reklāmām, informāciju par to, kurā lietotnē vai domēnā šādas reklāmas tiek nosūtītas, un jūsu IP adresi. Tas tiek darīts, lai atcerētos, cik bieži noteikta reklāma tiek rādīta, un lai novērstu vienas reklāmas rādīšanu pārāk bieži. Ārējie trešo pušu reklāmdevēji, kas var izvietot reklāmas, var izmantot arī sīkfailus, lai izsekotu jūsu aktivitāti vairākās tīmekļa vietnēs un nodrošinātu reklāmas atbilstoši jūsu izvēlēm.\n3. Trešo pušu tīmekļa vietnes\nKad jūs apmeklējat trešo pušu tīmekļa vietnes vai pakalpojumus, izmantojot Smart TV pakalpojumus savā Smart TV, šādas tīmekļa vietnes vai pakalpojumi var izvietot sīkfailus jūsu Smart TV un šādas tīmekļa vietnes var izsekot un saglabāt jūsu mijiedarbes šādās tīmekļa vietnēs. Mēs nepieprasām un neveicinām šādas aktivitātes un neizmantosim šādu informāciju. Lūdzu, skatiet šādu tīmekļa vietņu un pakalpojumu attiecīgās sīkfailu un privātuma politikas, lai uzzinātu vairāk par to, kā šīs puses izmanto sīkfailus.\n4. Sīkfailu dzēšana\nJūsu Smart TV lietotāja saskarne ļauj izdzēst visus sīkfailus un cita veida lokālo pārlūka atmiņu no Smart TV. Ļoti iesakām izdzēst visus sīkfailus un lokāli saglabātos iestatījumus, pirms pārdodat savu Smart TV vai nododat kādam citam.\n5. Sazināšanās ar mums\nJa jums ir kādi jautājumi vai komentāri attiecībā uz mūsu Sīkfailu politiku vai mūsu sīkfailu lietošanas praksi, varat sūtīt e-pasta ziņojumu uz FRsupport@tcl.com.\nVersija: 1.0\n"];
var privacyPolicyTitle = "Privātuma politika – Smart TV tiešsaistes pakalpojumi";
var privacyPolicyConditions = ["Apstrādājot jūsu personas datus, mēs respektējam jūsu privātumu. Šajā Privātuma politikā aprakstīta organizācija, kas atbildīga par to, kā tiek apkopoti, apstrādāti un izmantoti personas dati, ko mēs iegūstam no jums saistībā ar Smart TV pakalpojumu („Pakalpojumi”) lietošanu, kāda veida personas datus mēs apkopojam, ko ar tiem darām, kā arī jūsu tiesības saistībā ar personas datu izmantošanu no mūsu puses. \n1. Datu pārzinis\nPersonas datu, ko iegūstam, jums lietojot Pakalpojumus, apkopošanu, apstrādi un izmantošanu veic Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, China („Uzņēmums”). Tomēr lūdzam ņemt vērā, ka mēs neesam atbildīgi par visām zemāk minētajām datu apstrādes darbībām. Savā Privātuma politikā esam iekļāvuši attiecīgo darbību aprakstu, jo šāda apstrāde ir saistīta ar Smart TV lietošanu no jūsu puses.\n2. Piekrišana datu apstrādei\nReizēm jūsu personas datu apkopošanai, apstrādei un/vai izmantošanai nepieciešama jūsu piekrišana. \nJa piekrītat savu personas datu izmantošanai ar nolūku uzlabot Pakalpojumus, jūsu piekrišana tiek formulēta šādi:\n„Es piekrītu, ka tiek apkopoti, apstrādāti un izmantoti manas ierīces palaišanas laiks, DTV kanālu saraksts, izlases kanālu saraksts, apmeklēšanas laiks un skatītie kanāli ar nolūku analizēt lietotāju paradumus, lai uzlabotu Pakalpojumus un/vai analizētu, cik tiešsaistes lietotāju ir Uzņēmumam dienā/mēnesī/gadā, un šī informācija tiek koplietota ar TV stacijām.”\nJa piekrītat savu personas datu izmantošanai reklāmas nolūkos atbilstoši savām interesēm, jūsu piekrišana tiek formulēta šādi:\n„Es piekrītu sava klienta veida un valsts apkopošanai, apstrādāšanai un izmantošanai, lai saņemtu piemērotas reklāmas.”\nPiekrišana ir brīvprātīga, un jūs varēsiet lietot Pakalpojumus arī tad, ja nesniegsiet savu piekrišanu. Tomēr, iespējams, jūs redzēsiet reklāmas un citu saturu, kas nav pielāgots jūsu izvēlēm. Neatkarīgi no jūsu piekrišanas Uzņēmums patur tiesības apkopot, apstrādāt un/vai izmantot augstāk minētos datus tādā mērā, kā to atļauj piemērojamie likumi.\nJūs varat atcelt jebkuru savu augstāk minēto piekrišanu jebkurā laikā. Jūs varat iebilst savu personas datu izmantošanai mārketinga, tirgus izpētes vai domu pētīšanas nolūkos un Pakalpojumu pielāgošanai jūsu vajadzībām. Lai atceltu savu piekrišanu un/vai iebilstu, atbilstoši izmainiet Smart TV privātuma iestatījumus.\n3. Apkopotie personas dati\nNeatkarīgi no jūsu piekrišanas Uzņēmums apkopo, apstrādā, glabā un izmanto šādu kategoriju datus:\nIerīces ID: Jūsu Smart TV glabā fiksētu unikālu numuru, kas ļauj mums identificēt un autentificēt Smart TV, kad jūs lietojat Pakalpojumus. Šo numuru sauc par ierīces ID. Ierīces ID tiks nodots mūsu pakalpojumu partnerim, lai nodrošinātu jums Pakalpojumus. Ierīces ID mēs nododam arī atlasīta satura partneriem ar nolūku veikt autentifikāciju. Šie satura partneri izmanto ierīces ID, lai autentificētu jūsu Smart TV un nodrošinātu piekļuvi satura partnera sniegtiem pakalpojumiem.\nIP adrese un MAC adrese: Piekļūstot internetam, jūsu Smart TV tiks piešķirta IP adrese. Šī IP adrese tiks pārsūtīta mums, un mēs to apstrādāsim ikreiz, kad Smart TV pieprasīs informāciju vai datus no Pakalpojumiem. Ja jūsu Smart TV izmanto maršrutētāju (piem., atrodas lokālā mājas tīklā vai lokālā WLAN), mēs varam apkopot un apstrādāt šī maršrutētāja IP adresi. MAC adrese ir unikāls numurs, kas piešķirts katrai jūsu Smart TV tīkla saskarnei. MAC adresi mēs apkoposim un apstrādāsim, kad Smart TV pieprasīs informāciju vai datus no Pakalpojumiem.\nPakalpojumu pieprasījumu dati: Ikreiz, kad pieslēgsiet Smart TV internetam un ieslēgsiet Smart TV, tas automātiski pieslēgsies Pakalpojumiem, ko pārvalda mūsu pakalpojumu partneris. Jūsu Smart TV tiks autentificēts kā sertificēts, lai piekļūtu Pakalpojumiem. Autentifikācijas nolūkiem Pakalpojumi glabā vienu vai vairākus unikālus ciparu identifikatorus, kas saistīti ar jūsu Smart TV. Pieslēdzoties Pakalpojumam, Smart TV nosūtīs tam piešķirto IP adresi un ierīces specifisku informāciju (Smart TV modelis, programmatūras versija), lai meklētu pieejamus programmatūras atjauninājumus.\nPakalpojumu iestatījumi: Pakalpojumu parastās funkcionalitātes ietvaros jūs varat manuāli kārtot secību, kādā Pakalpojumi attēlo lietotnes. Mūsu pakalpojumu partneris glabās jūsu izkārtojumu un citas izvēles, ko varat iestatīt, izmantojot Pakalpojumus. Šī informācija tiks piesaistīta ierīces ID.\nIerīces specifiska informācija: Smart TV glabā informāciju par sevi un tās konfigurāciju. Šī informācija ietver Smart TV veidu, Smart TV operētājsistēmas versiju, paneļa izšķirtspēju, projekta ID (t.i., informācija par konfigurācijas failiem), lietotāja aģentu, pārlūka nosaukumu, pārlūka versiju, kā arī Smart TV konfigurēto valodu un valsti. Šo informāciju mēs izmantosim un nodosim pakalpojumu partnerim un satura partneriem.\nReklāma: Pakalpojumi var ietvert reklāmas. Šīs reklāmas nodrošinām mēs vai trešās puses, izmantojot mūsu piešķirto reklāmas inventāru. Visas reklāmas tiek nodrošinātas, izmantojot mūsu reklāmas serveri, kas pilda koordinēšanas lomu reklāmu nodrošināšanai. Mūsu reklāmas serveris vai trešo pušu reklāmas serveris var Smart TV izveidot sīkfailu. Lūdzu, skatiet mūsu Sīkfailu politiku, lai uzzinātu vairāk par sīkfailiem.\nPakalpojumu un satura partneru datplūsma: Kad jūs izmantojat Pakalpojumus, Smart TV pieprasa datus no Pakalpojumiem, izmantojot internetu. Kā daļa no šiem pieprasījumiem mūsu pakalpojumu partnerim tiks nosūtīta IP adrese, kā aprakstīts augstāk, un Smart TV konfigurētā valoda un valsts. Mūsu pakalpojumu partneris apstrādās attiecīgos datus atbilstoši savai privātuma politikai.\nOtrā ekrāna lietojums: Ja izmantosiet mūsu otrā ekrāna lietotni, mēs apkoposim un apstrādāsim savos serveros vadības, ko aktivizēsiet lietotnē, Smart TV valsts un valodas iestatījumus, DTV kanālu sarakstu, izlases kanālu sarakstus, grafika sarakstus, ierīces ID, pašreizējo kanālu, protokola versiju un IP adresi. Mūsu serveri vadīs jūsu Smart TV, kā būsiet noteicis otrā ekrāna lietotnē.\nHbbTV - „sarkanā poga”: TV stacijas („Stacijas”) var nosūtīt papildu informāciju ar TV signālu. Ja Smart TV saņem specifiskus norādījumus šādā papildu informācijā un ja tas ir pieslēgts internetam, Smart TV lejupielādē attēlu vai nelielu lapu no Stacijas tīmekļa vietnes un parāda to kopā ar informāciju nospiest tālvadības pults „sarkano pogu”, ja vēlaties lietot Stacijas piedāvātos papildu pakalpojumus. Tas notiek ikreiz, kad pārslēdzat kanālus. Lejupielādējot attēlu no Stacijas tīmekļa vietnes, Smart TV nosūtīs personas datus, t.i., DTV kanālu sarakstu, pašreizējo kanālu, notikumu informācijas tabulu, TV laiku, Smart TV IP adresi un sīkfailus, kas tiek glabāti Smart TV (ja tādi ir). Stacija ir atbildīga par šo datu apkopošanu, apstrādi un/vai izmantošanu. Turklāt, ja izmantojat Stacijas piedāvātos papildu pakalpojumus, izmantojot sarkano pogu, Stacija var apkopot citus jūsu personas datus (piem., kādus video pēc pieprasījuma jūs skatāties, kādas ziņas lasāt utt.).\n4. Nolūki, kādiem mēs apstrādājam un/vai izmantojam jūsu personas datus\nMēs apstrādājam apkopotos datus šādiem nolūkiem:\nPakalpojumu nodrošināšana: Mēs izmantojam IP adresi un MAC adresi, ierīces ID, Smart TV operētājsistēmas versiju, Smart TV klienta veidu un tā paneļa izšķirtspēju, projekta ID (t.i., informāciju attiecībā uz konfigurācijas failiem), jūsu DTV kanālu sarakstu, skatītos kanālus, laika joslu, valsts un valodas iestatījumus, lai nodrošinātu jūsu Smart TV piekļuvi Pakalpojumiem un satura partneru sniegtajiem pakalpojumiem. Nolūki ietver (bet ne tikai) autentifikāciju, uz atrašanās vietu balstītu pakalpojumu sniegšanu (piem., laika prognoze), nepareizas lietošanas novēršanu, drošības incidentu pārvaldību, Pakalpojumu pieejamības uzraudzību un lietotāja izvēlētu dublēšanas pakalpojumu sniegšanu.\nAutentifikācija: Mēs izmantojam ierīces ID un MAC adresi autentifikācijas nolūkiem.\nProgrammatūras atjauninājumi: Ikreiz, kad jūsu Smart TV tiks ieslēgts, tas nosūtīs mums IP adresi, ierīces ID, programmatūras versiju, Smart TV klienta veidu, projekta ID (t.i., konfigurācijas failus), lietotāja ID, sērijas numuru, lai piedāvātu jums un nodrošinātu atbilstošus programmatūras atjauninājumus. \nPakalpojumu uzlabošana: Mēs izmantojam apkopotus un anonīmus lietojuma datus (t.i., datus par jūsu mijiedarbību ar Pakalpojumiem), lai uzlabotu Pakalpojumu lietotāju pieredzi.\nReklāmu izvietošana: Mēs izmantojam informāciju reklāmas sīkfailos, lai ļautu sistēmai reģistrēt, kādas reklāmas ir rādītas jūsu Smart TV, lai pārliecinātos, ka jūs nesaņemat pārāk daudz līdzīgu reklāmu, un mēs spētu īstenot savas komerciālās aktivitātes ar reklāmas partneriem. Ārējie reklāmdevēji, kas izvieto reklāmas Pakalpojumos vai satura partneru tīmekļa vietnēs pēc mūsu reklāmas servera saskaņojuma, var izmantot arī sīkfailus, lai izsekotu jūs vairākās tīmekļa vietnēs un izvietotu reklāmas, kas atspoguļo jūsu personīgās izvēles.\nReklāmu optimizācija: Mēs izmantojam datus saistībā ar reklāmas skatījumiem un klikšķiem uz reklāmām, lai optimizētu patērētāju reklāmas pieredzi Pakalpojumā.\nAtlaides: Mēs nododam ierīces ID atlasītiem satura partneriem, lai ļautu šiem partneriem noteikt, kādā mērā tie var nodrošināt jums bezmaksas piekļuvi video pēc pieprasījuma sadaļai savā kolekcijā.\nLikumu piemērošana: Mums var būt nepieciešams sniegt datus kompetentām tiesībaizsardzības iestādēm vai tiesām. Ja to darām, tad tikai pamatojoties uz saistošu juridisku instrumentu, piemēram, rīkojumu vai tiesas orderi, kas pieprasa mums sadarboties ar attiecīgām iestādēm.\nPakalpojumu lietošana ir iespējama, izmantojot pseidonīmus, ja vien noteikti pakalpojumi nepieprasa norādīt jūsu vārdu un/vai e-pasta adresi.\n5. Saņēmēju kategorijas\nUzņēmums koplieto jūsu personas datus, kas apkopoti, jums lietojot Pakalpojumus, tikai ar šādām trešajām pusēm:\nAr trešajām pusēm, kas sniedz Smart TV pakalpojumus, ja pieprasāt šādus pakalpojumus (piem., ja palaižat Netflix lietotni savā Smart TV, mēs varam koplietot jūsu IP adresi, MAC adresi, programmatūras versiju un televizora modeļa nosaukumu ar Netflix).\nAr trešajām pusēm - satura partneriem, ja pieprasāt noteiktu saturu, ko nodrošina šāda satura partneri (piem., lai nodrošinātu jums GoLive IP TV pakalpojumu, mēs varam koplietot jūsu TV klienta veidu, IP adresi un valodas iestatījumus ar juridisko personu, kas nodrošina GoLive pakalpojumu).\nTādā mērā, kādā esat piekritis noteiktu personas datu koplietošanai ar augstāk minētajām trešajām pusēm, Uzņēmums koplietos jūsu personas datus ar šīm trešajām pusēm.\nAr ārpakalpojumu sniedzējiem kā datu apstrādātājiem, kas palīdz Uzņēmumam nodrošināt Pakalpojumus.\nUzņēmums koplieto personas datus ar citām trešajām pusēm tikai tad, ja Uzņēmumam tas jādara, balstoties uz juridiskām prasībām (piem., tiesām vai par kriminālvajāšanu atbildīgajām iestādēm), jūs esat piekritis attiecīgai koplietošanai vai koplietošana ir citādi likumīga saskaņā ar piemērojamajiem likumiem.\n6. Valstis, kurās jūsu dati tiks apstrādāti\nUzņēmums un/vai daži jūsu augstāk minēto personas datu saņēmēji var atrasties ārpus Eiropas Ekonomiskās zonas (t.i., šādās valstīs: Ķīnas Tautas Republika, Amerikas Savienotās Valstis). Tāpēc jūsu personas dati var tikt apstrādāti valstīs, kas nav atzītas kā tādas, kas nodrošina pienācīgu personas datu aizsardzības līmeni saskaņā ar Eiropas Parlamenta un Padomes Direktīvu 95/46/EK (1995. gada 24. oktobris) par personu aizsardzību attiecībā uz personas datu apstrādi un šādu datu brīvu apriti.\n7. Jūsu tiesības\nJūs varat sazināties ar Uzņēmumu, lai saņemtu informāciju par personas datiem, ko apstrādā Uzņēmums, un/vai īstenotu savas likumīgās tiesības attiecībā uz piekļuvi personas datiem, to labošanu, dzēšanu un bloķēšanu; un/vai iebilstu pret savu personas datu apstrādi mārketinga un/vai tirgus izpētes vai domu pētīšanas nolūkiem.\n8. Izmaiņas Privātuma politikā\nLai uzlabotu mūsu Pakalpojumus, mums var būt nepieciešams grozīt šo Privātuma politiku - piem., ieviešot jaunas tehnoloģijas vai jaunus pakalpojumus. Mēs paturam tiesības mainīt vai papildināt šo Privātuma politiku jebkurā laikā.\n9. Kontaktinformācija\nJa jums ir kādi jautājumi par Privātuma politiku vai sūdzības par to, kā mēs rīkojamies ar jūsu personas datiem, lūdzu, sazinieties ar mums, izmantojot zemāk norādīto kontaktinformāciju:\nE-pasts: FRsupport@tcl.com\nVersija: 1.0\n"];
var privacyPolicyTerms = [
    "Iespējot Smart TV pakalpojumu",
    "Es piekrītu, ka tiek apkopoti, apstrādāti un izmantoti manas ierīces palaišanas laiks, DTV kanālu saraksts, izlases kanālu saraksts, apmeklējuma laiks un skatītie kanāli ar nolūku analizēt lietotāja paradumus, lai uzlabotu pakalpojumus, un/vai analizēt, cik TCL ir tiešsaistes lietotāju dienā/mēnesī/gadā un koplietot šo informāciju ar TV stacijām.",
    "Iespējot ieteikumu pakalpojumu.",
    "Iespējot otro ekrāna lietotni mobilajām ierīcēm",
    "Iespējot automātiskus programmatūras atjauninājumus.",
    "Iespējojiet FreeviewPlay pakalpojumu"
];
var privacyPolicyTips = [
    "Visi Smart TV pakalpojumi tiks atspējoti.",
    "HbbTV pakalpojums, ko nodrošina TV kanāli, kad tiek lietots iebūvētais uztvērējs, tiks atspējoti.",
    "Satura un TV programmu ieteikumu pakalpojums tiks atspējots.",
    "Otra ekrāna izmantošana tiks atspējota.",
    "TV automātiski nepārbaudīs programmatūras atjauninājumus un jaunas funkcionalitātes.",
    "FreeviewPlay saturs tiks atspējots."
];
var privacyPolicyRemind = "Lūdzu, atzīmējiet attiecīgo izvēles rūtiņu Iestatījumos.";
var set = "Iestatīt";
var copyShopDemoTips = ["Savienots ar USB, vai vēlaties video kopēt zibatmiņā?","Video kopēt zibatmiņā","Video veiksmīgi pārkopēts!","Video kopēšanas kļūda!"];
var dataDeletionWords = ["Izdzēsiet Smart TV pakalpojuma datus aizmugursistēmas serveros.","Piezīmes: Dati, kas saistīti ar jūsu Smart TV lietotāju, tiks izdzēsti viena mēneša laikā pēc šīs opcijas atzīmēšanas. Lūdzu, ņemiet vērā, ka izdzēšana neietekmē jūsu televizorā glabātos lokālos datus.","Vairs nesūtīt datus Smart TV serverim.","Piezīmes:  Pēc šīs opcijas atzīmēšanas jūsu dati saistībā ar Smart TV pakalpojumu lietošanu vairs netiks nosūtīti serverim. Jūsu televizors vairs nesaņems ieteiktos pakalpojumus.","Lai uzzinātu vairāk, apmeklējiet tīmekļa vietni www.tcl.eu"];
var miracastWords = ["Bezvadu savienojums","Spoguļot Android tālruni televizorā","Noklikšķiniet, lai savienotu","Šī funkcija ir pieejama tikai Android tālrunī"];
var miracastTips = ["Savienošanas soļi","Atvērt sistēmas iestatījumus","Citi savienošanas veidi \n / Citi bezvadu savienojumi","Izvēlieties bezvadu displeju","Noklikšķiniet, lai savienotu \n meklē"];
var termsAndConditions = ["\nSaturs un pakalpojumi (kopā saukti „Licencēta lietotne”), kas jums ir pieejami šajā televizorā („Ierīce”), ir licencēti, netiek pārdoti un ir lietojami tikai saskaņā ar šiem noteikumiem un nosacījumiem. Licencētās lietotnes nodrošinātāji (katrs saukts „Lietotnes nodrošinātājs”) patur visas tiesības, kas jums nav skaidri piešķirtas.\n\n1.	Licences darbības joma\n\nLicencētas lietotnes licence, ko jums piešķīris attiecīgais Lietotnes nodrošinātājs, ir nenododama licence lietot Licencēto lietotni Ierīcē, kas atrodas jūsu īpašumā vai kontrolē. Jūs nedrīkstat izplatīt Licencēto lietotni vai padarīt to pieejamu tīklā, kur to vienlaicīgi varētu lietot vairākas ierīces. Jūs nedrīkstat nomāt, aizdot, pārdot, izplatīt tālāk vai apakšlicencēt Licencēto lietotni. \n\nVisas Licencētās lietotnes un viss iekļautais saturs, kas ir pieejams, izmantojot šo Ierīci, pieder Lietotnes nodrošinātājam, un tos aizsargā piemērojamie intelektuālā īpašuma likumi. Ja vien piemērojamie likumi neparedz citādi, jūs nedrīkstat pārveidot, kopēt, dekompilēt, veikt reverso inženieriju, disasemblēt, pārpublicēt, augšupielādēt, izvietot, pārsūtīt, tulkot, mēģināt iegūt pirmkodu, veidot atvasinātus darbus vai citādi ekspluatēt jebkuru Licencēto lietotni, tās atjauninājumus vai jebkuru daļu. Neievērojot šo ierobežojumu, jūs varat tikt apsūdzēts un jums var pieprasīt atlīdzību par zaudējumiem. Licences noteikumi regulēs jebkādus Lietotnes nodrošinātāja jauninājumus, kas aizvieto un/vai papildina oriģinālo Licencēto lietotni, ja vien šo jauninājumu nepavada atsevišķa licence, kuras gadījumā noteicošie ir šādas licences noteikumi. Jūs esat atbildīgs par jebkādām un visām izmaksām (ja tādas ir) Licencētās lietotnes jaunināšanas sakarā.\n\n2.	Trešo pušu materiāli\n\nLicencētā lietotne var iespējot piekļuvi Lietotnes nodrošinātāja un trešo pušu pakalpojumiem un tīmekļa vietnēm (kopā saukti „Pakalpojumi”). Lietojot jebkuru no mūsu Pakalpojumiem, jūs varat saskarties ar saturu, kas var tikt uzskatīts par aizvainojošu, nepiedienīgu vai nevēlamu, saturu, kura valoda ir vai nav skaidri izteikta, un jebkādas meklēšanas rezultāti vai noteikta URL ievadīšana var automātiski un netīši ģenerēt saites vai norādes uz nevēlamu materiālu. Tomēr šīs Ierīces ražotājs („Ražotājs”) un Lietotnes nodrošinātājs neatbild par saturu, kas var tikt uzskatīts par aizvainojošu, nepiedienīgu vai nevēlamu. \n\nRažotājs nav atbildīgs par satura pārbaudīšanu, novērtēšanu, precizitāti, pilnīgumu, savlaicīgumu, derīgumu, atbilstību autortiesībām, atbilstību likumam, kvalitāti vai jebkādu citu šādu Pakalpojumu aspektu. Ražotājs negarantē, neapstiprina, neuzņemas nekādas saistības un atbildību par jebkuru no Pakalpojumiem pret jums vai jebkuru citu personu. \n\nPakalpojumi var saturēt patentētu saturu, informāciju un materiālus (kopā saukti „Trešo pušu Materiāli”), ko aizsargā piemērojamie intelektuālā īpašuma un citi likumi, un jūs nedrīkstat izmantot šādus Trešo pušu Materiālus nekādā citā veidā, izņemot atļautai Pakalpojumu lietošanai. Ja vien piemērojamie likumi neļauj citādi, jūs nedrīkstat reproducēt, pārveidot, iznomāt, aizdot, pārdot, izplatīt Trešo pušu Materiālus vai jebkādā veidā radīt to atvasinātus darbus, un jūs nedrīkstat ekspluatēt Pakalpojumus nekādā neatļautā veidā. Jūs nedrīkstat nekādā veidā lietot Pakalpojumus, lai uzmāktos, slikti izturētos, vajātu, draudētu, celtu neslavu vai citādi pārkāptu jebkuras trešās puses tiesības, un Ražotājs nekādā veidā nav atbildīgs par jebkādu lietošanu no jūsu puses un jebkādiem uzmācīgiem, draudošiem, neslavu ceļošiem, aizvainojošiem vai nelikumīgiem ziņojumiem vai sūtījumiem, ko varat saņemt, izmantojot jebkuru no Pakalpojumiem. \n\n3.	Bez garantijas\n\nVisas Licencētās lietotnes un Pakalpojumi tiek nodrošināti „kā ir” un „kā pieejami” bez jebkāda veida tieši vai netieši izteiktas garantijas. Ražotājs skaidri atsakās no visām garantijām un nosacījumiem attiecībā uz Licencētajām lietotnēm un Pakalpojumiem, tieši vai netieši izteiktiem, tostarp, bet ne tikai garantijām par piemērotību tirdzniecībai, apmierinošu kvalitāti, derīgumu konkrētam nolūkam, precizitāti, klusu darbību un trešo pušu tiesību nepārkāpšanu. Ražotājs negarantē precizitāti, derīgumu, savlaicīgumu, likumību vai pilnīgumu nevienai Licencētai lietotnei vai Pakalpojumam, kas pieejams, izmantojot šo Ierīci, un negarantē, ka Ierīce, Licencētās lietotnes vai Pakalpojumi atbildīs jūsu prasībām vai Licencēto lietotņu vai Pakalpojumu darbība būs nepārtraukta, bez kļūdām, vai defekti Licencētajā lietotnē vai Pakalpojumos tiks laboti. Ja Licencētā lietotne vai Pakalpojumi tiek apstiprināti kā defektīvi, jūs uzņematies visas izmaksas par visu nepieciešamo apkopi, remontu vai labošanu.\n\nLicencētās lietotnes un Pakalpojumi var tikt mainīti, atlikti, izdzēsti, izbeigti vai pārtraukti, piekļuve var tikt atspējota jebkurā laikā bez iepriekšēja paziņojuma, un Ražotājs negarantē, ka jebkāds saturs vai pakalpojums, kas iekļauts Licencētajās lietotnēs un Pakalpojumos, saglabāsies pieejams uz jebkuru laika periodu. Šādu saturu un pakalpojumus trešās puses pārsūta, izmantojot tīklus un raidīšanas līdzekļus, pār kuriem Ražotājam nav kontroles. Neierobežojot iepriekšminētā vispārējumu, Ražotājs skaidri atsakās no jebkādas atbildības vai saistībām attiecībā uz jebkāda satura vai pakalpojuma, kas pieejami, izmantojot šo ierīci, jebkādām izmaiņām, pārtraukumu, atspējošanu, dzēšanu vai atlikšanu. Lietotnes nodrošinātājs un citi Pakalpojumu nodrošinātāji patur tiesības mainīt, atlikt, izdzēst vai atspējot piekļuvi jebkurai Licencētai lietotnei vai Pakalpojumiem jebkurā laikā bez iepriekšēja paziņojuma. Ražotājs var arī noteikt ierobežojumus konkrētu Licencēto lietotņu vai Pakalpojumu lietošanai vai piekļuvei jebkurā gadījumā un bez iepriekšēja paziņojuma vai atbildības.\n\nRažotājs nenodrošina klientu apkalpošanu saistībā ar Licencētajām lietotnēm un Pakalpojumiem. Ar jebkādiem jautājumiem vai apkopes pieprasījumiem saistībā ar Licencētajām lietotnēm un Pakalpojumiem jāvēršas tieši pie attiecīgā nodrošinātāja.\n\n4.	Informācijas apkopošana un izmantošana\n\nRažotājs, Lietotņu nodrošinātāji un Pakalpojumu nodrošinātāji var apkopot un izmantot tehniskos datus un saistītu informāciju, tostarp, bet ne tikai tehnisku informāciju par šo Ierīci, sistēmu un lietotņu programmatūru un piederumiem, lai sekmētu programmatūras atjauninājumu nodrošināšanu, produktu atbalstu un citus pakalpojumus (ja tādi ir) saistībā ar Ierīci un Licencēto lietotni. Ražotājs, Lietotņu nodrošinātāji un Pakalpojumu nodrošinātāji var izmantot šādu informāciju, kamēr tā ir tādā formā, kas personīgi neidentificē jūs, lai uzlabotu savus produktus vai nodrošinātu jums pakalpojumus vai tehnoloģijas. Sīkāku informāciju par informācijas apkopošanu un izmantošanu jūs varat iegūt, iepazīstoties ar mūsu konfidencialitātes politiku: http://www.tcl.eu/en/.\n\n5.	Atsevišķu funkciju nepieejamība\n\nLietotnes nodrošinātāja ierobežojumu dēļ konkrētas funkcijas, lietotnes un pakalpojumi var nebūt pieejami šajā Ierīcē (tostarp tās perifērajās ierīcēs) vai visās teritorijās. Dažas funkcijas šajā Ierīcē var pieprasīt arī papildu perifērās ierīces vai dalības maksas, kas tiek pārdotas atsevišķi.\n\n6.	Atbildības ierobežojums\n\nTādā mērā, cik neaizliedz piemērojamie likumi, nekādos apstākļos, ieskaitot nolaidību, Ražotājs nenes atbildību - ne līgumisko, ne deliktatbildību, par jebkādiem tiešiem, netiešiem, nejaušiem, speciāliem vai izrietošiem zaudējumiem, advokātu atalgojumu, izdevumiem vai jebkādiem citiem zaudējumiem, kas radušies saistībā ar jebkādu ietverto informāciju, kādai trešajai pusei vai jums lietojot Ierīci, jebkuru Licencēto lietotni vai Pakalpojumu, pat ja bijusi informācija par šādu zaudējumu iespējamību.\n\nRažotājs ir atbildīgs tikai par tīšu un rupju nolaidību."];
var privacyNotice = ["\nApstrādājot jūsu personas datus, mēs respektējam jūsu privātumu. Šajā Paziņojumā par privātumu ir aprakstīta persona, kura atbild par to, kā tiek apstrādāti personas dati, kurus mēs iegūstam no jums, ja jūs lietojat mūsu Smart TV pakalpojumus („Pakalpojumi”), kādus jūsu personas datus mēs apkopojam un ko ar tiem iesākam, kā arī jūsu tiesības saistībā ar savu personas datu izmantošanu. \n\n1.	Datu pārzinis un pārstāvis Eiropas Savienībā\n\nPersonas datu, ko iegūstam, jums lietojot Pakalpojumus, apkopošanu, apstrādi un izmantošanu veic Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, China („Uzņēmums”). Mūsu kontaktinformācija un mūsu pārstāvja Eiropas Savienībā kontaktinformācija ir norādīta 12. sadaļā. Tomēr lūdzam ņemt vērā, ka mēs neesam atbildīgi par visām zemāk minētajām datu apstrādes darbībām. Neraugoties uz to, esam iekļāvuši minēto darbību aprakstu mūsu Paziņojumā par privātumu, jo šāda datu apstrāde ir saistīta ar Smart TV lietošanu.\n\n2.	Piekrišana datu apstrādei\n\nLai mēs varētu veikt noteiktas datu apstrādes darbības, ir vajadzīga jūsu piekrišana, piemēram, lai mēs varētu izmantot jūsu personas datus Pakalpojumu kvalitātes uzlabošanai.\n\nPiekrišana ir brīvprātīga, un jūs varēsiet lietot Pakalpojumus arī tad, ja nesniegsiet savu piekrišanu. Taču, iespējams, jums tiks atainots jūsu vēlmēm nepielāgots saturs. Neatkarīgi no jūsu piekrišanas mums ir tiesības veikt jūsu personas datu apstrādi piemērojamo tiesību aktu atļautajā apmērā.\n\nJums ir tiesības jebkurā brīdī atsaukt savu piekrišanu. Piekrišanas atsaukšana neietekmē datu apstrādes, kas veikta, pamatojoties uz atsaukto piekrišanu pirms tās atsaukšanas, likumīgumu. Lai atsauktu savu piekrišanu un/vai izteiktu iebildumus (skat. 10. sadaļu un pielikumu Jūsu tiesības, kurā varat iepazīties ar savām tiesībām izteikt pretenzijas), lūdzam attiecīgi nomainīt sava Smart TV konfidencialitātes iestatījumus.\n\n3.	Īpašas personas datu kategorijas\n\nMēs apstrādājam šādas datu kategorijas:\n\nIerīces ID: Jūsu Smart TV glabā fiksētu unikālu numuru, kas ļauj mums identificēt un autentificēt Smart TV, kad jūs lietojat Pakalpojumus. Šo numuru sauc par ierīces ID. \n\nIP adrese un MAC adrese: Piekļūstot Internetam, jūsu Smart TV tiks piešķirta IP adrese. Ja jūsu Smart TV ir pievienots maršrutētājam (piemēram, vietējā mājas tīklā vai vietējā WLAN), mēs varam apstrādāt maršrutētāja IP adresi. MAC adrese ir unikāls numurs, kas piešķirts katrai jūsu Smart TV tīkla saskarnei. \n\nIerīces specifiska informācija: Smart TV glabā informāciju par sevi un tās konfigurāciju. Šī informācija ietver Smart TV veidu, Smart TV operētājsistēmas versiju, paneļa izšķirtspēju, projekta ID (t.i., informācija par konfigurācijas failiem), lietotāja aģentu, pārlūka nosaukumu, pārlūka versiju, kā arī Smart TV konfigurēto valodu un valsti. \n\nMēs izmantojam šo informāciju un nododam to savam pakalpojumu partnerim un satura partneriem tālāk norādītajiem mērķiem.\n\n4.	Mērķi, kādiem mēs apstrādājam un/vai izmantojam jūsu personas datus, un tiesiskais pamats\n\nMērķi, kādiem mēs apstrādājam jūsu personas datus, un attiecīgais tiesiskais pamats ir norādīts tālāk. Ciktāl līguma mērķi saskaņā ar turpmāk minēto ir tiesisks pamats, mēs nevaram sniegt jums Pakalpojumus, ja jūs nesniedzat mums atbilstošus datus. Ciktāl jūsu piekrišana saskaņā ar minēto ir tiesisks pamats, jums ir tiesības sniegt vai nesniegt savu piekrišanu. Ja jūs nesniegsiet savu piekrišanu, mēs neveiksim jūsu personas datu apstrādi attiecīgajam mērķim.\n\n•	Pakalpojumu sniegšana: Mēs izmantojam IP adresi un MAC adresi, ierīces ID, Smart TV operētājsistēmas versiju, Smart TV klienta veidu un tā paneļa izšķirtspēju, projekta ID (t.i., informāciju attiecībā uz konfigurācijas failiem), jūsu DTV kanālu sarakstu, skatītos kanālus, laika joslu, valsts un valodas iestatījumus, lai nodrošinātu jūsu Smart TV piekļuvi Pakalpojumiem un satura partneru sniegtajiem pakalpojumiem. Datu apstrādes mērķi ir (bet ne tikai) atrašanās vietai piesaistītu pakalpojumu sniegšana (piem., laikapstākļu prognozes); pasākumu veikšana ļaunprātīgas rīcības gadījumā, drošības incidentu pārvaldība, Pakalpojumu pieejamības uzraudzība un lietotāju preferenču dublēšanas pakalpojumu nodrošināšana.\n\nKad jūs izmantojat Pakalpojumus, Smart TV pieprasa datus no Pakalpojumiem, izmantojot Internetu. Kā daļa no šiem pieprasījumiem mūsu pakalpojumu partnerim tiks nosūtīta IP adrese, kā aprakstīts augstāk, un Smart TV konfigurētā valoda un valsts. Mūsu pakalpojumu partneris apstrādā attiecīgos datus atbilstoši savam paziņojumam par privātumu.\n\nJūsu personas datu attiecīgās apstrādes tiesiskais pamats ir līguma mērķi atbilstoši Vispārīgās datu aizsardzības regulas („VDAR”) 6. panta 1. punkta b) apakšpunktam.\n\n•	Pakalpojumu iestatījumi: Pakalpojumu parastās funkcionalitātes ietvaros jūs varat manuāli kārtot secību, kādā Pakalpojumi attēlo lietotnes. Mūsu pakalpojumu partneris saglabā jūsu izvēlēto secību un citas Pakalpojuma lietošanas gaitā jūsu izvēlētas preferences. Šī informācija tiks piesaistīta ierīces ID.\n\nJūsu personas datu attiecīgās apstrādes tiesiskais pamats ir līguma mērķi atbilstoši VDAR 6. panta 1. punkta b) apakšpunktam.\n\n•	Autentifikācija: Ikreiz, kad pieslēgsiet Smart TV internetam un ieslēgsiet Smart TV, tas automātiski pieslēgsies Pakalpojumiem, ko pārvalda mūsu pakalpojumu partneris. Jūsu Smart TV tiks autentificēts kā sertificēts, lai piekļūtu Pakalpojumiem. Autentifikācijas nolūkiem Pakalpojumi glabā vienu vai vairākus unikālus ciparu identifikatorus, kas saistīti ar jūsu Smart TV. Mēs izmantojam ierīces ID un MAC adresi autentifikācijas nolūkiem. Ierīces ID mēs nododam arī atsevišķiem satura partneriem ar nolūku veikt autentifikāciju. Šie satura partneri izmanto ierīces ID, lai autentificētu jūsu Smart TV un nodrošinātu piekļuvi satura partnera sniegtiem pakalpojumiem.\n\nJūsu personas datu attiecīgās apstrādes tiesiskais pamats ir līguma mērķi atbilstoši VDAR 6. panta 1. punkta b) apakšpunktam.\n\n•	Attālināta diagnostika: Pakalpojumu ietvaros mēs sniedzam jums attālinātas diagnostikas pakalpojumus. Tāpēc mēs apstrādājam ierīces ID, ierīces numuru, sērijas numuru, MAC adresi un kļūdu žurnālus, kļūdu kodus un kļūdu aprakstus, kurus sniedz kļūdainais modulis (lietotne, starpprogrammatūru sistēma).\n\nJūsu personas datu attiecīgās apstrādes tiesiskais pamats ir līguma mērķi atbilstoši VDAR 6. panta 1. punkta b) apakšpunktam.\n\n•	Pēcpārdošanas pakalpojumi: Saskaņā ar piemērojamiem tiesību aktiem jums var būt tiesības uz garantiju vai tamlīdzīgas tiesības saņemt pēcpārdošanas pakalpojumus. TCL Europe, 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, Francija, ir atbildīgs par garantijas pieteikumu un citu pēcpārdošanas pakalpojumu pieprasījumu apstrādi, kā arī ar tiem saistīto jūsu personas datu apstrādi. T.i., pēcpārdošanas pakalpojumu sniegšanas mērķiem TCL Europe darbojas kā datu pārzinis un mēs neesam atbildīgi par jūsu personas datu attiecīgo apstrādi.\n\nKad jūs iesniedzat pieteikumu mūsu pēcpārdošanas pakalpojumu saņemšanai, jūsu vārds un uzvārds, e-pasta adrese, tālruņa numurs, pakalpojuma pieteikums un pasta adrese, kas ir norādīti rēķinā, var būt nepieciešami pēcpārdošanas pakalpojumu nodrošināšanai. Informācija var tikt apkopota arī ar mūsu tālākpārdevēju pēcpārdošanas partneru vai pilnvaroto pakalpojumu sniedzēju starpniecību, ja jūs vēršaties pie viņiem, lai saņemtu pakalpojumu. Jūs varat sazināties ar TCL Europe, izmantojot 12. sadaļā norādīto kontaktinformāciju, lai iegūtu sīkāku informāciju par personas datu aizsardzību, kas saistīta ar pēcpārdošanas pakalpojumiem.\n\nAttiecīgās apstrādes tiesiskais pamats ir pienākums izpildīt juridiskus pienākumus saskaņā ar VDAR 6. panta 1. punkta c) apakšpunktu.\n\n•	T-Launcher: T-Launcher ir galvenā lapa Smart TV izmantošanai ar Linux operētājsistēmu (lūdzam skatīt zemāk informāciju par Android operētājsistēmas lietošanu) un ļauj jums izvēlēties noteiktu saturu.\n\nJūsu personas datu apstrādes, kas tiek veikta, ja jūs izmantojat T-Launcher, tiesiskais pamats ir līguma mērķi atbilstoši VDAR 6. panta 1. punkta b) apakšpunktam.\n\nAr jūsu iepriekšēju piekrišanu mēs arī uzraugām T-Launcher lietošanu, t.i.:\n	Kad jūs uzsākat lietot T-Launcher, mēs reģistrējam pieteikšanās un atteikšanās laiku T-Launcher.\n	Kad jūs sākat atskaņot kādu video T-Launcher, mēs reģistrējam videoieraksta nosaukumu un garumu (neattiecas uz Netflix, YouTube vai jebkuru citu trešās personas nodrošinātu pakalpojumu).\n	Kad jūs piekļūstat kādai lapai vai dodaties prom no tās, mēs reģistrējam jūsu uzturēšanas ilgumu attiecīgajā lapā.\n	Kad jūs pārvietojat kursoru no vienas vietas uz citu vai piekļūstat lietotnei, mēs minēto notikumu reģistrējam.\n	Kad jūs instalējat, dzēšat vai atjaunināt lietotnes, mēs reģistrējam šos notikumus, tostarp mēs reģistrējam arī lietotņu nosaukumus.\n\nMēs apkopojam minēto informāciju galvenokārt plašai datu analīzei ar mērķi uzlabot produktus un sniegt labākus satura pakalpojumus lietotājiem.\n\nJūsu personas datu apstrādes tiesiskais pamats saistībā ar T-Launcher lietošanas novērošanu ir jūsu sniegtā piekrišana saskaņā VDAR 6. panta 1. punkta a) apakšpunktu.\n\nJa jūs esat iegādājies Android TV un izmantojat Google Android operētājsistēmu, jūsu personas datu apstrādi veic Google un mēs neesam atbildīgi par tādu datu apstrādi. Lūdzam iepazīties ar Google paziņojumu par privātumu, lai iegūtu informāciju par šādu jūsu datu apstrādi un ar to saistītajām jūsu tiesībām.\n\n•	T-Cast: T-Cast sniedz jums iespēju vadīt televizoru ar tālruņa palīdzību un kopīgot jūsu viedtālrunī saglabātos video, mūziku un attēlus ar televizoru. T-Cast sniedz jums arī iespēju spoguļot savu viedtālruni televizorā.\n\nJūs varat lejupielādēt un izmantot minēto lietotni pēc savas izvēles. Ja jūs lejupielādējat un izmantojat šo lietotni, mēs apstrādājam MAC adresi, lai aprēķinātu, cik daudzas T–Cast versijas tiek izmantotas tirgū. Tas ir nepieciešams, lai mēs varētu sniegtu jums šo pakalpojumu. Ja jūs izmantojat mūsu otra ekrāna funkciju, mēs apkopojam un apstrādājam savos serveros šajā lietotnē jūsu aktivētās vadīklas un valsts un valodas iestatījumus, DTV kanālu sarakstu, kanālu izlašu sarakstus, programmu sarakstus, ierīces ID, pašreizējo kanālu, protokola versiju un jūsu Smart TV IP adresi. Mūsu serveri šādā gadījumā vada jūsu Smart TV atbilstoši iestatījumiem, kurus esat izvēlējies lietotnē.\n\nJūsu personas datu attiecīgās apstrādes tiesiskais pamats ir līguma mērķi atbilstoši VDAR 6. panta 1. punkta b) apakšpunktam.\n\n•	Programmatūras atjauninājumi: Programmatūras atjauninājumi ietilpst Pakalpojumos. Tāpēc ikreiz, kad ieslēdzat Smart TV, tas nosūta mums IP adresi, ierīces ID, ierīces numuru, programmatūras versiju, jūsu Smart TV klienta veidu, projekta ID (t.i., konfigurācijas failus), lietotāja ID un sērijas numuru, lai mēs varētu pārbaudīt, vai ir pieejami programmatūras atjauninājumi, un piedāvāt un nodrošināt jums atbilstošus programmatūras atjauninājumus.\n\nJūsu personas datu attiecīgās apstrādes tiesiskais pamats ir līguma mērķi atbilstoši VDAR 6. panta 1. punkta b) apakšpunktam.\n\n•	Likumu piemērošana: Mums var būt nepieciešams sniegt datus kompetentām tiesībaizsardzības iestādēm vai tiesām. Ja to darām, tad tikai pamatojoties uz saistošu juridisku instrumentu, piemēram, rīkojumu vai tiesas orderi, kas pieprasa mums sadarboties ar attiecīgajām iestādēm.\n\nApstrādes tiesiskais pamats šajā gadījumā ir mūsu pienākums izpildīt juridiskus pienākumus saskaņā ar VDAR 6. panta 1. punkta c) apakšpunktu.\n\nPakalpojumu lietošana ir iespējama, izmantojot pseidonīmus, ja vien noteikti pakalpojumi nepieprasa norādīt jūsu vārdu un/vai e-pasta adresi.\n\n5.	16 gadu vecumu nesasniegušu bērnu privātums un drošība\n\nMēs saprotam, cik svarīgi ir ievērot papildu piesardzību, lai aizsargātu bērnu, kuri izmanto mūsu Pakalpojumus, privātumu un gādātu par viņu drošību. 16 gadu vecumu vai atbilstošu minimālo vecumu attiecīgajā jurisdikcijā nesasniegušiem bērniem nav atļauts iesniegt savu personisko informāciju ar televizora starpniecību vai veicot tālruņa zvanu sakarā ar pēcpārdošanas pakalpojumiem, ja vien bērna vecāks nav sniedzis pārbaudāmu piekrišanu.\n\nTā kā mēs neapkopojam lietotāju dzimšanas datumus, mēs nevaram noteikt lietotāju vecumu. Taču, ja mēs uzzinām, ka esam apkopojuši 16 gadu vecumu vai atbilstošu minimālo vecumu attiecīgajā jurisdikcijā nesasnieguša bērna personas datus, neraugoties uz minētajiem apstākļiem, mēs veicam pasākumus informācijas dzēšanai pēc iespējas īsākā laikā.\n\n6.	Trešo pušu lietotnes\n\nJūsu Smart TV sniedz iespēju izmantot tādu trešo pušu kā Netflix, YouTube vai HbbTV (televīzijas raidorganizāciju nodrošināts sarkanās pogas pakalpojums) nodrošinātas lietotnes. Jūs varat lejupielādēt lietotnes lietotņu veikalā vai aktivizēt trešo pušu lietotnes, kas jau ir instalētas jūsu ierīcē. Jūsu ierīcē instalētās trešo pušu lietotnes neapkopo personas datus bez jūsu iepriekšējas atļaujas. Piemēram, Netflix jau ir instalēts ierīcē, bet apkopo datus tikai tad, kad jūs piesakāties savā Netflix kontā. HbbTV apkopo datus tikai pēc jūsu piekrišanas datu apkopošanai, kad nospiežat attiecīgo taustiņu uz savas tālvadības pults.\n\nJa jūs iespējojat trešās puses lietotni, jūsu personas datu apstrādi var veikt lietotnes nodrošinātājs. Mēs neesam atbildīgi par šādu datu apstrādi. Lūdzam iepazīties ar trešās puses paziņojumu par privātumu, lai iegūtu informāciju par šādu jūsu datu apstrādi un ar to saistītajām savām tiesībām.\n\n7.	Saņēmēju kategorijas\n\nMēs nododam Pakalpojumu izmantošanas gaitā iegūtos jūsu personas datus trešo pušu satura partneriem tikai tādā gadījumā, ja jūs pieprasāt šādu satura partneru nodrošinātu saturu, vai pakalpojumu sniedzējiem, kuri ir datu apstrādātāji un palīdz mums nodrošināt Pakalpojumus.\n\nMēs nododam jūsu personas datus citām trešajām pusēm tikai gadījumos, kad to darīt ir mūsu pienākums saskaņā ar likumdošanu (piemēram, tiesām vai tiesībaizsardzības iestādēm), ja jūs esat piekritis attiecīgai datu nodošanai vai šāda datu atklāšana atbilst citām piemērojamo tiesību aktu normām.\n\n8.	Valstis, kurās jūsu dati tiks apstrādāti\n\nMēs un/vai daži citi iepriekš nosauktie jūsu personas datu saņēmēji var atrasties ārpus Eiropas Ekonomikas zonas (piemēram, Ķīnas Tautas Republikā vai Amerikas Savienotajās Valstīs). Tāpēc jūsu personas datu apstrāde var notikt valstīs, kuru datu aizsardzības tiesību aktu sniegtais datu aizsardzības līmenis atšķiras no jūsu jurisdikcijas tiesību aktos noteiktā, kā arī minēto valstu datu aizsardzības tiesību aktos noteiktais personas datu aizsardzības līmenis netiek atzīts par atbilstošu VDAR prasībām. No Eiropas datu aizsardzības tiesību aktu skatpunkta atbilstošu datu aizsardzības līmeni nodrošina šādas valstis: Andora, Argentīna, Kanāda, Šveice, Fēru salas, Gērnsija, Izraēla, Menas sala, Džērsija, Jaunzēlande un Urugvajas Austrumu Republika. Daļa saņēmēju ASV var būt saņēmuši ES un ASV privātuma vairoga sertifikātus un tādējādi nodrošina atbilstošu datu aizsardzības līmeni no Eiropas datu aizsardzības tiesību aktu skatpunkta. \n\nNepieciešamības gadījumā mēs īstenosim aizsargpasākumus attiecībā uz datu nodošanu saņēmējiem ārpus Eiropas Savienības, kuri nenodrošina pienācīgu datu aizsardzības līmeni. Informācijas kopiju par attiecīgo pasākumu var pieprasīt, sazinoties ar mums, izmantojot 12. sadaļā norādīto kontaktinformāciju.\n\n9.	Glabāšanas termiņš\n\nJūsu personas dati tiks uzglabāti tik ilgi, cik tas būs nepieciešams, lai sniegtu jums Pakalpojumus. Tas nozīmē, ka lielāko daļu jūsu datu mēs glabājam vienu mēnesi. Attālinātās diagnostikas un pēcpārdošanas pakalpojumu vajadzībām mēs varam uzglabāt jūsu datus līdz 10 gadiem. Kad jūsu personas dati mums vairs nav vajadzīgi līguma vai likumā noteikto pienākumu izpildei, mēs tos izdzēšam no savām sistēmām un reģistriem un/vai padarām tos anonīmus, lai pēc tiem nebūtu iespējams jūs identificēt.\n\n10.	Jūsu tiesības\n\nSaskaņā ar piemērojamiem datu aizsardzības tiesību aktiem jums var būt šādas tiesības: pieprasīt piekļuvi saviem personas datiem, pieprasīt labot savus personas datus; pieprasīt dzēst savus personas datus, pieprasīt ierobežot savu personas datu apstrādi; pieprasīt datu pārnesamību un iebilst pret savu personas datu apstrādi. Lūdzam ņemt vērā, ka iepriekš minētās tiesības var ierobežot valstī piemērojamie datu aizsardzības tiesību akti. Papildu informāciju par minētajām tiesībām jūs varat iegūt pielikumā Jūsu tiesības.\n\nJums ir arī tiesības iesniegt sūdzību kompetentai datu aizsardzības uzraudzības iestādei.\n\nLūdzam sazināties ar mums, izmantojot 12. sadaļā norādīto kontaktinformāciju, ja vēlaties izmantot savas tiesības.\n\n11.	Grozījumi Paziņojumā par privātumu\n\nSavu Pakalpojumu uzlabošanai mums var rasties vajadzība veikt grozījumus šajā Paziņojumā par privātumu, piemēram, ieviešot jaunas tehnoloģijas vai jaunus pakalpojumus. Mums ir tiesības jebkurā laikā veikt grozījumus vai papildināt šo Paziņojumu par privātumu.\n\n12.	Kontaktinformācija un pārstāvis Eiropas Savienībā\n\nJa jums ir jebkādi jautājumi par Paziņojumu par privātumu vai arī jūs vēlaties iesniegt sūdzību par mūsu uzņēmuma veikto jūsu personas datu apstrādi, lūdzam sazināties ar mums, izmantojot šādu kontaktinformāciju:\n\nSaziņas veidlapa: www.tcl.eu/privacy/support\n\nMūsu pārstāvis Eiropas Savienībā: TCL Europe ar biroju 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, Francija. Jūs varat sazināties ar TCL Europe, izmantojot iepriekš sniegto saziņas veidlapu.\n\nVersija: 2.0\n\nPielikums Jūsu tiesības\n\na.	Piekļuves tiesības: Jums var būt tiesības saņemt mūsu apstiprinājumu par to, vai jūsu personas dati tiek vai netiek apstrādāti un, ja tā ir, pieprasīt piekļuvi personas datiem. Piekļuves informācija cita starpā ietver datu apstrādes mērķus, attiecīgās personas datu kategorijas un saņēmēju kategorijas, kuriem personas dati ir tikuši vai tiks nodoti. Tomēr šīs tiesības nav absolūtas, un citu personu intereses var ierobežot jūsu piekļuves tiesības.\n\nJums var būt tiesības saņemt apstrādājamo personas datu kopiju. Par nākamajām jūsu pieprasītām kopijām mēs varam iekasēt saprātīgu samaksu, pamatojoties uz administratīvajiem izdevumiem. \n\nb.	Tiesības veikt labojumus: Jums var būt tiesības rosināt labojumu veikšanu ar jums saistītos personas datos, ja tie nav precīzi. Atkarībā no apstrādes mērķiem jums var būt tiesības papildināt nepilnīgus personas datus, tostarp iesniedzot papildu paziņojumu.\n\nc.	Tiesības uz dzēšanu („tiesības tikt aizmirstam”): Zināmos apstākļos jums var būt tiesības pieprasīt ar jums saistītu personas datu dzēšanu, un mums var būt pienākums dzēst šādus personas datus. \n\nd.	Tiesības ierobežot apstrādi: Zināmos apstākļos jums var būt tiesības pieprasīt ar jums saistītu personas datu apstrādes ierobežošanu. Šajā gadījumā attiecīgie personas dati tiks marķēti, un mēs drīkstēsim veikt to apstrādi tikai noteiktiem mērķiem.\n\ne.	Tiesības uz datu pārnesamību: Zināmos apstākļos jums var būt tiesības saņemt ar jums saistītus personas datus, kurus jūs mums esat sniedzis, strukturētā, plaši izmantotā un mašīnlasāmā formātā, un jums var būt tiesības nodot minētos datus jebkurai citai personai bez jebkādiem šķēršļiem no mūsu puses.\n\nf.	Tiesības iebilst:\n\nZināmos apstākļos jums var būt tiesības jebkurā brīdī iebilst, pamatojoties uz jūsu konkrēto situāciju, vai arī tad, ja personas datu apstrāde tiek veikta tiešā mārketinga mērķiem, pret savu datu apstrādi, ko mēs veicam, un mums būs jāatsakās no jūsu personas datu turpmākas apstrādes.\n\nTurklāt, ja jūsu personas dati tiek apstrādāti tiešā mārketinga vajadzībām, jums ir tiesības jebkurā brīdī iebilst pret ar jums saistītu personas datu apstrādi šādām mārketinga vajadzībām, tostarp profila veidošanai, ciktāl tas ir saistīts ar šādu tiešo mārketingu. Šajā gadījumā mēs pārtrauksim jūsu personas datu apstrādi minētajiem mērķiem."];
var cookieNotice = ["\nMēs respektējam jūsu privātumu mūsu ražotā Smart TV lietošanas procesā un mūsu Pakalpojumu sniegšanas gaitā. Sīkfailus izmanto daudzas tīmekļa vietnes un citi interneta pakalpojumi, un jūsu Smart TV pieņems, glabās un pārsūtīs sīkfailus, lai nodrošinātu, ka šīs tīmekļa vietnes un pakalpojumi darbojas pareizi. \n\nMēs neizmantojam sīkfailus, kad sniedzam jums Pakalpojumus. Tomēr trešās puses (piemēram, trešās puses lietotņu nodrošinātāji) var izmantot sīkfailus, kad jūs ar Smart TV palīdzību piekļūstat to pakalpojumiem. Šis Paziņojums par sīkfailiem ietver ierobežotu informāciju par sīkfailiem, kurus var izvietot trešās puses. Informāciju par konkrētiem trešo pušu izmantotiem sīkfailiem un to funkcijām jūs varat atrast attiecīgos trešo pušu paziņojumos par sīkfailiem. Tomēr šajā Paziņojumā par sīkfailiem mēs sniedzam vispārīgu aprakstu par to, kādi sīkfaili var tikt nosūtīti uz jūsu Smart TV un kā jūs tos varat pārvaldīt.\n\n1.	Kas ir sīkfails?\n\nSīkfaili ir nelieli teksta faili, kas var tikt izvietoti jūsu Smart TV. Piekļūstot TV stacijas tīmekļa vietnei vai sarkanās pogas pakalpojumam, tīmekļa vietne vai pakalpojums var saglabāt sīkfailu jūsu Smart TV. Turpmāko piekļūšanu laikā sīkfails, kas izvietots jūsu Smart TV, nosūtīs informāciju pusei, kas izvietojusi sīkfailu. Sīkfaili ir ļoti izplatīti, tos izmanto daudzas tīmekļa vietnes un daudzi pakalpojumi. Katrs sīkfails parasti ietver domēna nosaukumu, no kura sīkfails ir nācis, sīkfaila „dzīves laiku” un vērtību (parasti unikāls skaitlis). Lai iegūtu pilnīgāku paskaidrojumu par to, kas ir sīkfaili un kā tie darbojas, lūdzu, apmeklējiet www.allaboutcookies.org.\n\nSīkfailus var iedalīt funkcionālo un nefunkcionālo sīkfailu kategorijās. Funkcionālie sīkfaili ir sīkfaili, kas nepieciešami tikai pakalpojumu sniegšanas mērķim. Nefunkcionālie sīkfaili ir visi pārējie sīkfaili.\n\n2.	Trešo pušu tīmekļa vietnes\n\nKad jūs apmeklējat trešo pušu tīmekļa vietnes vai pakalpojumus ar Smart TV Pakalpojumu starpniecību, minētās tīmekļa vietnes vai pakalpojumu sniedzēji var izvietot sīkfailus jūsu Smart TV un šīs tīmekļa vietnes var izsekot un uzglabāt jūsu veiktās darbības šajās tīmekļa vietnēs. Mēs nepieprasām un neveicinām šādas aktivitātes un neizmantosim šādu informāciju. Lūdzam iepazīties ar šādu tīmekļa vietņu un pakalpojumu paziņojumiem par sīkfailiem un privātumu, lai iegūtu vairāk informācijas par to, kā minētās puses izmanto sīkfailus.\n\n3.	Sīkfailu dzēšana\n\nJūsu Smart TV lietotāja saskarne ļauj izdzēst visus sīkfailus un cita veida lokālo pārlūka atmiņu no Smart TV. Ļoti iesakām izdzēst visus sīkfailus un lokāli saglabātos iestatījumus, pirms pārdodat savu Smart TV vai nododat kādam citam.\n\nVersija: 2.0"];
var privacyPolicy = ["Lūdzam atzīmēt zemāk redzamos lodziņus, ja jūs vēlaties izmantot mūsu Smart TV pakalpojumus un ar tiem saistītus pakalpojumus. Lai jūs varētu izmantot šos pakalpojumus, ir jāveic jūsu personas datu apstrāde atbilstoši aprakstam, kas sniegts mūsu Paziņojumā par privātumu: http://www.tcl.eu/en/","Iespējot Smart TV pakalpojumu, pakalpojuma iestatījumu saglabāšanu un Smart TV automātisku autentificēšanu. Ja jūs noņemsiet šīs atzīmes, jums būs pieejama tikai standarta televīzija un HDMI.","Iespējot automātiskus programmatūras atjauninājumus. Atzīmējiet šo lodziņu, lai jūsu produkts tiktu regulāri atjaunināts, jūs saņemtu programmatūras atjauninājumus un ierīce darbotos nevainojami.","(Programmatūras atjauninājumi ir svarīgi jūsu televizora pareizai darbībai, jo tie nodrošina jaunas iespējas, stabilitāti un drošību. Tāpēc mēs iesakām atzīmēt šo lodziņu.)","Lūdzam atzīmēt zemāk esošo lodziņu, ja piekrītat savu personas datu apstrādei arī tālāk norādītajam mērķim. Papildu informāciju par to, kā mēs veicam jūsu personas datu apstrādi, jūs varat iegūt mūsu Paziņojumā par privātumu: http://www.tcl.eu/en/","Es piekrītu savu personas datu (piemēram, pieteikšanās un atteikšanās laiks T-Launcher) apstrādei TCL produktu uzlabošanas mērķiem un labāku satura pakalpojumu sniegšanai ar Smart TV."];
var termsFirTitle = ["Noteikumi","Paziņojums par privātumu","Paziņojums par sīkfailiem"];
var termsSecTitle = ["Lūdzu, izlasiet noteikumus un piekrītiet.","Lūdzu, izlasiet paziņojumu par privātumu un piekrītiet tam.","Lūdzu, izlasiet paziņojumu par sīkfailiem un piekrītiet tam."];
var tickall = "Atzīmēt visu";
var tickremindWords = "Lūdzu, atzīmējiet izvēles rūtiņas, citādi nevarēsiet izmantot Smart TV pakalpojumu.";