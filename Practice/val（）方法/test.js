$(function(){
    $("#name").focus(function(){    //用value用来设置和获取元素的值 也可以用this.defaultValue来代替汉字
        var txt_value=$(this).val();
        if(txt_value=="请输入用户名"){
            $(this).val(" ");
        }
    });
    $("#name").blur(function(){
        var txt_value=$(this).val();
        if(txt_value==" "){
            $(this).val("请输入用户名");
        }
    });
    $("#pass").focus(function(){
        var txt_value=$(this).val();
        if(txt_value=="请输入密码"){
            $(this).val(" ");
        }
    });
    $("#pass").blur(function(){
        var txt_value=$(this).val();
        if(txt_value==" "){
            $(this).val("请输入密码");
        }
    });
});