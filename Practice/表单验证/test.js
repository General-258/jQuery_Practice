$(function(){
    $("form :input.required").each(function(){                //在表单中获取到class为required的input元素
       var $required=$("<strong class='high'>*</strong>");    //创建一个节点，
        $(this).parent().append($required);                  //给上面获取到的元素追加该节点
    });
    $('form :input').blur(function(){            //给表格中的input元素绑定blur事件
        var $parent=$(this).parent();           //获取到这些input元素的父元素
        $parent.find(".formtips").remove();      //父元素找到以前添加的提醒事件，并移除
        //验证用户名
        if($(this).is('#username')){          //判断是否为username
            if(this.value==" "||this.value.length<6){         //如果值为空或值的长度小于六位
                var errorMsg='请输入至少6位的用户名.';             //错误提示
                $parent.append('<span class="formtips onError">'+errorMsg+'</span>');//父元素后面追加上错误提示
            }else{                            //如果输入的值正确
                var okMsg='输入正确。';            //正确提示
                $parent.append('<span clsaa="formtips onSuccess">'+okMsg+'</span>');//父元素后面添加上正确提示
            }
        }
        //验证邮箱  ，注释与验证用户名类同
        if($(this).is('#email')){
            if(this.value==""||(this.value!=""&&! /.+@.+\.[a-zA-Z]{2,4}$/.test(this.value))){
                var errorMsg="请输入正确的邮箱地址。";
                $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            }else{
                var okMsg='输入正确。';
                $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
            }
        }
    }).keyup(function(){//添加即时提醒
        $(this).triggerHandler("blur");
    }).focus(function(){
        $(this).triggerHandler("blur");
    });
    $('#send').click(function(){
        $("form .required:input").trigger('blur');
        var numError=$('form .onError').length;
        if(numError){
            return false;
        }
        alert("注册成功，密码已发送到你的邮箱，请查收。");
    });
});