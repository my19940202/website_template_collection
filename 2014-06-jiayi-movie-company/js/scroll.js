(function($){
			$(window).load(function(){
				$("#content_1").mCustomScrollbar({
					scrollInertia:500,
					horizontalScroll:true,
					mouseWheelPixels:250,
					scrollButtons:{
						enable:true,
						scrollType:"pixels",
						scrollAmount:250
					},
					callbacks:{
						onScroll:function(){ snapScrollbar(); }
					}
				});

				//news页的滚动 
				$("#content_news").mCustomScrollbar({
					scrollButtons:{
						enable:true
					}
				});


				/* toggle buttons scroll type */
				// var content=$("#content_1");
				// $("a[rel='toggle-buttons-scroll-type']").click(function(e){
				// 	e.preventDefault();
				// 	var scrollType;
				// 	if(content.data("scrollButtons_scrollType")==="pixels"){
				// 		scrollType="continuous";
				// 	}else{
				// 		scrollType="pixels";
				// 	}
				// 	content.data({"scrollButtons_scrollType":scrollType}).mCustomScrollbar("update");
				// 	$(this).html("<code>scrollType: \""+content.data("scrollButtons_scrollType")+"\"</code>");
				// });
				/* snap scrollbar fn */
				var snapTo=[];
				
				function snapScrollbar(){
					var posX=$("#content_1 .mCSB_container").position().left,closestX=findClosest(Math.abs(posX),snapTo);
					$("#content_1").mCustomScrollbar("scrollTo",closestX,{scrollInertia:350,callbacks:false});
				}
				function findClosest(num,arr){
	                var curr=arr[0];
    	            var diff=Math.abs(num-curr);
        	        for(var val=0; val<arr.length; val++){
            	        var newdiff=Math.abs(num-arr[val]);
                	    if(newdiff<diff){
                    	    diff=newdiff;
                        	curr=arr[val];
                    	}
                	}
                	return curr;
            	}
			});
		})(jQuery);