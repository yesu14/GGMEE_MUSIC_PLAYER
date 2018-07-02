function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    }
    return null;
}

function makeUserName() {
    var username = getQueryString('name');
    var password = getQueryString('password');

    $('#username').text(username);
    $('#password').text(password);
}

function postRec() {
    $.ajax({
        type: 'POST',
        url: '../input.html',
        data: data,
        success: function (data) {
            console.log(data);
        }
    });
}
$(function() {
    // https://zhidao.baidu.com/question/1608819698616680987.html
    postRec();
    // console.log(s);
    // return;
    // makeUserName();
});