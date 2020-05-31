var  all_country  = ["*","*","*","*","*","*","*","*","Francia","*",
                     "*","*","*","*","*","*","*","*","*","*",
                     "*","*","*","*","*","*","*","*","*","*",
                     "*","*","*","*","*","*","*","*","Uruguay","Perú",
                     "Argentina","Chile","Venezuela","Ecuador","Costa Rica","Paraguay","Bolivia","Belice","Nicaragua","Guatemala",
                     "*","*","Brasil","Canadá","México","Estados Unidos","Corea del Sur","Otros","*","*",
                     " "," "," "," "," "," "," "," "," "," ",
                     " "," "," "," "," "," "," "," "," "," ",
                     " "," "," "," "," "," "," "," "," "," ",
                     " "," ","EI Salvador"," "," "," "," "," "," "," ",
                     " "," "," "," "," "," "," "," "," "," ",
                     " "," "," "," "," "," "," "," "," "," ",
                     " "," "," "," "," "," "," "," "," "," ",
                     " "," "," "," "," "," ","Surinam","Jamaica","Curazao","Aruba",
                     "Antigua y Barbuda","Santa Lucía","Barbados","San Vicente","San Cristóbal y Nevis","Granada","Trinidad y Tobago","Guyana","Puerto Rico","Panamá",
                     "Dominica","Cuba","Honduras","Haití","Camboya","otros","República Dominicana","Bonaire"," "," "];

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
var chScanOptions = ["País","Modo de sintonización","Búsqueda automática","Actualización automática","Exploración manual analógica",["Instalación manual de red alámbrica","Instalación manual de la antena","Sintonización manual del satélite"],"Configuración de antena de satélite","Seleccionar red favorita","Limpiar lista de canales","LCN"];
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
    "Switch off sports mode for more options.",
    "Enhance the environmental contrast",
    "A special mode to enjoy sport games",
    "Enjoy more CEC functions."];
var initialTitle = ["Bienvenido","Ajuste inicial"];	
var initialPrompt = ["Todo un mundo de emocionantes experiencias le están esperando. ¡Haga sus ajustes iniciales ahora!",
	"Seleccione su idioma:",
	"Seleccione su país:",
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
var initialHotkeys = ["Atrás","Seleccionar","Siguiente"];	
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
var screenSavers = ["Sin canales. Busque nuevamente","¡Sin señal!","Codificado","Sólo datos","Programa de audio","Sin audio ni video","No disponible","Sin teletexto","Sin datos de programas.","¡Programa bloqueado!","¡Programa bloqueado!\nPulse OK e introduzca la contraseña.","No se ha encontrado ningún detalle del programa.","Programa no apropiado para menores.\nPulse OK e introduzca la contraseña.","¡Canal bloqueado!","¡Canal bloqueado!\nPulse OK e introduzca la contraseña.","¡Entrada bloqueada!\nPulse OK e introduzca la contraseña.","¡Incompatible!","Servicio no disponible en este momento","¡Entrada bloqueada!","Sin título del programa","Sin función","Sin Subtítulo"];	
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
var smartTVOptions = ["Portal Smart TV","HbbTV","Compartir y ver","Pantalla Inalámbrica","Políticas del TV",                            "Modo de espera en red","Reiniciar el TV"];
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
var eStickerTipWords = ["El almacenamiento es menor a 500M, desea eliminar los videos de Demo para obtener más espacio?"];
var delEstickerVideoRemid = ["El video ha sido borrado satisfactoriamente"];

var clockPageWords = ["Local","Pekín","Tokio","Hongkong","Taipei","Singapur","París","Londres","Moscú","Nueva Delhi","Djakarta","Nueva York","Río",
                        "Pulse la tecla \"OK\"","No se puede agregar!"];
var smartKeyWords = ["Pantalla Inalámbrica","Disfruta la música","Temporizador de apagado","Reloj mundial","Barra de sonido","WiFi","PVR","Modo deporte"];
var recommendWords = ["Recomendados"];
var onlyListenRemindWords = ["Seleccione modo Solo Audio","Presione una tecla, excepto volumen, para salir"];
var selectSatRemind = "¡Puedes seleccionar sólo hasta 20 satélites!";