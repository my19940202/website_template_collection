var datas={
"上海":{"上海市":"3.81"},
"新疆":{"乌鲁木齐":"4.2","克拉玛依":"4.01","吐鲁番":"4.44","哈密地区":"4.54","昌吉回族自治州":"4.14","博尔塔拉蒙古自治州":"4.08","巴音郭楞蒙古自治州":"4.43","阿克苏":"4.44","阿图什":"4.54","喀什地区":"4.74","和田地区":"4.83","伊犁哈萨克自治州":"4.1","塔城地区":"4.03","阿勒泰地区":"4.13","石河子":"4.32","和田":"4.82"},
"宁夏":{"银川":"4.5","石嘴山":"4.6","吴忠":"4.51","固原":"4.28","中卫":"4.59"},
"重庆":{"重庆市":"3.06"},
"广西":{"南宁":"3.66","柳州":"3.39","桂林":"3.18","梧州":"3.65","北海":"4.08","防城港":"3.86","钦州":"3.79","贵港":"3.56","玉林":"3.76","百色":"3.72","贺州":"3.36","河池":"3.48","来宾":"3.51","崇左":"3.72"},
"河南":{"郑州":"4.02","开封":"4.07","洛阳":"3.94","平顶山":"3.89","安阳":"4.21","鹤壁":"4.13","新乡":"4.15","焦作":"4.15","濮阳":"4.2","许昌":"4.02","漯河":"3.98","三门峡":"3.98","南阳":"3.8","商丘":"4.1","信阳":"3.83","周口":"3.98","驻马店":"3.83"},
"四川":{"成都":"3.22","自贡":"3.15","攀枝花":"4.83","泸州":"3.06","德阳":"3.2","绵阳":"3.21","广元":"3.42","遂宁":"3.21","内江":"3.14","乐山":"3.1","南充":"3.18","眉山":"3.18","宜宾":"3.04","广安":"3.12","达州":"3.24","雅安":"3.74","巴中":"3.24","资阳":"3.18","阿坝藏族羌族自治州":"4.42","甘孜藏族自治州":"4.82","凉山彝族自治州":"4.21"},
"湖北":{"武汉":"3.67","黄石":"3.66","十堰":"3.61","宜昌":"3.35","襄樊":"3.74","鄂州":"3.67","荆门":"3.62","孝感":"3.7","荆州":"3.54","黄冈":"3.66","咸宁":"3.46","随州":"3.7","恩施土家苗族自治州":"3.1"},
"浙江":{"杭州":"3.69","宁波":"3.59","温州":"3.55","嘉兴":"3.69","湖州":"3.69","绍兴":"3.69","金华":"3.56","衢州":"3.52","舟山":"3.92","台州":"3.59","丽水":"3.53"},
"安徽":{"合肥":"3.7","芜湖":"3.75","蚌埠":"3.89","淮南":"3.89","马鞍山":"3.75","淮北":"4.04","铜陵":"3.66","安庆":"3.63","黄山":"3.54","滁州":"3.88","阜阳":"3.87","宿州":"4.04","巢湖":"3.7","六安":"3.77","毫州":"4.04","池州":"3.66","宜城":"3.61"},
"北京":{"北京市":"4.32"},
"山东":{"济南":"4.29","青岛":"4.22","淄博":"4.26","枣庄":"4.11","东营":"4.29","烟台":"4.31","潍坊":"4.25","济宁":"4.2","泰安":"4.28","威海":"4.39","日照":"4.15","莱芜":"4.28","临沂":"4.23","德州":"4.32","聊城":"4.26","滨州":"4.33","牡丹区":"4.2"},
"广东":{"广州":"3.69","韶关":"3.44","深圳":"3.91","珠海":"3.87","汕头":"3.88","佛山":"3.69","江门":"3.79","湛江":"3.92","茂名":"3.92","肇庆":"3.65","惠州":"3.76","梅州":"3.76","汕尾":"4.29","河源":"3.76","阳江":"4.09","清远":"3.53","东莞":"3.69","中山":"3.87","潮州":"3.88","揭阳":"3.88","云浮":"3.79"},
"青海":{"西宁":"4.67","海东地区":"4.47","海北藏族自治州":"4.68","海南藏族自治州":"4.72","果洛藏族自治州":"4.59","玉树藏族自治州":"4.75","海西蒙古族藏族自治州":"4.97"},
"内蒙古东部":{"赤峰":"4.31","通辽":"4.25","呼伦贝尔":"3.8","乌兰察布":"4.55","兴安盟":"4.07","锡林郭勒盟":"4.4"},
"内蒙古西部":{"呼和浩特":"4.55","包头":"4.55","乌海":"4.6","鄂尔多斯":"4.62","巴彦淖尔":"4.5","阿拉善盟":"4.64"},
"江苏":{"南京":"3.88","无锡":"3.78","徐州":"4.11","常州":"3.77","苏州":"3.78","南通":"3.93","连云港":"4.09","淮安":"4.02","盐城":"4.02","扬州":"3.88","镇江":"3.88","泰州":"3.9","宿迁":"4.0"},
"西藏":{"拉萨":"5.53","昌都地区":"4.84","山南地区":"5.41","日喀则地区":"5.8","那曲地区":"4.98","阿里地区":"5.48","灵芝地区":"4.8"},
"天津":{"天津市":"4.36"},
"山西":{"大同":"4.50","阳泉":"4.41","长治":"4.35","晋城":"4.18","朔州":"4.53","晋中":"4.46","太原":"4.46","忻州":"4.53","临汾":"4.25","临汾":"4.46"},
"甘肃":{"兰州":"4.43","嘉峪关":"4.55","金昌":"4.67","白银":"4.51","天水":"4.03","武威":"4.33","张掖":"4.56","平凉":"4.16","酒泉":"4.60","庆阳":"4.13","定西":"4.43","陇南":"3.74","临夏回族自治州":"4.45","甘南藏族自治州":"4.61"},
"辽宁":{"沈阳":"4.17","大连":"4.56","鞍山":"4.24","抚顺":"4.17","本溪":"4.17","丹东":"3.96","锦州":"4.31","营口":"4.28","阜新":"4.19","辽阳":"4.17","盘锦":"4.24","铁岭":"4.13","朝阳":"4.38","葫芦岛":"4.31"},
 "海南":{"三亚":"4.54","海口":"4.42","五指山":"4.52"},
"贵州":{"贵阳":"3.34","六盘水":"4.14","遵义":"3.03","安顺":"3.56","同仁地区":"3.03","兴义":"3.72","毕节地区":"3.36","黔东南苗族侗族自治州":"3.16","黔南布依族苗族自治州":"3.34"},
"江西":{"南昌":"3.44","萍乡":"3.34","九江":"3.49","新余":"3.34","鹰潭":"3.58","景德镇":"3.6","赣州":"3.51","吉安":"3.39","宜春":"3.34","抚州":"3.48","上饶":"3.58"},
"云南":{"昆明":"4.74","曲靖":"4.51","玉溪":"4.68","保山":"4.58","邵通":"4.7","丽江":"4.78","墨江哈尼族自治县":"4.6","临沧":"4.58","楚雄彝族自治州":"4.81","红河哈尼族彝族自治州":"4.54","文山壮族苗族自治州":"4.27","西双版纳傣族自治州":"3.91","大理白族自治州":"4.75","德宏傣族景颇族自治州":"4.27","怒江傈僳族自治州":"4.32","迪庆藏族自治州":"4.41"},
"河北北部":{"唐山":"4.36","秦皇岛":"4.21","张家口":"4.51","承德":"4.43","廊坊":"4.32"},
"河北南部":{"邢台":"4.25","石家庄":"4.28","邯郸":"4.21","保定":"4.32","沧州":"4.33","衡水":"4.3"},
"吉林":{"长春":"4.05","吉林":"3.97","四平":"4.13","辽源":"4.02","通化":"3.97","白山":"3.93","松原":"4.06","白城":"4.17","延边朝鲜族自治州":"3.89"},
"黑龙江":{"哈尔滨市":"3.96","齐齐哈尔":"3.94","鸡西":"3.84","鹤岗":"3.71","双鸭山":"3.81","大庆":"4.05","伊春":"3.75","伊春":"3.75","佳木斯":"3.81","七台河":"3.84","牡丹江":"3.85","黑河":"3.68","绥化":"3.94","大兴安岭地区":"3.55"},
"福建":{"福州":"3.54","厦门":"4.02","莆田":"3.63","三明":"3.5","泉州":"4.02","漳州":"3.73","南平":"3.5","龙岩":"3.57","宁德":"3.6"},
"陕西":{"西安":"3.93","铜川":"4.06","宝鸡":"3.86","咸阳":"3.93","渭南":"4","延安":"4.32","汉中":"3.73","榆林":"4.51","安康":"3.59","商洛":"3.8"},
"湖南":{"长沙":"3.29","株洲":"3.34","湘潭":"3.3","衡阳":"3.29","邵阳":"3.19","岳阳":"8299","常德":"3.24","张家界":"3.2","益阳":"3.29","郴州":"3.3","永州":"3.21","怀化":"3.1","娄底":"3.25","湘西土家苗族自治州":"3.0"}
};

