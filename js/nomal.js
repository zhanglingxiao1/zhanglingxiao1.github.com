

function tab(obj){
			
				$(obj+".in1 .title li").click(function(){
					var ind=$(".in1 .title li").index($(this));	
					$(obj+".in1 ").hide();
					$(obj+".in2 ").show();
					$.fn.fullpage.moveTo('page2',ind);	
					$.fn.fullpage.setAllowScrolling(false);
				})
				$(obj+".in2 .wrap .pic6").click(function(){
					var ind=$(".in1 .title li").index($(this));	
					$(obj+".in2 ").hide();
					$(obj+".in1 ").show();
					$.fn.fullpage.setAllowScrolling(true);
				})
				$(obj+".in2 .wrap .pic5 span").click(function(){
					var ind=$(".in2 .wrap .pic5 span").index($(this));
					$(".in2 .wrap .pic5 span").removeClass("active");
					$(obj+".wrap .text img:visible").hide();
				//第几个显示
				$(obj+".wrap .text img:eq("+ind+")").show();
				$(this).addClass("active");
				})
				
				
			$(".in2 .wrap .two .btna img").click(function(){
				
			var ind=$(".in2 .wrap .two .btna img").index($(this));
			$(".in2 .wrap .two .btna img").each(function(index,elem){
			var src=$(this).attr("src");
			var srch=$(this).attr("srch");
			$(this).attr("src",srch);
			})//each
			var srci=$(this).attr("src");
			var srcih=srci.lastIndexOf(".");
			var srci=srci.substring(0,srcih);
			console.log(srci+"_h.png")
			$(this).attr({"src":srci+"_h.png"});
			
			$(".in2 .wrap .two .ppic img:visible").hide();
			$(".in2 .wrap .two .ppic img").eq(ind).show();
			})//第二版第二页点击事件
			
			}
			tab(".s2 ");
			
			
			
			//第三页
$(".s3 .pic32").click(function(){
	$(".s3 .init1").hide();
	$(".s3 .init2").show();
	$.fn.fullpage.setAllowScrolling(false);
})

$(".s3 #fan").click(function(){
	$(".s3 .init2").hide();
	$(".s3 .init1").show();
	$.fn.fullpage.setAllowScrolling(true);
})			

	
			$(".s3 .init2 .pica img").click(function(){	
			var ind=$(".s3 .init2 .pica img").index($(this));
			$(".s3 .init2 .pica img").each(function(index,elem){
			var src=$(this).attr("src");
			var srch=$(this).attr("srch");
			$(this).attr("src",srch);
			})//each
			var srci=$(this).attr("src");
			var srcih=srci.lastIndexOf(".");
			var srci=srci.substring(0,srcih);
		
			$(this).attr({"src":srci+"_h.jpg"});
			
			$(".s3 .init2 .con .conten").hide();
			$(".s3 .init2 .con .conten").eq(ind).show();
			})//第三版第二页点击事件
	
	
	$(".s3 .init2 .con .half2  .num1").click(function(){
		
				$(".s3 .init2 .con .half2 .pic51").hide();
				$(".s3 .init2 .con .half2 .pic52").show();
	})
	$(".s3 .init2 .con .half2  .num2").click(function(){
	
				$(".s3 .init2 .con .half2 .pic52").hide();
				$(".s3 .init2 .con .half2 .pic51").show();
	})
		console.log($(".s3 .init2 .con .half1  .num1"))
	$(".s3 .init2 .con .half1  .num1").click(function(){
		
				$(".s3 .init2 .con .half1 .pic71").hide();
				$(".s3 .init2 .con .half1 .pic72").show();
	})
	$(".s3 .init2 .con .half1  .num2").click(function(){
	
				$(".s3 .init2 .con .half1 .pic72").hide();
				$(".s3 .init2 .con .half1 .pic71").show();
	})
	
	
	
	
//第四板块
$(".s4 .pic42").click(function(){
	$(".s4 .init1").hide();
	$(".s4 .init2").show();
	$.fn.fullpage.setAllowScrolling(false);
})

$(".s4 #fan").click(function(){
	$(".s4 .init2").hide();
	$(".s4 .init1").show();
	$.fn.fullpage.setAllowScrolling(true);
})	
//第五版块

