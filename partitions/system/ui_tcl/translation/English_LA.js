
var all_country 	= ["Australia","Austria","Belgium","Bulgaria","Croatia","Czech Republic","Denmark","Finland","France","Germany",
						"Greece","Hungary","Italy","Luxembourg","Netherlands","Norway","Poland","Portugal","Romania","Russia",
						"Serbia","Slovenia","Spain","Sweden","Switzerland","United Kingdom","New Zealand"," "/*Arab*/,"Estonia"," "/*Hebrew*/,
						"Latvia","Slovakia","Turkey","Ireland","Japan","Philippines","Thailand","Maldives","Uruguay","Peru",
						"Argentina","Chile","Venezuela","Ecuador","Costa Rica","Paraguay","Bolivia","Belize","Nicaragua","Guatemala",
						"China","Taiwan","Brazil","Canada","Mexico","United States","South Korea","Romania","Vietnam"/*新添加的，底层结构体中没有*/,"Ukraine"/*新添加的，底层结构体中没有*/,
    					"Iran","Iraq"," ","Kazakhstan","Uzbekistan"," ","Kyrgyzstan","Algeria","Egypt","Tunisia",
    					"Tanzania","Kenya","Pakistan","Indonesia","Kuwait","Saudi Arabia","Qatar","Israel","Lebanon","bahrain",
    					"Angola","Congo","India","Turkmenistan","Colombia","Mongolia","Bangladesh","Nepal","Sri Lanka","North Korea",
    					"Moldova","Polynesia","EI Salvador"," ","Fiji","Liberia","Jordan","Myanmar","Ghana","Georgia",
    					"Armenia","Oman","yemen","Syria","Palestine","Afghanistan","Morocco","benin","IvoryCoast","Nigeria",
    					"Sudan","Ethiopia","Zambia"," ","South Africa","mozambique","Libya","Albania","Belarus","Iceland",
    					"Lithuania","Mauritius","Dubai","UAE","Tajikistan","Bengal","Bosnia Hercegovina","Cyprus","Kosovo","Macedonia",
						"Malta","Montenegro","Cameroon","Singapore","Malaysia","NewCaledonia","Suriname","Jamaica","Curacao","Aruba",
						"Antigua & Barbuda","St Lucia","Barbados","St Vincent","St Kitts & Nevis","Grenada","Trinidad & Tobago","Guyana","Puerto Rico","Panama",
				 /*15*/ "Dominica","Cuba","Honduras","Haiti","Cambodia","Zimbabwe","Dominican Republic","Bonaire","Somalia","Azerbaijan",
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
						
				
var all_language 	= ["Czech","Chamic","Danish","Dargwa","Landdayak","German","English","Spanish","Greek","French",
						"Croatian","Sorbianupper","Italian","Hungarian","Dutch","Norwegian","Polish","Portuguese","Russian","Romanian",
						"Slovenian","Serbian","Finnish","Swedish","Bulgarian","Slovak","Chinese","Chuukese","Gaelic","Gbaya",
						"Welsh","Arabic","Irish","Latvian","Hebrew","Turkish","Estonian","Dutch"/*Netherlands*/,"Korean","Kosraean",
						"Hindi","Hittite","Hmong","Mandarin","Cantonese","Maori","Original Audio"/*Qaa*/,"Undefined"/*Undetermined*/,"Ad","Unknown",
						"Undefined","Abkhazian","Achinese","Acoli","Adangme","Adyghe","Afar","Afrihili","Afrikaans","Afro",
						"Ainu","Akan","Akkadian","Albanian","Aleut","Algonquian","Altaisouthern","Altaic","Amharic","Apache",
						"Aramaic","Aragonese","Arapaho","Araucanian","Arawak","Armenian","Artificial","Assamese","Asturian","Athapascan",
						"Austronesian","Australian","Avaric","Avestan","Awadhi","Aymara","Azerbaijani","Aztec","Balinese","Baltic",
						"Baluchi","Bambara","Bamileke","Banda","Bantu","Basa","Bashkir","Basque","Beja","Bemba",
						"Bengali","Berber","Bhojpuri","Bihari","Bikol","Bini","Bislama","Bosnian","Braj","Breton",
						"Buginese","Buriat","Burmese","Blin","Byelorussian","Caddo","Carib","Catalan","Caucasian","Cebuano",
						"Celtic","Centralamericanindian","Chagatai","Chamorro","Chechen","Cherokee","Cheyenne","Chibcha","Chinookjargon","Choctaw",
						"Chipewyan","Churchslavic","Chuvash","Coptic","Cornish","Corsican","Cree","Creek","Creolesandpidgins","Crimeantatar",
						"Creolesandpidginsenglish","Creolesandpidginsfrench","Creolesandpidginsportuguese","Kashubian","Cushitic","Dakota","Delaware","Slavey","Dogrib","Dhivehi",
						"Dinka","Divehi","Dogri","Dravidian","Sorbianlower","Duala","Dutchmiddle","Dyula","Dzongkha","Efik",
						"Egyptian","Ekajuk","Elamite","Englishmiddle","Englishold","Angika","Eskimo","Esperanto","Ewe","Ewondo",
						"Fang","Fanti","Faroese","Fijian","Filipino","Finnougrian","Fon","Frenchmiddle","Frenchold","Frisiannorthern",
						"Frisianeastern","Frisian","Fulah","Friulian","Ga","Galician","Ganda","Gayo","Geez","Georgian",
						"Germanmiddlehigh","Germanoldhigh","Gorontalo","Germanic","Gilbertese","Gondi","Gothic","Grebo","Greekancient","Greenlandic",
						"Guarani","Swissgerman","Gujarati","Gwichin","Haida","Haitiancreole","Hausa","Hawaiian","Herero","Hiligaynon",
						"Himachali","Hirimotu","Hupa","Iban","Icelandic","Ido","Nuosu","Igbo","Ijo","Iloko",
						"Indic","Indoeuropean","Ingush","Indonesian","Interlingua","Interlingue","Inuktitut","Inupiak","Iranian","Irishold",
						"Irishmiddle","Iroquoian","Japanese","Javanese","Lojban","Judeoarabic","Judeopersian","Kabyle","Kachin","Kamba",
						"Kannada","Kanuri","Karakalpak","Karen","Kashmiri","Kawi","Kazakh","Circassian","Khasi","Khmer",
						"Khoisan","Khotanese","Kikuyu","Kinyarwanda","Kirghiz","Kimbundu","Komi","Kongo","Konkani","Kpelle",
						"Karachaybalkar","Karelian","Kru","Kuanyama","Kumyk","Kurdish","Kurukh","Kusaie","Kutenai","Ladino",
						"Lahnda","Lamba","Langue","Lao","Latin","Luxembourgish","Lezghian","Limburgish","Lingala","Lithuanian",
						"Lozi","Lubalulua","Lubakatanga","Luiseno","Lunda","Luo","Lushai","Macedonian","Madurese","Magahi",
						"Maithili","Makasar","Malagasy","Malay","Moksha","Mandar","Malayalam","Maltese","Manchu","Mandingo",
						"Manipuri","Manobo","Manx","Marathi","Mari","Marshall","Mirandese","Marwari","Masai","Mayan",
						"Erzya","Mende","Micmac","Minangkabau","Miscellaneous","Mohawk","Moldavian","Monkmer","Mongo","Mongolian",
						"Mossi","Multiple","Munda","Neapolitan","Nauru","Navajo","Ndebelenorth","Ndebelesouth","Ndongo","Germanlow",
						"Nepali","Newari","Nias","Nigerkordofanian","Nilosaharan","Niuean","Norwegianbokmal","Nogai","Norseold","Northamericanindian",
						"Norwegiannynorsk","Nubian","Nyamwezi","Newariclassical","Nyanja","Nyankole","Nyoro","Nzima","Ojibwa","Oriya",
						"Oromo","Osage","Ossetic","Otomian","Pahlavi","Palauan","Pali","Pampanga","Pangasinan","Panjabi",
						"Papiamento","Papuanaustralian","Persian","Persianold","Phoenician","Philippine","Ponape","Prakrit","Provencalold","Pushto",
						"Quechua","Rhaetoromance","Rajasthani","Rapanui","Rarotongan","Romance","Romany","Rundi","Aromanian","Salishan",
						"Samaritanaramaic","Samisouthern","Saminorthern","Sami","Lulesami","Inarisami","Samoan","Skoltsami","Sandawe","Sango",
						"Sanskrit","Sardinian","Sasak","Santali","Sicilian","Scots","Selkup","Semitic","Sranantongo","Serbocroatian",
						"Serer","Sign","Shan","Shona","Sidamo","Siksika","Sindhi","Soninke","Singhalese","Sinotibetan",
						"Siouan","Slavic","Siswant","Sogdian","Somali","Songhai","Sorbian","Walloon","Nko","Sothonorthern",
						"Sothosouthern","Southamericanindian","Sukuma","Sumerian","Sudanese","Susu","Swahili","Swazi","Swize","Syriacclassical",
						"Syriac","Tagalog","Tahitian","Tetum","Tajik","Tamashek","Tai","Tamil","Tatar","Teletext",
						"Telugu","Tereno","Thai","Tibetan","Tigre","Tigrinya","Timne","Tivi","Klingon","Tokelau",
						"Tlingit","Tonganyasa","Tongaislands","Truk","Tokpisin","Tsimshian","Tsonga","Tswana","Tumbuka","Tupian",
						"Turkishottoman","Turkmen","Tuvinian","Tuvalu","Twi","Udmurt","Ugaritic","Uighur","Ukrainian","Umbundu",
						"Urdu","Uzbek","Vai","Venda","Vietnamese","Volapuk","Votic","Wakashan","Walamo","Waray",
						"Washo","Wolof","Kalmyk","Xhosa","Yakut","Yao","Yap","Yiddish","Yoruba","Yupik",
						"Zapotec","Blissymbolics","Zenaga","Zhuang","Zande","Zulu","Zuni","Zazaki","Valencian","ChineseTraditional","*"];
var offOn			= ["Off","On"];
var okCancel		= ["OK","Cancel"];
var yesNo			= ["Yes","No"];
var level			= ["Off","Low","High","Middle"];
var manualAuto		= ["Manual","Auto"];
var homeShop		= ["Home","Shop"];
var picPreset		= ["Standard","Dynamic","Natural","Movie","Personal"];
var picColorTemp	= ["Cool","Normal","Warm","Custom"];
var pic3dNavig		= ["Manual","Auto","Semi-Auto"];
var _3dOptions		= ["3D Mode","3D-to-2D","L-R switch","Depth of field"];
var pic3DMode       = ["Off","2D-to-3D","Side-by-Side","Top-and-Bottom","Line Interleave"];
var picEcoOptions	= ["Energy saving","Light sensor","Local dimming","Mix dimming"];
var picGeoOptions	= ["Geometry","H.Position","V.Position","Clock","Phase"];//Geometry 无翻译
var picAdWhiteBal	= ["R Gain","G Gain","B Gain","R Offset","G Offset","B Offset"];
var souOptions		= ["Sound preset","Balance","Audio delay","SRS TSHD","Auto volume control",
						"SPDIF type","SPDIF delay","TV placement","Audio language","Sound type",
						"Audio description","Bass boost","Dolby Digital Plus","Sound Surrond"];
var souSpdifType	= ["Auto"/*Dolby*/,"PCM","Off"];
var colorSpace      = ["Auto","Native","Custom"];
var souPresetPara	= ["100Hz","500Hz","1.5KHz","5KHz","10KHz"];
var chOptions		= ["Channel scan","Channel list","EPG","Channel organizer","Channel diagnostics",
						"Timeshift","Subtitle","Teletext","Channel list type","Data service","PVR"];
var chDiagOptions	= ["Signal strength","Signal quality","Frequency (KHz)","Service ID","Network ID","Network Name"];
var chScanOptions	= ["Country / Region","Tuner mode","Automatic search","Automatic update","Analogue manual scan",
						["Cable manual installation","Antenna manual installation","Satellite manual tuning"],"Satellite antenna setup","Favorite network select","Clean channel list","LCN"];
var favNetDes		= "Please select your favorite network";
var tuner			= ["Cable","Antenna","Satellite"];
var passError		= "Password incorrect.\nPlease enter again!";
var chType			= ["Analogue channels: ","Digital channels: "];
var chScanStatus	= ["Status: Scanning","Status: Scan complete","Status: Scan cancelled","Status: Scan error"];
var chScanPara		= ["Frequency (KHz)","Modulation","Symbol rate (Ksym/s)","Network ID","System",
						"Fine tune","Signal strength","Signal quality","Scan mode","Channel id"];
var chScanParaMHZ      = ["Frequency (MHz)"];
var chAtvManSys		= ["West EUR","East EUR","UK","France"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Auto"];
var chCleanDes		= "Do you want to clean channel list?";
var chDeletDes		= "Do you want to delete the channel?";
var chOperator		= ["Ziggo","UPC","Others"];
var chScanType		= ["Digital & Analogue","Digital","Analogue"];
var chScanMode		= ["Full","Advanced","Quick"];
var bookingModes	= ["Record","Reminder"];
var dayName			= ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var monthName		= ["Jan", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var filter			= ["Filter","Type","SubType"];
var chEpgFirstGenre	= ["Movie","News","Show","Sports","Children's","Music","Arts","Social","Education","Leisure","Special"];
var chEpgSecondGenre= [["Drama","Detective","Adventure","Science Fiction","Comedy","Soap","Romance","Serious","Adult Movie"," "," "," "],
						["Current Affairs","Weather Report","News Magazine","Documentary","Discussion"," "," "," "," "," "," "," "],
						["Show","Game Show","Variety Show","Talk Show"," "," "," "," "," "," "," "," "],
						["Sports","Special Events","Sports Magazines","Football","Tennis",
							"Team Sports","Athletics","Motor Sport","Water Sport","Winter Sport",
							"Equestrian","Martial Sports"],
						["Children's","Pre-school children's","Entertainment for 6 to 14","Entertainment for 10 to 16","Informational","Cartoons"," "," "," "," "," "," "," "],
						["Music","Rock","Serious","Folk","Jazz","Musical","Ballet"," "," "," "," "," "],
						["Arts","Performing Arts","Fine Arts","Religion","Popular culture",
							"Literature","Film","Experimental","Broadcasting","New Media",
							"Arts Magazines","Fashion"],
						["Social","Magazines","Economics","Remarkable people"," "," "," "," "," "," "," "," "],
						["Education","Nature","Technology","Medicine","Foreign Countries","Social sciences","Further Education","Languages"," "," "," "," "],
						["Leisure Hobbies","Tourism","Handicraft","Motoring","Fitness and Health","Cooking","Advertisement","Gardening"," "," "," "," "],
						["Original language","Black and white","unpublished","Live Broadcast"," "," "," "," "," "," "," "," "]];
var chEpgFirstGenreLA = ["News","Sports","Educative","Soap opera","Mini-series","Series","Variety show","Reality show","Information","Comical","Children","Erotic","Movie","Raffle,television sales,prizing","Debate/interview","Other"]; 
var chEpgSecondGenreLA = [	["News","Report","Documentary","Biography","Other","",""],
					    	["Sports","Other","","","","",""],
						["Educative","Other","","","","",""],
						["Soap opera","Other","","","","",""],
						["Mini-series","Other","","","","",""],
						["Series","Other","","","","",""],
						["Auditorium","Show","Musical","Making of","Feminine","Game show","Other"],
						["Reality show","Other","","","","",""],
						["Cooking","Fashion","Country","Health","Travel","Other",""],
						["Comical","Other","","","","",""],
						["Children","Other","","","","",""],
						["Erotic","Other","","","","",""],
						["Movie","Other","","","","",""],
						["Raffle","Television sales","Prizing","Other","","",""],
						["Discussion","Interview","Other","","","",""],
						["Adult cartoon","Interactive","Policy","Religion","Enginnering services","Other",""]];
var chOrganizer		= ["Channel skip","Channel sort","Channel edit","Channel delete","Channel swap","Channel insert"];
var chEditPara 		= ["Network name","Channel number","Channel name","Frequency","Color system","Sound system"];
var chSatTitles		= ["Satellite type","Satellite antenna setup","Select satellite"];
var chSatEidtOptions= ["Satellite name","Position","LNB power","LNB frequency (MHz)","DiSEqC input",
						"Tone 22KHz","Tone burst","Frequency (KHz)","Symbol rate (Ksym/s)","Polarization",
						"Signal strength","Signal quality","Satellite status"];
var chSatAutoPromt	= [["All","Network"],
						["All","Free"]];
var chSatAutoScanOptions=["Select satellite","Scan mode","Channels"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Universal",];
var chSatDiSEqCInput= ["Disable","A","B","C","D"];
var chSatTone22KHz	= ["Auto","On","Off"];
var chSatToneBurst	= ["Disable","Tone burst A","Tone burst B"];
var chSatPolarization= ["Horizontal","Vertical"];
var chSatSetupOptions=["Antenna type","Tuner","Band frequency"];
var chSatAntennaType= ["SingleCable","Universal"];
var chSatUserBands	= ["User band 1","User band 2","User band 3","User band 4","User band 5","User band 6","User band 7","User band 8"];
var chSatOthers		= ["Transponder"];
var chSatSetupOthers= ["User defined"];
var pleaseSelectSat = "Please select satellites first!";
var subOptions		= ["Subtitle","Digital subtitle language","Digital subtitle language 2nd","Subtitle type"];
var gingaOptions		= ["Auto data service","Data service list"];
var ttxOptionsCon      = ["Decoding page language","Digital teletext language"];
var subType			= ["Normal","Hearing Impaired"];
var netIntf     	= ["Ethernet ","Wireless"];
var netConnDes		= ["TV is testing the network connection.\nPlease wait",
						"The network connection test is successful!",
						"The network connection test failed."];
var netSsidError	= "The valid length of SSID is 1~32 characters. Please check the SSID.";
var netOthers		= ["PIN Code "];
var netWlessAutoDes	= ["Please ensure the following PIN code is installed into the Access Point before clicking OK.",
						"Please press the button on the Access Point within 120 seconds before clicking OK."];
var netConnRemind	= ["Password incorrect!",
						"Connecting. Please wait!",
						"Connection successful and IP address is obtained!",
						"Connection failed, please check network and try again!",
						"TV is scanning Access Points. \nPlease wait",
						"There is no Wireless Adapter connected to the TV!"];
var netWireIpOptions= ["IP setting","Address type","IP Address","Subnet Mask","Default Gateway","Primary DNS","Secondary DNS"];
var netWireConnRemind= ["Please enter a value between 0 and 255.",
						"Connected successfully!",
						"Please type a valid address",
						"Connected successfully!",
						"Connection failed!",
						"Connecting. Please wait!",
						"Please enter a value between 1 and 223."];
var netFlixOptions	= ["Deactivate","ESN","Netflix Version"];
var netFlixDes	 	= ["Are you sure you want to deactivate?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Software update";
var netUpdateDialogTitle = "Software updating";
var netBGDownloadTitle 	= "Downloading";
var netUpdateLoadingPrompt= ["Searching for upgrade, please wait!",
							"Software is downloading... Please wait!",
							"Please DO NOT turn off the TV set during software updating!",
                            "The imperative software update is downloaded automatically in the background!"];
var netUpdatePrompt= ["Congratulations, your software version is the newest!",
						"The new software version XXXX is found. Do you want to download now? This may take a while depending on your network status.",
						"Login failed, please check and connect again!",
						"Failed to receive data,please try again later!",
						"Analysis of upgrade info failed, switch off/on with remote control!",
						"Connection failed, please check network and try again!",
						"Software downloaded successfully. Do you want to start updating your TV?",
						"Data lost! Download failed!",
						"Software file check failed, please try again!",
						"Connection problems. Please check and connect again!",
						"Update failed. Please switch off/on with remote control!",
						"The upgrade file was deleted unexpectedly. Please do the upgrade by network again.",
						"The software has been downloaded successfully in the background. Do you want to do the upgrade?"];
var netUpdateButtonText = ["Download", "Update", "Later", "Never", "OK","Continue"];
var autoDetectPrompt = ["The new software version XXXX is found. Do you want to download now? This may take a while depending on your network status.",
						"The new software version XXXX is found. Do you want to update now?",
						"The upgrade process by network was aborted last time. You have to do the upgrade again.",
                        "Downloading of new software version XXXX is not finished. Do you want to continue now?",
                        "Software downloaded, do you want to update now?",
						"Software downloaded, do you want to update now? TV will update automatically next time if you skip now."];
var sysOptions		= ["E-Manual","Menu language","Timer","Lock","Input settings",
						"Software update","Location","HbbTV mode","Cookies","Common Interface",
						"Advanced settings","Reset shop","LED Indicator","Instant power on","Auto shop mode","Area","Demo mode"];
var sysResetDes		= "Are you sure you want to do the selected action?";
var sysMenuLangOptions=["Language","Preferred audio language","Preferred audio language 2nd"];
var sysTimerOptions	= ["Time zone","Region name","Clock","Sleep timer","Auto standby", "Country region"];

var sysTimeZone		= ["As per broadcast","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysTimeZoneLA  = ["As broadcaster","Region1","Region2","Region3","Region4","Region5"];//add for LA
var sysSleepTimer	= ["Off","10 Min","20 Min","30 Min","40 Min","50 Min","60 Min","90 Min","120 Min"];
var sysStandby		= ["Off","4 Hours","6 Hours","8 Hours"];
var sysRegionName	= ["Madrid ","Canary Islands"];
var sysClockOptions	= ["Auto synchronization","Date","Time","Power on timer","Timer",
						"Power on channel","Power off timer","Timer","Daylight saving time"];
var sysTimer		= ["Off","Daily","Once"];

var sysInputSet		= ["No label","DVD","Blu-ray","HDD","DVDR",
						"HD rec.","Game","VCR","PC","Digital STB",
						"HD digital STB","Camera","Recorder","Other"];
var sysAvVideoInput	= ["Auto","RGB_CVBS","RGB","CVBS","S-Video"];
var sysUpdate		= ["By USB","By network","By channel"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Cannot find new software on the air!",
						"The new software version XXXX is found. Do you want to update now?",
						"Please insert the USB stick.",
						"Software file check failed, please try again!",
						"Updating. This will take some time to complete, TV will then auto-restart!",
						"The software has been successfully updated.\nTV will then auto-restart!",
						"The new software version XXXX is found. Do you want to download now? This may take a while depending on your network status.",
						"Downloading",
						"Software downloaded successfully. Do you want to start updating your TV?",
						"Update failed!",
						"Searching for upgrade files",
						"The software has been successfully updated.\nPlease restart the TV now."];
var sysProductInfo	= ["Current version","Product name","Manufacturer name","Name of chassis"];
var sysCiDes		= ["No CI card found."];
var sysAdOptions	= ["DivX(R) registration","DivX(R) deregistration","T-Link","Authorization error","Deregistration confirmation",
						"Rental Confirmation","Rental expired"];
var sysRegistDes	= ["You must register your device to play DivX(R) protected videos.",
						"Registration code:",
						"Register at http://vod.divx.com"];
var sysDregistDes	= ["Deregistration code:",
						"Deregister at http://vod.divx.com",
						"Continue with registration?"];
var mediaAuthorization = ["Your device is not authorized to play this DivX(R) protected video."];
var deregistrationConfrimation = ["Your device is already registered.","Are you sure you wish to deregister?"];
var rentalConfirmation = "The DivX(R) rental has used XXXX out of YYYY views. Continue?";
var rentalExpired 	= "The DivX(R) rental has used XXXX out of YYYY views. The DivX rental has expired.";
var parentalRatingLA		= ["Parental rating","Age rating","Content rating"]				
var parentalRatingNA		= ["Parental rating","Block unrated rating","Age rating","Content rating","US","Canada","RRT settings","Reset RRT"];
var parentalRatingOptionUS		= ["US","TV rating","MPAA"];
var sysTVRatingUS=["TV-Y","TV-Y7","TV-PG","TV-14","TV-MA"];
var sysMPAAUS=["G","PG","PG-13","R","NC-17","X"];
var parentalRatingOptionCanada		= ["Canada","Canada Eng","Canada Fre"];
var sysCanadaEng=["C","C8+","G","PG","14+","18+"];
var sysCanadaFre=["G","8ans+","13ans+","16ans+","18ans+",""];
var sysResetRRT=["Are you sure to reset RRT?"];
var ageRatingOptions 		= ["L","10","12","14","16","18"];
var contentRatingOptions    = ["Off","Drugs","Violence","Sex","Violence & Drugs","Sex & Drugs","Violence & Sex","Violence, Sex & Drugs"];						
var sysLockOptions	= ["Channel lock","Time interval lock","Parental rating","Input lock","Front panel lock","Installation lock",
						"Change password","Max volume","Clean all"];
var sysTimeIntervals= ["Lock type","Start time","End time"];
var sysRatingOptions= ["None","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","X-rated (Spain)"];
var changePass		= ["Change password","New password","Confirm password"];
var changePassDes	= ["Password incorrect.\nPlease enter again!",
						"Password does not match.\nPlease enter again!",
						"Password set successfully!",
						"This code is too simple to be set as password.\nPlease enter again!"];
var sysPowerOnChOptions= "Select mode";
var sysPowerOnCh	= ["Last status","User select"];
var netWlessSecu    = ["Open","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["None","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Not supported"];
var netWlessSecu3	= ["None","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Not supported"];
var netOptions		= ["Internet connection","Interface","Wireless settings","IP settings","Information",
						"Connection test","DLNA","TV Remote","Netflix settings","Wireless Display",
						"Address type","IP address","Subnet mask","Default gateway","Primary DNS",
						"Secondary DNS","SSID","BSSID","Please input SSID:","User ID"];
var chEditDes		= ["Duplicated channel number!","Press Red Key to delete current character!","Invalid channel numbers."];
var chEpgNoProgram	= "No program info now, please search channels first!";
var chEpgWords		= ["Program Guide","No program data.","Channel Locked!","No program details.","No program title."];
var chEpgBooking	= ["Schedule Info", "Channel Number","Start Date","Start Time","End Time",
						"Repeat type","Schedule type","Add schedule","Replace","Change",
						"Add/Modify"];
var epgHotKey		= ["Prev day","Next day","Filter","Schedule list","Add schedule"];
var chEpgBookRemind	= ["Incorrect Start Time","Incorrect End Time","Duplicated Schedule","Successfully saved.","Successfully deleted."];
var chSchePara		= ["Schedule List","Start Time","Start Date","Program Title","Channel Name",
						"Duration","Repeat","Schedule","Edit","Delete"];
var dateTimer		= ["Once","Daily","Weekly"];
var scheduleDeleteReminds="Do you want to delete this schedule?";
var scheduleNoLists	= "There is no schedule list. Press \"Red\" key to add one.";
var chListWords		= ["Channel list","Select list","Tuner mode","Add to Favorites","Remove",
						"Select channel list","Select tuner mode","Swap"];
var chListType		= ["All","Digital","Analogue","Radio","Free","Favorites"];
var chAutoScanOptions=["Select operator","Channel type","Automatic search"];
var souSoundType	= ["Invalid","Mono","Mono","Stereo","Stereo",
						"SAP","SAP","Dual1","Dual2","Dual2",
						"Nicam Mono","Nicam Stereo","Nicam dual1","Nicam dual2","Nicam dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Music","Movie","Voice","Standard","Personal"];
var picAdRgbMode	= ["Off","Red Only","Green Only","Blue Only"];
var picAdOptions	= ["Noise reduction","MPEG NR","RGB mode","Dynamic contrast","LED Motion clarity",
						"Flesh tone","Film mode","Game mode","Color temperature","White balance",
						"Picture freeze","Black stretch","Overscan","Gamma","HDMI mode","10P white balance","Color extender",
						"Blur reduction","Judder reduction","Color space","Motion clarity"];
var pic10Pwhite     = ["Interval","Red","Green","Blue","Reset","Color","Yellow","Cyan","Magenta"];
var picMotionClarity = ["Motion mode","Motion interpolation","LED Motion clarity","Blur reduction","Judder reduction","Reset"];
var picMotionMode   = ["Film","Smooth","Clear","Sport","Customer"];
var picResetDes		= "All personal settings will be reset. Are you sure you want to do the selected action?";
var pic10PReset     = "Are you sure you want to reset 10P white balance?";
var picMotionReset  = "Do you want to reset Motion clarity?";
var picColorSpaceReset    = "Are you sure you want to reset color space?";
var picOptions		= ["Picture preset",
						"Backlight","Brightness","Contrast","Saturation","Tint","Sharpness","Color temperature","Screen mode","Auto format",
						"Sport enhancement","3D","3D navigation","ECO settings","Geometry",
							"Advanced settings","Picture reset","Micro Dimming"];
var picSize			= ["16:9 format", "4:3 format", "14:9 format", "Cinerama",
						"16:9 Zoom", "16:9 Zoom up","14:9 Zoom","Stretch Zoom","Wide Zoom",
						"Zoom 2","Wide Zoom 2","Screen Native Match","Dot by Dot","Original","Panorama"];
var others			= ["Volume","Broadcast","Password","Status","Save","Replace","Start","Exit","Search","Delete",
						"None","Automatic","Scan","Security","Connect","Refresh","Retry","Stop","Settings","Channels",
						"Edit","Insert","Signal","Finish","Stereo","Audio","Source","No audio","Tips","Reset",
						"Customer","Setup","Store","User","Close keyboard","Security mode","Every day","PVR list"];
var direction		= ["Left","Right","Up","Down"];
var audioType 		= ["MPEG","DOLBY AUDIO"/*"AC3"*/,"MPEG4","AAC", "DOLBY AUDIO"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Unknown"];
var soundChannels   = ["Unknown","Mono","Sub","Dual Mono","Stereo","Stereo Sub","Stereo Dolby Surround","Surround 2Ch","Surround","3.0Ch","4.0Ch","5.0Ch","Mono Lfe","Dual Mono Lfe","Stereo Lfe","Surround 2Ch Lfe","Surround Lfe","3.1Ch","4.1Ch","5.1Ch","7.1Ch","Joint Stereo","Fmrdo Mono","Fmrdo Stereo","Fm Mono Nicam Mono","Fm Mono Nicam Stereo","Fm Mono Nicam Dual","Left","Right","Others"];
var prompts			= ["Adjust picture setting that best suits your viewing environment.",
						"Adjust brightness levels. The closer to 100, the brighter.",
						"Adjust contrast levels. The closer to 100, the bigger the picture dark-bright differences.",
						"Adjust saturation levels. The closer to 100, the stronger the color.",
						"Adjust sharpness levels. The closer to 100, the clearer the details.",
						"Adjust backlight levels. The closer to 100, the brighter the screen.",
						"Adjust tint levels. This setting modifies the color tones.",
						"Select the picture format that best suits the program being viewed.",
						"Configure energy saving options.",
						"Adjust screen geometry settings when connecting a PC device.",
						"Select more picture advanced settings.",
						"Restore all picture settings to default.",
						"Select a sound mode to suit your personal preference.",
						"Adjust the volume balance between left channel and right channel.",
						"Sound Retrieval System TruSurround HD provides rich sound performance and clarity at low and high frequencies.",
						"Digital Interface Format connecting the TV digital sound output to home theater audio equipment.",
						"Select audio language to suit your personal preference.",
						"Enable the Visually Impaired to enjoy television programs.",
						"Test your TV picture, sound and signal.",
						"Select channel list type to suit your TV signal.",
						"Select the language of the program's subtitles displayed at the bottom of the screen.",
						"View the current channel's text and images.",
						"Enjoy music, photos and videos via home network from other devices, such as a PC.",
						"Display your smartphone contents on the TV and use the smartphone as a remote control for the TV.",
						"Display contents from a Miracast-compatible Android device on your TV screen.",
						"Put a lock on your TV.",
						"Select a name for your device.",
						"Select your viewing environment.",
						"Restore all System Settings to default.",
    					"Switch off sports mode for more options.",
						"Enhance the environmental contrast",
    					"A special mode to enjoy sport games",
    					"Enjoy more CEC functions."];
var initialTitle	= ["Welcome","Initial Setup"];
var initialPrompt	= ["Do your Initial Setup now, and a World of Exciting Experience awaits you!",
						"Please select your language:",
						"Please select your country/region:",
						"Please select your location:",
						"Please select your network connection type:",
						"Please select wired network connection mode:",
						"Failed to connect to xxxxxxxxx! Please connect the device according to the following Diagram or select Left  to reset.",
						"Connected to xxxxxxxxx! Please select Right to continue.",
						"1)Your TV may already have a built-in Wireless Adapter\n 2)Or, if a Wireless USB Adapter is provided, connect it to your TV.  Then, please select wireless network connection mode",
						"Scanning. Please wait...",
						"There is no Wireless Adapter connected to the TV!",
						"Please ensure the following PIN code is installed into the Access Point before you click the below ‘Next’ button.",
						"Please press push button on the AP within 120 seconds before pressing Right !",
						"WPS(Wi-Fi Protected Setup)",
						"PIN (Personal Identification Number)",
						"PBC (Push Button Configuration)",
						"The following contents can only be accessed with a network connection. Do you want to skip Network Setup?",
						"There are new software updates for you to download, this may take a while depending on your network status.",
						"Updating your TV software ensures you can enjoy the latest features and services.",
						"You won't enjoy the latest features and services. Do you want to skip Software Update?",
						"Press the Right Button to continue.",
						"Do not power off during updating as this may cause TV malfunction.",
						"If you don't want to update, please select NO.",
						"Updating, please wait",
						"You can also update software in SYSTEM/SOFTWARE UPDATE.",
						"The country selected asks for password setting.\nPlease set code for your TV and confirm it.",
						"This code is too simple.\nPlease use different digits.",
						"Congratulations! Initial setup is completed. You can modify your configuration via the main Menu and related sub-menus.",
						"Please select the security mode:",
						"Please select wireless network connection mode:",
						"network",
    					"Please select your wide area zone:",
    					"Please select your region:",
    					"Please select your city:"];
var initNetCabAndDonRe = ["No network cable connected, please plug in a network cable!","No built-in wireless adapter or no wireless USB adapter is provided."];
var initChPrompt = ["TV Channel installation","Please select Antenna scan type.","Processing auto tuning...","The following Antenna channels were found:","Please select Cable scan type.","Please select one operator from the following list.","Please configure the scan info","The following Cable channels were found:","Please select one operator from the following list","Please select satellites to scan or edit the selected satellite","Please set the satellite's parameters","The following channels were found, and the channel scan can also be performed again in Channel/Channel Scan"];
var initClockPrompt = ["Get the network-provided time!",
						"Please set Date and Time:"];
var initialOptions	= ["Environment","Network Setup","Software Update","Channel Installation","Clock"];
var initialHotkeys	= ["Back","Select","Next","I agree"];
var initLocations	= ["Home","Shop","Shop with demo"];
var initNets		= ["Wired","Wireless","I do not have a network connection"];
var initWireManuals	= ["IP Address","Subnet Mask","Default Gateway","Primary DNS","Secondary DNS"];
var initSoftUpdates = ["Update now","Update later"];
var initChannelIns	= ["Continue","I don't want to install channels"];
var initChScanTypes	= ["Digital & Analogue","Digital","Analogue","I don't want to scan"];
var initChDvbts		= ["Antenna ATV channels:","Antenna DTV channels:"];
var initChDvbcs		= ["Cable ATV channels:","Cable DTV channels:"];
var initChDvbss		= ["Satellite channels:"];
var initChDvbSOther	= ["I don't want to scan satellite"];
var initEndConnectedStatus= ["Disconnected","WiFi connected","Wired connected"];
var initEndInstallations= "XXXX channels installed";
var initEndUpdate	= ["Updated"];

var audioScenes 	= ["Desk top","Wall mount"];			
var screenSavers	= ["No channels, please press OK key and scan!",
						"No signal!",
						"Scrambled",
						"Data Only",
						"Audio program",
						"No Audio and Video",
						"Not Available",
						"No Teletext",
						"No program data.",
						"Program Locked!",
						"Program Locked!\nPress OK and enter your code.",
						"No program details.",
						"Program harmful for minors.\nPress OK and enter your code.",
						"Channel Locked!",
						"Channel Locked!\nPress OK and enter your code.",
						"Input Locked!\nPress OK and enter your code.",
						"Not supported!",
						"This service is not currently available",
						"Input Locked!",
						"No program title.",
						"No Function",
    					"No Subtitle"
						];
var channelNumberOverPromt = ["The number of search programs has exceeded,you can delete some programs and then retry!"];
var chBookingPromt	= ["The current channel has a scheduled recording, TV will start recording.",
						"A scheduled recording is found.\n Switch to XXXX to record",
						"The current channel has a reminder.",
						"A scheduled reminder is found.\n Switch to XXXX"];
var timeUnit		= ["Sec","Min"];
var ciPromt			= ["The network data have changed. To update you can perform an update scan. ",];
var othersPromt		= ["Please wait...",];
var menuOptions		= ["Picture","Sound","Channel","Smart TV","Network","System","Support"];
var optionOptions	= ["Picture preset","Sound preset","Picture freeze","T-Link","Timeshift","PVR","Schedule list","Settings","demo"];
var optionTLinkPromt= [["Auto power on","Auto standby","Guide menu"],
						["power on","standby","Amplifier Volume"]];
var powerPromt		= ["TV will power off soon!\n Please press any key to cancel."];
var ttxLanguage		= ["West EUR","East EUR","Russian","Arabic/Hebrew","Farsi","Arabic","Byelorussian","Greek","Turkish"];
var ttxOptions		= ["Reveal","Cycle subpages","Language","Alarm page","NewsFlash"];
var weekday         = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var lcnConfflict	= "This programme has reception problems. There is another version available on channel %d ";
var inShopMode		= "Your TV is in shop mode. For home mode please select 'System' and change 'Location' in menu.";
var nitRefresh		= "The network data have changed. Do you want to perform update scan?";
var picHDMIMode     = ["Auto","Graphic","Video"];

var glassRemind    	= ["Please pair your 3D glasses with the TV\n(Press and hold POWER key on 3D glasses).","Your 3D glasses are connected to the TV ",""];
var pvrRemind 		= ["Do not pull out USB drive or interrupt the power"];
var pvrConName   	= ["PVR","Program information:",["Note: To record HD channel, select  USB drive (of speed >5.0MB/sec); to record SD channel, select USB drive (of speed >3.0MB/sec). ","Recorded video is saved in  \"PVR\"  folder."],"Stop","Record","Hour","Minute","Duration","Tips","Use arrow keys to set recording duration."];
var pvrDisRemind 	= "Please insert USB drive for recording.";
var pvrRemindWords  = ["Do you want to exit?",
							"Do you want to stop recording and browse recorded files?",
							"USB drive removed.",
							"There is not enough free space.",
							"No recorded files. Start to record.",
							"PVR is not supported on Scrambled Channel.",
							"Feature not available",
							"Successfully saved.",
							"Do you want to stop the record process, and change input source?",
							"TV will end the current recording. Do you want to exit?",
							"PVR recording needs TV signal to work properly, please check your signal."];
var pvrChangeCh 	= ["Do you want to change channel?",
							"Do you want to stop the record process, and change channel?"];
var pvrChangeToPIN8	= ["Do you want to  change source to device connected to SCART input?",
				    		"Do you want to stop the record process and change source to device connected to SCART input?"];
var pvrChangeToCEC  = ["Do you want to change source to device connected to an HDMI input?",
				  			 "Do you want to stop the record process and change source to device connected to an HDMI input?"];
var pvrGuideJump    = ["Do you want to enter EPG?",
							"Do you want to stop the record process, and enter EPG?"];
var pvrMediaJump    = ["Do you want to enter Media?",
							"Do you want to stop the record process, and enter Media?"];
var timeshiftExtra	= ["Do you want to stop the timeshift, and change channel?",
						"Do you want to stop the timeshift, and change source to device connected to SCART input?",
						"Do you want to stop the timeshift, and change source to device connected to an HDMI input?",
						"Timeshift is not supported on Scrambled Channel.",
						"Do you want to stop the timeshift, and enter EPG?",
						"Do you want to stop the timeshift, and enter Media?",
						"Do you want to stop the timeshift, and change input source?",
						"Please insert USB drive for recording.",
						"The USB drive size is not enough.",
						"TV will end the current timeshift. Do you want to exit?"];
var timeshiftStatus	= ["Fast Backward","Stop","Play","Pause","Fast Forward"];
var pvrPowerOffRemind= ["Standby Recording","Standby","TV is recording now, do you want to keep recording when TV is in standby mode?"];
var timeshiftInitTitle= "USB drive setup";
var timeshiftInitReminds= ["This wizard is used to set up the USB drive for timeshift. Please select the setup mode.",
						 "For better performance, we recommend formatting the USB drive. This will erase all the data.",
						 "Please select the file size for timeshift.",
						 "Formatting",
						 "There is not enough free space.",
						 "Creating timeshift file",
						 "Speed testing",
						 "The USB drive speed is too slow (< %f MB/sec) for timeshift feature!",
						 "The USB drive is ready for timeshift. But we recommend changing it (to speed > %f MB/sec) for better performance.",
						 "The USB drive is ready for timeshift."];
var timeshiftInitButtons= ["Format","Skip","Cancel","OK","Finish","Exit"];
var timeshiftInitOther=["USB drive speed:","MB/sec"];

var selectChoice	= "Are you sure you want to do the selected action?";
var chAtvStore		= "Store as XXXX";
var chEpgFirstGenreUK= ["Movie","News and Factual","Entertainment","Sport","Children's","Education","Lifestyle","Drama"];
var homePageTitleList = ["APPS","TV","VIDEOS","Homepage"];
var homePageFavAndAllName  = ["Favorite Apps","All Apps"];
var homePageBackUp = ["E-Manual","GuideOn"];
var homePageRemind   = ["Full functions are available only after network connection.","Your TV does not have any channels yet. Programs are available after channel scanning.","No Program","Search channels now?"];
var homePageHistory = ["History"];
var miracastTitle = ["Wireless Display","TCL device"];
var miracastRemind=["Wireless Display allows you to share screen and sound of your device such as a smartphone or a tablet to your TV, wirelessly (i.e. without cables). This makes it possible to view on your TV, at the same time, what your smartphone or tablet is showing. For example, you can launch a video on your smartphone and display it simultaneously on your TV, or use your tablet as game controller with content displayed on the big screen of your TV.","Wireless Display on the TV is ready, please start to share your device screen with the TV now.","Connecting. Please wait!","Connection failed!","Failed to connect.Please check!"];
var homePageLittleWin = ["Settings","Media","Fav channels","Smart TV","EPG"];

var hbbtvStopRemind  = ["Do you want to stop playback?"];
var colorSystem = ["Auto","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Press ≡ for more information";
var emptyListInfo = "There is no USB drive connected to TV !";
var optionVideoListArray_1 = ["Picture preset", "Sound preset", "Play mode", "Screen mode", "3D mode", 
							  "L-R switch", "Depth of field", "Subtitle", "Sound track", "Title", "Chapter", "Info"];
var optionVideoListArray_2 = ["Picture preset", "Sound preset", "Play mode", "Screen mode", 
							  "Subtitle", "Sound track", "Title", "Chapter", "Info"];
var bottomTipsText = ["Play/Pause", "Fast Backward", "Fast Forward", "Playlist", "Settings"];
var picturePresetArray = ["Standard", "Dynamic", "Natural", "Movie", "Personal"];
var videoPlayModeArray = ["Repeat All", "Repeat One", "Normal"];
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Wide Zoom", "Zoom 2", "Wide Zoom 2", "Stretch Zoom", "Automatic"];
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "14:9 Zoom", "16:9 Zoom", "16:9 Zoom up", "Automatic"];
var Mode3DArray = ["Off", "2D-to-3D", "Side-by-Side", "Top-and-Bottom", "Line interleave"];
var videoOptionListArray = ["Off", "Track", "Subtitle", "Title", "Chapter"];
var subMenuTitleText = "Subtitle";
var langMenuTitleText = "Audio language";
var titleMenuTitleText = "Title";
var mode3DMenuTitleText = "3D mode";
var langInfoText = "Track";
var STOP_RESUME_INFO = "Stop-Resume";
var playListName = "name";
var eb_tips = "Tips";
var ok_button = "OK";
var eb_info = ["Audio decoding error.", "Video decoding error.", "Audio format not supported.", 
			   "Video format not supported.", "Can't open this file.", "Playback error, please try again.",
			   "File format not supported.", "Oops! Player has stopped running.",
			   "File path does not exist or is invalid.\n Re-insert the storage device and try again.",
			   "Continue playing from the previous\n playback status?"];
var picturePlayErrorTips = ["Loading fail!!!", "Picture is too large!!!", "Network error!!!", "Thread error!!!", 
	"Param error!!!", "Unknown error!!!"];
var frameTitleText = "New Device";
var eb_quit_info = "Are you sure you want to quit?";
var eb_yes = "Yes";
var eb_no = "No";
var offinfo = "Off";
var naInfo = "Null";
var consoleInfoArray = ["Fast Backward", "Fast Forward", "Play/Pause", "Playlist"];
var cantOperateText = ["Function not supported."];
var chapterChangeInfo = "Only Chapters from 1 to XXXX are available.";
var metaDataArray = ["Title/Edition Metadata: ", "Chapter Metadata: ", "Audio Metadata: ", "Subtitle Metadata: "];
var metaTitleInfo = "Title";
var metaChapterInfo = "Chapter";
var videoLoadingInfo = "Analyzing...";
var listLoadingInfo = "Loading...";
var pgInfo = "Law Rating: ";
var fileNameText = "Name";
var fileDateText = "Date";
var fileSizeText = "Size";
var fileDurationText = "Duration";
var fileDirectorText = "Director";
var fileCopyrightText = "Copyright";
var fileArtistText = "Artist";
var fileAlbumText = "Album";
var fileGenreText = "Genre";
var fileYearText = "Year";
var fileGenreText = "Genre";
var mainListArray = ["All", "Picture", "Video", "Music"];
var sortArray = ["Name", "Date"];
var parserArray = ["Normal", "Recursive  "];
var emptyTipsInfo = "Oops. No supported file is found.";
var emptyFolderInfo = "Oops. No supported file is found.";
var sortName = "Sort by";
var parserName = "Parser";
var divx_str1 = "DivX(R) Registration";
var divx_str2 = "DivX(R) Deregistration";
var infor_str = "Info";
var quickMenuEmptyText = "No Available Options.";

var musicSoundPresetArray = ["Standard", "Movie", "Music", "Clear voice", "Personal"];
var musicInformationArray = ["Name", "Artist", "Album", "Genre:", "Year:", "Duration:"];
var playListName = "name";
var playTipsInfo = ["You are playing the first file.", "You are playing the last file."]
var musicNameInfo = "Name";
var musicArtistInfo = "Artist";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Sound preset";
var optionBGMInfo = "Play in the background";
var optionAudioOnlyInfo = "Audio only";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX has connected to TV!";
var tvRemoteTitle		= "TV Remote";
var tvRemoteDeveloper	= "The application was developed by TCL";
var tvRemoteDeviceTitle	= "Device Name:";
var remoteOption		= ["Media Sharing","Remote Control","Help","About","Smart Connect"];
var remotebottom		= " Please download \"TV Remote\" to your smartphone ";
var remoteStage			= ["Android","iOS"];
var sharingReminds		= ["Sharing photos, videos and music with TV through phone.",
							"Steps: \n   1. Click \"TV Remote\" on phone. Connect phone with TV via same WiFi network;\n   2. Click \"Media Sharing\" to browse media files;\n   3. Send media to TV to play  back (with one of the following options)",
							"      a) Drag & Drop folder/file to the TV icon on top of the screen;\n      b) Swing phone towards TV to launch the first file;\n      c) Play the media on phone and click the TV sharing icon;",
							"   4. While playing on TV, shake the phone to play previous or next file."];
var controlReminds		= ["Use phone as a remote control to operate TV.",
							" ",
							"Steps: \n   1. Click \"TV Remote\" on phone. Connect phone with TV via same WiFi network;\n   2. Click \"Remote Control\" to operate TV."];
var helpDeviceWords		= "Multi-screen Interaction";
var helpBottom			= "In the cloud technology era, smart devices like phone and TV are mutually connected. Share media on multi-screens with your family and control TV through phone! ";
var helpReminds			= ["Preparations\n   1. Download and install \"TV Remote\" from Google Play or Apple Store.\n   2. Connect phone with TV via same WiFi network.",
							" ",
							"Phone recommended\n   1. CPU: above 800MHz\n   2. Storage: at least 80MB free space",
							" ",
							"Disclaimer\n   If \"TV Remote\" is unavailable on your phone, please contact the phone manufacturer. "];
var helpButtons			= ["Previous","Next"];
var aboutReminds		= ["TV Remote","The application was developed by TCL"];
var aboutExit			= "Exit";
var smartReminds		= ["Quick and smart connection between TV and phone.",
							" ",
							"Steps \n   1. Connect TV and smartphone to the same LAN. Click \"TV Remote\" on smartphone.\n   2. Click \"Smart Connect\" to scan the QR code.\n   3. With TV in broadcast viewing mode, press INFO key on TV remote control for 4 seconds, a full screen QR code will pop up.",];
var smartQRReminds		= ["Please click \"Smart Connect\" in \"TV Remote\" on your phone and scan the QR code to connect TV and phone quickly.",
							"QR code contains LAN account info. Please keep it safe."];
							

var consoleTipArray = ["Previous","Next","Console","Playlist"];							
var optionInfoArray = ["Picture preset","Play mode","Duration","Effect","Info"];

var playModeArray = ["Normal","Shuffle","Repeat"];
var durationArray = ["Short (5s)", "Medium (10s)", "Long (15s)"];
var effectArray = ["None", "Rotate", "Wipe right", "Wipe left", "Wipe up", "Wipe down", "Box in", "Box out", "Random"];
var infoArray = ["Name:","Size:","Date:","Location"];

var picturePresetBarTitleInfo = "Picture preset";
var picturePresetBarArray = ["Standard","Dynamic","Studio","Movie","Personal"];
var upTipsInfo = "Move Picture"; //add yums 2014-10-10
var consoleTipsArray = ["Console","Previous","Next","Playlist","Settings"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Press RIGHT again to play next picture","Press LEFT again to play previous picture","Press DOWN again to show playlist"]; //add yums 2014-10-10

var optionPvrListArray = ["Picture preset","Sound preset", "Screen mode", "3D mode", "Subtitle", "Sound track", "Info"];							
	
var titleSpanFirstArray = ["Control & Connection","Basic Operations","Apps","TV","Settings","FAQ"];
var titleSpanSecondArray = [["Remote Control","Panel Keys","Easy Navigation","TV Connection","TV Connection","TV Connection","Wireless"],["Launcher","Status bar","Source"],["Playing apps","Media","TV Remote"],["Adjust channel and volume","Channel list","EPG","Channel install","Favorite channels"],["Picture adjustment","Sound adjustment","Channel adjustment","Software update","Language","Parental lock"],["Frequently asked questions","Frequently asked questions","Troubleshooting","Troubleshooting","Terms and conditions"]];
var contentSpan1_1Array =[["POWER:","SOURCE:","SETTINGS:","OPTION:","BACK:","INFO:","HOME:","EXIT:","LIST:"],
    ["Turns power on or standby mode",
        "Select the input source",
        "To display the Settings menu",
        "To display the Option menu",
        "Go back to the Previous menu or exit a running APP",
        "Shows program information",
        "To access the Smart TV homepage",
        "Go back to the Previous menu or exit a running APP",
        "Shows the channel list"]];
var contentSpan1_2Array = ["Previous channel","Next channel","Turn volume up","Turn volume down","Goes to Homepage","Confirm the option","Standby / Power on"];
var contentSpan1_3Array = ["OK/Guide","Channel up","Channel down","Volume down","Volume up","Available as arrow keys in some functions."];
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","AV OUT adapter","LAN","Smartphone","PC/Set-top box/DVD","Audio amplifier","Audio amplifier/Monitor","Your TV may not include all sockets."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Headphone","AV IN adapter","SPDIF","CMP AUDIO IN adapter","CMP IN (YPbPr) adapter","USB devices","USB devices","Headphone","DVC/Game Console/Set-top box/DVD","Audio amplifier","DVC/Game Console/Set-top box/DVD","Your TV may not include all sockets."];
var contentSpan1_6Array = ["Common Interface","SD","VGA","SCART","Mini SCART","ANTENNA IN","CI  CAM","SD Card","PC","Set-top box/DVD","Antenna/Cable/Satellite","Your TV may not include all sockets."];
var contentSpan1_7Array = ["Tablet","PC","Router","Phone","TV"];
var contentSpan1_8Array = ["Switch function/Power","Long press to go to sleep timer","Down","Up","Volume/Channel/Source"];

var contentSpan2Array = [["Press HOME to view homepage.","Then press OK to watch one of the featured programs or enter the App."],["Show date, network and devices etc. at the upper right corner of the screen."],["Select the input source from devices connected to TV through different ports, such as TV, AV, HDMI etc."]];

var contentSpan3Array = ["Enjoy and view your favorite Apps through Smart TV page.","View photos, watch videos and play music from a USB storage device.","Connect your TV and smartphone or tablet to the same LAN.","Click nScreen or TV Remote on the smartphone or tablet.","Share photos, videos and music on multi-screens with your family and control your TV through your smartphone."];

var contentSpan4Array = [["Press P+/P- to switch channels.","Press V+/V- to adjust volume."],["Press LIST on the remote control to view channels line-up.","Press UP/DOWN to choose your channel."],["EPG is an on-screen guide that displays scheduled TV programs. You can navigate, select, view and record programs."],["Search and install channels."],["Add or edit your favorite channels in Channel list."]];

var contentSpan5Array = ["Enjoy your favorite programs through video Apps."];

var contentSpan6Array = [["Press MENU to show system setting options.","Enter Picture settings to adjust the values."],["Press MENU to show system setting options.","Enter Sound settings to set the options."],["Press MENU to show system setting options.","Enter Channel settings to set the options."],["Update your TV when a new software version is available."],["You can choose your preferred menu language."],["Enables parents to lock the channels or programs which are unsuitable to children."]];

var contentSpan7_1Array = [["No picture, no sound","Check if the fuse or circuit breaker is working.","Plug another electrical device into the electric socket to make sure it is working or has been turned on.","Power plug is in bad contact with the power socket.","Check the signal source."],["Normal picture, no sound","Press the volume V+ button to increase volume.","Sound setting is incorrect.","Signal error from the broadcast."],["Normal sound, no picture","Adjust the brightness and contrast.","Signal error from the broadcast.","Check if it is in audio only mode."]];
var contentSpan7_2Array = [["Radio frequency interference","This interference produces moving ripples or diagonal streaks, and in some cases, loss of contrast in the picture. Find and remove the radio interference source."],["No color","Adjust the color settings.","Try another channel. Black-and-white program may be received."],["Remote control does not work","Replace the batteries.","Batteries are not installed correctly. Main power of the TV is not connected."]];
var contentSpan7_3Array = [["USB device content is not displayed","Check that the USB storage device is compatible with the TV.","Check that the audio and picture file formats are supported by the TV."],["Playing with no sound","The audio format of the video is not supported by the TV player."],["Files do not play smoothly","The transfer performance of the USB storage device may limit the data transfer rate to the TV."]];
var contentSpan7_4Array = [["What should I pay attention to, when I do software updating","No Power cuts when software updating.","Avoid any operations with your remote control when software updating.","Be patient because the software updating process may take a little longer."],["There are no distinct changes of TV interface after software updating.","Under certain conditions, SW updating may not only update or add new functions but also improve the performance of the TV set without distinct changes of interface. Also, the TV interface may remain intact sometimes."]];
var termsTitle = "Terms and conditions";
var termsConditions = ["The contents and services (collectively the \"Licensed Application\") made available to you through this TV set (this \"Device\") are licensed, not sold, to you for use only under these terms and conditions. The providers of the Licensed Application (each an \"Application Provider\") reserve all rights not expressly granted to you. \n 1.	Scope of License \n The license granted to you for a Licensed Application by the relevant Application Provider is limited to a non-transferable license to use the Licensed Application on the Device that you own or control. You may not distribute or make the Licensed Application available over a network where it could be used by multiple devices at the same time. You may not rent, lease, lend, sell, redistribute or sublicense the Licensed Application. \n You acknowledge and agree that all Licensed Application and all contents included therein that are accessible through this Device belong to Application Provider and are protected by applicable intellectual property laws. You may not modify, copy, decompile, reverse engineer, disassemble, republish, upload, post, transmit, translate, attempt to derive the source code of, create derivative works of, or otherwise exploit any Licensed Application or any updates or any part thereof. If you breach this restriction, you may be subject to prosecution and damages. The terms of the license will govern any upgrades provided by Application Provider that replace and/or supplement the original Licensed Application, unless such upgrade is accompanied by a separate license in which case the terms of that license will govern. You will be solely responsible for any and all costs (if any) for the upgrading of the Licensed Application. \n 2.	Third-party Materials \n The Licensed Application may enable access to Application Provider's and third party services and web sites (collectively the \"Services\"). You understand that by using any of the Services, you may encounter contents that may be deemed offensive, indecent, or objectionable, which contents may or may not be identified as having explicit language, and that the results of any search or entering of a particular URL may automatically and unintentionally generate links or references to objectionable material. Nevertheless, you agree that the manufacturer of this Device (the \"Manufacturer\") and the Application Provider shall not have any liability to you for contents that may be found to be offensive, indecent, or objectionable.\nBy using the Services, you acknowledge and agree that the Manufacturer is not responsible for examining or evaluating the content, accuracy, completeness, timeliness, validity, copyright compliance, legality, quality or any other aspect of such Services. The Manufacturer does not warrant or endorse and does not assume and will not have any liability or responsibility to you or any other person for any of the Services. \n You acknowledge and agree that the Services may contain proprietary content, information and material (collectively \"Third-party Materials\") that are protected by applicable intellectual property and other laws, and that you will not use such Third-party Materials in any way whatsoever except for permitted use of the Services. You agree not to reproduce, modify, rent, lease, loan, sell, distribute the Third-party Materials or create derivative works thereof in any manner, and you shall not exploit the Services in any unauthorized way whatsoever. You further agree not to use the Services in any manner to harass, abuse, stalk, threaten, defame or otherwise infringe or violate the rights of any other party, and that the Manufacturer is not in any way responsible for any such use by you, nor for any harassing, threatening, defamatory, offensive or illegal messages or transmissions that you may receive as a result of using any of the Services. \n 3.	No Warranty\nYou acknowledge and agree that use of the Licensed Application and the Services is at your sole risk. All Licensed Application and Services are provided \"as is\" and \"as available\" without warranty of any kind, either express or implied. The Manufacturer expressly disclaims all warranties and conditions with respect to the Licensed Application and the Services, either express or implied, including but not limited to, warranties of merchantability, of satisfactory quality, of fitness for a particular purpose, of accuracy, of quiet enjoyment, and of non-infringement of third party rights. The Manufacturer does not guarantee the accuracy, validity, timeliness, legality, or completeness of any Licensed Application or Services made available through this Device and does not warrant that the Device, the Licensed Application or the Services will meet your requirements, or that operation of the Licensed Application or the Services will be uninterrupted or error-free, or that defects in the Licensed Application or Services will be corrected. Should the Licensed Application or Services prove to be defective, you will assume the entire cost of all necessary servicing, repair or correction.\nYou acknowledge and agree that the Licensed Application and Services may be changed, suspended, removed, terminated or interrupted, or access may be disabled at any time, without notice, and the Manufacturer makes no representation or warranty that any content or service included in the Licensed Application and Services will remain available for any period of time. Such contents and services are transmitted by third parties by means of networks and transmission facilities over which the Manufacturer has no control. Without limiting the generality of the foregoing, the Manufacturer expressly disclaims any responsibility or liability for any change, interruption, disabling, removal of or suspension of any content or service made available through this device. The Application Provider and other providers of the Services reserve the right to change, suspend, remove, or disable access to any Licensed Application or Services at any time without notice. The Manufacturer may also impose limits on the use of or access to certain Licensed Application or Services, in any case and without notice or liability.\nThe Manufacturer is neither responsible nor liable for customer service related to the Licensed Application and the Services. Any question or request for service relating to the Licensed Application and the Services should be made directly to the respective provider.\n 4.	Collection and Use of Information\nYou agree that the Manufacturer, the Application Providers and the providers of the Services may collect and use technical data and related information, including but not limited to technical information about this Device, system and application software, and peripherals, to facilitate the provision of software updates, product support and other services to you (if any) related to the Device and the Licensed Application. The Manufacturer, the Application Providers and the providers of the Services may use such information, as long as it is in a form that does not personally identify you, to improve their products or to provide services or technologies to you. \n 5.	Unavailability of Certain Features\nDue to restrictions of Application Provider, certain features, applications, and services may not be available on this Device (including its peripheral devices) or in all territories. Some features on this Device may also require additional peripheral devices or membership fees that are sold separately. \n 6.	Limitation of Liabilities\nTo the extent not prohibited by the applicable law, under no circumstances, including negligence, shall the Manufacturer be liable, whether in contract or tort, for any direct, indirect, incidental, special or consequential damages, attorney fees, expenses, or any other damages arising out of, or in connection with, any information contained in, or as a result of the use of the Device, any Licensed Application or any Service by you or any third party, even if advised of the possibility of such damages."];

var noChannelListRemind        = ["No channels found. Channel list is available after channel scanning.","channel scan"];
var closeSubtitleRemind   = "Function will be available when subtitle is off. Do you want to set now?";

var estickerTitles = ["Highly realistic images","Colors that come alive","Great lifelike motion","Dynamic picture quality","SR UHD upscaling","Experience 3D world","Faster performance","Future 4K content","Enjoy online world","Access extra content","Integrated digital tuners","Connect all devices","Various 4K sources","USB content","Ultra fast WIFI","Mobile content on TV","Mobile device content","Local content","Approved by DivX","Seamless picture","Canal Ready","TDT Premium"];
var estickerDescriptions = ["Amazing viewing experience thanks to images with four times the detail of Full HD on UHD screen","Wide color gamut delivers emotion in every scene with vivid reds and emerald greens","4K frame interpolation and backlight driving to combat motion blur problems","The vividness of the original image is enhanced to produce truly dynamic expression with brilliant contrast","Enjoy crisper than before TV shows and Blu-Ray discs thanks to Super Resolution technology","Experience 3D TV ready and watch various 3D content","More enjoyable entertainment experience with Quad Core for smooth interaction, enhanced performance","HEVC (H.265) codec support for upcoming standard of 4K video distribution","Wealth of online applications, VOD services, catch-up TVs and Internet web browsing","See more with additional services and content from your favorite broadcasters","Access TV channels in high definition without additional set top box","Easy to connect many digital sources available at home","TV ready for future, able to playback 4K 50/60Hz via HDMI 2.0 with HDCP 2.2","Video or photo content directly from USB drive, HDD or camera on big screen in 4K resolution","Latest generation 2x2 MIMO and AC standard delivers unrivaled Internet access speed","Enjoy photos, videos, applications from mobile devices on big screen thanks to screen mirroring technology","Photos, videos, applications from smartphone or tablet can be displayed on big screen ","Display on big screen local content like photos, videos from devices connected to local network","Play rented or own movies protected by DivX","Ultra narrow bezel and super slim design","Tested and approved by Canal+","TDT Premium tested and approved"];							

var eManualTextArray = ["E-Manual","All graphics inside are for representation only."];
var frontPanelRemind = "Front panel is locked.";
var eRPRemind		 = "Shop mode does not meet the ERP requirements. Are you sure you want to select it?";	
var noRelatedChannel = "No related channel";
var option0624Name          = ["BOP","BFS","Event by event","GetUserID","BGM","Reset All","Reset shop","NRM","DVB-T2 and Country choice","HbbTV mode"];
var DVBT2AndChoice = ["On","By country","Off"];
var hbbtvServiceRemind = "HbbTV service is coming soon.";
var insertWord = "Insert";
var viewDetail = "View detail";

var remindOAD  = "Software update. A new recommended software update may exist on another channel. If you accept to download it, the TV will switch to the channel automatically. Would you like to do it right now?";		

var LEDStatus = ["Flashing", "Normal","Off"];
var netFlixRemind = "This function will interrupt the access to Netflix services until you sign in again.";
var ESNExplanation = "Electronic Serial Number";
var resetShopRemind = "System is resetting now, please do not switch off the TV";
var initialSelectOption = "Please select one option:";
var databaseRemind   = "System has identified the database as damaged for some unknown reason and rebuilt it automatically, press OK to continue";
var Deactivation = "Deactivation";
var oadFutureRemind = "Software update.\n A new recommended software will be available at %s. The update might take some time and the screen might go black. Do not turn off the receiver during the update. If you accept this update, please leave the receiver on at the scheduled time. Do you want to receive this update?";
														
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Sound output";
var bt_soundOutPutTV = "TV Speakers";
var bt_soundOutPutBT = "Bluetooth Device";
var bt_soundOutPutBT_TV = "Bluetooth and TV";
var bt_refreshBarName = "Devices";
var bt_settingTips_On = "Turn on Bluetooth function and scan devices. ";
var bt_settingTips_Finding = "Finding available devices…";
var bt_settingTips_NoDevice = "No available device.";
var bt_deviceList_State_NoConnect = "Not connected";
var bt_deviceList_State_Connecting = "Connecting...";
var bt_deviceList_State_Connected = "Connected";
var bt_deviceList_State_Paired = "Paired";
var bt_deviceList_Conncect_Failed_Tips1 = "Connection failed.";
var bt_deviceList_Conncect_Failed_Tips2 = "Please confirm XXX Bluetooth function is On";
var bt_deviceList_Conncect_Success = "Connected to Bluetooth device.";
var bt_deviceList_Disconncect_Success = "Disconnected from Bluetooth device.";
var bt_deviceList_Disconnect = "Are you sure you want to disconnect from XXX?";
var bt_tipsTitle = "Tip";
var bt_bluetooth_Pairing_Title = "Bluetooth pairing";
var bt_bluetooth_Input_Pin = "Please input PIN:";
var bt_bluetooth_Output_Pin_Tip = "Input PIN XXXX by keyboard.";
var bt_bluetooth_Pin_Wrong_Tip = "Wrong PIN";
var bt_bluetooth_Remove_Pair_Title = "Query";
var bt_bluetooth_Remove_Pair_Ask = "Forget this device?";
							
var audioDescriptionName = ["Audio description","Speaker","Speaker Volume","Headphone","Headphone Volume","AD Volume","BT Device","BT Device Volume","Amplifier","Speaker"];
var audioDescriptionOptions = ["Off","Normal","Audio description"];
var volumeOffRemind = "Please set XXX \"On\" in Settings menu.";
							
var mEPSRemind		 = "Shop mode does not meet the MEPS requirements. Are you sure you want to select it?";		
var parentRatingAUOptions = ["No block", "Block G and above(optional)", "Block PG and above",
							 "Block M and above", "Block MA and above", "Block AV and above", 
							 "Block R and above", "Block all"];	
var mEPSTips		= ["The current picture mode does not meet the MEPS\nrequirements, standard mode is recommended.", 
					   "Your TV is in shop mode.\nFor home mode, please see Settings menu."];
var switchSourceRemind   = " inserted.Do you want to switch?";
var footballModeName = "Sports mode";
var resetStadium = "Stadium";

var atvSearchMenu = "ATV manual search";
var dtvSearchMenu = "DTV manual search";
var settingNoticeSourceName ="Auto source";

var smartTVOptions		= ["Smart TV portal","HbbTV","Share&See","Wireless Display","Terms & conditions",
                            "Networked standby","Reset smart TV","Cookie policy","Privacy policy","Data Deletion","Samba TV Settings"];
var supportOptions		= ["Remote diagnosis","Contact us"];
var tvDoctor=["Remote diagnosis 2.0",
"The App is only available for your Smart TV to run diagnostic and improve product experience. TV operation data and model information will be collected by this App and uploaded to a server, it will be used to solve the problem. Your personal information will not be accessed. Make sure your TV is properly connected to the Internet.",
"Local diagnosis",
"Please follow support staff's direction once the siagnosis starts.",
"Remote diagnosis",
"Please make sure support staff is online.",
"Serial number:",
"&nbsp;&nbsp;&nbsp;&nbsp;User ID:",
"Connecting...",
"Connected, please keep the network connecting.",
"Unable to access to the internet, \nplease check the network connection.",
"Exit"
];
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
var contactUsOption = ["Contact us",
    "Please contact us if you are having problems operating this device.",
    "Contact us",
    "Web site: Visit",
    "Call center number:","Product information","Model name:",
    "Software version:","","User ID:","Project ID:",
    "Client type:","Wireless MAC address:","Wire MAC address:","Netflix ESN:","Scan the Information on your cellphone.",
    " then select your country."];



//本地launcher的翻译，与服务器无关，只用于本地launcher
var homePageWords = ["History", "Search"];//home页的翻译
var titlePageWords = ["Home", "Videos","TV","Apps"];//index的标题翻译
var videosPageWords = ["Movie", "Sport","Music","Popular","Game","Education","News"];//videos页的内容翻译

//同时应用于本地和服务器
var statusPageWords = ["USB","Settings","WiFi","Wired"];//状态栏的翻译

//二级页面的翻译
var searchPageWords = ["Search", "Popular Searches:","Shows, Movies, People ..."];
var resultSearchPageWords = ["Results about"," ","Please try other key words.","sorry, no video was found about "," "];
var historyPageWords = ["History", "Press","to delete history","Delete one","Delete all","Yesterday","Today"," You haven’t watched any video yet.","Delete watching history successfully!"];
var channelPageWords = ["Sorry,no video found yet."];



//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9",
                       	   "Zoom-","0","Zoom+",
                       	   "Exit","0","",
                       	   "List","0","Text",
                       	   "Guide","Enter","Exit",
                       	   "Menu","Subtitle","Info",
                       	   "Stop",
                       	   "Info","Menu","Exit",
                       	   "Exit"
                       	   ];	

//added for LA sports mode
var sportsModeInitReminds= ["This wizard is used to set up the USB drive for Sports Mode. Please select the setup mode.",
						 "Please select the file size for Sports Mode.",
						 "Creating Sports Mode file",
						 "The USB drive speed is too slow (< %f MB/sec) for Sports Mode feature!",
						 "The USB drive is ready for Sports Mode. But we recommend changing it (to speed > %f MB/sec) for better performance.",
						 "The USB drive is ready for Sports Mode."];

var sportsModeExtra	= ["Do you want to stop the Sports Mode, and change channel?",
						"Do you want to stop the Sports Mode, and change source to device connected to SCART input?",
						"Do you want to stop the Sports Mode, and change source to device connected to an HDMI input?",
						"Sports Mode is not supported on Scrambled Channel.",
						"Do you want to stop the Sports Mode, and enter EPG?",
						"Do you want to stop the Sports Mode, and enter Media?",
						"Do you want to stop the Sports Mode, and change input source?",
						"TV will end the current Sports Mode. Do you want to exit?"];
var remoteControlNote = "- The remote control(s) supplied with your set may differ depending on the model.";

var textArray = ["Volume","Channel","Source","Switch/Power","Guide","seconds to Power OFF"];
var guideArray = ["VOL-","VOL+","CH-","CH+","Pre","Next"];
var favChannelListRemind = ["No favorite channels. Please go to other lists and Use “Green Key” to add favorite channels."];

var proxySetting = ["Proxy settings","Port"];
var powerOffShop = ["Recommend you to use Shop mode, will you?"];
var tcastTextPageWords = ["Plenty of videos, rich applications","TV remote, right at your fingertips","Great contents, share on a large screen"];
var tcastOtherWords = ["Scan QR code and download T-Cast","Network connected to TV","TV name","T-Cast"];
var hbbtvWords = ["HbbTV Setting","HbbTV","Cookies","Thrid Party Cookies","Device ID","Tracking"];
var hbbtvTrackingWords = ["YES","NO","Don't care"];
var eStickerTipWords = ["Storage is under 400M,would you like to delete the videos in Demo mode bo obtain more space?"];
var delEstickerVideoRemid = ["The video has been deleted successfully"];

var clockPageWords = ["Local","Beijing","Tokyo","Hongkong","Taipei","Singapore","Paris","London","Moscow","New Delhi","Djakarta","New York","Rio",
						"Press the \"OK\" key","It can not be added!"];
var smartKeyWords = ["Wireless Display","Enjoy Music","Sleep timer","World Clock","Soundbar ready","WiFi","PVR","Sports mode"];
var recommendWords = ["Recommend"];
var onlyListenRemindWords = ["Enter Audio Only Mode","Press any key except volume key to exit!"];
var selectSatRemind = "You can select no more than 20 satellites!";
var recentPageWords = ["To delete","Recent apps","more","no app","Recent videos","more","no history","Home","delete one","delete all","delete one","delete all"];
var deleteHistoryNote = "Do you want to delete all records?";
var done = "Done";
var cancel= "Cancel";
var recentWord = "Recent";
var videosandappsWord = ["videos","apps","today","earlier"];
var cookiePolicyTitle = "Cookie Policy – Online Smart TV Services";
var cookiePolicyConditions = ["Company respects your privacy when using Smart TVs manufactured and Services provided by Company. Cookies are used by many websites and other Internet services and your Smart TV will accept, store and transmit cookies to ensure that these websites and services operate properly. Company also uses cookies when providing you Services. In this Cookie Policy Company describes which cookies are set on your Smart TV and how you can manage them.\nPlease note that all personal data that Company collects and/or processes through or with the help of cookies is subject to the Privacy Policy and you should read the Cookie Policy together with the Privacy Policy.\n1. What is a cookie?\nCookies are small text files that may be placed on your Smart TV. When a website or the red-button service of a TV station is accessed, the website or service may store a cookie in the Smart TV. During subsequent accesses, a cookie that is placed on your Smart TV will send information to the party that has placed the cookie. Cookies are extremely common and used on a number of websites and services. Each cookie will typically contain the name of the domain from which the cookie has come, the \"lifetime\" of the cookie, and a value (usually a unique number). For a more thorough explanation of what cookies are and how they operate, please visit www.allaboutcookies.org.\nCookies can be categorized into functional cookies and non-functional cookies. Functional cookies are cookies that are strictly required for the purpose of providing you the Smart TV services and for websites and other services to provide the right content to the Smart TV. Non-functional cookies are all other cookies.\nThis Cookie Policy relates to cookies that are placed by us, as well as advertising cookies that may be placed by third parties through our services on your Smart TV. This Cookie Policy does not relate to cookies that may be placed when you use the Smart TV services to access third party websites, services or applications. For these cookies we refer you to the respective cookie policies of such third parties. However, this Cookie Policy describes how to delete such cookies (see section 4 below).\n2. Which non-functional cookies do we use?\nAdvertising: In-video and display advertisements may be served to your Smart TV when using Smart TV services. These advertisements can be served by us or by third parties via, or as coordinated by, our advertising server, which performs a central coordinating role in relation to the serving of such advertisements. Our advertising server or a third party advertising server will set a cookie on your Smart TV. By means of this cookie an advertising server will register whether an advertisement has been served to your Smart TV or whether someone using your Smart TV has clicked on an advertisement. We use the information saved in such advertising cookie to remember which advertisements have been served on your Smart TV so we can make sure that not too many of the same advertisements are served on any particular Smart TV, and that we are able to settle our commercial arrangements with our advertising partners. We shall not use this information to serve targeted advertisements. Furthermore, third parties may use our advertising system to serve advertisements to your Smart TV and place cookies on your Smart TV when such advertisements are served. \nThese cookies contain, among others, information about the served advertisements, information on in which application or domain such advertisements are served, and your IP address. This is done to remember how often a particular advertisement is shown, and in order to prevent the same advertisement being shown too often. External third party advertisers that may place advertisements may also use cookies to track your activity over multiple websites, and to provide advertisements that correspond to your personal preferences.\n3. Third party websites\nWhen you visit websites or services of third parties via the Smart TV services of your Smart TV, it is possible that such websites or services place cookies on your Smart TV, and that such websites track and store your interactions on such websites. We do not request or encourage such activities and will not use such information. Please refer to the respective cookie and privacy policies of such websites and services for more information about such parties’ use of such cookies.\n4. Cookie deletion\nYour user interface of your Smart TV allows you to delete all cookies and other local browser storage from the Smart TV. It is highly advisable to remove all cookies and locally stored settings prior to selling or giving away your Smart TV.\n5. Contacting us\nIf you have any questions or comments regarding our Cookie Policy or our practice of using cookies you can send us an e-mail via FRsupport@tcl.com.\nVersion: 1.0\n"];
var privacyPolicyTitle = "Privacy Policy – Online Smart TV Services";
var privacyPolicyConditions = ["We respect your privacy when handling your personal data. This Privacy Policy describes the entity responsible for the collection, processing and use of personal data we collect from you in connection with the use of our Smart TV services (\"Services\"), what types of personal data we collect about you, what we do with it, and your rights in relation to our use of the personal data. \n1. Data controller\nThe collection, processing and use of the personal data collected from you when using the Services is conducted by Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, China (\"Company\"). Please note, however, that we are not responsible for all data processing activities set out below. We have nevertheless included a description of the respective activities in our Privacy Policy because this processing is connected with your use of the Smart TV.\n2. Data processing consent\nSome of the collection, processing and/or use of your personal data require your consent. \nIf you have consented to the use of your personal data for the purpose of improving the Services, your consent had the following wording:\n\"I consent to the collection, processing and use of my device start time, DTV channel list, favorite channels list, visit time, and viewed channels for the purposes of analyzing user habits to improve the Services and/or to analyze how many online users Company has per day/month/year and to the sharing of this information with TV stations.\"\nIf you have consented to the use of your personal data for advertisements that are tailored to your interests, your consent had the following wording:\n\"I consent to the collection, processing and use of my client type and country for the purpose of receiving appropriate advertisements.\"\nConsent is voluntary and you will still be able to use the Services if you do not consent. However, you may see advertisements and other content that is not tailored to your preferences. Irrespective of your consent Company reserves the right to collect, process and/or use the above data to the extent permitted by applicable law.\nYou may withdraw your consent to any of the above with effect for the future at any time. You may object to a use of your personal data for marketing, market or opinion research and to the tailoring of the Services to your needs. In order to withdraw your consent and/or to object, please change the privacy settings of your Smart TV accordingly.\n3. Personal data collected\nIrrespective of your consent, Company collects, processes, stores and uses the following data categories:\nDevice-ID: Your Smart TV stores a fixed unique number that enables us to identify and authenticate the Smart TV when you use the Services. This number is called the Device-ID. The Device-ID will be provided to our service partner to provide you the Services. We also provide the Device-ID to selected content partners for authentication purposes. These content partners use the Device-ID to authenticate your Smart TV for access to services provided by a content partner.\nIP address and MAC address: Your Smart TV will be assigned an IP address when accessing the Internet. This IP address will be transmitted to us and processed by us each time the Smart TV requests information or data from the Services. If your Smart TV is behind a router (e.g. in a local home network or local WLAN), we may collect and process the IP address of such router. The MAC address is a unique number assigned to each network interface of your Smart TV. The MAC address will also be collected and processed by us when the Smart TV requests information or data from the Services.\nService request data: Whenever you connect your Smart TV to the Internet and turn on the Smart TV, it will automatically connect to the Services, which are managed by our service partner. Your Smart TV will then be authenticated as being certified for access to the Services. For authentication purposes, the Services store one or more unique numeric identifiers related to your Smart TV. When connecting to the Service, the Smart TV will transmit the IP address it has been assigned and will transmit device specific information (Smart TV model, software version) to look whether software updates are available.\nService settings: As part of the regular functionality of the Services you can manually arrange the order in which apps are displayed by the Services. Our service partner will store your arrangement and other preferences you may set during using the Services. This information will be linked to the Device-ID.\nDevice specific information: The Smart TV stores several information about itself and its configuration. This information includes the Smart TV type, the version of the operation system of the Smart TV, its panel resolution, the project ID (i.e. information regarding configuration files), the user agent, browser name, browser version, and the language and country that have been configured in the Smart TV. This information will be used by us and will be provided to our service partner and content partners.\nAdvertising: The Services may serve advertisements. These advertisements are served by us, or by third parties using advertising inventory assigned by us. All advertisements are served by means of, or via, our advertising server, which fulfills a coordinating role for the serving of advertisements. Our advertising server or the third party advertising server may set a cookie on the Smart TV. Please refer to our Cookie Policy for more information about these cookies.\nService and Content Partner traffic: When you use the Services your Smart TV will request data from the Services via the Internet. As part of these requests your IP address as described above and the language and country that has been configured in your Smart TV will be transmitted to our service partner. Our service partner will process the respective data in accordance with its privacy policy.\nSecond screen usage: If you use our second screen application, the controls you activate on the application and the country and language settings, DTV channel list, favorite channels lists, schedule lists, Device-ID, current channel, protocol version and IP address of your Smart TV will be collected and processed by us on our servers. Our servers will then control your Smart TV as directed by you in the second screen app.\nHbbTV - \"Red Button\": TV stations (\"Stations\") may send additional information with their TV signal. If the Smart TV receives specific instructions in such additional information and if it is connected to the Internet, the Smart TV will download a picture or small page from the Station's website and display it together with the information to press the \"Red Button\" on your remote control if you want to use additional services provided by the Station. This happens each time you zap. Downloading the picture from the Station's website the Smart TV will transmit some personal data, i.e. the DTV channel list, current channel, event information table, TV time, IP address of your Smart TV and cookies stored on the Smart TV (if any). The Station is responsible for the collection, processing and/or use of this data. Moreover, if you use additional services offered by a Station through the Red Button, the Station may collect other personal data about you (e.g. which on-demand videos you watch, the news you read, etc.).\n4. Purposes for which we process and/or use your personal data\nWe process collected data for the following purposes:\n• Providing the Services: We use the IP address and MAC address, Device-ID, the version of the operation system of the Smart TV, client type of your Smart TV and its panel resolution, the project ID (i.e. information regarding configuration files), your DTV channel list, viewed channels, time zone, country and language settings to provide your Smart TV with access to the Services and services provided by content partners. Purposes include (but are not limited to) authentication, providing location based services to you (e.g. weather forecasts); abuse handling, management of security incidents, monitoring of availability of the Services, and providing backup services of user preferences.\n• Authentication: We use the Device-ID and MAC address for authentication purposes.\n• Software updates: Each time your Smart TV is powered on, it will provide us with the IP address, Device-ID, software version, client type of your Smart TV, project ID (i.e. configuration files), user ID, serial number to offer you and provide you with appropriate software updates. \n• Improving the Services: We use aggregated and anonymized usage data (i.e. data about your interaction with the Services) to improve the user experience of the Services.\n• Serving advertisements: We use the information in advertising cookies to allow the system to log which advertisements have been shown on your Smart TV in order to make sure that you do not receive too many similar advertisements, and we are able to settle our commercial arrangements with our advertising partners. External advertisers that serve advertisements on the Services or the content partner websites after coordination by our advertising server, may also use cookies to track you over multiple websites, and to serve advertisements that reflect your personal preferences.\n• Optimizing advertisements: We use data related to advertising views and clicks on advertisements to optimize the advertising experience of consumers in the Service.\n• Discounts: We provide the Device-ID to selected content partners to enable these partners to identify to what extent they can provide you with free access to Video on Demand titles in their collection.\n• Law enforcement: We may be required to provide data to competent law enforcement authorities or courts of justice. If we do so, we will only do so subject to a binding legal instrument like a warrant or a judicial order, which requires us to cooperate with the relevant authorities.\nUse of the Services is possible by using pseudonyms, unless specific services require that you provide your name and/or email address.\n5. Categories of recipients\nCompany shares your personal data collected during your use of the Services only with the following third parties:\n• With third party providers of Smart TV services if you request such services (e.g. if you start the Netflix application on your Smart TV we may share your IP address, MAC address, software version and TV model name with Netflix).\n• With third party content partners if you request certain content provided by such content partners (e.g. in order to provide you with the GoLive IP TV service, we may share your TV client type, IP address and language settings with the legal entity providing the GoLive service).\n• To the extent you have consented to the sharing of specific personal data with third parties above, Company will share your personal data with such third parties.\n• With outsourcing service providers as data processors assisting Company with providing the Services.\nCompany shares your personal data with other third parties only if Company is obligated to do so on the basis of legal requirements (e.g. to courts or criminal prosecution authorities), you have consented to the respective sharing or the sharing is otherwise lawful under applicable law.\n6. Countries in which your data will be processed\nCompany and/or some of the recipients of your personal data listed above may be located outside of the European Economic Area (i.e. in the following countries: Peoples Republic of China, United States of America). Therefore, your personal data may be processed in countries which are not recognized as providing an adequate level of protection of personal data in accordance with Directive 95/46/EC of the European Parliament and of the Council of 24 October 1995 on the protection of individuals with regard to the processing of personal data and on the free movement of such data.\n7. Your rights\nYou may contact Company in order to receive information about your personal data processed by Company and/or to exercise your statutory rights regarding access, rectification, deletion and blocking of your personal data; and/or to object the processing of your personal data for purposes of marketing and/or market or opinion research.\n8. Changes to the Privacy Policy\nTo improve our Services we may require amendments to this Privacy Policy – e.g. by the implementation of new technologies or the introduction of new services. We reserve the right to change or supplement this Privacy Policy at any time.\n9. Contact information\nIf you have any questions about the Privacy Policy or would like to complain about our handling of your personal data, please contact us by using one of the following contact details:\nEmail: FRsupport@tcl.com\nVersion: 1.0\n"];
var privacyPolicyTerms = [
    "Enable smart TV service",
    "I consent to the collection, processing  and use of my device start time, DTV channel  list, favorite channels list, visit time, and  viewed channels for the purposes of  analyzing user habits to improve the  services and/or to analyze how many  online users TCL has per day/month/year  and to the sharing of this information with  TV stations.",
    "Enable recommendation service.",
    "Enable second screen application for mobile devices",
    "Enable automatic software updates.",
    "Enable freeviewPlay service."
];
var privacyPolicyTips = [
    "All Smart TV services will be disabled.",
    "HbbTv service provided by TV channels when built-in tuner is used will be disabled.",
    "Content and TV program recommendation service will be disabled.",
    "Second screen application will be disabled.",
    "TV will not check automatically for software updates and new functionalities.",
    "FreeviewPlay content will be disabled."
];
var privacyPolicyRemind = "Please tick the corresponding check box in setting.";
var set = "Set";
var copyShopDemoTips = ["Connected to the USB,do you want to copy the video to the flash?","Copy the video to the flash","The video has been copied successfully!","The video copy error!"];
var dataDeletionWords = ["Delete your  data of Smart TV service in the backend servers.","Notes: The data related to your user of smart TV will be deleted in one month after you ticking this item. Please note that the deletion does not affect the local data stored in your TV.","No longer report data to Smart TV server.","Notes:  Your data in connection with the use of Smart TV services will no longer be transfered to server after you ticking this item. Your TV will no longer receive recommended services.","If you want to know more, please visit the website www.tcl.eu"];
var miracastWords = ["Wireless connection","Mirror android phone to TV","Click to connect","This function is only available on android phone"];
var miracastTips = ["Connecting steps","Open system settings","More connecting ways / Other wireless connections","Choose wireless display","Click to connect waiting to be found"];