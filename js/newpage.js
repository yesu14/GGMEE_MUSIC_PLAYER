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
        url: url,
        data: data,
        success: success,
        dataType: dataType
    });
}
$(function() {
    var s = Request("name");
    console.log(s);
    return;
    makeUserName();
});