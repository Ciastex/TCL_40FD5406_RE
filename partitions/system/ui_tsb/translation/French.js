var all_country 	= ["Australie","Autriche","Belgique","Bulgarie","Croatie","République Tchèque","Danemark","Finlande","France","Allemagne",
						"Grèce","Hongrie","Italie","Luxembourg","Pays-Bas","Norvège","Pologne","Portugal","Roumanie","Russie",
						"Serbie","Slovénie","Espagne","Suède","Suisse","Royaume-Uni","Nouvelle-Zélande"," "/*Arab*/,"Estonie"," "/*Hebrew*/,
					"Lettonie","Slovaquie","Turquie","Irlande","Japon","Philippines","Thaïlande","Maldives","Uruguay","Peru",
					"Argentina","Chile","Venezuela","Ecuador","Costa Rica","Paraguay","Bolivia","Belize","Nicaragua","Guatemala",
					"Chine","Taiwan","Brazil","Canada","Mexico","United States","South Korea","Autres","Vietnam"/*新添加的，底层结构体中没有*/,"Ukraine"/*新添加的，底层结构体中没有*/,
					"Iran","Irak"," ","Kazakhstan","Ouzbékistan"," ","Kirghizstan","Algérie","Égypte","Tunisie",
					"Tanzanie","Kenya","Pakistan","Indonésie","Koweït","Arabie saoudite","Qatar","Israël","Liban","Bahreïn",
					"Angola","Congo","Inde","Turkménistan","Colombie","Mongolie","Bangladesh","Népal","Sri Lanka","Nouth Korea",
					"Moldavie","Polynesia","EI Salvador"," ","Fidji","Libéria","Jordanie","Myanmar","Ghana","Géorgie",
					"Arménie","Oman","Yémen","Syrie","Palestine","Afghanistan","Maroc","Bénin","IvoryCoast","Nigéria",
					"Soudan","Éthiopie","Zambie"," ","Afrique du Sud","Mozambique","Libye","Albanie","Belarus","Iceland",
					"Lituanie","Maurice","Duba","Émirats arabes unis","Tadjikistan","Bengal","Bosnie-Herzégovine","Cyprus","Kosovo","Macédoine",
					"Malte","Monténégro"," ","Singapour","Malaisie","NewCaledonia","Autres"," "," "," ",
    				" "," "," "," "," "," "," "," "," ","Panama"];

var all_language = ["Tchèque ","Chamic","Danois","Dargwa","Landdayak","Allemand","Anglais","Espagnol ","Grec","Français",
"Croate","Sorbianupper","Italien","Hongrois","Hollandais","Norvégien","Polonais","Portugais","Russe","Roumain",
"Slovène","Serbe","Finlandais","Suédois","Bulgare","Slovaque","Chinese","Chuukese","Gaélique ","Gbaya",
"Gallois ","Arabe","Irsk","Letton","Hébreu","Turc","Estonien","Néerlandais"/*Netherlands*/,"Coréen","Kosraean",
"Hindi","Hittite","Hmong","Mandarin","Cantonais","Maori","Original Audio"/*Qaa*/,"Non défini"/*Undetermined*/,"Ad","Inconnu",
"Non défini","Abkhazian","Achinese","Acoli","Adangme","Adyghe","Afar","Afrihili","Afrikaans","Afro",
"Ainu","Akan","Akkadian","Albanais","Aleut","Algonquian","Altaisouthern","Altaic","Amharic","Apache",
"Aramaic","Aragonese","Arapaho","Araucanian","Arawak","Armenian","Artificial","Assamese","Asturian","Athapascan",
"Austronesian","Australian","Avaric","Avestan","Awadhi","Aymara","Azerbaijani","Aztec","Balinese","Baltic",
"Baluchi","Bambara","Bamileke","Banda","Bantu","Basa","Bashkir","Basque","Beja","Bemba",
"Bengali","Berber","Bhojpuri","Bihari","Bikol","Bini","Bislama","Bosniaque","Braj","Breton",
"Buginese","Buriat","Burmese","Blin","Biélorusse","Caddo","Carib","Catalan","Caucasian","Cebuano",
"Celtic","Centralamericanindian","Chagatai","Chamorro","Chechen","Cherokee","Cheyenne","Chibcha","Chinookjargon","Choctaw",
"Chipewyan","Churchslavic","Chuvash","Coptic","Cornish","Corsican","Cree","Creek","Creolesandpidgins","Crimeantatar",
"Creolesandpidginsenglish","Creolesandpidginsfrench","Creolesandpidginsportuguese","Kashubian","Cushitic","Dakota","Delaware","Slavey","Dogrib","Dhivehi",
"Dinka","Divehi","Dogri","Dravidian","Sorbianlower","Duala","Dutchmiddle","Dyula","Dzongkha","Efik",
"Egyptian","Ekajuk","Elamite","Englishmiddle","Englishold","Angika","Eskimo","Esperanto","Ewe","Ewondo",
"Fang","Fanti","Faroese","Fijian","Filipino","Finnougrian","Fon","Frenchmiddle","Frenchold","Frisiannorthern",
"Frisianeastern","Frisian","Fulah","Friulian","Ga","Galician","Ganda","Gayo","Geez","Georgian",
"Germanmiddlehigh","Germanoldhigh","Gorontalo","Germanic","Gilbertese","Gondi","Gothic","Grebo","Greekancient","Greenlandic",
"Guarani","Swissgerman","Gujarati","Gwichin","Haida","Haitiancreole","Hausa","Hawaiian","Herero","Hiligaynon",
"Himachali","Hirimotu","Hupa","Iban","Islandais","Ido","Nuosu","Igbo","Ijo","Iloko",
"Indic","Indoeuropean","Ingush","indonésien","Interlingua","Interlingue","Inuktitut","Inupiak","Iranian","Irishold",
"Irishmiddle","Iroquoian","Japonais","Javanese","Lojban","Judeoarabic","Judeopersian","Kabyle","Kachin","Kamba",
"Kannada","Kanuri","Karakalpak","Karen","Kashmiri","Kawi","Kazakh","Circassian","Khasi","Khmer",
"Khoisan","Khotanese","Kikuyu","Kinyarwanda","Kirghiz","Kimbundu","Komi","Kongo","Konkani","Kpelle",
"Karachaybalkar","Karelian","Kru","Kuanyama","Kumyk","Kurdish","Kurukh","Kusaie","Kutenai","Ladino",
"Lahnda","Lamba","Langue","Lao","Latin","Luxembourgish","Lezghian","Limburgish","Lingala","Lituanien",
"Lozi","Lubalulua","Lubakatanga","Luiseno","Lunda","Luo","Lushai","Macédonien","Madurese","Magahi",
"Maithili","Makasar","Malagasy","Malay","Moksha","Mandar","Malayalam","Maltese","Manchu","Mandingo",
"Manipuri","Manobo","Manx","Marathi","Mari","Marshall","Mirandese","Marwari","Masai","Mayan",
"Erzya","Mende","Micmac","Minangkabau","Miscellaneous","Mohawk","Moldavian","Monkmer","Mongo","Mongol",
"Mossi","Multiple","Munda","Neapolitan","Nauru","Navajo","Ndebelenorth","Ndebelesouth","Ndongo","Germanlow",
"Nepali","Newari","Nias","Nigerkordofanian","Nilosaharan","Niuean","Norwegianbokmal","Nogai","Norseold","Northamericanindian",
"Norwegiannynorsk","Nubian","Nyamwezi","Newariclassical","Nyanja","Nyankole","Nyoro","Nzema","Ojibwa","Oriya",
"Oromo","Osage","Ossetic","Otomian","Pahlavi","Palauan","Pali","Pampanga","Pangasinan","Panjabi",
"Papiamento","Papuanaustralian","Persian","Persianold","Phoenician","Philippine","Ponape","Prakrit","Provencalold","Pushto",
"Quechua","Rhaetoromance","Rajasthani","Rapanui","Rarotongan","Romance","Romany","Rundi","Aromanian","Salishan",
"Samaritanaramaic","Samisouthern","Saminorthern","Sami","Lulesami","Inarisami","Samoan","Skoltsami","Sandawe","Sango",
"Sanskrit","Sardinian","Sasak","Santali","Sicilian","Scots","Selkup","Semitic","Sranantongo","Serbocroatian",
"Serer","Sign","Shan","Shona","Sidamo","Siksika","Sindhi","Soninke","Singhalese","Sinotibetan",
"Siouan","Slavic","Siswant","Sogdian","Somali","Songhai","Sorbian","Walloon","Nko","Sothonorthern",
"Sothosouthern","Southamericanindian","Sukuma","Sumerian","Sudanese","Susu","Swahili","Swazi","Swize","Syriacclassical",
"Syriac","Tagalog","Tahitian","Tetum","Tajik","Tamashek","Tai","Tamil","Tatar","Télétexte",
"Telugu","Tereno","Thai","Tibetan","Tigre","Tigrinya","Timne","Tivi","Klingon","Tokelau",
"Tlingit","Tonganyasa","Tongaislands","Truk","Tokpisin","Tsimshian","Tsonga","Tswana","Tumbuka","Tupian",
"Turkishottoman","Turkmen","Tuvinian","Tuvalu","Twi","Udmurt","Ugaritic","Uighur","Ukrainien","Umbundu",
"Urdu","Uzbek","Vai","Venda","Vietnamien","Volapuk","Votic","Wakashan","Walamo","Waray",
"Washo","Wolof","Kalmyk","Xhosa","Yakut","Yao","Yap","Yiddish","Yoruba","Yupik",
"Zapotec","Blissymbolics","Zenaga","Zhuang","Zande","Zulu","Zuni","Zazaki","Valencian","Chinois Traditionnel",
"ChineseS","QAB","QAC","Arabe égyptien","*","*","Dagbani","Kasem","*"];

var offOn = ["Arrêt","Marche"];	
var okCancel = ["OK","Annuler"];	
var yesNo = ["Oui","Non"];	
var level			= ["Arrêt","Faible","Forte","Moyenne"];
var manualAuto = ["Manuel","Auto"];	
var homeShop		= ["Maison","Magasin"];
var picPreset		= ["Standard","Dynamique","Naturel","Film","Personnel"];
var picColorTemp	= ["Froide","Normale","Chaude","Utilisateur"];
var pic3dNavig		= ["Manuel","Auto","Semi-Auto"];
var _3dOptions		= ["Mode 3D","Conv.3D-à-2D","Commutation G/D","Profondeur de champ"];
var pic3DMode       = ["Arrêt","Conv.2D-à-3D","Côte-à-côte","Haut et Bas","Entrelacement ligne"];
var picEcoOptions	= ["Economie d'énergie","Capteur de lumière ambiante","Gradation locale","Gradation du mélange"];
var picGeoOptions	= ["Géométrie","Position Horizontale","Position Verticale","Horloge","Phase"];//Geometry 无翻译
var picAdWhiteBal	= ["Gain R","Gain V","Gain B","Décalage R","Décalage V","Décalage B"];
var souOptions		= ["Préréglage du son","Balance","Retard audio","SRS TSHD","Contrôle auto vol.",
						"Type SPDIF","Retard SPDIF","Positionnement du téléviseur","Langue audio","Type de son",
						"Description audio","Amplification des basses","Dolby Digital Plus","Son ambiophonique"];
