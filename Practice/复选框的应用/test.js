$(function(){
    $("CheckedAll").click(function(){
        $('[name=items]:checked').attr('checked',true);
    });
    $("#CheckedNo").click(function(){
        $('[name=items]:checkbox').attr('checked',false);
    });
    $("#CheckedRev").click(function(){
        $('[name=items]:checkbox').each(function(){
            this.check=!this.checked;
        });
    });
    $("#send").click(function(){
        var str="你选中的是：\r\n";
        $('[name=items]:checkbox:checked').each(function(){
           str+=$(this).val()+"\r\n";
        });
        alert(str);
    });
});