var jdz={"安徽":"26º-29º","北京":"36º-37º","福建":"20º-21º","甘肃":"28º-37º","广东":"19º-20º","广西":"19º-20º","贵州":"19º-22º",
"海南":"18º-20º","河北北部":"32º-38º","河北南部":"32º-38º","河南":"28º-32º","黑龙江":"38º-43º","湖北":"23º-27º","湖南":"21º-23º","吉林":"38º-40º","江苏":"26º-30º","江西":"22º-24º",
"辽宁":"36º-39º","内蒙古东部":"36º-41º","内蒙古西部":"36º-41º","宁夏":"32º-36º","青海":"30º-35º","山东":"30º-34","山西":"31º-36º","陕西":"26º-35º","上海":"25º-26º",
"四川":"22º-30º","天津":"35º-36º","西藏":"26º-30º","新疆":"35º-40º","云南":"20º-25º","浙江":"22º-25º","重庆":"22º-24º"};
var homeType={
"人字形屋顶":{"彩钢瓦":"0.7","别墅瓦片屋顶":"0.7"},
"平屋顶":{"水泥屋顶":"1"},
"单面朝南倾斜屋顶":{"彩钢瓦":"1.3","别墅瓦片屋顶":"1.3","水泥屋顶":"1.3"} 
};
 var jbdj=0;
