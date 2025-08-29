var mHiehgt;
var layerPos;


$(function() { 
	if($('div').hasClass('main') == false){
		
		if($('title')){
			var pageTitle = document.title
			var obj = $('.page_header ul li');
			var n = obj.length;
			var pageSubTitle = new Array();
	
			for(i=1; i<n; i++){
				pageSubTitle[i] = obj.eq(i).text() + ' > ';
				if(i == n-1){
					pageSubTitle[i] = obj.eq(i).text();
				}
			}
			var pageSubTitle = pageSubTitle.join('');
			document.title = pageSubTitle + ' | ' + pageTitle;
		} 
	}	 

    mHiehgt = $('#container').innerHeight(); 
    if($('div').is('.quick_top')) topInit();

    function topInit(e){
        var obj = $('div.quick_top');
        var p = obj.offset().top;
        
        $(window).on('scroll', function(){
        var wHeight = $(window).innerHeight();
        var w = $(window).scrollTop();
            if( (w > p) && ( wHeight > 750 ) ){
                $('div.quick_top').stop().animate({'top': w+500}, 500);
            } else {
                $('div.quick_top').stop().animate({'top': p}, 500);
            };
        });
    };
 
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

   
   /* GNB */
	$('#header').mouseleave(function(){
		$('.gnb-depth2, .gn_active_area').slideUp(200);
	});

	$('.gnbList').mouseover(function(){
		$('.gnb-depth2:not(:animated), .gn_active_area:not(:animated)').slideDown(200);
		return false;
	}); 

	$('.gn_active_area').mouseleave(function(){
		//$('.gnb-depth2, .gn_active_area').slideUp(200);
	});
 
    
    // tab
    $('.tab > li > a').click(function( e ){
    	 e.preventDefault();
         if ($(this).parent().hasClass('readytab') == true){
                
         }
         else{
	        $(this).parent('li').find('a').addClass('on');
	        $(this).parent('li').siblings('li').find('a').removeClass('on');
	        $(this).next('div').css('display','block').parent('li').siblings('li').children('div').css('display','none');
         }
         $('.green_sub > li').children('h4').removeClass('change'); 
         $('.orange_sub > li').children('h4').removeClass('change'); 
    });      
  
 
  // �섎떒 util
    //$('#select_familysite').selectbox();
    $(".util .btn_fold , .all_menu_wrap .btn_close").click( function(e){
        e.preventDefault();
        if($(".util .btn_fold").hasClass("on") == true){ 
        	TweenMax.to( ".all_menu_wrap .btn_close", 0.7 , {height:20} );
            $(".util").removeClass("on");
            TweenMax.to( ".all_menu_wrap", 0.7, {height:0} );
            TweenMax.to( "#util", 0.7, {height:39} );
            TweenMax.to( ".all_menu_wrap .btn_close", 0.1, {height:0} );
            $(".util .btn_fold").removeClass("on");
                      
        }else{           
            $(".util").addClass("on");
            TweenMax.to( ".all_menu_wrap", 0.7, {height:370} );
            TweenMax.to( "#util", 0.7, {height:434} );
            TweenMax.to( ".all_menu_wrap .btn_close", 0.7 , {height:20} );
            $(this).addClass("on");
           
        }
        if( $(".familysite").hasClass("on")){
            $(".familysite > ul").fadeOut(0);
            $(".familysite").removeClass("on");
        }
    });
       
 
    $(".btn_mycenter").click(function(e){
        e.preventDefault();
        $(".pop_mycenter").fadeIn( 300 );
    });
    $(".btn_close_mycenter").click( function(e){
        e.preventDefault();
        $(".pop_mycenter").fadeOut( 300 );
    });
    
    // custom checkbox �묒꽦��泥댄겕諛뺤뒪 �щ윭媛�
    $(".check_wrap > li > input").click( function(){
        $(".check_wrap > li > input:checkbox:checked").parent("li").addClass("on");
        $(".check_wrap > li > input:checkbox:not(:checked)").parent("li").removeClass("on");
    });
    // custom checkbox �묒꽦��泥댄겕諛뺤뒪 �쒓컻
    $(document).on("click", ".check_wrap_one > input", function(){
        $(".check_wrap_one > input:checkbox:checked").parent("p").addClass("on");
        $(".check_wrap_one > input:checkbox:not(:checked)").parent("p").removeClass("on");
    });
 
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
    // �앹뾽 醫낅즺 140627
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
   /* �섑솕 珥덇툒 */
    $('.typho li a').hover(
        function(){
            var path1 = '';
            var path2 = '';
            var num = $(this).parents('ul').children('li').index($(this).parent('li')) + 1;
            var obj = $(this).parents('ul').parent('div').attr('class');
            var txt = $(this).parents('ul').siblings('p').text();

            if($(this).parents('div').is('.sign_learn') == true){
                var path1 = 'i';
                var path2 = 't';
            } else if($(this).parents('div').is('.braille_learn') == true){
                var path1 = 'ji';
                var path2 = 'jt';
            }

            $(this).parent().addClass('on').siblings('li').removeClass('on');

            $('.graphic > span img').attr('src','/rs/images/game/' + path1 + '/i_' + obj + '_' + num + '.png');
            $('.graphic > div img').attr('src','/rs/images/game/' + path2 + '/t_' + obj + '_' + num + '.png');

            if( txt != $('.graphic div p').text()){
                $('.graphic div p').text(txt);
            }
        },
        function(){
            $(this).parent().removeClass('on');
        }
    );
    
    
    
    
    // �대찓����젆��諛뺤뒪 �대깽��媛쒕컻��異붽�)
    $(".emailSelectBox").change(function() {
        var email = $("option:selected", this).val();
        
        if(email != null && email != "") {
            $(this).parent().siblings("input").last().attr("readonly", true);
            $(this).parent().siblings("input").last().val(email);
        } else {
            $(this).parent().siblings("input").last().attr("readonly", false);
            $(this).parent().siblings("input").last().val("");
            $(this).parent().siblings("input").last().focus();
        }
    });
    
    
    //�ㅼ슫濡쒕뱶 �대┃(媛쒕컻��異붽�)
    $(".download").click(function() {
        var fileName = $(this).data("filename");
        var fileOriName = $(this).data("fileoriname");
        var frm = document.frm;
        var url = location.protocol+"//"+location.host+"/";
//        var url = "https://"+location.host+"/";
        if(fileName != null && fileName.length > 0 && fileOriName != null && fileOriName.length > 0) {
            $("input[name=fileName]").val(fileName);
            $("input[name=fileOriName]").val(fileOriName);
            /*frm.action = "https://www.ktngwelfare.org/"+$("input[name=boardType]").val()+"/fileDownload";*/
            frm.action = url+$("input[name=boardType]").val()+"/fileDownload";
            frm.submit();
            
        } else {
            alert("다운로드가 불가능합니다.");
            return;
        }
    });
});

