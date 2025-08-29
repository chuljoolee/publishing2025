
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

// hwang 140703 &터 자원봉사센터 봉사 및 교육신청 My 신청현황 팝업 
function openMyApply(){
    $(".pop_my_apply").fadeIn();
}

// 엔터 자원봉사 프로젝트 팝업
function openProjectPop(){
    getPos();
    $('.enter_apply .pop_project_apply').css('top', layerPos);
    $(".enter_apply .pop_project_apply").fadeIn();
    modalShow();
}

// 마이페이지 동아리 신입회원 추가신청 팝업
function openNewMemberPop(){
    getPos();
    $('.my_group .pop_new_member').css('top', layerPos);
    $(".my_group .pop_new_member").fadeIn();
    modalShow();
}

// 140801 일정 자세히보기 팝업
function openSchedulePop(){
    $(".c_popup").fadeIn(300);
}
/* 일정게시판 팝업 */
function overCalendarPop( _this, e ){
    var cOffset = _this.parents(".unit").position(); /* 부모로부터 unit의 offset */
    var conOffset = _this.parents(".calendar_container").offset(); /* container의 offset */
    var _top = cOffset.top + 156; /* header 부분을 뺀 값 */
    var _tmpLeft = e.pageX - conOffset.left -20;
    var _left;
    var _arrowLeft;
            
    if( _tmpLeft > ( 880 - 300 ) ){ // 오른쪽에 치우쳤을 때        
        _left = 880 - 300;
        _arrowLeft = 292 - ( 880 - _tmpLeft ) + 20;
    }else{
        _left = _tmpLeft;
        _arrowLeft = 14;
    }
    $(".c_over_popup").css( { top : _top, left : _left } );
    $(".c_over_popup > span").css( { left : _arrowLeft } );
    $(".c_over_popup").stop().fadeIn(200);
}
function outCalendarPop(){
    $(".c_over_popup").stop().fadeOut(0); 
}

