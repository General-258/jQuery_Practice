$(function(){
    var page=1;//初始化版面数为1
    var i=4;//没版放四张图片
    $("span.next").click(function(){  //绑定click事件
        var $parent=$(this).parents("div.v_show");//根据当前单机的元素获取到父元素
        var $v_show=$parent.find("div.v_content_list");//通过父元素找到内容展示区
        var $v_content=$parent.find("div.v_content");//通过父元素找到内容展示区外围的div
        var v_width=$v_content.width();//获取到内容区的宽度
        var len=$v_show.find("li").length;//获取到总的视频图片数
        var page_count=Math.ceil(len / i);//只要不是整数，就往打的方向取最小的整数
        if(!$v_show.is(":animated")) {
            if (page == page_count) {  //已经到达最后一个版了，如果再向后，就回到第一个版面
                $v_show.animate({left: '0px'}, "slow");//通过改变left值，来回到第一个页面
                page = 1;
            } else {
                $v_show.animate({left: '-='+v_width}, "slow");//通过改变left值，达到每次换一个版面
                page++;
            }
            $parent.find("span").eq((page-1)).addClass("current").siblings().removeClass("current");
            //给指定的span元素添加current样式，然后去掉span元素的同辈元素上的current样式。
        }
    });
    $("span.prev").click(function(){
        var $parent = $(this).parents("div.v_show");//根据当前点击元素获取到父元素
        var $v_show = $parent.find("div.v_content_list"); //寻找到“视频内容展示区域”
        var $v_content = $parent.find("div.v_content"); //寻找到“视频内容展示区域”外围的DIV元素
        var v_width = $v_content.width();
        var len = $v_show.find("li").length;
        var page_count = Math.ceil(len / i) ;   //只要不是整数，就往大的方向取最小的整数
        if( !$v_show.is(":animated") ){    //判断“视频内容展示区域”是否正在处于动画
            if( page == 1 ){  //已经到第一个版面了,如果再向前，必须跳转到最后一个版面。
                $v_show.animate({ left : '-='+v_width*(page_count-1) }, "slow");
                page = page_count;
            }else{
                $v_show.animate({ left : '+='+v_width }, "slow");
                page--;
            }
            $parent.find("span").eq((page-1)).addClass("current").siblings().removeClass("current");
        }
    });
});