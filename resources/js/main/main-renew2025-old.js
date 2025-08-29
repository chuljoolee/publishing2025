$(function() {
/*
  $('.gnb .has-sub > a').on('click', function(e) {
    e.preventDefault();
    var $parent = $(this).parent();

    if ($parent.hasClass('active')) {
      $parent.removeClass('active');
    } else {
      $parent.addClass('active').siblings().removeClass('active');
    }
  });

  // 메뉴 외부 클릭 시 닫기
  $(document).on('click', function(e) {
    if (!$(e.target).closest('.gnb').length) {
      $('.gnb li').removeClass('active');
    }
  });
*/
  //mouseenter mouseleave
  $('.header .new-gnb > li .new-gnb-list').on({
		'mouseenter':function(){
			/*
      if(!window.matchMedia("screen and (max-width:1024px)").matches){
				$('#wrap').addClass('on');
				$('.header').addClass('act');
				$('.header .new-gnb-2dep .new-all-nav').css('display','block');
				$('.header .new-search').addClass('active');
				$(window).scroll(function() {
					if($(window).scrollTop() > 80) {//667 151
						$('#wrap').removeClass('on');
						$('.header').removeClass('act');
						$('.header .new-gnb-2dep .new-all-nav').css('display','none');
						$('.new-search').removeClass('active');
						$('.header .new-search').removeClass('active');
					} 
				});
			}
      */
		}
	});


});
$(function () {
  const $gnbItems = $('.gnb > ul.depth1 > li.dep1');

  $gnbItems.on('mouseenter', function () {
    // 기존 cur 제거
    $gnbItems.find('> a').removeClass('cur');
    $gnbItems.removeClass('active');

    // 현재 항목 cur + active
    $(this).find('> a').addClass('cur');
    $(this).addClass('active');
  });

  $gnbItems.on('mouseleave', function () {
    // 마우스 벗어나면 cur + active 제거
    $(this).find('> a').removeClass('cur');
    $(this).removeClass('active');
  });
});
