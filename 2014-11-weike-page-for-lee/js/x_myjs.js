/*
 created by xsb 2014-6-30
 almost for the index
*/
jQuery(document).ready(function($) {
	
	// 首页大轮播unslider
	$('.bo .banner').unslider({
		speed: 500,               //  The speed to animate each slide (in milliseconds)
		delay: 3000,
		arrows: true,
		fluid: true,
		dots: true
	});
	$('.bo .banner').hover(function(){
		$('.unslider-arrow').fadeIn("fast");
	},function(){
		$('.unslider-arrow').fadeOut("slow");		
	});
	var unslider = $('.bo .banner').unslider();
	$('.bo .unslider-arrow').click(function() {
		var fn = this.className.split(' ')[1];
		unslider.data('unslider')[fn]();
	});


	// 头部的弹出菜单
	$(".toggle").hover(
		function(){
			$(this).children(".unstyled").css("display","block");
			$(this).children("img").css("display","block");
		},function(){
			$(this).children(".unstyled").css("display","none");
			$(this).children("img").css("display","none");
		}
	);

});
