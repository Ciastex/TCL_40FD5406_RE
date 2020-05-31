
var all_country 	= ["Australia","Austria","Belgio","Bulgaria","Croazia","Repubblica Ceca","Danimarca","Finlandia","Francia","Germania",
						"Grecia","Ungheria","Italia","Lussemburgo","Paesi Bassi","Norvegia","Polonia","Portogallo","Romania","Russia",
						"Serbia","Slovenia","Spagna","Svezia","Svizzera","Regno Unito","Nuova Zelanda"," "/*Arab*/,"Estonia"," "/*Hebrew*/,
						"Lettonia","Slovacchia","Turchia","Irlanda","Japan","Filippine","Thailand","Maldives","Uruguay","Peru",
    "Argentina","Chile","Venezuela","Ecuador","Costa Rica","Paraguay","Bolivia","Belize","Nicaragua","Guatemala",
						"Cina","Taiwan","Brazil","Canada","Mexico","United States","South Korea","Romania","Vietnam"/*新添加的，底层结构体中没有*/,"Ucraina"/*新添加的，底层结构体中没有*/,
    					"Iran","Iraq"," ","Kazakhstan","Uzbekistan"," ","Kyrgyzstan","Algeria","Egypt","Tunisia",
    					"Tanzania","Kenya","Pakistan","Indonesia","Kuwait","Saudi Arabia","Qatar","Israel","Lebanon","bahrain",
    					"Angola","Congo","India","Turkmenistan","Colombia","Mongolia","Bangladesh","Nepal","Sri Lanka","North Korea",
						"Moldavia","Polynesia","EI Salvador"," ","Fiji","Liberia","Jordan","Myanmar","Ghanas","Georgia",
    					"Armenia","Oman","yemen","Syria","Palestine","Afghanistan","Morocco","benin","IvoryCoast","Nigeria",
    					"Sudan","Ethiopia","Zambia"," ","South Africa","mozambique","Libya","Albania","Belarus","Iceland",
						"Lituania","Mauritius","Dubai","UAE","Tajikistan","Bengal","Bosnia ed Erzegovina","Cipro","Kosovo","Macedonia",
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
				
var all_language 	= ["Ceco","*","Danese","*","*","Tedesco","Inglese","Spagnolo","Greco","Francese",
						"Croato","*","Italiano","Ungherese","Olandese","Norvegese","Polacco","Portoghese","Russo","Rumeno",
						"Sloveno","Serbo","Finlandese","Svedese","Bulgaro","Slovacco","Chinese","*","Gaelico","*",
						"Gallese","Arabo","Iers","Lettone","*","Turco","Estone","Olandese"/*Netherlands*/,"Coreano","*",
						"hindi","*","*","Mandarino","Cantonese","Maori","Audio originale"/*Qaa*/,"Non definito"/*Undetermined*/,"*","Sconosciuto",
						"Non definito","*","*","*","*","*","*","*","*","*",
						"*","*","*","Albanese","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Basco","*","*",
						"*","*","*","*","*","*","*","Bosniaco","*","*",
						"*","*","*","*","Bielorusso","*","*","Catalano","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galiziano","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Islandese","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","giapponese","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Lituano",
						"*","*","*","*","*","*","*","Macedone","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romantico","*","*","*","*",
						"*","*","*","Sami","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Televideo",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ucraino","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Disattiva","Attiva"];
var okCancel		= ["OK","Annulla"];
var yesNo			= ["SÌ","NO"];
var level			= ["Disattiva","Basso","Alto","Medio"];
var manualAuto		= ["Manuale","Auto"];
var homeShop		= ["Casa","Negozio"];
var picPreset		= ["Standard","Dynamic","Naturale","Cinema","Personale"];
var picColorTemp	= ["Freddo","Normale","Caldo","Utente"];
var pic3dNavig		= ["Manuale","Auto","Semi-Auto"];
var _3dOptions		= ["Modalità 3D","Da 3D a 2D","Interruttore L-R","Profondità di Campo"];
var pic3DMode       = ["Disattiva","Da 2D a 3D","Lato con Lato","Alto e Basso","Interleaving linea"];
var picEcoOptions	= ["Risparmio energetico","Sensore luci","Attenuazione locale","Gestione indipendente della retroilluminazione"];
var picGeoOptions	= ["Geometria","Posizione O.","Posizione V.","Clock","Fase"];//Geometry 无翻译
var picAdWhiteBal	= ["Guadagno R","Guadagno V","Guadagno B","Compensazione R","Compensazione V","Compensazione B"];
var souOptions		= ["Preimpostazione del suono","Bilanciamento","Ritardo audio","SRS TSHD","Contr. aut. volume",
						"Tipo SPDIF","Ritardo SPDIF","Posizionamento televisore","Lingua audio","Tipo di suono",
						"Descrizione audio","Potenziamento bassi","Dolby Digital Plus"];
var souSpdifType	= ["Auto"/*Dolby*/,"PCM","Disattiva"];
var colorSpace      = ["Auto","Nativo","Utente"];
var souPresetPara	= ["100Hz","500Hz","1.5KHz","5KHz","10KHz"];
var chOptions		= ["Scansione dei canali","Elenco dei canali","EPG","Organizzazione canali","Diagnosi canale",
						"timeshift","Sottotitoli","Televideo","Tipo lista canali"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Forza segnale","Qualità del segnale","Frequenza (KHz)","ID servizio","ID rete","Nome di rete"];
var chScanOptions	= ["Paese / Regione","Modalità sintonizzazione","Ricerca automatica","Aggiornamento automatico","Scansione manuale analogica",
						["Scans. Man. cavo","Scans. Man. antenna","Sintonizzazione manuale satellite"],"Impostazione antenna satellitare","Selezionate rete preferita","Annulla lista canali","LCN"];
var favNetDes		= "Si prega di selezionare la rete preferita";
var tuner			= ["Cavo","Antenna","Satellite"];//Satelite 无翻译
var passError		= "Password non corretta.\nInserirla di nuovo!";
var chType			= ["Canali analogici:  ","Canali digitali:  "];
var chScanStatus	= ["Stato: Scansione","Stato: scansione completata","Stato: scansione annullata","Stato: errore scansione"];
var chScanPara		= ["Frequenza (KHz)","Modulazione","Vel. Simbolo (Ksym/s)","ID rete","Sistema",
						"Sintonizzazione fine","Forza segnale","Qualità del segnale","Modo scans.","Id Canale"];
var chScanParaMHZ      = ["Frequenza (MHz)"];
var chAtvManSys		= ["EUR OCCID.","EUROPA OR.","Regno Unito","Francia"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Auto"];
var chCleanDes		= "Azzerare l'elenco canali?";
var chDeletDes		= "Si vuole cancellare il canale?";
var chOperator		= ["Ziggo","UPC","Altri"];
var chScanType		= ["Digitale & Analogico","Digitale","Analogico"];
var chScanMode		= ["Completo","Avanzato","Veloce"];
var bookingModes	= ["Registra","Promemoria"];
var dayName			= ["Dom","Lun","Mar","Mer","Gio","Ven","Sab"];
var monthName		= ["Gen", "Feb","Mar","Apr","Maggio","Giu","Lug","Ago","Set","Ott","Nov","Dic"];
var filter			= ["Filtro","Tipo","Tipi secondari"];
var chEpgFirstGenre	= ["Cinema","Novità","Spettacolo","Sport","Bambini","Musica","Arte","Sociale","Educazione","Tempo lib.","SPECIALE"];
var chEpgSecondGenre= [["Dramma","Investigativo","Avventura","Fantascienza","Commedia","Soap opera","Romantico","Serio","Film per adulti"," "," "," "],
						["Attualità","Previsioni meteo","Notiziari","Documentario","Discussione"," "," "," "," "," "," "," "],
						["Spettacolo","Giochi","Varietà","Talk Show"," "," "," "," "," "," "," "," "],
						["Sport","Eventi speciali","Programmi sportivi","Calcio","Tennis",
							"Sport a squadre","Atletica","Motori","Sport acquatici","Sport invernali",
							"Ippica","Arti marziali"],
						["Bambini","Programmi pre-scolastici","Intrattenimento da 6 a 14 anni","Intrattenimento da 10 a 16 anni","Informativo","Cartoni"," "," "," "," "," "," "," "],
						["Musica","Rock","Serio","Folk","Jazz","Musical","Balletto"," "," "," "," "," "],
						["Arte","Arti figurative","Belle arti","Religione","Cultura popolare",
							"Letteratura","Film","Sperimentale","Diffusione","Nuova comunicazione",
							"Riviste d'arte","Moda"],
						["Sociale","Programmi","Economia","Personaggi importanti"," "," "," "," "," "," "," "," "],
						["Educazione","Natura","Tecnologia","Medicina","Paesi stranieri","Scienze sociali","Educazione avanzata","Lingue"," "," "," "," "],
						["Passatempo","Turismo","Artigianato","Motori","Fitness e Salute","Cucina","Annunci","Giardinaggio"," "," "," "," "],
						["Lingua originale","Bianco e Nero","Non pubblicato","Trasmissione dal vivo"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Ignora canale","Ordina canali","Modifica canale","Elimina canale","Scambia canale","Canale inserto"];
var chEditPara 		= ["Nome di rete","Numero canale","Nome canale","Frequenza","Sistema colore","Sistema colore"];
var chSatTitles		= ["Tipo satellite","Impostazione antenna satellitare","Seleziona Satellite"];
var chSatEidtOptions= ["Nome satellite","Posizione","LNB Potenza","Frequenza LNB (MHz)","Ingresso Diseqc",
						"Tono 22KHz","Tone Burst","Frequenza (KHz)","Vel. Simbolo (Ksym/s)","Polarizzazione",
						"Forza segnale","Qualità del segnale","Stato satellite"];
var chSatAutoPromt	= [["Tutto","Rete"],
						["Tutto","Gratis"]];
var chSatAutoScanOptions=["Seleziona Satellite","Modo scans.","Canali"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Universale",];
var chSatDiSEqCInput= ["Disabilita","A","B","C","D"];
var chSatTone22KHz	= ["Auto","Attiva","Disattiva"];
var chSatToneBurst	= ["Disabilita","Burst A","Burst B"];
var chSatPolarization= ["Orizzontale","Verticale"];
var chSatSetupOptions=["Tipo antenna","Sintonizzatore","Frequenza banda"];
var chSatAntennaType= ["Cavo singolo","Universale"];
var chSatUserBands	= ["Banda utente 1","Banda utente 2","Banda utente 3","Banda utente 4","Banda utente 5","Banda utente 6","Banda utente 7","Banda utente 8"];
var chSatOthers		= ["Transponder"];
var chSatSetupOthers= ["Definito dall'utente"];
var pleaseSelectSat = "Si prega di selezionare prima i satelliti!";
var subOptions		= ["Sottotitoli","Lingua dei sottotitoli digitale","Lingua dei sottotitoli digitale 2°","Tipo do sottotitoli"];
var ttxOptionsCon      = ["Lingua pagina decodifica","Lingua televideo digitale"];
var subType			= ["Normale","Non udenti"];
var netIntf     	= ["Ethernet","Senza fili"];
var netConnDes		= ["TV sta testando il collegamento a internet.\nAttendere",
						"Test di connessione alla rete andato a buon fine.",
						"Test di connessione alla rete non riuscito."];
var netSsidError	= "La lunghezza valida di un SSID è da 1 a 32 caratteri. Si prega di controllare la SSID.";
var netOthers		= ["Codice PIN"];
var netWlessAutoDes	= ["Assicurarsi che il PIN seguente sia installato nell’Access Point prima di cliccare OK.",
						"Premere il tasto sull’Access Point entro 120 secondi prima di cliccare OK."];
var netConnRemind	= ["Password errata!",
						"Collegamento, si prega di aspettare!",
						"Connessione avvenuta e IP ottenuto!",
						"Errore link",
						"TV sta ricercando AP\nAttendere prego",
						"Non c'è alcun dispositivo senza fili collegato al TV!"];
var netWireIpOptions= ["Impostazione IP","Tipo indirizzo","Indirizzo IP","Maschera di sottorete","Porta predefinita","DNS primario","DNS secondario"];
var netWireConnRemind= ["Inserisca un valore compreso tra 0 e 255.",
						"Collegato con successo!",
						"Si prega di inserire un indirizzo valido",
						"Collegato con successo!",
						"Connessione fallita!",
						"Collegamento, si prega di aspettare!",
						"Si prega di inserire un valore tra 1 e 223."];
var netFlixOptions	= ["Disattiva","ESN","Netflix-Version"];
var netFlixDes	 	= ["Sicuro di voler disattivare?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Aggiorn. Software";
var netUpdateDialogTitle = "Aggiornamento software";
var netBGDownloadTitle 	= "In download";
var netUpdateLoadingPrompt= ["Ricerca aggiornamenti, si prega di attendere!",
							"Download software… si prega di attendere!",
							"NON spegnere il televisore durante l'aggiornamento del software!",
                            "L'aggiornamento software obbligatorio è scaricato automaticamente in background!"];
var netUpdatePrompt= ["Congratulazioni, la sua versione del software è la più recente!",
						"Nuova versione XXXX del software trovata. Desidera scaricarla adesso? Quest’operazione potrebbe richiedere del tempo a seconda del suo stato di rete.",
						"Errore di login!",
						"Impossibile ricevere dati, si prega di provare di nuovo più tardi!",
						"Analisi Aggiornamento fallita Premere on off con telecomando!",
						"Errore link",
						"Download software completato con successo. Avviare il processo di aggiornamento TV? ",
						"Dati persi! Scaricamento fallito!",
						"Errore nel controllo del pacchetto, riprovare!",
						"Rete anormale. Controllare e riconnettersi.",
						"Errore aggiornamento! Riavvia TV!",
						"L'aggiornamento è stato cancellato inaspettatamente. La preghiamo di ricominciare l'aggiornamento dal network.",
						"Il software è stato scaricato correttamente in secondo piano. Desidera effettuare l'aggiornamento?"];
var netUpdateButtonText = ["Scarica", "Aggiorna", "Più tardi", "Mai", "OK","Continua"];
var autoDetectPrompt = ["Nuova versione XXXX del software trovata. Desidera scaricarla adesso? Quest’operazione potrebbe richiedere del tempo a seconda del suo stato di rete.",
						"È stata trovata la versione XXXX del nuovo software. Effettuare l'aggiornamento adesso?",
						"L'ultimo  processo di aggiornamento dal network è stato interrotto. Si deve riifare l'aggiornamento.",
                        "Il download della nuova versione software XXXX non è completo. Si desidera continuare ora?",
                        "Software scaricato, si desidera aggiornare ora?"];
var sysOptions		= ["Manuale elettronico","Lingua menu","Temporizzatore","Blocca","Impostaz. Ingresso",
						"Aggiorn. Software","Luogo","Modalità HbbTV","Cookie","Interfaccia comune",
						"Impostazioni avanzate","Azzera negozio","Indicatore LED","Accensione istantanea","Modalità negozio automatico","Area","Modalità Demo"];
var sysResetDes		= "Sicuro?";
var sysMenuLangOptions=["Lingua","Lingua audio preferita","2a lingua audio preferita"];
var sysTimerOptions	= ["Fuso orario","Nome regione","Clock","Timer di disattivazione","Standby automatico", "Country region"];

var sysTimeZone		= ["Come ente diffusore","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Disattiva","10 min","20 min","30 min","40 min","50 min","60 min","90 min","120 min"];
var sysStandby		= ["Disattiva","4 ore","6 ore","8 ore"];
var sysRegionName	= ["Madrid ","Canarie"];
var sysClockOptions	= ["Sincr. autom.","Data","Orario","Temporizzatore di accensione","Temporizzatore",
						"Accendi canale","Temporizzatore di spegnimento","Temporizzatore"];
var sysTimer		= ["Disattiva","Quotidiana","Una volta"];

var sysInputSet		= ["Nessuna etichetta","DVD","Blu-ray","HDD","DVDR",
						"Reg. HD","Gioco","VCR","PC","STB digitale",
						"STB HD dig ","Camera","Registratore","Altro"];
var sysAvVideoInput	= ["Auto","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["Via USB","Via rete","Per canale"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Non è possibile trovare il nuovo software in modalità over-the-air!",
						"È stata trovata la versione XXXX del nuovo software. Effettuare l'aggiornamento adesso?",
						"Si prega di inserire una chiavetta USB.",
						"Errore nel controllo del pacchetto, riprovare!",
						"Aggiornamento! Non rimuovere il dispositivo di memoria o spegnere il TV. Il tV ripartirà entro 30 secondi",
						"Il software è stato aggiornato con successo. \n Il televisore si riavvierà!",
						"Nuova versione XXXX del software trovata. Desidera scaricarla adesso? Quest’operazione potrebbe richiedere del tempo a seconda del suo stato di rete.",
						"In download",
						"Download software completato con successo. Avviare il processo di aggiornamento TV? ",
						"Aggiorn. KO!",
						"Ricerca file aggiornamento in corso",
						"Il software è stato aggiornato con successo.\nRiavvia il televisore."];
var sysProductInfo	= ["Vers. Attuale","Nome prodotto","Nome costruttore","Nome del telaio"];
var sysCiDes		= ["Nessuna scheda CI presente."];
var sysAdOptions	= ["Registrazione DivX(R) ","Cancellazione registrazione DivX(R)","T-Link","Errore di autorizzazione","Conferma di deregistrazione",
						"Conferma Noleggio","Noleggio scaduto"];
var sysRegistDes	= ["Devi registrare il dispositivo per riprodurre video DivX protetti",
						"Codice Registrazione:",
						"Registrare su http://vod.divx.com"];
var sysDregistDes	= ["Codice di cancellazione:",
						"Cancellare la registrazione su http://vod.divx.com",
						"Continuare la registrazione?"];
var mediaAuthorization = ["Il suo dispositivo non è autorizzato a riprodurre questo video DivX(R) protetto."];
var deregistrationConfrimation = ["Il dispositivo è già registrato.","Sicuro di voler annullare la registrazione?"];
var rentalConfirmation = "Questo DivX(R) a noleggio ha consumato XXXX visualizzazioni su YYYY. Continuare?";
var rentalExpired 	= "Il noleggio del DivX(R) ha usato XXXX visualizzazioni su YYYY. Il noleggio DivX è terminato.";
var parentalRatingNA		= ["***","***","***","***","***","***","***","***"];
var parentalRatingOptionUS		= ["***","***","***"];
var sysTVRatingUS=["***","***","***","***","***"];
var sysMPAAUS=["***","***","***","***","***","***"];
var parentalRatingOptionCanada		= ["***","***","***"];
var sysCanadaEng=["***","***","***","***","***","***"];
var sysCanadaFre=["***","***","***","***","***",""];
var sysResetRRT=["***"];
						
var sysLockOptions	= ["Blocco canale","Blocco intervallo di tempo","Classificazione controllo genitori","Blocco input","Blocco comandi frontali","Blocca installazione",
						"Cambia password","Volume max.","Elimina tutto"];
var sysTimeIntervals= ["Tipo blocco","Orario inizio","Orario fine"];
var sysRatingOptions= ["Nessuno","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","Rating X (Spagna)"];
var changePass		= ["Cambia password","Nuova password","Conferma password"];
var changePassDes	= ["Password non corretta.\nInserirla di nuovo!",
						"La password non corrisponde.\nInserirla di nuovo!",
						"Password impostata con successo!",
						"Questo codice è troppo semplice per essere impostato come password. \nInseritene uno nuovo!"];
var sysPowerOnChOptions= "Seleziona modo";
var sysPowerOnCh	= ["Ultimo stato","Selezione utente"];
var netWlessSecu    = ["Aperto","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Nessuno","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Non supportato"];
var netWlessSecu3	= ["Nessuno","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Non supportato"];
var netOptions		= ["Collegamento a internet","Interfaccia","Impostazioni wireless","Impostazioni IP","Informazioni",
						"Test di collegamento","DLNA","Telecomando TV","Impostazioni Netflix","Visualizzazione Wi-Fi",
						"Tipo indirizzo","Indirizzo IP","Maschera di sottorete","Porta predefinita","DNS primario",
						"DNS secondario","SSID","BSSID","Inserire SSID:","ID Utente"];
var chEditDes		= ["Numero canale duplicato!","Premere il tasto rosso per cancellare il carattere attuale!","Numeri di canali non valido."];
var chEpgNoProgram	= "Nessuna informazione del programma disponibile ora, si prega di cercare prima di canali!";
var chEpgWords		= ["Guida dei programmi","Nessun dato programma.","Canale bloccato!","Nessun dettaglio programma.","Nessun titolo programma."];
var chEpgBooking	= ["calendario Info", "Numero canale","Data di inizio","Orario inizio","Orario fine",
						"Tipo di ripetizione","Tipo di programmazione","Aggiungi lista","Sostituisci","Cambia",
						"Aggiungi/Modifica"];
var epgHotKey		= ["Giorno precedente","Giorno successivo","Filtro","Lista programmi","Aggiungi lista"];
var chEpgBookRemind	= ["Ora di inizio errata","Ora di fine errata","Programmazione duplicata","Salvataggio a buon fine.","Cancellato con successo!"];
var chSchePara		= ["Lista programmi","Orario inizio","Data di inizio","Titolo programma","Nome canale",
						"Durata","Ripeti","Programmazione","Modifica","Cancella"];
var dateTimer		= ["Una volta","Quotidiana","Settimanale"];
var scheduleDeleteReminds="Si vuole cancellare questa programmazione?";
var scheduleNoLists	= "Non esiste lista di programmazione. Premere il tasto \"Rosso\" per aggiungerne una.";
var chListWords		= ["Elenco dei canali","Seleziona Lista","Modalità sintonizzazione","Aggiungi ai preferiti","Rimuovi",
						"Seleziona l'elenco canali","Seleziona la modalità del sintonizzatore","Cambia"];
var chListType		= ["Tutto","Digitale","Analogico","Radio","Gratis","Preferiti"];
var chAutoScanOptions=["Selezionare operatore","Tipo di canale","Ricerca automatica"];
var souSoundType	= ["Non valido","Mono","Mono","Stereo","Stereo",
						"SAP","SAP","Dual1","Dual2","Dual2",
						"Nicam mono","Nicam stereo","Nicam dual1","Nicam dual2","Nicam Dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Musica","Cinema","Voce chiara","Standard","Personale"];
var picAdRgbMode	= ["Disattiva","Solo Rosso","Solo Verde","Solo Blu"];
var picAdOptions	= ["DNR","MPEG NR","RGB mode","Contrasto Dinamico","Nitidezza Movimento LED",
						"Tonalità pelle","Modalità film","Modalità gioco","Temperatura colore","Bilanciamento Del Bianco",
						"Fermo immagine","Black Stretch","Sovrascansione","Gamma","Modalità HDMI","Bilanciamento del bianco 10P.","Estensione colore",
						"Riduzione sfuocatura","Riduzione tremolio","Spazio colore","Nitidezza movimento"];
var pic10Pwhite     = ["Intervallo","Rosso","Verde","Blu","Azzera","Colore ","Giallo","Ciano","Magenta"];
var picMotionClarity = ["Modalità Movimento","Interpolazione movimento","Nitidezza Movimento LED","Riduzione sfuocatura","Riduzione tremolio","Azzera"];
var picMotionMode   = ["Film","Liscio","Elimina","Sport","Personalizzato"];
var picResetDes		= "Tutte le impostazioni personali saranno resettate. Si è sicuri di voler effettuare l'azione selezionata?";
var pic10PReset     = "Si è sicuri di voler resettare il bilanciamento del bianco 10P?";
var picMotionReset  = "Si vuole resettare la Nitidezza in Movimento?";
var picColorSpaceReset    = "Sei sicuro di voler resettsre lo spazio colore?";
var picOptions		= ["Modalità Immagine",
						"Retroilluminazione","Luminosità","Contrasto","Saturazione","TONALITÀ","Nitidezza","Temperatura colore","Modalità Schermo","Formato automatico",
						"Esaltazione Sport","3D","Navigazione 3D","ECO Impostazioni","Geometria",
						"Impostazioni avanzate","Reimposta immagine","Micro Dimming"];
var picSize			= ["Formato 16:9", "Formato 4:3", "Formato 14:9", "Cinerama",
						"Zoom 16:9 ", "Zoom up 16:9 ","Zoom 14:9 ","Stretch Zoom","Wide zoom ",
						"Zoom 2","Wide Zoom 2","Abbinamento schermo nativo","Punto per punto","Originale","Panorama"];
var others			= ["Volume","Trasmissione","Password","Stato","Salva","Sostituisci","Avvio","Esci","Cerca","Cancella",
						"Nessuno","Automatico","Scansione","Sicurezza","Connetti","Aggiorna","Riprova","Arresta","Impostazioni","Canali",
						"Modifica","Inserisci","Segnale!","Termina","Stereo","Audio","Principale","Nessun audio","Suggerimenti","Azzera",
						"Personalizzato","Configurazione","Memorizza ","Utente","Chiudere tastiera","Modalità Sicurezza","Ogni giorno","Lista PVR"];
var direction		= ["Sinistro","Destro","Su","Giù"];
var audioType 		= ["MPEG","DOLBY AUDIO"/*"AC3"*/,"MPEG4","AAC", "DOLBY AUDIO"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Sconosciuto"];
var soundChannels   = ["Sconosciuto","Mono","Secondario","Dual Mono","Stereo","Sub Stereo","Dolby Surround Stereo","Surround 2 canali","Surround","3.0 Ch","4.0Ch","5.0Ch","Lfe Mono","Lfe Dual Mono","Lfe Stereo","Lfe 2 canali surround","Lfe Surround","3.1Ch","4.1Ch","5.1 canali","7.1 canali"," Stereo combinato","Mono Fmrdo","Stereo Fmrdo","Mono Nicam Mono Fm","Mono Fm Stero Nicam","Mono Fm Dual Nicam","Sinistro","Destro","Altri"];
var prompts			= ["Regolare le impostazioni immagini che si adattano al meglio all'ambiente di visione.",
						"Regolare i livelli di luminosità. Più il valore è vicino a 100, più luminoso sarà lo schermo.",
						"Regolare i livelli di contrasto. Più il valore è vicino a 100, maggiori sono le differenze tra zone scure e chiare.",
						"Regolare i livelli di saturazione. Più il valore è vicino a 100, più forte il colore.",
						"Regolare i livelli di nitidezza. Più il valore è vicino a 100, più chiari sono i dettagli.",
						"Aggiungere il livello di retro-illuminazione. Più il valore è vicino a 100, più luminoso è lo schermo.",
						"Regolare i livelli di tinta. Quest'impostazione modifica i toni del colore.",
						"Selezionare il formato immagine che meglio si adatta al programma che si sta guardando.",
						"Configurazione delle opzioni di risparmio energetico.",
						"Regolare le impostazioni della geometria dello schermo quando si collega un dispositivo PC.",
						"Selezione di ulteriori impostazioni avanzate dell'immagine.",
						"Ripristinare tutte le impostazioni dell'immagine ai valori predefiniti.",
						"Selezionare la modalità audio che meglio si adatta alle proprie preferenze.",
						"Regolare il bilanciamento del volume tra canale sinistro e canale destro.",
						"Il sistema di recupero suono TruSurround HD fornisce una resa audio ricca e chiarezza a frequenze basse ed alte.",
						"Il Formato Digitale di Interfaccia collega l'uscita suono digitale del televisore all'apparecchio audio dell'home theater.",
						"Selezionare la lingua dell'audio che meglio si adatta alle proprie preferenze.",
						"Permette agli Ipovedenti di godere dei programmi televisivi.",
						"Testare l'immagine, l'audio e il segnale del televisore.",
						"Selezionare il tipo di elenco canali che meglio si adatta al segnale TV.",
						"Selezionare la lingua dei sottotitoli del programma visualizzati in fondo allo schermo.",
						"Visualizzare il testo e le immagini del canale corrente.",
						"Digital Living Network Alliance. Godersi musica, foto e video attraverso la rete di casa da altri dispositivi come un PC.",
						"Visualizzare i contenuti dello smartphone sul televisore ed utilizzare lo smartphone come telecomando per il televisore.",
						"Visualizzare i contenuti sul televisore da un dispositivo Android compatibile con Miracast.",
						"Impostate un blocco per il televisore.",
						"Selezionate un nome per il vostro dispositivo.",
						"Selezionate l'ambiente di visione.",
						"Ripristinare tutte le impostazioni di sistema ai valori predefiniti.",
    					"Switch off sports mode for more options.",
    					"Migliora il contrasto ambientale",
    					"Un modo speciale per godersi gli eventi sportivi",
    					"Utilizza ulteriori funzioni CEC."];
var initialTitle	= ["Benvenuti","Configurazione iniziale"];
var initialPrompt	= ["Effettua ora il Setup iniziale, un Mondo di Esperienze Eccitanti ti aspetta!",
						"Selezionare la lingua:",
						"Selezionare il proprio paese / regione:",
						"Selezionare località:",
						"Selezionare il tipo di connessione di rete:",
						"Selezionare la modalità di connessione di rete cablata:",
						"Impossibile collegarsi a xxxxxxxxxx! Si prega di collegare il dispositivo secondo il diagramma seguente o di selezionare Sinistra per resettare.",
						"Collegato a xxxxxxxxx! Si prega di selezionare Destra per continuare.",
						"1) Il televisore potrebbe essere già dotato di un adattatore Wireless\n 2) O, se è fornito un adattatore wireless USB, collegarlo al televisore. Quindi si prega di selezionare la modalità di connessione di rete wireless.",
						"Scansione. Si prega di aspettare…",
						"Non c'è alcun dispositivo senza fili collegato al TV!",
						"Assicurarsi che il seguente codice PIN sia installato nell'AP prima di fare clic su 'Avanti'.",
						"SI prega di premere sul tasto AP entro 120 secondi prima di premere Destro!",
						"WPS (Wi-Fi Protected Setup, configurazione Wi-Fi protetta)",
						"PIN (numero personale di identificazione)",
						"PBC (Premere tasto configurazione)",
						"È possibile accedere ai seguenti contenuti solo con una connessione di rete. Si vuole saltare le Impostazioni di Rete?",
						"Vi sono nuovi aggiornamenti software da scaricare, questo potrebbe impiegare un po' di tempo a seconda dello stato della rete.",
						"L'aggiornamento del software del televisore consente di avere a disposizione le funzioni e i servizi più recenti.",
						"Non si potranno sfruttare le ultime caratteristiche e servizi. Volete saltare l'Aggiornamento Software?",
						"Premere il tasto Destro per continuare.",
						"Non spegnere durante l'aggiornamento perché ciò potrebbe causare il malfunzionamento del televisore.",
						"Se non si desidera aggiornare, selezionare NO.",
						"Aggiornamento, si prega di attendere.",
						"Inoltre è possibile aggiornare il software in AGGIORNAMENTO SISTEMA/SOFTWARE.",
						"La nazione selezionata necessita dell'impostazione password. \nInserite il codice per il vostro televisore e confermatelo.",
						"This code is too simple.\nPlease use different digits.",
						"Congratulazioni! Le impostazioni iniziali sono complete. È possibile modificare la configurazione attraverso il menù principale ed i sotto menù correlati.",
						"Selezionare una modalità di sicurezza:",
						"Si prega di selezionare la modalità di collegamento della rete wireless:",
						"Rete"];
var initNetCabAndDonRe = ["Nessun cavo di rete collegato, inserire un cavo di rete!","Nessun adattatore wireless integrato né adattatore USB wireless fornito."];
var initChPrompt = ["Installazione canali TV","Si prega di selezionare il tipo di scansione dell'Antenna.","Sintonizzazione automatica in corso...","Sono stati trovati i seguenti canali Antenna:","Selezionare il tipo di scansione Cavo.","Si prega di selezionare un operatore dalla seguente lista.","Configurare le informazioni di scansione","I seguenti canali via cavo sono stati trovati:","Selezionare un operatore dal seguente elenco","Selezionare i satelliti da scansionare o modificare il satellite selezionato","Impostare i parametri del satellite","Sono stati trovati i seguenti canali, e la scansione dei canali può essere eseguita nuovamente in Canali/Scansione Canali"];
var initClockPrompt = ["Ottenere l'ora via rete!",
						"Si prega di impostare Data ed Ora:"];
var initialOptions	= ["Ambiente","Configurazione della rete","Aggiorn. Software","Installazione dei canali","Clock"];
var initialHotkeys	= ["Indietro","Seleziona","Successivo","Accetto"];
var initLocations	= ["Casa","Negozio","Negozio con demo"];
var initNets		= ["Cablata","Senza fili","Non ho una connessione di rete"];
var initWireManuals	= ["Indirizzo IP","Maschera di sottorete","Porta predefinita","DNS primario","DNS secondario"];
var initSoftUpdates = ["Aggiorna adesso","Aggiorna più tardi"];
var initChannelIns	= ["Continua","Non desidero installare canali"];
var initChScanTypes	= ["Digitale & Analogico","Digitale","Analogico","Non desidero eseguire la scansione"];
var initChDvbts		= ["Canali Antenna ATV","Canali Antenna DTV"];
var initChDvbcs		= ["Canali via cavo ATV:","Canali via cavo DTV:"];
var initChDvbss		= ["Canali satellitari:"];
var initChDvbSOther	= ["Non desidero eseguire la scansione del satellite"];
var initEndConnectedStatus= ["Scollegato","Wi-Fi collegato","Cavo collegato"];
var initEndInstallations= "Canali XXXX installati";
var initEndUpdate	= ["Aggiornato"];

var audioScenes 	= ["Scrivania","Montaggio a parete"];			
var screenSavers	= ["Nessun canale, premere OK ed eseguire la scansione!",
						"Nessun segnale!",
						"Codificato",
						"Solo dati",
						"Programma audio",
						"Nessun audio e video",
						"Non disponibile",
						"Nessun Televideo",
						"Nessun dato programma.",
						"Programma bloccato!",
						"Programma bloccato!\nPremere OK e inserire il codice.",
						"Nessun dettaglio programma.",
						"Programma non adatto ai minori. \n Premere OK ed inserire il proprio codice.",
						"Canale bloccato!",
						"Canale bloccato!\nPremere OK e inserire il codice.",
						"Inserimento bloccato!\nPremere OK e inserire il codice.",
						"Non supportato!",
						"Questo servizio non è attualmente disponibile",
						"Ins. Bloccato!",
						"Nessun titolo programma.",
						"Nessuna funzione",
    					"Nessun Sottotitoli"
						];
var channelNumberOverPromt = ["The number of search programs has exceeded,you can delete some programs and then retry!"];
var chBookingPromt	= ["Il canale corrente ha una registrazione programmata, il televisore inizierà a registrare.",
						"È stata trovata una registrazione programmata.\n Passare a XXXX per registrare",
						"Un avviso è stato programmato per il canale corrente",
						"È stato trovato un avviso programmato.\n Passare a XXXX"];
var timeUnit		= ["Sec","minuto"];
var ciPromt			= ["I dati della rete sono cambiati. Per aggiornarli si può fare una scansione aggiornamenti.",];
var othersPromt		= ["Attendere...",];
var menuOptions		= ["Immagine ","Suono","Canale","Smart TV","Rete","Sistema","Assistenza"];
var optionOptions	= ["Modalità Immagine","Preimpostazione del suono","Fermo immagine","T-Link","timeshift","Registrazione video USB","Lista programmi","Impostazioni","*"];
var optionTLinkPromt= [["Accensione automatica","Standby automatico","Menu guida"],
						["Accensione","Standby","Amplificatore di volume"]];
var powerPromt		= ["La TV si spegnerà a breve! Premere un tasto qualsiasi per cancellare."];
var ttxLanguage		= ["EUR OCCID.","EUROPA OR.","Russo","Arabo/Ebreo","Farsi","Arabo","Bielorusso","Greco","Turco"];
var ttxOptions		= ["Mostra","Ciclo sottopagine","Lingua","Pagina degli allarmi","Notiziario flash"];
var weekday         = ["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"];
var lcnConfflict	= "Questo programma ha problemi di ricezione.";
var inShopMode		= "Il televisore è in Modalità Negozio. Per la modalità casa, si prega di selezione \"Sistema\" e di cambiare \"Località\" nel menù.";
var nitRefresh		= "I dati di rete sono cambiati. Avviare la scansione di aggiornamento?";
var picHDMIMode     = ["Auto","Grafica","Video"];

var glassRemind    	= ["Si prega accoppiare gli occhiali 3d con il televisore. \n (Tenere premuto il tasto ACCENSIONE sugli occhiali 3D).","Gli occhiali 3D sono collegati al televisore.",""];
var pvrRemind 		= ["Non estrarre il dispositivo USB né interrompere l'alimentazione."];
var pvrConName   	= ["Registrazione video USB","Informazioni del programma:",["Nota: Se registrate un canale Hd selezionare velocità disco( velocità >5.0MB/sec), se invecce registrate un canale SD selezionare velocità disco ( Velocità >3.0MB/sec).","Video registr. Salvato nella cartella \"PVR\"."],"Arresta","Registra","ora","Minuto","Durata","Suggerimenti","Utilizzare i tasti freccia per impostare la durata della registrazione."];
var pvrDisRemind 	= "Inserisci la chiavetta USB per la registrazione.";
var pvrRemindWords  = ["Si vuole uscire?",
							"Si vuole interrompere la registrazione e cercare tra i file registrati?",
							"Disco estratto.",
							"Spazio libero insufficiente. ",
							"Nessun file registrato, avvia registrazione.",
							"PVR non può avviarsi in Canale Codificato.",
							"Funz. Non disp.",
							"Salvataggio a buon fine.",
							"Interrompere il processo di registrazione e cambiare sorgente ingresso?",
							"Il televisore terminerà la registrazione corrente. Si vuole uscire?",
							"La registrazione PVR necessita del segnale TV per funzionare correttamente, si prega di controllare il segnale."];
var pvrChangeCh 	= ["Volete cambiare canale?",
							"Interrompere il processo di registrazione e cambiare canale?"];
var pvrChangeToPIN8	= ["Si vuole cambiare la sorgente e impostare il dispositivo collegato all'ingresso SCART?",
				    		"Si vuole interrompere il processo di registrazione e cambiare la sorgente impostando il dispositivo collegato all'ingresso SCART?"];
var pvrChangeToCEC  = ["Si vuole cambiare la sorgente ed impostare un dispositivo collegato ad un ingresso HDMI?",
				  			 "Si vuole interrompere il processo di registrazione e cambiare la sorgente impostando il dispositivo collegato ad un ingresso HDMI?"];
var pvrGuideJump    = ["Si vuole accedere alla EPG?",
							"Interrompere il processo di registrazione ed entrare in EPG?"];
var pvrMediaJump    = ["Si vuole accedere a Media?",
							"Interrompere il processo di registrazione ed entrare in Media?"];
var timeshiftExtra	= ["Bloccare timeshift e impostare TV Cambiare canale?",
						"Si vuole interrompere la differita e cambiare la sorgente impostando un dispositivo collegato all'ingresso SCART?",
						"Si vuole interrompere la differita e cambiare la sorgente impostando un dispositivo collegato ad un ingresso HDMI?",
						"Timeshift non può avviarsi in Canale Codificato.",
						"Si vuole interrompere la differita ed accedere alla EPG?",
						"Bloccare timeshift e impostare TV con modalità USB?",
						"Bloccare timeshift e impostare Cambiare fonte ingresso?",
						"Inserisci la chiavetta USB per la registrazione.",
						"Dimensione disco insufficiente. ",
						"Il televisore terminerà la differita corrente. Si vuole uscire?"];
var timeshiftStatus	= ["Riavvolgimento rapido","Arresta","Riproduci","Pausa","Avanzamento rapido"];
var pvrPowerOffRemind= ["Registrazione in stand by","Standby","Il televisore sta registrando ora, si vuole mantenere la registrazione quando il televisore è in modalità standby?"];
var timeshiftInitTitle= "Impost. Disco";
var timeshiftInitReminds= ["Guida di impost. Disco USB per timeshift. Selez. Modalità impost. ",
						 "Per una migliore performance, si consiglia la format. Del disco USB. I dati verranno cancellati.",
						 "Selez. Dimens. File per timeshift.",
						 "Formattazione…",
						 "Spazio libero insufficiente. ",
						 "Creazione file timeshift",
						 "Verifica velocità",
						 "Velocità disco troppo lenta (< %f MB/sec) per attiv. funz. Timeshift!",
						 "Disco pronto per timeshift. Ma si raccomanda di sost. il disco (vel. > %f MB/sec) per migliore performance.",
						 "Disco pronto per timeshift."];
var timeshiftInitButtons= ["Formattare","Saltare","Annulla","OK","Termina","Esci"];
var timeshiftInitOther=["Veloc. disco:","MB/sec."];

var selectChoice	= "Sicuro?";
var chAtvStore		= "Memorizza come XXXX";
var chEpgFirstGenreUK= ["Cinema","Notizie e fatti","INTRATTENIMENTO","Sport","Bambini","Educazione","Stile di vita","Dramma"];
var homePageTitleList = ["APP","TV","VIDEO","Homepage"];
var homePageFavAndAllName  = ["App preferite","Tutte le App"];
var homePageBackUp = ["Manuale elettronico","Guida"];
var homePageRemind   = ["Le funzioni complete sono disponibili solo dopo la connessione di rete.","Il televisore non ha memorizzato nessun canale. I programmi saranno disponibili dopo la scansione dei canali.","Nessun programma","Cercare canali ora?"];
var homePageHistory = ["Cronologia"];
var miracastTitle = ["Visualizzazione Wi-Fi","Dispositivo TCL"];
var miracastRemind=["Collegamento Wi-Fi del televisore consente di condividere lo schermo e il suono di uno smartphone, un tablet, o altro dispositivo simile, con il vostro televisore in modalità wireless (ovvero senza cavi). In questo modo potrete vedere sul televisore quello che il vostro smartphone o tablet sta visualizzando. Ad esempio, potete avviare un video sullo smartphone e vederlo in simultanea sul televisore, oppure utilizzare il tablet come un controller per giochi e trasmettere i contenuti sul grande schermo del televisore.","La connessione WiFi TV sul televisore è pronta. Avviare per condividere immediatamente lo schermo del proprio dispositivo con il televisore.","Collegamento, si prega di aspettare!","Connessione fallita!","Impossibile collegare. Controllare!"];
var homePageLittleWin = ["Impostazioni","Media","Canali preferiti.","Smart TV","EPG"];

var hbbtvStopRemind  = ["Si vuole interrompere la riproduzione?"];
var colorSystem = ["Auto","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Premere ≡ per maggiori informazioni";
var emptyListInfo = "Nessun dispositivo collegato al TV!";
var optionVideoListArray_1 = ["Modalità Immagine", "Preimpostazione del suono", "Modalità gioco", "Modalità Schermo", "Modalità 3D", 
							  "Interruttore L-R", "Profondità di Campo", "Sottotitoli", "Traccia Audio", "Titolo", "Capitolo", "Info"];
var optionVideoListArray_2 = ["Modalità Immagine", "Preimpostazione del suono", "Modalità gioco", "Modalità Schermo", 
							  "Sottotitoli", "Traccia Audio", "Titolo", "Capitolo", "Info"];
var bottomTipsText = ["Riproduci/Pausa", "Riavvolgimento rapido", "Avanzamento rapido", "Playlist", "Impostazioni"];
var picturePresetArray = ["Standard", "Dynamic", "Naturale", "Cinema", "Personale"];
var videoPlayModeArray = ["Ripeti Tutto", "Ripeti Uno", "Normale"];
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Wide zoom ", "Zoom 2", "Wide Zoom 2", "Stretch Zoom", "Automatico"];
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "Zoom 14:9 ", "Zoom 16:9 ", "Zoom up 16:9 ", "Automatico"];
var Mode3DArray = ["Disattiva", "Da 2D a 3D", "Lato con Lato", "Alto e Basso", "Interleaving linea"];
var videoOptionListArray = ["Disattiva", "Traccia", "Sottotitoli", "Titolo", "Capitolo"];
var subMenuTitleText = "Sottotitoli";
var langMenuTitleText = "Lingua audio";
var titleMenuTitleText = "Titolo";
var mode3DMenuTitleText = "Modalità 3D";
var langInfoText = "Traccia";
var STOP_RESUME_INFO = "Stop-Continua";
var playListName = " nome";
var eb_tips = "Suggerimenti";
var ok_button = "OK";
var eb_info = ["Errore di decodifica audio", "Errore di decodifica video", "Formato audio non supportato", 
			   "Formato video non supportato.", "Impossibile aprire il file", "Errore di riproduzione, provare di nuovo in seguito",
			   "Formato file non supportato.", "Oops! Il lettore ha smesso di funzionare.",
			   "Il percorso del file non esiste o non è valido. \n Re-inserire il dispositivo di archiviazione e riprovare.",
			   "Continuare la riproduzione dal punto \n precedente?"];
var picturePlayErrorTips = ["Errore caricamento!!!","L’immagine è troppo grande!!!","Errore di rete!!!","Errore di ingresso!!!","Errore param!!!","Errore sconosciuto!!!"];
var frameTitleText = "Nuovo dispositivo";
var eb_quit_info = "Si è sicuri di voler uscire?";
var eb_yes = "SÌ";
var eb_no = "NO";
var offinfo = "Disattiva";
var naInfo = "Nullo";
var consoleInfoArray = ["Riavvolgimento rapido", "Avanzamento rapido", "Riproduci/Pausa", "Playlist"];
var cantOperateText = ["Funzione non supportata"];
var chapterChangeInfo = "Sono disponibili solo capitoli da 1 a XXXX.";
var metaDataArray = ["Metadati Titolo/edizione:", " Capitolo Metadati:", "Metadati Audio:", "Metadati sottotitoli:"];
var metaTitleInfo = "Titolo";
var metaChapterInfo = "Capitolo";
var videoLoadingInfo = "Analisi in corso…";
var listLoadingInfo = "Caricamento…";
var pgInfo = "Valutazione di legge";
var fileNameText = " nome";
var fileDateText = "Data";
var fileSizeText = "Dimensione";
var fileDurationText = "Durata";
var fileDirectorText = "Regista";
var fileCopyrightText = "Copyright";
var fileArtistText = "Artista";
var fileAlbumText = "Album";
var fileGenreText = "Genere";
var fileYearText = "Anno";
var fileGenreText = "Genere";
var mainListArray = ["Tutto", "Immagine ", "Video", "Musica"];
var sortArray = [" nome", "Data"];
var parserArray = ["Normale", "Ricorrente"];
var emptyTipsInfo = "Oops. Impossibile trovare file supportati";
var emptyFolderInfo = "Oops. Impossibile trovare file supportati";
var sortName = "Scelto da";
var parserName = "Analizzatore";
var divx_str1 = "Registrazione DivX(R) ";
var divx_str2 = "Cancellazione registrazione DivX(R)";
var infor_str = "Info";
var quickMenuEmptyText = "Nessuna opzione disponibile.";

var musicSoundPresetArray = ["Standard", "Cinema", "Musica", "Voce chiara", "Personale"];
var musicInformationArray = [" nome", "Artista", "Album", "Genere:", "Anno:", "Durata:"];
var playListName = " nome";
var playTipsInfo = ["Si sta riproducendo il primo file", "Si sta riproducendo l'ultimo file."]
var musicNameInfo = "Name";
var musicArtistInfo = "Artista";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Preimpostazione del suono";
var optionBGMInfo = "Riproduzione in background.";
var optionAudioOnlyInfo = "Solo audio";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX è stato collegato al televisore!";
var tvRemoteTitle		= "Telecomando TV";
var tvRemoteDeveloper	= "L'applicazione è stata sviluppata da TCL";
var tvRemoteDeviceTitle	= "Nome del dispositivo:";
var remoteOption		= ["Condivisione multimediale","Telecomando","Guida","Informazioni","Connessione Smart"];
var remotebottom		= "Scaricare \"Telecomando TV\" sul proprio smartphone.";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Condividere foto, video e musica col televisore attraverso il telefono.",
							"Fasi: \n   1. Cliccare \"Telecomando TV\" sul telefono. Collegare il telefono al televisore con la stessa rete WiFi;\n   2. Cliccare \"Condivisione Multimedia\" per cercare tra i file media;\n   3. Inviare i file media al televisore per riprodurli (con una delle seguenti opzioni)",
							"      a) Trascinare e lasciare andare la cartella/il file nell'icona del TV nella parte alta dello schermo;\n      b) Far oscillare il telefono verso la TV per lanciare il primo file;\n      c) Riprodurre i file sul telefono e fare clic sull'icona di condivisione TV;",
							"   4. Quando si riproduce sul TV, scuotere il telefono per riprodurre il file precedente o successivo."];
var controlReminds		= ["Usare il telefono come telecomando per far funzionare il TV.",
							" ",
							"Fasi: \n   1. Cliccare \"Telecomando TV\" sul telefono. Collegare il telefono al televisore con la stessa rete WiFi;\n   2. Cliccare \"Telecomando\" per utilizzare il televisore."];
var helpDeviceWords		= "Interazioni tra più schermi";
var helpBottom			= "Nell'era della tecnologia cloud, dispositivi smart, come telefoni e televisori, sono connessi l'uno con l'altro. Condividi con la tua famiglia i contenuti multimediali su schermi multipli e controlla il televisore tramite il telefonino! ";
var helpReminds			= ["Preparazioni\n   1. Scaricare ed installare \"Telecomando TV\" da Google Play o Apple Store.\n   2. Collegare il telefono con il televisore con la stessa rete WiFi.",
							" ",
							"Telefono raccomandato\n   1. CPU: oltre 800MHz\n   2. Spazio: almeno 80Mb di spazio libero",
							" ",
							"Dichiarazione\n   Se \"Telecomando TV\" non è disponibile sul telefono, contattare il produttore del telefono."];
var helpButtons			= ["Indietro","Successivo"];
var aboutReminds		= ["Telecomando TV","L'applicazione è stata sviluppata da TCL"];
var aboutExit			= "Esci";
var smartReminds		= ["Collegamenti rapidi ed efficaci tra televisore e telefono.",
							" ",
							"Fasi \n   1. Collegare il televisore e lo smartphone alla stessa LAN. Cliccare \"Telecomando TV\" sullo smartphone.\n   2. Cliccare \"Smart Connect\" per scansionare il codice QR.\n   3. Con la trasmissione TV in modalità trasmissione, premere il tasto INFO sul telecomando per 4 secondi, apparirà un codice QR a schermo intero.",];
var smartQRReminds		= ["Cliccare su Smart Connect sul telecomando TV sul telefono e scansionare il codice QR per collegare rapidamente televisore e telefono. ",
							"Il codice QR contiene info sull'account LAN. Conservarlo con cura."];
							

var consoleTipArray = ["Indietro","Successivo","Console","Playlist"];							
var optionInfoArray = ["Modalità Immagine","Modalità gioco","Durata","Effetto","Info"];

var playModeArray = ["Normale","Shuffle","Ripeti"];
var durationArray = ["Breve (5s)", "Medio (10s)", "Lungo (15s)"];
var effectArray = ["Nessuno", "Ruota", "Sposta a destra", "Sposta a sinistra", "Sposta in su", "Sposta in giù", "Box in", "Box out", "Casuale"];
var infoArray = ["Nome:","Dimensione:","Data:","Luogo"];

var picturePresetBarTitleInfo = "Modalità Immagine";
var picturePresetBarArray = ["Standard","Dynamic","Studio","Cinema","Personale"];
var upTipsInfo = "Muovi immagine"; //add yums 2014-10-10
var consoleTipsArray = ["Console","Indietro","Successivo","Playlist","Impostazioni"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Premere di nuovo DESTRA per riprodurre l'immagine successiva","Premere di nuovo SINISTRA per riprodurre l'immagine precedente","Premere di nuovo GIÙ per mostrare la playlist"]; //add yums 2014-10-10

var optionPvrListArray = ["Modalità Immagine","Preimpostazione del suono", "Modalità Schermo", "Modalità 3D", "Sottotitoli", "Traccia Audio", "Info"];							
	
var titleSpanFirstArray = ["Controllo e collegamenti","Operazioni di base","APP","TV","Impostazioni","FAQ"];
var titleSpanSecondArray = [["Telecomando","Tasti comando del pannello","Navigazione facile","Collegamento TV","Collegamento TV","Collegamento TV","Senza fili"],["Lancio","Barra di stato","Principale"],["App in riproduzione","Media","Telecomando TV"],["Regolare canale e volume","Elenco dei canali","EPG","Installazione canali","Canali preferiti."],["Regolazione video","Regolazione audio","Regolazione canale","Aggiorn. Software","Lingua","Blocco parentale"],["Domande Frequenti","Domande Frequenti","Risoluzione dei Problemi","Risoluzione dei Problemi","Termini e condizioni"]];
var contentSpan1_1Array =[["ACCENSIONE:","SORGENTE:","IMPOSTAZIONI:","OPZIONI:","BACK:","INFO:","HOME:","EXIT:","LISTA:"],
    ["Avvia l'alimentazione o la modalità standby",
        "Selezionare la fonte di ingresso",
        "Per visualizzare il menu Impostazioni",
        "Per il menu Opzioni",
        "Tornare al menu precedente o uscire da un'APP in corso",
        "Mostra informazioni dei programmi",
        "Per accedere alla homepage della SmartTV",
        "Tornare al menu precedente o uscire da un'APP in corso",
        "Mostra la lista dei canali"]];
var contentSpan1_2Array = ["Canale precedente","Canale successivo","Alza il volume","Abbassa il volume","Va alla homepage","Conferma l'opzione","Standby / accensione"];
var contentSpan1_3Array = ["OK/Guida","Canale su","Canale giù","Volume giù","Volume su","Disponibili come tasti freccia in alcune funzioni"];
var contentSpan1_4Array = ["LAN","HDMI (MHL)","HDMI","HDMI (ARC)","Adattatore per l'USCITA AV.","LAN","Smartphone","PC/Set-top box/DVD","Amplificatore Audio","Amplificatore audio/monitor","Il televisore potrebbe non avere tutte le prese."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Cuffie","Adattatore per l'INGRESSO AV","SPDIF","Adattatore INGRESSO AUDIO CMP","Adattatore INGRESSO CMP (YPbPr) ","Dispositivi USB","Dispositivi USB","Cuffie","DVC/Console di gioco/Set-top box/DVD","Amplificatore Audio","DVC/Console di gioco/Set-top box/DVD","Il televisore potrebbe non avere tutte le prese."];
var contentSpan1_6Array = ["Interfaccia comune","SD","VGA","SCART","Mini SCART","INGRESSO ANTENNA","Scheda PCMCIA","Scheda SD","PC","Set-top box/DVD","Antenna/via cavo/Satellitare","Il televisore potrebbe non avere tutte le prese."];
var contentSpan1_7Array = ["Tavoletta","PC","Router","Telefono","TV"];
var contentSpan1_8Array = ["Interruttore funzione/Accensione","Tenere premuto per accedere al timer di sospensione","Giù","Su","Volume/Canale/Sorgente"];

var contentSpan2Array = [["Premere i tasti freccia per visualizzare l'homepage.","Quindi premere OK per guardare uno dei programmi inclusi o per accedere all'App."],["Mostra data, rete e dispositivi, etc, nell'angolo in alto a destra dello schermo."],["Selezionare la sorgente in ingresso per dispositivi collegati al televisore tramite porte diverse, come TV, AV, HDMI, etc."]];

var contentSpan3Array = ["Godere e visualizzare delle proprie App preferite attraverso la pagina Smart TV.","Visualizzare foto, vedere video e riprodurre musica da un dispositivo di archiviazione USB.","Collegare il televisore e il telefono o il tablet alla stessa LAN.","Cliccare nScreen o Telecomando TV sullo smartphone o sul tablet.","Condividere foto, video e musica su schermi multipli con la propria famiglia e controllare il televisore tramite lo smartphone.","Collegare il televisore, lo smartphone o il tablet alla stessa rete LAN."];

var contentSpan4Array = [["Premere SU/GIÙ per cambiare i canali","Premere DESTRA/SINISTRA per regolare il volume."],["Premere LIST sul telecomando per visualizzare l'ordine dei canali.","Premere SU/GIÙ per scegliere il canale."],["EPG è una guida sullo schermo che visualizza i programmi TV previsti. È possibile navigare, selezionare, visualizzare e registrare i programmi."],["Cerca ed installa canali"],["Aggiungere o modificare i canali preferiti nella lista canali."]];

var contentSpan5Array = ["Godere dei propri programmi preferiti attraverso App video."];

var contentSpan6Array = [["Premere Opzione per mostrare le opzioni di impostazione di sistema.","Accedere alle impostazioni Immagine per regolare i valori."],["Premere Opzione per mostrare le opzioni di impostazione di sistema.","Accedere alle impostazioni Audio per impostare le opzioni."],["Premere Opzione per mostrare le opzioni di impostazione di sistema.","Accedere alle impostazioni Canale per impostare le opzioni."],["Aggiornare il televisore quando è disponibile una nuova versione del software."],["È possibile scegliere la lingua menù preferita"],["Permette ai genitori di bloccare i canali od i programmi che non sono adatti ai bambini."]];

var contentSpan7_1Array = [["Nessuna immagina, nessun suono","Controllare se il fusibile o l'interruttore del circuito funzionano.","Collegare un altro dispositivo elettrico nella presa per assicurarsi che funzioni o che sia attiva.","La spina non fa contatto correttamente con la presa di corrente.","Controllare la sorgente del segnale."],["Immagine normale, nessun audio.","Premere il tasto volume SU per aumentare il volume.","Impostazioni audio non corrette.","Errore nel segnale della trasmissione"],["Audio normale, nessun'immagine.","Regolare la luminosità ed il contrasto","Errore nel segnale della trasmissione","Controllare se si è in modalità Solo Audio."]];
var contentSpan7_2Array = [["Interferenza da frequenze radio.","Questa interferenza crea onde in movimento o fasce diagonali e, in alcuni casi, la perdita del contrasto nell'immagine. Trovare e rimuovere la sorgente dell'interferenza radio."],["Nessun colore","Regolare le impostazioni colore.","Provare un altro canale. Potrebbe essere in trasmissione un programma in bianco e nero."],["Il telecomando non funziona.","Sostituire le batterie","Le batterie non sono installate correttamente. L'alimentazione del televisore non è collegata."]];
var contentSpan7_3Array = [["Il contenuto del dispositivo USB non viene visualizzato.","Controllare che il dispositivo di archiviazione USB sia compatibile con il televisore.","Controllare che i formati audio ed immagine siano supportati dal televisore."],["Riproduzione senza audio","Il formato audio del video non è supportato dal riproduttore del televisore."],["I file non vengono riprodotti in modo uniforme.","La performance di trasferimento del dispositivo di archiviazione USB potrebbe limitare la velocità di trasmissione dati al televisore."]];
var contentSpan7_4Array = [["A cosa è necessario fare attenzione quando si effettua l'aggiornamento del software.","Evitare le sospensioni di corrente durante l'aggiornamento.","Evitare operazioni con il telecomando durante l'aggiornamento.","Attendere con pazienza perché il processo di aggiornamento software può impiegare un po' di tempo."],["Non ci sono cambiamenti distintivi dell'interfaccia del televisore dopo l'aggiornamento del software.","In certe condizioni, l'aggiornamento SW non solo aggiornerà o aggiungerà nuove funzioni, ma migliorerà la resa del televisore senza cambiamenti evidenti all'interfaccia. Inoltre, l'interfaccia del televisore a volte può rimanere intoccata."]];
var termsTitle = "Termini e condizioni";
var termsConditions = ["(Dichiarazione legale )di TCL - produttore di questo televisore. ","Viste le diverse funzionalità dei prodotti con servizi Smart TV, così come le limitazioni nel contenuto disponibile, alcune caratteristiche, applicazioni e servizi potrebbero non essere disponibili su tutti i dispositivi in tutti i territori. Alcune caratteristiche su Smart TV possono anche richiedere dispositivi periferici addizionali o abbonamenti che vengono venduti separatamente. Visitare il nostro sito web per maggiori informazioni su dispositivi specifici e sulla disponibilità di contenuti. I servizi e la disponibilità di contenuti attraverso la Smart TV sono soggetti a modifiche periodiche senza preavviso. \n   Tutti i contenuti e servizi accessibili attraverso questo dispositivo appartengono a terze parti e sono protetti da diritti, brevetti marchi e/o altre leggi sulla proprietà intellettuale. Tali contenuti e servizi sono forniti solamente per l’uso non commerciale. Non è consentito utilizzare contenuti o servizi in modi non autorizzati dai relativi proprietari o fornitori del servizio. Senza limitazione in quanto segue, se non espressamente autorizzato dal proprietario del contenuto o fornitore del servizio, non è possibile modificare, copiare, ripubblicare, caricare in rete, postare, trasmettere, tradurre, vendere, utilizzare per la creazione di altri lavori, divulgare o distribuire in nessun modo o mezzo nessun contenuto o servizio visualizzato attraverso questo dispositivo. \n   SI PRENDE ESPRESSAMENTE ATTO E SI ACCETTA CHE L’USO DI QUESTO DISPOSITIVO È A PROPRIO RISCHIO E CHE IL RISCHIO RIGUARDANTE QUALITÀ, PRESTAZIONI E PRECISIONE SODDISFACENTI RICADE TOTALMENTE SULL’UTENTE. IL DISPOSITIVO E I CONTENUTI E I SERVIZI DI TERZE PARTI SONO FORNITI \"COME SONO\" SENZA GARANZIA ALCUNA, NÉ ESPRESSA NÉ IMPLICITA. TCL ESCLUDE ESPRESSAMENTE OGNI GARANZIA E OBBLIGAZIONE ESPRESSA O IMPLICITA RELATIVAMENTE AL DISPOSITIVO E A QUALSIASI CONTENUTO O SERVIZIO, INCLUSE, A TITOLI ESEMPLIFICATIVO, GARANZIE DI COMMERCIABILITÀ, DI QUALITÀ SODDISFACENTE, DI IDONEITÀ DEL PRODOTTO A SODDISFARE UNO SCOPO SPECIFICO, DI PRECISIONE, DI INTRATTENIMENTO TRANQUILLO O DI NON VIOLAZIONE DEI DIRITTI DI TERZI. TCL NON GARANTISCE LA PRECISIONE, LA VALIDITÀ, L’ATTUALITÀ, LA LEGALITÀ O LA COMPLETEZZA DI NESSUN CONTENUTO O SERVIZIO RESO DISPONIBILE ATTRAVERSO QUESTO DISPOSITIVO E NON GARANTISCE CHE IL DISPOSITIVO, I CONTENUTI O I SERVIZI SODDISFINO LE ESIGENZE DELL’UTENTE O CHE IL FUNZIONAMENTO DEL DISPOSITIVO O DEI SERVIZI SIA ININTERROTTO O ESENTE DA ERRORI. IN NESSUNA CIRCOSTANZA, NEPPURE PER NEGLIGENZA, TCL SARÀ RESPONSABILE, IN RAGIONE O TORTO, PER QUALSIASI DANNO DIRETTO, INDIRETTO, ACCIDENTALE, PARTICOLARE O CONSEGUENTE, SPESE LEGALI, SPESE, O ALTRI DANNI CHE EMERGANO O SIANO IN CONNESIONE CON INFORMAZIONI CONTENUTE O COME RISULTATO DELL’USO DEL DISPOSITIVIO, O QUALSIASI CONTENUTO O SERVIZIO A CUI SI ACCEDE, ANCHE SE LA POSSIBILITÀ DI TALI DANNI ERA STATA COMUNICATA. \n   Servizi di terze parti possono essere modificati, sospesi, rimossi, conclusi o interrotti, o l’accesso può essere disabilitato in qualsiasi momento, senza preavviso, e TCL (produttore di televisori di marca Thomson) non rilascia alcuna dichiarazione o garanzia che qualsiasi contenuto o servizio rimarrà a disposizione per qualsiasi periodo di tempo. Contenuto e servizi sono trasmessi da terze parti per mezzo di reti e dispositivi di trasmissioni che non sono al di fuori del controllo di TCL. Senza limitare il carattere generale della presente esclusione di responsabilità, TCL declina espressamente ogni responsabilità per qualsiasi cambiamento, interruzione, disattivazione, rimozione, o sospensione di qualsiasi contenuto o servizio reso disponibile attraverso questo dispositivo. TCL può imporre limiti all’uso o all’accesso di certi servizi o contenuti, in ogni caso e senza preavviso né responsabilità. TCL non è neppure responsabile per il servizio clienti relativo al contenuto o ai servizi. Ogni domanda o richiesta in merito ad assistenza relativa a contenuti o servizi dovrà essere inoltrata direttamente al rispettivo fornitore di contenuti e servizi."];

var noChannelListRemind        = ["Nessun canale trovato. La lista canali è disponibile dopo la scansione canali.","Scansione dei canali"];
var closeSubtitleRemind   = "La funzione sarà disponibile quando i sottotitoli sono disattivati. Si vuole impostarlo ora?";

var estickerTitles = ["Immagini molto realistiche","Colori che diventano vivi","Movimenti realistici fantastici","Qualità dell'immagine dinamica","Miglioramento SR UHD","Vivi il mondo 3D","Performance più veloce","Futuri contenuti a 4K","Godere del mondo on line.","Accedere a contenuti extra","Sintonizzatori digitali integrati","Collegare tutti i dispositivi","Varie sorgenti 4K","Contenuti USB","WiFi ultrarapida","Contenuto mobile in televisore.","Contenuto del dispositivo mobile","Contenuto locale","Approvato da DivX","Immagine scorrevole.","Canal Ready","TDT Premium"];
var estickerDescriptions = ["Una splendida esperienza visiva grazie ad immagini con 4 volte i dettagli di un Full HD su uno schermo UHD.","L'ampia gamma di colori dà emozione ad ogni scena con rossi vivi e verdi smeraldi.","Interpolazione con struttura a 4K e retroilluminazione portano a problemi di offuscamento durante le scene di combattimento.","La chiarezza dell'immagine originale è esaltata per produrre un'espressione davvero dinamica con un contrasto brillante.","Sarà possibile godersi programmi televisivi e dischi Blu-Ray più nitidi che mai grazie alla tecnologia Super Resolution.","Vivere la televisione pronta per il 3D e guardare vari contenuti 3D.","Esperienza di intrattenimento più godibile con il Quad Core per interazioni scorrevoli e una performance esaltata.","Il codec HEVC (H.265) supporta i prossimi standard della distribuzione video 4K.","Una marea di applicazioni on line, servizi VOD (a richiesta), recupero TV e navigazione internet.","Vedere di più con servizi e contenuti addizionali dalle emittenti preferite.","Accesso ai canali TV in alta definizione senza set-top box addizionale.","Facile collegare le molte risorse digitali disponibili a casa.","Il televisore pronto per il futuro, in grado di riprodurre 4K 50/60 Hz attraverso la HDMI 2.0 con HDCP 2.2..","Contenuti video o foto direttamente da dispositivi USB, hard disk o telecamere sul grande schermo con 4K di risoluzione.","L'ultima generazione 2x2 MIMO e lo standard AC dà una velocità senza pari di accesso ad Internet.","Godere di foto, video, applicazioni dai dispositivi mobili sull'ampio schermo grazie alla tecnologia di mirroring dello schermo.","Foto, video, applicazioni da smartphone o tablet possono essere visualizzati sull'ampio schermo.","Visualizzare sul grosso schermo i contenuti locali come foto e video da dispositivi collegati alla rete locale.","Riprodurre film noleggiati o di proprietà su DivX.","Telaio ultrasottile e design super slim.","Testato e approvato da Canal+","Testato e approvato da TDT Premium"];							

var eManualTextArray = ["Manuale elettronico","Tutte le immagini all'interno sono solo a scopo rappresentativo."];
var frontPanelRemind = "Comandi frontali. Bloccati.";
var eRPRemind		 = "La modalità negozio non soddisfa la domanda rich. ERP. Sicuro?";	
var noRelatedChannel = "Nessun canale collegato.";
var option0624Name          = ["BOP","BFS","Evento per evento","GetUserID","BGM","Reset all","Azzera negozio","NRM","DVB-T2 e scelta Paese","Modalità HbbTV"];
var DVBT2AndChoice = ["Attiva","Per Paese","Disattiva"];
var hbbtvServiceRemind = "Il servizio HbbTV sarà  disponibile a breve.";
var insertWord = "Inserisci";		
var viewDetail = "Vedi dettagli";							

var remindOAD  = "Agg. software. Il nuovo agg. Software consigliato potrebbe essere presente su altro canale. Effettuando il download, il canale potrà essere automat. cambiato. Effettuare l'operazione ora?";		

var LEDStatus = ["Lampeggiante", "Normale","Disattiva"];
var netFlixRemind = "Questa funzione interromperà l’accesso ai servizi di Netflix fino a quando non si eseguirà di nuovo l’accesso.";
var ESNExplanation = "Numero di serie elettronico";
var resetShopRemind = "Reimpostazione del sistema in corso, non spegnere il televisore";
var initialSelectOption = "Selezionare un’opzione:";
var databaseRemind   = "Il sistema ha rilevato che il database è danneggiato per cause sconosciute e lo ricompilerà automaticamente; premere OK per continuare";
var Deactivation = "Disattivazione";
var oadFutureRemind = "Aggiornamento Software. Sarà disponibile un nuovo software raccomandato a %s. L'aggiornamento potrebbe impiegare alcuni minuti e lo schermo potrebbe diventare nero. Non spegnete il ricevitore durante l'aggiornamento. Se accettate l’aggiornamento, lasciate acceso il ricevitore all'orario programmato. Volete ricevere questo aggiornamento?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Uscita audio";
var bt_soundOutPutTV = "Casse TV";
var bt_soundOutPutBT = "Disp. Bluetooth";
var bt_soundOutPutBT_TV = "Bluetooth e TV";
var bt_refreshBarName = "Disposit.";
var bt_settingTips_On = "Accendere funz. Bluetooth e scans. disp.";
var bt_settingTips_Finding = "Ricerca disp. disponibili…";
var bt_settingTips_NoDevice = "Nessun disp. dispon.";
var bt_deviceList_State_NoConnect = "Non connesso";
var bt_deviceList_State_Connecting = "Connessione…";
var bt_deviceList_State_Connected = "Connesso";
var bt_deviceList_State_Paired = "Sincr.";
var bt_deviceList_Conncect_Failed_Tips1 = "Connes. fallita.";
var bt_deviceList_Conncect_Failed_Tips2 = "Confermare funzione Bluetooh XXX accesa";
var bt_deviceList_Conncect_Success = "Connesso a disp. Bluetooth.";
var bt_deviceList_Disconncect_Success = "Sconnesso da disp. Bluetooth.";
var bt_deviceList_Disconnect = "Disconnettersi da XXX?";
var bt_tipsTitle = "Suggerim.";
var bt_bluetooth_Pairing_Title = "Sincr. Bluetooth";
var bt_bluetooth_Input_Pin = "Inserire PIN:";
var bt_bluetooth_Output_Pin_Tip = "Inserire PIN XXXX con tast.";
var bt_bluetooth_Pin_Wrong_Tip = "Err. PIN";
var bt_bluetooth_Remove_Pair_Title = "Domanda";
var bt_bluetooth_Remove_Pair_Ask = "Dimenticato disp.?";
							
var audioDescriptionName = ["Descrizione audio","Altoparlante","Volume altoparlante","Cuffia","Volume cuffia","AD volume","Dispositivo Bluetooth","Volume del dispositivo Bluetooth","Amplificatore","Altoparlante"];
var audioDescriptionOptions = ["Disattiva","Normale","Descrizione audio"];
var volumeOffRemind = 'Impostare XXX “On” nel menu delle impostazioni.';
var switchSourceRemind   = " inserito. Vuoi attivare ora?";
var footballModeName = "Modalità sport";
var resetStadium = "Stadio";						

var atvSearchMenu = "ATV manual search";
var dtvSearchMenu = "DTV manual search";
var settingNoticeSourceName ="Sorgente automatica";

var smartTVOptions		= ["Portale Smart TV","HbbTV","Share & see","Visualizzazione Wi-Fi","Termini e condizioni",
    "Standby di rete","Reimposta smart TV","Cookie policy","Politica sulla riservatezza","Eliminazione dei dati"];
var supportOptions		= ["Diagnosi remota","Contattaci","Informazioni di sistema"];
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

var tvDoctor=["Diagnosi remota 2.0",
"L'app ha lo scopo di eseguire un controllo diagnostico della Smart TV e migliorare l'uso del prodotto. L'app raccoglierà dati relativi al funzionamento del televisore e informazioni sul modello e le invierà al server allo scopo di risolvere eventuali problemi dell'apparecchio. I dati personali non saranno raccolti. Accertarsi che il televisore sia connesso alla rete Internet.",
"Diagnosi locale",
"Una volta avviata la diagnosi, seguire le istruzioni dei nostri tecnici dell'assistenza.",
"Diagnosi remota",
"Prima di utilizzare questa funzione, accertarsi che un nostro tecnico dell'assistenza sia online.",
"Numero di serie:",
"&nbsp;&nbsp;&nbsp;&nbsp;ID Utente:",
"Connessione in corso",
"Diagnosi in corso. \nAccertarsi che la connessione di rete sia stabile.",
"Non è possibile accedere a Internet, \ncontrollare la connessione di rete...",
"Esci"
];
var contactUsOption = ["Contattaci",
    "Contattaci in caso di problemi di funzionamento del dispositivo.",
    "Contattaci",
    "Sito internet: Visitare",
    "Numero call center:","Informazioni sul prodotto","Nome modello:",
    "Versione software:","","ID Utente:","ID del progetto:",
    "Tipo cliente:","Indirizzo MAC wireless:","Indirizzo MAC cablato:","ESN Netflix:","Scansionare le informazioni con il cellulare.",
    " e poi scegliere il paese."];
							

//本地launcher的翻译，与服务器无关，只用于本地launcher
var homePageWords = ["Cronologia", "Ricerca"];//home页的翻译
var titlePageWords = ["Casa", "Video","TV","Applicazioni"];//index的标题翻译
var videosPageWords = ["Cinema", "Sport","Musica","Frequente","Giochi","Educazione","Notizie"];//videos页的内容翻译

//同时应用于本地和服务器
var statusPageWords = ["USB","Impostazioni","Wi-Fi","Rete cablata"];//状态栏的翻译

//二级页面的翻译
var searchPageWords = ["Ricerca", "Ricerche frequenti:","Show, Film, Persone ..."];
var resultSearchPageWords = ["Risultati di"," ", "Provare con un'altra parola chiave.","Nessun video trovato per "," "];
var historyPageWords = ["Cronologia", 'Premere','per cancellare lo storico',"Elimina uno","Elimina tutto","Ieri","Oggi"," Nessun video guardato.","Storico cancellato correttamente!"];
var channelPageWords = ["Nessun video trovato."];



//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9",
                       	   "Zoom-","0","Zoom+",
                       	   "Esci","0","",
                       	   "Lista","0","Testo",
                       	   "Guida","Invio","Esci",
                       	   "Menu","Sottotitoli","Info",
                       	   "Stop",
                       	   "Info","Menu","Esci",
                       	   "Esci"
                       	   ];

//added for LA sports mode
var sportsModeInitReminds= ["Questo wizard viene usato per configurare la chiavetta USB in modalità sport. Selezionare il tipo di installazione.",
						 "Selezionare la dimensione file per la modalità sport.",
						 "Creazione file modalità sport in corso",
						 "La velocità della chiavetta USB è troppo bassa (< %f MB/sec) per la funzione modalità sport!",
						 "La chiavetta USB è pronta per la modalità sport. Ma è consigliabile cambiarla (con una di velocità > %f MB/sec) per una resa migliore.",
						 "La chiavetta USB è pronta per la modalità sport."];

var sportsModeExtra	= ["Vuoi fermare la modalità sport e cambiare canale?",
						"Vuoi fermare la modalità sport e cambiare fonte per dispositivi collegati all’ingresso SCART?",
						"Vuoi fermare la modalità sport e cambiare fonte per dispositivi collegati all’ingresso HDMI?",
						"La modalità sport non è supportata dal canale criptato.",
						"Vuoi fermare la modalità sport e accedere all’EPG?",
						"Vuoi fermare la modalità sport e accedere a Media?",
						"Vuoi fermare la modalità sport e modificare la fonte di ingresso?",
						"Il televisore uscirà dalla modalità sport. Desideri uscire?"];
var remoteControlNote = "- Il telecomando fornito può variare a seconda del modello del prodotto";


var textArray = ["Volume","Channel","Source","Switch/Power","Guide","seconds to Power OFF"];
var guideArray = ["VOL-","VOL+","CH-","CH+","Pre","Seguente"];
var favChannelListRemind = ["Nav izlases kanālu. Lūdzu, dodieties uz citiem sarakstiem un izmantojiet „zaļo taustiņu”, lai pievienotu izlases kanālus."];

var proxySetting = ["Impostazioni proxi","Porta"];
var powerOffShop = ["È consigliato l’uso della modalità Negozio, procedere?"];
var tcastTextPageWords = ["Numerosi video e tante applicazioni","Il telecomando TV a portata di man","Fantastici contenuti condivisi su un grande schermo"];
var tcastOtherWords = ["Scansiona il codice QR e scarica T-Cast","Rete connessa alla TV","Nome TV","T-Cast"];
var hbbtvWords = ["Impostazione Hbbtv","HbbTV","Cookies","Cookie di terze parti","ID Dispositivo:","monitoraggio"];
var hbbtvTrackingWords = ["YES","NO","Non necessario"];
var eStickerTipWords = ["Lo spazio disponibile è inferiore ai 400 MB. Eliminare i video in modalità Demo per ottenere più spazio?"];
var delEstickerVideoRemid = ["Video eliminato correttamente"];
var selectSatRemind = "È possibile selezionare massimo 20 satelliti.";
var cookiePolicyTitle = "Cookie Policy – Servizi Online Smart TV";
var cookiePolicyConditions = ["La Società rispetta la tua privacy durante l'utilizzo delle Smart TV prodotte dalla Società e dei Servizi da noi offerti. I cookie sono utilizzati da molti siti web e da altri servizi internet. La tua Smart TV accetterà, memorizzerà e trasmetterà cookie al fine di garantire il corretto funzionamento di tali siti web e servizi. La Società utilizza cookie anche nell'offrirti i suoi Servizi. La presente Cookie Policy ha lo scopo di descrivere quali sono i cookie installati sulla tua Smart TV e cosa puoi fare per controllarli. \nTieni presente che non tutti i dati personali che la Società raccoglie e/o tratta attraverso o con l'aiuto dei cookie sono soggetti alla Privacy Policy. La presente Cookie Policy deve pertanto essere letta assieme alla Privacy Policy. \n1.Cos'è un cookie?\nI cookie sono stringhe di testo di piccole dimensioni che possono essere installate sulla tua Smart TV. Quando visiti un sito web o uno dei servizi ai quali è possibile accedere tramite il Red Button, il sito web o il servizio può memorizzare un cookie nella tua Smart TV. Ad ogni visita successiva, il cookie installato sulla tua Smart TV invierà informazioni al soggetto che lo ha impostato. I cookie sono molto comuni e utilizzati in diversi siti web e servizi. Ogni cookie solitamente contiene il dominio dal quale proviene il cookie, la sua durata temporale e un dato valore (di solito un unico numero). Potete trovare una spiegazione più approfondita su cosa sono i cookie e come funzionano sul sito web www.allaboutcookie.org.\nI cookie possono essere suddivisi nelle seguenti categorie:\n•	Cookie di Prima Parte: sono installati e controllati direttamente dalla Società;\n•	Cookie di Terza Parte: sono installati e gestiti da terze parti;\n•	Cookie tecnici: sono utilizzati al solo fine di effettuare la trasmissione di una comunicazione su una rete di comunicazione elettronica, o, nella misura strettamente necessaria, al fornitore di un servizio della società dell'informazione esplicitamente richiesto dall'abbonato o dall'utente a erogare tale servizio. I cookie tecnici possono essere suddivisi in tre diverse categorie: cookie di sessione, cookie analytics e i cookie di funzionalità;\n•	Cookie di sessione: sono memorizzati temporaneamente e vengono cancellati quanto l'utente chiude la finestra di navigazione;\n•	Cookie Analytics: sono utilizzati per elaborare analisi statistiche sulle modalità di navigazione degli utenti sul sito e sono raccolti in maniera anonima ed esclusivamente per finalità statistiche;\n•	Cookie di funzionalità: permettono all'utente la navigazione in funzione di una serie di criteri selezionati dall'utente, come la lingua o il paese d'origine. Questi cookie non raccolgono informazioni che possono identificare l'utente e tutte le informazioni raccolte sono anonime;  \n•	Cookie di profilazione: sono volti a creare profili relativi all'utente. Vengono utilizzati al fine di inviare messaggi pubblicitari in linea con le preferenze manifestate dallo stesso nell'ambito della navigazione in rete.\n•	Cookie persistenti: sono memorizzati sul dispositivo dell'utente e consentono al sito web di ricordare le scelte effettuate dall'utente. \nLa presente Cookie Policy riguarda i cookie installati da noi nonché i cookie pubblicitari che possono essere installati da terze parti attraverso i nostri servizi offerti sulla tua Smart TV. La presente Cookie Policy non riguarda i cookie che possono essere installati quando usi i servizi Smart TV per accedere a siti web, servizi o applicazioni di terze parti. Per informazioni su questi cookie vi rimandiamo alle rispettive cookie policy. Tuttavia, la presente Cookie Policy vi fornisce informazioni su come rimuovere tali cookie (cfr. punto 3). \nQui di seguito trovate una lista di cookie utilizzati dalla Società: [*]\nQuando utilizzi i servizi Smart TV, potranno essere inviati banner pubblicitari e annunci pubblicitari durante la visualizzazione di video. Questi messaggi pubblicitari possono essere inviati da noi, da terze parti, dai, o per il tramite dei nostri server che svolgono un ruolo di coordinamento nell'invio dei messaggi. Il nostro server pubblicitario o un server pubblicitario di terzi installerà un cookie sulla tua Smart TV. Se un messaggio pubblicitario è stato inviato sulla tua Smart TV, o un'altra persona ha cliccato sul messaggio pubblicitario durante l'utilizzo della tua Smart TV, il server pubblicitario memorizzerà questa informazione. Utilizziamo l'informazione memorizzata dal cookie pubblicitario per ricordarci quali pubblicità sono state inviate sul tuo Smart TV e poter così limitare il numero di volte in cui viene visualizzata la stessa pubblicità e definire accordi commerciali con i nostri partner pubblicitari. Non useremo questa informazione per inviare pubblicità personalizzate. Inoltre, terze parti potrebbero usare il nostro sistema pubblicitario per inviare messaggi pubblicitari sulla tua Smart TV e installare cookie sulla tua Smart TV nell'invio degli stessi.\nQuesti cookie contengono, tra le altre cose, informazioni sulle pubblicità inviate, informazioni relative all'applicazione o al dominio e il tuo indirizzo IP. Ciò avviene per ricordarci quanto spesso viene inviato un determinato messaggio pubblicitario e poter così limitare il numero di volte in cui viene visualizzata una pubblicità.\nInserzionisti terzi che possono installare pubblicità possono anche usare i cookie per monitorare la tua attività su diversi siti web ed offrire pubblicità rilevante in base alle tue preferenze.\n2.Siti web di terze parti \nQuando visiti siti web o servizi di terze parti attraverso i servizi della tua Smart TV, tali siti web o servizi potrebbero installare cookie sulla tua Smart TV nonché monitorare e memorizzare le tue attività su tali siti web. Non richiediamo né incoraggiamo tali attività e non useremo tale informazione. Per maggiori informazioni sull'utilizzo di questi cookie da terze parti vi rimandiamo alle rispettive cookie policy. \n3.Rimozione dei cookie\nL'interfaccia utente della tua Smart TV ti permette di eliminare, dalla tua Smart TV, tutti i cookie e altre informazioni memorizzate dal browser. E' altamente consigliabile eliminare tutti i cookie e le preferenze impostate prima di vendere o regalare la tua Smart TV. \n4.Contatti \nSe hai domande o commenti sulla nostra Cookie Policy o relative alla nostra attività di utilizzo dei cookie puoi mandarci una mail a FRsupport@tcl.com. \nVersione: 1.0\n"];
var privacyPolicyTitle = "Privacy Policy – Online Smart TV Services";
var privacyPolicyConditions = ["Nel trattare i tuoi dati personali rispettiamo la tua privacy. La presente Privacy Policy ha lo scopo di fornirti le informazioni sull'identità della società che raccoglie, tratta e usa i tuoi dati personali che raccogliamo con riferimento all'utilizzo che effettui dei servizi della nostra Smart TV (\"Servizi\"), sulle categorie di dati che trattiamo, sulle finalità del trattamento e sui tuoi diritti relativi al trattamento dei tuoi dati personali da noi effettuato..\n1.Titolare del trattamento\nLa raccolta, il trattamento e l'uso dei tuoi dati personali effettuato quando utilizzi i Servizi vengono compiuto da Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Provincia di Guangdong, Cina (\"Società\"), che agisce in qualità di titolare del trattamento. Tuttavia, precisiamo che noi non effettuiamo tutti i trattamenti di seguito descritti. Abbiamo comunque incluso la descrizione di tali ulteriori attività all'interno della nostra Privacy Policy in quanto tali trattamenti sono connessi all'utilizzo che fai della Smart TV.\n2.Consenso al trattamento\nLa raccolta, il trattamento e/o l'uso dei tuoi dati personali necessari per adempiere il contratto non richiede il tuo consenso. In ogni caso, alcuni trattamenti e/o usi dei tuoi dati personali richiedono il tuo consenso, libero e facoltativo. \nCon il tuo consenso al trattamento dei dati per finalità di profilazione, tu acconsenti alla raccolta, al trattamento e all'utilizzo dei dati relativi all'accensione del tuo device, alla lista dei tuoi canali DTV, alla lista dei tuoi canali preferiti, all'orario di utilizzo e ai canali guardati al fine di analizzare le abitudini per migliorare i Servizi e inviare pubblicità personalizzate e/o analizzare il numero di utenti online registrati dalla Società quotidianamente/settimanalmente/annualmente e per scambiare queste informazioni con le stazioni TV.\nCon il tuo consenso all'utilizzo dei tuoi dati personali per finalità di marketing al fine di ricevere messaggi pubblicitari, tu acconsenti alla raccolta, al trattamento e all'utilizzo dei tuoi dati personali per finalità di marketing effettuate tramite sistemi automatici (email, sms, mms, fax) e non (posta tradizionale, email, telefono).\nIl consenso per le finalità di marketing e profilazione è volontario e potrai sempre utilizzare i Servizi anche in caso di rifiuto al conferimento dei dati. In ogni caso, vedrai sempre i messaggi pubblicitari e altri contenuti non personalizzati. A prescindere dal consenso, la Società si riserva il diritto di raccogliere, trattare e/o utilizzare i dati per le finalità consentite dalla legge applicabile.\nPotrai revocare il tuo consenso in qualsiasi momento per ciascuna finalità sopra descritta e tale revoca avrà effetto per il futuro. Potrai opporti all'uso dei tuoi dati personali per finalità di marketing, ricerche di mercato o di opinione e per la personalizzazione dei Servizi basata sulle tue preferenze. Per poter revocare il tuo consenso e/o per opporti al trattamento, modifica le impostazioni privacy della tua Smart TV. Potrai inoltre, in qualsiasi momento, revocare il tuo consenso per il trattamento dei dati personali per finalità di marketing per uno o tutti i mezzi automatici e non automatici sopra elencati con effetto per il futuro.\n3.Dati Personali Raccolti\nLa Società raccoglie, tratta, conserva e usa le seguenti categorie di dati personali:\nDevice-ID: La tua Smart TV ha un numero identificativo univoco che ci consente di identificarti e di autenticare la Smart TV quando utilizzi i Servizi. Questo numero è chiamato Device-ID. Il Device-ID sarà comunicato ai nostri fornitori terzi di servizi al fine di fornirti i Servizi. Forniamo inoltre il Device-ID ai nostri fornitori terzi di servizi per finalità legate all'autenticazione. Questi fornitori terzi utilizzano il Device-ID per autenticare la tua Smart TV consentendo l'accesso ai servizi offerti dal fornitore stesso. \nIndirizzo IP e indirizzo MAC: Alla tua Smart TV viene assegnato un indirizzo IP nel momento in cui viene effettuato l'accesso ad Internet. Questo indirizzo IP viene comunicato a noi e trattato ogni qualvolta la Smart TV richiede informazioni o dati dai Servizi. Qualora la tua Smart TV si colleghi ad un router (ad esempio per il tramite della rete domestica o della WLAN locale), possiamo raccogliere e trattare l'indirizzo IP di questo router. L'indirizzo MAC è un numero univoco assegnato a ciascuna interfaccia di rete della tua Smart TV. L'indirizzo MAC viene ugualmente raccolto e trattato da noi quando la Smart TV richiede informazioni o dati dai Servizi.\nRichieste di servizio: Quando connetti la Smart TV ad Internet e la accendi, questa si connette automaticamente ai Servizi che sono gestiti dai nostri fornitori terzi di servizi. La tua Smart TV ottiene quindi la certificazione per poter accedere ai Servizi. Per le finalità di autenticazione, i Servizi salvano una o più numeri identificativi univoci relativi alla tua Smart TV. Quando si connette ai Servizi, la Smart TV trasmette l'indirizzo IP che le è stato assegnato e trasmette le informazioni specifiche del device (il modello di Smart TV e la versione del software) al fine di controllare se vi sono eventuali aggiornamenti del software disponibili.\nImpostazioni: Tramite le funzionalità offerte dai Servizi, potrai manualmente modificare l'ordine in cui le applicazioni sono mostrate dai nostri Servizi. I nostri fornitori terzi di servizi memorizzeranno le tue scelte e le altre tue preferenze selezionate durante l'utilizzo dei Servizi. Tali informazioni saranno poi collegate al Device-ID.\nInformazioni specifiche del Device: La Smart TV memorizza diverse informazioni relative al suo funzionamento e alla propria configurazione. Queste informazioni includono il modello di Smart TV, la versione del sistema operativo della Smart TV, la risoluzione dello schermo, l'ID del progetto (i.e. le informazioni sui file di configurazione), lo user agent, il browser, la versione del browser, il linguaggio e il paese per il quale è stata configurata la Smart TV. Queste informazioni saranno usate da noi e saranno fornite ai nostri fornitori terzi di servizi e contenuti. \nPubblicità: Con il tuo consenso, libero e facoltativo, i Servizi possono raccogliere informazioni da te e dalla Smart TV al fine di inviare messaggi pubblicitari. Questi messaggi pubblicitari sono inviati da noi o da terze parti utilizzando gli strumenti pubblicitari da noi previsti. Tutti i messaggi pubblicitari sono inviati, direttamente o indirettamente, dai nostri server che svolgono un ruolo di coordinamento nell'invio dei messaggi. I nostri server, o i server di terze parti, possono installare cookie sulla Smart TV. Ti preghiamo di consultare la nostra Cookie Policy per maggiori informazioni sui cookie.  \nTraffico verso i fornitori terzi di servizi e contenuti: Quando utilizzi i nostri Servizi, la tua Smart TV raccoglie informazioni dai Servizi tramite Internet. Durante questa raccolta, il tuo indirizzo IP, come sopra descritto, il linguaggio e il paese configurati sulla tua Smart TV saranno trasmessi ai nostri fornitori terzi di servizi. I nostri fornitori terzi di servizi tratteranno i dati in conformità alla presente privacy policy. \nUtilizzo del secondo schermo: Se utilizzi la nostra applicazione per il secondo schermo, le funzionalità che attivi sull'applicazione e le impostazioni relative al paese e al linguaggio, alla lista canali DTV, alla lista dei canali preferiti, alla lista programmi, al Device-ID, al canale visualizzato, alla versione del protocollo Internet e all'indirizzo IP della tua Smart TV vengono da noi raccolti e trattati sui nostri server. I nostri server controlleranno dunque la tua Smart TV come da te utilizzata tramite l'applicazione per il secondo schermo. \nHbbTV - \"Red Button\": Le stazioni TV (\"Stazioni\") possono inviare informazioni ulteriori tramite il loro segnale TV. Qualora la Smart TV riceva specifiche istruzioni all'interno di tali informazioni ulteriori - se connessa ad Internet - la Smart TV scarica un'immagine o una piccola pagina dal sito della Stazione e la mostra assieme alle informazioni relative alla necessità di cliccare il Red Button sul tuo telecomando se vuoi utilizzare servizi ulteriori offerti dalla Stazione stessa. Questo accade ogni volta in cui tu cambi canale. Scaricando l'immagine dal sito della Stazione, la Smart TV trasmette alcuni dati personali (i.e. la lista di canali DTV, il canale visualizzato, le informazioni sull'evento, l'orario della TV, l'indirizzo IP della tua Smart TV e i cookie salvati sulla tua Smart TV (se presenti). La Stazione è responsabile per la raccolta, il trattamento e/o l'uso di questi dati. Inoltre, qualora tu utilizzi servizi ulteriori offerti dalla Stazione tramite il Red Button, la Stazione può raccogliere altri dati personali a te relativi (quali, ad esempio, i video on-demand da te visualizzati, le notizie lette, etc.).\n4.Finalità per cui i tuoi dati personali sono trattati e/o usati\nTrattiamo i dati raccolti per le seguenti finalità necessarie alla fornitura dei nostri Servizi:\n•	Fornire i Servizi: Noi utilizziamo l'indirizzo IP e l'indirizzo MAC, il Device-ID, la versione del sistema operativo della Smart TV, il modello della tua Smart TV e la risoluzione dello schermo, l'ID del progetto (i.e. le informazioni relative ai file di configurazione), la tua lista canali DTV, i canali visualizzati, il fuso orario, le impostazioni riferite al paese e alla lingua scelti al fine di fornire alla tua Smart TV l'accesso ai Servizi e i servizi offerti dai fornitori terzi di servizi terzi. Le finalità includono, ma non sono limitate a, l'autenticazione, la fornitura di servizi basati sulla tua posizione geografica (ad esempio le previsioni metereologiche), la gestione degli abusi, la gestione degli incidenti, il controllo della disponibilità dei Servizi e la fornitura di servizi di backup delle preferenze selezionate dall'utente.\n•	Autenticazione: Utilizziamo il Device-ID e l'indirizzo MAC per finalità di autenticazione.\n•	Aggiornamenti del Software: Ogni volta in cui la tua Smart TV viene accesa, la stessa ci comunica l'indirizzo IP, il Device-ID, la versione del software, il modello della tua Smart TV, l'ID del progetto (i.e. i file di configurazione), lo user ID, il numero seriale necessario per fornirti gli aggiornamenti software necessari. \n•	Negozi: Comunichiamo il Device-ID a fornitori terzi di contenuti selezionati al fine di consentire loro di valutare in quale misura possono fornirti l'accesso ai titoli on Demand della loro collezione. \n•	Obblighi di legge: Le forze di polizia e le autorità giudiziarie possono richiederci di fornire loro i dati raccolti. Qualora ciò accada, noi lo faremo a condizione che vi sia una valida richiesta, quale un mandato o un ordine del giudice, che ci richiede di collaborare con le autorità stesse. \nFornire i dati per le finalità sopra indicate è necessario e l'eventuale rifiuto da parte tua ti impedirà di utilizzare i Servizi.\nL'uso dei Servizi è possibile utilizzando pseudonimi, salvo che specifici servizi ti richiedano di fornire il tuo nome e/o l'indirizzo email.\n5.Categorie dei terzi destinatari dei dati\nLa Società comunica i tuoi dati personali raccolti durante l'uso dei Servizi alle seguenti terze parti:\n•	fornitori terzi dei servizi delle Smart TV, qualora tu richieda questi servizi (ad esempio qualora tu installi Netflix sulla tua Smart TV, noi comunicheremo il tuo indirizzo IP, indirizzo MAC e la versione del software e il modello della TV con Netflix); \n•	fornitori terzi di contenuti, qualora tu richieda determinati contenuti a tali fornitori (ad esempio al fine di fornirti i servizi relativi alla GoLive IP TV, noi comunicheremo alla società che fornisce i servizi di GoLive il modello della tua TV, l'indirizzo IP e le impostazioni del linguaggio);\n•	terze parti per le quali tu hai dato il tuo consenso al trasferimento dei dati;\n•	fornitori di servizi di outsourcing in qualità di responsabili del trattamento che assistono la Società nella fornitura di Servizi.\nLa Società comunica i tuoi dati personali ad altre terze parti solo se obbligata a farlo dalla legge (ad esempio, su richiesta delle autorità di polizia o giudiziarie), se tu hai dato il tuo consenso alla relativa comunicazione o se la comunicazione è comunque legittima in base alla legge applicabile. \n6.Paesi in cui i tuoi dati vengono trattati\nLa Società e/o alcuni dei destinatari dei tuoi dati personali sopra elencati potrebbero essere situati fuori dallo Spazio Economico Europeo (i.e. nei seguenti paesi: Repubblica Popolare Cinese, Stati Uniti d'America). Pertanto, i tuoi dati personali possono essere trattati in paesi che non garantiscono un livello di protezione adeguato pari a quello previsto dalla Direttiva 95/46/EC del Parlamento Europeo e del Consiglio del 24 Ottobre 1995 sulla protezione degli individui con riferimento al trattamento dei dati personali e alla libera circolazione degli stessi. \n7.I tuoi diritti\nPotrai contattare la Società al fine di ricevere le informazioni sul trattamento dei tuoi dati personali effettuato dalla Società e/o per esercitare i tuoi diritti relativi, ad esempio, all'accesso, rettifica, cancellazione e blocco dei tuoi dati personali, e/o per opporti al trattamento dei tuoi dati personali per finalità di marketing e/o ricerche di mercato o di opinione.\n8.Modifiche alla Privacy Policy\nAl fine di migliorare i nostri Servizi possiamo modificare la nostra Privacy Policy - ad esempio utilizzando nuove tecnologie o introducendo nuovi servizi. Ci riserviamo inoltre il diritto di cambiare o integrare la presente Privacy Policy in qualsiasi momento. \n9.Informazioni di contatto\nPer qualsiasi richiesta relativa alla Privacy Policy o per reclami relativi al trattamento dei tuoi dati personali o per ricevere la lista aggiornata dei responsabili del trattamento, ti preghiamo di contattarci utilizzando uno dei seguenti indirizzi:\nEmail: FRsupport@tcl.com\nVersione: 1.0\n"];
var privacyPolicyTerms = [
    "Attiva il servizio Smart TV.",
    "L'utente acconsente alla raccolta, al trattamento e all'utilizzo dell'ora di avvio del dispositivo, dell'elenco dei canali DTV, dell'elenco dei canali preferiti, dell'ora della visualizzazione e dei canali visti allo scopo di analizzare le abitudini dell'utente e migliorare il servizio e/o analizzare quanti utenti online ha TCL ogni giorno/mese/anno; egli inoltre acconsente alla condivisione di suddette informazioni con le stazioni televisive.",
    "Attiva il Servizio elementi consigliati.",
    "Attiva l'applicazione secondo schermo per i dispositivi mobili.",
    "Attiva l'aggiornamento automatico del software.",
    "Attivare il servizio FreeviewPlay."
];
var privacyPolicyTips = [
    "Tutti i servizi Smart TV saranno disattivati.",
    "Il servizio HbbTV fornito dai canali televisivi sarà disattivato durante l'uso del sintonizzatore integrato.",
    "Il servizio dei programmi e contenuti televisivi consigliati sarà disattivato.",
    "L'applicazione secondo schermo sarà disattivata.",
    "Il televisore non verificherà la disponibilità di aggiornamenti software e nuove funzionalità.",
    "I contenuti FreeviewPlay saranno disabilitati."
];
var privacyPolicyRemind = "Selezionare la casella di controllo corrispondente in Impostazioni.";
var set = "Imposta";
var copyShopDemoTips = ["Collegato alla USB, vuoi copiare da video al flash?","Copiare il video sul flash","Il video è stato copiato con successo!","Errore copia video!"];
var dataDeletionWords = ["Eliminare o dati del servizio di Smart TV sui server back-end.","Note: I dati relativi all’utente di Smart TV saranno eliminati un mese dopo aver abilitato questo elemento. Si noti che l’eliminazione non riguarda i dati archiviati localmente sul televisore.","Non inviare più i dati al server Smart TV.","Note:  I dati personali relativi all’utilizzo dei servizi di Smart TV non saranno più trasferiti al server dopo aver abilitato questo elemento. Il televisore non riceverà più i servizi consigliati.","Per ulteriori informazioni, visitare il sito web www.tcl.eu"];
var miracastWords = ["Connessione wireless","Duplicazione telefono Android sul televisore","Fare clic per collegare","Questa funzione è disponibile solo su smartphone Android"];
var miracastTips = ["Fasi della connessione","Aprire le impostazioni del sistema","Maggiori modalità di connessione \n / Altre connessione wireless","Selezionare display wireless","Fare clic per collegare \n in attesa di essere rilevato"];
var termsAndConditions = ["\nI contenuti e servizi (collettivamente \"l'Applicazione concessa in licenza\") resi disponibili attraverso il TV set (il \"Dispositivo\") sono concessi in licenza, non venduti a Lei, per l'uso unicamente stabilito dalle presenti condizioni contrattuali. I fornitori dell'Applicazione concessa in licenza (ciascuno un \"Fornitore di App\") si riservano tutti i diritti non espressamente concessi a Lei.\n\n1.Ambito della Licenza\n\nIl Fornitore di App Le concede una licenza non trasferibile per l'utilizzo dell'Applicazione concessa in licenza sul Dispositivo che Lei possiede o controlla. Lei non può distribuire né mettere a disposizione l'Applicazione concessa in licenza su una rete utilizzabile da più dispositivi allo stesso momento. Lei non può dare in noleggio, in leasing, in prestito, vendere, ridistribuire o sub-licenziare l'Applicazione concessa in licenza. \n\nTutte le Applicazioni concesse in licenza e ogni contenuto ivi presente accessibile attraverso il Dispositivo appartengono al Fornitore di App e sono tutelati dalle leggi applicabili in materia di proprietà intellettuale. Fatto salvo quanto diversamente stabilito dalla legge applicabile, Lei non può modificare, copiare, decompilare, effettuare il reverse-engineering, smantellare, ripubblicare, caricare, pubblicare, trasmettere, tradurre, tentare di ottenere il codice sorgente da, creare opere derivate da, o altrimenti sfruttare, qualsiasi Applicazione concessa in licenza, eventuali aggiornamenti o qualsiasi sua parte. La violazione di tali restrizioni potrebbe essere perseguibile e passibile di risarcimento danni. Le condizioni della licenza regolano tutti gli eventuali aggiornamenti forniti dal Fornitore di App che sostituiscono e/o integrano l'Applicazione concessa in licenza originaria, salvo che l'aggiornamento sia accompagnato da una licenza separata, nel qual caso prevarranno le condizioni di quest'ultima. Lei sarà ritenuto unico responsabile per tutti i costi (se presenti) per l'aggiornamento della Applicazione concessa in licenza.\n\n2.Materiale di terze parti\n\nL'Applicazione concessa in licenza può consentire l'accesso a servizi e siti web del Fornitore di App e terze parti (collettivamente i \"Servizi\"). L'utilizzo di uno qualsiasi dei Servizi può comportare la Sua visualizzazione di materiale che può essere considerato offensivo, indecente o di cattivo gusto, i cui contenuti possono essere o meno identificati come materiale con linguaggio esplicito, e che i risultati di ricerche o dell'immissione di uno specifico URL possono generare automaticamente e involontariamente collegamenti o riferimenti a materiale offensivo. Ciò nondimeno, il produttore del Dispositivo (il, \"Produttore\") e il Fornitore di App non si assumono alcuna responsabilità nei Suoi confronti in caso di contenuto offensivo, indecente o di cattivo gusto. \n\nIl Produttore non è tenuto a controllare o valutare il contenuto, l'accuratezza, la completezza, la tempestività, la validità, la conformità ai diritti di copyright, la legalità, la qualità o qualsiasi altro aspetto di tali Servizi. Il Produttore non garantisce o avvalla né si assume alcuna responsabilità nei Suoi confronti o di qualsiasi altra persona per qualsiasi eventuale Servizio. \n\nI Servizi possono includere contenuti, informazioni e materiali proprietari (collettivamente \"Materiali di terze parti\") protetti da diritti di proprietà intellettuale e da altre leggi applicabili, e Lei non potrà utilizzare tali Materiali di terze parti in alcun modo ad eccezione dell'utilizzo consentito dei Servizi. Fatto salvo quanto diversamente stabilito dalla legge applicabile, Lei accetta di non riprodurre, modificare, dare in noleggio, in prestito, vendere, distribuire i Materiali di terze parti o creare prodotti derivati in alcuna maniera nonché di non sfruttare i Servizi in modo non autorizzato. Lei accetta di non utilizzare i Servizi in alcun modo per molestare, abusare, perseguitare, minacciare, diffamare o comunque violare i diritti di qualsiasi altra parte, e il Produttore non è in alcun modo responsabile per un tale utilizzo da parte Sua, né per eventuali messaggi o trasmissioni moleste, minatorie, diffamatorie, offensive o illegali che Lei può ricevere come conseguenza dell'utilizzo di uno qualsiasi di questi Servizi. \n\n3.Garanzia\n\nTutte le Applicazioni concesse in licenza e i Servizi vengono forniti \"nello stato in cui si trovano\" e \"così come sono disponibili\", senza garanzie di alcun tipo, sia espresse che implicite. Rispetto alle Applicazioni concesse in licenza e i Servizi, il Produttore esclude specificamente garanzie e condizioni espresse o implicite di qualunque tipo, incluse in via esemplificativa, garanzie di commerciabilità, di qualità, di idoneità per un determinato uso, di accuratezza, di intrattenimento e di non violazione di diritti di terze parti. Il Produttore non garantisce l'accuratezza, la validità, la tempestività, la legalità o la completezza di alcuna Applicazione concessa in licenza o Servizio reso disponibile attraverso il Dispositivo e non garantisce che il Dispositivo, le Applicazioni concesse in licenza o i Servizi soddisfino le Sue esigenze, o che l'operatività delle Applicazioni concesse in licenza o i Servizi avverrà senza interruzione o esente da errori, o che difetti presenti nell'Applicazione concessa in licenza o Servizi verranno corretti. Qualora l'Applicazione concessa in licenza o i Servizi dovessero rivelarsi difettosi, Lei si assumerà i costi di tutte le necessarie attività di manutenzione, riparazione e correzione.\n\nLe Applicazioni concesse in licenza e i Servizi possono essere modificati, sospesi, rimossi, cancellati o interrotti, nonché l'accesso può essere disattivato in qualsiasi momento, senza preavviso, e il Produttore non fornisce alcuna dichiarazione o garanzia che i contenuti o servizi ivi compresi nelle Applicazioni concesse in licenza e Servizi resteranno a disposizione per un determinato periodo di tempo. Tali contenuti e servizi vengono trasmessi a terze parti attraverso reti e mezzi di trasmissione sul quale il Produttore non ha nessun controllo. Fermo restando quanto precede, il Produttore declina espressamente qualsiasi tipo di responsabilità in caso di modifica, interruzione, disabilitazione, rimozione o sospensione di qualsiasi contenuto o servizio messo a disposizione attraverso il Dispositivo. Il Fornitore di App e altri fornitori di Servizi si riservano il diritto di modificare, sospendere, rimuovere o disabilitare l'accesso a qualsiasi Applicazione concessa in licenza o Servizio in qualsiasi momento e senza preavviso. Il Produttore può anche imporre limiti sull'utilizzo o l'accesso a talune Applicazioni concesse in licenza o Servizi, in qualsiasi caso e senza previa comunicazione o responsabilità.\n\nIl Produttore non fornisce servizio di assistenza clienti per le Applicazioni concesse in licenza e i Servizi. Qualsiasi domanda o richiesta di servizio riguardante l'Applicazione concessa in licenza e i Servizi vanno formulate direttamente al fornitore competente.\n\n4.Raccolta e Uso delle Informazioni\n\nIl Produttore, i Fornitori di App e i fornitori dei Servizi possono raccogliere e utilizzare dati tecnici e relative informazioni, tra cui a titolo esemplificativo dati tecnici riguardanti il Dispositivo, il software applicativo e di sistema, e periferiche, per agevolare gli aggiornamenti del software, assistenza al prodotto e altri servizi (se presenti) relativi al Dispositivo e all'Applicazione concessa in licenza. Il Produttore, i Fornitori di App e i fornitori dei Servizi possono utilizzare tali informazioni, purché siano in un formato tale da non consentire la Sua identificazione, per migliorare i prodotti o per fornirLe servizi o tecnologie. Per ulteriori informazioni circa la raccolta e l'uso delle informazioni, potete consultare la nostra privacy policy http://www.tcl.eu/en/. \n\n5.Mancata disponibilità di talune Funzioni\n\nA causa di restrizioni imposte da Fornitori di App, talune funzioni, applicazioni e servizi potrebbero non essere disponibili sul Dispositivo (compresi i dispositivi periferici) o in tutti i territori. Alcune funzioni del Dispositivo potrebbero richiedere periferiche aggiuntive o il versamento di una quota di iscrizione le quali sono vendute separatamente.\n\n6.Limitazione della Responsabilità\n\nFatto salvo quanto diversamente previsto dalla legge applicabile, in nessun caso, ivi compresa la negligenza, il Produttore sarà responsabile, sia a livello contrattuale che a causa di azione illecita, per qualsiasi danno diretto, indiretto, incidentale, speciale o consequenziale, spese incorse, comprese quelle legali, o qualsiasi altro danno che scaturisce da, o in connessione con, qualsiasi informazione contenuta o derivante dall'uso del Dispositivo, eventuali Applicazioni concesse in licenza o Servizi utilizzati da Lei o da terze parti, anche se avvisati in ordine all'eventualità di tali danni.\n\nIl Produttore sarà ritenuto responsabile solo in caso di dolo e colpa grave."];
var privacyNotice = ["\n\nNel trattare i tuoi dati personali rispettiamo la tua privacy. La presente Informativa sulla Privacy ha lo scopo di fornirti le informazioni sull'identità della società che tratta i tuoi dati personali che raccogliamo con riferimento all'utilizzo che effettui dei servizi della nostra Smart TV (\"Servizi\"), sulle categorie di dati che raccogliamo, per cosa li utilizziamo e sui tuoi diritti relativi al nostro utilizzo dei dati personali.\n\n1.	Titolare del trattamento e rappresentante nell'Unione Europea\n\nLa raccolta, il trattamento e l'uso dei tuoi dati personali effettuato quando utilizzi i Servizi vengono compiuti da Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Provincia di Guangdong, Cina(\"Società\"). I nostri dati di contatto, così come i dati di contatto dei nostri rappresentanti nell'Unione Europea, sono forniti nella Sezione 12 in basso. Tuttavia, precisiamo che noi non effettuiamo tutti i trattamenti di seguito descritti. Abbiamo comunque incluso la descrizione di tali ulteriori attività all'interno della nostra Informativa sulla Privacy in quanto tali trattamenti sono connessi all'utilizzo che fai della Smart TV.\n\n2.	Consenso al trattamento\n\nAlcune attività di trattamento dei dati personali da noi svolte richiedono il tuo consenso, ad es. l'utilizzo dei tuoi dati personali per il miglioramento dei Servizi.\n\nIl consenso è volontario e potrai sempre utilizzare i Servizi anche in caso di rifiuto al conferimento dei dati. In ogni caso, potresti vedere contenuti non personalizzati in base alle tue preferenze. A prescindere dal consenso, ci riserviamo il diritto di trattare i tuoi dati personali per le finalità consentite dalla legge applicabile.\n\nPotrai revocare il tuo consenso in qualsiasi momento. La revoca del consenso non pregiudica la liceità del trattamento basata sul consenso prestato prima della revoca. Per poter revocare il tuo consenso e/o per opporti al trattamento (c.f.r. la Sezione 10 e l'Allegato I Tuoi Diritti in basso, relativamente al tuo diritto di opposizione), modifica le impostazioni privacy della tua Smart TV di conseguenza.\n\n3.	Categorie specifiche di Dati Personali\n\nIn particolare, noi trattiamo le seguenti categorie di dati personali:\n\nDevice-ID: La tua Smart TV ha un numero identificativo univoco che ci consente di identificare e autenticare la Smart TV quando utilizzi i Servizi. Questo numero è chiamato Device-ID. \n\nIndirizzo IP e indirizzo MAC: Alla tua Smart TV verrà assegnato un indirizzo IP nel momento in cui viene effettuato l'accesso ad Internet. Qualora la tua Smart TV si colleghi ad un router (ad esempio per il tramite della rete domestica o della WLAN locale), possiamo trattare l'indirizzo IP di questo router. L'indirizzo MAC è un numero univoco assegnato a ciascuna interfaccia di rete della tua Smart TV. \n\nInformazioni specifiche del Device: La Smart TV raccoglie diverse informazioni relative al suo funzionamento e alla propria configurazione. Queste informazioni includono il modello di Smart TV, la versione del sistema operativo della Smart TV, la risoluzione dello schermo, l'ID del progetto (ossia. le informazioni sui file di configurazione), lo user agent, il browser, la versione del browser, il linguaggio e il paese per il quale è stata configurata la Smart TV.\n\nQueste informazioni saranno usate da noi e saranno fornite ai nostri fornitori terzi di servizi e contenuti per le finalità descritte di seguito.\n\n4.	Finalità per cui sono trattati e/o usati i tuoi dati personali e basi giuridiche\n\nLe finalità per le quali trattiamo i tuoi dati personali e le rispettive basi giuridiche sono descritte di seguito. Nella misura in cui la finalità indicata in basso come base giuridica è la finalità contrattuale, non potremo fornirti i Servizi qualora tu non ci fornisca i relativi dati. Nella misura in cui la base giuridica del trattamento sia il tuo consenso, sei libero di fornire o negare il tuo consenso. Qualora tu non fornisca il tuo consenso, non tratteremo i tuoi dati personali per la relativa finalità.\n\n•	Fornire i Servizi: Noi utilizziamo l'indirizzo IP e l'indirizzo MAC, il Device-ID, la versione del sistema operativo della Smart TV, il modello della tua Smart TV e la risoluzione dello schermo, l'ID del progetto (ossia le informazioni relative ai file di configurazione), la tua lista canali DTV, i canali visualizzati, il fuso orario, le impostazioni riferite al paese e alla lingua scelti al fine di fornire alla tua Smart TV l'accesso ai Servizi e i servizi offerti dai fornitori di contenuti. Le finalità includono, ma non sono limitate a, la fornitura di servizi basati sulla tua posizione geografica (ad esempio le previsioni metereologiche), la gestione degli abusi, la gestione degli incidenti, il controllo della disponibilità dei Servizi e la fornitura di servizi di backup delle preferenze selezionate dall'utente.\n\nQuando utilizzi i Servizi, la tua Smart TV richiederà i dati dai Servizi tramite Internet. Nell'ambito di queste richieste, verranno trasmessi al nostro fornitore di servizi il tuo indirizzo IP come descritto sopra, la lingua e il paese configurati nella tua Smart TV. Il nostro fornitore di servizi tratterà i relativi dati in conformità alla presente informativa sulla privacy.\n\nLa base giuridica del rispettivo trattamento dei tuoi dati personali è la finalità contrattuale ai sensi dell'Articolo 6, paragrafo 1, lettera b del Regolamento Generale sulla Protezione dei Dati Personali (\"GDPR\").\n\n•	Impostazioni di Servizio: Nell'ambito del normale funzionamento dei Servizi, puoi stabilire manualmente l'ordine in cui le app sono visualizzate dai Servizi. Il nostro fornitore di servizi conserverà la tua disposizione e le altre preferenze che potresti impostare quando utilizzi i Servizi. Queste informazioni saranno collegate al Device-ID.\n\nLa base giuridica del rispettivo trattamento dei tuoi dati personali è la finalità contrattuale ai sensi dell'Articolo 6, paragrafo 1, lettera b del GDPR.\n\n•	Autenticazione: Ogni volta che colleghi la tua Smart TV ad Internet e accendi la tua Smart TV, questa si connetterà automaticamente ai Servizi, che sono gestiti dal nostro fornitore di servizi. La tua Smart TV sarà quindi autenticata così da essere abilitata per l'accesso ai Servizi. Per la finalità di autenticazione, i Servizi raccolgono uno o più numeri identificativi univoci relativi alla tua Smart TV. Noi utilizziamo il Device-ID e l'indirizzo MAC per finalità di autenticazione. Forniamo inoltre il Device-ID a fornitori di contenuti selezionati per finalità di autenticazione. Questi fornitori di contenuti utilizzano il Device-ID per autenticare la tua Smart TV per accedere ai servizi forniti dal fornitore di contenuti.\n\nLa base giuridica del rispettivo trattamento dei tuoi dati personali è la finalità contrattuale ai sensi dell'Articolo 6, paragrafo 1, lettera b del GDPR.\n\n•	Diagnostica a distanza: Nell'ambito dei Servizi, ti forniamo servizi di diagnostica a distanza. Pertanto, trattiamo il Device-ID, il numero di dispositivo, il numero seriale, l'indirizzo MAC, gli errori di log, i codici di errore e le descrizioni degli errori forniti automaticamente dalla componente non funzionante (applicazione, sistema middleware).\n\nInoltre, se contatti il nostro servizio di assistenza clienti, previa tua autorizzazione, un  addetto all'assistenza potrà anche accedere da remoto alla tua TV ed eseguire ulteriori servizi di diagnostica a distanza. In tal caso, l'addetto all'assistenza clienti otterrà l'accesso alla tua TV e alle reti, all'applicazione e ai file di dati memorizzati, e potrà trattare il Device-ID, il numero di dispositivo, il numero seriale, l'indirizzo MAC, gli errori di log, i codici di errore e le descrizioni degli errori, il Terminal ID, le informazioni sulle APP installate, lo screenshot della TV e le informazioni sul dispositivo USB/Bluetooth collegato per valutare lo stato della TV e delle relative applicazioni e dati. Gli errori di log possono contenere informazioni, come la cronologia dei programmi TV, la lista di riproduzione musicale, il nome utente e la password dell'APP se un'APP di terze parti utilizzata per la trasmissione non ha criptato tali informazioni. Questo verrà fatto per diagnosticare i problemi, modificare le impostazioni di sistema in base alla tua richiesta, o per correggere i problemi segnalati. Inoltre, su richiesta, gli addetti all'assistenza clienti possono risolvere i problemi, eseguire programmi o installare/disinstallare software, riconfigurare e/o eseguire in altro modo interventi di assistenza o supporto tecnico sulla TV.\n\n  \n\nQualsiasi accesso da remoto avrà luogo solo dopo che avrai abilitato la funzione di supporto remoto selezionando l'apposita casella di controllo sulla tua TV e terminerà dopo la rispettiva sessione.\n\nLa base giuridica del rispettivo trattamento dei tuoi dati personali è la finalità contrattuale ai sensi dell'Articolo 6, paragrafo 1, lettera b del GDPR.\n\n•	Servizio post-vendita: Ai sensi della legge applicabile, è possibile che tu abbia una garanzia o simili diritti per ottenere dei servizi post-vendita. TCL Europe, 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, Francia è responsabile per la gestione dei reclami in garanzia e per altre richieste per i servizi post-vendita e per il trattamento dei dati personali ad essi associati. Ciò significa che TLC Europe, per la finalità dei servizi post vendita, agisce in qualità di titolare del trattamento e noi non abbiamo responsabilità per il relativo trattamento dei tuoi dati personali.\n\nQuando richiedi un nostro servizio di assistenza post-vendita, il tuo nome, indirizzo email, numero di telefono, richiesta di servizio e indirizzo postale contenuti nella fattura possono essere richiesti per la finalità di fornirti il servizio post-vendita. Le informazioni possono essere raccolte anche attraverso i partner che si occupano di post-vendita dei nostri rivenditori o fornitori di servizi autorizzati, qualora tu dovessi contattarli per il servizio. Per ulteriori informazioni sulla protezione dei dati personali in relazione ai servizi post-vendita, puoi contattare TLC Europe utilizzando i dati di contatto indicati nella Sezione 12 in basso.\n\nLa base giuridica del rispettivo trattamento dei tuoi dati personali è la necessità di adempiere un obbligo legale ai sensi dell'Articolo 6, paragrafo 1, lettera c del GDPR.\n\n•	T-Channel: Il T-Channel è la pagina principale per l'utilizzo della Smart TV sul sistema operativo Linux (per l'utilizzo del sistema operativo android guardare in basso) e ti consente di selezionare determinati contenuti.\n\nLa base giuridica del trattamento dei tuoi dati personali necessari per l'utilizzo del T-Channel è la finalità contrattuale ai sensi dell'Articolo 6, paragrafo 1, lettera b del GDPR.\n\nPrevio tuo consenso, controlleremo anche l'utilizzo del T-Channel, ossia:\n\n	Quando cominci ad utilizzare il T-Channel, registreremo il tempo di accesso e di uscita dal T-Channel.\n\n	Quando cominci a vedere un video del T-Channel, registreremo il nome e la durata del video (non si applica per Netflix, YouTube e qualsiasi altro servizio fornito da terzi).\n\n	Quando accedi ad una pagina o esci da una pagina, registreremo il tempo di permanenza sulla pagina.\n\n	Quando sposti il cursore da una posizione ad un'altra, o accedi ad un'applicazione, registreremo tale evento.\n\n	Quando installi, rimuovi o aggiorni delle applicazioni, registreremo queste attività, compreso il nome delle applicazioni.\n\nRaccogliamo queste informazioni principalmente per l'analisi dei big data al fine di migliorare i prodotti e fornire agli utenti migliori servizi sui contenuti.\n\nLa base giuridica del trattamento dei tuoi dati personali in relazione al monitoraggio del tuo utilizzo del T-Channel è il tuo consenso, ai sensi dell'Articolo 6, paragrafo 1, lettera a del GDPR.\n\nSe hai acquistato una Android TV e utilizzi il sistema operativo android di Google, i tuoi dati personali saranno trattati da Google e noi non abbiamo responsabilità per tale trattamento. Si prega di fare riferimento alla informativa sulla privacy di Google per avere informazioni circa il relativo trattamento dei tuoi dati personali e i tuoi relativi diritti.\n\n•	T-Cast: T-Cast ti permette di controllare la tua TV utilizzando il tuo telefono e di condividere, video, musica ed immagini contenute nel tuo smart phone sulla TV. T-Cast ti permette inoltre di condividere lo schermo del tuo smart phone sulla tua TV.\n\nIl download e l'utilizzo dell'app sono volontari. Se scarichi e utilizzi l'app, tratteremo il tuo indirizzo MAC per calcolare quante versioni di T-Cast sono state utilizzate sul mercato. Ciò è richiesto per poterti offrire il servizio. Se utilizzi la nostra funzionalità per il secondo schermo, raccoglieremo e tratteremo sui nostri server le funzionalità che hai attivato sull'applicazione, le impostazioni sul paese e sulla lingua, la lista dei canali DTV, la lista dei canali preferiti, la lista dei programmi, il Device-ID, il canale attuale, la versione del protocollo e l'indirizzo IP della tua Smart TV. I nostri server controlleranno poi la tua Smart TV come da te indicato nell'app.\n\nLa base giuridica del rispettivo trattamento dei tuoi dati personali è la finalità contrattuale ai sensi dell'Articolo 6, paragrafo 1, lettera b del GDPR.\n\n•	TCL Assistant: Il TCL Assistant è una funzionalità che permette alla tua TV di connettersi a dispositivi compatibili con Amazon Alexa (come Echo) per controllare tale dispositivo attraverso il riconoscimento vocale. Per poter utilizzare questa funzione è necessario prima registrare la propria TV sul sito web di Amazon usando il codice TCL che si trova sulla TV. È quindi possibile inviare comandi vocali al dispositivo compatibile con Amazon Alexa premendo il pulsante del microfono sul telecomando della TV.\n\nSe utilizzi il TCL Assistant, la TV rileva la tua voce e la invia ad Amazon Alexa Cloud per il riconoscimento vocale e l'ulteriore trattamento. I tuoi dati saranno trasferiti direttamente ad Amazon e nessun dato verrà ulteriormente trattato o memorizzato localmente sulla tua TV. Si prega di fare riferimento all'informativa sulla privacy di Amazon per informazioni sull'ulteriore trattamento dei tuoi dati da parte di Amazon.\n\nLa base giuridica del rispettivo trattamento dei tuoi dati personali è la finalità contrattuale ai sensi dell'articolo 6, paragrafo 1, lettera b), del GDPR.\n\n•	Alexa Voice Recognition (AVS): AVS è una funzionalità che consente di controllare la TV attraverso la propria voce. Per utilizzare questa funzione è necessario prima registrare la propria TV sul sito Amazon utilizzando il codice di registrazione generato da Amazon. È quindi possibile inviare comandi vocali alla TV premendo il pulsante del microfono sul telecomando della TV.\n\nSe utilizzi l'AVS, la TV rileva la tua voce e la invia ad Amazon Alexa Cloud per il riconoscimento vocale e l'ulteriore trattamento. I tuoi dati saranno trasferiti direttamente ad Amazon e nessun dato verrà memorizzato localmente sulla tua TV. Si prega di fare riferimento all'informativa sulla privacy di Amazon per informazioni sull'ulteriore trattamento dei tuoi dati da parte di Amazon.\n\nQuando utilizzi l'AVS, verrà richiesto  il nome della tua TV per consentirci di individuare la TV che si desidera controllare.\n\nLa base giuridica del rispettivo trattamento dei dati personali è la finalità contrattuale ai sensi dell'articolo 6, paragrafo 1, lettera b), del GDPR.\n\nInoltre, registreremo la frequenza e la durata di utilizzo dell'AVS e la funzione utilizzata all'interno di AVS. Raccogliamo queste informazioni per migliorare i prodotti e fornire agli utenti servizi con contenuti di maggiore qualità.\n\nLa base giuridica del rispettivo trattamento dei tuoi dati personali sono i nostri interessi legittimi ai sensi dell'articolo 6, paragrafo 1, lettera f), del GDPR. Ulteriori informazioni sul test di bilanciamento sono disponibili su richiesta.\n\n•	Aggiornamenti del Software: Gli aggiornamenti dei Software fanno parte dei Servizi. Pertanto, ogni volta in cui la tua Smart TV viene accesa, la stessa ci comunica l'indirizzo IP, il Device-ID, il numero del dispositivo, la versione del software, il modello della tua Smart TV, l'ID del progetto (ossia. i file di configurazione), lo user ID e il numero seriale necessario per verificare se siano disponibili aggiornamenti software e per offrirti e fornirti gli aggiornamenti software necessari.\n\nLa base giuridica per il rispettivo trattamento dei tuoi dati personali è la finalità contrattuale ai sensi dell'Articolo 6, paragrafo 1, lettera b del GDPR.\n\n•	Obblighi di legge: Le forze di polizia e le autorità giudiziarie possono richiederci di fornire loro i dati raccolti. Qualora ciò accada, noi lo faremo a condizione che vi sia una valida richiesta, quale un mandato o un ordine del giudice, che ci richiede di collaborare con le autorità stesse. \n\nLa base giuridica per il rispettivo trattamento dei tuoi dati personali è la necessità di adempiere un obbligo legale ai sensi dell'Articolo 6, paragrafo 1, lettera c del GDPR.\n\nL'uso dei Servizi è possibile utilizzando pseudonimi, salvo che specifici servizi ti richiedano di fornire il tuo nome e/o l'indirizzo email.\n\n5.	Privacy e sicurezza dei minori di anni 16\n\nComprendiamo l'importanza di adottare precauzioni aggiuntive per proteggere la privacy e la sicurezza dei minori che utilizzano i nostri Servizi. I minori di anni 16, o dell'età minima equivalente nella giurisdizione competente, non possono fornire i loro dati personali tramite la TV o quando richiedono un servizio post-vendita, a meno che i loro genitori non abbiano fornito un consenso verificabile.\n\nPoiché non raccogliamo mai le date di nascita dei nostri utenti, non siamo in grado di identificare l'età degli utenti. Tuttavia, qualora scoprissimo di aver raccolto informazioni personali di minori di anni 16, o dell'età minima equivalente a seconda della giurisdizione, al di fuori delle suddette circostanze adotteremo le misure necessarie per eliminare le informazioni il prima possibile.\n\n6.	App di terze parti\n\nLa tua Smart TV consente l'utilizzo di app fornite da terze parti, quali Netflix, YouTube o HbbTV (servizio red button fornito dalle emittenti televisive). Puoi scaricare le app tramite l'app store o utilizzare app di terze parti che sono già pre-installate sul tuo dispositivo. Qualsiasi app di terze parti pre-installata sul tuo dispositivo non raccoglie dati personali senza la tua previa autorizzazione. Ad esempio, Netflix è già pre-installato sul tuo dispositivo ma raccoglie unicamente i dati quando accedi al tuo account Netflix. HbbTV raccoglie i dati solo quando presti il tuo consenso alla raccolta premendo l'apposito pulsante sul tuo telecomando.\n\nSe abiliti un'app di terze parti, i dati personali che ti riguardano possono essere trattati dal fornitore dell'app. Noi non abbiamo responsabilità per tale trattamento; si prega di fare riferimento alla informativa sulla privacy dell'app di terze parti per avere informazioni circa il relativo trattamento dei tuoi dati personali e i tuoi relativi diritti.\n\n7.	Categorie di destinatari\n\nNoi condividiamo i tuoi dati personali raccolti durante l'utilizzo dei Servizi esclusivamente con fornitori di contenuti terzi, qualora tu richieda la fornitura di determinati contenuti a tali fornitori di contenuti, o con fornitori di servizi in qualità di titolari del trattamento che ci assistono nella fornitura dei Servizi.\n\nNoi condividiamo i tuoi dati personali con altre terze parti solo se obbligati a farlo dalla legge (ad esempio, su richiesta delle autorità di polizia o giudiziarie), se tu hai prestato il tuo consenso alla relativa comunicazione o se la comunicazione è comunque legittima in base alla legge applicabile.\n\n8.	Paesi in cui vengono trattati i tuoi dati\n\nNoi e/o alcuni dei destinatari dei tuoi dati personali sopra elencati potremmo essere situati fuori dallo Spazio Economico Europeo (ad es. nella Repubblica Popolare Cinese o negli Stati Uniti d'America). Pertanto, i tuoi dati personali possono essere trattati in paesi in cui le leggi sulla protezione dei dati personali possono prevedere un livello di protezione diverso da quello previsto dalle leggi nella tua giurisdizione e che non sono riconosciuti come paesi che garantiscono un adeguato livello di protezione dei dati personali in conformità con il GDPR. I paesi che garantiscono un adeguato livello di protezione dei dati personali dal punto di vista della legislazione europea sulla protezione dei dati personali comprendono Andorra, Argentina, Canada, Svizzera, Isole Faroe, Guernsey, Stato di Israele, Isola di Man, Jersey, Nuova Zelanda e Uruguay. I destinatari negli Stati Uniti d'America possono essere certificati parzialmente ai sensi del Privacy Shield EU-US e pertanto essere riconosciuti come destinatari che garantiscono un adeguato livello di protezione dei dati personali dal punto di vista della legislazione europea sulla protezione dei dati personali.\n\nLaddove richiesto, adotteremo misure di sicurezza appropriate con riferimento al trasferimento di dati a destinatari che si trovino al di fuori dell'Unione Europea che non prevedono un adeguato livello di protezione dei dati personali. Può essere richiesta una copia delle relative misure contattandoci come indicato nella Sezione 12 in basso.\n\n9.	Periodo di conservazione\n\nI tuoi dati personali verranno conservati per il tempo necessario a fornirti i Servizi. Per la maggior parte dei dati ciò generalmente significa che conserveremo i tuoi dati per un mese. Per la finalità di diagnostica a distanza e dei servizi post-vendita possiamo conservare i tuoi dati fino ad un massimo di 10 anni. Quando non avremo più bisogno di utilizzare i tuoi dati personali per adempiere gli obblighi contrattuali o di legge, li rimuoveremo dai nostri sistemi e registri e/o adotteremo misure per anonimizzarli correttamente in modo tale che tu non possa più essere indentificato in base ad essi.\n\n10.	I tuoi diritti\n\nAi sensi della legge sulla protezione dei dati applicabile, puoi avere il diritto di: chiedere l'accesso ai tuoi dati personali, chiedere la rettifica dei tuoi dati personali, chiedere la cancellazione dei tuoi dati personali, chiedere la limitazione di trattamento dei tuoi dati personali, chiedere la portabilità dei dati e opporti al trattamento dei tuoi dati personali. Si prega di notare che i diritti di cui sopra potrebbero essere limitati dalla legge sulla protezione dei dati personali applicabile. Per avere ulteriori informazioni su questi diritti, consultare l'Allegato I Tuoi Diritti in basso.\n\nHai anche il diritto di proporre un reclamo all'autorità di controllo dei dati personali competente.\n\nPer esercitare i tuoi diritti, ti preghiamo di contattarci come indicato nella Sezione 12 in basso.\n\n11.	Modifiche all’Informativa sulla Privacy\n\nAl fine di migliorare i nostri Servizi possiamo modificare la nostra Informativa sulla Privacy - ad esempio utilizzando nuove tecnologie o introducendo nuovi servizi. Ci riserviamo il diritto di cambiare o integrare la presente Informativa sulla Privacy in qualsiasi momento.\n\n12.	Informazioni di contatto e rappresentante nell'Unione Europea\n\nIn caso di domande relative all'Informativa sulla Privacy o se vuoi contestare la nostra gestione dei tuoi dati personali, ti preghiamo di contattarci utilizzando i seguenti dati di contatto:\n\nModulo di contatto: www.tcl.eu/en/contact-us\n\nIl nostro rappresentante nell'Unione Europea è: TLC Europe, con sede in 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, Francia. Puoi contattare TLC Europe tramite il modulo di contatto sopra indicato.\n\nVersione: 2.0\n\nAllegato I Tuoi Diritti\n\na.	Diritto di accesso: Puoi avere il diritto di ottenere da noi la conferma che sia o meno in corso un trattamento di dati personali che ti riguarda e in tal caso, di richiedere l'accesso ai dati personali. Le informazioni relative all'accesso includo – tra le altre – le finalità del trattamento, le categorie di dati personali in questione, e i destinatari o le categorie di destinatari a cui i dati personali sono stati o saranno comunicati. Tuttavia, questo non è un diritto assoluto e gli interessi di altri soggetti possono limitare il tuo diritto di accesso.\n\nPuoi avere il diritto di ottenere una copia dei dati personali oggetto di trattamento. In caso di ulteriori copie da te richieste, possiamo addebitare un contributo spese ragionevole basato sui costi amministrativi.\n\nb.	Diritto di rettifica: Puoi avere il diritto di ottenere da parte nostra la rettifica dei dati personali inesatti che ti riguardano. Tenuto conto delle finalità del trattamento, puoi avere il diritto di ottenere l'integrazione dei dati personali incompleti, anche fornendo una dichiarazione integrativa.\n\nc.	Diritto alla cancellazione (\"diritto all'oblio\"): In determinate circostanze, puoi avere il diritto di ottenere da parte nostra la cancellazione dei dati personali che ti riguardano e noi possiamo avere l'obbligo di cancellare tali dati personali.\n\nd.	Diritto alla limitazione di trattamento: In determinate circostanze, puoi avere il diritto di chiederci la limitazione del trattamento dei tuoi dati personali. In questo caso, i rispettivi dati verranno contrassegnati e potranno essere trattati da noi solo per determinate finalità.\n\ne.	Diritto alla portabilità dei dati: In determinate circostanze, puoi avere il diritto di ricevere in un formato strutturato, di uso comune e leggibile da dispositivo automatico i dati personali che ti riguardano che ci hai fornito e puoi avere il diritto di trasmettere tali dati a un'altra società senza impedimenti da parte nostra.\n\nf.	Diritto di opposizione:\n\nIn determinate circostanze, puoi avere il diritto di opporti in qualsiasi momento, per motivi connessi alla tua situazione particolare o qualora i dati siano trattati per finalità di marketing diretto, al trattamento da parte nostra dei tuoi dati personali e ci può essere richiesto di non trattare più i tuoi dati personali.\n\nInoltre, qualora i tuoi dati personali siano trattati per finalità di marketing diretto, hai il diritto di opporti in qualsiasi momento al trattamento dei tuoi dati personali per tale attività di marketing, compresa la profilazione, nella misura in cui sia correlata a tale marketing diretto. In questo caso, i tuoi dati personali non saranno più trattati da parte nostra per tali finalità."];
var cookieNotice = ["\n\nNoi rispettiamo la tua privacy durante l'utilizzo delle Smart TV da noi prodotte e dei Servizi da noi offerti. I cookie sono utilizzati da molti siti web e da altri servizi internet. La tua Smart TV accetterà, raccoglierà e trasmetterà cookie al fine di garantire il corretto funzionamento di tali siti web e servizi.\n\nNoi non utilizziamo cookie nell'offrirti i nostri Servizi. Tuttavia, terze parti (ad es. terze parti fornitrici di app) possono utilizzare i cookie quando usi la Smart TV per accedere ai loro servizi. La presente Informativa sui Cookie può fornire solo informazioni limitate sui cookie che possono essere installati da terze parti. Per avere informazioni sui cookie effettivamente utilizzati da terze parti e sulle loro funzionalità, ti rimandiamo alle rispettive informative sui cookie ti tali terze parti. Ad ogni modo, nella presente Informativa sui Cookie forniamo una descrizione generale riguardo quali cookie possono essere installati sulla tua Smart TV e come puoi gestirli.\n\n1.	Cos'è un cookie?\n\nI cookie sono stringhe di testo di piccole dimensioni che possono essere installate sulla tua Smart TV. Quando visiti un sito web o uno dei servizi ai quali è possibile accedere tramite il Red Button, il sito web o il servizio può memorizzare un cookie nella tua Smart TV.\n\nAd ogni visita successiva, il cookie installato sulla tua Smart TV invierà informazioni al soggetto che lo ha impostato. I cookie sono molto comuni e utilizzati in diversi siti web e servizi. Ogni cookie solitamente contiene il dominio dal quale proviene il cookie, la sua durata temporale e un dato valore (di solito un unico numero). Potete trovare una spiegazione più approfondita su cosa sono i cookie e come funzionano sul sito web www.allaboutcookies.org.\n\nI cookie possono essere suddivisi in cookie di funzionalità e cookie di non-funzionalità. I cookie di funzionalità sono quelli strettamente necessari per fornirti i servizi. I cookie di non-funzionalità sono tutti gli altri cookie.\n\n2.	Siti web di terze parti \n\nQuando visiti siti web o servizi di terze parti attraverso i Servizi della tua Smart TV, tali siti web o servizi potrebbero installare cookie sulla tua Smart TV nonché monitorare e memorizzare le tue attività su tali siti web. Non richiediamo né incoraggiamo tali attività e non useremo tali informazioni. Per maggiori informazioni sull'utilizzo di questi cookie da terze parti vi rimandiamo alle rispettive informative sui cookie e sulla privacy di tali siti web e servizi.\n\n3.	Rimozione dei cookie\n\nL'interfaccia utente della tua Smart TV ti permette di eliminare dalla tua Smart TV tutti i cookie e le altre informazioni memorizzate dal browser. È altamente consigliabile eliminare tutti i cookie e le preferenze impostate prima di vendere o regalare la tua Smart TV.\n\nVersione: 2.0"];
var privacyPolicy = ["Selezionare la casella sottostante se si desidera utilizzare i nostri servizi Smart TV e i servizi correlati. L'utilizzo di questi servizi richiede il trattamento dei propri dati personali come descritto nella nostra Informativa sulla privacy: http://www.tcl.eu/en/","Abilitare il servizio Smart TV, la memorizzazione delle impostazioni di servizio e l'autenticazione automatica di Smart TV. Se si deseleziona questa casella, si avranno solo TV standard e HDMI.","Attiva aggiornamenti software automatici。 Selezionare questa casella per mantenere aggiornato il proprio prodotto con gli ultimi aggiornamenti software e le migliori prestazioni.","(Gli aggiornamenti software sono importanti per il corretto funzionamento del televisore in quanto forniscono nuove funzionalità, stabilità e sicurezza. Si consiglia pertanto di selezionare la casella.)","Selezionare la casella sottostante se si acconsente al trattamento dei propri dati personali anche per le seguenti finalità. Per ulteriori informazioni sul trattamento dei propri dati personali, consultare il nostro sito web Informativa sulla privacy: http://www.tcl.eu/en/","Acconsento al trattamento dei miei dati personali (ad es. al momento dell'entrata e dell'uscita da T-Launcher) al fine di migliorare i prodotti TCL e l'offerta di migliori servizi di contenuto sulle Smart TV."];
var termsFirTitle = ["Termini e condizioni","Informativa sulla privacy","Informativa sui cookie"];
var termsSecTitle = ["Leggere i termini e le condizioni e accettarle.","Leggere l’informativa sulla privacy e accettarla.","Leggere l’informativa sui cookie e accettarla."];
var tickall = "Spunta tutte";
var tickremindWords = "Selezionare tutte le caselle di controllo, altrimenti non sarà possibile utilizzare il servizio Smart TV.";