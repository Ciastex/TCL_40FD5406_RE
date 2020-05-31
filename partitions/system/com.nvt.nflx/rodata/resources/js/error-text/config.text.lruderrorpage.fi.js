(function(){var e="Takaisin",t="Kyllä",n="Tarkista verkko",r="Kirjaudu ulos",i="Poistu Netflixistä",s="Netflix-virhe. Yritetään uudelleen ${retrytime} sekunnin kuluttua.",o={language:{name:"fi",englishName:"Finnish",nativeName:"suomi",isRtl:!1,language:"fi",numberFormat:{pattern:{0:"-n",length:1},decimals:2,",":" ",".":",",groupSizes:{0:3,length:1},"+":"+","-":"-",percent:{pattern:{0:"-n %",1:"n %",length:2},decimals:2,groupSizes:{0:3,length:1},",":" ",".":",",symbol:"%"},currency:{pattern:{0:"-n $",1:"n $",length:2},decimals:2,groupSizes:{0:3,length:1},",":" ",".":",",symbol:"€"}},calendar:{name:"Gregorian_USEnglish","/":".","&#58;":":",firstDay:1,days:{names:{0:"sunnuntai",1:"maanantai",2:"tiistai",3:"keskiviikko",4:"torstai",5:"perjantai",6:"lauantai",length:7},namesAbbr:{0:"su",1:"ma",2:"ti",3:"ke",4:"to",5:"pe",6:"la",length:7},namesShort:{0:"su",1:"ma",2:"ti",3:"ke",4:"to",5:"pe",6:"la",length:7}},months:{names:{0:"tammikuu",1:"helmikuu",2:"maaliskuu",3:"huhtikuu",4:"toukokuu",5:"kesäkuu",6:"heinäkuu",7:"elokuu",8:"syyskuu",9:"lokakuu",10:"marraskuu",11:"joulukuu",12:"",length:13},namesAbbr:{0:"tammi",1:"helmi",2:"maalis",3:"huhti",4:"touko",5:"kesä",6:"heinä",7:"elo",8:"syys",9:"loka",10:"marras",11:"joulu",12:"",length:13}},AM:"",PM:"",eras:{0:{name:"A.D.",start:"",offset:0},length:1},twoDigitYearMax:2029,patterns:{d:"d.M.yyyy",D:"d. MMMM'ta 'yyyy",t:"H:mm",T:"H:mm:ss",f:"d. MMMM'ta 'yyyy H:mm",F:"d. MMMM'ta 'yyyy H:mm:ss",M:"d. MMMM'ta'",Y:"MMMM yyyy",S:"yyyy'-'MM'-'dd'T'HH':'mm':'ss"}},fontGroup:"WGL"},strings:{customerService:{signoutConfirmation:"Oletko varma että haluat saattaa Netflix-asetukset alkuperäistilaan?",signoutSuccess:"Alkuperäistilan palautus onnistui.",legend:{back:e},device:{fields:{esn:"ESN",softwareVersion:"Ohjelmistoversio",certVersion:"Sertifiointiversio",netflixVersion:"Netflix-versio",deviceModel:"Laitteen malli",sdkVersion:"SDK-versio",platformVersion:"Alustaversio"},netflixVersionTmpl:"nrdapp ${nrdapp} / nrdlib ${nrdlib} / mdxlib ${mdxlib}",sdkVersionTmpl:"sdk ${sdk}"},contact:{title:"To contact Customer Service:",description:{webHelp:"Visit help.netflix.com."}},member:{fields:{name:"Nimi",email:"Sähköposti"},nameTmpl:"${firstName} ${lastName}"},network:{fields:{dnsServers:"DNS-palvelimet",wired:"Johto",wireless:"Johdoton"},"default":"Oletus: Kyllä",ipAddressTmpl:"IP-osoite: ${address}",connectedWifiTmpl:"Yhteys: ${connected} - ${ssid}",connectedTmpl:"Yhteys: ${connected}",connected:{"true":t,"false":"Ei"},name:"Nimi: ${name}"},diagnostics:{results:{noInternet:"Laitteesi ei ehkä ole internetyhteydessä. Tarkista yhteys.",noNetflix:"Netflix-yhteyden luominen ei onnistunut. Yritä uudelleen, tai käynnistä uudelleen internetyhteytesi ja suoratoistoon käytettävä laitteesi. Lisätietoja osoitteessa netflix.com/nethelp.",noProblem:"Verkkoyhteystarkistus onnistui."}},menu:{close:e,contact:"Customer service",member:"Jäsen",network:"Verkko",device:"Laite",diagnose:n,signout:r,exitnetflix:i,back:"Siirry takaisin",reset:"Palauta"},title:"Tiedot"},errorPage:{runningDiagnostics:"Netflix-virhe. Ongelman tarkistus on menossa.",runningDiagnosticsPs3:"Netflix-virhe. Ongelman tarkistus on menossa. Poistu Netflixistä painamalla PS-näppäintä ohjaimessa.",retryingNow:"Yritetään yhteyttä uudelleen nyt...",retryingBiep_pluralNoconnection:"Laitteesi ei ehkä ole internetyhteydessä. Tarkista yhteys.Yritetään uudelleen ${retrytime} sekunnin kuluttua.",retryingBiepSingularNoconnection:"Laitteesi ei ehkä ole internetyhteydessä. Tarkista yhteys. Yritetään uudelleen ${retrytime} sekunnin kuluttua.",retryingBiep_plural:s,retryingBiepSingular:s,retryingBiepCode:"Koodi: ${code}"},networkDiagnostics:{error:{noNetflix:"Netflix-yhteyden luominen ei onnistunut. Yritä uudelleen, tai käynnistä uudelleen internetyhteytesi ja suoratoistoon käytettävä laitteesi. Lisätietoja osoitteessa netflix.com/nethelp.<br/>Koodi: ${code}",noInternet:"Laitteesi ei ehkä ole internetyhteydessä. Tarkista yhteys ja yritä uudelleen.<br/>Code: ${code}",noNetflixPs3:"Netflix-yhteyden luominen ei onnistunut. Yritä uudelleen, tai käynnistä uudelleen internetyhteytesi ja suoratoistoon käytettävä laitteesi. Lisätietoja osoitteessa netflix.com/nethelp. Poistu Netflixistä painamalla PS-näppäintä ohjaimessa.<br/>Koodi: ${code}",noInternetPs3:"Laitteesi ei ehkä ole internetyhteydessä. Tarkista yhteys ja yritä uudelleen. Poistu Netflixistä painamalla PS-näppäintä ohjaimessa.<br/>Koodi: ${code}"}},checkYourNetwork:{netflixServer:"Netflix-palvelin ${number}",internetConnection:"Internetyhteys",runningCheck:"Tarkistetaan...",checkYourNetwork:n,introDescription:"Testaa internetyhteytesi sen varalta että siinä on Netflixin käytön estävä ongelma.",diagnosisFailure:"Verkkoyhteyden tarkistaminen ei onnistu. Yritä uudelleen tai käy osoitteessa www.netflix.com/nethelp."},signOut:{signOut:r,introDescription:"Kirjaudu ulos Netflix-tililtä tällä laitteella."},exitNetflix:{header:i,description:"Sulje Netflix-sovellus."},responses:{confirm:"OK",exit:"Poistu",no:"Ei",reactivate:r,retry:"Yritä uudelleen",yes:t,customerService:"Lisätietoja"},reactivate:{getNewCredentialsError:"Näyttää siltä, että Netflix on poistettu käytöstä tästä laitteesta. Syy saattaa liittyä tiliisi, tai ehkä laitteesi on poistettu käytöstä osoitteessa Netflix.com."},exitDialog:"Haluatko poistua Netflixistä?",exitingMessage:"Poistutaan...",reset:{title:"Palauta Netflixin oletusasetukset",description:"Palauta Netflixin oletusasetukset tässä laitteessa alkuperäiseen tilaan."},legend:{labels:{kids:"Kids",menu:"Valikko",back:e}}}};util.localization.addCulture(o.language.name,o)})();