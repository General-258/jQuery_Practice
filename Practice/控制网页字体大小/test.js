$(function(){
    $("span").click(function(){
        var thisEle=$("#para").css("font-size");//获取到段落的字体大小
        var textFontSize=parseInt(thisEle,10);  //以10进制转换获取的字体,就是去掉单位
        var unit=thisEle.slice(-2);//从倒数第二个元素开始选取，就是选取了它的单位px；
        var cName=$(this).attr("class");//获取到class属性
        if(cName=="bigger"){//如果class为bigger
            textFontSize+=2;  //值加2
        }else if(cName=="smaller"){//如果class为smaller
            textFontSize-=2;    //值减2
        }
        $("#para").css("font-size",textFontSize+unit);//得到最后的字体大小，并加上单位
    });
});