(function(){var e="Retroceder",t="Verifique a sua rede",n="Terminar sessão",r="Sair do Netflix",i={language:{name:"pt-PT",englishName:"Portuguese (Portugal)",nativeName:"português (Portugal)",isRtl:!1,language:"pt",numberFormat:{pattern:{0:"-n",length:1},decimals:2,",":".",".":",",groupSizes:{0:3,length:1},"+":"+","-":"-",percent:{pattern:{0:"-n%",1:"n%",length:2},decimals:2,groupSizes:{0:3,length:1},",":".",".":",",symbol:"%"},currency:{pattern:{0:"-n $",1:"n $",length:2},decimals:2,groupSizes:{0:3,length:1},",":".",".":",",symbol:"€"}},calendar:{name:"Gregorian_USEnglish","/":"-","&#58;":":",firstDay:1,days:{names:{0:"domingo",1:"segunda-feira",2:"terça-feira",3:"quarta-feira",4:"quinta-feira",5:"sexta-feira",6:"sábado",length:7},namesAbbr:{0:"dom",1:"seg",2:"ter",3:"qua",4:"qui",5:"sex",6:"sáb",length:7},namesShort:{0:"D",1:"S",2:"T",3:"Q",4:"Q",5:"S",6:"S",length:7}},months:{names:{0:"Janeiro",1:"Fevereiro",2:"Março",3:"Abril",4:"Maio",5:"Junho",6:"Julho",7:"Agosto",8:"Setembro",9:"Outubro",10:"Novembro",11:"Dezembro",12:"",length:13},namesAbbr:{0:"Jan",1:"Fev",2:"Mar",3:"Abr",4:"Mai",5:"Jun",6:"Jul",7:"Ago",8:"Set",9:"Out",10:"Nov",11:"Dez",12:"",length:13}},AM:"",PM:"",eras:{0:{name:"d.C.",start:"",offset:0},length:1},twoDigitYearMax:2029,patterns:{d:"dd-MM-yyyy",D:"dddd, d' de 'MMMM' de 'yyyy",t:"HH:mm",T:"HH:mm:ss",f:"dddd, d' de 'MMMM' de 'yyyy HH:mm",F:"dddd, d' de 'MMMM' de 'yyyy HH:mm:ss",M:"d/M",Y:"MMMM' de 'yyyy",S:"yyyy'-'MM'-'dd'T'HH':'mm':'ss"}},fontGroup:"WGL"},strings:{customerService:{signoutConfirmation:"Tem a certeza de que deseja redefinir o Netflix neste dispositivo?",signoutSuccess:"O dispositivo foi redefinido com sucesso.",legend:{back:e},device:{fields:{esn:"ESN",softwareVersion:"Versão do software",certVersion:"Versão da certificação",netflixVersion:"Versão do Netflix",deviceModel:"Modelo do dispositivo",sdkVersion:"Versão SDK",platformVersion:"Versão da plataforma"},netflixVersionTmpl:"nrdapp ${nrdapp} / nrdlib ${nrdlib} / mdxlib ${mdxlib}",sdkVersionTmpl:"sdk ${sdk}"},contact:{title:"To contact Customer Service:",description:{webHelp:"Visit help.netflix.com."}},member:{fields:{name:"Nome",email:"Email"},nameTmpl:"${firstName} ${lastName}"},network:{fields:{dnsServers:"Servidores DNS",wired:"Com fios",wireless:"Sem fios"},"default":"Predefinição: Sim",ipAddressTmpl:"Endereço IP: ${address}",connectedWifiTmpl:"Ligado: ${connected} - ${ssid}",connectedTmpl:"Ligado: ${connected}",connected:{"true":"Sim","false":"Não"},name:"Nome: ${name}"},diagnostics:{results:{noInternet:"O seu dispositivo pode não estar ligado à Internet. Certifique-se de que a sua ligação está a funcionar.",noNetflix:"Não foi possível ligar ao Netflix. Tente novamente mais tarde ou reinicie a sua rede doméstica e dispositivo de streaming. Para mais informações, visite netflix.com/nethelp.",noProblem:"Verificação de rede bem sucedida."}},menu:{close:e,contact:"Customer service",member:"Assinante",network:"Rede",device:"Dispositivo",diagnose:t,signout:n,exitnetflix:r,back:e,reset:"Redefinir"},title:"Informações"},errorPage:{runningDiagnostics:"O Netflix encontrou um erro. A tentar determinar o problema.",runningDiagnosticsPs3:"O Netflix encontrou um erro. A tentar determinar o problema. Para sair do Netflix, pressione o botão PS do seu comando.",retryingNow:"A voltar a tentar estabelecer ligação...",retryingBiep_pluralNoconnection:"O seu dispositivo pode não estar ligado à Internet. Certifique-se de que a sua ligação está a funcionar. A voltar a tentar em ${retrytime} segundos.",retryingBiepSingularNoconnection:"O seu dispositivo pode não estar ligado à Internet. Certifique-se de que a sua ligação está a funcionar. A voltar a tentar em ${retrytime} segundo.",retryingBiep_plural:"O Netflix encontrou um erro. A voltar a tentar em ${retrytime} segundos.",retryingBiepSingular:"O Netflix encontrou um erro. A voltar a tentar em ${retrytime} segundo.",retryingBiepCode:"Código: ${code}"},networkDiagnostics:{error:{noNetflix:"Não foi possível ligar ao Netflix. Tente novamente mais tarde ou reinicie a sua rede doméstica e dispositivo de streaming. Para mais informações, visite netflix.com/nethelp.<br/>Código: ${code}",noInternet:"O seu dispositivo pode não estar ligado à Internet. Certifique-se de que a sua ligação está a funcionar e tente novamente.<br/>Código: ${code}",noNetflixPs3:"Não foi possível ligar ao Netflix. Tente novamente mais tarde ou reinicie a sua rede doméstica e dispositivo de streaming. Para mais informações, visite netflix.com/nethelp. Para sair do Netflix, pressione o botão PS do seu comando.<br/>Código: ${code}",noInternetPs3:"O seu dispositivo pode não estar ligado à Internet. Certifique-se de que a sua ligação está a funcionar e tente novamente. Para sair do Netflix, pressione o botão PS do seu comando.<br/>Código: ${code}"}},checkYourNetwork:{netflixServer:"Servidor Netflix ${number}",internetConnection:"Ligação à internet",runningCheck:"A executar verificação...",checkYourNetwork:t,introDescription:"Teste a sua ligação à Internet relativamente a quaisquer problemas que possam impedi-lo de utilizar o Netflix.",diagnosisFailure:"Não foi possível verificar a sua rede. Tente novamente ou visite www.netflix.com/nethelp."},signOut:{signOut:n,introDescription:"Termina a sessão na sua conta Netflix neste dispositivo."},exitNetflix:{header:r,description:"Fecha a aplicação Netflix."},responses:{confirm:"OK",exit:"Sair",no:"Não",reactivate:n,retry:"Tentar novamente",yes:"Sim",customerService:"Mais informações"},reactivate:{getNewCredentialsError:"Aparentemente o Netflix foi desactivado neste dispositivo. Pode ser um problema na sua conta ou, talvez, o seu dispositivo foi desactivado em Netflix.com."},exitDialog:"Quer sair do Netflix?",exitingMessage:"A sair...",reset:{title:"Redefinir o Netflix",description:"Redefinir o Netflix neste dispositivo e remover todos os dados do assinante."},legend:{labels:{kids:"Kids",menu:"Menu",back:e}}}};util.localization.addCulture(i.language.name,i)})();