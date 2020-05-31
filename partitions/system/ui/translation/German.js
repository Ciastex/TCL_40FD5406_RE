
var all_country 	= ["Australien","Österreich","Belgien","Bulgarien","Kroatien","Tschechien","Dänemark","Finnland","Frankreich","Deutschland",
						"Griechenland","Ungarn","Italien","Luxemburg","Niederlande","Norwegen","Polen","Portugal","Rumänien","Russland",
						"Serbien","Slowenien","Spanien","Schweden","Schweiz","Vereinigtes Königreich","Neuseeland"," "/*Arab*/,"Estland"," "/*Hebrew*/,
						"Lettland","Slowakei","Türkei","Irland","Japan","Philippinen","Thailand","Maldives","Uruguay","Peru",
    					"Argentina","Chile","Venezuela","Ecuador","Costa Rica","Paraguay","Bolivia","Belize","Nicaragua","Guatemala",
						"China","Taiwan","Brazil","Canada","Mexico","United States","South Korea","Rumänien","Vietnam"/*新添加的，底层结构体中没有*/,"Ukraine"/*新添加的，底层结构体中没有*/,
    					"Iran","Iraq"," ","Kazakhstan","Uzbekistan"," ","Kyrgyzstan","Algeria","Egypt","Tunisia",
    					"Tanzania","Kenya","Pakistan","Indonesia","Kuwait","Saudi Arabia","Qatar","Israel","Lebanon","bahrain",
						"Angola","Congo","Indien","Turkmenistan","Colombia","Mongolia","Bangladesh","Nepal","Sri Lanka","North Korea",
						"Moldawien","Polynesia","EI Salvador"," ","Fiji","Liberia","Jordan","Myanmar","Ghana","Georgia",
    					"Armenia","Oman","yemen","Syria","Palestine","Afghanistan","Morocco","benin","IvoryCoast","Nigeria",
    					"Sudan","Ethiopia","Zambia"," ","South Africa","mozambique","Libya","Albanien","Belarus","Iceland",
						"Litauen","Mauritius","Dubai","UAE","Tajikistan","Bengal","Bosnien und Herzegowina","Zypern","Kosovo","Mazedonien",
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
				
var all_language 	= ["Tschechisch","*","Dänisch","*","*","Deutsch","Englisch","Spanisch","Griechisch","Französisch",
						"Kroatisch","*","Italienisch","Ungarisch","Holländisch","Norwegisch","Polnisch","Portugiesisch","Russisch","Rumänisch",
						"Slowenisch","Serbisch","Finnisch","Schwedisch","Bulgarisch","Slowakisch","Chinese","*","Gälisch","*",
						"Walisisch","Arabisch","Irlandese","Lettisch","*","Türkisch","Estnisch","Holländisch"/*Netherlands*/,"Koreanisch","*",
						"Hindi","*","*","Mandarin","Kantonesisch","Maori","Original-Audio"/*Qaa*/,"Undefiniert"/*Undetermined*/,"*","Unbekannt",
						"Undefiniert","*","*","*","*","*","*","*","*","*",
						"*","*","*","Albanisch","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baskisch","*","*",
						"*","*","*","*","*","*","*","Bosnisch","*","*",
						"*","*","*","*","Belorussisch","*","*","Katalanisch","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galizisch","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Isländisch","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","japanisch","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Litauisch",
						"*","*","*","*","*","*","*","Mazedonisch","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romanze","*","*","*","*",
						"*","*","*","Samisch","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Videotext",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukrainisch","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Aus","Ein"];
var okCancel		= ["Ok","Abbrechen"];
var yesNo			= ["Ja","Nein"];
var level			= ["Aus","Niedrig","Hoch","Mittel"];
var manualAuto		= ["Manuell","Automatisch"];
var homeShop		= ["Zuhause","Geschäft"];
var picPreset		= ["Standard","Dynamik","Natürlich","Kino","Benutzer"];
var picColorTemp	= ["Kühl","Normal","Warm","Benutzer"];
var pic3dNavig		= ["Manuell","Automatisch","Halbautom."];
var _3dOptions		= ["3D-Modus","3D-zu-2D","L-R Umschalter","Tiefeneffekt"];
var pic3DMode       = ["Aus","2D-zu-3D","Nebeneinander (SbS)","Oben/Unten (TaB)","Line-Interleave"];
var picEcoOptions	= ["Energieeinsparung","Lichtsensor","Lokal dimmen","Gemischtes Abblenden"];
var picGeoOptions	= ["Geometrie","H-Position","V-Position","Takt","Phase"];//Geometry 无翻译
var picAdWhiteBal	= ["R Gain","G Gain","B Gain","R Offset","G Offset","B Offset"];
var souOptions		= ["Tonvoreinstellung","Balance","Audioverzögerung","SRS TSHD","Auto Lautst.-Kontr.",
						"SPDIF Typ","SPDIF-Verzögerung","TV-Aufstellung","Audiosprache","Soundtyp",
						"Audio-Beschreibung","Bassverstärkung","Dolby Digital Plus"];
var souSpdifType	= ["Automatisch"/*Dolby*/,"PCM","Aus"];
var colorSpace      = ["Automatisch","Nativ","Benutzer"];
var souPresetPara	= ["100Hz","500Hz","1.5KHz","5KHz","10KHz"];
var chOptions		= ["Kanalscan","Kanalliste","EPG","Kanalliste","Senderdiagnose",
						"Timeshift","Untertitel","Videotext","Kanalliste"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Signalstärke","Signalqualität","Frequenz (kHz)","Service-ID","Netzwerk-ID","Netzwerk-Name"];
var chScanOptions	= ["Land / Region","Tunermodus","Automatische Suche","Autom. Aktualisierung","Manuelle Suche analoge Kanäle",
						["Manueller Kabel-Scan","Manueller Antennen-Scan","Manuelle Suche Satellit"],"Einstellung Satellitenantenne","Bevorzugtes Netzwerk wählen","Senderliste löschen","LCN"];
var favNetDes		= "Bitte wählen Sie Ihr bevorzugtes Netzwerk";
var tuner			= ["Kabel","Antenne","Satellit"];//Satelite 无翻译
var passError		= "Kennwort nicht korrekt.\nBitte neu eingeben!";
var chType			= ["Analoge Kanäle:  ","Digitale Kanäle:  "];
var chScanStatus	= ["Status: Suche läuft","Status: Suchvorgang abgeschlossen","Status: Suchvorgang abgebrochen","Status: Fehler beim Suchvorgang"];
var chScanPara		= ["Frequenz (kHz)","Modulation","Symbolrate (Ksym/s)","Netzwerk-ID","System",
						"Feineinstellung","Signalstärke","Signalqualität","Scanmodus","Kanal-ID"];
var chScanParaMHZ      = ["Frequenz (MHz)"];
var chAtvManSys		= ["WEST EUR","OST EUR","UK","Frankreich"];
var modulation		= ["16 QAM","32 QAM","64 QAM","128 QAM","256 QAM","Automatisch"];
var chCleanDes		= "Möchten Sie die Senderliste löschen?";
var chDeletDes		= "Möchten Sie den Sender löschen?";
var chOperator		= ["Ziggo","UPC","Sonstige"];
var chScanType		= ["Digital & Analog","Digital","Analog"];
var chScanMode		= ["Voll","Erweitert","Schnell"];
var bookingModes	= ["Aufnahme","Erinnerung"];
var dayName			= ["So","Mo","Die","Mi","Do","Fr","Sa"];
var monthName		= ["Jan", "Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"];
var filter			= ["Filter","Typ","Untertyp"];
var chEpgFirstGenre	= ["Kino","Nachrichten","Show","Sport","Kinder","Musik","Kunst","Soziales","Erziehung","Freizeit","SPEZIAL"];
var chEpgSecondGenre= [["Drama","Krimi","Abenteuer","Science-Fiction","Komödie","Seifenoper","Romanze","Ernst","Erwachsene"," "," "," "],
						["Aktuelle Nachrichten","Wetterbericht","Nachrichtensendung","Dokumentarfilm","Diskussion"," "," "," "," "," "," "," "],
						["Show","Spielshow","Varietee","Talkshow"," "," "," "," "," "," "," "," "],
						["Sport","Sonderveranstaltungen","Sportsendung","Fußball","Tennis",
							"Mannschaftssport","Leichtathletik","Motorsport","Wassersport","Wintersport",
							"Pferdesport","Kampfsport"],
						["Kinder","Für Vorschulkinder","Unterhaltung für 6 bis 14","Unterhaltung für 10 bis 16","Informationen","Zeichentrick"," "," "," "," "," "," "," "],
						["Musik","Rock","Ernst","Folk","Jazz","Musical","Ballet"," "," "," "," "," "],
						["Kunst","Darstellende Kunst","Bildende Künste","Religion","Popkultur",
							"Literatur","Film","Experimentell","Sendung","Neue Medien",
							"Kunstmagazine","Mode"],
						["Soziales","Magazine","Wirtschaft","Herausragende Menschen"," "," "," "," "," "," "," "," "],
						["Erziehung","Natur","Technologie","Medizin","Fremde Länder","Sozialwissenschaften","Weiterführende Bildung","Sprachen"," "," "," "," "],
						["Freizeit und Hobbies","Tourismus","Handarbeit","Automobil","Fitness und Gesundheit","Kochen","Werbung","Gartenbau"," "," "," "," "],
						["Originalsprache","Schwarzweiss","Unveröffentlicht","Live-Sendung"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Sender überspringen","Sendersortierung","Sender bearbeiten","Sender löschen","Kanal tauschen","Kanal einfügen"];
var chEditPara 		= ["Netzwerk-Name","Kanalnummer","Kanalname","Frequenz","Farbsystem","Tonsystem"];
var chSatTitles		= ["Satellitentyp","Einstellung Satellitenantenne","Satellit wählen"];
var chSatEidtOptions= ["Satellitenname","Position","LNB-Spannung","LNB-Frequenz (MHz)","Diseqc Eingang",
						"Ton 22KHz","Tone Burst","Frequenz (kHz)","Symbolrate (Ksym/s)","Polarisation",
						"Signalstärke","Signalqualität","Satellitenstatus"];
var chSatAutoPromt	= [["Alle","Netzwerk"],
						["Alle","Frei"]];
var chSatAutoScanOptions=["Satellit wählen","Scanmodus","Kanäle"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Universal",];
var chSatDiSEqCInput= ["Deaktivieren","A","B","C","D"];
var chSatTone22KHz	= ["Automatisch","Ein","Aus"];
var chSatToneBurst	= ["Deaktivieren","Tone Burst A","Tone Burst B"];
var chSatPolarization= ["Horizontal","Vertikal"];
var chSatSetupOptions=["Antennentyp","Tuner","Frequenz"];
var chSatAntennaType= ["Einzelkabel","Universal"];
var chSatUserBands	= ["Benutzer Band 1","Benutzer Band 2","Benutzer Band 3","Benutzer Band 4","Benutzer Band 5","Benutzer Band 6","Benutzer Band 7","Benutzer Band 8"];
var chSatOthers		= ["Transponder"];
var chSatSetupOthers= ["Benutzer-definiert"];
var pleaseSelectSat = "Bitte wählen Sie zunächst die Satelliten!";
var subOptions		= ["Untertitel","Digitale Untertitelsprache","Digitale Untertitelsprache 2","Untertiteltyp"];
var ttxOptionsCon      = ["Seitensprache decodieren","Digitale Videotextsprache"];
var subType			= ["Normal","Hörbehindert"];
var netIntf     	= ["Kabel","Drahtlos"];
var netConnDes		= ["TV testet Netzwerkverbindung.\nBitte warten",
						"Netzwerkverbindungstest war erfolgreich.",
						"Netzwerkverbindungstest fehlgeschlagen."];
var netSsidError	= "Die gültige Länge der SSID beträgt 1~32 Schriftzeichen. Bitte überprüfen Sie die SSID.";
var netOthers		= ["PIN-Code "];
var netWlessAutoDes	= ["Bevor Sie auf OK klicken, vergewissern Sie sich bitte, dass der folgende PIN-Code im Zugangspunkt installiert ist.",
						"Drücken Sie die Taste am Zugangspunkt innerhalb von 120 Sekunden, bevor Sie auf OK klicken."];
var netConnRemind	= ["Kennwort falsch!",
						"Verbinde. Bitte warten!",
						"Verbindung erfolgreich und IP erhalten!",
						"Verbindung fehlgeschlagen! Prüfen Sie Ihr Netzwerk und versuchen es erneut!",
						"TV scannt Zugangspunkte\nBitte warten",
						"Kein Drahtlosgerät am Fernseher angeschlossen!"];
var netWireIpOptions= ["IP-Einstellung","Adressentyp","IP-Adresse","Subnetzmaske","Standardgateway","Primäre DNS","Sekundäre DNS"];
var netWireConnRemind= ["Bitte einen Wert zwischen 0 und 255 eingeben.",
						"Erfolgreich verbunden!",
						"Bitte geben Sie eine gültige Adresse ein",
						"Erfolgreich verbunden!",
						"Verbindung fehlgeschlagen!",
						"Verbinde. Bitte warten!",
						"Bitte geben Sie einen Wert zwischen 1 und 223 ein."];
var netFlixOptions	= ["Deaktivieren","ESN","Netflix-Version"];
var netFlixDes	 	= ["Sind Sie sicher, dass Sie deaktivieren möchten?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Softwareupdate";
var netUpdateDialogTitle = "Software-Update";
var netBGDownloadTitle 	= "Download läuft";
var netUpdateLoadingPrompt= ["Suche nach Upgrade, bitte warten!",
							"Software wird heruntergeladen... bitte warten!",
							"Während der Aktualisierung NICHT den Fernseher ausschalten!",
                            "Die zwingend erforderliche Software-Aktualisierung wird automatisch im Hintergrund heruntergeladen!"];
var netUpdatePrompt= ["Herzlichen Glückwunsch, Sie haben die neueste Software!",
						"Die neue Software-Version XXXX ist verfügbar. Jetzt herunterladen? Je nach Netzwerkstatus kann dies einige Zeit dauern.",
						"Login fehlgeschlagen!",
						"Daten konnten nicht empfangen werden, bitte versuchen Sie es später noch einmal!",
						"Parse Update XML fehlgeschlagen!",
						"Verbindung fehlgeschlagen! Prüfen Sie Ihr Netzwerk und versuchen es erneut!",
						"Softwaredownload erfolgreich. Wollen Sie die Initialisierung beginnen?",
						"Daten verloren! Download fehlgeschlagen!",
						"Paket konnte nicht überprüft werden,bitte versuchen Sie es noch einmal!",
						"Netzwerk hat Probleme.Bitte überprüfen und neu verbinden…",
						"Update fehlgeschlagen. Bitte TV neu starten!",
						"Die Upgrade-Datei wurde unerwartet gelöscht. Bitte wiederholen Sie das Upgrade über das Netzwerk.",
						"Die Software wurde im Hintergrund erfolgreich heruntergeladen. Bitte führen Sie das Upgrade über das Netzwerk erneut durch."];
var netUpdateButtonText = ["Herunterladen", "Aktualisieren", "Später", "Niemals", "Ok","Fortfahren"];
var autoDetectPrompt = ["Die neue Software-Version XXXX ist verfügbar. Jetzt herunterladen? Je nach Netzwerkstatus kann dies einige Zeit dauern.",
						"Es wurde eine neue Software-Version XXXX gefunden. Jetzt aktualisieren?",
						"Das Update über Netzwerk wurde abgebrochen. Sie müssen das Update erneut durchführen.",
                        "Download der neuen Software-Version XXXX ist nicht beendet. Möchten Sie jetzt fortfahren?",
                        "Software heruntergeladen, möchten Sie jetzt aktualisieren?"];
var sysOptions		= ["eBedienungsanleitung","Menü-Sprache","Timer","Sperren","Einstellung für Eingänge",
						"Softwareupdate","Standort","HbbTV-Modus","Cookies","CI-Modul",
						"Experten-Einstellungen","Werkseinst. wiederherstellen","LED-Anzeige","Soforteinschaltung","Automat. Geschäftsmodus","Area","Demo-Modus"];
var sysResetDes		= "Sind Sie sicher?";
var sysMenuLangOptions=["Sprache","Bevorzugte Audiosprache","Bevorzugte 2. Audiosprache"];
var sysTimerOptions	= ["Zeitzone","Region","Takt","Sleeptimer","Auto-Standby", "Country region"];

var sysTimeZone		= ["Wie Sender","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Aus","10 Min.","20 Min.","30 Min.","40 Min.","50 Min.","60 Min.","90 Min.","120 Min."];
var sysStandby		= ["Aus","4 Stunden","6 Stunden","8 Stunden"];
var sysRegionName	= ["Madrid","Kanarische Inseln"];
var sysClockOptions	= ["Autom. Synchronisation","Datum","Uhrzeit","Einschalt-Timer","Timer",
						"Kanal einschalten","Ausschalt-Timer","Timer"];
var sysTimer		= ["Aus","Täglich","Einmal"];

var sysInputSet		= ["Keine Bezeichnung","DVD","Blu-ray","HDD","DVDR",
						"HD rec.","Spiel","VCR","PC","Digitale STB",
						"HD Dig. STB","Kamera","Rekorder","Andere"];
var sysAvVideoInput	= ["Automatisch","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["Über USB","Via Internet","Nach Kanal"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Kann keine neue Software online finden!",
						"Es wurde eine neue Software-Version XXXX gefunden. Jetzt aktualisieren?",
						"Bitte USB-Stick anschließen.",
						"Paket konnte nicht überprüft werden,bitte versuchen Sie es noch einmal!",
						"Update läuft. Gerät nicht ausschalten und Speichergerät nicht abziehen! TV startet nach etwa 30 Sekunden automatisch neu.",
						"Die Software wurde erfolgreich aktualisiert.\nDer Fernseher wird automatisch neu gestartet!",
						"Die neue Software-Version XXXX ist verfügbar. Jetzt herunterladen? Je nach Netzwerkstatus kann dies einige Zeit dauern.",
						"Download läuft",
						"Softwaredownload erfolgreich. Wollen Sie die Initialisierung beginnen?",
						"Update fehlgeschlagen!",
						"Nach Aktualisierungsdateien suchen",
						"Die Software wurde aktualisiert.\nDen Fernseher jetzt bitte neu starten."];
var sysProductInfo	= ["Aktuelle Version","Produktname","Name des Herstellers","Name des Chassis"];
var sysCiDes		= ["Keine Karte für CI-Modul vorhanden."];
var sysAdOptions	= ["DivX(R) Anmeldung","DivX(R) Deaktivierung","T-Link","Authorization Error","Abmeldebestätigung",
						"Ausleihbestätigung","Leihzeit abgelaufen"];
var sysRegistDes	= ["Sie müssen das Gerät zur Wiedergabe von DivX-geschützten Videos registrieren",
						"Registriercode:",
						"Registrierung bei http://vod.divx.com"];
var sysDregistDes	= ["Deaktivierungscode:",
						"Registrierung auf http://vod.divx.com deaktivieren",
						"Mit der Registrierung fortfahren?"];
var mediaAuthorization = ["Ihr Gerät ist nicht für die Wiedergabe dieses geschützten DivX(R)-Videos autorisiert."];
var deregistrationConfrimation = ["Ihr Gerät ist bereits registriert.","Möchten Sie sich wirklich abmelden?"];
var rentalConfirmation = "Es wurden XXXX von YYYY Ansichten des DivX(R)-Verleihs in Anspruch genommen. Fortfahren?";
var rentalExpired 	= "Die DivX(R) Miete hat XXXX von YYYY Anzeigen verwendet. Die DivX Miete ist abgelaufen.";

var parentalRatingNA		= ["***","***","***","***","***","***","***","***"];
var parentalRatingOptionUS		= ["***","***","***"];
var sysTVRatingUS=["***","***","***","***","***"];
var sysMPAAUS=["***","***","***","***","***","***"];
var parentalRatingOptionCanada		= ["***","***","***"];
var sysCanadaEng=["***","***","***","***","***","***"];
var sysCanadaFre=["***","***","***","***","***",""];
var sysResetRRT=["***"];

var sysLockOptions	= ["Kanalsperre","Zeitintervallsperre","Jugendschutzeinstellung","Eingang sperren","TV-Bedienfeld sperren","Installationssperre",
						"Kennwort ändern","Max. Lautstärke","Alle zurücksetzen"];
var sysTimeIntervals= ["Sperrtyp","Startzeit","Endzeit"];
var sysRatingOptions= ["Keine","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","Nicht jugendfrei (Spanien)"];
var changePass		= ["Kennwort ändern","Neues Passwort","Passwort bestätigen"];
var changePassDes	= ["Kennwort nicht korrekt.\nBitte neu eingeben!",
						"Kennwort stimmt nicht überein.\nBitte neu eingeben!",
						"Passwort wurde erfolgreich eingerichtet!",
						"Dieser Code ist als Passwort zu einfach.\nBitte geben Sie einen neuen Code ein!"];
var sysPowerOnChOptions= "Modus wählen";
var sysPowerOnCh	= ["Letzter Status","Benutzerauswahl"];
var netWlessSecu    = ["Offen","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Keine","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Nicht Unterstützt"];
var netWlessSecu3	= ["Keine","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Nicht Unterstützt"];
var netOptions		= ["Internetverbindung","Anschluss","Schnurlose Einstellungen","IP-Einstellungen","Informationen",
						"Anschlusstest","DLNA","Fernbedienung","Netflix-Einstellungen","WLAN-Anzeige",
						"Adressentyp","IP-Adresse","Subnetzmaske","Standardgateway","Primäre DNS",
						"Sekundäre DNS","SSID","BSSID","Bitte SSID eingeben:","Benutzer-ID"];
var chEditDes		= ["Duplizierte Sendernummer!","Drücken Sie die rote Farbtaste zum Löschen des aktuellen Schriftzeichens!","Ungültige Kanalnummern."];
var chEpgNoProgram	= "Keine Programminformationen, bitte erst Kanäle suchen!";
var chEpgWords		= ["Programmzeitschrift","Keine Programmdaten.","Kanal gesperrt!","Keine Programmdetails.","Kein Programmtitel."];
var chEpgBooking	= ["Zeitplaninfo", "Kanalnummer","Startdatum","Startzeit","Endzeit",
						"Wiederholungstyp","Programmtermintyp","Hinzufügen","Ersetzen","Ändern",
						"Hinzufügen/Modifizieren"];
var epgHotKey		= ["Vorh. Tag","Nächster Tag","Filter","Programmliste","Programm hinzufügen"];
var chEpgBookRemind	= ["Startzeit falsch","Endzeit falsch","Duplizierter Zeitplan","Erfolgreich gespeichert.","Erfolgreich gelöscht."];
var chSchePara		= ["Programmliste","Startzeit","Startdatum","Programmtitel","Kanalname",
						"Dauer","Wiederholen","Zeitplan","Bearbeiten","Löschen"];
var dateTimer		= ["Einmal","Täglich","Wöchentlich"];
var scheduleDeleteReminds="Möchten Sie diesen Zeitplan löschen?";
var scheduleNoLists	= "Es ist keine Zeitplanliste vorhanden. Drücken Sie die rote Farbtaste, um eine Zeitplanliste hinzuzufügen.";
var chListWords		= ["Kanalliste","Liste wählen","Tunermodus","Zu Favoriten hinzufügen","Entfernen",
						"Senderliste auswählen","Tuner-Modus auswählen","Tausch"];
var chListType		= ["Alle","Digital","Analog","Radio","Frei","Favoriten"];
var chAutoScanOptions=["Betreiber wählen","Kanaltyp","Automatische Suche"];
var souSoundType	= ["Ungültig","Mono","Mono","Stereo","Stereo",
						"SAP","SAP","Dual1","Dual2","Dual2",
						"Nicam Mono","Nicam Stereo","Nicam Dual1","Nicam Dual2","Nicam dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Musik","Kino","Stimme","Standard","Benutzer"];
var picAdRgbMode	= ["Aus","Nur Rot","Nur Grün","Nur Blau"];
var picAdOptions	= ["DNR","MPEG-Nr.","RGB-Modus","Dynamischer Kontrast","LED-Bewegungsschärfe",
						"Hautfarbe","Filmmodus","Spielmodus","Farbtemperatur","Weißabgleich",
						"Standbild","Schwarz-Erweiterung","Overscan","Gamma","HDMI-Modus","10P Weißabgleich","Farberweiterung",
						"Reduzierung der Unschärfe","Reduzierung des Flatterns","Farbraum","Bewegungsschärfe"];
var pic10Pwhite     = ["Intervall","Rot","Grün","Blau","Zurücksetzen","Farbe","Gelb","Cyan","Magenta"];
var picMotionClarity = ["Bewegungsmodus","Interpolation","LED-Bewegungsschärfe","Reduzierung der Unschärfe","Reduzierung des Flatterns","Zurücksetzen"];
var picMotionMode   = ["Film","Gleichmäßig","Löschen","Sport","Kunde"];
var picResetDes		= "Alle personalisierten Einstellungen werden zurückgesetzt. Sind Sie sicher, dass Sie den gewählten Vorgang durchführen möchten?";
var pic10PReset     = "Sind Sie sicher, dass Sie den 10P Weißabgleich zurücksetzen möchten?";
var picMotionReset  = "Möchten Sie die Bewegungsschärfe zurücksetzen?";
var picColorSpaceReset    = "Sind Sie sicher, dass Sie den Farbraum zurücksetzen möchten?";
var picOptions		= ["Bildvoreinstellung",
						"Hintergrundbeleuchtung","Helligkeit","Kontrast","Farbsättigung","Farbton","Bildschärfe","Farbtemperatur","Bildschirmmodus","Autom. format.",
						"Sport-Kontrastverstärkung","3D","3D-Navigation","ECO Einstellungen","Geometrie",
						"Experten-Einstellungen","Bild zurücksetzen","Mikroabblendung"];
var picSize			= ["16:9-Format", "4:3-Format", "14:9 Format", "Cinerama",
						"16:9-Zoom", "16:9-Zoom oben","14:9-Zoom","Stretch-Zoom","Breitbildzoom",
						"Zoom 2","Breitbildzoom 2","Bildschirm natürliche Anpassung","Punkt für Punkt","Original","Panorama"];
var others			= ["Lautstärke","Übertragung","Kennwort","Status","Speichern","Ersetzen","Starten","Beenden","Suche","Löschen",
						"Keine","Automatisch","Scannen","Sicherheit","Verbinden","Aktualisieren","Wiederholen","Stop","Einstellungen","Kanäle",
						"Bearbeiten","Einfügen","Signal!","Beenden","Stereo","Audio","Quelle","Kein Audio","Tipps","Zurücksetzen",
						"Kunde","Installation","Speichern","Benutzer","Tastatur schließen","Sicherheitsmodus","Täglich","PVR-Liste"];
var direction		= ["Links","Rechts","Hoch","Runter"];
var audioType 		= ["MPEG","DOLBY AUDIO"/*"AC3"*/,"MPEG4","AAC", "DOLBY AUDIO"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Unbekannt"];
var soundChannels   = ["Unbekannt","Mono","Sub","Dual Mono","Stereo","Stereo Sub","Stereo Dolby Surround","Surround 2-Kanal","Surround","3.0Ch","4.0Ch","5.0Ch","Mono Lfe","Dual Mono Lfe","Stereo Lfe","Surround 2Ch Lfe","Surround Lfe","3.1Ch","4.1Ch","5.1-Kanal","7.1-Kanal","Joint Stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Links","Rechts","Sonstige"];
var prompts			= ["Wählen Sie die für Ihre Umgebungsbedingungen optimalen Bildeinstellungen aus.",
						"Helligkeit einstellen. Je näher an 100, desto heller.",
						"Kontrast einstellen. Je näher an 100, desto größer sind die Unterschiede zwischen hellen und dunklen Bildbereichen.",
						"Sättigung einstellen. Je näher an 100, desto intensiver ist die Farbe.",
						"Schärfe einstellen. Je näher an 100, desto deutlicher sind die Details.",
						"Hintergrundbeleuchtung einstellen. Je näher an 100, desto heller ist der Bildschirm. ",
						"Farbton einstellen. Mit dieser Einstellung werden die Farbtöne konfiguriert.  ",
						"Wählen Sie je nach wiedergegebenem Programm das optimale Bildformat aus.",
						"Energieverbrauch optional konfigurieren.",
						"Stellen Sie die Bildschirmgeometrie ein, wenn Sie einen PC verbinden.",
						"Wählen Sie mehr erweiterte Bildeinstellungen.",
						"Setzen Sie alle Bildeinstellungen auf die Werkseinstellungen zurück.",
						"Wählen Sie je nach Ihren Vorlieben einen Soundmodus aus.",
						"Stellen Sie das Lautstärkeverhältnis zwischen linkem und rechtem Kanal ein.",
						"Das TruSurround HD Soundsystem bietet sowohl bei niedrigen wie auch bei hohen Frequenzen einen hervorragenden und klaren Sound.",
						"Der digitale Anschluss verbindet den digitalen Soundausgang des Fernsehers mit dem Heimkinosystem.",
						"Wählen Sie je nach Ihren Vorlieben die gewünschte Audiosprache aus.",
						"Aktivieren Sie die Funktion für Sehbehinderte für bessere Unterhaltung.",
						"Testen Sie Ihr Fernsehbild, den Ton und das Signal.",
						"Wählen Sie den Senderlistentyp gemäß Ihrem TV-Signal aus.",
						"Wählen Sie die Sprache für die am unteren Bildrand angezeigten Untertitel des aktuellen Programms.",
						"Text und Bilder des aktuellen Senders anzeigen.",
						"Digital Living Network Alliance. Musik, Fotos und Videos von anderen Geräten (wie PC) über Heimnetzwerk anzeigen.",
						"Inhalte Ihres Smartphones auf dem Fernseher anzeigen und das Smartphone als Fernbedienung für den Fernseher verwenden.",
						"Inhalte von einem Miracast-kompatiblen Android-Gerät auf Ihrem Fernseher anzeigen.",
						"Den Fernseher sperren.",
						"Gerätenamen auswählen.",
						"Umgebungsbedingungen einstellen.",
						"Alle Systemeinstellungen zurücksetzen.",
    					"Switch off sports mode for more options.",
    					"Verbessert den Umgebungskontrast",
    					"Ein spezieller Modus zum Genießen von Sportspielen",
    					"Genießen Sie weitere CEC-Funktionen."];
var initialTitle	= ["Willkommen","Erstinstallation"];
var initialPrompt	= ["Führen Sie jetzt die Ersteinstellungen durch, um in eine Welt spannender Unterhaltung einzutauchen!",
						"Bitte wählen Sie Ihre Sprache:",
						"Bitte Ihr Land / Ihre Region wählen:",
						"Bitte wählen Sie Ihren Standort:",
						"Wählen Sie Ihren Netzwerk-Verbindungstyp:",
						"Wählen Sie den Modus für die kabelgestützte Netzwerkverbindung:",
						"Konnte nicht mit xxxxxxxxx verbinden! Bitte schließen Sie das Gerät gemäß folgendem Diagramm an oder wählen Sie Links zur Rücksetzung.",
						"Mit xxxxxxxxx verbunden! Bitte wählen Sie Recht, um weiterzumachen.",
						"1)Ihr Fernseher hat möglicherweise bereits einen eingebauten WLAN-Adapter\n 2) Oder, falls ein WLAN-USB-Adapter mitgeliefert wurde, schließen Sie diesen an Ihrem Fernseher an. Anschließend wählen Sie bitte den WLAN-Verbindungsmodus.",
						"Scan läuft. Bitte warten...",
						"Kein Drahtlosgerät am Fernseher angeschlossen!",
						"Folgenden PIN-Code im Zugangspunkt eingeben, bevor Sie „Weiter“ klicken.",
						"Drücken Sie innerhalb von 120 Sekunden die Taste auf AP, bevor Sie die Pfeiltaste Rechts drücken!",
						"WPS (Gesicherter Wi-Fi-Setup)",
						"PIN (Persönliche Identifikationsnummer)",
						"PBC (Drucktastenkonfiguration)",
						"Auf die folgenden Inhalte kann nur mit einer Netzwerkverbindung zugegriffen werden. Möchten Sie die Netzwerkeinstellung überspringen?",
						"Es stehen neue Software-Updates zum Herunterladen bereit. Je nach Netzwerkstatus kann dies einige Zeit in Anspruch nehmen.",
						"Nach der Aktualisierung Ihrer TV-Software können Sie die aktuellsten Funktionen und Dienste nutzen.",
						"Sie können nicht die neuesten Funktionen und Dienste in Anspruch nehmen. Möchten Sie die Software-Aktualisierung überspringen?",
						"Drücken Sie die Navigationstaste rechts, um fortzufahren. ",
						"Schalten Sie das Gerät während des Updates nicht aus, da dies zu Fehlfunktionen führen kann. ",
						"Falls Sie nicht aktualisieren möchten, wählen Sie bitte NEIN.",
						"Update läuft, bitte warten",
						"Sie können die Software auch in SYSTEM/SOFTWARE-UPDATE aktualisieren.",
						"Das gewählte Land benötigt eine Passworteinstellung.\nBitte stellen Sie den Code für Ihren Fernseher ein und bestätigen Sie ihn.",
						"Dieser Code ist zu einfach.\nBitte verwenden Sie andere Ziffern.",
						"Glückwunsch! Die Ersteinstellung ist beendet. Sie können Ihre Konfiguration über das Hauptmenü und die entsprechenden Untermenüs ändern.",
						"Bitte den Sicherheitsmodus auswählen:",
						"Bitte wählen Sie einen Verbindungsmodus für das Drahtlosnetzwerk:",
						"Netzwerk"];
var initNetCabAndDonRe = ["Kein Netzwerkkabel angeschlossen, bitte schließen Sie ein Netzwerkkabel an!","Kein integrierter W-Lan-Adapter oder kein W-Lan-USB-Adapter vorhanden."];
var initChPrompt = ["Installation der Fernsehkanäle","Bitte wählen Sie den Antennen-Suchtyp.","Autom. Suche im Gange...","Folgende Antennenkanäle wurden gefunden:","Wählen Sie den Scan-Typ für Kabelsender.","Bitte wählen Sie einen Dienstanbieter aus der nachstehenden Liste.","Bitte konfigurieren Sie die Scan-Daten","Folgende Kabelsender wurden gefunden:","Wählen Sie in der nachfolgenden Liste einen Betreiber aus","Wählen Sie Satelliten aus, um den ausgewählten Satelliten zu scannen und zu bearbeiten.","Konfigurieren Sie die Parameter des Satelliten","Folgende Kanäle wurden gefunden und die Kanalsuche kann ebenfalls erneut in Kanal/Kanalsuche durchgeführt werden"];
var initClockPrompt = ["Erhalten Sie die vom Netzwerk gelieferte Zeit!",
						"Bitte Datum und Uhrzeit einstellen:"];
var initialOptions	= ["Umgebung","Netzwerkeinrichtung","Softwareupdate","Senderinstallation","Takt"];
var initialHotkeys	= ["Zurück","Auswählen","Weiter","Ich stimme zu"];
var initLocations	= ["Zuhause","Geschäft","Shop-Modus mit Demo"];
var initNets		= ["Kabel","Drahtlos","Ich habe keine Netzwerkverbindung"];
var initWireManuals	= ["IP-Adresse","Subnetzmaske","Standardgateway","Primäre DNS","Sekundäre DNS"];
var initSoftUpdates = ["Jetzt aktualisieren","Später aktualisieren"];
var initChannelIns	= ["Fortfahren","Ich möchte keine Kanäle installieren"];
var initChScanTypes	= ["Digital & Analog","Digital","Analog","Ich möchte keine Sender scannen"];
var initChDvbts		= ["Antenne ATV-Kanäle:","Antenne DTV-Kanäle:"];
var initChDvbcs		= ["ATV-Kabelsender:","DTV-Kabelsender:"];
var initChDvbss		= ["Satellitensender:"];
var initChDvbSOther	= ["Ich möchte keine Satelliten scannen"];
var initEndConnectedStatus= ["Getrennt","WLAN verbunden","Mit verkabeltem verbunden"];
var initEndInstallations= "XXXX Kanäle installiert";
var initEndUpdate	= ["Aktualisiert"];

var audioScenes 	= ["Desktop","Wandhalterung"];			
var screenSavers	= ["Keine Sender; drücken Sie die OK-Taste für die Suche!",
						"Kein Signal!",
						"Verschlüsselt",
						"Nur Daten",
						"Audioprogramm",
						"Kein Audio und Video",
						"Nicht verfügbar",
						"Kein Videotext",
						"Keine Programmdaten.",
						"Programm gesperrt!",
						"Programm gesperrt!\nDrücken Sie OK und geben Sie Ihren Code ein.",
						"Keine Programmdetails.",
						"Programm für Minderjährige ungeeignet.\nDrücken Sie OK und geben Sie Ihren Code ein.",
						"Kanal gesperrt!",
						"Kanal gesperrt!\nDrücken Sie OK und geben Sie Ihren Code ein.",
						"Eingang gesperrt!\nDrücken Sie OK und geben Sie Ihren Code ein.",
						"Nicht unterstützt!",
						"Dieser Dienst ist aktuell nicht verfügbar",
						"Eingabesperre!",
						"Kein Programmtitel.",
						"Keine Funktion",
    					"Kein Untertitel"
						];
var channelNumberOverPromt = ["The number of search programs has exceeded,you can delete some programs and then retry!"];
var chBookingPromt	= ["Der aktuelle Kanal hat eine vorprogrammiert Aufnahme, der Fernseher beginnt jetzt mit der Aufnahme.",
						"Es wurde eine programmierte Aufnahme gefunden.\n Schalten Sie XXXX ein, um die Aufzeichnung zu starten",
						"Für den aktuellen Sender gibt es einen Termin.",
						"Es wurde ein Termin gefunden.\n Schalten Sie XXXX ein"];
var timeUnit		= ["Sek.","Min."];
var ciPromt			= ["Die Netzwerkdaten haben sich geändert. Zur Aktualisierung führen Sie einen Update-Scan durch. ",];
var othersPromt		= ["Bitte warten ...",];
var menuOptions		= ["Bild","Ton","Kanal","Smart TV","Netzwerk","System","Support"];
var optionOptions	= ["Bildvoreinstellung","Tonvoreinstellung","Standbild","T-Link","Timeshift","PVR","Programmliste","Einstellungen","*"];
var optionTLinkPromt= [["Automatische Einschaltung","Auto-Standby","Anleitungsmenü"],
						["Einschalten","Standby","Verstärkerlautstärke"]];
var powerPromt		= ["Fernseher wird bald ausgeschaltet! Drücken Sie zum Abbrechen eine beliebige Taste."];
var ttxLanguage		= ["WEST EUR","OST EUR","Russisch","Arabisch/Hebräisch","Farsi","Arabisch","Belorussisch","Griechisch","Türkisch"];
var ttxOptions		= ["Zeigen","Unterseiten durchschalten","Sprache","Alarmseite","Kurzmeldung"];
var weekday         = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
var lcnConfflict	= "Dieses Programm hat Probleme beim Empfang.";
var inShopMode		= "Ihr Fernseher befindet sich im Shop-Modus. Für den Home-Modus wählen Sie bitte „System“ und ändern Sie im Menü „Standort“.";
var nitRefresh		= "Die Netzwerkdaten wurden geändert. Möchten Sie einen Aktualisierungsscan durchführen?";
var picHDMIMode     = ["Automatisch","Grafik","Video"];

var glassRemind    	= ["Bitte koppeln Sie Ihre 3D-Brille mit dem Fernseher\n(Halten Sie die EIN-/AUSTASTE auf der 3D-Brille gedrückt).","Ihre 3D-Brille ist mit dem Fernseher verbunden ",""];
var pvrRemind 		= ["Ziehen Sie das USB-Gerät nicht ab und schalten Sie es nicht aus"];
var pvrConName   	= ["PVR","Programminformationen:",["Hinweis: Um HD-Sender aufnehmen, bitte die Festplatte (Geschwindigkeit> 5.0MB/sec) auswählen, um SD-Sender aufzunehmen, bitte die Festplatte (Geschwindigkeit> 3.0MB/sec) auswählen.","Aufgezeichnetes Video ist im Ordner „PVR“ gespeichert."],"Stop","Aufnahme","Stunde","Minute","Dauer","Tipps","Mit den Pfeiltasten stellen Sie die Aufnahmedauer ein."];
var pvrDisRemind 	= "Einen USB-Stick für die Aufnahme anschließen.";
var pvrRemindWords  = ["Möchten Sie die Funktion verlassen?",
							"Möchten Sie die Aufnahme beenden und Aufnahmedateien durchsuchen?",
							"Laufwerk abgezogen.",
							"Nicht genug Speicherplatz verfügbar.",
							"Keine Aufnahmedateien. Starten Sie die Aufnahme.",
							"PVR kann in verschlüsseltem Kanal nicht starten.",
							"Funktion nicht verfügbar",
							"Erfolgreich gespeichert.",
							"Aufnahme beenden und Eingangsquelle ändern?",
							"Der Fernseher beendet die aktuelle Aufnahme. Möchten Sie die Funktion verlassen?",
							"Die PVR-Aufnahme benötigt ein Fernsehsignal, um korrekt zu funktionieren, bitte überprüfen Sie Ihr Signal."];
var pvrChangeCh 	= ["Möchten Sie umschalten?",
							"Aufnahme beenden und Kanal ändern?"];
var pvrChangeToPIN8	= ["Möchten Sie die verbundene Signalquelle zu SCART-Eingang wechseln?",
				    		"Möchten Sie die Aufnahme beenden und die verbundene Signalquelle zu SCART-Eingang wechseln?"];
var pvrChangeToCEC  = ["Möchten Sie die verbundene Signalquelle zu einem HDMI-Eingang ändern?",
				  			 "Möchten Sie die Aufnahme beenden und die verbundene Signalquelle zu einem HDMI-Eingang ändern?"];
var pvrGuideJump    = ["Möchten Sie EPG aufrufen?",
							"Aufnahme beenden und EPG aufrufen?"];
var pvrMediaJump    = ["Möchten Sie Medien aufrufen?",
							"Aufnahme beenden und Media aufrufen?"];
var timeshiftExtra	= ["Timeshift-Funktion beenden und TV-Kanal wechseln?",
						"Möchten Sie die Timeshift-Funktion beenden und die verbundene Signalquelle zu SCART-Eingang wechseln?",
						"Möchten Sie die Timeshift-Funktion beenden und die verbundene Signalquelle zu einem HDMI-Eingang ändern?",
						"Timeshift kann in verschlüss Kanal nicht starten.",
						"Möchten Sie die Timeshift-Funktion beenden und EPG aufrufen?",
						"Timeshift-Funktion beenden und zum USB-Modus wechseln?",
						"Timeshift-Funktion beenden und Eingangsquelle ändern?",
						"Einen USB-Stick für die Aufnahme anschließen.",
						"Laufwerk nicht groß genug.",
						"Der Fernseher beendet die aktuelle Timeshift-Funktion. Möchten Sie die Funktion verlassen?"];
var timeshiftStatus	= ["Schneller Rücklauf","Stop","Wiedergabe","Pause","Schneller Vorlauf"];
var pvrPowerOffRemind= ["Stand-by-Aufnahme","Standby","Der Fernseher nimmt jetzt auf, möchten Sie weiterhin aufnehmen, wenn sich der Fernseher im Stand-by-Modus befindet?"];
var timeshiftInitTitle= "Einstellung Laufwerk";
var timeshiftInitReminds= ["Assistent zur Einstellung des USB-Laufwerks für Timeshift-Funktion. Einstellungsmodus wählen.",
						 "Für bessere Leistung empfehlen wir, das USB-Laufwerk zu formatieren. Alle Daten werden gelöscht.",
						 "Wählen Sie die Dateigröße für Timeshift.",
						 "Formatieren",
						 "Nicht genug Speicherplatz verfügbar.",
						 "Timeshift-Datei erstellen",
						 "Geschwindigkeitstest",
						 "Das Laufwerk ist zu langsam (< %f Mbit/s) für die Timeshift-Funktion!",
						 "Laufwerk ist für Timeshift bereit. Wir empfehlen Laufwerkwechsel (Geschwindigkeit > %f Mbit/s) für bessere Leistung.",
						 "Laufwerk ist für Timeshift bereit."];
var timeshiftInitButtons= ["Formatieren","Überspringen","Abbrechen","Ok","Beenden","Beenden"];
var timeshiftInitOther=["Laufwk Geschw:","Mbit/s"];

var selectChoice	= "Sind Sie sicher?";
var chAtvStore		= "Speichern als XXXX";
var chEpgFirstGenreUK= ["Kino","Nachrichten","UNTERHALTUNG","Sport","Kinder","Erziehung","Lifestyle","Drama"];
var homePageTitleList = ["APPS","TV","VIDEOS","Homepage"];
var homePageFavAndAllName  = ["Favoriten-Apps","Alle Apps"];
var homePageBackUp = ["eBedienungsanleitung","GuideOn"];
var homePageRemind   = ["Die gesamten Funktionen sind erst nach Netzwerkverbindung verfügbar.","Ihr Fernseher hat noch keine Kanäle gespeichert. Programme sind nach der Kanalsuche verfügbar.","Kein Programm","Jetzt Kanäle suchen?"];
var homePageHistory = ["Historie"];
var miracastTitle = ["WLAN-Anzeige","TCL-Gerät"];
var miracastRemind=["WLAN-Anzeige ermöglicht die kabellose Bild- und Tonübertragung von Ihrem Gerät, wie z.B. einem Smartphone oder Tablet, auf Ihr Fernsehgerät. Das erlaubt Ihnen, die auf Ihrem Smartphone oder Tablet angezeigten Inhalte gleichzeitig auf Ihrem Fernsehgerät anzuschauen. Sie können zum Beispiel ein Video auf Ihrem Smartphone abspielen und gleichzeitig auf Ihrem Fernseher anzeigen oder Ihr Tablet als Spielkonsole für Inhalte verwenden, die auf dem großen Bildschirm Ihres Fernsehgeräts angezeigt werden.","WLAN-Anzeige auf Fernseher betriebsbereit. Geben Sie den Bildschirm Ihres Geräts jetzt für den Fernseher frei.","Verbinde. Bitte warten!","Verbindung fehlgeschlagen!","Verbindung fehlgeschlagen. Bitte überprüfen!"];
var homePageLittleWin = ["Einstellungen","Medien","Favoritenkanäle","Smart TV","EPG"];

var hbbtvStopRemind  = ["Möchten Sie die Wiedergabe beenden?"];
var colorSystem = ["Automatisch","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Drücken Sie für weitere Informationen ≡ ";
var emptyListInfo = "Kein USB-Gerät am TV angeschlossen!";
var optionVideoListArray_1 = ["Bildvoreinstellung", "Tonvoreinstellung", "Wiedergabemodus", "Bildschirmmodus", "3D-Modus", 
							  "L-R Umschalter", "Tiefeneffekt", "Untertitel", "Soundtrack", "Titel", "Kapitel", "Info"];
var optionVideoListArray_2 = ["Bildvoreinstellung", "Tonvoreinstellung", "Wiedergabemodus", "Bildschirmmodus", 
							  "Untertitel", "Soundtrack", "Titel", "Kapitel", "Info"];
var bottomTipsText = ["Wiedergabe/Pause", "Schneller Rücklauf", "Schneller Vorlauf", "Wiedergabeliste", "Einstellungen"];
var picturePresetArray = ["Standard", "Dynamik", "Natürlich", "Kino", "Benutzer"];
var videoPlayModeArray = ["Alle wiederholen", "Wiederholen", "Normal"];
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Breitbildzoom", "Zoom 2", "Breitbildzoom 2", "Stretch-Zoom", "Automatisch"];
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "14:9-Zoom", "16:9-Zoom", "16:9-Zoom oben", "Automatisch"];
var Mode3DArray = ["Aus", "2D-zu-3D", "Nebeneinander (SbS)", "Oben/Unten (TaB)", "Line-Interleave"];
var videoOptionListArray = ["Aus", "Track", "Untertitel", "Titel", "Kapitel"];
var subMenuTitleText = "Untertitel";
var langMenuTitleText = "Audiosprache";
var titleMenuTitleText = "Titel";
var mode3DMenuTitleText = "3D-Modus";
var langInfoText = "Track";
var STOP_RESUME_INFO = "Stopp-Weiter";
var playListName = "Name";
var eb_tips = "Tipps";
var ok_button = "Ok";
var eb_info = ["Audio-Decodierung Fehler.", "Video-Decodierung Fehler.", "Audioformat nicht unterstützt.", 
			   "Videoformat nicht unterstützt.", "Datei kann nicht geöffnet werden.", "Wiedergabefehler, bitte versuchen Sie es erneut.",
			   "Dateiformat nicht unterstützt.", "Ups! Player läuft nicht mehr.",
			   "Dateipfad existiert nicht oder ist ungültig.\n Schließen Sie das Speichermedium erneut an und versuchen Sie es noch einmal.",
			   "Wiedergabe von der vorherigen\n Stelle fortsetzen?"];
var picturePlayErrorTips = ["Laden fehlgeschlagen!!!","Das Bild ist zu groß!!!","Netzwerkfehler!!!","Thread-Fehler!!!","Parameter-Fehler!!!","Unbekannter Fehler!!!"];
var frameTitleText = "Neues Gerät";
var eb_quit_info = "Sind Sie sicher, dass Sie die Funktion verlassen möchten?";
var eb_yes = "Ja";
var eb_no = "Nein";
var offinfo = "Aus";
var naInfo = "Null";
var consoleInfoArray = ["Schneller Rücklauf", "Schneller Vorlauf", "Wiedergabe/Pause", "Wiedergabeliste"];
var cantOperateText = ["Funktion nicht unterstützt."];
var chapterChangeInfo = "Nur Kapitel von 1 bis XXXX sind verfügbar.";
var metaDataArray = ["Titel/Ausgabe Metadaten: ", "Kapitel Metadaten: ", "Audio Metadaten: ", "Untertitel Metadaten: "];
var metaTitleInfo = "Titel";
var metaChapterInfo = "Kapitel";
var videoLoadingInfo = "Analyse läuft...";
var listLoadingInfo = "Laden läuft...";
var pgInfo = "Bewertung: ";
var fileNameText = "Name";
var fileDateText = "Datum";
var fileSizeText = "Größe";
var fileDurationText = "Dauer";
var fileDirectorText = "Regisseur";
var fileCopyrightText = "Copyright";
var fileArtistText = "Künstler";
var fileAlbumText = "Album";
var fileGenreText = "Genre";
var fileYearText = "Jahr";
var fileGenreText = "Genre";
var mainListArray = ["Alle", "Bild", "Video", "Musik"];
var sortArray = ["Name", "Datum"];
var parserArray = ["Normal", "Rekursiv"];
var emptyTipsInfo = "Ups. Es wurde keine unterstützte Datei gefunden.";
var emptyFolderInfo = "Ups. Es wurde keine unterstützte Datei gefunden.";
var sortName = "Sortieren nach";
var parserName = "Parser";
var divx_str1 = "DivX(R) Anmeldung";
var divx_str2 = "DivX(R) Deaktivierung";
var infor_str = "Info";
var quickMenuEmptyText = "Keine verfügbaren Optionen.";

var musicSoundPresetArray = ["Standard", "Kino", "Musik", "Klare Stimme", "Benutzer"];
var musicInformationArray = ["Name", "Künstler", "Album", "Genre:", "Jahr:", "Länge:"];
var playListName = "Name";
var playTipsInfo = ["Sie spielen die erste Datei ab.", "Sie spielen die letzte Datei ab."]
var musicNameInfo = "Name";
var musicArtistInfo = "Künstler";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Tonvoreinstellung";
var optionBGMInfo = "Hintergrundwiedergabe";
var optionAudioOnlyInfo = "Nur Audio";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX hat sich mit Fernseher verbunden!";
var tvRemoteTitle		= "Fernbedienung";
var tvRemoteDeveloper	= "Diese Anwendung wurde von TCL entwickelt";
var tvRemoteDeviceTitle	= "Gerätebezeichnung:";
var remoteOption		= ["Media-Sharing","Fernbedienung","Hilfe","Info","Smart Connect"];
var remotebottom		= " Bitte „TV-Fernbedienung“ auf Ihr Smartphone herunterladen ";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Freigabe von Fotos, Videos und Musik für den Fernseher über das Telefon.",
							"Schritte: \n   1. Tippen Sie auf „TV Remote“ auf Ihrem Smartphone. Verbinden Sie das Telefon über das gleiche Netzwerk mit dem Fernseher.\n   2. Tippen Sie auf „Medien freigeben“, um die Mediendateien zu durchsuchen.\n   3. Senden Sie die Medien zur Wiedergabe an den Fernseher (mit einer der folgenden Optionen).",
							"      a) Ziehen Sie den Ordner/die Datei auf das TV-Symbol am oberen Bildschirmrand.\n      b) Schwingen Sie das Telefon einmal in Richtung TV, um die erste Datei zu starten.\n      c) Spielen Sie Medien auf dem Telefon ab und klicken Sie auf das TV-Freigabe-Symbol.",
							"   4. Schütteln Sie das Smartphone während der Wiedergabe am TV, um die vorherige oder nächste Datei wiederzugeben."];
var controlReminds		= ["Verwenden Sie Ihr Smartphone als Fernbedienung für den TV.",
							" ",
							"Schritt: \n   1. Tippen Sie auf „TV Remote“ auf Ihrem Smartphone. Verbinden Sie das Telefon über das gleiche Netzwerk mit dem Fernseher.\n   2. Tippen Sie auf „Fernbedienung“, um den Fernseher zu bedienen."];
var helpDeviceWords		= "Multi-Screen-Interaktion";
var helpBottom			= "Im Zeitalter der Cloud-Technologie lassen sich Smartphones und Fernseher miteinander verbinden. Schauen Sie mit Ihrer Familie Inhalte auf mehreren Bildschirmen an und steuern Sie den Fernseher mit Ihrem Handy! ";
var helpReminds			= ["Vorbereitung\n   1. Laden Sie die App „TV Remote“ von Google Play oder Apple Store herunter und installieren Sie die App.\n   2. Verbinden Sie das Telefon über das gleiche WLAN-Netzwerk mit dem Fernseher.",
							" ",
							"Empfohlenes Telefon\n   1. CPU: Größer als 800 MHz\n   2. Speicher: Mindestens 80 MB freier Speicherplatz",
							" ",
							"Haftungsausschluss\n   Steht „TV Remote“ auf Ihrem Telefon nicht zur Verfügung, so wenden Sie sich bitte an der Hersteller des Telefons. "];
var helpButtons			= ["Zurück","Weiter"];
var aboutReminds		= ["Fernbedienung","Diese Anwendung wurde von TCL entwickelt"];
var aboutExit			= "Beenden";
var smartReminds		= ["Schnelle und intelligente Verbindung zwischen dem Fernseher und dem Telefon.",
							" ",
							"Schritte \n   1. Verbinden Sie das Telefon über das gleiche LAN mit dem Fernseher. Klicken Sie auf „TV Remote“ auf dem Smartphone.\n   2. Klicken Sie auf „Smart Connect“, um den QR-Code zu scannen.\n   3. Mit dem Fernseher im Übertragungsmodus halten Sie INFO auf der TV-Fernbedienung für 4 Sekunden gedrückt; ein QR-Code wird als Vollbild angezeigt.",];
var smartQRReminds		= ["Bitte klicken Sie auf Smart Connect in TV-Fernbedienung auf Ihrem Telefon und scannen Sie den QR-Code, um den Fernseher und das Telefon schnell zu verbinden.",
							"Der QR-Code enthält die Informationen zum LAN-Konto. Bitte gut aufbewahren."];
							

var consoleTipArray = ["Zurück","Weiter","Konsole","Wiedergabeliste"];							
var optionInfoArray = ["Bildvoreinstellung","Wiedergabemodus","Dauer","Effekt","Info"];

var playModeArray = ["Normal","Shuffle","Wiederholen"];
var durationArray = ["Kurz (5s)", "Mittel (10s)", "Lang (15s)"];
var effectArray = ["Keine", "Drehen", "Von rechts rollen", "Von links rollen", "Von oben rollen", "Von unten rollen", "Box nach innen", "Box nach außen", "Zufall"];
var infoArray = ["Name:","Größe:","Datum:","Standort"];

var picturePresetBarTitleInfo = "Bildvoreinstellung";
var picturePresetBarArray = ["Standard","Dynamik","Studio","Kino","Benutzer"];
var upTipsInfo = "Bild verschieben"; //add yums 2014-10-10
var consoleTipsArray = ["Konsole","Zurück","Weiter","Wiedergabeliste","Einstellungen"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Drücken Sie erneut die Pfeiltaste RECHTS, um das nächste Bild anzuzeigen","Drücken Sie erneut die Pfeiltaste LINKS, um das vorherige Bild anzuzeigen","Drücken Sie erneut die Pfeiltaste ABWÄRTS, um die Wiedergabeliste anzuzeigen"]; //add yums 2014-10-10

var optionPvrListArray = ["Bildvoreinstellung","Tonvoreinstellung", "Bildschirmmodus", "3D-Modus", "Untertitel", "Soundtrack", "Info"];							
	
var titleSpanFirstArray = ["Steuerung & Verbindung","Allgemeine Bedienungshinweise","APPS","TV","Einstellungen","FAQs"];
var titleSpanSecondArray = [["Fernbedienung","Bedientasten","Einfache Navigation","TV-Anschluss","TV-Anschluss","TV-Anschluss","Drahtlos"],["Launcher","Statusbalken","Quelle"],["Laufende Apps","Medien","Fernbedienung"],["Kanal und Lautstärke einstellen","Kanalliste","EPG","Senderinstallation","Favoritenkanäle"],["Bildeinstellung","Toneinstellung","Kanaleinstellung","Softwareupdate","Sprache","Jugendschutz"],["Häufig gestellte Fragen","Häufig gestellte Fragen","Störungsbehebung","Störungsbehebung","Geschäftsbedingungen"]];
var contentSpan1_1Array =[["ALIMENTATION:","SOURCE:","EINSTELLUNGEN:","OPTION:","ZURÜCK:","INFORMATIONS:","HOME:","VERLASSEN:","LISTE:"],
    ["Ein- oder Ausschalten (Stand-by-Modus)",
        "Eingangsquelle wählen",
        "Zur Anzeige des Einstellungsmenüs",
        "Zur Anzeige des Optionenmenüs",
        "Navigieren Sie in das vorherige Menü oder verlassen Sie eine laufende App",
        "Zeigt Programminformationen an",
        "Zum Öffnen der SmartTV-Homepage",
        "Navigieren Sie in das vorherige Menü oder verlassen Sie eine laufende App",
        "Zeigt die Kanalliste an"]];
var contentSpan1_2Array = ["Vorheriger Sender","Nächster Sender","Lautstärke erhöhen up","Lautstärke verringern","Rückkehr zur Homepage","Option bestätigen","Stand-by-Modus / Ein"];
var contentSpan1_3Array = ["OK/Menüführung","Sender aufwärts","Sender abwärts","Lautstärke verringern","Lautstärke erhöhen","Verwendung als Navigantionstasten in einigen Funktionen."];
var contentSpan1_4Array = ["LAN","HDMI (MHL)","HDMI","HDMI (ARC)","AV-Ausgang","LAN","Smartphone","PC/Digitalempfänger/ DVD-Player","Audio-Verstärker","Audio-Verstärker/Monitor","Ihr Fernseher verfügt möglicherweise nicht über alle Anschlüsse."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Kopfhörer","AV-Eingang","SPDIF","CMP AUDIO Eingang","CMP Eingang (YPbPr)","USB-Geräte","USB-Geräte","Kopfhörer","DVC/Spielkonsole/ Digitalempfänger/DVD-Player","Audio-Verstärker","DVC/Spielkonsole/ Digitalempfänger/DVD-Player","Ihr Fernseher verfügt möglicherweise nicht über alle Anschlüsse."];
var contentSpan1_6Array = ["CI-Modul","SD","VGA","SCART","Mini SCART","ANTENNE Eingang","PCMCIA-Karte","SD-Karte","PC","Digitalempfänger/ DVD-Player","Antenne/Kabel/Satellit","Ihr Fernseher verfügt möglicherweise nicht über alle Anschlüsse."];
var contentSpan1_7Array = ["Tablette","PC","Router","Telefon","TV"];
var contentSpan1_8Array = ["Funktions-/Betriebstaste","Für Sleep-Timer gedrückt halten","Runter","Hoch","Lautstärke/Sender/Quelle"];

var contentSpan2Array = [["Drücken Sie die Navigationstasten, um die Homepage anzuzeigen.","Dann drücken Sie OK, um eines der Programme anzuzeigen oder die App aufzurufen."],["Datum, Netzwerk und Geräte werden oben rechts im Bild angezeigt."],["Wählen Sie die Eingangsquelle unter den über die verschiedenen Anschlüsse mit dem Fernseher verbundenen Geräte, wie TV, AV, HDMI usw."]];

var contentSpan3Array = ["Zeigen Sie Ihre Lieblings-Apps auf der Seite Smart TV an","Fotos, Videos und Musik von USB-Speichermedium wiedergeben.","Verbinden Sie Ihren Fernseher und Ihr Smartphone oder Tablet auf dem gleichen LAN","Klicken Sie auf nScreen oder TV Remote auf Ihrem Smartphone oder Tablet","Geben Sie Fotos, Videos und Musik für Ihre Familie auf mehreren Bildschirmen frei und bedienen Sie Ihren Fernseher über Ihr Smartphone","Verbinden Sie Ihren Fernseher sowie Ihr Smartphone bzw. Ihr Tablet mit dem gleichen LAN."];

var contentSpan4Array = [["Drücken Sie AUFWÄRTS/ABWÄRTS, um Kanäle umzuschalten","Drücken Sie LINKS/RECHTS, um die Lautstärke einzustellen"],["Drücken Sie LIST auf der Fernbedienung, um die Programme anzuzeigen","Drücken Sie AUFWÄRTS/ABWÄRTS, um Ihren Kanal zu wählen"],["EPG ist eine elektronische Fernsehzeitschrift. In der Funktion können Sie die Programme navigieren, wählen, anzeigen und aufnehmen."],["Kanäle suchen und installieren"],["Favoritenkanäle in der Kanalliste hinzufügen oder bearbeiten"]];

var contentSpan5Array = ["Genießen Sie Ihre Favoritenprogramme über die Video-Apps"];

var contentSpan6Array = [["Drücken Sie Option, um die Systemeinstellungen anzuzeigen","Rufen Sie die Bildeinstellungen auf, um die Werte einzustellen"],["Drücken Sie Option, um die Systemeinstellungen anzuzeigen","Rufen Sie die Toneinstellungen auf, um die Optionen einzustellen"],["Drücken Sie Option, um die Systemeinstellungen anzuzeigen","Rufen Sie die Kanaleinstellungen auf, um die Optionen einzustellen"],["Aktualisieren Sie Ihren Fernseher, wenn eine neue Software-Version verfügbar ist"],["Wählen Sie Ihre bevorzugte Menüsprache"],["Aktiviert die Jugendschutzsperre für Kanäle oder Programme, die für Kinder ungeeignet sind"]];

var contentSpan7_1Array = [["Kein Bild, kein Ton","Vergewissern Sie sich, dass Ihre Sicherung oder der Trennschalter in Ordnung ist.","Schließen Sie ein anderes Gerät zur Überprüfung an der Steckdose an.","Der Netzstecker steckt nicht richtig in der Steckdose.","Überprüfen Sie die Signalquelle."],["Bild, aber kein Ton","Erhöhen Sie die Lautstärke.","Die Toneinstellungen sind falsch.","Signalfehler vom Sender."],["Ton, aber kein Bild","Stellen Sie die Helligkeit und den Kontrast ein","Signalfehler vom Sender.","Überprüfen Sie, ob nur der Audiomodus eingestellt ist."]];
var contentSpan7_2Array = [["Funkfrequenzstörungen","Diese Störungen führen zu Wellen oder diagonalen Streifen und in einigen Fällen zum Verlust des Kontrasts im Bild. Finden und entfernen Sie die Störquelle."],["Keine Farbe","Ändern Sie die Farbeinstellungen.","Versuchen Sie einen anderen Kanal. Möglicherweise handelt es sich um einen Schwarz-Weiß-Film."],["Die Fernbedienung funktioniert nicht","Tauschen Sie die Batterien aus.","Die Batterien sind nicht richtig eingesetzt. Der Fernseher ist nicht angeschlossen."]];
var contentSpan7_3Array = [["Inhalte des USB-Geräts werden nicht angezeigt","Vergewissern Sie sich, dass das USB-Speichermedium mit dem Fernseher kompatibel ist.","Vergewissern Sie sich, dass Audio- und Bilddateiformate vom Fernseher unterstützt werden."],["Wiedergabe ohne Ton","Das Audioformat des Videos wird nicht durch den Player des Fernsehers unterstützt."],["Dateien werden nicht gleichmäßig abgespielt","Die Übertragungsleistung des USB-Speichermediums beeinträchtigt möglicherweise die Datenübertragungsrate zum Fernseher."]];
var contentSpan7_4Array = [["Worauf muss ich achten, wenn ich Software aktualisiere?","Keinesfalls das Gerät während der Software-Aktualisierung ausschalten.","Jede Steuerung mit der Fernbedienung während der Software-Aktualisierung vermeiden.","Seien Sie während der Software-Aktualisierung geduldig, es kann etwas länger dauern."],["Auf dem Bildschirm sind während der Software-Aktualisierung keine Veränderungen zu sehen.","Unter bestimmten Umständen wird nicht nur Ihre Software aktualisiert oder neue Funktionen hinzugefügt, sondern es kann sich auch die Leistung des Fernsehers verbessern, ohne dass Sie Veränderungen auf dem Bildschirm sehen. Auch die Benutzeroberfläche kann unverändert bleiben."]];
var termsTitle = "Geschäftsbedingungen";
var termsConditions = ["(Rechtlicher Hinweis) von TCL – Hersteller dieses Fernsehers. ","Aufgrund der vielfältigen Funktionen von Produkten mit SmartTV-Diensten und begrenzt verfügbarer Inhalte sind bestimmte Funktionen, Anwendungen oder Dienste nicht mit allen Geräten oder in allen Regionen verfügbar. Einige SmartTV-Funktionen erfordern möglicherweise zusätzliche Peripheriegeräte oder separat zu zahlende Mitgliedsbeiträge. Bitte besuchen Sie unsere Webseite für mehr Informationen über bestimmte Geräte und die Verfügbarkeit von Inhalten. Die Dienste und Verfügbarkeit von SmartTV-Inhalten unterliegen gelegentlichen und nicht vorher angekündigten Änderungen. \n   Alle über dieses Gerät angebotenen Inhalte und Dienste sind Eigentum Dritter und durch Urheberrechte, Patente, Markenzeichen und/oder geistige Eigentumsrechte geschützt. Solche Inhalte und Dienste werden Ihnen nur für private, nicht gewerbliche Zwecke angeboten. Es ist untersagt, Inhalte oder Dienste für Zwecke zu verwenden, die nicht vom Eigentümer oder Anbieter der Inhalte oder Dienste autorisiert wurden. Unbeschadet der Gültigkeit des Vorangehenden ist es ohne ausdrückliche Zustimmung der Eigentümer oder Anbieter der Inhalte oder Dienste nicht erlaubt, über dieses Gerät angebotene Inhalte oder Dienste auf irgendeine Art und Weise oder über ein Medium zu modifizieren, zu kopieren, neu zu veröffentlichen, hochzuladen, ins Internet zu stellen, zu übertragen, zu übersetzen, zu verkaufen, zu verwerten, zu vertreiben oder davon abgeleitete Erzeugnisse zu erstellen. \n   SIE ERKENNEN AUSDRÜCKLICH AN UND STIMMEN ZU, DASS SIE DAS GERÄT AUF EIGENE GEFAHR VERWENDEN UND DASS DAS RISIKO IN BEZUG AUF ZUFRIEDENSTELLENDE QUALITÄT, LEISTUNG UND GENAUIGKEIT VOLLSTÄNDIG BEI IHNEN LIEGT. DAS GERÄT UND ALLE INHALTE UND DIENSTE DRITTER WERDEN „OHNE GARANTIE“ – AUSDRÜCKLICH ODER STILLSCHWEIGEND – ANGEBOTEN. TCL LEHNT AUSDRÜCKLICH ALLE GARANTIEN UND AUFLAGEN, AUSDRÜCKLICH ODER STILLSCHWEIGEND, IN BEZUG AUF DAS GERÄT UND ALLE INHALTE UND DIENSTE AB, EINSCHLIESSLICH, JEDOCH NICHT AUSSCHLIESSLICH DER ZUSICHERUNG ALLGEMEINER GEBRAUCHSTAUGLICHKEIT, ZUFRIEDENSTELLENDER QUALITÄT, DER EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, VON GENAUIGKEIT, GUTER UNTERHALTUNG, UND DER ZUSICHERUNG, DASS KEINE RECHTE DRITTER VERLETZT WERDEN. TCL GARANTIERT NICHT DIE GENAUIGKEIT, GÜLTIGKEIT, PÜNKTLICHKEIT, RECHTMÄSSIGKEIT ODER VOLLSTÄNDIGKEIT VON INHALTEN ODER DIENSTEN, DIE ÜBER DIESES GERÄT ANGEBOTEN WERDEN, UND GARANTIERT NICHT, DASS DAS GERÄT, DIE INHALTE ODER DIENSTE IHREN ANFORDERUNGEN ENTSPRECHEN ODER DASS DER BETRIEB DES GERÄTS ODER DIE DIENSTE UNUNTERBROCHEN UND FEHLERFREI SIND. UNTER KEINEN UMSTÄNDEN, AUCH NICHT BEI FAHRLÄSSIGKEIT, HAFTET TCL WEDER VERTRAGLICH NOCH GESETZLICH FÜR DIREKTE, INDIREKTE, BESONDERE ODER FOLGESCHÄDEN, FÜR ANWALTSKOSTEN ODER AUSGABEN, ODER FÜR ANDERE SCHÄDEN AUFGRUND VON ODER IN VERBINDUNG MIT ENTHALTENEN INFORMATIONEN, DER ANWENDUNG DIESES GERÄTS, ODER DER VON IHNEN ODER DRITTEN IN ANSPRUCH GENOMMENEN INHALTE UND DIENSTE, AUCH WENN SIE AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDEN. \n   Dienste Dritter können jederzeit und ohne Vorankündigung geändert, aufgehoben, entfernt, beendet, unterbrochen oder deren Zugang kann deaktiviert werden. TCL (Hersteller von Fernsehgeräten der Marke Thomson) übernimmt keine Vertretung oder Garantie dafür, dass Inhalte oder Dienste für einen bestimmten Zeitraum zur Verfügung stehen. Inhalte und Dienste werden von Dritten über Netzwerke und Übertragungsstationen übertragen, die außerhalb des Kontrollbereichs von TCL liegen. Unbeschadet der Allgemeingültigkeit dieses Haftungsausschlusses lehnt TCL ausdrücklich jede Verantwortung oder Haftung für Änderungen, Störungen, Deaktivierung, Entfernung oder Aufhebung von Inhalten oder Diensten, die über dieses Gerät angeboten werden, ab. TCL kann jederzeit und ohne Ankündigung oder Haftung Einschränkungen für die Nutzung von oder für den Zugang zu bestimmten Diensten oder Inhalten auferlegen. TCL kann für Kundendienste in Bezug auf die Inhalte und Dienste weder verantwortlich noch haftbar gemacht werden. Fragen oder Anfragen in Bezug auf die Inhalte und Dienste müssen direkt an die jeweiligen Anbieter der Inhalte und Dienste gestellt werden."];

var noChannelListRemind        = ["Keine Kanäle gefunden. Die Kanalliste ist nach der Kanalsuche verfügbar.","Kanalscan"];
var closeSubtitleRemind   = "Die Funktion ist verfügbar, wenn die Untertitel ausgeschaltet sind. Möchten Sie die Einstellung jetzt vornehmen?";

var estickerTitles = ["Sehr realistische Bilder","Farben erwecken zum Leben","Großartige lebensechte Bewegung","Dynamische Bildqualität","SR UHD Hochskalierung","Erleben Sie die Welt in 3D","Schnellere Leistung","Zukünftige 4K-Inhalte","Genießen Sie die Online-Welt","Greifen Sie auf zusätzliche Inhalte zu","Integrierte Digital-Tuner","Alle Geräte verbinden","Verschiedene 4K-Quellen","USB-Inhalte","Ultraschnelles WLAN","Mobile Inhalte auf dem Fernseher","Inhalte von Mobilgeräten","Lokale Inhalte","Zugelassen durch DivX","Nahtloses Bild","Canal Ready","TDT Premium"];
var estickerDescriptions = ["Verblüffendes Seherlebnis auf dem UHD-Bildschirm dank der viermal mehr detaillierten Bilder eines FHD-Bildschirms.","Großer Farbbereich bietet Emotion in jeder Szene mit lebhaften Rot- und smaragdfarbenen Grüntönen","4K Frame-Interpolation und Hintergrundbeleuchtung gegen Probleme mit der Bewegungsunschärfe","Die Lebhaftigkeit des Originalbildes wird durch wahrhaft dynamischen Ausdruck mit brillantem Kontrast verbessert","Dank der Super-Resolution-Technologie genießen Sie frischere Fernsehshows und Blu-Ray Discs als je zuvor","Erleben Sie 3D TV-ready und sehen Sie verschiedene 3D-Inhalte","Angenehmere Unterhaltung mit Quad Core für ein gleichmäßiges Zusammenspiel und verbesserte Leistung","Unterstützt HEVC (H.265) Codec  für den zukünftigen Standard 4K-Video","Jede Menge Online-Apps, VOD-Dienste, Nachholsendungen und Web-Browsing im Internet","Sehen Sie mehr Zusatzdienste und Inhalte Ihres Lieblingssenders","Zugriff auf Fernsehkanäle in HD ohne zusätzlichen Digitalempfänger","Einfacher Anschluss vieler Digitalquellen, die zu Hause verfügbar sind","TV bereit für zukünftige Anwendungen, Wiedergabe von 4K 50/60 Hz über HDMI 2.0 mit HDCP 2.2 möglich","Videos oder Fotos direkt von USB-Speichermedien, Festplatten oder Kamera auf Leinwand in 4K-Auflösung","Neueste Generation 2x2 MIMO und AC-Standard konkurrenzlose Zugangsgeschwindigkeit für das Internet","Genießen Sie Fotos, Videos, Apps von Mobilgeräten dank der Bildschirm-Spiegelungstechnologie auf der Leinwand","Fotos, Videos und Apps von Smartphone oder Tablet können auf der Leinwand gezeigt werden ","Leinwanddarstellung lokaler Inhalte wie Fotos und Videos von Geräten, die mit dem lokalen Netzwerk verbunden sind","Wiedergabe geliehener oder eigener Filme, die mit DivX geschützt sind","Ultraschmale Einfassung und superflaches Design","Getestet und erprobt durch Canal+","Getestet und erprobt durch TDT Premium"];							

var eManualTextArray = ["eBedienungsanleitung","Die Abbildungen dienen nur als Referenz."];
var frontPanelRemind = "Nahbedientasten gesperrt.";
var eRPRemind		 = "Im Shopmodus werden die ERP-Anforderungen überstiegen. Sind Sie sicher?";	
var noRelatedChannel = "Kein zugehöriger Kanal";
var option0624Name          = ["BOP","BFS","Event nach Event","GetUserID","BGM","Reset all","Werkseinst. wiederherstellen","NRM","DVB-T2 und Land wählen","HbbTV-Modus"];
var DVBT2AndChoice = ["Ein","Nach Land","Aus"];
var hbbtvServiceRemind = "HbbTV bald verfügbar.";
var insertWord = "Einfügen";
var viewDetail = "Details anzeigen";

var remindOAD  = "Software-Aktualisierung. Neue empfohlene Software-Aktualisierung existiert auf anderem Kanal. Akzeptieren Sie den Download, so wird der Kanal automatisch umgeschaltet. Möchten Sie fortfahren?";

var LEDStatus = ["Blinkt", "Normal","Aus"];
var netFlixRemind = "Diese Funktion beendet den Zugriff auf die Netflix-Dienste, bis Sie sich wieder anmelden.";
var ESNExplanation = "Elektronische Seriennummer";
var resetShopRemind = "Das System setzt sich jetzt zurück, bitte schalten Sie den Fernseher nicht aus";
var initialSelectOption = "Bitte wählen Sie eine Option aus:";
var databaseRemind   = "Das System hat festgestellt, dass die Datenbank aus irgendeinem Grund beschädigt wurde und es stellt sie wieder automatisch her. Fahren Sie mit OK fort";
var Deactivation = "Deaktivierung";
var oadFutureRemind = "Softwareaktualisierung.\n Eine neue empfohlene Software steht um %s zur Verfügung. Die Aktualisierung kann einen Moment dauern und der Bildschirm wird dunkel. Schalten Sie das Gerät während der Aktualisierung nicht aus. Lassen Sie das Gerät zum entsprechenden Zeitpunkt eingeschaltet, falls Sie die Aktualisierung wünschen. Möchten Sie diese Aktualisierung empfangen?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Tonausgang";
var bt_soundOutPutTV = "TV-Sprecher";
var bt_soundOutPutBT = "Bluetooth-Gerät";
var bt_soundOutPutBT_TV = "Bluetooth und TV";
var bt_refreshBarName = "Geräte";
var bt_settingTips_On = "Bluetooth-Funktion aus und Geräte suchen. ";
var bt_settingTips_Finding = "Geräte werden gesucht…";
var bt_settingTips_NoDevice = "Kein Gerät verfügbar.";
var bt_deviceList_State_NoConnect = "Nicht verbunden";
var bt_deviceList_State_Connecting = "Verbinde...";
var bt_deviceList_State_Connected = "Verbunden";
var bt_deviceList_State_Paired = "Gekoppelt";
var bt_deviceList_Conncect_Failed_Tips1 = "Verbindungsfehler.";
var bt_deviceList_Conncect_Failed_Tips2 = "Bestätigen, XXX Bluetooth-Funktion ist an";
var bt_deviceList_Conncect_Success = "Mit Bluetooth-Gerät verbunden.";
var bt_deviceList_Disconncect_Success = "Von Bluetooth-Gerät getrennt.";
var bt_deviceList_Disconnect = "Möchten Sie wirklich von XXX trennen?";
var bt_tipsTitle = "Tipp";
var bt_bluetooth_Pairing_Title = "Bluetooth koppelen";
var bt_bluetooth_Input_Pin = "PIN eingeben:";
var bt_bluetooth_Output_Pin_Tip = "PIN XXXX mit Tastatur eingeben.";
var bt_bluetooth_Pin_Wrong_Tip = "Falsche PIN";
var bt_bluetooth_Remove_Pair_Title = "Frage";
var bt_bluetooth_Remove_Pair_Ask = "Gerät vergessen?";
							
							
var audioDescriptionName = ["Audio-Beschreibung","Lautsprecher","Lautstärke Lautsprecher","Kopfhörer","Lautstärke Kopfhörer","Lautstärke AD","BT-Gerät","Lautstärke BT-Gerät","Verstärker","Lautsprecher"];
var audioDescriptionOptions = ["Aus","Normal","Audio-Beschreibung"];
var volumeOffRemind = 'Wählen Sie für XXX im Einstellungsmenü die Option „Ein“.';
var switchSourceRemind   = " eingefügt. Jetzt wechseln?";
var footballModeName = "Sportmodus";
var resetStadium = "Stadion";							

var atvSearchMenu = "ATV manual search";
var dtvSearchMenu = "DTV manual search";
var settingNoticeSourceName ="Autom. Quelle";

var smartTVOptions		= ["Portal für Smart TV","HbbTV","Share & See","WLAN-Anzeige","Geschäftsbedingungen",
    "Vernetztes Standby","smart TV zurücksetzen","Cookie policy","Privacy policy","Datenlöschung"];
var supportOptions		= ["Ferndiagnose","Kontakt","Systeminformationen"];
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

var tvDoctor=["Ferndiagnose 2.0",
"Die App funktioniert an Ihrem Smart TV nur, um Diagnosetests durchzuführen und das Produkterlebnis zu verbessern. Betriebsdaten und Modellinformation des Geräts werden von dieser App gesammelt, auf den Server hochgeladen und für die Lösung von Geräteproblemen verwendet. Die App greift nicht auf Ihre persönlichen Daten zu. Vergewissern Sie sich, dass Ihr Fernsehgerät ordnungsgemäß mit dem Internet verbunden ist.",
"Lokale Diagnose",
"Nach dem Start der Diagnose befolgen Sie bitte die Anleitungen unseres Wartungstechnikers.",
"Ferndiagnose",
"Vergewissern Sie sich zunächst, dass unser Wartungstechniker online ist.",
"Seriennummer:",
"&nbsp;&nbsp;&nbsp;&nbsp;Benutzer-ID:",
"Wird verbunden...",
"Diagnose ist im Gange. Bitte halten Sie die Netzwerkverbindung aufrecht.",
"UnKein Zugriff auf das Internet, bitte überprüfen Sie die Netzwerkverbindung.",
"Beenden"
];
var contactUsOption = ["Kontakt",
    "Bitte wenden Sie sich bei Problemen mit dem Gerät an TCL.",
    "Kontakt",
    "Website: Besuchen Sie",
    "Rufnummer Callcenter:","Produktinformationen","Modellname:",
    "Software-Version:","","Benutzer-ID:","Projekt-ID:",
    "Clienttyp:","Drahtlos-MAC-Adresse:","Kabel-MAC-Adresse:","Netflix ESN:","Scannen Sie die Informationen auf Ihrem Mobiltelefon.",
    " und wählen Sie Ihr Land."];
							
							

//本地launcher的翻译，与服务器无关，只用于本地launcher
var homePageWords = ["Historie", "Suche"];//home页的翻译
var titlePageWords = ["Zuhause", "Videos","TV","Apps"];//index的标题翻译
var videosPageWords = ["Kino", "Sport","Musik","Beliebt","Spiel","Bildung","Nachrichten"];//videos页的内容翻译

//同时应用于本地和服务器
var statusPageWords = ["USB","Einstellungen","WLAN","Verkabelt"];//状态栏的翻译

//二级页面的翻译
var searchPageWords = ["Suche", "Beliebte Suchergebnisse:","Sendungen, Filme, Menschen..."];
var resultSearchPageWords = [" ","Ergebnisse","Bitte probieren Sie es mit anderen Suchwörtern.","Es wurde kein Video zu","gefunden. "];
var historyPageWords = ["Historie", ' ','zum Löschen des Verlaufs drücken',"Eins löschen","Alle löschen","Gestern","Heute"," Sie haben noch keine Videos angeschaut.","Verlauf wurde erfolgreich gelöscht!"];
var channelPageWords = ["Kein Video gefunden."];


//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9",
                       	   "Zoom-","0","Zoom+",
                       	   "Beenden","0","",
                       	   "Liste","0","Text",
                       	   "Programm-Guide","Eingeben","Beenden",
                       	   "Menü","Untertitel","Info",
                       	   "Stopp",
                       	   "Info","Menü","Beenden",
                       	   "Beenden"
                       	   ];

//added for LA sports mode
var sportsModeInitReminds= ["Dieser Assistent dient dem Einrichten des USB-Laufwerks im Sportmodus. Bitte wählen Sie den Einstellungsmodus.",
						 "Bitte wählen Sie die Dateigröße für den Sportmodus.",
						 "Sportmodus-Datei erstellen",
						 "Die Geschwindigkeit des USB-Laufwerks ist zu langsam (< %f Mbps) für den Sportmodus!",
						 "Das USB-Laufwerk ist für den Sportmodus bereit. Wir empfehlen jedoch Änderung (zu Geschwindigkeit > %f Mbps) für bessere Leistung.",
						 "Das USB-Laufwerk ist für den Sportmodus bereit."];

var sportsModeExtra	= ["Möchten Sie den Sportmodus beenden und den Kanal umschalten?",
						"Möchten Sie den Sportmodus beenden und zur Quelle wechseln, die am SCART-Eingang angeschlossen ist?",
						"Möchten Sie den Sportmodus beenden und zur Quelle wechseln, die am HDMI-Eingang angeschlossen ist?",
						"Der Sportmodus wird auf verschlüsselten Kanälen nicht unterstützt.",
						"Möchten Sie den Sportmodus beenden und EPG aufrufen?",
						"Möchten Sie den Sportmodus beenden und Medien aufrufen?",
						"Möchten Sie den Sportmodus beenden und die Eingangsquelle umschalten?",
						"Der Fernseher beenden den aktuellen Sportmodus. Möchten Sie die Funktion verlassen?"];
var remoteControlNote = "– Die mitgelieferte Fernbedienung kann sich je nach Produktmodell unterscheiden";


var textArray = ["Volume","Channel","Source","Switch/Power","Guide","seconds to Power OFF"];
var guideArray = ["VOL-","VOL+","CH-","CH+","Pre","Nächstes"];
var favChannelListRemind = ["Keine Favoritensender vorhanden. Öffnen Sie eine andere Liste und verwenden Sie die „Grüne Taste“, um Favoritensender hinzuzufügen."];

var proxySetting = ["Proxy-Einstellungen","Port"];
var powerOffShop = ["Wir empfehlen den Shop-Modus; bestätigen?"];
var tcastTextPageWords = ["Viele Videos, reichlich Apps","TV-Fernbedienung direkt an Ihren Fingerspitzen","Großartige Inhalte, für großen Bildschirm freigeben"];
var tcastOtherWords = ["QR-Code scannen und T-Cast herunterladen","Netzwerk mit Fernseher verbunden","TV-Name","T-Cast"];
var hbbtvWords = ["HbbTV-Einstellung","HbbTV","Cookies","Drittanbieter-Cookies","Geräte-ID","rückverfolgen"];
var hbbtvTrackingWords = ["YES","NO","Egal"];
var eStickerTipWords = ["Weniger als 400M Speicherplatz vorhanden; Videos im Demo-Modus löschen, um Speicherplatz freizusetzen?"];
var delEstickerVideoRemid = ["Das Video wurde gelöscht."];
var selectSatRemind = "Sie können nicht mehr als 20 Satelliten auswählen!";
var cookiePolicyTitle = "Cookie-Richtlinie – Online Smart-TV-Dienste";
var cookiePolicyConditions = ["Die Gesellschaft respektiert Ihre Privatsphäre, wenn Sie von der Gesellschaft hergestellte Smart-TVs oder von der Gesellschaft angebotene Smart-TV-Dienste nutzen. Cookies werden von vielen Websites und anderen Internetdiensten genutzt und Ihr Smart-TV wird Cookies annehmen, speichern und übermitteln, um sicherzustellen, dass diese Websites und Dienste ordnungsgemäß funktionieren. Die Gesellschaft nutzt Cookies auch, wenn die Gesellschaft Ihnen Smart-TV-Dienste bereitstellt. In dieser Cookie-Richtlinie beschreibt die Gesellschaft welche Cookies auf Ihrem Smart-TV gesetzt werden und wie Sie diese verwalten können. \nBitte beachten Sie, dass alle personenbezogenen Daten, die die Gesellschaft durch oder mithilfe von Cookies erhebt und/oder verarbeitet, der Datenschutzerklärung unterfallen und dass Sie die Cookie-Richtlinie zusammen mit der Datenschutzerklärung lesen sollten.\n1. Was ist ein Cookie?\nCookies sind kleine Text-Dateien, die auf Ihrem Smart-TV platziert werden können. Wenn auf eine Website oder den Roter-Knopf-Dienst einer TV-Station zugegriffen wird, kann die Website oder der Dienst ein Cookie auf dem Smart-TV speichern. Bei nachfolgenden Zugriffen wird ein Cookie, das auf Ihrem Smart-TV gesetzt ist, Informationen an die Partei senden, die das Cookie gesetzt hat. Cookies sind sehr weit verbreitet und werden auf einer Vielzahl von Websites und Diensten genutzt. Jedes Cookie wird typischerweise den Namen der Domain enthalten, von der das Cookie kommt, die „Lebenszeit“ des Cookies und einen Wert (normalerweise eine eindeutige Zahl). Für eine ausführlichere Erklärung was Cookies sind und wie sie funktionieren, besuchen Sie bitte www.allaboutcookies.org.\nCookies können in funktionale Cookies und nicht-funktionale Cookies unterteilt werden. Funktionale Cookies sind Cookies, die für den Zweck, Ihnen die Smart-TV-Dienste bereitzustellen, zwingend erforderlich sind, sowie dafür, dass Websites und andere Dienste die richtigen Inhalte für den Smart-TV bereitstellen können. Nicht-funktionale Cookies sind alle anderen Cookies.\nDiese Cookie-Richtlinie bezieht sich auf Cookies, die von uns gesetzt werden, sowie auf Werbe-Cookies, die von Dritten durch unsere Dienste auf Ihrem Smart-TV gesetzt werden können. Diese Cookie-Richtlinie bezieht sich nicht auf Cookies, die gesetzt werden können, wenn Sie die Smart-TV-Dienste nutzen, um auf Websites, Dienste oder Anwendungen von Dritten zuzugreifen. Für diese Cookies verweisen wir Sie auf die jeweiligen Cookie-Richtlinien solcher Dritter. Allerdings beschreibt diese Cookie-Richtlinie, wie man solche Cookies löscht (siehe den 4. Abschnitt unten).\n2. Welche nicht-funktionalen Cookies nutzen wir?\nWerbung: Wenn Sie Smart-TV-Dienste nutzen kann In-Video- und Displaywerbung an Ihren Smart-TV ausgeliefert werden,. Diese Werbung kann von uns oder von Dritten über unseren Werbeserver ausgeliefert werden, der eine zentrale koordinierende Rolle in Bezug auf die Auslieferung solcher Werbung übernimmt. Unser Werbeserver oder ein Werbeserver eines Dritten wird ein Cookie auf Ihrem Smart-TV setzen. Mithilfe dieses Cookies wird ein Werbeserver registrieren, ob eine Werbung an Ihren Smart-TV ausgeliefert wurde oder ob jemand, der Ihren Smart-TV nutzt, auf eine Werbung geklickt hat. Wir nutzen die in einem solchen Werbecookie gespeicherten Informationen, um uns zu merken, welche Werbung bereits an Ihren Smart-TV ausgeliefert wurde, um sicherzustellen, dass nicht zu viel gleiche Werbung an einen bestimmten Smart-TV ausgeliefert wird und dass wir in der Lage sind, unsere kommerziellen Vereinbarungen mit unseren Werbepartnern abzuwickeln. Wir werden diese Informationen nicht nutzen, um zielgerichtete Werbung zu schalten. Darüber hinaus können Dritte unser Werbesystem nutzen, um Werbung an Ihren Smart-TV auszuliefern und Cookies auf Ihrem Smart-TV platzieren, wenn solche Werbung ausgeliefert wird.\nDiese Cookies enthalten unter anderem Informationen über die ausgelieferte Werbung, Informationen darüber, in welcher Anwendung oder welcher Domain diese Werbung anzeigt wird und Ihre IP-Adresse. Dies dient dazu, festzuhalten, wie oft eine bestimmte Werbung angezeigt wird und um zu verhindern, dass dieselbe Werbung zu oft angezeigt wird. Externe Werbetreibende, die Werbung platzieren können, können auch Cookies nutzen, um Ihrer Aktivität über mehrere Websites zu folgen und um Werbung bereitzustellen, die Ihren persönlichen Vorlieben entspricht.\n3. Websites von Dritten\nWenn Sie Websites oder Dienste von Dritten über die Smart-TV-Dienste Ihres Smart-TV besuchen, ist es möglich, dass solche Websites oder Dienste Cookies auf Ihrem Smart-TV platzieren und dass solche Websites Ihre Interaktionen mit der Website verfolgen und speichern. Wir fordern zu solchen Aktivitäten nicht auf und unterstützen diese nicht und werden solche Informationen nicht nutzen. Bitte lesen Sie die jeweiligen Cookie-Richtlinien und Datenschutzerklärungen solcher Websites und Dienste für weitere Informationen über die Nutzung solcher Cookies durch solche Parteien.\n4. Löschen von Cookies\nDie Benutzeroberfläche Ihres Smart-TV erlaubt es Ihnen, alle Cookies und andere Inhalte des lokalen Browser-Speichers von Ihrem Smart-TV zu löschen. Es wird dringend empfohlen, alle Cookies und lokal gespeicherten Einstellungen vor dem Verkauf oder der Weitergabe Ihres Smart-TV zu löschen.\n5. Kontaktaufnahme\nFalls Sie irgendwelche Fragen oder Kommentare in Bezug auf unsere Cookie-Richtlinie oder unsere Verwendung von Cookies haben, können Sie uns eine E-Mail an FRsupport@tcl.com schicken.\nVersion: 1.0\n"];
var privacyPolicyTitle = "Datenschutzerklärung – Online Smart-TV-Dienste";
var privacyPolicyConditions = ["Wir respektieren Ihre Privatsphäre beim Umgang mit Ihren personenbezogenen Daten. Diese Datenschutzerklärung beschreibt die Gesellschaft, die für die Erhebung, Verarbeitung und Nutzung der personenbezogenen Daten verantwortlich ist, die wir von Ihnen im Zusammenhang mit der Nutzung unserer Smart-TV-Dienste („Smart-TV-Dienste“) erheben, welche Arten von personenbezogenen Daten wir über Sie erheben, was wir damit tut, und Ihre Rechte im Zusammenhang mit unserer Verwendung der personenbezogenen Daten.\n1. Verantwortliche Stelle\nDie Erhebung, Verarbeitung und Nutzung der von Ihnen bei der Nutzung der Smart-TV-Dienste erhobenen personenbezogenen Daten wird von Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, China („Gesellschaft“) durchgeführt. Beachten Sie bitte, dass wir nicht für alle Datenverarbeitungsvorgänge verantwortlich sind, die im Folgenden aufgeführt werden. Wir haben trotzdem eine Beschreibung der betreffenden Vorgänge in unsere Datenschutzerklärung aufgenommen, da diese Verarbeitung mit Ihrer Nutzung des Smart-TV zusammenhängt.\n2. Einwilligung zur Datenverarbeitung\nEin Teil der Erhebung, Verarbeitung und/oder Nutzung Ihrer personenbezogenen Daten bedarf Ihrer Einwilligung. \nWenn Sie in die Verwendung Ihrer personenbezogenen Daten für den Zweck der Verbesserung der Smart-TV-Dienste eingewilligt haben, hatte Ihre Einwilligung den folgenden Wortlaut:\n„Ich willige ein, in die Erhebung, Verarbeitung und Nutzung meiner Gerätestartzeit, DTV-Kanalliste, Lieblingskanalliste, Besuchszeit, und betrachteten Kanäle für die Zwecke der Analyse des Nutzerverhaltens zur Verbesserung der Smart-TV-Dienste und/oder um zu analysieren, wie viele Online-Nutzer die Gesellschaft pro Tag/Monat/Jahr hat, sowie in die Weitergabe dieser Information an TV-Stationen.“\nWenn Sie in die Nutzung Ihrer personenbezogenen Daten für Werbung, die auf Ihre Interessen zugeschnitten ist, eingewilligt haben, hatte Ihre Einwilligung den folgenden Wortlaut:\n„Ich willige ein, in die Erhebung, Verarbeitung und Nutzung meines Kundentyps und Landes für den Zweck, passende Werbung zu erhalten.“\nDie Einwilligung ist freiwillig und Sie können die Smart-TV-Dienste auch nutzen, wenn Sie nicht einwilligen. Allerdings kann es sein, dass Sie Werbung und andere Inhalte sehen, die nicht auf Ihre Vorlieben zugeschnitten sind. Unabhängig von Ihrer Einwilligung behält sich die Gesellschaft das Recht vor, die oben genannten Daten im gesetzlich erlaubten Umfang zu erheben, zu verarbeiten und/oder zu nutzen.\nSie können Ihre vorstehende Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Sie können einer Nutzung Ihrer personenbezogenen Daten für Marketing, Markt- oder Meinungsforschung sowie einer Anpassung der Smart-TV-Dienste an Ihre Bedürfnisse widersprechen. Um Ihre Einwilligung zu widerrufen und/oder zu widersprechen, ändern Sie bitte die Privatsphäre-Einstellungen Ihres Smart-TV entsprechend.\n3. Erhobene personenbezogene Daten\nUnabhängig von Ihrer Einwilligung erhebt, verarbeitet, speichert und nutzt die Gesellschaft die folgenden Datenkategorien:\nDevice-ID: In Ihrem Smart-TV ist eine feste, eindeutige Nummer gespeichert, die es uns ermöglicht, den Smart-TV zu identifizieren und zu authentifizieren, wenn Sie die Smart-TV-Dienste nutzen. Diese Nummer wird Device-ID genannt. Die Device-ID wird unserem Service-Partner zur Verfügung gestellt, um Ihnen die Smart-TV-Dienste zur Verfügung zu stellen. Wir stellen die Device-ID auch ausgewählten Content-Partnern für Authentifizierungszwecke zur Verfügung. Diese Content-Partner nutzen die Device-ID, um Ihren Smart-TV für den Zugang zu Diensten, die von einem Content-Partner zur Verfügung gestellt werden, zu authentifizieren.\nIP-Adresse und MAC-Adresse: Ihrem Smart-TV wird bei Zugriff auf das Internet eine IP-Adresse zugewiesen. Diese IP-Adresse wird an uns übermittelt und jedes Mal von uns verarbeitet, wenn der Smart-TV Informationen oder Daten von den Smart-TV-Diensten anfordert. Wenn sich Ihr Smart-TV hinter einem Router befindet (z.B. in einem lokalen Heimnetzwerk oder einem lokalem WLAN), können wir die IP-Adresse dieses Routers erheben und verarbeiten. Die MAC-Adresse ist eine eindeutige Nummer, die jeder Netzwerkschnittstelle Ihres Smart-TV zugewiesen ist. Die MAC-Adresse wird ebenfalls von uns erhoben und verarbeitet, wenn der Smart-TV Informationen oder Daten von den Smart-TV-Diensten anfordert.\nService-Request-Daten: Immer wenn Sie Ihren Smart-TV mit dem Internet verbinden und einschalten, wird er sich automatisch mit den Smart-TV-Diensten verbinden, die von unserem Service-Partner verwaltet werden. Ihr Smart-TV wird dann als zum Zugang zu den Smart-TV-Diensten zertifiziert authentifiziert. Für Authentifizierungszwecke speichern die Smart-TV-Dienste bezogen auf Ihren Smart-TV eines oder mehrere eindeutige numerische Kennzeichen. Bei der Verbindung mit den Smart-TV-Diensten, wird der Smart-TV die ihm zugewiesene IP-Adresse und gerätespezifische Informationen übermitteln (Smart-TV-Modell, Software-Version), um zu prüfen, ob Software-Aktualisierungen verfügbar sind. \nDienste-Einstellungen: Im Rahmen der gewöhnlichen Funktionen der Smart-TV-Dienste können Sie die Reihenfolge, in der Apps von den Smart-TV-Diensten angezeigt werden, manuell festlegen. Unser Service-Partner wird Ihre Anordnung und andere Einstellungen, die Sie während der Nutzung der Smart-TV-Dienste einstellen können, speichern. Diese Informationen werden mit der Device-ID verknüpft.\nGerätespezifische Informationen: Der Smart-TV speichert verschiedene Informationen über sich selbst und seine Konfiguration. Diese Informationen beinhalten die Art des Smart-TVs, die Version des Betriebssystems des Smart-TV, seine Bildschirmauflösung, die Project-ID (d.h. Informationen, die Konfigurationsdateien betreffen), den User-Agent, Browser-Namen, die Browser-Version und die Sprache und das Land, die im Smart-TV eingestellt wurden. Diese Informationen werden von uns verwendet und unserem Service-Partner und unseren Content-Partnern zur Verfügung gestellt.\nWerbung: Die Smart-TV-Dienste können Werbung anzeigen. Diese Werbung wird von uns oder von Dritten ausgeliefert, die von uns zugewiesenes Werbematerial nutzen. Die gesamte Werbung wird über unseren Werbeserver ausgeliefert, der eine koordinierende Rolle für die Auslieferung der Werbung innehat. Unser Werbeserver oder der Werbeserver des Dritten kann ein Cookie auf dem Smart-TV setzen. Weitere Informationen über diese Cookies entnehmen Sie bitte unserer Cookie-Richtlinie.\nService-Partner- und Content-Partner-Traffic: Wenn Sie die Smart-TV-Dienste nutzen, wird Ihr Smart-TV Daten von den Smart-TV-Diensten über das Internet anfordern. Im Rahmen dieser Anfrage werden Ihre IP-Adresse, wie oben beschrieben, und die Sprache und das Land, die in Ihrem Smart-TV eingestellt sind, an unseren Service-Partner übermittelt. Unser Service-Partner wird die betreffenden Daten im Einklang mit seiner Datenschutzerklärung verarbeiten.\nNutzung des Zweitbildschirms: Wenn Sie unsere Zweitbildschirm-Anwendung nutzen, werden die von Ihnen in der Anwendung aktivierten Bedienelemente und die Landes- und Spracheinstellungen, DTV-Kanalliste, Lieblingskanallisten, Terminlisten, Device-ID, der gegenwärtige Kanal, die Protokoll-Version und IP-Adresse Ihres Smart-TV von uns erhoben und auf unseren Servern verarbeitet. Unsere Server werden Ihren Smart-TV dann wie von Ihnen in der Zweitbildschirm-Anwendung gewählt, steuern.\nHbbTV - „Roter Knopf“: TV-Stationen („Stationen“) können mit ihrem TV-Signal zusätzliche Informationen senden. Wenn der Smart-TV in solchen zusätzlichen Informationen bestimmte Anweisungen erhält und wenn er mit dem Internet verbunden ist, wird der Smart-TV ein Bild oder eine kleine Seite von der Website der Station herunterladen und zusammen mit dem Hinweis anzeigen, den „Roten Knopf“ auf Ihrer Fernbedienung zu drücken, wenn Sie zusätzliche, von der Station angebotene, Dienste nutzen wollen. Dies passiert jedes Mal, wenn Sie umschalten. Wenn der Smart-TV das Bild von der Website der Station herunterlädt, wird er einige personenbezogene Daten übermitteln, d.h. die DTV-Kanalliste, den gegenwärtigen Kanal, die Sendungsinformationstabelle, die TV-Zeit, die IP-Adresse Ihres Smart-TV und auf dem Smart-TV gespeicherte Cookies (falls vorhanden). Die Station ist für die Erhebung, Verarbeitung und/oder Nutzung dieser Daten verantwortlich. Darüber hinaus kann die Station andere personenbezogene Daten über Sie erheben, wenn Sie zusätzliche Dienste nutzen, die von einer Station über den Roten Knopf angeboten werden (z.B. welche On-Demand-Videos Sie anschauen, die Nachrichten die Sie lesen, usw.).\n4. Zwecke für die wir Ihre personenbezogenen Daten verarbeiten und/oder nutzen\nWir verwenden erhobene Daten für die folgenden Zwecke:\n• Bereitstellung der Dienste: Wir nutzen die IP-Adresse und MAC-Adresse, die Device-ID, die Version des Betriebssystems des Smart-TV, die Art Ihres Smart-TV und seine Bildschirmauflösung, die Project-ID (d.h. Informationen betreffend Konfigurationsdateien), Ihre DTV-Kanalliste, angesehenen Kanäle, Zeitzone, Land- und Spracheinstellungen, um Ihrem Smart-TV Zugang zu den Smart-TV-Diensten und anderen, von unseren Content-Partnern bereitgestellten Diensten zu gewähren. Die Zwecke beinhalten (ohne hierauf beschränkt zu sein) die Authentifizierung, die Bereitstellung ortsbasierter Dienste für Sie (z.B. Wettervorhersagen), die Handhabung von Missbrauch, den Umgang mit sicherheitsrelevanten Ereignissen, die Überwachung der Verfügbarkeit der Smart-TV-Dienste, und die Bereitstellung von Sicherungen der Nutzereinstellungen.\n• Authentifizierung: Wir nutzen die Device-ID und MAC-Adresse für Authentifizierungs-Zwecke.\n• Software-Aktualisierungen: Jedes Mal wenn Ihr Smart-TV eingeschaltet wird, wird er uns die IP-Adresse, Device-ID, Software-Version, die Art Ihres Smart-TV, die Project-ID (d.h. Konfigurationsdateien), Nutzer-ID und Seriennummer bereitstellen, um Ihnen passende Software-Aktualisierungen anzubieten und zur Verfügung zu stellen.\n• Verbesserung der Smart-TV-Dienste: Wir nutzen aggregierte und anonymisierte Nutzungsdaten (d.h. Daten über Ihre Interaktion mit den Smart-TV-Diensten), um die Nutzererfahrung der Smart-TV-Dienste zu verbessern.\n• Anzeigen von Werbung: Wir nutzen die Informationen in Werbe-Cookies, um dem System eine Protokollierung zu erlauben, welche Werbung auf Ihrem Smart-TV schon angezeigt wurde; dies geschieht, um sicherzustellen, dass Sie nicht zu viel gleiche Werbung empfangen und um uns in die Lage zu versetzen, unseren kommerziellen Vereinbarungen mit unseren Werbepartnern nachzukommen. Externe Werbetreibende, die auf den Smart-TV-Diensten oder Websites der Content-Partner nach Koordination durch unseren Werbeserver Werbung anzeigen, können auch Cookies nutzen, um Ihnen über mehrere Websites zu folgen und Werbung anzuzeigen, die Ihren persönlichen Vorlieben entspricht.\n• Optimierung von Werbung: Wir nutzen Daten in Hinblick auf Werbeanzeigen und Klicks auf Werbeanzeigen, um das Werbeerlebnis von Verbrauchern im Rahmen der Smart-TV-Dienste zu optimieren.\n• Vergünstigungen: Wir stellen die Device-ID ausgewählten Content-Partnern zur Verfügung, um es diesen Partnern zu ermöglichen, zu ermitteln, in welchem Umfang sie Ihnen freien Zugriff auf Videos aus ihrem Video-on-Demand-Bestand gewähren können.\n• Rechtsdurchsetzung: Es kann sein, dass von uns verlangt wird, Daten an zuständige Vollzugsbehörden oder Gerichte herauszugeben. Wir werden dies nur auf Grundlage eines bindenden Rechtsinstruments wie einer Beschlagnahmeverfügung oder einer richterlichen Anordnung tun, die von uns verlangt, mit den betreffenden Behörden zusammenzuarbeiten.\nDie Nutzung der Smart-TV-Dienste ist unter einem Pseudonym möglich, es sei denn, bestimmte Dienste verlangen, dass Sie Ihren Namen und/oder Ihre E-Mail-Adresse angeben.\n5. Empfängerkategorien\nDie Gesellschaft gibt Ihre, während Ihrer Nutzung der Smart-TV-Dienste erhobenen, personenbezogenen Daten nur an folgende Dritte weiter:\n• An Drittanbieter von Smart-TV-Diensten, wenn Sie solche Dienste anfordern (wenn Sie z.B. die Netflix-Anwendung auf Ihrem Smart-TV starten, können wir Ihre IP-Adresse, MAC-Adresse, Software-Version und den Namen des TV-Modells an Netflix weitergeben).\n• An externe Content-Partner, wenn Sie bestimmte Inhalte anfordern, die von diesen Content-Partnern zur Verfügung gestellt werden (um Ihnen z.B. den GoLive-IP-TV-Service zur Verfügung zu stellen, können wir die Art Ihres Smart-TVs, Ihre IP-Adresse und Ihre Spracheinstellungen an die Gesellschaft weitergeben, die den GoLive-Service bereitstellt).\n• Soweit Sie oben in die Weitergabe bestimmter personenbezogener Daten an Dritte eingewilligt haben, wird die Gesellschaft Ihre personenbezogenen Daten an solche Dritte weitergeben.\n• An Outsourcing-Dienste-Anbieter die die Gesellschaft als Auftragsdatenverarbeiter bei der Bereitstellung der Smart-TV-Dienste unterstützen.\nDie Gesellschaft gibt Ihre personenbezogenen Daten an andere Dritte nur weiter, wenn die Gesellschaft auf rechtlicher Grundlage hierzu verpflichtet ist (z.B. an Gerichte oder Strafverfolgungsbehörden), Sie in die Weitergabe eingewilligt haben oder die Weitergabe aus anderen Gründen nach anwendbarem Recht zulässig ist.\n6. Länder in denen Ihre Daten verarbeitet werden\nDie Gesellschaft und/oder einige der oben aufgelisteten Empfänger Ihrer personenbezogenen Daten können sich außerhalb des europäischen Wirtschaftsraums befinden (d.h. in den folgenden Ländern: Volksrepublik China, Vereinigte Staaten von Amerika). Daher können Ihre personenbezogenen Daten in Ländern verarbeitet werden, die nicht als Länder anerkannt sind, die über ein angemessenes Schutzniveau für personenbezogene Daten gemäß Richtlinie 95/46/EG des Europäischen Parlaments und des Rates vom 24. Oktober 1995 zum Schutz natürlicher Personen bei der Verarbeitung personenbezogener Daten und zum freien Datenverkehr verfügen.\n7. Ihre Rechte\nSie können die Gesellschaft kontaktieren, um Informationen über Ihre von der Gesellschaft verarbeiteten personenbezogenen Daten zu erhalten und/oder um Ihre gesetzlichen Rechte betreffend die Auskunft, Berichtigung, Löschung und Sperrung Ihrer personenbezogenen Daten auszuüben; und/oder um der Verarbeitung Ihrer personenbezogenen Daten für die Zwecke des Marketing und/oder der Markt- oder Meinungsforschung zu widersprechen.\n8. Änderungen der Datenschutzerklärung\nUm unsere Smart-TV-Dienste zu verbessern, können Änderungen dieser Datenschutzerklärung nötig sein – z.B. bei der Einführung neuer Technologien oder der Einführung neuer Dienste. Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu ändern oder zu ergänzen.\n9. Kontaktangaben\nFalls Sie irgendwelche Fragen in Bezug auf die Datenschutzerklärung haben oder sich über unseren Umgang mit Ihren personenbezogenen Daten beschweren wollen, kontaktieren Sie uns bitte unter einer der folgenden Kontaktangaben:\nE-Mail: FRsupport@tcl.com\nVersion: 1.0\n"];
var privacyPolicyTerms = [
    "Smart-TV-Dienste aktivieren.",
    "Ich stimme der Erfassung, Verarbeitung und Nutzung der Geräte-Startzeit, DTV-Senderliste, Favoritenliste, Verweilzeit und Liste eingeschalteter Sender zum Zweck der Analyse von Nutzergewohnheiten für die Verbesserung von Dienstleistungen und/oder zur Analyse der täglichen/ monatlichen/ jährlichen Anzahl von Online-Nutzern und der Freigabe dieser Informationen an Fernsehsender, zu.",
    "Programmempfehlung aktivieren.",
    "Verwendung eines zweiten Bildschirms für Mobilgeräte aktivieren.",
    "Automatische Software-Aktualisierung aktivieren.",
    "Freeview Play-Dienst aktivieren."
];
var privacyPolicyTips = [
    "Alle Smart-TV-Dienste werden deaktiviert.",
    "Die bei der Verwendung des integrierten Tuners von den Fernsehsendern bereitgestellten HbbTV-Dienste werden deaktiviert.",
    "Inhalt und Programmempfehlung werden deaktiviert.",
    "Verwendung eines zweiten Bildschirms deaktivieren.",
    "Fernsehgerät sucht nicht automatisch nach Software-Aktualisierungen und neuen Funktionen.",
    "Freeview Play-Inhalt wird deaktiviert."
];
var privacyPolicyRemind = "Markieren Sie bitte das entsprechende Kontrollkästchen in den Einstellungen.";
var set = "Aktivieren";
var copyShopDemoTips = ["Mit USB verbunden, möchten Sie das Video auf den USB-Stick kopieren?","Kopiere das Video auf den USB-Stick","Das Video wurde erfolgreich kopiert!","Fehler beim Kopieren des Videos!"];
var dataDeletionWords = ["Löscht Ihre Daten des Smart-TV-Dienstes auf den Backend-Servern.","Hinweise: Die Daten bezüglich Ihres Smart-TV-Benutzers werden einen Monat nach Anhaken dieses Objekts gelöscht. Bitte beachten Sie, dass sich die Löschung nicht auf die lokal in Ihrem TV gespeicherten Daten bezieht.","Keine weiteren Reportdaten an den Smart-TV-Server.","Hinweise:  Nachdem Sie dieses Objekt angehakt haben, werden keine weiteren Daten von Ihnen an den Server gesendet, die in Zusammenhang mit der Nutzung des Smart-TV-Dienstes stehen. Ihr TV wird keine weiteren empfohlenen Dienste empfangen.","Wenn Sie mehr Informationen beziehen möchten, dann besuchen Sie bitte unsere Homepage www.tcl.eu"];
var miracastWords = ["Schnurlose Verbindung","Android-Handy am Fernseher spiegeln","Für Verbindungsaufbau hier klicken","Diese Funktion ist nur am Android-Handy verfügbar"];
var miracastTips = ["Verbindungsschritte","Offene Systemeinstellungen","Weitere Verbindungsmöglichkeiten \n / Andere schnurlose Verbindungen","Schnurlose Anzeige auswählen","Für Verbindungsaufbau anklicken \n Auf erfolgreiche Suche warten"];
var termsAndConditions = ["\nAllgemeine Geschäftsbedingungen\n\nAn den Ihnen durch dieses TV Set (dieses „Gerät“) zur Verfügung gestellten Inhalten und Leistungen (zusammen die „Lizenzierten Anwendungen“) wird Ihnen eine Lizenz gewährt, damit sie diese gemäß diesen allgemeinen Geschäftsbedingungen nutzen können; die Lizenzierten Anwendungen werden nicht an Sie verkauft. Die Anbieter der Lizenzierten Anwendungen (jeweils ein „Anwendungs-Anbieter“) behalten sich alle Rechte vor, die Ihnen nicht ausdrücklich hierin gewährt werden. \n\n1.Lizenzumfang\n\nDie Ihnen von dem jeweiligen Anwendungs-Anbieter gewährte Lizenz für eine Lizenzierte Anwendung ist auf eine nicht-übertragbare Lizenz zur Nutzung der Lizenzierten Anwendung auf dem Ihnen gehörenden oder von Ihnen kontrollierten Gerät beschränkt. Sie dürfen die Lizenzierte Anwendung nicht über ein Netzwerk verteilen oder zur Verfügung stellen, von dem aus sie von mehreren Geräten zur selben Zeit genutzt werden könnte. Sie dürfen die Lizenzierte Anwendung nicht vermieten, verleasen, verleihen, verkaufen, weiter verteilen oder unterlizenzieren. \n\nAlle Lizenzierten Anwendungen und alle darin enthaltenen Inhalte, auf die über dieses Gerät zugegriffen werden kann, gehören dem Anwendungs-Anbieter und sind immaterialgüterrechtlich geschützt. Sofern nicht anderweitig gesetzlich erlaubt, dürfen Sie die Lizenzierten Anwendungen oder Updates oder Teile davon nicht ändern, kopieren, dekompilieren, zurückentwickeln, disassemblieren, neu veröffentlichen, hochladen, posten, übertragen, übersetzen, versuchen, den Quellcode zu ermitteln, abgeleitete Werke erstellen oder sonst verwerten. Sofern Sie gegen diese Beschränkungen verstoßen, können Sie strafrechtlich verfolgt und Schadensersatzansprüchen ausgesetzt werden. Die Lizenzbestimmungen werden auf alle von dem Anwendungs-Anbieter zur Verfügung gestellten Upgrades, die die ursprünglichen Lizenzierten Anwendungen ersetzen und/oder ergänzen, Anwendung finden, es sei denn ein solches Upgrade wird mit separaten Lizenzbestimmungen zur Verfügung gestellt, in welchem Fall diese gelten werden. Sie sind für sämtliche ggf. anfallende Kosten für das Upgraden der Lizenzierten Anwendung alleine verantwortlich.\n\n2.Materialien Dritter\n\nDie Lizenzierte Anwendung kann Zugriff auf Dienste und Websites des Anwendungs-Anbieters und Dritter gewähren (zusammen die „Dienste“). Durch die Inanspruchnahme von Diensten können Sie mit Inhalten in Berührung kommen, die als beleidigend, unanständig oder anstößig empfunden werden können, ohne dass sie als solche gekennzeichnet sind. Außerdem können Suchergebnisse oder Eingaben einer bestimmten URL automatisch und unabsichtlich Links oder Verweise auf anstößiges Material generieren. Dennoch übernehmen der Hersteller dieses Geräts (der „Hersteller“) und der Anwendungs-Anbieter Ihnen gegenüber keine Haftung für Inhalte, die als beleidigend, unanständig oder anstößig empfunden werden können.\n\nDer Hersteller ist nicht dafür verantwortlich, die Inhalte, Richtigkeit, Vollständigkeit, Aktualität, Gültigkeit, Beachtung des Urheberrechtsschutzes, Rechtmäßigkeit, Qualität oder sonstige Aspekte der Dienste zu prüfen oder zu bewerten. Der Hersteller gewährleistet oder befürwortet nicht und übernimmt keinerlei Haftung oder Verantwortung Ihnen oder einer sonstigen Person gegenüber für die Dienste.\n\nDie Dienste können immaterialgüterrechtlich oder sonst geschützte Inhalte, Informationen und Material (zusammen „Materialien Dritter“) enthalten und Sie dürfen solche Materialien Dritter in keiner anderen Weise als für die erlaubte Nutzung der Dienste nutzen. Soweit nicht anderweitig gesetzlich erlaubt, dürfen Sie die Materialien Dritter nicht vervielfältigen, ändern, vermieten, verleasen, verleihen, verkaufen, verteilen oder in irgendeiner Form abgeleitete Werke hiervon erstellen und Sie dürfen die Dienste in keiner nicht-autorisierten Art und Weise nutzen. Sie dürfen die Dienste in keinem Fall nutzen, um andere zu belästigen, zu beschimpfen, sie zu stalken, ihnen zu drohen, sie zu diffamieren oder sonst in ihren Rechten zu verletzen und der Hersteller ist weder für eine solche Nutzung durch Sie, noch für etwaige belästigende, drohende, diffamierende, beleidigende oder illegale Nachrichten oder Übermittlungen verantwortlich, die Sie ggf. als Reaktion auf Ihre Nutzung der Dienste erhalten.\n\n3.Keine Gewährleistung\n\nAlle Lizenzierten Anwendungen und Dienste werden „wie besehen“ und „wie verfügbar“ ohne irgendwie geartete ausdrückliche oder implizierte Gewährleistung zur Verfügung gestellt. Der Hersteller schließt ausdrücklich sämtliche ausdrückliche und implizierte Gewährleitung und Bedingungen im Hinblick auf die Lizenzierten Anwendungen und Dienste aus, einschließlich aber nicht ausschließlich für die Gebrauchstauglichkeit, zufriedenstellende Qualität, Eignung zu einem bestimmten Zweck, Richtigkeit, ungestörte Nutzung und Nicht-Verletzung von Rechten Dritter. Der Hersteller übernimmt keine Garantie für die Richtigkeit, Gültigkeit, Aktualität, Rechtmäßigkeit oder Vollständigkeit der Lizenzierten Anwendung oder Dienste, die über das Gerät zur Verfügung gestellt werden, und gewährleistet nicht, dass das Gerät, die Lizenzierten Anwendungen oder Dienste Ihren Anforderungen genügen oder dass der Betrieb der Lizenzierten Anwendungen oder Dienste störungs- und fehlerfrei erfolgt, oder dass Mängel der Lizenzierten Anwendungen oder Dienste behoben werden. Sollten sich die Lizenzierte Anwendungen oder Dienste als mangelhaft herausstellen, haben Sie die gesamten Kosten der notwendigen Wartung, Reparatur oder Korrektur zu tragen.\n\nDie Lizenzierten Anwendungen und Dienste können jederzeit ohne Ankündigung geändert, ausgesetzt, entfernt, beendet oder unterbrochen, oder der Zugang zu ihnen verwehrt werden, und der Hersteller macht keine Zusicherung und leistet keine Gewähr, dass die in den Lizenzierten Anwendungen und Diensten inkludierten Inhalte und Leistungen für irgendeine Zeit verfügbar bleiben. Solche Inhalte und Leistungen werden von Dritten über Netzwerke und Sendeanlagen übermittelt, über die der Hersteller keine Kontrolle hat. Ohne die Allgemeingültigkeit des Vorstehenden einzuschränken, lehnt der Hersteller sämtliche Verantwortung und Haftung für jegliche Änderungen, Unterbrechungen, Behinderungen, Entfernungen oder Aussetzungen von Inhalten oder Leistungen, die über das Gerät zur Verfügung gestellt werden, ab. Der Anwendungs-Anbieter und andere Anbieter der Dienste behalten sich das Recht vor, jederzeit ohne Ankündigung jede Lizenzierte Anwendung oder Dienste zu ändern, auszusetzen, zu entfernen, oder den Zugang zu ihnen zu deaktivieren. Der Hersteller kann auch in jedem Fall ohne Ankündigung oder Haftung die Nutzung oder den Zugang zu bestimmten Lizenzierten Anwendungen oder Diensten beschränken. \n\nDer Hersteller erbringt keinen Kundenservice im Zusammenhang mit den Lizenzierten Anwendungen und Diensten. Etwaige Fragen oder Servicewünsche im Hinblick auf die Lizenzierten Anwendungen und Dienste sollten unmittelbar an den jeweiligen Anbieter gerichtet werden.\n\n4.Erhebung und Nutzung von Informationen\n\nDer Hersteller, der Anwendungs-Anbieter und die Anbieter der Dienste können technische Daten und zugehörige Informationen, einschließlich aber nicht ausschließlich technische Informationen über dieses Gerät, System- und Anwendungssoftware, und Peripherie erheben und nutzen, um die Erbringung von Softwareupdates, Produktsupport und andere etwaige Leistungen im Zusammenhang mit dem Gerät und der Lizenzierten Anwendung an Sie zu erleichtern. Der Hersteller, ddieer Anwendungs-Anbieter und die Anbieter der Dienste können solche Informationen nutzen, um ihre Produkte zu verbessern oder um Ihnen gegenüber Leistungen und Technologien zu erbringen, solange Sie hierbei nicht persönlich identifiziert werden. Für weitergehende Informationen zur Erhebung und Nutzung von Informationen besuchen Sie bitte unsere Datenschutzerklärung http://www.tcl.eu/en/. \n\n5.Nichtverfügbarkeit bestimmter Funktionen\n\nAufgrund von Beschränkungen des Anwendungs-Anbieters, können bestimmte Funktionen, Anwendungen und Dienste auf diesem Gerät (einschließlich dessen Peripheriegeräten) oder in bestimmten Regionen nicht verfügbar sein. Einige Funktionen auf diesem Gerät können zudem separat zu erwerbende zusätzliche Peripheriegeräte oder Mitgliedsbeiträge erfordern.\n\n6.Haftungsbeschränkung\n\nSoweit nicht gesetzlich verboten, haftet der Hersteller unter keinen Umständen, einschließlich bei Fahrlässigkeit, weder bei einer Vertragspflichtverletzung noch aus Delikt für etwaige direkte, indirekte, Neben-, Sonder- oder Folgeschäden, Rechtsanwaltsgebühren, Auslagen oder sonstige Schäden, die aus oder im Zusammenhang mit der Nutzung des Geräts, einer Lizenzierten Anwendung oder eines Dienstes durch Sie oder einen Dritten, oder einer darin enthaltenen Information, resultiert; dies gilt selbst bei Hinweis auf die Möglichkeit eines solchen Schadens. \n\nDer Hersteller haftet nur bei Vorsatz und grober Fahrlässigkeit."];
var privacyNotice = ["\n\nWir respektieren Ihre Privatsphäre beim Umgang mit Ihren personenbezogenen Daten. Diese Datenschutzerklärung beschreibt die Stelle, die für die Verarbeitung personenbezogene Daten verantwortlich ist, die wir von Ihnen im Zusammenhang mit der Nutzung unserer Smart-TV-Services („Services“) erheben, welche Kategorien personenbezogene Daten wir über Sie erheben, was wir damit tut, und Ihre Rechte bezüglich unserer Verwendung der personenbezogenen Daten.\n\n1.	Verantwortlicher und Vertreter in der Europäischen Union\n\nDie Erhebung, Verarbeitung und Nutzung der von Ihnen bei der Nutzung der Services erhobenen personenbezogenen Daten erfolgt durch Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, China („Unternehmen“). Unsere Kontaktdaten sowie die Kontaktdaten unseres Vertreters in der Europäischen Union finden Sie nachfolgend unter Ziffer 12. Beachten Sie bitte, dass wir nicht für alle Datenverarbeitungsprozesse verantwortlich ist, die nachfolgend beschrieben werden. Wir haben dennoch eine Beschreibung der jeweiligen Aktivitäten in unsere Datenschutzerklärung aufgenommen, da die Verarbeitung mit Ihrer Nutzung des Smart-TVs zusammenhängt.\n\n2.	Einwilligung in die Datenverarbeitung\n\nManche Datenverarbeitungen, wie z.B. die Nutzung Ihrer personenbezogenen Daten zur Verbesserung der Services, bedürfen Ihrer Einwilligung.\n\nDie Einwilligung ist freiwillig und Sie können die Services auch nutzen, wenn Sie nicht einwilligen. Allerdings kann es sein, dass Sie Inhalte sehen, die nicht auf Ihre Vorlieben zugeschnitten sind. Unabhängig von Ihrer Einwilligung behalten wir uns das Recht vor, Ihre Daten im gesetzlich erlaubten Umfang zu verarbeiten.\n\nSie können Ihre Einwilligung jederzeit widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt. Um Ihre Einwilligung zu widerrufen und/oder zu widersprechen (vgl. Ziffer 10 und den Anhang „Ihre Rechte“ zu Ihrem Widerspruchsrecht), ändern Sie bitte die Privatsphäre-Einstellungen Ihres Smart-TVs entsprechend.\n\n3.	Spezielle Kategorien personenbezogener Daten\n\nWir verarbeiten insbesondere die folgenden Datenkategorien:\n\nDevice-ID: Ihr Smart-TV speichert eine feststehende eindeutige Nummer, die es uns ermöglicht, den Smart-TV zu identifizieren und zu authentifizieren, wenn Sie die Services nutzen. Diese Nummer heißt Device-ID.\n\nIP-Adresse und MAC-Adresse: Ihrem Smart-TV wird bei Zugriff auf das Internet eine IP-Adresse zugewiesen. Wenn sich Ihr Smart-TV hinter einem Router befindet (z.B. in einem lokalen Heimnetzwerk oder einem lokalem WLAN), können wir die IP-Adresse dieses Routers verarbeiten. Die MAC-Adresse ist eine eindeutige Nummer, die jeder Netzwerkschnittstelle Ihres Smart-TVs zugewiesen ist.\n\nGerätespezifische Informationen: Der Smart-TV speichert verschiedene Informationen über sich selbst und seine Konfiguration. Diese Informationen beinhalten die Art des Smart-TVs, die Version des Betriebssystems des Smart-TVs, seine Bildschirmauflösung, die Project-ID (d.h. Informationen, die Konfigurationsdateien betreffen), den User-Agent, Browser-Namen, Browserversion sowie die Sprache und das Land, die im Smart-TV eingestellt wurden.\n\nDiese Informationen werden von uns zu den nachfolgend beschriebenen Zwecken verwendet und unserem Service-Partner und unseren Content-Partnern zur Verfügung gestellt.\n\n4.	Zwecke für die wir Ihre personenbezogenen Daten verarbeiten und/oder nutzen und Rechtsgrundlagen\n\nNachfolgend werden die Zwecke, für die wir Ihre personenbezogenen Daten verarbeiten, und die entsprechenden Rechtsgrundlagen beschrieben. Soweit vertragliche Zwecke als Rechtsgrundlage genannt werden, können wir die Services nicht erbringen, wenn Sie uns die entsprechenden Daten nicht zur Verfügung stellen. Soweit Ihre Einwilligung als Rechtsgrundlage genannt wird, steht es Ihnen frei, die Einwilligung zu erteilen oder nicht zu erteilen. Wenn Sie Ihre Einwilligung nicht erteilen, werden wir Ihre personenbezogenen Daten nicht für den entsprechenden Zweck verarbeitet.\n\n•	Erbringung der Services: Wir nutzen die IP-Adresse und MAC-Adresse, Device-ID, die Version des Betriebssystems des Smart-TVs, Art des Clients Ihres Smart-TVs und seine Bildschirmauflösung, die Project-ID (d.h. Informationen betreffend Konfigurationsdateien), Ihre DTV-Kanalliste, angesehene Kanäle, Zeitzone, Land- und Spracheinstellungen, um Ihrem Smart-TV Zugang zu den Services und von unseren Content-Partnern bereitgestellten Diensten zu gewähren. Die Zwecke beinhalten (ohne hierauf beschränkt zu sein) die Bereitstellung ortsbasierter Dienste für Sie (z.B. Wettervorhersagen), die Handhabung von Missbrauch, den Umgang mit sicherheitsrelevanten Ereignissen, die Überwachung der Verfügbarkeit der Services und die Erbringung von Back-up Leistungen bezüglich der Benutzereinstellungen.\n\nWenn Sie die Services nutzen, wird Ihr Smart-TV über das Internet Daten von den Services anfragen. Als Teil dieser Anfragen wird Ihre oben beschriebene IP-Adresse sowie Informationen über die in Ihrem Smart TV vorgenommenen Sprach- und Landeseinstellungen an unseren Service Partner übermittelt. Unser Service Partner wird die entsprechenden Daten im Einklang mit seiner Datenschutzerklärung verarbeiten. \n\nRechtsgrundlage für die entsprechende Verarbeitung Ihrer personenbezogenen Daten sind vertragliche Zwecke gemäß Artikel 6 (1) b) der Datenschutzgrundverordnung („DSGVO“).\n\n•	Einstellungen der Services: Sie können die Reihenfolge, in der die Apps durch die Services dargestellt werden, manuell ändern. Dies ist Teil der normalen Funktion der Services. Unser Service Partner wird diese Reihenfolge und andere Einstellungen, die Sie bei Nutzung der Services vornehmen, speichern. Diese Informationen werden mit Ihrer Device-ID verknüpft.\n\nRechtsgrundlage für die entsprechende Verarbeitung Ihrer personenbezogenen Daten sind vertragliche Zwecke gemäß Artikel 6 (1) b) der DSGVO.\n\n•	Authentifizierung: Immer, wenn Sie Ihren Smart-TV mit dem Internet verbinden und Ihren Smart-TV einschalten, wird er sich automatisch mit den Services verbinden, die von unserem Service Partner verwaltet werden. Ihr Smart-TV wird in diesem Fall dahingehend authentifiziert, dass er für den Zugriff auf die Services zugelassen ist. Für Authentifizierungszwecke speichern die Services eine oder mehrere eindeutige numerische Kennungen in Bezug auf Ihren Smart-TV. Wir nutzen die Device-ID und MAC-Adresse für Authentifizierungszwecke. Außerdem stellen wir die Device-ID ausgewählten Content Partnern zu Authentifizierungszwecken zur Verfügung. Diese Content Partner nutzen die Device-ID zur Authentifizierung Ihres Smart-TVs beim Zugriff auf die von dem Content Partner zur Verfügung gestellten Leistungen.\n\nRechtsgrundlage für die entsprechende Verarbeitung Ihrer personenbezogenen Daten sind vertragliche Zwecke gemäß Artikel 6 (1) b) der DSGVO.\n\n•	Ferndiagnostik: Als Teil der Services stellen wir Ihnen Ferndiagnostikleistungen zur Verfügung. Hierfür verarbeiten wir die Device-ID, Gerätenummer, Seriennummer, MAC-Adresse sowie Fehlerprotokolle, Fehlercodes und Fehlerbeschreibungen, die uns automatisch von dem fehlerhaften Modul (Anwendung, Middleware-System) zur Verfügung gestellt werden.\n\nDarüber hinaus kann ein Kundendienstmitarbeiter, wenn Sie unseren Kundendienst anrufen, nach vorheriger Einwilligung auch aus der Ferne auf Ihr TV-Gerät zugreifen und weitere Ferndiagnostikleistungen durchführen. In diesem Fall erhält der Kundendienstmitarbeiter Zugriff auf Ihr TV-Gerät und Ihre Netzwerke, Anwendungen und gespeicherten Dateien und kann die Device-ID, Gerätenummer, Seriennummer, MAC-Adresse, Fehlerprotokolle, Fehlercodes, Fehlerbeschreibungen, Terminal-ID, installierte App-Informationen, Screenshot des TV-Geräts und Informationen zu angeschlossenen USB/Bluetooth-Geräten zur Beurteilung des Zustands des TV-Geräts und der damit verbundenen Anwendungen und Daten verarbeiten. Die Fehlerprotokolle können Informationen wie die Fernsehhistorie, Musikwiedergabelisten und, sofern eine zur Übertragung genutzte Drittanbieter-App die Informationen nicht verschlüsselt hat, den Benutzernamen und das Passwort der App enthalten. Dies dient der Fehlerdiagnose, der Änderung von Systemeinstellungen gemäß Ihrer Anfrage oder der Behebung gemeldeter Probleme. Darüber hinaus können Kundendienstmitarbeiter auf Anfrage eine Fehlerbehebung, Programmausführung oder Installation/Deinstallation von Software, Neukonfiguration und/oder sonstige Service- oder technische Supportarbeiten am TV-Gerät durchführen.\n\nJeglicher Fernzugriff erfolgt erst, nachdem Sie die Fernwartungsfunktion durch Aktivieren des dafür vorgesehenen Kästchens auf Ihrem TV-Gerät aktiviert haben und wird nach der jeweiligen Sitzung beendet.\n\nRechtsgrundlage für die entsprechende Verarbeitung Ihrer personenbezogenen Daten sind vertragliche Zwecke gemäß Artikel 6 (1) b) der DSGVO.\n\n•	Kundendienst: Nach geltendem Recht können Ihnen Gewährleistungs- oder vergleichbare Rechte zur Inanspruchnahme eines Kundendienstes zustehen. TCL Europe, 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, Frankreich ist für die Bearbeitung von Gewährleistungsansprüchen und anderen Kundendienstanfragen und die Verarbeitung Ihrer personenbezogenen Daten in diesem Zusammenhang verantwortlich. Für Kundendienstzwecke ist TCL Europe Verantwortlicher und wir sind für die Verarbeitung Ihrer personenbezogenen Daten in diesem Zusammenhang nicht verantwortlich.\n\nWenn Sie Kundendienstanfragen stellen, können Ihr Name, E-Mail Adresse, Telefonnummer, Serviceanfrage und Ihre in der Rechnung beinhaltete Postadresse erforderlich sein, um Ihnen den Kundendienst anbieten zu können. Diese Informationen können auch durch die Kundendienstpartner unserer Vertriebspartner oder autorisierte Dienstleister erhoben werden, wenn Sie sich an diese wenden. Sie können sich an TCL Europe unter den in Ziffer 12 angegebenen Kontaktdaten wenden, um weitere Informationen über den Schutz personenbezogener Daten im Zusammenhang mit dem Kundendienst zu erhalten.\n\nRechtsgrundlage für die entsprechende Verarbeitung ist die Erfüllung rechtlicher Pflichten gemäß Art. 6 (1) c) DSGVO.\n\n•	T-Channel: Der T-Channel ist die Hauptseite für die Nutzung des Smart-TVs innerhalb eines Linux Betriebssystems (siehe unten für die Nutzung des Android Betriebssystems). Er ermöglicht Ihnen bestimmte Inhalte auszuwählen.\n\nRechtsgrundlage für die Verarbeitung Ihrer personenbezogenen Daten, die für die Nutzung des T-Channels erforderlich sind, sind vertragliche Zwecke gemäß Artikel 6 (1) b) der DSGVO.\n\nVorbehaltlich Ihrer vorherigen Einwilligung, werden wir ebenfalls die Nutzung des T-Channels überwachen d.h.\n\n	Wenn Sie den T-Channel starten, werden wir die Zeit des Öffnens und Verlassens des T-Channels aufzeichnen.\n\n	Wenn Sie ein Video des T-Channels abspielen, werden wir den Namen und die Dauer des Videos aufzeichnen (betrifft nicht Netflix, YouTube oder andere Dienste, die von Dritten zur Verfügung gestellt werden).\n\n	Wenn Sie eine Seite öffnen oder verlassen, werden wir die Verweildauer auf dieser Seite aufzeichnen.\n\n	Wenn Sie den Cursor von einer Stelle zu einer anderen bewegen oder eine Anwendung starten, werden wir dies aufzeichnen.\n\n	Wenn sie eine Anwendung installieren, deinstallieren oder updaten, werden wir dies und den Name der Anwendung aufzeichnen.\n\nWir erheben diese Daten vor allem für Big Data Analysen, um unsere Produkte zu verbessern und Nutzern bessere Content-Services zur Verfügung zu stellen.\n\nRechtsgrundlage für die Verarbeitung Ihrer personenbezogenen Daten in Zusammenhang mit der Überwachung Ihrer Nutzung des T-Channels ist Ihre Einwilligung gemäß Art. 6 (1) a) DSGVO.\n\nWenn Sie einen Android TV erworben haben und das Android Betriebssystem von Google nutzen, werden Ihre personenbezogenen Daten von Google verarbeitet und wir sind hierfür nicht verantwortlich. Beachten Sie bitte Googles Datenschutzerklärung zur Information über die hiermit verbundene Datenverarbeitung und Ihre entsprechenden Rechte.\n\n•	T-Cast: T-Cast ermöglicht Ihnen, Ihr TV-Gerät mit Ihrem Smartphone zu bedienen und Videos, Musik und Bilder, die auf Ihrem Smartphone gespeichert sind, auf dem TV-Gerät zu teilen. T-Cast ermöglicht es darüber hinaus, das Smartphone auf das TV-Gerät zu spiegeln.\n\nDas Herunterladen und die Nutzung der App ist freiwillig. Wenn Sie die App herunterladen und nutzen, werden wir die MAC-Adresse verarbeiten, um zu berechnen, wie viele T-Cast Versionen im Markt genutzt werden. Dies ist erforderlich, um Ihnen diesen Dienst anbieten zu können. Wenn Sie die Zweitbildschirmfunktion verwenden, werden Steuerungsbefehle, die sie in der App aktivieren, und die Landes- und Spracheinstellungen, DTV Kanalliste, Liste Ihrer Lieblingskanäle, Zeitplan, Device ID, aktueller Kanal, die Protokollversion und die IP-Adresse Ihres Smart-TVs erhoben und von uns auf unseren Servern verarbeitet. Unsere Server werden dann Ihren Smart-TV so kontrollieren, wie Sie es in der App vorgeben.\n\nRechtsgrundlage für die entsprechende Verarbeitung Ihrer personenbezogenen Daten sind vertragliche Zwecke gemäß Artikel 6 (1) b) der DSGVO.\n\n•	TCL Assistent: Der TCL-Assistent ist eine Funktion, die es Ihrem TV-Gerät ermöglicht, sich mit Alexa-kompatiblen Geräten (z.B. Echo) zu verbinden, um ein solches Gerät über Ihre Stimme zu steuern. Um diese Funktion nutzen zu können, müssen Sie zunächst Ihr TV-Gerät auf der Amazon Website mit dem TCL-Code registrieren, der sich auf Ihrem TV-Gerät befindet. Sie können dann dem Amazon Alexa-kompatiblen Gerät mündliche Anweisungen erteilen, indem Sie die Mikrofontaste auf der Fernbedienung Ihres TV-Geräts drücken.\n\nWenn Sie den TCL-Assistenten verwenden, erfasst Ihr TV-Gerät Ihre Stimme und übermittelt sie zur Spracherkennung und weiteren Verarbeitung an die Amazon Alexa Cloud. Ihre Daten werden direkt an Amazon übermittelt und es werden keine Daten lokal auf Ihrem TV-Gerät weiterverarbeitet oder gespeichert. Informationen bezüglich der weiteren Verarbeitung Ihrer Daten durch Amazon können Sie Amazons Datenschutzerklärung entnehmen.\n\nRechtsgrundlage für die entsprechende Verarbeitung Ihrer personenbezogenen Daten sind vertragliche Zwecke gemäß Artikel 6 (1) b) der DSGVO.\n\n•	Alexa Spracherkennung (Alexa Voice Recognition (AVS)): AVS ist eine Funktion, die es Ihnen ermöglicht, das TV-Gerät mit Ihrer Stimme zu steuern. Um diese Funktion nutzen zu können, müssen Sie zunächst Ihr TV-Gerät auf der Amazon Website mit dem von Amazon generierten Registrierungscode registrieren. Sie können dem TV-Gerät dann mündliche Anweisungen erteilen, indem Sie die Mikrofontaste auf der Fernbedienung Ihres TV-Geräts drücken. \n\nWenn Sie AVS verwenden, erfasst Ihr TV-Gerät Ihre Stimme und übermittelt sie zur Spracherkennung und weiteren Verarbeitung an die Amazon Alexa Cloud. Ihre Daten werden direkt an Amazon übermittelt und es werden keine Daten lokal auf Ihrem TV-Gerät gespeichert. Informationen bezüglich der weiteren Verarbeitung Ihrer Daten durch Amazon können Sie Amazons Datenschutzerklärung entnehmen.\n\nWenn Sie AVS verwenden, wird der Name Ihres TV-Geräts benötigt, damit wir feststellen können, welches TV-Gerät Sie steuern möchten.\n\nRechtsgrundlage für die entsprechende Verarbeitung Ihrer personenbezogenen Daten sind vertragliche Zwecke gemäß Artikel 6 (1) b) der DSGVO.\n\nDes Weiteren erfassen wir, wie oft und wie lange Sie AVS verwendet haben und welche Funktion innerhalb AVS Sie verwendet haben. Wir erheben diese Informationen, um Produkte zu verbessern und Nutzern bessere Inhaltsdienste anbieten zu können.\n\nRechtsgrundlage für die entsprechende Verarbeitung Ihrer personenbezogenen Daten ist unser berechtigtes Interesse gemäß Artikel 6 (1) f) der DSGVO. Weitere Informationen zur Interessenabwägung sind auf Anfrage erhältlich.\n\n•	Software Updates: Software Updates sind Teil der Services. Daher stellt uns Ihr Smart-TV jedes Mal, wenn er eingeschaltet wird, die IP-Adresse, Device-ID, Gerätenummer, Software-Version, Art des Clients Ihres Smart-TVs, Project-ID (d.h. Konfigurationsdateien), Nutzer-ID und Seriennummer bereit, um zu prüfen, ob Software Updates verfügbar sind und um Ihnen passende Software Updates anzubieten und zur Verfügung zu stellen.\n\nRechtsgrundlage für die entsprechende Verarbeitung Ihrer personenbezogenen Daten sind vertragliche Zwecke gemäß Artikel 6 (1) b) der DSGVO.\n\n•	Rechtsdurchsetzung: Wir können verpflichtet sein, Daten an zuständige Vollzugsbehörden oder Gerichte herauszugeben. Wir werden dies nur auf Grundlage eines bindenden Rechtsinstruments, wie einer Beschlagnahmeverfügung oder einer richterlichen Anordnung, tun, die von uns verlangt, mit den betreffenden Behörden zusammenzuarbeiten.\n\nRechtsgrundlage für die entsprechende Verarbeitung ist die Erfüllung rechtlicher Pflichten gemäß Art. 6 (1) c) DSGVO.\n\nDie Nutzung der Services ist unter Pseudonym möglich, es sei denn, bestimmte Dienste verlangen, dass Sie Ihren Namen und/ oder Ihre E-Mail Adresse angeben.\n\n5.	Privatsphäre und Sicherheit von Kindern unter 16 Jahren\n\nWir verstehen die Wichtigkeit zur Umsetzung besonderer Maßnahmen zum Schutz der Privatsphäre und Sicherheit von Kindern, die unsere Services nutzen. Kinder unter 16 Jahren, oder entsprechendem Mindestalter in der jeweiligen Rechtsordnung, dürfen ihre personenbezogenen Daten nicht über das TV-Gerät oder bei Anrufung des Kundendienstes zur Verfügung stellen, es sei denn, es liegt eine überprüfbare Einwilligung der Eltern vor.\n\nWir können das Alter unserer Nutzer nicht überprüfen, da wir die Geburtsdaten von Nutzern nicht erheben. Wenn uns jedoch auffällt, dass wir persönliche Informationen eines Kindes unter 16 Jahren, oder entsprechendem Mindestalter in der jeweiligen Rechtsordnung, ohne Vorliegen der vorgenannten Voraussetzungen erhoben haben, werden wir Schritte einleiten, um die Informationen so schnell wie möglich zu löschen.\n\n6.	Drittanbieter-Apps\n\nIhr Smart-TV ermöglicht die Nutzung von Apps Dritter, wie Netflix, Youtube oder HbbTV (Red-Button Service, der von Fernsehsendern zur Verfügung gestellt wird). Sie können die Anwendungen aus dem App Store herunterladen oder Drittanbieter-Apps, die bereits auf Ihrem Gerät vorinstalliert sind, aktivieren. Drittanbieter-Apps, die bereits auf Ihrem Gerät vorinstalliert sind, erheben personenbezogene Daten nicht ohne Ihre vorherige Einwilligung. Netflix ist beispielsweise bereits auf Ihrem Gerät vorinstalliert, erhebt jedoch erst Daten, wenn Sie sich mit Ihrem Netflix Benutzerkonto anmelden. HbbTV erhebt Daten erst, wenn Sie Ihre Einwilligung erteilen, indem Sie den vorgesehenen Knopf auf Ihrer Fernbedienung drücken.\n\nWenn Sie eine Drittanbieter-App aktivieren, können Sie betreffende personenbezogene Daten vom Anbieter der App verarbeitet werden. Wir sind für diese Verarbeitung nicht verantwortlich; bitte beachten Sie die Datenschutzerklärung der Drittanbieter-App für Informationen über die Verarbeitung Ihrer Daten und Ihre entsprechenden Rechte.\n\n7.	Empfängerkategorien\n\nWir teilen die während Ihrer Nutzung der Services erhobenen personenbezogenen Daten nur mit dritten Content Partnern, wenn Sie bestimmte Inhalte, die von solchen Content Partnern bereitgestellt werden, abrufen oder mit Dienstleistern als Datenverarbeiter, die uns bei der Erbringung der Services unterstützen.\n\nWir teilen Ihre personenbezogenen Daten mit anderen Dritten nur, wenn wir hierzu rechtlich verpflichtet sind (z.B. mit Gerichten oder Strafverfolgungsbehörden), wenn Sie Ihre Einwilligung zum Teilen der Daten erteilt haben oder wenn das Teilen sonst nach geltendem Recht erlaubt ist.\n\n8.	Länder, in denen Ihre Daten verarbeitet werden\n\nWir und/oder einige der oben aufgelisteten Empfänger Ihrer personenbezogenen Daten können sich außerhalb des Europäischen Wirtschaftsraums befinden (z.B. in der Volksrepublik China oder den Vereinigten Staaten von Amerika). Daher können Ihre personenbezogenen Daten in Ländern verarbeitet werden, in denen die Datenschutzgesetzgebung ein anderes Schutzniveau im Vergleich zu Ihrer Rechtsordnung aufweist und die nicht als Länder anerkannt sind, die über ein angemessenes Schutzniveau für personenbezogene Daten im Einklang mit der DSGVO verfügen. Länder, die über ein aus europäischer Datenschutzsicht angemessenes Datenschutzniveau verfügen, umfassen: Andorra, Argentinien, Kanada, die Schweiz, die Färöer Inseln, Guernsey, Israel, die Isle of Man, Jersey, Neuseeland und die Republik Östlich des Uruguay. Datenempfänger in den USA können teilweise gemäß dem EU-U.S. Privacy Shield zertifiziert sein und daher über ein aus europäischer Perspektive angemessenes Datenschutzniveau verfügen.\n\nSoweit erforderlich, werden wir geeignete Garantien für Datentransfers an Empfänger außerhalb der Europäischen Union, die nicht über ein angemessenes Datenschutzniveau verfügen, treffen. Sie können eine Kopie der jeweiligen Maßnahme anfordern, indem Sie uns unter der in Ziffer 12 angegebenen Adresse kontaktieren.\n\n9.	Speicherdauer\n\nIhre personenbezogenen Daten werden so lange aufbewahrt, wie dies für die Erbringung der Services erforderlich ist. Für die meisten Daten bedeutet dies, dass wir sie für einen Monat aufbewahren werden. Für Zwecke der Ferndiagnose und des Kundendienstes können wir Ihre Daten bis zu zehn Jahre aufbewahren. Wenn wir Ihre personenbezogenen Daten nicht länger benötigen, um vertragliche oder gesetzliche Verpflichtungen zu erfüllen, werden wir sie von unseren Systemen und Aufzeichnungen entfernen und/oder die notwendigen Schritte unternehmen, Ihre personenbezogenen Daten zu anonymisieren, sodass Sie nicht länger darüber identifiziert werden können.\n\n10.	Ihre Rechte\n\nNach anwendbarem Datenschutzrecht können Ihnen folgende Rechte zustehen: Auskunft über Ihre personenbezogenen Daten, Berichtigung Ihrer personenbezogenen Daten, Löschung Ihrer personenbezogenen Daten, Einschränkung der Verarbeitung Ihrer personenbezogenen Daten, Datenübertragbarkeit und Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten. Bitte beachten Sie, dass diese Rechte nach anwendbarem nationalen Datenschutzrecht begrenzt sein können. Für weitere Informationen zu diesen Rechten beachten Sie bitte den u.g. Anhang „Ihre Rechte“.\n\nSie haben ebenfalls das Recht, eine Beschwerde bei der zuständigen Datenschutzaufsichtsbehörde einzulegen.\n\nUm Ihre Rechte auszuüben, kontaktieren Sie uns bitte unter den in Ziffer 12 angegebenen Kontaktdaten.\n\n11.	Änderungen der Datenschutzerklärung\n\nUm unsere Services zu verbessern, können Änderungen dieser Datenschutzerklärung nötig werden – z.B. bei der Einführung neuer Technologien oder der Einführung neuer Dienste. Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu ändern oder zu ergänzen.\n\n12.	Kontaktinformationen und Vertreter in der Europäischen Union\n\nWenn Sie Fragen zu dieser Datenschutzerklärung haben oder eine Beschwerde über unseren Umgang mit Ihren personenbezogenen Daten einlegen möchten, kontaktieren Sie uns bitte unter den folgenden Kontaktdaten:\n\nKontaktformular:  www.tcl.eu/en/contact-us\n\nUnser Vertreter in der Europäischen Union ist: TCL Europe mit einem Büro in 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, Frankreich. Sie können TCL Europe über das oben genannte Kontaktformular erreichen.\n\nVersion: 2.0\n\nAnhang Ihre Rechte\n\na.	Recht auf Auskunft: Sie haben ggf. das Recht, von uns eine Bestätigung darüber zu verlangen, ob Sie betreffende personenbezogene Daten verarbeitet werden und, falls dies der Fall ist, ein Recht auf Auskunft über diese personenbezogenen Daten. Das Auskunftsrecht umfasst - unter anderem - die Verarbeitungszwecke, die Kategorien personenbezogener Daten, die verarbeitet werden, und die Empfänger oder Kategorien von Empfängern, gegenüber denen die personenbezogenen Daten offengelegt wurden oder werden. Dieses Recht besteht allerdings nicht uneingeschränkt, denn die Rechte anderer Personen können Ihr Recht auf Auskunft beschränken.\n\nSie haben ggf. das Recht, eine Kopie der personenbezogenen Daten, die von uns verarbeitet werden, zu erhalten. Für weitere von Ihnen verlangte Kopien erheben wir ggf. eine auf Grundlage der Verwaltungskosten berechnete angemessene Gebühr.\n\nb.	Recht auf Berichtigung: Sie haben ggf. das Recht, die Berichtigung Sie betreffender unrichtiger personenbezogener Daten zu verlangen. Unter Berücksichtigung der Zwecke der Verarbeitung haben Sie ggf. das Recht, die Vervollständigung unvollständiger personenbezogener Daten, auch mittels einer ergänzenden Erklärung, zu verlangen.\n\nc.	Recht auf Löschung („Recht auf Vergessenwerden“): Unter bestimmten Voraussetzungen haben Sie das Recht, von uns zu verlangen, dass Sie betreffende personenbezogene Daten gelöscht werden und wir können verpflichtet sein, diese personenbezogenen Daten zu löschen.\n\nd.	Recht auf Einschränkung der Verarbeitung: Unter bestimmten Voraussetzungen haben Sie das Recht, von uns die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. In diesem Fall werden die entsprechenden Daten markiert und von uns nur für bestimmte Zwecke verarbeitet.\n\ne.	Recht auf Datenübertragbarkeit: Unter bestimmten Voraussetzungen haben Sie das Recht, die Sie betreffenden personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten und Sie haben das Recht, diese Daten einem anderen Verantwortlichen ohne Behinderung durch uns zu übermitteln.\n\nf.	Widerspruchsrecht: Unter bestimmten Voraussetzungen haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, oder wenn personenbezogene Daten zum Zweck der Direktwerbung verwendet werden, jederzeit gegen unsere Verarbeitung Ihrer personenbezogenen Daten zu widersprechen und wir können verpflichtet sein, Ihre personenbezogenen Daten nicht länger zu verarbeiten.\n\nWenn personenbezogene Daten verarbeitet werden, um Direktwerbung zu betreiben, haben Sie zusätzlich das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen. Dies gilt auch für die Profilbildung, soweit diese im Zusammenhang mit Direktwerbung steht. In diesem Fall werden die personenbezogenen Daten von uns nicht mehr für diese Zwecke verarbeitet."];
var cookieNotice = ["\n\nWir respektieren Ihre Privatsphäre bei der Nutzung von Smart-TVs, die von uns hergestellt wurden, und der von uns erbrachten Services. Cookies werden von vielen Websites und anderen Onlinediensten genutzt und Ihr Smart-TV wird diese akzeptieren, speichern und weiterleiten, um sicherzustellen, dass diese Websites und Onlinedienste ordnungsgemäß bereitgestellt werden können.\n\nWir verwenden keine Cookies, wenn wir die Services für Sie erbringen. Jedoch können Dritte (z.B. Drittanbieter von Apps) Cookies nutzen, wenn Sie Ihren Smart-TV nutzen, um auf deren Leistungen zuzugreifen. Zur Information über die tatsächlich von Dritten genutzten Cookies und deren Funktionalitäten beachten Sie bitte die entsprechenden Cookie Hinweise Dritter. Dennoch bieten wir Ihnen in diesem Cookie Hinweis eine allgemeine Beschreibung, welche Cookies auf Ihrem Smart-TV gespeichert werden können und wie Sie diese verwalten können.\n\n1.	Was ist ein Cookie?\n\nCookies sind kleine Textdateien, die auf Ihrem Smart-TV gespeichert werden können. Wenn Sie auf eine Website oder auf den Red-Button Service eines Fernsehsenders zugreifen, können diese einen Cookie auf Ihrem Smart-TV speichern. Während weiterer Zugriffe wird ein Cookie, der auf Ihrem Smart-TV gespeichert ist, Informationen an denjenigen senden, der den Cookie dort platziert hat. Cookies sind sehr weit verbreitet und werden von einer Vielzahl von Websites und Diensten genutzt. Jeder Cookie wird typischerweise den Namen der Domain, von der er stammt, die „Lebenszeit“ des Cookies und einen Wert (normalerweise eine eindeutige Nummer) enthalten. Für eine genauere Erläuterung, was Cookies sind und wie diese arbeiten, besuchen Sie bitte www.allaboutcookies.com.\n\nCookies können nach funktionsbezogenen und nicht funktionsbezogenen Cookies unterschieden werden. Funktionsbezogene Cookies sind Cookies, die für die Bereitstellung eines Dienstes zwingend erforderlich sind. Alle anderen Cookies sind nicht funktionsbezogene Cookies.\n\n2.	Websites Dritter\n\nWenn Sie über die Services Ihres Smart-TVs auf Websites oder Dienste Dritter zugreifen, besteht die Möglichkeit, dass diese Websites oder Dienste Cookies auf Ihrem Smart-TV speichern und dass diese Cookies Ihre Interaktionen auf solchen Websites verfolgen und speichern. Wir verlangen oder unterstützen solche Aktivitäten nicht und werden derlei Informationen nicht verwenden. Bitte beachten Sie die jeweiligen Cookie- und Datenschutzerklärungen dieser Websites und Dienste für weitere Informationen über die Nutzung derartiger Cookies durch Dritte.\n\n3.	Cookies löschen\n\nIhre Benutzeroberfläche ermöglicht es Ihnen, alle Cookies und andere lokale Speicherdateien des Browsers zu löschen. Es wird dringend empfohlen, alle Cookies und lokal gespeicherte Einstellungen zu entfernen, bevor sie Ihren Smart-TV verkaufen oder verschenken.\n\nVersion: 2.0"];
var privacyPolicy = ["Bitte versehen Sie das/die unten stehende(n) Kästchen mit einem Haken, wenn Sie unsere Smart TV-Dienste und dazugehörige Dienstleistungen nutzen möchten. Die Nutzung dieser Dienste erfordert die Verarbeitung Ihrer personenbezogenen Daten gemäß unserer Datenschutzerklärung: http://www.tcl.eu/en/","Aktivieren Sie den Smart TV-Dienst, die Speicherung von Diensteinstellungen und die automatische Authentifizierung von Smart TV. Wenn Sie den Haken dieser Option entfernen, verfügen Sie nur über Standard-TV und HDMI.","Automatische Software-Aktualisierung aktivieren. Setzen Sie in dieses Kästchen einen Haken, damit Ihr Produkt dank aktueller Software-Aktualisierungen auf dem neuesten Stand bleibt und Ihnen den optimalen Betrieb bieten kann.","(Software-Aktualisierungen sind wichtig für den einwandfreien Betrieb Ihres Fernsehers, da sie für neue Funktionen, Stabilität und Sicherheit sorgen. Wir empfehlen daher, das Kästchen mit einem Haken zu versehen.)","Wenn Sie mit der Verarbeitung Ihrer personenbezogenen Daten auch für den nachfolgend aufgeführten Zweck einverstanden sind, setzen Sie in das nachstehende Kästchen einen Haken. Weitere Informationen darüber, wie wir Ihre personenbezogenen Daten verarbeiten, finden Sie in unserer Datenschutzerklärung: http://www.tcl.eu/en/","Aktivieren Sie den Smart TV-Dienst, die Speicherung von Diensteinstellungen und die automatische Authentifizierung von Smart TV."];
var termsFirTitle = ["Geschäftsbedingungen","Datenschutzerklärung","Cookie-Mitteilung"];
var termsSecTitle = ["Bitte lesen Sie die Nutzungsbedingungen und stimmen Sie diesen zu.","Bitte Datenschutzerklärung lesen und zustimmen.","Bitte den Cookie-Hinweis lesen und zustimmen."];
var tickall = "Alles anhaken";
var tickremindWords = "Bitte die Checkboxen anhaken, sonst können Sie den Smart TV-Dienst nicht genießen.";