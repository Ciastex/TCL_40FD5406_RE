
var all_country 	= ["Austrália","Áustria","Bélgica","Bulgária","Croácia","República Checa","Dinamarca","Finlândia","França","Alemanha",
						"Grécia","Hungria","Itália","Luxemburgo","Países Baixos","Noruega","Polónia","Portugal","Roménia","Rússia",
						"Sérvia","Eslovénia","Espanha","Suécia","Suíça","Reino Unido","Nova Zelândia"," "/*Arab*/,"Estónia"," "/*Hebrew*/,
						"Letónia","Eslováquia","Turquia","Irlanda","Japan","Filipinas","Thailand","Maldives","Uruguay","Peru",
    					"Argentina","Chile","Venezuela","Ecuador","Costa Rica","Paraguay","Bolivia","Belize","Nicaragua","Guatemala",
						"China","Taiwan","Brazil","Canada","Mexico","United States","South Korea","Roménia","Vietnam"/*新添加的，底层结构体中没有*/,"Ucrânia"/*新添加的，底层结构体中没有*/,
						"Irão","Iraque"," ","Kazakhstan","Uzbequistão","","Quirguistão","Argélia","Egito","Tunisia",
						"Tanzânia","Quénia","Pakistan","Indonesia","Kuwait","Arábia Saudita","Qatar","Israel","Lebanon","bahrain",
						"Angola","Congo","Índia","Turkmenistan","Colombia","Mongolia","Bangladesh","Nepal","Sri Lanka","North Korea",
						"Moldávia","Polynesia","EI Salvador"," ","Fiji","Liberia","Jordânia","Myanmar","Ghana","Georgia",
						"Armenia","Oman","yemen","Syria","Palestine","Afghanistan","Morocco","benin","IvoryCoast","Nigéria",
						"Sudan","Ethiopia","Zâmbia"," ","South Africa","mozambique","Libya","Albânia","Belarus","Iceland",
						"Lituânia","Mauritius","Dubai","EAU","Tajiquistão","Bengala","Bósnia e Herzegovina","Chipre","Kosovo","Macedónia",
						"Malta","Montenegro","Cameroon","Singapore","Malaysia","NewCaledonia","Suriname","Jamaica","Curacao","Aruba",
						"Antigua & Barbuda","St Lucia","Barbados","St Vincent","St Kitts & Nevis","Grenada","Trinidad & Tobago","Guyana","Puerto Rico","Panama",
						"Dominica","Cuba","Honduras","Haiti","Cambodia","Zimbabwe","Dominican Republic","Bonaire","Somalia","Azerbaijão",
    					"Uganda","Rwanda","Guinea","Burundi","Abcásia","Andorra","Anguilla","Antarctica","American Samoa","Aland Island",
    					"Burkina-faso","Bermuda","Brunei","Caribbean Netherlands","Saint Barthélemy","Bahamas","Bhutan","Bouvet Island","Botswana","Cocos (Keeling) Islands",
    					"Central African Republic","Cape Verde","Djibouti","Eritrea","Western Sahara","Falkland Islands","Federated States of Micronesia","Faroe Islands","Gabon","Cook Islands",
    					"Gibraltar","Greenland","French Guiana","Guadeloupe","Equatorial Guinea","Guam","Guinea-Bissau","Heard Island and McDonald Islands","Isle of Man","British Indian Ocean Territory",
					/*20*/"Jersey","Kiribati","Comoros","Cayman Islands","Liechtenstein","Lesotho","Monaco","Saint Barthélemy","Madagascar","Mali",
    					"Macao","Martinique","Mauritania","Montserrat","Malawi","Namibia","Niger","Norfolk Island","Nauru","Papua New Guinea",
    					"Pitcairn Islands","Palau","Reunion Island","Solomon Islands","Seychelles","The Svalbard archipelago","Sierra Leone","San Marino","Senegal","South Sudan",
						"Sao Tome & Principe","Swaziland","Turks & Caicos Islands","Togo","Chad","Tokelau","Timor-Leste (East Timor)","Tonga","Tuvalu","Vatican City State",
    					"British Virgin Islands","United States Virgin Islands","Wallis and Futuna","Samoa","Mayotte","Democratic Republic of the Congo","Guernsey","Gambia","Northern Mariana Islands","French Southern Territories",
					/*25*/"Niue","United States Minor Outlying Islands","Others"];
				
var all_language 	= ["Checo","*","Dinamarquês","*","*","Alemão","Inglês","Francês","Grego","Espanhol",
						"Croata","*","Italiano","Húngaro","Neerlandês","Norueguês","Polaco","Português","Russo","Romeno",
						"Esloveno","Sérvio","Finlandês","Sueco","Búlgaro","Eslovaco","Chinese","*","Gaélico","*",
						"Galês","Árabe","Írsky","Latvian","Hebrew","Turco","Estonian","Neerlandês"/*Netherlands*/,"Coreano","*",
						"Hindi","*","*","tangerina","Cantonês","Maori","Áudio original"/*Qaa*/,"Não definido"/*Undetermined*/,"*","Desconhecido",
						"Não definido","*","*","*","*","*","*","*","*","*",
						"*","*","*","Albanês","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","Azerbaijanês","*","*","*",
						"*","*","*","*","*","*","*","Basco","*","*",
				/*10*/		"*","*","*","*","*","*","*","Bósnio","*","*",
						"*","*","*","*","Bieloruský","*","*","Catalão","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","Galego","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
	/*20*/	"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Islandês","*","*","*","*","*",
						"*","*","*","Indonesian","*","*","*","*","*","*",
						"*","*","Japonês","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Lithuanian",
						"*","*","*","*","*","*","*","Macedónio","*","*",
						"*","*","*","Malay","*","*","*","*","*","*",
	/*30*/	"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","Mongolian",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","Persian","*","*","*","*","*","*","*",
						"*","*","*","*","*","Romance","*","*","*","*",
						"*","*","*","Sami","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
	/*40*/				"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","Tamil","*","Teletexto",
						"*","*","Tahitian","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","Twi","*","*","*","Ukrainian","*",
						"*","Uzbek","*","*","Vietnamese","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","*",
						"*","*","*","*","*","*","*","*","*","ChineseTraditional",
	/*50*/					"ChineseS","QAB","QAC","ArabicEgypt","*","*","Dagbani","Kasem","*"];
var offOn			= ["Inactivo","Activo"];
var okCancel		= ["Ok","Cancelar"];
var yesNo			= ["SIM","NÃO"];
var level			= ["Inactivo","Baixo","Alto","Médio"];
var manualAuto		= ["Manual","Automático"];
var homeShop		= ["Casa","Loja"];
var picPreset		= ["Standard","Dinâmico","Natural","Cinema","Utilizador"];
var picColorTemp	= ["Frio","Normal","Quente","Utilizador"];
var pic3dNavig		= ["Manual","Automático","Semi-automático"];
var _3dOptions		= ["Modo 3D","3D-para-2D","Interruptor E-D","Profund. do campo"];
var pic3DMode       = ["Inactivo","2D-para-3D","Lado-a-Lado","Topo e Base","Intercalar linha"];
var picEcoOptions	= ["Poupança energia","Sensor de luz","Obscurecer local","Luminosidade combinada"];
var picGeoOptions	= ["Geometria","Posição H.","Posição V.","Relógio","Fase"];//Geometry 无翻译
var picAdWhiteBal	= ["Ganho R","Ganho G","Ganho B","Desfasamento R","Desfasamento G","Desfasamento B"];
var souOptions		= ["Predefinição de som","Balanço","Retardamento áudio","SRS TSHD","Controlo vol auto",
						"Tipo de SPDIF","Atraso SPDIF","Colocação da televisão","Idioma de áudio","Canal de áudio",
						"Descrição Áudio","Reforço de graves","Dolby Digital Plus"];
var souSpdifType	= ["Automático"/*Dolby*/,"PCM","Inactivo"];
var colorSpace      = ["Automático","Normal","Utilizador"];
var souPresetPara	= ["100Hz","500Hz","1.5KHz","5KHz","10KHz"];
var chOptions		= ["Pesquisa de canais","Lista de canais","EPG","Organizador de canais","Diagnóstico do canal",
						"mudança de hora","Legendas","Teletexto","Tipo lista canais","Serviço de dados","PVR"];//Channel diagnostics 、Channel organizer 无翻译
var chDiagOptions	= ["Intensidade do sinal","Qualidade do sinal","Frequência (KHz)","ID de serviço","ID de rede","Nome da rede"];
var chScanOptions	= ["País / Região","Modo sintonizador","Pesquisa de canais","Actualização automática","Pesq analógica man",
						["Pesquisa manual de cabo","Pesquisa manual antena","Sintonização manual do satélite"],"Configurar antena por satélite","Seleccionar a rede favorita","Limpar lista de canais","LCN"];
var favNetDes		= "Selecione a sua rede preferida";
var tuner			= ["Cabo","Antena","Satélite"];//Satelite 无翻译
var passError		= "Palavra-passe incorrecta.\nPor favor introduza-a novamente! ";
var chType			= ["Canais analógicos: ","Canais digitais: "];
var chScanStatus	= ["Estado: Pesquisar","Estado: Pesquisa completa","Estado: Cancelar pesquisa","Estado: Erro de pesquisa"];
var chScanPara		= ["Frequência (KHz)","Modulação","Taxa símbolos (Ksym/s)","ID de rede","Sistema",
						"Afinar","Intensidade do sinal","Qualidade do sinal","Modo Pesquisa","ID do canal"];
var chScanParaMHZ      = ["Frequência (MHz)"];
var chAtvManSys		= ["EUR OESTE","EUR LESTE","Reino Unido","França"];
var modulation		= ["16 QAM","32 QAM","64 QAM","128 QAM","256 QAM","Automático"];
var chCleanDes		= "Pretende limpar a lista de canais?";
var chDeletDes		= "Pretende eliminar o canal?";
var chOperator		= ["Ziggo","UPC","Outros"];
var chScanType		= ["Digital & Analógico","Digital","Analógico"];
var chScanMode		= ["Completo","Avançar","Rápido"];
var bookingModes	= ["Registo","Lembrete"];
var dayName			= ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];
var monthName		= ["Jan", "Fev","Mar","Abr","Maio","Jun","Jul","Ago","Set","Out","Nov","Dez"];
var filter			= ["Filter","Tipo","Subtipo"];
var chEpgFirstGenre	= ["Cinema","News","Espectáculo","Desporto","Infantil","Música","Arte","Social","Educação","Lazer","ESPECIAL"];
var chEpgSecondGenre= [["Teatro","Detective","Aventura","Ficção científica","Comédia","Novela","Romance","Sério","Filme para adultos"," "," "," "],
						["Actualidades","Meteorologia","Magazine Notícias","Documentário","Debate"," "," "," "," "," "," "," "],
						["Espectáculo","Programa de jogos","Programa de variedades","Programa de entrevistas"," "," "," "," "," "," "," "," "],
						["Desporto","Eventos especiais","Programas desportivos","Futebol","Ténis",
							"Jogos de equipa","Atletismo","Desportos motorizados","Desportos aquáticos","Desportos de Inverno",
							"Equestres","Artes marciais"],
						["Infantil","Infantil (pré-primária)","Entretenimento dos 6 aos 14","Entretenimento dos 10 aos 16","Informativo","Desenhos animados"," "," "," "," "," "," "," "],
						["Música","Rock","Sério","Tradicional","Jazz","Musical","Ballet"," "," "," "," "," "],
						["Arte","Artes performativas","Belas artes","Religião","Cultura popular",
							"Literatura","Cinema","Experimental","Emissão","Novos média",
							"Revistas de artes","Moda"],
						["Social","Programas","Economia","Personalidades notáveis"," "," "," "," "," "," "," "," "],
						["Educação","Natureza","Tecnologia","Medicina","Países estrangeiros","Ciências sociais","Mais educação","Idiomas"," "," "," "," "],
						["Passatempos de entretenimento","Turismo","Artesanato","Motorizados","Saúde e bem-estar","Cozinha","Publicidade","Jardinagem"," "," "," "," "],
						["Idioma original","Preto e branco","Não editado","Emissão em directo"," "," "," "," "," "," "," "," "]];
var chOrganizer		= ["Saltar canal","Disp canais","Editar canal","Apagar canal","troca de canal","canal de inserção"];
var chEditPara 		= ["Nome da rede","Número canal","Nome canal","Frequência","Sistema de cor","Sistema de som"];
var chSatTitles		= ["Tipo satélite","Configurar antena por satélite","Seleccionar Satélite"];
var chSatEidtOptions= ["Nome do satélite","Posição","LNB Poder","Frequência do LNB (MHz)","Entrada Diseqc",
						"Tom 22KHz","tone burst","Frequência (KHz)","Taxa símbolos (Ksym/s)","Polarização",
						"Intensidade do sinal","Qualidade do sinal","Estado satélite"];
var chSatAutoPromt	= [["Tudo","Rede"],
						["Tudo","Gratuitamente"]];
var chSatAutoScanOptions=["Seleccionar Satélite","Modo Pesquisa","Canais"];
var chSatPosition	= ["A","B"];
var chSatLNBFreq	= ["Universal",];
var chSatDiSEqCInput= ["Desactivar","A","B","C","D"];
var chSatTone22KHz	= ["Automático","Activo","Inactivo"];
var chSatToneBurst	= ["Desactivar","tone burst A","tone burst B"];
var chSatPolarization= ["Horizontal","Vertical"];
var chSatSetupOptions=["Tipo antena","Sintonizador","Frequência de banda"];
var chSatAntennaType= ["CaboÚnico","Universal"];
var chSatUserBands	= ["Banda Utilizador1","Banda Utilizador2","Banda Utilizador3","Banda Utilizador4","Banda Utilizador5","Banda Utilizador6","Banda Utilizador7","Banda Utilizador8"];
var chSatOthers		= ["Transmissor-receptor"];
var chSatSetupOthers= ["Definido pelo utilizador"];
var pleaseSelectSat = "Selecione primeiro os satélites!";
var subOptions		= ["Legendas","Idioma leg digitais","Idioma leg digitais 2ª","Tipo de legenda"];
var ttxOptionsCon      = ["A descodificar pag idiomas","Idioma teletexto digital"];
var subType			= ["Normal","Def auditivos"];
var netIntf     	= ["Ethernet","Sem Fios"];
var netConnDes		= ["A TV está a testar a ligação de rede.\nPor favor aguarde",
						"O teste de ligação de rede teve sucesso!",
						"O teste de ligação de rede falhou."];
var netSsidError	= "O comprimento válido do SSID é 1~32 caracteres. Verifique o SSID";
var netOthers		= ["Código PIN"];
var netWlessAutoDes	= ["Assegurar que o código PIN seguinte está instalado no Ponto de acesso antes de clicar em OK.",
						"Premir o botão no Ponto de Acesso dentro de 120 segundos antes de clicar em OK."];
var netConnRemind	= ["Palavra-passe incorrecta!",
						"A ligar. Aguarde!",
						"Ligação com sucesso e foi obtido IP!",
						"Falha na Ligação",
						"A TV está a procurar Ap\nPor favor aguarde",
						"Não está ligado á TV qualquer dispositivo sem fios! "];
var netWireIpOptions= ["Definição IP","Tipo endereço","Endereço IP","Máscara subnet","Porta ligação por defeito","DNS principal","DNS secundário"];
var netWireConnRemind= ["Introduzir um valor entre 0 e 255.",
						"Ligado com êxito!",
						"Digite um endereço válido",
						"Ligado com êxito!",
						"Erro de ligação !",
						"A ligar. Aguarde!",
						"Introduza um valor entre 1 e 223."];
var netFlixOptions	= ["Desactivar","ESN","Versão da Netflix"];
var netFlixDes	 	= ["Tem a certeza que deseja desactivar?"," "/*Are you sure that you want to ESN?*/];
var netUpdateTitle 	= "Actualiz. software";
var netUpdateDialogTitle = "A atualizar software";
var netBGDownloadTitle 	= "A fazer o download";
var netUpdateLoadingPrompt= ["A pesquisar atualização, aguarde!",
							"O software está a ser transferido... Aguarde!",
							"NÃO desligar a TV durante a actualização do software!",
                            "A atualização obrigatória do software é transferida automaticamente em segundo plano!"];
var netUpdatePrompt= ["Parabéns, a sua versão de software é a mais recente!",
						"Foi encontrada a nova versão de software XXXX. Pretende descarregar agora? Isto pode demorar algum tempo dependendo do estado da sua rede.",
						"Falha a entrar!",
						"Falhou receção de dados, tente novamente!",
						"Falha Actualização Análise XML!",
						"Falha na Ligação",
						"Software transferido com êxito. Pretende iniciar a actualização?",
						"Perda de dados! Falha a descarregar!",
						"Falha na verificação do pacote, por favor tente de novo!",
						"Rede anormal. Por favor verifique e ligue de novo…",
						"Falha na actualização.  Reiniciar a Tv por favor!",
						"O ficheiro de actaização foi eliminado inesperadamente. Deverá fazer a actualização pela rede novamente.",
						"O software foi descarregado com sucesso. Deseja fazer a actualização?"];
var netUpdateButtonText = ["Descarregar", "Actualizar", "Mais tarde", "Nunca", "Ok","Continuar"];
var autoDetectPrompt = ["Foi encontrada a nova versão de software XXXX. Pretende descarregar agora? Isto pode demorar algum tempo dependendo do estado da sua rede.",
						"A versão XXXX do novo software foi encontrada. Pretende actualizar agora?",
						"O processo de actualização pela rede foi cancelado da última vez. Deve actualizar novamente.",
                        "A transferência da versão XXXX do novo software não está terminada. Pretende continuar agora?",
                        "Software transferido, pretende atualizar agora?",
						"Software baixado, você deseja atualizar agora? A TV será atualizada automaticamente na próxima vez se você pular agora."];