function allMenuClose() {
    $('.orange_sub ul, .green_sub ul').hide();
    $('.orange_sub .btn_close, .green_sub .btn_close').hide();
    $('.show_green, .show_orange').hide();
	$('.gnb_wrap .btn_mytown').show();
    $('.orange_sub > li').children('h4').removeClass('change');
    $('.green_sub > li').children('h4').removeClass('change');
    $('#header').css({'position': ' ','z-index':' '});
    
}


function modalShow(){
	var body = document.body, html = document.documentElement;
	var mHiehgt = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
	//var mHiehgt = $('#container').innerHeight();alert(mHiehgt);
	var mWidth = $('#container').innerWidth();
    $('body').append('<div class="black_opacity"></div>');
    $('.black_opacity').css({'height':mHiehgt,'width':mWidth});
    $('.black_opacity').fadeIn();
}

function modalHide(){
    
    if($("#loginLayer2") && $("#loginLayer2").length > 0) {
        $("#loginLayer2").fadeOut();
    }
    
    $('.black_opacity').fadeOut(function(){
        $('.black_opacity').remove();
    });
}
function getPos(){
    layerPos = $(window).scrollTop() + 30;
}

// 140627 hwang  �곕쑜���숉솕 �앹뾽 遺��ㅽ뵂
function openBook(){
    $('.fairytale_book').fadeIn();
    getPos();
    $('.fairytale_book').css('top', layerPos);
    modalShow();
}