var idx1 = 0;
var idx2 = 0;
var idx3 = 0;
var idx4 = 0;
var rollingNum = 0;
// 마이페이지 신입회원 추가신청 팝업
$(function(){
		
    // 팝업 종료 140627
    $(".btn_close_popup").click( function( e ){
        e.preventDefault();
        modalHide();
        $(this).parents(".pop").hide();
    });

    
    // hwang 140630 radio 추가
    $(document).on("click", "td.radio  li > input", function(){
        $("td.radio  li > input:radio:checked").parent("li").addClass("on");
        $("td.radio  li > input:radio:not(:checked)").parent("li").removeClass("on");
    });
    
    // hwang 140703 radio 추가
    $(document).on("click", "ul.radio  li > input", function(){
        $("ul.radio  li > input:radio:checked").parent("li").addClass("on");
        $("ul.radio  li > input:radio:not(:checked)").parent("li").removeClass("on");
    });


    
    // hwang 140701 파일첨부1 추가
    $(document).on("click", ".fileWrap1 > li > .btn_search", function(e){
        e.preventDefault();
        var file = $(this).siblings("input[type=file]").val();
        if(file != null && file != "") {
            alert("파일을 삭제 후 등록해 주세요.");
            return;
        }
        //$(this).siblings("input[type=file]").trigger('click');
    });
    
    // hwang 140701 파일첨부1 추가
    $(document).on("change", ".fileWrap1 input[type=file]", function(){
        $(this).siblings("input[type=text]").val($(this).val());
    });
    
    // hwang 140702 체크박스 체크
    $("td.check  li > input").click( function(){
        $("td.check  li > input:checkbox:checked").parent("li").addClass("on");
        $("td.check  li > input:checkbox:not(:checked)").parent("li").removeClass("on");
    });
    
    // hwang 140703 회색 배경 없는 팝업 종료
    $(".btn_close_popup1").click( function( e ){
        e.preventDefault();
        $(this).parents(".pop").hide();
    });
    
    // hwang 140801 스케쥴 팝업 종료
    $(".c_popup .btn_close_cpopup").click( function( e ){
        e.preventDefault();
        $(this).parents(".c_popup").fadeOut(200);
    });
    
    // hwang 140806 사업 캥거루 인터뷰 썸네일 클릭
    $(".biz .interview_picture .thumb li a").click( function( e ){
        e.preventDefault();
        var idx = $(this).parent().index();
        $(".biz .interview_picture .thumb li").removeClass("on");
        $(".biz .interview_picture .screen li").removeClass("on");
        $(".biz .interview_picture .thumb li").eq(idx).addClass("on");
        $(".biz .interview_picture .screen li").eq(idx).addClass("on");
    });
    
    // hwang 140807 협력동아리 신청 회원 검색
    $('td.name_id > a').click(function(){
        $('.member_search').fadeIn();
        getPos();
        $('.member_search').css('top', layerPos);
        modalShow();        
    });
 // hwang 140818 메인
    $(".main_con > ul > li > a").click( function( e ){
        $(".main_con > ul > li").removeClass("on");
        $(this).parent("li").addClass("on");
        
    });
    
    // hwang 140818 후원안내 희망메시지 팝업     
    // 복지센터 안내 - 지역별 복지센터 my 센터란 클릭
    $(".btn_pop_small").click(function(e){
        e.preventDefault();
        $(".pop_small").fadeIn( 300 );
    });
    $(".btn_close_pop_small").click( function(e){
        e.preventDefault();
        $(".pop_small").fadeOut( 300 );
    });
    // hwang 140819 일정게시판 unit over out
    $(".unit > a").on({
        'mouseenter' : function( e ){
            overCalendarPop( $(this), e );
        },
        'mouseleave' : function( e ){
            outCalendarPop();
        }
    });
    // 140819 패밀리사이트 select 수정
    $(".familysite .btn_family").click( function( e ){
        e.preventDefault();
        if( $(this).parent(".familysite").hasClass( "on" ) ){ // 접기        
            $(this).parent(".familysite").removeClass("on");
            $(".familysite > ul").fadeOut(500);
        }else{
            $(this).parent(".familysite").addClass("on");
            $(".familysite > ul").fadeIn(300);
        }
    });
    
   
});

//메인 추가

var agent = navigator.userAgent;
var _isIE8 = false;
if(agent.indexOf('Trident/4.0') >= 0){
    _isIE8 = true;
}
else{
    _isIE8 = false;
}

var kMain = ( function(){
    var btnTown;            // 우리동네 복지센터 버튼 
    var isMainTab = true;
    
    
    var init = function(idx1, idx2, idx3, idx4){
        if($("#rolling1").size() > 0){
        	kMain.rollManager.init();
        }
        initDom();
    };
    var initDom = function(){
        
        // 우리동네 복지센터
        btnTown = $(".btn_mytown");
        btnTown.click( function(){ 
            kMain.displayToggle();
        });
        // 복지센터 지도 pic
        $("ul.pos .btn_pic").on({
            'mouseenter focus' : function(){
                if( _isIE8 ){
                    $(this).siblings(".area").show();
                }else{
                    $(this).siblings(".area").fadeIn(100);
                }
                
            },
            'mouseleave blur' : function(){
            	if($(this).hasClass('on') == true){
            		
            	}else{
	                if( _isIE8 ){
	                    $(this).siblings(".area").hide();
	                }else{
	                    $(this).siblings(".area").fadeOut(200);
	                }
            	}
            }
        });
        
        
        // 복지센터 센터정보팝업 종료버튼 클릭
        $(".btn_close_map_pop").click( function( e ){
            if( _isIE8 ){
                $(this).parent().hide();
                $("ul.pos .btn_pic").removeClass('on');
                $(this).parent().siblings(".area").hide();
            }else{
                $(this).parent().fadeOut(200);
                $("ul.pos .btn_pic").removeClass('on');
                $(this).parent().siblings(".area").hide();
            }

            
        });
        
        // 재단 홍보영상 팝업 종료
        $(".btn_close_videopop").click( function( e ){
            closeVideoPop();
        });
    };
    var displayToggle = function(){
        if( isMainTab ){   // true 이면 복지센터지도로 이동
            isMainTab = false;
            btnTown.addClass("on");
            TweenLite.to( ".main_wrap", 1, { top : 0, ease:Cubic.easeInOut  } );
            
        }else{                // false 이면 메인탭으로
            isMainTab = true;
            btnTown.removeClass("on");
            TweenLite.to( ".main_wrap", 1, { top : -672, ease:Cubic.easeInOut  } );
        }
    };
    
    var closeMainPop = function( idx ){
        modalHide();
        $(".pop" + idx).fadeOut( 300 );
    };
    
    var openVideoPop = function(){
        modalShow();
        $(".video_pop > .frame").empty().html('<iframe width="853" height="480" src="https://www.youtube.com/embed/luYDZF9L7I8?rel=0" frameborder="0" allowfullscreen></iframe>');
        var _top = centerTop( 650 );
        $(".video_pop").css('top', _top).fadeIn(600);
        $(".video_pop .video_text").show();
    };
    var closeVideoPop = function(){
        modalHide();
        $(".video_pop > .frame").empty();
        $(".video_pop").fadeOut(400);
    };
            
    var centerTop = function( _height ){
       var _windowHeight = $(window).height();
        var _top = ( (_windowHeight - _height )/2 ) > 0? (_windowHeight - _height )/2 : 0;
        return _top;
    };

    return { 
        init : init,
        displayToggle : displayToggle,
        closeMainPop : closeMainPop,
        openVideoPop : openVideoPop
    };
}());


