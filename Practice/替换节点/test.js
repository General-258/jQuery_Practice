$(function(){
    $("p").replaceWith("<strong>你最不喜欢的水果是？</strong>");//替换了p的内容
});
//利用replaceAll同样可以实现，只是写法不同：
//$("<strong>你最不喜欢的水果是？</strong>").replaceAll("p");