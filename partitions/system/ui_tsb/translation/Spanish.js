var  all_country  = ["Australia","Austria","Bélgica","Bulgaria","Croacia","República Checa","Dinamarca","Finlandia","Francia","Alemania",
					"Grecia","Hungría","Italia","Luxemburgo","Países Bajos","Noruega","Polonia","Portugal","Rumanía","Rusia",
						"Serbia","Eslovenia","España","Suecia","Suiza","Reino Unido","Nueva Zelanda"," "/*Arab*/,"Estonia"," "/*Hebrew*/,
					"Letonia","Eslovaquia","Turquía","Irlanda","Japón","Filipinas","Tailandia","Maldivas","Uruguay","Peru",
					"Argentina","Chile","Venezuela","Ecuador","Costa Rica","Paraguay","Bolivia","Belize","Nicaragua","Guatemala",
					"China","Taiwan","Brazil","Canadá","Mexico","United States","South Korea","Otros","Lituania"/*新添加的，底层结构体中没有*/,"Ucrania"/*新添加的，底层结构体中没有*/,
					"Irán","Iraq"," "," ","Uzbekistán"," ","Kirguistán","Argelia","Egipto","Túnez",
					"Tanzania","Kenia","Paquistán","Indonesia","Kuwait","Arabia Saudí","Catar","Israel","Líbano","Baréin",
					"Angola","Congo","India","Turkmenistán","Colombia","Mongolia","Bangladesh","Nepal","Sri Lanka"," ",
					"Moldavia","Polynesia","EI Salvador"," ","Fiji","Liberia","Jordania","Myanmar","Ghana","Georgia",
					"Armenia","Omán","Yemén","Siria","Palestina","Afganistán","Morocco","Benín","IvoryCoast","Nigeria",
					"Sudán","Etiopía","Zambia"," ","Sudáfrica","Mozambique","Libia","Albania","Belarus","Iceland",
					"Lituania","Mauricio","Dubái","E.A.U.","Tayikistán","Bengala","Bosnia Herzegovina","Chipre","Kosovo","Macedonia",
					"Malta","Montenegro"," ","Singapur","Malasia","NewCaledonia","Suriname","Jamaica","Curacao","Aruba",
					"Antigua & Barbuda","St Lucia","Barbados","St Vincent","St Kitts & Nevis","Grenada","Trinidad & Tobago","Guyana","Puerto Rico","Panama",
		 			"Dominica","Cuba","Honduras","Haiti","Cambodia","others","Dominican Republic","Bonaire"," "," "];

var all_language = ["Checo","Chamic","Danés","Dargwa","Landdayak","Alemán","Inglés","Español","Griego","Francés",
					"Croata","Sorbianupper","Italiano","Húngaro","Holandés","Noruego","Polaco","Portugués","Ruso","Rumano",
					"Esloveno","Serbio","Finlandés","Sueco","Búlgaro","Eslovaco","Chino","Chuukese","Gaélico","Gbaya",
					"Galés","Árabe","Irski","Letón","Hebreo","Turco","Estonio","Holandés"/*Netherlands*/,"Coreano","Kosraean",
					"Hindi","Hittite","Hmong","Mandarín","Cantonés","Maorí","Audio original"/*Qaa*/,"No definido"/*Undetermined*/,"Ad","Desconocido",
					"No definido","Abkhazian","Achinese","Acoli","Adangme","Adyghe","Afar","Afrihili","Afrikaans","Afro",
					"Ainu","Akan","Akkadian","Albano","Aleut","Algonquian","Altaisouthern","Altaic","Amharic","Apache",
					"Aramaic","Aragonese","Arapaho","Araucanian","Arawak","Armenian","Artificial","Assamese","Asturian","Athapascan",
					"Austronesian","Australian","Avaric","Avestan","Awadhi","Aymara","Azerbaijani","Aztec","Balinese","Baltic",
					"Baluchi","Bambara","Bamileke","Banda","Bantu","Basa","Bashkir","Vasco","Beja","Bemba",
			/*10*/	"Bengali","Berber","Bhojpuri","Bihari","Bikol","Bini","Bislama","Bosnio","Braj","Breton",
					"Buginese","Buriat","Burmese","Blin","Bielorruso","Caddo","Carib","Catalán","Caucasian","Cebuano",
					"Celtic","Centralamericanindian","Chagatai","Chamorro","Chechen","Cherokee","Cheyenne","Chibcha","Chinookjargon","Choctaw",
					"Chipewyan","Churchslavic","Chuvash","Coptic","Cornish","Corsican","Cree","Creek","Creolesandpidgins","Crimeantatar",
					"Creolesandpidginsenglish","Creolesandpidginsfrench","Creolesandpidginsportuguese","Kashubian","Cushitic","Dakota","Delaware","Slavey","Dogrib","Dhivehi",
					"Dinka","Divehi","Dogri","Dravidian","Sorbianlower","Duala","Dutchmiddle","Dyula","Dzongkha",
					"Efik","Egyptian","Ekajuk","Elamite","Englishmiddle","Englishold","Angika","Eskimo","Esperanto","Ewe",
					"Ewondo","Fang","Fanti","Faroese","Fijian","Filipino","Finnougrian","Fon","Frenchmiddle",
					"Frenchold","Frisiannorthern","Frisianeastern","Frisian","Fulah","Friulian","Ga","Gallego","Ganda",
					"Gayo","Geez","Georgian","Germanmiddlehigh","Germanoldhigh","Gorontalo","Germanic","Gilbertese","Gondi","Gothic",
			/*20*/	"Grebo","Greekancient","Greenlandic","Guarani","Swissgerman","Gujarati","Gwichin","Haida","Haitiancreole","Hausa",
					"Hawaiian","Herero","Hiligaynon","Himachali","Hirimotu","Hupa","Iban","Islandés","Ido","Nuosu",
					"Igbo","Ijo","Iloko","Indic","Indoeuropean","Ingush","Indonesio","Interlingua","Interlingue","Inuktitut",
					"Inupiak","Iranian","Irishold","Irishmiddle","Iroquoian","Japonés","Javanese","Lojban","Judeoarabic",
					"Judeopersian","Kabyle","Kachin","Kamba","Kannada","Kanuri","Karakalpak","Karen","Kashmiri","Kawi",
					"Kazakh","Circassian","Khasi","Khmer","Khoisan","Khotanese","Kikuyu","Kinyarwanda","Kirghiz","Kimbundu",
					"Komi","Kongo","Konkani","Kpelle","Karachaybalkar","Karelian","Kru","Kuanyama","Kumyk",
					"Kurdish","Kurukh","Kusaie","Kutenai","Ladino","Lahnda","Lamba","Langue","Lao","Latin",
					"Luxembourgish","Lezghian","Limburgish","Lingala","Lituano","Lozi","Lubalulua","Lubakatanga","Luiseno","Lunda",
					"Luo","Lushai","Macedonio","Madurese","Magahi","Maithili","Makasar","Malagasy","Malay","Moksha",
			/*30*/	"Mandar","Malayalam","Maltese","Manchu","Mandingo","Manipuri","Manobo","Manx","Marathi","Mari",
					"Marshall","Mirandese","Marwari","Masai","Mayan","Erzya","Mende","Micmac","Minangkabau","Miscellaneous",
					"Mohawk","Moldavian","Monkmer","Mongo","Mongol","Mossi","Multiple","Munda","Neapolitan","Nauru",
					"Navajo","Ndebelenorth","Ndebelesouth","Ndongo","Germanlow","Nepali","Newari","Nias","Nigerkordofanian","Nilosaharan",
					"Niuean","Norwegianbokmal","Nogai","Norseold","Northamericanindian","Norwegiannynorsk","Nubian","Nyamwezi","Newariclassical","Nyanja",
					"Nyankole","Nyoro","Nzema","Ojibwa","Oriya","Oromo","Osage","Ossetic","Otomian","Pahlavi",
					"Palauan","Pali","Pampanga","Pangasinan","Panjabi","Papiamento","Papuanaustralian","Persian","Persianold","Phoenician",
					"Philippine","Ponape","Prakrit","Provencalold","Pushto","Quechua","Rhaetoromance","Rajasthani","Rapanui","Rarotongan",
					"Romance","Romany","Rundi","Aromanian","Salishan","Samaritanaramaic","Samisouthern","Saminorthern","Sami","Lulesami",
					"Inarisami","Samoan","Skoltsami","Sandawe","Sango","Sanskrit","Sardinian","Sasak","Santali","Sicilian",
			/*40*/	"Scots","Selkup","Semitic","Sranantongo","Serbocroatian","Serer","Sign","Shan","Shona","Sidamo",
					"Siksika","Sindhi","Soninke","Singhalese","Sinotibetan","Siouan","Slavic","Siswant","Sogdian","Somali",
					"Songhai","Sorbian","Walloon","Nko","Sothonorthern","Sothosouthern","Southamericanindian","Sukuma","Sumerian","Sudanese",
					"Susu","Swahili","Swazi","Swize","Syriacclassical","Syriac","Tagalog","Tahitian","Tetum","Tajik",
					"Tamashek","Tai","Tamil","Tatar","Teletexto","Telugu","Tereno","Thai","Tibetan","Tigre",
					"Tigrinya","Timne","Tivi","Klingon","Tokelau","Tlingit","Tonganyasa","Tongaislands","Truk","Tokpisin",
					"Tsimshian","Tsonga","Tswana","Tumbuka","Tupian","Turkishottoman","Turkmen","Tuvinian","Tuvalu","Twi",
					"Udmurt","Ugaritic","Uighur","Ucraniano","Umbundu","Urdu","Uzbek","Vai","Venda","Vietnamita",
					"Volapuk","Votic","Wakashan","Walamo","Waray","Washo","Wolof","Kalmyk","Xhosa","Yakut",
					"Yao","Yap","Yiddish","Yoruba","Yupik","Zapotec","Blissymbolics","Zenaga","Zhuang","Zande",
			/*50*/	"Zulu","Zuni","Zazaki","Valencian","Chino tradicional","ChineseS","QAB","QAC","Árabe egipcio","*",
					"*","Dagbani","Kasem","*"];