var souSpdifType = ["Auto"/*Dolby*/,"PCM","Arrêt"];	
var colorSpace      = ["Auto","D'origine","Utilisateur"];
var souPresetPara = ["100Hz","500Hz","1.5kHz","5kHz","10kHz"];
var chOptions		= ["Recherche des chaînes","Liste des chaînes","Guide des programmes ","Organisateur de chaînes","Diagnostic de chaîne",
						"Lecture retardée","Sous-titres","Télétexte","Type de liste des chaînes"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Force du signal","Qualité du signal","Fréquence (kHz)","ID service","ID réseau","Nom réseau"];
var chScanOptions	= ["Pays","Mode réception","Recherche automatique","Mise à jour automatique","Recherche manuelle analogique",
						["Recherche câble manuelle","Rech. hertzienne manuelle","Syntonisation satellite manuelle"],"Installation de l’antenne satellite","Sélection du réseau préféré","Effacer la liste des chaînes","LCN"];
var favNetDes		= "Veuillez sélectionner votre réseau préféré";
var tuner			= ["Réseau câblé","Antenne","Satellite"];//Satelite 无翻译
var passError		= "Mot de passe incorrect.\nVeuillez réessayer!";
var chType = ["Chaînes analogiques :","Chaînes numériques :"];	
var chScanStatus	= ["Statut : Recherche","Statut : recherche terminée","Statut : recherche annulée","Statut : erreur de recherche"];
var chScanPara		= ["Fréquence (kHz)","Modulation","Débit symboles (ksym/s)","ID réseau","Système",
						"Réglage fin","Force du signal","Qualité du signal","Mode de recherche ","ID de la chaîne"];
var chScanParaMHZ = ["Fréquence (MHz)"];	
var chAtvManSys		= ["EUR OUEST","EUR EST","Royaume-Uni","France"];
var modulation		= ["16QAM","32QAM","64QAM","128QAM","256QAM","Auto"];
var chCleanDes		= "Voulez-vous supprimer la liste des chaînes ?";
var chDeletDes		= "Voulez-vous supprimer cette chaîne?";
var chOperator = ["Ziggo","UPC","Autres"];	
var chScanType		= ["Numérique & Analogique","Numérique","Analogique"];
var chScanMode		= ["Complet","Perfectionné","Rapide"];
var bookingModes = ["Enregistrer","Rappel"];	
var dayName = ["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"];	
var monthName		= ["Jan", "Fév","Mar","Avr","Mai","Juin","Jui ","Août","Sep","Oct","Nov","Déc"];
var filter			= ["Filtre","Type","Sous-genre"];
var chEpgFirstGenre	= ["Film","Informations","Spectacle","Sports","Enfants","Musique","Arts","Social","Éducation","Loisirs","Spécial"];
var chEpgSecondGenre= [["Théâtre ","Investigation","Aventure","Science-fiction","Comédie","Feuilleton","Romance","Sérieux","Film adulte"," "," "," "],
						["Sujets d'actualité","Météo","Magazine actualité","Documentaire","Débat"," "," "," "," "," "," "," "],
						["Spectacle","Jeu","Variété","Talk-show"," "," "," "," "," "," "," "," "],
						["Sports","Evènements","Magazine sportif","Football","Tennis",
							"Sport d'équipe","Athlétisme","Sport mécanique","Sport nautique","Sport d'hiver",
							"Equitation","Arts martiaux"],
						["Enfants","Maternelle","Loisirs 6-14 ans","Loisirs 10-16 ans","Educatif","Dessins animés"," "," "," "," "," "," "," "],
						["Musique","Rock","Sérieux","Folk","Jazz","Comédie musicale","Ballet"," "," "," "," "," "],
						["Arts","Arts du spectacle","Beaux-arts","Religion","Culture populaire",
							"Documentation","Film","Expérimental","Diffusion","Nouveaux médias",
							"Magazines d'art","Mode"],
						["Social","Magazines ","Economie","Personnalités"," "," "," "," "," "," "," "," "],
						["Éducation","Nature","Technologie","Médecine","Pays étrangers","Sciences sociales","Education continue","Langues"," "," "," "," "],
						["Passe-temps","Tourisme","Artisanat","Automobile","Bien-être et Santé","Cuisine","Annonces","Jardinage"," "," "," "," "],
						["Langue originale","Noir et blanc","Non publié","Diffusion en direct"," "," "," "," "," "," "," "," "]];	
var chEpgFirstGenreLA = ["Actualités","Sports","Éducatif","Feuilleton","Minisérie","Série","Émission de variétés","Émission de téléréalité","Informations","Comique","Enfants","Érotique","Films","Tombola, téléachat, compétition à récompense","Débat/interview","Autres"];	
var chEpgSecondGenreLA = [["Actualités","Signaler","Documentaire","Biographie","Autres","",""],    ["Sports","Autres","","","","",""],["Éducatif","Autres","","","","",""],["Feuilleton","Autres","","","","",""],["Minisérie","Autres","","","","",""],["Série","Autres","","","","",""],["Auditorium","Spectacle de variétés","Musical","Documentaire de tournage","Féminin","Jeu télévisé","Autres"],["Émission de téléréalité","Autres","","","","",""],["Cuisine","Mode","Pays","Santé","Voyage","Autres",""],["Comique","Autres","","","","",""],["Enfants","Autres","","","","",""],["Érotique","Autres","","","","",""],["Films","Autres","","","","",""],["Tombola","Téléachat","Compétition à récompense","Autres","","",""],["Discussions","Interview","Autres","","","",""],["Dessins animés pour adultes","Interactif","Politique","Religion","Services d'ingénierie","Autres",""]];	
var chOrganizer		= ["Saut de chaîne","Trier les chaînes","Edition des chaînes","Supprimer des chaînes","Echanger une chaîne","Insérer une chaîne"];
var chEditPara 		= ["Nom réseau","Numéro de chaîne","Nom de chaîne","Fréquence:","Norme de couleur","Norme de son"];
var chSatTitles		= ["Type de satellite","Installation de l’antenne satellite","Sélectionner un satellite"];
var chSatEidtOptions= ["Nom du satellite","Position","Alimentation LNB","Fréquence (MHz) du LNB","Entrée DiSEqC ",
						"Tonalité 22KHz","Salve de tonalité","Fréquence (kHz)","Débit symboles (ksym/s)","Polarisation",
						"Force du signal","Qualité du signal","État du satellite"];
var chSatAutoPromt	= [["Toutes","Réseau"],["Toutes","Gratuit"]];
var chSatAutoScanOptions=["Sélectionner un satellite","Mode de recherche ","Chaînes"];
var chSatPosition = ["A","B"];	
var chSatLNBFreq = ["Universel",];	
var chSatDiSEqCInput = ["Désactiver","A","B","C","D"];	
var chSatTone22KHz = ["Auto","Marche","Arrêt"];	
var chSatToneBurst	= ["Désactiver","salve de tonalité A","salve de tonalité B"];
var chSatPolarization = ["Horizontal","Vertical"];	
var chSatSetupOptions=["Type d'antenne","Syntoniseur","Bande de fréquence"];
var chSatAntennaType= ["Unicable","Universel"];
var chSatUserBands	= ["Bande utilisat. 1","Bande utilisat. 2","Bande utilisat. 3","Bande utilisat. 4 ","Bande utilisat. 5","Bande utilisat. 6","Bande utilisat. 7","Bande utilisat. 8"];
var chSatOthers = ["Transpondeur"];	
var chSatSetupOthers= ["Défini par l’utilisateur"];
var pleaseSelectSat = "Veuillez d’abord sélectionner les satellites !";
var subOptions		= ["Sous-titres","Langue ss-titres numériq.","Langue ss-titres numériq. 2nde","Type de sous-titres"];
var gingaOptions = ["Service de données automatique","Liste des services de données"];	
var ttxOptionsCon      = ["Caractères Télétexte","Langue Télétexte numériq."];
var subType = ["Normal","Malentendants"];	
var netIntf = ["Ethernet","Sans fil"];	
var netConnDes		= ["Test de la connexion réseau en cours. Patientez",
						"Test de la connexion réseau réussi ! ",
						"Echec du test de la connexion réseau. "];
var netSsidError	= "La longueur valide du SSID est de 1~32 caractères. Veuillez vérifier le SSID.";
var netOthers = ["Code PIN"];	
var netWlessAutoDes	= ["Vérifiez que le code PIN suivant est inséré au niveau du point d'accès avant de cliquer sur OK.",
						"Appuyez sur le bouton du point d'accès dans les 120 secondes avant de cliquer sur OK."];
var netConnRemind	= ["Mot de passe incorrect!",
						"Connexion en cours. Veuillez patienter!",
						"Connexion réussie et l’adresse IP est correcte ",
						"Echec de la connexion, vérifiez le réseau et réessayez !",
						"Recherche des points d'accès en cours. Veuillez patienter",
						"Il n’y a pas d'adaptateur sans fil connecté au TV !"];
var netWireIpOptions= ["Configuration IP","Type d'adresse","Adresse IP","Masque ss-réseau","Passerelle défaut","DNS primaire","DNS secondaire"];
var netWireConnRemind= ["Entrez une valeur de 0 à 255.",
						"Connexion réussie !",
						"Veuillez saisir une adresse valide",
						"Connexion réussie !",
						"Echec de la connexion !",
						"Connexion en cours. Veuillez patienter!",
						"Veuillez entrer une valeur entre 1 et 223."];
var netFlixOptions	= ["Désactiver votre appareil","Numéro de Série Netflix ESN","Version de Netflix"];
var netFlixDes	 	= ["Etes-vous sûr de vouloir désactiver votre appareil ?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Mise à jour logiciel";
var netUpdateDialogTitle = "Mise à jour du logiciel";	
var netBGDownloadTitle = "Téléchargement";	
var netUpdateLoadingPrompt= ["Recherche de la mise à jour, veuillez patienter !",
							"Téléchargement du logiciel... Veuillez patienter !",
							"Veuillez ne pas éteindre la TV pendant la mise à jour du logiciel !",
                            "La mise à jour impérative du logiciel est téléchargée automatiquement en arrière-plan !"];
var netUpdatePrompt= ["Félicitations, la version du logiciel est la plus récente!",
						"La dernière version XXXX du logiciel a été détectée. Télécharger maintenant? L'opération peut durer selon la performance de votre réseau.",
						"Echec de connexion, veuillez vérifier et reconnecter !",
						"Impossible de recevoir des données, veuillez réessayer plus tard !",
						"Echec d'analyse des infos de mise à jour, éteignez et réallumez avec la télécommande !",
						"Echec de la connexion, vérifiez le réseau et réessayez !",
						"Logiciel téléchargé correctement. Voulez-vous commencer la mise à jour de votre TV?",
						"Données perdues ! Échec du téléchargement ! ",
						"Echec de vérification du fichier de logiciel, veuillez réessayer !",
						"Problèmes de connexion. Veuillez vérifier et reconnecter ! ",
						"Echec de mise à jour. Eteignez et réallumez avec la télécommande!",
						"Une défaillance imprévue a effacé le fichier de mise à jour. Veuillez refaire la mise à jour via le réseau.",
						"Le logiciel a été téléchargé avec succès en tâche de fond. Voulez-vous faire la mise à jour?"];
var netUpdateButtonText = ["Télécharger", "Mettre à jour", "Plus tard", "Jamais", "OK","Continuer"];	
var autoDetectPrompt = ["La dernière version XXXX du logiciel a été détectée. Télécharger maintenant? L'opération peut durer selon la performance de votre réseau.",
						"La nouvelle version XXXX du logiciel est trouvée. Voulez-vous mettre à jour maintenant ?",
						"L’opération de mise à jour via le réseau a été interrompue la dernière fois. Veuillez refaire la mise à jour. ",
                        "Le téléchargement de la nouvelle version du logiciel XXXX n’est pas fini. Voulez-vous continuer maintenant ?",
                        "Logiciel téléchargé, voulez-vous mettre à jour maintenant ?",
			"Software downloaded, do you want to update now? TV will update automatically next time if you skip now."];	
var sysOptions		= ["Manuel électronique","Langue des menus","Minuterie","Verrouillage","Paramètres des entrées",
						"Mise à jour logiciel","Lieu","Mode HbbTV","Cookies","Interface Commune",
						"Paramètres avancés","Réinitialisation magasin","Témoin LED","Mise en marche instantanée","Auto shop mode","Area","Mode démonstration"];
var sysResetDes		= "Etes-vous sûr de vouloir exécuter cette commande?";
var sysMenuLangOptions=["Langue","Langue audio préférée","Langue audio préférée 2nde"];

var sysTimerOptions	= ["Fuseau horaire","Nom de la région","Horloge","Mise en veille","Veille automatique", "Country region","Hijri"];
var sysTimeZone		= ["Comme le diffuseur","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];	
var sysTimeZoneLA = ["En tant que radiodiffuseur","Région1","Région2","Région3","Région4","Région5"];	
var sysTimeZoneNA = ["de Terre-Neuve","de l'Atlantique","de l'Est","Centrale","des Rocheuses","du Pacifique","de l'Alaska","d'Hawaï","Samoa"];	
var sysSleepTimer = ["Arrêt","10 Min","20 Min","30 Min","40 Min","50 Min","60 Min","90 Min","120 Min"];	
var sysStandby = ["Arrêt","4 heures","6 heures","8 heures"];	
var sysRegionName	= ["Madrid ","Iles Canaries"];
var sysClockOptions	= ["Synchronisation automatique","Date","Heure","Heure de réveil","Minuterie",
						"Allumer sur la chaîne","Heure de mise en veille","Minuterie"];
var sysTimer		= ["Arrêt","Chaque jour","Une fois"];

var sysInputSet		= ["Pas de nom","DVD","Blu-ray","HDD","DVDR",
						"Enr. HD","Jeu","Magnétoscope","Ordinateur","Décodeur num.",
						"Décodeur num. HD","Caméra","Enregistreur","Autre"];
var sysAvVideoInput	= ["Auto","RVB_CVBS","RVB","CVBS","S-Vidéo"];
var sysUpdate		= ["Via USB","Via réseau","Par canal"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Impossible de trouver un nouveau logiciel via l'antenne !",
						"La nouvelle version XXXX du logiciel est trouvée. Voulez-vous mettre à jour maintenant ?",
						"Veuillez insérer la clé USB.",
						"Echec de vérification du fichier de logiciel, veuillez réessayer !",
						"Mise à jour en cours. Veuillez patienter, le TV redémarrera automatiquement.",
						"Le logiciel a été correctement mis à jour.\nLe téléviseur redémarrera ensuite automatiquement !",
						"La dernière version XXXX du logiciel a été détectée. Télécharger maintenant? L'opération peut durer selon la performance de votre réseau.",
						"Téléchargement",
						"Logiciel téléchargé correctement. Voulez-vous commencer la mise à jour de votre TV?",
						"Echec mise à jour !",
						"Recherche des fichiers de mise à jour",
						"Le logiciel a été correctement mis à jour.\nVeuillez redémarrer la TV à présent."];
var sysProductInfo = ["Version actuelle","Nom du produit","Nom du fabricant","Nom du châssis"];	
var sysCiDes		= ["Aucune carte insérée"];
var sysAdOptions	= ["Enregistrement DivX (R)","Désenregistrement DivX(R)","T-Link","Erreur d'autorisation","Confirmation de désenregistrement",
						"Confirmation de la location","Location expirée"];
var sysRegistDes	= ["Vous devez enregistrer votre appareil pour pouvoir lire des vidéos DivX(R) protégées",
						"Code d'enregistrement:",
						"Enregistrez-vous sur http://vod.divx.com"];
var sysDregistDes	= ["Code de désenregistrement:",
						"Désenregistrez-vous sur http://vod.divx.com",
						"Poursuivre l'enregistrement ?"];
var mediaAuthorization = ["Votre appareil n'est pas autorisé à lire cette vidéo protégée DivX(R)."];
var deregistrationConfrimation = ["Votre appareil est déjà enregistré.","Êtes-vous sûr de vouloir annuler l'enregistrement ? "];
var rentalConfirmation = "XXXX de YYYY lectures ont été utilisées pour cette location DivX(R). Continuer?  ";
var rentalExpired 	= "XXXX de YYYY lectures ont été utilisées pour cette location DivX(R). Cette location DivX a expiré.   ";
var parentalRatingLA = ["Classification parentale","Classification par âge","Classification de contenu"];	
var parentalRatingNA = ["Classification parentale","Bloquer les émissions sans classification","Classification par âge","Classification de contenu","États-Unis","Canada","Paramètres RRT (tableau régional de classification)","Réinitialiser RRT"];	
var parentalRatingOptionUS = ["États-Unis","Classification TV","MPAA"];	
var sysTVRatingUS = ["TV-Y","TV-Y7","TV-PG","TV-14","TV-MA"];	
var sysMPAAUS = ["G","PG","PG-13","R","NC-17","X"];	
var parentalRatingOptionCanada = ["Canada","Canada anglais","Canada français"];	
var sysCanadaEng = ["C","C8+","G","PG","14+","18+"];	
var sysCanadaFre = ["G","8 ans+","13 ans+","16 ans+","18 ans+",""];	
var sysResetRRT = ["Voulez-vous vraiment réinitialiser RRT?"];	
var ageRatingOptions = ["L","10","12","14","16","18"];	
var contentRatingOptions = ["Arrêt","Drogues","Violence","Sexe","Violence et drogues","Sexe et drogues","Violence et sexe","Violence, sexe et drogues"];	
var sysLockOptions	= ["Verrouillage chaîne","Durée intervalle verrouillage","Contrôle parental","Verrouillage entrée ","Verrouillage du clavier","Verrouillage de l'installation",
						"Modifier le mot de passe","Volume max","Réinitialiser les paramètres"];
var sysTimeIntervals= ["Type verrouillage ","Heure de début","Heure de fin"];
var sysRatingOptions= ["Aucun","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","Matériau explicite (Espagne)"];
var changePass		= ["Modifier le mot de passe","Nouveau mot de passe","Confirmer le mot de passe"];
var changePassDes	= ["Mot de passe incorrect.\nVeuillez réessayer!",
						"Mots de passe différents.\nVeuillez réessayer!",
						"Mot de passe défini avec succès !",
						"Code trop simple pour servir de mot de passe.\nChoisissez un autre code !"];
var sysPowerOnChOptions= "Mode de sélection";
var sysPowerOnCh	= ["Dernier état","Sélection utilisateur"];
var netWlessSecu    = ["Ouvert","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Aucune","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Pas pris en charge"];
var netWlessSecu3	= ["Aucune","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Pas pris en charge"];
var netOptions		= ["Connexion Internet","Interface","Configuration sans fil","Paramètres IP","Information",
						"Test de connexion  ","DLNA","Télécommande TV","Paramètres Netflix","Affichage Wi-Fi                                                           ",
						"Type d'adresse","Adresse IP","Masque ss-réseau","Passerelle défaut","DNS primaire",
						"DNS secondaire","SSID","BSSID","Entrez votre SSID:","ID utilisateur"];
var chEditDes		= ["Numéro de chaîne en double!","Appuyer sur le Bouton Rouge pour supprimer le caractère actuel!","Numéros de chaîne non valides"];
var chEpgNoProgram	= "Aucune information de programme maintenant, veuillez d’abord rechercher les chaînes !";
var chEpgWords		= ["Guide des programmes","Aucune donnée de programme.","Chaîne verrouillée!","Aucuns détails de programme.","Aucun titre de programme."];
var chEpgBooking	= ["Info de programmation ", "Numéro de chaîne","Date de début","Heure de début","Heure de fin",
						"Type de répétition","Type de programmation","Ajout","Remplacer","Changer",
						"Ajouter/Modifier"];
var epgHotKey		= ["Jour préc.","Jour suiv.","Filtre","Liste programmations","Ajout programmation"];
var chEpgBookRemind	= ["Heure début incorrecte","Heure fin incorrecte","Programmation en double","Sauvegarde réussie.","Suppression effectuée."];
var chSchePara		= ["Liste programmations","Heure de début","Date de début","Titre du programme","Nom de chaîne",
						"Durée","Répéter","Programmation","Modifier","Supprimer"];
var dateTimer		= ["Une fois","Chaque jour","Hebdomadaire"];
var scheduleDeleteReminds="Voulez-vous supprimer cette programmation?";
var scheduleNoLists	= "Aucune liste de programmations. Appuyer sur la  touche \"Rouge\" pour en ajouter une.";
var chListWords		= ["Liste des chaînes","Sélectionner Liste","Mode réception","Ajouter aux Fav.","Effacer",
						"Sélectionnez la liste des chaînes","Sélectionnez le mode de réception","Echanger"];
var chListType		= ["Toutes","Numérique","Analogique","Radio","Gratuit","Favoris"];
var chAutoScanOptions=["Sélectionnez l'opérateur","Type de chaîne","Recherche automatique"];
var souSoundType	= ["Non valide","Mono","Mono","Stéréo","Stéréo",
						"Mixte","Mixte","Son 1","Son 2","Son 2",
						"Nicam mono","Nicam stéréo","Nicam Dual-1","Nicam Dual-2","Nicam dual",
						"Mono","LL","RR","LR"];
var souPreset		= ["Musique","Film","Voix","Standard","Personnel"];
var picAdRgbMode	= ["Arrêt","Rouge seulement","Vert seulement","Bleu seulement"];
var picAdOptions	= ["Réduction de bruits","Filtrage bruits MPEG","Mode RVB ","Contraste Dynamique","Clarté de mouvement LED",
						"Ton chair","Mode film","Mode jeu","Tonalité","Balance des blancs",
						"Arrêt sur image ","Niveau du noir","Surbalayage","Gamma","Mode HDMI","Balance des blancs 10P","Couleur étendues",
						"Réduction du flou","Réduction des saccades","Espace colorimétrique","Amélioration des mouvements"];
var pic10Pwhite     = ["Intervalle","Rouge","Vert","Bleu","Réinitialiser","Couleur","Jaune","Cyan","Magenta"];
var picMotionClarity = ["Mode Mouvement","Interpolation de mouvement","Clarté de mouvement LED","Réduction du flou","Réduction des saccades","Réinitialiser"];
var picMotionMode   = ["Film","Fluide","Effacer","Sport","Utilisateur"];
var picResetDes		= "Tous les paramètres personnels seront réinitialisés. Êtes-vous sûr de vouloir effectuer l’action sélectionnée ?";
var pic10PReset     = "Êtes-vous sûr de vouloir réinitialiser la balance des blancs 10P ?";
var picMotionReset  = "Voulez-vous réinitialiser la clarté de mouvement ?";
var picColorSpaceReset    = "Êtes-vous sûr de vouloir réinitialiser l’espace colorimétrique ?";
var picOptions		= ["Préréglage de l’image",
						"Rétroéclairage","Luminosité","Contraste","Saturation","Teinte","Netteté","Tonalité","Mode écran","Format auto",
						"Amélioration des sports","3D","Navigation 3D","Paramètres ECO","Géométrie",
						"Paramètres avancés","Réinitialiser image","Gradation micro"];
var picSize			= ["Format 16:9", "Format 4:3", "Format 14:9", "Cinérama",
						"Zoom 16:9", "16:9 agrandir","Zoom 14:9","Zoom étiré","Zoom panoramique",
						"Zoom 2","Zoom panoramique 2","Résolution native écran","Point par point","Original","Panorama"];
var others			= ["Volume","Diffusion","Mot de passe","Etat","Mémoriser","Remplacer","Démarrer","Quitter","Recherche","Supprimer",
						"Aucun","Automatique","Recherche","Sécurité","Connecter","Actualiser","Réessayer","Arrêter","Réglages","Chaînes",
						"Modifier","Insérer","Signal","Terminé","Stéréo","Audio","Source","Pas de son","Informations","Réinitialiser",
						"Utilisateur","Configurer","Mémoriser","Utilisateur","Fermer le clavier","Mode de sécurité","Tous les jours","Liste PVR"];
var direction		= ["Gauche","Droite","Haut","Bas"];
var audioType 		= ["MPEG","Dolby Audio"/*"AC3"*/,"MPEG4","AAC", "Dolby Audio"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Inconnu"];
var soundChannels   = ["Inconnu","Mono","Sub","Mono Dual ","Stéréo","Stéréo Sub","Stéréo Dolby Surround","Surround 2 CH","Surround","3.0 Ch","4.0 Ch","5.0 Ch","LFE mono","LFE mono dual","LFE stéréo","LFE 2 Canaux surround","LFE surround","3.1 Ch","4.1 Ch","5.1 CH","7.1 CH","Stéréo combiné","FMRDO mono","FMRDO stéréo","FM mono Nicam mono","FM mono Nicam stéréo","FM mono Nicam dual","Gauche","Droite","Autres"];
var prompts			= ["Ajuster les réglages de l'image de façon la plus adaptée à votre environnement.",
						"Ajuster les niveaux de luminosité. Plus l'on s'approche de 100, plus ce sera lumineux.",
						"Ajuster les niveaux de contraste. Plus l'on s'approche de 100, plus l'écart noir-blanc de l'image s'intensifiera.",
						"Ajuster les niveaux de saturation. Plus l'on s'approche de 100, plus la couleur s'intensifiera.",
						"Ajuster les niveaux de finesse. Plus l'on s'approche de 100, plus les détails seront visibles.",
						"Ajuster les niveaux du rétroéclairage. Plus l'on s'approche de 100, plus l'écran sera lumineux.",
						"Ajuster les niveaux de nuance. Ces réglages modifient les tons de couleur. ",
						"Sélectionner le format d'image qui s'adapte le mieux au programme visionné.",
						"Configurer les options d'économie d'énergie.",
						"Ajuster les réglages relatifs à la géométrie de l'écran lors d'une connexion avec un ordinateur.",
						"Sélectionner plus de paramètres avancés d'image.",
						"Restaurer tous les paramètres d'image à leurs valeurs par défaut.",
						"Sélectionner un mode sonore qui correspond le mieux à vos préférences personnelles.",
						"Réglez la balance de volume entre le canal gauche et  le canal droit.",
						"Le Sound Retrieval System TruSurround HD offre une clarté et une performance sonore incroyable en basses et hautes fréquences.",
						"Format d'Interface Numérique connectant la sortie sonore numérique de la TV à un équipement audio home cinéma.",
						"Sélectionnez la langue audio qui correspond le mieux à vos préférences personnelles.",
						"Permet aux Malvoyants de profiter des programmes télévisés.",
						"Testez votre image, son et signal TV.",
						"Sélectionnez le type de liste de chaînes en fonction de votre signal TV.",
						"Choisir la langue des sous-titres du programme affichés au bas de l'écran.",
						"Voir le texte et les images pour la chaîne actuelle.",
						"Digital Living Network Alliance. Profitez des  photos, vidéos et musique provenant d'autres appareils, tels qu'un PC, via le réseau domestique.            ",
						"Affichez les contenus de votre téléphone sur la TV et utilisez le comme télécommande pour la TV. ",
						"Affichez les contenus d'un appareil Android compatible avec Miracast sur votre écran TV.",
						"Verrouillez votre téléviseur.",
						"Choisissez un nom pour votre appareil.",
						"Sélectionnez votre environnement de visualisation.",
						"Restaurer tous les paramètres système à leurs valeurs par défaut.",
    					"Switch off sports mode for more options.",
    					"Enhance the environmental contrast",
    					"A special mode to enjoy sport games",
    					"Enjoy more CEC functions."];
var initialTitle	= ["Bienvenue","Réglage initial"];
var initialPrompt	= ["Effectuez vos Réglages Initiaux maintenant, un Monde d'Expériences Passionnantes vous attend!",
						"Veuillez choisir votre langue:",
						"Sélectionnez votre pays :",
						"Sélectionnez votre lieu :",
						"Sélectionnez le type de votre connexion réseau :",
						"Sélectionnez le mode connexion réseau filaire :",
						"Impossible de se connecter à xxxxxxxxx ! Veuillez connecter l’appareil conformément au schéma suivant ou sélectionner Gauche pour réinitialiser.",
						"Connecté à xxxxxxxxx ! Veuillez sélectionner Droite pour continuer.",
						"1) Il se peut que votre téléviseur dispose déjà d’un adaptateur sans fil intégré\n 2) Ou, si un adaptateur sans fil USB est fourni, connectez-le à votre téléviseur.   Puis, veuillez sélectionner le type de réseau sans fil.",
						"Recherche en cours. Veuillez patienter...",
						"Il n’y a pas d'adaptateur sans fil connecté au TV !",
						"S'assurer que le code PIN suivant est installé au point d'accès avant de cliquer sur le bouton \"Suivant\" ci-dessous.",
						"Veuillez appuyez sur le bouton poussoir sur le point d’accès dans les 120 secondes avant d’appuyer sur Droite !",
						"WPS (configuration Wi-Fi protégée)",
						"PIN (numéro d’identification personnel)",
						"PBC (configuration par bouton poussoir) ",
						"Le contenu suivant ne peut être accédé qu’avec une connexion réseau. Voulez-vous sauter la configuration du réseau ?",
						"De nouvelles mises à jour de logiciel sont disponibles pour téléchargement, cela peut prendre un certain temps suivant votre réseau.",
						"La mise à jour du logiciel du téléviseur vous permet de bénéficier des dernières fonctionnalités et services.",
						"Vous ne pourrez pas profiter des plus récents services et fonctionnalités. Voulez-vous ignorer la mise à jour de logiciel?",
						"Appuyer sur le Bouton Droit pour continuer.",
						"Ne pas éteindre pendant la mise à jour, cela pouvant provoquer un dysfonctionnement de la TV.",
						"Si vous ne voulez pas mettre à jour, veuillez sélectionner NON.",
						"Mise à jour, veuillez patienter",
						"Vous pouvez également mettre à jour le logiciel dans Système/Mise à jour logiciel.                 ",
						"Le pays choisi exige un mot de passe .\nSpécifiez un code pour votre TV et confirmez-le.",
						"Ce code est trop simple.\nVeuillez utiliser des chiffres différents.",
						"Félicitations ! La configuration initiale est terminée. Vous pouvez modifier votre configuration par le biais du Menu principal et des sous-menus correspondants.",
						"Sélectionnez le mode de sécurité:",
						"Veuillez sélectionner le mode de connexion du réseau sans fil :",
						"Réseau"];
var initNetCabAndDonRe = ["Aucun câble réseau connecté, veuillez brancher un câble réseau !","Aucun adaptateur sans fil intégré ou aucun adaptateur USB sans fil n’est fourni."];
var initChPrompt = ["Installation des chaînes TV","Veuillez sélectionner le type de recherche Antenne.","Recherche automatique en cours...","Les chaînes Antenne suivantes ont été trouvées :","Sélectionnez le type de recherche par câble.","Veuillez sélectionner un opérateur dans la liste suivante.","Configurez les informations de recherche","Les chaînes par câble suivantes ont été trouvées :","Sélectionnez un opérateur dans la liste ci-dessous","Sélectionnez les satellites à rechercher ou modifiez le satellite sélectionné","Réglez les paramètres du satellite","Les chaînes suivantes ont été trouvées et la recherche des chaînes peut également être effectuée à nouveau dans Chaîne/Recherche des chaînes"];
var initClockPrompt = ["Obtenir l’heure fournie par le réseau !",
						"Veuillez régler la date et l’heure :"];
var initialOptions	= ["Environnement","Configuration du réseau","Mise à jour logiciel","Installation des chaînes","Horloge"];
var initialHotkeys	= ["Retour","Choisir ","Suivant"];
var initLocations	= ["Maison","Magasin","Magasin avec démo"];
var initNets		= ["Filaire","Sans fil","Je n'ai pas de connexion réseau"];
var initWireManuals	= ["Adresse IP","Masque ss-réseau","Passerelle défaut","DNS primaire","DNS secondaire"];
var initSoftUpdates = ["Mettre à jour maintenant","Mettre à jour plus tard"];
var initChannelIns	= ["Continuer","Je ne veux pas installer de chaînes"];
var initChScanTypes	= ["Numérique & Analogique","Numérique","Analogique","Je ne veux pas effectuer la recherche"];
var initChDvbts		= ["Chaînes Antenne analogiques :   ","Chaînes Antenne numériques :"];
var initChDvbcs		= ["Chaînes par câble analogiques:","Chaînes par câble numériques:"];
var initChDvbss		= ["Chaînes par satellite:"];
var initChDvbSOther	= ["Je ne veux pas rechercher les chaînes par satellite"];
var initEndConnectedStatus= ["Déconnecté","WiFi connecté","Filaire connecté"];
var initEndInstallations= "XXXX chaînes installées";
var initEndUpdate	= ["Mis à jour"];

var audioScenes 	= ["Sur un meuble","Montage mural"];			
var screenSavers	= ["Aucune information de programme maintenant, veuillez d’abord rechercher les chaînes !",
						"Aucun signal!",
						"Chaîne cryptée !",
						"Données uniquement",
						"Programme audio",
						"Pas de son ni d'image",
						"Non disponible",
						"Pas de Télétexte",
						"Aucune donnée de programme.",
						"Progr. verrouillé!",
						"Programme verrouillé!\nAppuyez sur OK et entrez votre code.",
						"Aucuns détails de programme.",
						"Programme nocif pour les mineurs.\nAppuyez sur OK et entrez votre code.",
						"Chaîne verrouillée!",
						"Chaîne verrouillée!\nAppuyez sur OK et entrez votre code.",
						"Entrée verrouillée!\nAppuyez sur OK et entrez votre code.",
						"Pas pris en charge",
						"Ce service n'est pas disponible actuellement",
						"Entrée vérouillée!",
						"Aucun titre de programme.",
						"Aucune fonction", 
						"Pas de sous-titres"
						];
var chBookingPromt	= ["La chaîne actuelle a un enregistrement programmé, le téléviseur commencera à enregistrer.",
						"Un enregistrement programmé est trouvé.\n Allez à XXXX pour enregistrer",
						"La chaîne en cours comprend un rappel.",
						"Un rappel programmé est trouvé.\n Allez à XXXX"];
var timeUnit		= ["Sec","Min"];
var ciPromt			= ["Les données du réseau ont changé. Pour mettre à jour vous pouvez effectuer une recherche des mises à jour. ",];
var othersPromt		= ["Veuillez patienter…",];
var menuOptions		= ["Image","Son","Chaîne","Smart TV","Réseau","Système","Assistance"];
var optionOptions	= ["Préréglage de l’image","Préréglage du son","Arrêt sur image ","T-Link","Lecture retardée","PVR","Liste programmations","Réglages","*"];
var optionTLinkPromt= [["Allumage automatique","Veille automatique","Commandes"],
						["Sous tension","Veille","Volume amplificateur"]];
var powerPromt		= ["Votre TV va s'éteindre!\n Appuyez une touche pour annuler."];
var ttxLanguage		= ["EUR OUEST","EUR EST","Russe","Arabe/Hébreu","Farsi","Arabe","Biélorusse","Grec","Turc"];
var ttxOptions		= ["Révéler","Cycle sous-page","Langue","Page d’alerte","Flash d’info"];
var weekday         = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
var lcnConfflict	= "Ce programme a un problème de réception. Il existe une version disponible sur la chaîne %d.";
var inShopMode		= "Votre téléviseur est en mode magasin. Pour le mode maison veuillez sélectionner \"Système\" et changer  \"Lieu\" dans le menu.                ";
var nitRefresh		= "Les données du réseau ont changées. Voulez-vous faire une mise à jour?";
var picHDMIMode     = ["Auto","Graphique","Vidéo"];

var glassRemind    	= ["Veuillez coupler vos lunettes 3D avec le téléviseur\n (maintenez appuyée la touche POWER sur les lunettes 3D).","Vos lunettes 3D sont connectées au téléviseur ",""];
var pvrRemind 		= ["Ne pas retirer la clé USB ou couper l'alimentation"];
var pvrConName   	= ["PVR","Informations du programme :",["Note: Pour enregistrer une chaîne HD, utilisez une clé USB de vitesse > 5.0MO/sec,  et pour une chaîne SD une clé USB de vitesse > 3.0MO/sec.","La vidéo enregistrée est située sous le répertoire \"PVR\"."],"Arrêter","Enregistrer","Heure","Minute","Durée","Informations","Utilisez les touches fléchées pour définir la durée d’enregistrement. "];
var pvrDisRemind 	= "Veuillez insérer une clé USB pour enregistrement.";
var pvrRemindWords  = ["Voulez-vous quitter ?",
							"Voulez-vous arrêter l’enregistrement et parcourir les fichiers enregistrés ?",
							"Clé USB retirée. ",
							"Espace libre insuffisant.",
							"Aucun fichier enregistré. Commencer à enregistrer.",
							"Fonctionnalité PVR non disponible sur chaîne cryptée.",
							"Fonctionnalité non disponible",
							"Sauvegarde réussie.",
							"Voulez-vous arrêter le processus d’enregistrement et changer de source?",
							"Le téléviseur arrêtera l’enregistrement actuel. Voulez-vous quitter ?",
							"L’enregistrement PVR a besoin du signal TV pour fonctionner correctement, veuillez vérifier votre signal."];
var pvrChangeCh 	= ["Voulez-vous changer de chaîne?",
							"Voulez-vous arrêter le processus d’enregistrement et changer de chaîne?"];
var pvrChangeToPIN8	= ["Voulez-vous changer la source à l’appareil connecté à l’entrée péritel ?",
				    		"Voulez-vous arrêter le processus d’enregistrement et changer la source à l’appareil connecté à l’entrée péritel ?"];
var pvrChangeToCEC  = ["Voulez-vous changer la source à l’appareil connecté à une entrée HDMI ?",
				  			 "Voulez-vous arrêter le processus d’enregistrement et changer la source à l’appareil connecté à une entrée HDMI ?"];
var pvrGuideJump    = ["Voulez-vous accéder à l’Guide des programmes ?",
							"Voulez-vous arrêter le processus d’enregistrement et accéder à l’Guide des programmes?"];
var pvrMediaJump    = ["Voulez-vous accéder aux médias ?",
							"Voulez-vous arrêter le processus d’enregistrement et accéder aux médias?"];
var timeshiftExtra	= ["Voulez-vous arrêter la lecture retardée et changer de chaîne?",
						"Voulez-vous arrêter la lecture retardée et changer la source à l’appareil connecté à l’entrée péritel ?",
						"Voulez-vous arrêter la lecture retardée et changer la source à l’appareil connecté à une entrée HDMI ?",
						"Lecture retardée non disponible sur chaîne cryptée.",
						"Voulez-vous arrêter la lecture retardée et accéder à l’Guide des programmes ?",
						"Voulez-vous arrêter la lecture retardée et accéder aux médias?",
						"Voulez-vous arrêter la lecture retardée et changer de source d'entrée?",
						"Veuillez insérer une clé USB pour enregistrement.",
						"La taille de la clé USB est insuffisante.",
						"Le téléviseur arrêtera la lecture retardée actuelle. Voulez-vous quitter ?"];
var timeshiftStatus	= ["Retour rapide","Arrêter","Lire","Pause","Avance rapide"];
var pvrPowerOffRemind= ["Enregistrement durant mode veille","Veille","Le téléviseur enregistre maintenant, voulez-vous continuer à enregistrer lorsque le téléviseur est en mode veille ?"];
var timeshiftInitTitle= "Configuration de la clé USB";
var timeshiftInitReminds= ["L'assistant permet de configurer la clé USB pour la lecture retardée. Sélectionnez le mode de configuration.",
						 "Nous conseillons de formater la clé USB. Toutes les données seront effacées.",
						 "Sélectionnez la taille du fichier pour la lecture retardée.",
						 "Formatage",
						 "Espace libre insuffisant.",
						 "Création du fichier lecture retardée",
						 "Test de la vitesse",
						 "La vitesse de la clé USB est insuffisante (< %f MO/sec) pour la fonction lecture retardée !",
						 "La clé USB est prête pour la lecture retardée. Nous conseillons cependant l'utilisation d'une clé de vitesse > %f MO/sec.",
						 "La clé USB est prête pour la lecture retardée. "];
var timeshiftInitButtons= ["Formater","Passer","Annuler ","OK","Terminé","Quitter"];
var timeshiftInitOther=["Vitesse clé USB: ","MO/sec"];

var selectChoice	= "Etes-vous sûr de vouloir exécuter cette commande?";
var chAtvStore		= "Sauvegarder sous XXXX";
var chEpgFirstGenreUK= ["Film","Informations","Divertissement ","Sport","Enfants","Éducation","Style de vie","Drame"];
var homePageTitleList = ["APPLICATIONS","TV","VIDÉOS","Page d’accueil"];
var homePageFavAndAllName  = ["Applications préférées","Toutes les applications"];
var homePageBackUp = ["Manuel électronique","GuideOn"];
var homePageRemind   = ["Les pleines fonctions sont disponibles uniquement après la connexion réseau.     ","Votre téléviseur n’a encore aucune chaîne. Les programmes sont disponibles après la recherche des chaînes.","Aucun programme","Rechercher chaînes maintenant ?"];
var homePageHistory = ["Historique"];
var miracastTitle = ["Affichage Wi-Fi","Appareil TCL"];
var miracastRemind=["Affichage Wi-Fi vous permet de partager l'écran et le son d'un appareil, comme un téléphone ou une tablette, sur votre téléviseur grâce à une liaison sans fil (c.à.d. sans câbles). Vous pouvez ainsi voir simultanément sur votre téléviseur ce que votre téléphone ou tablette affiche. Par exemple, il est possible de lancer une vidéo sur votre téléphone et de l'afficher simultanément sur votre téléviseur, ou d'utiliser votre tablette comme contrôleur de jeu avec le contenu affiché sur le grand écran de votre téléviseur. ","La liaison Wi-Fi du téléviseur est prête. Vous pouvez commencer à partager l’écran de votre appareil avec votre téléviseur dès maintenant.","Connexion en cours. Veuillez patienter!","Echec de la connexion !","Echec de connexion. Veuillez vérifier!"];
var homePageLittleWin = ["Réglages","Média","Chaînes préférées","Smart TV","Guide progr."];

var hbbtvStopRemind  = ["Voulez-vous arrêter la lecture?"];
var colorSystem = ["Auto","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Appuyez sur ≡ pour plus d’informations";
var emptyListInfo = "Pas de clé USB insérée ! ";
var optionVideoListArray_1 = ["Préréglage de l’image", "Préréglage du son", "Mode lecture", "Mode écran", "Mode 3D", 
							  "Commutation G/D", "Profondeur de champ", "Sous-titres", "Bande sonore", "Titre", "Chapitre", "Info"];
var optionVideoListArray_2 = ["Préréglage de l’image", "Préréglage du son", "Mode lecture", "Mode écran", 
							  "Sous-titres", "Bande sonore", "Titre", "Chapitre", "Info"];
var bottomTipsText = ["Lecture/Pause", "Retour rapide", "Avance rapide", "Liste de lecture", "Réglages"];
var picturePresetArray = ["Standard", "Dynamique", "Naturel", "Film", "Personnel"];
var videoPlayModeArray = ["Répéter tout", "Répéter la sélection", "Normal"];
var screenModeHDArray = ["16:9", "4:3", "Cinérama", "Zoom panoramique", "Zoom 2", "Zoom panoramique 2", "Zoom étiré", "Automatique"];
var screenModeSDArray = ["16:9", "4:3", "Cinérama", "Zoom 14:9", "Zoom 16:9", "16:9 agrandir", "Automatique"];
var Mode3DArray = ["Arrêt", "Conv.2D-à-3D", "Côte-à-côte", "Haut et Bas", "Entrelacement ligne"];
var videoOptionListArray = ["Arrêt", "Piste", "Sous-titres", "Titre", "Chapitre"];
var subMenuTitleText = "Sous-titres";
var langMenuTitleText = "Langue audio";
var titleMenuTitleText = "Titre";
var mode3DMenuTitleText = "Mode 3D";
var langInfoText = "Piste";
var STOP_RESUME_INFO = "Arrêt - Reprise";
var playListName = "Nom";
var eb_tips = "Informations";
var ok_button = "OK";
var eb_info = ["Erreur de décodage audio.", "Erreur de décodage vidéo.", "Format audio non pris en charge.", 
			   "Format vidéo non supporté.", "Impossible d'ouvrir ce fichier.", "Erreur de lecture, veuillez réessayer.",
			   "Format de fichier non pris en charge.", "Oups ! Le lecteur a cessé de fonctionner.",
			   "Le chemin d'accès n'existe pas ou est incorrect.\n Ré-insérez le périphérique de stockage et réessayez.",
			   "Continuer la lecture à partir de l'état de lecture\n précédent ?"];
var picturePlayErrorTips = ["Échec du chargement!!!","L’image est trop grande!!!","Erreur réseau!!!","Erreur thread!!!","Erreur param!!!","Erreur inconnue!!!"];
var frameTitleText = "Nouvelle clé";
var eb_quit_info = "Êtes-vous sûr de vouloir quitter ?";
var eb_yes = "Oui";
var eb_no = "Non";
var offinfo = "Arrêt";
var naInfo = "Nul";
var consoleInfoArray = ["Retour rapide", "Avance rapide", "Lecture/Pause", "Liste de lecture"];
var cantOperateText = ["Fonction non prise en charge."];
var chapterChangeInfo = "Il existe seulement les chapitres de 1 à XXXX.";
var metaDataArray = ["Métadonnées de titre/édition : ", "Métadonnées de chapitre : ", "Métadonnées audio : ", "Métadonnées de sous-titre : "];
var metaTitleInfo = "Titre";
var metaChapterInfo = "Chapitre";
var videoLoadingInfo = "Analyse en cours...";
var listLoadingInfo = "Chargement en cours…";
var pgInfo = "Classification par âge :";
var fileNameText = "Nom";
var fileDateText = "Date";
var fileSizeText = "Taille";
var fileDurationText = "Durée";
var fileDirectorText = "Réalisateur ";
var fileCopyrightText = "Droits d'auteur";
var fileArtistText = "Artiste";
var fileAlbumText = "Album";
var fileGenreText = "Genre";
var fileYearText = "Année";
var fileGenreText = "Genre";
var mainListArray = ["Toutes", "Photo", "Vidéo", "Musique"];
var sortArray = ["Nom", "Date"];
var parserArray = ["Normal", "Récursif"];
var emptyTipsInfo = "Oups. Aucun fichier pris en charge trouvé.";
var emptyFolderInfo = "Oups. Aucun fichier pris en charge trouvé.";
var sortName = "Trier par";
var parserName = "Affichage";
var divx_str1 = "Enregistrement DivX (R)";
var divx_str2 = "Désenregistrement DivX(R)";
var infor_str = "Info";
var quickMenuEmptyText = "Aucune option disponible.";

var musicSoundPresetArray = ["Standard", "Film", "Musique", "Voix", "Personnel"];
var musicInformationArray = ["Nom", "Artiste", "Album", "Genre:", "Année:", "Durée:"];
var playListName = "Nom";
var playTipsInfo = ["Vous lisez le premier fichier.", "Vous lisez le dernier fichier."]
var musicNameInfo = "Name";
var musicArtistInfo = "Artiste";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Préréglage du son";
var optionBGMInfo = "Lire à l’arrière-plan";
var optionAudioOnlyInfo = "Audio uniquement";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX s’est connecté au téléviseur !";
var tvRemoteTitle		= "Télécommande TV";
var tvRemoteDeveloper	= "L'application a été conçue par TCL";
var tvRemoteDeviceTitle	= "Nom du périphérique : ";
var remoteOption		= ["Partage de fichiers","Télécommande","Aide","À propos de","Connexion intelligente"];
var remotebottom		= "Veuillez télécharger \"Télécommande TV\" sur votre téléphone";
var remoteStage			= ["Android","iOS"];
var sharingReminds		= ["Partage de photos, de vidéos et de musique avec le téléviseur par l’intermédiaire du téléphone.",
							"Étapes : \n 1. Cliquez sur \"Télécommande TV\" sur le téléphone. Connectez le téléphone avec le téléviseur par le biais du même réseau WiFi ; \n 2. Cliquez sur \"Partage de médias\" pour parcourir les fichiers multimédias ; \n 3. Envoyez des médias au téléviseur pour les lire (avec l’une des options suivantes)   ",
							"     a) Glissez-déposez le dossier ou le fichier vers l'icône de la TV en haut de l'écran ;\n      b) Tournez le téléphone vers la TV pour faire démarrer le premier fichier ;\n      c) Lisez les fichiers multimédias sur votre téléphone et cliquez sur l'icône de partage TV ;",
							"   4. Lors de la lecture sur la TV, agitez votre téléphone pour lire le fichier suivant ou précédent."];
var controlReminds		= ["Servez-vous de votre téléphone comme télécommande pour commander votre TV.",
							" ",
							"Étapes : \n 1. Cliquez sur \"Télécommande TV\" sur le téléphone. Connectez le téléphone avec le téléviseur par le biais du même réseau WiFi ; \n 2. Cliquez sur \"Télécommande TV\" pour commander le téléviseur."];
var helpDeviceWords		= "Interaction écrans multiples";
var helpBottom			= " Grâce à la technologie cloud, les appareils munis d'une puce électronique comme le téléphone et la télévision sont reliés entre eux. Partagez vos médias sur plusieurs écrans avec votre famille et commandez votre télévision depuis votre téléphone ! ";
var helpReminds			= ["Préparations\n 1. Téléchargez et installez \"Télécommande TV\" de Google Play ou Apple Store.\n 2. Connectez le téléphone avec le téléviseur par le biais du même réseau WiFi.",
							" ",
							"Type de téléphone recommandé\n   1. Processeur : supérieur à 800 MHz\n   2. Capacité de stockage : au moins 80 Mo d'espace libre",
							" ",
							"Avis de non-responsabilité\n Si \"Télécommande TV\" n'est pas disponible sur votre téléphone, veuillez contacter le fabricant du téléphone."];
var helpButtons			= ["Précédent","Suivant"];
var aboutReminds		= ["Télécommande TV","L'application a été conçue par TCL"];
var aboutExit			= "Quitter";
var smartReminds		= ["Connexion rapide et intelligente entre le téléviseur et le téléphone.",
							" ",
							"Étapes\n 1. Connectez le téléviseur et le téléphone au même réseau local. Cliquez sur \"Télécommande TV\" sur le téléphone.\n 2. Cliquez sur \"Connexion intelligente\" pour scanner le code QR.\n 3. Avec le téléviseur en mode d’affichage Diffusion, appuyez sur la touche INFO de la télécommande pendant 4 secondes ; un code QR plein écran s’affiche.",];
var smartQRReminds		= ["Veuillez cliquer sur \"Connexion intelligente\" dans \"Télécommande TV\" sur votre téléphone et scanner le code QR pour connecter le téléviseur et le téléphone rapidement.",
							"Le code QR contient les informations du compte du réseau local. Veuillez le garder bien."];
							

var consoleTipArray = ["Précédent","Suivant","Console","Liste de lecture"];							
var optionInfoArray = ["Préréglage de l’image","Mode lecture","Durée","Effet","Info"];

var playModeArray = ["Normal","Aléatoire","Répéter"];
var durationArray = ["Court (5s)", "Moyen (10s)", "Long (15s)"];
var effectArray = ["Aucun", "Rotation", "Vers la droite", "Vers la gauche", "Vers le haut", "Vers le bas", "Vers le centre", "Vers l'extérieur", "Aléatoire"];
var infoArray = ["Nom:","Taille:","Date:","Lieu"];

var picturePresetBarTitleInfo = "Préréglage de l’image";
var picturePresetBarArray = ["Standard","Dynamique","Studio","Film","Personnel"];
var upTipsInfo = "Déplacer l’image"; //add yums 2014-10-10
var consoleTipsArray = ["Console","Précédent","Suivant","Liste de lecture","Réglages"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Appuyez sur DROITE à nouveau pour lire l’image suivante","Appuyez sur GAUCHE à nouveau pour lire l’image précédente","Appuyez sur BAS à nouveau pour voir la liste de lecture"]; //add yums 2014-10-10

var optionPvrListArray = ["Préréglage de l’image","Préréglage du son", "Mode écran", "Mode 3D", "Sous-titres", "Bande sonore", "Info"];							
var titleSpanFirstArray = ["Commande & Connexion","Fonctionnement de base","Applications","TV","Réglages","FAQ"];
var titleSpanSecondArray = [["Télécommande","Touches du clavier","Navigation Facile","Connexion TV","Connexion TV","Connexion TV","Sans fil"],["Lanceur","Barre d’état","Source"],["Applications en cours","Média","Télécommande TV"],["Régler la chaîne et le volume","Liste des chaînes","Guide des programmes ","Installation des Chaînes","Chaînes préférées"],["Réglage de l’image","Réglage du son","Réglage de la chaîne","Mise à jour logiciel","Langue","Verrouillage parental"],["Questions fréquemment posées","Questions fréquemment posées","Dépannage","Dépannage","Termes et Conditions"]];
var contentSpan1_1Array =[["ALIMENTATION:","SOURCE:","Paramètres:","Option:","RETOUR:","Info:","Accueil:","QUITTER:","LISTE:"],
    ["Mise en marche ou mode veille",
        "Sélectionner la source d'entrée",
        "Pour afficher le menu Réglages",
        "Pour afficher le menu Option",
        "Revenir au menu précédent ou sortir d'une application en cours d'exécution",
        "Affiche les informations du programme",
        "Pour accéder à la page d’accueil SmartTV",
        "Revenir au menu précédent ou sortir d'une application en cours d'exécution",
        "Affiche la liste des chaînes"]];
var contentSpan1_2Array = ["Chaîne précédente","Chaîne suivante","Augmenter le volume","Baisser le volume","Va à la page d’accueil","Confirmer l’option","Veille / Marche"];
var contentSpan1_3Array = ["OK/Guide","Chaîne suivante","Chaîne précédente","Diminuer le volume","Augmenter le volume","Disponibles comme touches directionnelles pour certaines fonctions."];
var contentSpan1_4Array = ["LAN","HDMI (MHL)","HDMI","HDMI (ARC)","Adaptateur AV OUT","LAN","Smartphone","PC / Décodeur / DVD","Amplificateur audio","Amplificateur audio / Moniteur","Votre téléviseur peut ne pas inclure toutes les prises."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Casque","Adaptateur AV IN","SPDIF","Adaptateur CMP AUDIO IN","Adaptateur CMP IN (YPbPr)","Appareils USB","Appareils USB","Casque","Caméra numérique / Console de jeux / Décodeur / DVD","Amplificateur audio","Caméra numérique / Console de jeux / Décodeur / DVD","Votre téléviseur peut ne pas inclure toutes les prises.   "];
var contentSpan1_6Array = ["Interface Commune","SD","VGA","Péritel","Mini SCART","ENTRÉE ANTENNE","CI  CAM ","Carte SD","Ordinateur","Décodeur / DVD","Antenne / Câble / Satellite","Votre téléviseur peut ne pas inclure toutes les prises.   "];
var contentSpan1_7Array = ["Tablette","Ordinateur","Routeur","Téléphone","TV"];
var contentSpan1_8Array = ["Interrupteur alimentation/fonction","Maintenez appuyé le bouton pour accéder à la fonction minuteur de veille automatique","Bas","Haut","Volume/Chaîne/Source"];

var contentSpan2Array = [["Utilisez les touches directionnelles pour visualiser la Page d'Accueil.","Puis appuyez sur OK pour regarder un des programmes recommandés ou accéder à l’application."],["Affichez la date, le réseau et les périphériques, etc. dans le coin supérieur droit de l’écran."],["Sélectionnez la source d’entrée parmi les périphériques connectés au téléviseur via les différents ports, tels que le TV, AV, HDMI, etc."]];

var contentSpan3Array = ["Regardez et profitez de vos Applications préférées via la page Smart TV.","Visionnez des photos, regardez des vidéos et écoutez de la musique depuis un dispositif de stockage USB.","Connectez votre téléviseur et le téléphone ou la tablette au même réseau local","Cliquer sur nScreen ou Télécommande TV sur le téléphone ou la tablette","Partagez des photos, des vidéos et de la musique sur des écrans multiples avec votre famille et commandez votre TV via votre téléphone"];
var contentSpan4Array = [["Appuyez sur P▲/P▼ pour changer de chaîne","Appuyez sur V+/V- pour régler le volume"],["Appuyez sur LIST sur la télécommande pour voir la liste des chaînes.","Appuyez sur HAUT/BAS pour choisir votre chaîne"],["Guide Electronique des Programmes est un guide à l’écran affichant les émissions programmées. Vous pouvez naviguer, sélectionner, voir et enregistrer des programmes."],["Rechercher et installer des chaînes"],["Ajoutez ou modifiez vos chaînes préférées dans la Liste des chaînes"]];
var contentSpan5Array = ["Profitez de vos programmes préférés à travers des applications vidéo"];
var contentSpan6Array = [["Appuyez sur MENU pour afficher les options de réglage du système. ","Accédez aux paramètres de l’image pour ajuster les valeurs"],["Appuyez sur MENU pour afficher les options de réglage du système.","Accédez aux paramètres du son pour définir les options"],["Appuyez sur MENU pour afficher les options de réglage du système.","Accédez aux paramètres de la chaîne pour définir les options"],["Mettez à jour votre téléviseur lorsqu’une nouvelle version du logiciel est disponible"],["Vous pouvez choisir votre langue de menu préférée"],["Permet aux parents de bloquer les chaînes ou les programmes qui ne conviennent pas aux enfants"]];
var contentSpan7_1Array = [["Pas d’image, pas de son","Vérifiez si le fusible ou le disjoncteur fonctionne.","Branchez un autre appareil électrique dans la prise électrique pour vous assurer qu’elle fonctionne ou a été allumée.","La fiche d’alimentation est en mauvais contact avec la prise de courant","Vérifiez la source du signal."],["Image normale, pas de son","Appuyez sur le bouton de volume V+ pour augmenter le volume.","Le réglage du son est incorrect.","Erreur du signal d’émission."],["Son normal, pas d’image","Ajustez la luminosité et le contraste","Erreur du signal d’émission.","Vérifiez si vous êtes en mode audio uniquement."]];
var contentSpan7_2Array = [["Interférence radioélectrique","Cette interférence produit des ondulations mobiles ou des stries diagonales et, dans certains cas, la perte de contraste dans l’image. Trouvez et supprimez la source d’interférence radio."],["Pas de couleur","Ajustez les réglages de couleur.","Essayez une autre chaîne. Il se peut que le programme soit en noir et blanc."],["La télécommande ne fonctionne pas","Remplacez les piles.","Les piles ne sont pas installées correctement. L’alimentation secteur du téléviseur n’est pas connectée."]];
var contentSpan7_3Array = [["Le contenu du périphérique USB ne s’affiche pas","Vérifiez que le périphérique de stockage USB est compatible avec le téléviseur.","Vérifiez que les formats des fichiers audio et image sont pris en charge par le téléviseur."],["Lecture avec pas de son","Le format audio de la vidéo n’est pas pris en charge par le téléviseur."],["Les fichiers ne sont pas lus d'une manière fluide ","Les performances de transfert du support de stockage USB peuvent ralentir le transfert des données au téléviseur."]];
var contentSpan7_4Array = [["À quoi dois-je faire attention, quand je fais la mise à jour du logiciel","Pas d'extinction lors de la mise à jour du logiciel.   ","Évitez toute opération avec votre télécommande lors de la mise à jour du logiciel.","Soyez patient car le processus de mise à jour du logiciel peut prendre un peu plus."],["Il n’y a aucun changement distinct de l’interface du téléviseur après la mise à jour du logiciel.","Dans certaines conditions, la mise à jour du logiciel peut non seulement mettre à jour ou ajouter de nouvelles fonctions mais également améliorer les performances du téléviseur sans variations distinctes de l’interface. En outre, l’interface du téléviseur peut rester intacte parfois."]];
var termsTitle = "Termes et Conditions";
var termsConditions = ["Les contenus et services (collectivement, l'« Application sous licence ») mis à votre disposition grâce à ce téléviseur (cet « Appareil ») vous sont concédés sous licence et non pas vendus, pour une utilisation uniquement en vertu de ces termes et conditions. Les fournisseurs de l'Application sous licence (chacun, un « Fournisseur d'applications ») se réservent tous les droits non expressément accordés.\n1.	Portée de la licence\nLa licence qui vous est accordée pour une Application sous licence par le Fournisseur d'applications pertinent est limitée à une licence non-transférable d'utiliser l'Application sous licence sur l'Appareil que vous possédez ou contrôlez. Vous ne pouvez pas distribuer ou rendre l'Application sous licence disponible sur un réseau où elle pourrait être utilisée par plusieurs appareils en même temps. Vous ne pouvez pas louer, prêter, vendre, redistribuer ou sous-licencier l'Application sous licence. \nVous reconnaissez et acceptez que toutes les Applications sous licence et tous les contenus inclus qui sont accessibles via cet Appareil appartiennent au Fournisseur d'applications et sont protégés par les lois applicables en matière de propriété intellectuelle. Vous ne pouvez pas modifier, copier, décompiler, désosser, désassembler, republier, télécharger, afficher, transmettre, traduire, tenter de dériver le code source de, créer des œuvres dérivées, ou exploiter toute Application sous licence ou toute mise à jour ou partie de celle-ci. Si vous contrevenez à cette restriction, vous pouvez être passible de poursuites et dommages. Les termes de la licence régiront toute mise à jour fournie par le Fournisseur d'applications qui remplace et/ou complète l'Application sous licence d'origine, à moins que cette mise à niveau soit accompagnée d'une licence distincte, auquel cas les termes de cette licence régiront. Vous serez seul responsable pour tous les coûts (le cas échéant) pour la mise à niveau de l'Application sous licence.\n2.	Matériaux tiers\nL'Application sous licence peut permettre l'accès à des services et des sites Web du Fournisseur d'applications et de tiers (collectivement, les « Services »). Vous comprenez qu'en utilisant l'un des Services, vous pouvez rencontrer du contenu pouvant être considéré comme offensant, indécent ou choquant, lequel contenu peut ou ne peut pas être identifié comme un langage explicite, et que les résultats de toute recherche ou l'accès à une URL particulière peuvent automatiquement et involontairement générer des liens ou des références à un contenu répréhensible. Néanmoins, vous acceptez que le fabricant de cet Appareil (le « Fabricant ») et le Fournisseur d'applications n'auront aucune responsabilité envers vous pour le contenu qui peut être considéré comme offensant, indécent ou choquant.\nEn utilisant les Services, vous reconnaissez et acceptez que le Fabricant n'est pas responsable de l'examen ou de l'évaluation du contenu, de l'exactitude, de l'exhaustivité, de l’opportunité, de la validité, du respect du droit d'auteur, de la légalité, de la qualité ou de tout autre aspect de ces Services. Le Fabricant ne garantit, n'endosse, n'assume et n'aura aucune obligation ou responsabilité envers vous ou toute autre personne relative aux Services. \nVous reconnaissez et acceptez que les Services peuvent inclure du contenu, des informations et du matériel propriétaires (collectivement, des « Matériaux tiers ») qui sont protégés par la propriété intellectuelle et d'autres lois, et que vous ne pourrez utiliser ces Matériaux tiers d'aucune manière que ce soit sauf pour l'utilisation autorisée des Services. Vous acceptez de ne pas reproduire, modifier, louer, prêter, vendre, distribuer les Matériaux tiers ou créer des œuvres dérivées de ceux-ci d'aucune manière, et de n'exploiter les Services d'aucune manière non autorisée. Vous acceptez de n'utiliser les Services d'aucune manière pour harceler, abuser, traquer, menacer, diffamer ou autrement enfreindre ou violer les droits de toute autre partie, et que le Fabricant n'est en aucun cas responsable d'une telle utilisation par vous, ni pour aucun message ou transmission harcelante, menaçante, diffamatoire, offensante ou illégale que vous pouvez recevoir suite à l'utilisation des Services.\n3.	Aucune garantie\nVous reconnaissez et acceptez que l'utilisation de l'Application sous licence et des Services est à vos propres risques. Toutes les Applications sous licence et Services sont fournis « tels quels » et « tel que disponible » sans garantie d'aucune sorte, expresse ou implicite. Le Fabricant décline expressément toutes les garanties et conditions relatives à l'Application sous licence et les Services, expresses ou implicites, y compris mais sans s'y limiter, les garanties de qualité marchande, de qualité satisfaisante, d'adéquation à un usage particulier, de précision, de jouissance paisible et de non-violation de droits de tiers. Le Fabricant ne garantit pas l'exactitude, la validité, l'opportunité, la légalité ou l'exhaustivité de toute Application sous licence ou des Services mis à disposition par l'intermédiaire de cet Appareil et ne garantit pas que l'Appareil, l'Application sous licence ou les Services répondront à vos exigences, ou que l'utilisation de l'Application sous licence ou des Services sera ininterrompue ou sans erreur, ni que les défauts dans l'Application sous licence ou des Services seront corrigés. Si l'Application sous licence ou les Services s'avèrent défectueux, vous vous assumez le coût entier de tout entretien, réparation ou correction nécessaire.\nVous reconnaissez et acceptez que l'Application sous licence et les Services peuvent être modifiés, suspendus, supprimés, terminés ou interrompus, ou l'accès peut être désactivé à tout moment, sans préavis, et que le Fabricant n'offre aucune représentation ou garantie que tout contenu ou service inclus dans l'Application sous licence et les Services restera disponible pendant une période donnée. Ces contenus et services sont transmis par des tiers au moyen de réseaux et des installations de transmission sur lesquels le Fabricant n'exerce aucun contrôle. Sans limiter la généralité de ce qui précède, le Fabricant décline expressément toute responsabilité pour toute modification, interruption, désactivation, suppression ou suspension de tout contenu ou service mis à disposition par cet appareil. Le Fournisseur d'applications et les autres fournisseurs de Services se réservent le droit de modifier, suspendre, supprimer ou désactiver l'accès à toute Application sous licence ou Service à tout moment sans préavis. Le Fabricant peut également imposer des limites sur l'utilisation ou l'accès à certaines Applications sous licence ou des Services, dans tous les cas et sans préavis ni obligation.\nLe Fabricant n'est en aucun cas responsable du service client lié à l'Application sous licence et aux Services. Toute question ou demande de service relative à l'Application sous licence et aux Services doit être faite directement auprès du fournisseur respectif.\n4.	Collecte et utilisation des informations\nVous acceptez que le Fabricant, les Fournisseurs d'applications et les fournisseurs de Services peuvent recueillir et utiliser des données techniques et des informations connexes, y compris mais non limité à des informations techniques sur cet Appareil, le système et les logiciels d'application, et les périphériques, afin de faciliter la fourniture de mises à jour de logiciel, de support technique et d'autres services pour vous (le cas échéant) liés à l'Appareil et à l'Application sous licence. Le Fabricant, les Fournisseurs d'applications et les fournisseurs de Services peuvent utiliser ces informations aussi longtemps que c'est dans une forme qui ne vous identifie pas personnellement, afin d'améliorer leurs produits ou de vous fournir des services ou des technologies.\n5.	Indisponibilité de certaines fonctionnalités\nEn raison des restrictions du Fournisseur d'applications, certaines fonctionnalités, applications et services peuvent ne pas être disponibles sur cet Appareil (y compris ses périphériques) ou dans tous les territoires. Certaines fonctionnalités sur cet Appareil peuvent également exiger des périphériques supplémentaires ou des frais d'adhésion vendus séparément.\n6.	Limitation de responsabilité\nDans la mesure permise par la loi, en aucun cas, y compris la négligence, le Fabricant ne sera passible, que ce soit en responsabilité contractuelle ou délictuelle, des dommages directs, indirects, accessoires, spéciaux ou consécutifs, honoraires d'avocats, frais ou tout autre dommage découlant de, ou en relation avec toute information contenue dans, ou à la suite de l'utilisation de l'Appareil, toute Application sous licence ou tout Service par vous ou un tiers, même si avisé de la possibilité de tels dommages."];


var noChannelListRemind        = ["Aucune chaîne trouvée. La liste des chaînes est disponible après recherche des chaînes.","Recherche des chaînes"];
var closeSubtitleRemind   = "La fonction sera disponible lorsque le sous-titrage est désactivé. Voulez-vous le faire maintenant ?";

var estickerTitles = ["Des images très réalistes","Des couleurs qui s’animent","Des mouvements pleins de vie  ","Une qualité d’image dynamique","Conversion SR UHD","L'expérience 3D ultime ","Des performances plus rapides","Prêt pour les futurs contenus 4K ","Appréciez le monde en ligne","Accédez à du contenu supplémentaire","Syntoniseurs numériques intégrés","Connectez tous les périphériques","Diverses sources 4K","Contenu USB","WiFi ultra rapide","Contenu mobile sur le téléviseur","Contenu d’appareils mobiles ","Contenu local","Approuvé par DivX","Des images sans cadre","Canal Ready","TDT Premium"];
var estickerDescriptions = ["Une incroyable expérience visuelle grâce aux images avec quatre fois les détails de Full HD sur un écran UHD","Une large gamme de couleurs procure l’émotion dans toutes les scènes avec les rouges vifs et les verts émeraude","Interpolation d’image 4K et commande de rétro-éclairage pour vaincre les défauts du flou de mouvement","L’éclat de l’image originale est amélioré pour produire une expression vraiment dynamique avec un contraste brillant","Profitez des séries TV et des disques Blu-Ray impeccables grâce à la technologie Super Résolution","Faites l'expérience de votre téléviseur \"prêt 3D\" et regardez divers contenus 3D","Expérience de divertissement plus agréable avec le processeur Quad Core procurant une interaction fluide et des performances accrues","Prise en charge des logiciels décodeurs HEVC (H.265)  pour la prochaine norme de distribution vidéo 4K","Richesse d’applications en ligne, services VOD, télévision de rattrapage et navigation sur Internet","Voyez plus avec des services et des contenus supplémentaires de vos diffuseurs préférés","Accédez aux chaînes de télévision en haute définition sans décodeur supplémentaire","Facilité de connexion avec plusieurs sources numériques disponibles à la maison","Téléviseur prêt pour l’avenir, capable d'afficher du 4K 50/60 Hz par le biais de HDMI 2.0 avec HDCP 2.2","Contenu vidéo ou photo directement à partir d'une clé USB, d'un disque dur, de l’appareil photo ou la caméra vidéo sur un grand écran en résolution 4K","La technique 2x2 MIMO et la norme AC de dernière génération offrent une incomparable vitesse d’accès Internet  ","Profitez des photos, vidéos et applications d'appareils mobiles sur un grand écran grâce à la technologie \"mirroring\" de recopie d'écran","Les photos, vidéos, applications du téléphone ou de la tablette peuvent être affichées sur un grand écran ","Affichez sur un grand écran le contenu local comme des photos, des vidéos des périphériques connectés au réseau local","Regardez des films loués ou achetés protégés par DivX","Cadre ultra mince et design super plat","Testé et approuvé par Canal+","Testé et certifié TDT Premium"];							

var eManualTextArray = ["Manuel électronique","L'ensemble des graphiques présents à l'intérieur sont pour représentation uniquement."];
var frontPanelRemind = "Clavier verrouillé";
var eRPRemind		 = "Le mode Magasin est incompatible avec la directive ERP. Etes-vous sûr de vouloir le sélectionner ?";	
var noRelatedChannel = "Aucune chaîne associée";
var option0624Name          = ["BOP","BFS","Événement Par Événement","GetUserID","BGM","Réinitialiser tout","Réinitialisation magasin","NRM","DVB-T2 et choix du pays","Mode HbbTV"];
var DVBT2AndChoice = ["Marche","Par pays","Arrêt"];
var hbbtvServiceRemind = "Le service HbbTV sera bientôt disponible";
var insertWord = "Insérer";			
var viewDetail = "Voir les détails";							
							

var remindOAD  = "Mise à jour logiciel. Une mise à jour conseillée du logiciel peut se trouver sur une autre chaîne. Si vous voulez la télécharger, le TV changera de chaîne automatiquement. Le faire maintenant ?";

var LEDStatus = ["Clignotant", "Normale","Arrêt"];
var netFlixRemind = "Cette fonction va interrompre l'accès aux services Netflix jusqu'à ce que vous vous reconnectiez.";
var ESNExplanation = "Numéro de série électronique";
var resetShopRemind = "Le système est en cours de réinitialisation, n’éteignez pas le téléviseur";
var initialSelectOption = "Veuillez sélectionner une option:";
var databaseRemind   = "Le système a identifié la base de données endommagée pour une raison inconnue et l’a reconstruite automatiquement, appuyez sur OK pour continuer";
var Deactivation = "Déconnexion";
var oadFutureRemind = "Mise à jour du logiciel.\n Une nouvelle mise à jour du logiciel sera disponible à %s. Son installation peut prendre plusieurs minutes pendant lesquelles l'écran restera noir. N'éteignez pas le récepteur pendant la mise à jour. Si vous acceptez cette mise à jour, laissez le récepteur allumé à l'heure programmée. Voulez-vous recevoir cette mise à jour ?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Sortie son ";
var bt_soundOutPutTV = "Enceintes TV";
var bt_soundOutPutBT = "Appareil bluetooth";
var bt_soundOutPutBT_TV = "Bluetooth et TV";
var bt_refreshBarName = "appareils";
var bt_settingTips_On = "Activer fonction Bluetooth et dispositifs de scan.";
var bt_settingTips_Finding = "Trouver dispositifs disponibles ...";
var bt_settingTips_NoDevice = "Aucun appareil disponible";
var bt_deviceList_State_NoConnect = "Non connecté";
var bt_deviceList_State_Connecting = "Connectant";
var bt_deviceList_State_Connected = "Connecté";
var bt_deviceList_State_Paired = "Couplé";
var bt_deviceList_Conncect_Failed_Tips1 = "Connexion échouée";
var bt_deviceList_Conncect_Failed_Tips2 = "Veuillez confirmer fonction Bluetooh XXX est On";
var bt_deviceList_Conncect_Success = "Connnecté à dispositif Bluetooth";
var bt_deviceList_Disconncect_Success = "Déconnnecté de dispositif Bluetooth";
var bt_deviceList_Disconnect = "Êtes-vous sûr de vouloir déconnecter de XXX?";
var bt_tipsTitle = "Avis";
var bt_bluetooth_Pairing_Title = "Couplage Bluetooth";
var bt_bluetooth_Input_Pin = "Veuillez entrer PIN";
var bt_bluetooth_Output_Pin_Tip = "Entrer Pin  xxxx par Clavier";
var bt_bluetooth_Pin_Wrong_Tip = "PIN incorrect";
var bt_bluetooth_Remove_Pair_Title = "Demande";
var bt_bluetooth_Remove_Pair_Ask = "Oubli du dispositif?";

var audioDescriptionName = ["Description audio","Volume","Volume du haut-parleur","Casque","Volume du casque","AD volume","Périphérique BT","Volume du périphérique BT","Amplificateur","Haut-parleur"];
var audioDescriptionOptions = ["Arrêt","Normale","Description audio"];
var volumeOffRemind = 'Veuillez régler XXX sur « Activé » dans le menu Réglages.';
var mEPSRemind = "Le mode magasin ne répond pas aux exigences de la norme MEPS. Êtes-vous sûr de vouloir le sélectionner?";	
var parentRatingAUOptions = ["Aucun blocage", "Bloquer G et au-dessus (facultatif)", "Bloquer PG et au-dessus", "Bloquer M et au-dessus", "Bloquer MA et au-dessus", "Bloquer AV et au-dessus",  "Bloquer R et au-dessus", "Bloquer tout"];	
var mEPSTips = ["Le mode d'image actuel ne répond pas aux exigences\nde la norme MEPS, le mode standard est recommandé.",    "Votre téléviseur est en mode magasin.\nReportez-vous au menu Réglages pour plus d’informations sur le mode maison."];	
var switchSourceRemind   = " inséré.Souhaitez-vous l’afficher?";
var footballModeName = "Mode sport";
var resetStadium = "Stade";	
var atvSearchMenu = "Recherche manuelle de chaînes télé analogique";	
var dtvSearchMenu = "Recherche manuelle de chaînes télé numériques";	
var settingNoticeSourceName = "Source automatique";	
var smartTVOptions		= ["Portail Smart TV","HbbTV","Partager et Regarder","Affichage Wi-Fi","Politique Smart TV",
    "Réseau en veille","Réinitialiser smart TV"];
var supportOptions = ["Diagnostic à distance","Nous contacter"];	
var tvDoctor = ["Remote diagnosis 2.0","L'application est disponible uniquement pour votre Smart TV, elle permet d’effectuer un diagnostic afin d'améliorer le produit. Les données de fonctionnement du téléviseur et les informations sur le modèle seront collectées par cette application et téléchargées sur un serveur et serviront à résoudre des problèmes. Vos informations personnelles ne seront accessibles par aucune personne. Assurez-vous que votre téléviseur est correctement connecté à Internet.","Diagnostic local","Veuillez suivre les instructions du personnel d’assistance une fois le diagnostic est lancé.","Diagnostic à distance","Assurez-vous que le personnel d’assistance est en ligne.","Numéro de série :","&nbsp;&nbsp;&nbsp;&nbsp;User ID:","Connexion...","Connecté, veillez maintenir le réseau connecté.","Impossible d'accéder à Internet,\nVeuillez vérifier la connexion réseau.","Quitter"];	
var ClosedcaptionName = "Sous-titrage";	
var sysCCOptions = ["Mode ST","ST analogique","ST numérique","Superposer","Sous-titrage"];	
var sysCCmodeOption = ["Arrêt", "Marche", "Activer si son coupé"];	
var sysanalogCCOption = ["Arrêt", "CC1", "CC2", "CC3", "CC4", "Texte1", "Texte2", "Texte3", "Texte4"];	
var sysdigitalCCOption = ["Arrêt", "Service 1", "Service 2", "Service 3", "Service 4", "Service 5", "Service 6", "Service 7", "Service 8"];	
var syssuperimposeOption = ["Arrêt", "Service 1", "Service 2", "Service 3", "Service 4", "Service 5", "Service 6", "Service 7", "Service 8"];	
var sysCCOPtionItems = ["Option ST","Mode","Style de police","Taille de police","Style de police de contour","Couleur de police de contour","Couleur de l'avant plan","Couleur de l'arrière plan","Opacité de l’avant plan","Opacité de l’arrière-plan"];	
var sysCCOtionMode = ["Personnalisé","Par défaut"];	
var sysCCOptionFontStyle = ["Par défaut","Police1","Police2","Police3","Police4","Police5","Police6","Police7"];	
var sysCCOptionFontSize = ["Par défaut","Grand","Petit","Normal"];	
var sysCCOptionFontEdgeStyle = ["Par défaut","Aucun","En relief","Enfoncé","Ombre gauche","Ombre droite"];	
var sysCCOptionFontColor = ["Par défaut","Noir","Blanc","Rouge","Vert","Bleu","Jaune","Magenta","Cyan"];	
var sysCCOptionFontOpacity = ["Par défaut","Plein","Clignotant","Translucide","Transparent"];	
var contactUsOption = ["Nous contacter",    "Nous Contacter si vous rencontrez les problèmes de fonctionnement de cet appareil.",    "Nous contacter",    "Site web : Visitez",    "Numéro du centre d’appel :","Informations sur le produit","Nom du modèle :",    "Version du logiciel :","","ID utilisateur :","ID projet :",    "Type de client :","Adresse MAC sans fil :","adresse MAC filaire :","ESN Netflix :","Recherchez des information sur votre téléphone portable.",    "Puis sélectionnez votre pays."];
var homePageWords = ["Historique", "Recherche"];	
var titlePageWords = ["Maison", "Vidéos","Téléviseur","Applications"];	
var videosPageWords = ["Films", "Sport","Musique","Populaire","Jeux","Éducation","Actualités"];	
var statusPageWords = ["USB","Paramètres","Wi-Fi","Filaire"];	
var searchPageWords = ["Recherche", "Recherches populaires :","Spectacles, films, Personnage..."];	
var resultSearchPageWords = ["Résultats concernant"," ","Essayez d’autres mots clés.","désolé, aucune vidéo n'a été trouvé concernant"," "];	
var historyPageWords = ["Historique", "Appuyez","pour supprimer l'historique","Supprimer un","Tout supprimer","Hier","Aujourd’hui","Vous n'avez regardé aucune vidéo encore.","Suppression de l'historique réussie."];	
var channelPageWords = ["Désolé, Aucune vidéo trouvée."];	
var virtualRemoteValues = ["1","2","3","4","5","6","7","8","9",                          "Zoom-","0","Zoom+",                          "Quitter","0","",                          "Liste","0","Texte",                          "Guide","Entrer","Quitter",                          "Menu","Sous-titre","Info",                          "Arrêter",                          "Info","Menu","Quitter",                          "Quitter"                          ];	
var sportsModeInitReminds = ["Cet assistant est utilisé pour configurer une clé USB pour le mode Sports. Sélectionnez le mode de configuration.", "Sélectionnez le format de fichier pour le mode Sports.", "Création de fichier du mode Sports", "La vitesse du lecteur USB est trop lente (< %f Mo/s) pour le mode Sports!", "La clé USB est prête pour le mode Sports. Mais il est recommandé de la changer (à une vitesse > %f Mo/s) pour obtenir de meilleures performances.", "La clé USB est prête pour le mode Sports."];	
var sportsModeExtra = ["Voulez-vous arrêter le mode Sports et changer de chaîne?","Voulez-vous arrêter le mode Sports et changer la source à l'appareil connecté à l'entrée péritel?","Voulez-vous arrêter le mode Sports et changer la source à l'appareil connecté à l'entrée HDMI?","Le mode Sports n'est pas pris en charge sur une chaîne brouillée.","Voulez-vous arrêter le mode Sports et accéder au Guide électronique des programmes (EPG)?","Voulez-vous arrêter le mode Sports et accéder au support?","Voulez-vous arrêter le mode Sport et changer la source d'entrée?","La télé va arrêter le mode Sport en cours. Voulez-vous quitter?"];	
var remoteControlNote = "– La télécommande fournie avec votre appareil peut différer selon le modèle.";	
var textArray = ["Volume","Chaîne","Source","Commutateur/alimentation","Guide","secondes pour s'éteindre"];	
var guideArray = ["VOL-","VOL+","CH-","CH+","Précédent","Suivant"];	
var favChannelListRemind = ["Aucune chaîne préférée SVP, allez à d’autres listes et utilisez la « Touche verte » pour ajouter des chaînes préférées."];	
var proxySetting = ["Paramètres du mandataire","Port"];	
var powerOffShop = ["Nous recommandons d’utiliser le mode boutique, voulez-vous?"];	
var tcastTextPageWords = ["Plein de vidéos, riches applications","Télécommande télé, facile à utiliser","Des très bons contenus, à partager sur un grand écran"];	
var tcastOtherWords = ["Numériser le code QR et télécharger T-Cast","Réseau connecté au téléviseur","Nom de la télé","T-Cast"];	
var hbbtvWords = ["Réglage de HbbTV","HbbTV","Cookies","Témoins de tiers","ID de l'appareil","Suivi"];	
var hbbtvTrackingWords = ["OUI","NON","Peu importe"];
var eStickerTipWords = ["La capacité de stockage est inférieure à 500 Mo, voulez-vous supprimer les vidéos du mode Demo pour libérer de l’espace ?"];
var delEstickerVideoRemid = ["La vidéo a été supprimée avec succès"];

var clockPageWords = ["Local","Beijing","Tokyo","Hongkong","Taipei","Singapour","Paris","Londres","Moscou","New Delhi","Djakarta","New York","Rio",
						"Appuyez sur la touche \"OK\"","Il ne peut pas être ajouté!"];
var smartKeyWords = ["Affichage sans fil","Profite de la musique","Temporisateur de sommeil","Horloge mondiale","Soundbar prêt","WiFi","PVR","Mode sports"];
var recommendWords = ["Recommend"];
var onlyListenRemindWords = ["Entrer le mode Audio uniquement","Appuyez sur n'importe quelle touche sauf la touche de volume pour sortir!"];
var selectSatRemind = "Vous ne pouvez pas sélectionner plus de 20 satellites !";