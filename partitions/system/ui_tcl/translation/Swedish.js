
var all_country 	= ["Österrike","Österrike","Belgien","Bulgarien","Kroatien","Tjeckien","Danmark","Finland","Frankrike","Tyskland",
						"Grekland","Ungern","Italien","Luxemburg","Nederländerna","Norge","Polen","Portugal","Rumänien","Ryssland",
						"Serbien","Slovenien","Spanien","Sverige","Schweiz","Storbritannien","Nya Zeeland"," "/*Arab*/,"Estland"," "/*Hebrew*/,
						"Lettland","Slovakien","Turkiet","Irland","Japan","Filippinerna","Thailand","Maldives","Uruguay","Peru",
    					"Argentina","Chile","Venezuela","Ecuador","Costa Rica","Paraguay","Bolivia","Belize","Nicaragua","Guatemala",
						"Kina","Taiwan","Brazil","Canada","Mexico","United States","South Korea","Romania","Vietnam"/*新添加的，底层结构体中没有*/,"Ukraina"/*新添加的，底层结构体中没有*/,
    					"Iran","Iraq"," ","Kazakhstan","Uzbekistan"," ","Kyrgyzstan","Algeria","Egypt","Tunisia",
    					"Tanzania","Kenya","Pakistan","Indonesia","Kuwait","Saudi Arabia","Qatar","Israel","Lebanon","bahrain",
    					"Angola","Congo","India","Turkmenistan","Colombia","Mongolia","Bangladesh","Nepal","Sri Lanka","North Korea",
						"Moldavien","Polynesia","EI Salvador"," ","Fiji","Liberia","Jordan","Myanmar","Ghana","Georgia",
    					"Armenia","Oman","yemen","Syria","Palestine","Afghanistan","Morocco","benin","IvoryCoast","Nigeria",
    					"Sudan","Ethiopia","Zambia"," ","South Africa","mozambique","Libya","Albanien","Belarus","Iceland",
						"Litauen","Mauritius","Dubai","UAE","Tajikistan","Bengal","Bosnien Hercegovina","Cypern","Kosovo","Makedonien",
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
				
var all_language 	= ["Tjeckiska","*","Danska","*","*","Tyska","Engelska","Spanska","Grekiska","Franska",
						"Kroatiska","*","Italienska","Ungerska","Holländska","Norska","Polska","Portugisiska","Ryska","Rumänska",
						"Slovenska","Serbiska","Finska","Svenska","Bulgariska","Slovakiska","Chinese","*","Gaeliska","*",
						"Walesiska","Arabiska","Irländska","Lettiska","*","Turkiska","Estländska","Holländska"/*Netherlands*/,"Koreanska","*",
						"hindi","*","*","Mandarin","Kant","maori","Originalljud"/*Qaa*/,"Ej definierat"/*Undetermined*/,"*","Okänt",
						"Ej definierat","*","*","*","*","*","*","*","*","*",
						"*","*","*","Albanska","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Baskiska","*","*",
						"*","*","*","*","*","*","*","Bosniska","*","*",
						"*","*","*","*","Белоруски","*","*","Katalanska","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galiciska","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Isländska","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","japansk","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Litauiska",
						"*","*","*","*","*","*","*","Makedonska","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romantik","*","*","*","*",
						"*","*","*","Samiska","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Text-TV",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","Ukrainska","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional","*"];
var offOn			= ["Av","På"];
var okCancel		= ["OK","Avbryt"];
var yesNo			= ["JA","NEJ"];
var level			= ["Av","Låg","Hög","Mellan"];
var manualAuto		= ["Manuell","Auto"];
var homeShop		= ["Hem","Butik"];
var picPreset		= ["Standard","Dynamisk","Naturlig","Bio","Användare"];
var picColorTemp	= ["Kall","Normal","Varm","Användare"];
var pic3dNavig		= ["Manuell","Auto","Semi-auto"];
var _3dOptions		= ["3D Läge","3D-till-2D","V-H Brytare","Djupskärpa"];
var pic3DMode       = ["Av","2D-till-3D","Sida vid Sida","Topp och botten","Linje intersenkvensera"];
var picEcoOptions	= ["Energisparande","Ljussensor","Lokal dimming","Mixa  dimning"];
var picGeoOptions	= ["Geometri","H. position","V. position","Klocka","Fas"];//Geometry 无翻译
var picAdWhiteBal	= ["R ökning","G ökning","B ökning","R förskjutning","G förskjutning","B förskjutning"];
var souOptions		= ["Förinställning ljud","Balans","Ljudfördröjning","SRS TSHD","Auto. volymkontroll",
						"SPDIF typ","SPDIF fördröjning","TV placering","Ljudspråk","Ljudkanal",
						"Ljudbeskrivning","Basförstärkare","Dolby Digital Plus"];
var souSpdifType	= ["Auto"/*Dolby*/,"PCM","Av"];
var colorSpace      = ["Auto","Ursprunglig","Användare"];
var souPresetPara	= ["100Hz","500Hz","1.5KHz","5KHz","10KHz"];
var chOptions		= ["Kanalsökning","Kanallista","EPG","Kanalsorterare","Kanaldiagnostik",
						"tildsförskjut.","Undertexter","Text-TV","Typ av kanallista"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Signalstyrka","Signalkvalitet","Frekvens (kHz)","Service-ID","Nätverks-ID","Nätverksnamn"];
var chScanOptions	= ["Land/Region","Mottagarläge","Kanalsökning","Autouppdatering","Analog manuell sökn",
						["Manuell kabelskanning","Manuell antennskanning","Manuell inställning för satellit "],"Installation satellitantenn","Favoritnätverk valt","Rensa kanallistan","LCN"];
var favNetDes		= "Välj ditt favoritnätverk";
var tuner			= ["Kabel","Antenn","Satellite"];//Satelite 无翻译
var passError		= "Lösenord felaktigt.\nAnge igen!";
var chType			= ["Analoga kanaler: ","Digitala kanaler: "];
var chScanStatus	= ["Status: Skannar","Status: Sökning färdig","Status: Sökning avbruten","Status: Sökningsfel"];
var chScanPara		= ["Frekvens (kHz)","Modulering","Symbolhastighet (Ksym/s)","Nätverks-ID","System",
						"Fininställning","Signalstyrka","Signalkvalitet","Skanningsläge","Kanal id"];
var chScanParaMHZ      = ["Frekvens (MHz)"];
var chAtvManSys		= ["VÄSTEUROPA","ÖSTEUROPA","England","Frankrike"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Auto"];
var chCleanDes		= "Vill du rensa kanallistan?";
var chDeletDes		= "Vill du radera kanalen?";
var chOperator		= ["Ziggo","UPC","Övriga"];
var chScanType		= ["Digital & Analog","Digital","Analog"];
var chScanMode		= ["Fullt","Avancerad","Snabb"];
var bookingModes	= ["Inspelning","Påminnelse"];
var dayName			= ["sö","må","ti","on","to","fr","lö"];
var monthName		= ["jan", "feb","mar","apr","maj","Jun","juli","aug","sep","okt","Nov","dec"];
var filter			= ["Filter","Typ","Undertyper"];
var chEpgFirstGenre	= ["Bio","Nyheter","Underhållning","SPORT","Barn","Musik","Konst","Samhälle","Utbildning","Fritid","Speciell"];
var chEpgSecondGenre= [["Drama","Kriminal","Äventyr","Science fiction","Komedi","Såpa","Romantik","Allvarsamt","Vuxenfilm"," "," "," "],
						["Aktuella frågor","Väderrapport","Nyhetsmagasin","Dokumentär","Diskussion"," "," "," "," "," "," "," "],
						["Underhållning","Spelunderhållning","Varietéunderhållning","Intervjuprogram"," "," "," "," "," "," "," "," "],
						["SPORT","Speciella händelser","Sportmagasin","Fotboll","Tennis",
							"Lagsport","Idrott","Motorsport","Vattensport","Vintersport",
							"Hästsport","Kampsport"],
						["Barn","Förskolebarn","Underhållning för 6 till 14","Underhållning för 10 till 16","Information","Tecknat"," "," "," "," "," "," "," "],
						["Musik","Rock","Allvarsamt","Folkmusik","Jazz","Musikal","Balett"," "," "," "," "," "],
						["KONST","Bild- och teaterkonst","Finkultur","Religion","Populärkultur",
							"Literatura","Film","Exprimenterande","Sändning","Nya media",
							"Revistas de artes","Mode"],
						["SAMHÄLLE","Magasin","Ekonomi","Anmärkningsvärda personer"," "," "," "," "," "," "," "," "],
						["Utbildning","Natur","Teknologi","Medicin","Främmande länder","Socialvetenskap","Vidarutbildning","Språk"," "," "," "," "],
						["Fritid och hobby","Turism","Hantverk","Motor","Hälsovård","Matlagning ","Reklam","Trädgård"," "," "," "," "],
						["Originalspråk","Svart och vitt","Opublicerat","Direktsändning"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Hoppa över kanal","Kanalsortering","Kanalredigering","Radera kanal","kanal växlingsutrymme","kanal insats"];
var chEditPara 		= ["Nätverksnamn","Kanalnummer","Kanalnamn","Frekvens","Färgsystem","Ljudsystem"];
var chSatTitles		= ["Satellittyp","Installation satellitantenn","Välj satellit"];
var chSatEidtOptions= ["Satellitnamn","Position","LNB Ström","LNB-frekvens (MHz)","Diseqc ingång",
						"Ton 22Khz","tonskuren","Frekvens (kHz)","Symbolhastighet (Ksym/s)","Polarisering",
						"Signalstyrka","Signalkvalitet","Satellitstatus"];
var chSatAutoPromt	= [["Alla","Nätverk"],
						["Alla","Gratis"]];
var chSatAutoScanOptions=["Välj satellit","Skanningsläge","Kanaler"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Universal",];
var chSatDiSEqCInput= ["Avaktivera","A","B","C","D"];
var chSatTone22KHz	= ["Auto","På","Av"];
var chSatToneBurst	= ["Avaktivera","tonskuren A","tonskuren B"];
var chSatPolarization= ["Horisontal","Vertikal"];
var chSatSetupOptions=["Antenntyp","Mottagare","Bandfrekvens"];
var chSatAntennaType= ["SingleCable","Universal"];
var chSatUserBands	= ["Användare band 1","Användare band 2","Användare band 3","Användare band 4","Användare band 5","Användare band 6","Användare band 7","Användare band 8"];
var chSatOthers		= ["Transponder"];
var chSatSetupOthers= ["Användardefinierad"];
var pleaseSelectSat = "Välj först satteliter! ";
var subOptions		= ["Undertexter","Språk digital undertext","Språk digital undertext 2","Undertexter typ"];
var ttxOptionsCon      = ["Kodning språk sidor","Språk digital text-TV"];
var subType			= ["Normal","Hörselskadad"];
var netIntf     	= ["Ethernet ","Trådlös"];
var netConnDes		= ["TV testar nätverksanslutningen.\nVänta",
						"Nätverksanslutningstestet lyckades!",
						"Nätverksanslutningstestet misslyckades."];
var netSsidError	= "Accepterad längd av SSID är 1~32 tecken. Vänligen kontrollera SSID. ";
var netOthers		= ["PIN-kod"];
var netWlessAutoDes	= ["Kontrollera att följande PIN-kod är installerad i Access Point innan du klickar på OK.",
						"Tryck på knappen i Access Point inom 120 sekunder innan du klickar på OK."];
var netConnRemind	= ["Lösenord felaktigt!",
						"Ansluter. Vänta!",
						"Anslutningen lyckad och IP adressen erhölls!",
						"Länkfel",
						"TV scannar AP\nVänligen vänta",
						"Det finns ingen trådlös enhet ansluten till TV! "];
var netWireIpOptions= ["IP-inställning","Ange adress","IP-adress","Subnätmask","Standardgateway ","Primär DNS","Sekundär DNS"];
var netWireConnRemind= ["Ange ett värde mellan 0 och 255.",
						"Anslutning lyckades! ",
						"Ange en giltig adress ",
						"Anslutning lyckades! ",
						"Misslyckad anslutning!",
						"Ansluter. Vänta!",
						"Ange ett värde mellan 1 och 223. "];
var netFlixOptions	= ["Avaktivera","ESN","Netflix-version"];
var netFlixDes	 	= ["Är du säker på att du vill avaktivera?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Programuppdatering";
var netUpdateDialogTitle = "Mjukvaran uppgraderas";
var netBGDownloadTitle 	= "Laddar ner";
var netUpdateLoadingPrompt= ["Söker uppgradering, vänta! ",
							"Mjukvara laddas hem... vänta! ",
							"Stäng INTE AV TV:n under uppdatering av programvaran!",
                            "Mjukvarans imperativa uppgradering laddas hem automatiskt i bakgrunden!"];
var netUpdatePrompt= ["Grattis, du har den senaste programversionen!",
						"Den nya programversionen XXXX hittades. Vill du hämta den nu? Detta kan ta en stund, beroende på nätverksstatus.",
						"Misslyckad inloggning!",
						"Mottagning av data misslyckades, försök senare!",
						"Tolka uppdatera XML misslyckad!",
						"Länkfel",
						"Programvaran har hämtats. Vill du börja uppgradera?",
						"Data förlorad! Misslyckad nerladdning!",
						"Misslyckad kontroll av paketet, försök igen!",
						"Nätverket onormalt! Kontrollera och anslut på nytt...",
						"Misslyckad uppdatering. Starta om TV-n!",
						"Uppgraderingsfilen raderades oväntat. Vänligen gör om uppgraderingen via nätverket.",
						"Programmet har laddat ned i bakgrunden. Vill du utföra uppgraderingen?"];
var netUpdateButtonText = ["Hämta", "Uppdatera", "Senare", "Aldrig", "OK","Fortsätt"];
var autoDetectPrompt = ["Den nya programversionen XXXX hittades. Vill du hämta den nu? Detta kan ta en stund, beroende på nätverksstatus.",
						"Ny mjukvara med version XXXX hittades. Vill du uppdatera nu?",
						"Uppgraderingen via nätverket avbröts förra gången. Du måste göra om uppgraderingen.",
                        "Nedladdning av ny mjukvaruversion XXXX är inte avslutad. Vill du fortsätta nu? ",
                        "Mjukvara nedladdad, vill du uppgradera nu? "];
var sysOptions		= ["E-Manual","OSD-språk","Tidsinställning","Lås","Inmatningsinställningar",
						"Programuppdatering","Plats","HbbTV-läge","Cookies","Gemensamt gränssnitt",
						"Avancerade inställningar","Återställ","LED-indikator","Direkt ström på","Automatisk butiksläge","Area","Demo-läge"];
var sysResetDes		= "Är du säker?";
var sysMenuLangOptions=["Språk","Proiriterat ljudspråk","Andra ljudspråk"];
var sysTimerOptions	= ["Tidszon","Regionsnamn","Klocka","Avstängningstimer","Automatisk standby", "Country region"];

var sysTimeZone		= ["Som sändare","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysSleepTimer	= ["Av","10 minuter","20 minuter","30 minuter","40 minuter","50 minuter","60 minuter","90 minuter","120 minuter"];
var sysStandby		= ["Av","4 timmar","6 timmar","8 timmar"];
var sysRegionName	= ["Madrid","Kanarie"];
var sysClockOptions	= ["Auto synkronisering","Datum","Tid","Påslagningstimer","Tidsinställning",
						"Ström på kanal","Avstängningstimer","Tidsinställning"];
var sysTimer		= ["Av","Dagligen","En gång"];

var sysInputSet		= ["Inget namn","DVD","Blu-ray","HDD","DVDR",
						"HD-recorder","Spel","VCR","Dator","STB digital",
						"STB digital HD","Kamera","Recorder","Övrigt"];
var sysAvVideoInput	= ["Auto","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["Via USB","Via nätverk","Via kanal"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Hittar inte ny mjukvara!",
						"Ny mjukvara med version XXXX hittades. Vill du uppdatera nu?",
						"För in USB-minnet.",
						"Misslyckad kontroll av paketet, försök igen!",
						"Ta INTE UT USB-dongeln och stäng av TV:n medan den fasta programvaran uppdateras!!",
						"Mjukvaran har framgångsrikt uppdaterats. \nTV kommer nu att starta om automatiskt.",
						"Den nya programversionen XXXX hittades. Vill du hämta den nu? Detta kan ta en stund, beroende på nätverksstatus.",
						"Laddar ner",
						"Programvaran har hämtats. Vill du börja uppgradera?",
						"Ej uppdaterad",
						"Söker filer för uppgradering",
						"Programvaran har uppdaterats.\nStarta om TV:n nu."];
var sysProductInfo	= ["Aktuell version","Produktnamn","Tillverkarens namn","Namn på kåpa"];
var sysCiDes		= ["Inget CI-kort"];
var sysAdOptions	= ["DivX(R)-registrering","DivX(R) avregistrering","T-Link","Authorization Error","Avregistreringsbekräftelse",
						"Hyrbekräftelse","Hyrtid har gått ut"];
var sysRegistDes	= ["Du måste registrera enheten för att spela DivX-skyddade filmer",
						"Registreringskod :",
						"Registrera på http://vod.divx.com"];
var sysDregistDes	= ["Kod för avregistrering ",
						"Avregistrera på http://vod.divx.com",
						"Fortsätt registreringen "];
var mediaAuthorization = ["Enheten är inte behörig att spela upp denna DivX(R)-skyddade video."];
var deregistrationConfrimation = ["Din enhet är redan registrerad. ","Är du säker på att du vill avregistrera? "];
var rentalConfirmation = "DivX(R)-hyran har använt XXXX av YYYY visningar. Fortsätt?";
var rentalExpired 	= "DivX(R) rental har använt XXXX utav YYYY visningar. DivX rental har utgått.  ";

var parentalRatingNA		= ["***","***","***","***","***","***","***","***"];
var parentalRatingOptionUS		= ["***","***","***"];
var sysTVRatingUS=["***","***","***","***","***"];
var sysMPAAUS=["***","***","***","***","***","***"];
var parentalRatingOptionCanada		= ["***","***","***"];
var sysCanadaEng=["***","***","***","***","***","***"];
var sysCanadaFre=["***","***","***","***","***",""];
var sysResetRRT=["***"];
var sysLockOptions	= ["Låst kanal","Tidsintervall lås","Åldersgräns","Inmatningslås","Inmatningslås","Installationslås",
						"Byt lösenord","Maximal volym","Rensa allt"];
var sysTimeIntervals= ["Låstyp","Starttid","Sluttid"];
var sysRatingOptions= ["Ingen","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","X-rated (Spanien)"];
var changePass		= ["Byt lösenord","Nytt lösenord","Bekräfta lösenord"];
var changePassDes	= ["Lösenord felaktigt.\nAnge igen!",
						"Lösenord stämmer inte.\nAnge igen!",
						"Lösenordet har angetts!",
						"Denna kod är för enkel som lösenord.\nVar vänlig mata in på nytt!"];
var sysPowerOnChOptions= "Välj läge";
var sysPowerOnCh	= ["Senaste status","Välj användare"];
var netWlessSecu    = ["Öppen","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Ingen","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Inget stöd"];
var netWlessSecu3	= ["Ingen","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Inget stöd"];
var netOptions		= ["Internetanslutning","Gränssnitt","Trådlösa inställningar","IP-inställningar","Information",
						"Anslutningstest","DLNA","TV remote","Netflix-inställningar","WiFi-visning",
						"Ange adress","IP-adress","Subnätmask","Standardgateway ","Primär DNS",
						"Sekundär DNS","SSID","BSSID","Ange SSID:","Användar-ID"];
var chEditDes		= ["Duplicerat kanalnummer!","Tryck på röd knapp för att radera aktuellt tecken! ","Ogiltigt kanalnummer"];
var chEpgNoProgram	= "Programinfo ej tillgänglig, sök först kanaler!  ";
var chEpgWords		= ["Programguide","Programdata saknas.","Kanal låst!","Programdetaljer saknas.","Programtitel saknas."];
var chEpgBooking	= ["Arbetstider info", "Kanalnummer","Startdatum","Starttid","Sluttid",
						"Upprepningstyp","Schematyp","Lägg","Ersätt","Ändra",
						"Lägg till/Ändra"];
var epgHotKey		= ["Föregående dag","Nästa dag","Filter","Planeringslista","Lägg till plan"];
var chEpgBookRemind	= ["Felaktig starttid","Felaktig sluttid","Duplicerat schema","Sparats framgångsrikt.","Radering lyckad."];
var chSchePara		= ["Planeringslista","Starttid","Startdatum","Programtitel","Kanalnamn",
						"Längd","Repetera","Schema","Redigera","Radera"];
var dateTimer		= ["En gång","Dagligen","Varje vecka"];
var scheduleDeleteReminds="Vill du radera denna planeringslista?";
var scheduleNoLists	= "Planeringslista saknas. Tryck på \"Röd\" knapp för att lägga till en.";
var chListWords		= ["Kanallista","Välj lista","Mottagarläge","Lägg till i favoriter","Ta bort",
						"Välj kanallista","Välj tunerläge","Växla"];
var chListType		= ["Alla","Digital","Analog","Radio","Gratis","Favoriter"];
var chAutoScanOptions=["Välj Operatör","Kanaltyp","Kanalsökning"];
var souSoundType	= ["Ogiltig","Mono","Mono","Stereo","Stereo",
						"SAP","SAP","Dual1","Dual2","Dual2",
						"Nicam mono","Nicam stereo","Nicam dual1","Nicam dual2","Nicam dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Musik","Bio","Klar röst","Standard","Användare"];
var picAdRgbMode	= ["Av","Endast röd","Endast grön","Endast blå"];
var picAdOptions	= ["DNR","MPEG NR","RGB mode","Dynamisk Kontrast","LED Rörelseskärpa",
						"Hudton","Filmläge","Spelläge","Färgtemperatur","Vitbalans",
						"Stillbild","Svart Stretch","Överskanning","Gamma","HDMI-läge","10P vitbalans","Färgförlängare",
						"Skärpa","Bildstabilisering","Färgomfång","Rörelseskärpa"];
var pic10Pwhite     = ["Intervall ","Röd","Grön","Blå","Återställ","Färg","Gul","Cyan","Magenta"];
var picMotionClarity = ["Rörelseläge","Rörelseinterpolering","LED Rörelseskärpa","Skärpa","Bildstabilisering","Återställ"];
var picMotionMode   = ["Film","Mjuk","Rensa","Sport","Kund"];
var picResetDes		= "Alla personliga inställningar återställs. Är du säker på att du vill slutföra valet?";
var pic10PReset     = "Är du säker på att du vill återställa 10P vitbalans?";
var picMotionReset  = "Vill du återställa rörelseskärpa?";
var picColorSpaceReset    = "Är du säker på att du vill återställa färgomfång?";
var picOptions		= ["Bildläge",
						"Bakgrundsljus","Ljusstyrka","Kontrast","Mättnad","Färg","Skärpa","Färgtemperatur","Skärmläge","Hörlursvolym",
						"Sport förbättring","3D","3D-navigering","ECO Inställningar","Geometri",
						"Avancerade inställningar","Bildåterställning","Micro-gråmarkering"];
var picSize			= ["16:9", "4:3 format", "14:9-format", "Cinerama",
						"Zoom 16:9", "Zoom 16:9 zgoraj","Zoom 14:9","Raztegnjeni zoom","Široki zoom ",
						"Zoom 2","Široki zoom 2","Matchning aktuell skärm","Dot by Dot","Original","Panorama"];
var others			= ["Volym","Broadcast","Lösenord","Status","Spara","Ersätt","Start","Avsluta","Sökning","Radera",
						"Ingen","Automatisk","Skanna","Säkerhet","Anslut","Uppdatera","Prova igen","Avsluta","Inställningar","Kanaler",
						"Redigera","För in","Signal!","Avsluta","Stereo","Ljud","Källa","Inget ljud","Tips","Återställ",
						"Kund","Inställning","Spara","Användare","Stäng tangentbord","Säkerhetsläge","Varje dag","PVR lista"];
var direction		= ["Vänster","Höger","Upp","Ned"];
var audioType 		= ["MPEG","DOLBY AUDIO"/*"AC3"*/,"MPEG4","AAC", "DOLBY AUDIO"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Okänt"];
var soundChannels   = ["Okänt","Mono","Under-","Dual Mono","Stereo","Stereo Sub","Stereo Dolby Surround","Surround 2-kanal","Surround","3.0Ch","4.0Ch","5.0Ch","Mono Lfe","Dual Mono Lfe","Stereo Lfe","Surround 2Ch Lfe","Surround Lfe","3.1Ch","4.1Ch","5.1CH","7.1CH","Joint Stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Vänster","Höger","Annat"];
var prompts			= ["Justera bildinställning till en som bäst passar din visningsmiljö.",
						"Justera ljusnivåer. Ju närmare 100, desto ljusare.",
						"Justera kontrastnivåer. Ju närmare 100, desto större kontrast mellan mörkt och ljust på bilden.",
						"Justera färgmättnadsnivåer. Ju närmare 100, desto starkare färger.",
						"Justera skärpenivåer. Ju närmare 100, desto klarare detaljer.",
						"Justera nivåer för bakgrundsljus. Ju närmare 100, desto ljusare bildskärm.",
						"Justera färgtonsnivåer. Dessa inställningar modifierar färgtoner.",
						"Välj det bildformat som bäst passar programmet som visas.",
						"Konfigurera energisparfunktioner.",
						"Vid anslutning av PC-enhet, justera inställningar för skärmgeometri.",
						"Välj fler avancerade bildinställningar.",
						"Återställ alla bildinställningar till standard.",
						"Välj den ljudinställning som du föredrar.",
						"Justera ljudbalansen mellan vänster och höger kanal.",
						"Sound Retrieval System TruSurround HD medger rik ljudprestanda och tydlighet både i låga och höga frekvenser. ",
						"Digital Interface Format ansluter TV:ns digitala ljudutgång till hemmabiosystemet. ",
						"Välj det ljudspråk som du föredrar.",
						"Möjliggör för synskadade att avnjuta TV-program.",
						"Testa din TV bild, ljud och signal.",
						"Välj den kanallista som passar din TV-signal.",
						"Välj språk för programmens undertexter som visas nederst på skärmen.",
						"Se den aktuella kanalens text och bilder.",
						"Digital Living Network Alliance. Via hemnätverket njuter du av musik, foto och video från andra enheter som t.ex. en PC.",
						"Visa innehållet från din smartphone på TV:n och använd din smartphone som fjärrkontroll för TV:n.",
						"Visa innehåll från en Miracast-kompatibel Android-enhet på din TV-skärm. ",
						"Lås din TV.",
						"Ange ett namn för din enhet.",
						"Välj din visningsmiljö.",
						"Återställ alla systeminställningar till standard.",
    					"Switch off sports mode for more options.",
    					"Öka miljökontrasten",
    					"Ett specialläge för att använda sportspel",
    					"Använd fler CEC-funktioner."];
var initialTitle	= ["Välkommen","Första inställning"];
var initialPrompt	= ["Gör dina grundinställningar nu och en värld av spännande upplevelser väntar på dig! ",
						"Välj språk:",
						"Välj ditt land/region:",
						"Välj plats:",
						"Välj typ av nätverksanslutning:",
						"Välj anslutning för trådbundet nätverk:",
						"Anslutning till xxxxxxxxx misslyckades! Anslut enheten enligt följande diagram eller välj Vänster för återställning.",
						"ansluten via xxxxxxxxx! Välj Höger för att fortsätta.",
						"1) Din TV kanske redan har en trådlös adapter inbyggd\n 2)Eller ifall en trådlös USB adapter tillhandahålls, koppla den till din TV. Välj därefter anslutningsinställning för trådlöst nätverk.",
						"Söker. vänta…",
						"Det finns ingen trådlös enhet ansluten till TV! ",
						"Se till att följande PIN kod är installerad till AP innan du klickar på knappen ‘Nästa’ nedanför.",
						"Tryck ned tryckknappen på AP:n inom 120 sekunder innan du trycker på Höger!",
						"WPS (Wi-Fi Protected Setup)",
						"PIN(Personligt Identifieringsnummer)",
						"PBC(Tryckknappskonfiguration)",
						"Följande innehåll kan endast nås via nätverksuppkoppling. Vill du hoppa över nätverksinställning?",
						"Det finns nya uppgraderingar för din mjukvara att hämta hem, detta kan ta en stund beroende på din nätverksstatus.",
						"Genom att uppdatera TV:ns mjukvara säkerställer du att du kan utnyttja de senaste funktionerna och tjänsterna.",
						"Du kommer inte att kunna avnjuta de senaste funktionerna och tjänsterna. Vill du skippa uppgraderingen av mjukvaran?",
						"Tryck på höger knapp för att fortsätta.",
						"Stäng inte av strömmen under uppgraderingen då detta kan orsaka TV-fel.",
						"Vill du inte uppgradera, välj Nej.",
						"Uppgraderar, vänta!",
						"Du kan också uppgradera mjukvaran via: System/Programuppdatering.",
						"Landet du valt frågar efter lösenordsinställning.\nVar vänlig och ställ in koden för din TV och bekräfta den.",
						"This code is too simple.\nPlease use different digits.",
						"Gratulerar!  Första installationen är klar. Du kan modifiera din konfiguration via huvudmenyn och relaterade undermenyer. ",
						"Välj säkerhetsläge:",
						"Ange anslutningsläge för trådlöst nätverk:",
						"Nätverk"];
var initNetCabAndDonRe = ["Ingen nätverkskabel ansluten, anslut en nätverkskabel!","Ingen inbyggd trådlös adapter eller ingen trådlös USB adapter är tillhandahållen."];
var initChPrompt = ["TV Kanalinstallation","Ange typ av antennsökning.","Genomför autoinställning…","Följande antennkanaler hittades: ","Välj skanningsläge för Kabel.","Välj en operatör från följande lista.","Konfigurera skanningsinformationen","Följande kabelkanaler hittades:","Välj en operatör i följande lista","Välj satelliter att skanna eller redigera den valda satelliten","Ställ in satellitparametrarna","Följande kanaler hittades, och kanalsökningen kan också utföras igen via: Kanal/Kanalsökning"];
var initClockPrompt = ["Hämta nätverkets accesstid!",
						"Ange datum och tid: "];
var initialOptions	= ["Miljö","Nätverksinställningar","Programuppdatering","Kanalinstallation","Klocka"];
var initialHotkeys	= ["Tillbaka","Välj","Nästa","Jag instämmer"];
var initLocations	= ["Hem","Butik","Butik med demo"];
var initNets		= ["Kabel","Trådlös","Jag har ingen nätverksanslutning"];
var initWireManuals	= ["IP-adress","Subnätmask","Standardgateway ","Primär DNS","Sekundär DNS"];
var initSoftUpdates = ["Uppdatera nu","Uppdatera nu"];
var initChannelIns	= ["Fortsätt","Jag vill inte installera kanaler "];
var initChScanTypes	= ["Digital & Analog","Digital","Analog","Jag vill inte skanna"];
var initChDvbts		= ["Antenn ATV kanaler:","Antenn DTV kanaler:"];
var initChDvbcs		= ["ATV- kabelkanaler:","DTV-kabelkanaler:"];
var initChDvbss		= ["Satellitkanaler:"];
var initChDvbSOther	= ["Jag vill inte skanna satelliter"];
var initEndConnectedStatus= ["Frånkopplad"," WiFi ansluten","Kabel ansluten"];
var initEndInstallations= "XXXX kanaler installerade";
var initEndUpdate	= ["Uppdaterad"];

var audioScenes 	= ["Bordsstöd","Väggfäste"];			
var screenSavers	= ["Inga kanaler. Tryck på ok-tangenten och sök!",
						"Ingen signal!",
						"Kodad!",
						"Endast data",
						"Ljudprogram",
						"Inget ljud eller bild",
						"Ej tillgänglig",
						"Ingen text-TV",
						"Programdata saknas.",
						"Program låst!",
						"Program låst!\nTryck OK och din kod.",
						"Programdetaljer saknas.",
						"Program skadligt för minderåriga.\nTryck OK och ange din kod.",
						"Kanal låst!",
						"Kanallås!\nTryck OK och din kod.",
						"Inmatning låst!\nTryck OK och din kod.",
						"Inget stöd!",
						"Tjänsten är inte tillgänglig för tillfället",
						"Input låst!",
						"Programtitel saknas.",
						"Ingen funktion",
    					"Ingen Undertexter"
						];
var channelNumberOverPromt = ["The number of search programs has exceeded,you can delete some programs and then retry!"];
var chBookingPromt	= ["Den aktuella kanalen har en schemalagd inspelning, TV:n kommer påbörja inspelning.",
						"En schemalagd inspelning hittades.\n Byt till XXXX för att spela in",
						"Den aktuella kanalen har en påminnelse.",
						"En schemalagd påminnelse hittades.\n Byt till XXXX"];
var timeUnit		= ["Sekunder","min"];
var ciPromt			= ["Nätverksdata har ändrats. För att uppdatera kan du utföra en uppdateringssökning. ",];
var othersPromt		= ["Vänta…",];
var menuOptions		= ["Bild","Ljud","Kanal","Smart TV","Nätverk","System","Support"];
var optionOptions	= ["Bildläge","Förinställning ljud","Stillbild","T-Link","tildsförskjut.","PVR","Planeringslista","Inställningar","*"];
var optionTLinkPromt= [["Autostart på","Automatisk standby","Guidemeny"],
						["Påslagning","Vänteläge","Förstärkarvolym"]];
var powerPromt		= ["TV:n stängs snart av! Tryck på valfri knapp för att avbryta."];
var ttxLanguage		= ["VÄSTEUROPA","ÖSTEUROPA","Ryska","Arabiska/Hebreiska","Farsi","Arabiska","Белоруски","Grekiska","Turkiska"];
var ttxOptions		= ["Visa","Bläddra undersidor","Språk","Larmsida","Nyhetsnotiser"];
var weekday         = ["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"];
var lcnConfflict	= "Detta HD-program kan inte tas emot.";
var inShopMode		= "Din TV är i butiksläge. För hemmaläge välj \"System\" och ändra \"Plats\" från menyn.";
var nitRefresh		= "Nätverksdata har ändrats. Vill du göra en uppdateringsskanning?";
var picHDMIMode     = ["Auto","Grafik","Bild"];

var glassRemind    	= ["Para samman dina 3D-glasögon med TV:n\n(håll på POWER-knappen på 3D glasögonen. ","Dina 3D glasögon är uppkopplade mot TV:n ",""];
var pvrRemind 		= ["Dra inte ur USB enheten eller bryt strömmen "];
var pvrConName   	= ["PVR","Programinformation:  ",["Note: If you record the HD channel, please to select  the  disk(of speed >5.0MB/sec), and to select the disk (of speed >3.0MB/sec) when you want to record the SD channel.","Inspelad video har sparats i \"PVR\" mapp."],"Avsluta","Inspelning","timme","Minut","Längd","Tips","Använd piltangenterna för att ange inspelningens varaktighet."];
var pvrDisRemind 	= "Sätt i USB-enheten för inspelning.";
var pvrRemindWords  = ["Vill du avsluta?  ",
							"Vill du avsluta inspelningen och bläddra igenom inspelade filer?  ",
							"Disk är utdragen.",
							"Det finns inte ledigt utrymme.",
							"Inga inspelade filer. Börja spela in. ",
							"PVR kan inte starta i kodad kanal.",
							"Egenskap ej tillgänglig",
							"Sparats framgångsrikt.",
							"Vill du stoppa inspelningsprocessen och ändra ingångskälla?",
							"TV:n kommer avsluta pågående inspelning. Vill du avsluta?  ",
							"PVR inspelning kräver TV signal för att fungera ordentligt, kontrollera din signal."];
var pvrChangeCh 	= ["Vill du ändra kanal?",
							"Vill du stoppa inspelningsprocessen och ändra kanal?"];
var pvrChangeToPIN8	= ["Vill du ändra källa till enhet ansluten via SCART ingång?",
				    		"Vill du avbryta inspelningsprocessen och ändra källa till enhet ansluten via SCART ingång?"];
var pvrChangeToCEC  = ["Vill du byta källa till enhet ansluten via en HDMI ingång?",
				  			 "Vill du avbryta inspelningsprocessen och byta källa till enhet ansluten via en HDMI ingång?"];
var pvrGuideJump    = ["Vill du gå in i EPG?",
							"Vill du stoppa inspelningsprocessen och öppna EPG?"];
var pvrMediaJump    = ["Vill du gå in i Media?",
							"Vill du stoppa inspelningsprocessen och öppna Media?"];
var timeshiftExtra	= ["Vill du stoppa tidskift och ändra kanal?",
						"Vill du stoppa timeshift och byta källa till enhet ansluten via SCART ingång?",
						"Vill du stoppa timeshift och byta källa till enhet ansluten via HDMI ingång?",
						"TimeShift kan inte starta i kodad kanal.",
						"Vill du stoppa timeshift och gå in i EPG?",
						"Vill du stoppa tidskift och ändra TV till USB läge?",
						"Vill du stoppa tidskift och ändra input källa?",
						"Sätt i USB-enheten för inspelning.",
						"Skivstorleken inte tillräcklig.",
						"TV:n kommer avsluta nuvarande timeshift. Vill du avsluta?"];
var timeshiftStatus	= ["Snabbt bakåt","Avsluta","Spela upp","Paus","Snabbt framåt"];
var pvrPowerOffRemind= ["Standby inspelning","Vänteläge","TV:n spelar nu in, vill du fortsätta inspelningen när TV:n är i standby läge?"];
var timeshiftInitTitle= "Skivinställning";
var timeshiftInitReminds= ["Guiden används för att ställa in USB skivan för tidsbyte. Välj inställningsläge.",
						 "För bättre prestanda rekommenderar vi att formatera USB skivan. Det raderar all data.",
						 "Välj filstorlek för tidsbyte.",
						 "Formaterar",
						 "Det finns inte ledigt utrymme.",
						 "Skapar tidsbytesfil.",
						 "Hastighetstest",
						 "Skivhastigheten är för låg  (< %f MB/sec) för att möjliggöra tidskiftsegenskaper!",
						 "Skivan är klar för tidsbyte. Men vi rekommenderar att byta en skiva (med hastighet > %f MB/s) för bättre prestanda.",
						 "Skivan är klar för tidsbyte."];
var timeshiftInitButtons= ["Format ","Hoppa","Avbryt","OK","Avsluta","Avsluta"];
var timeshiftInitOther=["Skivhastighet:","MB/s"];

var selectChoice	= "Är du säker?";
var chAtvStore		= "Lagra som XXXX";
var chEpgFirstGenreUK= ["Bio","Nyheter och fakta","UNDERHÅLLNING","Sport","Barn","Utbildning","Livsstil","Drama"];
var homePageTitleList = ["APPAR","TV","VIDEOS","Hemsida"];
var homePageFavAndAllName  = ["Favorit appar","Samtliga appar"];
var homePageBackUp = ["E-Manual","GuidePå"];
var homePageRemind   = ["Full funktion är endast tillgänglig efter nätverksanslutning.","Din TV har ännu inga kanaler. Program är tillgängliga efter kanalsökning.","Inget program","Sök kanaler nu?"];
var homePageHistory = ["Historik"];
var miracastTitle = ["WiFi-visning","TCL enhet"];
var miracastRemind=["Med WiFi-visning kan du dela skärm och ljud för enheten, exempelvis för en smartphone eller en surfplatta, trådlöst med din TV (dvs. utan kablar). Detta gör det möjligt att samtidigt visa på TV:n vad din smartphone eller surfplatta visar. Du kan exempelvis visa en video på din smartphone och samtidigt visa den på TV:n, eller använda din surfplatta som spelkontroll och visa dess innehåll på den stora TV-skärmen.","WiFi-visning på TV:n är redo. Starta för att dela enhetens skärm med TV:n nu.","Ansluter. Vänta!","Misslyckad anslutning!","Anslutning misslyckades. Kontrollera!"];
var homePageLittleWin = ["Inställningar","Media","Favoritkanaler","Smart TV","EPG"];

var hbbtvStopRemind  = ["Vill du avbryta uppspelning?"];
var colorSystem = ["Auto","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Tryck på ≡ för ytterligare information";
var emptyListInfo = "Det finns ingen enhet ansluten till TVn!";
var optionVideoListArray_1 = ["Bildläge", "Förinställning ljud", "Spelläge", "Skärmläge", "3D Läge", 
							  "V-H Brytare", "Djupskärpa", "Undertexter", "Ljudspår", "Titel", "Kapitel", "Infotainment"];
var optionVideoListArray_2 = ["Bildläge", "Förinställning ljud", "Spelläge", "Skärmläge", 
							  "Undertexter", "Ljudspår", "Titel", "Kapitel", "Infotainment"];
var bottomTipsText = ["Spela upp/Paus", "Snabbt bakåt", "Snabbt framåt", "Spellista", "Inställningar"];
var picturePresetArray = ["Standard", "Dynamisk", "Naturlig", "Bio", "Användare"];
var videoPlayModeArray = ["Repetera alla", "Repetera en", "Normal"];
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Široki zoom ", "Zoom 2", "Široki zoom 2", "Raztegnjeni zoom", "Automatisk"];
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "Zoom 14:9", "Zoom 16:9", "Zoom 16:9 zgoraj", "Automatisk"];
var Mode3DArray = ["Av", "2D-till-3D", "Sida vid Sida", "Topp och botten", "Linje intersenkvensera"];
var videoOptionListArray = ["Av", "Spår", "Undertexter", "Titel", "Kapitel"];
var subMenuTitleText = "Undertexter";
var langMenuTitleText = "Ljudspråk";
var titleMenuTitleText = "Titel";
var mode3DMenuTitleText = "3D Läge";
var langInfoText = "Spår";
var STOP_RESUME_INFO = "Stopp-Återuppta";
var playListName = "Namn";
var eb_tips = "Tips";
var ok_button = "OK";
var eb_info = ["Avkodningsfel audio.", "Avkodningsfel video.", "Ljudformat stöds ej.", 
			   "Videoformat stöds inte.", "Filen kan inte öppnas.", "Uppspelningsfel, försök igen.",
			   "Filformat saknar stöd.", "Oj då! Spelaren har stannat.",
			   "Sökväg existerar inte eller är ogiltig.\n Sätt in förvaringsenheten på nytt och försök om igen.",
			   "Fortsätt spela från föregående\n uppspelningsposition?"];
var picturePlayErrorTips = ["Inläsningsfel!!!","Bilden är för stor!!!","Nätverksfel!!!","Trådfel!!!","Param-fel!!!","Okänt fel!!!"];
var frameTitleText = "Ny enhet";
var eb_quit_info = "Är du säker på att du vill avsluta?";
var eb_yes = "JA";
var eb_no = "NEJ";
var offinfo = "Av";
var naInfo = "Noll";
var consoleInfoArray = ["Snabbt bakåt", "Snabbt framåt", "Spela upp/Paus", "Spellista"];
var cantOperateText = ["Funktion stöds ej"];
var chapterChangeInfo = "Endast avsnitt från 1 till XXXX är tillgängligt.";
var metaDataArray = ["Titel/upplaga metadata:", "Avsnitt metadata:", "Ljud metadata:", "Undertext metadata:"];
var metaTitleInfo = "Titel";
var metaChapterInfo = "Kapitel";
var videoLoadingInfo = "Analyserar…";
var listLoadingInfo = "Laddar…";
var pgInfo = "Klassificering:";
var fileNameText = "Namn";
var fileDateText = "Datum";
var fileSizeText = "Storlek";
var fileDurationText = "Längd";
var fileDirectorText = "Regissör";
var fileCopyrightText = "Copyright";
var fileArtistText = "Artist";
var fileAlbumText = "Album";
var fileGenreText = "Genre";
var fileYearText = "År";
var fileGenreText = "Genre";
var mainListArray = ["Alla", "Bild", "Bild", "Musik"];
var sortArray = ["Namn", "Datum"];
var parserArray = ["Normal", "Rekursiv"];
var emptyTipsInfo = "Oj då! Fil som stöds saknas.";
var emptyFolderInfo = "Oj då! Fil som stöds saknas.";
var sortName = "Sortera efter";
var parserName = "Parser";
var divx_str1 = "DivX(R)-registrering";
var divx_str2 = "DivX(R) avregistrering";
var infor_str = "Infotainment";
var quickMenuEmptyText = "Tillgängliga alternativ saknas.";

var musicSoundPresetArray = ["Standard", "Bio", "Musik", "Klar röst", "Användare"];
var musicInformationArray = ["Namn", "Artist", "Album", "Genre:", "År:", "Längd:"];
var playListName = "Namn";
var playTipsInfo = ["Du spelar den första filen.", "Du spelar den sista filen."]
var musicNameInfo = "Name";
var musicArtistInfo = "Artist";
var musicAlbumInfo = "Infotainment";
var optionSoundPresetInfo = "Förinställning ljud";
var optionBGMInfo = "Spela i bakgrunden";
var optionAudioOnlyInfo = "Endast ljud";
var optionInfoText = "Infotainment";

var remotePhoneConnecte = "XXXX har anslutits till TV:n!";
var tvRemoteTitle		= "TV remote";
var tvRemoteDeveloper	= "Det här programmet har utvecklats av TCL";
var tvRemoteDeviceTitle	= "Enhetsnamn:";
var remoteOption		= ["Mediadelning","Fjärrkontroll","Hjälp","Om","Smart Anslutning"];
var remotebottom		= "Ladda hem \"TV Remote\" till din smartphone";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Delning av foto, video och musik med TV via telefon.",
							"Steg: \n 1. Klicka \"TV Remote\" på telefonen. Anslut telefonen till TV:n via samma WiFi nätverk;\n 2. Klicka \"Media Sharing\" för att bläddra igenom mediafiler;\n 3. Skicka media till TV:n för uppspelning (med ett av följande alternativ)",
							"      a) Dra & släpp mappen/filen till TV-ikonen högst upp på skärmen\n      b) Gör en kaströrelse med telefonen mot TV:n för att sätta igång uppspelning av den första filen\n      c) Spela upp media på telefonen och klicka på ikonen för TV-delning",
							"   4. Skaka på telefonen för att spela upp föregående eller nästa fil medan filer spelas upp på TV:n. "];
var controlReminds		= ["Använd telefonen som en fjärrkontroll för att styra TV:n.",
							" ",
							"Steg: \n 1. Klicka \"TV Remote\" på telefonen. Anslut telefonen till TV:n via samma WiFi nätverk;\n 2. Klicka \"Remore Control\" för att"];
var helpDeviceWords		= "Interaktion med flera skärmar";
var helpBottom			= " I området för molnteknik kopplas smarta enheter, såsom telefon och TV, ihop. Dela media på flera skärmar med familjen och styr TV:n med telefonen! ";
var helpReminds			= ["Förberedelser\n  1. Ladda hem och installera \"TV Remote\" från Google Play eller Apple Store.\n 2. Anslut telefonen till TV:n via samma WiFi nätverk",
							" ",
							"Telefoner som används bör ha följande:\n   1. Processor: minst 800 MHz\n   2. Minne: minst 80 MB ledigt utrymme",
							" ",
							"Friskrivningsklausul\n Ifall \"TV Remote\" inte är tillgänglig på din telefon, kontakta telefontillverkaren. "];
var helpButtons			= ["Föregående","Nästa"];
var aboutReminds		= ["TV remote","Det här programmet har utvecklats av TCL"];
var aboutExit			= "Avsluta";
var smartReminds		= ["Snabb och smart uppkoppling mellan TV och telefon.",
							" ",
							"Steg \n 1. Anslut TV och smarphone till samma LAN. Klicka \"TV Remote\" på smartphone.\n 2. Klicka \"Smart Connect\" för att skanna QR koden.\n 3. Med TV:n i sändande visningsläge, tryck på INFO knappen på TV:ns fjärrkontroll i 4 sekunder och en fullskärms QR kod poppar upp.",];
var smartQRReminds		= ["På telefonens TV Remote  klickar du på Smart Connect och skannar QR koden för att snabbt koppla ihop TV och telefon. ",
							"QR kod innehåller LAN kontoinformation. Förvara den väl!  "];
							

var consoleTipArray = ["Föregående","Nästa","Konsol ","Spellista"];							
var optionInfoArray = ["Bildläge","Spelläge","Längd","Effekt","Infotainment"];

var playModeArray = ["Normal","Blanda","Repetera"];
var durationArray = ["Kort(5s)", "Mellan(10s)", "Lång(15s)"];
var effectArray = ["Ingen", "Rotera", "Skjut in höger", "Skjut in vänster", "Skjut in upp", "Skjut in ner", "Ruta in", "Ruta ut", "Ranomderat"];
var infoArray = ["Namn:","Storlek:","Datum:","Plats"];

var picturePresetBarTitleInfo = "Bildläge";
var picturePresetBarArray = ["Standard","Dynamisk","Studio","Bio","Användare"];
var upTipsInfo = "Flytta bild"; //add yums 2014-10-10
var consoleTipsArray = ["Konsol ","Föregående","Nästa","Spellista","Inställningar"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Tryck HÖGER igen för att spela upp nästa bild","Tryck VÄNSTER igen för att spela upp föregående bild","Tryck NED igen för visning av spellistan"]; //add yums 2014-10-10

var optionPvrListArray = ["Bildläge","Förinställning ljud", "Skärmläge", "3D Läge", "Undertexter", "Ljudspår", "Infotainment"];							
	
var titleSpanFirstArray = ["Kontroll & Anslutning","Grundläggande funktioner","APPAR","TV","Inställningar","FAQ"];
var titleSpanSecondArray = [["Fjärrkontroll","Panelknappar","Enkel navigering","TV-anslutning","TV-anslutning","TV-anslutning","Trådlös"],["Startare","Statusfält","Källa"],["Spelande appar","Media","TV remote"],["Justera kanal och volym","Kanallista","EPG","Kanaler","Favoritkanaler"],["Bildjustering","Ljudjustering","Kanaljustering","Programuppdatering","Språk","Föräldralås"],["Vanligt förekommande frågor ","Vanligt förekommande frågor ","Felsökning","Felsökning","Villkor"]];
var contentSpan1_1Array =[["STRÖM:","KÄLLA:","INSTÄLLNINGAR:","ALTERNATIV:","BAKÅT:","INFO:","HEM:","AVSLUTA:","LISTA:"],
    ["Slår på ström eller standby-läge",
        "Välj ingångskälla",
        "Visa inställningsmenyn",
        "Visa alternativmenyn",
        "Gå tillbaka till föregående meny eller avsluta en APP som körs",
        "Visar programinformation",
        "Öppna hemsidan för SmartTV",
        "Gå tillbaka till föregående meny eller avsluta en APP som körs",
        "Visar kanallistan"]];
var contentSpan1_2Array = ["Föregående kanal","Nästa kanal","Ökar volymen","Minskar volymen","Leder till hemsidan","Bekräfta valet","Standby / Ström på"];
var contentSpan1_3Array = ["OK/Guide","Kanal upp","Kanal ned","Volym ned","Volym upp","Visas som tangentpilar i vissa funktioner."];
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","AV UT adapter","LAN","Smartphone","PC/Digitalbox/DVD","Ljudförstärkare","Ljudförstärkare/Monitor","Din TV kan sakna vissa anslutningar"];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Hörlur","AV In adapter","SPDIF","CMP AUDIO IN adapter","CMP IN (YPbPr) adapter","USB enheter","USB enheter","Hörlur","DVD/Spelkonsol/ Digitalbox/DVD","Ljudförstärkare","DVD/Spelkonsol/ Digitalbox/DVD","Din TV kan sakna vissa anslutningar"];
var contentSpan1_6Array = ["Gemensamt gränssnitt","SD","VGA","SCART","Mini SCART","ANTENN IN","PCMCIA kort","SD kort","Dator","Digitalbox/DVD","Antenn/Kabel/Sattelit","Din TV kan sakna vissa anslutningar"];
var contentSpan1_7Array = ["Tablett","Dator","Router","Telefon","TV"];
var contentSpan1_8Array = ["Reglagefunktion/ström","En lång tryckning för övergång till vilotimer","Ned","Upp","Volym/Kanal/Källa"];

var contentSpan2Array = [["Tryck på tangentpilarna för att gå till hemsidan.","Tryck sedan OK för att se ett av programmen som erbjuds eller för att gå till appen."],["Visa datum, nätverk och enheter etc. på skärmens övre högra hörn."],["Välj ingångskälla för enheter anslutna till TV:n via olika portar som t.ex. TV, AV, HDMI etc."]];

var contentSpan3Array = ["Njut och se dina favoritappar via Smart TV-sidan","Titta på foto, se på video och spela musik från en USB-lagringsenhet.","Anslut din TV och smartphone eller surfplatta till samma LAN","Klicka på nScreen eller TV Remote på din smartphone eller surfplatta.","Dela foto, video och musik med din familj via multi-skärmar, och styr din TV via din smartphone"];

var contentSpan4Array = [["Tryck på Upp/Ned för byte av kanal","Tryck på Vänster/Höger för justering av volym"],["Tryck LIST på fjärrkontrollen för att se en uppställning av kanalerna.","Tryck på Upp/Ned för att välja din kanal"],["EPG) är en on-screen guide på skärmen som visar schemalagda TV-program. Du kan navigera, välja, se och spela in program."],["Sök och installera kanaler "],["Lägg till eller ändra dina favoritkanaler i kanallistan "]];

var contentSpan5Array = ["Njut av dina favoritprogram via video appar "];

var contentSpan6Array = [["Tryck på Alternativ för visning av systeminställning","Gå till Bildinställning för justering av värden"],["Tryck på Alternativ för visning av systeminställning","Gå till Ljudinställning för justering av värden"],["Tryck på Alternativ för visning av systeminställning","Gå in på Kanalinställningar för att göra dina val"],["Uppgradera din TV när ny mjukvaruversion finns tillgänglig"],["Du kan ange önskat menyspråk"],["Möjliggör för föräldrar att låsa kanaler eller program som inte anses lämpliga för barn"]];

var contentSpan7_1Array = [["Ingen bild, inget ljud","Kontrollera om säkring eller kretsbrytare fungerar.","Anslut en annan elektrisk enhet till eluttaget för att försäkra dig om att den fungerar eller är påslagen. ","Kontakten har dålig anslutning mot strömuttaget ","Kontrollera signalkällan."],["Normal bild, inget ljud.","Tryck på volym Upp -knappen för att öka volymen.","Ljudinställning felaktig","Signalfel från sändningen."],["Normalt ljud, ingen bild","Ljustera ljusstyrka och kontrast","Signalfel från sändningen.","Kontrollera ifall den står i läge; enbart ljud."]];
var contentSpan7_2Array = [["Radiofrekvensstörning","Denna störning orsakar rörelsevågor eller diagonala ränder och i vissa fall förlust av bildkontrast. Lokalisera och avlägsna källan till radiostörningen. "],["Ingen färg","Justera färginställning.","Prova med annan kanal. Mottagning av svartvitt program kan vara orsak."],["Fjärrkontroll fungerar inte","Byt ut batterierna.","Batterierna är inte rätt installerade. TV:ns huvudström är inte ansluten."]];
var contentSpan7_3Array = [["Innehåll på USB enhet visas inte","Kontrollera att USB lagringsenhet är kompatibel med TV:n.","Kontrollera att ljud och bildformat stöds av Tv:n."],["Spelas utan ljud","Videons ljudformat stöds inte av TV-spelaren."],["Filer spelas inte jämt","USB lagringsenhet kan ha begränsad överföringskapacitet vilket kan begränsa hastighet för dataöverföring till TV:n."]];
var contentSpan7_4Array = [["Vad ska jag beakta när jag uppgraderar mjukvara","Inget strömbortfall under uppgradering av mjukvara.","Undvik alla manövrar med din fjärrkontroll då mjukvara uppgraderas.","Ha tålamod eftersom uppgraderingsprocessen kan dra ut på tiden."],["Det syns ingen speciell skillnad på TV-interfacet efter uppgradering av mjukvaran.","Under vissa förhållanden kan uppgradering av mjukvaran inte bara uppgradera eller lägga till nya funktioner, utan också förbättra TV:ns prestanda utan att tydliga förändringar i gränssnittet görs. Dessutom kan TV:ns gränssnitt ibland förbli intakt."]];
var termsTitle = "Villkor";
var termsConditions = ["(Juridiskt uttalande) från TCL - tillverkare av detta TV-set.","På grund av de olika funktionerna i produkter som tillhandahåller Smart-TV - Tjänster, liksom begränsningar i tillgängligt innehåll, är vissa funktioner, program och tjänster kanske inte tillgängliga på alla enheter eller inom alla regioner. Vissa funktioner på Smart-TV kanske även kräver ytterligare kringutrustning eller medlemsavgifter som säljs separat. Besök gärna vår hemsida för mer information om särskild information om enheten och innehållets tillgänglighet. De tjänster och tillgång till innehåll via Smart-TV kan ändras från tid till annan utan föregående meddelande. \n   Allt innehåll och tjänster som är tillgängliga genom denna enhet tillhör tredje part och skyddas av upphovsrätt, patent, varumärken och/eller andra immaterialrättsliga lagar. Sådant innehåll och tjänster tillhandahålls endast för ditt personliga och icke-kommersiella bruk. Du får inte använda något innehåll eller tjänster på ett sätt som inte har godkänts av innehållets ägare eller tjänsteleverantör. Utan att begränsa det föregående, om inte det uttryckligen har godkänts av beträffande innehållsägaren eller tjänsteleverantören får du inte ändra, kopiera, publicera, ladda upp, posta, överföra, översätta, sälja, skapa härledda verk, utnyttja eller distribuera på något sätt eller via något medium något innehåll eller några tjänster som visas via denna enhet. \n   DU UTTRYCKLIGEN BEKRÄFTAR OCH ACCEPTERAR ATT ANVÄNDNING AV ENHETEN ÄR PÅ EGEN RISK OCH ATT HELA RISKEN NÄR DET GÄLLER KVALITET, PRESTANDA OCH NOGGRANNHET LIGGER HOS DIG. ENHETEN OCH ALLT INNEHÅLL FRÅN TREDJE PART OCH ALLA TJÄNSTER TILLHANDAHÅLLS \"I BEFINTLIGT SKICK\" UTAN GARANTI AV NÅGOT SLAG, ANTINGEN UTTRYCKLIGA ELLER UNDERFÖRSTÅDDA. TCL FRÅNSÄGER SIG ALLA GARANTIER OCH VILLKOR FÖR ATT ENHETEN OCH INNEHÅLL OCH TJÄNSTER, VARKEN UTTRYCKLIGA ELLER UNDERFÖRSTÅDDA, INKLUSIVE MEN INTE BEGRÄNSADE TILL, GARANTIER OM SÄLJBARHET, PRESTANDA, LÄMPLIGHET FÖR ETT VISST ÄNDAMÅL, NOGGRANNHET, STÖRNINGSFRI ANVÄNDNING SAMT INTRÅNG I TREDJE PARTS RÄTTIGHETER. TCL GARANTERAR INTE OM NOGGRANNHET, GILTIGHET, LÄMPLIGHET, LAGLIGHET ELLER FULLSTÄNDIGHET AV INNEHÅLL ELLER TJÄNSTER SOM ÄR TILLGÄNGLIGA GENOM DENNA ENHET OCH GÖR GARANTERAR EJ HELLER ATT ENHETEN, INNEHÅLL ELLER TJÄNSTER UPPFYLLER DINA KRAV ELLER ATT ANVÄNDNING AV ENHETEN ELLER TJÄNSTER KOMMER ATT VARA UTAN AVBROTT ELLER FEL. UNDER INGA OMSTÄNDIGHETER, INKLUSIVE VÅRDSLÖSHET, SKA TCL ANSVARA, OAVSETT OM UNDER AVTAL ELLER VID KRÄNKNING, FÖR NÅGRA DIREKTA, INDIREKTA, TILLFÄLLIGA, SÄRSKILDA ELLER INDIREKTA SKADOR, JURIDISKA KOSTNADER, UTGIFTER, ELLER ANDRA SKADOR TILL FÖLJD AV ELLER I SAMBAND MED, NÅGON INFORMATION I, ELLER SOM EN FÖLJD AV ANVÄNDNINGEN AV ENHETEN, ELLER NÅGOT INNEHÅLL ELLER TJÄNST SOM TILLHANDAHÅLLS SOM DU ELLER NÅGON TREDJE PART HADE TILLGÅNG TILL ÄVEN OM DU HAR MEDDELATS OM RISKEN FÖR SÅDANA SKADOR. \n   Tjänster från tredje part kan komma att ändras, tillfälligt upphävas, tas bort, avslutas eller avbrytas, eller tillgången kan inaktiveras när som helst, utan förvarning, och TCL (tillverkare av TV-apparater av varumärket Thomson) gör inga utfästelser eller garantier om att något innehåll eller tjänst kommer att finnas tillgänglig under en viss tid. Innehåll och tjänster överförs av tredje part genom nätverk och anläggningar för överföring som TCL inte rår över. Utan att begränsa allmängiltigheten av denna ansvarsfriskrivning, frånsäger TCL sig uttryckligen allt ansvar för eventuella förändringar, avbrott, frånkoppling, borttagning, eller tillfälligt upphävande av innehåll eller tjänster som är tillgängliga via denna enhet. TCL får införa begränsningar för användningen av eller tillgång till vissa tjänster eller innehåll, i varje fall och utan förvarning eller ansvar. TCL är varken ansvarig eller skadeståndsansvarig för kundservice i samband med innehåll och tjänster. Alla frågor eller begäran om service relaterad till innehåll eller tjänster bör göras direkt till respektive innehåll- och tjänsteleverantörer."];

var noChannelListRemind        = ["Inga kanaler hittas. Kanallista är tillgänglig efter kanal","Kanalsökning"];
var closeSubtitleRemind   = "Funktion tillgänglig då undertext är avstängd. Vill du ställa in nu?";

var estickerTitles = ["Mycket realistiska bilder","Färg som vaknar till liv","Stor naturtrogen rörelse","Dynamisk bildkvalitet","SR UHD uppskalning","Upplev 3D-värld","Snabbare prestanda","Framtida 4K innehåll","Njut av online-världen","Tillgå extra innehåll","Integrerade digitala mottagare","Anslut alla enheter","Olika 4K källor","USB-innehåll","Ultrasnabb WIFI","Mobilt innehåll på TV","Innehåll Mobile-enhet","Lokalt innehåll","Godkänd av DivX","Sömlös bild","Canal Ready","TDT Premium"];
var estickerDescriptions = ["Fantastisk tittarupplevelse tack vare bilder med fyra gånger detaljerna av Full HD på UHD skärm","Brett färgspektra ger känslor i varje scen med livligt rött och smaragdgrönt","4K bild interpolation och bakgrundsbelysning för motverkande av problem med rörelseoskärpa ","Originalbildens livfullhet förbättras för att producera verkligt dynamiskt uttryck med strålande kontrast","Avnjut skarpare än tidigare, TV-program och Blu-ray-skivor tack vare Super Resolution-teknik","Upplev 3D TV-ready och titta på olika 3D-innehåll","Mer njutbar underhållning med Quad Core för smidigt samspel, förbättrat resultat","HEVC (H.265) codec stöd för kommande standard för 4K videodistribution","Rikedom av online-applikationer, VOD-tjänster, catch-up TV och Internet surfning","Se mer med ytterligare tjänster och innehåll från dina favoriter bland programföretagen","Få tillgång till TV-kanaler i HD utan extra digitalbox","Enkel anslutning till flertalet av hemmets digitalkällor","TV-ready för framtiden, klarar uppspelning av 4K 50/60Hz via HDMI 2.0 med HDCP 2.2","Video eller fotoinnehåll direkt från USB drive, HDD eller kamera på stor skärm i upplösning 4K","Senaste generationens 2x2 MIMO och AC-standard ger tillgång till oöverträffad Internet hastighet","Njut av foton, videos, program från mobila enheter på storskärm tack vare skärmspeglings teknik","Foto, video, applikationer från smartphone eller surfplatta kan visas på storbildsskärm","Visa på storbildsskärm lokalt innehåll så som bilder, videos från enheter anslutna till det lokala nätverket","Spela upp hyrt eller eget innehåll som skyddas av DivX","Ultra tunn ram och supertunn design","Testad och godkänd av Canal+","Testad och godkänd av TDT Premium"];							

var eManualTextArray = ["E-Manual","All grafik på insidan är endast avsedd för representation. "];
var frontPanelRemind = "Frampanelen är låst";
var eRPRemind		 = "Butiksläge följer inte ERP-krav?";	
var noRelatedChannel = "Relaterad kanal saknas";
var option0624Name          = ["BOP","BFS","Händelse för händelse","GetUserID","BGM","Reset all","Återställ butik","NRM","DVB-T2 och Land val.","HbbTV-läge"];
var DVBT2AndChoice = ["På","Efter Land","Av"];
var hbbtvServiceRemind = "HbbTV-tjänsten är snart här.";
var insertWord = "För in";			
var viewDetail = "Se detaljer ";							
							

var remindOAD  = "Programuppdatering. En ny rekommenderad programuppdatering kan finnas på en annan kanal. Om du godkänner nerladdning kan kanalen ändras automatiskt. Vill du göra det nu?";

var LEDStatus = ["Blinkar", "Normal","Av"];
var netFlixRemind = "Den här funktionen avbryter åtkomsten till Netflix-tjänsterna tills du loggar in igen.";
var ESNExplanation = "Elektroniskt serienummer";
var resetShopRemind = "Systemet återställs, stäng inte av TV:n";
var initialSelectOption = "Välj ett alternativ:";
var databaseRemind   = "Systemet har upptäckt att databasen är skadad på grund av okänd orsak och skapas om automatiskt. Tryck på OK för att fortsätta";
var Deactivation = "Inaktivering";
var oadFutureRemind = "Programuppdatering. \n En ny rekommenderad mjukvara kommer att bli tillgänglig på %s. Uppdateringen kan ta en stund och bildskärmen kan bli svart. Stäng inte av mottagaren under uppdateringen. Om du godkänner uppdateringen, ber vi dig lämna mottagaren på vid planerad tid. Vill du uppdatera nu?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Ljudutgång";
var bt_soundOutPutTV = "Tv högt.";
var bt_soundOutPutBT = "Bluetooth-enhet";
var bt_soundOutPutBT_TV = "Bluetooth och TV";
var bt_refreshBarName = "Enheter";
var bt_settingTips_On = "Aktivera Bluetooth-funkt. och skanna enheter.";
var bt_settingTips_Finding = "Söker tillgängl. enheter..";
var bt_settingTips_NoDevice = "Tillg. enhet saknas.";
var bt_deviceList_State_NoConnect = "Ej ansluten";
var bt_deviceList_State_Connecting = "Ansluter…";
var bt_deviceList_State_Connected = "Ansluten";
var bt_deviceList_State_Paired = "Parad";
var bt_deviceList_Conncect_Failed_Tips1 = "Ansl. misslyckad.";
var bt_deviceList_Conncect_Failed_Tips2 = "Bekräfta att XXX Bluetooth-funktion är på";
var bt_deviceList_Conncect_Success = "Ansluten till Bluetooth-enhet.";
var bt_deviceList_Disconncect_Success = "Frånkopplad från Bluetooth-enhet.";
var bt_deviceList_Disconnect = "Är du säker på att du vill koppla ifrån XXX?";
var bt_tipsTitle = "Tips";
var bt_bluetooth_Pairing_Title = "Bluetooth-parning";
var bt_bluetooth_Input_Pin = "Ange PIN:";
var bt_bluetooth_Output_Pin_Tip = "Ange PIN XXXX via keyboard.";
var bt_bluetooth_Pin_Wrong_Tip = "Fel PIN";
var bt_bluetooth_Remove_Pair_Title = "Fråga";
var bt_bluetooth_Remove_Pair_Ask = "Glöm denna enhet?";
							
var audioDescriptionName = ["Ljudbeskrivning","Högtalare","Högtalarvolym","Hörlur","Hörlursvolym","AD volym","BT-enhet","BT-enhetsvolym","Förstärkare","Högtalare"];
var audioDescriptionOptions = ["Av","Normal","Ljudbeskrivning"];
var volumeOffRemind = 'Ange XXX “På” i inställningsmenyn.';
var switchSourceRemind   = " infogad. Vill du växla nu?";
var footballModeName = "Sportläge";
var resetStadium = "Stadium";

var atvSearchMenu = "ATV manual search";
var dtvSearchMenu = "DTV manual search";
var settingNoticeSourceName ="Auto-källa";

var smartTVOptions		= ["Smart TV-portal","HbbTV","Dela & se","WiFi-visning","Regler och villkor",
    "Nätverk i standby","Återställ smart-TV","Cookie policy","Integritetspolicy","Radering av data"];
var supportOptions		= ["Fjärrdiagnos","Kontakta oss"];
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
							
var tvDoctor=["Fjärrdiagnos 2.0",
"Apparna fungerar bara för din Smart-TV för att köra diagnostiska kontroller och förbättra produktupplevelsen. TV-användningsdata och modellinformation samlas in av den här appen, överförs till servern och används för att lösa TV-problem. Din personliga information blir inte tillgänglig. Se till att din TV är korrekt ansluten till internet.",
"Lokal diagnos",
"När diagnosen startar ska du följa anvisningarna från vår supporttekniker.",
"Fjärrdiagnos",
"Se till att vår supporttekniker är online före användningen.",
"Serienummer:",
"&nbsp;&nbsp;&nbsp;&nbsp;Användar-ID:",
"Ansluter…",
"Diagnosen pågår. Håll nätverket uppkopplat. ",
"Kan inte öppna internet, \nkontrollera nätverksanslutningen.",
"Avsluta"
];
var contactUsOption = ["Kontakta oss",
    "Kontakta oss om du har problem med att använda den här enheten.",
    "Kontakta oss",
    "Webbplats: Besök",
    "Nummer till kundcenter:","Produktinformation","Modellnamn:",
    "Programversion:","","Användar-ID:","Projekt-id:",
    "Klienttyp:","Trådlös MAC-adress:","Kabel-MAC-adress:","Netflix ESN:","Sök informationen i mobiltelefonen.",
    " och välj ditt land."];


//本地launcher的翻译，与服务器无关，只用于本地launcher
var homePageWords = ["Historik", "Sök"];//home页的翻译
var titlePageWords = ["Hem", "Videor","TV","Appar"];//index的标题翻译
var videosPageWords = ["Film", "Sport","Musik","Populär","Spel","Ubildning","Nyheter"];//videos页的内容翻译

//同时应用于本地和服务器
var statusPageWords = ["USB","Inställningar","WiFi","Kabel"];//状态栏的翻译

//二级页面的翻译
var searchPageWords = ["Sök", "Populära sökningar:","Program, filmer personer ..."];
var resultSearchPageWords = ["Resultat för"," ","Försök med andra nyckelord.","Tyvärr har ingen video hittats med  "," "];
var historyPageWords = ["Historik", 'Tryck på','för att radera historiken',"Radera ett","Radera alla","Igår","Idag"," Du har inte tittat på någon video än.","Visningshistoriken har raderats!"];
var channelPageWords = ["Ingen video har hittats än."];


//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9",
                       	   "Zoom-","0","Zoom+",
                       	   "Avsluta","0","",
                       	   "Lista","0","Text",
                       	   "Guide","Gå in","Avsluta",
                       	   "Meny","Undertexter","Info",
                       	   "Stopp",
                       	   "Info","Menu","Avsluta",
                       	   "Avsluta"
                       	   ];	

//added for LA sports mode
var sportsModeInitReminds= ["Den här guiden används för att konfigurera USB-enheten för sportläge. Välj installationsläge.",
						 "Välj filstorlek för sportläge.",
						 "Skapa fil för sportläge",
						 "USB-enhetshastigheten är för långsam (< %f MB/sek) för sportlägesfunktionen!",
						 "USB-enheten är redo för sportläge. Vi rekommenderar byte (till hastighet > %f MB/sek) för bättre prestanda.",
						 "USB-enheten är redo för sportläge."];

var sportsModeExtra	= ["Vill du stoppa sportläget och byta kanal?",
						"Vill du stoppa sportläget och ändra källan för den anslutna enheten till SCART-ingång?",
						"Vill du stopp sportläget och ändra källan för den anslutna enheten till HDMI-ingång?",
						"Sportläget stöds inte för kodad kanal.",
						"Vill du stoppa sportläget och öppna EPG?",
						"Vill du stoppa sportläget och öppna mediet?",
						"Vill du stoppa sportläget och ändra ingångskälla?",
						"TV will end the current Sports Mode. Vill du avsluta?"];
var remoteControlNote = "- Den medföljande fjärrkontrollen kan variera beroende på produktmodellen";


var textArray = ["Volume","Channel","Source","Switch/Power","Guide","seconds to Power OFF"];
var guideArray = ["VOL-","VOL+","CH-","CH+","Pre","Next"];
var favChannelListRemind = ["Inga favoritkanaler. Gå till andra listor och använd den “gröna tangenten” för att lägga till favoritkanaler."];

var proxySetting = ["Proxyinställningar","Port"];
var powerOffShop = ["Rekommenderar att du använder butiksläge. Vill du göra det?"];
var tcastTextPageWords = ["Många videor, rika applikationer","TV:ns fjärrkontroll, precis vid dina fingertoppar","Bra innehåll, dela på en stor skärm"];
var tcastOtherWords = ["SKANNA QR-koden och hämta T-CAST","Nätverk anslutet till tv:n","Tv-namn","T-Cast"];
var hbbtvWords = ["Hbbtv-inställningen","HbbTV","Cookies","Tredje part cookies","Enhets-ID","sökning"];
var hbbtvTrackingWords = ["YES","NO","Strunta i det"];
var eStickerTipWords = ["Lagringsutrymmer är under 400M, vill du radera videoklippen i Demo-läget för att få mer utrymme?"];
var delEstickerVideoRemid = ["Videoklippet har raderats"];
var selectSatRemind = "Du kan inte välja mer än 20 satelliter!";
var cookiePolicyTitle = "Cookiepolicy – Online Smart TV-Tjänster";
var cookiePolicyConditions = ["Bolaget respekterar din integritet vid användning av Smart TV:ar tillverkade av och Tjänster tillhandahållna av Bolaget. Cookies används av många webbsidor och andra Internettjänster och din Smart TV kommer att acceptera, lagra och överföra cookies för att säkerställa att webbsidor och tjänster fungerar korrekt. Bolaget använder även cookies vid tillhandhållandet av Tjänster. I denna Cookiepolicy beskriver Bolaget vilka cookies som placeras på din Smart TV och hur du hanterar dessa.\nVänligen uppmärksamma att alla personuppgifter som Bolaget samlar in och/eller behandlar genom eller med hjälp av cookies regleras av Integritetspolicyn och du bör läsa Cookiepolicyn tillsammans med Integritetspolicyn.\n1. Vad är en cookie?\nCookies är små textfiler som kan placeras på din Smart TV. När en webbsida eller röd-knapp-tjänsten hos en TV-station besöks/används, kan webbsidan eller tjänsten lagra en cookie i Smart TV:n. Vid efterföljande åtkomster kommer en cookie som placerats på din Smart TV skicka information till parten som har placerat cookien. Cookies är extremt vanliga och används på flertalet webbsidor och tjänster. Varje cookie innehåller vanligtvis namn på domänen som cookien kommer ifrån, ”livstiden” för cookien samt värdet (vanligtvis ett unikt nummer). För en mer djupgående förklaring av vad cookies är och hur de fungerar, se www.allaboutcookies.org.\nCookies kan delas in i funktionscookies och icke-funktionscookies. Funktionscookies är cookies som är nödvändiga för att förse dig med Smart TV-tjänsterna och för webbsidor och andra tjänster att tillhandahålla rätt innehåll till Smart TV:n. Icke-funktionscookies är alla andra cookies.\nDenna Cookiepolicy berör cookies som placeras av oss och annonscookies som kan placeras av tredje part genom våra tjänster på din Smart TV. Denna Cookiepolicy berör inte cookies som kan placeras när du använder Smart TV-tjänsterna för att komma åt tredje parts webbsidor, tjänster eller applikationer. För dessa cookies hänvisar vi dig till respektive cookiepolicy för sådan tredje part. Denna Cookiepolicy beskriver dock hur du tar bort sådana cookies (se punkt 4 nedan).\n2. Vilka icke-funktionscookies använder vi?\nAnnonsering: Annonser i video och annonser som visas på skärm kan tillhandahållas till din Smart TV vid användning av Smart TV-tjänster. Dessa annonser kan tillhandahållas av oss eller tredje part via, eller på sådant sätt som de koordineras av vår annonsserver, vilken utför en central koordinerande roll i samband med tillhandahållandet av sådana annonser. Vår annonsserver eller en tredje parts annonsserver kommer att placera en cookie på din Smart TV. Genom denna cookie kommer en annonsserver att registrera huruvida en annons har tillhandahållits till din Smart TV eller om någon som använder din Smart TV har klickat på en annons. Vi använder informationen som sparas i en sådan annonscookie för att komma ihåg vilka annonser som har tillhandahållits på din Smart TV så att vi kan säkerställa att inte för många likadana annonser tillhandahålls på en specifik Smart TV och att vi kan reglera våra kommersiella förhållanden med våra annonseringsparterns. Vi använder inte denna information för att tillhandahålla riktade annonser. Därutöver kan tredje part använda vårt annonssystem för att tillhandahålla annonser på din Smart TV och placera cookies på din Smart TV när sådana annonser tillhandahålls.\nDessa cookies innehåller, bland annat, information om de tillhandahållna annonserna, information om i vilken applikation eller domän sådana annonser har tillhandahållits samt din IP-adress. Detta görs för att komma ihåg hur ofta en specifik annons har visats samt för att hindra att samma annons visas för ofta. Externa tredjepartsannonsörer som kan placera annonser kan också använda cookies för att följa din aktivitet mellan flera webbsidor samt för att tillhandahålla annonser som motsvarar dina personliga preferenser.\n3. Tredje parts webbsidor\nNär du besöker webbsidor eller tjänster från tredje part genom Smart TV-tjänsterna i din Smart TV är det möjligt att sådana webbsidor och tjänster placerar cookies på din Smart TV samt att sådana webbsidor följer och sparar dina interaktioner på sådana webbsidor. Vi begär inte och uppmuntrar inte sådana aktiviteter och använder inte sådan information. Se respektive cookie- och integritetspolicy för sådana webbsidor och tjänster för mer information om sådana parters användning av sådana cookies.\n4. Borttagning av cookies\nDitt användargränssnitt på din Smart TV gör det möjligt för dig att ta bort alla cookies och annan lokal webbläsarlagring från din Smart TV. Det rekommenderas starkt att alla cookies och lokalt sparade inställningar tas bort innan din Smart TV säljs eller ges bort.\n5. Kontakta oss\nOm du har frågor eller synpunkter avseende vår Cookiepolicy eller vår användning av cookies kan du skicka ett e-postmeddelande till oss på FRsupport@tcl.com.\nVersion: 1.0\n"];
var privacyPolicyTitle = "Integritetspolicy – Online Smart TV-Tjänster";
var privacyPolicyConditions = ["Vi respekterar din integritet vid hanteringen av dina personuppgifter. Denna Integritetspolicy beskriver vilken part som ansvarar för insamling, behandling och användning av personuppgifter som vi samlar in från dig i samband med din användning av våra Smart TV-tjänster (”Tjänster”), vilka typer av personuppgifter vi samlar in om dig, vad vi gör med dessa samt dina rättigheter i förhållande till vår användning av personuppgifterna. \n1. Personuppgiftsansvarig\nInsamlingen, behandlingen och användningen av personuppgifter som samlas in från dig när du använder Tjänsterna utförs av Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, Kina (\"Bolaget\"). Vänligen uppmärksamma att vi inte är ansvariga för all uppgiftsbehandling som framgår nedan. Vi har oaktat detta inkluderat en beskrivning av dessa aktiviteter i vår Integritetspolicy för att denna behandling sker i samband med din användning av Smart TV:n.\n2. Samtycke till personuppgiftsbehandling\nViss insamling, behandling och/eller användning av dina personuppgifter kräver samtycke. \nOm du har samtyckt till användning av dina personuppgifter för förbättring av Tjänsterna hade ditt samtycke följande formulering:\n\"Jag samtycker till insamlingen, behandlingen och användningen av min enhets starttid, DTV-kanallista, favoritkanallista, besökstid samt kanaler som tittats på i syfte att analysera användarbeteende och förbättra tjänsterna och/eller analysera hur manga onlineanvändare Bolaget har per dag/månad/år och att denna information delas med TV-stationer.\"\nOm du har samtyckt till användning av dina personuppgifter för annonser som anpassas efter dina intressen hade ditt samtycke följande formulering:\n\"Jag samtycker till insamlingen, behandlingen och användningen av min klienttyp och land i syfte att motta lämpliga annonser\"\nSamtycke är frivilligt och du kommer fortfarande att kunna använda Tjänsterna om du inte samtycker. Du kan dock få se annonser och annat innehåll som inte har anpassats efter dina preferenser. Oavsett om du samtycker förbehåller sig Bolaget rätten att samla in, behandla och/eller använda uppgifterna ovan i den utsträckning som tillåts enligt tillämplig lag.\nDu kan när som helst återkalla ditt samtycke enligt ovan med framtida verkan. Du kan motsätta dig användning av dina personuppgifter för marknadsföring, marknads- eller opinionsundersökning samt anpassningen av Tjänsterna efter dina behov. Ändra integritetsinställningarna på din Smart TV för att dra tillbaka ditt samtycke och/eller motsätta dig användning.\n3. Personuppgifter som samlas in\nOavsett om du samtycker samlar Bolaget in, behandlar, lagrar och använder följande typer av uppgifter:\nEnhets-ID: Din Smart TV lagrar ett bestämt unikt nummer som gör det möjligt för oss att autentisera Smart TV:n när du använder Tjänsterna. Detta nummer kallas Enhets-ID. Enhets-ID:et kommer att delas med vår tjänstepartner för att förse dig med Tjänsterna. Vi delar även Enhets-ID med till utvalda innehållspartners i autentiseringsyfte. Dessa innehållspartners använder Enhets-ID:et för att autentisera din Smart TV för tillgång till tjänster som tillhandahålls av en innehållspartner.\nIP-adress och MAC-adress: Din Smart TV kommer att tilldelas en IP-adress vid anslutning till Internet. Denna IP-adress kommer att skickas till oss och behandlas varje gång Smart TV:n begär information eller uppgifter från Tjänsterna. Om din Smart TV sitter bakom en router (t.ex. i ett lokalt hemnätverk eller lokalt WLAN), kan vi komma att samla in och behandla sådan routers IP-adress. MAC-adressen är ett unikt nummer som tilldelas för varje nätverksgränssnitt hos din Smart TV. MAC-adressen kommer också att samlas in och behandlas av oss när Smart TV:n begär information eller uppgifter från Tjänsterna.\nUppgifter vid begäran om tjänst: När du ansluter din Smart TV till Internet och sätter på Smart TV:n kommer den automatiskt att ansluta till Tjänsterna som hanteras av vår tjänstepartner. Din Smart TV kommer då att autentiseras som berättigad att komma åt Tjänsterna. I autentiseringssyfte lagrar Tjänsterna en eller flera unika numeriska identifierare relaterade till din Smart TV. Vid anslutning till Tjänsterna kommer Smart TV:n att skicka IP-adressen den har tilldelats och enhetsspecifik information (Smart TV-modell, mjukvaruversion) för att se om mjukvaruuppdateringar finns tillgängliga.\nInställningar för tjänst: Som ett del av den vanliga funktionaliteten för Tjänsterna kan du manuellt justera ordningen som appar visas av Tjänsterna. Vår tjänstepartner kommer att lagra ordningen och andra preferenser du ställer in när du använder Tjänsterna. Denna information kommer att kopplas ihop med Enhets-ID.\nEnhetsspecifik information: Smart TV:n lagrar information om sig själv och dess konfiguration. Denna information inkluderar Smart TV-typ, Smart TV:ns operativsystemversion, skärmupplösning, projekt-ID (d.v.s. information om konfigurationsfiler), användaragent, webbläsarnamn, webbläsarversion samt språket och landet som har konfigurerats i Smart TV:n. Denna information kommer att användas av oss och kommer att delas med vår tjänstepartner och innehållspartners.\nAnnonsering: Tjänsterna kan komma att tillhandahålla annonser. Dessa annonser tillhandahålls av oss eller av tredje part som använder annonssamlingen som tilldelats av oss. Alla annonser tillhandahålls genom, eller via, vår annonsserver som utför en koordinerande roll för tillhandahållandet av annonser. Vår annonsserver eller tredje parts annonsserver kan placera en cookie på Smart TV:n. Se vår Cookiepolicy för mer information om dessa cookies.\nTjänste- och innehållspartnertrafik: När du använder Tjänsterna kommer din Smart TV att fråga efter uppgifter från Tjänsterna genom Internet. Som en del av dessa förfrågningar kommer din IP-adress som beskrivs ovan och språk och land som har konfigurerats i din Smart TV att skickas till vår tjänstepartner. Vår tjänstepartner kommer att behandla uppgifterna i enlighet med dess integritetspolicy.\nAnvändning av en andra skärm: Om du använder vår andra-skärm-applikation kommer kontrollerna du aktiverar i applikationen och lands- och språkinställningarna, DTV-kanallista, favoritkanallistor, schemalistor, Enhets-ID, nuvarande kanal, protokollversion och IP-adress för din Smart TV samlas in och behandlas av oss på våra servrar. Våra servrar kommer då att styra din Smart TV på det sätt du gör i andra-skärm-applikationen.\nHbbTV - \"Röd Knapp\": TV-stationer (\"Stationer\") kan skicka ytterligare information med sina TV-signaler. Om Smart TV:n tar emot specifika instruktioner i sådan ytterligare information och om den är ansluten till Internet, kommer Smart TV:n att ladda ner en bild eller liten sida från Stationens webbsida och visa den tillsammans med information om att trycka på den ”Röda Knappen” på din fjärrkontroll om du vill använda ytteligare tjänster som tillhandahålls av Stationen. Detta händer varje gång du zappar. Nedladdning av bilden från Stationens webbsida kommer att innebära överföring av vissa personuppgifter, d.v.s. DTV-kanallistan, nuvarande kanal, informationstabell för evenemang, TV-tid, IP-adress för din Smart TV och cookies som lagras på din Smart TV (om några). Stationen ansvarar för insamlingen, behandlingen och /eller användning av dessa uppgifter. Därutöver kan Stationen samla in andra personuppgifter om dig (t.ex. vilka on-demand-videor du tittar på, nyheter du läser, etc.) om du använder ytterligare tjänster som erbjuds av en station genom den Röda Knappen.\n4. Syften för vilka vi behandlar och/eller använder dina personuppgifter\nVi behandlar insamlade uppgifter för följande syften:\n• Tillhandahålla Tjänsterna: Vi använder IP-adressen och MAC-adressen, Enhets-ID, Smart TV:ns operativsystemversion, klienttyp för din Smart TV och dess skärmupplösning, projekt-ID (d.v.s. information om konfigurationsfiler), din DTV-kanallista, kanaler som tittats på, tidszon, land- och språkinställningar för att förse din Smart TV med tillgång till Tjänsterna och tjänsterna som tillhandahålls av våra innehållspartners. Dessa syften inkluderar (men begränsas inte till) autentisering, tillhandahållande av platsbaserade tjänster till dig (t.ex. väderprognoser); hantering av missbruk, hantering av säkerhetsincidenter, övervakning av tillgänglighet för Tjänsterna samt tillhandahållande av säkerhetskopieringstjänster för användarpreferenser. \n• Autentisering: Vi använder Enhets-ID och MAC-adress i autentiseringssyfte.\n• Mjukvaruuppdateringar: Varje gång din Smart TV sätts på kommer den att förse oss med IP-adress, Enhets-ID, mjukvaruversion, klienttyp för din Smart TV, projekt-ID (d.v.s. konfigurationsfiler), användar-ID och serienummer för att erbjuda dig och tillhandahålla lämpliga mjukvaruuppdateringar. \n• Förbättring av Tjänsterna: Vi använder aggregerad och anonymiserade uppgifter om användning (d.v.s. uppgifter om din interaktion med Tjänsterna) för att förbättra användarupplevelsen för Tjänsterna.\n• Tillhandahållande av annonser: Vi använder information i annonscookies för att möjliggöra att systemet loggar vilka annonser som har visats på din Smart TV för att säkerställa att du inte får för många liknande annonser och för att vi ska kunna reglera våra kommersiella förhållanden med våra annonseringspartners. Externa annonsörer som tillhandahåller annonser i Tjänsterna eller på innehållspartners webbsidor efter koordinering genom vår annonsserver kan också placera cookies för att följa dig mellan flera webbsidor och för att tillhandahålla annonser som speglar dina personliga preferenser.\n• Optimering av annonser: Vi använder uppgifter relaterade till annonsvisningar och klick på annonser för att optimera annonsupplevelsen för konsumenter i Tjänsten.\n• Rabatter: Vi delar Enhets-ID med utvalda innehållspartners för att möjliggöra för dessa partners att identifiera i vilken utsträckning de kan förse dig med gratis tillgång till Video on Demand-material i deras samling.\n• Brottsbekämpning: Vi kan vara tvungna att förse brottsbekämpande myndigheter eller domstolar med uppgifter. Om vi gör det kommer vi endast att göra det i enlighet med ett rättslig bindande dokument exempelvis ett domstolsbeslut som kräver att vi samarbetar med relevant myndighet.\nDet är möjligt att använda Tjänsterna under pseudonym om inte specifika tjänster kräver att du anger ditt namn och/eller e-postadress.\n5. Kategorier av mottagare\nBolaget delar endast dina personuppgifter som samlas in vid din användning av Tjänsterna till följande tredje parter:\n• Med tredjepartsleverantörer av Smart TV-tjänster om du begär sådana tjänster (t.ex. om du startar Netflix-applikationen på din Smart TV kan vi dela din IP-adress, MAC-adress, mjukvaruversion och TV-modellnamn med Netflix).\n• Med tredjepartsinnehållsleverantörer om du begär särskilt innehåll som tillhandahålls av sådana innehållspartners (t.ex. för att förse dig med GoLive IP-TV-tjänst kan vi dela din TV-klienttyp, IP-adress och språkinställning med den juridiska person som tillhandahåller GoLive-tjänsten).\n• I den utsträckning som du har samtyckt till att dela specifika personuppgifter med tredje part ovan kommer Bolaget att dela dina personuppgifter med sådan tredje part.\n• Med outsourcingtjänsteleverantörer som agerar som biträden och hjälper Bolaget att tillhandahålla Tjänsterna.\nBolaget delar dina personuppgifter med andra tredje parter endast om Bolaget är skyldigt att göra så baserat på lagkrav (t.ex. till domstolar eller åklagarmyndigheter), om du har samtyckt till att delning sker eller om delning på annan grund är tillåten enligt tillämplig lag.\n6. Länder där dina personuppgifter kommer att behandlas\nBolaget och/eller vissa av mottagarna av dina personuppgifter som anges ovan kan vara baserade utanför Europeiska ekonomiska samarbetsområdet (d.v.s. i följande länder: Folkrepubliken Kina, Amerikas Förenta Stater). Därför kan dina personuppgifter komma att behandlas i länder som inte har erkänts ha ett adekvat skydd för personuppgifter i enlighet med Europaparlamentets och Rådets Direktiv 95/46/EG av den 24 oktober 1995 om skydd för enskilda personer med avseende på behandling av personuppgifter och om det fria flödet av sådana uppgifter.\n7. Dina rättigheter\nDu kan kontakta Bolaget för att få information om dina personuppgifter som behandlas av Bolaget och/eller för att utöva dina lagstadgade rättigheter avseende rättelse, borttagning och blockering av dina personuppgifter; och/eller för att motsätta dig behandling av dina personuppgifter för marknadsföring och/eller marknads- och opinionsundersökningar. För att utöva din lagstadgade rätt till tillgång till personuppgifter kan du göra detta gratis en gång årligen genom att skicka en undertecknad och skriftlig begäran till [INSERT APPLICABLE POSTAL ADDRESS].\n8. Ändringar av Integritetspolicyn\nFör att förbättra våra Tjänster kan vi behöva göra justeringar av denna Integritetspolicy – t.ex. vid införande av ny teknologi eller lansering av nya tjänster. Vi förbehåller oss rätten att när som helst ändra eller göra tillägg till denna Integritetspolicy.\n9. Kontaktuppgifter\nOm du har frågor om denna Integritetspolicy eller om du vill framföra klagomål avseende vår behandling av dina personuppgifter, vänligen kontakta oss genom att använda någon av följande kontaktuppgifter:\nE-post: FRsupport@tcl.com\nVersion: 1.0\n"];
var privacyPolicyTerms = [
    "Aktivera Smart TV-tjänst.",
    "Jag godkänner insamling, behandling och användning av min enhets starttid, DTV-kanallista, favoritkanallista, besökstid och visade kanaler i syfte att analysera användarvanor för att förbättra tjänsterna och/eller analysera hur många online-användare TCL har per dag/månad/år och delning av den här informationen med TV-kanaler.",
    "Aktivera rekommendationstjänst.",
    "Aktivera andra skärmapplikation för mobila enheter.",
    "Aktivera automatiska mjukvaruuppdateringar.",
    "Aktivera FreeviewPlay-tjänst."
];
var privacyPolicyTips = [
    "Alla Smart TV-tjänster inaktiveras.",
    "HbbTV-tjänsten som tillhandahålls av TV-kanalerna när den inbyggda tunern används kommer att inaktiveras.",
    "Innehåll ochTV-programrekommendationstjänsten inaktiveras.",
    "Andra skärmapplikation inaktiveras.",
    "TV:n söker inte automatiskt efter mjukvaruuppdateringar och nya funktioner.",
    "FreeviewPlay-innehåll kommer att inaktiveras."
];
var privacyPolicyRemind = "Markera motsvarande kryssrutan i inställningar.";
var set = "konfigurera";
var copyShopDemoTips = ["Ansluten till USB. Vill vill du kopiera videon till flashminnet?","Kopiera videon till flashminnet","Videon har kopierats!","Fel vid kopiering av video!"];
var dataDeletionWords = ["Radera dina data från Smart TV-tjänsten i back-end-servrarna.","Anteckning: Uppgifterna om din användare av smart TV kommer att raderas om en månad efter att du markerat objektet. Observera att raderingen inte påverkar de lokala data som är lagrade på din TV.","Rapporterar inte längre data till Smart TV-servern.","Anteckning:  Dina data i samband med användningen av Smart TV-tjänster överförs inte längre till servern när du markerat det här objektet. Din TV kommer inte längre att kunna ta emot rekommenderade tjänster.","Om du vill veta mer, besök webbplatsen www.tcl.eu"];
var miracastWords = ["Trådlös anslutning","Spegla Android-telefon med TV","Klicka för att ansluta","Funktionen är endast tillgänglig på Android-telefoner"];
var miracastTips = ["Anslutning","Öppna systeminställningar","Fler anslutningsalternativ \n / Andra trådlösa anslutningar","Välj trådlös skärm","Klicka för att ansluta \n väntar på att hittas"];

var termsAndConditions = ["\nInnehållet och tjänsterna (gemensamt benämnda den “Licensierade Applikationen”) som tillhandahålls genom detta TV-paket ( “Enheten”) är licensierade, det vill säga inte sålda, och tillhandahålls för din användning i enlighet med dessa Allmänna Villkor. Leverantörerna av den Licensierade Applikationen (var för sig “Applikationsleverantör”) förbehåller sig alla rättigheter som inte uttryckligen har beviljats dig. \n\n1.	Licensens omfattning\n\nDen licens som du tillhandahålls för den Licensierade Applikationen av Applikationsleverantören är begränsad till en icke-överlåtbar licens att använda den Licensierade Applikationen på den Enhet som du äger eller kontrollerar. Du har inte rätt att distribuera eller göra den Licensierade Applikationen tillgänglig över ett nätverk där den skulle kunna användas av flera apparater samtidigt. Du har inte heller rätt att hyra, upplåta, låna ut, sälja, dela ut eller sublicensiera den Licensierade Applikationen. \n\nAlla Licensierade Applikationer och dess inkluderade innehåll tillhör Applikationsleverantörerna och omfattas och är skyddat av tillämpliga immaterialrättsliga lagar.  Om inte annat anges i tillämplig lag, har du inte rätt att ändra, kopiera, dekompilera, kopiera genom rekonstruktion (”reverse engineer”), nedmontera, återpublicera, ladda upp, posta, överföra, översätta, försöka få tillgång till källkoden för, skapa härledda verk av eller annars exploatera någon Licensierad Applikation, eller delar eller uppdateringar av detsamma. Om du bryter mot denna bestämmelse, kan du komma att åtalas och bli föremål för skadeståndsanspråk. Villkoren för licensen gäller för samtliga uppdateringar som ersätter eller kompletterar den ursprungliga Licensierade Applikationen och som tillhandahålls av Applikationsleverantören, om inte sådan uppdatering åtföljs av en separat licens. I så fall gäller villkoren enligt sådan separat licens. Du ansvarar för eventuella kostnader i samband med uppgradering av den Licensierade Applikationen. \n\n2.	Tredjepartsmaterial\n\nDen Licensierade Applikationen kan ge tillgång till Applikationsleverantörens och tredje parts tjänster och webbplatser (gemensamt “Tjänsterna”). Genom att använda någon av Tjänsterna, kan du komma i kontakt med innehåll som kan anses vara stötande, olämpligt eller obehagligt, och som kan innehålla explicit språk och resultaten av sökningar eller av att ange en URL kan automatiskt och oavsiktligt generera länkar eller referenser till stötande material. Tillverkaren av denna Enhet (“Tillverkaren”) och Applikationsleverantören ansvarar dock inte gentemot dig för innehåll som kan uppfattas som stötande, olämpligt eller obehagligt. \n\nTillverkaren ansvarar inte för att undersöka eller utvärdera Tjänsternas innehåll, eller dess lämplighet, fullständighet, tidsenlighet, giltighet, förenlighet med upphovsrätt, laglighet, kvalitet eller någon annan aspekt av Tjänsterna. Tillverkaren lämnar inga garantier eller rekommendationer avseende Tjänsterna och åtar sig inget ansvar relaterat till Tjänsterna gentemot dig eller någon annan person. \n\nTjänsterna kan innehålla innehåll, information och material  som är föremål för upphovsrätt och som skyddas av tillämpliga immaterialrättsliga eller andra lagar   (gemensamt “Tredjepartsmaterial”). Du får inte använda Tredjepartsmaterial för något annat ändamål än för tillåten användning av Tjänsterna. Om inte annat anges enligt tillämplig lag, har du inte rätt att återskapa, ändra, hyra ut, leasa, låna, sälja eller distribuera Tredjepartsmaterial eller att på något sätt skapa därav härledda verk. Du har heller inte rätt att exploatera Tjänsterna på något sätt. Du har inte rätt att använda Tjänsterna för att på något sätt trakassera, utnyttja, förfölja, hota, förtala eller annars inkräkta på eller kränka annans rätt. Tillverkaren ansvarar inte i något fall för sådan användning från din sida eller för trakasserande, hotfulla, förtalande, stötande eller olagliga meddelanden eller överföringar som du mottar till följd av användning av Tjänsterna. \n\n3.	Ingen garanti\n\nAlla Licensierade Applikationer och Tjänster tillhandahålls i befintligt skick utan några som helst uttryckliga eller underförstådda garantier. Tillverkaren frånsäger sig därmed alla uttryckliga eller underförstådda garantier och förutsättningar relaterat till de Licensierade Applikationerna och Tjänsterna, inklusive men inte begränsat till marknadsmässighet, tillfredsställande kvalitet, lämplighet för visst ändamål, lämplighet, störningsfri upplevelse samt att intrång inte sker i tredje parts immateriella rättigheter. Tillverkaren garanterar inte lämplighet, giltighet, punktlighet, laglighet, eller fullständighet för någon Licensierad Applikation eller Tjänst som tillgängliggörs via Enheten och garanterar inte att Enheten, de Licensierade Applikationerna eller Tjänsterna uppfyller dina krav, eller att de Licensierade Applikationerna eller Tjänsterna kommer att fungera oavbrutet eller felfritt eller att fel i de Licensierade Applikationerna eller Tjänsterna kommer att åtgärdas. Om den Licensierade Applikationen eller Tjänsterna visar sig vara felaktiga, ansvarar du för hela kostnaden för all service, reparation eller korrigering. \n\nDe Licensierade Applikationerna eller Tjänsterna kan komma att ändras, avbrytas, tas bort, avslutas eller avbrytas, samt att tillgången till desamma kan kopplas ur när som helst, utan varsel. Tillverkaren lämnar inga utfästelser eller garantier att något innehåll eller någon tjänst som ingår i de Licensierade Applikationerna eller Tjänsterna kommer att förbli tillgängliga under någon tidsperiod. Sådant innehåll och sådana tjänster överförs av tredje parter via nätverk och överföringsresurser som Tillverkaren inte har kontroll över. Utan att begränsa vad som sägs i det föregående, frånsäger sig Tillverkaren allt ansvar för ändringar, avbrott, avaktivering, borttagning eller inställelse av något innehåll eller tjänst som tillgängliggörs genom denna Enhet. Applikationsleverantören och andra leverantörer av Tjänster förbehåller sig rätten att när som helst utan föregående varsel ändra, avbryta, ta bort eller avaktivera tillgång till de Licensierade Applikationerna eller Tjänsterna. Tillverkaren kan också införa begränsningar i användning av eller tillgång till Licensierade Applikationer eller Tjänster utan föregående varsel eller ansvar. \n\nTillverkaren tillhandahåller ingen kundtjänst för de Licensierade Applikationerna eller Tjänsterna. Frågor och krav som rör de Licensierade Applikationerna och Tjänsterna ska riktas direkt till respektive leverantör. \n\n4.	Insamling och användning av information\n\nTillverkaren, Applikationsleverantörerna och leverantörer av Tjänsterna kan samla in och använda teknisk data och därtill relaterad information, inklusive men inte begränsat till teknisk information om denna Enhet, system, applikationsmjukvara och kringutrustning, för att förbättra tillhandahållandet av mjukvaruuppdateringar, produktsupport och andra tjänster (om sådana finns) som är förknippade med Enheten och den Licensierade Applikationen. Tillverkaren, Applikationsleverantörerna och leverantörer av Tjänster kan använda sådan information, i en form som inte går att härleda till dig, i syfte att förbättra sina produkter eller för att tillhandahålla tjänster eller teknologier till dig. För mer information om insamling och användning av information, vänligen besök vår integritetspolicy http://www.tcl.eu/en/. \n\n5.	Otillgänglighet för vissa funktioner \n\nPå grund av restriktioner från Applikationsleverantören kan vissa funktioner, applikationer och tjänster vara otillgängliga på denna Enhet (inklusive dess kringutrustning) eller i alla territorier. Vissa funktioner på denna Enhet kan också kräva ytterligare kringutrustning eller medlemsavgifter som säljs separat. \n\n6.	Ansvarsbegränsning\n\nI den utsträckning det är tillåtet enligt tillämplig lag, frånsäger sig Tillverkaren under alla omständigheter allt ansvar för alla typer av kontraktuella eller utomobligatoriska, direkta eller indirekta skador (inklusive ombudskostnader och utgifter) som kan uppstå för dig eller tredje part i samband med eller på grund av information som finns i Enheten, Licensierad Applikation eller Tjänst eller som annars uppstår på grund av dess användning. Ansvarsbegränsningen gäller oavsett ifall upplysning avseende risken för att aktuell skada kan uppstå har lämnats eller inte.\n\nTillverkaren ansvarar endast för skador orsakade av uppsåt eller grov oaktsamhet."];
var privacyNotice = ["\n\nVi respekterar din integritet vid hanteringen av dina personuppgifter. Denna Integritetspolicy beskriver vilken enhet som ansvarar för behandling av personuppgifter som vi samlar in från dig i samband med din användning av våra Smart TV-tjänster (”Tjänster”), vilka typer av personuppgifter vi samlar in om dig, vad vi gör med dessa samt dina rättigheter i förhållande till vår användning av personuppgifterna. \n\n1.	Personuppgiftsansvarig och företrädare i Europeiska Unionen\n\nInsamlingen, behandlingen och användningen av personuppgifter som samlas in från dig när du använder Tjänsterna utförs av Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, Kina (\"Bolaget\"). Våra kontaktuppgifter, tillsammans med kontaktuppgifter till vår företrädare i den Europeiska Unionen, finns under avsnitt 12 nedan. Vänligen uppmärksamma att vi inte är ansvariga för all personuppgiftsbehandling som framgår nedan. Vi har oaktat detta inkluderat en beskrivning av de respektive aktiviteterna i vår Integritetspolicy, eftersom denna behandling sker i samband med din användning av Smart TV:n.\n\n2.	Samtycke till personuppgiftsbehandling\n\nViss insamling, behandling och/eller användning av dina personuppgifter kräver samtycke, till exempel användning av dina personuppgifter för att förbättra Tjänsterna. \n\nSamtycke är frivilligt och du kommer fortfarande att kunna använda Tjänsterna även om du inte samtycker. Du kan dock få se annonser och annat innehåll som inte har anpassats efter dina preferenser. Oavsett om du samtycker eller inte förbehåller vi oss rätten att samla in, behandla och/eller använda dina personuppgifter i den utsträckning som tillåts enligt tillämplig lag.\n\nDu kan när som helst återkalla ditt samtycke. Återkallande av samtycket påverkar inte behandlingens lagenlighet som innan återkallandet baserades på samtycke. För att återkalla ditt samtycke och/eller för att motsätta dig behandling (se under avsnitt 10 och Bilaga Dina Rättigheter nedan för dina rättigheter att motsätta dig), vänligen ändra integritetsinställningarna på din Smart TV.\n\n3.	Specifika kategorier av personuppgifter\n\nVi behandlar främst följande typer av uppgifter:\n\nEnhets-ID: Din Smart TV lagrar ett bestämt unikt nummer som gör det möjligt för oss att autentisera Smart TV:n när du använder Tjänsterna. Detta nummer kallas Enhets-ID. \n\nIP-adress och MAC-adress: Din Smart TV kommer att tilldelas en IP-adress vid anslutning till Internet. Om din Smart TV sitter bakom en router (t.ex. i ett lokalt hemnätverk eller lokalt WLAN), kan vi komma att behandla en sådan routers IP-adress. MAC-adressen är ett unikt nummer som tilldelas för varje nätverksgränssnitt hos din Smart TV. \n\nEnhetsspecifik information: Smart TV:n lagrar information om sig själv och sin konfiguration. Denna information inkluderar Smart TV-typ, Smart TV:ns operativsystemversion, skärmupplösning, projekt-ID (d.v.s. information om konfigurationsfiler), användaragent, webbläsarnamn, webbläsarversion samt språket och landet som har konfigurerats i Smart TV:n. Denna information kommer att användas av oss och kommer att delas med vår tjänstepartner och innehållspartners för nedan angivna ändamål.\n\n4.	Syften för vilka vi behandlar och/eller använder dina personuppgifter och rättsliga grunder\n\nSyftena med vår behandling av dina personuppgifter och respektive rättsliga grunder för dessa beskrivs nedan. I den omfattning som fullgörande av avtal anges som rättslig grund nedan, kan vi inte tillhandahålla dig Tjänsterna om du inte ger oss tillgång till de uppgifter som krävs. I den utsträckning ditt samtycke anges som rättslig grund är du fri att tillhandahålla eller innehålla ditt samtycke. Om du inte lämnar ditt samtycke behandlar vi inte dina personuppgifter för angivet ändamål.\n\n•	Tillhandahållande av Tjänsterna: Vi använder IP-adressen och MAC-adressen, Enhets-ID, Smart TV:ns operativsystemversion, klienttyp för din Smart TV och dess skärmupplösning, projekt-ID (d.v.s. information om konfigurationsfiler), din DTV-kanallista, kanaler som tittats på, tidszon, land- och språkinställningar för att ge din Smart TV tillgång till Tjänsterna och tjänsterna som tillhandahålls av våra innehållspartners. Dessa syften inkluderar (men är inte begränsade till) tillhandahållande av platsbaserade tjänster till dig (t.ex. väderprognoser); hantering av missbruk, hantering av säkerhetsincidenter, övervakning av tillgänglighet för Tjänsterna samt tillhandahållande av backuptjänster för användarpreferenser. \n\nNär du använder Tjänsterna kommer din Smart TV att begära uppgifter från Tjänsterna via Internet. Som en del av dessa förfrågningar kommer din IP-adress såsom beskrivs ovan och det språk och land som har konfigurerats i din Smart TV att överföras till vår tjänstepartner. Vår tjänstepartner behandlar respektive uppgift i enlighet med sin integritetspolicy.\n\nDen rättsliga grunden för behandling av dina personuppgifter är fullgörande av avtal enligt artikel 6.1 (b) Allmänna dataskyddsförordningen (\"GDPR\").\n\n•	Tjänsteinställningar: Som en del av Tjänsterna kan du manuellt hantera den ordning i vilken appar visas av Tjänsterna. Vår tjänstepartner lagrar ditt upplägg och andra preferenser du kan komma att ställa in när du använder Tjänsterna. Denna information kommer att kopplas till Enhets-ID:t.\n\nDen rättsliga grunden för behandling av dina personuppgifter är fullgörande av avtal enligt artikel 6.1 (b) GDPR.\n\n•	Autentisering: När du ansluter din Smart TV till Internet och slår på din Smart TV, ansluts den automatiskt till Tjänsterna, som hanteras av vår tjänstepartner. Din Smart TV kommer då att verifieras som certifierad för åtkomst till Tjänsterna. För autentiseringsändamål lagrar Tjänsterna en eller flera unika numeriska identifierare som är kopplade till din Smart TV. Vi använder Enhets-ID och MAC-adress i autentiseringssyfte. Vi tillhandahåller även Enhets-ID till utvalda innehållspartners för autentiseringssyfte. Dessa innehållspartners använder Enhets-ID för att autentisera din Smart TV för tillgång till tjänster som tillhandahålls av en innehållspartner.\n\nDen rättsliga grunden för behandling av dina personuppgifter är fullgörande av avtal enligt artikel 6.1 (b) GDPR.\n\n•	Fjärrdiagnostik: Som en del av Tjänsterna tillhandahåller vi fjärrdiagnostiktjänster. Därför behandlar vi Enhets-ID, enhetsnummer, serienummer, MAC-adress och felloggar, felkoder och felbeskrivningar som tillhandahålls automatiskt av den defekta modulen (program, middleware-system).\n\nDessutom, om du kontaktar vår kundtjänst, och på förhand har lämnat samtycke, kan en kundtjänstmedarbetare genom fjärråtkomst ges åtkomst till din TV och utföra ytterligare fjärrdiagnostiska tjänster. I sådana fall ges kundtjänstmedarbetaren åtkomst till din TV och nätverk, program och lagrade datafiler, och kan behandla ditt Enhets-ID, enhetsnummer, serienummer, MAC-adress, felloggar, felkoder, felbeskrivningar, Terminal-ID, installerad APP-information, skärmdumpar från TV och därtill kopplad USB/Bluetooth enhetsinformation för att utvärdera statusen för TV:n och tillhörande applikationer och data. Felloggarna kan innehålla information så som TV-programhistorik, musikspellistor, användarnamn och lösenord för APP:en, om en tredjeparts-APP som används för sändningen inte har krypterat sådan information. Detta kommer att ske för att diagnostisera problem, modifiera systeminställningar i enlighet med din begäran, eller för att åtgärda rapporterade fel. Dessutom kan, på din begäran, kundtjänstmedarbetare felsöka, köra program eller installera/avinstallera mjukvara, omkonfigurera och/eller på annat sätt utföra tjänster eller tekniskt underhåll på TV:n.\n\n \n\nFjärråtkomst kommer endast att äga rum efter det att du har aktiverat fjärrstödsfunktionen genom att klicka i den markerade rutan för detta på din TV och kommer upphöra efter respektive tillfälle.\n\nDen rättsliga grunden för behandling av dina personuppgifter är fullgörande av avtal enligt artikel 6.1 (b) GDPR.\n\n•	Kundtjänst: Enligt gällande lag kan du ha garantier eller liknande rättigheter efter försäljning. TCL Europe, 9-15 rue Rouget de L'Isle-92130 Issy-Les-Moulineaux, Frankrike ansvarar för att hantera garantianspråk och andra förfrågningar som rör sådana rättigheter och behandling av dina personuppgifter i samband med detta. Det vill säga, TCL Europe agerar i egenskap av personuppgiftsansvarig och vi är inte ansvariga för behandling av dina personuppgifter i detta sammanhang.\n\nNär du kontaktar vår kundtjänst kan ditt namn, e-postadress, telefonnummer, serviceförfrågan och postadress som finns i fakturan vara nödvändig för att vi ska kunna tillhandahålla dig kundtjänst. Informationen kan också samlas in via våra återförsäljare eller auktoriserade tjänsteleverantörer om kontaktar dem. Du kan kontakta TCL Europe på de kontaktuppgifter som anges under avsnitt 12 nedan för mer information om skydd av personuppgifter i samband med kundtjänst.\n\nDen rättsliga grunden för behandling av dina personuppgifter är rättslig förpliktelse enligt artikel 6.1 (c) GDPR.\n\n•	T-Channel: T-Channel är huvudsidan för användningen av Smart TV på Linux-operativsystemet (se nedan för användning av android-operativsystemet) och som möjliggör för dig att välja visst innehåll.\n\nDen rättsliga grunden för behandlingen av dina personuppgifter som är nödvändiga för din användning av T-Channel är fullgörande av avtal enligt artikel 6.1 (b) GDPR.\n\nMed förbehåll för ditt tidigare samtycke kommer vi också att övervaka användningen av T-Channel, dvs.:\n\n	När du använder T-Channel registrerar vi tiden för när du påbörjar och avslutar din användning av T-Channel.\n\n	När du börjar spela upp en video på T-Channel registrerar vi namnet och varaktigheten för videon (gäller inte Netflix, YouTube eller någon annan tjänst som tillhandahålls av en tredje part).\n\n	När du besöker eller lämnar en sida registrerar vi vistelsetiden på sidan.\n\n	När du flyttar markören från en plats till en annan, eller besöker ett program, registrerar vi den händelsen.\n\n	När du installerar, tar bort eller uppdaterar applikationer, registrerar vi dessa händelser, inklusive namnet på applikationerna.\n\nVi samlar in denna information främst för stordataanalys för att förbättra produkter och för att tillhandahålla bättre innehållstjänster till användare.\n\nDen rättsliga grunden för behandlingen av dina personuppgifter i samband med övervakningen av din användning av T-Channel är ditt samtycke enligt artikel 6.1 (a) GDPR.\n\nOm du har köpt en Android-tv och använder Googles android-operativsystem, kommer dina personuppgifter att behandlas av Google och vi är inte ansvariga för sådan behandling. Vänligen se Googles integritetsmeddelande för information om behandling av dina personuppgifter och dina respektive rättigheter.\n\n•	T-Cast: Med T-Cast kan du styra din TV med din smarttelefon och dela videor, musik och bilder som sparats i din smarttelefon på TV:n. Med T-Cast kan du även spegla din smarttelefon på din TV-skärm.\n\nNedladdningen och användningen av appen är frivillig. Om du laddar ner och använder appen behandlar vi MAC-adressen för att beräkna hur många T-Cast-versioner som har använts på marknaden. Detta krävs för att kunna erbjuda dig denna tjänst. Om du använder vår andra skärmfunktionalitet, kommer de kontroller du aktiverar i appen och land- och språkinställningar, DTV-kanallistan, listor över favoritkanaler, schemalistor, Enhets-ID, nuvarande kanal, protokollversion och IP-adress för din Smart TV att samlas in och behandlas av oss på våra servrar. Våra servrar kommer då att styra din Smart TV enligt de anvisningar som du har lämnat i appen.\n\nDen rättsliga grunden för respektive behandling av dina personuppgifter är fullgörande av avtal enligt artikel 6.1 (b) GDPR.\n\n•	TCL-assistent: TCL-assistenten är en funktion som gör det möjligt att koppla samman din TV med enheter som är kompatibla med Amazon Alexa (så som Echo) för att styra sådana enheter med din röst. För att använda denna funktion måste du först registrera din TV på Amazons webbsida genom att använda TCL-koden som finns på din TV. Du kan sedan ge muntliga instruktioner till den enhet som är kompatibel med Amazon Alexa genom att trycka på mikrofon-knappen på fjärrkontrollen till din TV.\n\nOm du använder TCL-assistenten samlar din TV in inspelningar av din röst och skickar dessa till Amazon Alexa-molnet för röstigenkänning och ytterligare behandling. Dina uppgifter kommer att överföras direkt till Amazon och inga uppgifter kommer att ytterligare behandlas eller lagras lokalt på din TV. Vänligen ta del av Amazons integritetsmeddelande för information om Amazons ytterligare behandling av dina personuppgifter.\n\nDen rättsliga grunden för respektive behandling av dina personuppgifter är fullgörande av avtal enligt artikel 6.1 (b) GDPR.\n\n•	Alexa Röstigenkänning (AVS): AVS är en funktion som möjliggör för dig att styra din TV genom din röst. För att kunna använda denna funktion måste du först registrera din TV på Amazons webbsida genom att använda den registreringskod som  har skapats av Amazon. Du kan sedan ge muntliga instruktioner till TV:n genom att trycka på mikrofon-knappen på fjärrkontrollen till din TV.\n\nOm du använder AVS samlar din TV in inspelningar av din röst och skickar dessa till Amazon Alexa-molnet för röstigenkänning och ytterligare behandling. Dina uppgifter kommer att överföras direkt till Amazon och inga uppgifter kommer att ytterligare behandlas eller lagras lokalt på din TV. Vänligen ta del av Amazons integritetsmeddelande för information om Amazons ytterligare behandling av dina personuppgifter.\n\nNär du använder AVS kommer ditt TV-namn att behövas för att vi ska kunna hitta den TV som du vill styra.\n\nDen rättsliga grunden för respektive behandling av dina personuppgifter är fullgörande av avtal enligt artikel 6.1 (b) GDPR.\n\nVi kommer vidare att registrera hur länge och hur ofta du har använt AVS och vilken funktion som du har använt tillsammans med AVS. Vi samlar in denna information för att förbättra produkter och för att kunna tillhandahålla bättre innehållstjänster till användare.\n\nDen rättsliga grunden för respektive behandling av dina personuppgifter är vårt berättigade intresse enligt artikel 6.1 (f) GDPR. Mer information om balanstestet finns att tillgå på begäran.\n\n•	Mjukvaruuppdateringar: Mjukvaruuppdateringar är en del av Tjänsterna. Därför kommer din Smart TV, varje gång den startas, att förse oss med IP-adress, Enhets-ID, enhetsnummer, mjukvaruversion, klienttyp för din Smart TV, projekt-ID (d.v.s. konfigurationsfiler), användar-ID och serienummer för att erbjuda dig samt tillhandahålla lämpliga mjukvaruuppdateringar. \n\nDen rättsliga grunden för respektive behandling av dina personuppgifter är fullgörande av avtal enligt artikel 6.1 (b) GDPR.\n\n•	Brottsbekämpning: Vi kan vara tvungna att förse brottsbekämpande myndigheter eller domstolar med uppgifter. Om vi gör det kommer vi endast att göra det i enlighet med ett rättsligt bindande instrument, såsom exempelvis ett domstolsbeslut, som kräver att vi samarbetar med relevant myndighet.\n\nDen rättsliga grunden för respektive behandling av dina personuppgifter är rättslig förpliktelse enligt artikel 6.1 (c) GDPR.\n\nDet är möjligt att använda Tjänsterna under pseudonym om inte specifika tjänster kräver att du anger ditt namn och/eller e-postadress.\n\n5.	Integritet och säkerhet för barn under 16 år\n\nVi förstår vikten av att vidta extra försiktighetsåtgärder för att skydda barns integritet och säkerhet när de använder våra Tjänster. Det är inte tillåtet för barn under 16 år eller motsvarande lägsta ålder i den relevanta jurisdiktionen att tillhandahålla sina personuppgifter via TV:n eller när de ringer kundtjänst, såvida inte deras förälder lämnar verifierbart samtycke.\n\nEftersom vi aldrig samlar in födelsedatum för användare kan vi inte identifiera användarnas ålder. Men om vi upptäcker att vi har samlat in personuppgifter för ett barn under 16 år eller motsvarande åldersgräns beroende på jurisdiktion, kommer vi, om ovanstående villkor inte uppfylls, att vidta åtgärder för att radera informationen så snart som möjligt.\n\n6.	Tredjepartsappar\n\nDin Smart TV tillåter användning av appar som tillhandahålls av tredje part, till exempel Netflix, YouTube eller HbbTV (röd knapptjänst som tillhandahålls av TV-sändare). Du kan ladda ner apparna från app-butiken eller aktivera tredjepartsprogram som redan är förinstallerade på din enhet. Inga av tredjepartsprogrammen som är förinstallerade på din enhet samlar in personuppgifter utan ditt förhandsgodkännande. T.ex. Netflix är redan förinstallerat på enheten men samlar endast in personuppgifter när du loggar in på ditt Netflix-konto. HbbTV samlar endast in uppgifter när du samtycker till insamlingen genom att trycka på den angivna knappen på fjärrkontrollen.\n\nOm du aktiverar en tredjepartsapp kan personuppgifter om dig behandlas av app-leverantören. Vi är inte ansvariga för sådan behandling; vänligen se tredje partens integritetsmeddelande för information om behandling av dina personuppgifter och dina respektive rättigheter.\n\n7.	Kategorier av mottagare\n\nVi delar dina personuppgifter som samlats in under din användning av Tjänsterna endast med tredje parts innehållspartner om du begär visst innehåll som tillhandahålls av sådana innehållspartners eller med tjänsteleverantörer som dataprocessorer som hjälper oss att tillhandahålla Tjänsterna.\n\nVi delar dina personuppgifter med andra tredje parter endast om vi är skyldiga att göra det med anledning av rättsliga krav (t.ex. till domstolar eller myndigheter), om du har samtyckt till respektive överföring eller om överföringen annars är laglig enligt tillämplig lag.\n\n8.	Länder där dina personuppgifter kommer att behandlas\n\nVi och/eller vissa av mottagarna av dina personuppgifter som anges ovan kan vara baserade utanför Europeiska ekonomiska samarbetsområdet (t.ex. i följande länder: Kina eller USA). Därför kan dina personuppgifter komma att behandlas I länder där dataskyddslagarna ger ett skydd för dina personuppgifter som är annorlunda jämfört med lagarna i din jurisdiktion och som inte har ansetts tillhandahålla ett lämplig skydd för personuppgifter enligt GDPR. De länder som tillhandahåller en adekvat nivå av dataskydd utifrån ett europeiskt dataskyddsperspektiv är Andorra, Argentina, Kanada, Schweiz, Färöarna, Guernsey, Israel, Isle of Man, Jersey, Nya Zeeland och Uruguay. Mottagare i USA kan delvis certifieras med EU-U.S. Privacy Shield och därigenom anses ha en lämplig skyddsnivå för personuppgifter från ett europeiskt lagstiftningsperspektiv.\n\nVid behov kommer vi att implementera lämpliga skyddsåtgärder när det gäller dataöverföringar till mottagare utanför Europeiska unionen som inte tillhandahåller en lämplig skyddsnivå för personuppgifter. En kopia av respektive skyddsåtgärd kan beställas genom att kontakta oss enligt vad som anges i avsnitt 12 nedan.\n\n9.	Lagringsperiod\n\nDina personuppgifter kommer att behållas så länge som nödvändigt för att förse dig med Tjänsterna. För de flesta uppgifter betyder det i allmänhet att vi kommer att behålla dina uppgifter i en månad. För fjärrdiagnostik och kundtjänst kan vi komma att behålla dina uppgifter i upp till tio år. När vi inte längre behöver använda dina personuppgifter för att följa avtalsenliga eller lagstadgade skyldigheter kommer vi att ta bort dem från våra system och register och/eller vidta åtgärder för att anonymisera dina uppgifter så att du inte längre kan identifieras med ledning av uppgifterna.\n\n10.	Dina rättigheter\n\nI enlighet med gällande dataskyddslag kan du ha rätt att: begära tillgång till dina personuppgifter, begära rättelse av dina personuppgifter, begära radering av dina personuppgifter, begära begränsning av behandlingen av dina personuppgifter, begära dataportabilitet och motsätta dig behandlingen av dina personuppgifter. Observera att dessa ovan nämnda rättigheter kan vara begränsade enligt gällande nationell lagstiftning om dataskydd. För mer information om dessa rättigheter hänvisas till Bilaga Dina rättigheter nedan.\n\nDu har också rätt att lämna in ett klagomål till den behöriga tillsynsmyndigheten.\n\nFör att utöva dina rättigheter, vänligen kontakta oss enligt avsnitt 12 nedan.\n\n11.	Ändringar av Integritetspolicyn\n\nFör att förbättra våra Tjänster kan vi behöva göra justeringar av denna Integritetspolicy – t.ex. vid införande av ny teknologi eller lansering av nya tjänster. Vi förbehåller oss rätten att när som helst ändra eller göra tillägg till denna Integritetspolicy.\n\n12.	Kontaktuppgifter\n\nOm du har frågor om denna Integritetspolicy eller om du vill framföra klagomål avseende vår behandling av dina personuppgifter, vänligen kontakta oss genom att använda någon av följande kontaktuppgifter:\n\nKontaktformulär: www.tcl.eu/en/contact-us\n\nVår företrädare i Europeiska Unionen är: TCL Europe har sin verksamhet på  9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, France. Du kan också kontakta TCL Europe via kontaktformuläret ovan.\n\nVersion: 2.0\n\nBilaga Dina Rättigheter\n\na.	Rätt till tillgång: Du kan ha rätt att få information från oss om huruvida personuppgifter om dig behandlas eller, om så är fallet, begära tillgång till personuppgifterna. Tillgångsinformationen inkluderar bland annat syftet med behandlingen, kategorier av personuppgifter och mottagarna eller kategorier av mottagare till vilka personuppgifterna har överförts eller kommer att överföras till. Detta är emellertid inte en absolut rättighet och andra personers intressen kan begränsa din rätt till åtkomst.\n\nDu kan ha rätt att få en kopia av de personuppgifter som behandlas. För ytterligare kopior kan vi ta ut en rimlig avgift baserad på administrativa kostnader.\n\nb.	Rätt till rättelse: Du kan ha rätt att få felaktiga personuppgifter som rör dig rättade. Med beaktande av ändamålet med behandlingen, kan du ha rätt att komplettera ofullständiga personuppgifter, bland annat genom att tillhandahålla ett kompletterande utlåtande.\n\nc.	Rätt till radering (\"rätten att bli glömd\"): Under vissa omständigheter kan du ha rätt till radering av dina personuppgifter och vi kan vara skyldiga att radera sådana personuppgifter.\n\nd.	Rätt till begränsning av behandling: Under vissa omständigheter kan du ha rätt att kräva begränsning av behandling av dina personuppgifter. I så fall kommer respektive uppgift att markeras och får endast behandlas av oss för vissa ändamål.\n\ne.	Rätt till dataportabilitet: Under vissa omständigheter kan du ha rätt ha rätt att få ut de personuppgifter som rör dig och som du har tillhandahållit oss i ett strukturerat, allmänt använt och maskinläsbart format och du kan ha rätt att överföra dessa uppgifter till en annan enhet utan hinder av oss.\n\nf.	Rätt att göra invändningar: \n\nUnder vissa omständigheter kan du ha rätt att motsätta dig att dina personuppgifter behandlas, av skäl som hänför sig till din specifika situation, eller, ifall personuppgifterna behandlas för direktmarknadsföringsändamål, kan du när som helst motsätta dig sådan behandling, varvid vi kan vara skyldiga att upphöra med behandling av dina personuppgifter. \n\nDessutom, om dina personuppgifter behandlas för direktmarknadsföringsändamål har du rätt att när som helst invända mot behandling av personuppgifter som gäller dig för sådan marknadsföring, vilket inkluderar profilering i den utsträckning det är relaterat till sådan direkt marknadsföring. I så fall kommer dina personuppgifter inte längre att behandlas av oss för sådana ändamål."];
var cookieNotice = ["\n\nVi respekterar din integritet vid användning av Smart TV tillverkade av och Tjänster tillhandahållna av oss. Cookies används av många webbsidor och andra Internettjänster och din Smart TV kommer att acceptera, lagra och överföra cookies för att säkerställa att webbplatser och tjänster fungerar korrekt. \n\nVi använder inte cookies när vi tillhandahåller dig Tjänsterna. Däremot kan tredje part (till exempel tredjepartsapp leverantörer) använda cookies när du använder Smart TV för att få tillgång till deras tjänster. Denna Cookiepolicy kan endast ge begränsad information om cookies som kan komma att placeras av tredje part. För information om de faktiska cookies som används av tredje part och deras funktionaliteter hänvisar vi till respektive tredje parts cookiepolicyer. I denna Cookiepolicy ger vi en generell beskrivning av vilka cookies som kan ställas in på din Smart TV och hur du kan hantera dem.\n\n1.	Vad är en cookie?\n\nCookies är små textfiler som kan placeras på din Smart TV. När en webbplats eller röd-knapp-tjänsten hos en TV-station besöks/används, kan webbsidan eller tjänsten lagra en cookie i Smart TV:n. Vid efterföljande åtkomster kommer en cookie som placerats på din Smart TV att skicka information till den part som har placerat cookien. Cookies är extremt vanliga och används på flertalet webbplatser och tjänster. Varje cookie innehåller vanligtvis namn på domänen som cookien kommer ifrån, ”livslängden” för cookien samt ett värde (vanligtvis ett unikt nummer). För en mer djupgående förklaring av vad cookies är och hur de fungerar, se www.allaboutcookies.org.\n\nCookies kan delas in i funktionscookies och icke-funktionscookies. Funktionscookies är cookies som är nödvändiga för att förse dig med tjänsterna. Icke-funktionscookies är alla andra cookies.\n\n2.	Tredje parts webbplatser\n\nNär du besöker webbplatser eller tjänster från tredje part genom Smart TV-tjänsterna i din Smart TV är det möjligt att sådana webbplatser och tjänster placerar cookies på din Smart TV samt att sådana webbplatser följer och sparar dina interaktioner på sådana webbplatser. Vi varken begär eller uppmuntrar sådana aktiviteter och kommer inte att använda sådan information. Vänligen se respektive cookie- och integritetspolicy för sådana webbplatser och tjänster för mer information om sådana parters användning av sådana cookies.\n\n3.	Borttagning av cookies\n\nDitt användargränssnitt på din Smart TV gör det möjligt för dig att ta bort alla cookies och annan lokal webbläsarlagring från din Smart TV. Det rekommenderas starkt att alla cookies och lokalt sparade inställningar tas bort innan din Smart TV säljs eller ges bort.\n\nVersion: 2.0"];
var privacyPolicy = ["Om du vill använda våra Smart TV-tjänster och relaterade tjänster, ska du markera kryssrutan nedan. För att du ska kunna använda dessa tjänster, måste vi behandla dina personuppgifter enligt beskrivningen i vår Integritetsmeddelande: http://www.tcl.eu/en/","Aktivera Smart TV-tjänst, lagring av inställningar för tjänsten och automatisk autentisering av Smart TV. Avmarkerar du kryssrutan, kommer du bara ha standard-TV och HDMI.","Aktivera automatiska mjukvaruuppdateringar. Markera denna ruta för att hålla din produkt uppdaterad med de senaste mjukvaruuppdateringar och bästa prestanda.","(Mjukvaruuppdateringar är viktiga för att din TV ska fungera korrekt, eftersom de ger dig nya funktioner, stabilitet och säkerhet. Därför rekommenderar vi att du markerar kryssrutan.)","Markera kryssrutan nedan om du samtycker till vår behandling av dina personuppgifter även för följande listade ändamål. För ytterligare information om hur vi behandlar dina personuppgifter, se vårt Integritetsmeddelande: http://www.tcl.eu/en/","Jag godkänner behandlingen av mina personuppgifter (t. ex., tiden för tillgång till och avslut från T-Launcher) i syfte att förbättra TCL:s produkter och tillhandahålla bättre innehållstjänster på Smart TV."];
var termsFirTitle = ["Regler och villkor","Integritetsmeddelande","Kakmeddelande"];
var termsSecTitle = ["Läs reglerna och villkoren och godkänn dem.","Läs integritetsmeddelandet och godkänn.","Läs kakmeddelandet och godkänn."];
var tickall = "Markera alla";
var tickremindWords = "Markera kryssrutorna, annars kan du inte använda Smart TV-tjänsten.";