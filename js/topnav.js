$(function(){
	$('#nav_bar>a').mouseover(function(){
		$(this).css('color','#008cff').siblings().css('color','black');
	})
	$('#nav_bar>a').click(function(){
		$(this).css('color','#008cff').siblings().css('color','black');
	})
})