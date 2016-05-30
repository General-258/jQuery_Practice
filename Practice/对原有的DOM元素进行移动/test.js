$(function(){
    var $one=$("ul li:eq(1)");//获取到第二个li元素节点
    var $two=$("ul li:eq(2)");//获取到第三个li元素节点
    $two.insertBefore($one);//将第三个li元素节点插入到第二个li元素节点的前面
});