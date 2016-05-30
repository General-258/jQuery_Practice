$(function(){
    var x=10;
    var y=10;
    $("a.tooltip").mouseover(function(e){
        this.myTitle=this.title;
        this.title=" ";
        var $tooltip=$("<div id='tooltip'>"+this.myTitle+"</div>");//创建div元素
        $("body").append($tooltip);//把它插入到文档中
        $("#tooltip").css({"top": (e.pageY+y)+"px","left": (e.pageX+x)+"px"}).show("fast");
    }).mouseout(function(){
        this.title=this.myTitle;
        $("#tooltip").remove();
    }).mousemove(function(e){
        $("#tooltip").css({"top":(e.pageY+y)+"px","left":(e.pageX+x)+"px"});
    });
});