$(document).ready(function () {
	$.focus("#focus001");
    $(".content_right .tabs li").hover(function () {
        $(this).parent().find("li").removeClass("selected");
        $(this).addClass("selected");
        $(".content_right .content_tabs .tab_content").hide();
        if ($(this).hasClass("tab1")) {
            $(".content_right .content_tabs .tab_content1").show();
        } else if($(this).hasClass("tab2")){
            $(".content_right .content_tabs .tab_content2").show();
        }else if($(this).hasClass("tab3")){

            $(".content_right .content_tabs .tab_content3").show();
        }
    });
	 $(".content_left .tabs li").hover(function () {
        $(this).parent().find("li").removeClass("selected");
        $(this).addClass("selected");
        $(".content_left .content_tabs .tab_content").hide();
        if ($(this).hasClass("tab1")) {
            $(".content_left .content_tabs .tab_content1").show();
        } else if($(this).hasClass("tab2")){
            $(".content_left .content_tabs .tab_content2").show();
        }
    });
	initProvince();
	initSelect();
	initJD();//初始化角度朝向
	$("#distForm").validate({
		errorElement:"span",
		errorClass:"ascout_platform_inquiryalert",				  
	 	rules:{
	 		truename:{required:true},
	 		tel:{required:true},
	 		province:{required:true},
	 		city:{required:true},
	 		area:{required:true},
	 		wuding:{required:true},
	 		wudingtype:{required:true}
		},
		messages:{
			truename:{required:"请输入姓名"}, 
			tel:{required:"请输入联系方式"},
			province:{required:"请选择省份"},
			city:{required:"请选择城市"},
			area:{required:"请输入屋顶面积"},
			wuding:{required:"请选择屋面类型"},
			wudingtype:{required:"请选择屋面类型"}
		},
		focusInvalid:false
	});
	//$('#distForm').ajaxForm(function() {  
	//      alert("Thank you for your comment!"); 
	//}); 
	
	$("#shadow").change(function(){
		
		if($("#shadow").val()==0){
			$("#zhedang").show();
		}else{
			$("#zhedang").hide();
		}
	})
});
function sub(){
	$('#distForm').submit();
}


