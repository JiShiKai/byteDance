$(function(){
	$('#nav_bar>li').mouseover(function(){
		$(this).css('color','#008cff').siblings().css('color','black');
	})
	$('#nav_bar>li').click(function(){
		$(this).css('color','#008cff').siblings().css('color','black');
	})
})