//메인의 총 4개의 롤링을 관리하는 매니저

kMain.rollManager = ( function(){
    
    
    var rollInfoArr = [ /*   롤링되는 리스트들의 정보 배열    -    id : dom의 id, maxIdx : 총 롤링되는 개수, term : 롤링되기까지의 시간(초), option :  롤링 option */
        { id : "rolling1", maxIdx : 2, term : 4, option : 0}, /* 재단소개 메인 */
        { id : "rolling2", maxIdx : 1, term : 4, option : 1, _width : 327 }, /* 사업안내 - 자원봉사 신청 */
        { id : "rolling3", maxIdx : 3, term : 4, option : 0 }, /* 사업안내 - 이벤트 */
        { id : "rolling4", maxIdx : 5, term : 4, option : 1, _width : 326 }  /* 후원안내 - 이달의 환우 소개 */
        ],
        rollArr = [],                                        /* Roll 객체배열*/
        rollArrLength,                                   /* Roll 객체 배열 길이 */
        rollTimer,                                          /* 롤링 타이머 */
        isRoll = true;                                    /* 롤링 가능 boolean, 팝업 생성되었을 때 false주기 */
        
    // 초기 세팅 실행
    init = function(eachNum){
    	//console.log(rollingNum);
    	
         
         
         if(rollingNum == 0){
        	 rollInfoArr[0].maxIdx =  $("#rolling1 .roll_list > li").length;    // 재단소
             rollInfoArr[1].maxIdx =  $("#rolling2 .roll_list > li").length;    // 사업안내 1
             rollInfoArr[2].maxIdx =  $("#rolling3 .roll_list > li").length;    // 사업안내 2
             rollInfoArr[3].maxIdx =  $("#rolling4 .roll_list > li").length;    // 후원안내
             
             for( var i=0,max=rollInfoArr.length; i<max; i++ ){
                 var roll = new Roll( rollInfoArr[i].id, rollInfoArr[i].maxIdx, rollInfoArr[i].term, rollInfoArr[i].option, rollInfoArr[i]._width );
                 rollArr.push( roll );
                 //console.log(i);
              }
              rollArrLength = rollArr.length;
              for( var i=0; i<rollArrLength; i++ ){
                 rollArr[i].init();
              }
              
              rollTimerPlay();
             
         }else if(rollingNum == 1 || eachNum == 4){
        	 rollInfoArr[3].maxIdx =  $("#rolling4 .roll_list > li").length;    // 후원안내
        	 
        	 for( var i=3,max=rollInfoArr.length; i<max; i++ ){
                 var roll = new Roll( rollInfoArr[i].id, rollInfoArr[i].maxIdx, rollInfoArr[i].term, rollInfoArr[i].option, rollInfoArr[i]._width );
                 rollArr.push( roll );
                 //console.log(i);
              }
              rollArrLength = rollArr.length;
              for( var i=3; i<rollArrLength; i++ ){
                 rollArr[i].init();
              }
              
              rollTimerPlay();
         }
       
         rollingNum++;
    };
    
    // 4초 간격으로 실행
    if( isRoll == true ){
		rollTimerPlay = function(){
                
            for( var i=0; i < rollArrLength; i++ ){
                  rollArr[i].rollTimerPlay();
            }
            if(isRoll != false){
			   rollTimer = setTimeout( function(){
					rollTimerPlay();
				}, 4000 );
		    }
		 };
		return{ init : init };
	}else if( isRoll == false ) {
		return false;
	}
        
}());

