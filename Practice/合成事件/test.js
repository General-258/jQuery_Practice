$(function(){
    $("#pane1 h5.head").hover(function(){
        $(this).next().show();
    },function(){
        $(this).next().hide();
    })
});
//hover方法用来模拟光标悬停事件，当鼠标移动到元素上时，触发第一个函数，当鼠标移出这个元素时触发第二个函数