$(function(){
    var $comment=$('#comment');         //获取到评论框
    $(".bigger").click(function(){      //添加点击事件
        if($comment.height()<500){      //如果评论框的高度小于500
            $comment.height($comment.height()+50);  //点击时高度每次增加50
        }
    });
    $('.smaller').click(function(){    //添加点击事件
        if($comment.height()>50) {     //如果评论框的高度大于50
            $comment.height($comment.height() - 50);  //点击时高度每次减小50
        }
    })
});
