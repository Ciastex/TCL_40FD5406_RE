var  all_country  = ["Australia","Austria","Belgium","Bulgaria","Croatia","Czech Republic","Denmark","Finland","França","Germany",
    				"Greece","Hungary","Italy","Luxembourg","Netherlands","Norway","Poland","Portugal","Romania","Russia",
    				"Serbia","Slovenia","Spain","Sweden","Switzerland","United Kingdom","New Zealand","Arab"/*Arab*/,"Estonia","Hebrew"/*Hebrew*/,
    				"Latvia","Slovakia","Turkey","Ireland","Japan","Filipinas","Thailand","Maldives","Uruguai","Peru",
					"Argentina","Chile","Venezuela","Equador","Costa Rica","Paraguai","Bolívia","Belize","Nicarágua","Guatemala",
    				"China","Taiwan","Brasil","Canada","Mexico","United States","South Korea","Romania","Vietnam"/*新添加的，底层结构体中没有*/,"Ukraine"/*新添加的，底层结构体中没有*/,
    				"Iran","Iraq"," ","Kazakhstan","Uzbekistan"," ","Kyrgyzstan","Algeria","Egypt","Tunisia",
    				"Tanzania","Kenya","Pakistan","Indonesia","Kuwait","Saudi Arabia","Qatar","Israel","Lebanon","bahrain",
    				"Angola","Congo","India","Turkmenistan","Colombia","Mongolia","Bangladesh","Nepal","Sri Lanka","North Korea",
   				 	"Moldova","Polynesia","EI Salvador"," ","Fiji","Liberia","Jordan","Myanmar","Ghana","Georgia",
    				"Armenia","Oman","yemen","Syria","Palestine","Afghanistan","Morocco","benin","IvoryCoast","Nigeria",
    				"Sudan","Ethiopia","Zambia"," ","South Africa","mozambique","Libya","Albania","Belarus","Iceland",
    				"Lithuania","Mauritius","Dubai","UAE","Tajikistan","Bengal","Bosnia Hercegovina","Cyprus","Kosovo","Macedonia",
    				"Malta","Montenegro","Cameroun","Singapore","Malaysia","NewCaledonia","Suriname","Jamaica","Curacao","Aruba",
					"Antigua & Barbuda","St Lucia","Barbados","St Vincent","St Kitts & Nevis","Grenada","Trinidad & Tobago","Guyana","Puerto Rico","Panama",
					/*15*/ "Dominica","Cuba","Honduras","Haiti","Cambodia","Zimbabwe","Dominican Republic","Bonaire","Somalia","Azerbaijan",
    				"Uganda","Rwanda","Guinea","Burundi","Abecásia","Andorra","Anguilla","Antarctica","American Samoa","Aland Island",
    				"Burkina-faso","Bermuda","Brunei","Caribbean Netherlands","Saint Barthélemy","Bahamas","Bhutan","Bouvet Island","Botswana","Cocos (Keeling) Islands",
    				"Central African Republic","Cape Verde","Djibouti","Eritrea","Western Sahara","Falkland Islands","Federated States of Micronesia","Faroe Islands","Gabon","Cook Islands",
    				"Gibraltar","Greenland","French Guiana","Guadeloupe","Equatorial Guinea","Guam","Guinea-Bissau","Heard Island and McDonald Islands","Isle of Man","British Indian Ocean Territory",
				/*20*/"Jersey","Kiribati","Comoros","Cayman Islands","Liechtenstein","Lesotho","Monaco","Saint Barthélemy","Madagascar","Mali",
    				"Macao","Martinique","Mauritania","Montserrat","Malawi","Namibia","Niger","Norfolk Island","Nauru","Papua New Guinea",
    				"Pitcairn Islands","Palau","Reunion Island","Solomon Islands","Seychelles","The Svalbard archipelago","Sierra Leone","San Marino","Senegal","South Sudan",
    				"Sao Tome & Principe","Swaziland","Turks & Caicos Islands","Togo","Chad","Tokelau","Timor-Leste (East Timor)","Tonga","Tuvalu","Vatican City State",
    				"British Virgin Islands","United States Virgin Islands","Wallis and Futuna","Samoa","Mayotte","Democratic Republic of the Congo","Guernsey","Gambia","Northern Mariana Islands","French Southern Territories",
				/*25*/"Niue","United States Minor Outlying Islands","Others"];
