var index = 0;
//버튼 여러번 누르는 것을 막는 flag
var flag = true;

var img_left = [
            "images/book1/book1_1.png",
            "images/book1/book2_1.png",
            "images/book1/book3_1.png",
            "images/book1/book1_1.png"
           ];


var img_right = [
            "images/book1/book1_2.png",
            "images/book1/book2_2.png",
            "images/book1/book3_2.png",
            "images/book1/book1_2.png"
           ];

$(function () {
    //        init();
    
});

$(window).load(function () {
    console.log("load");
    initEventHandler();
    
});

//init
function init() {

}

//initEventHandler  
function initEventHandler() {
    $(".btn_prev").on("click", prevHandler);
    $(".btn_next").on("click", nextHandler);

    $(".dotNavi ol li").on("click", dotHandler);

}


function prevHandler(e) {
    //        bookmotion("left");
}

function nextHandler(e) {
    e.preventDefault();
    //        bookmotion("right");

    if (flag) {
        //실행하자마자 바로 false
        flag = false;

        //만약 index가 5일 경우에는 
        //-1로 변경해야 합니다.
        if (index == 5) index = -1;

        //nextBtn이니까 보여질 이미지 index증가 
        ++index;

        moveNext();

        //now도 움직입니다.
        $(".now").removeClass("now");

        //새로운 now는 index로 add
        $(".dotNavi ol li").eq(index)
            .addClass("now");

    } //if end
}

//bookmov
function bookmotion(conType, bookCount) {
    if (conType == "left") {
        console.log("bookmotion_left");

    } else if (conType == "right") {
        console.log("bookmotion_right");

    }
}

//dotNavi
function dotHandler(e) {
    e.preventDefault();

    $(".now").removeClass("now");

    //현재 index를 old에 저장
    var old = index;

    //내가 누른 index를 현재로
    index = $(this).addClass("now")
        .index();

    var result = old - index;

    if (result < 0) { //결과가 음수면 next움직임
        moveNext();
    } else if (result > 0) {
        movePrev();
    }

    console.log("==============================");
    console.log("index : ", index);
    console.log("old : ", old);
    console.log("result : ", result);
}

function moveNext() {
    console.log("------------------- moveNext ---------------------");

    var url_left = img_left[index];
    var url_right = img_right[index];
    console.log("index : ", index)
    console.log("url_left : ", url_left)
    console.log("url_right : ", url_right)
    //        <div id="box2" class="hide">
    //            <div class="left"><img src="images/book1/book2_1.png" alt="왼쪽 이미지2"/></div>
    //            <div class="right"><img src="images/book1/book2_2.png" alt="오른쪽 이미지2"/></div>
    //        </div>
    var $add = $("<div class='left'><img src='" + url_left + "' alt='왼쪽 이미지2'/></div><div class='right'><img src='" + url_right + "' alt='오른쪽 이미지2'/></div>");
    //        var $tr2 = $("<div id='box2'>");



    //현재 숨겨진 .hide요소를 선택합니다.
    $(".hide").appendTo(".imgcover")
    //                  .delay(250)
    .css({
        left: 640,
        width: 0 + "%",
        "z-index": 0
    })

    .animate({
        left: 0,
        width: 100 + "%",
        opacity: 1
    }, 800)
        .removeClass("hide")

    .append($add)
        .prev() //이전 요소 선택

    .addClass("hide")

    .animate({
        left: 0,
        width: 100 + "%",
        "z-index": 0
    }, 800, function () {
        //애니메이션이 끝나고 난 후 호출

        $("div").remove(".left:eq(0)");
        $("div").remove(".right:eq(0)");

        flag = true;

    });


    $(".right").appendTo(".hide")

    .css({
        right: 0,
        width: 100 + "%",
        opacity: 1,
        backgroundColor: "blue",
        "z-index": 0
    }).animate({
        right: 0,
        width: 50 + "%"
    }, 800);

    $(".imgcover .right").delay(800).css({
        left: 320,
        width: 0,
        backgroundColor: "orange",
        "z-index": 0
    }).animate({
        left: 320,
        width: 320
    }, 800)


    //        $(".left").appendTo(".hide")
    //                    .css({left:640,width:"100%"}).animate({left:0,width:"100%"},800)


    //                 $(".left").css({left:640,"z-index":1}).animate({left:0},800)       


}

function movePrev() {
    console.log("------------------- movePrev ---------------------");

}