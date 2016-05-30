$(function(){
    var $p=$("p");//获取p
    var p_txt=$p.attr("title");//获取p的title属性
    $p.attr("title","新设置的属性");//设置p的title属性
    $("h2").removeAttr("title");//删除h2的title属性
});