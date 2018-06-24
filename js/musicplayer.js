/*
 * 当鼠标点击时，判断当前的状态，如果是播放状态，图标变成暂停键
 * 如果是暂停状态，图标变成播放键
 */

/**
 * @author: Quan
 * @Description: 播放方法
 * @param : audioId=歌曲名称
 * @param : type=1时点击了列表
 * @return:
 * @date: 2018/6/20 23:02
 */
function play(audioId, type) {
    // 定义变量play，值为audio id="song11"
    var play = $("#song11");
    // 定义变量status,值为显示暂停按钮
    var status = $('.pause').css('display');
    // 定义audioSrc,值为audioId src的值
    var audioSrc = $(audioId).attr('src');
    // 判断是否点击列表，点击时播放点击的歌曲，未点击时播放第一首歌曲
    // 判断src是否为空
    if (audioSrc == null || audioSrc == undefined || audioSrc == "") {
        var song1Src = $("#song0").attr("src");
        play.attr("src", song1Src);
        // 获取a标签的文本
        var title = $("#a0").text();
        // 赋值songName
        $("#songName").text(title);

    } else {
        // #song0
        var aTagId = "#a"+ audioId.substr(5,audioId.length);

        // 获取a标签的文本
        var title = $(aTagId).text();
        // 赋值songName
        $("#songName").text(title);
        play.attr('src', audioSrc);
    }
    // src为空时赋值song1的src

    // 设置play的src属性的值
    // 控制台输出play的src的值
    // jquery对象转换成js对象
    play = $("#song11")[0];
    // 控制台输出status
    // status为暂停按钮显示与否
    // 暂停按钮没有显示时 if为播放，else为暂停
    if (status == 'none' || type == 1) {
        // 显示暂停按钮
        $('.pause').css('display', "inline-block");
        // 隐藏播放按钮
        $('.play').css('display', "none");

        play.play();
    } else {
        $('.pause').css('display', "none");
        $('.play').css('display', "inline-block");
        play.pause();
    }


}

/**
 * @author: Quan
 * @Description: 获取歌曲列表
 * @param :null
 * @return:
 * @date: 2018/6/24 22:09
 */
function getMusicList() {

    $.ajax({
        type: 'POST',
        url: 'json/music_list.json',
        data: {},
        async:false,
        success: function (data) {
            var list = "";
            // data不等于空时
            if(data!=null &&data!=undefined&&data!=""){
                // 循环获取歌曲
                for(var i=0;i<data.musiclist.length;i++){
                    // 作者
                    var author = data.musiclist[i].author;
                    // 歌曲名
                    var title = data.musiclist[i].title;
                    // 歌曲地址
                    var src = data.musiclist[i].src;

                    list += " <li  class=\"list-group-item\">\n" +
                        "         <audio id=\"song"+i+"\" src=\""+src+"\" ></audio>\n" +
                        "         <a id=\"a"+i+"\" title=\""+title+"\" class=\"artist\" onclick='play(\"#song"+i+"\",1)'>"+title+"-"+author+"</a>\n" +
                        "  </li>";

                }
                $(".list-group").html(list);
            }

        },
        error: function () {

        }
    });

}

// 页面加载时执行
$(document).ready(function () {
    $(".previous").click(function () {

    });
    $(".play").click(function () {
        play();
    });
    $(".pause").click(function () {
        play();
    });
    $(".next").click(function () {

    });

    // 获取歌曲列表
    getMusicList();

});



