$(function(){
    $("ul li").click(function(){//为li加上点击事件
        alert($(this).html());
    });
    var $li=$("ul li:eq(1)").detach();//删除第二个元素节点并付给$li
    $li.appendTo("ul");//重新把删除的元素加入到ul中，发现，之前给它绑定的事件还是有效的，但是用remove删除之后绑定的事件将会失效
});