var sysOptions		= ["E-Manual","Idioma OSD","Temporizador","Bloquear","Definições de entrada",
						"Actualiz. software","Localização","Modo HbbTV","Cookies","Interface comum",
						"Configurações avançadas","Reiniciar compra","Indicador LED","Ativação imediata","Modo de compra automática","Area","Modo demonstração"];
var sysResetDes		= "Tem a certeza?";
var sysMenuLangOptions=["Idioma","Idioma áudio preferido","Idioma de áudio preferido - 2.º"];
var sysTimerOptions	= ["Fuso horário","Nome da região","Relógio","Temporizador","Modo de espera auto", "Country region"];

var sysTimeZone		= ["Como transmissor","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00",
						"GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30",
						"GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00",
						"GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00",
						"GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00",
						"GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00",
						"GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];
var sysTimeZoneLA  = ["As broadcaster","Region1","Region2","Region3","Region4","Region5"];//add for LA
var sysSleepTimer	= ["Inactivo","10 min.","20 min.","30 min.","40 min.","50 min.","60 min.","90 min.","120 min."];
var sysStandby		= ["Inactivo","4 Horas","6 Horas","8 Horas"];
var sysRegionName	= ["Madrid","Canárias"];
var sysClockOptions	= ["Sincron automática","Data","Hora","Ligar temporizador","Temporizador",
						"Ligar satélite","Desligar temporizador","Temporizador"];
var sysTimer		= ["Inactivo","Diariamente","Uma vez"];

var sysInputSet		= ["Sem etiqueta","DVD","Blu-ray","HDD","DVDR",
						"Grav. HD","Jogo","Videogravador","Computador","STB digital",
						"STB digital HD","Câmara","Gravador","Outro"];
var sysAvVideoInput	= ["Automático","RGB_CVBS","RGB","CVBS","S-Vídeo"];
var sysUpdate		= ["Através de USB","Através de de rede","Por canal"];
var sysUpdateDes	= [" ",
						" ",
						" ",
						"Impossível encontrar novo software no ar!",
						"A versão XXXX do novo software foi encontrada. Pretende actualizar agora?",
						"Insira a pen USB.",
						"Falha na verificação do pacote, por favor tente de novo!",
						"NÃO retire o dispositivo USB nem desligue a TV durante a actualização do firmware!",
						"O software foi transferido com êxito.\nA televisão irá reiniciar-se automaticamente!",
						"Foi encontrada a nova versão de software XXXX. Pretende descarregar agora? Isto pode demorar algum tempo dependendo do estado da sua rede.",
						"A fazer o download",
						"Software transferido com êxito. Pretende iniciar a actualização?",
						"Actual. falhou!",
						"A procurar ficheiros actualização",
						"O software foi actualizado com sucesso.\nReinicializar a TV agora."];
var sysProductInfo	= ["Versão actual","Nome do produto","Nome do fabricante","Nome do chassis"];
var sysCiDes		= ["Nenhum cart CI apres."];
var sysAdOptions	= ["Registo DivX®","Anulação do registo DivX(R)","T-Link","Authorization Error","Confirmação da anulação de registo",
						"Confirmação de aluguer","Aluguer Expirado"];
var sysRegistDes	= ["Deve registar o dispositivo para ler vídeos DivX protegidos",
						"Código de registo:",
						"Registar em http://vod.divx.com"];
var sysDregistDes	= ["Código anulação do registo:",
						"Anular registo em http://vod.divx.com ",
						"Continuar com o registo?"];
var mediaAuthorization = ["O seu dispositivo não está autorizado a reproduzir este vídeo protegido DivX(R)."];
var deregistrationConfrimation = ["O seu dispositivo já está registado.","Tem a certeza que deseja cancelar o registo?"];
var rentalConfirmation = "Este DivX(R) de aluguer foi usado XXXX para além de YYYY visualizações. Continuar?";
var rentalExpired 	= "O aluguer DivX(R) foi utilizado XXXX de YYYY visualizações. O aluguer DivX expirou.";
var parentalRatingLA		= ["Parental rating","Age rating","Content rating"]				
var ageRatingOptions 		= ["None","Below 10","Below 12","Below 14","Below 16","Below 18"];
var contentRatingOptions    = ["Off","Drugs","Violence","Sex","Violence & Drugs","Sex & Drugs","Violence & Sex","Violence, Sex & Drugs"];
var parentalRatingNA		= ["***","***","***","***","***","***","***","***"];
var parentalRatingOptionUS		= ["***","***","***"];
var sysTVRatingUS=["***","***","***","***","***"];
var sysMPAAUS=["***","***","***","***","***","***"];
var parentalRatingOptionCanada		= ["***","***","***"];
var sysCanadaEng=["***","***","***","***","***","***"];
var sysCanadaFre=["***","***","***","***","***",""];
var sysResetRRT=["***"];
var sysLockOptions	= ["Bloqueio de canais","Bloquear intervalo de tempo","Clas parental","Bloq intro","Bloqueio do painel frontal","Instalação de bloqueio",
						"Alterar palavra-passe","Volume máx.","Limpar tudo"];
var sysTimeIntervals= ["Tipo bloqueio","Hora de ínicio","Hora de fim"];
var sysRatingOptions= ["Nenhum","4","5","6","7","8","9","10","11","12",
						"13","14","15","16","17","18","Classificação para adultos (Espanha)"];
var changePass		= ["Alterar palavra-passe","Nova palavra-passe","Confirmar palavra-passe"];
var changePassDes	= ["Palavra-passe incorrecta.\nPor favor introduza-a novamente! ",
						"A palavra-passe não corresponde.\nPor favor introduza-a novamente!",
						"Palavra-passe definida com sucesso!",
						"Este código é demasiado simples para ser definido como palavra-passe.\nIntroduza de novo!"];
var sysPowerOnChOptions= "Seleccionar modo";
var sysPowerOnCh	= ["Último estado","Selecc. utilizador"];
var netWlessSecu    = ["Abrir","WEP","WPA/WPA2-PSK "];
var netWlessSecu2	= ["Nenhum","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK ","Não Suportado"];
var netWlessSecu3	= ["Nenhum","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Não Suportado"];
var netOptions		= ["Ligação internet","Interface","Definições sem fios","Definições IP","Informação",
						"Teste ligação","DLNA","TV remota","Definições Netflix","Visualiz. Wifi",
						"Tipo endereço","Endereço IP","Máscara subnet","Porta ligação por defeito","DNS principal",
						"DNS secundário","SSID","BSSID","Inserir SSID:","ID do utilizador"];
var chEditDes		= ["Número de canal duplicado!","Prima a tecla Vermelha para eliminar o caractere atual!","Número de canais inválidos."];
var chEpgNoProgram	= "Nenhuma info do programa agora, pesquise primeiro os canais!";
var chEpgWords		= ["Guia de Programação","Sem dados de programa.","Canal bloqueado!","Sem detalhes de programa.","Sem título de programa."];
var chEpgBooking	= ["informações cronograma", "Número canal","Iniciar data","Hora de ínicio","Hora de fim",
						"Repetir tipo","Programar tipo","Adiciona","Substituir","Alterar",
						"Adicionar/Modificar"];
var epgHotKey		= ["Dia anterior","Dia seguinte","Filter","Lista de programação","Adiciona programação"];
var chEpgBookRemind	= ["Hora de Início Incorrecta","Hora de Fim Incorrecta","Agendamento Duplicado","Gravado com Sucesso.","Eliminado com êxito."];
var chSchePara		= ["Lista de programação","Hora de ínicio","Iniciar data","Título do Programa","Nome canal",
						"Duração","Repetir","Agendamento","Editar","Apagar"];
var dateTimer		= ["Uma vez","Diariamente","Semanal"];
var scheduleDeleteReminds="Pretende eliminar esta agenda?";
var scheduleNoLists	= "Não existe lista de agenda. Prima a tecla Vermelha para adicionar uma lista.";
var chListWords		= ["Lista de canais","Seleccionar Lista","Modo sintonizador","Adicionar aos Favoritos","Remover",
						"Seleccionar lista de canais","Seleccionar modo de sintonizador","Trocar"];
var chListType		= ["Tudo","Digital","Analógico","Rádio","Gratuitamente","Favoritos"];
var chAutoScanOptions=["Seleccionar operador","Tipo de canal","Pesquisa de canais"];
var souSoundType	= ["Inválido","Mono","Mono","Estéreo","Estéreo",
						"SAP","SAP","Dual1","Dual2","Dual2",
						"Nican mono","Nicam estéreo","Nicam dual1","Nicam dual2","Nicam duplo",
						"Mono","LL","RR","LR"];
var souPreset		= ["Música","Cinema","Limpar voz","Standard","Utilizador"];
var picAdRgbMode	= ["Inactivo","Só de Leitura","Só Verde","Só Azul"];
var picAdOptions	= ["DNR","Red. ruído MPEG","RGB mode","Contraste Dinâmico","Clareza de movimento LED",
						"Tom da pele","Modo de filme","Modo de jogos","Temperatura da cor","Balanço De Branco",
						"Parar","Stretch","Aumentar imagem","Gama","Modo HDMI","Balanço de branco 10P","Ampliador de cor",
						"Redução de desfocagem","Redução de vibração","Espaço de cor","Clareza de movimento"];
var pic10Pwhite     = ["Intervalo","Vermelho","Verde","Azul","Reiniciar","Cor","Amarelo","Ciano","Magenta"];
var picMotionClarity = ["Modo movimento","Interpolação de movimento","Clareza de movimento LED","Redução de desfocagem","Redução de vibração","Reiniciar"];
var picMotionMode   = ["Cinema","Suavidade","Limpar","Desporto","Cliente"];
var picResetDes		= "Todas as definições pessoais serão repostas. Tem a certeza que pretende realizar a ação selecionada?";
var pic10PReset     = "Tem a certeza que pretende repor o balanço de brancos 10P?";
var picMotionReset  = "Pretende repor a Clareza de movimento?";
var picColorSpaceReset    = "Tem a certeza que pretende repor o espaço de cor?";
var picOptions		= ["Modo de imagem",
						"Retroiluminação","Brilho","Contraste","Saturação","Tonalidade","Nitidez","Temperatura da cor","Modo de ecrã","Formato automático",
						"Melhoria de desporto","3D","Navegação 3D","ECO Configurações","Geometria",
						"Configurações avançadas","Reinicializar imagem","Micro Dimming"];
var picSize			= ["16:09", "formato 4:3", "Formato 14:9", "Panorama",
						"Zoom 16:9", "Zoom inn 16:9","Zoom 14:9","Strekk Zoom","Vid Zoom",
						"Zoom 2","Vid Zoom","Combinação nativa do ecrã","Prikk etter prikk","Original","Panorama"];
var others			= ["Volume","Transmissão","Palavra-passe","Estado","Guardar","Substituir","Iniciar","Sair","Procurar","Apagar",
						"Nenhum","Automático","Pesquisar","Segurança","Ligar","Refrescar","Repetir","Parar ","Configurações","Canais",
						"Editar","Introduzir","Sinal!","Concluir","Estéreo","Áudio","Fonte","Sem áudio","Dicas","Reiniciar",
						"Cliente","Configuração","Memorizar","Utilizador","Fechar teclado","Modo segurança","Todos os dias","Lista PVR"];
var direction		= ["Esquerda","Direita ","Para cima","Para baixo"];
var audioType 		= ["MPEG","DOLBY AUDIO"/*"AC3"*/,"MPEG4","AAC", "DOLBY AUDIO"/*"AC3P"*/,
						"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD",
						" "," "," "," "," ",
						" ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2",
						"HE-AAC_V4","Desconhecido"];
var soundChannels   = ["Desconhecido","Mono","Sub","Dual Mono","Estéreo","Estéreo Sub","Estéreo Dolby Surround","Surround 2CN","Surround","3.0C.","4.0C.","5.0C.","Mono Lfe","Dual Mono Lfe","Estéreo Lfe","Surround 2C Lfe","Surround Lfe","3.1C","4.1C","5.1CN","7.1CN","Estéreo conjunto","Mono Fmrdo","Estéreo Fmrdo","Fm Mono Nicam Mono","Fm Mono Nicam Estéreo","Fm Mono Nicam Dual","Esquerda","Direita ","Outros"];
var prompts			= ["Ajuste a definição da imagem que melhor se adequa ao seu ambiente de visualização.",
						"Ajuste os níveis de luminosidade. Quanto mais próximo de 100, mais luminoso.",
						"Ajuste os níveis de contraste. Quanto mais próximo de 100, maiores as diferenças entre escuro-claro na imagem.",
						"Ajuste os níveis de saturação. Quanto mais próximo de 100, mais forte é a cor.",
						"Ajuste os níveis de nitidez. Quanto mais próximo de 100 mais nítidos são os detalhes.",
						"Ajuste os níveis da luz de fundo. Quanto mais próximo de 100, mais brilhante fica o ecrã.",
						"Ajuste os níveis de tonalidade. Esta definição modifica os tons da cor.",
						"Selecione o formato da imagem que melhor se adequa ao programa que está a visualizar.",
						"Configure as opções de poupança de energia.",
						"Ajuste as definições de geometria do ecrã quando liga a um computador.",
						"Seleccione mais definições avançadas de imagem.",
						"Restaure todas as predefinições de imagem.",
						"Seleccione um modo de som que melhor se adequa à sua preferência pessoal.",
						"Ajuste o equilíbrio do volume entre o canal esquerdo e o canal direito.",
						"Sistema de recuperação de som TruSurround HD apresenta um desempenho de som rico e clareza a frequências baixas e altas.",
						"Formato de interface digital ligado à saída de som digital da televisão e ao equipamento áudio do sistema de cinema em casa.",
						"Seleccione o idioma de áudio que melhor se adequa à sua preferência pessoal.",
						"Permite aos deficientes visuais desfrutarem dos programas televisivos.",
						"Teste a imagem, o som e sinal da sua televisão.",
						"Seleccione o tipo de lista de canais que melhor se adequa ao seu sinal de TV.",
						"Definir o idioma das legendas do programa exibidas no fundo do ecrã.",
						"Ver o texto e imagens do canal atual.",
						"Digital Living Network Alliance. Desfrute de música, fotos e vídeo através da rede doméstica a partir de outros aparelhos, como um computador.",
						"Exibe o conteúdo do seu smartphone na televisão e utiliza o smartphone como controlo remoto para a televisão.",
						"Exibe conteúdos a partir de um aparelho Android compatível com Miracast no ecrã da sua televisão.",
						"Bloqueie a sua TV.",
						"Seleccione um nome para o seu dispositivo.",
						"Seleccione o seu ambiente de visualização.",
						"Restaure todas as Predefinições do Sistema.",
    					"Desligue o modo esportivo para ter mais opções.",
    					"Realce o contraste ambiental",
    					"Um modo especial para desfrutar de jogos desportivos",
    					"Desfrute de mais funcionalidades CEC."];
var initialTitle	= ["Bem-vindo","Configuração inicial"];
var initialPrompt	= ["Realize a Configuração inicial agora e um Mundo de experiências excitantes aguarda por si!",
						"Por favor seleccione o seu idioma:",
						"Seleccione país/região:",
						"Seleccione a localização:",
						"Seleccione o seu tipo de ligação à rede:",
						"Seleccione o modo de ligação à rede com fios:",
						"Falhou ligar a xxxxxxxxx! Ligue o dispositivo de acordo com o seguinte Diagrama ou selecione Esquerda para repor.",
						"Ligado a xxxxxxxxx! Selecione Direita para continuar.",
						"1) A sua TV poderá já ter um adaptador Sem Fios integrado\n 2)Ou, se for fornecido um Adaptador USB sem fios, ligue-o à sua TV.  De seguida, por favor escolha o modo de ligação de rede sem fios.",
						"A pesquisar. Aguarde...",
						"Não está ligado á TV qualquer dispositivo sem fios! ",
						"Certificar que o código PIN seguinte está instalado no AP antes de clicar o botão abaixo \"Seguinte\".",
						"Prima a tecla no AP em 120 segundos antes de premir Direita!",
						"WPS (Configuração Protegida por Wi-Fi)",
						"PIN (N.º de identificação pessoal)",
						"PBC (configuração da tecla de premir)",
						"Os conteúdos seguintes só podem ser acedidos com uma ligação à rede. Pretende saltar a Configuração de rede?",
						"Existem novas atualizações de software para transferir, isto pode demorar algum tempo, dependendo do estado da sua rede.",
						"A actualização do software da sua TV garante que pode desfrutar das últimas funcionalidades e serviços.",
						"Não irá desfrutar das últimas funcionalidades e serviços. Pretende ignorar a Atualização do software?",
						"Prima o Botão Direito para continuar.",
						"Não desligue durante a atualização, pois pode provocar avarias na televisão.",
						"Se não pretender atualizar, selecione NO.",
						"A atualizar, aguarde",
						"Também pode atualizar o software em SYSTEM/SOFTWARE UPDATE.",
						"O país seleccionado exige definição de palavra-passe.\nDeve definir o código para a sua TV e confirmá-lo.",
						"This code is too simple.\nPlease use different digits.",
						"Parabéns! A configuração inicial está completa. Pode modificar a sua configuração através do Menu principal e respetivos sub-menus.",
						"Seleccionar o modo de segurança:",
						"Selecione o modo de ligação de rede sem fios:",
						"Rede"];
var initNetCabAndDonRe = ["Nenhum cabo de rede ligado, ligue um cabo de rede!","Nenhum adaptador sem fios integrado ou nenhum adaptador USB sem fios fornecido."];
var initChPrompt = ["Instalação do canal televisivo","Selecione o tipo de pesquisa de antena.","A processar a sintonização automática...","Foram encontrados os seguintes canais por antena:","Seleccione o tipo de procura de Cabo.","Selecione um operador a partir da lista seguinte.","Configure as informações de procura","Foram encontrados os seguintes canais por Cabo:","Seleccione uma operadora a partir da seguinte lista","Seleccione os satélites a procurar ou edite o satélite seleccionado","Defina os parâmetros do satélite","Foram encontrados os seguintes canais, a pesquisa de canal também pode ser novamente executada em Canal/Pesquisa de canal"];
var initClockPrompt = ["Obter a hora fornecida pela rede!",
						"Defina a Data e Hora:"];
var initialOptions	= ["Ambiente","Configuração da Rede","Actualiz. software","Instalação do Canal","Relógio"];
var initialHotkeys	= ["Atrás","Seleccionar","Seguinte","Concordo"];
var initLocations	= ["Casa","Loja","Loja com demo"];
var initNets		= ["Com fios","Sem Fios","Não tenho uma ligação à rede"];
var initWireManuals	= ["Endereço IP","Máscara subnet","Porta ligação por defeito","DNS principal","DNS secundário"];
var initSoftUpdates = ["Actualizar agora","Actualizar mais tarde"];
var initChannelIns	= ["Continuar","Não pretendo instalar canais"];
var initChScanTypes	= ["Digital & Analógico","Digital","Analógico","Não pretendo procurar"];
var initChDvbts		= ["Canais ATV de antena:","Canais DTV de antena:"];
var initChDvbcs		= ["Canais ATV por Cabo:","Canais DTV por Cabo:"];
var initChDvbss		= ["Canais de satélite:"];
var initChDvbSOther	= ["Não pretendo procurar canais de satélite"];
var initEndConnectedStatus= ["Desligado","WiFi ligado","Ligado por cabo"];
var initEndInstallations= "XXXX canais instalados";
var initEndUpdate	= ["Atualizado"];

var audioScenes 	= ["Colocação no armário","Montagem na parede"];			
var screenSavers	= ["Nenhum canal, prima a tecla “OK” e procure!",
						"Sem sinal!",
						"Codificado",
						"Só Dados",
						"Programa de áudio",
						"Sem áudio nem vídeo ",
						"Não Disponível",
						"Sem Teletexto",
						"Sem dados de programa.",
						"Programa bloqueado!",
						"Programa bloqueado!\nCarregue em OK e introduza o código.",
						"Sem detalhes de programa.",
						"Programa prejudicial a menores.\nPrima OK e insira o seu código.",
						"Canal bloqueado!",
						"Canal bloqueado!\nCarregue em OK e introduza o código.",
						"Entrada bloqueada!\nCarregue em OK e introduza o código.",
						"Não suportado!",
						"Este serviço não está actualmente disponível",
						"Entr.Bloqueada!",
						"Sem título de programa.",
						"Sem função",
    					"Sem Legendas"
						];
var channelNumberOverPromt = ["The number of search programs has exceeded,you can delete some programs and then retry!"];
var chBookingPromt	= ["O canal atual tem uma gravação agendada. A televisão vai iniciar a gravação.",
						"Foi encontrada uma gravação agendada.\n Mude para XXXX para gravar",
						"O canal actual possui um lembrete.",
						"Foi encontrado um lembrete agendado.\n Mude para XXXX"];
var timeUnit		= ["Seg.","min"];
var ciPromt			= ["Dados de rede alterados. Para atualizar, pode realizar uma pesquisa de atualização. ",];
var othersPromt		= ["Por favor aguarde…",];
var menuOptions		= ["Imagem","Som","Canal","Smart TV","Rede","Sistema","Suporte"];
var optionOptions	= ["Modo de imagem","Predefinição de som","Parar","T-Link","mudança de hora","PVR","Lista de programação","Configurações","*"];
var optionTLinkPromt= [["Ligar automático","Modo de espera auto","Guide menu"],
						["Ligar","Em Espera","Volume do Amplificador"]];
var powerPromt		= ["A TV desligar-se-á em breve! Premir qualquer tecla para anular."];
var ttxLanguage		= ["EUR OESTE","EUR LESTE","Russo","Árabe/Hebraico","Farsi","Árabe","Bieloruský","Grego","Turco"];
var ttxOptions		= ["Revelar","Subpáginas","Idioma","Página de alarme","Flash informativo"];
var weekday         = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];
var lcnConfflict	= "Este programa tem um problema de recepção. Existe outra versão disponível no canal %d.";
var inShopMode		= "A sua televisão está em modo Loja Para modo Casa, selecione 'Sistema' e altere 'Local' no menu.";
var nitRefresh		= "Os dados de rede mudaram. Deseja efectuar uma pesquisa de actualização?";
var picHDMIMode     = ["Automático","Gráfico","Vídeo"];

