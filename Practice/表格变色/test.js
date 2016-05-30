$(function(){
    $("tbody>tr:odd").addClass("odd");//给奇数行添加样式
    $("tbody>tr:even").addClass("even");//给偶数行添加样式
    $("tbody>tr").click(function(){  //给表格中的行加上点击事件
        $("tbody>tr").removeClass("selected");
        $(this).addClass("selected").siblings().removeClass("selected").end().find(":radio").attr("checked",true);
        //给点击的行加上样式，给它的兄弟行去掉样式，
        //这里，end（）方法是为了重新返回$（this）对象。然后被点击的按钮置为选中状态
        $("tbody>tr:has(':checked')").addClass("selected");
        //给被选中的按钮的行加上样式
    })
});