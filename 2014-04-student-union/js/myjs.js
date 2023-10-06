var hh = "jdjidi";
var x_hover = $("nav > .unstyled");
var x_hover_li = x_hover.children("li");
// console.log(x_hover_li.length);
x_hover_li.hover(
	function() {
		$(this).children("ul").css("display","block");
	},
	function() {
		$(this).children("ul").css("display","none");
	}
);


// 开启便签页功能
  $('#myTab a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
})