var glassRemind    	= ["Emparelhe os óculos 3D com a televisão\n(Mantenha premido POWER nos óculos 3D).","Os seus óculos 3D estão ligados à televisão. ",""];
var pvrRemind 		= ["Não desligue o dispositivo USB nem interrompa a alimentação"];
var pvrConName   	= ["PVR","Informação de programa:",["Nota: Para gravar um canal HD, selecione a unidade USB (com velocidade >5,0 MB/seg); para gravar um canal SD, selecione a unidade USB (com velocidade >3,0 MB/seg).","Vídeo gravado  está guardado na pasta \"PVR\"."],"Parar ","Registo","hora","Minutos","Duração","Dicas","Utilize as setas para definir a duração da gravação."];
var pvrDisRemind 	= "Inserir ums unidade de meória USB para gravação.";
var pvrRemindWords  = ["Pretende sair?",
							"Pretende parar a gravação e pesquisar os ficheiros gravados?",
							"Disco removido.",
							"Não existe espaço livre suficiente.",
							"Nenhum ficheiro gravado. Iniciar gravação.",
							"PVR não pode iniciar em Canal Codificado.",
							"Função não disponível",
							"Gravado com Sucesso.",
							"Deseja parar processo gravação, e alterar fonte de entrada?",
							"A televisão irá terminar a gravação atual. Pretende sair?",
							"A gravação PVR precisa que o sinal da televisão funcione devidamente. Verifique o seu sinal."];
var pvrChangeCh 	= ["Pretende abrir o canal?",
							"Deseja parar processo gravação, e alterar canal?"];
var pvrChangeToPIN8	= ["Pretende alterar a origem para o dispositivo ligado à entrada SCART?",
				    		"Pretende parar o processo de gravação e alterar a origem para o dispositivo ligado à entrada SCART?"];
var pvrChangeToCEC  = ["Pretende alterar a origem para o dispositivo ligado a uma entrada HDMI?",
				  			 "Pretende parar o processo de gravação e alterar a origem para o dispositivo ligado a uma entrada HDMI?"];
var pvrGuideJump    = ["Pretende aceder a EPG?",
							"Deseja parar processo gravação, e introduzir EPG?"];
var pvrMediaJump    = ["Pretende aceder a Media?",
							"Deseja parar processo gravação, e introduzir Media?"];
var timeshiftExtra	= ["Pretende parar pré-gravação e mudar a TV mudar canal?",
						"Pretende parar a transmissão em indeferido e alterar a origem para o dispositivo ligado à entrada SCART?",
						"Pretende parar a transmissão em indeferido e alterar a origem para o dispositivo ligado a uma entrada HDMI?",
						"Mudança hora n/pode iniciar em Canal Codificado.",
						"Pretende parar a transmissão em indeferido e aceder a EPG?",
						"Pretende parar pré-gravação e mudar a TV para o modo USB?",
						"Pretende parar pré-gravação e mudar fonte entrada?",
						"Inserir ums unidade de meória USB para gravação.",
						"O tamanho do disco é insuficiente.",
						"A televisão irá parar transmissão em indeferido atual. Pretende sair?"];
var timeshiftStatus	= ["Retroceder rápido","Parar ","Reproduzir","Pausa","Avançar rápido"];
var pvrPowerOffRemind= ["Gravação em standby","Em Espera","A televisão está a gravar. Pretende continuar a gravar quando a televisão está no modo Standby?"];
var timeshiftInitTitle= "Configuração Disco";
var timeshiftInitReminds= ["Assistente usado para configurar disco USB para pré-gravação.Seleccionar pf. modo configuração.",
						 "Para melhor desempenho, recomendamos formatar disco USB.Apagará todos os dados.",
						 "Selec. p.f. tamanho ficheiro de pré-gravação.",
						 "A formatar",
						 "Não existe espaço livre suficiente.",
						 "A criar ficheiro pré-gravação",
						 "A testar velocidade",
						 "A velocidade do disco é demasiado lenta  (< %f MB/seg) para activar função pré-gravação! ",
						 "O disco está pronto para pré-gravação.Recomendamos mudar disco(de velocidade > %f MB/seg) para um melhor desempenho.",
						 "O disco está pronto para pré-gravação."];
var timeshiftInitButtons= ["Formatar","Saltar","Cancelar","Ok","Concluir","Sair"];
var timeshiftInitOther=["Vel. Disco:","MB/seg."];

var selectChoice	= "Tem a certeza?";
var chAtvStore		= "Guardar como XXXX";
var chEpgFirstGenreUK= ["Cinema","Notícias e Factos","ENTRETENIMENTO","Desporto","Infantil","Educação","Estilo de vida","Teatro"];
var homePageTitleList = ["APPS","TV","VÍDEOS","Página de início"];
var homePageFavAndAllName  = ["Apps favoritas","Todas as Apps"];
var homePageBackUp = ["E-Manual","GuideOn"];
var homePageRemind   = ["As funções completas estão disponíveis apena após a ligação à rede.","A sua televisão ainda não tem canais. Os programas estão disponíveis após pesquisar os canais.","Sem programa","Pesquisar canais agora?"];
var homePageHistory = ["Historial"];
var miracastTitle = ["Visualiz. Wifi","Dispositivo TCL"];
var miracastRemind=["Visualiz. Wifi permite-lhe partilhar o ecrã e o som do seu dispositivo, como por exemplo do smartphone ou do tablet para a TV, sem fios (i.e. sem cabos ligação). Isto torna possível visualizar na TV ao mesmo tempo que o smartphone ou o tablet estão a reproduzir. Por exemplo, pode apresentar um vídeo no smartphone e exibi-lo simultaneamente na TV ou usar o tablet como controlador de jogos com o conteúdo exibido no ecrã maior da TV.","Ligação WiFi TV na TV está pronta. Já pode começar a partilhar o ecrã do seu dispositivo com a TV.","A ligar. Aguarde!","Erro de ligação !","Falhou ligação.Verifique!"];
var homePageLittleWin = ["Configurações","Media","Canais favoritos","Smart TV","EPG"];

var hbbtvStopRemind  = ["Pretende parar a reprodução?"];
var colorSystem = ["Automático","PAL","SECAM","NTSC"];
var deviceTitleTipsText = "Prima ≡ (opção) para mais informação";
var emptyListInfo = "Nenhum dispositivo ligado à TV !";
var optionVideoListArray_1 = ["Modo de imagem", "Predefinição de som", "Modo leitura", "Modo de ecrã", "Modo 3D", 
							  "Interruptor E-D", "Profund. do campo", "Legendas", "Faixa de áudio", "Título", "Capítulo", "Info"];
var optionVideoListArray_2 = ["Modo de imagem", "Predefinição de som", "Modo leitura", "Modo de ecrã", 
							  "Legendas", "Faixa de áudio", "Título", "Capítulo", "Info"];
var bottomTipsText = ["Ler/Pausa", "Retroceder rápido", "Avançar rápido", "Lista de reprodução", "Configurações"];
var picturePresetArray = ["Standard", "Dinâmico", "Natural", "Cinema", "Utilizador"];
var videoPlayModeArray = ["Repetir Todos", "Repetir Um", "Normal"];
var screenModeHDArray = ["16:9", "4:3", "Panorama", "Vid Zoom", "Zoom 2", "Vid Zoom", "Strekk Zoom", "Automático"];
var screenModeSDArray = ["16:9", "4:3", "Panorama", "Zoom 14:9", "Zoom 16:9", "Zoom inn 16:9", "Automático"];
var Mode3DArray = ["Inactivo", "2D-para-3D", "Lado-a-Lado", "Topo e Base", "Intercalar linha"];
var videoOptionListArray = ["Inactivo", "Faixa", "Legendas", "Título", "Capítulo"];
var subMenuTitleText = "Legendas";
var langMenuTitleText = "Idioma de áudio";
var titleMenuTitleText = "Título";
var mode3DMenuTitleText = "Modo 3D";
var langInfoText = "Faixa";
var STOP_RESUME_INFO = "Parar-Retomar";
var playListName = "nome";
var eb_tips = "Dicas";
var ok_button = "Ok";
var eb_info = ["Erro de descodificação áudio.", "Erro de descodificação vídeo.", "Formato áudio não suportado.", 
			   "Formato de vídeo não suportado.", "Não consigo abrir este ficheiro!", "Falha de reprodução, tente de novo.",
			   "Formato de ficheiro não suportado.", "Oops! Leitor parou a reprodução.",
			   "Caminho de ficheiro não existe ou é inválido.\n Volte a inserir o dispositivo de armazenamento e tente novamente.",
			   "Continuar a reproduzir a partir do estado\n de reprodução anterior?"];
var picturePlayErrorTips = ["Falha de carregamento!!!","A imagem é demasiado grande!!!","Erro de rede!!!","Erro de linha!!!","Erro de parâmetro!!!","Erro desconhecido!!!"];
var frameTitleText = "Novo dispositivo";
var eb_quit_info = "Tem a certeza que pretende sair?";
var eb_yes = "SIM";
var eb_no = "NÃO";
var offinfo = "Inactivo";
var naInfo = "Nulo";
var consoleInfoArray = ["Retroceder rápido", "Avançar rápido", "Ler/Pausa", "Lista de reprodução"];
var cantOperateText = ["Função não suportada."];
var chapterChangeInfo = "Apenas os capítulos de 1 a XXXX estão disponíveis.";
var metaDataArray = ["Metadados de título/edição: ", "Metadados de capítulo: ", "Metadados de áudio: ", "Metadados de legendas: "];
var metaTitleInfo = "Título";
var metaChapterInfo = "Capítulo";
var videoLoadingInfo = "A analisar...";
var listLoadingInfo = "A carregar...";
var pgInfo = "Classificação da lei: ";
var fileNameText = "nome";
var fileDateText = "Data";
var fileSizeText = "Tamanho";
var fileDurationText = "Duração";
var fileDirectorText = "Realizador";
var fileCopyrightText = "Copyright";
var fileArtistText = "Intérprete";
var fileAlbumText = "Álbum";
var fileGenreText = "Género";
var fileYearText = "Ano";
var fileGenreText = "Género";
var mainListArray = ["Tudo", "Imagem", "Vídeo", "Música"];
var sortArray = ["nome", "Data"];
var parserArray = ["Normal", "Recursivo  "];
var emptyTipsInfo = "Oops. Ficheiro não suportado foi encontrado.";
var emptyFolderInfo = "Oops. Ficheiro não suportado foi encontrado.";
var sortName = "Ordenar por";
var parserName = "Reconhecedor";
var divx_str1 = "Registo DivX®";
var divx_str2 = "Anulação do registo DivX(R)";
var infor_str = "Info";
var quickMenuEmptyText = "Sem opções disponíveis.";

var musicSoundPresetArray = ["Standard", "Cinema", "Música", "Limpar voz", "Utilizador"];
var musicInformationArray = ["nome", "Intérprete", "Álbum", "Género:", "Ano:", "Duração:"];
var playListName = "nome";
var playTipsInfo = ["Está a reproduzir o primeiro ficheiro.", "Está a reproduzir o último ficheiro."]
var musicNameInfo = "Name";
var musicArtistInfo = "Intérprete";
var musicAlbumInfo = "Info";
var optionSoundPresetInfo = "Predefinição de som";
var optionBGMInfo = "Reproduzir em segundo plano";
var optionAudioOnlyInfo = "Só áudio";
var optionInfoText = "Info";

var remotePhoneConnecte = "XXXX foi ligado à televisão!";
var tvRemoteTitle		= "TV remota";
var tvRemoteDeveloper	= "A aplicação foi desenvolvida pela TCL";
var tvRemoteDeviceTitle	= "Nome do dispositivo:";
var remoteOption		= ["Partilha de multimédia","Controlo Remoto","Ajuda","Acerca de","Ligação Inteligente"];
var remotebottom		= " Transfira \"TV Remote\" para o seu smartphone ";
var remoteStage			= ["Android","IOS"];
var sharingReminds		= ["Partilhar fotos, vídeos e música com a televisão através do telefone.",
							"Passos: \n 1. Clique \"TV remote\" (tv remota) no telefone. Ligue o telefone com a televisão na mesma rede WiFi;\n 2. Clique \"Media sharing\" (partilha de ficheiros) para pesquisar os ficheiros multimédia;\n 3. Envie os ficheiros para a televisão para serem reproduzidos (com uma das seguintes opções)",
							"      a) Arrastar e Largar a pasta/ficheiro para o ícone TV na parte superior do ecrã;\n      b) Direccionar o telefone para a TV para exibir o primeiro ficheiro;\n      c) Reproduzir multimédia no telefone e clicar o ícone de partilha da TV;",
							" 4. Enquanto estiver a reproduzir na TV preparar o telefone para reproduzir o ficheiro anterior ou seguinte."];
var controlReminds		= ["Usar o telefone como controlo remoto para operar a TV.",
							" ",
							"Passos: \n   1. Clique \"TV Remote\" no telefone. Ligue o telefone com a televisão na mesma rede WiFi;\n 2. Clique \"Controlo remoto\" para operar a televisão."];
var helpDeviceWords		= "Interacção multi-ecrãs";
var helpBottom			= " Na era da tecnologia nuvem, os dispositivos inteligentes como o telefone e a TV são ligados entre si. Partilhar multimédia em ecrãs múltiplos com a sua família e controlar a TV através do telefone. ";
var helpReminds			= ["Preparações\n 1. Transfira e instale \"TV Remote\" a partir do Google Play ou Apple Store.\n 2. Ligue o telefone à televisão através da mesma rede WiFi.",
							" ",
							"Telefone recomendado\n   1. CPU: acima 800MHz\n   2. Armazenamento: pelo menos 80MB de espaço livre",
							" ",
							"Renúncia de responsabilidade\n Se \"TV Remota\" não estiver disponível no seu telemóvel, contacte o fabricante do telefone."];
