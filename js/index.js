$(function(){
	$('.leftbox ul>li').click(function(){
		$(this).addClass("sty1").siblings().removeClass("sty1");
	})
	$('.leftbox ul>li:eq(0)').click(function(){
		$('.mainrt ul>li:eq(0)').show().siblings().hide();
		$('.leftbox ul .lfhide').slideUp(300);
	})
	$('.leftbox ul>li:eq(1)').click(function(){
		$('.leftbox ul .lfhide').slideToggle(300);
		$('.mainrt ul>li:eq(1)').show().siblings().hide();
		$('.lfhide div:eq(0)').addClass('sty2').siblings().removeClass('sty2');
	})
	$(".leftbox ul>li").slice(2,6).click(function(){
		$('.mainrt ul>li').eq($(this).index()).show().siblings().hide();
		console.log(5)
		$('.leftbox ul .lfhide').slideUp(300);
	})
	$('.lfhide div').click(function(){
		$('.mainrt ul>li').eq($(this).index()+1).show().siblings().hide();
		$(this).addClass('sty2').siblings().removeClass('sty2');
	})
	$('.leftbox .tech').click(function(){
		$('.mainrt ul>li').eq(2).show().siblings().hide();
	})

	//轮播
	var num=0;
	function moveFun(){
		$('.carousel ul').stop().animate({"left":-2000*num},400)
		$(".move ol li").eq(num).css("color","white").siblings().css("color","#A1A6DA");
	}
	$("#carousel").hover(function(){
		$("#prev,#next").stop().show(300);
	},
	function(){
		$("#prev,#next").stop().hide(300);
	})
	$(".move ol li").mouseover(function(){
		num=$(this).index();
		moveFun()
	})
	$("#prev").click(function(){
		num--;
		if (num<0) {
			num=3;
		};
		moveFun();
	})
	$("#next").click(function(){
		num++;
		if (num>3) {
			num=0;
		};
		moveFun();
	})
})