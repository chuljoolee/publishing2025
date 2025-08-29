$(function() {
  // TOP 버튼 클릭 시 부드럽게 상단 이동
  $('.btn-top').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 500);
  });
});

$(function () {
  const $gnbItems = $('.gnb > ul.depth1 > li.dep1');

  $gnbItems.on('mouseenter', function () {
    // 기존 cur/active 제거
    $gnbItems.find('> a').removeClass('cur');
    $gnbItems.removeClass('active').find('.depth2-item-inner').stop().animate({ height: 0 }, 200);

    // 현재 항목 cur + active
    $(this).find('> a').addClass('cur');
    $(this).addClass('active');

    // 내부 컨텐츠 높이 계산
    const $inner = $(this).find('.depth2-item-inner');
    const innerHeight = $inner.find('.depth2').outerHeight(true);

    // 애니메이션 적용
    $inner.stop().animate({ height: innerHeight }, 300);
  });

  $gnbItems.on('mouseleave', function () {
    $(this).find('> a').removeClass('cur');
    $(this).removeClass('active');

    // 닫기 애니메이션
    $(this).find('.depth2-item-inner').stop().animate({ height: 0 }, 200);
  });
});

$(function(){

	
	//header scroll
	var lastScrollTop = 0;
	$(window).scroll(function () {
		/*console.log($(window).scrollTop());*/
			var sct = $(window).scrollTop();

		if(sct > lastScrollTop && (sct > $('#wrapper').outerHeight()-($('#container').outerHeight()+$('#footer-wrap').outerHeight()))) {
			$('header').addClass('header-fixed');
			// $('#wrapper').css('margin-top', '144px');
		} else if(sct<=88){
			$('header').removeClass('header-fixed');
			// $('#wrapper').css('margin-top', '0px');
		}
			lastScrollTop=sct;
	});

	
	// 상단으로 바로가기 버튼
	$('#top_btn_js').on('click',function(){
		 $('html, body').stop().animate({scrollTop: 0}, 800);
	});

	// if ($('.dev').length) {
	// }
	
	if ($('.familysite-js').length) {
		$(".familysite-js .btn_family").click( function( e ){
			e.preventDefault();
			if( $(this).parent(".familysite-js").hasClass( "on" ) ){ // 접기        
					$(this).parent(".familysite-js").removeClass("on");
					$(".familysite-js > ul").fadeOut(500);
			}else{
					$(this).parent(".familysite-js").addClass("on");
					$(".familysite-js > ul").fadeIn(300);
			}
		});
	}	
	 	
	// 사이트맵 팝업 - 디자인 업데이트 할경우
	/*
	if ($('.sitemap_btn_js').length) {
		$('.sitemap_btn_js').on('click',function(){
			$('.site_popup_wrap').fadeIn();
		});
		$('.site_popup_wrap .close').on('click',function(){
				$('.site_popup_wrap').fadeOut();
		});
	}
	*/
	
});


