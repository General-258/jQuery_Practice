$(function(){
    $("strong").wrap("<b></b>");//用warp包裹节点，他会把每个元素进行单独包裹
    $("h2").wrapAll("<b></b>");//用wrapAll包裹节点时，会把所有的元素用一个元素来包裹
    $("ul li").wrapInner("<b></b>");//wrapInner会把标签中的内容一一包裹起来
});