var all_language = ["Tcheco","*","Dinamarquês","*","*","Alemão","Inglês","Espanhol","Grego","Francês","Croata","*","Italiano","Húngaro","Holandês","Norueguês","Polonês","Português","Russo","Romeno","Esloveno","Sérvio","Finlandês","Sueco","Búlgaro","Eslovaco","Chinês","*","Gaélico","*","Galês","Arábico","Irlandês","Letão","*","Turco","Estoniano","Holandês"/*Netherlands*/,"Coreano","*","Hindi","*","*","Mandarim","Cantonês","Maori","Áudio Original"/*Qaa*/,"Indefinido"/*Undetermined*/,"*","Desconhecido","Indefinido","*","*","*","*","*","*","*","*","*","*","*","*","Albanês","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","Basco","*","*","*","*","*","*","*","*","*","Bósnio","*","*","*","*","*","*","Bielorrusso","*","*","Catalão","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","Galego","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","Islandês","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","Japonês","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","Lituano","*","*","*","*","*","*","*","Macedónio","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","Românico","*","*","*","*","*","*","*","Lapão","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","Teletexto","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","Ucraniano","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","Chinês Tradicional","*"];	
var offOn = ["Desl.","Lig."];	
var okCancel = ["OK","Cancelar"];	
var yesNo = ["Sim","Não"];	
var level = ["Desl.","Baixo","Alto","Médio"];	
var manualAuto = ["Manual","Automático"];	
var homeShop = ["Casa","Loja"];	
var picPreset = ["Padrão","Dinâmico","Natural","Filme","Pessoal"];	
var picColorTemp = ["Frio","Normal","Quente","Personaliz."];	
var pic3dNavig = ["Manual","Automático","Semi-auto"];	
var _3dOptions = ["Modo 3D","3D para 2D","Chave E-D","Profundidade do campo"];	
var pic3DMode = ["Desl.","2D para 3D","Lado a lado","Superior e inferior","Intercalar Linha"];	
var picEcoOptions = ["Economia de energia","Sensor de luz","Escurecimento local","Mix Dimmer"];	
var picGeoOptions = ["Geometria","Posição H.","Posição V.","Relógio","Fase"];	
var picAdWhiteBal = ["Ganho R","Ganho G","Ganho B","Compensar R","Compensar G","Compensar B"];	
var souOptions = ["Modo de Som","Balanço","Atraso de áudio","SRS TSHD","Auto Ajuste de Volume","Tipo de SPDIF","Atraso de SPDIF","Colocação da TV","Idioma de áudio","Tipo de som","Descrição de áudio","Reforço de graves","Dolby Digital Plus"];	
var souSpdifType = ["Automático"/*Dolby*/,"PCM","Desl."];	
var colorSpace = ["Automático","Nativo","Personaliz."];	
var souPresetPara = ["100Hz","500Hz","1.5KHz","5KHz","10KHz"];
var chOptions = ["Sintonia de Canal","Lista de canais","EPG","Editar Canais","Diagnóstico de canais","Timeshift","Legenda","Teletexto","Tipo de lista de canais","DTVi","PVR"];	
var chDiagOptions = ["Intensidade do sinal","Qualidade do sinal","Frequência (KHz)","ID do serviço","ID de rede","Nome da Rede"];	
var chScanOptions = ["País / Região","Modo de sintonizador","Pesquisa automática","Atualização automática","Exame manual analógico",["Instalação manual de cabo","Instalação manual de antena","Sintonização manual do satélite"],"Instalação da antena de satélite","Seleção da rede favorita","Limpar lista de canais","LCN"];
var favNetDes = "Favor selecionar sua rede favorita";	
var tuner = ["Cabo","Antena","Satélite"];	
var passError = "Senha incorreta.\nFavor digitar novamente!";	
var chType = ["Canais analógicos:","Canais digitais:"];	
var chScanStatus = ["Status: Buscando","Status: Busca efetuada","Status: Busca cancela","Status: Erro de Busca"];	
var chScanPara = ["Frequência (KHz)","Modulação","Taxa de transferência (Ksym/s)","ID de rede","Sistema","Ajuste fino","Intensidade do sinal","Qualidade do sinal","Modo Busca","Id do canal"];	
var chScanParaMHZ = ["Frequência (MHz)"];	
var chAtvManSys = ["Europa Ocidental","Europa Oriental","Reino Unido","França"];	
var modulation = ["16QAM","32QAM","64QAM","128QAM","256QAM","Automático"];	
var chCleanDes = "Limpar lista de canais?";	
var chDeletDes = "Excluir lista de canais?";	
var chOperator = ["Ziggo","UPC","Outros"];	
var chScanType = ["Digital e Analógico","Digital","Analógico"];	
var chScanMode = ["Cheio","Avançado","Rápido"];	
var bookingModes = ["Gravar","Lembrar"];	
var dayName = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];	
var monthName = ["Jan", "Fev","Mar","Abr","Maio","Jun","Jul","Ago","Set","Out","Nov","Dez"];	
var filter = ["Filtrar","Tipo","TipoLeg"];	
var chEpgFirstGenre = ["Filme","Notícias","Show","Esportes","Infantil","Música","Artes","Social","Educativo","Lazer","Especial"];	
var chEpgSecondGenre = [["Teatro","Detetive","Aventura","Ficção Cientifica","Comédia","Novela","Românico","Grave","Filme Adulto"," "," "," "],["Atualidades","Previsão do Tempo","Noticiário","Documentário","Debate"," "," "," "," "," "," "," "],["Show","Programa de Jogos","Programa de Variedades","Programa de Entrevistas"," "," "," "," "," "," "," "," "],["Esportes","Eventos Especiais","Programa de Esportes","Futebol","Tênis","Esportes Coletivos","Atletismo","Automobilismo","Esportes Aquáticos","Esportes de Inverno","Hipismo","Artes Marciais"],["Infantil","Entretenimento até 6 anos.","Entretenimento de 6 a 14 anos.","Entretenimento de 10 a 16 anos.","Informativos","Desenhos animados"," "," "," "," "," "," "," "],["Música","Rock","Grave","Popular","Jazz","Musical","Ballet"," "," "," "," "," "],["Artes","Artes Cênicas","Belas Artes","Religião","Cultura Popular","Literatura","Filme","Experimental","Transmissão","Novas Mídias","Revistas de Artes","Moda"],["Social","Revistas","Economia","Pessoas importantes"," "," "," "," "," "," "," "," "],["Educativo","Natureza","Tecnologia","Medicina","Países Estrangeiros","Ciências sociais","Ensino Superior","Idiomas"," "," "," "," "],["Passatempos de Lazer","Turismo","Artesanato","Automobilismo","Exercícios e Saúde","Culinária","Publicidade","Jardinagem"," "," "," "," "],["idioma original","Preto e branco","impublicável","Transmissão ao Vivo"," "," "," "," "," "," "," "," "]];	
var chEpgFirstGenreLA = ["Notícias","Esportes","Educativo","Novela","Minisséries","Série","Variedades","Reality show","Informações","Comédia","Infantil","Erótico","Filme","Sorteios, vendas na TV, preços","Debate/entrevista","Outros"];	
var chEpgSecondGenreLA = [["Notícias","Relatório","Documentário","Biografia","Outros","",""],    ["Esportes","Outros","","","","",""],["Educativo","Outros","","","","",""],["Novela","Outros","","","","",""],["Minisséries","Outros","","","","",""],["Série","Outros","","","","",""],["Auditório","Show","Musical","Bastidores","Feminino","Programa de Jogos","Outros"],["Reality show","Outros","","","","",""],["Culinária","Moda","País","Saúde","Viagem","Outros",""],["Comédia","Outros","","","","",""],["Infantil","Outros","","","","",""],["Erótico","Outros","","","","",""],["Filme","Outros","","","","",""],["Sorteio","Canal de vendas","Prêmios","Outros","","",""],["Debate","Entrevista","Outros","","","",""],["Desenho adulto","Interativo","Política","Religião","Serviços de engenharia","Outros",""]];	
var chOrganizer = ["Pular canal","Classificar canal","Editar canal","Excluir canal","Trocar canal","Inserir canal"];	
var chEditPara = ["Nome da Rede","Número do canal","Nome do Canal","Frequência","Sistema de cor","Sistema de som"];	
var chSatTitles = ["Tipo do satélite","Instalação da antena de satélite","Escolher satélite"];	
var chSatEidtOptions = ["Nome do satélite","Posição","Energia do LNB","Frequência LNB (MHz)","Entrada Diseqc","Som de 22KHz","Som intermitente","Frequência (KHz)","Taxa de transferência (Ksym/s)","Polarização","Intensidade do sinal","Qualidade do sinal","Status do satélite"];	
var chSatAutoPromt = [["Todos","Rede"],["Todos","Grátis"]];	
var chSatAutoScanOptions = ["Escolher satélite","Modo de exame","Canais"];	
var chSatPosition = ["A","B"];	
var chSatLNBFreq = ["Universal",];	
var chSatDiSEqCInput = ["Desativar","A","B","C","D"];	
var chSatTone22KHz = ["Automático","Lig.","Desl."];	
var chSatToneBurst = ["Desativar","Som intermitente A","Som intermitente B"];	
var chSatPolarization = ["Horizontal","Vertical"];	
var chSatSetupOptions = ["Tipo de antena","Sintonizador","Frequência de banda"];	
var chSatAntennaType = ["Cabo Único","Universal"];	
var chSatUserBands = ["Banda do usuário 1","Banda do usuário 2","Banda do usuário 3","Banda do usuário 4","Banda do usuário 5","Banda do usuário 6","Banda do usuário 7","Banda do usuário 8"];	
var chSatOthers = ["Transponder"];	
var chSatSetupOthers = ["Usuário definido"];	
var pleaseSelectSat = "Selecione o satélite.";	
var subOptions = ["Legenda","Idioma de legenda digital","2º idioma de legenda digital","Tipo de legenda"];	
var gingaOptions = ["Auto serviço de Dados","Lista de serviços de Dados"];	
var ttxOptionsCon = ["Idioma da pág. de decodificação","Idioma do tele-texto digital"];	
var subType = ["Normal","Deficiência auditiva"];	
var netIntf = ["Ethernet","Rede sem fio"];	
var netConnDes = ["testando conexão de rede.\nAguarde...","Teste Efetuado com Sucesso!","O Teste \"conexão de rede\" Falhou."];	
var netSsidError = "O tamanho válido da SSID é de 1 a 32 caracteres. Favor checar a SSID.";	
var netOthers = ["Senha"];	
var netWlessAutoDes = ["Verifique se o Código PIN é o mesmo que se refere ao seu Roteador. Pressione Ok!","Para estabelecer a conexão da internet em seu TV segure pressionado o botão WPS em seu roteador e pressione Ok em seu controle remoto."];	
var netConnRemind = ["Senha incorreta!","Conectando...","Conexão Efetuada / Endereço IP obtido!","Falha de conexão, tente novamente!","Buscando Pontos de Acesso. \nFavor aguardar","Nenhum Adaptador WiFi está conectado à TV!"];	
var netWireIpOptions = ["Configuração de IP","Tipo de endereço","Endereço IP","Máscara de sub-rede","Porta de Entrada padrão","DNS primário","DNS secundário"];	
var netWireConnRemind = ["Favor digitar um valor entre 0 e 255.","Conectado com êxito!","Digite um endereço válido.","Conectado com êxito!","Falha na conexão.","Conectando. Aguarde!","Digitar valor entre 1 e 223."];	
var netFlixOptions = ["Desativar","ESN","Versão do Netflix"];	
var netFlixDes = ["Deseja sair de sua conta Netflix?"," "/*Are you sure that you want to ESN?*/];	
var netUpdateTitle = "Atualiz. de software";	
var netUpdateDialogTitle = "Atualiz. de software";	
var netBGDownloadTitle = "Baixando";	
var netUpdateLoadingPrompt = ["Buscando atualização...","Baixando Software...","NÃO desligue o TV durante a atualização do software!",                            "A atualização de software obrigatória é baixada automaticamente em segundo plano!"];	
var netUpdatePrompt = ["A versão de Software mais recente foi instalada.","Nova versão XXXX do software foi encontrada. Deseja fazer o download? Isso pode levar alguns minutos.","Login inválido, verifique os dados e tente novamente!","Falha ao receber dados, tente mais tarde!","Análise da informação de atualização falhou; desligar/ligar com o controle remoto!","A conexão falhou, favor verificar a rede e tentar novamente!","Software baixado com sucesso. Iniciar atualização?","Dados perdidos! Falha no Download.","Falha na atualização do Software. Verifique o arquivo em seu Dispositivo Móvel.","Problemas de conexão. Favor verificar e conectar novamente!","Atualização falhou. Reinicie seu TV através do power no controle.","Falha no arquivo de Atualização, execute novamente o processo via Rede. ","O software foi baixado com sucesso em segundo plano. Deseja executar a atualização?"];	
var netUpdateButtonText = ["Baixar", "Atualização", "Depois", "Nunca", "OK","Continuar"];	
var autoDetectPrompt = ["Uma nova versão XXXX do software foi encontrada. Você deseja baixar agora? Isso pode demorar um pouco, dependendo da situação de sua rede.","Uma nova versão XXXX do software foi encontrada. Deseja atualizar agora?","O processo de atualização via rede não foi concluido. Atualize novamente.",                        "O download da nova versão XXXX do software não foi finalizado. Deseja continuar agora?",                        "Software baixado, você deseja atualizar agora?","Software baixado, deseja atualizar? Você pode  escolher atualizar depois."];
var sysOptions = ["E-Manual","Menu de idiomas","Relógio","Bloquear","Nomear Entradas","Atualiz. de software","Localidade","Modo HbbTV","Cookies","Interface comum","Configurações Avançadas","Restaurar Modo de Fábrica","Indicador LED","Ligar instantaneamente","Auto shop mode","Área","Modo demonstração"];
var sysResetDes = "As configurações serão restauradas para o modo Padrão. Deseja executar a ação?";	
var sysMenuLangOptions = ["Idioma","Idioma de áudio preferido","2º idioma de áudio preferido"];	
var sysTimerOptions = ["Fuso horário","Nome da região","Relógio","Temporizador","Modo de espera autom.", "Região do país"];	
var sysTimeZone = ["De acordo com a transmissão","GMT +0:00","GMT +1:00","GMT +2:00","GMT +3:00","GMT +3:30","GMT +4:00","GMT +4:30","GMT +5:00","GMT +5:30","GMT +5:45","GMT +6:00","GMT +6:30","GMT +7:00","GMT +8:00","GMT +9:00","GMT +9:30","GMT +10:00","GMT +11:00","GMT +12:00","GMT +12:45","GMT +13:00","GMT -12:00","GMT -11:00","GMT -10:00","GMT -9:00","GMT -8:00","GMT -7:00","GMT -6:00","GMT -5:00","GMT -4:00","GMT -3:30","GMT -3:00","GMT -2:00","GMT -1:00"];	
var sysTimeZoneLA = ["Como a emissora","Região1","Região2","Região3","Região4","Região5"];	
var sysSleepTimer = ["Desl.","10 min.","20 min.","30 min.","40 min.","50 min.","60 min.","90 min.","120 min."];	
var sysStandby = ["Desl.","4 horas","6 horas","8 horas"];	
var sysRegionName = ["Madri","Ilhas Canárias"];	
var sysClockOptions = ["Auto Sincronização.","Data","Tempo","Ligar timer","Relógio","Canal de ligar","Desligar timer","Relógio","Horário de verão"];	
var sysTimer = ["Desl.","Diário","Uma vez"];	
var sysInputSet = ["Sem rótulo","DVD","Blu-ray","HDD","DVDR","Gravar HD","Jogo","VCR","PC","STB digital","STB digital HD","Câmera","Gravador","Outros"];	
var sysAvVideoInput = ["Automático","RGB_CVBS","RGB","CVBS","S-Vídeo"];	
var sysUpdate = ["Via USB","Via rede","Via canal"];	
var sysUpdateDes = [" "," "," ","Não consegue encontrar um novo software no ar!","Uma nova versão XXXX do software foi encontrada. Deseja atualizar agora?","Dispositivo USB não encontrado, favor inserir.","Falha na atualização do Software. Verifique o arquivo em seu Dispositivo Móvel.","O processo de atualização pode levar alguns minutos, em seguida o TV será reinicializado. Atualizando...","Software atualizado com sucesso.\nSeu TV será reinicializado.","Uma nova versão XXXX do software foi encontrada. Você deseja baixar agora? Isso pode demorar um pouco, dependendo da situação de sua rede.","Baixando","Software baixado com sucesso. Você deseja iniciar a atualização de sua TV?","Falha na Atualização.","Buscando arquivos de atualização.","Software atualizado com sucesso.\nReinicie seu TV."];	
var sysProductInfo = ["Versão atual","Nome do produto","Nome do fabricante","Nome do chassi"];	
var sysCiDes = ["Nenhum cartão CI encontrado."];	
var sysAdOptions = ["Registro DivX(R)","Cancelamento DivX(R)","T-Link","Erro de autorização","Confirmação de cancelamento","Confirmação de locação","Aluguel expirado"];	
var sysRegistDes = ["Registre seu aparelho para reproduzir vídeos DivX(R) protegidos.","Código de registro:","Registre em http://vod.divx.com"];	
var sysDregistDes = ["Código de cancelamento:","Cancele em http://vod.divx.com","Continuar com o registro?"];	
var mediaAuthorization = ["Seu aparelho não está autorizado a reproduzir vídeos DivX(R) protegidos."];	
var deregistrationConfrimation = ["Seu aparelho já está registrado.","Você realmente deseja cancelar?"];	
var rentalConfirmation = "A locação de DivX(R) usou XXXX de YYYY exibições. Deseja Continuar?";	
var rentalExpired = "A locação de DivX(R) usou XXXX de YYYY exibições. A locação de DivX expirou.";	
var parentalRatingLA = ["Classificação parental","Idade","Conteúdo"];	
var ageRatingOptions = ["L","10","12","14","16","18"];	
var contentRatingOptions = ["Desl.","Drogas","Violência","Sexo","Violência e Drogas","Sexo e Drogas","Violência e Sexo","Violência, Sexo e Drogas"];
var parentalRatingNA		= ["***","***","***","***","***","***","***","***"];
var parentalRatingOptionUS		= ["***","***","***"];
var sysTVRatingUS=["***","***","***","***","***"];
var sysMPAAUS=["***","***","***","***","***","***"];
var parentalRatingOptionCanada		= ["***","***","***"];
var sysCanadaEng=["***","***","***","***","***","***"];
var sysCanadaFre=["***","***","***","***","***",""];
var sysResetRRT=["***"];
var sysLockOptions = ["Bloqueio de canal","Bloqueio por intervalo de tempo","Classificação parental","Bloqueio de entrada","Bloqueio do painel frontal","Bloqueio de instalação","Alterar senha","Volume Máximo","Apagar tudo"];
var sysTimeIntervals = ["Tipo de bloqueio","Tempo inicial","Tempo Final"];	
var sysRatingOptions = ["Nenhum","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","Classificação ADULTO (Espanha)"];	
var changePass = ["Alterar senha","Nova senha","Confirme a senha"];	
var changePassDes = ["Senha incorreta.\nFavor digitar novamente!","Senha não corresponde.\nTente de novo.","Senha definida com sucesso.","Este código é muito simples para ser definido como senha.\nFavor digitar \nnovamente!"];	
var sysPowerOnChOptions = "Modo de seleção";	
var sysPowerOnCh = ["Último status","Seleção do usuário"];	
var netWlessSecu = ["Aberto","WEP","WPA/WPA2-PSK"];	
var netWlessSecu2 = ["Nenhum","WEP","WPA-PSK","WPA2-PSK","WPA/WPA2-PSK","Não suportado"];	
var netWlessSecu3 = ["Nenhum","WEP","WPA-PSK(TKIP)","WPA-PSK(AES)","WPA2-PSK(TKIP)","WPA2-PSK(AES)","WPA/WPA2-PSK(AUTO)","Não suportado"];	
var netOptions = ["Conexão de internet","Interface","Configurações de WiFi","Configurações de IP","Informações","Teste de Conexão","DLNA","TV Remote","Ajustes Netflix","Wireless Display","Tipo de endereço","Endereço IP","Máscara de sub-rede","Porta de Entrada padrão","DNS primário","DNS secundário","SSID","BSSID","Insira o SSID:","ID do usuário"];
var chEditDes = ["Número de canal duplicado!","Pressione o Botão Vermelho para excluir o carácter atual!","Canal inexistente."];	
var chEpgNoProgram = "Informações de Programação ausente.";	
var chEpgWords = ["Guia de Programa","Nenhum dado de programa.","Canal Bloqueado.","Nenhum detalhe de programa.","Nenhum título de programa."];	
var chEpgBooking = ["Informação de Programação", "Número do canal","Data Inicial","Tempo inicial","Tempo Final","Tipo de repetição","Tipo de programação","Adicionar programação","Trocar","Alterar","Adicionar/Modificar"];	
var epgHotKey = ["Dia Anterior","Próximo Dia","Filtrar","Lista de programação","Adicionar programação"];	
var chEpgBookRemind = ["Horário de Início incompatível.","Horário de fim incompatível","Programação duplicada","Salvo com sucesso.","Excluído com sucesso."];	
var chSchePara = ["Lista de programação","Tempo inicial","Data Inicial","Título do Programa","Nome do Canal","Duração","Repetir","Programação","Editar","Excluir"];	
var dateTimer = ["Uma vez","Diário","Semanal"];	
var scheduleDeleteReminds = "Você deseja excluir esta programação?";	
var scheduleNoLists = "Lista de Programação Inexistente.Pressionar o botão \"Vermelho\" para adicionar.";	
var chListWords = ["Lista de Canais","Selecionar lista","Modo de Sintonia.","Incluir Favorito","Remover","Selecionar lista de canais","Selecionar o modo de sintonia","Trocar"];	
var chListType = ["Todos","Digital","Analógico","Rádio","Grátis","Favoritos"];	
var chAutoScanOptions = ["Selecionar operadora","Tipo de canal","Pesquisa automática"];	
var souSoundType = ["Inválido","Mono","Mono","Estéreo","Estéreo","SAP","SAP","Dual1","Dual2","Dual2","Nicam Mono","Nicam Estéreo","Nicam dual1","Nicam dual2","Nicam dual","Mono","LL","RR","LR"];	
var souPreset = ["Música","Filme","Voz","Padrão","Pessoal"];	
var picAdRgbMode = ["Desl.","Somente Vermelho","Somente Verde","Somente Azul"];	
var picAdOptions = ["Redução de ruídos","Red. De Ruídos MPEG","Modo RGB","Contraste dinâmico","Nitidez do LED Motion","Tom de pele","Modo de filme","Modo de jogo","Temperatura de Cor","Balanço de branco","Congelar imagem","Esticar imagem","Imagem cortada","Gama","Modo HDMI","Balanço de branco 10P","Expansor de cor","Redução de distorção","Redução de vibração","Espaço de cor","Nitidez de movimento"];	
var pic10Pwhite = ["Intervalo","Vermelho","Verde","Azul","Reinicializar","Cor","Amarelo","Ciano","Magenta"];	
var picMotionClarity = ["Modo de movimento","Interpolação de movimento","Nitidez do LED Motion","Redução de distorção","Redução de vibração","Reinicializar"];	
var picMotionMode = ["Filme","Suave","Limpar","Esporte","Usuário"];	
var picResetDes = "As configurações serão restauradas para o modo Padrão. Deseja executar a ação?";	
var pic10PReset = "Restaurar configurações do Balanço de Branco 10p para o modo Padrão?";	
var picMotionReset = "Retaurar configurações de Nitidez de Movimento para o modo Padrão?";	
var picColorSpaceReset = "Restaurar configurações do Espaço de Cor para o modo Padrão?";	
var picOptions = ["Modo de Imagem","Luz de fundo","Brilho","Contraste","Saturação","Matiz","Nitidez","Temperatura de Cor","Modo de tela","Formato Automático","Reforço para esporte","3D","Navegação 3D","Configurações de ECO","Geometria","Configurações Avançadas","Reinicializar imagem","Micro Dimming"];	
var picSize = ["Formato 16:9", "Formato 4:3", "Formato 14:9", "Cinema","Zoom 16:9", "Zoom até 16:9","Zoom 14:9","Zoom Alongado","Zoom Amplo","Zoom 2","Zoom Amplo 2","Adequar Tela Nativa","Ponto a ponto","Original","Panorama"];	
var others = ["Volume","Transmissão","Senha","Status","Salvar","Trocar","Iniciar","Sair","Pesquisa","Excluir","Nenhum","Automático","Busca","Segurança","Conectar","Atualizar","Tentar novamente","Parar","Config.","Canais","Editar","Inserir","Sinal","Finalizar","Estéreo","Áudio","Fonte","Sem áudio","Dicas","Reinicializar","Usuário","Config.","Armazenar","Usuário","Fechar teclado","Modo de segurança","Todo dia","Lista PVR"];	
var direction = ["Esquerda","Direita","Cima","Baixo"];	
var audioType = ["MPEG","DOLBY AUDIO"/*"AC3"*/,"MPEG4","AAC", "DOLBY AUDIO"/*"AC3P"*/,"AACP","MPEG_AD","AC3_AD","AC3P_AD","AACP_AD"," "," "," "," "," "," ","HE-AAC", "AAC_V2", "AAC_V4", "HE-AAC_V2","HE-AAC_V4","Desconhecido"];
var soundChannels = ["Desconhecido","Mono","Sub","Mono Duplo","Estéreo","Sub Estéreo","Surround Dolby Estéreo","2Ch Surround","Surround","3.0Ch","4.0Ch","5.0Ch","LFE Mono","LFE Mono Duplo","LFE Estéreo","LFE 2Ch Surround","LFE Surround","3.1Ch","4.1Ch","5.1Ch","7.1Ch","Estéreo Joint","Fmrdo Mono","Fmrdo Estéreo","Fm Mono Nicam Mono","Fm Mono Nicam Estéreo","Fm Mono Nicam Duplo","Esquerda","Direita","Outros"];	
var prompts = ["Ajuste a definição de imagem que melhor se adapte ao seu ambiente de visualização.","Ajuste os níveis de brilho. Quanto mais próximo de 100, mais brilhante.","Ajuste os níveis de contraste. Quanto mais próximo de 100, maior a diferença entre escuro e claro da imagem.","Ajuste os níveis de saturação. Quanto mais próximo de 100, mais forte a cor.","Ajuste os níveis de nitidez. Quanto mais próximo de 100, mais nitidez terão os detalhes.","Ajuste os níveis de luz de fundo. Quanto mais próximo de 100, mais brilhante a tela.","Ajuste os níveis de matiz. Esta definição modifica as tonalidades das cores.","Selecione o formato de imagem que melhor combina com o programa quevocê está assistindo.","Configure as opções de economia de energia.","Ajuste as configurações da tela quando conectado a um PC.","Selecione mais configurações avançadas de imagens.","Restaure as configurações de imagem para o modo padrão.","Selecione o modo de som de acordo com sua preferência pessoal.","Ajuste o balanço de volume entre o canal esquerdo e o canal direito.","O SRS (Sound Retrieval System) TruSurround HD proporciona um desempenho de som em Alta Qualidade em baixas e altas frequências.","DIF (Digital Interface Format) conecta a saída de som digital da TV ao equipamento de áudio em seu Home Theater.","Selecione um idioma de áudio de acordo com sua preferência pessoal.","Permite que Deficientes Visuais apreciem programas de televisão.","Teste a imagem, o som e o sinal de sua TV.","Selecione o tipo de lista de canais de acordo com o sinal de sua TV.","Selecione o idioma da legenda a ser exibida nos programas de seu TV.","Veja os textos e imagens do canal atual.","Desfrute de música, fotos e vídeos via rede doméstica a partir de outros dispositivos, como um PC.","Exiba os conteúdos de seu smartphone no TV e use o smartphone como um controle remoto.","Exiba o conteúdo de um dispositivo Android compatível com Miracast na tela de sua TV.","Coloque um bloqueio em sua TV.","Selecione um nome para o seu dispositivo.","Selecione o seu ambiente de visualização.","Restaure as Configurações do Sistema para o padrão.","Desligue o modo esportivo para ter mais opções.","Aprimorar contraste ambiente","Modo especial para jogos esportivos","Aproveite mais funções CEC."];
var initialTitle = ["Bem-vindo","Configuração Inicial"];	
var initialPrompt = ["Faça agora a sua Configuração Inicial. Um Mundo de Experiências Fantásicas esperam por você!","Selecione o idioma:","Selecione país/região:","Selecione o local:","Selecione o tipo de conexão de rede de sua preferência:","Selecione o modo de conexão de rede por cabo:","Falha ao conectar a xxxxxxxxx! Conecte o dispositivo de acordo com o Diagrama a seguir ou selecione Direita para restaurar o modo padrão.","Conectado a xxxxxxxxx! Favor selecionar Direita para continuar.","1) A sua TV já pode ter um adaptador WiFi embutido\n 2)Ou, se um adaptador WiFi USB for fornecido, conecte-o ao seu televisor.  Em seguida, selecione o modo de conexão de rede WiFi","Buscando. Aguarde…","Nenhum Adaptador WiFi está conectado à TV!","Favor assegurar que o seguinte código PIN está instalado no Ponto de Acesso antes de clicar no botão 'Próximo' abaixo.","Favor pressionar o botão no Ponto de Acesso dentro de 120 segundos antes de pressionar Direita!","WPS (Configuração protegida de WiFi)","PIN (Número de identificação pessoal))","PBC (Configuração por pressão de botão)","Os conteúdos a seguir só podem ser acessados com uma conexão de rede. Você deseja pular a Configuração de Rede?","Novas atualizações de software já estão disponíveis para download.","Mantenha o Software de seu TV atualizado e tenha acesso a mais fantástica experiência de navegação e serviços.","Você não terá acesso a mais atual experiência de navegação. Deseja realmente pular a Atualização de Software?","Pressione > para Continuar.","Não desligue seu TV durante as atualizações, evite problemas indesejados.","Caso não deseja atualizar seu TV, selecione a opção NÃO.","Atualizando... Favor aguardar!","Você também pode atualizar o software em MENU > SUPORTE > ATUALIZAÇÃO DE SOFTWARE.","O país selecionado pede configuração de senha. \nFavor defina uma senha para seu TV e confirme.","Este código é muito simples para ser definido como senha.\nFavor digitar novamente!"," Parabéns! Você concluiu as configurações Iniciais, para qualquer alteração de sua preferência, acesse o menu do seu TV.","Favor selecionar o modo de segurança:","Favor selecionar o modo de conexão de rede WiFi:","Rede","Selecione sua grande área:","Selecione sua região:","Selecione sua cidade:"];
var initNetCabAndDonRe = ["Nenhum cabo de rede encontrado, favor conectar!","Adaptador WiFi embutido ou adaptador WiFI USB são produtos Não fornecidos."];	
var initChPrompt = ["Instalação de Canais do TV","Favor selecionar o tipo de busca por Antena.","Processando auto sintonia...","Os seguintes canais de Antena foram encontrados:","Favor selecionar o tipo de busca por Cabo.","Favor selecionar uma operadora da lista a seguir.","Favor configurar as informações de busca.","Os seguintes canais a Cabo foram encontrados:","Favor selecionar uma operadora da lista a seguir.","Favor selecionar os satélites encontrados ou edite o satélite selecionado.","Favor configurar os parâmetros do satélite","Os seguintes canais foram encontrados, e a Sintonia de canal também pode ser realizado novamente em MENU > CANAL > SINTONIA DE CANAL"];	
var initClockPrompt = ["Obtenha a hora fornecida pela rede!","Favor configurar a Data e a Hora:"];	
var initialOptions = ["Ambiente","Configuração da Rede","Atualiz. de software","Instalação de Canal","Relógio"];	
var initialHotkeys = ["Retornar","Selecionar","Próximo.","Eu aceito"];
var initLocations = ["Casa","Loja","Loja com demo"];	
var initNets = ["Com cabo","Rede sem fio","Eu não tenho uma conexão de rede"];	
var initWireManuals = ["Endereço IP","Máscara de sub-rede","Porta de Entrada padrão","DNS primário","DNS secundário"];	
var initSoftUpdates = ["Atualizar agora","Atualizar mais tarde"];	
var initChannelIns = ["Continuar","Eu não desejo Sintonizar canais"];	
var initChScanTypes = ["Digital e Analógico","Digital","Analógico","Eu não desejo verificar"];	
var initChDvbts = ["Canais de antena ATV:","Canais de antena DTV:"];	
var initChDvbcs = ["Canais de cabo ATV:","Canais de cabo DTV:"];	
var initChDvbss = ["Canais de satélite:"];	
var initChDvbSOther = ["Eu não desejo verificar satélite"];	
var initEndConnectedStatus = ["Desconectado","Wifi conectado","Cabo Conectado"];	
var initEndInstallations = "XXXX canais instalados";	
var initEndUpdate = ["Atualizado"];	
var audioScenes = ["Em mesa","Na parede"];	
var screenSavers = ["Nenhum canal. Pressione OK e pesquise!",
					"Sem sinal!",
					"Codificado",
					"Somente dados",
					"Programa de áudio",
					"Sem Áudio e Vídeo",
					"Indisponível",
					"Não há teletexto",
					"Nenhum dado de programa.",
					"Programa Bloqueado!",
					"Programa Bloqueado!\nEntre sua senha para Desbloqueio.",
					"Sem detalhes de programa.",
					"Programa impróprio para menores.\nEntre sua Senha para Desbloqueio.",
					"Entrada Bloqueada!",
					"Canal Bloqueado! Entre com a senha para Desbloquear.",
					"Entrada Bloqueada! \nPressione OK e digite a senha.",
					"Não suportado!",
					"Serviço Indisponível",
					"Entrada Bloqueada!",
					"Nenhum título de programa.",
					"Indisponível",
					"Sem Legendas"
					];
