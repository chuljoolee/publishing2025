$(function(){

	//header scroll
var lastScrollTop = 0;
$(window).scroll(function () {
   /*console.log($(window).scrollTop());*/
    var sct = $(window).scrollTop();

	if(sct > lastScrollTop && (sct > $('#wrapper').outerHeight()-($('#container').outerHeight()+$('#footer').outerHeight()))) {
		$('header').addClass('header-fixed');
		// $('#wrapper').css('margin-top', '144px');
	} else if(sct<=48){
		$('header').removeClass('header-fixed');
		// $('#wrapper').css('margin-top', '0px');
	}
    lastScrollTop=sct;
});

	
	// 상단으로 바로가기 버튼
	$('#top_btn').on('click',function(){
		 $('html, body').stop().animate({scrollTop: 0}, 800);
	});


	// 사이트맵 팝업
	$('.sitemap_btn').on('click',function(){
		$('.site_popup').fadeIn();
	});
	$('.site_popup .close').on('click',function(){
			$('.site_popup').fadeOut();
	});

	// 네비게이션 2depth
	/**/
	$('.nav_list li').mouseleave(function(){
		$(this).find('.sub_list').stop().slideUp(200);
	});

	$('.nav_list li').mouseover(function(){
		$(this).find('.sub_list').stop().slideDown(200);
	}); 

	

   /*  TAB LIST */ 
	 $('.conts_box .tab_list li a').on('click',function(e){
			var $this = $(this);
			var $tab_list = $this.parent('li');
			$('.conts_box .tab_list li').removeClass('on');
			$('.conts_box .tab_conts').removeClass('on');
			$tab_list.addClass('on');
			$('#'+ $tab_list.data('id')).addClass('on');
			e.preventDefault();
	});
});


$(window).load(function(){

	
var swiper = new Swiper('.swiper-container', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	renderBullet: function (index, className) {
		return '<span class="' + className + '">' + (index + 1) + "</span>";
	},
	autoplay: {
    	delay: 5000,
		disableOnInteraction: false
  	},
	watchSlidesProgress: true,
	on: {
				autoplayStop: function () {
			   	 	$(".play_btn").addClass('on');
			   	 	$(".stop_btn").addClass('off');
				},
				autoplayStart: function () {
				$(".stop_btn").addClass('on');
				$(".stop_btn").removeClass('off');
					$(".play_btn").removeClass('on');
				}
			},
});

var pagingSwiper = new Swiper(".swiper-container", {
	pagination: {
	  el: ".swiper-pagination2",
	  type: "fraction",
	}
  });

  swiper.controller.control = pagingSwiper;

  $(".play_btn").on('click', function(){
	swiper.autoplay.start();
 });
 
$(".stop_btn").on('click', function(){
	 swiper.autoplay.stop();
 });
}); 



$(window).scroll(function () {
	if ($('html, body').scrollTop() > 400) {
		  $('#top_btn').fadeIn();
	 } else {
		  $('#top_btn').fadeOut();
	 }
});



