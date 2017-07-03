$(function(){
	$('.banner a').click(function(){
		var aImg=$('.banner a img');
		for(var i=0;i<aImg.length;i++){
			aImg[i].src='image/btn'+(i+1)+'.png'
		}
		$('.banner a img').eq($(this).index()).attr('src','image/btn'+($(this).index()+1)+'_2.png');
	});
	$('.btnbox p').click(function(){
		$('.btnbox p').removeClass('on1').eq($(this).index()).addClass('on1');
		$('.btnbox p').eq(0).removeClass('on1');
		$('.cont1 table').css('display','none').eq($(this).index()).css('display','block')
	});
	$('.cont2_c').click(function(){
		$('.cont2_c').children('img,div').hide();
		$(this).children('img,div').show();
	});
	$('.c3_btnbox p').click(function(){
		$('.c3_btnbox p').removeClass('on2').eq($(this).index()).addClass('on2');
		$('.cont3 table').hide().eq($(this).index()).show();
	})
})