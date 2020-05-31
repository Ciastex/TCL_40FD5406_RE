
var all_country 	= ["Australien","Østrig","Belgien","Bulgarien","Kroatien","Tjekkiet","Danmark","Finland","Frankrig","Tyskland",
						"Grækenland","Ungarn","Italien","Luxembourg","Holland","Norge","Polen","Portugal","Rumænien","Rusland",
						"Serbien","Slovenien","Spanien","Sverige","Schweiz","Det Forenede Kongerige","New Zealand"," "/*Arab*/,"Estland"," "/*Hebrew*/,
						"Letland","Slovakiet","Tyrkiet","Irland","Japan","Filippinerne","Thailand","Maldives","Uruguay","Peru",
    					"Argentina","Chile","Venezuela","Ecuador","Costa Rica","Paraguay","Bolivia","Belize","Nicaragua","Guatemala",
						"Kina","Taiwan","Brazil","Canada","Mexico","United States","South Korea","Romania","Vietnam"/*新添加的，底层结构体中没有*/,"Ukraine"/*新添加的，底层结构体中没有*/,
    					"Iran","Iraq"," ","Kazakhstan","Uzbekistan"," ","Kyrgyzstan","Algeria","Egypt","Tunisia",
    					"Tanzania","Kenya","Pakistan","Indonesia","Kuwait","Saudi Arabia","Qatar","Israel","Lebanon","bahrain",
						"Angola","Congo","India","Turkmenistan","Colombia","Mongolia","Bangladesh","Nepal","Sri Lanka","North Korea",
						"Moldova","Polynesia","EI Salvador"," ","Fiji","Liberia","Jordan","Myanmar","Ghana","Georgia",
    					"Armenia","Oman","yemen","Syria","Palestine","Afghanistan","Morocco","benin","IvoryCoast","Nigeria",
    					"Sudan","Ethiopia","Zambia"," ","South Africa","mozambique","Libya","Albanien","Belarus","Iceland",
						"Litauen","Mauritius","Dubai","UAE","Tajikistan","Bengal","Bosnien-Hercegovina","Cypern","Kosovo","Makedonien",
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
				
var all_language 	= ["Tjekkisk","*","Dansk","*","*","Tysk","Engelsk","Fransk","Græsk","Spansk",
						"Kroatisk","*","Italiensk","Ungarsk","Hollandsk","Norsk","Polsk","Portugisisk","Russisk","Rumænsk",
						"Slovensk","Serbisk","Finsk","Svensk","Bulgarsk","Slovakisk","Chinese","*","Gælisk","*",
						"Walisisk","Arabisk","Irisch","Latvian","*","Tyrkisk","Estonian","Hollandsk"/*Netherlands*/,"Koreansk","*",
						"Hindi","*","*","Mandarin","*","Maori","Original lyd"/*Qaa*/,"Ikke defineret"/*Undetermined*/,"*","Ukendt",
						"Ikke defineret","*","*","*","*","*","*","*","*","*",
						"*","*","*","Albansk","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baskisk","*","*",
						"*","*","*","*","*","*","*","Bosnisk","*","*",
						"*","*","*","*","Witrussisch","*","*","Katalansk","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galicisk","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Islandsk","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","japansk","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Lithuanian",
						"*","*","*","*","*","*","*","Makedonsk","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romantik","*","*","*","*",
						"*","*","*","Samisk","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Tekst-tv",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukrainian","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Fra","Til"];
var okCancel		= ["Ok","Annuller"];
var yesNo			= ["JA","NEJ"];
var level			= ["Fra","Lav","Høj","Mellem"];
var manualAuto		= ["Manuel","Auto"];
var homeShop		= ["Hjem","Butik"];
var picPreset		= ["Standard","Dynamic","Naturlig","Biograf","Bruger"];
var picColorTemp	= ["Kold","Normal","Varm","Bruger"];
var pic3dNavig		= ["Manuel","Auto","Semi-Auto"];
var _3dOptions		= ["3D tilstand","3D-til-2D","V-H knap","Dybde af felt"];
var pic3DMode       = ["Fra","2D-til-3D","Side-om-side","Top og bund","Linje indfletning"];
var picEcoOptions	= ["Energispare","Lyssensor","Lokal nedblænding","Variabel dæmpning"];
var picGeoOptions	= ["Geometri","V. position","L. position","Klokke","Fase"];//Geometry 无翻译
var picAdWhiteBal	= ["R forstærkning","G forstærkning","B forstærkning","R forskudt","G forskudt","B forskudt"];
var souOptions		= ["Forudindstillet lyd","Balance","Lydforsinkelse","SRS TSHD","Autom. lydst.kontr",
						"SPDIF-type","SPDIF-forsinkelse","Tv placering","Lydsprog","Lydkanal",
						"Audiobeskrivelse","Bass-boost","Dolby Digital Plus"];
var souSpdifType	= ["Auto"/*Dolby*/,"PCM","Fra"];
var colorSpace      = ["Auto","Lokal","Bruger"];
var souPresetPara	= ["100Hz","500Hz","1.5KHz","5KHz","10KHz"];
var chOptions		= ["Kanalscanning","Kanalliste","EPG","Organisering af kanaler","Kanaloversigt",
						"tidsskift","Undertekst","Tekst-tv","Kanallistetype"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Signalstyrke","Signalkvalitet","Frekvens (KHz)","Service ID","Netværk-id","Netværksnavn"];
var chScanOptions	= ["Land / region","Tuner tilstand","Kanalscanning","Updater scanning","Analog man. scann.",
						["Kabel manuel søgning","Antenne manuel søgning","Manuel tuning af satellit"],"Satellitantennens opsætning","Vælg yndlingsnetværk","Ryd kanalliste","LCN"];
var favNetDes		= "Du bedes vælge dit foretrukne netværk";
var tuner			= ["Kabel","Antenne","Satellit"];//Satelite 无翻译
var passError		= "Adgangskode forkert.\nIndtast igen!";
var chType			= ["Analoge kanaler: ","Digitale kanaler: "];
var chScanStatus	= ["Status: Søger","Status: Scanning fuldført","Status: Scanning annulleret","Status: Scanningsfejl"];
var chScanPara		= ["Frekvens (KHz)","Modulering","Symbolhastighed (Ksym/s)","Netværk-id","System",
						"Finjuster","Signalstyrke","Signalkvalitet","Scanningstilstand","Kanal-id"];
var chScanParaMHZ      = ["Frekvens (MHz)"];
var chAtvManSys		= ["VEST EUR","ØST EUR","Storbritannien","Frankrig"];
var modulation		= ["16 QAM","32 QAM","64 QAM","128 QAM","256 QAM","Auto"];
var chCleanDes		= "Vil du fjerne kanalerne fra oversigten?";
var chDeletDes		= "Ønsker du at slette kanalen?";
var chOperator		= ["Ziggo","UPC","Andre"];
var chScanType		= ["Digital & Analog","Digital","Analogue"];
var chScanMode		= ["Fuld","Avanceret","Hurtig"];
var bookingModes	= ["Optage","Påmindelse"];
var dayName			= ["Søn","man","Tir","Ons","Tor","Fre","Lør"];
var monthName		= ["Jan", "Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"];
var filter			= ["Filtre","Type","Undertype"];
var chEpgFirstGenre	= ["Biograf","Nyheder","Show","Sport","Børn","Musik","Kunst","Socialt","Uddannelse","Fritid","SÆRLIGT"];
var chEpgSecondGenre= [["Drama","Krimi","Oplevelse","Science-fiction","Komedie","Sæbe","Romantik","Alvor","Erotisk film"," "," "," "],
						["Current Affairs","Vejrudsigt","Nyhedsmagasin","Dokumentar","Diskussion"," "," "," "," "," "," "," "],
						["Show","Quiz","Variete-show","Talkshow"," "," "," "," "," "," "," "," "],
						["Sport","Særlige begivenheder","Sportsmagasiner","Fodbold","Tennis",
							"Teamsport","Atletik","Motorsport","Vandsport","Vintersport",
							"Ridesport","Kampsport"],
						["Børn","Børnehaveprogrammer","Underholdning for 6 til 14","Underholdning for 10 til 16","Oplysende","Tegnefilm"," "," "," "," "," "," "," "],
						["Musik","Rock","Alvor","Folkemusik","Jazz","Musical","Ballet"," "," "," "," "," "],
						["Kunst","Scenekunst","Kunst","Religion","Populærkultur",
							"Litteratur","Film","Eksperimental","Broadcasting","Nye medier",
							"Kunstmagasiner","Mode"],
						["Socialt","Magasiner","Økonomi","Særlige personligheder"," "," "," "," "," "," "," "," "],
						["Uddannelse","Natur","Teknologi","Medicin","Fremmede lande","Samfundsvidenskab","Videregående uddannelse","Sprog"," "," "," "," "],
						["Hobby og fritid","Turisme","Håndværk","Færdsel","Form og sundhed","Madlavning","Reklame","Havebrug"," "," "," "," "],
						["Originalsprog","Sort og hvidt","Ikke offentliggjort","Direkte udsendelse"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Spring kanal over","Sorter kanal","Rediger kanal","Slet kanal","kanal swap","kanal insert"];
var chEditPara 		= ["Netværksnavn","Kanalnummer","Kanalnavn","Frekvens","Farvesystem","Lydsystem"];
var chSatTitles		= ["Satellittype","Satellitantennens opsætning","Vælg satellit"];
var chSatEidtOptions= ["Satellitnavn","Position","LNB Magt","LNB frekvens (MHz)","Ulige indgang",
						"Tone 22KHz","tone burst","Frekvens (KHz)","Symbolhastighed (Ksym/s)","Polarisering",
						"Signalstyrke","Signalkvalitet","Satellitstatus"];
var chSatAutoPromt	= [["Alt","Netværk"],
						["Alt","Fri"]];
var chSatAutoScanOptions=["Vælg satellit","Scanningstilstand","Kanaler"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Universal",];
var chSatDiSEqCInput= ["Deaktivere","A","B","C","D"];
var chSatTone22KHz	= ["Auto","Til","Fra"];
var chSatToneBurst	= ["Deaktivere","tone burst A","tone burst B"];
var chSatPolarization= ["Horisontal","Vertikal"];
var chSatSetupOptions=["Antennetype","Tuner","Båndfrekvens"];
var chSatAntennaType= ["EnkeltKabel","Universal"];
var chSatUserBands	= ["Brugerbånd 1","Brugerbånd 2","Brugerbånd 3","Brugerbånd 4","Brugerbånd 5","Brugerbånd 6","Brugerbånd 7","Brugerbånd 8"];
var chSatOthers		= ["Transponder"];
var chSatSetupOthers= ["Brugerdefineret"];
var pleaseSelectSat = "Du bedes først vælge satellitter!";
var subOptions		= ["Undertekst","Digitalt undertekstsprog","Digitalt undertekstsprog 2nd","Underteksttype"];
var ttxOptionsCon      = ["Dekoder sidesprog","Digitalt tekst-tv sprog"];
var subType			= ["Normal","Hørehæmmet"];
var netIntf     	= ["Ethernet","Trådløs"];
var netConnDes		= ["TVet tester netværksforbindelsen.\nVent venligst",
						"Netværkstilslutningstest gennemført ok!",
						"Netværkstilslutningstest ej gennemført."];
var netSsidError	= "Den gyldige SSID-længde er 1~32 tegn. Du bedes kontrollere SSIDen.";
var netOthers		= ["PIN-kode "];
var netWlessAutoDes	= ["Sørg for, at følgende PIN-kode er indsat i dit adgangspunkt, inden du klikker på OK.",
						"Tryk på knappen på adgangspunktet indenfor 120 sekunder, inden du klikker på OK."];
var netConnRemind	= ["Adgangskode forkert!",
						"Opretter forbindelse. Vent venligst!",
						"Tilslutning udført og IP opnået!",
						"Link fejl",
						"TV søger AP\nVent venligst",
						"Der er ingen trådløs enhed tilsluttet til TV!"];
var netWireIpOptions= ["IP-indstilling","Adressetype","IP-adresse","Subnet mask","Standard gateway","Primær DNS","Sekundær DNS"];
var netWireConnRemind= ["Indtast en værdi mellem 0 og 255.",
						"Tilsluttet korrekt!",
						"Du bedes indtaste en gyldig adresse",
						"Tilsluttet korrekt!",
						"Tilslutning mislykkedes!",
						"Opretter forbindelse. Vent venligst!",
						"Du bedes indtaste en værdi mellem 1 og 223."];
var netFlixOptions	= ["Deaktiver","ESN","Netflix-version"];
var netFlixDes	 	= ["Er du sikker på, at du ønsker at deaktivere?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Softwareopdatering";
var netUpdateDialogTitle = "Opdaterer software";
var netBGDownloadTitle 	= "Downloader";
var netUpdateLoadingPrompt= ["Søger efter opgradering, vent venligst!",
							"Softwaren bliver downloadet... Vent venligst!",
							"Sluk IKKE TV'et, mens softwaren opdateres!",
                            "Den nødvendige software opdatering bliver automatisk downloadet i baggrunden!"];
var netUpdatePrompt= ["Tillykke, du har den nyeste softwareversion!",
						"Der er fundet en ny softwareversion XXXX. Vil du downloade nu? Det kan tage nogle minutter afhængigt af din netværksstatus.",
						"Kunne ikke logge ind!",
						"Det lykkedes ikke at modtage data, du bedes prøve igen senere!",
						"Parse opdatering XML mislykkedes!",
						"Link fejl",
						"Softwaren blev hentet. Vil du starte visningen?",
						"Data tabt!Download mislykkedes!",
						"Kunne ikke tjekke pakken, prøv venligst igen!",
						"Netværk er unormalt.Kontroller venligst og tilslut igen…",
						"Opdatering mislykkedes.Genstart TV!",
						"Opdateringsfilen blev uventet slettet. Du skal gennemføre opdatering via netværk igen.",
						"Softwaren er blevet downloaded i baggrunden. Vil du gennemføre opdateringen?"];
var netUpdateButtonText = ["Download", "Opdatér", "Senere", "Aldrig", "Ok","Fortsæt"];
var autoDetectPrompt = ["Der er fundet en ny softwareversion XXXX. Vil du downloade nu? Det kan tage nogle minutter afhængigt af din netværksstatus.",
						"Fandt ny softwareversion XXXX. Vil du opdatere nu?",
						"Opdatering via netværk blev afbrudt sidst. Du skal gennemføre opdateringen igen.",
                        "Downloading af ny softwareversion XXXX er ikke færdig. Ønsker du at fortsætte nu?",
                        "Software downloadet, vil du opdatere nu?"];
var sysOptions		= ["E-Manual","OSD-sprog","Tidsindstilling","Spærre","Inputindstillinger",
						"Softwareopdatering","Placering","HbbTV-modus","Cookies","Fælles interface",
						"Avancerede indstillinger","Nulstil butik","LED-indikator","Netværksstandby","Automatisk butikstilstand","Area","Demotilstand"];
var sysResetDes		= "Er du sikker?";
var sysMenuLangOptions=["Sprog","Foretrukket lydsprog","Foretrukket 2. lydsprog"];
var sysTimerOptions	= ["Tidszone","Områdenavn","Klokke","Dvale-timer","Auto standby", "Country region"];

var sysTimeZone		= ["Som sender","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Fra","10 min.","20 min.","30 min.","40 min.","50 min.","60 min.","90 min.","120 min."];
var sysStandby		= ["Fra","4 timer","6 timer","8 timer"];
var sysRegionName	= ["Madrid","Kanariske Øer"];
var sysClockOptions	= ["Autom. synkron.","Dato","Tidspunkt","Aktiver Timer","Tidsindstilling",
						"Tænd for kanal","Deaktiver Timer","Tidsindstilling"];
var sysTimer		= ["Fra","Dagligt","En gang"];

var sysInputSet		= ["Ingen betegnelse","DVD","Blu-ray","HDD","DVDR",
						"HD-opt.","Spil","Videobåndoptager","Pc","Digital STB",
						"HD dig. STB","Kamera","Optager","Andet"];
var sysAvVideoInput	= ["Auto","RGB_CVBS","RGB","CVBS","S-video"];
var sysUpdate		= ["Via USB","Via Netværk","Efter kanal"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Der blev ikke fundet nogen ny software!",
						"Fandt ny softwareversion XXXX. Vil du opdatere nu?",
						"Du bedes indsætte USB-stikket.",
						"Kunne ikke tjekke pakken, prøv venligst igen!",
						"Frakobl IKKE USB-donglen og sluk IKKE for tv'et under opdatering af firmwaren!!",
						"Softwaren er blevet opdateret korrekt.\nTV vil derefter genstarte automatisk!",
						"Der er fundet en ny softwareversion XXXX. Vil du downloade nu? Det kan tage nogle minutter afhængigt af din netværksstatus.",
						"Downloader",
						"Softwaren blev hentet. Vil du starte visningen?",
						"Opdat. Mislyk.!",
						"Søger efter opgraderingsfiler",
						"Softwareopdateringen er gennemført.\nGenstart dit TV nu."];
var sysProductInfo	= ["Aktuel version","Produktnavn","Producentens navn","Chassisets navn"];
var sysCiDes		= ["CI kort ikke fundet."];
var sysAdOptions	= ["DivX(R) registrering","DivX(R) framelding","T-Link","Authorization Error","Afregistreringsbekræftelse",
						"Lejebekræftelse","Lejeperiode udløbet"];
var sysRegistDes	= ["Du skal registrere din enhed for at afspille DivX beskyttede videoer",
						"Registreringskode:",
						"Registrer på http://vod.divx.com"];
var sysDregistDes	= ["Frameldingskode:",
						"Frameld på http://vod.divx.com",
						"Fortsæt registrering?"];
var mediaAuthorization = ["Din enhed er ikke autoriseret til afspilning af denne DivX(R)-beskyttede video."];
var deregistrationConfrimation = ["Din enhed er allerede registreret.","Er du sikker på at du ønsker at framelde?"];
var rentalConfirmation = "Du har brugt XXXX af dine YYYY afspilninger for denne DivX(R) lejevideo. Fortsæt?";
var rentalExpired 	= "DivX®-lejen har brugt XXXX ud af YYYY fremvisninger. DivX-lejen er udløbet.";

var parentalRatingNA		= ["***","***","***","***","***","***","***","***"];
var parentalRatingOptionUS		= ["***","***","***"];
var sysTVRatingUS=["***","***","***","***","***"];
var sysMPAAUS=["***","***","***","***","***","***"];
var parentalRatingOptionCanada		= ["***","***","***"];
var sysCanadaEng=["***","***","***","***","***","***"];
var sysCanadaFre=["***","***","***","***","***",""];
var sysResetRRT=["***"];

var sysLockOptions	= ["Kanalblok","Tidsinterval lås","Forældre vurdering","Input lås","Front panel lås","Installations lås",
						"Skift adgangskode","Max volumen ","Slet alt"];
var sysTimeIntervals= ["Låse-type","Starttidspunkt","Sluttidspunkt"];
var sysRatingOptions= ["Ingen","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","X-normeret (Spanien)"];
var changePass		= ["Skift adgangskode","Ny adgangskode","Bekræft adgangskode"];
var changePassDes	= ["Adgangskode forkert.\nIndtast igen!",
						"Adgangskode matcher ikke\nIndtast igen!",
						"Koden er ændret!",
						"Denne kode er for simpel til at blive indstillet som adgangskode.\nIndtast venligst igen!"];
var sysPowerOnChOptions= "Vælg tilstand";
var sysPowerOnCh	= ["Sidste status","Brugervalg"];
var netWlessSecu    = ["Åbn","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Ingen","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Ingen støtte"];
var netWlessSecu3	= ["Ingen","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Ingen støtte"];
var netOptions		= ["Internetforbindelse","Interface","Trådløse indstillinger","IP-indstillinger","Information",
						"Forbindelsestest","DLNA","TV remote","Netflix-indstillinger","Wifi-visning",
						"Adressetype","IP-adresse","Subnet mask","Standard gateway","Primær DNS",
						"Sekundær DNS","SSID","BSSID","Indtast venligst SSID:","Bruger-id"];
var chEditDes		= ["Kanalnummeret anvendes allerede!","Tryk på den røde tast for at slette det aktuelle tegn!","Ugyldige kanalnumre"];
var chEpgNoProgram	= "Ingen programoplysninger nu, du bedes først søge kanaler!";
var chEpgWords		= ["Programguide","Ingen programdata.","Kanal låst!","Ingen programoplysninger","Ingen programtitel."];
var chEpgBooking	= ["Planlæg info", "Kanalnummer","Startdato","Starttidspunkt","Sluttidspunkt",
						"Gentag type","Register type","Tilføj","Udskift","Skift",
						"Tilføj/Redigér"];
var epgHotKey		= ["Foregående dag","Næste dag","Filtre","Programliste","Tilføj program"];
var chEpgBookRemind	= ["Forkert starttidspunkt","Forkert sluttidspunkt","Tidsplanen findes allerede","Er blevet gemt.","Slettet korrekt."];
var chSchePara		= ["Programliste","Starttidspunkt","Startdato","Programtitel","Kanalnavn",
						"Varighed","Gentag","Tidsplan","Rediger","Slet"];
var dateTimer		= ["En gang","Dagligt","Hver uge"];
var scheduleDeleteReminds="Ønsker du at slette dette program?";
var scheduleNoLists	= "Der er ingen programliste. Tryk på den \"Røde\" tast for at tilføje et.";
var chListWords		= ["Kanalliste","Vælg liste","Tuner tilstand","Føj til favoritter","Fjern",
						"Vælg kanaloversigt","Vælg tuner-funktion","Skift"];
var chListType		= ["Alt","Digital","Analogue","Radio","Fri","Favoritter"];
var chAutoScanOptions=["Vælg udbyder","Kanaltype","Kanalscanning"];
var souSoundType	= ["Ugyldig","Mono","Mono","Stereo","Stereo",
						"SAP","SAP","Dual1","Dual2","Dual2",
						"Nicam mono","Nicam stereo","Nicam dual1","Nicam dual2","Nicam dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Musik","Biograf","Klar stemme","Standard","Bruger"];
var picAdRgbMode	= ["Fra","Kun rød","Kun grøn","Kun blå"];
var picAdOptions	= ["DNR","MPEG-støjreduktion","RGB mode","Dynamic Contrast","LED bevægelsesklarhed",
						"Hudkulør","Filmtilstand","Spiltilstand","Farvetemperatur","Hvidbalance",
						"Hold","Black Stretch","Overscanning","Gamma","HDMI-tilst.","10P hvidbalance","Farveforlænger",
						"Reduceret sløring","Reduceret vibration","Farveplads","Bevægelsesklarhed"];
var pic10Pwhite     = ["Interval","Rød","Grøn","Blå","Nulstil","Farve","Gul","Cyan","Magenta"];
var picMotionClarity = ["Bevægelsestilstand","Bevægelsesinterpolation","LED bevægelsesklarhed","Reduceret sløring","Reduceret vibration","Nulstil"];
var picMotionMode   = ["Film","Problemfri","Ryd","Sport","Kunde"];
var picResetDes		= "Alle personlige indstillinger bliver nulstillet. Er du sikker på du ønsker at foretage den valgte handling?";
var pic10PReset     = "Er du sikker på ønsker at nulstille 10P hvidbalance?";
var picMotionReset  = "Ønsker du at nulstille bevægelsesklarhed?";
var picColorSpaceReset    = "Er du sikker på du ønsker at nulstille farveplads?";
var picOptions		= ["Billedtilstand",
						"Baggrundslys","Lysstyrke","Kontrast","Mæthed","Farvetone","Skarphed","Farvetemperatur","Skærmtilstand","Automatisk",
						"Sportsforbedring","3D  ","3D-navigation","ECO Indstillinger","Geometri",
						"Avancerede indstillinger","Nulstil billede","Mikro-dæmpning"];
var picSize			= ["16:09", "4:3-format", "14:9-format", "Cinerama",
						"16:9 Zoom", "16:9 Zoom up","14:9 Zoom","Stretch Zoom","Wide Zoom",
						"Zoom 2","Stretch Zoom","Beskyt den lokale match","Bod po bodu","Original","Panorama"];
var others			= ["Lydstyrke","Udsendelse","Adgangskode","Status","Gem","Udskift","Start","Luk","Søg","Slet",
						"Ingen","Automatisk","Scan","Sikkerhed","Tilslut","Genopfrisk","Retry","Stop","Indstillinger","Kanaler",
						"Rediger","Indsæt","Signal!","Afslut","Stereo","Audio","Kilde","Ingen lyd","Tips","Nulstil",
						"Kunde","Konfiguration","Gem","Bruger","Luk tastatur","Sikkerhedstilstand","Hver dag","PVR-liste"];
var direction		= ["Venstre","Højre","Op","Ned"];
var audioType 		= ["MPEG","DOLBY AUDIO"/*"AC3"*/,"MPEG4","AAC", "DOLBY AUDIO"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Ukendt"];
var soundChannels   = ["Ukendt","Mono","Sub","Dual mono","Stereo","Stereo Sub","Stereo Dolby Surround","Surround 2KAN.","Surround","3.0 kanal","4.0 kanal","5.0 kanal","Mono Lfe","Dual Mono Lfe","Stereo Lfe","Surround 2Ch Lfe","Surround Lfe","3,1 kanal","4,1 kanal","5.1KAN.","7.1KAN.","Fælles stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Venstre","Højre","Andre"];
var prompts			= ["Juster billedindstillingen, til den der passer bedst til dit visningsmiljø.",
						"Juster lysstyrkeniveauerne. Jo tætte de er på 100, jo lysere er de.",
						"Juster kontrastniveauerne. Jo tættere de er på 100, jo større bliver billedets mørke-lyse forskelle.",
						"Juster mætningsniveauerne. Jo tættere de er på 100, jo stærkere bliver farven.",
						"Juster skarphedsniveuerne. Jo tættere de er på 100, jo tydeligere bliver detaljerne.",
						"Juster baggrundslysets niveauer. Jo tættere de er på 100, jo lysere bliver skærmen.",
						"Juster farveniveauerne. Denne indstilling ændrer farvetonerne.",
						"Vælg det format der passer bedst til det program, der vises.",
						"Angiv strømspareindstillinger.",
						"Juster skærmens geometriske indstillinger, når du tilslutter en PC-enhed.",
						"Angiv flere avancerede billedindstillinger.",
						"Sæt alle billedindstillinger tilbage til standardindstillingerne.",
						"Vælg dit foretrukne lydmodus.",
						"Justér lydbalancen mellem venstre og højre kanal.",
						"Sound Retrieval System TruSurround HD giver en fyldig lydkvalitet og klarhed ved lave og høje frekvenser.",
						"Digital Interface Format forbinder tv'ets lydudgang til hjemmebiograf lydudstyr.",
						"Vælg dit foretrukne sprog.",
						"Giver svagtseende mulighed for at nyde tv-programmer.",
						"Test dit tv-billede, lyd og signal.",
						"Vælg den kanallistetype, der passer til tv-signalet.",
						"Vælg sprog for programmets undertekster, der vises nederst på skærmen.",
						"Se den aktuelle kanals tekst og billeder.",
						"Digital Living Network Alliance. Nyd musik, fotos og videoer via dit hjemmenetværk fra andre enheder, såsom en pc.",
						"Vis din smartphone's indhol på tv'et, og brug din smartphone som en fjernbetjening til dit tv.",
						"Vis indhold fra en Miracast-kompatibel Android-enhed på din tv-skærm.",
						"Sæt en lås på dit tv.",
						"Giv din enhed et navn.",
						"Definér omgivelserne.",
						"Sæt alle systemindstillinger tilbage til standardindstillingerne.",
    					"Switch off sports mode for more options.",
    					"Øg omgivelsernes kontrast",
    					"En tilstand specielt til sport ",
						"Nyd flere CEC-funktioner."];
var initialTitle	= ["Velkommen","Indledende installation"];
var initialPrompt	= ["Foretag din første opsætning nu, og en verden af spændene oplevelser venter på dig!",
						"Vælg dit sprog:",
						"Vælg land/region:",
						"Vælg venligst Deres sted:",
						"Angiv tilslutningstypen for dit netværk:",
						"Angiv kabeltilslutningsmodus for dit netværk:",
						"Kunne ikke oprette forbindelse til xxxxxxxxx! Du bedes tilslutte enheden i henhold til følgende diagram elller vælg Left (venstre) for at nulstille.",
						"Forbundet til xxxxxxxxx! Du bedes vælge Right (højre) for at fortsætte.",
						"1)Dit tv har muligvis allerede en indbygget trådløs adapter\n 2) Eller, hvis en trådløs USB-adapter er tilvejebragt, skal du slutte den til dit tv.  Derefter skal du vælge det trådløse netværks tilslutningstilstand",
						"Scanner. Vent venligst...",
						"Der er ingen trådløs enhed tilsluttet til TV!",
						"Sørg for at den følgende PIN kode er installeret til AP før du klikker på knappen \"Næste\" herunder.",
						"Du bedes trykke på trykknappen på AP inden for 120 sekunder før du trykker på Right (højre)!",
						"WPS (Wi-Fi Protected Setup)",
						"PIN-kode(Personligt identifikationsnummer)",
						"PBC (Trykknap konfiguration)",
						"Der kan kun opnås adgang til følgende indhold med en netværksforbindelse. Ønsker du at gå videre til Netværksopsætning?",
						"Der er nye softwareopdateringer, som du kan downloade, og dette kan tage et stykke tid, afhængigt af dit netværkstatus.",
						"Opdatér dit tv's software for at få glæde af de nyeste funktioner og tjenester.",
						"Du vil gå glip af de seneste funktioner og services. Ønsker du at springe softwareopdateringen over?",
						"Tryk på den højre knap for at fortsætte.",
						"Du må ikke slukke under opdateringen, da dette kan forårsage at tv'et svigter.",
						"Hvis du ikke vil opdatere, skal du vælge NO (neJ).",
						"Opdaterer, vent venligst",
						"Du kan også opdatere softwaren i SYSTEM/SOFTWAREOPDATERING.",
						"Det valgte land anmoder om indstilling af adgangskode.\nIndstil venligst koden for dit fjernsyn og bekræft.",
						"This code is too simple.\nPlease use different digits.",
						"Tillykke! Den første opsætning er gennemført. Du kan ændre din konfiguration via hovedmenuen og de relaterede undermenuer.",
						"Vælg venligst sikkerhedstilstand:",
						"Du bedes vælge det trådløse netværks forbindelsestilstand:",
						"Netværk"];
var initNetCabAndDonRe = ["Intet netværkskabel er forbundet, du bedes tilslutte et netværkskabel!","Der findes ingen indbygget trådløs adapter, eller nogen USB-adapter."];
var initChPrompt = ["Installation af tv-kanal","Du bedes vælge antennens scan-type.","Udfører automatisk indstilling...","Følgende antennekanaler blev fundet:","Vælg scanningstypen Kabel.","Du bedes vælge en operatør fra den følgende liste.","Konfigurér scanningsoplysningerne","Følgende kanaler af typen Kabel findes:","Vælg en operatør på denne liste","Vælg satellitter til scanning, eller redigér det valgte","Angiv satellitparametre","Følgende kanaler blev fundet, og kanalscanningen kan også udføres igen i Kanal/Kanalscan"];
var initClockPrompt = ["Få netværkets tilvejebragte tid!",
						"Du bedes indstille dato og tid:"];
var initialOptions	= ["Miljø","Netværksopsætning","Softwareopdatering","Kanalopsætning","Klokke"];
var initialHotkeys	= ["Tilbage","Vælg","Næste","jeg er enig"];
var initLocations	= ["Hjem","Butik","Shop med demo"];
var initNets		= ["Kablet","Trådløs","Jeg har ikke nogen netværksforbindelse"];
var initWireManuals	= ["IP-adresse","Subnet mask","Standard gateway","Primær DNS","Sekundær DNS"];
var initSoftUpdates = ["Opdatér nu","Opdatér senere"];
var initChannelIns	= ["Fortsæt","Jeg ønsker ikke at installere kanalerne"];
var initChScanTypes	= ["Digital & Analog","Digital","Analogue","Jeg vil ikke udføre scanning"];
var initChDvbts		= ["Antenne ATV-kanaler:","Antenne DTV-kanaler:"];
var initChDvbcs		= ["Kabel ATV-kanaler:","Kabel DTV-kanaler:"];
var initChDvbss		= ["Satellitkanaler:"];
var initChDvbSOther	= ["Jeg vil ikke udføre satellitscanning"];
var initEndConnectedStatus= ["Afbrudt","WiFi tilsluttet","Tilsluttet med kabel"];
var initEndInstallations= "XXXX kanaler installeret";
var initEndUpdate	= ["Opdateret"];

var audioScenes 	= ["Skrivebord","Vægmonteret"];			
var screenSavers	= ["Ingen kanaler, tryk på tasten OK, og udfør scanning!",
						"Ikke noget signal!",
						"Kodet",
						"Kun data",
						"Lydprogram",
						"Ingen lyd og video",
						"Ikke tilgængelig",
						"Ingen tekst-TV",
						"Ingen programdata.",
						"Program låst!",
						"Program låst!\nTryk på OK, og indtast koden.",
						"Ingen programoplysninger",
						"Programmet er skadefuldt for mindreårige.\nTryk på OK og indtast din kode.",
						"Kanal låst!",
						"Kanal låst!\nTryk på OK, og indtast koden.",
						"Indgang låst!\nTryk på OK, og indtast koden.",
						"Ingen støtte!",
						"Denne tjeneste er ikke tilgængelig på nuværende tidspunkt",
						"Input låst!",
						"Ingen programtitel.",
						"Ingen funktion",
						"Ingen Undertekst"
						];
var channelNumberOverPromt = ["The number of search programs has exceeded,you can delete some programs and then retry!"];
var chBookingPromt	= ["Den aktuelle kanal har en planlagt optagelse, Tv'et vil starte optagelsen.",
						"Der findes en planlagt optagelse.\n Skift til XXXX for at optage",
						"Den aktuelle kanal har en påmindelse.",
						"En planlagt påmindelse findes.\n Skift til XXXX"];
var timeUnit		= ["Sek.","min"];
var ciPromt			= ["Netværkets data er blevet ændret. For at opdatere kan du udføre en opdateringsscanning. ",];
var othersPromt		= ["Vent venligst...",];
var menuOptions		= ["Billede","Lyd","Kanal","Smart TV","Netværk","System","Support"];
var optionOptions	= ["Billedtilstand","Forudindstillet lyd","Hold","T-Link","tidsskift","PVR","Programliste","Indstillinger","*"];
var optionTLinkPromt= [["Automatisk tænding","Auto standby","Guide menu"],
						["Tænd","Standby","Forstærkervolumen"]];
var powerPromt		= ["TV'et slukker snart! Tryk på en knap for at annullere."];
var ttxLanguage		= ["VEST EUR","ØST EUR","Russisk","Arabisk/hebræisk","Farsi","Arabisk","Witrussisch","Græsk","Tyrkisk"];
var ttxOptions		= ["Vis","Nav. i undersider","Sprog","Alarmside","Nyflamsk"];
var weekday         = ["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","lørdag"];
var lcnConfflict	= "Der er problemer med modtagelsen af dette program.";
var inShopMode		= "Dit TV er i fabrikstilstand. For hjemmetilstand, skal du vælge 'System' og ændre 'Location' (placering) i menuen.";
var nitRefresh		= "Netværksdata ændret. Vil du udføre en opdateringsscanning?";
var picHDMIMode     = ["Auto","Grafik","Video"];

var glassRemind    	= ["Du bedes linjeparre dine 3D-briller med dit tv\n(Hold POWER-tasten nede på dine 3D-briller).","Dine 3D-briller er forbundet til fjernsynet ",""];
var pvrRemind 		= ["Du må ikke trække USB-enheden ud eller afbryde strømmen"];
var pvrConName   	= ["PVR","Programoplysninger:",["Note: If you record the HD channel, please to select  the  disk(of speed >5.0MB/sec), and to select the disk (of speed >3.0MB/sec) when you want to record the SD channel.","Optaget video er gemt i \"PVR\" mappen."],"Stop","Optage","time","Minut","Varighed","Tips","Brug piletasterne til at indstille optagelsens varighed."];
var pvrDisRemind 	= "Indsæt USB-stick til optagelse.";
var pvrRemindWords  = ["Ønsker du af afslutte?",
							"Ønsker du at stoppe optagelsen og browse de optagede filer?",
							"Disk udtaget.",
							"Der er ikke nok fri plads.",
							"Ingen optagede filer. Start optagelsen.",
							"PVR kan ikke starte på en forvrænget kanal.",
							"Ikke tilgængelig",
							"Er blevet gemt.",
							"Vil du standse optagelsen og ændre input-kilde?",
							"Tv'et vil afslutte den aktuelle optagelse. Ønsker du at afslutte?",
							"PVR-optagelsen skal have et tv-signal for at fungere korrekt, du bedes tjekke dit signal."];
var pvrChangeCh 	= ["Ønsker du at skifte kanal?",
							"Vil du standse optagelsen og ændre kanal?"];
var pvrChangeToPIN8	= ["Ønsker du at ændre kilden til den enhed der er forbundet til SCART-indgangen?",
				    		"Ønsker du at stoppe optagelsensprocessen og ændre kilden til den anordning, der er forbundet til SCART-indgangen?"];
var pvrChangeToCEC  = ["Ønsker du at ændre kilden til den enhed der er forbundet til en HDMI-indgang?",
				  			 "Ønsker du at stoppe optagelsenprocessen og ændre kilden til den anordning, der er forbundet til en HDMI-indgang?"];
var pvrGuideJump    = ["Ønsker du at gå ind i EPG?",
							"Vil du standse optagelsen og gå til EPG?"];
var pvrMediaJump    = ["Ønsker du at gå ind i medier?",
							"Vil du standse optagelsen og gå til Media?"];
var timeshiftExtra	= ["Vil du standse tidsomstillingen,skift kanal?",
						"Ønsker du at stoppe tidsforskydningen, og ændre kilden til den enhed der er forbundet til SCART-indgangen?",
						"Ønsker du at stoppe tidsforskydningen, og ændre kilden til den enhed der er forbundet til en HDMI-indgang?",
						"Tidsskifte kan ikke starte på en forvrænget kanal.",
						"Ønsker du at stoppe tidsforskydningen og gå ind i EPG?",
						"Vil du standse tidsomstillingen, og skifte TV til USB?",
						"Vil du standse tidsomstillingen,skift input kilde?",
						"Indsæt USB-stick til optagelse.",
						"Disken er ikke stor nok.",
						"Tv'et vil afslutte den aktuelle tidsforskydning. Ønsker du at afslutte?"];
var timeshiftStatus	= ["Hurtigt tilbage","Stop","Afspil","Pause","Hurtigt frem"];
var pvrPowerOffRemind= ["Standby optagelse","Standby","Tv'et optager nu, ønsker du at fortsætte med at optage når tv'et er i standby-tilstand?"];
var timeshiftInitTitle= "Disk oprettelse";
var timeshiftInitReminds= ["Denne wizard bruges til oprettelse af USB disken til tidsomstilling. Vælg oprettelsesindstilling.",
						 "For bedre præstation anbefaler vi at du formatterer USB disken. Det vil slette alle data.",
						 "Vælg fil størrelse til tidsomstilling.",
						 "Formatterer",
						 "Der er ikke nok fri plads.",
						 "Opretter tidsomstillingsfil",
						 "Hastighedstest",
						 "Disk hastigheden er for langsom(<%f MB/sek) til at oprette tidsomstillings-mulighed!",
						 "Disken er klar til tidsomstilling. Men vi anbefaler ændring af disk (hastighed >%fMB/sek) for bedre præstation.",
						 "Disken er klar til tidsomstilling. "];
var timeshiftInitButtons= ["Formater","Spring over","Annuller","Ok","Afslut","Luk"];
var timeshiftInitOther=["Disk hast.","MB/sek."];

var selectChoice	= "Er du sikker?";
var chAtvStore		= "Gem som XXXX";
var chEpgFirstGenreUK= ["Biograf","Nyheder/aktualitet","UNDERHOLDNING","Sport","Børn","Uddannelse","Livsstil","Drama"];
var homePageTitleList = ["PROGRAMMER","TV","VIDEOER","Hjemmeside"];
var homePageFavAndAllName  = ["Foretrukne programmer","Alle programmer"];
var homePageBackUp = ["E-Manual","Håndbog om"];
var homePageRemind   = ["Alle funktioner er kun tilgængelige efter netværket er forbundet.","Dit tv har endnu ingen kanaler. Programmer er tilgængelige efter kanal scanning.","Intet program","Søge kanaler nu?"];
var homePageHistory = ["Historie"];
var miracastTitle = ["Wifi-visning","TCL-enhed"];
var miracastRemind=["Wifi-visning gør det muligt trådløst (dvs. uden brug af kabler) at dele skærmbillede og lyd fra din enhed, f.eks. smartphone eller tablet, på dit TV. På denne måde kan du samtidig med, at noget vises på din smartphone eller tablet, se samme skærmbillede på dit TV. Du kan f.eks. starte afspilning af en video på din smartphone og vise den samtidig på dit TV, eller bruge din tablet som spil-controller og vise indholdet på den store skærm på TV'et.","Wifi-visning på TV’et er klart. Begynd at dele din udstyrsskærm med TV’et nu.","Opretter forbindelse. Vent venligst!","Tilslutning mislykkedes!","Det lykkedes ikke at oprette forbindelse. Du bedes tjekke!"];
var homePageLittleWin = ["Indstillinger","Medie","Ynglingskanaler","Smart TV","EPG"];

var hbbtvStopRemind  = ["Ønsker du at stoppe afspilningen?"];
var colorSystem = ["Auto","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Tryk på ≡ (Funktioner) for yderligere oplysninger";
var emptyListInfo = "Intet udstyr er tilsluttet til TV!";
var optionVideoListArray_1 = ["Billedtilstand", "Forudindstillet lyd", "Afspilningstilstand", "Skærmtilstand", "3D tilstand", 
							  "V-H knap", "Dybde af felt", "Undertekst", "Lydspor", "Titel", "Kapitel", "Info"];
var optionVideoListArray_2 = ["Billedtilstand", "Forudindstillet lyd", "Afspilningstilstand", "Skærmtilstand", 
							  "Undertekst", "Lydspor", "Titel", "Kapitel", "Info"];
var bottomTipsText = ["Spil/Pause", "Hurtigt tilbage", "Hurtigt frem", "Playliste", "Indstillinger"];
var picturePresetArray = ["Standard", "Dynamic", "Naturlig", "Biograf", "Bruger"];
var videoPlayModeArray = ["Gentag alle", "Gentag en", "Normal"];
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Wide Zoom", "Zoom 2", "Stretch Zoom", "Stretch Zoom", "Automatisk"];
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "14:9 Zoom", "16:9 Zoom", "16:9 Zoom up", "Automatisk"];
var Mode3DArray = ["Fra", "2D-til-3D", "Side-om-side", "Top og bund", "Linje indfletning"];
var videoOptionListArray = ["Fra", "Nummer", "Undertekst", "Titel", "Kapitel"];
var subMenuTitleText = "Undertekst";
var langMenuTitleText = "Lydsprog";
var titleMenuTitleText = "Titel";
var mode3DMenuTitleText = "3D tilstand";
var langInfoText = "Nummer";
var STOP_RESUME_INFO = "Stop-Fortsæt";
var playListName = "navn";
var eb_tips = "Tips";
var ok_button = "Ok";
var eb_info = ["Lydafkodningsfejl.", "Videoafkodningsfejl.", "Lydformat er ikke understøttet.", 
			   "Videoformat ej understøttet.", "Kan ikke åbne denne fil.", "Afspilningsfejl, prøv venligst igen.",
			   "Filformatet understøttes ikke.", "Ups! Afspilleren er holdt op med at fungere.",
			   "Filstien findes ikke eller er ugyldig.\n Genindsæt lagerenheden og prøv igen.",
			   "Fortsætte afspilningen fra det forrige\n afspilningsstatus?"];
var picturePlayErrorTips = ["Indlæsningsfejl!!!","Billedet er for stort!!!","Netværksfejl!!!","Trådfejl!!!","Parameterfejl!!!","Ukendt fejl!!!"];
var frameTitleText = "Ny enhed";
var eb_quit_info = "Er du sikker på du vil afslutte?";
var eb_yes = "JA";
var eb_no = "NEJ";
var offinfo = "Fra";
var naInfo = "Ugyldig";
var consoleInfoArray = ["Hurtigt tilbage", "Hurtigt frem", "Spil/Pause", "Playliste"];
var cantOperateText = ["Funktionen understøttes ikke."];
var chapterChangeInfo = "Kun kapitler fra 1 til XXXX er tilgængelige.";
var metaDataArray = ["Titel/udgave Metadata: ", "Kapitel Metadata: ", "Lyd Metadata:", "Undertekst Metadata: "];
var metaTitleInfo = "Titel";
var metaChapterInfo = "Kapitel";
var videoLoadingInfo = "Analyserer...";
var listLoadingInfo = "Indlæser...";
var pgInfo = "Lav normering:";
var fileNameText = "navn";
var fileDateText = "Dato";
var fileSizeText = "Størrelse";
var fileDurationText = "Varighed";
var fileDirectorText = "Instruktør";
var fileCopyrightText = "Copyright";
var fileArtistText = "Kunstner";
var fileAlbumText = "Album";
var fileGenreText = "Genre";
var fileYearText = "År";
var fileGenreText = "Genre";
var mainListArray = ["Alt", "Billede", "Video", "Musik"];
var sortArray = ["navn", "Dato"];
var parserArray = ["Normal", "Rekursiv"];
var emptyTipsInfo = "Ups. Der findes ingen understøttet fil.";
var emptyFolderInfo = "Ups. Der findes ingen understøttet fil.";
var sortName = "Sorter efter";
var parserName = "Analyser";
var divx_str1 = "DivX(R) registrering";
var divx_str2 = "DivX(R) framelding";
var infor_str = "Info";
var quickMenuEmptyText = "Ingen tilgængelige funktioner.";

var musicSoundPresetArray = ["Standard", "Biograf", "Musik", "Klar stemme", "Bruger"];
var musicInformationArray = ["navn", "Kunstner", "Album", "Genre:", "År:", "Varighed:"];
var playListName = "navn";
var playTipsInfo = ["Du afspiller den første fil.", "Du afspiller den sidste fil."]
var musicNameInfo = "Name";
var musicArtistInfo = "Kunstner";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Forudindstillet lyd";
var optionBGMInfo = "Afspil i baggrunden";
var optionAudioOnlyInfo = "Kun lyd";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX er forbundet til dit tv!";
var tvRemoteTitle		= "TV remote";
var tvRemoteDeveloper	= "Applikationen er udviklet af TCL";
var tvRemoteDeviceTitle	= "Enhedsnavn:";
var remoteOption		= ["Mediedeling","Fjernbetjening","Hjælp","Om","Smart Connect"];
var remotebottom		= " Du bedes downloade \"TV Remote\" til din smartphone ";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Deling af fotos, videoer og musik med dit tv via telefonen.",
							"Trin: \n   1. Klik på \"TV Remote\" på telefonen. Forbind telefonen med dit tv via det samme WiFi-netværk;\n   2. Klik på \"Media Sharing\" for at browse mediefiler;\n   3. Send medier til tv'et for at afspille (med en af de følgende muligheder)",
							"      a) Træk & Slip mapper/filer til TV-ikonet i toppen af skærmen\n      b) Sving telefonen mod TV'et for at sende første fil;\n     c) Afspil mediet på telefonen og klik på TV-delings-ikonet; ",
							"   4. Under afspilning på TV'et kan du ryste telefonen for at afspille forrige eller næste fil."];
var controlReminds		= ["Brug telefonen til fjernbetjening af TV'et.",
							" ",
							"Trin: \n   1. Klik på \"TV Remote\" på telefonen. Forbind telefonen med tv'et va det samme WiFi-netværk;\n   2. Klik på \"Remote Control\" for at betjene tv'et."];
var helpDeviceWords		= "Flerskærmsinteraktion";
var helpBottom			= "I cloud-teknologiens tidsalder er smartenheder som telefon og TV gensidigt forbundet. Du kan dele media med din familie på flere skærme og styre TV'et via telefonen! ";
var helpReminds			= ["Forberedelser\n   1. Download og installer \"TV Remote\" fra Google Play eller Apple Store.\n   2. Forbind telefonen med dit tv via det samme WiFi-netværk.",
							" ",
							"Anbefalinger for telefon\n   1. CPU: over 800 MHz\n   2. Lagerkapacitet: mindst 80 MB fri plads",
							" ",
							"Ansvarsfraskrivelse\n   Hvis \"TV Remote\" ikke findes på din telefon, bedes du kontakte telefonproducenten. "];
var helpButtons			= ["Tidligere","Næste"];
var aboutReminds		= ["TV remote","Applikationen er udviklet af TCL"];
var aboutExit			= "Luk";
var smartReminds		= ["Hurtig og smart forbindelse med dit tv og telefon.",
							" ",
							"Trin \n   1. Forbind dit tv og smartphone til den samme LAN. Klik på \"TV Remote\" på din smartphone.\n   2. Klik på \"Smart Connect\" for at scanne QR-koden.\n   3. Med dit tv i udsendelsestilstand, tryk på INFO-tasten på tv'ets fjernbetjening i 4 sekunder, en fuld skærm QR-kode vil poppe op.",];
var smartQRReminds		= ["Du sbedes klikke på Smart Connect på tv'ets fjernbetjening på din telefon og scanne QR-koden for hurtigt at forbinde tv'et og telefonen.",
							"QR-koden indeholder  LAN kontooplysninger. Du bedes opbevare dem på et sikkert sted."];
							

var consoleTipArray = ["Tidligere","Næste","Konsol","Playliste"];							
var optionInfoArray = ["Billedtilstand","Afspilningstilstand","Varighed","Effekt","Info"];

var playModeArray = ["Normal","Bland","Gentag"];
var durationArray = ["Kort (5 sekunder)", "Medium (10 sekunder)", "Lang (15 sekunder)"];
var effectArray = ["Ingen", "Roter", "Træk mod højre", "Træk mod vst.", "Træk op", "Træk ned", "Boks ind", "Boks ud", "Tilfældig"];
var infoArray = ["Navn:","Størrelse:","Dato:","Placering"];

var picturePresetBarTitleInfo = "Billedtilstand";
var picturePresetBarArray = ["Standard","Dynamic","Studie","Biograf","Bruger"];
var upTipsInfo = "Flyt billede"; //add yums 2014-10-10
var consoleTipsArray = ["Konsol","Tidligere","Næste","Playliste","Indstillinger"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Tryk på RIGHT (højre) igen for at afspille det næste billede","Tryk på LEFT (venstre) igen for at afspille det forrige billede","Tryk på DOWN (ned) igen for at vise playlisten"]; //add yums 2014-10-10

var optionPvrListArray = ["Billedtilstand","Forudindstillet lyd", "Skærmtilstand", "3D tilstand", "Undertekst", "Lydspor", "Info"];							
	
var titleSpanFirstArray = ["Kontrol & forbindelse","Grundlæggende funktioner","PROGRAMMER","TV","Indstillinger","FAQ"];
var titleSpanSecondArray = [["Fjernbetjening","Paneltaster","Nem navigation","Tv-forbindelse","Tv-forbindelse","Tv-forbindelse","Trådløs"],["Startfil","Statuslinje","Kilde"],["Afspilning af programmer","Medie","TV remote"],["Juster kanal og lydstyrke","Kanalliste","EPG","Kanaler","Foretrukne kanalerr"],["Billedjustering","Lydjustering","Kanaljustering","Softwareopdatering","Sprog","Forældrekontrol"],["Ofte stillede spørgsmål","Ofte stillede spørgsmål","Fejlfinding","Fejlfinding","Vilkår og betingelser"]];
var contentSpan1_1Array =[["STRØM:","KILDE:","INDSTILLINGER:","OPSÆTNING:","TILBAGE:","INFO:","HJEM:","GÅ UD:","LISTE:"],
    ["Tænd for apparatet eller gå i standby-tilstand",
        "Vælg input-kilde",
        "Åbner menuen Indstillinger",
        "Åbner menuen Opsætning",
        "Vend tilbage til den forrige menu eller forlad den aktuelle App",
        "Viser programoplysninger",
        "Åbner SmartTV-hjemmesiden",
        "Vend tilbage til den forrige menu eller forlad den aktuelle App",
        "Viser kanallisten"]];
var contentSpan1_2Array = ["Forrige kanal","Næste kanal","Drej lydstyrken op","Drej lydstyrken ned","Går til hjemmesiden","Bekræft funktionen","Standby / Opstart"];
var contentSpan1_3Array = ["OK/Vejledning","Kanal op","Kanal ned","Lydstyrke ned","Lydstyrke op","Tilgængelige som piletaster i nogle funktioner."];
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","AV OUT adapter","LAN","Smartphone","PC/Set-top-boks/DVD","Lydforstærker","Lydforstærker/skærm","Dit tv omfatter muligvis ikke alle stikkontakter."];
var contentSpan1_5Array = ["USB 2,0","USB 3,0","Hovedtelefoner","AV IN adapter","SPDIF","CMP AUDIO IN adapter","CMP IN (YPbPr) adapter","USB-enheder","USB-enheder","Hovedtelefoner","DVC/Spillekonsol/Set-top-boks/DVD","Lydforstærker","DVC/Spillekonsol/Set-top-boks/DVD","Dit tv omfatter muligvis ikke alle stikkontakter."];
var contentSpan1_6Array = ["Fælles interface","SD","VGA","SCART","Mini SCART","ANTENNA IN","PCMCIA-kort","SD-kort","Pc","Set-top-boks/DVD","Antenne/kabel/Satellit","Dit tv omfatter muligvis ikke alle stikkontakter."];
var contentSpan1_7Array = ["Tablet","Pc","Router","Telefon","TV"];
var contentSpan1_8Array = ["Skiftefunktion/Strøm","Langt tryk for at gå til autosluk","Ned","Op","Lydstyrke/Kanal/Kilde"];

var contentSpan2Array = [["Tryk på piletasterne for at se hjemmesiden.","Tryk derefter på OK for at se en af de detaljerede programmer eller for at gå ind i programmet."],["Vis dato, netværk og enheder osv. i øverste højre hjørne af skærmen."],["Vælg indgangskilden fra de enheder der er forbundet til tv'et via forskellige porte, såsom TV, AV, HDMI osv."]];

var contentSpan3Array = ["Nyd og se dine foretrukne programmer via Smart TV-siden","Se fotos, videoer og afspil musik fra en USB-lagerenhed.","Forbind dit tv og smartphone eller tablet til samme LAN","Klik på n skærmen eller Tv'ets fjernbetjening på din smartphone eller tablet","Del fotos, videoer og musik på multi-skærme med din familie, og styr dit tv via din smartphone"];

var contentSpan4Array = [["Tryk på UP/DOWN (op/ned) for at skifte kanaler","Tryk på LEFT/RIGHT (venstre/højre) for at justere lydstyrken"],["Tryk på LIST på fjernbetjeningen for at se kanalernes opstilling","Tryk på UP/DOWN (op/ned) for at vælge din kanal"],["EPG er en vejledning på skærmen, der viser planlagte tv-programmer. Du kan navigere, vælge, se og optage programmer."],["Søg og installer kanaler"],["Tilføj eller rediger dine foretrukne kanaler på Kanallisten"]];

var contentSpan5Array = ["Nyt dine foretrukne programmer via videoprogrammerne"];

var contentSpan6Array = [["Tryk på Valgmulighed for at vise systemets indstillingsmuligheder","Gå ind i Billedindstillinger for at justere værdierne"],["Tryk på Valgmulighed for at vise systemets indstillingsmuligheder","Gå ind i Lydindstillinger for at indstille valgmulighederne"],["Tryk på Valgmulighed for at vise systemets indstillingsmuligheder","Gå ind i Kanalindstillingerne for at indstille valgmulighederne"],["Opdater dit tv når en ny softwareversion er tilgængelig"],["Du kan vælge dit foretrukne menusprog"],["Giver forældre mulighed for at låse de kanaler eller programmer, der er uegnede for børn"]];

var contentSpan7_1Array = [["Intet billede, ingen lyd","Tjek om sikringen eller afbryderen fungerer.","Sæt en anden elektrisk enhed ind i stikkontakten for at sørge for, at den fungerer eller er blevet tændt.","Stikket har en dårlig kontakt med stikkontakten","Kontroller signalkilden."],["Normalt billede, ingen lyd","Tryk på knappen lydstyrke op for at øge lydstyrken.","Lydindstillingen er forkert.","Signalfejl fra udsendelsen."],["Normal lyd, intet billede","Juster lysstyrken og kontrasten","Signalfejl fra udsendelsen.","Kontroller om den kun er i lyd-tilstand."]];
var contentSpan7_2Array = [["Radiofrekvens interferens","Denne interferens producerer bevægelige ringe eller diagonale striber, og i nogle tilfælde, tab af kontrast i billederne. Find og fjern radiointeferenskilden."],["Ingen farve","Juster farveindstillingerne.","Prøv en anden kanal. Et sort og hvidt program kan modtages."],["Fjernbetjeningen virker ikke","Udskift batterierne.","Batteriene er ikke installeret korrekt. Strømmen til tv'et er ikke tilsluttet."]];
var contentSpan7_3Array = [["USB-enhedens indhold vises ikke","Kontroller om USB-lagerenheden er kompatibel med tv'et.","Kontroller om lyden og billedets filformat understøttes af tv'et."],["Afspilles uden lyd","Videoen lydformat er ikke understøttet af tv'et afspiller."],["Filerne bliver ikke afspillet problemfrit","USB-lagerenhedens overførselsevne kan begrænse overførselshastigheden til tv'et."]];
var contentSpan7_4Array = [["Hvad du skal være opmærksom på, når du opdaterer software","Ingen strømafbrydelser når du opdaterer software.","Undgå at foretage nogen funktioner med fjernbetjeningen når du opdaterer software.","Vær tålmodig, fordi processen med opdatering af software kan tage lidt længere tid."],["Der er ingen bemærkelsesværdige ændringer i tv-grænsefladen efter opdatering af software.","I særlige tilfælde, kan SW opdateringen muligvis kun opdatere eller tilføje nye funktioner, med også forbedre tv'ets effektivitet uden tydelige ændringer af grænsefladen. Derudover kan tv'ets grænseflade nogen gange forblive intakt."]];
var termsTitle = "Vilkår og betingelser";
var termsConditions = ["(Lovbefalet erklæring) fra TCL - producent af dette tv-apparat. ","På grund af de forskellige funktioner for produkter der har SmartTV - tjenester, såvel som begrænsninger i det tilgængelige indhold, er visse funktioner, applikationer og tjenester muligvis ikke tilgængelige på alle enheder eller i alle områder. Visse funktioner på SmartTV kan også kræve ekstra periferiske enheder eller medlemsgebyrer, som sælges separat. Besøg venligst vores websted for yderligere oplysninger om specifikke enhedsoplysninger og tilgængelighed af indhold. Tjenesterne og tilgængeligheden af indholdet via SmartTV kan ændres når som helst, uden forudgående varsel. \n   Alt indhold og tilgængelige tjenester via denne enhed, tilhører tredjeparter og er beskyttet af love om ophavsret, patenter, varemærker og/eller anden intellektuel ejendomsret. Sådant indhold og tjenester leveres kun til dit personlige ikke-kommercielle brug. Du må ikke bruge noget indhold eller tjenester på en måde som ikke er autoriseret af ejeren af indholdet eller serviceudbyderen. Uden begrænsning af det føromtalte, med mindre det udtrykkeligt godkendes af ejeren af det relevante indhold eller serviceudbyderen, må du ikke ændre, kopiere, genudsende, uploade, poste, sende, oversætte, sælge, lave afledende arbejde, udnytte eller på nogen måde distribuere indhold eller tjenester der vises via denne enhed. \n   DU ANERKENDER OG ACCEPTERER UDTRYKKELIGT, AT BRUG AF DENNE ENHED SKER PÅ EGEN RISIKO, OG AT HELE RISIKOEN FOR TILFREDSSTILLENDE KVALITET, YDEEVNE OG NØJAGTIGHED PÅHVILER DIG. ENHEDEN OG ALT TREDJEPART INDHOLD OG TJENESTER LEVERES “SOM DE ER” UDEN NOGEN FORM FOR GARANTI, HVERKEN UDTRYKKELIG ELLER UNDERFORSTÅET. TCL FRASKRIVER SIG UDTRYKKELIGT ALLE GARANTIER OG FORHOLD MED HENSYN TIL ENHEDEN OG ALT INDHOLD OG TJENESTER, ENTEN UDTRYKKELIG ELLER UNDERFORSTÅET, INKLUSIV MEN IKKE BEGRÆNSET TIL, GARANTI FOR SALGBARHED, TILFREDSTILLENDE KVALITET, EGNETHED TIL ET SPECIFIKT FORMÅL, FOR NØJAGTIGHED, FOR UFORSTYRRET BESIDDELSE OG AT INGEN KRÆNKELSE AF TREDJEPARTS RETTIGHEDER FINDER STED. TCL GARANTERER IKKE NØJAGTIGHED, GYLDIGHED, BETIMELIGHED, LOVLIGHED ELLER FULDENDTHED AF NOGET INDHOLD ELLER TJENESTER, DER GØRES TILGÆNGELIGE VIA DENNE ENHED OG GARANTERER IKKE AT ENHEDEN, INDHOLDET ELLER TJENESTERNE LEVER OP TIL DINE BEHOV, ELLER AT ENHEDENS DRIFT ELLER TJENESTERNE SKER FEJLFRIT OG UDEN AFBRYDELSE. UNDER INGEN OMSTÆDIGHEDER, INKLUSIV UAGTSOMHED, ER TCL ANSVARLIG, HVAD ENTEN VIA KONTRAKT ELLER ERSTATNINGSFORPLIGTENDE RETSBRUD, FOR DIREKTE, INDIREKTE, UTILSIGTEDE, SPECIELLE ELLER FØLGESKADER, ADVOKATSALÆRER, UDGIFTER ELLER ANDEN SKADESERSTATNING DER OPSTÅR FRA, ELLER I FORBINDELSE MED, OPLYSNINGER DER FINDES I, ELLER SOM ET RESULTAT AF BRUG AF ENHEDEN, ELLER ANDET INDHOLD ELLER TJENESTER ANVENDT AF DIG ELLER TREDJEPART, SELV OM DU ADVARES MOD MULIGHEDEN FOR SÅDANNE SKADER. \n   Tjenester fra tredjepart kan ændres, indstilles, fjernes, afsluttes eller afbrydes, eller adgang kan blokeres når som helst uden varsel, og TCL (fabrikanten af fjernsyn af mærket Thomson) afgiver intet anbringende eller garanti for at indhold eller tjenester forbliver tilgængelige over en vis tidsperiode. Indhold og tjenester sendes af tredjeparter ved hjælp af netværk og overleveringsanlæg, som TCL ikke har kontrol over. Uden at begrænse generaliteten af denne ansvarsfraskrivelse, fraskriver TCL udtrykkeligt ethvert ansvar for ændringer, afbrydelse, deaktivering, fjernelse eller indstilling af ethvert indhold eller service, som gøres tilgængelig via denne enhed. TCL kan pålægge grænser for brug eller for adgang til visse tjenester eller indhold, i alle tilfælde uden varsel eller ansvarspådragelse. TCL er hverken ansvarlig eller hæfter for kundeservice relateret til indholdet og tjenesterne. Ethvert spørgsmål eller anmodning om service med hensyn til indhold eller tjenester skal sendes direkte til de respektive udbydere af indhold og tjenester."];

var noChannelListRemind        = ["Ikke fundet nogen kanaler. Kanallisten er tilgængelig efter kanal scanning.","Kanalscanning"];
var closeSubtitleRemind   = "Funktionen vil være tilgængelig, når undertekster er slået fra. Ønsker du at indstille nu?";

var estickerTitles = ["Meget realistiske billeder","Levende farver","Meget livagtig bevægelse","Dynamisk billedkvalitet","SR UHD upskalering","Oplev en 3D-verden","Hurtigere ydeevne","Fremtidigt 4K-indhold","Nyd online-verdenen","Få adgang til ekstra indhold","Integrerede digitale tunere","Forbind alle enheder","Forskellige 4K-kilder","USB-indhold","Ultra hurtig WIFI","Mobilt indhold på dit tv","Indhold på mobile enheder","Lokalt indhold","Godkendt af DivX","Perfekt billede","Kanalen er klar","TDT Premium"];
var estickerDescriptions = ["Utrolig fremvisningsoplevelse takket være billeder med detaljer der er fire gange større på en Full HD på UHD-skærm","Bredt farveskale giver følelser i hver scene med levende røde og smaragdgrønne farver","4K indrammet interpolation og baggrundsbelysning til bekæmpelse af sløringsproblemer","Det originale billedes livlighed er forbedret for at producere et ægte dynamisk udtryk med en fantastisk kontrast","Nyd endnu skarpere tv-shows og Blu-Ray-diske takket være Super Resolution-teknologi","Oplev 3D-klart tv og se det forskellige 3D-indhold","Opleve mere behagelig underholdning med Quad Core for problemfri interaktion og forbedret ydeevne","HEVC (H.265) codec-støtte for kommende standard af 4K videodistribution","Et væld af online-programmer, VOD-tjenester, catch-up tv og internet web browsing","Se mere med yderligere tjenester og indhold fra dine foretrukne tv-stationer","Få adgang til tv-kanaler i high definition uden ekstra set-top-bokse","Let at tilslutte mange digitale kilder til rådighed derhjemme","Tv'et er klar til fremtiden, og det er i stand til at afspille 4K 50/60Hz via HDMI 2,0 med HDCP 2,2","Video- eller fotoindhold direkte fra USB-drev, HDD eller kamera på en storskærm i 4K-opløsning","Seneste generation af 2x2 MIMO og AC standard leverer uovertruffen adgang til internettets hastighed","Nyd fotos, videoer, programmer fra mobile enheder på en storskærm, takket være skærmens afspejlingsteknologi","Fotos, videoer, programmer fra en smartphone eller tablet kan vises på storskærm ","Vis lokalt indhold på storskærm, såsom fotos, videoer fra enheder der er forbundet til det lokale netværk","Afspil lejede eller egne film der er beskyttet af DivX","Ultra smal indfatning og super slankt design","Testet og godkendt af Canal+","Testet og godkendt af TDT Premium"];							

var eManualTextArray = ["E-Manual","Al grafik indeni er kun en repræsentation."];
var frontPanelRemind = "Frontpanel er låst.";
var eRPRemind		 = "Butikstilstand opfylder ikke ERP kravene. Er du sikker?";	
var noRelatedChannel = "Ingen relateret kanal";
var option0624Name          = ["BOP","BFS","Begivenhed efter begivenhed","GetUserID","BGM","Reset all","Nulstil butik","NRM","Valg af DVB-T2 og land","HbbTV-modus"];
var DVBT2AndChoice = ["Til","Efter land","Fra"];
var hbbtvServiceRemind = "HbbTV-service kommer snart.";
var insertWord = "Indsæt";		
var viewDetail = "Se detaljer";							

var remindOAD  = "Software opdatering. Nyt anbefalet software kan måske fås på en anden kanal.  Hvis du accepterer download skifter det måske kanal automatisk. Vil du gøre det lige nu?";

var LEDStatus = ["Blinker", "Normal","Fra"];
var netFlixRemind = "Denne handling afbryder din adgang til Netflix, indtil du logger ind igen.";
var ESNExplanation = "Elektronisk Serienummer";
var resetShopRemind = "Systemet nulstiller, sluk ikke dit TV";
var initialSelectOption = "Vælg en mulighed:";
var databaseRemind   = "Systemet har registreret, at databasen af ukendt årsag er blevet beskadiget, og har automatisk gendannet den. Tryk på OK for at fortsætte";
var Deactivation = "Log ud";
var oadFutureRemind = "Softwareopdatering.\n En ny anbefalet software er tilgængelig ved %s. Opdateringen kan tage lidt tid, og skærmen kan gå i sort. Sluk ikke for modtageren under opdateringen. Hvis du accepterer denne opdatering, bedes du venligst efterlade modtageren tændt på det planlagte tidspunkt. Ønsker du at modtage denne opdatering?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Lydudgang";
var bt_soundOutPutTV = "TV-højtalere";
var bt_soundOutPutBT = "Bluetooth-enhed";
var bt_soundOutPutBT_TV = "Bluetooth og tv";
var bt_refreshBarName = "Enheder";
var bt_settingTips_On = "Tænd Bluetooth-funktionen og scan enhederne. ";
var bt_settingTips_Finding = "Finder tilgængelige enheder…";
var bt_settingTips_NoDevice = "Ingen enhed tilgængelig.";
var bt_deviceList_State_NoConnect = "Ikke tilsluttet";
var bt_deviceList_State_Connecting = "Tilslutter...";
var bt_deviceList_State_Connected = "Tilsluttet";
var bt_deviceList_State_Paired = "Linjeparret";
var bt_deviceList_Conncect_Failed_Tips1 = "Forbindelsen mislykkedes.";
var bt_deviceList_Conncect_Failed_Tips2 = "Bekræft at XXX Bluetooth-funktionen er On (tændt)";
var bt_deviceList_Conncect_Success = "Forbundet til Bluetooth-enhed.";
var bt_deviceList_Disconncect_Success = "Koblet fra Bluetooth-enhed.";
var bt_deviceList_Disconnect = "Er du sikker på du vil koble fra XXX?";
var bt_tipsTitle = "Tip";
var bt_bluetooth_Pairing_Title = "Bluetooth-linjeparring";
var bt_bluetooth_Input_Pin = "Indtast PIN-koden:";
var bt_bluetooth_Output_Pin_Tip = "Indtast PIN-koden XXXX fra tastaturet.";
var bt_bluetooth_Pin_Wrong_Tip = "Forkert PIN-kode";
var bt_bluetooth_Remove_Pair_Title = "Forespørgsel";
var bt_bluetooth_Remove_Pair_Ask = "Vil du glemme denne enhed?";							
							
							
var audioDescriptionName = ["Audiobeskrivelse","Højttaler","Højttalerlydstyrke","Hovedtelefoner","Hovedtelefonlydstyrke","AD volume","BT-enhed","Lydstyrke for BT-enhed","Forstærker","Højttaler"];
var audioDescriptionOptions = ["Fra","Normal","Audiobeskrivelse"];
var volumeOffRemind = 'Indstil venligst XXX på ”On” i indstillingsmenuen.';	
var switchSourceRemind   = " er sat i. Vil du skifte den nu?";
var footballModeName = "Sportstilstand";
var resetStadium = "Stadion";							
							
var atvSearchMenu = "ATV manual search";
var dtvSearchMenu = "DTV manual search";
var settingNoticeSourceName ="Automatisk kilde";

var smartTVOptions		= ["Smart TV-portal","HbbTV","Del og vis","Wifi-visning","Vilkår & betingelser",
    "Netværksstandby","Nulstil smart TV","Cookie policy","Privatlivspolitik","Sletning af data"];
var supportOptions		= ["Fjernbetjent diagnose","Kontakt os"];
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

var tvDoctor=["Fjernbetjent diagnose 2.0",
"Denne App fungerer kun til at dit Smart-TV kan udføre et diagnosetjek og forbedre din produktoplevelse. Oplysninger om fjernsynets funktionsdata og model indsamles af denne app, som uploades til serveren og anvendes til at løse problemer med tv’et. Der er ingen adgang til dine personlige oplysninger. Sørg for, at dit fjernsyn er tilsluttet til internettet.",
"Lokaldiagnose",
"Når diagnosticeringen igangsættet, bedes du følge anvisningerne fra din supporttekniker.",
"Fjernbetjent diagnose",
"Før du bruger dette, skal du sikre dig, at din supporttekniker er online.",
"Serienummer:",
"&nbsp;&nbsp;&nbsp;&nbsp;Bruger-id:",
"Opretter forbindelse ...",
"Diagnose er i gang. Hold netværket tilsluttet.",
"Ingen adgang til internet, \nkontroller venligst netværksforbindelsen.",
"Luk"
];
var contactUsOption = ["Kontakt os",
    "Kontakt venligst os, hvis der er problemer med betjeningen af dette udstyr.",
    "Kontakt os",
    "Website: Besøg",
    "Telefonnummer til Call center:","Produktinformation","Model Name:",
    "Software Version:","","Bruger-id:","Projekt-id:",
    "Klienttype:","Trådløs MAC-adresse:","Kablet MAC-adresse:","Netflix ESN:","Scan informationen til din mobiltelefon.",
    " og vælg dit land."];
							
							

//本地launcher的翻译，与服务器无关，只用于本地launcher
var homePageWords = ["Historie", "Søg"];//home页的翻译
var titlePageWords = ["Hjem", "Videoer","TV","Apps"];//index的标题翻译
var videosPageWords = ["Biograf","Sport","Musik","Populær","Spil","Uddannelse","Nyheder"];//videos页的内容翻译

//同时应用于本地和服务器
var statusPageWords = ["USB","Indstillinger","WiFi","Tilsluttet"];//状态栏的翻译

//二级页面的翻译
var searchPageWords = ["Søg", "Populære søgninger:","Show, Film, Folk..."];
var resultSearchPageWords = ["Resultater for", " ","Prøv med andre søgeord.","Beklager, ingen videoer fundet om "," "];
var historyPageWords = ["Historie", 'Tryk ','for at slette historik',"Slet en","Slet alle","I går","I dag"," Du har endnu ingen videoer set.","Historik over viste videoer slettet!"];
var channelPageWords = ["Beklager, endnu ingen video fundet."];

//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9",
                       	   "Zoom-","0","Zoom+",
                       	   "Luk","0","",
                       	   "Liste","0","Tekst",
                       	   "Guide","Enter","Luk",
                       	   "Menu","Undertekst","Info",
                       	   "Stop",
                       	   "Info","Menu","Luk",
                       	   "Luk"
                       	   ];

//added for LA sports mode
var sportsModeInitReminds= ["Denne guide anvendes til at sætte USB-drevet op til Sportsmodus. Vælg venligst opsætningsmodus.",
						 "Vælg filstørrelse til Sportsmodus.",
						 "Oprettelse af Sportsmodusfil",
						 "USB-drevet er for langsomt (< %f MB/sek.) til Sportsmodusfunktionen!",
						 "USB-drevet er klar til Sportsmodus. Men vi anbefaler, at du omstiller det (til hastighed > %f MB/sek.) for bedre ydeevne.",
						 "USB-drevet er klar til Sportsmodus."];

var sportsModeExtra	= ["Vil du afbryde Sportsmodus og skifte kanal?",
						"Vil du afbryde Sportsmodus og skifte signalkilde til den kilde, der er tilsluttet SCART-indgangen?",
						"Vil du afbryde Sportsmodus og skifte signalkilde til den kilde, der er tilsluttet HDMI-indgangen?",
						"Sportsmodus understøttes ikke på en krypteret kanal.",
						"Vil du afbryde Sportsmodus og åbne EPG?",
						"Vil du afbryde Sportsmodus og åbne Medier?",
						"Vil du afbryde Sportsmodus og skifte signalkilde?",
						"TV'et afslutter aktuel Sportsmodus. Vil du afslutte?"];
var remoteControlNote = "- Den medfølgende fjernbetjening kan variere afhængigt af produktets model";


var textArray = ["Volume","Channel","Source","Switch/Power","Guide","seconds to Power OFF"];
var guideArray = ["VOL-","VOL+","CH-","CH+","Pre","Next"];
var favChannelListRemind = ["Ingen favoritkanaler. Gå ind på andre lister og brug “Grøn Knap” til at tilføje favoritkanaler."];

var proxySetting = ["Proxyindstillinger","Port"];
var powerOffShop = ["Butikstilstand anbefales, fortsæt?"];
var tcastTextPageWords = ["Masser af videoer, avancerede programmer","TV-fjernbetjening. Lige ved fingerspidserne","Fantastisk indhold. Del på en stor skærm"];
var tcastOtherWords = ["Scan QR-kode og download T-Cast","Netværk tilsluttet til TV","Navn på TV","T-Cast"];
var hbbtvWords = ["HbbTV-indstilling","HbbTV","Cookies","Cookies fra tredjepart","Enheds-ID","sporing"];
var hbbtvTrackingWords = ["YES","NO","Det er lige meget"];
var eStickerTipWords = ["Ledig diskplads er mindre end 400 MB. Vil du slette demovideoerne for at skaffe mere plads?"];
var delEstickerVideoRemid = ["Videoen er slettet"];
var selectSatRemind = "Du kan maks. vælge 20 satellitter!";
var cookiePolicyTitle = "Cookiepolitik – Online Smart TV-Tjenester";
var cookiePolicyConditions = ["Selskabet respekterer din ret til beskyttelse af persondata, når du bruger et Smart TV fremstillet af Selskabet og Tjenester leveret af Selskabet. Cookies er noget, der anvendes af mange websites og andre internettjenester. Dit Smart TV modtager, lagrer og transmitterer cookies, som skal sørge for, at disse websites og tjenester fungerer korrekt. Selskabet bruger også cookies i forbindelse med Tjenesterne. Denne cookiepolitik forklarer, hvilke cookies der er indstillet på dit Smart TV, og hvordan du kan administrere dem.\nAlle persondata, som Selskabet indsamler og/eller behandler ved brug af cookies, er underlagt Selskabets Databeskyttelsespolitik, som denne cookiepolitik derfor bør læses i sammenhæng med.\n1. Hvad er en cookie?\nCookies er små tekstfiler, som kan placeres på dit Smart TV. Når du på dit Smart TV tilgår et website eller via den røde knap aktiverer en TV-stations ekstratjenester, vil dette website eller denne ekstratjeneste muligvis installere en cookie på dit Smart TV. Ved efterfølgende besøg/aktiveringer vil denne cookie sende oplysninger tilbage til den part, der har placeret cookie'en. Cookies har opnået en enorm udbredelse og anvendes i dag på en lang række websites og tjenester. Hver cookie indeholder typisk navnet på det domæne, hvorfra cookie'en kommer, cookie'ens \"levetid\" og en værdi, som oftest et unikt tal. Du kan få mere at vide om, hvad cookies er, og hvordan de fungerer, på www.allaboutcookies.org.\nCookies kan opdeles i funktionelle cookies og ikke-funktionelle cookies. Funktionelle cookies er cookies, som er strengt nødvendige for leveringen af Smart TV-tjenesterne og for, at websites og andre tjenester kan levere det rigtige indhold til Smart TV'et. Ikke-funktionelle cookies er alle andre cookies.\nDenne cookiepolitik vedrører cookies, som vi placerer på dit Smart TV, samt eventuelle reklamecookies, som placeres af tredjemand via vores tjenester. Denne cookiepolitik vedrører ikke cookies, som måtte blive placeret, når du via Smart TV'et tilgår tredjemands websites, tjenester eller apps. For oplysninger om sådanne cookies henviser vi til cookiepolitikkerne hos de pågældende tredjemænd. Dog er det i denne cookiepolitik beskrevet, hvordan man sletter sådanne cookies (se afsnit 4 nedenfor).\n2. Hvilke ikke-funktionelle cookies anvender vi?\nReklamer: Når du bruger Smart TV-tjenester, kan du komme ud for reklamer i videoer og bannerreklamer. Reklamerne kan være leveret af os eller af tredjemand via, eller efter koordinering med, vores reklameserver, som har den centrale, koordinerende rolle i forhold til levering af sådanne reklamer. I den forbindelse vil der fra vores, eller tredjemands, reklameserver blive installeret en cookie på dit Smart TV. Ved hjælp af denne cookie kan reklameserveren registrere, om en reklame er blevet vist på dit Smart TV, eller om der fra dit Smart TV er blevet klikket på en reklame. Med de oplysninger, der lagres i disse reklamecookies, kan vi logge, hvilke reklamer der er blevet vist på dit Smart TV, sådan at du ikke får vist for mange af de samme reklamer, og sådan at vi kan afregne med vores reklamepartnere. Vi bruger ikke oplysningerne til at levere målrettede reklamer. Endvidere er det muligt for tredjemand at bruge vores reklamesystem til at levere reklamer til, og i den forbindelse placere cookies på, dit Smart TV. \nDisse cookies indeholder bl.a. oplysninger om leverede reklamer, oplysninger om, hvilken applikation eller hvilket domæne reklamerne leveres til, og hvad din IP-adresse er. Formålet hermed er at huske, hvor ofte en given reklame vises, og forhindre, at den samme reklame vises for tit. Eksterne tredjemandsannoncører kan også bruge cookies til at følge din historik over flere websites og levere reklamer, der er afstemt efter dine personlige præferencer.\n3. Tredjemandswebsites\nNår du via Smart TV-tjenesterne på dit Smart TV besøger tredjemandswebsites eller -tjenester, vil disse muligvis installere cookies på dit Smart TV og eventuelt også følge og logge din historik på de pågældende websites. Vi opfordrer ikke hertil og bruger ikke sådanne oplysninger. For nærmere om tredjemands brug af cookies henvises til de pågældendes cookiepolitikker.\n4. Sletning af cookies\nDin brugergrænseflade på dit Smart TV giver dig mulighed for at slette alle cookies og andre lokale browserlagringer fra Smart TV'et. Du rådes til at fjerne alle cookies og lokale indstillinger, hvis du på noget tidspunkt sælger eller bortgiver Smart-TV'et.\n5. Kontakt\nHvis du har spørgsmål eller kommentarer til vores cookiepolitik eller vores brug af cookies, kan du sende os en mail på FRsupport@tcl.com.\nVersion: 1.0\n"];
var privacyPolicyTitle = "Databeskyttelsespolitik – Online Smart TV-Tjenester";
var privacyPolicyConditions = ["Vi respekterer din ret til beskyttelse ved behandling af persondata. Denne Databeskyttelsespolitik forklarer, hvilken enhed der er ansvarlig for indsamling, behandling og anvendelse af de persondata, som vi indsamler fra dig i forbindelse med din brug af vores Smart TV-tjenester (\"Tjenesterne\"), hvilken slags persondata vi indsamler om dig, hvad vi bruger dem til, og hvad dine rettigheder i den forbindelse er. \n1. Dataansvarlig\nIndsamling, behandling og anvendelse af de persondata, der indsamles fra dig ved din brug af Tjenesterne, foretages af Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, Kina (\"Selskabet\"). Det er dog ikke alle de nedenfor beskrevne databehandlingsaktiviteter, som vi er ansvarlige for. Vi har alligevel valgt at beskrive de respektive aktiviteter i denne Databeskyttelsespolitik, fordi behandlingen er forbundet med din brug af Smart TV'et.\n2. Samtykke til databehandling\nI nogle tilfælde kræver indsamling, behandling og/eller brug af dine persondata samtykke fra dig. \nHvis du har givet samtykke til, at dine personoplysninger må anvendes med det formål at forbedre Tjenesterne, har samtykket følgende ordlyd:\n\"Jeg giver hermed samtykke til, at oplysninger om min enheds starttidspunkt, DTV-kanalliste, favoritkanalliste, brugstider og kanalhistorik indsamles, behandles og bruges med det formål at analysere brugervaner med henblik på forbedring af Tjenesterne og/eller til at analysere, hvor mange onlinebrugere Selskabet har pr. dag/måned/år, og til, at disse oplysninger må deles med TV-stationer.\"\nHvis du har givet samtykke til, at dine personoplysninger må anvendes til at sende dig reklamer, som er målrettet dine interesser, har samtykket følgende ordlyd:\n\"Jeg giver hermed samtykke til, at kundetype- og landedata om mig må indsamles, behandles og anvendes til brug for målretning af reklamer.\"\nDet er frivilligt, om du vil give samtykke, og du kan stadig bruge Tjenesterne, også hvis du ikke samtykker. I så fald kan du dog få vist reklamer og andet indhold, der ikke er skræddersyet til dine præferencer. Uanset om du giver samtykke eller ej, forbeholder Selskabet sig ret til at indsamle, behandle og/eller anvende ovennævnte data i det omfang, der er tilladt i henhold til gældende lovgivning.\nDu kan til enhver tid trække dit samtykke til hvert af ovenstående punkter tilbage, ligesom du kan gøre indsigelse mod brug af dine persondata til markedsføring, markeds- eller opinionsundersøgelser og mod tilpasning af Tjenesterne til dine behov. Hvis du vil trække dit samtykke tilbage og/eller gøre indsigelse, skal du ændre sikkerhedsindstillingerne for dit Smart TV i overensstemmelse hermed.\n3. Persondata, som indsamles\nUanset om du har givet samtykke eller ej, indsamler, behandler, lagrer og anvender Selskabet følgende kategorier af data:\nEnheds-ID: Dit Smart TV har et unikt nummer, som sætter os i stand til at identificere og godkende Smart TV'et, når du bruger Tjenesterne. Dette nummer kaldes Enheds-ID. Nummeret vil blive oplyst til vores servicepartnere til brug for levering af Tjenesterne til dig. Enheds-ID'en vil også blive oplyst til udvalgte indholdspartnere til godkendelsesformål. Disse indholdspartnere bruger Enheds-ID'en til at godkende dit Smart TV til adgang til tjenester, der udbydes af en indholdspartner.\nIP- og MAC-adresse: Dit Smart TV vil få tildelt en IP-adresse ved forbindelse til internettet. Denne IP-adresse vil blive sendt til os og behandlet af os, hver gang Smart TV'et beder om oplysninger eller data fra Tjenesterne. Hvis dit Smart TV er bag en router (f.eks. i et lokalt netværk i hjemmet eller lokal WLAN), kan vi indsamle og behandle IP-adressen for denne router. MAC-adressen er et unikt nummer, som er tildelt hvert netværksinterface i dit Smart TV. Også MAC-adressen vil blive indsamlet og behandlet af os, når Smart TV'et beder om oplysninger eller data fra Tjenesterne.\nTilslutningsdata: Hver gang du tilslutter dit Smart TV til internettet og tænder for Smart TV'et, vil det automatisk oprette forbindelse til Tjenesterne, som administreres af vores servicepartner. Smart TV'et vil derefter blive verificeret som godkendt (autentificeret) til at tilgå Tjenesterne. Til brug for denne autentificering gemmer Tjenesterne ét eller flere unikke, numeriske identifikationer, der er tilknyttet dit Smart TV. Når Smart TV'et opretter forbindelse til Tjenesten, vil den fremsende sin egen IP-adresse samt forskellige enhedsspecifikke oplysninger (Smart TV-model, softwareversion) for at se, om der er softwareopdateringer tilgængelige.\nTjenesteindstillinger: Som en del af Tjenesternes normale funktionalitet kan du selv manuelt fastlægge, hvilken rækkefølge de forskellige apps skal vises i. Vores tjenestepartner vil gemme den valgte rækkefølge og andre indstillinger, du måtte foretage under din brug af Tjenesterne. Disse oplysninger vil blive knyttet til Enheds-ID'en.\nEnhedsspecifikke oplysninger: Smart TV'et lagrer en række oplysninger om sig selv og sin konfiguration. Det er bl.a. oplysninger om Smart TV-type, version af operativsystem, skærmopløsning, projekt-ID (dvs. oplysninger om konfigurationsfiler), brugeragent, browsernavn, browserversion, og hvilket sprog og land Smart TV'et er konfigureret til. Oplysningerne vil blive anvendt af os og videregivet til vores tjeneste- og indholdspartnere.\nReklamer: Tjenesterne kan indeholde reklamer. Det er reklamer, som leveres af os eller af tredjemand ved hjælp af køb af reklameplads, som vi stiller til rådighed. Alle reklamer leveres ved hjælp af, eller via, vores reklameserver, der således fungerer som koordinator for levering af reklamer. Der vil muligvis fra vores - eller tredjemands - reklameserver blive installeret en cookie på dit Smart TV. Se venligst vores Cookiepolitik for nærmere oplysninger.\nTjeneste- og indholdspartnertrafik: Når du bruger Tjenesterne, vil dit Smart TV efterspørge data fra Tjenesterne via internettet. I den forbindelse vil din IP-adresse og oplysninger om, hvilket sprog og land dit Smart TV er konfigureret til, blive sendt til vores tjenestepartner. Vores servicepartner vil behandle oplysningerne i overensstemmelse med sin egen databeskyttelsespolitik.\nBrug af to skærme: Hvis du gør brug af vores to-skærms-app, vil vi på vores servere indsamle og behandle oplysninger om, hvilke indstillinger du aktiverer i app'en, samt dit Smart TV's sprog- og landeindstillinger, DTV-kanalliste, favoritkanaler, programlister, Enheds-ID, aktuelle kanal, protokolversion og IP-adresse. Derefter styres dit Smart TV af vores servere i henhold til dine valgte indstillinger i toskærmsapp'en.\nHbbTV - \"Rød Knap\": TV-stationer (\"Stationer\") kan udsende supplerende oplysninger sammen med deres TV-signal. Hvis Smart TV'et i sådanne supplerende oplysninger modtager specifikke instruktioner, og hvis det er tilsluttet internettet, vil Smart TV'et downloade et billede eller en lille side fra Stationens website og vise dette sammen med en besked om at trykke på den \"Røde Knap\" på din fjernbetjening, hvis du ønsker adgang til ekstratjenester fra Stationen. Dette sker, hver gang du zapper. Når billedet downloades fra Stationens hjemmeside, transmitterer dit Smart TV samtidig visse personlige oplysninger, nemlig oplysninger om Smart TV'ets DTV-kanalliste, aktuelle kanal, den såkaldte event information tabel, TV-tid, IP-adresse samt eventuelle cookies på Smart TV'et. Stationen er ansvarlig for indsamling, behandling og/eller anvendelse af disse data. Derudover kan Stationen, hvis du ved hjælp af den Røde Knap bruger eventuelle ekstratjenester fra en Station, indsamle andre personoplysninger om dig (f.eks. hvilke on-demand-videoer du ser, hvilke nyheder du læser, osv.).\n4. Formål med vores behandling og/eller brug af dine persondata\nVi behandler de indsamlede data til følgende formål:\n• Levering af Tjenesterne: Oplysningerne om dit Smart-TV's IP- og MAC-adresse, Enheds-ID, version af operativsystem, kundetype og skærmopløsning, projekt-ID (dvs. oplysninger om konfigurationsfiler), DTV-kanalliste, sete kanaler, tidszone samt sprog- og landeindstillinger bruges til at give dit Smart TV adgang til Tjenesterne og tjenester fra indholdspartnere. Formålene er blandt andet, men ikke begrænset hertil, autentificering, levering af positionsbaserede tjenester (f.eks. vejrudsigter), håndtering af eventuelt misbrug eller brud på sikkerhed, overvågning af Tjenesternes tilgængelighed og sikkerhedskopiering af brugerindstillinger.\n• Autentificering: Vi bruger Enheds-ID og MAC-adresse til autentificering.\n• Softwareopdateringer: Hver gang dit Smart TV er tændt, sender det os oplysning om IP-adresse, Enheds-ID, softwareversion, kundetype, projekt-ID (dvs. konfigurationsfiler), bruger-ID og serienummer, således at du kan få og modtage relevante softwareopdateringer. \n• Forbedring af Tjenesterne: Vi bruger samlede og anonymiserede brugsdata (dvs. data om din brug af Tjenesterne) for at forbedre brugeroplevelsen.\n• Reklamevisning: Oplysningerne i reklamecookies bruger vi til at registrere, hvilke reklamer der er blevet vist på dit Smart TV, sådan at du ikke får vist for mange reklamer, der ligner hinanden, og sådan at vi kan afregne med vores reklamepartnere. Eksterne annoncører, der leverer reklamer på Tjenesterne eller en indholdspartners website efter koordinering med vores reklameserver, kan også bruge cookies til at følge din historik over flere websites og levere reklamer, der afspejler dine personlige præferencer.\n• Reklameoptimering: Vi bruger data om reklamevisning og klik på reklamer til at forbedre brugernes reklameoplevelse på Tjenesten.\n• Rabatter: Vi videregiver Enheds-ID-nummeret til udvalgte indholdspartnere, for at disse kan afgøre, om de kan give dig fri adgang til Video-on-Demand-titler i deres samlinger.\n• Pålagt videregivelse: Vi kan blive pålagt at videregive data til politi eller domstole. Hvis det sker, vil vi kun gøre det på grundlag af juridisk bindende dokumenter, som f.eks. en arrestordre eller en retskendelse, som pålægger os at samarbejde med de pågældende myndigheder.\nBrug af Tjenesterne under anvendelse af pseudonym er tilladt, medmindre specifikke tjenester kræver, at du afgiver navn og/eller e-mail adresse.\n5. Kategorier af modtagere\nSelskabet deler kun personoplysninger indsamlet i forbindelse med din brug af Tjenesterne med følgende tredjemænd:\n• Med tredjemandsleverandører af Smart TV-tjenester, hvis du anmoder om sådanne (hvis du f.eks. starter Netflix-app'en på dit Smart TV, kan vi videregive oplysninger om IP-adresse, MAC-adresse, softwareversion og TV-model til Netflix).\n• Med tredjemandsindholdspartnere, hvis du anmoder om bestemt indhold, der leveres af sådanne (hvis du f.eks. anmoder om tjenesten GoLive IP-TV, kan vi dele din TV-kundetype, IP-adresse og dine sprogindstillinger med den juridiske enhed, der leverer GoLive-tjenesten).\n• I det omfang du har givet samtykke til videregivelse af specifikke personoplysninger til tredjemand som omtalt ovenfor, vil Selskabet videregive sådanne oplysninger til de pågældende.\n• Med outsourcingleverandører som databehandlere til at bistå Selskabet med levering af Tjenesterne.\nSelskabet vil kun videregive persondata til øvrige tredjemænd, hvis Selskabet er lovmæssigt forpligtet hertil (f.eks. til domstole eller anklagemyndigheder), hvis du har givet samtykke til videregivelse, eller hvis videregivelse i øvrigt er lovlig i henhold til gældende lov.\n6. Lande, hvor dine data vil blive behandlet\nSelskabet og/eller andre modtagere af dine persondata som anført ovenfor kan befinde sig uden for det Europæiske Økonomiske Samarbejdsområde (nærmere bestemt i følgende lande: Folkerepublikken Kina, USA). Dine oplysninger kan derfor blive behandlet i lande, hvis lovgivning ikke anses at yde tilstrækkelig beskyttelse af personoplysninger i henhold til Europa-Parlamentet og Rådets direktiv 95/46/EF af 24. oktober 1995 om beskyttelse af fysiske personer i forbindelse med behandling af personoplysninger og om fri udveksling af sådanne oplysninger.\n7. Dine rettigheder\nDu kan kontakte Selskabet for at få oplysninger om Selskabets behandling af dine persondata og/eller udøve dine lovbestemte rettigheder med hensyn til adgang, korrigering, sletning eller blokering af dine persondata, og/eller gøre indsigelse mod behandling af dine persondata med henblik på markedsføring og/eller markeds- eller opinionsundersøgelser.\n8. Ændringer i denne Databeskyttelsespolitik\nFor at forbedre vores Tjenester kan det være nødvendigt at ændre bestemmelserne i denne Databeskyttelsespolitik - f.eks. ved indførelse af ny teknologi eller tilføjelse af nye tjenester. Vi forbeholder os ret til til enhver tid at ændre eller supplere denne Databeskyttelsespolitik.\n9. Kontaktoplysninger\nHvis du har spørgsmål til vores Databeskyttelsespolitik eller ønsker at klage over vores håndtering af dine persondata, kan du kontakte os ved hjælp af følgende kontaktoplysninger:\nE-mail: FRsupport@tcl.com\nVersion: 1.0\n"];
var privacyPolicyTerms = [
    "Aktivering af tjenesten Smart TV.",
    "Jeg er indforstået med indsamling, behandling og brug af starttidspunkt for min enhed, oversigt over digitale TV-kanaler, oversigt over favoritkanaler, brugstid og viste kanaler til analyse af brugervaner med henblik på forbedring af tjenesterne og/eller analyse af antallet af TCL-onlinebrugere pr. dag/måned/år og deling af disse oplysninger med TV-stationerne.",
    "Aktivering af tjenesten om anbefalinger.",
    "Aktivering af applikationen 2. skærm på mobile enheder.",
    "Aktivering af automatisk softwareopdatering.",
    "Aktivér tjenesten FreeviewPlay"
];
var privacyPolicyTips = [
    "Alle Smart TV-tjenester deaktiveres.",
    "Servicen HbbTV med TV-kanaler, hvor der bruges en indbygget tuner, deaktiveres.",
    "Tjenesten med anbefalinger af indhold og TV-program deaktiveres.",
    "Applikationen 2. skærm deaktiveres.",
    "TV’et søger ikke automatisk efter softwareopdateringer og nye funktioner.",
    "FreeviewPlay-indhold deaktiveres."
];
var privacyPolicyRemind = "Markér den tilhørende afkrydsningsboks i Indstillinger.";
var set = "Indstil";
var copyShopDemoTips = ["Tilsluttet USB, vil du kopiere videoen til flashdrevet?","Kopiér videoen til flashdrevet","Videoen er blevet kopieret!","Fejl ved kopiering af video!"];
var dataDeletionWords = ["Slet dine data vedrørende Smart TV-tjeneste i back end-serverne.","Bemærkninger: Dataene vedrørende din brug af Smart TV slettes en måned efter, at du har sat kryds ved dette element. Bemærk, at sletningen ikke har nogen indflydelse på de lokale data, der er gemt I dit tv-apparat.","Der sendes ikke længere data til Smart TV-serveren.","Bemærkninger:  Dataene vedrørende brugen af Smart TV-tjenester sendes ikke længere til serveren, når du har sat kryds ved dette element. Dit tv-apparat modtager ikke længere anbefalede tjenester.","Hvis du ønsker flere oplysninger, skal du besøge webstedet www.tcl.eu"];
var miracastWords = ["Trådløs forbindelse","Spejl Android-telefon på TV","Klik for at tilslutte","Funktionen er kun tilgængelig på Android-telefoner"];
var miracastTips = ["Trin til tilslutning","Åbn systemindstillinger","Flere tilslutningsmåder \n / Andre trådløse forbindelser","Vælg trådløs visning","Klik for at tilslutte \n Venter på at blive opdaget"];
var termsAndConditions = ["\nNår du bruger dette TV (\"Apparatet\"), får du samtidig adgang til at bruge de(t) dertil hørende indhold og tjenester (samlet \"Licensapplikationen”) som licenstager (dvs. ikke som køber) på de heri beskrevne vilkår og betingelser. Udbyderne af Licensapplikationen (hver især en \"Applikationsudbyder\" forbeholder sig alle rettigheder, der ikke udtrykkeligt tildeles dig.\n\n1.	Omfanget af licensen\n\nDen af Applikationsudbyderen tildelte licens til en Licensapplikation er en ikke-overdragelig licens til at bruge Licensapplikationen på det Apparat, som du ejer eller kontrollerer. Du må ikke distribuere eller dele Licensapplikationen på et netværk, hvor den vil kunne bruges af flere apparater samtidigt. Du må ikke leje, lease, udlåne, sælge, videresælge eller viderelicensere Licensapplikationen. \n\nAlle Licensapplikationer inkl. alt indhold, som er tilgængelig fra dette Apparat, tilhører Applikationsudbyderen og er omfattet af gældende IP-lovgivning. Medmindre andet følger af lovgivningen, må du ikke ændre, kopiere, dekompilere, foretage reverse engineering af, demontere, genudsende, uploade, udsende, overføre, oversætte, forsøge at udlede kildekoden af, skabe afledte arbejder af eller på anden måde udnytte en Licensapplikation eller opdaterede versioner eller uddrag af denne. Manglende overholdelse af ovennævnte kan føre til retsforfølgelse og krav om erstatning. Licensvilkårene gælder også opgraderinger leveret af Applikationsudbyderen til erstatning af og/eller supplement til den oprindelige Licensapplikation, medmindre der medfølger en særskilt licens, der i så fald vil være gældende. Du afholder selv eventuelle omkostninger til opgradering af Licensapplikationen.\n\n2.	Tredjemands materiale\n\nLicensapplikationen kan give adgang til Applikationsudbyderens og tredjemands tjenester og websider (samlet \"Tjenesterne\"). Når du bruger Tjenesterne, vil du måske støde på indhold, der kan opfattes som krænkende, anstødeligt eller uanstændigt. Dette kan være mere eller mindre åbenlyst, og når du foretager søgninger eller indtaster en bestemt URL, vil der måske automatisk og utilsigtet blive oprettet links eller henvist til anstødeligt materiale. Producenten af Apparatet (”Producenten”) og Applikationsudbyderen påtager sig dog intet ansvar for indhold, der kan opfattes som krænkende, anstødeligt eller uanstændigt. \n\nProducenten har ikke pligt til at undersøge eller vurdere Tjenesternes indhold, rigtighed, fuldstændighed, betimelighed, gyldighed, lovlighed eller kvalitet. Producenten afgiver ingen garantier eller positive tilkendegivelser om Tjenesterne og påtager sig intet ansvar for disse. \n\nTjenesterne kan bestå af ophavsretligt beskyttet indhold, informationer og materiale (samlet ”Tredjemands Materiale”), som er beskyttet i henhold til gældende immaterialret og anden lovgivning. Du må kun bruge Tredjemands Materiale i forbindelse med lovlig brug af Tjenesterne. Medmindre andet følger af lovgivningen, må du ikke gengive, ændre, leje, lease, udlåne, sælge eller distribuere Tredjemands Materiale eller skabe afledte værker deraf eller bruge Tjenesterne uden tilladelse. Du må ikke bruge Tjenesterne på en måde, der kan chikanere, misbruge, forfølge, true, bagtale eller på anden måde krænke andres rettigheder, og Producenten er ikke ansvarlig, hvis dette alligevel skulle ske. Producenten er heller ikke ansvarlig, hvis du modtager chikanerende, truende, ærekrænkende, stødende eller ulovlige meddelelser eller beskeder i forbindelse med din brug af Tjenesterne. \n\n3.	Ingen garanti\n\nAlle Licensapplikationer og Tjenester leveres som de er og forefindes uden nogen udtrykkelige eller stiltiende garantier af nogen art. Producenten fraskriver sig særligt alle udtrykkelige og stiltiende garantier og vilkår i relation til Licensapplikationerne og Tjenesterne, herunder men ikke begrænset til garantier vedrørende salgbarhed, kvalitet, egnethed til formålet, rigtighed, brugsret og respekt af tredjemands rettigheder. Producenten indestår ikke for rigtigheden, gyldigheden, betimeligheden, lovligheden eller fuldstændigheden af Licensapplikationer og Tjenester leveret via Apparatet. Producenten garanterer heller ikke, at Apparatet, Licensapplikationerne eller Tjenesterne vil dække dit behov, eller at de vil blive leveret uden fejl og afbrydelser, eller at mangler ved Licensapplikationerne eller Tjenesterne vil blive udbedret. Såfremt Licensapplikationen eller Tjenesterne viser sig at være mangelfulde, bære du selv udgifterne til reparation og udbedring deraf.\n\nLicensapplikationerne og Tjenesterne kan til enhver tid og uden varsel ændres, suspenderes, fjernes, opsiges eller afbrydes, og adgangen til disse kan spærres. Producenten afgiver ingen oplysninger eller garantierklæringer om, at indholdet af Licensapplikationerne og Tjenesterne altid vil være tilgængelig. Indholdet overføres af tredjemand via netværk og overførselsfaciliteter, som Producenten ikke har kontrol over. Uden at begrænse ovennævnte fraskriver Producenten sig udtrykkeligt ethvert ansvar, hvis det indhold, der leveres fra Apparatet, ændres, afbrydes, spærres, fjernes eller suspenderes. Applikationsudbyderen og andre udbydere af Tjenesterne kan til enhver tid og uden varsel ændre, suspendere, fjerne eller spærre for adgangen til Licensapplikationen eller Tjenesterne. Producenten kan også til enhver tid og uden varsel begrænse brugen af eller adgangen til visse Licensapplikationer eller Tjenester uden at ifalde ansvar. \n\nProducenten tilbyder ikke kundeservice i relation til Licensapplikationerne og Tjenesterne. Alle spørgsmål og henvendelser vedrørende Licensapplikationerne og Tjenesterne skal rettes direkte til de respektive udbydere.\n\n4.	Indsamling og brug af data\n\nProducenten, Applikationsudbyderne og udbyderne af Tjenesterne kan indsamle og bruge tekniske data og informationer, herunder men ikke begrænset til tekniske data om Apparatet, system- og applikationssoftware og tilkoblet udstyr, med henblik på at levere softwareopdateringer, produktsupport og andre ydelser relateret til Apparatet og Licensapplikationen. Producenten, Applikationsudbyderne og udbydere af Tjenesterne har ret til at bruge disse informationer til at forbedre deres produkter og til at levere ydelser og teknologier, når blot de ikke afslører din identitet. For yderligere oplysninger om indsamling og brug af data henvises til vores databeskyttelsespolitik http://www.tcl.eu/en/. \n\n5.	Manglende tilgængelighed\n\nApplikationsudbyderen kan være underlagt begrænsninger, der gør, at det ikke er sikkert, at alle funktionaliteter, applikationer og tjenester vil være tilgængelige på dette Apparat (herunder på tilkoblet udstyr) eller i alle områder. Nogle funktionaliteter vil endvidere kræve tilkobling af supplerende udstyr eller betaling af medlemskontingent, hvilket købes særskilt.\n\n6.	Ansvarsbegrænsning\n\nI det omfang lovgivningen tillader det, fraskriver Producenten sig ethvert ansvar - herunder i tilfælde af uagtsomhed, og uanset om der er tale om erstatning i eller uden for kontrakt - for direkte og indirekte tab og følgeskader, advokathonorarer, udgifter og andre skader, der måtte opstå i forbindelse med oplysninger indeholdt i - eller som følge af din eller tredjemands brug af - Apparatet, en Licensapplikation eller en Tjeneste, også selv om Producenten måtte være orienteret om muligheden for en sådan skade\n\nProducenten er kun ansvarlig i tilfælde af forsæt eller grov uagtsomhed."];
var privacyNotice = ["\n\nVi respekterer din ret til beskyttelse ved behandling af personoplysninger. Denne meddelelse om databeskyttelse forklarer, hvilken enhed der er ansvarlig for behandling af de personoplysninger, vi indsamler fra dig i forbindelse med din brug af vores Smart TV-tjenester (\"Tjenesterne\"), hvilken slags personoplysninger vi indsamler om dig, hvad vi bruger dem til, og hvad dine rettigheder i den forbindelse er. \n\n1.	Dataansvarlig og repræsentant i EU\n\nIndsamling, behandling og anvendelse af de personoplysninger, der indsamles fra dig ved din brug af Tjenesterne, foretages af Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, Kina (\"Selskabet\"). Kontaktoplysninger på os og på vores repræsentant i EU er anført i pkt. 12 nedenfor. Det er dog ikke alle de nedenfor beskrevne databehandlingsaktiviteter, som vi er ansvarlige for. Vi har alligevel valgt at beskrive de respektive aktiviteter i denne meddelelse om databeskyttelse, fordi behandlingen er forbundet med din brug af Smart TV'et.\n\n2.	Samtykke til databehandling\n\nNogle af de databehandlingsaktiviteter, som vi foretager, kræver samtykke fra dig. Det gælder bl.a. vores behandling af  personoplysninger med henblik på forbedring af Tjenesterne.\n\nDet er frivilligt, om du vil give samtykke, og du kan stadig bruge Tjenesterne, også hvis du ikke samtykker. I så fald kan du dog få vist indhold, der ikke er skræddersyet til dine præferencer. Uanset om du giver samtykke eller ej, forbeholder vi os ret til at behandle personoplysninger om dig i det omfang, der er tilladt i henhold til gældende lovgivning.\n\nDu kan til enhver tid trække dit samtykke tilbage. Tilbagekaldelsen af samtykket vil ikke have nogen indvirkning på lovligheden af den behandling, der var baseret på samtykket, før det blev tilbagekaldt. Hvis du vil trække dit samtykke tilbage og/eller gøre indsigelse (se pkt. 10 nedenfor samt bilaget \"Dine rettigheder\" for nærmere om din ret til at gøre indsigelse), skal du ændre sikkerhedsindstillingerne for dit Smart TV i overensstemmelse hermed. \n\n3.	Specifikke kategorier af personoplysninger\n\nVi behandler særligt følgende typer oplysninger:\n\nEnheds-ID: Dit Smart TV har et unikt nummer, som sætter os i stand til at identificere og godkende Smart TV‹et, når du bruger Tjenesterne. Dette nummer kaldes Enheds-ID. \n\nIP- og MAC-adresse: Dit Smart TV vil få tildelt en IP-adresse ved forbindelse til internettet. Hvis dit Smart TV er bag en router (f.eks. i et lokalt netværk i hjemmet eller lokal WLAN), kan vi behandle IP-adressen for denne router. MAC-adressen er et unikt nummer, som er tildelt hvert netværksinterface i dit Smart TV. \n\nEnhedsspecifikke oplysninger: Smart TV'et lagrer en række oplysninger om sig selv og sin konfiguration. Det er bl.a. oplysninger om Smart TV-type, version af operativsystem, skærmopløsning, projekt-ID (dvs. oplysninger om konfigurationsfiler), brugeragent, browsernavn, browserversion, og hvilket sprog og land Smart TV'et er konfigureret til. \n\nDisse oplysninger vil blive anvendt af os og videregivet til vores tjeneste- og indholdspartnere til brug for de nedenfor anførte formål.\n\n4.	Formål og retsgrundlag for vores behandling og/eller brug af dine persondata\n\nFormålene med vores behandling af personoplysninger om dig samt retsgrundlaget herfor er nærmere beskrevet nedenfor. I de tilfælde, hvor vi nedenfor har anført kontraktopfyldelsesformål som vores retsgrundlag for behandlingen, kan vi ikke levere Tjenesterne til dig, hvis du ikke giver os de pågældende oplysninger. I de tilfælde, hvor vi som retsgrundlag har anført samtykke, er det helt frivilligt, om du ønsker at give dette samtykke eller ej. Hvis du ikke samtykker, vil vi ikke behandle dine personoplysninger til det pågældende formål.\n\n•	Levering af Tjenesterne: Oplysningerne om dit Smart-TV's IP- og MAC-adresse, Enheds-ID, version af operativsystem, kundetype og skærmopløsning, projekt-ID (dvs. oplysninger om konfigurationsfiler), DTV-kanalliste, sete kanaler, tidszone samt sprog- og landeindstillinger bruges til at give dit Smart TV adgang til Tjenesterne og tjenester fra indholdspartnere. Formålene er blandt andet, men ikke begrænset hertil, levering af positionsbaserede tjenester (f.eks. vejrudsigter), håndtering af eventuelt misbrug eller brud på sikkerhed, overvågning af Tjenesternes tilgængelighed og sikkerhedskopiering af brugerindstillinger.\n\nNår du bruger Tjenesterne, vil dit Smart TV efterspørge data fra Tjenesterne via internettet. I den forbindelse vil din IP-adresse og oplysninger om, hvilket sprog og land dit Smart TV er konfigureret til, blive sendt til vores tjenestepartner. Vores servicepartner vil behandle oplysningerne i overensstemmelse med sin egen meddelelse om databeskyttelse.\n\nRetsgrundlaget for behandlingen er kontraktopfyldelse, jf. art. 6, stk. 1, litra b), i den generelle databeskyttelsesforordning (\"Forordningen\"). \n\n•	Tjenesteindstillinger: Som en del af Tjenesternes normale funktionalitet kan du selv manuelt fastlægge, hvilken rækkefølge de forskellige apps skal vises i. Vores tjenestepartner vil gemme den valgte rækkefølge og andre indstillinger, du måtte foretage under din brug af Tjenesterne. Disse oplysninger vil blive knyttet til Enheds-ID'en.\n\nRetsgrundlaget for behandlingen er kontraktopfyldelse, jf. Forordningens art. 6, stk. 1, litra b).\n\n•	Autentificering: Hver gang du tilslutter dit Smart TV til internettet og tænder for Smart TV'et, vil det automatisk oprette forbindelse til Tjenesterne, som administreres af vores servicepartner. Smart TV'et vil derefter blive verificeret som godkendt (autentificeret) til at tilgå Tjenesterne. Til brug for denne autentificering gemmer Tjenesterne ét eller flere unikke, numeriske identifikatorer, der er tilknyttet dit Smart TV. Vi bruger Enheds-ID og MAC-adresse til autentificering. Enheds-ID'en vil også blive oplyst til udvalgte indholdspartnere til godkendelsesformål. Disse indholdspartnere bruger Enheds-ID'en til at godkende dit Smart TV til adgang til tjenester, der udbydes af en indholdspartner.\n\nRetsgrundlaget for behandlingen er kontraktopfyldelse, jf. Forordningens art. 6, stk. 1, litra b).\n\n•	Fjerndiagnosticering Som en del af Tjenesterne tilbyder vi fjerndiagnosticering. I den forbindelse behandler vi de oplysninger om Enheds-ID, enhedsnummer, serienummer, MAC-adresse, fejl-log, fejlkoder og fejlbeskrivelser, som vi automatisk modtager fra det fejlbehæftede modul (applikation, middleware-system).\n\nHvis du har ringet til vores kundesupport, vil supportmedarbejderen også (med forudgående tilladelse fra dig) kunne tilgå dit TV via fjernadgangen og udføre yderligere fjerndiagnosticering. I så fald får supportmedarbejderen adgang til dit TV og dine netværk, applikationer og lagrede datafiler og kan i den forbindelse behandle Enheds-ID, enhedsnummer, serienummer, MAC-adresse, fejl-log, fejlkoder, fejlbeskrivelser, Terminal-ID, oplysninger om installerede apps, screenshot af TV samt oplysninger om tilsluttede USB/Bluetooth-enheder med henblik på vurdering af tilstanden af TV'et og de tilknyttede applikationer og data. Fejl-loggen kan indeholde oplysninger, såsom TV-programhistorik, musikplayliste, brugernavn og adgangskode til app, i det omfang en til udsendelsen anvendt tredjemands-app ikke har krypteret oplysningerne. Formålet hermed vil være at diagnosticere problemer, ændre systemindstillinger på din anmodning eller udbedre indberettede fejl eller uhensigtsmæssigheder. Kundesupportmedarbejdere vil også, på anmodning, kunne foretage troubleshooting, afvikle programmer, installere eller af-installere software, rekonfigurere og/eller foretage anden service eller teknisk support på dit TV. \n\nEn eventuel fjernadgang vil først blive aktiveret, når du har godkendt det ved at klikke på den relevante boks på TV-skærmen, og slutter, så snart den pågældende session er ovre.\n\nRetsgrundlaget for behandlingen er kontraktopfyldelse, jf. Forordningens art. 6, stk. 1, litra b).\n\n•	Eftersalgsservice: Det er muligt, at du efter gældende lovgivning har garantirettigheder eller lignende rettigheder til eftersalgsservice. Det er TCL Europe, 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, Frankrig, som er ansvarlig for håndtering af krav under garanti og andre anmodninger om eftersalgsservice, og det er også dem, der er ansvarlig for den håndtering af personoplysninger, der finder sted i den forbindelse. I forhold til eftersalgsservice fungerer TCL Europe således som dataansvarlig, og vi er derfor ikke ansvarlige for deres behandling af dine personoplysninger.\n\nNår du efterspørger eftersalgsrelateret service, vil vi muligvis, for at kunne yde denne service, have brug for oplysninger som f.eks. dit navn, emailadresse, telefonnummer, serviceanmodning og postadresse på fakturaen. Disse oplysninger kan også blive indsamlet via samarbejdspartnere til vores forhandlere eller autoriserede serviceleverandører, hvis det er dem, du ringer til. Ønsker du nærmere oplysninger om beskyttelse af personoplysninger i forbindelse med eftersalgsservice, er du velkommen til at kontakte TCL Europe. Se kontaktoplysninger i pkt. 12 nedenfor.\n\nRetsgrundlaget for denne behandling er overholdelse af retlige forpligtelser i henhold til Forordningens art. 6, stk. 1, litra c).\n\n•	T-Channel: T-Channel er hovedsiden for anvendelse af Smart TV'et på Linux-styresystemet (om brug af android-styresystem, se venligst nedenfor), hvor du har mulighed for at vælge visse former for indhold.\n\nRetsgrundlaget for den behandling af personoplysninger om dig, som er nødvendig for din brug af T-Channel, er kontraktopfyldelse, jf. Forordningens art. 6, stk. 1, litra b).\n\nHvis du har givet samtykke hertil, vil vi også monitorere brugen af T-Channel, dvs.:\n\n	Når du begynder at bruge T-Channel, registrerer vi, hvornår du går ind på T-Channel, og hvornår du går ud af den igen.\n\n	Når du begynder afspilning af en video på T-Channel, registrerer vi videoens navn og varighed (gælder ikke Netflix, YouTube eller andre tredjemandstjenester).\n\n	Når du går ind på eller ud af en side, registrerer vi, hvor længe du blev på siden.\n\n	Når du bevæger cursoren fra ét sted til et andet, eller starter en app, registrerer vi det.\n\n	Når du installerer, fjerner eller opdaterer apps, registrerer vi det, inklusive navnene på de pågældende apps.\n\nDisse oplysninger indsamler vi primært til brug for big-data-analyser, som skal være med til at forbedre produkter og indholdstjenester til gavn for brugerne.\n\nRetsgrundlaget for behandlingen af dine personoplysninger i forbindelse med denne monitorering af din brug af T-Channel er dit samtykke, jf. Forordningens art. 6, stk. 1, litra a).\n\nHvis du har købt et Android TV og bruger Googles android-styresystem, vil dine personoplysninger blive behandlet af Google. Vi er ikke ansvarlige for Googles behandling. For oplysninger om Googles behandling af oplysningerne og om dine rettigheder i den forbindelse henvises til Googles meddelelse om databeskyttelse.\n\n•	T-Cast: Med T-Cast kan du betjene dit TV med din telefon og afspille videoer, musik og billeder fra din smartphone på dit TV. Med T-Cast kan du også spejle din smartphone på TV'et.\n\nDet er frivilligt, om du vil downloade og anvende app'en. Hvis du downloader og anvender app'en, behandler vi MAC-adressen for at beregne, hvor mange T-Cast-versioner der har været anvendt i markedet. Det er nødvendigt for at kunne tilbyde dig denne tjeneste. Hvis du gør brug af vores to-skærms-funktion, vil vi på vores servere indsamle og behandle oplysninger om, hvilke indstillinger du aktiverer i app‹en, samt dit Smart TV's sprog- og landeindstillinger, DTV-kanalliste, favoritkanaler, programlister, Enheds-ID, aktuelle kanal, protokolversion og IP-adresse. Derefter styres dit Smart TV af vores servere i henhold til dine valgte indstillinger i app'en.\n\nRetsgrundlaget for behandlingen er kontraktopfyldelse, jf. Forordningens art. 6, stk. 1, litra b).\n\n•	TCL Assistant: TCL Assistant er en funktion, hvormed dit TV kan tilsluttes Amazon Alexa-kompatible enheder (f.eks. Echo), så du ved hjælp af din stemme kan styre disse enheder. For at kunne bruge funktionen skal du først registrere dit TV på Amazons website ved hjælp af den TCL-kode, der står på dit TV. Du vil herefter kunne give mundtlige instrukser til Amazon Alexa-kompatible enheder ved at trykke på mikrofonknappen på fjernbetjeningen til dit TV.\n\nHvis du bruger TCL Assistant, optager TV'et din stemme og transmitterer optagelsen til Amazon Alexa Cloud med henblik på stemmegenkendelse og videre bearbejdning. Dine data overføres direkte til Amazon og vil hverken blive yderligere behandlet eller lagret lokalt på dit TV. For yderligere oplysninger om Amazons behandling af dine data henvises til Amazons egen meddelelse om databeskyttelse.\n\nRetsgrundlaget for behandlingen er kontraktopfyldelse, jf. Forordningens Art. 6, stk. 1, litra b).\n\n•	Alexa Voice Recognition (AVS): AVS er en funktion, som lader dig styre dit TV ved hjælp af din stemme. For at kunne bruge funktionen skal du først registrere dit TV på Amazons website ved hjælp af Amazons registreringskode for TV'et. Du vil herefter kunne give mundtlige instrukser til TV'et ved at trykke på mikrofonknappen på fjernbetjeningen til dit TV.\n\nHvis du bruger AVS, optager TV'et din stemme og transmitterer optagelsen til Amazon Alexa Cloud med henblik på stemmegenkendelse og videre bearbejdning. Dine data overføres direkte til Amazon. Der lagres ingen data lokalt på dit TV. For yderligere oplysninger om Amazons behandling af dine data henvises til Amazons egen meddelelse om databeskyttelse.\n\nNår du bruger AVS, vil vi skulle bruge navnet på dit TV for at kunne finde frem til, hvilket TV du ønsker at styre.\n\nRetsgrundlaget for behandlingen er kontraktopfyldelse, jf. Forordningens Art. 6, stk. 1, litra b).\n\nVi registrerer også, hvor ofte og hvor længe du bruger AVS, og hvilken funktion i AVS du bruger. Disse oplysninger indsamler vi for at forbedre produkter og indholdstjenester til gavn for brugerne.\n\nRetsgrundlaget for behandlingen er vores legitime interesser, jf. Forordningens Art. 6, stk. 1, litra f). Yderligere oplysninger om interesseafvejningen kan fremsendes efter anmodning.\n\n•	Softwareopdateringer: Softwareopdateringer er en del af Tjenesterne. Det betyder, at hver gang dit Smart TV er tændt, sender det os oplysning om IP-adresse, Enheds-ID, enhedsnummer, softwareversion, kundetype, projekt-ID (dvs. konfigurationsfiler), bruger-ID og serienummer for at søge efter softwareopdateringer, og for at du kan få og modtage relevante softwareopdateringer.\n\nRetsgrundlaget for behandlingen er kontraktopfyldelse, jf. Forordningens art. 6, stk. 1, litra b).\n\n•	Pålagt videregivelse: Vi kan blive pålagt at videregive data til politi eller domstole. Hvis det sker, vil vi kun gøre det på grundlag af juridisk bindende dokumenter, som f.eks. en arrestordre eller en retskendelse, som pålægger os at samarbejde med de pågældende myndigheder.\n\nRetsgrundlaget for behandlingen er overholdelse af retlige forpligtelser i henhold til Forordningens art. 6, stk. 1, litra c).\n\nBrug af Tjenesterne under anvendelse af pseudonym er tilladt, medmindre specifikke tjenester kræver, at du afgiver navn og/eller e-mail-adresse.\n\n5.	Databeskyttelse og sikkerhed for børn under 16\n\nVi forstår vigtigheden af at træffe særlige foranstaltninger for at sikre databeskyttelse og sikkerhed for de børn, som måtte bruge vores Tjenester. Børn under 16 år, eller tilsvarende anden minimumsalder som fastsat i den relevante jurisdiktion, må ikke afgive personoplysninger om sig selv via TV-apparatet, eller når de ringer efter eftersalgsservice, medmindre en forælder til det pågældende barn beviseligt har givet samtykke hertil.\n\nDa vi aldrig indsamler fødselsdatoer på brugerne, kan vi ikke se, hvor gammel en bruger er. Finder vi ud af, at vi uden et sådant samtykke har indsamlet personoplysninger om et barn under 16, eller tilsvarende anden minimumsalder som fastsat i den relevante jurisdiktion, vil vi tage skridt til at få oplysningerne slettet hurtigst muligt.\n\n6.	Tredjemands-apps\n\nDit Smart TV tillader brug af apps leveret af tredjemænd, f.eks. Netflix, YouTube eller HbbTV (\"rød knap\"-tjeneste leveret af TV-stationer). Du kan downloade disse apps fra App Store eller aktivere tredjemands-apps, som måtte være forudinstalleret på din enhed. Eventuelle tredjemands-apps, der måtte være forudinstalleret på din enhed, indsamler ikke personoplysninger uden forudgående godkendelse fra dig. F.eks.: Netflix ligger forudinstalleret på enheden, men indsamlet kun oplysninger, når du logger ind på din Netflix-konto. HbbTV indsamler kun oplysninger, når du giver samtykke hertil ved at trykke på den relevante knap på fjernbetjeningen.\n\nHvis du aktiverer en tredjemands-app, vil den pågældende app-udbyder muligvis behandle personoplysninger om dig. Vi er ikke ansvarlige for denne behandling. For oplysninger om behandlingen og dine rettigheder i din forbindelse henvises til den pågældende tredjemands meddelelse om databeskyttelse.\n\n7.	Kategorier af modtagere\n\nVi deler kun personoplysninger indsamlet i forbindelse med din brug af Tjenesterne med tredjemands-indholdspartnere, hvis du anmoder om bestemt indhold, som leveres af disse, og med tjenesteudbydere, der som databehandlere hjælper os med at levere Tjenesterne.\n\nVi vil kun videregive personoplysninger til øvrige tredjemænd, hvis vi er lovmæssigt forpligtet hertil (f.eks. til domstole eller anklagemyndigheder), hvis du har givet samtykke til videregivelse, eller hvis videregivelse i øvrigt er lovlig i henhold til gældende lov.\n\n8.	Lande, hvor dine data vil blive behandlet\n\nVi og/eller andre modtagere af dine persondata som anført ovenfor kan befinde sig uden for det Europæiske Økonomiske Samarbejdsområde (f.eks. i Kina eller i USA). Derfor kan dine personoplysninger blive behandlet i lande, hvor databeskyttelsesreglerne ikke giver samme grad af beskyttelse som lovgivningen i din jurisdiktion, og som ikke anses at yde et tilstrækkeligt databeskyttelsesniveau i forhold til Forordningen. Lande, som ud fra et europæisk databeskyttelsesperspektiv yder et tilstrækkeligt databeskyttelsesniveau, er bl.a. Andorra, Argentina, Canada, Schweiz, Færøerne, Guernsey, Israel, Isle of Man, Jersey, New Zealand og Uruguay. Modtagere i USA kan til dels være certificerede i henhold til Privacy Shield-aftalen mellem EU og USA og dermed anerkendt som ydende et tilstrækkeligt databeskyttelsesniveau ud fra et europæisk databeskyttelsesperspektiv.  \n\nHvor det er påkrævet, vil vi implementerende fornødne garantier i forhold til overførsel af data til modtagere uden for EU, som ikke yder et tilstrækkeligt databeskyttelsesniveau. Kopi af den pågældende foranstaltning kan rekvireres ved at kontakte os som anført i pkt. 12 nedenfor.\n\n9.	Opbevaringsperiode\n\nDine personoplysninger vil blive opbevaret, så længe det er nødvendigt for at kunne levere Tjenesterne til dig. For størstedelens vedkommende vil det normalt sige, at vi opbevarer oplysningerne i 1 måned. Hvor behandling sker til brug for fjerndiagnosticering eller eftersalgsservice, kan dine oplysninger dog blive opbevaret i op til 10 år. Når vi ikke længere har brug for dine personoplysninger for at opfylde kontraktlige eller retlige forpligtelser, vil vi fjerne dem fra vores systemer og registreringer og/eller tage skridt til at anonymisere dem, sådan at de ikke længere er personhenførbare.\n\n10.	Dine rettigheder\n\nI henhold til gældende databeskyttelseslovgivning har du ret til: at anmode om indsigt i dine personoplysninger, anmode om berigtigelse af dine personoplysninger, anmode om sletning af dine personoplysninger, anmode om begrænsning af behandlingen af dine personoplysninger, anmode om dataportabilitet, og gøre indsigelse mod behandlingen af dine personoplysninger. Bemærk, at ovennævnte rettigheder kan være begrænset i henhold til den nationale databeskyttelseslovgivning. For nærmere oplysninger om disse rettigheder, se venligst bilaget \"Dine rettigheder\".\n\nDu har også ret til at indgive klage til den kompetente datatilsynsmyndighed.\n\nØnsker du at udøve dine rettigheder, kontakt os da venligst som anført i pkt. 12 nedenfor.\n\n11.	Ændringer i meddelelse om databeskyttelse\n\nFor at forbedre vores Tjenester kan det være nødvendigt at ændre bestemmelserne i denne meddelelse om databeskyttelse - f.eks. ved indførelse af ny teknologi eller tilføjelse af nye tjenester. Vi forbeholder os ret til til enhver tid at ændre eller supplere denne meddelelse om databeskyttelse.\n\n12.	Kontaktoplysninger og repræsentant i EU\n\nHvis du har spørgsmål til denne meddelelse om databeskyttelse eller ønsker at klage over vores håndtering af dine personoplysninger, kan du kontakte os ved hjælp af følgende kontaktoplysninger:\n\nKontaktformular: www.tcl.eu/en/contact-us\n\nVores repræsentant i EU er: TCL Europe, som har adresse på 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, Frankrig. Du kan kontakte TCL Europe via ovenstående kontaktformular.\n\nVersion: 2.0\n\nBilag: Dine rettigheder\n\na.	Ret til indsigt: Du har ret til at få oplyst, om vi behandler personoplysninger om dig, og til i givet fald at få indsigt i disse oplysninger. De oplysninger, du kan få indsigt i, er bl.a. behandlingens formål, hvilke kategorier af personoplysninger der behandles, og hvilke modtagere eller kategorier af modtagere oplysningerne er eller vil blive videregivet til. Det er dog ikke nogen absolut rettighed, og din ret til indsigt kan begrænses af andre personers interesser.\n\nDu kan være berettiget til at modtage kopi af personoplysninger, som behandles. Hvis du beder om yderligere kopier, kan vi opkræve et rimeligt gebyr på svarende til de administrative omkostninger. \n\nb.	Ret til berigtigelse: Du har ret til at få berigtiget eventuelle fejl i dine personoplysninger. Afhængigt af behandlingens formål kan du have ret til at få ufuldstændige personoplysninger gjort fuldstændige, herunder ved afgivelse af en supplerende erklæring.\n\nc.	Ret til sletning (ret til at blive glemt): Du har under visse omstændigheder ret til at få dine personoplysninger slettet, og vi vil i så fald være forpligtet til at slette dem. \n\nd.	Ret til begrænsning af behandling: Du har under visse omstændigheder ret til at kræve begrænsning af behandlingen af personoplysninger om dig. I så fald vil de pågældende oplysninger blive markeret og må da kun behandles af os til visse formål.\n\ne.	Ret til dataportabilitet: Du har under visse omstændigheder ret til i et struktureret, almindeligt anvendt og maskinlæsbart format at modtage personoplysninger om dig selv, som du har givet til os, og til at transmittere disse oplysninger til en anden enhed uden hindring fra vores side.\n\nf.	Ret til at gøre indsigelser:\n\nDu har under visse omstændigheder ret til, på baggrund af din særlige situation, eller hvor personoplysninger om dig behandles med henblik på direkte markedsføring, at gøre indsigelse mod behandlingen, idet vi i så fald kan være forpligtet til at ophøre med behandlingen.\n\nHvis der sker behandling af personoplysninger om dig med henblik på direkte markedsføring, kan du endvidere til enhver tid gøre indsigelse mod denne behandling, herunder også profilering, i det omfang dette indgår i den direkte markedsføring. I så fald vil vi ikke længere behandle personoplysninger om dig til disse formål."];
var cookieNotice = ["\n\nVi respekterer vi din ret til beskyttelse af personoplysninger, når du bruger et Smart TV fremstillet af os og Tjenester leveret af os. Cookies er noget, der anvendes af mange websites og andre internettjenester. Dit Smart TV modtager, lagrer og transmitterer cookies, som skal sørge for, at disse websites og tjenester fungerer korrekt. \n\nVi anvender ikke selv cookies, når vi leverer Tjenesterne til dig. Der kan imidlertid være tredjemænd (f.eks. app-leverandører), som anvender cookies, når du bruger Smart TV'et til at tilgå deres tjenester. Denne meddelelse om cookies kan kun i begrænset omfang oplyse dig om sådanne tredjemands-cookies. For oplysninger om, hvilke cookies der anvendes af tredjemænd, og hvilke funktioner de har, henvises til de pågældende tredjemænds meddelelser om cookies. Nedenfor følger en kort, generel beskrivelse af, hvilke cookies der kan blive lagt på dit Smart TV, og hvordan du administrerer dem.\n\n1.	Hvad er cookies?\n\nCookies er små tekstfiler, som kan placeres på dit Smart TV. Når du på dit Smart TV tilgår et website eller via den røde knap aktiverer en TV-stations ekstratjenester, vil dette website eller denne ekstratjeneste muligvis installere en cookie på dit Smart TV. Ved efterfølgende besøg/aktiveringer vil denne cookie sende oplysninger tilbage til den part, der har placeret cookie'en. Cookies har opnået en enorm udbredelse og anvendes i dag på en lang række websites og tjenester. Hver cookie indeholder typisk navnet på det domæne, hvorfra cookie'en kommer, cookie'ens \"levetid\" og en værdi, som oftest et unikt tal. Du kan få mere at vide om, hvad cookies er, og hvordan de fungerer, på www.allaboutcookies.org.\n\nCookies kan opdeles i funktionelle cookies og ikke-funktionelle cookies. Funktionelle cookies er cookies, som er strengt nødvendige for leveringen af Tjenesterne. Ikke-funktionelle cookies er alle andre cookies.\n\n2.	Tredjemandswebsites\n\nNår du via Tjenesterne på dit Smart TV besøger tredjemandswebsites eller -tjenester, vil disse muligvis installere cookies på dit Smart TV og eventuelt også følge og logge din historik på de pågældende websites. Vi opfordrer ikke hertil og bruger ikke sådanne oplysninger. For nærmere om tredjemands brug af cookies henvises til de pågældendes meddelelser om cookies.\n\n3.	Sletning af cookies\n\nDin brugergrænseflade på dit Smart TV giver dig mulighed for at slette alle cookies og andre lokale browserlagringer fra Smart TV'et. Du rådes til at fjerne alle cookies og lokale indstillinger, hvis du på noget tidspunkt sælger eller bortgiver Smart TV'et\n\nVersion: 2.0"];
var privacyPolicy = ["Sæt kryds i afkrydsningsfeltet/-felterne herunder, hvis du vil bruge vores Smart TV-tjenester og relaterede tjenester. Brugen af disse tjenester kræver behandling af dine personlige data, som beskrevet i vores Notits om beskyttelse af personlige oplysninger: http://www.tcl.eu/en/","Aktivér Smart TV-tjeneste, lagring af indstillinger for tjenesten og automatisk godkendelse af Smart TV. Hvis du fjerner dette kryds, vil du kun have standard TV og HDMI.","Aktivér automatiske softwareopdateringer. Sæt kryds i dette afkrydsningsfelt for at holde dit produkt opdateret med de seneste softwareopdateringer og den bedste ydeevne.","(Softwareopdateringer er vigtige for, at dit TV fungerer korrekt, da de giver nye funktioner, stabilitet og sikkerhed. Vi anbefaler derfor, at du sætter kryds i dette afkrydsningsfelt.)","Sæt kryds i afkrydsningsfeltet herunder, hvis du giver tilladelse til, at vi desuden behandler dine personlige data til følgende formål. For yderligere oplysninger om, hvordan vi behandler dine personlige data, se vores Notits om beskyttelse af personlige oplysninger: http://www.tcl.eu/en/","Jeg giver tilladelse til behandling af mine personlige data (fx tidspunkt for hvornår, jeg starter og afslutter T-Launcher) med det formål at forbedre TCL’s produkter og med henblik på levering af bedre indholdstjenester på Smart TV."];
var termsFirTitle = ["Vilkår&Betingelser","Privatlivspolitik","Meddelelse om cookies"];
var termsSecTitle = ["Læs og acceptér vilkår & betingelser.","Du skal læse og acceptere privatlivspolitikken.","Du skal læse og acceptere cookiepolitikken."];
var tickall = "Markér alle";
var tickremindWords = "Markér alle afkrydsningsfelterne. Ellers kan du ikke nyde Smart TV-tjenesten.";