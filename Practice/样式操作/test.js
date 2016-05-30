$(function(){
    var p_class=$("p").attr("class");//获取元素的class
    $("p").attr("class","me");//设置样式
    $("h2").addClass("set");//追加样式
    $("ul").removeClass("two");//删除样式（不带参数时就会删除所有）
    $("h2").click(function(){
        $("h2").toggleClass("set");//切换样式
    });
});