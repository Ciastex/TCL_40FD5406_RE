var  all_country  = ["*","Austrija","Belgija","Bugarska","Hrvatska","Češka Republika","Danska","Finska","Francuska","Njemačka","Grčka","Mađarska","Italija","Luksemburg","Nizozemska","Norveška","Poljska","Portugal","Rumunija","Rusija","Srbija","Slovenija","Španija","Švedska","Švicarska","Ujedinjeno Kraljevstvo","*"," "/*Arab*/,"Estonija"," "/*Hebrew*/,"Latvija","Slovačka","Turska","Irska","*","*","*","*","Urugvaj","Peru","Argentina","Čile","Venecuela","Ekvador","Kostarika","Paragvaj","Bolivija","Belize","Nikaragva","Gvatemala","*","*","Brazil","*","Meksiko","*","*","Ostali","Litvanija"/*新添加的，底层结构体中没有*/,"Ukrajina"/*新添加的，底层结构体中没有*/,"*","*"," "," ","*"," ","*","*","*"," ","*","*"," "," "," ","*"," ","*"," "," "," "," ","*"," "," "," "," "," ","*"," ","Moldavija"," ","EI Salvador"," "," "," ","*"," "," "," "," "," "," "," "," "," "," "," "," ","*"," "," ","*"," "," "," ","*","Albanija","Bjelorusija","Island","Litvanija","*","*","*","*","*","Bosna i Hercegovina","Kipar","Kosovo","Makedonija","Malta","Crna Gora","Ostali"];	


var all_language = ["Češki","*","Danski","*","*","Njemački","Engleski","Španski","Grčki","Francuski",
					"Hrvatski","*","Italijanski","Mađarski","Holandski","Norveški","Poljski","Portugalski","Ruski","Rumunjski",
					"Slovenački","Srpski","Finski","Švedski","Bugarski","Slovački","Kineski","*","Galski","*",
					"Welški","Arapski","Irski","Letonski","*","Turski","Estonski","Holandski"/*Netherlands*/,"Korejski","*",
					"Hindi","*","*","Mandarin","Cantonese","Maori","Originalni zvuk"/*Qaa*/,"Nedefinisan"/*Undetermined*/,"*","Nepoznat",
					"Nedefinisan","*","*","*","*","*","*","*","*","*",
					"*","*","*","Albanski","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","*","*","*",
					"*","*","*","*","*","*","*","Baskijski","*","*",
					"*","*","*","*","*","*","*","Bosanski","*","*",
					"*","*","*","*","Bjeloruski","*","*","Katalonski","*","*",
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
					"*","*","Japanese","*","*","*","*","*","*","*",
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
					"*","*","*","*","*","Romanski","*","*","*","*",
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
					"*","*","*","*","*","*","*","*","*","Tradicionalni kineski",
					"*"];	