function initProvince(){
	//初始化省份
	var province;
	for(var p in datas){
		province+="<option value='"+p+"'>"+p+"</option>";
	}
	$("#zjprovince").html(province);
	$("#syprovince").html(province);
	$("#province").html(province);
	var p1=$("#zjprovince").val();
	getJbdj(p1);
	$("#jdz").html("系统推荐角度："+jdz[p1]);
	initzjCity(p1);
	initSyCity(p1);
	initCity(p1);
	//初始化屋顶类型

	for(var p in homeType){
		wuding+="<option value='"+p+"'>"+p+"</option>";
	}
	$("#wuding").html(wuding);
	var p2=$("#wuding").val();
	initWuding(p2);
}
//初始化所有下拉选择框
function initSelect(){
	$("#zjprovince").change(function(){
		var p1=$(this).children('option:selected').val();

		
			initzjCity(p1);
		
	})
	$("#syprovince").change(function(){
		var p1=$(this).children('option:selected').val();

		
			initSyCity(p1);
		
	})
	$("#province").change(function(){
		var p1=$(this).children('option:selected').val();
		getJbdj(p1);
		
		$("#jdz").html("系统推荐角度："+jdz[p1]);
		initCity(p1);
		
	})
	

	$("#wuding").change(function(){
		var p2=$(this).children('option:selected').val();
		if(p2==''){
			//clearWuding();
		}else{
			initWuding(p2);
		}
		$("#jiaodu").val($("#wudingtype").val());
	})
	$("#wudingtype").change(function(){
		$("#jiaodu").val($("#wudingtype").val());
	})
	$("#jiaodu").val($("#wudingtype").val());
	//clearCity();
	//clearWuding();
}

function getJbdj(p1){
	switch(p1){
			case "辽宁": jbdj=0.4170;break;
			case "吉林": jbdj=0.4057;break;
			case "黑龙江": jbdj=0.4030;break;
			case "内蒙古东部": jbdj=0.3709;break;
			case "北京": jbdj=0.4002;break;
			case "天津": jbdj=0.4100;break;
			case "河北北部": jbdj=0.4243;break;
			case "河北南部": jbdj=0.4300;break;
			case "山东": jbdj=0.4469;break;
			case "山西": jbdj=0.3857;break;
			case "内蒙古西部": jbdj=0.3079;break;
			case "陕西": jbdj=0.3812;break;
			case "甘肃": jbdj=0.3343;break;
			case "青海": jbdj=0.3540;break;
			case "宁夏": jbdj=0.2867;break;
			case "新疆": jbdj=0.2500;break;
			case "湖北": jbdj=0.4780;break;
			case "湖南": jbdj=0.5059;break;
			case "河南": jbdj=0.4392;break;
			case "江西": jbdj=0.4852;break;
			case "四川": jbdj=0.4487;break;
			case "重庆": jbdj=0.4441;break;
			case "上海": jbdj=0.4768;break;
			case "浙江": jbdj=0.4820;break;
			case "江苏": jbdj=0.4550;break;
			case "安徽": jbdj=0.4360;break;
			case "福建": jbdj=0.4417;break;
			case "广东": jbdj=0.5192;break;
			case "广西": jbdj=0.4772;break;
			case "云南": jbdj=0.3513;break;
			case "贵州": jbdj=0.3768;break;
			case "海南": jbdj=0.4903;break;
		}
}

