var YODU_currentMusicType = -1; // 用来标识当前音乐类型，0表示音频，1表示Mod

var yaudio = new Audio();
yaudio.controls = true;
chipPlayer = new ChiptuneJsPlayer(new ChiptuneJsConfig(0)); // 0表示不循环，改为-1无限无缝循环，需要手动下一曲

function playbtu(){
    // 首次播放
    if (YODU_currentMusicType == -1)
        next();

    var oyd = document.getElementById('ydmc');
    if (YODU_currentMusicType == 0) {
        if (yaudio.paused) {
            yaudio.play();
            oyd.className = 'yodu-player icon-musical-note';
        } else {
            yaudio.pause();
            oyd.className = 'yodu-player icon-bofang';
        }
    } else if (YODU_currentMusicType == 1) {
        if (chipPlayer.togglePause()) {
            oyd.className = 'yodu-player icon-bofang';
        } else {
            oyd.className = 'yodu-player icon-musical-note';
        }
    }
}

// 下一曲
function next() {
    var oyd = document.getElementById('ydmc');
    a = (a + 1) % musicArr.length;
    var sj = musicArr[a];
    if (isChipTune(sj.mp3)) {
        YODU_currentMusicType = 1; // 先更改类型
        yaudio.pause(); // 再停止播放

        chipLoadURL(sj.mp3);
    } else {
        YODU_currentMusicType = 0;
        chipPlayer.stop();

        yaudio.src = sj.mp3;
        yaudio.ti = sj.title;
        yaudio.art = sj.artist;
        yaudio.play();
    }
    var autopause=0;
    oyd.className = 'yodu-player icon-musical-note';
}

yaudio.addEventListener('ended',
function() {
    if (YODU_currentMusicType == 0) // 如果类型不匹配，说明被stop
        next();
},
false);

chipPlayer.onEnded(function (response) {
    if (YODU_currentMusicType == 1)
        next();
});

// 从URL载入音频
function chipLoadURL(path) {
    chipPlayer.load(path, function(buffer) {
        chipPlayer.play(buffer);
    });
}

// 检测URL是否为Chiptune
function isChipTune(path) {
    var reg = /\.(mod|xm|it|s3m)$/;
    var filename = path;
    if(reg.test(filename)){
        return true;
    }
    return false;
}