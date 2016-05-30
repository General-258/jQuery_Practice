$(function(){
    $("#pane1 h5.head").bind("click",function(){
        if($(this).next().is(":visible")){//如果内容显示
            $(this).next().hide();//隐藏
        }else {
            $(this).next().show();//显示
        }
    })
});