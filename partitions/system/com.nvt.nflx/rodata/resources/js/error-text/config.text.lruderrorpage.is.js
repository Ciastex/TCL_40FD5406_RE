(function(){var e="English",t="Til baka",n="Athuga nettengingu",r="Skrá út",i="Loka Netflix",s={language:{name:"en",englishName:e,nativeName:e,isRtl:!1,language:"en",numberFormat:{pattern:{0:"-n",length:1},decimals:2,",":",",".":".",groupSizes:{0:3,length:1},"+":"+","-":"-",percent:{pattern:{0:"-n %",1:"n %",length:2},decimals:2,groupSizes:{0:3,length:1},",":",",".":".",symbol:"%"},currency:{pattern:{0:"($n)",1:"$n",length:2},decimals:2,groupSizes:{0:3,length:1},",":",",".":".",symbol:"$"}},calendar:{name:"Gregorian_USEnglish","/":"/","&#58;":":",firstDay:0,days:{names:{0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday",length:7},namesAbbr:{0:"Sun",1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat",length:7},namesShort:{0:"Su",1:"Mo",2:"Tu",3:"We",4:"Th",5:"Fr",6:"Sa",length:7}},months:{names:{0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December",12:"",length:13},namesAbbr:{0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec",12:"",length:13}},AM:{0:"AM",1:"am",2:"AM",length:3},PM:{0:"PM",1:"pm",2:"PM",length:3},eras:{0:{name:"A.D.",start:"",offset:0},length:1},twoDigitYearMax:2029,patterns:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",t:"h:mm tt",T:"h:mm:ss tt",f:"dddd, MMMM dd, yyyy h:mm tt",F:"dddd, MMMM dd, yyyy h:mm:ss tt",M:"MMMM dd",Y:"yyyy MMMM",S:"yyyy'-'MM'-'dd'T'HH':'mm':'ss"}},fontGroup:"WGL"},strings:{customerService:{signoutConfirmation:"Viltu örugglega endurstilla Netflix í þessu tæki?",signoutSuccess:"Tækið hefur verið endurstillt.",legend:{back:t},device:{fields:{esn:"ESN",softwareVersion:"Hugbúnaðarútgáfa",certVersion:"Vottunarútgáfa",netflixVersion:"Netflix-útgáfa",deviceModel:"Gerð tækis",sdkVersion:"SDK-útgáfa",platformVersion:"Verkvangsútgáfa"},netflixVersionTmpl:"nrdapp ${nrdapp} / nrdlib ${nrdlib} / mdxlib ${mdxlib}",sdkVersionTmpl:"sdk ${sdk}"},contact:{title:"To contact Customer Service:",description:{webHelp:"Visit help.netflix.com."}},member:{fields:{name:"Nafn",email:"Tölvupóstur"},nameTmpl:"${firstName} ${lastName}"},network:{fields:{dnsServers:"DNS-netþjónar",wired:"Þráðtengt",wireless:"Þráðlaust"},"default":"Sjálfgefin: Já",ipAddressTmpl:"IP-tala: ${address}",connectedWifiTmpl:"Tengt: ${connected} - ${ssid}",connectedTmpl:"Tengt: ${connected}",connected:{"true":"Já","false":"Nei"},name:"Nafn: ${name}"},diagnostics:{results:{noInternet:"Það kann að vera að tækið þitt sé ekki tengt internetinu. Athugaðu hvort tengingin sé virk.",noNetflix:"Gat ekki tengst við Netflix. Reyndu aftur eða endurræstu heimanetkerfið þitt og streymistækið. Frekari upplýsingar eru á netflix.com/nethelp.",noProblem:"Netathugun heppnaðist."}},menu:{close:t,contact:"Customer service",member:"Meðlimur",network:"Netkerfi",device:"Tæki",diagnose:n,signout:r,exitnetflix:i,back:"Fara til baka",reset:"Endurstilla"},title:"Upplýsingar"},errorPage:{runningDiagnostics:"Netflix fann villu. Reynir að finna vandamálið.",runningDiagnosticsPs3:"Netflix fann villu. Reynir að finna vandamálið. Til að fara út úr Netflix ýtirðu á PS hnappinn á fjarstýringunni.",retryingNow:"Reynir aftur tengingu núna...",retryingBiep_pluralNoconnection:"Það kann að vera að tækið þitt sé ekki tengt internetinu. Athugaðu hvort tengingin er virk. Reynir aftur eftir ${retrytime} sekúndur.",retryingBiepSingularNoconnection:"Það kann að vera að tækið þitt sé ekki tengt internetinu. Athugaðu hvort tengingin er virk. Reynir aftur eftir ${retrytime} sekúndu.",retryingBiep_plural:"Netflix fann villu. Reynir aftur eftir ${retrytime} sekúndur.",retryingBiepSingular:"Netflix fann villu. Reynir aftur eftir ${retrytime} sekúndu.",retryingBiepCode:"Kóði: ${code}"},networkDiagnostics:{error:{noNetflix:"Gat ekki tengst við Netflix. Reyndu aftur eða endurræstu heimanetið þitt og streymistækið. Frekari upplýsingar eru á netflix.com/nethelp.<br/>Kóði: ${code}",noInternet:"Það kann að vera að tækið þitt sé ekki tengt internetinu. Athugaðu hvort tengingin er virk og reyndu aftur.<br/>Kóði: ${code}",noNetflixPs3:"Gat ekki tengst við Netflix. Reyndu aftur eða endurræstu heimanetið þitt og streymistækið. Frekari upplýsingar eru á netflix.com/nethelp. Til að fara út úr Netflix ýtirðu á PS-hnappinn á fjarstýringunni.<br/>Kóði: ${code}",noInternetPs3:"Það kann að vera að tækið þitt sé ekki tengt internetinu. Gættu að því að tengingin sé virk og reyndu aftur. Til að fara út úr Netflix ýtirðu á PS-hnappinn á fjarstýringunni.<br/>Kóði: ${code}"}},checkYourNetwork:{netflixServer:"Netþjónn Netflix ${number}",internetConnection:"Nettenging",runningCheck:"Athugun í gangi...",checkYourNetwork:n,introDescription:"Prófaðu hvort það eru einhver vandamál með nettenginguna sem koma í veg fyrir að þú getir notað Netflix.",diagnosisFailure:"Ekki tókst að athuga netið þitt. Reyndu aftur eða farðu á www.netflix.com/nethelp."},signOut:{signOut:r,introDescription:"Skrá þig út af Netflix-reikningnum í þessu tæki."},exitNetflix:{header:i,description:"Loka Netflix-forritinu."},responses:{confirm:"Í lagi",exit:"Hætta",no:"Nei",reactivate:r,retry:"Reyna aftur",yes:"Já",customerService:"Frekari upplýsingar"},reactivate:{getNewCredentialsError:"Netflix virðist hafa verið afvirkjað á þessu tæki. Það gæti verið vandamál með reikninginn þinn eða ef til vill var tækið afvirkjað á Netflix.com."},exitDialog:"Viltu hætta í Netflix?",exitingMessage:"Hættir...",reset:{title:"Endurstilla Netflix",description:"Endurstilla Netflix í upprunalegt horf í þessu tæki."},legend:{labels:{kids:"Kids",menu:"Valmynd",back:t}}}};util.localization.addCulture(s.language.name,s)})();