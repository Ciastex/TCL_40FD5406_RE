
var all_country 	= ["Australija","Austrija","Belgija","Bugarska","Hrvatska","Republika Češka","Danska","Finska","Francuska","Njemačka",
						"Grčka","Mađarska","Italija","Luksemburg","Nizozemska","Norveška","Poljska","Portugal","Rumunjska","Rusija",
						"Srbija","Slovenija","Španjolska","Švedska","Švicarska","Ujedinjeno Kraljevstvo","Novi Zeland"," "/*Arab*/,"Estonija"," "/*Hebrew*/,
						"Latvija","Slovačka","Turska","Irska","Japan","Filipini","Thailand","Maldives","Uruguay","Peru",
    "Argentina","Chile","Venezuela","Ecuador","Costa Rica","Paraguay","Bolivia","Belize","Nicaragua","Guatemala",
						"Kina","Taiwan","Brazil","Canada","Mexico","United States","South Korea","Romania","Vietnam"/*新添加的，底层结构体中没有*/,"Ukrajina"/*新添加的，底层结构体中没有*/,
    					"Iran","Iraq"," ","Kazakhstan","Uzbekistan"," ","Kyrgyzstan","Algeria","Egypt","Tunisia",
    					"Tanzania","Kenya","Pakistan","Indonesia","Kuwait","Saudi Arabia","Qatar","Israel","Lebanon","bahrain",
    					"Angola","Congo","India","Turkmenistan","Colombia","Mongolia","Bangladesh","Nepal","Sri Lanka","North Korea",
						"Moldavija","Polynesia","EI Salvador"," ","Fiji","Liberia","Jordan","Myanmar","Ghana","Georgia",
    					"Armenia","Oman","yemen","Syria","Palestine","Afghanistan","Morocco","benin","IvoryCoast","Nigeria",
						"Sudan","Ethiopia","Zambia"," ","South Africa","mozambique","Libya","Albanija","Belarus","Iceland",
						"Litva","Mauritius","Dubai","UAE","Tajikistan","Bengal","Bosna i Hercegovina","Cipar","Kosovo","Makedonija",
						"Malta","Crna Gora","Cameroun","Singapore","Malaysia","NewCaledonia","Suriname","Jamaica","Curacao","Aruba",
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
				
var all_language 	= ["Češki","*","Danski","*","*","Njemački","Engleski","Španjolski","Grčki","Francuski",
						"Hrvatski","*","Talijanski","Mađarski","Nizozemski","Norveški","Poljski","Portugalski","Ruski","Rumunjski",
						"Slovenski","Srpski","Finski","Švedski","Bugarski","Slovački","Chinese","*","Galski","*",
						"Velški","Arapski","Ír","Letonski","*","Turski","Estonijski","Nizozemski"/*Netherlands*/,"Korejski","*",
						"hindski","*","*","Mandarinski","kantonski","Maor","Originalni audio"/*Qaa*/,"Neodređeno"/*Undetermined*/,"*","Nepoznat",
						"Neodređeno","*","*","*","*","*","*","*","*","*",
						"*","*","*","Albanski","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baskijski","*","*",
						"*","*","*","*","*","*","*","Bosanski","*","*",
						"*","*","*","*","Belorusz","*","*","Katalonski","*","*",
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
						"*","*","japanski","*","*","*","*","*","*","*",
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
						"*","*","*","*","*","Romantika","*","*","*","*",
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
var offOn			= ["Isklj.","Uklj."];
var okCancel		= ["U redu","Odustani"];
var yesNo			= ["DA","NE"];
var level			= ["Isklj.","Nisko","Visoko","Srednja"];
var manualAuto		= ["Ručno","Auto"];
var homeShop		= ["Poč.str.","Trgovina"];
var picPreset		= ["Standard","Dynamic","Prirodni ","Film","Osobni"];
var picColorTemp	= ["Hladno","Normalno","Topla","Korisnik"];
var pic3dNavig		= ["Ručno","Auto","Poluautomatsko"];
var _3dOptions		= ["3D režim","3D na 2D","Sklopka L-D","Dubina polja"];
var pic3DMode       = ["Isklj.","2D na 3D","Jedno pored drugog","Gornje i donji dio","Preplitanje linije"];
var picEcoOptions	= ["Štedni način rada","Senzor svjetla","Lokalno zatamnjivanje","Miksanje prigušenja osvjetljenja"];
var picGeoOptions	= ["Geometrija","H.položaj","V.položaj","Sat","Faza"];//Geometry 无翻译
var picAdWhiteBal	= ["C poj.","Z poj.","P poj.","C poravnanje","Z poravnanje","P poravnanje"];
var souOptions		= ["Postavke zvuka","Balans","Zvučna odgoda","SRS TSHD","Automatska glasnoća",
						"SPDIF vrsta","SPDIF odgoda","Postavljanje TV-a ","Zvučni jezik","Vrsta zvuka",
						"Opis zvuka","Pojačanje basova","Dolby Digital Plus"];
var souSpdifType	= ["Auto"/*Dolby*/,"PCM","Isklj."];
var colorSpace      = ["Auto","Izvorno","Korisnik"];
var souPresetPara	= ["100Hz","500Hz","1.5KHz","5KHz","10KHz"];
var chOptions		= ["Skeniranje kanala","Popis kanala","EPG","Organizator kanala","Dijagnostika kanala",
						"vremenski pomak","Prijevod","Teletekst","Vrsta popisa kanala"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Jačina signala","Kvaliteta signala","Frekvencija (KHz)","ID servisa","ID mreže","Ime mreže"];
var chScanOptions	= ["Zemlja/regija","Tjunerski režim","Auto pretraga","Ažur. pret.","Ana. ruč. pretraž.",
						["Ručno skeniranje kabl.","Ručno skeniranje antene","Ručno podešavanje satelita"],"Ugradnja antene ","Izbor omiljene mreže","Brisanje popisa kanala","LCN"];
var favNetDes		= "Odaberite svoju ​​omiljenu mrežu ";
var tuner			= ["Kabel","Antena","Satelit"];//Satelite 无翻译
var passError		= "Neispravna lozinka.\nUpišite opet, molim!";
var chType			= ["Analogni kanali: ","Digitalni kanali: "];
var chScanStatus	= ["Status: Skeniranje","Status: Pretraživanje je dovršeno","Status: Prekini pretraživanje","Status: Greška pretraživanja"];
var chScanPara		= ["Frekvencija (KHz)","Podešavanje","Simbol (Ksym/s)","ID mreže","Sustav",
						"Fino podešavanja","Jačina signala","Kvaliteta signala","Modus skeniranja","Identifikacija kanala "];
var chScanParaMHZ      = ["Frekvencija (MHz)"];
var chAtvManSys		= ["ZAPAD EUR","ISTOK EUR","UK","Francuska"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Auto"];
var chCleanDes		= "Želite li obrisati listu kanala?";
var chDeletDes		= "Želite li izbrisati kanal?";
var chOperator		= ["Ziggo","UPC","Ostalo"];
var chScanType		= ["Digitalni & Analogni","Digitalni","Analogni"];
var chScanMode		= ["Puno","Dalje","Brzo"];
var bookingModes	= ["Snimanje","Podsjetnik"];
var dayName			= ["Ned","pon","uto","sri","čet","pet","sub"];
var monthName		= ["Sij", "Vlj","Ožu","Tra","Svibanj","Lip","Srp","Kol","Ruj","Lis","Stu","Pro"];
var filter			= ["Filtro","Vrsta","Podvrsta"];
var chEpgFirstGenre	= ["Film","Novosti","Zabava ","Sport","Dječije","Glazba","Umjetnost","Društveni","Edukacija","Odmor","Posebni"];
var chEpgSecondGenre= [["Drama","Detektivski","Avantura","Znanstvena fantastika","Komedija","Sapunice","Romantika","Ozbiljni","Film za odrasle"," "," "," "],
						["Aktualnosti","Vremenska prognoza","Novosti","Dokumentarni","Rasprave"," "," "," "," "," "," "," "],
						["Zabava ","Zabavne igre","Različite zabavne igre","Govorne emisije"," "," "," "," "," "," "," "," "],
						["Sport","Posebni događaji","Sportske novosti","Nogomet","Tenis",
							"Kolektivni sportovi","Atletika","Motoristika","Vodeni sportovi","Zimski sportovi",
							"Jahanje","Borilački sportovi"],
						["Dječije","Predškolska djeca","Zabava za dob od 6 do 14 godina","Zabava za dob od 10 do 16 godina","Informativni","Crtani filmovi"," "," "," "," "," "," "," "],
						["Glazba","Rock","Ozbiljni","Narodna","Jazz","Mjuzikl","Balet"," "," "," "," "," "],
						["Umjetnost","Izvođačka umjetnost","Lijepa umjetnost","Religija","Popularna kultura",
							"Literatura","Film","Eksperimentalni","Emitiranje","Novi mediji",
							"Umjetnički časopis","Moda"],
						["Društveni","Novosti","Ekonomija","Poznati ljudi"," "," "," "," "," "," "," "," "],
						["Edukacija","Priroda","Tehnologija","Medicina","Strane zemlje","Društvene znanosti","Dalje obrazovanje","Jezici"," "," "," "," "],
						["Hobiji za opuštanje","Turizam","Rukotvorine","Motociklizam","Vježba i zdravlje","Kuhanje","Oglasi","Vrtlarstvo"," "," "," "," "],
						["Izvorni jezik.","Crno i bijelo","Neobjavljeno","Emisija uživo"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Presk. kanal","Sortiranje kanala","Uredi kanal","Brisanje kanala","Канал своп","канала убаци"];
var chEditPara 		= ["Ime mreže","Broj kanala","Naziv kanala","Frekvencija","Sustav boje","Sustav zvuka"];
var chSatTitles		= ["Vrsta satelita","Ugradnja antene ","Odaberite satelit"];
var chSatEidtOptions= ["Ime satelita","Položaj","LNB Snaga","LNB Frekvencija (MHz) ","Diseqc ulaz",
						"Ton 22 KHz","ton praska","Frekvencija (KHz)","Simbol (Ksym/s)","Polarizacija",
						"Jačina signala","Kvaliteta signala","Status satelita"];
var chSatAutoPromt	= [["Sve","Mreža"],
						["Sve","Besplatno"]];
var chSatAutoScanOptions=["Odaberite satelit","Modus skeniranja","Kanali"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Univerzalno",];
var chSatDiSEqCInput= ["Deaktiviraj","A","B","C","D"];
var chSatTone22KHz	= ["Auto","Uklj.","Isklj."];
var chSatToneBurst	= ["Deaktiviraj","ton praska A","ton praska B"];
var chSatPolarization= ["Horizontalno","Vertikalno"];
var chSatSetupOptions=["Vrsta antene","Podešavač","Frekvencija opsega"];
var chSatAntennaType= ["Jedan kabel","Univerzalno"];
var chSatUserBands	= ["Korisnički opseg 1","Korisnički opseg 2","Korisnički opseg 3","Korisnički opseg 4","Korisnički opseg 5","Korisnički opseg 6","Korisnički opseg 7","Korisnički opseg 8"];
var chSatOthers		= ["Transponder"];
var chSatSetupOthers= ["Korisnički definirano "];
var pleaseSelectSat = "Najprije odaberite satelite! ";
var subOptions		= ["Prijevod","Jezik digitaln. prijevoda","Jezik digitaln. prijevoda 2","Vrsta prijev."];
var ttxOptionsCon      = ["Jezik dekod. stranice","Jezik digital. teleteksta"];
var subType			= ["Normalno","Slabočujne osobe"];
var netIntf     	= ["Ethernet ","Bežični"];
var netConnDes		= ["TV provjerava mrežnu vezu. \nMolimo pričekajte",
						"Test mrežne veze je uspješan!",
						"Test mrežne veze neuspješan."];
var netSsidError	= "Trenutna duljina naziva SSID između 1-32 znakova. Provjerite naziv SSID. ";
var netOthers		= ["Šifra PIN"];
var netWlessAutoDes	= ["Molimo, pobrinite se da je ovaj PIN kôd instaliran u pristupnu točku prije nego što kliknete U redu.",
						"Molimo, pritisnite gumb na pristupnoj točki unutar 120 sekundi prije nego što kliknete U redu."];
var netConnRemind	= ["Netočna lozinka!",
						"Povezivanje. Pričekajte!",
						"Povezivanje je uspjelo i IP je pribavljen!",
						"Veza nije uspjela",
						"TV pretražuje PTe\nPričekajte malo",
						"Nema priključenoga bežičnog uređaja na TV!"];
var netWireIpOptions= ["Postavke IP-a","Vrsta adrese","IP adresa","Maska podmreže","Zadani pristupnik","Primarni DNS","Sekundarni DNS"];
var netWireConnRemind= ["Molimo, upišite vrijednost između 0 i 255.",
						"Uspješno povezani! ",
						"Unesite valjanu adresu ",
						"Uspješno povezani! ",
						"Povezivanje nije uspjelo!",
						"Povezivanje. Pričekajte!",
						"Unesite vrijednost između 1 i 223. "];
var netFlixOptions	= ["Deaktiviraj","ESN","Netflix verzija"];
var netFlixDes	 	= ["Jeste li sigurni da želite deaktivirati?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Ažuriranje softvera";
var netUpdateDialogTitle = "Ažuriranje softvera ";
var netBGDownloadTitle 	= "Preuzimanje";
var netUpdateLoadingPrompt= ["Tražim nadogradnje, pričekajte! ",
							"Preuzimanje softvera ... Pričekajte! ",
							"NE isključujte TV prijemnik tijekom ažuriranja softvera!",
                            "Potreban softver automatski preuzet u pozadini! "];
var netUpdatePrompt= ["Čestitamo, imate najnoviju verziju softvera!",
						"Pronađena je nova verzija softvera XXXX. Želite li preuzeti sada? Ovo može potrajati ovisno o statusu vaše mreže.",
						"Neuspjela prijava!",
						"Prijenos podataka nije uspio, molimo pokušajte kasnije! ",
						"Parsiranje ažuriranja XML nije  uspjelo!",
						"Veza nije uspjela",
						"Preuzimanje softvera uspješno. Želite li započeti instalaciju?",
						"Izgubljeni podaci! Neuspjelo preuzimanje!",
						"Neuspjela provjera paketa, pokušajte opet!",
						"Mreža nije u redu. Provjerite i opet se povežite…",
						"Ažuriranje nije uspjelo. Iznova pokrenite TV!",
						"Datoteka za nadogradnju slučajno je obrisana. Molimo, ponovite postupak nadogradnje putem mreže.",
						"Softver je uspješno preuzet u pozadini. Želite li pokrenuti postupak nadogradnje?"];
var netUpdateButtonText = ["Preuzmi", "Ažuriraj", "Kasnije", "Nikada", "U redu","Nastavi"];
var autoDetectPrompt = ["Pronađena je nova verzija softvera XXXX. Želite li preuzeti sada? Ovo može potrajati ovisno o statusu vaše mreže.",
						"Pronađena je nova verzija softvera XXXX. Želite li ažurirati sada?",
						"Postupak nadogradnje putem mreže je prekinut prošli put. Ponovite postupak nadogradnje.",
                        "Prijenos nove verzije programa XXXX je dovršen. Želite li nastaviti sada? ",
                        "Softver je skinuti, da li želite ažurirati sada? "];
var sysOptions		= ["E-priručnik","Jezik izbornika","Pod. Tajm.","Zaključaj","Imput postavke",
						"Ažuriranje softvera","Položaj","HbbTV način rada","Kolačići","Zajedn. sučelje",
						"Napredne postavke","Ponovo postavi izbor","LED indikator","Trenutačno uključivanje","Auto. shop način rada","Area","Demo način rada"];
var sysResetDes		= "Jeste sigur.?";
var sysMenuLangOptions=["Jezik","Željeni jezik zvuka","Preferirani drugi audio jezik "];
var sysTimerOptions	= ["Vremenska zona","Naziv regije","Sat","Tajm. miro.","Automatsko mirovanje", "Country region"];

var sysTimeZone		= ["Kao odašiljač","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Isklj.","10 minuta","20 minuta","30 minuta","40 minuta","50 minuta","60 minuta","90 minuta","120 minuta"];
var sysStandby		= ["Isklj.","4 sata","6 sata","8 sata"];
var sysRegionName	= ["Madrid ","Kanari"];
var sysClockOptions	= ["Autosinkronizacija","Datum","Vrijeme","Uklj. tajmera","Pod. Tajm.",
						"Uključi kanal","Isklj. tajmera","Pod. Tajm."];
var sysTimer		= ["Isklj.","Svakodnevno","Jednom"];

var sysInputSet		= ["Bez oznake","DVD","Blu-ray","HDD","DVDR",
						"HD rec.","Igra","VCR","PC","Digitalni STB",
						"HD dig STB","Kamera","Snimač","Drugo"];
var sysAvVideoInput	= ["Auto","RGB_CVBS","RGB","CVBS","S-video"];
var sysUpdate		= ["USB","Přes mreže","Po kanalu"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Ne može pronaći novi softver!",
						"Pronađena je nova verzija softvera XXXX. Želite li ažurirati sada?",
						"Molimo umetnite memorijski privjesak USB.",
						"Neuspjela provjera paketa, pokušajte opet!",
						"NEMOJTE vaditi USB ključ niti isključivati TV prijemnik za vrijeme ažuriranja firmvera!",
						"Softver je uspješno ažuriran. \nTV će automatski ponovno pokrenuti! ",
						"Pronađena je nova verzija softvera XXXX. Želite li preuzeti sada? Ovo može potrajati ovisno o statusu vaše mreže.",
						"Preuzimanje",
						"Preuzimanje softvera uspješno. Želite li započeti instalaciju?",
						"Ažur. neuspj.!",
						"Pregledav. datoteka za nadogradnju",
						"Softver je uspješno ažuriran.\nSada ponovo pokrenite TV."];
var sysProductInfo	= ["Trenutačna verzija","Naziv proizvoda","Naziv proizvođača","Naziv kućišta"];
var sysCiDes		= ["Nema CI kartice."];
var sysAdOptions	= ["Registracija DivX(R)","Deregistracija za DivX(R)","T-Link","Authorization Error","Potvrda o odjavi",
						"Potvrda o najmu","Najam je istekao"];
var sysRegistDes	= ["Za prikaz zaštićenih DivX zapisa morate registrirati uređaj.",
						"Registracijski kod:",
						"Registrirajte na http://vod.divx.com"];
var sysDregistDes	= ["Kod za deregistraciju:",
						"Deregistrirajte se na http://vod.divx.com",
						"Nastaviti s registracijom?"];
var mediaAuthorization = ["Vaš uređaj nije autoriziran za reprodukciju ovog DivX(R) zaštićenog videozapisa."];
var deregistrationConfrimation = ["Vaš je uređaj već registriran.","Jeste li sigurni da se želite deregistrirati?"];
var rentalConfirmation = "DivX(R) najam iskoristio je XXXX od YYYY prikaza. Nastaviti?";
var rentalExpired 	= "DivX (R) iznajmljivanje je korišteno XXXX  puta od YYYY pogleda.. DivX najam je istekao. ";

var parentalRatingNA		= ["***","***","***","***","***","***","***","***"];
var parentalRatingOptionUS		= ["***","***","***"];
var sysTVRatingUS=["***","***","***","***","***"];
var sysMPAAUS=["***","***","***","***","***","***"];
var parentalRatingOptionCanada		= ["***","***","***"];
var sysCanadaEng=["***","***","***","***","***","***"];
var sysCanadaFre=["***","***","***","***","***",""];
var sysResetRRT=["***"];
						
var sysLockOptions	= ["Blok. kanal","Blokada vremenskog intervala","Blok. progr.","Zaklj. ulaz","Zaključavanje prednje ploče","Instalacija zaključavanja",
						"Promij. lozinku","Maks. Volumen","Obriši sve"];
var sysTimeIntervals= ["Vrsta blokade","Početno vrijeme","Završno vrijeme"];
var sysRatingOptions= ["Nema","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","Cenzurirano (Španjolska) "];
var changePass		= ["Promij. lozinku","Nova lozinka","Potvrdi lozinku"];
var changePassDes	= ["Neispravna lozinka.\nUpišite opet, molim!",
						"Lozinka se ne podudara.\nUpišite je opet, molim!",
						"Lozinka uspješno postavljena!",
						"Ovaj kod je prejednostavan za lozinku.\nUpišite ponovno neki drugi!"];
var sysPowerOnChOptions= "Odaberi režim";
var sysPowerOnCh	= ["Posljednje stanje","Izbor korisnika"];
var netWlessSecu    = ["Otvoreno","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Nema","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Nema podrške"];
var netWlessSecu3	= ["Nema","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Nema podrške"];
var netOptions		= ["Internetska veza","Sučelje","Bežične postavke","IP postavke","Informacije",
						"Provjera veze","DLNA","Dalj. upr. TV-a","Netflix postavke","Wifi prikaz ",
						"Vrsta adrese","IP adresa","Maska podmreže","Zadani pristupnik","Primarni DNS",
						"Sekundarni DNS","SSID","BSSID","Molimo, unesite SSID:","Upute za identifikaciju "];
var chEditDes		= ["Duplicirani broj kanala!","Pritisnite crvenu gumb za brisanje trenutnog znaka!","Neispravni brojevi kanala."];
var chEpgNoProgram	= "Nema informacije o programu, molimo najprije pretražite programe!";
var chEpgWords		= ["Programski vodič","Nema podataka o programu.","Zaključan kanal!","Nema pojedinosti o programu.","Nema naziva programa."];
var chEpgBooking	= ["Распоред инфо", "Broj kanala","Datum početka","Početno vrijeme","Završno vrijeme",
						"Tip ponavljanja","Tip programiranog snimanja","Dodaj","Zamijeni","Promijeni",
						"Dodaj/izmijeni"];
var epgHotKey		= ["Prethodni dan","Sljedeći dan","Filtro","Raspored","Dodaj raspored"];
var chEpgBookRemind	= ["Netočno vrijeme početka","Netočno vrijeme završetka","Duplicirani raspored","Uspješno spremljeno.","Uspješno izbrisani. "];
var chSchePara		= ["Raspored","Početno vrijeme","Datum početka","Naziv programa","Naziv kanala",
						"Trajanje","Ponoviti","Raspored","Uredi","Izbriši"];
var dateTimer		= ["Jednom","Svakodnevno","Tjedno"];
var scheduleDeleteReminds="Želite li izbrisati ovaj raspored?";
var scheduleNoLists	= "Nema popisa rasporeda, Pritisnite „Crveno” kako biste dodali jedan.";
var chListWords		= ["Popis kanala","Odaberi popis","Tjunerski režim","Dodaj u favorite","Ukloniti",
						"Odaberi listu kanala","Odaberi način rada tjunera","Zamjena"];
var chListType		= ["Sve","Digitalni","Analogni","Radio","Besplatno","Favoriti"];
var chAutoScanOptions=["Odaberite operatera","Kanal tipa","Auto pretraga"];
var souSoundType	= ["Nevažeće","Mono","Mono","Stereo","Stereo",
						"SAP","SAP","Dvojni1","Dvojni2","Dvojni2",
						"Nicam mono","Nicam stereo","Nicam dual1","Nicam dual2","Nicam dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Glazba","Film","Jasan glas","Standard","Osobni"];
var picAdRgbMode	= ["Isklj.","Samo crveno","Samo zeleno","Samo plavo"];
var picAdOptions	= ["DNR","MPEG NR","RGB mode","Dynamic Contrast","Jasnoća LED pokreta",
						"Nijansa tena","Film mod ","Mod/Postavka igre","Temperatura boje","White Balance",
						"Zamrzni","Crno Stretch","Veća slika","Gama","HDMI mod","10P Balans bijele boje","Ekstender boja",
						"Smanjenje zamućenja","Smanjenje vibracija ","Bojni prostor","Pojašnjenje kretanja "];
var pic10Pwhite     = ["interval ","Crvena","Zelena","Plava","Ponovno postavi","Boje","žuti ","cijan ","magenta"];
var picMotionClarity = ["Način pokreta","interpolacija pokreta ","Jasnoća LED pokreta","Smanjenje zamućenja","Smanjenje vibracija ","Ponovno postavi"];
var picMotionMode   = ["Film","glatko ","Obriši","Sport","kupac "];
var picResetDes		= "Sve osobne postavke će se vratiti. Jeste li sigurni da žeite izvesti odabranu akciju? ";
var pic10PReset     = "Jeste li sigurni da želite poništiti 10p blans bijele boje? ";
var picMotionReset  = "Želite li poništiti jasnoću pokreta? ";
var picColorSpaceReset    = "Jeste li sigurni da želite resetirati bojni prostor? ";
var picOptions		= ["Postavljanje slike",
						"Pozadinsko svjetlo","Svjetlina","Kontrast","Zasićenje","NIJANSA","Oštrina","Temperatura boje","Mod ekrana","Automatski oblik",
						"Sportsko poboljšanje","3D","3D navigacija","ECO Settings","Geometrija",
						"Napredne postavke","Resetiranje slike","Mikro prigušenje"];
var picSize			= ["16:09", "Format 4:3 ", "format 14 : 9", "Синерама",
						"Увеличение16:9", "Увеличение над16:9","Увеличение 14:9 ","Увеличение с разпъване на образа","Широкоъгълно увеличение",
						"Увеличение 2","Широкоъгълно увеличение 2","Izvorno isparavanje zaslona ","Точка по точка","Originalno","panorama "];
var others			= ["Volumen","Prijenos","Lozinka","Status","Spremi","Zamijeni","Početak","Izlaz","Traženje","Izbriši",
						"Nema","Automatski","Pretraži","Sigurnost","Poveži se","Osvježi","Ponoviti","Zaustaviti","Settings","Kanali",
						"Uredi","Umetni","Signala!","Završi","Stereo","Audio","Izvor","Nema zvuka","Savjeti","Ponovno postavi",
						"kupac ","Podešavanje","Memoriraj","korisnik ","Bližnja tipkovnica ","Način sigurnosti ","Svaki dan","Popis PVR "];
var direction		= ["Lijevo","Desno","Gore","Dolje"];
var audioType 		= ["MPEG","DOLBY AUDIO"/*"AC3"*/,"MPEG4","AAC", "DOLBY AUDIO"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Nepoznat"];
var soundChannels   = ["Nepoznat","Mono","Pod","Dvojni mono","Stereo","Stereo niskotonac","Stereo Dolby Surround","Prostorni 2CH","Prostorni","3.0Ch","4.0Ch","5.0Ch","Mono Lfe","Dvojni mono Lfe","Stereo Lfe","Okolinski 2Ch Lfe","Okolinski Lfe","3.1Ch","4.1Ch","5.1CH","7.1CH","Zajednički stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dvojni","Lijevo","Desno","Ostalo"];
var prompts			= ["Podesite postavku slike koja najbolje odgovara Vašem okruženju gledanja.",
						"Podesite razinu svjetline. Razina svjetlina povećava se približavanjem broju 100. ",
						"Podesite razine kontrasta. Razina kontrasta između tamnih i svijetlih dijelova slike povećava se približavanjem broju 100.",
						"Podesite razinu zasićenosti. Razina zasićenosti povećava se približavanjem broju 100.",
						"Podesite razinu oštrine. Razina oštrine povećava se približavanjem broju 100.",
						"Podešavanje razine pozadinskog osvjetljenja. Razina pozadinskog osvjetljenja povećava se približavanjem broju 100.",
						"Podesite razinu nijansi. Ova postavka mijenja tonove boja.",
						"Odaberite format slike koja najbolje odgovara program koji trenutno gledate.",
						"Konfiguriraj opcije za uštedu energije.",
						"Podesite postavku geometrije zaslona prilikom priključivanja na uređaj PC.",
						"Odaberite više naprednih postavki slike.",
						"Vrati sve postavke slike na zadane.",
						"Odaberite način zvuka da odgovara vašoj osobnoj postavci.",
						"Prilagodite glasnoću između lijevog i desnog kanala.",
						"Sustav zvuka TruSurround HD pruža bogati zvuk i jasnoću pri niskim i visokim tonovima.",
						"Upotrijebite oblik digitalnog sučelja prilikom povezivanja digitalnog izlaza televizora na audio sustav kućnog kina.",
						"Odaberite audio jezik da odgovara vašoj osobnoj postavci.",
						"Omogućite funkciju slabovidnosti kako biste uživali u televizijskim programima.",
						"Testirajte TV sliku, zvuk i signal. ",
						"Odaberite vrstu liste kanala da odgovara vašem TV signalu.",
						"Odaberite jezik titlova koji se prikazuju na dnu zaslona.",
						"Prikaži trenutni tekst i slike kanala.",
						"Digital Living Network Alliance (standard DLNA). Uživajte slušanju glazbe, gledanju fotografija i videoisječaka putem kućne mreže s drugim uređajima, poput računala.",
						"Prikažite sadržaje sa svojeg pametnog telefona na televizoru i upotrijebite pametni telefon kao daljinski upravljač.",
						"Prikazuje sadržaje s uređaja Android koji podržava Miracast na zaslonu televizora.",
						"Postavite zaštitu na vaš TV.",
						"Odaberite naziv za vaš uređaj.",
						"Odaberite vaše okruženje prikaza.",
						"Vratite sve postavke sustava na zadane.",
    					"Switch off sports mode for more options.",
    					"Pojačajte kontrast slike",
    					"Poseban način rada za uživanje u sportskim programima",
    					"Uživajte u više CEC funkcija."];
var initialTitle	= ["Dobrodošli","Početno podešavanje"];
var initialPrompt	= ["Izvršite početno podešavanje sada jer Vas uzbudljivi svijet očekuje!",
						"Izaberite svoj jezik, molim:",
						"Odaberite svoju zemlju/regiju:",
						"Molimo odaberite lokaciju:",
						"Molimo, odaberite vrstu vaše mrežne veze:",
						"Molimo, odaberite način žične mrežne veze:",
						"Veza na xxxxxxxxx nije uspjela! Povežite uređaj prema sljedećem grafikonu ili odaberite Lijevo za resetiranje.. ",
						"Povezan s xxxxxxxxx! Odaberite Desno, da biste nastavili. ",
						"1) Vaš televizor može imati ugrađeni bežični adapter\n 2)Ili, ako je bežični adapter USB isporučen, priključite ga na Vaš televizor i zatim odaberite način spajanja bežična mreža",
						"Tražim. Pričekajte ... ",
						"Nema priključenoga bežičnog uređaja na TV!",
						"Provjerite je li instaliran sljedeći PIN na prije nego kliknete donji gumb ‘Dalje’.",
						"Molimo pritisnite gumb na dostupnoj točki, u manje od 120 sekundi prije nego što pritisnete Desno! ",
						"WPS (Zaštićeno Wi-Fi postavljanje)",
						"PIN (osobni identifikacijski broj) ",
						"PBC (Konfiguracija gumba) ",
						"Do sljedećeg sadržaja može se pristupiti samo pomoću mrežne veze. Želite li preskočiti postavljanje mreže? ",
						"Dostupne su nove nadogradnje upravljačkog programa koje možete preuzeti. Vrijeme potrebno za njihovo preuzimanje ovisi o stanju Vaše mreže.",
						"Ažuriranje vašeg TV softvera osigurava vam uživanje u posljednjim značajkama i uslugama.",
						"Nećete moći uživati najnovijih značajkama i usluge. Želite li preskočiti nadogradnju upravljačkog programa?",
						"Pritisnite desni gumb kako biste nastavili",
						"Ne isključujte televizor tijekom izvedbe postupka nadogradnje jer to može prouzročiti njegov neispravan rad.",
						"Ako ne želite pokrenuti ažuriranja, odaberite Ne. ",
						"Ažuriram, molimo pričekajte",
						"Također možete ažurirati softver u AŽURIRANJE SISTEMA/SOFTVERA.",
						"Izabrana zemlja zatražit će podešavanje lozinke.\nOdredite kod za vaš TV i potvrdite ga.",
						"This code is too simple.\nPlease use different digits.",
						"Čestitamo!Prvo postavljanje je završeno. Konfiguracija se može mijenjati preko glavnog izbornika i podizbornika.",
						"Molimo, odaberite način sigurnosti:",
						"Molimo odaberite način bežičnih mrežnih veza: ",
						"Mreža"];
var initNetCabAndDonRe = ["Mrežni kabel nije spojen, molimo spojite mrežni kabel! ","Nema ugrađenog bežičnog adaptera ili USB adapter nije prisutan. "];
var initChPrompt = ["Instaliranje TV kanala","Odaberite vrstu pretraživanja pomoću antene. ","U tijeku je obrada automatskog ugađanja...","Pronađeni su sljedeći antenski kanali: ","Molimo, odaberite vrstu kabelskog traženja.","Odaberite operatera s popisa. ","Molimo, konfigurirajte informacije traženja","Pronađeni su ovi kabelski kanali:","Molimo, odaberite jednog operatera s ove liste","Molimo, odaberite satelite za traženje ili uređivanje odabranog satelita","Molimo, namjestite parametre satelita","Pronađeni su sljedeći kanali i ponovno pretraživanje kanala može se pokrenuti pod Kanali / Traženje kanala "];
var initClockPrompt = ["Pridobite vrijeme pomoću mreže!",
						"Molimo postavite datum i vrijeme: "];
var initialOptions	= ["Okruženje","Postavljanje mreže","Ažuriranje softvera","Instalacija kanala","Sat"];
var initialHotkeys	= ["Natrag ","Izaberi","Sljedeće","Slažem se"];
var initLocations	= ["Poč.str.","Trgovina","Kupujte s demo"];
var initNets		= ["Žičana ","Bežični","Nemam mrežnu vezu"];
var initWireManuals	= ["IP adresa","Maska podmreže","Zadani pristupnik","Primarni DNS","Sekundarni DNS"];
var initSoftUpdates = ["Ažuriraj sada","Ažuriraj kasnije"];
var initChannelIns	= ["Nastavi","Ne želim instalirati kanala "];
var initChScanTypes	= ["Digitalni & Analogni","Digitalni","Analogni","Ne želim tražiti"];
var initChDvbts		= ["Antena ATV kanala: ","Antena DTV kanala: "];
var initChDvbcs		= ["Kabelski ATV kanali:","Kabelski DTV kanali:"];
var initChDvbss		= ["Satelitski kanali:"];
var initChDvbSOther	= ["Ne želim tražiti satelitski kanal"];
var initEndConnectedStatus= ["prekinut ","Bežična mreža spojena ","kabelski priključak "];
var initEndInstallations= "Instalirane XXXX kanala";
var initEndUpdate	= ["Ažurirano"];

var audioScenes 	= ["Stolno","Ugradnja na zid"];			
var screenSavers	= ["Nema kanala, pritisnite tipku ok i pretražite!",
						"Nema signala!",
						"Poremećeno",
						"Samo podaci",
						"Audio Program",
						"Nema zvuka i slike",
						"Nije dostupno",
						"Nema teleteksta",
						"Nema podataka o programu.",
						"Program je zaključan!",
						"Program je zaključan!\nPritisnite OK i unesite svoju šifru.",
						"Nema pojedinosti o programu.",
						"Program je štetan za maloljetne osobe. \nPritisnite u redu i unesite svoju šifru. ",
						"Zaključan kanal!",
						"Zaključan kanal!\nPritisnite OK i unesite svoju šifru.",
						"Zaključan unos!\nPritisnite OK i unesite svoju šifru.",
						"Nema podrške!",
						"Ova usluga trenutačno nije dostupna",
						"Ulaz zaključan!",
						"Nema naziva programa.",
						"Nema funkcije",
    					"Nema Prijevod"
						];
var channelNumberOverPromt = ["The number of search programs has exceeded,you can delete some programs and then retry!"];
var chBookingPromt	= ["Trenutni kanal ima planirano snimanje. TV će početi snimati.",
						"Pronađeno je planirano snimanje.\n Prebacite na XXXX za snimanje",
						"Trenutačni kanal ima podsjetnik.",
						"Pronađen je planirani podsjetnik.\n Prebacite na XXXX"];
var timeUnit		= ["Sekunda","min"];
var ciPromt			= ["Mrežni podaci su se mijenjali. Za nadogradnju možete obaviti pregled nadogradnje. ",];
var othersPromt		= ["Molim pričekajte...",];
var menuOptions		= ["Slika","Zvuk","Kanal","Smart TV","Mreža","Sustav","Podrška"];
var optionOptions	= ["Postavljanje slike","Postavke zvuka","Zamrzni","T-Link","vremenski pomak","PVR","Raspored","Settings","*"];
var optionTLinkPromt= [["Automatska aktivacija ","Automatsko mirovanje","Izbornik vodiča"],
						["Uključivanje","Stanje čekanja","Glasnoća pojačala"]];
var powerPromt		= ["TV će se uskoro isključiti! Molimo, pritisnite tipku za otkaz."];
var ttxLanguage		= ["ZAPAD EUR","ISTOK EUR","Ruski","Arapski/Hebrejski","Farsi","Arapski","Belorusz","Grčki","Turski"];
var ttxOptions		= ["Pokazati","Ciklus podstrana","Jezik","Početna stranica","Dnevne vijesti"];
var weekday         = ["Nedjelja","Ponedjeljak","Utorak","Srijeda","četvrtak","Petak","Subota"];
var lcnConfflict	= "Ovaj program ima loš prijem.";
var inShopMode		= "Vaš TV je u načinu za kupnju. Za kućni način, odaberite \"Sistem\" i promijenite \"Položaj\" iz izbornika. ";
var nitRefresh		= "Došlo je do promijene mrežnih podataka. Da li želite provesti skeniranje nadogradnje? ";
var picHDMIMode     = ["Auto","Grafički","Video"];

var glassRemind    	= ["Molimo uparite svoje 3D naočale s TV-om \n (Pritisnite i držite tipku za aktivaciju na 3D naočalama). ","Vaši 3D naočale su spojene na TV ",""];
var pvrRemind 		= ["Nemojte isključivati USB uređaja  ​ili isključitI napon"];
var pvrConName   	= ["PVR","Informacije o programu: ",["Note: If you record the HD channel, please to select  the  disk(of speed >5.0MB/sec), and to select the disk (of speed >3.0MB/sec) when you want to record the SD channel.","Snimljeni video je spremljen u folder \"PVR\"."],"Zaustaviti","Snimanje","sat","inuta","Trajanje","Savjeti","Podesite duljinu snimanja pomoću smjernih tipka"];
var pvrDisRemind 	= "Umetnite USB privjesak za snimanje.";
var pvrRemindWords  = ["Želite li izači? ",
							"Želite li zaustaviti snimanje i pregledati snimljene datoteke? ",
							"Disk je izvučen.",
							"Nema dovoljno slobodnog prostora.",
							"Nema videozapisa. Početak snimanja. ",
							"PVR se ne može pokrenuti u šifriranom kanalu.",
							"Funkcija nije dostupna",
							"Uspješno spremljeno.",
							"Želite li zaustaviti postupak snimanja i promijeniti ulazni izvor?",
							"TV će završiti trenutnu snimku. Želite li izači? ",
							"PVR snimanje treba TV signal, da funkcionira ispravno, provjerite signal. "];
var pvrChangeCh 	= ["Želite li promijeniti kanal?",
							"Želite li zaustaviti postupak snimanja i promijeniti kanal?"];
var pvrChangeToPIN8	= ["Želite li promijeniti izvor uređaju, koji je spojen na SCART ulaz? ",
				    		"Želite li da se zaustavi proces snimanja i mijenjati izvorni uređaj spojen na SCART ulaz? "];
var pvrChangeToCEC  = ["Želite li promijeniti izvorni uređaj spojen na HDMI ulaz? ",
				  			 "Želite li da se zaustavi proces snimanja i mijenjati izvorni uređaj spojen na HDMI ulaz?"];
var pvrGuideJump    = ["Želite li ući u EPG? ",
							"Želite li zaus. Post. Snim. i unijeti EPG?"];
var pvrMediaJump    = ["Želite li ući u medije? ",
							"Želite li zaustaviti postupak snimanja i unijeti USB?"];
var timeshiftExtra	= ["Želite li zaustaviti pomak vremena i promijeniti TV promijeniti kanal?",
						"Želite li zaustaviti interval i mijenjati izvorni uređaj spojen na SCART ulaz? ",
						"Želite li zaustaviti vremensku odgodu l i mijenjati izvorni uređaj spojen na HDMI ulaz? ",
						"Vrem. pomak se ne može pokrenuti u šifrir. kanalu.",
						"Želite li zaustaviti vremensku odgodu i unesti EPG? ",
						"Želite li zaustaviti pomak vremena i promijeniti TV na USB režim?",
						"Želite li zaustaviti pomak vremena I promijeniti ulazni izvor?",
						"Umetnite USB privjesak za snimanje.",
						"Veličina diska nije dovoljna.",
						"TV će završiti trenutnu vremensku odgodu. Želite li prestati pušiti? "];
var timeshiftStatus	= ["Brzo nazad","Zaustaviti","Pokretanje","Pauza","Brzo naprijed "];
var pvrPowerOffRemind= ["Spremnost za snimanje ","Stanje čekanja","TV momentalno snima, želite li nastaviti sa snimanjem, kad je TV prijemnik u pripravnom stanju? "];
var timeshiftInitTitle= "Postavljanje diska";
var timeshiftInitReminds= ["Ovaj čarobnjak se koristi za postavljanje USB diska za pomak vremena. Odaberite režim postavljanja.",
						 "Za bolje performanse preporučamo da formatirate USB disk. Time ćete izbrisati sve podatke.",
						 "Odaberite veličinu datoteke za pomak vremena.",
						 "Formatiranje",
						 "Nema dovoljno slobodnog prostora.",
						 "Izrada datoteke za pomak vremena",
						 "Provjera brzine",
						 "Brzina diska je nedovoljna (< %f MB/sek) za omogućavanje funkcije pomaka vremena",
						 "Disk je spreman za pomak vremena, ali preporučujemo da promijenite disk (brzine > %f MB/sek) za bolje performanse.",
						 "Disk je spreman za pomak vremena, "];
var timeshiftInitButtons= ["Formatiraj","Preskoči","Odustani","U redu","Završi","Izlaz"];
var timeshiftInitOther=["Brzina diska:","MB / s"];

var selectChoice	= "Jeste sigur.?";
var chAtvStore		= "Spremi kao XXXX ";
var chEpgFirstGenreUK= ["Film","Vijesti i činjenica","ZABAVA","Sport","Dječije","Edukacija","Stil života","Drama"];
var homePageTitleList = ["APLIKACIJE","TV","VIDEO ","Početna stranica "];
var homePageFavAndAllName  = ["Popularne aplikacije ","Sve aplikacije "];
var homePageBackUp = ["E-priručnik","GuideOn "];
var homePageRemind   = ["Pune značajke su dostupne samo kada je uspostavljena mrežna veza. ","Vaš TV nema kanala. Programi su dostupni na kraju pretraživanja kanala .. ","Nema programa","Pretražim kanale sada? "];
var homePageHistory = ["Povijest "];
var miracastTitle = ["Wifi prikaz ","TCL uređaj"];
var miracastRemind=["WiFi TV omogućuje razmjenu zaslona i zvuka vašeg uređaja poput smartphone ili tablet uređaja na vaš TV, bežično (tj. bez kabela). Ova opcija omogućuje prikaz na vašem TV prijemniku i istovremeno sadržaj koji prikazuje vaš smartphone ili tablet uređaj. Primjerice, možete lansirati videozapis na vašem smartphone uređaju i istovremeno ga prikazati na vašem TV prijemniku ili koristiti tablet kao kontroler za igru sa sadržajem prikazanim na velikom ekranu vašeg TV prijemnika.","WiFi TV poveznica na TV-u je spremna. Molimo, počnite dijeliti zaslon vašeg uređaja s TV-om.","Povezivanje. Pričekajte!","Povezivanje nije uspjelo!","Neuspješno povezivanje. Provjerite!"];
var homePageLittleWin = ["Settings","Medij","Popularni programi ","Smart TV","EPG"];

var hbbtvStopRemind  = ["Želite li zaustaviti reprodukciju?"];
var colorSystem = ["Auto","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Za više informacija, pritisnite ≡";
var emptyListInfo = "Nema priključenog uređaja na TV !";
var optionVideoListArray_1 = ["Postavljanje slike", "Postavke zvuka", "Režim reprodukcije", "Mod ekrana", "3D režim", 
							  "Sklopka L-D", "Dubina polja", "Prijevod", "zvučna traka ", "Naslov", "Poglavlje", "Informacije"];
var optionVideoListArray_2 = ["Postavljanje slike", "Postavke zvuka", "Režim reprodukcije", "Mod ekrana", 
							  "Prijevod", "zvučna traka ", "Naslov", "Poglavlje", "Informacije"];
var bottomTipsText = ["Reproduk./pauza", "Brzo nazad", "Brzo naprijed ", "Popis za reproduciranje", "Settings"];
var picturePresetArray = ["Standard", "Dynamic", "Prirodni ", "Film", "Osobni"];
var videoPlayModeArray = ["Ponovi sve", "Ponovi jedan", "Normalno"];
var screenModeHDArray = ["16:9", "4:3", "Синерама", "Широкоъгълно увеличение", "Увеличение 2", "Широкоъгълно увеличение 2", "Увеличение с разпъване на образа", "Automatski"];
var screenModeSDArray = ["16:9", "4:3", "Синерама", "Увеличение 14:9 ", "Увеличение16:9", "Увеличение над16:9", "Automatski"];
var Mode3DArray = ["Isklj.", "2D na 3D", "Jedno pored drugog", "Gornje i donji dio", "Preplitanje linije"];
var videoOptionListArray = ["Isklj.", "Zapis", "Prijevod", "Naslov", "Poglavlje"];
var subMenuTitleText = "Prijevod";
var langMenuTitleText = "Zvučni jezik";
var titleMenuTitleText = "Naslov";
var mode3DMenuTitleText = "3D režim";
var langInfoText = "Zapis";
var STOP_RESUME_INFO = "Zaust.-Nastavi";
var playListName = "ime ";
var eb_tips = "Savjeti";
var ok_button = "U redu";
var eb_info = ["Pogreška dekodiranja zvuka. ", "Pogreška dekodiranja videa. ", "Audio format nije podržan. ", 
			   "Video format nije podržan.", "Ova datoteka ne može se otvoriti.", "Greška prilikom reprodukcije, pokušajte ponovno.",
			   "Nepodržan oblik datoteke.", "Ups! Reproduktor je prestao s radom.",
			   "Nepostojeći ili neispravan put do datoteke.\n Ponovno umetnite uređaj za pohranu i pokušajte ponovno.",
			   "Nastaviti s reprodukcijom na mjestu \n prekida prethodno reproduciranog sadržaja?"];
var picturePlayErrorTips = ["Neuspjelo učitavanje!!!","Slika je prevelika!!!","Pogreška mreže!!!","Pogreška niti!!!","Pogreška parametra!!!","Nepoznata pogreška!!!"];
var frameTitleText = "novi uređaj ";
var eb_quit_info = "Jeste li sigurni da želite izaći? ";
var eb_yes = "DA";
var eb_no = "NE";
var offinfo = "Isklj.";
var naInfo = "nijedan ";
var consoleInfoArray = ["Brzo nazad", "Brzo naprijed ", "Reproduk./pauza", "Popis za reproduciranje"];
var cantOperateText = ["Funkcija nije podržana. "];
var chapterChangeInfo = "Samo poglavlja 1 do XXXX su dostupne. ";
var metaDataArray = ["Adresa / uređivanje metapodataka: ", "Metapodatki poglavlja: ", "Metapodatki zvuka: ", "Metapodatki podnaslova: "];
var metaTitleInfo = "Naslov";
var metaChapterInfo = "Poglavlje";
var videoLoadingInfo = "Analiziranje ... ";
var listLoadingInfo = "Otvaram ... ";
var pgInfo = "Pravna procjena: ";
var fileNameText = "ime ";
var fileDateText = "Datum";
var fileSizeText = "Veličina";
var fileDurationText = "Trajanje";
var fileDirectorText = "Redatelj";
var fileCopyrightText = "Autorsko pravo";
var fileArtistText = "Izvođač";
var fileAlbumText = "Album";
var fileGenreText = "Žanr";
var fileYearText = "Godina";
var fileGenreText = "Žanr";
var mainListArray = ["Sve", "Slika", "Video", "Glazba"];
var sortArray = ["ime ", "Datum"];
var parserArray = ["Normalno", "Rekurzivan"];
var emptyTipsInfo = "Ups! Nije pronađena niti jedna podržana datoteka.";
var emptyFolderInfo = "Ups! Nije pronađena niti jedna podržana datoteka.";
var sortName = "Sortiranje po ";
var parserName = "Analizator";
var divx_str1 = "Registracija DivX(R)";
var divx_str2 = "Deregistracija za DivX(R)";
var infor_str = "Informacije";
var quickMenuEmptyText = "Opcije nisu dostupne. ";

var musicSoundPresetArray = ["Standard", "Film", "Glazba", "Jasan glas", "Osobni"];
var musicInformationArray = ["ime ", "Izvođač", "Album", "Žanr:", "Godina:", "Trajanje:"];
var playListName = "ime ";
var playTipsInfo = ["Trenutno se reproducira prva datoteka.", "Trenutno se reproducira zadnja datoteka."]
var musicNameInfo = "Name";
var musicArtistInfo = "Izvođač";
var musicAlbumInfo = "Informacije";
var optionSoundPresetInfo = "Postavke zvuka";
var optionBGMInfo = "Reproduciranje u pozadini ";
var optionAudioOnlyInfo = "Samo zvuk";
var optionInfoText = "Informacije";

var remotePhoneConnecte = "XXXX je spojen s TV-jem! ";
var tvRemoteTitle		= "Dalj. upr. TV-a";
var tvRemoteDeveloper	= "Ovu aplikaciju je razvila tvrtka TCL";
var tvRemoteDeviceTitle	= "Naziv uređaja:";
var remoteOption		= ["Dijeljenje medija","Daljinsko upravljanje","Pomoć","Više o","Aplikacija Smart Connect"];
var remotebottom		= "Molimo preuzmite \"TV daljinski upravljač\" na vaš pametni telefon";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Dijelite fotografije, videa i glazbe na TV-u preko telefonas. ",
							"Koraci: \n 1. Kliknite na \"TV daljinski\" upravljač 'na telefonu. Povežite svoj ​​telefon s televizorom putem iste WiFi mreže; \n 2. Kliknite na \"Dijeljenje medija\" za pregledavanje multimedijskim datotekama, \n 3. Pošaljite medij za reprodukciju na TV-u (s jednim od sljedećih opcija) ",
							"      a) Povucite i ispustite mapu/datoteku na ikonu TV na gornjem dijelu zaslona;\n      b) Zamahnite telefonom prema TV uređaju za pokretanje prve datoteke;\n      c) Reproducirajte medij na telefonu i kliknite TV ikonu za dijeljenje;",
							" 4. Tijekom reprodukcije na TV uređaju, protresite telefon za reprodukciju prethodne ili sljedeće datoteke."];
var controlReminds		= ["Koristite telefon kao daljinski upravljač za korištenje TV uređaja.",
							" ",
							"Koraci: \n 1. Kliknite na \"TV daljinski upravljač 'na telefonu. Povežite svoj ​​telefon s televizorom putem iste WiFi mreže; \n 2. Kliknite na \"daljinski upravljač\" za kontrolu TV-a. "];
var helpDeviceWords		= "Multi-screens interaction";
var helpBottom			= "U doba tehnologije u oblaku, pametni uređaji poput telefona i TV-a međusobno su povezani. Podijelite medijske sadržaje na multi-zaslonima sa svojom obitelji i upravljajte TV-preko telefona! ";
var helpReminds			= ["Pripreme \ n 1. Preuzmite i instalirajte \"TV daljinac\" iz Google Play ili Apple Store. \n 2. Povežite svoj telefon s televizorom putem iste WiFi mreže. ",
							" ",
							"Preporučeni telefon\n   1. CPU: više od 800 MHz\n   2. Pohrana: najmanje 80 MB slobodnog prostora",
							" ",
							"Izjava o odricanju od odgovornosti \ n Ako značajka daljinskog upravljača nije dostupna na Vašem telefonu, obratite se proizvođaču telefona."];
var helpButtons			= ["Prethodno","Sljedeće"];
var aboutReminds		= ["Dalj. upr. TV-a","Ovu aplikaciju je razvila tvrtka TCL"];
var aboutExit			= "Izlaz";
var smartReminds		= ["Brza i pametna veza između TV-a i telefona. ",
							" ",
							"Koraci \n 1. Spojite TV i pametni telefon u istoj lokalnoj mreži. Kliknite na \"TV daljinski upravljač\" na vašem pametnom telefonu\n 2. Kliknite na \"Smart Connect\" skeniranje QR kodova.\n 3. Kada je TV u načinu prijenosa, pritisnite gumb INFO na daljinskom upravljaču za 4 sekunde dok ne vidite cijelo zaslonski QR kod. ",];
var smartQRReminds		= ["Molimo kliknite na Connect Smart na TV daljinskom upravljaču na telefonu i skenirajte QR kod za brzo povezivanje televizora i telefona. ",
							"QR kodovi sadrže podatke o lokalnoj mreži računa. Molimo spremite ga. "];
							

var consoleTipArray = ["Prethodno","Sljedeće","konzola ","Popis za reproduciranje"];							
var optionInfoArray = ["Postavljanje slike","Režim reprodukcije","Trajanje","Efekt","Informacije"];

var playModeArray = ["Normalno","Promiješati","Ponoviti"];
var durationArray = ["Kratke (5s) ", "Središnja (10s) ", "Duge (15s) "];
var effectArray = ["Nema", "Zaokrenuti", "Obrisati desno", "Obrisati ljevo", "Obrisati gore", "Obrisati dolje", "Okvir iznutra", "Okvir izvana", "Nasumično"];
var infoArray = ["Ime:","Veličina:","Datum:","Položaj"];

var picturePresetBarTitleInfo = "Postavljanje slike";
var picturePresetBarArray = ["Standard","Dynamic","Film","Film","Osobni"];
var upTipsInfo = "Premještanje slike"; //add yums 2014-10-10
var consoleTipsArray = ["konzola ","Prethodno","Sljedeće","Popis za reproduciranje","Settings"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Ponovo pritisnite DESNO za reprodukciju slijedeče slike","Ponovo pritisnite LIJEVO za reprodukciju prethodne slike","Ponovno pritisnite DOLJE za prikaz popisa reproduciranje"]; //add yums 2014-10-10

var optionPvrListArray = ["Postavljanje slike","Postavke zvuka", "Mod ekrana", "3D režim", "Prijevod", "zvučna traka ", "Informacije"];							
	
var titleSpanFirstArray = ["Kontrola i veza","Osnovne funkcije ","APLIKACIJE","TV","Settings","FAQ"];
var titleSpanSecondArray = [["Daljinsko upravljanje","tipke ploče","Jednostavno kretanje","TV priključak ","TV priključak ","TV priključak ","Bežični"],["uređaj za lansiranje ","Statusna traka ","Izvor"],["Reprodukcija aplikacija","Medij","Dalj. upr. TV-a"],["Podesite kanal i glasnoću ","Popis kanala","EPG","Inst. Kanala","Omiljeni kanali "],["Podešavanje slike ","Podešavanje zvuka ","Podešavanje kanala ","Ažuriranje softvera","Jezik","Roditeljska zaštita "],["Najčešće postavljana pitanja","Najčešće postavljana pitanja","Rješavanje problema ","Rješavanje problema ","Odredbe i uvjeti"]];
var contentSpan1_1Array =[["NAPAJANJE:","IZVOR:","POSTAVKE:","OPCIJA:","NATRAG:","INFORMACIJE:","POČETNA:","IZLAZ:","POPIS:"],
    ["Uključuje napajanje ili način mirovanja",
        "Odaberite ulazni izvor",
        "Za prikaz izbornika Postavke",
        "Za prikaz izbornika Opcija",
        "Vratite se na prethodni izbornik ili izađite iz APP-a",
        "Prikazuje informacije o programu",
        "Za pristup početnoj stranici SmartTV",
        "Vratite se na prethodni izbornik ili izađite iz APP-a",
        "Prikazuje popis kanala"]];
var contentSpan1_2Array = ["Prethodni kanal","Sljedeći kanal","Povećanje glasnoće","Smanjenje glasnoće ","Ovo je početna stranica ","Potvrda opcije ","Stanje čekanja / Uključeno napajanje"];
var contentSpan1_3Array = ["U redu / vodič","Kanal gore","Kanal dolje","Smanjivanje glasnoće","Povećavanje glasnoće","Dostupno kao strelice u nekim značajkama."];
var contentSpan1_4Array = ["LAN","HDMI (MHL)","HDMI","HDMI (ARC)","AV OUT adapter","LAN (lokalna mreža)","pametni telefon","Osobno računalo / tuner / DVD","Audio pojačalo","Audio pojačalo / Monitor","Vaš TV možda neće imati sve potrebne poslovnice"];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Slušalice","AV IN adapter","SPDIF","CMP AUDIO Adapter","CMP I (YPbPr) adapter","USB uređaji","USB uređaji","Slušalice","SPC / konzola za igre / prijemnik / DVD","Audio pojačalo","SPC / konzola za igre / prijemnik / DVD","Vaš TV možda neće imati sve potrebne poslovnice"];
var contentSpan1_6Array = ["Zajedn. sučelje","SD","VGA","SCART","Mini SCART","Ulaz za antenu","PCMCIA kartica","SD kartica","PC","Prijemnik / DVD","Antena / Kabel / Satelit","Vaš TV možda neće imati sve potrebne poslovnice"];
var contentSpan1_7Array = ["Tableta","PC","Router","Telefon","TV"];
var contentSpan1_8Array = ["Promjena funkcije/Uključivanje","Dugi pritisak za ulaz u tajmer spavanja","Dolje","Gore","Glasnoća/Kanal/Izvor"];

var contentSpan2Array = [["Pritisnite gumbe sa strelicama kako biste pregledali početnu stranicu.","Zatim pritisnite OK za gledanje jednog od opremljenog programa ili za ulazak u program."],["Pokaži datuma, mrežu i naprave, itd u gornjem desnom kutu ekrana."],["Odabir izvora ulaznog signala naprava, spojenih na TV putem različitih priključka, kao što su TV, AV, HDMI, itd"]];

var contentSpan3Array = ["Uživajte i pregledavajte svoje omiljene aplikacije putem stranice Smart TV","Pregledavajte fotografije, gledajte videoisječke i slušajte glazbu s uređaja za pohranu USB.","Spojite TV i vaš pametni telefon ili tablet računala na istoj mreži ","Kliknite nZaslon ili Udaljeni TV na pametnom telefonu ili tabletu","Dijelite fotografije, videoisječke i glazbu na višedijelnim zaslonima sa svojom obitelji i upravljajte televizorom pomoću pametnog telefona"];

var contentSpan4Array = [["Pritisnite GORE / DOLJE za prebacivanje kanala ","Pritisnite LIJEVO / DESNO za podešavanje glasnoće "],["Pritisnite gumb LIST na daljinsko upravljaču kako bi se prikazao popis kanala u retku","Pritisnite GORE / DOLJE za odabir kanala "],["EPG je vodič na zaslonu koji prikazuje televizijske programe. Kroz programe se možete kretati, odabiriti, pogledati i snimati. "],["Pronalaženje i instaliranje kanala "],["Dodavanje ili uređivanje svojih omiljenih kanala na popisu kanala "]];

var contentSpan5Array = ["Uživajte u svojim omiljenim programima putem video aplikacija "];

var contentSpan6Array = [["Pritisnite Opcija za prikaz postavljanja opcija sustava ","Ulaz na postavke slike za podešavanje vrijednosti "],["Pritisnite Opcija za prikaz postavljanja opcija sustava ","Unesite postavke zvuka za konfiguriranje opcija "],["Pritisnite Opcija za prikaz postavljanja opcija sustava ","Ulaz na postavke kanala za postavljanje opcije "],["Ažuriranje TV kada je nova verzija softvera dostupna"],["Možete odabrati željeni jezik izbornika "],["Omogućuje roditeljima zaključavanje kanala ili programa koji nisu prikladni za djecu "]];

var contentSpan7_1Array = [["Nema slike, nema zvuka ","Provjerite da li osigurač ili prekidač radi. ","Uključite drugi električni uređaj u strujnu utičnicu kako bi bili sigurni da radi, ili je uključen. ","Utikač u lošem kontaktu s utičnicom","Provjerite izvor signala. "],["Normalna slika, nema zvuka ","Pritisnite tipku glasnoće prema gore za povećanje glasnoće. ","Zvučna postavka je netočna. ","Pogreška signala emitiranja. "],["Normalni zvuk, bez slike ","Podesite svjetlinu i kontrast ","Pogreška signala emitiranja. ","Provjerite je li omogučen jedino audio naćin."]];
var contentSpan7_2Array = [["Radiofrekvencijske smetnje ","Ta smetnja stvara pokretne valove ili dijagonalne linije, u nekim slučajevima, gubitak kontrasta na slici. Pronađite i uklonite izvor radio smetnje. "],["Bez boja","Podesite postavke boje. ","Pokušajte drugi kanal. Crno-bijeli program može biti dostupan. "],["Daljinski upravljač ne radi ","Zamijenite baterije. ","Baterije nisu instalirani pravilno. TV ne može biti priključen. "]];
var contentSpan7_3Array = [["Sadržaja USB uređaja nije prikazan","Provjerite je li USB uređaj za pohranu kompatibilan s TV-om. ","Provjerite da su audio i video datoteke podržane na TV-u. "],["Reproduciranje bez zvuka ","Audio  format nije podržan od strane TV reproduktora. "],["Datoteke neće igrati glatko ","Performansa prijenosa USB uređaja za pohranu može ograničavati brzinu prijenosa podataka na TV-u. "]];
var contentSpan7_4Array = [["Na što treba paziti kada se ažurira softver","Bez prekida napajanja tijekom ažuriranja softvera. ","Izbjegavajte bilo kakve operacije s daljinskim upravljačem, kada ažurirate softver. ","Budite strpljivi, jer može proces obnove softvera potrajati  malo duže. "],["Nakon ažuriranja softvera, neće biti nikakvih značajnih promjena na TV sučelju.","Pod određenim uvjetima, ažuriranje softvera ne znači samo dodavanjem novih značajki, nego i poboljšanje funkcioniranja TV-a bez značajnih promjena u sučelju. Također, TV sučelje ponekad ostaje nepromijenjeno. "]];
var termsTitle = "Odredbe i uvjeti";
var termsConditions = ["(Pravna napomena) TCL-a - proizvođač ovog televizijskog kompleta.","Zbog raznih mogućnosti uređaja sa SmartTV – uslugama, ali i ograničenja u dostupnosti sadržaja, neke funkcije, aplikacije i usluge možda neće biti dostupne na svim uređajima i u svim regijama. Za značajke SmartTV-a možda će biti potrebni i dodatni vanjski uređaji ili odvojena uplata članarina. Specifične informacije o uređaju i dostupnosti sadržaja potražite na našem web-mjestu. Usluge i dostupnost sadržaja u SmartTV-u podložni su povremenim promjenama bez prethodne najave. \n   Sav sadržaj i usluge dostupne putem ovog uređaja pripadaju drugim proizvođačima i zaštićeni su zakonima o autorskim pravima, patentnima, trgovačkim znakovima i/ili intelektualnom vlasništvu. Takav sadržaj i usluge pružaju se samo za vašu osobnu, nekomercijalnu upotrebu. Sadržaj i usluge ne smijete koristiti na način koji nije odobren od njegova vlasnika ili pružatelja usluge. Bez ograničenja u gore navedenom, osim ako je tako izričito odobreno od važećeg vlasnika sadržaja ili pružatelja usluge, sav sadržaj i usluge prikazane pomoću ovog uređaja ne smijete mijenjati, kopirati, ponovno izdavati, slati, objavljivati, prenositi, prevoditi, prodavati, izrađivati prerađevine, iskorištava ili distribuirati na bilo koji način ni putem bilo kojeg medija. \n   OVIME IZRIČITO POTVRĐUJETE I SLAŽETE SE DA ĆETE UREĐAJ KORISTITI NA VLASTITI RIZIK I DA SAMI SNOSITE ODGOVORNOST ZA EVENTUALNO NEZADOVOLJSTVO KVALITETOM, PERFORMANSAMA ILI PRECIZNOŠĆU. OVAJ SADRŽAJ I SAV SADRŽAJ TE USLUGE DRUGIH PROIZVOĐAČA PRUŽA SE \"KAKAV JE\" BEZ JAMSTVA BILO KAKVE VRSTE, IZRIČITOG ILI PODRAZUMIJEVANOG. TCL SE IZRIČITO ODRIČE SVIH JAMSTAVA I UVJETA U ODNOSU NA UREĐAJ I NA SVE VRSTE SADRŽAJA I USLUGA, BILO IZRIČITO ILI PODRAZUMIJEVANO, ŠTO SE BEZ OGRANIČENJA ODNOSI NA JAMSTVA ZA MOGUĆNOST PRODAJE, ZADOVOLJAVAJUĆU RAZINU KVALITETE, PRIKLADNOST ZA ODREĐENU NAMJENU, PRECIZNOST, TIHI RAD I POŠTIVANJE PRAVA DRUGIH PROIZVOĐAČA. TCL NE JAMČI ZA PRECIZNOST, VALJANOST, PRAVOVREMENOST, ZAKONITOST ILI CJELOVITOST BILO KOJE VRSTE SADRŽAJA ILI USLUGA DOSTUPNIH PUTEM OVOG UREĐAJA I NE JAMČI DA ĆE UREĐAJ, NJEGOV SADRŽAJ I USLUGE ZADOVOLJITI VAŠE POTREBE ILI DA ĆE NJEGOV RAD I USLUGE BITI NEOMETAN I BEZ GREŠAKA. NI POD KOJIM OKOLNOSTIMA, UKLJUČUJUĆI NEMAR, TCL NEĆE ODGOVARATI UGOVORNO ILI KRIVNJOM ZA BILO KAKVA IZRAVNA, NEIZRAVNA, POSEBNA ILI POSLJEDIČNA OŠTEĆENJA, ODVJETNIČKE TROŠKOVE I OŠTEĆENJA U VEZI SA SADRŽANIM PODACIMA, KOJA NASTANU KAO POSLJEDICA KORIŠTENJA UREĐAJA, BILO KOJEG SADRŽAJA ILI USLUGA KOJIMA STE PRISTUPALI VI ILI TREĆA STRANA, ČAK I AKO STE UPOZORENI NA MOGUĆNOST TAKVIH OŠTEĆENJA. \n   Usluge drugih proizvođača mogu u bilo kojem trenutku i bez najave promijeniti, obustaviti, ukloniti, okončati, prekinuti ili se može onemogućiti pristup i TCL (proizvođač TV prijemnika marke Thomson) ne jamči za dostupnost sadržaja i usluga u bilo kojem vremenskom razdoblju. Sadržaj i usluge prenose drugi proizvođači putem mreža i naprava za prijenos nad kojima TCL nema nadzor. Bez ograničenja u općenitosti ovog odricanja od odgovornosti, TCL se izričito odriče svake odgovornosti i obveza zbog promjena, prekida, onemogućenja, uklanjanja ili obustave određenih sadržaja ili usluga koje su dostupne putem ovog uređaja. TCL bilo kada i bez najave i obveze može odrediti granice u korištenju ili u pristupanju određenim uslugama ili sadržajima. TCL ne odgovara niti se obvezuje u smislu pružanja korisničke podrške za sadržaje i usluge. Sva pitanja i zahtjeve za popravkom koji se tiču sadržaja ili usluga uputite izravno odgovarajućem dobavljaču usluga i sadržaja."];

var noChannelListRemind        = ["Kanali nisu pronađeni. Popis kanala će biti dostupan krajem pretraživanje kanala. ","Skeniranje kanala"];
var closeSubtitleRemind   = "Ova značajka će biti dostupna kada su titlovi isključeni. Želite li jih konfigurirati sada? ";

var estickerTitles = ["Vrlo realne slike ","Boja koja oživljava ","Veliko, životno kretanje","Dinamična kvaliteta slike","SR UHD adaptacija ","Doživite 3D svijet ","Brže performanse ","Budući 4k sadržaj ","Uživajte u svijetu na internetu","Pristup dodatnim sadržajima","Ugrađen digitalni prijamnik ","Povežite sve uređaje ","Različiti izvori 4K ","sadržaj USB ","Ultra-brz WiFi ","Mobilni sadržaj na TV-u ","Sadržaj mobilnog uređaja ","lokalni sadržaj","Odobreno s strani DivX","Besprijekorna slika ","Spremnost za kanale","TDT Premium "];

var estickerDescriptions = ["Nevjerojatno iskustvo gledanja zahvaljujući slike s četiri puta više detalja punog HD ekrana na UHD ","Širok raspon boja omogućuje emocije u svakoj sceni s živim bojama crvene i smaragdno zelene ","4K okvirna interpolacija i svijetlost u pozadini, pazeći da se eliminira zamućenje u pokretu ","Vedrina izvorne slike je poboljšana za istinski dinamične izraze s izvrsnom kontrastom","Uživajte jasne i precizne TV emisije i Blu-ray diskove, zahvaljujući Super Resolution tehnologiji","Iskusite 3D TV spremnost i pogledajte razne 3D sadržaje ","Više ugodno iskustvo zabave sa procesorom sa četiri jedra za glatke interakcije, bolje performanse ","HEVC (H.265) kodek podrška za nadolazeće standardne 4K video distribucije ","Bogatstvo internetnih aplikacija, video na zahtjev, gledajte povijesne sadržaje i pregledavajte internet","Vidite više komplementarnih usluga i sadržaja iz vaše omiljene emisije ","Pristupajte TV kanalima u visokoj razlučivosti bez dodatnog prijamnika ","Jednostavno povezivanje mnogih digitalnih resursa, koji su dostupni kod kuće ","TV je spreman za buduće reproduciranje 4K 50 / 60Hz putem HDMI 2.0 s HDCP 2.2 ","Video i foto sadržaji izravno s USB flash pogona, tvrdog diska ili kamere na velikom ekranu u razlučivosti 4K ","Najnovija generacija 2x2 MIMO i AC standard osigurava pristup internetu neusporedive brzine ","Uživajte u fotografijama, videu, aplikacija s mobilnih uređaja na velikom zaslonu, zahvaljujući tehnologiji zrcaljenja zaslona ","Fotografije, video snimke, aplikacije s vašeg pametnog telefona ili tableta mogu se prikazati na velikom zaslonu ","Prikaz lokalnog sadržaja na velikom ekranu, kao što su fotografije, video snimke iz uređaja spojenih na lokalnu mrežu ","Reproducirajte iznajmljenih ili vlastitih filmova, koji su zaštićeni sa strane DivX ","Ultra uzak i vrlo tanak dizajn ","Ispitan i odobren od strane Canal + ","Ispitan i odobren od strane TDT Premium"];							

var eManualTextArray = ["E-priručnik","Svi grafički prikazi navedeni u priručniku služe samo za ilustraciju."];
var frontPanelRemind = "Prednja ploča je zaklj";
var eRPRemind		 = "Modus trgovine ne zadovoljava ERP zahtjev. Jeste sigur?";	
var noRelatedChannel = "Nema srodnih kanala";
var option0624Name          = ["BOP","BFS","Iz događaja u događaj","GetUserID","BGM","Reset all","Ponovo postavi izbor","NRM","DVB - T2 i odabir zemlje","HbbTV način rada"];
var DVBT2AndChoice = ["Uklj.","Po zemlji","Isklj."];
var hbbtvServiceRemind = "HbbTV usluga dolazi uskoro.";
var insertWord = "Umetni";		
var viewDetail = "Prikaži pojedinosti";							

var remindOAD  = "Ažuriranje softvera. Novo preporučeno ažuriranje softvera možda postoji na drugom kanalu. Ako prihvatite preuzimanje, možda će se automatski prebaciti na taj kanal. Želite li to učiniti odmah?";

var LEDStatus = ["Treperenje", "Normalno","Isklj."];
var netFlixRemind = "Ova funkcija će prekinuti pristup uslugama Netflix dok se ponovo ne prijavite.";
var ESNExplanation = "Elektronički serijski broj";
var resetShopRemind = "U tijeku je resetiranje sustava, ne isključujte TV prijemnik";
var initialSelectOption = "Molimo, odaberite jednu opciju:";
var databaseRemind   = "Sustav je identificirao bazu podataka kao oštećenu iz nepoznatog razloga i obnovit će je automatski, pritisnite U redu za nastavak";
var Deactivation = "Deaktivacija";
var oadFutureRemind = "Ažuriranje softvera.\n Novi preporučeni softver bit će dostupan na %s. Ažuriranje bi moglo potrajati neko vrijeme i ekran će možda za to vrijeme biti zatamnjen. Ne isključujte prijemnik za vrijeme ažuriranja. Ako prihvatite ovo ažuriranje, ostavite prijemnik uključen u planirano vrijeme. Želite li dobiti ovo ažuriranje?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Izlaz zvuka";
var bt_soundOutPutTV = "Zvučnici TV";
var bt_soundOutPutBT = "Uređaj Bluetooth";
var bt_soundOutPutBT_TV = "Bluetooth i TV";
var bt_refreshBarName = "Uređaji";
var bt_settingTips_On = "Uključite fun.Bluetooth i skenirajte uređaje.";
var bt_settingTips_Finding = "Pronalaženje dost.uređaja…";
var bt_settingTips_NoDevice = "Nema dost. uređaja.";
var bt_deviceList_State_NoConnect = "Nije spojeno";
var bt_deviceList_State_Connecting = "Povezivanje…";
var bt_deviceList_State_Connected = "Povezano";
var bt_deviceList_State_Paired = "Uparen";
var bt_deviceList_Conncect_Failed_Tips1 = "Neuspješna veza.";
var bt_deviceList_Conncect_Failed_Tips2 = "Potvrdite je li fun. Bluetooth XXX uključena";
var bt_deviceList_Conncect_Success = "Povezano s uređajem Bluetooth.";
var bt_deviceList_Disconncect_Success = "Odspojeno od uređaja Bluetooth.";
var bt_deviceList_Disconnect = "Potvrdite želite li odspojiti od XXX?";
var bt_tipsTitle = "Tip";
var bt_bluetooth_Pairing_Title = "Upar. Bluetootha";
var bt_bluetooth_Input_Pin = "Unesite PIN:";
var bt_bluetooth_Output_Pin_Tip = "Unes. PIN XXXX tipkovnicom.";
var bt_bluetooth_Pin_Wrong_Tip = "Pogr. PIN";
var bt_bluetooth_Remove_Pair_Title = "Upit";
var bt_bluetooth_Remove_Pair_Ask = "Zaboravi uređaj?";							
							
var audioDescriptionName = ["Opis zvuka","Zvučnik","Glasnoća zvučnika","Slušalica","Glasnoća slušalice","Glasnoća AD","Bluetooth uređaj","Glasnoća Bluetooth uređaja","Pojačalo","Zvučnik"];
var audioDescriptionOptions = ["Isklj.","Normalno","Opis zvuka"];
var volumeOffRemind = 'Podesite XXX “Uključeno” u izborniku Postavke.';	
var switchSourceRemind   = " umetnuto. Želite li ga sada uključiti?";
var footballModeName = "Sportski način rada";
var resetStadium = "Stadium";							
							
var atvSearchMenu = "ATV manual search";
var dtvSearchMenu = "DTV manual search";
var settingNoticeSourceName ="Automatski izvor";

var smartTVOptions		= ["Smart TV portal","HbbTV","Podijeli i gledaj","Wifi prikaz","Uvjeti i odredbe",
    "Umreženo stanje čekanja","Resetirajte smart TV","Cookie policy","Pravila o privatnosti","Brisanje podataka"];
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
var supportOptions		= ["Daljinska dijagnoza","Kontaktirajte nas"];
var tvDoctor=["Daljinska dijagnoza 2.0",
"Aplikacija radi samo kako bi vaš Smart TV pokrenuto dijagnostičke provjere i poboljšao iskustvo proizvoda. Aplikacija će prikupiti informacije o modelu i radnim podacima TV prijemnika, prenijeti ih na poslužitelj i koristiti za rješavanje poteškoća s TV prijamnikom. Neće se pristupiti vašim osobnim informacijama. Pobrinite se da je vaš TV pravilno povezan na internet.",
"Lokalna dijagnoza",
"Nakon početka dijagnoze, pratite smjer od našeg inženjera za podršku.",
"Daljinska dijagnoza",
"Prije uporabe, uvjerite se da je naš inženjer za podršku na mreži.",
"Serijski broj:",
"&nbsp;&nbsp;&nbsp;&nbsp;Upute za identifikaciju:",
"Povezivanje…",
"U tijeku je dijagnoza. \nOdržavajte dobru povezanost mreže.  ",
"Pristup internetu nije moguć, \nmolimo vas provjerite mrežnu vezu.",
"Izlaz"
];
var contactUsOption = ["Kontaktirajte nas",
    "Molimo, obratite se tvrtki nas ako imate problema s upravljanjem ovog uređaja.",
    "Obratite se tvrtki nas",
    "Web-mjesto: posjetite",
    "Broj pozivnog centra:","Informacije o proizvodu","Naziv tipa:",
    "Verzija softvera:","","Upute za identifikaciju:","Projekt ID:",
    "Vrsta klijenta:","Bežična MAC adresa:","Žična MAC adresa:","Netflix ESN:","Potražite informaciju na svom mobilnom telefonu.",
    " a zatim odaberite svoju zemlju."];
							


//本地launcher的翻译，与服务器无关，只用于本地launcher
var homePageWords = ["Povijest", "Pretraži"];//home页的翻译
var titlePageWords = ["Poč.str.", "Videozapisi","TV","Aplikacije"];//index的标题翻译
var videosPageWords = ["Film", "Sport","Glazba","Popularno","Igra","Edukacija","Vijesti"];//videos页的内容翻译

//同时应用于本地和服务器
var statusPageWords = ["USB","Postavke","WiFi","Žičano"];//状态栏的翻译

//二级页面的翻译
var searchPageWords = ["Pretraži", "Popularna pretraživanja:","Emisije, filmovi, ljudi ..."];
var resultSearchPageWords = ["Rezultati o "," ","Molimo vas pokušajte s drugim ključnim riječima.","Žao nam je, nema pronađenih videozapisa o  "," "];
var historyPageWords = ["Povijest ", 'Pritisnite','da izbrišete povijest',"Izbriši jednu","Izbriši sve","Jučer","Danas"," Još uvijek niste pogledali niti jedan videozapis.","Uspješno brisanje povijesti gledanja!"];
var channelPageWords = ["Žao nam je, nema pronađenog videozapisa."];


//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9",
                       	   "Zoom-","0","Zoom+",
                       	   "Izlaz","0","",
                       	   "Lista","0","Tekst",
                       	   "Vodič","Potvrdi","Izlaz",
                       	   "Izbornik","Prijevod","Informacije",
                       	   "Stop",
                       	   "Informacije","Izbornik","Izlaz",
                       	   "Izlaz"
                       	   ];

//added for LA sports mode
var sportsModeInitReminds= ["Ovaj čarobnjak koristi se za postavljanje USB upravljačkog programa za sportski način rada. Molimo vas odaberite način postavljanja.",
						 "Molimo vas odaberite veličinu datoteke za sportski način rada.",
						 "Izrada datoteke za sportski način rada",
						 "USB upravljački program je prespor (< %f MB/sek.) za značajku sportski način rada!",
						 "USB upravljački program je spreman za sportski način rada. Ipak, za bolju izvedbu preporučujemo vam da ga promijenite (na brzinu > %f MB/sek.).",
						 "USB upravljački program je spreman za sportski način rada."];

var sportsModeExtra	= ["Želite li zaustaviti sportski način rada i promijeniti kanal?",
						"Želite li zaustaviti sportski način rada i promijeniti izvor na uređaj povezan na SCART ulaz?",
						"Želite li zaustaviti sportski način rada i promijeniti izvor na uređaj povezan na HDMI ulaz?",
						"Sportski način rada nije podržan na kodiranom kanalu.",
						"Želite li zaustaviti sportski način rada i ući u EPG?",
						"Želite li zaustaviti sportski način rada i ući u multimedijski sadržaj?",
						"Želite li zaustaviti sportski način rada i promijeniti ulazni izvor?",
						"TV će završiti trenutačni sportski način rada. Želite li izaći?"];
var remoteControlNote = "- Priloženi daljinski upravljač može se razlikovati ovisno o modelu proizvoda";


var textArray = ["Volume","Channel","Source","Switch/Power","Guide","seconds to Power OFF"];
var guideArray = ["VOL-","VOL+","CH-","CH+","Pre","Next"];
var favChannelListRemind = ["Nema omiljenih kanala. Molimo idite na druge popise i „zelenom tipkom” dodajte omiljene kanale."];

var proxySetting = ["Postavke proxy poslužitelja","Priključnica"];
var powerOffShop = ["Preporučamo uporabu načina rada za Trgovinu, nastaviti?"];
var tcastTextPageWords = ["Mnoštvo videa, bogat izbor aplikacija","Daljinski upravljač za TV, na dodir prsta","Odličan sadržaj, podijeli na veliki ekran"];
var tcastOtherWords = ["Skenirajte QR kod i preuzmite T-Cast","Mreža povezana na TV","Naziv TV-a","T-Cast"];
var hbbtvWords = ["Hbbtv postavke","HbbTV","Kolačići","Kolačići treće strane","ID uređaja","praćenje"];
var hbbtvTrackingWords = ["YES","NO","Svejedno mi je"];
var eStickerTipWords = ["Storage is under 400M,would you like to delete the videos in Demo mode bo obtain more space?"];
var delEstickerVideoRemid = ["The video has been deleted successfully"];
var selectSatRemind = "Moguće je odabrati najviše 20 satelita!";
var cookiePolicyTitle = "Cookie Policy – Online Smart TV Services";
var cookiePolicyConditions = ["Company respects your privacy when using Smart TVs manufactured and Services provided by Company. Cookies are used by many websites and other Internet services and your Smart TV will accept, store and transmit cookies to ensure that these websites and services operate properly. Company also uses cookies when providing you Services. In this Cookie Policy Company describes which cookies are set on your Smart TV and how you can manage them.\nPlease note that all personal data that Company collects and/or processes through or with the help of cookies is subject to the Privacy Policy and you should read the Cookie Policy together with the Privacy Policy.\n1. What is a cookie?\nCookies are small text files that may be placed on your Smart TV. When a website or the red-button service of a TV station is accessed, the website or service may store a cookie in the Smart TV. During subsequent accesses, a cookie that is placed on your Smart TV will send information to the party that has placed the cookie. Cookies are extremely common and used on a number of websites and services. Each cookie will typically contain the name of the domain from which the cookie has come, the \"lifetime\" of the cookie, and a value (usually a unique number). For a more thorough explanation of what cookies are and how they operate, please visit www.allaboutcookies.org.\nCookies can be categorized into functional cookies and non-functional cookies. Functional cookies are cookies that are strictly required for the purpose of providing you the Smart TV services and for websites and other services to provide the right content to the Smart TV. Non-functional cookies are all other cookies.\nThis Cookie Policy relates to cookies that are placed by us, as well as advertising cookies that may be placed by third parties through our services on your Smart TV. This Cookie Policy does not relate to cookies that may be placed when you use the Smart TV services to access third party websites, services or applications. For these cookies we refer you to the respective cookie policies of such third parties. However, this Cookie Policy describes how to delete such cookies (see section 4 below).\n2. Which non-functional cookies do we use?\nAdvertising: In-video and display advertisements may be served to your Smart TV when using Smart TV services. These advertisements can be served by us or by third parties via, or as coordinated by, our advertising server, which performs a central coordinating role in relation to the serving of such advertisements. Our advertising server or a third party advertising server will set a cookie on your Smart TV. By means of this cookie an advertising server will register whether an advertisement has been served to your Smart TV or whether someone using your Smart TV has clicked on an advertisement. We use the information saved in such advertising cookie to remember which advertisements have been served on your Smart TV so we can make sure that not too many of the same advertisements are served on any particular Smart TV, and that we are able to settle our commercial arrangements with our advertising partners. We shall not use this information to serve targeted advertisements. Furthermore, third parties may use our advertising system to serve advertisements to your Smart TV and place cookies on your Smart TV when such advertisements are served. \nThese cookies contain, among others, information about the served advertisements, information on in which application or domain such advertisements are served, and your IP address. This is done to remember how often a particular advertisement is shown, and in order to prevent the same advertisement being shown too often. External third party advertisers that may place advertisements may also use cookies to track your activity over multiple websites, and to provide advertisements that correspond to your personal preferences.\n3. Third party websites\nWhen you visit websites or services of third parties via the Smart TV services of your Smart TV, it is possible that such websites or services place cookies on your Smart TV, and that such websites track and store your interactions on such websites. We do not request or encourage such activities and will not use such information. Please refer to the respective cookie and privacy policies of such websites and services for more information about such parties’ use of such cookies.\n4. Cookie deletion\nYour user interface of your Smart TV allows you to delete all cookies and other local browser storage from the Smart TV. It is highly advisable to remove all cookies and locally stored settings prior to selling or giving away your Smart TV.\n5. Contacting us\nIf you have any questions or comments regarding our Cookie Policy or our practice of using cookies you can send us an e-mail via FRsupport@tcl.com.\nVersion: 1.0\n"];
var privacyPolicyTitle = "Privacy Policy – Online Smart TV Services";
var privacyPolicyConditions = ["We respect your privacy when handling your personal data. This Privacy Policy describes the entity responsible for the collection, processing and use of personal data we collect from you in connection with the use of our Smart TV services (\"Services\"), what types of personal data we collect about you, what we do with it, and your rights in relation to our use of the personal data. \n1. Data controller\nThe collection, processing and use of the personal data collected from you when using the Services is conducted by Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, China (\"Company\"). Please note, however, that we are not responsible for all data processing activities set out below. We have nevertheless included a description of the respective activities in our Privacy Policy because this processing is connected with your use of the Smart TV.\n2. Data processing consent\nSome of the collection, processing and/or use of your personal data require your consent. \nIf you have consented to the use of your personal data for the purpose of improving the Services, your consent had the following wording:\n\"I consent to the collection, processing and use of my device start time, DTV channel list, favorite channels list, visit time, and viewed channels for the purposes of analyzing user habits to improve the Services and/or to analyze how many online users Company has per day/month/year and to the sharing of this information with TV stations.\"\nIf you have consented to the use of your personal data for advertisements that are tailored to your interests, your consent had the following wording:\n\"I consent to the collection, processing and use of my client type and country for the purpose of receiving appropriate advertisements.\"\nConsent is voluntary and you will still be able to use the Services if you do not consent. However, you may see advertisements and other content that is not tailored to your preferences. Irrespective of your consent Company reserves the right to collect, process and/or use the above data to the extent permitted by applicable law.\nYou may withdraw your consent to any of the above with effect for the future at any time. You may object to a use of your personal data for marketing, market or opinion research and to the tailoring of the Services to your needs. In order to withdraw your consent and/or to object, please change the privacy settings of your Smart TV accordingly.\n3. Personal data collected\nIrrespective of your consent, Company collects, processes, stores and uses the following data categories:\nDevice-ID: Your Smart TV stores a fixed unique number that enables us to identify and authenticate the Smart TV when you use the Services. This number is called the Device-ID. The Device-ID will be provided to our service partner to provide you the Services. We also provide the Device-ID to selected content partners for authentication purposes. These content partners use the Device-ID to authenticate your Smart TV for access to services provided by a content partner.\nIP address and MAC address: Your Smart TV will be assigned an IP address when accessing the Internet. This IP address will be transmitted to us and processed by us each time the Smart TV requests information or data from the Services. If your Smart TV is behind a router (e.g. in a local home network or local WLAN), we may collect and process the IP address of such router. The MAC address is a unique number assigned to each network interface of your Smart TV. The MAC address will also be collected and processed by us when the Smart TV requests information or data from the Services.\nService request data: Whenever you connect your Smart TV to the Internet and turn on the Smart TV, it will automatically connect to the Services, which are managed by our service partner. Your Smart TV will then be authenticated as being certified for access to the Services. For authentication purposes, the Services store one or more unique numeric identifiers related to your Smart TV. When connecting to the Service, the Smart TV will transmit the IP address it has been assigned and will transmit device specific information (Smart TV model, software version) to look whether software updates are available.\nService settings: As part of the regular functionality of the Services you can manually arrange the order in which apps are displayed by the Services. Our service partner will store your arrangement and other preferences you may set during using the Services. This information will be linked to the Device-ID.\nDevice specific information: The Smart TV stores several information about itself and its configuration. This information includes the Smart TV type, the version of the operation system of the Smart TV, its panel resolution, the project ID (i.e. information regarding configuration files), the user agent, browser name, browser version, and the language and country that have been configured in the Smart TV. This information will be used by us and will be provided to our service partner and content partners.\nAdvertising: The Services may serve advertisements. These advertisements are served by us, or by third parties using advertising inventory assigned by us. All advertisements are served by means of, or via, our advertising server, which fulfills a coordinating role for the serving of advertisements. Our advertising server or the third party advertising server may set a cookie on the Smart TV. Please refer to our Cookie Policy for more information about these cookies.\nService and Content Partner traffic: When you use the Services your Smart TV will request data from the Services via the Internet. As part of these requests your IP address as described above and the language and country that has been configured in your Smart TV will be transmitted to our service partner. Our service partner will process the respective data in accordance with its privacy policy.\nSecond screen usage: If you use our second screen application, the controls you activate on the application and the country and language settings, DTV channel list, favorite channels lists, schedule lists, Device-ID, current channel, protocol version and IP address of your Smart TV will be collected and processed by us on our servers. Our servers will then control your Smart TV as directed by you in the second screen app.\nHbbTV - \"Red Button\": TV stations (\"Stations\") may send additional information with their TV signal. If the Smart TV receives specific instructions in such additional information and if it is connected to the Internet, the Smart TV will download a picture or small page from the Station's website and display it together with the information to press the \"Red Button\" on your remote control if you want to use additional services provided by the Station. This happens each time you zap. Downloading the picture from the Station's website the Smart TV will transmit some personal data, i.e. the DTV channel list, current channel, event information table, TV time, IP address of your Smart TV and cookies stored on the Smart TV (if any). The Station is responsible for the collection, processing and/or use of this data. Moreover, if you use additional services offered by a Station through the Red Button, the Station may collect other personal data about you (e.g. which on-demand videos you watch, the news you read, etc.).\n4. Purposes for which we process and/or use your personal data\nWe process collected data for the following purposes:\n• Providing the Services: We use the IP address and MAC address, Device-ID, the version of the operation system of the Smart TV, client type of your Smart TV and its panel resolution, the project ID (i.e. information regarding configuration files), your DTV channel list, viewed channels, time zone, country and language settings to provide your Smart TV with access to the Services and services provided by content partners. Purposes include (but are not limited to) authentication, providing location based services to you (e.g. weather forecasts); abuse handling, management of security incidents, monitoring of availability of the Services, and providing backup services of user preferences.\n• Authentication: We use the Device-ID and MAC address for authentication purposes.\n• Software updates: Each time your Smart TV is powered on, it will provide us with the IP address, Device-ID, software version, client type of your Smart TV, project ID (i.e. configuration files), user ID, serial number to offer you and provide you with appropriate software updates. \n• Improving the Services: We use aggregated and anonymized usage data (i.e. data about your interaction with the Services) to improve the user experience of the Services.\n• Serving advertisements: We use the information in advertising cookies to allow the system to log which advertisements have been shown on your Smart TV in order to make sure that you do not receive too many similar advertisements, and we are able to settle our commercial arrangements with our advertising partners. External advertisers that serve advertisements on the Services or the content partner websites after coordination by our advertising server, may also use cookies to track you over multiple websites, and to serve advertisements that reflect your personal preferences.\n• Optimizing advertisements: We use data related to advertising views and clicks on advertisements to optimize the advertising experience of consumers in the Service.\n• Discounts: We provide the Device-ID to selected content partners to enable these partners to identify to what extent they can provide you with free access to Video on Demand titles in their collection.\n• Law enforcement: We may be required to provide data to competent law enforcement authorities or courts of justice. If we do so, we will only do so subject to a binding legal instrument like a warrant or a judicial order, which requires us to cooperate with the relevant authorities.\nUse of the Services is possible by using pseudonyms, unless specific services require that you provide your name and/or email address.\n5. Categories of recipients\nCompany shares your personal data collected during your use of the Services only with the following third parties:\n• With third party providers of Smart TV services if you request such services (e.g. if you start the Netflix application on your Smart TV we may share your IP address, MAC address, software version and TV model name with Netflix).\n• With third party content partners if you request certain content provided by such content partners (e.g. in order to provide you with the GoLive IP TV service, we may share your TV client type, IP address and language settings with the legal entity providing the GoLive service).\n• To the extent you have consented to the sharing of specific personal data with third parties above, Company will share your personal data with such third parties.\n• With outsourcing service providers as data processors assisting Company with providing the Services.\nCompany shares your personal data with other third parties only if Company is obligated to do so on the basis of legal requirements (e.g. to courts or criminal prosecution authorities), you have consented to the respective sharing or the sharing is otherwise lawful under applicable law.\n6. Countries in which your data will be processed\nCompany and/or some of the recipients of your personal data listed above may be located outside of the European Economic Area (i.e. in the following countries: Peoples Republic of China, United States of America). Therefore, your personal data may be processed in countries which are not recognized as providing an adequate level of protection of personal data in accordance with Directive 95/46/EC of the European Parliament and of the Council of 24 October 1995 on the protection of individuals with regard to the processing of personal data and on the free movement of such data.\n7. Your rights\nYou may contact Company in order to receive information about your personal data processed by Company and/or to exercise your statutory rights regarding access, rectification, deletion and blocking of your personal data; and/or to object the processing of your personal data for purposes of marketing and/or market or opinion research.\n8. Changes to the Privacy Policy\nTo improve our Services we may require amendments to this Privacy Policy – e.g. by the implementation of new technologies or the introduction of new services. We reserve the right to change or supplement this Privacy Policy at any time.\n9. Contact information\nIf you have any questions about the Privacy Policy or would like to complain about our handling of your personal data, please contact us by using one of the following contact details:\nEmail: FRsupport@tcl.com\nVersion: 1.0\n"];
var privacyPolicyTerms = [
    "Omogući uslugu Pametni TV",
    "Slažem se s prikupljanjem, obradom i korištenjem početnog vremena mog uređaja, popisa DTV kanala, popisa omiljenih kanala, vremena posjeta, i gledanih kanala u svrhu analize korisničkih navika za poboljšanje usluga i/ili analize broja online korisnika TCL-a dnevno/mjesečno/godišnje i s dijeljenjem ovih informacija s TV postajama.",
    "Omogući preporučenu uslugu.",
    "Omogući aplikaciju drugog ekrana za mobilne uređaje",
    "Omogući automatska ažuriranja softvera.",
    "Omogućite uslugu FreeviewPlay"
];
var privacyPolicyTips = [
    "Sve usluge Smart TV bit će onemogućene.",
    "Usluga HbbTV koju pružaju TV kanali kada se koristi ugrađeni prijamnik bit će onemogućena.",
    "Usluga za preporuku TV sadržaja i programa bit će onemogućena.",
    "Aplikacija drugog zaslona bit će onemogućena.",
    "TV neće automatski provjeravati ažuriranja softvera i novih funkcionalnosti.",
    "Sadržaj FreeviewPlay bit će onemogućen."
];
var privacyPolicyRemind = "Označite odgovarajuću kućicu uPostavkama.";
var set = "Postavi";
var copyShopDemoTips = ["USB priključen; kopirati video zapis na vanjsku memoriju?","Kopirati video zapis na vanjsku memoriju","Video zapis uspješno kopiran!","Greška u kopiranju video zapisa!"];
var dataDeletionWords = ["Izbrišite podatke za usluge pametnog televizora na poslužiteljima za pružanje podrške.","Napomene: Podaci vezani uz korištenje usluga pametnog televizora brišu se jedan mjesec nakon označavanja ove stavke. Imajte na umu kako brisanje ne utječe na lokalne podatke pohranjene u Vašem televizoru.","Podaci se više ne prenose na poslužitelj pametnog televizora.","Napomene:  Vaši podaci vezani uz korištenje usluga pametnog televizora više se neće prenositi do poslužitelja, ukoliko označite ovu stavku. Vaš televizor više neće primati preporučene usluge.","Ukoliko želite saznati više, posjetite internetsku stranicu www.tcl.eu"];
var miracastWords = ["Bežična veza","Prebaci android telefon na TV","Klikni za spajanje","Ova funkcija je dostupna samo na android telefonu"];
var miracastTips = ["Koraci za spajanje","Postavke otvorenog sustava","More connecting waysOstali načini spajanja \n / Druge bežične veze","Odaberi prikaz preko bežične veze","Klikni za spajanja \n čekanje"];
var termsAndConditions = ["\nThe contents and services (collectively the \"Licensed Application\") made available to you through this TV set (this \"Device\") are licensed, not sold, to you for use only under these terms and conditions. The providers of the Licensed Application (each an \"Application Provider\") reserve all rights not expressly granted to you.\n\n1.Scope of License\n\nThe license granted to you for a Licensed Application by the relevant Application Provider is limited to a non-transferable license to use the Licensed Application on the Device that you own or control. You may not distribute or make the Licensed Application available over a network where it could be used by multiple devices at the same time. You may not rent, lease, lend, sell, redistribute or sublicense the Licensed Application. \n\nAll Licensed Applications and all contents included therein that are accessible through this Device belong to the Application Provider and are protected by applicable intellectual property laws. Unless otherwise permitted by applicable law, you may not modify, copy, decompile, reverse engineer, disassemble, republish, upload, post, transmit, translate, attempt to derive the source code of, create derivative works of, or otherwise exploit any Licensed Application or any updates or any part thereof. If you breach this restriction, you may be subject to prosecution and damage claims. The terms of the license will govern any upgrades provided by the Application Provider that replace and/or supplement the original Licensed Application, unless such upgrade is accompanied by a separate license in which case the terms of that license will govern. You shall be solely responsible for any and all costs (if any) for the upgrading of the Licensed Application.\n\n2.Third-party Materials\n\nThe Licensed Application may enable access to Application Provider’s and third party services and web sites (collectively the \"Services\"). By using any of the Services, you may encounter contents that may be deemed offensive, indecent, or objectionable, which contents may or may not be identified as having explicit language, and that the results of any search or entering of a particular URL may automatically and unintentionally generate links or references to objectionable material. Nevertheless, the manufacturer of this Device (the \"Manufacturer\") and the Application Provider shall not have any liability to you for contents that may be found to be offensive, indecent, or objectionable. \n\nThe Manufacturer shall not be responsible for examining or evaluating the content, accuracy, completeness, timeliness, validity, copyright compliance, legality, quality or any other aspect of such Services. The Manufacturer does not warrant or endorse and shall not assume and shall not have any liability or responsibility to you or any other person for any of the Services. \n\nThe Services may contain proprietary content, information and material (collectively \"Third-party Materials\") that are protected by applicable intellectual property and other laws, and you shall not use such Third-party Materials in any way whatsoever except for permitted use of the Services. Unless otherwise permitted by applicable law, you shall not reproduce, modify, rent, lease, loan, sell, distribute the Third-party Materials or create derivative works thereof in any manner, and you shall not exploit the Services in any unauthorized way whatsoever. You shall not use the Services in any manner to harass, abuse, stalk, threaten, defame or otherwise infringe or violate the rights of any other party, and the Manufacturer shall not in any way be responsible for any such use by you, nor for any harassing, threatening, defamatory, offensive or illegal messages or transmissions that you may receive as a result of using any of the Services. \n\n3.No Warranty\n\nAll Licensed Applications and Services are provided \"as is\" and \"as available\" without warranty of any kind, either express or implied. The Manufacturer expressly disclaims all warranties and conditions with respect to the Licensed Applications and the Services, either express or implied, including but not limited to, warranties of merchantability, of satisfactory quality, of fitness for a particular purpose, of accuracy, of quiet enjoyment, and of non-infringement of third party rights. The Manufacturer does not guarantee the accuracy, validity, timeliness, legality, or completeness of any Licensed Application or Service made available through this Device and does not warrant that the Device, the Licensed Applications or the Services will meet your requirements, or that operation of the Licensed Applications or the Services will be uninterrupted or error-free, or that defects in the Licensed Application or Services will be corrected. Should the Licensed Application or Services prove to be defective, you shall assume the entire cost of all necessary servicing, repair or correction.\n\nThe Licensed Applications and Services may be changed, suspended, removed, terminated or interrupted, or access may be disabled at any time, without notice, and the Manufacturer makes no representation or warranty that any content or service included in the Licensed Applications and Services will remain available for any period of time. Such contents and services are transmitted by third parties by means of networks and transmission facilities over which the Manufacturer has no control. Without limiting the generality of the foregoing, the Manufacturer expressly disclaims any responsibility or liability for any change, interruption, disabling, removal of or suspension of any content or service made available through this Device. The Application Provider and other providers of the Services reserve the right to change, suspend, remove, or disable access to any Licensed Application or Services at any time without notice. The Manufacturer may also impose limits on the use of or access to certain Licensed Applications or Services, in any case and without notice or liability.\n\nThe Manufacturer does not provide customer service related to the Licensed Applications and the Services. Any question or request for service relating to the Licensed Applications and the Services should be made directly to the respective provider.\n\n4.Collection and Use of Information\n\nThe Manufacturer, the Application Providers and the providers of the Services may collect and use technical data and related information, including but not limited to technical information about this Device, system and application software, and peripherals, to facilitate the provision of software updates, product support and other services to you (if any) related to the Device and the Licensed Application. The Manufacturer, the Application Providers and the providers of the Services may use such information, as long as it is in a form that does not personally identify you, to improve its products or to provide services or technologies to you. For more information on the collection and use of information, please visit our privacy policy: http://www.tcl.eu/en/.\n\n5.Unavailability of Certain Features\n\nDue to restrictions of Application Provider, certain features, applications, and services may not be available on this Device (including its peripheral devices) or in all territories. Some features on this Device may also require additional peripheral devices or membership fees that are sold separately.\n\n6.Limitation of Liabilities\n\nTo the extent not prohibited by applicable law, under no circumstances, including negligence, shall the Manufacturer be liable, whether in contract or tort, for any direct, indirect, incidental, special or consequential damages, attorney fees, expenses, or any other damages arising out of, or in connection with, any information contained in, or as a result of the use of the Device, any Licensed Application or any Service by you or any third party, even if advised of the possibility of such damages.\n\nThe Manufacturer shall only be liable for intent and gross negligence."];
var privacyNotice = ["\nWe respect your privacy when handling your personal data. This Privacy Notice describes the entity responsible for the processing of personal data we collect from you in connection with the use of our Smart TV services (\"Services\"), what types of personal data we collect about you, what we do with it, and your rights in relation to our use of the personal data. \n\n1.Data controller and representative in the European Union\n\nThe collection, processing and use of the personal data collected from you when using the Services is conducted by Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, China (\"Company\"). Our contact details as well as the contact details of our representative in the European Union are provided under Section 12 below. Please note, however, that we are not responsible for all data processing activities set out below. We have nevertheless included a description of the respective activities in our Privacy Notice because this processing is connected with your use of the Smart TV.\n\n2.Data processing consent\n\nSome of the data processing activities that we conduct require your consent, e.g. the use of your personal data for the purpose of improving the Services.\n\nConsent is voluntary and you will still be able to use the Services if you do not consent. However, you may see content that is not tailored to your preferences. Irrespective of your consent we reserve the right to process your personal data to the extent permitted by applicable law.\n\nYou may withdraw your consent at any time. The withdrawal of consent shall not affect the lawfulness of processing based on consent before its withdrawal. In order to withdraw your consent and/or to object (c.f. Section 10 and Appendix Your Rights below for your rights to object), please change the privacy settings of your Smart TV accordingly.\n\n3.Specific categories of personal data\n\nWe process in particular the following data categories:\n\nDevice-ID: Your Smart TV stores a fixed unique number that enables us to identify and authenticate the Smart TV when you use the Services. This number is called the Device-ID. \n\nIP address and MAC address: Your Smart TV will be assigned an IP address when accessing the Internet. If your Smart TV is behind a router (e.g. in a local home network or local WLAN), we may process the IP address of such router. The MAC address is a unique number assigned to each network interface of your Smart TV. \n\nDevice specific information: The Smart TV stores several information about itself and its configuration. This information includes the Smart TV type, the version of the operation system of the Smart TV, its panel resolution, the project ID (i.e. information regarding configuration files), the user agent, browser name, browser version, and the language and country that have been configured in the Smart TV. \n\nThese information will be used by us and will be provided to our service partner and content partners for the purposes described below.\n\n4.Purposes for which we process and/or use your personal data and legal bases\n\nThe purposes for which we process your personal data and the respective legal bases are described below. To the extent that contractual purposes are mentioned below as legal basis, we cannot provide you with the Services if you do not provide us with the respective data. To the extent that your consent is mentioned as legal basis, you are free to provide or withhold your consent. If you do not provide your consent, we will not process your personal data for the respective purpose.\n\n•Providing the Services: We use the IP address and MAC address, Device-ID, the version of the operation system of the Smart TV, client type of your Smart TV and its panel resolution, the project ID (i.e. information regarding configuration files), your DTV channel list, viewed channels, time zone, country and language settings to provide your Smart TV with access to the Services and services provided by content partners. Purposes include (but are not limited to) providing location based services to you (e.g. weather forecasts); abuse handling, management of security incidents, monitoring of availability of the Services, and providing backup services of user preferences.\n\nWhen you use the Services your Smart TV will request data from the Services via the Internet. As part of these requests your IP address as described above and the language and country that has been configured in your Smart TV will be transmitted to our service partner. Our service partner will process the respective data in accordance with its privacy notice.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) General Data Protection Regulation (“GDPR”).\n\n•Service Settings: As part of the regular functionality of the Services you can manually arrange the order in which apps are displayed by the Services. Our service partner will store your arrangement and other preferences you may set during use of the Services. This information will be linked to the Device-ID.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•Authentication: Whenever you connect your Smart TV to the Internet and turn on the Smart TV, it will automatically connect to the Services, which are managed by our service partner. Your Smart TV will then be authenticated as being certified for access to the Services. For authentication purposes, the Services store one or more unique numeric identifiers related to your Smart TV. We use the Device-ID and MAC address for authentication purposes. We also provide the Device-ID to selected content partners for authentication purposes. These content partners use the Device-ID to authenticate your Smart TV for access to services provided by a content partner.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•Remote diagnostics: As part of the Services, we provide you with remote diagnostic services. Therefore, we process the Device-ID, device number, serial number, MAC address, and error logs, error codes and error descriptions which are provided by the faulty module (application, middleware system).\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•After-sales service: Pursuant to applicable law you may have warranty or similar rights to obtain after-sales services. TCL Europe, 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, France is responsible for handling warranty claims and other requests for after-sales services and the processing of your personal data associated therewith. I.e., for the purposes of after sales services, TCL Europe acts as data controller and we are not responsible for the respective processing of your personal data.\n\nWhen you ask for our after-sales related service, your name, e-mail address, phone number, service request and postal address included in the invoice may be required for the purpose of providing you with the after-sales service. The information may also be collected through the after-sales partners of our resellers or authorized service providers if you call them for service. You can contact TCL Europe under the contact details stated in Section 12 below for more information about the protection of personal data in connection with after-sales services.\n\nThe legal basis for the respective processing is the obligation to comply with legal obligations pursuant to Article 6 (1) c) GDPR.\n\n•T-Launcher: T-Launcher is the main page for the use of the Smart TV on Linux operating system (please see below for the use of the android operating system) and allows you to select certain content.\n\nThe legal basis for the processing of your personal data that is necessary for your use of the T-Launcher are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\nSubject to your prior consent, we will also monitor the use of the T-Launcher, i.e.:\n\n-	When you start to use T-Launcher, we will record the time of entering and exiting T-Launcher.\n-	When you start to play a video of T-Launcher, we will record the name and the duration time of the video (not applicable to Netflix, YouTube or any other service provided by a third party).\n-	When you enter or exit a page, we will record the staying time on the page.\n-	When you move your cursor from one location to another, or enter an application, we will record this event.\n-	When you install, remove or update applications, we will record these events, including the name of applications.\n\nWe collect these information mainly for big data analysis to improve products and to provide better content services to users.\n\nThe legal basis for the processing of your personal data in connection with the monitoring of your use of the T-Launcher is your consent pursuant to Article 6 (1) a) GDPR.\n\nIf you have bought an Android TV and use Google’s android operating system, your personal data will be processed by Google and we are not responsible for such processing. Please refer to Google’s privacy notice for information about the related processing of your data and your respective rights.\n\n•T-Cast: T-Cast allows you to control your TV using your phone and to share videos, music and pictures stored in your smart phone on the TV. T-Cast also allows you to mirror your smartphone on your TV.\n\nThe download and use of the app is voluntary. If you download and use the app, we will process the MAC address to calculate how many T–Cast versions have been used in the market. This is required to be able to offer you this service. If you use our second screen functionality, the controls you activate on the application and the country and language settings, DTV channel list, favorite channels lists, schedule lists, Device-ID, current channel, protocol version and IP address of your Smart TV will be collected and processed by us on our servers. Our servers will then control your Smart TV as directed by you in the app.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•Software updates: Software updates are part of the Services. Thus, each time your Smart TV is powered on, it will provide us with the IP address, Device-ID, device number, software version, client type of your Smart TV, project ID (i.e. configuration files), user ID, and serial number to look whether software updates are available and to offer you and provide you with appropriate software updates.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•Law enforcement: We may be required to provide data to competent law enforcement authorities or courts of justice. If we do so, we will only do so subject to a binding legal instrument like a warrant or a judicial order, which requires us to cooperate with the relevant authorities.\n\nThe legal basis for the respective processing is our obligation to comply with legal obligations pursuant to Article 6 (1) c) GDPR.\n\nUse of the Services is possible by using pseudonyms, unless specific services require that you provide your name and/or email address.\n\n5.Privacy and safety of children under 16\n\nWe understand the importance of taking extra precautions to protect the privacy and safety of children using our Services. Children under the age of 16, or equivalent minimum age in the relevant jurisdiction, are not permitted to provide their personal information via the TV set or when they call for after-sales service, unless their parent provided verifiable consent.\n\nAs we never collect birth dates of users, we can't identify the age of users. But if we learn that we have collected the personal information of a child under 16, or equivalent minimum age depending on the jurisdiction, outside of the above circumstances we will take steps to delete the information as soon as possible.\n\n6.Third party apps\n\nYour Smart TV allows the use of apps provided by third parties, such as Netflix, YouTube or HbbTV (red button service provided by TV broadcasters). You may download the apps from the app store or activate third party apps that are already pre-installed on your device. Third party apps that are pre-installed on your device do not collect personal data without your prior authorization. E.g. Netflix is already pre-installed on the device but only collects data when you log into your Netflix account. HbbTV only collects data when you consent to the collection by pressing the designated button on your remote control.\n\nIf you enable a third party app, personal data about you may be processed by the app provider. We are not responsible for such processing; please refer to the privacy notice of the third party app for information about the related processing of your data and your respective rights.\n\n7.Categories of recipients\n\nWe share your personal data collected during your use of the Services only with third party content partners if you request certain content provided by such content partners or with service providers as data processors assisting us with the provision of the Services.\n\nWe share your personal data with other third parties only if we are obligated to do so on the basis of legal requirements (e.g. to courts or criminal prosecution authorities), if you have consented to the respective sharing or if the sharing is otherwise lawful under applicable law.\n\n8.Countries in which your data will be processed\n\nWe and/or some of the recipients of your personal data listed above may be located outside of the European Economic Area (e.g. in the Peoples Republic of China, or United States of America). Therefore, your personal data may be processed in countries where the data protection laws may provide a different level of protection compared to the laws in your jurisdiction and which are not recognized as providing an adequate level of protection of personal data in accordance with the GDPR. The countries which provide an adequate level of data protection from a European data protection law perspective include Andorra, Argentina, Canada, Switzerland, Faeroe Islands, Guernsey, the State of Israel, Isle of Man, Jersey, New Zealand and the Eastern Republic of Uruguay. Recipients in the USA may partially be certified under the EU-U.S. Privacy Shield and thereby recognized as providing an adequate level of data protection from an European data protection law perspective. \n\nWhere required, we will implement appropriate safeguards with regard to data transfers to recipients outside of the European Union that do not provide an adequate level of data protection. A copy of the respective measure may be requested by contacting us as stated under Section 12. below.\n\n9.Storage Period\n\nYour personal data will be retained as long as necessary to provide you with the Services. For most data this generally means that we will retain your data for one month. For the purpose of remote diagnostics and after-sales services we may retain your data up to ten years. When we no longer need to use your personal data to comply with contractual or statutory obligations, we will remove it from our systems and records and/or take steps to properly anonymize it so that you can no longer be identified from it.\n\n10.Your rights\n\nPursuant to applicable data protection law you may have the right to: request access to your personal data, request rectification of your personal data; request erasure of your personal data, request restriction of processing of your personal data; request data portability, and object to the processing of your personal data. Please note that these aforementioned rights might be limited under the applicable national data protection law. For further information on these rights please refer to the Appendix Your Rights below.\n\nYou also have the right to lodge a complaint with the competent data protection supervisory authority.\n\nTo exercise your rights please contact us as stated in Section 12 below.\n\n11.Changes to the Privacy Notice\n\nTo improve our Services we may require amendments to this Privacy Notice – e.g. by the implementation of new technologies or the introduction of new services. We reserve the right to change or supplement this Privacy Notice at any time.\n\n12.Contact information and representative in the European Union\n\nIf you have any questions about the Privacy Notice or would like to complain about our handling of your personal data, please contact us by using the following contact details:\n\nContact form: www.tcl.eu/privacy/support\n\nOur representative in the European Union is: TCL Europe having offices at 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, France. You may contact TCL Europe via the contact form stated above.\n\nVersion: 2.0\n\nAppendix Your Rights\n\na.Right of access: You may have the right to obtain from us confirmation as to whether or not personal data concerning you is processed, and, where that is the case, to request access to the personal data. The access information includes - inter alia - the purposes of the processing, the categories of personal data concerned, and the recipients or categories of recipients to whom the personal data have been or will be disclosed. However, this is not an absolute right and the interests of other individuals may restrict your right of access.\n\nYou may have the right to obtain a copy of the personal data undergoing processing. For further copies requested by you, we may charge a reasonable fee based on administrative costs. \n\nb.Right to rectification: You may have the right to obtain from us the rectification of inaccurate personal data concerning you. Depending on the purposes of the processing, you may have the right to have incomplete personal data completed, including by means of providing a supplementary statement.\n\nc.Right to erasure (\"right to be forgotten\"): Under certain circumstances, you may have the right to obtain from us the erasure of personal data concerning you and we may be obligated to erase such personal data. \n\nd.Right to restriction of processing: Under certain circumstances, you may have the right to require the restriction of processing of personal data concerning you. In this case, the respective data will be marked and may only be processed by us for certain purposes.\n\ne.Right to data portability: Under certain circumstances, you may have the right to receive the personal data concerning you, which you have provided to us, in a structured, commonly used and machine-readable format and you may have the right to transmit those data to another entity without hindrance from us.\n\nf.Right to object:\n\nUnder certain circumstances, you may have the right to object, on grounds relating to your particular situation, or where personal data are processed for direct marketing purposes at any time to the processing of your personal data by us and we can be required to no longer process your personal data.\n\nMoreover, if your personal data is processed for direct marketing purposes, you have the right to object at any time to the processing of personal data concerning you for such marketing, which includes profiling to the extent that it is related to such direct marketing. In this case your personal data will no longer be processed for such purposes by us."];
var cookieNotice = ["\nWe respect your privacy when using Smart TVs manufactured and Services provided by us. Cookies are used by many websites and other internet services and your Smart TV will accept, store and transmit cookies to ensure that these websites and services operate properly. \n\nWe do not use cookies when providing the Services to you. However, third parties (e.g. third party app providers) may use cookies when you use the Smart TV to access their services. This Cookie Notice can only provide limited information concerning cookies that may be placed by third parties. For information on the actual cookies used by third parties and their functionalities we refer you to the respective cookie notices of such third parties. However, in this Cookie Notice we provide a general description which cookies can be set on your Smart TV and how you can manage them.\n\n1.What is a cookie?\n\nCookies are small text files that may be placed on your Smart TV. When a website or the red-button service of a TV station is accessed, the website or service may store a cookie in the Smart TV. During subsequent accesses, a cookie that is placed on your Smart TV will send information to the party that has placed the cookie. Cookies are extremely common and used on a number of websites and services. Each cookie will typically contain the name of the domain from which the cookie has come, the \"lifetime\" of the cookie, and a value (usually a unique number). For a more thorough explanation of what cookies are and how they operate, please visit www.allaboutcookies.org.\n\nCookies can be categorized into functional cookies and non-functional cookies. Functional cookies are cookies that are strictly required for the purpose of providing you services. Non-functional cookies are all other cookies.\n\n2.Third party websites\n\nWhen you visit websites or services of third parties via the Services of your Smart TV, it is possible that such websites or services place cookies on your Smart TV, and that such websites track and store your interactions on such websites. We do not request or encourage such activities and will not use such information. Please refer to the respective cookie and privacy notices of such websites and services for more information about such parties’ use of such cookies.\n\n3.Cookie deletion\n\nYour user interface of your Smart TV allows you to delete all cookies and other local browser storage from the Smart TV. It is highly advisable to remove all cookies and locally stored settings prior to selling or giving away your Smart TV.\n\nVersion: 2.0"];
var privacyPolicy = ["Molimo, označite okvir(e) dolje, ukoliko želite koristiti naše usluge pametnog telefona i slične usluge. Korištenje ovih usluga zahtijeva obradu Vaših osobnih podataka, kako je to i opisano u našim Pravilima o privatnosti: http://www.tcl.eu/en/","Omogućiti uslugu pametnog TV-a, pohranu uslužnih postavki automatsku provjeru pametnog TV-a. Ukoliko odznačite ovaj okvir, imat ćete samo standardni TV i HDMI.","Omogući automatska ažuriranja softvera. Označite ovaj okvir, ukoliko želite primati najnovije softverske nadogradnje i osigurati najbolje performanse Vašeg proizvoda.","(Softverske su nadogradnje važne za pravilan rad Vašeg TV uređaja jer nude nove značajke, stabilnost i sigurnost. Stoga Vam preporučamo da označite okvir.)","Molimo, označite donji okvir, ukoliko ste suglasni s našom obradom Vaših osobnih podataka za navedenu svrhu. Kako biste saznali više o načinu na koji obrađujemo Vaše osobne podatke pogledajte naše Priopćenje o privatnosti: http://www.tcl.eu/en/","Suglasan/na sam s obradom mojih osobnih podataka (npr. vrijeme ulaska i izlaska u odnosu na T-kanal) u svrhu poboljšanja TCL proizvoda i pružanja boljih usluga na pametnim TV uređajima."];
var termsFirTitle = ["Uvjeti","Obavijest o zaštiti privatnosti","Obavijest o kolačićima"];
var termsSecTitle = ["Pročitajte i prihvatite uvjete.","Molimo pročitajte i prihvatite obavijest o zaštiti privatnosti.","Molimo pročitajte i prihvatite obavijest o kolačićima."];
var tickall = "Označiti sve";
var tickremindWords = "Molimo označite polja s kvačicama. U suprotnom ne možete uživati Smart TV uslugu.";