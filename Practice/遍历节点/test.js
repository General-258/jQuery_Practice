$(function(){
    /*children()方法的使用，它只能匹配所有的子元素，不考虑其他后代元素*/
    var $body=$("body").children();
    var $p=$("p").children();
    var $ul=$("ul").children();
    alert($body.length);
    alert($p.length);
    alert($ul.length);
    for(var i= 0,len=$ul.length;i<len;i++){
        alert($ul[i].innerHTML);
    }
    /*next（）用来匹配元素后面紧邻的同辈元素*/
    /*prev（）用来匹配元素前面紧邻的同辈元素*/
    /*siblings（）用来匹配元素前后所有的同辈元素*/
    /*closet（）用来取得最近的祖先元素*/
    /*parent（）用来获得集合中每个匹配元素的父集元素*/
    /*parents（）用来获取集合中每个匹配元素的祖先元素*/
});