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

  /*
  $(window).scroll(function(evt) {
    var y = $(this).scrollTop();
    if (y > 64) {
        $('.header').removeClass('header-fixed');

    } else{
        $('.header').addClass('header-fixed');
    }
  });
  */

  /** 햄버거 버튼 클릭 → 전체메뉴 열기 */
  $('.allmenu-js').on('click', function(){
    $('.all-menu').addClass('--show');
  });

  /** 닫기 버튼 클릭 → 전체메뉴 닫기 */
  $('#btnCloseJs').on('click', function(){
    $('.all-menu').removeClass('--show');
  });

});