function initJD(){
	$(":checkbox[name=jd]").each(function(){
        $(this).click(function(){
		 $(":checkbox[name=jd]").each(function(){$(this).attr("checked",false)});
		 $(this).prop("checked",true);

		}); //$(this)表示当前被选中的复选框
		
     })
	 $(":checkbox[name=jd2]").each(function(){
        $(this).click(function(){
		 $(":checkbox[name=jd2]").each(function(){$(this).attr("checked",false)});
		 $(this).prop("checked",true);
		}); //$(this)表示当前被选中的复选框
     })
}
function initzjCity(p){
  var citys=datas[p];
  var citysOption;
  for(var p in citys){
		citysOption+="<option value='"+p+"'>"+p+"</option>";
	}
	$("#zjcity").html(citysOption);
}
function initCity(p){
  var citys=datas[p];
  var citysOption;
  for(var p in citys){
		citysOption+="<option value='"+citys[p]+"'>"+p+"</option>";
	}
	$("#city").html(citysOption);
}
function initSyCity(p){
  var citys=datas[p];
  var citysOption;
  for(var p in citys){
		citysOption+="<option value='"+citys[p]+"'>"+p+"</option>";
	}
	$("#sycity").html(citysOption);
}
function initWuding(p){
  var wuding=homeType[p];
  var wudingOption;
  for(var p in wuding){
		wudingOption+="<option value='"+wuding[p]+"'>"+p+"</option>";
	}
	$("#wudingtype").html(wudingOption);
}
function clearCity(){
	$("#zjcity").html("<option value=''>--请选择--</option>");
	
}
function clearWuding(){
	$("#wudingtype").html("<option value=''>--请选择--</option>");
	
}



/**
*计算第几年的发电量
*opt-日均辐射量，zj-装机容量,n-第几年
**/
function nfdl(opt,zj,n){
  var result= 365*opt*zj*ffdxl(n);  //OPT*365*电站装机量*发电效率（第N年的发电效率）

  return parseFloat(result.toFixed(2)); 
}

function zjnfdl(opt,zj,n){
  var result= 365*opt*zj*zjpgxl(n);  //OPT*365*电站装机量*发电效率（第N年的发电效率）

  return parseFloat(result.toFixed(2)); 
}

function zjpgxl(n){
	var result=0.85; //发电效率
	 for(var i=1;i<n;i++){
		result*=0.992;
	 }
	 return result;
}

/**
*计算年发电效率
*n-第几年,jd-角度
**/
function ffdxl(n){
	var jd=jdjs();
 var result=0.85*jd; //发电效率
 for(var i=1;i<n;i++){
    result*=0.992;
 }
 return result;
}

function jdjs(){
 var jd=$('input[name="jd"]:checked').val();
 var jd2=$('input[name="jd2"]:checked').val();
 //如果角度为0，则不区分方向，效率为0.93
 if(jd2==0){
	return 0.93;
 }else{
//否则为最佳角度100% *朝向
	return jd;
 }
}



