$(document).ready(function() {
    //页面中的DOM已经装载完成时，执行的代码
    $(".hmain").hover(function() {
        $(this).children("ul").slideDown("fast");

    }, function() {
        $(this).children("ul").slideUp("fast");

    });
    //搜索框的动态显示
    var i = 0;
    $(".search_inp img").click(function() {
        $(".search_inp img").toggle("fast",
            function() {
                $(".search_inp input").attr("value", "请输入产品名");
                if (i % 2) {
                    //document.title = i;
                    $(".search_inp input").attr("value", "请输入18位溯源码");
                };
            });
        i++;
    });
    $(".search_inp input").click(function() {
        $(".search_inp input").attr("value", " ");
    });
    $(".news_list_search input").click(function() {
        $(".news_list_search input").attr("value", " ");
    });


    $(".goods_listpic>a").hover(function() {
        $(this).children("img").fadeTo("slow", 0.5);

    }, function() {
        $(this).children("img").fadeTo("slow", 1.00);

    });
    //详情页tab效果
    var tab0 = $(".video_title >li");
    var date1 = $(".video_date1 >li");
    var date2 = $(".video_date2 >li");
    var date3 = $(".video_date3 >li");
    var date4 = $(".video_date4 >li");
    var a = ".video_date";
    var b = ".pro_log";
    //为flash播放器调整显示src地址
    /* date1.mouseover(
        function() {
            var a = "出芽期";
            var show_no = $(".video_date1 li").index(this) + 1;
            var hehe = a + show_no;
        }
    );
    date2.mouseover(
        function() {
            var show_no = $(".video_date2 li").index(this) + 1;
            //document.title = show_no;
        }
    );
    date3.mouseover(
        function() {
            var show_no = $(".video_date3 li").index(this) + 1;
        }
    );
    date4.mouseover(
        function() {
            var show_no = $(".video_date4 li").index(this) + 1;
            //document.title = show_no;
        }
    );*/
    tab0.mouseover(
        function() {
            bacch();
            bacc();
            //得到当前索引值
            var show_no = $(".video_title li").index(this) + 1;
            var show_log = $(".video_title li").index(this) - 3;
            var c = a + show_no;
            var d = b + show_log;
            $(c).fadeIn("fast");

            //document.title = d;
            $(d).slideDown("fast");
        }
        /*,function() {
			var show_no=$(".video_title li").index(this)+1;
			var b=a+show_no;
			//以上不得不写两边
		$(b).fadeOut("fast");
	}
	*/
    );

});



function pictoggle() {
    $(".search_inp img").toggle();
}

function bacch() {
    var a = ".video_date";
    $(".video_date1").fadeOut("fast");
    $(".video_date2").fadeOut("fast");
    $(".video_date3").fadeOut("fast");
    $(".video_date4").fadeOut("fast");
}

function bacc() {
    $(".pro_log1").slideUp("fast");
    $(".pro_log2").slideUp("fast");
    $(".pro_log3").slideUp("fast");
    $(".pro_log4").slideUp("fast");
}