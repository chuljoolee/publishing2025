/* var mHiehgt;
var layerPos;


$(function() {
    
    mHiehgt = $('#container').innerHeight();
    

    if($('div').is('.quick_top')) topInit();

    function topInit(e){
        var obj = $('div.quick_top')
        var p = obj.offset().top;
        $(window).on('scroll', function(){
        var w = $(window).scrollTop();
            if(w > p){
                $('div.quick_top').stop().animate({'top': w+500}, 500);
            } else {
                $('div.quick_top').stop().animate({'top': p}, 500);
            };
        });
    };
        
        /* 레이어 닫기 
    $('.layer_close').click(function(){
        $(this).parent('div').fadeOut();
        if($('div').is('.black_opacity_cover') == true){
            modalHide2();
        } else {
            modalHide();
        }
    });
    
    $('div.quick_top a').on('click', function(e){
         e.preventDefault();
        $('html, body').stop().animate({scrollTop:0}, 500);
    });

    // GNB
    $('.orange_wrap > li').click(function(e) {
        e.preventDefault();
        $('#header').css({'position': 'relative','z-index':'100'});
        $('.green_sub, .green_sub ul, .show_green').hide();
        $('.orange_sub, .orange_sub ul, .show_orange').show();
        $('.green_wrap').css('left', '768px');
        $('.orange_wrap').children().eq(1).addClass('change'); 
        $('.green_wrap').children().removeClass('change'); 
     
       
    });
    $('.green_wrap > li').click(function(e) {
        e.preventDefault();
        $('#header').css({'position': 'relative','z-index':'100'});
        $('.orange_sub, .orange_sub ul, .show_orange').hide();
        $('.green_sub, .green_sub ul, .show_green').show();
        $('.green_wrap').css('left', '0');
        $('.green_wrap').children().eq(1).addClass('change'); 
        $('.orange_wrap').children().removeClass('change'); 
    
    });
  
    // tab
    $('.tab li > a').click(function( e ){
    	 e.preventDefault();
         if ($(this).parent().hasClass('readytab') == true){
                
         }
         else{
	        $(this).parent('li').find('a').addClass('on');
	        $(this).parent('li').siblings('li').find('a').removeClass('on')
	        $(this).next('div').css('display','block').parent('li').siblings('li').children('div').css('display','none');
         }
         $('.green_wrap').children().removeClass('change'); 
         $('.orange_wrap').children().removeClass('change'); 
    });      
  
    // 하단 util
    //$('#select_familysite').selectbox();
    $(".util .btn_fold").click( function(e){
        e.preventDefault();
        if($(this).hasClass("on") == true){         
            $(".util").removeClass("on");
            TweenMax.to( ".all_menu_wrap", 0.7, {height:0} );
            TweenMax.to( "#util", 0.7, {height:39} );
            $(this).removeClass("on");
          
        }else{           
            $(".util").addClass("on");
            TweenMax.to( ".all_menu_wrap", 0.7, {height:357} );
            TweenMax.to( "#util", 0.7, {height:434} );
            $(this).addClass("on");
           
        }
        if( $(".familysite").hasClass("on")){
            $(".familysite > ul").fadeOut(0);
            $(".familysite").removeClass("on");
        }
    });
    
    // select 
    $(".select_wrap > select").selectbox({
        speed : 500
    });
    $(".search_form > select").selectbox();
    $('.sponsor td select').selectbox();
    $('.reser_set select').selectbox();
    
    // 복지센터 안내 - 지역별 복지센터 my 센터란 클릭
    $(".btn_mycenter").click(function(e){
        e.preventDefault();
        $(".pop_mycenter").fadeIn( 300 );
    });
    $(".btn_close_mycenter").click( function(e){
        e.preventDefault();
        $(".pop_mycenter").fadeOut( 300 );
    });
    
    // custom checkbox 작성폼 체크박스 여러개
    $(".check_wrap > li > input").click( function(){
        $(".check_wrap > li > input:checkbox:checked").parent("li").addClass("on");
        $(".check_wrap > li > input:checkbox:not(:checked)").parent("li").removeClass("on");
    });
    // custom checkbox 작성폼 체크박스 한개
    $(document).on("click", ".check_wrap_one > input", function(){
        $(".check_wrap_one > input:checkbox:checked").parent("p").addClass("on");
        $(".check_wrap_one > input:checkbox:not(:checked)").parent("p").removeClass("on");
    });
    
    // 알림센터 faq
    $(".noti_faq > .faq_contents .question > a").click( function( e ){
        e.preventDefault();
        var my = $(this).parent(".question").parent("li");
        var question = $(".noti_faq > .faq_contents li"); 
        if( my.hasClass( "on" )){
            my.removeClass("on");
            my.find(".answer").slideUp(300);
        }else{
            question.removeClass( "on" );
            question.find(".answer").slideUp(300);
            my.addClass("on");
            my.find(".answer").slideDown(300);
        }
    });
    // 팝업 종료 140627
    $(".btn_close_popup").click( function( e ){
        e.preventDefault();
        modalHide();
        $(this).parents(".pop").hide();
    });
    
    $('.friend_list li span a:first-child').click(function(){
        var type = $(this).data("type");
        if(type == null || type != "none") {
            $('.story_layer').fadeIn();
            getPos();
            $('.story_layer').css('top', layerPos);
            modalShow();
        }
    });
    
    /* 수화 초급 *
    $('.typho li a').hover(
        function(){
            var path1 = ''
            var path2 = ''
            var num = $(this).parents('ul').children('li').index($(this).parent('li')) + 1
            var obj = $(this).parents('ul').parent('div').attr('class')
            var txt = $(this).parents('ul').siblings('p').text()

            if($(this).parents('div').is('.sign_learn') == true){
                var path1 = 'i'
                var path2 = 't'
            } else if($(this).parents('div').is('.braille_learn') == true){
                var path1 = 'ji'
                var path2 = 'jt'
            }

            $(this).parent().addClass('on').siblings('li').removeClass('on')

            $('.graphic > span img').attr('src','/rs/images/game/' + path1 + '/i_' + obj + '_' + num + '.png')
            $('.graphic > div img').attr('src','/rs/images/game/' + path2 + '/t_' + obj + '_' + num + '.png')

            if( txt != $('.graphic div p').text()){
                $('.graphic div p').text(txt)
            }
        },
        function(){
            $(this).parent().removeClass('on')
        }
    );
    
});

function allMenuClose() {
    $('.orange_sub, .green_sub').hide();
    $('.orange_sub ul, .green_sub ul, .show_green, .show_orange').hide();
    $('.orange_wrap').children().eq(1).removeClass('change');
    $('.green_wrap').children().eq(1).removeClass('change');
    $('#header').css({'position': ' ','z-index':' '});
}


function modalShow(){
    $('body').append('<div class="black_opacity"></div>');
    $('.black_opacity').css('height',mHiehgt)
    $('.black_opacity').fadeIn();
};

function modalHide(){
    $('.black_opacity').fadeOut(function(){
        $('.black_opacity').remove();
    });
};
function getPos(){
    layerPos = $(window).scrollTop() + 30;
}

// 140627 hwang  따뜻한 동화 팝업 북 오픈
function openBook(){
    $('.fairytale_book').fadeIn();
    getPos();
    $('.fairytale_book').css('top', layerPos);
    modalShow();
}

// hwang 복지재단 협력동아리 현황 팝업
function openGroupReport(){
    getPos();
    $('.pop_group_report').css('top', layerPos);
    $(".pop_group_report").fadeIn();
    modalShow();
}

function topimg(){
    var ch = $('#container').attr('class');
    switch (ch) {
        case 'intro'  : 
            $("body").addClass("intro");
            break;
        case 'biz'  : 
            $("body").addClass("biz");
            break;
        case 'enter'  : 
            $("body").addClass("enter");
            break;
        case 'center'  : 
            $("body").addClass("center");
            break;
        case 'noti'  : 
            $("body").addClass("noti");
            break;
        case 'sponsor'  : 
            $("body").addClass("sponsor");
            break;
        case 'online'  : 
            $("body").addClass("online");
            break;
        case 'game'  : 
            $("body").addClass("game");
            break;
         default :  break;  
      }
    if( $("#container").hasClass("online")){
        $("body").addClass("online");
    }
    if( $("#container").hasClass("game")){
        $("body").addClass("game");
    }

}


function notice_getCookie( name )
{
	var nameOfCookie = name + "=";
	var x = 0;
	while ( x <= document.cookie.length )
	{
		var y = (x+nameOfCookie.length);

		if ( document.cookie.substring( x, y ) == nameOfCookie )
		{
			if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
				endOfCookie = document.cookie.length;

			return unescape( document.cookie.substring( y, endOfCookie ) );
		}

		x = document.cookie.indexOf( " ", x ) + 1;

		if ( x == 0 )
			break;
	}
	return "";
}
function setCookie(name, value, expiredays){ 
    var todayDate = new Date(); 
    todayDate.setDate(todayDate.getDate() + expiredays); 
	document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";" 
} 

// 쿠키삭제 @return : null
// ex) DeleteCookie(쿠키이름);
function DeleteCookie(name){
	var exp = new Date(); 
	var cval = GetCookie(name);

	exp.setTime(exp.getTime() - 1); 
	document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString(); 
}

$(function(){
    // hwang 140630 과장님 파일에서 파일찾기 사용
    $('.fileWrap > a').click(function(){
        //$('.fileWrap input[type=file]').trigger('click');
    });
    // hwang 140630 과장님 파일에서 파일찾기 사용
    $('.fileWrap input[type=file]').change(function(){
        //$('.fileWrap input[type=text]').val($(this).val());
    });
    $(document).ready(function(){
         //gnb sub 
        if($('#container').hasClass('sponsor') == true){            
             $('.green_wrap').css('left', '0');
           //  $('.green_wrap').children().eq(1).addClass('change');              
        } else{
             $('.green_wrap').css('left', '768px');
           //  $('.orange_wrap').children().eq(1).addClass('change'); 
        }
        topimg();
        $('.green_wrap').children().removeClass('change'); 
        $('.orange_wrap').children().removeClass('change'); 
    })
    // hwang 140630 radio 추가
    $(document).on("click", "td.radio  li > input", function(){
        $("td.radio  li > input:radio:not(:checked)").removeAttr('checked').parent("li").removeClass("on");
        $("td.radio  li > input:radio:checked").attr('checked','checked').parent("li").addClass("on");
           
    });
    
});
*/