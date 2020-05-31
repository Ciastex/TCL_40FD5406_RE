(function(){var e="English",t="უკან",n="დიახ",r="ქსელის შემოწმება",i="გამოსვლა",s="Netflix-იდან გამოსვლა",o="მოწყობილობას შეიძლება არ ქონდეს კავშირი ინტერნეტთან. დარწმუნდით, რომ კავშირი მუშაობს. ხელახლა ცდა ${retrytime} წამში.",u="Netflix-მა აღმოაჩინა შეცდომა. ხელახლა ცდა ${retrytime} წამში.",a={language:{name:"en",englishName:e,nativeName:e,isRtl:!1,language:"en",numberFormat:{pattern:{0:"-n",length:1},decimals:2,",":",",".":".",groupSizes:{0:3,length:1},"+":"+","-":"-",percent:{pattern:{0:"-n %",1:"n %",length:2},decimals:2,groupSizes:{0:3,length:1},",":",",".":".",symbol:"%"},currency:{pattern:{0:"($n)",1:"$n",length:2},decimals:2,groupSizes:{0:3,length:1},",":",",".":".",symbol:"$"}},calendar:{name:"Gregorian_USEnglish","/":"/","&#58;":":",firstDay:0,days:{names:{0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday",length:7},namesAbbr:{0:"Sun",1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat",length:7},namesShort:{0:"Su",1:"Mo",2:"Tu",3:"We",4:"Th",5:"Fr",6:"Sa",length:7}},months:{names:{0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December",12:"",length:13},namesAbbr:{0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec",12:"",length:13}},AM:{0:"AM",1:"am",2:"AM",length:3},PM:{0:"PM",1:"pm",2:"PM",length:3},eras:{0:{name:"A.D.",start:"",offset:0},length:1},twoDigitYearMax:2029,patterns:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",t:"h:mm tt",T:"h:mm:ss tt",f:"dddd, MMMM dd, yyyy h:mm tt",F:"dddd, MMMM dd, yyyy h:mm:ss tt",M:"MMMM dd",Y:"yyyy MMMM",S:"yyyy'-'MM'-'dd'T'HH':'mm':'ss"}},fontGroup:"WGL"},strings:{customerService:{signoutConfirmation:"ნამდვილად გსურთ ამ მოწყობილობაზე Netflix-ის ჩამოყრა?",signoutSuccess:"თქვენ წარმატებით ჩამოყარეთ მოწყობილობა.",legend:{back:t},device:{fields:{esn:"ESN",softwareVersion:"პროგრამის ვერსია",certVersion:"სერტიფიცირების ვერსია",netflixVersion:"Netflix ვერსია",deviceModel:"მოწყობილობის მოდელი",sdkVersion:"SDK ვერსია",platformVersion:"პლატფორმის ვერსია"},netflixVersionTmpl:"nrdapp ${nrdapp} / nrdlib ${nrdlib} / mdxlib ${mdxlib}",sdkVersionTmpl:"sdk ${sdk}"},contact:{title:"To contact Customer Service:",description:{webHelp:"Visit help.netflix.com."}},member:{fields:{name:"სახელი",email:"ელფოსტა"},nameTmpl:"${firstName} ${lastName}"},network:{fields:{dnsServers:"DNS სერვერები",wired:"სადენიანი",wireless:"უსადენო"},"default":"ნაგულისხმევი: დიახ",ipAddressTmpl:"IP მისამართი: ${address}",connectedWifiTmpl:"დაკავშირებული: ${connected} - ${ssid}",connectedTmpl:"დაკავშირებული: ${connected}",connected:{"true":n,"false":"არა"},name:"სახელი: ${name}"},diagnostics:{results:{noInternet:"მოწყობილობას შეიძლება არ ქონდეს კავშირი ინტერნეტთან. დარწმუნდით, რომ კავშირი მუშაობს.",noNetflix:"Netflix-თან დაკავშირება ვერ შედგა. სცადეთ ხელახლა ან გადატვირთეთ საშინაო ქსელი და ნაკადური მოწყობილობა. ინფორმაციისთვის, ეწვიეთ netflix.com/nethelp.",noProblem:"ქსელი წარმატებით შემოწმდა."}},menu:{close:t,contact:"Customer service",member:"წევრი",network:"ქსელი",device:"მოწყობილობა",diagnose:r,signout:i,exitnetflix:s,back:"უკან დაბრუნება",reset:"ჩამოყრა"},title:"ინფორმაცია"},errorPage:{runningDiagnostics:"Netflix-მა აღმოაჩინა შეცდომა. მიმდინარეობს პრობლემის დადგენა.",runningDiagnosticsPs3:"Netflix-მა აღმოაჩინა შეცდომა. მიმდინარეობს პრობლემის დადგენა. Netflix-იდან გამოსასვლელად, მაკონტროლებელზე დააჭირეთ ღილაკს PS.",retryingNow:"კავშირის ხელახლა ცდა...",retryingBiep_pluralNoconnection:o,retryingBiepSingularNoconnection:o,retryingBiep_plural:u,retryingBiepSingular:u,retryingBiepCode:"კოდი: ${code}"},networkDiagnostics:{error:{noNetflix:"Netflix-თან დაკავშირება ვერ შედგა. სცადეთ ხელახლა ან გადატვირთეთ საშინაო ქსელი და ნაკადური მოწყობილობა. ინფორმაციისთვის, ეწვიეთ netflix.com/nethelp.<br/>კოდი: ${code}",noInternet:"მოწყობილობას შეიძლება არ ქონდეს კავშირი ინტერნეტთან. დარწმუნდით, რომ კავშირი მუშაობს და ხელახლა სცადეთ.<br/>კოდი: ${code}",noNetflixPs3:"Netflix-თან დაკავშირება ვერ შედგა. სცადეთ ხელახლა ან გადატვირთეთ საშინაო ქსელი და ნაკადური მოწყობილობა. ინფორმაციისთვის, ეწვიეთ netflix.com/nethelp. Netflix-იდან გამოსასვლელად, მაკონტროლებელზე დააჭირეთ ღილაკს PS.<br/>კოდი: ${code}",noInternetPs3:"მოწყობილობას შეიძლება არ ქონდეს კავშირი ინტერნეტთან. დარწმუნდით, რომ კავშირი მუშაობს და ხელახლა სცადეთ. Netflix-იდან გამოსასვლელად, მაკონტროლებელზე დააჭირეთ ღილაკს PS.<br/>კოდი: ${code}"}},checkYourNetwork:{netflixServer:"Netflix სერვერი ${number}",internetConnection:"ინტერნეტთან კავშირი",runningCheck:"გაშვებულია შემოწმება...",checkYourNetwork:r,introDescription:"შეამოწმეთ ინტერნეტთან კავშირის პრობლემები, რომლებიც Netflix-ის გამოყენებაში გიშლიან ხელს.",diagnosisFailure:"ქსელის შემოწმება ვერ შედგა. სცადეთ ხელახლა ან ეწვიეთ www.netflix.com/nethelp."},signOut:{signOut:i,introDescription:"ამ მოწყობილობაზე Netflix ანგარიშიდან გამოსვლა."},exitNetflix:{header:s,description:"Netflix პროგრამის დახურვა."},responses:{confirm:"კარგი",exit:i,no:"არა",reactivate:i,retry:"ხელახლა ცდა",yes:n,customerService:"უფრო დეტალურად"},reactivate:{getNewCredentialsError:"როგორც ჩანს, Netflix დეაქტივირებულია ამ მოწყობილობაზე. ეს შეიძლება იყოს პრობლემა ანგარიშთან ან მოწყობილობა დეაქტივირებულია Netflix.com-ზე."},exitDialog:"გსურთ Netflix-იდან გამოსვლა?",exitingMessage:"გამოსვლა...",reset:{title:"Netflix-ის ჩამოყრა",description:"ამ მოწყობილობაზე Netflix-ის ჩამოყრა საწყის მდგომარეობაზე."},legend:{labels:{kids:"ბავშვები",menu:"მენიუ",back:t}}}};util.localization.addCulture(a.language.name,a)})();