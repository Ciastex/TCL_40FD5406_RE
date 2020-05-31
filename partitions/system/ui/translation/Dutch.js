
var all_country 	= ["Australië","Oostenrijk","België","Bulgarije","Kroatië","Tjechische Republiek","Denemarken","Finland","Frankrijk","Duitsland",
						"Griekenland","Hongarije","Italië","Luxemburg","Nederland","Noorwegen","Polen","Portugal","Roemenië","Rusland",
						"Servië","Slovenië","Spanje","Zweden","Zwitserland","Verenigd Koninkrijk","Nieuw Zeeland"," "/*Arab*/,"Estland"," "/*Hebrew*/,
						"Letland","Slowakije","Turkije","Ierland","Japan","Filippijnen","Thailand","Maldives","Uruguay","Peru",
    "Argentina","Chile","Venezuela","Ecuador","Costa Rica","Paraguay","Bolivia","Belize","Nicaragua","Guatemala",
						"China","Taiwan","Brazil","Canada","Mexico","United States","South Korea","Romania","Vietnam"/*新添加的，底层结构体中没有*/,"Oekraïne"/*新添加的，底层结构体中没有*/,
    					"Iran","Iraq"," ","Kazakhstan","Uzbekistan"," ","Kyrgyzstan","Algeria","Egypt","Tunisia",
    					"Tanzania","Kenya","Pakistan","Indonesia","Kuwait","Saudi Arabia","Qatar","Israel","Lebanon","bahrain",
    					"Angola","Congo","India","Turkmenistan","Colombia","Mongolia","Bangladesh","Nepal","Sri Lanka","North Korea",
						"Moldavië","Polynesia","EI Salvador"," ","Fiji","Liberia","Jordan","Myanmar","Ghana","Georgia",
    					"Armenia","Oman","yemen","Syria","Palestine","Afghanistan","Morocco","benin","IvoryCoast","Nigeria",
    					"Sudan","Ethiopia","Zambia"," ","South Africa","mozambique","Albanië","Belarus","Iceland",
						"Litouwen","Mauritius","Dubai","UAE","Tajikistan","Bengal","Bosnië-Hercegovina","Cyprus","Kosovo","Macedonië",
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
				
var all_language 	= ["Tsjechisch","*","Deens","*","*","Duits","Engels","Spaans","Grieks","Frans",
						"Kroatisch","*","Italiaans","Hongaars","Nederlands","Noors","Pools","Portugees","Russisch","Roemeens",
						"Sloveens","Servisch","Fins","Zweeds","Bulgaars","Slowaaks","Chinese","*","Gaelic","*",
						"Welsh","Arabisch","Iers","Lets","*","Turks","Ests","Nederlands"/*Netherlands*/,"Koreaans","*",
						"Hindi","*","*","Mandarijn","Cantonese","Maori-","Oorspronkelijk audio"/*Qaa*/,"Niet gedefinieerd"/*Undetermined*/,"*","Onbekend",
						"Niet gedefinieerd","*","*","*","*","*","*","*","*","*",
						"*","*","*","Albanees","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baskisch","*","*",
						"*","*","*","*","*","*","*","Bosnisch","*","*",
						"*","*","*","*","Białoruski","*","*","Catalaans","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galicisch","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","IJslands","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Japans","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Litouws",
						"*","*","*","*","*","*","*","Macedonisch","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romance","*","*","*","*",
						"*","*","*","Samisch","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Teletekst",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Oekraïens","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Uit","Aan"];
var okCancel		= ["OK","Annuleren"];
var yesNo			= ["JA","NEE"];
var level			= ["Uit","Laag","Hoog","Middel"];
var manualAuto		= ["Handmatig","Auto"];
var homeShop		= ["Thuis","Winkel"];
var picPreset		= ["Standaard","Dynamic","Natuurlijk","Film","Gebruiker"];
var picColorTemp	= ["Koel","Normaal","Warm","Gebruiker"];
var pic3dNavig		= ["Handmatig","Auto","Halfautomatisch"];
var _3dOptions		= ["3D Modus","3D-naar-2D","L-R Schakelaar","Diepte van Veld"];
var pic3DMode       = ["Uit","2D-naar-3D","Zij-bij-Zij","Boven- en Onderkant","Lijnspreiding"];
var picEcoOptions	= ["Energiebesparing","Lichtsensor","Lokale verduistering","Mix dimmen"];
var picGeoOptions	= ["Geometrie","H.positie","V. positie","Klok","Fase"];//Geometry 无翻译
var picAdWhiteBal	= ["R-versterking","G-versterking","B-versterking","R-offset","G-offset","B-offset"];
var souOptions		= ["Voorinstelling geluid","Balans","Audiovertraging","SRS TSHD","Auto volume",
						"SPDIF-type","SPDIF-vertraagd","TV-plaatsing","Audiotaal","Audiokanaal",
						"Audiobeschrijving","Bass boost","Dolby Digital Plus"];
var souSpdifType	= ["Auto"/*Dolby*/,"PCM","Uit"];
var colorSpace      = ["Auto","Natief","Gebruiker"];
var souPresetPara	= ["100Hz","500Hz","1.5KHz","5KHz","10KHz"];
var chOptions		= ["Kanaalscan","Kanaallijst","EPG","Kanaalbeheer","Kanaaldiagnostiek",
						"timeshift","Ondertitel","Teletekst","Type Kanaallijst"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Signaalsterkte","Signaalkwaliteit","Frequentie (KHz)","Service ID","Netwerk ID","Netwerknaam"];
var chScanOptions	= ["Land/regio","Versterkerfuncie","Kanaal scannen","Scan bijwerken","Analoog handm scan",
						["Handm scan kabel","Handm antenne scan","Satteliet handmatig afstemmen"],"Satelliet-antenne instelling","Selecteer favoriete netwerk","Wis de kanaallijst","LCN"];
var favNetDes		= "Gelieve uw favoriete netwerk te kiezen";
var tuner			= ["Kabel","Antenna","satelliet"];//Satelite 无翻译
var passError		= "Wachtwoord onjuist!\nGeef het opnieuw op.";
var chType			= ["Analoge kanalen:","Digitale kanalen:"];
var chScanStatus	= ["Status: Scannen","Status: Scan voltooid","Status: Scan annuleren","Status: Scanfout"];
var chScanPara		= ["Frequentie (KHz)","Modulatie","Symbol rate (Ksym/s)","Netwerk ID","Systeem",
						"Instellen","Signaalsterkte","Signaalkwaliteit","Scan-modus","Kanaal ID"];
var chScanParaMHZ      = ["Frequentie (MHz)"];
var chAtvManSys		= ["WEST-EUROPA","OOST-EUROPA","VK","Frankrijk"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Auto"];
var chCleanDes		= "Wilt u de kanaallijst wissen?";
var chDeletDes		= "Wilt u het kanaal verwijderen?";
var chOperator		= ["Ziggo","UPC","Andere"];
var chScanType		= ["Digitaal & Analoog","Digitaal","Analoog"];
var chScanMode		= ["Vol","Geavanc","Quick"];
var bookingModes	= ["Opnemen","Herinnering"];
var dayName			= ["zo","ma","di","wo","do","vr","za"];
var monthName		= ["jan", "feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"];
var filter			= ["Filtro","Type","Subtype"];
var chEpgFirstGenre	= ["Film","Nieuws","Voorstelling","Sport","Kinderen","Muziek","Kunst","Sociaal","Educatie","VRIJE TIJD","SPECIAAL"];
var chEpgSecondGenre= [["Drama","Detective","Avontuur","Science Fiction","Komedie","Soap","Romance","Ernstig","Pornofilm"," "," "," "],
						["Huidige zaken","Weerbericht","Nieuwstijdschrift","Documentaire","Discussie"," "," "," "," "," "," "," "],
						["Voorstelling","Spelvoorstelling","Varietévoorstelling","Praatprogramma"," "," "," "," "," "," "," "," "],
						["Sport","Speciale gebeurtenissen","Sporttijdschriften","Voetbal","Tennis",
							"Teamsport","Atletiek","Motorsport","Watersport","Wintersport",
							"Paardrijden","Vechtsport"],
						["Kinderen","Kleuters","Amusement van 6 to 14","Amusement van 10 to 16","Informatief","Tekenfilms"," "," "," "," "," "," "," "],
						["Muziek","Rock","Ernstig","Volksmuziek","Jazz","Muzikaal","Ballet"," "," "," "," "," "],
						["Kunst","Podiumkunsten","Schone kunsten","Godsdienst","Populaire cultuur",
							"Literatuur","Film","Experimenteel","Uitzenden","Nieuw medium",
							"Kunsttijdschriften","Mode"],
						["Sociaal","Tijdschriften","Economie","Opmerkelijke mensen"," "," "," "," "," "," "," "," "],
						["Educatie","Natuur","Technologie","Medicijnen","Vreemde landen","Sociale wetenschap","Verder onderwijs","Talen"," "," "," "," "],
						["Vrije-tijdsbesteding","Toerisme","Handwerken","Motorrijden","Lichamelijke conditie en gezondheid","Koken","Reclame","Tuinieren"," "," "," "," "],
						["Oorspronkelijke taal","Zwart-wit","Niet uitgegeven","Live-uitzending"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Kanaal overslaan","Kanaal sorteren","Kanaal bewerken","Kanaal wissen","kanaal swap","kanaalinsertie"];
var chEditPara 		= ["Netwerknaam","Kanaalnummer","Kanaalnaam","Frequentie","Kleursysteem","Geluidssysteem"];
var chSatTitles		= ["Satelliettype","Satelliet-antenne instelling","Selecteer satteliet"];
var chSatEidtOptions= ["Sattelietnaam","Positie","LNB Vermogen","LNB frequentie (MHz)","Disk-ingang",
						"Toon 22KHz","tone burst","Frequentie (KHz)","Symbol rate (Ksym/s)","Polarisatie",
						"Signaalsterkte","Signaalkwaliteit","Satellietstatus"];
var chSatAutoPromt	= [["Alle","Netwerk"],
						["Alle","Gratis"]];
var chSatAutoScanOptions=["Selecteer satteliet","Scan-modus","Kanalen"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Universeel",];
var chSatDiSEqCInput= ["Ontkoppelen","A","B","C","D"];
var chSatTone22KHz	= ["Auto","Aan","Uit"];
var chSatToneBurst	= ["Ontkoppelen","tone burst A","tone burst B"];
var chSatPolarization= ["Horizontaal","Verticaal"];
var chSatSetupOptions=["Antennetype","Tuner","Bandfrequentie"];
var chSatAntennaType= ["EnkeleKabel","Universeel"];
var chSatUserBands	= ["Gebruikersband 1","Gebruikersband 2","Gebruikersband 3","Gebruikersband 4","Gebruikersband 5","Gebruikersband 6","Gebruikersband 7","Gebruikersband 8"];
var chSatOthers		= ["Transponder"];
var chSatSetupOthers= ["Gedefinieerd door de gebruiker"];
var pleaseSelectSat = "Gelieve eerst satellieten te selecteren!";
var subOptions		= ["Ondertitel","Taal van digit ondertitels","Taal van digit ondertitels 2e","Type v. ondertitel"];
var ttxOptionsCon      = ["Taal v. decodeerpagina","Taal van digit teletekst"];
var subType			= ["Normaal","Auditief gehandicapt"];
var netIntf     	= ["Ethernet ","Draadloos"];
var netConnDes		= ["TV is de netwerkconnectie aan het testen.\nEven wachten",
						"De netwerkverbindingstest is geslaagd!",
						"De netwerkverbindingstest is mislukt."];
var netSsidError	= "De geldige lengte van SSID is 1 ~ 32 tekens. Controleer de SSID.";
var netOthers		= ["PIN-Code"];
var netWlessAutoDes	= ["Verifieer a.u.b. dat de volgende PIN-code is geïnstalleerd in het Toegangspunt voordat u op OK klikt.",
						"Druk a.u.b. binnen 120 seconden op de toets op het Toegangspunt voordat u op OK klikt."];
var netConnRemind	= ["Wachtwoord onjuist!",
						"Bezig met aansluiten. Een ogenblik geduld!",
						"Verbinding geslaagd en IP verkregen!",
						"Link Mislukt",
						"TV is aan het scannen van AP\nEven geduld",
						"Er is geen draadloos apparaat op TV aangesloten!"];
var netWireIpOptions= ["IP instelling","Adres type","IP adres","Subnetmasker","Standaard-gateway","Primaire DNS","Secundaire DNS"];
var netWireConnRemind= ["Voer a.u.b. een waarde in tussen 0 en 255.",
						"Aangesloten met succes!",
						"Type een geldig adres",
						"Aangesloten met succes!",
						"Verbinding mislukt!",
						"Bezig met aansluiten. Een ogenblik geduld!",
						"Gelieve een waarde in te voeren tussen 1 en 223."];
var netFlixOptions	= ["Deactiveren","ESN","Netflix versie"];
var netFlixDes	 	= ["Weet u zeker dat u wilt deactiveren?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Software update";
var netUpdateDialogTitle = "Software wordt bijgewerkt";
var netBGDownloadTitle 	= "Downloaden...";
var netUpdateLoadingPrompt= ["Op zoek naar upgrade, gelieve te wachten!",
							"Software wordt bijgewerkt..... Een ogenblik geduld!",
							"Schakel de TV a.u.b. NIET uit tijdens de software-update!",
                            "De vereiste software-update wordt automatisch op de achtergrond gedownload!"];
var netUpdatePrompt= ["Gefeliciteerd, uw softwareversie is de nieuwste!",
						"De nieuwe softwareversie XXXX is gevonden. Wilt u deze nu downloaden? Dit kan even duren, afhankelijk van uw netwerkstatus.",
						"Aanmelden mislukt!",
						"Het is mislukt om gegevens te ontvangen, gelieve later opnieuw te proberen!",
						"Parse Update XML mislukt!",
						"Link Mislukt",
						"Downloaden software is voltooid Wilt u het bijwerken (flashen) van de software nu starten?",
						"Gegevens verloren! Download mislukt!",
						"Pakket controleren mislukt, probeer nogmaals a.u.b.!",
						"Netwerkstoring. Controleer a.u.b. en maak opnieuw verbinding...",
						"Update mislukt. Herstart TV a.u.b.!",
						"Het upgradebestand was onverwacht gewist. Voer de upgrade via netwerk a.u.b. opnieuw uit.",
						"De software is succesvol gedownload in de achtergrond. Wilt u de upgrade uitvoeren?"];
var netUpdateButtonText = ["Download", "Update", "Later", "Nooit", "OK","Vervolgen"];
var autoDetectPrompt = ["De nieuwe softwareversie XXXX is gevonden. Wilt u deze nu downloaden? Dit kan even duren, afhankelijk van uw netwerkstatus.",
						"De nieuwe softwareversie XXXX is gevonden. Wilt u de update nu uitvoeren?",
						"Het upgradeprocess via netwerk was de laatste keer afgebroken. Voer de upgrade opnieuw uit.",
                        "Het downloaden van nieuwe software versie XXXX is niet voltooid. Wilt u nu doorgaan?",
                        "Software is gedownload, wilt u nu bijwerken?"];
var sysOptions		= ["E-Handleiding","OSD-taal","Tijd instellen","Vergrendel","Invoerinstellingen",
						"Software update","Locatie","HbbTV modus","Cookies","Gemeenschappelijke interface",
						"Geavanceerde instellingen","Reset Winkel","LED-indicator","Onmiddellijke inschakeling","Auto-winkelmodus","Area","Demomodus"];
var sysResetDes		= "Weet u het zeker?";
var sysMenuLangOptions=["Taal","Gekozen audiotaal","Voorkeur audiotaal 2e"];
var sysTimerOptions	= ["Tijdzone","Regionaam","Klok","Slaaptimer","Auto stand-by", "Country region"];

var sysTimeZone		= ["As-zender","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Uit","10 Min","20 Min","30 Min","40 Min","50 Min","60 Min","90 Min","120 Min"];
var sysStandby		= ["Uit","4 uur","6 uur","8 uur"];
var sysRegionName	= ["Madrid ","Canarische Eilanden"];
var sysClockOptions	= ["Auto synchronisatie","Datum","Tijd","Uitschakeltimer","Tijd instellen",
						"Kanaal aanzetten","Uitschakeltimer","Tijd instellen"];
var sysTimer		= ["Uit","Dagelijks","Eenmaal"];

var sysInputSet		= ["Geen label","DVD","Blu-ray","HDD","DVDR",
						"HD-rec.","Spel ","VCR","PC","Digitale STB",
						"HD dig STB","Camera","Recorder","Anders"];
var sysAvVideoInput	= ["Auto","RGB_CVBS","RGB","CVBS","S-video"];
var sysUpdate		= ["Met USB","Met Netwerk","Op kanaal"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Kan de nieuwe software niet vinden!",
						"De nieuwe softwareversie XXXX is gevonden. Wilt u de update nu uitvoeren?",
						"Gelieve de USB-stick in te voegen.",
						"Pakket controleren mislukt, probeer nogmaals a.u.b.!",
						"Tijdens het bijwerken van de firmare NIET USB-dongle uittrekken en TV uitschakelen!!",
						"De software is succesvol bijgewerkt. \nTV zal dan automatisch opnieuw starten!",
						"De nieuwe softwareversie XXXX is gevonden. Wilt u deze nu downloaden? Dit kan even duren, afhankelijk van uw netwerkstatus.",
						"Downloaden...",
						"Downloaden software is voltooid Wilt u het bijwerken (flashen) van de software nu starten?",
						"Update mislukt!",
						"Zoeken naar upgradebestanden",
						"De software is succesvol bijgewerkt.\nHerstart de TV nu a.u.b."];
var sysProductInfo	= ["Huidige versie","Productnaam","Fabrikantnaam","Chassisnaam"];
var sysCiDes		= ["CI-kaart ontbreekt"];
var sysAdOptions	= ["DivX(R) registratie","DivX(R) uitschrijving","T-Link","Authorization Error","Afmeldbevestiging",
						"Verhuurbevestiging","Verhuur Verlopen"];
var sysRegistDes	= ["U dient uw apparaat te registreren om DivX beschermde video's te kunnen afspelen",
						"Registratiecode:",
						"Registreer u bij http://vod.divx.com"];
var sysDregistDes	= ["Uitschrijfcode:",
						"Schrijf uit op http://vod.divx.com",
						"Doorgaan met registratie?"];
var mediaAuthorization = ["Uw apparaat is niet geautoriseerd deze door DivX(R) beveiligde video af te spelen."];
var deregistrationConfrimation = ["Uw apparaat is al geregistreerd.","Wilt u echt deregistreren?"];
var rentalConfirmation = "De DivX(R) verhuur heeft XXXX van YYYY weergaves verbruikt. Verdergaan?";
var rentalExpired 	= "De DivX ®-verhuur is XXXX van de YYYYY beurten gebruikt. De DivX verhuur is verlopen.";

var parentalRatingNA		= ["***","***","***","***","***","***","***","***"];
var parentalRatingOptionUS		= ["***","***","***"];
var sysTVRatingUS=["***","***","***","***","***"];
var sysMPAAUS=["***","***","***","***","***","***"];
var parentalRatingOptionCanada		= ["***","***","***"];
var sysCanadaEng=["***","***","***","***","***","***"];
var sysCanadaFre=["***","***","***","***","***",""];
var sysResetRRT=["***"];
						
var sysLockOptions	= ["Kanaal blokkeren","Tijdsinterval vergrendelen","Programma blokken","Ingangsblokkering","Vergrendeling voorpaneel","Vergrendelinstallatie",
						"Verander wachtwoord","Max geluidsvolume","Alles verwijderen"];
var sysTimeIntervals= ["Vergrendel type","Starttijd","Eindtijd"];
var sysRatingOptions= ["Geen","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","Beoordeel voor volwassenen (Spanje)"];
var changePass		= ["Verander wachtwoord","Nieuw wachtwoord","Wachtwrd herhalen"];
var changePassDes	= ["Wachtwoord onjuist!\nGeef het opnieuw op.",
						"Wachtwoord is niet goed.\nGeef het opnieuw op.",
						"Wachtwoord succesvol ingesteld!",
						"Deze code is te simpel om te worden ingesteld als wachtwoord.\nVoer nogmaals in!"];
var sysPowerOnChOptions= "Modus selecteren";
var sysPowerOnCh	= ["Laatste status","Gebruiker selecteren"];
var netWlessSecu    = ["Open","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Geen","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Niet ondersteund"];
var netWlessSecu3	= ["Geen","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Niet ondersteund"];
var netOptions		= ["internetconnectie","Interface","Draadloos-instellingen","IP-instellingen","Informatie",
						"connectietest","DLNA","TV Remote","Netflix-instellingen","Wifi-weergave",
						"Adres type","IP adres","Subnetmasker","Standaard-gateway","Primaire DNS",
						"Secundaire DNS","SSID","BSSID","SSID invoeren a.u.b.:","Gebruikers-ID"];
var chEditDes		= ["Gedupliceerd kanaalnummer!","Druk op de rode toets om het huidige teken te verwijderen!","Ongeldige kanaalnummers"];
var chEpgNoProgram	= "Geen programma-info op dit moment, zoek eerst naar kanalen!";
var chEpgWords		= ["Programmagids","Geen programmagegevens.","Kanaal geblokkeerd","Geen programma-informatie.","Geen programma-titel."];
var chEpgBooking	= ["Programmering Info", "Kanaalnummer","Startdatum","Starttijd","Eindtijd",
						"Herhaaltype","Schematype","Toevoegen","Vervangen","Wijzigen",
						"Toevoegen/Modificeren"];
var epgHotKey		= ["Vorige dag","Volgende dag","Filtro","Planningslijst","Planning toevoegen"];
var chEpgBookRemind	= ["Incorrecte Starttijd","Incorrecte Eindtijd","Gedupliceerd Tijdschema","Succesvol opgeslagen.","Succesvol Verwijderd."];
var chSchePara		= ["Planningslijst","Starttijd","Startdatum","Programmatitel","Kanaalnaam",
						"Tijdsduur","Herhalen","Tijdschema","Bewerken","Wissen"];
var dateTimer		= ["Eenmaal","Dagelijks","Wekelijks"];
var scheduleDeleteReminds="Wilt u dit schema verwijderen?";
var scheduleNoLists	= "Er is geen schemalijst. Druk op de \"Rode\"-toets om er een toe te voegen.";
var chListWords		= ["Kanaallijst","Selecteer lijst","Versterkerfuncie","Toevoegen aan Favorieten","Verwijderen",
						"Kanaallijst selecteren","Tunermodus selecteren","Verwisselen"];
var chListType		= ["Alle","Digitaal","Analoog","Radio","Gratis","Favorieten"];
var chAutoScanOptions=["Selecteer Provider","Kanaaltype","Kanaal scannen"];
var souSoundType	= ["Ongeldig","Mono","Mono","Stereo","Stereo",
						"SAP","SAP","Dubbel1","Dubbel2","Dubbel2",
						"Nicam mono","Nicam stereo","Nicam dual1","Nicam dual2","NICAM dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Muziek","Film","Duidelijke stem","Standaard","Gebruiker"];
var picAdRgbMode	= ["Uit","Alleen Rood","Alleen Groen","Alleen Blauw"];
var picAdOptions	= ["DNR","MPEG NR","RGB mode","Dynamic Contrast","LED Bewegingsduidelijkheid",
						"Huidkleur","Filmmodus","Spelmodus","Kleurtemperatuur","Wwitbalans",
						"Stilzetten","Zwarte Stretch","Overscan","Gamma","HDMI modus","10P wit evenwicht","Kleuruitbreider",
						"Vermindering van het vervagen","Vermindering van het trillen","Kleurruimte","Bewegingsduidelijkheid"];
var pic10Pwhite     = ["Interval","Rood","Groen","Blauw","Resetten","Kleur","Geel","Cyaan","Magenta"];
var picMotionClarity = ["Bewegingsmodus","Bewegingsinterpolatie","LED Bewegingsduidelijkheid","Vermindering van het vervagen","Vermindering van het trillen","Resetten"];
var picMotionMode   = ["Film","Soepel","Wissen","Sport","Klant"];
var picResetDes		= "Alle persoonlijke instellingen worden teruggezet. Weet u zeker dat u de geselecteerde actie wilt uitvoeren?";
var pic10PReset     = "Weet u zeker dat u de 10P witbalans wilt herstellen?";
var picMotionReset  = "Wilt u de bewegingsduidelijkheid opnieuw instellen?";
var picColorSpaceReset    = "Weet u zeker dat u de kleurruimte opnieuw wilt instellen?";
var picOptions		= ["Beeldmodus",
						"Achtergrondlicht","Helderheid","Contrast","Verzadiging","TINT","Scherpte","Kleurtemperatuur","Schermmodus","Autoformaat",
						"Verbetering van sport","3D","3D navigatie","ECO Instellingen","Geometrie",
						"Geavanceerde instellingen","Beeldterugstelling","Micro dimmen"];
var picSize			= ["16:09", "4:3 formaat", "14:9 formaat", "Cinerama",
						"16:9 zoom", "16:9 zoom","14:9 zoom","Strukket zoom","Bred zoom",
						"Zoom 2","Zoom 2","Scherm Eigen Overeenkomst","Punkt for punkt","Origineel","Panorama"];
var others			= ["Geluidssterkte","Uitzending","Wachtwoord","Status","Opslaan","Vervangen","Start","Afsluiten","Zoeken","Wissen",
						"Geen","Automatisch","Scan","Beveiliging","Verbinden","Verversen","Opnieuw","Stop","Instellingen","Kanalen",
						"Bewerken","Invoeren","Signaal!","Einde","Stereo","Audio","Bron","Geen audio","Tips","Resetten",
						"Klant","Instellen","Opslaan","Gebruiker","Sluit toetsenbord","Beveiligingsmodus","Elke dag","PVR-lijst"];
var direction		= ["Links","Rechts","Omhoog","Omlaag"];
var audioType 		= ["MPEG","DOLBY AUDIO"/*"AC3"*/,"MPEG4","AAC", "DOLBY AUDIO"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Onbekend"];
var soundChannels   = ["Onbekend","Mono","Sub","Dubbel mono","Stereo","Stereo Sub","Stereo Dolby Surround","Omgeving 2-kanaals","Omgeving","3.0Ch","4.0Ch","5.0Ch","Mono Lfe","Dual Mono Lfe","Stereo Lfe","Surround 2Ch Lfe","Surround Lfe","3.1ch","4.1ch","5.1 kanalen","7.1 kanalen","Gezamenlijke Stereo","Fmrdo Mono","Fmrdo Stereo","FM Mono Nicam Mono","FM Mono Nicam Stereo","FM Mono Nicam Dual","Links","Rechts","Andere"];
var prompts			= ["Beeldinstelling die het beste past bij uw kijkomgeving.",
						"Helderheidsniveaus aanpassen. Hoe dichter bij 100, hoe helderder.",
						"Niveaus voor contrast aanpassen. Hoe dichter bij 100, hoe groter de donker-lichte beeldverschillen zijn",
						"Verzadigingsniveaus aanpassen. Hoe dichter bij 100, hoe sterker de kleur.",
						"Niveaus voor scherpte aanpassen. Hoe dichter bij 100, hoe duidelijker de details.",
						"Niveaus voor achtergrondverlichting aanpassen. Hoe dichter bij 100, hoe helderder het scherm.",
						"Niveaus voor tint aanpassen. Deze instelling wijzigt de kleurtonen.",
						"Selecteer de beeldindeling die het best past bij het programma dat wordt bekeken.",
						"Energiebesparingopties configureren.",
						"Pas de scherm geometrie-instellingen aann wanneer u een apparaat via de PC aansluit.",
						"Meer geavanceerde beeldinstellingen selecteren.",
						"Alle beeldinstellingen terugstellen op standaard waarden.",
						"Selecteer de geluidsmodus die het beste past bij uw persoonlijke voorkeur.",
						"Pas de volumebalans aan tussen het linker en rechter kanaal.",
						"Geluid Ophaal Systeem TruSurround HD biedt rijke geluidsprestaties en duidelijkheid op lage en hoge frequenties.",
						"Digitaal Interface Formaat het digitale geluid van de TV-uitgang naar home theater audio apparatuur aansluiten.",
						"Selecteer de audiotaal die het beste past bij uw persoonlijke voorkeur.",
						"Sta de slechtzienden toe om te genieten van TV-programma's.",
						"Test uw TV-beeld, geluid en signaal.",
						"Selecteer het type kanaallijst dat het beste past bij uw TV-signaal.",
						"Selecteer de taal voor de ondertiteling van programma's weergegeven onderaan het scherm.",
						"Bekijk het huidige kanaal tekst en afbeeldingen.",
						"Digital Living Network Alliance. Geniet van muziek, foto's en video via het thuisnetwerk van andere apparaten zoals een PC.",
						"De inhoud van uw smartphone op de TV weergeven en de smartphone gebruiken als een afstandsbediening voor de TV.",
						"Inhoud van een Miracast-compatibel Androïde apparaat op uw TV-scherm weergegeven.",
						"Plaats een slot up uw TV.",
						"Selecteer een naam voor uw apparaat.",
						"Selecteer uw kijkomgeving.",
						"Stel alle Systeeminstellingen terug op de standaard waarden.",
    					"Switch off sports mode for more options.",
    					"Verbeter het omgevingscontrast",
    					"Een speciale modus om van sportwedstrijden te genieten",
    					"Maak gebruik van nog meer CEC-functies."];
var initialTitle	= ["Welkom","Eerste instelling"];
var initialPrompt	= ["Uw eerste Instelling nu uitvoeren en een wereld van opwindende ervaring wacht op u!",
						"Kies de taal:",
						"Selecteer uw land/regio:",
						"Kies uw locatie:",
						"Selecteer a.u.b. uw type netwerkverbinding:",
						"Selecteer a.u.b. de aansluitmodus van uw draadnetwerk:",
						"Er kon geen verbinding gemaakt worden met xxxxxxxxx! Gelieve het toestel te verbinden volgens de volgende Diagram of Selecteer links om opnieuw in te stellen.",
						"Verbonden met xxxxxxxxx! Selecteer rechts om verder te gaan.",
						"1) Uw TV heeft al een ingebouwde draadloze adaptor\n2) Of, als een draadloze USB adaptor is geleverd, sluit het dan op uw TV aan.Selecteer dan de draadloze netwerk verbindingsmodus.",
						"Scannen is bezig. Een ogenblik geduld...",
						"Er is geen draadloos apparaat op TV aangesloten!",
						"Zorg ervoor dat de volgende PIN-code op de AP is geïnstalleerd voor u op de \"Volgende\"-knop klikt.",
						"Gelieve te drukken op de drukknop op het Toegangspunt binnen 120 seconden voordat u Rechts indrukt!",
						"WPS (Wi-Fi Beveiliginginstelling)",
						"PIN-code (Persoonlijke Identificatie Nummer)",
						"PBC (Drukknop Configuratie)",
						"De volgende inhoud kan alleen worden geopend met een netwerkverbinding. Wilt u de netwerk instelling overslaan?",
						"Er zijn nieuwe software-updates voor u om te downloaden, dit kan even duren afhankelijk van de status van uw netwerk.",
						"Update uw TV-software om altijd van de nieuwste eigenschappen en diensten te genieten.",
						"U zal niet genieten van de nieuwste functies en diensten. Wilt u de Software-Update overslaan?",
						"Druk op de knop rechts om door te gaan.",
						"Schakel niet uit tijdens het updaten omdat dit kan leiden tot TV-storing.",
						"Als u niet bijwerken wilt, selecteer dan Nee.",
						"Bezig met bijwerken, een moment geduld a.u.b.",
						"U kunt ook de software bijwerken in SYSTEEM/SOFTWARE-UPDATE.",
						"Het geselecteerde land vraagt om een wachtwoord instelling.\nDe code voor uw TV instellen en bevestigen.",
						"This code is too simple.\nPlease use different digits.",
						"Gefeliciteerd! Eerste instelling is voltooid. U kunt uw configuratie via het hoofdmenu en verwante sub-menu's wijzigen.",
						"Selecteer a.u.b. de beveiligingmodus:",
						"Selecteer draadloos netwerk verbindingsmodus:",
						"Netwerk"];
var initNetCabAndDonRe = ["Geen netwerkkabel aangesloten, sluit alstublieft een netwerkkabel aan!","Geen ingebouwde draadloze adapter of geen draadloze USB-adapter wordt geleverd."];
var initChPrompt = ["Installatie van de TV-zender","Selecteer type antenne-scan.","Automatische afstemming verwerken...","De volgende antenne-kanalen zijn gevonden:","Selecteer a.u.b. het Kabel scantype.","Selecteer een exploitant uit de volgende lijst.","Configureer a.u.b. de scaninformatie","De volgende Kabelkanalen zijn gevonden:","Selecteer a.u.b. één provider uit de volgende lijst","Selecteer a.u.b. satellieten om de geselecteerde satelliet te scannen of bewerken","Stel a.u.b. de satellietparameters in","De volgende kanalen werden gevonden en het scannen van de kanalen kan ook opnieuw worden uitgevoerd in de kanaal/kanaal scan"];
var initClockPrompt = ["Verkrijg de netwerk verstrekte tijd!",
						"Gelieve datum en tijd in te stellen:"];
var initialOptions	= ["Omgeving","Netwerkinstelling","Software update","Kanaalinstallatie","Klok"];
var initialHotkeys	= ["Terug","Selecteren","Volgende","Ik ga akkoord"];
var initLocations	= ["Thuis","Winkel","Winkelen met demo"];
var initNets		= ["Bedraad","Draadloos","Ik heb geen netwerkverbinding"];
var initWireManuals	= ["IP adres","Subnetmasker","Standaard-gateway","Primaire DNS","Secundaire DNS"];
var initSoftUpdates = ["Update nu","Update later"];
var initChannelIns	= ["Vervolgen","Ik wil geen kanalen installeren"];
var initChScanTypes	= ["Digitaal & Analoog","Digitaal","Analoog","Ik wil geen scan uitvoeren"];
var initChDvbts		= ["Antenne ATV-kanalen:","Antenne DTV-kanalen:"];
var initChDvbcs		= ["ATV-kabelkanalen:","DTV-kabelkanalen:"];
var initChDvbss		= ["Satellietkanalen:"];
var initChDvbSOther	= ["Ik wil geen satellietscan uitvoeren"];
var initEndConnectedStatus= ["Verbinding verbroken","WiFi verbonden","Bedraad aangesloten"];
var initEndInstallations= "XXXX kanalen geïnstalleerd";
var initEndUpdate	= ["Bijgewerkt"];

var audioScenes 	= ["Bureaublad","Muurmontage"];			
var screenSavers	= ["Geen kanalen, druk a.u.b. op de ok-toets en scan!",
						"Geen signaal!",
						"Gecodeerd",
						"Alleen Gegevens",
						"Audioprogramma",
						"Geen audio en video",
						"Onbeschikbaar",
						"Geen teletekst",
						"Geen programmagegevens.",
						"Programma geblokkeerd!",
						"Programma geblokkeerd!\nDruk op OK en voer uw code in.",
						"Geen programma-informatie.",
						"Program niet gepast voor minderjarigen. \nKlik op OK en voer uw code in.",
						"Kanaal geblokkeerd",
						"Kanaal vergrendeld!\nDruk op OK en voer uw code in.",
						"Invoer vergrendeld!\nDruk op OK en voer uw code in.",
						"Niet ondersteund!",
						"Deze service is momenteel niet beschikbaar",
						"Invoer geblokk.",
						"Geen programma-titel.",
						"Geen functie",
    					"Geen Ondertitel"
						];
var channelNumberOverPromt = ["The number of search programs has exceeded,you can delete some programs and then retry!"];
var chBookingPromt	= ["Het huidige kanaal heeft een geplande opname, TV zal beginnen op te nemen.",
						"Een geplande opname is gevonden.\n Schakelaar naar XXXX om op te nemen",
						"Het huidige kanaal heeft een herinnering.",
						"Een geplande herinnering is gevonden.\n Schakelaar naar XXXX"];
var timeUnit		= ["Sec","min"];
var ciPromt			= ["De gegevens van het netwerk zijn veranderd. Als u wilt bijwerken kunt u een update scan uitvoeren.",];
var othersPromt		= ["Even wachten",];
var menuOptions		= ["Beeld","Geluid","Kanaal","Smart TV","Netwerk","Systeem","Ondersteuning"];
var optionOptions	= ["Beeldmodus","Voorinstelling geluid","Stilzetten","T-Link","timeshift","PVR","Planningslijst","Instellingen","*"];
var optionTLinkPromt= [["Auto-aanschakelen staat aan","Auto stand-by","Gidsmenu"],
						["Inschakelen","Stand-by","Versterkervolume"]];
var powerPromt		= ["TV zal snel uitschakelen! Druk a.u.b. op een willekeurige toets om te annuleren."];
var ttxLanguage		= ["WEST-EUROPA","OOST-EUROPA","Russisch","Arabisch/Hebreeuws","Farsi","Arabisch","Białoruski","Grieks","Turks"];
var ttxOptions		= ["Tonen","Subpaginas schakelen","Taal","Alarmpagina","Laatste nieuws"];
var weekday         = ["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"];
var lcnConfflict	= "De ontvangst van dit HD-programma is verstoord.";
var inShopMode		= "Uw TV bevindt zich in de winkelmodus. Selecteer: 'Systeem' en 'Locatie' wijzigen in het menu voor thuismodus.";
var nitRefresh		= "De netwerkgegevens zijn veranderd. Wilt u een update scan maken?";
var picHDMIMode     = ["Auto","Grafische","Video"];

var glassRemind    	= ["Gelieve uw 3D-bril te koppelen met de TV\n (Houd aan / uit-toets op 3D bril ingedrukt).","Uw 3D bril zijn aangesloten op de TV",""];
var pvrRemind 		= ["Verwijder het USB-apparaat niet of schakel niet uit"];
var pvrConName   	= ["PVR","Programma-informatie:",["Note: If you record the HD channel, please to select  the  disk(of speed >5.0MB/sec), and to select the disk (of speed >3.0MB/sec) when you want to record the SD channel.","Opgenomen video is opgeslagen in \"PVR\"-map."],"Stop","Opnemen","uur","Minuut","Tijdsduur","Tips","Gebruik de pijltoetsen om de opname duur in te stellen."];
var pvrDisRemind 	= "Steek voor opname a.u.b. een USB-stick in.";
var pvrRemindWords  = ["Wilt u afsluiten?",
							"Wilt u stoppen met opnemen en bladeren door de opgenomen bestanden?",
							"Disk is uitgeworpen.",
							"Er is niet genoeg vrije ruimte.  ",
							"Geen opgenomen bestanden. Beginnen met opnemen.",
							"PVR kan niet in een versleuteld kanaal starten.",
							"Functie niet beschikbaar",
							"Succesvol opgeslagen.",
							"Wilt u het opnameproces stoppen, en ingangsbron veranderen?",
							"TV zal de huidige opname stoppen. Wilt u afsluiten?",
							"PVR-opname heeft TV-signaal nodig voor goede werking, controleer uw signaal."];
var pvrChangeCh 	= ["Wilt u van kanaal veranderen?",
							"Wilt u het opnameproces stoppen, en kanaal veranderen?"];
var pvrChangeToPIN8	= ["Wilt u de bron wijzigen van het apparaat aangesloten op de SCART-ingang?",
				    		"Wilt u het opname proces stoppen en de bron veranderen naar SCART-ingang?"];
var pvrChangeToCEC  = ["Wilt u de bron veranderen voor het apparaat aangesloten op een HDMI-ingang?",
				  			 "Wilt u het opname proces stoppen en de bron wijzigen van het toestel aangesloten op een HDMI-ingang?"];
var pvrGuideJump    = ["Wilt u EPG invoeren?",
							"Wilt u het opnameproces stoppen, en EPG invoeren?"];
var pvrMediaJump    = ["Wilt u Media invoeren?",
							"Wilt u het opnameproces stoppen, en Media invoeren?"];
var timeshiftExtra	= ["Stoppen met deeltijdfunctie &Van kanaal veranderen?",
						"Wilt u stoppen met de tijdverschuiving, en de bron wijzigen naar het apparaat aangesloten op de SCART-ingang?",
						"Wilt u stoppen met de tijdsverschuiving, en de bron wijzigen naar het apparaat aangesloten op een HDMI-ingang?",
						"Tijdsversch. start niet in versleuteld kanaal.",
						"Wilt u stoppen met de tijdverschuiving en EPG invoeren?",
						"Stoppen met deeltijdfunctie & veranderen van TV naar USB mode?",
						"Stoppen met deeltijdfunctie &Van ingangsbron veranderen?",
						"Steek voor opname a.u.b. een USB-stick in.",
						"De schijfgrootte is niet voldoende.",
						"TV zal de huidige tijdverschuiving beëindigen. Wilt u afsluiten?"];
var timeshiftStatus	= ["Snel Terug spoelen","Stop","Afspelen","Pauze","Snel Vooruit spoelen"];
var pvrPowerOffRemind= ["Standby-opname","Stand-by","TV neemt nu op, wilt u verder blijven opnemen wanneer de TV zich in de standby-modus bevindt?"];
var timeshiftInitTitle= "Schijf installeren";
var timeshiftInitReminds= ["Deze wizard wordt gebruikt  de voor instelling van de USB-schijf. Selecteer de instelfunctie.",
						 "Voor betere prestaties raden wij aan om de USB-schijf te formateren. Dit zal alle gegevens wissen.",
						 "Selecteer bestandsgrootte voor deeltijdfunctie.",
						 "Formatterende",
						 "Er is niet genoeg vrije ruimte.  ",
						 "Deeltijdfunctiebestand creëren",
						 "Snelheid testen",
						 "De schijfsnelheid is te laag (< %f MB/sec) om deeltijdfunctie in te schakelen!",
						 "Schijf is klaar voor deeltijdfunctie, wij adviseren een schijf (met een snelheid > %f MB/sec) voor betere prestaties.",
						 "Schijf is klaar voor deeltijdfunctie,"];
var timeshiftInitButtons= ["Formatteer","Sla over","Annuleren","OK","Einde","Afsluiten"];
var timeshiftInitOther=["Schijfsnelheid","MB/sec"];

var selectChoice	= "Weet u het zeker?";
var chAtvStore		= "Beaar als XXXX";
var chEpgFirstGenreUK= ["Film","Nieuws en Feiten","ENTERTAINMENT","Sport","Kinderen","Educatie","Levensstijl","Drama"];
var homePageTitleList = ["APPS","TV","VIDEO 'S","Startpagina"];
var homePageFavAndAllName  = ["Favoriete Apps","Alle Apps"];
var homePageBackUp = ["E-Handleiding","GidsAan"];
var homePageRemind   = ["Volledige functies zijn enkel beschikbaar na netwerkverbinding.","Uw TV beschikt nog niet over kanalen. Programma's zijn beschikbaar na het kanaal scannen.","Geen programma","Zoek nu naar kanalen?"];
var homePageHistory = ["Geschiedenis"];
var miracastTitle = ["Wifi-weergave","TCL-apparaat"];
var miracastRemind=["U kunt met Wifi-weergave op draadloze wijze (d.w.z. zonder kabels) het scherm en geluid delen van uw apparaat, zoals een smartphone of tablet, met uw TV. Hierdoor is het mogelijk gelijkertijd op uw TV te zien wat uw smartphone of tablet weergeeft. U kunt bijvoorbeeld een video op uw smartphone of tablet afspelen en deze gelijktijdig op uw TV weer te geven, of u kunt uw tablet als een spelconsole gebruiken met het beeld weergegeven op het grote scherm van uw TV.","WiFi-tv-verbinding op de tv is gereed. U kunt nu beginnen met het delen van uw apparaatscherm met de tv.","Bezig met aansluiten. Een ogenblik geduld!","Verbinding mislukt!","Kan geen verbinding maken. Gelieve te controleren!"];
var homePageLittleWin = ["Instellingen","Media","Fav kanalen","Smart TV","EPG"];

var hbbtvStopRemind  = ["Wilt u stoppen met playback?"];
var colorSystem = ["Auto","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Druk op ≡ voor meer informatie";
var emptyListInfo = "Er is geen apparaat met de TV verbonden!";
var optionVideoListArray_1 = ["Beeldmodus", "Voorinstelling geluid", "Afspeelmodus", "Schermmodus", "3D Modus", 
							  "L-R Schakelaar", "Diepte van Veld", "Ondertitel", "Geluid", "Titel", "Hoofdstuk", "Info"];
var optionVideoListArray_2 = ["Beeldmodus", "Voorinstelling geluid", "Afspeelmodus", "Schermmodus", 
							  "Ondertitel", "Geluid", "Titel", "Hoofdstuk", "Info"];
var bottomTipsText = ["Afspelen/Pauze", "Snel Terug spoelen", "Snel Vooruit spoelen", "Afspeellijst", "Instellingen"];
var picturePresetArray = ["Standaard", "Dynamic", "Natuurlijk", "Film", "Gebruiker"];
var videoPlayModeArray = ["Alles herhalen", "Herhaal Één", "Normaal"];
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Bred zoom", "Zoom 2", "Zoom 2", "Strukket zoom", "Automatisch"];
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "14:9 zoom", "16:9 zoom", "16:9 zoom", "Automatisch"];
var Mode3DArray = ["Uit", "2D-naar-3D", "Zij-bij-Zij", "Boven- en Onderkant", "Lijnspreiding"];
var videoOptionListArray = ["Uit", "Nummer", "Ondertitel", "Titel", "Hoofdstuk"];
var subMenuTitleText = "Ondertitel";
var langMenuTitleText = "Audiotaal";
var titleMenuTitleText = "Titel";
var mode3DMenuTitleText = "3D Modus";
var langInfoText = "Nummer";
var STOP_RESUME_INFO = "Stop-Hervat";
var playListName = "naam";
var eb_tips = "Tips";
var ok_button = "OK";
var eb_info = ["Audio decodeerfout.", "Video decodeerfout.", "Audio-formaat niet ondersteund.", 
			   "Videoformaat niet ondersteund.", "Kan dit bestand niet openen", "Afspeelfout, probeer het opnieuw",
			   "Bestandsformaat niet ondersteund", "Oeps!Speler is gestopt.",
			   "Bestandspad bestaat niet of is ongeldig.\nPlaats het opslagmedium nog een keer en probeer opnieuw.",
			   "Doorgaan met afspelen van de vorige\n afspeelstatus?"];
var picturePlayErrorTips = ["Laadstoring!!!","Afbeelding is te groot!!!","Netwerkfout!!!","Draadfout!!!","Parameterfout!!!","Onbekende fout!!!"];
var frameTitleText = "Nieuw apparaat";
var eb_quit_info = "Weet u zeker dat u wilt afsluiten?";
var eb_yes = "JA";
var eb_no = "NEE";
var offinfo = "Uit";
var naInfo = "Nul";
var consoleInfoArray = ["Snel Terug spoelen", "Snel Vooruit spoelen", "Afspelen/Pauze", "Afspeellijst"];
var cantOperateText = ["Functie niet ondersteund."];
var chapterChangeInfo = "Alleen de hoofdstukken 1 tot en met XXXX zijn beschikbaar.";
var metaDataArray = ["Titel/Editie metagegevens:", "Hoofdstuk metagegevens:", "Audio Metadata:", "Ondertitel metagegevens:"];
var metaTitleInfo = "Titel";
var metaChapterInfo = "Hoofdstuk";
var videoLoadingInfo = "Analyseren van...";
var listLoadingInfo = "Bezig met laden...";
var pgInfo = "Wettelijke Beoordeling:";
var fileNameText = "naam";
var fileDateText = "Datum";
var fileSizeText = "Grootte";
var fileDurationText = "Tijdsduur";
var fileDirectorText = "Regisseur";
var fileCopyrightText = "Auteursrecht";
var fileArtistText = "Artiest";
var fileAlbumText = "Album";
var fileGenreText = "Genre";
var fileYearText = "Jaar";
var fileGenreText = "Genre";
var mainListArray = ["Alle", "Beeld", "Video", "Muziek"];
var sortArray = ["naam", "Datum"];
var parserArray = ["Normaal", "Recursieve"];
var emptyTipsInfo = "Oeps. Geen ondersteund bestand gevonden.";
var emptyFolderInfo = "Oeps. Geen ondersteund bestand gevonden.";
var sortName = "Sorteren op";
var parserName = "Parser";
var divx_str1 = "DivX(R) registratie";
var divx_str2 = "DivX(R) uitschrijving";
var infor_str = "Info";
var quickMenuEmptyText = "Geen beschikbare opties.";

var musicSoundPresetArray = ["Standaard", "Film", "Muziek", "Duidelijke stem", "Gebruiker"];
var musicInformationArray = ["naam", "Artiest", "Album", "Genre:", "Jaar:", "Tijdsduur:"];
var playListName = "naam";
var playTipsInfo = ["U speelt het eerste bestand af.", "U speelt het laatste bestand af."]
var musicNameInfo = "Name";
var musicArtistInfo = "Artiest";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Voorinstelling geluid";
var optionBGMInfo = "Speel af op de achtergrond";
var optionAudioOnlyInfo = "Alleen audio";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX is aangesloten op TV!";
var tvRemoteTitle		= "TV Remote";
var tvRemoteDeveloper	= "De applicatie was ontwikkeld door TCL";
var tvRemoteDeviceTitle	= "Apparaatnaam:";
var remoteOption		= ["Media Sharing","Afstandsbediening","Help","Informatie","Smart Connect"];
var remotebottom		= "Gelieve de \"TV Afstandsbediening\" te downloaden naar uw smartphone";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Foto's, video's en muziek delen met TV via telefoon.",
							"Stappen: \n 1. Klik op \"TV Afstandsbediening\" op telefoon. Verbind de telefoon met de TV via hetzelfde WiFi-netwerk; \n 2. Klik op \"Media Delen\" om door de mediabestanden te bladeren; \n 3. Verzend media naar TV voor het afspelen (met een van de volgende opties)",
							"      a) Sleep folders/bestanden naar het TV-icoontje boven in het scherm;\n      b) Zwaai de telefoon richting de TV om het eerste bestand te starten;\n      c) Speel de media af op de telefoon en klik op het \"TV Sharing\"-icoontje;",
							"   4. Schud de telefoon tijdens weergave op de TV om het vorige of volgende bestand af te spelen."];
var controlReminds		= ["Uw telefoon als een afstandsbediening gebruiken om de TV te bedienen.",
							" ",
							"Stappen: \n 1. Klik op \"TV Afstandsbediening” op telefoon. Verbind de Telefoon met de TV via hetzelfde WiFi-netwerk; \n 2. Klik op \"Afstandsbediening\" voor het bedienen van de TV."];
var helpDeviceWords		= "Multischerm interacties";
var helpBottom			= " In deze tijden van Cloud Technologie, gaat smart-apparatuur zoals telefoons hand in hand met TV. Deel media op multischermen met uw familie en bedien uw TV via telefoon! ";
var helpReminds			= ["Voorbereidingen\n 1. Download en installeer: \"TV Afstandsbediening\" van Google Play of Apple Store. \n 2. Verbind de telefoon met de TV via hetzelfde WiFi-netwerk.",
							" ",
							"Telefoonaanbevelingen\n   1. CPU: hoger dan 800MHz\n   2. Geheugen: minstens 80MB vrije ruimte",
							" ",
							"Vrijwaring\n als \"TV Afstandsbediening\" niet beschikbaar is op uw telefoon neem dan contact op met de telefoonfabrikant."];
var helpButtons			= ["Vorige","Volgende"];
var aboutReminds		= ["TV Remote","De applicatie was ontwikkeld door TCL"];
var aboutExit			= "Afsluiten";
var smartReminds		= ["Snelle en slimme verbinding tussen TV en telefoon.",
							" ",
							"Stappen \n 1. Verbind TV en smartphone met hetzelfde LAN. Klik op \"TV Afstandsbediening\" op smartphone.\n 2. Klik op \"Slimme Verbinding\" om de QR-code te scannen. \n 3. In de uitzendmodus druk op de INFO-toets op de TV Afstandsbediening voor 4 seconden, een volledig scherm QR-code zal verschijnen.",];
var smartQRReminds		= ["Gelieve te klikken op de Slimme Verbinding op de TV Afstandsverbinding op uw telefoon en scan de QR code voor snelle verbinding van de TV en telefoon.",
							"QR-code bevat LAN-Accountinfo. Gelieve dit goed te bewaren."];
							

var consoleTipArray = ["Vorige","Volgende","Console","Afspeellijst"];							
var optionInfoArray = ["Beeldmodus","Afspeelmodus","Tijdsduur","Effect","Info"];

var playModeArray = ["Normaal","Shuffle","Herhalen"];
var durationArray = ["Kort(5s)", "Medium(10s)", "Lang(15S)"];
var effectArray = ["Geen", "Roteren", "Rechts vegen", "Links vegen", "Boven vegen", "Onder vegen", "Inkaderen", "Uitkaderen", "Willekeurig"];
var infoArray = ["Naam:","Grootte:","Datum:","Locatie"];

var picturePresetBarTitleInfo = "Beeldmodus";
var picturePresetBarArray = ["Standaard","Dynamic","Studio","Film","Gebruiker"];
var upTipsInfo = "Afbeelding verplaatsen"; //add yums 2014-10-10
var consoleTipsArray = ["Console","Vorige","Volgende","Afspeellijst","Instellingen"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Druk op Rechts opnieuw om de volgende film af te spelen","Druk op Links opnieuw om de vorige film af te spelen","Druk opnieuw naar beneden om de afspeellijst te tonen"]; //add yums 2014-10-10

var optionPvrListArray = ["Beeldmodus","Voorinstelling geluid", "Schermmodus", "3D Modus", "Ondertitel", "Geluid", "Info"];							
	
var titleSpanFirstArray = ["Bediening & verbinding","Basisfuncties","APPS","TV","Instellingen","Veel Gestelde Vragen"];
var titleSpanSecondArray = [["Afstandsbediening","Paneeltoetsen","Eenvoudige navigatie","TV-aansluiting","TV-aansluiting","TV-aansluiting","Draadloos"],["Starter","Statusbalk","Bron"],["Afspelende apps","Media","TV Remote"],["Kanaal en volume aanpassen","Kanaallijst","EPG","Kanalen","Favoriete kanalen"],["Film-aanpassing","Geluidsaanpassing","Kanaal-aanpassing","Software update","Taal","Kinderslot"],["Veel gestelde vragen","Veel gestelde vragen","Problemen Oplossen","Problemen Oplossen","Algemene voorwaarden"]];
var contentSpan1_1Array =[["STROOM:","BRON:","INSTELLINGEN:","OPTIE:","TERUG:","INFO:","HOME:","VERLATEN:","LIJST:"],
    ["Inschakelen of op stand-by zetten",
        "De ingangsbron selecteren",
        "Het Instellingsmenu openen",
        "Het Optiemenu openen",
        "Terug naar het vorige menu of een lopende APP verlaten",
        "Toont programinformatie",
        "De SmartTV homepagina openen",
        "Terug naar het vorige menu of een lopende APP verlaten",
        "Toont de lijst met zenders"]];
var contentSpan1_2Array = ["Vorig kanaal","Volgend kanaal","Verhoogt volume","Verlaagt volume","Gaat naar de startpagina","Bevestig de optie","Stand-by / Aanschakelen"];
var contentSpan1_3Array = ["OK/gids","Kanaal omhoog","Kanaal omlaag","Volume omlaag","Volume omhoog","Beschikbaar als pijltoetsen in sommige functies."];
var contentSpan1_4Array = ["LAN","HDMI (MHL)","HDMI","HDMI (ARC)","AV OUT adapter","LAN","Smartphone","PC/Set-top box/DVD","Audio-versterker","Audio versterker/Monitor","Uw TV bevat misschien niet alle aansluitcontacten."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Hoofdtelefoon","AV IN adapter","SPDIF","CMP AUDIO IN adapter","CMP IN (YPbPr)-adapter","USB-apparaten","USB-apparaten","Hoofdtelefoon","DVC/Game Console/Set-top box/DVD","Audio-versterker","DVC/Game Console/Set-top box/DVD","Uw TV bevat misschien niet alle aansluitcontacten."];
var contentSpan1_6Array = ["Gemeenschappelijke interface","SD","VGA","SCART","Mini SCART","ANTENNE IN","PCMCIA-kaart","SD-kaart","PC","Settop box/DVD","Antenne/kabel/satelliet","Uw TV bevat misschien niet alle aansluitcontacten."];
var contentSpan1_7Array = ["Tablet","PC","Router","Telefoon","TV"];
var contentSpan1_8Array = ["Schakelfunctie/Aan/Uit","Lang indrukken om de slaaptimer te openen","Omlaag","Omhoog","Volume/Kanaal/Bron"];

var contentSpan2Array = [["Druk op de pijltoetsen om de Homepage te bekijken.","Druk vervolgens op OK om terug te kijken naar een van de aanbevolen programma's of voer de app in."],["Toon datum, netwerk en apparaten enz. in de rechterbovenhoek van het scherm."],["Selecteer de ingangsbron van apparaten aangesloten op de TV via verschillende poorten, zoals TV, AV, HDMI enz."]];

var contentSpan3Array = ["Geniet van en bekijk uw favoriete Apps via de Smart TV-pagina","Bekijk foto's, video's en speel muziek af van een USB-opslagapparaat.","Sluit uw TV en smartphone of Tablet PC aan op hetzelfde LAN","Klik op nScreen of TV-afstandsbediening op de smartphone of Tablet PC","Deel foto's, video's en muziek op meerdere schermen met uw familie en bestuurivan uw TV via uw smartphone"];

var contentSpan4Array = [["Druk op NAAR BOVEN/NAAR BENEDEN om kanalen te wijzigen","Druk op LINKS/RECHTS om het volume aanpassen"],["Druk op LIST op de afstandsbediening op om de kanalen omhoog te zien","Druk op NAAR BOVEN/NAAR BENEDEN om uw kanaal te te kiezen"],["EPG is een gids op scherm die geplande TV-programma’s weergeeft. U kunt navigeren, selecteren, programma's bekijken en opnemen."],["Zoek en installeer zenders"],["Voeg uw favoriete kanalen toe in de kanalenlijst of bewerk deze"]];

var contentSpan5Array = ["Geniet van uw favoriete programma's door middel van video apps"];

var contentSpan6Array = [["Druk op Optie voor het tonen van de systeem instellingsopties","Ga over naar de beeldinstellingen om de waarden aan te passen"],["Druk op Optie voor het tonen van de systeem instellingsopties","Geef de geluidsinstellingen in om de opties in te stellen"],["Druk op Optie voor het tonen van de systeem instellingsopties","Geef de kanaalinstellingen in om de opties in te stellen"],["Uw TV bijwerken wanneer een nieuwe softwareversie beschikbaar is"],["U kunt uw voorkeur menu-taal kiezen"],["Er wordt ouders toegestaan de kanalen of programma's die ongeschikt zijn voor kinderen te vergrendelen"]];

var contentSpan7_1Array = [["Geen beeld, geen geluid","Controleren of de zekering of stroomonderbreker werkt.","Sluit een ander elektrisch apparaat aan op het stopcontact om te controleren of dit werkt of dit ingeschakeld is.","Stekker heeft een slecht contact met het stopcontact","Controleer de signaalbron."],["Normaal beeld, geen geluid","Druk op de volumetoets voor meer geluid voor verhoging van het geluid.","Geluidsinstelling is onjuist.","Fout bij het signaal van de uitzending."],["Normaal geluid, geen beeld","De helderheid en contrast aanpassen","Fout bij het signaal van de uitzending.","Controleer of het enkel in de audio modus is."]];
var contentSpan7_2Array = [["Radiofrequentiestoringen","Deze storing produceert bewegende golven of diagonale strepen en in sommige gevallen, verlies van contrast in het beeld. Vind en verwijder de bron van de radiostoring."],["Geen kleur","De kleurinstellingen aanpassen.","Probeer een ander kanaal. Zwart-Wit programma kan worden ontvangen."],["Afstandsbediening werkt niet","Vervang de batterijen.","Batterijen zijn niet correct geïnstalleerd. Stroom voor de TV is niet aangesloten."]];
var contentSpan7_3Array = [["Inhoud van het USB-apparaat wordt niet weergegeven","Controleer of het USB-opslagapparaat compatibel is met de TV.","Controleer dat de audio- en foto-bestandsindelingen worden ondersteund door de TV."],["Afspelen zonder geluid","Het audio formaat van de video wordt niet ondersteund door de TV-speler."],["Bestanden worden niet goed afgespeeld","De prestaties van de overdracht van het USB-opslagapparaat kunnen de overdrachtssnelheid van de TV beperken."]];
var contentSpan7_4Array = [["Waaraan moet ik aandacht besteden wanneer ik software bijwerk","Geen stroomonderbreking wanneer de software wordt bijgewerkt.","Vermijd enige bewerkingen met uw afstandsbediening wanneer de software wordt bij gewerkt.","Wees geduldig omdat het bijwerken van de software een beetje tijd in beslag kan nemen."],["Er zijn geen duidelijke veranderingen van TV-Weergave na het bijwerken van de software.","Onder bepaalde voorwaarden, zal het bijwerken van de SW niet alleen bijwerken maar ook nieuwe functies toevoegen en ook de prestaties verbeteren van het TV-toestel zonder aparte wijzigingen van het beeld. Ook kan het beeld van de TV soms hetzelfde blijven."]];
var termsTitle = "Algemene voorwaarden";
var termsConditions = ["(Afwijzing) voor TCL - fabrikant van dit TV-toestel.","Vanwege de diverse mogelijkheden van producten met Smart TV-diensten, evenals beperkingen in de beschikbare inhoud, kunnen bepaalde functies, applicaties en diensten niet beschikbaar zijn op alle apparaten of in alle territoria. Sommige functies op Smart TV vereisen eventueel afzonderlijk aan te schaffen extra randapparatuur of een lidmaatschap. Bezoek onze website voor meer informatie over specifieke informatie over het apparaat en de beschikbaarheid van de inhoud. De diensten en de beschikbaarheid van de inhoud via Smart TV zijn van tijd tot tijd onderhevig aan wijzigen zonder voorafgaande kennisgeving. \n   Alle inhoud en diensten toegankelijk via dit apparaat zijn eigendom van derden en worden beschermd door auteursrecht, octrooirecht, merkenrecht en/of andere intellectuele eigendomsrechten. Dergelijke inhoud en diensten worden uitsluitend aangeboden voor uw persoonlijk niet-commercieel gebruik. Het is niet toegestaan enige inhoud of diensten op een manier te gebruiken die niet is geautoriseerd door de eigenaar van de inhoud of dienstverlener. Zonder het voorgaande te beperken, tenzij uitdrukkelijk toegestaan door de van toepassing zijnde eigenaar van de inhoud of dienstverlener, mag u de inhoud of diensten met betrekking tot dit apparaat op geen enkele manier of met geen enkel middel wijzigen, kopiëren, publiceren, uploaden, posten, verzenden, vertalen, verkopen, ander werk uit afleiden, exploiteren of distribueren. \n   U ERKENT UITDRUKKELIJK EN GAAT ERMEE AKKOORD DAT HET GEBRUIK VAN HET APPARAAT GEHEEL OP UW EIGEN RISICO IS EN DAT HET VOLLEDIGE RISICO VOOR GOEDE KWALITEIT, PRESTATIES EN NAUWKEURIGHEID OOK OP UW RISICO IS. HET APPARAAT EN ALLE INHOUD EN DIENSTEN VAN DERDEN WORDEN GELEVERD “ZOALS ZE ZIJN” ZONDER ENIGE VORM VAN GARANTIE, HETZIJ EXPLICIET OF IMPLICIET. TCL WIJST ALLE GARANTIES VAN DE HAND MET BETREKKING TOT HET APPARAAT EN ALLE INHOUD EN DIENSTEN, HETZIJ EXPLICIET OF IMPLICIET, INCLUSIEF MAAR NIET BEPERKT TOT, GARANTIES VAN VERKOOPBAARHEID, GOEDE KWALITEIT, GESCHIKTHEID VOOR EEN BEPAALD DOEL, NAUWKEURIGHEID, ONGESTOORD GENIETEN EN GEEN INBREUK OP RECHTEN VAN DERDEN. TCL BIEDT GEEN GARANTIE MET BETREKKING TOT DE GELDIGHEID, TIJDIGHEID, WETTIGHEID, VOLLEDIGHEID VAN INFORMATIE OF DIENSTEN DIE VIA DIT APPARAAT TER BESCHIKKING GESTELD ZIJN EN GARANDEERT NIET DAT HET APPARAAT MET INHOUD OF DIENSTEN AAN UW EISEN VOLDOET, OF DAT DE WERKING VAN HET APPARAAT OF DIENSTEN ONONDERBROKEN OF FOUTLOOS ZULLEN VERLOPEN. IN GEEN GEVAL, INCLUSIEF NALATIGHEID, ZAL TCL AANSPRAKELIJK ZIJN, HETZIJ IN CONTRACT OF ONRECHTMATIG, VOOR DIRECT, INDIRECT, INCIDENTEEL, BIJZONDERE OF GEVOLGSCHADE, ADVOCAATKOSTEN, OF ENIGE ANDERE SCHADE ALS GEVOLG VAN OF IN VERBAND MET ENIGE INFORMATIE IN, OF ALS GEVOLG VAN HET GEBRUIK VAN HET APPARAAT, OF ENIGE INHOUD OF DIENSTEN TOEGANKELIJK DOOR U OF DERDEN, ZELFS ALS U OP DE HOOGTE BENT VAN DERGELIJKE MOGELIJKE SCHADE. \n   Diensten van derden kunnen worden gewijzigd, geschorst, verwijderd, beëindigd of onderbroken worden, of toegang kan op ieder moment worden uitgeschakeld zonder voorafgaande kennisgeving, en TCL (fabrikant van het merk Thomson TV’s) geeft geen garantie dat de inhoud of diensten beschikbaar blijven voor een bepaalde periode. Inhoud en diensten door derden worden overgebracht door middel van netwerken transmissiefaciliteiten waarover TCL geen controle heeft. Zonder de algemeenheid van deze voorwaarden te beperken, wijst TCL uitdrukkelijk elke verantwoordelijkheid of aansprakelijkheid af voor elke wijziging, onderbreking, uitschakeling, verwijdering van of opschorting van enige inhoud of dienst die via dit apparaat ter beschikking is gesteld. TCL kan beperkingen opleggen met betrekking tot het gebruik of toegang tot bepaalde diensten of inhoud, op elk moment en zonder kennisgeving of aansprakelijkheid. TCL is niet verantwoordelijk of aansprakelijk voor de klantenservice met betrekking tot de inhoud en de diensten. Mocht u een vraag of verzoek hebben met betrekking tot de dienstverlening van de inhoud of diensten dan moet u rechtstreeks contact opnemen met de desbetreffende eigenaar van de inhoud en/of dienstverleners."];

var noChannelListRemind        = ["Geen zenders gevonden. Kanaallijst is beschikbaar na het kanaalscannen.","Kanaalscan"];
var closeSubtitleRemind   = "Functie zal beschikbaar zijn wanneer ondertiteling is uitgeschakeld. Wilt u dit nu instellen?";

var estickerTitles = ["Zeer realistische beelden","Kleur die tot leven komen","Geweldige levensechte beweging","Dynamische beeldkwaliteit","SR UHD upscaling","Ervaar 3D-wereld","Snellere prestaties","Toekomstige 4K inhoud","Geniet van de online wereld","Toegang tot extra inhoud","Geïntegreerde digitale tuners","Alle apparaten aansluiten","Verschillende 4K bronnen","USB-inhoud","Ultra snelle WIFI","Mobiele inhoud op TV","Inhoud op mobiele apparaten","Lokale inhoud","Goedgekeurd door DivX","Naadloos beeld","Kanaal klaar","TDT Premium"];

var estickerDescriptions = ["Geweldige kijkervaring dankzij beelden met vier keer de details van Full HD op UHD scherm","Breed kleurengamma levert emotie in elke scène met levendige rood en smaragdgroen","4K frame interpolatie en achtergrondverlichting als bestrijding van het vervagen van beweging","De levendigheid van de oorspronkelijke afbeelding wordt verbeterd voor de productie van echt dynamische expressie met briljant contrast","Geniet van scherpere TV-shows en Blu-Ray-schijven dankzij Super resolutie technologie","Geniet van 3D TV voorbereiding en bekijk verschillende 3D-inhoud","Meer plezierig amusementervaring met Quad Core voor soepele interactie, verbeterde prestaties","HEVC (H.265) codec ondersteuning voor aankomende standaard van 4K video distributie","Schat aan online applicaties, VOD-diensten, catch-up TV en Internet webbrowsen","Bekijk meer met aanvullende diensten en inhoud van uw favoriete zenders","Toegang tot TV-zenders in hoge definitie zonder extra set-top box","Eenvoudig aan te sluiten, vele digitale bronnen beschikbaar thuis","TV klaar voor de toekomst, kan 4K 50 / 60Hz via HDMI 2.0 met HDCP 2.2 afspelen","Video of foto inhoud rechtstreeks vanaf USB-schijf, HDD of camera op groot scherm in 4K resolutie","Nieuwste generatie 2 x 2 MIMO en AC standaard levert ongeëvenaarde snelheid van Internet toegang","Genieten van foto's, video's, toepassingen vanaf mobiele apparaten op groot scherm dankzij een scherm dat technologie weerspiegelt","Foto's, video's, toepassingen van smartphone of een tablet kan worden weergegeven op het grote scherm","Weergave op groot scherm lokale inhoud zoals foto's, video's van apparaten aangesloten op het lokale netwerk","Gehuurde of eigen DivX-films beschermd afspelen","Ultra smalle schuine kant en super slank ontwerp","Getest en goedgekeurd door Canal +","Getest en goedgekeurd door TDT Premium"];							

var eManualTextArray = ["E-Handleiding","Alle interne afbeeldingen dienen enkel als voorstelling."];
var frontPanelRemind = "Voorpaneel vergrendeld";
var eRPRemind		 = "Shopmodus kan niet aan ERP verzoek voldoen. Weet u het zeker?";	
var noRelatedChannel = "Geen verwant kanaal";
var option0624Name          = ["BOP","BFS","Gebeurtenis op gebeurtenis","GetUserID","BGM","Reset all","Reset Winkel","NRM","DVB-T2 and land keuze ","HbbTV modus"];
var DVBT2AndChoice = ["Aan","Bij land","Uit"];
var hbbtvServiceRemind = "HbbTV service komt binnenkort.";
var insertWord = "Invoeren";		
var viewDetail = "Bekijk detail";							

var remindOAD  = "Software-wijziging. Een nieuwe aanbevolen software kan beschikbaar zijn op een ander kanaal. Als u de download accepteert, kan dit het kanaal automatisch veranderen. Wilt u dit nu doen?";

var LEDStatus = ["Flashen", "Normaal","Uit"];
var netFlixRemind = "Deze functie onderbreekt de toegang tot Netflix-diensten totdat u opnieuw aanmeldt.";
var ESNExplanation = "Elektronisch serienummer";
var resetShopRemind = "Het systeem is opnieuw op aan het starten, schakel de tv niet uit";
var initialSelectOption = "Selecteer een optie:";
var databaseRemind   = "Systeem heeft een beschadigde database geïdentificeerd vanwege een onbekende reden. De database wordt opnieuw gemaakt. Druk op OK om verder te gaan.";
var Deactivation = "Deactivering";
var oadFutureRemind = "Softwarebijwerking.\n Er zal op %s nieuwe aanbevolen software beschikbaar zijn. Het bijwerken kan enige tijd in beslag nemen en het scherm kan af en toe zwart worden. Schakel de ontvanger tijdens het bijwerken niet uit. Laat als u deze bijwerking accepteert de ontvanger op de geplande tijd aan. Wilt u deze bijwerking ontvangen?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Geluid uitvoer";
var bt_soundOutPutTV = " Televisie Sprekers";
var bt_soundOutPutBT = "Bluetooth Apparaat";
var bt_soundOutPutBT_TV = "Bluetooth en televisie";
var bt_refreshBarName = "Apparaten";
var bt_settingTips_On = "Zet Bluetooth functie en Scanapparaten. ";
var bt_settingTips_Finding = "Het vinden van verkrijgbare apparaten ...";
var bt_settingTips_NoDevice = "Geen verkrijgbaar apparaat.";
var bt_deviceList_State_NoConnect = "Niet verbonden";
var bt_deviceList_State_Connecting = "Verbindend...";
var bt_deviceList_State_Connected = "Verbonden";
var bt_deviceList_State_Paired = "Gepaarde";
var bt_deviceList_Conncect_Failed_Tips1 = "Aansluiting verzuimde.";
var bt_deviceList_Conncect_Failed_Tips2 = "Bevestig alstublieft dat XXX Bluetooth functie is Aan ";
var bt_deviceList_Conncect_Success = "Verbonden naar Bluetooth-apparaat.";
var bt_deviceList_Disconncect_Success = "Losgekoppeld van Bluetooth-apparaat.";
var bt_deviceList_Disconnect = "Bent u zeker u wilt loskoppelen van XXX?";
var bt_tipsTitle = "puntje";
var bt_bluetooth_Pairing_Title = "Bluetooth paarvorming";
var bt_bluetooth_Input_Pin = "Invoer alstublieft PIN ";
var bt_bluetooth_Output_Pin_Tip = "Invoer PIN  XXXX door klavier.";
var bt_bluetooth_Pin_Wrong_Tip = "Verkeerde PIN ";
var bt_bluetooth_Remove_Pair_Title = "Vraag";
var bt_bluetooth_Remove_Pair_Ask = "Vergeet dit apparaat?";
							
							
var audioDescriptionName = ["Audiobeschrijving","Luidspreker","Luidsprekervolume","Hoofdtelefoon","Hoofdtelefoonvolume","AD volume","BT-apparaat","BT-apparaatvolume","Versterker","Luidspreker"];
var audioDescriptionOptions = ["Uit","Normaal","Audiobeschrijving"];
var volumeOffRemind = 'Stel XXX a.u.b. in op “Aan” in het instellingsmenu.';	
var switchSourceRemind   = " aangesloten. Wilt u nu wisselen?";
var footballModeName = "Sportmodus";
var resetStadium = "Stadium";
							
							
var atvSearchMenu = "ATV manual search";
var dtvSearchMenu = "DTV manual search";
var settingNoticeSourceName ="Auto bron";

var smartTVOptions		= ["Smart TV-portaal","HbbTV","Delen & Bekijken","Wifi-weergave","Voorwaarden",
    "Stand-bye met netwerk","Reset smart TV","Cookie policy","Privacybeleid","Gegevens verwijderen"];
var supportOptions		= ["Externe diagnose","Neem contact met ons op"];
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

							
var tvDoctor=["Externe diagnose 2.0",
"De app werkt alleen voor uw Smart TV om diagnosecontroles uit te voeren en de productervaring te verbeteren. Deze app zal de bedrijfsgegevens en modelinformatie van de TV verzamelen en naar de server sturen om te worden gebruikt voor het verhelpen van problemen met de TV. Uw persoonlijke informatie zal niet worden verzameld. Zorg er a.u.b. voor dat uw TV goed is verbonden met het internet.",
"Lokale diagnose",
"Nadat de diagnose is gestart, volg a.u.b. de aanwijzingen van onze technische klantendienst.",
"Externe diagnose",
"Controleer vóór gebruik of onze technische klantendienst online is.",
"Serienummer:",
"&nbsp;&nbsp;&nbsp;&nbsp;Gebruikers-ID:",
"Verbinden…",
"Diagnose in uitvoering. Houd het netwerk a.u.b. goed verbonden.",
"UInternettoegang is niet mogelijk, \ncontroleer a.u.b. de netwerkverbinding.",
"Afsluiten"
];
var contactUsOption = ["Neem contact met ons op",
    "Neem a.u.b. contact op met ons op als u problemen ondervindt met het gebruik van dit apparaat.",
    "Neem contact op met ons op",
    "Website: Bezoek",
    "Nummer van callcenter:","Productinformatie","Model Naam:",
    "Softwareversie:","","Gebruikers-ID:","Project-ID:",
    "Cliënttype:","Draadloos MAC-adres:","Bedraad MAC-adres:","Netflix ESN:","Scan de informatie op uw mobiele telefoon.",
    " en selecteer vervolgens uw land."];


//本地launcher的翻译，与服务器无关，只用于本地launcher
var homePageWords = ["Geschiedenis", "Zoeken"];//home页的翻译
var titlePageWords = ["Thuis", "Video's","TV","Apps"];//index的标题翻译
var videosPageWords = ["Film", "Sport","Muziek","Populair","Spel","Onderwijs","Nieuws"];//videos页的内容翻译

//同时应用于本地和服务器
var statusPageWords = ["USB","Instellingen","Wifi","Bedraad"];//状态栏的翻译

//二级页面的翻译
var searchPageWords = ["Zoeken", "Populaire Zoekopdrachten:","Shows, Films, Personen ..."];
var resultSearchPageWords = ["Resultaten van"," ","Probeer a.u.b. andere trefwoorden.","Sorry, geen video gevonden over "," "];
var historyPageWords = ["Geschiedenis", 'Druk op','om de geschiedenis te wissen',"Een verwijderen","Alles verwijderen","Gisteren","Vandaag"," U hebt nog geen enkele video bekeken.","Wissen van kijkgeschiedenis geslaagd!"];
var channelPageWords = ["Sorry, nog geen video gevonden."];


//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9",
                       	   "Zoom-","0","Zoom+",
                       	   "Afsluiten","0","",
                       	   "Lijst","0","Tekst",
                       	   "Gids","Enter","Afsluiten",
                       	   "Menu","Ondertitel","Info",
                       	   "Stop",
                       	   "Info","Menu","Afsluiten",
                       	   "Afsluiten"
                       	   ];

//added for LA sports mode
var sportsModeInitReminds= ["Deze wizard wordt gebruikt voor de instelling van de USB-drive voor Sportmodus. Selecteer a.u.b. de instellingmodus.",
						 "Selecteer a.u.b. de bestandgrootte voor Sportmodus.",
						 "Bestand Sportmodus creëren",
						 "De snelheid van de USB-drive is te laag (< %f MB/sec) voor de functie Sportmodus!",
						 "De USB-drive is gereed voor de Sportmodus. Wij raden u echter aan deze te veranderen (door snelheid > %f MB/sec) voor een betere prestatie.",
						 "De USB-drive is gereed voor de Sportmodus."];

var sportsModeExtra	= ["Wilt u de Sportmodus stoppen en van kanaal veranderen?",
						"Wilt u de Sportmodus stoppen en de bron veranderen in het apparaat aangesloten op de SCART-ingang?",
						"Wilt u de Sportmodus stoppen en de bron veranderen in het apparaat aangesloten op de HDMI-ingang?",
						"Sportmodus wordt niet ondersteund op het Scrambled Kanaal.",
						"Wilt u de Sportmodus stoppen en de EPG openen?",
						"Wilt u de Sportmodus stoppen en de Media openen?",
						"Wilt u de Sportmodus stoppen en van ingangsbron wisselen?",
						"De TV zal de huidige Sportmodus eindigen. Verlaten?"];
var remoteControlNote = "- De meegeleverde afstandsbediening kan verschillen afhankelijk van het productmodel";

var textArray = ["Volume","Channel","Source","Switch/Power","Guide","seconds to Power OFF"];
var guideArray = ["VOL-","VOL+","CH-","CH+","Pre","Next"];
var favChannelListRemind = ["Geen favoriete kanalen. Open a.u.b. andere lijsten en gebruik de “groene toets” om favoriete kanalen toe te voegen."];

var proxySetting = ["Proxy-instellingen","Poort"];
var powerOffShop = ["Aanbevolen om winkelmodus te gebruiken, doorgaan?"];
var tcastTextPageWords = ["Genoeg video\'s, veelzijdige applicaties","Afstandsbediening binnen handbereik","Geweldige inhoud, delen op een groot scherm"];
var tcastOtherWords = ["Scan de QR-code en download T-Cast","Netwerkverbinding met de tv","Tv-naam","T-Cast"];
var hbbtvWords = ["Hbbtv-instelling","HbbTV","Cookies","Cookies van derden","Apparaat-ID","Tracking"];
var hbbtvTrackingWords = ["YES","NO","Maakt niet uit"];
var eStickerTipWords = ["Opslagruimte is minder dan 400M, wilt u de video’s in Demomodus wissen om meer ruimte te creëren?"];
var delEstickerVideoRemid = ["De video is succesvol gewist"];
var selectSatRemind = "U kunt niet meer dan 20 satellieten selecteren!";
var cookiePolicyTitle = "Cookiebeleid – Online Smart TV-diensten";
var cookiePolicyConditions = ["Onderneming respecteert uw privacy bij uw gebruik van Smart TV’s die zijn geproduceerd en Diensten die zijn aangeboden door Onderneming. Veel websites en andere Internetdiensten maken gebruik van cookies, en   uw Smart TV zal cookies accepteren, opslaan en doorgeven om ervoor te zorgen dat deze websites en diensten op de juiste wijze functioneren. Onderneming maakt daarnaast gebruik van cookies bij het aan u aanbieden van de Diensten. In het onderhavige Cookiebeleid zet Onderneming uiteen welke cookies op uw Smart TV worden geplaatst en hoe u deze kunt beheren.\nNB: Op alle door Onderneming met behulp van cookies verzamelde en/of verwerkte persoonsgegevens is het Privacybeleid van toepassing en u dient dit Cookiebeleid te zen in samenhang met het Privacybeleid.\n1. Wat is een cookie?\nCookies zijn kleine tekstbestanden die op uw Smart TV worden geplaatst. Bij toegang tot een website of een rode knop dienst van een TV station, kan de website of dienst een cookie opslaan in de Smart TV. Bij een opvolgend bezoek verstuurt de cookie die op uw Smart TV is geplaatst informatie aan de partij die de cookie heeft geplaatst. Cookies zijn heel erg gebruikelijk en talloze websites en talloze diensten maken er gebruik van. Elke cookie bevat gewoonlijk de naam van het domein waarvan de cookie afkomstig is, de \"levensduur” van de cookie, en een waarde (gewoonlijk een uniek nummer). Meer informatie over cookies en hoe ze werken is te vinden op de website www.allaboutcookies.org.\nCookies kunnen worden onderverdeeld in functionele cookies en niet-functionele cookies. Functionele cookies zijn die cookies die strikt noodzakelijk zijn om de Smart TV-diensten te kunnen aanbieden en voor websites en andere diensten om de juiste content aan uw Smart TV te kunnen verzenden. Alle overige cookies zijn niet-functionele cookies.\nDit Cookiebeleid heeft zowel betrekking op cookies die door ons worden geplaatst als op advertentiecookies die geplaatst kunnen worden door derden via de door ons op uw Smart TV aangeboden diensten. Dit Cookiebeleid heeft geen betrekking op cookies die mogelijk op uw Smart TV worden geplaatst als u gebruikmaakt van de Smart TV-diensten om toegang te krijgen tot websites, diensten of apps van derden. Voor die cookies verwijzen wij u naar het cookiebeleid van de betreffende derden. In dit Cookiebeleid wordt echter wel uiteengezet hoe u dergelijke cookies kunt verwijderen (zie onderdeel 4 hieronder).\n2. Welke niet-functionele cookies worden door ons gebruikt?\nAdverteerders: Als u gebruikmaakt van de Smart TV-diensten kunnen in-video en display-advertenties worden doorgegeven aan uw Smart TV. Deze advertenties kunnen zowel door ons als door derden worden aangeboden, via, of in afstemming met, onze advertentieserver die bij het doorgeven van dergelijke advertenties een centrale, coördinerende rol vervult. Onze advertentieserver, of die van een derde-adverteerder, plaatst in dat geval een cookie op uw Smart TV. Door middel van deze cookie registreert een advertentieserver of een advertentie is doorgegeven aan uw Smart TV of dat iemand die gebruikmaakt van uw Smart TV op een advertentie heeft geklikt. Wij gebruiken de informatie die is opgeslagen in een dergelijke advertentie cookie om te onthouden welke advertenties aan uw Smart TV zijn doorgegeven, zodat we ervoor kunne zorgen dat niet te veel van dezelfde advertenties aan een bepaalde Smart TV worden doorgegeven, en zodat we in staat zijn onze commerciële afspraken met de adverteerder na te komen. Wij gebruiken deze informatie niet om speciaal op u gerichte advertenties door te geven. Derden kunnen van ons advertentiesysteem gebruik maken om advertenties door te geven aan uw Smart TV en daarbij cookies op uw Smart TV plaatsen. \nDeze cookies bevatten onder meer informatie over doorgegeven advertenties, informatie over de in welke app of in welk domein de advertenties zijn doorgegeven, en uw IP-adres. Dit wordt gedaan om te onthouden hoe vaak een bepaalde advertentie is vertoond, en om te voorkomen dat dezelfde advertentie te vaak wordt vertoond. Externe derden-adverteerders die advertenties kunnen plaatsen, kunnen ook cookies gebruiken om uw activiteiten op meerdere websites te volgen, en advertenties aan te bieden die zijn afgestemd op uw persoonlijke voorkeuren.\n3. Websites van derden\nAls u via de Smart TV-diensten van uw Smart TV websites van derden bezoekt of gebruikmaakt van de diensten van derden, bestaat de kans dat deze websites of diensten cookies op uw Smart TV plaatsen en dat deze websites uw activiteiten op deze websites onthouden en volgen. Wij verzoeken deze handelingen niet, en wij moedigen dit ook niet aan, en wij maken geen gebruik van deze informatie. Voor meer informatie over het gebruik door deze derden van cookies verwijzen wij u naar het cookie- en privacybeleid van die derden.\n4. Wissen van cookies\nVia de gebruikersinterface van uw Smart TV kunt u alle cookies en overige informatie die door de lokale browser op uw Smart TV is opgeslagen verwijderen. Wij raden u ten sterkste aan om alle cookies en lokaal opgeslagen instellingen te verwijderen voordat u uw Smart TV verkoopt of weggeeft.\n5. Contact\nMocht u vragen of opmerkingen hebben over dit Cookiebeleid of de wijze waarop wij gebruikmaken van cookies, dan kunt u ons een email sturen via FRsupport@tcl.com.\nVersie: 1.0\n"];
var privacyPolicyTitle = "Privacybeleid – Online Smart TV-diensten";
var privacyPolicyConditions = ["Wij respecteren uw privacy bij de omgang met uw persoonsgegevens. In dit Privacybeleid wordt uiteengezet welke entiteit verantwoordelijk is voor het verzamelen, verwerken en gebruiken van de persoonsgegevens die wij over u verzamelen in verband met uw gebruik van onze Smart TV-diensten (\"Diensten\"), welke soorten persoonsgegevens wij over u verzamelen, wat wij daarmee doen en wat uw rechten zijn ten aanzien van het gebruik door ons van uw persoonsgegevens. \n1. Verantwoordelijke\nHet verzamelen, verwerken en gebruiken van persoonsgegevens die tijdens uw gebruik van de Diensten over u verzameld worden, vindt plaats door Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, China (\"Onderneming\"). Voor de goede orde: wij zijn niet verantwoordelijk voor alle hierna beschreven gegevensverwerkingshandelingen. Desalniettemin hebben wij een beschrijving van de betreffende activiteiten in ons Privacybeleid opgenomen omdat deze verwerkingen verband houden met uw gebruik van de Smart TV.\n2. Toestemming voor gegevensverwerking\nVoor bepaalde vormen van verzamelen, verwerken en/of gebruiken van uw persoonsgegevens is uw toestemming vereist. \nIndien u toestemming heeft verleend voor het gebruik van uw persoonsgegevens om de Diensten te verbeteren, dan is uw toestemming als volgt verwoord:\n\"Ik ga akkoord met het verzamelen, verwerken en gebruiken van het starttijdstip van mijn apparaat, het DTV-kanaaloverzicht, mijn favoriete zenders, bezoektijden en bekeken zenders met het doel om gebruiksgewoontes te analyseren om zo de Diensten te verbeteren en/of om te analyseren hoeveel online gebruikers Onderneming heeft per dag/maand/jaar en om deze informatie te delen tv-stations.\"\nIndien u toestemming heeft verleend voor het gebruik van uw persoonsgegevens voor op uw interesses afgestemde advertenties, dan is uw toestemming als volgt verwoord:\n\"Ik ga akkoord met het verzamelen, verwerken en gebruiken van gegevens over het type cliënt dat ik ben en het land waarin ik mij bevind met het doel om gepaste  advertenties te ontvangen.\nToestemming is vrijwillig en u kunt nog steeds gebruik blijven maken van de Diensten indien u geen toestemming verleent. Wel is het mogelijk dat u advertenties en andere content te zien krijgt die niet op uw voorkeuren zijn afgestemd. Ongeacht of u toestemming hebt gegeven, behoudt Onderneming zich het recht voor om de hierboven genoemde gegevens te verzamelen, verwerken en/of gebruiken voor zover op grond van het toepasselijke recht is toegestaan.\nU kunt op elk moment uw toestemming met betrekking tot het bovenstaande intrekken met het effect voor de toekomst. U kunt bezwaar maken tegen het gebruik van uw persoonsgegevens voor marketingdoeleinden, markt- of opinieonderzoeken en voor het afstemmen van de Diensten op uw behoeften. U kunt uw toestemming intrekken en/of bezwaar maken door de privacy-instellingen van uw Smart TV overeenkomstig te wijzigen.\n3. Verzamelde persoonsgegevens\nOngeacht uw toestemming verzamelt, verwerkt en gebruikt Onderneming de volgende gegevenscategorieën:\nToestel-ID: Uw Smart TV slaat een vast, uniek nummer op waarmee wij de Smart TV kunnen identificeren en authentiseren wanneer u de Diensten gebruikt. Dit nummer wordt het Toestel-ID genoemd. Het Toestel-ID wordt gedeeld met onze dienstenpartner om de Diensten aan u aan te bieden. Wij verstrekken het Toestel-ID ook aan geselecteerde contentpartners voor authenticatiedoeleinden. Deze contentpartners gebruiken het Toestel-ID om uw Smart TV te authentiseren voor toegang tot de diensten die worden verleend door een contentpartners.\nIP-adres en MAC-adres: Wanneer u verbinding maakt met het Internet wordt een IP-adres aan uw Smart TV toegekend. Dit IP-adres wordt aan ons doorgegeven en verwerkt door ons elke keer wanneer de Smart TV informatie of gegevens opvraagt van de Diensten. Als uw Smart TV zich achter een router bevindt (bijv. in een thuisnetwerk of lokale WLAN), kunnen wij het IP-adres van die router verzamelen en verwerken. Het MAC-adres is een uniek nummer dat aan elke netwerkinterface van uw Smart TV wordt toegekend. Ook het MAC-adres wordt door ons verzameld en verwerkt elke keer wanneer de Smart TV informatie of gegevens opvraagt van de Diensten.\nGegevens Dienstenverzoek: Telkens wanneer u uw Smart TV aanzet en uw Smart TV verbindt met het Internet, wordt deze automatisch verbonden met de Diensten, die door onze dienstenpartner wordt beheerd. Vervolgens wordt uw Smart TV geauthentiseerd om vast te stellen of deze het recht heeft op toegang tot de Diensten. De Diensten slaan voor dit doeleinde van authenticatie een of meer aan uw Smart TV gekoppelde unieke nummers op. Wanneer de Smart TV verbinding maakt met de Dienst, verstuurt de Smart TV het daaraan toegekende IP-adres alsmede specifiek op de Smart TV betrekking hebbende gegevens (Smart TV model, softwareversie) om te checken of er software updates beschikbaar zijn.\nDiensteninstellingen: Als onderdeel van de gebruikelijke functionaliteit van de Diensten kunt u de volgorde waarin de apps door de Dienst worden weergegeven handmatig instellen. Onze dienstenpartner slaat uw volgorde en andere voorkeuren die u kunt instellen tijdens het gebruik van de Dienst op. Deze informatie wordt vervolgens gekoppeld aan het Toestel-ID.\nToestel-specifieke informatie: De Smart TV slaat bepaalde gegevens met betrekking tot het toestel en de configuratie daarvan op. Deze informatie bevat het type Smart TV, de versie van het door de Smart TV gebruikte besturingssysteem, de schermresolutie, het project-ID (zijnde informatie over configuratiebestanden), de gebruikersagent, browsernaam, browserversie en taal- en landinstelling. Deze informatie wordt door ons gebruikt en gedeeld met onze dienstenpartners en contentpartners.\nAdverteren: De Diensten kunnen advertenties bevatten. Deze advertenties worden door ons aangeboden, of door derden die gebruik maken van advertentieruimte die door ons wordt toegewezen. Alle advertenties worden doorgegeven door middel van, of via, onze advertentieserver, die bij het doorgeven van advertenties een coördinerende rol vervult. Onze advertentieserver of die van derden kan hiertoe een cookie op uw Smart TV plaatsen. Voor meer informatie over deze cookies verwijzen wij naar ons Cookiebeleid.\nVerkeer tussen Diensten- en Contentpartner: Telkens wanneer u gebruikmaakt van de Diensten, vraagt uw Smart TV via het Internet gegevens op over de Diensten. Als onderdeel van deze verzoeken worden het hierboven omschreven IP-adres, en de taal- en landinstelling  van uw Smart TV, verzonden aan onze dienstenpartner. De betreffende gegevens worden door onze dienstenpartner verwerkt overeenkomstig diens eigen privacybeleid.\nGebruik van tweede scherm: Als u gebruikmaakt van onze ‘tweede-scherm’-app, worden de door u op de app geactiveerde bedieningsinstellingen en de taal- en landinstelling, het DTV-kanaaloverzicht, favoriete zenders, programmaoverzicht, Toestel-ID, huidige kanaal, protocolversie en IP-adres van uw Smart TV door ons verzameld en verwerkt op onze servers. Uw Smart TV wordt vervolgens aangestuurd door onze servers overeenkomstig de door u opgegeven instellingen in de tweede-scherm app.\nHbbTV - \"Rode Knop\": Tv-stations (\"Stations\") kunnen aanvullende informatie versturen met hun tv-signalen. Als deze aanvullende informatie specifieke instructies bevat voor de Smart TV en deze is verbonden met het Internet, wordt door de Smart TV een afbeelding of kleine pagina van de website van het Station gedownload en weergegeven tezamen met de informatie om de “Rode Knop\" op de afstandsbediening in te drukken indien u gebruik wilt maken van de aanvullende diensten van het Station. Dit gebeurt ook telkens wanneer u zapt. Bij het downloaden van de afbeelding van de website van het Station worden door de Smart TV bepaalde persoonsgegevens verzonden, namelijk het DTV-kanaaloverzicht, het huidige kanaal, gebeurtenissen informatietabel, tijd op de TV, IP-adres van uw Smart TV en eventueel op de Smart TV opgeslagen cookies. Het Station is verantwoordelijk voor het verzamelen, verwerken en/of gebruiken van deze gegevens. Als u middels de Rode Knop gebruikmaakt van aanvullende diensten die worden aangeboden door een Station, kan het Station andere persoonsgegevens over u verzamelt (zoals welke on-demand video’s u bekijkt, welk nieuws u leest, etc.)\n4. Doeleinden waarvoor wij uw persoonsgegevens verzamelen en/of gebruiken\nWij verwerken verzamelde gegevens voor de volgende doeleinden:\n•    Aanbieden van de Diensten: Wij gebruiken het IP-adres en MAC-adres, Toestel-ID, de versie van het besturingssysteem van de Smart TV, klanttype en schermresolutie van uw Smart TV, project-ID (zijnde informatie over configuratiebestanden), uw DTV-kanaaloverzicht, bekeken kanalen, tijdszone en taal- en landinstellingen om uw Smart TV toegang te verlenen tot de Diensten en door contentpartners aangeboden diensten. Tot de doeleinden behoren (maar zij zijn niet beperkt tot) authenticatie, aanbieden van locatie-gebaseerde diensten aan u (bijv. weersvoorspellingen); tegengaan van misbruik, beheren van beveiligingsincidenten, bewaken van de beschikbaarheid van de Diensten, en het verlenen van back-up diensten van gebruikersvoorkeuren.\n•   Authenticatie: We gebruiken het Toestel-ID en MAC-adres voor authenticatiedoeleinden.\n•   Software updates: Telkens wanneer uw Smart TV aan staat, worden het IP-adres, Toestel-ID, softwareversie, klanttype van uw Smart TV, project-ID (zijnde configuratiebestanden), gebruikers-ID,  serienummer aan ons verzonden om u de gepaste software updates te kunnen aanbieden. \n•   Verbeteren van de Diensten: Wij maken gebruik van geaggregeerde en geanonimiseerde gebruiksgegevens (zijnde gegevens over hoe u gebruikmaakt van de Diensten) om de gebruikservaring van de Diensten te verbeteren.\n•   Aanbieden van advertenties: Wij gebruiken de informatie in advertentiecookies zodat het systeem kan bijhouden welke advertenties op uw Smart TV zijn vertoond om ervoor te waken dat u niet te veel soortgelijke advertenties ontvangt, en om ons in staat te stellen de door ons gemaakte commerciële afspraken met onze advertentiepartners na te komen. Externe adverteerders die advertenties aanbieden op de Diensten of op de websites van contentpartners na afstemming met onze advertentieserver, kunnen ook cookies gebruiken om u te volgen over meerdere websites, en advertenties weer te geven die zijn afgestemd op uw persoonlijke voorkeuren.\n•   Optimaliseren van advertenties: Wij maken gebruik van gegevens over het bekijken van en klikken op advertenties om de ervaringen van de klanten met advertenties op de Diensten te optimaliseren.\n•   Kortingen: Wij geven het Toestel-ID door aan geselecteerde contentpartners opdat zij kunnen vaststellen in hoeverre zij u gratis toegang kunnen aanbieden op Video On Demand-titels in hun aanbod.\n•   Handhaving van de wet: Wij kunnen verplicht worden gegevens te verstrekken aan de bevoegde wetshandhavende instanties of rechtbanken. Als wij dit doen, doen wij dit alleen op grond van een bindend rechtsinstrument zoals een bevel of rechtelijke beschikking, op grond waarvan wij verplicht zijn medewerking te verlenen aan de betreffende instanties.\nHet is mogelijk gebruik te maken van de Diensten onder een pseudoniem, tenzij het voor bepaalde diensten noodzakelijk is dat u uw naam en/of e-mailadres opgeeft.\n5. Categorieën ontvangers\nOnderneming deelt uw persoonsgegevens die tijdens uw gebruik van de Diensten zijn verzameld uitsluitend met de volgende derden:\n• met derden-aanbieders van Smart TV-diensten wanneer u om deze diensten verzoekt (als u bijvoorbeeld de Netflix-app op uw Smart TV activeert, kunnen wij uw IP-adres, MAC-adres, softwareversie en naam van het TV model doorgeven aan Netflix).\n• met derden-contentpartners als u bepaalde door die contentpartners aangeboden content wilt afnemen (bijvoorbeeld om u de Go-Live IP TV-dienst aan te bieden, kunnen wij uw TV klanttype, IP-adres en taal- en landinstellingen delen met de rechtspersoon die de Go-Live-dienst aanbiedt).\n• Voor zover u toestemming hebt verleend voor het verstrekken van bepaalde persoonsgegevens aan de hierboven genoemde derden, zal Onderneming uw persoonsgegevens delen met deze derden verstrekt.\n• met dienstverleners die Onderneming assistentie verlenen bij het aanbieden van de Diensten in de hoedanigheid van bewerker.\nOnderneming deelt uw persoonsgegevens uitsluitend met andere derden voor zover daartoe een verplichting op haar rust op grond van juridische voorschriften (bijvoorbeeld aan rechtbanken of strafrechtelijke instanties), als u voor het delen toestemming heeft gegeven of in het geval het delen anderszins is toegestaan op grond van het toepasselijke recht.\n6. Landen waarin uw gegevens worden verwerkt\nOnderneming en/of bepaalde van de hierboven genoemde ontvangers van uw persoonsgegevens kunnen zijn gevestigd buiten de Europese Economische Ruimte (namelijk in de volgende landen: Volksrepubliek van China, Verenigde Staten). Het is dus mogelijk dat uw persoonsgegevens worden verwerkt in landen die niet worden geacht een passend beschermingsniveau ter bescherming van persoonsgegevens te bieden, in overeenstemming met Richtlijn 95/46/EG van het Europese Parlement en de Raad van 24 oktober 1995 betreffende de bescherming van natuurlijke personen in verband met de verwerking van persoonsgegevens en betreffende het vrije verkeer van die gegevens.\n7. Uw rechten\nU kunt contact opnemen met Onderneming om meer informatie te ontvangen over de verwerking van uw persoonsgegevens door Onderneming en/of het uitoefenen van uw wettelijke rechten met betrekking tot de toegang, het verbeteren, verwijderen of blokkeren van uw persoonsgegevens; en/of om bezwaar te maken tegen de verwerking van uw persoonsgegevens voor marketingdoeleinden en/of markt- en opinieonderzoek.\n8. Wijzigingen in het Privacybeleid\nTeneinde onze Diensten te verbeteren kan het noodzakelijk zijn dit Privacybeleid van tijd tot tijd te wijzigen – bijvoorbeeld bij de implementatie van nieuwe technologieën of de introductie van nieuwe diensten. Wij behouden het recht voor dit Privacybeleid te allen tijde aan te vullen of te wijzigen.\n9. Contact\nMocht u vragen of opmerkingen hebben over dit Privacybeleid of u een klacht heeft over de wijze waarop wij gebruikmaken van uw persoonsgegevens, dan kunt u op de volgende wijze contact met ons opnemen:\nPer e-mail: FRsupport@tcl.com\nVersie: 1.0\n"];
var privacyPolicyTerms = [
    "Smart TV service inschakelen.",
    "Ik geef toestemming aan het verzamelen, verwerken en gebruiken van de starttijd van mijn apparaat, de DTV-kanaallijst, de lijst met favoriete kanalen de bezoektijd en de bekeken kanalen met als doel de analyse van het gedrag van gebruikers om diensten te verbeteren en/of te analyseren hoeveel online gebruikers TLC per dag/maand/jaar heeft en om deze informatie te delen met tv-stations.",
    "Aanbevelingservice inschakelen.",
    "Tweede schermapplicatie inschakelen voor mobiele apparatuur",
    "Automatische software-updates inschakelen.",
    "De service FreeviewPlay inschakelen."
];
var privacyPolicyTips = [
    "Alle Smart tv-services worden uitgeschakeld.",
    "De service HbbTV die wordt aangeboden oor tv-kanalen wanneer de ingebouwde tuner wordt gebruikt, wordt uitgeschakeld.",
    "De service voor inhoud en aanbevelingen voor tv-programma's wordt uitgeschakeld.",
    "De applicatie van een tweede scherm wordt uitgeschakeld.",
    "De tv controleert niet automatisch op software-updates en nieuwe functies.",
    "De inhoud FreeviewPlay wordt uitgeschakeld."
];
var privacyPolicyRemind = "Tik op het bijbehorende selectievakje in Instellingen.";
var set = "Instellen";
var copyShopDemoTips = ["Verbonden met de USB, wilt u de video naar de stick kopiëren?","De video naar de stick kopiëren","De video is met succes gekopieerd!","De video kopiëren is mislukt!"];
var dataDeletionWords = ["Gegevens van uw Smart TV-dienst in de backend-servers verwijderen.","Opmerkingen: De gegevens met betrekking tot de gebruiker van uw Smart TV worden verwijderd binnen een maand nadat u dit item aangevinkt. Houd er rekening mee dat het verwijderen geen invloed heeft op de lokale gegevens die zijn opgeslagen op uw tv.","Geen gegevens meer aan de Smart TV-server melden.","Opmerkingen:  Uw gegevens gerelateerd aan het gebruik van de Smart TV-diensten worden niet meer naar de server overgedragen nadat u dit item hebt aangevinkt. Uw tv ontvangt geen aanbevolen diensten meer.","Bezoek de website www.tcl.eu voor meer informatie"];
var miracastWords = ["Draadloze verbinding","Android-telefoon spiegelen op tv","Klik om verbinding te maken","Deze functie is alleen beschikbaar op een Android-telefoon"];
var miracastTips = ["Stappen voor verbinding","Open systeeminstellingen","Meer manieren om verbinding te maken \n / Andere draadloze verbindingen","Kies draadloos beeldscherm","Klik om verbinding te maken \n wachten om gevonden te worden"];

var termsAndConditions = ["\nDe inhoud en diensten (samen de \"Gelicentieerde Applicatie\") die aan u beschikbaar worden gesteld door dit tv-toestel (dit \"Apparaat\") worden niet aan u verkocht maar aan u in licentie gegeven voor gebruik uitsluitend op basis van deze voorwaarden. De aanbieders van de Gelicentieerde Applicatie (elk een \"Applicatie Aanbieder\") behouden alle rechten voor die niet expliciet aan u worden verleend.\n\n1. Reikwijdte van licentie \n\nDe licentie die door de betreffende Applicatie Aanbieder aan u is verstrekt voor een Gelicentieerde Applicatie is beperkt tot een niet-overdraagbaar recht voor het gebruik van de Gelicentieerde Applicatie op het Apparaat dat u bezit of in eigendom heeft. U mag de Gelicentieerde Applicatie niet verspreiden of anderszins beschikbaar te stellen via een netwerk waarbij deze kan worden gebruikt door meerdere apparaten op hetzelfde moment. U mag de Gelicentieerde Applicatie niet huren, verhuren, leasen, verkopen, herdistribueren of sublicientiëren. \n\nAlle Gelicentieerde Applicaties, evenals alle inhoud daarvan, die toegankelijk zijn via dit Apparaat behoren toe aan de Applicatie Aanbieder en zijn beschermd door de toepasselijke intellectuele eigendomswetten. Tenzij het toepasselijke recht anders bepaalt, is het niet toegestaan om de Gelicentieerde Applicatie, of updates of een deel hiervan, te wijzigen, kopiëren, decompileren, demonteren, reverse-enigineeren, heruitgeven, uploaden, verzenden, doorgeven, vertalen, te trachten de broncode te achterhalen, er afgeleide werken van te maken, of anderszins te exploiteren. Indien u in strijd handelt met deze beperkingen kan een strafrechtelijke vervolging tegen u worden ingesteld en schadevergoeding worden geëist. De voorwaarden van de licentie zijn van toepassing op updates die worden geleverd door de Applicatie Aanbieder welke de originele Gelicentieerde Applicatie vervangen en/of aanvullen, tenzij de betreffende upgrade vergezeld gaat met een afzonderlijke licentie, in welk geval de voorwaarden van die licentie van toepassing zullen zijn. U bent zelf verantwoordelijk voor de kosten (indien aanwezig) die gepaard gaan met het upgraden van de Gelicentieerde Applicatie. \n\n2. Materialen van Derden\n\nDe Gelicentieerde Applicatie kan toegang geven tot de diensten en websites van de Applicatie Aanbieder en die van derde partijen (samen de \"Diensten\"). Bij het gebruik van deze Diensten kunt u inhoud tegenkomen die door u mogelijk als beledigend, onfatsoenlijk of aanstootgevend wordt beschouwd, welke inhoud al dan niet kan worden geïdentificeerd als grof taalgebruik en dat de resultaten van een zoekopdracht of het invoeren van een bepaalde URL automatisch en onbedoeld koppelingen of verwijzingen naar aanstootgevend materiaal kunnen genereren. Desondanks is de fabrikant van dit Apparaat (de \"Fabrikant\") en de Applicatie Aanbieder op geen enkele wijze aansprakelijk jegens u voor inhoud die door u mogelijk als beledigend, onfatsoenlijk of aanstootgevend wordt ervaren. \n\nDe Fabrikant is niet verantwoordelijk voor het onderzoeken of beoordelen van de inhoud, nauwkeurigheid, volledigheid, tijdigheid, geldigheid, naleving van het auteursrecht, rechtmatigheid, kwaliteit of enig ander aspect van dergelijke Diensten. De Fabrikant biedt geen garanties of goedkeuringen en aanvaardt geen aansprakelijkheids of verantwoordelijkheidsverplichting jegens u of enig ander persoon voor deze Diensten. \n\nDe Diensten kunnen beschermde inhoud, informatie en materiaal bevatten (samen \"Materialen van Derde Partijen\") die zijn beschermd door toepasselijke intellectuele eigendomsrechten en andere wetten en u zult dergelijke Materialen van Derde Partijen op geen enkele manier gebruiken, behalve voor toegestaan gebruik van de Diensten. Tenzij anderszins toegestaan door de toepasselijke wetgeving, zult u het Materiaal van Derde Partijen op geen enkele wijze reproduceren, wijzigen, verhuren, leasen, uitlenen, verkopen, verspreiden of daarvan afgeleide werken maken, en u zult de Diensten op geen enkele wijze zonder toestemming anderszins exploiteren. U zult de Diensten niet gebruiken om anderen lastig te vallen, te misbruiken, stalken, bedreigen, zwart te maken of op enige andere wijze te schenden of inbreuk te maken op de rechten van een andere partij, en de Fabrikant zal op geen enkele manier verantwoordelijk zijn voor dergelijk gebruik door u, noch voor alle intimiderende, bedreigende, lasterlijke, aanstootgevende of illegale berichten of uitzendingen die u mogelijk ontvangt als gevolg van het gebruik van een van de Diensten. \n\n3. Geen garantie\n\nAlle Gelicentieerde Applicaties en Diensten worden aangeboden \"as is\" en \"as available\" zonder enige vorm van garantie, uitdrukkelijk dan wel stilzwijgend. De Fabrikant neemt nadrukkelijk afstand van alle garanties en voorwaarden met betrekking tot de Gelicentieerde Applicatie en de Diensten, hetzij uitdrukkelijk of stilzwijgend, met inbegrip van, maar niet beperkt tot, garanties voor verhandelbaarheid, voldoende kwaliteit, van geschiktheid voor een bepaald doel, nauwkeurigheid, ongestoord genot en van het niet schenden van rechten van derden. De Fabrikant garandeert niet de juistheid, geldigheid, tijdigheid, rechtmatigheid of volledigheid van de Gelicentieerde Applicatie of Diensten die ter beschikking zijn gesteld via dit Apparaat, en garandeert niet dat het Apparaat, de Gelicentieerde Applicaties of Diensten beantwoorden aan uw vereisten, of dat de werking van de Gelicentieerde Applicatie of Diensten niet wordt onderbroken of foutloos zal zijn of dat gebreken in de Gelicentieerde Applicatie of Diensten gecorrigeerd worden. Indien de Gelicentieerde Applicatie of Diensten gebrekkig blijken te zijn, draagt u alle nodige onderhouds-, reparatie- of herstelkosten. \n\nDe Gelicentieerde Applicatie en Diensten kunnen op elk moment en zonder kennisgeving worden gewijzigd, opgeschort, verwijderd, beëindigd of onderbroken, of de toegang kan worden geweigerd en de Fabrikant geeft geen enkele garantie dat enige inhoud of dienst die is opgenomen in de Gelicentieerde Applicaties en Diensten beschikbaar blijft voor een bepaalde periode. Dergelijke inhoud en diensten worden verstuurd door derden via netwerken en zendinstallaties waar de Fabrikant geen controle over heeft. Zonder af te doen aan de algemene geldigheid van het voorgaande sluit de Fabrikant elke verantwoordelijkheid of aansprakelijkheid uit voor een verandering, onderbreking, uitschakeling, verwijdering van of opschorting van enige inhoud of diensten welke beschikbaar zijn via dit Apparaat. De Applicatie Aanbieder en andere aanbieders van de Diensten behouden zich het recht voor de toegang tot de Gelicentieerde Applicatie of Diensten elk moment en zonder voorafgaande kennisgeving te wijzigen, op te schorten, te verwijderen of uit te schakelen. De Fabrikant kan ook grenzen stellen aan het gebruik van of toegang tot bepaalde Gelicentieerde Applicaties of Diensten, in elk geval en zonder kennisgeving of aansprakelijkheid.  \n\nDe Fabrikant biedt geen klantenservice aan met betrekking tot de Gelicentieerde Applicaties en de Diensten. Vragen of verzoeken voor diensten met betrekking tot de Gelicentieerde Applicaties en de Diensten dienen direct aan de betrokken aanbieder worden ingesteld.\n\n4. Verzameling en Gebruik van Informatie\n\nDe Fabrikant, de Applicatie Aanbieders en de aanbieders van de Diensten kunnen technische gegevens en gerelateerde informatie verzamelen en gebruiken, met inbegrip van, maar niet beperkt tot, technische informatie over dit Apparaat, systeem en toepassingssoftware en randapparatuur, om de verstrekking van eventuele software-updates, productondersteuning en andere diensten met betrekking tot het Apparaat en de Gelicentieerde Applicatie aan u te kunnen faciliteren. De Fabrikant, de Applicatie Aanbieder en de aanbieders van de Diensten kunnen dergelijke informatie gebruiken om producten te verbeteren of om diensten of technologieën aan u aan te leveren, mits deze informatie u niet persoonlijk identificeert. Voor meer informatie omtrent de verzameling en het gebruik van informatie, kunt u terecht op onze privacy policy http://www.tcl.eu/en/.\n\n5. Niet-beschikbaarheid van Bepaalde Functies\n\nVanwege beperkingen van de Applicatie Aanbieder zijn bepaalde functies, applicaties en diensten mogelijk niet beschikbaar op dit Apparaat (inclusief zijn randapparatuur) of in alle territoria. Sommige functies op dit Apparaat vereisen mogelijk ook extra randapparatuur of lidmaatschapskosten die afzonderlijk worden verkocht.\n\n6. Beperking van Aansprakelijkheid\n\nVoor zover niet verboden door de toepasselijke wetgeving, zal de Fabrikant onder geen enkele omstandigheid, inclusief nalatigheid, aansprakelijk zijn, ongeacht of deze voortvloeit uit overeenkomst of onrechtmatige daad, voor enige directe, indirecte, incidentele, bijzondere of gevolgschade, advocaatkosten, onkosten of enige andere schade voortvloeiende uit, of met betrekking tot, enige informatie vervat in of ten gevolge van gebruik van het Apparaat, Gelicentieerde Applicaties of de Diensten door u of een derde partij, zelfs indien is geadviseerd over de mogelijkheid van dergelijke schade.\n\nDe Fabrikant is enkel aansprakelijk voor opzet of grove nalatigheid."];
var privacyNotice = ["\n\nWe respecteren uw privacy wanneer wij omgaan met uw persoonsgegevens. Deze Privacyverklaring beschrijft de entiteit die verantwoordelijk is voor de verwerking van de persoonsgegevens die wij over u verzamelen in verband met het gebruik van onze Smart TV diensten (\"Diensten\"), welke soorten persoonsgegevens wij over u verzamelen, wat we ermee doen, en uw rechten met betrekking tot ons gebruik van die persoonsgegevens.\n\n1.	De verwerkingsverantwoordelijke en vertegenwoordiger in de Europese Unie\n\nDe verzameling, verwerking en het gebruik van de persoonsgegevens die van uw worden verzameld bij het gebruik van de Diensten, wordt uitgevoerd door Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, China (\"Bedrijf\"). Onze contactgegevens en de contactgegevens van onze vertegenwoordiger in de Europese Unie zijn te vinden hieronder in Sectie 12. Houd er wel rekening mee dat wij niet verantwoordelijk zijn voor alle verwerkingsactiviteiten die hieronder worden beschreven. We hebben desalniettemin een beschrijving van de betreffende activiteiten in onze Privacyverklaring opgenomen omdat deze verwerkingen verband houden met uw gebruik van de Smart TV.\n\n2.	Toestemming voor gegevensverwerking \n\nSommige verwerkingsactiviteiten die wij uitvoeren vereisen uw toestemming, bijv. het gebruik van uw persoonsgegevens voor het verbeteren van de Diensten.\n\nToestemming is vrijwillig en u kunt de Diensten blijven gebruiken als u geen toestemming geeft. Het kan zijn dat u content ziet die niet is afgestemd op uw voorkeuren. Ongeacht uw toestemming behouden wij ons het recht voor om uw persoonsgegevens te verwerken voor zover dit is toegestaan op grond van de toepasselijke wetgeving.\n\nU kunt uw toestemming op elk gewenst moment intrekken. De intrekking van toestemming zal geen invloed hebben op de rechtmatigheid van de verwerking op basis van toestemming voorafgaand aan de intrekking. Om uw toestemming in te trekken en/of bezwaar te maken (zie Sectie 10 en de Bijlage Uw Rechten hieronder voor uw recht van bezwaar), kunt u dienovereenkomstig de privacy-instellingen van uw Smart TV wijzigen.\n\n3.	Specifieke categorieën van persoonsgegevens\n\nWij verwerken voornamelijk de volgende categorieën van persoonsgegevens:\n\nApparaat-ID: Uw Smart TV slaat een vast uniek nummer op dat ons in staat stelt om de Smart TV te identificeren en te authentiseren wanneer u gebruik maakt van de Diensten. Dit nummer wordt het Apparaat-ID genoemd.\n\nIP-adres en MAC-adres: Uw Smart TV krijgt een IP-adres toegewezen wanneer u het internet gebruikt. Als uw Smart TV zich achter een router bevindt (bijvoorbeeld in een lokaal thuisnetwerk of lokaal WLAN), kunnen we het IP-adres van een dergelijke router verwerken. Het MAC-adres is een uniek nummer dat is toegewezen aan elk netwerkinterface van uw Smart TV.\n\nApparaat specifieke informatie: De Smart TV slaat verschillende soorten informatie op over het apparaat zelf en de configuratie ervan. Deze informatie is met inbegrip van het type Smart TV, de versie van het besturingssysteem van de Smart TV, de paneelresolutie, het project-ID (d.w.z. informatie over configuratiebestanden), de user-agent, de browsernaam, de browserversie, en de taal en het land die zijn geconfigureerd in de Smart TV.\n\nDeze informatie zal door ons worden gebruikt en worden verstrekt aan onze servicepartner en content-partners voor de hieronder beschreven doeleinden.\n\n4.	Doeleinden waarvoor wij uw persoonsgegevens verwerken en/of gebruiken en wettelijke grondslagen\n\nDe doeleinden waarvoor wij uw persoonsgegevens verwerken en de betreffende wettelijke grondslagen worden hieronder beschreven. Voor zover contractuele doeleinden hieronder als wettelijke grondslag worden genoemd, kunnen wij u geen Diensten leveren als u ons niet de betreffende gegevens verstrekt. Voor zover uw toestemming als wettelijke grondslag wordt genoemd, bent u vrij om uw toestemming te geven of te weigeren. Als u geen toestemming geeft, zullen wij uw persoonsgegevens niet voor dat betreffende doel verwerken.\n\n•	De Diensten leveren: we gebruiken het IP-adres en het MAC-adres, Apparaat-ID, de versie van het besturingssysteem van de Smart TV, het client type van uw Smart TV en de paneelresolutie, het project-ID (d.w.z. informatie over configuratiebestanden), uw DTV-kanaallijst, bekeken kanalen, tijdzone, land- en taalinstellingen om uw Smart TV toegang te geven tot de Diensten en de diensten die worden aangeboden door content-partners. Doeleinden omvatten (maar zijn niet beperkt tot) het leveren van op locatie gebaseerde diensten aan u (bijv. weersvoorspellingen); afhandeling van misbruik, beheer van beveiligingsincidenten, het controleren van de beschikbaarheid van de Diensten, en het bieden van back-up diensten voor gebruikersvoorkeuren.\n\nWanneer u de Diensten gebruikt vraagt uw Smart TV de gegevens van de Diensten via internet op. Als onderdeel van deze verzoeken worden uw IP-adres, zoals hierboven beschreven, en de taal en het land die zijn geconfigureerd in uw Smart TV doorgezonden naar onze servicepartner. Onze servicepartner verwerkt de respectievelijke gegevens in overeenstemming met zijn privacyverklaring.\n\nDe wettelijke grondslag voor de respectieve verwerking van uw persoonsgegevens zijn contractuele doeleinden overeenkomstig artikel 6, lid 1, onder b, Algemene Verordening Gegevensbescherming (\"AVG\").\n\n•	Instellingen van de Diensten: als onderdeel van de reguliere functionaliteit van de Diensten kunt u de volgorde waarin de apps door de Diensten worden weergegeven handmatig rangschikken. Onze servicepartner zal de rangschikking en andere voorkeuren die u tijdens het gebruik van de Diensten kunt instellen opslaan. Deze informatie wordt gekoppeld aan het Apparaat-ID.\n\nDe wettelijke grondslag voor de respectieve verwerking van uw persoonsgegevens zijn contractuele doeleinden overeenkomstig artikel 6, lid 1, onder b AVG.\n\n•	Authenticatie: Telkens wanneer u uw Smart TV op het internet aansluit en de Smart TV inschakelt, maakt deze automatisch verbinding met de Diensten, die worden beheerd door onze servicepartner. Uw Smart TV wordt dan geauthentiseerd als zijnde gecertificeerd voor toegang tot de Diensten. Voor authenticatiedoeleinden slaan de Diensten een of meer unieke numerieke identificators op gerelateerd aan uw Smart TV. We gebruiken het Apparaat-ID en het MAC-adres voor authenticatiedoeleinden. We verstrekken ook het Apparaat-ID aan geselecteerde content-partners voor authenticatiedoeleinden. Deze content-partners gebruiken het Apparaat-ID om uw Smart TV te authentiseren voor toegang tot de diensten die worden aangeboden door een content-partner.\n\nDe wettelijke grondslag voor de respectieve verwerking van uw persoonsgegevens zijn contractuele doeleinden overeenkomstig artikel 6, lid 1, onder b AVG.\n\n•	Diagnose op afstand: als onderdeel van de Diensten verschaffen we diagnostische diensten op afstand. Daarom verwerken we het Apparaat-ID, het apparaat nummer, het serienummer, het MAC-adres en foutlogboeken, foutcodes en foutbeschrijvingen die automatisch door de defecte module (applicatie, middleware-systeem) worden verstrekt.\n\nVerder, als u onze klantenservice belt kan een servicemedewerker, mits u daarvoor voorgaand toestemming heeft gegeven, ook op afstand toegang krijgen tot uw TV en verdere diagnostische diensten op afstand uitvoeren. In dat geval krijgt de klantenservicemedewerker toegang tot uw TV en netwerken, applicatie  en opgeslagen gegevensbestanden, en kan deze het Apparaat-ID, het apparaat nummer, het serienummer, het MAC-adres, foutlogboeken, foutcodes, foutbeschrijvingen, Terminal ID, geïnstalleerde APP-informatie, screenshot van de TV en aangesloten USB/Bluetooth apparaat informatie verwerken om de toestand van de TV en de bijbehorende toepassingen en gegevens te beoordelen. De foutlogboeken kunnen informatie bevatten, zoals de TV programma geschiedenis, muziek afspeellijst, gebruikersnaam en wachtwoord van de APP, als voor de uitzending gebruik wordt gemaakt van een APP van een derde partij die dergelijke informatie niet heeft versleuteld. Dit wordt gedaan om problemen vast te stellen, systeeminstellingen aan te passen aan de hand van uw verzoek, of om gemelde problemen te verhelpen. Daarnaast kunnen leden van de klantenservice op verzoek problemen oplossen, programma's uitvoeren of software installeren/verwijderen, de TV opnieuw configureren en/of de service of technische ondersteuning op andere wijze uitvoeren.\n\nIedere toegang op afstand vindt alleen plaats nadat u de functie voor ondersteuning op afstand heeft ingeschakeld door het selectievakje op uw TV aan te vinken en wordt beëindigd na de betreffende sessie.\n\nDe wettelijke grondslag voor de respectieve verwerking van uw persoonsgegevens zijn contractuele doeleinden overeenkomstig artikel 6, lid 1, onder b AVG.\n\n•	After-sales service: Op grond van het toepasselijk recht hebt u mogelijk garantie of vergelijkbare rechten op het ontvangen van after-sales service. TCL Europe, 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, Frankrijk is verantwoordelijk voor de afhandeling van garantieaanspraken en andere verzoeken voor after-sales service en de verwerking van uw persoonsgegevens die daarmee samenhangen. Dat wil zeggen, met het oog op after-sales service fungeert TCL Europe als verwerkingsverantwoordelijke en zijn wij niet verantwoordelijk voor de respectieve verwerking van uw persoonsgegevens.\n\nWanneer u om onze after-sales service vraagt, kunnen uw naam, e-mailadres, telefoonnummer, service verzoek en postadres op de factuur nodig zijn om u de service te kunnen leveren. De informatie kan ook worden verzameld via de after-sales partners van onze wederverkopers of geautoriseerde dienstverleners als u ze belt voor serviceverlening. U kunt contact opnemen met TCL Europe via de contactgegevens hieronder in Sectie 12 voor meer informatie over de bescherming van persoonsgegevens in verband met after-sales service.\n\nDe wettelijke grondslag voor de respectieve verwerking is de verplichting om te voldoen aan wettelijke verplichtingen op grond van artikel 6, lid 1, onder c AVG.\n\n•	T-Channel: T-Channel is de hoofdpagina voor het gebruik van de Smart TV op het Linux besturingssysteem (zie hieronder voor het gebruik van het Android besturingssysteem) en biedt u de mogelijkheid om bepaalde content te selecteren.\n\nDe wettelijke grondslag voor de verwerking van uw persoonsgegevens die noodzakelijk zijn voor uw gebruik van de T-Channel zijn contractuele doeleinden overeenkomstig artikel 6, lid 1, onder b AVG.\n\nOnder voorbehoud van uw voorafgaande toestemming, zullen wij ook het gebruik van T-Channel monitoren, dat wil zeggen:\n\n-	Wanneer u T-Channel gaat gebruiken, slaan wij het tijdstip op van het openen en afsluiten van T-Channel.\n\n-	Wanneer u begint met het afspelen van een video van T-Channel, slaan wij de naam en de duur van de video op (niet van toepassing op Netflix, YouTube of enige andere dienst die door een derde partij wordt aangeboden).\n\n-	Wanneer u zich toegang verschaft tot een pagina of deze verlaat, registreren we de tijdsduur van uw verblijf op de pagina.\n\n-	Als u uw cursor van de ene naar de andere locatie verplaatst, of een applicatie invoert, nemen we deze gebeurtenis op.\n\n-	Wanneer u applicaties installeert, verwijdert of vernieuwt, zullen we deze gebeurtenissen, inclusief de naam van applicaties, registreren.\n\nWij verzamelen deze informatie voornamelijk voor big data-analyse om producten te verbeteren en om gebruikers betere content diensten aan te bieden.\n\nDe wettelijke grondslag voor de verwerking van uw persoonsgegevens in verband met de monitoring van uw gebruik van de T-Channel is uw toestemming overeenkomstig artikel 6, lid 1, onder a AVG.\n\nAls u een Android TV hebt gekocht en Google's Android besturingssysteem gebruikt, worden uw persoonsgegevens verwerkt door Google en wij zijn niet verantwoordelijk voor dergelijke verwerkingen. Raadpleeg de privacyverklaring van Google voor informatie over de betreffende verwerking van uw gegevens en uw respectieve rechten.\n\n•	T-Cast: met T-Cast kunt u uw TV bedienen via uw smartphone en video's, muziek en afbeeldingen die op uw smartphone zijn opgeslagen, op de TV delen. Met T-Cast kunt u ook uw smartphone spiegelen op uw TV.\n\nHet downloaden en gebruiken van de app is vrijwillig. Als u de app downloadt en gebruikt, zullen wij het MAC-adres verwerken om te berekenen hoeveel T-Cast-versies er op de markt zijn gebruikt. Dit is vereist om u deze dienst te kunnen aanbieden. Als u onze tweede scherm functie gebruikt, zullen de bedieningselementen die u op de applicatie activeert, de land- en taalinstellingen, de DTV-kanalenlijst, lijsten met favoriete kanalen, schemalijsten, het Apparaat-ID, het huidig kanaal, de protocolversie en het IP-adres van uw Smart TV worden verzameld en verwerkt door ons op onze servers. Onze servers zullen dan uw Smart TV bedienen zoals door u aangegeven in de app.\n\nDe wettelijke grondslag voor de respectieve verwerking van uw persoonsgegevens zijn contractuele doeleinden overeenkomstig artikel 6, lid 1, onder b AVG.\n\n•	TCL Assistant: De TCL Assistant is een functionaliteit waarmee uw TV verbinding kan maken met apparaten die verenigbaar zijn met Amazon Alexa (zoals Echo) om een dergelijk apparaat met uw stem te bedienen. Om deze functie te kunnen gebruiken, moet u eerst uw TV registreren op de Amazon website met behulp van de TCL code die op uw TV te vinden is. U kunt vervolgens mondelinge instructies geven aan het met Amazon Alexa verenigbare apparaat door op de microfoonknop op de afstandsbediening van uw TV te drukken.\n\nAls u de TCL Assistant gebruikt, verzamelt uw TV uw stem en stuurt deze naar de Amazon Alexa Cloud voor spraakherkenning en verdere verwerking. Uw gegevens worden direct aan Amazon doorgegeven en er worden geen gegevens verder verwerkt of lokaal op uw TV opgeslagen. Raadpleeg de privacyverklaring van Amazon voor informatie over de verdere verwerking van uw gegevens door Amazon.\n\nDe wettelijke grondslag voor de respectievelijke verwerking van uw persoonsgegevens zijn contractuele doeleinden in de zin van artikel 6, lid 1, onder b, AVG.\n\n•	Alexa Spraakherkenning (AVS): AVS is een functionaliteit waarmee u de TV met uw stem kunt bedienen. Om deze functie te gebruiken, moet u eerst uw TV registreren op de Amazon website met behulp van de registratiecode gegenereerd door Amazon. U kunt vervolgens mondelinge instructies aan de TV geven door op de microfoonknop op de afstandsbediening van uw TV te drukken.\n\nAls u de AVS gebruikt, verzamelt uw TV uw stem en stuurt deze naar de Amazon Alexa Cloud voor spraakherkenning en verdere verwerking. Uw gegevens worden direct aan Amazon doorgegeven en er worden geen gegevens lokaal op uw TV opgeslagen. Raadpleeg de privacyverklaring van Amazon voor informatie over de verdere verwerking van uw gegevens door Amazon.\n\nWanneer u de AVS gebruikt, is de naam van uw TV nodig om ons in staat te stellen te bepalen welke TV u wilt bedienen.\n\nDe wettelijke grondslag voor de respectievelijke verwerking van uw persoonsgegevens zijn contractuele doeleinden in de zin van artikel 6, lid 1, onder b, AVG.\n\nVerder leggen we vast hoe vaak en hoe lang u de AVS heeft gebruikt en welke functie u binnen AVS heeft gebruikt. Wij verzamelen deze informatie om producten te verbeteren en om betere content diensten aan te bieden aan gebruikers.\n\nDe wettelijke grondslag voor de respectievelijke verwerking van uw persoonsgegevens zijn onze gerechtvaardigde belangen in de zin van artikel 6, lid 1, onder f, AVG. Meer informatie over de belangenafweging is op aanvraag te verkrijgen.\n\n•	Software-updates: Software-updates maken deel uit van de Diensten. Telkens wanneer uw Smart TV wordt ingeschakeld, ontvangen wij het IP-adres, Apparaat-ID, apparaat nummer, softwareversie en client type van uw Smart TV, het project-ID (d.w.z. configuratiebestanden), gebruikers-ID en het serienummer om te kijken of er software-updates beschikbaar zijn en om u de juiste software-updates aan te bieden.\n\nDe wettelijke grondslag voor de respectieve verwerking van uw persoonsgegevens zijn contractuele doeleinden overeenkomstig artikel 6, lid 1, onder b AVG.\n\n•	Wethandhaving: Mogelijk moeten we gegevens verstrekken aan bevoegde wethandhavingsinstanties of rechtbanken. Als we dat doen, zullen we dit alleen doen op grond van een bindend juridisch instrument zoals een (gerechtelijk) bevel, welke ons verplicht om samen te werken met de relevante autoriteiten.\n\nDe wettelijke grondslag voor de respectieve verwerking is onze verplichting om te voldoen aan wettelijke verplichtingen op grond van artikel 6, lid 1, onder c AVG.\n\nGebruik van de Diensten is mogelijk met het gebruik van pseudoniemen, tenzij u voor specifieke diensten uw naam en / of e-mailadres moet opgeven.\n\n5.	Privacy en veiligheid van kinderen onder de 16 jaar \n\nWij begrijpen het belang van het nemen van extra voorzorgsmaatregelen om de privacy en de veiligheid te beschermen van kinderen die gebruik maken van onze Diensten. Kinderen jonger dan 16 jaar, of een equivalente minimumleeftijd in de relevante jurisdictie, mogen hun persoonsgegevens niet verstrekken via het TV-toestel of wanneer zij bellen voor after-sales service, tenzij hun ouder verifieerbare toestemming heeft gegeven.\n\nAangezien we nooit geboortedata van gebruikers verzamelen, kunnen we de leeftijd van gebruikers niet vaststellen. Maar als we ontdekken dat wij de persoonsgegevens hebben verzameld van een kind jonger dan 16 jaar, of een equivalente minimumleeftijd afhankelijk van de relevante jurisdictie, buiten de bovenstaande omstandigheden, dan ondernemen we stappen om de informatie zo snel mogelijk te verwijderen.\n\n6.	Apps van derden\n\nUw Smart TV staat het gebruik van apps van derden toe, zoals Netflix, YouTube of HbbTV (service met rode knoppen aangeboden door TV omroepen). U kunt de apps downloaden vanuit de app store of apps van derden activeren die al vooraf zijn geïnstalleerd op uw apparaat. Apps van derden die vooraf op uw apparaat zijn geïnstalleerd verzamelen geen persoonsgegevens zonder uw voorafgaande autorisatie. Bijv. Netflix is al vooraf geïnstalleerd op het apparaat, maar verzamelt alleen gegevens wanneer u zich aanmeldt via uw Netflix-account. HbbTV verzamelt alleen gegevens wanneer u instemt met de verzameling door op de aangewezen knop op uw afstandsbediening te drukken.\n\nAls u een app van derden inschakelt, kunnen persoonsgegevens over u worden verwerkt door de app-provider. Wij zijn niet verantwoordelijk voor dergelijke verwerking; raadpleeg de privacyverklaring van de app van de derde partij voor informatie over de gerelateerde verwerking van uw gegevens en uw respectieve rechten.\n\n7.	Categorieën van ontvangers\n\nWe delen uw persoonsgegevens die zijn verzameld tijdens uw gebruik van de Diensten alleen met externe content-partners als u bepaalde content opvraagt die door dergelijke content-partners of servicepartners wordt verstrekt, als zijnde verwerkers die ons helpen bij het aanbieden van de Diensten.\n\nWe delen uw persoonsgegevens alleen met andere derde partijen als we hiertoe verplicht zijn op basis van wettelijke vereisten (bijvoorbeeld met rechtbanken of strafvervolgingsautoriteiten), als u toestemming hebt gegeven voor het delen of als het delen anderszins rechtmatig is op basis van toepasselijke wetgeving.\n\n8.	Landen waar uw persoonsgegevens worden verwerkt\n\nWij en/of sommige van de ontvangers van uw persoonsgegevens die hierboven zijn vermeld, kunnen zich buiten de Europese Economische Ruimte bevinden (bijvoorbeeld in de Volksrepubliek China of de Verenigde Staten van Amerika). Daarom kunnen uw persoonsgegevens worden verwerkt in landen waar de wetgeving inzake gegevensbescherming  een ander beschermingsniveau kan bieden in vergelijking met de wetgeving in uw jurisdictie en welke niet wordt erkend als een toereikend niveau van bescherming van persoonsgegevens in overeenstemming met de AVG. De landen die een toereikend gegevensbeschermingsniveau bieden vanuit het perspectief van Europees recht inzake gegevensbescherming zijn Andorra, Argentinië, Canada, Zwitserland, Faroe Island, Guernsey, de staat Israël, Isle of Man, Jersey, Nieuw-Zeeland en de Oostelijke Republiek Uruguay. Ontvangers in de VS kunnen gedeeltelijk zijn gecertificeerd op basis van de EU-VS Privacy Shield en daarmee worden erkend als het verstrekken van een toereikend niveau van gegevensbescherming vanuit het perspectief van Europees recht inzake gegevensbescherming.\n\nWaar nodig zullen we passende waarborgen implementeren met betrekking tot de doorgifte van persoonsgegevens naar ontvangers buiten de Europese Unie die geen toereikend niveau van gegevensbescherming bieden. Een kopie van de betreffende maatregel kan worden opgevraagd door contact met ons op te nemen zoals hieronder vermeld in Sectie 12.\n\n9.	Opslagperiode\n\nUw persoonsgegevens worden bewaard zo lang als dit nodig is om u van de Diensten te kunnen voorzien. Voor de meeste gegevens betekent dit over het algemeen dat we uw gegevens gedurende één maand bewaren. Met het oog op diagnostiek op afstand en after-sales service bewaren we uw gegevens mogelijk tot een periode van tien jaar. Wanneer wij uw persoonsgegevens niet langer nodig hebben om te voldoen aan contractuele of wettelijke verplichtingen, zullen wij deze uit onze systemen en documentatie verwijderen en/of stappen ondernemen om deze gegevens op de juiste manier te anonimiseren, zodat u er niet meer geïdentificeerd kunt worden aan de hand van deze gegevens.\n\n10.	Uw rechten\n\nIn overeenstemming met de toepasselijke wetgeving inzake gegevensbescherming kunt u het recht hebben om: te verzoeken om inzage in uw persoonsgegevens, te verzoeken om rectificatie van uw persoonsgegevens; te verzoeken om verwijdering van uw persoonsgegevens, te verzoeken om beperking van de verwerking van uw persoonsgegevens; te verzoeken om overdraagbaarheid van uw persoonsgegevens, en bezwaar te maken tegen de verwerking van uw persoonsgegevens. Houd er rekening mee dat deze bovengenoemde rechten beperkt kunnen zijn op basis van de toepasselijke nationale wetgeving inzake gegevensbescherming. Raadpleeg de Bijlage Uw Rechten hieronder voor meer informatie over deze rechten.\n\nU hebt ook het recht om een klacht in te dienen bij de bevoegde toezichthoudende autoriteit voor gegevensbescherming.\n\nOm uw rechten uit te oefenen kunt u contact met opnemen op de wijze zoals hieronder vermeld in Sectie 12.\n\n11.	Wijzigingen in de Privacyverklaring\n\nOm onze Diensten te verbeteren, kan het zijn dat we wijzigingen in deze Privacyverklaring moeten aanbrengen, bijv. door de implementatie van nieuwe technologieën of de introductie van nieuwe diensten. We behouden ons het recht voor om deze Privacyverklaring op elk moment te wijzigen of aan te vullen.\n\n12.	Contactinformatie en de vertegenwoordiger in de Europese Unie\n\nAls u vragen heeft over deze Privacyverklaring of een klacht wilt indienen betreffende onze omgang met uw persoonsgegevens, neem dan contact met ons op via de volgende contactgegevens:\n\nContactformulier: www.tcl.eu/en/contact-us \n\nOnze vertegenwoordiger in de Europese Unie is: TCL Europe, kantoorhoudende te 9-15 rue Rouget de L'Isle - 92130 Issy - Les-Moulineaux, Frankrijk. U kunt contact opnemen met TCL Europe via het hierboven vermelde contactformulier.\n\nVersie: 2.0\n\nBijlage Uw Rechten\n\na.	Recht op inzage: U hebt mogelijk het recht om van ons bevestiging te krijgen op de vraag of er persoonsgegevens over u worden verwerkt en waar dat het geval is, om inzage in die persoonsgegevens te vragen. De inzage-informatie omvat -onder meer- de doeleinden van de verwerking, de categorieën van persoonsgegevens in kwestie en de ontvangers of categorieën van ontvangers aan wie de persoonsgegevens zijn of zullen worden verstrekt. Dit is echter geen absoluut recht en de belangen van andere personen kunnen uw recht op inzage beperken.\n\nU hebt mogelijk recht om een kopie  te ontvangen van de persoonsgegevens die worden verwerkt. Wanneer u meerdere kopieën aanvraagt, kunnen we een redelijke vergoeding in rekening brengen op basis van administratieve kosten. \n\nb.	Recht op rectificatie:  U hebt mogelijk het recht om de rectificatie van onjuiste persoonsgegevens over u te krijgen van ons. Afhankelijk van de doeleinden van de verwerking, hebt u mogelijk het recht om onvolledige persoonsgegevens aan te vullen, onder meer door een aanvullende verklaring te verstrekken.\n\nc.	Recht op verwijdering (\"recht op vergetelheid\"): Onder bepaalde omstandigheden hebt u mogelijk het recht om persoonsgegevens over u te doen wissen en wij kunnen verplicht zijn om dergelijke persoonsgegevens te wissen.\n\nd.	Recht op beperking van verwerking: Onder bepaalde omstandigheden hebt u mogelijk het recht om de beperking van de verwerking van uw persoonsgegevens te verkrijgen. In dit geval worden de betreffende gegevens gemarkeerd en mogen deze gegevens alleen voor bepaalde doeleinden door ons worden verwerkt.\n\ne.	Recht op overdraagbaarheid van gegevens: In bepaalde omstandigheden hebt u mogelijk het recht om uw persoonsgegevens in een gestructureerd, gangbaar en machinaal leesbaar formaat van ons te ontvangen en hebt u mogelijk het recht om die gegevens te verzenden naar een andere entiteit, zonder hinder van ons.\n\nf.	Recht van bezwaar:\n\nOnder bepaalde omstandigheden hebt u mogelijk het recht om op elk moment  bezwaar te maken, op gronden gerelateerd aan uw specifieke situatie of waar  persoonsgegevens worden verwerkt voor direct marketingdoeleinden, tegen de verwerking van uw persoonsgegevens door ons en wij kunnen verplicht zijn om uw persoonsgegevens niet langer te verwerken.\n\nBovendien, als uw persoonsgegevens worden verwerkt voor direct marketingdoeleinden, hebt u het recht om te allen tijde bezwaar te maken tegen de verwerking van persoonsgegevens over u voor dergelijke marketing, waaronder profilering voor zover dit verband houdt met dergelijke direct marketing. In dit geval zullen uw persoonsgegevens door ons niet langer voor dergelijke doeleinden worden verwerkt."];
var cookieNotice = ["\n\nWe respecteren uw privacy bij het gebruik van door ons geproduceerde Smart TV's en door ons geleverde \n\nDiensten. Cookies worden door veel websites en andere internetdiensten gebruikt en uw Smart TV zal cookies accepteren, opslaan en verzenden om ervoor te zorgen dat deze websites en diensten naar behoren functioneren.\n\nWij gebruiken geen cookies bij het verlenen van de Diensten aan u. Echter, derden (bijvoorbeeld app-providers van derden), kunnen cookies gebruiken wanneer u de Smart TV gebruikt om toegang te krijgen tot hun diensten. Deze Cookie Verklaring kan slechts beperkte informatie verstrekken over cookies die eventueel door derden worden geplaatst. Voor informatie over de daadwerkelijke cookies die door derden worden gebruikt en hun functionaliteit verwijzen wij u naar de respectieve cookie-mededelingen van dergelijke derde partijen. In deze Cookie Verklaring geven wij een algemene beschrijving van welke cookies op uw Smart TV kunnen worden ingesteld en hoe u deze kunt beheren.\n\n1.	Wat is een cookie?\n\nCookies zijn kleine tekstbestanden die op uw Smart TV kunnen worden geplaatst. Wanneer een website wordt geopend of de rode knop service van een TV-zender wordt gebruikt, kan de website of dienst een cookie opslaan op de Smart TV. Tijdens latere toegang verzendt de cookie die op uw Smart TV is geplaatst informatie naar de partij die de cookie heeft geplaatst. Cookies zijn heel gebruikelijk en worden op tal van websites en diensten gebruikt. Elk cookie bevat meestal de naam van het domein van waar de cookie afkomstig is, de \"levensduur\" van de cookie en een waarde (meestal een uniek nummer). Voor een uitgebreidere uitleg over wat cookies zijn en hoe ze werken, gaat u naar www.allaboutcookies.org.\n\nCookies kunnen worden onderverdeeld in functionele cookies en niet-functionele cookies. Functionele cookies zijn cookies die strikt noodzakelijk zijn om u diensten te kunnen verlenen. Niet-functionele cookies zijn alle andere cookies.\n\n2.	Websites van derden\n\nWanneer u websites of diensten van derden bezoekt via de Diensten van uw Smart TV, is het mogelijk dat dergelijke websites of diensten cookies plaatsen op uw Smart TV en dat dergelijke websites uw interacties op deze websites bijhouden en opslaan. Wij verzoeken of stimuleren dergelijke activiteiten niet en zullen zulke informatie niet gebruiken. Raadpleeg de betreffende cookie- en privacyverklaring van dergelijke websites en diensten voor meer informatie over het gebruik van dergelijke cookies door dergelijke partijen.\n\n3.	Het verwijderen van cookies\n\nMet uw gebruikersinterface van uw Smart TV kunt u alle cookies en andere lokale browseropslag van de Smart TV verwijderen. Het is ten zeerste aan te raden om alle cookies en lokaal opgeslagen instellingen te verwijderen voordat u uw Smart TV verkoopt of weggeeft.\n\nVersie: 2.0"];
var privacyPolicy = ["Vink het vakje/de vakjes hieronder aan als u gebruik wilt maken van onze Smart TV- en aanverwante services. Het gebruik van deze services vereist de verwerking van uw persoonlijke gegevens zoals beschreven in onze Privacyverklaring: http://www.tcl.eu/en/","Activeer Smart tv service, opslag van service-instellingen en automatische verificatie van Smart TV. Als u dit uitvinkt ontvangt u alleen standaard TV en HDMI.","Activeer automatische software-updates. Vink dit vakje aan om uw product up-to-date te houden met de nieuwste software-updates en de beste prestaties.","(Software-updates zijn belangrijk voor de juiste werking van uw TV omdat ze zorgen voor nieuwe functies, stabiliteit en veiligheid . Daarom raden we aan het vakje aan te vinken.)","Vink het vakje hieronder aan als u ook voor de hierna vermelde doeleinden akkoord gaat met onze verwerking van uw persoonsgegevens. Voor aanvullende informatie over hoe we uw persoonlijke gegevens verwerken, raadpleeg onze Privacyverklaring: http://www.tcl.eu/en/","Ik geef toestemming voor het verwerken van mijn persoonsgegevens (bijv.begin- en eindtijd van gebruik van T-Launcher) ten behoeve van het verbeteren van TCL-producten en het aanbieden van betere content services op Smart TV's"];
var termsFirTitle = ["Algemene voorwaarden","Privacyverklaring","Cookieverklaring"];
var termsSecTitle = ["Lees en stem eerst in met de voorwaarden.","Lees a.u.b. de privacyverklaring en ga akkoord.","Lees a.u.b. de cookieverklaring en ga akkoord."];
var tickall = "Vink alles af";
var tickremindWords = "Vink a.u.b. de selectievakjes af, anders kunt u niet van Smart TV-services genieten.";