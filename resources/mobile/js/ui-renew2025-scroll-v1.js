$(window).load(function(){

	
}); 

$(function(){
	//header scroll
	var lastScrollTop = 0;
	$(window).scroll(function () {
			var sct = $(window).scrollTop();

		if(sct > lastScrollTop && (sct > $('#wrapper').outerHeight()-($('.container').outerHeight()+$('footer').outerHeight()))) {
			$('header').addClass('header-fixed');
		} else if(sct<=88){
			$('header').removeClass('header-fixed');
		}
			lastScrollTop=sct;
	});
});

//✅ JS (스크롤 위치 저장 + 복원) v1
let scrollPosition = 0;

$(document).ready(function(){

  /** 햄버거 버튼 클릭 → 전체메뉴 열기 */
  $('.allmenu-js').on('click', function(){
    scrollPosition = $(window).scrollTop(); // 현재 스크롤 위치 저장
    $('body').addClass('no-scroll').css({
      top: -scrollPosition + 'px'
    });
    $('.all-menu').addClass('--show');
  });

  /** 닫기 버튼 클릭 → 전체메뉴 닫기 */
  $('#btnCloseJs').on('click', function(){
    $('body').removeClass('no-scroll').css({
      top: ''
    });
    $('.all-menu').removeClass('--show');
    $(window).scrollTop(scrollPosition); // 원래 위치 복원
  });

});


$(document).ready(function(){

  /** 1뎁스 메뉴 클릭 */
  $('.nav_allmenu_list > li > a').on('click', function(e){
    e.preventDefault();

    // 다른 1뎁스 닫고 자기만 열기
    $('.nav_allmenu_list > li > a').removeClass('on');
    $('.depth2-item-list').hide();

    $(this).addClass('on');
    $(this).next('.depth2-item-list').show();
  });

  /** 2뎁스 메뉴 클릭 (dep 클래스가 있는 것만) */
  /*
   $('.nav_allmenu_list .depth2-item-list > li > a.dep').on('click', function(e){
    e.preventDefault();

    // 같은 depth2 안에서 토글
    $(this).closest('.depth2-item-list').find('> li > a.dep').removeClass('on');
    $(this).closest('.depth2-item-list').find('.depth3-item-list').hide();

    $(this).addClass('on');
    $(this).next('.depth3-item-list').show();
  });
  */

});