/**
** 首页
** @author sunny
**/

/**
** 简易播放器类
** @notice 需配合一定的CSS样式规则
** @notice 默认选中的class名字为"c"
**/
(function($) {




		/*forTVplayer();
		function forTVplayer()
		{

		var _picc=0;
		_picc=$(".img_list img").length;
		//alert(_picc);
		for (var i =_picc-1; i > 0; i--)
		{

			$(".oper_btn").append("<li> </li>");
		};

		}*/
	function ImgPlayer(options){

		this.config = $.extend({}, this.defaults, options);

		this.imgIndex = null; //不能定义为0
		this.imgLength = this.config.imgsList.find('img').length;
		this.changeTime = null;

		this.init();
	}

	ImgPlayer.prototype = {
		init : function(){

			this.addEvent();
			this.lrMove();
			this.config.autoMove && this.autoMove(1);
			this.hover2Stop();
			//fix ie6
			this.IE6Hover();
		},
		/**
		** core 触发切换函数
		**/
		addEvent : function(){
			var self = this;
			this.config.operList.on('click', 'li', function(event) {
				var _this = $(this),
				index = _this.index();
				_this.siblings().removeClass('c');
				_this.addClass('c');
				/******************************************************/

				self._move(index);

				return false;
			});
		},



		/**
		** core 切换函数
		**/
		_move : function(index){
			var self = this;
			index = index || 0;
			this.changeTime && clearTimeout(this.changeTime);
			//beforeMove
			$.isFunction(this.config.beforeMove) && this.config.beforeMove(index);

			this.moveEffect(index);
			this.config.operList.find('li').removeClass('c').eq(index).addClass('c');

			//afterMove
			$.isFunction(this.config.afterMove) && this.config.afterMove(index);

			this.imgIndex = (index < this.imgLength - 1) ? ++index : 0;


			
			/*var ppic=$(".img_list li img");
			var picnum=$(".img_list li img").length;
			if (this.imgIndex!=0)
			{
				var hehe=this.imgIndex-1;
			}
			else
			{
				var hehe=picnum-1;
			}
			var picc=ppic.eq(hehe).attr("alt");
			$(".title_txt").html(picc);*/
			this.autoMove(this.imgIndex);
		},
		/**
		** 自动切换
		**/
		autoMove : function(index){
			var self = this;
			this.changeTime = setTimeout(function(){
				self._move(index);
			},this.config.loopTime);
		},
		/**
		** 效果函数
		**/
		moveEffect : function(index){
			switch(this.config.effect){
				case 'slide': 
					var step = this.config.imgsList.find('li:eq(0)').width();
					this.slideEffect(step,index);
					break;
				case 'fade': 
					this.fadeEffect(index);
					break;
				default: //默认滑动
					var step = this.config.imgsList.find('li:eq(0)').width();
					this.slideEffect(index);
					break;
			}
		},
		/**
		** 滑动效果
		**/
		slideEffect : function(step,index){
			
			this.config.imgsList.stop(false, true).animate({
				left: -step * index
			}, 600, function() {
				
			});
		},
		/**
		** 渐隐效果
		**/
		fadeEffect : function(index){
			var list = this.config.imgsList.find('li');

			list.filter(":visible").css('z-index',1).stop(false, true).fadeOut(800);
			//list.hide();
			list.eq(index).css('z-index',10).stop(false, true).fadeIn(800);
		},
		/**
		** 左右切换
		**/
		lrMove : function(){
			this.config.leftBtn && this.config.leftBtn.length && this.leftMove();
			this.config.rightBtn && this.config.rightBtn.length && this.rightMove();
		},
		leftMove : function(){
			var self = this;
			this.config.leftBtn.click(function(event) {
				if(self.imgIndex == 1 || self.imgIndex === null) return false;
				else if(self.imgIndex === 0) self.imgIndex = 3;

				self.imgIndex--;
				self._move(--self.imgIndex);
				return false;
			});
		},
		rightMove : function(){
			var self = this;
			this.config.rightBtn.click(function(event) {
				if(self.imgIndex >= self.imgLength || self.imgIndex == 0) return false;
				else if(self.imgIndex === null) self.imgIndex = 1;

				self._move(self.imgIndex);
				return false;
			});
		},
		/**
		** 悬停的时候静止
		**/
		hover2Stop : function(){
			var self = this;
			this.config.imgsList.on('mouseenter', function(event) {
				self.changeTime && clearTimeout(self.changeTime);
				self.changeTime = null;
			});

			this.config.imgsList.on('mouseleave', function(event) {
				self.changeTime === null && self.autoMove(self.imgIndex === null ? 1 : self.imgIndex);
			});
		},
		/**
		** IE6不支持a以外的伪类
		**/
		IE6Hover : function(){
			if(typeof(document.body.style.maxHeight) != 'undefined') return ;

			this.config.operList.on('mouseenter mouseleave','li',function(){
				alert('message');
				//if(!$(this).hasClass('c')) $(this).toggleClass('c');
			});

		},
		defaults : {
			imgsList : null,
			operList : null,
			leftBtn : null,
			rightBtn : null,
			effect : 'slide', //slide,fade
			loopTime : 3500,
			autoMove : true,
			beforeMove : function(index){}, //滑动之前执行的函数
			afterMove : function(index){} //滑动之前执行的函数
		}
	}

	window.ImgPlayer = ImgPlayer;
	
})(jQuery);


//page 级操作
(function($){

	//大屏播放器
	TVPlay();
	function TVPlay(){
	var wrap= $('.img_slider');
		new ImgPlayer({
			imgsList : wrap.find('.img_list'),
			operList : wrap.find('.oper_btn'),
			leftBtn : wrap.find('.pre_btn'),
			rightBtn : wrap.find('.next_btn'),
			effect : 'fade',
			afterMove : function(index){ 
			
			var ppic=$(".img_list li img");
			var picnum=$(".img_list li img").length;
			var picc=ppic.eq(index).attr("alt");
			$(".title_txt").html(picc);	
			}
		});
	}

	//右侧一系列滑动
	sidePlay();
	function sidePlay(){
		var wrap = $('.right_player');
		wrap.each(function(index, el) {
			var self = $(this),
				imgList = self.find('.right_player_list');
			new ImgPlayer({
				imgsList : imgList,
				operList : self.find('.right_player_btn'),
				afterMove : function(index){
				     //修改显示文案
					self.find('.desc').html(imgList.find('li').eq(index).attr('title') || '');
				}
			});
		});
	}

	//原创TAB切换
	photoGallery();
	function photoGallery(){
		var wrap = $('.photos_gallery_wrap'),
			glist = wrap.find('.gallery_list'),
			nav = wrap.find('dd a');

		wrap.on('click', 'dd a', function(event) {
			var self = $(this),
				index = self.parent().index() - 1; //有个<dt/>

			nav.removeClass('c');
			self.addClass('c');

			glist.hide();
			glist.eq(index).show();
			return false;
		});
	}

})(jQuery);