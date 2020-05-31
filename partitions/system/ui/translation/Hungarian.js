
var all_country 	= ["Ausztrália","Ausztria","Belgium","Bulgária","Horvátország","Cseh Köztársaság","Dánia","Finnország","Franciaország","Németország",
						"Görögország","Magyarország","Olaszország","Luxemburg","Hollandia","Norvégia","Lengyelország","Portugália","Románia","Oroszország",
						"Szerbia","Szlovénia","Spanyolország","Svédország","Svájc","Egyesült Királyság","Új-Zéland"," "/*Arab*/,"Észtország"," "/*Hebrew*/,
						"Lettország","Szlovákia","Törökország","Írország","Japan","Fülöp-szigetek","Thailand","Maldives","Uruguay","Peru",
    					"Argentina","Chile","Venezuela","Ecuador","Costa Rica","Paraguay","Bolivia","Belize","Nicaragua","Guatemala",
						"Kína","Taiwan","Brazil","Canada","Mexico","United States","South Korea","Romania","Vietnam"/*新添加的，底层结构体中没有*/,"Ukrajna"/*新添加的，底层结构体中没有*/,
    					"Iran","Iraq"," ","Kazakhstan","Uzbekistan"," ","Kyrgyzstan","Algeria","Egypt","Tunisia",
    					"Tanzania","Kenya","Pakistan","Indonesia","Kuwait","Saudi Arabia","Qatar","Israel","Lebanon","bahrain",
    					"Angola","Congo","India","Turkmenistan","Colombia","Mongolia","Bangladesh","Nepal","Sri Lanka","North Korea",
						"Moldova","Polynesia","EI Salvador"," ","Fiji","Liberia","Jordan","Myanmar","Ghana","Georgia",
    					"Armenia","Oman","yemen","Syria","Palestine","Afghanistan","Morocco","benin","IvoryCoast","Nigeria",
    					"Sudan","Ethiopia","Zambia"," ","South Africa","mozambique","Libya","Albánia","Belarus","Iceland",
						"Litvánia","Mauritius","Dubai","UAE","Tajikistan","Bengal","Bosznia-Hercegovina","Ciprus","Koszovó","Macedónia",
						"Málta","Montenegró","Cameroun","Singapore","Malaysia","NewCaledonia","Suriname","Jamaica","Curacao","Aruba",
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
				
var all_language 	= ["Cseh","*","Dán","*","*","Német","angol","spanyol ","Görög","francia ",
						"Horvát","*","Olasz","Magyar","Holland","Norvég","Lengyel","Portugál","Orosz","Román",
						"Szlovén","Szerb","Finn","Svéd","Bolgár","Szlovák","Chinese","*","Kelta","*",
						"Walesi","Arab","Irsk","Lett","*","Török","Észt","Holland"/*Netherlands*/,"koreai","*",
						"hindi","*","*","mandarin","kantoni","Maori","Eredeti audió"/*Qaa*/,"Nincs meghatározva"/*Undetermined*/,"*","Ismeretlen",
						"Nincs meghatározva","*","*","*","*","*","*","*","*","*",
						"*","*","*","Albán","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baszk","*","*",
						"*","*","*","*","*","*","*","Boszniai","*","*",
						"*","*","*","*","Hviterussisk","*","*","Katalán","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galíciai","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Izlandi","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","japán","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Litván",
						"*","*","*","*","*","*","*","Macedón","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romantikus","*","*","*","*",
						"*","*","*","Számi","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Teletext",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukrán","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Ki","Be"];
var okCancel		= ["OK","Mégse"];
var yesNo			= ["IGEN","NEM"];
var level			= ["Ki","Alacsony","Magas","Közepes"];
var manualAuto		= ["Manuális","Automatikus"];
var homeShop		= ["Kezdőlap","Üzlet"];
var picPreset		= ["Szabvány","Dinamikus","Természetes","Mozi","Személyes"];
var picColorTemp	= ["Hűvös","Normál","Meleg","Felhasználó"];
var pic3dNavig		= ["Manuális","Automatikus","Félautomatikus"];
var _3dOptions		= ["3D mód","3D-ből 2D","B-J kapcsoló","Mélységélesség"];
var pic3DMode       = ["Ki","2D-ből 3D","Egymás mellett","Fent és lent","Sorösszefésüléses"];
var picEcoOptions	= ["Energiatakarékos","Fényérzékelő","Helyi fényerőcsökk.","Kevert fényerő-szabályozás"];
var picGeoOptions	= ["Oldalarány","Vízszintes helyzet","Függőleges helyzet","Óra","Fázis"];//Geometry 无翻译
var picAdWhiteBal	= ["R erősítés","G erősítés","B erősítés","R kiegyenlítés","G kiegyenlítés","B kiegyenlítés"];
var souOptions		= ["Beprogramozott hangzás","Balansz","Hang késleltetés","SRS TSHD","Aut. hangerő-szab.",
						"SPDIF-típus","SPDIF késleltetés","A TV elhelyezése","Audio nyelv","Hangcsatorna",
						"Narráció","Mélyhangkiemelés","Dolby Digital Plus"];
var souSpdifType	= ["Automatikus"/*Dolby*/,"PCM","Ki"];
var colorSpace      = ["Automatikus","Natív","Felhasználó"];
var souPresetPara	= ["100Hz","500Hz","1.5KHz","5KHz","10KHz"];
var chOptions		= ["Csatornakeresés","Csatornalista","EPG","Csatornaszervező","Csatorna diagnosztika",
						"időeltolás","Felirat","Teletext","Csatornalista-típus"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Jelerősség","Jelminőség","Frekvencia (KHz) ","Szolg.azonosító","Hálózatazon.","Hálózat neve"];
var chScanOptions	= ["Ország/Régió","Tuner mód","Csatornakeresés","Keresés módosítása","Analóg man. keres.",
						["Kábel kézi keresés","Antenna kézi keresés","Műhold kézi hangolás"],"A műholdantenna beállítása","Kedvenc hálózat kiválasztása","Csatornalista törlés","LCN"];
var favNetDes		= "Kérjük, válassza ki a kedvenc hálózatát";
var tuner			= ["kábel","Antenna","Műhold"];//Satelite 无翻译
var passError		= "A jelszó hibás.\nKérjük, adja meg újra.";
var chType			= ["Analóg csatornák:","Digit. csatornák:"];
var chScanStatus	= ["Állapot: Keresés","Állapot: Keresés befejezve","Állapot: Keresés megszakítva","Állapot: Keresési hiba"];
var chScanPara		= ["Frekvencia (KHz) ","Moduláció","Szim.sebesség (Ksym/s)","Hálózatazon.","Rendszer",
						"Finomhangolás","Jelerősség","Jelminőség","Keresés mód","Csatorna azonosító"];
var chScanParaMHZ      = ["Frekvencia (MHz)"];
var chAtvManSys		= ["NY-EURÓPA","K-EURÓPA","Nagy-Britannia","Franciaország"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Automatikus"];
var chCleanDes		= "Megtisztítja a csatornalistát?";
var chDeletDes		= "Törölni akarja a csatornát?";
var chOperator		= ["Ziggo","UPC","Egyéb"];
var chScanType		= ["Digitális & Analóg","Digitális","Analóg"];
var chScanMode		= ["Teljes","Előre","Gyors"];
var bookingModes	= ["Felvétel","Emlékeztető"];
var dayName			= ["V","H","K","Sze","Cs","P","Szo"];
var monthName		= ["jan.", "febr.","márc.","ápr.","május","jún.","júl.","aug.","szept.","okt.","nov.","dec."];
var filter			= ["Filtar","Típus","Altípus"];
var chEpgFirstGenre	= ["Mozi","News","Show","Sport","Gyerekműsor","Zene","Művészet","Társadalmi","Oktatás","Szabadidő","SPECIÁLIS"];
var chEpgSecondGenre= [["Dráma","Krimi","Kaland","Sci-fi","Vígjáték","Szappanopera","Romantikus","Komoly","Erotikus"," "," "," "],
						["Aktuális kérdések","Időjárásjelentés","Hírmagazin","Dokumentumfilm","Vitaműsor"," "," "," "," "," "," "," "],
						["Show","Vetélkedő","Varieté","Beszélgető show"," "," "," "," "," "," "," "," "],
						["Sport","Különleges események","Sportmagazinok","Futball","Tenisz",
							"Csapatsportok","Atlétika","Motorsport","Vízi sport","Téli sport",
							"Lovaglás","Harcművészetek"],
						["Gyerekműsor","Bábfilm","Szórakoztató műsor 6-14 éveseknek","Szórakoztató műsor 10-16 éveseknek","Ismeretterjesztő","Rajzfilmek"," "," "," "," "," "," "," "],
						["Zene","Rock","Komoly","Népzene","Jazz","Zenei","balett"," "," "," "," "," "],
						["Művészet","Előadóművészet","Képzőművészet","Vallás","Populáris kultúra",
							"Irodalom","Film","Kísérleti","műsorsugárzás","Új média",
							"Művészeti magazinok","Divat"],
						["Társadalmi","magazinok","Gazdaság","Rendkívüli emberek"," "," "," "," "," "," "," "," "],
						["Oktatás","Természet","Technológia","Orvostudomány","Idegen tájak","Társadalomtudományok","Továbbtanulás","Nyelvek"," "," "," "," "],
						["Szabadidős tevékenységek","Utazás","Kézművesség","Motorozás","Fitnesz és egészség","Főzés","Hirdetés","Kertészkedés"," "," "," "," "],
						["Eredeti nyelv","Fekete-fehér","Nem publikált","Élő közvetítés"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Csatorna átugrása","Csat.rendez.","Csat.szerk.","Csatorna törlése","csatorna csereügylet","csatorna betét"];
var chEditPara 		= ["Hálózat neve","Csat.szám","Csat.név","Frekvencia","Színrendszer","Hangrendszer"];
var chSatTitles		= ["Műholdtípus","A műholdantenna beállítása","Műholdválasztás"];
var chSatEidtOptions= ["Műholdnév","Helyzet","LNB Hatalom","LNB frekvencia (MHz)","DiSEqC bemenet",
						"22 kHz-es hang","tone burst","Frekvencia (KHz) ","Szim.sebesség (Ksym/s)","Polarizáció",
						"Jelerősség","Jelminőség","Műholdállapot"];
var chSatAutoPromt	= [["Mind","Hálózat"],
						["Mind","Ingyenes"]];
var chSatAutoScanOptions=["Műholdválasztás","Keresés mód","Csatornák"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Egyetemes",];
var chSatDiSEqCInput= ["Letilt","A","B","C","D"];
var chSatTone22KHz	= ["Automatikus","Be","Ki"];
var chSatToneBurst	= ["Letilt","tone burst A","tone burst B"];
var chSatPolarization= ["Vízszintes","Függőleges"];
var chSatSetupOptions=["Antennatípus","Vevőegység","Sáv frekvencia"];
var chSatAntennaType= ["EgyKábel","Egyetemes"];
var chSatUserBands	= ["1. felhaszn. sáv","2. felhaszn. sáv","3. felhaszn. sáv","4. felhaszn. sáv","5. felhaszn. sáv","6. felhaszn. sáv","7. felhaszn. sáv","8. felhaszn. sáv"];
var chSatOthers		= ["Transzponder"];
var chSatSetupOthers= ["Meghatározott felhasználó"];
var pleaseSelectSat = "Kérjük, először válassza ki a műholdat!";
var subOptions		= ["Felirat","Digit. felir. nyelve","Digit. felir. nyelve 2","Felirat típusa"];
var ttxOptionsCon      = ["Oldalnyelv kódolása","Digit. teletext nyelve"];
var subType			= ["Normál","Csökk. hallókép."];
var netIntf     	= ["Ethernet ","Vezeték nélküli"];
var netConnDes		= ["A TV ellenőrzi a hálózati kapcsolatot.\nKérem, várjon",
						"A hálózati kapcsolódás ellenőrzése sikeres.",
						"A kapcsolódás ellenőrzése sikertelen."];
var netSsidError	= "Az SSID érvényes hossza 1~32 karakter. Kérjük, ellenőrizze az SSID-t.";
var netOthers		= ["PIN kód "];
var netWlessAutoDes	= ["Az OK-ra kattintás előtt ellenőrizze, hogy a következő PIN-kód telepítve van-e a hozzáférési pontra.",
						"Az OK megnyomása előtt 120 másodpercen belül nyomja meg a hozzáférési pont gombját."];
var netConnRemind	= ["A jelszó hibás.",
						"Kapcsolódás. Kérem, várjon!",
						"Kapcsolódás sikerült, IP-cím lekérve!",
						"Nincs kapcsolat",
						"A TV hozzáférési pontokat keres\nKérjük várjon",
						"Nem kapcsolódik vezeték nélküli eszköz a TV-hez!"];
var netWireIpOptions= ["IP-beállítás","Címtípus","IP-cím","Alhálózati maszk","Alapértelmezett átjáró","Elsődleges DNS","Másodlagos DNS"];
var netWireConnRemind= ["Írjon be egy 0 és 255 közötti értéket.",
						"Sikeres csatlakozás!",
						"Kérjük, érvényes címet adjon meg",
						"Sikeres csatlakozás!",
						"Kapcsolódás nem sikerült!",
						"Kapcsolódás. Kérem, várjon!",
						"Kérjük, 1-223 közti értéket adjon meg."];
var netFlixOptions	= ["Deaktivál","ESN","Netflix verzió"];
var netFlixDes	 	= ["Biztos deaktiválja?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Szoftverfrissítés";
var netUpdateDialogTitle = "Szoftverfrissítés";
var netBGDownloadTitle 	= "Letöltés";
var netUpdateLoadingPrompt= ["Frissítés keresése, kérjük, várjon!",
							"A szoftver frissítése folyamatban…Kérjük, várjon!",
							"A szoftver frissítése közben NE kapcsolja ki a TV-készüléket!",
                            "A szükséges szoftverfrissítés automatikusan töltődik a háttérben!"];
var netUpdatePrompt= ["Gratulálunk, szoftvere a legfrissebb verziójú!",
						"Van új szoftver, verziószáma XXXX. Letölti most? Hálózata állapotától függően lehet, hogy várnia kell kicsit.",
						"Nem sikerült a bejelentkezés!",
						"Sikertelen adatfevétel, kérjük, próbálkozzon újra később!",
						"Sikertelen az elemzésfrissítő XML!",
						"Nincs kapcsolat",
						"A szoftver letöltése sikeresen befejeződött. Megkezdi a flash-memória programozását?",
						"Elvesztek az adatok! Nem sikerült a letöltés!",
						"Csomagellenőrzési hiba. Próbálkozzon újra!",
						"Hálózati rendellenesség. Ellenőrizze és kapcsolódjon újra...",
						"Nem sikerült a frissítés. Indítsa újra a TV-t!",
						"A frissítő fájl váratlanul törlődött. Frissítsen ismét a hálózatról.",
						"A szoftver sikeresen letöltődött a háttérben. Frissít?"];
var netUpdateButtonText = ["Letölt", "Frissít", "Később", "Soha", "OK","Tovább"];
var autoDetectPrompt = ["Van új szoftver, verziószáma XXXX. Letölti most? Hálózata állapotától függően lehet, hogy várnia kell kicsit.",
						"Van új szoftver, verziószáma XXXX. Frissít most?",
						"A legutóbbi hálózati frissítést megszakították. Meg kell ismételni.",
                        "A(z) XXXX verziójú új szoftver letöltése még nem fejeződött be. Folytatni kívánja?",
                        "A szoftver letöltődött, kívánja most frissíteni?"];
var sysOptions		= ["E-kézikönyv","OSD nyelv","Idő beállítása","Zárolás","Bemeneti beállítások",
						"Szoftverfrissítés","Helyszín","HbbTV mód","Cookies","Műholdv. kártyany.",
						"A speciális beállítások","Gyári alapbeállítás","LED jelzőfény","Azonnali bekapcsolás","Automatikus vásárlási mód","Area","Demó mód"];
var sysResetDes		= "Biztos benne?";
var sysMenuLangOptions=["Nyelv","Hangsáv preferált nyelve","Második választott nyelv"];
var sysTimerOptions	= ["Időzóna","Régiónév","Óra","Autom. Ki","Autom. készenlét", "Country region"];

var sysTimeZone		= ["Műsorsugárzóként","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Ki","10 perc","20 perc","30 perc","40 perc","50 perc","60 perc","90 perc","120 perc"];
var sysStandby		= ["Ki","4 óra","6 óra","8 óra"];
var sysRegionName	= ["Madrid ","Kanári-szigetek"];
var sysClockOptions	= ["Autom. szinkroniz.","Dátum","Idő","Bekapcsolási idő","Idő beállítása",
						"Bekapcs. csatorna","Kikapcsolási idő","Idő beállítása"];
var sysTimer		= ["Ki","Naponta","Egyszer"];

var sysInputSet		= ["Nincs címke","DVD","Blu-ray","HDD","DVDR",
						"HD rec.","Játék","VCR","PC","Digitális STB",
						"HD dig STB","Kamera","Felvevő","Egyéb"];
var sysAvVideoInput	= ["Automatikus","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["USB-n","Hálózatazon.","Csatornánként"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Nem található új szoftver az éterben!",
						"Van új szoftver, verziószáma XXXX. Frissít most?",
						"Kérem, dugja be az USB pendrive-ot.",
						"Csomagellenőrzési hiba. Próbálkozzon újra!",
						"NE húzza ki az USB kulcsot és ne kapcsolja ki a TV-készüléket a firmware frissítése közben!!",
						"A szoftver frissítése sikiresen megtörtént. \n TV automatikusan újraindul!",
						"Van új szoftver, verziószáma XXXX. Letölti most? Hálózata állapotától függően lehet, hogy várnia kell kicsit.",
						"Letöltés",
						"A szoftver letöltése sikeresen befejeződött. Megkezdi a flash-memória programozását?",
						"Nincs friss.!",
						"Frissítő fájlok keresése",
						"A szoftver frissítése sikeres.\nIndítsa újra a TV-készüléket."];
var sysProductInfo	= ["Jelenlegi verzió","Terméknév","Gyártó neve","Alapkészülék neve"];
var sysCiDes		= ["Nincs CI-kártya."];
var sysAdOptions	= ["DivX(R) regisztrálás","DivX(R) regisztráció megszüntetése","T-Link","Authorization Error","Regisztráció törlésének megerősítése",
						"Bérlet megerősítése","A bérleti idő lejárt"];
var sysRegistDes	= ["DivX-védett videók lejátszásához regisztrálnia kell készülékét",
						"Regisztrációs kód:",
						"Itt regisztrálhat: http://vod.divx.com"];
var sysDregistDes	= ["Regisztrációt megszüntető kód:",
						"Regisztráció megszüntetése: http://vod.divx.com",
						"Folytatja a regisztrálást?"];
var mediaAuthorization = ["Az Ön készüléke nem jogosult e DivX(R)-védett videó lejátszására."];
var deregistrationConfrimation = ["Készüléke már regisztrálva van.","Tényleg deregisztrál?"];
var rentalConfirmation = "A DivX(R) YYYY nézésből XXXX nézést használt fel. Folytatja?";
var rentalExpired 	= "A DivX(R) kölcsönzés YYYY megnézési lehetőségből XXXX számút már felhasznált. A DivX kölcsönzés határideje lejárt.";

var parentalRatingNA		= ["***","***","***","***","***","***","***","***"];
var parentalRatingOptionUS		= ["***","***","***"];
var sysTVRatingUS=["***","***","***","***","***"];
var sysMPAAUS=["***","***","***","***","***","***"];
var parentalRatingOptionCanada		= ["***","***","***"];
var sysCanadaEng=["***","***","***","***","***","***"];
var sysCanadaFre=["***","***","***","***","***",""];
var sysResetRRT=["***"];
var sysLockOptions	= ["Csatornazár","Időintervallum lezárás","zár","Bementi blokk","Elülső panel zárja","Zár telepítése",
						"Jelszó módosítása","Max. hangerő","Mindent töröl"];
var sysTimeIntervals= ["Lezárás típusa","Kezdési idő","Befej. idő"];
var sysRatingOptions= ["Nincs","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","X-rated (Spanyolország)"];
var changePass		= ["Jelszó módosítása","Új jelszó","Jelszó megerős."];
var changePassDes	= ["A jelszó hibás.\nKérjük, adja meg újra.",
						"A jelszó nem egyezik.\nAdja meg újra.",
						"A jelszó beállítása sikeres!",
						"Ez a kód túl egyszerű, jelszónak nem jó.\nAdjon meg másikat!"];
var sysPowerOnChOptions= "Módválasztás";
var sysPowerOnCh	= ["Legutóbbi állapot","Felhaszn által kivál."];
var netWlessSecu    = ["Nyitott","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Nincs","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Nem támogatott."];
var netWlessSecu3	= ["Nincs","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Nem támogatott."];
var netOptions		= ["Internet csatlakozás","Csatlakozó","WiFi beállítások","IP-beállítások","Információk",
						"Csatlakozásellenőrzés","DLNA","TV távvezérlő","Netfix-beállítások","Wi-Fi megjelenítése",
						"Címtípus","IP-cím","Alhálózati maszk","Alapértelmezett átjáró","Elsődleges DNS",
						"Másodlagos DNS","SSID","BSSID","Írja be a SSID-t:","Felhasználó azonosítója"];
var chEditDes		= ["Van már ilyen csatornaszám!","Nyomja meg a piros gombot, hogy törölje ezt a karaktert!","Érvénytelen csatornaszámok"];
var chEpgNoProgram	= "Jelenleg nem áll rendelkezésre programinformáció, kérjük, elsőzör válassza ki a csatornákat!";
var chEpgWords		= ["Műsortájékoztató","Nincs műsor adat.","A csatorna zárolva van!","Nincsenek műsor részletek.","Nincs program cím."];
var chEpgBooking	= ["Menetrend információk", "Csat.szám","Kezdés dátuma","Kezdési idő","Befej. idő",
						"Ismétlés típusa","Ütemezés típusa","Hozzáadása","Csere","Módosít",
						"Hozzáad/Változtat"];
var epgHotKey		= ["Előző nap","Következő nap","Filtar","Ütemezési lista","Ütemezés hozzáadása"];
var chEpgBookRemind	= ["Helytelen kezdési időpont","Helytelen befejezési időpont","Van már ilyen ütemezés","Sikeres mentés.","Sikeres törlés."];
var chSchePara		= ["Ütemezési lista","Kezdési idő","Kezdés dátuma","Program cím","Csat.név",
						"Időtartam","Ismétlés","Ütemez","Szerkeszt","Törlés"];
var dateTimer		= ["Egyszer","Naponta","Heti"];
var scheduleDeleteReminds="Törölni akarja ezt ütemezést?";
var scheduleNoLists	= "Nincs ütemezési lista. Piros gombbal adjon meg egyet.";
var chListWords		= ["Csatornalista","Listaválasztás","Tuner mód","Felvétel a kedvencek közé","Eltávolítás",
						"Csatornalista választás","Tuner mód választás","Csere"];
var chListType		= ["Mind","Digitális","Analóg","Rádió","Ingyenes","Kedvencek"];
var chAutoScanOptions=["Válasszon üzemeltetőt","Csatorna típus","Csatornakeresés"];
var souSoundType	= ["Érvénytelen","Monó","Monó","Sztereó","Sztereó",
						"SAP","SAP","Dual1","Dual2","Dual2",
						"Nicam monó","Nicam sztereó","Nicam kettős1","Nicam kettős2","NICAM duális",
						"Monó","LL","RR","LR"];
var souPreset		= ["Zene","Mozi","Tiszta hang","Szabvány","Személyes"];
var picAdRgbMode	= ["Ki","Csak piros","Csak zöld","Csak kék"];
var picAdOptions	= ["DNR","MPEG NR","RGB mode","Dinamikus Kontraszt","LED kép tisztasága",
						"Színtónus","Film mód","Játék mód","Színhőmérséklet","Fehéregyensúly",
						"képkimerevítés","Black Stretch","Túlpásztázás","Gamma","HDMI mód","10P fehéregyensúly","Színkiterjesztés",
						"Foltcsökkentés","Vibrálás csökkentése","Színtér","A kép tisztasága"];
var pic10Pwhite     = ["Intervallum","Piros","Zöld","Kék","Alaphelyzet","Szín","Sárga","Cián","Magenta"];
var picMotionClarity = ["A kép módja","A kép interpolációja","LED kép tisztasága","Foltcsökkentés","Vibrálás csökkentése","Alaphelyzet"];
var picMotionMode   = ["Film","Sima","Törlés","Sport","Vásárló"];
var picResetDes		= "Minden személyes beállítás törlődni fog. Biztosan a kiválasztott lépést szeretné végrehajtani?";
var pic10PReset     = "Biztosan törölni szeretné a 10P fehéregyensúlyt?";
var picMotionReset  = "Törölni szeretné a Kép tisztaságát?";
var picColorSpaceReset    = "Biztosan törölni szeretné a színteret?";
var picOptions		= ["Képmód",
						"Háttérvilágítás","Fényerő","Kontraszt","Telítettség","ÁRNYALAT","Élesség","Színhőmérséklet","Képernyő mód","Automatikus formátum",
						"Sportfejlesztés","3D","3D navigálás","ECO Beállítások","Oldalarány",
						"A speciális beállítások","Kép visszaállítás","Mikro-fényerőszabályozás"];
var picSize			= ["16:9 formátum", "4:3 formátum", "14:9 formátum", "Cinerama",
						"16:9 Zoom", "16:9 Zoom up","14:9 Zoom","Rastezljivi zoom","Široki zoom",
						"Zoom 2","Široki zoom 2","Képernyő natív felbontása","Točka po točka","Eredeti","Panoráma"];
var others			= ["Hangerő","Műsorszórás","Jelszó","Állapot","Mentés","Csere","Kezdés","Kilépés","Keresés","Törlés",
						"Nincs","Automatikus","Keresés","Biztonság","Kapcsolódás","Frissítés","Újra"," Leállítása","Beállítások","Csatornák",
						"Szerkeszt","Beszúr","Jel.","Befejezés","Sztereó","Hang","Fő-","Nincs hang.","Tippek","Alaphelyzet",
						"Vásárló","Beállítás","Tárolás","Felhasználó","Billentyűzet lezárása","Biztonsági mód","Minden nap","PVR lista"];
var direction		= ["Bal","Jobb","Fel","Le"];
var audioType 		= ["MPEG","DOLBY AUDIO"/*"AC3"*/,"MPEG4","AAC", "DOLBY AUDIO"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Ismeretlen"];
var soundChannels   = ["Ismeretlen","Monó","Al-","Kettős mono","Sztereó","Stereo Sub","Stereo Dolby Surround","Térhatású 2CH","Térhatású","3.0Ch","4.0Ch","5.0Ch","Mono Lfe","Dual Mono Lfe","Stereo Lfe","Surround 2Ch Lfe","Surround Lfe","3.1Ch","4.1Ch","5.1CH","7.1CH","Joint Stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Bal","Jobb","Egyéb"];
var prompts			= ["Állítsa a képet nézési környezetéhez legjobban illőre.",
						"Állítsa a fényerő szintet. 100-hoz közeledve növeli a fényerőt.",
						"Állítsa a kontraszt szintet. 100-hoz közeledve nő a sötét-fényes különbség.",
						"Állítsa a telítettség szintet. 100-hoz közeledve erősödnek a színek.",
						"Állítsa az élességi szintet. 100-hoz közeledve tisztulnak a részletek.",
						"Állítsa a háttérfény szintet. 100-hoz közeledve fényesedik a képernyő.",
						"Állítson árnyalat szintet. Változtatja a színtónusokat.",
						"Válassza a nézett műsorhoz legjobban illő képformátumot.",
						"Az energiatakarékossági beállításokat konfigurálja.",
						"Állítsa a képernyő geometriát, ha PC-hez kapcsolódik.",
						"További speciális képbeállításokat kínál.",
						"Alapértelmezettre állítja vissza az összes képbeállítást.",
						"Igény szerinti hangmód-beállítást kínál.",
						"A bal és jobb csatorna közötti egyensúlyt állítja.",
						"Az SRS TruSurround HD hangsugárzó rendszer telt hangminőséget és hang tisztaságot ad kis és nagy frekvenciákon.",
						"DIF digitális interfész formátum kapcsolat köti össze a TV digitális hang kimenetét a házimozi hang berendezéssel.",
						"Igény szerinti hangsáv nyelv beállítást kínál.",
						"Tegye lehetővé a látássérültek számára a televíziós műsorok nézését.",
						"Tesztelje TV-je képét, hangját és jelét.",
						"A TV jelnek megfelelő csatornalista-típust kínál.",
						"Válassza ki a képernyő alján látható műsor feliratok nyelvét.",
						"Nézze meg a jelen csatorna szövegeit és képeit.",
						"Digitális Élő Hálózat Szövetség (DLNA). Élvezze az otthoni hálózaton keresztül más eszközről (pl. PC) megosztott zenét, fényképet és videót.",
						"Jelenítse meg okostelefon tartalmait TV-n és használja okostelefonját TV távirányítóként.",
						"Jelenítsen meg TV képernyőjén Miracast-kompatibilis Android eszközről megosztott tartalmakat.",
						"Zárolja TV készülékét.",
						"Nevet választhat készülékének.",
						"Kiválaszthatja nézési környezetét.",
						"Alapértelmezettre állítja vissza az összes rendszerbeállítást.",
    					"Switch off sports mode for more options.",
    					"Környezeti kontraszt növelése",
    					"Különleges mód sportműsorokhoz",
    					"Élvezzen még több CEC-funkciót."];
var initialTitle	= ["Üdvözöljük!","Alapbeállítás"];
var initialPrompt	= ["Végezze el a kezdeti beállítást most, és az izgalmas élmények világa vár Önre!",
						"Kérjük, válassza ki a megfelelő nyelvet:",
						"Válasszon országot/régiót :",
						"Kérjük, válasszon helyszínt:",
						"Válassza ki hálózati kapcsolata típusát:",
						"Válassza ki vezetékes hálózati kapcsolódási módját:",
						"Nem sikerült csatlakozni a(z) xxxxxxxxx eszközhöz! Kérjük, csatlakoztassa az eszközt a következő Diagrammnak megfelelően vagy válassza ki a Balra gombot a törléshez.",
						"Sikerült a csatlakozás a(z) xxxxxxxxx eszközhöz! Kérjük, válassza ki a Jobbra gombot a folytatáshoz.",
						"1)Az Ön TV-jében már lehet beépített drótnélküli adapter\n 2)Vagy, ha van egy drótnélküli USB adaptere, csatlakoztassa azt a TV-jéhez.  Ezután kérem, válassza ki a drótnélküli hálózati csatlakozási módot",
						"Pásztázás. Kérjük, várjon…",
						"Nem kapcsolódik vezeték nélküli eszköz a TV-hez!",
						"Az alábbi „Tovább” gomb megnyomása előtt ellenőrizze, telepítve van-e a hp-ba a következő PIN-kód.",
						"Kérjük, nyomja be a gombot a hozzáférési ponton 120 másodperccel a Jobb megnyomása előtt!",
						"WPS (Wi-Fi Protected Setup, védett WiFi beállítás)",
						"PIN (személyi azonosító szám)",
						"PBC (nyomógomb konfiguráció)",
						"A következő tartalmak csak hálózati kapcsolattal érhetők el. Ki kívánja hagyni a Hálózat beállítása lépést?",
						"Új szoftver frissítések letöltése áll rendelkezésére, hálózati állapotától függően ez eltarthat egy ideig.",
						"A TV szoftverének frissítése után élvezheti a legújabb funkciókat és szolgáltatásokat.",
						"Így nem élvezheti a legújabb jellemzőket és szolgáltatásokat. Biztosan ki akarja hagyni a szoftverfrissítést?",
						"Nyomja meg a jobb gombot a folytatáshoz.",
						"Frissítés közben ne áramtalanítson, mert ez a TV hibás működéséhez vezethet.",
						"Amennyiben nem kíván frissíteni, kérjük, válassza ki a NEM-et.",
						"Frissítés, kérjük, várjon",
						"A RENDSZER/SZOFTVERFRISSÍTÉS pontban is frissítheti a szoftverét.",
						"A kiválasztott ország jelszó beállítását igényli.\nKérjük, írja be és erősítse meg TV készüléke kódját.",
						"This code is too simple.\nPlease use different digits.",
						"Gratulálunk! A kezdeti beállítás befejeződött. Módosíthatja a konfigurációját a főmenün és a kapcsolódó almenükön keresztül.",
						"Válassza ki a biztonsági módot:",
						"Kérjük, válassza ki a vezeték nélküli hálózati kapcsolat módját:",
						"Hálózat"];
var initNetCabAndDonRe = ["Nincs hálózati kábel csatlakoztatva, kérjük, csatlakoztasson egy dugót a hálózati kábelbe!","Nincs beépített vezeték nélküli adapter vagy nincs vezeték nélküli USB adapter."];
var initChPrompt = ["A TV csatornabeállításai","Kérjük, válassza ki az Antenna pásztázási típusát.","Folyik az automatikus hangolás...","A következő Antenna csatornákat találta:","Válassza a kábel kereséstípust.","Kérjük, válasszon ki egy kezelőt a következő listából:","Állítsa be a keresési adatokat","A következő kábelcsatornákat találtam:","Válasszon üzemeltetőt a következő listáról","Válassza ki a keresendő műholdakat vagy módosítsa a kiválasztott műholdat","Állítsa be a műhold paramétereit","A következő csatornákat találta, és a csatornapásztázás újra elvégezhető a Csatorna/Csatornapásztázás pontban."];
var initClockPrompt = ["Kérje le a hálózat által biztosított időt!",
						"Kérjük, állítsa be a Dátumot és az Időt:"];
var initialOptions	= ["Környezet","Hálózatbeállítás","Szoftverfrissítés","Csatornatelepítés","Óra"];
var initialHotkeys	= ["Vissza","Kijelölés","Következő","Elfogadom"];
var initLocations	= ["Kezdőlap","Üzlet","Bolti beállítás demóval"];
var initNets		= ["Vezetékes","Vezeték nélküli","Nincs hálózati kapcsolatom"];
var initWireManuals	= ["IP-cím","Alhálózati maszk","Alapértelmezett átjáró","Elsődleges DNS","Másodlagos DNS"];
var initSoftUpdates = ["Frissítés most","Frissítés később"];
var initChannelIns	= ["Tovább","Nem kívánom telepíteni a csatornákat"];
var initChScanTypes	= ["Digitális & Analóg","Digitális","Analóg","Nem akarok keresni"];
var initChDvbts		= ["Antenna ATV csatornák:","Antenna DTV csatornák:"];
var initChDvbcs		= ["Kábeles analóg TV-csatornák:","Kábeles digitális TV-csatornák:"];
var initChDvbss		= ["Műholdas csatornák:"];
var initChDvbSOther	= ["Nem akarok műholdat keresni"];
var initEndConnectedStatus= ["Nincs kapcsolat","Wi-Fi kapcsolat","Vezetékes kapcsolat"];
var initEndInstallations= "A(z) XXXX csatornák telepítésre kerültek";
var initEndUpdate	= ["Frissítve"];

var audioScenes 	= ["Asztali","Fali felerősítés"];			
var screenSavers	= ["Nincsenek csatornák, nyomja meg az OK gombot és végezzen keresést.",
						"Nincs jel.",
						"Kódolt",
						"Csak adatok",
						"Hangműsor",
						"Nincs hang és nincs kép.",
						"Nem áll rendelkezésre",
						"Nincs teletext",
						"Nincs műsor adat.",
						"A program zárolva van!",
						"A program zárolva van!\nNyomja meg az OK gombot, majd írja be a kódot.",
						"Nincsenek műsor részletek.",
						"Kiskorúak számára veszélyes műsor.\Nyomja meg az OK-t és adja meg a kódját.",
						"A csatorna zárolva van!",
						"A csatorna zárolva van!\nNyomja meg az OK gombot, majd írja be a kódot.",
						"A bemenet zárolva van!\nNyomja meg az OK gombot, majd írja be a kódot.",
						"Nem támogatott.",
						"Ez a szolgáltatás pillanatnyilag nem áll rendelkezésre",
						"Bemenet zárolt!",
						"Nincs program cím.",
						"Nincs funkció",
						"Nincs Felirat"
						];
var channelNumberOverPromt = ["The number of search programs has exceeded,you can delete some programs and then retry!"];
var chBookingPromt	= ["Az aktuális csatornának ütemezett felvétele van, a TV el fogja kezdeni a felvételt.",
						"Felvételütemezést találtam.\n Felvétel készítéséhez kapcsoljon ide: XXXX",
						"Emlékeztető van az aktuális csatornán.",
						"Ütemezett emlékeztetőt találtam.\n Kapcsoljon ide: XXXX"];
var timeUnit		= ["s","p"];
var ciPromt			= ["A hálózati adatok megváltoztak. A frissítéshez elvégezhet egy frissítő pásztázást.",];
var othersPromt		= ["Kérjük, várjon…",];
var menuOptions		= ["Kép","Hang","Csatorna","Smart TV","Hálózat","Rendszer","Támogatás"];
var optionOptions	= ["Képmód","Beprogramozott hangzás","képkimerevítés","T-Link","időeltolás","PVR","Ütemezési lista","Beállítások","*"];
var optionTLinkPromt= [["Automatikus bekapcsolás","Autom. készenlét","Műsorújság menü"],
						["Bekapcs.","Készenlét","Erősítő hangerő"]];
var powerPromt		= ["A TV hamarosan kikapcsol! Bármelyik billentyűvel megszakíthatja."];
var ttxLanguage		= ["NY-EURÓPA","K-EURÓPA","Orosz","Arab/héber","Perzsa","Arab","Hviterussisk","Görög","Török"];
var ttxOptions		= ["Felfed","Aloldalak görgetése","Nyelv","Ébresztés oldal","Hírek"];
var weekday         = ["Vasárnap","Hétfő","Kedd","Szerda","Csütörtök","Péntek","Szombat"];
var lcnConfflict	= "E műsor vételével problémák adódtak.";
var inShopMode		= "A TV-je bolti módban áll. Az otthoni mód beállításához kérjük, válassza ki a 'Rendszer' opciót és a menüben változtassa meg a 'Hely'-et.";
var nitRefresh		= "Megváltoztak a hálózati adatok. Szeretne frissítő programkeresést végezni?";
var picHDMIMode     = ["Automatikus","Grafikus","Videó"];

var glassRemind    	= ["Kérjük, dugja be a TV-be 3D szemüvegét (Tartsa nyomva a POWER gombot a 3D szemüvegen).","3D szemüvege csatlakozik a TV-hez",""];
var pvrRemind 		= ["Ne húzza ki az USB eszközt, ne szakítsa meg az áramot"];
var pvrConName   	= ["PVR","Műsorinformáció:",["Note: If you record the HD channel, please to select  the  disk(of speed >5.0MB/sec), and to select the disk (of speed >3.0MB/sec) when you want to record the SD channel.","A felvett videót a \"PVR\" mappába mentettük."]," Leállítása","Felvétel","óra","Perc","Időtartam","Tippek","Használja a nyilakat a felvételi idő beállításához."];
var pvrDisRemind 	= "Helyezze be az USB-meghajtót a rögzítéshez.";
var pvrRemindWords  = ["Ki kíván lépni?",
							"Le kívánja állítani a felvételt és böngészni szeretné a rögzített fájlokat?",
							"Kivették a lemezt.",
							"Nincs elég szabad terület.",
							"Nincsenek rögzített fájlok. Felvétel indítása",
							"Titkosított csatornán nem tud elindulni a PVR .",
							"A funkció nem elérhető",
							"Sikeres mentés.",
							"Leállítja a felvételi eljárást és bemenőjel forrást vált?",
							"A TV be fogja fejezni az aktuális felvételt. Ki kíván lépni?",
							"A PVR felvételnek szüksége van a TV jelére a megfelelő működéshez, kérjük, ellenőrizze a jelét."];
var pvrChangeCh 	= ["Csatornát vált?",
							"Leállítja a felvételi eljárást és csatornát vált?"];
var pvrChangeToPIN8	= ["Meg kívánja változtatni a SCART inputhoz csatlakozó eszköz forrását?",
				    		"Le kívánja állítani a felvétel folyamatát és meg kívánja változtatni a SCART inputhoz csatlakozó eszköz forrását? "];
var pvrChangeToCEC  = ["Meg kívánja változtatni a HDMI inputhoz csatlakozó eszköz forrását?",
				  			 "Le kívánja állítani a felvétel folyamatát és meg kívánja változtatni a HDMI inputhoz csatlakozó eszköz forrását? "];
var pvrGuideJump    = ["Be kíván lépni az EPG-be?",
							"Leállítja a felvételi eljárást és az EPG-be lép?"];
var pvrMediaJump    = ["Be kíván lépni a Médiába?",
							"Leállítja a felvételi eljárást és az Media-be lép?"];
var timeshiftExtra	= ["Le kívánja állítani a timeshiftet,csatorna megváltoztatása?",
						"Le kívánja állítani a timeshiftet és meg kívánja változtatni a SCART inputhoz csatlakozó eszköz forrását?",
						"Le kívánja állítani a timeshiftet és meg kívánja változtatni a HDMI inputhoz csatlakozó eszköz forrását?",
						"Titk. csatornán nem tud elindulni az időeltolás.",
						"Le kívánja állítani a timeshiftet és be kíván lépni az EPG-be?",
						"Le kívánja állítani a timeshiftet, és a TV-t USB módra állítja?",
						"Le kívánja állítani a timeshiftet,bemeneti forrás megváltoztatása?",
						"Helyezze be az USB-meghajtót a rögzítéshez.",
						"A lemez mérete nem elegendő.",
						"A TV befejezi az aktuális timeshiftet. Ki kíván lépni?"];
var timeshiftStatus	= ["Gyors visszatekerés"," Leállítása","Lejátszás","Pillanat állj","Gyors előretekerés"];
var pvrPowerOffRemind= ["Készenléti felvétel","Készenlét","A TV jelenleg rögzít, folytatni kívánja a felvételt, amikor a TV készenléti módban áll?"];
var timeshiftInitTitle= "Lemez beállítása";
var timeshiftInitReminds= ["Ez a varázslóval állíthatja be az USB lemezen a timeshift funkciót. Válassza ki a beállítási módot.",
						 "A jobb teljesítmény érdekében javasoljuk az USB lemez formattálását. Ezzel minden adat törlődik.",
						 "Válassza ki a fájlméretet a timeshift funkcióhoz.",
						 "Formattálás",
						 "Nincs elég szabad terület.",
						 "Timeshift fájl létrehozása",
						 "Sebesség tesztelése",
						 "A lemez adatátviteli sebessége túl lassú (< %f MB/s) a timeshift funkcióhoz.",
						 "A lemez készen áll a timeshift funkció alkalmazására. Ehhez azonban lemezcsere javasolt ( > %f MB/s sebességűre).",
						 "A lemez készen áll a timeshift funkció alkalmazására. "];
var timeshiftInitButtons= ["Formázás","Kihagyás","Mégse","OK","Befejezés","Kilépés"];
var timeshiftInitOther=["Lemezsebesség:","MB/s"];

var selectChoice	= "Biztos benne?";
var chAtvStore		= "Tárolás mint XXXX";
var chEpgFirstGenreUK= ["Mozi","Hírek és tények","SZÓRAKOZTATÁS","Sport","Gyerekműsor","Oktatás","Életstílus","Dráma"];
var homePageTitleList = ["APPOK","TV","VIDEÓK","Honlap"];
var homePageFavAndAllName  = ["Kedvenc appok","Minden app"];
var homePageBackUp = ["E-kézikönyv","Útmutató"];
var homePageRemind   = ["A teljes funkciók csak a hálózatra való kapcsolódás után érhetők el.","A TV-jének még nincsenek csatornái. A programok a csatornaszkennelés után érhetők el.","Nincs műsor","Keres most csatornákat?"];
var homePageHistory = ["Előzmények"];
var miracastTitle = ["Wi-Fi megjelenítése","TCL eszköz"];
var miracastRemind=["A WiFi TV segítségével vezeték (kábelek) nélkül oszthatja meg eszköze, például okostelefonja vagy táblagépe képét és hangját a TV-készülékkel. Ez lehetővé teszi az okostelefon vagy táblagép képének és hangjának a TV-n való figyelését. Például elindíthat egy videót az okostelefonon és egyidejűleg a TV-n is nézheti, vagy játékvezérlőként használhatja táblagépét és tartalmát kiteheti a nagyképernyős TV-re.","A Wi-Fi megjelenítése a TV-n használatra kész. Indítsa el az eszköz képernyőjének TV-n való megosztásához.","Kapcsolódás. Kérem, várjon!","Kapcsolódás nem sikerült!","Sikertelen csatlakozás. Kérem, ellenőrizze!"];
var homePageLittleWin = ["Beállítások","Adathordozók","Kedvenc csatornák","Smart TV","EPG"];

var hbbtvStopRemind  = ["Le akarja állítani a lejátszást?"];
var colorSystem = ["Automatikus","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "További információért nyomja meg az ≡";
var emptyListInfo = "Nem csatlakozik eszköz a TV-hez!";
var optionVideoListArray_1 = ["Képmód", "Beprogramozott hangzás", "Lejátszási mód", "Képernyő mód", "3D mód", 
							  "B-J kapcsoló", "Mélységélesség", "Felirat", "Hangsáv", "Cím", "Fejezet", "Info"];
var optionVideoListArray_2 = ["Képmód", "Beprogramozott hangzás", "Lejátszási mód", "Képernyő mód", 
							  "Felirat", "Hangsáv", "Cím", "Fejezet", "Info"];
var bottomTipsText = ["Lejátszás/szünet", "Gyors visszatekerés", "Gyors előretekerés", "Játszási lista", "Beállítások"];
var picturePresetArray = ["Szabvány", "Dinamikus", "Természetes", "Mozi", "Személyes"];
var videoPlayModeArray = ["Minden ismétlése", "Egy ismétlése", "Normál"];
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Široki zoom", "Zoom 2", "Široki zoom 2", "Rastezljivi zoom", "Automatikus"];
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "14:9 Zoom", "16:9 Zoom", "16:9 Zoom up", "Automatikus"];
var Mode3DArray = ["Ki", "2D-ből 3D", "Egymás mellett", "Fent és lent", "Sorösszefésüléses"];
var videoOptionListArray = ["Ki", "Zeneszám", "Felirat", "Cím", "Fejezet"];
var subMenuTitleText = "Felirat";
var langMenuTitleText = "Audio nyelv";
var titleMenuTitleText = "Cím";
var mode3DMenuTitleText = "3D mód";
var langInfoText = "Zeneszám";
var STOP_RESUME_INFO = "Leáll.-Folyt.";
var playListName = " név";
var eb_tips = "Tippek";
var ok_button = "OK";
var eb_info = ["Hang dekódolási hiba.", "Videó dekódolási hiba.", "Nem támogatott hangformátum.", 
			   "Nem támogatott video formátum.", "Nem tudom megnyitni ezt a fájlt.", "Lejátszási hiba, kérem, próbálja újra.",
			   "A fájlformátum nem támogatott.", "Hoppá! A lejátszó leállt.",
			   "A fájl elérési útvonala nem létezik vagy érvénytelen.\n Helyezze be újra a tároló eszközt és próbálkozzon újra.",
			   "A lejátszást az előző\n lejátszási pozíciótól folytatja?"];
var picturePlayErrorTips = ["Betöltési hiba!!!","A kép túl nagy!!!","Hálózati hiba!!!","Thread hiba!!!","Paraméterhiba!!!","Ismeretlen hiba!!!"];
var frameTitleText = "Új eszköz";
var eb_quit_info = "Biztosan ki akar lépni?";
var eb_yes = "IGEN";
var eb_no = "NEM";
var offinfo = "Ki";
var naInfo = "Nulla";
var consoleInfoArray = ["Gyors visszatekerés", "Gyors előretekerés", "Lejátszás/szünet", "Játszási lista"];
var cantOperateText = ["Nem támogatott funkció."];
var chapterChangeInfo = "Csak az 1-XXXX. fejezet érhető el:";
var metaDataArray = ["Cím/Kiadás metaadat:", "Fejezet metaadat:", "Hang metaadat:", "Felirat metaadat:"];
var metaTitleInfo = "Cím";
var metaChapterInfo = "Fejezet";
var videoLoadingInfo = "Elemzés…";
var listLoadingInfo = "Betöltés…";
var pgInfo = "Alacsony értékelés:";
var fileNameText = " név";
var fileDateText = "Dátum";
var fileSizeText = "Méret";
var fileDurationText = "Időtartam";
var fileDirectorText = "Rendező";
var fileCopyrightText = "Copyright";
var fileArtistText = "Előadó";
var fileAlbumText = "Album";
var fileGenreText = "Műfaj";
var fileYearText = "Év";
var fileGenreText = "Műfaj";
var mainListArray = ["Mind", "Kép", "Videó", "Zene"];
var sortArray = [" név", "Dátum"];
var parserArray = ["Normál", "Rekurzív"];
var emptyTipsInfo = "Hoppá. Nem találtam támogatott fájlt.";
var emptyFolderInfo = "Hoppá. Nem találtam támogatott fájlt.";
var sortName = "Rendezve";
var parserName = "Elemző";
var divx_str1 = "DivX(R) regisztrálás";
var divx_str2 = "DivX(R) regisztráció megszüntetése";
var infor_str = "Info";
var quickMenuEmptyText = "Nincsenek elérhető opciók.";

var musicSoundPresetArray = ["Szabvány", "Mozi", "Zene", "Tiszta hang", "Személyes"];
var musicInformationArray = [" név", "Előadó", "Album", "Műfaj:", "Év:", "Időtartam:"];
var playListName = " név";
var playTipsInfo = ["Ön az első fájlt játssza le.", "Ön az utolsó fájlt játssza le."]
var musicNameInfo = "Name";
var musicArtistInfo = "Előadó";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Beprogramozott hangzás";
var optionBGMInfo = "Lejátszás a háttérben";
var optionAudioOnlyInfo = "Csak hang";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX csatlakozott a TV-hez!";
var tvRemoteTitle		= "TV távvezérlő";
var tvRemoteDeveloper	= "Az alkalmazást a TCL fejlesztette ki";
var tvRemoteDeviceTitle	= "Eszköznév:";
var remoteOption		= ["Médiamegosztás","Távirányító","Súgó","Névjegy","Okos csatlakoztatás"];
var remotebottom		= "Kérjük, töltse le a \"TV távirányító\" menüt az okostelefonjára.";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Osszon meg fényképeket, videókat és zenét a TV-vel a telefonján keresztül.",
							"Lépések: \n   1. Kattintson a \"TV távirányító\"-ra a telefonján. Csatlakoztassa a telefonját a TV-hez ugyanazon a WI-FI hálózaton keresztül;\n   2. Kattintson a \"Médiamegosztás\"-ra a médiafájlok közti böngészéshez;\n   3. Küldje el a fájlt a TV-nek a lejátszáshoz (a következő lehetőségek közül az egyikkel)",
							"      a) A mappa/fájl TV-ikonra vonszolásával a képernyő tetején;\n      b) A telefon TV felé lendítésével az első fájl indításához;\n      c) A média elindításával a telefonon és a TV megosztás ikonra kattintással;",
							"   4. A TV-n való lejátszás közben a telefon megrázásával játszhatja le az előző vagy következő fájlt."];
var controlReminds		= ["A telefon használata TV távirányítóként.",
							" ",
							"Lépések: \n   1. Kattintson a \"TV távirányító\"-ra a telefonján. Csatlakoztassa a telefonját a TV-hez ugyanazon a WI-FI hálózaton keresztül;\n   2. Kattintson a \"Távirányító\"-ra a TV működtetéséhez."];
var helpDeviceWords		= "Többképernyős interakció";
var helpBottom			= "A felhőtechnológia korában az intelligens eszközök, mint pl. telefonok és TV-k egymással kölcsönös összeköttetésben működnek. Több képernyőn keresztül megoszthatja családjával médiafájljait, valamint telefonján keresztül vezérelheti a TV-készüléket! ";
var helpReminds			= ["Előkészületek\n   1. Töltse le és telepítse a \"TV táviránytót\" a Google Play-ből vagy az App Store-ból.\n   2. Csatlakoztassa a telefonját a TV-hez ugyanazon a WI-FI hálózaton keresztül.",
							" ",
							"Ajánlott telefon\n   1. CPU: > 800 MHz\n   2. Tárhely: legalább 80 MB szabad",
							" ",
							"Jogi nyilatkozat\sz.   Ha a \"TV távirányító\" nem elérhető telefonján, kérjük, lépjen kapcsolatba a telefon gyártóval."];
var helpButtons			= ["Előző","Következő"];
var aboutReminds		= ["TV távvezérlő","Az alkalmazást a TCL fejlesztette ki"];
var aboutExit			= "Kilépés";
var smartReminds		= ["Gyors és okos kapcsolat a TV és a telefon között.",
							" ",
							"Lépések \n   1. Csatlakoztassa a TV-t és az okostelefonját ugyanarra a LAN-ra. Kattintson a \"TV távirányító\"-ra az okostelefonján.\n   2. Kattintson a \"Smart Connect\"-re a QR-kód beszkenneléséhez..\n   3. A TV álljon nézet módban, tartsa nyomva 4 másodpercig az INFO gombot a távirányítón, és egy teljes képernyős QR-kód fog felugrani.",];
var smartQRReminds		= ["Kérjük, kattintson a Smart connectre a TV távirányítóban a telefonján és szkennelje be a QR-kódot a TV-hez és a telefonhoz való gyors csatlakozáshoz.",
							"A QR-kód LAN fiókinformációkat tartalmaz. Kérjük, őrizze meg."];
							

var consoleTipArray = ["Előző","Következő","Konzol","Játszási lista"];							
var optionInfoArray = ["Képmód","Lejátszási mód","Időtartam","Hatás","Info"];

var playModeArray = ["Normál","Véletlenszerű","Ismétlés"];
var durationArray = ["Rövid (5 mp)", "Közepes (10 mp)", "Hosszú (15 mp)"];
var effectArray = ["Nincs", "Elforgatás", "Törlés jobbra", "Törlés balra", "Törlés felfelé", "Törlés lefelé", "Doboz befelé", "Doboz kifelé", "Véletlenszerű"];
var infoArray = ["Név:","Méret:","Dátum:","Helyszín"];

var picturePresetBarTitleInfo = "Képmód";
var picturePresetBarArray = ["Szabvány","Dinamikus","Stúdió","Mozi","Személyes"];
var upTipsInfo = "Kép mozgatása"; //add yums 2014-10-10
var consoleTipsArray = ["Konzol","Előző","Következő","Játszási lista","Beállítások"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Nyomja meg újra a JOBB gombot a következő képhez","Nyomja meg újra a BAL gombot az előző képhez","Nyomja meg újra a LE gombot a játszási lista megjelenítéséhez"]; //add yums 2014-10-10

var optionPvrListArray = ["Képmód","Beprogramozott hangzás", "Képernyő mód", "3D mód", "Felirat", "Hangsáv", "Info"];							
	
var titleSpanFirstArray = ["Vezérlés és Kapcsolat","Alapvető műveletek","APPOK","TV","Beállítások","GYIK"];
var titleSpanSecondArray = [["Távirányító","Panelkulcsok","Egyszerű navigáció","TV csatlakozás","TV csatlakozás","TV csatlakozás","Vezeték nélküli"],["Indító","Állapotsáv","Fő-"],["Játékalkalmazások","Adathordozók","TV távvezérlő"],["Csatorna és hangerő beállítása","Csatornalista","EPG","Csatornák","Kedvenc csatornák"],["Képbeállítás","Hangbeállítás","Csatornabeállítás","Szoftverfrissítés","Nyelv","Szülői zár"],["Gyakran ismételt kérdések","Gyakran ismételt kérdések","Hibaelhárítás","Hibaelhárítás","Feltételek és kikötések"]];
var contentSpan1_1Array =[["TELJESÍTMÉNY:","FORRÁS:","BEÁLLÍTÁSOK:","OPCIÓK:","VISSZA:","INFORMÁCIÓ:","KEZDŐLAP:","KILÉPÉS:","LISTA:"],
    ["Bekapcsolás vagy készenléti mód",
        "Bemeneti jelforrás választása",
        "A Beállítások menü megjelenítése",
        "Az Opciók menü megjelenítése",
        "Vissza az előző menübe vagy kilépés az alkalmazásból",
        "Mutatja a programinformációt",
        "A SmartTV honlap megnyitása",
        "Vissza az előző menübe vagy kilépés az alkalmazásból",
        "Mutatja a csatornalistát"]];
var contentSpan1_2Array = ["Előző csatorna","Következő csatorna","Emelje fel a hangerőt","Vegye le a hangerőt","Navigálás a honlapra","Az opció megerősítése","Készenlét / Bekapcsolás"];
var contentSpan1_3Array = ["OK/Tájékoztató","Csatorna fel","Csatorna le","Hangerő le","Hangerő fel","Néhány funkcióban nyílgombokként érhetők el."];
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","AV OUT adapter","LAN","Okostelefon","PC/Set-top box/DVD","Hangerősítő","Hangerősítő/Monitor","A TV-je nem tartalmazhatja az összes foglalatot."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Fejhallgató","AV IN adapter","SPDIF","CMP AUDIO IN adapter","CMP IN (YPbPr) adapter","USB eszközök","USB eszközök","Fejhallgató","DVC/Játékkonzol/Set-top box/DVD","Hangerősítő","DVC/Játékkonzol/Set-top box/DVD","A TV-je nem tartalmazhatja az összes foglalatot."];
var contentSpan1_6Array = ["Műholdv. kártyany.","SD","VGA","SCART","Mini SCART","ANTENNA IN","PCMCIA kártya","SD kártya","PC","Set-top box/DVD","Antenna/Kábel/Műhold","A TV-je nem tartalmazhatja az összes foglalatot."];
var contentSpan1_7Array = ["Tabletta","PC","Útválasztó","Telefon","TV"];
var contentSpan1_8Array = ["Funkcióváltás/bekapcsolás","Hosszan megnyomva az elalvási időzítéshez","Le","Fel","Hangerő/Csatorna/Jelforrás"];

var contentSpan2Array = [["A kezdőlap nézéséhez nyomja meg a nyílgombokat. ","Majd nyomja meg az OK-t, hogy megnézhesse az egyik kiemelt műsort vagy üsse be az appot"],["Mutassa a dátumot, a hálózatot és eszközöket stb. a képernyő felső sarkában"],["Válassza ki az input forrásokat a különböző portokon, mint például TV, AV, HDMI stb. keresztül a TV-hez kapcsolódó eszközökből."]];

var contentSpan3Array = ["Élvezze és nézze kedvenc alkalmazásait a Smart TV lapon","Nézzen fényképeket, videókat és játsszon le zenét USB tároló eszközről.","Csatlakoztassa TV-jét és okostelefonját vagy tabletjét ugyanahhoz a LAN-hoz.","Kattintson nScreen-re vagy TV távirányítóra az okostelefonon vagy a táblagépen","Osszon meg családjával több képernyőn fényképeket, videókat és zenét, irányítsa TV-jét okostelefonjával"];

var contentSpan4Array = [["Nyomja meg a FEL/LE gombokat a csatornaváltásokhoz","Nyomja meg a BAL/JOBB gombokat a hangerő beállításához"],["A csatorna felsorolás megnézéséhez nyomja meg a LIST gombot a távirányítón","Nyomja meg az FEL/LE gombokat a csatornák kiválasztásához."],["Az EPG egy olyan képernyőn megjelenő útmutató, amely kijelzi az ütemezett TV-műsort. Navigálhat, kiválaszthat, megtekinthet és felvehet műsorokat."],["Keresi és telepíti a csatornákat"],["Adja hozzá vagy Szerkessze a Csatornalistában kedvenc csatornáit"]];

var contentSpan5Array = ["Élvezze kedvenc műsorait a video apps-on keresztül"];

var contentSpan6Array = [["Nyomja meg a Választás gombot a rendszerbeállítási opciók megtekintéséhez.","Lépjen be a Kép beállításai pontba az értékek beállításához"],["Nyomja meg a Választás gombot a rendszerbeállítási opciók megtekintéséhez.","Lépjen be a Hangbeállításokba az opciók beállítására."],["Nyomja meg a Választás gombot a rendszerbeállítási opciók megtekintéséhez.","Lépjen be a Csatornabeállításokba az opciók beállításához"],["Frissítse a TV-jét, amint az új szoftververzió elérhető"],["Kiválaszthatja preferált menünyelvét"],["Lehetővé teszi a szülőknek, hogy lezárják a gyerekeik számára nem megfelelő csatornákat és műsorokat."]];

var contentSpan7_1Array = [["Nincs kép és hang","Ellenőrizze, hogy a biztosíték vagy a megszakító működik-e.","Dugjon egy másik elektromos eszközt az elektromos aljzatba, így megbizonyosodhat arról, hogy az működik és be van kapcsolva.","A hálózati csatlakozó érintkezése rossz a konnektorral.","Ellenőrizze a jelforrást."],["Normális kép, nincs hang","Nyomja meg a FEL gombot a hangerő növeléséhez.","A hangbeállítás nem megfelelő.","Hibás jel a közvetítésből."],["Normális kép, nincs hang","Állítsa be a fényességet és a kontrasztot","Hibás jel a közvetítésből.","Ellenőrizze, hogy csak audio módban van-e."]];
var contentSpan7_2Array = [["A rádió frekvencia interferenciája","Ez az interferencia mozgó hullámokat vagy átlós vonalakat produkál, és néhány esetben a kép kontrasztveszteségét. Keresse meg és távolítsa el a rádió interferencia forrását."],["Nincs szín","Állítsa be a színeket.","Próbáljon más csatornát. Fekete-fehér programot lehet fogni."],["A távirányító nem működik.","Cserélje ki az elemeket.","Az elemek nem megfelelően kerültek behelyezésre. A TV főkapcsolója nincs csatlakoztatva."]];
var contentSpan7_3Array = [["Az USB eszköz tartalma nem jelenik meg","Ellenőrizze, hogy az USB eszköz kompatibilis a TV-vel.","Ellenőrizze, hogy a hang- és képfájlok formátumát támogatja-e a készülék."],["Hang nélkül sugároz","A videó hangformátumát nem támogatja a TV-lejátszó."],["A fájlokat nem játssza le simán.","Az USB- eszköz átviteli teljesítménye korlátozhatja a TV adatátviteli mértékét."]];
var contentSpan7_4Array = [["Szoftverfrissítéskor mire kell odafigyelnem?","Szoftverfrissítéskor tilos áramtalanítani.","Szoftverfrissítéskor kerüljön minden, a távirányítóval végzett műveletet.","Legyen türelmes, mert a szoftverfrissítés folyamata hosszú ideig is eltarthat."],["A szoftverfrissítés után a TV interfészén nincs megkülönböztető változás.","Bizonyos körülmények között a szoftverfrissítés lehet, hogy nem csak frissít vagy új funkciókat vesz fel, hanem az interfészen való megkülönböztető változás nélkül javítja a TV beállítását. A TV interfésze néha érintetlen maradhat."]];

var termsTitle = "Feltételek és kikötések";
var termsConditions = ["(Jogi nyilatkozat). Kiadta a TCL - a TV készülék gyártója.","A SmartTV szolgáltatású termékek eltérő lehetőségei, valamint a rendelkezésre álló tartalom, szolgáltatások és alkalmazások korlátai miatt előfordulhat, hogy egyes szolgáltatások nem érhetők el egyes készülékeken vagy földrajzi területeken. A SmartTV egyes szolgáltatásainak használatához emellett külön vásárolható perifériák vagy tagsági díjak szükségesek. A készülékekről és a tartalomról webhelyünkön találhatók további részletek. A SmartTV-n elérhető szolgáltatások és tartalom választéka időről időre előzetes értesítés nélkül változhat. \n   A készüléken elérhető minden tartalom és szolgáltatás külső feleké és szerzői joggal, szabadalommal, védjeggyel és/vagy egyéb szellemitulajdon-joggal védett. E tartalmakat és szolgáltatásokat kizárólag az Ön személyes, nem kereskedelmi célú használatára nyújtjuk. A tartalmakat és szolgáltatásokat nem használhatja a tulajdonos vagy a szolgáltató által nem engedélyezett módon. A fentiek korlátozása nélkül tilos továbbá az e készüléken elért bármely tartalom vagy szolgáltatás bármely módon vagy eszközzel történő módosítása, másolása, újra közzététele, feltöltése, kiajánlása, átvitele, lefordítása, eladása, belőle származékos munka készítése, felhasználása és terjesztése a tartalom tulajdonosának vagy a szolgáltatás nyújtójának kifejezett engedélye nélkül. \n   ÖN KIFEJEZETTEN ÉS ELFOGADÓLAG TUDOMÁSUL VESZI, HOGY SAJÁT KOCKÁZATÁRA HASZNÁLJA A KÉSZÜLÉKET, ÉS A MEGFELELŐ MINŐSÉG, TELJESÍTMÉNY ÉS PONTOSSÁG TEKINTETÉBEN IS MINDEN KOCKÁZAT ÖNT TERHELI. A KÉSZÜLÉKET ÉS A KÜLSŐ FELEK ÁLTAL NYÚJTOTT MINDEN TARTALMAT ADOTT ÁLLAPOTUKBAN, KIFEJEZETT VAGY BELEÉRTETT JÓTÁLLÁS VAGY GARANCIA NÉLKÜL ADJUK. A TCL ELHÁRÍT MINDEN KIFEJEZETT VAGY BELEÉRTETT SZAVATOSSÁGOT, GARANCIÁT VAGY JÓTÁLLÁST A KÉSZÜLÉKKEL, A TARTALOMMAL ÉS A SZOLGÁLTATÁSOKKAL KAPCSOLATBAN, TEHÁT NEM SZAVATOLJA PÉLDÁUL EZEK ÉRTÉKESÍTHETŐSÉGÉT, MEGFELELŐ MINŐSÉGÉT, ADOTT CÉLRA VALÓ ALKALMASSÁGÁT, PONTOSSÁGÁT, NYUGODT ÉLVEZHETŐSÉGÉT ÉS HARMADIK FELEK JOGAINAK TISZTELETBEN TARTÁSÁT. A TCL NEM GARANTÁLJA A KÉSZÜLÉK ÚTJÁN NYÚJTOTT BÁRMELY TARTALOM VAGY SZOLGÁLTATÁS PONTOS, ÉRVÉNYES VAGY HIÁNYTALAN VOLTÁT, NEM GARANTÁLJA, HOGY A KÉSZÜLÉK, TARTALOM VAGY SZOLGÁLTATÁSOK MEGFELELNEK AZ ÖN IGÉNYEINEK VAGY KÖVETELMÉNYEINEK, ÉS A KÉSZÜLÉK VAGY A SZOLGÁLTATÁSOK MEGSZAKÍTÁS- ÉS HIBAMENTES MŰKÖDÉSÉT SEM GARANTÁLJA. A TCL SEMMILYEN KÖRÜLMÉNYEK KÖZÖTT, TEHÁT MÉG HANYAGSÁGBÓL KIFOLYÓLAG SEM TEHETŐ FELELŐSSÉ A KÉSZÜLÉK, VAGY AZ AZZAL ELÉRT BÁRMELY TARTALOM VAGY SZOLGÁLTATÁS BÁRKI ÁLTAL TÖRTÉNŐ HASZNÁLATÁVAL KAPCSOLATOS SEMMILYEN KÖZVETLEN, KÖVETKEZMÉNYES, KÜLÖNLEGES, KÖZVETETT, MINTASZERŰ VAGY BÜNTETÉS JELLEGŰ KÁRÉRT, AKÁR SZERZŐDÉSBŐL, ANNAK MEGSZEGÉSÉBŐL VAGY BÁRMELY MÁS JOGI ÉRTELMEZÉSBŐL ADÓDIK IS, MÉG AKKOR SEM, HA TÁJÉKOZTATTAK BENNÜNKET AZ ILYEN KÁROK BEKÖVETKEZÉSÉNEK LEHETŐSÉGÉRŐL. \n   A külső felek által nyújtott szolgáltatások bármikor előzetes értesítés nélkül módosíthatók, felfüggeszthetők, visszavonhatók, befejezhetők, lekapcsolhatók vagy megszakíthatók és a TCL (a Thomson márkájú TV-készülékek gyártója) semmilyen garanciát, biztosítékot vagy vállalást nem nyújt és nem vállal arra nézve, hogy a tartalom vagy szolgáltatás bármely időszakban ténylegesen rendelkezésre áll. A tartalmat és szolgáltatásokat külső felek nyújtják, olyan hálózatok és átviteltechnikai berendezések útján, amelyekre a TCL-nek semmilyen ráhatása nincs. A jelen felelősségelhárítás általános jellegének korlátozása nélkül a TCL kifejezetten elhárít minden felelősséget a jelen készülék útján nyújtott bármely tartalom vagy szolgáltatás bármely módosítása, megszakadása, letiltása, lekapcsolása vagy felfüggesztése kapcsán. A TCL bármikor, bármilyen értesítés vagy felelősség nélkül korlátozhatja egyes szolgáltatások vagy tartalmak használatát vagy elérhetőségét. A TCL-t semminemű felelősség nem terheli a tartalmat és a szolgáltatásokat érintő ügyfélszolgálattal kapcsolatban. A tartalommal és a szolgáltatásokkal kapcsolatos kérdésekkel közvetlenül az adott szolgáltatóhoz kell fordulni."];

var noChannelListRemind        = ["Nem található csatorna. A csatornalista a szkennelés után érhető el.","Csatornakeresés"];
var closeSubtitleRemind   = "Ez a funkció akkor érhető el, amikor a felirat funkció ki van kapcsolva. Be kívánja ezt most állítani?";

var estickerTitles = ["Nagyon realisztikus képek","Életre kelt színek","Élethű mozgás","Dinamikus képminőség","SR UHD upscaling","3D élmény","Gyorsabb teljesítmény","A jövő 4K tartalma","Élvezze az online világot","Extra tartalmakhoz való hozzáférés","Beépített digitális hangoló","Minden eszközhöz csatlakozik","Különféle 4K források","USB tartalom","Ultragyors WiFi","Mobiltartalom a TV-n","A mobileszköz tartalma","Helyi tartalom","A DivX jóváhagyásával","Határtalan kép","Csatorna kész","TDT Premium"];
var estickerDescriptions = ["Lenyűgöző vizuális élmény a Full HD négyszeres részleteinek köszönhetően az UHD képernyőn","A széles színskála minden jelenetbe érzelmeket visz az élénk pirosakkal és a smaragd zöldekkel","A 4K keret interpoláció és háttérvilágítás a képen jelentkező foltproblémák eltüntetéséhez","Az eredeti kép élességét megerősítették, hogy igazi dinamikus kifejező hatást mutasson ragyogó kontraszttal","Élvezze a minden eddiginél élesebb TV-show-kat és Blu-Ray lemezeket a Super Resolution technológiának köszönhetően","Élvezze a 3D élményt a TV-n és nézzen különböző 3D tartalmakat","További élvezetes szórakozás a Quad Core-ral a sima kapcsolatért, a fokozott teljesítményéért","HEVC (H.265) kodek támogatása a 4K videó közelgő felosztása tekintetében","Online applikációk, VOD-szolgáltatások, catch-up TV-k és internetes böngészések széles választéka","Nézzen több kiegészítő szolgáltatást és tartalmat kedvenc műsorszolgáltatók","A nagy felbontású TV csatornákhoz való hozzáférés kiegészítő set top box nélkül","Könnyű csatlakoztatni számos otthon elérhető digitális forráshoz","A TV készen áll a jövő kihívásaira, képes a 4K 50/60Hz HDMI 2.0-n keresztül HDCP 2.2-vel együtt lejátszani","4K felbontásban nagyképernyőn videó vagy fénykép közvetlenül az USB eszközről, HDD-ről vagy kameráról","A legújabb 2x2 MIMO és AC szabvány utolérhetetlen internet elérési sebességet nyújtanak","Élvezze nagyképernyőn a mobileszközökről származó fényképeket, videókat, applikációkat a képernyő-tükrözés technológiájának segítségével","Az okostelefonról vagy tabletta származó fényképek, videók, applikációk nagyképernyőn kivetíthetők","Nagy képernyőre vetít olyan helyi tartalmakat, mint a helyi hálózatból csatlakoztatott eszközökből származó fényképek és videók","Kölcsönzött vagy a DivX által védett filmeket játsszon le","Ultra keskeny keret és szupervékony stílus","A Canal+ tesztelte és jóváhagyta","A TDT Premium tesztelte és jóváhagyta"];							

var eManualTextArray = ["E-kézikönyv","Az itt bemutatott összes grafika csak tájékoztató jellegű."];
var frontPanelRemind = "Az előlap zárolva van.";
var eRPRemind		 = "Az üzlet mód nem elégíti ki az ERP kérést. Biztos benne?";	
var noRelatedChannel = "Nincs ide tartozó csatorna";
var option0624Name          = ["BOP","BFS","Eseményenként","GetUserID","BGM","Reset all","Gyári alapbeállítás","NRM","DVB-T2  és ország választás","HbbTV mód"];
var DVBT2AndChoice = ["Be","Országonként","Ki"];
var hbbtvServiceRemind = "Hamarosan jön a HbbTV szolgáltatás!";
var insertWord = "Beszúr";		
var viewDetail = "Részlet megtekintése";							

var remindOAD  = "Szoftverfrissítés. Új ajánlott szoftverfrissítés érhető el egy másik csatornán. Ha beleegyezik annak letöltésébe, akkor a csatorna automatikusan átválthat. Elvégzi most?";

var LEDStatus = ["Villog", "Normál","Ki"];
var netFlixRemind = "Ez a funkció a legközelebbi bejelentkezésig felfüggeszti a Netflix szolgáltatások elérését.";
var ESNExplanation = "Elektronikus sorozatszám";
var resetShopRemind = "A rendszer alaphelyzetbe áll, ne kapcsolja ki a TV-készüléket";
var initialSelectOption = "Válasszon egy opciót:";
var databaseRemind   = "A rendszer az adatbázis ismeretlen eredetű sérülését észlelte, ezért automatikusan újraépíti azt. A folytatáshoz nyomja meg az OK gombot";
var Deactivation = "Felfüggesztés";
var oadFutureRemind = "Szoftverfrissítés.\n Javasolt új szoftver jelenik meg ekkor: %s. A frissítés időigényes lehet, és közben elsötétülhet a képernyő. Ne kapcsolja ki a vevőkészüléket a frissítés közben. Ha elfogadja ezt a frissítést, kérjük hagyja bekapcsolva a vevőt az ütemezett időpontban. Fogadni kívánja ezt a frissítést?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Hangkimenet";
var bt_soundOutPutTV = "TV hangszórók";
var bt_soundOutPutBT = "Bluetooth eszköz";
var bt_soundOutPutBT_TV = "Bluetooth és TV";
var bt_refreshBarName = "Eszközök";
var bt_settingTips_On = "Kapcsolja be a bluetooth funkciót és keressen eszközöket.";
var bt_settingTips_Finding = "Elérhető eszközök keresése…";
var bt_settingTips_NoDevice = "Nincs elérhető eszköz.";
var bt_deviceList_State_NoConnect = "Nincs csatlakoztatva";
var bt_deviceList_State_Connecting = "Csatlakozás…";
var bt_deviceList_State_Connected = "Csatlakoztatva";
var bt_deviceList_State_Paired = "Párosítva";
var bt_deviceList_Conncect_Failed_Tips1 = "Csatlakozás sikertelen.";
var bt_deviceList_Conncect_Failed_Tips2 = "Igazolja vissza, hogy a(z) XXX bluetooth funkciója be van kapcsolva.";
var bt_deviceList_Conncect_Success = "Bluetooth eszközhöz csatlakoztatva.";
var bt_deviceList_Disconncect_Success = "Bluetooth eszközről leválasztva.";
var bt_deviceList_Disconnect = "Biztosan le akar csatlakozni a(z) XXX eszközről?";
var bt_tipsTitle = "Tipp";
var bt_bluetooth_Pairing_Title = "Bluetooth párosítás";
var bt_bluetooth_Input_Pin = "Adja be a PIN-kódot:";
var bt_bluetooth_Output_Pin_Tip = "Adja be a(z) XXXX PIN-kódot a billentyűzeten.";
var bt_bluetooth_Pin_Wrong_Tip = "Rossz PIN";
var bt_bluetooth_Remove_Pair_Title = "Lekérdezés";
var bt_bluetooth_Remove_Pair_Ask = "Elfelejti ezt az eszközt?";

var audioDescriptionName = ["Narráció","Hangszóró","Hangszóró hangereje","Fejhallgató","Fejhallgató hangereje","AD hangereje","BT-eszköz","BT-eszköz hangereje","Erősítő","Hangszóró"];
var audioDescriptionOptions = ["Ki","Normál","Narráció"];
var volumeOffRemind = 'A Beállítások menüben a XXX beállítása legyen „Be”.';
var switchSourceRemind   = " behelyezve. Kívánja most bekapcsolni?";
var footballModeName = "Sport mód";
var resetStadium = "Stadion";				

var atvSearchMenu = "ATV manual search";
var dtvSearchMenu = "DTV manual search";
var settingNoticeSourceName ="Auto forrásválasztás";

var smartTVOptions		= ["Smart TV portál","HbbTV","Megoszt és megtekint","Wi-Fi megjelenítése","Felhasználási feltételek",
    "Hálózati készenlét","smart TV visszaállítása","Cookie policy","Adatvédelmi irányelvek","Adattörlés"];
var supportOptions		= ["Távdiagnosztika","Kapcsolat"];
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

var tvDoctor=["Távdiagnosztika 2.0",
"Az alkalmazás csak az Ön okostévéjén működik, diagnosztikai vizsgálatokat végez és növeli az élményt. Az alkalmazás összegyűjti a TV típus- és üzemi információit, feltölti a kiszolgálóra, és ezek a TV problémáinak megoldásához használhatók. Az Ön személyes adataihoz nem fér hozzá. Ellenőrizze, hogy a TV megfelelően csatlakozik-e az internetre.",
"Helyi diagnosztika",
"A diagnosztika elindulása után kövesse mérnökünk útmutatásait.",
"Távdiagnosztika",
"A használat előtt győződjön meg arról, hogy a mérnökünk online rendelkezésre áll.",
"Sorozatszám:",
"&nbsp;&nbsp;&nbsp;&nbsp;Felhasználó azonosítója:",
"Kapcsolódás…",
"Diagnosztika folyamatban. Ne szakítsa meg a hálózati kapcsolatot. ",
"Az internet nem érhető el, ellenőrizze a hálózati kapcsolatot.",
"Kilépés"
];
var contactUsOption = ["Kapcsolat",
    "Amennyiben az eszköz használatával kapcsolatban probléma adódna, forduljon a TCL-hez.",
    "Kapcsolat",
    "Weboldal: Látogasson a(z)",
    "Ügyfélszolgálat telefonszáma:","Termékinformációk","Típusnév:",
    "Szoftver-verzió:","","Felhasználó azonosítója:","Projektazonosító:",
    "Kliens típusa:","Vezeték nélküli MAC-cím:","Vezetékes MAC-cím:","Netflix ESN:","Információk keresése okostelefonon.",
    " weboldalra, majd válassza ki az országot."];
							

//本地launcher的翻译，与服务器无关，只用于本地launcher
var homePageWords = ["Előzmények", "Keresés"];//home页的翻译
var titlePageWords = ["Kezdőlap", "Videók","TV","Alkalmazások"];//index的标题翻译
var videosPageWords = ["Mozi", "Sport","Zene","Népszerű","Játék","Oktatás","Hírek"];//videos页的内容翻译

//同时应用于本地和服务器
var statusPageWords = ["USB","Beállítások","Wi-Fi","Vezetékes"];//状态栏的翻译

//二级页面的翻译
var searchPageWords = ["Keresés", "Népszerű keresések:","TV-játékok, filmek, emberek ..."];
var resultSearchPageWords = [" ", "keresésének eredményei","Próbálkozzon más keresőszavakkal.","Sajnáljuk,","videó nem található."];
var historyPageWords = ["Előzmények", 'Az előzmények törléséhez nyomja meg az','gombot',"Egy törlése","Összes törlése","Tegnap","Ma"," Még egy videót sem nézett meg.","Megtekintési előzmények sikeresen törölve!"];
var channelPageWords = ["Sajnáljuk, videó nem található."];


//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9",
                       	   "Zoom-","0","Zoom+",
                       	   "Kilépés","0","",
                       	   "Lista","0","Szöveg",
                       	   "Műsortájékozt","Bevitel","Kilépés",
                       	   "Menü","Felirat","Info",
                       	   "Leállítás",
                       	   "Info","Menü","Kilépés",
                       	   "Kilépés"
                       	   ];

//added for LA sports mode
var sportsModeInitReminds= ["Ez a varázsló az USB-meghajtó sport-módra állítására használható. Válassza a beállítás-módot.",
						 "Válassza ki a sport-mód fájlméretét.",
						 "Sport-mód fájl létrehozása",
						 "Az USB-meghajtó sebessége túl kicsi (< %f MB/sec) a sport-mód funkcióhoz!",
						 "Az USB-meghajtó készen áll a sport-módra. Javsoljuk azonban, hogy a nagyobb teljesítmény érdekében változtassa meg (sebesség > %f MB/sec).",
						 "Az USB-meghajtó készen áll a sport-módra."];

var sportsModeExtra	= ["Le szeretné állítani a sport-módot és csatornát szeretne váltani?",
						"Le szeretné állítani a sport-módot és a jelforrást a SCART bemenetre csatlakoztatott eszközre szeretné állítani?",
						"Le szeretné állítani a sport-módot és a jelforrást egy HDMI bemenetre csatlakoztatott eszközre szeretné állítani?",
						"Kódolt csatornán a sport-mód nem használható.",
						"Le szeretné állítani a sport-módot és be szeretne lépni az EPG-be?",
						"Le szeretné állítani a sport-módot és be szeretne lépni a Média menübe?",
						"Le szeretné állítani a sport-módot és módosítani szeretné a bemeneti forrást?",
						"A TV ki fog lépni a jelenlegi sport-módból. Ki szeretne lépni?"];
var remoteControlNote = "- Az csomagban található távirányító termékmodelltől függően változhat";


var textArray = ["Volume","Channel","Source","Switch/Power","Guide","seconds to Power OFF"];
var guideArray = ["VOL-","VOL+","CH-","CH+","Pre","Next"];
var favChannelListRemind = ["Nincsenek kedvenc csatornák. Menjen a csatornalistára és a zöld gombbal adjon hozzá kedvenc csatornákat."];

var proxySetting = ["Proxybeállítások","Port"];
var powerOffShop = ["Javasoljuk az Üzlet üzemmód használatát, elfogadja?"];
var tcastTextPageWords = ["Rengeteg videó, alkalmazások gazdag választéka","TV-távvezérlő, mindig kéznél","Nagyszerű tartalmak, megosztás a nagy képernyőn"];
var tcastOtherWords = ["QR-kód beolvasása és a T-CAST letöltése","Hálózat a TV-re csatlakoztatva","TV neve","T-Cast"];
var hbbtvWords = ["Hbbtv-beállítások","HbbTV","Cookies","Harmadik fél sütik","Eszközazonosító","követés"];
var hbbtvTrackingWords = ["YES","NO","Nem érdekel"];
var eStickerTipWords = ["A tárhely 400 MB alá csökkent. Szeretne demó módban videókat törölni, hogy tárhelyet szabadítson fel?"];
var delEstickerVideoRemid = ["A videó törlése sikerült"];
var selectSatRemind = "Legfeljebb 20 műhold választható!";
var cookiePolicyTitle = "Cookie Policy – Online Smart TV Services";
var cookiePolicyConditions = ["Company respects your privacy when using Smart TVs manufactured and Services provided by Company. Cookies are used by many websites and other Internet services and your Smart TV will accept, store and transmit cookies to ensure that these websites and services operate properly. Company also uses cookies when providing you Services. In this Cookie Policy Company describes which cookies are set on your Smart TV and how you can manage them.\nPlease note that all personal data that Company collects and/or processes through or with the help of cookies is subject to the Privacy Policy and you should read the Cookie Policy together with the Privacy Policy.\n1. What is a cookie?\nCookies are small text files that may be placed on your Smart TV. When a website or the red-button service of a TV station is accessed, the website or service may store a cookie in the Smart TV. During subsequent accesses, a cookie that is placed on your Smart TV will send information to the party that has placed the cookie. Cookies are extremely common and used on a number of websites and services. Each cookie will typically contain the name of the domain from which the cookie has come, the \"lifetime\" of the cookie, and a value (usually a unique number). For a more thorough explanation of what cookies are and how they operate, please visit www.allaboutcookies.org.\nCookies can be categorized into functional cookies and non-functional cookies. Functional cookies are cookies that are strictly required for the purpose of providing you the Smart TV services and for websites and other services to provide the right content to the Smart TV. Non-functional cookies are all other cookies.\nThis Cookie Policy relates to cookies that are placed by us, as well as advertising cookies that may be placed by third parties through our services on your Smart TV. This Cookie Policy does not relate to cookies that may be placed when you use the Smart TV services to access third party websites, services or applications. For these cookies we refer you to the respective cookie policies of such third parties. However, this Cookie Policy describes how to delete such cookies (see section 4 below).\n2. Which non-functional cookies do we use?\nAdvertising: In-video and display advertisements may be served to your Smart TV when using Smart TV services. These advertisements can be served by us or by third parties via, or as coordinated by, our advertising server, which performs a central coordinating role in relation to the serving of such advertisements. Our advertising server or a third party advertising server will set a cookie on your Smart TV. By means of this cookie an advertising server will register whether an advertisement has been served to your Smart TV or whether someone using your Smart TV has clicked on an advertisement. We use the information saved in such advertising cookie to remember which advertisements have been served on your Smart TV so we can make sure that not too many of the same advertisements are served on any particular Smart TV, and that we are able to settle our commercial arrangements with our advertising partners. We shall not use this information to serve targeted advertisements. Furthermore, third parties may use our advertising system to serve advertisements to your Smart TV and place cookies on your Smart TV when such advertisements are served. \nThese cookies contain, among others, information about the served advertisements, information on in which application or domain such advertisements are served, and your IP address. This is done to remember how often a particular advertisement is shown, and in order to prevent the same advertisement being shown too often. External third party advertisers that may place advertisements may also use cookies to track your activity over multiple websites, and to provide advertisements that correspond to your personal preferences.\n3. Third party websites\nWhen you visit websites or services of third parties via the Smart TV services of your Smart TV, it is possible that such websites or services place cookies on your Smart TV, and that such websites track and store your interactions on such websites. We do not request or encourage such activities and will not use such information. Please refer to the respective cookie and privacy policies of such websites and services for more information about such parties’ use of such cookies.\n4. Cookie deletion\nYour user interface of your Smart TV allows you to delete all cookies and other local browser storage from the Smart TV. It is highly advisable to remove all cookies and locally stored settings prior to selling or giving away your Smart TV.\n5. Contacting us\nIf you have any questions or comments regarding our Cookie Policy or our practice of using cookies you can send us an e-mail via FRsupport@tcl.com.\nVersion: 1.0\n"];
var privacyPolicyTitle = "Privacy Policy – Online Smart TV Services";
var privacyPolicyConditions = ["We respect your privacy when handling your personal data. This Privacy Policy describes the entity responsible for the collection, processing and use of personal data we collect from you in connection with the use of our Smart TV services (\"Services\"), what types of personal data we collect about you, what we do with it, and your rights in relation to our use of the personal data. \n1. Data controller\nThe collection, processing and use of the personal data collected from you when using the Services is conducted by Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, China (\"Company\"). Please note, however, that we are not responsible for all data processing activities set out below. We have nevertheless included a description of the respective activities in our Privacy Policy because this processing is connected with your use of the Smart TV.\n2. Data processing consent\nSome of the collection, processing and/or use of your personal data require your consent. \nIf you have consented to the use of your personal data for the purpose of improving the Services, your consent had the following wording:\n\"I consent to the collection, processing and use of my device start time, DTV channel list, favorite channels list, visit time, and viewed channels for the purposes of analyzing user habits to improve the Services and/or to analyze how many online users Company has per day/month/year and to the sharing of this information with TV stations.\"\nIf you have consented to the use of your personal data for advertisements that are tailored to your interests, your consent had the following wording:\n\"I consent to the collection, processing and use of my client type and country for the purpose of receiving appropriate advertisements.\"\nConsent is voluntary and you will still be able to use the Services if you do not consent. However, you may see advertisements and other content that is not tailored to your preferences. Irrespective of your consent Company reserves the right to collect, process and/or use the above data to the extent permitted by applicable law.\nYou may withdraw your consent to any of the above with effect for the future at any time. You may object to a use of your personal data for marketing, market or opinion research and to the tailoring of the Services to your needs. In order to withdraw your consent and/or to object, please change the privacy settings of your Smart TV accordingly.\n3. Personal data collected\nIrrespective of your consent, Company collects, processes, stores and uses the following data categories:\nDevice-ID: Your Smart TV stores a fixed unique number that enables us to identify and authenticate the Smart TV when you use the Services. This number is called the Device-ID. The Device-ID will be provided to our service partner to provide you the Services. We also provide the Device-ID to selected content partners for authentication purposes. These content partners use the Device-ID to authenticate your Smart TV for access to services provided by a content partner.\nIP address and MAC address: Your Smart TV will be assigned an IP address when accessing the Internet. This IP address will be transmitted to us and processed by us each time the Smart TV requests information or data from the Services. If your Smart TV is behind a router (e.g. in a local home network or local WLAN), we may collect and process the IP address of such router. The MAC address is a unique number assigned to each network interface of your Smart TV. The MAC address will also be collected and processed by us when the Smart TV requests information or data from the Services.\nService request data: Whenever you connect your Smart TV to the Internet and turn on the Smart TV, it will automatically connect to the Services, which are managed by our service partner. Your Smart TV will then be authenticated as being certified for access to the Services. For authentication purposes, the Services store one or more unique numeric identifiers related to your Smart TV. When connecting to the Service, the Smart TV will transmit the IP address it has been assigned and will transmit device specific information (Smart TV model, software version) to look whether software updates are available.\nService settings: As part of the regular functionality of the Services you can manually arrange the order in which apps are displayed by the Services. Our service partner will store your arrangement and other preferences you may set during using the Services. This information will be linked to the Device-ID.\nDevice specific information: The Smart TV stores several information about itself and its configuration. This information includes the Smart TV type, the version of the operation system of the Smart TV, its panel resolution, the project ID (i.e. information regarding configuration files), the user agent, browser name, browser version, and the language and country that have been configured in the Smart TV. This information will be used by us and will be provided to our service partner and content partners.\nAdvertising: The Services may serve advertisements. These advertisements are served by us, or by third parties using advertising inventory assigned by us. All advertisements are served by means of, or via, our advertising server, which fulfills a coordinating role for the serving of advertisements. Our advertising server or the third party advertising server may set a cookie on the Smart TV. Please refer to our Cookie Policy for more information about these cookies.\nService and Content Partner traffic: When you use the Services your Smart TV will request data from the Services via the Internet. As part of these requests your IP address as described above and the language and country that has been configured in your Smart TV will be transmitted to our service partner. Our service partner will process the respective data in accordance with its privacy policy.\nSecond screen usage: If you use our second screen application, the controls you activate on the application and the country and language settings, DTV channel list, favorite channels lists, schedule lists, Device-ID, current channel, protocol version and IP address of your Smart TV will be collected and processed by us on our servers. Our servers will then control your Smart TV as directed by you in the second screen app.\nHbbTV - \"Red Button\": TV stations (\"Stations\") may send additional information with their TV signal. If the Smart TV receives specific instructions in such additional information and if it is connected to the Internet, the Smart TV will download a picture or small page from the Station's website and display it together with the information to press the \"Red Button\" on your remote control if you want to use additional services provided by the Station. This happens each time you zap. Downloading the picture from the Station's website the Smart TV will transmit some personal data, i.e. the DTV channel list, current channel, event information table, TV time, IP address of your Smart TV and cookies stored on the Smart TV (if any). The Station is responsible for the collection, processing and/or use of this data. Moreover, if you use additional services offered by a Station through the Red Button, the Station may collect other personal data about you (e.g. which on-demand videos you watch, the news you read, etc.).\n4. Purposes for which we process and/or use your personal data\nWe process collected data for the following purposes:\n• Providing the Services: We use the IP address and MAC address, Device-ID, the version of the operation system of the Smart TV, client type of your Smart TV and its panel resolution, the project ID (i.e. information regarding configuration files), your DTV channel list, viewed channels, time zone, country and language settings to provide your Smart TV with access to the Services and services provided by content partners. Purposes include (but are not limited to) authentication, providing location based services to you (e.g. weather forecasts); abuse handling, management of security incidents, monitoring of availability of the Services, and providing backup services of user preferences.\n• Authentication: We use the Device-ID and MAC address for authentication purposes.\n• Software updates: Each time your Smart TV is powered on, it will provide us with the IP address, Device-ID, software version, client type of your Smart TV, project ID (i.e. configuration files), user ID, serial number to offer you and provide you with appropriate software updates. \n• Improving the Services: We use aggregated and anonymized usage data (i.e. data about your interaction with the Services) to improve the user experience of the Services.\n• Serving advertisements: We use the information in advertising cookies to allow the system to log which advertisements have been shown on your Smart TV in order to make sure that you do not receive too many similar advertisements, and we are able to settle our commercial arrangements with our advertising partners. External advertisers that serve advertisements on the Services or the content partner websites after coordination by our advertising server, may also use cookies to track you over multiple websites, and to serve advertisements that reflect your personal preferences.\n• Optimizing advertisements: We use data related to advertising views and clicks on advertisements to optimize the advertising experience of consumers in the Service.\n• Discounts: We provide the Device-ID to selected content partners to enable these partners to identify to what extent they can provide you with free access to Video on Demand titles in their collection.\n• Law enforcement: We may be required to provide data to competent law enforcement authorities or courts of justice. If we do so, we will only do so subject to a binding legal instrument like a warrant or a judicial order, which requires us to cooperate with the relevant authorities.\nUse of the Services is possible by using pseudonyms, unless specific services require that you provide your name and/or email address.\n5. Categories of recipients\nCompany shares your personal data collected during your use of the Services only with the following third parties:\n• With third party providers of Smart TV services if you request such services (e.g. if you start the Netflix application on your Smart TV we may share your IP address, MAC address, software version and TV model name with Netflix).\n• With third party content partners if you request certain content provided by such content partners (e.g. in order to provide you with the GoLive IP TV service, we may share your TV client type, IP address and language settings with the legal entity providing the GoLive service).\n• To the extent you have consented to the sharing of specific personal data with third parties above, Company will share your personal data with such third parties.\n• With outsourcing service providers as data processors assisting Company with providing the Services.\nCompany shares your personal data with other third parties only if Company is obligated to do so on the basis of legal requirements (e.g. to courts or criminal prosecution authorities), you have consented to the respective sharing or the sharing is otherwise lawful under applicable law.\n6. Countries in which your data will be processed\nCompany and/or some of the recipients of your personal data listed above may be located outside of the European Economic Area (i.e. in the following countries: Peoples Republic of China, United States of America). Therefore, your personal data may be processed in countries which are not recognized as providing an adequate level of protection of personal data in accordance with Directive 95/46/EC of the European Parliament and of the Council of 24 October 1995 on the protection of individuals with regard to the processing of personal data and on the free movement of such data.\n7. Your rights\nYou may contact Company in order to receive information about your personal data processed by Company and/or to exercise your statutory rights regarding access, rectification, deletion and blocking of your personal data; and/or to object the processing of your personal data for purposes of marketing and/or market or opinion research.\n8. Changes to the Privacy Policy\nTo improve our Services we may require amendments to this Privacy Policy – e.g. by the implementation of new technologies or the introduction of new services. We reserve the right to change or supplement this Privacy Policy at any time.\n9. Contact information\nIf you have any questions about the Privacy Policy or would like to complain about our handling of your personal data, please contact us by using one of the following contact details:\nEmail: FRsupport@tcl.com\nVersion: 1.0\n"];
var privacyPolicyTerms = [
    "OkosTV-szolgáltatás engedélyezése",
    "Hozzájárulok az eszközöm indítási idejének, a DTV-csatornalista, a kedvenc csatornák listájának, a látogatási idő és a megtekintett csatornák adatainak gyűjtéséhez, feldolgozásához és felhasználásához a felhasználói szokások – a szolgáltatások javítása érdekében végzett – elemzése céljából és/vagy annak elemzésére, hogy a TCL mennyi online felhasználóval rendelkezik naponta/havonta/évente, valamint ezen információk TV-adókkal való megosztásához.",
    "Ajánlási szolgáltatás engedélyezése.",
    "Második képernyő alkalmazás engedélyezése mobileszközökhöz",
    "Automatikus szoftverfrissítések engedélyezése",
    "FreeviewPlay szolgáltatás engedélyezése"
];
var privacyPolicyTips = [
    "Minden Smart TV szolgáltatás letiltódik.",
    "TV-csatornák által nyújtott HbbTV szolgáltatás, a beépített hangolóegység letiltása esetén.",
    "A tartalom- és TV-műsorajánló szolgáltatás letiltódik.",
    "A második képernyő alkalmazás letiltódik.",
    "A TV nem keres automatikusan szoftverfrissítéseket és új funkciókat.",
    "A FreeviewPlay tartalom letiltódik."
];
var privacyPolicyRemind = "Pipálja ki a megfelelő jelölőnégyzetet a Beállítások menüben.";
var set = "Beállítás";
var copyShopDemoTips = ["USB eszköz csatlakoztatva, az eszközre másolja a videófájlt?","Videó másolása az USB-eszközre","A videó sikeresen átmásolva!","Videó másolási hiba!"];
var dataDeletionWords = ["Az Ön Smart TV szolgáltatással kapcsolatos adatainak törlése a szolgáltató-oldali szerverekről.","Megjegyzések: az Ön Smart TV felhasználói fiókjával kapcsolatos adatok törlése egy hónappal azután történik meg, hogy bejelöli ezt a lehetőséget. A törlés nincs hatással a TV-készülékben helyileg tárolt adatokra.","A továbbiakban ne küldjön adatokat a Smart TV szerverére.","Megjegyzések:  ennek a lehetőségnek a bejelölése után a TV-készülék nem küldi el a Smart TV szolgáltatások használatával kapcsolatos adatait a szerverre. A TV-készülék a továbbiakban nem kap ajánlott szolgáltatásokat.","Ha többet szeretne megtudni, kérjük, látogasson el a www.tcl.eu weboldalra."];
var miracastWords = ["Vezeték nélküli kapcsolat","Android telefon tükrözése a TV-n","A csatlakozáshoz kattintson ide","Ez a funkció csak Android telefonon érhető el"];
var miracastTips = ["A csatlakozás lépései","Nyissa meg a rendszerbeállításokat","Több csatlakozási lehetőség \n / Egyéb vezeték nélküli kapcsolatok","Válassza ki a vezeték nélküli megjelenítőt","A csatlakozáshoz kattintson ide \n várakozás a keresési találatra"];
var termsAndConditions = ["\nThe contents and services (collectively the \"Licensed Application\") made available to you through this TV set (this \"Device\") are licensed, not sold, to you for use only under these terms and conditions. The providers of the Licensed Application (each an \"Application Provider\") reserve all rights not expressly granted to you.\n\n1.Scope of License\n\nThe license granted to you for a Licensed Application by the relevant Application Provider is limited to a non-transferable license to use the Licensed Application on the Device that you own or control. You may not distribute or make the Licensed Application available over a network where it could be used by multiple devices at the same time. You may not rent, lease, lend, sell, redistribute or sublicense the Licensed Application. \n\nAll Licensed Applications and all contents included therein that are accessible through this Device belong to the Application Provider and are protected by applicable intellectual property laws. Unless otherwise permitted by applicable law, you may not modify, copy, decompile, reverse engineer, disassemble, republish, upload, post, transmit, translate, attempt to derive the source code of, create derivative works of, or otherwise exploit any Licensed Application or any updates or any part thereof. If you breach this restriction, you may be subject to prosecution and damage claims. The terms of the license will govern any upgrades provided by the Application Provider that replace and/or supplement the original Licensed Application, unless such upgrade is accompanied by a separate license in which case the terms of that license will govern. You shall be solely responsible for any and all costs (if any) for the upgrading of the Licensed Application.\n\n2.Third-party Materials\n\nThe Licensed Application may enable access to Application Provider’s and third party services and web sites (collectively the \"Services\"). By using any of the Services, you may encounter contents that may be deemed offensive, indecent, or objectionable, which contents may or may not be identified as having explicit language, and that the results of any search or entering of a particular URL may automatically and unintentionally generate links or references to objectionable material. Nevertheless, the manufacturer of this Device (the \"Manufacturer\") and the Application Provider shall not have any liability to you for contents that may be found to be offensive, indecent, or objectionable. \n\nThe Manufacturer shall not be responsible for examining or evaluating the content, accuracy, completeness, timeliness, validity, copyright compliance, legality, quality or any other aspect of such Services. The Manufacturer does not warrant or endorse and shall not assume and shall not have any liability or responsibility to you or any other person for any of the Services. \n\nThe Services may contain proprietary content, information and material (collectively \"Third-party Materials\") that are protected by applicable intellectual property and other laws, and you shall not use such Third-party Materials in any way whatsoever except for permitted use of the Services. Unless otherwise permitted by applicable law, you shall not reproduce, modify, rent, lease, loan, sell, distribute the Third-party Materials or create derivative works thereof in any manner, and you shall not exploit the Services in any unauthorized way whatsoever. You shall not use the Services in any manner to harass, abuse, stalk, threaten, defame or otherwise infringe or violate the rights of any other party, and the Manufacturer shall not in any way be responsible for any such use by you, nor for any harassing, threatening, defamatory, offensive or illegal messages or transmissions that you may receive as a result of using any of the Services. \n\n3.No Warranty\n\nAll Licensed Applications and Services are provided \"as is\" and \"as available\" without warranty of any kind, either express or implied. The Manufacturer expressly disclaims all warranties and conditions with respect to the Licensed Applications and the Services, either express or implied, including but not limited to, warranties of merchantability, of satisfactory quality, of fitness for a particular purpose, of accuracy, of quiet enjoyment, and of non-infringement of third party rights. The Manufacturer does not guarantee the accuracy, validity, timeliness, legality, or completeness of any Licensed Application or Service made available through this Device and does not warrant that the Device, the Licensed Applications or the Services will meet your requirements, or that operation of the Licensed Applications or the Services will be uninterrupted or error-free, or that defects in the Licensed Application or Services will be corrected. Should the Licensed Application or Services prove to be defective, you shall assume the entire cost of all necessary servicing, repair or correction.\n\nThe Licensed Applications and Services may be changed, suspended, removed, terminated or interrupted, or access may be disabled at any time, without notice, and the Manufacturer makes no representation or warranty that any content or service included in the Licensed Applications and Services will remain available for any period of time. Such contents and services are transmitted by third parties by means of networks and transmission facilities over which the Manufacturer has no control. Without limiting the generality of the foregoing, the Manufacturer expressly disclaims any responsibility or liability for any change, interruption, disabling, removal of or suspension of any content or service made available through this Device. The Application Provider and other providers of the Services reserve the right to change, suspend, remove, or disable access to any Licensed Application or Services at any time without notice. The Manufacturer may also impose limits on the use of or access to certain Licensed Applications or Services, in any case and without notice or liability.\n\nThe Manufacturer does not provide customer service related to the Licensed Applications and the Services. Any question or request for service relating to the Licensed Applications and the Services should be made directly to the respective provider.\n\n4.Collection and Use of Information\n\nThe Manufacturer, the Application Providers and the providers of the Services may collect and use technical data and related information, including but not limited to technical information about this Device, system and application software, and peripherals, to facilitate the provision of software updates, product support and other services to you (if any) related to the Device and the Licensed Application. The Manufacturer, the Application Providers and the providers of the Services may use such information, as long as it is in a form that does not personally identify you, to improve its products or to provide services or technologies to you. For more information on the collection and use of information, please visit our privacy policy: http://www.tcl.eu/en/.\n\n5.Unavailability of Certain Features\n\nDue to restrictions of Application Provider, certain features, applications, and services may not be available on this Device (including its peripheral devices) or in all territories. Some features on this Device may also require additional peripheral devices or membership fees that are sold separately.\n\n6.Limitation of Liabilities\n\nTo the extent not prohibited by applicable law, under no circumstances, including negligence, shall the Manufacturer be liable, whether in contract or tort, for any direct, indirect, incidental, special or consequential damages, attorney fees, expenses, or any other damages arising out of, or in connection with, any information contained in, or as a result of the use of the Device, any Licensed Application or any Service by you or any third party, even if advised of the possibility of such damages.\n\nThe Manufacturer shall only be liable for intent and gross negligence."];
var privacyNotice = ["\nWe respect your privacy when handling your personal data. This Privacy Notice describes the entity responsible for the processing of personal data we collect from you in connection with the use of our Smart TV services (\"Services\"), what types of personal data we collect about you, what we do with it, and your rights in relation to our use of the personal data. \n\n1.Data controller and representative in the European Union\n\nThe collection, processing and use of the personal data collected from you when using the Services is conducted by Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, China (\"Company\"). Our contact details as well as the contact details of our representative in the European Union are provided under Section 12 below. Please note, however, that we are not responsible for all data processing activities set out below. We have nevertheless included a description of the respective activities in our Privacy Notice because this processing is connected with your use of the Smart TV.\n\n2.Data processing consent\n\nSome of the data processing activities that we conduct require your consent, e.g. the use of your personal data for the purpose of improving the Services.\n\nConsent is voluntary and you will still be able to use the Services if you do not consent. However, you may see content that is not tailored to your preferences. Irrespective of your consent we reserve the right to process your personal data to the extent permitted by applicable law.\n\nYou may withdraw your consent at any time. The withdrawal of consent shall not affect the lawfulness of processing based on consent before its withdrawal. In order to withdraw your consent and/or to object (c.f. Section 10 and Appendix Your Rights below for your rights to object), please change the privacy settings of your Smart TV accordingly.\n\n3.Specific categories of personal data\n\nWe process in particular the following data categories:\n\nDevice-ID: Your Smart TV stores a fixed unique number that enables us to identify and authenticate the Smart TV when you use the Services. This number is called the Device-ID. \n\nIP address and MAC address: Your Smart TV will be assigned an IP address when accessing the Internet. If your Smart TV is behind a router (e.g. in a local home network or local WLAN), we may process the IP address of such router. The MAC address is a unique number assigned to each network interface of your Smart TV. \n\nDevice specific information: The Smart TV stores several information about itself and its configuration. This information includes the Smart TV type, the version of the operation system of the Smart TV, its panel resolution, the project ID (i.e. information regarding configuration files), the user agent, browser name, browser version, and the language and country that have been configured in the Smart TV. \n\nThese information will be used by us and will be provided to our service partner and content partners for the purposes described below.\n\n4.Purposes for which we process and/or use your personal data and legal bases\n\nThe purposes for which we process your personal data and the respective legal bases are described below. To the extent that contractual purposes are mentioned below as legal basis, we cannot provide you with the Services if you do not provide us with the respective data. To the extent that your consent is mentioned as legal basis, you are free to provide or withhold your consent. If you do not provide your consent, we will not process your personal data for the respective purpose.\n\n•Providing the Services: We use the IP address and MAC address, Device-ID, the version of the operation system of the Smart TV, client type of your Smart TV and its panel resolution, the project ID (i.e. information regarding configuration files), your DTV channel list, viewed channels, time zone, country and language settings to provide your Smart TV with access to the Services and services provided by content partners. Purposes include (but are not limited to) providing location based services to you (e.g. weather forecasts); abuse handling, management of security incidents, monitoring of availability of the Services, and providing backup services of user preferences.\n\nWhen you use the Services your Smart TV will request data from the Services via the Internet. As part of these requests your IP address as described above and the language and country that has been configured in your Smart TV will be transmitted to our service partner. Our service partner will process the respective data in accordance with its privacy notice.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) General Data Protection Regulation (“GDPR”).\n\n•Service Settings: As part of the regular functionality of the Services you can manually arrange the order in which apps are displayed by the Services. Our service partner will store your arrangement and other preferences you may set during use of the Services. This information will be linked to the Device-ID.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•Authentication: Whenever you connect your Smart TV to the Internet and turn on the Smart TV, it will automatically connect to the Services, which are managed by our service partner. Your Smart TV will then be authenticated as being certified for access to the Services. For authentication purposes, the Services store one or more unique numeric identifiers related to your Smart TV. We use the Device-ID and MAC address for authentication purposes. We also provide the Device-ID to selected content partners for authentication purposes. These content partners use the Device-ID to authenticate your Smart TV for access to services provided by a content partner.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•Remote diagnostics: As part of the Services, we provide you with remote diagnostic services. Therefore, we process the Device-ID, device number, serial number, MAC address, and error logs, error codes and error descriptions which are provided by the faulty module (application, middleware system).\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•After-sales service: Pursuant to applicable law you may have warranty or similar rights to obtain after-sales services. TCL Europe, 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, France is responsible for handling warranty claims and other requests for after-sales services and the processing of your personal data associated therewith. I.e., for the purposes of after sales services, TCL Europe acts as data controller and we are not responsible for the respective processing of your personal data.\n\nWhen you ask for our after-sales related service, your name, e-mail address, phone number, service request and postal address included in the invoice may be required for the purpose of providing you with the after-sales service. The information may also be collected through the after-sales partners of our resellers or authorized service providers if you call them for service. You can contact TCL Europe under the contact details stated in Section 12 below for more information about the protection of personal data in connection with after-sales services.\n\nThe legal basis for the respective processing is the obligation to comply with legal obligations pursuant to Article 6 (1) c) GDPR.\n\n•T-Launcher: T-Launcher is the main page for the use of the Smart TV on Linux operating system (please see below for the use of the android operating system) and allows you to select certain content.\n\nThe legal basis for the processing of your personal data that is necessary for your use of the T-Launcher are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\nSubject to your prior consent, we will also monitor the use of the T-Launcher, i.e.:\n\n-	When you start to use T-Launcher, we will record the time of entering and exiting T-Launcher.\n-	When you start to play a video of T-Launcher, we will record the name and the duration time of the video (not applicable to Netflix, YouTube or any other service provided by a third party).\n-	When you enter or exit a page, we will record the staying time on the page.\n-	When you move your cursor from one location to another, or enter an application, we will record this event.\n-	When you install, remove or update applications, we will record these events, including the name of applications.\n\nWe collect these information mainly for big data analysis to improve products and to provide better content services to users.\n\nThe legal basis for the processing of your personal data in connection with the monitoring of your use of the T-Launcher is your consent pursuant to Article 6 (1) a) GDPR.\n\nIf you have bought an Android TV and use Google’s android operating system, your personal data will be processed by Google and we are not responsible for such processing. Please refer to Google’s privacy notice for information about the related processing of your data and your respective rights.\n\n•T-Cast: T-Cast allows you to control your TV using your phone and to share videos, music and pictures stored in your smart phone on the TV. T-Cast also allows you to mirror your smartphone on your TV.\n\nThe download and use of the app is voluntary. If you download and use the app, we will process the MAC address to calculate how many T–Cast versions have been used in the market. This is required to be able to offer you this service. If you use our second screen functionality, the controls you activate on the application and the country and language settings, DTV channel list, favorite channels lists, schedule lists, Device-ID, current channel, protocol version and IP address of your Smart TV will be collected and processed by us on our servers. Our servers will then control your Smart TV as directed by you in the app.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•Software updates: Software updates are part of the Services. Thus, each time your Smart TV is powered on, it will provide us with the IP address, Device-ID, device number, software version, client type of your Smart TV, project ID (i.e. configuration files), user ID, and serial number to look whether software updates are available and to offer you and provide you with appropriate software updates.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•Law enforcement: We may be required to provide data to competent law enforcement authorities or courts of justice. If we do so, we will only do so subject to a binding legal instrument like a warrant or a judicial order, which requires us to cooperate with the relevant authorities.\n\nThe legal basis for the respective processing is our obligation to comply with legal obligations pursuant to Article 6 (1) c) GDPR.\n\nUse of the Services is possible by using pseudonyms, unless specific services require that you provide your name and/or email address.\n\n5.Privacy and safety of children under 16\n\nWe understand the importance of taking extra precautions to protect the privacy and safety of children using our Services. Children under the age of 16, or equivalent minimum age in the relevant jurisdiction, are not permitted to provide their personal information via the TV set or when they call for after-sales service, unless their parent provided verifiable consent.\n\nAs we never collect birth dates of users, we can't identify the age of users. But if we learn that we have collected the personal information of a child under 16, or equivalent minimum age depending on the jurisdiction, outside of the above circumstances we will take steps to delete the information as soon as possible.\n\n6.Third party apps\n\nYour Smart TV allows the use of apps provided by third parties, such as Netflix, YouTube or HbbTV (red button service provided by TV broadcasters). You may download the apps from the app store or activate third party apps that are already pre-installed on your device. Third party apps that are pre-installed on your device do not collect personal data without your prior authorization. E.g. Netflix is already pre-installed on the device but only collects data when you log into your Netflix account. HbbTV only collects data when you consent to the collection by pressing the designated button on your remote control.\n\nIf you enable a third party app, personal data about you may be processed by the app provider. We are not responsible for such processing; please refer to the privacy notice of the third party app for information about the related processing of your data and your respective rights.\n\n7.Categories of recipients\n\nWe share your personal data collected during your use of the Services only with third party content partners if you request certain content provided by such content partners or with service providers as data processors assisting us with the provision of the Services.\n\nWe share your personal data with other third parties only if we are obligated to do so on the basis of legal requirements (e.g. to courts or criminal prosecution authorities), if you have consented to the respective sharing or if the sharing is otherwise lawful under applicable law.\n\n8.Countries in which your data will be processed\n\nWe and/or some of the recipients of your personal data listed above may be located outside of the European Economic Area (e.g. in the Peoples Republic of China, or United States of America). Therefore, your personal data may be processed in countries where the data protection laws may provide a different level of protection compared to the laws in your jurisdiction and which are not recognized as providing an adequate level of protection of personal data in accordance with the GDPR. The countries which provide an adequate level of data protection from a European data protection law perspective include Andorra, Argentina, Canada, Switzerland, Faeroe Islands, Guernsey, the State of Israel, Isle of Man, Jersey, New Zealand and the Eastern Republic of Uruguay. Recipients in the USA may partially be certified under the EU-U.S. Privacy Shield and thereby recognized as providing an adequate level of data protection from an European data protection law perspective. \n\nWhere required, we will implement appropriate safeguards with regard to data transfers to recipients outside of the European Union that do not provide an adequate level of data protection. A copy of the respective measure may be requested by contacting us as stated under Section 12. below.\n\n9.Storage Period\n\nYour personal data will be retained as long as necessary to provide you with the Services. For most data this generally means that we will retain your data for one month. For the purpose of remote diagnostics and after-sales services we may retain your data up to ten years. When we no longer need to use your personal data to comply with contractual or statutory obligations, we will remove it from our systems and records and/or take steps to properly anonymize it so that you can no longer be identified from it.\n\n10.Your rights\n\nPursuant to applicable data protection law you may have the right to: request access to your personal data, request rectification of your personal data; request erasure of your personal data, request restriction of processing of your personal data; request data portability, and object to the processing of your personal data. Please note that these aforementioned rights might be limited under the applicable national data protection law. For further information on these rights please refer to the Appendix Your Rights below.\n\nYou also have the right to lodge a complaint with the competent data protection supervisory authority.\n\nTo exercise your rights please contact us as stated in Section 12 below.\n\n11.Changes to the Privacy Notice\n\nTo improve our Services we may require amendments to this Privacy Notice – e.g. by the implementation of new technologies or the introduction of new services. We reserve the right to change or supplement this Privacy Notice at any time.\n\n12.Contact information and representative in the European Union\n\nIf you have any questions about the Privacy Notice or would like to complain about our handling of your personal data, please contact us by using the following contact details:\n\nContact form: www.tcl.eu/privacy/support\n\nOur representative in the European Union is: TCL Europe having offices at 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, France. You may contact TCL Europe via the contact form stated above.\n\nVersion: 2.0\n\nAppendix Your Rights\n\na.Right of access: You may have the right to obtain from us confirmation as to whether or not personal data concerning you is processed, and, where that is the case, to request access to the personal data. The access information includes - inter alia - the purposes of the processing, the categories of personal data concerned, and the recipients or categories of recipients to whom the personal data have been or will be disclosed. However, this is not an absolute right and the interests of other individuals may restrict your right of access.\n\nYou may have the right to obtain a copy of the personal data undergoing processing. For further copies requested by you, we may charge a reasonable fee based on administrative costs. \n\nb.Right to rectification: You may have the right to obtain from us the rectification of inaccurate personal data concerning you. Depending on the purposes of the processing, you may have the right to have incomplete personal data completed, including by means of providing a supplementary statement.\n\nc.Right to erasure (\"right to be forgotten\"): Under certain circumstances, you may have the right to obtain from us the erasure of personal data concerning you and we may be obligated to erase such personal data. \n\nd.Right to restriction of processing: Under certain circumstances, you may have the right to require the restriction of processing of personal data concerning you. In this case, the respective data will be marked and may only be processed by us for certain purposes.\n\ne.Right to data portability: Under certain circumstances, you may have the right to receive the personal data concerning you, which you have provided to us, in a structured, commonly used and machine-readable format and you may have the right to transmit those data to another entity without hindrance from us.\n\nf.Right to object:\n\nUnder certain circumstances, you may have the right to object, on grounds relating to your particular situation, or where personal data are processed for direct marketing purposes at any time to the processing of your personal data by us and we can be required to no longer process your personal data.\n\nMoreover, if your personal data is processed for direct marketing purposes, you have the right to object at any time to the processing of personal data concerning you for such marketing, which includes profiling to the extent that it is related to such direct marketing. In this case your personal data will no longer be processed for such purposes by us."];
var cookieNotice = ["\nWe respect your privacy when using Smart TVs manufactured and Services provided by us. Cookies are used by many websites and other internet services and your Smart TV will accept, store and transmit cookies to ensure that these websites and services operate properly. \n\nWe do not use cookies when providing the Services to you. However, third parties (e.g. third party app providers) may use cookies when you use the Smart TV to access their services. This Cookie Notice can only provide limited information concerning cookies that may be placed by third parties. For information on the actual cookies used by third parties and their functionalities we refer you to the respective cookie notices of such third parties. However, in this Cookie Notice we provide a general description which cookies can be set on your Smart TV and how you can manage them.\n\n1.What is a cookie?\n\nCookies are small text files that may be placed on your Smart TV. When a website or the red-button service of a TV station is accessed, the website or service may store a cookie in the Smart TV. During subsequent accesses, a cookie that is placed on your Smart TV will send information to the party that has placed the cookie. Cookies are extremely common and used on a number of websites and services. Each cookie will typically contain the name of the domain from which the cookie has come, the \"lifetime\" of the cookie, and a value (usually a unique number). For a more thorough explanation of what cookies are and how they operate, please visit www.allaboutcookies.org.\n\nCookies can be categorized into functional cookies and non-functional cookies. Functional cookies are cookies that are strictly required for the purpose of providing you services. Non-functional cookies are all other cookies.\n\n2.Third party websites\n\nWhen you visit websites or services of third parties via the Services of your Smart TV, it is possible that such websites or services place cookies on your Smart TV, and that such websites track and store your interactions on such websites. We do not request or encourage such activities and will not use such information. Please refer to the respective cookie and privacy notices of such websites and services for more information about such parties’ use of such cookies.\n\n3.Cookie deletion\n\nYour user interface of your Smart TV allows you to delete all cookies and other local browser storage from the Smart TV. It is highly advisable to remove all cookies and locally stored settings prior to selling or giving away your Smart TV.\n\nVersion: 2.0"];
var privacyPolicy = ["Kérjük, jelölje be az alábbi négyzeteket, ha szeretné használni okostévé-szolgáltatásainkat és a kapcsolódó szolgáltatásokat. Ezen szolgáltatások használatához szükséges feldolgoznunk az Ön személyes adatait az Adatvédelmi közleményünkben leírtak szerint: http://www.tcl.eu/en/","Az okostévé-szolgáltatás, a szolgáltatási beállítások tárolása és az okostévé automatikus hitelesítésének engedélyezése. Ha ezt a négyzetet nem jelöli be, akkor csak a normál TV-hez és a HDMI-hez férhet hozzá.","Automatikus szoftverfrissítések engedélyezése. Ezt a négyzetet bejelölve a terméket naprakészen tarthatja a legújabb szoftverfrissítésekkel, és a legjobb teljesítményt érheti el.","(A szoftverfrissítések fontosak a TV megfelelő működéséhez, mivel új funkciókat, stabilitást és biztonságot nyújtanak. Ezért javasoljuk a négyzet bejelölését.)","Kérjük, jelölje be az alábbi négyzetet, ha hozzájárul ahhoz, hogy személyes adatait a következő célból is feldolgozzuk. Az adatfeldolgozás módjával kapcsolatos további információkért olvassa el Adatvédelmi közleményünket: http://www.tcl.eu/en/","Hozzájárulok személyes adataim feldolgozásához (pl. T-Launcher belépési és kilépési időpont) a TCL termékeinek javítása céljából, és hogy a TCL jobb tartalmat tudjon biztosítani az okostévéken."];
var termsFirTitle = ["Általános szerződési feltételek","Adatkezelési tájékoztató","Cookie-kezelési nyilatkozat"];
var termsSecTitle = ["Olvassa el a feltételeket, és fogadja el őket.","Kérjük, olvassa el és fogadja el az adatkezelési tájékoztatót.","Kérjük, olvassa el és fogadja el a cookie-kezelési tájékoztatót."];
var tickall = "Az összes kijelölése";
var tickremindWords = "Kérjük, pipálja ki a jelölőnégyzeteket, egyébként nem tudja használni a Smart TV szolgáltatást.";