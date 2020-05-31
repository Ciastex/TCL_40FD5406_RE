// JavaScript Document
//根据URL地址的属性选择是youtube接口还是Video接口

 var url1 = " http://www.baidu.com/?age=video&k=1&site=asp&abc=123;"
var url2 = " http://www.baidu.com/?age=youtube&k=1&site=asp&abc=123;"
 var r = getParameter("age",url1);
 var pName = r.split("=")[0];
 var pValue = r.split("=")[1]; 
 if(pValue=="youtube")//根据类型选择不同的播放器
 {
    //Youtube
	var oVideo=document.getElementById("video_content");
	 oVideo.style.display='none';
    var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      /*var player;*/
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '1080',
          width: '1920',
          videoId: 'M7lc1UVf-VE',
          playerVars: { 'autoplay': 1, 'controls': 0 },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
	    function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      //var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          //setTimeout(stopVideo, 60000);
          //done = true;
        }
      }
      function stopVideo() { //定义方法实现暂停
        player.stopVideo();
      }
	  function playVideo() //定义方法实现播放
	  {
	      player.playVideo();
	  }
	  function getplaytime() //定义方法获取播放时间
	  {
	      return player.getCurrentTime();
	  }
	  function getALLTime()  //定义方法获取视频总时间
	  {  
	      return player.getDuration();
	  }
 }
 else
 {
     //video
	 var myVideo=document.getElementById("video1");
	 var oPlay=document.getElementById("player");
	 oPlay.style.display='none';
	 myVideo.src="image/cong.mp4";
 }