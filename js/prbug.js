var ody=document.getElementById('ydmc');

function isPaused() {
  if (YODU_currentMusicType == -1)
    return true;
  else if (YODU_currentMusicType == 0)
    return yaudio.paused;
  else if (YODU_currentMusicType == 1)
    return chipPlayer.isPaused();
}

function getCurPlayer() {
  if (YODU_currentMusicType == 0)
    return yaudio
  else if (YODU_currentMusicType == 1)
    return chipPlayer
}

if (isPaused()) {var autopause=0;
  ody.className = 'yodu-player icon-bofang';
} else {var autopause=1;
  ody.className = 'yodu-player icon-musical-note';
}
var otheraudio = document.getElementsByTagName('audio');
if(autopause==1||znst==1){
  if(otheraudio.paused || otheraudio.length==0){var znst=0;
    if (YODU_currentMusicType == 0) { // libopenmpt存在BUG，临时处理
      getCurPlayer().play();
      ody.className = 'yodu-player icon-musical-note';
      console.info("背景音乐恢复播放");  
    }
  } else {
    if (YODU_currentMusicType == 0) {
      var znst=1;
      getCurPlayer().yaudio.pause();
      ody.className = 'yodu-player icon-bofang';
      console.info("背景音乐智能暂停");  
    }
  }
}