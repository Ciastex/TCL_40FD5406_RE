(function(){var e="English",t="قايتىش",n="شۇنداق",r="تورىڭىزنى تەكشۈرۈڭ",i="چېكىنىش",s="Netflix دىن چېكىنىش",o="ئۈسكۈنىڭىز تورغا ئۇلانمىغان بولۇشى مۇمكىن. تور ئۇلىنىشىنىڭ نورماللىقىنى تەكشۈرۈڭ. ${retrytime} ئىچىدە قايتا سىنايدۇ.",u="Netflix تا خاتالىق كۆرۈلدى. ${retrytime} ئىچىدە قايتا سىنايدۇ.",a={language:{name:"en",englishName:e,nativeName:e,isRtl:!1,language:"en",numberFormat:{pattern:{0:"-n",length:1},decimals:2,",":",",".":".",groupSizes:{0:3,length:1},"+":"+","-":"-",percent:{pattern:{0:"-n %",1:"n %",length:2},decimals:2,groupSizes:{0:3,length:1},",":",",".":".",symbol:"%"},currency:{pattern:{0:"($n)",1:"$n",length:2},decimals:2,groupSizes:{0:3,length:1},",":",",".":".",symbol:"$"}},calendar:{name:"Gregorian_USEnglish","/":"/","&#58;":":",firstDay:0,days:{names:{0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday",length:7},namesAbbr:{0:"Sun",1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat",length:7},namesShort:{0:"Su",1:"Mo",2:"Tu",3:"We",4:"Th",5:"Fr",6:"Sa",length:7}},months:{names:{0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December",12:"",length:13},namesAbbr:{0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec",12:"",length:13}},AM:{0:"AM",1:"am",2:"AM",length:3},PM:{0:"PM",1:"pm",2:"PM",length:3},eras:{0:{name:"A.D.",start:"",offset:0},length:1},twoDigitYearMax:2029,patterns:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",t:"h:mm tt",T:"h:mm:ss tt",f:"dddd, MMMM dd, yyyy h:mm tt",F:"dddd, MMMM dd, yyyy h:mm:ss tt",M:"MMMM dd",Y:"yyyy MMMM",S:"yyyy'-'MM'-'dd'T'HH':'mm':'ss"}},fontGroup:"WGL"},strings:{customerService:{signoutConfirmation:"بۇ ئۈسكۈنىدە Netflix نى راستىنلا قايتا تەڭشەمسىز؟",signoutSuccess:"بۇ ئۈسكۈنىنى ئوڭۇشلۇق قايتا تەڭشىدىڭىز.",legend:{back:t},device:{fields:{esn:"ESN",softwareVersion:"يۇمشاق دېتال نەشرى",certVersion:"ئىجازەتنامە نەشرى",netflixVersion:"Netflix نەشرى",deviceModel:"ئۈسكۈنە تىپى",sdkVersion:"SDK نەشرى",platformVersion:"سۇپا نەشرى"},netflixVersionTmpl:"nrdapp ${nrdapp} / nrdlib ${nrdlib} / mdxlib ${mdxlib}",sdkVersionTmpl:"sdk ${sdk}"},member:{fields:{name:"نامى",email:"تورخەت"},nameTmpl:"${firstName} ${lastName}"},network:{fields:{dnsServers:"DNS مۇلازىمىتېرى",wired:"سىملىق",wireless:"سىمسىز"},"default":"باش ھالەت: شۇنداق",ipAddressTmpl:"IP ئادرېسى: ${address}",connectedWifiTmpl:"ئۇلانغىنى: ${connected} - ${ssid}",connectedTmpl:"ئۇلانغىنى: ${connected}",connected:{"true":n,"false":"ياق"},name:"نامى: ${name}"},diagnostics:{results:{noInternet:"ئۈسكۈنىڭىز تورغا ئۇلانمىغان بولۇشى مۇمكىن. تور ئۇلىنىشىنىڭ نورماللىقىنى تەكشۈرۈڭ.",noNetflix:"Netflix قا ئۇلانمىدى. قايتا سىناڭ ياكى باش تور ۋە تور ئوقۇش ئۈسكۈنىڭىزنى قايتا قوزغىتىڭ. تەپسىلىي ئۇچۇرلارنى netflix.com/nethelp دىن كۆرۈڭ.",noProblem:"تور تەكشۈرۈش ئوڭۇشلۇق بولدى."}},menu:{close:t,member:"ئەزا",network:"تور",device:"ئۈسكۈنە",diagnose:r,signout:i,exitnetflix:s,back:t,reset:"قايتا تەڭشەش"},title:"ئۇچۇر"},errorPage:{runningDiagnostics:"Netflix تا خاتالىق كۆرۈلدى. مەسىلىنى تەكشۈرۈۋاتىدۇ.",runningDiagnosticsPs3:"Netflix تا خاتالىق كۆرۈلدى. مەسىلىنى تەكشۈرۈۋاتىدۇ. Netflix تىن چېكىنىش ئۈچۈن تىزگىنەكتىكى PS كۇنۇپكىسىنى بېسىڭ.",retryingNow:"قايتا ئۇلاپ بېقىۋاتىدۇ...",retryingBiep_pluralNoconnection:o,retryingBiepSingularNoconnection:o,retryingBiep_plural:u,retryingBiepSingular:u,retryingBiepCode:"خاتالىق كودى: ${code}"},networkDiagnostics:{error:{noNetflix:"Netflix قا ئۇلانمىدى. قايتا سىناڭ ياكى باش تور ۋە تور ئوقۇش ئۈسكۈنىڭىزنى قايتا قوزغىتىڭ. تەپسىلىي ئۇچۇرلارنى netflix.com/nethelp دىن كۆرۈڭ.<br/>خاتالىق كودى: ${code}",noInternet:"ئۈسكۈنىڭىز تورغا ئۇلانمىغان بولۇشى مۇمكىن. تور ئۇلىنىشىنىڭ نورماللىقىنى تەكشۈرۈپ، قايتا سىناڭ.<br/>خاتالىق كودى: ${code}",noNetflixPs3:"Netflix قا ئۇلانمىدى. قايتا سىناڭ ياكى باش تور ۋە تور ئوقۇش ئۈسكۈنىڭىزنى قايتا قوزغىتىڭ. تەپسىلىي ئۇچۇرلارنى netflix.com/nethelp دىن كۆرۈڭ. Netflix تىن چېكىنىش ئۈچۈن تىزگىنەكتىكى PS كۇنۇپكىسىنى بېسىڭ.<br/>خاتالىق كودى: ${code}",noInternetPs3:"ئۈسكۈنىڭىز تورغا ئۇلانمىغان بولۇشى مۇمكىن. تور ئۇلىنىشىنىڭ نورماللىقىنى تەكشۈرۈپ، قايتا سىناڭ. Netflix تىن چېكىنىش ئۈچۈن تىزگىنەكتىكى PS كۇنۇپكىسىنى بېسىڭ.<br/>خاتالىق كودى: ${code}"}},checkYourNetwork:{netflixServer:"Netflix مۇلازىمىتېرى ${number}",internetConnection:"تور ئۇلىنىشى",runningCheck:"تەكشۈرۈۋاتىدۇ...",checkYourNetwork:r,introDescription:"تورىڭىزدا Netflix نى ئىشلىتىشىڭىزگە كاشىلا بولۇۋاتقان مەسىلە بارمۇ يوق، تەكشۈرۈڭ.",diagnosisFailure:"تورىڭىزنى تەكشۈرگىلى بولمىدى. قايتا سىناڭ ياكى www.netflix.com/nethelp نى زىيارەت قىلىڭ."},signOut:{signOut:i,introDescription:"بۇ ئۈسكۈنىدىكى Netflix ھېساباتىڭىزدىن چېكىنىڭ."},exitNetflix:{header:s,description:"Netflix ئەپىنى يېپىڭ."},responses:{confirm:"ماقۇل",exit:i,no:"ياق",reactivate:i,retry:"قايتا سىناش",yes:n,customerService:"تەپسىلاتى"},reactivate:{getNewCredentialsError:"بۇ ئۈسكۈنىدە Netflix چەكلەپ قويۇلغاندەك تۇرىدۇ. بۇ ھېساباتىڭىزدىكى مەسىلە بولۇشى ياكى ئۈسكۈنىڭىز Netflix.com دە چەكلەپ قويۇلغان بولۇشى مۇمكىن."},exitDialog:"Netflix دىن چېكىنەمسىز؟",exitingMessage:"چېكىنىۋاتىدۇ...",reset:{title:"Netflix نى قايتا تەڭشەش",description:"بۇ ئۈسكۈنىدە Netflix نى ئەسلى ھالىتىگە قايتا تەڭشەڭ."},legend:{labels:{kids:"بالىلار",menu:"تىزىملىك",back:t}}}};util.localization.addCulture(a.language.name,a)})();