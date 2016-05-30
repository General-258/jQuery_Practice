$(function(){
    var $li=$("ul li:eq(1)").remove();//用remove方法删除了第二个li节点
    $li.appendTo("ul");//把刚才删除的节点重新插入到ul中的最后面
    $("ul li").remove("li[title=苹果]");//将属性title为苹果的元素删除
});