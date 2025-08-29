$(function(){

    function getPos(){
        layerPos = $(window).scrollTop() + 100;
    }
    // function openGroupReport(){
    //     getPos();
    //     $('.pop_group_report').css('top', layerPos);
    //     $(".pop_group_report").fadeIn();
    //     modalShow();
    // }
    // function openCarSupport(){
    //     getPos();
    //     $('.pop_car_support').css('top', layerPos);
    //     $(".pop_car_support").fadeIn();
    //     modalShow();
    // }
    // lnb리뉴얼 
    $("#lnb_wrap .btn_2depth").on("click", function(){
        $(".lnb_sub_list").toggleClass("off");

        if($(this).parent("li").hasClass("active")){
            if($(".lnb_sub_list").hasClass("off")){
                $(this).css({ 
                    "background-image" : "url(/rs/imgs/renew/icon_arrow_close.png)",
                });
            }else{
                $(this).css({ 
                    "background-image" : "url(/rs/imgs/renew/icon_arrow_open.png)",
                });
            }
        }else{
            if($(".lnb_sub_list").hasClass("off")){
                $(this).css({ 
                    "background-image" : "url(/rs/imgs/renew/icon_arrow_close_gray.png)",
                });
            }else{
                $(this).css({ 
                    "background-image" : "url(/rs/imgs/renew/icon_arrow_open_gray.png)",
                });
            }
        }
    });

    // breadcrumb 
    // $(".bc_list li").on("click", function(){
    //     $(this).siblings().children(".bc_sub_list").slideUp(300).parents("li").removeClass("on");
    //     $(this).toggleClass("on").children(".bc_sub_list").slideToggle(300);
    // });
    
    // $(".bc_list").on("mouseleave", function(e) {
    //     $(this).children(".bc_sub_list").hide();
    // });
    $(".bc_sub_list").on("mouseleave", function(e) {
        $(this).hide();
    });
    $(".bc_list > li").on("mouseover", function(e) {
        $(".bc_sub_list").hide();
        $(this).children(".bc_sub_list").show();
    });



    // 복지센터 
    // 서울
    $(".area .seoul li").on("click", function(){
        $(".area li").removeClass("on");
        $(".area li p").removeClass("on");
        $(this).addClass("on");


        //console.log($(this).attr("id"));
        if( $(this).attr("id") == "east" ){
            $(".position .info dl").hide();
            $(".map_img div").hide();

            $(".position .info .east").show();
            $(".map_img .east").show();
        }else if( $(this).attr("id") == "west" ){
            $(".position .info dl").hide();
            $(".map_img div").hide();

            $(".position .info .west").show();
            $(".map_img .west").show();
        }else if( $(this).attr("id") == "south" ){
            $(".position .info dl").hide();
            $(".map_img div").hide();

            $(".position .info .south").show();
            $(".map_img .south").show();
        }else if( $(this).attr("id") == "north" ){
            $(".position .info dl").hide();
            $(".map_img div").hide();

            $(".position .info .north").show();
            $(".map_img .north").show();
        }else if( $(this).attr("id") == "mid" ){
            $(".position .info dl").hide();
            $(".map_img div").hide();

            $(".position .info .mid").show();
            $(".map_img .mid").show();
        }
        

    });
    // 인천
    $(".area .incheon").on("click", function(){
        $(".area li").removeClass("on");
        $(".area li p").removeClass("on");
        $(this).children("p").addClass("on");

        $(".position .info dl").hide();
        $(".map_img div").hide();
        $(".position .info .incheon").show();
        $(".map_img .incheon").show();
    });
    // 성남
    $(".area .seongnam").on("click", function(){
        $(".area li").removeClass("on");
        $(".area li p").removeClass("on");
        $(this).children("p").addClass("on");

        $(".position .info dl").hide();
        $(".map_img div").hide();
        $(".position .info .seongnam").show();
        $(".map_img .seongnam").show();
    });
    // 경기
    $(".area .kyonggi").on("click", function(){
        $(".area li").removeClass("on");
        $(".area li p").removeClass("on");
        $(this).children("p").addClass("on");

        $(".position .info dl").hide();
        $(".map_img div").hide();
        $(".position .info .kyonggi").show();
        $(".map_img .kyonggi").show();
    });


    // 제출서류

    $(".papers_box dt").on("click", function(){
        $(this).toggleClass("on");
        if($(this).hasClass("on")){
            $(this).next("dd").slideDown();
        }else{
            $(this).next("dd").slideUp();
        }
        if($(this).parents(".papers_box").hasClass("ex")){
            if($(this).hasClass("on")){
                $(this).parents(".papers_box").animate({"min-height": "401px"},400);
            }else{
                $(this).parents(".papers_box").animate({"min-height": 0},400);
            }
        }
    });


    $(".apply_txt dt").on("click", function(){
        $(this).toggleClass("on");
        if($(this).hasClass("on")){
            $(this).next("dd").slideDown();
        }else{
            $(this).next("dd").slideUp();
        }
    });

    // 지역별 복지센터 안내 아코디언메뉴
    $(".wc_position_wrap li").eq(0).addClass("on");
    $(".wc_position_wrap li").eq(0).find("div").css({ "display": "block"});

    $('.wc_position_wrap li p').on('click', function() {
        if($(this).closest('li').hasClass('on')) {
            $('.wc_position_wrap li').removeClass('on');
        } else {
            $('.wc_position_wrap li').removeClass('on');
            $(this).closest('li').addClass('on');
        }
        let $content = $(this).next();
        $content.slideToggle();
        $('.wc_position_wrap li > div').not($content).slideUp();
    });
    
    

    // 앨범게시판
    if(!$(".album_slide").index()){
        var albumSlide = new Swiper(".album_slide", {
            effect: "coverflow",
            centeredSlides: true,
            slidesPerView: "auto",
            slideToClickedSlide: true,
            loop: true,
            coverflowEffect: {
                rotate: 0,
                stretch: 204,
                depth: 600,
                modifier: 1,
                slideShadows: false
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: " .pagi",
                type: "fraction",
                renderCustom: function (swiper, current, total) {
                    return current + ' of ' + total;
                },
                renderFraction: function (currentClass, totalClass) {
                    return '<strong class="' + currentClass + '"></strong>' +
                            '<em>/</em>' +
                            '<span class="' + totalClass + '"></span>';
                },
                formatFractionCurrent: function (number) {
                    return ('0' + number).slice(-2);
                },
                formatFractionTotal: function (number) {
                    return ('0' + number).slice(-2);
                },
            },
        });
    }
    
    // 자원봉사센터 사업안내 봉사단운영
    $('.defind_info h5').on('click', function(){
        $(this).siblings(".circle-plus").toggleClass('opened');
        if($(this).siblings(".circle-plus").hasClass("opened")){
            $(this).siblings(".defind_info_txt").slideDown(400);
        }else{
            $(this).siblings(".defind_info_txt").slideUp(400);
        }
    });

    $('.circle-plus').on('click', function(){
        $(this).toggleClass('opened');
        if($(this).hasClass("opened")){
            $(this).siblings(".defind_info_txt").slideDown(400);
        }else{
            $(this).siblings(".defind_info_txt").slideUp(400);
        }
    });


});