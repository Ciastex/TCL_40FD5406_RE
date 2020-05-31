(function(){var e="English",t="Prapa",n="Kontrolloni rrjetin tuaj",r="Dilni",i="Dilni nga Netflix",s={language:{name:"en",englishName:e,nativeName:e,isRtl:!1,language:"en",numberFormat:{pattern:{0:"-n",length:1},decimals:2,",":",",".":".",groupSizes:{0:3,length:1},"+":"+","-":"-",percent:{pattern:{0:"-n %",1:"n %",length:2},decimals:2,groupSizes:{0:3,length:1},",":",",".":".",symbol:"%"},currency:{pattern:{0:"($n)",1:"$n",length:2},decimals:2,groupSizes:{0:3,length:1},",":",",".":".",symbol:"$"}},calendar:{name:"Gregorian_USEnglish","/":"/","&#58;":":",firstDay:0,days:{names:{0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday",length:7},namesAbbr:{0:"Sun",1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat",length:7},namesShort:{0:"Su",1:"Mo",2:"Tu",3:"We",4:"Th",5:"Fr",6:"Sa",length:7}},months:{names:{0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December",12:"",length:13},namesAbbr:{0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec",12:"",length:13}},AM:{0:"AM",1:"am",2:"AM",length:3},PM:{0:"PM",1:"pm",2:"PM",length:3},eras:{0:{name:"A.D.",start:"",offset:0},length:1},twoDigitYearMax:2029,patterns:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",t:"h:mm tt",T:"h:mm:ss tt",f:"dddd, MMMM dd, yyyy h:mm tt",F:"dddd, MMMM dd, yyyy h:mm:ss tt",M:"MMMM dd",Y:"yyyy MMMM",S:"yyyy'-'MM'-'dd'T'HH':'mm':'ss"}},fontGroup:"WGL"},strings:{customerService:{signoutConfirmation:"A jeni të sigurt që doni ta resetoni Netflix në këtë paisje?",signoutSuccess:"Paisja u resetua me sukses.",legend:{back:t},device:{fields:{esn:"ESN",softwareVersion:"Versioni i softuerit",certVersion:"Versioni i certifikimit",netflixVersion:"Versioni i Netflix",deviceModel:"Modeli i paisjes",sdkVersion:"Versioni i SDK-së",platformVersion:"Versioni i platformës"},netflixVersionTmpl:"nrdapp ${nrdapp} / nrdlib ${nrdlib} / mdxlib ${mdxlib}",sdkVersionTmpl:"sdk ${sdk}"},contact:{title:"To contact Customer Service:",description:{webHelp:"Visit help.netflix.com."}},member:{fields:{name:"Emri",email:"Emaili"},nameTmpl:"${firstName} ${lastName}"},network:{fields:{dnsServers:"Serverët e DNS-së",wired:"Me kabell",wireless:"Pa kabell"},"default":"I parazgjedhur: Po",ipAddressTmpl:"Adresa IP: ${address}",connectedWifiTmpl:"I lidhur: ${connected} - ${ssid}",connectedTmpl:"I lidhur: ${connected}",connected:{"true":"Po","false":"Jo"},name:"Emri: ${name}"},diagnostics:{results:{noInternet:"Paisja juaj mund të mos jetë e lidhur me internetin. Sigurohuni që lidhja juaj po funksionon.",noNetflix:"Lidhja me Netflix nuk mund të realizohej. Provoni përsëri ose rinisni rrjetin e shtëpisë dhe paisjen e transmetimit. Për më shumë informacione, vizitoni netflix.com/nethelp.",noProblem:"Kontrolli i rrjetit me sukses."}},menu:{close:t,contact:"Customer service",member:"Anëtari",network:"Rrjeti",device:"Paisja",diagnose:n,signout:r,exitnetflix:i,back:"Kthehuni prapa",reset:"Resetoni"},title:"Informacione"},errorPage:{runningDiagnostics:"Netflix ka ndeshur një gabim. Në përpjekje për të përcaktuar problemin.",runningDiagnosticsPs3:"Netflix ka ndeshur një gabim. Në përpjekje për të përcaktuar problemin. Për të dalë nga Netflix, shtypni butonin PS në kontrolluesin tuaj.",retryingNow:"Duke riprovuar lidhjen ...",retryingBiep_pluralNoconnection:"Paisja juaj mund të mos jetë e lidhur me internetin. Sigurohuni që lidhja juaj është duke funksionuar. Do te riprovohet pas ${retrytime} sekondash.",retryingBiepSingularNoconnection:"Paisja juaj mund të mos jetë e lidhur me internetin. Sigurohuni që lidhja juaj është duke funksionuar. Do te riprovohet pas ${retrytime} sekonde.",retryingBiep_plural:"Netflix ka ndeshur një gabim. Do te riprovohet pas ${retrytime} sekondash.",retryingBiepSingular:"Netflix ka ndeshur një gabim. Do te riprovohet pas ${retrytime} sekonde.",retryingBiepCode:"Kodi: ${code}"},networkDiagnostics:{error:{noNetflix:"Lidhja me Netflix nuk mund të realizohej. Provoni përsëri ose rinisni rrjetin e shtëpisë dhe paisjen e transmetimit. Për më shumë informacione, vizitoni netflix.com/nethelp.<br/>Kodi: ${code}",noInternet:"Paisja juaj mund të mos jetë e lidhur me internetin. Sigurohuni që lidhja juaj është duke funksionuar dhe provoni përsëri.<br/>Kodi: ${code}",noNetflixPs3:"Lidhja me Netflix nuk mund të realizohej. Provoni përsëri ose rinisni rrjetin e shtëpisë dhe paisjen e transmetimit. Për më shumë informacione, vizitoni netflix.com/nethelp. Për të dalë nga Netflix, shtypni butonin PS në kontrolluesin tuaj.<br/>Kodi: ${code}",noInternetPs3:"Paisja juaj mund të mos jetë e lidhur me internetin. Sigurohuni që lidhja juaj është duke funksionuar dhe provoni përsëri. Për të dalë nga Netflix, shtypni butonin PS në kontrolluesin tuaj.<br/>Kodi: ${code}"}},checkYourNetwork:{netflixServer:"Serveri i Netflix ${number}",internetConnection:"Lidhja e internetit",runningCheck:"Duke kryer kontrollin...",checkYourNetwork:n,introDescription:"Testoni lidhjen e internetit për çdo problem që mund t'ju pengojë të përdorni Netflix.",diagnosisFailure:"Rrjeti juaj nuk mund të testohet. Provoni përsëri ose vizitoni www.netflix.com/nethelp."},signOut:{signOut:r,introDescription:"Dilni nga llogaria juaj e Netflix në këtë paisje."},exitNetflix:{header:i,description:"Mbyllni aplikacionin e Netflix."},responses:{confirm:"OK",exit:r,no:"Jo",reactivate:"Riaktivizoni",retry:"Provoni përsëri",yes:"Po",customerService:"Më shumë detaje"},reactivate:{getNewCredentialsError:"Me sa duket Netflix është çaktivizuar në këtë paisje. Mund të jetë një problem me llogarinë tuaj ose ndoshta paisja juaj është çaktivizuar në Netflix.com."},exitDialog:"Dëshironi që të dilni nga Netflix?",exitingMessage:"Duke dalë...",reset:{title:"Resetoni Netflix",description:"Resetoni Netflix në këtë paisje në gjendjen e tij origjinale."},legend:{labels:{kids:"Fëmijët",menu:"Menuja",back:t}}}};util.localization.addCulture(s.language.name,s)})();