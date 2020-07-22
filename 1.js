 $(function(){
   vitricuaedu=$('#khoiedu').offset().top -96;
   vitrisanpham=$('#khoisanpham').offset().top -96;
   console.log(vitricuaedu);

 	$(".xuong,.kn").click(function()
 	{
 		$('body,html').animate({scrollTop:vitricuaedu},700);
 		return false;
 	})


 	$(".sp").click(function()
 	{
 		$('body,html').animate({scrollTop:vitrisanpham},700);
 		return false;
 	})
})  
 