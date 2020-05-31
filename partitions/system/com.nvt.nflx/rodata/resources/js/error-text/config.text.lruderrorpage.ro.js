(function(){var e="English",t="Înapoi",n="Verificare reţea",r="Deconectare",i="Ieşire din Netflix",s="Este posibil ca dispozitivul tău să nu fie conectat la Internet. Asigură-te că funcţionează conexiunea. Se reîncearcă în ${retrytime} secunde.",o="Netflix a întâmpinat o eroare. Se reîncearcă în ${retrytime} secunde.",u={language:{name:"en",englishName:e,nativeName:e,isRtl:!1,language:"en",numberFormat:{pattern:{0:"-n",length:1},decimals:2,",":",",".":".",groupSizes:{0:3,length:1},"+":"+","-":"-",percent:{pattern:{0:"-n %",1:"n %",length:2},decimals:2,groupSizes:{0:3,length:1},",":",",".":".",symbol:"%"},currency:{pattern:{0:"($n)",1:"$n",length:2},decimals:2,groupSizes:{0:3,length:1},",":",",".":".",symbol:"$"}},calendar:{name:"Gregorian_USEnglish","/":"/","&#58;":":",firstDay:0,days:{names:{0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday",length:7},namesAbbr:{0:"Sun",1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat",length:7},namesShort:{0:"Su",1:"Mo",2:"Tu",3:"We",4:"Th",5:"Fr",6:"Sa",length:7}},months:{names:{0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December",12:"",length:13},namesAbbr:{0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec",12:"",length:13}},AM:{0:"AM",1:"am",2:"AM",length:3},PM:{0:"PM",1:"pm",2:"PM",length:3},eras:{0:{name:"A.D.",start:"",offset:0},length:1},twoDigitYearMax:2029,patterns:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",t:"h:mm tt",T:"h:mm:ss tt",f:"dddd, MMMM dd, yyyy h:mm tt",F:"dddd, MMMM dd, yyyy h:mm:ss tt",M:"MMMM dd",Y:"yyyy MMMM",S:"yyyy'-'MM'-'dd'T'HH':'mm':'ss"}},fontGroup:"WGL"},strings:{customerService:{signoutConfirmation:"Sigur doreşti să resetezi Netflix pe acest dispozitiv?",signoutSuccess:"Ai resetat cu succes acest dispozitiv.",legend:{back:t},device:{fields:{esn:"ESN",softwareVersion:"Versiune software",certVersion:"Versiune de certificare",netflixVersion:"Versiune Netflix",deviceModel:"Model dispozitiv",sdkVersion:"Versiune SDK",platformVersion:"Versiune platformă"},netflixVersionTmpl:"nrdapp ${nrdapp} / nrdlib ${nrdlib} / mdxlib ${mdxlib}",sdkVersionTmpl:"sdk ${sdk}"},contact:{title:"To contact Customer Service:",description:{webHelp:"Visit help.netflix.com."}},member:{fields:{name:"Nume",email:"E-mail"},nameTmpl:"${firstName} ${lastName}"},network:{fields:{dnsServers:"Servere DNS",wired:"Cu fir",wireless:"Fără fir"},"default":"Implicit: Da",ipAddressTmpl:"Adresă IP: ${address}",connectedWifiTmpl:"Conectat: ${connected} - ${ssid}",connectedTmpl:"Conectat: ${connected}",connected:{"true":"Da","false":"Nu"},name:"Nume: ${name}"},diagnostics:{results:{noInternet:"Este posibil ca dispozitivul tău să nu fie conectat la Internet. Asigură-te că funcţionează conexiunea.",noNetflix:"Nu s-a putut efectua conectarea la Netflix. Încearcă din nou sau reporneşte reţeaua de domiciliu şi dispozitivul de redare în flux. Pentru mai multe informaţii, vizitează netflix.com/nethelp.",noProblem:"Verificarea reţelei s-a efectuat cu succes."}},menu:{close:t,contact:"Customer service",member:"Membru",network:"Reţea",device:"Dispozitiv",diagnose:n,signout:r,exitnetflix:i,back:"Mergi înapoi",reset:"Resetare"},title:"Informaţii"},errorPage:{runningDiagnostics:"Netflix a întâmpinat o eroare. Se încearcă identificarea problemei.",runningDiagnosticsPs3:"Netflix a întâmpinat o eroare. Se încearcă identificarea problemei. Pentru a părăsi Netflix, apasă butonul PS al controlerului.",retryingNow:"Se reîncearcă acum conexiunea...",retryingBiep_pluralNoconnection:s,retryingBiepSingularNoconnection:s,retryingBiep_plural:o,retryingBiepSingular:o,retryingBiepCode:"Cod: ${code}"},networkDiagnostics:{error:{noNetflix:"Nu s-a putut efectua conectarea la Netflix. Încearcă din nou sau reporneşte reţeaua de domiciliu şi dispozitivul de redare în flux. Pentru mai multe informaţii, vizitează netflix.com/nethelp.<br/>Cod: ${code}",noInternet:"Este posibil ca dispozitivul tău să nu fie conectat la Internet. Asigură-te că funcţionează conexiunea şi încearcă din nou.<br/>Cod: ${code}",noNetflixPs3:"Nu s-a putut efectua conectarea la Netflix. Încearcă din nou sau reporneşte reţeaua de domiciliu şi dispozitivul de redare în flux. Pentru mai multe informaţii, vizitează netflix.com/nethelp. Pentru a părăsi Netflix, apasă butonul PS al controlerului.<br/>Cod: ${code}",noInternetPs3:"Este posibil ca dispozitivul tău să nu fie conectat la Internet. Asigură-te că funcţionează conexiunea şi încearcă din nou. Pentru a părăsi Netflix, apasă butonul PS al controlerului.<br/>Cod: ${code}"}},checkYourNetwork:{netflixServer:"Server Netflix ${number}",internetConnection:"Conexiune la Internet",runningCheck:"Verificare în curs...",checkYourNetwork:n,introDescription:"Testează-ţi conexiunea la Internet pentru a identifica problemele care te pot împiedica să foloseşti Netflix.",diagnosisFailure:"Nu a fost posibilă verificarea reţelei. Încearcă din nou sau vizitează www.netflix.com/nethelp."},signOut:{signOut:r,introDescription:"Ieşi din contul tău Netflix de pe acest dispozitiv."},exitNetflix:{header:i,description:"Închide aplicaţia Netflix."},responses:{confirm:"OK",exit:"Ieşire",no:"Nu",reactivate:r,retry:"Reîncercare",yes:"Da",customerService:"Detalii suplimentare"},reactivate:{getNewCredentialsError:"Se pare că serviciul Netflix a fost dezactivat pe acest dispozitiv. Este posibil să existe o problemă cu contul tău sau ca dispozitivul tău să fi fost dezactivat prin intermediul Netflix.com."},exitDialog:"Doreşti să părăseşti Netflix?",exitingMessage:"În curs de părăsire...",reset:{title:"Resetare Netflix",description:"Resetează Netflix la starea iniţială pe acest dispozitiv."},legend:{labels:{kids:"Kids",menu:"Meniu",back:t}}}};util.localization.addCulture(u.language.name,u)})();