$(function(){
    $("#pane1 h5.head").toggle(function(){
        $(this).next().toggle()
    },function(){
        $(this).next().toggle();
    })
});
//toggle方法用于模拟鼠标连续单机事件，第一单机时触发第一个函数，第二次单机时，触发第二个函数。