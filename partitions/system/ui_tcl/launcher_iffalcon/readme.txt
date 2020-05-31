页面代码需要知道以下约定规范：

0,如果用chrome浏览器，需放在服务器上运行；
1,iframe的id要和标题中的名字有对应关系：iframe.id == "homePage"+title；(这个现在不要求了)
2，键盘上下左右键要在进入页面1秒后才能用；(这个现在不要求了)
3，标题中的"tabindex"需要按从左到右，以0为起始值开始赋值；(这个现在不要求了)
4,  data-up(0：上标题；）  data-right（-1：下一页） data-down（0：下标题，当前页的标题集焦）  data-left（-1：上一页"）data-leftPage(上一页id号) data-rightPage(下一页id号)，data-focus_id(集焦元素的框图id号)；
5， 要求iframeListe的顺序要和titleList的顺序对应；
6，每个page页中的内容状态顶级的div，需要指定它的初始left值为0，top的值目前是130px；面滑动的时候，移动的是这个顶级的div的left值；
7，需要保证每一页的第一个图片是在页面的第[2]个div中，这个是集焦时定位元素需要一个起始的值;
8,每一页自己的顶级容器的宽度不能小于图片总宽度;(这个现在不要求了)
9，z-index（0：#mainFrameBG；1：bgStyle；3：.elem集焦前；4：.elem获得焦点；5：#title，#infoStatus，#infoStatusSetting；）。
10,开机集焦
   I)   id 为 title 的那个div中：
	   a）所有的span都增加“data-focus”这个属性，开机集焦的值为1，其它为0；
	   b) 被指定集焦的span 的style增加“display:none;”; 
	   c) id="mainFocus" 的div元素需要在style样式中注明left的值， left的值= 开机集焦元素的left的值    -  90px后的差值；
	   d) id="mainFocus" 中子元素id="mainTitle" 的文本值  = 开机集焦元素的文本值；
   II) 开机集焦元素对应加载的iframe的 style="left:0px;",其余的非开机集焦的iframe的style="left:1920px;"；
   III)第一个背景的div的背景图片，如果开机集焦尸TV页面，则需要赋值为TV的背景图片，其它是另外的背景图片。(这个现在不要求了)
11,切换背景图片时判断了，如果标题名字为tv或者Tv，就更换为电视的背景;(这个现在不要求了)
12，div 除了最基本的图片（如海报，集焦框图）外，其它的遮罩图片有的有，有的没有.
   
 
13,图片初始放入页面时，给图片增加无色的增亮的边框，但TV页的最左上角div没有。
14，image文件夹中所存放的切图分类:

    images/homePic -------- home页面；
    images/videosPic ------ videos页面；
    images/tvPic ---------- tv页面；
    images/appsPic--------- apps页面；

    images/focus------------Thomoson的A方案集焦框；
    images/focus_B----------Thomoson的B方案集焦框；
    images/focus_TCL--------TCL集焦    所需切图框；

    images/quote------------Thomoson的A方案（页面右上角显示的usb.png,wifi-5.png,页面下面的tab标题的集焦光束Tab_Focus.png，电视的被掏空的背景图TV02.png，全的背景图BG_60.png，HDML信号连上标志的打勾符号sourceMarked.png）；
    images/quote_B----------Thomoson的B方案（页面右上角显示的usb.png,wifi-5.png,页面下面的tab标题的集焦光束Tab_Focus.png，电视的被掏空的背景图TV02.png，全的背景图BG_60.png，HDML信号连上标志的打勾符号sourceMarked.png）
    images/quote_TCL--------TCL方案（页面右上角显示的usb.png,wifi-5.png,页面下面的tab标题的集焦光束Tab_Focus.png，电视的被掏空的背景图TV02.png，全的背景图BG_60.png，HDML信号连上标志的打勾符号sourceMarked.png）；

    images/shadowBG---------Thomoson的A方案中有些图片的标题后面需要的遮罩效果的切图；

    images/Status_bar-------当焦点移到最上面的位置时，设置功能所需切图；

    images/transparent------Thomoson的A方案中没被选中的图片所需的无色光亮边框框图。

15，关于文字遮罩效果(这里单指thomoson方案)：
    home页中，只有History 和 Search 两个图片没有，其他都有；
    videos页中，都放了；
    TV页中，都没有；
    Apps页中，只有App Store有。

16，专门为Apps页面增加的背景图片images/appsPic/APP_bg.png第一个（App Store）和最后一个(My Apps)不要加。  
17,  修改了TV页的内容，文件名为tvNew.html,对应的iframe的src也改为这个名字了。
18，  Home.html页里，有history,search,云中歌三个 block增加了连接，分别代表连接到二级网页和播放视频。
19，  Videos.html页里，给movie增加了连接，跳转到二级页面movie相关内容。
20，进入index.html页面需要带参数indexOfIframe，与iframe的编号对应，indexOfIframe=-1表示第一次进入页面，indexOfIframe不等于-1 的时候，表示是从二级页面返回来的情况。
21，关于开机集焦：1）index.html中，所有iframe的left值都改为电视的宽度：1920了，开机集焦的iframe的left值也是这个了；2）mainTitle的值一开始为空。
22，videos页面里的每一个block的跳转位置，需要在模板里配置。
23，从config接口里获取上报数据的周期。
24，5个上报函数，里面所传参数，都是需要配置模板的时候带上来的，前三个，是每个launcher模板都会有的，所以，不需要在配置模板的时候指定 ，后面的两个，是配置block元素的时候，需要的话就配置上，不需要就不需要配置，不过最后那个点击上报的函数，基本是每个都需要的。
函数名action后面的数字，对应文档中点击事件的序号。
actionThree_tabDuritionTime_IN(currentElemInBottomTitleIndex)：进入某个tab
actionThree_tabDuritionTime_OUT(currentElemInBottomTitleIndex)：离开某个tab
actionFour_tabOrder():进入launcher获得tab的顺序，这个需要在index.html文件中，对每个tab增加data-ids这个属性，在index.html文件最后，也需要一个标签指明模板id号 <input id="commonDataSource" type="hidden" data-tmp_id="111" />。
actionOne_videoPlayer(sourceFrom, ids, title,vid)：播放视频，所带参数，需要模板生成
actionFive_Click(sourcefrom, ids, title, url)：点击率上报，所带参数，需要模板生成
25，有4个变量：
sessionStorage.tabListIndex：保存的当前的tablist序列号；
localStorage.period：上报周期；
localStorage.reportString：收集的上报字符串；
localStorage.lastUploadTime：最后提交时间；
26,把home.js修改为reportDataForTab.js。
   把indexReportData.js修改为reportData.js.
