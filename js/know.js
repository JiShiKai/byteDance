$(function(){
$('#con_ul li').click(function (){		
		var ind = $(this).index();
			$(this).attr({'class':'con_li_l'}).siblings('li').attr({'class':''})
		$('#con #con_r').eq(ind).show().siblings('#con_r').hide();		
	})
	
})