var channelNumberOverPromt = ["The number of search programs has exceeded,you can delete some programs and then retry!"];
var chBookingPromt = ["O canal atual tem uma gravação programada; o TV iniciará a gravação.","Há uma gravação programada.\n Mudar para XXXX para gravar.","O canal atual tem um lembrete.","Um lembrete de programação foi encontrado.\n Mudar para XXXX"];	
var timeUnit = ["Seg","Mín."];	
var ciPromt = ["Os dados de rede foram alterados. Para atualizar, você pode executar uma verificação de atualização.",];	
var othersPromt = ["Aguarde…",];	
var menuOptions = ["Imagem","Som","Canal","Smart TV","Rede","Sistema","Suporte"];	
var optionOptions = ["Modo de Imagem","Modo de Som","Congelar imagem","T-Link","Retroceder exibição","PVR","Lista de programação","Config.","demo"];	
var optionTLinkPromt = [["Ligar automaticamente","Modo de espera autom.","Menu do guia"],["ligar","standby","Volume do Amplificador"]];	
var powerPromt = ["A TV desligará em breve!\n Pressionar qualquer tecla para cancelar o Desligamento."];	
var ttxLanguage = ["Europa Ocidental","Europa Oriental","Russo","Árabe/Hebraico","Persa","Arábico","Bielorrusso","Grego","Turco"];	
var ttxOptions = ["Revelar","Repetir sub-páginas","Idioma","Página de alarme","Últimas Notícias."];	
var weekday = ["Domingo","Segunda-feira","Terça","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];	
var lcnConfflict = "Este programa tem problemas de recepção. Existe uma outra versão disponível no canal %d";	
var inShopMode = "Seu TV está em modo Loja. Acesse Menu > Sistema > Localidade  para alterar esta configuração.";	
var nitRefresh = "Os dados de rede foram alterados. Deseja executar uma verificação de atualização?";	
var picHDMIMode = ["Automático","Gráficos","Vídeo"];	
var glassRemind = ["Favor emparelhar seus óculos 3D com a TV\n(Pressione e mantenha a tecla LIGAR nos óculos 3D).","Seus óculos 3D estão conectados à TV","*"];	
var pvrRemind = ["Não retire a unidade USB ou interrompa a alimentação"];	
var pvrConName = ["PVR","Informações do programa:",["Obs.: Para gravar um canal HD, selecione a unidade USB (de velocidade >5,0 MB/seg); para gravar canal SD, selecione a unidade USB (de velocidade >3,0 MB/seg).","O vídeo gravado foi salvo na pasta \"pvr\"."],"Parar","Gravar","Hora","Minuto","Duração","Dicas","Use as setas para definir o tempo de gravação."];	
var pvrDisRemind = "Para Gravar, conecte seu dispositivo a unidade USB.";	
var pvrRemindWords = ["Você deseja sair?","Deseja acessar os arquivos gravados? Sua gravação será interrompida","Unidade USB desconectada.","Espaço Livre Insuficiente.","Nenhum arquivo gravado. Iniciar a gravação.","PVR não é suportado para Canal Codificado.","Dispositivo não acessível","Salvo com sucesso.","Deseja alterar o modo de ENTRADA? Sua gravação será interrompida.","A TV terminará a gravação atual. Deseja sair?","A gravação PVR precisa de sinal de TV para funcionar corretamente, favor verificar o seu sinal."];	
var pvrChangeCh = ["Deseja mudar de canal?","Deseja parar o processo de gravação e mudar de canal?"];	
var pvrChangeToPIN8 = ["Deseja mudar a fonte para o dispositivo conectado à entrada SCART?",    "Deseja parar o processo de gravação e mudar a fonte para o dispositivo conectado à entrada SCART?"];	
var pvrChangeToCEC = ["Deseja mudar a fonte para o dispositivo conectado à uma entrada HDMI?",   "Deseja parar o processo de gravação e mudar a fonte para o dispositivo conectado à uma entrada HDMI?"];	
var pvrGuideJump = ["Deseja entrar no EPG (Guia Eletrônico de Programação)?","Deseja parar o processo de gravação e entrar no EPG (Guia Eletrônico de Programação)?"];	
var pvrMediaJump = ["Deseja entrar em Mídia?","Você deseja parar o processo de gravação e entrar em Mídia?"];	
var timeshiftExtra = ["Deseja parar o retrocesso de exibição e mudar de canal?","Deseja parar o retrocesso de exibição e mudar a fonte para o dispositivo conectado à entrada SCART?","Deseja parar o retrocesso de exibição e mudar a fonte para o dispositivo conectado à entrada HDMI?","Retrocesso de exibição não é suportado para Canal Codificado.","Deseja parar o retrocesso de exibição e entrar em EPG (Guia Eletrônico de Programação)?","Você deseja parar o retrocesso de exibição e entrar em Mídia?","Deseja parar o retrocesso de exibição e mudar a fonte de entrada?","Para Gravar, conecte seu dispositivo a unidade USB.","Espaço Insuficiente na Unidade USB.","Deseja sair? A TV terminará o retrocesso de exibição atual."];	
var timeshiftStatus = ["Retrocesso Rápido","Parar","Reprod.","Pausar","Avanço Rápido"];	
var pvrPowerOffRemind = ["Gravação em Standby","standby","O TV está gravando, deseja continuar a ação mesmo em modo de standby?"];	
var timeshiftInitTitle = "Configuração da unidade USB";	
var timeshiftInitReminds = ["Este assistente é usado para configurar a unidade USB para retrocesso de exibição. Favor selecionar o modo de configuração.", "Para um melhor desempenho, recomendamos formatar a unidade USB. Isto irá apagar todos os dados.", "Favor selecionar o tamanho de arquivo para o retrocesso de exibição.", "Formatando...", "Espaço Livre Insuficiente.", "Criando arquivo para o retrocesso de exibição.", "Teste de velocidade", "A velocidade da unidade USB é muito lenta (< %f MB/seg) para o recurso de retrocesso exibicional!", "A unidade USB está pronta para o retrocesso de exibição. Para um melhor desempenho, recomendamos troca-lo (para velocidade > %f MB/seg).", "A unidade USB está pronta para o retrocesso de exibição."];	
var timeshiftInitButtons = ["Formato","Pular","Cancelar","OK","Finalizar","Sair"];	
var timeshiftInitOther = ["Velocidade da unidade USB:","MB/seg"];	
var selectChoice = "Deseja restaurar os ajustes de bloqueio?";	
var chAtvStore = "Armazenar como XXXX";	
var chEpgFirstGenreUK = ["Filme","Notícias e fatos","Entretenimento","Esporte","Infantil","Educativo","Estilo de vida","Teatro"];	
var homePageTitleList = ["APLICATIVOS","TV","VÍDEOS","Página inicial"];	
var homePageFavAndAllName = ["Aplicativos Favoritos","Todos Aplicativos"];	
var homePageBackUp = ["E-Manual","GuideOn"];	
var homePageRemind = ["Funções completas somente estarão disponíveis após efetuado a conexão de rede.","O TV não possui nenhum canal Sintonizado. Os programas estarão disponíveis após a verificação e Sintonização do canal.","Nenhum programa","Buscar canais agora?"];	
var homePageHistory = ["Histórico"];	
var miracastTitle = ["Wireless Display","Memória TCL (Triple-Level Cell)"];
var miracastRemind = ["O Wireless Display permite que você espelhe a tela de seu smartphone ou tablet em seu TV, via wireless (sem conexão de cabos). Isto permite ver simultaneamente o que está mostrando na tela de seu smartphone ou tablet  direto no TV. Por exemplo, você pode abrir um vídeo em seu smartphone ou tablet e e exibilo (imagem e áudio) em seu TV, ou até mesmo utiliza-lo como controlador de jogos ou conteúdos exibidos na tela de seu TV.","O Wireless display está pronto para pareamento, inicie seu aplicativo para o compartilhamento de tela entre seu dispositivo e o TV.","Conectando. Aguarde!","A conexão falhou!","Dispositivo USB não encontrado."];
var homePageLittleWin = ["Config.","Mídia","Canais favoritos","Smart TV","EPG"];
var hbbtvStopRemind = ["Você deseja parar a reprodução?"];	
var colorSystem = ["Automático","PAL","SECAM","NTSC"];	
var deviceTitleTipsText = "Pressione ≡ para mais informações";	
var emptyListInfo = "Dispositivo USB não encontrado.";	
var optionVideoListArray_1 = ["Modo de Imagem", "Modo de Som", "Modo de reprodução", "Modo de tela", "Modo 3D",   "Chave E-D", "Profundidade do campo", "Legenda", "Trilha de som", "Título", "Capítulo", "Inform."];	
var optionVideoListArray_2 = ["Modo de Imagem", "Modo de Som", "Modo de reprodução", "Modo de tela",   "Legenda", "Trilha de som", "Título", "Capítulo", "Inform."];	
var bottomTipsText = ["Reprod./Pausar", "Retrocesso Rápido", "Avanço Rápido", "Lista de reprod.", "Config."];	
var picturePresetArray = ["Padrão", "Dinâmico", "Natural", "Filme", "Pessoal"];	
var videoPlayModeArray = ["Repetir tudo", "Repetir uma vez", "Normal"];	
var screenModeHDArray = ["16:9", "4:3", "Cinerama", "Zoom Amplo", "Zoom 2", "Zoom Amplo 2", "Zoom Alongado", "Automático"];	
var screenModeSDArray = ["16:9", "4:3", "Cinerama", "Zoom 14:9", "Zoom 16:9", "Zoom até 16:9", "Automático"];	
var Mode3DArray = ["Desl.", "2D para 3D", "Lado a lado", "Superior e inferior", "Intercalar Linha"];	
var videoOptionListArray = ["Desl.", "Trilha", "Legenda", "Título", "Capítulo"];	
var subMenuTitleText = "Legenda";	
var langMenuTitleText = "Idioma de áudio";	
var titleMenuTitleText = "Título";	
var mode3DMenuTitleText = "Modo 3D";	
var langInfoText = "Trilha";	
var STOP_RESUME_INFO = "Pausar-Retomar";	
var playListName = "Nome";	
var eb_tips = "Dicas";	
var ok_button = "OK";	
var eb_info = ["Erro de decodificação de áudio.", "Erro de decodificação de vídeo.", "Formato de áudio não suportado.",    "Formato de vídeo não suportado.", "Não é possível abrir este arquivo.", "Erro de reprodução, favor tentar novamente.",   "Formato de arquivo não suportado.", "O tocador parou de funcionar.",   "O caminho do arquivo não existe ou é inválido.\n Reinsira o dispositivo de armazenamento e tente novamente.",   "Continuar reprodução a partir do ponto anterior?\n"];	
var picturePlayErrorTips = ["Loading fail!!!","Arquivo muito grande!!!","Network error!!!","Thread error!!!","Param error!!!","Unknown error!!!"];
var frameTitleText = "Novo Dispositivo";	
var eb_quit_info = "Deseja sair?";	
var eb_yes = "Sim";	
var eb_no = "Não";	
var offinfo = "Desl.";	
var naInfo = "Nulo";	
var consoleInfoArray = ["Retrocesso Rápido", "Avanço Rápido", "Reprod./Pausar", "Lista de reprod."];	
var cantOperateText = ["Função não suportada."];	
var chapterChangeInfo = "Somente Capítulos de 1 a XXXX estão disponíveis.";	
var metaDataArray = ["Metadados de Tìtulo/Edição:", "Metadados de Capítulo:", "Metadados de Áudio:", "Metadados de Legenda:"];	
var metaTitleInfo = "Título";	
var metaChapterInfo = "Capítulo";	
var videoLoadingInfo = "Analisando...";	
var listLoadingInfo = "Carregando...";	
var pgInfo = "Classificação:";	
var fileNameText = "Nome";	
var fileDateText = "Data";	
var fileSizeText = "Tamanho";	
var fileDurationText = "Duração";	
var fileDirectorText = "Diretor";	
var fileCopyrightText = "Direito autoral";	
var fileArtistText = "Artista";	
var fileAlbumText = "Álbum";	
var fileGenreText = "Gênero";	
var fileYearText = "Ano";	
var fileGenreText = "Gênero";	
var mainListArray = ["Todos", "Imagem", "Vídeo", "Música"];	
var sortArray = ["Nome", "Data"];	
var parserArray = ["Normal", "Recorrente"];	
var emptyTipsInfo = "Arquivo não encontrado.";	
var emptyFolderInfo = "Arquivo não encontrado.";	
var sortName = "Classificar por";	
var parserName = "Analisador";	
var divx_str1 = "Registro DivX(R)";	
var divx_str2 = "Cancelamento DivX(R)";	
var infor_str = "Inform.";	
var quickMenuEmptyText = "Nenhuma Opção Disponível.";	
var musicSoundPresetArray = ["Padrão", "Filme", "Música", "Voz clara", "Pessoal"];	
var musicInformationArray = ["Nome", "Artista", "Álbum", "Gênero:", "Ano:", "Duração:"];	
var playListName = "Nome";	
var playTipsInfo = ["Você está reproduzindo o primeiro arquivo.", "Você está reproduzindo o último arquivo."];	
var musicNameInfo = "Nome";	
var musicArtistInfo = "Artista";	
var musicAlbumInfo = "Inform.";	
var optionSoundPresetInfo = "Modo de Som";	
var optionBGMInfo = "Reproduzir em segundo plano";	
var optionAudioOnlyInfo = "Somente áudio";	
var optionInfoText = "Inform.";	
var remotePhoneConnecte = "XXXX foi conectado à TV!";	
var tvRemoteTitle = "TV Remote";	
var tvRemoteDeveloper = "Aplicação desenvolvida por TCL";	
var tvRemoteDeviceTitle = "Nome do dispositivo:";	
var remoteOption = ["Compartilhamento de mídia","Controle remoto","Ajuda","Sobre","Smart Connect"];	
var remotebottom = "Favor baixar \"TV Remote\" para seu smartphone";	
var remoteStage = ["Android","iOS"];	
var sharingReminds = ["Compartilhar imagens, vídeos e música com a TV através do telefone.","Passos: \n   1. Clique em \"TV Remote\" no telefone. Conecte o telefone com a televisão através da mesma rede WiFi;\n   2. Clique em \"Compartilhamento de mídia\" para ver os arquivos de mídia;\n   3. Enviar mídia para reprodução na TV (com uma das seguintes opções)","a) Selecione e arraste a pasta/arquivo para o ícone de TV no topo da tela;\n      b) Balance o telefone em direção à TV para iniciar o primeiro arquivo;\n      c) Reproduza a mídia no celular e clique no ícone de compartilhamento de TV;","4. Durante a reprodução na TV, agite o telefone para reproduzir o arquivo anterior ou o próximo."];	
var controlReminds = ["Usar o telefone como controle remoto para operar a TV."," ","Passos: \n   1. Clique em \"TV Remote\" no telefone. Conecte o telefone com a televisão através da mesma rede WiFi;\n   2. Clique em \"Controle remoto\" para operar a TV."];	
var helpDeviceWords = "Interação multitela";	
var helpBottom = "Na era da tecnologia de nuvem, dispositivos inteligentes, como telefone e TV, estão mutuamente conectados. Compartilhe arquivos de mídia com a sua família em múltiplas telas e controle a TV através do telefone!";	
var helpReminds = ["Preparativos\n   1. Baixe e instale \"TV Remote\" do Google Play ou da Apple Store.\n   2. Conecte o telefone com a televisão através da mesma rede WiFi."," ","Telefone recomendado\n   1. CPU: acima de 800 MHz\n   2. Armazenamento: pelo menos 80 MB de espaço livre"," ","Isenção de responsabilidade\n   Se \"TV Remote\" não estiver disponível no seu telefone, entre em contato com o fabricante do telefone."];	
var helpButtons = ["Anterior","Próx."];	
var aboutReminds = ["TV Remote","Aplicação desenvolvida por TCL"];	
var aboutExit = "Sair";	
var smartReminds = ["Conexão rápida e inteligente entre TV e telefone."," ","Passos \n   1. Conecte a TV e o smartphone a mesma LAN. Clique em \"TV Remote\" no smartphone.\n   2. Clique em \"Smart Connect\" para escanear o cód. QR.\n   3. Com a TV no modo de visualização de transmissão, pressione a tecla INFO no controle remoto da TV durante 4 segundos, um código QR irá aparecer na tela.",];	
var smartQRReminds = ["Clique em \"Smart Connect\" no \"TV Remote\" do seu telefone e escaneie o código QR para conectar a TV e o telefone rapidamente.","O código QR contém as informações da conta LAN. Favor guardá-lo em segurança."];	
var consoleTipArray = ["Anterior","Próx.","Console","Lista de reprod."];	
var optionInfoArray = ["Modo de Imagem","Modo de reprodução","Duração","Efeito","Inform."];	
var playModeArray = ["Normal","Misturar","Repetir"];	
var durationArray = ["Curto (5s)", "Médio (10s)", "Longo (15s)"];	
var effectArray = ["Nenhum", "Girar", "Limpar à direita", "Limpar à esquerda", "Limpar acima", "Limpar abaixo", "Restringir", "Liberar", "Aleatório"];	
var infoArray = ["Nome:","Tamanho:","Data:","Localidade"];	
var picturePresetBarTitleInfo = "Modo de Imagem";	
var picturePresetBarArray = ["Padrão","Dinâmico","Estúdio","Filme","Pessoal"];	
var upTipsInfo = "Mover Imagem";	
var consoleTipsArray = ["Console","Anterior","Próx.","Lista de reprod.","Config."];	
var pictureMoveTipsArray = ["Pressione DIREITA novamente para exibir a próxima imagem","Pressione ESQUERDA novamente para exibir a imagem anterior","Pressione BAIXO novamente para exibir a lista de reprodução"];	
var optionPvrListArray = ["Modo de Imagem","Modo de Som", "Modo de tela", "Modo 3D", "Legenda", "Trilha de som", "Inform."];	
var titleSpanFirstArray = ["Controle e Conexão","Operações Básicas","APLICATIVOS","TV","Config.","FAQ"];	
var titleSpanSecondArray = [["Controle remoto","Teclas do Painel","Navegação Fácil","Conexão da TV","Conexão da TV","Conexão da TV","Rede sem fio"],["Iniciador","Barra de status","Fonte"],["Execução de aplicativos","Mídia","TV Remote"],["Ajustar canal e volume","Lista de canais","EPG","Instalação de canal","Canais favoritos"],["Ajuste de imagem","Ajuste de som","Ajuste de canal","Atualiz. de software","Idioma","Bloqueio parental"],["Perguntas frequentes (FAQ)","Perguntas frequentes (FAQ)","Resolução de problemas","Resolução de problemas","Termos e condições"]];	
var contentSpan1_1Array = [["LIGAR:","FONTE:","CONFIGURAÇÕES:","OPÇÃO:","RETORNAR:","INFO:","INÍCIO:","SAIR:","LISTA:"],    ["Liga ou coloca em modo de standby",        "Seleciona a fonte de entrada",        "Para exibir o menu Configurações",        "Para exibir o menu Opções",        "Retorna ao menu Anterior ou termina a execução de um APP",        "Mostra informações de programa",        "Para acessar a página de Smart TV",        "Retorna ao menu Anterior ou termina a execução de um APP",        "Mostra a lista de canais"]];	
var contentSpan1_2Array = ["Canal anterior","Próximo canal","Aumentar o volume","Diminuir o volume","Vai para a Página Inicial","Confirmar a opção","Standby/Ligar"];	
var contentSpan1_3Array = ["OK/Guia","Canal acima","Canal abaixo","Aumenta volume","Diminui volume","Disponível como teclas de seta em algumas funções."];	
var contentSpan1_4Array = ["LAN","HDMI ( MHL )","HDMI","HDMI ( ARC )","Adaptador AV OUT","LAN","Smartphone","PC/Decodificador/DVD","Amplificador de áudio","Amplificador de áudio/Monitor","Sua TV pode não incluir todos os conectores."];	
var contentSpan1_5Array = ["USB 2.0","USB 3.0","Fone de ouvido","Adaptador AV IN","SPDIF","Adaptador CMP AUDIO IN","CMP IN (YPbPr)","Dispositivos USB","Dispositivos USB","Fone de ouvido","DVC/Console de Jogo/Decodificador/DVD","Amplificador de áudio","DVC/Console de Jogo/Decodificador/DVD","Sua TV pode não incluir todos os conectores."];	
var contentSpan1_6Array = ["Interface comum","SD","VGA","SCART","Mini SCART","ANTENNA IN","CI CAM","Cartão SD","PC","Decodificador/DVD","Antena/Cabo/Satélite","Sua TV pode não incluir todos os conectores."];	
var contentSpan1_7Array = ["Tablet","PC","Roteador","Telefone","TV"];
var contentSpan1_8Array = ["Mudar função/Ligar","Manter pressionado para acionar o temporizador de sono","Baixo","Cima","Volume/Canal/Fonte"];
var contentSpan2Array = [["Pressione INÍCIO para visualizar a página inicial.","Em seguida, pressione OK para assistir a um dos programas existentes ou entrar no aplicativo."],["Mostra a data, rede e dispositivos, etc., no canto superior direito da tela."],["Selecione a fonte de entrada de dispositivos conectados à TV através de portas diferentes, tais como TV, AV, HDMI, etc."]];
var contentSpan3Array = ["Acesse seus aplicativos favoritos através da Smart TV.","Veja fotos, assista vídeos e ouça música a partir de um dispositivo de armazenamento USB.","Conecte sua TV e smartphone ou tablet à mesma LAN.","Clique em nScreen ou TV Remote no smartphone ou tablet.","Compartilhe fotos, vídeos e música em multitelas com sua família e controle a sua TV através do seu smartphone."];
var contentSpan4Array = [["Pressione P+/P- para mudar de canal.","Pressione V+/V- para ajustar o volume."],["Pressione LIST no controle remoto para acesso da lista de canais.","Pressione CIMA/BAIXO para seleção de canais."],["EPG (Guia Eletrônico de Programas) é um guia na tela que exibe a programação da TV. Você pode navegar, selecionar, ver e gravar programas."],["Buscar e instalar canais."],["Adicione ou edite seus canais favoritos à lista de Canais."]];	
var contentSpan5Array = ["Aprecie seus programas favoritos através de aplicativos de vídeo."];	
var contentSpan6Array = [["Pressione MENU para ver as opções de config. do sistema.","Acesse as config. de Imagem para ajustar os valores."],["Pressione MENU para ver as opções de config. do sistema.","Entre com as configurações de Som para definir as opções."],["Pressione MENU para ver as opções de config. do sistema.","Entre com as configurações de Canal para definir as opções."],["Atualize sua TV quando uma nova versão do software estiver disponível."],["Você pode escolher seu idioma de menu preferido."],["Permite bloquear canais ou programas com base na classificação indicativa."]];	
var contentSpan7_1Array = [["Sem imagem, sem som","Verifique o fornecimento de energia.","Verifique o fornecimento de sua fonte de energia.","O plugue de alimentação da TV está com mau contato.","Verifique a fonte do sinal."],["Imagem normal, sem som","Pressione o botão de volume V+ para aumentar o volume.","A configuração de som está incorreta.","Erro de sinal da emissora."],["Som normal, sem imagem","Ajuste o brilho e o contraste.","Erro de sinal da emissora.","Verifique se está em modo de áudio somente."]];	
var contentSpan7_2Array = [["Interferência de frequência de rádio.","Esta interferência produz ondas que se deslocam ou faixas diagonais e, em alguns casos, a perda do contraste da imagem. Mova para longe de seu TV a fonte de interferência de rádio."],["Sem cor","Ajuste as configurações de cor.","Tente outro canal. Programa em branco e preto pode ter sido recebido."],["O controle remoto não está funcionando","Troque as baterias.","As baterias não estão instaladas corretamente. A fonte de alimentação da TV não está conectada."]];	
var contentSpan7_3Array = [["O dispositivo USB não está exibido","Verifique se o dispositivo de armazenamento USB é compatível com a TV.","Verifique se os formatos de arquivos de áudio e de imagem são suportados pela TV."],["Reproduzindo sem som","O formato de áudio do vídeo não é suportado pelo reprodutor da TV."],["Os arquivos não são reproduzidos adequadamente","O desempenho da transferência da unidade de armazenamento USB pode limitar a taxa de transferência de dados para a TV."]];	
var contentSpan7_4Array = [["No que devo prestar atenção quando faço a atualização de software","Nenhum corte de energia durante a atualização do software.","Evitar qualquer operação com o controle remoto durante a atualização do software.","O processo de atualização do Software pode levar alguns minutos."],["Não há mudanças distintas de interface da TV após a atualização do software.","Sob certas condições, a atualização do software não só pode atualizar ou adicionar novas funções, mas também melhorar o desempenho do aparelho de TV sem alterações distintas de interface. A interface da TV pode por vezes permanecer inalterada."]];	
var termsTitle = "Termos e Condições";	
var termsConditions = ["O seu aparelho de TV (\“Smart TV\”) possui diversos recursos apresentados por meio de aplicativos e/ou conteúdos (\“Serviços\”), porém, alguns dos mencionados serviços podem não estar disponíveis em todos os modelos de Smart TVs ou em todos os países. Alguns destes Serviços podem exigir contratação mediante o pagamento de taxas de adesão, de responsabilidade exclusiva dos proprietários e provedores dos Serviços. \n Favor acessar o nosso site para mais informações sobre o modelo de seu aparelho Smart TV e seus respectivos serviços. Os mencionados Serviços e a disponibilidade de seus conteúdos através do seu Smart TV estarão sujeitos a alterações periódicas sem aviso prévio, estabelecidas por seus proprietários. \n Todos os serviços acessíveis através do seu Smart TV pertencem a terceiros e estão protegidos por direitos autorais, patentes, marcas e/ou outras leis de propriedade intelectual. Tais serviços devem ser utilizados somente para uso pessoal ou doméstico, sendo vedada a utilização comercial. É vedado também o uso de quaisquer Serviços e seus conteúdos de forma não autorizada pelo proprietário ou provedor do mesmo. Sem limitar as disposições acima, salvo com a expressa autorização, o usuário não poderá modificar, copiar, publicar, enviar, postar, transmitir, traduzir, vender, criar trabalhos derivados, ou fazer o uso indevido ou distribuir quaisquer dos Serviços e seus conteúdos fornecidos no seu Smart TV. \n O usuário reconhece e concorda expressamente que os Serviços poderão ser  alterados, suspensos, removidos, encerrados, interrompidos, ou desativados a qualquer momento, sem aviso prévio, e a fabricante não oferece qualquer garantia de que permanecerão disponíveis por qualquer período de tempo. Os Serviços e seus conteúdos são transmitidos por terceiros através de redes e meios de transmissão, os quais a fabricante não gerencia. Sem prejuízo da generalidade deste termo de responsabilidade, a fabricante isenta-se expressamente de qualquer obrigação ou responsabilidade relacionada a alteração, interrupção, desativação, remoção ou suspensão de qualquer conteúdo ou Serviço disponibilizado no seu Smart TV. A fabricante poderá ainda impor limites à utilização ou ao acesso de determinados conteúdos ou serviços, em qualquer circunstância e sem aviso prévio ou responsabilidade. A fabricante deste aparelho Smart TV não se responsabiliza pelo atendimento ao cliente relacionado aos Serviços. Quaisquer dúvidas ou solicitação de assistência nestes casos deverão ser solicitadas diretamente ao respectivo proprietário ou provedor dos Serviços. \n O usuário reconhece e concorda que a fabricante e os proprietários e provedores dos Serviços disponibilizados podem recolher e utilizar dados técnicos e informações relacionadas, incluindo, mas não se limitando, às informações técnicas sobre este Smart TV, sistema, software, aplicativos e periféricos, para facilitar o fornecimento de atualizações de software, suporte ao produto e outros serviços. A fabricante e os proprietários dos conteúdos e Serviços podem utilizar tais informações desde que elas estejam em um formato que não identifiquem o usuário pessoalmente e apenas com o objetivo de melhorar seus produtos, tecnologias e serviços."];	
var noChannelListRemind = ["Nenhum canal encontrado. A lista de canais está disponível após a pesquisa de canais.","Sintonia de Canal"];	
var closeSubtitleRemind = "A função estará disponível quando a legenda estiver desligada. Deseja configurar agora?";	
var estickerTitles = ["Imagens altamente realistas","Cores que ganham vida","Excelente naturalidade de movimento","Qualidade de imagem dinâmica","Exclusivo SR UHD","Sinta o mundo 3D","Desempenho mais rápido","Futuro conteúdo 4K","Aprecie o mundo online","Acesse conteúdos extras","Sintonizadores digitais integrados","Conecta todos dispositivos","Diversas fontes 4K","Conteúdo USB","WiFi ultrarrápida","Conteúdo móvel na TV","Conteúdo de dispositivo móvel","Conteúdo local","Aprovada pela DivX","Imagem uniforme","Pronta para Canal","TDT Premium"];	
var estickerDescriptions = ["Fantástica experiência visual graças a imagens com quatro vezes a nitidez do Full HD em tela UHD","Ampla gama de cores oferece emoção em cada cena com vermelhos vivos e verdes esmeraldas","Interpolação de quadros 4K e de condução de luz de fundo para combater os problemas de desfocagem de movimento","A nitidez da imagem original é reforçada a fim de produzir uma expressão verdadeiramente dinâmica e contraste brilhante.","Desfrute programas de TV e discos Blu-ray mais nítidos do que antes, com a tecnologia Super Resolution","Experimente a TV preparada para 3D e assista a vários conteúdos 3D","Experiência mais agradável de entretenimento com processadores Quad Core, para uma interação harmoniosa com melhor desempenho","Suporte ao codec HEVC (H.265), para o futuro padrão 4K de distribuição de vídeo","Riqueza de aplicações online, serviços de VOD, Catch Up TV e navegação na Internet.","Veja mais com serviços e conteúdos adicionais de suas emissoras favoritas","Acesse canais de televisão de alta definição sem decodificador adicional","De fácil conexão com várias fontes digitais disponíveis em casa","TV pronta para o futuro, capaz de reproduzir 4K 50/60 Hz via HDMI 2.0 com HDCP 2.2","Conteúdos de vídeo ou foto de dispositivo USB, disco rígido ou câmera em tela grande com resolução 4K","Última geração do padrão MIMO 2x2 e AC oferece incomparável velocidade de acesso à Internet","Aprecie fotos, vídeos e aplicativos de dispositivos móveis em tela grande, graças à tecnologia de espelhamento de tela","Fotos, vídeos e aplicativos de smartphone ou tablet podem ser exibidos em tela grande","Exibição em tela grande de conteúdo local como fotos e vídeos a partir de dispositivos conectados à rede local","Reproduza filmes próprios ou alugados protegidos pela DivX","Bordas ultra estreitas e projeto superfino","Testada e aprovada pelo Canal+","Testada e aprovada pela TDT Premium"];	
var eManualTextArray = ["E-Manual","Todos os gráficos no interior são somente para representação."];	
var frontPanelRemind = "O painel frontal está bloqueado.";	
var eRPRemind = "O modo de loja não atende os requisitos do ERP. Você tem certeza de que deseja selecioná-lo?";	
var noRelatedChannel = "Nenhum canal relacionado";	
var option0624Name = ["BOP","BFS","Evento por evento","GetUserID","BGM","Reiniciar tudo","Restaurar loja","NRM","DVB-T2 e escolha do País","Modo HbbTV"];	
var DVBT2AndChoice = ["Lig.","Por país","Desl."];	
var hbbtvServiceRemind = "O serviço HbbTV está chegando em breve.";	
var insertWord = "Inserir";	
var viewDetail = "Ver detalhe";	
var remindOAD = "Atualiz. de software. Uma nova atualização de software recomendada pode existir em outro canal. Se você aceitar baixá-la, a TV mudará para o canal automaticamente. Você gostaria de fazê-lo agora?";	
var LEDStatus = ["Intermitente", "Normal","Desl."];	
var netFlixRemind = "Esta função irá interromper o acesso aos serviços de Netflix até que você entre novamente.";	
var ESNExplanation = "Número de Série Eletrônico";	
var resetShopRemind = "Reiniciando o sistema, favor não desligar o TV.";	
var initialSelectOption = "Favor selecionar uma opção:";	
var databaseRemind = "O sistema identificou o banco de dados como danificado por alguma razão desconhecida e o reconstruiu automaticamente, pressione OK para continuar.";	
var Deactivation = "Desativação";	
var oadFutureRemind = "Atualização de software.\n Um novo software recomendado estará disponível em %s. A atualização pode levar alguns minutos e a tela pode ficar preta. Não desligue o receptor durante a atualização. Se você aceitar essa atualização, favor deixar o receptor ligado na hora programada. Deseja receber esta atualização?";	
var bt_title = "Bluetooth";	
var bt_soundOutPutName = "Saída de som";	
var bt_soundOutPutTV = "Autofalantes da TV";	
var bt_soundOutPutBT = "Dispositivos bluetooth";	
var bt_soundOutPutBT_TV = "Bluetooth e TV";	
var bt_refreshBarName = "Dispositivos";	
var bt_settingTips_On = "Ligue a função Bluetooth e verifique os dispositivos.";	
var bt_settingTips_Finding = "Buscando dispositivos…";	
var bt_settingTips_NoDevice = "Nenhum dispositivo encontrado.";	
var bt_deviceList_State_NoConnect = "Não conectado";	
var bt_deviceList_State_Connecting = "Conectando...";	
var bt_deviceList_State_Connected = "Conectado";	
var bt_deviceList_State_Paired = "Emparelhado";	
var bt_deviceList_Conncect_Failed_Tips1 = "Falha na Conexão.";	
var bt_deviceList_Conncect_Failed_Tips2 = "Favor confirmar se a função XXX Bluetooth está ligada.";	
var bt_deviceList_Conncect_Success = "Conectado ao dispositivo Bluetooth.";	
var bt_deviceList_Disconncect_Success = "Desconectado do dispositivo Bluetooth.";	
var bt_deviceList_Disconnect = "Tem certeza de que deseja desconectar de XXX?";	
var bt_tipsTitle = "Dica";	
var bt_bluetooth_Pairing_Title = "Emparelhamento Bluetooth";	
var bt_bluetooth_Input_Pin = "Favor digitar o PIN:";	
var bt_bluetooth_Output_Pin_Tip = "Digite a senha XXXX pelo teclado.";	
var bt_bluetooth_Pin_Wrong_Tip = "Senha incorreta.";	
var bt_bluetooth_Remove_Pair_Title = "Consulta";	
var bt_bluetooth_Remove_Pair_Ask = "Esquecer este dispositivo?";	
var audioDescriptionName = ["Descrição de áudio","Alto-falante","Volume","Fone de ouvido","Volume do Fone de Ouvido","Volume de AD (audiodescrição)","Dispositivo BT (bluetooth)","Volume do Dispositivo BT","Amplificador","Alto-Falante"];	
var audioDescriptionOptions = ["Desl.","Normal","Descrição de áudio"];	
var volumeOffRemind = "Favor configurar XXX \"Ligado\" no menu Configurações.";	
var mEPSRemind = "O modo de loja não atende os requisitos de MEPS. Você tem certeza de que deseja selecioná-lo?";	
var parentRatingAUOptions = ["Nenhum bloqueio", "Bloquear G e acima (opcional)", "Bloquear PG e acima", "Bloquear M e acima", "Bloquear MA e acima", "Bloquear AV e acima",  "Bloquear R e acima", "Bloquear tudo"];	
var mEPSTips = ["O modo de imagem atual não atende os requisitos de MEPS\n, recomenda-se o modo Padrão.",    "Sua TV está no modo Loja.\nPara o modo de casa, consulte o menu Configurações."];	
var switchSourceRemind = " inserido. Você deseja mudar?";	
var footballModeName = "Modo de esporte";	
var resetStadium = "Estádio";	
var atvSearchMenu = "Pesquisa manual ATV";	
var dtvSearchMenu = "Pesquisa manual DTV";	
var settingNoticeSourceName = "Detectar Entrada";	
var smartTVOptions = ["Portal Smart TV","HbbTV","Share&See","Wireless Display","Termos/Condições",                            "Standby em rede","Reiniciar Smart TV","Cookie policy","Política de privacidade","Exclusão de dados","Samba TV Settings"];
var supportOptions = ["Diagnóstico remoto","Contate-nos"];	
var tvDoctor = ["Diagnóstico remoto 2.0","O aplicativo está disponível para a sua Smart TV somente para executar diagnóstico e melhorar a experiência do produto. Os dados de operação da TV e informações do modelo serão coletados por este aplicativo e carregados para um servidor, ele será usado para resolver o problema. As suas informações pessoais não serão acessadas. Assegure que sua TV está devidamente conectada à Internet.","Diagnóstico local","Favor seguir as instruções do pessoal de apoio quando o diagnóstico for iniciado.","Diagnóstico remoto","Favor assegurar que o pessoal de suporte está online.","Número de série:","&nbsp;&nbsp;&nbsp;&nbsp;ID do Usuário:","Conectando...","Conectado, favor manter a conexão de rede.","Não foi possível conectar a internet, \nVerifique sua conexão de Rede.","Sair"];	
var ClosedcaptionName = "Closed Caption";	
var sysCCOptions = ["Modo CC","CC Analógico","CC Digital","Sobrepor","Closed Caption"];	
var sysCCmodeOption = ["Desl.", "Lig.", "Lig. Modo Mudo"];	
var sysanalogCCOption = ["Desl.", "CC1", "CC2", "CC3", "CC4", "Texto1", "Texto2", "Texto3", "Texto4"];	
var sysdigitalCCOption = ["Desl.", "Serviço 1", "Serviço 2", "Serviço 3", "Serviço 4", "Serviço 5", "Serviço 6", "Serviço 7", "Serviço 8"];	
var syssuperimposeOption = ["Desl.", "Serviço 1", "Serviço 2", "Serviço 3", "Serviço 4", "Serviço 5", "Serviço 6", "Serviço 7", "Serviço 8"];	
var contactUsOption = ["Contate-nos",    "Favor Contate-nos se você está tendo problemas para abrir este equipamento.",    "Contate-nos",    "Website: Visita",    "Telefone do centro de apoio:","Informações do produto","Nome do modelo:",    "Versões de software:","*","ID do Usuário:","ID do Projeto:",    "Tipo de cliente:","End. MAC placa WiFi:","End. MAC placa rede:","ESN da Netflix:","Examine as informações em seu telefone celular.",    "depois selecione seu país."];
var homePageWords = ["Histórico", "Pesquisa"];	
var titlePageWords = ["DESTAQUES", "VÍDEOS","TV","APLICATIVOS"];	
var videosPageWords = ["Filme", "Esporte","Música","Popular","Jogo","Educativo","Notícias"];	
var statusPageWords = ["USB","Config.","WiFi","Com cabo"];	
var searchPageWords = ["Pesquisa", "Buscas populares:","Shows, Filmes, Pessoas..."];	
var resultSearchPageWords = ["Resultados sobre isso"," ","Favor tentar outras palavras-chave.","desculpe, nenhum vídeo foi encontrado sobre isso"," "];	
var historyPageWords = ["Histórico", "Pressione","para excluir o histórico","Excluir um","Excluir todos","Ontem","Hoje","Você ainda não viu o vídeo.","Histórico de exibições excluído com sucesso!"];	
var channelPageWords = ["Desculpe, nenhum vídeo encontrado ainda."];	
var virtualRemoteValues = ["1","2","3","4","5","6","7","8","9",                          "Zoom-","0","Zoom",                          "Sair","0","*",                          "Lista","0","Texto",                          "Guia","Entrar","Sair",                          "Menu","Legenda","Inform.",                          "Parar",                          "Inform.","Menu","Sair",                          "Sair"                          ];	
var sportsModeInitReminds = ["Este assistente ajuda a configurar a unidade USB para o Modo de Desporto. Selecione o modo de configuração.",
						 "Selecione o tamanho do ficheiro para o Modo de Desporto.",
						 "A criar ficheiro do Modo de Desporto",
						 "A velocidade da unidade USB é demasiado lenta (< %f MB/seg.) para a função do Modo de Desporto!",
						 "A unidade USB está pronta para o Modo de Desporto. Recomenda-se a sua substituição (para uma velocidade > %f MB/seg.) para obter um melhor desempenho.",
						 "A unidade USB está pronta para o Modo de Desporto."];
var sportsModeExtra = ["Deseja parar o Modo de Desporto e mudar de canal?",
						"Deseja parar o Modo de Desporto e mudar a fonte para o dispositivo ligado à entrada SCART?",
						"Deseja parar o Modo de Desporto e mudar a fonte para o dispositivo ligado a uma entrada HDMI?",
						"O Modo de Desporto não é suportado em Canais Codificados.",
						"Deseja parar o Modo de Desporto e aceder ao EPG?",
						"Deseja parar o Modo de Desporto e aceder ao conteúdo Multimédia?",
						"Deseja parar o Modo de Desporto e alterar a fonte de entrada?",
						"O televisor vai terminar o Modo de Desporto atual. Deseja sair?"];	
var remoteControlNote = "- O(s) controle(s) remoto(s) fornecido(s) com o seu aparelho pode(m) ser diferente(s), dependendo do modelo.";


var textArray = ["Volume","Canal","Fonte","Ligar/Desligar","Guia","segundos para desligar"];
var guideArray = ["VOL-","VOL+","CH-","CH+","Ant.","Seg."];
var favChannelListRemind = ["Nenhum canal favorito. Acesse outras listas e use a “Tecla Verde” para adicionar canais favoritos."];

var proxySetting = ["Defin. proxy","Porta"];
var powerOffShop = ["Recomenda-se o uso do modo Loja, continuar?"];
var tcastTextPageWords = ["Uma panóplia de vídeos e aplicações","TV remota ao alcance de um dedo","Conteúdos fantásticos, partilhados num ecrã gigante"];
var tcastOtherWords = ["Leia o código QR e transfira o T-Cast","Rede ligada à TV","Nome da TV","T-Cast"];
var hbbtvWords = ["HbbTV Setting","HbbTV","Cookies","Thrid Party Cookies","Device ID","Tracking"];
var hbbtvTrackingWords = ["YES","NO","Don't care"];
var eStickerTipWords = ["Memória disponível inferior a 400M. Você gostaria de remover o video de demostração para obter mais espaço?"];
var delEstickerVideoRemid = ["The video has been deleted successfully"];

var clockPageWords = ["Local","Pequim","Tóquio","Hongkong","Taipei","Cingapura","Paris","Londres","Moscou","nova Délhi","Jacarta","Nova york","Rio",
                        "Pressione a tecla \"OK\"","Não pode ser adicionado!"];
var smartKeyWords = ["Visor sem fio","Aproveite a música","Temporizador","Relógio mundial","Soundbar","WiFi","PVR","Modo de esporte"];
var recommendWords = ["Recomendar"];
var onlyListenRemindWords = ["Entre no modo Somente Áudio","Prima qualquer tecla excepto a tecla de volume para sair!"];
var selectSatRemind = "Não pode selecionar mais de 20 satélites!";
var recentPageWords = ["Carregue em Menu para eliminar","Aplicações recentes","mais","sem aplicações","Visualizações recentes","mais","sem histórico","Casa","Eliminar um","Eliminar tudo","Eliminar um","Eliminar tudo"];
var deleteHistoryNote = "Pretende eliminar todos os registos?";
var done = "Concluído";
var cancel= "Cancelar";
var recentWord = "Recente";
var videosandappsWord = ["vídeos","apps","Hoje","Anteriores"];
var cookiePolicyTitle = "Política de Cookies - Serviços de TV Smart Online";
var cookiePolicyConditions = ["A empresa respeita sua privacidade ao usar TVs inteligentes fabricadas e serviços fornecidos pela empresa. Os cookies são usados por muitos sites e outros serviços de Internet e sua TV inteligente aceita, armazena e transmite cookies para garantir que esses sites e serviços funcionem adequadamente. A Companhia também usa cookies ao fornecer seus Serviços. Nesta Cookie Policy Company descreve quais cookies são definidos no seu Smart TV e como você pode gerenciá-los. \n1. O que é um cookie? \nOs cookies são pequenos arquivos de texto que podem ser colocados no seu Smart TV. Quando um site ou o serviço de uma emissora de TV é acessado, o site ou serviço pode armazenar um cookie na TV inteligente. Durante os acessos subsequentes, um cookie que é colocado no seu Smart TV enviará informações para a parte que colocou o cookie. Os cookies são extremamente comuns e utilizados em vários sites e serviços. Cada cookie geralmente contém o nome do domínio do qual o cookie chegou, a \"vida útil\" do cookie e um valor (geralmente um número exclusivo). Para uma explicação mais completa sobre os cookies e sobre a forma como eles operam, visite www.allaboutcookies.org. \nOs cookies podem ser categorizados em cookies funcionais e cookies não funcionais. Os cookies funcionais são cookies que são estritamente necessários com o objetivo de fornecer os serviços de TV inteligente e para sites e outros serviços para fornecer o conteúdo certo à TV inteligente. Os cookies não funcionais são todos os outros cookies. \nEsta Política de Cookies refere-se à cookies que são colocados por nós, bem como cookies de publicidade que podem ser colocados por terceiros através de nossos serviços na sua Smart TV. Esta Política de Cookies não está relacionada aos cookies que podem ser colocados quando você usa os serviços da Smart TV para acessar sites, serviços ou aplicativos de terceiros. Para esses cookies, encaminhamos você para as respectivas políticas de cookies de tais terceiros. No entanto, esta Política de cookies descreve como excluir esses cookies (consulte a seção 4 abaixo). \n2. Quais cookies não funcionais usamos? \nPublicidade: anúncios de vídeo e exibição podem ser exibidos no seu Smart TV ao usar serviços de TV inteligente. Esses anúncios podem ser atendidos por nós ou por terceiros através ou coordenados por nosso servidor de publicidade, que desempenha um papel central de coordenação em relação ao atendimento de tais propagandas. Nosso servidor de publicidade ou um servidor de publicidade de terceiros criará um cookie na sua TV inteligente. Por meio deste cookie, um servidor de publicidade registrará se um anúncio foi exibido para sua TV inteligente ou se alguém que usa seu Smart TV clicou em um anúncio. Utilizamos as informações guardadas em tal cookie de publicidade para lembrar quais propagandas foram atendidas no seu Smart TV para que possamos nos certificar de que nem muitos dos mesmos anúncios são exibidos em qualquer TV Smart particular e que podemos resolver com nossos parceiros de publicidade. Não devemos usar essas informações para atender propagandas específicas. Além disso, terceiros podem usar o nosso sistema de publicidade para exibir propagandas na sua TV inteligente e colocar cookies na sua TV inteligente quando esses anúncios forem exibidos. \nEsses cookies contêm, entre outros, informações sobre os anúncios veiculados, informações sobre quais aplicativos ou domínios esses anúncios são exibidos e seu endereço IP. Isso é feito para lembrar com que frequência um anúncio específico é mostrado, e para evitar que o mesmo anúncio seja mostrado com muita frequência. Os anunciantes de terceiros externos que podem colocar anúncios também podem usar cookies para rastrear sua atividade em vários sites e fornecer anúncios que correspondam às suas preferências pessoais. \n3. Sites de terceiros \nQuando você visita sites ou serviços de terceiros através dos serviços de SMART TV da sua TV, é possível que esses sites ou serviços coloquem cookies na sua TV e que esses sites rastreiem e armazenem suas interações nesses sites. Não solicitamos ou incentivamos tais atividades e não usaremos essas informações. Consulte as respectivas políticas de cookies e privacidade de tais sites e serviços para obter mais informações sobre o uso dessas cookies desses cookies. \n4. Eliminação de cookies \nA sua interface de usuário da sua TV inteligente permite que você exclua todos os cookies e outros locais de armazenamento do navegador da Smart TV. É altamente recomendável remover todos os cookies e configurações armazenadas localmente antes de vender ou distribuir sua TV inteligente. \n5. Contate-nos \nSe você tiver dúvidas ou comentários sobre nossa Política de Cookies ou nossa prática de usar cookies, você pode nos enviar um e-mail via FRsupport@tcl.com. \nVersão: 1.0 \n"];
var privacyPolicyTitle = "Política de privacidade - Serviços de SMART TV on-line";
var privacyPolicyConditions = ["Nós respeitamos sua privacidade ao manusear seus dados pessoais. Esta Política de Privacidade descreve a entidade responsável pela coleta, processamento e uso de dados pessoais que coletamos de você em conexão com o uso de nossos serviços de SMART TV. \n1. Controle de dados\nO processamento e o uso dos dados pessoais recolhidos do usuário ao utilizar os Serviços são conduzidos pela Shenzhen TCL New Technology Co., Ltd., nº 5, Industrial Avenue (M), Sheko Industrial Zone, cidade de Shenzhen, província de Guangdong, China (\"Companhia\"). Nota, no entanto, que não somos responsáveis por todas as atividades de processamento de dados estabelecidas abaixo. No entanto, incluímos uma descrição das respectivas atividades em nossa Política de Privacidade porque este processamento está conectado com o uso da SMART TV. \n2. Consentimento do processamento de dados\nA coleta, processamento e o uso de seus dados pessoais requerem o seu consentimento. \nSe você concordou com o uso de seus dados pessoais com o objetivo de melhorar os Serviços, seu consentimento teve a seguinte redação: \n“Consentimento da coleta de informações, tempo de uso diário do SMART TV, lista de canais DTV, lista de canais favoritos, tempo de visita e canais visualizados para fins de análise de hábitos de usuários para melhorar os Serviços ou para analisar quantos usuários online a empresa tem por dia / mês / ano e para compartilhar esta informação comas emissoras de TV”. \nSe você concordou com o uso de seus dados pessoais para propagandas adaptadas aos seus interesses, seu consentimento teve a seguinte descrição: \n\"Eu concordo com a coleta, processamento e uso do meu tipo de cliente e país com a finalidade de receber anúncios apropriados\".\nO consentimento é voluntário e você ainda poderá usar os Serviços se você não consentir. No entanto, você pode ver propagandas e outros conteúdos que não são adaptados às suas preferências. Independentemente do seu consentimento, a Empresa se reserva o direito de coletar, processar ou usar os dados acima, na medida permitida pela lei aplicável. \n Você pode retirar seu consentimento para qualquer um dos itens acima com efeito para o futuro a qualquer momento. Você pode opor-se ao uso de seus dados pessoais para pesquisa de marketing, mercado ou opinião e à adaptação dos Serviços às suas necessidades. Para retirar o seu consentimento, altere as configurações de privacidade da sua SMART TV. \n3. Dados pessoais coletados\n Independentemente do seu consentimento, a Empresa coleta, processa, armazena e usa as seguintes categorias de dados: \nDevice-ID: Sua SMART TV armazena um número único fixo que nos permite identificar e autenticar o Smart TV quando você usa os Serviços. Esse número é chamado de Device-ID. O Device-ID será fornecido ao nosso parceiro de serviço para fornecer os Serviços. Nós também fornecemos o Device-ID para parceiros de conteúdo selecionados para fins de autenticação. Esses parceiros de conteúdo usam o Device-ID para autenticar seu Smart TV para acessar os serviços fornecidos por um parceiro de conteúdo. \nEndereço IP e endereço MAC: Sua TV inteligente receberá um endereço IP ao acessar a Internet. Este endereço IP será transmitido a nós e processado por nós sempre que a SMART TV solicitar informações ou dados dos Serviços. Se o seu Smart TV estiver atrás de um roteador (por exemplo, em uma rede doméstica local ou WLAN local), podemos coletar e processar o endereço IP desse roteador. O endereço MAC é um número exclusivo atribuído a cada interface de rede da sua TV inteligente. O endereço MAC também será coletado e processado por nós quando o Smart TV solicitar informações ou dados dos Serviços. \nDados de solicitação de serviço: sempre que você conecta seu Smart TV à Internet e ative o Smart TV, ele se conectará automaticamente aos Serviços, que são gerenciados pelo nosso parceiro de serviço. Sua TV inteligente será autenticada como certificada para acesso aos Serviços. Para fins de autenticação, os Serviços armazenam um ou mais identificadores numéricos únicos relacionados à sua TV inteligente. Ao se conectar ao Serviço, o Smart TV transmitirá o endereço IP que foi atribuído e transmitirá informações específicas do dispositivo (modelo do SMART TV, versão de software) para verificar se as atualizações de software estão disponíveis. \n Configurações de serviço: Como parte da funcionalidade regular dos Serviços, você pode organizar manualmente a ordem em que os Serviços são exibidos pelos Serviços. Nosso parceiro de serviço armazenará seu arranjo e outras preferências que você pode configurar durante o uso dos Serviços. Essas informações serão vinculadas ao Device-ID. \nInformações específicas do dispositivo: a Smart TV armazena várias informações sobre si e sua configuração. Esta informação inclui o tipo Smart TV, a versão do sistema de operação do Smart TV, a resolução do painel, o ID do projeto (ou seja, informações sobre os arquivos de configuração), o agente do usuário, o nome do navegador, a versão do navegador e o idioma e país que foram configurados no Smart TV. Esta informação será usada por nós e será fornecida ao nosso parceiro de serviço e parceiros de conteúdo. \n Publicidade: os Serviços podem atender propagandas. Esses anúncios são atendidos por nós, ou por terceiros usando o inventário de publicidade atribuído por nós. Todas as propagandas são servidas por meio de, ou via, nosso servidor de publicidade, que cumpre um papel de coordenação para servir propagandas. Nosso servidor de publicidade ou o servidor de publicidade de terceiros pode configurar um cookie no Smart TV. Consulte a Política de cookies para obter mais informações sobre esses cookies. \n Serviço e tráfego de parceiros de conteúdo: quando você usa os Serviços, a sua TV inteligente solicitará dados dos Serviços através da Internet. Como parte desses pedidos, seu endereço IP como descrito acima e o idioma e o país que foi configurado no seu Smart TV serão transmitidos ao nosso parceiro de serviço. Nosso parceiro de serviço processará os respectivos dados de acordo com sua política de privacidade. \nSegunda tela: se você usar o nosso aplicativo de segunda tela (T-Cast), os controles que você ativou no aplicativo e as configurações de país e idioma, lista de canais DTV, listas de canais favoritos, listas de agendamento, Device-ID, canal atual, versão de protocolo e endereço IP de sua TV inteligente será coletada e processada por nós em nossos servidores. Nossos servidores, em seguida, controlarão sua TV inteligente, conforme indicado por você no aplicativo da segunda tela. \nHbbTV - \"Botão vermelho\": as emissoras de TV podem enviar informações adicionais com o sinal de TV. Se a SMART TV receber instruções específicas em tais informações adicionais e se estiver conectado à Internet, o SMART TV irá baixar uma imagem ou página pequena do site da Estação e exibi-la juntamente com a informação para pressionar o \"Botão vermelho\" no seu controle remoto se você deseja usar serviços adicionais fornecidos pela Estação. Ao transferir a imagem do site da Emissora, a SMART TV transmitirá alguns dados pessoais, ou seja, a lista de canais DTV, o canal atual, a tabela de informações do evento, a hora da TV, o endereço IP da sua SMART TV e os cookies armazenados (se houver). A Emissora é responsável pela coleta, processamento ou uso desses dados. Além disso, se você usar serviços adicionais oferecidos pela emissora, poderá se coletado outros dados pessoais (por exemplo, quais vídeos sob demanda que você assiste, as notícias que você leu, etc.). \n\n4. Propósitos para os quais processamos ou usamos seus dados pessoais\nProcessamos os dados coletados para os seguintes fins: \n• Fornecer os serviços: usamos o endereço IP e o endereço MAC, o ID do dispositivo, a versão do sistema de operação do Smart TV, o tipo de cliente da sua TV inteligente e a resolução do painel, a ID do projeto (ou seja, informações sobre os arquivos de configuração), sua lista de canais DTV, canais visualizados, fuso horário, configurações de país e idioma para fornecer a sua TV acesso a serviços fornecidos pelos parceiros de conteúdo. Os propósitos incluem (mas não estão limitados a) autenticação, fornecendo serviços baseados em localização para você (por exemplo, previsões meteorológicas); manipulação de abusos, gerenciamento de incidentes de segurança, monitoramento da disponibilidade dos Serviços e fornecimento de serviços de backup das preferências do usuário. \n• Autenticação: usamos o ID do dispositivo e o endereço MAC para fins de autenticação. \n• Atualizações de software: cada vez que o seu Smart TV estiver ligado, ele nos fornecerá o endereço IP, ID do dispositivo, versão do software, tipo de cliente da sua TV inteligente, ID do projeto (ou seja, arquivos de configuração), ID do usuário, número de série para oferecer-lhe e fornecer-lhe as atualizações de software apropriadas. \n• Melhorando os Serviços: usamos dados de uso agregados e anônimos (ou seja, dados sobre sua interação com os Serviços) para melhorar a experiência do usuário nos Serviços. \n• Servindo anúncios: usamos a informação em cookies de publicidade para permitir que o sistema registre quais anúncios foram exibidos no seu Smart TV para garantir que você não receba muitos anúncios similares, e podemos resolver nossos arranjos comerciais com nossos parceiros de publicidade. Os anunciantes externos que atendem publicidades nos Serviços ou nos sites de parceiros de conteúdo após a coordenação do nosso servidor de publicidade também podem usar cookies para rastreá-lo em vários sites e para exibir anúncios que refletem suas preferências pessoais. \n• Otimização de propagandas: usamos dados relacionados a visualizações publicitárias e cliques em propagandas para otimizar a experiência publicitária dos consumidores no Serviço. \n• Descontos: fornecemos o Device-ID para parceiros de conteúdo selecionados para permitir que esses parceiros identifiquem em que medida eles podem fornecer acesso gratuito aos títulos de Vídeo por Demanda na coleção deles. \n• Aplicação da lei: Podemos ser obrigados a fornecer dados às autoridades policiais competentes ou aos tribunais de justiça. Se o fizermos, só o faremos sujeito a um instrumento jurídico vinculativo, como um mandado ou uma ordem judicial, o que nos obriga a cooperar com as autoridades competentes. \nO uso dos Serviços é possível usando pseudônimos, a menos que serviços específicos exigem que você forneça seu nome ou endereço de e-mail. \n5. Categorias de destinatários \nA Companhia compartilha seus dados pessoais coletados durante o uso dos Serviços apenas com os seguintes terceiros: \n• Com terceiros fornecedores de serviços de TV inteligente se você solicitar esses serviços (por exemplo, se você iniciar o aplicativo Netflix na sua SMART TV, podemos compartilhar seu endereço IP, endereço MAC, versão do software e nome do modelo de TV com a Netflix). \n• Com parceiros de conteúdo de terceiros se você solicitar determinado conteúdo fornecido por esses parceiros de conteúdo (por exemplo, para fornecer o serviço de TV IP GoLive, podemos compartilhar o tipo de cliente da TV, o endereço IP e as configurações de idioma com a entidade jurídica que fornece o GoLive serviço). \n• Na medida em que tenha consentido na partilha de dados pessoais específicos com terceiros acima, a Empresa irá compartilhar seus dados pessoais com esses terceiros. \n• Com fornecedores de serviços de terceirização como processadores de dados que ajudam a Companhia a fornecer os Serviços. \nA Companhia compartilha seus dados pessoais com outros terceiros somente se a Empresa for obrigada a fazê-lo com base em requisitos legais (por exemplo, para tribunais ou autoridades de acusação criminal), você concordou com a respectiva partilha ou a partilha é legalmente conforme a lei aplicável. \n6. Países nos quais seus dados serão processados \nA empresa ou alguns dos destinatários de seus dados pessoais listados acima podem estar localizados fora da Área Econômica da América do Sul (ou seja, nos seguintes países: República Popular da China, Estados Unidos da América). Os seus dados pessoais podem ser tratados em países que não são reconhecidos como fornecendo um nível adequado de proteção dos dados pessoais, em conformidade com a Direciva 95/46 / CE do Parlamento Europeu e do Conselho, de 24 de Outubro de 1995, relativa à proteção das pessoas no que diz respeito ao processamento de dados pessoais e à livre circulação desses dados. \n7. Seus direitos \nVocê pode entrar em contato com a Empresa para receber informações sobre seus dados pessoais processados pela Empresa e exercer seus direitos legais sobre acesso, retificação, exclusão e bloqueio de seus dados pessoais e se opor ao processamento de seus dados pessoais para fins de marketing ou pesquisa de mercado ou de opinião. \n8. Mudanças na Política de Privacidade \nPara melhorar nossos Serviços, podemos exigir alterações nesta Política de Privacidade - por exemplo, pela implementação de novas tecnologias ou pela introdução de novos serviços. Reservamo-nos o direito de alterar ou complementar esta Política de Privacidade a qualquer momento. \n9. Informações de contato \nSe você tiver alguma dúvida sobre a Política de Privacidade ou gostaria de reclamar sobre o nosso tratamento de seus dados pessoais, entre em contato conosco usando um dos seguintes detalhes de contato: \nE-mail: FRsupport@tcl.com \nVersão: 1.0 \n"];
var privacyPolicyTerms = [
    "Ativar serviço de Smart TV.",
    "Eu concordo com a coleta, processamento e uso do horário de início do meu dispositivo, lista de canais DTV, lista de canais favoritos, tempo de visita e canais visualizados, com o objetivo de analisar os hábitos dos usuários para melhorar os serviços e/ou analisar quantos usuários on-line a TCL tem por dia/mês/ano, e também com o compartilhamento destas informações com as emissoras de TV.",
    "Ativar serviço de recomendações.",
    "Ativar o aplicativo de segunda tela para dispositivos móveis.",
    "Ativar atualizações de software automáticas.",
    "Ativar serviço FreeviewPlay"
];
var privacyPolicyTips = [
    "Todos serviços de Smart TV serão desativados.",
    "O serviço HbbTV fornecido pelos canais de TV será desativado quando o sintonizador integrado for usado.",
    "O serviço de recomendações de programas de TV e conteúdo será desativado.",
    "O aplicativo de segunda tela será desativado.",
    "A TV não verificará automaticamente as atualizações de software e novas funcionalidades.",
    "O conteúdo de FreeviewPlay será desativado."
];
var privacyPolicyRemind = "Deve selecionar a caixa de verificação correspondente em Definições.";
var set = "Definir";
var copyShopDemoTips = ["Conectado por USB. Deseja copiar o vídeo para a memória flash?","Copiar vídeo para a memória flash","O vídeo foi copiado com sucesso.","Erro ao copiar o vídeo."];
var dataDeletionWords = ["Excluir seus dados do serviço da smart TV nos servidores de beck-end.","Observações: Os dados relacionados ao uso da smart TV serão excluídos um mês após você marcar este item. A exclusão não afeta os dados locais salvos na sua TV.","Não continuar a informar dados ao servidor da smart TV.","Observações:  Seus dados relacionados ao uso dos serviços da smart TV não serão mais transferidos para o servidor após você marcar este item. Sua TV não irá mais receber os serviços recomendados.","Para saber mais, acesse o site www.tcl.eu"];
var miracastWords = ["Conexão sem fio","Espelhar celular Android na TV","Clique para conectar","Essa função só está disponível para celulares Android"];
var miracastTips = ["Etapas da conexão","Abrir configurações do sistema","Mais formas de conectar \n / Outras conexões sem fio","Escolher exibição sem fio","Clique para conectar \n procurando"];