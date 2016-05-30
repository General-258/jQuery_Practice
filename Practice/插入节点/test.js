$(function(){
    var $li_1=$("<li title='香蕉'>香蕉</li>");//创建了3个节点
    var $li_2=$("<li title='西瓜'>西瓜</li>");
    var $li_3=$("<li title='其他'>其他</li>");
    var $pare=$("ul");//获取到ul节点
    var $two=$("ul li:eq(1)");//获取到ul的第二个li元素节点
    $pare.append($li_1);//用append（）方法将元素插入到ul中的最后面
    $pare.prepend($li_2);//用prepend（）方法将元素插入到ul中的最前面
    $li_3.insertAfter($two);//用insertAfter将元素插入到第二个li元素节点后面
});