// hwang 蹂듭��щ떒 �묐젰�숈븘由��꾪솴 �앹뾽
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
            $('.top_img_wrap.network').css('background','#3b7f08');
            break;
        case 'biz'  : 
            $("body").addClass("biz");
            $('.top_img_wrap.network').css('background','#eaa732');
            break;
        case 'enter'  : 
            $("body").addClass("enter");
            $('.top_img_wrap.network').css('background','#f5f3f4');
            break;
        case 'center'  : 
            $("body").addClass("center");
             $('.top_img_wrap.network').css('background','#a18a01');
            break;
        case 'noti'  : 
            $("body").addClass("noti");
            $('.top_img_wrap.network').css('background','#7d6e16');
            break;
        case 'sponsor'  : 
            $("body").addClass("sponsor");
            $('.top_img_wrap.network').css('background','#588131');
            break;
        case 'online'  : 
            $("body").addClass("online");
            $('.top_img_wrap.network').css('background','#6ea635');
            break;
        case 'game'  : 
            $("body").addClass("game");
            $('.top_img_wrap.network').css('background','#58840c');
            break;
         default :  break;  
      }
    if( $("#container").hasClass("online")){
        $("body").addClass("online");
		$('.top_img_wrap.network').css('background','#6ea635');
    }
    if( $("#container").hasClass("game")){
        $("body").addClass("game");
		$('.top_img_wrap.network').css('background','#58840c');
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
	document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";" ;
} 

/* 濡쒓렇���덉씠��*/
function openLoginLayer() {
	$('.login_layer').fadeIn();
    getPos();
    $('.login_layer').css('top', layerPos);
    modalShow();
    
    $("#userIdForm").focus();
}



/* 濡쒓렇���덉씠��2 */
function openLoginLayer2(id) {
	
	var date = new Date();
	var startDt = new Date(2023,0,2);
    var endDt = new Date(2023,0,15);
    
    if(date >= startDt && date <= endDt){
   	 	alert("발급기간이 아닙니다.");
   	 	return;
    }else{
	    if(id == null || id.length == 0) {
	        $('#loginLayer2').fadeIn();
	        getPos();
	        $('#loginLayer2').css('top', layerPos);
	        modalShow();
	        $("#loginFormId2").focus();
	        $('form[name=loginLayerForm2]').attr("action", "/support/receipt/list");
	    } else {
	        $('form[name=loginLayerForm2]').attr("method", "post");
	        $('form[name=loginLayerForm2]').attr("action", "/support/receipt/list");
	        $('form[name=loginLayerForm2]').submit();
	    }
    } 

    
}



// 荑좏궎��젣 @return : null
// ex) DeleteCookie(荑좏궎�대쫫);
function DeleteCookie(name){
	var exp = new Date(); 
	var cval = GetCookie(name);

	exp.setTime(exp.getTime() - 1); 
	document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString(); 
}