var helpButtons			= ["Anterior","Seguinte"];
var aboutReminds		= ["TV remota","A aplicação foi desenvolvida pela TCL"];
var aboutExit			= "Sair";
var smartReminds		= ["Ligação rápida e inteligente entre a televisão e o telefone.",
							" ",
							"Passos\n 1. Ligue a televisão e o smartphone à mesma rede LAN: Clique \"TV Remote\" no smartphone.\n 2. Clique \"Smart Connect\" (ligar inteligente) para digitalizar o código QR.\n 3. Com a televisão no modo de visualização da transmissão, prima INFO no controlo TV Remote durante 4 segundos e irá surgir um código QR de ecrã inteiro.",];
var smartQRReminds		= ["Clique Smart Connect na aplicação TV Remote no seu telefone e digitalize o código QR para ligar a televisão e o telefone rapidamente.",
							"O código QR contém info de conta LAN. Guarde esta informação."];
							

var consoleTipArray = ["Anterior","Seguinte","Consola","Lista de reprodução"];							
var optionInfoArray = ["Modo de imagem","Modo leitura","Duração","Efeito","Info"];

var playModeArray = ["Normal","Misturar","Repetir"];
var durationArray = ["Curto(5s)", "Médio(10s)", "Longo(15s)"];
var effectArray = ["Nenhum", "Rodar", "Varrer p/ dir.", "Varrer p/ esq.", "Varrer p/ cima", "Varrer p/baixo", "Dentro de caixa", "Fora de caixa", "Aleatório"];
var infoArray = ["Nome:","Tamanho:","Data:","Localização"];

var picturePresetBarTitleInfo = "Modo de imagem";
var picturePresetBarArray = ["Standard","Dinâmico","Estúdio","Cinema","Utilizador"];
var upTipsInfo = "Mover imagem"; //add yums 2014-10-10
var consoleTipsArray = ["Consola","Anterior","Seguinte","Lista de reprodução","Configurações"];  //add yums 2014-10-10
var pictureMoveTipsArray = ["Prima DIREITA novamente para reproduzir a imagem seguinte","Prima ESQUERDA novamente para reproduzir a imagem anterior","Prima BAIXO novamente para exibir a lista de reprodução"]; //add yums 2014-10-10

var optionPvrListArray = ["Modo de imagem","Predefinição de som", "Modo de ecrã", "Modo 3D", "Legendas", "Faixa de áudio", "Info"];							
	
var titleSpanFirstArray = ["Controlo e Ligação","Operações básicas","APPS","TV","Configurações","FAQ"];
var titleSpanSecondArray = [["Controlo Remoto","Teclas do painel","Navegação fácil","Ligação da televisão","Ligação da televisão","Ligação da televisão","Sem Fios"],["Lançador","Barra de estado","Fonte"],["Apps em reprodução","Media","TV remota"],["Ajustar canal e volume","Lista de canais","EPG","Instalar canais","Canais favoritos"],["Ajuste da imagem","Ajuste do som","Ajuste do canal","Actualiz. software","Idioma","Bloqueio parental"],["Perguntas frequentes, FAQ","Perguntas frequentes, FAQ","Resolução de problemas","Resolução de problemas","Termos e condições"]];
var contentSpan1_1Array =[["POWER (interruptor):","SOURCE (entrada):","DEFINIÇÕES:","OPÇÃO:","VOLTAR:","INFO:","INÍCIO:","SAIR:","LIST(lista):"],
    ["Liga a TV ou coloca-a em modo de espera",
        "Selecionar a fonte de entrada",
        "Para exibir o menu Definições",
        "Para exibir o menu Opção",
        "Regressar ao menu anterior ou sair de uma aplicação em curso",
        "Exibe a informação do programa",
        "Para aceder à página inicial da Smart TV",
        "Regressar ao menu anterior ou sair de uma aplicação em curso",
        "Exibe a lista de canais"]];
var contentSpan1_2Array = ["Canal anterior","Canal seguinte","Aumenta o volume","Reduz o volume","Vai para a página de início","Confirma a opção","Standby / Ligar"];
var contentSpan1_3Array = ["OK/Guia","Subir canal","Descer canal","Descer volume","Subir volume","Disponível como setas em algumas funções."];
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","Adaptador AV OUT","LAN","Smartphone","PC/Set-top box/DVD","Amplificador de áudio","Amplificador de áudio/monitor","A sua televisão pode não incluir todas as tomadas."];
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Auscultadores","Adaptador AV IN","SPDIF","Adaptador CMP AUDIO IN","Adaptador CMP IN (YPbPr)","Dispositivos USB","Dispositivos USB","Auscultadores","DVC/Consola de jogos/Set-top-box/DVD","Amplificador de áudio","DVC/Consola de jogos/Set-top-box/DVD","A sua televisão pode não incluir todas as tomadas."];
var contentSpan1_6Array = ["Interface comum","SD","VGA","SCART","Mini SCART","ANTENNA IN","Placa PCMCIA","Cartão SD","Computador","Set-top box/DVD","Antena/Cabo/Satélite","A sua televisão pode não incluir todas as tomadas."];
var contentSpan1_7Array = ["Tablet","Computador","Roteador","Telefone","TV"];
var contentSpan1_8Array = ["Alternar função/Ligar","Premir sem soltar p/ aceder ao temp. da suspens.","Para baixo","Para cima","Volume/Canal/Fonte"];

var contentSpan2Array = [["Prima as setas para ver a página de Início.","Prima OK para ver um dos programas incluídos ou aceder à app."],["Exibe a data, rede e dispositivos, etc. no canto superior direito do ecrã."],["Selecione a entrada dos dispositivos ligados à televisão através de diferentes portas, como TV, AV, HDMI, etc."]];

var contentSpan3Array = ["Desfrute e veja as suas Apps favoritas através da página Smart TV.","Veja fotos, vídeos e reproduza música a partir de um dispositivo de armazenamento USB.","Ligue a televisão e o smartphone ou tablet à mesma rede LAN","Clique em nScreen ou TV Remota no smartphone ou tablet.","Partilhe fotos, vídeos e música em vários ecrãs com a sua família e controle a sua televisão através do seu smartphone."];

var contentSpan4Array = [["Prima CIMA/BAIXO para mudar de canal","Prima ESQUERDA/DIREITA para ajustar o volume"],["Pressione em LIST no controlo remoto para ver o alinhamento dos canais.","Prima CIMA/BAIXO para escolher o seu canal"],["EPG é um guia no ecrã que exibe programas televisivos agendados. Pode navegar, selecionar, ver e gravar programas."],["Pesquise e instale canais"],["Adicione ou edite os seus canais favoritos na Lista de canais"]];

var contentSpan5Array = ["Desfrute dos seus programas favoritos através das apps vídeo"];

var contentSpan6Array = [["Prima Opção para exibir as opções de definição do sistema","Aceda às definições da imagem para ajustar os valores"],["Prima Opção para exibir as opções de definição do sistema","Aceda às definições do som para definir as opções"],["Prima Opção para exibir as opções de definição do sistema","Aceda às definições de canal para definir as opções"],["Atualize a sua televisão quando houver uma nova versão de software disponível"],["Pode escolher o seu idioma de menu preferido"],["Permite aos pais bloquearem canais ou programas que não são adequados para crianças"]];

var contentSpan7_1Array = [["Sem imagem, sem som","Verifique se o fusível ou o disjuntor está a funcionar.","Ligue outro aparelho elétrico à tomada, para garantir que esta está funcionar ou foi ligado.","A ficha elétrica tem mau contacto com a tomada elétrica","Verifique a fonte de sinal."],["Imagem normal, sem som","Prima a tecla SUBIR volume para aumentar o volume.","A definição do som está errada.","Erro do sinal proveniente da transmissão."],["Som normal, sem imagem","Ajuste o brilho e o contraste","Erro do sinal proveniente da transmissão.","Verifique se está apenas no modo áudio."]];
var contentSpan7_2Array = [["Interferência de frequência de rádio","Esta interferência produz ondulações em movimento ou tiras diagonais e, em alguns casos, perda de contraste na imagem. Encontre e remova a origem da interferência de rádio."],["Sem cor","Ajuste as definições de cor.","Experimente outro canal. Pode estar a receber um programa a preto e branco."],["O controlo remoto não funciona","Substitua as pilhas.","As pilhas não estão instaladas corretamente. O cabo de alimentação da televisão não está ligado."]];
var contentSpan7_3Array = [["O conteúdo do dispositivo USB não é exibido","Verifique se o dispositivo de armazenamento USB é compatível com a televisão.","Verifique se os formatos dos ficheiros de áudio e imagem são suportados pela televisão."],["Reprodução sem som","O formato de áudio do vídeo não é suportado pelo leitor da televisão."],["Os ficheiros não são reproduzidos com suavidade","O desempenho de transferência do dispositivo de armazenamento USB pode limitar a taxa de transferência de dados para a televisão."]];
var contentSpan7_4Array = [["Ao que devo dar atenção quando estou a realizar atualização do software","Sem interferências de energia quando está a atualizar o software.","Evite quaisquer operações com o controlo remoto quando está a atualizar o software.","Seja paciente, pois o processo de atualização do software pode demorar."],["Não existem alterações distintas na interface da televisão após a atualização do software.","Sob determinadas condições, a atualização do software pode não apenas atualizar ou adicionar novas funções, mas também melhorar o desempenho da sua televisão, sem quaisquer alterações distintas na interface. Portanto, em alguns casos, a interface da televisão pode permanecer inalterada."]];
var termsTitle = "Termos e condições";
var termsConditions = ["(Declaração legal) da TCL - fabricante desta televisão.","Devido às várias capacidades características dos produtos Smart TV - Services bem como às limitações no conteúdo existente, algumas funções, aplicações e serviços podem não estar disponíveis em todos os dispositivos em todas as regiões. Algumas funções da Smart TV podem igualmente exigir dispositivos periféricos adicionais ou taxas de subscrição que são vendidos em separado. Agradecemos a visita ao nosso sítio web para mais informação sobre um dispositivo específico e sobre a disponibilidade do conteúdo. Os serviços e a disponibilidade do conteúdo através da Smart TV estão sujeitos a alteração com regularidade sem aviso prévio. \n   Todo o conteúdo e serviços acessíveis através deste dispositivo pertencem a terceiros e estão protegidos pela lei dos direitos de autor, patente, marca registada e/ou outras leis de propriedade intelectual. O referido conteúdo e serviços são unicamente fornecidos para uso pessoal não comercial. Não é permitido o uso de qualquer conteúdo ou serviços num modo diferente do que foi autorizado pelo proprietário do conteúdo ou pelo fornecedor do serviço. Sem limitar o anteriormente referido, a menos que expressamente autorizado pelo proprietário do conteúdo aplicável ou pelo fornecedor do serviço, não pode modificar, copiar, voltar a publicar, carregar, postar, transmitir, traduzir, vender, criar trabalhos derivados, explorar ou distribuir de alguma forma ou meio o conteúdo ou serviços exibidos através deste dispositivo. \n   TOMA EXPRESSAMENTE CONHECIMENTO E ACEITA QUE O USO DO DISPOSITIVO É POR SUA CONTA E RISCO E QUE OS REFERIDOS RISCOS NO QUE SE REFERE A QUALIDADE SATISFATÓRIA, DESEMPENHO E EXACTIDÃO SÃO DE SUA RESPONSABILIDADE. O DISPOSITIVO E TODO O CONTEÚDO E SERVIÇOS DE TERCEIROS SÃO FORNECIDOS “TAL COMO ESTÃO” SEM GARANTIA DE QUALQUER TIPO, SEJA EXPRESSA OU IMPLÍCITA. TCL RENUNCIA EXPRESSAMENTE A TODAS AS GARANTIAS E CONDIÇÕES NO QUE SE REFERE AO DISPOSITIVO E QUALQUER CONTEÚDO E SERVIÇOS, SEJAM EXPRESSAS OU IMPLÍCITAS, INCLUINDO MAS NÃO LIMITADO A, GARANTIAS DE MERCANTIBILIDADE, DE QUALIDADE SATISFATÓRIA, ADEQUAÇÃO PARA UMA FINALIDADE EM ESPECIAL, DE USUFRUTO E NÃO VIOLAÇÃO DOS DIREITOS DE TERCEIROS. TCL NÃO GARANTE A EXACTIDÃO, VALIDADE, ACTUALIDADE, LEGALIDADE OU INTEGRALIDADE DE QUALQUER CONTEÚDO OU SERVIÇO DISPONIBILIZADO ATRAVÉS DESTE DISPOSITIVO E NÃO GARANTE QUE O DISPOSITIVO, CONTEÚDO OU SERVIÇOS ESTEJAM CONFORME OS SEUS REQUISITOS, OU QUE O FUNCIONAMENTO DO DISPOSITIVO OU SERVIÇOS SEJA SEM INTERRUPÇÃO OU ISENTO DE ERROS. EM NENHUMAS CIRCUNSTÂNCIAS, INCLUINDO NEGLIGÊNCIA, PODE A TCL SER RESPONSÁVEL, SEJA POR CONTRATO OU EXTRA-CONTRATUALMENTE POR QUAISQUER DANOS DIRECTOS, INDIRECTOS, ACIDENTAIS, ESPECIAIS OU CONSEQUENCIAIS, CUSTAS DE ADVOGADOS, DESPESAS, OU QUAISQUER OUTROS DANOS QUE POSSAM SURGIR, OU EM LIGAÇÃO COM O MESMO, QUALQUER INFORMAÇÃO CONTIDA NO MESMO, OU COMO RESULTADO DO USO DESTE DISPOSITIVO, OU QUALQUER CONTEÚDO OU SERVIÇO ACEDIDO PELO UTILIZADOR OU POR TERCEIROS, MESMO QUE AVISADO DA POSSIBILIDADE DOS REFERIDOS DANOS. \n   Os serviços de terceiros podem ser alterados, suspensos, removidos, concluídos ou interrompidos, ou o acesso pode ser desactivado em qualquer momento, sem aviso, e a TCL (fabricante das TVs da marca Thomson) não representa nem garante que qualquer conteúdo ou serviço se mantenha disponível em qualquer período de tempo. O conteúdo e os serviços são transmitidos por terceiros através de redes e de serviços de transmissão sobre os quais a TCL não tem qualquer controlo. Sem limitar a generalidade desta renúncia, a TCL renuncia expressamente qualquer responsabilidade ou consequências relacionadas com qualquer alteração, interrupção, desactivação, remoção ou suspensão de qualquer conteúdo ou serviço disponibilizado através deste dispositivo. A TCL pode impor limites de utilização ou acesso a determinados serviços ou conteúdo, em qualquer caso e sem aviso ou responsabilidade. A TCL não é nem responsável nem legalmente obrigada pelo respectivo serviço ao cliente relacionado com o conteúdo ou serviços. Qualquer questão ou pedido de serviço relacionado com o conteúdo ou serviços deve ser feito directamente para o respectivo fornecedor de conteúdo ou serviços."];

var noChannelListRemind        = ["Nenhum canal encontrado. A lista de canais está disponível após a pesquisa de canais.","Pesquisa de canais"];
var closeSubtitleRemind   = "A função estará disponível quando as legendas estão desligadas. Pretende definir agora?";

var estickerTitles = ["Imagens extremamente realistas","Cor que parece viva","Extraordinário movimento realista","Qualidade dinâmica da imagem","SR UHD upscaling, melhoria da imagem","Experimente o mundo 3D","Desempenho mais rápido","Futuro conteúdo 4K","Desfrute do mundo online","Aceda a conteúdo extra","Sintonizadores digitais integrados","Ligue todos os dispositivos","Várias fontes 4K","Conteúdo USB","WiFi ultra rápido","Conteúdo móvel na televisão","Conteúdo no dispositivo móvel","Conteúdo local","Aprovado por DivX","Imagem sem perturbações","Pronta para canais","TDT Premium"];
var estickerDescriptions = ["Experiência de visualização espetacular, graças a imagens com quatro vezes mais detalhe Full HD em ecrã UHD.","Vasta gama de cores que oferece emoção em cada cena, com vermelhos vívidos e verdes esmeralda","Interpolação de imagem 4K e iluminação de fundo que combatem os problemas de esbatimento na imagem","O realismo da imagem original é melhorado para produzir uma verdadeira expressão dinâmica, com contraste extraordinário","Desfrute de programas televisivos e discos Blu-Ray mais nítidos do que nunca, graças à tecnologia Super Resolution (super resolução)","Experimente a 3D TV ready e veja vário conteúdo em 3D","Uma experiência de entretenimento mais prazerosa, com Quad Core para interação perfeita e desempenho melhorado.","Suporte de codec HEVC (H.265) para a futura distribuição de vídeo 4K","Vastidão de aplicações on-line, serviços VOD, acompanhe a transmissão televisiva e navegue pela Internet","Veja mais com serviços adicionais e conteúdo dos seus fornecedores de serviços favoritos","Aceda a canais televisivos com alta definição, sem uma set top box adicional","Fácil de ligar a várias fontes digitais disponíveis no seu lar","Televisão pronta para o futuro, capaz de reproduzir ficheiro 4K de 50/60Hz através de HDMI 2.0 com HDCP 2.2","Conteúdo de vídeo ou fotos diretamente a partir da unidade USB, HDD ou câmara no ecrã da televisão, em resolução 4K","Última geração 2x2 MIMO e norma AC oferece velocidade de acesso à Internet sem rivais","Desfrute de fotos, vídeos e aplicações a partir de dispositivos móveis no ecrã da televisão, graças à tecnologia de espelho do ecrã","Fotos, vídeos, aplicações do smartphone ou tablet podem ser exibidas no ecrã da televisão ","Exibição no ecrã da televisão de conteúdo local, como fotos e vídeos de dispositivos ligados à rede local","Reproduza filmes alugados ou próprios, protegidos por DivX","Design com moldura ultra estreita e super fina","Testado e aprovado pela Canal+","Testado e aprovado pela TDT Premium"];							