if( ! Function.prototype.bind )
    Function.prototype.bind = function(context)
    {   
        var args = Array.prototype.slice.call(arguments, 1); 
        var me = this; // the function being called
        return function()
        {   
            return me.apply(context, new Array(args, arguments));
        };   
    };   

// 롤링 리스트 객체
// dom id, 롤링리스트 개수, 롤링 시간

var Roll = function( id, maxIdx, term, option, _width ){
    this.container = $("#" + id );
    this.rollList = this.container.children(".roll_list_wrap").children(".roll_list");                                                 // 롤링 리스트
    this.rollNavi = this.container.children(".roll_nav").children("ul");                        // 롤링 네비 
    this.btnPlay = this.container.children(".roll_nav").children(".btn_roll_play");      // 재생일시정지버튼
    
    this.maxIdx = maxIdx;                                                                                        // rolling 되는 총 개수
    this.prevIdx = 0;                                                                                                 // 이전의 index
    this.currentIdx = 0;                                                                                             // 현재 보이는 index
    this.isPlaying = true;                                                                                          // 정지 재생 체크
    this.term = term;                                                                                               // 롤링과 롤링사이 간격(초)
    this.count = 0;                                                                                                   // 1초에 1씩 증가하는 count   최대 term까지 증가
    this.option = option;                                                                                          // 롤링되는 방식 0: 투명도 방식, 1:옆으로 이동
    this._width = _width;
};

Roll.prototype = {
    
    init : function(){
        var _self = this;
        this.rollNavi.children("li").children("a").click( function( e ){
            _self.clickNavi( e );
        });
        this.btnPlay.click( this.clickBtnPlay.bind( this ) );
    },
    
    // event handler ========================
    // navi 클릭
    clickNavi : function( e ){
        this.count = 0;
        var clickIdx = $( e.target ).parent("li").index();
        
        this.moveList( clickIdx );
        
    },
     // 재생버튼 클릭
    clickBtnPlay : function(){
        
        if( this.isPlaying == true ){ // 재생 중일 때 정지!
            this.isPlaying = false;	
			this.setBtnPlay(0);
			
            //this.count = 0;
        }else if( this.isPlaying == false ){                  // 정지 일 때 재생!
            this.isPlaying = true;		
			this.setBtnPlay(1);
			
        }
        
       
    },
    
    // ====================================
    //선택한 navi 변경
    setNavi : function( idx ){
        
        this.rollNavi.children("li").removeClass("on");
        this.rollNavi.children("li").eq( idx ).addClass("on");
    },
   
    // 선택한 재생버튼 변경
    setBtnPlay : function(num){
        if( num == 1 ){ // 재생중으로 변경
            this.btnPlay.addClass("playing");
        }else if(num == 0){      // 정지로 변경
            this.btnPlay.removeClass("playing");
        }
    },
    // 선택한 리스트 변경
    setList : function( idx ){

        this.rollList.children("li").removeClass("prev");
        this.rollList.children("li").removeClass("curr");
        this.rollList.children("li").eq( this.prevIdx ).addClass("prev"); 
        var curr = this.rollList.children("li").eq( idx ); 
        
        
        if( this.option === 0 ){
            TweenLite.fromTo( curr, 1, { opacity : 0 }, { opacity : 1 } );
        }else if( this.option === 1 ){
            var leftTarget = -( idx * this._width );
            TweenLite.to( this.rollList, .7, { left : leftTarget, ease:Quad.easeOut } );
        }
        curr.addClass("curr");
    },
    
    // 1초 간격으로 실행 체크
    rollTimerPlay : function(){
        if( this.isPlaying  == true){	
        	//20141208 수정 : 후원안내 롤링 제어
			//this.btnPlay.addClass("playing");
			isRoll = true; 
            this.count+= 1;
            if( this.count >= this.term ){  // term까지 count가 증가하면 롤링이 되어야 함
                this.count = 0;  
                var nextIdx = this.currentIdx+1 >= this.maxIdx? 0 : this.currentIdx+1;
                this.moveList( nextIdx );
            } 
        }
    },
    
    // 리스트 롤링 ( currentIdx 변경 )
    moveList : function( idx ){
        if( idx !== this.currentIdx ){ // 현재 index와 다를 때
         if(this.isPlaying != false){
			this.prevIdx = this.currentIdx;
            this.currentIdx = idx;
            this.setNavi( this.currentIdx );
            this.setList( this.currentIdx );
		 }
        }
    }
};