$(".s5 .en li").click(function(){
	var ind=$(".s5 .en li").index($(this));
	$(".s5 .init1").hide();
	$(".s5 .init2").show();
	$.fn.fullpage.moveTo('page5',ind);
	$.fn.fullpage.setAllowScrolling(false);
})

$(".s5  #fan").click(function(){
	
	$(".s5 .init1").hide();
	$(".s5 .init2").show();
	$.fn.fullpage.setAllowScrolling(true);
		
})

//第六板块
$(".s6 .en1 li").click(function(){
	var ind=$(".s6 .en1 li").index($(this));
	$(".s6 .init1").hide();
	$(".s6 .init2").show();
	$.fn.fullpage.moveTo('page6',ind);	
	$.fn.fullpage.setAllowScrolling(false);
})

$(".s6  #fan").click(function(){
	
	$(".s6 .init1").hide();
	$(".s6 .init2").show();
	$.fn.fullpage.setAllowScrolling(true);	
})			


			$(".s6 .init2 .wrap #tab1 .title li img").click(function(){	
			var ind=$(".s6 .init2 .wrap #tab1 .title li img").index($(this));
			$(".s6 .init2 .wrap #tab1 .title li img").each(function(index,elem){
			var src=$(this).attr("src");
			var srch=$(this).attr("srch");
			
			$(this).attr("src",srch);
			})//each
			var srci=$(this).attr("src");
			var srcih=srci.lastIndexOf(".");
			var srci=srci.substring(0,srcih);
		
			$(this).attr({"src":srci+"_h.png"});
			$(".s6 .init2 .wrap #tab1 .content div").hide();
			$(".s6 .init2 .wrap #tab1 .content div").eq(ind).show();
			$(".s6 .init2 .wrap #tab1 .title li span active").removeClass("active");
			$(".s6 .init2 .wrap #tab1 .title li span").eq(ind).addClass("active");
			})//第6版点击事件


			$(".s6 .init2 .two .pic1 img").click(function(){	
			var ind=$(".s6 .init2 .two .pic1 img").index($(this));
			$(".s6 .init2 .two .pic1 img").each(function(index,elem){
			var src=$(this).attr("src");
			var srch=$(this).attr("srch");			
			$(this).attr("src",srch);
			})//each
			var srci=$(this).attr("src");
			var srcih=srci.lastIndexOf(".");
			var srci=srci.substring(0,srcih);		
			$(this).attr({"src":srci+"_h.jpg"});
			$(".s6 .init2 .two .conner div").hide();
			$(".s6 .init2 .two .conner div").eq(ind).show();
		
			})//第6版第二页点击事件
			
		
		$(".s6 .init2 .two .in2 .nextpic").click(function(){
		if($(".s6 .init2 .two .in2 .nextpic").html()=="上一页"){
		$(".s6 .init2 .two .in2 .pic5").css("left","0px")
		$(".s6 .init2 .two .in2 .nextpic").html("下一页");
		}
		else{$(".s6 .init2 .two .in2 .pic5").css("left","-1174px")
		$(".s6 .init2 .two .in2 .nextpic").html("上一页");}
		})
		
		//第六屏第三页滑动事件
		$(".s6 .init2 .three .hang .anniu2").click(function(){	
			var left=$(".s6 .init2 .three .small").css("left");
			var ind=left.lastIndexOf("px");
			var srci=parseInt(left.substring(0,ind));	
			if(srci<=-2446){
				$(".s6 .init2 .three .small").css("left","0px");
			}
			else{
			$(".s6 .init2 .three .small").css("left",srci+(-816)+"px");}
			
		})	
		
		$(".s6 .init2 .three .hang .anniu1").click(function(){	
			var left=$(".s6 .init2 .three .small").css("left");
			var ind=left.lastIndexOf("px");
			var srci=parseInt(left.substring(0,ind));	
			if(srci>=0){
				$(".s6 .init2 .three .small").css("left","-2446px");
			}
			else{
			$(".s6 .init2 .three .small").css("left",srci+816+"px");}
			
		})	


		$(".s6 .init2 .three .small img").click(function(){	
		var srch=$(this).attr("src");
		$(".s6 .init2 .three #a1").attr("src",srch)
		})	
//		$(".s6 .init2 .three .hang .anniu1").click(function(){
//			$(".s6 .init2 .three .small").css("left","0px");
//		})	

		
