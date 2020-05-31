
var all_country 	= ["Australia","Austria","Belgia","Bulgaria","Croaţia","Republica Cehă","Danemarca","Finlanda","Franţa","Germania",
						"Grecia","Ungaria","Italia","Luxembourg","Olanda","Norvegia","Polonia","Portugalia","România","Rusia",
						"Serbia","Slovenia","Spania","Suedia","Elveţia","Marea Britanie","Noua Zeelandă"," "/*Arab*/,"Estonia"," "/*Hebrew*/,
						"Letonia","Slovacia","Turcia","Irlanda","Japan","Filipine","Thailand","Maldives","Uruguay","Peru",
    					"Argentina","Chile","Venezuela","Ecuador","Costa Rica","Paraguay","Bolivia","Belize","Nicaragua","Guatemala",
						"China","Taiwan","Brazil","Canada","Mexico","United States","South Korea","Romania","Vietnam"/*新添加的，底层结构体中没有*/,"Ucraina"/*新添加的，底层结构体中没有*/,
    					"Iran","Iraq"," ","Kazakhstan","Uzbekistan"," ","Kyrgyzstan","Algeria","Egypt","Tunisia",
    					"Tanzania","Kenya","Pakistan","Indonesia","Kuwait","Saudi Arabia","Qatar","Israel","Lebanon","bahrain",
    					"Angola","Congo","India","Turkmenistan","Colombia","Mongolia","Bangladesh","Nepal","Sri Lanka","North Korea",
						"Moldova","Polynesia","EI Salvador"," ","Fiji","Liberia","Jordan","Myanmar","Ghana","Georgia",
    					"Armenia","Oman","yemen","Syria","Palestine","Afghanistan","Morocco","benin","IvoryCoast","Nigeria",
    					"Sudan","Ethiopia","Zambia"," ","South Africa","mozambique","Libya","Albania","Belarus","Iceland",
						"Lituania","Mauritius","Dubai","UAE","Tajikistan","Bengal","Bosnia Hercegovina","Cyprus","Kosovo","Macedonia",
						"Malta","Muntenegru","Cameroun","Singapore","Malaysia","NewCaledonia","Suriname","Jamaica","Curacao","Aruba",
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
				
var all_language 	= ["Cehă","*","Daneză","*","*","germană","engleză","franceză","greacă","spaniolă",
						"Croată","*","italiană","Maghiară","Olandeză","Norvegiană","Poloneză","Portugheză","rusă","Română",
						"Slovenă","Sârbă","Finlandeză","Suedeză","Bulgară","Slovacă","Chinese","*","Galică","*",
						"Galeză","arabă ","Irsko","Letonă","*","turcă","Estoniamă","Olandeză"/*Netherlands*/,"Coreeană","*",
						"hindi","*","*","Mandarin","Cantoneză","maori","Audio original"/*Qaa*/,"Nedefinit"/*Undetermined*/,"*","Necunoscut",
						"Nedefinit","*","*","*","*","*","*","*","*","*",
						"*","*","*","Albaneză","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Bască","*","*",
						"*","*","*","*","*","*","*","Bosniacă","*","*",
						"*","*","*","*","Beloruščina","*","*","Catalană","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galiciană","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Islandeză","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","japonez","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Lituaniană",
						"*","*","*","*","*","*","*","Macedoneană","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romantic","*","*","*","*",
						"*","*","*","Sami","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Teletext",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ucrainiană","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Oprit","Pornit"];
var okCancel		= ["Ok","Anuluj"];
var yesNo			= ["DA","NU"];
var level			= ["Oprit","Scăzut","Mare","Mediu"];
var manualAuto		= ["Manual","Auto"];
var homeShop		= ["Acasă","Magazin"];
var picPreset		= ["Standard","Dinamic","Natural","Cinema","Personal"];
var picColorTemp	= ["Rece","Normal","Cald","Utilizator"];
var pic3dNavig		= ["Manual","Auto","Semi-automat"];
var _3dOptions		= ["Regim 3D","de la 3D la 2D","Comutator S-D","Adâncimea imaginii"];
var pic3DMode       = ["Oprit","de la 2D la 3D","Unul lângă altul","Sus și jos","Intercalare linii"];
var picEcoOptions	= ["Economii energie","Senzor lumină","Gradaţie locală","Atenuare combinată"];
var picGeoOptions	= ["Geometrie","Poziţie H","Poziţie V","Ceas","Fază"];//Geometry 无翻译
var picAdWhiteBal	= ["Accent. R","Accent. G","Accent. A","Scoate R","Scoate G","Scoate A"];
var souOptions		= ["Sunet preconfig.","Balans","Întârziere audio","SRS TSHD","Volum control auto",
						"Tip SPDIF ","Întârziere SPDIF","Poziţionarea televizorului","Limbă audio","Tip audio",
						"Descriere audio","Amplif bass","Dolby Digital Plus"];
var souSpdifType	= ["Auto"/*Dolby*/,"PCM","Oprit"];
var colorSpace      = ["Auto","Nativă","Utilizator"];
var souPresetPara	= ["100Hz","500Hz","1.5KHz","5KHz","10KHz"];
var chOptions		= ["Scan. Canal","Listă canale","EPG","Organizator canal","Diagnosticare canal",
						"decalaj","Subtitrare","Teletext","Tip listă canale"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Putere semnal","Calitate Semnal","Frecvenţă (KHz)","ID serviciu","ID Reţea","Nume reţea"];
var chScanOptions	= ["Țară / Regiune","Mod tuner","Scan. automată","Actualiz. automată","Scan manual analog",
						["Scanare manuală cablu","Scanare manuală antenă","Ajustare manuală satelit"],"Instalarea antenei satelit","Selectarea reţelei preferate","Golirea listei de canale","LCN"];
var favNetDes		= "Selectaţi reţeaua preferată";
var tuner			= ["Cablu","Antenă","Satelit"];//Satelite 无翻译
var passError		= "Parolă greşită / Vă rugăm reintroduceţi!";
var chType			= ["Canale analogice:","Canale digitale: "];
var chScanStatus	= ["Stare: Scanare","Stare: Scan. completă","Stare: Scan. canal","Stare: Eroare scan."];
var chScanPara		= ["Frecvenţă (KHz)","Modulare","Debit de simbol (Ksym/s)","ID Reţea","Sistem",
						"Acord fin","Putere semnal","Calitate Semnal","Mod Scanare","ID canal"];
var chScanParaMHZ      = ["Frecvenţă (MHz)"];
var chAtvManSys		= ["EUR VEST","EUR EST","UK","Franţa"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Auto"];
var chCleanDes		= "Doriţi să curăţaţi lista de canale?";
var chDeletDes		= "Doriți să ștergeți canalul?";
var chOperator		= ["Ziggo","UPC","Altele"];
var chScanType		= ["Digital & Analogic","Digital","Analog"];
var chScanMode		= ["Complet","Avansare","Rapid"];
var bookingModes	= ["Înregistrare","Reamintire"];
var dayName			= ["Du","Lu","Ma","Mi","Jo","Vi","Sâ"];
var monthName		= ["ian", "feb","mar","apr","mai","iun","iul","aug","sep","oct","nov","dec"];
var filter			= ["Filtr","Tip","Categorii"];
var chEpgFirstGenre	= ["Cinema","News","Show","Sport","Pentru copii","Muzică","Arte","Social","Educaţie","Timp liber","SPECIAL"];
var chEpgSecondGenre= [["Dramă","Detectiv","Aventură","S.F.","Comedie","Serial","Romantic","Serios","Filme pt adulţi"," "," "," "],
						["Actualitate","Meteo","Ştiri","Documentar","Discuţii"," "," "," "," "," "," "," "],
						["Show","Jocuri","Varietăţi","Talk Show"," "," "," "," "," "," "," "," "],
						["Sport","Evenim. special","Revista sporturilor","Fotbal","Tenis",
							"Sporturi de echipă","Atletism","Sport cu motor","Sport nautic","Sport de iarnă",
							"Echitaţie","Arte marţiale"],
						["Pentru copii","Preşcolari","Amuzament pt copii de 6-14 ani","Amuzament pt copii de 10-16 ani","Informativ","Desene animate"," "," "," "," "," "," "," "],
						["Muzică","Rock","Serios","Folk","Jazz","Musical-uri","Balet"," "," "," "," "," "],
						["Arte","Arte interpretative","Arte frumoase","Religie","Folclor",
							"Literatură","Film","Experimental","Difuzare","Noua media",
							"Reviste de artă","Modă"],
						["Social","Reviste","Economie","Personalităţi"," "," "," "," "," "," "," "," "],
						["Educaţie","Natură","Tehnologie","Medicină","Ţări străine","Ştiinţe sociale","Educare supli.","Limbi străine        "," "," "," "," "],
						["Hobby-uri","Turism","Artizanat","Automobilism","Fitness şi sănătate","Artă culinară","Publicitate","Grădinărit"," "," "," "," "],
						["Limbă originală","Alb şi negru","Nepublicat","Difuzare în direct"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Ignoră canal","Sortare canal","Editare canal","Ştergere canal","canal de swap","canal inserați"];
var chEditPara 		= ["Nume reţea","Număr canal","Nume canal","Frecvenţă","Sistem culoare","Sistem sunet"];
var chSatTitles		= ["Tip satelit","Instalarea antenei satelit","Selectare satelit"];
var chSatEidtOptions= ["Nume satelit","Poziţie","LNB Putere","Frecvenţa LNB (MHz)","Input Diseqc",
						"Ton 22KHz","Tone Burst","Frecvenţă (KHz)","Debit de simbol (Ksym/s)","Polarizare",
						"Putere semnal","Calitate Semnal","Stare satelit"];
var chSatAutoPromt	= [["Tot","Reţea"],
						["Tot","Liber"]];
var chSatAutoScanOptions=["Selectare satelit","Mod Scanare","Canale"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Universal",];
var chSatDiSEqCInput= ["Dezactivare","A","B","C","D"];
var chSatTone22KHz	= ["Auto","Pornit","Oprit"];
var chSatToneBurst	= ["Dezactivare","Tone Burst A","Tone Burst B"];
var chSatPolarization= ["Orizontal","Vertical"];
var chSatSetupOptions=["Tip antenă","Tuner","Frecvenţă bandă"];
var chSatAntennaType= ["CabluUnic","Universal"];
var chSatUserBands	= ["Bandă utilizator 1","Bandă utilizator 2","Bandă utilizator 3","Bandă utilizator 4","Bandă utilizator 5","Bandă utilizator 6","Bandă utilizator 7","Bandă utilizator 8"];
var chSatOthers		= ["Transponder"];
var chSatSetupOthers= ["Definit de utilizator"];
var pleaseSelectSat = "Selectaţi sateliţii mai întâi!";
var subOptions		= ["Subtitrare","Limbă subtit. digitală","Limbă subtit. digitală 2","Tip subtitrare"];
var ttxOptionsCon      = ["Decodare lb. pg.","Lb. teletext digital"];
var subType			= ["Normal","Sonor neclar"];
var netIntf     	= ["Ethernet","Wireless"];
var netConnDes		= ["TV testează conexiunea la reţea.\nVă rugăm aşteptaţi",
						"Testul conexiunii de reţea a fost reuşit!",
						"Testul conexiunii de reţea a eşuat."];
var netSsidError	= "Lungimea validă a SSID este între 1 şi 32 de caractere. Verificaţi SSID.";
var netOthers		= ["Codul PIN"];
var netWlessAutoDes	= ["Înainte de a face clic pe OK, asigurați-vă că următorul cod PIN este instalat în punctul de acces.",
						"Apăsați butonul de pe punctul de acces în mai puțin de 120 de secunde, înainte de a face clic pe OK."];
var netConnRemind	= ["Parolă incorectă!",
						"Se conectează. Vă rugăm să așteptați!",
						"Conectare reuşită şi IP obţinut!",
						"Eroare link",
						"Televizorul scanează AP-uri\n. Aşteptaţi",
						"Niciun dispozitiv wireless nu este conectat la televizor!"];
var netWireIpOptions= ["Setare IP","Tip adresă","Adresă IP","Mască de subreţea","Poartă implicită","DNS primar","DNS secundar"];
var netWireConnRemind= ["Introduceți o valoare între 0 şi 255.",
						"Conectare reuşită!",
						"Introduceţi o adresă validă",
						"Conectare reuşită!",
						"Conexiune nereuşită!",
						"Se conectează. Vă rugăm să așteptați!",
						"Introduceţi o valoare între 1 şi 223."];
var netFlixOptions	= ["Dezactivare","ESN","Versiune Netflix"];
var netFlixDes	 	= ["Sunteţi siguri că doriţi dezactivarea?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Actualizare software";
var netUpdateDialogTitle = "Se actualizează software-ul";
var netBGDownloadTitle 	= "Se descarcă";
var netUpdateLoadingPrompt= ["Se caută upgrade-uri, aşteptaţi!",
							"Software-ul este în curs de descărcare… Aşteptaţi!",
							"NU opriţi televizorul în timpul actualizării software!",
                            "Actualizarea imperativă a software-ului este descărcată automat în fundal!"];
var netUpdatePrompt= ["Felicitări, versiunea software este cea mai nouă!",
						"Este disponibilă versiunea software nouă XXXX. Doriți să descărcați acum? Aceasta ar putea dura mai mult timp, în funcție de starea rețelei.",
						"Autentificare nereuşită!",
						"Recepţionare date eşuată, reîncercaţi mai târziu!",
						"Parsare actualizare XML nereuşită!",
						"Eroare link",
						"Descărcare software realizată cu succes. Începeţi funcţia de clipire?",
						"Date pierdute! Descărcare nereuşită!",
						"Nu s-a putut verifica pachetul, reîncercaţi!",
						"Anomalie în reţea. Verificaţi şi reconectaţi-vă...",
						"Actualizare nereuşită. Reporniţi televizorul!",
						"Fişierul de upgrade a fost şters în mod neprevăzut. Efectuaţi din nou upgrade-ul prin reţea.",
						"S-a reuşit descărcarea software-ului în fundal. Doriţi să efectuaţi upgrade-ul?"];
var netUpdateButtonText = ["Descărcare", "Actualizare", "Mai târziu", "Niciodată", "Ok","Continuare"];
var autoDetectPrompt = ["Este disponibilă versiunea software nouă XXXX. Doriți să descărcați acum? Aceasta ar putea dura mai mult timp, în funcție de starea rețelei.",
						"Versiunea software nouă XXXX este găsită. Actualizaţi acum?",
						"S-a renunţat la upgrade prin reţea ultima oară. Trebuie să efectuaţi upgrade-ul din nou.",
                        "Descărcarea noii versiuni a software-ului XXXX nu s-a terminat. Doriţi să continuaţi acum?",
                        "Software descărcat, doriţi să actualizaţi acum?"];
var sysOptions		= ["Manual electronic","Limbă meniu","Cronometru","Blocare","Setări intrare",
						"Actualizare software","Locaţie","Mod HbbTV","Cookie-uri","Interfaţă comună",
						"Setări avansate","Reset. magaz.","Indicator LED","Pornire instant","Mod automat Magazin","Area","Mod demonstrativ"];
var sysResetDes		= "Sunteţi sigur?";
var sysMenuLangOptions=["Limbă","Limbă audio preferată","A 2 lb. audio preferată"];
var sysTimerOptions	= ["Zonă orară","Denumire regiune","Ceas","Timp repaus ","Auto standby", "Country region"];

var sysTimeZone		= ["Ca transmiţător","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Oprit","10 Min","20 Min","30 Min","40 Min","50 Min","60 Min","90 Min","120 Min"];
var sysStandby		= ["Oprit","4 ore","6 ore","8 ore"];
var sysRegionName	= ["Madrid ","Canare"];
var sysClockOptions	= ["Autosincronizare","Dată","Oră","Programare pornire","Cronometru",
						"Pornire canal","Programare oprire","Cronometru"];
var sysTimer		= ["Oprit","Zilnic","O dată"];

var sysInputSet		= ["Fără etichetă","DVD","Blu-ray","HDD","DVDR",
						"rec. HD","Joc","VCR","PC","STB Digital ",
						"STB dig HD ","Cameră","Înregistrare","Altele"];
var sysAvVideoInput	= ["Auto","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["Prin USB","Prin Reţea","După canal"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Imposibil de găsit software nou în emisie!",
						"Versiunea software nouă XXXX este găsită. Actualizaţi acum?",
						"Vă rugăm să introduceți stick-ul USB.",
						"Nu s-a putut verifica pachetul, reîncercaţi!",
						"NU deconectaţi dispozitivul USB şi NU stingeţi TV la actualizarea firmware!",
						"Actualizare software reuşită.\nTelevizorul va reporni apoi automat!",
						"Este disponibilă versiunea software nouă XXXX. Doriți să descărcați acum? Aceasta ar putea dura mai mult timp, în funcție de starea rețelei.",
						"Se descarcă",
						"Descărcare software realizată cu succes. Începeţi funcţia de clipire?",
						"Actual. eşuată!",
						"Se caută fişiere de actualizare",
						"Software-ul a fost actualizat cu succes.\nReporniţi televizorul acum."];
var sysProductInfo	= ["Versiune curentă","Denumire produs","Nume producător","Nume şasiu"];
var sysCiDes		= ["Lipseşte cardul CI."];
var sysAdOptions	= ["Înregistrare DivX(R)","Înregistrare DivX(R)","T-Link","Authorization Error","Confirmare anulare înregistrare",
						"Confirmare închiriere","Închiriere expirată"];
var sysRegistDes	= ["Înregistraţi-vă dispozitivul pentru a reda materiale video protejate DivX",
						"Cod înregistrare:",
						"Înregistraţi-vă pe http://vod.divx.com"];
var sysDregistDes	= ["Cod anulare înregistrare:",
						"Anulare înregistrare pe http://vod.divx.com",
						"Continuaţi înregistrarea?"];
var mediaAuthorization = ["Dispozitivul dvs. nu este autorizat să redea acest videoclip protejat DivX(R)."];
var deregistrationConfrimation = ["Dispozitivul dvs. este deja înregistrat.","Sigur doriţi să anulaţi înregistrarea?"];
var rentalConfirmation = "Acest DivX(R) închiriat a utilizat XXXX din YYYY vizualizări. Continuați?";
var rentalExpired 	= "Închirierea DivX(R) a utilizat XXXX din YYYY vizualizări. Închirierea DivX a expirat.";
var parentalRatingNA		= ["***","***","***","***","***","***","***","***"];
var parentalRatingOptionUS		= ["***","***","***"];
var sysTVRatingUS=["***","***","***","***","***"];
var sysMPAAUS=["***","***","***","***","***","***"];
var parentalRatingOptionCanada		= ["***","***","***"];
var sysCanadaEng=["***","***","***","***","***","***"];
var sysCanadaFre=["***","***","***","***","***",""];
var sysResetRRT=["***"];
						
var sysLockOptions	= ["Blocare canal","Blocare interval timp","Caract. parent.","Blocare intro","Nicio Etichetă","Instalare blocare",
						"Schimbă parolă","Volum max.","Curăţare tot"];
var sysTimeIntervals= ["Tip blocare","Ora de pornire","Ora de oprire"];
var sysRatingOptions= ["Niciuna","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","Conţinut explicit (Spania)"];
var changePass		= ["Schimbă parolă","Parolă nouă","Confirmă parolă"];
var changePassDes	= ["Parolă greşită / Vă rugăm reintroduceţi!",
						"Parola nu se potriveşte.\nVă rugăm reintroduceţi!",
						"Parolă setată cu succes!",
						"Acest cod este prea simplu pentru a fi setat ca parolă.\nVă rugăm să introduceţi codul din nou!"];
var sysPowerOnChOptions= "Mod selectare";
var sysPowerOnCh	= ["Ultima stare","Selectare utilizator"];
var netWlessSecu    = ["Deschidere","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Niciuna","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Intrare video incompatibilă"];
var netWlessSecu3	= ["Niciuna","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Intrare video incompatibilă"];
var netOptions		= ["Conexiune Internet","Interfaţă","Setări wireless","Setări IP","Informaţii",
						"Test conexiune","DLNA","Telecomandă","Setări Netflix","Afişaj WiFi",
						"Tip adresă","Adresă IP","Mască de subreţea","Poartă implicită","DNS primar",
						"DNS secundar","SSID","BSSID","Introduceţi SSID:","ID utilizator"];
var chEditDes		= ["Număr de canal duplicat!","Apăsați tasta Rosie pentru a șterge caracterul curent!","Nr. de canal invalid:"];
var chEpgNoProgram	= "Nicio informaţie despre program în acest moment, căutaţi canalele mai întâi!";
var chEpgWords		= ["Ghid programe","Nu există date de program.","Canal blocat!","Nu există detalii de program.","Nici un titlu de program."];
var chEpgBooking	= ["Programarea meciului", "Număr canal","Data de început","Ora de pornire","Ora de oprire",
						"Tip repetiție","Tip programare","Adăugare","Înlocuire","Modificare",
						"Adăugare/Modificare"];
var epgHotKey		= ["Ieri","Mâine","Filtr","Lista programului","Adăugare program"];
var chEpgBookRemind	= ["Oră de început incorectă","Oră de sfârşit incorectă","Program duplicat","Salvare reuşită.","Ştergere reuşită."];
var chSchePara		= ["Lista programului","Ora de pornire","Data de început","Titlu program","Nume canal",
						"Durată","Repetă","Program","Editare","Ştergere"];
var dateTimer		= ["O dată","Zilnic","Săptămânal"];
var scheduleDeleteReminds="Doriți să ștergeți aceasta programare?";
var scheduleNoLists	= "Nu există nici o listă programare. Apăsați tasta \"Rosie\" pentru a adăuga una.";
var chListWords		= ["Listă canale","Selectare listă","Mod tuner","Adăugare la favorite","Şterge",
						"Selectare listă de canale","Selectaţi mod tuner","Schimbare"];
var chListType		= ["Tot","Digital","Analog","Radio","Liber","Favorite"];
var chAutoScanOptions=["Selectaţi operatorul","Canal de tip","Scan. automată"];
var souSoundType	= ["Nevalid","Mono","Mono","Stereo","Stereo",
						"SAP","SAP","Dual1","Dual2","Dual2",
						"Nicam mono","Nicam stereo","Nicam dublu1","Nicam dublu2","Nicam dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Muzică","Cinema","Voce clară","Standard","Personal"];
var picAdRgbMode	= ["Oprit","Doar roşu","Doar verde","Doar albastru"];
var picAdOptions	= ["Reducere zgomot","Nr MPEG","RGB mode","Contrast Dinamic","Claritate mişcare LED",
						"Nuanţa lumin.","Mod Film","Mod Joc","Temp. culorii","Balans De Alb",
						"Îngheaţă","Stretch","Mod overscan","Gama","Mod HDMI","Balans de alb 10P","Amplificator de culoare",
						"Reducere neclaritate","Reducere sacadări","Spaţiu culoare","Claritate mişcare"];
var pic10Pwhite     = ["Interval","Roşu","Verde","Albastru","Resetare","Color","Galben","Cyan","Magenta"];
var picMotionClarity = ["Mod Mişcare","Interpolare de mişcare","Claritate mişcare LED","Reducere neclaritate","Reducere sacadări","Resetare"];
var picMotionMode   = ["Film","Fără întreruperi","Şterge","Sport","Client"];
var picResetDes		= "Toate setările personale vor fi resetate. Sigur doriţi să executaţi acţiunea selectată?";
var pic10PReset     = "Sigur doriţi să resetaţi balansul de alb 10P?";
var picMotionReset  = "Doriţi să resetaţi claritatea mişcării?";
var picColorSpaceReset    = "Sigur doriţi să resetaţi spaţiul de culoare?";
var picOptions		= ["Preset imag.",
						"Iluminare de fundal","Luminozitate","Contrast","Saturaţie","Nuanţă","Claritate","Temp. culorii","Mod Ecran","Autoformat",
						"Îmbunătăţire sporturi","3D","Navigaţie 3D","ECO Setări","Geometrie",
						"Setări avansate","Resetare imagine","Atenuare micro"];
var picSize			= ["Format 16:9", "Format 4:3", "Format 14:9", "Cinerama",
						"Zbliżenie 16:9", "Powiększ do 16:9","Zbliżenie 14:9","Rozciągnij","Zbliż szerokątn.",
						"Zbliżenie 2","Zbliż szerokątn. 2","Corespondenţă nativă ecran","Punkt po punkcie","Originală","Panoramic"];
var others			= ["Volum","Difuzare","Parolă","Stare","Salvare","Înlocuire","Pornire","Ieşire","Căutare","Ştergere",
						"Niciuna","Automat","Scanare","Securitate","Conectare","Reîmprosp.","Reîncercaţi","Oprire","Setări","Canale",
						"Editare","Inserare","Semnal!","Finalizare","Stereo","Audio","Sursă","Fără audio","Sfaturi","Resetare",
						"Client","Configurare","Memorare","Utilizator","Tastatură îngustă","Mod Securitate","Zilnic","Listă PVR"];
var direction		= ["Stânga","Dreapta","În sus","În jos"];
var audioType 		= ["MPEG","DOLBY AUDIO"/*"AC3"*/,"MPEG4","AAC", "DOLBY AUDIO"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Necunoscut"];
var soundChannels   = ["Necunoscut","Mono","Sub","Mono Dual","Stereo","Subtitrare stereo","Dolby Surround stereo","Surround 2CH    ","Surround","3.0CH","4.0CH","5.0CH","LFE mono","LFE mono dublu","LFE stereo","LFE 2CH surround","LFE surround","3.1CH","4.1CH","5.1CH","7.1CH","Stereo mixt","FMRDO mono","FMRDO stereo","FM mono Nicam mono","FM mono Nicam stereo","FM mono Nicam dublu","Stânga","Dreapta","Altele"];
var prompts			= ["Reglează setările de imagine care se potrivesc cel mai bine mediulului de vizionare.",
						"Reglează nivelul de luminozitate. Cu cât mai aproape de 100, cu atât mai luminoasă.",
						"Ajustați nivelul de contrast. Cu cât mai aproape de 100, cu atât mai mare diferențele intunecat-luminos de imagine .",
						"Ajustați nivelul de saturație. Cu cât mai aproape de 100, cu atât culoarea mai puternica.",
						"Ajustați nivelul de claritate. Cu cât mai aproape de 100, cu atât mai clare detaliile.",
						"Reglati nivelurile iluminării de fundal. Cu cât mai aproape de 100, cu atât mai luminos ecranul.",
						"Ajustați nivelul de nuanță. Această setare modifică tonurile de culoare.",
						"Selectați formatul de imagine care se potriveste cel mai bine programulului de vizualizat.",
						"Configuraţi opţiunile de economisire a energiei.",
						"Reglați setările de geometrie ale ecranului la conectarea unui dispozitiv PC.",
						"Selectaţi mai multe setări avansate pentru imagini.",
						"Restabiliţi toate setările de imagine la valorile prestabilite.",
						"Selectaţi un mod pentru sunet care să corespundă preferinţelor dvs. personale.",
						"Reglaţi echilibrul volumului dintre canalele stânga şi dreapta.",
						"Sistemul de preluare sunet TruSurround HD oferă un sunet bogat și claritate la frecvențe joase și înalte.",
						"Digital Interface Format conecteaza ieșirea sunet  digital TV pentru echipament audio home theater.",
						"Selectaţi limba audio care să corespundă preferinţelor dvs. personale.",
						"Activați Deficiență de Vedere pentru a vă bucura de programele de televiziune.",
						"Testaţi imaginea, sunetul şi semnalul TV.",
						"Selectaţi tipul listei de canale adecvat pentru semnalul dvs. TV.",
						"Selectați limba programului de subtitrare afisat in partea de jos a ecranului.",
						"Vezi textul și imaginile canalului curent.",
						"Digital Living Network Alliance. Bucurați-vă de muzică, fotografii și video prin rețeaua de acasa de la alte dispozitive, cum ar fi un PC.",
						"Afișează conținutul smartphone-ului pe televizor și foloseste smartphone-ul ca o telecomandă pentru televizor.",
						"Arată conținut de pe un dispozitiv Android Miracast-compatibil pe ecranul televizorului.",
						"Blocaţi televizorul.",
						"Selectaţi un nume pentru dispozitivul dvs.",
						"Selectaţi mediul de vizualizare.",
						"Restabiliţi toate setările sistemului la valorile prestabilite.",
    					"Switch off sports mode for more options.",
    					"Îmbunătățiți contrastul de mediu",
    					"Un mod special pentru a vă bucura de sport",
    					"Bucurați-vă de mai multe funcții CEC."];
var initialTitle	= ["Bun venit","Setare iniţială"];
var initialPrompt	= ["Faceți configurarea inițială acum, și o lume de experiență interesantă vă așteaptă!",
						"Vă rugăm selectaţi limba:",
						"Selectați tara / regiunea:",
						"Vă rugăm să vă selectaţi locaţia",
						"Selectaţi tipul de conexiune la reţea:",
						"Selectaţi modul de conexiune la reţea prin cablu:",
						"Conectare la xxxxxxxxx eşuată! Conectaţi aparatul conform următoarei scheme sau selectaţi Stânga pentru a reseta.",
						"Conectat la xxxxxxxxx! Selectaţi Dreapta pentru a continua.",
						"1) Televizorul dumneavoastră poate avea deja un adaptator wireless încorporat\n 2) Sau, dacă este furnizat un adaptator wireless USB, conectaţi-l la televizor.  Apoi, vă rugăm să selectați modul de conectare la rețea wireless.",
						"Se scanează. Aşteptaţi...",
						"Niciun dispozitiv wireless nu este conectat la televizor!",
						"Asigurați-vă că următorul cod PIN este instalat în AP înainte de a face clic pe butonul \"Urm.\".",
						"Apăsaţi butonul de comandă de pe punctul de acces în decurs de 120 de secunde înainte de a apăsa Dreapta!",
						"WPS (Configurare protejată Wi-Fi)",
						"PIN (număr personal de identificare)",
						"PBC (configurarea butonului de comandă)",
						"Conţinutul următor nu poate fi accesat decât printr-o conexiune de reţea. Doriţi să ignoraţi configurarea reţelei?",
						"Există noi actualizări de software pentru dvs. de descărcat, aceasta poate dura ceva timp, în funcție de starea rețelei.",
						"Actualizarea software-ului televizorului asigură că vă puteţi bucura de cele mai noi caracteristici şi servicii.",
						"Nu vă veți bucura de cele mai recente caracteristici și servicii. Vreți să săriți peste actualizarea de Software?",
						"Apăsați Butonul Dreapta pentru a continua.",
						"Nu opriți alimentarea la curent în timpul actualizării, deoarece aceasta poate duce la defectarea TV-ului.",
						"Dacă nu doriţi să actualizaţi, selectaţi NU.",
						"Se actualizează, aşteptaţi",
						"Puteţi actualiza software-ul şi din ACTUALIZARE SISTEM/SOFTWARE.",
						"Ţara selectată cere setarea parolei.\nVă rugăm să setaţi codul pentru TV-ul dvs. şi să-l confirmaţi.",
						"This code is too simple.\nPlease use different digits.",
						"Felicitări! Configurarea iniţială s-a încheiat. Configuraţia dvs. poate fi modificată din meniul principal şi submeniurile conexe.",
						"Selectați modul de securitate:",
						"Selectaţi modul de conectare a reţelei fără fir:",
						"Reţea"];
var initNetCabAndDonRe = ["Niciun cablu de reţea conectat, conectaţi un cablu de reţea!","Niciun adaptor fără fir încorporat sau niciun adaptor USB fără fir furnizat."];
var initChPrompt = ["Instalarea canalelor TV","Selectaţi tipul de scanare Antenă.","Procesare acord automat...","Au fost găsite următoarele canale Antenă:","Selectaţi tipul de scanare Cablu.","Selectaţi un operator din următoarea listă.","Configuraţi informaţiile de scanare","Au fost găsite următoarele canale prin Cablu:","Selectaţi un operator din lista următoare","Selectaţi sateliţii de scanat sau editaţi satelitul selectat","Setaţi parametrii satelitului","Au fost găsite următoarele canale. Scanarea canalelor poate fi efectuată din nou din Canal/Scanare canale"];
var initClockPrompt = ["Obţineţi ora furnizată de reţea!",
						"Setaţi data şi ora:"];
var initialOptions	= ["Mediu","Configurare reţea","Actualizare software","Instalare canale","Ceas"];
var initialHotkeys	= ["Înapoi","Selectare","Următorul","Sunt de acord"];
var initLocations	= ["Acasă","Magazin","Magazin cu demo"];
var initNets		= ["Cu fir","Wireless","Nu dispun de o conexiune la reţea"];
var initWireManuals	= ["Adresă IP","Mască de subreţea","Poartă implicită","DNS primar","DNS secundar"];
var initSoftUpdates = ["Actualizare acum","Actualizare mai târziu"];
var initChannelIns	= ["Continuare","Nu doresc să instalez canale"];
var initChScanTypes	= ["Digital & Analogic","Digital","Analog","Nu doresc să scanez"];
var initChDvbts		= ["Canale antenă ATV:","Canale antenă DTV:"];
var initChDvbcs		= ["Canale ATV prin cablu:","Canale DTV prin cablu:"];
var initChDvbss		= ["Canale prin satelit:"];
var initChDvbSOther	= ["Nu doresc să scanez satelitul"];
var initEndConnectedStatus= ["Deconectat","WiFi conectat","Cu fir conectat"];
var initEndInstallations= "XXXX canale instalate";
var initEndUpdate	= ["Actualizat"];

var audioScenes 	= ["Desktop","Montare pe perete"];			
var screenSavers	= ["Niciun canal, apăsaţi tasta OK şi scanaţi!",
						"Fără semnal!",
						"Criptat",
						"Doar date",
						"Program audio",
						"Fără audio&video",
						"Nu este disponibil",
						"Fără Teletext",
						"Nu există date de program.",
						"Program blocat!",
						"Program blocat!\nApăsaţi OK şi introduceţi codul.",
						"Nu există detalii de program.",
						"Program neindicat minorilor.\nApăsaţi OK şi introduceţi codul dvs.",
						"Canal blocat!",
						"Canal Blocat!!\nApăsaţi OK şi introduceţi codul.",
						"Intrare Blocată!!\nApăsaţi OK şi introduceţi codul.",
						"Fără Suport!",
						"Serviciu indisponibil în prezent",
						"Intr. blocată!",
						"Nici un titlu de program.",
						"Fără Funcţie",
    					"Fără Subtitrare"
						];
var channelNumberOverPromt = ["The number of search programs has exceeded,you can delete some programs and then retry!"];
var chBookingPromt	= ["Canalul actual este programat pentru înregistrare, televizorul va începe înregistrarea.",
						"O înregistrare programată este găsită.\n Comutaţi la XXXX pentru înregistrare",
						"Canalul curent are un memento.",
						"Un memento programat este găsit.\n Comutaţi la XXXX"];
var timeUnit		= ["Sec","min"];
var ciPromt			= ["Datele reţelei s-au schimbat. Pentru a actualiza, puteţi efectua o scanare a actualizărilor. ",];
var othersPromt		= ["Aşteptaţi...",];
var menuOptions		= ["Imagine ","Sunet ","Canal","Smart TV","Reţea","Sistem","Asistenţă"];
var optionOptions	= ["Preset imag.","Sunet preconfig.","Îngheaţă","T-Link","decalaj","PVR","Lista programului","Setări","*"];
var optionTLinkPromt= [["Pornire automată","Auto standby","Meniu ghid"],
						["Pornire","În aşteptare","Volume amplificateur"]];
var powerPromt		= ["Televizorul se va opri în curând! Apăsați orice tastă pentru a anula."];
var ttxLanguage		= ["EUR VEST","EUR EST","rusă","arabă/ebraică","farsi","arabă ","Beloruščina","greacă","turcă"];
var ttxOptions		= ["Afişare","Ciclu sub-pg.","Limbă","Pg. Alarmă","Buletin informativ"];
var weekday         = ["Duminică","Luni","Marţi","Miercuri","Joi","Vineri","Sâmbătă"];
var lcnConfflict	= "Acest program are probleme de recepţionare.";
var inShopMode		= "Televizorul dvs. este în modul Magazin. Pentru modul Pagină de start, selectaţi „Sistem” şi schimbaţi „Localizare” din meniu.";
var nitRefresh		= "Datele reţelei s-au modificat. Efectuaţi o scanare de actualizare?";
var picHDMIMode     = ["Auto","Grafic","Video"];

var glassRemind    	= ["Asociaţi ochelarii dvs. 3D cu televizorul\n(Ţineţi apăsată tasta POWER de pe ochelarii 3D).","Ochelarii dvs. 3D sunt conectaţi la televizor ",""];
var pvrRemind 		= ["Nu scoateţi dispozitivul USB şi nu întrerupeţi alimentarea"];
var pvrConName   	= ["PVR","Informaţii despre program:",["Note: If you record the HD channel, please to select  the  disk(of speed >5.0MB/sec), and to select the disk (of speed >3.0MB/sec) when you want to record the SD channel.","Filmul înregistrat este salvat în directorul \"PVR\"."],"Oprire","Înregistrare","oră","Minut","Durată","Sfaturi","Utilizaţi tastele-săgeţi pentru a defini durata de înregistrare."];
var pvrDisRemind 	= "Introduceţi stickul USB pentru înregistrare.";
var pvrRemindWords  = ["Doriţi să ieşiţi?",
							"Doriţi să opriţi înregistrarea şi să parcurgeţi fişierele înregistrate?",
							"Discul este scos.",
							"Nu există spaţiu liber suficient.",
							"Niciun fişier înregistrat. Începeţi înregistrarea.",
							"PVR nu poate începe în Canal bruiat",
							"Funcţia nu este disponibilă",
							"Salvare reuşită.",
							"Opriţi procesul de înregistrare şi  schimbaţi sursa de intrare?",
							"Televizorul va încheia înregistrarea curentă. Doriţi să ieşiţi?",
							"Înregistrarea PVR are nevoie de semnalul TV pentru a funcţiona corect, verificaţi semnalul."];
var pvrChangeCh 	= ["Doriţi să porniţi pe canal?",
							"Opriţi procesul de înregistrare şi schimbaţi canalul?"];
var pvrChangeToPIN8	= ["Doriţi să modificaţi sursa la aparatul conectat la intrarea SCART?",
				    		"Doriţi să opriţi procesul de înregistrare şi să modificaţi sursa la aparatul conectat la intrarea SCART?"];
var pvrChangeToCEC  = ["Doriţi să modificaţi sursa la aparatul conectat la o intrare HDMI?",
				  			 "Doriţi să opriţi procesul de înregistrare şi să modificaţi sursa la aparatul conectat la o intrare HDMI?"];
var pvrGuideJump    = ["Doriţi să accesaţi EPG?",
							"Opriţi procesul de înregistrare şi intraţi în EPG?"];
var pvrMediaJump    = ["Doriţi să accesaţi Media?",
							"Opriţi procesul de înregistrare şi intraţi în Media?"];
var timeshiftExtra	= ["Doriţi să opriţi decalarea şi să treceţi televizorul schimbaţi canalul?",
						"Doriţi să opriţi alternanţa temporală şi să modificaţi sursa la aparatul conectat la intrarea SCART?",
						"Doriţi să opriţi alternanţa temporală şi să modificaţi sursa la aparatul conectat la o intrare HDMI?",
						"Decalajul temporal nu începe în Canal bruiat",
						"Doriţi să opriţi alternanţa temporală şi să accesaţi EPG?",
						"Doriţi să opriţi decalarea şi să treceţi televizorul în mod USB?",
						"Doriţi să opriţi decalarea şi să treceţi televizorul schimbaţi sursa de intrare?",
						"Introduceţi stickul USB pentru înregistrare.",
						"Dimensiunea discului este insuficientă.",
						"Televizorul va încheia alternanţa temporală curentă. Doriţi să ieşiţi?"];
var timeshiftStatus	= ["Repede înapoi","Oprire","Redare","Pauză","Repede înainte"];
var pvrPowerOffRemind= ["Înregistrare în aşteptare","În aşteptare","Televizorul înregistrează acum, doriţi să menţineţi înregistrarea atunci când televizorul este în modul în aşteptare?"];
var timeshiftInitTitle= "Setare disc";
var timeshiftInitReminds= ["Acest asistent este utilizat la reglarea discului USB pentru decalare. Selectaţi modul de reglare.",
						 "Pentru o mai bună performanţă, recomandăm formatarea discului USB. Aceasta va şterge toate datele.",
						 "Selectaţi dimensiunea fişierului pentru decalare.",
						 "Formatare",
						 "Nu există spaţiu liber suficient.",
						 "Creare fişier decalare",
						 "Testare viteză",
						 "Viteza discului este prea mică (< %f MB/sec) pentru a activa funcţia de decalare!",
						 "Disc gata pentru decalare. Recomandăm totuşi schimbarea acestuia (cu viteză > %f MB/sec) pentru o mai bună performanţă.",
						 "Disc gata pentru decalare. "];
var timeshiftInitButtons= ["Formatare","Salt","Anuluj","Ok","Finalizare","Ieşire"];
var timeshiftInitOther=["Viteză disc:","MB / sec"];

var selectChoice	= "Sunteţi sigur?";
var chAtvStore		= "Stocare ca XXXX";
var chEpgFirstGenreUK= ["Cinema","Ştiri şi informaţii","DIVERTISMENT","Sport","Pentru copii","Educaţie","Lifestyle","Dramă"];
var homePageTitleList = ["APLICAŢII","TV","VIDEO-URI","Pagină de start"];
var homePageFavAndAllName  = ["Aplicaţii favorite","Toate aplicaţiile"];
var homePageBackUp = ["Manual electronic","GuideOn"];
var homePageRemind   = ["Funcţiile complete sunt disponibile doar după conectarea la reţea.","Televizorul dvs. nu are, deocamdată, niciun canal. Programele vor fi disponibile după scanarea canalelor.","Nr.program","Căutaţi acum canale?"];
var homePageHistory = ["Istoric"];
var miracastTitle = ["Afişaj WiFi","Dispozitiv TCL"];
var miracastRemind=["Afişaj WiFi vă permite să partajaţi wireless (mai exact, fără cabluri) ecranul şi sunetul dispozitivului dvs. (de ex. smartphone sau tabletă) cu televizorul. Astfel, puteţi vedea la televizor ceea ce redă smartphone-ul sau tableta. De exemplu, puteţi lansa un clip pe smartphone şi îl puteţi afişa simultan pe televizor sau vă puteţi utiliza tableta drept controler pentru jocuri, iar conţinutul se poate afişa pe ecranul mare al televizorului.","Linkul prin WiFi la TV este pregătit. Acum, puteţi începe să partajaţi ecranul dispozitivului cu televizorul.","Se conectează. Vă rugăm să așteptați!","Conexiune nereuşită!","Nu s-a reușit să se conecteze. Vă rugăm verificati!"];
var homePageLittleWin = ["Setări","Media","Canale favorite","Smart TV","EPG"];

var hbbtvStopRemind  = ["Vreti sa opriti redarea?"];
var colorSystem = ["Auto","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Apăsaţi pe ≡ pentru informaţii suplimentare";
var emptyListInfo = "Niciun dispozitiv nu este conectat la TV!";
var optionVideoListArray_1 = ["Preset imag.", "Sunet preconfig.", "Mod de redare", "Mod Ecran", "Regim 3D", 
							  "Comutator S-D", "Adâncimea imaginii", "Subtitrare", "Pistă sonoră", "Titlu", "Capitol", "Info"];
var optionVideoListArray_2 = ["Preset imag.", "Sunet preconfig.", "Mod de redare", "Mod Ecran", 
							  "Subtitrare", "Pistă sonoră", "Titlu", "Capitol", "Info"];
var bottomTipsText = ["Redare/pauză", "Repede înapoi", "Repede înainte", "Listă de redare", "Setări"];
var picturePresetArray = ["Standard", "Dinamic", "Natural", "Cinema", "Personal"];
var videoPlayModeArray = ["Repetare toate", "Repetare una", "Normal"];
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Zbliż szerokątn.", "Zbliżenie 2", "Zbliż szerokątn. 2", "Rozciągnij", "Automat"];
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "Zbliżenie 14:9", "Zbliżenie 16:9", "Powiększ do 16:9", "Automat"];
var Mode3DArray = ["Oprit", "de la 2D la 3D", "Unul lângă altul", "Sus și jos", "Intercalare linii"];
var videoOptionListArray = ["Oprit", "Melodie", "Subtitrare", "Titlu", "Capitol"];
var subMenuTitleText = "Subtitrare";
var langMenuTitleText = "Limbă audio";
var titleMenuTitleText = "Titlu";
var mode3DMenuTitleText = "Regim 3D";
var langInfoText = "Melodie";
var STOP_RESUME_INFO = "Oprire-Reluare";
var playListName = "nume";
var eb_tips = "Sfaturi";
var ok_button = "Ok";
var eb_info = ["Eroare de decodificare audio.", "Eroare de decodificare video.", "Format audio neacceptat.", 
			   "Format video neacceptat.", "Nu poate deschide acest fişier.", "Eroare de redare, vă rugăm să încercaţi din nou.",
			   "Formatul de fişier neacceptat.", "Ups! Player-ul a oprit redarea.",
			   "Cale fişier inexistentă sau incorectă.\n Reintroduceţi dispozitivul de stocare și încercați din nou.",
			   "Continuaţi redarea de la starea de redare\n iniţială?"];
var picturePlayErrorTips = ["Încărcare nereuşită!!!","Imaginea este prea mare!!!","Eroare reţea!!!","Eroare fir!!!","Eroare param!!!","Eroare necunoscută!!!"];
var frameTitleText = "Dispozitiv nou";
var eb_quit_info = "Sigur doriţi să părăsiţi?";
var eb_yes = "DA";
var eb_no = "NU";
var offinfo = "Oprit";
var naInfo = "Nul";
var consoleInfoArray = ["Repede înapoi", "Repede înainte", "Redare/pauză", "Listă de redare"];
var cantOperateText = ["Funcţie neacceptată."];
var chapterChangeInfo = "Doar capitolele de la 1 la XXXX sunt disponibile.";
var metaDataArray = ["Metadate pentru titlu/ediţie: ", "Metadate pentru capitol: ", "Metadate audio: ", "Metadate pentru subtitrare: "];
var metaTitleInfo = "Titlu";
var metaChapterInfo = "Capitol";
var videoLoadingInfo = "Se analizează…";
var listLoadingInfo = "Se încarcă…";
var pgInfo = "Evaluare juridică: ";
var fileNameText = "nume";
var fileDateText = "Dată";
var fileSizeText = "Dimensiune";
var fileDurationText = "Durată";
var fileDirectorText = "Regizor";
var fileCopyrightText = "Drepturi de autor";
var fileArtistText = "Artist";
var fileAlbumText = "Album";
var fileGenreText = "Gen";
var fileYearText = "An";
var fileGenreText = "Gen";
var mainListArray = ["Tot", "Imagine ", "Video", "Muzică"];
var sortArray = ["nume", "Dată"];
var parserArray = ["Normal", "Recurent  "];
var emptyTipsInfo = "Ups. Niciun fişier suportat găsit.";
var emptyFolderInfo = "Ups. Niciun fişier suportat găsit.";
var sortName = "Ordonare după";
var parserName = "Analizator";
var divx_str1 = "Înregistrare DivX(R)";
var divx_str2 = "Înregistrare DivX(R)";
var infor_str = "Info";
var quickMenuEmptyText = "Nicio opţiune disponibilă.";

var musicSoundPresetArray = ["Standard", "Cinema", "Muzică", "Voce clară", "Personal"];
var musicInformationArray = ["nume", "Artist", "Album", "Gen:", "An:", "Durata:"];
var playListName = "nume";
var playTipsInfo = ["Redare primul fişier în curs.", "Redare ultimul fişier în curs."]
var musicNameInfo = "Name";
var musicArtistInfo = "Artist";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Sunet preconfig.";
var optionBGMInfo = "Redare în fundal";
var optionAudioOnlyInfo = "Doar audio";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX s-a conectat la televizor !";
var tvRemoteTitle		= "Telecomandă";
var tvRemoteDeveloper	= "Aplicaţia a fost dezvoltată de TCL";
var tvRemoteDeviceTitle	= "Nume dispozitiv:";
var remoteOption		= ["Partajare media","Telecomandă","Ajutor","Despre","Conectare inteligentă"];
var remotebottom		= " Descărcaţi « TV la distanţă » pe smartphone-ul dvs. ";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Partajarea fotografiilor, a video-urilor şi a melodiilor cu televizorul prin intermediul telefonului.",
							"Etape: \n 1. Faceţi clic pe « TV la distanţă » de pe telefon. Conectaţi telefonul cu televizorul prin intermediul aceleiaşi reţele WiFi; \n 2. Faceţi clic pe « Partajare media » pentru a parcurge fişierele media; \n 3. Trimiteţi media la televizor pentru a le reda (cu ajutorul uneia dintre următoarele opţiuni)",
							"      a) Trageţi şi plasaţi folderul/fişierul pe pictograma televizorului din partea de sus a ecranului;\n      b) Mişcaţi telefonul către televizor pentru a lansa primul fişier;\n      c) Redaţi fişierul media pe telefon şi faceţi clic pe pictograma de partajare cu televizorul;",
							" 4. În timpul redării pe televizor, agitaţi telefonul pentru a reda fişierul anterior sau următor."];
var controlReminds		= ["Utilizaţi telefonul ca telecomandă pentru a acţiona televizorul.",
							" ",
							"Etape: \n 1. Faceţi clic pe « TV la distanţă » de pe telefon. Conectaţi telefonul cu televizorul prin intermediul aceleiaşi reţele WiFi; \n 2. Faceţi clic pe « Telecomandă » pentru a acţiona televizorul."];
var helpDeviceWords		= "Interacţiune pe ecrane multiple";
var helpBottom			= " În era tehnologiei cloud, dispozitivele inteligente precum telefonul şi televizorul sunt conectate reciproc. Distribuiţi conţinut media pe mai multe ecrane cu familia şi controlaţi televizorul prin telefon! ";
var helpReminds			= ["Pregătiri\n 1. Descărcaţi şi instalaţi « TV la distanţă » din Google Play sau Apple Store.\n 2. Conectaţi telefonul cu televizorul prin intermediul aceleiaşi reţele WiFi.",
							" ",
							"Telefon recomandat\n   1. Procesor: peste 800 MHz\n   2. Spaţiu stocare: cel puţin 80 MB de spaţiu liber",
							" ",
							"Aviz de responsabilitate\n Dacă \"Telecomanda TV\" nu este disponibilă pe telefonul dvs., vă rugăm să contactați producătorul telefonului."];
var helpButtons			= ["Anterior","Următorul"];
var aboutReminds		= ["Telecomandă","Aplicaţia a fost dezvoltată de TCL"];
var aboutExit			= "Ieşire";
var smartReminds		= ["Conexiunea rapidă şi inteligentă între televizor şi telefon.",
							" ",
							"Etape\n 1. Conectaţi televizorul şi telefonul la aceeaşi LAN. Faceţi clic pe « TV la distanţă » de pe smartphone.\n 2. Faceţi clic pe « Conectare inteligentă » pentru a scana codul QR.\n 3. Cu televizorul în modul de vizualizare Transmisiune, apăsaţi tasta INFO de pe telecomanda televizorului pentru 4 secunde pentru a afişa un cod QR pe tot ecranul.",];
var smartQRReminds		= ["Faceţi clic pe Conectare inteligentă din TV la distanţă de pe telefonul dvs. şi scanaţi codul QR pentru a conecta rapid televizorul şi telefonul.",
							"Codul QR conţine informaţiile despre contul LAN. Păstraţi-l într-un loc sigur."];
							

var consoleTipArray = ["Anterior","Următorul","Consolă","Listă de redare"];							
var optionInfoArray = ["Preset imag.","Mod de redare","Durată","Efect","Info"];

var playModeArray = ["Normal","Amestec","Repetă"];
var durationArray = ["Scurt (5 s)", "Mediu (10 s)", "Lung (15 s)"];
var effectArray = ["Niciuna", "Rotire", "Şterge dreapta", "Şterge stânga", "Şterge sus", "Şterge jos", "Cutie recepţie", "Cutie expediere", "Aleatoriu"];
var infoArray = ["Nume:","Dimensiune:","Data:","Locaţie"];

var picturePresetBarTitleInfo = "Preset imag.";
var picturePresetBarArray = ["Standard","Dinamic","Studiou","Cinema","Personal"];
var upTipsInfo = "Mutare imagine"; //add yums 2014-10-10
var consoleTipsArray = ["Consolă","Anterior","Următorul","Listă de redare","Setări"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Apăsaţi din nou pe DREAPTA pentru a reda imaginea următoare","Apăsaţi din nou pe STÂNGA pentru a reda imaginea anterioară","Apăsaţi din nou pe JOS pentru a afişa lista de redare"]; //add yums 2014-10-10

var optionPvrListArray = ["Preset imag.","Sunet preconfig.", "Mod Ecran", "Regim 3D", "Subtitrare", "Pistă sonoră", "Info"];							
	
var titleSpanFirstArray = ["Control şi conexiune","Operaţiuni de bază","APLICAŢII","TV","Setări","FAQ"];
var titleSpanSecondArray = [["Telecomandă","Taste tastatură","Navigare ușoară ","Conexiune TV","Conexiune TV","Conexiune TV","Wireless"],["Lansator","Bară de stare","Sursă"],["Se redau aplicaţii","Media","Telecomandă"],["Reglare canal şi volum","Listă canale","EPG","Instal. canal","Canale favorite"],["Reglare imagine","Reglare sunet","Reglare canal","Actualizare software","Limbă","Control parental"],["Întrebări frecvente","Întrebări frecvente","Soluţii tehnice","Soluţii tehnice","Termeni și condiții"]];
var contentSpan1_1Array =[["ALIMENTARE:","SURSĂ:","SETĂRI:","OPŢIUNE:","ÎNAPOI:","INFORMAŢII:","ACASĂ:","IEŞIRE:","LISTĂ:"],
    ["Pornire alimentare sau mod standby",
        "Selectare sursă intrare",
        "Afişare meniu Setări",
        "Afişare meniu Opţiune",
        "Revenire la meniul anterior sau ieşire dintr-o aplicaţie în funcţiune",
        "Afişează informaţiile despre program",
        "Accesare pagină principală SmartTV",
        "Revenire la meniul anterior sau ieşire dintr-o aplicaţie în funcţiune",
        "Afişează lista de canale"]];
var contentSpan1_2Array = ["Canal precedent","Canal următor","Mărire volum","Reducere volum","Sare la pagina de start","Confirmare opţiune","În aşteptare/Alimentare pornită"];
var contentSpan1_3Array = ["OK / Ghid","Canal Sus","Canal Jos","Volum jos","Volum sus","Disponibil ca taste săgeată în unele funcții."];
var contentSpan1_4Array = ["LAN","HDMI (MHL)","HDMI  ","HDMI (ARC)","Adaptor AV OUT","LAN","Smartphone","PC/Decodor/DVD","Amplificator audio","Amplificator audio/Monitor","Televizorul dvs. nu poate include toate prizele."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Căşti","Adaptor AV IN","SPDIF","Adaptor CMP AUDIO IN","Adaptor CMP IN (YPbPr)","Dispozitive USB","Dispozitive USB","Căşti","DVC/Consolă jocuri/Decodor/DVD","Amplificator audio","DVC/Consolă jocuri/Decodor/DVD","Televizorul dvs. nu poate include toate prizele."];
var contentSpan1_6Array = ["Interfaţă comună","SD","VGA","SCART","Mini SCART","INTRARE ANTENĂ","Card PCMCIA","Card SD","PC","Decodor/DVD","Antenă/Cablu/Satelit","Televizorul dvs. nu poate include toate prizele."];
var contentSpan1_7Array = ["Comprimat","PC","Router","Telefon","TV"];
var contentSpan1_8Array = ["Funcție de comutare/Alimentare","Apăsați lung pentru a merge în aplicația Sleep timer","În jos","În sus","Volum/Canal/Sursă"];

var contentSpan2Array = [["Apăsați tastele săgeată pentru a vizualiza Homepage.","Apoi apăsaţi pe OK pentru a urmări unul dintre programele dorite sau pentru a accesa aplicaţia."],["Afişaţi data, reţeaua şi dispozitivele etc. în colţul din dreapta sus al ecranului."],["Selectaţi sursa de intrare dintre dispozitivele conectate la televizor prin intermediul diverselor porturi, cum ar fi TV, AV, HDMI etc."]];

var contentSpan3Array = ["Bucurați-vă și vizualizați aplicațiile preferate prin intermediul paginii de Smart TV","Vizualizați fotografii, vizionați clipuri video și redați muzică de pe un dispozitiv de stocare USB.","Conectaţi televizorul dvs. şi smartphone-ul sau tableta la aceeaşi LAN","Faceți clic pe nScreen sau TV de la distanță de pe smartphone sau tableta","Împărtășiți fotografii, clipuri video și muzică pe mai multe ecrane cu familia dvs. și controlați televizorul prin intermediul smartphone-ului dvs."];

var contentSpan4Array = [["Apăsaţi pe SUS/JOS pentru a comuta canalele","Apăsaţi pe STÂNGA/DREAPTA pentru a regla volumul"],["Apăsaţi pe LIST de pe telecomandă pentru a afişa canalele în ordine.","Apăsaţi pe SUS/JOS pentru a alege canalul"],["EPG este un ghid cu afişare pe ecran, care afişează programele TV programate. Puteţi naviga, selecta, vizualiza şi înregistra programe."],["Căutarea şi instalarea canalelor"],["Adăugaţi sau editaţi canalele dvs. preferate în Listă canale"]];

var contentSpan5Array = ["Bucuraţi-vă de programele dvs. preferate prin intermediul aplicaţiilor video"];

var contentSpan6Array = [["Apăsaţi pe Opţiune pentru a afişa opţiunile de setare a sistemului ","Accesaţi Setări imagine pentru a regla valorile"],["Apăsaţi pe Opţiune pentru a afişa opţiunile de setare a sistemului ","Accesaţi Setări sunet pentru a defini opţiunile"],["Apăsaţi pe Opţiune pentru a afişa opţiunile de setare a sistemului ","Accesaţi Setări canal pentru a defini opţiunile"],["Actualizaţi televizorul atunci când apare o nouă versiune de software"],["Puteţi alege limba preferată a meniului"],["Le permite părinţilor să blocheze canalele sau programele nepotrivite pentru copii"]];

var contentSpan7_1Array = [["Lipsă imagine, lipsă sunet","Verificaţi dacă siguranţa sau disjunctorul funcţionează.","Introduceţi un alt aparat electric în priză pentru a vă asigura că priza funcţionează sau că alimentarea a fost pornită.","Fişa de alimentare este în contact greşit cu priza","Verificaţi sursa semnalului."],["Imagine normală, lipsă sunet","Apăsaţi pe butonul pentru volum SUS pentru a mări volumul.","Setarea sunetului este incorectă.","Eroare de semnal al transmisiunii."],["Sunet normal, lipsă imagine","Reglaţi luminozitatea şi contrastul","Eroare de semnal al transmisiunii.","Verificaţi dacă nu cumva este în modul doar audio."]];
var contentSpan7_2Array = [["Interferenţe radio","Această interferenţă produce unde mobile sau dungi diagonale şi, în unele cazuri, pierderea contrastului imaginii. Găsiţi şi eliminaţi sursa interferenţelor radio."],["Lipsă culoare","Reglaţi setările pentru culoare.","Încercaţi un alt canal. Programul ar putea fi recepţionat în alb şi negru."],["Telecomanda nu funcţionează","Înlocuiţi bateriile.","Bateriile nu sunt corect instalate. Alimentarea principală a televizorului nu este conectată."]];
var contentSpan7_3Array = [["Conţinutul dispozitivului USB nu este afişat","Verificaţi dacă dispozitivul de stocare USB este compatibil cu televizorul.","Verificaţi dacă formatele fişierelor audio şi imagine sunt acceptate de către televizor."],["Redare fără sunet","Formatul audio al video-ului nu este acceptat de către televizor."],["Fişierele nu sunt redate fără probleme","Performanţa de transfer a dispozitivului de stocare USB poate limita rata de transfer al datelor către televizor."]];
var contentSpan7_4Array = [["Aspecte importante de luat în considerare în momentul actualizării software-ului","Fără pene de curent în timpul actualizării software-ului.","Evitaţi orice operaţiune cu telecomanda în timpul actualizării software-ului.","Aveţi răbdare, deoarece procesul de actualizare a software-ului poate dura o vreme."],["Nu apar modificări observabile ale interfeţei televizorului după actualizarea software-ului.","În anumite condiţii, actualizarea software-ului ar putea nu numai să actualizeze sau să adauge funcţii noi, ci şi să îmbunătăţească performanţele televizorului fără modificări observabile ale interfeţei. În plus, interfaţa televizorului poate rămâne, uneori, intactă."]];
var termsTitle = "Termeni și condiții";
var termsConditions = ["(Declarație juridică) a TCL - producator al acestui televizor.","Din cauza diferitelor capacităţi ale produselor care oferă serviciile SmartTV precum şi a limitărilor conţinutului disponibil, anumite funcţii, aplicaţii şi servicii pot să nu fie disponibile pentru toate dispozitivele sau în toate ţările. Unele funcţii ale SmartTV pot să necesite dispozitive periferice suplimentare sau cotizaţii de membru care sunt vândute separat. Vă rugăm să vizitaţi website-ul nostru pentru mai multe informaţii despre dispozitivele specifice şi disponibilitatea de conţinut. Serviciile şi disponibilitatea de conţinut prin SmartTV sunt supuse periodic modificărilor fără notificare prealabilă. \n   Conţinutul şi serviciile accesibile prin acest dispozitiv aparţin terţilor şi sunt protejate de legea drepturilor de autor, brevete, mărci înregistrate şi/sau alte legi referitoare la proprietatea intelectuală. Un astfel de conţinut şi de servicii sunt furnizate exclusiv pentru uz personal necomercial. Nu puteţi folosi conţinutul sau serviciile într-un mod care nu a fost autorizat de proprietarul conţinutului sau de furnizorul de servicii. Fără limitare la cele de mai sus, cu excepţia cazului în care este autorizat în mod expres de proprietarul conţinutului sau de furnizorul de servicii, nu puteţi modifica, copia, republica, încărca, posta, transmite, traduce, vinde, crea lucrări derivate, exploata, sau distribui în orice mod sau orice mediu conţinutul sau serviciile afişate prin intermediul acestui dispozitiv. \n   CONFIRMAŢI ÎN MOD EXPRES ŞI SUNTEŢI DE ACORD CĂ UTILIZAREA ACESTUI DISPOZITIV ESTE PE PROPRIUL DUMNEAVOASTRĂ RISC ÎN CEEA CE PRIVEŞTE CALITATEA SATISFĂCĂTOARE, PERFORMANŢA ŞI PRECIZIA. DISPOZITIVUL ŞI CONŢINUTUL ŞI SERVICIILE DE LA TERŢI SUNT FURNIZATE „CA ATARE” FĂRĂ NICIUN FEL DE GARANŢIE, FIE EXPRESĂ, FIE IMPLICITĂ. TCL DECLINĂ ÎN MOD EXPRES TOATE GARANŢIILE ŞI CONDIŢIILE CU PRIVIRE LA ACEST DISPOZITIV ŞI ORICE CONŢINUT ŞI SERVICII, FIE EXPRESE, FIE IMPLICITE, INCLUZÂND, DAR FĂRĂ A SE LIMITA LA, GARANŢIILE DE VANDABILITATE, DE CALITATE SATISFĂCĂTOARE, ADECVARE PENTRU UN ANUMIT SCOP, ACURATEŢE, FOLOSINŢĂ ŞI RESPECTARE A DREPTURILOR PĂRŢILOR TERŢE. TCL NU GARANTEAZĂ ACURATEŢEA, VALIDITATEA, DURABILITATEA, OPORTUNITATEA, LEGALITATEA SAU CARACTERUL COMPLET AL CONŢINUTULUI SAU SERVICIILOR DISPONIBILE PRIN ACEST DISPOZITIV ŞI NU GARANTEAZĂ CĂ DISPOZITIVUL, CONŢINUTUL SAU SERVICIILE VOR ÎNTRUNI CERINŢELE DUMNEAVOASTRĂ SAU CĂ FUNCŢIONAREA DISPOZITIVULUI SAU SERVICIILOR VA FI CONTINUĂ SAU FĂRĂ PROBLEME. TCL NU VA FI RESPONSABIL ÎN NICIO SITUAŢIE, INCLUSIV CEA DE NEGLIJENŢĂ, FIE PRIN CONTRACT, FIE DIN CULPĂ, PENTRU ORICE DAUNE DIRECTE, INDIRECTE, ACCIDENTALE, SPECIALE SAU SUBSECVENTE, PENTRU ONORARIILE AVOCAŢILOR, CHELTUIELILE SAU ORICE ALTE DAUNE CARE DECURG DIN SAU AFERENTE ORICĂROR INFORMAŢII CONŢINUTE AICI SAU CARE REZULTĂ DIN UTILIZAREA DISPOZITIVULUI SAU ORICĂRUI CONŢINUT SAU SERVICIU ACCESAT DE CĂTRE DUMNEAVOASTRĂ SAU TERŢI CHIAR DACĂ A FOST AVERTIZAT DE POSIBILITATEA UNOR ASTFEL DE DAUNE. \n   Serviciile terţilor pot fi schimbate, suspendate, înlăturate sau întrerupte sau accesul poate fi dezactivat oricând fără preaviz, iar TCL (fabricantul aparatelor TV Thomson) nu transmite nicio asigurare sau nu oferă nici o garanţie că serviciile sau conţinutul vor rămâne disponibile pentru orice perioadă de timp. Conţinutul şi serviciile sunt transmise de către terţi prin reţele şi facilităţi de transmisie asupra cărora TCL nu deţine controlul. Fără a limita caracterul general al acestei declinări a răspunderii legale, TCL declină în mod expres orice responsabilitate sau răspundere pentru orice modificare, întrerupere, dezactivare, înlăturare sau suspendare a oricărui conţinut sau serviciu disponibil prin acest dispozitiv. TCL poate impune limite privind utilizarea sau accesul la anumite servicii sau conţinut oricând, fără preaviz sau responsabilitate. TCL nu este responsabil sau răspunzător de serviciul clienţi aferent conţinutului şi serviciilor. Orice întrebare privitoare la sau cerere de servicii referitoare la conţinut sau servicii trebuie adresată direct furnizorilor de servicii şi conţinut respectivi."];

var noChannelListRemind        = ["Niciun canal găsit. Lista de canale va fi disponibilă după scanarea canalelor.","Scan. Canal"];
var closeSubtitleRemind   = "Funcţia va fi disponibilă atunci când subtitrarea este dezactivată. Doriţi să instalaţi acum?";

var estickerTitles = ["Imagini extrem de realiste","Culori care par să prindă viaţă","Mişcare extraordinar de realistă","Calitate dinamică a imaginii","Scalare SR UHD","Experienţă a universului 3D","Performanţe mai rapide","Conţinut 4K de viitor","Bucuraţi-vă de lumea on-line","Accesaţi conţinut suplimentar","Tunere digitale încorporate","Posibilitate de conectare a tuturor dispozitivelor","Diverse surse 4K","Conţinut USB","WIFI ultra rapid","Conţinut mobil pe televizor","Conţinut al aparatelor mobile","Conţinut local","Aprobat de DivX","Imagine fără defecte","Canal Ready","TDT Premium"];
var estickerDescriptions = ["O experienţă de vizualizare extraordinară, mulţumită imaginilor cu de patru ori mai multe detalii decât ecranul Full HD sau UHD","Gama variată de culori asigură vivacitatea fiecărei scene, cu tonurile sale de roşu vibrant şi de verde smarald","Interpolare de cadru 4K şi redare în fundal pentru a combate neclaritatea de mişcare","Strălucirea imaginii originale este maximizată pentru a genera un rezultat cu adevărat dinamic, cu un contrast luminos","Bucuraţi-vă de emisiuni TV şi de discuri Blu-Ray mai clare ca niciodată, mulţumită tehnologiei Super Resolution","Experimentaţi opţiunea 3D TV Ready şi urmăriţi diverse conţinuturi în 3D ","O şi mai plăcută experienţă de divertisment, cu Quad Core pentru o interacţiune lină şi o performanţă îmbunătăţită","Acceptare a codecurilor HEVC (H.265) suplimentare pentru standardul de viitor pentru distribuţia video 4K","O multitudine de aplicaţii on-line, servicii VOD, posibilităţi de urmărire a emisiunilor după data transmiterii acestora şi de navigare Internet","Vedeţi mai mult cu servicii şi conţinut suplimentare de la emiţătorii dvs. preferaţi","Accesaţi canale de televiziune HD fără ajutorul unui decodor","Uşor de conectat multiple surse digitale la domiciliu","Televizor pregătit pentru viitor, capabil să redea 4K 50/60 Hz cu HDMI 2.0 prin HDCP 2.2","Conţinut video sau foto direct de pe discul USB, HDD sau aparatul foto sau camera video, pe ecran mare, la rezoluţie 4K","Standardul 2x2 MIMO şi AC de ultimă generaţie asigură o viteză de accesare a Internetului fără precedent","Bucuraţi-vă de fotografii, video-uri, aplicaţii de pe dispozitive mobile pe ecran mare mulţumită tehnologiei de oglindire pe ecran.","Fotografiile, video-urile, aplicaţiile de pe smartphone sau tabletă pot fi afişate pe un ecran mare ","Afişaţi pe un ecran mare conţinutul local, precum fotografiile, video-urile de pe dispozitivele conectate la reţeaua locală","Redaţi filme închiriate sau proprii protejate de DivX","Faţetă ultra îngustă şi design super plat","Testat şi aprobat de Canal+","Testat şi aprobat de TDT Premium"];							

var eManualTextArray = ["Manual electronic","Toate elementele grafice în interior sunt numai pentru reprezentare."];
var frontPanelRemind = "Panou frontal blocat.";
var eRPRemind		 = "Modul magazin incompatibil cu cererea ERP. Sunteţi sigur?";	
var noRelatedChannel = "Nici un canal relevant";
var option0624Name          = ["BOP","BFS","Fiecare caz în parte","GetUserID","BGM","Reset all","Reset. magaz.","NRM","DVB-T2 şi alegere ţară","Mod HbbTV"];
var DVBT2AndChoice = ["Pornit","După țară","Oprit"];
var hbbtvServiceRemind = "Serviciul HbbTV se va lansa în curând.";
var insertWord = "Inserare";		
var viewDetail = "Vezi detalii";							

var remindOAD  = "Actualizare software. O nouă actualizare recomandată poate fi disponibilă pe un alt canal. Dacă acceptaţi să o descărcaţi, canalul poate fi schimbat automat. Doriţi să faceţi asta chiar acum?";

var LEDStatus = ["Luminează intermitent", "Normal","Oprit"];
var netFlixRemind = "Această funcţie va întrerupe accesul la serviciile Netflix până ce vă conectaţi din nou.";
var ESNExplanation = "Număr de serie electronic";
var resetShopRemind = "Sistemul se resetează acum, vă rugăm să nu vă închideţi televizorul";
var initialSelectOption = "Selectaţi o opţiune:";
var databaseRemind   = "Sistemul a detectat faptul că baza de date a fost deteriorată dintr-un motiv necunoscut şi a reconstruit-o automat, apăsaţi OK pentru continuare";
var Deactivation = "Deconectare";
var oadFutureRemind = "Actualizare software.\n Un nou software recomandat va fi disponibil în %s. Actualizarea poate dura mai mult timp, iar ecranul se poate întuneca. Nu opriţi receiverul în timpul actualizării. Dacă acceptaţi această actualizare, lăsaţi receiverul pornit la ora programată. Doriţi să preluaţi această actualizare?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Ieşire sunet";
var bt_soundOutPutTV = "Boxe TV";
var bt_soundOutPutBT = "Aparat Bluetooth";
var bt_soundOutPutBT_TV = "Bluetooth şi TV";
var bt_refreshBarName = "Aparate";
var bt_settingTips_On = "Activaţi funcţia Bluetooth şi căutaţi aparate.";
var bt_settingTips_Finding = "Găsire aparate disponibile…";
var bt_settingTips_NoDevice = "Niciun aparat disponibil.";
var bt_deviceList_State_NoConnect = "Neconectat";
var bt_deviceList_State_Connecting = "Conectare...";
var bt_deviceList_State_Connected = "Conectat";
var bt_deviceList_State_Paired = "Asociat";
var bt_deviceList_Conncect_Failed_Tips1 = "Conexiune eşuată.";
var bt_deviceList_Conncect_Failed_Tips2 = "Vă rugăm să confirmaţi că funcţia Bluetooth a XXX este activată";
var bt_deviceList_Conncect_Success = "Conectat la aparatul Bluetooth.";
var bt_deviceList_Disconncect_Success = "Deconectat de la aparatul Bluetooth.";
var bt_deviceList_Disconnect = "Sigur că doriţi să deconectaţi de la XXX?";
var bt_tipsTitle = "Sfat";
var bt_bluetooth_Pairing_Title = "Asociere Bluetooth";
var bt_bluetooth_Input_Pin = "Introduceţi codul PIN:";
var bt_bluetooth_Output_Pin_Tip = "Introduceţi codul PIN XXXX cu tastatura";
var bt_bluetooth_Pin_Wrong_Tip = "PIN incorect";
var bt_bluetooth_Remove_Pair_Title = "Căutare";
var bt_bluetooth_Remove_Pair_Ask = "Uitaţi acest aparat?";
							
var audioDescriptionName = ["Descriere audio","Difuzor","Volum difuzor","Cască","Volum cască","volum AD","Dispozitiv Bluetooth","Volum dispozitiv Bluetooth","Amplificator","Difuzor"];
var audioDescriptionOptions = ["Oprit","Normal","Descriere audio"];
var volumeOffRemind = 'Setaţi XXX pe „Pornit” în meniul Setări.';
var switchSourceRemind   = " introdus. Doriţi să comutaţi acum?";
var footballModeName = "Mod sport";
var resetStadium = "Stadion";							

var atvSearchMenu = "ATV manual search";
var dtvSearchMenu = "DTV manual search";
var settingNoticeSourceName ="Sursă auto";

var smartTVOptions		= ["Portal Smart TV","HbbTV","Partajare şi vizualizare","Afişaj WiFi","Termeni și condiții",
    "Standby reţea","Resetare smart TV","Cookie policy","Politică de confidenţialitate","Ștergerea datelor"];
var supportOptions		= ["Diagnoză externă","Contactaţi-ne"];
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
							
var tvDoctor=["Diagnoză externă 2.0",
"Aplicaţia funcţionează numai pentru Smart TV-ul dvs., efectuând diagnosticări şi îmbunătăţind utilizarea produsului. Aplicaţia va colecta datele de operare ale TV-ului şi informaţiile de model, le va încărca pe server şi le va utiliza pentru a remedia problemele TV-ului. Nu se vor accesa date personale. Asiguraţi-vă că TV-ul este corect conectat la internet.",
"Diagnoză locală",
"După iniţierea diagnozei, respectaţi indicaţiile tehnicianului de asistenţă.",
"Diagnoză externă",
"Înaintea utilizării, verificaţi dacă tehnicianul de asistenţă este online.",
"Serie:",
"&nbsp;&nbsp;&nbsp;&nbsp;ID utilizator:",
"Conectare…",
"Diagnoză în curs. \nMenţineţi conexiunea la reţea. ",
"Nu se poate accesa internetul, \nverificaţi conexiunea la reţea.",
"Ieşire"
];
var contactUsOption = ["Contactaţi-ne",
    "Contactaţi-ne dacă aveţi probleme în utilizarea acestui dispozitiv.",
    "Contactaţi-ne",
    "Site web: vizitaţi",
    "Număr call center:","Informaţii produs","Nume Model:",
    "Versiune software:","","ID utilizator:","ID Proiect:",
    "Tip client:","Adresă MAC wireless:","Adresă MAC cu fir:","ESN Netflix:","Scanaţi informaţiile pe telefonul mobil.",
    " apoi selectaţi-vă ţara."];


//本地launcher的翻译，与服务器无关，只用于本地launcher
var homePageWords = ["Istoric", "Căutare"];//home页的翻译
var titlePageWords = ["Acasă", "Clipuri","TV","Aplicaţii"];//index的标题翻译
var videosPageWords = ["Cinema", "Sport","Muzică","Frecvent","Joc","Educaţie","Ştiri"];//videos页的内容翻译

//同时应用于本地和服务器
var statusPageWords = ["USB","Setări","WiFi","Cu fir"];//状态栏的翻译

//二级页面的翻译
var searchPageWords = ["Căutare", "Căutări frecvente:","Seriale, filme, persoane ..."];
var resultSearchPageWords = ["Rezultate despre", " ","Încercaţi alte cuvinte-cheie.","Ne pare rău, nu s-a găsit niciun clip despre "," "];
var historyPageWords = ["Istoric", 'Apăsaţi','pentru a şterge istoricul',"Şterge unu","Şterge toate","Ieri","Azi"," Nu aţi urmărit niciun clip încă.","S-a reuşit ştergerea istoricului vizionărilor!"];
var channelPageWords = ["Ne pare rău, nu s-a găsit niciun clip încă."];


//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9",
                       	   "Zoom-","0","Zoom+",
                       	   "Ieşire","0","",
                       	   "Listă","0","Text",
                       	   "Ghid","Intrare","Ieşire",
                       	   "Meniu","Subtitrare","Info",
                       	   "Stop",
                       	   "Info","Meniu","Ieşire",
                       	   "Ieşire"
                       	   ];	

//added for LA sports mode
var sportsModeInitReminds= ["Acest asistent este utilizat la configurarea unităţii USB pentru modul Sport. Selectaţi modul de configurare..",
						 "Selectaţi dimensiunile fişierului pentru modul Sport.",
						 "Se creează fişierul pentru modul Sport",
						 "Viteza unităţii USB este prea mică (< %f MB/sec) pentru funcţia de mod Sport!",
						 "Unitatea USB este pregătită pentru modul Sport. Vă recomandăm să o schimbaţi (pe viteza > %f MB/sec) pentru performanţe mai bune.",
						 "Unitatea USB este pregătită pentru modul Sport."];

var sportsModeExtra	= ["Doriţi să opriţi modul Sport şi să schimbaţi canalul?",
						"Doriţi să opriţi modul Sport şi să schimbaţi sursa pe dispozitivul conectat la intrarea SCART?",
						"Doriţi să opriţi modul Sport şi să schimbaţi sursa pe dispozitivul conectat la intrarea HDMI?",
						"Modul Sport nu este acceptat pe Canale bruiate.",
						"Doriţi să opriţi modul Sport şi să intraţi în EPG?",
						"Doriţi să opriţi modul Sport şi să intraţi în Media?",
						"Doriţi să opriţi modul Sport şi să schimbaţi sursa de intrare?",
						"Televizorul va închide modul Sport curent. Doriţi să ieşiţi?"];
var remoteControlNote = "- Telecomanda furnizată poate varia în funcție de modelul produsului";


var textArray = ["Volume","Channel","Source","Switch/Power","Guide","seconds to Power OFF"];
var guideArray = ["VOL-","VOL+","CH-","CH+","Pre","Next"];
var favChannelListRemind = ["Niciun canal favorit. Deschideți alte liste și utilizați „Green Key” pentru a adăuga canale favorite."];

var proxySetting = ["Setări proxy","Port"];
var powerOffShop = ["Vă recomandăm modul Magazin, acceptați?"];
var tcastTextPageWords = ["Foarte multe fișiere video, aplicații bogate","Telecomandă TV la îndemână","Conținut fabulos, distribuiți pe un ecran mare"];
var tcastOtherWords = ["SCANAȚI codul QR și descărcați T-CAST","Rețea conectată la TV","Nume TV","T-Cast"];
var hbbtvWords = ["Setare Hbbtv","HbbTV","Pliki cookies","Cookie-uri terți","ID dispozitiv","urmărire"];
var hbbtvTrackingWords = ["YES","NO","Nu mă interesează"];
var eStickerTipWords = ["Capacitatea de stocare este sub 400M, doriți să ștergeți clipurile din modul Demo pentru a obține mai mult spațiu?"];
var delEstickerVideoRemid = ["Clipul video a fost șters cu succes"];
var selectSatRemind = "Nu puteți selecta mai mult de 20 de sateliți!";
var cookiePolicyTitle = "Cookie Policy – Online Smart TV Services";
var cookiePolicyConditions = ["Company respects your privacy when using Smart TVs manufactured and Services provided by Company. Cookies are used by many websites and other Internet services and your Smart TV will accept, store and transmit cookies to ensure that these websites and services operate properly. Company also uses cookies when providing you Services. In this Cookie Policy Company describes which cookies are set on your Smart TV and how you can manage them.\nPlease note that all personal data that Company collects and/or processes through or with the help of cookies is subject to the Privacy Policy and you should read the Cookie Policy together with the Privacy Policy.\n1. What is a cookie?\nCookies are small text files that may be placed on your Smart TV. When a website or the red-button service of a TV station is accessed, the website or service may store a cookie in the Smart TV. During subsequent accesses, a cookie that is placed on your Smart TV will send information to the party that has placed the cookie. Cookies are extremely common and used on a number of websites and services. Each cookie will typically contain the name of the domain from which the cookie has come, the \"lifetime\" of the cookie, and a value (usually a unique number). For a more thorough explanation of what cookies are and how they operate, please visit www.allaboutcookies.org.\nCookies can be categorized into functional cookies and non-functional cookies. Functional cookies are cookies that are strictly required for the purpose of providing you the Smart TV services and for websites and other services to provide the right content to the Smart TV. Non-functional cookies are all other cookies.\nThis Cookie Policy relates to cookies that are placed by us, as well as advertising cookies that may be placed by third parties through our services on your Smart TV. This Cookie Policy does not relate to cookies that may be placed when you use the Smart TV services to access third party websites, services or applications. For these cookies we refer you to the respective cookie policies of such third parties. However, this Cookie Policy describes how to delete such cookies (see section 4 below).\n2. Which non-functional cookies do we use?\nAdvertising: In-video and display advertisements may be served to your Smart TV when using Smart TV services. These advertisements can be served by us or by third parties via, or as coordinated by, our advertising server, which performs a central coordinating role in relation to the serving of such advertisements. Our advertising server or a third party advertising server will set a cookie on your Smart TV. By means of this cookie an advertising server will register whether an advertisement has been served to your Smart TV or whether someone using your Smart TV has clicked on an advertisement. We use the information saved in such advertising cookie to remember which advertisements have been served on your Smart TV so we can make sure that not too many of the same advertisements are served on any particular Smart TV, and that we are able to settle our commercial arrangements with our advertising partners. We shall not use this information to serve targeted advertisements. Furthermore, third parties may use our advertising system to serve advertisements to your Smart TV and place cookies on your Smart TV when such advertisements are served. \nThese cookies contain, among others, information about the served advertisements, information on in which application or domain such advertisements are served, and your IP address. This is done to remember how often a particular advertisement is shown, and in order to prevent the same advertisement being shown too often. External third party advertisers that may place advertisements may also use cookies to track your activity over multiple websites, and to provide advertisements that correspond to your personal preferences.\n3. Third party websites\nWhen you visit websites or services of third parties via the Smart TV services of your Smart TV, it is possible that such websites or services place cookies on your Smart TV, and that such websites track and store your interactions on such websites. We do not request or encourage such activities and will not use such information. Please refer to the respective cookie and privacy policies of such websites and services for more information about such parties’ use of such cookies.\n4. Cookie deletion\nYour user interface of your Smart TV allows you to delete all cookies and other local browser storage from the Smart TV. It is highly advisable to remove all cookies and locally stored settings prior to selling or giving away your Smart TV.\n5. Contacting us\nIf you have any questions or comments regarding our Cookie Policy or our practice of using cookies you can send us an e-mail via FRsupport@tcl.com.\nVersion: 1.0\n"];
var privacyPolicyTitle = "Privacy Policy – Online Smart TV Services";
var privacyPolicyConditions = ["We respect your privacy when handling your personal data. This Privacy Policy describes the entity responsible for the collection, processing and use of personal data we collect from you in connection with the use of our Smart TV services (\"Services\"), what types of personal data we collect about you, what we do with it, and your rights in relation to our use of the personal data. \n1. Data controller\nThe collection, processing and use of the personal data collected from you when using the Services is conducted by Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, China (\"Company\"). Please note, however, that we are not responsible for all data processing activities set out below. We have nevertheless included a description of the respective activities in our Privacy Policy because this processing is connected with your use of the Smart TV.\n2. Data processing consent\nSome of the collection, processing and/or use of your personal data require your consent. \nIf you have consented to the use of your personal data for the purpose of improving the Services, your consent had the following wording:\n\"I consent to the collection, processing and use of my device start time, DTV channel list, favorite channels list, visit time, and viewed channels for the purposes of analyzing user habits to improve the Services and/or to analyze how many online users Company has per day/month/year and to the sharing of this information with TV stations.\"\nIf you have consented to the use of your personal data for advertisements that are tailored to your interests, your consent had the following wording:\n\"I consent to the collection, processing and use of my client type and country for the purpose of receiving appropriate advertisements.\"\nConsent is voluntary and you will still be able to use the Services if you do not consent. However, you may see advertisements and other content that is not tailored to your preferences. Irrespective of your consent Company reserves the right to collect, process and/or use the above data to the extent permitted by applicable law.\nYou may withdraw your consent to any of the above with effect for the future at any time. You may object to a use of your personal data for marketing, market or opinion research and to the tailoring of the Services to your needs. In order to withdraw your consent and/or to object, please change the privacy settings of your Smart TV accordingly.\n3. Personal data collected\nIrrespective of your consent, Company collects, processes, stores and uses the following data categories:\nDevice-ID: Your Smart TV stores a fixed unique number that enables us to identify and authenticate the Smart TV when you use the Services. This number is called the Device-ID. The Device-ID will be provided to our service partner to provide you the Services. We also provide the Device-ID to selected content partners for authentication purposes. These content partners use the Device-ID to authenticate your Smart TV for access to services provided by a content partner.\nIP address and MAC address: Your Smart TV will be assigned an IP address when accessing the Internet. This IP address will be transmitted to us and processed by us each time the Smart TV requests information or data from the Services. If your Smart TV is behind a router (e.g. in a local home network or local WLAN), we may collect and process the IP address of such router. The MAC address is a unique number assigned to each network interface of your Smart TV. The MAC address will also be collected and processed by us when the Smart TV requests information or data from the Services.\nService request data: Whenever you connect your Smart TV to the Internet and turn on the Smart TV, it will automatically connect to the Services, which are managed by our service partner. Your Smart TV will then be authenticated as being certified for access to the Services. For authentication purposes, the Services store one or more unique numeric identifiers related to your Smart TV. When connecting to the Service, the Smart TV will transmit the IP address it has been assigned and will transmit device specific information (Smart TV model, software version) to look whether software updates are available.\nService settings: As part of the regular functionality of the Services you can manually arrange the order in which apps are displayed by the Services. Our service partner will store your arrangement and other preferences you may set during using the Services. This information will be linked to the Device-ID.\nDevice specific information: The Smart TV stores several information about itself and its configuration. This information includes the Smart TV type, the version of the operation system of the Smart TV, its panel resolution, the project ID (i.e. information regarding configuration files), the user agent, browser name, browser version, and the language and country that have been configured in the Smart TV. This information will be used by us and will be provided to our service partner and content partners.\nAdvertising: The Services may serve advertisements. These advertisements are served by us, or by third parties using advertising inventory assigned by us. All advertisements are served by means of, or via, our advertising server, which fulfills a coordinating role for the serving of advertisements. Our advertising server or the third party advertising server may set a cookie on the Smart TV. Please refer to our Cookie Policy for more information about these cookies.\nService and Content Partner traffic: When you use the Services your Smart TV will request data from the Services via the Internet. As part of these requests your IP address as described above and the language and country that has been configured in your Smart TV will be transmitted to our service partner. Our service partner will process the respective data in accordance with its privacy policy.\nSecond screen usage: If you use our second screen application, the controls you activate on the application and the country and language settings, DTV channel list, favorite channels lists, schedule lists, Device-ID, current channel, protocol version and IP address of your Smart TV will be collected and processed by us on our servers. Our servers will then control your Smart TV as directed by you in the second screen app.\nHbbTV - \"Red Button\": TV stations (\"Stations\") may send additional information with their TV signal. If the Smart TV receives specific instructions in such additional information and if it is connected to the Internet, the Smart TV will download a picture or small page from the Station's website and display it together with the information to press the \"Red Button\" on your remote control if you want to use additional services provided by the Station. This happens each time you zap. Downloading the picture from the Station's website the Smart TV will transmit some personal data, i.e. the DTV channel list, current channel, event information table, TV time, IP address of your Smart TV and cookies stored on the Smart TV (if any). The Station is responsible for the collection, processing and/or use of this data. Moreover, if you use additional services offered by a Station through the Red Button, the Station may collect other personal data about you (e.g. which on-demand videos you watch, the news you read, etc.).\n4. Purposes for which we process and/or use your personal data\nWe process collected data for the following purposes:\n• Providing the Services: We use the IP address and MAC address, Device-ID, the version of the operation system of the Smart TV, client type of your Smart TV and its panel resolution, the project ID (i.e. information regarding configuration files), your DTV channel list, viewed channels, time zone, country and language settings to provide your Smart TV with access to the Services and services provided by content partners. Purposes include (but are not limited to) authentication, providing location based services to you (e.g. weather forecasts); abuse handling, management of security incidents, monitoring of availability of the Services, and providing backup services of user preferences.\n• Authentication: We use the Device-ID and MAC address for authentication purposes.\n• Software updates: Each time your Smart TV is powered on, it will provide us with the IP address, Device-ID, software version, client type of your Smart TV, project ID (i.e. configuration files), user ID, serial number to offer you and provide you with appropriate software updates. \n• Improving the Services: We use aggregated and anonymized usage data (i.e. data about your interaction with the Services) to improve the user experience of the Services.\n• Serving advertisements: We use the information in advertising cookies to allow the system to log which advertisements have been shown on your Smart TV in order to make sure that you do not receive too many similar advertisements, and we are able to settle our commercial arrangements with our advertising partners. External advertisers that serve advertisements on the Services or the content partner websites after coordination by our advertising server, may also use cookies to track you over multiple websites, and to serve advertisements that reflect your personal preferences.\n• Optimizing advertisements: We use data related to advertising views and clicks on advertisements to optimize the advertising experience of consumers in the Service.\n• Discounts: We provide the Device-ID to selected content partners to enable these partners to identify to what extent they can provide you with free access to Video on Demand titles in their collection.\n• Law enforcement: We may be required to provide data to competent law enforcement authorities or courts of justice. If we do so, we will only do so subject to a binding legal instrument like a warrant or a judicial order, which requires us to cooperate with the relevant authorities.\nUse of the Services is possible by using pseudonyms, unless specific services require that you provide your name and/or email address.\n5. Categories of recipients\nCompany shares your personal data collected during your use of the Services only with the following third parties:\n• With third party providers of Smart TV services if you request such services (e.g. if you start the Netflix application on your Smart TV we may share your IP address, MAC address, software version and TV model name with Netflix).\n• With third party content partners if you request certain content provided by such content partners (e.g. in order to provide you with the GoLive IP TV service, we may share your TV client type, IP address and language settings with the legal entity providing the GoLive service).\n• To the extent you have consented to the sharing of specific personal data with third parties above, Company will share your personal data with such third parties.\n• With outsourcing service providers as data processors assisting Company with providing the Services.\nCompany shares your personal data with other third parties only if Company is obligated to do so on the basis of legal requirements (e.g. to courts or criminal prosecution authorities), you have consented to the respective sharing or the sharing is otherwise lawful under applicable law.\n6. Countries in which your data will be processed\nCompany and/or some of the recipients of your personal data listed above may be located outside of the European Economic Area (i.e. in the following countries: Peoples Republic of China, United States of America). Therefore, your personal data may be processed in countries which are not recognized as providing an adequate level of protection of personal data in accordance with Directive 95/46/EC of the European Parliament and of the Council of 24 October 1995 on the protection of individuals with regard to the processing of personal data and on the free movement of such data.\n7. Your rights\nYou may contact Company in order to receive information about your personal data processed by Company and/or to exercise your statutory rights regarding access, rectification, deletion and blocking of your personal data; and/or to object the processing of your personal data for purposes of marketing and/or market or opinion research.\n8. Changes to the Privacy Policy\nTo improve our Services we may require amendments to this Privacy Policy – e.g. by the implementation of new technologies or the introduction of new services. We reserve the right to change or supplement this Privacy Policy at any time.\n9. Contact information\nIf you have any questions about the Privacy Policy or would like to complain about our handling of your personal data, please contact us by using one of the following contact details:\nEmail: FRsupport@tcl.com\nVersion: 1.0\n"];
var privacyPolicyTerms = [
    "Activați serviciul Smart TV",
    "Îmi ofer consimțământul în scopul colectării, procesării și utilizării timpului de pornire al televizorului, listei de canale DTV, listei de canale favorite, timpului de vizitare și a canalelor vizualizate în scopul analizării obiceiurilor utilizatorului pentru a îmbunătăți serviciile și/sau să analizăm numărul de utilizatori online ai TCL per zi/lună/an și pentru partajarea acestei informații cu stațiile TV.",
    "Activați serviciul de recomandare.",
    "Activați aplicarea celui de-al doilea ecran pentru dispozitive mobile",
    "Activați actualizări automate de software.",
    "Activare serviciu FreeviewPlay"
];
var privacyPolicyTips = [
    "Toate celelalte servicii Smart TV vor fi dezactivate.",
    "Serviciu HbbTV furnizat de canale TV când este utilizat tunerul încorporat vor fi dezactivate.",
    "Serviciul de recomandare programe TV și conținut va fi dezactivat.",
    "Aplicația ecran secundar va fi dezactivată.",
    "Televizorul nu va verifica automat dacă există actualizări software și funcții noi.",
    "Conținutul FreeviewPlay va fi dezactivat."
];
var privacyPolicyRemind = "Bifați caseta de validare corespunzătoare din Setări.";
var set = "Setare";
var copyShopDemoTips = ["Conectat la USB, copiați videoclipul pe în memoria flash?","Copiere videoclip în memoria flash","Videoclipul a fost copiat cu succes!","Eroare copiere videoclip!"];
var dataDeletionWords = ["Ștergeți datele serviciului Smart TV de pe serverele backend.","Observații: Datele legate de utilizarea de către dvs. a Smart TV vor fi șterse într-o lună după ce bifați această opțiune. Rețineți că ștergerea nu afectează datele locale stocate pe televizor.","Nu mai raporta date către serverul Smart TV.","Observații:  Datele dvs. în legătură cu utilizarea serviciilor Smart TV nu vor mai fi transferate pe server după ce bifați acest element. Televizorul nu va mai primi servicii recomandate.","Dacă doriți să aflați mai multe, vă rugăm să vizitați site-ul www.tcl.eu"];
var miracastWords = ["Conexiune wireless","Oglindire telefon Android pe televizor","Faceți clic pentru conectare","Această funcție este disponibilă doar pe telefonul Android"];
var miracastTips = ["Pași de conectare","Deschidere setări de sistem","Mai multe moduri de conectare \n / Alți conectori wireless","Alegere afișaj wireless","Faceți clic pentru conectare \n așteptare găsire"];
var termsAndConditions = ["\nThe contents and services (collectively the \"Licensed Application\") made available to you through this TV set (this \"Device\") are licensed, not sold, to you for use only under these terms and conditions. The providers of the Licensed Application (each an \"Application Provider\") reserve all rights not expressly granted to you.\n\n1.Scope of License\n\nThe license granted to you for a Licensed Application by the relevant Application Provider is limited to a non-transferable license to use the Licensed Application on the Device that you own or control. You may not distribute or make the Licensed Application available over a network where it could be used by multiple devices at the same time. You may not rent, lease, lend, sell, redistribute or sublicense the Licensed Application. \n\nAll Licensed Applications and all contents included therein that are accessible through this Device belong to the Application Provider and are protected by applicable intellectual property laws. Unless otherwise permitted by applicable law, you may not modify, copy, decompile, reverse engineer, disassemble, republish, upload, post, transmit, translate, attempt to derive the source code of, create derivative works of, or otherwise exploit any Licensed Application or any updates or any part thereof. If you breach this restriction, you may be subject to prosecution and damage claims. The terms of the license will govern any upgrades provided by the Application Provider that replace and/or supplement the original Licensed Application, unless such upgrade is accompanied by a separate license in which case the terms of that license will govern. You shall be solely responsible for any and all costs (if any) for the upgrading of the Licensed Application.\n\n2.Third-party Materials\n\nThe Licensed Application may enable access to Application Provider’s and third party services and web sites (collectively the \"Services\"). By using any of the Services, you may encounter contents that may be deemed offensive, indecent, or objectionable, which contents may or may not be identified as having explicit language, and that the results of any search or entering of a particular URL may automatically and unintentionally generate links or references to objectionable material. Nevertheless, the manufacturer of this Device (the \"Manufacturer\") and the Application Provider shall not have any liability to you for contents that may be found to be offensive, indecent, or objectionable. \n\nThe Manufacturer shall not be responsible for examining or evaluating the content, accuracy, completeness, timeliness, validity, copyright compliance, legality, quality or any other aspect of such Services. The Manufacturer does not warrant or endorse and shall not assume and shall not have any liability or responsibility to you or any other person for any of the Services. \n\nThe Services may contain proprietary content, information and material (collectively \"Third-party Materials\") that are protected by applicable intellectual property and other laws, and you shall not use such Third-party Materials in any way whatsoever except for permitted use of the Services. Unless otherwise permitted by applicable law, you shall not reproduce, modify, rent, lease, loan, sell, distribute the Third-party Materials or create derivative works thereof in any manner, and you shall not exploit the Services in any unauthorized way whatsoever. You shall not use the Services in any manner to harass, abuse, stalk, threaten, defame or otherwise infringe or violate the rights of any other party, and the Manufacturer shall not in any way be responsible for any such use by you, nor for any harassing, threatening, defamatory, offensive or illegal messages or transmissions that you may receive as a result of using any of the Services. \n\n3.No Warranty\n\nAll Licensed Applications and Services are provided \"as is\" and \"as available\" without warranty of any kind, either express or implied. The Manufacturer expressly disclaims all warranties and conditions with respect to the Licensed Applications and the Services, either express or implied, including but not limited to, warranties of merchantability, of satisfactory quality, of fitness for a particular purpose, of accuracy, of quiet enjoyment, and of non-infringement of third party rights. The Manufacturer does not guarantee the accuracy, validity, timeliness, legality, or completeness of any Licensed Application or Service made available through this Device and does not warrant that the Device, the Licensed Applications or the Services will meet your requirements, or that operation of the Licensed Applications or the Services will be uninterrupted or error-free, or that defects in the Licensed Application or Services will be corrected. Should the Licensed Application or Services prove to be defective, you shall assume the entire cost of all necessary servicing, repair or correction.\n\nThe Licensed Applications and Services may be changed, suspended, removed, terminated or interrupted, or access may be disabled at any time, without notice, and the Manufacturer makes no representation or warranty that any content or service included in the Licensed Applications and Services will remain available for any period of time. Such contents and services are transmitted by third parties by means of networks and transmission facilities over which the Manufacturer has no control. Without limiting the generality of the foregoing, the Manufacturer expressly disclaims any responsibility or liability for any change, interruption, disabling, removal of or suspension of any content or service made available through this Device. The Application Provider and other providers of the Services reserve the right to change, suspend, remove, or disable access to any Licensed Application or Services at any time without notice. The Manufacturer may also impose limits on the use of or access to certain Licensed Applications or Services, in any case and without notice or liability.\n\nThe Manufacturer does not provide customer service related to the Licensed Applications and the Services. Any question or request for service relating to the Licensed Applications and the Services should be made directly to the respective provider.\n\n4.Collection and Use of Information\n\nThe Manufacturer, the Application Providers and the providers of the Services may collect and use technical data and related information, including but not limited to technical information about this Device, system and application software, and peripherals, to facilitate the provision of software updates, product support and other services to you (if any) related to the Device and the Licensed Application. The Manufacturer, the Application Providers and the providers of the Services may use such information, as long as it is in a form that does not personally identify you, to improve its products or to provide services or technologies to you. For more information on the collection and use of information, please visit our privacy policy: http://www.tcl.eu/en/.\n\n5.Unavailability of Certain Features\n\nDue to restrictions of Application Provider, certain features, applications, and services may not be available on this Device (including its peripheral devices) or in all territories. Some features on this Device may also require additional peripheral devices or membership fees that are sold separately.\n\n6.Limitation of Liabilities\n\nTo the extent not prohibited by applicable law, under no circumstances, including negligence, shall the Manufacturer be liable, whether in contract or tort, for any direct, indirect, incidental, special or consequential damages, attorney fees, expenses, or any other damages arising out of, or in connection with, any information contained in, or as a result of the use of the Device, any Licensed Application or any Service by you or any third party, even if advised of the possibility of such damages.\n\nThe Manufacturer shall only be liable for intent and gross negligence."];
var privacyNotice = ["\nWe respect your privacy when handling your personal data. This Privacy Notice describes the entity responsible for the processing of personal data we collect from you in connection with the use of our Smart TV services (\"Services\"), what types of personal data we collect about you, what we do with it, and your rights in relation to our use of the personal data. \n\n1.Data controller and representative in the European Union\n\nThe collection, processing and use of the personal data collected from you when using the Services is conducted by Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, China (\"Company\"). Our contact details as well as the contact details of our representative in the European Union are provided under Section 12 below. Please note, however, that we are not responsible for all data processing activities set out below. We have nevertheless included a description of the respective activities in our Privacy Notice because this processing is connected with your use of the Smart TV.\n\n2.Data processing consent\n\nSome of the data processing activities that we conduct require your consent, e.g. the use of your personal data for the purpose of improving the Services.\n\nConsent is voluntary and you will still be able to use the Services if you do not consent. However, you may see content that is not tailored to your preferences. Irrespective of your consent we reserve the right to process your personal data to the extent permitted by applicable law.\n\nYou may withdraw your consent at any time. The withdrawal of consent shall not affect the lawfulness of processing based on consent before its withdrawal. In order to withdraw your consent and/or to object (c.f. Section 10 and Appendix Your Rights below for your rights to object), please change the privacy settings of your Smart TV accordingly.\n\n3.Specific categories of personal data\n\nWe process in particular the following data categories:\n\nDevice-ID: Your Smart TV stores a fixed unique number that enables us to identify and authenticate the Smart TV when you use the Services. This number is called the Device-ID. \n\nIP address and MAC address: Your Smart TV will be assigned an IP address when accessing the Internet. If your Smart TV is behind a router (e.g. in a local home network or local WLAN), we may process the IP address of such router. The MAC address is a unique number assigned to each network interface of your Smart TV. \n\nDevice specific information: The Smart TV stores several information about itself and its configuration. This information includes the Smart TV type, the version of the operation system of the Smart TV, its panel resolution, the project ID (i.e. information regarding configuration files), the user agent, browser name, browser version, and the language and country that have been configured in the Smart TV. \n\nThese information will be used by us and will be provided to our service partner and content partners for the purposes described below.\n\n4.Purposes for which we process and/or use your personal data and legal bases\n\nThe purposes for which we process your personal data and the respective legal bases are described below. To the extent that contractual purposes are mentioned below as legal basis, we cannot provide you with the Services if you do not provide us with the respective data. To the extent that your consent is mentioned as legal basis, you are free to provide or withhold your consent. If you do not provide your consent, we will not process your personal data for the respective purpose.\n\n•Providing the Services: We use the IP address and MAC address, Device-ID, the version of the operation system of the Smart TV, client type of your Smart TV and its panel resolution, the project ID (i.e. information regarding configuration files), your DTV channel list, viewed channels, time zone, country and language settings to provide your Smart TV with access to the Services and services provided by content partners. Purposes include (but are not limited to) providing location based services to you (e.g. weather forecasts); abuse handling, management of security incidents, monitoring of availability of the Services, and providing backup services of user preferences.\n\nWhen you use the Services your Smart TV will request data from the Services via the Internet. As part of these requests your IP address as described above and the language and country that has been configured in your Smart TV will be transmitted to our service partner. Our service partner will process the respective data in accordance with its privacy notice.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) General Data Protection Regulation (“GDPR”).\n\n•Service Settings: As part of the regular functionality of the Services you can manually arrange the order in which apps are displayed by the Services. Our service partner will store your arrangement and other preferences you may set during use of the Services. This information will be linked to the Device-ID.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•Authentication: Whenever you connect your Smart TV to the Internet and turn on the Smart TV, it will automatically connect to the Services, which are managed by our service partner. Your Smart TV will then be authenticated as being certified for access to the Services. For authentication purposes, the Services store one or more unique numeric identifiers related to your Smart TV. We use the Device-ID and MAC address for authentication purposes. We also provide the Device-ID to selected content partners for authentication purposes. These content partners use the Device-ID to authenticate your Smart TV for access to services provided by a content partner.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•Remote diagnostics: As part of the Services, we provide you with remote diagnostic services. Therefore, we process the Device-ID, device number, serial number, MAC address, and error logs, error codes and error descriptions which are provided by the faulty module (application, middleware system).\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•After-sales service: Pursuant to applicable law you may have warranty or similar rights to obtain after-sales services. TCL Europe, 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, France is responsible for handling warranty claims and other requests for after-sales services and the processing of your personal data associated therewith. I.e., for the purposes of after sales services, TCL Europe acts as data controller and we are not responsible for the respective processing of your personal data.\n\nWhen you ask for our after-sales related service, your name, e-mail address, phone number, service request and postal address included in the invoice may be required for the purpose of providing you with the after-sales service. The information may also be collected through the after-sales partners of our resellers or authorized service providers if you call them for service. You can contact TCL Europe under the contact details stated in Section 12 below for more information about the protection of personal data in connection with after-sales services.\n\nThe legal basis for the respective processing is the obligation to comply with legal obligations pursuant to Article 6 (1) c) GDPR.\n\n•T-Launcher: T-Launcher is the main page for the use of the Smart TV on Linux operating system (please see below for the use of the android operating system) and allows you to select certain content.\n\nThe legal basis for the processing of your personal data that is necessary for your use of the T-Launcher are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\nSubject to your prior consent, we will also monitor the use of the T-Launcher, i.e.:\n\n-	When you start to use T-Launcher, we will record the time of entering and exiting T-Launcher.\n-	When you start to play a video of T-Launcher, we will record the name and the duration time of the video (not applicable to Netflix, YouTube or any other service provided by a third party).\n-	When you enter or exit a page, we will record the staying time on the page.\n-	When you move your cursor from one location to another, or enter an application, we will record this event.\n-	When you install, remove or update applications, we will record these events, including the name of applications.\n\nWe collect these information mainly for big data analysis to improve products and to provide better content services to users.\n\nThe legal basis for the processing of your personal data in connection with the monitoring of your use of the T-Launcher is your consent pursuant to Article 6 (1) a) GDPR.\n\nIf you have bought an Android TV and use Google’s android operating system, your personal data will be processed by Google and we are not responsible for such processing. Please refer to Google’s privacy notice for information about the related processing of your data and your respective rights.\n\n•T-Cast: T-Cast allows you to control your TV using your phone and to share videos, music and pictures stored in your smart phone on the TV. T-Cast also allows you to mirror your smartphone on your TV.\n\nThe download and use of the app is voluntary. If you download and use the app, we will process the MAC address to calculate how many T–Cast versions have been used in the market. This is required to be able to offer you this service. If you use our second screen functionality, the controls you activate on the application and the country and language settings, DTV channel list, favorite channels lists, schedule lists, Device-ID, current channel, protocol version and IP address of your Smart TV will be collected and processed by us on our servers. Our servers will then control your Smart TV as directed by you in the app.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•Software updates: Software updates are part of the Services. Thus, each time your Smart TV is powered on, it will provide us with the IP address, Device-ID, device number, software version, client type of your Smart TV, project ID (i.e. configuration files), user ID, and serial number to look whether software updates are available and to offer you and provide you with appropriate software updates.\n\nThe legal basis for the respective processing of your personal data are contractual purposes pursuant to Article 6 (1) b) GDPR.\n\n•Law enforcement: We may be required to provide data to competent law enforcement authorities or courts of justice. If we do so, we will only do so subject to a binding legal instrument like a warrant or a judicial order, which requires us to cooperate with the relevant authorities.\n\nThe legal basis for the respective processing is our obligation to comply with legal obligations pursuant to Article 6 (1) c) GDPR.\n\nUse of the Services is possible by using pseudonyms, unless specific services require that you provide your name and/or email address.\n\n5.Privacy and safety of children under 16\n\nWe understand the importance of taking extra precautions to protect the privacy and safety of children using our Services. Children under the age of 16, or equivalent minimum age in the relevant jurisdiction, are not permitted to provide their personal information via the TV set or when they call for after-sales service, unless their parent provided verifiable consent.\n\nAs we never collect birth dates of users, we can't identify the age of users. But if we learn that we have collected the personal information of a child under 16, or equivalent minimum age depending on the jurisdiction, outside of the above circumstances we will take steps to delete the information as soon as possible.\n\n6.Third party apps\n\nYour Smart TV allows the use of apps provided by third parties, such as Netflix, YouTube or HbbTV (red button service provided by TV broadcasters). You may download the apps from the app store or activate third party apps that are already pre-installed on your device. Third party apps that are pre-installed on your device do not collect personal data without your prior authorization. E.g. Netflix is already pre-installed on the device but only collects data when you log into your Netflix account. HbbTV only collects data when you consent to the collection by pressing the designated button on your remote control.\n\nIf you enable a third party app, personal data about you may be processed by the app provider. We are not responsible for such processing; please refer to the privacy notice of the third party app for information about the related processing of your data and your respective rights.\n\n7.Categories of recipients\n\nWe share your personal data collected during your use of the Services only with third party content partners if you request certain content provided by such content partners or with service providers as data processors assisting us with the provision of the Services.\n\nWe share your personal data with other third parties only if we are obligated to do so on the basis of legal requirements (e.g. to courts or criminal prosecution authorities), if you have consented to the respective sharing or if the sharing is otherwise lawful under applicable law.\n\n8.Countries in which your data will be processed\n\nWe and/or some of the recipients of your personal data listed above may be located outside of the European Economic Area (e.g. in the Peoples Republic of China, or United States of America). Therefore, your personal data may be processed in countries where the data protection laws may provide a different level of protection compared to the laws in your jurisdiction and which are not recognized as providing an adequate level of protection of personal data in accordance with the GDPR. The countries which provide an adequate level of data protection from a European data protection law perspective include Andorra, Argentina, Canada, Switzerland, Faeroe Islands, Guernsey, the State of Israel, Isle of Man, Jersey, New Zealand and the Eastern Republic of Uruguay. Recipients in the USA may partially be certified under the EU-U.S. Privacy Shield and thereby recognized as providing an adequate level of data protection from an European data protection law perspective. \n\nWhere required, we will implement appropriate safeguards with regard to data transfers to recipients outside of the European Union that do not provide an adequate level of data protection. A copy of the respective measure may be requested by contacting us as stated under Section 12. below.\n\n9.Storage Period\n\nYour personal data will be retained as long as necessary to provide you with the Services. For most data this generally means that we will retain your data for one month. For the purpose of remote diagnostics and after-sales services we may retain your data up to ten years. When we no longer need to use your personal data to comply with contractual or statutory obligations, we will remove it from our systems and records and/or take steps to properly anonymize it so that you can no longer be identified from it.\n\n10.Your rights\n\nPursuant to applicable data protection law you may have the right to: request access to your personal data, request rectification of your personal data; request erasure of your personal data, request restriction of processing of your personal data; request data portability, and object to the processing of your personal data. Please note that these aforementioned rights might be limited under the applicable national data protection law. For further information on these rights please refer to the Appendix Your Rights below.\n\nYou also have the right to lodge a complaint with the competent data protection supervisory authority.\n\nTo exercise your rights please contact us as stated in Section 12 below.\n\n11.Changes to the Privacy Notice\n\nTo improve our Services we may require amendments to this Privacy Notice – e.g. by the implementation of new technologies or the introduction of new services. We reserve the right to change or supplement this Privacy Notice at any time.\n\n12.Contact information and representative in the European Union\n\nIf you have any questions about the Privacy Notice or would like to complain about our handling of your personal data, please contact us by using the following contact details:\n\nContact form: www.tcl.eu/privacy/support\n\nOur representative in the European Union is: TCL Europe having offices at 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, France. You may contact TCL Europe via the contact form stated above.\n\nVersion: 2.0\n\nAppendix Your Rights\n\na.Right of access: You may have the right to obtain from us confirmation as to whether or not personal data concerning you is processed, and, where that is the case, to request access to the personal data. The access information includes - inter alia - the purposes of the processing, the categories of personal data concerned, and the recipients or categories of recipients to whom the personal data have been or will be disclosed. However, this is not an absolute right and the interests of other individuals may restrict your right of access.\n\nYou may have the right to obtain a copy of the personal data undergoing processing. For further copies requested by you, we may charge a reasonable fee based on administrative costs. \n\nb.Right to rectification: You may have the right to obtain from us the rectification of inaccurate personal data concerning you. Depending on the purposes of the processing, you may have the right to have incomplete personal data completed, including by means of providing a supplementary statement.\n\nc.Right to erasure (\"right to be forgotten\"): Under certain circumstances, you may have the right to obtain from us the erasure of personal data concerning you and we may be obligated to erase such personal data. \n\nd.Right to restriction of processing: Under certain circumstances, you may have the right to require the restriction of processing of personal data concerning you. In this case, the respective data will be marked and may only be processed by us for certain purposes.\n\ne.Right to data portability: Under certain circumstances, you may have the right to receive the personal data concerning you, which you have provided to us, in a structured, commonly used and machine-readable format and you may have the right to transmit those data to another entity without hindrance from us.\n\nf.Right to object:\n\nUnder certain circumstances, you may have the right to object, on grounds relating to your particular situation, or where personal data are processed for direct marketing purposes at any time to the processing of your personal data by us and we can be required to no longer process your personal data.\n\nMoreover, if your personal data is processed for direct marketing purposes, you have the right to object at any time to the processing of personal data concerning you for such marketing, which includes profiling to the extent that it is related to such direct marketing. In this case your personal data will no longer be processed for such purposes by us."];
var cookieNotice = ["\nWe respect your privacy when using Smart TVs manufactured and Services provided by us. Cookies are used by many websites and other internet services and your Smart TV will accept, store and transmit cookies to ensure that these websites and services operate properly. \n\nWe do not use cookies when providing the Services to you. However, third parties (e.g. third party app providers) may use cookies when you use the Smart TV to access their services. This Cookie Notice can only provide limited information concerning cookies that may be placed by third parties. For information on the actual cookies used by third parties and their functionalities we refer you to the respective cookie notices of such third parties. However, in this Cookie Notice we provide a general description which cookies can be set on your Smart TV and how you can manage them.\n\n1.What is a cookie?\n\nCookies are small text files that may be placed on your Smart TV. When a website or the red-button service of a TV station is accessed, the website or service may store a cookie in the Smart TV. During subsequent accesses, a cookie that is placed on your Smart TV will send information to the party that has placed the cookie. Cookies are extremely common and used on a number of websites and services. Each cookie will typically contain the name of the domain from which the cookie has come, the \"lifetime\" of the cookie, and a value (usually a unique number). For a more thorough explanation of what cookies are and how they operate, please visit www.allaboutcookies.org.\n\nCookies can be categorized into functional cookies and non-functional cookies. Functional cookies are cookies that are strictly required for the purpose of providing you services. Non-functional cookies are all other cookies.\n\n2.Third party websites\n\nWhen you visit websites or services of third parties via the Services of your Smart TV, it is possible that such websites or services place cookies on your Smart TV, and that such websites track and store your interactions on such websites. We do not request or encourage such activities and will not use such information. Please refer to the respective cookie and privacy notices of such websites and services for more information about such parties’ use of such cookies.\n\n3.Cookie deletion\n\nYour user interface of your Smart TV allows you to delete all cookies and other local browser storage from the Smart TV. It is highly advisable to remove all cookies and locally stored settings prior to selling or giving away your Smart TV.\n\nVersion: 2.0"];
var privacyPolicy = ["Bifați casetele de mai jos dacă doriți să utilizați serviciile Smart TV și serviciile conexe. Utilizarea acestor servicii necesită prelucrarea datelor dvs. cu caracter personal după cum este descris în Notificarea noastră de confidențialitate: http://www.tcl.eu/en/","Activați serviciul Smart TV, stocarea setărilor serviciului și autentificarea automată a Smart TV. Dacă debifați această opțiune, veți avea doar TV standard și HDMI.","Activați actualizări automate de software. Bifați această casetă pentru a menține produsul la zi cu cele mai recente actualizări software și cu cea mai bună performanță.","(Actualizările software sunt importante pentru funcționarea corectă a televizorului, deoarece oferă funcții noi, stabilitate și securitate. Astfel, vă recomandăm să bifați caseta.)","Vă rugăm să bifați caseta de mai jos dacă sunteți de acord cu procesarea de către noi a datelor dvs. personale, de asemenea, pentru următorul scop listat. Pentru informații suplimentare despre modul în care procesăm datele dvs. personale, consultați Notificarea noastră privind confidențialitatea: http://www.tcl.eu/en/","Sunt de acord cu prelucrarea datelor mele cu caracter personal (de exemplu, ora de intrare și ieșire din T-Launcher) în scopul îmbunătățirii produselor TCL și furnizarea de servicii cu conținut îmbunătățit pe Smart TV-uri."];
var termsFirTitle = ["Termeni şi condiţii","Aviz de confidențialitate","Aviz privind modulele cookie"];
var termsSecTitle = ["Vă rugăm să citiți termenii și condițiile și să vă dați acordul.","Citiți avizul de confidențialitate și confirmați.","Citiți avizul privind modulele cookie și confirmați."];
var tickall = "Bifare toate";
var tickremindWords = "Bifați casetele de selectare sau nu veți putea beneficia de Serviciul Smart TV.";