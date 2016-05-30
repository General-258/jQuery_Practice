$(function(){
    var $li_1=$("<li title='西瓜'>西瓜</li>");//创建元素节点的时候可以同时加入属性节点和文本节点
    var $li_2=$("<li title='葡萄'>葡萄</li>");
    var $li_3=$("<li title='雪梨'>雪梨</li>");
    var $li_4=$("<li title='火龙果'>火龙果</li>");
    $("ul").append($li_1);  //把创建的节点加入到ul中
    $("ul").append($li_2);
    $("ul").append($li_3);
    $("ul").append($li_4);
});