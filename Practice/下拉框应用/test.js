$(function(){
    $('#add').click(function(){
        var $options=$('#select1 option:selected'); //获取到选中的选项
        var $remove=$options.remove();                //删除选中的选项
        $remove.appendTo('#select2');                //将删除的选项追加到对方
    });
    $('#add_all').click(function(){
        var $options=$('#select1 option');
        $options.appendTo('#select2');
    });
    $('select1').dblclick(function(){
        var $options=$("option:selected",this);
        $options.appendTo('#select2');
    });
    //向左添加
    $('#remove').click(function(){
        var $options=$('#select2 option:selected'); //获取到选中的选项
        var $remove=$options.remove();                //删除选中的选项
        $remove.appendTo('#select1');                //将删除的选项追加到对方
    });
    $('#remove_all').click(function(){
        var $options=$('#select2 option');
        $options.appendTo('#select1');
    });
    $('select2').dblclick(function(){
        var $options=$("option:selected",this);
        $options.appendTo('#select1');
    });
});