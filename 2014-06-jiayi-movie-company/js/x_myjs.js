/*
 created by xsb 2014-6-30
 almost for the index
*/
jQuery(document).ready(function($) {
	// 二维码踏出
	$(".header .xj_wx").click(function(){
		$('#myModal').modal('show');
	});
	$(".header .xj_about").hover(
		function(){
			$(this).children(".unstyled").css("display","block");
		},
		function(){
			$(this).children(".unstyled").css("display","none");
		}
	);
	

	// 首页大轮播unslider
	$('.bo .banner').unslider({
		speed: 500,               //  The speed to animate each slide (in milliseconds)
		delay: 3000,
		arrows: true,
		fluid: true,
		dots: false
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



	$('.xj_post .banner').unslider({
		speed: 500,               //  The speed to animate each slide (in milliseconds)
		delay: 3000,
		arrows: false,
		fluid: true,
		dots: true
	});
	// 首页小轮播
	$('.carousel').carousel();
});
