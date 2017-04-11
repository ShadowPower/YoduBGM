## 这是什么
这是修改版的 YoduBGM ，解决了与 Handsome 主题的兼容性问题（Handsome内置了YoduBGM），并增加 mod 音频播放功能。

依赖(chiptune2.js)[https://github.com/deskjet/chiptune2.js]，稍作修改，以识别当前播放状态。

需要注意： libopenmpt.js 的体积有 __2.14MB__ ，请慎重考虑使用。

## 使用方法
下载压缩包, 解压，将文件夹重命名为 __YoduChipBGM__ ，之后上传到你博客中的 /usr/plugins 目录，在后台启用。

移动本项目目录下的 __libopenmpt.js.mem__ 到网站根目录。

插件后台配置歌曲格式: 

{title:"xxx", artist:"xxx", cover:"http:xxxx", mp3:"http:xxxx"} ，每个歌曲之间用英文,隔开。

mp3属性支持使用wav/ogg/mp3/aac/xm/it/s3m/mod格式。

**请保证歌曲列表里至少有一首歌**！

## 添加网易云音乐(需主机支持curl扩展)
去网易云音乐官网找到音乐id,支持单曲|艺人|专辑|歌单类型的id解析，billboard等排行榜也支持(实质就是歌单)。

【0.4.0版开始不需要加载JQ也能完美使用了】  
【0.5.0版开始网易云音乐解析全面支持https】  
【0.6.0版当文章内播放器播放时背景音乐自动暂停beat】  
【ShadowPower：上一条说明可能失效】

## Chiptune2.js 许可协议
Copyright © 2013-2014 Simon Gündling.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.