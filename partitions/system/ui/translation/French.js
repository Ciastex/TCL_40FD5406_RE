var all_country 	= ["Australie","Autriche","Belgique","Bulgarie","Croatie","République Tchèque","Danemark","Finlande","France","Allemagne",
						"Grèce","Hongrie","Italie","Luxembourg","Pays-Bas","Norvège","Pologne","Portugal","Roumanie","Russie",
						"Serbie","Slovénie","Espagne","Suède","Suisse","Royaume-Uni","Nouvelle-Zélande"," "/*Arab*/,"Estonie"," "/*Hebrew*/,
					"Lettonie","Slovaquie","Turquie","Irlande","Japon","Philippines","Thaïlande","Maldives","Uruguay","Pérou",
					"Argentina","Chile","Venezuela","Ecuador","Costa Rica","Paraguay","Bolivia","Belize","Nicaragua","Guatemala",
					"Chine","Taiwan","Brazil","Canada","Mexico","United States","South Korea","Roumanie","Vietnam"/*新添加的，底层结构体中没有*/,"Ukraine"/*新添加的，底层结构体中没有*/,
					"Iran","Irak"," ","Kazakhstan","Ouzbékistan"," ","Kirghizstan","Algérie","Égypte","Tunisie",
					"Tanzanie","Kenya","Pakistan","Indonésie","Koweït","Arabie saoudite","Qatar","Israël","Liban","Bahreïn",
					"Angola","Congo","Inde","Turkménistan","Colombie","Mongolie","Bangladesh","Népal","Sri Lanka","Nouth Korea",
					"Moldavie","Polynesia","EI Salvador"," ","Fidji","Libéria","Jordanie","Myanmar","Ghana","Géorgie",
					"Arménie","Oman","Yémen","Syrie","Palestine","Afghanistan","Maroc","Bénin","IvoryCoast","Nigéria",
					"Soudan","Éthiopie","Zambie"," ","Afrique du Sud","Mozambique","Libye","Albanie","Belarus","Iceland",
					"Lituanie","Maurice","Duba","Émirats arabes unis","Tadjikistan","Bengal","Bosnie-Herzégovine","Cyprus","Kosovo","Macédoine",
					"Malte","Monténégro","Cameroon","Singapour","Malaisie","NewCaledonia","Autres"," "," "," ",
    				"Antigua & Barbuda","St Lucia","Barbados","St Vincent","St Kitts & Nevis","Grenada","Trinidad & Tobago","Guyana","Puerto Rico","Panama",
    				"Dominica","Cuba","Honduras","Haiti","Cambodia","Zimbabwe","Dominican Republic","Bonaire","Somalia","Azerbaïdjan",
    				"Uganda","Rwanda","Guinea","Burundi","Abkhazie","Andorra","Anguilla","Antarctica","American Samoa","Aland Island",
    				"Burkina-faso","Bermuda","Brunei","Caribbean Netherlands","Saint Barthélemy","Bahamas","Bhutan","Bouvet Island","Botswana","Cocos (Keeling) Islands",
					"Central African Republic","Cape Verde","Djibouti","Eritrea","Western Sahara","Falkland Islands","Federated States of Micronesia","Faroe Islands","Gabon","Cook Islands",
    				"Gibraltar","Greenland","French Guiana","Guadeloupe","Equatorial Guinea","Guam","Guinea-Bissau","Heard Island and McDonald Islands","Isle of Man","British Indian Ocean Territory",
				/*20*/"Jersey","Kiribati","Comoros","Cayman Islands","Liechtenstein","Lesotho","Monaco","Saint Barthélemy","Madagascar","Mali",
    				"Macao","Martinique","Mauritania","Montserrat","Malawi","Namibia","Niger","Norfolk Island","Nauru","Papua New Guinea",
    				"Pitcairn Islands","Palau","Reunion Island","Solomon Islands","Seychelles","The Svalbard archipelago","Sierra Leone","San Marino","Senegal","South Sudan",
    				"Sao Tome & Principe","Swaziland","Turks & Caicos Islands","Togo","Chad","Tokelau","Timor-Leste (East Timor)","Tonga","Tuvalu","Vatican City State",
    				"British Virgin Islands","United States Virgin Islands","Wallis and Futuna","Samoa","Mayotte","Democratic Republic of the Congo","Guernsey","Gambia","Northern Mariana Islands","French Southern Territories",
				/*25*/"Niue","United States Minor Outlying Islands","Others"];

var all_language = ["Tchèque ","Chamic","Danois","Dargwa","Landdayak","Allemand","Anglais","Espagnol ","Grec","Français",
"Croate","Sorbianupper","Italien","Hongrois","Hollandais","Norvégien","Polonais","Portugais","Russe","Roumain",
"Slovène","Serbe","Finlandais","Suédois","Bulgare","Slovaque","Chinese","Chuukese","Gaélique ","Gbaya",
"Gallois ","Arabe","Irsk","Letton","Hébreu","Turc","Estonien","Néerlandais"/*Netherlands*/,"Coréen","Kosraean",
"Hindi","Hittite","Hmong","Mandarin","Cantonais","Maori","Original Audio"/*Qaa*/,"Non défini"/*Undetermined*/,"Ad","Inconnu",
"Non défini","Abkhazian","Achinese","Acoli","Adangme","Adyghe","Afar","Afrihili","Afrikaans","Afro",
"Ainu","Akan","Akkadian","Albanais","Aleut","Algonquian","Altaisouthern","Altaic","Amharic","Apache",
"Aramaic","Aragonese","Arapaho","Araucanian","Arawak","Armenian","Artificial","Assamese","Asturian","Athapascan",
"Austronesian","Australian","Avaric","Avestan","Awadhi","Aymara","azerbaïdjanais","Aztec","Balinese","Baltic",
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
var chScanOptions	= ["Pays / Région","Mode réception","Recherche automatique","Mise à jour automatique","Recherche manuelle analogique",
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
						"Paramètres avancés","Réinitialisation magasin","Témoin LED","Mise en marche instantanée","Mode d’achat automatique","Area","Mode démonstration"];
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
						"Paramètres avancés","Réinitialiser image","Gradation micro","micro atténuation"];
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
    					"Désactivez le mode sports pour plus d’options.",
    					"Améliore le contraste environnemental",
    					"Un mode spécial pour profiter du sport",
    					"Profitez de plus de fonctions CEC."];
