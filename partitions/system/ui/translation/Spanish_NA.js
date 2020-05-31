var  all_country  = ["Australia","Austria","Belgium","Bulgaria","Croatia","Czech Republic","Denmark","Finland","Francia","Germany",
    				"Greece","Hungary","Italy","Luxembourg","Netherlands","Norway","Poland","Portugal","Romania","Russia",
    				"Serbia","Slovenia","Spain","Sweden","Switzerland","United Kingdom","New Zealand","Arab"/*Arab*/,"Estonia","Hebrew"/*Hebrew*/,
    				"Latvia","Slovakia","Turkey","Ireland","Japan","Philippines","Thailand","Maldives","Uruguay","Perú",
                     "Argentina","Chile","Venezuela","Ecuador","Costa Rica","Paraguay","Bolivia","Belice","Nicaragua","Guatemala",
					"China","Taiwan","Brasil","Canadá","México","Estados Unidos","Corea del Sur","Romania","Vietnam","Ukraine",
    				"Iran","Iraq"," ","Kazakhstan","Uzbekistan"," ","Kyrgyzstan","Algeria","Egypt","Tunisia",
					"Tanzania","Kenya","Pakistan","Indonesia","Kuwait","Saudi Arabia","Qatar","Israel","Lebanon","bahrain",
    				"Angola","Congo","India","Turkmenistan","Colombia","Mongolia","Bangladesh","Nepal","Sri Lanka","North Korea",
    				"Moldova","Polynesia","EI Salvador"," ","Fiji","Liberia","Jordan","Myanmar","Ghana","Georgia",
    				"Armenia","Oman","yemen","Syria","Palestine","Afghanistan","Morocco","benin","IvoryCoast","Nigeria",
    				"Sudan","Ethiopia","Zambia"," ","South Africa","mozambique","Libya","Albania","Belarus","Iceland",
    				"Lithuania","Mauritius","Dubai","UAE","Tajikistan","Bengal","Bosnia Hercegovina","Cyprus","Kosovo","Macedonia",
    				"Malta","Montenegro","Cameroun","Singapore","Malaysia","NewCaledonia","Surinam","Jamaica","Curazao","Aruba",
                     "Antigua y Barbuda","Santa Lucía","Barbados","San Vicente","San Cristóbal y Nevis","Granada","Trinidad y Tobago","Guyana","Puerto Rico","Panamá",
                     "Dominica","Cuba","Honduras","Haití","Camboya","Zimbabwe","República Dominicana","Bonaire","Somalia","Azerbaijan",
    				"Uganda","Rwanda","Guinea","Burundi","Abjasia","Andorra","Anguilla","Antarctica","American Samoa","Aland Island",
					"Burkina-faso","Bermuda","Brunei","Caribbean Netherlands","Saint Barthélemy","Bahamas","Bhutan","Bouvet Island","Botswana","Cocos (Keeling) Islands",
    				"Central African Republic","Cape Verde","Djibouti","Eritrea","Western Sahara","Falkland Islands","Federated States of Micronesia","Faroe Islands","Gabon","Cook Islands",
    				"Gibraltar","Greenland","French Guiana","Guadeloupe","Equatorial Guinea","Guam","Guinea-Bissau","Heard Island and McDonald Islands","Isle of Man","British Indian Ocean Territory",
				/*20*/"Jersey","Kiribati","Comoros","Cayman Islands","Liechtenstein","Lesotho","Monaco","Saint Barthélemy","Madagascar","Mali",
    				"Macao","Martinique","Mauritania","Montserrat","Malawi","Namibia","Niger","Norfolk Island","Nauru","Papua New Guinea",
    				"Pitcairn Islands","Palau","Reunion Island","Solomon Islands","Seychelles","The Svalbard archipelago","Sierra Leone","San Marino","Senegal","South Sudan",
    				"Sao Tome & Principe","Swaziland","Turks & Caicos Islands","Togo","Chad","Tokelau","Timor-Leste (East Timor)","Tonga","Tuvalu","Vatican City State",
    				"British Virgin Islands","United States Virgin Islands","Wallis and Futuna","Samoa","Mayotte","Democratic Republic of the Congo","Guernsey","Gambia","Northern Mariana Islands","French Southern Territories",
				/*25*/"Niue","United States Minor Outlying Islands","Others"];

