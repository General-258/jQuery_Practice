$(function(){
    var $div_li=$("div.tab_menu ul li");//获取到li
    $div_li.click(function(){    //为li绑定单机事件
        $(this).addClass("selected").siblings().removeClass("selected");//为单击的元素添加样式，不给同辈元素添加该样式
        var index=$div_li.index(this);//获取当前单机元素的索引
        $("div.tab_box>div").eq(index).show().siblings().hide();//获取到div，显示li元素对应的div元素，并且隐藏同辈元素
    });
});