//评估发电量
function showResult(){
	var area=$("#area").val();
	var jiaodu=$("#jiaodu").val();
	var shadow;
	if($("#shadow").val()==1){
		shadow=0;
	}else{
		shadow=$("#yybl").val();
	}
	var zhuangji=area*0.08*jiaodu*(1-shadow);
	if(!$.isNumeric(area))
	{
		alert("请输入屋顶面积！");
		$("#area").val('');
		$("#area").focus();
		
	}else{
		
		var ygzjl=Math.round(zhuangji*100)/100;  //预估装机量
		
		var ygbj=0;
		
		//计算预估报价
		if(ygzjl<1){
			alert("屋顶面积太小！");
			$("#area").focus();
			return ;
		}else if(ygzjl>=1&&ygzjl<3){
			switch(jiaodu){
			case 1:
				ygbj=ygzjl*1.3*0.98;
				break;
			default:
				ygbj=ygzjl*1.3;
			}
		}else if(ygzjl>=3&&ygzjl<10){
			switch(jiaodu){
			case 1:
				ygbj=ygzjl*1.2*0.98;
				break;
			default:
				ygbj=ygzjl*1.2;
			}	
		}else if(ygzjl>=10&&ygzjl<50){
			switch(jiaodu){
			case 1:
				ygbj=ygzjl*1.15*0.98;
				break;
			default:
				ygbj=ygzjl*1.15;
			}	
		}else if(ygzjl>=50&&ygzjl<100){
			switch(jiaodu){
			case 1:
				ygbj=ygzjl*1.1*0.98;
				break;
			default:
				ygbj=ygzjl*1.1;
			}	
		}else if(ygzjl>=100&&ygzjl<200){
			switch(jiaodu){
			case 1:
				ygbj=ygzjl*1.05*0.98;
				break;
			default:
				ygbj=ygzjl*1.05;
			}	
		}else if(ygzjl>=200&&ygzjl<300){
			switch(jiaodu){
			case 1:
				ygbj=ygzjl*0.98;
				break;
			default:
				ygbj=ygzjl;
			}	
		}else if(ygzjl>=300&&ygzjl<500){
			switch(jiaodu){
			case 1:
				ygbj=ygzjl*0.98*0.98;
				break;
			default:
				ygbj=ygzjl*0.98;
			}	
		}else if(ygzjl>=500&&ygzjl<1000){
			switch(jiaodu){
			case 1:
				ygbj=ygzjl*0.96*0.98;
				break;
			default:
				ygbj=ygzjl*0.96;
			}	
		}else{
			alert('更大面积屋顶请来电咨询，咨询电话：021-50315221');
		}
		$("#ygzj").val(ygzjl);
		$("#ygsb").val(Math.round(ygbj*100)/100);
		$("#dianliang").text(ygzjl+"KW");  //预估装机量

		$("#baojia").text(Math.round(ygbj*100)/100+"万元");  //预估报价
	}
}

//发电收益测算
function showBenefits(){
	var opt=$("#sycity").children('option:selected').val();
	var fdl=0;  //总发电量
	//预估收益=（用电电价+电价补贴)*自用比例
	var ygzj=$("#ygzj").val(); //装机量
	var ygsb=$("#ygsb").val();  //设备成本
	var ygdd=$("#ygdd").val();  //度电补贴
	var ygcz=$("#ygcz").val();  //初装补贴单价 元/瓦
	var ygyd=$("#ygyd").val();  //用电电价
	var ljn=$("#ljn").val();   //累计收益年份
	var ygsy=parseFloat(ygyd)+parseFloat(ygdd)+0.42;  //预估收益
	var zsy=0;
	var totalbt=ygcz*ygzj*1000;  //初装补贴
	for(var i=1;i<=ljn;i++){
		//计算每年发电量
		fdl=fdl+(Math.round(parseFloat(zjnfdl(opt,ygzj,i)/10000)*10000));
		
	}
	
	zsy=parseFloat(ygsy*fdl+totalbt).toFixed(2);
	$("#totalMoney").text(zsy+"元");
}
//删除左右两端的空格
function trim(str){ 
         str=""+str;
　　     return str.replace(/(^\s*)|(\s*$)/g, "");
}

