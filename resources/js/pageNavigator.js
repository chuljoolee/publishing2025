/**
*		페이지 네비게이터
**/

var PageNavigator = function( target, fnc, options ) {
    this.$container = $( target );
    this.callbackFunc = ((typeof(fnc) == "function") ? fnc : window[fnc]);


    this.firstNode = null;
    this.prevNode = null;
    this.nextNode = null;
    this.lastNode = null;

    this.settings = {
        prev: null,
        prevTags: null,
        prevClassName: null,
        prevVisible: true,

        next: null,
        nextTags: null,
        nextClassName: null,
        nextVisible: true,

        first: null,
        firstTags: null,
        firstClassName: null,
        firstVisible: false,

        last: null,
        lastTags: null,
        lastClassName: null,
        lastVisible: false,


        currentNodeType: "B",
        currentClassName: null,

        linkNodeType: "A",
        linkClassName: "",
        linkBlockCount: 5,
        seperator: " ",
        
        totalPageArea:null
    };


    $.extend(this.settings, options);

    this.init();
};



$.extend(PageNavigator.prototype, {
    init: function(){

        // "처음" 링크를 보여지게 할 경우..!
        if( this.settings.firstVisible ){
            this.settings.firstTags = (this.settings.first ? '<img src="' + this.settings.first + '" alt="리스트 처음으로 가기" border="0" />' : (this.settings.firstTags || "처음"));
            this.firstNode = this.createLink(this.settings.firstTags, this.settings.firstClassName);
        }


        // "이전" 링크를 보여지게 할 경우..!
        if( this.settings.prevVisible ){
            this.settings.prevTags = (this.settings.prev ? '<img src="' + this.settings.prev + '" alt="이전 10개 리스트 보기" border="0" />' : (this.settings.prevTags || "이전"));
            this.prevNode = this.createLink(this.settings.prevTags, this.settings.prevClassName);
        }


        // "다음" 링크를 보여지게 할 경우..!
        if( this.settings.nextVisible ){
            this.settings.nextTags = (this.settings.next ? '<img src="' + this.settings.next + '"  alt="다음 10개 리스트 보기"border="0" />' : (this.settings.nextTags || "다음"));
            this.nextNode = this.createLink(this.settings.nextTags, this.settings.nextClassName);
        }


        // "마지막" 링크를 보여지게 할 경우..!
        if( this.settings.lastVisible ){
            this.settings.lastTags = (this.settings.last ? '<img src="' + this.settings.last + '" alt="리스트 끝으로 가기" border="0" />' : (this.settings.lastTags || "마지막"));
            this.lastNode = this.createLink(this.settings.lastTags, this.settings.lastClassName);
        }
    },


    createLink: function( childNode, className ){
        var $node = $("<" + this.settings.linkNodeType + " />").append(childNode);

        if( className && ($.trim(className) != "") )
            $node.addClass(className);

        return $node;
    },


    clear: function(){
        this.$container.empty();
    },


    show: function( currentPageNo, totalPageCount, blockCount ){
        blockCount = (blockCount || this.settings.linkBlockCount);
		this.clear();


        if( totalPageCount > 0 ){

            var pageNavigator = this;
            var startNo = Math.floor((currentPageNo-1)/blockCount)*blockCount + 1;
            var endNo = startNo + blockCount;


            // "처음" 링크를 보여지게 할 경우..!
            if( this.settings.firstVisible ){
                this.firstNode.data("pageNo", 1).click(function(e){
                    e.preventDefault();

                    pageNavigator.callbackFunc.apply(pageNavigator, [ $(this).data("pageNo") ]);
                });


                if( this.settings.linkNodeType.toUpperCase() == "A" )
                    this.firstNode.attr({ href:"#none",  title:"리스트 처음으로 가기" });


                this.$container.append( this.firstNode ).append(" ");
            }



            // "이전" 링크를 보여지게 할 경우..!
            if( this.settings.prevVisible ){
                var pageNo = (((startNo-1) > 0) ? (startNo-1) : 1);

                this.prevNode.data("pageNo", pageNo).click(function(e){
                    e.preventDefault();

                    pageNavigator.callbackFunc.apply(pageNavigator, [ $(this).data("pageNo") ]);
                });


                if( this.settings.linkNodeType.toUpperCase() == "A" )
                    this.prevNode.attr({ href:"#none",  title:("이전 " + blockCount + "개 리스트 보기") });


                this.$container.append( this.prevNode ).append(" ");
            }



            // 페이지번호 리스팅..
            for(var i=startNo; i<endNo; i++){
                if( i > totalPageCount)								break;

                var $node;

                if( i == currentPageNo ){
                    $node = $("<" + this.settings.currentNodeType + " />");

                    if( this.settings.currentClassName && ($.trim(this.settings.currentClassName) != "") )
                        $node.addClass( this.settings.currentClassName );

                } else{
                    $node = this.createLink(i, this.settings.linkClassName);

                    $node.data("pageNo", i).click(function(e){
                        e.preventDefault();

                        pageNavigator.callbackFunc.apply(pageNavigator, [ $(this).data("pageNo") ]);
                    });


                    if( this.settings.linkNodeType.toUpperCase() == "A" )
                        $node.attr({ href:"#none", title:i });
                }


                $node.text(i).appendTo( this.$container );

                if( i < (endNo-1) )
                    this.$container.append( this.settings.seperator );
            }





            // "다음" 링크를 보여지게 할 경우..!
            if( this.settings.nextVisible ){
                var pageNo = ((endNo <= totalPageCount) ? endNo : totalPageCount);

                this.nextNode.data("pageNo", pageNo).click(function(e){
                    e.preventDefault();

                    pageNavigator.callbackFunc.apply(pageNavigator, [ $(this).data("pageNo") ]);
                });


                if( this.settings.linkNodeType.toUpperCase() == "A" )
                    this.nextNode.attr({ href:"#none",  title:("다음 " + blockCount + "개 리스트 보기") });


                this.$container.append(" ").append( this.nextNode );
            }





            // "마지막" 링크를 보여지게 할 경우..!
            if( this.settings.lastVisible ){
                var pageNo = totalPageCount;

                this.lastNode.data("pageNo", totalPageCount).click(function(e){
                    e.preventDefault();

                    pageNavigator.callbackFunc.apply(pageNavigator, [ $(this).data("pageNo") ]);
                });


                if( this.settings.linkNodeType.toUpperCase() == "A" )
                    this.lastNode.attr({ href:"#none",  title:"리스트 끝으로 가기" });

// 페이지 총 수 - 2014.04.08 신동윤 추가
                if(this.settings.totalPageArea != null)
                	$(this.settings.totalPageArea).text(pageNo.toString().money());


                this.$container.append(" ").append( this.lastNode );
            }
        }




        //this.show(currentPageNo, totalPageCount, blockCount);
    }
});

String.prototype.money = function() {
    var num = this;

    while((/(-?[0-9]+)([0-9]{3})/).test(num)) {
        num = num.replace((/(-?[0-9]+)([0-9]{3})/), "$1,$2");
    }

    return num;
};
