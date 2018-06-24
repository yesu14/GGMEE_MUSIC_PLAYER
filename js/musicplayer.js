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
        var song1Src = $("#song1").attr("src");
        play.attr("src", song1Src);
        // 获取a标签的文本
        var title = $("#a1").text();
        // 赋值songName
        $("#songName").text(title);

    } else {
        play.attr('src', audioSrc);
    }
    // src为空时赋值song1的src

    // 设置play的src属性的值
    // 控制台输出play的src的值
    console.log("src==" + play.attr('src'));
    // jquery对象转换成js对象
    play = $("#song11")[0];
    // 控制台输出status
    console.log('status--' + status);
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
    $(".artist").click(function () {
        var strId = $(this).attr('id');
        console.log(strId);
        var audioId = strId.substr(1, strId.length);
        audioId = "#song" + audioId;
        //title为获取的列表中的歌曲名称
        var title = $(this).text();
        console.log("title===========" + title);
        // 用.text()方法赋值文字的值
        $("#songName").text(title);
        play(audioId, 1);


    })
});