$(function(){
    // hwang 140630 怨쇱옣���뚯씪�먯꽌 �뚯씪李얘린 �ъ슜
    $('.fileWrap > a').click(function(){
        //$('.fileWrap input[type=file]').trigger('click');
    });
    // hwang 140630 怨쇱옣���뚯씪�먯꽌 �뚯씪李얘린 �ъ슜
    $('.fileWrap input[type=file]').change(function(){
        //$('.fileWrap input[type=text]').val($(this).val());
    });
    $(document).ready(function(){
         //gnb sub 
        if($('#container').hasClass('sponsor') == true){            
             $('.green_wrap').css('left', '0');
             $('.green_sub').show();
           //  $('.green_wrap').children().eq(1).addClass('change');              
        } else{
             $('.green_wrap').css('left', '768px');
           //  $('.orange_wrap').children().eq(1).addClass('change'); 
        }
        topimg();
        $('.green_wrap').children().removeClass('change'); 
        $('.orange_wrap').children().removeClass('change'); 
       	//mj 140912 硫붿씤 ���쒕뜡
    	var mainclick = Math.floor(Math.random() * 3);	 
    	$('.main_con > ul > li:eq('+mainclick +') > a').trigger('click'); 
    })
    // hwang 140630 radio 異붽�
    $(document).on("click", "td.radio  li > input", function(){
        $("td.radio  li > input:radio:not(:checked)").removeAttr('checked').parent("li").removeClass("on");
        $("td.radio  li > input:radio:checked").attr('checked','checked').parent("li").addClass("on");
           
    });
    
    
    
    var kakaoUrl = document.URL;
	kakaoUrl = kakaoUrl.replace("#none",'');
	kakaoUrl = kakaoUrl.replace("#!",'');
	var kakaoTitle=$("#Title_url").val();
	$("#Title_url").val(kakaoUrl);


/*$("#popup_open").click(function(){
	Kakao.init('72d2ef210d924cc613e08f2103d7b6d9');
    
    // 카카오링크 버튼 생성
    Kakao.Link.createDefaultButton({
        container: '#btnKakao', // HTML에서 작성한 ID값
        objectType: 'feed',
        content: {
        title: kakaoTitle, // 보여질 제목
        description: "", // 보여질 설명
        imageUrl: kakaoUrl, // 콘텐츠 URL
        link: {
            mobileWebUrl: kakaoUrl,
            webUrl: kakaoUrl
        }
        }
    });
    $("#popup_wrap, #popup_wrap .dim").fadeIn();
});
$("#popup_wrap .close").click(function(){
    $("#popup_wrap, #popup_wrap .dim").fadeOut();
});*/


$("#copyUrl").click(function(){
	//$("#btn_bundle .item").not(".interest").removeClass("on");
	urlCopyBrowser($("#Title_url").val());
});

// 팝업 열기
var snsOpenCount = 0;
$("#openPop").click(function(){
	if(snsOpenCount == 0){
		Kakao.init('dca116ecd6d97f269a60b0b4a6ed41ac');
	    
	    // 카카오링크 버튼 생성
	    Kakao.Link.createDefaultButton({
	        container: '#btnKakao', // HTML에서 작성한 ID값
	        objectType: 'feed',
	        content: {
	        title: kakaoTitle, // 보여질 제목
	        description: "", // 보여질 설명
	        imageUrl: kakaoUrl, // 콘텐츠 URL
	        link: {
	            mobileWebUrl: kakaoUrl,
	            webUrl: kakaoUrl
	        }
	        }
	    });		
	}
    
   $(".popup, .pop_dim").show();
   snsOpenCount++;
   // $("#content, #container, #wrap").css('overflow','hidden');
});

//팝업 닫기
$(".pop_close").click(function(){
   $(".popup, .pop_dim").hide();
   // $("#content, #container, #wrap").css('overflow','auto');
});



function urlCopyBrowser(shareUrl){
if(shareUrl != '' && shareUrl != null) {
	if (window.clipboardData) {
		// IE처리
		// 클립보드에 문자열 복사
		window.clipboardData.setData('text', shareUrl);

		// 클립보드의 내용 가져오기
		// window.clipboardData.getData('Text');

		// 클립보드의 내용 지우기
		// window.clipboardData.clearData("Text");
		$('.url_share').show();
		$("#share_layer").hide();
	} else {
		// 비IE 처리
		
		// 복사를 위한 input 생성
		var tempInput = document.createElement('input');
			tempInput.id = 'clip_tmp';
			tempInput.style = 'position:absolute; top:-9999em';
			tempInput.value = shareUrl;
			document.body.appendChild(tempInput);
			tempInput.select();
		
		
		
			var successful = document.execCommand('copy');
		document.body.removeChild(tempInput);

		if (successful) {
			$('.url_share').show();
			$("#share_layer").hide();
		} else {
			alert('잘못되었습니다. 페이지를 새로고침(F5)해주세요 계속 이러한 사항이 발생한다면 고객센터에 문의해주세요!!');
		}
		//window.prompt(shareUrl);
		//window.prompt(shareUrl);
	}
	
	setTimeout(function() {
		$("#url_share").hide();
		$("#btn_bundle .item").removeClass("on");
	}, 2000);
	
} else {
	alert('잘못되었습니다. 페이지를 새로고침(F5)해주세요 계속 이러한 사항이 발생한다면 고객센터에 문의해주세요!!');
	return false;
}
}







// sns 공유 클릭 시 이벤트
$(".snsShare").click(function() {
	
    var type = $(this).data("type");
    var title = $(this).data("title");
    var url = location.href;
        url = url.replace("#none",'');
        url = url.replace("#",'');
        url = encodeURIComponent(url);
        
    var nurl = document.URL;
        nurl = url.replace("#none",'');
        nurl = url.replace("#",'');
    var flag = false;
    
    if(type == '1') {
        var share = "http://www.facebook.com/sharer/sharer.php?u="+url;
        var name = 'facebook';
        window.open(share,name);
        flag = true;

    } else if(type == '2') {
        var share = 'http://twitter.com/intent/tweet?text=' + encodeURIComponent(title)+ ' \n ' + url;
        var name = "twitter";
        window.open(share,name);
        flag = true;
    } else if(type == '3') {
        var share = 'http://blog.naver.com/openapi/share?url=' + nurl + '&title=' + title; 
        var name = "naverBlog";
        window.open(share,name);
        flag = false;
    } else if(type == '4') {
        var share = 'https://share.naver.com/web/shareView?url=' + nurl + '&title=' + title;
        var name = "naverCafe";
        window.open(share,name);
        flag = false;
    }
    
	
    /*
    if(flag) {
        var seq = $("#seq").val();
        var boardType = $("#boardType").val();
        $.ajax({
            url : '/welfare/updateSnsCount.json',
            type : 'POST',
            dataType : 'json',
            data : { 'seq' : seq, 'boardType':boardType, 'type' : type },
            error : function(result) {
                alert('error');
                return;
            } 
        });
    }
    */
});


    
    // sns 공유 클릭 시 이벤트
  /*  $(".snsShare").click(function() {
        var type = $(this).data("type");
        var title = $(this).data("title");
        var url = location.href;
            url = url.replace("#none",'');
            url = url.replace("#",'');
            url = encodeURIComponent(url);
        var flag = false;
        
        if(type == '1') {
            var share = "http://www.facebook.com/sharer/sharer.php?u="+url;
            var name = 'facebook';
            window.open(share,name);
            flag = true;
            
        } else if(type == '2') {
            var share = 'http://twitter.com/intent/tweet?text=' + encodeURIComponent(title)+ ' \n ' + url;
            var name = "twitter";
            window.open(share,name);
            flag = true;
        }
        
        
        if(flag) {
            var seq = $("#seq").val();
            var boardType = $("#boardType").val();
            
            $.ajax({
                url : '/welfare/updateSnsCount.json',
                type : 'POST',
                dataType : 'json',
                data : { 'seq' : seq, 'boardType':boardType, 'type' : type },
                error : function(result) {
                    alert('error');
                    return;
                } 
            });
        }
    });*/
 
});