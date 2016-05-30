$(function(){                                      //等待Dom加载完毕
    var $category=$("ul li:gt(5):not(:last)");     //获取到索引值大于5且除去最后一条的所有品牌集合赋给category
    $category.hide();                              //把category隐藏
    var $toggleBtn=$("div.showMore>a");            //通过class为showMore的div的所有子元素a，即为获取到“显示全部品牌”按钮
    $toggleBtn.click(function(){                   //给按钮加上点击事件
        if($category.is(":visible")) {             //如果是显示的
            $category.hide();                      //当点击的时候，把category隐藏掉
            $(this).find("span")                   //并且找到它里面的span元素
                .css("background", "url(img/down.gif) no-repeat 0 0")//改变他的背景图
                .text("显示全部品牌");               //改变文字
            $("ul li").removeClass("promoted");    //去除高亮演示
        }else{                                     //如果是隐藏的
            $category.show();                      //当点击的时候，把category显示出来
            $(this).find("span")                   //找到span元素
                .css("background", "url(img/up.gif) no-repeat 0 0")//更改被背景图
                .text("精简显示品牌");               //更改文字
            $("ul li").filter(":contains('佳能'),:contains('尼康'),:contains('奥林巴斯')")//筛选出需要高亮的元素
                .addClass("promoted");//添加高亮样式
        }
        return false;                              //用来阻止超链接的跳转
    });
});