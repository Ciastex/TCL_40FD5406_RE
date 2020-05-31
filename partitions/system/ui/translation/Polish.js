
var all_country 	= ["Australia","Austria","Belgia","Bułgaria","Chorwacja","Czechy","Dania","Finlandia","Francja","Niemcy",
						"Grecja","Węgry","Włochy","Luksemburg","Holandia","Norwegia","Polska","Portugalia","Rumunia","Rosja",
						"Serbia","Słowenia","Hiszpania","Szwecja","Szwajcaria","Wielka Brytania","Nowa Zelandia"," "/*Arab*/,"Estonia"," "/*Hebrew*/,
						"Łotwa","Słowacja","Turcja","Irlandia","Japan","Filipiny","Thailand","Maldives","Uruguay","Peru",
    "Argentina","Chile","Venezuela","Ecuador","Costa Rica","Paraguay","Bolivia","Belize","Nicaragua","Guatemala",
						"Chiny","Taiwan","Brazil","Canada","Mexico","United States","South Korea","Romania","Vietnam"/*新添加的，底层结构体中没有*/,"Ukraina"/*新添加的，底层结构体中没有*/,
    					"Iran","Iraq"," ","Kazakhstan","Uzbekistan"," ","Kyrgyzstan","Algeria","Egypt","Tunisia",
    					"Tanzania","Kenya","Pakistan","Indonesia","Kuwait","Saudi Arabia","Qatar","Israel","Lebanon","bahrain",
    					"Angola","Congo","India","Turkmenistan","Colombia","Mongolia","Bangladesh","Nepal","Sri Lanka","North Korea",
						"Mołdawia","Polynesia","EI Salvador"," ","Fiji","Liberia","Jordan","Myanmar","Ghana","Georgia",
    					"Armenia","Oman","yemen","Syria","Palestine","Afghanistan","Morocco","benin","IvoryCoast","Nigeria",
    					"Sudan","Ethiopia","Zambia"," ","South Africa","mozambique","Libya","Albania","Belarus","Iceland",
						"Litwa","Mauritius","Dubai","UAE","Tajikistan","Bengal","Bośnia i Hercegowina","Cypr","Kosowo","Macedonia",
						"Malta","Czarnogóra","Cameroun","Singapore","Malaysia","NewCaledonia","Suriname","Jamaica","Curacao","Aruba",
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
				
var all_language 	= ["Czeski","*","Duński","*","*","Niemiecki","Angielski","Francuski","Grecki","Hiszpański",
						"Chorwacki","*","Włoski","Węgierski","Holenderski","Norweski","Polski","Portugalski","Rosyjski","Rumuński",
						"Słoweński","Serbski","Fiński","Szwedzki","Bułgarski","Słowacki","Chinese","*","Gaelicki","*",
						"Walijski","Arabski","Irlandzki","Łotewski","*","Turecki","Estoński","Holenderski"/*Netherlands*/,"Koreański","*",
						"hinduski","*","*","Mandarynka","kantoński","Maori","Oryginalne audio"/*Qaa*/,"Nieokreślone"/*Undetermined*/,"*","Nieznany",
						"Nieokreślone","*","*","*","*","*","*","*","*","*",
						"*","*","*","Albański","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baskijski","*","*",
						"*","*","*","*","*","*","*","Bośniacki","*","*",
						"*","*","*","*","bielorusă","*","*","Kataloński","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galicyjski","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Islandzki","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","język japoński","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Litewski",
						"*","*","*","*","*","*","*","Macedoński","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romans","*","*","*","*",
						"*","*","*","Saamen","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Teletekst",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukraiński","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Wyłącz","Włącz"];
var okCancel		= ["Ok","Anuluj"];
var yesNo			= ["TAK","NIE"];
var level			= ["Wyłącz","Niska","Duże","Średnia"];
var manualAuto		= ["Ręczna","Automatyczne"];
var homeShop		= ["Dom","Sklep"];
var picPreset		= ["Standard","Dynamiczny","Naturalne","Film","Użytkownik"];
var picColorTemp	= ["Chłodne","Normalny","Ciepłe","Użytkownik"];
var pic3dNavig		= ["Ręczna","Automatyczne","Pół automatycznie"];
var _3dOptions		= ["Tryb 3D","3D-na-2D","Przeł. L - P ","Głębokość pola"];
var pic3DMode       = ["Wyłącz","2D-na-3D","Obok siebie","Góra i Dół","Przeplot linii"];
var picEcoOptions	= ["Dynam. podświetlenie ECO","Czujnik światła","Lokalne ściemnienie","Przyciemnianie mieszane"];
var picGeoOptions	= ["Geometria","Pozycja pozioma","Pozycja pionowa","Zegar","Faza"];//Geometry 无翻译
var picAdWhiteBal	= ["Wzmocnienie R","Wzmocnienie G","Wzmocnienie B","Offset R","Offset G","Offset B"];
var souOptions		= ["Ustawienie wstępne dźwięku","Balans","Opóźnienie audio","SRS TSHD","Auto regul. głośn.",
						"Typ SPDIF","Opóźnienie SPDIF","Ustawienie telewizora","Język audio","Kanał audio",
						"Opis audio","Wzmocnienie basów","Dolby Digital Plus"];
var souSpdifType	= ["Automatyczne"/*Dolby*/,"PCM","Wyłącz"];
var colorSpace      = ["Automatyczne","Przysyłany","Użytkownik"];
var souPresetPara	= ["100Hz","500Hz","1.5KHz","5KHz","10KHz"];
var chOptions		= ["Skanowanie w poszukiwaniu kanałów","Lista Kanałów","EPG","Organizator kanałów","Diagnostyka kanału",
						"przesun. czasowe","Napisy","Teletekst","Typ listy kanałów"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Siła sygnału","Jakość sygnału","Częstotliwość (KHz)","Identyfikator usługi","ID sieci","Nazwa sieci"];
var chScanOptions	= ["Kraj / region","Rodzaj sygnału","Szukaj automatycznie","Aktualizuj automatycznie","Kanały analogowe - ręcznie",
						["Ręczne skan. sygn. kabl.","Kanały cyfrowe - ręcznie","Ręczne dostrojenie do satelity"],"Konfiguracja anteny satelitarnej","Wybór ulubionej sieci","Skasuj listę kanałów","LCN"];
var favNetDes		= "Wybierz ulubioną sieć";
var tuner			= ["Kablowy","Antena","Satelitarny"];//Satelite 无翻译
var passError		= "Nieprawidłowe hasło.\nWprowadź ponownie!";
var chType			= ["Kanały analogowe: ","Kanały cyfrowe: "];
var chScanStatus	= ["Status: Skanowanie","Status: Szukanie zakończone","Status: Anulowanie szukania","Status: Błąd szukania"];
var chScanPara		= ["Częstotliwość (KHz)","Modulacja","Współczynnik (Ksym/s)","ID sieci","System",
						"Dostrajanie","Siła sygnału","Jakość sygnału","Tryb skan.","Identyfikator kanału"];
var chScanParaMHZ      = ["Częstotliwość (MHz)"];
var chAtvManSys		= ["EUR ZACHODNIA","EUR WSCHODNIA","Wlk Brytania","Francja"];
var modulation		= ["16 QAM","32 QAM","64 QAM","128 QAM","256 QAM","Automatyczne"];
var chCleanDes		= "Skasować listę kanałów?";
var chDeletDes		= "Czy chcesz usunąć ten kanał?";
var chOperator		= ["Ziggo","UPC","Inne"];
var chScanType		= ["Cyfrowy & Analogowy","Cyfrowy","Analogowy"];
var chScanMode		= ["Pełna","Zaawansowane","Szybkie"];
var bookingModes	= ["Zapis","Uwaga"];
var dayName			= ["N","Pn","Wt","Śr","Cz","Pt","So"];
var monthName		= ["Sty", "Lut","Mar","Kwi","Maj","Cze","Lip","Sie","Wrz","Paź","Lis","Gru"];
var filter			= ["Filtr","Typ","Podtyp"];
var chEpgFirstGenre	= ["Film","Aktualności","Przedstawienie","Sport","Dla dzieci","Muzyka","Sztuka","Społeczne","Edukacja","Rekreacja","SPECJALNE"];
var chEpgSecondGenre= [["Dramat","Detektywistyczne","Przygodowe","Fantastyka naukowa","Komedia","Opera mydlana","Romans","Poważna","Film dla dorosłych"," "," "," "],
						["Sprawy bieżące","Prognoza pogody","Wiadomości","Dokumentalny","Dyskusja"," "," "," "," "," "," "," "],
						["Przedstawienie","Teleturniej","Rewia","Talk Show"," "," "," "," "," "," "," "," "],
						["Sport","Wydarzenia specjalne","Magazyny sportowe","Piłka nożna","Tenis",
							"Sporty drużynowe","Lekka atletyka","Sporty motorowe","Sporty wodne","Sporty zimowe",
							"Jazda konna","Sporty wojskowe"],
						["Dla dzieci","Dla przedszkolaków","Rozrywka dla dzieci w wieku 6 do 14","Rozrywka dla dzieci w wieku 10 do 16","Informacyjne","Filmy rysunkowe"," "," "," "," "," "," "," "],
						["Muzyka","Rock","Poważna","Ludowa","Jazz","Muzyczne","Balet"," "," "," "," "," "],
						["Sztuka","Formy sztuki","Sztuki piękne","Religia","Popkultura",
							"Literatura","Film","Doświadczalne","Transmisja","Nowe media",
							"Czasopisma o sztuce","Moda"],
						["Społeczne","Magazyny","Ekonomia","Wybitni ludzie"," "," "," "," "," "," "," "," "],
						["Edukacja","Przyrodnicze","Technologia","Medycyna","Inne kraje","Nauki społeczne","Kształcenie uzupełniające","Języki"," "," "," "," "],
						["Zajęcia w czasie wolnym","Turystyka","Rzemiosło","Motoryzacja","Sprawność i zdrowie","Gotowanie","Reklama","Ogrodnictwo"," "," "," "," "],
						["Oryginalny język","Czarno-biały","Niepublikowane","Transmisja na żywo"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Pomiń kanał","Sort. kanał.","Edycja kanału","Usunięcie kanału","Sortuj kanały","Dodaj kanał"];
var chEditPara 		= ["Nazwa sieci","Numer kanału","Nazwa kanału","Częstotliwość","System kolorów","System dźwięku"];
var chSatTitles		= ["Typ satelity","Konfiguracja anteny satelitarnej","Wybierz satelitę"];
var chSatEidtOptions= ["Nazwa satelity","Położenie","LNB Moc","Częstotliwość LNB (MHz)","Wejście Diseqc",
						"Sygnał 22KHz","tone Burst","Częstotliwość (KHz)","Współczynnik (Ksym/s)","Polaryzacja",
						"Siła sygnału","Jakość sygnału","Status satelity"];
var chSatAutoPromt	= [["Wszystkie","Sieć"],
						["Wszystkie","Niezakodowane"]];
var chSatAutoScanOptions=["Wybierz satelitę","Tryb skan.","Kanały"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Uniwersalny",];
var chSatDiSEqCInput= ["Wyłącz","A","B","C","D"];
var chSatTone22KHz	= ["Automatyczne","Włącz","Wyłącz"];
var chSatToneBurst	= ["Wyłącz","tone Burst A","tone Burst B"];
var chSatPolarization= ["Pozioma","Pionowa"];
var chSatSetupOptions=["Typ anteny","Tuner","Pasmo częstotliwości"];
var chSatAntennaType= ["Kabel pojedynczy","Uniwersalny"];
var chSatUserBands	= ["Pasmo użytkown. 1","Pasmo użytkown. 2","Pasmo użytkown. 3","Pasmo użytkown. 4","Pasmo użytkown. 5","Pasmo użytkown. 6","Pasmo użytkown. 7","Pasmo użytkown. 8"];
var chSatOthers		= ["Transponder"];
var chSatSetupOthers= ["Zdefiniowane przez użytkownika"];
var pleaseSelectSat = "Najpierw wybierz satelity!";
var subOptions		= ["Napisy","Cyfrowy język napisów","Cyfrowy język napisów 2.","Typ napisów"];
var ttxOptionsCon      = ["Język dekod. strony","Język cyfrow. teletekstu"];
var subType			= ["Normalny","Niesłyszący"];
var netIntf     	= ["Przewodowo ","Bezprzewodowa"];
var netConnDes		= ["Telewizor testuje połączenie sieci.\nProszę czekać",
						"Test połączenia sieciowego zakończony sukcesem!",
						"Próba połączenia zakończona niepowodzeniem."];
var netSsidError	= "Poprawna długość identyfikatora SSID to 1–32 znaków. Sprawdź identyfikator SSID.";
var netOthers		= ["Kod PIN "];
var netWlessAutoDes	= ["Przed kliknięciem OK, proszę sprawdzić wprowadzenie poniższego kodu PIN do punktu dostępu.",
						"Proszę nacisnąć przycisk na punkcie Dostępu w czasie 120 sekund przed kliknięciem OK."];
var netConnRemind	= ["Nieprawidłowe hasło!",
						"Trwa łączenie. Czekaj!",
						"Połączono pomyślnie i uzyskano IP!",
						"Brak połączenia",
						"Telewizor wyszukuje AP\nProszę czekać",
						"Brak urządzeń bezprzewodowych podłączonych do telewizora!"];
var netWireIpOptions= ["Ustawienie IP","Typ adresu","Adres IP","Maska podsieci","Brama domyślna","Pierwotny DNS","Wtórny DNS"];
var netWireConnRemind= ["Proszę wprowadzić liczbę od 0 do 255.",
						"Połączono!",
						"Wpisz poprawny adres",
						"Połączono!",
						"Brak połączenia!",
						"Trwa łączenie. Czekaj!",
						"Podaj wartość między 1 a 223."];
var netFlixOptions	= ["Dezaktywacja","ESN","Wersja Netflix"];
var netFlixDes	 	= ["Na pewno chcesz wyłączyć?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Aktualizuj oprogram.";
var netUpdateDialogTitle = "Aktualizacja oprogramowania";
var netBGDownloadTitle 	= "Pobieranie";
var netUpdateLoadingPrompt= ["Wyszukiwanie aktualizacji, czekaj!",
							"Pobieranie oprogramowania... Czekaj!",
							"Proszę NIE wyłączać telewizora w trakcie aktualizacji oprogramowania!",
                            "Konieczna aktualizacja oprogramowania jest pobierana automatycznie w tle!"];
var netUpdatePrompt= ["Gratulacje, posiadane oprogramowanie jest najnowsze!",
						"Znaleziono nową wersję oprogramowania XXXX. Załadować teraz? Może to zająć nieco czasu, zależnie od stanu sieci.",
						"logowanie nieudane!",
						"Nie można odebrać danych, spróbuj ponownie później!",
						"Analiza Update XML nieudana!",
						"Brak połączenia",
						"Oprogramowanie zostało pobrane. Czy chcesz rozpocząć wyświetlanie?",
						"Dane utracone! Załadowanie nieudane!",
						"Nieprawidłowe sprawdzenie pakietu, proszę spróbować ponownie!",
						"Sieć nie pracuje normalnie, proszę sprawdzić i połączyć się ponownie…",
						"Aktualiz. nieudana. Uruchom telew. ponownie!",
						"Plik aktualizacji został nieoczekiwanie skasowany. Ponów aktualizację przez sieć.",
						"Oprogramowanie zostało pomyślnie pobrane w tle. Czy chcesz przeprowadzić aktualizację?"];
var netUpdateButtonText = ["Pobierz", "Aktualizuj", "Później", "Nigdy", "Ok","Kontynuuj"];
var autoDetectPrompt = ["Znaleziono nową wersję oprogramowania XXXX. Załadować teraz? Może to zająć nieco czasu, zależnie od stanu sieci.",
						"Znaleziono nową wersję oprogramowania XXXX. Aktualizować?",
						"Poprzedni proces aktualizacji sieciowej został przerwany. Musisz zacząć jeszcze raz.",
                        "Trwa pobieranie nowej wersji oprogramowania XXXX. Czy chcesz teraz kontynuować?",
                        "Oprogramowanie zostało pobrane, czy chcesz zaktualizować teraz?"];
var sysOptions		= ["E-instrukcja","Język OSD","Ust. czasu","Blokada","Ustawienia sygn. wej.",
						"Aktualizuj oprogram.","Lokalizacja","Tryb HbbTV","Pliki cookies","Złącze CI",
						"Ustawienia zaawansowane","Zreset. sklep","Wskaźnik LED","Natychmiastowe włączenie","Automatyczny tryb sklepu","Area","Tryb Demo"];
var sysResetDes		= "Czy na pewno?";
var sysMenuLangOptions=["Język","Język ścieżki dźwiękowej","Preferowany język dźwięku"];
var sysTimerOptions	= ["Strefa czasowa","Nazwa strefy","Zegar","Zegar uśpienia","Auto wyłaczenie", "Country region"];

var sysTimeZone		= ["Według nadawcy","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Wyłącz","10 Min","20 Min","30 Min","40 Min","50 Min","60 Min","90 Min","120 Min"];
var sysStandby		= ["Wyłącz","4 godziny","6 godziny","8 godziny"];
var sysRegionName	= ["Madryt ","Kanary"];
var sysClockOptions	= ["Automat. synchr.","Data","Czas","Program włączania","Ust. czasu",
						"Wybór kanału","Program wyłączania","Ust. czasu"];
var sysTimer		= ["Wyłącz","Codziennie","Raz"];

var sysInputSet		= ["Brak etykiety","DVD","Blu-ray","HDD","DVDR",
						"Nagrywarka HD","Gry","VCR","PC","Przystawka cyfrowa",
						"Przystawka cyfrowa HD","Aparat fotograficzny","Nagrywarka","Inne"];
var sysAvVideoInput	= ["Automatyczne","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["Przez USB","Przez sieci","Wg kanału"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Nie można znaleźć nowego oprogramowania w emisji programu!",
						"Znaleziono nową wersję oprogramowania XXXX. Aktualizować?",
						"Włóż pendrive.",
						"Nieprawidłowe sprawdzenie pakietu, proszę spróbować ponownie!",
						"Nie wyłączaj TV w czasie aktualizacji oprogramowania.",
						"Oprogramowanie zostało pomyślnie zaktualizowane.\nTelewizor automatycznie uruchomi się ponownie!",
						"Znaleziono nową wersję oprogramowania XXXX. Załadować teraz? Może to zająć nieco czasu, zależnie od stanu sieci.",
						"Pobieranie",
						"Oprogramowanie zostało pobrane. Czy chcesz rozpocząć wyświetlanie?",
						"Akt. nieudana!",
						"Szukanie plików aktualizacji",
						"Oprogramowanie zaktualizowano pomyślnie, \nProszę teraz uruchomić telewizor ponownie."];
var sysProductInfo	= ["Bieżąca wersja","Nazwa produktu","Nazwa producenta","Nazwa chassis"];
var sysCiDes		= ["Brak karty CI."];
var sysAdOptions	= ["Rejestracja DivX(R)","Wyrejestrowanie DivX(R)","T-Link","Authorization Error","Potwierdzenie wyrejestrowania",
						"Potwierdzenie wynajęcia","Wygasło wynajęcie"];
var sysRegistDes	= ["Musisz zarejestrować urządzenie aby odtwarzać zabezpieczone wideo DivX",
						"Kod rejestracji:",
						"Rejestracja na http://vod.divx.com"];
var sysDregistDes	= ["Kod wyrejestrowania:",
						"Wyrejestrowanie na http://vod.divx.com",
						"Kontynuować rejestrację?"];
var mediaAuthorization = ["Twoje urządzenie nie jest uprawnione do odtwarzania tego wideo zabezpieczonego przez DivX."];
var deregistrationConfrimation = ["Twoje urządzenie jest już zarejestrowane.","Na pewno chcesz wyrejestrować?"];
var rentalConfirmation = "Wynajęte DivX(R) wykorzystało XXXX, z dopuszczalnej ilości odtwarzań YYYY. Kontynuować?";
var rentalExpired 	= "Wypożyczalnia DivX(R) wykorzystała XXXX z YYYY projekcji. Wypożyczalnia DivX wygasła.";

var parentalRatingNA		= ["***","***","***","***","***","***","***","***"];
var parentalRatingOptionUS		= ["***","***","***"];
var sysTVRatingUS=["***","***","***","***","***"];
var sysMPAAUS=["***","***","***","***","***","***"];
var parentalRatingOptionCanada		= ["***","***","***"];
var sysCanadaEng=["***","***","***","***","***","***"];
var sysCanadaFre=["***","***","***","***","***",""];
var sysResetRRT=["***"];
var sysLockOptions	= ["Blokada kanału","Zamknięcie interwału czasu","Blokada programu","Blokada wejścia","Blokada panelu przedniego","Blokada instalacji",
						"Zmień hasło","Głośność maksymalna","Wyczyść wszyst."];
var sysTimeIntervals= ["Typ zamknięcia","Czas początku","Czas zakończenia"];
var sysRatingOptions= ["Brak","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","Kategoria X (Hiszpania)"];
var changePass		= ["Zmień hasło","Nowe hasło","Potwierdź hasło"];
var changePassDes	= ["Nieprawidłowe hasło.\nWprowadź ponownie!",
						"Hasło nie pasuje.\nWprowadź ponownie!",
						"Pomyślne ustawienie hasła!",
						"Ten kod jest zbyt prosty jako hasło.\nProszę wprowadzić ponownie!"];
var sysPowerOnChOptions= "Tryb wyboru";
var sysPowerOnCh	= ["Ostatni status","Wybór użytkownika"];
var netWlessSecu    = ["Otwarte","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Brak","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Brak obsługi"];
var netWlessSecu3	= ["Brak","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Brak obsługi"];
var netOptions		= ["Połączenie internetowe","Interfejs","Ustawienia łączności bezprzewodowej","Ustawienia IP","Informacja ",
						"Test połączenia","DLNA","Pilot","Ustawienia Netflix","Wyświetlacz Wi-Fi",
						"Typ adresu","Adres IP","Maska podsieci","Brama domyślna","Pierwotny DNS",
						"Wtórny DNS","SSID","BSSID","Proszę wprowadzić SSID:","Identyfikator użytkownika:"];
var chEditDes		= ["Powtórzony numer kanału!","Naciśnij czerwony przycisk, aby usunąć bieżący znak!","Nieprawidłowe numery kanałów."];
var chEpgNoProgram	= "Aktualnie brak informacji o programach, najpierw wyszukaj kanały!";
var chEpgWords		= ["Przewodnik Programów","Brak informacji o programie.","Zablokowany kanał!","Brak danych programu.","Brak tytułu programu."];
var chEpgBooking	= ["Informacje o harmonogramie", "Numer kanału","Data rozpoczęcia","Czas początku","Czas zakończenia",
						"Typ powtarzania","Typ harmonogramu","Dodaj","Zamień","Zmień",
						"Dodaj / Zmodyfikuj"];
var epgHotKey		= ["Poprzedni dzień","Następny dzień","Filtr","Lista audycji","Dodaj plan"];
var chEpgBookRemind	= ["Nieprawidłowy Czas Rozpoczęcia","Nieprawidłowy Czas Zakończenia","Powtórzony Terminarz","Zapisano pomyślnie.","Usunięto."];
var chSchePara		= ["Lista audycji","Czas początku","Data rozpoczęcia","Tytuł Programu","Nazwa kanału",
						"Czas trwania","Powtórzenie","Terminarz","Edycja","Usuń"];
var dateTimer		= ["Raz","Codziennie","Tygodniowo"];
var scheduleDeleteReminds="Czy chcesz usunąć ten harmonogram?";
var scheduleNoLists	= "Brak harmonogramu. Naciśnij czerwony przycisk, aby go dodać.";
var chListWords		= ["Lista Kanałów","Wybierz listę","Rodzaj sygnału","Dodaj do ulubionych","Usuń",
						"Wybierz listę kanałów","Wybierz tryb tunera","Zamiana"];
var chListType		= ["Wszystkie","Cyfrowy","Analogowy","Radio","Niezakodowane","Ulubione"];
var chAutoScanOptions=["Wybierz operatora","Typ kanału","Szukaj automatycznie"];
var souSoundType	= ["Nieprawidłowe","Mono","Mono","Stereo","Stereo",
						"SAP","SAP","Podwójny1","Podwójny2","Podwójny2",
						"Nicam mono","Nicam stereo","Nicam dual1","Nicam dual2","Nicam Dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Muzyka","Film","Wycisz głos","Standard","Użytkownik"];
var picAdRgbMode	= ["Wyłącz","Tylko Czerwony","Tylko Zielony","Tylko Niebieski"];
var picAdOptions	= ["Redukcja szumów","Optymalizacja ruchu","Składowe koloru","Kontrast Dynamiczny","Wyrazistość ruchu LED",
						"Flesh Tone","Tryb filmu","Tryb gier","Temp. kolorów","Balans Bieli",
						"Stopklatka","Uwydatnienie czerni","Overscan","Gamma","Tryb HDMI","Bilans bieli 10P","Rozszerzenie kolorów",
						"Redukcja rozmazania","Redukcja migotania","Przestrzeń kolorów","Wyrazistość ruchów"];
var pic10Pwhite     = ["Okres","Czerwony","Zielony","Niebieski","Resetuj","Kolor","Żółty","Cyjan","Magenta"];
var picMotionClarity = ["Tryb ruchu","Interpolacja ruchu","Wyrazistość ruchu LED","Redukcja rozmazania","Redukcja migotania","Resetuj"];
var picMotionMode   = ["Film","Gładko","Usuń","Sport","Własne"];
var picResetDes		= "Wszystkie ustawienia osobiste zostaną zresetowane. Czy na pewno chcesz wykonać wybraną czynność?";
var pic10PReset     = "Czy na pewno chcesz zresetować bilans bieli 10P?";
var picMotionReset  = "Czy chcesz zresetować wyrazistość ruchu?";
var picColorSpaceReset    = "Czy na pewno chcesz zresetować przestrzeń kolorów?";
var picOptions		= ["Tryb obrazu",
						"Podświetlenie"," Jasność ","Kontrast","Nasycenie","BARWA","Ostrość","Temp. kolorów","Tryb ekranu","Format automatyczny",
						"Lepszy sport","3D","Nawigacja 3D","ECO Ustawienia","Geometria",
						"Ustawienia zaawansowane","Reset obrazu","Mikroprzyciemnianie"];
var picSize			= ["16:9 format", "4:3 format", "14:9 format", "Cinerama",
    					"16:9 Zoom", "16:9 Zoom up","14:9 Zoom","Stretch Zoom","Wide Zoom",
    					"Zoom 2","Wide Zoom 2","Screen Native Match","Dot by Dot","Original","Panorama"];
var others			= ["Głośność","Nadawanie","Hasło","Status","Zapisz","Zamień","Start","Zakończ","Szukaj","Usuń",
						"Brak","Automatyczny","Szukaj punktów dostępu ","Zabezpieczenia","Połącz","Odświeżanie","Ponów","Zatrzymaj","Ustawienia","Kanały",
						"Edycja","Wstawić","Sygnał！","Zakończ","Stereo","Audio","Źródło","Brak audio","Wskazówki","Resetuj",
						"Własne","Konfiguracja","Zachowaj","Użytkownik","Zamknij klawiaturę","Tryb bezpieczny","Co dzień","Lista PVR"];
var direction		= ["Lewy","Prawy","W górę","W dół"];
var audioType 		= ["MPEG","DOLBY AUDIO"/*"AC3"*/,"MPEG4","AAC", "DOLBY AUDIO"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Nieznany"];
var soundChannels   = ["Nieznany","Mono","Pomocniczy","Dual Mono","Stereo","Stereo Sub","Stereo Dolby Surround","Przestrzenny 2CH","Przestrzenny","3,0 Ch","4,0 Ch","5,0 Ch","Mono Lfe","Dual Mono Lfe","Stereo Lfe","Surround 2 Ch Lfe","Surround Lfe","3,1 Ch","4,1 Ch","5.1-kan.","7.1-kan.","Joint Stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Lewy","Prawy","Inne"];
var prompts			= ["Dostosuj ustawienia obrazu, aby pasowały do warunków oglądania.",
						"Dostosuj jasność. Im bliżej do 100, tym jaśniej.",
						"Dostosuj kontrast. Im bliżej do 100, tym większa różnica pomiędzy bielą a czernią na obrazie.",
						"Dostosuj nasycenie. Im bliżej do 100, tym mocniejszy kolor.",
						"Dostosuj ostrość. Im bliżej do 100, tym wyraźniejsze szczegóły.",
						"Dostosuj jasność podświetlenia. Im bliżej do 100, tym jaśniejszy ekran.",
						"Dostosuj tonację. To ustawienie zmienia tonację kolorów.",
						"Wybierz format obrazu, który najlepiej pasuje do oglądanego programu.",
						"Skonfiguruj opcje oszczędności energii.",
						"Dostosuj ustawienia geometrii ekranu po podłączeniu komputera.",
						"Wybierz zaawansowane ustawienia obrazu.",
						"Przywróć wszystkie domyślne ustawienia obrazu.",
						"Wybierz tryb dźwięku stosownie do osobistych preferencji.",
						"Ustaw równowagę lewego / prawego kanału dźwięku.",
						"System odzyskiwania dźwięku TruSurround HD zapewnia bogate doznania akustyczne i wyraźny dźwięk na niskich i wysokich częstotliwościach.",
						"Digital Interface Format łączy cyfrowe wyjście audio sygnału telewizyjnego z zestawem kina domowego.",
						"Wybierz język audio odpowiednio do swoich preferencji.",
						"Umożliwia oglądanie programów telewizyjnych osobom niedowidzącym.",
						"Sprawdź swój obraz telewizyjny, dźwięk i sygnał.",
						"Wybierz typ listy kanałów odpowiednio do sygnału TV.",
						"Wybierz język napisów wyświetlanych na dole ekranu.",
						"Zobacz tekst i obrazy z bieżącego kanału.",
						"Digital Living Network Alliance. Ciesz się muzyką, zdjęciami i filmami z innych urządzeń, takich jak komputer, w sieci domowej.",
						"Wyświetlaj zawartość smartfonu na ekranie telewizora i używaj smartfonu jako pilota do telewizora.",
						"Wyświetlaj zawartość z urządzenia kompatybilnego z Miracast z systemem Android na ekranie telewizora.",
						"Zablokuj swój telewizor.",
						"Wybierz nazwę swojego urządzenia.",
						"Wybierz swoje środowisko oglądania.",
						"Przywróć wszystkie domyślne Ustawienia Systemu.",
    					"Switch off sports mode for more options.",
    					"Zwiększa kontrast otoczenia",
    					"Tryb specjalny dla programów sportowych",
    					"Jeszcze więcej funkcji CEC."];
var initialTitle	= ["Witamy","Ustawienia"];
var initialPrompt	= ["Wykonaj wstępną konfiguracją już teraz, aby poznać świat pełen przygód!",
						"Wybierz język:",
						"Wybierz swój kraj / region:",
						"Wybierz lokalizację:",
						"Proszę wybrać typ połączenia sieci:",
						"Proszę wybrać typ kablowego połączenia sieci:",
						"Połączenie z xxxxxxxxx nie powiodło się! Podłącz urządzenie zgodnie z poniższym schematem lub wybierz Lewo, aby zresetować.",
						"Połączono z xxxxxxxxx! Wybierz Prawo, aby kontynuować.",
						"1) Twój telewizor może mieć wybudowany adapter bezprzewodowy\n 2) Jeśli adapter bezprzewodowy jest zewnętrzny, podłącz go do telewizora. Następnie wybierz tryb połączenia bezprzewodowego.",
						"Skanowanie. Czekaj...",
						"Brak urządzeń bezprzewodowych podłączonych do telewizora!",
						"Przed kliknięciem przycisku ‘Next’ (dalej) proszę sprawdzić, czy został zainstalowany kod PIN do .",
						"Naciśnij przycisk na AP w ciągu 120 sekund przed naciśnięciem przycisku Prawo!",
						"WPS (Ustawienie ochrony Wi-Fi)",
						"PIN (osobisty numer identyfikacyjny)",
						"PBC (konfiguracja przycisku)",
						"Poniższe treści są dostępne po połączeniu z siecią. Czy chcesz pominąć konfigurację sieci?",
						"Dostępne są nowe aktualizacje oprogramowania do pobrania; może to trochę potrwać w zależności od parametrów sieci.",
						"Aktualizacja oprogramowania telewizora umożliwia skorzystanie z najnowszych właściwości i usług.",
						"Nie będziesz korzystać z najnowszych funkcji i usług. Czy chcesz pominąć konfigurację oprogramowania?",
						"Naciśnij przycisk Prawo, aby kontynuować.",
						"Nie wyłączaj zasilania podczas aktualizacji, ponieważ może to spowodować uszkodzenie telewizora.",
						"Jeśli nie chcesz zaktualizować, wybierz NIE.",
						"Trwa aktualizacja, czekaj",
						"Oprogramowanie można także zaktualizować w oknie SYSTEM/SOFTWARE UPDATE.",
						"Wybrany kraj wymaga ustawienia hasła.\nProszę ustawić kod dla telewizora i potwierdzić go.",
						"This code is too simple.\nPlease use different digits.",
						"Gratulacje! Wstępna konfiguracja została zakończona. Możesz zmienić konfigurację w menu głównym i na powiązanych podlistach menu.",
						"Wybierz tryb ustawienia zabezpieczenia:",
						"Wybierz tryb połączenia z siecią bezprzewodową:",
						"Sieć"];
var initNetCabAndDonRe = ["Niepodłączony kabel sieciowy, podłącz kabel sieciowy!","Brak wbudowanej karty sieci bezprzewodowej lub brak karty sieci bezprzewodowej USB."];
var initChPrompt = ["Instalacja kanałów telewizyjnych","Wybierz typ skanowania anteny.","Wykonuje się automatyczne dostrajanie…","Znaleziono następujące kanały antenowe:","Proszę wybrać typ wyszukiwania Kablowego.","Wybierz jednego operatora z poniższej listy.","Proszę skonfigurować informację o wyszukiwaniu","Znaleziono następujące kanały Kablowe:","Proszę wybrać operatora z poniższej listy","Wybierz satelity do wyszukiwania lub edytuj wybranego satelitę","Ustaw parametry satelity","Zostały znalezione następujące kanały; skanowanie kanałów można wykonać ponownie w pozycji Channel/Channel Scan"];
var initClockPrompt = ["Pobierz czas z sieci!",
						"Ustaw datę i godzinę:"];
var initialOptions	= ["Otoczenie","Ustawienia sieciowe","Aktualizuj oprogram.","Instalacja kanałów","Zegar"];
var initialHotkeys	= ["Wstecz","Wybierz","Dalej","Zgadzam się"];
var initLocations	= ["Dom","Sklep","Sklep z demo"];
var initNets		= ["Przewodowa","Bezprzewodowa","Nie mam połączenia sieciowego"];
var initWireManuals	= ["Adres IP","Maska podsieci","Brama domyślna","Pierwotny DNS","Wtórny DNS"];
var initSoftUpdates = ["Aktualizuj teraz","Aktualizuj później"];
var initChannelIns	= ["Kontynuuj","Nie chcę instalować kanałów"];
var initChScanTypes	= ["Cyfrowy & Analogowy","Cyfrowy","Analogowy","Nie chcę wyszukiwania"];
var initChDvbts		= ["Kanały antenowe ATV:","Kanały antenowe DTV:"];
var initChDvbcs		= ["Kanały Kablowe ATV:","Kanały Kablowe DTV:"];
var initChDvbss		= ["Kanały Satelitarne:"];
var initChDvbSOther	= ["Nie chcę wyszukiwania satelity"];
var initEndConnectedStatus= ["Odłączono","Podłączono WiFi","Podłączono przewodowo"];
var initEndInstallations= "Zainstalowano kanały XXXX";
var initEndUpdate	= ["Zaktualizowano"];

var audioScenes 	= ["Stołowy","Mocowanie na ścianie"];			
var screenSavers	= ["Brak kanałów, naciśnij klawisz OK i przeskanuj!",
						"Brak sygnału!",
						"Zakodowane",
						"Tylko dane",
						"Program audio",
						"Brak audio i video",
						"Niedostępny",
						"Brak teletekstu",
						"Brak informacji o programie.",
						"Zablokowany program!",
						"Zablokowany program!\nNaciśnij przycisk OK i wprowadź kod.",
						"Brak danych programu.",
						"Program szkodliwy dla nieletnich.\nNaciśnij OK i wprowadź kod.",
						"Zablokowany kanał!",
						"Kanał jest zablokowany!\nNaciśnij przycisk OK i wprowadź kod.",
						"Wprowadzanie jest zablokowane!\nNaciśnij przycisk OK i wprowadź kod.",
						"Brak obsługi!",
						"Ta usługa jest aktualnie niedostępna",
						"Wej. zablok.!",
						"Brak tytułu programu.",
						"Brak funkcji",
    					"Brak Napisy"
						];
var channelNumberOverPromt = ["The number of search programs has exceeded,you can delete some programs and then retry!"];
var chBookingPromt	= ["Aktualny kanał ma zaplanowane nagrywanie, telewizor rozpocznie nagrywanie.",
						"Znaleziono zaplanowany zapis. \n Przełączyć na XXXX, by zapisać",
						"Bieżący kanał ma przypomnienie.",
						"Znaleziono przypomnienie o zaplanowaniu. \n Przełączyć na XXXX"];
var timeUnit		= ["Sek.","min."];
var ciPromt			= ["Dane sieci zostały zmienione. Aby zaktualizować, możesz wykonać skan aktualizacji. ",];
var othersPromt		= ["Zaczekaj...",];
var menuOptions		= ["Obraz","Dźwięk","Kanał","Smart TV","Sieć","System","Pomoc techniczna"];
var optionOptions	= ["Tryb obrazu","Ustawienie wstępne dźwięku","Stopklatka","T-Link","przesun. czasowe","PVR","Lista audycji","Ustawienia","*"];
var optionTLinkPromt= [["Automatyczne włączanie","Auto wyłaczenie","Menu przewodn."],
						["Włączenie","Gotowość","Głośność wzmacniacza"]];
var powerPromt		= ["Telewizor wyłączy się wkrótce! Nacisnąć dowolny klawisz, by przerwać."];
var ttxLanguage		= ["EUR ZACHODNIA","EUR WSCHODNIA","Rosyjski","Arabski/hebrajski","Perski","Arabski","bielorusă","Grecki","Turecki"];
var ttxOptions		= ["Ujawnij","Zmiana podstron","Język","Strona alarmu","Pilna wiadomość"];
var weekday         = ["Sunday","Poniedziałek","Wtorek","środa","Czwartek","Piątek","Sobota"];
var lcnConfflict	= "Wystąpił problem dotyczący odbierania tego programu w rozdzielczości HD.";
var inShopMode		= "Twój telewizor jest w trybie sklepowym. Aby włączyć tryb domowy, wybierz opcję System i zmień parametr Location w menu.";
var nitRefresh		= "Dane sieciowe uległy zmianie. Czy chcesz przeprowadzić skanowanie w poszukiwaniu aktualizacji?";
var picHDMIMode     = ["Automatyczne","Grafika","Video"];

var glassRemind    	= ["Sparuj okulary 3D z telewizorem\n(Przytrzymaj wciśnięty przycisk POWER na okularach 3D).","Twoje okulary 3D są podłączone do telewizora ",""];
var pvrRemind 		= ["Nie wyciągaj urządzenia USB i nie wyłączaj zasilania"];
var pvrConName   	= ["PVR","Informacje o programach:",["Do nagrywania kanałów HD wybierz dyskz prędkością zapisu większą niż 5 MB/sek., dlakanałów SD wybierz dysk z prędkością zapisu większą niż 3 MB/sek","wideo zapisane w folderze \"PVR\""],"Zatrzymaj","Zapis","godzina","Minuta","Czas trwania","Wskazówki","Użyj klawiszy strzałek, aby ustawić czas nagrywania."];
var pvrDisRemind 	= "Proszę włożyć wtyk pamięci USB w celu zapisu.";
var pvrRemindWords  = ["Czy chcesz zamknąć?",
							"Czy chcesz zatrzymać nagrywanie i przejrzeć zapisane pliki?",
							"Wyjęty dysk.",
							"Brak wolnego miejsca.",
							"Brak zapisanych plików. Zacznij nagrywać.",
							"PVR nie może zaczynać się w kanale kodowanym.",
							"Urządzenie niedostępne",
							"Zapisano pomyślnie.",
							"Chcesz zatrzymać zapisywanie i zmienić źródło wejścia?",
							"Telewizor zakończy bieżące nagranie. Czy chcesz zamknąć?",
							"Nagrywarka PVR potrzebuje prawidłowego sygnału TV, sprawdź sygnał."];
var pvrChangeCh 	= ["Włączyć kanał?",
							"Chcesz zatrzymać zapisywanie i zmienić kanał?"];
var pvrChangeToPIN8	= ["Czy chcesz zmienić źródło na urządzenie podłączone do wejścia SCART?",
				    		"Czy chcesz zatrzymać nagrywanie i zmienić źródło na urządzenie podłączone do wejścia SCART?"];
var pvrChangeToCEC  = ["Czy chcesz zmienić źródło na urządzenie podłączone do wejścia HDMI?",
				  			 "Czy chcesz zatrzymać nagrywanie i zmienić źródło na urządzenie podłączone do wejścia HDMI?"];
var pvrGuideJump    = ["Czy chcesz otworzyć EPG?",
							"Zatrzymać zapisywanie i wprowadzić EPG?"];
var pvrMediaJump    = ["Czy chcesz otworzyć Media?",
							"Zatrzymać zapisywanie i wprowadzić Media?"];
var timeshiftExtra	= ["Zatrzymać opóźnianie i przejść w telewizorze zmienić kanał?",
						"Czy chcesz zatrzymać funkcję TimeShift i zmienić źródło na urządzenie podłączone do wejścia SCART?",
						"Czy chcesz zatrzymać funkcję TimeShift i zmienić źródło na urządzenie podłączone do wejścia HDMI?",
						"Przes. czasu nie może zaczynać się w kanale kodow.",
						"Czy chcesz zatrzymać funkcję TimeShift i otworzyć EPG?",
						"Zatrzymać opóźnianie i przejść w telewizorze do trybu USB?",
						"Zatrzymać opóźnianie i przejść w telewizorze zmienić źródło wejścia?",
						"Proszę włożyć wtyk pamięci USB w celu zapisu.",
						"Za mało miejsca na dysku.",
						"Telewizor zakończy działanie funkcji TimeShift. Czy chcesz zamknąć?"];
var timeshiftStatus	= ["Przewiń do tyłu","Zatrzymaj","Odtwarzanie","Wstrzymanie","Przewiń do przodu"];
var pvrPowerOffRemind= ["Nagrywanie w trybie czuwania","Gotowość","Trwa nagrywanie, czy chcesz kontynuować nagrywanie w trybie czuwania?"];
var timeshiftInitTitle= "Ustawienia dysku";
var timeshiftInitReminds= ["Kreator ustawiania dysku USB dla opóźnienia. Wybierz tryb ustawienia.",
						 "Dla lepszego działania sformatuj dysk. Wszystkie dane zostaną skasowane",
						 "Wybierz czas opóźnienia.",
						 "Formatowanie",
						 "Brak wolnego miejsca.",
						 "Tworzenie pliku opóźnienia",
						 "Test prędkości",
						 "Za mała prędkość dysku (< %f MB/sec) dla wprowadzenia opóźnienia!",
						 "Dysk gotowy do wprowadzenia opóźnienia. Dla lepszego działania zalecamy zmianę dysku (na dysk o prędkości> %f MB/sec).",
						 "Dysk gotowy do wprowadzenia opóźnienia."];
var timeshiftInitButtons= ["Format","Pomiń","Anuluj","Ok","Zakończ","Zakończ"];
var timeshiftInitOther=["Prędk. dysku:","MB / s"];

var selectChoice	= "Czy na pewno?";
var chAtvStore		= "Zapisz jako XXXX";
var chEpgFirstGenreUK= ["Film","Wiadomości i fakty","ROZRYWKA","Sport","Dla dzieci","Edukacja","Styl życia","Dramat"];
var homePageTitleList = ["APLIKACJE","TV","FILMY","Strona główna"];
var homePageFavAndAllName  = ["Ulubione aplikacje","Wszystkie aplikacje"];
var homePageBackUp = ["E-instrukcja","GuideOn"];
var homePageRemind   = ["Wszystkie funkcje są dostępne po podłączeniu do sieci.","W telewizorze nie ma jeszcze żadnych kanałów. Programy będą dostępne po przeskanowaniu kanałów.","Brak programu","Czy chcesz teraz wyszukać kanały?"];
var homePageHistory = ["Historia"];
var miracastTitle = ["Wyświetlacz Wi-Fi","Urządzenie TCL"];
var miracastRemind=["Wyświetlacz Wi-Fi umożliwia bezprzewodowe (tzn. bez kabli) dzielenie ekranu i dźwięku posiadanego urządzenia, takiego jak smartfon lub tablet do posiadanego telewizora. Umożliwia to oglądanie w telewizorze, jednoczesne oglądanie tego co pokazuje smartfon lub tablet. Np. można uruchomić wideo w smartfonie i jednocześnie wyświetlać je w telewizorze, lub korzystać z tabletu jako sterownika gry z treścią wyświetlaną na dużym ekranie.","Łącze WiFi w telewizorze jest gotowe Rozpocznij teraz udostępnianie ekranu swojego urządzenia na ekranie telewizora.","Trwa łączenie. Czekaj!","Brak połączenia!","Połączenie nie powiodło się. Sprawdź to!"];
var homePageLittleWin = ["Ustawienia","Media","Ulubione kanały","Smart TV","EPG"];

var hbbtvStopRemind  = ["Czy chcesz przerwać odtwarzanie?"];
var colorSystem = ["Automatyczne","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Naciśnij przycisk ≡, aby uzyskać więcej informacji";
var emptyListInfo = "Brak urządzeń podłączonych do telewizora";
var optionVideoListArray_1 = ["Tryb obrazu", "Ustawienie wstępne dźwięku", "Tryb odtwarzania", "Tryb ekranu", "Tryb 3D", 
							  "Przeł. L - P ", "Głębokość pola", "Napisy", "Ścieżka dźwiękowa", "Tytuł", "Rozdział", "Info"];
var optionVideoListArray_2 = ["Tryb obrazu", "Ustawienie wstępne dźwięku", "Tryb odtwarzania", "Tryb ekranu", 
							  "Napisy", "Ścieżka dźwiękowa", "Tytuł", "Rozdział", "Info"];
var bottomTipsText = ["Odtwarz./Pauza", "Przewiń do tyłu", "Przewiń do przodu", "Lista odtwarzania", "Ustawienia"];
var picturePresetArray = ["Standard", "Dynamiczny", "Naturalne", "Film", "Użytkownik"];
var videoPlayModeArray = ["Powt. wszystk.", "Powt. jednokr.", "Normalny"];
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Brede zoom", "Uitzoomen 2", "Brede zoom 2", "Uitgerekte zoom", "Automatyczny"];
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "Zoomen 14:9", "Zoomen 16:9", "Uitzoomen 16:9", "Automatyczny"];
var Mode3DArray = ["Wyłącz", "2D-na-3D", "Obok siebie", "Góra i Dół", "Przeplot linii"];
var videoOptionListArray = ["Wyłącz", "Ścieżka", "Napisy", "Tytuł", "Rozdział"];
var subMenuTitleText = "Napisy";
var langMenuTitleText = "Język audio";
var titleMenuTitleText = "Tytuł";
var mode3DMenuTitleText = "Tryb 3D";
var langInfoText = "Ścieżka";
var STOP_RESUME_INFO = "Stop - wznow.";
var playListName = " nazwa";
var eb_tips = "Wskazówki";
var ok_button = "Ok";
var eb_info = ["Błąd dekodowania dźwięku.", "Błąd dekodowania wizji.", "Format audio nie jest obsługiwany.", 
			   "Nieobsługiwany format wideo.", "Nie można otworzyć tego pliku.", "Błąd odtwarzania, spróbuj ponownie później.",
			   "Ten format plików nie jest obsługiwany.", "Oj, odtwarzacz przestał działać.",
			   "Ścieżka pliku nie istnieje lub jest nieprawidłowa.\n Włóż nośnik pamięci i spróbuj ponownie.",
			   "Czy chcesz kontynuować odtwarzanie\n z poprzedniego statusu odtwarzania?"];
var picturePlayErrorTips = ["Niepowodzenie wczytywania!!!","Obraz jest zbyt duży!!!","Błąd sieci!!!","Błąd wątku!!!","Błąd parametru!!!","Nieznany błąd!!!"];
var frameTitleText = "Nowe urządzenie";
var eb_quit_info = "Czy na pewno chcesz zamknąć?";
var eb_yes = "TAK";
var eb_no = "NIE";
var offinfo = "Wyłącz";
var naInfo = "Zero";
var consoleInfoArray = ["Przewiń do tyłu", "Przewiń do przodu", "Odtwarz./Pauza", "Lista odtwarzania"];
var cantOperateText = ["Funkcja nie jest obsługiwana."];
var chapterChangeInfo = "Dostępne są tylko rozdziały od 1 do XXXX.";
var metaDataArray = ["Metadane tytułu/wersji: ", "Metadane rozdziału: ", "Metadane audio: ", "Metadane napisów: "];
var metaTitleInfo = "Tytuł";
var metaChapterInfo = "Rozdział";
var videoLoadingInfo = "Analizowanie...";
var listLoadingInfo = "Ładowanie...";
var pgInfo = "Ocena prawna: ";
var fileNameText = " nazwa";
var fileDateText = "Data";
var fileSizeText = "Rozmiar";
var fileDurationText = "Czas trwania";
var fileDirectorText = "Reżyser";
var fileCopyrightText = "Prawa autorskie";
var fileArtistText = "Wykonawca";
var fileAlbumText = "Album";
var fileGenreText = "Gatunek";
var fileYearText = "Rok";
var fileGenreText = "Gatunek";
var mainListArray = ["Wszystkie", "Obraz", "Video", "Muzyka"];
var sortArray = [" nazwa", "Data"];
var parserArray = ["Normalny", "Powtarzające się  "];
var emptyTipsInfo = "Oj, nie znaleziono żadnego pliku w obsługiwanym formacie.";
var emptyFolderInfo = "Oj, nie znaleziono żadnego pliku w obsługiwanym formacie.";
var sortName = "Sortuj według";
var parserName = "Parser";
var divx_str1 = "Rejestracja DivX(R)";
var divx_str2 = "Wyrejestrowanie DivX(R)";
var infor_str = "Info";
var quickMenuEmptyText = "Brak dostępnych opcji.";

var musicSoundPresetArray = ["Standard", "Film", "Muzyka", "Wycisz głos", "Użytkownik"];
var musicInformationArray = [" nazwa", "Wykonawca", "Album", "Gatunek:", "Rok:", "Czas trwania:"];
var playListName = " nazwa";
var playTipsInfo = ["Odtwarzasz pierwszy plik.", "Odtwarzasz ostatni plik."]
var musicNameInfo = "Name";
var musicArtistInfo = "Wykonawca";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Ustawienie wstępne dźwięku";
var optionBGMInfo = "Odtwarzaj w tle";
var optionAudioOnlyInfo = "Tylko audio";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX jest połączone z telewizorem!";
var tvRemoteTitle		= "Pilot";
var tvRemoteDeveloper	= "Aplikacja opracowana przez TCL";
var tvRemoteDeviceTitle	= "Nazwa urządzenia:";
var remoteOption		= ["Współdzielenie mediów","Pilot","Pomoc","Informacja o","Inteligentne połączenie"];
var remotebottom		= " Pobierz aplikację TV Remote na swój smartfon ";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Udostępnianie zdjęć, filmów i muzyki w telewizorze przez telefon.",
							"Czynności: \n   1. Kliknij aplikację TV Remote na smartfonie. Połącz smartfon z telewizorem w tej samej sieci WiFi;\n   2. Kliknij opcję Media Sharing, aby przejrzeć pliki multimedialne;\n   3. Prześlij multimedia, aby je odtworzyć na telewizorze (na jeden z następujących sposobów).",
							"      a) Przeciągnąć i upuścić folder/plik na ikonę TV na górze ekranu;\n      b) Machnąć telefonem w kierunku telewizora, by uruchomić pierwszy plik;\n      c) Odtwarzać media w telefonie i kliknąć ikonę dzielenia się z telewizorem;",
							"   4. Podczas odtwarzania w telewizorze, potrząsnąć telefonem, by odtwarzać poprzedni lub następny plik."];
var controlReminds		= ["Użyć telefonu jako pilota do sterowania telewizorem.",
							" ",
							"Czynności: \n1. Kliknij aplikację TV Remote na smartfonie. Połącz smartfon z telewizorem w tej samej sieci WiFi;\n2. Kliknij opcję Remote Control, aby korzystać z telewizora."];
var helpDeviceWords		= "Współdziałanie wielu ekranów";
var helpBottom			= "W erze technologii chmury, urządzenia inteligentne jak telefon i telewizor są wzajemnie połączone. Dziel się mediami z rodziną, na wielu ekranach i steruj telewizorem przez telefon! ";
var helpReminds			= ["Przygotowania\n   1. Pobierz i zainstaluj aplikację TV Remote z Google Play lub Apple Store.\n   2. Połącz smartfon z telewizorem w tej samej sieci WiFi.",
							" ",
							"Zalecany telefon\n   1. CPU: powyżej 800MHz\n   2. Pamięć: dostępne co najmniej wolnych 80MB",
							" ",
							"Zastrzeżenie\ n Jeśli aplikacja TV Remote jest niedostępna w Twoim telefonie, skontaktuj się z producentem telefonu"];
var helpButtons			= ["Poprzednia","Dalej"];
var aboutReminds		= ["Pilot","Aplikacja opracowana przez TCL"];
var aboutExit			= "Zakończ";
var smartReminds		= ["Szybkie i inteligentne połączenie smartfona z telewizorem.",
							" ",
							"Czynności \n   1. Podłącz telewizor i smartfon do tej samej sieci LAN. Kliknij aplikację TV Remote na smartfonie.\n   2. Kliknij opcję Smart Connect, aby zeskanować kod QR.\n   3. Ustaw telewizor w trybie oglądania i przytrzymaj wciśnięty przycisk INFO na pilocie telewizora przez 4 sekundy; zostanie wyświetlony kod QR na cały ekran.",];
var smartQRReminds		= ["Kliknij opcję Smart Connect w aplikacji TV Remote na smartfonie i zeskanuj kod QR, aby szybko połączyć telewizor ze smartfonem.",
							"Kod QR zawiera informacje o koncie LAN. Sprawdź, czy wszystko się zgadza."];
							

var consoleTipArray = ["Poprzednia","Dalej","Konsola","Lista odtwarzania"];							
var optionInfoArray = ["Tryb obrazu","Tryb odtwarzania","Czas trwania","Efekt","Info"];

var playModeArray = ["Normalny","Losowo","Powtórzenie"];
var durationArray = ["Krótkie (5 s)", "Średnie (10 s)", "Długie (15 s)"];
var effectArray = ["Brak", "Obrót", "Wypar. w prawo", "Wypar. w lewo", "Wypar. w górę", "Wyparcie w dół", "Czwor. do śr.", "Czwor. od śr.", "Losowe"];
var infoArray = ["Nazwa:","Rozmiar:","Data:","Lokalizacja"];

var picturePresetBarTitleInfo = "Tryb obrazu";
var picturePresetBarArray = ["Standard","Dynamiczny","Studio","Film","Użytkownik"];
var upTipsInfo = "Przesuń zdjęcie"; //add yums 2014-10-10
var consoleTipsArray = ["Konsola","Poprzednia","Dalej","Lista odtwarzania","Ustawienia"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Naciśnij ponownie przycisk PRAWO, aby zobaczyć następne zdjęcie","Naciśnij ponownie przycisk LEWO, aby zobaczyć poprzednie zdjęcie","Naciśnij ponownie przycisk DÓŁ, aby pokazać listę odtwarzania"]; //add yums 2014-10-10

var optionPvrListArray = ["Tryb obrazu","Ustawienie wstępne dźwięku", "Tryb ekranu", "Tryb 3D", "Napisy", "Ścieżka dźwiękowa", "Info"];							
	
var titleSpanFirstArray = ["Sterowanie i połączenia","Podstawowe czynności","APLIKACJE","TV","Ustawienia","FAQ"];
var titleSpanSecondArray = [["Pilot","Przyciski panelu","Łatwa nawigacja","Złącze telewizora","Złącze telewizora","Złącze telewizora","Bezprzewodowa"],["Uruchamianie","Pasek stanu","Źródło"],["Aplikacje do odtwarzania","Media","Pilot"],["Dostosuj kanał i głośność","Lista Kanałów","EPG","Kanały","Ulubione kanały"],["Regulacja obrazu","Regulacja dźwięku","Regulacja kanału","Aktualizuj oprogram.","Język","Blokada rodzicielska"],["Najczęściej zadawane pytania","Najczęściej zadawane pytania","Rozwiązywanie problemów","Rozwiązywanie problemów","Regulamin"]];
var contentSpan1_1Array =[["ZASILANIE:","ŹRÓDŁO:","USTAWIENIA:","OPCJA:","WSTECZ:","INFO:","GŁÓWNA:","ZAKOŃCZ:","LISTA:"],
    ["Włącza zasilanie lub tryb czuwania",
        "Wybierz źródło wejściowe",
        "Aby wyświetlić menu Ustawienia",
        "Aby wyświetlić menu Opcja",
        "Powrót do poprzedniego menu lub wyjście z aplikacji",
        "Pokazuje informacje o programie",
        "Aby przejść do strony głównej SmartTV",
        "Powrót do poprzedniego menu lub wyjście z aplikacji",
        "Pokazuje listę kanałów"]];
var contentSpan1_2Array = ["Poprzedni kanał","Następny kanał","Zrób głośniej","Zrób ciszej","Wyświetla stronę główną","Potwierdź opcję","Tryb czuwania / Włączanie"];
var contentSpan1_3Array = ["OK / Przewodnik","Kanał w górę","Kanał w dół","Ciszej","Głośniej","Dostępne jako przyciski ze strzałkami w niektórych funkcjach."];
var contentSpan1_4Array = ["LAN","HDMI (MHL)","HDMI","HDMI (ARC)","Adapter AV OUT","LAN","Smartfon","Komputer/Dekoder/DVD","Wzmacniacz dźwięku","Wzmacniacz dźwięku/Monitor","Twój telewizor może nie mieć wszystkich gniazd."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Słuchawki","Adapter AV OUT","SPDIF","Adapter CMP AUDIO IN","Adapter CMP IN (YPbPr)","Urządzenia USB","Urządzenia USB","Słuchawki","DVC / konsola do gier / dekoder / DVD","Wzmacniacz dźwięku","DVC / konsola do gier / dekoder / DVD","Twój telewizor może nie mieć wszystkich gniazd."];
var contentSpan1_6Array = ["Złącze CI","SD","VGA","SCART","Mini SCART","ANTENNA IN","Karta PCMCIA","Karta SD","PC","Dekoder/DVD","Antena / Kabel / Satelita","Twój telewizor może nie mieć wszystkich gniazd."];
var contentSpan1_7Array = ["Tabletki","PC","Routera","Telefon","TV"];
var contentSpan1_8Array = ["Przełącznik funkcji/zasilanie","Przytrzymaj, aby przejść do timera trybu uśpienia","W dół","W górę","Głośność/kanał/źródło"];

var contentSpan2Array = [["Naciśnij przyciski ze strzałkami, aby wyświetlić stronę główną.","Następnie naciśnij OK, aby obejrzeć jeden z wyróżnionych programów lub otworzyć aplikację."],["Pokaż datę, sieć, urządzenia itp. w prawym górnym rogu ekranu."],["Wybierz źródło sygnału z urządzeń podłączonych do telewizora za pomocą różnych portów, takich jak TV, AV, HDMI itp."]];

var contentSpan3Array = ["Ciesz się ulubionymi aplikacjami i przeglądaj je na stronie Smart TV","Zobacz zdjęcia, obejrzyj filmy i odtwarzaj muzykę z pamięci USB","Podłącz telewizor oraz smartfon lub tablet do tej samej sieci LAN","Kliknij aplikację nScreen lub TV Remote na smartfonie lub tablecie.","Udostępniaj rodzinie zdjęcia, filmy i muzykę na wielu ekranach i steruj telewizorem za pomocą smartfonu."];

var contentSpan4Array = [["Naciśnij przycisk GÓRA / DÓŁ, aby przełączyć kanały","Naciśnij przycisk LEWO / PRAWO, aby wyregulować głośność"],["Naciśnij przycisk LIST na pilocie, aby zobaczyć zestawienie kanałów","Naciśnij przycisk GÓRA / DÓŁ, aby wybrać kanał"],["EPG to ekranowy przewodnik, który wyświetla godziny emisji programów telewizyjnych. Możesz przełączać, wybierać, oglądać i nagrywać programy."],["Wyszukaj i zainstaluj kanały"],["Dodaj i edytuj ulubione kanały na liście kanałów"]];

var contentSpan5Array = ["Ciesz się ulubionymi programami przez aplikacje wideo"];

var contentSpan6Array = [["Naciśnij przycisk Opcja, aby wyświetlić opcje ustawień systemu","Otwórz ustawienia obrazu, aby dostosować wartości"],["Naciśnij przycisk Opcja, aby wyświetlić opcje ustawień systemu","Otwórz ustawienia dźwięku, aby ustawić opcje"],["Naciśnij przycisk Opcja, aby wyświetlić opcje ustawień systemu","Otwórz ustawienia kanałów, aby ustawić opcje"],["Zaktualizuj telewizor, kiedy będzie dostępna nowa wersja oprogramowania"],["Możesz wybrać preferowany język menu"],["Pozwala rodzicom zablokować kanały lub programy, które są nieodpowiednie do dzieci"]];

var contentSpan7_1Array = [["Brak obrazu, brak dźwięku","Sprawdź, czy działa bezpiecznik lub przerywacz obwodu.","Podłącz inne urządzenie elektryczne do gniazdka elektrycznego, aby sprawdzić, czy działa i zostało włączone.","Wtyczka nie jest dobrze włożona do gniazdka","Sprawdź źródło sygnału."],["Obraz normalny, brak dźwięku","Naciśnij przycisk GÓRA, aby zwiększyć głośność.","Ustawienie dźwięku jest nieprawidłowe.","Błąd sygnału w programie."],["Dźwięk normalny, brak obrazu","Wyreguluj jasność i kontrast","Błąd sygnału w programie.","Sprawdź, czy nie jest włączony tryb Tylko audio."]];
var contentSpan7_2Array = [["Zakłócenia częstotliwości radiowych","Zakłócenia powodują ruchome fale lub ukośne smugi, a w niektórych przypadkach utratę kontrastu obrazu. Znajdź i usuń źródło zakłóceń radiowych."],["Brak koloru","Dostosuj ustawienia kolorów.","Sprawdź inny kanał. Być może nadawany program jest czarno-biały."],["Nie działa pilot.","Wymień baterie.","Baterie nie są poprawnie zainstalowane. Nie jest podłączone główne zasilanie telewizora."]];
var contentSpan7_3Array = [["Nie jest wyświetlana zawartość urządzenia USB.","Sprawdź, czy urządzenie pamięci masowej USB jest zgodne z telewizorem.","Sprawdź, czy formaty plików audio i obrazów są obsługiwane przez telewizor."],["Odtwarzanie bez dźwięku","Format audio pliku wideo nie jest obsługiwany przez odbiornik telewizyjny."],["Pliki nie są odtwarzane płynnie","Parametry urządzenia pamięci masowej USB mogą ograniczać prędkość transmisji danych do telewizora."]];
var contentSpan7_4Array = [["Na co mam zwracać uwagę, kiedy aktualizuję oprogramowanie?","Podczas aktualizacji oprogramowania nie można wyłączać zasilania.","Podczas aktualizacji oprogramowania unikaj używania pilota.","Zachowaj cierpliwość, ponieważ proces aktualizacji oprogramowania może potrwać nieco dłużej."],["Brak wyraźnych zmian interfejsu po aktualizacji oprogramowania telewizora.","W pewnych warunkach, aktualizacja oprogramowania może nie tylko zaktualizować lub dodać nowe funkcje, ale także poprawić wydajność telewizora bez wyraźnych zmian w interfejsie. Ponadto, interfejs telewizora może czasem tracić stabilność."]];
var termsTitle = "Regulamin";
var termsConditions = ["(Nota prawna) od TCL — producent tego telewizora. ","Ze względu na różne właściwości produktów z usługami SmartTV, jak również istnienia ograniczeń dostępnej zawartości, niektóre własności, zastosowania i usługi mogą być niedostępne we wszystkich urządzeniach i na wszelkim terytorium. Niektóre właściwości SmartTV mogą też wymagać dodatkowych urządzeń peryferyjnych lub opłat członkowskich, sprzedawanych odrębnie. Więcej informacji o poszczególnych urządzeniach lub informacje o dostępności treści znajdują się na naszej stronie internetowej. Usługi i dostępność treści poprzez SmartTV ulegają czasem zmianie bez uprzedniego zawiadomienia. \n   Wszelkie treści i usługi dostępne przez to urządzenie należą do stron trzecich i są chronione prawem autorskim, patentami, znakami towarowymi i innymi prawami ochrony własności intelektualnej. Takie treści i usługi są udostępniane wyłącznie na twój osobisty, niekomercyjny użytek. Żadna treść lub usługa nie może być użyta w sposób nie zatwierdzony przez właściciela zawartości lub dostawcy usług. Nie ograniczając powyższego, bez wyraźnego upoważnienia właściciela odnośnej zawartości lub dostawcy usług, nie wolno modyfikować, kopiować, publikować ponownie, załadowywać, upubliczniać, transmitować, tłumaczyć, sprzedawać, tworzyć dzieł pochodnych, eksploatować, lub rozpowszechniać w jakikolwiek sposób albo poprzez jakiekolwiek medium, żadnej zawartości i usług wyświetlanych przez to urządzenie. \n   WYRAŹNIE POTWIERDZASZ I ZGADZASZ SIĘ, ŻE UŻYWANIE TEGO URZADZENIA JEST TWOIM WYŁĄCZNYM RYZYKIEM I ŻE CAŁE RYZYKO ODNOŚNIE ZADOWALAJĄCEJ JAKOŚCI, DZIAŁANIA I DOKŁADNOŚCI SPOCZYWA NA TOBIE. TREŚCI I USŁUGI URZĄDZENIA ORAZ STRON TRZECICH, SĄ DOSTARCZANE \"TAKIMI JAKIE SĄ\" BEZ GWARANCJI JAKIEGOKOLWIEK RODZAJU, ZARÓWNO WYRAŻONEJ JAK I DOMNIEMANEJ. FIRMA TCL WYRAŹNIE WYKLUCZA WSZELKIE GWARANCJE I WARUNKI W ODNIESIENIU DO URZĄDZENIA ORAZ WSZELKICH TREŚCI I USŁUGI, ZARÓWNO WYRAŹNE LUB DOMNIEMANE, WŁĄCZNIE ALE NIE WYŁĄCZNIE, ZE ZDOLNOŚCIĄ SPRZEDAŻY, ZADOWALAJĄCEJ JAKOŚCI, PRZYDATNOŚCI DO OKREŚLONEGO CELU, DOKŁADNOŚCI, SPOKOJNEGO ZADOWOLENIA I NIENARUSZALNOŚCI PRAW OSÓB TRZECICH. FIRMA TCL NIE GWARANTUJE DOKŁADNOŚCI, OBOWIĄZYWANIA, NIEOGRANICZONOŚCI W CZASIE, ZGODNOŚCI Z PRAWEM LUB PEŁNI JAKIEJKOLWIEK TRESCI LUB USŁUG UDOSTĘPNIANYCH PRZEZ TO URZĄDZENIE I NIE GWARANTUJE, ŻE URZĄDZENIE, TREŚĆ LUB USŁUGI SPEŁNIĄ TWOJE WYMAGANIA, ALBO ŻE PRACA URZĄDZENIA LUB USŁUGI BĘDĄ NIEPRZERWANE I WOLNE OD BŁĘDÓW. W ŻADNYCH OKOLICZNOŚCIACH, WŁĄCZAJĄC W TO ZANIEDBANIE, FIRMA TCL NIE ODPOWIADA, CZY TO W UMOWIE LUB ZA CZYN, ZA ŻADNE SZKODY BEZPOŚREDNIE, POŚREDNIE, PRZYPADKOWE, SPECJALNE LUB WTÓRNE, HONORARIA ADWOKACKIE, KOSZTY, LUB JAKICHKOLWIEK INNE SZKODY WYNIKŁE Z, LUB W POŁĄCZENIU Z JAKIMIKOLWIEK INFORMACJAMI ZAWARTYMI, LUB NABYTYMI W WYNIKU WYKORZYSTANIA URZĄDZENIA, ANI ZA TREŚCI I USŁUGI UDOSTĘPNIONE TOBIE LUB PRZEZ OSOBY TRZECIE, NAWET W RAZIE UPRZEDZENIA O MOŻLIWOŚCI WYSTĄPIENIA TAKICH SZKÓD. \n   Usługi osób trzecich mogą ulec zmianie, być zawieszone, przeniesione, zakończone lub przerwane a dostęp może być w każdym czasie wyłączony bez ostrzeżenia oraz TCL (producent telewizorów marki Thomson) nie jest przedstawicielem i nie gwarantuje, że żadne treści lub usługi pozostaną dostępne w jakimkolwiek czasie. Treści i usługi są przekazywane przez strony trzecie za pomocą sieci i urządzeń transmisji, niezależnie od firmy TCL. Bez ograniczenia ogólnosci tego wyłączenia gwarancji, firma TCL wyraźnie wyklucza jakąkolwiek odpowiedzialność za jakiekolwiek zmiany, przerwy, wyłączenia, usunięcia, zawieszenia jakichkolwiek treści albo usług udostępnianych przez to urządzenie. Firma TCL może nałożyć ograniczenia na użycie lub dostęp do niektórych usług lub treści, w każdym przypadku i bez ostrzeżenia albo odpowiedzialnosci. Firma TCL nie odpowiada również za usługi klienta związane z treściami lub usługami. Wszelkie pytania lub żądania obsługi odnoszące się do treści lub usług należy bezpośrednio kierować do dostawców treści i usług."];

var noChannelListRemind        = ["Nie znaleziono żadnych kanałów. Lista kanałów będzie dostępna po przeskanowaniu kanałów.","Skanowanie w poszukiwaniu kanałów"];
var closeSubtitleRemind   = "Funkcja będzie dostępna po wyłączeniu napisów. Czy chcesz ustawić teraz?";

var estickerTitles = ["Bardzo realistyczne obrazy","Kolor, który ożywa","Wspaniałe, naturalne ruchy","Dynamika obrazu","Skalowanie SR UHD","Świat w trójwymiarze","Szybsze działanie","Przyszłe materiały 4K","Ciesz się światem online","Sprawdź dodatkową zawartość","Zintegrowane tunery cyfrowe","Podłącz wszystkie urządzenia","Różne źródła 4K","Zawartość USB","Ultraszybkie WiFi","Materiały w urządzeń przenośnych w telewizorze","Materiały z urządzeń przenośnych","Treści lokalne","Zatwierdzone przez DivX","Obraz bez śladów łączenia","Kanał gotowy","TDT Premium"];
var estickerDescriptions = ["Niesamowite wrażenia wizualne dzięki zdjęciom o precyzji cztery razy większej od Full HD na ekranie UHD","Szeroka gama kolorów zapewnia emocje w każdej scenie z jaskrawą czerwienią i szmaragdową zielenią","Interpolacja klatek 4K i podświetlenie eliminują problem rozmazanych ruchów","Oryginalny obraz jest jeszcze żywszy, aby zapewnić naprawdę dynamiczną ekspresję i doskonały kontrast","Ciesz się wyraźniejszymi niż wcześniej programami telewizyjnymi i filmami na Blu-Ray dzięki super rozdzielczość technologii","Ciesz się telewizją 3D i oglądaj różne programy telewizyjne w trójwymiarze","Jeszcze lepsza rozrywka dzięki rdzeniowi Quad Core, który zapewnia płynną interakcję i większą wydajność","Obsługa kodeka HEVC (H.265) pozwoli korzystać z nadchodzącej technologii dystrybucji filmów 4K","Bogactwo aplikacji internetowych, usług VOD i kanałów powtórkowych oraz możliwość przeglądania Internetu","Zobacz więcej dodatkowych usług i treści od swoich ulubionych nadawców","Korzystaj z kanałów telewizyjnych w wysokiej rozdzielczości bez dodatkowego dekodera","Możliwość łatwego podłączenia wielu źródeł cyfrowych dostępnych w domu","Telewizja gotowa na przyszłość, możliwość odtwarzania 4K 50/60 Hz za pośrednictwem HDMI 2.0 przez HDCP 2.2","Materiały wideo i zdjęcia bezpośrednio z dysku USB, dysku twardego lub aparatu na dużym ekranie w rozdzielczości 4K","Najnowsza generacja 2x2 MIMO i standard AC zapewnia bezkonkurencyjnie szybki dostępu do Internetu","Ciesz się zdjęciami, filmami i aplikacjami z urządzeń przenośnych na dużym ekranie dzięki technologii lustrzanego ekranu","Zdjęcia, filmy, aplikacje ze smartfona lub tabletu mogą być wyświetlane na dużym ekranie ","Wyświetlaj na dużym ekranie treści lokalne, takie jak zdjęcia i filmy podłączone do sieci lokalnej","Odtwarzaj wynajmowane lub własne filmy zabezpieczone przez DivX","Ultrawąska ramka i supersmukła konstrukcja","Przetestowane i zatwierdzone przez Canal +","Przetestowane i zatwierdzone przez TDT Premium"];							

var eManualTextArray = ["E-instrukcja","Wszystkie grafiki wewnątrz dokumentu mają wyłącznie charakter orientacyjny."];
var frontPanelRemind = "Panel przedni zablok.";
var eRPRemind		 = "Tryb sklepowy może nie odpowiadać na żądanie ERP. Czy na pewno?";	
var noRelatedChannel = "Brak powiązanego kanału";
var option0624Name          = ["BOP","BFS","Zdarzenie po zdarzeniu","GetUserID","BGM","Reset all","Zreset. sklep","NRM","DVB-T2 i wybór kraju","Tryb HbbTV"];
var DVBT2AndChoice = ["Włącz","Według kraju","Wyłącz"];
var hbbtvServiceRemind = "Usługa  HbbTV dostępna wkrótce.";
var insertWord = "Wstawić";		
var viewDetail = "Zobacz szczegóły";							

var remindOAD  = "Aktualizacja oprogramowania. Nowe zalecane oprogramowanie może istnieć w innym kanale.  Po akceptacji załadowania, może automatycznie zmienić kanał. Wykonać to teraz?";

var LEDStatus = ["Miga", "Normalny","Wyłącz"];
var netFlixRemind = "Niniejsza funkcja zakłóca dostęp do usług Netflix do chwili ponownego zalogowania się.";
var ESNExplanation = "Elektroniczny numer seryjny";
var resetShopRemind = "System jest w tej chwili restowany. Prosimy nie wyłączać odbiornika";
var initialSelectOption = "Wybierz jedną opcję:";
var databaseRemind   = "System określił datę bazy jako uszkodzoną z jakiegoś powodu i automatycznie ją naprawił. Naciśnij OK, aby kontynuować";
var Deactivation = "Wyłączanie";
var oadFutureRemind = "Aktualizacja oprogramowania.\n Nowe oprogramowanie będzie dostępna za %s. Aktualizacja potrwa jakiś czas i ekran może zgasnąć. Nie wyłączać odbiornika w czasie aktualizacji. W przypadku akceptacji aktualizacji należy pozostawić odbiornik włączony w zaplanowanym czasie. Czy chcesz odebrać tę aktualizację?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Wyjście dźwięku";
var bt_soundOutPutTV = "Głośniki TV";
var bt_soundOutPutBT = "Urządzenie Bluetooth";
var bt_soundOutPutBT_TV = "Bluetooth i TV";
var bt_refreshBarName = "Urządzenia";
var bt_settingTips_On = "Włącz Bluetooth i szukaj urządzeń.";
var bt_settingTips_Finding = "Szukanie urządzeń…";
var bt_settingTips_NoDevice = "Brak urządzeń";
var bt_deviceList_State_NoConnect = "Nie połączono";
var bt_deviceList_State_Connecting = "Łączenie…";
var bt_deviceList_State_Connected = "Połączono";
var bt_deviceList_State_Paired = "Sparowano";
var bt_deviceList_Conncect_Failed_Tips1 = "Łączenie nie powiodło się.";
var bt_deviceList_Conncect_Failed_Tips2 = "Upewnij się, że włączyłeś Bluetooth w XXX";
var bt_deviceList_Conncect_Success = "Połączono przez Bluetooth.";
var bt_deviceList_Disconncect_Success = "Rozłączono z urządzeniem Bluetooth.";
var bt_deviceList_Disconnect = "Jesteś pewny, że chcesz rozłączyć się z XXX?";
var bt_tipsTitle = "Rada";
var bt_bluetooth_Pairing_Title = "Parowanie Bluetooth";
var bt_bluetooth_Input_Pin = "Wprowadź PIN:";
var bt_bluetooth_Output_Pin_Tip = "Wprowadź PIN XXXX z klawiatury.";
var bt_bluetooth_Pin_Wrong_Tip = "Zły PIN";
var bt_bluetooth_Remove_Pair_Title = "Kolejka";
var bt_bluetooth_Remove_Pair_Ask = "Skasować urządzenie?";
							
var audioDescriptionName = ["Opis audio","Głośnik","Siła głosu głośnika","Słuchawki","Siła głosu słuchawek","Siła głosu AD","Urządzenie Bluetooth","Głośność urządzenia Bluetooth","Wzmacniacz","Głośnik"];
var audioDescriptionOptions = ["Wyłącz","Normalny","Opis audio"];
var volumeOffRemind = 'W menu Ustawienia ustaw XXX na „Wł.””.';
var switchSourceRemind   = " włożone. Czy chcesz teraz włączyć to urządzenie?";
var footballModeName = "Tryb sportowy";
var resetStadium = "Stadion";							

var atvSearchMenu = "ATV manual search";
var dtvSearchMenu = "DTV manual search";
var settingNoticeSourceName ="Automatyczne źródło";

var smartTVOptions		= ["Portal Smart TV","HbbTV","Podziel się i oglądaj","Wyświetlacz Wi-Fi","Warunki użytkowania",
    "Połączony w sieci tryb czuwania","Resetuj smart TV","Cookie policy","Polityka prywatności","Usuwanie danych"];
var supportOptions		= ["Zdalna diagnostyka","Skontaktuj się z nami"];
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

							
var tvDoctor=["Zdalna diagnostyka 2.0",
"Aplikacja służy tylko do tego, aby telewizor Smart TV mógł przeprowadzić kontrole diagnostyczne i przyczyniać się do zwiększenia zadowolenie klienta z produktu. Ta aplikacja będzie gromadzić dane eksploatacyjne telewizora oraz informacje na temat modelu, przesyłać je na serwer i wykorzystywać do rozwiązywania problemów związanych z telewizorem. Nie będzie ona miała dostępu do twoich danych osobowych. Upewnij się, czy twój telewizor jest właściwie podłączony do Internetu.",
"Lokalna diagnostyka",
"Po rozpoczęciu diagnostyki zastosuj się do instrukcji przekazywanych przez inżyniera wsparcia technicznego.",
"Zdalna diagnostyka",
"Przed skorzystaniem z tej funkcji upewnij się, że nasz inżynier wsparcia technicznego jest dostępny online.",
"Numer seryjny:",
"&nbsp;&nbsp;&nbsp;&nbsp;Identyfikator użytkownika:",
"Trwa łączenie…",
"Trwa diagnostyka. \nZapewnij stabilne połączenie sieciowe. ",
"W przypadku braku dostępu do Internetu sprawdź połączenie sieciowe.",
"Zakończ"
];
var contactUsOption = ["Skontaktuj się z nami",
    "W razie problemów z obsługą urządzenia skontaktuj się z firmą TCL.",
    "Skontaktuj się z nami",
    "Witryna: odwiedź witrynę",
    "Nr telefonu do biura obsługi:","Informacje o produkcie","Nazwa modelu:",
    "Wersja oprogramowania:","","Identyfikator użytkownika:","Identyfikator projektu:",
    "Typ klienta:","Adres MAC karty bezprzewodowej:","Adres MAC karty przewodowej:","Nr ESN Netflix:","Skanuj informacje w telefonie komórkowym.",
    " i wybierz kraj."];



//本地launcher的翻译，与服务器无关，只用于本地launcher
var homePageWords = ["Historia", "Wyszukiwanie"];//home页的翻译
var titlePageWords = ["Dom", "Filmy wideo","TV","Aplikacje"];//index的标题翻译
var videosPageWords = ["FILM", "Sport","MUZYKA","Popularne","Gry","Edukacja","Wiadomości"];//videos页的内容翻译

//同时应用于本地和服务器
var statusPageWords = ["USB","Ustawienia","Wi-Fi","Połączenie przewodowe"];//状态栏的翻译

//二级页面的翻译
var searchPageWords = ["Wyszukiwanie", "Popularne wyszukiwania:","Seriale, Filmy, Ludzie ..."];
var resultSearchPageWords = ["Wyniki dotyczące", " ","Spróbuj użyć innych słów kluczowych.","Nie znaleziono żadnego filmu dotyczącego "," "];
var historyPageWords = ["Historia", 'Naciśnij','aby usunąć historię',"Usuń jeden","Usuń wszystkie","Jutro","Dzisiaj"," Jeszcze nie obejrzałeś(aś) żadnego filmu.","Pomyślnie usunięto historię oglądania!"];
var channelPageWords = ["Jeszcze nie znaleziono żadnego filmu."];



//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9",
                       	   "Zoom-","0","Zoom+",
                       	   "Zakończ","0","",
                       	   "Lista","0","Tekst",
                       	   "Przewodnik","Wejdź","Zakończ",
                       	   "Menu","Napisy","Info",
                       	   "Zatrzymaj",
                       	   "Info","Menu","Zakończ",
                       	   "Zakończ"
                       	   ];

//added for LA sports mode
var sportsModeInitReminds= ["Kreator służy do konfiguracji dysku USB dla trybu sportowego. Wybierz tryb konfiguracji.",
						 "Wybierz rozmiar pliku dla trybu sportowego.",
						 "Tworzenie pliku dla trybu sportowego",
						 "Dysk USB jest zbyt wolny (< %f MB/s) do obsługi trybu sportowego!",
						 "Dysk USB jest gotowy do obsługi trybu sportowego. Zalecamy wymianę dysku USB (szybkość > %f MB/s), aby poprawić wydajność.",
						 "Dysk USB jest gotowy do obsługi trybu sportowego."];

var sportsModeExtra	= ["Czy chcesz zatrzymać tryb sportowy i zmienić kanał?",
						"Czy chcesz zatrzymać tryb sportowy i zmienić źródło na urządzenie podłączone do wejścia SCART?",
						"Czy chcesz zatrzymać tryb sportowy i zmienić źródło na urządzenie podłączone do wejścia HDMI?",
						"Tryb sportowy nie jest obsługiwany na szyfrowanych kanałach.",
						"Czy chcesz zatrzymać tryb sportowy i przejść do EPG?",
						"Czy chcesz zatrzymać tryb sportowy i przejść do menu multimediów?",
						"Czy chcesz zatrzymać tryb sportowy i zmienić źródło wejścia?",
						"Nastąpi wyjście z aktualnego trybu sportowego. Czy chcesz wyjść?"];
var remoteControlNote = "- Załączony pilot zdalnego sterowania może różnić się w zależności od modelu produktu";


var textArray = ["Volume","Channel","Source","Switch/Power","Guide","seconds to Power OFF"];
var guideArray = ["VOL-","VOL+","CH-","CH+","Pre","Next"];
var favChannelListRemind = ["Brak ulubionych kanałów. Przejdź do innych list i użyj „zielonego przycisku”, aby dodać ulubione kanały."];

var proxySetting = ["Ustawienia proxy","Port"];
var powerOffShop = ["Zalecane użycie trybu Sklepowego. Kontynuować?"];
var tcastTextPageWords = ["Wiele filmów, bogatych aplikacji","Zdalny telewizor dostępny na wyciągnięcie ręki","Wspaniała zawartość do udostępniania na dużym ekranie"];
var tcastOtherWords = ["Scan QR code and download T-Cast","Sieć połączona z telewizorem","Nazwa telewizora","T-Cast"];
var hbbtvWords = ["Ustawienia Hbbtv","HbbTV","Pliki cookies","Ciasteczka podmiotu trzeciego","ID urządzenia","śledzenie"];
var hbbtvTrackingWords = ["YES","NO","Nie szkodzi"];
var eStickerTipWords = ["Pozostało poniżej 400M miejsca w pamięci zewnętrznej. Wykasować filmy trybu Demo, aby uzyskać więcej miejsca?"];
var delEstickerVideoRemid = ["Film został pomyślnie usunięty"];
var selectSatRemind = "Można wybrać nie więcej niż 20 satelitów!";
var cookiePolicyTitle = "Polityka Plików Cookie – Serwis Smart TV w trybie online";
var cookiePolicyConditions = ["Spółka przestrzega prywatności użytkowników korzystających z urządzeń Smart TV wyprodukowanych przez Spółkę oraz z usług świadczonych przez Spółkę w ramach Serwisu. Wiele witryn oraz innych usług Internetowych wykorzystuje pliki cookie, które będą akceptowane, przechowywane i przesyłane przez urządzenie Smart TV użytkownika w celu zapewnienia właściwego działania takich witryn i usług. Spółka używa również plików cookie w ramach świadczenia Serwisu na rzecz użytkowników. Niniejsza Polityka Plików Cookie zawiera informacje na temat plików cookie zapisywanych w urządzeniu Smart TV użytkownika oraz sposobów zarządzania nimi.\nProsimy pamiętać, że Spółka zbiera i/lub przetwarza wszystkie dane osobowe za pośrednictwem lub przy pomocy plików cookie zgodnie z postanowieniami Polityki Prywatności. W związku z tym należy zapoznać się zarówno z niniejszą Polityką Plików Cookie, jak i z Polityką Prywatności.\n1. Czym są pliki cookie ?\nPliki cookie to niewielkie pliki tekstowe, które mogą być zapisane w urządzeniu Smart TV użytkownika. W momencie odwiedzenia witryny lub skorzystania z usługi czerwonego przycisku świadczonej przez stację TV, taka witryna lub serwis mogą umieścić w urządzeniu Smart TV swoje pliki cookie. Podczas kolejnej wizyty pliki cookie umieszczone w urządzeniu Smart TV użytkownika wysyłają informacje do strony, która je umieściła w urządzeniu. Pliki cookie są powszechnie używane przez witryny i serwisy. Pliki cookie zazwyczaj zawierają informacje na temat nazwy domeny, z której takie pliki pochodzą, \"okres ważności\" plików cookie oraz wartości (zazwyczaj jest nią niepowtarzalny numer). Więcej informacji na temat plików cookie oraz sposobu ich działania można znaleźć na stronie: www.allaboutcookies.org.\nPliki cookie można podzielić na funkcjonalne i niefunkcjonalne pliki cookie. Funkcjonalne pliki cookie to pliki, które wymagane są w celu świadczenia serwisu Smart TV na rzecz użytkownika oraz w celu dostarczania właściwych treści do urządzenia Smart TV przez witryny i inne serwisy. Niefunkcjonalne pliki cookie obejmują wszystkie pozostałe rodzaje takich plików.\nNiniejsza Polityka Plików Cookie dotyczy plików cookie umieszczanych przez nas oraz reklamowych plików cookie, które osoby trzecie mogą umieścić w urządzeniu Smart TV użytkownika za pośrednictwem naszego serwisu.\nNiniejsza Polityka Plików Cookie nie obejmuje plików cookie, które mogą zostać umieszczone w urządzeniu Smart TV użytkownika w przypadku korzystania z zewnętrznych witryn, serwisów czy aplikacji. Informacje na temat takich plików cookie można znaleźć w politykach plików cookie takich osób trzecich. Jednakże, w niniejszej Polityce Plików Cookie zamieszczono informacje na temat sposobu usuwania takich plików cookie (zob. punkt 4 poniżej).\n2. Stosowane przez nas niefunkcjonalne pliki cookie\nReklama: W trakcie korzystania z serwisu Smart TV na urządzeniu Smart TV użytkownika mogą wyświetlać się reklamy oraz reklamy wideo. Reklamy te zamieszczane są przez nas lub osoby trzecie za pośrednictwem naszego serwera reklamowego, który koordynuje wyświetlanie takich reklam. Serwery reklamowe należące do nas lub osób trzecich umieszczają pliki cookie na urządzeniu Smart TV użytkownika. Na podstawie takich plików cookie serwer reklamowy rejestruje reklamy wyświetlane w urządzeniu Smart TV użytkownika oraz reklamy otwierane przy jego użyciu. Na podstawie informacji zapisanych w takich plikach reklamowych jesteśmy w stanie śledzić, jakie reklamy zostały już wysłane do urządzenia Smart TV użytkownika. Dzięki temu możemy zapewnić, że reklamy wysyłane do danego urządzenia Smart TV nie będą się często powtarzać i dokonać odpowiednich uzgodnień handlowych z naszymi reklamodawcami. Nie będziemy wykorzystywać takich informacji do wysyłania reklam ukierunkowanych (targeted advertising). Ponadto osoby trzecie mogą wysyłać reklamy do urządzenia Smart TV użytkownika i umieszczać na nim pliki cookie za pośrednictwem naszego systemu reklamowego. \nTakie pliki cookie zawierają, między innymi, informacje na temat wyświetlonych reklam, w jakich aplikacjach lub domenach reklamy te zostały zamieszczone oraz informacje na temat adresu IP użytkownika. Pozwala to zapamiętać, jak często wyświetlona została dana reklama oraz zapobiegać zbyt częstego powtarzania tych samych reklam. Reklamodawcy zewnętrzni mogą zamieszczać reklamy, które mogą również używać plików cookie w celu śledzenia aktywności użytkownika w różnych witrynach oraz w celu dostarczania reklam, które odpowiadają preferencjom użytkownika. \n3. Witryny zewnętrzne\nZewnętrzne witryny lub serwisy, które użytkownik odwiedza przy pomocy urządzenia Smart TV mogą umieszczać w tym urządzeniu pliki cookie, dzięki którym zapisują i przechowują informacje na temat aktywności użytkownika w takich witrynach czy serwisach. Nie wymagamy takich działań, ani do nich nie zachęcamy i nie wykorzystujemy takich informacji. Więcej informacji na temat sposobu używania plików cookie przez takie witryny czy serwisy można znaleźć w ich polityce prywatności oraz polityce plików cookie. \n4. Usuwanie plików cookie\nPrzy pomocy interfejsu użytkownika zainstalowanego w urządzeniu Smart TV użytkownik może usunąć wszystkie pliki cookie oraz inne dane zapisywane w urządzeniu Smart TV przez przeglądarkę. Użytkownik powinien usunąć wszystkie pliki cookie oraz ustawienia lokalne przed sprzedażą lub oddaniem urządzenia Smart TV.\n5. Kontakt\nW przypadku jakichkolwiek pytań czy uwag dotyczących naszej Polityki Plików Cookie lub ich stosowania, prosimy o kontakt pod adresem: FRsupport@tcl.com.\nWersja: 1.0.\n"];
var privacyPolicyTitle = "Polityka Prywatności - Serwis Smart TV w trybie online";
var privacyPolicyConditions = ["Szanujemy prywatność użytkowników w procesie przetwarzania ich danych osobowych. Niniejsza Polityka Prywatności przedstawia informacje na temat podmiotu odpowiedzialnego za gromadzenie, przetwarzanie i wykorzystywanie danych osobowych, które zbieramy od użytkowników w związku z korzystaniem z naszego serwisu Smart TV (\"Serwis\"), a także informacje na temat rodzaju danych osobowych użytkowników zbieranych przez nas, sposobu ich wykorzystywania oraz praw użytkownika w związku z takim wykorzystywaniem danych osobowych przez nas.\n1. Administrator Danych\nPodmiotem odpowiedzialnym za gromadzenie, przetwarzanie i wykorzystywanie danych osobowych otrzymywanych od użytkowników w procesie korzystania przez nich z Serwisu jest Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Strefa Przemysłowa Sheko, Miasto Shenzhen, Prowincja Guangdong, Chiny (\"Spółka\").\nProsimy jednak pamiętać, że nie jesteśmy odpowiedzialni za wszystkie opisane poniżej działania w zakresie przetwarzania danych. Niemniej jednak w naszej Polityce Prywatności zamieściliśmy opis takich działań, ponieważ dotyczą one korzystania z urządzenia Smart TV przez użytkownika.\n2. Zgoda na przetwarzanie danych\nCzęść z procesów gromadzenia, przetwarzania i/lub wykorzystywania danych osobowych użytkowników wymaga ich zgody.\nJeżeli użytkownik wyraził zgodę na wykorzystywanie jego danych osobowych w celu ulepszenia Serwisu, zgoda taka będzie brzmieć następująco:\n\"Wyrażam zgodę na gromadzenie, przetwarzanie oraz wykorzystywanie informacji na temat czasu włączenia mojego urządzenia, listy kanałów DTV, listy ulubionych kanałów, długości trwania wizyty oraz oglądanych kanałów w celu analizy moich przyzwyczajeń w celu ulepszenia Serwisu i/lub stwierdzenia, ilu użytkowników w trybie online Spółka ma w ciągu dnia/miesiąca/roku oraz w celu przekazania tych informacji stacjom TV.\"\nJeżeli użytkownik wyraził zgodę na wykorzystywanie jego danych osobowych w celach przesyłania mu reklam dopasowanych do jego zainteresować, zgoda brzmieć będzie następująco:\n\"Wyrażam zgodę na gromadzenie, przetwarzanie i wykorzystywanie informacji na temat mojego rodzaju klienta oraz kraju w celu wysyłania mi odpowiednio dopasowanych reklam zarówno od Spółka jak i od podmiotów trzecich, w toku korzystania z usług\".\nZgoda taka jest dobrowolna. Użytkownik, który nie wyraził zgody będzie nadal mógł korzystać z Serwisu. Jednakże, w takim przypadku mogą wyświetlać się reklamy oraz treści niedopasowane do preferencji użytkownika. Niezależnie od tego, czy użytkownik wyraził zgodę czy też nie, Spółka zastrzega sobie prawo do gromadzenia, przetwarzania i/lub wykorzystywania powyższych danych w zakresie dozwolonym przez obowiązujące przepisy prawa.\nUżytkownik może w dowolnym czasie cofnąć swoją zgodę na powyższe działania. Użytkownik ma prawo dostępu do treści swoich danych i do ich poprawiania. Podanie danych jest dobrowolne. Użytkownik może sprzeciwić się wykorzystywaniu jego danych osobowych dla celów marketingowych, badania rynku czy opinii publicznej oraz na dopasowywania usług w ramach Serwisu do jego potrzeb. W celu cofnięcia uprzednio wyrażonej zgody i/lub wyrażenia sprzeciwu, prosimy o odpowiednią zmianę ustawień prywatności Smart TV.\n3. Gromadzone dane osobowe\nNiezależnie od tego, czy użytkownik wyraził zgodę, czy też nie, Spółka gromadzić będzie, przetwarzać i wykorzystywać dane następujących kategorii:\nID Urządzenia: Smart TV użytkownika posiada niepowtarzalny numer, który umożliwia identyfikację i uwierzytelnianie Smart TV w trakcie korzystania z Serwisu przez użytkownika. Numer ten określany jest jako ID Urządzenia. ID Urządzenia udostępniony zostanie naszemu partnerowi w celu świadczenia usług w ramach Serwisu na rzecz użytkownika. ID Urządzenia udostępniony zostanie również wybranym partnerom dostarczającym treści dla celów uwierzytelniania. Tacy partnerzy dostarczający treści korzystać będą z ID Urządzenia w celu uwierzytelnienia Smart TV użytkownika tak, aby użytkownik mógł uzyskać dostęp do usług świadczonych przez takich partnerów.\n  \nAdres IP i MAC: W momencie połączenia się z Internetem Smart TV użytkownika przypisany zostanie adres IP. Adres IP zostanie przesłany do nas i będzie przez nas przetwarzany za każdym razem, gdy Smart TV zażąda informacji lub danych od Serwisu. Jeżeli Smart TV użytkownika zainstalowany jest za routerem (np. w ramach lokalnej sieci domowej lub lokalnej sieci WLAN), możemy pobrać i przetwarzać taki adres IP routera. Adres MAC to niepowtarzalny numer przypisany do poszczególnych interfejsów sieciowych Smart TV użytkownika. Adres MAC będzie również przez nas pobierany i przetwarzany w przypadku, gdy Smart TV zażąda informacji lub danych od Serwisu. \nDane dotyczące korzystania z Serwisu: Za każdym razem, gdy użytkownik połączy Smart TV z Internetem i włączy urządzenie Smart TV, zostanie ono automatycznie połączone z Serwisem, którym zarządza nasz partner. Smart TV zostanie następnie uwierzytelnione pod względem uprawnionego dostępu do Serwisu. W tym celu Serwis przechowuje jeden lub kilka niepowtarzalnych numerów identyfikujących Smart TV użytkownika. W momencie połączenia z Serwisem Smart TV wysyła przypisany mu adres IP oraz informacje na temat urządzenia (model Smart TV, wersja oprogramowania), w celu sprawdzenia, czy nie są dostępne aktualizacje oprogramowania.\nUstawienia Serwisu: W ramach standardowych funkcjonalności Serwisu użytkownik może ręcznie ustawić kolejność wyświetlania aplikacji Serwisu. Nasz partner usługowy przechowuje takie ustawienia oraz inne preferencje użytkownika ustawione przy użyciu Serwisu. Informacje te zostaną przypisane do ID Urządzenia.\nInformacje na temat Urządzenia: Smart TV przechowuje różnego rodzaju informacje na temat własnych ustawień i konfiguracji. Informacje te obejmują dane na temat rodzaju Smart TV, wersji systemu operacyjnego Smart TV, rozdzielczości panelu, ID projektu (tzn. informacje na temat plików konfiguracyjnych), agenta użytkownika, nazwy przeglądarki, wersji przeglądarki oraz języka i kraju, skonfigurowanego w Smart TV. Informacje te będą przez nas wykorzystywane oraz przesyłane do naszego partnera świadczącego usługi oraz partnerów dostarczających treści.\nReklamy: Serwis może zamieszczać reklamy. Reklamy te pochodzą od nas lub od osób trzecich, które korzystają z udostępnionego przez nas inwentarza reklam. Wszystkie reklamy przekazywane są przez nas lub za pośrednictwem serwera reklamowego, który je koordynuje. Nasz serwer reklamowy lub serwis reklamowy osób trzecich może zainstalować na Smart TV pliki cookie. Więcej informacji na temat plików cookie można znaleźć w naszej Polityce Plików Cookie. \nDane wysyłane do partnera usługowego oraz partnera dostarczającego treści: W momencie korzystania z Serwisu Smart TV użytkownika zażąda danych od Serwisu za pośrednictwem Internetu. W ramach tego procesu, wyżej wspomniany adres IP oraz dane na temat konfiguracji języka i kraju w Smart TV użytkownika zostaną przesłane do naszego partnera usługowego. Partner usługowy będzie przetwarzać takie dane zgodnie ze swoją polityką prywatności.\nKorzystanie z drugiego ekranu: Jeżeli użytkownik korzysta z naszej aplikacji drugiego ekranu, będziemy gromadzić dane na temat ustawień aktywowanych w ramach tej aplikacji, a także na temat ustawień kraju i języka, listy kanałów DTV, listy ulubionych kanałów, listy programów, ID Urządzenia, obecnie oglądanego kanału, wersji protokołu oraz adresu IP Smart TV i przetwarzać takie dane na naszych serwerach. Dzięki temu nasze serwery będą sterować Smart TV użytkownika zgodnie z ustawieniami w ramach aplikacji drugiego ekranu.\nHbbTV - \"Czerwony Przycisk\":  Stacje TV (\"Stacje\") mogą wraz z wysyłanym sygnałem telewizyjnym wysyłać również dodatkowe informacje.  W momencie, gdy Smart TV połączone z Internetem otrzyma określone instrukcje zawarte w takich dodatkowych informacjach, pobierze ono obraz lub stronę z witryny Stacji i wyświetli je wraz z poleceniem przyciśnięcia \"Czerwonego Przycisku\" na pilocie w celu skorzystania z dodatkowych usług zapewnianych przez Stację. Dzieje się tak za każdym razem, gdy użytkownik przełączy stację. W momencie pobrania obrazu z witryny Stacji Smart TV przesyła określone dane osobowe, tzn. informacje na temat listy kanałów DTV, obecnie oglądanego kanału, tabeli z informacjami na temat zdarzeń, czasu telewizyjnego, adresu IP Smart TV użytkownika oraz plików cookie przechowywanych w Smart TV (jeżeli zostały zapisane). Stacja odpowiada za gromadzenie, przetwarzanie i/lub wykorzystywanie takich danych. Ponadto, jeżeli użytkownik korzysta z dodatkowych usług oferowanych przez Stację przy pomocy Czerwonego Przycisku, Stacja może gromadzić również inne dane osobowe użytkownika (np. informacje na temat oglądanych filmów wideo na życzenie, czytanych wiadomości itp.).\n4. Cele, w jakich przetwarzamy i/lub wykorzystujemy dane osobowe użytkownika \nZebrane dane osobowe przetwarzamy w następujących celach:\n• Świadczenie usług w ramach Serwisu: W celu zapewnienia dostępu do Serwisu oraz usług świadczonych przez naszych partnerów dostarczających treści wykorzystujemy dane na temat adresu IP oraz adresu MAC, ID Urządzenia, wersji systemu operacyjnego Smart TV, rodzaju klienta Smart TV oraz rozdzielczości panelu, ID projektu (tzn. informacje na temat plików konfiguracyjnych), listy kanałów DTV użytkownika, oglądanych kanałów, strefy czasowej, a także ustawień kraju i języka.\n• Cele te obejmują (między innymi) uwierzytelnianie, świadczenie usług lokalizacyjnych (location-based services) (np. prognozy pogody), zapobieganie niewłaściwemu korzystaniu, zarządzanie incydentami naruszenia bezpieczeństwa, monitorowanie dostępności Serwisu oraz zapisywanie preferencji użytkownika.  \n• Uwierzytelnianie: Uwierzytelniania dokonujemy na podstawie ID Urządzenia oraz adresu MAC.  \n• Aktualizacje oprogramowania: Po włączeniu, Smart TV użytkownika wysyła do nas informacje na temat adresu IP, ID Urządzenia, wersji oprogramowania, rodzaju klienta Smart TV, ID projektu (tzn. plików konfiguracyjnych), ID użytkownika oraz numeru seryjnego, co umożliwia nam aktualizację oprogramowania.\n• Ulepszanie Serwisu: W celu ulepszania naszych usług świadczonych w ramach Serwisu na rzecz użytkowników wykorzystujemy zagregowane i animizowane dane (tzn. dane na temat korzystania z Serwisu przez użytkownika).\n• Przesyłanie reklam. Używamy informacji w reklamowych plikach cookie aby umożliwić naszemu systemowi ustalenie, które ogłoszenia będą pokazywane na Twoim Smart TV. w celu  aby użytkownik nie otrzymywał zbyt wielu podobnych reklami jesteśmy i abyśmy byli w stanie zawrzeć właściwe umowy z naszymi reklamowymi partnerami.  Zewnętrzni reklamodawcy, którzy prezentują reklamy w Serwisie lub strony  partnerów z treścią, po koordynacji przez nas serwer reklamowy takze mogą używać plików cookie aby Cie śledzić poprzez liczne strony jakie odwiedza użytkownik  aby dostarczać reklam jakie odzwierciedlają osobiste preferencje użytkownika.\n• Optymalizacje reklam Danye związane z oglądaniem reklam I kliknięciami na reklamy są używane  w celu optymalizacji doświadczeń konsumentów z reklamami w Serwisie. \n• Upusty: Informacje na temat ID Urządzenia przekazywane naszym partnerom dostarczającym treści określenie, w jakim zakresie będą mogli udostępnić użytkownikowi bezpłatny dostęp do Wideo na Życzenie w ramach oferowanych przez nich tytułów.\n• Organy ścigania: W przypadku, gdy ujawnienia danych osobowych zażądają od nas organy ścigania lub sądy, ujawnimy takie dane wyłącznie na podstawie ważnego nakazu lub decyzji sądowej, nakazującej nam współpracę z takimi organami. \nZ Serwisu można korzystać przy pomocy pseudonimu z wyjątkiem usług, które wymagają podania nazwiska i/lub adresu użytkownika.\n5. Kategorie odbiorców:\nSpółka przekazuje dane osobowe zbierane w trakcie korzystania z Serwisu przez użytkownika wyłącznie następującym osobom trzecim:\n• Zewnętrzni dostawcy usług Smart TV, ale tylko w przypadku, gdy użytkownik takich usług zażądał (tzn. jeżeli użytkownik uruchomi w swoim Smart TV aplikację Netflix, możemy dostarczyć do Netflix informacje na temat adresu IP, adresu MAC, wersji oprogramowania oraz modelu TV użytkownika). \n• Zewnętrzni partnerzy dostarczający treści, jeżeli użytkownik zażądał takich treści od takich partnerów (np. w celu świadczenia usługi GoLive IP TV, możemy przekazać podmiotowi prawnemu świadczącemu usługę GoLive dane na temat rodzaju klienta TV, adresu IP lub ustawień językowych użytkownika).\n• Spółka będzie przekazywać określone dane osobowe użytkownika wyżej wymienionym osobom trzecim wyłącznie za zgodą użytkownika.\n• Zewnętrzni dostawcy usług, np. podmioty przetwarzające dane, które współpracują ze Spółką w ramach Serwisu.\nSpółka będzie przekazywać dane osobowe użytkownika osobom trzecim wyłącznie w przypadku, jeżeli będzie do tego zobowiązana zgodnie z prawem (np. sądy lub prokuratura), jeżeli użytkownik wyraził na to zgodę lub jeżeli takie przekazywanie jest zgodne z obowiązującymi przepisami prawa.\n6. Państwa, w których przetwarzane będą dane osobowe użytkownika\nSpółka i/lub niektórzy z wyżej wymienionych odbiorców danych osobowych użytkownika mogą mieć siedzibę poza Europejskim Obszarem Gospodarczym (tzn. w Chinach lub USA).\nW związku z tym dane osobowe użytkownika mogą być przetwarzane na terenie państw, które nie zapewniają właściwego poziomu ochrony danych osobowych, jaki wymagany jest zgodnie z ustawą o ochronie danych osobowych.\n7. Prawa użytkownika\nUżytkownik może skontaktować się ze Spółką w celu uzyskania informacji na temat swoich danych osobowych przetwarzanych przez Spółkę i/lub wykonania swoich ustawowych praw dotyczących dostępu do swoich danych osobowych, ich korekty, usunięcia lub blokowania; i/lub w celu sprzeciwienia się przetwarzaniu swoich danych osobowych dla celów marketingowych i/lub dla celów badania rynku lub opinii publicznej.\n8. Zmiany w Polityce Prywatności\nMożemy wprowadzać zmiany w niniejszej Polityce Prywatności mające na celu ulepszenie naszego Serwisu, np. poprzez wdrożenie nowych technologii lub wprowadzenie nowych usług. Zastrzegamy sobie prawo do wprowadzania zmian lub uzupełnień do niniejszej Polityki Prywatności w dowolnym czasie. \n9. Kontakt\nW przypadku wszelkich pytań na temat niniejszej Polityki Prywatności lub reklamacji dotyczących wykorzystywania przez nas danych osobowych użytkownika należy skontaktować się z nami pod adresem:\nEmail: FRsupport@tcl.com\nWersja: 1.0.\n"];
var privacyPolicyTerms = [
    "Włącz usługę Smart TV.",
    "Wyrażam zgodę na gromadzenie, przetwarzanie i wykorzystywanie następujących danych: czas uruchomienia urządzenia, lista kanałów DTV, lista ulubionych kanałów, czas wizyty oraz wybierane kanały – do przeprowadzenia analizy zachowań użytkowników w celu ulepszenia usług i/lub określenia dziennej/miesięcznej/rocznej liczby użytkowników TCL online, a także udostępnianie powyższych informacji stacjom telewizyjnym.",
    "Włącz usługę rekomendacji.",
    "Włącz obsługę aplikacji second screen dla urządzeń przenośnych.",
    "Włącz automatyczną aktualizację oprogramowania.",
    "Włącz usługę FreeviewPlay."
];
var privacyPolicyTips = [
    "Wszystkie usługi Smart TV zostaną wyłączone.",
    "Usługa HbbTV udostępniana przez kanał TV, gdy używany jest wbudowany tuner, zostanie wyłączona.",
    "Usługa rekomendowania zawartości i programu TV zostanie wyłączona.",
    "Obsługa aplikacji second screen zostanie wyłączona.",
    "Telewizor nie będzie automatycznie wyszukiwał aktualizacji oprogramowania i nowych funkcji.",
    "Treści FreeviewPlay zostaną zablokowane."
];
var privacyPolicyRemind = "Zaznacz odpowiednie pole wyboru w Ustawienia.";
var set = "Ustaw";
var copyShopDemoTips = ["Podłączono USB. Czy chcesz skopiować film na pamięć flash?","Kopiowanie filmu na pamięć flash","Film został skopiowany!","Błąd kopiowania filmu!"];
var dataDeletionWords = ["Wykasuj dane z usługi Smart TV na serwerach backend.","Uwagi: Dane użytkownika Smart TV zostaną usunięte w ciągu miesiąca od zaznaczenia tej opcji. Pamiętaj, że usunięcie danych nie ma wpływu na dane przechowywane lokalnie w TV.","Nie wysyłaj danych do serwera Smart TV.","Uwagi:  Po zaznaczeniu tego pola dane powiązane z korzystaniem przez Ciebie z usług Smart TV nie będą przesyłane na serwer. Telewizor nie będzie też otrzymywał rekomendacji usług.","Jeśli chcesz wiedzieć więcej, wejdź na www.tcl.eu"];
var miracastWords = ["Połączenie bezprzewodowe","Odbicie lustrzane telefonu z systemem Android na telewizorze","Kliknij, aby połączyć","Niniejsza funkcja jest dostępna wyłącznie na telefonie z systemem Android"];
var miracastTips = ["Kroki podłączania","Otwórz ustawienia systemowe","Więcej sposobów połączenia \n / Inne połączenia bezprzewodowe","Wybierz ekran bezprzewodowy","Kliknij, aby połączyć \n czeka na znalezienie"];
var termsAndConditions = ["\n\nTreści i usługi (zwane łącznie \" Licencjonowaną Aplikacją\") udostępniane za pośrednictwem twojego telewizora (niniejsze \"Urządzenie\") są licencjonowane, a nie sprzedawane, wyłącznie do użytku zgodnie z niniejszym regulaminem. Dostawcy Licencjonowanej Aplikacji (każdy z nich zwany \"Dostawcą Aplikacji\") zastrzegają sobie wszystkie prawa, które nie zostały wyraźnie przyznane użytkownikowi.\n\n1.Zakres licencji\n\nLicencja udzielona Ci na Licencjonowaną Aplikację przez właściwego Dostawcę Aplikacji jest ograniczona do nieprzenoszalnej licencji na korzystanie z Licencjonowanej Aplikacji na Urządzeniu, którego jesteś właścicielem lub które kontrolujesz. Nie możesz dystrybuować ani udostępniać Licencjonowanej Aplikacji w sieci, w której mogłaby zostać użyta na wielu urządzeniach jednocześnie. Nie możesz wypożyczać, wydzierżawiać, pożyczać, sprzedawać, redystrybuować ani udzielać sublicencji do Licencjonowanej Aplikacji. \n\nWszystkie Licencjonowane Aplikacje i wszystkie zawarte w nich treści dostępne za pośrednictwem tego Urządzenia należą do Dostawcy Aplikacji i są chronione przez odpowiednie przepisy prawa własności intelektualnej. O ile stosowne przepisy prawa nie zezwalają inaczej, nie wolno modyfikować, kopiować, dekompilować, dokonywać inżynierii odwrotnej, demontować, ponownie publikować, przesyłać, wysyłać, transmitować, tłumaczyć, podejmować próby uzyskania kodu źródłowego, tworzyć utwory pochodne lub w inny sposób wykorzystywać jakąkolwiek Licencjonowaną Aplikację lub jakąkolwiek jej aktualizację lub ich część. Jeśli naruszysz to ograniczenie, możesz zostać pociągnięty/a do odpowiedzialności karnej i odszkodowawczej. Warunki licencji regulować będą wszelkie aktualizacje dostarczone przez Dostawcę Aplikacji, które zastąpią i/lub uzupełnią oryginalną Licencjonowaną Aplikację, chyba że takiej aktualizacji towarzyszyć będzie oddzielna licencja, w którym to przypadku jej warunki będą wiążące. Ponosisz wyłączną odpowiedzialność za wszelkie (jeżeli jakiekolwiek) koszty związane z aktualizacją Licencjonowanej Aplikacji. Użytkownik ponosi wyłączną odpowiedzialność za wszelkie i całkowite koszty związane z uaktualnieniem Licencjonowanej aplikacji.\n\n2.Materiały podmiotów trzecich\n\nLicencjonowana Aplikacja może umożliwiać dostęp do usług i stron internetowych Dostawcy Aplikacji oraz podmiotów trzecich (zwane łącznie \"Usługami\"). Korzystając z dowolnej Usługi, możesz napotkać na treści, które mogą zostać uznane za obraźliwe, nieprzyzwoite lub budzące zastrzeżenia, które to treści mogą, ale nie muszą zostać zidentyfikowane jako wyrażone niedwuznacznym językiem, oraz że wyniki każdego wyszukiwania lub wprowadzenia określonego adresu URL mogą automatycznie i przypadkowo wygenerować linki lub odnośniki do budzących zastrzeżenia materiałów. Niemniej jednak producet tego Urządzenia (dalej \"Producent\") i Dostawca Aplikacji nie ponoszą żadnej odpowiedzialności za treści, które mogą zostać uznane za obraźliwe, nieprzyzwoite lub budzące zastrzeżenia.\n\nProducent nie ponosi odpowiedzialności za badanie lub ocenę treści, dokładności, kompletności, aktualności, ważności, zgodności z prawami autorskimi, legalności, jakości lub jakiegokolwiek innego aspektu takich Usług. Producent nie gwarantuje ani nie wspiera, nie przyjmuje ani nie będzie ponosić żadnej odpowiedzialności wobec użytkownika ani żadnej innej osoby za którąkolwiek z Usług.\n\nUsługi mogą zawierać zastrzeżone treści, informacje i materiały (zwane dalej łącznie \"Materiałami podmiotów trzecich\"), które są chronione przez obowiązujące przepisy prawa własności intelektualnej lub inne, i zabronione jest używanie takich Materiałów podmiotów trzecich w jakikolwiek sposób, z wyjątkiem dozwolonego użycia Usługi. O ile stosowne przepisy prawa nie zezwalają inaczej, nie wolno reprodukować, modyfikować, wynajmować, dzierżawić, wypożyczać, sprzedawać, rozpowszechniać Materiałów podmiotów trzecich ani tworzyć utworów pochodnych w jakikolwiek sposób, a także nie wolno wykorzystywać Usług w jakikolwiek nieautoryzowany sposób. Zabronione jest korzystanie z Usług w celu nękania, znęcania się, prześladowania, grożenia, zniesławiania, naruszania lub łamania praw jakichkolwiek podmiotów trzecich, a Producent nie jest w żaden sposób odpowiedzialny za takie wykorzystanie przez użytkownika, ani za wszelkie nękanie, groźby, oszczercze, obraźliwe lub nielegalne wiadomości lub transmisje, które możesz otrzymać w wyniku korzystania z którejkolwiek z Usług.\n\n3.Brak gwarancji\n\nWszystkie Licencjonowane Aplikacje i Usługi są dostarczane w formie \"tak jak jest\" i \"jak dostępne\" bez jakiejkolwiek gwarancji, wyraźnej lub dorozumianej. Producent wyraźnie zrzeka się wszelkich gwarancji i warunków w zakresie Licencjonowanych Aplikacji, jak również Usług, wyraźnych lub dorozumianych, w tym między innymi lecz nie ograniczając się do gwarancji wartości handlowej, zadowalającej jakości, przydatności do określonego celu, dokładności, niezakłóconego korzystania oraz nienaruszania praw podmiotów trzecich. Producent nie gwarantuje dokładności, aktualności, legalności ani kompletności jakichkolwiek Licencjonowanych Aplikacji lub Usług udostępnianych za pośrednictwem tego Urządzenia i nie gwarantuje, że Urządzenie, Licencjonowane Aplikacje lub Usługi spełnią Twoje wymagania lub że działanie Licencjonowane Aplikacje lub Usługi działać będą w sposób nieprzerwany lub pozbawiony błędów, lub że wady w Licencjonowanej Aplikacji lub Usługach zostaną poprawione. W przypadku, gdy Licencjonowana Aplikacja lub Usługi okażą się wadliwe, należy pokryć całkowity koszt niezbędnej obsługi, naprawy lub korekty.\n\nLicencjonowane Aplikacje i Usługi mogą być zmieniane, zawieszane, usuwane, zakończone lub przerywane, lub dostęp do nich może być wyłączony w dowolnym czasie, bez powiadomienia, a Producent nie składa żadnych oświadczeń ani gwarancji, że jakiekolwiek treści lub usługi zawarte w Licencjonowanych Aplikacjach i Usługach pozostaną dostępne przez dowolny okres czasu. Takie treści i usługi są przekazywane przez podmioty trzecie za pośrednictwem sieci i urządzeń transmisyjnych, nad którymi Producent nie ma kontroli. Nie ograniczając ogólności powyższego, Producent wyraźnie zrzeka się wszelkiej odpowiedzialności za jakiekolwiek zmiany, przerwanie, wyłączenie, usunięcie lub zawieszenie jakiejkolwiek treści lub usługi udostępnionej za pośrednictwem tego Urządzenia. Dostawca Aplikacji i inni dostawcy Usług zastrzegają sobie prawo do zmiany, zawieszenia, usunięcia lub zablokowania dostępu do Licencjonowanych Aplikacji lub Usług w dowolnym czasie i bez powiadomienia. Producent może również nałożyć limity na użytkowanie lub dostęp do niektórych Licencjonowanych Aplikacji lub Usług, w każdym przypadku bez powiadomienia i bez odpowiedzialności.\n\nProducent nie zapewnia obsługi klienta związanej z Licencjonowanymi Aplikacjami i Usługami. Wszelkie pytania lub prośby dotyczące usług związanych z Licencjonowanymi Aplikacjami i Usługami powinny być kierowane bezpośrednio do odpowiedniego dostawcy.\n\n4.Gromadzenie i wykorzystanie informacji\n\nProducent, Dostawcy Aplikacji i dostawcy Usług mogą gromadzić i wykorzystywać dane techniczne i powiązane informacje, w tym między innymi lecz nie wyłącznie informacje techniczne dotyczące tego Urządzenia, oprogramowania systemowego i aplikacyjnego oraz urządzeń peryferyjnych, aby ułatwić dostarczanie aktualizacji oprogramowania, wsparcia produktu i inne usługi dla użytkownika (jeśli istnieją) związane z Urządzeniem i Licencjonowaną Aplikacją. Producent, Dostawcy Aplikacji i dostawcy Usług mogą wykorzystywać takie informacje, o ile znajdują się one w formie, która nie umożliwia identyfikacji użytkownika, w celu ulepszenia ich produktów lub w celu świadczenia usług lub technologii użytkownikowi. Aby uzyskać więcej informacji na temat gromadzenia i wykorzystania informacji, zapoznaj się z naszą politykę prywatności http://www.tcl.eu/en/.\n\n5.Niedostępność niektórych funckji\n\nZ powodu ograniczeń Dostawcy Aplikacji niektóre funkcje, aplikacje i usługi mogą nie być dostępne na tym Urządzeniu (w tym na urządzeniach peryferyjnych) lub we wszystkich terytoriach. Niektóre funkcje tego Urządzenia mogą również wymagać dodatkowych urządzeń peryferyjnych lub opłat członkowskich, które są sprzedawane osobno.\n\n6.Ograniczenie odpowiedzialności\n\nW zakresie nie zabronionym przez obowiązujące przepisy prawa, bez względu na okoliczności, w tym w przypadku zaniedbania, Producent nie będzie odpowiedzialny za jakiekolwiek bezpośrednie, pośrednie, przypadkowe, szczególne lub wynikowe szkody, koszt pomocy prawnej, wydatki lub jakiekolwiek inne szkody wynikające z lub pozostające w związku z jakąkolwiek informacją zawartą w lub w wyniku korzystania z Urządzenia, jakiejkolwiek Licencjonowanej Aplikacji lub dowolnej Usługi przez Ciebie lub jakikolwiek podmiot trzeci, nawet jeśli powiadomiono o możliwości wystąpienia takich szkód.\n\nProducent jest odpowiedzialny wyłącznie za zamierzone działanie i rażące niedbalstwo."];
var privacyNotice = ["\n\nSpółka TCL przetwarza dane osobowe swoich użytkowników z poszanowaniem ich prywatności. Niniejsza Informacja o przetwarzaniu danych zawiera dane podmiotu odpowiedzialnego za przetwarzanie danych osobowych, które zbieramy od naszych użytkowników w z związku z korzystaniem przez nich z naszych usług oferowanych za pośrednictwem inteligentnych telewizorów Smart TV („Usługi”), wskazuje rodzaje danych osobowych, które zbieramy od naszych użytkowników, opisuje, co z nimi robimy, a także informuje o prawach przysługujących naszym użytkownikom w związku z wykorzystywaniem przez nas ich danych osobowych. \n\n1.	Administrator danych oraz nasz przedstawiciel w Unii Europejskiej\n\nZbieraniem, przetwarzaniem i wykorzystywaniem danych osobowych zbieranych od użytkowników w momencie, gdy korzystają oni z Usług, zajmuje się spółka Shenzhen TCL New Technology Co., Ltd. z siedzibą pod adresem No. 5, Industrial Avenue (M), Sheko Industrial Zone, miasto Shenzhen, prowincja Guangdong, Chiny („Spółka”). Dane kontaktowe Spółki oraz naszego przedstawiciela w Unii Europejskiej podane są w Punkcie 12 poniżej. Zwracamy jednak uwagę, że nie ponosimy odpowiedzialności za wszelkie, opisane poniżej czynności przetwarzania danych. Pomimo tego opisujemy rzeczone czynności w naszej Informacji o przetwarzaniu danych, ponieważ czynności te są związane z korzystaniem z naszych telewizorów Smart TV.\n\n2.	Zgoda na przetwarzanie danych\n\nNiektóre z wykonywanych przez nas czynności przetwarzania danych wymagają zgody użytkowników. Przykładem jest wykorzystanie danych osobowych użytkowników w celu doskonalenia Usług.\n\nZgoda jest dobrowolna. Użytkownik, który odmówił udzielenia takiej zgody, może nadal korzystać z Usług, jednak w takim przypadku może on być narażony na oglądanie treści, które nie są dopasowane do jego preferencji. Niezależnie od udzielenia zgody przez użytkownika, zastrzegamy sobie prawo przetwarzania jego danych osobowych w zakresie dopuszczalnym przez obowiązujące prawo.\n\nUżytkownik może wycofać swoją zgodę w dowolnym momencie. Wycofanie zgody nie wpływa na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej wycofaniem. Użytkownicy chcący wycofać zgodę i/lub wnieść sprzeciw (w celu uzyskania informacji o prawie do wniesienia sprzeciwu patrz Punkt 10 i poniższy Załącznik ‒ Prawa użytkowników) proszeni są o wprowadzenie stosownych zmian w ustawieniach prywatności w swoim telewizorze Smart TV.\n\n3.	Kategorie przetwarzanych danych osobowych\n\nPrzetwarzamy w szczególności następujące kategorie danych:\n\nIdentyfikator urządzenia: Każdy telewizor Smart TV przechowuje w swojej pamięci stały, niepowtarzalny numer, który umożliwia nam identyfikację i uwierzytelnienie telewizora Smart TV w momencie, gdy użytkownik korzysta z Usług. Numer ten nazywany jest Identyfikatorem urządzenia. \n\nAdres IP i adres MAC: Do każdego telewizora Smart TV zostaje przypisany adres IP w momencie uzyskania przez niego dostępu do Internetu. Jeżeli telewizor Smart TV podłączony jest do routera (np. w lokalnej sieci domowej lub w lokalnej sieci WLAN), możemy przetwarzać adres IP takiego routera. Adres MAC to niepowtarzalny numer przypisany do każdego interfejsu sieciowego telewizora Smart TV. \n\nInformacje o konkretnym urządzeniu: Każdy telewizor Smart TV przechowuje w swojej pamięci szereg informacji o sobie oraz swojej konfiguracji. Są to w szczególności informacje o rodzaju telewizora Smart TV, wersji systemu operacyjnego zainstalowanego w telewizorze Smart TV, rozdzielczości panelu, identyfikatorze projekcji (tj. informacje na temat plików konfiguracyjnych), aplikacji klienckiej, nazwie przeglądarki, wersji przeglądarki oraz języku i kraju konfiguracji telewizora Smart TV. \n\nInformacje te są przez nas wykorzystywane oraz przekazywane naszym dostawcom usług i dostawcom treści do realizacji celów opisanych poniżej.\n\n4.	Cele, w których przetwarzamy i/lub wykorzystujemy dane osobowe użytkowników, oraz podstawy prawne tych czynności\n\nCele, w których przetwarzamy dane osobowe użytkowników, oraz stosowne podstawy prawne opisane są poniżej. W przypadku gdy podstawą prawą przetwarzania przez nas danych jest realizacja wymienionych poniżej celów umownych, nie możemy świadczyć użytkownikom Usług, jeżeli nie otrzymamy od nich odpowiednich danych. W przypadku natomiast gdy podstawą przetwarzania jest zgoda udzielona przez użytkownika, użytkownik może, wedle własnego uznania, udzielić lub odmówić nam takiej zgody. Jeżeli użytkownik nie udzieli nam stosownej zgody, nie będziemy przetwarzać jego danych osobowych w celu objętym taką zgodą.\n\n•	Świadczenie Usług: Wykorzystujemy informacje o adresie IP i adresie MAC, Identyfikatorze urządzenia, wersji systemu operacyjnego zainstalowanego w telewizorze Smart TV, rodzaju użytkownika telewizora Smart TV oraz o rozdzielczości jego panelu, identyfikatorze projekcji (tj. informacje na temat plików konfiguracyjnych), liście kanałów telewizji cyfrowej, liście kanałów oglądanych, strefie czasowej, kraju i języku ustawionych w telewizorze Smart TV mającym dostęp do Usług oraz o usługach świadczonych przez dostawców treści. Do celów przetwarzania należą między innymi (ale nie wyłącznie) świadczenie usług bazujących na lokalizacji użytkownika (np. prognozy pogody); postępowanie w przypadku nadużyć, zarządzanie zdarzeniami naruszającymi bezpieczeństwo, monitorowanie dostępności Usług oraz świadczenie usług w zakresie tworzenia kopii zapasowych informacji o preferencjach użytkowników.\n\nPodczas korzystania z Usług telewizor Smart TV pobiera w ramach świadczenia Usług za pośrednictwem Internetu określone informacje. Pobrane w ten sposób informacje o opisanym powyżej adresie IP użytkownika oraz języku i kraju ustawionych w telewizorze Smart TV użytkownika są przekazywane naszemu dostawcy usług. Nasz dostawca usług przetwarza takie dane zgodnie z niniejszą Informacją o przetwarzaniu danych.\n\nPodstawą prawną takiego przetwarzania danych osobowych użytkowników są cele związane z wykonaniem umowy zgodnie z Artykułem 6 (1) (b) Rozporządzenia Ogólnego o Ochronie Danych („RODO”).\n\n•	Ustawienia Usług: Jedną z normalnych funkcji oferowanych w ramach Usług jest możliwość ręcznego ustawienia przez użytkownika kolejności wyświetlania aplikacji przez Usługi. Informacje o ustawieniach i innych preferencjach wybranych przez użytkownika podczas korzystania z Usług przechowywane są przez dostawcę usług. Informacje takie są łączone z Identyfikatorem urządzenia.\n\nPodstawą prawną takiego przetwarzania danych osobowych użytkowników są cele związane z wykonaniem umowy zgodnie z Artykułem 6 (1) (b) Rozporządzenia Ogólnego o Ochronie Danych („RODO”).\n\n•	Uwierzytelnianie: Po każdorazowym podłączeniu telewizora Smart TV do Internetu i jego włączeniu, łączy się on automatycznie z Usługami zarządzanymi przez naszego dostawcę usług. Następnie telewizor Smart TV jest uwierzytelniany w celu sprawdzenia, czy jest on uprawniony do uzyskania dostępu do Usług. Dla potrzeb uwierzytelniania Usługi przechowują jeden lub więcej niepowtarzalnych identyfikatorów numerycznych telewizora Smart TV. My wykorzystujemy do uwierzytelnienia Identyfikator urządzenia i adres MAC. Identyfikator urządzenia przekazujemy również wybranym dostawcom treści dla potrzeb uwierzytelnienia. Dostawcy treści wykorzystują Identyfikator urządzenia do uwierzytelnienia uprawnień telewizora Smart TV do uzyskania dostępu do usług świadczonych przez dostawcę treści.\n\nPodstawą prawną takiego przetwarzania danych osobowych użytkowników są cele związane z wykonaniem umowy zgodnie z Artykułem 6 (1) (b) Rozporządzenia Ogólnego o Ochronie Danych („RODO”).\n\n•	Diagnostyka zdalna: W ramach Usług świadczymy naszym użytkownikom usługi diagnostyki zdalnej. W związku z tym przetwarzamy informacje o Identyfikatorze urządzenia, numerze urządzenia, numerze seryjnym urządzenia, adresie MAC i logach błędów, kodach błędów oraz opisy błędów, które automatycznie wysyła niesprawny moduł (aplikacja, system oprogramowania pośredniczącego).\n\nPonadto, , jeżeli użytkownik skontaktuje się telefonicznie z naszą obsługą klienta, wówczas po uprzednim wyrażeniu na to zgody przez użytkownika, pracownik wsparcia może uzyskać zdalny dostęp do telewizora użytkownika i wykonać dalsze czynności zdalnej diagnostyki. W takim wypadku pracownik wsparcia uzyskuje dostęp do telewizora i sieci użytkownika, aplikacji i zapisanych plików oraz może przetwarzać dane w postaci Identyfikatora urządzenia, numeru urządzenia, numeru seryjnego urządzenia, adresu MAC, logów błędów, kodów błędów, opisów błedów, identyfikatora terminala, informacji o zainstalowanych aplikacjach, zrzutów ekranowych z telewizora, a także informacji o urządzeniach podłączonych za pomocą USB lub Bluetooth w celu oceny stanu telewizora oraz powiązanych z nim aplikacji i danych. Logi błędów mogą zawierać informacje takie, jak historia kanałów telewizyjnych, listy odtwarzanych utworów muzycznych, nazwa użytkownika i hasło do aplikacji, o ile aplikacje dostarczane przez osoby trzecie używane do transmisji nie szyfrują tego rodzaju danych. Przetwarzanie to będzie się odbywało w celu zdiagnozowania problemu, zmiany ustawień systemu zgodnie z prośbą użytkownika lub to naprawienia zgłoszonych nieprawidłowości. Dodatkowo, na prośbę użytkownika, pracownicy obsługi klienta mogą rozwiązywać problemy, uruchamiać kanały, instalować albo odinstalowywać oprogramowanie, dokonać ponownej konfiguracji oraz wykonywać usługi serwisowe i usługi wsparcia technicznego telewizora.\n\nZdalny dostęp będzie możliwy pod warunkiem, że użytkownik włączy wcześniej funkcję zdalnego wsparcia poprzez zaznaczenie przypisanego do niej pola wyboru na swoim telewizorze. Zdalny dostęp zakończy się po każdej poszczególnej sesji. \n\nPodstawą prawną takiego przetwarzania danych osobowych użytkowników są cele związane z wykonaniem umowy zgodnie z Artykułem 6 (1) (b) Rozporządzenia Ogólnego o Ochronie Danych („RODO”).\n\n•	Obsługa posprzedażowa: Zgodnie z obowiązującym prawem użytkownikom może przysługiwać rękojmia lub podobne prawa do obsługi posprzedażowej. Odpowiedzialność za obsługę roszczeń z tytułu rękojmi oraz innych żądań o wykonanie obsługi posprzedażowej, a także za związane z tym przetwarzanie danych osobowych użytkowników, spoczywa na spółce TCL Europe z siedzibą pod adresem 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, Francja. Oznacza to, że dla potrzeb zapewnienia obsługi posprzedażowej spółka TCL Europe występuje w charakterze administratora danych, i my nie ponosimy żadnej odpowiedzialności za związane z tym przetwarzanie danych osobowych użytkowników.\n\nJeżeli użytkownik zwraca się do nas z prośbą o wykonanie obsługi posprzedażowej, aby móc taką obsługę wykonać, możemy być zmuszeni do skorzystania z imienia i nazwiska, adresu poczty elektronicznej, numeru telefonu, wniosku o obsługę oraz adresu poczty tradycyjnej podanych na fakturze użytkownika. Informacje mogą również być zbierane przez dostawców usług posprzedażowych naszych dystrybutorów lub autoryzowanych dostawców usług, jeżeli użytkownik zwróci się do nich o wykonanie obsługi posprzedażowej. Użytkownicy mogą również skontaktować się ze spółką TCL Europe, korzystając z danych kontaktowych podanych w Punkcie 12 poniżej, w celu uzyskania bardziej szczegółowych informacji o ochronie danych osobowych w związku z obsługą posprzedażową.\n\nPodstawą prawną takiego przetwarzania danych jest obowiązek wypełniania obowiązków prawnych zgodnie z Artykułem 6 (1) (c) RODO.\n\n•	Aplikacja startowa T-Channel: Aplikacja startowa T-Channel to strona główna w telewizorze Smart TV wyposażonym w system operacyjny Linux (informacje o telewizorach wyposażonych w system operacyjny Android znajdują się poniżej), która umożliwia wybór określonych treści.\n\nPodstawą prawną przetwarzania danych osobowych użytkowników, która jest konieczna do zapewnienia użytkownikowi możliwości korzystania z aplikacji startowej T-Channel, są cele związane z wykonaniem umowy zgodnie z Artykułem 6 (1) (b) RODO.\n\nPod warunkiem uzyskania uprzedniej zgody użytkownika, monitorujemy również sposób korzystania z aplikacji startowej T-Channel, a w szczególności monitorujemy:\n\n	moment rozpoczęcia korzystania z aplikacji startowej T-Channel ‒ zapisujemy moment wejścia i wyjścia do aplikacji startowej T-Channel,\n\n	moment rozpoczęcia odtwarzania materiału wideo w aplikacji startowej T-Channel ‒ zapisujemy nazwę i długość wideo (nie dotyczy Netflix, YouTube ani innych usług dostarczanych przez osoby trzecie),\n\n	moment wejścia na stronę i wyjścia ze strony ‒ zapisujemy czas przebywania na stronie,\n\n	moment przesunięcia kursora z jednego miejsca na inne lub moment wejścia w aplikację ‒ zapisujemy tego rodzaju zdarzenia,\n\n	moment instalacji, usunięcia lub aktualizacji aplikacji ‒ zapisujemy tego rodzaju zdarzenia, w tym nazwy aplikacji.\n\nZbieramy takie informacje głównie na potrzeby analizy dużych zbiorów danych dokonywanej w celu doskonalenia produktów oraz poprawy jakości świadczonych na rzecz użytkowników usług związanych z treścią.\n\nPodstawą prawną przetwarzania danych osobowych użytkowników w związku z monitorowaniem sposobu korzystania przez użytkowników z aplikacji startowej T-Channel jest zgoda udzielona przez użytkowników zgodnie z Artykułem 6 (1) (a) RODO.\n\nW przypadku użytkowników, którzy zakupili telewizor z systemem operacyjnym Android i korzystają z systemu operacyjnego Android spółki Google, dane osobowe takich użytkowników przetwarza spółka Google, i my nie ponosimy odpowiedzialności za przetwarzanie dokonywane przez Google. Informacje o przetwarzaniu przez Google danych użytkowników oraz o prawach przysługujących użytkownikom, których dane są przetwarzane przez Google, można znaleźć w Informacji o przetwarzaniu danych Google.\n\n•	Aplikacja T-Cast: Aplikacja T-Cast umożliwia sterowanie telewizorem przy użyciu telefonu oraz udostępnianie wideo, muzyki i zdjęć zapisanych w smartfonie na telewizorze. Aplikacja T-Cast umożliwia również wyświetlanie obrazu ze smartfona na telewizorze.\n\nPobieranie i korzystanie z aplikacji są dobrowolne. W przypadku zgrania i korzystania z aplikacji, przetwarzamy informacje o adresie MAC w celu obliczenia, ile wersji aplikacji T–Cast zostało wykorzystanych na rynku. Jest to nam konieczne do tego, abyśmy mogli oferować tę usługę naszym użytkownikom. W przypadku użytkowników, którzy korzystają z naszej funkcji drugiego ekranu, zbieramy i przetwarzamy na naszych serwerach informacje o funkcjach i ustawieniach aktywowanych w aplikacji, ustawieniach kraju i języka, liście kanałów telewizji cyfrowej, liście ulubionych kanałów, listach programów, Identyfikatorze urządzenia, aktualnie oglądanym kanale, wersji protokołu i adresie IP telewizora Smart TV użytkownika. W takiej sytuacji nasze serwery kontrolują telewizor Smart TV użytkownika zgodnie z instrukcjami wydawanymi przez użytkownika za pośrednictwem aplikacji.\n\nPodstawą prawną takiego przetwarzania danych osobowych użytkowników są cele związane z wykonaniem umowy zgodnie z Artykułem 6 (1) (b) RODO.\n\n•	Asystent TCL: Asystent TCL to funkcjonalność pozwalająca na połączenie się telewizora użytkownika z urządzeniami kompatybilnymi z usługą Amazon Alexa (takimi, jak Echo) w celu sterowania takimi urządzeniami za pomocą głosu użytkownika. Aby używać tej fukcji, użytownik musi zarejestrować telewizor na stronie internetowej Amazon, używając w tym celu kodu TCL, który jest zapisany w telewizorze. Następnie użytkownik będzie miał możliwość wydawania poleceń głosowych urządzeniom kompatybilnym z usługą Amazon Alexa poprzez naciśnięcie przycisku mikrofonu na pilocie do telewizora.\n\nJeżeli użytkownik korzysta z Asystenta TCL, telewizor pobiera próbki głosu użytkownika i przesyła je do chmury usługi Amazon Alexa w celu rozponawania mowy i dalszego przetwarzania. Dane użytkownika zostaną przesłane bezpośrednio do Amazon i nie będą przetwarzane ani przechowywane na telewizorze użytkownika. Dalsze informacje na temat przetwarzania danych osobowych przez Amazon  użytkownik może uzyskać z informacji o prywatności w Amazon.\n\nPodstawą prawną takiego przetwarzania danych osobowych użytkowników są cele związane z wykonaniem umowy zgodnie z Artykułem 6 (1) (b) RODO.\n\n•	Rozpoznawanie mowy w usłudze Alexa (AVS - Alexa Voice Recognition): AVS to funkcjonalność umożliwiająca użytkownikowi sterowanie telewizorem poprzez wydawanie poleceń głosowych. Aby używać tej funkcjonalności, użytkownik musi zarejestrować telewizor na stronie internetowej Amazon, używając w tym celu kodu rejestracyjnego wygenerowanego przez Amazon. Następnie użytkownik będzie miał możliwość wydawania telewizorowi poleceń głosowych poprzez naciśnięcie przycisku mikrofonu na pilocie do telewizora. \n\nW przypadku korzystania z funkcji AVS, telewizor zbiera próbki głosu użytkownika i przesyła je do chmury usługi Amazon Alexa w celu rozpoznawania mowy i dalszego przetwarzania. Dane użytkownika zostaną przesłane bezpośrednio do Amazon i nie będą przetwarzane ani przechowywane na telewizorze użytkownika. Dalsze informacje na temat przetwarzania danych osobowych przez Amazon  użytkownik może uzyskać z informacji o prywatności w Amazon.\n\nW razie skorzystania przez użytkownika z usługi AVS, będziemy potrzebowali nazwy telewizora,  aby wiedzieć, którym urządzeniem użytkownik chce sterować. \n\nPodstawą prawną takiego przetwarzania danych osobowych użytkowników są cele związane z wykonaniem umowy zgodnie z Artykułem 6 (1) (b) RODO.\n\nBędziemy także przetwarzać dane dotyczące tego, jak często i jak długo użytkownik używa usługi AVS, a także z jakich funkcjonalności korzysta użytkownik. Zbieramy te informacje, aby ulepszyć nasze produkty i podnosić jakość naszych usług.\n\nPodstawą prawną takiego przetwarzania danych osobowych użytkowników jest nasz prawnie uzasadniony interes. zgodnie z Artykułem 6 (1) (f) RODO. Więcej informacji na temat testu równowagi użytkownik może uzyskać na swoją prośbę.\n\n•	Aktualizacje oprogramowania: Oprogramowania są aktualizowane w ramach Usług. Przy każdym włączeniu telewizora Smart TV przez użytkownika, telewizor przesyła nam informacje o adresie IP, Identyfikatorze urządzenia, numerze urządzenia, wersji oprogramowania, rodzaju klienta telewizora Smart TV, identyfikatorze projekcji (tj. pliki konfiguracyjne), identyfikatorze użytkownika oraz numerze seryjnym, abyśmy mogli sprawdzić, czy dostępne są jakieś nowe aktualizacje oprogramowania, i zaoferować oraz dostarczyć użytkownikom odpowiednie aktualizacje oprogramowania.\n\nPodstawą prawną takiego przetwarzania danych osobowych użytkowników są cele związane z wykonaniem umowy zgodnie z Artykułem 6 (1) (b) RODO.\n\n•	Egzekwowanie prawa: Możemy zostać zobowiązani do dostarczenia danych właściwym organom wymiaru sprawiedliwości lub sądom. W takim przypadku przekazujemy dane wyłącznie na podstawie prawnie wiążącego dokumentu takiego jak np. nakaz policyjny lub nakaz sądowy, który nakłada na nas obowiązek współpracy z właściwymi organami władzy.\n\nPodstawą prawną takiego przetwarzania danych jest obowiązek wypełniania obowiązków prawnych zgodnie z Artykułem 6 (1) (c) RODO.\n\nIstnieje możliwość korzystania z Usług przy użyciu pseudonimów, chyba że konkretne usługi wymagają przekazania imienia i nazwiska i/lub adresu poczty elektronicznej.\n\n5.	Prywatność i bezpieczeństwo nieletnich poniżej 16 roku życia\n\nRozumiemy, dlaczego należy przedsięwziąć szczególne środki bezpieczeństwa w celu ochrony prywatności i bezpieczeństwa dzieci korzystających z naszych Usług. Osoby, które nie ukończyły 16 roku życia lub innego wieku uznawanego za wiek pełnoletniości w danej jurysdykcji, nie mogą przekazywać swoich danych osobowych za pośrednictwem telewizora ani w momencie telefonicznego zgłoszenia wniosku o wykonanie obsługi posprzedażowej, chyba że ich rodzic dostarczył nam możliwą do zweryfikowania zgodę.\n\nPonieważ nigdy nie zbieramy dat urodzenia naszych użytkowników, nie jesteśmy w stanie zidentyfikować ich wieku. Gdybyśmy jednak dowiedzieli się, że zebraliśmy dane osobowe osoby poniżej 16. roku życia lub poniżej innego wieku uznawanego za wiek pełnoletności w innej jurysdykcji, wówczas, niezależnie od powyższych okoliczności, podejmiemy kroki w celu możliwie jak najszybszego usunięcia takich informacji.\n\n6.	Aplikacje osób trzecich\n\nTelewizor Smart TV pozwala na korzystanie z aplikacji dostarczanych przez osoby trzecie, takich jak Netflix, YouTube czy HbbTV (usługa uruchamiana czerwonym przyciskiem, dostarczana przez nadawców telewizyjnych). Aplikacje można wgrać ze sklepu z aplikacjami. Można również aktywować aplikacje osób trzecich, które zostały preinstalowane na urządzeniu użytkownika. Żadna z aplikacji osób trzecich preinstalowanych na urządzeniach naszych użytkowników nie zbiera danych osobowych bez ich uprzedniej zgody. Przykładem jest serwis Netflix, który jest preinstalowany na urządzeniach, ale zbiera dane jedynie w momencie logowania się użytkownika na swoje konto Netflix. Serwis HbbTV zbiera dane jedynie po uzyskaniu zgody użytkownika na zbieranie danych wyrażonej poprzez wciśnięcie wyznaczonego przycisku na pilocie telewizora.\n\nUruchomienie aplikacji osoby trzeciej może skutkować przetwarzaniem danych osobowych użytkownika przez dostawcę aplikacji. Nie ponosimy odpowiedzialności za takie przetwarzanie. Informacje o przetwarzaniu danych użytkowników przez aplikację osoby trzeciej oraz o prawach przysługujących użytkownikom, których dane przetwarzane są przez osobę trzecią, można znaleźć w Informacji o przetwarzaniu danych osoby trzeciej.\n\n7.	Kategorie odbiorców danych\n\nOdbiorcami danych osobowych zbieranych przez nas podczas korzystania przez użytkowników z Usług są jedynie zewnętrzni dostawcy treści, w przypadku gdy użytkownicy zwrócą się do nas o udostępnienie im ich treści, lub dostawcy usług, którzy wspierają nas w procesie świadczenia Usług jako podmioty przetwarzające dane.\n\nUdostępniamy dane osobowe użytkowników innym osobom trzecim jedynie wówczas, gdy jesteśmy do tego zobligowani przez wymogi prawne (np. sądom lub władzom prokuratorskim zajmującym się sprawami karnymi), o ile użytkownik wyraził zgodę na dane udostępnienie lub jeżeli udostępnienie jest zgodne z obowiązującym prawem.\n\n8.	Kraje, w których będą przetwarzane dane osobowe użytkowników\n\nMożliwa jest sytuacja w której siedziba nasza i/lub niektórych z odbiorców danych osobowych użytkowników wymienionych powyżej znajduje się poza terytorium Europejskiego Obszaru Gospodarczego (np. Chińskiej Republice Ludowej lub w Stanach Zjednoczonych). W związku z tym może dojść do sytuacji, w której dane osobowe użytkowników będą przetwarzane w krajach, w których prawa dotyczące ochrony danych zapewniają inny poziom ochrony w porównaniu do praw obowiązujących w jurysdykcji użytkownika. Nadto prawa takie mogą nie być uznawane za prawa zapewniające odpowiedni poziom ochrony danych osobowych zgodnie z RODO. Do państw, które zapewniają odpowiedni poziom ochrony danych z perspektywy europejskiego prawa dotyczącego ochrony danych, zaliczają się Andora, Argentyna, Kanada, Szwajcaria, Wyspy Owcze, Wyspa Guernsey, Państwo Izrael, Wyspa Man, Wyspa Jersey, Nowa Zelandia i Wschodnia Republika Urugwaju. Odbiorcy mający siedzibę w Stanach Zjednoczonych mogą być częściowo uznani za spełniający wymogi Tarczy Prywatności UE-USA, a więc uznani za zapewniający odpowiedni poziom ochrony danych z perspektywy europejskiego prawa dotyczącego ochrony danych. \n\nGdy będzie to wymagane, wdrożymy odpowiednie mechanizmy ochrony przekazań danych do odbiorców spoza Unii Europejskiej, którzy nie zapewniają odpowiedniego poziomu ochrony danych. Kopie dokumentu opisującego odpowiedni środek bezpieczeństwa można uzyskać, kontaktując się z nami przy użyciu danych kontaktowych podanych w Punkcie 12. poniżej.\n\n9.	Okres przechowywania danych\n\nDane osobowe użytkowników przechowywane są tak długo, jak jest to konieczne do świadczenia na ich rzecz Usług. Dla większości danych oznacza to generalnie, że dane użytkowników będziemy przechowywać przez jeden miesiąc. Dla potrzeb diagnostyki zdalnej oraz obsługi posprzedażowej możemy przechowywać dane użytkowników przez okres do dziesięciu lat. Kiedy nie mamy już potrzeby korzystać z danych osobowych użytkowników w celu wypełniania obowiązków umownych lub ustawowych, usuwamy je z naszych systemów i archiwów i/lub podejmujemy kroki w celu ich prawidłowego zanonimizowania, aby uniemożliwić zidentyfikowanie użytkowników na ich podstawie.\n\n10.	Prawa użytkowników\n\nW myśl obowiązującego prawa dotyczącego ochrony danych użytkownikom mogą przysługiwać prawa: żądania dostępu do swoich danych osobowych, żądania sprostowania swoich danych osobowych; żądania usunięcia swoich danych osobowych, żądania ograniczenia przetwarzania swoich danych osobowych; żądania przenoszenia danych oraz wniesienia sprzeciwu wobec przetwarzania swoich danych osobowych. Zwracamy uwagę, że powyższe prawa mogą podlegać pewnym ograniczeniom zgodnie z obowiązującym w danym kraju prawem dotyczącym ochrony danych. Więcej informacji na temat ww. praw można znaleźć w załączonym do niniejszej Informacji o ochronie danych Załączniku – Prawa użytkowników.\n\nUżytkownikom przysługuje również prawo wniesienia skargi do właściwego organu odpowiedzialnego za nadzór nad ochroną danych.\n\nUżytkownicy chcący skorzystać z przysługujących im praw proszeni są o skontaktowanie się z nami, korzystając z danych kontaktowych podanych w Punkcie 12 poniżej.\n\n11.	Zmiany Informacji o przetwarzaniu danych\n\nProces doskonalenia naszych Usług może skutkować koniecznością wprowadzenia przez nas zmian do niniejszej Informacji o przetwarzaniu danych – np. wskutek wdrożenia nowych technologii lub wprowadzenia nowych usług. Zastrzegamy sobie prawo do zmiany lub uzupełnienia niniejszej Informacji o przetwarzaniu danych w dowolnym momencie.\n\n12.	Dane kontaktowe i dane naszego przedstawiciela w Unii Europejskiej\n\nWszelkie pytania na temat Informacji o przetwarzaniu danych lub skargi na sposób, w jaki przetwarzamy dane osobowe użytkowników, można zgłaszać, korzystając z podanych poniżej danych kontaktowych:\n\nFormularz kontaktowy: www.tcl.eu/en/contact-us\n\nNaszym przedstawicielem w Unii Europejskiej jest: spółka TCL Europe z siedzibą pod adresem 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, Francja. Ze spółką TCL Europe można się skontaktować za pośrednictwem powyższego formularza kontaktowego.\n\nWersja: 2.0\n\n \n\nZałącznik\n\nPrawa użytkowników\n\na.	Prawo dostępu: Użytkownikowi może przysługiwać prawo uzyskania od nas potwierdzenia, czy przetwarzane są jego dane osobowe, a jeżeli ma to miejsce, prawo żądania dostępu do takich danych osobowych. Udostępniane informacje obejmują ‒ między innymi ‒ informacje o celach przetwarzania, kategoriach przetwarzanych danych osobowych, odbiorcach lub kategoriach odbiorców, którym dane osobowe zostały lub zostaną ujawnione. Nie jest to jednak prawo bezwzględne i interesy innych osób fizycznych mogą ograniczać prawo dostępu użytkownika.\n\nUżytkownikowi może przysługiwać prawo uzyskania kopii danych osobowych poddawanych przetwarzaniu. Za wszelkie kolejne kopie, o które zwróci się użytkownik, możemy pobrać opłatę w rozsądnej wysokości wynikającej z kosztów administracyjnych. \n\nb.	Prawo do sprostowania: Użytkownikowi może przysługiwać prawo żądania od nas sprostowania dotyczących go danych osobowych, które są nieprawidłowe. Z uwzględnieniem celów przetwarzania, użytkownikowi może przysługiwać prawo żądania uzupełnienia niekompletnych danych osobowych, w tym poprzez przedstawienie dodatkowego oświadczenia.\n\nc.	Prawo do usunięcia danych („prawo do bycia zapomnianym”): W pewnych okolicznościach użytkownikowi może przysługiwać prawo żądania od nas usunięcia dotyczących go danych osobowych, i możemy być zobligowani do usunięcia takich danych osobowych. \n\nd.	Prawo do ograniczenia przetwarzania: W pewnych okolicznościach użytkownikowi może przysługiwać prawo żądania ograniczenia przetwarzania dotyczących go danych osobowych. W takim przypadku właściwe dane zostaną oznaczone i będą mogły być przetwarzane przez nas jedynie w określonych celach.\n\ne.	Prawo do przenoszenia danych: W pewnych okolicznościach użytkownikowi może przysługiwać prawo do otrzymania dotyczących go danych osobowych, które nam przekazał, w ustrukturyzowanym, powszechnie używanym formacie nadającym się do odczytu maszynowego, oraz prawo do przesłania takich danych do innego podmiotu bez przeszkód z naszej strony.\n\nf.	Prawo do sprzeciwu:\n\nW pewnych okolicznościach użytkownikowi może przysługiwać prawo wniesienia w dowolnym momencie sprzeciwu, z przyczyn związanych z jej szczególną sytuacją lub w przypadku, gdy dane przetwarzane są dla potrzeb marketingu bezpośredniego, wobec przetwarzania danych osobowych użytkownika przez nas, i możemy zostać zobligowani do zaprzestania dalszego przetwarzania danych osobowych użytkownika.\n\nPonadto jeżeli dane osobowe użytkownika są przetwarzane dla potrzeb marketingu bezpośredniego, użytkownikowi może przysługiwać prawo wniesienia w dowolnym momencie sprzeciwu wobec przetwarzania dotyczących go danych osobowych na potrzeby takiego marketingu, w tym profilowania w zakresie, w jakim przetwarzanie jest związane z takim marketingiem bezpośrednim. W takim przypadku dane osobowe użytkownika nie będą dalej przetwarzane przez nas w takich celach."];
var cookieNotice = ["\n\nSzanujemy prywatność użytkowników korzystających z wyprodukowanych przez nas telewizorów inteligentnych Smart TV oraz ze świadczonych przez nas Usług. Pliki cookies wykorzystywane są przez wiele witryn internetowych oraz inne serwisy i usługi internetowe, dlatego telewizory Smart TV akceptują, przechowują i przesyłają pliki cookies w celu zapewnienia naszym użytkownikom prawidłowego działania witryn internetowych, serwisów i usług. \n\nNie korzystamy z plików cookies podczas świadczenia naszych Usług użytkownikom. Mogą z nich jednak korzystać osoby trzecie (np. osoby trzecie będące dostawcami aplikacji) w momencie, gdy nasi użytkownicy korzystają z telewizorów Smart TV w celu uzyskania dostępu do ich usług lub serwisów. Niniejsza Informacja o plikach cookies zawiera jedynie ograniczone informacje na temat plików cookies, które mogą być wgrywane przez osoby trzecie. Informacje o plikach cookies rzeczywiście wykorzystywanych przez osoby trzecie oraz o ich funkcjach można znaleźć we właściwych informacjach o plikach cookies takich osób trzecich. Natomiast w tej Informacji o plikach cookies opisujemy jedynie ogólnie, jakie pliki cookies mogą zostać wgrane do telewizorów Smart TV, i jak można nimi zarządzać.\n\n1.	Czym są pliki cookies?\n\nPliki cookies to małe pliki tekstowe, które mogą zostać wgrane do telewizora Smart TV. W momencie uzyskania dostępu do witryny internetowej lub wciśnięciu czerwonego przycisku aktywującego dostęp do usług interaktywnych stacji telewizyjnej witryna i usługi mogą zapisać plik cookies w telewizorze Smart TV. Przy każdym kolejnym uzyskaniu dostępu plik cookies, który został zapisany w telewizorze Smart TV, wysyła informację do osoby trzeciej, która zapisała plik cookies. Pliki cookies są niezwykle powszechne. Wykorzystuje je wiele witryn internetowych i serwisów. Każdy plik cookies zawiera zazwyczaj informacje o nazwie domeny, z której plik cookies został wysłany, czas trwania pliku cookies a także wartość (zazwyczaj jest to niepowtarzalny numer). Bardziej szczegółowe objaśnienie, czym są pliki cookies, i jak one działają, można znaleźć na stronie www.allaboutcookies.org.\n\nPliki cookies można podzielić na funkcjonalnie i niefunkcjonalne. Funkcjonalne pliki cookies to pliki, które są bezwzględnie wymagane do świadczenia usług użytkownikom. Niefunkcjonalne pliki cookies to wszystkie pozostałe pliki cookie.\n\n2.	Witryny osób trzecich\n\nPodczas odwiedzania witryn internetowych lub serwisów osób trzecich za pośrednictwem Usług oferowanych przez telewizor Smart TV takie witryny lub serwisy mogą zapisywać pliki cookies w telewizorze Smart TV, a także śledzić i rejestrować aktywność użytkownika w takich witrynach internetowych. Nie prosimy osób trzecich o prowadzenia takich czynności ani nie zachęcamy ich do tego, oraz nie wykorzystujemy zebranych w ten sposób informacji. Więcej informacji o wykorzystywaniu plików cookies przez takie strony można znaleźć w informacji o plikach cookies oraz w informacji o przetwarzaniu danych takich witryn i serwisów.\n\n3.	Usuwanie plików cookies\n\nInterfejs użytkownika telewizora Smart TV pozwala usunąć wszystkie pliki cookies oraz inne informacje zapisane w lokalnej przeglądarce zainstalowanej w telewizorze Smart TV. Jest wielce wskazane, aby usunąć wszelkie pliki cookies oraz lokalnie zapisane ustawienia przed sprzedażą lub oddaniem telewizora Smart TV.\n\nWersja: 2.0"];
var privacyPolicy = ["Prosimy o zaznaczenie poniższych pól, jeśli chcesz korzystać z naszych usług Smart TV lub usług pokrewnych. Korzystanie z tych usług wymaga przetwarzania Twoich danych osobowych, jak opisano w naszej Informacji o polityce prywatności: http://www.tcl.eu/en/","Aktywuj usługę Smart TV, przechowywanie ustawień usługi i automatyczne uwierzytelnianie usługi Smart TV. Jeśli usuniesz zaznaczenie tego pola, będzie mieć dostęp jedynie do telewizji standardowej i HDMI.","Włącz automatyczną aktualizację oprogramowania. Zaznacz to pole, aby na bieżąco aktualizować swój produkt i zapewnić mu jak najlepsze działanie.","(Aktualizacje oprogramowania wspierają prawidłowe funkcjonowanie Twojej telewizji, ponieważ zapewniają nowe funkcje, stabilność i bezpieczeństwo. Dlatego też zalecamy zaznaczenie tego pola.)","Prosimy o zaznaczenie poniższego pola, jeżeli wyrażasz zgodę na przetwarzanie przez nas Twoich danych osobowych również w poniższym celu. Bardziej szczegółowe informacje na temat sposobu przetwarzania Twoich danych osobowych podano w naszej Informacji o polityce prywatności: http://www.tcl.eu/en/","Wyrażam zgodę na przetwarzanie moich danych osobowych (np. czas wejścia i wyjścia z T-Launcher) w celu ulepszenia produktów TCL oraz świadczenia usług o lepszej treści w ramach Smart TV."];
var termsFirTitle = ["Warunki użytkowania","Polityka prywatności","Informacja o plikach cookie"];
var termsSecTitle = ["Przeczytaj regulamin i zatwierdź go.","Przeczytaj politykę prywatności i zaakceptuj ją.","Przeczytaj politykę plików cookie i zaakceptuj ją."];
var tickall = "Zaznacz wszystko";
var tickremindWords = "Zaznacz pola wyboru, w przeciwnym razie nie będziesz mógł korzystać z usługi Smart TV.";