var initialTitle	= ["Bienvenue","Réglage initial"];
var initialPrompt	= ["Effectuez vos Réglages Initiaux maintenant, un Monde d'Expériences Passionnantes vous attend!",
						"Veuillez choisir votre langue:",
						"Sélectionnez votre pays / région :",
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
var initialHotkeys	= ["Retour","Choisir ","Suivant","J'accepte"];
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
var screenSavers	= ["Aucune chaîne, veuillez appuyer sur la touche OK et balayer !",
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
var channelNumberOverPromt = ["The number of search programs has exceeded,you can delete some programs and then retry!"];
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
var lcnConfflict	= "Ce programme a un problème de réception.";
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
var smartTVOptions		= ["Portail Smart TV","HbbTV","Partager et Regarder","Affichage Wi-Fi","Termes & conditions",
    "Réseau en veille","Réinitialiser smart TV","Cookie policy","Politique de confidentialité","Suppression de données"];
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
var eStickerTipWords = ["La capacité de stockage est inférieure à 400 Mo, voulez-vous supprimer les vidéos du mode Demo pour libérer de l’espace ?"];
var delEstickerVideoRemid = ["La vidéo a été supprimée avec succès"];

var clockPageWords = ["Local","Beijing","Tokyo","Hongkong","Taipei","Singapour","Paris","Londres","Moscou","New Delhi","Djakarta","New York","Rio",
						"Appuyez sur la touche \"OK\"","Il ne peut pas être ajouté!"];
var smartKeyWords = ["Affichage sans fil","Profite de la musique","Temporisateur de sommeil","Horloge mondiale","Soundbar prêt","WiFi","PVR","Mode sports"];
var recommendWords = ["Recommend"];
var onlyListenRemindWords = ["Entrer le mode Audio uniquement","Appuyez sur n'importe quelle touche sauf la touche de volume pour sortir!"];
var selectSatRemind = "Vous ne pouvez pas sélectionner plus de 20 satellites !";
var emailWord = "E-mail:";
var cookiePolicyTitle = "Charte d'Utilisation des Cookies - Services Smart TV en ligne";
var cookiePolicyConditions = ["La Société respecte votre vie privée lorsque vous utilisez les Smart TV fabriquées et les Services fournis par la Société. Les cookies sont utilisés par de nombreux sites web et autres services Internet et votre Smart TV acceptera, conservera et transmettra des cookies pour garantir que ces sites web et services fonctionnent correctement. La Société utilise également les cookies lorsqu'elle vous fournit des Services. Dans la présente Charte d'Utilisation des Cookies, la Société décrit les cookies qui sont placés sur votre Smart TV et la façon dont vous pouvez les gérer.\nVeuillez noter que toutes les données personnelles que la Société collecte et/ou traite par le biais ou avec l'aide des cookies sont régies par la Charte de Protection des Données à Caractère Personnel et vous devez lire la Charte d'Utilisation des Cookies en parallèle de ladite Charte de Protection des Données à Caractère Personnel.\n1. Qu’est-ce qu’un cookie ?\nLes cookies sont de petits fichiers textes qui peuvent être placés sur votre Smart TV. Lorsqu'il est accédé à un site web ou au service bouton rouge d'une Chaine de télévision, le site web ou le service peut placer un cookie sur la Smart TV. Lors d'un accès ultérieur, le cookie qui a été placé sur votre Smart TV enverra des informations à la partie ayant placé ledit cookie. Les cookies sont extrêmement communs et utilisés sur de nombreux sites web et services. Chaque cookie contiendra généralement le nom du domaine à partir duquel le cookie est envoyé, la « durée de vie » du cookie et une valeur (le plus souvent, un numéro unique). Pour plus d'explications sur les cookies et la façon dont ils fonctionnent, visitez le site www.allaboutcookies.org.\nIl existe deux catégories de cookies : les cookies fonctionnels et les cookies non-fonctionnels. Les cookies fonctionnels sont des cookies qui sont strictement nécessaires pour vous fournir les services Smart TV et qui permettent aux sites web et autres services de fournir le bon contenu sur la Smart TV. Les cookies non-fonctionnels sont tous les autres cookies.\nLa présente Charte d'Utilisation des Cookies concerne les cookies que nous plaçons, ainsi que les cookies publicitaires qui peuvent être placés par des tiers par le biais de nos services sur votre Smart TV. Cette Charte d'Utilisation des Cookies ne concerne pas les cookies qui peuvent être placés lorsque vous utilisez les services Smart TV pour accéder à des sites web, services ou applications tiers. Pour ces cookies, nous vous invitons à consulter la Charte d'utilisation des cookies du tiers concerné. Toutefois, la présente Charte d'Utilisation des Cookies décrit la façon dont vous pouvez supprimer ces cookies (voir article 4 ci-dessous).\n2. Quels cookies non-fonctionnels utilisons-nous ?\nPublicité : Des publicités et annonces peuvent être diffusées sur votre Smart TV lorsque vous utilisez les services Smart TV. Ces publicités peuvent être diffusées par nous-mêmes ou par des tiers via notre serveur publicitaire ou en coordination avec ce dernier, qui joue un rôle de coordination centrale concernant la diffusion de ces publicités. Notre serveur publicitaire ou un serveur publicitaire tiers placera un cookie sur votre Smart TV. Par le biais de ce cookie, le serveur publicitaire déterminera si une publicité a été diffusée sur votre Smart TV ou si une personne utilisant votre Smart TV a cliqué sur une publicité. Nous utilisons les informations sauvegardées dans ce cookie publicitaire pour nous souvenir des publicités qui ont été diffusées sur votre Smart TV afin de nous assurer que les mêmes publicités ne soient pas diffusées trop souvent sur une Smart TV donnée et d'être en mesure de régler nos accords commerciaux avec nos partenaires publicitaires. Nous n'utiliserons pas ces informations pour diffuser des publicités ciblées. En outre, des tiers peuvent utiliser notre système publicitaire pour diffuser des publicités sur votre Smart TV et y placer des cookies lors de la diffusion desdites publicités. \nCes cookies contiennent notamment des informations à propos des publicités diffusées, des informations sur l'application ou le domaine sur laquelle/lequel les publicités ont été diffusées et votre adresse IP. Cela permet de se souvenir de la fréquence de diffusion d'une publicité donnée et d'empêcher la diffusion trop fréquente d'une même publicité. Les annonceurs tiers externes qui peuvent diffuser des publicités peuvent également utiliser des cookies pour suivre votre activité sur différents sites web et fournir des publicités qui correspondent à vos préférences personnelles.\n3. Sites web de tiers\nLorsque vous visitez les sites web ou services de tiers via les services Smart TV de votre Smart TV, il est possible que ces sites web ou services placent des cookies sur votre Smart TV et que ces sites web suivent et conservent vos interactions sur ces sites web. Nous ne demandons ni n'encourageons ces activités et nous n'utiliserons pas ces informations. Veuillez consulter les chartes d'utilisation des cookies et chartes de protection des données à caractère personnel respectives de ces sites web et services pour obtenir plus d'informations sur l'utilisation des cookies par ces tiers.\n4. Suppression et Opt-out des cookies\nL'interface utilisateur de votre Smart TV vous permet de retirer votre consentement (\"opt-out\") à l'utilisation de tout type de cookie ou traceur, ainsi que de supprimer de la Smart TV tous les cookies et autres éléments stockés par votre navigateur local. Il est vivement recommandé de supprimer tous les cookies et les paramètres stockés localement avant de vendre ou de donner votre Smart TV.\n5. Contactez-nous\nSi vous avez des questions ou des commentaires à propos de notre Charte d'Utilisation des Cookies ou la façon dont nous utilisons les cookies, vous pouvez nous envoyer un courrier électronique à FRsupport@tcl.com.\nVersion : 1.0\n"];
var privacyPolicyTitle = "Charte de Protection des Données à Caractère Personnel - Services Smart TV en ligne";
var privacyPolicyConditions = ["Nous respectons votre vie privée lorsqu'elle traite vos données à caractère personnel. La présente Charte de Protection des Données à Caractère Personnel décrit l'entité responsable de la collecte, du traitement et de l'utilisation des données personnelles que nous collectons auprès de vous dans le cadre de l'utilisation de nos services Smart TV (ci-après les « Services »), les catégories de données personnelles que nous collectons sur vous, l'utilisation que nous en faisons et vos droits concernant notre utilisation des données personnelles.\n1. Le responsable de traitement\nLes données personnelles collectées auprès de vous lorsque vous utilisez les Services sont collectées, traitées et utilisées par Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Province de Guangdong Province, Chine (ci-après « la Société »). Veuillez noter, cependant, que nous ne sommes pas responsables de toutes les activités de traitement décrites ci-dessous. Nous avons néanmoins inclus une description des différentes activités dans notre Charte de Protection des Données à Caractère Personnel dans la mesure où ce traitement est lié à votre utilisation de la Smart TV.\n2. Consentement au traitement des données\nCertaines activités de collecte, de traitement et/ou d'utilisation de vos données personnelles nécessitent votre consentement. \nSi vous avez accepté l'utilisation de vos données personnelles aux fins d'améliorer les Services, votre consentement était formulé comme suit :\n« J'accepte la collecte, le traitement et l'utilisation de l'heure de lancement de mon appareil, de la liste de chaînes DTV, de la liste de chaînes préférées, de l'heure de visite et des chaînes regardées à des fins d'analyse des habitudes des utilisateurs en vue d'améliorer les Services et/ou d’analyser le nombre d'utilisateurs en ligne de la Société par jour / mois / année et le partage de ces informations avec les chaines de télévision. »\nSi vous avez accepté l'utilisation de vos données personnelles afin de recevoir des publicités personnalisées en fonction de vos intérêts, votre consentement était formulé comme suit :\n« J'accepte la collecte, le traitement et l'utilisation de mon type de client et de mon pays afin de recevoir des publicités personnalisées en fonction de mes intérêts. »\nLe consentement est facultatif ; si vous refusez, vous pourrez continuer à utiliser les Services. Cependant, vous pourrez recevoir des publicités et d'autres contenus non personnalisés selon vos préférences. Indépendamment de votre consentement, la Société se réserve le droit de collecter, de traiter et/ou d'utiliser les données ci-dessus dans les limites prévues par la loi et tel que décrit dans la présente Charte de Protection des Données à Caractère Personnel.\nVous pouvez à tout moment et pour le futur revenir sur votre consentement concernant toute activité telle que décrite ci-dessus. Vous pouvez vous opposer à l'utilisation de vos données personnelles à des fins marketing, d'études de marché ou d'opinion et à la personnalisation des Services en fonction de vos besoins. Pour revenir sur votre consentement et/ou vous opposer, vous devez modifier les paramètres de confidentialité de votre Smart TV en conséquence.\n\n3. Données personnelles collectées\nIndépendamment de votre consentement, la Société collecte, traite, conserve et utilise les catégories de données suivantes :\nIdentifiant de l'Appareil : Votre Smart TV conserve un numéro unique fixe qui nous permet d'identifier et d'authentifier la Smart TV lorsque vous utilisez les Services. Il s'agit de l'Identifiant de l'Appareil. L'Identifiant de l'Appareil sera fourni à notre partenaire de services qui vous fournira les Services. Nous fournissons également l'Identifiant de l'Appareil à certains partenaires de contenu sélectionnés à des fins d'authentification. Ces partenaires de contenu utilisent l'Identifiant de l'Appareil pour authentifier votre Smart TV à des fins d'accès aux services qu'ils proposent.\nAdresse IP et Adresse MAC : Une adresse IP sera attribuée à votre Smart TV lorsqu'elle accèdera à Internet. Cette adresse IP nous sera transmise et nous la traiterons à chaque demande d'informations ou de données de la Smart TV auprès des Services. Si votre Smart TV est reliée à un routeur (ex : un réseau personnel local ou un WLAN local), nous pouvons collecter et traiter l'adresse IP de ce routeur. L'adresse MAC est un numéro unique attribué à chaque interface réseau de votre Smart TV. Nous collecterons et traiterons également cette adresse MAC lorsque la Smart TV demandera des informations ou des données auprès des Services.\nDonnées relatives aux demandes de Services : Chaque fois que vous connectez votre Smart TV à Internet et que vous l'allumez, elle sera automatiquement connectée aux Services, qui sont gérés par notre partenaire de services. Votre Smart TV sera alors authentifiée et autorisée à accéder aux Services. A des fins d'authentification, les Services conservent un ou plusieurs identifiants numériques uniques concernant votre Smart TV. Lorsqu'elle sera connectée au Service, la Smart TV transmettra l'adresse IP qui lui a été attribuée ainsi que des informations spécifiques sur l'appareil (modèle de Smart TV, version du logiciel) afin de vérifier si des mises à jour logicielles sont disponibles.\nParamètres des Services : Dans le cadre des fonctionnalités normales des Services, vous pouvez modifier manuellement l'ordre dans lequel les applications apparaissent dans les Services. Notre partenaire de services conservera cet ordre et les autres préférences que vous pouvez définir lorsque vous utilisez les Services. Ces informations seront reliées à l'Identifiant de l'Appareil.\nInformations spécifiques concernant l'Appareil : La Smart TV conserve plusieurs informations sur elle-même et sa configuration. Parmi ces informations, il y a le type de Smart TV, la version du système d'exploitation de la Smart TV, sa résolution, l'identifiant projet (i.e. les informations concernant les fichiers de configuration), l'agent utilisateur, le nom du navigateur, la version du navigateur ainsi que la langue et le pays configurés dans la Smart TV. Nous utiliserons ces informations et les communiquerons à notre partenaire de services et aux partenaires de contenu.\nPublicité : Les Services peuvent diffuser des publicités. Ces publicités sont diffusées par nous ou par des tiers qui utilisent les publicités que nous leur communiquons. Toutes les publicités sont diffusées au moyen de ou via notre serveur publicitaire, qui exerce un rôle de coordination pour la diffusion des publicités. Notre serveur publicitaire ou le serveur publicitaire tiers peut placer un cookie sur la Smart TV. Veuillez consulter notre Charte d'Utilisation des Cookies pour plus d'information à propos de ces cookies.\nTrafic entre le Service et le partenaire de contenu : Lorsque vous utiliserez les Services, votre Smart TV demandera des données auprès des Services via Internet. Dans le cadre de ces demandes, votre adresse IP, telle que décrite ci-dessus, ainsi que la langue et le pays qui ont été configurés dans votre Smart TV seront transmis à notre partenaire de services. Notre partenaire de services traitera les données en question conformément à sa propre charte de protection des données à caractère personnel.\nUtilisation d'un second écran : Si vous utilisez notre application second écran, nous collecterons et traiterons sur nos serveurs les commandes que vous activez sur l'application ainsi que les paramètres de pays et de langue, la liste de chaînes DTV, la liste des chaînes préférées, la liste des programmes, l'Identifiant de l'Appareil, la chaîne en cours, la version du protocole et l'adresse IP de votre Smart TV. Nos serveurs contrôleront alors votre Smart TV selon vos instructions dans l'application second écran.\nHbbTV - « Bouton Rouge » : Les chaines de télévision (ci-après les « Chaines ») peuvent envoyer des informations supplémentaires avec leur signal de télévision. Si la Smart TV reçoit des instructions spécifiques via ces informations supplémentaires, si elle est connectée à Internet, et avec votre consentement, la Smart TV téléchargera une image ou une petite page du site web de la Chaine et l'affichera en vous demandant d'appuyer sur le « Bouton Rouge » de votre télécommande si vous souhaitez utiliser des services supplémentaires proposés par la Chaine. Cela se produit à chaque fois que vous zappez. Lors du téléchargement de l'image à partir du site web de la Chaine, la Smart TV transmettra certaines données personnelles, i.e. la liste des chaînes DTV, la chaîne actuelle, le tableau d'information des événements, l'heure de la télévision, l'adresse IP de votre Smart TV et les cookies stockés sur la Smart TV (le cas échéant). La Chaine est responsable de la collecte, du traitement et/ou de l'utilisation de ces données. En outre, si vous utilisez des services supplémentaires proposés par une Chaine par le biais du Bouton Rouge, la Chaine pourra collecter d'autres données personnelles vous concernant (ex : les vidéos à la demande que vous regardez, les informations que vous lisez, etc.).\n4. Finalités du traitement et/ou de l'utilisation de vos données personnelles\nNous traitons les données collectées aux fins suivantes :\n• Fourniture des Services : Nous utilisons l'adresse IP et l'adresse MAC, l'Identifiant de l'Appareil, la version du système d'exploitation de la Smart TV, le type de client de votre Smart TV et sa résolution, l'identifiant projet (i.e. les informations concernant les fichiers de configuration), votre liste de chaînes DTV, les chaînes regardées, le fuseau horaire, les paramètres de pays et de langue pour fournir à votre Smart TV un accès aux Services et aux services fournis par les partenaires de contenu. Parmi les finalités, il y a (notamment) l'authentification, la fourniture de services selon la localisation (ex : prévisions météorologiques), la gestion des abus, la gestion des incidents de sécurité, le contrôle de la disponibilité des Services et la fourniture de services de sauvegarde de vos préférences utilisateur.\n• Authentification : Nous utilisons l'Identifiant de l'Appareil et l'adresse MAC à des fins d'authentification.\n• Mises à jour des logiciels : Chaque fois que votre Smart TV est allumée, elle nous fournit l'adresse IP, l'Identifiant de l'Appareil, la version du logiciel, le type de client de votre Smart TV, l'identifiant projet (i.e. les fichiers de configuration), l'identifiant utilisateur, le numéro de série pour vous proposer et vous fournir les mises à jour logicielles appropriées. \n• Amélioration des Services : Nous utilisons les données d'utilisation agrégées et anonymisées (i.e. des données à propos de votre interaction avec les Services) pour améliorer l'expérience utilisateur des Services.\n• Diffusion de publicités : Nous utilisons les informations des cookies publicitaires pour permettre au système d'enregistrer les publicités qui ont été diffusées sur votre Smart TV afin de nous assurer que vous ne recevez pas trop de publicités similaires, et d'être en mesure de régler nos accords commerciaux avec nos partenaires publicitaires. Les publicitaires externes qui diffusent des publicités sur les Services ou les sites web des partenaires de contenu après la coordination par notre serveur publicitaire peuvent également utiliser des cookies pour vous suivre sur différents sites web et vous présenter des publicités liées à vos préférences personnelles, avec votre consentement. Veuillez consulter notre Charte d'Utilisation des Cookies pour plus d'information à propos de ces cookies.\n• Optimiser les publicités : Nous utilisons les données relatives aux publicités visualisées et aux clics sur les publicités pour optimiser l'expérience publicitaire des consommateurs sur le Service.\n• Remises : Nous fournissons l'Identifiant de l'Appareil à des partenaires de contenu sélectionnés pour leur permettre de déterminer dans quelle mesure ils peuvent vous donner un accès gratuit aux titres de Vidéo à la Demande de leur collection.\n• Application de la loi : Il peut nous être demandé de fournir des données aux forces de l'ordre ou tribunaux compétents. Dans ce cas, nous ne le ferons que dans le cadre d'un acte légal contraignant, tel qu'un mandat de perquisition ou une décision judiciaire, nous imposant de coopérer avec les autorités concernées.\nIl est possible d'utiliser les Services avec des pseudonymes, sauf si des services spécifiques vous imposent de communiquer votre nom et/ou votre adresse électronique.\n5. Catégories de destinataires\nLa Société partage vos données personnelles collectées pendant votre utilisation des Services uniquement avec les tiers suivants :\n• les prestataires de services Smart TV tiers si vous demandez de tels services (ex : si vous lancez l'application Netflix sur votre Smart TV, nous pouvons partager votre adresse IP, votre adresse MAC, la version du logiciel et le nom du modèle du téléviseur avec Netflix) ;\n• les partenaires de contenu tiers si vous demandez certains contenus fournis par ces partenaires (ex : pour vous fournir le service GoLive IP TV, nous pouvons fournir votre type de client TV, votre adresse IP et vos paramètres de langue à l'entité juridique qui fournit le service GoLive) ;\n• si vous avez accepté le partage de données personnelles spécifiques avec les tiers ci-dessus, la Société partagera vos données personnelles avec ces tiers ;\n• les prestataires de services d'externalisation tels que les sous-traitants qui assistent la Société dans la fourniture des Services.\nLa Société partage vos données personnelles avec d'autres tiers uniquement si la Société est contrainte de le faire en vertu de ses obligations légales (ex : aux tribunaux ou aux autorités judiciaires), si vous acceptez le partage en question ou si le partage est licite en vertu de la loi applicable.\n6. Pays dans lesquels vos données seront traitées\nLa Société et/ou certains destinataires de vos données personnelles énumérés ci-dessus pourront se situer en dehors de l'Espace Economique Européen (i.e. dans les pays suivants : République Populaire de Chine, Etats-Unis d'Amérique). Par conséquent, vos données personnelles peuvent être traitées dans des pays qui ne sont pas reconnus comme offrant un niveau de protection adéquat des données personnelles conformément à la Directive 95/46/CE du Parlement Européen et du Conseil de l’Europe du 24 octobre 1995 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel et à la libre circulation de ces données.\n7. Vos droits\nVous pouvez contacter la Société pour recevoir des informations à propos de vos données personnelles traitées par la Société et/ou pour exercer vos droits en termes d'accès, de rectification, de suppression et de blocage de vos données personnelles et/ou pour vous opposer au traitement de vos données personnelles pour des raisons légitimes.\n8. Modifications de la Charte de Protection des Données à Caractère Personnel\nPour améliorer nos Services, nous pouvons être amenés à modifier la présente Charte de Protection des Données à Caractère Personnel, par ex. par la mise en place de nouvelles technologies ou le lancement de nouveaux services. Nous vous préviendrons [x] jours avant la mise en œuvre de tout complément ou modification de la présente Charte de Protection des Données à Caractère Personnel.\n9. Coordonnées\nSi vous avez des questions à propos de la Charte de Protection des Données à Caractère Personnel ou si vous avez une réclamation à propos de la façon dont nous traitons vos données personnelles, veuillez nous contacter aux coordonnées suivantes :\nAdresse électronique : FRsupport@tcl.com\nVersion : 1.0\n"];
var privacyPolicyTerms = [
    "Activer le service Smart TV.",
    "Je consens à la collecte, au traitement et à l'utilisation de l'heure de démarrage de mon appareil, la liste des chaînes TVN, la liste des chaînes favorites, du temps de visite et des chaînes regardées dans le but d'analyser les habitudes des utilisateurs afin de pouvoir améliorer les services et/ou avoir une idée du nombre d'utilisateurs TCL en ligne par jour/mois/année, et au partage de ces informations avec les stations télé.",
    "Activer le service de recommandations.",
    "Activer l'application de deuxième écran pour les appareils mobiles.",
    "Activer les mises à jour automatiques du logiciel.",
    "Activer le service FreeviewPlay."
];
var privacyPolicyTips = [
    "Tous les services Smart TV seront désactivés.",
    "Le service HbbTV fourni par les chaînes télé lorsque le tuner intégré utilisé sera désactivé.",
    "Le service de recommandations de contenus et de programmes TV sera désactivé.",
    "L'application de deuxième écran sera désactivée.",
    "Le téléviseur ne recherche pas automatiquement les mises à jour du logiciel et les nouvelles fonctionnalités.",
    "Le contenu FreeviewPlay sera désactivé."
];
var privacyPolicyRemind = "Veuillez cocher la case correspondante dans Paramètres.";
var set = "Régler";
var copyShopDemoTips = ["Connecté à l’USB, voulez-vous copier la vidéo sur le flash ?","Copier la vidéo sur le flash","La vidéo a été copiée avec succès !","Erreur lors de la copie de la vidéo !"];
var activateTVWords = ["Activez votre téléviseur","Veuillez entrer le code de vérification.","Profitez de plus de services une fois votre téléviseur activé.","Numérisez le code QR pour obtenir le code de vérification.","Vous pouvez aussi obtenir le code de vérification comme suit :","Appelez le 1800588880,et fournir le numéro de série pour avoir le code de vérification.","Espace client","Veuillez remplir les renseignements, vous recevrez votre garantie de service."];
var dataDeletionWords = ["Supprimez vos données du service Smart TV dans les serveurs principaux.","Remarque : Les données relatives à votre utilisateur smart TV seront supprimées dans un mois à partir de la sélection de cette option. La suppression n’affecte pas vos données locales stockées sur votre téléviseur.","N’envoyez plus les données au serveur Smart TV.","Remarque :  Vos données relatives à l’utilisation des services Smart TV ne seront plus transférées au serveur à partir du moment où vous sélectionnez cette option. Votre téléviseur ne recevra plus des services recommandés.","Pour plus d’informations, rendez-vous sur le site Web www.tcl.eu"];
var miracastWords = ["Connexion sans fil","Afficher le téléphone Android sur le téléviseur","Cliquer pour connecter","Cette fonction est uniquement disponible sur les téléphones Android"];
var miracastTips = ["Étapes de connexion","Ouvrir les réglages système","Plus de méthodes de connexion \n / Autres connexions sans fil","Choisir l’écran sans fil","Cliquer pour connecter \n en attente de découverte"];
var termsAndConditions = ["\nLe contenu et les services (ci-après, collectivement, l'« Application Sous Licence ») mis à votre disposition par le biais de ce téléviseur (ci-après l'« Appareil ») ne vous sont pas vendus mais concédés sous licence uniquement pour l'utilisation prévue aux présentes conditions générales. Les fournisseurs de l'Application sous Licence (ci-après, individuellement, un « Fournisseur d'Applications ») se réservent tous les droits qui ne vous sont pas expressément concédés.\n\n1.Champ d’application de la licence\n\nLa licence qui vous est concédée pour une Application sous Licence par le Fournisseur d'Applications concerné se limite à une licence incessible permettant d'utiliser l'Application Sous Licence sur l'Appareil que vous détenez ou que vous contrôlez. Vous ne pouvez ni distribuer ni diffuser l’Application sous Licence sur un réseau où elle pourrait être utilisée simultanément par de multiples appareils. Vous vous interdisez de louer, de laisser en crédit-bail, de prêter, de vendre, de redistribuer l'Application sous Licence ou d’en concéder une sous-licence. \n\nToutes les Applications Sous Licence, ainsi que le contenu qui y figure, accessibles par le biais de l'Appareil appartiennent au Fournisseur d'Applications et sont protégés par les lois applicables sur la propriété intellectuelle. Sauf disposition contraire de la loi applicable, vous ne pouvez pas modifier, copier, décompiler, effectuer de l’ingénierie inverse, désassembler, republier, télécharger, poster, transmettre, traduire, essayer de dériver le code source, créer des œuvres dérivées ni exploiter d'autre façon toute Application Sous Licence ou toute mise à jour ou partie de celle-ci. Si vous manquez à cette restriction, vous pourrez faire l'objet de poursuites et de demandes en dommages et intérêts. Les dispositions de la licence régiront toutes mises à niveau fournies par le Fournisseur d'Applications remplaçant et/ou complétant l'Application sous Licence d'origine, à moins que cette mise à niveau ne soit accompagnée d'une licence distincte. Dans ce cas, les dispositions de cette licence prévaudront. Vous serez seul(e) responsable de l'ensemble des coûts (le cas échéant) relatifs à la mise à niveau de l'Application sous Licence.\n\n2.Documents de tiers\n\nL'Application sous Licence peut donner accès à des services et sites web du Fournisseur d'Applications et de tiers (ci-après, collectivement les « Services »). En utilisant les Services, vous pouvez trouver du contenu pouvant être considéré comme choquant, indécent ou répréhensible, contenu pouvant ou non être identifié comme contenant des éléments explicites ; de plus, les résultats de toute recherche ou saisie d'une URL particulière peuvent automatiquement et involontairement générer des liens ou des références à un contenu répréhensible. Néanmoins, le fabricant de l'Appareil (ci-après le « Fabricant ») et le Fournisseur d'Applications excluent toute responsabilité envers vous concernant un contenu pouvant être considéré comme choquant, indécent ou répréhensible. \n\nLe Fabricant ne sera pas tenu d'examiner ni d'évaluer le contenu, l'exactitude, l’exhaustivité, le caractère opportun, la validité, la conformité aux droits d'auteur (copyrights), la légalité, la qualité ni tout autre aspect de ces Services. Le Fabricant n’accorde aucune garantie et exclut toute responsabilité à votre égard ou à l'égard d'une autre personne en ce qui concerne les Services. \n\nLes Services peuvent comprendre du contenu, des informations et des documents exclusifs (ci-après les « Documents Tiers ») qui sont protégés par les lois applicables sur la propriété intellectuelle et d'autres lois et vous vous interdisez d'utiliser ces Documents Tiers de quelque manière que ce soit, en dehors de l'utilisation autorisée des Services. Sauf si la loi applicable l'autorise, vous vous interdisez de reproduire, de modifier, de louer, de laisser en crédit-bail, de prêter, de vendre, de distribuer les Documents Tiers ou d'en créer des œuvres dérivées de quelque manière que ce soit, et vous vous interdisez d'exploiter les Services d'une quelconque manière non autorisée. Vous vous interdisez d'utiliser les Services de manière à harceler, abuser, traquer, menacer, diffamer ou enfreindre ou violer d'une autre façon les droits de tiers, et le Fabricant exclut toute responsabilité si vous utilisez les Services de cette façon, et toute responsabilité à la suite de messages ou de communications menaçants, diffamatoires, choquants, illégaux ou présentant un caractère de harcèlement que vous pourriez recevoir en conséquence de l'utilisation des Services. \n\n3.Exclusion de garantie\n\nToutes les Applications Sous Licence et tous les Services sont fournis « en l'état » et « selon les disponibilités », sans garantie expresse ou implicite d'aucune sorte. Le Fabricant exclut expressément toutes les garanties et conditions concernant les Applications Sous Licence et les Services, expresses ou implicites, y compris, notamment, les garanties de qualité marchande, de qualité satisfaisante, de convenance à un usage particulier, d’exactitude, de jouissance paisible et de non contrefaçon des droits des tiers. Le Fabricant ne garantit pas l'exactitude, la validité, l'opportunité, la légalité ni l'exhaustivité de toute Application Sous Licence ou de tout Service fourni(e) par le biais de l'Appareil et il ne garantit pas que l'Appareil, les Applications Sous Licence ou les Services répondront à vos besoins ni que les Applications Sous licence ou les Services fonctionneront sans interruption ou seront exempts d'erreur, ni que les défauts de l'Application Sous Licence ou des Services seront corrigés. Si l’Application Sous Licence ou les Services s’avèrent défectueux, vous assumerez tous les frais d’entretien, de réparation ou de correction nécessaire.\n\nLes Applications Sous Licence et les Services peuvent être modifiés, suspendus, supprimés, résiliés ou interrompus ou leur accès peut être désactivé à tout moment, sans préavis. Ainsi, le Fabricant ne fait aucune déclaration ni aucune garantie selon laquelle un contenu ou un service inclus dans les Applications Sous Licence et les Services restera disponible pour une période donnée. Ce contenu et ces services sont transmis par des tiers au moyen de réseaux et de systèmes de transmission sur lesquels le Fabricant n'exerce aucun contrôle. Nonobstant le caractère général de ce qui précède, le Fabricant exclut expressément toute responsabilité en cas de changement, d'interruption, de désactivation, de suppression ou de suspension de tout contenu ou service mis à disposition par le biais de l'Appareil. Le Fournisseur d'Applications et les autres prestataires de Services se réservent le droit de modifier, suspendre, supprimer ou désactiver l'accès à une Application Sous Licence ou aux Services à tout moment et sans préavis. Le Fabricant peut également imposer des limites à l'utilisation ou à l'accès à certaines Applications Sous Licence ou certains Services, dans toutes les situations, sans préavis et sans engager sa responsabilité.\n\nLe Fabricant ne fournit pas de service client pour les Applications Sous Licence et les Services. Toute question ou demande de service en lien avec les Applications Sous Licence et les Services doit être posée / faite directement auprès du prestataire concerné.\n\n4.Collecte et utilisation des informations\n\nLe Fabricant, les Fournisseurs d'Applications et les prestataires de Services peuvent collecter et utiliser les données techniques et toute information associée, y compris, notamment, les informations techniques concernant l'Appareil, le système et le logiciel d'application, ainsi que les périphériques, afin de faciliter la fourniture de mises à jour de logiciels, de services d'assistance relative au produit ainsi que d'autres services (le cas échéant) se rapportant à l'Appareil et à l'Application sous Licence. Le Fabricant, les Fournisseurs d'Applications et les prestataires de Services peuvent utiliser ces informations aussi longtemps qu'elles sont sous une forme ne permettant pas de vous identifier personnellement, afin d'améliorer ses produits ou de vous fournir des services ou des technologies. Pour plus d'information sur la collecte et l'utilisation des informations, veuillez consulter notre charte de protection des données à caractère personnel http://www.tcl.eu/en/. \n\n5.Indisponibilité de certaines fonctionnalités\n\nEn raison de restrictions imposées par le Fournisseur d'Applications, certaines fonctionnalités, applications et certains services peuvent ne pas être disponibles sur l'Appareil (y compris sur ses périphériques) ni sur tous les territoires. Certaines fonctionnalités de l'Appareil peuvent également nécessiter des appareils périphériques vendus séparément ou des frais d'adhésion supplémentaires.\n\n6.LIMITATION DE RESPONSABILITE\n\nDans la mesure où la loi applicable ne l'interdit pas, le Fabricant ne sera en aucune circonstance responsable, y compris en cas de négligence, qu'il s'agisse de responsabilité contractuelle ou délictuelle, des dommages directs, indirects, incidents, spéciaux ou consécutifs, des frais d'avocat, des dépenses ou de tous autres dommages résultant de ou liés à toute information contenue dans l'Appareil, une Application Sous Licence ou un Service ou en conséquence de l'utilisation de ceux-ci par vous ou un tiers, même s'il a été informé de la possibilité de tels dommages. \n\nLe Fabricant ne sera responsable que des actes volontaires et les négligences graves."];
var privacyNotice = ["\n\nNous respectons votre vie privée lorsque nous traitons vos données à caractère personnel. La présente Note d'Information sur la Protection des Données à Caractère Personnel décrit l'entité responsable du traitement des données à caractère personnel que nous collectons auprès de vous dans le cadre de l'utilisation de nos services Smart TV (ci-après les « Services »), les catégories de données à caractère personnel que nous collectons sur vous, l'utilisation que nous en faisons et vos droits eu égard à notre utilisation des données à caractère personnel. \n\n1.	Responsable de traitement et représentant dans l'Union Européenne\n\nLes données à caractère personnel collectées auprès de vous lorsque vous utilisez les Services sont collectées, traitées et utilisées par Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Province de Guangdong, Chine (ci-après la « Société »). Nos coordonnées ainsi que celles de notre représentant dans l'Union Européenne sont indiquées à l'Article 12 ci-dessous. Veuillez noter, cependant, que nous ne sommes pas responsables de toutes les activités de traitement décrites ci-dessous. Nous avons néanmoins inclus une description des différentes activités dans notre Note d'Information sur la Protection des Données à Caractère Personnel dans la mesure où ce traitement est lié à votre utilisation de la Smart TV.\n\n2.	Consentement au traitement des données\n\nCertaines activités de traitement des données que nous exerçons peuvent nécessiter votre consentement, ex : l'utilisation de vos données à caractère personnel pour améliorer les Services.\n\nVous n’êtes pas obligé de donner votre consentement ; cependant, si vous refusez, vous pourrez continuer à utiliser les Services. Toutefois, vous pourrez recevoir du contenu non personnalisé selon vos préférences. Indépendamment de votre consentement, nous nous réservons le droit de traiter vos données dans les limites prévues par la loi.\n\nVous pouvez à tout moment revenir sur votre consentement. Le retrait du consentement n'affecte pas la légalité du traitement réalisé avec votre consentement avant son retrait. Pour revenir sur votre consentement et/ou vous opposer au traitement (c.f. Article 10 et Annexe Vos Droits ci-dessous concernant vos droits d'opposition), vous devez modifier les paramètres de confidentialité de votre Smart TV en conséquence.\n\n3.	Catégories spéciales de données à caractère personnel\n\nNous traitons notamment les catégories de données suivantes :\n\nIdentifiant de l'Appareil : Est attribué à votre Smart TV un numéro unique fixe qui nous permet d'identifier et d'authentifier la Smart TV lorsque vous utilisez les Services. Il s'agit de l'Identifiant de l'Appareil. \n\nAdresse IP et Adresse MAC : Une adresse IP sera attribuée à votre Smart TV lorsqu'elle accèdera à Internet. Si votre Smart TV est reliée à un routeur (ex : un réseau personnel local ou un WLAN local), nous pouvons traiter l'adresse IP de ce routeur. L'adresse MAC est un numéro unique attribué à chaque interface réseau de votre Smart TV. \n\nInformations spécifiques concernant l'Appareil : La Smart TV conserve plusieurs informations sur elle-même et sa configuration. Parmi ces informations, il y a le type de Smart TV, la version du système d'exploitation de la Smart TV, sa résolution, l'identifiant projet (i.e. les informations concernant les fichiers de configuration), l'agent utilisateur, le nom du navigateur, la version du navigateur ainsi que la langue et le pays configurés dans la Smart TV. \n\nNous utiliserons ces informations et les communiquerons à notre partenaire de services et aux partenaires de contenu pour les finalités décrites ci-dessous.\n\n4.	Finalités du traitement et/ou de l'utilisation de vos données à caractère personnel et fondements juridiques\n\nLes finalités pour lesquelles nous traitons vos données à caractère personnel et les fondements juridiques respectifs sont décrits ci-dessous. Si des finalités contractuelles sont exposées ci-dessous à titre de fondements juridiques, nous ne pouvons pas vous fournir les Services si vous ne nous communiquez pas les données en question. Si votre consentement figure parmi les fondements juridiques, vous êtes libre de donner ou de revenir sur votre consentement. Si vous refusez, nous ne traiterons pas vos données à caractère personnel pour la finalité en question.\n\n•	Fourniture des Services : Nous utilisons l'adresse IP et l'adresse MAC, l'Identifiant de l'Appareil, la version du système d'exploitation de la Smart TV, le type de client de votre Smart TV et sa résolution, l'identifiant projet (i.e. les informations concernant les fichiers de configuration), votre liste de chaînes DTV, les chaînes regardées, le fuseau horaire, les paramètres de pays et de langue pour fournir à votre Smart TV un accès aux Services et aux services fournis par les partenaires de contenu. Parmi les finalités, il y a (notamment) la fourniture de services selon la localisation (ex : prévisions météorologiques), la gestion des abus, la gestion des failles de sécurité, le contrôle de la disponibilité des Services et la fourniture de services de sauvegarde de vos préférences utilisateur.\n\nLorsque vous utiliserez les Services, votre Smart TV demandera des données auprès des Services via Internet. Dans le cadre de ces demandes, votre adresse IP, telle que décrite ci-dessus, ainsi que la langue et le pays qui ont été configurés dans votre Smart TV, seront transmis à notre partenaire de services. Notre partenaire de services traitera les données respectives conformément à sa propre note d'information sur la protection des données à caractère personnel.\n\nLes fondements juridiques du traitement concerné de vos données à caractère personnel sont les finalités contractuelles décrites à l'Article 6(1) b) du Règlement Général sur la Protection des Données (ci-après, le « RGPD »).\n\n•	Paramètres des Services : Dans le cadre des fonctionnalités normales des Services, vous pouvez modifier manuellement l'ordre dans lequel les applications apparaissent dans les Services. Notre partenaire de services conservera cet ordre et les autres préférences que vous pouvez définir lorsque vous utilisez les Services. Ces informations seront reliées à l'Identifiant de l'Appareil.\n\nLes fondements juridiques du traitement concerné de vos données à caractère personnel sont les finalités contractuelles décrites à l'Article 6(1) b) du RGPD.\n\n•	Authentification : Chaque fois que vous connectez votre Smart TV à Internet et que vous l'allumez, elle sera automatiquement connectée aux Services, qui sont gérés par notre partenaire de services. Votre Smart TV sera alors authentifiée et autorisée à accéder aux Services. A des fins d'authentification, les Services conservent un ou plusieurs identifiants numériques uniques concernant votre Smart TV. Nous utilisons l'Identifiant de l'Appareil et l'adresse MAC à des fins d'authentification. Nous fournissons également l'Identifiant de l'Appareil à certains partenaires de contenu sélectionnés à des fins d'authentification. Ces partenaires de contenu utilisent l'Identifiant de l'Appareil pour authentifier votre Smart TV à des fins d'accès aux services qu'ils proposent.\n\nLes fondements juridiques du traitement concerné de vos données à caractère personnel sont les finalités contractuelles décrites à l'Article 6(1) b) du RGPD.\n\n•	Diagnostic à distance : Dans le cadre des Services, nous vous fournissons des services de diagnostic à distance. En conséquence, nous traitons l'Identifiant de l'Appareil, le numéro de l'appareil, le numéro de série, l'adresse MAC et les journaux d'erreurs, codes d'erreur et descriptifs des erreurs qui sont automatiquement fournis par le module défaillant (application, système middleware).\n\nDe plus, si vous appelez notre support consommateur, sous réserve de votre autorisation préalable, l’agent du support peut également accéder à distance à votre TV et accomplir des services de diagnostic à distance. Dans ce cas, l’agent du support consommateur reçoit accès à votre TV et réseaux, applications et aux données des fichiers enregistrés et peut traiter l’Identifiant de l’Appareil, le numéro de l’appareil, le numéro de série, l’adresse MAC, les logs d’erreurs, les codes d’erreurs, les descriptions d’erreurs, l’Identifiant du Terminal, informations relatives à l’application installée, capture d’écran de la TV et des informations relatives aux équipements connectés en USB/Bluetooth pour l’évaluation de l’état de la TV et des applications et données associées. Les logs d’erreurs peuvent contenir des informations comme l’historique du programme TV, la liste de lecture de musique, le nom d’utilisateur et le mot de passe de l’application si une application de tiers utilisée pour la diffusion n’a pas chiffré ces informations. Cela sera effectué afin de diagnostiquer des problèmes, modifier les paramètres du système suite à votre demande, ou pour corriger les problèmes reportés. De plus, sur demande, les membres du support consommateur peuvent résoudre une erreur, exécuter des programmes ou installer/désinstaller un logiciel, reconfigurer et/ou, autrement accomplir des services ou du support technique sur la TV.\n\nUn accès à distance ne peut intervenir qu’après que vous ayez activé la fonction d’accès à distance en cochant la case désignée sur votre TV et prendra fin après la cession concernée.\n\nLes fondements juridiques du traitement concerné de vos données à caractère personnel sont les finalités contractuelles décrites à l'Article 6(1) b) du RGPD.\n\n•	Service après-vente : Conformément à la loi applicable, vous pouvez disposer de garanties ou de droits similaires pour bénéficier de services après-vente. TCL Europe, 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, France est responsable de la prise en charge des réclamations au titre de la garantie et autres requêtes faites dans le cadre des services après-vente et du traitement de vos données à caractère personnel qui y est associé. Ainsi, pour les finalités des services après-vente, TCL Europe intervient en qualité de responsable de traitement et nous excluons toute responsabilité concernant le traitement de vos données à caractère personnel dans ce cadre.\n\nLorsque vous faites appel à notre service après-vente, vos nom, adresse électronique, numéro de téléphone, demande de service et adresse postale figurant sur la facture peuvent être nécessaires pour vous fournir le service après-vente. Les informations peuvent également être collectées par le biais des partenaires de services après-vente de nos revendeurs ou prestataires de services autorisés si vous faites appel à eux pour bénéficier d'un service. Vous pouvez contacter TCL Europe aux coordonnées indiquées à l'Article 12 ci-dessous pour obtenir plus d'information à propos de la protection des données à caractère personnel dans le cadre des services après-vente.\n\nLe fondement juridique du traitement concerné est l'obligation de respecter des obligations légales décrites à l'Article 6(1) c) du RGPD.\n\n•	T-Channel : T-Channel est la page d'accueil de la Smart TV sur le système d'exploitation Linux (voir ci-dessous pour l'utilisation du système d'exploitation Android) et vous permet de choisir certains contenus.\n\nLes fondements juridiques du traitement de vos données à caractère personnel nécessaires à l'utilisation de T-Channel sont les finalités contractuelles décrites à l'Article 6(1) b) du RGPD.\n\nSous réserve de votre consentement préalable, nous contrôlerons également l'utilisation de T-Channel, i.e. :\n\n	Lorsque vous commencerez à utiliser T-Channel, nous enregistrerons l'heure à laquelle vous lancerez T-Channel et l'heure à laquelle vous en sortirez.\n\n	Lorsque vous commencerez à regarder une vidéo sur T-Channel, nous enregistrerons le nom et la durée de la vidéo (non applicable à Netflix, YouTube ou tout autre service fourni par un tiers).\n\n	Lorsque vous entrerez ou sortirez d'une page, nous enregistrerons le temps passé sur la page.\n\n	Lorsque vous déplacerez votre curseur d'un endroit à un autre, ou ouvrez une application, nous enregistrerons ces informations.\n\n	Lorsque vous installerez, supprimerez ou mettrez à jour des applications, nous enregistrerons ces informations, y compris le nom des applications.\n\nNous collectons ces informations principalement à des fins d'analyse des données volumineuses dans le but d'améliorer les produits et de fournir de meilleurs services de contenu aux utilisateurs.\n\nLe fondement juridique du traitement de vos données à caractère personnel dans le cadre du contrôle de votre utilisation de T-Channel est votre consentement conformément à l'Article 6(1) a) du RGPD.\n\nSi vous avez acheté un téléviseur Android et que vous utilisez le système d'exploitation Android de Google, vos données à caractère personnel seront traitées par Google et nous excluons toute responsabilité concernant ce traitement. Veuillez consulter la note d'information sur la protection des données à caractère personnel de Google qui décrit le traitement de vos données et vos droits respectifs.\n\n•	T-Cast : T-Cast vous permet de contrôler votre téléviseur à partir de votre téléphone et de partager des vidéos, de la musique et des photos stockées dans votre smartphone sur le téléviseur. T-Cast vous permet également de transposer votre smartphone sur votre téléviseur.\n\nLe téléchargement et l'utilisation de l'application sont facultatifs. Si vous téléchargez et utilisez l'application, nous traiterons l'adresse MAC pour calculer le nombre de versions T-Cast utilisées sur le marché. Cela est nécessaire pour vous fournir ce service. Si vous utilisez notre fonctionnalité second écran, nous collecterons et traiterons sur nos serveurs les commandes que vous activez sur l'application ainsi que les paramètres de pays et de langue, la liste de chaînes DTV, la liste des chaînes préférées, la liste des programmes, l'Identifiant de l'Appareil, la chaîne en cours, la version du protocole et l'adresse IP de votre Smart TV. Nos serveurs contrôleront alors votre Smart TV selon les instructions que vous aurez définies dans l'application.\n\nLes fondements juridiques du traitement concerné de vos données à caractère personnel sont les finalités contractuelles décrites à l'Article 6(1) b) du RGPD.\n\n•	Assistant TCL : L’Assistant TCL est une fonctionnalité qui permet de connecter votre TV à des équipements compatibles avec Amazon Alexa (comme Echo) pour contrôler un tel équipement par la voix. Pour pouvoir utiliser cette fonctionnalité, vous devez d’abord enregistrer votre TV sur le site web d’Amazon en utilisant le code TCL qui se trouve sur votre TV. Vous pouvez alors donner des instructions verbales à l’équipement compatible avec Amazon Alexa en appuyant sur le bouton du micro de la télécommande de votre TV.\n\nSi vous utilisez l’Assistant TCL, votre TV collecte votre voix et la transmet au Cloud Amazon Alexa pour reconnaissance vocale et traitement ultérieur de vos données par Amazon. Vos données sont directement transmises à Amazon et ne font pas l’objet de traitement ultérieur ou de stockage local sur votre TV. Veuillez vous référer à la politique de protection des données d’Amazon en ce qui concerne le traitement ultérieur de vos données par Amazon. \n\nLes fondements juridiques du traitement concerné de vos données à caractère personnel sont les finalités contractuelles décrites à l'Article 6(1) b) du RGPD.\n\n•	Reconnaissance Vocale Alexa (RVA) : RVA est une fonctionnalité qui vous permet de contrôler votre TV par la voix. Pour utiliser cette fonction, vous devez d’abord enregistrer votre TV sur le site web d’Amazon en utilisant un code d’enregistrement d’Amazon. Vous pourrez ensuite donner des instructions verbales à la TV en appuyant sur le bouton du micro de la télécommande de votre TV.\n\nSi vous utilisez RVA, votre TV collecte votre voix et l’envoie au Cloud Amazon Alexa et aucune donnée n’est stockée localement sur votre TV. Veuillez vous référer à la politique de protection des données d’Amazon en ce qui concerne le traitement ultérieur de vos données par Amazon.\n\nQuand vous utilisez RVA, le nom de votre TV est requis pour nous permettre de trouver quelle TV vous souhaitez contrôler.\n\nLes fondements juridiques du traitement concerné de vos données à caractère personnel sont les finalités contractuelles décrites à l'Article 6(1) b) du RGPD.\n\nDe plus, nous enregistrerons la fréquence et la durée de votre utilisation de RVA et quelles fonctions de RVA vous avez utilisées. Nous collectons ces informations pour l’amélioration de produits et pour fournir de meilleur services de contenus aux utilisateurs.\n\nLes fondements juridiques du traitement concerné de vos données à caractère personnel sont les intérêts légitimes décrits à l'Article 6(1) f) du RGPD. Plus d’informations sur le test de balance des intérêts sont disponibles sur demande.\n\n•	Mises à jour des logiciels : Les mises à jour des logiciels font partie des Services. Ainsi, chaque fois que votre Smart TV est allumée, elle nous fournit l'adresse IP, l'Identifiant de l'Appareil, le numéro de l'appareil, la version du logiciel, le type de client de votre Smart TV, l'identifiant projet (i.e. les fichiers de configuration), l'identifiant utilisateur et le numéro de série afin de rechercher les éventuelles mises à jour de logiciels et de vous proposer et de vous fournir les mises à jour logicielles appropriées.\n\nLes fondements juridiques du traitement concerné de vos données à caractère personnel sont les finalités contractuelles décrites à l'Article 6(1) b) du RGPD.\n\n•	Application de la loi : Il peut nous être demandé de fournir des données aux forces de l'ordre ou aux tribunaux compétents. Dans ce cas, nous ne le ferons que dans le cadre d'un acte légal contraignant, tel qu'un mandat de perquisition ou une décision judiciaire, nous imposant de coopérer avec les autorités concernées.\n\nLe fondement juridique du traitement concerné est notre obligation de respecter des obligations légales décrites à l'Article 6(1) c) du RGPD.\n\nIl est possible d'utiliser les Services avec des pseudonymes ; cependant, certains services spécifiques peuvent vous imposer de communiquer votre nom et/ou votre adresse électronique.\n\n5.	Protection des données et sécurité des enfants de moins de 16 ans\n\nNous sommes conscients de l'importance de prendre des précautions supplémentaires afin de protéger les données à caractère personnel et de préserver la sécurité des enfants utilisant nos Services. Les enfants de moins de 16 ans (ou l'âge légal minimum dans le pays en question) ne doivent pas communiquer leurs données à caractère personnel via le téléviseur ni lorsqu'ils demandent à bénéficier du service après-vente, sauf consentement vérifiable donné par un parent.\n\nDans la mesure où nous ne collectons jamais la date de naissance des utilisateurs, nous ne pouvons pas vérifier leur âge. Cependant, si nous sommes informés que nous avons collecté des données à caractère personnel d'un enfant de moins de 16 ans (ou l'âge légal minimum dans le pays concerné), en dehors des circonstances décrites ci-dessus, nous prendrons des mesures pour supprimer les informations dès que possible.\n\n6.	Applications de tiers\n\nVotre Smart TV permet d'utiliser des applications fournies par des tiers, tels que Netflix, YouTube ou HbbTV (service « bouton rouge » fournis par les diffuseurs de programmes télévisés). Vous pouvez télécharger les applications à partir de la boutique d'applications ou activer des applications fournies par des tiers qui sont déjà préinstallées sur votre appareil. Les applications de tiers qui sont préinstallées sur votre appareil ne collectent pas les données à caractère personnel sans votre autorisation préalable. Ex : Netflix est déjà préinstallé sur l'appareil mais ne collectera des données que lorsque vous vous connecterez à votre compte Netflix. HbbTV ne collecte des données que lorsque vous acceptez cette collecte en appuyant sur le bouton approprié de votre télécommande.\n\nSi vous activez une application fournie par un tiers, vos données à caractère personnel pourront être traitées par le fournisseur de l'application. Nous ne sommes pas responsables de ce traitement ; veuillez consulter la note d’information sur la protection des données de l'application tierce pour obtenir des informations à propos du traitement de vos données et de vos droits respectifs.\n\n7.	Catégories de destinataires\n\nNous partageons vos données à caractère personnel collectées lorsque vous utilisez les Services uniquement avec des partenaires de contenu tiers lorsque vous demandez certains contenus fournis par ces partenaires ou avec des prestataires de services qui interviennent en tant que sous-traitants et qui nous aident à fournir les Services.\n\nNous partageons vos données personnelles avec d'autres tiers uniquement si nous sommes contraints de le faire en vertu d'obligations légales (ex : aux tribunaux ou aux autorités judiciaires), si vous acceptez le partage en question ou si le partage est licite en vertu de la loi applicable.\n\n8.	Pays dans lesquels vos données seront traitées\n\nNous et/ou certains destinataires de vos données à caractère personnel énumérés ci-dessus pouvons nous situer en dehors de l'Espace Economique Européen (ex : République Populaire de Chine ou Etats-Unis). En conséquence, vos données à caractère personnel pourront être traitées dans des pays où les lois sur la protection des données pourront prévoir un niveau de protection des données différent de celui prévu par les lois de votre pays et qui ne sont pas reconnus pour fournir un niveau de protection des données adéquat, conformément au RGPD. Les pays qui fournissent un niveau de protection des données adapté du point de vue de la loi européenne sur la protection des données sont notamment Andorre, l'Argentine, le Canada, la Suisse, les Iles Féroé, Guernesey, l'Etat d'Israël, l'Ile de Man, Jersey, la Nouvelle-Zélande et la République Orientale de l'Uruguay. Les destinataires basés aux Etats-Unis peuvent être partiellement certifiés en vertu des principes du Privacy Shield UE-US et sont ainsi reconnus pour fournir un niveau de protection des données adéquat du point de vue du droit européen sur la protection des données à caractère personnel. \n\nSi nécessaire, nous mettrons en place des mesures de sécurité appropriées concernant les transferts de données vers des destinataires situés en dehors de l'Union Européenne qui ne fournissent pas un niveau de protection des données approprié. Vous pouvez demander une copie des mesures en question en nous contactant comme indiqué à l'Article 12 ci-dessous.\n\n9.	Durée de conservation\n\nVos données à caractère personnel seront conservées pour la durée nécessaire à la fourniture des Services. Pour la plupart de vos données, cela signifie généralement que nous les conservons pendant un mois. Aux fins du diagnostic à distance et des services après-vente, nous pouvons conserver vos données pendant dix ans. Lorsque nous n'aurons plus besoin d'utiliser vos données à caractère personnel pour respecter des obligations contractuelles ou légales, nous les supprimerons de nos systèmes et registres et/ou prendrons des mesures pour les anonymiser correctement de manière à ce que vous ne puissiez plus être identifié à partir de celles-ci.\n\n10.	Vos droits\n\nConformément à la loi applicable en matière de protection des données, vous avez le droit de demander l'accès à vos données à caractère personnel, de demander la rectification de vos données à caractère personnel, de demander la suppression de vos données à caractère personnel, de demander un traitement limité de vos données à caractère personnel, de demander la portabilité des données et de vous opposer au traitement de vos données à caractère personnel. Veuillez noter que ces droits pourraient être limités en vertu de la loi nationale applicable en matière de protection des données. Pour plus d’information sur ces droits, veuillez consulter l'Annexe Vos Droits ci-dessous.\n\nVous avez également le droit de déposer une réclamation auprès des autorités compétentes en matière de protection des données à caractère personnel.\n\nPour exercer vos droits, veuillez-nous contacter aux coordonnées figurant à l'Article 12 ci-dessous.\n\n11.	Modifications de la Note d'Information sur la Protection des Données\n\nPour améliorer nos Services, nous pouvons être amenés à modifier la présente Note d'Information sur la Protection des Données à Caractère Personnel, par ex. par la mise en place de nouvelles technologies ou le lancement de nouveaux services. Nous nous réservons le droit de modifier ou de compléter la présente Note d'Information sur la Protection des Données à Caractère Personnel à tout moment.\n\n12.	Coordonnées et représentant dans l'Union Européenne\n\nSi vous avez des questions à propos de la Note d'Information sur la Protection des Données à Caractère Personnel ou si vous avez une réclamation à propos de la façon dont nous traitons vos données à caractère personnel, veuillez-nous contacter aux coordonnées suivantes :\n\nFormulaire de contact : www.tcl.eu/en/contact-us\n\nNotre représentant dans l’Union Européenne est : TCL Europe ayant son siège social sis 9-15 rue Rouget de L'Isle- 92130 Issy- Les-Moulineaux, France. Vous pouvez contacter TCL Europe via le formulaire de contact mentionné ci-dessus.\n\nVersion : 2.0\n\nAnnexe Vos Droits\n\na.	Droit d'accès : Vous pouvez avoir le droit d'obtenir de nous confirmation du fait que des données à caractère personnel vous concernant sont ou non traitées et lorsque c'est le cas, de demander l'accès à ces données. Ces informations comprennent notamment les finalités du traitement, les catégories de données à caractère personnel concernées et les destinataires ou catégories de destinataires à qui les données à caractère personnel ont été ou seront divulguées. Cependant, ce droit n'est pas absolu et les intérêts d'autres personnes physiques peuvent limiter votre droit d'accès.\n\nVous pouvez avoir le droit d'obtenir une copie des données à caractère personnel objet d'un traitement. Si vous demandez des copies supplémentaires, nous pourrons facturer des frais administratifs raisonnables. \n\nb.	Droit de rectification : Vous pouvez avoir le droit de nous demander la rectification des données à caractère personnel vous concernant qui sont inexactes. Selon les finalités du traitement, vous pouvez avoir le droit de compléter les données personnelles incomplètes, y compris en effectuant une déclaration supplémentaire.\n\nc.	Droit à l’effacement (« droit à l'oubli ») : Dans certaines circonstances, vous pouvez avoir le droit de nous demander la suppression des données à caractère personnel vous concernant et nous pouvons être dans l'obligation d'effacer ces données. \n\nd.	Droit à la limitation du traitement : Dans certains cas, vous pouvez également avoir le droit de demander un traitement limité de vos données à caractère personnel. Dans ce cas, les données concernées seront signalées et nous ne pourrons les traiter que pour certaines finalités.\n\ne.	Droit à la portabilité des données : Dans certaines circonstances, vous pouvez avoir le droit de recevoir les données à caractère personnel vous concernant et que vous nous avez communiquées, dans un format structuré, communément utilisé et lisible par une machine et vous pouvez avoir le droit de transmettre ces données à une autre entité, sans que nous ne puissions nous y opposer.\n\nf.	Droit d'opposition :\n\nDans certaines circonstances, vous pouvez avoir le droit de vous opposer à tout moment, pour des motifs en lien avec votre situation particulière, ou lorsque les données à caractère personnel sont traitées à des fins de marketing direct, au traitement de vos données à caractère personnel ; il pourra alors nous être demandé de ne plus traiter vos données à caractère personnel.\n\nDe plus, si vos données à caractère personnel sont traitées à des fins de marketing direct, vous avez le droit de vous opposer à tout moment au traitement des données vous concernant à cette fin, y compris au profilage dans la mesure où cette opération est liée à cette activité de marketing direct. Dans ce cas, nous ne traiterons plus vos données à caractère personnel pour ces finalités."];
var cookieNotice = ["\n\nNous respectons votre vie privée lorsque vous utilisez les Smart TV que nous fabriquons et les Services que nous fournissons. Les cookies sont utilisés par de nombreux sites web et autres services Internet et votre Smart TV acceptera, conservera et transmettra des cookies pour garantir que ces sites web et services fonctionnent correctement. \n\nNous n'utilisons pas les cookies lorsque nous vous fournissons les Services. Cependant, les tiers (ex : fournisseurs tiers d'application) peuvent utiliser des cookies lorsque vous utilisez la Smart TV pour accéder à leurs services. La présente Note d'Information sur les Cookies ne contient que des informations limitées sur les cookies qui peuvent être placés par des tiers. Pour plus d'information sur les cookies réellement utilisés par les tiers et leurs fonctionnalités, nous vous invitons à prendre connaissance des notes d'information sur les cookies de ces tiers, respectivement. Cependant, dans la présente Note d'Information sur les Cookies, nous décrivons de manière générale les cookies qui peuvent être placés sur votre Smart TV et la façon dont vous pouvez les gérer.\n\n1.	Qu’est-ce qu’un cookie ?\n\nLes cookies sont de petits fichiers textes qui peuvent être placés sur votre Smart TV. Lorsque vous accédez à un site web ou à un service proposé via le bouton rouge d'une chaîne de télévision, le site web ou le service peut placer un cookie sur la Smart TV. Lors d'un accès ultérieur, le cookie qui a été placé sur votre Smart TV enverra des informations à la partie ayant placé ledit cookie. Les cookies sont extrêmement communs et utilisés sur de nombreux sites web et services. Chaque cookie contient généralement le nom du domaine à partir duquel le cookie est envoyé, la « durée de vie » du cookie et une valeur (le plus souvent, un numéro unique). Pour plus d'explications sur les cookies et la façon dont ils fonctionnent, visitez le site www.allaboutcookies.org.\n\nIl existe deux catégories de cookies : les cookies fonctionnels et les cookies non-fonctionnels. Les cookies fonctionnels sont des cookies qui sont strictement nécessaires à la fourniture des services. Les cookies non-fonctionnels sont tous les autres cookies.\n\n2.	Sites web de tiers\n\nLorsque vous visitez les sites web ou services de tiers via les Services de votre Smart TV, il est possible que ces sites web ou services placent des cookies sur votre Smart TV et que ces sites web suivent et conservent vos interactions sur ces sites web. Nous ne demandons ni n'encourageons ces activités et nous n'utiliserons pas ces informations. Veuillez consulter les notes d'information sur les cookies et sur la protection des données à caractère personnel respectives de ces sites web et services pour obtenir plus d'informations sur l'utilisation des cookies par ces tiers.\n\n3.	Suppression des cookies\n\nL'interface utilisateur de votre Smart TV vous permet de supprimer de la Smart TV tous les cookies et autres éléments stockés par votre navigateur local. Il est vivement recommandé de supprimer tous les cookies et les paramètres stockés localement avant de vendre ou de céder votre Smart TV.\n\nVersion : 2.0"];
var privacyPolicy = ["Cochez la ou les cases ci-dessous si vous souhaitez utiliser nos services Smart TV et les services connexes. L’utilisation de ces services nécessite le traitement de vos données personnelles comme décrit dans notre Avis de confidentialité : http://www.tcl.eu/en/","Activer le service Smart TV, le stockage des paramètres de service et l’authentification automatique de Smart TV. Si vous décochez cette case, vous n’aurez accès qu’à la télévision normale et à HDMI.","Activer la mise à jour automatique du logiciel. Cochez cette case pour garder votre produit actualisé avec les dernières mises à jour logicielles et obtenir les meilleures performances. ","(Les mises à jour logicielles sont importantes pour le bon fonctionnement de votre téléviseur, car elles offrent de nouvelles fonctionnalités et assurent la stabilité et la sécurité. Nous vous recommandons donc de cocher la case.)","Cochez la case ci-dessous si vous consentez à ce que nous traitions vos données personnelles également dans l’objectif énoncé ci-dessous. Pour plus d’informations sur la façon dont nous traitons vos données personnelles, veuillez consulter notre Avis de confidentialité : http://www.tcl.eu/en/","Je consens au traitement de mes données personnelles (par exemple, le moment de l’entrée et de la sortie de T-Launcher) dans le but d’améliorer les produits de TCL et de fournir de meilleurs services de contenu sur les Smart TV."];
var termsFirTitle = ["Termes & Conditions","Avis de confidentialité","Avis sur les cookies"];
var termsSecTitle = ["Lisez et acceptez les termes et conditions.","Veuillez lire et accepter l’avis de confidentialité.","Veuillez lire et accepter l’avis sur les cookies."];
var tickall = "Cochez tout";
var tickremindWords = "Veuillez cocher les cases ou vous ne pourrez pas profiter des services de TV connectée.";
var eWarrantyCardWords=["E-warranty Card","The date of activation:"];