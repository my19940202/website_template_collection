$(document).ready(function() {
    //页面中的DOM已经装载完成时，执行的代码
    $(".hmain").hover(function() {
        $(this).children("ul").slideDown("fast");

    }, function() {
        $(this).children("ul").slideUp("fast");

    });
    //搜索框的动态显示
});
