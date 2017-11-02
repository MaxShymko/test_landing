$(document).ready(function(){

	var inform_item_active = 1;
	$('.inform .item').click(function(){

		var click_id = $(this).attr('id').match(/\d+$/);

		$('.inform .item_text_wrap').each(function(){
			$(this).slideUp();
		});


		var len = $('.inform .item_text_wrap').length;
		$('.inform .item').each(function(i){
			$(this).removeClass('item_bottom');
			if(i != len-1 && i != click_id-1) $(this).addClass('item_bottom');
		});

		$('.inform .item .inform_item_right i').each(function(i){
			$(this).removeClass($(this).attr('class').match(/fa-angle-\w+\S/).toString());
			if (i != click_id-1)
				$(this).addClass('fa-angle-down');
			else
				$(this).addClass('fa-angle-up');
		});

		$('#item_text_' + click_id).slideDown();

	});

	//Slick
	$('.comments').slick({
		arrows: false
	});
	$('.comment_arrow_prev').click(function(){
		$('.comments').slick('slickPrev');
	});
	$('.comment_arrow_next').click(function(){
		$('.comments').slick('slickNext');
	});

	$("a.anchorLink").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
   });


	//menu
	$('#adaptive_menu').click(function(){
		$('.navbar ul').fadeToggle(500);
	});
	$('.navbar ul li a').click(function(){
		if($(window).width() <= 992)
			$('.navbar ul').fadeToggle(500);
	});
	$(window).resize(function() {
		if($(window).width() >= 992) {
			$('.navbar ul').removeAttr('style');
		}
	});
	
});