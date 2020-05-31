
var all_country 	= ["Australia","Itävalta","Belgia","Bulgaria","Kroatia","Tšekki","Tanska","Suomi","Ranska","Saksa",
						"Kreikka","Unkari","Italia","Luxemburg","Alankomaat","Norja","Puola","Portugali","Romania","Venäjä",
						"Serbia","Slovenia","Espanja","Ruotsi","Sveitsi","Yhdistynyt kuningaskunta","Uusi-Seelanti"," "/*Arab*/,"Viro"," "/*Hebrew*/,
						"Latvia","Slovakia","Turkki","Irlanti","Japan","Filippiinit","Thailand","Maldives","Uruguay","Peru",
    					"Argentina","Chile","Venezuela","Ecuador","Costa Rica","Paraguay","Bolivia","Belize","Nicaragua","Guatemala",
						"Kiina","Taiwan","Brazil","Canada","Mexico","United States","South Korea","Romania","Vietnam"/*新添加的，底层结构体中没有*/,"Ukraina"/*新添加的，底层结构体中没有*/,
    					"Iran","Iraq"," ","Kazakhstan","Uzbekistan"," ","Kyrgyzstan","Algeria","Egypt","Tunisia",
   						"Tanzania","Kenya","Pakistan","Indonesia","Kuwait","Saudi Arabia","Qatar","Israel","Lebanon","bahrain",
    					"Angola","Congo","India","Turkmenistan","Colombia","Mongolia","Bangladesh","Nepal","Sri Lanka","North Korea",
    					"Moldova","Polynesia","EI Salvador"," ","Fiji","Liberia","Jordan","Myanmar","Ghana","Georgia",
    					"Armenia","Oman","yemen","Syria","Palestine","Afghanistan","Morocco","benin","IvoryCoast","Nigeria",
    					"Sudan","Ethiopia","Zambia"," ","South Africa","mozambique","Libya","Albania","Belarus","Iceland",
						"Liettua","Mauritius","Dubai","UAE","Tajikistan","Bengal","Bosnia-Hertsegovina","Kypros","Kosovo","Makedonia",
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
				
var all_language 	= ["Tšekki","*","Tanska","*","*","Saksa","Englanti","Ranska","Kreikka","Espanja",
						"Kroatia","*","Italia","Unkari","Hollanti","Norja","Puola","Portugali","Venäjä","Romania",
						"Sloveeni","Serbia","Suomi","Ruotsi","Bulgaria","Slovakki","Chinese","*","Gaeli","*",
						"Kymri","Arabia ","irlanti","Latvia","*","Turkki","Viro","Hollanti"/*Netherlands*/,"Korea","*",
						"hindi","*","*","mandariini","kantonilainen","maori","Alkup. ääni"/*Qaa*/,"Ei määritetty"/*Undetermined*/,"*","Tuntematon",
						"Ei määritetty","*","*","*","*","*","*","*","*","*",
						"*","*","*","Albanialainen","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baski","*","*",
						"*","*","*","*","*","*","*","Bosnialainen","*","*",
						"*","*","*","*","Λευκορωσικά","*","*","Katalaani","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galicia","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Islanti","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","japanilainen","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Liettua",
						"*","*","*","*","*","*","*","Makedonialainen","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romantiikka","*","*","*","*",
						"*","*","*","Saami","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Teksti-TV",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukraina","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Pois","Päällä"];
var okCancel		= ["kunnossa","Peruuta"];
var yesNo			= ["KYLLÄ","EI"];
var level			= ["Pois","Matala","Korkea","Keski"];
var manualAuto		= ["Ohjekirja","Automaattinen"];
var homeShop		= ["Koti","Liike"];
var picPreset		= ["Standardi","Dynaaminen","Luonnollinen","Elokuva","Oma"];
var picColorTemp	= ["Viileä","Normaali","Lämmin","Oma"];
var pic3dNavig		= ["Ohjekirja","Automaattinen","Puoliautom."];
var _3dOptions		= ["3D-tila","3D-to-2D","V-O-kytkin","Terävyysalue"];
var pic3DMode       = ["Pois","2D-to-3D","Vierekkäin","Yläosa ja Alaosa","Rivilomitus"];
var picEcoOptions	= ["Energiansäästö","Valoanturi","Paikallinen himmennys","Sekoitettu himmennys"];
var picGeoOptions	= ["Geometria","H-asento","V-asento","Kellotus","Vaiheistus"];//Geometry 无翻译
var picAdWhiteBal	= ["Vahvistus, P","Vahvistus, V","Vahvistus, S","Offset, P","Offset, V","Offset, S"];
var souOptions		= ["Äänen esiasetus","Balanssi","Ääniviive","SRS TSHD","Autom. äänen säätö",
						"SPDIF","SPDIF-viive","Television asettaminen","Ääniraidan kieli","Äänikanava",
						"Kuvailutulkkaus","Bassotehostus","Dolby Digital Plus"];
var souSpdifType	= ["Automaattinen"/*Dolby*/,"PCM","Pois"];
var colorSpace      = ["Automaattinen","Natiivi","Oma"];
var souPresetPara	= ["100Hz","500Hz","1.5KHz","5KHz","10KHz"];
var chOptions		= ["Kanavahaku","Kanavalista","EPG","Kanavan järjestäjä","Kanavan vianetsintä",
						"ajan siirto","Tekstitys","Teksti-TV","Kanavalistan tyyppi"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Signaalin voimakkuus","Signaalin laatu","Taajuus (KHz)","Palvelutunnus","Verkkotunnus","Verkon nimi"];
var chScanOptions	= ["Maa / alue","Viritintila","Kanavien haku","Päivitä haku","An. kanavien haku",
						["Kaapeli manuaal. selaus","Antenni manuaal. Selaus","Satelliitin manuaalinen säätö"],"Satelliittiantennin asennus","Suosikkiverkon valinta","Tyhjennä kanavalista:","LCN"];
var favNetDes		= "Valitse suosikkiverkko";
var tuner			= ["Kaapeli","Antenni","Satelliitti"];//Satelite 无翻译
var passError		= "Väärä salasana.\nYritä uudelleen.";
var chType			= ["Analog. kanavat: ","Digit. kanavat: "];
var chScanStatus	= ["Tila: Selaus","Tila: Haku valmis","Tila: Haku peruttu","Tila: Virhe haussa"];
var chScanPara		= ["Taajuus (KHz)","Modulaatio","Symbolinopeus (Ksym/s)","Verkkotunnus","Järjestelmä",
						"Viritys","Signaalin voimakkuus","Signaalin laatu","Selaustila","ID kanava"];
var chScanParaMHZ      = ["Taajuus (MHz)"];
var chAtvManSys		= ["LÄNSI-EUR","ITÄ-EUR","UK","Ranska"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Automaattinen"];
var chCleanDes		= "Haluatko tyhjentää kanavalistan?";
var chDeletDes		= "Haluatko poistaa kanavan?";
var chOperator		= ["Ziggo","UPC","Muut"];
var chScanType		= ["Digitaalinen & Analoginen","Digitaalinen","Analoginen"];
var chScanMode		= ["Täysi","Eteenpäin","Pika"];
var bookingModes	= ["Tallennus","Muistutus"];
var dayName			= ["su","ma","ti","ke","to","pe","la"];
var monthName		= ["tammi", "helmi","maalis","huhti","toukokuu","kesä","heinä","elo","syys","loka","marras","joulu"];
var filter			= ["Filter","Tyyppi","Alatyyppi"];
var chEpgFirstGenre	= ["Elokuva","Uutiset","Viihde","Urheilu","Lapset","Musiikki","Taide","Yhteiskunta","Opetus","Vapaa-aika","ERITYISET"];
var chEpgSecondGenre= [["Draama","Dekkari","Seikkailu","Scifi","Komedia","Saippuaooppera","Romantiikka","Draama","Aikuisviihde"," "," "," "],
						["Ajankohtaisohjelmat","Säätiedotukset","Uutismakasiinit","Dokumentit","Keskusteluohjelmat"," "," "," "," "," "," "," "],
						["Viihde","Peliohjelmat","Varieteeohjelmat","Puheohjelmat"," "," "," "," "," "," "," "," "],
						["Urheilu","Erikoistapahtumat","Urheilumakasiinit","Jalkapallo","Tennis",
							"Joukkueurheilu","Voimistelu","Moottoriurheilu","Vesiurheilu","Talviurheilu",
							"Hevosurheilu","Kamppailulajit"],
						["Lapset","Esikouluikäiset","6 - 14-vuotiaat lapset","10 - 16-vuotiaat lapset","Opetusohjelmat","Piirretyt"," "," "," "," "," "," "," "],
						["Musiikki","Rock","Draama","Folk","Jazz","Musikaalit","Baletti"," "," "," "," "," "],
						["Taide","Näyttämötaide","Kuvataide","Uskonto","Populaarikulttuuri",
							"Kirjallisuus","Elokuva","Kokeellinen","Lähetys","Uusi media",
							"Taidelehdet","Muoti"],
						["Yhteiskunta","Makasiiniohjelmat","Talous","Merkittävät henkilöt"," "," "," "," "," "," "," "," "],
						["Opetus","Luonto","Teknologia","Lääketiede","Vieraat kulttuurit","Yhteiskuntatieteet","Jatko-opinnot","Kielet"," "," "," "," "],
						["Harrastukset","Matkailu","Käsityöt","Autoilu","Liikunta ja terveys","Ruoanlaitto","Mainonta","Puutarhanhoito"," "," "," "," "],
						["Alkuperäinen kieli","Mustavalkoinen","Julkaisematon","Live-lähetykset"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Kanavan ohit.","Kanavien lajittelu","Kanavien muokkaus","Kanavan poisto","kanava Vaihdetaan","kanavan insertin"];
var chEditPara 		= ["Verkon nimi","Kanavan numero","Kanavan nimi","Taajuus","Värijärjestelmä","Äänijärjestelmä"];
var chSatTitles		= ["Satelliitin tyyppi","Satelliittiantennin asennus","Valitse Satelliitti"];
var chSatEidtOptions= ["Satelliitin nimi","Asema","LNB Teho","LNB-taajuus (MHz)","Diseqc-tulo",
						"Ääni 22 KHz","äänipurskeen","Taajuus (KHz)","Symbolinopeus (Ksym/s)","Polarisaatio",
						"Signaalin voimakkuus","Signaalin laatu","Satelliitin tila"];
var chSatAutoPromt	= [["Kaikki","Verkko"],
						["Kaikki","Vapaa"]];
var chSatAutoScanOptions=["Valitse Satelliitti","Selaustila","Kanavat"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Yleinen",];
var chSatDiSEqCInput= ["Poista käytöstä","A","B","C","D"];
var chSatTone22KHz	= ["Automaattinen","Päällä","Pois"];
var chSatToneBurst	= ["Poista käytöstä","äänipurskeen A","äänipurskeen B"];
var chSatPolarization= ["Vaakasuora","Pystysuora"];
var chSatSetupOptions=["Antennin tyyppi","Viritin","Kaistan taajuus"];
var chSatAntennaType= ["SingleCable","Yleinen"];
var chSatUserBands	= ["Käyttäjän kaista 1","Käyttäjän kaista 2","Käyttäjän kaista 3","Käyttäjän kaista 4","Käyttäjän kaista 5","Käyttäjän kaista 6","Käyttäjän kaista 7","Käyttäjän kaista 8"];
var chSatOthers		= ["Lähetinvastaanotin"];
var chSatSetupOthers= ["Käyttäjä määritetty"];
var pleaseSelectSat = "Valitse ensin satelliitit!";
var subOptions		= ["Tekstitys","Digit. tekstityksen kieli","Digit. tekstityksen kieli 2.","Tekstitystyyppi"];
var ttxOptionsCon      = ["Dekoodaa sivun kieltä","Dig. teksti-TV:n kieli"];
var subType			= ["Normaali","Huonokuul. tekst."];
var netIntf     	= ["Ethernet","Langaton"];
var netConnDes		= ["TV testaa yhteyttä.\nOle hyvä ja odota",
						"Verkkoyhteystesti onnistui!",
						"Verkkoyhteystesti epäonnistui."];
var netSsidError	= "Oikea SSID-pituus on 1-32 merkkiä. Tarkista SSID.";
var netOthers		= ["PIN-koodi"];
var netWlessAutoDes	= ["Varmista, että liitäntäpisteeseen on asennettu seuraava Pinokoodi, ennen kuin painat OK.",
						"Paina liitäntäpisteen painiketta 120 sekunnin sisällä ennen OK-painikkeen napsauttamista."];
var netConnRemind	= ["Virheellinen salasana.",
						"Yhdistää. Odota hetki!",
						"Yhteys muodostettu ja IP-osoite haettu!",
						"Linkkivirhe",
						"TV hakee tukiasemia\nOdota",
						"Televisioon ei ole liitetty langatonta laitetta!"];
var netWireIpOptions= ["IP-asetukset","Osoitetyyppi","IP-osoite","Aliverkon peite","Oletusyhdyskäytävä","Ensisijainen DNS","Toissijainen DNS"];
var netWireConnRemind= ["Anna arvo väliltä 0-255.",
						"Yhteys onnistunut!",
						"Kirjoita kelvollinen osoite.",
						"Yhteys onnistunut!",
						"Yhteys epäonnistui!",
						"Yhdistää. Odota hetki!",
						"Syötä arvo välillä 1-223."];
var netFlixOptions	= ["Poista käytöstä","ESN","Netflix-versio"];
var netFlixDes	 	= ["Haluatko varmasti poistaa käytöstä?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Ohjelmistopäivitys";
var netUpdateDialogTitle = "Ohjelmiston päivittäminen";
var netBGDownloadTitle 	= "Lataa";
var netUpdateLoadingPrompt= ["Hakee päivitystä, odota hetki!",
							"Ohjelmiston lataus käynnissä... Odota hetki!",
							"ÄLÄ sammuta televisiota ohjelmistopäivityksen aikana!",
                            "Välttämätön ohjelmistopäivitys latautuu automaattisesti taustalla!"];
var netUpdatePrompt= ["Onneksi olkoon, sinulla on kaikkein uusin ohjelmistoversio!",
						"Löydettiin uusi ohjelmistoversio XXXX. Haluatko ladata sen nyt? Tämä saattaa kestää jonkin aikaa verkkoyhteydestäsi riippuen.",
						"Kirjautuminen epäonnistui!",
						"Tiedon vastaanotto epäonnistui. Yritä myöhemmin uudelleen!",
						"Parserin päivitys XML epäonnistui!",
						"Linkkivirhe",
						"Ohjelmiston lataus onnistui. Haluatko aloittaa siirron?",
						"Tiedot kadonneet!Lataus epäonnistui!",
						"Paketin tarkastus epäonnistui, yritä uudelleen!",
						"Verkko ei toimi normaalisti! Tarkasta ja yhdistä uudelleen…",
						"Päivitys epäonnistui. Käynnistä TV uudelleen!",
						"Päivitystiedosto poistettiin vahingossa. Tee päivitys verkon kautta uudelleen.",
						"Ohjelmiston lataaminen taustalla onnistui. Haluatko tehdä päivityksen?"];
var netUpdateButtonText = ["Lataa", "Päivitä", "Myöhemmin", "Ei koskaan", "Ok","Jatka"];
var autoDetectPrompt = ["Löydettiin uusi ohjelmistoversio XXXX. Haluatko ladata sen nyt? Tämä saattaa kestää jonkin aikaa verkkoyhteydestäsi riippuen.",
						"Löydettiin uusi ohjelmistoversio XXXX. Haluatko suorittaa päivityksen nyt?",
						"Päivitys verkon kautta keskeytettiin viime kerralla. Sinun täytyy tehdä päivitys uudelleen.",
                        "Uuden XXXX ohjelmistoversion lataus ei ole valmis. Haluatko jatkaa nyt?",
                        "Ohjelmiston lataus on suoritettu. Haluatko päivittää nyt?"];
var sysOptions		= ["E-manuaali","Näyttövalik. kieli","Ajastin","Lukitse","Syöttöasetukset",
						"Ohjelmistopäivitys","Sijainti","HbbTV-tila","Evästeet","Yleinen käyttöjärj",
						"Lisäasetukset","Resetoi kauppa","LED-merkkivalo","Välitön virrankytkentä","Automaattinen myymälätila","Area","Demo-tila"];
var sysResetDes		= "Oletko varma?";
var sysMenuLangOptions=["Kieli","Valittu äänentoistokieli","Toinen valittu audiokieli"];
var sysTimerOptions	= ["Aikavyöhyke","Alueen nimi","Aika","Uniajastus","Autom. valmiustila", "Country region"];

var sysTimeZone		= ["Lähettäjänä","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Pois","10 Min","20 Min","30 Min","40 Min","50 Min","60 Min","90 Min","120 Min"];
var sysStandby		= ["Pois","4 tuntia","6 tuntia","8 tuntia"];
var sysRegionName	= ["Madrid ","Kanarian saaret"];
var sysClockOptions	= ["Autom. synkronointi","Päivämäärä","Kello","Käynnist. ajastus","Ajastin",
						"Käynnistyskanava","Sammut. ajastus","Ajastin"];
var sysTimer		= ["Pois","Päivittäin","Kerran"];

var sysInputSet		= ["Ei merkkiä","DVD","Blu-ray","HDD","DVDR",
						"HD nauh.","Peli ","VCR","PC","Digitaalinen STB",
						"HD dig STB","Kamera","Nauhoitin","Muu"];
var sysAvVideoInput	= ["Automaattinen","RGB_CVBS","RGB","CVBS","S-VIDEO"];
var sysUpdate		= ["USB:lla","Verkkotunnus:lla","Kanavittain"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Uutta ohjelmistoa ei löydetä!",
						"Löydettiin uusi ohjelmistoversio XXXX. Haluatko suorittaa päivityksen nyt?",
						"Syötä USB-tikku.",
						"Paketin tarkastus epäonnistui, yritä uudelleen!",
						"ÄLÄ irrota USB-liitintä tai sammuta televisiota laiteohjelmistopäivityksen aikana!",
						"Ohjelmiston päivitys on onnistunut.\nTV käynnistyy uudellen automaattisesti!",
						"Löydettiin uusi ohjelmistoversio XXXX. Haluatko ladata sen nyt? Tämä saattaa kestää jonkin aikaa verkkoyhteydestäsi riippuen.",
						"Lataa",
						"Ohjelmiston lataus onnistui. Haluatko aloittaa siirron?",
						"Päivitysvirhe!",
						"Etsitään päivitystiedostoja",
						"Ohjelmistopäivitys onnistui.\nKäynnistä televisio uudelleen."];
var sysProductInfo	= ["Nykyinen versio","Tuotteen nimi","Valmistaja","Alustan nimi"];
var sysCiDes		= ["Ei CI-korttia."];
var sysAdOptions	= ["DivX® rekisteröinti","DivX(R) rekisteröinnin poisto","T-Link","Authorization Error","Rekisteröinnin poiston varmistus",
						"Vuokran vahvistus","Vuokra-aika loppu"];
var sysRegistDes	= ["Rekisteröi laitteesi toistaaksesi DivX-suojattuja videoita",
						"Rekisteröintikoodi:",
						"Rekist. osoitteessa http://vod.divx.com"];
var sysDregistDes	= ["Rekisteröinnin poistokoodi:",
						"Poista rek.koodi osoitteessa http://vod.divx.com",
						"Jatka rekisteröintiä?"];
var mediaAuthorization = ["Laitettasi ei ole valtuutettu toistamaan tätä DivX(R)-suojattua videota."];
var deregistrationConfrimation = ["Laitteesi on jo rekisteröity.","Haluatko varmasti poistaa rekisteröinnin?"];
var rentalConfirmation = "DivX(R) vuokrauskesta on käytetty XXXX/YYYY katselukertaa. Haluatko jatkaa?";
var rentalExpired 	= "DivX(R) vuokraus on käyttänyt XXXX toistoa YYYY:sta. DivX vuokra-aika on kulunut umpeen.";

var parentalRatingNA		= ["***","***","***","***","***","***","***","***"];
var parentalRatingOptionUS		= ["***","***","***"];
var sysTVRatingUS=["***","***","***","***","***"];
var sysMPAAUS=["***","***","***","***","***","***"];
var parentalRatingOptionCanada		= ["***","***","***"];
var sysCanadaEng=["***","***","***","***","***","***"];
var sysCanadaFre=["***","***","***","***","***",""];
var sysResetRRT=["***"];

var sysLockOptions	= ["Kanavan estäminen","Aikavälin lukitus","Ohjelman esto","Syötön esto","Takapaneelin lukitus","Lukituksen asennus",
						"Vaihda salasana","Maksimi voimakkuus","Tyhjennä kaikki"];
var sysTimeIntervals= ["Lukitustyyppi","Aloitusaika","Loppumisaika"];
var sysRatingOptions= ["Ei mitään","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","Lapsille sopimaton sisältö (Espanja)"];
var changePass		= ["Vaihda salasana","Uusi salasana","Vahvista salasana"];
var changePassDes	= ["Väärä salasana.\nYritä uudelleen.",
						"Salasana ei täsmää.\nYritä uudelleen.",
						"Salasana asetettu!",
						"Salasanasi on liian yksinkertainen. \nValitse toinen salasana!"];
var sysPowerOnChOptions= "Valitse tila";
var sysPowerOnCh	= ["Viimeinen tila","Käyttäjän valinta"];
var netWlessSecu    = ["Auki","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Ei mitään","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Ei tuettu."];
var netWlessSecu3	= ["Ei mitään","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Ei tuettu."];
var netOptions		= ["Internet-yhteys","Käyttöliittymä","Langattomat asetukset","IP-asetukset","Tiedot",
						"Yhteyden tarkistus","DLNA","Kaukosäädin","Netflix-asetukset","Wi-FI-näyttö",
						"Osoitetyyppi","IP-osoite","Aliverkon peite","Oletusyhdyskäytävä","Ensisijainen DNS",
						"Toissijainen DNS","SSID","BSSID","Anna SSID:","Käyttäjätunnus"];
var chEditDes		= ["Kanavanumero on käytössä!","Paina punaista näppäintä tämän merkin poistamiseksi!","Virheellinen kanavanumero."];
var chEpgNoProgram	= "Ei ohjelmatietoja tällä hetkellä. Valitse ensin kanavat!";
var chEpgWords		= ["Ohjelmaopas","Ei ohjelmatietoa","Kanava lukittu!","Ei ohjelman yksityiskohtia","Ei ohjelman otsikkoa"];
var chEpgBooking	= ["aikataulu info", "Kanavan numero","Aloituspäivä","Aloitusaika","Loppumisaika",
						"Toistotyyppi","Aikataulutyyppi","Lisää ajastus","Vaihda","Muuta",
						"Lisää/Muokkaa"];
var epgHotKey		= ["Edellinen päivä","Seuraava päivä","Filter","Ajastuslista","Lisää ajastus"];
var chEpgBookRemind	= ["Virheellinen alkamisaika","Virheellinen päättymisaika","Päällekkäinen ajastus","Tallennettu.","Poisto onnistui."];
var chSchePara		= ["Ajastuslista","Aloitusaika","Aloituspäivä","Ohjelman nimi","Kanavan nimi",
						"Kesto","Toista","Aikataulu","Muokkaa","Poista"];
var dateTimer		= ["Kerran","Päivittäin","Viikoittain"];
var scheduleDeleteReminds="Haluatko poistaa tämän ajastuksen?";
var scheduleNoLists	= "Ei ajastuslistaa. Paina punaista painiketta ajastuksen lisäämiseksi.";
var chListWords		= ["Kanavalista","Valitse Lista","Viritintila","Lisää suosikeihin","Poista",
						"Valitse kanavaluettelo","Valitse viritintila","Vaihda"];
var chListType		= ["Kaikki","Digitaalinen","Analoginen","Radio","Vapaa","Suosikit"];
var chAutoScanOptions=["Valitse operaattori","Kanavan tyyppi","Kanavien haku"];
var souSoundType	= ["Virheellinen","Mono","Mono","Stereo","Stereo",
						"SAP","SAP","Dual1","Dual2","Dual2",
						"Nicam-mono","Nicam stereo","Nicam dual1","Nicam dual2","Nicam dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Musiikki","Elokuva","Clear voice-toiminto","Standardi","Oma"];
var picAdRgbMode	= ["Pois","Vain punainen","Vain vihreä","Vain sininen"];
var picAdOptions	= ["DNR","MPEG NR","RGB mode","Dynaaminen Kontrasti","LED Liikkuvan kuvan selkeys",
						"Ihonväri","elokuvatila","Pelitila","Värilämpö","Valkotasapaino",
						"Pysäytä","Musta Stretch","Ylisuuri pyyhkäisy","Gamma","HDMI-tila","10P valkotasapaino","Värilaajennus",
						"Sumennuksen vähennys","Värinän vähennys","Väritila","Liikkuvan kuvan selkeys"];
var pic10Pwhite     = ["Tauko","Punainen","Vihreä","Sininen","Resetointi","Väri","Keltainen","Cyan","Magenta"];
var picMotionClarity = ["Liikemoodi","Liikkeen interpolointi","LED Liikkuvan kuvan selkeys","Sumennuksen vähennys","Värinän vähennys","Resetointi"];
var picMotionMode   = ["Elokuva","Tasainen","Tyhjennä","Urheilu","Asiakas"];
var picResetDes		= "Kaikki henkilökohtaiset asetukset nollautuvat. Haluatko varmasti suorittaa valitun toimenpiteen?";
var pic10PReset     = "Haluatko varmasti nollata 10P valkotasapainon?";
var picMotionReset  = "Haluatko nollata liikkuvan kuvan selkeyden?";
var picColorSpaceReset    = "Haluatko varmasti nollata väritilan?";
var picOptions		= ["Kuvansäätö",
						"Taustavalo","Kirkkaus","Kontrasti","Värikylläisyys","Sävy","Terävyys","Värilämpö","Näyttötila","Autom. formaatti",
						"Urheiluasetus","3D","3D-navigointi","ECO Asetukset","Geometria",
						"Lisäasetukset","Kuvan palautus","Mikrohimmennys"];
var picSize			= ["16:09", "4:3-formaatti", "14:9 formaatti", "Kino",
						"Priblíženie16:9 ", " priblížiť16:9 ","Priblíženie14:9 ","Venytetty zoomaus","širokouhlé priblíženie",
						"Priblíženie2","širokouhlé priblíženie2","Alkuperäisen näytön yhteensopivuus","Bod po bode","Alkuperäinen","Panoraama"];
var others			= ["Äänenvoimakkuus","Lähetys","Salasana","Tila","Tallenna","Vaihda","Käynnistä","Poistu","Haku","Poista",
						"Ei mitään","Automaattinen","Haku","Tietoturva","Yhdistä","Päivitä","Yritä uudelleen","Pysäytä","Asetukset","Kanavat",
						"Muokkaa","Syötä","Signaali.","Päätä","Stereo","Ääni","Lähde","Ei ääntä","Vinkkejä","Resetointi",
						"Asiakas","Asetus","Tallenna","Käyttäjä","Sulje näppäimistö","Turvallisuustila","Joka päivä","PVR-lista"];
var direction		= ["Vasen","Oikea","Ylös","Alas"];
var audioType 		= ["MPEG","DOLBY AUDIO"/*"AC3"*/,"MPEG4","AAC", "DOLBY AUDIO"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Tuntematon"];
var soundChannels   = ["Tuntematon","Mono","Ali","Kaksoismono","Stereo","Stereo Sub","Stereo Dolby Surround","Kaksikanavainen surround-ääni","Surround-ääni","3.0Ch","4.0Ch","5.0Ch","Mono Lfe","Dual Mono Lfe","Stereo Lfe","Surround 2Ch Lfe","Surround Lfe","3.1Ch","4.1Ch","5.1-kanavainen","7.1-kanavainen","Joint Stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Vasen","Oikea","Muut"];
var prompts			= ["Säädä kuvan asetukset katseluympäristöön sopiviksi.",
						"Säädä kirkkautta. Mitä lähempänä arvoa 100, sitä kirkkaampi kuva.",
						"Säädä kontrastia. Mitä lähempänä arvoa 100, sitä suuremmat kuvan tummuus-kirkkaus erot",
						"Säädä värikylläisyyttä. Mitä lähempänä arvoa 100, sitä voimakkaammat värit.",
						"Säädä kuvan terävyys. Mitä lähempänä arvoa 100, sitä selkeämpiä yksityiskohdat ovat",
						"Säädä taustavaloa. Mitä lähempänä arvoa 100, sitä kirkkaampi näyttö.",
						"Säädä värisävyt. Tämä asetus muokkaa värisävyjä.",
						"Valitse katseltavalle ohjelmalle parhaiten sopiva kuvamuoto.",
						"Määritä energiansäästövalinnat.",
						"Säädä näytön geometriset asetukset yhdistettäessä PC-laitteeseen.",
						"Valitse kuvan lisäasetukset.",
						"Palauta kuvan oletusasetukset.",
						"Valitse esitykseesi parhaiten sopiva äänitila.",
						"Säädä äänen tasapaino vasemman ja oikean kanavan välillä.",
						"TruSurround HD-äänenpalautusjärjestelmä tarjoaa kokonaisvaltaisen äänentoiston selkein, matalin ja korkein taajuuksin.",
						"Digitaalinen liitäntä television digitaalisen äänilähdön ja kotiteatterin äänilaitteiston välillä",
						"Valitse esitykseesi parhaiten sopiva äänen kieli.",
						"Ota käyttöön näkövammaisille tarkoitettu toiminto voidaksesi nauttia kaikista televisio-ohjelmista.",
						"Tarkasta television kuvan, äänen ja signaalin laatu.",
						"Valitse televisiosignaaliisi sopiva kanavaluettelo.",
						"Valitse näytön alaosassa näkyvän ohjelmatekstityksen kieli.",
						"Tarkastele tämän kanavan tekstiä ja kuvia.",
						"Digital Living Network Alliance. Toista musiikkia, kuvia ja videoita kotiverkon välityksellä  muilta laitteilta, esimerkiksi tietokoneelta.",
						"Näytä älypuhelimen sisältö televisiolla ja käytä älypuhelinta television kaukosäätimenä.",
						"Näytä Miracast-yhteensopivan Android-laitteen sisältö television ruudulla.",
						"Lukitse televisio.",
						"Valitse laitteesi nimi.",
						"Valitse katseluympäristö.",
						"Palauta järjestelmän oletusasetukset.",
    					"Switch off sports mode for more options.",
    					"Paranna ympäristön kontrastia",
    					"Erikoistila urheiluohjelmien katseluun",
						"Lisää CEC-toimintoja."];
var initialTitle	= ["Tervetuloa","Alkuasetukset"];
var initialPrompt	= ["Suorita ensiasetukset nyt ja pääset jännittävien kokemusten maailmaan!",
						"Valitse kieli:",
						"Valitse maasi / alueesi:",
						"Valitse kohde:",
						"Valitse verkkoyhteyden tyyppi:",
						"Valitse langallisen verkkoyhteyden tyyppi:",
						" xxxxxxxxx-kytkentä epäonnistui! Kytke laite seuraavan kaavan mukaisesti tai valitse Vasen nollaamista varten.",
						" xxxxxxxxx-kytkentä onnistui! Valitse Oikea jatkaaksesi.",
						"1)Televisiossasi saattaa jo olla sisäänrakennettu langaton sovitin\n 2)Tai jos sen mukana on toimitettu USB-sovitin, liitä se televisioon\n. Valitse sitten langattoman verkon tyyppi",
						"Skannaus käynnissä. Odota hetki...",
						"Televisioon ei ole liitetty langatonta laitetta!",
						"Varmista, että tämä PIN-koodi on asetettu tukiasemaan ennen 'Seuraava'-painikkeen napauttamista. ",
						"Paina AP:n painiketta 120 sekuntia ennen Oikea-painikkeen painamista.",
						"WPS (Wi-Fi suojattu asetus)",
						"PIN (henkilökohtainen tunnistenumero)",
						"PBC (Push Button Configuration) - Määritys painikkeella",
						"Seuraavat sisällöt saadaan ainoastaan verkkoyhteyden avulla. Haluatko ohittaa verkkoasetuksen?",
						"Saatavilla on uusia ohjelmistopäivityksiä. Niiden lataaminen saattaa kestää muutaman hetken, verkkosi tilasta riippuen.",
						"Päivittämällä televisiosi ohjelmiston pääset nauttimaan useimmista ominaisuuksista ja palveluista.",
						"Et pääse nauttimaan uusimmista ominaisuuksista ja palveluista. Haluatko ohittaa ohjelmistopäivityksen?",
						"Paina oikeanpuoleista painiketta jatkaaksesi.",
						"Älä käännä virtaa pois päivityksen aikana, sillä tämä saattaa aiheuttaa television virhetoiminnan.",
						"Jos et halua päivittää, valitse EI.",
						"Päivitys käynnissä. Odota hetki.",
						"Voit myös päivittää ohjelmiston kohdassa JÄRJESTELMÄ/OHJELMISTOPÄIVITYS",
						"Valitsemasi maa pyytää salasanan asettamista.\nAseta televisiollesi koodi ja vahvista.",
						"This code is too simple.\nPlease use different digits.",
						"Onnittelut! Alkuasetukset on suoritettu. Voit muokata asetuksia päävalikosta ja  alavalikoista.",
						"Valitse turvallisuustila:",
						"Valitse langattoman verkon kytkentätila:",
						"Verkko"];
var initNetCabAndDonRe = ["Verkkokaapelia ei ole kytketty. Kytke verkkokaapeli!","Sisäänrakennettua langatonta sovitinta tai langatonta USB-sovitinta ei ole saatavilla."];
var initChPrompt = ["TV-kanavan asennus","Valitse antennin hakutyyppi","Automaattista viritystä suoritetaan...","Seuraavat antennikanavat löytyivät:","Valitse kaapelin hakutyyppi.","Valitse seuraavasta luettelosta yksi operaattori.","Määritä hakutiedot","Löydettiin seuraavat kaapelikanavat:","Valitse seuraavasta luettelosta yksi operaattori","Valitse haettavat satelliitit tai muokkaa valittua satelliittia","Ole hyvä ja valitse satelliitin arvot","Seuraavat kanavat löytyivät ja kanavan haku voidaan suorittaa uudelleen kohdassa Kanava/Kanavan haku."];
var initClockPrompt = ["Siirry verkkoaikaan!",
						"Aseta päivämäärä ja aika:"];
var initialOptions	= ["Ympäristö","Verkon asetukset","Ohjelmistopäivitys","Kanavan asennus","Kellotus"];
var initialHotkeys	= ["Takaisin","Valitse","Seuraava","Hyväksyn"];
var initLocations	= ["Koti","Liike","Myymälädemo"];
var initNets		= ["Kiinteä","Langaton","Minulla ei ole verkkoyhteyttä"];
var initWireManuals	= ["IP-osoite","Aliverkon peite","Oletusyhdyskäytävä","Ensisijainen DNS","Toissijainen DNS"];
var initSoftUpdates = ["Päivitä nyt","Päivitä myöhemmin"];
var initChannelIns	= ["Jatka","En halua asentaa kanavia."];
var initChScanTypes	= ["Digitaalinen & Analoginen","Digitaalinen","Analoginen","En halua suorittaa hakua"];
var initChDvbts		= ["ATV-antennin kanavat:","DTV-antennin kanavat:"];
var initChDvbcs		= ["ATV-kaapelikanavat:","DTV-kaapelikanavat:"];
var initChDvbss		= ["Satelliittikanavat:"];
var initChDvbSOther	= ["En halua suorittaa satelliittihakua"];
var initEndConnectedStatus= ["Poiskytketty","WiFi kytketty päälle","Langallinen kytketty päälle"];
var initEndInstallations= "XXXX kanavat asennettu.";
var initEndUpdate	= ["Päivitetty"];

var audioScenes 	= ["Pöytä","Seinäasennus"];			
var screenSavers	= ["Ei kanavia, paina ok-näppäintä ja hae!",
						"Ei signaalia.",
						"Salattu",
						"Vain tiedot",
						"Ääniohjelma",
						"Ei ääntä eikä kuvaa",
						"Ei käytettävissä",
						"Ei teksti-TV:tä",
						"Ei ohjelmatietoa",
						"Ohjelma lukittu!",
						"Ohjelma lukittu!\nPaina OK ja syötä koodisi.",
						"Ei ohjelman yksityiskohtia",
						"Lapsille sopimaton ohjelma.\nPaina OK ja syötä koodi.",
						"Kanava lukittu!",
						"Kanava lukittu!\nPaina OK ja syötä koodisi.",
						"Syöttö lukittu!\nPaina OK ja syötä koodisi.",
						"Ei tuettu.",
						"Tämä palvelu ei ole käytettävissä",
						"Syöttö lukittu!",
						"Ei ohjelman otsikkoa",
						"Ei toimintoa",
						"Ei Tekstitys"
						];
var channelNumberOverPromt = ["The number of search programs has exceeded,you can delete some programs and then retry!"];
var chBookingPromt	= ["Tämänhetkisessä kanavassa on ajastettu tallennus.TV aloittaa tallennuksen.",
						"Ajastettu tallennus havaittu.\n Vaihda XXXX tallentaaksesi",
						"Kanavalla on muistutus.",
						"Ajastettu tallennus havaittu.\n Vaihda XXXX tallentaaksesi"];
var timeUnit		= ["Sek","min"];
var ciPromt			= ["Verkon tiedot ovat muuttuneet. Voit päivittää suorittamalla päivitysskannauksen.",];
var othersPromt		= ["Hetkinen...",];
var menuOptions		= ["Kuva","Ääni","Kanava","Smart TV","Verkko","Järjestelmä","Tuki"];
var optionOptions	= ["Kuvansäätö","Äänen esiasetus","Pysäytä","T-Link","ajan siirto","PVR","Ajastuslista","Asetukset","*"];
var optionTLinkPromt= [["Automaattinen virrankatkaisu on päällä","Autom. valmiustila","Oppaan valikko"],
						["Virta päällä","Valmiustila","Vahvistimen voimak."]];
var powerPromt		= ["TV kääntyy pian pois päältä! Paina mitä tahansa painiketta peruuttaaksesi."];
var ttxLanguage		= ["LÄNSI-EUR","ITÄ-EUR","Venäjä","Arabia/hebrea","Farsi","Arabia ","Λευκορωσικά","Kreikka","Turkki"];
var ttxOptions		= ["Näytä","Kierrätä alasivuja","Kieli","Hälytyssivu","Uutistiedote"];
var weekday         = ["Sunnuntai","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai"];
var lcnConfflict	= "Tämän ohjelman vastaanotossa on häiriötä.";
var inShopMode		= "Televisiosi on shop mode-tilassa. Jos haluat vaihtaa home mode-tilaan, valitse 'Järjestelmä' ja vaihda 'Sijainti' valikossa .";
var nitRefresh		= "Verkkotiedot muuttuivat. Haluatko suorittaa päivityshaun?";
var picHDMIMode     = ["Automaattinen","Grafiikka","Kuva"];

var glassRemind    	= ["Liitä 3D-lasit televisioon\n(Pidä POWER-näppäintä alaspainettuna 3D-lasien kohdalla).","3D-lasit on liitetty televisioon.",""];
var pvrRemind 		= ["Älä irrota USB-laitetta tai kytke virtaa pois päältä."];
var pvrConName   	= ["PVR","Ohjelmatiedot:",["Note: If you record the HD channel, please to select  the  disk(of speed >5.0MB/sec), and to select the disk (of speed >3.0MB/sec) when you want to record the SD channel.","Tallennettu video on  \"PVR\"-kansiossa"],"Pysäytä","Tallennus","tunti","Minuutti","Kesto","Vinkkejä","Aseta tallennuksen kesto nuolinäppäimien avulla."];
var pvrDisRemind 	= "Liitä USB-tikku nauhoitukselle.";
var pvrRemindWords  = ["Haluatko poistua?",
							"Haluatko keskeyttää tallenuksen ja selata tallennettuja tiedostoja?",
							"Levyke on työnnetty ulos. ",
							"Ei riittävästi tilaa.   ",
							"Tallennettuja tiedostoja ei ole. Aloita tallennus.",
							"Videonauhuri ei voi käynn. sekoitetulla kanavalla",
							"Ominaisuus ei ole saatavilla",
							"Tallennettu.",
							"Haluatko pysäyttää nauhoituksen ja vaihtaa lähdettä?",
							"TV pysäyttää meneillään olevan tallennuksen. Haluatko poistua?",
							"PVR-tallennus tarvitsee signaalin toimiakseen oikein. Tarkista signaali."];
var pvrChangeCh 	= ["Haluatko vaihtaa kanavaa?",
							"Haluatko pysäyttää nauhoituksen ja vaihtaa kanavaa?"];
var pvrChangeToPIN8	= ["Haluatko vaihtaa lähteen SCART-sisääntuloon kytkettyyn laitteeseen?",
				    		"Haluatko keskeyttää tallennusprosessin ja vaihtaa lähteen SCART-sisääntuloon kytkettyyn laitteeseen?"];
var pvrChangeToCEC  = ["Haluatko vaihtaa lähteen HDMI-sisääntuloon kytkettyyn laitteeseen?",
				  			 "Haluatko keskeyttää tallennusprosessin ja vaihtaa lähteen HDMI-sisääntuloon kytkettyyn laitteeseen?"];
var pvrGuideJump    = ["Haluatko mennä EPG:hen?",
							"Haluatko pysäyttää nahoituksen ja siirtyä EPG-tilaan?"];
var pvrMediaJump    = ["Haluatko mennä Mediaan?",
							"Haluatko pysäyttää nauhoituksen ja siirtyä Media-tilaan?"];
var timeshiftExtra	= ["Haluatko lopettaa ajansiirron,muuta kanavaa?",
						"Haluatko pysäyttää timeshift-toiminnon  ja vaihtaa lähteen SCART-sisääntuloon kytkettyyn laitteeseen?",
						"Haluatko pysäyttää timeshift-toiminnon  ja vaihtaa lähteen HDMI-sisääntuloon kytkettyyn laitteeseen?",
						"Ajansiirto ei voi käynnistyä sek. kanavalla",
						"Haluatko pysäyttää timeshift-toiminnon  ja mennä EPG:hen?",
						"Haluatko lopettaa ajansiirron, ja vaihtaa television USB-tilaan?",
						"Haluatko lopettaa ajansiirron,vaihda tulolähdettä?",
						"Liitä USB-tikku nauhoitukselle.",
						"Levyn koko ei riitä.",
						"TV pysäyttää meneillään olevan timeshift-toiminnon.  Haluatko poistua?"];
var timeshiftStatus	= ["Nopeasti taaksepäin","Pysäytä","Käynnistä","Keskeytä","Nopeasti eteenpäin"];
var pvrPowerOffRemind= ["Tallennuksen valmiustila","Valmiustila","TV tallentaa nyt. Haluatko jatkaa tallennusta, kun TV on valmiustilassa?"];
var timeshiftInitTitle= "Levyn asetukset";
var timeshiftInitReminds= ["Avustettua ohjausta käyettään USB:n ajansiirron asetuksiin. Valitse asetustila.",
						 "Paremman suorituskyvyn vuoksi USB kannattaa formatoida. Formatointi poistaa kaikki USB:n tiedot. ",
						 "Valitse tiedoston koko ajansiirtoa varten. ",
						 "Formatoi",
						 "Ei riittävästi tilaa.   ",
						 "Luo ajansiirtotiedoston",
						 "Nopeustesti",
						 "Levyn nopeus (< %f MB/s) on liian hidas ajansiirrolle! ",
						 "Levy on valmis ajansiirrolle. Vaihda levy (nopeudeltaan > %f MB/sec) paremman suorituksen saamiseksi. ",
						 "Levy on valmis ajansiirrolle."];
var timeshiftInitButtons= ["Formaatti","Ohita","Peruuta","Ok","Päätä","Poistu"];
var timeshiftInitOther=["Levyn nopeus:","MB/sek"];

var selectChoice	= "Oletko varma?";
var chAtvStore		= "Tallenna XXXX-nimikkeellä.";
var chEpgFirstGenreUK= ["Elokuva","Uutiset ja ajankoht.","VIIHDE","Urheilu","Lapset","Opetus","Lifestyle","Draama"];
var homePageTitleList = ["SOVELLUKSET","TV","VIDEOT","Kotisivu"];
var homePageFavAndAllName  = ["Suosikkisovellukset","Kaikki sovellukset"];
var homePageBackUp = ["E-manuaali","GuideOn"];
var homePageRemind   = ["Täydelliset toiminnot saadaan vasta verkkoyhteyden jälkeen.","TV:ssä ei ole vielä yhtään kanavaa. Ohjelmat ovat saatavilla vasta  kanavien haun jälkeen","Ei ohjelmaa","Haluatko hakea kanavia nyt?"];
var homePageHistory = ["Historia"];
var miracastTitle = ["Wi-FI-näyttö","TCL-laite"];
var miracastRemind=["Wi-FI-näyttö mahdollistaa näytön ja äänen jakamisen laitteesta, kuten esim. älypuhelimesta tai tabletista, televisioosi langattomasti (ilman kaapeleita). Näin voit katsella televisiostasi älypuhelimesi tai tablettisi esittämää kuvaa. Voit esimerkiksi käynnistää videon älypuhelimellasi ja esittää sen samanaikaisesti televisiollasi tai käyttää tablettia peliohjaimena television toimiessa suurena näyttönä.","WiFi TV -yhteys on valmiina TV:ssä. Aloita laitteen näytön jakaminen TV:ssä nyt.","Yhdistää. Odota hetki!","Yhteys epäonnistui!","Yhdistäminen epäonnistui. Tarkista!"];
var homePageLittleWin = ["Asetukset","Media","Fav-kanavat","Smart TV","EPG"];

var hbbtvStopRemind  = ["Haluatko pysäyttää toiston?"];
var colorSystem = ["Automaattinen","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Paina ≡ lisätietoja varten.";
var emptyListInfo = "Televisioon ei ole liitetty laitetta!";
var optionVideoListArray_1 = ["Kuvansäätö", "Äänen esiasetus", "Toistotila", "Näyttötila", "3D-tila", 
							  "V-O-kytkin", "Terävyysalue", "Tekstitys", "Ääniraita", "Otsikko", "Kappale", "Info"];
var optionVideoListArray_2 = ["Kuvansäätö", "Äänen esiasetus", "Toistotila", "Näyttötila", 
							  "Tekstitys", "Ääniraita", "Otsikko", "Kappale", "Info"];
var bottomTipsText = ["Toisto/keskeytys", "Nopeasti taaksepäin", "Nopeasti eteenpäin", "Soittolista", "Asetukset"];
var picturePresetArray = ["Standardi", "Dynaaminen", "Luonnollinen", "Elokuva", "Oma"];
var videoPlayModeArray = ["Toista kaikki", "Toista yksi", "Normaali"];
var screenModeHDArray = ["16:9", "4:3", "Kino", "širokouhlé priblíženie", "Priblíženie2", "širokouhlé priblíženie2", "Venytetty zoomaus", "Automaattinen"];
var screenModeSDArray = ["16:9", "4:3", "Kino", "Priblíženie14:9 ", "Priblíženie16:9 ", " priblížiť16:9 ", "Automaattinen"];
var Mode3DArray = ["Pois", "2D-to-3D", "Vierekkäin", "Yläosa ja Alaosa", "Rivilomitus"];
var videoOptionListArray = ["Pois", "Kappale", "Tekstitys", "Otsikko", "Kappale"];
var subMenuTitleText = "Tekstitys";
var langMenuTitleText = "Ääniraidan kieli";
var titleMenuTitleText = "Otsikko";
var mode3DMenuTitleText = "3D-tila";
var langInfoText = "Kappale";
var STOP_RESUME_INFO = "Pysäytä/Jatka";
var playListName = " nimi";
var eb_tips = "Vinkkejä";
var ok_button = "Ok";
var eb_info = ["Äänen dekoodaushäiriö", "Videon dekoodaushäiriö", "Äänimuoto ei tuettu", 
			   "Videoformaatti ei ole tuettu.", "Tämä tiedosto ei avaudu.", "Toistovirhe. Yritä uudelleen.",
			   "Tiedostomuoto ei tuettu", "Hupsis! Soitin on pysähtynyt",
			   "Tiedostopolkua ei ole tai se on virheellinen.\n Kytke vielä muistilaite  ja yritä uudelleen.",
			   "Jatketaanko toistoa edellisestä\n toistotilasta?"];
var picturePlayErrorTips = ["Latausvirhe!!!","Kuva on liian suuri!!!","Verkkovirhe!!!","Säievirhe!!!","Parametrivirhe!!!","Tuntematon virhe!!!"];
var frameTitleText = "Uusi laite";
var eb_quit_info = "Haluatko varmasti lopettaa?";
var eb_yes = "KYLLÄ";
var eb_no = "EI";
var offinfo = "Pois";
var naInfo = "Null";
var consoleInfoArray = ["Nopeasti taaksepäin", "Nopeasti eteenpäin", "Toisto/keskeytys", "Soittolista"];
var cantOperateText = ["Toiminta ei ole tuettu."];
var chapterChangeInfo = "Vain kappaleet 1 - XXXX ovat saatavilla.";
var metaDataArray = ["Otsikko/Painos metatiedot:", "Kappaleen metatiedot:", "Äänen metatiedot:", "Tekstityksen metatiedot:"];
var metaTitleInfo = "Otsikko";
var metaChapterInfo = "Kappale";
var videoLoadingInfo = "Analysoi...";
var listLoadingInfo = "Lataa...";
var pgInfo = "Lakiluokittelu";
var fileNameText = " nimi";
var fileDateText = "Päivämäärä";
var fileSizeText = "Koko";
var fileDurationText = "Kesto";
var fileDirectorText = "Johtaja";
var fileCopyrightText = "Tekijänoikeudet";
var fileArtistText = "Artisti";
var fileAlbumText = "Albumi";
var fileGenreText = "Tyyli";
var fileYearText = "Vuosi";
var fileGenreText = "Tyyli";
var mainListArray = ["Kaikki", "Kuva", "Kuva", "Musiikki"];
var sortArray = [" nimi", "Päivämäärä"];
var parserArray = ["Normaali", "Rekursiivinen"];
var emptyTipsInfo = "Hupsis! Yhtään tuettua tiedostoa ei löytynyt.";
var emptyFolderInfo = "Hupsis! Yhtään tuettua tiedostoa ei löytynyt.";
var sortName = "Järjestä seuraavasti";
var parserName = "Jäsentäjä";
var divx_str1 = "DivX® rekisteröinti";
var divx_str2 = "DivX(R) rekisteröinnin poisto";
var infor_str = "Info";
var quickMenuEmptyText = "Ei vaihtoehtoja";

var musicSoundPresetArray = ["Standardi", "Elokuva", "Musiikki", "Clear voice-toiminto", "Oma"];
var musicInformationArray = [" nimi", "Artisti", "Albumi", "Tyyli:", "Vuosi:", "Kesto:"];
var playListName = " nimi";
var playTipsInfo = ["Toistat ensimmäistä tiedostoa.", "Toistat viimeistä tiedostoa."]
var musicNameInfo = "Name";
var musicArtistInfo = "Artisti";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Äänen esiasetus";
var optionBGMInfo = "Soita taustalla";
var optionAudioOnlyInfo = "Vain ääni";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX kytketty televisioon!";
var tvRemoteTitle		= "Kaukosäädin";
var tvRemoteDeveloper	= "Sovelluksen on kehittänyt TCL";
var tvRemoteDeviceTitle	= "Laitteen nimi:";
var remoteOption		= ["Median jakaminen","Kaukosäädin","Apua","Tietoa","Smart Connect"];
var remotebottom		= "Lataa \"TV Remote\" älypuhelimeesi";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Valokuvien, videoiden ja musiikin jakaminen TV:ssä puhelimen välityksellä",
							"Toimenpiteet: \n  1. Klikkaa puhelimessa \"TV Remote\". Liitä puhelin televisioon saman WiFi-verkon kautta;\n  2. Klikkaa \"Median jakaminen\" voidaksesi selata mediatiedostoja;\n  3. Lähetä media televisioon toistoa varten (jonkun seuraavan vaihtoehdon mukaisesti)",
							"      a) Vedä & pudota kansio/tiedosto TV-kuvakkeeseen näytön yläreunassa;\n      b) Heilauta puhelinta TV:tä kohti ensimmäisen tiedoston käynnistämiseksi;\n      c) Toista media puhelimessa ja napsauta TV:n jakamiskuvaketta;",
							"   4. Heilauta puhelinta TV-toiston aikana toistaaksesi edellisen tai seuraavan tiedoston."];
var controlReminds		= ["Käytä puhelinta kaukosäätimenä TV:n ohjaamisessa.",
							" ",
							"Toimenpiteet: \n  1. Klikkaa puhelimessa \"TV Remote\".  Liitä puhelin televisioon saman WiFi-verkon kautta;\n  2. Klikkaa \"Kaukosäädin\" TV:n käyttöä varten."];
var helpDeviceWords		= "Monen näytön yhteistoiminta";
var helpBottom			= " Pilviteknologian aikana älylaitteet, kuten puhelimet ja televisiot, ovat yhteydessä toisiinsa. Jaa mediaa perheesi kanssa useilla ruuduilla, ja ohjaa televisiotasi puhelimellasi! ";
var helpReminds			= ["Valmistelut\n  1. Lataa ja asenna \"TV Remote\" Google Playstä tai Apple Storesta.\n   2. Liitä puhelin televisioon saman WiFi-verkon kautta.",
							" ",
							"Suositeltu puhelin\n   1. CPU: yli 800 MHz\n   2. Muisti: vähintään 80 Mt vapaata tilaa",
							" ",
							"Mikäli \"TV Remote\" ei ole saatavilla puhelimessasi, ota yhteys puhelimen valmistajaan."];
var helpButtons			= ["Edellinen","Seuraava"];
var aboutReminds		= ["Kaukosäädin","Sovelluksen on kehittänyt TCL"];
var aboutExit			= "Poistu";
var smartReminds		= ["Nopea ja älykäs liitäntä TV:n ja puhelimen välillä",
							" ",
							"Toimenpiteet: \n  1. Liitä TV ja älypuhelin samaan LAN-verkkoon.  Klikkaa \"TV Remote\" älypuhelimessa.\n  2. Klikkaa \"Smart Connect\" QR-koodin skannausta varten.\n  3.  Kun TV on lähetyksen katselutilassa, paina TV:n kaukosäätimessä olevaa INFO-näppäintä 4 sekunnin ajan, jolloin QR-koodi ponnahtaa esiin koko näytön kokoisena.",];
var smartQRReminds		= ["Klikkaa puhelimessa TV Remoten Smart Connect ja skannaa QR-koodi TV:n ja puhelimen nopeaa kytkentää varten.",
							"QR-koodi sisältää LAN-tilitiedot. Säilytä se hyvin."];
							

var consoleTipArray = ["Edellinen","Seuraava","Konsoli","Soittolista"];							
var optionInfoArray = ["Kuvansäätö","Toistotila","Kesto","Tehoste","Info"];

var playModeArray = ["Normaali","Sekoita","Toista"];
var durationArray = ["Lyhyt (5s)", "Keskipitkä (10s)", "Pitkä (15s)"];
var effectArray = ["Ei mitään", "Käännä", "Levitä oikealle", "Levitä vasemmalle", "Levitä ylös", "Levitä alas", "Ruutu sisään", "Ruutu ulos", "Sattumanvarainen"];
var infoArray = ["Nimi:","Koko:","Päivämäärä:","Sijainti"];

var picturePresetBarTitleInfo = "Kuvansäätö";
var picturePresetBarArray = ["Standardi","Dynaaminen","Elokuva","Elokuva","Oma"];
var upTipsInfo = "Liikuta kuvaa"; //add yums 2014-10-10
var consoleTipsArray = ["Konsoli","Edellinen","Seuraava","Soittolista","Asetukset"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Paina uudelleen OIKEA-painiketta seuraavan kuvan toistamiseksi.","Paina uudelleen VASEN-painiketta edellisen kuvan toistamiseksi.","Paina uudelleen ALAS-painiketta saadaksesi soittolistan näytölle."]; //add yums 2014-10-10

var optionPvrListArray = ["Kuvansäätö","Äänen esiasetus", "Näyttötila", "3D-tila", "Tekstitys", "Ääniraita", "Info"];							
	
var titleSpanFirstArray = ["Ohjaus & liitäntä","Perustoiminnot","SOVELLUKSET","TV","Asetukset","FAQ"];
var titleSpanSecondArray = [["Kaukosäädin","Paneelin näppäimet","Helppo navigointi","TV kytkentä","TV kytkentä","TV kytkentä","Langaton"],["Launcher","Tilarivi","Lähde"],["Sovellusten toisto","Media","Kaukosäädin"],["Säädä kanava ja äänenvoimakkuus","Kanavalista","EPG","Kanavat","Suosikkikanavat"],["Kuvan säätö","Äänen säätö","Kanavan säätö","Ohjelmistopäivitys","Kieli","Lapsilukko"],["Usein kysytyt kysymykset","Usein kysytyt kysymykset","Vianetsintä","Vianetsintä","Ehdot ja edellytykset"]];
var contentSpan1_1Array =[["TEHO:","LÄHDE:","ASETUKSET:","VALINTA:","EDELLINEN:","INFO:","KOTI:","POISTU:","LISTA:"],
    ["Kytkee virran päälle tai valmiustila",
        "Valitse tulolähde",
        "Asetusvalikon näyttäminen",
        "Valintavalikon näyttäminen",
        "Palaa edelliseen valikkoon tai poistu nykyisestä sovelluksesta",
        "Näyttää ohjelmatiedot",
        "Äly-TV-kotisivulle siirtyminen",
        "Palaa edelliseen valikkoon tai poistu nykyisestä sovelluksesta",
        "Näyttää kanavaluettelon"]];
var contentSpan1_2Array = ["Edellinen kanava","Seuraava kanava","Lisää äänenvoimakkuutta","Vähennä äänenvoimakkuutta","Menee kotisivulle","Vahvista valinta","Valmiustila / Virta päällä"];
var contentSpan1_3Array = ["OK/Opas","Kanava ylös","Kanava alas","Äänenvoimakkuuden vähentäminen","Äänenvoimakkuuden lisääminen","Nuolinäppäiminä joissakin toiminnoissa"];
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","AV OUT sovitin","LAN","Älypuhelin","PC/Set-top box/DVD","Äänenvahvistin","Äänenvahvistin/monitori","Televisiossasi ei ehkä ole kaikkia pistorasioita."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Kuulokkeet","AV IN sovitin","SPDIF","CMP AUDIO IN sovitin","CMP IN (YPbPr) sovitin","USB-laitteet","USB-laitteet","Kuulokkeet","DVC/Game Console/Set-top box/DVD","Äänenvahvistin","DVC/Game Console/Set-top box/DVD","Televisiossasi ei ehkä ole kaikkia pistorasioita."];
var contentSpan1_6Array = ["Yleinen käyttöjärj","SD","VGA","SCART","Mini SCART","ANTENNA IN","PCMCIA-kortti","SD-kortti","PC","Set-top box/DVD","Antenni/kaapeli/satelliitti","Televisiossasi ei ehkä ole kaikkia pistorasioita."];
var contentSpan1_7Array = ["Tabletti","PC","Reititin","Puhelin","TV"];
var contentSpan1_8Array = ["Kytkintoiminto/virta","Pitkällä painalluksella siirryt uniajastimeen","Alas","Ylös","Äänenvoimakkuus/kanava/lähde"];

var contentSpan2Array = [["Paina nuolinäppäimiä saadaksesi kotisivun näyttöön.","Paina sitten OK katsoaksesi jotain esiteltyä ohjelmaa tai siirtyäksesi sovelluksiin."],["Näytä oikeassa yläkulmassa päivämäärä, verkko sekä laitteet ym. "],["Valitse syötelähde laitteista, jotka on kytketty televisioon eri porttien, kuten TV, AV, HDMI, ym. kautta."]];

var contentSpan3Array = ["Nauti ja katsele suosikkisovelluksiasi äly-TV:n sivullla.","Katsele valokuvia ja videoita ja toista musiikkia USB-tallennuslaitteesta.","Kytke TV ja älypuhelin tai tabletti samaan LAN:iin.","Klikkaa nScreen tai TV Remote älypuhelimessa tai tabletissa.","Jaa moninäytöllä valokuvia, videoita ja musiikkia perheesi kanssa ja ohjaa televisiotasi älypuhelimella."];

var contentSpan4Array = [["Paina YLÖS/ALAS kanavan vaihtamiseksi.","Paina VASEN/OIKEA äänenvoimakkuuden säätämiseksi"],["Paina kaukosäätimen LIST-painiketta kanavavalikoiman näkemiseksi.","Paina YLÖS/ALAS kanavan valitsemiseksi."],["EPG on näytössä näkyvä TV-ohjelmien ohjelmaopas. Voit navigoida, valita, katsella ja tallentaa ohjelmia."],["Hae ja asenna kanavat"],["Lisää tai muuta suosikkikanaviasi kanavaluettelossa."]];

var contentSpan5Array = ["Nauti suosikkiohjelmistasi videosovelluksilla."];

var contentSpan6Array = [["Paina Vaihtoehto painiketta järjestelmän eri asetusten näkemiseksi.","Siirry kuva-asetuksiin arvojen asettamiseksi."],["Paina Vaihtoehto painiketta järjestelmän eri asetusten näkemiseksi.","Siirry ääniasetuksiin valintojen asettamiseksi."],["Paina Vaihtoehto painiketta järjestelmän eri asetusten näkemiseksi.","Siirry kanava-asetuksiin valintojen asettamiseksi."],["Päivitä televisiosi, kun uusi ohjelmaversio on saatavilla."],["Voit valita valikon kielen."],["Ominaisuus, jolla vanhemmat voivat lukita lapsille sopimattomiksi katsomansa kanavat tai ohjelmat."]];

var contentSpan7_1Array = [["Ei ääntä eikä kuvaa","Tarkista sulake tai suojakatkaisin.","Kytke toinen sähkölaite pistorasiaan varmistaaksesi, että se toimii tai on päällekytkettynä.","Pistokkeen ja pistorasian välinen kytkentä on huono.","Tarkista signaalin lähde."],["Normaali kuva, ääni ei kuulu","Paina volume UP-painiketta äänenvoimakkuuden lisäämiseksi.","Väärä ääniasetus","Signaalivirhe lähetyksessä"],["Normaali ääni, kuva ei näy","Säädä kirkkaus ja kontrasti.","Signaalivirhe lähetyksessä","Tarkista onko se Vain ääni-tilassa."]];
var contentSpan7_2Array = [["Radiotaajuinen häiriö","Tämä häiriö aiheuttaa liikehtivää väreilyä ja vinoraitoja, sekä jossain tapauksessa kuvan kontrastin menetyksen. Etsi ja poista radiohäiriön aiheuttaja."],["Ei väriä","Säädä väriasetukset","Kokeile toista kanavaa. Mustavalkoinen ohjelma voi näkyä."],["Kaukosäädin ei toimi.","Vaihda paristot","Paristot on asennettu väärin. TV ei ole kytketty päävirtalähteeseen."]];
var contentSpan7_3Array = [["USB-laitteen sisältö ei tule näkyviin.","Tarkista, että USB-tallennuslaite on yhteensopiva TV:n kanssa","Tarkista, että TV tukee ääni- ja kuvatiedostomuotoja."],["Toisto ilman ääntä","TV-soitin ei tue videon äänimuotoa."],["Tiedostotoisto ei ole tasainen.","USB-tallennuslaitteen siirtotoiminto saattaa rajoittaa tiedonsiirtonopeutta televisioon."]];
var contentSpan7_4Array = [["Mihin minun täytyy kiinnittää huomiota ohjelmistoa päivittäessäni?","Ohjelmistopäivityksen aikana ei saa olla sähkökatkoja.","Vältä kaukosäätimellä suoritettavia toimintoja ohjelmistopäivityksen aikana.","Ole kärsivällinen, sillä ohjelmistopäivitysprosessi saattaa kestää hieman kauemmin."],["TV:n käyttöliittymässä ei esiinny erityisiä muutoksia ohjelmistopäivityksen jälkeen.","Määrätyissä olosuhteissa ohjelmistopäivitys ei pelkästään päivitä tai lisää uusia toimintoja, vaan parantaa myös televisiolaitteen toimintaa ilman erityisiä muutoksia käyttöliittymässä. Joskus se ei vaikuta ollenkaan TV:n käyttöliittymään"]];
var termsTitle = "Ehdot ja edellytykset";
var termsConditions = ["(Oikeudellinen ilmoitus) TCL - Tämän TV-vastaanottimen valmistaja","SmartTV-palveluiden monista ominaisuuksista sekä käytettävissä olevan sisällön rajoituksista johtuen tietyt ominaisuudet, sovellukset ja palvelut eivät ehkä ole saatavilla kaikilla laitteilla tai kaikilla alueilla. Jotkin SmartTV:n ominaisuudet voivat myös vaatia lisäoheislaitteita tai jäsenmaksuja, jotka myydään erikseen. Vieraile verkkosivullamme saadaksesi lisää tietoja erityisistä laitteen tiedoista ja sisällön saatavuudesta. Palvelut ja sisällön saatavuus SmartTV:n kautta saattavat muuttua ajoittain ilman erillistä ilmoitusta. \n   Kaikki sisältö ja palvelut, jotka ovat käytettävissä tämän laitteen kautta, kuuluvat kolmansille osapuolille, ja ne ovat suojattuja tekijänoikeuslailla, patentilla, tavaramerkillä ja/tai muilla immateriaalioikeuksilla. Sisältö ja palvelut ovat tarkoitettuja vain henkilökohtaiseen, epäkaupalliseen käyttöösi. Sisältöä tai palveluita ei saa käyttää tavalla, jota sisällön omistaja tai palveluntarjoaja ei ole valtuuttanut. Rajoittamatta edellistä, ellei sisällön omistaja tai palveluntarjoaja ole nimenomaisesti antanut valtuutusta, et saa muokata, kopioida, julkaista uudelleen, siirtää, postittaa, lähettää, kääntää, myydä, luoda johdannaisia töitä, käyttää hyväksesi tai jakaa millään tavalla tai välineellä mitään sisältöä tai palveluita, joita esitetään tämän laitteen kautta. \n   SINÄ HYVÄKSYT NIMENOMAISESTI, ETTÄ KÄYTÄT LAITETTA OMALLA RISKILLÄSI JA ETTÄ KOKO RISKI LIITTYEN TYYDYTTÄVÄÄN LAATUUN, SUORITUSKYKYN JA TARKKUUTEEN ON SINULLA. LAITE JA KAIKKI KOLMANNEN OSAPUOLEN TUOTTAMA SISÄLTÖ JA PALVELUT TARJOTAAN SELLAISENAAN ILMAN MINKÄÄNLAISTA TAKUUTA SUORAA TAI EPÄSUORAA. TCL NIMENOMAISESTI KIISTÄÄ KAIKKI TAKUUT JA EHDOT LIITTYEN LAITTEESEEN, SISÄLTÖÖN TAI PALVELUIHIN, JOKO NIMENOMAISEEN TAI HILJAISEEN TAKUUSEEN, SISÄLTÄEN, MUTTEI RAJOITTUEN KAUPPAKELPOISUUTEEN, TYYDYTTÄVÄÄN LAATUUN, KÄYTTÖTARKOITUKSEEN SOVELTUVUUTEEN, TARKKUUTEEN, HILJAISEEN KÄYTTÖÖN JA KOLMANNEN OSAPUOLEN OIKEUKSIEN LOUKKAAMATTOMUUTEEN. TCL EI TAKAA MINKÄÄN TÄMÄN LAITTEEN AVULLA TARJOTUN SISÄLLÖN TAI PALVELUN TARKKUUTTA, VOIMASSAOLOA, OIKEA-AIKAISUUTTA, LAILLISUUTTA TAI TÄYDELLISYYTTÄ, EIKÄ TAKAA, ETTÄ LAITE, SISÄLTÖ TAI PALVELUT OVAT VAATIMUSTESI MUKAISIA, TAI ETTÄ LAITTEEN TOIMINTA TAI PALVELUT TOIMIVAT KESKEYTYKSETTÄ TAI VIRHEETTÖMÄSTI. MISSÄÄN OLOSUHTEISSA, MUKAAN LUKIEN LAIMINLYÖNTI, TCL EI OLE VASTUUSSA, OLIPA KYSEESSÄ SOPIMUS TAI RIKKOMUS, MISTÄÄN VÄLITTÖMÄSTÄ, VÄLILLISESTÄ, ERITYISESTÄ, SEURAUKSEEN PERUSTUVASTA TAI MUUSTA VAHINGOSTA, ASIANAJAJIEN MAKSUISTA, KULUISTA, TAI MISTÄÄN MUISTA VAHINGOISTA, JOTKA JOHTUVAT TAI LIITTYVÄT SISÄLTYVIIN TIETOIHIN TAI LAITTEEN KÄYTÖN TULOKSENA, TAI MIKÄ TAHANSA SISÄLTÖ TAI PALVELUT, JOTA KÄYTÄT TAI JOTA KOLMAS OSAPUOLI KÄYTTÄÄ, MYÖS JOS SELLAISTEN VAHINKOJEN MAHDOLLISUUDESTA ON KERROTTU. \n   Kolmannen osapuolen palveluita voidaan muuttaa, pidättää, poistaa, päättää tai keskeyttää, tai pääsy voidaan estää milloin tahansa ilman erillistä ilmoitusta, ja TCL (Thomson-merkkisten televisioiden valmistaja) ei tee tulkintoja tai takaa, että mikään sisältö tai palvelu pysyy saatavilla minkään ajanjakson ajan. Kolmannet osapuolet välittävät sisältöä ja palveluita verkkojen ja lähetystilojen avulla, jotka ovat TCL:n hallinnan ulottumattomissa. Rajoittamatta tämän vastuuvapauslausekkeen yleisluontoisuutta, TCL nimenomaisesti kiistää kaiken vastuun tai velvollisuuden koskien muutoksia, keskeytyksiä, käytöstä poistamista, poistamista tai minkään sisällön tai tämän laitteen avulla saataville olevan sisällön tai palvelun pidättämistä. TCL saattaa asettaa käyttö- tai pääsyrajoituksia tiettyihin palveluihin tai sisältöön, joka tapauksessa ja ilman erillistä ilmoitusta tai vastuuta. TCL ei ole vastuussa tai korvausvelvollinen asiakkaaseen liittyvistä sisällöistä tai palveluista. Kaikki sisältöön ja palveluihin liittyvät kysymykset tulee tehdä suoraan vastaavan sisällön ja palvelun tuottajalle."];

var noChannelListRemind        = ["Kanavia ei löytynyt. Kanavaluettelo saadaan kanavien haun jälkeen.","Kanavahaku"];
var closeSubtitleRemind   = "Toiminto on saatavilla, kun tekstitys on pois päältä. Haluatko asettaa nyt?";

var estickerTitles = ["Erittäin realistiset kuvat","Värit heräävät eloon","Sulava ja luonnollinen liike","Dynaaminen kuvanlaatu","SR UHD upscaling-toiminto","Koe 3-ulotteinen maailma","Nopeampi suorituskyky","Tuleva 4K-sisältö","Nauti nettimaailmasta","Pääsy ylimääräiseen sisältöön","Integroidut digitaalivirittimet","Kytke kaikki laitteet","Eri 4K lähteet","USB-sisältö","Ultranopea WiFi","Mobiilisisältö televisiossa","Mobiililaitteen sisältö","Paikallinen sisältö","DivX-hyväksytty","Saumaton kuva","Kanava valmis","TDT Premium"];

var estickerDescriptions = ["Loistava katselukokemus, sillä kuvan terävyys ja tarkkuus on nelinkertainen UHD- näytön Full HD-kuvaan verrattuna.","Laaja väriasteikko luo tunnetta joka esitykseen heleän punaisilla ja smaragdin vihreillä sävyillä. ","4K ruudun interpolointi ja takavalo sumennuksen estoon.","Alkuperäisen kuvan kirkkaus korostuu ja tuloksena on todella dynaaminen näkymä loistavalla kontrastilla.","Super Resolution-teknologian ansiosta näet TV-ohjelmat ja Blu-Ray kasettien sisällön entistä selkeämpinä ja terävimpinä.","Koe 3D TV-lähetykset ja katsele useita 3D-sisältöjä.","Quad Core tarjoaa entistä nautittavampia viihdekokemuksia joustavan vuorovaikutuksen ja parantuneen suorituskyvyn ansiosta.","HEVC (H.265) koodekin tuki 4K-videon tulevalle standardille","Runsaasti verkkosovelluksia, VOD-palveluja, catch-up TV-palveluja ja internetselailua","Näe lisää verkkopalvelusi lisäpalveluja ja sisältöjä käyttämällä.","Voit katsella teräväpiirto TV-kanavia ilman erillistä digisovitinta.","Helppo kytkeä moniin kotona käytettävissä oleviin digitaalilähteisiin.","Tulevaisuuden TV, pystyy toistamaan 4K 50/60Hz DMI 2.0 kautta HDCP 2.2 järjestelmällä","Video- tai valokuvasisältö suoraan USB-asemasta, HDD:stä tai kamerasta suureen näyttöön 4K resoluutiolla","Uusimman sukupolven 2x2 MIMO ja AC standard takaavat huippunopean internet-yhteyden.","Nauti valokuvista, videoista ja mobiililaitteiden sovelluksista suurella näytöllä screen mirroring-tekniikan ansiosta.","Valokuvia, videoita ja sovelluksia älypuhelimesta tai tabletista voidaan katsella suurella näytöllä.","Katsele suurella näytöllä paikallista sisältöä, kuten valokuvia sekä videoita paikalliseen verkkoon liitetyistä laitteista.","Voit toistaa vuokrattuja tai omia suojattuja DivX-elokuvia ","Erittäin ohutreunainen näyttö ja litteä muotoilu","Canal+ testattu ja hyväksytty","TDT Premium testattu ja hyväksytty"];							

var eManualTextArray = ["E-manuaali","Kaikki kuvat ovat vain viitteellisiä."];
var frontPanelRemind = "Etupaneeli on lukittu.";
var eRPRemind		 = "Myymälätila ei voi täyttää ERP-pyyntöä. Oletko varma?";	
var noRelatedChannel = "Ei vastaavaa kanavaa";
var option0624Name          = ["BOP","BFS","Tapahtuma kerrallaan","GetUserID","BGM","Reset all","Resetoi kauppa","NRM","DVB-T2 ja maan valinta","HbbTV-tila"];
var DVBT2AndChoice = ["Päällä","Maan mukaan","Pois"];
var hbbtvServiceRemind = "HbbTV-palvelu tulossa pian.";
var insertWord = "Syötä";			
var viewDetail = "Yksityiskohdat";							
							

var remindOAD  = "Ohjelmistopäivitys. Uusi suositeltava ohjelmistopäivitys voi olla toisella kanavalla. Jos hyväksyt sen lataamisen, se voi vaihtaa kanavaa automaattisesti. Haluatko tehdä sen nyt?";

var LEDStatus = ["Vilkkuu", "Normaali","Pois"];
var netFlixRemind = "Tämä toiminto keskeyttää pääsyn Netflix-palveluihin, kunnes kirjaudut uudelleen sisään.";
var ESNExplanation = "Elektroninen sarjanumero";
var resetShopRemind = "Järjestelmä palautuu nyt, älä sulje televisiota";
var initialSelectOption = "Valitse yksi vaihtoehto:";
var databaseRemind   = "Järjestelmä tunnisti tietokannan vaurioituneen jostain tuntemattomasta syystä ja rakensi sen automaattisesti uudelleen, jatka painamalla OK";
var Deactivation = "Palvelun sulkeminen";
var oadFutureRemind = "Ohjelmistopäivitys.\n Uusi suositeltava ohjelmisto on saatavilla %s. Päivitys voi viedä jonkin aikaa ja näyttö saattaa mennä mustaksi. Älä sammuta vastaanotinta päivityksen aikana. Jos hyväksyt päivityksen, jätä vastaanotin päälle aikataulun mukaisesti. Haluatko vastaanottaa päivityksen?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Äänen ulost.";
var bt_soundOutPutTV = "TVkaiuttimet";
var bt_soundOutPutBT = "Bluetooth-laite";
var bt_soundOutPutBT_TV = "Bluetooth ja TV";
var bt_refreshBarName = "Laitteet";
var bt_settingTips_On = "Käynnistä Bluetooth-toiminto ja skannaus.";
var bt_settingTips_Finding = "Käytett.olev.laitt. haku..";
var bt_settingTips_NoDevice = "Ei laitt.käytettävissä";
var bt_deviceList_State_NoConnect = "Ei yhdistetty";
var bt_deviceList_State_Connecting = "Yhdistää...";
var bt_deviceList_State_Connected = "Yhdistetty";
var bt_deviceList_State_Paired = "Paritettu";
var bt_deviceList_Conncect_Failed_Tips1 = "Yhteys epäonnistui";
var bt_deviceList_Conncect_Failed_Tips2 = "Varmista että XXX Bluetooth-toiminto on päällä";
var bt_deviceList_Conncect_Success = "Yhdistetty Bluetooth-laitteeseen";
var bt_deviceList_Disconncect_Success = "Ei yhdistetty Bluetooth-laitteeseen";
var bt_deviceList_Disconnect = "Haluatko varmasti katkaista XXX-yhteyden?";
var bt_tipsTitle = "Vinkki";
var bt_bluetooth_Pairing_Title = "Bluetooth-paritus";
var bt_bluetooth_Input_Pin = "Syötä PIN:";
var bt_bluetooth_Output_Pin_Tip = "Syötä XXX PIN näppäimistöllä";
var bt_bluetooth_Pin_Wrong_Tip = "Väärä PIN";
var bt_bluetooth_Remove_Pair_Title = "Kys.";
var bt_bluetooth_Remove_Pair_Ask = "Unohda tämä laite?";

var audioDescriptionName = ["Kuvailutulkkaus","Kaiutin","Kaiuttimen äänenvoimakkuus","Kuulokkeet","Kuulokkeiden äänenvoimakkuus","AD äänenvoimakkuus","Bluetooth-laite","Bluetooth-laitteen taltio","Vahvistin","Kaiutin"];
var audioDescriptionOptions = ["Pois","Normaali","Kuvailutulkkaus"];
var volumeOffRemind = 'Aseta XXX ”Päälle” asetusvalikosta.';
var switchSourceRemind   = " lisätty. Haluatko kytkeä sen nyt?";
var footballModeName = "Urheilutila";
var resetStadium = "Stadion";

var atvSearchMenu = "ATV manual search";
var dtvSearchMenu = "DTV manual search";
var settingNoticeSourceName ="Automaattinen lähde";

var smartTVOptions		= ["Smart TV -portaali","HbbTV","Jaa & Katsele","Wi-FI-näyttö","Ehdot",
    "Verkotettu valmiustila","Nollaa smart TV","Cookie policy","Tietosuojakäytäntö","Tietojen poistaminen"];
var supportOptions		= ["Etädiagnoosi","Yhteystiedot"];
var ClosedcaptionName ="Suljettu kuvateksti";
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

var tvDoctor=["Etädiagnoosi 2.0",
"Sovellus toimii vain Smart TV -televisiossa, ja se tekee diagnostiikkatarkastuksia sekä parantaa tuotekokemusta. Sovellus kerää TV:n toimintatiedot ja mallitiedot, lähettää ne palvelimelle ja niitä käytetään TV:n ongelmien ratkaisemiseen. Henkilötietoihisi ei kosketa. Varmista, että TV on muodostanut Internet-yhteyden.",
"Paikallinen diagnoosi",
"Kun diagnostiikka käynnistyy, noudata tuki-insinöörimme ohjeita.",
"Etädiagnoosi",
"Varmista ennen käyttämistä, että tuki-insinöörimme on verkossa.",
"Sarjanumero:",
"&nbsp;&nbsp;&nbsp;&nbsp;Käyttäjätunnus:",
"©Yhdistää...",
"Diagnoosin määritys käynnissä. Pidä verkko kunnolla yhdistettynä.",
"Yhteyttä Internetiin ei saada, tarkista verkkoyhteys.",
"Poistu"
];
var contactUsOption = ["Yhteystiedot",
    "Yhteystiedot, jos laitteen käytössä on ongelmia.",
    "Yhteystiedot.",
    "Verkkosivu: mene osoitteeseen",
    "Puhelinpalvelun numero:","Tuotetiedot","Malli:",
    "Ohjelmistoversio:","","Käyttäjätunnus:","Projektitunnus:",
    "Asiakkaan tyyppi:","Langaton MAC-osoite:","Langallinen MAC-osoite:","Netflix ESN:","Skannaa tiedot matkapuhelimeesi.",
    " ja valitse oma maasi."];
							

//本地launcher的翻译，与服务器无关，只用于本地launcher
var homePageWords = ["Historia", "Haku"];//home页的翻译
var titlePageWords = ["Koti", "Videot","TV","Sovellukset"];//index的标题翻译
var videosPageWords = ["Elokuva", "Sport","Musiikki","Suositut","Pelit","Koulutus","Uutiset"];//videos页的内容翻译

//同时应用于本地和服务器
var statusPageWords = ["USB","Asetukset","Wi-Fi","Johdollinen"];//状态栏的翻译

//二级页面的翻译
var searchPageWords = ["Haku", "Suositut haut:","Esitykset, elokuvat, ihmiset ..."];
var resultSearchPageWords = ["Tulokset haulle"," ", "Kokeile muita hakusanoja.","Valitettavasti yhtään videota ei löytynyt haulla "," "];
var historyPageWords = ["Historia", 'Poista historia painamalla',' ',"Poista yksi","Poista kaikki","Eilen","Tänään"," Et ole katsonut vielä yhtään videota.","Katseluhistorian poistaminen onnistui!"];
var channelPageWords = ["Valitettavasti videoita ei vielä löytynyt."];


//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9",
                       	   "Zoom-","0","Zoom+",
                       	   "Poistu","0","",
                       	   "Luettelo","0","Teksti",
                       	   "Opas","Vahvista","Poistu",
                       	   "Valikko","Tekstitys","Tiedot",
                       	   "Pysäytä",
                       	   "Tiedot","Valikko","Poistu",
                       	   "Poistu"
                       	   ];

//added for LA sports mode
var sportsModeInitReminds= ["Tämä ohjattu toiminto on tarkoitettu USB-aseman perustamiseen urheilutilalle. Valitse asetustila.",
						 "Valitse tiedostokoko urheilutilalle.",
						 "Urheilutilan tiedoston luominen",
						 "USB-aseman nopeus on liian hidas (< %f Mt/s) urheilutilaominaisuudelle!",
						 "USB-asema on valmis urheilutilaan. Suosittelemme kuitenkin vaihtamaan sen (nopeuteen > %f Mt/s) paremman suorituskyvyn vuoksi.",
						 "USB-asema on valmis urheilutilaan."];

var sportsModeExtra	= ["Haluatko pysäyttää urheilutilan ja vaihtaa kanavaa?",
						"Haluatko pysäyttää urheilutilan ja vaihtaa lähdettä laitteeseen, joka on yhdistetty SCART-tuloon?",
						"Haluatko pysäyttää urheilutilan ja vaihtaa lähdettä laitteeseen, joka on yhdistetty HDMI-tuloon?",
						"Salatut kanavat eivät tue urheilutilaa.",
						"Haluatko pysäyttää urheilutilan ja siirtyä sähköiseen ohjelmaoppaaseen?",
						"Haluatko pysäyttää urheilutilan ja siirtyä mediaan?",
						"Haluatko pysäyttää urheilutilan ja vaihtaa tulolähdettä?",
						"TV lopettaa nykyisen urheilutilan. Haluatko poistua?"];
var remoteControlNote = "- Mukana tuleva kaukosäädin saattaa vaihdella laitteen mallin mukaan";

var textArray = ["Volume","Channel","Source","Switch/Power","Guide","seconds to Power OFF"];
var guideArray = ["VOL-","VOL+","CH-","CH+","Pre","Next"];
var favChannelListRemind = ["Ei suosikkikanavia. Siirry muihin listoihin ja käytä suosikkikanavien lisäämiseen vihreää näppäintä."];

var proxySetting = ["Välityspalvelimen asetukset","Portti"];
var powerOffShop = ["Suosittelemme käyttämään ostostilaa, jatketaanko?"];
var tcastTextPageWords = ["Paljon videoita, runsaasti sovelluksia","TV:n kaukosäädin heti käden ulottuvilla","Upeaa sisältöä, jaa isolla näytöllä"];
var tcastOtherWords = ["Skannaa QR-koodi ja lataa T-Cast","Verkko yhdistetty televisioon","TV:n nimi","T-Cast"];
var hbbtvWords = ["Hbbtv-asetus","HbbTV","Evästeet","Kolmannen osapuolen evästeet","Laitteen tunnus","seurataan"];
var hbbtvTrackingWords = ["YES","NO","Älä välitä"];
var eStickerTipWords = ["Muistitila on alle 400 M. Haluaisitko poistaa videoita demotilassa saadaksesi lisää tilaa?"];
var delEstickerVideoRemid = ["Videon poistaminen onnistui."];
var selectSatRemind = "Voit valita enintään 20 satelliittia!";
var cookiePolicyTitle = "Evästekäytäntö – Verkkopohjaiset Älytelevisiopalvelut";
var cookiePolicyConditions = ["Yhtiö kunnioittaa yksityisyyttäsi käyttäessäsi Yhtiön valmistamia älytelevisioita ja sen tarjoamia palveluja. Monet verkkosivustot ja muut internet-palvelut käyttävät evästeitä ja älytelevisiosi vastaanottaa, säilyttää ja välittää evästeitä varmistaakseen tällaisten verkkosivustojen ja palvelujen asianmukaisen toimimisen. Yhtiö käyttää evästeitä myös tarjotessaan sinulle Palveluja. Tässä Evästekäytännössä Yhtiö kertoo, mitä evästeitä älytelevisioosi asetetaan ja kuinka voit hallita niitä.\nOtathan huomioon, että kaikkiin Yhtiön evästeiden kautta tai niiden avulla keräämiin ja/tai käsittelemiin henkilötietoihin sovelletaan Tietosuojakäytäntöä, ja että sinun tulisi lukea Evästekäytäntö yhdessä Tietosuojakäytännön kanssa.\n1. Mikä on eväste?\nEvästeet ovat pieniä tekstitiedostoja, joita saatetaan asettaa älytelevisioosi. Vieraillessasi jollakin verkkosivustolla tai käytettäessä TV-aseman punaisen painikkeen palvelua, kyseinen verkkosivusto tai palvelu saattaa tallentaa evästeen älytelevisioon. Kun seuraavan kerran vierailet sivustolla tai käytät palvelua, älytelevisiossasi oleva eväste lähettää tietoja evästeen asettaneelle taholle. Evästeet ovat erittäin yleisiä ja niitä käytetään monilla verkkosivustoilla ja lukuisissa palveluissa. Tavallisesti jokaisessa evästeessä on sen domainin nimi, josta eväste on tullut, evästeen “elinikä” sekä jokin arvo (tavallisesti yksilöllinen numero). Perusteellisempi selitys siitä mitä evästeet ovat ja miten ne toimivat löytyy verkkosivustolta www.allaboutcookies.org.\nEvästeet voidaan jakaa toiminnallisiin evästeisiin ja ei-toiminnallisiin evästeisiin. Toiminnallisia evästeitä ovat evästeet, joita tarvitaan yksinomaan älytelevisiopalveluiden tarjoamiseen sinulle, sekä siihen, että verkkosivustot ja muut palvelut tarjoavat älytelevisiolle oikeanlaista sisältöä. Kaikki muut evästeet ovat ei-toiminnallisia evästeitä.\nTämä Evästekäytäntö koskee meidän asettamiamme evästeitä, samoin kuin mainosevästeitä, joita kolmannet osapuolet saattavat asettaa älytelevisioosi meidän palvelujemme kautta. Tämä Evästekäytäntö ei koske evästeitä, joita saatetaan asettaa käyttäessäsi älytelevisiota vieraillaksesi kolmansien osapuolten verkkosivustoilla, tai käyttääksesi niiden palveluja tai sovelluksia. Tällaisten evästeiden osalta sinun tulisi perehtyä kunkin tällaisen kolmannen osapuolen omaan evästekäytäntöön. Tässä Evästekäytännössä kerrotaan kuitenkin kuinka tällaiset evästeet voi poistaa (katso alla oleva kohta 4).\n2. Millaisia ei-toiminnallisia evästeitä käytämme?\nMainonta: Videossa näkyviä mainoksia ja hakumainoksia saatetaan esittää älytelevisiossasi käyttäessäsi älytelevisiopalveluja. Tällaisia mainoksia saatetaan esittää meidän tai kolmansien osapuolten toimesta mainosserverimme kautta, tai sen koordinoimana, ja mainosserverillämme on keskeinen koordinoiva tehtävä tällaisten mainosten esittämisessä. Oma mainosserverimme tai kolmannen osapuolen mainosserveri asettaa evästeen älytelevisioosi. Tällaisen evästeen avulla mainosserveri kirjaa, onko mainosta esitetty älytelevisiossasi, tai onko joku älytelevisiotasi käyttänyt henkilö napsauttanut mainosta. Käytämme tällaiseen mainontaevästeeseen tallennettua tietoa, jotta muistaisimme mitä mainoksia älytelevisiossasi on esitetty varmistaaksemme, ettei missään yksittäisessä älytelevisiossa esitetä liian monta samanlaista mainosta, ja jotta pystymme täyttämään mainontakumppaneidemme kanssa tekemämme kaupalliset järjestelyt. Emme käytä näitä tietoja esittääksemme kohdennettuja mainoksia. Lisäksi kolmannet osapuolet voivat käyttää mainontajärjestelmäämme esittääkseen mainoksia älytelevisiossasi ja asettaakseen evästeitä älytelevisioosi silloin kun tällaisia mainoksia esitetään.\nNämä evästeet sisältävät muun muassa tietoja esitetyistä mainoksista, tietoja siitä missä sovelluksessa tai domainissa kyseisiä mainoksia esitetään, sekä IP-osoitteesi. Tämä tehdään, jotta muistaisimme, kuinka usein tiettyä mainosta on näytetty, ja estääksemme saman mainoksen esittämisen liian usein. Ulkopuoliset kolmannet mainostajat, jotka saattavat esittää mainoksia saattavat myös käyttää evästeitä seuratakseen toimintaasi useilla verkkosivustoilla, ja tarjotakseen henkilökohtaisia mieltymyksiäsi vastaavia mainoksia.\n3. Kolmansien osapuolten verkkosivustot\nKun vierailet kolmansien osapuolten verkkosivustoilla tai heidän palveluissaan älytelevisiosi älytelevisiopalveluiden kautta, on mahdollista, että kyseiset verkkosivustot tai palvelut asettavat älytelevisioosi evästeitä, ja että kyseiset verkkosivustot seuraavat ja tallentavat tällaisilla verkkosivustoilla tapahtuvia toimiasi. Me emme pyydä tällaista toimintaa emmekä kannusta siihen, emmekä käytä tällaisia tietoja. Pyydämme sinua tutustumaan kunkin tällaisen verkkosivuston ja palvelun omiin eväste- ja tietosuojakäytäntöihin saadaksesi lisätietoja siitä kuinka tällaiset osapuolet käyttävät näitä evästeitä.\n4. Evästeiden poistaminen\nÄlytelevisiosi käyttöliittymä antaa sinun poistaa kaikki evästeet ja muun paikallisen selaimen tallentamat tiedot älytelevisiosta. On erittäin suositeltavaa poistaa kaikki evästeet ja paikallisesti tallennetut asetukset ennen kuin myyt älytelevisiosi tai annat sen pois.\n5. Yhteydenotto\nMikäli sinulla on kysymyksiä tai kommentteja koskien Evästekäytäntöämme tai evästeiden käyttöämme, voit lähettää meille sähköpostia osoitteeseen FRsupport@tcl.com.\nVersio: 1.0\n"];
var privacyPolicyTitle = "Tietosuojakäytäntö – Verkkopohjaiset Älytelevisiopalvelut";
var privacyPolicyConditions = ["Kunnioitamme yksityisyyttäsi käsitellessämme henkilötietojasi. Tässä Tietosuojakäytännössä kerrotaan siitä tahosta, joka vastaa meidän sinulta älytelevisiopalveluiden (“Palvelut”) käyttösi yhteydessä keräämien henkilötietojen keräämisestä, käsittelemisestä ja käytöstä, siitä minkä tyyppisiä sinua koskevia henkilötietoja keräämme, mitä teemme näillä tiedoilla sekä oikeuksistasi koskien meidän henkilötietojen käyttöä. \n1. Rekisterinpitäjä\nPalvelujen käytön yhteydessä sinulta kerättyjen henkilötietojen kerääminen, käsittely ja käyttö tapahtuu Shenzhen TCL New Technology Co., Ltd., -nimisen yrityksen toimesta, jonka toimipaikan osoite on No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, China (\"Yhtiö”). Pyydämme sinua kuitenkin huomioimaan, ettemme ole yksin vastuussa kaikista tietojen käsittelyyn liittyvistä toimenpiteistä alla esitetyn mukaisesti. Tästä huolimatta olemme sisällyttäneet kuvauksen kyseessä olevista toimenpiteistä Tietosuojakäytäntöömme, koska tällainen käsitteleminen on yhteydessä älytelevision käyttöösi.\n2. Suostumus tietojen käsittelyyn\nTietyiltä osin henkilötietojesi kerääminen, käsittely ja/tai käyttö edellyttää suostumustasi.\nMikäli olet antanut suostumuksesi henkilötietojesi käyttöön Palveluiden parantamiseksi, suostumuksesi sanamuoto oli seuraava:\n\"Annan suostumukseni siihen, että tietoja laitteeni käynnistysajankohdasta, DTV-kanavaluettelosta, suosikkikanavaluettelosta, vierailuajasta ja selatuista kanavista kerätään, käsitellään ja käytetään analysoitaessa käyttäjien tottumuksia Palvelujen parantamiseksi ja/tai analysoitaessa montako käyttäjää Yhtiöllä on päivässä/kuukaudessa/vuodessa sekä siihen, että kyseisiä tietoja luovutetaan televisioasemille.”\n \nMikäli olet antanut suostumuksesi henkilötietojesi käyttöön mielenkiinnon kohteidesi mukaisesti räätälöityjä mainoksia varten, suostumuksesi sanamuoto oli seuraava:\n\"Annan suostumukseni siihen, että asiakasluokitustani ja sijaintimaatani koskevia tietoja kerätään, käsitellään ja käytetään asianmukaisten mainosten vastaanottamista varten.”\nSuostumuksen antaminen on vapaaehtoista ja voit käyttää Palveluja vaikka et antaisikaan suostumustasi. Saatat kuitenkin nähdä mainoksia ja muuta sisältöä, jota ei ole räätälöity omien mieltymystesi mukaiseksi. Riippumatta siitä oletko antanut suostumuksesi, Yhtiö pidättää oikeuden kerätä, käsitellä ja/tai käyttää edellä mainittuja tietoja soveltuvan lain sallimissa määrin.\nVoit milloin tahansa perua antamasi suostumuksen edellä olevia koskien niin, että suostumus ei ole enää voimassa siitä hetkestä eteenpäin. Voit vastustaa henkilötietojesi käyttöä markkinointiin, markkina- tai mielipidetutkimuksiin sekä Palveluiden räätälöimistä tarpeisiisi. Peruaksesi suostumuksesi ja/tai vastustaaksesi käyttöä, muutathan älytelevisiosi yksityisyysasetuksia tätä vastaavasti.\n3. Mitä henkilötietoja keräämme?\nSuostumuksestasi riippumatta Yhtiö kerää, käsittelee, säilyttää ja käyttää seuraaviin luokkiin kuuluvia tietoja:\nLaitetunniste: Älytelevisiossasi on kiinteä yksilöllinen numero, jonka avulla pystymme tunnistamaan ja todentamaan kyseessä olevan älytelevision käyttäessäsi Palveluja. Tätä numeroa kutsutaan laitetunnisteeksi. Laitetunniste ilmoitetaan palvelukumppanillemme Palveluiden tarjoamiseksi sinulle. Ilmoitamme laitetunnisteen myös valikoiduille sisältökumppaneille tunnistamistarkoituksia varten. Kyseiset sisältökumppanit käyttävät laitetunnistetta tunnistaakseen älytelevisiosi sisältökumppanin tarjoamiin palveluihin pääsemiseksi.\nIP-osoite ja MAC-osoite: Älytelevisiollesi määritetään IP-osoite internetiin liittymisen yhteydessä. Tämä IP-osoite välitetään meille ja käsittelemme sitä aina kun kyseessä oleva älytelevisio pyytää tietoja tai dataa Palveluista. Mikäli älytelevisiosi on reitittimen takana (esim. paikallisessa kotiverkossa tai paikallisessa WLANissa), saatamme kerätä ja käsitellä tällaisen reitittimen IP-osoitetta koskevia tietoja. MAC-osoite on älytelevisiosi jokaiselle verkkorajapinnalle määritetty yksilöllinen numero. Keräämme ja käsittelemme myös MAC-osoitetta koskevia tietoja kun älytelevisio pyytää tietoja tai dataa Palveluista.\nPalvelupyyntötiedot: Aina kun liität älytelevisiosi internetiin ja aina kun kytket älytelevision päälle, se yhdistyy automaattisesti palvelukumppanimme hallinnoimiin Palveluihin. Tämän jälkeen todennetaan, että älytelevisiollasi on oikeus saada pääsy Palveluihin. Todentamistarkoituksia varten Palvelut säilyttävät yhtä tai useampaa älytelevisioosi liittyvää yksilöllistä numerotunnistetta. Yhdistyessään Palveluihin älytelevisio välittää sille määrätyn IP-osoitteen ja välittää laitekohtaisia tietoja (älytelevision malli, ohjelmistoversio) tarkistaakseen, onko ohjelmistopäivityksiä saatavilla. \nPalveluasetukset: Palveluiden tavanomaiseen toiminnallisuuteen kuuluu, että voit manuaalisesti muuttaa järjestystä, jossa sovellukset näkyvät Palveluissa. Palvelukumppanimme tallentaa järjestyksesi sekä muut Palveluiden käytön aikana tekemäsi valinnat. Nämä tiedot liitetään laitetunnisteeseen.\nLaitekohtaiset tiedot: Älytelevisio tallentaa paljon erilaista tietoa itsestään ja asetuksistaan. Nämä tiedot pitävät sisällään älytelevision tyypin, toimintajärjestelmän version, sen paneelin resoluution, projektitunnisteen (eli tietoja konfiguraatiotiedostoista), käyttäjäagentin, selaimen nimen, selainversion, sekä älytelevision asetuksissa valitun kielen ja maan. Käytämme näitä tietoja itse ja luovutamme niitä palvelukumppanillemme sekä sisältökumppaneillemme.\nMainonta: Palvelut saattavat sisältää mainontaa. Tällaiset mainokset ovat meidän esittämiämme tai niitä saattavat esittää kolmannet osapuolet, jotka käyttävät meidän määrittämäämme mainontalistausta. Kaikki mainokset näytetään oman mainosserverimme avulla tai sen kautta, ja sillä on koordinoiva rooli mainosten esittämisessä. Oma mainosserverimme tai kolmannen tahon mainosserveri saattaa jättää älytelevisioon evästeen. Lisätietoja tällaisista evästeistä löytyy Evästekäytännöstämme.\nPalvelu- ja sisältökumppaniliikenne: Käyttäessäsi Palveluja älytelevisiosi pyytää Palveluilta dataa internetin välityksellä. Osana näitä pyyntöjä IP-osoitteesi välitetään edellä kuvatun mukaisesti palvelukumppanillemme yhdessä älytelevisiosi kieltä ja maata koskevien asetusten kanssa. Palvelukumppanimme käsittelee kyseisiä tietoja oman tietosuojakäytäntönsä mukaisesti.\nToisen ruudun käyttö: Mikäli käytät toisen ruudun sovellustamme, keräämme ja käsittelemme servereillämme tietoja sovelluksessa aktivoimistasi asetuksista sekä maata ja kieltä koskevista asetuksista, DTV-kanavaluettelosta, suosikkikanavien luetteloista, aikataululuetteloista, laitetunnuksista, nykyisestä kanavasta, älytelevisiosi protokollaversiosta ja IP-osoitteesta. Tämän jälkeen serverimme hallinnoivat älytelevisiotasi toisen ruudun sovelluksessa määrittämäsi mukaisesti.\nHbbTV - \"Punainen Painike\": Televisioasemat (\"Asemat\") voivat lähettää TV-signaalissaan lisätietoja. Mikäli älytelevisio vastaanottaa tiettyjä tällaisiin lisätietoihin sisältyviä ohjeistuksia ja mikäli se on yhteydessä internetiin, älytelevisio lataa kuvan tai pienen sivun Aseman verkkosivustolta ja näyttää sen samalla kun se kehottaa painamaan kaukosäätimesi “Punaista Painiketta” halutessasi käyttää Aseman tarjoamia lisäpalveluita. Tämä tapahtuu joka kerta kun napsautat. Ladatessaan kuvaa Aseman verkkosivustolta älytelevisio välittää joitakin henkilötietoja, eli DTV-kanavaluetteloa, nykyistä kanavaa, tapahtumatietotaulukkoa, TV-aikaa sekä älytelevisiosi IP-osoitetta ja (mahdollisia) älytelevisioon tallennettuja evästeitä koskevia tietoja. Asema vastaa tällaisten tietojen keräämisestä, käsittelystä ja/tai käytöstä. Lisäksi, mikäli käytät Aseman tarjoamia lisäpalveluja Punaisen Painikkeen kautta, Asema voi kerätä muita sinua koskevia henkilötietoja (esim. millaisia tilausvideoita katselet, mitä uutisia luet, jne.).\n4. Mihin tarkoitukseen käsittelemme ja/tai käytämme henkilötietojasi? \nKäsittelemme kerättyjä tietoja seuraaviin tarkoituksiin: \n• Palvelujen tarjoaminen: Käytämme IP-osoitetta ja MAC-osoitetta, laitetunnistetta, älytelevision toimintajärjestelmän versiota, älytelevisiosi tyyppiä ja sen paneelin resoluutiota, projektitunnistetta (esim. tietoja konfiguraatiotiedostoista), DTV-kanavaluetteloasi, katsottuja kanavia, aikavyöhykettä, sekä maa- ja kieliasetuksia koskevia tietoja antaaksemme älytelevisiollesi pääsyn Palveluihin sekä sisältökumppanien tarjoamiin palveluihin. Tarkoitukset sisältävät (rajoituksetta) tunnistamisen, sijaintiin perustuvien palvelujen tarjoamisen sinulle (esim. sääennusteet); väärinkäytöksiin puuttumisen, tietoturvaloukkausten hoitamisen, Palveluiden saatavuuden valvonnan sekä käyttäjän valintojen varmuuskopiointipalveluiden tarjoamisen.\n• Tunnistaminen: Käytämme Laitetunnistetta ja MAC-osoitetta tunnistamistarkoituksiin. \n• Ohjelmistopäivitykset: Aina kun älytelevisiosi laitetaan päälle, se ilmoittaa meille älytelevisiosi IP-osoitteen, laitetunnisteen, ohjelmistoversion, asiakastyypin, projektitunnisteen (eli konfiguraatiotiedostot), käyttäjätunnisteen sekä sarjanumeron tarjotakseen ja toimittaakseen sinulle soveltuvia ohjelmistopäivityksiä.\n• Palvelujen kehittäminen: Käytämme koostettuja ja anonymisoituja tietoja (eli tietoja koskien vuorovaikutustasi Palveluiden kanssa) parantaaksemme Palveluihin liittyvää käyttäjäkokemusta.\n• Mainosten näyttäminen: Käytämme mainosevästeissä olevia tietoja, jotta järjestelmä voisi kirjata mitkä mainokset on esitetty älytelevisiossasi varmistaaksemme, että sinulle ei näytetä liikaa samanlaisia mainoksia, ja että pystymme täyttämään mainontakumppaneidemme kanssa tekemämme kaupalliset järjestelyt. Mainosserverimme koordinoinnin jälkeen Palveluissa mainoksia esittävät ulkopuoliset mainostajat tai sisältökumppaniemme verkkosivustot saattavat myös käyttää evästeitä, jotta ne voisivat seurata toimintaasi useiden verkkosivustojen osalta sekä tarjota henkilökohtaisia mieltymyksiäsi vastaavia mainoksia. \n• Mainosten optimointi: Käytämme mainosten katsomiseen ja mainosten napsauttamiseen liittyviä tietoja optimoidaksemme kuluttajien mainontakokemuksen Palvelussa.\n• Alennukset: Luovutamme laitetunnuksen valikoiduille sisältökumppaneille, jotta kyseiset kumppanit pystyisivät tunnistamaan miltä osin ne voivat tarjota sinulle vapaan pääsyn kokoelmissaan oleviin tilausvideoihin.\n• Viranomaisyhteistyö: Saatamme joutua luovuttamaan tietoja toimivaltaisille lainvalvontaviranomaisille tai tuomioistuimille. Mikäli näin käy, luovutamme tietoja ainoastaan velvoittavan lainkäytön välineen perusteella, kuten sellaisen etsintäluvan tai oikeuden määräyksen perusteella, joka edellyttää meidän tekevän yhteistyötä asianmukaisten viranomaisten kanssa.\nPalveluja voi käyttää nimimerkillä, ellei jokin tietty palvelu edellytä sinun antavan nimesi ja/tai sähköpostiosoitteesi.\n5. Vastaanottajaryhmät\nYhtiö luovuttaa Palveluiden käytön aikana kerättyjä henkilötietojasi ainoastaan seuraaville kolmansille osapuolille:\n• Ulkopuolisille älytelevisiopalveluiden tarjoajille, mikäli olet pyytänyt kyseisiä palveluja (esim. jos käynnistät älytelevisiollasi Netflix-sovelluksen, saatamme luovuttaa IP-osoitteesi, MAC-osoitteesi, ohjelmistoversiosi ja TV:n mallin nimen Netflixille).\n• Ulkopuolisille sisältökumppaneille, mikäli olet pyytänyt tiettyä kyseisten sisältökumppaneiden toimittamaa sisältöä (esim. voidaksemme tarjota sinulle GoLive IP TV-palvelua, saatamme luovuttaa TV-asiakastyyppiäsi, IP-osoitettasi ja kieliasetuksiasi koskevia tietoja GoLive-palvelua tarjoavalle oikeushenkilölle).\n• Mikäli olet antanut suostumuksesi tiettyjen henkilötietojen luovuttamiseen edellä mainituille kolmansille osapuolille, Yhtiö luovuttaa henkilötietojasi kyseisille kolmansille osapuolille.\n• Ulkoistettujen palveluiden tarjoajille, kuten Yhtiötä Palvelujen tuottamisessa avustaville tietojenkäsittelijöille.\nYhtiö luovuttaa henkilötietojasi muille kolmansille tahoille ainoastaan, mikäli Yhtiö on velvoitettu niin tekemään oikeudellisten vaatimusten perusteella (esim. tuomioistuimille tai syyttäjäviranomaisille), mikäli olet antanut suostumuksesi kyseiseen luovutukseen tai mikäli luovuttaminen on muutoin lainmukaista soveltuvan lainsäädännön perusteella.\n6. Missä maissa tietojasi käsitellään?\nYhtiö ja/tai eräät edellä luetellut henkilötietojesi vastaanottajat saattavat sijaita Euroopan talousalueen ulkopuolella (eli seuraavissa maissa: Kiinan kansantasavalta, Yhdysvallat). Näin ollen henkilötietojasi saatetaan käsitellä maissa, joissa henkilötietojen suojaustason ei katsota olevan riittävä Tietosuojadirektiivin (Euroopan parlamentin ja neuvoston direktiivi 95/46/EY annettu 24 päivänä lokakuuta 1995 yksilöiden suojelusta henkilötietojen käsittelyssä ja näiden tietojen vapaasta liikkuvuudesta) perusteella. \n7. Oikeutesi\nVoit ottaa yhteyttä Yhtiöön lähettämällä allekirjoitetun pyynnön, jonka liitteenä on todiste henkilöllisyydestäsi saadaksesi tietoja Yhtiön käsittelemistä henkilötiedoistasi ja/tai käyttääksesi lakisääteisiä oikeuksiasi koskien pääsyä henkilötietoihisi, niiden korjaamista, poistamista ja estääksesi pääsyn henkilötietoihisi; ja/tai vastustaaksesi henkilötietojesi käsittelyä markkinointiin ja/tai markkina- tai mielipidetutkimuksia varten pyynnöstä ja veloituksetta.\n8. Tietosuojakäytännön muuttaminen\nParantaaksemme Palveluja saatamme joutua tekemään muutoksia tähän Tietosuojakäytäntöön esim. ottamalla käyttöön uutta teknologiaa tai tarjoamalla uusia palveluja. Pidätämme oikeuden muuttaa tai täydentää tätä Tietosuojakäytäntöä milloin tahansa. Ilmoitamme sinulle tällaisista muutoksista verkkosivustollamme, sähköpostitse tai muulla kohtuullisella tavalla.\n9. Yhteystiedot\nMikäli sinulla on kysyttävää Tietosuojakäytännöstä tai haluaisit valittaa tavastamme käsitellä henkilötietojasi, pyydämme ottamaan yhteyttä meihin alla olevia yhteystietoja käyttäen:\nSähköposti: FRsupport@tcl.com\nVersio: 1.0\n"];
var privacyPolicyTerms = [
    "Ota käyttöön älytelevisiopalvelu.",
    "Annan suostumukseni siihen, että laitteen käynnistysaikojen, DTV-kanavalistan, suosikkikanavalistan, käyntiaikojen ja katsottujen kanavien tietoja kerätään, käsitellään ja käytetään käyttäjätottumusten analysoimiseksi ja/tai TCL:n päivittäisen/kuukausittaisen verkkokäyttäjämäärän analysoimiseksi ja nämä tiedot jaetaan TV-kanaville.",
    "Ota käyttöön suosituspalvelu.",
    "Ota käyttöön toisen näytön sovellu mobiililaitteille.",
    "Ota käyttöön automaattiset ohjelmistopäivitykset.",
    "Ota käyttöön FreeviewPlay-palvelu."
];
var privacyPolicyTips = [
    "Kaikki älytelevisiopalvelut poistetaan käytöstä.",
    "TV-kanavien tarjoama HbbTV-palvelu, kun sisäänrakennettu viritin on poissa käytöstä.",
    "Sisällön ja TV-ohjelmien suosituspalvelu poistetaan käytöstä.",
    "Toisen näytön sovellus poistetaan käytöstä.",
    "TV hakee ohjelmistopäivitykset ja uudet toiminnot automaattisesti.",
    "FreeviewPlay-sisältö poistetaan käytöstä."
];
var privacyPolicyRemind = "Valitse vastaava valintaruutu kohdassa Asetukset.";
var set = "Aseta";
var copyShopDemoTips = ["Yhdistetty USB-liitäntään, haluatko kopioida videon flash-muistiin?","Kopioi video flash-muistiin","Videon kopiointi onnistui!","Videon kopioinnissa tapahtui virhe!"];
var dataDeletionWords = ["Poista Smart TV -palvelun tiedot taustapalvelimilta.","Huomautukset: Smart TV -käyttöäsi koskevat tiedot poistetaan yhden kuukauden kuluessa tämän kohdan valitsemisesta. Huomaa, että poisto ei vaikuta televisioon paikallisesti tallennettuihin tietoihin.","Ei enää raportointitietoja Smart TV -palvelimelle.","Huomautukset:  Smart TV -palvelujen käytön tietoja ei enää siirretä palvelimelle, jos valitset tämän kohdan. Televisiosi ei enää vastaanota suositeltuja palveluja.","Lisätietoja saat menemällä osoitteeseen www.tcl.eu"];
var miracastWords = ["Langaton yhteys","Peilaa Android-puhelin TV-ruutuun","Yhdistä napsauttamalla","Tämä toiminto on käytettävissä vain Android-puhelimessa"];
var miracastTips = ["Yhdistämisen vaiheet","Avaa järjestelmäasetukset","Lisää yhdistämistapoja \n / Muut langattomat yhteydet","Valitse langaton näyttö","Yhdistä napsauttamalla \n odottaa löytämistä"];
var termsAndConditions = ["\nTämän televisiovastaanottimen (tämä “Laite”) kautta sinulle saatavilla olevat sisällöt ja palvelut (yhdessä “Lisensoitu sovellus”) on lisensoitu, ei myyty, sinun käyttöösi vain näiden käyttöehtojen mukaisina. Lisensoidun sovelluksen toimittajat (kukin ”Sovellustoimittaja”) pidättävät itsellään kaikki oikeudet, joita ei ole nimenomaisesti myönnetty sinulle.\n\n1.Lisenssin laajuus\n\nTämä asianosaisen [Sovellustoimittajan] sinulle myöntämä lisenssi eli käyttöoikeus Lisensoituun sovellukseen on rajoitettu ei-siirtokelpoiseen käyttölisenssiin Lisensoidun sovelluksen käyttämiseksi Laitteella [jonka omistat tai jota hallinnoit]. Sinulla ei ole oikeutta jakaa tai saattaa Lisensoitua sovellusta saataville verkkoon, jossa sitä voisi käyttää useampi laite yhtäaikaisesti. Sinulla ei ole oikeutta vuokrata, liisata, lainata, myydä, jakaa edelleen tai lisensoida edelleen Lisensoitua sovellusta.\n\nKaikki Lisensoidut sovellukset ja kaikki niihin kuuluva sisältö, jotka ovat saatavilla tämän Laitteen kautta, kuuluvat Sovellustoimittajalle ja niitä suojelee soveltuva immateriaalioikeuslainsäädäntö. Jollei soveltuva lainsäädäntö toisin salli, sinulla ei ole oikeutta muunnella, kopioida, kääntää takaisin ohjelmistokoodia, takaisinmallintaa, purkaa, julkaista uudelleen, ladata, esittää internet-sivulla, siirtää, kääntää, yrittää johtaa lähdekoodia, luoda johdannaisia töitä tai millään muulla tavalla hyödyntää mitään Lisensoitua sovellusta tai sen päivityksiä tai osia. Mikäli rikot tätä rajoitusta, sinua vastaan voidaan nostaa syyte sekä vahingonkorvausvaatimuksia. Lisenssin ehtoja sovelletaan kaikkiin Sovellustoimittajan toimittamiin päivityksiin, jotka korvaavat ja/tai täydentävät alkuperäistä Lisensoitua sovellusta, ellei tällaiseen päivitykseen liity erillinen lisenssi, jolloin sovelletaan tämän uuden erillisen lisenssin ehtoja. Sinulla on yksin vastuu kaikista mahdollisista kustannuksista (jos sellaisia on) Lisensoidun sovelluksen päivityksestä.\n\n2.Kolmannen osapuolen materiaalit\n\nLisensoitu sovellus voi mahdollistaa pääsyn Sovellustoimittajan sekä kolmannen osapuolen palveluihin ja verkkosivustoille (yhdessä ”Palvelut”). Käyttämällä Palveluita voit kohdata sisältöä, jota voidaan pitää loukkaavana, sopimattomana tai epäasianmukaisena. Tämän sisällön voidaan tai ei voida tunnistaa sisältävän rohkeaa kielenkäyttöä ja että hakutulosten tai tietyn URL-osoitteen syöttäminen voi automaattisesti ja tarkoittamatta luoda linkkejä tai viittauksia epäasianmukaiseen materiaaliin. Siitä huolimatta tämän Laitteen valmistaja (”Valmistaja”) ja Sovellustoimittaja eivät ole missään vastuussa sinulle sisällöstä, jota voidaan pitää loukkaavana, sopimattomana tai epäasianmukaisena.\n\nValmistajalla ei ole velvollisuutta tutkia tai arvioida tällaisten Palvelujen sisältöä, virheettömyyttä, täydellisyyttä, oikea-aikaisuutta, pätevyyttä, niiden tekijänoikeuksien noudattamista, laillisuutta, laatua tai mitään muuta näkökulmaa. Valmistaja ei takaa, ei tue, ei hyväksy, eikä hänellä ole mitään vastuuta tai velvollisuutta sinua tai ketään muuta henkilöä kohtaan koskien Palveluita.\n\nPalvelut voivat sisältää yksinomistettua sisältöä, tietoa ja materiaalia (yhdessä “Kolmannen osapuolen materiaalit”), joita suojaavat soveltuva immateriaalioikeuslainsäädäntö sekä muu lainsäädäntö. Sinun ei tule käyttää tällaisia Kolmannen osapuolen materiaaleja millään muulla tavalla kuin sallitulla Palvelujen käyttötavalla. Jollei soveltuva lainsäädäntö toisin salli, sinulla ei ole oikeutta jäljentää, muunnella, vuokrata, liisata, lainata, myydä tai jaella Kolmannen osapuolen materiaaleja, eikä luoda niistä johdannaisia töitä millään tavalla, eikä sinulla ole oikeutta hyödyntää Palveluita millään luvattomalla tavalla. Sinulla ei ole oikeutta käyttää Palveluita millään tavalla häiritäksesi, väärinkäyttääksesi, väijyäksesi, uhataksesi, halventaaksesi tai muutoin rikkoaksesi tai loukataksesi minkään osapuolen oikeuksia. Valmistaja ei ole millään tavalla vastuussa tällaisesta käytöstäsi eikä minkäänlaisista häiritsevistä, uhkaavista, halventavista, loukkaavista tai laittomista viesteistä tai tiedonsiirroista, joita voit vastaanottaa Palvelujen käytön seurauksena. \n\n3.Ei takuuta\n\nKaikki Lisensoidut sovellukset ja Palvelut toimitetaan “sellaisina kuin ne ovat” ja ”sellaisina kuin ne ovat käytettävissä” ilman minkäänlaista suoraa tai epäsuoraa takuuta. Valmistaja nimenomaisesti sanoutuu irti kaikista takuista ja ehdoista koskien Lisensoituja sovelluksia ja Palveluita, olivatpa ne suoria vai epäsuoria, mukaan lukien, mutta rajoittamatta, takuut koskien kaupallista hyödyntämistä, tyydyttävää laatua, soveltumista tiettyyn käyttötarkoitukseen tai virheettömyyttä, häiriöttömyyttä sekä kolmansien osapuolten oikeuksien loukkaamattomuutta. Valmistaja ei takaa virheettömyyttä, pätevyyttä, oikea-aikaisuutta, laillisuutta tai täydellisyyttä millekään Lisensoidulle sovellukselle tai Palvelulle, joka on saatavilla tämän Laitteen kautta. Valmistaja ei myöskään takaa, että tämä Laite, Lisensoidut sovellukset tai Palvelut vastaavat odotuksiasi, tai että Lisensoitujen sovellusten tai Palvelujen toiminta tulee olemaan keskeyttämätöntä ja virheetöntä tai että Lisensoitujen laitteiden tai Palvelujen viat tullaan korjaamaan. Mikäli Lisensoitu laite tai Palvelut todetaan viallisiksi, sinun tulee ottaa vastuu kaikista tarvittavista huolto-, kunnostus- ja korjaustoimenpiteiden kokonaiskustannuksista. \n\nLisensoituja sovelluksia sekä Palveluita voidaan muuttaa, lakkauttaa, siirtää, lopettaa tai keskeyttää, tai pääsy niihin voidaan estää milloin tahansa ilman ilmoitusta. Valmistaja ei anna väitettä tai takuuta siitä, että mikään Lisensoituihin sovelluksiin tai Palveluihin kuuluva sisältö tai palvelu olisi saatavilla tiettynä ajanjaksona. Kolmas osapuoli välittää tällaiset sisällöt ja palvelut sellaisten verkkojen ja siirtovälineiden avulla, joihin Valmistajalla ei ole valtuuksia. Rajoittamatta edellä mainittujen säännösten yleistä pätevyyttä, Valmistaja sanoutuu lisäksi nimenomaisesti irti kaikesta vastuusta ja velvollisuudesta koskien minkään tämän Laitteen kautta saatavilla olevan sisällön tai palvelun muutosta, häiriötä, käytöstä poistamista, poistoa tai keskeytystä. Sovellustoimittaja ja muut Palvelujen toimittajat pidättävät itsellään oikeuden muuttaa, keskeyttää, poistaa tai estää pääsyn mihin tahansa Lisensoituun sovellukseen tai Palveluun milloin tahansa ilman ilmoitusta. Valmistaja voi myös asettaa rajoituksia Lisensoitujen sovellusten tai Palvelujen käyttöön tai niihin pääsyyn missä tapauksessa tahansa ja ilman ilmoitusta tai vastuuta.\n\nValmistaja ei tarjoa Lisensoituihin sovelluksiin tai Palveluihin liittyvää asiakaspalvelua. Kaikki Lisensoituihin sovelluksiin tai Palveluihin liittyvät kysymykset tai palvelupyynnöt tulee esittää suoraan asianomaiselle toimittajalle.\n\n4.Tietojen kerääminen ja käyttö\n\nValmistaja, Sovellustoimittajat sekä Palveluiden toimittajat voivat kerätä ja käyttää teknisiä tietoja ja niihin liittyviä tietoja, mukaan lukien, mutta rajoittamatta, teknisiä tietoja koskien tätä Laitetta, järjestelmä- ja sovellusohjelmistoja sekä oheislaitteita, helpottaakseen Laitteeseen sekä Lisensoituun sovellukseen liittyvien ohjelmistopäivitysten, tuotetuen sekä muiden palvelujen tarjoamista sinulle (mikäli sellaisia on). Valmistaja, Sovellustoimittajat sekä Palveluiden toimittajat voivat käyttää näitä tietoja parantaakseen tuotteitaan tai tarjotakseen palveluita tai teknologioita sinulle, kunhan nämä tiedot ovat sellaisessa muodossa, että niistä ei voi tunnistaa sinua henkilökohtaisesti. Lisätietoa tietojen keräämisestä ja käytöstä tietosuojaselosteessamme osoitteessa http://www.tcl.eu/en/.\n\n5.Tietyt ominaisuudet eivät ole saatavilla\n\nSovellustoimittajien rajoituksista johtuen tietyt ominaisuudet, sovellukset ja palvelut eivät välttämättä ole saatavilla tällä Laitteella (mukaan lukien sen oheislaitteet) tai kaikilla alueilla. Jotkut Laitteen ominaisuudet voivat lisäksi vaatia täydentäviä oheislaitteita tai jäsenmaksuja, jotka myydään erikseen.\n\n6.Vastuunrajoitukset\n\nSiinä määrin kuin soveltuvassa lainsäädännössä ei ole kielletty, Valmistaja ei ole missään olosuhteissa, riippumatta huolimattomuudesta tai siitä, onko kyse sopimusperusteisesta tai vahingonkorvausvastuusta, vastuussa mistään suorista, epäsuorista, satunnaisista, erityisistä tai välillisistä vahingoista, asianajajien palkkioista, kuluista tai muista vahingoista, jotka johtuvat Laitteesta, Lisensoidusta sovelluksesta tai mistään Palvelusta, tai näissä olevista tiedoista, tai johtuvat sinun tai kolmannen osapuolen näiden käytöstä, vaikka tällaisten vahinkojen mahdollisuudesta olisi mainittu.\n\nValmistaja on vastuussa vain tahallisuudesta ja törkeästä huolimattomuudesta."];
var privacyNotice = ["\n\nKunnioitamme yksityisyyttäsi käsitellessämme henkilötietojasi. Tässä Tietosuojaselosteessa kuvataan, mikä taho vastaa Smart TV  Palvelujen (jäljempänä Palvelut) käytön yhteydessä sinusta kerättävien henkilötietojen käsittelystä, minkä tyyppisiä henkilötietoja keräämme sinusta, mitä teemme tiedoilla ja millaisia oikeuksia sinulla on henkilötietojen käyttöön liittyen. \n\n1.	Rekisterinpitäjä ja edustaja Euroopan unionin alueella\n\nPalvelujen käytön yhteydessä kerättäviä henkilötietojasi kerää, käsittelee ja käyttää Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, China (jäljempänä Yhtiö). Yhteystietomme sekä Euroopan Unionin alueella toimivan edustajamme yhteystiedot ilmoitetaan jäljempänä kohdassa 12. Huomaa, että emme ole kuitenkaan vastuussa kaikista jäljempänä kuvattavista tietojen käsittelytoimista. Tästä huolimatta olemme sisällyttäneet kuvauksen kyseisistä toimista Tietosuojaselosteeseemme, koska kyseinen käsittely liittyy Smart TV:n käyttöösi.\n\n2.	Suostumus tietojen käsittelyyn\n\nOsa suorittamistamme tietojen käsittelytoimista, kuten henkilötietojesi käyttö Palvelujen parantamiseen, edellyttää suostumustasi.\n\nSuostumus on vapaaehtoinen, ja voit käyttää Palveluja myös ilman suostumuksen antamista. Tällöin saatat kuitenkin nähdä sisältöä, jota ei ole räätälöity toiveidesi mukaan. Suostumuksestasi riippumatta pidätämme oikeuden käsitellä henkilötietojasi sovellettavan lain sallimissa puitteissa.\n\nVoit perua suostumuksesi milloin tahansa. Suostumuksen peruminen ei vaikuta sellaisen käsittelyn lainmukaisuuteen, jota on tehty suostumuksen perusteella ennen sen perumista. Jos haluat perua suostumuksesi ja/tai vastustaa käsittelyä (ks. kohta 10 ja Oikeutesi-liite, joissa kerrotaan oikeudestasi vastustaa käsittelyä), muuta Smart TV:si yksityisyysasetuksia sen mukaisesti.\n\n3.	Henkilötietojen erityisryhmät\n\nKäsittelemme erityisesti seuraavia tietoryhmiä:\n\nLaitetunnus: Smart TV:si tallentaa kiinteän, yksilöllisen numeron, jonka avulla voimme tunnistaa Smart TV:n, kun käytät Palveluja. Tätä numeroa kutsutaan laitetunnukseksi. \n\nIP-osoite ja MAC-osoite: Smart TV:llesi määritetään IP-osoite, kun Internet-yhteys muodostetaan. Jos Smart TV:si on reitittimen takana (esim. paikallisessa kotiverkossa tai paikallisessa WLAN-verkossa), voimme käsitellä kyseisen reitittimen IP-osoitetta. MAC-osoite on yksilöllinen numero, joka määritetään kullekin Smart TV:si verkkoliitännälle. \n\nLaitekohtaiset tiedot: Smart TV tallentaa useita tietoja itsestään ja kokoonpanostaan. Näitä tietoja ovat mm. Smart TV:n tyyppi, Smart TV:n käyttöjärjestelmän versio, näytön resoluutio, projektitunnus (tietoa asetustiedostoista), asiakasohjelma, selaimen nimi, selaimen versio sekä kieli ja maa, jotka on määritetty Smart TV:hen. \n\nKäytämme kyseisiä tietoja ja toimitamme niitä palvelukumppanillemme ja sisältökumppaneillemme jäljempänä kuvattuihin tarkoituksiin.\n\n4.	Henkilötietojesi käsittelyn ja/tai käytön tarkoitukset ja oikeusperusteet\n\nSeuraavassa kuvataan henkilötietojesi käsittelyn tarkoitukset ja oikeusperusteet. Mikäli jäljempänä on mainittu oikeusperusteeksi sopimuksen mukaiset tarkoitukset, emme voi tarjota sinulle Palveluja, ellet anna meille kyseisiä tietoja. Mikäli oikeusperusteeksi mainitaan suostumuksesi, voit valita, annatko suostumuksesi vai et. Jos et anna suostumustasi, emme käsittele henkilötietojasi kyseiseen tarkoitukseen.\n\n•	Palvelujen tarjoaminen: Käytämme IP-osoitetta ja MAC-osoitetta, laitetunnusta, Smart TV:n käyttöjärjestelmän versiota, Smart TV:n asiakastyyppiä ja näytön resoluutiota, projektitunnusta (asetustiedostoja koskevia tietoja), DTV-kanavaluetteloasi, katseltuja kanavia, aikavyöhykettä sekä maa- ja kieliasetuksia tarjotaksemme Smart TV:n kautta käyttöösi Palveluja ja sisältökumppanien Palveluja. Käsittelytarkoituksia ovat muun muassa sijaintiin perustuvien Palvelujen (esim. sääennusteiden) tarjoaminen, väärinkäytösten käsittely, turvallisuushäiriöiden hallinta, Palvelujen käytettävyyden valvonta sekä käyttäjän mieltymysten varmuuskopiointipalvelujen tarjoaminen.\n\nKun käytät Palveluja, Smart TV:si pyytää Palveluilta tietoja Internetin kautta. Osana näitä pyyntöjä edellä mainittu IP-osoitteesi sekä Smart TV:seesi määritetty kieli ja maa lähetetään palvelukumppanillemme. Palvelukumppanimme käsittelee kyseisiä tietoja oman tietosuojaselosteensa mukaisesti.\n\nKyseisen henkilötietojesi käsittelyn oikeusperusteena ovat sopimuksen mukaiset tarkoitukset yleisen tietosuoja-asetuksen (GDPR) 6 artiklan 1 kohdan b alakohdan mukaisesti.\n\n•	Palveluasetukset: Osana Palvelujen normaalia toimintaa voit muuttaa manuaalisesti järjestystä, jossa sovellukset näytetään Palveluissa. Palvelukumppanimme tallentaa järjestyksesi ja muut mahdolliset toiveet, joita määrität Palvelujen käytön aikana. Nämä tiedot yhdistetään laitetunnukseen.\n\nKyseisen henkilötietojesi käsittelyn oikeusperusteena ovat sopimuksen mukaiset tarkoitukset yleisen tietosuoja-asetuksen 6 artiklan 1 kohdan b alakohdan mukaisesti.\n\n•	Tunnistautuminen: Aina kun yhdistät Smart TV:si Internetiin ja kytket Smart TV:n virran päälle, se muodostaa automaattisesti yhteyden palvelukumppanimme hallinnoimiin Palveluihin. Sen jälkeen Smart TV:si oikeus käyttää Palveluja tunnistetaan. Tunnistautumistarkoituksia varten Palvelut tallentavat yhden tai useamman Smart TV:seesi liittyvän numerotunnisteen. Käytämme laitetunnusta ja MAC-osoitetta tunnistautumistarkoituksiin. Annamme laitetunnuksen myös valikoiduille sisältökumppaneille tunnistautumistarkoituksia varten. Kyseiset sisältökumppanit käyttävät laitetunnusta tunnistaakseen Smart TV:si, jotta pääset käyttämään sisältökumppanin tarjoamia Palveluja.\n\nKyseisen henkilötietojesi käsittelyn oikeusperusteena ovat sopimuksen mukaiset tarkoitukset yleisen tietosuoja-asetuksen 6 artiklan 1 kohdan b alakohdan mukaisesti.\n\n•	Etädiagnostiikka: Osana Palveluja tarjoamme sinulle etädiagnostiikkapalveluja. Siksi käsittelemme laitetunnusta, laitenumeroa, sarjanumeroa, MAC-osoitetta sekä virhelokeja, virhekoodeja ja virhekuvauksia, jotka viallinen moduuli (sovellus, väliohjelmisto) antaa automaattisesti.\n\nLisäksi jos soitat asiakastukeemme, etukäteen antamallasi suostumuksella asiakastukipalvelija voit ottaa etäyhteyden televisioosi ja suorittaa lisää etädiagnostiikkapalveluja. Tällaisessa tilanteessa asiakastukipalvelija saa pääsyn televisioosi ja verkkoon, sovellukseen ja tallennettuihin tiedostoihin ja voi käsitellä laitetunnusta, laitenumeroa, sarjanumeroa, MAC-osoitetta, virhelokeja, virhekoodeja, virhekuvauksia, pääte-ID, asennettuja sovelluksia koskevia tietoja, television ruudun kuvakaappausta, yhdistettyjä USB/Bluetooth-laitteita koskevia tietoja voidakseen arvioida television, liitännäisten sovellusten ja datan tilaa. Virhelokit voivat sisältää tietoja, kuten televisio-ohjelmahistoria, musiikin soittolista, sovelluksen käyttäjätunnus ja salasana, mikäli lähettämiseen käytetty kolmannen osapuolen sovellus ei ole kryptannut kyseisiä tietoja. Tämä tehdään ongelmien diagnoimiseksi, järjestelmän asetusten muuttamiseksi pyynnöstäsi tai ilmoitettujen ongelmien korjaamiseksi. Lisäksi asiakastukipalvelijat voivat pyynnöstä paikantaa virheitä, ajaa ohjelmia, asentaa/poistaa ohjelmistoja, uudelleen konfiguroida ja/tai muutoin suorittaa palvelua tai teknistä tukea televisiolle.\n\nEtäyhteys voidaan ottaa vasta kun olet valinnut televisiostasi sitä koskevan valintaruudun ja se päättyy kyseisen etäyhteysistunnon jälkeen. \n\nKyseisen henkilötietojesi käsittelyn oikeusperusteena ovat sopimuksen mukaiset tarkoitukset yleisen tietosuoja-asetuksen 6 artiklan 1 kohdan b alakohdan mukaisesti.\n\n•	Jälkimyyntipalvelu: Sovellettavan lain mukaisesti voit olla oikeutettu takuuseen tai vastaaviin oikeuksiin saada jälkimyyntipalveluja. TCL Europe, 9-15 rue Rouget de L’Isle- 92130 Issy- Les-Moulineaux, France vastaa takuuvaateiden ja muiden jälkimyyntipalvelupyyntöjen käsittelystä sekä niihin liittyvästä henkilötietojesi käsittelystä. Jälkimyyntipalvelujen osalta TCL Europe toimii rekisterinpitäjänä, emmekä me ole vastuussa kyseisestä henkilötietojesi käsittelystä.\n\nKun pyydät jälkimyyntiin liittyvää palvelua, sinulta saatetaan kysyä nimeäsi, sähköpostiosoitettasi, puhelinnumeroasi, palvelupyyntöä ja laskussa mainittua postiosoitetta jälkimyyntipalvelun tarjoamista varten. Tietoja voidaan kerätä myös jälleenmyyjiemme jälkimyyntikumppanien tai valtuutettujen palveluntarjoajien kautta, jos pyydät niiltä palvelua. Jos haluat lisätietoa henkilötietojen suojaamisesta jälkimyyntipalvelujen yhteydessä, voit ottaa yhteyttä TCL Europeen käyttämällä jäljempänä kohdassa 12 annettuja yhteystietoja.\n\nKyseisen henkilötietojesi käsittelyn oikeusperusteena on lainsäädännöllisten velvoitteiden täyttäminen yleisen tietosuoja-asetuksen 6 artiklan 1 kohdan c alakohdan mukaisesti.\n\n•	T-Channel: T-Channel on pääsivu Smart TV:n käyttämiseen Linux-käyttöjärjestelmällä (jäljempänä on lisätietoa Android-käyttöjärjestelmän käytöstä), ja sen avulla voit valita tiettyä sisältöä.\n\nT-Channelin käytön edellyttämien henkilötietojesi käsittelyn oikeusperusteena ovat sopimuksen mukaiset tarkoitukset yleisen tietosuoja-asetuksen 6 artiklan 1 kohdan b alakohdan mukaisesti.\n\nEtukäteen antamasi suostumuksen nojalla myös valvomme T-Channelin käyttöä seuraavasti:\n\n	Kun aloitat T-Channelin käytön, tallennamme T-Channelin saapumis- ja poistumisajan.\n\n	Kun aloitat T-Channel-videon toiston, tallennamme videon nimen ja keston (ei koske Netflixiä, YouTubea tai muita kolmannen osapuolen tarjoamia palveluja).\n\n	Kun siirryt jollekin sivulle tai sivulta pois, tallennamme ajan, jonka viivyt sivulla.\n\n	Kun siirrät kursoria paikasta toiseen tai siirryt johonkin sovellukseen, tallennamme kyseisen tapahtuman.\n\n	Kun asennat, poistat tai päivität sovelluksia, tallennamme kyseiset tapahtumat ja sovellusten nimet.\n\nKeräämme näitä tietoja pääasiassa big datan analysointiin parantaaksemme tuotteita ja tarjotaksemme käyttäjille parempia sisältöpalveluja.\n\nT-Channelin käytön valvontaan liittyvän henkilötietojesi käsittelyn oikeusperuste on antamasi suostumus yleisen tietosuoja-asetuksen 6 artiklan 1 kohdan a alakohdan mukaisesti.\n\nJos olet ostanut Android-TV:n ja käytät Googlen Android-käyttöjärjestelmää, Google käsittelee henkilötietojasi, emmekä me ole vastuussa kyseisestä käsittelystä. Katso lisätietoa kyseisestä henkilötietojesi käsittelystä ja oikeuksistasi Googlen tietosuojaselosteesta.\n\n•	T-Cast: T-Castin avulla voit hallita TV:täsi puhelimella ja jakaa älypuhelimeesi tallennettuja videoita, musiikkia ja kuvia TV:seen. T-Castin avulla voit myös peilata älypuhelimesi TV:n kautta.\n\nSovelluksen lataaminen ja käyttäminen on vapaaehtoista. Jos lataat sovelluksen ja käytät sitä, käsittelemme MAC-osoitetta laskeaksemme, kuinka montaa T-Cast-versiota on käytetty markkinoilla. Tämä on välttämätöntä, jotta voimme tarjota sinulle tämän palvelun. Jos käytät toisen näytön toimintoa, keräämme ja käsittelemme palvelimillamme säätöjä, joita otat käyttöön sovelluksessa, maa- ja kieliasetuksia, DTV-kanavaluetteloa, suosikkikanavaluetteloita, aikataululuetteloita, laitetunnusta, nykyistä kanavaa, protokollaversiota ja Smart TV:si IP-osoitetta. Palvelimemme hallinnoivat sitten Smart TV:täsi sovelluksessa määrittämäsi mukaan.\n\nKyseisen henkilötietojesi käsittelyn oikeusperusteena ovat sopimuksen mukaiset tarkoitukset yleisen tietosuoja-asetuksen 6 artiklan 1 kohdan b alakohdan mukaisesti.\n\n•	TCL-apuri: TCL-apuri (TCL Assistant) on toiminnallisuus, joka mahdollistaa televisiosi yhdistämisen Amazon Alexa -yhteensopiviin laitteisiin (kuten Echo) voidakseen ohjata kyseisiä laitteita äänelläsi. Voidaksesi käyttää tätä toimintoa sinun tulee rekisteröidä televisiosi Amazonin verkkosivulla käyttäen televisiostasi löytyvää TCL-koodia. Voit sen jälkeen antaa sanallisia ohjeita Amazon Alexa -yhteensopivalle laitteelle painamalla televisiosi kaukosäätimen mikrofonipainiketta.\n\nJos käytät TCL-apuria, televisiosi kerää ääntäsi ja lähettää sen Amazon Alexa Cloudiin puheentunnistusta ja jatkokäsittelyä varten. Tietosi siirretään suoraan Amazonille eikä mitään tietoja käsitellä tai tallenneta televisioosi. Tutustuthan Amazonin tietosuojaselosteeseen saadaksesi tietoja, kuinka Amazon käsittelee tietojasi.\n\nKyseisen henkilötietojesi käsittelyn oikeusperusteena ovat sopimuksen mukaiset tarkoitukset yleisen tietosuoja-asetuksen 6 artiklan 1 kohdan b alakohdan mukaisesti.\n\n•	Alexa-puheentunnistus (Alexa Voice Recognition, AVS): AVS on toiminnallisuus, joka mahdollistaa televisiosi ääniohjauksen. Voidaksesi käyttää tätä toimintoa sinun tulee rekisteröidä televisiosi Amazonin verkkosivulla käyttäen Amazonin luomaa rekisteröintikoodia. Voit sen jälkeen antaa sanallisia ohjeita televisiolle painamalla televisiosi kaukosäätimen mikrofonipainiketta.\n\nJos käytät AVS:ää, televisiosi kerää ääntäsi ja lähettää sen Amazon Alexa Cloudiin puheentunnistusta ja jatkokäsittelyä varten. Tietosi siirretään suoraan Amazonille eikä mitään tietoja käsitellä tai tallenneta televisioosi. Tutustuthan Amazonin tietosuojaselosteeseen saadaksesi tietoja, kuinka Amazon käsittelee tietojasi.\n\nKun käytät AVS:ää, televisiosi nimi edellytetään, jotta voimme löytää television, jota haluat ohjata. \n\nKyseisen henkilötietojesi käsittelyn oikeusperusteena ovat sopimuksen mukaiset tarkoitukset yleisen tietosuoja-asetuksen 6 artiklan 1 kohdan b alakohdan mukaisesti.\n\nLisäksi tallennamme tiedon siitä kuinka usein ja kuinka pitkään olet käyttänyt AVS:ää ja mitä AVS:n toimintoa olet käyttänyt. Keräämme tämän tiedon parantaaksemme tuotteitamme ja tarjotaksemme parempaa sisältöpalvelua käyttäjillemme. \n\nKyseisen henkilötietojesi käsittelyn oikeusperusteena ovat oikeutetut etumme yleisen tietosuoja-asetuksen 6 artiklan 1 kohdan f alakohdan mukaisesti. Lisätietoja tasapainotestistä on saatavilla pyynnöstä.\n\n•	Ohjelmistopäivitykset: Ohjelmistopäivitykset ovat osa Palveluja. Sen vuoksi aina, kun kytket Smart TV:n virran päälle, laite antaa meille IP-osoitteen, laitetunnuksen, laitenumeron, ohjelmistoversion, Smart TV:si asiakastyypin, projektitunnuksen (asetustiedostot), käyttäjätunnuksen ja sarjanumeron, jotta voimme tarkistaa saatavilla olevat ohjelmistopäivitykset ja tarjota niitä sinulle.\n\nKyseisen henkilötietojesi käsittelyn oikeusperusteena ovat sopimuksen mukaiset tarkoitukset yleisen tietosuoja-asetuksen 6 artiklan 1 kohdan b alakohdan mukaisesti.\n\n•	Lainvalvonta: Meitä voidaan vaatia toimittamaan tietoa toimivaltaisille lainvalvontaviranomaisille tai tuomioistuimille. Jos toimimme niin, teemme sen ainoastaan sitovan oikeudellisen välineen, kuten määräyksen tai oikeudellisen määräyksen nojalla, joka edellyttää meitä tekemään yhteistyötä asiaankuuluvien viranomaisten kanssa.\n\nKyseisen henkilötietojesi käsittelyn oikeusperusteena on lainsäädännöllisten velvoitteiden täyttäminen yleisen tietosuoja-asetuksen 6 artiklan 1 kohdan c alakohdan mukaisesti.\n\nPalveluja voi käyttää salanimellä, elleivät tietyt palvelut edellytä nimesi ja/tai sähköpostiosoitteesi antamista.\n\n5.	Alle 16-vuotiaiden lasten yksityisyys ja turvallisuus\n\nYmmärrämme, että Palvelujamme käyttävien lasten yksityisyyttä ja turvallisuutta on suojattava erityisen huolellisesti. Alle 16-vuotiaat lapset tai kyseessä olevalla lainkäyttöalueella alaikäisiksi katsottavat lapset eivät saa antaa henkilötietojaan TV-laitteen kautta tai soittaessaan jälkimyyntipalveluun, elleivät heidän vanhempansa ole antaneet siihen todistettavaa suostumusta.\n\nEmme koskaan kerää käyttäjien syntymäaikoja, joten emme voi määrittää käyttäjien ikää. Jos kuitenkin saamme selville, että olemme keränneet alle 16-vuotiaan tai kyseessä olevalla lainkäyttöalueella alaikäiseksi katsottavan lapsen henkilötietoja edellä mainittujen tilanteiden ulkopuolella, ryhdymme toimenpiteisiin poistaaksemme kyseiset tiedot mahdollisimman pian.\n\n6.	Kolmannen osapuolen sovellukset\n\nSmart TV:si sallii kolmannen osapuolen tarjoamat sovellukset, esim. Netflix, YouTube tai HbbTV (TV-yhtiöiden tarjoama punaisen napin painalluksella käytettävä palvelu). Voit ladata sovelluksia sovelluskaupasta tai ottaa käyttöön laitteeseesi esiasennettuja kolmannen osapuolen sovelluksia. Laitteeseesi esiasennetut kolmannen osapuolen sovellukset eivät kerää henkilötietojasi ilman ennakkohyväksyntääsi. Esim. Netflix on jo esiasennettu laitteeseen, mutta se kerää tietoja vain, kun kirjaudut Netflix-tilillesi. HbbTV kerää tietoja vain, kun hyväksyt tietojen keräämisen painamalla kaukosäätimesi määrättyä painiketta.\n\nJos otat kolmannen osapuolen sovelluksen käyttöön, sovelluksen tarjoaja voi käsitellä sinua koskevia henkilötietoja. Emme vastaa kyseisestä käsittelystä. Lue lisätietoa kyseisestä käsittelystä ja oikeuksistasi kolmannen osapuolen sovelluksen tietosuojaselosteesta.\n\n7.	Vastaanottajaryhmät\n\nJaamme Palvelujen käytön aikana kerättyjä henkilötietojasi vain kolmannen osapuolen sisältökumppaneille, jos pyydät kyseisten sisältökumppanien tarjoamaa tiettyä sisältöä, tai palvelukumppaneille, jotka toimivat tietojen käsittelijöinä ja avustavat meitä Palvelujen tarjoamisessa.\n\nJaamme henkilötietojasi muille kolmansille osapuolille vain, jos meillä on siihen velvollisuus lainsäädännöllisten (esim. tuomioistuinten ja syyttäjäviranomaisten esittämien) vaatimusten nojalla, jos olet antanut suostumuksesi kyseiseen tietojen jakamiseen tai jos tietojen jakaminen on muutoin lainmukaista sovellettavan lain nojalla.\n\n8.	Maat, joissa tietojasi käsitellään\n\nMe ja/tai jotkin edellä luetelluista henkilötietojesi vastaanottajista voimme sijaita Euroopan talousalueen ulkopuolella (esim. Kiinassa tai Yhdysvalloissa). Näin ollen henkilötietojasi voidaan käsitellä sellaisissa maissa, joiden tietosuojalait eivät välttämättä tarjoa vastaavaa suojaa kuin oman lainkäyttöalueesi lait ja joiden ei katsota tarjoavan riittävää henkilötietojen tietoturvatasoa yleisen tietosuoja-asetuksen mukaisesti. Eurooppalaisen tietosuojalain näkökulmasta riittävän tietoturvatason tarjoavia maita ovat Andorra, Argentiina, Kanada, Sveitsi, Färsaaret, Guernsey, Israel, Mansaari, Jersey, Uusi-Seelanti ja Uruguay. Yhdysvalloissa olevat vastaanottajat voivat olla osittain sertifioituja EU:n ja Yhdysvaltojen välisen Privacy Shield -järjestelyn mukaisesti, ja siksi niiden voidaan katsoa tarjoavan riittävän tietoturvatason eurooppalaisen tietosuojalain näkökulmasta. \n\nTarvittaessa otamme käyttöön asianmukaiset turvatoimet siirtäessämme tietoa Euroopan unionin ulkopuolisille vastaanottajille sellaisiin maihin, jotka eivät tarjoa riittävää tietoturvatasoa. Kopion kyseisestä menettelystä voi pyytää ottamalla meihin yhteyttä jäljempänä kohdassa 12 annettavien ohjeiden mukaisesti.\n\n9.	Säilytysaika\n\nHenkilötietojasi säilytetään niin kauan kuin se on tarpeen, jotta voimme tarjota sinulle Palveluja. Säilytämme useimpia tietoja kuukauden ajan. Etädiagnostiikkaa ja jälkimyyntipalveluja varten voimme säilyttää tietojasi korkeintaan kymmenen vuotta. Kun emme enää tarvitse henkilötietojasi sopimuksellisten tai lainsäädännöllisten velvoitteiden täyttämiseen, poistamme tietosi järjestelmistämme ja rekistereistämme ja/tai anonymisoimme tiedot siten, että sinua ei voi enää tunnistaa niistä.\n\n10.	Oikeutesi\n\nSovellettavan tietosuojalainsäädännön mukaisesti sinulla voi olla oikeus pyytää pääsyä henkilötietoihisi, henkilötietojesi oikaisua, henkilötietojesi poistamista, henkilötietojesi käsittelyn rajoittamista tai tietojen siirtoa järjestelmästä toiseen sekä vastustaa henkilötietojesi käsittelyä. Huomaa, että sovellettava kansallinen tietosuojalaki voi rajoittaa kyseisiä oikeuksia. Katso lisätietoa näistä oikeuksista Oikeutesi-liitteestä.\n\nSinulla on myös oikeus tehdä valitus toimivaltaiselle tietosuojaviranomaiselle.\n\nJos haluat käyttää oikeuksiasi, ota meihin yhteyttä jäljempänä kohdassa 12 annettavien ohjeiden mukaisesti.\n\n11.	Tietosuojaselosteen muutokset\n\nParantaaksemme Palvelujamme meidän voi olla tarpeen tehdä muutoksia tähän Tietosuojaselosteeseen esimerkiksi, kun otamme käyttöön uusia teknologioita tai uusia palveluja. Pidätämme oikeuden muuttaa tai täydentää tätä Tietosuojaselostetta milloin tahansa.\n\n12.	Yhteystiedot ja edustajamme Euroopan unionin alueella\n\nJos sinulla on kysyttävää Tietosuojaselosteesta tai haluat valittaa henkilötietojesi käsittelystä, ota meihin yhteyttä käyttämällä seuraavia yhteystietoja:\n\nYhteydenottolomake: www.tcl.eu/en/contact-us\n\nEdustajamme Euroopan unionin alueella on: TCL Europe, 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, France. Voit ottaa yhteyttä TCL Europeen edellä mainitun yhteydenottolomakkeen kautta.\n\nVersio: 2.0\n\nLiite: Oikeutesi\n\na.	Oikeus saada pääsy tietoihin: Sinulla voi olla oikeus saada meiltä vahvistus siitä, käsitelläänkö sinua koskevia henkilötietoja, ja saada pääsy henkilötietoihisi, jos näin on. Tietoihin kuuluvat muun muassa käsittelyn tarkoitukset, kyseessä olevien henkilötietojen ryhmät sekä vastaanottajat tai vastaanottajaryhmät, joille henkilötietoja on luovutettu tai tullaan luovuttamaan. Tämä ei kuitenkaan ole absoluuttinen oikeus, ja muiden henkilöiden edut voivat rajoittaa oikeuttasi saada pääsy tietoihin.\n\nSinulla voi olla oikeus saada kopio käsittelyssä olevista henkilötiedoista. Saatamme periä pyytämistäsi lisäkopioista kohtuullisen maksun hallintokustannusten perusteella. \n\nb.	Oikeus tietojen oikaisemiseen: Sinulla voi olla oikeus vaatia, että oikaisemme sinua koskevat epätarkat ja virheelliset henkilötiedot. Käsittelytarkoitusten mukaan sinulla voi olla oikeus täydentää puutteellisia henkilötietoja muun muassa toimittamalla lisäselvitys.\n\nc.	Oikeus tietojen poistamiseen (”oikeus tulla unohdetuksi”): Tietyissä olosuhteissa sinulla voi olla oikeus vaatia, että poistamme sinua koskevat henkilötiedot, ja meillä voi olla velvollisuus poistaa kyseiset henkilötiedot. \n\nd.	Oikeus rajoittaa käsittelyä: Tietyissä olosuhteissa sinulla voi olla oikeus vaatia sinua koskevien henkilötietojen käsittelyn rajoittamista. Tällöin kyseiset tiedot merkitään, ja voimme käsitellä niitä vain tietyissä tarkoituksissa.\n\ne.	Oikeus siirtää tiedot järjestelmästä toiseen: Tietyissä olosuhteissa sinulla voi olla oikeus saada sinua koskevat meille toimittamasi henkilötiedot jäsennellyssä, yleisesti käytetyssä ja koneellisesti luettavassa muodossa, ja sinulla voi olla oikeus siirtää kyseiset tiedot toiselle taholle meidän estämättä.\n\nf.	Oikeus vastustaa henkilötietojen käsittelyä:\n\nTietyissä olosuhteissa sinulla voi olla oikeus milloin tahansa vastustaa tekemäämme henkilötietojesi käsittelyä erityisen tilanteesi perusteella tai mikäli henkilötietoja käytetään suoramarkkinointitarkoituksiin. Tällöin meitä voidaan vaatia lopettamaan henkilötietojesi käsittely.\n\nJos henkilötietojasi käsitellään suoramarkkinointia varten, sinulla on oikeus milloin tahansa vastustaa sinua koskevien henkilötietojen käsittelyä tällaista markkinointia varten. Tähän lasketaan myös profilointi, jos se liittyy tällaiseen suoramarkkinointiin. Tällöin emme enää käsittele henkilötietojasi kyseisiin tarkoituksiin."];
var cookieNotice = ["\n\nKunnioitamme yksityisyyttäsi käyttäessäsi valmistamiamme Smart TV:itä ja tarjoamiamme Palveluja. Evästeitä käytetään monilla verkkosivustoilla ja muissa Internet-palveluissa, ja Smart TV:si hyväksyy, tallentaa ja lähettää evästeitä varmistaakseen, että kyseiset verkkosivustot ja palvelut toimivat asianmukaisesti. \n\nEmme käytä evästeitä tarjotessamme sinulle Palveluja. Kolmannet osapuolet (esim. kolmannen osapuolen sovellusten tarjoajat) voivat kuitenkin käyttää evästeitä, kun käytät Smart TV:tä niiden tarjoamien palvelujen käyttämiseen. Tässä evästeselosteessa voidaan antaa vain rajoitetusti tietoa kolmannen osapuolen mahdollisesti asettamista evästeistä. Lisätietoa kolmansien osapuolten käyttämistä todellisista evästeistä ja niiden toiminnasta on kyseisten kolmansien osapuolten evästeselosteissa. Tässä evästeselosteessa annamme kuitenkin yleiskuvauksen siitä, mitä evästeitä Smart TV:seesi voidaan asettaa ja miten voit hallita niitä.\n\n1.	Mikä on eväste?\n\nEvästeet ovat pieniä tekstitiedostoja, joita voidaan tallentaa Smart TV:seesi. Kun käytät verkkosivustoa tai TV-kanavan punaisen napin painalluksella käytettävää palvelua, verkkosivusto tai palvelu voi tallentaa Smart TV:seesi evästeen. Seuraavalla käyttökerralla Smart TV:seesi tallennettu eväste lähettää tietoa evästeen asettaneelle osapuolelle. Evästeet ovat erittäin yleisiä, ja niitä käytetään monilla verkkosivustoilla ja monissa palveluissa. Jokainen eväste sisältää tyypillisesti sen verkkotunnuksen nimen, josta eväste on peräisin, evästeen eliniän ja numeron (yleensä yksilöllinen numero). Katso tarkempi selitys evästeistä ja niiden toiminnasta osoitteesta www.allaboutcookies.org.\n\nEvästeet voidaan luokitella toiminnallisiin ja ei-toiminnallisiin evästeisiin. Toiminnalliset evästeet ovat evästeitä, jotka ovat täysin välttämättömiä, jotta voimme tarjota sinulle palveluja. Kaikki muut evästeet ovat ei-toiminnallisia evästeitä.\n\n2.	Kolmannen osapuolen verkkosivustot\n\nKun käytät kolmannen osapuolen verkkosivustoja tai palveluja Smart TV:si Palvelujen kautta, on mahdollista, että kyseiset verkkosivustot ja palvelut asettavat evästeitä Smart TV:seesi ja että kyseiset verkkosivustot seuraavat ja tallentavat toimintaasi kyseisillä verkkosivustoilla. Emme edellytä tai tue kyseistä toimintaa, emmekä käytä kyseisiä tietoja. Katso lisätietoa evästeiden käytöstä kyseisten verkkosivustojen ja palvelujen eväste- ja tietosuojaselosteista.\n\n3.	Evästeiden poistaminen\n\nVoit poistaa kaikki evästeet ja muut paikalliset tallennukset Smart TV:stä Smart TV:si käyttöliittymän avulla. Suosittelemme poistamaan kaikki evästeet ja paikallisesti tallennetut asetukset ennen kuin myyt Smart TV:si tai annat sen pois.\n\nVersio: 2.0"];
var privacyPolicy = ["Rastita alla oleva(t) ruutu/ruudut, jos haluat käyttää Smart TV -palveluja ja niihin liittyviä palveluja. Näiden palvelujen käyttö vaatii henkilötietojesi käsittelyä siten kuin on kuvattu Tietosuojakäytännössämme: http://www.tcl.eu/en/","Ota käyttöön Smart TV -palvelu, palveluasetusten tallennus ja Smart TV -palvelun automaattinen todennus. Jos poistat tämän valinnan, käytössäsi on vain tavallinen TV ja HDMI.","Ota käyttöön automaattiset ohjelmistopäivitykset. Rastittamalla tämän ruudun tuotteesi pysyy ajan tasalla uusimmista ohjelmistopäivityksistä ja parhaasta suorituskyvystä. ","(Ohjelmistopäivitykset ovat tärkeitä TV:n oikean toiminnan kannalta, sillä ne tarjoavat uusia ominaisuuksia, vakautta ja turvallisuutta. Tästä syystä suosittelemme valitsemaan tämän ruudun.)","Rastita alla oleva ruutu, jos hyväksyt henkilötietojesi käsittelyn myös seuraavassa lueteltuihin tarkoituksiin. Lisätietoa henkilötietojesi käsittelystä on Tietosuojakäytännössämme: http://www.tcl.eu/en/","Hyväksyn henkilötietojeni (esim. T-Launcher-ohjelmaan saapumis- ja poistumisajan) käsittelyn, jonka tarkoituksena on TCL:n tuotteiden parantaminen ja parempien Smart TV -sisältöpalvelujen tarjoaminen."];
var termsFirTitle = ["Käyttöehdot","Tietosuojailmoitus","Evästeilmoitus"];
var termsSecTitle = ["Lue ehdot ja hyväksy ne.","Lue tietosuojailmoitus ja hyväksy se.","Lue evästeilmoitus ja hyväksy se."];
var tickall = "Merkitse kaikki";
var tickremindWords = "Merkitse valintaruudut tai et voi käyttää Smart TV -palveluja.";