// 내 미션 수행 기록 보기 팝업
function openFourRecordPop(){
    getPos();
    $(".fourletter .pop_record").css('top', layerPos ).fadeIn();   
    modalShow();
}

// 내가 모은 이벤트 글자보기 팝업
function openFourCollectPop(){
    getPos();
    $(".fourletter .pop_collect").css('top', layerPos ).fadeIn(); 
    modalShow();
}

// 보너스 코너 당첨결과 완료팝업
function openFourBonusCompPop(){
    getPos();
    $(".fourletter .pop_bonus_comp").css('top', layerPos ).fadeIn(); 
    modalShow();
}

// 보너스 코너 당첨결과 미완료팝업
function openFourBonusIncompPop(){
    getPos();
    $(".fourletter .pop_bonus_incomp").css('top', layerPos ).fadeIn(); 
    modalShow();
}

// 미션(1) 수행 완료 팝업
function openFourMissionPop(){
    getPos();
    $(".fourletter .pop_mission").css('top', layerPos ).fadeIn(); 
    modalShow();
}

//  이벤트 만족도 조사 참여안내 팝업
function openFourSurveyPop(){
    getPos();
    $(".fourletter .pop_survey").css('top', layerPos ).fadeIn();
    modalShow();
}
// 만족도 조사 완료 팝업 
function openFourSurveyCompPop(){
    getPos();
    $(".fourletter .pop_survey_comp").css('top', layerPos ).fadeIn();
    modalShow();
}

// 9월 캥거루의료비 지원사업 변경내용 안내 팝업
function openKangarooPop(){
	getPos();
    $(".kangaroo_pop").css('top', layerPos ).fadeIn();
    modalShow();
}

//메인 회원정보 안내 팝업
function openMemberInfoPop(){
	getPos();
    $(".memberinfo_pop").css('top', layerPos ).fadeIn();
	if($(".black_opacity").length < 1){
		modalShow();
	}
}

// 메인 리뉴얼 팝업
function openRenewalPop(){
	getPos();
    $(".main_pop").css('top', layerPos ).fadeIn();
    if($(".black_opacity").length < 1){
		modalShow();
	}
};

//메인 공지 팝업
function openNoticePop(){
	getPos();
    $(".notice_pop").css('top', layerPos ).fadeIn();
    if($(".black_opacity").length < 1){
		modalShow();
	}
};

// 반려사유
function openReturnReason(){
    //getPos();
    $(".return_layer").css('top', "50%" ).fadeIn();   
    modalShow();
}