var offOn = ["Apagar","Encender"];	
var okCancel = ["OK","Cancelar"];	
var yesNo = ["Sí","No"];	
var level = ["Apagar","Bajo","Alto","Medio"];	
var manualAuto = ["Manual","Automático"];	
var homeShop = ["Casa","Tienda"];	
var picPreset = ["Estándar","Dinámico","Natural","Película","Personal"];	
var picColorTemp = ["Fresco","Normal","Caliente","Personalizar"];	
var pic3dNavig = ["Manual","Automático","Semi-Auto"];	
var _3dOptions = ["Modo 3D","3D-a-2D","Interruptor L-R","Profundidad de campo"];	
var pic3DMode = ["Apagar","2D-a-3D","Lado-a-lado","Arriba-Abajo","Intercalado de líneas"];	
var picEcoOptions = ["Ahorro de energía","Sensor de luz","Atenuación local","Atenuador de mezcla"];	
var picGeoOptions = ["Geometría","Posición H.","Posición V.","Reloj","Fase"];	
var picAdWhiteBal = ["Ganancia R","Ganancia G","Ganancia B","Compensación R","Compensación G","Compensación B"];	
var souOptions = ["Predeterminar sonido","Saldo","Delay de audio","TSHD SRS","Control automático de volumen","Tipo SPDIF","Delay de SPDIF","Ubicación de la TV","Idioma del audio","Tipo de sonido","Descripción de audio","Refuerzo de graves","Dolby Digital Plus","Sonido Surrond"];	
var souSpdifType = ["Automático"/*Dolby*/,"PCM","Apagar"];	
var colorSpace = ["Automático","Nativo","Personalizar"];	
var souPresetPara = ["100Hz","500Hz","1.5KHz","5KHz","10KHz"];
var chOptions = ["Explorar canales","Lista de canales","EPG","Organizador de canales","Diagnóstico de canales","Cambio de hora","Subtítulo","Teletexto","Tipo de lista de canales","Servicio de datos","PVR"];	
var chDiagOptions = ["Potencia de señal","Calidad de la señal","Frecuencia (KHz)","ID de servicio","ID de red","Nombre de red"];	
var chScanOptions = ["País","Modo de sintonización","Búsqueda automática","Actualización automática","Exploración manual analógica",["Instalación manual de red alámbrica","Instalación manual de la antena","Sintonización manual del satélite"],"Configuración de antena de satélite","Seleccionar red favorita","Limpiar lista de canales","LCN"];
var favNetDes = "Por favor selecciona tu red favorita";	
var tuner = ["Cable","Antena","Satélite"];	
var passError = "Contraseña incorrecta.\nVuelve a introducirla.";	
var chType = ["Canales analógicos:","Canales digitales:"];	
var chScanStatus = ["Estado: Búsqueda","Estado: Exploración completada","Estado: Exploración cancelada","Estado: Error de exploración"];	
var chScanPara = ["Frecuencia (KHz)","Modulación","tasa de baudios (Ksym/s)","ID de red","Sistema","Sintonía fina","Potencia de señal","Calidad de la señal","Modo exploración","ID de canales"];	
var chScanParaMHZ = ["Frecuencia (MHz)"];	
var chAtvManSys = ["Europa oeste","Europa este","Reino Unido","Francia"];	
var modulation = ["16QAM","32QAM","64QAM","128QAM","256QAM","Automático"];	
var chCleanDes = "¿Deseas limpiar la lista de canales?";	
var chDeletDes = "¿Deseas eliminar el canal?";	
var chOperator = ["Ziggo","UPC","Otros"];	
var chScanType = ["Digital & Analógico","Digital","Analógico"];	
var chScanMode = ["Completo","Configuración avanzada","Rápido"];	
var bookingModes = ["Grabar","Recordatorio"];	
var dayName = ["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"];	
var monthName = ["Ene", "Feb","Mar","Abr","Mayo","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];	
var filter = ["Filtro","Tipo","Tipo de Subt."];	
var chEpgFirstGenre = ["Película","Noticias","Mostrar","Deportes","Niños","Música","Arte","Social","Educación","Entretenimiento","Especial"];	
var chEpgSecondGenre = [["Drama","Detective","Aventura","Ciencia ficción","Comedia","Telenovela","Romance","Formal","Películas para adultos"," "," "," "],["Temas de actualidad","Informe del tiempo","Revista noticiosa","Documental","Debate"," "," "," "," "," "," "," "],["Mostrar","Programa de juegos","Variedades","Programa de entrevistas"," "," "," "," "," "," "," "," "],["Deportes","Eventos especiales","Revistas deportivas","Fútbol","Tenis","Deportes de conjunto","Atletismo","Automovilismo","Deportes acuáticos","Deportes de invierno","Equitación","Artes marciales"],["Niños","Para menores de 6 años","Entretenimiento para niños de 6 a 14","Entretenimiento para niños de 10 a 16","Informativo","Dibujos animados"," "," "," "," "," "," "," "],["Música","Rock","Formal","Folk","Jazz","Musical","Ballet"," "," "," "," "," "],["Arte","Artes escénicas","Bellas artes","Religión","Cultura popular","Literatura","Película","Experimental","Emisión de TV","Medios nuevos","Revistas de arte","Moda"],["Social","Revistas","Economía","Personalidades célebres"," "," "," "," "," "," "," "," "],["Educación","Naturaleza","Tecnología","Medicina","Países extranjeros","Ciencias sociales","Educación superior","Idiomas"," "," "," "," "],["Pasatiempos","Turismo","Artesanías","Automovilismo","Bienestar y salud","Cocina","Publicidad","Jardinería"," "," "," "," "],["idioma original","Blanco y negro","no publicado","Radiodifusión en vivo"," "," "," "," "," "," "," "," "]];	
var chEpgFirstGenreLA = ["Noticias","Deportes","Educativo","Telenovela","Series cortas","Series","Variedades","Reality","Información","Humor","Niños","Erótico","Película","Sorteos, ventas por TV, concursos","Debate/entrevista","Otros"];	
var chEpgSecondGenreLA = [["Noticias","Reportar","Documental","Biografía","Otros","",""],    ["Deportes","Otros","","","","",""],["Educativo","Otros","","","","",""],["Telenovela","Otros","","","","",""],["Series cortas","Otros","","","","",""],["Series","Otros","","","","",""],["Sala","Mostrar","Musical","Creación de","Femenino","Programa de juegos","Otros"],["Reality","Otros","","","","",""],["Cocina","Moda","País","Salud","Viajes","Otros",""],["Humor","Otros","","","","",""],["Niños","Otros","","","","",""],["Erótico","Otros","","","","",""],["Película","Otros","","","","",""],["Sorteos","Ventas por TV","Concursos","Otros","","",""],["Debate","Entrevistas","Otros","","","",""],["Dibujos animados para adultos","Interactivo","Normativa","Religión","Servicios de ingeniería","Otros",""]];	
var chOrganizer = ["Saltar canal","Clasificación de canales","Editar canal","Eliminar canal","Intercambio de canal","Inserción de canal"];	
var chEditPara = ["Nombre de red","Número de canal","Nombre del canal","Frecuencia","Sistema de color","Sistema de sonido"];	
var chSatTitles = ["Tipo de satélite","Configuración de antena de satélite","Seleccionar satélite"];	
var chSatEidtOptions = ["Nombre de satélite","Posición","Alimentación LNB","Frecuencia LNB (MHz)","Entrada DiSEqC","Tono de 22KHz","Emisión de tono","Frecuencia (KHz)","tasa de baudios (Ksym/s)","Polarización","Potencia de señal","Calidad de la señal","Estado de satélite"];	
var chSatAutoPromt = [["Todo","Red"],["Todo","Libre"]];	
var chSatAutoScanOptions = ["Seleccionar satélite","Modo exploración","Canales"];	
var chSatPosition = ["A","B"];	
var chSatLNBFreq = ["Universal",];	
var chSatDiSEqCInput = ["Deshabilitar","A","B","C","D"];	
var chSatTone22KHz = ["Automático","Encender","Apagar"];	
var chSatToneBurst = ["Deshabilitar","Emisión de tono A","Emisión de tono B"];	
var chSatPolarization = ["Horizontal","Vertical"];	
var chSatSetupOptions = ["Tipo de antena","Sintonizador","Frecuencia de banda"];	
var chSatAntennaType = ["Cable único","Universal"];	
var chSatUserBands = ["Banda usuario 1","Banda usuario 2","Banda usuario 3","Banda usuario 4","Banda usuario 5","Banda usuario 6","Banda usuario 7","Banda usuario 8"];	
var chSatOthers = ["Transpondedor"];	
var chSatSetupOthers = ["definido por usuario"];	
var pleaseSelectSat = "¡Primero selecciona el satélite!";	
var subOptions = ["Subtítulo","Idioma del subtítulo digital","Segundo idioma de subtítulo digital","Tipo de subtítulos"];	
var gingaOptions = ["Servicio auto. de datos","Lista de servicio de datos"];	
var ttxOptionsCon = ["Decodificando idioma de la página","Idioma de teletexto digital"];	
var subType = ["Normal","Discapacidad auditiva"];	
var netIntf = ["Ethernet","Conexión inalámbrica"];	
var netConnDes = ["El TV está verificando la conexión de red.\nEspera","¡Prueba exitosa de conexión de red!","Prueba fallida de conexión de red."];	
var netSsidError = "Longitud válida de SSID: 1~32 caracteres. Verifica el SSID.";	
var netOthers = ["Código PIN"];	
var netWlessAutoDes = ["Verifica que el siguiente código PIN esté instalado en el Punto de Acceso antes de pulsar OK.","Pulsa el botón en el Punto de Acceso y 120 segundos después pulsa OK."];	
var netConnRemind = ["¡Contraseña incorrecta!","Conectando. ¡Por favor espera!","Conexión exitosa. ¡Dirección IP obtenida!","Conexión fallida. Revisa la red y vuelve a intentar.","El TV está buscando Puntos de Acceso. \nEspera","¡Sin adaptador inalámbrico conectado al TV!"];	
var netWireIpOptions = ["Ajuste de IP","Tipo de dirección","Dirección IP","Máscara de subred","Gateway predeterminado","DNS primario","DNS secundario"];	
var netWireConnRemind = ["Introduce un valor entre 0 y 255.","¡Conexión exitosa!","Introduce una dirección válida","¡Conexión exitosa!","¡Conexión fallida!","Conectando. ¡Por favor espera!","Introduce un valor entre 1 y 223."];	
var netFlixOptions = ["Desactivar","ESN","Versión Netflix"];	
var netFlixDes = ["¿Deseas desactivar?"," "/*Are you sure that you want to ESN?*/];	
var netUpdateTitle = "Actualización de software";	
var netUpdateDialogTitle = "Actualización de software";	
var netBGDownloadTitle = "Descargando";	
var netUpdateLoadingPrompt = ["Buscando actualizaciones. Espera.","Descargando software... ¡Por favor espera!","¡NO apagues el TV durante la actualización de software!",                            "¡Descargando auto. en segundo plano de actualización de software imprescindible!"];	
var netUpdatePrompt = ["Felicitaciones. La versión de tu software está actualizada.","Se encontró una nueva versión de software XXXX. ¿Deseas descargar ahora? Puede tardar unos minutos dependiendo del estado de tu red.","Ingreso fallido. ¡Revisa y vuelve a conectar!","Falla al recibir datos. Vuelve a intentar más tarde.","Análisis fallido de info. de actualización. Enciende/apaga con el mando a distancia.","Conexión fallida. Revisa la red y vuelve a intentar.","Descarga exitosa de software. ¿Deseas comenzar a actualizar tu TV?","¡Se perdieron los datos! Descarga fallida.","Verificación fallida de archivo de software. Vuelve a intentar.","Problemas de conexión. ¡Verifica y conecta de nuevo!","Actualización fallida. Enciende/apaga con el mando a distancia.","Eliminación inesperada del archivo de actualización. Vuelve a intentar la actualización por red.","Descarga exitosa de software en segundo plano. ¿Deseas actualizar?"];	
var netUpdateButtonText = ["Descargar", "Actualizar", "Luego", "Nunca", "OK","Continuar"];	
var autoDetectPrompt = ["Se encontró una nueva versión de software XXXX. ¿Deseas descargar ahora? Puede tardar unos minutos dependiendo del estado de tu red.","Se encontró una nueva versión de software XXXX. ¿Deseas actualizar ahora?","La actualización por red se abortó la última vez. Debes volver a actualizar.",                        "La descarga de la nueva versión XXXX de software no ha concluido. ¿Deseas continuar ahora?",                        "Software descargado. ¿Deseas actualizar ahora?","Software descargado. ¿Deseas actualizar ahora? TV se actualizará automáticamente la próxima vez si salta ahora."];
var sysOptions = ["Manual electrónico","Menú de idiomas","Temporizador","Bloquear","Ajustes de entrada","Actualización de software","Ubicación","Modo HbbTV","Cookies","Interfaz común","Ajustes avanzados","Reiniciar modo de tienda","Indicador LED","Encendido instantáneo activado","Auto shop mode","Area","Modo demostración"];
var sysResetDes = "¿Confirma si deseas continuar con la acción seleccionada?";	
var sysMenuLangOptions = ["Idioma","Idioma preferido de audio","Segundo idioma preferido de audio"];	
var sysTimerOptions = ["Zona horaria","Nombre de región","Reloj","Temporizador de desconexión","Modo de espera automático", "Región/País","Hijri"];
var sysTimeZone = ["Por transmisión","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00","GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30","GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00","GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00","GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00","GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00","GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];	
var sysTimeZoneLA = ["Como emisor","Región1","Región2","Región3","Región4","Región5"];	
var sysTimeZoneNA = ["Terranova","Atlántico","Este","Central","Montaña","Pacífico","Alaska","Hawaii","Samoa"];	
var sysSleepTimer = ["Apagar","10 Min","20 Min","30 Min","40 Min","50 Min","60 Min","90 Min","120 Min"];	
var sysStandby = ["Apagar","4 Horas","6 Horas","8 Horas"];	
var sysRegionName = ["Madrid","Islas Canarias"];	
var sysClockOptions = ["Sincronización automática","Fecha","Hora","Temporizador de encendido","Temporizador","Encender canal","Temporizador de apagado","Temporizador","Horario de verano"];	
var sysTimer = ["Apagar","Diario","Una vez"];	
var sysInputSet = ["Sin etiqueta","DVD","Blu-ray","HDD","DVDR","Grabar HD","Juegos","VCR","PC","STB digital","STB digital HD","Cámara","Grabador","Otros"];	
var sysAvVideoInput = ["Automático","RGB_CVBS","RGB","CVBS","S-Video"];	
var sysUpdate = ["Por USB","Por red","Por canal"];	
var sysUpdateDes = [" "," "," ","¡No se encontró nuevo software por aire!","Se encontró una nueva versión de software XXXX. ¿Deseas actualizar ahora?","Inserta la unidad USB.","Verificación fallida de archivo de software. Vuelve a intentar.","Actualizando. Esto tardará unos minutos. Después el TV se reiniciará auto.","Actualización exitosa del software.\nEl TV se reiniciará auto. después.","Se encontró una nueva versión de software XXXX. ¿Deseas descargar ahora? Puede tardar unos minutos dependiendo del estado de tu red.","Descargando","Descarga exitosa de software. ¿Deseas comenzar a actualizar tu TV?","¡Actualización fallida!","Buscando archivos de actualización","Actualización exitosa de software.\nReinicia el TV ahora."];	
var sysProductInfo = ["Versión actual","nombre del producto","Nombre del fabricante","Número de chasis"];	
var sysCiDes = ["Sin tarjeta CI."];	
var sysAdOptions = ["Registrar DivX(R)","Dar de baja DivX(R)","Enlace T","Error de autorización","Confirmación de baja","Confirmación de alquiler","Alquiler vencido"];	
var sysRegistDes = ["Debes registrar tu dispositivo para reproducir los videos protegidos DivX.","Código de registro:","Regístrate en http://vod.divx.com"];	
var sysDregistDes = ["Código de cancelación de registro:","Cancela el registro en http://vod.divx.com","¿Deseas continuar con tu registro?"];	
var mediaAuthorization = ["Tu dispositivo no está autorizado para reproducir este video protegido DivX(R)."];	
var deregistrationConfrimation = ["Tu dispositivo ya está registrado.","¿Estás seguro de que deseas cancelar el registro?"];	
var rentalConfirmation = "El alquiler del DivX(R) ha consumido XXXX de YYYY visualizaciones. ¿Continuar?";	
var rentalExpired = "El alquiler del DivX(R) ha consumido XXXX de YYYY visualizaciones. El alquiler del DivX ha caducado.";	
var parentalRatingLA = ["Clasificación de Protección de menores","Clasificación de edades","Clasificación de contenido"];	
var parentalRatingNA = ["Clasificación de Protección de menores","Bloquear contenido sin clasificar","Clasificación de edades","Clasificación de contenido","EE.UU.","Canadá","Ajustes RRT","Reiniciar RRT"];	
var parentalRatingOptionUS = ["EE.UU.","Clasificación de TV","MPAA"];	
var sysTVRatingUS = ["TV-Y","TV-Y7","TV-PG","TV-14","TV-MA"];	
var sysMPAAUS = ["G","PG","PG-13","R","NC-17","X"];	
var parentalRatingOptionCanada = ["Canadá","Inglés Canadá","Francés Canadá"];	
var sysCanadaEng = ["C","C8+","G","PG","14+","18+"];	
var sysCanadaFre = ["G","8años+","13años+","16años+","18años+",""];	
var sysResetRRT = ["Confirme si desea reiniciar RRT"];	
var ageRatingOptions = ["L","10","12","14","16","18"];	
var contentRatingOptions = ["Apagar","Drogas","Violencia","Sexo","Violencia y drogas","Sexo y drogas","Violencia y sexo","Violencia, sexo y drogas"];	
var sysLockOptions = ["Canal bloqueado","Intervalo de bloqueo","Clasificación de Protección de menores","Bloquear entrada","Bloquear panel frontal","Bloquear instalación","Cambiar contraseña","Volumen máx","Limpiar todo"];	
var sysTimeIntervals = ["Tipo de bloqueo","Hora de inicio","Tiempo de finalización"];	
var sysRatingOptions = ["Ninguna","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","Clasificación X (España)"];	
var changePass = ["Cambiar contraseña","Nueva contraseña","Confirmar contraseña"];	
var changePassDes = ["Contraseña incorrecta.\nVuelve a introducirla.","La contraseña no coincide.\nVuelve a introducirla.","Definición exitosa de contraseña.","Contraseña muy débil.\nVuelve a introducirla."];	
var sysPowerOnChOptions = "Seleccionar modo";	
var sysPowerOnCh = ["Último estado","Seleccionar usuario"];	
var netWlessSecu = ["Abrir","WEP","WPA/WPA2-PSK"];	
var netWlessSecu2 = ["Ninguna","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK","Incompatible"];	
var netWlessSecu3 = ["Ninguna","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Incompatible"];	
var netOptions = ["Conexión a Internet","Interfaz","Ajuste de conexión inalámbrica","Configuración de IP","Información","Prueba de conexión","DLNA","TV Remote","Ajustes de Netflix","Visualización WiFi","Tipo de dirección","Dirección IP","Máscara de subred","Gateway predeterminado","DNS primario","DNS secundario","SSID","BSSID","Inserta SSID:","ID de usuario"];	
var chEditDes = ["¡Número duplicado de canal!","¡Presiona el botón Rojo para eliminar el carácter actual!","Números inválidos de canal."];	
var chEpgNoProgram = "Sin info. de programas ahora. Primero busca canales.";	
var chEpgWords = ["Guía de programas","Sin datos de programas.","¡Canal bloqueado!","No se ha encontrado ningún detalle de programa.","sin título de programa."];	
var chEpgBooking = ["Info de horario", "Número de canal","Fecha de inicio.","Hora de inicio","Tiempo de finalización","Tipo de repetición","Tipo de horario","Agregar horario","Remplazar","Cambiar","Agregar/Modificar"];	
var epgHotKey = ["Día anterior","Día siguiente","Filtro","Lista de horarios","Agregar horario"];	
var chEpgBookRemind = ["Hora de inicio incorrecta","Tiempo de finalización incorrecto","Horario duplicado","Guardado exitoso.","Eliminación exitosa."];	
var chSchePara = ["Lista de horarios","Hora de inicio","Fecha de inicio.","Título de programa.","Nombre del Canal","Duración","Repetir","Calendario","Editar","Eliminar"];	
var dateTimer = ["Una vez","Diario","Semanal"];	
var scheduleDeleteReminds = "¿Deseas eliminar este horario?";	
var scheduleNoLists = "Sin lista de horarios. Pulsa la tecla \"Roja\" para agregar uno.";	
var chListWords = ["Lista de canales","Seleccionar lista","Modo de sintonización","Agregar a Favoritos","Eliminar","Selecciona la lista de canales","Selecciona el modo de sintonizador","Intercambiar"];	
var chListType = ["Todo","Digital","Analógico","Radio","Libre","Favoritos"];	
var chAutoScanOptions = ["Selecciona tu operador","Tipo de canal","Búsqueda automática"];	
var souSoundType = ["Inválido","Mono","Mono","Estéreo","Estéreo","SAP","SAP","Dual1","Dual2","Dual2","Nicam Mono","Estéreo Nicam","Nicam dual1","Nicam dual2","Nicam dual","Mono","LL","RR","LR"];	
var souPreset = ["Música","Película","Voz","Estándar","Personal"];	
var picAdRgbMode = ["Apagar","Sólo Rojo","Sólo Verde","Sólo Azul"];	
var picAdOptions = ["Reducción de ruido","MPEG NR","Modo RGB","Contraste dinámico","Claridad de moviento de LED","Tono piel","Modo cine","Modo juego","Temperatura de color","Balance de blancos","Congelar imagen","Ennegrecer","Sobredesviación","GAMMA","Modo HDMI","Balance de blancos 10P","Expansor de color","Reducir difuminación","Reducir temblor","Espacio de color","Claridad de movimiento"];	
var pic10Pwhite = ["Intervalo","Rojo","Verde","Azul","Reajustar","Color","Amarillo","Cian","Magenta"];	
var picMotionClarity = ["Modo de movimiento","Interpolación de movimiento","Claridad de moviento de LED","Reducir difuminación","Reducir temblor","Reajustar"];	
var picMotionMode = ["Película","Suave","Limpiar","Deportes","Caliente"];	
var picResetDes = "Se reiniciarán todos los ajustes personales. ¿Confirma si deseas continuar con la acción seleccionada?";	
var pic10PReset = "¿Deseas reajustar el balance de blancos 10P?";	
var picMotionReset = "¿Deseas reajustar la claridad de movimiento?";	
var picColorSpaceReset = "¿Deseas reajustar el espacio de color?";	
var picOptions = ["Predeterminar imagen","Luz de fondo","Brillo","Contraste","Saturación","Matiz","Nitidez","Temperatura de color","Modo de pantalla","Formato automático","Realce para deportes","3D","Navegación 3D","Ajustes ECO","Geometría","Ajustes avanzados","Reiniciar imagen","Micro oscurecimiento"];	
var picSize = ["Formato 16:9", "Formato 4:3", "Formato 14:9", "Cinerama","Zoom 16:9", "Acercamiento 16:9","Zoom 14:9","Ampliar zoom","Zoom ancho","Zoom 2","Zoom ancho 2","Ajuste nativo de pantalla","Punto por punto","Original","Panorama"];	
var others = ["Volumen","Transmitir","Contraseña","Estado","Guardar","Remplazar","Comenzar","Salir","Buscar","Eliminar","Ninguna","Automático","Explorar","Seguridad","Conectar","Actualizar","Reintentar","Detener","Configuración","Canales","Editar","Insertar","Señal","Concluir","Estéreo","Audio","Fuente","Sin audio","Sugerencias","Reajustar","Caliente","Configurar","Tienda","Usuario","Cerrar teclado","Modo de seguridad","Diario","Lista PVR"];	
var direction = ["Izquierda","Derecha","Arriba","Abajo"];	
var audioType = ["MPEG","DOLBY AUDIO"/*"AC3"*/,"MPEG4","AAC", "DOLBY AUDIO"/*"AC3P"*/,"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD"," "," "," "," "," "," ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2","HE-AAC_V4","Desconocido"];	
var soundChannels = ["Desconocido","Mono","Sub","Dual Mono","Estéreo","Estéreo Sub","Estéreo dolby envolvente","Envolvente de 2 canales","Envolvente","Canal 3.0","Canal 4.0","Canal 5.0","Mono Lfe","Dual Mono Lfe","Estéreo Lfe","Envolvente de 2 canales Lfe","Envolvente Lfe","Canal 3.1","Canal 4.1","Canal 5.1","Canal 7.1","Estéreo combinado","Mono Fmrdo","Estéreo Fmrdo","Mono Fm Mono Nicam","Mono Fm Estéreo Nicam","Mono Fm Nicam Dual","Izquierda","Derecha","Otros"];	
var prompts = ["Ajusta la mejor configuración de imagen para tu ambiente de visualización.","Ajusta niveles de brillo. Cuanto más próximo a 100, más brillante.","Ajusta niveles de contraste. Cuanto más próximo a 100, diferencias más marcadas entre oscuros-brillantes en la imagen.","Ajusta niveles de saturación. Cuanto más próximo a 100, colores más fuertes.","Ajusta niveles de nitidez. Cuanto más próximo a 100, detalles más nítidos.","Ajusta niveles de luz de fondo. Cuanto más próximo a 100, pantalla más brillante.","Ajusta niveles de tinte. Este ajuste modifica la tonalidad de color.","Selecciona el formato de imagen que mejor se ajuste al programa que estás viendo.","Ajustar opciones de ahorro de energía.","Ajustar la geometría de la pantalla cuando se conecta a una PC.","Seleccionar más ajustes avanzados de imagen.","Restaurar los ajustes predeterminados de imagen.","Selecciona tu modo de sonido favorito.","Ajustar el balance de volumen entre los canales derecho e izquierdo.","El sistema de recuperación de sonido TruSurround HD ofrece un alto rendimiento de sonido y claridad con frecuencias bajas y altas.","Formato de Interfaz Digital conectado a la salida de sonido digital del TV y al equipo de sonido de cine en casa.","Selecciona el idioma del audio que prefieras.","Permitir que personas con problemas de vista disfruten de los programas de televisión.","Prueba la imagen, el sonido y la señal de tu TV.","Selecciona el tipo de lista de canales que se ajusten a la señal de tu TV.","Selecciona el idioma de los subtítulos de programas que aparecen en la parte inferior de la pantalla.","Ver texto e imágenes del canal actual.","Digital Living Network Alliance. Disfruta tu música, imágenes y vídeos en tus otros dispositivos, como tu PC, mediante tu red doméstica.","Mira los contenidos de tu teléfono inteligente en tu TV y usa tu teléfono como mando a distancia para tu TV.","Mira los contenidos de un dispositivo Android compatible con Miracast en la pantalla de tu TV.","Coloca un candado en tu TV.","Selecciona un nombre para tu dispositivo.","Selecciona tu ambiente de visualización.","Restaurar todos los ajustes del sistema a los ajustes de fábrica.","Switch off sports mode for more options.","Enhance the environmental contrast","A special mode to enjoy sport games","Enjoy more CEC functions."];
var initialTitle = ["Bienvenido","Ajuste inicial"];	
var initialPrompt = ["Todo un mundo de emocionantes experiencias te está esperando. ¡Haz tus ajustes iniciales ahora!","Selecciona tu idioma:","Selecciona tu país:","Selecciona tu ubicación:","Selecciona el tipo de conexión a la red:","Selecciona el modo de conexión a red por cable:","Conexión fallida a xxxxxxxxx. Conecta el dispositivo de acuerdo al siguiente diagrama o presione el botón izquierdo para reiniciar.","Conectado a xxxxxxxxx. Presiona el botón derecho para continuar.","1)Es posible que tu TV ya tenga un adaptador inalámbrico incorporado\n 2)O, si dispone de un adaptador USB inalámbrico, conéctalo a tu TV.  Luego, selecciona Red inalámbrica en el modo de conexión.","Búsqueda. Por favor espera...","¡Sin adaptador inalámbrico conectado al TV!","Asegúrate de que el siguiendo código PIN esté instalado en el Punto de Acceso antes de pulsar el botón 'Siguiente' que se muestra abajo.","Presiona el botón en el AP durante 120 segundos antes de pulsar el botón Derecha.","WPS (Ajuste Wi-Fi protegido)","PIN (Número de Identificación Personal)","PBC (Configuración Pulsar Botón)","Sólo es posible acceder al siguiente contenido con una conexión de red. ¿Deseas saltar el ajuste de red?","Hay nuevas actualizaciones de software para descargar. Esto puede tardar unos minutos dependiendo del estado de la red.","La actualización del software de tu TV te permite disfrutar de las últimas funciones y servicios.","No podrás disfrutar de las últimas funciones y servicios. ¿Deseas obviar la actualización de software?","Pulsa el botón Derecha para continuar.","No apagues el TV durante la actualización ya que esto puede dañarlo.","Si no deseas actualizar, selecciona NO.","Actualizando, por favor espera.","También puedes actualizar el software en SISTEMA/SOFTWARE/ACTUALIZAR.","El país seleccionado requiere ajuste de contraseña.\nDefine la contraseña para tu TV y confirma.","Contraseña muy débil.\Usa otros caracteres.","¡Felicitaciones! Ajuste inicial completado. Puedes modificar tu configuración mediante el menú principal y los submenús relacionados.","Selecciona el modo de seguridad:","Selecciona el modo de conexión a la red inalámbrica:","red"];	
var initNetCabAndDonRe = ["Sin conexión a red de cable. Enchufa un cable de red.","Sin adaptador inalámbrico incorporado o sin adaptador USB inalámbrico disponible."];	
var initChPrompt = ["Instalación de canales de TV","Selecciona el tipo de búsqueda por aire.","Procesando sintonía automática…","Se encontraron los siguientes canales por aire:","Selecciona el tipo de búsqueda por cable.","Selecciona un operador de la siguiente lista.","Configura la info. de búsqueda.","Se encontraron los siguiente canales por cable:","Selecciona un operador de la siguiente lista","Selecciona satélites para buscar o edita el satélite seleccionado","Selecciona los parámetros del satélite","Se encontraron los siguientes canales, y la búsqueda de canales puede volver a realizarse en Canal/Búsqueda de canal"];	
var initClockPrompt = ["¡Obtén la hora proporcionada por la red!","Fija la Fecha y Hora:"];	
var initialOptions = ["Ambiente","Configuración de red","Actualización de software","Instalación de canales","Reloj"];	
var initialHotkeys = ["Atrás","Seleccionar","Siguiente"];	
var initLocations = ["Casa","Tienda","Tienda con demo"];	
var initNets = ["Conexión alámbrica","Conexión inalámbrica","No tengo una conexión de red"];	
var initWireManuals = ["Dirección IP","Máscara de subred","Gateway predeterminado","DNS primario","DNS secundario"];	
var initSoftUpdates = ["Actualizar ahora","Actualizar más tarde"];	
var initChannelIns = ["Continuar","No deseo instalar canales"];	
var initChScanTypes = ["Digital & Analógico","Digital","Analógico","No deseo buscar"];	
var initChDvbts = ["Canales ATV por aire:","Canales DTV por aire:"];	
var initChDvbcs = ["Canales ATV por cable:","Canales DTV por cable:"];	
var initChDvbss = ["Canales por satélite:"];	
var initChDvbSOther = ["No deseo buscar satélites"];	
var initEndConnectedStatus = ["Desconectado","WiFi conectado","Conexión alámbrica activada"];	
var initEndInstallations = "XXXX canales instalados";	
var initEndUpdate = ["Actualizado"];	
var audioScenes = ["Escritorio","Montaje en pared"];	
var screenSavers = ["Sin info. de programas ahora. Primero busca canales.","¡Sin señal!","Codificado","Sólo datos","Programa de audio","Sin audio ni video","No disponible","Sin teletexto","Sin datos de programas.","¡Programa bloqueado!","¡Programa bloqueado!\nPulsa OK e introduce la contraseña.","No se ha encontrado ningún detalle de programa.","Programa no apropiado para menores.\nPulsa OK e introduce la contraseña.","¡Canal bloqueado!","¡Canal bloqueado!\nPulsa OK e introduce la contraseña.","¡Entrada bloqueada!\nPulsa OK e introduce la contraseña.","¡Incompatible!","Servicio no disponible en este momento","¡Entrada bloqueada!","sin título de programa.","Sin función",    "Sin subtítulos"];	
var chBookingPromt = ["El canal actual tiene una grabación programada. La TV comenzará a grabar.","Se encontró una grabación programada.\n Cambia a XXXX para grabar","El canal actual tiene un recordatorio.","Se encontró un recordatorio de programación.\n Cambia a XXXX"];	
var timeUnit = ["Seg.","Min"];	
var ciPromt = ["Los datos de red se han modificado. Para actualizar haz una búsqueda de actualizaciones.",];	
var othersPromt = ["Por favor espera...",];	
var menuOptions = ["Imagen","Sonido","Canal","Smart TV","Red","Sistema","Soporte"];	
var optionOptions = ["Predeterminar imagen","Predeterminar sonido","Congelar imagen","Enlace T","Cambio de hora","PVR","Lista de horarios","Configuración","demo"];	
var optionTLinkPromt = [["Encendido automático","Modo de espera automático","Menú de la guía"],["encendido","modo de espera","Volumen del amplificador"]];	
var powerPromt = ["¡El TV se apagará pronto!\n Pulsa cualquier botón para cancelar."];	
var ttxLanguage = ["Europa oeste","Europa este","Ruso","Árabe/Hebreo","Farsi","Árabe","Bielorruso","Griego","Turco"];	
var ttxOptions = ["Revelar","Subpáginas de ciclo","Idioma","Página de alarma","Últimas noticias"];	
var weekday = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];	
var lcnConfflict = "Este programa tiene problemas de recepción. Hay otra versión disponible en el canal %d";	
var inShopMode = "Tu TV está en modo de tienda. Para activar el modo de hogar selecciona 'Sistema' y cambia 'Ubicación' en el menú.";	
var nitRefresh = "Los datos de red se han modificado. ¿Deseas iniciar la búsqueda de actualizaciones?";	
var picHDMIMode = ["Automático","Gráfico","Video"];	
var glassRemind = ["Ajusta tus gafas 3D con tu TV\n(Pulsa y sostén el botón ENCENDIDO en las gafas 3D).","Tus gafas 3D están conectadas a tu TV.",""];	
var pvrRemind = ["No retires la unidad USB ni desconectes la alimentación."];	
var pvrConName = ["PVR","Info del programa:",["Nota: Para grabar un canal HD, selecciona un dispositivo USB (con velocidad > 5,0MB/seg); para grabar un canal SD, selecciona un dispositivo USB (con velocidad > 3,0MB/seg).","El video grabado se guardará en la carpeta \"pvr\"."],"Detener","Grabar","Hora","Minuto","Duración","Sugerencias","Usa las flechas para fijar la duración de la grabación."];	
var pvrDisRemind = "Inserta una unidad USB para grabar.";	
var pvrRemindWords = ["¿Deseas concluir?","¿Deseas detener la grabación y explorar los archivos grabados?","Unidad USB retirada.","Memoria insuficiente.","Sin archivos grabados. Inicia para grabar.","PVR incompatible con canal codificado.","Función no disponible","Guardado exitoso.","¿Deseas detener la grabación y cambiar la fuente de entrada?","La TV terminará la grabación en curso. ¿Deseas concluir?","La grabación PVR requiere señal de TV para funcionar adecuadamente. Verifica la señal."];	
var pvrChangeCh = ["¿Deseas cambiar de canal?","¿Deseas detener la grabación y cambiar de canal?"];	
var pvrChangeToPIN8 = ["¿Deseas cambiar la fuente del dispositivo conectado a la entrada SCART?",    "¿Deseas detener la grabación y cambiar la fuente del dispositivo conectado a la entrada SCART?"];	
var pvrChangeToCEC = ["¿Desea cambiar la fuente del dispositivo conectado a la entrada HDMI?",   "¿Deseas detener la grabación y cambiar la fuente del dispositivo conectado a la entrada HDMI?"];	
var pvrGuideJump = ["¿Deseas acceder a la EPG?","¿Deseas detener la grabación y acceder a la EPG?"];	
var pvrMediaJump = ["¿Deseas acceder a Multimedia?","¿Deseas detener la grabación y acceder a Multimedia?"];	
var timeshiftExtra = ["¿Deseas detener el cambio de hora y cambiar de canal?","¿Deseas detener el cambio de hora y cambiar la fuente del dispositivo conectado a la entrada SCART?","¿Deseas detener el cambio de hora y cambiar la fuente del dispositivo conectado a la entrada HDMI?","El cambio de hora no es posible en los canales codificados.","¿Deseas detener el cambio de hora y acceder a la EPG?","¿Deseas detener el cambio de hora y acceder a Multimedia?","¿Deseas detener el cambio de hora y cambiar la fuente de entrada?","Inserta una unidad USB para grabar.","El tamaño de la unidad USB es insuficiente.","El TV terminará el actual cambio de hora. ¿Deseas concluir?"];	
var timeshiftStatus = ["Retroceso rápido","Detener","Reproducir","Pausa","Avance rápido"];	
var pvrPowerOffRemind = ["Grabación en modo de espera","Modo de espera","El TV está grabando. ¿Deseas que siga grabando cuando esté en modo de espera?"];	
var timeshiftInitTitle = "Ajustar dispositivo USB.";	
var timeshiftInitReminds = ["Este asistente sirve para configurar la unidad USB para el cambio de hora. Selecciona el modo de configuración.", "Para mejorar el rendimiento, te recomendamos formatear el dispositivo USB. Esto borrará todos los datos.", "Selecciona el tamaño del archivo para el cambio de hora.", "Formateando", "Memoria insuficiente.", "Creando archivo para cambio de hora", "Probando velocidad", "¡La velocidad de la unidad USB es muy lenta (< %f MB/seg) para la función cambio de hora!", "La unidad USB está lista para el cambio de hora. Te recomendamos cambiarla (a velocidad > %f MB/seg) para un mejor funcionamiento.", "La unidad USB está lista para el cambio de hora."];	
var timeshiftInitButtons = ["Formato","Saltar","Cancelar","OK","Concluir","Salir"];	
var timeshiftInitOther = ["Velocidad de la unidad USB:","MB/seg"];	
var selectChoice = "¿Confirma si deseas continuar con la acción seleccionada?";	
var chAtvStore = "Guardar como XXXX";	
var chEpgFirstGenreUK = ["Película","Noticias y hechos","Entretenimiento","Deportes","Niños","Educación","Estilo de vida","Drama"];	
var homePageTitleList = ["APPS","TV","VÍDEOS","Página de inicio"];	
var homePageFavAndAllName = ["Apps favoritas","Todas las aplicaciones"];	
var homePageBackUp = ["Manual electrónico","Guía Encendida"];	
var homePageRemind = ["Funciones completas disponibles sólo con conexión a la red.","Tu TV todavía no tiene canales. Programas disponibles después de la búsqueda de canales.","Sin programas","¿Buscar canales ahora?"];	
var homePageHistory = ["Historial"];	
var miracastTitle = ["Visualización WiFi","Dispositivo TCL"];	
var miracastRemind = ["La visualización WiFi te permite compartir la pantalla y sonido de un dispositivo, como tu teléfono o tableta, con tu TV, de forma inalámbrica (sin cables). Esto te permite ver en tu TV, al mismo tiempo, lo que tu teléfono o tableta muestran. Por ejemplo, puedes reproducir un vídeo en tu teléfono y verlo simultáneamente en tu TV, o puedes usar tu tableta como control para juegos y ver el contenido en la pantalla grande de tu TV.","La visualización WiFi en el TV está lista. Puedes comenzar a compartir la pantalla de tu dispositivo con tu TV ahora.","Conectando. ¡Por favor espera!","¡Conexión fallida!","Conexión fallida. Revisa la conexión."];	
var homePageLittleWin = ["Configuración","Multimedia","Canales Fav","Smart TV","EPG"];	
var hbbtvStopRemind = ["¿Deseas detener la reproducción?"];	
var colorSystem = ["Automático","PAL","SECAM","NTSC"];	
var deviceTitleTipsText = "Pulse ≡ para más información";	
var emptyListInfo = "Sin dispositivo USB conectado al TV.";	
var optionVideoListArray_1 = ["Predeterminar imagen", "Predeterminar sonido", "Modo de reproducción", "Modo de pantalla", "Modo 3D",   "Interruptor L-R", "Profundidad de campo", "Subtítulo", "Pista de sonido", "Título", "Capítulo", "Info"];	
var optionVideoListArray_2 = ["Predeterminar imagen", "Predeterminar sonido", "Modo de reproducción", "Modo de pantalla",   "Subtítulo", "Pista de sonido", "Título", "Capítulo", "Info"];	
var bottomTipsText = ["Reproducir/Pausa", "Retroceso rápido", "Avance rápido", "Lista de reproducción", "Configuración"];	
var picturePresetArray = ["Estándar", "Dinámico", "Natural", "Película", "Personal"];	
var videoPlayModeArray = ["Repetir todo", "Repetir uno", "Normal"];	
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Zoom ancho", "Zoom 2", "Zoom ancho 2", "Ampliar zoom", "Automático"];	
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "Zoom 14:9", "Zoom 16:9", "Acercamiento 16:9", "Automático"];	
var Mode3DArray = ["Apagar", "2D-a-3D", "Lado-a-lado", "Arriba-Abajo", "Intercalado de líneas"];	
var videoOptionListArray = ["Apagar", "Pista", "Subtítulo", "Título", "Capítulo"];	
var subMenuTitleText = "Subtítulo";	
var langMenuTitleText = "Idioma del audio";	
var titleMenuTitleText = "Título";	
var mode3DMenuTitleText = "Modo 3D";	
var langInfoText = "Pista";	
var STOP_RESUME_INFO = "Detener-Continuar";	
var playListName = "nombre";	
var eb_tips = "Sugerencias";	
var ok_button = "OK";	
var eb_info = ["Error en la decodificación de audio.", "Error en la decodificación de video.", "Formato de audio incompatible.",    "Formato de vídeo incompatible.", "No es posible abrir este archivo.", "Error en la reproducción. Vuelve a intentar.",   "Formato de archivo incompatible.", "¡Vaya! El jugador ha detenido la ejecución.",   "Ruta de archivo inexistente o inválida.\n Reinserta el dispositivo de memoria y vuelve a intentar.",   "¿Continuar juego desde el anterior\n punto de reproducción?"];	
var picturePlayErrorTips = ["¡¡¡Falló la carga!!!", "¡¡¡La fotografía es demasiado grande!!!", "¡Error de red!", "Error de hilo de enlace", "Error de param.", "Error desconocido"];	
var frameTitleText = "Dispositivo nuevo";	
var eb_quit_info = "¿Deseas salir?";	
var eb_yes = "Sí";	
var eb_no = "No";	
var offinfo = "Apagar";	
var naInfo = "Nulo";	
var consoleInfoArray = ["Retroceso rápido", "Avance rápido", "Reproducir/Pausa", "Lista de reproducción"];	
var cantOperateText = ["Función incompatible."];	
var chapterChangeInfo = "Sólo están disponibles los Capítulos de 1 a XXXX .";	
var metaDataArray = ["Título/Edición de metadatos:", "Capítulo de metadatos:", "Audio de metadatos:", "Subtítulo de metadatos:"];	
var metaTitleInfo = "Título";	
var metaChapterInfo = "Capítulo";	
var videoLoadingInfo = "Analizando...";	
var listLoadingInfo = "Cargando...";	
var pgInfo = "Valoración de ley:";	
var fileNameText = "Nombre";	
var fileDateText = "Fecha";	
var fileSizeText = "Tamaño";	
var fileDurationText = "Duración";	
var fileDirectorText = "Director";	
var fileCopyrightText = "Derechos de autor";	
var fileArtistText = "Artista";	
var fileAlbumText = "Álbum";	
var fileGenreText = "Género";	
var fileYearText = "Año";	
var fileGenreText = "Género";	
var mainListArray = ["Todo", "Imagen", "Video", "Música"];	
var sortArray = ["Nombre", "Fecha"];	
var parserArray = ["Normal", "Recursivo"];	
var emptyTipsInfo = "¡Vaya! Se encontró un archivo incompatible.";	
var emptyFolderInfo = "¡Vaya! Se encontró un archivo incompatible.";	
var sortName = "Clasificar por";	
var parserName = "Analizador";	
var divx_str1 = "Registrar DivX(R)";	
var divx_str2 = "Dar de baja DivX(R)";	
var infor_str = "Info";	
var quickMenuEmptyText = "Sin opciones disponibles.";	
var musicSoundPresetArray = ["Estándar", "Película", "Música", "Voz nítida", "Personal"];	
var musicInformationArray = ["Nombre", "Artista", "Álbum", "Género:", "Año:", "Duración:"];	
var playListName = "nombre";	
var playTipsInfo = ["Reproduciendo el primer archivo.", "Reproduciendo el último archivo."];	
var musicNameInfo = "Nombre";	
var musicArtistInfo = "Artista";	
var musicAlbumInfo = "Info";	
var optionSoundPresetInfo = "Predeterminar sonido";	
var optionBGMInfo = "Reproducción en segundo plano";	
var optionAudioOnlyInfo = "Sólo audio";	
var optionInfoText = "Info";	
var remotePhoneConnecte = "XXXX se ha conectado al TV.";	
var tvRemoteTitle = "TV Remote";	
var tvRemoteDeveloper = "Aplicación desarrollada por TCL";	
var tvRemoteDeviceTitle = "Nombre del dispositivo:";	
var remoteOption = ["Compartir Archivos","Control remoto","Ayuda","Acerca de","Smart Connect"];	
var remotebottom = "Descarga \"TV Remote\" en tu teléfono";	
var remoteStage = ["Android","iOS"];	
var sharingReminds = ["Compartiendo fotos, vídeos y música con tu TV desde tu teléfono.","Pasos: \n   1. Pulsa \"TV Remote\" en tu teléfono. Conecta tu teléfono con tu TV mediante la misma red WiFi;\n   2. Pulsa \"Compartir Archivos\" para explorar archivos multimedia;\n   3. Envía el archivo al TV para reproducirlo (con una de las siguientes opciones)","a) Arrastra y suelta la carpeta/archivo al icono TV en la parte superior de la pantalla;\n      b) Oscila el teléfono hacia el TV para reproducir el primer archivo;\n      c) Reproduce el archivo en el teléfono y pulsa el icono compartir TV;","4. Mientras se reproduce en el TV, sacude el teléfono para reproducir el anterior o el siguiente archivo."];	
var controlReminds = ["Usa el teléfono como mando a distancia para tu TV."," ","Pasos: \n   1. Pulsa \"TV Remote\" en tu teléfono. Conecta tu teléfono con tu TV mediante la misma red WiFi;\n   2. Pulsa \"Control remoto\" para operar tu TV."];	
var helpDeviceWords = "Interacción multipantallas.";	
var helpBottom = "En la era de la tecnología de nube, los dispositivos inteligentes como teléfonos y TVs están mutuamente conectados. Comparte tus archivos en multipantallas con tu familia y controla tu TV desde tu teléfono.";	
var helpReminds = ["Preparativos\n   1. Descarga e instala \"TV Remote\" desde Google Play o Apple Store.\n   2. Conecta tu teléfono con tu TV mediante la misma red WiFi."," ","Teléfono recomendado\n   1. CPU: superior a 800MHz\n   2. Almacenamiento: mínimo 80MB de espacio disponible"," ","Descargo de responsabilidad\n   Si \"TV Remote\" no está disponible en su teléfono, contacte al fabricante de su teléfono."];	
var helpButtons = ["Anterior","Siguiente"];	
var aboutReminds = ["TV Remote","Aplicación desarrollada por TCL"];	
var aboutExit = "Salir";	
var smartReminds = ["Conexión rápida e inteligente entre tu TV y tu teléfono."," ","Pasos \n   1. Conecta tu TV y su teléfono a la misma red LAN. Pulsa \"TV Remote\" en tu teléfono.\n   2. Pulsa \"Smart Connect\" para escanear el código QR.\n   3. Si la TV está transmitiendo, pulsa por 4 seg. la tecla INFO en el control remoto de la TV y aparecerá un código QR en toda la pantalla.",];	
var smartQRReminds = ["Pulsa \"Smart Connect\" en \"TV Remote\" en tu teléfono y escanea el código QR para conectar rápidamente tu TV y tu teléfono.","El código QR contiene info. de la cuenta LAN. Guárdalo bajo protección."];	
var consoleTipArray = ["Anterior","Siguiente","Consola","Lista de reproducción"];	
var optionInfoArray = ["Predeterminar imagen","Modo de reproducción","Duración","Efecto","Info"];	
var playModeArray = ["Normal","Mezclar","Repetir"];	
var durationArray = ["Corto (5s)", "Medio (10s)", "Largo (15s)"];	
var effectArray = ["Ninguna", "Rotar", "Limpiar derecha", "Limpiar izquierda", "Limpiar arriba", "Limpiar abajo", "Dentro del cuadro", "Fuera del cuadro", "Aleatoria"];	
var infoArray = ["Nombre:","Tamaño:","Fecha:","Ubicación"];	
var picturePresetBarTitleInfo = "Predeterminar imagen";	
var picturePresetBarArray = ["Estándar","Dinámico","Estudio","Película","Personal"];	
var upTipsInfo = "Mover imagen";	
var consoleTipsArray = ["Consola","Anterior","Siguiente","Lista de reproducción","Configuración"];	
var pictureMoveTipsArray = ["Vuelve a pulsar DERECHA para reproducir la siguiente imagen.","Vuelve a pulsar IZQUIERDA para reproducir la siguiente imagen.","Pulsa ABAJO para mostrar la lista de reproducción."];	
var optionPvrListArray = ["Predeterminar imagen","Predeterminar sonido", "Modo de pantalla", "Modo 3D", "Subtítulo", "Pista de sonido", "Info"];	
var titleSpanFirstArray = ["Control y conexión","Funcionamiento básico","Aplicaciones","TV","Configuración","Preguntas frecuentes"];	
var titleSpanSecondArray = [["Control remoto","Teclas del panel","Fácil de navegar","Conexión de la TV","Conexión de la TV","Conexión de la TV","Conexión inalámbrica"],["Arrancador","Barra de estado","Fuente"],["Apps ejecutadas","Multimedia","TV Remote"],["Ajustar canal y volumen","Lista de canales","EPG","Instalación de canales","Canales favoritos"],["Ajuste de imagen","Ajustes de sonido","Ajuste de canales","Actualización de software","Idioma","Protección de menores"],["Preguntas frecuentes","Preguntas frecuentes","Resolución de problemas","Resolución de problemas","Términos y condiciones"]];	
var contentSpan1_1Array = [["ALIMENTACIÓN:","FUENTE:","AJUSTES:","OPCIÓN:","ATRÁS:","Info.:","INICIO:","SALIR:","LISTA:"],    ["Enciende o activa el modo de espera",        "Selecciona la fuente de entrada.",        "Para ver el menú de Ajustes",        "Para ver el menú de Opciones",        "Regresar al menú anterior o salir de una app en ejecución",        "Muestra info de programas",        "Para acceder a la página de inicio del Smart TV",        "Regresar al menú anterior o salir de una app en ejecución",        "Muestra la lista de canales"]];	
var contentSpan1_2Array = ["Canal anterior","Siguiente canal","Subir volumen","Bajar volumen","Ir a página de inicio","Confirmar la opción","Modo de espera/Encendido"];	
var contentSpan1_3Array = ["OK/Guía","Canales arriba","Canales abajo","Subir volumen","Bajar volumen","Aparece como flechas de dirección en algunas funciones."];	
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","Adaptador salida AV","LAN","Teléfono","PC/Decodificador/DVD","Amplificador de sonido","Amplificador de sonido/Monitor","Es posible que tu TV no tenga todos los conectores."];	
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Auriculares","Adaptador entrada AV","SPDIF","Adaptador entrada AUDIO CMP","Adaptador entrada CMP (YPbPr)","Dispositivos USB","Dispositivos USB","Auriculares","DVC/Consola de juegos/Decodificador/DVD","Amplificador de sonido","DVC/Consola de juegos/Decodificador/DVD","Es posible que tu TV no tenga todos los conectores."];	
var contentSpan1_6Array = ["Interfaz común","SD","VGA","SCART","Mini SCART","Entrada de antena","CI CAM","Tarjeta SD","PC","Decodificador/DVD","Antena/Cable/Satélite","Es posible que tu TV no tenga todos los conectores."];	
var contentSpan1_7Array = ["Tableta","PC","Router","Teléfono","TV"];	
var contentSpan1_8Array = ["Cambiar función/Encendido","Pulse sin soltar para activar el temporizador de apagado automático.","Abajo","Arriba","Volumen/Canal/Fuente"];	
var contentSpan2Array = [["Presione HOME para ver la pantalla de inicio.","Después, pulsa OK para mirar uno de los programas destacados o ingresar a la App."],["Muestra fecha, red, dispositivos, etc. en la esquina superior derecha de la pantalla."],["Selecciona la fuente de entrada de los dispositivos conectados al TV mediante diferentes puertos, como TV, AV, HDMI etc."]];	
var contentSpan3Array = ["Mira y disfruta tus apps favoritas mediante la página Smart TV.","Mira fotos, videos y escucha música desde un dispositivo USB.","Conecta tu TV y tu smartphone o tableta a la misma LAN.","Haga clic en en la pantalla, control del TV, smartphone o tableta.","Comparte fotos, videos y música en multipantallas con tu familia y opera tu TV desde tu smartphone."];	
var contentSpan4Array = [["Pulsa P+/P- para cambiar canales.","Pulsa V+/V- para graduar el volumen."],["Pulsa LIST en el mando a distancia para ver la lista de canales.","Pulsa ARRIBA/ABAJO para elegir un canal."],["EPG es una guía digital que muestra los programas de TV programados. Puedes navegar, seleccionar, ver y grabar programas."],["Busca e instala canales."],["Agrega o edita tus canales favoritos en la Lista de canales."]];	
var contentSpan5Array = ["Disfruta de tus programas favoritos mediante apps de video."];	
var contentSpan6Array = [["Pulsa MENU para ver las opciones de ajustes del sistema.","Entra a Ajustes de Imagen para fijar los valores."],["Pulsa MENU para ver las opciones de ajustes del sistema.","Entra a Ajustes de Sonido para fijar las opciones."],["Pulsa MENU para ver las opciones de ajustes del sistema.","Entra a Ajustes de Canal para fijar las opciones."],["Actualiza tu TV cuando aparezca una nueva versión de software."],["Puedes elegir el idioma del menú."],["Permite que los padres bloqueen canales o programas inapropiados para menores."]];
var contentSpan7_1Array = [["No hay imagen ni sonido","Verifica el funcionamiento del interruptor.","Conecta otro aparato eléctrico en el tomacorriente para verificar si funciona o si está encendido.","El cable de alimentación no está haciendo contacto con el tomacorriente.","Verifica la fuente de señal."],["Imagen normal, sin sonido","Pulsa el botón V+ para aumentar el volumen.","El ajuste de sonido es incorrecto.","Error de señal de la transmisión."],["Sonido normal, sin imagen.","Ajusta el brillo y contraste.","Error de señal de la transmisión.","Verifica si está en modo de sólo audio."]];	
var contentSpan7_2Array = [["Interferencia de frecuencia de radio","Esta interferencia produce ondulaciones o rayas diagonales, y en algunos casos, pérdida de contraste de la imagen. Encuentra la fuente de interferencia de radio y elimínala."],["Sin color","Revisa los ajustes de color.","Intenta otro canal. Aparece imagen en blanco y negro."],["El mando a distancia no funciona","Remplaza las baterías.","Baterías mal instaladas. Conector de alimentación de la TV desenchufado."]];	
var contentSpan7_3Array = [["No aparece el contenido del dispositivo USB","Verifica que el dispositivo USB sea compatible con la TV.","Verifica que el formato de los archivos de audio e imagen sean compatibles con la TV."],["Reproducción sin sonido","El formato del archivo de video no es compatible con el reproductor de la TV."],["Los archivos no se reproducen normalmente","La tasa de transferencia del dispositivo USB puede limitar la tasa de transferencia de datos de la TV."]];	
var contentSpan7_4Array = [["A qué debo prestar atención cuándo actualizo el software","Que no se interrumpa la corriente durante la actualización.","Evita usar tu mando a distancia durante la actualización.","Ten paciencia porque el proceso de actualización puede tardar."],["No hay cambios notables en la interfaz de la TV después de la actualización.","Bajo ciertas condiciones, la actualización de software no sólo puede actualizar o añadir nuevas funciones, sino también mejora el rendimiento de la TV sin que se muestren cambios en la interfaz. Asimismo, la interfaz de la TV puede, a veces, permanecer intacta."]];	
var termsTitle = "Términos y condiciones";	
var termsConditions = ["Los contenidos y servicios (de aquí en adelante la \"Aplicación con Licencia\") puestos a su disposición a través de este aparato de TV (de aquí en adelante el \"Dispositivo\") tienen licencia de uso bajo estos términos y condiciones, es decir, no están a la venta. Los proveedores de la Aplicación con Licencia (de aquí en adelante un \"Proveedor de la Aplicación\") se reservan todos los derechos que no se le otorguen a usted explícitamente. \n 1.Alcance de la Licencia.\n- La Licencia para una Aplicación con Licencia que el Proveedor de la Aplicación pertinente le otorga a usted, se limita a una licencia intransferible para usar la Aplicación con Licencia en el Dispositivo que usted posee o controla. Usted no puede distribuir o poner la Aplicación con Licencia en una red en la que múltiples dispositivos puedan usarla de forma simultánea. Usted no puede alquilar, prestar, vender, redistribuir o sublicenciar la Aplicación con Licencia. \n Usted acepta que toda la Aplicación con Licencia y todos los contenidos que incluye y que son accesibles mediante este Dispositivo, pertenecen al Proveedor de la Aplicación y están protegidos por las leyes vigentes sobre propiedad intelectual. Usted no puede modificar, copiar, descompilar, aplicar ingeniería inversa, desmontar, republicar, cargar, compartir, transmitir, traducir, intentar derivar el código fuente, crear trabajos derivados, o explotar de cualquier otra forma ninguna Aplicación con Licencia, actualización ni sus partes. Si usted viola esta restricción, puede ser procesado por indemnización de daños y perjuicios. Los términos de la licencia regirán cualquier actualización provista por el Proveedor de la Aplicación que remplace y/o complemente la Aplicación con Licencia original, salvo que dicha actualización esté acompañada por una licencia separada, en cuyo caso regirán los términos de esa licencia. Usted será el único responsable por cualquier y todos los costos (si existiese alguno) de actualización de la Aplicación con Licencia. \n 2.Materiales de terceros.\n La Aplicación con Licencia puede permitir el acceso del Proveedor de la Aplicación y de servicios y sitios web de terceros (de aquí en adelante, los \"Servicios\"). Usted acepta que al usar cualquiera de los Servicios, puede encontrar contenidos considerados ofensivos, indecentes u objetables, o que pueden o no ser identificados por contener lenguaje explícito, y que los resultados de cualquier búsqueda o introducción de una URL en particular puede automática e involuntariamente generar enlaces o referencias a materiales objetables. Sin embargo, usted acepta que el fabricante de este Dispositivo (el \"Fabricante\") y el Proveedor de la Aplicación no tienen ninguna responsabilidad hacia usted por aquellos contenidos que puedan ser ofensivos, indecentes o censurables.\n Al utilizar los Servicios, usted reconoce y acepta que el Fabricante no es responsable de examinar o evaluar el contenido, su exactitud, integridad, actualidad, validez, cumplimiento de los derechos de autor, legalidad, calidad ni cualquier otro aspecto de dichos Servicios. El Fabricante no garantiza o endosa, no asume ninguna responsabilidad ni será considerado responsable ante usted ni otra persona por cualquiera de los Servicios. \n Usted acepta que los Servicios pueden contener contenidos, información y materiales exclusivos (de aquí en adelante, \"Materiales de Terceros\") que están protegidos por leyes vigentes de propiedad intelectual u otras, y que usted no usará dichos Materiales de Terceros de ninguna manera, salvo para el uso permitido de los Servicios. Usted acepta no reproducir, modificar, alquilar, prestar, vender, distribuir los Materiales de Terceros ni crear ningún tipo de trabajos derivados de los mismos, y no explotará los Servicios de ninguna forma no autorizada. Usted también acepta que no usará los Servicios para de ninguna manera hostigar, abusar, acosar, amenazar, difamar, infringir o violar los derechos de cualquier otra parte, y que el Fabricante no es de ninguna forma responsable por el uso que haga usted, ni por cualquier mensaje o transmisión de hostigamiento, amenaza, difamación , ofensa o ilegal que usted pueda recibir como resultado de cualquiera de los Servicios. \n 3.Sin garantía.\nUsted acepta que el uso de la Aplicación con Licencia y los Servicios es a completo riesgo suyo. La Aplicación con Licencia y los Servicios, en su conjunto, son provistos \"tal cual están\" y \"según su disponibilidad\" sin ningún tipo de garantía, ya sea explícita o implicita. El Fabricante expresamente deslinda toda garantía y condiciones con respecto a la Aplicación con Licencia y los Servicios, ya sea de forma explícita o implícita, incluyendo, pero sin limitarse a, garantías de comercialización, de calidad satisfactoria, de adecuación para un propósito específico, de precisión, de goce pacífico, y de no vulneración de los derechos de terceros. El Fabricante no garantiza la precisión, validez, oportunidad, legalidad, o integridad de cualquier Aplicación con Licencia o Servicios disponibles mediante este Dispositivo, y no garantiza que este Dispositivo, la Aplicación con Licencia o los Servicios cumplan sus requisitos, o que el funcionamiento de la Aplicación con Licencia o los Servicios sea libre de interrupciones o errores, o que se corrijan los defectos en la Aplicación con Licencia o los Servicios. Si la Aplicación con Licenciada o los Servicios resultan ser defectuosos, usted deberá asumir el costo total de cualquier servicio, reparación o corrección.\nUsted reconoce y acepta que la Aplicación con Licencia y los Servicios pueden ser modificados, suspendidos, retirados, finalizados o interrumpidos, o el acceso puede ser desactivado en cualquier momento, sin previo aviso, y el Fabricante no se responsabiliza ni garantiza que ningún contenido o servicio incluidos en la Aplicación con Licencia y los Servicios permanezcan disponibles durante un determinado período. Dichos contenidos y servicios son transmitidos por terceros mediante redes e instalaciones de transmisión sobre los cuales el Fabricante no tiene ningún control. Sin limitar la generalidad de lo precedente, el Fabricante expresamente deslinda cualquier responsabilidad por cualquier cambio, interrupción, desconexión, eliminación o suspensión de cualquier contenido o servicio disponibles a través de este Dispositivo. El proveedor de la Aplicación y otros proveedores de los Servicios se reservan el derecho a cambiar, suspender, eliminar, o desactivar el acceso a la Aplicación con Licencia o los Servicios en cualquier momento y sin previo aviso. Asimismo, el Fabricante puede imponer límites en el uso de o el acceso a ciertas Aplicaciones con Licencia o Servicios, en cualquier caso y sin previo aviso o responsabilidad.\nEl Fabricante no es responsable del servicio de atención al cliente relacionado con la Aplicación con Licencia y los Servicios. Cualquier pregunta o solicitud de servicio relacionados con la Aplicación con Licencia y los Servicios debe ser dirigida directamente al proveedor respectivo.\n 4. Recopilación y uso de información \nUsted acepta que el Fabricante, los Proveedores de Aplicaciones y los Proveedores de Servicios pueden recopilar y utilizar datos técnicos e información relacionada, incluyendo pero sin limitarse a la información técnica de este Dispositivo, sistema y software, y periféricos, para facilitarle el suministro de actualizaciones de software, soporte de producto y otros servicios (si los hay) relacionados con el Dispositivo y la Aplicación con Licencia. El Fabricante, el Proveedor de la Aplicación y los proveedores de los Servicios pueden usar esta información, siempre y cuando sea de forma anónima, para mejorar sus productos o para brindarle a usted servicios o tecnologías. \n 5.No disponibilidad de ciertas funciones.\nDebido a restricciones del Proveedor de la Aplicación, ciertas funciones, aplicaciones y servicios pueden no estar disponibles en este Dispositivo (incluyendo sus dispositivos periféricos) o en todos los territorios. Algunas funciones de este Dispositivo también pueden requerir dispositivos periféricos adicionales o cuotas de membresía, vendidos por separado. \n 6.Límite de responsabilidad.\nEn la medida en que no esté prohibido por las leyes vigentes, bajo ninguna circunstancia, incluyendo negligencia, el Fabricante asume ninguna responsabilidad, ya sea de forma contractual o extracontractual, por ningún daño o perjuicio directo, indirecto, fortuito, especial o consecuente, honorarios de abogados, gastos o cualquier otro daño o perjuicio ocasionado por, o en relación con, cualquier información contenida en, o como resultado del uso del Dispositivo, cualquier Aplicación con Licencia o Servicio por parte suya o de terceros, incluso con previa advertencia sobre dichos daños."];	
var noChannelListRemind = ["No se encontraron canales. Lista de canales disponible después de la búsqueda de canales.","Explorar canales"];	
var closeSubtitleRemind = "La función estará disponible cuando el subtítulo esté apagado. ¿Deseas ajustar ahora?";	
var estickerTitles = ["Imágenes altamente realistas","Colores vívidos","Gran movimiento realista","Imagen dinámica de calidad","Actualización UHD SR","Experiencia del mundo 3D","Rendimiento más rápido","Contenidos 4K futuristas","Disfruta del mundo virtual","Acceder a contenidos adicionales","Sintonizadores digitales integrados","Conectar todos los dispositivos","Varias fuentes 4K","Contenidos USB","WIFI ultra rápida","Contenidos móviles en TV","Contenidos para dispositivos móviles","Contenidos locales","Aprobado por DivX","Imagen perfecta","Canal listo","TDT Premium"];	
var estickerDescriptions = ["Una fantástica experiencia de visualización gracias a las imágenes Full HD con cuatro veces más detalles en la pantalla UHD.","Amplia gama de colores emocionantes en cada escena con rojos vívidos y verdes esmeralda","Interpolación de cuadros 4K y luz de fondo que neutralizan los problemas de movimientos borrosos.","La intensidad de la imagen original se potencia para producir una verdadera expresión dinámica con un contraste brillante.","Disfruta tus programas de TV y discos Blu-Ray con nitidez nunca antes vista gracias a la tecnología Super Resolution.","Disfruta de tu TV lista para 3D y mira los contenidos 3D que desees.","Una experiencia mucho más placentera gracias a Quad Core que permite una interacción suave y un rendimiento superior.","Compatible con el códec HEVC (H.265) que define el venidero vídeo 4K.","Extensa variedad de aplicaciones en línea, servicios de Vídeo bajo demanda (VOD), televisión al día (catch-up TV) y navegación en Internet.","Mira más con servicios y contenidos adicionales de tus canales favoritos.","Accede a canales de TV en alta definición sin necesidad de un decodificador adicional.","Fácil de conectar a todas las fuentes digitales disponibles en tu hogar.","TV lista para el futuro, capaz de reproducir 4K 50/60Hz mediante HDMI 2.0 con HDCP 2.2","Mira tus contenidos de imágenes o vídeo directamente desde tu dispositivo USB, disco duro o cámara, en la pantalla grande de tu TV con resolución 4K.","2x2 MIMO de última generación y la norma AC permiten una incomparable velocidad de acceso a Internet.","Disfruta en la pantalla grande tus imágenes, vídeos, aplicaciones desde tus dispositivos móviles gracias a la tecnología Screen Mirroring.","Disfruta en la pantalla grande tus imágenes, vídeos, aplicaciones desde tu teléfono o tableta.","Mira en la pantalla grande tus contenidos locales como imágenes, vídeos desde tus dispositivos conectados a tu red local.","Mira películas alquiladas o tuyas protegidas por DivX","Bisel ultra delgado y diseño extra plano","Probado y aprobado por Canal+","TDT Premium probado y aprobado"];	
var eManualTextArray = ["Manual electrónico","Todas las imágenes incluidas son sólo representaciones."];	
var frontPanelRemind = "Panel frontal bloqueado.";	
var eRPRemind = "El modo de tienda no cumple con los requisitos ERP. ¿Deseas seleccionarlo?";	
var noRelatedChannel = "Sin canal relacionado";	
var option0624Name = ["BOP","BFS","Evento por evento","GetUserID","Música de fondo","Reiniciar todo","Reiniciar modo de tienda","NRM","DVB-T2 y selección de país","Modo HbbTV"];	
var DVBT2AndChoice = ["Encender","Por país","Apagar"];	
var hbbtvServiceRemind = "El HbbTV estará disponible pronto.";	
var insertWord = "Insertar";	
var viewDetail = "Ver detalle";	
var remindOAD = "Actualización de software. Es posible que otro canal tenga una nueva actualización recomendada de software. Si aceptas descargarlo, el TV cambiará automáticamente el canal. ¿Deseas hacerlo ahora?";	
var LEDStatus = ["Parpadeo", "Normal","Apagar"];	
var netFlixRemind = "Esta función interrumpirá el acceso a los servicios de Netflix hasta que vuelvas a ingresar.";	
var ESNExplanation = "Número de serie electrónico";	
var resetShopRemind = "El sistema se está reiniciando. por favor no apagues el TV.";	
var initialSelectOption = "Selecciona una opción:";	
var databaseRemind = "El sistema ha identificado que la base de datos está dañada por alguna razón no identificada y la reconstituirá automáticamente. Pulsa OK para continuar.";	
var Deactivation = "Desactivación";	
var oadFutureRemind = "Actualización de software.\n Un nuevo software recomendado estará disponible en %s. La actualización puede tardar unos minutos y la pantalla puede ennegrecerse. No apagues el receptor durante la actualización. Si aceptas esta actualización, deja el receptor encendido en la hora programada. ¿Deseas recibir esta actualización?";	
var bt_title = "Bluetooth";	
var bt_soundOutPutName = "Salida de sonido";	
var bt_soundOutPutTV = "Altavoces del TV";	
var bt_soundOutPutBT = "Dispositivos Bluetooth";	
var bt_soundOutPutBT_TV = "Bluetooth y TV";	
var bt_refreshBarName = "Dispositivos";	
var bt_settingTips_On = "Activa la función Bluetooth y busca dispositivos.";	
var bt_settingTips_Finding = "Buscando dispositivos disponibles…";	
var bt_settingTips_NoDevice = "No existen dispositivos disponibles.";	
var bt_deviceList_State_NoConnect = "Sin conexión";	
var bt_deviceList_State_Connecting = "Conectar...";	
var bt_deviceList_State_Connected = "Conectado";	
var bt_deviceList_State_Paired = "Conectado";	
var bt_deviceList_Conncect_Failed_Tips1 = "Conexión fallida.";	
var bt_deviceList_Conncect_Failed_Tips2 = "Confirma que la función Bluetooth XXX está encendida";	
var bt_deviceList_Conncect_Success = "Conectado a dispositivo Bluetooth.";	
var bt_deviceList_Disconncect_Success = "Desconectado de dispositivo Bluetooth.";	
var bt_deviceList_Disconnect = "¿Deseas desconectarte de XXX?";	
var bt_tipsTitle = "Sugerencia";	
var bt_bluetooth_Pairing_Title = "Conexión Bluetooth";	
var bt_bluetooth_Input_Pin = "Introduce tu PIN:";	
var bt_bluetooth_Output_Pin_Tip = "Introduce tu PIN XXXX por teclado.";	
var bt_bluetooth_Pin_Wrong_Tip = "PIN incorrecto";	
var bt_bluetooth_Remove_Pair_Title = "Consulta";	
var bt_bluetooth_Remove_Pair_Ask = "¿Olvidar este dispositivo?";	
var audioDescriptionName = ["Descripción de audio","Volumen","Volumen de altavoz","Auriculares","Volumen de auricular","Volumen AD","Dispositivo BT","Volumen de dispositivo BTD","Amplificador","Altavoz"];	
var audioDescriptionOptions = ["Apagar","Normal","Descripción de audio"];	
var volumeOffRemind = "Ajusta XXX \"Encendido\" en el menú de ajustes.";	
var mEPSRemind = "El modo de tienda no cumple con los requisitos MEPS. ¿Deseas seleccionarlo?";	
var parentRatingAUOptions = ["Sin bloqueo", "Bloquear G y superior (opcional)", "Bloquear PG y superior", "Bloquear M y superior", "Bloquear MA y superior", "Bloquear AV y superior",  "Bloquear R y superior", "Bloquear todo"];	
var mEPSTips = ["El modo actual de imagen no cumple con los requisitos MEPS\n. Se recomienda el modo estándar.",    "Tu TV está en modo de tienda.\nPara el modo Hogar mira el menú de ajustes."];	
var switchSourceRemind = "insertado. ¿Deseas cambiar?";	
var footballModeName = "Modo Deportes";	
var resetStadium = "Estadio";	
var atvSearchMenu = "Búsqueda manual ATV";	
var dtvSearchMenu = "Búsqueda manual Dtv";	
var settingNoticeSourceName = "Fuente automática";	
var smartTVOptions = ["Portal Smart TV","HbbTV","Compartir y ver","Visualización WiFi","Políticas del TV",                            "Modo de espera en red","Reiniciar el TV"];	
var supportOptions = ["Diagnóstico remoto","Contáctenos"];	
var tvDoctor = ["Diagnóstico remoto 2.0","La aplicación está disponible sólo para que tu Smart TV ejecute el diagnóstico y mejore la experiencia del producto. La aplicación recopilará los datos de funcionamiento del TV y del modelo y los enviará a un servidor, y se usarán para resolver el problema. No se accederá a tu información personal. Verifique que tu TV esté correctamente conectado a Internet.","Diagnóstico local","Sigue las instrucciones del personal de apoyo cuando el diagnóstico comience.","Diagnóstico remoto","Verifica que el personal de apoyo esté conectado.","Número de serie:","&nbsp;&nbsp;&nbsp;&nbsp;User ID:","Conectar...","Conectado. Mantente conectado a la red.","No se puede acceder a Internet. \nRevisa la conexión de red.","Salir"];	
var ClosedcaptionName = "Subtítulos";	
var sysCCOptions = ["Modo subtítulos","Subtítulos analógicos","Subtítulos digitales","Sobreponer","Subtítulos"];	
var sysCCmodeOption = ["Apagar", "Encender", "Encender cuando esté en silencio"];	
var sysanalogCCOption = ["Apagar", "Subtítulos1", "Subtítulos2", "Subtítulos3", "Subtítulos4", "Texto1", "Texto2", "Texto3", "Texto4"];	
var sysdigitalCCOption = ["Apagar", "Service 1", "Service 2", "Service 3", "Service 4", "Service 5", "Service 6", "Service 7", "Service 8"];	
var syssuperimposeOption = ["Apagar", "Service 1", "Service 2", "Service 3", "Service 4", "Service 5", "Service 6", "Service 7", "Service 8"];	
var sysCCOPtionItems = ["Opción subtítulos","Modo","Estilo fuente","Tamaño fuente","Estilo borde de fuente","Color borde de fuente","Color primer plano","Color del fondo","Opacidad primer plano","Opacidad del fondo"];	
var sysCCOtionMode = ["Personalizar","Por defecto"];	
var sysCCOptionFontStyle = ["Por defecto","Fuente1","Fuente2","Fuente3","Fuente4","Fuente5","Fuente6","Fuente7"];	
var sysCCOptionFontSize = ["Por defecto","Grande","Pequeño","Normal"];	
var sysCCOptionFontEdgeStyle = ["Por defecto","Ninguna","Elevado","Deprimido","Sombra izquierda","Sombra derecha"];	
var sysCCOptionFontColor = ["Por defecto","Negro","Blanco","Rojo","Verde","Azul","Amarillo","Magenta","Cian"];	
var sysCCOptionFontOpacity = ["Por defecto","Sólido","Parpadeo","Translúcido","Transparente"];	
var contactUsOption = ["Contáctenos",    "Contáctenos si tienes problemas para operar este dispositivo.",    "Contáctenos",    "Sitio Web: Visita",    "Número del centro de llamadas:","Información del producto","Nombre del modelo:",    "Versión de software:","","ID de usuario:","ID de proyecto:",    "Tipo de cliente:","Dirección MAC inalámbrica:","Dirección MAC alámbrica:","Netflix ESN:","Busca la información en tu teléfono.",    "Después seleccione tu país."];
var homePageWords = ["Historial", "Buscar"];	
var titlePageWords = ["Casa", "Video","TV","Aplicaciones"];	
var videosPageWords = ["Película", "Deportes","Música","Popular","Juegos","Educación","Noticias"];	
var statusPageWords = ["USB","Configuración","WiFi","Conexión alámbrica"];	
var searchPageWords = ["Buscar", "Búsquedas populares:","Programas, Películas, Gente ..."];	
var resultSearchPageWords = ["Resultados sobre"," ","Intenta con otros términos de búsqueda.","Lo sentimos. No se encontró ningún video."," "];	
var historyPageWords = ["Historial", "Pulsar","para eliminar el historial","Eliminar uno","Eliminar todo","Ayer","Hoy","Todavía no ha mirado ningún video.","Eliminación exitosa del historial."];	
var channelPageWords = ["Lo sentimos, no se encontró ningún video."];	
var virtualRemoteValues = ["1","2","3","4","5","6","7","8","9",                          "Zoom-","0","Zoom+",                          "Salir","0","",                          "Lista","0","Texto",                          "Guía","Introducir","Salir",                          "Menú","Subtítulo","Info",                          "Detener",                          "Info","Menú","Salir",                          "Salir"                          ];	
var sportsModeInitReminds = ["Este asistente le ayudará a configurar la unidad USB para el Modo Deportes. Seleccione el modo de configuración (setup).", "Seleccione el tamaño de archivo para el Modo Deportes.", "Creando el archivo del Modo Deportes", "¡La velocidad de la unidad es demasiado lenta (< %f MB/s) para la función del Modo Deportes!", "La unidad USB está lista para el Modo Deportes. Te recomendamos cambiarla (a velocidad > %f MB/seg) para un mejor funcionamiento.", "La unidad USB está lista para el Modo Deportes."];	
var sportsModeExtra = ["¿Desea detener el Modo Deportes y cambiar el canal?","¿Desea detener el Modo Deportes y cambiar la fuente al dispositivo conectado en la entrada SCART?","¿Desea detener el Modo Deportes y cambiar la fuente al dispositivo conectado en la entrada HDMI?","El modo Deportes no es compatible con canales codificados.","¿Desea detener el Modo Deportes y entrar en la Guía de Programación Digital (EPG)?","¿Desea detener el Modo Deportes e introducir archivos multimedia?","¿Desea detener el Modo Deportes y cambiar la fuente de entrada?","El TV terminará el Modo Deportes actual. ¿Deseas concluir?"];	
var remoteControlNote = "- El (o los) controles remotos incluidos en su aparato pueden ser diferentes según el modelo.";	
var textArray = ["Volumen","Canal","Fuente","Encendido","Guía","segundos para apagarse"];	
var guideArray = ["VOL-","VOL+","CH-","Canal+","Pre","Siguiente"];	
var favChannelListRemind = ["Sin canales favoritos. Por favor vaya a las otras listas y utilice \"Green Key\" para añadir sus canales favoritos."];	
var proxySetting = ["Ajustes de Proxy","Puerto"];	
var powerOffShop = ["Le recomendamos usar el modo tienda."];	
var tcastTextPageWords = ["Abundantes videos, poderosas aplicaciones","TV a distancia, al alcance de su mano","Grandes contenidos, compartidos en gran pantalla."];	
var tcastOtherWords = ["Escanee el código QR y descargue T-Cast","Red conectada a la TV","Nombre del TV","T-Cast"];	
var hbbtvWords = ["Ajustes de HbbTV","HbbTV","Cookies","Cookies de terceras partes","ID del dispositivo","Detección"];	
var hbbtvTrackingWords = ["SÍ","NO","No me importa"];
var eStickerTipWords = ["Quedan menos de 500 MB de almacenamiento, ¿desea eliminar los vídeos del modo demostración para conseguir más espacio?"];
var delEstickerVideoRemid = ["El video se ha eliminado correctamente"];

var clockPageWords = ["Local","Pekín","Tokio","Hongkong","Taipei","Singapur","París","Londres","Moscú","nueva Delhi","djakarta","Nueva York","Río",
                        "Pulse la tecla \"OK\"","No se puede agregar!"];
var smartKeyWords = ["Pantalla Inalámbrica","Solo audio","Temporizador de desconexión","Reloj mundial","Barra de sonido","WiFi","PVR","Modo Deportes"];
var recommendWords = ["Recomendados"];
var onlyListenRemindWords = ["Entrando en modo sonido","Presione una tecla, excepto volumen, para salir"];
var selectSatRemind = "¡No puede seleccionar más de 20 satélites!";