$(function(){
    $("#sub").bind("click",function(event){//绑定事件
        var username=$("#username").val();    //获取到id为username的元素的值
        if(username==""){                    //如果元素的值为空
            $("#msg").html("<p>文本框的值不能为空</p>");//给id为msg的元素追加内容
            event.preventDefault();   //阻止表单的提交    也可以写为：return false
        }
    })
});