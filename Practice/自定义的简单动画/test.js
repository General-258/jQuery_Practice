$(function(){
    $("#pane").css("opacity",0.5);//������div�Ĳ�͸����
    $("#pane").click(function(){
        $(this).animate({left:"400px",height:"200px",opacity:"1"},3000).animate({top:"200px",width:"200px"},3000).fadeOut("slow");
    })
});