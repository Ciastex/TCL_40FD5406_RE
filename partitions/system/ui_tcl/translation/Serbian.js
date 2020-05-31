
var all_country 	= ["Australija ","Austrija","Belgija","Bugarska","Hrvatska","Češka republika","Danska","Finska","Francuska","Nemačka",
						"Grčka","Mađarska","Italija","Luksemburg","Holandija","Norveška","Poljska","Portugalija","Rumunija","Rusija",
						"Srbija","Slovenija","Španija","Švedska","Švajcarska","Ujedinjeno kraljevstvo","Novi Zeland"," "/*Arab*/,"Estonija"," "/*Hebrew*/,
						"Letonija","Slovačka","Turska","Irska","Japan","Filipini","Thailand","Maldives","Uruguay","Peru",
    					"Argentina","Chile","Venezuela","Ecuador","Costa Rica","Paraguay","Bolivia","Belize","Nicaragua","Guatemala",
						"Kina","Taiwan","Brazil","Canada","Mexico","United States","South Korea","Rumunija","Vietnam"/*新添加的，底层结构体中没有*/,"Ukrajina"/*新添加的，底层结构体中没有*/,
    					"Iran","Iraq"," ","Kazakhstan","Uzbekistan"," ","Kyrgyzstan","Algeria","Egypt","Tunisia",
    					"Tanzania","Kenya","Pakistan","Indonesia","Kuwait","Saudi Arabia","Qatar","Israel","Lebanon","bahrain",
    					"Angola","Congo","India","Turkmenistan","Colombia","Mongolia","Bangladesh","Nepal","Sri Lanka","North Korea",
						"Moldavija","Polynesia","EI Salvador"," ","Fiji","Liberia","Jordan","Myanmar","Ghana","Georgia",
    					"Armenia","Oman","yemen","Syria","Palestine","Afghanistan","Morocco","benin","IvoryCoast","Nigeria",
    					"Sudan","Ethiopia","Zambia"," ","South Africa","mozambique","Libya","Albanija","Belarus","Iceland",
						"Litvanija","Mauritius","Dubai","UAE","Tajikistan","Bengal","Bosna i Hercegovina","Kipar","Kosovo","Makedonija",
						"Malta","Crna Gora","Cameroun","Singapore","Malaysia","NewCaledonia","Suriname","Jamaica","Curacao","Aruba",
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
				
var all_language 	= ["Češki","*","Danski","*","*","nemački","engleski","francuski","grčki","španski",
						"Hrvatski","*","italijanski","Mađarski","Holandski","Norveški","Poljski","Portugalski","ruski","Rumunski",
						"Slovenački","Srpski","Finski","Švedski","Bugarski","Slovački","Chinese","*","Galski","*",
						"Velški","arapski ","İrlandaca","Letonski","*","turski","Estonski","Holandski"/*Netherlands*/,"Korejski","*",
						"Hindijščina","*","*","Mandarin","kantonski","Maori","Originalni zvuk"/*Qaa*/,"Neodređeno"/*Undetermined*/,"*","Nepoznato",
						"Neodređeno","*","*","*","*","*","*","*","*","*",
						"*","*","*","Albanski","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baskijski","*","*",
						"*","*","*","*","*","*","*","Bosanski","*","*",
						"*","*","*","*","Beyaz Rusya Dili","*","*","Katalonski","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galicijski","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Islandski","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Japonci","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Litvanski",
						"*","*","*","*","*","*","*","Makedonski","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romantični","*","*","*","*",
						"*","*","*","Sami","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Teletekst",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukrajinski","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Isključ.","Uključ."];
var okCancel		= ["Ok","Otkaži"];
var yesNo			= ["DA","NE"];
var level			= ["Isključ.","nisko","Jako","Srednje"];
var manualAuto		= ["Manuelno","Auto"];
var homeShop		= ["Početak","prodavnica"];
var picPreset		= ["Cтандард","Динамички","Prirodni","Bioskop","lično"];
var picColorTemp	= ["hladno","Normalno","toplo","Korisnik"];
var pic3dNavig		= ["Manuelno","Auto","Poluautomatski"];
var _3dOptions		= ["3D režim","3D-u-2D","Prebacivanje L-D","Dubina polja"];
var pic3DMode       = ["Isključ.","2D-u-3D","Jedno-uz-Drugo","Vrh i Dno","Preplitanje linija"];
var picEcoOptions	= ["Čuvanje energije","svetlosni senzor ","Lokalno nedostupno","Mešovito zatamnjenje"];
var picGeoOptions	= ["Geometrija","H. Položaj","V. Položaj","Sat","Faza"];//Geometry 无翻译
var picAdWhiteBal	= ["R dodavanje","G dodavanje","B dodavanje","R izjednačavanje","G izjednačavanje","B izjednačavanje"];
var souOptions		= ["Unapred definisani zvuk ","Balans","Audio kašnjenje","SRS TSHD","Auto-kontrola tona",
						"SPDIF tip","SPDIF odlaganje","TV plasman","Audio jezik","Audio kanal",
						"Audio opis","Pojačanje basova","Dolby Digital Plus"];
var souSpdifType	= ["Auto"/*Dolby*/,"PCM","Isključ."];
var colorSpace      = ["Auto","Izvorno","Korisnik"];
var souPresetPara	= ["100Hz","500Hz","1.5KHz","5KHz","10KHz"];
var chOptions		= ["Skeniranje kanala ","Spisak kanala","EPG","Organizator kanala","Analiza kanala",
						"vrem. pomeraj","Titl","Teletekst","Tip spiska kanala"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Jačina signala","kvalitet signala ","Frekvencija (KHz)","ID servisa","ID mreže","Ime mreže"];
var chScanOptions	= ["Zemlja / Region","Režim prijemnika","Skeniranje kanala","Automatsko ažuriranje","Analog. ručni sken",
						["Ručno sken. kablov.","Ručno sken. antene","Ručno podešavanje satelita"],"Nameštanje satelitske antene","Izbor omiljene mreže","Izbriši listu kanala","LCN"];
var favNetDes		= "Izaberite svoju omiljenu mrežu";
var tuner			= ["Kabl","Aнтена","Satelit"];//Satelite 无翻译
var passError		= "Lozinka netačna.\nMolimo vas da unesete lozinku ponovo!";
var chType			= ["Analogni kanali: ","Digitalni kanali: "];
var chScanStatus	= ["Status: Skeniranje","Status: Skeniranje završeno","Status: Skeniranje otkazano","Status: Greška u skeniranju"];
var chScanPara		= ["Frekvencija (KHz)","Modulacija","Opseg simbola (Ksym/s)","ID mreže","Sistem",
						"Fino podešavanje","Jačina signala","kvalitet signala ","Modus skeniranja","ID kanala"];
var chScanParaMHZ      = ["Frekvencija (MHz)"];
var chAtvManSys		= ["ZAPADNA EVROPA","ISTOČNA EVROPA","Velika Britanija ","Francuska"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Auto"];
var chCleanDes		= "Da li želiš da izbrišeš spisak kanala?";
var chDeletDes		= "Da li želite da izbrišete kanal ?";
var chOperator		= ["Ziggo","UPC","Ostalo"];
var chScanType		= ["Digitalno & Analogno ","Digitalno","Analogno"];
var chScanMode		= ["Puno","Unapre. Pretrag","brzo"];
var bookingModes	= ["Snimanje","Podsetnik"];
var dayName			= ["ned.","pon.","Ut.","Sr.","Čet.","Pet.","Sub."];
var monthName		= ["jan.", "feb.","mart","apr.","maj","jun","jul","avg.","sept.","okt.","nov.","dec."];
var filter			= ["Фильтр","Tip","Pod-tip"];
var chEpgFirstGenre	= ["Bioskop","News","Šou programi","Sportovi","Dečje","muzika","Umetnost","Društveni","Obrazovanje","Odmor","SPECIJALNI"];
var chEpgSecondGenre= [["Drama","Detektivski","Avantura","Naučna fantastika","Komedija","Sapunica","Romantični","Ozbiljni","Filmovi za odrasle"," "," "," "],
						["Trenutna dešavanja","Vremenski izveštaj","Novinski magazin","Dokumentarni","Rasprave"," "," "," "," "," "," "," "],
						["Šou programi","Kvizovi","Mešani sadržaj","Emisija sa razgovorima"," "," "," "," "," "," "," "," "],
						["Sportovi","Posebni događaji","Sportski magazini","Fudbal","Tenis",
							"Timski sportovi","Atletika","Automoto sport","Sportovi na vodi","Zimski sportovi",
							"Konjski sportovi","Borilački sportovi"],
						["Dečje","Deca predškolskog uzrasta","Zabava za decu od 6 do 14 godina","Zabava za decu od 10 do 16 godina","Informacioni","Crtani filmovi"," "," "," "," "," "," "," "],
						["muzika","Rock","Ozbiljni","Folk","Džez","Mjuzikl","Balet"," "," "," "," "," "],
						["Umetnost","Scenska umetnost","Likovne umetnosti","Religija","Popularna kultura",
							"Literatura ","Film","Eksperimentalni","Emitovanje","Novi mediji",
							"Umetnički magazini","Moda"],
						["Društveni","Magazini","Ekonomija","Neverovatni ljudi"," "," "," "," "," "," "," "," "],
						["Obrazovanje","Priroda","Tehnologija","Medicina","Strane države","Društvene nauke","Dalje obrazovanje","Jezici"," "," "," "," "],
						["Razonoda i hobiji","Turizam","Ručni rad","Motori","Fitnes i zdravlje","Kuvanje","Reklame","Baštovanstvo"," "," "," "," "],
						["Originalni jezik","Crno-belo","Neobjavljeni","Emitovanje uživo"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Preskakanje kanala","Sortiranje kanala","Uređivanje kanala","Brisanje kanala","kanal zamjena","kanal umetak"];
var chEditPara 		= ["Ime mreže","Broj kanala","Naziv kanala","Frekvencija","Sistem boje","Zvučni sistem"];
var chSatTitles		= ["Tip satelita","Nameštanje satelitske antene","Izaberite satelit"];
var chSatEidtOptions= ["Naziv satelita","Položaj","LNB власт","LNB frekvencija ( MHz )","Disecq ulaz",
						"Tonski 22 kHz","тон Бурст","Frekvencija (KHz)","Opseg simbola (Ksym/s)","Polarizacija",
						"Jačina signala","kvalitet signala ","Status satelita"];
var chSatAutoPromt	= [["Sve","Mreža"],
						["Sve","Slobodno"]];
var chSatAutoScanOptions=["Izaberite satelit","Modus skeniranja","Kanali"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Univerzalno",];
var chSatDiSEqCInput= ["Onemogući","A","B","C","D"];
var chSatTone22KHz	= ["Auto","Uključ.","Isključ."];
var chSatToneBurst	= ["Onemogući","тон Бурст A","тон Бурст B"];
var chSatPolarization= ["Horizontalna","Vertikalna"];
var chSatSetupOptions=["Tip antene","podešivač","Frekvencija opsega"];
var chSatAntennaType= ["Jedan kabl","Univerzalno"];
var chSatUserBands	= ["Korisnički opseg 1","Korisnički opseg 2","Korisnički opseg 3","Korisnički opseg 4","Korisnički opseg 5","Korisnički opseg 6","Korisnički opseg 7","Korisnički opseg 8"];
var chSatOthers		= ["Transponder"];
var chSatSetupOthers= ["korisnički definisano"];
var pleaseSelectSat = "Molimo odaberite prvo satelite!";
var subOptions		= ["Titl","Digitalni jezik titla","Digitalni jezik titla 2.","Tip titla"];
var ttxOptionsCon      = ["Jezik str. za dekod.","Jezik digit. teleteksta"];
var subType			= ["Normalno","Sa oštećenim sluh."];
var netIntf     	= ["Ethernet","Bežično"];
var netConnDes		= ["TV testira vezu sa mrežom.\nSačekajte! ",
						"Test povezanosti na mrežu je uspeo!",
						"Test povezanosti na mrežu nije uspeo."];
var netSsidError	= "Važeća dužina SSID je 1 ~ 32 karaktera . Molimo vas da proverite SSID .";
var netOthers		= ["PIN kod"];
var netWlessAutoDes	= ["Molim te proveri da li je sledeći PIN kod instaliran u pristupnu tačku pre nego što pritisneš OK.",
						"Molim te da u roku od 120 sekundi pritisneš dugme na pristupnoj tački pre nego što pritisneš OK."];
var netConnRemind	= ["Lozinka je netačna!",
						"Povezivanje . Molimo sačekajte!",
						"Povezivanje je bilo uspešno. IP adresa dobijena!",
						"Prekid veze!",
						"TV skenira pristupne tačke\nSačekajte",
						"Nema bežičnog uređaja povezanog sa TV-om!"];
var netWireIpOptions= ["IP podešavanja","Tip adrese","IP adresa","Maska podmreže","Podraz. mrežni prolaz","Primarni DNS","Sekundarni DNS"];
var netWireConnRemind= ["Molimo unesite broj između 0 i 255.",
						"Povezivanje uspešno!",
						"Molimo unesite važeću adresu",
						"Povezivanje uspešno!",
						"Povezivanje nije uspelo!",
						"Povezivanje . Molimo sačekajte!",
						"Unesite vrednost između 1 i 223 ."];
var netFlixOptions	= ["Deaktiviraj","ESN","Netflix verzija"];
var netFlixDes	 	= ["Jeste li sigurni da želite da deaktivirate?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Softver. ažuriranje";
var netUpdateDialogTitle = "Ažuriranje softvera";
var netBGDownloadTitle 	= "Preuzimanje";
var netUpdateLoadingPrompt= ["U potrazi za nadogradnju , sačekajte !",
							"Softver se preuzima ... molimo sačekajte!",
							"Molimo da NE isključujete TV tokom ažuriranja softvera!",
                            "Imperativno ažuriranje softvera se automatski preuzima u pozadini!"];
var netUpdatePrompt= ["Čestitam, imaš najnoviju verziju softvera!",
						"Pronađena je novija verzija softvera XXXX. Da li želiš da je sada preuzmeš? Ovo može potrajati, što zavisi od tvoje mreže.",
						"Neuspešno prijavljivanje!",
						"Nije uspelo dobiti podatke, pokušajte ponovo kasnije !",
						"Neuspešna operacija Parse Update XML!",
						"Prekid veze!",
						"Uspešno preuzet softver. Želite da pokrenete ažuriranje fleš memorije?",
						"Podaci izgubljeni! Preuzimanje neuspešno!",
						"Neuspešna provera paketa. Pokušajte ponovo!",
						"Neuobičajen rad mreže. Proverite i ponovo uspostavite vezu...",
						"Neuspešno ažuriranje. Isklj. i ponovo uklj. TV!",
						"Datoteka za nadogradnju je neočekivano obrisana. Ponovite nadogradnju preko mreže.",
						"Softver je preuzet u pozadini. Da li želite da obavite nadogradnju?"];
var netUpdateButtonText = ["Preuzimanje", "Ažuriranje", "Kasnije", "Nikad", "Ok","Nastavi"];
var autoDetectPrompt = ["Pronađena je novija verzija softvera XXXX. Da li želiš da je sada preuzmeš? Ovo može potrajati, što zavisi od tvoje mreže.",
						"Pronađen je novi softver, verzija XXXX. Da li želiš da sad ažuriraš?",
						"Poslednji proces nadogradnje preko mreže je prekinut. Potrebno je da ponovo pokrenete nadogradnju.",
                        "Preuzimanje nove verzije softvera XXXX nije završen . Da li želite da nastavite sada ?",
                        "Softver preuzet, da li želite da sada ažurirate ?"];
var sysOptions		= ["E - priručnik","Jezik menija","Tajmer","Zaključaj","Postavke unosa",
						"Softver. ažuriranje","Lokacija","HbbTV režim","kolači","Obični interfejs",
						"Напредна подешавања","Reset shop","LED indikator","Instant uključivanje","Režim automatske kupovine","Area","Demo režim"];
var sysResetDes		= "Jeste li sigurni?";
var sysMenuLangOptions=["Jezik","Željeni jezik audia","Preferirani drugi audio jezik "];
var sysTimerOptions	= ["Vremenska zona","Naziv regiona","Sat","Tajmer mirovanja","Auto režim mirovanja", "Country region"];

var sysTimeZone		= ["Kao emitovalac","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Isključ.","10 Min","20 Min","30 Min","40 Min","50 Min","60 Min","90 Min","120 Min"];
var sysStandby		= ["Isključ.","4 sata","6 sata","8 sata"];
var sysRegionName	= ["Madrid ","Kanari"];
var sysClockOptions	= ["Autom. sinhroniz.","Datum","Vreme","Tajmer za uključivanje","Tajmer",
						"Kanal pri uključivanju","Tajmer za isključivanje","Tajmer"];
var sysTimer		= ["Isključ.","Dnevno","Jednom"];

var sysInputSet		= ["nema oznake ","DVD","Blu-ray","HDD","DVDR",
						"HD zapis ","igirica ","VCR ","PC","Digital STB",
						"HD dig STB","kamera ","snimač","ostalo "];
var sysAvVideoInput	= ["Auto","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["USB-om","mreže-om","Po kanalu"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"U etru nema novog softvera!",
						"Pronađen je novi softver, verzija XXXX. Da li želiš da sad ažuriraš?",
						"Molimo vas da ubacite USB stik.",
						"Neuspešna provera paketa. Pokušajte ponovo!",
						"Molimo NE izvlačite USB dongl i isključite TV tokom ažuriranja firmvera!!",
						"Softver je uspešno ažuriran .\nTV će tada automatski restartati!",
						"Pronađena je novija verzija softvera XXXX. Da li želiš da je sada preuzmeš? Ovo može potrajati, što zavisi od tvoje mreže.",
						"Preuzimanje",
						"Uspešno preuzet softver. Želite da pokrenete ažuriranje fleš memorije?",
						"Ažur. neuspelo!",
						"Pretraga datoteka za ažuriranje",
						"Softver je uspešno ažuriran.\nMolim, odmah restartujte TV."];
var sysProductInfo	= ["Trenutna verzija","Naziv proizvoda","Naziv proizvođača","Naziv šasije"];
var sysCiDes		= ["Nema CI kartice."];
var sysAdOptions	= ["DivX(R) registracija","Odjava registracije DivX(R)","T-Link","Authorization Error","Potvrda o uklanjanju iz registra",
						"Potvrda o iznajmljivanju","Najam je istekao"];
var sysRegistDes	= ["Morate da registrujete svoj uređaj da biste reprodukovali DivX zaštićeni video",
						"Registracioni kôd:",
						"Registrujte se na http://vod.divx.com"];
var sysDregistDes	= ["Kôd za odjavu registracije:",
						"Odjavite registraciju na http://vod.divx.com",
						"Nastaviti sa registracijom?"];
var mediaAuthorization = ["Tvoj uređaj nema dozvolu da reprodukuje ovaj DivX(R) zaštićeni video."];
var deregistrationConfrimation = ["Vaš uređaj je već registrovan.","Jeste li sigurni da želite da odjavite registraciju?"];
var rentalConfirmation = "DivX(R) je iskoristio XXXX od YYYY pregleda. Želiš da nastaviš?";
var rentalExpired 	= "DivX ( R ) Iznajmljivanje je potrošilo XXXX od YYYY pogleda. DivX iznajmljivanje je isteklo .";

var parentalRatingNA		= ["***","***","***","***","***","***","***","***"];
var parentalRatingOptionUS		= ["***","***","***"];
var sysTVRatingUS=["***","***","***","***","***"];
var sysMPAAUS=["***","***","***","***","***","***"];
var parentalRatingOptionCanada		= ["***","***","***"];
var sysCanadaEng=["***","***","***","***","***","***"];
var sysCanadaFre=["***","***","***","***","***",""];
var sysResetRRT=["***"];
var sysLockOptions	= ["Kanal je zaključan","Brava vremenskog intervala","Roditeljska procena","Unoš. zaključano","Zaključavanje na prednjoj ploči","instalacija sistema za zaključavanje ",
						"Promenite lozinku","maks. jačina zvuka ","Očisti sve"];
var sysTimeIntervals= ["Tip brave","Vreme početka","Vreme završetka"];
var sysRatingOptions= ["Nema","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","Cenzurirano ( Španija )"];
var changePass		= ["Promenite lozinku","Nova lozinka","Potvrdite lozinku"];
var changePassDes	= ["Lozinka netačna.\nMolimo vas da unesete lozinku ponovo!",
						"Lozinka se ne podudara.\nMolimo vas da unesete lozinku ponovo!",
						"Lozinka uspešno kreirana.",
						"Ovaj kod je previše jednostavan da bi se postavio kao lozinka.\nMolimo unesite ponovo!"];
var sysPowerOnChOptions= "Izaberite režim";
var sysPowerOnCh	= ["Poslednji status","Korisnički izbor"];
var netWlessSecu    = ["otvoreno","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Nema","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Nema podrške"];
var netWlessSecu3	= ["Nema","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Nema podrške"];
var netOptions		= ["Internet veza","Interfejs","Bežična podešavanja","IP podešavanja","Informacije",
						"Test veze","DLNA","TV Remote","Podešavanje Netflix-a","Prikaz Wi-Fi mreže",
						"Tip adrese","IP adresa","Maska podmreže","Podraz. mrežni prolaz","Primarni DNS",
						"Sekundarni DNS","SSID","BSSID","Unesi SSID, molim:","ID korisnika"];
var chEditDes		= ["Dupli broj kanala!","Pritisnite crveni taster da biste izbrisali trenutni znak!","Nevažeći brojevi kanala"];
var chEpgNoProgram	= "Trenutačno nema informacije o programu, molim vas tražite prvo kanale!";
var chEpgWords		= ["Vodič kroz programe","Nema podataka o programu.","Kanal je zaključan!","Nema detajla o programu.","Nema naziva programa "];
var chEpgBooking	= ["Распоред инфо", "Broj kanala","Datum početka","Vreme početka","Vreme završetka",
						"Tip ponavljanja","Tip programiranog snemanja","Dodaj","Zameni","Promeni",
						"Dodaj/Izmeni"];
var epgHotKey		= ["Prethodni dan","Sledeći dan","Фильтр","Spisak zakazanog","Dodaj zakazano"];
var chEpgBookRemind	= ["Neispravno početno vreme","Neispravno završno vreme","Dupli raspored","Uspešno sačuvano","Uspešno izbrisan."];
var chSchePara		= ["Spisak zakazanog","Vreme početka","Datum početka","Naziv programa","Naziv kanala",
						"Trajanje","ponovi ","Raspored","Izmena","Obriši"];
var dateTimer		= ["Jednom","Dnevno","Nedeljno"];
var scheduleDeleteReminds="Da li želite da izbrišete ovaj plan?";
var scheduleNoLists	= "Ne postoji raspored liste. Pritisnite \" Crveni\" taster da dodate.";
var chListWords		= ["Spisak kanala","Izaberite listu","Režim prijemnika","Dodaj u omiljene","otkloni ",
						"Odaberi spisak kanala","Odaberi režim pretraživača","Zameni"];
var chListType		= ["Sve","Digitalno","Analogno","Radio","Slobodno","Favoriti"];
var chAutoScanOptions=["Odaberite operatora","тип канала","Skeniranje kanala"];
var souSoundType	= ["Neispravno","Mono","Mono","Stereo","Stereo",
						"SAP","SAP","Dualno1","Dualno2","Dualno2",
						"Nicam mono","Nicam stereo","Nicam dual 1","Nicam dual 2","Nicam dvostruki",
						"Mono","LL","RR","LR"];
var souPreset		= ["muzika","Bioskop","jasan glas","Cтандард","lično"];
var picAdRgbMode	= ["Isključ.","Samo crveno","Samo zeleno","Samo plavo"];
var picAdOptions	= ["smanjenje šuma","MPEG NR","RGB mode","Динамички контраст","LED jasnoća kod kretanja",
						"Fleš ton","Film modus ","modus igrice ","Temperatura boje","Баланс беле боје",
						"Zamrznuti","Црна Стреч","Skeniranje preko","Gama osvetljenje","Režim HDMI","10P balans bele boje","Produživač boje",
						"Smanjenje zamućenja","smanjenje podrhtavanja","Mesto za boje","Jasnoća kod kretanja"];
var pic10Pwhite     = ["interval","Crveno","Zeleno","Plavo","Resetovanje","Boja","Žuti","Cian","Magenta"];
var picMotionClarity = ["Kretanja načinu","Interpolacija kretanja","LED jasnoća kod kretanja","Smanjenje zamućenja","smanjenje podrhtavanja","Resetovanje"];
var picMotionMode   = ["Film","glatko","Oèisti","Sport","kupac"];
var picResetDes		= "Sva lična podešavanja će biti resetovana . Da li ste sigurni da želite da uradite izabrane akcije?";
var pic10PReset     = "Da li ste sigurni da želite da poništite 10p balans belog ?";
var picMotionReset  = "Da li želite da resetujete jasnoću kod kretanja?";
var picColorSpaceReset    = "Da li ste sigurni da želite da poništite prostor boja?";
var picOptions		= ["Unpared definisana slika",
						"Pozadinsko svetlo","Osvetljenje","Kontrast","Zasićenje","Nijansa","Oštrina","Temperatura boje","Režim ekrana","Auto format",
						"Povećanje sporta","3D","3D navigacija","ECO Settings","Geometrija",
						"Напредна подешавања","Ponovno podešavanje slike","Mikrozatamnjenje"];
var picSize			= ["16:9 format", "4:3 format", "14 : 9 format", "Синерама",
						"Масштабирование 16:9 ", "Увеличение 16:9 ","Масштабирование 14:9 ","Масштаб. с заполнением","Масштабир. по ширине",
						"Масштаб. режим 2","Масшт. по шир. режим 2","Izvorno isparavanje zaslona ","Режим без интерполяции","Originalno","panorama"];
var others			= ["Ton","Emitovanje","Lozinka","Status","Sačuvaj","Zameni","Start","Izlaz","Pretraga","Obriši",
						"Nema","Automatski","Skeniranje","Bezbednost","Poveži","Osveži","Opet","zaustavi","Settings","Kanali",
						"Izmena","Umetni","Signala!","Kraj","Stereo","Audio","Izvor","Nema audio tona","Saveti","Resetovanje",
						"kupac","postavka ","snimi ","korisnik","bližnja tastatura","Način bezbednosti","Svakog dana","Popis PVR"];
var direction		= ["Levo","Desno","Gore","Dole"];
var audioType 		= ["MPEG","DOLBY AUDIO"/*"AC3"*/,"MPEG4","AAC", "DOLBY AUDIO"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Nepoznato"];
var soundChannels   = ["Nepoznato","Mono","Sub","Dualni mono","Stereo","Stereo Nizkotonac","Stereo Dolbi Surround","Surround (okruženje) 2CH","Surround (okruženje)","3.0Ch","4.0Ch","5.0Ch","Mono Lfe","Dvojni mono Lfe","Stereo Lfe","Okolinski 2Ch Lfe","Okolinski Lfe","3.1Ch","4.1Ch","5.1CH","7.1CH","Zajednički stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dvojni","Levo","Desno","Ostalo"];
var prompts			= ["Podesite postavku slike koja najbolje odgovara vašemu okruženju gledanja.",
						"Podešavanje osvetljenosti nivoa. Što bliže 100, svetlija je slika.",
						"Podesite nivo kontrasta. Što bliže 100, veća je razlika na slici tamno - svetlo.",
						"Podesite nivoe zasićenja. Bliže 100, jača boj .",
						"Podesite nivo oštrine. Bliže 100, jasniji su detalji.",
						"Podesite nivo osvetljenosti . Bliže 100 , svetliji ekran .",
						"Podesite nivo nijansa. Ova postavka menja tonove boja.",
						"Izaberite format slike koji najviše odgovara posmatranom programu.",
						"Konfiguriši opcije za potrošnju energije.",
						"Prilagodite geometrijsko podešavanja ekrana kod povezivanja PC uređaja.",
						"Odaberi napredna podešavanja slike.",
						"Vrati sve postavke slike na osnovne postavke.",
						"Odaberi režim zvuka koji ti najviše odgovara.",
						"Podesi balans zvuka između levog i desnog kanala.",
						"Zvučni sistem TruSurrond HD obezbeđuje bogat zvuk i jasnoću na niskim i visokim frekvencijama.",
						"Digitalni interfejs Format povezuje TV digitalni zvuk na  audio opremu domaćeg kina.",
						"Odaberi audio jezik koji vam odgovara.",
						"Omogućite ljudima s oštećenim vidom da uživaju u televizijskim programima.",
						"Testirajte TV sliku , zvuk i signal .",
						"Odaberi tip spiska kanala koji odgovara tvom TV signalu.",
						"Izaberite jezik titlova programa, koji su prikazani na dnu ekrana.",
						"Pogledajte tekst i slike na trenutnom kanalu.",
						"Digital Living Network Alliance. Uživajte u muzici, foto i videu na kućnoj mreži od drugih uređaja, kao što je PC.",
						"Prikažite sadržaj pametnog telefona na TV-u i koristite pametni telefon kao daljinski upravljač za televizor.",
						"Prikaz sadržaja sa Miracast - kompatibilnom Android uređajem na TV ekranu.",
						"Zaključaj TV.",
						"Odaberi naziv za vaš uređaj.",
						"Odaberi okruženje gledanja.",
						"Vrati sva sistemska podešavanja na osnovne postavke.",
    					"Switch off sports mode for more options.",
    					"Poboljšaj kontrast u odnosu na okruženje",
    					"Specijalni režim za uživanje u sportskom programu",
    					"Uživajte u više CEC funkcija."];
var initialTitle	= ["Dobrodošli","Početno podešavanje"];
var initialPrompt	= ["Obavite prvi nameštaj sada, i svet uzbudljivih iskustva vas čeka!",
						"Molimo vas da izaberete svoj jezik:",
						"Odaberite svoju zemlju / region:",
						"Molimo izaberite Vašu lokaciju:",
						"Odaberi tip mrežnog povezivanja:",
						"Odaberi režim kablovskog mrežnog povezivanja:",
						"Veza na kkkkkkkkk nije uspela ! Povežite uređaj prema sledećem grafikonu ili izaberite Levo za resetovanje ..",
						"Povezan sa kkkkkkkkk ! Izaberite Desno , da biste nastavili .",
						"1 ) Vaš TV možda već ima ugrađen bežični interfejs\n 2 ) Ili , ako dobijete bežični USB adapter, spojite ga na televizor. Zatim izaberite način spajanja preko bežične mreže",
						"Tražim . Sačekajte ...",
						"Nema bežičnog uređaja povezanog sa TV-om!",
						"Uverite se da je sledeći PIN instaliran na pristupnoj tački pre nego što kliknete na dugme „Dalje“.",
						"Molimo pritisnite dugme na dostupnoj tački , u manje od 120 sekundi pre nego što pritisnete Desno!",
						"WPS (Wi-Fi zaštićeno podešavanje)",
						"PIN ( lični identifikacioni broj )",
						"PBC ( Konfiguracija dugmeta )",
						"Do sledećeg sadržaja može se pristupiti samo pomoću mrežne veze . Želite li preskočiti postavljanje mreže ?",
						"Postoje nove ispravke softvera za prenos, ovo može potrajati u zavisnosti od vašeg statusa mreže.",
						"Ažuriranje softvera za TV obezbeđuje da uživaš u najnovijim osobinama i uslugama.",
						"Nećete uživati najnovije funkcije i usluge. Da li želite da preskočite ažuriranje softvera ?",
						"Pritisnite desni taster za nastavak.",
						"Nemojte gasiti tokom ažuriranja, jer to može da prouzrokuje TV kvar.",
						"Ako ne želite pokrenuti ispravke, izaberite Ne .",
						"Ažuriram , molimo sačekajte",
						"Takođe možete ažurirati softver u AŽURIRANJE SISTEMA / SOFTVERA .",
						"Odabrana zemlja traži podešavanje lozinke.\nMolimo podesite kod za vaš TV i potvrdite.",
						"This code is too simple.\nPlease use different digits.",
						"Čestitamo ! Prvo postavljanje je završeno.Konfiguracija se može menjati preko glavnog menija i podmenija .",
						"Odaberi bezbednosni režim, molim",
						"Molimo izaberite način bežičnih mrežnih veza :",
						"Mreža"];
var initNetCabAndDonRe = ["Mrežni kabl nije spojen , molimo spojite mrežni kabl !","Nema ugrađenog bežičnog adaptera ili USB adapter nije prisutan ."];
var initChPrompt = ["Instaliranje TV kanala","Izaberite vrstu pretraživanja pomoću antene.","Obrada automatsko pretraživanja...","Pronađeni su sledeći antenski kanali :","Odaberi kablovsko skeniranje.","Izaberite operatera sa liste .","Konfiguriši informacije skeniranja","Nađeni su sledeći kablovski kanali:","Odaberi jednog operatora sa ponuđenog spiska","Odaberi satelit da skeniraš ili podesiš odabrani satelit","Podesi parametre satelita","Pronađeni su sledeći kanali i ponovno pretraživanje kanala može se pokrenuti pod Kanali / Traženje kanala"];
var initClockPrompt = ["Pridobite vreme pomoću mreže!",
						"Molimo postavite datum i vreme :"];
var initialOptions	= ["Okruženje","Podešavanje mreže","Softver. ažuriranje","Instaliranje kanala","Sat"];
var initialHotkeys	= ["Nazad","Odaberi","Naredno","Prihvatam"];
var initLocations	= ["Početak","prodavnica","Kupujte sa demom"];
var initNets		= ["Kabl","Bežično","Nisam povezan sa mrežom"];
var initWireManuals	= ["IP adresa","Maska podmreže","Podraz. mrežni prolaz","Primarni DNS","Sekundarni DNS"];
var initSoftUpdates = ["Ažuriraj odmah","Ažuriraj kasnije"];
var initChannelIns	= ["Nastavi","Ne želim instalirati kanala"];
var initChScanTypes	= ["Digitalno & Analogno ","Digitalno","Analogno","Ne želim da skeniram"];
var initChDvbts		= ["Antena ATV kanala :","Antena DTV kanala :"];
var initChDvbcs		= ["Kablovski analogni kanali:","Kablovski digitalni kanali:"];
var initChDvbss		= ["Satelitski kanali:"];
var initChDvbSOther	= ["Ne želim da skeniram satelit"];
var initEndConnectedStatus= ["prekinut","Bežična mreža spojena","kablovski priključak"];
var initEndInstallations= "Instaliranih XXXX kanala";
var initEndUpdate	= ["ažurirano"];

var audioScenes 	= ["Stoni","Nosač za zid"];			
var screenSavers	= ["Nema kanala, pritisnite taster OK i skenirajte!",
						"Nema signala!",
						"Skremblovano",
						"Samo podaci",
						"Audio program",
						"Nema audio i video zapisa",
						"Nije dostupan",
						"Nema teleteksta",
						"Nema podataka o programu.",
						"Program je zaključan!",
						"Program je zaključan!\nPritisnite OK i unesite vaš kod.",
						"Nema detajla o programu.",
						"Program je štetan za maloletne osobe . \nPritisnite U redu i unesite svoju šifru .",
						"Kanal je zaključan!",
						"Kanal je zaključan!\nPritisnite OK i unesite vaš kod.",
						"Ulaz je zaključan!\nPritisnite OK i unesite vaš kod.",
						"Nema podrške!",
						"Ova usluga trenutno nije dostupna",
						"Ulaz zaključan!",
						"Nema naziva programa ",
						"van funkcije ",
    					"Nema Titl"
						];
var channelNumberOverPromt = ["The number of search programs has exceeded,you can delete some programs and then retry!"];
var chBookingPromt	= ["Trenutni kanal ima planirano snimanje . TV će početi snimati .",
						"Pronađeno je zakazano snimanje. \nPrebaci na XXXX da snimiš",
						"Trenutni kanal ima podsetnik.",
						"Pronađen je zakazani podsetnik. \nPrebaci na XXXX"];
var timeUnit		= ["Sek","min"];
var ciPromt			= ["Mrežni podaci su se menjali . Za nadogradnju možete obaviti pregled nadogradnje .",];
var othersPromt		= ["Molimo vas, sačekajte...",];
var menuOptions		= ["Slika","Zvuk ","Kanal","Smart TV","Mreža","Sistem","Podrška"];
var optionOptions	= ["Unpared definisana slika","Unapred definisani zvuk ","Zamrznuti","T-Link","vrem. pomeraj","PVR","Spisak zakazanog","Settings","*"];
var optionTLinkPromt= [["Automatska aktivacija","Auto režim mirovanja","Vodič menija"],
						["Uključeno","Mirovnje","Jačina zvuka pojačala"]];
var powerPromt		= ["TV će se uskoro ugasiti! Molim te, pritisni bilo koji tasteri da otkažeš."];
var ttxLanguage		= ["ZAPADNA EVROPA","ISTOČNA EVROPA","ruski","arapski/jevrejski","farsi","arapski ","Beyaz Rusya Dili","grčki","turski"];
var ttxOptions		= ["Otkrij","Ciklus podstrana","Jezik","strana alarma ","Njufleš"];
var weekday         = ["недеља","понедељак","уторак","среда","четвртак","петак","субота"];
var lcnConfflict	= "Program ima problem sa prijemom. Druga verzija postoji na kanalu %d ";
var inShopMode		= "Vaš TV je u načinu za kupovinu . Za kućne način , izaberite \" Sistem \" i promenite \" Položaj \" iz menija .";
var nitRefresh		= "Podaci o mreži su promenjeni. Želite li da izvršite skenersko ažuriranje?";
var picHDMIMode     = ["Auto","grafika","Video"];

var glassRemind    	= ["Molimo uparite svoje 3D naočare sa TV - om \n ( Pritisnite i držite taster za aktivaciju na 3D naočarima ) .","Vaši 3D naočare su spojene na TV",""];
var pvrRemind 		= ["Nemojte isključivati USB uređaja ili isključiti napon"];
var pvrConName   	= ["PVR","Informacije o programu :",["Note: If you record the HD channel, please to select  the  disk(of speed >5.0MB/sec), and to select the disk (of speed >3.0MB/sec) when you want to record the SD channel.","Snimak je sačuvan u \"PVR\" fascikli"],"zaustavi","Snimanje","sat","Minuta","Trajanje","Saveti","Podesite dužinu snimanja pomoću smjernih tastera"];
var pvrDisRemind 	= "Molim, priključite USB memoriju radi snimanja.";
var pvrRemindWords  = ["Želite li izači ?",
							"Želite li zaustaviti snimanje i pregledati snimljene datoteke ?",
							"Disk je izvučen.",
							"Nema dovoljno slobodne memorije.",
							"Nema video zapisa. Početak snimanja.",
							"LDR se ne može pokrenuti na zaš. kanalu.",
							"Funkcija nije dostupna",
							"Uspešno sačuvano",
							"Da li želite da zaustavite snimanje i promenite izvor ulaza?",
							"TV će završiti trenutnu snimku. Želite li izači?",
							"PVR snimanje treba TV signal, da funkcioniše ispravno, proverite signal ."];
var pvrChangeCh 	= ["Želite li da uključite kanal?",
							"Da li želite da zaustavite snimanje i promenite kanal?"];
var pvrChangeToPIN8	= ["Želite li promeniti izvor uređaju, koji je spojen na SCART ulaz ?",
				    		"Želite li da se zaustavi proces snimanja i menjati izvorni uređaj povezan na SCART ulaz?"];
var pvrChangeToCEC  = ["Želite li promeniti izvorni uređaj povezan na HDMI ulaz?",
				  			 "Želite li da se zaustavi proces snimanja i menjati izvorni uređaj povezan na HDMI ulaz?"];
var pvrGuideJump    = ["Želite li ući u EPG?",
							"Da li želite da zaustavite snimanje i pokrenete el. vodič?"];
var pvrMediaJump    = ["Želite li ući u medije?",
							"Da li želite da zaustavite snimanje i pokrenete Media?"];
var timeshiftExtra	= ["Zaustavite pomeranje vremena i promenite režim TV Promeni kanal?",
						"Želite li zaustaviti interval i menjati izvorni uređaj povezan na SCART ulaz?",
						"Želite li zaustaviti vremensku odlaganje ili menjati izvorni uređaj povezan na HDMI ulaz?",
						"Vr. pomeraj se ne može pokrenuti na zaš. kanalu.",
						"Želite li zaustaviti vremensku odlaganje i uneti EPG?",
						"Zaustavite pomeranje vremena i promenite režim TV na režim USB?",
						"Zaustavite pomeranje vremena I promeni ulazni izvor?",
						"Molim, priključite USB memoriju radi snimanja.",
						"Veličina diska:nije dovoljna.",
						"TV će završiti trenutnu vremensku odlaganje. Želite li izači?"];
var timeshiftStatus	= ["brzo nazad","zaustavi","reprodukcija","pauza ","brzo napred"];
var pvrPowerOffRemind= ["Spremnost za snimanje","Mirovnje","TV momentalno snima, želite li nastaviti sa snimanjem, kad je TV prijemnik u pripravnom stanju?"];
var timeshiftInitTitle= "Podešavanje diska";
var timeshiftInitReminds= ["Čarobnjak se koristi za podešavanje USB diska za pomeranje vremena. Odaberite režim podešavanja.",
						 "Za bolje performanse, preporučujemo formatiranje USB diska. To će izbrisati sve podatke.",
						 "Odaberite veličinu datoteke za pomeranje vremena.",
						 "Formatiranje",
						 "Nema dovoljno slobodne memorije.",
						 "Kreiranje datoteke pomeranja vremena",
						 "Testiranje brzine",
						 "Brzina diska je previše mala (< %f MB/sec) da bi se omogućila funkcija pomeranje vremena!",
						 "Disk je spreman za pomeranje vreme. .Ali mi preporučujemo promenu brzine diska (brzina> %f MB/sec) za bolje performanse.",
						 "Disk je spreman za pomeranje vreme. ."];
var timeshiftInitButtons= ["Formatiranje","Preskoči","Otkaži","Ok","Kraj","Izlaz"];
var timeshiftInitOther=["Brzina diska","MB / sek"];

var selectChoice	= "Jeste li sigurni?";
var chAtvStore		= "Spremi kao XXXX";
var chEpgFirstGenreUK= ["Bioskop","Vesti i informacije","ZABAVA","Sport","Dečje","Obrazovanje","Stil života","Drama"];
var homePageTitleList = ["APLIKACIJE","TV","VIDEI","Početna stranica"];
var homePageFavAndAllName  = ["Popularne aplikacije","Sve aplikacije"];
var homePageBackUp = ["E - priručnik","GuideOn"];
var homePageRemind   = ["Pune funkcije su dostupne samo kada je uspostavljena mrežna veza.","Vaš TV nema kanala. Programi su dostupni na kraju pretraživanja kanala.","Nema programa","Pretražim kanale sada?"];
var homePageHistory = ["Istorija"];
var miracastTitle = ["Prikaz Wi-Fi mreže","TCL uređaj"];
var miracastRemind=["Prikaz Wi-Fi mreže vam omogućava da delite ekran i zvuk vašeg uređaja, kao što su pametni telefon ili tablet na TV, bežično (tj. bez kablova) . To omogućava da vidite na TV-u , u isto vreme , šta vaš pametni telefon ili tablet pokazuje. Na primer, možete da pokrenete video na pametnom telefonu i prikažete ga istovremeno na svom televizoru, ili koristite svoj tablični računar kao kontroler za igre sa sadržajem prikazanim na velikom ekranu vašeg televizora .","WiFi TV link na TV-u je spreman. Sada možete početi da delite ekran vašeg uređaja sa TV-om.","Povezivanje . Molimo sačekajte!","Povezivanje nije uspelo!","Ne mogu povezati. Molimo proverite!"];
var homePageLittleWin = ["Settings","Medijum","popularni programi","Smart TV","EPG"];

var hbbtvStopRemind  = ["Da li želite da zaustavite reprodukciju?"];
var colorSystem = ["Auto","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Za više informacija , pritisnite ≡";
var emptyListInfo = "Nema uređaja povezanog sa TV-om!";
var optionVideoListArray_1 = ["Unpared definisana slika", "Unapred definisani zvuk ", "Režim reprodukovanja", "Režim ekrana", "3D režim", 
							  "Prebacivanje L-D", "Dubina polja", "Titl", "zvučna traka", "Naslov", "Poglavlje", "Info"];
var optionVideoListArray_2 = ["Unpared definisana slika", "Unapred definisani zvuk ", "Režim reprodukovanja", "Režim ekrana", 
							  "Titl", "zvučna traka", "Naslov", "Poglavlje", "Info"];
var bottomTipsText = ["Repr./Pauza", "brzo nazad", "brzo napred", "Lista za reprodukovanje", "Settings"];
var picturePresetArray = ["Cтандард", "Динамички", "Prirodni", "Bioskop", "lično"];
var videoPlayModeArray = ["Ponovi sve", "Ponovi jednom", "Normalno"];
var screenModeHDArray = ["16:9", "4:3", "Синерама", "Масштабир. по ширине", "Масштаб. режим 2", "Масшт. по шир. режим 2", "Масштаб. с заполнением", "Automatski"];
var screenModeSDArray = ["16:9", "4:3", "Синерама", "Масштабирование 14:9 ", "Масштабирование 16:9 ", "Увеличение 16:9 ", "Automatski"];
var Mode3DArray = ["Isključ.", "2D-u-3D", "Jedno-uz-Drugo", "Vrh i Dno", "Preplitanje linija"];
var videoOptionListArray = ["Isključ.", "Pesma", "Titl", "Naslov", "Poglavlje"];
var subMenuTitleText = "Titl";
var langMenuTitleText = "Audio jezik";
var titleMenuTitleText = "Naslov";
var mode3DMenuTitleText = "3D režim";
var langInfoText = "Pesma";
var STOP_RESUME_INFO = "Stop-Nastavak";
var playListName = "Ime   ";
var eb_tips = "Saveti";
var ok_button = "Ok";
var eb_info = ["Greška audio dekodiranja.", "Greška dekodiranja videa.", "Audio format nije podržan.", 
			   "Video format nije podržan.", "Ne mogu da otvorim ovaj fajl.", "Reprodukcijska greška, pokušajte ponovo.",
			   "Format nije podržan.", "Ups! Sastav je prestao da radi.",
			   "Putanja datoteka ne postoji ne postoji ili je neispravan .\n Zamenite uređaj za skladištenje i pokušajte ponovo.",
			   "Nastavi reprodukciju od poslednjeg\n statusa reprodukcije?"];
var picturePlayErrorTips = ["Greška pri učitavanju!!!","Slika je prevelika!!!","Greška na mreži!!!","Greška niza!!!","Greška parametra!!!","Nepoznata greška!!!"];
var frameTitleText = "Novi uređaj";
var eb_quit_info = "Jeste li sigurni da želite izaći?";
var eb_yes = "DA";
var eb_no = "NE";
var offinfo = "Isključ.";
var naInfo = "nijedan";
var consoleInfoArray = ["brzo nazad", "brzo napred", "Repr./Pauza", "Lista za reprodukovanje"];
var cantOperateText = ["Funkcija nije podržana."];
var chapterChangeInfo = "Samo poglavlja 1 do XXXX su dostupne .";
var metaDataArray = ["Adresa/uređivanje metapodataka :", "Metapodatki poglavlja:", "Metapodatki zvuka :", "Metapodatki podnaslova :"];
var metaTitleInfo = "Naslov";
var metaChapterInfo = "Poglavlje";
var videoLoadingInfo = "Analiziranje ...";
var listLoadingInfo = "Otvaram ...";
var pgInfo = "Pravna procena :";
var fileNameText = "Ime   ";
var fileDateText = "Datum";
var fileSizeText = "Veličina";
var fileDurationText = "Trajanje";
var fileDirectorText = "Direktor ";
var fileCopyrightText = "Autorsko pravo";
var fileArtistText = "Izvođač";
var fileAlbumText = "Album";
var fileGenreText = "Žanr";
var fileYearText = "godina";
var fileGenreText = "Žanr";
var mainListArray = ["Sve", "Slika", "Video", "muzika"];
var sortArray = ["Ime   ", "Datum"];
var parserArray = ["Normalno", "rekurzivan"];
var emptyTipsInfo = "Ups. Nije pronađen podržan fajl.";
var emptyFolderInfo = "Ups. Nije pronađen podržan fajl.";
var sortName = "sortiranje po";
var parserName = "Parser";
var divx_str1 = "DivX(R) registracija";
var divx_str2 = "Odjava registracije DivX(R)";
var infor_str = "Info";
var quickMenuEmptyText = "Opcije nisu dostupne .";

var musicSoundPresetArray = ["Cтандард", "Bioskop", "muzika", "jasan glas", "lično"];
var musicInformationArray = ["Ime   ", "Izvođač", "Album", "Žanr:", "Godina:", "Trajanje:"];
var playListName = "Ime   ";
var playTipsInfo = ["Reproducirate prvi fajl.", "Reproducirate zadnji fajl."]
var musicNameInfo = "Name";
var musicArtistInfo = "Izvođač";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Unapred definisani zvuk ";
var optionBGMInfo = "Reprodukovanje u pozadini";
var optionAudioOnlyInfo = "Samo audio";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX je spojen sa TV !";
var tvRemoteTitle		= "TV Remote";
var tvRemoteDeveloper	= "Aplikaciju je kreirao TCL";
var tvRemoteDeviceTitle	= "Naziv uređaja:";
var remoteOption		= ["Multimedijalno deljenje","Daljinski upravljač","Pomoć","O","Pametno povezivanje"];
var remotebottom		= "Molimo preuzmite \"TV daljinski upravljač\" na vaš pametni telefon";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Delite fotografije, video i muziku na TV - u preko telefona .",
							"Koraci : \n 1. Kliknite na \"TV daljinski upravljač\" na telefonu . Povežite svoj telefon s televizorom putem iste ViFi mreže ; \n 2. Kliknite na \"Deljenje medija\" za pregledanje multimediskih fajlova , \n 3. Pošaljite medij za reprodukciju na TV - u ( sa jednim od sledećih opcija )",
							"      a) Prevucite i spustite fasciklu/datoteku na ikon TV-a na gornjem delu ekrana.\n     b) Usmerite telefon prema TV-u da pokrenete prvu datoteku.\n      c) Reprodukujte multimedijalnu datoteku na telefonu i pritisnite na ikonu za deljenje sa TV-om.",
							"   4. Dok reprodukujete na TV-u, protresite telefon da reprodukujte prethodnu ili narednu datoteku."];
var controlReminds		= ["Koristite telefon kao daljinski upravljač za TV.",
							" ",
							"Koraci : \n 1. Kliknite na \"TV daljinski upravljač\" na telefonu . Povežite svoj telefon s televizorom putem iste ViFi mreže ; \n 2. Kliknite na \"daljinski upravljač\" za kontrolu TV-a."];
var helpDeviceWords		= "Interakcija više ekrana";
var helpBottom			= "U doba \"oblak\" tehnologije, pametni uređaji, kao što su telefon TV su međusobno povezani. Podelite medije na više ekrana sa vašom porodicom i kontrolišite TV preko telefona! ";
var helpReminds			= ["Pripreme\n 1. Preuzmite i instalirajte \"TV daljinac\" iz Google Play ili Apple Store . \n 2. Povežite svoj telefon s televizorom putem iste ViFi mreže .",
							" ",
							"Preporučeni telefoni\n   1. CPU: iznad 800 MHz.\n   2. Skladištenje: najmanje 80 MB slobodnog prostora.",
							" ",
							"Odricanje\n Ako \"TV upravljač\" nije dostupan na vašem telefonu, obratite se proizvođaču telefona."];
var helpButtons			= ["Prethodno","Naredno"];
var aboutReminds		= ["TV Remote","Aplikaciju je kreirao TCL"];
var aboutExit			= "Izlaz";
var smartReminds		= ["Brza i pametna veza između TV-a i telefona .",
							" ",
							"Koraci \n 1. Povežite TV i pametni telefon u istoj lokalnoj mreži . Kliknite na \"TV daljinski upravljač\" na vašem pametnom telefonu \n 2. Kliknite na \" Smart Connect \" skeniranje QR kodova . \n 3. Kada je TV u načinu prenosa, pritisnite dugme INFO na daljinskom upravljaču za 4 sekunde dok ne vidite cijelozaslonski QR kod.",];
var smartQRReminds		= ["Kliknite na Connect Smart na TV daljinskom upravljaču na telefonu i skenirajte QR kod za brzo povezivanje televizora i telefona .",
							"QR kodovi sadrže podatke o računu lokalne mreže. Molimo sačuvajte ga ."];
							

var consoleTipArray = ["Prethodno","Naredno","konzola","Lista za reprodukovanje"];							
var optionInfoArray = ["Unpared definisana slika","Režim reprodukovanja","Trajanje","Efekat","Info"];

var playModeArray = ["Normalno","slučajni izbor","ponovi "];
var durationArray = ["Kratka ( 5s )", "Središnja ( 10s )", "Duga ( 15s )"];
var effectArray = ["Nema", "okreni", "prelaz prema desno ", "prelaz prema levo", "prelaz prema gore ", "prelaz prema dole ", "prelaz iz centra ", "prelaz prema centru ", "Nasumice"];
var infoArray = ["Ime:","Veličina:","Daum:","Lokacija"];

var picturePresetBarTitleInfo = "Unpared definisana slika";
var picturePresetBarArray = ["Cтандард","Динамички","Bioskop","Bioskop","lično"];
var upTipsInfo = "Premeštanje slike"; //add yums 2014-10-10
var consoleTipsArray = ["konzola","Prethodno","Naredno","Lista za reprodukovanje","Settings"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Ponovo pritisnite DESNO za reprodukciju slijedeče slike","Ponovo pritisnite LEVO za reprodukciju prethodne slike","Ponovo pritisnite DOLE za prikaz liste reprodukovanje"]; //add yums 2014-10-10

var optionPvrListArray = ["Unpared definisana slika","Unapred definisani zvuk ", "Režim ekrana", "3D režim", "Titl", "zvučna traka", "Info"];							
	
var titleSpanFirstArray = ["Kontrola i veza","Osnovne funkcije","APLIKACIJE","TV","Settings","FAQ"];
var titleSpanSecondArray = [["Daljinski upravljač","tasteri ploče","Jednostavna navigacija","TV priključak","TV priključak","TV priključak","Bežično"],["uređaj za lansiranje","Statusna traka","Izvor"],["reprodukcija aplikacija","Medijum","TV Remote"],["Podesite kanal i jačinu","Spisak kanala","EPG","Instal. kanala","Omiljeni kanali"],["podešavanje slike","podešavanje zvuka","Podešavanje kanala","Softver. ažuriranje","Jezik","Roditeljska zaštita"],["Najčešće postavljana pitanja","Najčešće postavljana pitanja","Rešavanje problema","Rešavanje problema","Uslovi korišćenja"]];
var contentSpan1_1Array =[["NAPAJANJE:","IZVOR:","PODEŠAVANJA:","OPCIJA:","NAZAD:","INFORMACIJE:","POČETNA:","IZLAZ:","SPISAK:"],
    ["Uključuje napajanje ili režim mirovanja",
        "Izaberite izvor signala",
        "Za pristup meniju Podešavanja",
        "Za pristup meniju Opcija",
        "Vratite se u prethodni meni ili izađite iz aktivne aplikacije",
        "Prikazuje informacije o programu",
        "Za pristup početnoj stranici SmartTV",
        "Vratite se u prethodni meni ili izađite iz aktivne aplikacije",
        "Prikazuje listu kanala"]];
var contentSpan1_2Array = ["Prethodni kanal","Sledeći kanal","povećanje jačine","smanjenje jačine","Ovo je početna stranica","Potvrda opcije","Stanje mirovanja / S"];
var contentSpan1_3Array = ["OK / Vodič","Kanal gore","Kanal dole","Glas dole","Glas gore","Dostupan je kao strelica u nekim funkcijama."];
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","AV OUT adapter","LAN ( lokalna mreža )","pametni telefon","Personalni računar / tuner / DVD","audio pojačalo","Audio pojačalo / Monitor","Vaš TV možda neće imati sve potrebne poslovnice"];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","slušalice","AV IN adapter","SPDIF","CMP AUDIO IN adapter","CMP IN (YPbPr) adapter","USB uređaji","USB uređaji","slušalice","SPC / konzola za igre / prijemnik / DVD","audio pojačalo","SPC / konzola za igre / prijemnik / DVD","Vaš TV možda neće imati sve potrebne poslovnice"];
var contentSpan1_6Array = ["Obični interfejs","SD","VGA","SCART","Mini SCART","Ulaz za antenu","PCMCIA kartica","SD kartica","PC","Prijemnik / DVD","Antena / Kabl / Satelit","Vaš TV možda neće imati sve potrebne poslovnice"];
var contentSpan1_7Array = ["таблета","PC","роутер","телефон","TV"];
var contentSpan1_8Array = ["Funkcija prekidača/Uključivanje","Pritisnite i držite da otvorite tajmer za gašenje","Dole","Gore","Zvuk/Kanal/Izvor"];

var contentSpan2Array = [["Pritisnite tastere sa strelicama za pogled naslovne stranice.","Zatim pritisnite OK za gledanje jednog od opremljenog programa ili za ulazak u aplikaciju."],["Prikaz datuma, mreže i naprava, itd u gornjem desnom uglu ekrana."],["Izbor izvora ulaznog signala uređaja, spojenih na TV putem različitih priključka, kao što su TV, AV, HDMI, itd"]];

var contentSpan3Array = ["Uživajte i gledajte omiljene aplikacije kroz Smart TV stranicu","Gledajte fotografije, gledajte video zapise i svirajte glazbu sa USB uređaja za skladištenje.","Spojite TV i vaš pametni telefon ili tablet na istoj mreži","Kliknite nScreen ili TV upravljač na pametnom telefonu ili tabletu","Delite fotografije, video snimke i muziku na više ekranima sa vašom porodicom i kontrolišite vaš televizor kroz svoj pametni telefon"];

var contentSpan4Array = [["Pritisnite GORE / DOLE za prebacivanje kanala","Pritisnite LEVO / DESNO za podešavanje jačine zvuka"],["Pritisnite dugme LIST na daljinskom upravljaču za kretanje kroz listu kanala","Pritisnite GORE / DOLE za odabir kanala"],["EPG je vodič na ekranu koji prikazuje televizijske programe. Kroz programe se možete kretati, odabiriti, pogledati i snimati."],["Pronalaženje i instaliranje kanala"],["Dodavanje ili uređivanje svojih omiljenih kanala na listi kanala"]];

var contentSpan5Array = ["Uživajte u svojim omiljenim programima putem video aplikacija"];

var contentSpan6Array = [["Pritisnite Opcija za prikaz postavljanja opcija sistema","Ulaz na podešavanja slike za podešavanje vrednosti"],["Pritisnite Opcija za prikaz postavljanja opcija sistema","Ulaz na podešavanja zvuka za konfigurisanje opcija"],["Pritisnite Opcija za prikaz postavljanja opcija sistema","Ulaz na podešavanja kanala za postavljanje opcije"],["Ažuriranje TV-a kada je nova verzija softvera dostupna"],["Možete odabrati željeni jezik menija"],["Omogućuje roditeljima zaključavanje kanala ili programa koji nisu prikladni za decu"]];

var contentSpan7_1Array = [["Nema slike, nema zvuka","Proverite da li osigurač ili prekidač radi.","Priključite drugi električni uređaj u utičnicu kako bi bili sigurni da radi, ili je uključen.","Utikač u lošem kontaktu sa utičnicom","Proverite izvor signala."],["Normalna slika , nema zvuka","Pritisnite taster za jačinu zvuka prema gore za povećanje jačine.","Zvučna postavka je netačna.","Greška signala emitovanja."],["Normalni zvuk, bez slike","Podesite osvetljenje i kontrast","Greška signala emitovanja.","Proverite da li je omogučen jedino audio naćin."]];
var contentSpan7_2Array = [["radiofrekvencijske smetnje","Ta smetnja stvara pokretne talase ili dijagonalne linije, u nekim slučajevima, gubitak kontrasta na slici. Pronađite i uklonite izvor radio smetnje."],["bez boja","Prilagodite podešavanja boje.","Pokušajte drugi kanal. Crno - beli program može biti dostupan."],["Daljinski upravljač ne radi","Zamenite baterije.","Baterije nisu instalirane pravilno. TV ne može biti priključene."]];
var contentSpan7_3Array = [["Sadržaja USB uređaja nije prikazan","Proverite da li je USB uređaj za skladištenje kompatibilan sa TV - om","Proverite da su audio i video fajla podržane na TV - u"],["Reprodukovanje bez zvuka","Audio format nije podržan od strane TV plejera"],["Datoteke neće igrati glatko","Performansa prenosa USB uređaja za skladištenje može ograničiti brzinu prenosa podataka na TV-u."]];
var contentSpan7_4Array = [["Na šta treba paziti kada se ažurira softver","Bez prekida napajanja tokom ažuriranja softvera.","Izbegavajte bilo kakve operacije sa daljinskim upravljačem, kada ažurirate softver.","Budite strpljivi, jer može da proces obnove softvera potrajati malo duže."],["Nakon ažuriranja softvera, neće biti nikakvih značajnih promena na TV interfejsu.","Pod određenim uslovima, ažuriranje softvera ne znači samo dodavanjem novih funkcij , nego i poboljšanje funkcionisanja TV-a bez značajnih promena u interfejsu. Takođe, TV interfejs ponekad ostaje nepromenjen."]];
var termsTitle = "Uslovi korišćenja";
var termsConditions = ["( Pravna Izjava ) o TCL - proizvođač ovog televizora .","Zbog različitih mogućnosti proizvoda koji koriste Smart TV - usluga, kao i ograničenja u dostupnim sadržaja, određene  funkcije, aplikacije i usluge možda nisu dostupna na svim uređajima ili na svim teritorijama. Neke funkcije na Smart TV mogu takođe zahtevati dodatne periferne uređaje ili članarinu koja se prodaju odvojeno. Molimo Vas da posetite naš  sajt za više informacija o specifičnim informacijama uređaja i dostupnosti sadržaja. Usluge i dostupnost sadržaja kroz Smart TV so odvisne od promena s vremena na vreme, bez prethodne najave.\n   Sav sadržaj i usluge dostupne preko ovog uređaja pripadaju trećim licima i zaštićene su autorskim pravima, patentom, žigom i / ili drugim zakonima o intelektualnoj svojini. Takav sadržaj i usluge su namenjene isključivo za ličnu i nekomercijalnu upotrebu. Ne možete koristiti bilo koji sadržaj ili usluge na način koji nije ovlašćen od strane vlasnika ili provajdera sadržaja. Bez ograničavanja navedenog, osim ako nije izričito dozvoljeno od strane važećeg vlasnika sadržaja ili provajdera, ne možete da menjate, kopirate, objavljivate, otpremate, prenosite, prevodite, prodavate, kreirate izvedene radove, eksploatišete, ili distribuirate na bilo koji način ili bilo koji medij sadržaja ili usluge, prikazane preko ovog uređaja .\n    Izričito prihvatate i slažete se da je korišćenje uređaja na sopstveni rizik i da je ceo rizik u pogledu zadovoljavajućeg kvaliteta, performansi i preciznost na vas. Uređaj i svi SADRŽAJI i usluge su dobavljeni \ \" kao što jesu \ \" , bez bilo kakve garancije, bilo izričite ili implicitne. TCL izričito odriče sve garancije i uslove u pogledu uređaja i bilo kog sadržaja i usluga, bilo izričitih ili implicitnih, uključujući, ali ne ograničavajući se na, garancije za prodaju, zadovoljavajućeg kvaliteta, pogodnosti za određenu svrhu , tačnosti , mirnog uživanja, i ne - kršenje prava trećih lica . TCL ne garantuje tačnost, valjanost,blagovremenost, zakonitost ili potpunost bilo kojeg sadržaja ili usluge dostupne preko ovog uređaja, a ne garantuje da će  uređaj, sadržaj ili usluge zadovoljavati vaše zahteve, ili da će uređaj ili usluga raditi bez prekida i bez grešaka. Ni pod kakvim okolnostima, uključujući i nemar, neće biti odgovoran TCL, bilo po ugovoru ili deliktu, za bilo koju direktnu, indirektnu, slučajnu, posebnu ili posledičnu štetu, troškove, ili bilo koje druge štete koje proističu iz ili su u vezi sa, bilo koje informacije sadržane u, ili kao posledica korišćenja uređaja, ili bilo kog sadržaja ili usluge pristupa vas ili bilo koje treće strane, čak i ako je obaveštena o mogućnosti takve štete.\n   Usluge treće strane mogu da se promene , da se suspendiraju, da se uklone, prestanu ili su prekinute , ili pristup može biti onemogućen u bilo koje vreme, bez prethodne najave, a TCL ne daje nikakve garancije da će bilo koji sadržaj ili usluga ostati na raspolaganju za bilo koji vremenski period. Sadržaj i usluge se prenose trećim stranama putem mreža i komunikacionih sredstava nad kojima TCL nema kontrolu. Ne ograničavajući opštost ovog odricanja, TCL izričito odriče bilo kakvu odgovornost za bilo kakvu promenu, prekid, onemogućavanje, uklanjanje ili prekid bilo kog sadržaja ili usluge dostupne preko ovog uređaja. TCL može da nametne ograničenja na korišćenje ili pristup određenim uslugama ili sadržaju, u svakom slučaju, a bez prethodnog obaveštenja ili odgovornosti. TCL je nije odgovoran za korisnički servis u vezi sa sadržajem i uslugama. Svako pitanje ili zahteve koji se odnosi na sadržaj ili usluge, treba uputiti direktno na provajdera tih sadržaja i usluga .\n"];

var noChannelListRemind        = ["Kanali nisu pronađeni. Popis kanala će biti dostupan krajem pretraživanje kanala.","Skeniranje kanala "];
var closeSubtitleRemind   = "Ova funkcija će biti dostupna kada su titlovi isključeni. Želite li jih konfigurisati sada?";

var estickerTitles = ["Vrlo realne slike","Boja koja oživljava","Veliko, životno kretanje","Dinamična kvaliteta slike","SR UHD adaptacija","Doživite 3D svet","brže performanse","Budući 4k sadržaj","Uživajte u svetu na internetu","Pristup dodatnim sadržajima","Ugrađen digitalni prijemnik","Povežite sve uređaje","Različiti izvori 4K","Sadržaj USB","Ultra - brz ViFi","Mobilni sadržaj na TV ","Sadržaj mobilnog uređaja","lokalni sadržaj","Odobreno s strani DivX","besprekorna slika","Spremnost za kanale","TDT Premium"];
var estickerDescriptions = ["Neverovatno iskustvo gledanja zahvaljujući sliki sa četiri puta više detalja punog HD ekrana na UHD","Širok spektar boja omogućava emocije u svakoj sceni sa živim bojama crvene i smaragdno zelene","4K okvirna interpolacija i svetlost u pozadini, pazeći da se eliminiše zamućenje u pokretu","Vedrina izvorne slike je poboljšana za istinski dinamične izraze sa izvrsnim kontrastom","Uživajte jasne i precizne TV emisije i Blu-ray diskove , zahvaljujući Super Resolution tehnologiji","Iskusite 3D TV spremnost i pogledajte razne 3D sadržaje","Više prijatno iskustvo zabave sa procesorom sa četiri jedra za glatke interakcije, bolje performanse","HEVC ( H.265 ) kodek podrška za nadolazeće standardne 4K video distribucije","Bogatstvo internetnih aplikacija , video na zahtev , gledajte istorijske sadržaje i pregledajte internet","Vidite više komplementarnih usluga i sadržaja iz vaše omiljene emisije","Pristupajte TV kanalima u visokoj rezoluciji bez dodatnog prijemnika","Jednostavno povezivanje mnogih digitalnih resursa, koji su dostupni kod kuće","TV je spreman za buduće reprodukovanje 4K 50 / 60Hz putem HDMI 2.0 s HDCP 2.2","Video i foto sadržaji direktno sa USB flash diska, hard diska ili kamere na velikom ekranu u rezoluciji 4K","Najnovija generacija 2×2 MIMO i AC standard obezbeđuje pristup internetu neuporedive brzine","Uživajte u fotografijama, videu, aplikacija sa mobilnih uređaja na velikom ekranu , zahvaljujući tehnologiji zrcaljenja ekrana","Fotografije, videji, aplikacije sa vašeg pametnog telefona ili tableta mogu se prikazati na velikom ekranu","Prikaz lokalnog sadržaja na velikom ekranu, kao što su fotografije, videji iz uređaja spojenih na lokalnu mrežu","Reproducirajte iznajmljene ili vlastite filmove, koji su zaštićeni sa strane DivX","Ultra uzak i veoma tanak dizajn","Ispitan i odobren od strane Canal +","Ispitan i odobren od strane TDT Premium"];							

var eManualTextArray = ["E - priručnik","Sve grafika unutra su samo za zastupanje."];
var frontPanelRemind = "pred. ploča je zaklj.";
var eRPRemind		 = "Šop režim ne ispunjava  ERP zahtev. Jeste li sigurni?";	
var noRelatedChannel = "Nema povezanih kanala";
var option0624Name          = ["BOP","BFS","Događaj po događaj","GetUserID","BGM","Reset all","Reset shop","NRM","DVB-T2 i selekcija zemlja","HbbTV režim"];
var DVBT2AndChoice = ["Uključ.","Po zemlji","Isključ."];
var hbbtvServiceRemind = "Usluga HbbTV stiže uskoro.";
var insertWord = "Umetni";		
var viewDetail = "Prikaz detalja";							

var remindOAD  = "Ažuriranje softvera. Novi preporučeni ažurirani softver možda posotji na drugom kanalu. Ako prihvatite preuzimanje, može automatski promeniti kanal. Žellte da to uradite odmah?";

var LEDStatus = ["Treperenje", "Normalno","Isključ."];
var netFlixRemind = "Ova funkcija će prekinuti pristup Netflix uslugama dok se ponovo ne prijavite.";
var ESNExplanation = "Elektronski serijski broj";
var resetShopRemind = "Sistem se trenutno resetuje. Molimo nemojte isključivati TV";
var initialSelectOption = "Molimo odaberite jednu opciju:";
var databaseRemind   = "Sistem prepoznaje ovu banku podataka kao oštećenu iz nepoznatih razloga i automatski je popravlja. Pritisnite OK da nastavite";
var Deactivation = "Deaktivacija";
var oadFutureRemind = "Ažuriranje softvera.\n Novi preporučeni softver će biti dostupan %s. Ažuriranje može potrajati i možda će se ekran zacrneti. Nemojte gasiti prijemnik tokom ažuriranja. Ako prihvatite ovo ažuriranje, ostavite prijemnik uključenim u zakazano vreme. Da li želite da primite ovo ažuriranje?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Izlaz zvuka";
var bt_soundOutPutTV = "TV zvučnici";
var bt_soundOutPutBT = "Bluetooth uređaj";
var bt_soundOutPutBT_TV = "Bluetooth i TV";
var bt_refreshBarName = "Uređaji";
var bt_settingTips_On = "Uklopi Bluetooth funkciju i pretraži uređaje.";
var bt_settingTips_Finding = "Tražim uređaje, koji su na raspolaganju…";
var bt_settingTips_NoDevice = "Nema uređaja na raspolaganju.";
var bt_deviceList_State_NoConnect = "Nije priključeno";
var bt_deviceList_State_Connecting = "Povezujem…";
var bt_deviceList_State_Connected = "Povezano";
var bt_deviceList_State_Paired = "Upareno";
var bt_deviceList_Conncect_Failed_Tips1 = "Veza nije uspostavljena.";
var bt_deviceList_Conncect_Failed_Tips2 = "Molimo potvrdite, da je XXX Bluetooth funkcija uključena";
var bt_deviceList_Conncect_Success = "Priključen na Bluetooth uređaj.";
var bt_deviceList_Disconncect_Success = "Prekinut od Bluetooth uređaja.";
var bt_deviceList_Disconnect = "Da li ste sigurni, da želite prekinuti vezu sa XXX?";
var bt_tipsTitle = "Savet";
var bt_bluetooth_Pairing_Title = "Bluetooth parenje";
var bt_bluetooth_Input_Pin = "Molimo unesite PIN:";
var bt_bluetooth_Output_Pin_Tip = "Unesite PIN XXXX pomoću tastature.";
var bt_bluetooth_Pin_Wrong_Tip = "Pogrešan PIN.";
var bt_bluetooth_Remove_Pair_Title = "Upit";
var bt_bluetooth_Remove_Pair_Ask = "Zaboravim ovaj uređaj?";
							
							
var audioDescriptionName = ["Audio opis","Zvučnik","Jačina zvuka iz zvučnika","Slušalice","Jačina zvuka iz slušalica","AD Jačina zvuka","BT uređaj","Jačina zvuka BT uređaja","Pojačalo","Zvučnik"];
var audioDescriptionOptions = ["Isključ.","Normalno","Audio opis"];
var volumeOffRemind = 'Podesite XXX na „On“ (Uključ.) u meniju Podešavanja.';
var switchSourceRemind   = " Umetnuto. Želite li sada da promenite?";
var footballModeName = "Sportski režim";
var resetStadium = "Stadion";

var atvSearchMenu = "ATV manual search";
var dtvSearchMenu = "DTV manual search";
var settingNoticeSourceName ="Autom. Biranje izvora";

var smartTVOptions		= ["Portal Smart TV","HbbTV","Share & See","Prikaz Wi-Fi mreže","Terms & conditions",
    "na mreži u pripravnosti","Resetovanje smart TV-a","Cookie policy","Privacy policy","Brisanje podataka"];
var supportOptions		= ["Daljinska dijagnostika","Kontaktirajte nas"];
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
							
var tvDoctor=["Daljinska dijagnostika 2.0",
"Aplikacija može samo da obavlja dijagnostiku Smart TV-a i poboljšava doživljaj korišćenja. Ova aplikacija prikuplja podatke o radu TV-a i modelu, otprema ih na server i koristi za rešavanje problema sa TV-om. Ne pristupa vašim ličnim podacima. Proverite da li je TV povezan na internet.",
"Lokalna dijagnostika",
"Kada dijagnostika počne, pratite uputstva našeg tehničara.",
"Daljinska dijagnostika",
"Pre korišćenja proverite da li je naš tehničar onlajn.",
"Serijski broj:",
"&nbsp;&nbsp;&nbsp;&nbsp;ID korisnika:",
"Povezujem se…",
"Dijagnostika je u toku. Ne prekidajte mrežnu vezu. ",
"TV nije povezan na internet; proverite mrežnu vezu.",
"Izlaz"
];
var contactUsOption = ["Kontaktirajte nas",
    "Obratite se kompaniji TCL ako imate problema sa korišćenjem ovog uređaja.",
    "Kontaktirajte nas",
    "Veb-sajt: Posetite",
    "Broj pozivnog centra:","Informacije o proizvodu","Ime modela:",
    "Verzija softvera:","","ID korisnika:","ID projekta:",
    "Tip klijent:","MAC adresa bežične veze:","MAC adresa žične veze:","Netflix ESN:","Skenirajte informacije putem mobilnog telefona.",
    ", pa izaberite zemlju."];


//本地launcher的翻译，与服务器无关，只用于本地launcher
var homePageWords = ["Istorija", "Pretraga"];//home页的翻译
var titlePageWords = ["Početak", "Video snimci","TV","Aplikacije"];//index的标题翻译
var videosPageWords = ["Uygulamalar", "Sport","Muzika","Popularno","Igrice","Obrazovanje","Vesti"];//videos页的内容翻译

//同时应用于本地和服务器
var statusPageWords = ["USB","Podešavanja","Wi-Fi","Žično"];//状态栏的翻译

//二级页面的翻译
var searchPageWords = ["Pretraga", "Popularne pretrage:","Serije, Filmovi, Ljudi ..."];
var resultSearchPageWords = ["Rezultati za upit"," ","Probajte sa drugim ključnim rečima.","Nažalost, nije nađen nijedan video na temu "," "];
var historyPageWords = ["Istorija", 'Pritisnite','da izbrišete istoriju',"Izbriši jednu","Izbriši sve","Juče","Danas"," Još niste gledali nijedan video.","Istorija gledanog sadržaja je izbrisana!"];
var channelPageWords = ["Nažalost, još nije nađen nijedan video."];



//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9",
                       	   "Zoom-","0","Zoom+",
                       	   "Izlaz","0","",
                       	   "spisak","0","Tekst",
                       	   "Vodič","Uđi","Izlaz",
                       	   "Meni","Titl","Info",
                       	   "Stop",
                       	   "Info","Meni","Izlaz",
                       	   "Izlaz"
                       	   ];	

//added for LA sports mode
var sportsModeInitReminds= ["Ovaj čarobnjak je namenjen za konfigurisanje USB uređaja za Sportski režim. Izaberite režim podešavanja.",
						 "Izaberite veličinu datoteke za Sportski režim.",
						 "Kreiranje datoteke za Sportski režim",
						 "Brzina USB uređaja je premala (ispod %f MB/s) za Sportski režim!",
						 "USB uređaj je spreman za Sportski režim. Međutim, ipak preporučujemo da uzmete neki drugi uređaj (brži od %f MB/s) da biste imali bolje performanse.",
						 "USB uređaj je spreman za Sportski režim."];

var sportsModeExtra	= ["Želite li da zaustavite Sportski režim i promenite kanal?",
						"Želite li da zaustavite Sportski režim i da kao izvor izaberete uređaj priključen u SCART ulaz?",
						"Želite li da zaustavite Sportski režim i da kao izvor izaberete uređaj priključen u HDMI ulaz?",
						"Sportski režim nije podržan na šifrovanim kanalima.",
						"Želite li da zaustavite Sportski režim i da uđete u elektronski programski vodič?",
						"Želite li da zaustavite Sportski režim i da uđete u odeljak Medijumi?",
						"Želite li da zaustavite Sportski režim i da promenite izvor ulaznog signala?",
						"TV će isključiti trenutni Sportski režim. Želite li da izađete?"];
var remoteControlNote = "- Daljinski upravljač može se razlikovati u zavisnosti od modela proizvoda";


var textArray = ["Volume","Channel","Source","Switch/Power","Guide","seconds to Power OFF"];
var guideArray = ["VOL-","VOL+","CH-","CH+","Pre","Next"];
var favChannelListRemind = ["Nema omiljenih kanala. Idite na druge liste i koristite „Zeleni taster“ da biste dodali omiljene kanale."];

var proxySetting = ["Podešavanja proksi servera","Port"];
var powerOffShop = ["Preporučuje se korišćenje Režima kupovine, nastaviti?"];
var tcastTextPageWords = ["Mnoštvo video snimaka, raznovrsne aplikacije","Daljinski upravljač za TV, tako da vam je sve pri ruci","Sjajan sadržaj koji možete da gledate na velikom ekranu"];
var tcastOtherWords = ["SKENIRAJTE QR kod i preuzmite T-CAST","TV je povezan na mrežu","Naziv TV-a","T-Cast"];
var hbbtvWords = ["Podešavanje Hbbtv-a","HbbTV","kolači","Kolačići treće strane","ID uređaja","praćenje"];
var hbbtvTrackingWords = ["YES","NO","Nije važno"];
var eStickerTipWords = ["Imate manje od 400 M memorije. Želite li da izbrišete video-snimke u Demo-režimu i oslobodite prostor?"];
var delEstickerVideoRemid = ["Video-snimak je uspešno izbrisan"];
var selectSatRemind = "Ne možete da izaberete više od 20 satelita!";
var cookiePolicyTitle = "Cookie Policy – Online Smart TV Services";
var cookiePolicyConditions = ["Company respects your privacy when using Smart TVs manufactured and Services provided by Company. Cookies are used by many websites and other Internet services and your Smart TV will accept, store and transmit cookies to ensure that these websites and services operate properly. Company also uses cookies when providing you Services. In this Cookie Policy Company describes which cookies are set on your Smart TV and how you can manage them.\nPlease note that all personal data that Company collects and/or processes through or with the help of cookies is subject to the Privacy Policy and you should read the Cookie Policy together with the Privacy Policy.\n1. What is a cookie?\nCookies are small text files that may be placed on your Smart TV. When a website or the red-button service of a TV station is accessed, the website or service may store a cookie in the Smart TV. During subsequent accesses, a cookie that is placed on your Smart TV will send information to the party that has placed the cookie. Cookies are extremely common and used on a number of websites and services. Each cookie will typically contain the name of the domain from which the cookie has come, the \"lifetime\" of the cookie, and a value (usually a unique number). For a more thorough explanation of what cookies are and how they operate, please visit www.allaboutcookies.org.\nCookies can be categorized into functional cookies and non-functional cookies. Functional cookies are cookies that are strictly required for the purpose of providing you the Smart TV services and for websites and other services to provide the right content to the Smart TV. Non-functional cookies are all other cookies.\nThis Cookie Policy relates to cookies that are placed by us, as well as advertising cookies that may be placed by third parties through our services on your Smart TV. This Cookie Policy does not relate to cookies that may be placed when you use the Smart TV services to access third party websites, services or applications. For these cookies we refer you to the respective cookie policies of such third parties. However, this Cookie Policy describes how to delete such cookies (see section 4 below).\n2. Which non-functional cookies do we use?\nAdvertising: In-video and display advertisements may be served to your Smart TV when using Smart TV services. These advertisements can be served by us or by third parties via, or as coordinated by, our advertising server, which performs a central coordinating role in relation to the serving of such advertisements. Our advertising server or a third party advertising server will set a cookie on your Smart TV. By means of this cookie an advertising server will register whether an advertisement has been served to your Smart TV or whether someone using your Smart TV has clicked on an advertisement. We use the information saved in such advertising cookie to remember which advertisements have been served on your Smart TV so we can make sure that not too many of the same advertisements are served on any particular Smart TV, and that we are able to settle our commercial arrangements with our advertising partners. We shall not use this information to serve targeted advertisements. Furthermore, third parties may use our advertising system to serve advertisements to your Smart TV and place cookies on your Smart TV when such advertisements are served. \nThese cookies contain, among others, information about the served advertisements, information on in which application or domain such advertisements are served, and your IP address. This is done to remember how often a particular advertisement is shown, and in order to prevent the same advertisement being shown too often. External third party advertisers that may place advertisements may also use cookies to track your activity over multiple websites, and to provide advertisements that correspond to your personal preferences.\n3. Third party websites\nWhen you visit websites or services of third parties via the Smart TV services of your Smart TV, it is possible that such websites or services place cookies on your Smart TV, and that such websites track and store your interactions on such websites. We do not request or encourage such activities and will not use such information. Please refer to the respective cookie and privacy policies of such websites and services for more information about such parties’ use of such cookies.\n4. Cookie deletion\nYour user interface of your Smart TV allows you to delete all cookies and other local browser storage from the Smart TV. It is highly advisable to remove all cookies and locally stored settings prior to selling or giving away your Smart TV.\n5. Contacting us\nIf you have any questions or comments regarding our Cookie Policy or our practice of using cookies you can send us an e-mail via FRsupport@tcl.com.\nVersion: 1.0\n"];
var privacyPolicyTitle = "Privacy Policy – Online Smart TV Services";
var privacyPolicyConditions = ["We respect your privacy when handling your personal data. This Privacy Policy describes the entity responsible for the collection, processing and use of personal data we collect from you in connection with the use of our Smart TV services (\"Services\"), what types of personal data we collect about you, what we do with it, and your rights in relation to our use of the personal data. \n1. Data controller\nThe collection, processing and use of the personal data collected from you when using the Services is conducted by Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, China (\"Company\"). Please note, however, that we are not responsible for all data processing activities set out below. We have nevertheless included a description of the respective activities in our Privacy Policy because this processing is connected with your use of the Smart TV.\n2. Data processing consent\nSome of the collection, processing and/or use of your personal data require your consent. \nIf you have consented to the use of your personal data for the purpose of improving the Services, your consent had the following wording:\n\"I consent to the collection, processing and use of my device start time, DTV channel list, favorite channels list, visit time, and viewed channels for the purposes of analyzing user habits to improve the Services and/or to analyze how many online users Company has per day/month/year and to the sharing of this information with TV stations.\"\nIf you have consented to the use of your personal data for advertisements that are tailored to your interests, your consent had the following wording:\n\"I consent to the collection, processing and use of my client type and country for the purpose of receiving appropriate advertisements.\"\nConsent is voluntary and you will still be able to use the Services if you do not consent. However, you may see advertisements and other content that is not tailored to your preferences. Irrespective of your consent Company reserves the right to collect, process and/or use the above data to the extent permitted by applicable law.\nYou may withdraw your consent to any of the above with effect for the future at any time. You may object to a use of your personal data for marketing, market or opinion research and to the tailoring of the Services to your needs. In order to withdraw your consent and/or to object, please change the privacy settings of your Smart TV accordingly.\n3. Personal data collected\nIrrespective of your consent, Company collects, processes, stores and uses the following data categories:\nDevice-ID: Your Smart TV stores a fixed unique number that enables us to identify and authenticate the Smart TV when you use the Services. This number is called the Device-ID. The Device-ID will be provided to our service partner to provide you the Services. We also provide the Device-ID to selected content partners for authentication purposes. These content partners use the Device-ID to authenticate your Smart TV for access to services provided by a content partner.\nIP address and MAC address: Your Smart TV will be assigned an IP address when accessing the Internet. This IP address will be transmitted to us and processed by us each time the Smart TV requests information or data from the Services. If your Smart TV is behind a router (e.g. in a local home network or local WLAN), we may collect and process the IP address of such router. The MAC address is a unique number assigned to each network interface of your Smart TV. The MAC address will also be collected and processed by us when the Smart TV requests information or data from the Services.\nService request data: Whenever you connect your Smart TV to the Internet and turn on the Smart TV, it will automatically connect to the Services, which are managed by our service partner. Your Smart TV will then be authenticated as being certified for access to the Services. For authentication purposes, the Services store one or more unique numeric identifiers related to your Smart TV. When connecting to the Service, the Smart TV will transmit the IP address it has been assigned and will transmit device specific information (Smart TV model, software version) to look whether software updates are available.\nService settings: As part of the regular functionality of the Services you can manually arrange the order in which apps are displayed by the Services. Our service partner will store your arrangement and other preferences you may set during using the Services. This information will be linked to the Device-ID.\nDevice specific information: The Smart TV stores several information about itself and its configuration. This information includes the Smart TV type, the version of the operation system of the Smart TV, its panel resolution, the project ID (i.e. information regarding configuration files), the user agent, browser name, browser version, and the language and country that have been configured in the Smart TV. This information will be used by us and will be provided to our service partner and content partners.\nAdvertising: The Services may serve advertisements. These advertisements are served by us, or by third parties using advertising inventory assigned by us. All advertisements are served by means of, or via, our advertising server, which fulfills a coordinating role for the serving of advertisements. Our advertising server or the third party advertising server may set a cookie on the Smart TV. Please refer to our Cookie Policy for more information about these cookies.\nService and Content Partner traffic: When you use the Services your Smart TV will request data from the Services via the Internet. As part of these requests your IP address as described above and the language and country that has been configured in your Smart TV will be transmitted to our service partner. Our service partner will process the respective data in accordance with its privacy policy.\nSecond screen usage: If you use our second screen application, the controls you activate on the application and the country and language settings, DTV channel list, favorite channels lists, schedule lists, Device-ID, current channel, protocol version and IP address of your Smart TV will be collected and processed by us on our servers. Our servers will then control your Smart TV as directed by you in the second screen app.\nHbbTV - \"Red Button\": TV stations (\"Stations\") may send additional information with their TV signal. If the Smart TV receives specific instructions in such additional information and if it is connected to the Internet, the Smart TV will download a picture or small page from the Station's website and display it together with the information to press the \"Red Button\" on your remote control if you want to use additional services provided by the Station. This happens each time you zap. Downloading the picture from the Station's website the Smart TV will transmit some personal data, i.e. the DTV channel list, current channel, event information table, TV time, IP address of your Smart TV and cookies stored on the Smart TV (if any). The Station is responsible for the collection, processing and/or use of this data. Moreover, if you use additional services offered by a Station through the Red Button, the Station may collect other personal data about you (e.g. which on-demand videos you watch, the news you read, etc.).\n4. Purposes for which we process and/or use your personal data\nWe process collected data for the following purposes:\n• Providing the Services: We use the IP address and MAC address, Device-ID, the version of the operation system of the Smart TV, client type of your Smart TV and its panel resolution, the project ID (i.e. information regarding configuration files), your DTV channel list, viewed channels, time zone, country and language settings to provide your Smart TV with access to the Services and services provided by content partners. Purposes include (but are not limited to) authentication, providing location based services to you (e.g. weather forecasts); abuse handling, management of security incidents, monitoring of availability of the Services, and providing backup services of user preferences.\n• Authentication: We use the Device-ID and MAC address for authentication purposes.\n• Software updates: Each time your Smart TV is powered on, it will provide us with the IP address, Device-ID, software version, client type of your Smart TV, project ID (i.e. configuration files), user ID, serial number to offer you and provide you with appropriate software updates. \n• Improving the Services: We use aggregated and anonymized usage data (i.e. data about your interaction with the Services) to improve the user experience of the Services.\n• Serving advertisements: We use the information in advertising cookies to allow the system to log which advertisements have been shown on your Smart TV in order to make sure that you do not receive too many similar advertisements, and we are able to settle our commercial arrangements with our advertising partners. External advertisers that serve advertisements on the Services or the content partner websites after coordination by our advertising server, may also use cookies to track you over multiple websites, and to serve advertisements that reflect your personal preferences.\n• Optimizing advertisements: We use data related to advertising views and clicks on advertisements to optimize the advertising experience of consumers in the Service.\n• Discounts: We provide the Device-ID to selected content partners to enable these partners to identify to what extent they can provide you with free access to Video on Demand titles in their collection.\n• Law enforcement: We may be required to provide data to competent law enforcement authorities or courts of justice. If we do so, we will only do so subject to a binding legal instrument like a warrant or a judicial order, which requires us to cooperate with the relevant authorities.\nUse of the Services is possible by using pseudonyms, unless specific services require that you provide your name and/or email address.\n5. Categories of recipients\nCompany shares your personal data collected during your use of the Services only with the following third parties:\n• With third party providers of Smart TV services if you request such services (e.g. if you start the Netflix application on your Smart TV we may share your IP address, MAC address, software version and TV model name with Netflix).\n• With third party content partners if you request certain content provided by such content partners (e.g. in order to provide you with the GoLive IP TV service, we may share your TV client type, IP address and language settings with the legal entity providing the GoLive service).\n• To the extent you have consented to the sharing of specific personal data with third parties above, Company will share your personal data with such third parties.\n• With outsourcing service providers as data processors assisting Company with providing the Services.\nCompany shares your personal data with other third parties only if Company is obligated to do so on the basis of legal requirements (e.g. to courts or criminal prosecution authorities), you have consented to the respective sharing or the sharing is otherwise lawful under applicable law.\n6. Countries in which your data will be processed\nCompany and/or some of the recipients of your personal data listed above may be located outside of the European Economic Area (i.e. in the following countries: Peoples Republic of China, United States of America). Therefore, your personal data may be processed in countries which are not recognized as providing an adequate level of protection of personal data in accordance with Directive 95/46/EC of the European Parliament and of the Council of 24 October 1995 on the protection of individuals with regard to the processing of personal data and on the free movement of such data.\n7. Your rights\nYou may contact Company in order to receive information about your personal data processed by Company and/or to exercise your statutory rights regarding access, rectification, deletion and blocking of your personal data; and/or to object the processing of your personal data for purposes of marketing and/or market or opinion research.\n8. Changes to the Privacy Policy\nTo improve our Services we may require amendments to this Privacy Policy – e.g. by the implementation of new technologies or the introduction of new services. We reserve the right to change or supplement this Privacy Policy at any time.\n9. Contact information\nIf you have any questions about the Privacy Policy or would like to complain about our handling of your personal data, please contact us by using one of the following contact details:\nEmail: FRsupport@tcl.com\nVersion: 1.0\n"];
var privacyPolicyTerms = [
    "Aktiviraj uslugu Smart TV",
    "Pristajem na prikupljanje, obradu i korišćenje vremena pokretanja mog uređaja, liste DTV kanala, liste omiljenih kanala, vremena posete i gledanih kanala u svrhe analiziranja navika korisnika, a radi poboljšavanja usluga i/ili analiziranja broja onlajn korisnika TCL-a na dnevnom/mesečnom/godišnjem nivou i deljenja tih informacija sa TV stanicama.",
    "Omogući uslugu preporučivanja.",
    "Omogući aplikaciju za drugi ekran za mobilne uređaje",
    "Omogući automatsko ažuriranje softvera.",
    "Omogući uslugu preporučivanja FreeviewPlay"
];
var privacyPolicyTips = [
    "Biće deaktivirane sve usluge Smart TV.",
    "Biće deaktivirana usluga HbbTV TV kanala kada se koristi ugrađeni tjuner.",
    "Biće deaktivirana usluga preporučivanja sadržaja i TV programa.",
    "Biće deaktivirana aplikacija u drugom ekranu.",
    "TV neće automatski proveravati da li ima ispravki softvera i novih funkcija.",
    "Biće deaktiviran FreeviewPlay sadržaj."
];
var privacyPolicyRemind = "Označite odgovarajuće polje u Podešavanjima.";
var set = "Podesi";
var copyShopDemoTips = ["Povezano sa USB-om. Želite li da kopirate video na fleš?","Kopiraj video na fleš","Video je uspešno kopiran!","Greška u kopiranju videa!"];
var dataDeletionWords = ["Izbrišite podatke o usluzi pametnog TV-a u pozadinskim serverima.","Napomene: Podaci vezani za korišćenje pametnog TV-a biće izbrisani mesec dana pošto označite ovu stavku. Imajte na umu da brisanje neće uticati na lokalne podatke u vašem TV-u.","Nemojte više prijavljivati podatke serveru pametnog TV-a.","Napomene:  Vaši podaci vezani za korišćenje usluga pametnog TV-a neće se više prenositi serveru pošto označite ovu stavku. Vaš TV neće više primati preporučene usluge.","Ako želite da saznate više, posetite veb-sajt www.tcl.eu"];
var miracastWords = ["Bežična veza","Preslikaj Android telefon na TV","Kliknite da se povežete","Ova funkcija je dostupna samo na Android telefonima"];
var miracastTips = ["Koraci povezivanja","Otvori sistemska podešavanja","Još načina povezivanja \n / Druge bežične veze","Izaberite bežični ekran","Kliknite da se povežete \n Čeka se na detekciju"];
var termsAndConditions = ["\nThe contents and services (collectively the \"Licensed Application\") made available to you through this TV set (this \"Device\") are licensed, not sold, to you for use only under these terms and conditions. The providers of the Licensed Application (each an \"Application Provider\") reserve all rights not expressly granted to you.\n\n1.Scope of License\n\nThe license granted to you for a Licensed Application by the relevant Application Provider is limited to a non-transferable license to use the Licensed Application on the Device that you own or control. You may not distribute or make the Licensed Application available over a network where it could be used by multiple devices at the same time. You may not rent, lease, lend, sell, redistribute or sublicense the Licensed Application. \n\nAll Licensed Applications and all contents included therein that are accessible through this Device belong to the Application Provider and are protected by applicable intellectual property laws. Unless otherwise permitted by applicable law, you may not modify, copy, decompile, reverse engineer, disassemble, republish, upload, post, transmit, translate, attempt to derive the source code of, create derivative works of, or otherwise exploit any Licensed Application or any updates or any part thereof. If you breach this restriction, you may be subject to prosecution and damage claims. The terms of the license will govern any upgrades provided by the Application Provider that replace and/or supplement the original Licensed Application, unless such upgrade is accompanied by a separate license in which case the terms of that license will govern. You shall be solely responsible for any and all costs (if any) for the upgrading of the Licensed Application.\n\n2.Third-party Materials\n\nThe Licensed Application may enable access to Application Provider’s and third party services and web sites (collectively the \"Services\"). By using any of the Services, you may encounter contents that may be deemed offensive, indecent, or objectionable, which contents may or may not be identified as having explicit language, and that the results of any search or entering of a particular URL may automatically and unintentionally generate links or references to objectionable material. Nevertheless, the manufacturer of this Device (the \"Manufacturer\") and the Application Provider shall not have any liability to you for contents that may be found to be offensive, indecent, or objectionable. \n\nThe Manufacturer shall not be responsible for examining or evaluating the content, accuracy, completeness, timeliness, validity, copyright compliance, legality, quality or any other aspect of such Services. The Manufacturer does not warrant or endorse and shall not assume and shall not have any liability or responsibility to you or any other person for any of the Services. \n\nThe Services may contain proprietary content, information and material (collectively \"Third-party Materials\") that are protected by applicable intellectual property and other laws, and you shall not use such Third-party Materials in any way whatsoever except for permitted use of the Services. Unless otherwise permitted by applicable law, you shall not reproduce, modify, rent, lease, loan, sell, distribute the Third-party Materials or create derivative works thereof in any manner, and you shall not exploit the Services in any unauthorized way whatsoever. You shall not use the Services in any manner to harass, abuse, stalk, threaten, defame or otherwise infringe or violate the rights of any other party, and the Manufacturer shall not in any way be responsible for any such use by you, nor for any harassing, threatening, defamatory, offensive or illegal messages or transmissions that you may receive as a result of using any of the Services. \n\n3.No Warranty\n\nAll Licensed Applications and Services are provided \"as is\" and \"as available\" without warranty of any kind, either express or implied. The Manufacturer expressly disclaims all warranties and conditions with respect to the Licensed Applications and the Services, either express or implied, including but not limited to, warranties of merchantability, of satisfactory quality, of fitness for a particular purpose, of accuracy, of quiet enjoyment, and of non-infringement of third party rights. The Manufacturer does not guarantee the accuracy, validity, timeliness, legality, or completeness of any Licensed Application or Service made available through this Device and does not warrant that the Device, the Licensed Applications or the Services will meet your requirements, or that operation of the Licensed Applications or the Services will be uninterrupted or error-free, or that defects in the Licensed Application or Services will be corrected. Should the Licensed Application or Services prove to be defective, you shall assume the entire cost of all necessary servicing, repair or correction.\n\nThe Licensed Applications and Services may be changed, suspended, removed, terminated or interrupted, or access may be disabled at any time, without notice, and the Manufacturer makes no representation or warranty that any content or service included in the Licensed Applications and Services will remain available for any period of time. Such contents and services are transmitted by third parties by means of networks and transmission facilities over which the Manufacturer has no control. Without limiting the generality of the foregoing, the Manufacturer expressly disclaims any responsibility or liability for any change, interruption, disabling, removal of or suspension of any content or service made available through this Device. The Application Provider and other providers of the Services reserve the right to change, suspend, remove, or disable access to any Licensed Application or Services at any time without notice. The Manufacturer may also impose limits on the use of or access to certain Licensed Applications or Services, in any case and without notice or liability.\n\nThe Manufacturer does not provide customer service related to the Licensed Applications and the Services. Any question or request for service relating to the Licensed Applications and the Services should be made directly to the respective provider.\n\n4.Collection and Use of Information\n\nThe Manufacturer, the Application Providers and the providers of the Services may collect and use technical data and related information, including but not limited to technical information about this Device, system and application software, and peripherals, to facilitate the provision of software updates, product support and other services to you (if any) related to the Device and the Licensed Application. The Manufacturer, the Application Providers and the providers of the Services may use such information, as long as it is in a form that does not personally identify you, to improve its products or to provide services or technologies to you. For more information on the collection and use of information, please visit our privacy policy: http://www.tcl.eu/en/.\n\n5.Unavailability of Certain Features\n\nDue to restrictions of Application Provider, certain features, applications, and services may not be available on this Device (including its peripheral devices) or in all territories. Some features on this Device may also require additional peripheral devices or membership fees that are sold separately.\n\n6.Limitation of Liabilities\n\nTo the extent not prohibited by applicable law, under no circumstances, including negligence, shall the Manufacturer be liable, whether in contract or tort, for any direct, indirect, incidental, special or consequential damages, attorney fees, expenses, or any other damages arising out of, or in connection with, any information contained in, or as a result of the use of the Device, any Licensed Application or any Service by you or any third party, even if advised of the possibility of such damages.\n\nThe Manufacturer shall only be liable for intent and gross negligence."];
var privacyNotice = ["\nWe respect your privacy when handling your personal data. This Privacy Notice describes the entity responsible for the processing of personal data we collect from you in connection with the use of our Smart TV services (\"Services\"), what types of personal data we collect about you, what we do with it, and your rights in relation to our use of the personal data. \n\n1.Data controller and representative in the European Union\n\nThe collection, processing and use of the personal data collected from you when using the Services is conducted by Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, China (\"Company\"). Our contact details as well as the contact details of our representative in the European Union are provided under Section 12 below. Please note, however, that we are not responsible for all data processing activities set out below. We have nevertheless included a description of the respective activities in our Privacy Notice because this processing is connected with your use of the Smart TV.\n\n2.Data processing consent\n\nSome of the data processing activities that we conduct require your consent, e.g. the use of your personal data for the purpose of improving the Services.\n\nConsent is voluntary and you will still be able to use the Services if you do not consent. However, you may see content that is not tailored to your preferences. Irrespective of your consent we reserve the right to process your personal data to the extent permitted by applicable law.\n\nYou may withdraw your consent at any time. The withdrawal of consent shall not affect the lawfulness of processing based on consent before its withdrawal. In order to withdraw your consent and/or to object (c.f. Section 10 and Appendix Your Rights below for your rights to object), please change the privacy settings of your Smart TV accordingly.\n\n3.Specific categories of personal data\n\nWe process in particular the following data categories:\n\nDevice-ID: Your Smart TV stores a fixed unique number that enables us to identify and authenticate the Smart TV when you use the Services. This number is called the Device-ID. \n\nIP address and MAC address: Your Smart TV will be assigned an IP address when accessing the Internet. If your Smart TV is behind a router (e.g. in a local home network or local WLAN), we may process the IP address of such router. The MAC address is a unique number assigned to each network interface of your Smart TV. \n\nDevice specific information: The Smart TV stores several information about itself and its configuration. This information includes the Smart TV type, the version of the operation system of the Smart TV, its panel resolution, the project ID (i.e. information regarding configuration files), the user agent, browser name, browser version, and the language and country that have been configured in the Smart TV. \n\nThese information will be used by us and will be provided to our service partner and content partners for the purposes described below.\n\n4.Purposes for which we process and/or use your personal data and legal bases\n\nThe purposes for which we process your personal data and the respective legal bases are described below. To the extent that contractual purposes are mentioned below as legal basis, we cannot provide you with the Services if you do not provide us with the respective data. To the extent that your consent is mentioned as legal basis, you are free to provide or withhold your consent. If you do not provide your consent, we will not process your personal data for the respective purpose.\n\n•Providing the Services: We use the IP address and MAC address, Device-ID, the version of the operation system of the Smart TV, client type of your Smart TV and its panel resolution, the project ID (i.e. information regarding configuration files), your DTV channel list, viewed channels, time zone, country and language settings to provide your Smart TV with access to the Services and services provided by content partners. Purposes include (but are not limited to) providing location based services to you (e.g. weather forecasts); abuse handling, management of security incidents, monitoring of availability of the Services, and providing backup services of user preferences.\n\nWhen you use the Services your Smart TV will request data from the Services via the Internet. As part of these requests your IP address as described above and the language and country that has been configured in your Smart TV will be transmitted to our service partner. Our service partner will process the respective data in accordance with its privacy notice.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) General Data Protection Regulation (“GDPR”).\n\n•Service Settings: As part of the regular functionality of the Services you can manually arrange the order in which apps are displayed by the Services. Our service partner will store your arrangement and other preferences you may set during use of the Services. This information will be linked to the Device-ID.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•Authentication: Whenever you connect your Smart TV to the Internet and turn on the Smart TV, it will automatically connect to the Services, which are managed by our service partner. Your Smart TV will then be authenticated as being certified for access to the Services. For authentication purposes, the Services store one or more unique numeric identifiers related to your Smart TV. We use the Device-ID and MAC address for authentication purposes. We also provide the Device-ID to selected content partners for authentication purposes. These content partners use the Device-ID to authenticate your Smart TV for access to services provided by a content partner.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•Remote diagnostics: As part of the Services, we provide you with remote diagnostic services. Therefore, we process the Device-ID, device number, serial number, MAC address, and error logs, error codes and error descriptions which are provided by the faulty module (application, middleware system).\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•After-sales service: Pursuant to applicable law you may have warranty or similar rights to obtain after-sales services. TCL Europe, 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, France is responsible for handling warranty claims and other requests for after-sales services and the processing of your personal data associated therewith. I.e., for the purposes of after sales services, TCL Europe acts as data controller and we are not responsible for the respective processing of your personal data.\n\nWhen you ask for our after-sales related service, your name, e-mail address, phone number, service request and postal address included in the invoice may be required for the purpose of providing you with the after-sales service. The information may also be collected through the after-sales partners of our resellers or authorized service providers if you call them for service. You can contact TCL Europe under the contact details stated in Section 12 below for more information about the protection of personal data in connection with after-sales services.\n\nThe legal basis for the respective processing is the obligation to comply with legal obligations pursuant to Article 6 (1) c) GDPR.\n\n•T-Launcher: T-Launcher is the main page for the use of the Smart TV on Linux operating system (please see below for the use of the android operating system) and allows you to select certain content.\n\nThe legal basis for the processing of your personal data that is necessary for your use of the T-Launcher are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\nSubject to your prior consent, we will also monitor the use of the T-Launcher, i.e.:\n\n-	When you start to use T-Launcher, we will record the time of entering and exiting T-Launcher.\n-	When you start to play a video of T-Launcher, we will record the name and the duration time of the video (not applicable to Netflix, YouTube or any other service provided by a third party).\n-	When you enter or exit a page, we will record the staying time on the page.\n-	When you move your cursor from one location to another, or enter an application, we will record this event.\n-	When you install, remove or update applications, we will record these events, including the name of applications.\n\nWe collect these information mainly for big data analysis to improve products and to provide better content services to users.\n\nThe legal basis for the processing of your personal data in connection with the monitoring of your use of the T-Launcher is your consent pursuant to Article 6 (1) a) GDPR.\n\nIf you have bought an Android TV and use Google’s android operating system, your personal data will be processed by Google and we are not responsible for such processing. Please refer to Google’s privacy notice for information about the related processing of your data and your respective rights.\n\n•T-Cast: T-Cast allows you to control your TV using your phone and to share videos, music and pictures stored in your smart phone on the TV. T-Cast also allows you to mirror your smartphone on your TV.\n\nThe download and use of the app is voluntary. If you download and use the app, we will process the MAC address to calculate how many T–Cast versions have been used in the market. This is required to be able to offer you this service. If you use our second screen functionality, the controls you activate on the application and the country and language settings, DTV channel list, favorite channels lists, schedule lists, Device-ID, current channel, protocol version and IP address of your Smart TV will be collected and processed by us on our servers. Our servers will then control your Smart TV as directed by you in the app.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•Software updates: Software updates are part of the Services. Thus, each time your Smart TV is powered on, it will provide us with the IP address, Device-ID, device number, software version, client type of your Smart TV, project ID (i.e. configuration files), user ID, and serial number to look whether software updates are available and to offer you and provide you with appropriate software updates.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•Law enforcement: We may be required to provide data to competent law enforcement authorities or courts of justice. If we do so, we will only do so subject to a binding legal instrument like a warrant or a judicial order, which requires us to cooperate with the relevant authorities.\n\nThe legal basis for the respective processing is our obligation to comply with legal obligations pursuant to Article 6 (1) c) GDPR.\n\nUse of the Services is possible by using pseudonyms, unless specific services require that you provide your name and/or email address.\n\n5.Privacy and safety of children under 16\n\nWe understand the importance of taking extra precautions to protect the privacy and safety of children using our Services. Children under the age of 16, or equivalent minimum age in the relevant jurisdiction, are not permitted to provide their personal information via the TV set or when they call for after-sales service, unless their parent provided verifiable consent.\n\nAs we never collect birth dates of users, we can't identify the age of users. But if we learn that we have collected the personal information of a child under 16, or equivalent minimum age depending on the jurisdiction, outside of the above circumstances we will take steps to delete the information as soon as possible.\n\n6.Third party apps\n\nYour Smart TV allows the use of apps provided by third parties, such as Netflix, YouTube or HbbTV (red button service provided by TV broadcasters). You may download the apps from the app store or activate third party apps that are already pre-installed on your device. Third party apps that are pre-installed on your device do not collect personal data without your prior authorization. E.g. Netflix is already pre-installed on the device but only collects data when you log into your Netflix account. HbbTV only collects data when you consent to the collection by pressing the designated button on your remote control.\n\nIf you enable a third party app, personal data about you may be processed by the app provider. We are not responsible for such processing; please refer to the privacy notice of the third party app for information about the related processing of your data and your respective rights.\n\n7.Categories of recipients\n\nWe share your personal data collected during your use of the Services only with third party content partners if you request certain content provided by such content partners or with service providers as data processors assisting us with the provision of the Services.\n\nWe share your personal data with other third parties only if we are obligated to do so on the basis of legal requirements (e.g. to courts or criminal prosecution authorities), if you have consented to the respective sharing or if the sharing is otherwise lawful under applicable law.\n\n8.Countries in which your data will be processed\n\nWe and/or some of the recipients of your personal data listed above may be located outside of the European Economic Area (e.g. in the Peoples Republic of China, or United States of America). Therefore, your personal data may be processed in countries where the data protection laws may provide a different level of protection compared to the laws in your jurisdiction and which are not recognized as providing an adequate level of protection of personal data in accordance with the GDPR. The countries which provide an adequate level of data protection from a European data protection law perspective include Andorra, Argentina, Canada, Switzerland, Faeroe Islands, Guernsey, the State of Israel, Isle of Man, Jersey, New Zealand and the Eastern Republic of Uruguay. Recipients in the USA may partially be certified under the EU-U.S. Privacy Shield and thereby recognized as providing an adequate level of data protection from an European data protection law perspective. \n\nWhere required, we will implement appropriate safeguards with regard to data transfers to recipients outside of the European Union that do not provide an adequate level of data protection. A copy of the respective measure may be requested by contacting us as stated under Section 12. below.\n\n9.Storage Period\n\nYour personal data will be retained as long as necessary to provide you with the Services. For most data this generally means that we will retain your data for one month. For the purpose of remote diagnostics and after-sales services we may retain your data up to ten years. When we no longer need to use your personal data to comply with contractual or statutory obligations, we will remove it from our systems and records and/or take steps to properly anonymize it so that you can no longer be identified from it.\n\n10.Your rights\n\nPursuant to applicable data protection law you may have the right to: request access to your personal data, request rectification of your personal data; request erasure of your personal data, request restriction of processing of your personal data; request data portability, and object to the processing of your personal data. Please note that these aforementioned rights might be limited under the applicable national data protection law. For further information on these rights please refer to the Appendix Your Rights below.\n\nYou also have the right to lodge a complaint with the competent data protection supervisory authority.\n\nTo exercise your rights please contact us as stated in Section 12 below.\n\n11.Changes to the Privacy Notice\n\nTo improve our Services we may require amendments to this Privacy Notice – e.g. by the implementation of new technologies or the introduction of new services. We reserve the right to change or supplement this Privacy Notice at any time.\n\n12.Contact information and representative in the European Union\n\nIf you have any questions about the Privacy Notice or would like to complain about our handling of your personal data, please contact us by using the following contact details:\n\nContact form: www.tcl.eu/privacy/support\n\nOur representative in the European Union is: TCL Europe having offices at 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, France. You may contact TCL Europe via the contact form stated above.\n\nVersion: 2.0\n\nAppendix Your Rights\n\na.Right of access: You may have the right to obtain from us confirmation as to whether or not personal data concerning you is processed, and, where that is the case, to request access to the personal data. The access information includes - inter alia - the purposes of the processing, the categories of personal data concerned, and the recipients or categories of recipients to whom the personal data have been or will be disclosed. However, this is not an absolute right and the interests of other individuals may restrict your right of access.\n\nYou may have the right to obtain a copy of the personal data undergoing processing. For further copies requested by you, we may charge a reasonable fee based on administrative costs. \n\nb.Right to rectification: You may have the right to obtain from us the rectification of inaccurate personal data concerning you. Depending on the purposes of the processing, you may have the right to have incomplete personal data completed, including by means of providing a supplementary statement.\n\nc.Right to erasure (\"right to be forgotten\"): Under certain circumstances, you may have the right to obtain from us the erasure of personal data concerning you and we may be obligated to erase such personal data. \n\nd.Right to restriction of processing: Under certain circumstances, you may have the right to require the restriction of processing of personal data concerning you. In this case, the respective data will be marked and may only be processed by us for certain purposes.\n\ne.Right to data portability: Under certain circumstances, you may have the right to receive the personal data concerning you, which you have provided to us, in a structured, commonly used and machine-readable format and you may have the right to transmit those data to another entity without hindrance from us.\n\nf.Right to object:\n\nUnder certain circumstances, you may have the right to object, on grounds relating to your particular situation, or where personal data are processed for direct marketing purposes at any time to the processing of your personal data by us and we can be required to no longer process your personal data.\n\nMoreover, if your personal data is processed for direct marketing purposes, you have the right to object at any time to the processing of personal data concerning you for such marketing, which includes profiling to the extent that it is related to such direct marketing. In this case your personal data will no longer be processed for such purposes by us."];
var cookieNotice = ["\nWe respect your privacy when using Smart TVs manufactured and Services provided by us. Cookies are used by many websites and other internet services and your Smart TV will accept, store and transmit cookies to ensure that these websites and services operate properly. \n\nWe do not use cookies when providing the Services to you. However, third parties (e.g. third party app providers) may use cookies when you use the Smart TV to access their services. This Cookie Notice can only provide limited information concerning cookies that may be placed by third parties. For information on the actual cookies used by third parties and their functionalities we refer you to the respective cookie notices of such third parties. However, in this Cookie Notice we provide a general description which cookies can be set on your Smart TV and how you can manage them.\n\n1.What is a cookie?\n\nCookies are small text files that may be placed on your Smart TV. When a website or the red-button service of a TV station is accessed, the website or service may store a cookie in the Smart TV. During subsequent accesses, a cookie that is placed on your Smart TV will send information to the party that has placed the cookie. Cookies are extremely common and used on a number of websites and services. Each cookie will typically contain the name of the domain from which the cookie has come, the \"lifetime\" of the cookie, and a value (usually a unique number). For a more thorough explanation of what cookies are and how they operate, please visit www.allaboutcookies.org.\n\nCookies can be categorized into functional cookies and non-functional cookies. Functional cookies are cookies that are strictly required for the purpose of providing you services. Non-functional cookies are all other cookies.\n\n2.Third party websites\n\nWhen you visit websites or services of third parties via the Services of your Smart TV, it is possible that such websites or services place cookies on your Smart TV, and that such websites track and store your interactions on such websites. We do not request or encourage such activities and will not use such information. Please refer to the respective cookie and privacy notices of such websites and services for more information about such parties’ use of such cookies.\n\n3.Cookie deletion\n\nYour user interface of your Smart TV allows you to delete all cookies and other local browser storage from the Smart TV. It is highly advisable to remove all cookies and locally stored settings prior to selling or giving away your Smart TV.\n\nVersion: 2.0"];
var privacyPolicy = ["Molimo označite donje polje ili polja ako biste želeli da koristite naše usluge za pametne TV uređaje i pripadajuće usluge. Korišćenje ovih usluga zahteva obradu vaših ličnih podataka prema opisu u našoj Izjavi o privatnosti: http://www.tcl.eu/en/","Omogućite uslugu za pametne TV uređaje, skladištenje podešavanja za ovu uslugu i automatsku autentikaciju za pametni TV. Ako ne označite ovu stavku imaćete samo klasičan TV i HDMI.","Omogućite automatsko ažuriranje softvera. Označite ovo polje da biste održali svoj uređaj ažuriranim poslednjom verzijom softvera radi najboljih performansi.","(Ažuriranje softvera je važno za ispravnost vašeg TV-a jer obezbeđuje nove mogućnosti, poboljšava stabilnost u radu i bezbednost. Preporučujemo vam da označite ovo polje.)","Molimo označite donje polje ako dajete pristanak da obrađujemo vaše lične podatke u navedene svrhe. Za više informacija o tome kako obrađujemo vaše lične podatke molimo pogledajte našu Izjavu o privatnosti: http://www.tcl.eu/en/","Dajem saglasnost da se moji lični podaci (npr. vreme uključivanja i isključivanja stavke T-Launcher) obrađuju radi poboljšanja proizvoda TCL-a i radi pružanja boljih usluga sadržaja na pametnim TV uređajima."];
var termsFirTitle = ["Uslovi korišćenja","Izjava o privatnosti","Obaveštenje o kolačićima"];
var termsSecTitle = ["Pročitajte uslove i odredbe i prihvatite ih.","Pročitajte izjavu o privatnosti i složite se.","Pročitajte izjavu o kolačićima i složite se."];
var tickall = "Označite sve";
var tickremindWords = "Ako ne označite polja za potvrdu ne možete uživati u usluzi pametnog TV-a.";