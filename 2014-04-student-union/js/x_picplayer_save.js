window.onload=function(){
        var big_img=document.getElementById("big_img").getElementsByTagName("div");
        var span_img=document.getElementById("small_pic").getElementsByTagName("span");
        var x=1;
        var ttimer=null;
        function all_disappear(){
            for (var i =0; i<big_img.length;i++){
                big_img[i].style.display="none"; 
                span_img[i].style.border = " 1px solid #d5d5d5";
            }
        }
        function img_fadeIn(j){
            var tr=10;
            var mm=big_img[j];
            clearInterval(mm.timer);
            //x=j;
            //下面的图片样式修改
            // span_img[j].style.css            

            mm.style.filter=10;
            mm.style.opacity=0.1;
            //之前的透明度先设置好，否则会议在后面的显示中忽然闪一下
            mm.style.display="inline"; 
            mm.timer=setInterval(function(){
                if (tr<=100){
                    mm.style.filter=tr;
                    mm.style.opacity=0.01*tr;
                    tr+=10;
                }
                if (tr==100){
                    clearInterval(mm.timer);
                };
            }, 30); 
            span_img[j].style.border = " 1px solid #ff6c00";
        }
        /*线先一个fadeIn 全部no函数 */
        for (var i = big_img.length - 1; i >= 0; i--) {
            big_img[i].timer=null;
            big_img[i].onmouseover=function(){
                clearInterval(ttimer);
            }

            big_img[i].onmouseout=function(){
                ttimer=setInterval(function(){
                    if(x>=big_img.length){x=0;}
                    all_disappear();
                    img_fadeIn(x);
                    x++;
                },2000);
            }
        };


        for (var i =0; i<span_img.length;i++){
            big_img[i].timer=null;
            span_img[i].onmouseover=function(){
                clearInterval(ttimer);
                var l=this.getAttribute("index");
                x=l;
                all_disappear();
                img_fadeIn(l-1);
            }
            
 
            span_img[i].onmouseout=function(){
                ttimer=setInterval(function(){
                    if(x>=big_img.length){x=0;}
                    all_disappear();
                    img_fadeIn(x);
                    x++;
                },2000);
            }
        };
        //设置自动播放
        ttimer=setInterval(function(){
            if(x>=big_img.length){x=0;}
            all_disappear();
            img_fadeIn(x);
            x++;
        },2000);
    };