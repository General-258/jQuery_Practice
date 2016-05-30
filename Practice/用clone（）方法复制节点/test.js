$(function(){
    $("ul li").click(function(){
        $(this).clone(true).appendTo("ul");//复制当前被点击的节点，并复制一个追加到ul中；
    });
});
//复制出来的节点没有任何行为，若需要新元素也有行为，可以给clone（）方法传递一个参数true，它可以把复制元素的事件复制过来