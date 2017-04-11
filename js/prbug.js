var ody=document.getElementById('ydmc');
if (yaudio.paused) {var autopause=0;
ody.className = 'yodu-player icon-bofang';
} else {var autopause=1;
ody.className = 'yodu-player icon-musical-note';
}
var otheraudio = document.getElementsByTagName('audio');
if(autopause==1||znst==1){
if(otheraudio.paused || otheraudio.length==0){var znst=0;
           yaudio.play();
           ody.className = 'yodu-player icon-musical-note';
           console.info("背景音乐恢复播放");  
}
else{var znst=1;
  yaudio.pause();
            ody.className = 'yodu-player icon-bofang';
       console.info("背景音乐智能暂停");  
}
}