var eManualTextArray = ["E-Manual","Todos os gráficos no interior servem apenas para representação."];
var frontPanelRemind = "Painel frontal bloq.";
var eRPRemind		 = "O modo de loja não pode cumprir exigência do pedido ERP. Tem a certeza?";	
var noRelatedChannel = "Nenhum canal relacionado";
var option0624Name          = ["BOP","BFS","Evento a Evento","GetUserID","BGM","Reset all","Reiniciar compra","NRM","Selecção DVB-T2 e País","Modo HbbTV"];
var DVBT2AndChoice = ["Activo","Por País","Inactivo"];
var hbbtvServiceRemind = "O Serviço Hbb TV está aí, brevemente.";
var insertWord = "Introduzir";		
var viewDetail = "Detalhe de vista";							
							

var remindOAD  = "Actualizar software. Pode existir noutro canal uma nova actualização recomendada de software. Se aceitar descarregar o software, pode alterar automaticamente o canal. Pretende fazê-lo agora?";

var LEDStatus = ["A piscar", "Normal","Inactivo"];
var netFlixRemind = "Esta função interromperá o acesso aos serviços Netflix até iniciar sessão novamente.";
var ESNExplanation = "Número Eletrónico de Série";
var resetShopRemind = "O sistema está a reiniciar agora, não deve desligar a TV";
var initialSelectOption = "Selecionar uma opção:";
var databaseRemind   = "O sistema identificou a base de dados como estando danificada por alguma razão desconhecida e vai reconstruir a mesma automaticamente, premir OK para continuar";
var Deactivation = "Desativação";
var oadFutureRemind = "Atualização de software.\n Está disponível em %s uma nova atualização recomendada de software. A atualização pode levar algum tempo e o ecrã pode ficar preto. Não desligar o recetor durante a atualização. Se aceitar esta atualização, deve deixar o recetor ligado na hora programada. Pretende receber esta atualização?";														
							
var bt_title = "Bluetooth";
var bt_soundOutPutName = "Saída som";
var bt_soundOutPutTV = "Colunas TV";
var bt_soundOutPutBT = "Disp. Bluetooth";
var bt_soundOutPutBT_TV = "Bluetooth e TV";
var bt_refreshBarName = "Disp.";
var bt_settingTips_On = "Ligar função Bluetooth e pesq. Dispositivos.";
var bt_settingTips_Finding = "Ver disp. disponíveis...";
var bt_settingTips_NoDevice = "Sem disp. disponível.";
var bt_deviceList_State_NoConnect = "Não ligado";
var bt_deviceList_State_Connecting = "A ligar…";
var bt_deviceList_State_Connected = "Ligado";
var bt_deviceList_State_Paired = "Empar.";
var bt_deviceList_Conncect_Failed_Tips1 = "Ligação falhou.";
var bt_deviceList_Conncect_Failed_Tips2 = "Confirmar se Bluetooth XXX está ligado";
var bt_deviceList_Conncect_Success = "Ligado a disp. Bluetooth.";
var bt_deviceList_Disconncect_Success = "Desligado de disp. Bluetooth.";
var bt_deviceList_Disconnect = "Pretende desligar de XXX?";
var bt_tipsTitle = "Dica";
var bt_bluetooth_Pairing_Title = "Empar. Bluetooth";
var bt_bluetooth_Input_Pin = "Inserir PIN:";
var bt_bluetooth_Output_Pin_Tip = "Inserir PIN XXXX c/ teclas.";
var bt_bluetooth_Pin_Wrong_Tip = "PIN errado";
var bt_bluetooth_Remove_Pair_Title = "Perg.";
var bt_bluetooth_Remove_Pair_Ask = "Esquecer disp.?";
							
var audioDescriptionName = ["Descrição Áudio","Altifalante","Volume do altifalante","Auscultador","Volume do auscultador","AD volume","Dispositivo Bluetooth","Volume do dispositivo Bluetooth","Amplificador","Altifalante"];
var audioDescriptionOptions = ["Inactivo","Normal","Descrição Áudio"];
var volumeOffRemind = 'Defina XXX para “Lig.” no menu de Definições.';
var switchSourceRemind   = " inserido. Deseja mudar agora?";
var footballModeName = "Modo de Desporto";
var resetStadium = "Estádio";							

var atvSearchMenu = "ATV manual search";
var dtvSearchMenu = "DTV manual search";
var settingNoticeSourceName ="Fonte automática";

var smartTVOptions		= ["Portal da Smart TV","HbbTV","Partilhar e Ver","Visualiz. Wifi","Termos e condições",
                            "Modo de espera em rede", "Reiniciar smart TV","Cookie policy","Política de privacidade","Apagar Dados"];
var supportOptions		= ["Diagnóstico remoto","Contacte-nos"];
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
							
var tvDoctor=["Diagnóstico remoto 2.0",
"A aplicação permite à Smart TV efetuar verif. de diagnóstico e melhorar a sua experiência com o produto. Os dados de funcion. da TV e a inform. do modelo são obtidos pela aplicação, enviadas para o servidor e usadas para solucionar problemas com a TV. As suas informações pessoais não serão acedidas. Certifique-se de que a TV está devidamente ligada à Internet.",
"Diagnóstico local",
"Assim que o diagnóstico começar, siga as orientações do nosso técnico.",
"Diagnóstico remoto",
"PAntes de utilizar, certifique-se de que o nosso técnico está online.",
"Número de série:",
"&nbsp;&nbsp;&nbsp;&nbsp;ID do utilizador:",
"A ligar…",
"Diagnóstico em curso. \nMantenha uma ligação adequada da rede.",
"Não é possível aceder à Internet, \nverifique a ligação de rede.",
"Sair"
];
var contactUsOption = ["Contacte-nos",
    "Se sentir dificuldade em utilizar este dispositivo, Contacte-nos.",
    "Contacte-nos",
    "Web site: Visite",
    "Número do centro de atendimento:","Informação do produto","Nome Modelo:",
    "Versão software:","","ID do utilizador:","ID de projecto:",
    "Tipo de cliente:","Endereço MAC sem fios:","Endereço MAC com fios:","Netflix ESN:","Procure a informação no seu telemóvel.",
    " e selecione o seu país."];


//本地launcher的翻译，与服务器无关，只用于本地launcher
var homePageWords = ["Historial", "Procurar"];//home页的翻译
var titlePageWords = ["Casa", "Vídeos","TV","Aplicações"];//index的标题翻译
var videosPageWords = ["Cinema", "Sport","Música","Popular","Jogos","Educação","Noticias"];//videos页的内容翻译

//同时应用于本地和服务器
var statusPageWords = ["USB","Definições","WiFi","Com fios"];//状态栏的翻译

//二级页面的翻译
var searchPageWords = ["Procurar", "Pesquisas Populares:","Shows, Filmes, Pessoas ..."];
var resultSearchPageWords = ["Resultados acerca de"," ","Deve tentar outras palavras-chave.","Lamentamos, nenhum vídeo encontrado acerca de "," "];
var historyPageWords = ["Historial", 'Prima','para apagar o histórico',"Eliminar um","Eliminar todos","Ontem","Hoje"," Ainda não viu qualquer vídeo.","Histórico de visualização apagado com sucesso!"];
var channelPageWords = ["Lamentamos, nenhum vídeo ainda encontrado."];



//以下数组是虚拟遥控器的html中所有span的文字，要一一对应

var virtualRemoteValues	= ["1","2","3","4","5","6","7","8","9",
                       	   "Zoom-","0","Zoom+",
                       	   "Sair","0","",
                       	   "Lista","0","Texto",
                       	   "Guia","Aceder","Sair",
                       	   "Menu","Legendas","Informações",
                       	   "Parar",
                       	   "Informações","Menu","Sair",
                       	   "Sair"
                       	   ];	

//added for LA sports mode
var sportsModeInitReminds= ["Este assistente ajuda a configurar a unidade USB para o Modo de Desporto. Selecione o modo de configuração.",
						 "Selecione o tamanho do ficheiro para o Modo de Desporto.",
						 "A criar ficheiro do Modo de Desporto",
						 "A velocidade da unidade USB é demasiado lenta (< %f MB/seg.) para a função do Modo de Desporto!",
						 "A unidade USB está pronta para o Modo de Desporto. Recomenda-se a sua substituição (para uma velocidade > %f MB/seg.) para obter um melhor desempenho.",
						 "A unidade USB está pronta para o Modo de Desporto."];

var sportsModeExtra	= ["Deseja parar o Modo de Desporto e mudar de canal?",
						"Deseja parar o Modo de Desporto e mudar a fonte para o dispositivo ligado à entrada SCART?",
						"Deseja parar o Modo de Desporto e mudar a fonte para o dispositivo ligado a uma entrada HDMI?",
						"O Modo de Desporto não é suportado em Canais Codificados.",
						"Deseja parar o Modo de Desporto e aceder ao EPG?",
						"Deseja parar o Modo de Desporto e aceder ao conteúdo Multimédia?",
						"Deseja parar o Modo de Desporto e alterar a fonte de entrada?",
						"O televisor vai terminar o Modo de Desporto atual. Deseja sair?"];
var remoteControlNote = "- O controlo remoto fornecido poderá variar de acordo com o modelo do produto.";


var textArray = ["Volume","Channel","Source","Switch/Power","Guide","seconds to Power OFF"];
var guideArray = ["VOL-","VOL+","CH-","CH+","Pre","Next"];
var favChannelListRemind = ["Sem canais favoritos. Aceda a outras listas e utilize o “Botão Verde” para adicionar canais favoritos."];

var proxySetting = ["Defin. proxy","Porta"];
var powerOffShop = ["Recomenda-se o uso do modo Loja, continuar?"];
var tcastTextPageWords = ["Uma panóplia de vídeos e aplicações","TV remota ao alcance de um dedo","Conteúdos fantásticos, partilhados num ecrã gigante"];
var tcastOtherWords = ["Leia o código QR e transfira o T-Cast","Rede ligada à TV","Nome da TV","T-Cast"];
var hbbtvWords = ["Definição Hbbtv","HbbTV","Cookies","Cookies de terceiros","ID do dispositivo","a procurar"];
var hbbtvTrackingWords = ["YES","NO","Não quero saber"];
var eStickerTipWords = ["Armazenamento inferior a 400M, pretende apagar os vídeos no modo Demo para obter mais espaço?"];
var delEstickerVideoRemid = ["O vídeo foi apagado com sucesso"];

var clockPageWords = ["Local","Pequim","Tóquio","Hongkong","Taipei","Cingapura","Paris","Londres","Moscou","nova Délhi","Jacarta","Nova york","Rio",
                        "Pressione a tecla \"OK\"","Não pode ser adicionado!"];
