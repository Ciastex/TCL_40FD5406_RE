(function(){var e="English",t="Bumalik",n="Hindi",r="Itsek iyong network",i="Umalis",s="Umalis sa Netflix",o={language:{name:"en",englishName:e,nativeName:e,isRtl:!1,language:"en",numberFormat:{pattern:{0:"-n",length:1},decimals:2,",":",",".":".",groupSizes:{0:3,length:1},"+":"+","-":"-",percent:{pattern:{0:"-n %",1:"n %",length:2},decimals:2,groupSizes:{0:3,length:1},",":",",".":".",symbol:"%"},currency:{pattern:{0:"($n)",1:"$n",length:2},decimals:2,groupSizes:{0:3,length:1},",":",",".":".",symbol:"$"}},calendar:{name:"Gregorian_USEnglish","/":"/","&#58;":":",firstDay:0,days:{names:{0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday",length:7},namesAbbr:{0:"Sun",1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat",length:7},namesShort:{0:"Su",1:"Mo",2:"Tu",3:"We",4:"Th",5:"Fr",6:"Sa",length:7}},months:{names:{0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December",12:"",length:13},namesAbbr:{0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec",12:"",length:13}},AM:{0:"AM",1:"am",2:"AM",length:3},PM:{0:"PM",1:"pm",2:"PM",length:3},eras:{0:{name:"A.D.",start:"",offset:0},length:1},twoDigitYearMax:2029,patterns:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",t:"h:mm tt",T:"h:mm:ss tt",f:"dddd, MMMM dd, yyyy h:mm tt",F:"dddd, MMMM dd, yyyy h:mm:ss tt",M:"MMMM dd",Y:"yyyy MMMM",S:"yyyy'-'MM'-'dd'T'HH':'mm':'ss"}},fontGroup:"WGL"},strings:{customerService:{signoutConfirmation:"Sigurado ka bang gusto mong ireset ang Netflix sa aparatong ito?",signoutSuccess:"Matagumpay mong inireset ang aparatong ito.",legend:{back:t},device:{fields:{esn:"ESN",softwareVersion:"Software na bersiyon",certVersion:"Sertipikasyong bersiyon",netflixVersion:"Netflix na bersiyon",deviceModel:"Modelo ng aparato",sdkVersion:"SDK na bersiyon",platformVersion:"Plataporma na bersiyon"},netflixVersionTmpl:"nrdapp ${nrdapp} / nrdlib ${nrdlib} / mdxlib ${mdxlib}",sdkVersionTmpl:"sdk ${sdk}"},contact:{title:"To contact Customer Service:",description:{webHelp:"Visit help.netflix.com."}},member:{fields:{name:"Pangalan",email:"Email"},nameTmpl:"${firstName} ${lastName}"},network:{fields:{dnsServers:"DNS na mga serbidor",wired:"Nakakawad",wireless:"Walangkawad"},"default":"Pagkapalya: Oo",ipAddressTmpl:"IP Adres: ${address}",connectedWifiTmpl:"Konektado: ${connected} - ${ssid}",connectedTmpl:"Konektado: ${connected}",connected:{"true":"Oo","false":n},name:"Pangalan: ${name}"},diagnostics:{results:{noInternet:"Iyong aparato ay maaaring hindi nakakonekta sa Internet. Pakisiguro na iyong koneksiyon ay gumagana.",noNetflix:"Hindi makakonekta sa Netflix. Pakisubukan muli o muling simulan ang iyong bahay na network at aparato sa pagpapadaloy. Para sa higit na impormasyon, bisitahin ang netflix.com/nethelp.",noProblem:"Pagtsek ng network matagumpay."}},menu:{close:t,contact:"Customer service",member:"Miyembro",network:"Network",device:"Aparato",diagnose:r,signout:i,exitnetflix:s,back:t,reset:"Ireset"},title:"Impormasyon"},errorPage:{runningDiagnostics:"Netflix ay nakatagpo ng mali. Sinusubukan na alamin ang problema.",runningDiagnosticsPs3:"Netflix ay nakatagpo ng mali. Sinusubukan na alamin ang problema. Upang umalis sa Netflix, pindotin ang PS na buton sa iyong tagakontrol.",retryingNow:"Sinusubukan ang koneksiyon ngayon…",retryingBiep_pluralNoconnection:"Iyong aparato ay maaaring hindi nakakonekta sa Internet. Pakisiguro na iyong koneksiyon ay gumagana. Sinusubukan muli sa ${retrytime} mga segundo.",retryingBiepSingularNoconnection:"Iyong aparato ay maaaring hindi nakakonekta sa Internet. Pakisiguro na iyong koneksiyon ay gumagana. Sinusubukan muli sa ${retrytime} segundo.",retryingBiep_plural:"Netflix ay nakatagpo ng mali. Sinusubukan muli sa ${retrytime} mga segundo.",retryingBiepSingular:"Netflix ay nakatagpo ng mali. Sinusubukan muli sa ${retrytime} segundo.",retryingBiepCode:"Kodigo: ${code}"},networkDiagnostics:{error:{noNetflix:"Hindi makakonekta sa Netflix. Pakisubukan muli o muling simulan ang iyong bahay na network at aparato sa pagpapadaloy. Para sa higit na impormasyon, bisitahin ang netflix.com/nethelp. <br/>Kodigo: ${code}",noInternet:"Iyong aparato ay maaaring hindi nakakonekta sa Internet. Pakisiguro na iyong koneksiyon ay gumagana at subukan muli.<br/>Kodigo: ${code}",noNetflixPs3:"Hindi makakonekta sa Netflix. Pakisubukan muli o muling simulan ang iyong bahay na network at aparato sa pagpapadaloy. Para sa higit na impormasyon, bisitahin ang netflix.com/nethelp. Upang umalis sa Netflix, pindotin ang PS na buton sa iyong tagakontrol. <br/>Kodigo: ${code}",noInternetPs3:"Iyong aparato ay maaaring hindi nakakonekta sa Internet. Pakisiguro na iyong koneksiyon ay gumagana at subukan muli. Upang umalis sa Netflix, pindotin ang PS na buton sa iyong tagakontrol.<br/> Code: ${code}"}},checkYourNetwork:{netflixServer:"Netflix na serbidor ${number}",internetConnection:"Internet na koneksiyon",runningCheck:"Pinapatakbo ang pagtsek…",checkYourNetwork:r,introDescription:"Subukin iyong Internet na koneksiyon sa anumang problema na pumipigil sa iyo na gamitin ang Netflix.",diagnosisFailure:"Hindi matsek iyong network. Pakisubukan muli o bisitahin ang www.netflix.com/nethelp."},signOut:{signOut:i,introDescription:"Umalis sa iyong Netflix na kuwenta sa aparatong ito"},exitNetflix:{header:s,description:"Isara ang Netflix na aplikasyon."},responses:{confirm:"AYOS",exit:i,no:n,reactivate:i,retry:"Subukan Muli",yes:"Oo",customerService:"Higit na Detalye"},reactivate:{getNewCredentialsError:"Mukhang naisadeaktibo ang Netflix sa aparatong ito. Maaaring itong isyu sa iyong kuwenta, baka ang iyong aparato ay naisadeaktibo sa Netflix.com."},exitDialog:"Gusto mo bang umalis sa Netflix?",exitingMessage:"Umaalis…",reset:{title:"Ireset ang Netflix",description:"Ireset ang Netflix sa aparatong ito pabalik sa orihinal niyang estado."},legend:{labels:{kids:"Mga bata",menu:"Menu",back:t}}}};util.localization.addCulture(o.language.name,o)})();