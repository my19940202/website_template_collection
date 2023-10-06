/*
 created by xsb 2014-6-30
 almost for the index
*/
jQuery(document).ready(function($) {
	var i = 0;
	var j = 0;

	//$(this).children(".x_itpichide").fadeIn("fast");
	$(".x_cellpic").hover(
		function(){
			$(this).children(".x_itpichide").fadeIn("fast")	
		},
		function(){
			$(this).children(".x_itpichide").fadeOut("slow")
		}
	);

	//鼠标键入输入框，value制空
    $("input").click(function() {
        var ra='text';
        if ($(this).attr("type")==ra) {
            //alert("this is a radio button!")
            $(this).attr("value", "");
        };
    });
	// hover问题的解决
	$(".x_toggle").hover(
		function(){
			i++;
			x_show();
		},
		function(){
			i--;
			x_show();
		}
	);
	$(".x_togglecontent").hover(
				function(){
					j++;x_show();
				},
				function(){
					j--;x_show();
				}
			);
	function x_show(){
		if (i==0&&j==0|| i==1&&j==1) 
			 $(".x_togglecontent").css("display","none");
		if((i==0&& j==1 )||(i==1&& j==0 ) ){
				$(".x_togglecontent").css("display","block");	
		}
	}

// 彈窗
	$(".x_envoloe").click(
		function (){
			$('#x_mailmodall').modal('show');	
		}
	);
	$(".x_mailmodall_body input:eq(5)").click(
		function(){
			$('#x_3Qmodall').modal('show');
			$('#x_mailmodall').modal('hide');
		}
	);
});

/*var userAgent = navigator.userAgent.toLowerCase();
    // Figure out what browser is being used 
    jQuery.browser = {
        version: (userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1],
        safari: /webkit/.test(userAgent),
        opera: /opera/.test(userAgent),
        msie: /msie/.test(userAgent) && !/opera/.test(userAgent),
        mozilla: /mozilla/.test(userAgent) && !/(compatible|webkit)/.test(userAgent)
    }; 
    if ($.browser.msie&&($.browser.version == "7.0") ) {
        console.log("IE7");
    };*/
function addfavor(url,title) {
    if(confirm("网站名称："+ document.title+"\n网址："+document.domain +"\n确定添加收藏?")){
        var ua = navigator.userAgent.toLowerCase();
        if(ua.indexOf("msie 8")>-1){
            external.AddToFavoritesBar(url,title,'');//IE8
        }else{
            try {
                window.external.addFavorite(url, title);
            } catch(e) {
                try {
                    window.sidebar.addPanel(title, url, "");//firefox
                } catch(e) {
                    alert("加入收藏失败，请使用Ctrl+D进行添加");
                }
            }
        }
    }
    return false;
}