var smartKeyWords = ["Visor sem fio","Aproveite a música","Temporizador","Relógio mundial","Soundbar","WiFi","PVR","Modo de esporte"];
var recommendWords = ["Recomendar"];
var onlyListenRemindWords = ["Entre no modo Somente Áudio","Prima qualquer tecla excepto a tecla de volume para sair!"];
var selectSatRemind = "Não pode selecionar mais de 20 satélites!";
var cookiePolicyTitle = "Política de Cookies – Serviços de Smart TV Online";
var cookiePolicyConditions = ["A Sociedade respeita a sua privacidade quando utiliza Smart TVs fabricadas e Serviços prestados pela Sociedade. Os cookies são utilizados por muitos websites e outros serviços de Internet e a sua Smart TV aceitará, armazenará e transmitirá cookies para assegurar que estes websites e serviços operam adequadamente. A Sociedade também utiliza cookies quando lhe disponibiliza os Serviços. Nesta Política de Cookies, a Sociedade descreve quais os cookies que são colocados na sua Smart TV e como os pode gerir.\nPor favor note que todos os dados pessoais que a Sociedade recolhe e/ou trata através, ou com a ajuda, de cookies estão sujeitos à Política de Privacidade e deverá ler a Política de Cookies em conjunto com a Política de Privacidade.\n1. O que é um cookie?\nOs cookies são pequenos ficheiros de texto que podem ser colocados na sua Smart TV. Quando um website ou o serviço de botão-vermelho de uma estação de TV é acedido, o website ou serviço poderá armazenar um cookie na Smart TV. No decorrer de acessos subsequentes, o cookie que é colocado na sua Smart TV enviará informação para a entidade que colocou o cookie. Os cookies são extremamente comuns e utilizados numa variedade de websites e serviços. Cada cookie conterá tipicamente o nome do domínio a partir do qual o cookie é proveniente, a \"duração\" do cookie, e um valor (habitualmente um número único). Para uma explicação mais detalhada do que são os cookies e como é que operam, por favor visite www.allaboutcookies.org.\nOs cookies podem ser categorizados em cookies funcionais e cookies não-funcionais. Os cookies funcionais são cookies que são estritamente necessários para a finalidade de lhe prestar os serviços de Smart TV e para os websites e outros serviços lhe fornecerem o conteúdo certo para a Smart TV. Os cookies não funcionais são todos os outros cookies.\nEsta Política de Cookies está relacionada com cookies que são colocados por nós, bem como cookies de publicidade que podem ser colocados por terceiros através dos nossos serviços na sua Smart TV. Esta Política de Cookies não está relacionada com cookies que possam ser colocados quando utiliza os serviços de Smart TV para aceder a websites, serviços ou aplicações de terceiros. Quanto a estes cookies veja as respetivas políticas de cookies de tais terceiros. Contudo, esta Política de Cookies descreve como eliminar tais cookies (veja a seção 4 abaixo).\n2. Que cookies não-funcionais utilizamos?\nPublicidade: Anúncios dentro do vídeo e no display poderão ser-lhe exibidos na sua Smart TV quando utiliza serviços Smart TV. Estes anúncios poderão ser exibidos por nós ou por terceiros através do, ou coordenados pelo, nosso fornecedor de publicidade, que desempenha um papel de coordenação central em relação ao fornecimento de tais anúncios. O nosso fornecedor de publicidade ou um terceiro fornecedor de publicidade irá colocar um cookie na sua Smart TV. Através deste cookie, um fornecedor de publicidade irá registar se um anúncio foi exibido na sua Smart TV ou se alguém que utiliza a sua Smart TV carregou num anúncio. Nós utilizamos a informação guardada em tal cookie de publicidade para recordar que anúncios foram exibidos na sua Smart TV para que possamos ter a certeza que não são exibidos demasiados anúncios do mesmo tipo em qualquer Smart TV em particular, e que somos capazes de executar os nossos acordos comerciais com os nossos parceiros de publicidade. Não utilizaremos esta informação para exibir anúncios dirigidos. Adicionalmente, terceiros poderão utilizar o nosso sistema de publicidade para exibir anúncios na sua Smart TV e colocar cookies na sua Smart TV quando tais anúncios são exibidos. \nEstes cookies contêm, entre outros, informação sobre os anúncios exibidos, informação sobre em que aplicação ou domínio tais anúncios são exibidos, e o seu endereço de IP. Isto é feito para recordar com que frequência um anúncio em particular é exibido, e de forma a prevenir que o mesmo anúncio seja exibido com demasiada frequência. Terceiros anunciantes externos que possam colocar anúncios também poderão utilizar cookies para seguir a sua atividade em múltiplos websites, e para lhe fornecer anúncios que correspondam às suas preferências pessoais.\n3. Websites de terceiros\nQuando visita websites ou serviços de terceiros através de serviços da Smart TV da sua Smart TV, é possível que tais websites ou serviços coloquem cookies na sua Smart TV, e que tais websites sigam e armazenem as suas interações em tais websites. Nós não solicitamos ou encorajamos tais actividades e não utilizaremos tal informação. Por favor consulte as respetivas políticas de cookies e privacidade de tais websites e serviços para mais informação sobre a utilização de tais cookies por esses terceiros.\n4. Eliminação de cookies \nA sua interface de utilizador da sua Smart TV permite-lhe eliminar todos os cookies e outro armazenamento local do browser da Smart TV. É muito recomendável que remova todos os cookies e definições guardadas localmente antes de vender ou dar a sua Smart TV.\n5. Contactar-nos\nCaso tenha quaisquer questões ou comentários relativamente à nossa Política de Cookies ou à nossa prática de utilização de cookies poderá enviar-nos um e-mail para FRsupport@tcl.com.\nVersão: 1.0\n"];
var privacyPolicyTitle = "Política de Privacidade – Serviços de Smart TV Online";
var privacyPolicyConditions = ["Nós respeitamos a sua privacidade quando tratamos os seus dados pessoais. Esta Política de Privacidade descreve a entidade responsável pela recolha, o tratamento e utilização dos seus dados pessoais que nós recolhemos em conexão com a utilização dos nossos serviços de Smart TV (\"Serviços\"), que tipos de dados nós recolhemos sobre si, o que é que nós fazemos com eles, e os seus direitos em relação a tal utilização dos dados pessoais por nós. \n1. Responsável pelo tratamento\nA recolha, tratamento e utilização dos seus dados pessoais recolhidos, quando utiliza os Serviços, será efetuada pela Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, China (\"Sociedade\"). Por favor note, contudo, que nós não somos responsáveis por todas as atividades de tratamento de dados abaixo descritas. Incluímos, contudo, uma descrição das respetivas atividades na nossa Política de Privacidade uma vez que este tratamento está relacionado com a sua utilização da Smart TV.\n2. Consentimento para o tratamento de dados\nAlguma da recolha, tratamento e/ou utilização dos seus dados pessoais requerem o seu consentimento.\nCaso tenha consentido na utilização dos seus dados pessoais para a finalidade de melhoria dos Serviços, o seu consentimento tinha a seguinte redação:\n\"Eu consinto na recolha, tratamento e utilização do tempo de ligação do meu dispositivo, lista de canais DTV, lista de canais favoritos, tempo de visita, e canais visualizados para finalidades de análise de hábitos de utilização para melhoria dos Serviços e/ou para analisar quantos utilizadores online a Sociedade tem por dia/mês/ano e para a partilha desta informação com as estações de TV.\"\nCaso tenha consentido na utilização dos seus dados pessoais para anúncios que estão personalizados para os seus interesses, o seu consentimento tinha a seguinte redação:\n\"Eu consinto na recolha, tratamento e utilização do meu tipo de cliente e país para fins de receção de anúncios adequados.\"\nO consentimento é voluntário e ainda será capaz de utilizar os Serviços caso não consinta. Contudo, poderá ver anúncios e outro conteúdo que não é ajustado às suas preferências. Independentemente do seu consentimento, a Sociedade reserva o direito de recolher, tratar e/ou utilizar os dados acima na medida do permitido pela lei aplicável.\nPoderá revogar o seu consentimento, a qualquer momento, para qualquer das finalidades acima indicadas, com efeitos para o futuro. Poderá opor-se à utilização dos seus dados pessoais para efeitos de marketing, pesquisas de mercado ou de opinião e para a personalização dos Serviços de acordo com as suas necessidades. De forma a revogar o seu consentimento e/ou para se opor, por favor altere as definições de privacidade da sua Smart TV em conformidade.\n3. Dados pessoais recolhidos\nIndependentemente do seu consentimento, a Sociedade recolhe, trata, armazena e utiliza as seguintes categorias de dados:\nDevice-ID (ID de Dispositivo): A sua Smart TV armazena um número único fixo que nos permite identificar e autenticar a Smart TV quando utiliza os Serviços. Este número é apelidado de Device-ID. O Device-ID será disponibilizado ao nosso parceiro de serviço para lhe prestar os Serviços. Também disponibilizamos o Device-ID a parceiros de conteúdo selecionados para efeitos de autenticação. Estes parceiros de conteúdo utilizam o Device-ID para autenticar a sua Smart TV para acesso aos serviços prestados por um parceiro de conteúdo potencial.\nEndereço IP e endereço MAC: Será atribuído à sua Smart TV um endereço IP quando acede à Internet. Este endereço IP ser-nos-á transmitido e tratado por nós cada vez que a Smart TV requerer informação ou dados dos Serviços. Caso a sua Smart TV esteja ligada a um router (ex.: numa rede residencial ou numa WLAN local), nós poderemos recolher e tratar o endereço IP de tal router. O endereço MAC é um número único atribuído a cada interface de rede da sua Smart TV. O endereço MAC também será recolhido e tratado por nós quando a Smart TV requerer informação ou dados dos Serviços.\nDados de pedido de serviço: Quando ligar a sua Smart TV à Internet e ligar a Smart TV, esta irá automaticamente conectar-se aos Serviços, os quais são geridos pelo nosso parceiro de serviço. A sua Smart TV será então autenticada como estando certificada para acesso aos Serviços. Para efeitos de autenticação, os Serviços armazenam um ou mais identificadores numéricos relacionados com a sua Smart TV. Quando se conecta ao Serviço, a Smart TV transmitirá o endereço IP que lhe foi alocado e transmitirá informação específica do dispositivo (modelo da Smart TV, versão do software) para verificar se o existem atualizações de software disponíveis.\nDefinições do serviço: Como parte do regular funcionamento dos Serviços poderá manualmente organizar quais as apps que são exibidas pelos Serviços. O nosso parceiro de serviço armazenará a sua organização e outras preferências que poderá estabelecer durante a utilização dos Serviços. Esta informação ficará ligada ao Device-ID.\nInformação específica do dispositivo: A Smart TV armazena diversa informação sobre si própria e sobre a sua configuração. Esta informação inclui o tipo de Smart TV, a versão do sistema operativo da Smart TV, a resolução do painel, o ID de projeto (i.e., informação respeitante a ficheiros de configuração), o agente do utilizador, nome do browser, versão do browser, e a língua e o país que foram configurados na Smart TV. Esta informação será utilizada por nós e será fornecida ao nosso parceiro de serviço e parceiros de conteúdo.\nPublicidade: Os Serviços poderão exibir anúncios. Estes anúncios são exibidos por nós, ou por terceiros que utilizem inventário de publicidade transmitido por nós. Todos os anúncios são exibidos por meio do, ou através do, nosso fornecedor de publicidade, que cumpre uma função de coordenação para a exibição de anúncios. O nosso fornecedor de publicidade ou o terceiro fornecedor de publicidade poderá colocar um cookie na Smart TV. Por favor veja a nossa Politica de Cookies para mais informação sobre estes cookies.\nTráfego de Serviço e de Parceiro de Conteúdo: Quando utiliza os Serviços a sua Smart TV irá requerer dados dos Serviços através da Internet. Como parte destes pedidos, o seu endereço de IP, conforme acima descrito, e a língua e país que foram configurados na sua Smart TV serão transmitidos para o nosso parceiro de serviço. O nosso parceiro de serviço irá tratar os respetivos dados de acordo com a sua política de privacidade.\nUtilização de segundo ecrã: Caso utilize a nossa aplicação de segundo ecrã, os controlos que ativa na aplicação e as definições de país e língua, lista de canais DTV, listas de canais favoritos, listas de agendamentos, Device-ID, canal atual, versão do protocolo e endereço IP da sua Smart TV será recolhido e tratado por nós nos nossos servidores. Os nossos servidores irão então controlar a sua Smart TV conforme instruções suas na app de segundo ecrã.\nHbbTV - \"Botão Vermelho\": Estações de TV (\"Estações\") poderão enviar informação adicional com o seu sinal de TV. Caso a Smart TV receba instruções específicas em tal informação adicional e caso esteja ligada à Internet, a Smart TV irá descarregar uma imagem ou uma página pequena do website da Estação e exibi-la-á, em conjunto com a informação para carregar no \"Botão Vermelho\" no seu controle remoto, caso deseje utilizar serviços adicionais utilizados pela Estação. Isto sucede cada vez que efetua mudança de canais (zapping). Ao descarregar a imagem a partir do website da Estação, a Smart TV transmitirá alguns dados pessoais, i.e., a lista de canais DTV, canal atual, tabela de informação de eventos, tempo da TV, endereço IP da sua Smart TV e cookies armazenados na Smart TV (se existentes). A Estação é responsável pela recolha, tratamento e/ou utilização destes dados. Adicionalmente, caso utilize serviços adicionais oferecidos por uma Estação através do Botão Vermelho, a Estação poderá recolher outros dados pessoais sobre si (ex.: quais os vídeos a pedido – on demand – que visualiza, as notícias que lê, etc.).\n4. Finalidades para as quais tratamos e/ou utilizamos os seus dados pessoais\nNós tratamos os dados recolhidos para as seguintes finalidades:\n• Prestação dos Serviços: Utilizamos o endereço de IP e o endereço MAC, Device-ID, a versão do sistema operativo da Smart TV, o tipo de cliente da sua Smart TV e a sua resolução de painel, o ID de projeto (i.e., informação respeitante a ficheiros de configuração), a sua lista de canais DTV, canais visualizados, fuso horário, definições de país e linguagem para disponibilizar acesso à sua Smart TV com acesso aos Serviços e serviços prestados pelos parceiros de conteúdo. As finalidades incluem (mas não estão limitadas a) autenticação, disponibilizar-lhe serviços baseados em localização (ex.: previsões meteorológicas); gestão de abusos, gestão de incidentes de segurança, monitorização de disponibilidade dos Serviços, e disponibilização de serviços de armazenamento de preferências do utilizador.\n• Autenticação: Utilizamos o Device-ID e endereço MAC para fins de autenticação.\n• Atualizações de Software: Cada vez que a sua Smart TV é ligada, irá disponibilizar-nos o endereço IP, Device-ID, versão de software, tipo de cliente da sua Smart TV, ID de projeto (i.e., ficheiros de configuração), ID de utilizador e número de série para lhe oferecer e disponibilizar atualizações de software apropriadas. \n• Melhoramento dos Serviços: Utilizamos dados de utilização agregados e anonimizados (i.e., dados sobre a sua interação com os Serviços) para melhorar a experiência do utilizador dos Serviços.\n• Exibição de Anúncios: Utilizamos a informação em cookies de publicidade para permitir ao sistema que registe quais os anúncios que foram exibidos na sua Smart TV, de forma a assegurar que não recebe muitos anúncios similares e que somos capazes de cumprir os nossos acordos comerciais com os nossos parceiros de publicidade. Os anunciantes externos que exibem anúncios nos Serviços ou os websites de parceiros de conteúdos após coordenação pelo nosso fornecedor de publicidade, também poderão utilizar cookies para o seguir através de múltiplos websites e para exibir anúncios que refletem as suas preferências pessoais.\n• Otimizar anúncios: Utilizamos dados relacionados com visualizações de anúncios e com clicks nos anúncios para otimizar a experiência de publicidade dos consumidores no Serviço.\n• Descontos: Disponibilizamos o Device-ID a parceiros de conteúdo selecionados para permitir a estes parceiros identificar em que medida é que lhe podem disponibilizar com acesso gratuito a títulos de Vídeos a Pedido (Video on Demand) na sua coleção.\n• Aplicação da lei: Poder-nos-á ser solicitado que disponibilizemos dados às entidades de aplicação da lei competentes ou a tribunais. Caso o efetuemos, apenas o faremos sujeitos a um instrumento legal vinculativo como um mandado ou uma ordem judicial, que nos exija que cooperemos com as autoridades relevantes.\nA utilização dos Serviços é possível mediante utilização de pseudónimos, exceto se serviços específicos exijam que forneça o seu nome e/ou endereço de correio eletrónico.\n5. Categorias de destinatários\nA Sociedade partilha os seus dados pessoais recolhidos durante a sua utilização dos Serviços apenas com os seguintes terceiros:\n• Com terceiros prestadores de serviços de Smart TV, caso solicite tais serviços (ex.: caso inicie a aplicação Netflix na sua Smart TV poderemos partilhar o seu endereço de IP, endereço MAC, versão de software e nome de do modelo de TV com Netflix).\n• Com terceiros parceiros de conteúdo, caso solicite determinado conteúdo disponibilizado por tais parceiros de conteúdo (e.g.: de forma a disponibilizar-lhe o serviço GoLive IP TV, poderemos partilhar o seu tipo de cliente de TV, endereço de IP e definições de linguagem com a entidade legal que disponibiliza o serviço GoLive).\n• Na medida em que tenha consentido na partilha de dados pessoais específicos com os terceiros acima, a Sociedade partilhará os seus dados pessoais com tais terceiros.\n• Com prestadores de serviços de outsourcing como subcontratantes que assistem a Sociedade na prestação dos Serviços.\nA Sociedade partilhará os seus dados pessoais com outros terceiros apenas se a Sociedade for obrigada a fazê-lo na base de requisitos legais (ex.: a tribunais e autoridades de ação penal), tiver consentido na respetiva partilha ou a partilha for de outra forma legítima ao abrigo da lei aplicável.\n6. Países nos quais os seus dados serão tratados\nA Sociedade e/ou alguns dos destinatários dos seus dados pessoais listados acima poderão estar localizados fora do Espaço Económico Europeu (i.e.: nos seguintes países: República Popular da China, Estados Unidos da América). Assim, os seus dados pessoais poderão ser tratados em países que não são reconhecidos como disponibilizando um nível de proteção adequado de dados pessoais de acordo com a Diretiva 95/46/EC do Parlamento Europeu e do Conselho de 24 de Outubro de 1995 sobre a proteção de indivíduos com respeito ao tratamento dos dados pessoais e sobre o livre movimento de tais dados.\n7. Os seus direitos\nPoderá contatar a Sociedade de forma a receber informação sobre os seus dados pessoais tratados pela Sociedade e/ou para exercer os seus direitos legais com respeito ao acesso, retificação, eliminação e bloqueio dos seus dados pessoais; e/ou para se opor ao tratamento dos seus dados pessoais para fins de marketing e/ou pesquisa de mercado ou opinião.\n8. Alterações à Política de Privacidade \nPara melhoria dos nossos Serviços poderemos exigir alterações a esta Política de Privacidade – ex.: mediante a implementação de novas tecnologias ou a introdução de novos serviços. Reservamos o direito de alterar ou suplementar esta Política de Privacidade a qualquer momento.\n9. Informação de Contato\nCaso tenha quaisquer questões sobre a Política de Privacidade ou caso deseje efetuar uma reclamação sobre o nosso tratamento dos seus dados pessoais, por favor contate-nos através de um dos seguintes detalhes de contato:\nEmail: FRsupport@tcl.com\nVersão: 1.0\n"];
var privacyPolicyTerms = [
    "Ativar serviço Smart TV.",
    "Autorizo a recolha, o processamento e a utilização do tempo de início do meu dispositivo, da lista de canais DTV. da lista de canais favoritos, do tempo de visita e dos canais visualizados para análise dos hábitos do utilizador, de modo a melhorar os serviços e/ou para analisar a quantidade de utilizadores online que a TCL tem por dia/mês/ano e a partilha destas informações com estações de TV.",
    "Ativar serviço de recomendação.",
    "Ativar a aplicação do segundo ecrã para dispositivos móveis.",
    "Ativar atualizações de software automáticas.",
    "Ativar serviço FreeviewPlay."
];
var privacyPolicyTips = [
    "Todos os serviços da Smart TV serão desativados.",
    "O serviço HbbTV fornecido por canais de TV, quando o sintonizador integrado for usado será desativado.",
    "O serviço de recomendação de conteúdo e do programa de TV será desativado.",
    "A aplicação de segundo ecrã será desativada.",
    "A TV não verificará automaticamente as atualizações de software e novas funcionalidades.",
    "O conteúdo de FreeviewPlay será desativado."
];
var privacyPolicyRemind = "Deve selecionar a caixa de verificação correspondente em Definições.";
var set = "Definir";
var copyShopDemoTips = ["Ligado à USB, pretende copiar o vídeo para a unidade de memória?","Copiar o vídeo para a unidade de memória","O vídeo foi copiado com sucesso!","Erro de cópia do vídeo!"];
var activateTVWords = ["Ative a sua TV","Introduza o código de verificação.","Tire partido de mais serviços depois de ativar a sua TV.","Leia o código QR para obter o código de verificação.","Também pode obter o código de verificação da seguinte forma:","Ligue para o 1800588880, em seguida, forneça o SN para obter o código de verificação.","Apoio ao cliente","Preencha a informação; obterá o seu serviço de garantia."];
var dataDeletionWords = ["Apaga os seus dados de serviço Smart TV nos servidores backend.","Notas: Os dados relacionados com o utilizador da Smart TV serão apagados uma mês após ter selecionado este item. Ter em atenção que o facto de apagar não afeta os dados locais armazenados na sua TV.","Já não existem dados do relatório para o servidor da Smart TV.","Notas:  O seus dados relacionados com a utilização dos serviços da Smart TV não voltarão a ser transferidos depois de selecionar este item. A sua RV não receberá mais serviços recomendados.","Se pretender mais informaçães, pode visitar o sítio web www.tcl.eu"];
var miracastWords = ["Ligação sem fios","Espelhar o telefone Android na TV","Clique para ligar","Esta função só está disponível em telefones Android"];
var miracastTips = ["Passos de ligação","Abra as configurações do sistema","Mais maneiras de ligar \n / Outras ligações sem fios","Escolha a visualização sem fios","Clique para ligar \n à espera de ser encontrada"];
var termsAndConditions = ["\nOs conteúdos e serviços (conjuntamente, a \"Aplicação Licenciada\") disponibilizados através desta televisão (o \"Dispositivo\") são licenciados, e não vendidos, somente para utilização de acordo com estes Termos e Condições. Os fornecedores da Aplicação Licenciada (cada um, o \"Fornecedor da Aplicação\") reservam todos os direitos que não forem expressamente concedidos.\n\n1.	Âmbito da Licença\n\nA licença concedida para uma Aplicação Licenciada pelo correspondente Fornecedor da Aplicação limita-se a uma licença não transferível para utilizar a Aplicação Licenciada no Dispositivo que detém ou controla. Não poderá distribuir ou disponibilizar a Aplicação Licenciada numa rede onde possa ser utilizada por múltiplos dispositivos ao mesmo tempo. Não poderá alugar, locar, emprestar, vender, redistribuir ou sublicenciar a Aplicação Licenciada.\n\nTodas as Aplicações Licenciadas e todos os conteúdos nelas incluídos que sejam acessíveis através deste Dispositivo pertencem ao Fornecedor da Aplicação e encontram-se protegidos pelas leis de propriedade intelectual aplicáveis. Salvo disposição em contrário na lei aplicável, não pode modificar, copiar, descompilar, efectuar engenharia reversa, desmontar, republicar, carregar, publicar, transmitir, traduzir, tentar derivar o código-fonte, criar obras derivadas ou de outro modo explorar a Aplicação Licenciada, qualquer atualização ou qualquer parte da mesma. Caso incumpra esta restrição, poderá ficar sujeito a processos judiciais e pedidos de indemnização. Os termos da licença regerão quaisquer atualizações disponibilizadas pelo Fornecedor da Aplicação que substituam e/ou complementem a Aplicação Licenciada original, a menos que tal atualização seja acompanhada por uma licença separada, caso em que serão aplicáveis os termos definidos por essa licença. Será o único responsável por todos e quaisquer custos (se aplicável) relativos à atualização da Aplicação Licenciada.\n\n2.	Materiais de Terceiros\n\nA Aplicação Licenciada pode permitir o acesso aos serviços e websites do Fornecedor da Aplicação e de terceiros (conjuntamente, os “Serviços”). Ao utilizar qualquer um dos Serviços, poderá deparar-se com conteúdos que poderão ser considerados ofensivos, indecentes, ou censuráveis, conteúdos esses que poderão estar, ou não, identificados como contendo linguagem explícita, e os resultados de qualquer pesquisa ou o acesso a um determinado URL podem, automática e involuntariamente, gerar ligações ou referências a material censurável. Não obstante, o fabricante deste Dispositivo (o \"Fabricante\") e o Fornecedor da Aplicação não serão responsáveis por qualquer conteúdo que possa ser considerado ofensivo, indecente ou censurável.\n\nO Fabricante não é responsável por analisar ou avaliar o conteúdo, exatidão, integralidade, tempestividade, validade, cumprimento de direitos de autor, legalidade, qualidade ou qualquer outro aspecto dos Serviços. O Fabricante não garante ou aprova e não assume qualquer obrigação ou responsabilidade, perante si ou qualquer outra pessoa, por qualquer dos Serviços.\n\nOs Serviços podem conter conteúdos próprios, informação e material (conjuntamente, \"Materiais de Terceiros\") que são protegidos pelas leis de propriedade intelectual aplicável e outras, não devendo, em caso algum, utilizar tais Materiais de Terceiros de que forma for, exceto no âmbito da utilização permitida dos Serviços. Salvo disposição em contrário na lei aplicável, não deve reproduzir, modificar, alugar, locar, vender, distribuir os Materiais de Terceiros ou criar obras derivadas, de qualquer modo, bem como não deve, em caso algum, explorar os Serviços de qualquer forma não autorizada. Não deve usar os Serviços de modo a importunar, abusar, perseguir, ameaçar, difamar ou de qualquer outra maneira infringir ou violar os direitos de qualquer outra parte, sendo que o Fabricante não será, de forma alguma, responsável por qualquer daquelas utilizações, nem por quaisquer mensagens ou transmissões incómodas, ameaçadoras, difamatórias, ofensivas ou ilegais que possa receber como resultado da utilização de qualquer dos Serviços. \n\n3.	Exclusão de Garantia\n\nTodas as Aplicações Licenciadas e Serviços são fornecidas “tal como estão” e “conforme disponibilizados” sem garantia de qualquer tipo, expressa ou implícita. O Fabricante declina expressamente todas as garantias e condições relativamente às Aplicações Licenciadas e aos Serviços, expressas ou implícitas, incluindo, mas não se limitando a, garantias de comercialização, de qualidade satisfatória, de aptidão para uma finalidade específica, de exatidão, de “utilização calma” e de não infração de direitos de terceiros. O Fabricante não garante a exatidão, validade, tempestividade, legalidade ou a integralidade de qualquer Aplicação Licenciada ou Serviço disponibilizados através deste Dispositivo e não garante que o Dispositivo, as Aplicações Licenciadas ou os Serviços satisfaçam as suas exigências, ou que a utilização da Aplicação Licenciada ou os Serviços decorrerá de forma ininterrupta, sem erros, ou que os defeitos da Aplicação Licenciada ou Serviços serão corrigidos. Caso se verifique que a Aplicação Licenciada ou os Serviços apresentam defeitos, deverá assumir o custo integral da manutenção, reparação e correcção necessários.\n\nAs Aplicações Licenciadas e os Serviços podem ser alterados, suspensos, removidos, terminados ou interrompidos, ou o acesso pode ser desativado a qualquer momento, sem aviso prévio, sendo que o Fabricante não declara ou garante que qualquer conteúdo ou serviço incluído nas Aplicações Licenciadas ou Serviços permaneça disponível por qualquer período de tempo. Os referidos conteúdos e serviços são transmitidos por terceiros através de redes e meios de transmissão sobre os quais o Fabricante não tem controlo. Sem prejuízo do anteriormente exposto, o Fabricante declina expressamente qualquer responsabilidade por qualquer alteração, interrupção, desativação, remoção ou suspensão de qualquer conteúdo ou serviço disponibilizado através deste Dispositivo. O Fornecedor da Aplicação e outros fornecedores dos Serviços reservam o direito de alterar, suspender, remover ou desativar o acesso a qualquer Aplicação Licenciada ou Serviços, a qualquer momento e sem aviso prévio. O Fabricante poderá também, em qualquer caso e sem aviso prévio ou responsabilidade, impor limites à utilização de, ou acesso a, determinadas Aplicações Licenciadas ou Serviços.\n\nO Fabricante não fornece serviço de atendimento ao cliente relacionado com as Aplicações Licenciadas e os Serviços. Qualquer questão ou solicitação de serviço relacionado com as Aplicações Licenciadas e os Serviços deverá ser realizada diretamente ao respetivo fornecedor.\n\n4.	Recolha e Utilização de Informação\n\nO Fabricante, os Fornecedores da Aplicação e os fornecedores dos Serviços podem recolher e utilizar dados técnicos e informações relacionadas, incluindo, mas não se limitando a, informação técnica sobre o Dispositivo, software do sistema, da aplicação e periféricos, por forma a facilitar a disponibilização de atualizações de software, assistência ao produto e outros serviços (se aplicável) relacionados com o Dispositivo e a Aplicação Licenciada. O Fabricante, os Fornecedores da Aplicação e os fornecedores dos Serviços poderão utilizar tais informações para melhorar os produtos ou fornecer-lhe serviços ou tecnologias, desde que as informações não permitam identificá-lo. Para mais informações sobre a recolha e utilização da informação consulte a nossa política de privacidade http://www.tcl.eu/en/.\n\n5.	Indisponibilidade de Determinadas Funcionalidades\n\nDevido a restrições do Fornecedor da Aplicação, certas funcionalidades, aplicações e serviços poderão não se encontrar disponíveis neste Dispositivo (incluindo os seus dispositivos periféricos) ou em todos os territórios. Algumas funcionalidades deste Dispositivo poderão também exigir dispositivos periféricos adicionais ou taxas de adesão, que são vendidos separadamente.\n\n6.	Limitação de Responsabilidade\n\nNa medida do permitido pela lei aplicável, em nenhuma circunstância, incluindo negligência, o Fabricante terá responsabilidade, contratual ou extracontratual, por quaisquer danos diretos, indiretos, incidentais, danos especiais ou subsequentes, honorários de advogado, despesas ou quaisquer outros danos resultantes de, ou em conexão com, qualquer informação contida no, ou como resultado da utilização do, Dispositivo, qualquer Aplicação Licenciada ou qualquer Serviço, por si ou por qualquer terceiro, mesmo que tenha sido alertado para a possibilidade de ocorrência de tais danos.\n\nO fabricante só será responsável em caso de dolo e negligência grosseira."];
var privacyNotice = ["\n\nNós respeitamos a sua privacidade ao tratar os seus dados pessoais. Este Aviso de Privacidade descreve a entidade responsável pelo tratamento de dados pessoais que recolhemos com referência à utilização dos nossos serviços de Smart TV (\"Serviços\"), que tipos de dados pessoais recolhemos sobre si, o que fazemos com eles e quais os seus direitos em relação ao nosso uso dos dados pessoais.\n\n1.	Responsável pelo tratamento e representante na União Europeia\n\nA recolha, tratamento e utilização dos dados pessoais recolhidos do utilizador, ao usar os Serviços, são realizados pela Shenzhen TCL New Technology Co., Ltd., No. 5, Industrial Avenue (M), Sheko Industrial Zone, Shenzhen City, Guangdong Province, China (\"Sociedade\"). Os nossos detalhes de contacto, bem como os detalhes de contacto do nosso representante na União Europeia, são fornecidos na Secção 12 abaixo. Note-se, no entanto, que não somos responsáveis por todas as atividades de tratamento de dados descritas abaixo. Ainda assim, incluímos uma descrição das respetivas atividades no nosso Aviso de Privacidade, já que o tratamento em causa está relacionado com a utilização da Smart TV.\n\n2.	Consentimento para o tratamento de dados\n\nAlgumas das atividades de tratamento de dados que realizamos exigem o seu consentimento, como, por exemplo, a utilização dos seus dados pessoais para melhorar os Serviços.\n\nO consentimento é voluntário e poderá ainda utilizar os Serviços se não consentir. No entanto, pode não ver conteúdo que seja adaptado às suas preferências. Independentemente do seu consentimento, reservamo-nos no direito de tratar os seus dados pessoais na medida permitida pela lei aplicável.\n\nPode retirar o seu consentimento a qualquer momento. A retirada do consentimento não afetará a legalidade do tratamento com base no consentimento antes deste ser retirado. Para retirar o seu consentimento e / ou opor-se (conforme Secção 10 e Anexo: Os Seus Direitos abaixo, para os seus direitos de oposição), altere as configurações de privacidade da sua Smart TV em conformidade.\n\n3.	Categorias específicas de dados pessoais\n\nProcedemos ao tratamento em particular das seguintes categorias de dados:\n\nID do Dispositivo: A sua Smart TV armazena um número fixo único que nos permite identificar e autenticar a Smart TV quando usa os Serviços. Este número denomina-se ID do dispositivo.\n\nEndereço IP e endereço MAC: A sua Smart TV receberá um endereço IP ao aceder à Internet. Se a sua Smart TV estiver conectada a um router (por exemplo, numa rede doméstica local ou WLAN local), poderemos proceder ao tratamento do endereço IP desse router. O endereço MAC é um número exclusivo atribuído a cada interface de rede da sua Smart TV.\n\nInformações específicas do dispositivo: A Smart TV armazena várias informações sobre si própria e a sua configuração. Estas informações incluem o tipo de Smart TV, a versão do sistema operacional da Smart TV, a resolução de ecrã, a ID do projeto (ou seja, informações sobre arquivos de configuração), o agente do utilizador, o nome do navegador utilizado, a versão do navegador, bem como o idioma e país que foram configurados na Smart TV.\n\nEstas informações serão utilizadas por nós e serão fornecidas ao parceiro de serviços e parceiros de conteúdo para os fins descritos abaixo.\n\n4.	Finalidades para as quais procedemos ao tratamento e / ou utilizamos os seus dados pessoais e fundamentos jurídicos\n\nAs finalidades para as quais procedemos ao tratamento dos seus dados pessoais e os respetivos fundamentos jurídicos são descritas abaixo. Na medida em que a é a execução de um contrato seja mencionada abaixo como fundamento jurídico, não podemos fornecer-lhe os Serviços se não nos fornecer os respetivos dados. Na medida em que o seu consentimento seja mencionado como fundamento jurídico, o utilizador é livre para fornecer ou recusar o seu consentimento. Se não fornecer o seu consentimento, não procederemos ao tratamento dos seus dados pessoais para os motivos em causa.\n\n•	Fornecer os Serviços: Usamos o endereço IP e o endereço MAC, ID de Dispositivo, a versão do sistema operacional da Smart TV, tipo de cliente da sua Smart TV e a sua resolução de ecrã, a ID do projeto (ou seja, informações sobre arquivos de configuração), a sua lista de canais de Televisão Digital (DTV), os canais visualizados, o fuso horário, o país e as configurações de idioma para fornecer à sua Smart TV acesso aos nossos Serviços e aos serviços fornecidos pelos nossos parceiros de conteúdo. Os Motivos incluem (mas não estão limitados a) fornecer serviços baseados na sua localização (por exemplo, previsões do tempo); manuseio abusivo, gestão de incidentes de segurança, monitorização da disponibilidade dos Serviços e fornecer serviços de reserva das preferências do usuário.\n\nQuando utiliza os Serviços, a sua Smart TV solicitará dados dos Serviços através da Internet. Como parte dessas solicitações, o seu endereço IP, conforme descrito acima, bem como o idioma e o país que foram configurados na sua Smart TV, serão transmitidos ao nosso parceiro de serviços. O nosso parceiro de serviços procederá ao tratamento dos respetivos dados de acordo com o seu aviso de privacidade.\n\nO fundamento jurídico para o respetivo tratamento dos seus dados pessoais é a execução de um contrato, nos termos do Artigo 6 (1) b) do Regulamento Geral de Proteção de Dados (“RGPD”).\n\n•	Configurações de Serviço: Como parte do funcionamento regular dos Serviços, o utilizador pode organizar manualmente a ordem na qual as aplicações são exibidas pelos Serviços. O nosso parceiro de serviços armazenará a sua organização e outras preferências que pode definir durante o uso dos Serviços. Esta informação estará vinculada ao ID do dispositivo.\n\nO fundamento jurídico para o respetivo tratamento dos seus dados pessoais é é a execução de um contrato, nos termos do Artigo 6 (1) b) do RGPD.\n\n•	Autenticação: Sempre que o utilizador conectar a sua Smart TV à Internet e ligar a Smart TV, esta conectar-se-á automaticamente aos Serviços, que são geridos pelo nosso parceiro de serviço. A sua Smart TV será então autenticada como sendo certificada para acesso aos Serviços. Para fins de autenticação, os Serviços armazenam um ou mais identificadores numéricos únicos referentes à sua Smart TV. Usamos o ID de Dispositivo e o endereço MAC para fins de autenticação. Também fornecemos o ID de dispositivo a determinados parceiros de conteúdo para fins de autenticação. Estes parceiros de conteúdo usam o ID do dispositivo para autenticar sua Smart TV, para que possa aceder aos serviços fornecidos pelo parceiro de conteúdo.\n\nO fundamento jurídico para o respetivo tratamento dos seus dados pessoais é é a execução de um contrato, nos termos do Artigo 6 (1) b) do RGPD.\n\n•	Diagnóstico remoto: Como parte dos Serviços, fornecemos serviços de diagnóstico remoto. Assim, processamos o ID do dispositivo, o número do dispositivo, o número de série, o endereço MAC e os registos de erros, códigos de erros e descrições de erros, fornecidos automaticamente pelo módulo defeituoso (aplicativo, sistema de middleware).\n\nAcresce que, se ligar para o nosso apoio ao cliente, dependente da sua autorização prévia, o agente de suporte técnico pode aceder remotamente à sua TV e executar serviços de diagnóstico remoto.\n\nNeste caso, o agente de suporte técnico recebe acesso à sua TV e à sua rede, aplicação e ficheiros de dados arquivados, e poderá processar o ID do dispositivo, número do dispositivo, número de série, endereço MAC, registos de erros, códigos de erros, descrição de erros, ID do terminal, informação das aplicações instaladas, captura de ecrã da TV e informação de dispositivos de USB/Bluetooth conectados para avaliação do estado da TV e aplicações associadas e dados. Os registos de erros poderão conter informação, tal como histórico de programas da TV, lista de músicas tocadas, nome de utilizador e palavra-chave da aplicação, caso uma aplicação de terceiros utilizada para a transmissão não tenha encriptado tal informação. Mediante a sua solicitação, isto será realizado para diagnosticar problemas, modificar as definições do sistema ou para corrigir quaisquer problemas reportados. Mais, mediante solicitação, os membros do apoio ao cliente poderão resolver problemas, correr programas ou instalar/desinstalar software, reconfigurar e/ou realizar qualquer outro tipo de serviço ou suporte técnico na TV.\n\nQualquer acesso remoto apenas será realizado após ter ativado a função de suporte remoto ao selecionar a caixa de seleção na sua TV e irá terminar após a respetiva sessão.\n\nO fundamento jurídico para o respetivo tratamento dos seus dados pessoais é a execução de um contrato, nos termos do Artigo 6 (1) b) do RGPD.\n\n•	Serviço pós-venda: De acordo com a lei aplicável, o utilizador pode ter garantia ou direitos semelhantes para obter serviços pós-venda. A TCL Europe, 9-15 rue Rouget de L'Isle-92130 Issy- Les-Moulineaux, França, é responsável pelo tratamento de pedidos de garantia e outros pedidos de serviços pós-venda, bem como pelo tratamento dos seus dados pessoais associados. Ou seja, para fins de serviços pós-venda, a TCL Europe atua como responsável pelo tratamento, pelo que não somos responsáveis pelo respetivo tratamento dos seus dados pessoais.\n\nQuando o utilizador solicita o nosso serviço pós-venda, o seu nome, endereço de e-mail, número de telefone, solicitação de serviço e endereço postal incluídos na fatura podem ser necessários para fornecer o serviço pós-venda. As informações também podem ser recolhidas por meio dos parceiros de pós-venda dos nossos revendedores ou prestadores de serviços autorizados, se o utilizador ligar a fim de obter o serviço. O utilizador pode entrar em contacto com a TCL Europe sob os detalhes de contacto indicados na Seção 12 abaixo para obter mais informações sobre a proteção de dados pessoais referentes aos serviços pós-venda.\n\nO fundamento jurídico para o respetivo tratamento é a obrigação de cumprimento de obrigações jurídicas, nos termos do Artigo 6 (1) c) do RGPD.\n\n•	T- Channel: O T- Channel é a página principal para o uso da Smart TV no sistema operacional Linux (veja abaixo para o uso do sistema operacional Android) e permite selecionar determinado conteúdo.\n\nO fundamento jurídico para o tratamento dos seus dados pessoais necessários para a sua utilização do T- Channel r, é a execução de um contrato nos termos do artigo 6.º, n.º 1, alínea b), do RGPD.\n\nSujeito ao seu consentimento prévio, procederemos também à monitorização da utilização do T- Channel, ou seja:\n\n	Quando começar a utilizar o T- Channel, gravamos a hora de entrada e saída do T-Launcher.\n\n	Quando começar a ver um vídeo no T- Channel, gravamos o nome e o tempo de duração do vídeo (não aplicável ao Netflix, ao YouTube, ou a qualquer outro serviço fornecido por terceiros).\n\n	Ao entrar ou sair de uma página, registamos o tempo de permanência nessa página.\n\n	Quando mover o cursor de um local para outro ou entrar numa aplicação, registamos esse evento.\n\n	Ao instalar, remover ou atualizar aplicações, registamos esses eventos, incluindo o nome das mesmas.\n\nRecolhemos estas informações principalmente para análise de um grande conjunto de dados armazenados (big data analysis), de forma a melhorar os produtos e fornecer melhores serviços de conteúdo aos utilizadores.\n\nO fundamento jurídico para o tratamento dos seus dados pessoais, em conexão com a monitorização da utilização do T- Channel, é o seu consentimento, nos termos do Artigo 6 (1) a) do RGPD.\n\nSe o utilizador comprou uma Android TV e utiliza o sistema operacional Android da Google, os seus dados pessoais serão tratados pela Google, e não somos responsáveis por esse tratamento. Por favor consulte o aviso de privacidade da Google para obter informações sobre o tratamento relacionado com os seus dados e quais os seus respetivos direitos.\n\n•	T-Cast: O T-Cast permite que o utilizador controle a sua TV através do seu telefone, e compartilhe vídeos, músicas e imagens armazenadas no seu smartphone na TV. O T-Cast também permite que o utilizador espelhe o smartphone na sua TV.\n\nO descarregamento e utilização da aplicação são voluntários. Se o utilizador descarregar e usar a aplicação, trataremos o endereço MAC para calcular quantas versões de T-Cast foram utilizadas no mercado. Isto é necessário para poder oferecer o serviço. Se o utilizador usar a nossa funcionalidade de segundo ecrã, os controlos que ativar na aplicação e as configurações de país e idioma, lista de canais DTV, listas de canais favoritos, listas de agendamentos, ID do dispositivo, canal atual, versão do protocolo e endereço IP da sua Smart TV serão recolhidos e tratados por nós, nos nossos servidores. Os nossos servidores controlarão a sua Smart TV conforme indicado pelo utilizador na aplicação.\n\nO fundamento jurídico para o respetivo tratamento dos seus dados pessoais é a execução de um contrato, nos termos do Artigo 6 (1) b) do RGPD.\n\n•	Assistente TCL: O Assistente TCL é uma funcionalidade que permite que a sua TV se conecte a dispositivos compatíveis com o Amazon Alexa (tais como o Echo) para controlar esse dispositivo através da sua voz. Por forma a utilizar esta função, terá, em primeiro lugar, que registar a sua TV no site da Amazon através da utilização do código TCL, que pode ser encontrado na sua TV. De seguida poderá emitir instruções verbais para o dispositivo compatível com o Amazon Alexa ao pressionar o botão do microfone do controlo remoto da sua TV.\n\nSe utiliza o Assistente TCL, a sua TV irá recolher a sua voz e enviar para o Amazon Alexa, para efeitos de reconhecimento de voz e tratamento posterior. Os seus dados serão transferidos diretamente para a Amazon e nenhum dado será tratado ou armazenado localmente na sua TV.\n\nPor favor consulte a política de privacidade da Amazon para mais informações relativamente ao tratamento dos seus dados por parte da Amazon.\n\nO fundamento jurídico para o respetivo tratamento dos seus dados pessoais é a execução de um contrato, nos termos Artigo 6 (1) b) do RGPD.\n\n•	Alexa Voice Recognition (AVS): A AVS é uma funcionalidade que lhe permite controlar a TV através da sua voz. Por forma a utilizar esta função, terá, em primeiro lugar, que registar a sua TV no site da Amazon através do código de registo gerado pela Amazon. De seguida poderá emitir instruções verbais para a TV ao pressionar o botão do microfone do controlo remoto da sua TV.\n\nSe utilizar a AVS, a sua TV recolhe a sua voz e envia-a para a Amazon Alexa Cloud para reconhecimento de voz e tratamento posterior. Os seus dados serão diretamente transferidos para a Amazon e nenhum dado será armazenado localmente na sua TV. Por favor consulte a política de privacidade da Amazon para mais informações relativamente ao tratamento dos seus dados por parte da Amazon.\n\nQuando utiliza a AVS, será solicitado o nome da sua TV por forma a permitir-nos encontrar a TV que pretende controlar.\n\nO fundamento jurídico para o respetivo tratamento dos seus dados pessoais é a execução de um contrato, nos termos Artigo 6 (1) b) do RGPD.\n\nMais, iremos registar com que frequência e durante quanto tempo utilizou a AVS, bem como que função utilizou no âmbito da AVS. Recolhemos esta informação para melhorar os produtos e fornecer melhores serviços de conteúdo aos utilizadores.\n\nO fundamento jurídico para o respetivo tratamento dos seus dados pessoais é o nosso interesse legítimo, nos termos do Artigo 6 (1) f) do RGPD. Mediante solicitação iremos fornecer informações adicionais sobre o teste de proporcionalidade.\n\n•	Atualizações de Software: As atualizações de software fazem parte dos Serviços. Assim, cada vez que sua Smart TV for ligada, ela fornecerá o endereço IP, ID de Dispositivo, número do dispositivo, versão do software, tipo de cliente da sua Smart TV, ID do projeto (ou seja, arquivos de configuração), ID do usuário e número de série, para verificar se existem atualizações de software disponíveis, bem como disponibilizar e fornecer as atualizações de software apropriadas.\n\nO fundamento jurídico para o respetivo tratamento dos seus dados pessoais é a execução de um contrato, nos termos do Artigo 6 (1) b) do RGPD.\n\n•	Aplicação da lei: Podemos ser obrigados a fornecer dados às autoridades policiais competentes ou aos tribunais de justiça. Nessa possibilidade, apenas o faremos com sujeição a um instrumento legal vinculativo, como um mandado ou uma ordem judicial, que exige que cooperemos com as autoridades relevantes.\n\nO fundamento jurídico para o respetivo tratamento é a nossa obrigação de cumprimento de obrigações jurídicas, nos termos do Artigo 6 (1) c) do RGPD.\n\nA utilização dos Serviços através de pseudónimos é possível, a menos que serviços específicos exijam que o utilizador forneça o seu nome e / ou endereço de e-mail.\n\n5.	Privacidade e segurança de crianças menores de 16 anos\n\nEntendemos a importância de tomar precauções extra para proteger a privacidade e a segurança de crianças que utilizem os nossos Serviços. Crianças menores de 16 anos, ou idade mínima equivalente na jurisdição relevante, não estão autorizadas a fornecer as suas informações pessoais por meio do aparelho de TV ou quando ligarem para o serviço pós-venda, a menos que seus pais forneçam consentimento verificável.\n\nVisto que nunca recolhemos datas de nascimento de utilizadores, não podemos identificar a idade destes. Mas, se soubermos que recolhemos as informações pessoais de uma criança menor de 16 anos, ou idade mínima equivalente, dependendo da jurisdição, fora das circunstâncias acima, tomaremos medidas para excluir as informações o mais rápido possível.\n\n6.	Aplicações de Terceiros\n\nA sua Smart TV permite o uso de aplicações fornecidos por terceiros, como a Netflix, YouTube ou HbbTV (serviço de botão vermelho fornecido pelas emissoras de TV). O utilizador pode baixar as aplicações da loja de aplicações ou ativar aplicações de terceiros que já estão pré-instaladas no seu dispositivo. Nenhumas das aplicações de terceiros pré-instaladas no seu dispositivo recolhem dados pessoais sem o seu consentimento prévio. Por exemplo, a Netflix já está pré-instalada no dispositivo, mas apenas recolhe dados quando o utilizador entra na sua conta Netflix. O HbbTV apenas recolhe dados quando o utilizador consente com a recolha, ao pressionar o botão designado no seu comando.\n\nSe o utilizador ativar uma aplicação de terceiros, os seus dados pessoais poderão ser tratados pelo fornecedor da aplicação. Nós não somos responsáveis por tal tratamento; Por favor, consulte o aviso de privacidade da aplicação de terceiros para obter informações sobre o tratamento referente aos seus dados e quais os seus respetivos direitos.\n\n7.	Categorias de Destinatários\n\nPartilhamos os seus dados pessoais, recolhidos durante a utilização dos Serviços, com terceiros que sejam parceiros de conteúdo, mas apenas se o utilizador solicitar determinado conteúdo fornecido por tais parceiros de conteúdo, ou com fornecedores de serviços como responsáveis por tratamento de dados que nos auxiliam no fornecimento dos Serviços.\n\nPartilhamos os seus dados pessoais com terceiros apenas se formos obrigados a fazê-lo com base em requisitos legais (por exemplo, para tribunais ou autoridades de ação penal), se o utilizador tiver consentido com o respetivo compartilhamento ou se o compartilhamento for legal nos termos aplicáveis pela lei.\n\n8.	Países nos quais os seus dados serão tratados\n\nNós e / ou alguns dos destinatários dos seus dados pessoais enunciados acima, podemos estar localizados fora do Espaço Económico Europeu (por exemplo, na República Popular da China ou nos Estados Unidos da América). Assim, os seus dados pessoais podem ser tratados em países onde as leis de proteção de dados podem fornecer um nível diferente de proteção em comparação com as leis na sua jurisdição e que não são reconhecidos como fornecendo um nível adequado de proteção de dados pessoais de acordo com o RGPD. Os países que fornecem um nível adequado de proteção de dados, numa perspetiva da legislação europeia de proteção de dados, incluem Andorra, Argentina, Canadá, Suíça, Ilhas Faroé, Guernsey, Estado de Israel, Ilha de Man, Jersey, Nova Zelândia e a República Oriental do Uruguai. Os destinatários nos EUA podem ser parcialmente certificados pelo Escudo de Privacidade UE-EUA e, portanto, reconhecidos como fornecendo um nível adequado de proteção de dados do ponto de vista da legislação europeia de proteção de dados.\n\nQuando necessário, implementaremos salvaguardas apropriadas com relação às transferências de dados para destinatários fora da União Europeia que não forneçam um nível adequado de proteção de dados. Uma cópia da medida respetiva pode ser solicitada, contactando-nos, como indicado na Seção 12 abaixo.\n\n9.	Prazo de Conservação\n\nOs seus dados pessoais serão conservados pelo tempo necessário para fornecer os Serviços. Para a maioria dos dados, isto geralmente significa que conservaremos os seus dados por um mês. Para fins de diagnóstico remoto e serviços pós-venda, podemos conservar os seus dados até dez anos. Quando já não precisarmos de utilizar os seus dados pessoais para cumprir obrigações contratuais ou legais, removeremos os mesmos dos nossos sistemas, registos e / ou tomaremos os passos necessários para os tornar anónimos, para que não possa continuar a ser identificado a partir deles.\n\n10.	Os seus direitos\n\nDe acordo com a lei de proteção de dados aplicável, o utilizador pode ter o direito de: solicitar acesso aos seus dados pessoais, solicitar a retificação dos seus dados pessoais; solicitar o apagamento dos seus dados pessoais, solicitar a restrição de tratamento dos seus dados pessoais; solicitar a portabilidade de dados e fazer objeções ao tratamento dos seus dados pessoais. Note-se que estes direitos mencionados podem ser limitados pela lei nacional de proteção de dados aplicável. Para mais informações sobre estes direitos, por favor, consulte o Anexo: Os seus Direitos, que se encontra abaixo.\n\nO utilizador também tem o direito de apresentar uma queixa junto à autoridade de controlo de proteção de dados competente.\n\nPara exercer os seus direitos, entre em contacto connosco, conforme indicado na Seção 12 abaixo.\n\n11.	Alterações ao Aviso de Privacidade\n\nPara melhorar os nossos Serviços, podemos necessitar de efetuar alterações a este Aviso de Privacidade - por exemplo, pela implementação de novas tecnologias ou pela introdução de novos serviços. Reservamo-nos o direito de alterar ou complementar este Aviso de Privacidade a qualquer momento.\n\n12.	Informações de contacto \n\nSe tiver alguma dúvida sobre o Aviso de Privacidade ou desejar reclamar sobre o tratamento dos seus dados pessoais, entre em contacto connosco usando os seguintes detalhes de contacto:\n\nFormulário de contacto: www.tcl.eu/en/contact-us\n\nVersão: 2.0\n\nAnexo: Os seus direitos\n\na.	Direito de acesso: Pode ter o direito de obter, da nossa parte, a confirmação se os seus dados pessoais são ou não tratados e, onde for o caso, solicitar acesso aos dados pessoais. A informação de acesso inclui - nomeadamente - os motivos do tratamento, as categorias de dados pessoais em questão e os destinatários ou categorias de destinatários para os quais os dados pessoais foram ou serão divulgados. No entanto, isto não é um direito absoluto e os interesses de outros indivíduos podem restringir o seu direito de acesso. \n\nPode ter o direito de obter uma cópia dos dados pessoais que estão a ser tratados. Para cópias adicionais solicitadas por si, poderemos cobrar uma taxa razoável calculada com base nos custos administrativos.\n\nb.	Direito à retificação: Pode ter o direito de obter, da nossa parte, a retificação de dados pessoais inexatos que lhe digam respeito. Dependendo dos motivos do tratamento, pode ter direito a que os seus dados pessoais incompletos sejam completados, incluindo por meio de uma declaração adicional.\n\nc.	Direito ao apagamento (\"direito a ser esquecido\"): Sob certas circunstâncias, o titular pode ter o direito de obter do responsável do tratamento o apagamento dos seus dados e este tem a obrigação de apagar os dados pessoais em causa.\n\nd.	Direito à limitação do tratamento: Sob certas circunstâncias, o titular dos dados pode ter o direito de exigir a limitação do tratamento dos seus dados pessoais. Neste caso, os respetivos dados serão marcados e só poderão ser tratados por nós para determinados motivos.\n\ne.	Direito de portabilidade de dados: Sob certas circunstâncias, o titular dos dados pode ter o direito de receber os dados pessoais que nos forneceu, num formato estruturado, de uso corrente e de leitura automática, e o direito de transmitir esses dados a outro responsável pelo tratamento sem que o responsável a quem os dados pessoais foram fornecidos o possa impedir.\n\nf.	Direito de oposição:\n\nSob certas circunstâncias, o titular dos dados pode ter o direito de se opor a qualquer momento, por motivos relacionados com a sua situação particular, ou quando os dados pessoais forem tratados para efeitos de comercialização direta, para que paremos o tratamento dos seus dados pessoais.\n\nAdicionalmente, se os seus dados pessoais forem tratados para fins de comercialização direta, o titular dos dados tem o direito de se opor a qualquer momento ao tratamento de dados pessoais que lhe digam respeito para essa comercialização, incluindo a definição de perfis com base nessa comercialização direta. Nesse caso, os seus dados pessoais não continuarão a ser tratados por nós."];
var cookieNotice = ["\n\nRespeitamos a sua privacidade ao utilizar as Smart TVs e os nossos Serviços. Os cookies são utilizados por muitos sites e outros serviços da Internet, e a sua Smart TV aceita, armazena e transmite cookies para garantir que esses sites e serviços funcionam corretamente.\n\nNão usamos cookies ao fornecer-lhe os Serviços. No entanto, terceiros (por exemplo, fornecedores de aplicações) podem utilizar cookies quando usa a Smart TV para aceder aos seus serviços. Este Aviso de Cookies só pode fornecer informações limitadas sobre cookies que podem ser inseridas por terceiros. Para obter informações sobre os cookies realmente utilizados por terceiros e as suas funcionalidades, recomendamos a leitura dos respetivos avisos de cookies desses terceiros. Todavia, neste Aviso de Cookies, fornecemos uma descrição geral de quais cookies podem ser definidos na sua Smart TV e como pode geri-los.\n\n1.	O que é um cookie?\n\nCookies são pequenos ficheiros de texto que podem ser inseridos na sua Smart TV. Quando um site ou o serviço de botão vermelho de um canal de TV é acedido, o site ou serviço pode armazenar um cookie na Smart TV. Durante acessos posteriores, uma cookie inserida na sua Smart TV enviará informações para a parte que colocou o cookie. Os cookies são extremamente comuns e usados em vários sites e serviços. Cada cookie tipicamente contém o nome do domínio do qual proveio, a \"vida\" da cookie e um valor (geralmente um número único). Para uma explicação mais detalhada sobre o que são os cookies e como operam, visite www.allaboutcookies.org.\n\nOs cookies podem ser classificados como cookies funcionais e não funcionais. Os cookies funcionais são cookies estritamente necessários para lhe fornecer serviços. Cookies não funcionais são todos os outros cookies.\n\n2.	Sites de terceiros\n\nQuando visita sites ou serviços de terceiros por meio dos Serviços da sua Smart TV, é possível que tais sites ou serviços coloquem cookies na sua Smart TV, e que rastreiem e armazenem as suas interações nesses sites. Não solicitamos ou incentivamos tais atividades e não utilizaremos estas informações. Por favor, consulte o respetivo cookie e os avisos de privacidade de tais sites e serviços, de modo a obter mais informações sobre a utilização por terceiros dos referidos cookies.\n\n3.	Remoção de cookies\n\nO interface de utilizador da sua Smart TV permite apagar todos os cookies e outros armazenamentos locais do navegador da Smart TV. É altamente recomendável remover todos os cookies e configurações armazenadas localmente, antes de vender ou oferecer a sua Smart TV.\n\nVersão: 2.0"];
var privacyPolicy = ["Marque a(s) caixa(s) abaixo se deseja utilizar os nossos serviços Smart TV e relacionados. A utilização destes serviços requer o processamento dos seus dados pessoais conforme descrito no nosso Aviso de Privacidade: http://www.tcl.eu/en/","Ativar o serviço Smart TV, o armazenamento das definições do serviço e a autenticação automática da Smart TV. Se desmarcar a caixa, apenas terá acesso à TV normal e ao HDMI.","Ativar atualizações de software automáticas. Marque esta caixa para manter o seu produto atualizado com as mais recentes atualizações de software e para obter o melhor desempenho.","(As atualizações de software são importantes para o funcionamento adequado da sua TV, uma vez que oferecem novas funcionalidades, estabilidade e segurança. Por isso, recomendamos que marque a caixa.)","Marque a caixa abaixo se consente o processamento, por nossa parte, dos seus dados pessoais, também para as finalidades enumeradas abaixo. Para informação adicional sobre como processamos os seus dados pessoais, consulte o nosso Aviso de Privacidade: http://www.tcl.eu/en/","Autorizo o processamento dos meus dados pessoais (e.g. hora de acesso e de saída do T-Laucher) para a finalidade de melhorar os produtos da TCL e para a prestação de melhores serviços de conteúdo para Smart TV."];
var termsFirTitle = ["Termos e Condições","Política de privacidade","Aviso de cookie"];
var termsSecTitle = ["Leia e concorde com os termos e condições.","Leia e concorde com a política de privacidade.","Leia e concorde com a política de cookies."];
var tickall = "Marcar todos";
var tickremindWords = "Marque as caixas de verificação ou não poderá desfrutar do serviço Smart TV.";
var eWarrantyCardWords=["E-warranty Card","The date of activation:"];