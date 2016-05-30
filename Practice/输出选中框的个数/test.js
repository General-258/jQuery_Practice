
$(function(){
    $("#btn").click(function(){
        var items = $("input[name='check']:checked");
        alert("选中的地方为："+items.length);
    });
});