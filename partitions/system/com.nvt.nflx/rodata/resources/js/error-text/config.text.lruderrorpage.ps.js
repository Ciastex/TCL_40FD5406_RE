(function(){var e="English",t="شا",n="خپل نیټ ورک وګورﺉ",r="ساین اوټ",i="ښایي ستاسو اله د انټرنیټ سره کنیکټ نه وي. مهرباني وکړﺉ  دا یقیني کړﺉ چې ستاسو کنیکشن کار کوي. په ${retrytime} ثانیو کې بیا کوشش کیږي.",s="په Netflix کې څه ستونزه رامنځته شوه. په ${retrytime} ثانیو کې بیا کوشش کیږي.",o={language:{name:"en",englishName:e,nativeName:e,isRtl:!1,language:"en",numberFormat:{pattern:{0:"-n",length:1},decimals:2,",":",",".":".",groupSizes:{0:3,length:1},"+":"+","-":"-",percent:{pattern:{0:"-n %",1:"n %",length:2},decimals:2,groupSizes:{0:3,length:1},",":",",".":".",symbol:"%"},currency:{pattern:{0:"($n)",1:"$n",length:2},decimals:2,groupSizes:{0:3,length:1},",":",",".":".",symbol:"$"}},calendar:{name:"Gregorian_USEnglish","/":"/","&#58;":":",firstDay:0,days:{names:{0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday",length:7},namesAbbr:{0:"Sun",1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat",length:7},namesShort:{0:"Su",1:"Mo",2:"Tu",3:"We",4:"Th",5:"Fr",6:"Sa",length:7}},months:{names:{0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December",12:"",length:13},namesAbbr:{0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec",12:"",length:13}},AM:{0:"AM",1:"am",2:"AM",length:3},PM:{0:"PM",1:"pm",2:"PM",length:3},eras:{0:{name:"A.D.",start:"",offset:0},length:1},twoDigitYearMax:2029,patterns:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",t:"h:mm tt",T:"h:mm:ss tt",f:"dddd, MMMM dd, yyyy h:mm tt",F:"dddd, MMMM dd, yyyy h:mm:ss tt",M:"MMMM dd",Y:"yyyy MMMM",S:"yyyy'-'MM'-'dd'T'HH':'mm':'ss"}},fontGroup:"WGL"},strings:{customerService:{signoutConfirmation:"تاسو یقیني غواړﺉ چې په دې اله کې Netflix  بیا برابر کړﺉ؟",signoutSuccess:"تاسو په بریالۍ توګه دا اله بیا برابر کړه.",legend:{back:t},device:{fields:{esn:"ESN",softwareVersion:"د سافټ ویر ورژن",certVersion:"د تصدیق ورژن",netflixVersion:"د Netflix ورژن",deviceModel:"د الې ماډل",sdkVersion:"SDK ورژن",platformVersion:" پلیټ فارم ورژن"},netflixVersionTmpl:"nrdapp ${nrdapp} / nrdlib ${nrdlib} / mdxlib ${mdxlib}",sdkVersionTmpl:"sdk ${sdk}"},member:{fields:{name:"نوم",email:"بريښنالیک"},nameTmpl:"${firstName} ${lastName}"},network:{fields:{dnsServers:"DNS سرورې",wired:"تار لګیدلی",wireless:"پرته له تاره (وایرلیس)"},"default":"ډیفالټ: هو",ipAddressTmpl:"IP ادرس: ${address}",connectedWifiTmpl:"کنیکټ شوی: ${connected} - ${ssid}",connectedTmpl:"کنیکټ شوی: ${connected}",connected:{"true":"هو","false":"نه"},name:"نوم: ${name}"},diagnostics:{results:{noInternet:"ښایي ستاسو اله د انټرنیټ سره کنیکټ نه وي. مهرباني وکړﺉ  دا یقیني کړﺉ چې ستاسو کنیکشن کار کوي.",noNetflix:"د Netflix سره نه کنیکټ کیږي. مهرباني وکړﺉ بیا کوشش وکړﺉ یا خپل کورنی نیټ ورک او سټریمنګ اله بیا پیل کړﺉ. د نورو معلوماتو له پاره netflix.com/nethelp ته ولاړ شئ.",noProblem:"د نیټ ورک کتنه بریالۍ."}},menu:{close:t,member:"غړی",network:"نیټ ورک",device:"اله",diagnose:n,signout:r,exitnetflix:"د Netflix څخه ووځئ",back:"شا ته ولاړ شئ",reset:"بیا برابر کړﺉ"},title:"معلومات"},errorPage:{runningDiagnostics:"په Netflix کې څه ستونزه رامنځته شوه. د ستونزې د معلومولو هڅه کیږي.",runningDiagnosticsPs3:"په Netflix کې څه ستونزه رامنځته شوه. د ستونزې د معلومولو هڅه کیږي. د Netflix څخه د وتلو لپاره، په خپل کنترولر د PS په بټن زور کړﺉ.",retryingNow:"د کنیکشن اوس بیا کوشش کیږي ...",retryingBiep_pluralNoconnection:i,retryingBiepSingularNoconnection:i,retryingBiep_plural:s,retryingBiepSingular:s,retryingBiepCode:"کوډ: ${code}"},networkDiagnostics:{error:{noNetflix:"د Netflix سره نه کنیکټ کیږي. مهرباني وکړﺉ بیا کوشش وکړﺉ یا خپل کورنی نیټ ورک او سټریمنګ اله بیا پیل کړﺉ. د نورو معلوماتو له پاره ولاړ شئ netflix.com/nethelp.<br/> کوډ: ${code}",noInternet:"ښایي ستاسو اله د انټرنیټ سره کنیکټ نه وي. مهرباني وکړﺉ  دا یقیني کړﺉ چې ستاسو کنیکشن کار کوي او بیا کوشش وکړﺉ. <br/>کوډ: ${code}",noNetflixPs3:"د Netflix سره نه کنیکټ کیږي. مهرباني وکړﺉ بیا کوشش وکړﺉ یا خپل کورنی نیټ ورک او سټریمنګ اله بیا پیل کړﺉ. د نورو معلوماتو له پاره netflix.com/nethelp ته ولاړ شئ.. د Netflix څخه د وتلو لپاره، په خپل کنترولر د PS په بټن زور کړﺉ. <br/> کوډ: ${code}",noInternetPs3:"ښایي ستاسو اله د انټرنیټ سره کنیکټ نه وي. مهرباني وکړﺉ  دا یقیني کړﺉ چې ستاسو کنیکشن کار کوي او بیا کوشش وکړﺉ. د Netflix څخه د وتلو لپاره، په خپل کنترولر د PS په بټن زور کړﺉ. <br/>کوډ: ${code}"}},checkYourNetwork:{netflixServer:"Netflix سرور ${number}",internetConnection:"انټرنیټ کنیکشن",runningCheck:"رننګ کتنه...",checkYourNetwork:n,introDescription:"د خپل انټرنیټ کنیکشن د هغه ستونزو له پاره ټسټ کړﺉ کوم چې ښایي تاسو د Netflix د استعمالولو څخه منع کوي.",diagnosisFailure:"ستاسو نیټ ورک د کتلو وړ نه دی. مهرباني وکړﺉ بیا کوشش وکړﺉ یا ولاړ شئ www.netflix.com/nethelp."},signOut:{signOut:r,introDescription:"په دې اله کې د خپل Netflix د اکاونټ څخه ساین اوټ شئ."},exitNetflix:{header:"د Netflix څخه ووځئ.",description:"د Netflix ایپلیکیشن بند کړﺉ."},responses:{confirm:"اوکی",exit:"ووځئ",no:"نه",reactivate:r,retry:"بیا کوشش وکړﺉ",yes:"هو",customerService:"نور تفصیلات"},reactivate:{getNewCredentialsError:"داسې ښکاري چې Netflix په دې اله کې غیرفعال کړی شوی دی. دا ستاسو په اکاونټ کې ستونزه کیدی شي، یا ښایي ستاسو اله په Netflix.com غیرفعاله کړی شوي وي."},exitDialog:"د Netflix څخه وتل غواړﺉ؟",exitingMessage:"ووځي...",reset:{title:"Netflix بیا برابر کړﺉ",description:"Netflix په دې اله کې خپل اصلي حالت ته بیا برابر کړﺉ."},legend:{labels:{kids:"ماشومان",menu:"مینیو",back:t}}}};util.localization.addCulture(o.language.name,o)})();