var offOn = ["Isključeno","Uključeno"];	
var okCancel = ["OK","Otkaži"];	
var yesNo = ["Da","Ne"];	
var level = ["Isključeno","Nizak","Visok","Srednji"];	
var manualAuto = ["Uputstvo za upotrebu","Automatski"];	
var homeShop = ["Kuća","Prodavnica"];	
var picPreset = ["Standardno","Dinamično","Prirodno","Film","Privatno"];	
var picColorTemp = ["Hladna","Normalna","Topla","Prilagođena"];	
var pic3dNavig = ["Uputstvo za upotrebu","Automatski","Poluautomatski"];	
var _3dOptions = ["3D način","3D-na-2D","Prekidač za lijevo - desno","Dubina polja"];	
var pic3DMode = ["Isključeno","2D-na-3D","Jedna pored druge","Jedna iznad druge","Prebacivanje sa jedne veze na drugu"];	
var picEcoOptions = ["Ušteda energije","Svjetlosni senzor","Lokalno zatamnjenje","Mješovito zatamnjenje"];	
var picGeoOptions = ["Geometrija","Horizontalni položaj","Vertikalni položaj","Sat","Faza"];	
var picAdWhiteBal = ["R pojačanje","G pojačanje","B pojačanje","R pomak","G pomak","B pomak"];	
var souOptions = ["Podešavanje zvuka","Balans","Kašnjenje reprodukcije zvuka","SRS TSHD","Automatska kontrola jačine zvuka","SPDIF tip","SPDIF kašnjenje","Postavljanje televizora","Jezik zvuka","Tip zvuka","Opis zvuka","Pojačanje basa","Dolby Digital Plus"];	
var souSpdifType = ["Automatski"/*Dolby*/,"PCM","Isključeno"];	
var colorSpace = ["Automatski","Domaći","Prilagođena"];	
var souPresetPara = ["100Hz","500Hz","1.5KHz","5KHz","10KHz"];
var chOptions = ["Pretraživanje kanala","Lista kanala","EPG","Organizator kanala","Ispitivanje kanala","Vremenski pomak","Titl","Teletekst","Tip liste kanala","Usluga podataka"];	
var chDiagOptions = ["Snaga signala","Kvalitet signala","Frekvencija (KHz)","ID usluge","ID mreže","Naziv mreže"];	
var chScanOptions = ["Država","Način rada prijemnika","Automatsko pretraživanje","Automatsko ažuriranje","Ručno pretraživanje analognih kanala",["Ručna instalacija kabla","Ručna instalacija antene","Ručno podešavanje"],"Podešavanje satelitske antene","Odabiranje omiljene mreže","Očistite listu kanala","LCN"];
var favNetDes = "IOdaberite vašu omiljenu mrežu";	
var tuner = ["Kabl","Antena","Satelit"];	
var passError = "Lozinka pogrešna.\nUnesite je ponovo.";	
var chType = ["Analogni kanali:","Digitalni kanali:"];	
var chScanStatus = ["Status: Pretraživanje","Status: Pretraživanje završeno","Status: Pretraživanje otkazano","Status: Greška pri pretraživanju"];	
var chScanPara = ["Frekvencija (KHz)","Modulacija","Brzina simbola (kilo simbola u sekundi) Ksim/s","ID mreže","Sistem","Fino podešavanje","Snaga signala","Kvalitet signala","Način pretraživanja","ID kanala"];	
var chScanParaMHZ = ["Frekvencija (MHz)"];	
var chAtvManSys = ["Zapadna Evr.","Istočna Evr.","UK","Francuska"];	
var modulation = ["16QAM","32QAM","64QAM","128QAM","256QAM","Automatski"];	
var chCleanDes = "Želite li očistiti listu kanala?";	
var chDeletDes = "Želite li obrisati kanal?";	
var chOperator = ["Ziggo","UPC","Ostali"];	
var chScanType = ["Digitalni i analogni","Digitalni","Analogni"];	
var chScanMode = ["Pun","Napredno","Brzo"];	
var bookingModes = ["Snimanje","Podsjetnik"];	
var dayName = ["Ned.","Pon.","Uto.","Sri.","Čet.","Pet.","Sub."];	
var monthName = ["Jan.", "Feb.","Mar.","Apr.","Maj","Jun.","Jul.","Aug.","Sep.","Okt.","Nov.","Dec."];	
var filter = ["Filter","Tip","Podtip"];	
var chEpgFirstGenre = ["Film","Novosti","Šou","Sportovi","Za djecu","Muzika","Umjetnost","Društvo","Obrazovanje","Slobodno vrijeme","Specijalno"];	
var chEpgSecondGenre = [["Drama","Detektiv","Avantura","Naučna fantastika","Komedija","Sapunice","Romanski","Ozbiljno","Film za odrasle"," "," "," "],["Trenutni događaji","Vremenska prognoza","Magazin dnevnih novosti","Dokumentarni program","Diskusija"," "," "," "," "," "," "," "],["Šou","Šou igre","Raznovrsna predstava","Razgovor uživo"," "," "," "," "," "," "," "," "],["Sportovi","Specijalni događaji","Sportski magazini","Fudbal","Tenis","Timski sportovi","Atletika","Motorni sport","Sport na vodi","Zimski sport","Jahanje","Borilački sportovi"],["Za djecu","Program za predškolsku djecu","Zabavni program za osobe od 6 do 14 godina","Zabavni program za osobe od 10 do 16 godina","Informativno","Crtani filmovi"," "," "," "," "," "," "," "],["Muzika","Rok","Ozbiljno","Folk","Džez","Mjuzikl","Balet"," "," "," "," "," "],["Umjetnost","Umjetničke predstave","Likovna umjetnost","Religija","Popularna kultura","Književnost","Film","Eksperimentalni program","Emitovanje","Novi mediji","Umjetnički magazini","Moda"],["Društvo","Magazini","Ekonomija","Izvanredni ljudi"," "," "," "," "," "," "," "," "],["Obrazovanje","Priroda","Tehnologija","Medicina","Strane zemlje","Društvene nauke","Dodatno obrazovanje","Jezici"," "," "," "," "],["Hobiji u slobodno vrijeme","Turizam","Ručni rad","Automobilizam","Vježbanje i zdravlje","Kuvanje","Reklama","Baštovanstvo"," "," "," "," "],["Originalni jezik","Crno i bijelo","neobjavljeno","Emitovanje uživo"," "," "," "," "," "," "," "," "]];	
var chEpgFirstGenreLA = ["Novosti","Sportovi","Obrazovni program","Sapunska opera","Mini serije","Serije","Raznovrsna predstava","Rijaliti šou","Informacije","Komični program","Dječiji program","Erotski program","Film","Lutrija, televizijska prodaja, nagrađivanje","Rasprava/intervju","Ostalo"];	
var chEpgSecondGenreLA = [["Novosti","Izvještaj","Dokumentarni program","Biografija","Ostalo","*","*"],    ["Sportovi","Ostalo","*","*","*","*","*"],["Obrazovni program","Ostalo","*","*","*","*","*"],["Sapunska opera","Ostalo","*","*","*","*","*"],["Mini serije","Ostalo","*","*","*","*","*"],["Serije","Ostalo","*","*","*","*","*"],["Gledalište","Šou","Mjuzikl","Stvaranje","Program za žene","Šou igre","Ostalo"],["Rijaliti šou","Ostalo","*","*","*","*","*"],["Kuvanje","Moda","Država","Zdravlje","Putovanje","Ostalo","*"],["Komični program","Ostalo","*","*","*","*","*"],["Dječiji program","Ostalo","*","*","*","*","*"],["Erotski program","Ostalo","*","*","*","*","*"],["Film","Ostalo","*","*","*","*","*"],["Lutrija","Televizijska prodaja","Nagrađivanje","Ostalo","*","*","*"],["Diskusija","Intervju","Ostalo","*","*","*","*"],["Crtani film za odrasle","Interaktivni","Polisa","Religija","Inženjerske usluge","Ostalo","*"]];	
var chOrganizer = ["Preskoči kanal","Sortiranje kanala","Korekcija kanala","Brisanje kanala","Zamjena kanala","Dodavanje kanala"];	
var chEditPara = ["Naziv mreže","Broj kanala","Naziv kanala","Frekvencija","Sistem boja","Zvučni sistem"];	
var chSatTitles = ["Tip satelita","Podešavanje satelitske antene","Odaberi satelit"];	
var chSatEidtOptions = ["Naziv satelita","Položaj","Snaga blokiranja niskog šuma","LNB frekvencija (MHz)","DiSEqC ulaz","Ton 22 KHz","Sinusni isprekidani ton","Frekvencija (KHz)","Brzina simbola (kilo simbola u sekundi) Ksim/s","Polarizacija","Snaga signala","Kvalitet signala","Status satelita"];	
var chSatAutoPromt = [["Sve","Mreža"],["Sve","Slobodno"]];	
var chSatAutoScanOptions = ["Odaberi satelit","Način pretraživanja","Kanali"];	
var chSatPosition = ["A","B"];	
var chSatLNBFreq = ["Univerzalni",];	
var chSatDiSEqCInput = ["Onemogući","A","B","C","D"];	
var chSatTone22KHz = ["Automatski","Uključeno","Isključeno"];	
var chSatToneBurst = ["Onemogući","Sinusni isprekidani ton A","Sinusni isprekidani ton B"];	
var chSatPolarization = ["Horizontalan","Vertikalan"];	
var chSatSetupOptions = ["Tip antene","Radio","Pojasna frekvencija"];	
var chSatAntennaType = ["Jedan kabl","Univerzalni"];	
var chSatUserBands = ["Korisnički pojas 1","Korisnički pojas 2","Korisnički pojas 3","Korisnički pojas 4","Korisnički pojas 5","Korisnički pojas 6","Korisnički pojas 7","Korisnički pojas 8"];	
var chSatOthers = ["Transponder"];	
var chSatSetupOthers = ["Određeno od strane korisnika"];	
var pleaseSelectSat = "Prvo izaberete satelite!";	
var subOptions = ["Titl","Jezični digitalni titl","Drugi jezični digitalni titl","Tip titla"];	
var gingaOptions = ["Automatski servis podataka","Lista usluga podataka"];	
var ttxOptionsCon = ["Dekodiranje jezika stranice","Digitalni teletekst jezik"];	
var subType = ["Normalna","Osobe sa oštećenim sluhom"];	
var netIntf = ["Ethernet","Bežično"];	
var netConnDes = ["TV provjerava vezu sa mrežom.\nPričekajte","Test mrežne veze je uspješan!","Test mrežne veze neuspješan."];	
var netSsidError = "Ispravna dužina SSID je od 1~32 simbola. Provjerite SSID.";	
var netOthers = ["PIN kod"];	
var netWlessAutoDes = ["Prije nego što pritisnete dugme OK, omogućite da je određeni PIN kod instaliran u uređaju koji omogućuje mrežnu vezu.","Pritisnite dugme OK na uređaju za mrežnu povezanost u roku od 120 sekundi prije pritiska na dugme OK."];	
var netConnRemind = ["Lozinka pogrešna!","Uspostavljanje veze. Pričekajte!","Veza je uspješna i IP adresa je dobivena.","Veza neuspješna, provjerite mrežu i pokušajte ponovo.","TV pretražuje pristupne tačke. \nPričekajte.","Ne postoji bežični adapter povezan sa TV-om!"];	
var netWireIpOptions = ["IP postavke","Tip adrese","IP adresa","Maska podmreže","Zadani mrežni prolaz","Primarni DNS","Sekundarni DNS"];	
var netWireConnRemind = ["Unesite numeričku vrijednost između 0 i 255.","Veza uspješno!","Utipkajte važeću adresu","Veza uspješno!","Veza neuspješna!","Uspostavljanje veze. Pričekajte!","Unesite numeričku vrijednost između 1 i 223."];	
var netFlixOptions = ["Deaktivirajte","Elektronski serijski broj (ESN)"];	
var netFlixDes = ["Jeste li sigurni da želite deaktiviranje?"," "/*Are you sure that you want to ESN?*/];	
var netUpdateTitle = "Najnovija dostupna verzija određenog programa";	
var netUpdateDialogTitle = "Ažuriranje softvera";	
var netBGDownloadTitle = "Preuzimanje";	
var netUpdateLoadingPrompt = ["Traženje za nadogradnju, pričekajte!","Program se preuzima... Pričekajte!","NE isključujte TV uređaj u toku ažuriranja softvera!",                            "Važno softversko ažuriranje je preuzeto automatski u pozadini dok radite nešto drugo."];	
var netUpdatePrompt = ["Čestitamo, sad posjedujete najnoviju verziju softvera!","Pronađena je nova verzija softvera XXXX. Želite li sad da je preuzmete? Ovo može potrajati neko vrijeme, zavisno od statusa Vaše mreže.","Prijava neuspješna, provjerite i povežite se ponovo!","Neuspjeh da primite podatke, pokušajte ponovo kasnije!","Analiza informacije o nadogradnji neuspješna, prebacite na isključeno/uključeno s daljinskim upravljačem.","Veza neuspješna, provjerite mrežu i pokušajte ponovo.","Softver uspješno preuzet. Želite započeti ažuriranje Vašeg TV-a?","Podaci izgubljeni! Preuzimanje neuspješno!","Provjera softverske datoteke neuspješna, pokušajte ponovo.","Problemi s vezom. Provjerite i povežite se ponovo!","Ažuriranje neuspješno. Prebacite na isključeno/uključeno s daljinskim upravljačem.","Datoteka za nadogradnju je neočekivano izbrisana. Uradite nadogradnju ponovo, preko mreže.","Softver je nadograđen uspješno u pozadini, dok ste nešto drugo radili. Želite da uradite nadogradnju?"];	
var netUpdateButtonText = ["Preuzimanje", "Najnovije informacije/verzije", "Kasnije", "Nikad", "OK","Nastavi"];	
var autoDetectPrompt = ["Pronađena je nova verzija softvera XXXX. Želite li sad da je preuzmete? Ovo može potrajati neko vrijeme, zavisno od statusa Vaše mreže.","Pronađena je nova verzija softvera XXXX. Želite li izvršiti ažuriranje sad?","Proces nadogradnje je zadnji put bio prekinut od strane mreže. Trebate uraditi nadogradnju ponovo.",                        "Preuzimanje nove verzije softvera XXXX nije završeno. Želite li nastaviti?",                        "Softver je preuzet, želite ažurirati sad?"];	
var sysOptions = ["Elektronsko uputstvo za upotrebu.","Jezik menija.","Tajmer","Zaključaj","Postavke ulaza","Najnovija dostupna verzija određenog programa","Lokacija","HbbTV način","Kolačići","Zajednički interfejs","Napredne postavke","Resetuj prodavnicu","LED Indikator","Trenutačno uključivanje","Auto shop mode","Area","Demo način rada"];
var sysResetDes = "Jeste li sigurni da želite uraditi odabranu radnju?";	
var sysMenuLangOptions = ["Jezik","Preferirani jezik zvuka","Drugi preferirani jezik zvuka"];	
var sysTimerOptions = ["Vremenska zona","Ime regije","Sat","Tajmer za automatsko isključivanje","Automatska pripravnost", "Regija države"];	
var sysTimeZone = ["Po načinu emitovanja","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00","GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30","GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00","GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00","GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00","GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00","GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];	
var sysTimeZoneLA = ["Kao emiter","Regija1","Regija2","Regija3","Regija4","Regija5"];	
var sysTimeZoneNA = ["*","*","*","*","*","*","*","*","*"];	
var sysSleepTimer = ["Isključeno","10 min.","20 min.","30 min.","40 min.","50 min.","60 min.","90 min.","120 min."];	
var sysStandby = ["Isključeno","4 sata","6 sata","8 sata"];	
var sysRegionName = ["Madrid","Kanarska Ostrva"];	
var sysClockOptions = ["Automatska sinhronizacija","Datum","Vrijeme","Uključivanje tajmerom","Tajmer","Uključivanje na kanalu","Isključivanje tajmerom","Tajmer","Ljetno računanje vremena"];	
var sysTimer = ["Isključeno","Dnevno","Jednom"];	
var sysInputSet = ["Bez etikete","DVD","Blu-ray","HDD","DVDR","HD rec.","Igrica","VCR","PC","Digital STB","HD digital STB","Kamera","Snimač","Ostalo"];	
var sysAvVideoInput = ["Automatski","RGB_CVBS","RGB","CVBS","S-Video"];	
var sysUpdate = ["Preko USB-a","Preko mreže","Preko kanala"];	
var sysUpdateDes = [" "," "," ","Ne može se naći novi program u emitovanju uživo!","Pronađena je nova verzija softvera XXXX. Želite li izvršiti ažuriranje sad?","Molimo Vas priključite USB privjesak.","Provjera softverske datoteke neuspješna, pokušajte ponovo.","Ažuriranje Ovo će trajati neko vrijeme da se završi, nakon toga TV će se automatski ponovo uključiti!","Program je uspješno ažuriran.\nTV će se ponovo automatski uključiti!","Pronađena je nova verzija softvera XXXX. Želite li sad da je preuzmete? Ovo može potrajati neko vrijeme, zavisno od statusa Vaše mreže.","Preuzimanje","Softver uspješno preuzet. Želite započeti ažuriranje Vašeg TV-a?","Ažuriranje neuspješno!","Traženje fajlova za nadogradnju","Program je uspješno ažuriran.\nSad ponovo uključite TV."];	
var sysProductInfo = ["Sadašnja verzija","Naziv proizvoda","Naziv proizvođača","Naziv postolja"];	
var sysCiDes = ["CI kartica nije pronađena."];	
var sysAdOptions = ["DivX(R) prijava","DivX(R) odjava","T-Link","Greška pri autorizaciji","Potvrda o odjavi","Potvrda o iznajmljivanju","Iznajmljivanje isteklo"];	
var sysRegistDes = ["Morate prijaviti Vaš uređaj da biste gledali DivX(R) zaštićene video materijale.","Kod za prijavu:","Prijavi se na: http://vod.divx.com"];	
var sysDregistDes = ["Odjavni kod:","Odjavi se na: http://vod.divx.com","Nastavite sa prijavom?"];	
var mediaAuthorization = ["Vaš uređaj nije autorizovan da reprodukuje ovaj DivX(R) zaštićeni video."];	
var deregistrationConfrimation = ["Vaš uređaj je već prijavljen.","Jeste sigurni da se želite odjaviti?"];	
var rentalConfirmation = "DivX(R) iznajmljeni materijal je upotrijebio XXXX od YYYY pregleda. Nastaviti?";	
var rentalExpired = "DivX(R) iznajmljeni materijal je upotrijebio XXXX od YYYY pregleda. DivX iznajmljivanje je isteklo.";	
var parentalRatingLA = ["Roditeljska ocjena","Starosna ocjena","Ocjena sadržaja"];
var parentalRatingNA		= ["***","***","***","***","***","***","***","***"];
var parentalRatingOptionUS		= ["***","***","***"];
var sysTVRatingUS=["***","***","***","***","***"];
var sysMPAAUS=["***","***","***","***","***","***"];
var parentalRatingOptionCanada		= ["***","***","***"];
var sysCanadaEng=["***","***","***","***","***","***"];
var sysCanadaFre=["***","***","***","***","***",""];
var sysResetRRT=["***"];
var ageRatingOptions = ["L","10","12","14","16","18"];	
var contentRatingOptions = ["Isključeno","Droga","Nasilje","Seks","Nasilje i droge","Seks i droge","Nasilje i seks","Nasilje, seks i droge"];	
var sysLockOptions = ["Zaključavanje kanala","Zaključavanje u vremenskom intervalu","Roditeljska ocjena","Zaključavanje ulaza","Zaključavanje prednje ploče","Zaključavanje instaliranja","Promijenite lozinku","Maksimalna jačina zvuka","Očisti sve"];	
var sysTimeIntervals = ["Tip zaključavanja","Početno vrijeme","Završno vrijeme"];	
var sysRatingOptions = ["Nijedno","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","Ocjena: samo za odrasle (Španija)"];	
var changePass = ["Promijenite lozinku","Nova lozinka","Potvrdite lozinku"];	
var changePassDes = ["Lozinka pogrešna.\nUnesite je ponovo.","Lozinka se ne slaže.\n Unesite ponovo!","Lozinka uspješno postavljena!","Ovaj kod je suviše jednostavan da bih bio upotrebljen kao lozinka.\nUnesite ponovo."];	
var sysPowerOnChOptions = "Odaberite način";	
var sysPowerOnCh = ["Posljednji status","Odabrano od strane korisnika"];	
var netWlessSecu = ["Otvorite","WEP","WPA/WPA2-PSK"];	
var netWlessSecu2 = ["Nijedno","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK","Nije podržano"];	
var netWlessSecu3 = ["Nijedno","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Nije podržano"];	
var netOptions = ["Internetska veza","Interfejs","Bežične postavke","IP postavke","Informacije","Testiranje veze","DLNA","TV daljinski upravljač","Postavke za Netflix","WiFi prikaz","Tip adrese","IP adresa","Maska podmreže","Zadani mrežni prolaz","Primarni DNS","Sekundarni DNS","SSID","BSSID","Unesite SSID:","Korisnički ID"];	
var chEditDes = ["Dupliran broj kanala!","Pritisnite crvenu tipku kako biste obrisali trenutačni simbol!","Netačni brojevi kanala."];	
var chEpgNoProgram = "U ovom momentu ne postoje informacije za program, prvo pretražite kanale!";	
var chEpgWords = ["Programski vodič","Ne postoje podaci za program.","Kanal zaključan!","Nema detalja o programu.","Nema titla za program."];	
var chEpgBooking = ["Informacije rasporeda", "Broj kanala","Datum početka","Početno vrijeme","Završno vrijeme","Tip ponavljanja","Tip rasporeda","Dodajte raspored","Zamijenite","Promijenite","Dodajte/Izmijenite"];	
var epgHotKey = ["Prethodni dan","Sljedeći dan","Filter","Lista rasporeda","Dodajte raspored"];	
var chEpgBookRemind = ["Netačno vrijeme početka","Netačno vrijeme završetka","Duplirani raspored","Uspješno spašeno.","Uspješno obrisano."];	
var chSchePara = ["Lista rasporeda","Početno vrijeme","Datum početka","Titl programa","Naziv kanala","Trajanje","Ponovi","Raspored","Uredi","Izbriši"];	
var dateTimer = ["Jednom","Dnevno","Sedmično"];	
var scheduleDeleteReminds = "Želite da obrisati ovaj raspored?";	
var scheduleNoLists = "Nema liste rasporeda. Da dodate jednu, pritisnite tipku \"Crveno\".";	
var chListWords = ["Lista kanala","Odaberite listu","Način rada prijemnika","Dodajte u omiljene","Uklonite","Odaberite listu kanala","Odaberite način prijemnika","Zamjena"];	
var chListType = ["Sve","Digitalni","Analogni","Radio","Slobodno","Omiljeni"];	
var chAutoScanOptions = ["Odaberite operatera","Tip kanala","Automatsko pretraživanje"];	
var souSoundType = ["Netačno","Mono","Mono","Stereo","Stereo","SAP","SAP","Dual1","Dual2","Dual2","Nicam Mono","Nicam Stereo","Nicam dual1","Nicam dual2","Nicam dual","Mono","LL","RR","LR"];	
var souPreset = ["Muzika","Film","Glas","Standardno","Privatno"];	
var picAdRgbMode = ["Isključeno","Samo crveno","Samo zeleno","Samo plavo"];	
var picAdOptions = ["Smanjenje buke","MPEG NR","Način RGB","Dinamični kontrast","LED jasnoća pokreta","Nijansa kože","Način filma","Način igrica","Temperatura boje","Balans bijele","Zamrzni sliku","Rastezanje crne","Područje ekrana izvan displeja","Gama","HDMI način","Balans bijele 10P","Dodatak boji","Smanjenje zamagljenja","Smanjenje treskanja","Prostor boja","Jasnoća pokreta"];	
var pic10Pwhite = ["Interval","Crvena","Zelena","Plava","Resetovanje","Boja","Žuta","Cijan","Magenta"];	
var picMotionClarity = ["Način pokreta","Interpolacija pokreta","LED jasnoća pokreta","Smanjenje zamagljenja","Smanjenje treskanja","Resetovanje"];	
var picMotionMode = ["Film","Glatko","Jasno","Sport","Kupac"];	
var picResetDes = "Sve osobne postavke biće resetovane. Jeste li sigurni da želite uraditi odabranu radnju?";	
var pic10PReset = "Jeste sigurni da želite da resetovati 10P balans bijele?";	
var picMotionReset = "Želite li resetovati jasnoću pokreta?";	
var picColorSpaceReset = "Jeste sigurni da želite resetovati prostor boja?";	
var picOptions = ["Podešavanje slike","Pozadinsko svjetlo","Svjetlina","Kontrast","Gustoća","Nijansa","Oštrina","Temperatura boje","Način ekrana","Automatski format","Sportsko poboljšanje","3D","3D navigacija","ECO podešavanja","Geometrija","Napredne postavke","Resetovanje slike"];	
var picSize = ["Format 16:9", "Format 4:3", "Format 14:9", "Široka ekranska projekcija","Zum 16:9", "Povećanje zuma 16:9","Zum 14:9","Razvučen zum","Široki zum","Zum 2","Široki zum 2","Prirodno odgovarajući ekran","Tačka po tačka","Original","Panorama"];	
var others = ["Jačina","Emitovanje","Lozinka","Status","Sačuvajte","Zamijenite","Počnite","Izlaz","Tražite","Izbriši","Nijedno","Automatski","Pretražite","Sigurnost","Povežite","Osvježite","Ponovite","Zaustavite","Postavke","Kanali","Uredi","Ubacite","Signal","Završeno","Stereo","Zvučni","Porijeklo","Nema zvuka","Savjeti","Resetovanje","Kupac","Podešavanje","Spremite","Korisnik","Zatvorite tastaturu","Sigurnosni način","Svaki dan","PVR lista"];	
var direction = ["Lijevo","Desno","Gore","Dolje"];	
var audioType = ["MPEG","DOLBY AUDIO"/*"AC3"*/,"MPEG4","AAC", "DOLBY AUDIO"/*"AC3P"*/,"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD"," "," "," "," "," "," ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2","HE-AAC_V4","Nepoznat"];
var soundChannels = ["Nepoznat","Mono","Sub","Dual Mono","Stereo","Stereo Sub","Stereo Dolby Surround","Surround 2Ch","Surround","3.0Ch","4.0Ch","5.0Ch","Mono Lfe","Dual Mono Lfe","Stereo Lfe","Surround 2Ch Lfe","Surround Lfe","3.1Ch","4.1Ch","5.1Ch","7.1Ch","Višestruka podrška stereo kodova","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Lijevo","Desno","Ostali"];	
var prompts = ["Podesite postavke za sliku koje najbolje odgovaraju prostoru u kojem gledate.","Podesite nivoe svjetline. Što je bliže do 100, to je svjetlije.","Podesite nivoe kontrasta. Što je bliže do 100, to su veće razlike između tamnoće i svjetline slike.","Podesite nivoe gustoće. Što je bliže do 100, boja je jača.","Podesite nivoe oštrine. Što je bliže do 100, detalji su jasniji.","Podesite nivo pozadinskog osvjetljenja. Što je bliže do 100, ekran je svjetliji.","Podesite nivoe nijansi. Ova postavka određuje nijanse boja.","Odredite format slike koji najboje odgovara programu koji gledate.","Konfigurišite opcije za uštedu energije.","Podesite postavke za geometriju ekrana kad obavljate povezivanje PC uređaja.","Odaberite napredne postavke za poboljšanje slike.","Vratite sve postavke slike na početno stanje.","Odaberite način zvuka koji Vam najviše odgovara.","Podesite balans jačine zvuka između lijevog i desnog kanala.","Sistem za povraćanje zvuka TruSurround HD omogućava bogatu reprodukciju zvuka i jasnoću na niskim i visokim frekvencijama.","Digitalni format interfejsa povezuje ulaz TV digitalnog zvuka do zvučne opreme kućnog kina.","Odaberite zvučni jezik koji odgovara Vašem privatnom ukusu.","Omogućite osobama sa oslabljenim vidom da uživaju u televizijskim programima.","Testirajte sliku, zvuk i signal Vašeg TV-a.","Odaberite tip liste kanala koji odgovara signalu Vašeg TV-a.","Odaberite jezik programskog titla koji je prikazan na donjem dijelu ekrana.","Pogledajte sadašnji tekst i slike kanala.","Digital Living Network Alliance. Uživajte u muzici, fotografijama i video zapisima preko Vaše kućne mreže sa ostalih uređaja, kao što je PC.","Prikažite na TV-u sadržaj Vašeg pametnog mobilnog telefona i koristite pametni mobilni telefon kao daljinski upravljač za Vaš TV.","Prikažite sadržaje sa Android uređaja kompatibilnog sa Miracast tehnologijom na ekranu Vašeg TV-a.","Pritisnite opciju ,,Zaključano“ na Vašem TV-u.","Odaberite naziv za Vaš uređaj.","Odaberite ambijent gledanja Vašeg televizora.","Vratite sve sistemske parametre na početno stanje.","Switch off sports mode for more options.","Enhance the environmental contrast","A special mode to enjoy sport games","Enjoy more CEC functions."];
var initialTitle = ["Dobro došli","Početno podešavanje"];	
var initialPrompt = ["Obavite sad početno podešavanje i čeka Vas čitav svijet uzbudljivih iskustava.","Odaberite Vaš jezik:","Odaberite Vašu državu:","Odaberite Vašu lokaciju:","Odaberite tip Vaše mrežne veze:","Odaberite modalitet bežične mrežne veze:","Neuspješno povezivanje sa xxxxxxxxx! Povežite Vaš uređaj u odnosu na sljedeći dijagram ili odaberite ,,Lijevo“ za resetovanje.","Povezani ste sa xxxxxxxxx! Molimo Vas, odaberite ,,Desno“ za nastavak.","1)Vaš TV možda već ima ugrađen bežični adapter\n 2) Ili, ako je bežični USB adapter obezbijeđen, povežite ga sa Vašim TV-om.  Nakon toga, odaberite modalitet bežične mrežne veze","Pretraživanje Pričekajte...","Ne postoji bežični adapter povezan sa TV-om!","Obezbijedite da je zadati PIN kod instaliran u pristupnoj tački prije nego što pritisnete dugme ,,Sljedeće“.","Molimo Vas pritisnite na dugme AP u roku od 120 sekundi prije nego što pritisnete ,,Desno“!","WPS (Wi-Fi zaštićena postavka)","PIN (Lični identifikacijski broj)","PBC (Dugme za konfiguraciju)","Sljedećim sadržajima možete pristupiti samo sa vezom preko mreže. Želite li preskočiti podešavanje mreže?","Postoji novo ažuriranje softvera koje možete preuzeti, ovo može potrajati neko vrijeme zavisno od statusa Vaše mreže.","Ažuriranje Vašeg TV programa će Vam osigurati da možete uživati u najnovijim funkcijama i servisima.","Vi nećete moći da uživate u najnovijim funkcijama i servisima. Želite li preskočiti ažuriranje programa?","Pritisnite desno dugme za nastavak.","U toku ažuriranja, nemojte isključivati TV jer može doći do kvarova.","Odaberite ,,NE“ ako ne želite izvršiti ažuriranje.","Ažuriranje u toku, pričekajte.","Takođe možete ažurirati program u opciji SISTEM/PROGRAMSKO AŽURIRANJE.","Država koju ste odabrali traži postavku lozinke.\nOdredite kod za Vaš TV i potvrdite ga.","Ovaj kod je previše jednostavan.\nUpotrijebite druge brojeve.","Čestitamo! Radnja početnih postavki je završena. Možete modifikovati Vašu konfiguraciju preko glavnog menija i pod-menija koji su povezani.","Odaberite sigurnosni način:","Odaberite način bežične mrežne veze:","Mreža"];	
var initNetCabAndDonRe = ["Mrežni kabl nije povezan, priključite mrežni kabl!","Bežični adapter nije ugrađen ili bežični USB adapter nije obezbijeđen."];	
var initChPrompt = ["Instalacija televizijskih kanala.","Odaberite opciju pretraživanje tipa antene.","Izvršenje automatskog pretraživanja...","Preko antene su pronađeni sljedeći kanali:","Odaberite opciju pretraživanja, način ,,Kablovska“.","Odaberite jednog operatera sa sljedeće liste.","Konfigurišite informacije pretraživanja","Pronađeni su sljedeći kablovski kanali:","Odaberite jednog operatera sa sljedeće liste.","Odaberite satelite za pretraživanje ili uredite odabrane satelite","Obavite podešavanja satelitskih parametara","Pronađeni su sljedeći kanali, a takođe pretraživanje kanala može biti izvršeno ponovo u opciji Kanal/Pretraživanje kanala"];	
var initClockPrompt = ["Prihvatite tačno vrijeme omogućeno preko mreže!","Podesite datum i vrijeme:"];	
var initialOptions = ["Ambijent","Podešavanje mreže","Ažuriranje softvera","Instalacija kanala","Sat"];	
var initialHotkeys = ["Natrag","Odaberite","Sljedeće"];	
var initLocations = ["Kuća","Prodavnica","Odaberite sa načinom za demostraciju"];	
var initNets = ["Ožičen","Bežično","Nemam vezu sa mrežom"];	
var initWireManuals = ["IP adresa","Maska podmreže","Zadani mrežni prolaz","Primarni DNS","Sekundarni DNS"];	
var initSoftUpdates = ["Ažuriraj sad","Ažuriraj kasnije"];	
var initChannelIns = ["Nastavi","Ne želim instalirati kanale"];	
var initChScanTypes = ["Digitalni i analogni","Digitalni","Analogni","Ne želim vršiti pretraživanje"];	
var initChDvbts = ["Antenski ATV kanali:","Antenski DTV kanali:"];	
var initChDvbcs = ["Kablovski ATV kanali:","Kablovski DTV kanali:"];	
var initChDvbss = ["Satelitski kanali:"];	
var initChDvbSOther = ["Ne želim pretraživati satelit"];	
var initEndConnectedStatus = ["Isključen","Povezan s WiFi","Povezan žično"];	
var initEndInstallations = "XXXX kanala instalirano";	
var initEndUpdate = ["Ažurirano"];	
var audioScenes = ["Stolni","Postavljanje na zid"];	
var screenSavers = ["U ovom momentu ne postoje informacije za program, prvo pretražite kanale!","Nema signala!","Šifrovano","Samo podaci","Zvučni program","Nema zvuka i videa.","Nije na raspolaganju","Nema teleteksta","Ne postoje podaci za program.","Program zakjučan!","Program zaključan!\nPritisnite OK i unesite Vaš kod.","Nema detalja o programu.","Program je štetan za maloljetnike.\nPritisnite OK i unesite VaŠ kod.","Kanal zaključan!","Kanal zaključan!\nPritisnite OK i unesite Vaš kod.","Ulaz zaključan!\nPritisnite OK i unesite Vaš kod.","Nije podržano","Ova usluga momentalno nije na raspolaganju","Izlaz zaključan!","Nema titla za program.","Ne funkcioniše","Nema Titl"];
var chBookingPromt = ["Kanal u upotrijebi je određen za snimanje, TV će započeti snimanje.","Zakazani snimak je pronađen.\nPrebacite na XXXX da bi ste započeli snimanje","Kanal u upotrebi ima zabilješku.","Pronađen je zakazani podsjetnik.\nPrebacite na XXXX"];	
var timeUnit = ["Sek","Min"];	
var ciPromt = ["Podaci mreže su se promijenili. Za ažuriranje možete izvršiti pretraživanje novih informacija.",];	
var othersPromt = ["Pričekajte...",];	
var menuOptions = ["Slika","Zvuk","Kanal","Smart TV","Mreža","Sistem","Podrška"];	
var optionOptions = ["Podešavanje slike","Podešavanje zvuka","Zamrzni sliku","T-Link","Vremenski pomak","PVR","Lista rasporeda","Postavke","demo"];	
var optionTLinkPromt = [["Uključivanje je automatsko","Automatska pripravnost","Vodič menija"],["uključeno","u pripravnosti","Pojačalo jačine zvuka"]];	
var powerPromt = ["TV će se uskoro isključiti!\n Pritisnite bilo koje dugme za otkaz."];	
var ttxLanguage = ["Zapadna Evr.","Istočna Evr.","Ruski","Arapski/Jevrejski","Persijski","Arapski","Bjeloruski","Grčki","Turski"];	
var ttxOptions = ["Otkrij","Prolaziti preko podstranica","Jezik","Stranica za alarm","Trenutačne novosti"];	
var weekday = ["Nedjelja","Ponedjeljak","Utorak","Srijeda","Četvrtak","Petak","Subota"];	
var lcnConfflict = "Ovaj program ima probleme sa prijemom. Postoji druga verzija na raspolaganju na programu %d";	
var inShopMode = "Vaš TV je u načinu prodavnice. Za način početne stranice odaberite 'Sistem' i promijenite 'Lokaciju' u meniju.";	
var nitRefresh = "Podaci mreže su se promijenili. Želite li obaviti pretraživanje novih informacija?";	
var picHDMIMode = ["Automatski","Grafika","Video"];	
var glassRemind = ["Spojite Vaše 3D naočare sa TV-om\n(Pritisnite i držite dugme UKLJUČENO na 3D naočarima).","Vaše 3D naočare su povezane sa TV-om","*"];	
var pvrRemind = ["Nemojte izvlačiti USB disk ili prekidati struju."];	
var pvrConName = ["PVR","Programske informacije:",["Zabilješka: Da biste snimili HD kanal, odaberite USB disk (brzine >5,0 MB/s); kako biste snimili SD kanal, odaberite USB disk (brzine >3,0 MB/s).","Snimljeni video je sačuvan u \"pvr\" fascikli."],"Zaustavite","Snimanje","Sat","Minuta","Trajanje","Savjeti","Koristite tipku sa strelicom da odredite dužinu snimanja."];	
var pvrDisRemind = "Ubacite USB disk za snimanje.";	
var pvrRemindWords = ["Želite li izaći?","Želite li prekinuti snimanje i pregledati snimljene datoteke?","USB disk je izvađen.","Nema dovoljno slobodnog prostora.","Nema snimljenih fajlova. Počnite snimati.","PVR nije podržan na šifrovanom kanalu.","Funkcija nije na raspolaganju.","Uspješno spašeno.","Želite li prekinuti proces snimanja i ulazni izvor?","TV će završiti trenutačno snimanje. Želite li izaći?","Potreban je TV signal da bi PVR snimanje radilo ispravno, provjerite Vaš signal."];	
var pvrChangeCh = ["Želite li promijeniti kanal?","Želite li zaustaviti proces snimanja i promijeniti kanal?"];	
var pvrChangeToPIN8 = ["Želite li promijeniti izvor na uređaj koji je povezan na SCART ulaz?",    "Želite li zaustaviti proces snimanja i promijeniti izvor na uređaj koji je povezan na SCART ulaz?"];	
var pvrChangeToCEC = ["Želite li promijeniti izvor na uređaj koji je povezan na HDMI izlaz?",   "Želite li zaustaviti proces snimanja i promijeniti izvor na uređaj koji je povezan na HDMI izlaz?"];	
var pvrGuideJump = ["Želite li ući u EPG?","Želite li zaustaviti proces snimanja i ući u EPG?"];	
var pvrMediaJump = ["Želite li ući u Medije?","Želite li zaustaviti proces i ući u Medije?"];	
var timeshiftExtra = ["Želite li zaustaviti vremenski pomak i promijeniti kanal?","Želite li zaustaviti vremenski pomak i promijeniti izvor na uređaj koji je povezan na SCART ulaz?","Želite li zaustaviti vremenski pomak i promijeniti izvor na uređaj koji je povezan na HDMI izlaz?","Vremenski pomak nije podržan na šifrovanom kanalu.","Želite li zaustaviti vremenski pomak i ući u EPG?","Želite li zaustavite vremenski pomak i uđete u Medije?","Želite li zaustaviti vremenski pomak i promijeniti ulazni izvor?","Ubacite USB disk za snimanje.","Kapacitet USB diska nije dovoljan.","TV će zaustaviti trenutačni vremenski pomak. Želite li izaći?"];	
var timeshiftStatus = ["Brzo unatrag","Zaustavite","Reprodukuj","Pauziraj","Brzo naprijed"];	
var pvrPowerOffRemind = ["Snimanje u pripravnosti","u pripravnosti","TV je sad u procesu snimanja, želite li nastaviti sa snimanjem kad je TV u načinu pripravnosti?"];	
var timeshiftInitTitle = "Podešavanje USB diska";	
var timeshiftInitReminds = ["Čarobnjak je upotrijebljen da podesi vremenski pomak na USB disku. Odaberite način podešavanja.", "Za bolje izvođenje Vam preporučujemo da formatirate USB disk. To će izbrisati sve podatke.", "Odaberite veličinu datoteke za vremenski pomak.", "Formatiranje", "Nema dovoljno slobodnog prostora.", "Kreiranje datoteke vremenskog pomaka", "Testiranje brzine", "Brzina USB diska je previše spora (< %f MB/s) za funkciju vremenskog pomaka.", "USB disk je spreman za vremenski pomak. Ali Vam mi preporučujemo da ga promijenite (na brzinu >%f MB/s) za bolje izvođenje.", "USB disk je spreman za vremenski pomak."];	
var timeshiftInitButtons = ["Format","Preskoči","Otkaži","OK","Završeno","Izlaz"];	
var timeshiftInitOther = ["Brzina USB diska:","MB/s"];	
var selectChoice = "Jeste li sigurni da želite uraditi odabranu radnju?";	
var chAtvStore = "Sačuvajte kao XXXX";	
var chEpgFirstGenreUK = ["Film","Novosti i činjenice","Zabava","Sport","Za djecu","Obrazovanje","Životni stil","Drama"];	
var homePageTitleList = ["APPS","TV","VIDEO ZAPISI","Početna strana"];	
var homePageFavAndAllName = ["Omiljene aplikacije","Sve aplikacije"];	
var homePageBackUp = ["Elektronsko uputstvo za upotrebu.","Vodič je uključen"];	
var homePageRemind = ["Sve funkcije su na raspolaganju samo nakon uspostavljanja veze s mrežom.","Vaš TV nema još nijedan kanal. Programi su dostupni poslije pretraživanja kanala.","Nema programa","Tražiti kanale sad?"];	
var homePageHistory = ["Historija"];	
var miracastTitle = ["WiFi prikaz","TLC uređaj"];	
var miracastRemind = ["WiFi prikaz Vam dozvoljava da podijelite ekran i zvuk Vašeg uređaja kao što je pametni mobilni telefon ili tablet na Vaš TV, bežično (npr. bez kablova). U isto vrijeme ovo omogućava da gledate na Vašem TV-u ono što se prikazuje na Vašem pametnom mobilnom telefonu ili tabletu. Na primjer, možete pokrenuti video zapis na Vašem pametnom telefonu i prikazati ga simultano na Vašem TV-u, ili upotrijebiti Vaš tablet kao upravljač za igrice sa sadržajem koji je prikazan na velikom ekranu Vašeg TV-a.","WiFi prikaz na TV-u je spreman, počnite dijeliti ekran Vašeg uređaja sa TV-om.","Uspostavljanje veze. Pričekajte!","Veza neuspješna!","Neuspješno povezivanje. Provjerite!"];	
var homePageLittleWin = ["Postavke","Mediji","Omiljeni kanali","Smart TV","EPG"];	
var hbbtvStopRemind = ["Želite li zaustaviti reprodukciju?"];	
var colorSystem = ["Automatski","PAL","SECAM","NTSC"];	
var deviceTitleTipsText = "Pritisnite ≡ za više informacija";	
var emptyListInfo = "USB disk nije povezan sa TV-om!";	
var optionVideoListArray_1 = ["Podešavanje slike", "Podešavanje zvuka", "Način reprodukcije", "Način ekrana", "3D način",   "Prekidač za lijevo - desno", "Dubina polja", "Titl", "Zvučna numera", "Titl", "Poglavlje", "Informacije"];	
var optionVideoListArray_2 = ["Podešavanje slike", "Podešavanje zvuka", "Način reprodukcije", "Način ekrana",   "Titl", "Zvučna numera", "Titl", "Poglavlje", "Informacije"];	
var bottomTipsText = ["Reprodukuj/Pauziraj", "Brzo unatrag", "Brzo naprijed", "Spisak izvođenja", "Postavke"];	
var picturePresetArray = ["Standardno", "Dinamično", "Prirodno", "Film", "Privatno"];	
var videoPlayModeArray = ["Ponovi sve", "Ponovi jednu", "Normalna"];	
var screenModeHDArray = ["16:9", "4:3", "Široka ekranska projekcija", "Široki zum", "Zum 2", "Široki zum 2", "Razvučen zum", "Automatski"];	
var screenModeSDArray = ["16:9", "4:3", "Široka ekranska projekcija", "Zum 14:9", "Zum 16:9", "Povećanje zuma 16:9", "Automatski"];	
var Mode3DArray = ["Isključeno", "2D-na-3D", "Jedna pored druge", "Jedna iznad druge", "Prebacivanje sa jedne veze na drugu"];	
var videoOptionListArray = ["Isključeno", "Numera", "Titl", "Titl", "Poglavlje"];	
var subMenuTitleText = "Titl";	
var langMenuTitleText = "Jezik zvuka";	
var titleMenuTitleText = "Titl";	
var mode3DMenuTitleText = "3D način";	
var langInfoText = "Numera";	
var STOP_RESUME_INFO = "Zaustavi-Nastavi";	
var playListName = "ime";	
var eb_tips = "Savjeti";	
var ok_button = "OK";	
var eb_info = ["Zvučna greška pri dekodiranju.", "Pogrešno dekodiranje videa.", "Zvučni format nije podržan.",    "Video format nije podržan.", "Ne mogu otvoriti ovu datoteku.", "Greška pri reprodukciji, pokušajte ponovo.",   "Format datoteke nije podržan.", "Uhh! Plejer je prestao da radi.",   "Putanja datoteke ne postoji ili je nevažeća.\n Ponovo ubaci uređaj za pohranu i pokušajte ponovo.",   "Nastaviti reprodukovanje sa prethodnog\n statusa reprodukcije?"];	
var picturePlayErrorTips = ["Nije uspjelo učitavanje!!!","Slika je prevelika!!!","Greška na mreži!!!","Greška niti!!!","Greška u parametrima!!!","Nepoznata greška!!!"];
var frameTitleText = "Novi uređaj";	
var eb_quit_info = "Jeste li sigurni da želite završiti?";	
var eb_yes = "Da";	
var eb_no = "Ne";	
var offinfo = "Isključeno";	
var naInfo = "Prazno";	
var consoleInfoArray = ["Brzo unatrag", "Brzo naprijed", "Reprodukuj/Pauziraj", "Spisak izvođenja"];	
var cantOperateText = ["Funkcija nije podržana."];	
var chapterChangeInfo = "Samo poglavlja od 1 do XXXX su dostupni.";	
var metaDataArray = ["Naziv/Uredi metapodatke:", "Poglavlje metapodataka:", "Zvučni metapodaci:", "Titl metapodataka:"];	
var metaTitleInfo = "Titl";	
var metaChapterInfo = "Poglavlje";	
var videoLoadingInfo = "Analiziranje...";	
var listLoadingInfo = "Učitavanje...";	
var pgInfo = "Niska ocjena:";	
var fileNameText = "ime";	
var fileDateText = "Datum";	
var fileSizeText = "Veličina";	
var fileDurationText = "Trajanje";	
var fileDirectorText = "Režiser";	
var fileCopyrightText = "Autorsko pravo";	
var fileArtistText = "Umjetnik";	
var fileAlbumText = "Album";	
var fileGenreText = "Žanr";	
var fileYearText = "Godina";	
var fileGenreText = "Žanr";	
var mainListArray = ["Sve", "Slika", "Video", "Muzika"];	
var sortArray = ["ime", "Datum"];	
var parserArray = ["Normalna", "Rekurzivno"];	
var emptyTipsInfo = "Uhh. Nije pronađena podržana datoteka.";	
var emptyFolderInfo = "Uhh. Nije pronađena podržana datoteka.";	
var sortName = "Sortiraj po";	
var parserName = "Analizator za način rada";	
var divx_str1 = "DivX(R) prijava";	
var divx_str2 = "DivX(R) odjava";	
var infor_str = "Informacije";	
var quickMenuEmptyText = "Nema dostupnih opcija.";	
var musicSoundPresetArray = ["Standardno", "Film", "Muzika", "Jasan glas", "Privatno"];	
var musicInformationArray = ["ime", "Umjetnik", "Album", "Žanr:", "Godina:", "Trajanje:"];	
var playListName = "ime";	
var playTipsInfo = ["Vi reprodukujete prvu datoteku.", "Vi reprodukujete zadnju datoteku."];	
var musicNameInfo = "ime";	
var musicArtistInfo = "Umjetnik";	
var musicAlbumInfo = "Informacije";	
var optionSoundPresetInfo = "Podešavanje zvuka";	
var optionBGMInfo = "Reprodukcija u pozadini";	
var optionAudioOnlyInfo = "Samo zvuk";	
var optionInfoText = "Informacije";	
var remotePhoneConnecte = "XXXX je povezan na TV!";	
var tvRemoteTitle = "TV daljinski upravljač";	
var tvRemoteDeveloper = "Aplikacija je razvijena od strane TCL";	
var tvRemoteDeviceTitle = "Naziv uređaja:";	
var remoteOption = ["Razmjena medija","Daljinski upravljač","Pomoć","O tome","Smart Connect"];	
var remotebottom = "Preuzmite \"TV Remote\" na Vaš pametni mobilni telefon";	
var remoteStage = ["Android","iOS"];	
var sharingReminds = ["Razmjena fotografija, video zapisa i muzike sa TV-om preko mobilnog telefona.","Koraci: \n   1. Kliknite \"TV Remote\" na mobilnom telefonu. Povežite mobilni telefon sa TV-om preko iste WiFi mreže;\n   2. Kliknite na\"Razmjena medija\" za pretraživanje multimedijalnih datoteka;\n   3. Pošaljite medije TV-u za reprodukciju (sa jednom od ovih opcija )","a) Prenesite i spustite fasciklu/fajl na TV ikonu na gornjem dijelu ekrana;\n      b) Zaljuljajte mobilni telefon prema TV-u da pokrenete prvu datoteku;\n      c) Reprodukujte medije na telefonu i pritisnite ikonu za dijeljenje na TV-u;","4. U toku reprodukcije na TV-u, protresite telefon kako bi reprodukovali prethodnu ili sljedeću datoteku."];	
var controlReminds = ["Koristite mobilni telefon kao daljinski upravljač kako biste upravljali TV-om."," ","Koraci: \n   1. Kliknite \"TV Remote\" na mobilnom telefonu. Povežite mobilni telefon sa TV-om preko iste WiFi mreže;\n   2. Kliknite na \"Daljinski upravljač\" kako biste upravljali TV-om."];	
var helpDeviceWords = "Interakcija više ekrana";	
var helpBottom = "U eri cloud tehnologije, pametni uređaji kao što su mobilni telefon i TV, su uzajamno povezani. Sa Vašom porodicom dijelite medije na više ekrana i kontrolišite TV kroz mobilni telefon!";	
var helpReminds = ["Pripreme\n   1. Preuzmite i instalirajte \"TV Remote\" sa Google Play ili Apple Store.\n   2. Povežite mobilni telefon sa TV-om preko iste WiFi mreže."," ","Preporučeni mobilni telefon\n   1. CPU: iznad 800 MHz\n   2. Pohranjivanje: najmanje 80 MB slobodnog prostora"," ","Odricanje od odgovornosti\n   Ako \"TV Remote\" nije dostupna na Vašem mobilnom telefonu, kontaktirajte proizvođača telefona."];	
var helpButtons = ["Prethodni","Sljedeće"];	
var aboutReminds = ["TV daljinski upravljač","Aplikacija je razvijena od strane TCL"];	
var aboutExit = "Izlaz";	
var smartReminds = ["Brza i pametna veza između TV-a i mobilnog telefona."," ","Koraci \n   1. Povežite TV i pametni mobilni telefon na isti LAN. Kliknite \"TV Remote\" na pametnom mobilnom telefonu.\n   2. Kliknite \"Smart Connect\" da skenirate QR kod.\n   3. Sa TV-om koji se gleda na način emitovanja, pritisnite tipku INFO na Vašem daljinskom upravljaču u trajanju od 4 sekunde, pojaviće se QR kod za punu veličinu ekrana.",];	
var smartQRReminds = ["Molimo Vas kliknite \"Smart Connect\" u \"TV Remote\" na Vašem pametnom mobilnom telefonu i skenirajte QR kod da bi ste brzo povezali TV i mobilni telefon.","QR kod sadrži informacije LAN računa. Molimo Vas sigurno ga čuvajte."];	
var consoleTipArray = ["Prethodni","Sljedeće","Konzola","Spisak izvođenja"];	
var optionInfoArray = ["Podešavanje slike","Način reprodukcije","Trajanje","Efekat","Informacije"];	
var playModeArray = ["Normalna","Pomiješajte","Ponovi"];	
var durationArray = ["Kratki (5s)", "Srednji (10 s)", "Dugi (15 s)"];	
var effectArray = ["Nijedno", "Rotirajte", "Obrišite desno", "Obrišite lijevo", "Obrišite gore", "Obrišite dole", "Okvir unutra", "Okvir napolje", "Slučajno"];	
var infoArray = ["Ime:","Veličina:","Datum:","Lokacija"];	
var picturePresetBarTitleInfo = "Podešavanje slike";	
var picturePresetBarArray = ["Standardno","Dinamično","Studio","Film","Privatno"];	
var upTipsInfo = "Pomjerite sliku";	
var consoleTipsArray = ["Konzola","Prethodni","Sljedeće","Spisak izvođenja","Postavke"];	
var pictureMoveTipsArray = ["Ponovo pritisnite DESNO da bi ste reprodukovali sljedeću sliku","Ponovo pritisnite LIJEVO kako biste reprodukovali prethodnu sliku","Ponovo pritisnite DOLJE kako biste prikazali listu izvođenja"];	
var optionPvrListArray = ["Podešavanje slike","Podešavanje zvuka", "Način ekrana", "3D način", "Titl", "Zvučna numera", "Informacije"];	
var titleSpanFirstArray = ["Upravljanje i veza","Osnovne operacije","APPS","TV","Postavke","FAQ"];	
var titleSpanSecondArray = [["Daljinski upravljač","Tipke na panelu","Lagana navigacija","TV veza","TV veza","TV veza","Bežično"],["Pokretač","Statusna traka","Porijeklo"],["Aplikacije za reprodukciju","Mediji","TV daljinski upravljač"],["Podesite kanal i jačinu","Lista kanala","EPG","Instaliranje kanala","Omiljeni kanali"],["Podešavanje slike","Podešavanje zvuka","Podešavanje kanala","Najnovija dostupna verzija određenog programa","Jezik","Roditeljsko zaključavanje"],["Najčešća pitanja","Najčešća pitanja","Rješavanje problema","Rješavanje problema","Odredbe i uslovi"]];	
var contentSpan1_1Array = [["NAPAJANJE:","IZVOR:","POSTAVKE:","OPCIJE:","NAZAD:","INFO:","POČETNA STRANICA:","IZLAZ:","LISTA:"],    ["Izvršava uključivanje ili način pripravnosti",        "Odaberite ulazni izvor",        "Da biste prikazali meni za postavke",        "Da biste prikazali meni opcija",        "Vratite se na prethodni meni ili izađite pokrećući APP",        "Pokazuje informacije o programu",        "Da biste pristupili početnoj stranici Pametnog TV-a",        "Vratite se na prethodni meni ili izađite pokrećući APP",        "Pokazuje listu kanala"]];	
var contentSpan1_2Array = ["Prethodni kanal","Sljedeći kanal","Povećajte jačinu zvuka","Smanjite jačinu zvuka","Ide na Početnu stranicu","Potvrdi opciju","U pripravnosti/Uključeno"];	
var contentSpan1_3Array = ["OK/Vodič","Kanal gore","Kanal dolje","Jačina zvuka dolje","Jačina zvuka gore","Dostupno kao simbol strelice za neke funkcije."];	
var contentSpan1_4Array = ["LAN","HDMI (MHL)","HDMI","HDMI (ARC)","AV OUT adapter","LAN","Pametni telefon","PC/STB uređaj/DVD","Zvučni pojačivač","Zvučni pojačivač/Monitor","Moguće je da Vaš TV ne sadrži sve utičnice."];	
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Slušalice","AV IN adapter","SPDIF","CMP AUDIO IN adapter","CMP IN (YPbPr) adapter","USB uređaji","USB uređaji","Slušalice","DVC/ Konzola za igrice/STB uređaj/DVD","Zvučni pojačivač","DVC/ Konzola za igrice/STB uređaj/DVD","Moguće je da Vaš TV ne sadrži sve utičnice."];	
var contentSpan1_6Array = ["Zajednički interfejs","SD","VGA","SCART","Mini SCART","ANTENNA IN","CI  CAM","SD kartica","PC","Mašina informacija/DVD","Antena/Kablovska/Satelitska","Moguće je da Vaš TV ne sadrži sve utičnice."];	
var contentSpan1_7Array = ["Tablet","PC","Usmjerivač","Telefon","TV"];
var contentSpan1_8Array = ["Funkcija za prebacivanje/uključivanje","Pritisnite dugo da idete na programator za mirovanje","Dolje","Gore","Glasnoća/kanal/izvor"];
var contentSpan2Array = [["Da dobijete prikaz početne stranice pritisnite tipku strelice.","Nakon toga pritisnite OK da bi ste gledali jedan od izdvojenih programa ili aplikacija."],["Prikaži datum, mrežu i uređaje itd. u gornjem desnom uglu ekrana."],["Odaberite izlazni izvor sa drugih uređaja koji su povezani sa TV-om kroz različite ulazne otvore, kao što su TV, AV, HDMI, itd."]];	
var contentSpan3Array = ["Uživajte i pogledajte Vaše omiljene aplikacije preko Pametne TV stranice.","Pregledajte fotografije, gledajte video i puštajte muziku sa USB uređaja za pohranjivanje.","Povežite Vaš TV i pametni mobilni telefon na isti LAN.","Kliknite nScreen ili TV Remote na pametnom telefonu ili tabletu.","Podijelite fotografije, video zapise i muziku na više ekranskih prikaza sa Vašom porodicom i upravljajte Vašim TV-om preko Vašeg pametnog mobilnog telefona."];
var contentSpan4Array = [["Pritisnite P+/P- da promijenite kanale.","Pritisnite V+/V- kako biste podesili jačinu."],["Na daljinskom upravljaču pritisnite LIST da pregledate poređane kanale.","Pritisnite GORE/DOLJE da izaberete Vaš kanal."],["EPG je vodič na ekranu koji prikazuje raspored TV programa. Možete upravljati, odabrati, pregledavati i snimati programe."],["Tražite i instalirajte kanale."],["Dodajte ili uredite Vaše omiljene kanale u listi kanala."]];	
var contentSpan5Array = ["Uživajte u Vašim omiljenim programima preko video aplikacija."];	
var contentSpan6Array = [["Pritisnite Opcije i onda odaberite Podešavanja za prikaz opcija sistemskih postavki.","Unesite postavke za sliku kako biste podesili vrijednosti."],["Pritisnite Opcije i onda odaberite Podešavanja za prikaz opcija sistemskih postavki.","Uđite u zvučne postavke kako biste podesili opcije."],["Pritisnite Opcije i onda odaberite Podešavanja za prikaz opcija sistemskih postavki.","Uđite u podešavanje kanala da odredite opcije."],["Ažurirajte Vaš TV, kad je dostupan novi softver."],["Možete odabrati Vaš omiljeni jezik menija."],["Omogućava roditeljima da zaključaju kanale ili programe koji nisu prikladni za djecu."]];	
var contentSpan7_1Array = [["Nema slike, nema zvuka","Provjerite da li osigurač ili prekidač kola radi.","Priključite drugi električni uređaj u električnu utičnicu da biste bili sigurni da radi ili da je bio uključen.","Strujni priključak je u lošem kontaktu sa strujnom utičnicom.","Provjerite izvor signala."],["Slika normalna, nema zvuka","Pritisnite dugme za jačinu V+ kako biste povećali jačinu.","Postavka zvuka je pogrešna.","Signalna greška sa emitera."],["Normalan zvuk, nema slike","Podesite svjetlinu i kontrast.","Signalna greška sa emitera.","Provjerite da li je samo u zvučnom načinu."]];	
var contentSpan7_2Array = [["Miješanje radio frekvencije","Ovo mješanje proizvodi radnju talasanja ili dijagonalne pruge, a u nekim slučajevima gubitak kontrasta u slici. Pronađite i otklonite izvor miješanja radio frekvencije."],["Nema boje","Podesite postavke za boju.","Pokušajte drugi kanal. Moguće je da primite crno bijeli program."],["Daljinski upravljač je neispravan.","Promijenite baterije.","Baterije nisu ispravno instalirane. Glavni strujni prekidač TV-a nije povezan."]];	
var contentSpan7_3Array = [["Sadržaj USB uređaja nije prikazan.","Provjerite da je USB uređaj za pohranjivanje kompatibilan sa TV-om.","Provjerite jesu li formati datoteka zvuka i slike podržani od TV-a."],["Reprodukcija bez zvuka","Zvučni format video zapisa nije podržan od strane TV plejera."],["Datoteke se ne reprodukuju ujednačeno","Izvršenje transfera USB uređaja za pohranjivanje može ograničiti brzinu transfera podataka na TV."]];	
var contentSpan7_4Array = [["Kad izvršavam ažuriranje softvera, na šta posebno trebam obratiti pažnju?","Nemojte prekidati struju kad ažurirate softver.","Kad ažurirate softver, izbjegavajte bilo koju radnju Vašim daljinskim upravljačem.","Budite strpljivi, zato što proces ažuriranja softvera može duže potrajati."],["Ne postoje izrazite promjene TV interfejsa nakon ažuriranja softvera.","U određenim uslovima, SW ažuriranje ne mora ažurirati samo nove informacije ili dodati nove funkcije nego takođe da poboljša rad TV uređaja bez izrazite promjene interfejsa. Takođe ponekad TV interfejs može ostati netaknut."]];	
var termsTitle = "Odredbe i uslovi";	
var termsConditions = ["Sadržaj i servisi ( kolektivno \" Licencirane aplikacije\") koje su Vam na raspolaganju kroz ovaj TV komplet (ovaj \"Uređaj\") su licencirane, nisu prodane, pod određenim odredbama i uslovima samo za upotrijebu. Snabdjevači licencirane aplikacije ( svaki \"Snabdjevač aplikacije\") zadržava sva prava, koja Vam nije izričito odobrio. \n 1.Obim licence \n Licenca Vam je odobrena za licenciranu aplikaciju od strane relevantnog Snabdjevača aplikacije, koja je ograničena na licencu koja se ne može prenijeti za upotrebu Licencirane aplikacije na Uređaju koji Vi posjedujete ili njim upravljate. Ne smijete distribuirati ili omogućiti Licenciranu Aplikaciju dostupnu preko mreže gdje bi mogla biti upotrijebljena sa više uređaja u isto vrijeme. Ne smijete izdavati, davati u zakup, pozajmljivati, prodavati, re-distribuirati ili davati pod licencu, Licenciranu aplikaciju. \n Potvrđujete i slažete se da kompletna Licencirana aplikacija i svi uključeni sadržaji u tome koji su dostupni kroz Uređaj koji pripada Snabdjevaču aplikacije i/su zaštićeni važaćim zakonom o intelektualnim vlasništvu. Ne smijete modifikovati, kopirati, dekompilirati, vršiti obrnuti inženjering, rastavljati, ponovno objavljivati, otpremati, objavljivati, prenositi, prevoditi, pokušavati da izvučete izvorni kod, kreirati derivativne radove, ili na drugi način iskorištavati bilo koju Licenciranu Aplikaciju ili bilo koje ažuriranje ili bilo koji dio o tome. Ako prekršite ovo ograničenje, možete podlijegati tužbi ili štetama. Odredbe dozvole će upravljati bilo kojim novim informacijama datim od strane Snabdjevača aplikacije da zamjeni i/ili dopuni originalnu Licenciranu aplikaciju, osim ako je takva nadogradnja popraćena posebnom dozvolom, i u tom slučaju odredbe te dozvole će upravljati. Vi ćete biti potpuno odgovorni za bilo koje i sve troškove ( ako postoje) za nadograđivanje Licencirane aplikacije. \n 2. Materijali treće strane \n Licencirana aplikacija može onemogućiti pristup Snabdjevačima aplikacije i servise treće strane i web stranice (kolektivno \"Servisi\"). Vi razumijete da sa upotrebom bilo kojih Servisa, možete da se suočite sa sadržajima koji se mogu smatrati napadnim, nepristojnim ili kojem se možete zamjeriti, koji sadržaji mogu ili ne mogu biti identifikovani sa upotrebom određenim jezikom i da rezultati bilo kojeg istraživanja ili ulaska u određeni URL mogu automatski i ne namjerno generirati veze ili napomene za materijal kome se možete zamjeriti. I pored toga, Vi se slažete da proizvođač ovog Uređaja (\"Proizvođač\") i Snabdjevač aplikacije neće imati nikakvu odgovornost prema Vama za sadržaje koji mogu biti prihvaćeni kao napadački, nepristojni ili nečemu čemu zamjerate. \nKorištenjem ovih Usluga Vi potvrđujete i slažete se da Proizvođač nije odgovoran za ispitivanje i evaluaciju sadržaja, preciznost, kompletnost, pravovremenost, punovažnost, usklađenost autorskih prava, zakonitost, kvalitet ili bilo koji drugi aspekt tih Usluga. Proizvođač ne garantuje ili odobrava i ne predpostavlja i neće imati nikakve obaveze ili odgovornosti prema Vama ili bilo kojoj osobi za bilo koju od Usluga. \n Potvrđujete i slažete se da Usluge mogu sadržati vlasnički sadržaj, informacije i materijal (kolektivno \"Materijale trećih strane\") koji su zaštićeni važećim zakonima o intelektualnom vlasništvu i drugim zakonima i da nećete upotrebljavati takve Materijale treće strane ni na bilo koji način osim za dozvoljenu upotrebu Usluga. Slažete se da nećete reprodukovati, modifikovati, iznajmljivati, davati u zakup, pozajmljivati, prodavati, distribuirati Materijale treće strane ili kreirati derivativne radove od toga u bilo koju svrhu i nećete iskorištavati Servise na bilo koji neovlašteni način. Vi se nadalje slažete da nećete upotrebljavati Usluge na bilo koji način za uznemiravanje, zlostavljanje, praćenje, klevetanje ili drugačije narušavanje ili kršenje prava bilo koje druge strane i da Proizvođač nije odgovoran na bilo koji način za takvu upotrebu od Vaše strane, niti za bilo kakvo uznemiravanje, prijetnje, klevetanje, napadačke ili nedozvoljene poruke ili prenošenja koje Vi možete primiti kao rezultat upotrebe bilo kojih Usluga. \n 3. Bez garancije\nPotvrđujete i slažete se da su korištenje Licencirane aplikacije i Usluga na Vaš vlastiti rizik. Sve Licencirane aplikacije i Usluge se pružaju \"kakve jesu\" i \"kako su dostupne\" bez ikakve vrste garancije, bilo izričite ili podrazumijevane. Proizvođač se izričito odriče svih garancija i uslova u pogledu Licencirane aplikacije i Usluga, bilo izričitih ili podrazumijevanih, uključujući, ali ne ograničavajući se na podesnost za trgovanje, zadovoljavajući kvalitet, mogućnost za određenu primjenu, tačnost, mirno uživanje i od nekršenja prava trećih strana. Proizvođač ne garantuje tačnost, punovažnost, pravovremenost, zakonitost ili potpunost bilo koje Licencirane aplikacije ili Usluga koji su omogućeni preko ovog Uređaja i ne garantuje za će Uređaj, Licencirana aplikacija ili Usluge ispuniti Vaše zahtjeve ili da će funkcionisanje Licencirane aplikacije ili Usluga biti bez prekida ili bez grešaka ili da će svi nedostaci u Licenciranoj aplikaciji ili Uslugama biti ispravljeni. U slučaju da se dokaže da su Licencirana aplikacija ili Usluge neispravni, Vi ćete preuzeti kompletne troškove svih potrebnih servisiranja, popravki ili korekcija.\nPotvrđujete i slažete se da Licencirana Aplikacija i Servisi mogu biti promijenjeni, obustavljeni, uklonjeni, završeni ili prekinuti ili pristup može biti onemogućen u bilo koje vrijeme, bez obavještenja i Proizvođač ne tvrdi niti garantuje da će bilo koji uključeni sadržaj ili usluga u Licenciranoj aplikaciji i Uslugama ostati dostupni za bilo koji period vremena. Takvi sadržaji i usluge prenose treće strane na način mrežnih i prenosnih tehničkih mogućnosti nas kojima Proizvođač nema kontrolu. Bez ograničavanja opštosti navedenog, Proizvođač se izričito ograđuje od bilo koje odgovornosti ili odgovornosti za bilo koju promjenu, prekid, onemogućavanje, otklanjanje bilo kojih ili obustavljanja bilo kojeg sadržaja ili usluge omogućene preko ovog uređaja. Pružatelj aplikacije i ostali pružatelji Usluga zadržavaju pravo da izmjene, obustave, otklone ili onemoguće pristup bilo kojoj Licenciranoj aplikaciji ili Uslugama u bilo koje vrijeme bez obavještenja. Proizvođač može takođe nametnuti ograničenja za upotrebu ili pristup određenoj Licenciranoj aplikaciji ili Uslugama, u bilo kojem slučaju i bez obavještenja ili obaveze.\nProizvođač nije odgovoran niti je obavezan za odnose s klijentima koji se odnose na Licenciranu aplikaciju i Usluge. Sva pitanja ili zahtjevi za servis koji se odnosi na Licenciranu aplikaciju i Usluge bi trebali biti upućeni direktno dotičnom pružatelju.\n 4. Sakupljanje i korištenje informacija\nSlažete se da Proizvođač, Pružatelj aplikacije i pružatelji Usluga mogu prikupljati i koristiti tehničke podatke i povezane informacije, uključujući ali ne ograničavajući se na tehničke informacije o ovom Uređaju, sistemu i softverskoj aplikaciji i periferijskim uređajima, kako bi olakšali obezbjeđivanje ažuriranja softvera, podršku proizvodu i ostale usluge za Vas (ako postoje) povezane s Uređajem i Licenciranom aplikacijom. Proizvođač, Pružatelj aplikacije i pružatelji Usluga mogu koristiti takve informacije, toliko dugo sve dok su u obliku, u kojem Vi niste lično identifikovani, da za Vas poboljšaju svoje proizvode ili da obezbijede usluge ili tehnologiju. \n 5. Nedostupnost određenih funkcija\nZbog ograničenja Pružatelja aplikacije, određene funkcije, aplikacije i usluge mogu biti nedostupni na ovom Uređaju (uključujući njegove periferne uređaje) ili na svim područjima. Neke funkcije ovog Uređaja mogu takođe zahtjevati dodatne periferijske uređaje ili članarinu koje se posebno prodaju. \n 6.Ograničenje odgovornosti\nDo određenog stepena koji nije zabranjen važećim zakonom, niti pod bilo kojim uslovima, uključujući nemar, Proizvođač neće biti odgovoran, bilo po ugovoru ili pogrešnoj radnji, za bilo koje direktne, indirektne, slučajne, posebne ili posljedične štete, pravne nadoknade, troškove ili bilo koje druge štete koje proizilaze iz toga ili u vezi s tim, bilo koje informacije koje su sadržane u tome ili kao rezultat upotrebe Uređaja, bilo koje Licencirane aplikacije ili bilo koje Usluge od Vaše strane ili bilo koje treće strane, pa čak i ako je obaviješten o mogućnosti takve štete."];	
var noChannelListRemind = ["Kanali nisu pronađeni. Lista kanala je dostupna nakon skeniranja kanala.","Pretraživanje kanala"];	
var closeSubtitleRemind = "Funkcija će biti dostupna kada je titl isključen. Želite da to podesite sad?";	
var estickerTitles = ["Veoma realistične slike","Boje koje postanu kao žive","Odlični vjerni pokreti","Dinamični kvalitet slike","SR UHD nadogradnja","Iskusite 3D svijet","Brže izvođenje","Budući 4K sadržaj","Uživajte u svijetu onlajn","Pristup dodatnom sadržaju","Integrirana digitalna podešavanja","Povežite sve uređaje","Različiti 4K izvori","USB sadržaj","Ultra brzi WIFI","Mobilni sadržaj na TV-u","Mobilni sadržaj uređaja","Lokalni sadržaj","Odobreno od strane DivX","Slika bez prekida","Kanal je spreman","TDT Premium"];	
var estickerDescriptions = ["Nevjerovatni ugođaj gledanja zahvaljujući slikama četiri puta detaljnijim od Full HD na UHD ekranu","Široka skala boja Vam dostavlja osjećaj u svakoj sceni, sa živopisnom crvenom i smaragdno zelenoj","Interpolacija 4K okvira i pozadinsko osvjetljenje magično se suprostavljaju problemima zamagljenja pokreta","Živopisnost originalne slike je obogaćena kako bi proizvela istinski dinamičan izraz sa briljantnim kontrastom","Uživajte jasnije nego prije u TV predstavama i Blu-Ray diskovima zahvaljujući tehnologiji Super rezolucije","Iskusite spreman za 3D TV i gledajte različite 3D sadržaje","Doživljaj zabave s više uživanja sa Quad Core za ujednačenu interakciju, poboljšane performanse","HEVC (H.265) podrška za dekodiranje za predstojeći standard 4K video distribucije","Bogatstvo onlajn aplikacija, VOD usluge, naknadno gledanje TV programa i internetsko pregledanje weba.","Pogledajte više s dodatnim uslugama i sadržajima Vašeg omiljenog emitera","Pristup TV kanalima u visokoj definiciji bez dodatnog STB uređaja","Lako povezivanje mnogo digitalnih izvora dostupno u kući","TV spreman za budućnost, uz mogućnosti da reprodukuje 4K 50/60 Hz preko HDMI 2.0 sa HDCP 2.2","Video ili foto sadržaj direktno sa USB diska, HDD ili kamere na velikom ekranu u 4K rezoluciji","Posljednja generacija 2x2 MIMO i AC standard Vam isporučuje dostupnu brzinu interneta bez konkurencije","Zahvaljujući tehnologiji preslikavanja ekrana, uživajte u gledanju fotografija, video zapisa, aplikacija sa mobilnog uređaja na velikom ekranu.","Fotografije, video zapisi, aplikacije sa pametnog telefona ili tableta se mogu prikazati na velikom ekranu","Prikažite na velikom ekranu lokalne sadržaje kao što su fotografije, video zapisi sa uređaja koji je povezan sa lokalnom mrežom","Reprodukujte iznajmljene ili sopstvene filmove zaštićene od strane DivX","Izuzetno uzak okvir TV-a i super tanak dizajn.","Testiran i odobren od strane Canal+","TDT Premium testiran i odobren"];	
var eManualTextArray = ["Elektronsko uputstvo za upotrebu.","Sve unutrašnje grafike su samo za izlaganje."];	
var frontPanelRemind = "Prednja ploča je zaključana.";	
var eRPRemind = "Način Prodavnice ne zadovoljava ERP zahtjeve. Jeste li sigurni da ga želite izabrati?";	
var noRelatedChannel = "Nema odgovarajućeg kanala";	
var option0624Name = ["BOP","BFS","Događaj za događajem","Pribavi korisnički ID","BGM","Resetuj sve","Resetuj prodavnicu","NRM","DVB-T2 i izbor države","HbbTV način"];	
var DVBT2AndChoice = ["Uključeno","Po državi","Isključeno"];	
var hbbtvServiceRemind = "HbbTV usluga dolazi uskoro.";	
var insertWord = "Ubacite";	
var viewDetail = "Prikaži detalj";	
var remindOAD = "Ažuriranje softvera. Nova preporučena informacija za softver možda postoji na drugom kanalu. Ako prihvatite da obavite nadogradnju, TV će se automatski prebaciti na taj kanal. Da li biste željeli da to uradite baš sad?";	
var LEDStatus = ["Treperenje", "Normalna","Isključeno"];	
var netFlixRemind = "Ova funkcija će prekinuti pristup Netflix uslugama dok se ponovo ne prijavite.";	
var ESNExplanation = "Elektronski serijski broj";	
var resetShopRemind = "Sistem se resetuje sad, nemojte isključivati TV";	
var initialSelectOption = "Odaberite jednu opciju:";	
var databaseRemind = "Sistem je identifikovao datoteku kao oštećenu zbog nekih nepoznatih razloga i automatski je ponovo formirao, pritisnite OK za nastavak";	
var Deactivation = "Deaktivacija";	
var oadFutureRemind = "Ažuriranje softvera.\nNovi preporučeni softver će biti dostupan za %s. Ažuriranje može malo potrajati i ekran može postati crn. Nemojte isključivati prijemnik tokom ažuriranja. Ako prihvatite ovo ažuriranje, ostavite prijemnik na zadanom vremenu. Da li želite da primite ove nove informacije?";	
var bt_title = "Bluetooth";	
var bt_soundOutPutName = "Izlaz za zvuk";	
var bt_soundOutPutTV = "TV zvučnici";	
var bt_soundOutPutBT = "Bluetooth uređaj";	
var bt_soundOutPutBT_TV = "Bluetooth i TV";	
var bt_refreshBarName = "Uređaji";	
var bt_settingTips_On = "Uključite Bluetooth funkciju i skenirajte uređaj.";	
var bt_settingTips_Finding = "Traženje dostupnih uređaja...";	
var bt_settingTips_NoDevice = "Nema dostupnih uređaja.";	
var bt_deviceList_State_NoConnect = "Niste povezani";	
var bt_deviceList_State_Connecting = "Povezivanje...";	
var bt_deviceList_State_Connected = "Povezani";	
var bt_deviceList_State_Paired = "Upareno";	
var bt_deviceList_Conncect_Failed_Tips1 = "Povezivanje neuspješno.";	
var bt_deviceList_Conncect_Failed_Tips2 = "Potvrdite da je XXX Bluetooth funkcija uključena.";	
var bt_deviceList_Conncect_Success = "Povezano sa Bluetooth uređajem.";	
var bt_deviceList_Disconncect_Success = "Isključeno sa Bluetooth uređaja.";	
var bt_deviceList_Disconnect = "Jeste li sigurni da se želite isključiti sa XXX?";	
var bt_tipsTitle = "Savjet";	
var bt_bluetooth_Pairing_Title = "Bluetooth uparivanje";	
var bt_bluetooth_Input_Pin = "Unesite PIN:";	
var bt_bluetooth_Output_Pin_Tip = "Unesite PIN XXXX pomoću tastature.";	
var bt_bluetooth_Pin_Wrong_Tip = "Pogrešan PIN";	
var bt_bluetooth_Remove_Pair_Title = "Pitanje";	
var bt_bluetooth_Remove_Pair_Ask = "Zaboraviti ovaj uređaj?";	
var audioDescriptionName = ["Opis zvuka","Zvučnik","Jačina zvuka zvučnika","Slušalice","Jačina zvuka slušalica","Jačina zvuka AD","BT uređaj","BT uređaj za jačinu zvuka","Pojačalo","Zvučnik"];	
var audioDescriptionOptions = ["Isključeno","Normalna","Opis zvuka"];	
var volumeOffRemind = "Podesite XXX na \"On\" u meniju Postavke.";	
var mEPSRemind = "Način Prodavnica ne ispunjava MEPS zahtjeve. Jeste li sigurni da ga želite izabrati?";	
var parentRatingAUOptions = ["Ne blokirajte", "Blokirajte G i iznad (po izboru)", "Blokirajte PG i iznad", "Blokirajte M i iznad", "Blokirajte MA i iznad", "Blokirajte AV i iznad",  "Blokirajte R i iznad", "Blokirajte sve"];	
var mEPSTips = ["Trenutačni način slike ne zadovoljava MEPS\nuslove, preporučen je standardni način.",    "Vaš TV je u načinu prodavnice.\nZa način kuća, pogledajte meni Postavke."];	
var switchSourceRemind = "ubačeno. Želite li da prebacite?";	
var footballModeName = "Način Sportovi";	
var resetStadium = "Stadion";	
var atvSearchMenu = "Ručno pretraživanje ATV";	
var dtvSearchMenu = "Ručno pretraživanje Dtv";	
var settingNoticeSourceName = "Automatski izvor";	
var smartTVOptions = ["Portal Smart TV","HbbTV","Podjeli i pogledaj","WiFi prikaz","Politika Smart TV",                            "Umreženost u pripravnosti","Resetujte Smart TV"];	
var supportOptions = ["Daljinska dijagnostika","Konaktirajte nas"];	
var tvDoctor = ["Daljinska dijagnostika 2.0","Aplikacija je dostupna za Vaš Smart TV da bih pokrenuo dijagnostiku i poboljšao korištenje proizvoda. Podaci o radu TV-a i informacije o modelu će biti prikupljeni od strane ove aplikacije i biće otpremljeni na server, oni će biti korišteni za rješavanje problema. Vašim ličnim informacijama se neće pristupati. Omogućite da Vaš TV bude pravilno povezan sa internetom.","Lokalna dijagnostika","U momentu kada započne dijagnostika, slijedite uputstva osoblja za podršku.","Daljinska dijagnostika","Uvjerite se da je osoblje za podršku onlajn.","Serijski broj:","&nbsp;&nbsp;&nbsp;&nbsp;Korisnički ID:","Povezivanje...","Povezani ste, omogućite povezivanje mreže.","Nemogućnost da pristupite internetu, \nprovjerite povezanost mreže.","Izlaz"];	
var ClosedcaptionName = "Skriveni titl";	
var sysCCOptions = ["CC način","Analogni CC","Digitalni CC","Staviti jedno iznad dugog","Skriveni titl"];	
var sysCCmodeOption = ["Isključeno", "Uključeno", "Uključeno kad je bez zvuka"];	
var sysanalogCCOption = ["Isključeno", "CC1", "CC2", "CC3", "CC4", "Tekst1", "Tekst2", "Tekst3", "Tekst4"];	
var sysdigitalCCOption = ["Isključeno", "Servis 1", "Servis 2", "Servis 3", "Servis 4", "Servis 5", "Servis 6", "Servis 7", "Servis 8"];	
var syssuperimposeOption = ["Isključeno", "Servis 1", "Servis 2", "Servis 3", "Servis 4", "Servis 5", "Servis 6", "Servis 7", "Servis 8"];	
var sysCCOPtionItems = ["*","*","*","*","*","*","*","*","*","*"];	
var sysCCOtionMode = ["Prilagođena","*"];	
var sysCCOptionFontStyle = ["*","*","*","*","*","*","*","*"];	
var sysCCOptionFontSize = ["*","*","*","Normalna"];	
var sysCCOptionFontEdgeStyle = ["*","Nijedno","*","*","*","*"];	
var sysCCOptionFontColor = ["*","*","*","Crvena","Zelena","Plava","Žuta","Magenta","Cijan"];	
var sysCCOptionFontOpacity = ["*","*","Treperenje","*","*"];	
var contactUsOption = ["Konaktirajte nas",    "Kontaktirajte nas ako imate problema sa upravljanjem ovim uređajem.",    "Kontaktirajte nas",    "Web stranica: Posjetite",    "Broj centra za pozive:","Informacija o proizvodu","Naziv modela:",    "Verzija softvera:","*","Korisnički ID:","ID projekta:",    "Tip klijenta:","Bežična MAC adresa:","Žična MAC adresa:","Netflix ESN:","Skenirajte informacije na Vašem mobilnom telefonu.",    "tada odaberite Vašu državu."];
var homePageWords = ["Historija", "Tražite"];	
var titlePageWords = ["Kuća", "VIDEO ZAPISI","TV","APPS"];	
var videosPageWords = ["Film", "Sport","Muzika","Popularno","Igrica","Obrazovanje","Novosti"];	
var statusPageWords = ["USB","Postavke","WiFi","Ožičen"];	
var searchPageWords = ["Tražite", "Popularne pretrage:","Predstave, filmovi, ljudi..."];	
var resultSearchPageWords = ["Rezultati o"," ","Pokušajte druge ključne riječi.","izvinite, video o tome nije pronađen"," "];	
var historyPageWords = ["Historija", "Pritisnite","da obrišete historiju","Obrišite samo jedan","Obrišite sve","Juče","Danas","Niste gledali još ni jedan video.","Uspješno brisanje historije gledanja!"];	
var channelPageWords = ["Žao nam je, nijedan video još uvijek nije pronađen."];	
var virtualRemoteValues = ["1","2","3","4","5","6","7","8","9",                          "Zum-","0","Zum+",                          "Izlaz","0","*",                          "Lista","0","Tekst",                          "Vodič","Unesite","Izlaz",                          "Meni","Titl","Informacije",                          "Zaustavite",                          "Informacije","Meni","Izlaz",                          "Izlaz"                          ];	
var sportsModeInitReminds = ["Ovaj čarobnjak se koristi za podešavanje USB diska za sportski način rada. Odaberite način podešavanja.", 
							 "Odaberite veličinu datoteke za sportski način rada.", 
							 "Kreiranje datoteke za sportski načina rada", 
							 "Brzina USB diska je praviše mala (< %f MB/s) za funkciju sportskog načina rada!", 
							 "USB disk je spreman za sportski način rada. Ali naša preporuka je da promijenite (na brzinu > %f MB/s) radi boljih performansi.", 
							 "USB disk je spreman za sportski način rada."];	
var sportsModeExtra = ["Želite li zaustaviti sportski način rada i promijeniti kanal?",
						"Želite li zaustaviti sportski način rada i promijeniti izvor na uređaj koji je povezan na SCART ulaz?",
						"Želite li zaustaviti sportski način rada i promijeniti izvor na uređaj koji je povezan na HDMI ulaz?",
						"Sportski način rada nije podržan na kodiranom kanalu.",
						"Želite li zaustaviti sportski način rada i ući u EPG (elektronski programski vodič)?",
						"Želite li zaustaviti sportski način rada i ući u Medije?",
						"Želite li zaustaviti sportski način rada i promijeniti izvor ulaza?",
						"TV će završiti s trenutnim sportskim načinom rada. Želite li da izađete?"];	
var remoteControlNote = "*";	


var textArray = ["Jačina","Kanal","Porijeklo","Switch/Power","Vodič","seconds to Power OFF"];
var guideArray = ["VOL-","VOL+","CH-","CH+","Pre","Sljedeće"];
var favChannelListRemind = ["Nema omiljenih kanala. Idite na druge liste i koristite “Zelenu tipku” da dodate omiljene kanale."];

var proxySetting = ["Proxy postavke","Ulaz"];
var powerOffShop = ["Preporučeno vam je korištenje načina rada u trgovini, da li želite?"];
var tcastTextPageWords = ["Plenty of videos, rich applications","TV remote, right at your fingertips","Great contents, share on a large screen"];
var tcastOtherWords = ["Scan QR code and download T-Cast","Network connected to TV","TV name","T-Cast"];
var hbbtvWords = ["HbbTV Setting","HbbTV","Cookies","Thrid Party Cookies","Device ID","Tracking"];
var hbbtvTrackingWords = ["YES","NO","Don't care"];
var eStickerTipWords = ["Memorija je pala ispod 500 M, da li želite obrisati videozapise u demo načinu rada da biste dobili više prostora?"];
var delEstickerVideoRemid = ["Videozapis je uspješno obrisan"];
var selectSatRemind = "You can select no more than 20 satellites!";