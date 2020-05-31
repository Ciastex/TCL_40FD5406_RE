
var all_country 	= ["Australia","Østerrike","Belgia","Bulgaria","Kroatisk","Tsjekkia","Danmark","Finland","Frankrike","Tyskland",
						"Hellas","Ungarn","Italia","Luxemburg","Nederland","Norge","Polen","Portugal","Romania","Russland",
						"Serbia","Slovenia","Spania","Sverige","Sveits","Storbritannia","New Zealand"," "/*Arab*/,"Estland"," "/*Hebrew*/,
						"Latvia","Slovakia","Tyrkia","Irland","Japan","Filippinene","Thailand","Maldives","Uruguay","Peru",
    					"Argentina","Chile","Venezuela","Ecuador","Costa Rica","Paraguay","Bolivia","Belize","Nicaragua","Guatemala",
						"Kina","Taiwan","Brazil","Canada","Mexico","United States","South Korea","Romania","Vietnam"/*新添加的，底层结构体中没有*/,"Ukraina"/*新添加的，底层结构体中没有*/,
    					"Iran","Iraq"," ","Kazakhstan","Uzbekistan"," ","Kyrgyzstan","Algeria","Egypt","Tunisia",
    					"Tanzania","Kenya","Pakistan","Indonesia","Kuwait","Saudi Arabia","Qatar","Israel","Lebanon","bahrain",
    					"Angola","Congo","India","Turkmenistan","Colombia","Mongolia","Bangladesh","Nepal","Sri Lanka","North Korea",
						"Moldova","Polynesia","EI Salvador"," ","Fiji","Liberia","Jordan","Myanmar","Ghana","Georgia",
    					"Armenia","Oman","yemen","Syria","Palestine","Afghanistan","Morocco","benin","IvoryCoast","Nigeria",
    					"Sudan","Ethiopia","Zambia"," ","South Africa","mozambique","Libya","Albansk","Belarus","Iceland",
						"Litauen","Mauritius","Dubai","UAE","Tajikistan","Bengal","Bosnia Hercegovina","Kypros","Kosovo","Makedonia",
						"Malta","Montenegro","Cameroun","Singapore","Malaysia","NewCaledonia","Suriname","Jamaica","Curacao","Aruba",
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
				
var all_language 	= ["Tsjekkisk","*","Dansk","*","*","Tysk","Engelsk","Fransk","Gresk","Spansk",
						"Kroatisk","*","Italiensk","Ungarsk","Nederlandsk","Norsk","Polsk","Portugisisk","Russisk","Rumensk",
						"Slovensk","Serbisk","Finsk","Svensk","Bulgarsk","Slovakisk","Chinese","*","Gælisk","*",
						"Walisisk","Arabisk","Irlandês","Latvian","*","Tyrkisk","Estonian","Nederlandsk"/*Netherlands*/,"Korea","*",
						"Hindi","*","*","Mandarin","kantonesisk","maori","Original lyd"/*Qaa*/,"Ikke definert"/*Undetermined*/,"*","Ukjent",
						"Ikke definert","*","*","*","*","*","*","*","*","*",
						"*","*","*","Albansk","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baskisk","*","*",
						"*","*","*","*","*","*","*","Bosnisk","*","*",
						"*","*","*","*","Bielorusso","*","*","Katalansk","*","*",
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
						"*","*","*","*","*","Romantikk","*","*","*","*",
						"*","*","*","Samisk","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Tekst-tv ",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukrainian","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Av","På"];
var okCancel		= ["OK","Avbryt"];
var yesNo			= ["JA","NEI"];
var level			= ["Av","Lav","Høy","Midten"];
var manualAuto		= ["Manuell","Auto"];
var homeShop		= ["Hjem","Handle"];
var picPreset		= ["Standard","Dynamic","Naturlig","Kino","Bruker"];
var picColorTemp	= ["Kald","Normal","Varm","Bruker"];
var pic3dNavig		= ["Manuell","Auto","Semi-auto"];
var _3dOptions		= ["3D-modus","3D-til-2D","Venstre/høyre-justering","Dybdeskarphet"];
var pic3DMode       = ["Av","2D-til-3D","Side-ved-side","Topp og bunn","Linjeflettet"];
var picEcoOptions	= ["Energisparing","Lyssensor","Lokal demping","Miks-dimming"];
var picGeoOptions	= ["Geometri","H. posisjon","V. posisjon","Klokke","Fase"];//Geometry 无翻译
var picAdWhiteBal	= ["R økning","G økning","B økning","R Offset","G Offset","B Offset"];
var souOptions		= ["Forh.inst. lyd","Balanse","Lydforsinkelse","SRS TSHD","Auto volumkontroll",
						"SPDIF-Type","SPDIF-forsinkelse","TV-plassering","Lydspråk","Lydkanal",
						"Lydbeskrivelse","Bassforsterkning","Dolby Digital Plus"];
var souSpdifType	= ["Auto"/*Dolby*/,"PCM","Av"];
var colorSpace      = ["Auto","Opprinnelig","Bruker"];
var souPresetPara	= ["100Hz","500Hz","1.5KHz","5KHz","10KHz"];
var chOptions		= ["Søk kanal","Kanalliste","EPG","Kanalorganisator","Kanaldiagnostikk",
						"lagring","Undertekst","Tekst-tv ","Kanallistetype"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Signalstyrke","Signalkvalitet","Frekvens (KHz)","Serice-ID","Nettverk-ID","Nettverknavn"];
var chScanOptions	= ["Land / Område","Tunermodus","Automatisk søk","Oppdater søk","Analog manuellsøk",
						["Kabel manuell skann","Antenne man. skanning","Manuell tuning av satellitt"],"Satellittantenneoppsett","Velg favorittnettverk ","Tøm kanalliste","LCN"];
var favNetDes		= "Velg foretrukket nettverk";
var tuner			= ["Kabel","Antenne","Satellitt"];//Satelite 无翻译
var passError		= "Feil passord.\nPrøv igjen!";
var chType			= ["Analoge kanaler: ","Digitale kanaler: "];
var chScanStatus	= ["Status: Skanner","Status: Søket er fullført","Status: Avbryt søk","Status: Feil med søk"];
var chScanPara		= ["Frekvens (KHz)","Modulering","Symbolrate (Ksym/s)","Nettverk-ID","System",
						"Fininnstille","Signalstyrke","Signalkvalitet","Skannemodus","Kanal-ID"];
var chScanParaMHZ      = ["Frekvens (MHz)"];
var chAtvManSys		= ["VEST EUR","ØST EUR","UK","Frankrike"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Auto"];
var chCleanDes		= "Ønsker du å tømme kanallisten?";
var chDeletDes		= "Ønsker du å slette kanalen?";
var chOperator		= ["Ziggo","UPC","Andre"];
var chScanType		= ["Digital & Analog","Digital","Analog"];
var chScanMode		= ["Full","Avanser","Hurtig"];
var bookingModes	= ["Ta opp","Påminner"];
var dayName			= ["Sø","Ma","Ti","on","to","fr","lø"];
var monthName		= ["jan", "feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des"];
var filter			= ["Filter","Type","Undertype"];
var chEpgFirstGenre	= ["Kino","News","Vis","Sportsspill","Barn","Musikk","Kunst","Sosial","Utdanning","Fritid","Spesiell"];
var chEpgSecondGenre= [["Drama","Detektiv","Eventyr","Science Fiction","Komedie","Såpe","Romantikk","Seriøs","Voksen film"," "," "," "],
						["Aktuelle forhold","Værvarsel","Nyhetsmagasin","Dokumentar","Diskusjon"," "," "," "," "," "," "," "],
						["Vis","Spillshow","Blandingsshow","Talk Show"," "," "," "," "," "," "," "," "],
						["Sportsspill","Spesielle innslag","Sportsmagasiner","Fotball","Tennis",
							"Teamsporter","Idrettsutøver","Motorsport","Vannsport","Vintersport",
							"Kunstrytter","Kampsport"],
						["Barn","Førskolebarns","Underholdning for 6 til 14","Underholdning for 10 til 16","Informasjon","Tegnefilmer"," "," "," "," "," "," "," "],
						["Musikk","Rock","Seriøs","Folkemusikk","Jazz","Musikal","Ballett"," "," "," "," "," "],
						["Kunst","Kunster","Fin kunst","Religion","Populær kultur",
							"Litteratur","Film","Eksperimentell","Kringkasting","New media",
							"Kunstmagasiner","Mote"],
						["Sosial","Magasiner","Økonomi","Spesielle personer"," "," "," "," "," "," "," "," "],
						["Utdanning","Natur","Teknologi","Medisin","Utland","Samfunnsvitenskap","Videreutdannelse","Språk"," "," "," "," "],
						["Fritidshobbyer","Turisme","Håndverk","Motor","Fitness og helse","Matlaging","Reklame","Hagestell"," "," "," "," "],
						["Opprinnelig språk","Svart-hvitt","Upublisert","Direktesending"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Hopp over kanal","Sortere kanaler","Redigere kanaler","Kanal slett","kanal bytteavtalen","kanal Sett inn"];
var chEditPara 		= ["Nettverknavn","Kanalnummer","Kanalnavn","Frekvens","Fargesystem","Lydsystem"];
var chSatTitles		= ["Satellittype","Satellittantenneoppsett","Velg satellitt"];
var chSatEidtOptions= ["Satelittnavn","Posisjon","LNB Makt","LNB-frekvens (MHz)","Diseqc-inngang",
						"Tone 22KHz","tone burst","Frekvens (KHz)","Symbolrate (Ksym/s)","Polarisering",
						"Signalstyrke","Signalkvalitet","Satellittstatus"];
var chSatAutoPromt	= [["Alle","Nettverk"],
						["Alle","Gratis"]];
var chSatAutoScanOptions=["Velg satellitt","Skannemodus","Kanaler"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Universiell",];
var chSatDiSEqCInput= ["Utkoble","A","B","C","D"];
var chSatTone22KHz	= ["Auto","På","Av"];
var chSatToneBurst	= ["Utkoble","tone burst A","tone burst B"];
var chSatPolarization= ["Horisontal","Vertikal"];
var chSatSetupOptions=["Antennetype","Tuner","Båndfrekvens"];
var chSatAntennaType= ["Enkeltkabel","Universiell"];
var chSatUserBands	= ["Brukerbånd 1","Brukerbånd 2","Brukerbånd 3","Brukerbånd 4","Brukerbånd 5","Brukerbånd 6","Brukerbånd 7","Brukerbånd 8"];
var chSatOthers		= ["Transponder"];
var chSatSetupOthers= ["Brukerdefinert"];
var pleaseSelectSat = "Velg satellitter først!";
var subOptions		= ["Undertekst","Språk, digital undertekst","2. språk, digital undertekst","Type undertekst"];
var ttxOptionsCon      = ["Språk dekodingsside","Digital tekst-tv språk"];
var subType			= ["Normal","Hørselshemmede"];
var netIntf     	= ["Eternett","Trådløst"];
var netConnDes		= ["TV tester nettverksforbindelsen.\nVennligst vent",
						"Nettverkstilkoblingstesten er vellykket!",
						"Nettverkstilkoblingstesten mislykkes."];
var netSsidError	= "Gyldig lengde på SSID er 1 ~ 32 tegn. Vennligst sjekk SSID.";
var netOthers		= ["PIN-kode "];
var netWlessAutoDes	= ["Vennligst sørg for at følgende PIN-kode er forbundet med tilgangspunktet før du klikker OK.",
						"Vennligst trykk på knappen til tilgangspunktet innen 120 sekunder før du klikker OK."];
var netConnRemind	= ["Feil passord!",
						"Kobler til. Vennligst vent...",
						"Tilkobling vellykket og IP mottatt!",
						"Feil på lenke",
						"TVen søker etter APer'\nVennligst vent",
						"Det er ingen trådløs enhet koblet til TVen!"];
var netWireIpOptions= ["IP-innstilling","Adressetype","IP-adresse","Subnet mask","Standard gateway","Primær DNS","Sekundær DNS"];
var netWireConnRemind= ["Vennligst tast inn en verdi mellom 0 og 255.",
						"Tilkobling OK.",
						"Skriv inn en gyldig adresse",
						"Tilkobling OK.",
						"Tilkobling mislyktes!",
						"Kobler til. Vennligst vent...",
						"Skriv inn en verdi på mellom 1 og 223."];
var netFlixOptions	= ["Deaktiver","ESN","Netflix-versjon"];
var netFlixDes	 	= ["Er du sikker på at du vil deaktivere?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Programoppdatering";
var netUpdateDialogTitle = "Programvareoppdatering";
var netBGDownloadTitle 	= "Laster ned";
var netUpdateLoadingPrompt= ["Søker etter oppgradering, vennligst vent!",
							"Programvaren lastes ned... Vennligst vent!",
							"Vennligst ikke slå av TV-apparatet under softwareoppdateringen!",
                            "Programvareoppdateringen lastes ned automatisk i bakgrunnen!"];
var netUpdatePrompt= ["Gratulerer, du har den nyeste programvareversjonen!",
						"Den nye programvareversjonen XXXX ble funnet. Ønsker du å laste ned nå? Dette kan ta noe tid avhengig av nettverksstatusen din.",
						"Kunne ikke logge inn!",
						"Klarte ikke å motta data, prøv igjen senere!",
						"Feil ved spalting XML-oppdatering!",
						"Feil på lenke",
						"Programvarenedlasting vellykket! Vil du begynne å flashe?",
						"Data tapt! Kunne ikke laste ned!",
						"Kunne ikke sjekke pakken, vennligst prøv igjen!",
						"Nettverket er uvanlig. Vennligst sjekk og koble til igjen…",
						"Kunne ikke oppdatere. Start TV-en på nytt!",
						"Oppgraderingsfilen ble uventet slettet. Oppgrader nettverket igjen.",
						"Nedlastingen av programvaren i bakgrunnen var vellykket. Vil du foreta oppgraderingen?"];
var netUpdateButtonText = ["Last ned", "Oppdater", "Senere", "Aldri", "OK","Fortsett"];
var autoDetectPrompt = ["Den nye programvareversjonen XXXX ble funnet. Ønsker du å laste ned nå? Dette kan ta noe tid avhengig av nettverksstatusen din.",
						"Den nye programvareversjonen XXXX er funnet. Ønsker du å oppdatere nå?",
						"Oppgraderingsprosessen av nettverket ble avbrutt siste gang. Du må foreta oppgraderingen igjen.",
                        "Nedlasting av ny programvareversjon XXXX er ikke fullført. Ønsker du å fortsette nå?",
                        "Programvaren er lastet ned, ønsker du å oppdatere nå?"];
var sysOptions		= ["Elektronisk bruksanvisning","OSD-språk","Tidsoppsett","Lås","Inngangsinnstillinger",
						"Programoppdatering","Lokalisering","HbbTV-modus","Informasjonskapsler","Felles grensesnitt",
						"Avanserte innstillinger","Fabrikkinnstillinger","LED-indikator","Umiddelbar påslåing","Auto butikkmodus","Area","Demomodus"];
var sysResetDes		= "Er du sikker?";
var sysMenuLangOptions=["Språk","Foretrukket lydspråk","Foretrukket talespråk, andre"];
var sysTimerOptions	= ["Tidssone","Regionnavn","Klokke","Sovtidsur","Automatisk standby", "Country region"];

var sysTimeZone		= ["Som kringkaster","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Av","10 Min","20 Min","30 Min","40 Min","50 Min","60 Min","90 Min","120 Min"];
var sysStandby		= ["Av","4 timer","6 timer","8 timer"];
var sysRegionName	= ["Madrid","Canary"];
var sysClockOptions	= ["Auto synkronisering","Dato","Tid","På-telleverk","Tidsoppsett",
						"Slå på kanalen","Av-telleverk","Tidsoppsett"];
var sysTimer		= ["Av","Daglig","En gang"];

var sysInputSet		= ["Ingen etikett","DVD","Blu-ray","HDD","DVDR",
						"HD-oppt.","Spill","VCR","PC","Digital STB",
						"HD dig STB","Kamera","Opptaker","Annet"];
var sysAvVideoInput	= ["Auto","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["Via USB","Via Nettverk","Ved kanal"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Finner ikke ny programvare på luften!",
						"Den nye programvareversjonen XXXX er funnet. Ønsker du å oppdatere nå?",
						"Vennligst sett inn USB-pinnen.",
						"Kunne ikke sjekke pakken, vennligst prøv igjen!",
						"Vennligst IKKE fjern USB-donglen eller slå av TV-apparatet mens fastvaren oppdateres!",
						"Programvaren har blitt oppdatert.\nTV-apparatet vil starte på nytt!",
						"Den nye programvareversjonen XXXX ble funnet. Ønsker du å laste ned nå? Dette kan ta noe tid avhengig av nettverksstatusen din.",
						"Laster ned",
						"Programvarenedlasting vellykket! Vil du begynne å flashe?",
						"Oppdat.-feil!",
						"Søke oppgraderingsfiler",
						"Programvaren har blitt oppdatert.\nVennligst start TV-en nå."];
var sysProductInfo	= ["Aktuell versjon","Produktnavn","Produsentens navn","Navn på chassis"];
var sysCiDes		= ["Ingen CI-kort presen."];
var sysAdOptions	= ["Registrering av DivX(R) ","DivX® avregistrering","T-Link","Authorization Error","Avregistreringsbekreftelse",
						"Leiebekreftelse","Leie utgått"];
var sysRegistDes	= ["Du må registrere enheten for å spille DivX-beskyttede videoer",
						"Registreringskode:",
						"Registrer deg på http://vod.divx.com"];
var sysDregistDes	= ["Avregistreringskode:",
						"Avregistrer på http://vod.divx.com",
						"Fortsette registrering?"];
var mediaAuthorization = ["Enheten din er ikke autorisert til å spille av denne DivX(R)-beskyttede videoen."];
var deregistrationConfrimation = ["Din enhet er allerede registrert.","Er du sikker på at du ønsker å avregistrere?"];
var rentalConfirmation = "DivX(R)-leien har brukt XXXX ut av YYYY visninger. Fortsett?";
var rentalExpired 	= "DivX(R) leie har brukt XXXX av YYYY visninger. DivX leie er utløpt.";

var parentalRatingNA		= ["***","***","***","***","***","***","***","***"];
var parentalRatingOptionUS		= ["***","***","***"];
var sysTVRatingUS=["***","***","***","***","***"];
var sysMPAAUS=["***","***","***","***","***","***"];
var parentalRatingOptionCanada		= ["***","***","***"];
var sysCanadaEng=["***","***","***","***","***","***"];
var sysCanadaFre=["***","***","***","***","***",""];
var sysResetRRT=["***"];
var sysLockOptions	= ["Blokker kanal","Tidsintervallås","Programsperre","Blokker inntasting","Frontpanellås","Lås installasjon",
						"Endre passord","Maks volum","Slett alle"];
var sysTimeIntervals= ["Låstype","Starttid","Stopptid"];
var sysRatingOptions= ["Ingen","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","X-rangert (Spania)"];
var changePass		= ["Endre passord","Nytt passord","Bekreft passord"];
var changePassDes	= ["Feil passord.\nPrøv igjen!",
						"Passord samsvarer ikke.\nPrøv igjen!",
						"Passord valgt!",
						"Koden er for enkel til å bli angitt som passord.\nPrøv på nytt."];
var sysPowerOnChOptions= "Velg modus";
var sysPowerOnCh	= ["Siste status","Brukervalg"];
var netWlessSecu    = ["Åpen","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Ingen","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Støttes ikke"];
var netWlessSecu3	= ["Ingen","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Støttes ikke"];
var netOptions		= ["Internettforbindelse","Grensesnitt","Trådløse innstillinger","IP-innstillinger","Informasjon",
						"Tilkoblingstest","DLNA","TV-kontroll","Netflix-innstillinger","Wifi-visning",
						"Adressetype","IP-adresse","Subnet mask","Standard gateway","Primær DNS",
						"Sekundær DNS","SSID","BSSID","Vennligst tast inn SSID:","Bruker-ID"];
var chEditDes		= ["Duplisert kanalnummer!","Trykk på den røde tasten for å slette gjeldende tegn!","Ugyldige kanalnumre."];
var chEpgNoProgram	= "Ingen programinfo akkurat nå, vennligst søk etter kanaler først!";
var chEpgWords		= ["Programguide","Ingen programdata.","Kanal låst!","Ingen programdetaljer.","Ingen programtittel."];
var chEpgBooking	= ["Planlegg info", "Kanalnummer","Startdato","Starttid","Stopptid",
						"Gjenta-type","Plantype","Legg","Bytt ut","Endre",
						"Legg til/Rediger"];
var epgHotKey		= ["Forr dag","Neste dag","Filter","Planleggingsliste","Legg til plan"];
var chEpgBookRemind	= ["Ugyldig starttid","Ugyldig endetid","Duplisert timeplan","Vellykket lagret.","Slettet."];
var chSchePara		= ["Planleggingsliste","Starttid","Startdato","Programtittel","Kanalnavn",
						"Varighet","Gjenta","Timeplan","Endre","Slett"];
var dateTimer		= ["En gang","Daglig","Ukentlig"];
var scheduleDeleteReminds="Ønsker du å slette denne tidsplanen?";
var scheduleNoLists	= "Det er ingen tidsplanliste. Trykk \"Red\"-knappen for å legge til.";
var chListWords		= ["Kanalliste","Velg liste","Tunermodus","Legg til i Favoritter","Fjerne",
						"Velg kanalliste","Velg tunermodus","Bytt"];
var chListType		= ["Alle","Digital","Analog","Radio","Gratis","Favoritter"];
var chAutoScanOptions=["Velg operatør","Kanaltype","Automatisk søk"];
var souSoundType	= ["Ugyldig","Mono","Mono","Stereo","Stereo",
						"SAP","SAP","Dual1","Dual2","Dual2",
						"Nicam mono","Nicam stereo","Nicam dual1","Nicam dual2","Nicam dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Musikk","Kino","Klar stemme","Standard","Bruker"];
var picAdRgbMode	= ["Av","Kun rød","Kun grønn","Kun blå"];
var picAdOptions	= ["DNR","MPEG NR","RGB mode","Dynamic Contrast","LED bevegelsesklarhet",
						"Hudtone","Filmmodus","Spillemodus","Fargetemperatur","Hvitbalanse",
						"Frys","svart Stretch","Overskan.","Gamma","HDMI-modus","10P hvitbalanse","Fargeutvidelse",
						"Reduksjon av uskarphet","Flimmerreduksjon","Fargerom","Motion-klarhet"];
var pic10Pwhite     = ["Intervall","Rød","Grønn","Blå","Tilbakestill","Farge","Gul","Cyan","Magenta"];
var picMotionClarity = ["Motion-modus","Motion-interpolering","LED bevegelsesklarhet","Reduksjon av uskarphet","Flimmerreduksjon","Tilbakestill"];
var picMotionMode   = ["Film","Myk","Tøm","Sport","Kunde"];
var picResetDes		= "Alle egendefinerte innstillinger vil bli nullstilt. Er du sikker på at du ønsker å foreta den valgte handlingen?";
var pic10PReset     = "Er du sikker på at du vil nullstille 10P hvitbalanse?";
var picMotionReset  = "Ønsker du å nullstille Motion-klarhet?";
var picColorSpaceReset    = "Er du sikker på at du vil nullstille fargerom?";
var picOptions		= ["Bildemodus",
						"Bakgrunnsbelysning","Lysstyrke","kontrast","Metning","NYANSE","Skarphet","Fargetemperatur","Skjermmodus","Autoformat",
						"Sportsmodus","3D","3D-navigasjon","ECO Innstillinger","Geometri",
						"Avanserte innstillinger","Bildenullstilling","Micro Dimming"];
var picSize			= ["16:9 format", "4:3-format", "14: 9-format", "Cinerama",
						"16:9 Zoom", "16:9 Zoom felfelé","14:9 Zoom","Megnyújtás zoom","Széles zoom",
						"Zoom 2","Széles zoom 2","Tilpass til skjerm","Pontonkénti","Original","Panorama"];
var others			= ["Volum","Kringkasting","Passord","Status","Lagre","Bytt ut","Start","Avslutt","Søk","Slett",
						"Ingen","Automatisk","Søk","Sikkerhet","Koble til","Oppfrisk","Prøv","Stopp","Innstillinger","Kanaler",
						"Endre","Sett inn","Signal!","Ende","Stereo","Audio","Hoved","Ingen lyd","Tips","Tilbakestill",
						"Kunde","Oppsett","Lagre","Bruker","Lukk tastatur","Sikkerhetsmodus","Hver dag","PVR-liste"];
var direction		= ["Venstre","Høyre","Opp","Ned"];
var audioType 		= ["MPEG","DOLBY AUDIO"/*"AC3"*/,"MPEG4","AAC", "DOLBY AUDIO"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Ukjent"];
var soundChannels   = ["Ukjent","Mono","Under","Dual Mono","Stereo","Stereo Sub","Stereo Dolby Surround","Surround 2CH","Surround","3.0Ch","4.0Ch","5.0Ch","Mono Lfe","Dual Mono Lfe","Stereo Lfe","Surround 2Ch Lfe","Surround Lfe","3.1Ch","4.1Ch","5.1CH","7.1CH","Joint Stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Venstre","Høyre","Andre"];
var prompts			= ["Juster til bildeinnstillingen som best passer omgivelsene dine.",
						"Juster lysstyrken. Jo nærmere 100, jo lysere.",
						"Juster kontrastnivåene. Jo nærmere 100, desto større forskjeller mellom mørkt og lyst i bildet.",
						"Juster metningsnivåene. Jo nærmere 100, desto sterkere farger.",
						"Juster skarpheten. Jo nærmere 100, desto klarere detaljer.",
						"Juster bakgrunnsbelysningen. Jo nærmere 100, desto lysere skjerm.",
						"Juster fargetonenivåene. Denne innstillingen modifiserer fargetonene.",
						"Velg bildeformatet som best passer programmet som står på.",
						"Konfigurer energisparingsalternativer.",
						"Juster skjermgeometriinnstillingene når du kobler til en PC.",
						"Velg flere bildeavanserte innstillinger.",
						"Nullstill alle bildeinnstillinger til standard.",
						"Velg et lydmodus som best passer din personlige preferanse.",
						"Juster volumbalansen mellom venstre og høyre kanal.",
						"Sound Retrieval System TruSurround HD yter med en rik lydopplevelse og klarhet på lave og høye frekvenser.",
						"Digital Interface Format kobler TV-ens digitale lydutgang til hjemmekino-lydutstyr.",
						"Velg et lydspråk som best passer din personlige preferanse.",
						"Aktiver funksjonen for synshemmede for å nyte TV-programmer.",
						"Sjekk TV-bilde, lyd og signal.",
						"Velg kanallistetype for å tilpasse TV-signalet ditt.",
						"Velg språket for programmets undertekster som vises på bunnen av skjermen.",
						"Se gjeldende kanals tekst og bilder.",
						"Digital Living Network Alliance. Spill av musikk, bilder og video via hjemmenettverket fra andre enheter, f.eks. datamaskin.",
						"Vis smarttelefoninnholdet ditt på TV-en og bruk smarttelefonen som en fjernkontroll for TV-en.",
						"Vis innhold fra en Miracast-kompatibel Android-enhet på TV-skjermen din.",
						"Lås TV-en din.",
						"Velg et navn på enheten din.",
						"Velg omgivelsene dine.",
						"Nullstill alle systeminnstillinger til standard.",
    					"Switch off sports mode for more options.",
    					"Forbedre omgivelseskontrasten",
    					"En egen modus for sportsarrangementer",
    					"Få flere CEC-funksjoner."];
var initialTitle	= ["Velkommen","Første gangs oppsett"];
var initialPrompt	= ["Gjennomfør den innledende installasjonen nå og en verden av spennende opplevelser venter deg!",
						"Velg språket ditt:",
						"Velg land / område:",
						"Velg ditt sted:",
						"Vennligst velg din nettverkstype:",
						"Vennligst velg kablet nettverkstilkobling:",
						"Kunne ikke koble til xxxxxxxxx! Vennligst koble enheten i henhold til følgende diagram eller velg venstre for å nullstille.",
						"Koblet til xxxxxxxxx! Velg høyre for å fortsette.",
						"1) TV-apparatet har kanskje allerede en innebygd trådløs adapter\n2) Eller, hvis det følger med en trådløs USB-adapter, koble den til TV-apparatet.  Velg deretter modus for trådløs nettverkstilkobling.",
						"Søker... Vennligst vent...",
						"Det er ingen trådløs enhet koblet til TVen!",
						"Vennligst se til at følgende PIN-kode er installert på APen før du klikker på \"Neste\"-knappen under.",
						"Trykk på knappen på det trådløse tilgangspunktet i løpet av 120 sekunder før du trykker høyre!",
						"WPS (Wi-Fi Protected Setup)",
						"PIN-kode",
						"PBC (Push Button Configuration)",
						"Følgende innhold kan bare vises med en nettverkstilkobling. Vil du hoppe over nettverksoppsettet?",
						"Det venter nye programvareoppdateringen på deg. Nedlastningstiden avhenger av nettverksstatusen din.",
						"Oppdatering av TV-programvaren sikrer at du kan nyte alle de seneste funksjonene og tjenestene.",
						"Du vil ikke ha tilgang til de nyeste funksjonene og tjenestene. Vil du hoppe over programvareoppdateringen?",
						"Trykk på høyreknappen for å fortsette.",
						"Ikke slå av enheten under oppdatering, da dette kan føre til at TV-en slutter å fungere optimalt.",
						"Hvis du ikke ønsker å oppdatere, velger du NEI.",
						"Oppdaterer, vennligst vent!",
						"Du kan også oppdatere programvaren i SYSTEM/PROGRAMVAREOPPDATERING.",
						"Landet som er valgt ber om passordinnstilling.\nAngi koden for din TV og bekreft den.",
						"This code is too simple.\nPlease use different digits.",
						"Gratulerer! Førstegangs oppsett er fullført. Du kan endre innstillingene via hovedmenyen og undermenyene.",
						"Vennligst velg sikkerhetsmodus:",
						"Vennligst velg modus for trådløs nettverkstilkobling:",
						"Nettverk"];
var initNetCabAndDonRe = ["Ingen koblet nettverkskabel er tilkoblet, koble til en nettverkskabel!","Ingen innebygd trådløs adapter eller ingen trådløs USB-adapter ble funnet."];
var initChPrompt = ["Oppsett av TV-kanaler","Velg antenne som søketype.","Behandler auto-tuning...","Følgende kanaler ble funnet:","Vennligst velg kabelskanntype.","Vennligst velg en operatør fra følgende liste.","Vennligst konfigurer skanninfoen","Følgende kabelkanaler ble funnet:","Vennligst velg en operatør fra følgende liste","Vennligst velg satellitter for å skanne eller redigere valgte satellitt","Vennligst angi satellittens parametere","Følgende kanaler ble funnet, og kanalsøket kan også gjøres på nytt under Kanal/Kanalsøk"];
var initClockPrompt = ["Hent dato/klokkeslett fra nettverket.",
						"Angi dato og klokkeslett:"];
var initialOptions	= ["Omgivelser","Nettverksinstallasjon","Programoppdatering","Kanalinstallasjon","Klokke"];
var initialHotkeys	= ["Tilbake","Velg","Neste","Jeg samtykker"];
var initLocations	= ["Hjem","Handle","Butikk med demo"];
var initNets		= ["Kablet","Trådløst","Jeg har ikke noen nettverkstilkobling"];
var initWireManuals	= ["IP-adresse","Subnet mask","Standard gateway","Primær DNS","Sekundær DNS"];
var initSoftUpdates = ["Oppdater nå","Oppdater senere"];
var initChannelIns	= ["Fortsett","Jeg ønsker ikke å sette opp kanaler"];
var initChScanTypes	= ["Digital & Analog","Digital","Analog","Jeg ønsker ikke å skanne"];
var initChDvbts		= ["Antenne ATV-kanaler:","Antenne DTV-kanaler:"];
var initChDvbcs		= ["Kabel ATV-kanaler:","Kabel DTV-kanaler:"];
var initChDvbss		= ["Satellittkanaler:"];
var initChDvbSOther	= ["Jeg ønsker ikke å skanne satellitt"];
var initEndConnectedStatus= ["Frakoblet","WiFi tilkoblet","Nettverkskabel tilkoblet"];
var initEndInstallations= "XXXX kanaler satt opp";
var initEndUpdate	= ["Oppdatert"];

var audioScenes 	= ["Bordplate","Veggmontering"];			
var screenSavers	= ["Ingen kanaler, trykk OK-tasten for å skanne!",
						"Ingen signal!",
						"Kryptert",
						"Kun data",
						"Lydprogram",
						"Ingen lyd og bilde",
						"Ikke tilgjengelig",
						"Ingen tekst-tv",
						"Ingen programdata.",
						"Program låst!",
						"Program låst!\nTrykk OK og tast inn koden din.",
						"Ingen programdetaljer.",
						"Program skadelig for mindreårige.\nTrykk OK og tast inn koden.",
						"Kanal låst!",
						"Kanal låst!\nTrykk OK og tast inn koden din.",
						"Inntasting låst!\nTrykk OK og tast inn koden din.",
						"Støttes ikke!",
						"Denne tjenesten er ikke tilgjengelig for øyeblikket",
						"Inngang låst!",
						"Ingen programtittel.",
						"Ingen funksjon",
    					"Ingen Undertekst"
						];
var channelNumberOverPromt = ["The number of search programs has exceeded,you can delete some programs and then retry!"];
var chBookingPromt	= ["Gjeldende kanal har et planlagt opptak, TV-aparatet vil starte opptaket.",
						"Et planlagt opptak ble funnet.\n Bytt til XXXX for å ta opp",
						"Gjeldende kanal har en påminner.",
						"En planlagt påminner ble funnet.\n Bytt til XXXX"];
var timeUnit		= ["Sek","min"];
var ciPromt			= ["Nettverksdataene er endret. For å oppdatere kan du utføre et søk. ",];
var othersPromt		= ["Vent…",];
var menuOptions		= ["Bilde","Lyd","Kanal","Smart TV","Nettverk","System","Support"];
var optionOptions	= ["Bildemodus","Forh.inst. lyd","Frys","T-Link","lagring","PVR","Planleggingsliste","Innstillinger","*"];
var optionTLinkPromt= [["Slå på automatisk","Automatisk standby","Veivisermeny"],
						["Strøm på","Standby","Forsterkerlydnivå"]];
var powerPromt		= ["TV-en vil snart slå seg av! Vennligst trykk på hvilken som helst tast for å avbryte."];
var ttxLanguage		= ["VEST EUR","ØST EUR","Russisk","Arabisk/hebraisk","Farsi","Arabisk","Bielorusso","Gresk","Tyrkisk"];
var ttxOptions		= ["Vis","Bla gjennom undersider","Språk","Alarmside","Nyhetssending"];
var weekday         = ["søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","lørdag"];
var lcnConfflict	= "Dette programmet har problemer med mottaket.";
var inShopMode		= "TV-apparatet er i handlemodus. For hjemmemodus kan du velge \"System\" og endre \"Sted\" i menyen.";
var nitRefresh		= "Nettverksdata er endret. Vil du gjøre et oppdateringssøk?";
var picHDMIMode     = ["Auto","Grafisk","Video"];

var glassRemind    	= ["3D-brillene må parkobles med TV-apparatet\n(Hold inne av/på-knappen på 3D-brillene).","3D-brillene er koblet til TV-apparatet ",""];
var pvrRemind 		= ["Ikke trekk ut USB-enheten eller slå av strømmen"];
var pvrConName   	= ["PVR","Programinformasjon:",["Note: If you record the HD channel, please to select  the  disk(of speed >5.0MB/sec), and to select the disk (of speed >3.0MB/sec) when you want to record the SD channel.","Opptak av video er lagret i mappen \"PVR\"."],"Stopp","Ta opp","time","Minutt","Varighet","Tips","Bruk piltastene til å angi opptaksvarighet."];
var pvrDisRemind 	= "Sett inn USB-pinne for opptak.";
var pvrRemindWords  = ["Ønsker du å avslutte?",
							"Ønsker du å stoppe opptaket og bla gjennom innspilte filer?",
							"Plate er trukket ut.",
							"Det er ikke nok ledig plass.",
							"Ingen innspilte filer. Start innspilling.",
							"PVR kan ikke begynne i ukodet kanal.",
							"Funksjonen er ikke tilgjengelig",
							"Vellykket lagret.",
							"Ønsker du å stoppe opptaksprosessen, og endre inngangskilde?",
							"TV'en vil avslutte den aktuelle innspillingen. Ønsker du å avslutte?",
							"Ved PVR-opptak må TV-signalet være sterkt nok, vennligst sjekk signalet."];
var pvrChangeCh 	= ["Vil du skifte kanal?",
							"Ønsker du å stoppe opptaksprosessen, og endre kanal?"];
var pvrChangeToPIN8	= ["Ønsker du å endre kilde til enheten som er koblet til SCART-inngangen?",
				    		"Ønsker du å stoppe innspillingen og endre kilde til enheten som er koblet til SCART-inngangen?"];
var pvrChangeToCEC  = ["Ønsker du å endre kilde til enheten som er koblet til en HDMI-inngang?",
				  			 "Ønsker du å stoppe innspillingen og endre kilde enhet som er koblet til en HDMI-inngang?"];
var pvrGuideJump    = ["Ønsker du å gå inn i EPG?",
							"Ønsker du å stoppe opptaksprosessen, og legge inn EPG?"];
var pvrMediaJump    = ["Ønsker du å gå inn i Media?",
							"Ønsker du å stoppe opptaksprosessen, og legge inn Media?"];
var timeshiftExtra	= ["Ønsker du å stoppe tidsskiftet og endre kanal?",
						"Ønsker du å stoppe tidsforskyvningen og endre kilde til enheten som er koblet til SCART-inngangen?",
						"Ønsker du å stoppe tidsforskyvningen og endre kilde til enhet som er koblet til en HDMI-inngang?",
						"Tidsskift kan ikke begynne i ukodet kanal.",
						"Ønsker du å stoppe tidsforskyvning og gå inn i EPG?",
						"Ønsker du å stoppe tidsskiftet og endre TV til USB-modus?",
						"Ønsker du å stoppe tidsskiftet og endre inngangskilde?",
						"Sett inn USB-pinne for opptak.",
						"Diskstørrelsen er ikke nok.",
						"TV vil avslutte den aktuelle tidsforskyvningen. Ønsker du å avslutte?"];
var timeshiftStatus	= ["Spole bakover","Stopp","Spill","Pause","Spole fremover"];
var pvrPowerOffRemind= ["Standby-opptak","Standby","TV-apparatet spiller for øyeblikket inn, ønsker du å fortsette opptaket når TV-apparatet er i standby-modus?"];
var timeshiftInitTitle= "Oppsett av plate";
var timeshiftInitReminds= ["Veiledningen er brukt til å sette opp USB-disken for tidsskift. Vennligst velg oppsettmodus.",
						 "For å ha bedre ytelse, anbefaler vi å formattere USB-disken. Det vil slette all data.",
						 "Vennligst velg filstørrelse for tidsskift.",
						 "Formatterer",
						 "Det er ikke nok ledig plass.",
						 "Lager tidsskift-fil",
						 "Tester hastighet",
						 "Diskens hastighet er for sakte (<%f MB/sek) til å aktivere tidsskift-funksjon!",
						 "Disken er klar for tidsskift. Men vi anbefaler at du endrer disk (av hastighet > %f MB/sek) for bedre ytelse.",
						 "Disken er klar for tidsskift."];
var timeshiftInitButtons= ["Formatter","Avbryt","Avbryt","OK","Ende","Avslutt"];
var timeshiftInitOther=["Diskhastighet:","MB/sek."];

var selectChoice	= "Er du sikker?";
var chAtvStore		= "Lagre som XXXX";
var chEpgFirstGenreUK= ["Kino","Nyheter og fakta","UNDERHOLDNING","Sport","Barn","Utdanning","Livsstil","Drama"];
var homePageTitleList = ["APPLIKASJONER","TV","VIDEOER","Hjemmeside"];
var homePageFavAndAllName  = ["Favoritt-apper","Alle apper"];
var homePageBackUp = ["Elektronisk bruksanvisning","GuideOn"];
var homePageRemind   = ["Fullstendige funksjoner er kun tilgjengelig ved tilkobling til nettverk.","TV-apparatet har foreløpig ingen kanaler. Programmer vil bli tilgjengelig etter kanalsøk.","Ingen program","Søke etter kanaler nå?"];
var homePageHistory = ["Historikk"];
var miracastTitle = ["Wifi-visning","TCL-enhet"];
var miracastRemind=["Wifi-visning lar deg dele skjerm og lyd fra enheten din, som en smarttelefon eller nettbrett, til TV-en, trådløst (dvs. uten kabler). Dette gjør det mulig å se på TV-en, samtidig, hva enn smarttelefonen eller nettbrettet ditt viser. For eksempel kan du sette på en video på smarttelefonen og vise den samtidig på TV-en, eller bruke nettbrettet ditt som en spillkontroll med innholdet vist på TV-skjermen.","Wifi-visning på TV er klar. Start opp for å dele skjermen til din enhet med TV-en nå.","Kobler til. Vennligst vent...","Tilkobling mislyktes!","Kunne ikke koble til. Vennligst sjekk feilen!"];
var homePageLittleWin = ["Innstillinger","Media","Favorittkanaler","Smart TV","EPG"];

var hbbtvStopRemind  = ["Ønsker du å stoppe avspillingen?"];
var colorSystem = ["Auto","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Trykk på ≡ for mer informasjon";
var emptyListInfo = "Det er ingen enhet koblet til Tven.";
var optionVideoListArray_1 = ["Bildemodus", "Forh.inst. lyd", "Avspillingsmodus", "Skjermmodus", "3D-modus", 
							  "Venstre/høyre-justering", "Dybdeskarphet", "Undertekst", "Lydspor", "Tittel", "Kapittel", "Info"];
var optionVideoListArray_2 = ["Bildemodus", "Forh.inst. lyd", "Avspillingsmodus", "Skjermmodus", 
							  "Undertekst", "Lydspor", "Tittel", "Kapittel", "Info"];
var bottomTipsText = ["Spill av / Pause", "Spole bakover", "Spole fremover", "Spilleliste", "Innstillinger"];
var picturePresetArray = ["Standard", "Dynamic", "Naturlig", "Kino", "Bruker"];
var videoPlayModeArray = ["Gjenta alle", "Gjenta en", "Normal"];
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Széles zoom", "Zoom 2", "Széles zoom 2", "Megnyújtás zoom", "Automatisk"];
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "14:9 Zoom", "16:9 Zoom", "16:9 Zoom felfelé", "Automatisk"];
var Mode3DArray = ["Av", "2D-til-3D", "Side-ved-side", "Topp og bunn", "Linjeflettet"];
var videoOptionListArray = ["Av", "Spor", "Undertekst", "Tittel", "Kapittel"];
var subMenuTitleText = "Undertekst";
var langMenuTitleText = "Lydspråk";
var titleMenuTitleText = "Tittel";
var mode3DMenuTitleText = "3D-modus";
var langInfoText = "Spor";
var STOP_RESUME_INFO = "Stopp-Gjenoppta";
var playListName = "navn";
var eb_tips = "Tips";
var ok_button = "OK";
var eb_info = ["Feil i audiodekoding.", "Feil i videodekoding.", "Lydformatet støttes ikke.", 
			   "Video støttes ikke.", "Kan ikke åpne denne filen.", "Feil ved avspilling, prøv igjen.",
			   "Filformatet støttes ikke.", "Obs! Spilleren har stoppet.",
			   "Filbanen eksisterer ikke eller er ugyldig.\n Sett inn lagringsenheten på nytt og prøv igjen.",
			   "Fortsette å spille av der\n det stoppet?"];
var picturePlayErrorTips = ["Innlastingsfei!!!","Bildet er for stort!!!","Nettverksfeil!!!","Trådfeil!!!","Parameterfeil!!!","Ukjent feil!!!"];
var frameTitleText = "Ny enhet";
var eb_quit_info = "Er du sikker på at du ønsker å avslutte?";
var eb_yes = "JA";
var eb_no = "NEI";
var offinfo = "Av";
var naInfo = "Null";
var consoleInfoArray = ["Spole bakover", "Spole fremover", "Spill av / Pause", "Spilleliste"];
var cantOperateText = ["Funksjonen støttes ikke."];
var chapterChangeInfo = "Bare kapitler fra 1 til XXXX er tilgjengelig.";
var metaDataArray = ["Tittel/utgave metadata: ", "Kapittel metadata: ", "Audio metadata: ", "Teksting metadata: "];
var metaTitleInfo = "Tittel";
var metaChapterInfo = "Kapittel";
var videoLoadingInfo = "Analyserer...";
var listLoadingInfo = "Laster...";
var pgInfo = "Rangering: ";
var fileNameText = "navn";
var fileDateText = "Dato";
var fileSizeText = "Str.";
var fileDurationText = "Varighet";
var fileDirectorText = "Regissør";
var fileCopyrightText = "Opphavsrett";
var fileArtistText = "Artist";
var fileAlbumText = "Album";
var fileGenreText = "Genre";
var fileYearText = "År";
var fileGenreText = "Genre";
var mainListArray = ["Alle", "Bilde", "Video", "Musikk"];
var sortArray = ["navn", "Dato"];
var parserArray = ["Normal", "Gjentagende  "];
var emptyTipsInfo = "Obs! Ingen støttede filer ble funnet.";
var emptyFolderInfo = "Obs! Ingen støttede filer ble funnet.";
var sortName = "Sorter etter";
var parserName = "Parser";
var divx_str1 = "Registrering av DivX(R) ";
var divx_str2 = "DivX® avregistrering";
var infor_str = "Info";
var quickMenuEmptyText = "Ingen tilgjengelige alternativer.";

var musicSoundPresetArray = ["Standard", "Kino", "Musikk", "Klar stemme", "Bruker"];
var musicInformationArray = ["navn", "Artist", "Album", "Genre:", "År:", "Varighet:"];
var playListName = "navn";
var playTipsInfo = ["Du spiller av den første filen.", "Du spiller av den siste filen."]
var musicNameInfo = "Name";
var musicArtistInfo = "Artist";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Forh.inst. lyd";
var optionBGMInfo = "Spill i bakgrunnen";
var optionAudioOnlyInfo = "Kun lyd";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX er tilkoblet TV-apparatet!";
var tvRemoteTitle		= "TV-kontroll";
var tvRemoteDeveloper	= "Applikasjonen ble utviklet av TCL";
var tvRemoteDeviceTitle	= "Produktnavn:";
var remoteOption		= ["Mediadeling","Fjernkontroll","Hjelp","DualFlow","Smarttilkobling"];
var remotebottom		= " Vennligst last ned \"TV Remote\" til smarttelefonen ";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Del bilder, videoer og musikk med TV-apparatet via telefonen.",
							"Fremgangsmåte: \n1. Klikk \"TV Remote\" på telefonen. Koble telefonen og TV-apparatet til det samme trådløse nettverke\n2.Klikk \"Media Sharing\" for å bla gjennom mediefile\n3.Send media til TV for avspilling (med ett av følgende alternativer)",
							"      a) Dra og slipp mappen/filen til TV-ikonet til toppen av skjermen;\n      b) Sving telefonen mot TV-en for å kjøre første fil;\n      c) Spill av mediet på telefonen og trykk på ikonet for TV-deling;",
							"4. Under avspilling på TV-en, ristes telefonen for å spille av forrige eller neste fil."];
var controlReminds		= ["Bruk telefonen som fjernkontroll til TV-en.",
							" ",
							"Fremgangsmåte: \n1. Klikk \"TV Remote\" på telefonen. Koble telefonen og TV-apparatet til det samme trådløse nettverket\n2. Klikk \"Remote Control\" for å betjene TV-apparatet."];
var helpDeviceWords		= "Interaksjon på flere skjermer";
var helpBottom			= " I cloud-teknologitiden, er smarte apparater slik som telefon og TV likt tilkoblet. Del media på flerskjermer med din familie og kontroller TV via telefon! ";
var helpReminds			= ["Fremgangsmåte\n   1. Last ned og installer \"TV Remote\" fra Google Play eller Apple Store.\n2. Koble telefonen og TV-apparatet til det samme trådløse nettverket.",
							" ",
							"Anbefalt telefon\n   1. CPU: over 800MHz\n   2. Lagring: minst 80 MB ledig plass",
							" ",
							"Ansvarsfraskrivelse\nDersom \"TV Remote\" ikke er tilgjengelig på telefonen din, ta kontakt med telefonprodusenten."];
var helpButtons			= ["Forrige","Neste"];
var aboutReminds		= ["TV-kontroll","Applikasjonen ble utviklet av TCL"];
var aboutExit			= "Avslutt";
var smartReminds		= ["Rask og smart tilkobling mellom TV og telefon.",
							" ",
							"Fremgangsmåte \n1. Koble TV og smarttelefon til samme LAN. Klikk \"TV Remote\" på smarttelefonen.\n2. Klikk \"Smart Connect\" for å skanne QR-koden.\n3. Med TV-apparatet i kringkastingsvisningsmodus, trykk INFO-tasten på fjernkontrollen i 4 sekunder, og en QR-kode vises over hele skjermen.",];
var smartQRReminds		= ["Klikk \"Smart Connect\" i \"TV Remote\" på telefonen og scan QR-koden for å koble sammen TV og telefon.",
							"QR-koden inneholder LAN-kontoinformasjon. Ta vare på denne informasjonen."];
							

var consoleTipArray = ["Forrige","Neste","Konsoll","Spilleliste"];							
var optionInfoArray = ["Bildemodus","Avspillingsmodus","Varighet","Effekt","Info"];

var playModeArray = ["Normal","Blande","Gjenta"];
var durationArray = ["Kort (5 sek.)", "Mellomlang (10 sek.)", "Lang (15 sek.)"];
var effectArray = ["Ingen", "Roter", "Viske høyre", "Viske venstre", "Viske opp", "Viske ned", "Boks inn", "Boks ut", "Tilfeldig"];
var infoArray = ["Navn:","Str.:","Dato:","Lokalisering"];

var picturePresetBarTitleInfo = "Bildemodus";
var picturePresetBarArray = ["Standard","Dynamic","Studio","Kino","Bruker"];
var upTipsInfo = "Flytt bilde"; //add yums 2014-10-10
var consoleTipsArray = ["Konsoll","Forrige","Neste","Spilleliste","Innstillinger"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Trykk HØYRE igjen for å vise neste bilde","Trykk VENSTRE igjen for å vise forrige bilde","Trykk NED igjen for å vise spilleliste"]; //add yums 2014-10-10

var optionPvrListArray = ["Bildemodus","Forh.inst. lyd", "Skjermmodus", "3D-modus", "Undertekst", "Lydspor", "Info"];							
	
var titleSpanFirstArray = ["Kontroll og tilkobling","Grunnleggende bruk","APPLIKASJONER","TV","Innstillinger","Ofte stilte spørsmål"];
var titleSpanSecondArray = [["Fjernkontroll","Paneltaster","Enkel navigering","TV-tilkobling","TV-tilkobling","TV-tilkobling","Trådløst"],["Starter","Statuslinje","Hoved"],["Spill-apper","Media","TV-kontroll"],["Justere kanal og volum","Kanalliste","EPG","Kanaler","Favorittkanaler"],["Bildeinnstillinger","Lydinnstillinger","Kanalinnstillinger","Programoppdatering","Språk","Foreldrelås"],["Ofte stilte spørsmål","Ofte stilte spørsmål","Feilsøking","Feilsøking","Vilkår og betingelser"]];
var contentSpan1_1Array =[["STRØM:","KILDE:","INNSTILLINGER:","VALG:","TILBAKE:","INFO:","HJEM:","GÅ UT:","LISTE:"],
    ["Skrur på strømmen eller går til standbymodus",
        "Velg inngangskilde",
        "For å vise Innstillingsmenyen",
        "For å vise Valg-menyen",
        "Gå tilbake til forrige meny eller gå ut av en APP som kjører",
        "Viser programinfo",
        "For å gå til SmartTV-hjemmesiden",
        "Gå tilbake til forrige meny eller gå ut av en APP som kjører",
        "Viser kanallisten"]];
var contentSpan1_2Array = ["Forrige kanal","Neste kanal","Lydvolum opp","Lydvolum ned","Går til hjemmesiden","Bekrefter innstillingen","Standby / Strøm på"];
var contentSpan1_3Array = ["OK/Guide","Kanal opp","Kanal ned","Volum ned","Volum opp","Tilgjengelig som piltaster i enkelte funksjoner."];
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","AV UT adapter","LAN","Smarttelefon","PC/Set-top box/DVD","Lydforsterker","Lydforsterker/monitor","TV-apparatet leveres kanskje ikke med alle typer stikkontakter."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Hodetelefon","AV INN adapter","SPDIF","CMP AUDIO INN adapter","CMP INN (YPbPr) adapter","USB-innretning","USB-innretning","Hodetelefon","DVC/spillkonsoll/Set-top box/DVD","Lydforsterker","DVC/spillkonsoll/Set-top box/DVD","TV-apparatet leveres kanskje ikke med alle typer stikkontakter."];
var contentSpan1_6Array = ["Felles grensesnitt","SD","VGA","SCART","Mini-SCART","ANTENNE INN","PCMCIA-kort","SD-kort","PC","Set-top box/DVD","Antenne/kabel/satellitt","TV-apparatet leveres kanskje ikke med alle typer stikkontakter."];
var contentSpan1_7Array = ["Tavle","PC","Ruter","Telefon","TV"];
var contentSpan1_8Array = ["Bryterfunksjon/strøm","Langt trykk for å gå til innsovningstimer","Ned","Opp","Volum/kanal/Kilde"];

var contentSpan2Array = [["Trykk på piltastene for å vise hjemmesiden.","Trykk deretter OK for å se et av de valgte programmene eller start en app."],["Viser dato, nettverk og enheter, etc. øverts til høyre i bildet."],["Selecteer de ingangsbron van apparaten aangesloten op de TV via verschillende poorten, zoals TV, AV, HDMI enz."]];

var contentSpan3Array = ["Bruk dine favoritt-apper på Smart TV-siden","Se bilder, videoer og spill av musikk fra et USB-minne","Koble TV og smarttelefon/nettbrett til samme LAN.","Klikk nScreen eller \"TV Remote\" på smarttelefonen/nettbrettet.","Del bilder, videoer og musikk på flere skjermer med familien din, og styr TV-apparatet med smarttelefonen."];

var contentSpan4Array = [["Trykk på OPP/NED for å bytte kanal","Trykk VENSTRE/HØYRE for å endre volumet"],["Trykk på LIST på fjernkontrollen for å se en oversikt over alle kanalene","Trykk på OPP/NED for å velge kanal"],["EPG er en programguide på skjermen som viser planlagte TV-programmer. Du kan navigere, velge, vise og ta opp programmer."],["Søke og lagre kanaler"],["Legg til eller endre favorittkanaler i kanallisten"]];

var contentSpan5Array = ["Se favorittprogrammene dine på videosiden"];

var contentSpan6Array = [["Trykk på Alternativ for å vise systeminnstillingene","Gå inn i bildeinnstillinger for å endre verdier"],["Trykk på Alternativ for å vise systeminnstillingene","Gå inn i lydinnstillinger for å endre verdier"],["Trykk på Alternativ for å vise systeminnstillingene","Gå inn i kanalinnstillinger for å endre verdier"],["Oppdater TV-apparatet når en ny programvareversjon er tilgjengelig"],["Du kan velge foretrukket menyspråk"],["Aktiverer foreldrelås for kanaler eller programmer som ikke er egnet for barn"]];

var contentSpan7_1Array = [["Ingen bilde, ingen lyd","Sjekk om sikringen er ok.","Koble til en annen elektrisk enhet i stikkontakten for å sjekke at den fungerer.","Støpselet er i dårlig kontakt med stikkontakten","Sjekk signalkilden."],["Normalt bilde, ingen lyd","Trykk på volumknappen for å øke volumet.","Lydinnstillingene er feil.","Signalfeil fra sendingen."],["Normal lyd, ikke noe bilde","Juster lysstyrke og kontrast","Signalfeil fra sendingen.","Sjekk om TV-apparatet er i lydmodus."]];
var contentSpan7_2Array = [["Radiofrekvensforstyrrelse","Denne forstyrrelsen kan generere krusninger eller diagonale striper, og i noen tilfeller tap av kontrast i bildet. Finn frem til og eliminer kilden til forstyrrelsen."],["Ingen farge","Juster fargeinnstillingene.","Prøv en annen kanal. Det kan være at programmet sendes i svart/hvitt."],["Fjernkontrollen virker ikke.","Skift batteriene.","Batteriene er ikke satt riktig inn. TV-apparatet er ikke tilkoblet strøm."]];
var contentSpan7_3Array = [["Innholdet på USB-minnet vises ikke","Kontroller at USB-minnet er kompatibelt med TV-apparatet.","Kontroller at lyd- og bildeformatet støttes av TV-apparatet."],["Avspilling uten lyd","Lydformatet i videoen støttes ikke av avspilleren."],["Filene spilles av ujevnt","Overføringshastigheten til USB-minnet kan begrense dataoverføringen til TV-apparatet."]];
var contentSpan7_4Array = [["Ved programvareoppdatering, vær oppmerksom på følgende","Ikke slå av strømmen under oppdateringen.","Ikke bruk fjernkontrollen under programvareoppdatering.","Programvareoppdateringen kan ta litt tid, så vær tålmodig."],["Det er ingen synlige endringer i TV-grensesnittet etter programvareoppdateringen.","Av og til er det ikke bare funksjoner som blir lagt til eller oppdatert, men TV-apparatets ytelse forbedres uten at det er synlige endringer i grensesnittet. Noen ganger forblir TV-grensesnittet akkurat slik det var."]];
var termsTitle = "Vilkår og betingelser";
var termsConditions = ["(Juridisk erklæring) fra TCL - produsenten av dette TV-apparatet. ","Grunnet de ulike funksjonene på produkter som har SmartTV-tjenester, og begrensningene i tilgjengelig innhold, vil enkelte funksjoner, bruksområder og tjenester kunne være utilgjengelige på enkelte apparater og i enkelte områder. Enkelte funksjoner på SmartTV kan også kreve ytterligere eksternt utstyr eller medlemskapsavgifter som selges separat. Besøk nettstedet vårt for mer informasjon om bestemte enheter og innholdstilgjengelighet. Tjenestene og innholdets tilgjengelighet via SmartTV kan endres fra tid til annen, uten varsel. \n   Alt av innhold og tjenester som er tilgjengelig via dette apparatet tilhører tredjeparter, og er beskyttet av opphavsrett, patentlovgivning, varemerkelovgivning og/eller annen åndsrett. Slikt innhold og tjenester tilbys kun for personlig, ikke-kommersielt bruk. Du kan ikke bruke innhold og tjenester på andre måter enn de som er autorisert av innholdets eier eller tjenesteleverandøren. Uten begrensning av det ovennevnte, med mindre eieren av det aktuelle tilbudet eller tjenesteleverandøren har gitt uttrykkelig tillatelse, kan du ikke endre, kopiere, republisere, laste opp, legge ut, overføre, oversette, selge, lage avledede produkter, utnytte, eller distribuere på noen måte eller gjennom noe medium, innhold eller tjenester som vises via dette apparatet. \n   DU ERKJENNER UTTRYKKELIG OG SAMTYKKER I AT BRUK AV APPARATET FOREGÅR HELT PÅ EGEN RISIKO MED HENSYN TIL KVALITET, YTELSE OG NØYAKTIGHET. APPARATET, OG ALT INNHOLD OG TJENESTER FRA TREDJEPARTER, LEVERES \"SOM DET ER\", UTEN NOEN FORM FOR GARANTI, VERKEN UTTRYKT ELLER IMPLISERT. TCL FRASIER SEG UTTRYKKELIG ALLE GARANTIER OG VILKÅR MED HENSYN TIL ENHETEN OG ALT INNHOLD OG TJENESTER, ENTEN UTTRYKT ELLER IMPLISERT, INKLUDERT, MEN IKKE BEGRENSET TIL, GARANTI FOR SALGBARHET, ELLER TILFREDSSTILLENDE KVALITET, VELEGNETHET TIL BESTEMTE FORMÅL, OG IKKE-KRENKELSE AV TREDJEPARTERS RETTIGHETER. TCL GARANTERER IKKE NØYAKTIGHETEN, GYLDIGHETEN, BETIMELIGHETEN, LOVLIGHETEN ELLER FULLSTENDIGHETEN AV INNHOLD ELLER TJENESTER SOM GJØRES TILGJENGELIG GJENNOM DETTE APPARATET, OG GARANTERER IKKE AT ENHETEN, INNHOLDET ELLER TJENESTEN IMØTEKOMMER DINE BEHOV, ELLER AT BRUK AV APPARATET ELLER TJENESTENE BLIR UAVBRUTT ELLER FEILFRITT. TCL SKAL IKKE UNDER NOEN OMSTENDIGHETER, INKLUDERT VED UAKTSOMHET, VERKEN I HENHOLD TIL KONTRAKT ELLER SKADE, VÆRE ANSVARLIG FOR EVENTUELL DIREKTE, INDIREKTE, TILFELDIG, SPESIELL ELLER KONSEKVENSIELL SKADE, ADVOKATSALÆRER, UTGIFTER ELLER ANNEN SKADE SOM OPPSTÅR SOM FØLGE AV, ELLER I FORBINDELSE MED, INFORMASJON I, ELLER SOM ET RESULTAT AV BRUK AV, APPARATET, ELLER INNHOLD ELLER TJENESTER SOM DU VÅR TILGANG TIL VIA EN TREDJEPART, SELV OM DE ER ADVART OM MULIGHETEN FOR SLIK SKADE. \n   Tjenester fra tredjeparter kan endres, suspenderes, fjernes, avsluttes eller avbrytes, og tilgang kan deaktiveres når som helst, uten forvarsel, og TCL (produsenten av Thomson-merkede TV-apparater) gir ingen fremstilling eller garanti om at innhold og tjenester forblir tilgjengelige i noen tidsperiode. Innhold og tjenester overføres av tredjeparter via nettverk og overføringsanlegg som TCL ikke har kontroll over. Uten begrensning av alminnelighetene i denne ansvarsfraskrivelsen, frasier TCL seg uttrykkelig ethvert ansvar for eventuelle endringer, forstyrrelser, deaktivering, fjerning eller avbrytelse av innhold og tjenester som gjøres tilgjengelig via dette apparatet. TCL kan pålegge begrensninger på bruk av eller tilgang til enkelte tjenester og innhold, uansett tilfelle og uten varsel eller ansvar. TCL er ikke ansvarlig for kundeservice knyttet til innholdet og tjenestene. Eventuelle spørsmål eller forespørsler om tjenester knyttet til innhold og tjenester bør rettes direkte til den respektive innholds- og tjenesteleverandøren."];

var noChannelListRemind        = ["Ingen kanaler funnet. Kanallisten er tilgjengelig etter kanalsøk.","Automatisk kanalsøk"];
var closeSubtitleRemind   = "Funksjonen vil være tilgjengelig når tekstingen er slått av. Ønsker du å angi dette nå?";

var estickerTitles = ["Svært realistiske bilder","Levende farger","Fantastiske naturtro bevegelser","Dynamisk bildekvalitet","SR UHD-oppskalering","Opplev en verden i 3D","Raskere ytelse","Fremtidig 4K-innhold","Opplev den elektroniske verden","Få tilgang til ekstra innhold","Integrerte digitale tunere","Tilkobling for alle enheter","Flere 4K-kilder","USB-innhold","Ultrarask WIFI","Mobilt innhold på TV","Innhold på mobil enhet","Lokalt innhold","Godkjent av DivX","Sømløst bilde","Canal Ready","TDT Premium"];
var estickerDescriptions = ["Fantastisk seeropplevelse takket være bilder som er fire ganger bedre enn Full HD, på UHD-skjerm","Bredt fargespekter leverer følelser i hver eneste scene med levende rød og smaragdgrønn","4K ramme-interpolering og bakgrunnsbelysning for å redusere problemer med bevegelsesuskarphet","Livaktigheten fra det opprinnelige bildet er forbedret for å produsere et dynamisk uttrykk med strålende kontrast","Se TV-programmer og Bluray-filmer mye skarpere enn før, takket være Super Resolution-teknologi","Opplev 3D-innhold med 3D-TV","En morsommere underholdningsopplevelse med Quad Core-interaksjon, med forbedret ytelse","HEVC (H.265) kodek-støtte for kommende standard for 4K videodistribusjon","En mengde applikasjoner på nett, VOD-tjenester, catch-up TV og Internett-surfing","Se mer med tilleggstjenester og innhold fra dine favorittilbydere","Få tilgang til TV-kanaler i HD uten en ekstra set-top-boks","Koble enkelt til digitale kilder i hjemmet","TV-apparatet er klart for fremtiden, med avspilling i 4K 50/60Hz via HDMI 2.0 med HDCP 2.2","Video- eller bildeinnhold direkte fra USB-minne, harddisk eller kamera på storskjerm i 4K-oppløsning","Siste generasjon 2x2 MIMO og AC-standard leverer superrask trådløs hastighet","Se bilder, videoer, applikasjoner fra mobile enheter på storskjerm, takket være teknologi for skjermspeiling","Bilder, videoer, applikasjoner fra smarttelefonen eller nettbrettet kan vises på storskjerm ","Vis lokalt innhold som bilder og videoer fra enheter som er koblet til et lokalt nettverk","Spill av leide eller egne filmer beskyttet av DivX","Ultra smal ramme og superslankt design","Testet og godkjent av Canal+","Testet og godkjent av TDT Premium"];							

var eManualTextArray = ["Elektronisk bruksanvisning","All grafikk er kun ment til demonstrasjon."];
var frontPanelRemind = "Frontpanel er låst";
var eRPRemind		 = "Butikkmodus kan ikke tilfredsstille kravet til ERP. Er du sikker?";	
var noRelatedChannel = "Ingen tilknyttet kanal";
var option0624Name          = ["BOP","BFS","Hendelse for hendelse","GetUserID","BGM","Reset all","Fabrikkinnstillinger","NRM","DVB-T2 og valg av land","HbbTV-modus"];
var DVBT2AndChoice = ["På","Etter land","Av"];
var hbbtvServiceRemind = "HbbTV-tjeneste kommer snart.";
var insertWord = "Sett inn";		
var viewDetail = "Vis detaljer";							

var remindOAD  = "Programvareoppdatering. En ny anbefalt oppdatering kan finnes på en annen kanal. Godkjenner du å laste den ned, kan det endres til den kanalen automatisk. Ønsker du å gjøre det nå?";

var LEDStatus = ["Blinker", "Normal","Av"];
var netFlixRemind = "Denne funksjonen vil avbryte tilgangen til Netflix’ tjenester til du logger inn igjen.";
var ESNExplanation = "Elektronisk serienummer";
var resetShopRemind = "Systemet tilbakestilles, ikke skru av TV-en";
var initialSelectOption = "Vennligst velg et valg:";
var databaseRemind   = "Systemet har identifisert databasen som skadet av ukjent grunn og bygd den opp igjen automatisk, trykk OK for å fortsette";
var Deactivation = "Deaktivering";
var oadFutureRemind = "Programvareoppdatering.\n En ny anbefalt programvare blir tilgjengelig %s. Oppdateringen kan ta litt tid, og skjermen kan gå i svart. Ikke slå av mottakeren under oppdateringen. Hvis du godtar denne oppdateringen, må du la mottakeren være påslått på det planlagte tidspunktet. Ønsker du å motta denne oppdateringen?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Lydutgang";
var bt_soundOutPutTV = "TV-høyttalere";
var bt_soundOutPutBT = "Bluetooth-enhet";
var bt_soundOutPutBT_TV = "Bluetooth og TV";
var bt_refreshBarName = "Enheter";
var bt_settingTips_On = "Slå på Bluetooth og søk etter enheter. ";
var bt_settingTips_Finding = "Søker etter tilgjengelige enheter...";
var bt_settingTips_NoDevice = "Ingen tilgjengelige enheter.";
var bt_deviceList_State_NoConnect = "Ikke tilkoblet";
var bt_deviceList_State_Connecting = "Kobler til...";
var bt_deviceList_State_Connected = "Tilkoblet";
var bt_deviceList_State_Paired = "Parkoblet";
var bt_deviceList_Conncect_Failed_Tips1 = "Tilkoblingen mislyktes.";
var bt_deviceList_Conncect_Failed_Tips2 = "Sjekk at XXX Bluetooth-funksjonen er på";
var bt_deviceList_Conncect_Success = "Koblet til Bluetooth-enhet.";
var bt_deviceList_Disconncect_Success = "Koblet fra Bluetooth-enhet.";
var bt_deviceList_Disconnect = "Er du sikker på at du vil koble fra XXX?";
var bt_tipsTitle = "Tips";
var bt_bluetooth_Pairing_Title = "Bluetooth-paring";
var bt_bluetooth_Input_Pin = "Tast inn PIN:";
var bt_bluetooth_Output_Pin_Tip = "Tast inn PIN XXXX med tastaturet.";
var bt_bluetooth_Pin_Wrong_Tip = "Feil PIN";
var bt_bluetooth_Remove_Pair_Title = "Spørring";
var bt_bluetooth_Remove_Pair_Ask = "Glemme denne enheten?";
							
var audioDescriptionName = ["Lydbeskrivelse","Høyttaler","Høyttalervolum","Hodetelefon","Hodetelefonvolum","AD volume","Bluetooth-enhet","Volum til Bluetooth-enhet","Forsterker","Høyttaler"];
var audioDescriptionOptions = ["Av","Normal","Lydbeskrivelse"];
var volumeOffRemind = 'Still inn XXX til "På" i innstillingsmenyen.';
var switchSourceRemind   = " satt inn. Vil du bytte den nå?";
var footballModeName = "Sportsmodus";
var resetStadium = "Stadion";

var atvSearchMenu = "ATV manual search";
var dtvSearchMenu = "DTV manual search";
var settingNoticeSourceName ="Automatisk kilde";

var smartTVOptions		= ["Smart TV-portal","HbbTV","Del og se","Wifi-visning","Salgs- og bruksbetingelse",
    "Nettverksstandby","Nullstill smart TV","Cookie policy","Personvern","Sletting av data"];
var supportOptions		= ["Fjerndiagnostisering","Kontakt oss"];
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

var tvDoctor=["Fjerndiagnostisering 2.0",
"Denne appen er bare for at Smart TV-en skal kjøre diagnostikk og forbedre produktopplevelsen. TV-ens bruksdata og modellinformasjon vil innhentes av denne appen, lastet opp til serveren og brukt til å løse problemer med TV-en. Din personlige informasjon vil ikke innhentes. Påse at TV-en din er koblet til internett.",
"Lokal diagnostisering",
"Når diagnosen startes følger du instruksene fra vår supporttekniker.",
"Fjerndiagnostisering",
"Sjekk at vår supporttekniker er på nett før du bruker denne funksjonen.",
"Serienummer:",
"&nbsp;&nbsp;&nbsp;&nbsp;Bruker-ID:",
"Kobler til...",
"Diagnostisering pågår. \nSørg for at nettverket er tilkoblet som det skal.",
"Kunne ikke koble til internett, \nsjekk nettverkstilkoblingen.",
"Avslutt"
];
var contactUsOption = ["Kontakt oss",
    "Kontakt oss hvis du har problemer med å bruke denne enheten.",
    "Kontakt oss",
    "Nettside: Besøk",
    "Nummer til kundeservice:","Produktinformasjon","Model Navn:",
    "Programvareversjon:","","Bruker-ID:","Prosjekt-ID:",
    "Klienttype:","Trådløs MAC-adresse:","MAC-adresse kablet nettverk:","Netflix ESN:","Skann informasjonen til din mobiltelefon.",
    " og velg land."];
							
							

//本地launcher的翻译，与服务器无关，只用于本地launcher
var homePageWords = ["Historikk", "Søk"];//home页的翻译
var titlePageWords = ["Hjem", "Videoer","TV","Programmer"];//index的标题翻译
var videosPageWords = ["Kino", "Sport","Musikk","Populær","Spill","Utdanning","Nyheter"];//videos页的内容翻译

//同时应用于本地和服务器
var statusPageWords = ["USB","Innstillinger","WiFi","Kablet"];//状态栏的翻译

//二级页面的翻译
var searchPageWords = ["Search", "Populære søk:","Show, filmer, personer ..."];
var resultSearchPageWords = ["Resultater om"," ","Prøv andre nøkkelord.","Beklager, det ble ikke funnet noen video om "," "];
var historyPageWords = ["Historikk", 'Trykk på','for å slette historikk',"Slett én","Slett alle","I går","I dag"," Du har ikke sett noen videoer ennå.","Visningshistorikken ble slettet!"];
var channelPageWords = ["Beklager, ingen video er funnet ennå."];


//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9",
                       	   "Zoom-","0","Zoom+",
                       	   "Avslutt","0","",
                       	   "Liste","0","Tekst",
                       	   "Guide","Enter","Avslutt",
                       	   "Meny","Teksting","Info",
                       	   "Stopp",
                       	   "Info","Meny","Avslutt",
                       	   "Avslutt"
                       	   ];

//added for LA sports mode
var sportsModeInitReminds= ["Denne veiviseren brukes til å sette opp USB-disken for sportsmodus. Vennligst velg oppsettsmodus.",
						 "Vennligst velg filstørrelse for sportsmodus.",
						 "Opprette fil for sportsmodus",
						 "USB-diskens hastighet er for lav (< %f MB/sek) for sportsmodus!",
						 "USB-disken er klar for sportsmodus. Men vi anbefaler å endre den (til en hastighet > %f MB/sek) for bedre ytelse.",
						 "USB-disken er klar for sportsmodus."];

var sportsModeExtra	= ["Vil du stoppe sportsmodus og skifte kanal?",
						"Vil du stoppe sportsmodus og skifte kilde til enheten tilkoblet SCART-inngangen?",
						"Vil du stoppe sportsmodus og skifte kilde til enheten tilkoblet HDMI-inngangen?",
						"Sportsmodus støttes ikke på den blandede kanalen.",
						"Vil du stoppe sportsmodus og gå til EPG?",
						"Vil du stoppe sportsmodus og gå til Media?",
						"Vil du stoppe sportsmodus og endre inngangskilde?",
						"TV-en vil stoppe nåværende sportsmodus. Vil du gå ut?"];
var remoteControlNote = "- Den medleverte fjernkontrollen kan variere fra en produktmodell til en annen";

						


var textArray = ["Volume","Channel","Source","Switch/Power","Guide","seconds to Power OFF"];
var guideArray = ["VOL-","VOL+","CH-","CH+","Pre","Next"];
var favChannelListRemind = ["Ingen favorittkanaler. Vennligst bruk andre lister og bruk «grønn tast» for å legge til favorittkanaler."];

var proxySetting = ["Proxy-innstillinger","Port"];
var powerOffShop = ["Vi anbefaler å bruke butikkmodus, vil du gjøre det?"];
var tcastTextPageWords = ["Masser av videoer og flotte applikasjoner","Alt innen rekkevidde med fjernkontrollen","Flott innhold! Del det på en stor skjerm"];
var tcastOtherWords = ["SCAN QR koden og last ned T-CAST","TV-en er tilkoblet nettverket","TV-navn","T-Cast"];
var hbbtvWords = ["Hbbtv-innstillinger","HbbTV","Informasjonskapsler","Tredjeparts informasjonskapsler","Enhet ID","sporer"];
var hbbtvTrackingWords = ["YES","NO","Likegyldig"];
var eStickerTipWords = ["Lagringsplassen er mindre enn 400 M, vil du slette videoene i Demo-modus for å få mer plass?"];
var delEstickerVideoRemid = ["Videoen ble slettet"];
var selectSatRemind = "Du kan velge opp til 20 satellitter!";
var cookiePolicyTitle = "Retningslinjer for Cookies – Online Smart TV-Tjenester";
var cookiePolicyConditions = ["Selskapet respekterer ditt privatliv når du bruker Smart TVer produsert og Tjenester levert av Selskapet. Cookies blir brukt av mange nettsteder og andre Internett-tjenester og din Smart TV vil akseptere, lagre og overføre cookies for å sikre at disse nettstedene og tjenestene fungerer på riktig måte. Selskapet bruker også cookies når Selskapet leverer Tjenester til deg. I disse Retningslinjene for Cookies beskriver Selskapet hvilke cookies som blir opprettet på din Smart TV og hvordan du kan administrere dem.\nVennligst legg merke til at alle personopplysninger som Selskapet lagrer og/eller behandler gjennom eller ved hjelp av cookies er underlagt Retningslinjene for Personvern, og du bør lese retningslinjene for Cookies sammen med Retningslinjene for Personvern.\n1. Hva er en cookie?\nCookies er små tekstfiler som kan lagres på din Smart TV. Når en nettside eller rød-knapp-tjenestene på en TV-kanal blir brukt, kan nettstedet eller tjenesten opprette en cookie I Smart TVen. Ved etterfølgende bruk vil en cookie som er lagret på din Smart TV sende informasjon til den som har opprettet cookien. Cookier er ekstremt vanlige og brukt på et antall nettsteder og tjenester. Hver cookie vil normalt inneholde navnet på domenet hvor cookien kommer fra, \"levetiden\" til cookien, og et innhold (normalt et unikt nummer). For en grundigere forklaring av hva cookies er og hvordan de virker, vennligst se www.allaboutcookies.org.\nCookies kan kategoriseres i funksjonelle cookies og ikke-funksjonelle cookies. Funksjonelle cookies er cookies som er strengt nødvendige for å levere Smart TV-tjenestene til deg og for at nettsteder og andre tjenester skal kunne levere riktig innhold til Smart TVen. Ikke-funksjonelle cookies er alle andre cookies.\nDisse Retningslinjene for Cookies gjelder cookies som er opprettet av oss, så vel som reklamecookies som kan opprettes av tredjeparter gjennom tjenestene på din Smart TV. Disse Retningslinjene for Cookies gjelder ikke cookies som kan opprettes når du bruker Smart TVen til å få tilgang til tredjeparts nettsteder, tjenester eller applikasjoner. For slike cookies viser vi til de respektive retningslinjene for cookies hos slike tredjeparter. Imidlertid beskriver disse Retningslinjene for Cookies hvordan man kan slette slike cookies (se punkt 4 under).\n2. Hvilke ikke-funksjonelle cookies bruker vi?\nReklame: Overleggs- og følgeannonser kan leveres til din Smart TV når du bruker Smart TV-tjenester. Disse reklamene kan leveres av oss eller tredjeparter via, eller som koordinert av, vår reklameserver, som utfører en sentral koordineringsrolle knyttet til leveringen av slik reklame. Vår reklameserver eller en tredjeparts reklameserver vil opprette en cookie på din Smart TV. Ved hjelp av denne cookien vil en reklameserver registrere hvorvidt en reklame har blitt levert til din Smart TV, eller hvorvidt noen som bruker din Smart TV har klikket på en reklame. Vi bruker informasjonen lagret i slik reklamecookie for å huske hvilke reklamer som har blitt levert til din Smart TV slik at vi kan være sikker på at ikke for mange av de samme reklamene blir vist på noen enkelt Smart TV, og slik at vi kan oppfylle våre kommersielle forpliktelser til våre reklamepartnere. Vi vil ikke bruke denne informasjonen til å levere målrettet reklame. Videre vil tredjeparter kunne bruke vårt reklamesystem til å levere reklamer til din Smart TV, og til å opprette cookies på din Smart TV når slike reklamer blir levert.\nDisse cookies inneholder, blant annet, informasjon om reklamene som blir levert, informasjon om hvilken applikasjon eller hvilket domene slike reklamer blir levert i, og din IP-adresse. Dette blir gjort for å huske hvor ofte en bestemt reklame blir vist, og for å hindre at den samme reklamen blir vist for ofte. Eksterne tredjepartsannonsører som kan plassere reklamer kan også bruke cookies til å følge din aktivitet over flere nettsteder, og for å levere reklame som reflekterer dine personlige preferanser.\n3. Tredjeparts nettsteder\nNår du besøker nettsteder eller tjenester fra tredjeparter via Smart TV-tjenestene på din Smart TV, er det mulig at slike nettsteder eller tjenester oppretter cookies på din Smart TV, og at slike nettsteder følger og lagrer dine interaksjoner på slike nettsteder. Vi ber ikke om og oppmuntrer ikke til slik aktivitet og vil ikke bruke slik informasjon. Vennligst se de respektive retningslinjene for cookies og personopplysninger for slike nettsteder eller tjenester for mer informasjon om slike aktørers bruk av slike cookies. \n4. Sletting av cookies\nDitt brukergrensesnitt på din Smart TV lar deg slette alle cookies og andre lokale nettleserdata fra din Smart TV. Det er høyst tilrådelig å fjerne alle cookies og lokalt lagrede instillinger før du selger eller gir bort din Smart TV.\n5. Kontakt oss\nDersom du har spørsmål eller kommentarer knyttet til våre Retningslinjer for Cookies eller hvordan vi bruker cookies kan du sende oss en e-post via FRsupport@tcl.com.\nVersion: 1.0\n"];
var privacyPolicyTitle = "Retningslinjer for personopplysninger – Online Smart TV-Tjenester";
var privacyPolicyConditions = ["Vi respekterer ditt privatliv under behandlingen av dine personopplysninger. Disse Retningslinjene for Personvern beskriver enheten som er ansvarlig for innsamling, behandling og bruk av personopplysninger som vi samler inn fra deg i sammenheng med bruken av våre Smart TV-tjenester (\"Tjenestene\"), hvilke typer personopplysninger vi samler inn fra deg, hva vi gjør med dem, og dine rettigheter i tilknytning til vår bruk av personopplysningene. \n1. Behandlingsansvarlig\nInnsamlingen, behandlingen og bruken av personopplysningene som samles inn fra deg når du bruker Tjenestene blir gjort av Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, Kina (\"Selskapet\"). Legg imidlertid merke til at vi ikke er ansvarlige for alle databehandlingsaktivitetene beskrevet under. Vi har likevel inntatt en beskrivelse av disse aktivitetene i våre Retningslinjer for Personvern fordi denne databehandlingen har tilknytning til din bruk av Smart TVen.\n2. Samtykke til databehandling\nNoe av innsamlingen, behandlingen og/eller bruken av dine personopplysninger krever samtykke fra deg. \nDersom du har samtykket til bruken av dine personopplysninger for å forbedre Tjenestene, hadde ditt samtykke følgende ordlyd:\n\"Jeg samtykker til innsamling, behandling og bruk av oppstartstiden for min enhet, DTV-kanalliste, favorittkanalliste, brukstid og kanaler som er sett på for å analysere brukervaner for å forbedre Tjenestene og/eller for å analysere hvor mange online-brukere Selskapet har per dag/måned/år og til at denne informasjonen deles med TV-selskapene\"\nDersom du har samtykket til bruken av dine personopplysninger for reklame som er tilpasset til dine interesser har ditt samtykke følgende ordlyd:\n\"Jeg samtykker til innsamling, behandling og bruk av min klienttype og land for å motta passende reklame\"\nSamtykket er frivillig og du kan fremdeles bruke Tjenestene dersom du ikke samtykker. Imidlertid kan du se reklame og annet innhold som ikke er tilpasset til dine ønsker. Uavhengig av ditt samtykke forbeholder Selskapet seg retten til å samle inn, behandle og/eller bruke ovenstående data i den utstrekning det er tillatt etter gjeldende rett.\nDu kan, når som helst, trekke ditt samtykke til det ovenstående med virkning for fremtiden. Du kan nekte bruk av dine personopplysninger for markedsføring, markeds- eller meningsundersøkelser og til tilpasningen av Tjenestene til dine behov. For å trekke ditt samtykke tilbake og/eller for å nekte, vennligste endre personvernsinnstillingene på din Smart TV deretter.\n3. Personopplysninger som samles inn\nUavhengig av ditt samtykke vil Selskapet samle inn, behandle, lagre og bruke følgende personopplysninger:\nEnhets-ID: Din Smart TV lagrer et permanent unikt nummer som lar oss identifisere og autentisere Smart TVen når du bruker Tjenestene. Dette nummeret kalles Enhets-ID. Enhets-IDen vil bli gitt til vår servicepartner for å levere Tjenestene til deg. Vi gir også Enhets-IDen til utvalgte innholdspartnere for autentiseringsformål. Disse innholdspartnerne bruker Enhets-IDen for å autentisere Smart TVen for tilgang til tjenester tilbudt av en innholdspartner.\nIP-adresse og MAC-adresse: Din Smart TV vil bli tilordnet en IP-adresse når den bruker Internettet. Denne IP-adressen vil bli overført til og behandlet av oss hver gang Smart TVen ber om informasjon eller data fra Tjenestene. Dersom Smart TVen er bak en ruter (eksempelvis i et lokalt hjemmenettverk eller lokalt WLAN), kan vi samle inn og behandle IP-adressen til slik ruter. MAC-adressen er et unikt nummer tilordnet hver nettverkstilkobling på din Smart TV. MAC-adressen vil også bli samlet inn og behandlet av oss når Smart TVen ber om informasjon eller data fra Tjenestene.\nTjenestetilgangsdata: Hver gang du kobler din Smart TV til Internettet og skrur Smart TVen på, vil den automatisk koble seg til Tjenestene, som blir administrert av vår tjenestepartner. Smart TVen din vil så bli autentisert som sertifisert for tilgang til Tjenestene. For autentiseringsformål lagrer Tjenestene en eller flere unike numeriske identifikatorer relatert til din Smart TV. Når den kobler seg til Tjenestene vil Smart TVen overføre IP-adressen den har blitt tilordnet og vil overføre enhetsspesifikk informasjon (Smart TV-modell, programvareversjon) for å se om programvareoppdateringer er tilgjengelige.\nTjenesteinnstillinger: Som del av den vanlige funksjonaliteten til Tjenestene kan du manuelt velge hvilken rekkefølge appene blir vist av Tjenestene. Vår tjenestepartner vil lagre din rekkefølge og andre innstillinger du angir ved bruk av Tjenestene. Denne informasjonen vil være knyttet til Tjeneste-IDen.\nEnhetsspesifikk informasjon: Smart TVen lagrer flere typer informasjon om seg selv og sin konfigurasjon. Denne informasjonen inkluderer Smart TV-typen, versjonen av operativsystemet til Smart TVen, oppløsningen på skjermen, prosjekt ID (eksempelvis informasjon om konfigurasjonsfiler), user agent, nettlesernavnet, nettleserversjon, og språket og landet som har blitt konfigurert i Smart TVen. Denne informasjonen vil bli brukt av oss og vil bli gitt til vår tjenesteleverandør og innholdspartnere.\nReklame: Tjenestene kan vise reklame. Disse reklamene er levert av oss, eller av tredjeparter som bruker reklameplass tilordnet av oss. Alle reklamer blir levert ved hjelp av eller via vår reklameserver, som fyller en koordineringsrolle for levering av reklame. Vår reklameserver eller en tredjeparts reklameserver kan opprette en cookie (informasjonskapsel) på Smart TVen. Vennligst se våre Retningslinjer for Cookies for mer informasjon om disse cookiene.\nTjeneste og Innholdspartnertrafikk: Når du bruker Tjenestene vil din Smart TV be om data fra Tjenestene via Internett. Som del av disse forespørslene vil IP-adressen som beskrevet over og språket og landet som har blitt konfigurert i din Smart TV bli overført til vår tjenestepartner. Vår tjenestepartner vil behandle de respektive data i samsvar med sine retningslinjer for personopplysninger.\nSecond screen-bruk: Dersom du bruker vår second screen-applikasjon, vil kontrollene du aktiverer i applikasjonen og land- og språkinnstillingene, DTV-kanalliste, favorittkanallister, planleggningslister, Enhets-ID, nåværende kanal, protokollversjon og IP-adressen til din Smart TV samles inn og behandles av oss på våre servere. Våre servere vil så kontrollere din Smart TV som angitt av deg i second screen-appen.\nHbbTV- \"Rød Knapp\": TV-kanaler (\"Kanaler\") kan sende tilleggsinformasjon sammen med TV-signalet. Dersom Smart TVen mottar spesifikke instruksjoner i slik tilleggsinformasjon og dersom den er tilkoblet Internett, vil Smart TVen laste ned et bilde eller en liten nettside fra Kanalens nettside og vise det sammen med informasjonen om å trykke på den \"Røde Knappen\" på din fjernkontroll dersom du ønsker å bruke tilleggstjenestene tilbudt av Kanalen. Dette skjer hver gang du velger ny kanal. Å laste ned bildet fra Kanalens nettside med Smart TVen vil overføre noen personopplysninger, herunder DTV-kanallisten, nåværende kanal, hendelsesinformasjonstabell, TV tid, IP-adressen til din Smart TV og cookies lagret på Smart TVen (hvis noen). Kanalen er ansvarlig for innsamlingen, behandlingen og/eller bruken av slike data. Videre, hvis du bruker tilleggstjenester tilbudt av Kanalen gjennom den Røde Knappen, kan Kanalen samle inn andre personopplysninger (eksemplevis hvilke on-demand filmer du ser på, nyhetene du leser, etc.)\n4. Formålene vi behandler og eller bruker dine personopplysninger for\nVi behandler innsamlede data for følgende formål:\n• Levering av Tjenestene: Vi bruker IP-adressen og MAC-adressen, versjonen for operasjonssystemet på Smart TVen, klienttypen til din Smart TV og dens skjermoppløsning, prosjekt ID-en (eksempelvis informasjon om konfigurasjonsfiler), din DTV-kanalliste, sette kanaler, tidssone, land og språkinnstillinger for å gi din Smart TV tilgang til Tjenestene og tjenester levert av innholdspartnere. Formålene inkluderer (men er ikke begrenset til) autentisering, levering av stedsbaserte tjenester til deg (eksempelvis værmeldinger); misbrukshåndtering, håndtering av sikkerhetsbrudd, overvåkning av Tjenestenes tilgjengelighet, og å levere sikkerhetskopieringstjenester brukeren har valgt.\n• Autentisering: Vi bruker Enhets-ID og MAC-adresse for autentiseringsformål.\n• Programvareoppdateringer: Hver gang din Smart TV er skrudd på vil den overføre IP-adressen, Enhets-ID, programvareversjonen, klienttypen til din Smart TV, prosjekt ID (eksempelvis konfigurasjonsfiler), bruker-ID, serienummer for å tilby og levere riktige programvareoppdateringer til deg. \n• Forbedring av Tjenestene: Vi bruker aggregerte og anonymiserte bruksdata (eksempelvis data om din interaksjon med Tjenestene) for å forbedre brukeropplevelsen for Tjenestene. \n• Levering av Reklame: Vi bruker informasjonen i reklamecookies for å la systemet logge hvilke reklamer du har blitt vist på din Smart TV for å være sikker på at du ikke mottar for mange like reklamer, og at vi kan oppfylle våre kommersielle forpliktelser til våre reklamepartnere. Eksterne annonsører som leverer reklame på Tjenestene eller på innholdspartnernettsidene etter koordinering av vår reklameserver kan også bruke cookies for å følge deg over flere nettsider og for å levere reklame som reflekterer dine personlige preferanser.\n• Optimering av reklame: Vi bruker data relatert til reklamevisninger og klikk på reklamer for å optimere reklameopplevelsen til forbrukere i Tjenesten.\n• Rabatter: Vi gir Enhets-IDen til utvalgte innholdspartnere for å gi disse partnerne mulighet til å identifisere i hvilken utstrekning de kan gi deg gratis tilgang til Video on Demand-titler i deres utvalg.\n• Myndigheter: Vi kan være forpliktet til å utlevere data til kompetente myndigheter eller rettsinstanser. Dersom vi gjør dette vil det bare skje i henhold til et bindende juridisk instrument, så som et pålegg eller en kjennelse fra domstolene, som krever at vi samarbeider med de relevante myndighetene.\nBruk av Tjenestene kan gjøres ved å bruke pseudonymer, unntatt dersom spesifikke tjenester krever at du oppgir ditt navn og/eller e-postadresse.\n5. Kategorier av mottakere\nSelskapet deler dine personopplysninger innsamlet under din bruk av Tjenestene bare med følgende tredjeparter:\n• Med tredjepartsleverandører av Smart TV-tjenester dersom du ber om slike tjenester (eksempelvis dersom du starter Nettflix-applikasjonen på din Smart TV kan vi dele din IP-adresse, MAC-adresse, programvareversjon og TV-modellnavn med Netflix).\n• Med tredjeparts innholdspartnere dersom du ber om vise typer innhold levert av slike innholdspartnere (eksempelvis kan vi for å levere GoLive IP TV-tjenesten dele din TV-klienttype, IP-adresse og språkinnstillinger med den juridiske enheten som tilbyr GoLive-tjenesten).\n• I den utstrekning du har samtykket til deling av spesifikke personopplysninger med tredjeparter over, vil Selskapet dele dine personopplysninger med slike tredjeparter.\n• Med outsourcing-tjenesteleverandører som databehandlere som bistår Selskapet med levering av Tjenestene.\nSelskapet deler dine personopplysninger med andre tredjeparter bare dersom Selskapet er forpliktet til å gjøre dette etter rettslige forpliktelser (eksempelvis til domstoler eller andre offentlige myndigheter), du har samtykket til den aktuelle delingen, eller delingen ellers er lovlig under gjeldende rett.\n6. Land hvor dine personopplysninger vil bli behandlet\nSelskapet og/eller noen av mottakerne av dine personopplysninger angitt over kan være lokalisert utenfor EU/EØS-området (eksempelvis de følgende landene: Folkerepublikken Kina, Amerikas forente stater). Dine personopplysninger kan derfor bli behandlet i land som ikke er anerkjent som land som sikrer en forsvarlig behandling av personopplysninger i samsvar med Europaparlaments og rådsdirektiv 95/46/EF av 24. oktober 1995 om beskyttelse av fysiske personer i forbindelse med behandling av personopplysninger og om fri utveksling av slike opplysninger.\n7. Dine rettigheter\nDu kan kontakte Selskapet for å motta informasjon om dine personopplysninger behandlet av Selskapet og/eller for å utøve dine lovfestede rettigheter knyttet til tilgang, retting, sletting og blokkering av dine personopplysninger; og/eller for å nekte behandling av dine personopplysninger for formål knyttet til markedsføring og/eller markeds- og meningsundersøkelser.\n8. Endringer i Retningslinjene for Personvern\nFor å forbedre våre Tjenester kan vi behøve å endre disse Retningslinjene for Personvern – eksemplvis ved å implementere nye teknologier, eller introdusere nye tjenester. Vi forbeholder oss retten til å endre eller supplere disse Retningslinjene for Personvern på ethvert tidspunkt.\n9. Kontaktinformasjon\nDersom du har spørsmål om Retningslinjene for Personvern eller ønsker å klage på vår behandling av dine personopplysninger, vennligst kontakt oss ved å bruke den følgende kontaktinformasjonen:\nEpost: FRsupport@tcl.com\nVersion: 1.0\n"];
var privacyPolicyTerms = [
    "Aktiver Smart-TV-tjeneste.",
    "Jeg samtykker til innsamling, behandling og bruk av min enhets starttid, DTV-kanalliste, favorittkanalliste, besøkstid og viste kanaler til bruk for analyser av brukervaner for å bedre tjenestene og/eller analysere hvor mange online-brukere TCL har per dag/måned/år, samt til deling av denne informasjonen med TV-stasjoner.",
    "Aktiver anbefalingstjeneste.",
    "Aktiver applikasjon for sekundær skjerm på mobile enheter.",
    "Aktiver automatiske programvareoppdateringer.",
    "Aktiver FreeviewPlay-tjenesten."
];
var privacyPolicyTips = [
    "Alle Smart-TV-tjenester vil være deaktivert.",
    "HbbTV-tjenesten som leveres av TV-kanalene når den innebygde tuneren brukes, vil være deaktivert.",
    "Anbefalingstjenestene for innhold og TV-programmer vil være deaktivert.",
    "Applikasjonen for sekundære skjerm vil være deaktivert.",
    "TV-en vil ikke automatisk se etter programvareoppdateringer og nye funksjoner.",
    "FreeviewPlay-innhold blir deaktivert."
];
var privacyPolicyRemind = "Kryss av i den tilhørende avkrysningsboksen under Innstillinger.";
var set = "Angi";
var copyShopDemoTips = ["Koblet til USB, ønsker du å kopiere videoen til minnekortet?","Kopiere videoen til minnekortet","Videoen ble kopiert!","Feil ved kopiering av video!"];
var dataDeletionWords = ["Slett din data på Smart TV-tjenesten i back-end serverne.","Merknader: Dataen relatert til din bruker av smart TV vil slettes en måned etter at du har krysset av dette feltet. Vær klar over at slettingen ikke vil gjelde den lokale data som er lagret i TV’n din.","Ingen flere datarapport til Smart TV serveren.","Merknader:  Dataen din, forbundet med bruken av Smart TV-tjenester, vil ikke lenger overføres til serveren, etter at du har krysset av dette feltet. TV’n din vil ikke lenger motta de anbefalte tjenestene.","For å vite mer om dette, kan du besøke nettstedet www.tcl.eu"];
var miracastWords = ["Trådløs forbindelse","Speil android-telefon til TV","Klikk for å koble til","Funksjonen er bare tilgjengelig på android-telefon"];
var miracastTips = ["Tilkoblingstrinn","Åpne systeminnstillinger","Flere tilkoblingsmåter \n / Andre trådløse tilkoblinger","Velg trådløs skjerm","Klikk for å koble \n venter på å bli funnet"];

var termsAndConditions = ["\nInnholdet og tjenestene (samlet \"Lisensiert Applikasjon\") gjort tilgjengelig til deg gjennom dette TV-utstyret (\"Utstyret\") er lisensiert, ikke solgt, til deg for bruk under disse vilkår og betingelser. Leverandørene av den Lisensierte Applikasjonen (hver enkelt en \"Applikasjonsleverandør\") forbeholder seg alle rettigheter som ikke uttrykkelig er overdratt til deg. \n\n1.	Lisensens omfang\n\nLisensen gitt til deg for en Lisensiert Applikasjon fra den relevante Applikasjonsleverandør, er begrenset til en ikke-overførbar lisens for å bruke den Lisensierte Applikasjonen på Utstyret som du eier eller disponerer. Du kan ikke distribuere eller gjøre den Lisensierte Applikasjon tilgjengelig på et nettverk hvor den kan bli benyttet på flere utstyr samtidig. Du kan ikke leie ut, lease, låne, selge, omdistribuere eller under-lisensiere den Lisensierte Applikasjonen. \n\nAlle Lisensierte Applikasjoner, og alt innhold inkludert deri, som er tilgjengelige gjennom dette Utstyret tilhører Applikasjonsleverandøren, og er beskyttet av gjeldende opphavsrettslovgivning. Med mindre annet er tillat etter gjeldende lovgivning, kan du ikke endre, kopiere, dekompilere, omvendt utvikle, demontere, publisere, laste opp, poste, overføre, oversette, forsøke å utlede kildekoden til, skape avledede verk av, eller på annen måte utnytte den Lisensierte Applikasjonen, eller enhver oppdatering eller annen del derav. Dersom du overtrer denne restriksjonen, kan du bli utsatt for rettsforfølgelse og erstatningskrav. Vilkårene for lisensen vil gjelde enhver oppgradering tilbudt av Applikasjonsleverandøren som erstatter og/eller supplerer den originale Lisensierte Applikasjonen, med mindre slike oppgraderinger er fulgt av en separat lisens, hvor i tilfelle det vil være vilkårene i denne lisensen som gjelder. Du er ansvarlig for alle kostnader (hvis noen) for oppgradering av den Lisensierte Applikasjonen. \n\n2.	Tredjepartsmateriale\n\nDen Lisensierte Applikasjonen kan muliggjøre tilgang til Applikasjonsleverandørens og tredjeparters tjenester og nettsteder (samlet \"Tjenestene\"). Ved å bruke noen av Tjenestene kan du møte på innhold som kan anses som støtende, uanstendig eller upassende, hvis innhold kan eller kan ikke ha blitt identifisert som å inneha eksplisitt innhold, og at resultatene av ethvert søk eller innlasting av en bestemt nettadresse kan automatisk og utilsiktet genere lenker eller referanser til upassende materiale. Likevel, skal produsenten av dette Utstyret (\"Produsenten\") og Applikasjon Leverandøren ikke ha noe ansvar overfor deg for innhold som kan anses å være støtende, uanstendig eller upassende. \n\nProdusenten skal ikke være ansvarlig for å undersøke eller evaluere innholdet, nøyaktigheten, fullstendigheten, rettidigheten, gyldigheten, den opphavsrettslige overholdelsen, lovligheten, kvaliteten eller andre aspekter av slike Tjenester. Produsenten garanterer ikke, bifaller ikke, og påtar seg ikke noe ansvar overfor deg eller andre personer for noen av Tjenestene. \n\nTjenestene kan inneholde proprietært innhold, -informasjon og -materiale (samlet \"Tredjepartsmaterialer\") som er beskyttet av gjeldende opphavsrett og annen lovgivning, og du skal ikke bruke Tredjepartsmaterialer på noen måte, utenom tillatt bruk av Tjenestene. Med mindre annet er tillatt i henhold til gjeldende lovgivning, skal du ikke reprodusere, modifisere, leie ut, lease, låne, selge, eller distribuere slike Tredjepartsmaterialer eller på noen måte skape avledede verk derav, og du skal ikke utnytte Tjenestene på noen uautorisert måte. Du skal ikke bruke Tjenestene for å trakassere, misbruke, sjikanere, true, fornærme eller på annen måte krenke eller overtre rettighetene til andre parter, og Produsenten skal på ingen måte være ansvarlig for slik bruk av deg, eller for trakasserende, truende, ærekrenkende, støtende eller ulovlige meldinger eller overføringer som du kan motta som følge av bruk av noen av Tjenestene.   \n\n3.	Ingen garanti\n\nAlle Lisensierte Applikasjoner og Tjenester leveres \"som den er\" og \"som tilgjengelig\" uten garantier av noe slag, enten uttrykkelig eller underforstått. Produsenten fraskriver seg uttrykkelig alle garantier eller betingelser i forbindelse med den Lisensierte Applikasjonen og Tjenestene, enten uttrykkelig eller underforstått, inkludert, men ikke begrenset til, garantier for omsettelighet, tilfredsstillende kvalitet, egnethet for bestemte formål, nøyaktighet, uforstyrret bruk, og ikke-krenkelser av tredjeparters rettigheter. Produsenten garanterer ikke for nøyaktigheten, gyldigheten, rettidigheten, lovligheten eller fullstendigheten til alle Lisensierte Applikasjoner eller Tjenester som er gjort tilgjengelig gjennom dette Utstyret, og garanterer ikke at Utstyret, de Lisensierte Applikasjonene eller Tjenestene vil oppfylle dine krav, eller at bruken av de Lisensierte Applikasjonene eller Tjenestene vil være uavbrutt eller feilfri, eller at feil i den Lisensierte Applikasjonen eller Tjenestene vil bli rettet. Skulle den Lisensierte Applikasjonen eller Tjenesten vise seg å være defekt, må du påta deg hele kostnaden for all nødvendig service, reparasjon eller retting. \n\nDe Lisensierte Applikasjonene og Tjenestene kan endres, suspenderes, fjernes, avsluttes eller avbrytes, eller tilgang kan frakobles når som helst uten varsel, og Produsenten gir ingen løfter eller garanti for at innhold eller tjenester som er inkludert i de Lisensierte Applikasjoner eller Tjenestene vil forbli tilgjengelig i noen bestemt tidsperiode. Slikt innhold og tjenester overføres av tredjeparter over nettverk som Produsenten ikke har kontroll over. Uten å begrense den generelle betydningen av det foregående, fraskriver Produsenten seg ethvert ansvar for enhver endring, avbrudd, frakopling, fjerning eller suspensjon av innhold eller tjeneste som er gjort tilgjengelig gjennom Utstyret. Applikasjonsleverandøren og andre leverandører av Tjenestene forbeholder seg retten til å endre, suspendere, fjerne eller deaktivere tilgangen til alle Lisensierte Applikasjoner eller Tjenester, når som helst og uten forhåndsvarsel. Produsenten kan også sette grenser for bruk av eller tilgang til visse Lisensierte Programmer eller Tjenester, når som helst og uten forhåndsvarsel. \n\nProdusenten tilbyr ikke kundeservice i forbindelse med Lisensierte Applikasjoner og Tjenestene. Eventuelle spørsmål eller forespørsler om service knyttet til disse må gjøres direkte til den respektive leverandøren.\n\n4.	Innsamling og bruk av informasjon\n\nProdusenten, Applikasjonsleverandørene og leverandørene av Tjenestene kan samle inn og bruke tekniske data og relatert informasjon, inkludert, men ikke begrenset til, teknisk informasjon om Utstyret, system og applikasjonsprogramvare, og eksterne enheter, for å tilrettelegge for levering av programvareoppdateringer, produktstøtte og andre tjenester til deg (hvis noen) relatert til Utstyret og den Lisensierte Applikasjonen. Produsenten, Applikasjonstilbydere og tilbydere av Tjenestene kan bruke slik informasjon, så lenge det gjøres på en måte som ikke identifiserer deg som fysisk person, for å forbedre sine produkter eller levere tjenester eller teknologi til deg. For mer informasjon om innsamling og bruk av informasjon, vennligst se vår personvernerklæring http://www.tcl.eu/en/.\n\n5.	Utilgjengelighet av visse funksjoner\n\nPå grunn av begrensninger fra Applikasjonsleverandør, er det mulig at enkelte funksjoner, programmer og tjenester ikke er tilgjengelige på dette Utstyret (inkludert eksterne enheter) eller i alle territorier. Enkelte funksjoner for Utstyret kan også kreve tilleggsutstyr eller medlemsavgifter som selges separat.\n\n6.	Ansvarsbegrensning\n\nI den utstrekning det ikke er forbudt i henhold til gjeldende lovgivning, skal Produsenten under ingen omstendigheter, herunder uaktsomhet, være erstatningsansvarlig, enten i kontrakt eller utenfor kontrakt, for noen direkte-, indirekte-, tilfeldig-, spesiell- eller følgeskade, advokatkostnader, utgifter eller andre erstatningskrav som oppstår ut fra, eller i forbindelse med, informasjon som finnes i, eller som oppstår som følge av bruken av Utstyret, enhver Lisensiert Applikasjon eller enhver Tjeneste, av deg eller noen tredjepart, selv om Produsenten er informert om muligheten for slik erstatning.\n\nProdusenten skal bare være erstatningsansvarlig ved forsett og grov uaktsomhet."];
var privacyNotice = ["\n\nVi respekterer ditt personvern når vi håndterer dine personopplysninger. Denne Personvernerklæringen beskriver hvilken enhet som er ansvarlig for behandlingen av personopplysninger vi samler inn fra deg i forbindelse med bruken av våre Smart TV-tjenester (\"Tjenester\"), hvilke typer personopplysninger vi samler inn om deg, hva vi bruker de til, og dine rettigheter knyttet til vår bruk av dine personopplysninger. \n\n1.	Behandlingsansvarlig og representant i EU\n\nInnsamlingen, behandlingen og bruken av personopplysningene samlet inn fra deg når du benytter våre Tjenester utføres av Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, China (\"Selskapet\"). Våre kontaktopplysninger samt kontaktopplysningene til vår representant i EU er oppgitt under punkt 12 nedenfor. Vennligst merk at vi imidlertid ikke er ansvarlig for alle behandlingsaktiviteter angitt under. Vi har uansett inkludert en beskrivelse av de respektive aktivitetene i vår Personvernerklæringen fordi denne behandlingen er tilknyttet din bruk av Smart TV-en. \n\n2.	Samtykke til behandling\n\nEnkelte av behandlingsaktivitetene som vi gjennomfører krever ditt samtykke, f.eks. bruken av personopplysningene dine med formål om å forbedre Tjenestene. \n\nSamtykke er frivillig og du vil fortsatt kunne benytte Tjenestene om du ikke samtykker. Imidlertid vil du kunne se innhold som ikke er skreddersydd etter dine preferanser. Uavhengig av ditt samtykke forbeholder vi oss retten til å behandle dine personopplysninger i den utstrekning dette er tillatt etter gjeldende lovgivning.\n\nDu kan trekke tilbake samtykket ditt på ethvert tidspunkt. Dersom samtykket trekkes tilbake, vil det ikke påvirke lovligheten av behandling som bygger på samtykket før det trekkes tilbake. For å trekke tilbake ditt samtykke og/eller protestere (jf. punkt 10 og Vedlegg Dine Rettigheter under for mer om din rett til å protestere), vennligst foreta de nødvendige endringer i personverninnstillingene på Smart TV-en din. \n\n3.	Spesifikke kategorier av personopplysninger\n\nVi behandler særskilt de følgende kategorier av personopplysninger:\n\nEnhets-ID: Smart TV-en din oppbevarer et fast unikt nummer som setter oss i stand til å identifisere og verifisere Smart TV-en når du benytter Tjenestene. Dette nummeret kalles Enhets-ID-en. \n\nIP-adresse og MAC-adresse: Smart TV-en vil bli tildelt en IP-adresse når den benytter internett. Hvis Smart TV-en din er koblet til en ruter (f.eks. i et lokalt hjemmenettverk eller lokalt WLAN), kan vi behandle IP-adressen til en slik ruter. MAC-adressen er et unikt nummer som er tildelt hvert nettverk som samhandler med Smart TV-en din. \n\nEnhetsspesifikk informasjon: Smart TV-en oppbevarer ytterligere informasjon om seg selv og dens konfigurasjoner. Denne informasjonen inkluderer Smart TV-typen, versjonen av operativsystemet på Smart TV-en, dens skjermoppløsning, prosjekt-ID-en (dvs. informasjon vedrørende konfigurasjonsfiler), brukeren, navn på nettleser, nettleserversjon, og språket og landet som har blitt konfigurert i Smart TV-en. \n\nDenne informasjonen vil bli benyttet av oss og vil bli oppgitt til våre tjenestepartnere og innholdspartnere for de formål som er angitt nedenfor. \n\n4.	Formålene som vi behandler for og/eller bruker personopplysningene dine til, og behandlingsgrunnlag\n\nFormålene som vi behandler dine personopplysninger for og de respektive behandlingsgrunnlagene er beskrevet under. I den utstrekning avtalemessige formål er angitt som behandlingsgrunnlag, kan vi ikke tilby deg Tjenesten om du ikke gir oss de respektive opplysningene. I den utstrekning samtykket ditt er angitt som behandlingsgrunnlag, står du fritt til å avgi eller tilbakeholde samtykket ditt. Hvis du ikke ønsker å gi ditt samtykke, vil vi ikke behandle personopplysningene dine for de respektive formålene. \n\n•	Tilby Tjenestene: Vi bruker IP-adresse og MAC-adresse, Enhets-ID, versjonen av operativsystemet til Smart TV-en, klienttype på Smart TV-en din og dens skjermoppløsning, prosjekt-ID-en (dvs. informasjon vedrørende konfigurasjonsfiler), DTV kanallisten din, sette kanaler, tidssone, land og språkinnstillinger for å gi Smart TV-en din tilgang til Tjenestene og tjenester tilbudt av innholdspartnere. Formål inkluderer (men er ikke begrenset til) tilbud av lokasjonsbaserte tjenester til deg (f.eks. værmeldinger); misbrukshåndtering, håndtering av sikkerhetshendelser, overvåkning av tilgjengeligheten til Tjenestene, og tilbud av reservetjenester for brukerpreferanser.  \n\nNår du benytter Tjenestene vil Smart TV-en forespørre informasjon fra Tjenestene via internett. Som en del av disse forespørslene vil IP-adressen din som beskrevet ovenfor og språket og landet som har blitt valgt på Smart TV-en din bli overført til vår tjenestepartner. Vår tjenestepartner vil behandle den respektive informasjonen i samsvar med deres personvernerklæring.\n\nBehandlingsgrunnlaget for denne behandlingen av dine personopplysninger er avtaleformål i henhold til artikkel 6 (1) b) i EUs Personvernforordning (\"GDPR\").\n\n•	Tjenesteinstillinger: Som en del av den vanlige funksjonaliteten av Tjenestene kan du manuelt arrangere rekkefølgen applikasjonene vises på ved bruk av Tjenestene. Vår tjenestepartner vil oppbevare rekkefølgen din og andre preferanser du velger ved bruk av Tjenestene. Denne informasjonen vil knyttes til Enhets-ID-en. \n\nBehandlingsgrunnlaget for denne behandlingen av dine personopplysninger er avtaleformål i henhold til artikkel 6 (1) b) i GDPR.\n\n•	Verifisering: Når du kobler Smart TV-en din til internett og skrur på Smart TV-en, vil den automatisk kobles til Tjenestene som administreres av vår tjenestepartner. Smart TV-en din vil så bli verifisert som godkjent for tilgang til Tjenestene. For verifiseringsformål, vil Tjenestene oppbevare en eller flere unike identifikasjonsnumre relatert til Smart TV-en din. Vi bruker Enhets-ID-en og MAC-adresse for verifiseringsformål. Vi oppgir også Enhets-ID-en til utvalgte innholdspartnere for verifiseringsformål. Disse innholdspartnerne benytter Enhets-ID-en for å verifisere Smart TV-en din for tilgang til tjenestene tilbudt av en innholdspartner. \n\nBehandlingsgrunnlaget for denne behandlingen av dine personopplysninger er avtaleformål i samsvar med artikkel 6 (1) b) i GDPR.\n\n•	Fjerndiagnose: Som en del av Tjenestene, tilbyr vi deg fjerndiagnosetjenester. Av denne grunn, behandler vi Enhets-ID-en, enhetsnummer, serienummer, MAC-adresse, og feillogger, feilkoder og feilbeskrivelser som automatisk gis av feilmodulen (applikasjon, middleware-system).\n\nI tillegg, hvis du ringer vår kundeservice, avhengig av ditt forutgående samtykke, vil en kundebehandler også kunne få ekstern tilgang til TV-en din og utføre ytterligere fjerndiagnosetjenester. I så fall, vil kundebehandleren få tilgang til TV-en og nettverkene dine, applikasjoner og lagrede dataopplysninger, og kan behandle Enhets-ID, enhetsnummer, serienummer, MAC-adresse, feillogger, feilkoder, feilbeskrivelser, Terminal-ID, installert APP-informasjon, skjermbilde av TV-en og informasjon fra tilkoblede USB/Bluetooth-enheter for å vurdere TV-ens tilstand og tilhørende applikasjoner og opplysninger. Feilloggene kan inneholde informasjon, slik som TV-ens programlogg, musikkspilleliste, brukernavnet og passordet til en tredjeparts APP, hvis ikke tredjeparts APP-en brukt til kringkasting har kryptert denne informasjonen. Dette vil bli gjort for å diagnostisere problemer, endre systeminnstillinger etter din forespørsel eller for å rette opp i rapporterte problemer. I tillegg, ved forespørsel, kan kundebehandleren foreta feilsøking, kjøre programmer eller installere/avinstallere programvare, rekonfigurere og/eller på annen måte utføre service eller teknisk brukerstøtte på TV-en. \n\nEnhver fjerntilgang vil kun finne sted etter at du har aktivert fjernstøttefunksjonen ved å huke av den aktuelle avkrysningsboksen på TV-en din, og vil opphøre etter den respektive økten. \n\nBehandlingsgrunnlaget for denne behandlingen av dine personopplysninger er avtaleformål i henhold til artikkel 6 (1) b) i GDPR.\n\n•	Reklamasjonstjenester: I henhold til gjeldende lovgivning kan du ha garanti eller lignende rettigheter til å motta reklamasjonstjenester. TCL Europe, 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, Frankrike er ansvarlig for å håndtere garantikrav eller andre krav om reklamasjonstjenester og behandlingen av dine personopplysninger tilknyttet dette. Dvs. for formål om reklamasjonstjenester, er TCL Europe behandlingsansvarlig, og vi er ikke ansvarlig for denne behandlingen av dine personopplysninger.\n\nNår du ber om våre reklamasjonstjenester, kan navnet ditt, e-postadressen din, telefonnummer, forespørselen og adressen din bli inkludert i fakturaen være påkrevd for formålet om å tilby deg reklamasjonstjenestene. Informasjonen vil også kunne samles inn gjennom reklamasjonspartnere til våre forhandlere eller autoriserte tjenestetilbydere hvis du ringer dem for service. Du kan kontakte TCL Europe som angitt i punkt 12 nedenfor for mer informasjon om beskyttelsen av personopplysninger i forbindelse med reklamasjonstjenester.\n\nBehandlingsgrunnlaget for denne behandlingen er plikten til å overholde rettslige forpliktelse i henhold til artikkel 6 (1) c) GDPR.\n\n•	T-Channel: T-Channel er hovedsiden for bruk av Smart TV-en på Linux-operativsystem (vennligst se under for bruk på Android-operativsystem) og gir deg muligheten til å velge et bestemt innhold.\n\nBehandlingsgrunnlaget for behandlingen av dine personopplysninger som er nødvendig for din bruk av T-Channel er avtaleformål i henhold til artikkel 6 (1) b) i GDPR.\n\nAvhengig av ditt forutgående samtykke, vil vi også overvåke din bruk av T-Channel, dvs.:\n\n	Når du starter å bruke T-Channel, vil vi notere tidspunktet T-Channel åpnes og lukkes.\n\n	Når du begynner å spille av en video på T-Channel, vil vi notere videoens navn og varighet (gjelder ikke for Netflix, YouTube eller andre tjenester tilbudt av tredjeparter).\n\n	Når du går inn på eller forlater en side, vil vi notere tiden du oppholder deg på siden.\n\n	Når du beveger pilen fra et sted til et annet, eller åpner en applikasjon, vil vi notere denne hendelsen.\n\n	Når du installerer, fjerner eller oppdaterer applikasjoner, vil vi notere disse hendelsene, herunder navnet på applikasjonen. \n\nVi samler inn denne informasjonen hovedsakelig for \"big data\"-analyser for å forbedre produktene og tilby bedre innholdstjenester til våre brukere. \n\nBehandlingsgrunnlaget for behandlingen av dine personopplysninger i forbindelse med overvåkningen av bruken din av T-Channel er samtykket ditt i henhold til artikkel 6 (1) a) GDPR. \n\nHvis du har kjøpt en Android TV og benytter Googles Android-operativsystem, vil dine personopplysninger behandles av Google og vi vil ikke være ansvarlig for slik behandling. Vennligst se Googles personvernerklæring for informasjon vedrørende behandlingen av personopplysningene og dine respektive rettigheter. \n\n•	T-Cast: T-Cast gir deg muligheten til å styre TV-en din med telefonen og å dele videoer, musikk og bilder oppbevart på smarttelefonen din på TV-en. T-Cast gir deg også muligheten til å speile smarttelefonen din på TV-en din. \n\nNedlastningen og bruken av applikasjonen er frivillig. Hvis du laster ned og bruker applikasjonen, vil vi behandle MAC-adressen for å kalkulere hvor mange T-Cast-versjoner som har blitt benyttet i markedet. Dette er nødvendig for å kunne tilby deg denne tjenesten. Hvis du bruker vår andre-skjerm-funksjonalitet, vil kontrollene du aktiverer i applikasjonen og land- og språkinnstillinger, DTV-kanallisten, favorittkanallister, liste over planlagte sendinger, Enhets-ID, nåværende kanal, protokollversjon og IP-adressen til Smart TV-en din bli samlet inn og behandlet av oss på våre servere. Våre servere vil så kontrollere Smart TV-en din som instruert av deg i appen. \n\nBehandlingsgrunnlaget for denne behandlingen av dine personopplysninger er avtaleformål i henhold til artikkel 6 (1) b) i GDPR.\n\n•	TCL-assistent: TCL-assistenten er en funksjon som tillater TV-en din å koble seg til Amazon Alexa-kompatible enheter (slik som Echo) for å styre slike enheter med stemmen din. For å kunne benytte deg av denne funksjonen, må du først registrere TV-en din på Amazons hjemmeside ved å bruke TCL-koden som er å finne på TV-en din. Du vil da kunne gi muntlige instruksjoner til den Amazon Alexa-kompatible enheten, ved trykke på mikrofonknappen på fjernkontrollen til TV-en din.\n\nHvis du bruker TCL-assistenten, samler TV-en din inn stemmen din og sender den til Amazon Alexa-skyen for stemmegjenkjennelse og videre behandling. Opplysningene dine vil bli direkte overført til Amazon, og ingen opplysninger vil bli behandlet ytterligere eller lagret lokalt på TV-en din. Vennligst se Amazons personvernerklæring for informasjon vedrørende Amazons videre behandling av opplysningene dine. \n\nBehandlingsgrunnlaget for denne behandlingen av dine personopplysninger er avtaleformål i henhold til artikkel 6 (1) b) i GDPR. \n\n•	Alexa Voice Recognition (AVS): AVS er en funksjon som tillater deg å styre TV-en med stemmen din. For å kunne benytte deg av denne funksjonen, må du først registrere TV-en din på Amazons nettside ved å bruke registreringskoden generert av Amazon. Du vil da kunne gi muntlige instruksjoner til TV-en ved å trykke på mikrofonknappen på fjernkontrollen til TV-en din.\n\nHvis du bruker AVS, samler TV-en din inn stemmen din og sender den til Amazon Alexa-skyen for stemmegjenkjennelse og videre behandling. Opplysningene dine vil bli direkte overført til Amazon, og ingen opplysninger vil bli lagret lokalt på TV-en din. Vennligst se Amazons personvernerklæring for informasjon vedrørende Amazons videre behandling av opplysningene dine.\n\nNår du bruker AVS, vil TV-navnet ditt være påkrevd for at vi skal finne hvilken TV du vil styre. \n\nBehandlingsgrunnlaget for denne behandlingen av dine personopplysninger er avtaleformål i henhold til artikkel 6 (1) b) i GDPR. \n\nVidere, vil vi registrere hvor ofte og hvor lenge du har brukt AVS og hvilken funksjon du har brukt innenfor AVS. Vi samler inn denne informasjonen for å forbedre produkter og tilby bedre innholdstjenester til våre brukere.\n\nBehandlingsgrunnlaget for denne behandlingen av dine personopplysninger er våre berettigede interesser i henhold til artikkel 6 (1) f) i GDPR. Mer informasjon om interesseavveiningen er tilgjengelig ved forespørsel. \n\n•	Programvareoppdateringer: Programvareoppdateringer er en del av Tjenestene. Følgelig, hver gang Smart TV-en din blir skrudd på, vil den gi oss IP-adressen, Enhets-ID-en, enhetsnummeret, programvareversjonen, klienttypen for din Smart TV, prosjekt-ID (dvs. konfigurasjonsfiler), bruker-ID og serienummer for å se om programvareoppdateringer er tilgjengelige og tilby deg egnede programvareoppdateringer. \n\nBehandlingsgrunnlaget for denne behandlingen av dine personopplysninger er avtaleformål i henhold til artikkel 6 (1) b) i GDPR.\n\n•	Forfølgelse av rettskrav: Vi kan være forpliktet til å gi opplysninger til kompetente politimyndigheter eller domstoler. Dette vil bare gjøres underlagt rettslig gjeldende instrumenter som hjemmel eller rettsordre som pålegger oss å samarbeide med de relevante myndighetene. \n\nBehandlingsgrunnlaget for denne behandlingen er plikten til å overholde rettslige forpliktelse i henhold til artikkel 6 (1) c) GDPR.\n\nDet er mulig å benytte Tjenestene med pseudonymer, med mindre spesifikke tjenester krever at du oppgir navnet ditt og/eller e-postadresse. \n\n5.	Personvern og sikkerhet for barn under 16 år\n\nVi forstår viktigheten av å ta ekstra forhåndsregler for å beskytte personvernet og sikkerheten til barn som benytter våre Tjenester. Barn under 16 år, eller tilsvarende minimumsalder i det aktuelle landets lovgivning, har ikke lov til å oppgi sine personopplysninger via TV-settet eller når de ringer for reklamasjonstjenester, med mindre foreldrene deres avgir gyldig samtykke.\n\nEttersom vi aldri samler inn fødselsdatoen til våre brukere, kan vi ikke identifisere brukernes alder. Om vi blir kjent med at vi har samlet inn personopplysninger om et barn under 16 år, eller tilsvarende minimumsalder avhengig av landets lovgivning, utenfor de ovennevnte omstendigheter vil vi imidlertid ta skritt for å slette informasjonen så fort som mulig.\n\n6.	Tredjepartsapplikasjoner\n\nSmart TV-en din gjør det mulig å benytte applikasjoner tilbudt av tredjeparter, slik som Netflix, YouTube eller HbbTV (opptakstjeneste (\"red button\") tilbudt av TV-kringkastere). Du kan laste ned applikasjonene fra \"app store\"-en eller aktivere tredjeparts applikasjoner som allerede er forhåndsinstallert på enheten din. Enhver tredjepartsapplikasjon som er forhåndsinstallert på enheten din vil ikke samle inn personopplysninger uten ditt forutgående samtykke. F.eks. er Netflix allerede forhåndsinstallert på enheten, men vil bare samle inn opplysninger når du logger inn på Netflix-kontoen din. HbbTV samler kun inn opplysninger når du gir samtykket ditt til innsamling ved å trykke på den angitte knappen på fjernkontrollen din.    \n\nHvis du aktiverer en tredjepartsapplikasjon, kan personopplysninger om deg bli behandlet av tilbyderen av applikasjonen. Vi er ikke ansvarlig for slik behandling; vennligst se personvernerklæringen til tredjepartsapplikasjonen for informasjon om den aktuelle behandlingen av dine opplysninger og dine respektive rettigheter.\n\n7.	Kategorier av mottakere\n\nVi deler bare dine personopplysninger som samles inn under bruken din av Tjenestene med tredjemanns innholdspartnere hvis du forespør et visst innhold tilbudt av slike innholdspartnere, eller med tjenestetilbydere som opptrer som databehandlere, og som hjelper oss med å tilby Tjenestene.\n\nVi deler bare dine personopplysninger med andre tredjeparter hvis vi er forpliktet til å gjøre dette med grunnlag i rettslige forpliktelser (f.eks. til domstoler eller politimyndigheter), hvis du har samtykket til den aktuelle delingen eller om delingen på annen måte er lovlig under gjeldende lovgivning. \n\n8.	Land hvor dine personopplysninger vil bli behandlet \n\nVi og/eller noen av de ovenfor nevnte mottakerne av dine personopplysninger kan befinne seg utenfor EØS-området (f.eks. i Kina eller USA). Som en følge av dette vil dine personopplysninger kunne bli behandlet i land med varierende personvernbeskyttelse sammenliknet med nivået for ditt eget land, og som dermed ikke oppstiller et beskyttelsesnivå i samsvar med GDPR. Følgende land vil fra et europeisk perspektiv gi tilstrekkelig vern av personopplysninger: Andorra, Argentina, Canada, Sveits, Færøyene, Guernsey, Israel, Jersey, Man, New Zealand og Uruguay. Mottakere i USA vil delvis kunne være underlagt EU-U.S. Privacy Shield, og dermed også ut fra en europeisk personlovsstandard gi et tilstrekkelig beskyttelsesnivå for personopplysninger.  \n\nDer det anses nødvendig, vil vi iverksette passende sikkerhetstiltak for overføring av personopplysninger til mottakere utenfor EU som ikke gir tilstrekkelig personvernbeskyttelse. En kopi av et aktuelt tiltak vil kunne anmodes ved å kontakte oss som angitt under punkt 12 nedenfor.\n\n9.	Lagringsperiode \n\nDine personopplysninger vil bli lagret så lenge dette er nødvendig for å kunne levere deg våre Tjenester. Generelt vil dette for de fleste personopplysninger innebære en lagringsperiode på én måned. Dersom formålet med lagringen er fjerndiagnosetjenester og/eller reklamasjonstjenester, vil vi imidlertid kunne beholde dine personopplysninger i opptil ti år. Så snart dine personopplysninger ikke lenger anses nødvendige for overholdelsen av avtalemessige eller rettslige forpliktelser, vil vi fjerne dine opplysninger fra våre systemer og registre, og/eller iverksette skritt for å anonymisere disse i tilstrekkelig grad, slik at identifisering ikke lenger er mulig.  \n\n10.	Dine rettigheter\n\nI henhold til gjeldende personvernlovgivning vil du kunne ha rett til å: (1) be om innsyn i dine personopplysninger; (2) be om retting av dine personopplysninger; (3) be om sletting av dine personopplysninger, (4) be om at behandlingen av dine personopplysninger begrenses; (5) be om dataportabilitet, og (6) protestere på behandlingen av dine personopplysninger. Vær imidlertid oppmerksom på at de nevnte rettighetene kan være begrenset i henhold til gjeldende nasjonal personvernlovgivning. For mer informasjon om dine rettigheter, vennligst se Vedlegg Dine Rettigheter nedenfor.\n\nDu vil også ha rett til å sende inn en klage til Datatilsynet. \n\nVennligst ta kontakt med oss som angitt i punkt 12 nedenfor for å utøve dine rettigheter. \n\n11.	Endringer i vår Personvernerklæring \n\nFor å kunne forbedre våre Tjenester vi vil kunne kreve endringer i denne Personvernerklæringen – f.eks. ved implementering av ny teknologi eller innføring av nye tjenester. Vi forbeholder oss retten til å endre eller supplere denne Personvernerklæringen til enhver tid.\n\n12.	Kontaktinformasjon og representant i EU \n\nHvis du har spørsmål eller kommentarer til denne erklæringen eller ønsker å klage på vår behandling av dine personopplysninger, vennligst ta kontakt med oss på følgende måter:\n\nKontaktskjema: www.tcl.eu/en/contact-us \n\nVår representant i EU er TCL Europe. Adresse: 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, Frankrike. Du kan kontakte TCL Europe via kontaktskjemaet overfor. \n\nVersjon: 2.0\n\nVedlegg Dine Rettigheter\n\na.	Innsynsrett: Du kan ha rett til å få vår bekreftelse på om vi behandler personopplysninger om deg eller ikke, og dersom dette er tilfellet, å be om innsyn i personopplysningene. Innsynsinformasjonen inkluderer – blant annet – formålene med behandlingen, de berørte kategoriene av personopplysninger, og mottakerne eller kategoriene av mottakere som personopplysningene er eller vil bli utlevert til. Dette en imidlertid ikke en absolutt rettighet og andres rettigheter og interesser kan begrense din innsynsrett. \n\nDu kan ha rett til å motta en kopi av personopplysningene som behandles. Dersom ytterligere kopier blir anmodet av deg, kan vi kreve et rimelig gebyr basert på administrasjonskostnadene.\n\nb.	Rett til retting: Du kan ha rett til å få uriktige personopplysninger om deg rettet av oss. Avhengig av formålene med behandlingen, kan du ha rett til å få ufullstendige personopplysninger komplettert, herunder ved å fremlegge en supplerende erklæring.\n\nc.	Rett til sletting (\"rett til å bli glemt\"): Under visse omstendigheter, kan du ha rett til å få personopplysningene om deg slettet, og vi kan ha plikt til å slette slike personopplysninger. \n\nd.	Rett til begrensning av behandling: Under visse omstendigheter, kan du ha rett til å kreve at behandlingen av personopplysninger om deg begrenses. Dersom dette er tilfelle, vil de respektive opplysningene bli merket og bare behandlet av oss for visse formal.\n\ne.	Rett til dataportabilitet: Under vise omstendigheter, kan du ha rett til å motta personopplysninger om deg selv, som du har gitt til oss, i et strukturert, alminnelig anvendt, og maskinlesbart format og du kan ha rett til å overføre disse opplysningene til en annen behandlingsansvarlig uten at vi hindrer dette.\n\nf.	Rett til å protestere:\n\nUnder visse omstendigheter kan du ha rett til å protestere til enhver tid, av grunner knyttet til din særlige situasjon, eller når personopplysningene behandles med henblikk på direkte markedsføring, mot vår behandling av dine personopplysninger. Det vil kunne kreves at vi ikke lenger behandler dine personopplysninger.\n\nDu vil dessuten ha rett til å protestere til enhver tid mot behandling av personopplysninger som angår deg, hvis dine personopplysninger behandles for direkte markedsføringsformål, herunder profilering i den utstrekning dette er relatert til slik direkte markedsføring. I et slikt tilfelle vil ikke dine personopplysninger lenger behandles for slike formål av oss."];
var cookieNotice = ["\n\nVi respekterer ditt personvern når du bruker Smart TV-en og Tjenester produsert og levert av oss. Smart TV-en vil godta, lagre og overføre informasjonskapsler benyttet av mange nettsider og andre internettjenester, for å sikre at disse nettstedene og tjenestene fungerer som de skal.\n\nVi benytter oss ikke selv av informasjonskapsler når vi tilbyr deg våre Tjenester. Imidlertid vil tredjeparter (f.eks. applikasjonsleverandører) kunne benytte seg av informasjonskapsler når du bruker Smart TV-en din for å få tilgang til deres tjenester. Denne merknaden om bruk av informasjonskapsler vil derfor kun inneholde begrenset informasjon om tredjeparters eventuelle bruk av informasjonskapsler. For mer informasjon om tredjeparts faktiske bruk av informasjonskapsler og deres funksjon, vises det til aktuelle tredjeparters egne merknader om bruk av informasjonskapsler. Imidlertid vil vi i denne merknaden gi en mer generell beskrivelse av hvilke informasjonskapsler som kan lagres på din Smart TV og hvordan du kan administrere disse.\n\n1.	Hva er en informasjonskapsel?\n\nInformasjonskapsler (cookies) er små tekstfiler som kan lagres på din Smart TV når du åpner en nettside eller opptakstjenester (\"red button\") på din TV-stasjon. Under påfølgende bruk vil informasjonskapsler lagret på din Smart TV, sende informasjon til eieren av nettsiden eller tjenesten. Informasjonskapsler er svært vanlige og brukes på en rekke nettsider og tjenester. Hver informasjonskapsel vil vanligvis inneholde domenenavnet på innehaveren av informasjonskapselen, informasjonskapselens \"levetid\", og en verdi (vanligvis en unik nummerkombinasjon). For en grundigere forklaring på hva informasjonskapsler er, og hvordan de fungerer, vennligst se www.allaboutcookies.org.\n\nInformasjonskapsler vil kunne inndeles i funksjonelle og ikke-funksjonelle informasjonskapsler. Funksjonelle informasjonskapsler er informasjonskapsler som er strengt nødvendige for å kunne tilby deg en tjeneste. Ikke-funksjonelle informasjonskapsler vil være enhver annen bruk av informasjonskapsler. \n\n2.	Tredjeparts nettsider \n\nVed besøk av en tredjeparts nettside gjennom Tjenestene på Smart TV-en din, oppstår muligheten for at slike nettsider eller tjenester lagrer informasjonskapsler på din Smart TV, og at dine bevegelser på disse nettsidene overvåkes og lagres. Fra vår side etterspørres og oppfordres det ikke til slike aktiviteter, og vi vil heller ikke benytte oss av slik informasjon. Vennligst se aktuelle tredjeparters egen personvernerklæring og merknad om bruk av informasjonskapsler for mer informasjon om tredjeparts bruk av slike informasjonskapsler. \n\n3.	Sletting av informasjonskapsler \n\nMed brukergrensesnittet på Smart TV-en din kan du slette alle informasjonskapsler og annen lokalt lagret nettleserdata fra din Smart TV. Det anbefales at du fjerner alle informasjonskapsler og andre lokalt lagrede innstillinger før du selger eller gir bort Smart TV-en din.\n\nVersjon: 2.0"];
var privacyPolicy = ["Kryss av i boks(ene) under hvis du vil bruke våre Smart TV-tjenester og andre tjenester. For å bruke disse tjenestene må vi behandle personopplysningene dine i samsvar med retningslinjene for personvern: http://www.tcl.eu/en/","Aktiver Smart TV-tjenesten, lagring av enhetsinnstillinger og automatisk autentisering av Smart TV. Hvis du fjerner avmerkingen for dette, får du kun standard TV og HDMI.","Aktiver automatisk programvareoppdatering.Kryss av i denne boksen for å holde produktet ditt oppdatert med de nyeste programvareoppdateringene og den beste ytelsen.","(Det er nødvendig å installere programvareoppdateringer for at TV-en din skal fungere riktig, da disse gir deg nye funksjoner, stabilitet og sikkerhet. Derfor anbefaler vi at du merker av i boksen.)","Merk av i boksen nedenfor hvis du godtar at vi behandler personopplysningene dine for også følgende formål. Hvis du vil ha mer informasjon om hvordan vi behandler personopplysningene dine, kan du lese våre retningslinjer for personvern: http://www.tcl.eu/en/","Jeg godtar at personopplysningene (f.eks. tidspunktet for oppstart og avslutting av T-Launcher) mine blir behandlet slik at TCL kan forbedre produktene sine og levere bedre tjenester på smarte TV-er."];
var termsFirTitle = ["Vilkår og betingelser","Personvernmerknad","Melding om informasjonskapsler"];
var termsSecTitle = ["Les gjennom vilkårene & betingelsene og gi samtykke.","Les og godta retningslinjene for personvern.","Les og godta retningslinjene for informasjonskapsler."];
var tickall = "Merk alle";
var tickremindWords = "Merk av i avmerkingsboksene, ellers kan du ikke bruke Smart TV-tjenester.";