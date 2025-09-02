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

$(document).ready(function(){
  //v1
  $('.allmenu-js').on('click', function(){
    $('.all-menu').addClass('--show');
    $('body').addClass('no-scroll');  // 스크롤 막기
  });

  $('#btnCloseJs').on('click', function(){
    $('.all-menu').removeClass('--show');
    $('body').removeClass('no-scroll'); // 스크롤 해제
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

});