function checkInput(){
   if($("#province").children('option:selected').val()==""){
	 alert("请选择省份");
	 return false;
   }
   if($("#city").children('option:selected').val()==""){
	 alert("请选择城市");
	 return false;
   }
   if(trim($("#zj").val())=="" || isNaN($("#zj").val())){
	alert("装机容量不能为空，并且必须数字");
	return false
   }
   
    if(typeof($('input[name="jd"]:checked').val())=="undefined"){
	 alert("请选择朝向");
	 return false;
    }
     if(typeof($('input[name="jd2"]:checked').val())=="undefined"){
	 alert("请选择安装倾角范围");
	 return false;
   }
    if(trim($("#dj").val())=="" || isNaN($("#dj").val())){
	alert("电价不能为空，并且必须数字");
	return false
   }
    if(trim($("#cb").val())=="" || isNaN($("#cb").val())){
	alert("电价不能为空，并且必须数字");
	return false
   }
  
   //判断贷款利率不能为100%
   if($("#dkbl").val()>99){
	alert("贷款利率不能超过99%");
	return false
   }
  return true;
}


//投资回报率计算
/**
*计算20年，每年发电量
**/
function ffdl(){ 
var fdl=[];
 var djl=[];
 var cbl=[];
 var hdl=[];
 var zxz=[];
 var xzl=[];

   if(!checkInput())
   return;
   fdl.length=0;
   djl.length=0;
   cbl.length=0;
   hdl.length=0;
   xzl.length=0;
   var opt=$("#city").children('option:selected').val();
   var zj=0;
   var dj=$("#dj").val();
   
   var part=$("#part").val();
   var zybl=$("#zybl").val()/100;  //自用比例
   var cb=$("#cb").val()/100;  //运维成本
   
   var sb=$("#sbcb").val();    //设备成本
   var dkbl=$("#dkbl").val();  //贷款比例
   var dklv=$("#dklv").val();  //贷款利率
   var dknx=$("#dknx").val();  //贷款年限
   
   //var sum= sb*(1-dkbl/100)+sb*(dkbl/100)*((dklv/100)*dknx+1) ;   //总投资
   //alert(sum);	
   var ygsy=0;
   var tr;
   var lv=$("#lv").val()/100;
   var lilv=0; //总利率
   var top10_lilv=0; //前十年利率总和
   var sum8=0; //前8年售电总收入
   var sumFdl=0;
   var sumDjl=0;  //
   var sumCbl=0;
   var sumzxz=0;
   var sumHdl=0;
   var totle=0;
   var circle=0;
   
   //alert(dj);
   //计算预估电收益
   //ygsy=parseFloat(((parseFloat(dj)+0.42)*zybl.toFixed(2)+parseFloat((jbdj+0.42)*(1-zybl)).toFixed(2)));
     var staType=$('input:radio[name="stationType"]:checked').val();

   if(staType=="dianzhan"){
	ygsy=parseFloat(parseFloat(dj)+parseFloat(part));
	zj=$("#zj").val()*1000;
   }else{
   zj=$("#zj").val();
	ygsy=(parseFloat(dj)+0.42+parseFloat(part))*zybl+parseFloat((jbdj+0.42+parseFloat(part))*(1-zybl));
   }
	//ygsy=(parseFloat(dj)+0.42)*zybl+parseFloat((jbdj+0.42)*(1-zybl));
   //计算售电单价
   $("#ygsy").html(Math.round(ygsy*100)/100+"元/度");
   var ziyou=sb*(1-dkbl/100);
   //循环20年
   for(var i=1;i<=20;i++){
	  fdl.push(Math.round(parseFloat(nfdl(opt,zj,i)/10000)*100)/100);
	  djl.push(Math.round(parseFloat(ygsy*fdl[i-1])*100)/100);
	  var cb1=parseFloat(djl[i-1]*cb);  //运维成本
	  cbl.push(Math.round(cb1*1000)/1000);
	  var nsy=0;  //年收益
	  if(i<=dknx){
	  //计算前N年的年收益-利息
		//if(i==dknx){
		//	nsy=Math.round((parseFloat(ygsy*fdl[i-1])-parseFloat(djl[i-1]*cb)-parseFloat(sb*(dkbl/100)*(dklv/100))-parseFloat(sb*(dkbl/100)))*100)/100; 
		//}else{
			nsy=Math.round((parseFloat(ygsy*fdl[i-1])-parseFloat(djl[i-1]*cb)-parseFloat(sb*(dkbl/100)*(dklv/100)))*100)/100; 
		//}
	  }else{
			nsy=Math.round((parseFloat(ygsy*fdl[i-1])-parseFloat(djl[i-1]*cb))*100)/100;
	  }
	  hdl.push(nsy);

	  
	  xzl.push((nsy/ziyou)*100);   //回报率
	  

	  sumFdl=sumFdl+parseFloat(Math.round((nfdl(opt,zj,i)/10000)*100)/100);  //总发电量
	  sumDjl=sumDjl+parseFloat(Math.round((ygsy*fdl[i-1]*100)/100)); //总售电收入
	  sumCbl=sumCbl+parseFloat(cbl[i-1]);  //总回报率

	  sumHdl+=parseFloat(hdl[i-1]);
	  //alert(sumHdl);
	  lilv=lilv+nsy; //计算回报率总和
	  totle+=Math.round(parseFloat(ygsy*fdl[i-1])*100)/100;  //计算售电总收入
	  
	  if(i<=8){
		//计算前8年总回报率总和
		top10_lilv=top10_lilv+parseFloat(parseFloat((ygsy*fdl[i-1]))-parseFloat((djl[i-1]*cb)))
		sum8+=djl[i-1] ;
	  }
	
	  //alert(totle);
	 // td.text(''+fdl[]);
	 // alert(fdl[i-1]);
   }
   

   /*
   var sb=$("#sbcb").val();    //设备成本
   var dkbl=$("#dkbl").val();  //贷款比例
   var dklv=$("#dklv").val();  //贷款利率
   var dknx=$("#dknx").val();  //贷款年限
   */
   var s8=sum8/8;

   var hbzq=(sb*(1-(dkbl/100)))/(s8-sb*(dkbl/100)*(dklv/100));  //回报周期

   
   //如果回报周期(大于)贷款年限
	if(hbzq>dknx){
		hbzq=(sb*(1-dkbl/100)+dknx*sb*(dkbl/100)*(dklv/100))/(s8-sb*(dkbl/100)*(dklv/100));

	}
   $("#hbzq").html((hbzq).toFixed(2)+'年');  //计算回报周期   前十年回报率总和/总投资
   $("#totle").html(totle.toFixed(3));	  //总收益

  
}


	function selectFenbu(){
		$("#use").show();
		$("#zybl").val(80);
		$("#cb").val(2);
		$("#ygsy").html("");
		$("#totle").html(0);
		$("#zj").val(10);
		$("#sbcb").val(10);
		$("#hbzq").html("");
		$("#dj").val(0.45);
		$("#butie").show();
		$("#alert").html("备注：请如实填写电站所在地的相关数值，初始数值仅供参考。电网电价为自发自用业主用电价格。计算公式中已包含各地脱硫上网电价。");
		$("#danwei").html('KW');
	}
	function selectDianzhan(){
		$("#use").hide();
		$("#zybl").val(0);
		$("#cb").val(5);
		$("#dj").val(1);
		$("#ygsy").html("");
		$("#totle").html(0);
		$("#zj").val(1);
		$("#sbcb").val(1000);
		$("#hbzq").html("");
		$("#butie").hide();
		$("#alert").html("备注：请如实填写电站所在地的相关数值，初始数值仅供参考。电网电价为光伏发电标杆电价。");
		$("#danwei").html('MW');
	}	