27，使用轮播时，做到以下几点：
  1）在出现轮播的.html页面，分别在页面头导入carousel.css文件，页面尾部导入carousel.js文件，页面<body>标签中加入   onload="carouselInit();" 属性及值 ；
  2）轮播区域的容器分三级，形如下面代码所示。
             a)第一级的<div>中，注意前面三个属性，class需要赋值为“carousel”，表明轮播身份，属性onclick="enterCarousel(this);" 需要原样拷贝，属性 data-Interval="6000"
                                             的6000这个值指明轮播周期，可以根据需求变动;其它的data-的属性，都是沿用原来block属性的用途，缺一不可。
             b)第二级<div>，class="img-ct"原样拷贝，   style="height: 281px; width: 281px;"  这个属性值必须要有，宽度值会根据第三级的div的宽度*轮播图片的个数得到改写，但要有初始值，最好给一个图片的宽度。
             c)第3级<div>是被轮播的元素，可以是所有类型的block，属性 class="elemCarousel "原样拷贝，    style="height: 281px; width: 281px;" 需要准确的指出每个轮播图片的宽度；
               onclick="excuteOnClick(this);"属性里，存放按ok键后的操作，跟block的onclick属性作用一致，根据需求赋值不同德函数。            
                     
       <div  class="elem carousel"   onclick="enterCarousel(this);"   data-Interval="6000"  id="home_04" name="home_04" 
        data-up="0"  data-right="home_06" data-down="home_05" data-left="home_03" data-focus_id="border_home_04" 
			style="top: 63px; left: 968px; height: 281px; width: 281px;">
			
			<div class="img-ct" style="height: 281px; width: 281px;">
			
				<div class="elemCarousel " id="home_car_041" name="home_car_04" onclick="excuteOnClick(this);" style="height: 281px; width: 281px;">
					<img src="images/big-1-1danish.png"   style="height: 281px; width: 281px;" />
					<img src="images/zhezhao2.png"   style="height: 281px; width: 281px;" />
					<span style="width: 281px;">My Sassy Girl</span>
					<b class="tvMarkedBg"></b>
					<em class="MarkedText">VIP</em>
				</div>
				<div class="elemCarousel " id="home_car_051" name="home_car_05" onclick="excuteOnClick(this);" style="height: 281px; width: 281px;">
					 
					<img src="images/big-1-1panda.png"  style="height: 281px; width: 281px;"/>
					<img src="images/zhezhao2.png"  style="height: 281px; width: 281px;"/>
					<span style="width: 281px;">Teenage Mutant Ninja Turtles</span>
				</div>
			</div>
		</div>
28,index.html文件中，iframeDiv中元素的left=“1920”这个值去掉
	<div id="iframeDiv">
		<iframe id="homePageHome" name="homePageHome" class="myIframe" frameborder="0" marginheight="0" marginwidth="0" src="home.html" data-src="home.html"></iframe>
		<iframe id="homePageVideos" name="homePageVideos" class="myIframe" frameborder="0" marginheight="0" marginwidth="0" src="videos.html"></iframe>
		<iframe id="homePageTv" name="homePageTv" class="myIframe" frameborder="0" marginheight="0" marginwidth="0" src="tvNew.html"></iframe>
		<iframe id="homePageApps" name="homePageApps" class="myIframe" frameborder="0" marginheight="0" marginwidth="0" src="apps.html"></iframe>
	</div>

29，角标：
（1）图片（id="home_06"有示例)
   <img src="http://oss.launcher.tcloudfamily.com/i18n/31a3730d53ec40e29eaa28bcaead6321.png?md5=4b5278dcc311337659a28d0f885ff6c6" class="blockResImg"></img>
（2）透明图片+背景（使用方法同下）
   <b class="tvMarkedBg"></b>
   <em class="tvMarked"></em>
 （3）文字+背景（轮播有参考）
    <b class="tvMarkedBg"></b>
    <em class="MarkedText">VIP</em>
30，首页中，各页面需要增加以下属性，防止鼠标右键，选择，拖动等操作。
oncontextmenu='return false' ondragstart='return false' onselectstart='return false' onbeforecopy='return false'
如下示例：
<body onload="init()" onunload="uninit()" oncontextmenu='return false' ondragstart='return false' onselectstart='return false' onbeforecopy='return false' >
31,标题的<span>,必须放在block里作为第一个<span>;
32，首页中增加<span id="span_scaleplate" style="visibility:hidden;"></span>;
33,注意轮播调用FocusId()函数的方法。






   
   