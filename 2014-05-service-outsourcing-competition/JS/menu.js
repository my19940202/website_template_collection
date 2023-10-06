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
                $(".search_inp input").attr("value", "请输入景区名");
                if (i % 2) {
                    //document.title = i;
                    $(".search_inp input").attr("value", "请输入路线名");
                };
            });
        i++;
    });


    /*鼠标键入后，value为空*************************/
    $("input").click(function() {
        var ra='radio';
        if ( $(this).attr("type")!=ra) {
            //alert("this is a radio button!")
            $(this).attr("value", "");
        };
    });

    /***/
    $(".safety1").hover(function() {
        $(this).children("img").fadeTo("fast", 0.5);

    }, function() {
        $(this).children("img").fadeTo("slow", 1.00);

    });

    $(".xtr_weixin").hover(function() {
        $(".QR_code").fadeIn("fast");

    }, function() {
        $(".QR_code").fadeOut("fast");

    });




    /*图片的浮动**************************************/
    $(".xtr_spots_cell").hover(function() {
        $(this).children("div").children("p").fadeIn("fast");
        $(this).children("div").animate({top:"-8px"},300);  
    }, function() {
        $(this).children("div").children("p").fadeOut("slow");
        $(this).children("div").animate({top:"0px"},300);

    });

    $(".notice_content > ul > li").hover(function() {
        $(this).children("a").animate({right:"-8px"},300);  
    }, function() {
        $(this).children("a").animate({right:"0px"},300);

    });


    /*图片放大*/
    $(".xtr_spot_cell").hover(function() {
        //$(this).children("img").css("top","-100px");
        $(this).children("img").animate({

             width: "105%",
             height: "105%",

        },300);  
    }, function() {
       $(this).children("img").animate({
             width: "100%",
                height: "100%",
        },500); 

    });


    /********************/
   $(window).scroll(function(){
                if ($(window).scrollTop()>100){
                    $(".xtr_backtop").fadeIn(1500);
                }
                else
                {
                    $(".xtr_backtop").fadeOut(1500);
                }
            });

            //当点击跳转链接后，回到页面顶部位置
            $(".xtr_backtop").click(function(){
                $('body,html').animate({scrollTop:0},700);
                return false;
            });
            
});
function pictoggle() {
    $(".search_inp img").toggle();
}
