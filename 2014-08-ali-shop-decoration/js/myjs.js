
(
	function(){
		var cell = $(".x_ali_crcell");
		cell.hover(
			function(){
				$(this).children(".x_ali_searpic,.x_ali_trybuy").fadeIn("slow");
				$(this).children(".x_ali_cbigpic").fadeIn("slow");
			},
			function(){
				$(this).children(".x_ali_searpic,.x_ali_trybuy").fadeOut("fast");
				$(this).children(".x_ali_cbigpic").fadeOut("fast");
				// console.log("out ");
			}
		);
	}

)();