var all_language = ["Checo","*","Danés","*","*","Alemán","Inglés","Español","Griego","Francés","Croata","*","Italiano","Húngaro","Holandés","Noruego","Polaco","Portugués","Ruso","Rumano","Esloveno","Serbio","Finés","Sueco","Búlgaro","Eslovaco","Chino","*","Gaélico","*","Galés","Árabe","Irlandés","Letón","*","Turco","Estonio","Holandés"/*Netherlands*/,"Coreano","*","Hindi","*","*","Mandarín","Cantonés","Maorí","Audio Original"/*Qaa*/,"No definido"/*Undetermined*/,"*","Desconocido","No definido","*","*","*","*","*","*","*","*","*","*","*","*","Albano","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","Vasco","*","*","*","*","*","*","*","*","*","Bosnio","*","*","*","*","*","*","Bielorruso","*","*","Catalán","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","Gallego","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","Islandés","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","Japonés","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","Kurdo","*","*","*","*","*","*","*","*","*","*","*","*","*","Lituano","*","*","*","*","*","*","*","Macedonio","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","Romance","*","*","*","*","*","*","*","Sami","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","Teletexto","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","Ucraniano","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","Yoruba","*","*","*","*","*","*","*","*","*","*","Chino tradicional","*"];	
var offOn = ["Apagado","Encendido"];	
var okCancel = ["OK","Cancelar"];	
var yesNo = ["Sí","No"];	
var level = ["Apagado","Bajo","Alto","Medio"];	
var manualAuto = ["Manual","Automático"];	
var homeShop = ["Casa","Tienda"];	
var picPreset = ["Estándar","Dinámico","Natural","Película","Personal"];	
var picColorTemp = ["Fresco","Normal","Caliente","Personalizar"];	
var pic3dNavig = ["Manual","Automático","Semi-Auto"];	
var _3dOptions = ["Modo 3D","3D-a-2D","Interruptor L-R","Profundidad de campo"];	
var pic3DMode = ["Apagado","2D-a-3D","Lado-a-lado","Arriba-Abajo","Intercalado de líneas"];	
var picEcoOptions = ["Ahorro de energía","Sensor de luz","Atenuación local","Atenuador de mezcla"];	
var picGeoOptions = ["Geometría","Posición H.","Posición V.","Reloj","Fase"];	
var picAdWhiteBal = ["Ganancia R","Ganancia G","Ganancia B","Compensación R","Compensación G","Compensación B"];	
var souOptions = ["Sonido predeterminado","Balance","Retraso de audio","TSHD SRS","Control automático de volumen","Tipo SPDIF","Retraso de SPDIF","Ubicación de la TV","Idioma del audio","Tipo de sonido","Descripción de audio","Refuerzo de graves","Dolby Digital Plus"];	
var souSpdifType = ["Automático"/*Dolby*/,"PCM","Apagado"];	
var colorSpace = ["Automático","Nativo","Personalizar"];	
var souPresetPara = ["100Hz","500Hz","1.5KHz","5KHz","10KHz"];
var chOptions = ["Búsqueda de canales","Lista de canales","EPG","Organizador de canales","Diagnóstico de canales","Función Timeshift","Subtítulo","Teletexto","Tipo de lista de canales","Servicio de datos","PVR"];	
var chDiagOptions = ["Potencia de señal","Calidad de señal","Frecuencia (KHz)","ID de servicio","ID de red","Nombre de red"];	
var chScanOptions = ["País / Región","Modo de sintonización","Búsqueda automática","Actualización automática","Exploración manual analógica",["Instalación manual de red alámbrica","Instalación manual de la antena","Sintonización manual del satélite"],"Configuración de antena de satélite","Seleccionar red favorita","Limpiar lista de canales","LCN"];
var favNetDes = "Por favor seleccione su red favorita";	
var tuner = ["Cable","Antena","Satélite"];	
var passError = "Contraseña incorrecta.\nVuelva a introducirla.";	
var chType = ["Canales analógicos:","Canales digitales:"];	
var chScanStatus = ["Estado: Buscando","Estado: Búsqueda completada","Estado: Búsqueda cancelada","Estado: Error de búsqueda"];	
var chScanPara = ["Frecuencia (KHz)","Modulación","tasa de baudios (Ksym/s)","ID de red","Sistema","Sintonía fina","Potencia de señal","Calidad de señal","Modo de búsqueda","ID de canales"];	
var chScanParaMHZ = ["Frecuencia (MHz)"];	
var chAtvManSys = ["Europa oeste","Europa este","Reino Unido","Francia"];	
var modulation = ["16QAM","32QAM","64QAM","128QAM","256QAM","Automático"];	
var chCleanDes = "¿Desea limpiar la lista de canales?";	
var chDeletDes = "¿Desea eliminar el canal?";	
var chOperator = ["Ziggo","UPC","Otros"];	
var chScanType = ["Digital y Analógico","Digital","Analógico"];	
var chScanMode = ["Completo","Configuración avanzada","Rápido"];	
var bookingModes = ["Grabar","Recordatorio"];	
var dayName = ["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"];	
var monthName = ["Ene", "Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];	
var filter = ["Filtro","Tipo","Tipo de Subt."];	
var chEpgFirstGenre = ["Película","Noticias","Show","Deportes","Niños","Música","Arte","Social","Educación","Entretenimiento","Especial"];	
var chEpgSecondGenre = [["Drama","Detective","Aventura","Ciencia ficción","Comedia","Telenovela","Romance","Formal","Películas para adultos"," "," "," "],["Temas de actualidad","Informe del tiempo","Revista noticiosa","Documental","Debate"," "," "," "," "," "," "," "],["Show","Programa de juegos","Variedades","Programa de entrevistas"," "," "," "," "," "," "," "," "],["Deportes","Eventos especiales","Revistas deportivas","Fútbol","Tenis","Deportes de conjunto","Atletismo","Automovilismo","Deportes acuáticos","Deportes de invierno","Equitación","Artes marciales"],["Niños","Para menores de 6 años","Entretenimiento para niños de 6 a 14","Entretenimiento para niños de 10 a 16","Informativo","Dibujos animados"," "," "," "," "," "," "," "],["Música","Rock","Formal","Folk","Jazz","Musical","Ballet"," "," "," "," "," "],["Arte","Artes escénicas","Bellas artes","Religión","Cultura popular","Literatura","Película","Experimental","Emisión de TV","Medios nuevos","Revistas de arte","Moda"],["Social","Revistas","Economía","Personalidades célebres"," "," "," "," "," "," "," "," "],["Educación","Naturaleza","Tecnología","Medicina","Países extranjeros","Ciencias sociales","Educación superior","Idiomas"," "," "," "," "],["Pasatiempos","Turismo","Artesanías","Automovilismo","Bienestar y salud","Cocina","Publicidad","Jardinería"," "," "," "," "],["idioma original","Blanco y negro","no publicado","Radiodifusión en vivo"," "," "," "," "," "," "," "," "]];	
var chEpgFirstGenreLA = ["Noticias","Deportes","Educativo","Telenovela","Series cortas","Series","Variedades","Reality show","Información","Humor","Niños","Erótico","Película","Sorteos, ventas por TV, concursos","Debate/entrevista","Otros"];	
var chEpgSecondGenreLA = [["Noticias","Reportar","Documental","Biografía","Otros","*","*"],    ["Deportes","Otros","*","*","*","*","*"],["Educativo","Otros","*","*","*","*","*"],["Telenovela","Otros","*","*","*","*","*"],["Series cortas","Otros","*","*","*","*","*"],["Series","Otros","*","*","*","*","*"],["Auditorio","Show","Musical","Cómo se hizo","Femenino","Programa de juegos","Otros"],["Reality show","Otros","*","*","*","*","*"],["Cocina","Moda","País","Salud","Viajes","Otros","*"],["Humor","Otros","*","*","*","*","*"],["Niños","Otros","*","*","*","*","*"],["Erótico","Otros","*","*","*","*","*"],["Película","Otros","*","*","*","*","*"],["Sorteos","Ventas por TV","Concursos","Otros","*","*","*"],["Debate","Entrevistas","Otros","*","*","*","*"],["Dibujos animados para adultos","Interactivo","Policiaca","Religión","Servicios de ingeniería","Otros","*"]];	
var chOrganizer = ["Saltar canal","Clasificación de canales","Editar canal","Eliminar canal","Intercambio de canal","Inserción de canal"];	
var chEditPara = ["Nombre de red","Número de canal","Nombre del canal","Frecuencia","Sistema de color","Sistema de sonido"];	
var chSatTitles = ["Tipo de satélite","Configuración de antena de satélite","Seleccionar satélite"];	
var chSatEidtOptions = ["Nombre de satélite","Posición","Alimentación LNB","Frecuencia LNB (MHz)","Entrada DiSEqC","Tono de 22KHz","Emisión de tono","Frecuencia (KHz)","tasa de baudios (Ksym/s)","Polarización","Potencia de señal","Calidad de señal","Estado del satélite"];	
var chSatAutoPromt = [["Todo","Red"],["Todo","Libre"]];	
var chSatAutoScanOptions = ["Seleccionar satélite","Modo de búsqueda","Canales"];	
var chSatPosition = ["A","B"];	
var chSatLNBFreq = ["Universal",];	
var chSatDiSEqCInput = ["Deshabilitar","A","B","C","D"];	
var chSatTone22KHz = ["Automático","Encendido","Apagado"];	
var chSatToneBurst = ["Deshabilitar","Emisión de tono A","Emisión de tono B"];	
var chSatPolarization = ["Horizontal","Vertical"];	
var chSatSetupOptions = ["Tipo de antena","Sintonizador","Frecuencia de banda"];	
var chSatAntennaType = ["Cable único","Universal"];	
var chSatUserBands = ["Banda usuario 1","Banda usuario 2","Banda usuario 3","Banda usuario 4","Banda usuario 5","Banda usuario 6","Banda usuario 7","Banda usuario 8"];	
var chSatOthers = ["Transpondedor"];	
var chSatSetupOthers = ["definido por usuario"];	
var pleaseSelectSat = "¡Primero seleccione el satélite!";	
var subOptions = ["Subtítulo","Idioma del subtítulo digital","Segundo idioma de subtítulo digital","Tipo de subtítulos"];	
var gingaOptions = ["Servicio auto. de datos","Lista de servicio de datos"];	
var ttxOptionsCon = ["Decodificando idioma de la página","Idioma de teletexto digital"];	
var subType = ["Normal","Discapacidad auditiva"];	
var netIntf = ["Ethernet","Conexión inalámbrica"];	
var netConnDes = ["Probando conexión de red. Favor de esperar","¡Prueba exitosa de conexión de red!","Prueba fallida de conexión de red."];	
var netSsidError = "Longitud válida de SSID: 1~32 caracteres. Verifica el SSID.";	
var netOthers = ["Código PIN"];	
var netWlessAutoDes = ["Verifique que el siguiente código PIN esté instalado en el Punto de Acceso antes de pulsar OK.","Pulse el botón en el Punto de Acceso dentro de 120 segundos antes de pulsar OK."];	
var netConnRemind = ["¡Contraseña incorrecta!",
	"Conectando. ¡Por favor espere!","Conexión exitosa. ¡Dirección IP obtenida!",
	"Conexión fallida. Revise la red y vuelva a intentar.",
	"Buscando puntos de acceso. Favor de esperar",
	"¡No hay adaptador inalámbrico conectado al TV!"];	
var netWireIpOptions = ["Ajuste de IP","Tipo de dirección","Dirección IP","Máscara de subred","Gateway predeterminado","DNS primario","DNS secundario"];	
var netWireConnRemind = ["Introduzca un valor entre 0 y 255.","¡Conexión exitosa!","Introduzca una dirección válida","¡Conexión exitosa!","¡Conexión fallida!","Conectando. ¡Por favor espere!","Introduzca un valor entre 1 y 223."];	
var netFlixOptions = ["Desactivar","ESN","Versión Netflix"];	
var netFlixDes = ["¿Desea desactivar?"," "/*Are you sure that you want to ESN?*/];	
var netUpdateTitle = "Actualización de software";	
var netUpdateDialogTitle = "Actualizando software";	
var netBGDownloadTitle = "Descargando";	
var netUpdateLoadingPrompt = ["Buscando actualizaciones. Favor de esperar.","Descargando software... ¡Favor de esperar!","¡NO apague la TV durante la actualización de software!",                            "¡La actualización de software imprescindible se descarga autom. en segundo plano!"];	
var netUpdatePrompt = ["Felicidades. La versión de software está actualizada.",
	"Se encontró una nueva versión de software XXXX. ¿Desea actualizar ahora? Puede tardar unos minutos dependiendo del estado de su red.",
	"Ingreso fallido. ¡Revise y vuelve a conectar!",
	"Falla al recibir datos. Vuelva a intentar más tarde.",
	"Análisis fallido de info. de actualización. Encienda/apague con el control remoto.",
	"Conexión fallida. Revise la red y vuelva a intentar.",
	"Descarga exitosa de software. ¿Desea comenzar a actualizar su TV?",
	"¡Se perdieron los datos! Descarga fallida.",
	"Verificación fallida de software. Vuelva a intentar.",
	"Problemas de conexión. ¡Verifique y conecte de nuevo!",
	"Actualización fallida. Encienda/apague con el control remoto.",
	"Eliminación inesperada del archivo de actualización. Vuelva a intentar la actualización por red.",
	"Descarga exitosa de software en segundo plano. ¿Desea actualizar?"];	
var netUpdateButtonText = ["Descargar", "Actualizar", "Después", "Nunca", "OK","Continuar"];	
var autoDetectPrompt = ["Se encontró una nueva versión de software XXXX. ¿Desea actualizar ahora? Puede tardar unos minutos dependiendo del estado de tu red.",
                        "Se encontró una nueva versión de software XXXX. ¿Desea actualizar ahora?",
			"La actualización por red se abortó la última vez. Debe volver a actualizar.",                        
			"La descarga de la nueva versión XXXX de software no ha concluido. ¿Desea continuar?",                        
			"Software descargado. ¿Desea actualizar ahora?",
			"Software descargado. ¿Desea actualizar ahora? La TV se actualizará automáticamente la próxima vez si se salta ahora."];	
var sysOptions = ["Manual electrónico","Menú de idiomas","Temporizador","Bloquear","Ajustes de entrada","Actualización de software","Ubicación","Modo HbbTV","Cookies","Interfaz común","Ajustes avanzados","Reiniciar a modo de fábrica","Indicador LED","Encendido automático","Auto shop mode","Area","Modo demostración"];
var sysResetDes = "¿Desea continuar?";	
var sysMenuLangOptions = ["Idioma","Idioma preferido de audio","Segundo idioma preferido de audio"];	
var sysTimerOptions = ["Zona horaria","Nombre de región","Reloj","Temporizador de apagado","Modo de espera automático", "Región/País"];	
var sysTimeZone = ["Por transmisión","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00","GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30","GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00","GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00","GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00","GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00","GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];	
var sysTimeZoneLA = ["Como emisor","Región1","Región2","Región3","Región4","Región5"];	
var sysTimeZoneNA = ["Terranova", "Atlántico", "Este", "Central", "Montañas", "Pacífico", "Alaska", "Hawái", "Samoa"];
var sysSleepTimer = ["Apagado","10 Min","20 Min","30 Min","40 Min","50 Min","60 Min","90 Min","120 Min"];	
var sysStandby = ["Apagado","4 Horas","6 Horas","8 Horas"];	
var sysRegionName = ["Madrid","Islas Canarias"];	
var sysClockOptions = ["Sincronización automática","Fecha","Hora","Temporizador de encendido","Temporizador","Encender canal","Temporizador de apagado","Temporizador","Horario de verano"];	
var sysTimer = ["Apagado","Diario","Una vez"];	
var sysInputSet = ["Sin etiqueta","DVD","Blu-ray","HDD","DVDR","Grabar HD","Juegos","VCR","PC","STB digital","STB digital HD","Cámara","Grabador","Otros"];	
var sysAvVideoInput = ["Automático","RGB_CVBS","RGB","CVBS","S-Video"];	
var sysUpdate = ["por USB","por red","por canal"];	
var sysUpdateDes = [" "," "," ","¡No se encontró nuevo software por aire!","Se encontró una nueva versión de software XXXX. ¿Desea actualizar ahora?","Inserte la unidad USB.","No se encontró software. Vuelva a intentar.","Actualizando. Esto tardará unos minutos. Despues la TV se reiniciará.","Actualización exitosa de software.\nLa TV se reiniciará autom. después.","Se encontró una nueva versión de software XXXX. ¿Desea actualizar ahora? Puede tardar unos minutos dependiendo del estado de tu red.","Descargando","Descarga exitosa de software. ¿Desea comenzar a actualizar su TV?","¡Actualización fallida!","Buscando archivos de actualización","Actualización exitosa de software.\nReinicie su TV ahora."];	
var sysProductInfo = ["Versión actual","Nombre del producto","Nombre del fabricante","Número de chasis"];	
var sysCiDes = ["Sin tarjeta CI."];	
var sysAdOptions = ["Registrar DivX(R)","Dar de baja DivX(R)","Enlace T","Error de autorización","Confirmación de baja","Confirmación de alquiler","Alquiler vencido"];	
var sysRegistDes = ["Debe registrar su dispositivo para reproducir los videos protegidos DivX.","Código de registro:","Regístrese en http://vod.divx.com"];	
var sysDregistDes = ["Código de cancelación de registro:","Cancele el registro en http://vod.divx.com","¿Desea continuar con su registro?"];	
var mediaAuthorization = ["Su dispositivo no está autorizado para reproducir este video protegido DivX(R)."];	
var deregistrationConfrimation = ["Su dispositivo ya está registrado.","¿Está seguro que desea cancelar el registro?"];	
var rentalConfirmation = "El alquiler del DivX(R) ha consumido XXXX de YYYY visualizaciones. ¿Continuar?";	
var rentalExpired = "El alquiler del DivX(R) ha consumido XXXX de YYYY visualizaciones. El alquiler del DivX ha caducado.";	
var parentalRatingLA = ["Control de padres","Clasificación de edades","Clasificación de contenido"];	
var ageRatingOptions = ["L","10","12","14","16","18"];	
var contentRatingOptions = ["Apagado","Drogas","Violencia","Sexo","Violencia y drogas","Sexo y drogas","Violencia y sexo","Violencia, sexo y drogas"];	
var sysLockOptions = ["Bloqueo de canal","Intervalo de bloqueo","Control de padres","Bloquear entrada","Bloquear botonera","Bloquear instalación","Cambiar contraseña","Volumen máximo","Limpiar todo"];	
var sysTimeIntervals = ["Tipo de bloqueo","Tiempo de inicio","Tiempo de finalización"];	
var sysRatingOptions = ["Ninguna","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","Clasificación X (España)"];	
var changePass = ["Cambiar contraseña","Nueva contraseña","Confirmar contraseña"];	
var changePassDes = ["Contraseña incorrecta.\nVuelva a introducirla.","La contraseña no coincide.\nVuelve a introducirla.","Contraseña exitosa","Contraseña muy sencilla.\nVuelva a introducir otra."];	
var sysPowerOnChOptions = "Seleccionar modo";	
var sysPowerOnCh = ["Último estado","Seleccionar usuario"];	
var netWlessSecu = ["Abrir","WEP","WPA/WPA2-PSK"];	
var netWlessSecu2 = ["Ninguna","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK","Incompatible"];	
var netWlessSecu3 = ["Ninguna","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Incompatible"];	
var netOptions = ["Conexión a Internet","Interfaz","Ajuste de conexión inalámbrica","Configuración de IP","Información","Prueba de conexión","DLNA","TV Remote","Ajustes de Netflix","Pantalla Inalámbrica","Tipo de dirección","Dirección IP","Máscara de subred","Gateway predeterminado","DNS primario","DNS secundario","SSID","BSSID","Inserta SSID:","ID de usuario"];
var chEditDes = ["¡Número duplicado de canal!","¡Presione el botón Rojo para eliminar el caracter actual!","Números inválidos de canal."];	
var chEpgNoProgram = "Sin canales. Busque nuevamente";	
var chEpgWords = ["Guía de programas","Sin datos de programas.","¡Canal bloqueado!","No se ha encontrado ningún detalle del programa","Sin título del programa"];	
var chEpgBooking = ["Info de horario", "Número de canal","Fecha de inicio.","Hora de inicio","Hora de finalización","Tipo de repetición","Tipo de horario","Agregar horario","Remplazar","Cambiar","Agregar/Modificar"];	
var epgHotKey = ["Día anterior","Día siguiente","Filtro","Lista de horarios","Agregar horario"];	
var chEpgBookRemind = ["Hora de inicio incorrecta","Tiempo de finalización incorrecto","Horario duplicado","Guardado exitoso.","Eliminación exitosa."];	
var chSchePara = ["Lista de horarios","Hora de inicio","Fecha de inicio.","Título de programa.","Nombre del canal","Duración","Repetir","Calendario","Editar","Eliminar"];	
var dateTimer = ["Una vez","Diario","Semanal"];	
var scheduleDeleteReminds = "¿Desea eliminar este horario?";	
var scheduleNoLists = "Sin lista de horarios. Pulsa la tecla \"Roja\" para agregar uno.";	
var chListWords = ["Lista de canales","Seleccionar lista","Modo de sintonización","Agregar a Favoritos","Eliminar","Seleccione la lista de canales","Seleccione el modo de sintonizador","Intercambiar"];	
var chListType = ["Todos","Digital","Analógicos","Radio","Libre","Favoritos"];	
var chAutoScanOptions = ["Seleccione su operador","Tipo de canal","Búsqueda automática"];	
var souSoundType = ["Inválido","Mono","Mono","Estéreo","Estéreo","SAP","SAP","Dual1","Dual2","Dual2","Nicam Mono","Estéreo Nicam","Nicam dual1","Nicam dual2","Nicam dual","Mono","LL","RR","LR"];	
var souPreset = ["Música","Película","Voz","Estándar","Personal"];	
var picAdRgbMode = ["Apagado","Sólo Rojo","Sólo Verde","Sólo Azul"];	
var picAdOptions = ["Reducción de ruido","MPEG NR","Modo RGB","Contraste dinámico","Claridad de moviento de LED","Tono de piel","Modo cine","Modo juego","Temperatura de color","Balance de blancos","Congelar imagen","Ennegrecer","Sobredesviación","GAMMA","Modo HDMI","Balance de blancos","Expansor de color","Reducir difuminación","Reducir temblor","Espacio de color","Claridad de movimiento"];	
var pic10Pwhite = ["Intervalo","Rojo","Verde","Azul","Reajustar","Color","Amarillo","Cian","Magenta"];	
var picMotionClarity = ["Modo de movimiento","Interpolación de movimiento","Claridad de moviento de LED","Reducir difuminación","Reducir temblor","Reajustar"];	
var picMotionMode = ["Película","Suave","Limpiar","Deportes","Cliente"];	
var picResetDes = "Se reiniciarán todos los ajustes realizados. ¿Desea continuar?";	
var pic10PReset = "¿Desea reajustar el balance de blancos 10P?";	
var picMotionReset = "¿Desea reajustar la claridad de movimiento?";	
var picColorSpaceReset = "¿Desea reajustar el espacio de color?";	
var picOptions = ["Modo de imagen","Luz de fondo","Brillo","Contraste","Color","Tinte","Nitidez","Temperatura de color","Formato de pantalla","Formato automático","Realce para deportes","3D","Navegación 3D","Ajustes ECO","Geometría","Ajustes avanzados","Reiniciar imagen","Micro Dimming"];	
var picSize = ["16:9", "4:3", "Formato 14:9", "Zoom","Zoom 16:9", "Acercamiento 16:9","Zoom 14:9","Zoom","Zoom ancho","Zoom 2","Zoom ancho 2","Ajuste nativo de pantalla","Punto por punto","Original","Panorama"];	
var others = ["Volumen","Transmitir","Contraseña","Estado","Guardar","Remplazar","Comenzar","Salir","Buscar","Eliminar","Ninguno","Automático","Buscar","Seguridad","Conectar","Actualizar","Reintentar","Detener","Configuración","Canales","Editar","Insertar","Señal","Concluir","Estéreo","Audio","Fuente","Sin audio","Aviso","Restablecer","Cliente","Configurar","Tienda","Usuario","Cerrar teclado","Modo de seguridad","Diario","Lista PVR"];	
var direction = ["Izquierda","Derecha","Arriba","Abajo"];	
var audioType = ["MPEG","DOLBY AUDIO"/*"AC3"*/,"MPEG4","AAC", "DOLBY AUDIO"/*"AC3P"*/,"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD"," "," "," "," "," "," ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2","HE-AAC_V4","Desconocido"];
var soundChannels = ["Desconocido","Mono","Sub","Dual Mono","Estéreo","Estéreo Sub","Estéreo dolby envolvente","Envolvente de 2 canales","Envolvente","Canal 3.0","Canal 4.0","Canal 5.0","Mono Lfe","Dual Mono Lfe","Estéreo Lfe","Envolvente de 2 canales Lfe","Envolvente Lfe","Canal 3.1","Canal 4.1","Canal 5.1","Canal 7.1","Estéreo combinado","Mono Fmrdo","Estéreo Fmrdo","Mono Fm Mono Nicam","Mono Fm Estéreo Nicam","Mono Fm Nicam Dual","Izquierda","Derecha","Otros"];	
var prompts = ["Ajusta la configuración de imagen para su ambiente de visualización.",
	"Ajusta el nivel de brillo. Mientras más próximo a 100  la imagen será más brillante.",
	"Ajusta el nivel de contraste. Mientras más próximo a 100  la diferencia entre oscuros y blancos es más marcada.",
	"Ajusta el nivel de color. Mientras más próximo a 100  los colores son mas fuertes.",
	"Ajusta el nivel de nitidez. Mientras más próximo a 100  la imagen es más definida.",
	"Ajusta el nivel de luz de fondo. Mientras más próximo a 100 la imagen es más brillante.",
	"Ajusta el nivel de tinte cambiando la tonalidad del color.",
	"Seleccione el formato de imagen que mejor se ajuste al programa que está viendo.",
	"Ajusta opciones de ahorro de energía.",
	"Ajustar la geometría de la pantalla cuando se conecta a una PC.",
	"Ajusta opciones avanzadas de imagen.",
	"Restaura los ajuste de imagen predeterminados.",
	"Seleccione su modo de sonido favorito.",
	"Ajusta el balance de volumen entre los canales derecho e izquierdo.",
	"El sistema de recuperación de sonido TruSurround HD ofrece un alto rendimiento de sonido y claridad con frecuencias bajas y altas.",
	"Selecciona el formato de salida de audio digital de la TV.",
	"Selecciona el idioma del audio que prefieras.",
	"Permitir que personas con problemas de vista disfruten de los programas de televisión.",
	"Prueba la imagen, el sonido y la señal de su TV.",
	"Seleccione el tipo de lista de canales que se ajusten a la señal de su TV.",
	"Selecciona el idioma de los subtítulos de programas que aparecen en la parte inferior de la pantalla.",
	"Ver texto e imágenes del canal actual.",
	"Digital Living Network Alliance. Disfrute su música, imágenes y vídeos en sus otros dispositivos, como su PC, mediante su red doméstica.",
	"Muestra el contenido de su teléfono inteligente en su TV y use su teléfono como control remoto para su TV.",
	"Muestra los contenidos de un dispositivo Android compatible con Miracast en la pantalla de su TV.",
	"Pone un candado a su TV.",
	"Seleccione el nombre de sus dispositivos",
	"Seleccione su ambiente de visualización",
	"Reiniciar modo de fábrica",
    "Desactiva el modo deportivo para obtener más opciones.",
    "Mejorar el contraste ambiental.",
    "Un modo especial para disfrutar juegos de deportes.",
    "Disfruta más funciones CEC."];
var initialTitle = ["Bienvenido","Ajuste inicial"];	
var initialPrompt = ["Todo un mundo de emocionantes experiencias le están esperando. ¡Haga sus ajustes iniciales ahora!",
	"Seleccione su idioma:",
	"Seleccione su país / región:",
	"Seleccione su ubicación:",
	"Seleccione el tipo de conexión a la red:",
	"Seleccione el modo de conexión a red por cable:",
	"Conexión fallida a xxxxxxxxx. Conecte el dispositivo de acuerdo al siguiente diagrama o presione el botón izquierdo para reiniciar.",
	"Conectado a xxxxxxxxx. Presione el botón derecho para continuar.",
	"1)Es posible que su TV ya tenga un adaptador inalámbrico incorporado\n 2)O, si dispone de un adaptador USB inalámbrico, conéctelo a su TV.  Luego, seleccione Red inalámbrica en el modo de conexión.",
	"Buscando. Por favor espere.",
	"¡Sin adaptador inalámbrico conectado al TV!",
	"Asegúrese que el código PIN mostrado abajo, esté instalado en el punto de acceso, antes de pulsar el botón Siguiente.",
	"Presione el botón en el punto de acceso dentro de 120 segundos, antes de pulsar el botón Derecha.",
	"WPS (Ajuste Wi-Fi protegido)",
	"PIN (Número de Identificación Personal)",
	"PBC (Configuración Pulsar Botón)",
	"Sólo es posible acceder al siguiente contenido con una conexión de red. ¿Desea saltar el ajuste de red?",
	"Hay nuevas actualizaciones de software para descargar. Esto puede tardar unos minutos dependiendo del estado de la red.",
	"La actualización de software de su TV le permite disfrutar de las últimas funciones y servicios.",
	"No podrá disfrutar de las últimas funciones y servicios. ¿Desea omitir la actualización de software?",
	"Pulse el botón Derecha para continuar",
	"No apague su TV durante la actualización ya que esto puede dañarlo.",
	"Si no desea actualizar, seleccione NO.",
	"Actualizando, por favor espere.",
	"También puede actualizar el software en SISTEMA/SOFTWARE/ACTUALIZAR.",
	"El país seleccionado requiere ajuste de contraseña.\nDefina la contraseña para su TV y confirme.",
	"Contraseña muy débil.\Usa otros caracteres.",
	"¡Felicidades! Ajuste inicial completado. Puede modificar su configuración mediante el menú principal y los submenús.",
	"Seleccione el modo de seguridad:",
	"Seleccione el modo de conexión a la red inalámbrica:",
	"Red"];	
var initNetCabAndDonRe = ["Sin conexión. Conecte un cable de red.","Sin adaptador inalámbrico incorporado o sin adaptador USB inalámbrico disponible."];	
var initChPrompt = ["Instalación de canales de TV","Seleccione el tipo de búsqueda de antena:","Buscando","Se encontraron los siguientes canales de antena:","Seleccione el tipo de búsqueda por cable:","Selecciona un operador de la siguiente lista.","Configure la info. de búsqueda.","Se encontraron los siguiente canales por cable:","Seleccione un operador de la siguiente lista","Seleccione satélites para buscar o edita el satélite seleccionado","Selecciona los parámetros del satélite","Se encontraron los siguientes canales, y la búsqueda de canales puede volver a realizarse en Canal/Búsqueda de canal"];	
var initClockPrompt = ["¡Obtenga la hora proporcionada por la red!","Fije la fecha y hora"];	
var initialOptions = ["Ambiente","Configuración de red","Actualización de software","Instalación de canales","Reloj"];	
var initialHotkeys = ["Atrás","Seleccionar","Siguiente","Acepto"];
var initLocations = ["Casa","Tienda","Tienda con demo"];	
var initNets = ["Conexión alámbrica","Conexión inalámbrica","No tengo una conexión de red"];	
var initWireManuals = ["Dirección IP","Máscara de subred","Gateway predeterminado","DNS primario","DNS secundario"];	
var initSoftUpdates = ["Actualizar ahora","Actualizar más tarde"];	
var initChannelIns = ["Continuar","No deseo instalar canales"];	
var initChScanTypes = ["Digital y Analógico","Digital","Analógico","No deseo buscar"];	
var initChDvbts = ["Canales ATV por aire:","Canales DTV por aire:"];	
var initChDvbcs = ["Canales ATV por cable:","Canales DTV por cable:"];	
var initChDvbss = ["Canales por satélite:"];	
var initChDvbSOther = ["No deseo buscar satélites"];	
var initEndConnectedStatus = ["Desconectado","WiFi conectado","Conexión alámbrica activada"];	
var initEndInstallations = "XXXX canales instalados";	
var initEndUpdate = ["Actualizado"];	
var audioScenes = ["Escritorio","Pared"];	
var screenSavers = ["Sin canales, por favor pulse aceptar y realice una búsqueda.","Sólo datos","Programa de audio","Sin audio ni video","No disponible","Sin teletexto","Sin datos de programas.","¡Programa bloqueado!","¡Programa bloqueado!\nPulse OK e introduzca la contraseña.","No se ha encontrado ningún detalle del programa.","Programa no apropiado para menores.\nPulse OK e introduzca la contraseña.","¡Canal bloqueado!","¡Canal bloqueado!\nPulse OK e introduzca la contraseña.","¡Entrada bloqueada!\nPulse OK e introduzca la contraseña.","¡Incompatible!","Servicio no disponible en este momento","¡Entrada bloqueada!","Sin título del programa","Sin función","Sin Subtítulo"];
var channelNumberOverPromt = ["The number of search programs has exceeded,you can delete some programs and then retry!"];
var chBookingPromt = ["El canal actual tiene una grabación programada. La TV comenzará a grabar.","Se encontró una grabación programada.\n Cambia a XXXX para grabar","El canal actual tiene un recordatorio.","Se encontró un recordatorio de programación.\n Cambia a XXXX"];	
var timeUnit = ["Seg.","Min"];	
var ciPromt = ["Los datos de red se han modificado. Para actualizar haz una búsqueda de actualizaciones.",];	
var othersPromt = ["Por favor espera...",];	
var menuOptions = ["Imagen","Sonido","Canal","Smart TV","Red","Sistema","Soporte"];	
var optionOptions = ["Modo de imagen","Modo de sonido","Congelar imagen","Enlace T","Función Timeshift","PVR","Lista de horarios","Configuración","demo"];	
var optionTLinkPromt = [["Encendido automático","Modo de espera automático","Menú de la guía"],["encendido","modo de espera","Volumen del amplificador"]];	
var powerPromt = ["¡La TV se apagará pronto!\n Pulse cualquier botón para cancelar."];	
var ttxLanguage = ["Europa oeste","Europa este","Ruso","Árabe/Hebreo","Farsi","Árabe","Bielorruso","Griego","Turco"];
var ttxOptions = ["Revelar","Subpáginas de ciclo","Idioma","Página de alarma","Últimas noticias"];	
var weekday = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];	
var lcnConfflict = "Este programa tiene problemas de recepción. Hay otra versión disponible en el canal %d";	
var inShopMode = "Tu TV está en modo de tienda. Para activar el modo de hogar seleccione 'Sistema' y cambie 'Ubicación' en el menú.";	
var nitRefresh = "Los datos de red se han modificado. ¿Desea iniciar la búsqueda de actualizaciones?";	
var picHDMIMode = ["Automático","Gráfico","Video"];	
var glassRemind = ["Ajuste sus gafas 3D con su TV\n(Pulse y sostenga el botón ENCENDIDO en las gafas 3D).","Sus gafas 3D están conectadas a su TV.","*"];	
var pvrRemind = ["No retire la unidad USB ni desconecte la alimentación."];	
var pvrConName = ["PVR","Info del programa:",["Nota: Para grabar un canal HD, seleccione un dispositivo USB (con velocidad > 5,0MB/seg); para grabar un canal SD, seleccione un dispositivo USB (con velocidad > 3,0MB/seg).","El video grabado se guardará en la carpeta \"pvr\"."],"Detener","Grabar","Hora","Minuto","Duración","Aviso","Utilice teclas de flecha para fijar la duración de la grabación."];	
var pvrDisRemind = "Inserte una unidad USB para grabar.";	
var pvrRemindWords = ["¿Deseas concluir?","¿Deseas detener la grabación y explorar los archivos grabados?","Unidad USB retirada.","Memoria insuficiente.","Sin archivos grabados. Inicie para grabar.","PVR incompatible con canal codificado.","Función no disponible","Guardado exitoso.","¿Desea detener la grabación y cambiar la fuente de entrada?","La TV terminará la grabación en curso. ¿Desea concluir?","La grabación PVR requiere señal de TV para funcionar adecuadamente. Verifique la señal."];	
var pvrChangeCh = ["¿Desea cambiar de canal?","¿Desea detener la grabación y cambiar de canal?"];	
var pvrChangeToPIN8 = ["¿Desea cambiar la fuente del dispositivo conectado a la entrada SCART?",    "¿Deseas detener la grabación y cambiar la fuente del dispositivo conectado a la entrada SCART?"];	
var pvrChangeToCEC = ["¿Desea cambiar la fuente del dispositivo conectado a la entrada HDMI?",   "¿Desea detener la grabación y cambiar la fuente del dispositivo conectado a la entrada HDMI?"];	
var pvrGuideJump = ["¿Desea acceder a la EPG?","¿Desea detener la grabación y acceder a la EPG?"];	
var pvrMediaJump = ["¿Desea acceder a Multimedia?","¿Desea detener la grabación y acceder a Multimedia?"];	
var timeshiftExtra = ["¿Desea detener el cambio de hora y cambiar de canal?","¿Desea detener el cambio de hora y cambiar la fuente del dispositivo conectado a la entrada SCART?","¿Desea detener el cambio de hora y cambiar la fuente del dispositivo conectado a la entrada HDMI?","La función Timeshift no es soportada en los canales codificados.","¿Desea detener el cambio de hora y acceder a la EPG?","¿Desea detener el cambio de hora y acceder a Multimedia?","¿Desea detener el cambio de hora y cambiar la fuente de entrada?","Inserte una unidad USB para grabar.","El tamaño de la unidad USB es insuficiente.","La TV terminará el Timeshift. ¿Desea concluir?"];	
var timeshiftStatus = ["Retroceso rápido","Detener","Reproducir","Pausa","Avance rápido"];	
var pvrPowerOffRemind = ["Grabación en modo de espera","modo de espera","La TV está grabando. ¿Desea continuar grabando mientras esté en modo de espera?"];	
var timeshiftInitTitle = "Ajustar dispositivo USB.";	
var timeshiftInitReminds = ["Este asistente sirve para configurar la unidad USB para la función Timeshift. Seleccione el modo de configuración.", "Para mejorar el rendimiento, le recomendamos formatear el dispositivo USB. Esto borrará todos los datos.", "Seleccione el tamaño del archivo para la función Timeshift.", "Formateando", "Memoria insuficiente.", "Creando archivo para Timeshift", "Probando velocidad", "¡La velocidad de la unidad USB es muy lenta (< %f MB/seg) para la función Timeshift!", "La unidad USB está lista para la función Timeshift. Pero le recomendamos cambiarla (a velocidad > %f MB/seg) para un mejor funcionamiento.", "La unidad USB está lista para la función Timeshift."];	
var timeshiftInitButtons = ["Formato","Saltar","Cancelar","OK","Concluir","Salir"];	
var timeshiftInitOther = ["Velocidad de la unidad USB:","MB/seg"];	
var selectChoice = "¿Desea continuar?";	
var chAtvStore = "Guardar como XXXX";	
var chEpgFirstGenreUK = ["Película","Noticias y hechos","Entretenimiento","Deportes","Niños","Educación","Estilo de vida","Drama"];	
var homePageTitleList = ["APPS","TV","VÍDEOS","Página de inicio"];	
var homePageFavAndAllName = ["Apps favoritas","Todas las aplicaciones"];	
var homePageBackUp = ["Manual electrónico","Guía Encendida"];	
var homePageRemind = ["Funciones completas disponibles sólo con conexión a la red.","Su TV todavía no tiene canales. Los programas estarán disponibles después de la búsqueda de canales.","Sin programas","¿Buscar canales ahora?"];	
var homePageHistory = ["Historial"];	
var miracastTitle = ["Pantalla Inalámbrica","Dispositivo TCL"];
var miracastRemind = ["La pantalla inalámbrica le permite compartir imagen, vídeo y sonido de un dispositivo, como teléfono o tableta, con su TV, de forma inalámbrica (Sin cables).","La pantalla inalámbrica de su TV está lista. Ya puede comenzar a compartir la pantalla de su dispositivo con su TV.","Conectando. ¡Por favor espera!","¡Conexión fallida!","Conexión fallida. Revisa la conexión."];	
var homePageLittleWin = ["Configuración","Multimedia","Canales Fav","Smart TV","EPG"];	
var hbbtvStopRemind = ["¿Deseas detener la reproducción?"];	
var colorSystem = ["Automático","PAL","SECAM","NTSC"];	
var deviceTitleTipsText = "Pulse ≡ para más información";	
var emptyListInfo = "Sin dispositivo USB.";	
var optionVideoListArray_1 = ["Modo de imagen", "Modo de sonido", "Modo de reproducción", "Formato de pantalla", "Modo 3D",   "Interruptor L-R", "Profundidad de campo", "Subtítulo", "Pista de sonido", "Título", "Capítulo", "Información"];	
var optionVideoListArray_2 = ["Modo de imagen", "Modo de sonido", "Modo de reproducción", "Formato de pantalla",   "Subtítulo", "Pista de sonido", "Título", "Capítulo", "Información"];	
var bottomTipsText = ["Reproducir/Pausa", "Retroceso rápido", "Avance rápido", "Lista de reproducción", "Configuración"];	
var picturePresetArray = ["Estándar", "Dinámico", "Natural", "Película", "Personal"];	
var videoPlayModeArray = ["Repetir todo", "Aleatorio", "Normal"];	
var screenModeHDArray = ["16:9", "4:3", "Cine", "Zoom ancho", "Zoom 2", "Zoom ancho 2", "Zoom", "Automático"];	
var screenModeSDArray = ["16:9", "4:3", "Cine", "Zoom 14:9", "Zoom 16:9", "Acercamiento 16:9", "Automático"];	
var Mode3DArray = ["Apagado", "2D-a-3D", "Lado-a-lado", "Arriba-Abajo", "Intercalado de líneas"];	
var videoOptionListArray = ["Apagado", "Pista", "Subtítulo", "Título", "Capítulo"];	
var subMenuTitleText = "Subtítulo";	
var langMenuTitleText = "Idioma del audio";	
var titleMenuTitleText = "Título";	
var mode3DMenuTitleText = "Modo 3D";	
var langInfoText = "Pista";	
var STOP_RESUME_INFO = "Detener-Continuar";	
var playListName = "Nombre";	
var eb_tips = "Aviso";	
var ok_button = "OK";	
var eb_info = ["Error en la decodificación de audio.", "Error en la decodificación de video.", "Formato de audio incompatible.",    "Formato de vídeo incompatible.", "No es posible abrir este archivo.", "Error en la reproducción. Vuelva a intentar.",   "Formato incompatible.", "¡Vaya! El jugador ha detenido la ejecución.",   "Ruta de archivo inexistente o inválida.\n Reinserte el dispositivo de memoria y vuelva a intentar.",   "¿Desea continuar con la reproducción?"];	
var picturePlayErrorTips = ["Falla en la carga!!!","Imagen muy grande!!!","Error de red!!!","Error de hilo de ejecución!!!","Error de parámetro!!!","Error desconocido!!!"];
var frameTitleText = "Nuevo dispositivo";	
var eb_quit_info = "¿Deseas salir?";	
var eb_yes = "Sí";	
var eb_no = "No";	
var offinfo = "Apagado";	
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
var parserArray = ["Normal", "Archivos"];	
var emptyTipsInfo = "¡Vaya! Se encontró un archivo incompatible.";	
var emptyFolderInfo = "¡Vaya! Se encontró un archivo incompatible.";	
var sortName = "Clasificar por";	
var parserName = "Analizador";	
var divx_str1 = "Registrar DivX(R)";	
var divx_str2 = "Dar de baja DivX(R)";	
var infor_str = "Información";	
var quickMenuEmptyText = "Sin opciones disponibles.";	
var musicSoundPresetArray = ["Estándar", "Película", "Música", "Voz nítida", "Personal"];	
var musicInformationArray = ["Nombre", "Artista", "Álbum", "Género:", "Año:", "Duración:"];	
var playListName = "Nombre";	
var playTipsInfo = ["Reproduciendo el primer archivo.", "Reproduciendo el último archivo."];	
var musicNameInfo = "Nombre";	
var musicArtistInfo = "Artista";	
var musicAlbumInfo = "Información";	
var optionSoundPresetInfo = "Modo de sonido";	
var optionBGMInfo = "Reproducción en segundo plano";	
var optionAudioOnlyInfo = "Sólo audio";	
var optionInfoText = "Información";	
var remotePhoneConnecte = "XXXX se ha conectado al TV.";	
var tvRemoteTitle = "TV Remote";	
var tvRemoteDeveloper = "Aplicación desarrollada por TCL";	
var tvRemoteDeviceTitle = "Nombre del dispositivo:";	
var remoteOption = ["Compartir Archivos","Control remoto","Ayuda","Acerca de","Smart Connect"];	
var remotebottom = "Descarga \"TV Remoto\" en su teléfono";	
var remoteStage = ["Android","iOS"];	
var sharingReminds = ["Compartiendo fotos, vídeos y música con la TV desde tu teléfono.","Pasos: \n   1. Pulsa \"TV Remote\" en tu teléfono. Conecte su teléfono con la TV mediante la misma red WiFi;\n   2. Pulsa \"Compartir Archivos\" para explorar archivos multimedia;\n   3. Envía el archivo al TV para reproducirlo (con una de las siguientes opciones)","a) Arrastra y suelta la carpeta/archivo al icono TV en la parte superior de la pantalla;\n      b) Oscila el teléfono hacia el TV para reproducir el primer archivo;\n      c) Reproduce el archivo en el teléfono y pulsa el icono compartir TV;","4. Mientras se reproduce en el TV, sacude el teléfono para reproducir el anterior o el siguiente archivo."];	
var controlReminds = ["Usa el teléfono como mando a distancia para tu TV."," ","Pasos: \n   1. Pulsa \"TV Remote\" en tu teléfono. Conecta tu teléfono con tu TV mediante la misma red WiFi;\n   2. Pulsa \"Control remoto\" para operar tu TV."];	
var helpDeviceWords = "Interacción multipantallas.";	
var helpBottom = "En la era de la tecnología de nube, los dispositivos inteligentes como teléfonos y TVs están mutuamente conectados. Comparte tus archivos en multipantallas con tu familia y controla tu TV desde tu teléfono.";	
var helpReminds = ["Preparativos\n   1. Descarga e instala \"TV Remote\" desde Google Play o Apple Store.\n   2. Conecta tu teléfono con tu TV mediante la misma red WiFi."," ","Teléfono recomendado\n   1. CPU: superior a 800MHz\n   2. Almacenamiento: mínimo 80MB de espacio disponible"," ","Descargo de responsabilidad\n   Si \"TV Remote\" no está disponible en su teléfono, contacte al fabricante de su teléfono."];	
var helpButtons = ["Anterior","Siguiente"];	
var aboutReminds = ["TV Remote","Aplicación desarrollada por TCL"];	
var aboutExit = "Salir";	
var smartReminds = ["Conexión rápida e inteligente entre su TV y su teléfono."," ","Pasos \n   1. Conecta tu TV y su teléfono a la misma red LAN. Pulsa \"TV Remote\" en tu teléfono.\n   2. Pulsa \"Smart Connect\" para escanear el código QR.\n   3. Si la TV está transmitiendo, pulsa por 4 seg. la tecla INFO en el control remoto de la TV y aparecerá un código QR en toda la pantalla.",];	
var smartQRReminds = ["Pulsa \"Smart Connect\" en \"TV Remote\" en tu teléfono y escanea el código QR para conectar rápidamente tu TV y tu teléfono.","El código QR contiene info. de la cuenta LAN. Guárdalo bajo protección."];	
var consoleTipArray = ["Anterior","Siguiente","Consola","Lista de reproducción"];	
var optionInfoArray = ["Modo de imagen","Modo de reproducción","Duración","Efecto","Información"];	
var playModeArray = ["Normal","Aleatorio","Repetir"];	
var durationArray = ["Corto (5s)", "Medio (10s)", "Largo (15s)"];	
var effectArray = ["Ninguna", "Rotar", "Limpiar derecha", "Limpiar izquierda", "Limpiar arriba", "Limpiar abajo", "Dentro del cuadro", "Fuera del cuadro", "Aleatorio"];	
var infoArray = ["Nombre:","Tamaño:","Fecha:","Ubicación"];	
var picturePresetBarTitleInfo = "Modo de imagen";	
var picturePresetBarArray = ["Estándar","Dinámico","Estudio","Película","Personal"];	
var upTipsInfo = "Mover imagen";	
var consoleTipsArray = ["Consola","Anterior","Siguiente","Lista de reproducción","Configuración"];	
var pictureMoveTipsArray = ["Vuelve a pulsar DERECHA para reproducir la siguiente imagen.","Vuelve a pulsar IZQUIERDA para reproducir la siguiente imagen.","Pulse ABAJO para mostrar la lista de reproducción."];	
var optionPvrListArray = ["Modo de imagen","Modo de sonido", "Formato de pantalla", "Modo 3D", "Subtítulo", "Pista de sonido", "Información"];	
var titleSpanFirstArray = ["Control y conexión","Funcionamiento básico","APPS","TV","Configuración","Preguntas frecuentes"];	
var titleSpanSecondArray = [["Control remoto","Teclas del panel","Fácil de navegar","Conexión de la TV","Conexión de la TV","Conexión de la TV","Conexión inalámbrica"],["Arrancador","Barra de estado","Fuente"],["Apps ejecutadas","Multimedia","TV Remote"],["Ajustar canal y volumen","Lista de canales","EPG","Instalación de canales","Canales favoritos"],["Ajuste de imagen","Ajustes de sonido","Ajuste de canales","Actualización de software","Idioma","Protección de menores"],["Preguntas frecuentes","Preguntas frecuentes","Resolución de problemas","Resolución de problemas","Términos y condiciones"]];	
var contentSpan1_1Array = [["ALIMENTACIÓN:","FUENTE:","AJUSTES:","OPCIÓN:","ATRÁS:","Info.:","INICIO:","SALIR:","LISTA:"],    ["Enciende o activa el modo de espera",        "Selecciona la fuente de entrada.",        "Para ver el menú de Ajustes",        "Para ver el menú de Opciones",        "Regresar al menú anterior o salir de una app en ejecución",        "Muestra info de programas",        "Para acceder a la página de inicio del Smart TV",        "Regresar al menú anterior o salir de una app en ejecución",        "Muestra la lista de canales"]];	
var contentSpan1_2Array = ["Canal anterior","Siguiente canal","Subir volumen","Bajar volumen","Ir a página de inicio","Confirmar la opción","Modo de espera/Encendido"];	
var contentSpan1_3Array = ["OK/Guía","Canales arriba","Canales abajo","Bajar volumen","Subir volumen","Aparece como flechas de dirección en algunas funciones."];	
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","Adaptador salida AV","LAN","Teléfono","PC/Decodificador/DVD","Amplificador de sonido","Amplificador de sonido/Monitor","Es posible que su TV no tenga todos los conectores."];	
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Auriculares","Adaptador entrada AV","SPDIF","Adaptador entrada AUDIO CMP","Adaptador entrada CMP (YPbPr)","Dispositivos USB","Dispositivos USB","Auriculares","DVC/Consola de juegos/Decodificador/DVD","Amplificador de sonido","DVC/Consola de juegos/Decodificador/DVD","Es posible que su TV no tenga todos los conectores."];	
var contentSpan1_6Array = ["Interfaz común","SD","VGA","SCART","Mini SCART","Entrada de antena","CI CAM","Tarjeta SD","PC","Decodificador/DVD","Antena/Cable/Satélite","Es posible que tu TV no tenga todos los conectores."];	
var contentSpan1_7Array = ["Tableta","PC","Router","Teléfono","TV"];	
var contentSpan1_8Array = ["Función Interruptor/Encender","Pulse sin soltar para activar el temporizador de apagado automático.","Abajo","Arriba","Volumen/Canal/Fuente"];
var contentSpan2Array = [["Pulsa las flechas de dirección para ver la página de inicio.","Después, pulsa OK para mirar uno de los programas destacados o ingresar a la App."],["Muestra fecha, red, dispositivos, etc. en la esquina superior derecha de la pantalla."],["Selecciona la fuente de entrada de los dispositivos conectados al TV mediante diferentes puertos, como TV, AV, HDMI etc."]];	
var contentSpan3Array = ["Mira y disfruta tus apps favoritas mediante la página Smart TV.","Mira fotos, videos y escucha música desde un dispositivo USB.","Conecta tu TV y tu smartphone o tableta a la misma LAN.","Pulsa nScreen o TV a Distancia en tu smartphone o tableta.","Comparte fotos, videos y música en multipantallas con tu familia y opera tu TV desde tu smartphone."];
var contentSpan4Array = [["Pulsa P+/P- para cambiar canales.","Pulsa V+/V- para graduar el volumen."],["Pulsa LIST en el mando a distancia para ver la lista de canales.","Pulsa ARRIBA/ABAJO para elegir un canal."],["EPG es una guía digital que muestra los programas de TV programados. Puedes navegar, seleccionar, ver y grabar programas."],["Busca e instala canales."],["Agrega o edita tus canales favoritos en la Lista de canales."]];	
var contentSpan5Array = ["Disfruta de tus programas favoritos mediante apps de video."];	
var contentSpan6Array = [["Pulsa MENU para ver las opciones de ajustes del sistema.","Entra a Ajustes de Imagen para fijar los valores."],["Pulsa MENU para ver las opciones de ajustes del sistema.","Entra a Ajustes de Sonido para fijar las opciones."],["Pulsa MENU para ver las opciones de ajustes del sistema.","Entra a Ajustes de Canal para fijar las opciones."],["Actualiza tu TV cuando aparezca una nueva versión de software."],["Puedes elegir el idioma del menú."],["Permite que los padres bloqueen canales o programas inapropiados para menores."]];
var contentSpan7_1Array = [["No hay imagen ni sonido","Verifica el funcionamiento del interruptor.","Conecta otro aparato eléctrico en el tomacorriente para verificar si funciona o si está encendido.","El cable de alimentación no está haciendo contacto con el tomacorriente.","Verifica la fuente de señal."],["Imagen normal, sin sonido","Pulsa el botón V+ para aumentar el volumen.","El ajuste de sonido es incorrecto.","Error de señal de la transmisión."],["Sonido normal, sin imagen.","Ajusta el brillo y contraste.","Error de señal de la transmisión.","Verifica si está en modo de sólo audio."]];	
var contentSpan7_2Array = [["Interferencia de frecuencia de radio","Esta interferencia produce ondulaciones o rayas diagonales, y en algunos casos, pérdida de contraste de la imagen. Encuentra la fuente de interferencia de radio y elimínala."],["Sin color","Revisa los ajustes de color.","Intenta otro canal. Aparece imagen en blanco y negro."],["El mando a distancia no funciona","Remplaza las baterías.","Baterías mal instaladas. Conector de alimentación de la TV desenchufado."]];	
var contentSpan7_3Array = [["No aparece el contenido del dispositivo USB","Verifica que el dispositivo USB sea compatible con la TV.","Verifica que el formato de los archivos de audio e imagen sean compatibles con la TV."],["Reproducción sin sonido","El formato del archivo de video no es compatible con el reproductor de la TV."],["Los archivos no se reproducen normalmente","La tasa de transferencia del dispositivo USB puede limitar la tasa de transferencia de datos de la TV."]];	
var contentSpan7_4Array = [["A qué debo prestar atención cuándo actualizo el software","Que no se interrumpa la corriente durante la actualización.","Evita usar tu mando a distancia durante la actualización.","Ten paciencia porque el proceso de actualización puede tardar."],["No hay cambios notables en la interfaz de la TV después de la actualización.","Bajo ciertas condiciones, la actualización de software no sólo puede actualizar o añadir nuevas funciones, sino también mejora el rendimiento de la TV sin que se muestren cambios en la interfaz. Asimismo, la interfaz de la TV puede, a veces, permanecer intacta."]];	
var termsTitle = "Términos y condiciones";	
var termsConditions = ["Los contenidos y servicios (de aquí en adelante la \"Aplicación con Licencia\") puestos a su disposición a través de este aparato de TV (de aquí en adelante el \"Dispositivo\") tienen licencia de uso bajo estos términos y condiciones, es decir, no están a la venta. Los proveedores de la Aplicación con Licencia (de aquí en adelante un \"Proveedor de la Aplicación\") se reservan todos los derechos que no se le otorguen a usted explícitamente. \n 1.Alcance de la Licencia.\n- La Licencia para una Aplicación con Licencia que el Proveedor de la Aplicación pertinente le otorga a usted, se limita a una licencia intransferible para usar la Aplicación con Licencia en el Dispositivo que usted posee o controla. Usted no puede distribuir o poner la Aplicación con Licencia en una red en la que múltiples dispositivos puedan usarla de forma simultánea. Usted no puede alquilar, prestar, vender, redistribuir o sublicenciar la Aplicación con Licencia. \n Usted acepta que toda la Aplicación con Licencia y todos los contenidos que incluye y que son accesibles mediante este Dispositivo, pertenecen al Proveedor de la Aplicación y están protegidos por las leyes vigentes sobre propiedad intelectual. Usted no puede modificar, copiar, descompilar, aplicar ingeniería inversa, desmontar, republicar, cargar, compartir, transmitir, traducir, intentar derivar el código fuente, crear trabajos derivados, o explotar de cualquier otra forma ninguna Aplicación con Licencia, actualización ni sus partes. Si usted viola esta restricción, puede ser procesado por indemnización de daños y perjuicios. Los términos de la licencia regirán cualquier actualización provista por el Proveedor de la Aplicación que remplace y/o complemente la Aplicación con Licencia original, salvo que dicha actualización esté acompañada por una licencia separada, en cuyo caso regirán los términos de esa licencia. Usted será el único responsable por cualquier y todos los costos (si existiese alguno) de actualización de la Aplicación con Licencia. \n 2.Materiales de terceros.\n La Aplicación con Licencia puede permitir el acceso del Proveedor de la Aplicación y de servicios y sitios web de terceros (de aquí en adelante, los \"Servicios\"). Usted acepta que al usar cualquiera de los Servicios, puede encontrar contenidos considerados ofensivos, indecentes u objetables, o que pueden o no ser identificados por contener lenguaje explícito, y que los resultados de cualquier búsqueda o introducción de una URL en particular puede automática e involuntariamente generar enlaces o referencias a materiales objetables. Sin embargo, usted acepta que el fabricante de este Dispositivo (el \"Fabricante\") y el Proveedor de la Aplicación no tienen ninguna responsabilidad hacia usted por aquellos contenidos que puedan ser ofensivos, indecentes o censurables.\n Al utilizar los Servicios, usted reconoce y acepta que el Fabricante no es responsable de examinar o evaluar el contenido, su exactitud, integridad, actualidad, validez, cumplimiento de los derechos de autor, legalidad, calidad ni cualquier otro aspecto de dichos Servicios. El Fabricante no garantiza o endosa, no asume ninguna responsabilidad ni será considerado responsable ante usted ni otra persona por cualquiera de los Servicios. \n Usted acepta que los Servicios pueden contener contenidos, información y materiales exclusivos (de aquí en adelante, \"Materiales de Terceros\") que están protegidos por leyes vigentes de propiedad intelectual u otras, y que usted no usará dichos Materiales de Terceros de ninguna manera, salvo para el uso permitido de los Servicios. Usted acepta no reproducir, modificar, alquilar, prestar, vender, distribuir los Materiales de Terceros ni crear ningún tipo de trabajos derivados de los mismos, y no explotará los Servicios de ninguna forma no autorizada. Usted también acepta que no usará los Servicios para de ninguna manera hostigar, abusar, acosar, amenazar, difamar, infringir o violar los derechos de cualquier otra parte, y que el Fabricante no es de ninguna forma responsable por el uso que haga usted, ni por cualquier mensaje o transmisión de hostigamiento, amenaza, difamación , ofensa o ilegal que usted pueda recibir como resultado de cualquiera de los Servicios. \n 3.Sin garantía.\nUsted acepta que el uso de la Aplicación con Licencia y los Servicios es a completo riesgo suyo. La Aplicación con Licencia y los Servicios, en su conjunto, son provistos \"tal cual están\" y \"según su disponibilidad\" sin ningún tipo de garantía, ya sea explícita o implicita. El Fabricante expresamente deslinda toda garantía y condiciones con respecto a la Aplicación con Licencia y los Servicios, ya sea de forma explícita o implícita, incluyendo, pero sin limitarse a, garantías de comercialización, de calidad satisfactoria, de adecuación para un propósito específico, de precisión, de goce pacífico, y de no vulneración de los derechos de terceros. El Fabricante no garantiza la precisión, validez, oportunidad, legalidad, o integridad de cualquier Aplicación con Licencia o Servicios disponibles mediante este Dispositivo, y no garantiza que este Dispositivo, la Aplicación con Licencia o los Servicios cumplan sus requisitos, o que el funcionamiento de la Aplicación con Licencia o los Servicios sea libre de interrupciones o errores, o que se corrijan los defectos en la Aplicación con Licencia o los Servicios. Si la Aplicación con Licenciada o los Servicios resultan ser defectuosos, usted deberá asumir el costo total de cualquier servicio, reparación o corrección.\nUsted reconoce y acepta que la Aplicación con Licencia y los Servicios pueden ser modificados, suspendidos, retirados, finalizados o interrumpidos, o el acceso puede ser desactivado en cualquier momento, sin previo aviso, y el Fabricante no se responsabiliza ni garantiza que ningún contenido o servicio incluidos en la Aplicación con Licencia y los Servicios permanezcan disponibles durante un determinado período. Dichos contenidos y servicios son transmitidos por terceros mediante redes e instalaciones de transmisión sobre los cuales el Fabricante no tiene ningún control. Sin limitar la generalidad de lo precedente, el Fabricante expresamente deslinda cualquier responsabilidad por cualquier cambio, interrupción, desconexión, eliminación o suspensión de cualquier contenido o servicio disponibles a través de este Dispositivo. El proveedor de la Aplicación y otros proveedores de los Servicios se reservan el derecho a cambiar, suspender, eliminar, o desactivar el acceso a la Aplicación con Licencia o los Servicios en cualquier momento y sin previo aviso. Asimismo, el Fabricante puede imponer límites en el uso de o el acceso a ciertas Aplicaciones con Licencia o Servicios, en cualquier caso y sin previo aviso o responsabilidad.\nEl Fabricante no es responsable del servicio de atención al cliente relacionado con la Aplicación con Licencia y los Servicios. Cualquier pregunta o solicitud de servicio relacionados con la Aplicación con Licencia y los Servicios debe ser dirigida directamente al proveedor respectivo.\n 4. Recopilación y uso de información \nUsted acepta que el Fabricante, los Proveedores de Aplicaciones y los Proveedores de Servicios pueden recopilar y utilizar datos técnicos e información relacionada, incluyendo pero sin limitarse a la información técnica de este Dispositivo, sistema y software, y periféricos, para facilitarle el suministro de actualizaciones de software, soporte de producto y otros servicios (si los hay) relacionados con el Dispositivo y la Aplicación con Licencia. El Fabricante, el Proveedor de la Aplicación y los proveedores de los Servicios pueden usar esta información, siempre y cuando sea de forma anónima, para mejorar sus productos o para brindarle a usted servicios o tecnologías. \n 5.No disponibilidad de ciertas funciones.\nDebido a restricciones del Proveedor de la Aplicación, ciertas funciones, aplicaciones y servicios pueden no estar disponibles en este Dispositivo (incluyendo sus dispositivos periféricos) o en todos los territorios. Algunas funciones de este Dispositivo también pueden requerir dispositivos periféricos adicionales o cuotas de membresía, vendidos por separado. \n 6.Límite de responsabilidad.\nEn la medida en que no esté prohibido por las leyes vigentes, bajo ninguna circunstancia, incluyendo negligencia, el Fabricante asume ninguna responsabilidad, ya sea de forma contractual o extracontractual, por ningún daño o perjuicio directo, indirecto, fortuito, especial o consecuente, honorarios de abogados, gastos o cualquier otro daño o perjuicio ocasionado por, o en relación con, cualquier información contenida en, o como resultado del uso del Dispositivo, cualquier Aplicación con Licencia o Servicio por parte suya o de terceros, incluso con previa advertencia sobre dichos daños."];	
var noChannelListRemind = ["No se encontraron canales. Lista de canales disponible después de la búsqueda de canales.","Búsqueda de canales"];	
var closeSubtitleRemind = "La función estará disponible cuando el subtítulo esté apagado. ¿Deseas ajustar ahora?";	
var estickerTitles = ["Imágenes altamente realistas","Colores vívidos","Gran movimiento realista","Imagen dinámica de calidad","Actualización UHD SR","Experiencia del mundo 3D","Rendimiento más rápido","Contenidos 4K futuristas","Disfruta del mundo virtual","Acceder a contenidos adicionales","Sintonizadores digitales integrados","Conectar todos los dispositivos","Varias fuentes 4K","Contenidos USB","WIFI ultra rápida","Contenidos móviles en TV","Contenidos para dispositivos móviles","Contenidos locales","Aprobado por DivX","Imagen perfecta","Canal listo","TDT Premium"];	
var estickerDescriptions = ["Una fantástica experiencia de visualización gracias a las imágenes Full HD con cuatro veces más detalles en la pantalla UHD.","Amplia gama de colores emocionantes en cada escena con rojos vívidos y verdes esmeralda","Interpolación de cuadros 4K y luz de fondo que neutralizan los problemas de movimientos borrosos.","La intensidad de la imagen original se potencia para producir una verdadera expresión dinámica con un contraste brillante.","Disfruta tus programas de TV y discos Blu-Ray con nitidez nunca antes vista gracias a la tecnología Super Resolution.","Disfruta de tu TV lista para 3D y mira los contenidos 3D que desees.","Una experiencia mucho más placentera gracias a Quad Core que permite una interacción suave y un rendimiento superior.","Compatible con el códec HEVC (H.265) que define el venidero vídeo 4K.","Extensa variedad de aplicaciones en línea, servicios de Vídeo bajo demanda (VOD), televisión al día (catch-up TV) y navegación en Internet.","Mira más con servicios y contenidos adicionales de sus distribuidores favoritos.","Acceda a canales de TV en alta definición sin necesidad de un decodificador adicional.","Fácil de conectar con todas las fuentes digitales disponibles en su hogar.","TV lista para el futuro, capaz de reproducir 4K 50/60Hz mediante HDMI 2.0 con HDCP 2.2","Mire sus contenidos de imágenes o vídeo directamente desde su dispositivo USB, disco duro o cámara, en la pantalla grande de su TV con resolución 4K.","2x2 MIMO de última generación y la norma AC permiten una incomparable velocidad de acceso a Internet.","Disfrute en la pantalla grande sus imágenes, vídeos, aplicaciones desde sus dispositivos móviles gracias a la tecnología Screen Mirroring.","Disfrute en la pantalla grande sus imágenes, vídeos, aplicaciones desde su teléfono o tableta.","Mire en la pantalla grande sus contenidos como imágenes, vídeos desde sus dispositivos conectados a su red local.","Mire películas alquiladas o suyas protegidas por DivX","Bisel ultra delgado y diseño extra plano","Probado y aprobado por Canal+","TDT Premium probado y aprobado"];	
var eManualTextArray = ["Manual electrónico","Todas las imágenes incluidas son sólo representaciones."];	
var frontPanelRemind = "Botonera bloqueada";	
var eRPRemind = "El modo Tienda con demo no cumple con los requisitos ERP. ¿Desea seleccionar?";	
var noRelatedChannel = "Sin canal relacionado";	
var option0624Name = ["BOP","BFS","Evento por evento","GetUserID","Música de fondo","Reiniciar todo","Reiniciar modo de tienda","NRM","DVB-T2 y selección de país","Modo HbbTV"];	
var DVBT2AndChoice = ["Encendido","Por país","Apagado"];	
var hbbtvServiceRemind = "El servicio HbbTV estará disponible pronto.";	
var insertWord = "Insertar";	
var viewDetail = "Ver detalle";	
var remindOAD = "Actualización de software. Es posible que otro canal tenga una nueva actualización recomendada de software. Si acepta descargarlo, el TV cambiará automáticamente el canal. ¿Desea hacerlo ahora?";	
var LEDStatus = ["Parpadeo", "Normal","Apagado"];	
var netFlixRemind = "Esta función interrumpe el acceso a los servicios de Netflix hasta que vuelva a ingresar.";	
var ESNExplanation = "Número de serie electrónico";	
var resetShopRemind = "El sistema se está reiniciando. por favor no apague la TV.";	
var initialSelectOption = "Selecciona una opción:";	
var databaseRemind = "El sistema ha identificado que la base de datos está dañada por alguna razón no identificada y la reconstituirá automáticamente. Pulse OK para continuar.";	
var Deactivation = "Desactivación";	
var oadFutureRemind = "Actualización de software.\n Un nuevo software recomendado estará disponible en %s. La actualización puede tardar unos minutos y la pantalla puede ennegrecerse. No apague el receptor durante la actualización. Si acepta esta actualización, deje el receptor encendido en la hora programada. ¿Desea recibir esta actualización?";	
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
var bt_deviceList_Conncect_Failed_Tips2 = "Confirme que la función Bluetooth XXX esté encendida";	
var bt_deviceList_Conncect_Success = "Conectado a dispositivo Bluetooth.";	
var bt_deviceList_Disconncect_Success = "Desconectado de dispositivo Bluetooth.";	
var bt_deviceList_Disconnect = "¿Desea desconectarte de XXX?";	
var bt_tipsTitle = "Sugerencia";	
var bt_bluetooth_Pairing_Title = "Conexión Bluetooth";	
var bt_bluetooth_Input_Pin = "Introduce tu PIN:";	
var bt_bluetooth_Output_Pin_Tip = "Introduce tu PIN XXXX por teclado.";	
var bt_bluetooth_Pin_Wrong_Tip = "PIN incorrecto";	
var bt_bluetooth_Remove_Pair_Title = "Consulta";	
var bt_bluetooth_Remove_Pair_Ask = "¿Olvidar este dispositivo?";	
var audioDescriptionName = ["Descripción de audio","Altavoz","Volumen de altavoz","Auriculares","Volumen de auricular","Volumen AD","Dispositivo BT","Volumen de dispositivo BTD","Amplificador","Altavoz"];	
var audioDescriptionOptions = ["Apagado","Normal","Descripción de audio"];	
var volumeOffRemind = "Ajuste XXX \"Encendido\" en el menú de ajustes.";	
var mEPSRemind = "El modo de tienda no cumple con los requisitos MEPS. ¿Desea seleccionarlo?";	
var parentRatingAUOptions = ["Sin bloqueo", "Bloquear G y superior (opcional)", "Bloquear PG y superior", "Bloquear M y superior", "Bloquear MA y superior", "Bloquear AV y superior",  "Bloquear R y superior", "Bloquear todo"];	
var mEPSTips = ["El modo actual de imagen no cumple con los requisitos MEPS\n. Se recomienda el modo estándar.",    "Su TV está en modo de tienda.\nPara el modo Hogar mire el menú de ajustes."];	
var switchSourceRemind = "insertado. ¿Deseas cambiar?";	
var footballModeName = "Modo deporte";	
var resetStadium = "Estadio";	
var atvSearchMenu = "Búsqueda manual ATV";	
var dtvSearchMenu = "Búsqueda manual DTV";
var settingNoticeSourceName = "Fuente automática";	
var smartTVOptions = ["Portal Smart TV","HbbTV","Compartir y ver","Pantalla Inalámbrica","Políticas del TV",                            "Modo de espera en red","Reiniciar el TV","Cookie policy","Política de privacidad","Eliminación de datos"];
var supportOptions = ["Diagnóstico remoto","Contáctenos"];	
var tvDoctor = ["Diagnóstico remoto 2.0","La aplicación está disponible sólo para que su Smart TV ejecute el diagnóstico y mejore la experiencia del producto. La aplicación recopilará los datos de funcionamiento del TV y del modelo y los enviará a un servidor, y se usarán para resolver el problema. No se accederá a tu información personal. Verifique que tu TV esté correctamente conectado a Internet.","Diagnóstico local","Siga las instrucciones del personal de apoyo cuando el diagnóstico comience.","Diagnóstico remoto","Verifique que el personal de apoyo esté conectado.","Número de serie:","&nbsp;&nbsp;&nbsp;&nbsp;User ID:","Conectar...","Conectado. Manténgase conectado a la red.","No se puede acceder a Internet.\nRevise la conexión de red.","Salir"];	
var ClosedcaptionName = "Subtítulos";	
var sysCCOptions = ["Subtítulos","Subtítulos analógicos","Subtítulos digitales","Sobreponer","Subtítulos"];	
var sysCCmodeOption = ["Apagado", "Encendido", "Encendido cuando este en silencio"];	
var sysanalogCCOption = ["Apagado", "Subtítulos1", "Subtítulos2", "Subtítulos3", "Subtítulos4", "Texto1", "Texto2", "Texto3", "Texto4"];	
var sysdigitalCCOption = ["Apagado", "Servicio 1", "Servicio 2", "Servicio 3", "Servicio 4", "Servicio 5", "Servicio 6", "Servicio 7", "Servicio 8"];	
var syssuperimposeOption = ["Apagado", "Servicio 1", "Servicio 2", "Servicio 3", "Servicio 4", "Servicio 5", "Servicio 6", "Servicio 7", "Servicio 8"];	
var sysCCOPtionItems = ["Opciones de subtítulos","Modo","Estilo de fuente","Tamaño de fuente","Estilo de borde de fuente","Color de borde de fuente","Color primer plano","Color del fondo","Opacidad primer plano","Opacidad del fondo"];
var sysCCOtionMode = ["Usuario","Predeterminado"];
var sysCCOptionFontStyle = ["Predeterminado","Fuente1","Fuente2","Fuente3","Fuente4","Fuente5","Fuente6","Fuente7"];
var sysCCOptionFontSize = ["Predeterminado","Grande","Pequeño","Normal"];
var sysCCOptionFontEdgeStyle = ["Predeterminado","Ninguno","Elevado","Hundido","Sombra izquierda","Sombra derecha"];
var sysCCOptionFontColor = ["Predeterminado","Negro","Blanco","Rojo","Verde","Azul","Amarillo","Magenta","Cian"];
var sysCCOptionFontOpacity = ["Predeterminado","Sólido","Parpadeando","Translúcido","Transparente"];
var contactUsOption = ["Contáctenos",    "Contáctenos si tiene problemas para operar este dispositivo.",    "Contáctenos",    "Sitio Web: Visita",    "Número del centro de llamadas:","Información del producto","Nombre del modelo:",    "Versión de software:","*","ID de usuario:","ID de proyecto:",    "Tipo de cliente:","Dirección MAC inalámbrica:","Dirección MAC alámbrica:","Netflix ESN:","Busca la información en su teléfono.",    "Después seleccione su país."];
var homePageWords = ["Historial", "Buscar"];	
var titlePageWords = ["Casa", "VÍDEOS","TV","APPS"];	
var videosPageWords = ["Película", "Deportes","Música","Popular","Juegos","Educación","Noticias"];	
var statusPageWords = ["USB","Configuración","WiFi","Conexión alámbrica"];	
var searchPageWords = ["Buscar", "Búsquedas populares:","Programas, Películas, Gente ..."];	
var resultSearchPageWords = ["Resultados sobre"," ","Intente con otra palabra de búsqueda.","Lo sentimos. No se encontró ningún video."," "];	
var historyPageWords = ["Historial", "Pulsar","para eliminar el historial","Eliminar uno","Eliminar todo","Ayer","Hoy","Todavía no ha mirado ningún video.","Eliminación exitosa del historial."];	
var channelPageWords = ["Lo sentimos, no se encontró ningún video."];	
var virtualRemoteValues = ["1","2","3","4","5","6","7","8","9",                          "Zoom-","0","Zoom+",                          "Salir","0","*",                          "Lista","0","Texto",                          "Guía","Introducir","Salir",                          "Menú","Subtítulo","Info",                          "Detener",                          "Info","Menú","Salir",                          "Salir"                          ];	
var sportsModeInitReminds = ["Este asistente sirve para configurar la unidad USB para el Modo Deportes. Seleccione el modo de configuración.", "Seleccione el tamaño del archivo para el Modo Deportes.", "Creando archivo Modo Deportes", "¡La velocidad de la unidad USB es muy lenta (< %f MB/seg) para el Modo Deportes!", "La unidad USB está lista para el Modo Deportes. Le recomendamos cambiarla (a velocidad > %f MB/seg) para un mejor funcionamiento.", "La unidad USB está lista para el Modo Deportes."];	
var sportsModeExtra = ["¿Desea detener el Modo Deportes y cambiar de canal?","¿Desea detener el Modo Deportes y cambiar la fuente a dispositivo conectado a la entrada SCART?","¿Desea detener el Modo Deportes y cambiar la fuente a dispositivo conectado a la entrada HDMI?","El Modo Deportes no es compatible con Canal Codificado.","¿Desea detener el Modo Deportes y acceder a EPG?","¿Desea detener el Modo Deportes y acceder a Multimedia?","¿Desea detener el Modo Deportes y cambiar la fuente de entrada?","La TV cerrará el Modo Deportes actual. ¿Desea concluir?"];	
var remoteControlNote = "*";
var parentalRatingNA		= ["Control de padres","Bloquear canales sin clasificar","Clasificación de edades","Clasificación de contenido","EE.UU.","Canadá","Ajustes RRT","Reiniciar RRT"];
var parentalRatingOptionUS		= ["EE.UU.","Clasificación de TV","MPAA"];
var sysTVRatingUS=["TV-Y","TV-Y7","TV-PG","TV-14","TV-MA"];
var sysMPAAUS=["G","PG","PG-13","R","NC-17","X"];
var parentalRatingOptionCanada		= ["Canadá","Inglés Canadiense","Francés Canadiense"];
var sysCanadaEng=["C","C8+","G","PG","14+","18+"];
var sysCanadaFre=["G","8ans+","13ans+","16ans+","18ans+",""];
var sysResetRRT=["Confirme si desea reiniciar RRT?"];

var textArray = ["Volumen","Canal","Fuente","Cambiar/Energía","Guía","segundos para apagado"];
var guideArray = ["VOL-","VOL+","CH-","CH+","Prev.","Sig."];
var favChannelListRemind = ["Sin canales favoritos. Vea otras listas y mediante la “Tecla Verde” añada sus canales favoritos."];

var proxySetting = ["Ajustes de proxy","Puerto"];
var powerOffShop = ["Se recomienda usar el modo Tienda, ¿desea usarlo?"];
var tcastTextPageWords = ["Abundantes videos, poderosas aplicaciones","TV a distancia, al alcance de su mano","Grandes contenidos, compartidos en una gran pantalla"];
var tcastOtherWords = ["Escanear código QR y descargar T-Cast","Red conectada a la TV","Nombre del TV","T-Cast"];
var hbbtvWords = ["HbbTV Setting","HbbTV","Cookies","Cookies de terceros","ID del dispositivo","Rastreo"];
var hbbtvTrackingWords = ["SI","NO","No importa"];
var eStickerTipWords = ["El almacenamiento es menor a 400M, desea eliminar los videos de Demo para obtener más espacio?"];
var delEstickerVideoRemid = ["El video ha sido borrado satisfactoriamente"];

var clockPageWords = ["Local","Pekín","Tokio","Hongkong","Taipei","Singapur","París","Londres","Moscú","Nueva Delhi","Djakarta","Nueva York","Río",
                        "Pulse la tecla \"OK\"","No se puede agregar!"];
var smartKeyWords = ["Pantalla Inalámbrica","Disfruta la música","Temporizador de apagado","Reloj mundial","Barra de sonido","WiFi","PVR","Modo deporte"];
var recommendWords = ["Recomendados"];
var onlyListenRemindWords = ["Seleccione modo Solo Audio","Presione una tecla, excepto volumen, para salir"];
var selectSatRemind = "¡Puedes seleccionar sólo hasta 20 satélites!";
var cookiePolicyTitle = "Política de Cookies – Servicios Online para Smart TV";
var cookiePolicyConditions = ["La Empresa respeta su privacidad cuando utiliza los Smart TV que fabrica y los Servicios que presta. Las cookies son utilizadas por muchos sitios web y servicios de Internet. Su Smart TV aceptará, almacenará y transmitirá cookies para asegurarse de que dichos sitios web y servicios funcionen adecuadamente. La Empresa también utiliza cookies cuando le presta Servicios. En la presente Política de Cookies, la Empresa describe qué cookies se instalan en su Smart TV y cómo Ud. puede gestionarlas.\nTenga en cuenta que todos los datos personales que la Empresa recaba y/o trata a través o con la ayuda de cookies están sujetos a la Política de Privacidad. Ud. deberá leer la presente Política de Cookies junto con la Política de Privacidad.\n1. ¿Qué es una cookie?\nLas cookies son pequeños archivos de texto que pueden instalarse en su Smart TV. Cuando se accede a un sitio web o al servicio \"Botón Rojo\" de una cadena de televisión, el sitio web o servicio puede almacenar una cookie en el Smart TV. Durante los posteriores accesos, la cookie instalada en su Smart TV envía información a la parte que la ha instalado. Las cookies son muy comunes y se utilizan en muchos sitios web y servicios. Cada cookie contiene normalmente el nombre de dominio del que procede, su duración y un valor (normalmente un número único). Para obtener una explicación más detallada de qué son las cookies y cómo funcionan, entre en www.allaboutcookies.org.\nLas cookies se pueden clasificar en funcionales y no funcionales. Las cookies funcionales son aquéllas estrictamente necesarias para prestarle los servicios de Smart TV y para que los sitios web y demás servicios proporcionen el contenido adecuado en el Smart TV. Las cookies no funcionales son todas las demás cookies.\nLa presente Política de Cookies se refiere a las cookies que son instaladas por nosotros, así como a las cookies de publicidad que puedan ser instaladas por terceros a través de nuestros servicios en su Smart TV. La presente Política de Cookies no se refiere a las cookies que puedan instalarse cuando Ud. utilice los servicios de Smart TV para acceder a sitios web, servicios o aplicaciones de terceros. En el caso de estas cookies, le remitimos a las respectivas políticas de cookies de dichos terceros. No obstante, la presente Política de Cookies describe cómo eliminar dichas cookies (véase apartado 4 siguiente).\n2. ¿Qué cookies no funcionales utilizamos?\nPublicidad: Cuando utilice los servicios de Smart TV podrán entregarse anuncios audiovisuales y gráficos en su Smart TV. Estos anuncios podrán ser entregados por nosotros o por terceros a través o con la coordinación de nuestro servidor de publicidad, que desempeña una función crucial en la coordinación de la entrega de dichos anuncios. Nuestro servidor de publicidad o el servidor de publicidad del tercero instalará una cookie en su Smart TV. Mediante esta cookie, el servidor de publicidad registrará si se ha entregado un anuncio en su Smart TV o si alguien que esté utilizando su Smart TV ha hecho clic en un anuncio. Utilizamos la información guardada en dicha cookie de publicidad para recordar qué anuncios han sido entregados en su Smart TV y asegurarnos así de que no se entreguen demasiados anuncios iguales en su dispositivo y de que podamos ajustar las condiciones comerciales con nuestros partners de publicidad. No utilizaremos esta información para entregar publicidad segmentada. Además, nuestro sistema de publicidad podrá ser utilizado por terceros para entregar anuncios en su Smart TV e instalar cookies en su Smart TV cuando se entreguen dichos anuncios. \nEstas cookies contienen, entre otros datos, información acerca de los anuncios entregados, información relativa a la aplicación o al nombre de dominio en el que se entregan dichos anuncios, así como su dirección IP. Dichos datos son almacenados para recordar con qué frecuencia se muestra un anuncio concreto y para impedir que el mismo anuncio se muestre con demasiada frecuencia. Los terceros anunciantes externos que entreguen anuncios también podrán usar cookies para hacer un seguimiento de las actividades que Ud. realice en diferentes sitios web, así como para entregar anuncios que se adapten a sus preferencias personales.\n3. Sitios web de terceros\nCuando Ud. visite sitios web o servicios de terceros a través de los servicios de Smart TV de su dispositivo, es posible que dichos sitios web o servicios instalen cookies en su Smart TV y que dichos sitios web monitoricen y almacenen las interacciones que Ud. realice en los mismos. No solicitamos ni fomentamos dichas actividades y no utilizaremos dicha información para ningún fin. Consulte las respectivas políticas de cookies y privacidad de los referidos sitios web y servicios para obtener información adicional acerca de la utilización de dichas cookies por parte de tales terceros.\n4. Eliminación de cookies \nLa interfaz del usuario de su Smart TV le permite eliminar todas las cookies y demás datos almacenados en el navegador local del dispositivo. Es altamente recomendable eliminar todas las cookies y todos los ajustes almacenados a nivel local antes de vender o regalar su Smart TV. El procedimiento específico para revocar el consentimiento a la instalación de las cookies en cualquier momento o borrar las cookies existentes depende del navegador que Ud. utilice. A continuación puede encontrar una lista de enlaces a los sitios web de los principales navegadores donde se incluye esta información: \nFirefox: https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we\nChrome: http://support.google.com/chrome/bin/answer.py?hl=es&answer=95647\nSafari: http://support.apple.com/kb/ht1677?viewlocale=es_ES o http://support.apple.com/kb/ph5042\nExplorer: http://windows.microsoft.com/es-es/windows7/how-to-manage-cookies-in-internet-explorer-9\nOpera: http://help.opera.com/Windows/11.50/es-ES/cookies.html\n5. Contacte con nosotros\nSi tiene cualquier duda o desea realizar cualquier comentario en relación con nuestra Política de Cookies o la utilización de cookies por nuestra parte, envíenos un mensaje de correo electrónico a la dirección FRsupport@tcl.com.\nVersión: 1.0\n"];
var privacyPolicyTitle = "Política de Privacidad – Servicios Online para Smart TV";
var privacyPolicyConditions = ["Nosotros respetamos su privacidad cuando llevamos a cabo el tratamiento de sus datos personales. La presente Política de Privacidad identifica la entidad responsable de la recogida, el tratamiento y la utilización de los datos personales que recabamos de Ud. en relación con la utilización de sus servicios de Smart TV (los \"Servicios\") y describe las categorías de datos personales que recabamos acerca de Ud., los fines para los que llevamos a cabo el tratamiento de dichos datos y los derechos que Ud. puede ejercitar en relación con nuestro uso de los datos personales. \n1. Responsable del tratamiento\nLas actividades de recogida, tratamiento y utilización de los datos personales recabados de Ud. cuando usa los Servicios son realizadas por la entidad Shenzhen TCL New Technology Co., Ltd., con domicilio social en No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, China (\"Empresa\"). No obstante lo anterior, tenga en cuenta que no somos responsables de todas las actividades de tratamiento de datos que se describen más adelante. Aun así, hemos incluido una descripción de las respectivas actividades en nuestra Política de Privacidad, puesto que el referido tratamiento está relacionado con la utilización del Smart TV por parte de Ud.\n2. Consentimiento al tratamiento de los datos\nAlgunas actividades de recogida, tratamiento y/o utilización de sus datos personales requieren su consentimiento. \nSi Ud. ha prestado su consentimiento a la utilización de sus datos personales con el fin de mejorar los Servicios, su declaración de consentimiento se redacta como sigue:\n\"Presto mi consentimiento a la recogida, el tratamiento y la utilización de la hora de encendido de mi dispositivo, mi lista de canales de TV digital, mi lista de canales favoritos, el tiempo de sintonización y los canales vistos por mí a efectos de analizar los hábitos de los usuarios con el fin de mejorar los Servicios y/o para determinar cuántos usuarios online recibe la Empresa diaria/mensual/anualmente, y presto asimismo mi consentimiento para que esta información sea compartida con cadenas de televisión.\"\nSi Ud. ha prestado su consentimiento a la utilización de sus datos personales para recibir anuncios adaptados a sus intereses, su declaración de consentimiento se redacta como sigue:\n\"Presto mi consentimiento a la recogida, el tratamiento y la utilización de mi tipo de cliente y país con el fin de recibir anuncios adecuados, incluyendo por medios electrónicos.\"\nEl consentimiento es voluntario y Ud. podrá seguir utilizando los Servicios si decide no prestarlo. No obstante, es posible que vea anuncios y otros contenidos que no se adapten a sus preferencias. Con independencia de que preste o no su consentimiento, la Empresa se reserva el derecho a recabar, tratar y/o utilizar los referidos datos en la medida permitida por la legislación aplicable.\nUd. podrá revocar el consentimiento prestado conforme a lo indicado anteriormente en cualquier momento y con efectos futuros. Ud. podrá oponerse a que sus datos personales se utilicen para desarrollar actividades de marketing o elaborar estudios de mercado o encuestas y a que los Servicios se adapten a sus necesidades. Para revocar su consentimiento y/o formular dicha oposición, le rogamos modifique los ajustes de privacidad de su Smart TV convenientemente.\n3. Datos personales recabados\nCon independencia de que preste o no su consentimiento, la Empresa recaba, trata, almacena y utiliza las siguientes categorías de datos:\nNúmero de Identificación del Dispositivo: Su Smart TV almacena un número fijo y único que nos permite identificar y autentificar el dispositivo cuando Ud. utiliza los Servicios. Este número se denomina Número de Identificación del Dispositivo. El Número de Identificación del Dispositivo será proporcionado a nuestro partner de servicios para que le proporcione los Servicios. Asimismo proporcionaremos el Número de Identificación del Dispositivo a determinados partners de contenidos con fines de autentificación. Estos partners de contenidos utilizan el Número de Identificación del Dispositivo para autentificar su Smart TV de modo que pueda acceder a los servicios proporcionados por dichos partners.\nDirección IP y dirección MAC: Cuando su Smart TV acceda a Internet, se le asignará una dirección IP. Esta dirección IP nos será transmitida y llevaremos a cabo su tratamiento cada vez que el Smart TV solicite información o datos de los Servicios. Si su Smart TV está conectado a un router (por ejemplo, en una red local doméstica o una red WLAN), podremos recabar y tratar la dirección IP de dicho router. La dirección MAC es un número único asignado a cada interfaz de red de su Smart TV. La dirección MAC también será recabada y tratada por nosotros cuando el Smart TV solicite información o datos de los Servicios.\nDatos de solicitud de los Servicios: Cada vez que Ud. conecte su Smart TV a Internet y lo encienda, el dispositivo se conectará automáticamente a los Servicios, que son gestionados por nuestro partner de servicios. Su Smart TV será autentificado para confirmar que está autorizado a acceder a los Servicios. Los Servicios almacenan uno o más identificadores numéricos únicos en relación con su Smart TV a efectos de autentificación. Cuando se conecte a los Servicios, el Smart TV transmitirá la dirección IP que le ha sido asignada, así como información específica del dispositivo (modelo de Smart TV, versión del software) para comprobar si hay actualizaciones de software disponibles.\nAjustes de los Servicios: Como parte de la funcionalidad regular de los Servicios, Ud. podrá configurar manualmente el orden en el que los Servicios muestran las aplicaciones. Nuestro partner de servicios almacenará dicha configuración y las demás preferencias que Ud. pueda fijar durante la utilización de los Servicios. Esta información se vinculará al Número de Identificación del Dispositivo.\nInformación específica del dispositivo: El Smart TV almacena diferente información acerca del propio dispositivo y su configuración. Esta información incluye el tipo de Smart TV, la versión de su sistema operativo, la resolución de su panel, el número de identificación del proyecto (es decir, información relativa a los archivos de configuración), el agente usuario, el nombre del navegador, la versión del navegador y el idioma y país que han sido configurados en el Smart TV. Esta información será utilizada por nosotros y facilitada a nuestro partner de servicios y a nuestros partners de contenidos.\nPublicidad: Los Servicios pueden entregar anuncios. Estos anuncios son entregados bien por nosotros o bien por terceros utilizando el inventario de publicidad que les asignamos. Todos los anuncios son entregados mediante o a través de nuestro servidor de publicidad, que desempeña una función de coordinación para la entrega de anuncios. Nuestro servidor de publicidad o el servidor de publicidad de un tercero puede instalar una cookie en el Smart TV. Consulte nuestra Política de Cookies para obtener más información acerca de estas cookies.\nTráfico del partner de servicios y de los partners de contenidos: Cuando Ud. utilice los Servicios, su Smart TV solicitará datos de los Servicios a través de Internet. Como parte de estas solicitudes, su dirección IP, conforme se describe anteriormente, y el idioma y país que hayan sido configurados en su Smart TV serán transmitidos a nuestro partner de servicios. Nuestro partner de servicios tratará los respectivos datos de conformidad con su política de privacidad.\nUtilización de pantalla secundaria: Si Ud. utiliza nuestra aplicación de pantalla secundaria, los controles que active en la aplicación y los ajustes de país e idioma, la lista de canales de TV digital, las listas de canales favoritos, las listas de programación, el Número de Identificación del Dispositivo, el canal actual, la versión del protocolo y la dirección IP de su Smart TV serán recabados y tratados por nosotros en nuestros servidores. Nuestros servidores pasarán entonces a controlar su Smart TV siguiendo las instrucciones que Ud. proporcione en la aplicación de pantalla secundaria.\nHbbTV - \"Botón Rojo\": Las cadenas de televisión (las \"Cadenas\") podrán enviar información adicional a través de su señal de televisión. Si el Smart TV recibe instrucciones específicas a través de dicha información adicional y está conectado a Internet, descargará una imagen o una pequeña página del sitio web de la Cadena y la mostrará junto con la información para que Ud. presione el \"Botón Rojo\" de su mando a distancia si desea utilizar los servicios adicionales que la Cadena ponga a su disposición. Esto ocurrirá cada vez que cambie de canal. Al descargar la imagen desde el sitio web de la Cadena, el Smart TV transmitirá algunos datos personales, esto es, la lista de canales de TV digital, el canal actual, la tabla de información de eventos, el tiempo de sintonización, la dirección IP de su Smart TV y las cookies almacenadas en el Smart TV (en su caso). La Cadena es responsable de la recogida, el tratamiento y/o la utilización de estos datos. Además, si Ud. utiliza los servicios adicionales que ofrezca una Cadena a través del Botón Rojo, la Cadena podrá recoger otros datos personales acerca de Ud. (por ejemplo, los vídeos bajo demanda que Ud. visione, las noticias que Ud. lea, etc.).\n4. Fines para los cuales tratamos y/o utilizamos sus datos personales\nLos datos recabados son tratados para los fines siguientes:\n• Prestación de los Servicios: Utilizamos la dirección IP y la dirección MAC, el Número de Identificación del Dispositivo, la versión del sistema operativo del Smart TV, el tipo de cliente de su Smart TV y la resolución de su panel, el número de identificación del proyecto (es decir, información relativa a los archivos de configuración), su lista de canales de TV digital, los canales visionados, la zona horaria y los ajustes de país e idioma para permitir que su Smart TV acceda a los Servicios y a los servicios prestados por los partners de contenidos. Los fines incluyen (a título meramente enunciativo) la autentificación, la prestación a Ud. de servicios basados en la ubicación (por ejemplo, pronósticos meteorológicos), la actuación frente a usos indebidos, la gestión de incidencias de seguridad, la monitorización de la disponibilidad de los Servicios y la prestación de servicios de realización de copias de seguridad de las preferencias del usuario.\n• Autentificación: Utilizamos el Número de Identificación del Dispositivo y la dirección MAC con fines de autentificación.\n• Actualizaciones de software: Cada vez que su Smart TV se encienda, nos proporcionará la dirección IP, el Número de Identificación del Dispositivo, la versión del software, el tipo de cliente de su Smart TV, el número de identificación del proyecto (es decir, los archivos de configuración), el número de identificación del usuario y el número de serie para ofrecerle y proporcionarle las correspondientes actualizaciones de software. \n• Mejora de los Servicios: Utilizamos datos consolidados y disociados (es decir, datos acerca de su interacción con los Servicios) para mejorar la experiencia del usuario de los Servicios.\n• Entrega de anuncios: Utilizamos la información de las cookies de publicidad para permitir que el sistema registre qué anuncios se han mostrado en su Smart TV con el fin de asegurarnos de que Ud. no reciba demasiados anuncios similares, y tenemos la capacidad de ajustar las condiciones comerciales con nuestros partners de publicidad. Los anunciantes externos que entregan anuncios en los Servicios o los sitios web de los partners de contenidos, previa coordinación con nuestro servidor de publicidad, también podrán utilizar cookies para hacer un seguimiento de las acciones que Ud. realice en diferentes sitios web y entregar anuncios que reflejen sus preferencias personales.\n• Optimización de anuncios: Utilizamos datos relativos a las visualizaciones de anuncios y los clics sobre anuncios para optimizar la experiencia de los consumidores en lo que respecta a la publicidad mostrada por los Servicios.\n• Descuentos: Proporcionamos el Número de Identificación del Dispositivo a partners de contenidos seleccionados para que determinen en qué medida pueden permitirle acceder de forma gratuita a títulos de Vídeo bajo Demanda de su colección.\n• Cumplimiento de la ley: Es posible que seamos requeridos para divulgar datos a la policía o a los tribunales de justicia competentes. En tal caso, únicamente divulgaremos los datos si hemos recibido un documento jurídicamente vinculante como, por ejemplo, una orden policial o judicial que nos obligue a colaborar con las autoridades competentes.\nLos Servicios podrán ser utilizados bajo seudónimos, salvo que los servicios específicos exijan que Ud. proporcione su nombre y/o dirección de correo electrónico.\n5. Categorías de destinatarios\nLa Empresa comparte los datos personales que recaba acerca de Ud. mientras utiliza los Servicios exclusivamente con los terceros siguientes:\n• Con terceros proveedores de servicios de Smart TV si Ud. solicita tales servicios (por ejemplo, si Ud. inicia la aplicación Netflix en su Smart TV, podremos compartir su dirección IP, dirección MAC, versión del software y modelo de TV con Netflix).\n• Con terceros partners de contenidos si Ud. solicita determinados contenidos proporcionados por dichos partners de contenidos (por ejemplo, para prestarle el servicio de TV IP GoLive, podremos compartir su tipo de cliente de TV, su dirección IP y sus ajustes de idioma con la compañía que preste el servicio GoLive).\n• En la medida en que Ud. haya prestado su consentimiento para que se compartan datos personales específicos con los terceros mencionados anteriormente, la Empresa compartirá sus datos personales con dichos terceros.\n• Con los proveedores de servicios subcontratados por la Empresa para ayudar a prestar los Servicios en calidad de encargados del tratamiento.\nLa Empresa únicamente compartirá sus datos personales con otros terceros si tiene obligación de divulgarlos por imperativo legal (por ejemplo, a tribunales o autoridades judiciales), o bien si Ud. ha prestado su consentimiento para que se compartan tales datos o dicha práctica está permitida por la legislación aplicable.\n6. Países en los que se llevará a cabo el tratamiento de su datos\nLa Empresa y/o algunos de los mencionados destinatarios de sus datos personales podrán estar situados fuera del Espacio Económico Europeo (concretamente en los siguientes países: República Popular China y Estados Unidos de América). En consecuencia, sus datos personales podrán ser tratados en países que se considera no ofrecen un nivel adecuado de protección de los datos personales de conformidad con lo dispuesto en la Directiva 95/46/CE del Parlamento Europeo y del Consejo, de 24 de octubre de 1995, relativa a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos.\n7. Sus derechos\nUd. podrá ponerse en contacto con la Empresa para recibir información acerca de los datos personales tratados por la Empresa y/o para ejercitar sus derechos de acceso, rectificación, cancelación y bloqueo de sus datos personales, y/o para oponerse al tratamiento de sus datos personales a efectos del desarrollo de actividades de marketing y/o la elaboración de estudios de mercado o encuestas.\n8. Modificación de la Política de Privacidad\nPara mejorar nuestros Servicios, es posible que debamos modificar la presente Política de Privacidad – por ejemplo, en caso de que se implanten nuevas tecnologías o se introduzcan nuevos servicios. Nos reservamos el derecho a modificar o ampliar la presente Política de Privacidad en cualquier momento.\n9. Información de contacto\nSi tiene cualquier duda acerca de la presente Política de Privacidad o desea formular una queja relacionada con el modo en que llevamos a cabo el tratamiento de sus datos personales, póngase en contacto con nosotros a través de los siguientes medios:\nDirección de correo electrónico: FRsupport@tcl.com\nVersión: 1.0\n"];
var privacyPolicyTerms = [
    "Habilitar el servicio Smart TV.",
    "Doy mi consentimiento para la recopilación, procesamiento y uso de la hora de inicio de mi dispositivo, lista de canales de DTV, lista de canales favoritos, hora de visita y canales vistos para los fines de analizar los hábitos y comportamientos del usuario para mejorar los servicios y/o analizar cuántos usuarios en línea tiene TCL por día, mes y año así como para compartir esta información con las estaciones de televisión.",
    "Habilitar el servicio de recomendaciones.",
    "Habilitar aplicación de segunda pantalla para dispositivos móviles.",
    "Habilitar las actualizaciones automáticas de software.",
    "Habilitar servicio FreeviewPlay."
];
var privacyPolicyTips = [
    "Se deshabilitarán todos los servicios Smart TV.",
    "Se deshabilitará el servicio HbbTV proporcionado por los canales de TV durante el uso del sintonizador incorporado.",
    "Se deshabilitará el servicio de recomendación de contenidos y programas de televisión.",
    "Se deshabilitará la aplicación de segunda pantalla.",
    "El TV no comprobará automáticamente si hay actualizaciones de software y nuevas funciones.",
    "El contenido de FreeviewPlay será deshabilitado."
];
var privacyPolicyRemind = "Marque la casilla correspondiente en Ajustes.";
var set = "Ajustar";
var copyShopDemoTips = ["Conectado al USB, ¿desea copiar el vídeo a la unidad Flash?","Copiar el vídeo a la unidad Flash","¡El vídeo se ha copiado correctamente!","¡Error al copiar el vídeo!"];
var dataDeletionWords = ["Eliminar datos del servicio Smart TV almacenados en los servidores backend.","Notas: Los datos relativos a su usuario de Smart TV se eliminarán en el plazo de un mes después de marcar esta opción. Tenga en cuenta que la eliminación de datos no afecta a los datos locales almacenados en su televisor.","No transferir datos al servidor de Smart TV.","Notas:  Sus datos en relación con el uso de los servicios de Smart TV ya no se transferirán al servidor después de marcar esta opción. Su televisor ya no recibirá los servicios recomendados.","Para obtener mayor información, visite el sitio web www.tcl.eu"];
var miracastWords = ["Conexión inalámbrica","Replicar el teléfono android en el TV","Haga clic para conectar","Esta función solo está disponible en teléfonos android"];
var miracastTips = ["Pasos de conexión","Abra los ajustes del sistema","Más formas de conectar \n / Otras conexiones inalámbricas","Elija presentación inalámbrica","Haga clic para conectar \n esperado a ser localizado"];