$(function(){
    $('span').click(function(event){   //为span元素绑定click事件
        var txt=$('#msg').html()+"<p>内层span元素被单击</p>";
        $('#msg').html(txt);
        event.stopPropagation()
    });
    $('#content').bind("click",function(event){//为div元素绑定事件
        var txt=$('#msg').html()+'<p>外层div元素被单击</p>';
        $('#msg').html(txt);
        event.stopPropagation()
    });
    $("body").bind("click",function(){//外层body元素绑定事件
        var txt=$('#msg').html()+"<p>body元素被单击</p>";
        $('#msg').html(txt);
    });
});