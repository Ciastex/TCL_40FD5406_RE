
var all_country 	= ["Australija","Austrija","Belgija","Bulgarija","Kroatija","Čekija","Danija","Suomija","Prancūzija","Vokietija",
						"Graikija","Vengrija","Italija","Liuksemburgas","Nyderlandai","Norvegija","Lenkija","Portugalija","Rumunija","Rusija",
						"Serbija","Slovėnija","Ispanija","Švedija","Šveicarija","Jungtinė Karalystė","Naujoji Zelandija"," "/*Arab*/,"Estija"," "/*Hebrew*/,
						"Latvija","Slovakija","Turkija","Airija","Japan","Filipinai","Thailand","Maldives","Uruguay","Peru",
    					"Argentina","Chile","Venezuela","Ecuador","Costa Rica","Paraguay","Bolivia","Belize","Nicaragua","Guatemala",
						"Kinija","Taiwan","Brazil","Canada","Mexico","United States","South Korea","Rumunija","Vietnam"/*新添加的，底层结构体中没有*/,"Ukraina"/*新添加的，底层结构体中没有*/,
    					"Iran","Iraq"," ","Kazakhstan","Uzbekistan"," ","Kyrgyzstan","Algeria","Egypt","Tunisia",
    					"Tanzania","Kenya","Pakistan","Indonesia","Kuwait","Saudi Arabia","Qatar","Israel","Lebanon","bahrain",
    					"Angola","Congo","India","Turkmenistan","Colombia","Mongolia","Bangladesh","Nepal","Sri Lanka","North Korea",
						"Moldova","Polynesia","EI Salvador"," ","Fiji","Liberia","Jordan","Myanmar","Ghana","Georgia",
    					"Armenia","Oman","yemen","Syria","Palestine","Afghanistan","Morocco","benin","IvoryCoast","Nigeria",
    					"Sudan","Ethiopia","Zambia"," ","South Africa","mozambique","Libya","Albanija","Belarus","Iceland",
						"Lietuva","Mauritius","Dubai","UAE","Tajikistan","Bengal","Bosnija ir Hercegovina","Kipras","Kosovas","Makedonija",
						"Malta","Juodkalnija","Cameroun","Singapore","Malaysia","NewCaledonia","Suriname","Jamaica","Curacao","Aruba",
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
				
var all_language 	= ["Čekų","*","Danų","*","*","Vokiečių","Anglų","Ispanų","Graikų","Prancūzų",
						"Kroatų","*","Italų","Vengrų","Olandų","Norvegų","Lenkų","Portugalų","Rusų","Rumunų",
						"Slovėnų","Serbų","Suomių","Švedų","Bulgarų","Slovakų","Chinese","*","Gėlų","*",
						"Valų","Arabų","Airių","Latvių","*","Turkų","Estų","Olandų"/*Netherlands*/,"Korėjiečių","*",
						"Hindi","*","*","Mandarin","Cantonese","Maori","V.O."/*Qaa*/,"Neapibrėžta"/*Undetermined*/,"*","Nežinoma",
						"Neapibrėžta","*","*","*","*","*","*","*","*","*",
						"*","*","*","Albanų","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baskų","*","*",
						"*","*","*","*","*","*","*","Bosnių","*","*",
						"*","*","*","*","Baltarusių","*","*","Katalonų","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galisų","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Islandų","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Japanese","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Lietuvių",
						"*","*","*","*","*","*","*","Makedonų","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romantika","*","*","*","*",
						"*","*","*","Samių","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Teletekstas",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukrainiečių","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Išj.","Įj."];
var okCancel		= ["Gerai","Atšaukti"];
var yesNo			= ["TAIP","NE"];
var level			= ["Išj.","Žemas","Aukštas","Vidutinis"];
var manualAuto		= ["Rankinis","Auto"];
var homeShop		= ["Pagrindinis","Pirkti"];
var picPreset		= ["Standartas","Dinaminis","Natūralu","Filmas","Asmeninė"];
var picColorTemp	= ["Vėsi","Normalus","Šilta","Naudotojo"];
var pic3dNavig		= ["Rankinis","Auto","Pusiau automat."];
var _3dOptions		= ["3D režimas","3D į 2D","K-D jungiklis","Lauko gylis"];
var pic3DMode       = ["Išj.","2D į 3D","Vienas šalia kito","Viršus ir apačia","Linijos įdėliojimas"];
var picEcoOptions	= ["energijos taupymas","Šviesos jutiklis","Vietinis tamsinimas","Skirtingas apšvietimas"];
var picGeoOptions	= ["Geometrija","H. padėtis","V. padėtis","Laikrodis","Žingsnis"];//Geometry 无翻译
var picAdWhiteBal	= ["R stiprinimas","Ž stiprinimas","M stiprinimas","R nuokrypis","Ž nuokrypis","M nuokrypis"];
var souOptions		= ["Garso išankstinė nuostata","Balansas","Garso delsa","SRS TSHD","Automatinis garso stiprumo valdymas",
						"SPDIF tipas","SPDIF delsa","TV vieta","Garso kalba","Garso tipas",
						"Garsinis apibūdinimas","Žemų dažnių sustiprinimas","Dolby Digital Plus"];
var souSpdifType	= ["Auto"/*Dolby*/,"PCM","Išj."];
var colorSpace      = ["Auto","Savasis","Naudotojo"];
var souPresetPara	= ["100Hz","500Hz","1.5KHz","5KHz","10KHz"];
var chOptions		= ["Kanalų skenavimas","Kanalų sąrašas","EPG","Kanalų tvarkytuvas","Kanalo diagnostika",
						"laiko postūmis","Subtitrai","Teletekstas","Kanalų sąrašo tipas"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Signalo stiprumas","Signalų kokybė","Dažnis (KHz)","Serviso ID","Tinklo ID","Tinklo pavadinimas"];
var chScanOptions	= ["Šalis / regionas","Tiunerio režimas","Automatinė paieška","Automatinis atnaujinimas","Rankinis analoginis skenavimas",
						["Rankinis kabel. sken.","Rankinis antenos sken.","Palydovo rankinis nustatymas"],"Palydovinės antenos statymas","Mėgiamo tiklo pasirinkimas","Išvalyti kanalų sąrašą","LCN"];
var favNetDes		= "Pasirinkite mėgstamiausią tinklą";
var tuner			= ["Kabelinė TV","Antena","Palydovas"];//Satelite 无翻译
var passError		= "Slaptažodis neteisingas.\nPrašome įvesti dar kartą!";
var chType			= ["Analoginių kanalų: ","Skaitmeninių kanalų: "];
var chScanStatus	= ["Būklė: Skenuojama","Būklė: skenavimas baigtas","Būklė: skenavimas atšaukiamas","Būklė: skenavimo klaida"];
var chScanPara		= ["Dažnis (KHz)","Moduliacija","Simbolių dažnis (Ksym/s)","Tinklo ID","Sistema",
						"Tiksliai derinti","Signalo stiprumas","Signalų kokybė","Skenavimo rež.","Kanalo ID"];
var chScanParaMHZ      = ["Dažnis (MHz)"];
var chAtvManSys		= ["VAKARŲ EUR.","RYTŲ EUR.","JK","Prancūzija"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Auto"];
var chCleanDes		= "Ar norite išvalyti kanalų sąrašą?";
var chDeletDes		= "Ar norite pašalinti kanalą?";
var chOperator		= ["„Ziggo“","UPC","Kita"];
var chScanType		= ["Skaitmeninis & Analoginiai","Skaitmeninis","Analoginis"];
var chScanMode		= ["Pilnas","Išsamiai","Greitai"];
var bookingModes	= ["Įrašyti","Priminimas"];
var dayName			= ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var monthName		= ["Sau", "Vas","Kov","Bal","Geg","Bir","Lie","Rgp","Rgs","Spa","Lap","Gru"];
var filter			= ["Filtras","Tipas","Potipis"];
var chEpgFirstGenre	= ["Filmas","Naujienos","Laida","Sportas","Vaikams","Muzika","Menai","Socialiniai","Švietimas","laisvalaikis","SPECIAAL"];
var chEpgSecondGenre= [["Drama","Detektyvas","Nuotykiai","Mokslinė fantastika","Komedija","Muilo opera","Romantika","Rimta","Filmas suaugusiems"," "," "," "],
						["Aktualijos","Orų prognozė","Naujienų žurnalas","Dokumentika","Diskusija"," "," "," "," "," "," "," "],
						["Laida","TV žaidimas","Estradinis koncertas","Pokalbių laida"," "," "," "," "," "," "," "," "],
						["Sportas","Specialūs įvykiai","Sporto žurnalai","Futbolas","Tenisas",
							"Komandinis sportas","Atletika","Auto ir moto sportas","Vandens sportas","Žiemos sportas",
							"Žirgų sportas","Kovos menai"],
						["Vaikams","Ikimokyklinio amžiaus","Pramogos 6–14 m. vaikams","Pramogos 10–16 m. vaikams","Informacija","Animaciniai filmai"," "," "," "," "," "," "," "],
						["Muzika","Rokas","Rimta","Folkloras","Džiazas","Miuziklas","Baletas"," "," "," "," "," "],
						["Menai","Scenos menai","Vaizduojamieji menai","Religija","Populiarioji kultūra",
							"Literatūra","Filmas","Eksperimentinė","Transliavimas","Naujoji medija",
							"Meno žurnalai","Mada"],
						["Socialiniai","Žurnalai","Ekonomika","Įžymūs žmonės"," "," "," "," "," "," "," "," "],
						["Švietimas","Gamta","Technologija","Medicina","Užsienio valstybės","Socialiniai mokslai","Tolimesnis švietimas","Kalbos"," "," "," "," "],
						["Laisvalaikio hobiai","Turizmas","Amatai","Automobilizmas","Kūno rengyba ir sveikata","Maisto gaminimas","Reklama","Sodininkystė"," "," "," "," "],
						["Originalo kalba","Juoda ir balta","Neskelbta","Tiesioginė transliacija"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Kanalo praleidimas","Kanalų rūšiavimas","Kanalų redagavimas","Kanalo trynimas","kanalas apsikeitimo","kanalas įterpti"];
var chEditPara 		= ["Tinklo pavadinimas","Kanalo numeris","Kanalo pavadinimas","Dažnis","Spalvų sistema","Garso sistema"];
var chSatTitles		= ["Palydovo tipas","Palydovinės antenos statymas","Pasirinkti palydovą"];
var chSatEidtOptions= ["Palydovo pavadinimas","Padėtis","LNB Galia","LNB dažnis (MHz)","Diseqc įvestis",
						"22 KHz toninis ","tonas sprogo","Dažnis (KHz)","Simbolių dažnis (Ksym/s)","Poliarizacija",
						"Signalo stiprumas","Signalų kokybė","Palydovo būsena"];
var chSatAutoPromt	= [["Viskas","Tinklas"],
						["Viskas","Laisvas"]];
var chSatAutoScanOptions=["Pasirinkti palydovą","Skenavimo rež.","Кanalų"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Universalus",];
var chSatDiSEqCInput= ["Išjungti","A","B","C","D"];
var chSatTone22KHz	= ["Auto","Įj.","Išj."];
var chSatToneBurst	= ["Išjungti","tonas sprogo A","tonas sprogo B"];
var chSatPolarization= ["Horizontaliai","Vertikaliai"];
var chSatSetupOptions=["Antenos tipas","Imtuvas","Dažnių juosta"];
var chSatAntennaType= ["„SingleCable“","Universalus"];
var chSatUserBands	= ["1 vartotojo juosta","2 vartotojo juosta","3 vartotojo juosta","4 vartotojo juosta","5 vartotojo juosta","6 vartotojo juosta","7 vartotojo juosta","8 vartotojo juosta"];
var chSatOthers		= ["Atsakiklis"];
var chSatSetupOthers= ["Naudotojas atpažintas"];
var pleaseSelectSat = "Pirmiausia pasirinkite palydovus!";
var subOptions		= ["Subtitrai","Skaitmeninių subtitrų kalba","Antroji skaitmeninių subtitrų kalba","Subtitrų tipas"];
var ttxOptionsCon      = ["Puslapių kalbos dekodavimas","Skaitmeninio teleteksto kalba"];
var subType			= ["Normalus","Turintiems klausos negalią"];
var netIntf     	= ["Eternetas","Belaidis "];
var netConnDes		= ["TV bando tinklo ryšį.\nPalaukite.",
						"Prisijungimo prie tinklo testas pavyko!",
						"Prisijungimo prie tinklo testas nepavyko."];
var netSsidError	= "SSID galimas ilgis yra 1~32 simbolių. Patikrinkite SSID.";
var netOthers		= ["PIN kodas "];
var netWlessAutoDes	= ["Prieš spustelėdami „Gerai“, patikrinkite, ar šis PIN kodas įdiegtas prieigos taške.",
						"Prieš spustelėdami „Gerai“, per 120 sekundžių paspauskite prieigos taško mygtuką."];
var netConnRemind	= ["Slaptažodis neteisingas!",
						"Jungiama. Palaukite!",
						"Sujungti pavyko ir IP priskirtas!",
						"Sujungti nepavyko",
						"TV skenuoja Ap\nPalaukite",
						"Prie TV neprijungtas belaidis prietaisas!"];
var netWireIpOptions= ["IP nustatymas","Adreso tipas","IP adresas","Potinklio kaukė","Num. tinklų siet.","Pagrindinė DNS","Papildoma DNS"];
var netWireConnRemind= ["Įveskite vertę tarp 0 ir 255.",
						"Sėkmingai pajungta!",
						"Įveskite teisingą adresą",
						"Sėkmingai pajungta!",
						"Nepavyko prisijungti!",
						"Jungiama. Palaukite!",
						"Įveskite reikšmę nuo 1 iki 223."];
var netFlixOptions	= ["Pasyvinti","ESN","Netflix“ versija"];
var netFlixDes	 	= ["Ar tikrai norite pasyvinti?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Prog. įrang. atnauj.";
var netUpdateDialogTitle = "Programinė įranga atnaujinama";
var netBGDownloadTitle 	= "Atsisiunčiama";
var netUpdateLoadingPrompt= ["Ieškoma pagerinimo, palaukite.",
							"Programinė įranga atsiunčiama... Palaukite.",
							"Prašome NEIŠJUNGTI TV, kol atnaujinama programinė įranga!",
                            "Privalomas programinės įrangos naujinys automatiškai atsiųstas."];
var netUpdatePrompt= ["Sveikiname, turite naujausią programinės įrangos versiją!",
						"Rasta nauja programinės įrangos versija XXXXX. Ar norite atsisiųsti dabar? Tai gali šiek tiek užtrukti, priklausomai nuo jūsų tinklo būsenos.",
						"Nepavyko prisijungti!",
						"Nepavyko gauti duomenų, bandykite dar kartą vėliau.",
						"Atnaujinimo analizė XML nepavyko!",
						"Sujungti nepavyko",
						" Programinė įranga parsiųsta sėkmingai. Ar norite pradėti įrašymą į FLASH atmintį?",
						"Duomenys prarasti! Nepavyko atsiusti!",
						"Nepavyko patikrinti paketo, bandykite dar kartą!",
						"Tinklas neveikia. Patikrinkite ir pajunkite iš naujo...",
						"Nepavyko atnaujinti. Iš naujo paleiskite TV!",
						"Naujovinimo failas buvo netikėtai pašalintas. Atlikite naujovinimą per tinklą dar kartą.",
						"Programą atsisiųsti į foną pavyko.  Ar norite atlikti naujovinimą?"];
var netUpdateButtonText = ["Atsisiųsti", "Naujinti", "Vėliau", "Niekada", "Gerai","Tęsti"];
var autoDetectPrompt = ["Rasta nauja programinės įrangos versija XXXXX. Ar norite atsisiųsti dabar? Tai gali šiek tiek užtrukti, priklausomai nuo jūsų tinklo būsenos.",
						"Rasta nauja programinės įrangos versija XXXX. Ar norite naujinti dabar?",
						"Naujovinimo procesas per tinklą praeitą kartą buvo nutrauktas. Reikia naujovinti dar kartą.",
                        "Naujos programinės įrangos versija XXXX dar nebaigta atsiųsti. Ar norite tęsti dabar?",
                        "Programinė įranga atsiųsta. Norite naujinti dabar?"];
var sysOptions		= ["El. vadovas","Meniu kalba","Laikmatis","Užrakinti","Įvesties nustatymai",
						"Prog. įrang. atnauj.","Vieta","HbbTV režimas","Slapukai","Bendroji sąsaja (CI)",
						"Papildomi nustatymai","Atstatyti pard.","LED kontrolinė lemputė","Momentinis maitinimo įjung.","Automatinio pirkimo režimas","Area","Demonstracinis režimas"];
var sysResetDes		= "Ar tikrai?";
var sysMenuLangOptions=["Kalba","Norima garso kalba","Antroji pageidaujama garso kalba"];
var sysTimerOptions	= ["Laiko juosta","Regiono pavad.","Laikrodis","Laukimo rež. laikmatis","Automatinė parengtis", "Country region"];

var sysTimeZone		= ["Kaip transliuotojas","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Išj.","10 min","20 min","30 min","40 min","50 min","60 min","90 min","120 min"];
var sysStandby		= ["Išj.","4 val.","6 val.","8 val."];
var sysRegionName	= ["Madridas","Kanarai"];
var sysClockOptions	= ["Automatinis sinchronizavimas","Data","Laikas","Įjungimo laikmatis","Laikmatis",
						"Įjungti kanalą","Išjungimo laikmatis","Laikmatis"];
var sysTimer		= ["Išj.","Kasdien","Kartą"];

var sysInputSet		= ["Jokio pavadinimo","DVD","Blu-ray","HDD","DVDR",
						"HD įraš.","Žaidimas","Vaizdo magn.","Asmeninis kompiuteris","Skaitmeninis priedėlis",
						"HD skaitm. priedėlis","Kamera","Įrašymo įrenginys","Kita"];
var sysAvVideoInput	= ["Auto","RGB_CVBS","RGB","CVBS","S-VIDEO"];
var sysUpdate		= ["Per USB","Per Tinklo","Pagal kanalą"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Eteryje negalima rasti naujos programinės įrangos!",
						"Rasta nauja programinės įrangos versija XXXX. Ar norite naujinti dabar?",
						"Įkiškite USB atmintuką.",
						"Nepavyko patikrinti paketo, bandykite dar kartą!",
						"Kol vyksta programinės įrangos atnaujinimas, atjungti USB atmintinę išjungti televizorių DRAUDŽIAMA!",
						"Programinė įranga sėkmingai atnaujinta.\nTV automatiškai pasileis iš naujo!",
						"Rasta nauja programinės įrangos versija XXXXX. Ar norite atsisiųsti dabar? Tai gali šiek tiek užtrukti, priklausomai nuo jūsų tinklo būsenos.",
						"Atsisiunčiama",
						" Programinė įranga parsiųsta sėkmingai. Ar norite pradėti įrašymą į FLASH atmintį?",
						"Atn. nepavyko!",
						"Ieškoma bylų naujinių",
						"Programinė įranga sėkmingai atnaujinta.\nPrašome išjungti ir vėl įjungti TV."];
var sysProductInfo	= ["Esama versija","Produkto pavad","Gamintojo pavadinimas","Šasi pavadinimas"];
var sysCiDes		= ["Nėra jokios CI kortelės."];
var sysAdOptions	= ["DivX(R) registracija","DivX(R) išregistravimas","T-Link","Authorization Error","Išregistravimas patvirtinamas",
						"Nuoma patvirtinama","Nuoma nebegalioja"];
var sysRegistDes	= ["Registruokite prietaisą, kad žiūrėtumėte DivX apsaugotus video",
						"Registracijos kodas",
						"Registruokitės http://vod.divx.com"];
var sysDregistDes	= ["Išregistravimo kodas:",
						"Išsiregistruokite adresu http://vod.divx.com",
						"Tęsti registraciją?"];
var mediaAuthorization = ["Šis įrenginys neturi leidimo atkurti vaizdo įrašo su DivX(R) apsauga."];
var deregistrationConfrimation = ["Jūsų prietaisas jau registruotas.","Ar tikrai norite išregistruoti?"];
var rentalConfirmation = "DivX(R) nuoma naudoja XXXX iš YYYY peržiūrų. Tęsti?";
var rentalExpired 	= "DivX(R) nuoma naudota XXXX kartų iš YYYY. DivX nuomos laikas baigėsi.";

var parentalRatingNA		= ["***","***","***","***","***","***","***","***"];
var parentalRatingOptionUS		= ["***","***","***"];
var sysTVRatingUS=["***","***","***","***","***"];
var sysMPAAUS=["***","***","***","***","***","***"];
var parentalRatingOptionCanada		= ["***","***","***"];
var sysCanadaEng=["***","***","***","***","***","***"];
var sysCanadaFre=["***","***","***","***","***",""];
var sysResetRRT=["***"];
var sysLockOptions	= ["Kanalo užrakinimas","Laiko intervalo blokuotė","Vaikų apsaugos reitingas","Įvesties blokavimas","Priekinio skydelio užrakinimas","Užrakinti nustatymą",
						"Pakeisti slaptažodį","Maks. garso stiprumas","Išvalyti viską"];
var sysTimeIntervals= ["Blokuotės tipas","Pradžios laikas","Pabaigos laikas"];
var sysRatingOptions= ["Nieko","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","X-vertinimas (Ispanija)"];
var changePass		= ["Pakeisti slaptažodį","Naujas slaptažodis","Patvirtinti slaptažodį"];
var changePassDes	= ["Slaptažodis neteisingas.\nPrašome įvesti dar kartą!",
						"Slaptažodis neatitinka.\Prašome įvesti dar kartą!",
						"Slaptažodis sėkmingai nustatytas!",
						"Šis kodas per paprastas slaptažodžiui.\nĮveskite dar kartą!"];
var sysPowerOnChOptions= "Pasirinkti režimą";
var sysPowerOnCh	= ["Paskutinė būsena","Naudotojo pas."];
var netWlessSecu    = ["Atidaryti","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Nieko","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ",""];
var netWlessSecu3	= ["Nieko","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)",""];
var netOptions		= ["Interneto ryšys","Sąsaja","Belaidžio ryšio nuostatos","IP nuostatos","Informacija",
						"Ryšio bandymas","DLNA","TV nuot. vald.","„Netflix“ nuostatos","„Wi-Fi“ ekranas",
						"Adreso tipas","IP adresas","Potinklio kaukė","Num. tinklų siet.","Pagrindinė DNS",
						"Papildoma DNS","SSID","BSSID","Įveskite SSID:","Naudotojo ID"];
var chEditDes		= ["Dubliuotas kanalo numeris!","Spauskite raudoną mygtuką, kad pašalintumėte šį simbolį.","Netinkami kanalų numeriai."];
var chEpgNoProgram	= "Šiuo metu nėra programos informacijos, pirmiausia raskite kanalą!";
var chEpgWords		= ["Programų gidas","Programos duomenų nėra.","Kanalas užrakintas!","Programos informacijos nėra.","Programos pavadinimo nėra."];
var chEpgBooking	= ["Tvarkaraštis informacija", "Kanalo numeris","Pradžios data","Pradžios laikas","Pabaigos laikas",
						"Kartoti tipą","Tvarkaraščio tipas","Įtraukti","Pakeisti","Keisti",
						"Pridėti / keisti"];
var epgHotKey		= ["Pirmesnė diena","Paskesnė diena","Filtras","Tvarkaraščių sąrašas","Įtraukti tvarkaraštį"];
var chEpgBookRemind	= ["Netikslus pradžios laikas","Netikslus pabaigos laikas","Dubliuotas tvarkaraštis","Sėkmingai išsaugota.","Sėkmingai ištrinta."];
var chSchePara		= ["Tvarkaraščių sąrašas","Pradžios laikas","Pradžios data","Programos pavadinimas","Kanalo pavadinimas",
						"Trukmė","Kartoti","Tvarkaraštis","Taisyti","Panaikinti"];
var dateTimer		= ["Kartą","Kasdien","Savaitės"];
var scheduleDeleteReminds="Ar norite pašalinti šį tvarkaraštį?";
var scheduleNoLists	= "Tvarkaraščių sąrašo nėra. Spauskite raudoną mygtuką, kad sudarytumėte naują.";
var chListWords		= ["Kanalų sąrašas","Pasirinkti sąrašą","Tiunerio režimas","Pridėti prie parankinių","Pašalinti",
						"Pasirinkti kanalų sąrašą","Pasirinkti imtuvo režimą","Keisti"];
var chListType		= ["Viskas","Skaitmeninis","Analoginis","Radijas","Laisvas","Parankiniai"];
var chAutoScanOptions=["Pasirinkti operatorių","Kanalo tipas","Automatinė paieška"];
var souSoundType	= ["Negaliojantis","Mono","Mono","Stereo","Stereo",
						"SAP","SAP","Dvigubas 1","Dvigubas 2","Dvigubas 2",
						"„NICAM“ mono","„Nicam“ stereofon.","„Nicam“ dual1","„Nicam“ dual2","Nicam dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Muzika","Filmas","Aiškus balsas","Standartas","Asmeninė"];
var picAdRgbMode	= ["Išj.","Tik raudonas","Tik žalias","Tik mėlynas"];
var picAdOptions	= ["Triukšmo slopinimas","MPEG NR","RGB mode","Dinaminis kontrastas","LED judėjimo aiškumas",
						"Kūno tonas","Filmo režimas","Žaidimo režimas","Spalvų temperatūra","Baltos Spalvos Balansas",
						"Sustabdyti","Juoda Praplėtimas","Perteklinis skenavimas","Gama korekcija","HDMI režimas","10P baltos spalvos balansas","Spalvų spektro išplėtimas",
						"Susiliejimo mažinimas","Vibracijos sumažinimas","Spalvų erdvė","Judėjimo aiškumas"];
var pic10Pwhite     = ["Intervalas","Raudona","Žalia","Mėlyna","Atstatyti","Spal.","Geltona","Žydra","Rausvai raudona"];
var picMotionClarity = ["Judėjimo būsena","Judėjimo interpoliacija","LED judėjimo aiškumas","Susiliejimo mažinimas","Vibracijos sumažinimas","Atstatyti"];
var picMotionMode   = ["Filmas","Sklandu","Išvalyti","Sportas","Klientas"];
var picResetDes		= "Visi asmeniniai nustatymai bus išjungti. Ar tikrai norite įvykdyti pasirinktą veiksmą?";
var pic10PReset     = "Ar tikrai norite išjungti 10P baltos šviesos balansą?";
var picMotionReset  = "Ar norite išjungti judėjimo aiškumą?";
var picColorSpaceReset    = "Ar norite išjungti spalvų erdvę?";
var picOptions		= ["Vaizdo išankstinė nuostata",
						"Foninis apšvietimas","Šviesumas","Kontrastingumas","Sotis","Atspalvis","Aštrumas","Spalvų temperatūra","Ekrano režimas","Autom. formatas",
						"Sportinio režimo vaizdo gerinimas","3D režimas","3D naršymas","ECO Nustatymai","Geometrija",
						"Papildomi nustatymai","Vaizdo atkūrimas","mikropritemdymas"];
var picSize			= ["16:9 formatas", "Formatas 4:3", "14:9 formatas", "Cinerama",
						"16:9 priartintas", "16:9 priartintas, pakeltas","14:9 priartintas","Išplėstas priartintas","Platus priartintas",
						"Priartintas 2","Platus priartintas 2","Rodyti vietinį sutapimą","Pagal taškus","Originalus","Panorama"];
var others			= ["Garso stiprumas","Transliacija","Slaptažodis","Būklė","Išsaugoti","Pakeisti","Pradėti","Išeiti","Ieškoti","Panaikinti",
						"Nieko","Automatinis","Skenuoti","Sauga","Sujungti","Atnaujinti","Iš naujo","Sustabdyti","Nustatymai","Кanalų",
						"Taisyti","Įterpti","Signalo!","Baigti","Stereo","Garsas","Šaltinis","Nėra garso","Patarimai","Atstatyti",
						"Klientas","Sąranka","Išsaugoti","Naudotojas","Uždaryti klaviatūrą","Saugos būsena","Kasdien","PVR sąrašas"];
var direction		= ["Kairė","Dešinė","Aukštyn","Žemyn"];
var audioType 		= ["MPEG","DOLBY AUDIO"/*"AC3"*/,"MPEG4","AAC", "DOLBY AUDIO"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Nežinoma"];
var soundChannels   = ["Nežinoma","Mono","Žemadažnis","Dvigubas mono","Stereo","Stereo sub.","Stereo Dolby aplinka","Erdvinis, 2 kanalai","Erdvinis","3.0 Ch","4.0 Ch","5.0 Ch","Mono lfe.","Dual Mono lfe.","Stereo lfe.","Aplinka 2 Ch lfe.","Aplinke lfe.","3.1 Ch","4.1 Ch","5.1 kanalai","7.1 kanalai","Bendra Stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Kairė","Dešinė","Kita"];
var prompts			= ["Pareguliuokite vaizdo nuostatas taip, kad jos geriausiai tiktų jūsų žiūrėjimo aplinkai.",
						"Pareguliuokite ryškumą. Kuo arčiau 100, tuo ryškiau.",
						"Pareguliuokite kontrastą. Kuo arčiau 100, tuo didesnis vaizdo šviesių ir tamsių zonų skirtumas.",
						"Pareguliuokite sodrumą. Kuo arčiau 100, tuo sodresnė spalva.",
						"Pareguliuokite aiškumą. Kuo arčiau 100, tuo aiškesnės detalės.",
						"Pareguliuokite foninį apšvietimą. Kuo arčiau 100, tuo ryškesnis ekranas.",
						"Pareguliuokite atspalvius. Ši nuostata keičia spalvų tonus.",
						"Pasirinkite tokį vaizdo formatą, kuris geriausiai tinka žiūrimai laidai.",
						"Konfigūruokite energijos taupymo parinktis.",
						"Prijungę kompiuterį pareguliuokite ekrano geometrijos nuostatas.",
						"Pasirinkite daugiau papildomų vaizdo nuostatų.",
						"Atkurkite visas numatytąsias vaizdo nuostatas.",
						"Pasirinkite garso režimą, tinkantį jūsų asmeniniams poreikiams.",
						"Pareguliuokite kairio ir dešinio kanalo garsumo balansą.",
						"Garso atkūrimo sistema „TruSurround HD“ užtikrina sodrų, aiškų garsą tiek žemais, tiek ir aukštais dažniais.",
						"Skaitmeninės sąsajos formatas, leidžiantis prijungti televizoriaus skaitmeninio garso signalo išėjimo jungtį prie namų kino teatro garso įrangos.",
						"Pasirinkite garso kalbą, tinkančią jūsų asmeniniams poreikiams.",
						"Aktyvinkite silpnaregiams skirtą funkciją, kad ir jie galėtų mėgautis televizijos laidomis.",
						"Išbandykite savo TV vaizdą, garsą ir signalą.",
						"Pasirinkite kanalo sąrašo tipą, atitinkantį jūsų televizoriaus signalą.",
						"Pasirinkite ekrano apačioje rodomų programos subtitrų kalbą.",
						"Peržiūrėkite dabartinio kanalo tekstą ir vaizdus.",
						"„Digital Living Network Alliance“. Per namų tinklą klausykitės muzikos, žiūrėkite nuotraukas ir vaizdo įrašus iš kitų įrenginių, pavyzdžiui, kompiuterio.",
						"Išmaniojo telefono turinį žiūrėkite per televizorių, o išmanųjį telefoną naudokite kaip nuotolinį televizoriaus valdymo pultą.",
						"Su „Miracast“ suderinamo „Android“ įrenginio turinį žiūrėkite per televizorių.",
						"Užblokuokite televizorių.",
						"Savo įrenginiui pasirinkite vardą.",
						"Pasirinkite žiūrėjimo aplinką.",
						"Atkurkite visas numatytąsias sistemos nuostatas.",
    					"Switch off sports mode for more options.",
    					"Padidinti aplinkos kontrastą",
    					"Specialusis režimas, skirtas sporto žaidimams",
    					"Naudokite daugiau CEC funkcijų."];
var initialTitle	= ["Sveikiname","Pirminė sąranka"];
var initialPrompt	= ["Dabar pat atlikite pradinę sąranką ir atsidursite jaudinančios patirties kupiname pasaulyje!",
						"Pasirinkite savo kalbą:",
						"Pasirinkite savo šalį / regioną:",
						"Pasirinkite savo vietą:",
						"Pasirinkite savo tinklo sujungimo tipą:",
						"Pasirinkite laidinio tinklo sujungimo režimą:",
						"Nepavyko prisijungti prie xxxxxxxxx! Prijunkite prietaisą pagal nurodytą diagramą arba spauskite į kairę, kad išvalytumėte nustatymus.",
						"Prisijungta prie xxxxxxxxx! Spauskite į dešinę, kad tęstumėte.",
						"1) Gali būti, kad šis televizorius turi įrengtą belaidžio ryšio adapterį\n 2) Jeigu turite belaidžio ryšio USB adapterį, prijunkite jį prie televizoriaus. Tada pasirinkite belaidžio tinklo ryšio režimą",
						"Nuskaitoma. Palaukite...",
						"Prie TV neprijungtas belaidis prietaisas!",
						"Patikrinkite, ar šis PIN kodas įdiegtas į AP prieš spausdami mygtuką \"Sekantis\".",
						"Paspauskite AP stūmimo mygtuką per 120 sekundžių prieš paspaudami į dešinę!",
						"WPS (apsaugota „Wi-Fi“ sąranka)",
						"PIN (asmeninio identifikavimo skaičius)",
						"PBC (stūmimo mygtuko konfigūracija)",
						"Toliau pateiktas turinys gali būti pasiekiamas tik esant tinklo jungčiai. Ar norite praleisti tinklo nustatymus?",
						"Yra programinės įrangos naujinių, kuriuos reikia atsisiųsti; tai gali užtrukti, priklausomai nuo tinklo būsenos.",
						"Programinės televizoriaus įrangos atnaujinimas užtikrina, kad naudositės naujausiomis funkcijomis ir paslaugomis.",
						"Negalėsite naudotis naujausiomis funkcijomis ir paslaugomis. Ar norite praleisti programinės įrangos naujinimą?",
						"Spauskite dešinįjį mygtuką, jeigu norite tęsti.",
						"Neišjunkite maitinimo vykstant naujinimui, nes gali sugesti televizorius.",
						"Jei norite atnaujinti, pasirinkite NO (Ne).",
						"Atnaujinama, palaukite.",
						"Taip pat galite atnaujinti programinę įrangą NAUJINYJE SISTEMA / PROGRAMINĖ ĮRANGA.",
						"Pagal pasirinktą valstybę reikia slaptažodžio nustatymo.\nNustatykite savo TV kodą ir jį patvirtinkite.",
						"This code is too simple.\nPlease use different digits.",
						"Sveikiname, pirminis nustatymas baigtas. Konfigūravimą galite keisti, įjungę pagrindinį meniu ir susijusius maniu papunkčius.",
						"Pasirinkite apsaugos režimą:",
						"Pasirinkite bevielio tinklo prijungimo būseną:",
						"Tinklas"];
var initNetCabAndDonRe = ["Neprijungtas tinklo kabelis, įjunkite jį!","Nėra integruoto bevielio adapterio arba pateikto bevielio USB adapterio."];
var initChPrompt = ["TV kanalų diegimas","Pasirinkite palydovo nuskaitymo tipą.","Vyksta automatinis derinimas...","Rasti šie antenos kanalai:","Pasirinkite kabelinio nuskaitymo tipą.","Iš pateikto sąrašo pasirinkite vieną tiekėją.","Konfigūruokite nuskaitymo informaciją","Rasti šie kabeliniai kanalai:","Pasirinkite vieną operatorių iš šio sąrašo","Pasirinkite palydovus nuskaitymui arba redaguokite pasirinktą palydovą","Nustatykite palydovo parametrus","Rasti toliau nurodyti kanalai. Kanalų nuskaitymą galima atlikti dar kartą, pasirinkus kanalų nuskaitymą"];
var initClockPrompt = ["Suteiktą laiką gaukite tinklo!",
						"Nustatykite datą ir laiką:"];
var initialOptions	= ["Aplinka","Tinklo sąranka","Prog. įrang. atnauj.","Kanalo įdiegimas","Laikrodis"];
var initialHotkeys	= ["Atgal","Pasirinkti","Kitas","Sutinku"];
var initLocations	= ["Pagrindinis","Pirkti","Pard. su demo."];
var initNets		= ["Laidinis","Belaidis ","Neturiu tinklo jungties"];
var initWireManuals	= ["IP adresas","Potinklio kaukė","Num. tinklų siet.","Pagrindinė DNS","Papildoma DNS"];
var initSoftUpdates = ["Naujinti dabar","Naujinti vėliau"];
var initChannelIns	= ["Tęsti","Nenoriu įdiegti kanalų"];
var initChScanTypes	= ["Skaitmeninis & Analoginiai","Skaitmeninis","Analoginis","Nenoriu nuskaityti"];
var initChDvbts		= ["Antenos ATV kanalai:","Antenos DTV kanalai:"];
var initChDvbcs		= ["Kabeliniai ATV kanalai:","Kabeliniai DTV kanalai:"];
var initChDvbss		= ["Palydoviniai kanalai:"];
var initChDvbSOther	= ["Nenoriu nuskaityti palydovo"];
var initEndConnectedStatus= ["Išjungta","„WiFi“ prijungta","Laidas prijungtas"];
var initEndInstallations= "Įdiegti XXXX kanalai";
var initEndUpdate	= ["Atnaujinta"];

var audioScenes 	= ["Pastatomas","Montuojamas prie sienos"];			
var screenSavers	= ["Nėra kanalų, paspauskite klavišą „Gerai“ ir skenuokite!",
						"Nėra signalo!",
						"Užšifruota",
						"Tik duomenys",
						"Garso programa",
						"Nėra garso ir vaizdo",
						"Nėra",
						"Teleteksto nėra",
						"Programos duomenų nėra.",
						"Programa užrakinta!",
						"Programa užrakinta!\nPaspauskite OK ir įveskite savo kodą.",
						"Programos informacijos nėra.",
						"Programa kenksminga nepilnamečiams.\nPaspauskite OK (gerai) ir įveskite savo kodą.",
						"Kanalas užrakintas!",
						"Kanalas užrakintas!\nPaspauskite OK ir įveskite savo kodą.",
						"Įvestis užrakinta!\nPaspauskite OK ir įveskite savo kodą.",
						"Nesuderinama!",
						"Paslauga šiuo metu neteikiama",
						"Įvestis užrak.!",
						"Programos pavadinimo nėra.",
						"Jokios funkcijos",
    					"Subtitrai nėra"
						];
var channelNumberOverPromt = ["The number of search programs has exceeded,you can delete some programs and then retry!"];
var chBookingPromt	= ["Šį kanalą suplanuota įrašyti, TV pradės įrašinėti.",
						"Rastas tvarkaraštyje numatytas įrašymas.\n Įjunkite XXXX, kad įrašytumėte",
						"Šiam kanalui nustatytas priminimas.",
						"Rastas tvarkaraštyje numatytas įrašymas.\n Įjunkite XXXX"];
var timeUnit		= ["Sekundė","min"];
var ciPromt			= ["Pasikeitė tinklo duomenys. Norėdami atnaujinti, galite atlikti atnaujinimo nuskaitymą.",];
var othersPromt		= ["Prašome palaukti...",];
var menuOptions		= ["Vaizdas","Garsas","Kanalas","Smart TV","Tinklas","Sistema","Pagalba"];
var optionOptions	= ["Vaizdo išankstinė nuostata","Garso išankstinė nuostata","Sustabdyti","T-Link","laiko postūmis","PVR","Tvarkaraščių sąrašas","Nustatymai","*"];
var optionTLinkPromt= [["Automatinis įjungimas","Automatinė parengtis","Meniu vadovas"],
						["Įjungti maitin.","Budėjimas","Stiprintuvo garsumas"]];
var powerPromt		= ["TV tuoj išsijungs! Paspauskite bet kurį klavišą, kad nutrauktumėte."];
var ttxLanguage		= ["VAKARŲ EUR.","RYTŲ EUR.","Rusų","Arabų / hebrajų","Persų","Arabų","Baltarusių","Graikų","Turkų"];
var ttxOptions		= ["Parodyti","Ciklinis subpuslapių parinkimas","Kalba","Signalinis puslapis","Naujienų pranešimai"];
var weekday         = ["Sekmadienis","Pirmadienis","Antradienis","Trečiadienis","Ketvirtadienis","Penktadienis","šeštadienis"];
var lcnConfflict	= " Su šios programos priėmimu kilo problemų. %d kanalu galima kita versija.";
var inShopMode		= "Jūsų TV nustatyta parduotuvės būsena. Norėdami perjungti į namų būseną, nustatykite „System“ (sistema) ir meniu pakeiskite „Location“ (vieta).";
var nitRefresh		= "Tinklo duomenys pakito. Ar norite atlikti atnaujinimų skenavimą?";
var picHDMIMode     = ["Auto","Grafika","Vaizdas"];

var glassRemind    	= ["Suderinkite savo 3D akinius su TV\n(3D akiniuose palaikykite ĮJUNGIMO mygtuką).","Jūsų 3D akiniai prijungti prie TV",""];
var pvrRemind 		= ["Neištraukite USB įrenginio arba neišjungite iš tinklo"];
var pvrConName   	= ["PVR","Programos informacija:",["Note:If you record the HD channel,please to select  the  disk(of speed >5.0MB/sec),and to select the disk (of speed >3.0MB/sec) when yourecord the SD channel.","Įrašytas video išsaugotas  \"PVR\"  aplanke."],"Sustabdyti","Įrašyti","valanda","Minutė","Trukmė","Patarimai","Naudokite rodykles, kad nustatytumėte įrašymo trukmę."];
var pvrDisRemind 	= "Norėdami įrašyti, įdėkite USB jungtį.";
var pvrRemindWords  = ["Norite išeiti?",
							"Norite nustoti įrašinėti ir peržiūrėti įrašytas bylas?",
							"Diskas išstumiamas.",
							"Nepakanka vietos diske.",
							"Nėra įrašytų bylų. Pradėti įrašinėti.",
							"PVR negali paleisti koduoto kanalo.",
							"Nėra tokios funkcijos",
							"Sėkmingai išsaugota.",
							"Ar norite sustabdyti įrašymo procesą ir pakeisti įvesties šaltinį?",
							"TV nustos įrašinėti. Norite baigti?",
							"PCR įrašymui reikia gerai veikiančio TV signalo, patikrinkite signalą."];
var pvrChangeCh 	= ["Ar norite įjungti kanalą?",
							"Ar norite sustabdyti įrašymo procesą ir pakeisti kanalą?"];
var pvrChangeToPIN8	= ["Norite pakeisti šaltinį į įrenginį, kuris prijungtas prie SCART įvesties?",
				    		"Norite nustoti įrašinėti ir pakeisti šaltinį į įrenginį, kuris prijungtas prie SCART įvesties?"];
var pvrChangeToCEC  = ["Norite pakeisti šaltinį į įrenginį, kuris prijungtas prie HDMI įvesties?",
				  			 "Norite nustoti įrašinėti ir pakeisti šaltinį į įrenginį, kuris prijungtas prie HDMI įvesties?"];
var pvrGuideJump    = ["Norite įeiti į EPG?",
							"Ar norite sustabdyti įrašymo procesą ir įeiti į EPG?"];
var pvrMediaJump    = ["Norite įeiti į Media?",
							"Ar norite sustabdyti įrašymo procesą ir įeiti į Media?"];
var timeshiftExtra	= ["Sustabdyti laiko keitimą ir perjungti keisti kanalą?",
						"Norite sustabdyti laiko poslinkį ir pakeisti šaltinį į įrenginį, kuris prijungtas prie SCART įvesties?",
						"Norite sustabdyti laiko poslinkį ir pakeisti šaltinį į įrenginį, kuris prijungtas prie HDMI įvesties?",
						"Laiko keitimas negali paleisti koduoto kanalo.",
						"Norite sustabdyti laiko poslinį ir įvesti EPG?",
						"Sustabdyti laiko keitimą ir perjungti televizorių į USB režimą?",
						"Sustabdyti laiko keitimą ir perjungti keisti įvesties šaltinį?",
						"Norėdami įrašyti, įdėkite USB jungtį.",
						"Disko dydis per mažas.",
						"TV užbaigs dabartinį laiko poslinkį. Norite išeiti?"];
var timeshiftStatus	= ["Greitai atgal","Sustabdyti","Groti","Pauzė","Greitai pirmyn"];
var pvrPowerOffRemind= ["Budėjimo įrašymas","Budėjimas","Dabar TV įrašinėja. Ar norite išlaikyti įrašinėjimą, kai TV yra budėjimo būsenoje?"];
var timeshiftInitTitle= "Disko nustatymai";
var timeshiftInitReminds= ["Šis vedlys naudojamas nustatyti USB diską laiko keitimui. Pasirinkite nustatymų režimą.",
						 "Norint užtikrinti geresnį veikimą, rekomenduojame formatuoti USB diską. Bus ištrinti visi duomenys.",
						 "Pasirinkite failų dydį laiko keitimui.",
						 "Formatavimas",
						 "Nepakanka vietos diske.",
						 "Laiko keitimo failo sukūrimas",
						 "Greičio testas",
						 "Disko greitis per mažas (< %f MB/sek), kad veiktų laiko keitimo funkcija!",
						 "Diskas paruoštas laiko keitimui. Tačiau rekomenduojame pakeisti diską (greitis > %f MB/sek) geresniam veikimui.",
						 "Diskas paruoštas laiko keitimui."];
var timeshiftInitButtons= ["Formatuoti","Praleisti","Atšaukti","Gerai","Baigti","Išeiti"];
var timeshiftInitOther=["Disko greitis:","MB / s"];

var selectChoice	= "Ar tikrai?";
var chAtvStore		= "Išlaikyti kaip XXXX";
var chEpgFirstGenreUK= ["Filmas","Naujienos ir žinios","PRAMOGOS","Sportas","Vaikams","Švietimas","Gyvenimo būdas","Drama"];
var homePageTitleList = ["Programėlės","TV","VAIZDO ĮRAŠAI","Pagrindinis puslapis"];
var homePageFavAndAllName  = ["Mėgiamiausios programėlės","Visos programos"];
var homePageBackUp = ["El. vadovas","GuideOn"];
var homePageRemind   = ["Visos funkcijos pasiekiamos tik esant tinklo ryšiui.","Jūsų TV dar nėra jokių kanalų. Programos atsiras tik nuskaičius kanalus.","Nėra programa","Ieškoti kanalų dabar?"];
var homePageHistory = ["Istorija"];
var miracastTitle = ["„Wi-Fi“ ekranas","TCL įrenginys"];
var miracastRemind=["„Wi-Fi“ ekranas suteikia galimybę bendrinti įrenginio, pavyzdžiui, išmaniojo telefono ar planšetės, ir televizoriaus ekraną ir garsą belaidžiu ryšiu (t. y. be laidų). Taip tuo pačiu metu televizoriaus ekrane galima stebėti, kas rodoma išmaniajame telefone ar planšetės ekrane. Pavyzdžiui, galite paleisti vaizdo įrašą išmaniajame telefone ir tuo pat metu rodyti jį per televizorių arba planšetę naudoti kaip žaidimų valdiklį, jos turinį rodant dideliame televizoriaus ekrane.","„Wi-Fi“ TV nuoroda televizoriuje paruošta. Transliuokite vaizdą iš savo įrenginio į TV jau dabar.","Jungiama. Palaukite!","Nepavyko prisijungti!","Prisijungti nepavyko. Patikrinkite!"];
var homePageLittleWin = ["Nustatymai","Media","Mėgst. kanalai","Smart TV","EPG"];

var hbbtvStopRemind  = ["Norite nutraukti peržiūrą?"];
var colorSystem = ["Auto","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Paspauskite ≡ (funkcija), kad gautumėte daugiau informacijos";
var emptyListInfo = "Prie TV neprijungtas joks įtaisas!";
var optionVideoListArray_1 = ["Vaizdo išankstinė nuostata", "Garso išankstinė nuostata", "Paleisties režimas", "Ekrano režimas", "3D režimas", 
							  "K-D jungiklis", "Lauko gylis", "Subtitrai", "Garso takelis", "Pavadinimas", "Skyrius", "Informacija"];
var optionVideoListArray_2 = ["Vaizdo išankstinė nuostata", "Garso išankstinė nuostata", "Paleisties režimas", "Ekrano režimas", 
							  "Subtitrai", "Garso takelis", "Pavadinimas", "Skyrius", "Informacija"];
var bottomTipsText = ["Leisti / prist.", "Greitai atgal", "Greitai pirmyn", "Grojaraštis", "Nustatymai"];
var picturePresetArray = ["Standartas", "Dinaminis", "Natūralu", "Filmas", "Asmeninė"];
var videoPlayModeArray = ["Kartoti visus", "Kartoti vieną", "Normalus"];
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Platus priartintas", "Priartintas 2", "Platus priartintas 2", "Išplėstas priartintas", "Automatinis"];
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "14:9 priartintas", "16:9 priartintas", "16:9 priartintas, pakeltas", "Automatinis"];
var Mode3DArray = ["Išj.", "2D į 3D", "Vienas šalia kito", "Viršus ir apačia", "Linijos įdėliojimas"];
var videoOptionListArray = ["Išj.", "Įrašas", "Subtitrai", "Pavadinimas", "Skyrius"];
var subMenuTitleText = "Subtitrai";
var langMenuTitleText = "Garso kalba";
var titleMenuTitleText = "Pavadinimas";
var mode3DMenuTitleText = "3D režimas";
var langInfoText = "Įrašas";
var STOP_RESUME_INFO = "Stab. suvestinę";
var playListName = "pavadinimas";
var eb_tips = "Patarimai";
var ok_button = "Gerai";
var eb_info = ["Garso dekodavimo klaida.", "Vaizdo dekodavimo klaida.", "Garso formatas nepalaikomas.", 
			   "Vaizdo formatas nepalaikomas.", "Nepavyksta atverti šios bylos.", "Peržiūros klaida. Bandykite dar kartą.",
			   "Neatpažįstamas bylos formatas.", "Atsiprašome. Grotuvas nebeveikia.",
			   "Tokio bylos adreso nėra arba jis neteisingas.\n Iš naujo įdėkite laikmeną ir bandykite dar kartą.",
			   "Toliau leisti nuo ankstesnės\n peržiūros būsenos?"];
var picturePlayErrorTips = ["Įkėlimo klaida!!!","Vaizdas per didelis!!!","Tinklo klaida!!!","Sekos klaida!!!","Param. klaida!!!","Nežinoma klaida!!!"];
var frameTitleText = "Naujas įrenginys";
var eb_quit_info = "Ar tikrai norite baigti?";
var eb_yes = "TAIP";
var eb_no = "NE";
var offinfo = "Išj.";
var naInfo = "Nulis";
var consoleInfoArray = ["Greitai atgal", "Greitai pirmyn", "Leisti / prist.", "Grojaraštis"];
var cantOperateText = ["Funkcija nepalaikoma."];
var chapterChangeInfo = "Galimi tik skyriai nuo 1 iki XXXX.";
var metaDataArray = ["Pavadinimo / Laidos metaduomenys:", "Skyriaus metaduomenys:", "Garso metaduomenys:", "Subtitrų metaduomenys:"];
var metaTitleInfo = "Pavadinimas";
var metaChapterInfo = "Skyrius";
var videoLoadingInfo = "Analizuojama...";
var listLoadingInfo = "Įkeliama...";
var pgInfo = "Žemas reitingas:";
var fileNameText = "pavadinimas";
var fileDateText = "Data";
var fileSizeText = "Dydis";
var fileDurationText = "Trukmė";
var fileDirectorText = "Režisierius";
var fileCopyrightText = "Autorių teisės";
var fileArtistText = "Atlikėjas";
var fileAlbumText = "Albumas";
var fileGenreText = "Žanras";
var fileYearText = "Metai";
var fileGenreText = "Žanras";
var mainListArray = ["Viskas", "Vaizdas", "Vaizdas", "Muzika"];
var sortArray = ["pavadinimas", "Data"];
var parserArray = ["Normalus", "Rekursinis"];
var emptyTipsInfo = "Atsiprašome. Atpažįstamų bylų nėra.";
var emptyFolderInfo = "Atsiprašome. Atpažįstamų bylų nėra.";
var sortName = "Surūšiuota pagal";
var parserName = "Analizatorius";
var divx_str1 = "DivX(R) registracija";
var divx_str2 = "DivX(R) išregistravimas";
var infor_str = "Informacija";
var quickMenuEmptyText = "Nėra galimų parinkčių.";

var musicSoundPresetArray = ["Standartas", "Filmas", "Muzika", "Aiškus balsas", "Asmeninė"];
var musicInformationArray = ["pavadinimas", "Atlikėjas", "Albumas", "Žanras:", "Metai:", "Trukmė:"];
var playListName = "pavadinimas";
var playTipsInfo = ["Leidžiate pirmą bylą.", "Leidžiate paskutinę bylą."]
var musicNameInfo = "Name";
var musicArtistInfo = "Atlikėjas";
var musicAlbumInfo = "Informacija";
var optionSoundPresetInfo = "Garso išankstinė nuostata";
var optionBGMInfo = "Groti fone";
var optionAudioOnlyInfo = "Tik garsas";
var optionInfoText = "Informacija";

var remotePhoneConnecte = "XXXX prijungta prie TV!";
var tvRemoteTitle		= "TV nuot. vald.";
var tvRemoteDeveloper	= "Programą sukūrė TLC";
var tvRemoteDeviceTitle	= "Prietaiso pavadinimas:";
var remoteOption		= ["Medijų bendrinimas","Nuotolinis valdymas","Pagalba","Apie","Išmanusis sujungimas"];
var remotebottom		= "Atsisiųskite „TV Remote“ į savo išmanųjį telefoną";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Nuotraukų, vaizdo įrašų ir muzikos bendrinimas TV naudojantis telefonu.",
							"Atliktini žingsniai: \n 1. Telefone spustelėkite „TV Remote“. Telefoną prijunkite prie TV per tą patį „WiFi“ tinklą;\n 2. Spustelėkite „Media Sharing“ (medijos bendrinimas), kad naršytumėte media bylas;\n 3. Siųskite mediją į TV, kad paleistų atgal (su viena iš toliau nurodytų parinkčių)",
							"      a) aplanką / failą vilkite ir numeskite ant TV piktogramos ekrano viršuje;\n      b) telefoną pakreipkite į televizorių, kad paleistumėte pirmą failą;\n      c) medijų failą paleiskite telefone ir spustelėkite TV bendrinimo piktogramą.",
							"   4. Vykstant atkūrimui televizoriuje, pakratykite telefoną, kad būtų leidžiamas ankstesnis arba kitas failas."];
var controlReminds		= ["Telefoną naudokite kaip nuotolinį valdymo pultą televizoriui reguliuoti.",
							" ",
							"Atliktini žingsniai: \n 1. Telefone spustelėkite „TV Remote“. Telefoną prijunkite prie TV per tą patį „WiFi“ tinklą;\n 2.Telefoną sujunkite su TV per tą patį „WiFi“ tinklą."];
var helpDeviceWords		= "Kelių ekranų sąveika";
var helpBottom			= " Debesų technologijos eroje išmanieji prietaisai, pvz., telefonai ir TV, abipusiai sujungti. Su savo šeima bendrinkite mediją keletoje ekranų ir TV kontroliuokite telefonu! ";
var helpReminds			= ["Paruošimai\n 1. Atsisiųskite ir įdiekite „TV Remote“ iš „Google Play“ arba „Apple Store“.\n 2. Prijunkite telefoną su TV per tą patį „WiFi“ tinklą.",
							" ",
							"Rekomenduojamas telefonas\n   1. CPU: daugiau kaip 800 MHz\n   2. Atmintis: mažiausiai 80 MB laisvos vietos",
							" ",
							"Atsakomybės apribojimas\n   Jeigu jūsų telefone nėra „TV Remote“ funkcijos, kreipkitės į telefono gamintoją. "];
var helpButtons			= ["Ankstesnis","Kitas"];
var aboutReminds		= ["TV nuot. vald.","Programą sukūrė TLC"];
var aboutExit			= "Išeiti";
var smartReminds		= ["Greitas ir išmanusis TV ir telefono sujungimas.",
							" ",
							"Atliktini žingsniai \n 1. Prijunkite TV ir išmanųjį telefoną į tą patį LAN. Išmaniajame telefone spustelėkite „TV Remote“.\n 2. Spustelėkite „Smart Connect“ (išmanusis prisijungimas), kad nuskaitytumėte QR kodą.\n 3. Esant TV transliavimo peržiūros būsenai, paspauskite mygtuką INFO, esantį TV valdymo pultelyje, ir palaikykite 4 sekundes, - iššoks QR kodas.",];
var smartQRReminds		= ["Spustelėkite išmanųjį prisijungimą savo telefone ir nuskaitykite QR kodą, kad greitai sujungtumėte TV ir telefoną.",
							"QR kode yra LAN paskyros informacija. Išsaugokite ją."];
							

var consoleTipArray = ["Ankstesnis","Kitas","Konsolė","Grojaraštis"];							
var optionInfoArray = ["Vaizdo išankstinė nuostata","Paleisties režimas","Trukmė","Efektas","Informacija"];

var playModeArray = ["Normalus","Atsitiktinė tvarka","Kartoti"];
var durationArray = ["Trumpas (5 s)", "Vidutinis (10 s)", "Ilgas (15 s)"];
var effectArray = ["Nieko", "Sukti", "Vaizd. Dešinėn", "Vaizdas kairėn", "Vaizd. Aukštyn", "Vaizdas žemyn", "Dėžutė, vidun", "Dėžutė, išorėn", "Atsitiktinis"];
var infoArray = ["Pavadinimas:","Dydis:","Data:","Vieta"];

var picturePresetBarTitleInfo = "Vaizdo išankstinė nuostata";
var picturePresetBarArray = ["Standartas","Dinaminis","Studija","Filmas","Asmeninė"];
var upTipsInfo = "Pastumti paveikslėlį"; //add yums 2014-10-10
var consoleTipsArray = ["Konsolė","Ankstesnis","Kitas","Grojaraštis","Nustatymai"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Dar kartą paspauskite RIGHT (į dešinę), kad rodytų kitą paveikslėlį","Dar kartą paspauskite LEFT (į kairę), kad rodytų ankstesnį paveikslėlį","Dar kartą paspauskite DOWN (žemyn), kad rodytų grojaraštį"]; //add yums 2014-10-10

var optionPvrListArray = ["Vaizdo išankstinė nuostata","Garso išankstinė nuostata", "Ekrano režimas", "3D režimas", "Subtitrai", "Garso takelis", "Informacija"];							
	
var titleSpanFirstArray = ["Valdymas ir jungtis","Pagrindinės funkcijos","Programėlės","TV","Nustatymai","DUK"];
var titleSpanSecondArray = [["Nuotolinis valdymas","Panelės mygtukai","Paprastas naršymas","TV jungtis","TV jungtis","TV jungtis","Belaidis "],["Paleidėjas","Būsenos eilutė","Šaltinis"],["Veikiančios programos","Media","TV nuot. vald."],["Pritaikyti kanalą ir garsą","Kanalų sąrašas","EPG","Kanalų įdiegimas","Mėgstamiausi kanalai"],["Paveikslėlių pritaikymas","Garso pritaikymas","Kanalų pritaikymas","Prog. įrang. atnauj.","Kalba","Tėvų užraktas"],["Dažnai užduodami klausimai","Dažnai užduodami klausimai","Problemų sprendimas","Problemų sprendimas","Nuostatos ir sąlygos"]];
var contentSpan1_1Array =[["GALIA:","ŠALTINIS:","NUOSTATOS:","PARINKTIS:","ATGAL:","INFORMACIJA:","PRADŽIA:","BAIGTI:","SĄRAŠAS:"],
    ["Įjungiamas maitinimas arba budėjimo režimas",
        "Pasirinkite įėjimo šaltinį",
        "Rodyti nuostatų meniu",
        "Rodyti parinkčių meniu",
        "Grįžti į ankstesnį meniu arba baigti vykdomos programėlės darbą",
        "Rodo programos informaciją",
        "Prisijungti prie „SmartTV“ namų puslapio",
        "Grįžti į ankstesnį meniu arba baigti vykdomos programėlės darbą",
        "Rodo kanalų sąrašą"]];
var contentSpan1_2Array = ["Ankstesnis kanalas","Kitas kanalas","Pagarsinti","Patildyti","Eina į pagrindinį puslapį","Patvirtinti parinktį","Budėjimas / Įjungimas"];
var contentSpan1_3Array = ["Gerai / gidas","Kanalas aukštyn","Kanalas žemyn","Sumažinti garsą","Padidinti garsą","Kai kurių funkcijų atveju veikia kaip mygtukai su rodyklėmis."];
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","AV OUT adapteris","LAN","Išmanusis telefonas","Kompiuteris / TV imtuvas / DVD","Garso stiprintuvas","Garso stiprintuvas / Ekranas","Jūsų TV gali nebūti visų lizdų."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Ausinės","AV IN adapteris","SPDIF","CPM AUDIO IN adapteris","CPM IN (YPbPr) adapteris","USB įrenginiai","USB įrenginiai","Ausinės","DVC / žaidimų kompiuteris / TV imtuvas / DVD","Garso stiprintuvas","DVC / žaidimų kompiuteris / TV imtuvas / DVD","Jūsų TV gali nebūti visų lizdų."];
var contentSpan1_6Array = ["Bendroji sąsaja (CI)","SD","VGA","SCART","Mini SCART","ANTENNA IN","PCMCIA kortelė","SD kortelė","Asmeninis kompiuteris","Rinkinio dėžutė / DVD","Antena / Kabelis / Palydovas","Jūsų TV gali nebūti visų lizdų."];
var contentSpan1_7Array = ["Tabletė","Asmeninis kompiuteris","maršrutizatorius","Telefonas","TV"];
var contentSpan1_8Array = ["Perjungti funkciją/maitinimą","Ilgai spauskite, kad pereitumėte į miego laikmatį","Žemyn","Aukštyn","Garsumas/Kanalas/Šaltinis"];

var contentSpan2Array = [["Spauskite mygtukus su rodyklėmis, kad patektumėte į pagrindinį puslapį.","Tuomet spauskite OK (gerai), kad galėtumėte žiūrėti vieną iš siūlomų laidų arba įjungtumėte programėlę."],["Rodyti datą, tinklą, įrenginius ir t. t. ekrano viršutiniame dešiniajame kampelyje."],["Pasirinkite įvesties šaltinį iš įrenginio, sujungto su TV per skirtingus prievadus, pvz., TV, AV, HDMI ir t. t."]];

var contentSpan3Array = ["Išmaniosios televizijos puslapyje peržiūrėkite mėgiamiausias programėles ir jomis naudokitės","Žiūrėkite nuotraukas, vaizdo įrašus ir leiskite muziką iš USB įtaiso.","Sujunkite savo TV ir išmanųjį telefoną arba jutiklinį prietaisą į tą patį LAN","Išmaniajame telefone arba planšetėje spustelėkite „nScreen“ arba „TV Remote“","Su savo šeima keliuose ekranuose žiūrėkite nuotraukas, vaizdo įrašus, leiskite muziką, o televizorių valdykite išmaniuoju telefonu."];

var contentSpan4Array = [["Paspauskite UP / DOWN (aukštyn / žemyn) ir perjungsite kanalus","Paspauskite LEFT / RIGHT (į kairę / į dešinę) ir pareguliuosite garsą"],["Spauskite nuotolinio valdymo pulto mygtuką LIST, kad atvertumėte kanalų sąrašą","Paspauskite UP / DOWN (aukštyn / žemyn) ir pasirinksite kanalą"],["EPG yra ant ekrano rodomas vadovas, rodantis TV programas. Galite naviguoti, pasirinkti, žiūrėti ir įrašyti programas."],["Ieškoti ir įdiegti kanalus"],["Pridėti arba redaguoti mėgstamiausius kanalus Kanalų sąraše"]];

var contentSpan5Array = ["Mėgstamiausias laidas žiūrėkite naudodamiesi vaizdo įrašų programėlėmis"];

var contentSpan6Array = [["Paspauskite Parinktis, kad rodytų sistemos nuostatų parinktis","Įveskite Paveikslėlių nuostatas, kad pritaikytumėte reikšmes"],["Paspauskite Parinktis, kad rodytų sistemos nuostatų parinktis","Įveskite Garso nuostatas, kad nustatytumėte parinktis"],["Paspauskite Parinktis, kad rodytų sistemos nuostatų parinktis","Įveskite Kanalų nuostatas, kad nustatytumėte parinktis"],["Atnaujinkite savo TV, kai atsiras nauja programinės įrangos versija"],["Galite pasirinkti norimą meniu kalbą."],["Leidžia tėvams užrakinti kanalus arba programas, netinkamas vaikams žiūrėti"]];

var contentSpan7_1Array = [["Nėra vaizdo, nėra garso","Patikrinkite, ar veikia saugilis arba grandinės pertraukiklis","Į elektros lizdą įjunkite kitą elektrinį prietaisą, kad įsitikintumėte, jog ji veikia.","Blogai įjungta į elektros tinklą","Patikrinkite, ar yra signalas."],["Įprastas vaizdas, be garso","Norėdami padidinti garsą, paspauskite garso mygtuką UP.","Garso nustatymai neteisingi.","Signalo klaida iš transliuotojo."],["Įprastas garsas, be vaizdo","Pritaikykite ryškumą ir kontrastą","Signalo klaida iš transliuotojo.","Patikrinkite, ar yra garso būsena."]];
var contentSpan7_2Array = [["Radijo dažnio triktis","Dėl šios trikties atsiranda bangelės arba įstrižainės ruoželiai, o kartais dingsta vaizdo kontrastas. Raskite ir pašalinkite radijo dažnio šaltinį."],["Be spalvų","Pritaikykite spalvų nustatymus.","Pabandykite perjungti kanalą. Gali būti gauta juodai balta programa."],["Nuotolinis valdymas neveikia","Pakeiskite elementus.","Elementai netinkamai įdėti. Pagrindinis TV jėgos šaltinis neprijungtas."]];
var contentSpan7_3Array = [["USB įrenginio turinys nerodomas","Patikrinkite, ar USB saugyklos įrenginys suderinamas su TV.","Patikrinkite, šis TV palaiko garso ir vaizdo bylų formatus."],["Rodoma be garso","Vaizdo garso formato TV grotuvas nepalaiko."],["Bylos sklandžiai nerodomos","USB saugyklos įrenginio veikimo perdavimas gali limituoti duomenų perdavimą į TV."]];
var contentSpan7_4Array = [["Į ką turėčiau atkreipti dėmesį, kai atnaujinu programinę įrangą","Kai atnaujinama programinė įranga, negalima išjungti iš elektros lizdo.","Kai atnaujinama programinė įranga, venkite atlikti bet kokius veiksmus su nuotolinio valdymo pulteliu.","Būkite kantrūs, nes programinės įrangos atnaujinimas gali užtrukti."],["Atnaujinus programinę įrangą, nėra jokių TV sąsajos ypatumų.","Esant tam tikroms sąlygoms, SW atnaujinimas gali ne tik atnaujinti arba pridėti naujų funkcijų, bet taip pat ir pagerinti TV rinkinio veikimą, be jokių ypatingų sąsajos pakitimų. O kartais TV sąsaja gali išlikti nepaliesta."]];
var termsTitle = "Nuostatos ir sąlygos";
var termsConditions = ["(Teisinis pareiškimas) - TCL, šio televizoriaus gamintoja. ","Dėl gaminių su išmaniojo TV funkcija įvairių galimybių: paslaugos, taip pat galimi turinio apribojimai, tam tikros funkcijos, programos ir paslaugos gali būti teikiamos ne visiems įrenginiams arba ne visose teritorijose. Kai kurioms išmaniojo TV funkcijoms gali reikėti papildomų atskirai įsigyjamų periferinių prietaisų arba narystės mokesčių. Daugiau informacijos apie konkretų prietaisą ir galimą turinį rasite mūsų svetainėje. Išmaniojo TV paslaugos ir turinio prieinamumas gali būti retkarčiais keičiami, iš anksto neįspėjus. \n   Visas turinys ir paslaugos, kuriais naudojamasi per šį prietaisą, priklauso trečiosioms šalims, jas saugo autorių teisės, patentai, prekių ženklai ir (arba) intelektinės nuosavybės teisės. Toks turinys pateikiamas ir paslaugos teikiamos tik naudoti asmeniniais, nekomerciniais tikslais. Jokio turinio ir paslaugų negalite naudoti taip, kaip neleido turinio savininkas ar paslaugos teikėjas. Neapsiribojant tuo, kas nurodyta toliau, nebent aiškiai tai daryti leido atitinkamas turinio savininkas ar paslaugos teikėjas, negalite keisti, kopijuoti, iš naujo skelbti, įkelti, siųsti, perduoti, versti, parduoti, kurti išvestinių produktų, eksploatuoti, naudoti bet kokiu būdu (įskaitant laikmenas) jokio turinio ir paslaugų, kuriomis naudojatės per šį prietaisą. \n   AIŠKIAI SUVOKIATE IR SUTINKATE, KAD ŠĮ PRIETAISĄ NAUDOJATE PRISIIMDAMI VISĄ RIZIKĄ, KAD UŽ BET KOKIĄ RIZIKĄ DĖL PATENKINAMOS KOKYBĖS, VEIKIMO IR TIKSLUMO ATSAKINGI JŪS PATYS. PRIETAISAS, VISAS TREČIŲJŲ ŠALIŲ TURINYS IR PASLAUGOS TEIKIAMI TOKIE, KOKIE YRA, NESUTEIKIANT JOKIOS NEI AIŠKIAI NURODYTOS, NEI NUMANOMOS GARANTIJOS. TCL AIŠKIAI ATSISAKO VISŲ GARANTIJŲ IR SĄLYGŲ DĖL PRIETAISO, BET KOKIO TURINIO IR PASLAUGŲ, NESVARBU, AR JOS AIŠKIAI NURODYTOS, AR NUMANOMOS, ĮSKAITANT GARANTIJAS DĖL PERKAMUMO, PATENKINAMOS KOKYBĖS, TIKIMO KONKREČIAM TIKSLUI, TIKSLUMO, TYLAUS PASITENKINIMO IR TREČIŲJŲ ŠALIŲ TEISIŲ NEPAŽEIDIMO, BET TUO NEAPSIRIBOJANT. TCL NEUŽTIKRINA, KAD BET KOKS TURINYS AR PASLAUGOS, KURIOMIS NAUDOJAMASI PER ŠĮ PRIETAISĄ, BUS TIKSLUS, GALIOJANTIS, ATITINKANTIS LAIKĄ, TEISĖTAS IR IŠBAIGTAS, TAIP PAT NEUŽTIKRINAMA, KAD PRIETAISAS, TURINYS IR PASLAUGOS ATITIKS REIKALAVIMUS, KAD PRIETAISAS IR PASLAUGOS VEIKS BE PERTRŪKIŲ IR KLAIDŲ. JOKIOMIS APLINKYBĖMIS, ĮSKAITANT APLAIDUMĄ, TCL NEBUS ATSAKINGAS (TIEK PAGAL SUTARTĮ, TIEK PAGAL DELIKTĄ) UŽ JOKIĄ TIESIOGINĘ, NETIESIOGINĘ, ATSITIKTINĘ, SPECIALIAI PADARYTĄ AR KAIP PASEKMĖ ATSIRADUSIĄ ŽALĄ, ADVOKATUI SUMOKĖTAS SUMAS, IŠLAIDAS, TAIP PAT UŽ JOKIĄ ŽALĄ, KURI KILO DĖL SĄSAJŲ SU BET KOKIA PATEIKTA INFORMACIJA, TAIP PAT UŽ ŽALĄ, ATSIRADUSIĄ DĖL PRIETAISO NAUDOJIMO, BET KOKIO TURINIO AR PASLAUGŲ, KURIE PRIEINAMI JUMS ARBA BET KOKIAI TREČIAJAI ŠALIAI, NET JEI BUVO ĮSPĖTA DĖL TOKIOS ŽALOS TIKIMYBĖS. \n   Trečiųjų šalių paslaugos gali būti keičiamos, laikinai sustabdytos, pašalintos, nutrauktos ar pertrauktos, prieiga prie jų gali būti išjungta bet kuriuo metu neįspėjus, TCL („Thomson“ prekių ženklo televizorių gamintojas) netvirtina ir neužtikrina, kad bet koks turinys ir paslaugos bus prieinami kurį nors laikotarpį. Turinį pateikia ir paslaugas teikia trečiosios šalys, tam naudojami tinklai ir perdavimo įranga, kurių TCL nekontroliuoja. Neribojant šio atsisakymo bendrųjų nuostatų, TCL aiškiai atsisako bet kokios atsakomybės ir prievolės dėl bet kokio turinio ar paslaugų, kuriomis naudojamasi per šį prietaisą, keitimo, pertraukimo, išjungimo, pašalinimo arba laikino sustabdymo. TCL gali riboti naudojimąsi tam tikromis paslaugomis ir turiniu, taip pat prieigą prie jų bet kokiu atveju, iš anksto neįspėjusi ir nesiėmusi prievolės. Už klientų paslaugas, susijusias su turiniu ir paslaugomis, TCL neprisiima nei atsakomybės, nei prievolių. Visus klausimus ir paslaugų prašymus, susijusius su turiniu ir paslaugomis, reikia tiesiogiai pateikti atitinkamo turinio ir paslaugų teikėjams."];

var noChannelListRemind        = ["Kanalų nerasta. Kanalų sąrašas bus matomas nuskaičius kanalus.","Kanalų skenavimas"];
var closeSubtitleRemind   = "Funkcija bus galima, kai bus išjungti subtitrai. Ar norite jau dabar nustatyti?";

var estickerTitles = ["Labai realistiškas vaizdas","Gyvos spalvos","Judesys lyg tikrame gyvenime","Dinamiška vaizdo kokybė","SR UHD patobulinimas","3D pasaulis","Greitesnis veikimas","Ateities 4K turinys","Mėgaukitės internetiniu pasauliu","Pasiekite papildomą turinį","Integruoti skaitmeniniai derintuvai","Sujunkite visus įrenginius","Įvairūs 4K šaltiniai","USB turinys","Ypač greitas WIFI","Mobilusis turinys TV","Mobiliojo įrenginio turinys","Vietos turinys","Patvirtinta DivX","Besiūlys vaizdas","Kanalas paruoštas","TDT Premium"];
var estickerDescriptions = ["Nuostabu žiūrėti dėl vaizdo su keturis kartus detalesniu pilnu HD ant UHD ekrano","Platus spalvų diapazonas išreiškia emocijas visose scenose su ryškia raudona ir sodria žalia spalva","4K rėmelio interpoliacija ir apšvietimas išvengti išliejimo problemų","Originalaus vaizdo ryškumas padidinamas, kad būtų matoma dinamiška ekspresija ir puikus kontrastas","Mėgaukitės ryškesniais kontūrais TV programose ir Blu-Ray diskuose dėl Super Resolution technologijos.","Žiūrėkite įvairias 3D laidas","Dar įdomiau žiūrėti su Quad Core, skirtu sklandžiam rodymui ir išplėstiniam veiksmui","HEVC (H.265) kodekas palaiko standartinę 4K vaizdo distribuciją","Internetinių programų, VOD paslaugų, TV ir naršymo internete galimybė","Pamatykite dar daugiau, pasinaudoję papildomomis paslaugomis ir turiniu iš mėgstamo transliuotojo","Pasiekite didelės raiškos TV kanalus be papildomo rinkinio dėžutės","Paprasta prijungti keletą skaitmeninių šaltinių, galimų namuose","TV paruoštas ateičiai, gali leisti 4K 50 / 60 Hz per HDMI 2.0 su HDCP 2.2","Vaizdas arba nuotraukos tiesiai iš USB disko, HDD arba fotoaparato didelio ekrano 4K rezoliucija","Naujausia 2x2 MIMO karta ir AC standartas pateikia neprilygstamą interneto prieigos greitį","Mėgaukitės nuotraukomis, vaizdo įrašais, programomis iš mobiliojo įrenginio dideliame ekrane dėl ekraną atspindinčios technologijos","Nuotraukas, vaizdo įrašus, programėles iš išmaniojo telefono arba planšetės galima rodyti dideliame ekrane","Rodykite dideliame ekrane vietos turinį, pvz., nuotraukas, vaizdo įrašus iš įrenginių, sujungtų su vietos tinklu","Paleiskite nuomotus arba savo filmus, apsaugotus DivX","Ypač plonas bezelis ir dizainas","Testuota ir patvirtinta Canal+","Testuota ir patvirtinta TDT Premium"];							

var eManualTextArray = ["El. vadovas","Visi vidiniai grafiniai elementai pateikti tik atvaizdavimo sumetimais."];
var frontPanelRemind = "Priekinė panelė užrak.";
var eRPRemind		 = "Parduotuvės režimas nepatenkina poreikio dėl ERP prašymo. Ar tikrai?";	
var noRelatedChannel = "Susijusio kanalo nėra";
var option0624Name          = ["BOP","BFS","Įvykis po įvykio","GetUserID","BGM","Reset all","Atstatyti pard.","NRM","DVB-T2 ir šalies pasirinkimas","HbbTV režimas"];
var DVBT2AndChoice = ["Įj.","Pagal šalį","Išj."];
var hbbtvServiceRemind = "Netrukus bus teikiama HbbTV paslauga";
var insertWord = "Įterpti";		
var viewDetail = "Rodyti daugiau";							

var remindOAD  = "Programinės įrangos atnaujinimas. Gali būti rekomenduojamų atnaujinimų kitame kanale. Patvirtinus atsisiuntimą, gali būti automatiškai perjungtas kitas kanalas. Ar norite tai padaryti dabar?";

var LEDStatus = ["Mirksintis", "Normalus","Išj."];
var netFlixRemind = "Ši funkcija pertraukia prieigą prie „Netflix“ paslaugų, kol vėl prie jų neprisijungiate.";
var ESNExplanation = "Elektroninis serijos numeris";
var resetShopRemind = "Sistema dabar nustatoma iš naujo, neišjunkite televizoriaus";
var initialSelectOption = "Pasirinkite vieną parinktį:";
var databaseRemind   = "Sistema aptiko dėl neaiškių priežasčių sugadintą duomenų bazę ir atkūrė ją automatiškai; spauskite OK, kad tęstumėte toliau";
var Deactivation = "Išsiregistravimas";
var oadFutureRemind = "Programinės įrangos atnaujinimas.\n Nauja rekomenduojama programinė įranga bus prieinama %s. Atnaujinimas gali užimti šiek tiek laiko, o ekranas nieko nerodyti. Neišjunkite imtuvo atnaujinimo metu. Jei primate šį atnaujinimą, palikite imtuvą įjungtą nustatytu laiku. Ar norite gauti šį atnaujinimą?";														
							
var bt_title = "„Bluetooth“";
var bt_soundOutPutName = "Garso išėjimo signalas";
var bt_soundOutPutTV = "Televizoriaus garsiakalbis";
var bt_soundOutPutBT = "„Bluetooth“ įrenginys";
var bt_soundOutPutBT_TV = "„Bluetooth“ ir televizorius";
var bt_refreshBarName = "įrenginiai";
var bt_settingTips_On = "Įjunkite „Bluetooth“ funkciją ir ieškokite įrenginių.";
var bt_settingTips_Finding = "Ieškoma tinkamų įrenginių...";
var bt_settingTips_NoDevice = "Tinkamų įrenginių nėra.";
var bt_deviceList_State_NoConnect = "Neprijungta";
var bt_deviceList_State_Connecting = "Jungiama...";
var bt_deviceList_State_Connected = "Prijungta";
var bt_deviceList_State_Paired = "Sujungta";
var bt_deviceList_Conncect_Failed_Tips1 = "Prijungti nepavyko.";
var bt_deviceList_Conncect_Failed_Tips2 = "Patvirtinkite, kad XXX „Bluetooth“ funkcija įjungta.";
var bt_deviceList_Conncect_Success = "Prijungta prie „Bluetooth“ įrenginio.";
var bt_deviceList_Disconncect_Success = "Atjungta prie „Bluetooth“ įrenginio.";
var bt_deviceList_Disconnect = "Ar tikrai norite atsijungti nuo XXX?";
var bt_tipsTitle = "Patarimas";
var bt_bluetooth_Pairing_Title = "„Bluetooth“ įrenginių sujungimas";
var bt_bluetooth_Input_Pin = "Įveskite PIN kodą:";
var bt_bluetooth_Output_Pin_Tip = "Įveskite PIN kodą XXXX klaviatūra.";
var bt_bluetooth_Pin_Wrong_Tip = "Neteisingas PIN kodas";
var bt_bluetooth_Remove_Pair_Title = "Užklausa";
var bt_bluetooth_Remove_Pair_Ask = "Užmiršti šį įrenginį?";
							
var audioDescriptionName = ["Garsinis apibūdinimas","Garsiakalbis","Garsiakalbio garsas","Ausinės","Ausinių garsas","AD garsas","BT įrenginys","BT įrenginio garsumas","Stiprintuvas","Garsiakalbis"];
var audioDescriptionOptions = ["Išj.","Normalus","Garsinis apibūdinimas"];
var volumeOffRemind = 'Nuostatų meniu XXX nustatykite „Įjungta“.';
var switchSourceRemind   = " įkištas. Ar norite jį perjungti dabar?";
var footballModeName = "Sporto režimas";
var resetStadium = "Stadionas";							

var atvSearchMenu = "ATV manual search";
var dtvSearchMenu = "DTV manual search";
var settingNoticeSourceName ="Aut. šaltinis";

var smartTVOptions		= ["Smart TV portalas","HbbTV","Dalinkitės ir žiūrėkite","„Wi-Fi“ ekranas","Nuostatai ir sąlygos",
    "Pristabdyta tinkle","Atkurkite smart TV veikimą","Cookie policy","Privatumo politika","Duomenų šalinimas"];
var supportOptions		= ["Nuotolinė diagnostika","Kreipkitės į mus"];
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

var tvDoctor=["Nuotolinė diagnostika 2.0",
"Programa veikia tik išmaniajame televizoriuje diagnostiniam patikrinimui ir siekiant pagerinti gaminio veikimą. Ši programa, atsisiunčiama į serverį ir naudojama televizoriaus veikimo triktims spręsti, renka televizoriaus veikimo duomenis ir modelio informaciją. Jūsų asmeninė informacija neliečiama. Patikrinkite, ar televizorius tinkamai prijungtas prie interneto.",
"Vietinė diagnostika",
"Prasidėjus diagnostikai, vykdykite mūsų pagalbos tarnybos inžinieriaus nurodymus.",
"Nuotolinė diagnostika",
"Prieš naudodami, įsitikinkite, kad mūsų pagalbos tarnybos inžinierius prisijungęs.",
"Serijos numeris:",
"&nbsp;&nbsp;&nbsp;&nbsp;Naudotojo ID:",
"Jungiamasi...",
"Vyksta diagnostika.\nVisą laiką palaikykite gerą tinklo ryšį.",
"Jei negalite pasiekti interneto, \npatikrinkite tinklo ryšį.",
"Išeiti"
];
var contactUsOption = ["Kreipkitės į mus",
    "Susisiekite į mus, jei jums kyla problemų naudojantis šiuo įrenginiu.",
    "Susisiekite į mus",
    "Žiniatinklio svetainė: aplankykite",
    "Skambučių centro numeris:","Produkto informacija","Modelio pavadinimas:",
    "Program. įrangos versija:","","Naudotojo ID:","Projekto ID:",
    "Kliento tipas:","Belaidžio MAC adresas:","Laidinio MAC adresas:","Netflix ESN:","Ieškoti informacijos jūsų mobiliajame telefone.",
    ", tada pasirinkite savo šalį."];
							

//本地launcher的翻译，与服务器无关，只用于本地launcher
var homePageWords = ["Istorija", "Ieška"];//home页的翻译
var titlePageWords = ["Pagrindinis", "Vaizdo įrašai","TV","Programos"];//index的标题翻译
var videosPageWords = ["Filmas", "Sportas","Muzika","Populiaru","Žaidimas","Mokymas","Nieuws"];//videos页的内容翻译

//同时应用于本地和服务器
var statusPageWords = ["USB","Nuostatos","WiFi","Laidinis"];//状态栏的翻译

//二级页面的翻译
var searchPageWords = ["Ieška", "Populiarios paieškos:","Laidos, filmai, žmonės ..."];
var resultSearchPageWords = ["Rezultatai apie"," ","Bandykite kitus raktinius žodžius.","Deja, dar nerasta jokių vaizdo įrašų apie "," "];
var historyPageWords = ["Istorija", 'Paspauskite ','kad ištrintumėte istoriją',"Naikinti vieną","Naikinti visus","Vakar","Šiandien"," Dar nežiūrėjote jokio vaizdo įrašo.","Peržiūrų istorija ištrinta sėkmingai!"];
var channelPageWords = ["Deja, dar nerasta jokių vaizdo įrašų."];


//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9",
                       	   "Zoom-","0","Zoom+",
                       	   "Išeiti","0","",
                       	   "Sąrašas","0","Tekstas",
                       	   "Vesti","Įvesti","Išeiti",
                       	   "Meniu","Subtitrai","Informacija",
                       	   "Sustabdyti",
                       	   "Informacija","Meniu","Išeiti",
                       	   "Išeiti"
                       	   ];	

//added for LA sports mode
var sportsModeInitReminds= ["Šis vedlys naudojamas sukurti USB diską sporto režimui. Pasirinkite sąrankos režimą.",
						 "Pasirinkite sporto režimo failo dydį.",
						 "Kuriamas sporto režimo failas",
						 "USB prievado greitis per mažas (< %f MB/s) sporto režimo funkcijai!",
						 "USB prievadas paruoštas sporto režimui. Bet mes rekomenduojame jį pakeisti (iki greičio > %f MB/s), kad veiktų geriau.",
						 "USB prievadas paruoštas sporto režimui."];

var sportsModeExtra	= ["Ar norite sustabdyti sporto režimą ir pakeisti kanalą?",
						"Ar norite sustabdyti sporto režimą ir pakeisti šaltinį įrenginiu, prijungtu prie SCART įėjimo?",
						"Ar norite sustabdyti sporto režimą ir pakeisti šaltinį įrenginiu, prijungtu prie HDMI įėjimo?",
						"Sporto režimas nepalaikomas užšifruotiems kanalams.",
						"Ar norite sustabdyti sporto režimą ir įeiti į EPV?",
						"Ar norite sustabdyti sporto režimą ir įeiti į mediją?",
						"Ar norite sustabdyti sporto režimą ir pakeisti įėjimo šaltinį?",
						"Televizorius baigs veikti esamu sporto režimu. Ar norite išeiti?"];
var remoteControlNote = "- Pateiktas nuotolinio valdymo pultas gali skirtis, atsižvelgiant į įrenginio modelį";



var textArray = ["Volume","Channel","Source","Switch/Power","Guide","seconds to Power OFF"];
var guideArray = ["VOL-","VOL+","CH-","CH+","Pre","Next"];
var favChannelListRemind = ["Nėra mėgstamiausių kanalų. Pereikite prie kitų sąrašų ir pasinaudokite žaliu klavišu, kad pridėtumėte mėgstamiausių kanalų."];

var proxySetting = ["Tarpinio serverio parametrai","Prievadas"];
var powerOffShop = ["Rekomenduojame naudoti parduotuvės režimą, ar sutinkate?"];
var tcastTextPageWords = ["Daug vaizdo įrašų, turtingų programų","TV nuotolinio valdymo pultas, pasiekiamas ranka","Puikus turinys, bendrinkite dideliame ekrane"];
var tcastOtherWords = ["NUSKAITYTI QR kodą ir atsisiųsti T-CAST","Tinklas prijungtas prie TV","TV pavadinimas","T-Cast"];
var hbbtvWords = ["Hbbtv nustatymas","HbbTV","Slapukai","Trečiosios šalies slapukai","Įrenginio ID","sekimas"];
var hbbtvTrackingWords = ["YES","NO","Nesvarbu"];
var eStickerTipWords = ["Atmintinėje – mažiau nei 400 MB. Ar norite panaikinti demonstracijos režimo vaizdo įrašus, kad atlaisvintumėte vietos?"];
var delEstickerVideoRemid = ["Vaizdo įrašas sėkmingai panaikintas"];
var selectSatRemind = "Galite pasirinkti ne daugiau kaip 20 palydovų!";
var cookiePolicyTitle = "Slapukų politika – internetinės išmaniosios televizijos paslaugos";
var cookiePolicyConditions = ["Įmonė gerbia jūsų privatumą, jums naudojant Įmonės pagamintus išmaniuosius televizorius ir jos teikiamas Paslaugas. Slapukus naudoja daugelis svetainių ir kitų interneto paslaugų, todėl jūsų išmanusis televizorius priims, saugos ir perduos slapukus, kad būtų užtikrinta, jog šios svetainės ir paslaugos veikia tinkamai. Teikdama jums paslaugas, įmonė taip pat naudoja slapukus. Šioje slapukų politikoje Įmonė aprašo, kokie slapukai nustatomi jūsų išmaniajame televizoriuje ir kaip galite juos valdyti.\nAtkreipkite dėmesį, kad visiems asmens duomenims, kuriuos Įmonė renka ir (arba) tvarko naudodama slapukus, taikoma privatumo politika. Turėtumėte perskaityti slapukų politiką kartu su privatumo politika.\n1. Kas yra slapukas?\nSlapukai yra maži teksto failai, kurie gali būti nustatomi jūsų išmaniajame televizoriuje. Kai pasiekiama svetainė arba TV stoties raudonojo mygtuko paslauga, svetainė arba paslauga gali saugoti slapuką išmaniajame televizoriuje. Vėliau pasiekiant šias svetaines arba paslaugas, jūsų išmaniajame televizoriuje laikomas slapukas nusiųs informaciją šaliai, kuri nustatė slapuką. Slapukai yra visiškai įprasti ir naudojami daugelio svetainių ir paslaugų. Kiekviename slapuke paprastai yra domeno, iš kurio gautas slapukas, vardas, slapuko naudojimo laikas ir vertė (paprastai unikalus numeris). Išsamesnį paaiškinimą apie tai, kas yra slapukai ir kaip jie veikia, rasite apsilankę www.allaboutcookies.org.Slapukai gali būti skirstomi į funkcinius ir nefunkcinius slapukus. \nFunkciniai slapukai yra slapukai, kurie absoliučiai būtini, kad jums galėtų būti teikiamos išmaniosios televizijos paslaugos bei svetainėms ir kitoms paslaugoms, kad jos išmaniajam televizoriui galėtų teikti tinkamą turinį. Nefunkciniai slapukai yra visi kiti slapukai.\nŠi slapukų politika susijusi su slapukais, kuriuos nustatome mes, o taip pat su reklamos slapukais, kuriuos gali nustatyti trečiosios šalys, kai naudojatės mūsų paslaugomis savo išmaniajame televizoriuje. Ši slapukų politika nesusijusi su slapukais, kurie gali būti nustatomi, kai naudojate išmaniosios televizijos paslaugas norėdami pasiekti trečiųjų šalių svetaines, paslaugas arba programas. Informacijos apie šiuos slapukus ieškokite atitinkamose tokių trečiųjų šalių slapukų politikose. Tačiau šioje slapukų politikoje aprašoma, kaip pašalinti tokius slapukus (žr. toliau esantį 4 skyrių).\n2. Kokius nefunkcinius slapukus naudojame?\nReklama: Vaizdo įrašuose rodoma bei vaizdinė reklama gali būti pateikiama jūsų išmaniajame televizoriuje, kai naudojatės išmaniosios televizijos paslaugomis. Šią reklamą galime rodyti mes arba trečiosios šalys, naudodamos mūsų reklamos serverį, kuris atlieka pagrindinį koordinuojantį vaidmenį teikiant tokią reklamą, arba jo koordinuojamos. Mūsų reklamos serveris arba trečiosios šalies reklamos serveris jūsų išmaniajame televizoriuje nustatys slapuką. Naudodamas šį slapuką, reklamos serveris registruos, ar reklama buvo parodyta jūsų išmaniajame televizoriuje arba ar kas nors, naudodamasis jūsų išmaniuoju televizoriumi, spustelėjo reklamą. Naudojame informaciją, įrašytą tokiame reklamos slapuke, kad atsimintume, kuri reklama jau rodyta jūsų išmaniajame televizoriuje, kad užtikrintume, jog konkrečiame išmaniajame televizoriuje nebūtų rodoma pernelyg daug tos pačios reklamos ir galėtume įvykdyti komercinius susitarimus, sudarytus su mūsų reklamos partneriais. Nenaudosime šios informacijos tikslinės reklamos teikimo tikslais. Be to, trečiosios šalys gali naudoti mūsų reklamos sistemą, kad rodytų reklamą jūsų išmaniajame televizoriuje ir nustatytų slapukus jūsų išmaniajame televizoriuje, kai rodoma tokia reklama. \nŠiuose slapukuose yra informacija apie parodytą reklamą, apie tai, kokioje programoje ar domene tokia reklama rodoma, jūsų IP adresas ir kita informacija. Tai daroma norint prisiminti, kaip dažnai rodoma tam tikra reklama, ir neleisti rodyti tos pačios reklamos pernelyg dažnai. Išoriniai trečiųjų šalių reklamuotojai, kurie gali rodyti reklamą, taip pat gali nustatyti slapukus, kad sektų jūsų veiklą keliose svetainėse ir teiktų reklamą, atitinkančią jūsų asmeninius interesus.\n3. Trečiųjų šalių svetainės\nKai naudodamiesi savo išmaniojo televizoriaus išmaniosios televizijos paslaugomis apsilankote trečiųjų šalių svetainėse, gali būti, kad tokios svetainės arba paslaugos nustato slapukus jūsų išmaniajame televizoriuje ir kad tokios svetainės seka ir saugo jūsų veiksmus tokiose svetainėse. Mes nereikalaujame ir neskatiname tokios veiklos ir tokios informacijos nenaudosime. Informacijos apie tai, kaip tokios šalys naudoja tokius slapukus, ieškokite atitinkamose tokių svetainių ir paslaugų slapukų ir privatumo politikose.\n4. Slapukų šalinimas\nJūsų išmaniojo televizoriaus vartotojo sąsaja leidžia iš išmaniojo televizoriaus pašalinti visus slapukus ir kitus vietinės naršyklės saugyklos elementus. Prieš parduodant ar atiduodant savo išmanųjį televizorių, labai patartina pašalinti visus slapukus ir vietoje saugomus parametrus.\n5. Susisiekimas su mumis\nJei turite kokių nors klausimų ar komentarų dėl mūsų slapukų politikos arba dėl to, kaip naudojame slapukus, galite atsiųsti mums el. laišką adresu FRsupport@tcl.com.\nVersija: 1.0\n"];
var privacyPolicyTitle = "Privatumo politika – internetinės išmaniosios televizijos paslaugos";
var privacyPolicyConditions = ["Tvarkydami jūsų asmens duomenis, gerbiame jūsų privatumą. Ši privatumo politika aprašo subjektą, atsakingą už asmens duomenų, kuriuos surenkame jums naudojantis mūsų išmaniosios televizijos paslaugomis („Paslaugos“), surinkimą, tvarkymą ir naudojimą, kokius duomenų tipus apie jus renkame, ką su jais darome ir jūsų teises, susijusias su tuo, kaip naudojame jūsų asmens duomenis. \n1. Duomenų valdytojas\nAsmens duomenų, surinktų jums naudojantis Paslaugomis, rinkimą, tvarkymą ir naudojimą vykdo „Shenzhen TCL New Technology Co., Ltd.“, No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, Kinija („Įmonė“). Tačiau atkreipkite dėmesį, kad mes nesame atsakingi už visą toliau nurodytą duomenų tvarkymo veiklą. Vis dėlto įtraukėme atitinkamos veiklos aprašą į savo privatumo politiką, nes toks tvarkymas susijęs su jūsų išmaniosios televizijos naudojimu.\n2. Duomenų tvarkymo sutikimas\nTam tikrais atvejais, norint rinkti, tvarkyti ir (arba) naudoti jūsų asmens duomenis, reikalingas jūsų sutikimas.\nJei davėte leidimą naudoti savo asmens duomenis, skirtus paslaugoms gerinti, jūsų sutikimo formuluotė buvo tokia:\n„Aš sutinku su savo įrenginio paleidimo laiko, DTV kanalų sąrašo, parankinių kanalų sąrašo, apsilankymo laiko ir peržiūrėtų kanalų rinkimu, tvarkymu ir naudojimu, kurio tikslas yra analizuoti naudotojų įpročius siekiant gerinti Paslaugų kokybę ir (arba) analizuoti, kiek prisijungusių naudotojų įmonė turi per dieną / mėnesį / metus, ir dalytis šia informacija su televizijos stotimis.“\nJei davėte leidimą naudoti savo asmens duomenis, skirtus reklamai, atitinkančiai jūsų interesus, jūsų sutikimo formuluotė buvo tokia:\n„Aš duodu leidimą rinkti, tvarkyti ir naudoti duomenis apie savo kliento tipą ir šalį, kad gaučiau atitinkamą reklamą“.\nSutikimas yra savanoriškas, o nesutikę vis tiek galite naudotis paslaugomis. Vis dėlto galite matyti reklamą ir kitokį turinį, kuris nėra pritaikytas pagal jūsų asmeninius poreikius. Nepriklausomai nuo jūsų sutikimo, Įmonė pasilieka teisę rinkti, tvarkyti ir (arba) naudoti minėtus duomenis tiek, kiek leidžia galiojantys įstatymai.\nBet kuriuo metu galite atšaukti savo sutikimą su bet kuriuo minėtu punktu, o atšaukimas įsigaliotų ne atgaline data. Galite prieštarauti savo asmens duomenų naudojimui rinkodaros, rinkos ar nuomonės tyrimų tikslais ir siekiant pritaikyti Paslaugas pagal jūsų poreikius. Norėdami atšaukti savo sutikimą ir (arba) prieštarauti, atitinkamai pakeiskite savo išmaniosios televizijos privatumo parametrus.\n3. Renkami asmens duomenys\nNeatsižvelgiant į jūsų sutikimą, Įmonė renka,tvarko, saugo ir naudoja šių duomenų kategorijų duomenis:Įrenginio ID: \nJūsų išmanusis televizorius saugo nekintamą unikalų numerį, kuris mums leidžia identifikuoti ir nustatyti išmaniojo televizoriaus tapatybę, kai naudojatės Paslaugomis. Šis numeris vadinamas įrenginio ID. Įrenginio ID bus pateiktas mūsų paslaugų partneriui, kad jums galėtų būti teikiamos Paslaugos. Mes taip pat suteikiame įrenginio ID atrinktiems turinio partneriams tapatybės nustatymo tikslais. Šie turinio partneriai naudoja Įrenginio ID, kad nustatytų jūsų išmaniojo televizoriaus tapatybę ir suteiktų prieigą prie turinio partnerio teikiamo turinio.\nIP adresas ir MAC adresas: Jungiantis prie interneto, jūsų išmaniajam televizoriui bus priskirtas IP adresas. Kiekvieną kartą, kai išmanusis televizorius iš Paslaugų prašo informacijos arba duomenų, IP adresas bus perduodamas mums ir mes jį apdorosime. Jei jūsų išmanusis televizorius naudoja maršruto parinktuvą (pvz., vietiniame namų tinkle arba vietiniame WLAN), galime rinkti ir tvarkyti tokio maršruto parinkiklio IP adresą. MAC adresas yra unikalus numeris, priskirtas kiekvienai jūsų išmaniosios televizijos tinklo sąsajai. Kai išmanusis televizorius iš Paslaugų prašo informacijos arba duomenų, MAC adresą taip pat rinksime ir apdorosime.\nPaslaugų duomenų užklausos: Kiekvieną kartą, kai prijungiate savo išmanųjį televizorių prie interneto ir jį įjungiate, jis išmanusis televizorius automatiškai prisijungia prie Paslaugų, kurias valdo mūsų paslaugų partneris. Tada jūsų išmanusis televizorius gauna sertifikatą, kad jam suteikiama prieiga prie Paslaugų. Tapatybės nustatymo tikslais, Paslaugos saugo vieną arba daugiau unikalių skaitinių identifikatorių, susijusių su jūsų išmaniuoju televizoriumi. Jungdamasis prie Paslaugos, išmanusis televizorius perduos jam priskirtą IP adresą ir informaciją apie konkretų įrenginį (išmaniojo televizoriaus modelį, programinės įrangos versiją), kad patikrintų, ar yra programinės įrangos naujinimų.\nPaslaugų parametrai: Kaip dalis Paslaugų įprastų funkcinių galimybių, galite neautomatiniu būdu nustatyti tvarką, kuria programas rodo Paslaugos. Mūsų paslaugų partneris saugos jūsų nustatytą tvarką ir kitas nuostatas, kurias nustatote naudodamasis Paslaugomis. Ši informacija bus susieta su įrenginio ID.\nInformacija apie konkretų įrenginį: Išmanusis televizorius saugo tam tikrą informaciją apie save ir savo konfigūraciją. Ši informacija apima išmaniojo televizoriaus tipą, išmaniojo televizoriaus operacinės sistemos versiją, jo skiriamąją gebą, projekto ID (t. y. informaciją apie konfigūracijos failus), naudotojo agentą, naršyklės pavadinimą, naršyklės versiją bei kalbą ir šalį, nustatytą išmaniajame televizoriuje. Šią informaciją naudosime mes ir ji bus suteikta mūsų paslaugų partneriui ir turinio partneriams.\nReklama: Naudojant paslaugas, gali būti rodomos reklamos. Šias reklamas rodome mes arba trečiosios šalys, naudojančios reklamos priemones, kurias priskiriame mes. Visa reklama pateikiama naudojant mūsų reklamos serverį, kuris atlieka koordinuojantį reklamos teikimo vaidmenį. Mūsų reklamos serveris arba trečiosios šalies reklamos serveris išmaniajame televizoriuje gali nustatyti slapuką. Daugiau informacijos apie šiuos slapukus žr. mūsų Slapukų politiką.\nPaslaugos ir turinio partnerio srautas: Kai naudojatės Paslaugomis, jūsų išmanusis televizorius Paslaugoms internetu pateiks duomenų užklausą. Vykdant šias užklausas, jūsų IP adresas, kaip aprašyta pirmiau, bei kalba ir šalis, nustatyta jūsų išmaniajame televizoriuje, bus perduota mūsų paslaugų partneriui.  Mūsų paslaugų partneris tvarkys atitinkamus duomenis pagal savo privatumo politiką.\nAntrojo ekrano naudojimas: Jei naudojate mūsų antrojo ekrano programą, mes surinksime duomenis apie valdiklius, kuriuos aktyvinate programoje, bei šalies ir kalbos parametrus, DTV kanalų sąrašus, parankinių kanalų sąrašus, grafiko sąrašus, įrenginio ID, dabartinį kanalą, protokolo versiją ir jūsų išmaniojo televizoriaus IP adresą ir juos tvarkysime savo serveriuose. Tada mūsų serveriai valdys jūsų išmanųjį televizorių, kaip jūs nurodysite antrojo ekrano programoje.\nHbbTV – „raudonasis mygtukas“: TV stotys („Stotys“) kartu su TV signalu gali siųsti papildomą informaciją. Jei išmanusis televizorius su tokia papildoma informacija gaus konkrečias instrukcijas ir jis yra prijungtas prie interneto, išmanusis televizorius iš Stoties svetainės atsisiųs paveikslėlį arba nedidelį puslapį ir rodys jį kartu su informacija, nurodančia paspausti ant nuotolinio valdymo pulto esantį „raudonąjį mygtuką“, jei norėsite naudotis papildomomis paslaugomis, kurias teikia Stotis. Tai nutinka kaskart jums perjungiant kanalą. Atsisiųsdamas paveikslėlį ir Stoties svetainės, išmanusis televizorius perduos tam tikrus asmens duomenis, t. y. DTV kanalų sąrašą, dabartinį kanalą, įvykių informacijos lentelę, TV laiką, jūsų išmaniojo televizoriaus IP adresą ir išmaniajame televizoriuje saugomus slapukus (jei yra). Stotis yra atsakinga už šių duomenų rinkimą, tvarkymą ir (arba) naudojimą. Be to, jei naudojatės papildomomis paslaugomis, kurias siūlo Stotis, spaudžiant raudonąjį mygtuką, Stotis gali rinkti kitus jūsų asmens duomenis (pvz., kokius vaizdo įrašus pagal pareikalavimą žiūrite, kokias naujienas skaitote ir kt.).\n4. Tikslai, kuriais naudojame, tvarkome ir (arba) naudojame jūsų asmens duomenis.\nTvarkome surinktus duomenis toliau nurodytais tikslais.\n•Paslaugų teikimas: Naudojame jūsų išmaniojo televizoriaus IP adresą ir MAC adresą, įrenginio ID, operacinės sistemos versiją, išmaniojo televizoriaus kliento tipą ir skiriamąją gebą, projekto ID (t. y. informaciją apie konfigūracijos failus), jūsų DTV kanalų sąrašą, peržiūrėtus kanalus, laiko juostą, šalies ir kalbos parametrus, kad galėtume suteikti jūsų išmaniajam televizoriui prieigą prie Paslaugų ir paslaugų, kurias teikia turinio partneriai. Tikslai apima (bet jais neapsiriboja) tapatybės nustatymą, paslaugų pagal buvimo vietą teikimą (pvz., orų prognozės), priemones dėl piktnaudžiavimo, saugos incidentų valdymą, Paslaugų prieinamumo stebėjimą ir naudotojo nuostatų atsarginės kopijos teikimą.\n•Tapatybės nustatymas: Tapatybės nustatymo tikslais naudojame įrenginio ID ir MAC adresą.\n•Programinės įrangos naujinimai: Kiekvieną kartą, kai jūsų išmanusis televizorius įjungiamas, jis suteikia mums IP adresą, įrenginio ID, programinės įrangos versiją, jūsų išmaniojo televizoriaus kliento tipą, projekto ID (t. y. konfigūracijos failus), naudotojo ID, serijos numerį, kad galėtume jums siūlyti ir teikti atitinkamos programinės įrangos naujinimus. \n•Paslaugų gerinimas: Naudojame suvestinius ir nuasmenintus duomenis (t. y. duomenis apie tai, kaip naudojate Paslaugas), kad pagerintume Paslaugų naudotojo patirtį.\n•Reklamos rodymas: Reklamos slapukų informaciją naudojame, kad sistema galėtų registruoti, kuri reklama buvo rodyta jūsų išmaniajame televizoriuje, siekiant užtikrinti, kad negautumėte pernelyg daug tokios pačios reklamos ir galėtume įvykdyti komercinius susitarimus, sudarytus su mūsų reklamos partneriais. Išorės reklamuotojai, kurie rodo rodo reklamą Paslaugose arba turinio partnerių svetainės, suderinus su mūsų reklamos serveriu, taip pat gali naudoti slapukus, kad galėtų jus sekti keliose svetainėse ir rodyti reklamą, atitinkančią jūsų asmeninius interesus.\n•Reklamos optimizavimas: Naudojame duomenis, susijusius su reklamos peržiūromis ir paspaudimais, siekdami optimizuoti Paslaugų reklamą pagal vartotojus. \n•Nuolaidos: Suteikiame įrenginio ID atrinktiems turinio partneriams, kad jie nustatytų kokiu mastu gali suteikti jums nemokamą prieigą prie savo kolekcijoje esančių vaizdo įrašų pagal pareikalavimą.\n•Teisės aktų vykdymas: Mūsų gali būti reikalaujama pateikti duomenis kompetentingoms teisėsaugos institucijoms arba teismams. Jei mes tai padarysime, tai atliksime tik pagal privalomą teisinę priemonę, pvz., arešto orderį ar teismo nurodymą, kuri mus įpareigotų bendradarbiauti su atitinkamomis institucijomis.Naudotis Paslaugomis galima naudojant slapyvardžius, išskyrus atvejus, kai konkrečios paslaugos reikalauja naudoti vardą ir (arba) el. pašto adresą. \n5. Gavėjų kategorijos\nJūsų asmens duomenimis, surinktais jums naudojantis Paslaugomis, Įmonė dalijasi tik su toliau nurodytomis trečiosiomis šalimis.\n•Su trečiųjų šalių išmaniosios televizijos teikėjais, jeigu pageidaujate tokių paslaugų (pvz., jei paleidžiate „Netflix“ programą savo išmaniajame televizoriuje, su „Netflix“ galime pasidalyti jūsų IP adresu, MAC adresu, programinės įrangos versija ir TV modelio pavadinimu).\n•Su trečiųjų šalių turinio partneriais, jeigu pageidaujate tam tikro turinio, kurį teikia tokie turinio partneriai (pvz., kad galėtume jums suteikti „GoLive“ IPTV paslaugą, su juridiniu subjektu, teikiančiu „GoLive“ paslaugą, galime pasidalyti jūsų TV kliento tipu, IP adresu ir kalbos nuostatomis).\n•Apimtimi, kuria esate sutikę dalyti konkrečiais asmens duomenimis su minėtomis trečiosiomis šalimis, Įmonė dalysis jūsų asmens duomenimis su tokiomis trečiosiomis šalimis.\n•Su užsakomųjų paslaugų teikėjais kaip duomenų tvarkytojais, padedančiais Įmonei teikti Paslaugas.\nĮmonė dalijasi jūsų asmens duomenimis su kitomis trečiosiomis šalimis tik tada, jeigu Įmonė tai daryti yra įpareigota teisinių reikalavimų (pvz., teismo ar baudžiamojo persekiojimo institucijų pavedimu), jūs sutikote su atitinkamu dalijimusi arba dalijimasis yra kitais atžvilgiais teisėtas pagal galiojančius įstatymus.\n6. Šalys, kuriose bus tvarkomi jūsų duomenys\nĮmonė ir (arba) kai kurie jūsų asmens duomenų gavėjai, nurodyti anksčiau, gali būti įsikūrę ne Europos ekonominėje erdvėje (t. y. šiose šalyse: Kinijos Liaudies Respublikoje, Jungtinėse Amerikos Valstijose). Todėl jūsų asmens duomenys gali būti tvarkomi šalyse, kurios nėra pripažintos kaip suteikiančios adekvatų asmens duomenų apsaugos lygį pagal 1995 m. spalio 24 d. Europos Parlamento ir Tarybos direktyvą 95/46/EB dėl asmenų apsaugos tvarkant asmens duomenis ir dėl laisvo tokių duomenų judėjimo.\n7. Jūsų teisės\nGalite susisiekti su Įmone, jei norite gauti informacijos apie savo asmens duomenis, kuriuos tvarko Įmonė, ir (arba) pasinaudoti savo statutinėmis teisėmis dėl teisės gauti prieigą prie duomenų, jų ištaisymo, pašalinimo ir blokavimo ir (arba) paprieštarauti jūsų duomenų tvarkymui rinkodaros ir (arba) rinkos ar nuomonės tyrimų tikslais.\n8. Privatumo politikos pakeitimai\nKad pagerintume savo Paslaugas, mums gali tekti atlikti šios privatumo politikos pakeitimų, pvz., įdiegus naujų technologijų arba pradėjus teikti naujas paslaugas. Pasiliekame teisę bet kuriuo metu keisti arba papildyti šią privatumo politiką.\n9. Kontaktinė informacija\nJei turite klausimų apie privatumo politiką arba norėtumėte pasiskųsti apie tai, kaip mes tvarkome jūsų asmens duomenis, susisiekite su mumis naudodami šią kontaktinę informaciją:\nEl. paštas: FRsupport@tcl.com\nVersija: 1.0\n"];
var privacyPolicyTerms = [
    "Įjungti išmaniosios TV paslaugą",
    "Aš sutinku, kad būtų renkami, apdorojami ir naudojami mano įrenginio paleidimo laiko, DTV kanalų sąrašo, mėgstamų kanalų sąrašo, apsilankymo laiko ir peržiūrėtų kanalų duomenys vartotojo įpročių analizės tikslu, siekiant pagerinti paslaugas ir (arba) analizuoti, kiek prisijungusių vartotojų turi TCL per dieną / mėnesį / metus ir dalytis šia informacija su TV stotimis.",
    "Įjungti rekomendacijos paslaugą.",
    "Įjungti antrojo ekrano programą mobiliesiems įrenginiams",
    "Įjungti automatinį programinės įrangos naujinimą.",
    "Įjungti „FreeviewPlay“ paslaugą"
];
var privacyPolicyTips = [
    "Bus išjungtos visos išmaniosios televizijos paslaugos.",
    "Bus išjungta HbbTV paslauga, kuri teikiama televizijos kanalais, kai naudojamas įmontuotas imtuvas.",
    "Bus išjungta turinio ir televizijos programų rekomendavimo paslauga.",
    "Bus išjungtas antrojo ekrano taikymas.",
    "Televizorius netikrins automatiškai, ar yra programinės įrangos naujinių ir naujų funkcijų.",
    "Bus išjungtas „FreeviewPlay“ turinys."
];
var privacyPolicyRemind = "Pažymėkite atitinkamą žymės langelį per Parametrai.";
var set = "Nustatyti";
var copyShopDemoTips = ["Prijungta prie USB, ar norite nukopijuoti vaizdo įrašą į „flash“ atmintį?","Kopijuoti vaizdo įrašą į „flash“ atmintį","Vaizdo įrašas sėkmingai nukopijuotas!","Vaizdo įrašo kopijavimo klaida!"];
var dataDeletionWords = ["Pašalinti vidiniuose serveriuose išmaniosios televizijos paslaugos duomenis.","Pastabos: kai varnele pažymėsite šį elementą, duomenys, susiję su jūsų išmaniosios televizijos naudojimu, bus pašalinti per vieną mėnesį. Atkreipkite dėmesį, kad pašalinimas neturi įtakos vietiniams duomenims, kurie saugomi jūsų televizoriuje.","Daugiau neteikti duomenų išmaniosios televizijos serveriui.","Pastabos:  kai varnele pažymėsite šį elementą, daugiau nebus perduodami į serverį jūsų duomenys, susiję su išmaniosios televizijos paslaugų naudojimu. Jūsų televizorius nebegaus rekomenduojamų paslaugų.","Jei norite išsamiau sužinoti, apsilankykite mūsų žiniatinklyje www.tcl.eu"];
var miracastWords = ["Belaidis ryšys","Dubliuoti televizoriuje „Android“ telefoną","Spragtelėkite norėdami prisijungti","Ši funkcija prieinama tik su „Android“ telefonu"];
var miracastTips = ["Jungimosi veiksmai","Atidarykite sistemos nustatymus","Daugiau prisijungimo būdų \n / Kiti belaidžiai ryšiai","Pasirinkite belaidį ekraną","Spragtelėkite norėdami prisijungti \n Palaukite, kol suras"];
var termsAndConditions = ["\nTurinys ir paslaugos (kartu – Licencijuota programinė įranga), teikiamos jums naudojantis šiuo TV imtuvu (toliau – Įrenginys), yra licencijuojamos, kad galėtumėte jomis naudotis pagal šias sąlygas ir nuostatas, bet ne parduodamos. Licencijuotos programinės įrangos teikėjai (kiekvienas vadinamas „Programinės įrangos teikėju“) pasilieka visas teises, kurios nėra aiškiai suteiktos jums.\n\n1.	Licencijos aprėptis\n\nLicencijuotos programinės įrangos licencija, kurią suteikė atitinkamas Programinės įrangos teikėjas, apsiriboja neperleidžiama licencija, leidžiančia naudoti Licencijuotą programinę įrangą Įrenginyje, kuris jums priklauso arba kurį valdote. Negalite platinti ar padaryti Licencijuotą programinę įrangą pasiekiamą tinkle, kur ji vienu metu galėtų būti naudojama kelių įrenginių. Negalite nuomoti, skolinti, parduoti, platinti ar sublicencijuoti Licencijuotos programinės įrangos. \n\nVisa Licencijuota programinė įranga ir visas jos turinys, pasiekiamas naudojant šį Įrenginį, priklauso Programinės įrangos teikėjui ir yra saugomas galiojančių intelektinės nuosavybės įstatymų. Išskyrus atvejus, kai tai leidžia galiojantys įstatymai, negalite modifikuoti, kopijuoti, dekompiliuoti, taikyti apgrąžos inžinerijos, ardyti, pakartotinai publikuoti, nusiųsti, skelbti, perduoti, išversti Licencijuotos programinės įrangos arba jos naujinimų arba kitų dalių, bandyti gauti jos išeitinį kodą, kurti jos išvestinius kūrinius ar kitaip ja piktnaudžiauti. Jei pažeisite šį apribojimą, jūs galite būti persekiojami baudžiamąja tvarka ir gali būti jūsų reikalaujama kompensuoti padarytą žalą. Licencijos sąlygos bus taikomos visiems naujinimams, kuriuos teikia Programinės įrangos teikėjas, ir kurie pakeičia ir (arba) papildo originalią Licencijuotą programinę įrangą, išskyrus atvejus, kai toks naujinimas teikiamas kartu su atskira licencija; tokiu atveju bus taikomos tos licencijos sąlygos. Esate visiškai atsakingas už visas Licencijuotos programinės įrangos naujinimo išlaidas (jei tokių yra).\n\n2.	Trečiųjų šalių medžiaga\n\nLicencijuota programinė įranga gali suteikti prieigą prie Programinės įrangos teikėjo ir trečiųjų šalių paslaugų bei internetinių svetainių (kartu – Paslaugos). Naudodamiesi bet kuriomis Paslaugomis, galite susidurti su turiniu, kuris gali būti laikomas įžeidžiančiu, nepadoriu ar nepageidaujamu, kuris gali būti nustatytas kaip naudojantis intymią kalbą, o atlikus bet kokią iešką arba įvedus tam tikrą URL, gali būti tyčia arba netyčia sugeneruoti saitai arba nuorodos į nepageidaujamą medžiagą. Nepaisant to, šio Įrenginio gamintojas (toliau – Gamintojas) ir Programinės įrangos teikėjas neturi jokios atsakomybės jums už turinį, kuris gali būti pripažintas įžeidžiančiu, nepadoriu ar nepageidaujamu. \n\nGamintojas neatsako už turinio tikrinimą ar vertinimą, tikslumą, išsamumą, savalaikiškumą, galiojimą, autorių teisių laikymąsi, teisėtumą, kokybę ar bet kokį kitą tokių Paslaugų aspektą. Gamintojas negarantuoja, nepatvirtina, neprisiima ir neturi jokios atsakomybės ar įsipareigojimų jums ar bet kuriam kitam asmeniui dėl bet kokių Paslaugų. \n\nNaudojantis Paslaugomis gali būti pateikiamas savininko turinys, informacija ir medžiaga (kartu – „Trečiųjų šalių medžiaga“), kurie yra saugomi pagal taikytinus intelektinės nuosavybės ir kitus įstatymus, ir jūs negalite naudoti tokios Trečiųjų šalių medžiagos jokiu būdu, išskyrus naudojimą, kurį leidžia Paslaugos. Išskyrus atvejus, kai tai leidžia galiojantys įstatymai, negalite atkurti, modifikuoti, nuomoti, skolinti, parduoti, platinti Trečiųjų šalių medžiagos ar kurti jokių išvestinių kūrinių ir negalite piktnaudžiauti Paslaugomis jokiu neleidžiamu būdu. Negalite naudotis Paslaugomis siekdami priekabiauti, užgaulioti, persekioti, grasinti, šmeižti ar kitaip pažeisti ar peržengti kokios nors šalies teises, o Gamintojas neprisiima jokios atsakomybės už tokį jūsų naudojimą ir už bet kokius priekabiavimus, grasinimus, šmeižtą, įžeidžiančias arba neteisėtas žinutes ar pranešimus, kuriuos galite gauti naudodamiesi Paslaugomis. \n\n3.	Be jokios garantijos\n\nVisa Licencijuota programinė įranga ir Paslaugos teikiamos tokios, kokios yra, ir kai pasiekiamos, be jokios garantijos, tiesioginės ar netiesioginės. Gamintojas aiškiai atsisako visų garantijų ir sąlygų, susijusių su Licencijuota programine įranga ir Paslaugomis, tiesioginių ir netiesioginių garantijų, įskaitant (bet neapsiribojant) tinkamumo prekybai, patenkinamos kokybės, tinkamumo konkrečiam tikslui, tikslumo, tylaus naudojimo, ir trečiųjų šalių teisių nepažeidimo garantijas. Gamintojas negarantuoja jokios Licencijuotos programinės įrangos arba Paslaugos, prieinamos naudojant šį Įrenginį, tikslumo, galiojimo, savalaikiškumo arba išsamumo ir negarantuoja, kad Įrenginys, Licencijuota programinė įranga arba Paslaugos atitiks jūsų reikalavimus arba kad Licencijuotos programinės įrangos ar Paslaugų veikimas bus nepertraukiamas arba be klaidų, arba kad Licencijuotos programinės įrangos ar Paslaugų defektai bus ištaisyti. Jei paaiškėja, kad Licencijuota programinė įranga arba Paslaugos turi defektų, jūs prisiimate visas išlaidas, susijusias su būtinuoju aptarnavimu, taisymu ar koregavimu.\n\nLicencijuota programinė įranga ir Paslaugos gali būti pakeistos, laikinai sustabdytos, pašalintos, nutrauktos arba pertrauktos arba bet kuriuo metu be perspėjimo gali būti sustabdyta prieiga, o Gamintojas nedeklaruoja ir negarantuoja, kad bet koks turinys arba paslauga, įtraukta į Licencijuotą programinę įrangą ir Paslaugas, liks prieinami bet kuriuo laikotarpiu. Tokį turinį ir paslaugas perduoda trečiosios šalys naudodamos tinklus ir perdavimo priemones, kurių Gamintojas nekontroliuoja. Neapsiribojant pirmiau nurodyta bendro pobūdžio informacija, Gamintojas aiškiai atsisako bet kokios atsakomybės ar įsipareigojimų dėl bet kokio paslaugų, prieinamų naudojant šį Įrenginį, pakeitimo, pertraukimo, išjungimo, pašalinimo ar laikino sustabdymo. Programinės įrangos teikėjas ir kiti Paslaugų teikėjai pasilieka teisę be įspėjimo keisti, laikinai sustabdyti, pašalinti ir išjungti prieigą prie bet kokios Licencijuotos programinės įrangos arba Paslaugų. Gamintojas taip pat gali apriboti naudojimą arba prieigą prie tam tikros Licencijuotos programinės įrangos arba Paslaugų nepriklausomai nuo situacijos ir be įspėjimo ar atsakomybės.\n\nGamintojas neteikia klientų aptarnavimo, susijusio su Licencijuota programine įranga ir Paslaugomis, paslaugų. Bet koks klausimas ar paslaugos užklausa, susijusi su Licencijuota programine įranga ir Paslaugomis, turi būti pateikta tiesiogiai atitinkamam teikėjui.\n\n4.	Informacijos rinkimas ir naudojimas\n\nGamintojas, Programinės įrangos teikėjai ir Paslaugų teikėjai gali rinkti ir naudoti techninius duomenis ir susijusią informaciją, įskaitant (bet neapsiribojant) techninę informaciją apie šį Įrenginį, sistemą ir taikomąsias programas, ir išorinius įrenginius, kad būtų sudarytos sąlygos jums teikti programinės įrangos naujinius, produkto palaikymą ir kitas paslaugas (jei tokių yra), susijusias su Įrenginiu ir Licencijuota programine įranga. Gamintojas, Programinės įrangos teikėjai ir Paslaugų teikėjai gali naudoti tokią informaciją, kol ji yra tokios formos, kad nebūtų galima nustatyti jūsų tapatybės, kad galėtų gerinti savo produktus arba jums teikti paslaugas arba technologijas. Norėdami gauti daugiau informacijos apie informacijos rinkimą ir naudojimą, sužinokite apie mūsų privatumo politiką: http://www.tcl.eu/en/.\n\n5.	Tam tikrų funkcijų nebuvimas\n\nDėl Programinės įrangos teikėjo apribojimų, tam tikros funkcijos, programos ir paslaugos gali būti nepasiekiamos šiame Įrenginyje (įskaitant jo išorinius įrenginius) arba visose teritorijose. Kad veiktų kai kurios šio Įrenginio funkcijos, gali reikėti papildomų išorinių įrenginių arba narystės mokesčių, kurie parduodami atskirai.\n\n6.	Įsipareigojimų ir atsakomybės ribos\n\nTiek, kiek tai nedraudžia galiojantys įstatymai, jokiomis aplinkybėmis, įskaitant aplaidumą, Gamintojas negali būti laikomas atsakingu, nesvarbu, ar ieškinys grindžiamas sutartimi, ar deliktu, už jokius tiesioginius, netiesioginius, atsitiktinius, specialiuosius ar pasekminius nuostolius, padarytus dėl bet kokios informacijos, esančios bet kokioje Licencijuotoje programinėje įrangoje arba bet kokioje Paslaugoje, arba jums ar bet kokiai trečiajai šaliai naudojant bet kokią Licencijuotą programinę įrangą, bet kokias Paslaugas arba Įrenginį, net jei įspėjama apie tokių nuostolių galimybę.\n\nGamintojas bus laikomas atsakingu tik tyčinio nusižengimo ir didelio aplaidumo atvejais."];
var privacyNotice = ["\nTvarkydami jūsų asmens duomenis, gerbiame jūsų privatumą. Šiame privatumo pranešime nurodomas subjektas, atsakingas už jūsų asmens duomenų, surinktų jums naudojantis išmaniųjų televizorių paslaugomis (toliau – Paslaugos), tvarkymą, taip pat nurodoma, kokio tipo jūsų asmens duomenis mes renkame, kokiu tikslu juos renkame, ir jūsų teises, susijusias su mūsų taikoma asmens duomenų naudojimo tvarka. \n\n1.	Duomenų valdytojas ir atstovas Europos Sąjungoje\n\nAsmens duomenų, surinktų jums naudojantis Paslaugomis, rinkimą, tvarkymą ir naudojimą vykdo „Shenzhen TCL New Technology Co., Ltd.“, No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, Kinija (toliau – Įmonė). Mūsų kontaktiniai duomenys ir mūsų atstovo kontaktiniai duomenys Europos Sąjungoje pateikiami 12 skyriuje. Tačiau atkreipkite dėmesį, kad mes nesame atsakingi už visą toliau nurodytą duomenų tvarkymo veiklą. Nepaisant to, mes įtraukėme atitinkamos veiklos aprašymą į savo Privatumo pranešimą, nes šis duomenų tvarkymas yra susijęs su jūsų naudojimusi išmaniųjų televizorių paslaugomis.\n\n2.	Sutikimas dėl duomenų tvarkymo\n\nKai kurių duomenų tvarkymo veiksmų mes negalime vykdyti be jūsų sutikimo, pvz., naudoti jūsų asmens duomenis siekiant tobulinti Paslaugas.\n\nSutikimas yra savanoriškas, o nesutikę vis tiek galite naudotis paslaugomis. Tačiau galite matyti turinį, kuris nėra parengtas pritaikius jūsų nustatytoms pirmenybėms. Neatsižvelgiant į jūsų sutikimą, mes pasiliekame teisę tvarkyti jūsų asmens duomenis tiek, kiek tai leidžia galiojantys įstatymai.\n\nSavo sutikimą galite bet kada atšaukti. Sutikimo atšaukimas neturi įtakos duomenų tvarkymo, vykdyto remiantis sutikimu prieš jį atšaukiant, teisėtumui. Norėdami atšaukti savo sutikimą ir (arba) nesutikti (žr. 10 skyrių ir priedą „Jūsų teisės“ apie jūsų teises nesutikti), atitinkamai pakeiskite savo išmaniojo televizoriaus privatumo nuostatas.\n\n3.	Konkrečios asmens duomenų kategorijos\n\nMes tvarkome būtent šias duomenų kategorijas:\n\nĮrenginio ID: Jūsų išmaniajame televizoriuje yra išsaugotas nekintamas unikalus numeris, kuris mums suteikia galimybę identifikuoti ir nustatyti išmaniojo televizoriaus tapatybę, kai naudojatės Paslaugomis. Šis numeris vadinamas įrenginio ID. \n\nIP adresas ir MAC adresas: Jungiantis prie interneto, jūsų išmaniajam televizoriui bus priskirtas IP adresas. Jeigu išmanusis televizorius yra neprijungtas prie maršrutizatoriaus (pvz., prijungtas prie vietinio namų tinklo arba vietinio WLAN), mes galime nuspręsti tvarkyti tokio maršrutizatoriaus IP adresą. MAC adresas yra unikalus numeris, priskirtas kiekvienai jūsų išmaniojo televizoriaus tinklo sąsajai. \n\nInformacija apie konkretų įrenginį: Išmaniajame televizoriuje saugoma tam tikra informacija apie šį įrenginį ir jo konfigūraciją. Ši informacija apima išmaniojo televizoriaus tipą, išmaniojo televizoriaus operacinės sistemos versiją, jo skiriamąją gebą, projekto ID (t. y. informaciją apie konfigūracijos failus), naudotojo agentą, naršyklės pavadinimą, naršyklės versiją bei kalbą ir šalį, nustatytą išmaniajame televizoriuje. \n\nŠią informaciją naudosime mes ir ji bus pateikta mūsų paslaugų partneriui ir turinio partneriams toliau aprašytais tikslais.\n\n4.	Tikslai ir teisiniai pagrindai, kuriais mes tvarkome ir (arba) naudojame jūsų asmens duomenis\n\nTikslai ir teisiniai pagrindai, kuriais mes tvarkome jūsų asmens duomenis, yra aprašyti toliau. Kadangi sutartiniai tikslai yra toliau paminėti kaip teisinis pagrindas, mes negalėsime suteikti jums Paslaugų, jei nepateiksite mums atitinkamų duomenų. Kadangi jūsų sutikimas yra paminėtas kaip teisinis pagrindas, galite duoti savo sutikimą arba jo atsisakyti. Jeigu neduosite savo sutikimo, mes netvarkysime jūsų asmens duomenų nurodytiems tikslams.\n\n•	Paslaugų teikimas: Naudojame jūsų išmaniojo televizoriaus IP adresą ir MAC adresą, įrenginio ID, operacinės sistemos versiją, išmaniojo televizoriaus kliento tipą ir skiriamąją gebą, projekto ID (t. y. informaciją apie konfigūracijos failus), jūsų DTV kanalų sąrašą, peržiūrėtus kanalus, laiko juostą, šalies ir kalbos parametrus, kad galėtume suteikti jūsų išmaniajam televizoriui prieigą prie Paslaugų ir paslaugų, kurias teikia turinio partneriai. Tikslai apima (bet tuo neapsiribojant) paslaugų teikimą jums pagal vietovę (pvz., orų prognozes), piktnaudžiavimo klausimų tvarkymą, saugumo incidentų valdymą, Paslaugų prieinamumo stebėseną ir atsarginių paslaugų teikimą pagal naudotojo teikiamas pirmenybes.\n\nKai naudojatės Paslaugomis, jūsų išmanusis televizorius Paslaugoms internetu pateiks duomenų užklausą. Vykdant šias užklausas, jūsų IP adresas, kaip aprašyta aukščiau, bei kalba ir šalis, nustatyta jūsų išmaniajame televizoriuje, bus perduota mūsų paslaugų partneriui. Mūsų paslaugų partneris tvarkys atitinkamus duomenis pagal savo privatumo pranešimą.\n\nJūsų atitinkamo asmens duomenų tvarkymo teisinis pagrindas yra sutartiniai tikslai pagal Bendrojo duomenų apsaugos reglamento (toliau – BDAR) 6 straipsnio 1 dalies b punktą.\n\n•	Paslaugų nuostatos: Kaip dalis Paslaugų įprastų funkcinių galimybių, yra funkcija neautomatiniu būdu nustatyti tvarką, pagal kurią Paslaugos rodo programas. Mūsų paslaugų partneris išsaugos jūsų nurodytą tvarką ir kitas pirmenybes, kurias galite nustatyti naudodamiesi Paslaugomis. Ši informacija bus susieta su įrenginio ID.\n\nAtitinkamo jūsų asmens duomenų tvarkymo teisinis pagrindas yra sutartiniai tikslai pagal BDAR 6 straipsnio 1 dalies b punktą.\n\n•	Tapatumo nustatymas: Kiekvieną kartą prijungus išmanųjį televizorių prie interneto ir įjungus, išmanusis televizorius automatiškai prisijungia prie Paslaugų, kurias teikia mūsų paslaugų partneris. Tada nustatoma, kad jūsų išmaniajam televizoriui yra suteiktas patvirtinimas dėl prieigos prie Paslaugų. Tapatumo nustatymo tikslais, Paslaugos saugo vieną arba daugiau unikalių skaitinių identifikatorių, susijusių su jūsų išmaniuoju televizoriumi. Tapatumo nustatymo tikslais naudojame įrenginio ID ir MAC adresą. Tapatumo nustatymo tikslais mes taip pat suteikiame įrenginio ID atrinktiems turinio partneriams. Šie turinio partneriai naudoja įrenginio ID, kad nustatytų jūsų išmaniojo televizoriaus tapatumą ir suteiktų prieigą prie turinio partnerio teikiamo turinio.\n\nAtitinkamo jūsų asmens duomenų tvarkymo teisinis pagrindas yra sutartiniai tikslai pagal BDAR 6 straipsnio 1 dalies b punktą.\n\n•	Nuotolinė diagnostika: Kaip vieną iš savo Paslaugų, mes teikiame jums nuotolinės diagnostikos paslaugą. Todėl mes tvarkome įrenginio ID, įrenginio numerį, serijos numerį, MAC adresą ir klaidų žurnalus, klaidų kodus ir klaidų aprašymus, kuriuos pateikia sugedęs modulis (taikomoji programa, tarpinės programinės įrangos sistema).\n\nAtitinkamo jūsų asmens duomenų tvarkymo teisinis pagrindas yra sutartiniai tikslai pagal BDAR 6 straipsnio 1 dalies b punktą.\n\n•	Aptarnavimas po pardavimo: Pagal galiojančius įstatymus jums gali būti suteiktos garantijos ar panašios teisės į aptarnavimą po pardavimo. Įmonė „TCL Europe“, 9-15 rue Rouget de L'Isle-92130 Issy-les-Moulineaux, Prancūzija, yra atsakinga už garantinių reikalavimų ir kitų prašymų dėl aptarnavimo po pardavimo ir su juo susijusių asmens duomenų tvarkymą. Tai yra aptarnavimo po pardavimo paslaugų teikimo tikslais įmonė „TCL Europe“ veikia kaip duomenų valdytojas ir mes neatsakome už atitinkamą jūsų asmens duomenų tvarkymą.\n\nJums paprašius suteikti atitinkamas paslaugas po pardavimo, mes, norėdami jas suteikti, galime paprašyti jūsų nurodyti savo vardą, el. pašto adresą, telefono numerį, prašymą suteikti paslaugą ir pašto adresą. Ši informacija taip pat gali būti surinkta per mūsų perpardavėjų arba įgaliotųjų paslaugų teikėjų aptarnavimo po pardavimo partnerius, jeigu kreipsitės į juos dėl paslaugų. Jei norite gauti daugiau informacijos apie asmens duomenų apsaugą, susijusią su paslaugomis po pardavimo, galite susisiekti su įmone „TCL Europe“ naudodamiesi 12 skyriuje pateikta kontaktine informacija.\n\nAtitinkamo tvarkymo teisinis pagrindas yra pareiga laikytis teisinių įsipareigojimų pagal BDAR 6 straipsnio 1 dalies c punktą.\n\n•	„T-Launcher“: „T-Launcher“ yra pagrindinis išmaniosios televizijos puslapis, veikiantis „Linux“ operacinės sistemos pagrindu (apie „Android“ operacinės sistemos naudojimą žr. toliau) ir suteikia galimybę pasirinkti tam tikrą turinį.\n\nJūsų asmens duomenų, reikalingų naudoti „T-Launcher“, tvarkymo teisinis pagrindas yra sutartiniai tikslai pagal BDAR 6 straipsnio 1 dalies b punktą.\n\nAtsižvelgdami į jūsų išankstinį sutikimą, mes taip pat stebėsime bei kontroliuosime „T-Launcher“ naudojimą, t. y.:\n	Pradėjus naudoti „T-Launcher“, mes užregistruosime laiką, kada bus įeita į ir išeita iš „T-Launcher“.\n	Paleidus vaizdo įrašą iš „T-Launcher“, mes užregistruosime vaizdo įrašo pavadinimą ir trukmę (netaikoma „Netflix“, „YouTube“ ar bet kuriai kitai paslaugai, teikiamai trečiosios šalies).\n	Įėjus į puslapį arba išėjus iš jo, mes užregistruosime buvimo tame puslapyje laiką.\n	Pastūmus žymeklį iš vienos vietos į kitą arba įėjus į taikomąją programą, mes užregistruosime šį įvykį.\n	Įdiegus, pašalinus ar atnaujinus taikomąsias programas, mes užregistruosime šiuos įvykius, įskaitant taikomosios programos pavadinimą.\n\nŠią informaciją mes renkame daugiausia siekdami atlikti didelio duomenų kiekio analizę tam, kad būtų galima tobulinti produktus ir naudotojams teikti geresnės kokybės turinio paslaugas.\n\nJūsų asmens duomenų tvarkymo dėl „T-Launcher“ naudojimo stebėjimo ir kontrolės teisinis pagrindas yra jūsų sutikimas pagal BDAR 6 straipsnio 1 dalies a punktą.\n\nJeigu įsigijote „Android“ televizorių ir naudojate „Google“ teikiamą „Android“ operacinę sistemą, jūsų asmens duomenis tvarkys „Google“ ir mes neatsakome už tokį tvarkymą. Informacijos apie susijusį jūsų duomenų tvarkymą ir atitinkamas teises rasite „Google“ privatumo pranešime.\n\n•	„T-Cast“: „T-Cast“ suteikia jums galimybę valdyti savo televizorių telefonu ir televizoriuje bendrinti vaizdo įrašus, muzikos įrašus ir nuotraukas, saugomas jūsų išmaniajame telefone. „T-Cast“ taip pat suteikia galimybę jūsų televizoriuje veidrodiniu principu rodyti (atspindėti) jūsų išmanųjį telefoną.\n\nTaikomoji programa atsisiunčiama ir naudojama savanoriškai. Atsisiuntus ir naudojant taikomąją programą, mes tvarkysime MAC adresą, kad būtų galima apskaičiuoti, kiek „T-Cast“ versijų buvo naudojama rinkoje. To reikia, kad būtų galima jums pasiūlyti šią paslaugą. Jeigu naudosite mūsų antrojo ekrano funkciją, mes rinksime ir savo serveriuose tvarkysime duomenis apie valdiklius, kuriuos suaktyvinsite taikomojoje programoje, šalies bei kalbos nustatymus, DTV kanalų sąrašą, mėgstamų kanalų sąrašus, tvarkaraščių sąrašus, įrenginio ID, esamą kanalą, protokolo versiją ir išmaniojo televizoriaus IP adresą. Tada mūsų serveriai valdys bei kontroliuos jūsų išmanųjį televizorių pagal jūsų taikomosios programos nurodymus.\n\nAtitinkamo jūsų asmens duomenų tvarkymo teisinis pagrindas yra sutartiniai tikslai pagal BDAR 6 straipsnio 1 dalies b punktą.\n\n•	Programinės įrangos atnaujinimai: Programinės įrangos atnaujinimai yra Paslaugų dalis. Taigi kiekvieną kartą įjungus jūsų išmanųjį televizorių, jis suteiks mums IP adresą, įrenginio ID, įrenginio numerį, programinės įrangos versiją, jūsų išmaniojo televizoriaus kliento tipą, projekto ID (t. y. konfigūracijos failus), naudotojo ID ir serijos numerį, kad būtų galima sužinoti, ar yra programinės įrangos naujinių, pasiūlyti juos jums bei pateikti tinkamus programinės įrangos atnaujinimus.\n\nAtitinkamo jūsų asmens duomenų tvarkymo teisinis pagrindas yra sutartiniai tikslai pagal BDAR 6 straipsnio 1 dalies b punktą.\n\n•	Teisės aktų vykdymas: Mūsų gali būti reikalaujama pateikti duomenis kompetentingoms teisėsaugos institucijoms arba teismams. Jei mes tai padarysime, tai atliksime tik pagal privalomą teisinę priemonę, pvz., arešto orderį ar teismo nurodymą, kuri mus įpareigotų bendradarbiauti su atitinkamomis institucijomis.\n\nAtitinkamo duomenų tvarkymo teisinis pagrindas yra mūsų pareiga laikytis teisinių įsipareigojimų pagal BDAR 6 straipsnio 1 dalies c punktą.\n\nNaudotis Paslaugomis galima naudojant slapyvardžius, išskyrus atvejus, kai konkrečios paslaugos reikalauja naudoti vardą ir (arba) el. pašto adresą.\n\n5.	Vaikų iki 16 metų privatumas ir saugumas\n\nMes suprantame, kaip svarbu imtis papildomų atsargumo priemonių, kad būtų apsaugotas mūsų Paslaugomis besinaudojančių vaikų privatumas ir saugumas. Vaikams iki 16 metų ar, atitinkamoje jurisdikcijoje, lygiaverčio minimalaus amžiaus nepilnamečiams neleidžiama be patvirtinto tėvų sutikimo pateikti savo asmeninės informacijos per televizorių arba kai jie kreipiasi dėl aptarnavimo po pardavimo.\n\nKadangi mes niekada nerenkame informacijos apie naudotojų gimimo datą, negalime nustatyti naudotojų amžiaus. Tačiau sužinoję, jog surinkome vaiko iki 16 metų arba, priklausomai nuo jurisdikcijos, lygiaverčio minimalaus amžiaus nepilnamečio asmens duomenis neatsižvelgdami į pirmiau nurodytas aplinkybes, mes imsimės veiksmų kuo greičiau pašalinti tokią informaciją.\n\n6.	Trečiųjų šalių taikomosios programos\n\nJūsų išmaniajame televizoriuje yra galimybė naudoti trečiųjų šalių teikiamas taikomąsias programas, pvz., „Netflix“, „YouTube“ arba „HbbTV“ (hibridinio transliavimo taikant plačiajuostę technologiją („raudonų mygtukų“) paslauga, kurią teikia televizijos transliuotojai). Galite atsisiųsti taikomąsias programas iš taikomųjų programų parduotuvės arba suaktyvinti trečiųjų šalių taikomąsias programas, kurios jau yra iš anksto įdiegtos jūsų įrenginyje. Iš anksto jūsų įrenginyje įdiegtos trečiųjų šalių taikomosios programos nerenka jūsų asmens duomenų be išankstinio leidimo. Pavyzdžiui, programėlė „Netflix“ jau yra iš anksto įdiegta įrenginyje, tačiau renka duomenis tik prisijungus prie „Netflix“ paskyros. „HbbTV“ renka duomenis tik tada, kai paspausdami tam skirtą mygtuką nuotolinio valdymo pulte duodate sutikimą duomenis rinkti.\n\nĮjungus trečiosios šalies taikomąją programą, jos teikėjas gali tvarkyti jūsų asmens duomenis. Mes neprisiimame atsakomybės už tokį tvarkymą. Informacijos apie susijusį jūsų asmens duomenų tvarkymą ir atitinkamas teises rasite trečiosios šalies taikomosios programos privatumo pranešime.\n\n7.	Gavėjų kategorijos\n\nJūsų asmens duomenimis, surinktais jums naudojantis Paslaugomis, mes dalijamės tik su trečiųjų šalių turinio partneriais, jei prašote tam tikro turinio, kurį teikia tokie turinio partneriai, arba su paslaugų teikėjais, kaip su duomenų tvarkytojais, padedančiais mums teikti Paslaugas.\n\nJūsų asmens duomenimis mes dalijamės su kitomis trečiosiomis šalimis tik tuo atveju, jei esame įpareigoti tai daryti pagal teisinius reikalavimus (pvz., teismams ar baudžiamojo persekiojimo institucijoms), jeigu jūs esate davę sutikimą dėl atitinkamo dalijimosi arba jei dalijimasis yra kitaip teisėtas pagal taikomus teisės aktus (įstatymus).\n\n8.	Šalys, kuriose bus tvarkomi jūsų duomenys\n\nMes ir (arba) kai kurie iš jūsų aukščiau nurodytų asmens duomenų gavėjų gali būti įsikūrę ne Europos ekonominėje erdvėje (pvz., Kinijos Liaudies Respublikoje arba Jungtinėse Amerikos Valstijose). Todėl jūsų asmens duomenys gali būti tvarkomi tose šalyse, kuriose duomenų apsaugos įstatymai gali numatyti kitokio lygio apsaugą, palyginti su jūsų jurisdikcijai priklausančiais įstatymais, ir kurie nėra pripažįstami kaip užtikrinantys tinkamą asmens duomenų apsaugos lygį pagal BDAR. Šalys, kurios pagal Europos duomenų apsaugos įstatymo nuostatas užtikrina tinkamą duomenų apsaugos lygį, yra šios: Andora, Argentina, Kanada, Šveicarija, Farerų salos, Gernsis, Izraelio Valstybė, Meno sala, Džersis, Naujoji Zelandija ir Urugvajaus Rytų Respublika. Gavėjai JAV gali būti iš dalies sertifikuoti pagal ES ir JAV „privatumo skydo“ sistemą ir tokiu būdu pripažįstami kaip užtikrinantys tinkamą duomenų apsaugos lygį pagal Europos duomenų apsaugos įstatymo nuostatas. \n\nJeigu reikės, mes įdiegsime tinkamas apsaugos priemones, susijusias su duomenų perdavimu gavėjams, esantiems už Europos Sąjungos ribų, kurie neužtikrina pakankamo duomenų apsaugos lygio. Atitinkamos priemonės kopijos galima paprašyti susisiekus su mumis, kaip nurodyta 12 skyriuje.\n\n9.	Saugojimo laikotarpis\n\nJūsų asmens duomenys bus saugomi, kol reikės jums teikti Paslaugos. Iš esmės tai reiškia, jog daugumą jūsų asmens duomenų mes saugosime vieną mėnesį. Nuotolinės diagnostikos ir aptarnavimo po pardavimo tikslais galime išsaugoti jūsų duomenis iki dešimties metų. Kai mums nebereikės naudoti jūsų asmens duomenų, kad laikytumės sutartinių ar įstatyminių įsipareigojimų, mes juos pašalinsime iš savo sistemų bei įrašų ir (arba) imsimės veiksmų juos tinkamai anonimizuoti tam, kad jūsų nebūtų galima pagal juos identifikuoti.\n\n10.	Jūsų teisės\n\nPagal taikomus duomenų apsaugos įstatymus, galite turėti teisę: pareikalauti prieigos prie jūsų asmens duomenų (naudotis savo asmens duomenimis), pareikalauti ištaisyti jūsų asmens duomenis; pareikalauti ištrinti jūsų asmens duomenis, pareikalauti apriboti jūsų asmens duomenų tvarkymą; pareikalauti duomenų perkeliamumo ir nesutikti dėl jūsų asmens duomenų tvarkymo. Atkreipiame dėmesį, kad šios minėtosios teisės gali būti ribojamos pagal taikomus nacionalinius duomenų apsaugos įstatymus. Daugiau informacijos apie šias teises rasite priede „Jūsų teisės“.\n\nJūs taip pat turite teisę pateikti skundą kompetentingai duomenų apsaugos priežiūros institucijai.\n\nNorėdami pasinaudoti savo teisėmis, susisiekite su mumis, kaip nurodyta 12 skyriuje.\n\n11.	Privatumo pranešimo pakeitimai\n\nSiekdami tobulinti savo Paslaugas, mes galime nuspręsti iš dalies pakeisti šį Privatumo pranešimą, pvz., įdiegiant naujas technologijas ar pradedant teikti naujas paslaugas. Mes pasiliekame teisę bet kuriuo metu pakeisti ar papildyti šį Privatumo pranešimą.\n\n12.	Kontaktinė informacija ir atstovas Europos Sąjungoje\n\nJei kiltų klausimų dėl Privatumo pranešimo arba norėtumėte pateikti skundą dėl to, kaip tvarkome jūsų asmens duomenis, susisiekite su mumis naudodamiesi šiais kontaktiniais duomenimis:\n\nKontaktinė forma: www.tcl.eu/privacy/support\n\nMūsų atstovas Europos Sąjungoje yra: Įmonė „TCL Europe“, kurios būstinė yra 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, Prancūzija. Su įmone „TCL Europe“ galite susisiekti pasinaudodami aukščiau nurodyta kontaktine forma.\n\nVersija: 2.0\n\nPriedas Jūsų teisės\n\na.	Teisė į prieigą (teisė naudotis): Galite turėti teisę gauti iš mūsų patvirtinimą, ar jūsų asmens duomenys tvarkomi, ir, jei taip, pareikalauti prieigos prie asmens duomenų (naudotis asmens duomenimis). Prieigos informacija, be kita ko, apima tvarkymo tikslus, atitinkamų asmens duomenų kategorijas ir gavėjus arba gavėjų, kuriems asmens duomenys buvo arba bus atskleisti, kategorijas. Tačiau tai nėra absoliuti teisė, ir kitų asmenų interesai gali apriboti jūsų teisę gauti prieigą prie duomenų (naudotis duomenimis).\n\nGalite turėti teisę gauti tvarkomų asmens duomenų kopiją. Dėl papildomų jūsų prašomų kopijų mes galime, remdamiesi administracinėmis išlaidomis, imti pagrįstą mokestį. \n\nb.	Teisė į ištaisymą: Galite turėti teisę gauti iš mūsų ištaisytus neteisingus (netikslius) jūsų asmens duomenis. Priklausomai nuo tvarkymo tikslų, galite turėti teisę pareikalauti, kad nepakankami asmens duomenys būtų galutinai surinkti, įskaitant papildomos suvestinės pateikimą.\n\nc.	Teisė ištrinti („teisė būti užmirštiems“): Tam tikromis aplinkybėmis galite turėti teisę pareikalauti, kad pašalintume jūsų asmens duomenis ir mes galime būti įpareigoti tokius asmens duomenis ištrinti. \n\nd.	Teisė į tvarkymo apribojimą: Tam tikromis aplinkybėmis galite turėti teisę pareikalauti apriboti jūsų asmens duomenų tvarkymą. Tokiu atveju atitinkami duomenys bus pažymėti ir mes galime juos tvarkyti tik tam tikrais tikslais.\n\ne.	Teisė į duomenų perkeliamumą: Tam tikromis aplinkybėmis galite turėti teisę gauti savo asmens duomenis, kuriuos esate mums pateikę, struktūrizuotu, dažniausiai naudojamu ir mašininiu būdu nuskaitomu formatu, ir galite turėti teisę perduoti šiuos duomenis kitam subjektui be kliūčių iš mūsų pusės.\n\nf.	Teisė nesutikti:\n\nTam tikromis aplinkybėmis, dėl susiklosčiusios konkrečios jūsų situacijos arba tais atvejais, kai asmens duomenys yra tvarkomi tiesioginės rinkodaros tikslais, galite turėti teisę bet kuriuo metu nesutikti, kad tvarkytume jūsų asmens duomenis ir mes galime būti priversti nebetvarkyti jūsų asmens duomenų.\n\nBe to, jei jūsų asmens duomenys yra tvarkomi tiesioginės rinkodaros tikslais, jūs turite teisę bet kuriuo metu nesutikti, kad jūsų asmens duomenys tokios rinkodaros tikslais būtų tvarkomi, įskaitant profiliavimą, kiek tai susiję su tokia tiesiogine rinkodara. Tokiu atveju mes nebetvarkysime jūsų asmens duomenų šiam tikslui."];
var cookieNotice = ["\nMes gerbiame jūsų privatumą naudojant mūsų pagamintus išmaniuosius televizorius bei mūsų teikiamas Paslaugas. Slapukus naudoja daugelis svetainių ir kitų interneto paslaugų, todėl jūsų išmanusis televizorius priims, saugos ir perduos slapukus, kad būtų užtikrinta, jog šios svetainės ir paslaugos veikia tinkamai. \n\nJums teikdami Paslaugas, mes nenaudojame slapukų. Tačiau trečiosios šalys (pvz., trečiosios šalies taikomųjų programų teikėjai) gali naudoti slapukus, kai jungsitės išmaniuoju televizoriumi, kad gautumėte prieigą prie jų teikiamų paslaugų. Šiame Slapukų pranešime gali būti pateikta tik ribota informacija apie slapukus, kuriuos gali pateikti trečiosios šalys. Kad gautumėte informacijos apie trečiųjų šalių naudojamus slapukus ir jų funkcijas, mes nukreipiame jus į atitinkamus tokių trečiųjų šalių slapukų pranešimus. Tačiau šiame Slapukų pranešime mes pateikiame bendrą aprašymą apie tai, kokie slapukai gali būti nustatyti jūsų išmaniajame televizoriuje ir kaip juos valdyti.\n\n1.	Kas yra slapukas?\n\nSlapukai yra maži teksto failai, kurie gali būti nustatomi jūsų išmaniajame televizoriuje. Kai pasiekiama svetainė arba TV stoties raudonojo mygtuko paslauga, svetainė arba paslauga gali saugoti slapuką išmaniajame televizoriuje. Vėliau pasiekiant šias svetaines arba paslaugas, jūsų išmaniajame televizoriuje esantis slapukas nusiųs informaciją šaliai, kuri nustatė slapuką. Slapukai yra visiškai įprasti ir naudojami daugelio svetainių ir paslaugų. Kiekviename slapuke paprastai yra domeno, iš kurio gautas slapukas, vardas, slapuko naudojimo laikas ir vertė (paprastai unikalus numeris). Išsamesnį paaiškinimą apie tai, kas yra slapukai ir kaip jie veikia, rasite apsilankę www.allaboutcookies.org.\n\nSlapukai gali būti skirstomi į funkcinius ir nefunkcinius. Funkciniai slapukai – tai slapukai, kurie būtinai turi būti naudojami tam, kad jums būtų teikiamos paslaugos. Nefunkciniai slapukai yra visi kiti slapukai.\n\n2.	Trečiųjų šalių internetinės svetainės\n\nKai per savo išmaniojo televizoriaus Paslaugas apsilankote trečiųjų šalių internetinėse svetainėse ar paslaugų puslapiuose, gali būti, kad tokios svetainės ar paslaugų puslapiai jūsų išmaniajam televizoriui pateiks slapukus ir kad tokios svetainės seks ir išsaugos jūsų interakcijas tokiose svetainėse. Mes nereikalaujame ir neskatiname tokios veiklos ir tokios informacijos nenaudosime. Daugiau informacijos apie tai, kaip tokios šalys naudoja slapukus, rasite atitinkamuose tokių internetinių svetainių ir paslaugų puslapių slapukų ir privatumo pranešimuose.\n\n3.	Slapukų pašalinimas\n\nJūsų išmaniojo televizoriaus naudotojo sąsaja suteikia galimybę iš išmaniojo televizoriaus pašalinti visus slapukus ir kitus vietinės naršyklės saugyklos elementus. Prieš parduodant ar atiduodant savo išmanųjį televizorių, labai patartina pašalinti visus slapukus ir vietoje saugomus parametrus.\n\nVersija: 2.0"];
var privacyPolicy = ["Jeigu norite naudotis mūsų išmaniųjų televizorių paslaugomis bei susijusiomis paslaugomis, varnele pažymėkite langelį (-ius) toliau. Naudojantis šiomis paslaugomis, būtina tvarkyti jūsų asmens duomenis pagal tvarką, aprašytą mūsų Privatumo pranešime: http://www.tcl.eu/en/","Įjungti išmaniojo televizoriaus paslaugą, išsaugoti paslaugos nuostatas bei automatinį išmaniojo televizoriaus tapatumo nustatymą. Panaikinus šias varneles, jums bus teikiama tik standartinė televizijos ir HDMI paslauga.","Įjungti automatinį programinės įrangos naujinimą. Varnele pažymėkite langelį, kad jūsų gaminio programinė įranga būtų nuolatos atnaujinama ir įranga kuo geriau veiktų.","(Programinės įrangos naujiniai yra svarbūs, kad televizorius tinkamai veiktų, nes naujiniais įdiegiamos naujos funkcijos, užtikrinamas stabilumas ir saugumas. Todėl mes rekomenduojame varnele pažymėti šį langelį.)","Jeigu sutinkate, kad mes tvarkytume jūsų asmens duomenis, taip pat, kad jie būtų naudojami toliau nurodytam tikslui, varnele pažymėkite šį langelį. Papildomos informacijos apie tai, kaip mes tvarkome jūsų asmens duomenis, rasite mūsų Privatumo pranešime: http://www.tcl.eu/en/","Sutinku, kad mano asmens duomenys būtų tvarkomi (pvz., įėjimo į „T-Launcher“ puslapį ir išėjimo iš jo laikas) siekiant tobulinti įmonės „TCL“ gaminius ir teikti geresnes paslaugas išmaniuosiuose televizoriuose."];
var termsFirTitle = ["Sąlygos ir nuostatai","Pareiškimas dėl privatumo.","Pranešimas apie slapukus"];
var termsSecTitle = ["Perskaitykite ir sutikite su nuostatais ir sąlygomis.","Perskaitykite ir sutikite su pareiškimu dėl privatumo.","Perskaitykite ir sutikite su pareiškimu dėl slapukų naudojimo."];
var tickall = "Viską pažymėti";
var tickremindWords = "Pažymėkite žymės langelius, antraip negalėsite naudotis išmaniosios televizijos paslauga.";