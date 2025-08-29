$(window).load(function(){

	
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
        loop: true,
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
        },
        loop:true,
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

$(function(){
	
	// NAV
	$('.header .ham_btn').on('click', function(){
        $('.nav').addClass('on');
        $('.nav_bg').fadeIn();
    });
    $('nav .nav_top .cls_btn').on('click', function(){
        $('.nav').removeClass('on');
        $('.nav_bg').fadeOut();
    });
    $('.nav_bg').on('click', function(){
        $('.nav').removeClass('on');
        $('.nav_bg').fadeOut();
    });
    $('.nav_list li a').on('click',function(e){
        var $link = $(this);
        var $nav_list = $link.closest('ul');
        var $link_active = $nav_list.find('.on')
        var $nav_list_li = $link.closest('li');
        var $link_status = $nav_list_li.hasClass('on');

        $nav_list.find('ul').slideUp();
        $link_active.removeClass('on');
        if (!$link_status) {
            $nav_list_li.children('ul').slideDown();
            $nav_list_li.addClass('on');
        }
//        e.preventDefault();
    });




    // MAIN SLIDE

//    $(".play_btn").on('click', function(){
//    	mySwiper.autoplay.start();
//    });
//    
//   $(".stop_btn").on('click', function(){
//		mySwiper.autoplay.stop();
//    });
   

   
	// SIGN UP 
	// personal VS group
	$('.member_radio input:radio').on('click', function(){
		if( $('.conts_inner input[id=group]').is(':checked')){
			$('.conts_inner .group_form').show();
			$('.conts_inner .personal_form_list').hide();
		}else{
			$('.conts_inner .group_form').hide();
			$('.conts_inner .personal_form_list').show();
		}
	});
	
	// ADD INFO
	$('.user_add_info .add_btn').on('click', function(e){
		$('.add_list').slideToggle(400, function(){
			$('.user_add_info').toggleClass('on', $(this).is(':visible'));
		});
		e.preventDefault();
	});


    // SELECT BOX FUNCTION
    /* 
    $(".selectbox dt a").click(function(){
      $(".selectbox dd ul").toggle();
      $(".selectbox").toggleClass('on');
    });
    $(".selectbox dd ul li a").click(function() {
      var text = $(this).html();
      var a_data = $(this).closest('li').data('online');
      console.log(a_data);
      $(".selectbox").toggleClass('on');
      $(".selectbox dt a span").html(text);
      $(".selectbox dd ul").hide();

      $('.online_sponsor_list .list_conts').removeClass('on');
      $('#'+ a_data).addClass('on');

    });
    $('.selectbox').on('click', function(e){
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("selectbox")){
            $(".selectbox dd ul").hide();
        }
        e.preventDefault();
    });
        <dl class="selectbox">
            <dt><a href="#"><span>일시후원</span></a></dt>
            <dd>
                <ul class="optionlist">
                    <li data-online="temp"><a href="#">일시후원</a></li>
                    <li data-online="peri"><a href="#">정기후원</a></li>
                    <li data-online="anni"><a href="#">기념후원</a></li>
                    <li data-online="msg"><a href="#">희망메시지</a></li>
                </ul>
            </dd>
        </dl>
    */

    
    // FAQ
	/*
    $('.faq_list li a').on('click',function(e){
        var $q = $(this);
        var $faq_list = $q.closest('ul');
        var $q_active = $faq_list.find('.on') 
        var $faq_list_li = $q.closest('li');
        var $q_status = $faq_list_li.hasClass('on');

        $faq_list.find('.answer').slideUp();
        $q_active.removeClass('on');
        if (!$q_status) {
            $faq_list_li.children('.answer').slideDown();
            $faq_list_li.addClass('on');
        }
        e.preventDefault();
    });
    */

    /*  TAB LIST */ 
    $('.conts_box .tab_list li a').on('click',function(e){
        var $this = $(this);
        var $tab_list = $this.parent('li');

        $('.conts_box .tab_list li').removeClass('on');
        $('.conts_box .conts').removeClass('on');
        $tab_list.addClass('on');
        $('#'+ $tab_list.data('id')).addClass('on');

        //e.preventDefault();
    });

    // 온라인후원하기 동의하기 체크박스 이벤트
    $(".support_terms input").on('click',function(){
        if( $(".support_terms input:checkbox[id='temAgree']").is(":checked")){
            $('.support_history .sponsor_info').show();
            $('.login_before_info').css('padding-top','0');
        }else{
            $('.support_history .sponsor_info').not('.login_before_info').hide();
            $('.login_before_info').css('padding-top','30px');
        }
    });
    
    // 온라인 후원하기 파일 찾기 이벤트
    var fileTarget = $('.user_detail_info .filebox .upload-hidden');
    fileTarget.on('change', function(){
        if(window.FileReader){
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }
        $(this).siblings('.upload-name').val(filename);
    });

    // 복지센터 -> 지역별 복지센터 / 오시는 길
    /*
    $('.area_info').eq(0).show();
    $('.w_location').eq(0).show();

    $(".center_select select").on('change',function(){
         $(".center_select select option:selected").each(function(){
            var info_select = $(this).data('select');
            var info_text = $(this).text();

            var tit = $(this).parents('.center_select').siblings('.conts_box').children('h3');
            var tit_text = tit.text();

            // 지역별 복지센터
            $('.area_info').hide();
            $('#'+info_select).show();

            // 오시는 길
            $('.w_location').hide();
            $('#'+info_select).show();

            tit.text(info_text);

       });
    });
	*/

    // FAMILY SITE 
    $(".family_btn").on('click',function(){ 
        if( $(this).children(".family_list").hasClass( "on" ) ){       
            $(this).children(".family_list").removeClass("on");
        }else{
            $(this).children(".family_list").addClass("on");
        }
    });

    // POPUP
    // INFO POPUP
    $('.info_tit .query_icon').on('click',function(){
        $('.setinfo_pop').fadeIn();
    });
    $('.setinfo_pop .close button').on('click',function(){
        $('.setinfo_pop').fadeOut();
    });


    /* CALENDAR BTN */
    /*$('.conts_box .calendar_btn').on('click',function(){
        $('.calendar_pop').fadeIn();
    });
    $('.calendar_pop .close button').on('click',function(){
        $('.calendar_pop').fadeOut();
    });*/



    /* SUPPORT POPUP */
    /*$('.month_list_wrap .sp_btn').on('click',function(e){
        $('.support_login_popup').fadeIn();
        e.preventDefault();
    });*/
    $('.support_login_popup .close button').on('click',function(){
        $('.support_login_popup').hide();
        $(".pop_txt").show();
        $(".pop_login").hide();
    });


    /* ADDRESS POPUP */
/*
    $('.address_btn').on('click', function(e){
        $('.adress_popup').fadeIn();
        e.preventDefault();
    });
    
    $('.adress_popup .address_search_btn').on('click', function(e){
        $('.search_before').hide();
        $('.ads_list').show();
        e.preventDefault();
    });

    $(".ads_search input").keyup(function(e){
        if( e.keyCode == 13 ) {
            $('.adress_popup .address_search_btn').click();
        }
    });

    $('.ads_srch_box .ads_list li a').on('click', function(e){
        $('.ads_srch_box').hide();
        $('.detail_address').show();
        e.preventDefault();
    });
    $('.detail_address .final_btn').on('click', function(e){
        $('.detail_address').hide();
        $('.final_confirm').show();
        e.preventDefault();
    });

    $('.adress_popup .close button').on('click',function(){
        $('.adress_popup').fadeOut(100, function(){
            $('.adress_popup .ads_srch_box').show();
            $('.adress_popup .search_before').show();
            $('.adress_popup .ads_data .ads_list').hide();
            $('.detail_address').hide();
            $('.final_confirm').hide();
            $('#adsData1, #adsData2').val('');
        });
    });

    $('.adress_popup .again_srch').on('click',function(e){
        $('.adress_popup .ads_srch_box').show();
        $('.adress_popup .search_before').show();
        $('.adress_popup .ads_data .ads_list').hide();
        $('.detail_address').hide();
        $('.final_confirm').hide();
        $('#adsData1, #adsData2').val('');
        e.preventDefault();
    });
*/

    /* COLLEGE POPUP */

//    $('.college_btn').on('click',function(e){
//        $('.college_popup').fadeIn();
//        /*e.preventDefault();*/
//    });
//    $('.college_search_btn').on('click', function(e){
//        $(this).parent('.clg_search').siblings('.clg_info').children().text('해당되는 대학명을 선택해주세요.')
//        $('.clg_list_box').show();
//        e.preventDefault();
//    });
//    $('.college_popup .close button').on('click',function(){
//        $('.college_popup').fadeOut(100, function(){
//            $('.college_popup').find('.clg_info').children('li').text('찾고싶으신 대학명을 입력해 주세요.');
//            $('.clg_list_box').hide();
//        });
//    });

    // 복지센터 
    /*
    $('.welfare_section .info_btn').on('click',function(e){
        var welfare_popup = $(this).data('area');
        //console.log(welfare_popup);
        $(".welfare_pop."+welfare_popup).fadeIn();
        e.preventDefault();
    });
    $('.welfare_pop .close button').on('click',function(){
        $('.welfare_pop').fadeOut();
    });
	*/
    $('#popup_wrap .dim').on('click',function(){
        $('.welfare_pop').fadeOut();
    });
});

/**
 * makeMap
 * @param x lng
 * @param y lat
 * @param address 주소
 * @param location 장소명
 */
function makeMap(x, y, address, location) {
    var relocateLat = parseFloat(x)+parseFloat('0.0008');

    var map = new daum.maps.Map(document.getElementById('map'), {
        center: new daum.maps.LatLng(relocateLat, y),
        level: 3,
    });

    var marker = new daum.maps.Marker({
        position: new daum.maps.LatLng(x, y),
        clickable: true
    });
    marker.setMap(map);

    var customOverlay = new daum.maps.CustomOverlay({
        content: '<div class="overLay" style="background-color: white">' +
            '    <div>' +
            '        <div class="title">' + location +
            '        </div>' +
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
            '        <div>' +
            '                <div class="map_address">' + address + '</div>' +
            '            <div class="map_btn_area clearfix">' +
            '                <a href="https://map.kakao.com/link/to/' + location +',' + x + ','+y + '" target="_blank">길찾기</a>' +
            '                <a href="https://map.kakao.com/link/roadview/'+ x + ','+y + '" target="_blank">로드뷰</a>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>',
        position: new daum.maps.LatLng(x, y),
        xAnchor: 0.5,
        yAnchor: 1.4
    });
    customOverlay.setMap(map);

    kakao.maps.event.addListener(marker, 'click', function() {
        $('.overLay').css('display','block');
    });
}

function closeOverlay() {
    $('.overLay').css('display','none');
}