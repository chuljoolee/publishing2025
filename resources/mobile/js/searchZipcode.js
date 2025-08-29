$('document').ready(function(){
    $('#searchBtn').click(function(){
    	getAddr();
    });
    
	$('#changeRoadAddressBtn').click(function(){
		$('#setAppendAddr').val($("#detailAddr").val());
		showArea3();
	});
	
    $("#modifyAddress").click(function(e){
    	e.preventDefault();
    	fnAddrReset();
    });
    
    $('#completeAddressDong').click(function(e){
    	e.preventDefault();
    	
    	var zipcode = $('#setAddrNum').val();
    	var address1 = $('#setDoroAddr').val(); 
    	var address2 = $('#setJibunAddr').val();
    	var address3 = $('#setAppendAddr').val();
    	
    	$('input[name=zipcode]').val(zipcode); // 우편번호
        $('input[name=zipcode2]').val(zipcode); // 우편번호
        $('input[name=address1]').val(address1); // 도로주소
        $('input[name=address2]').val(address2); // 지번주소
        $('input[name=address3]').val(address3); // 추가주소
        
        $('#zipcode').val(zipcode);
        $(".ads1").val('(도로명)' + address1);
        $(".ads2").val('(지 번)' + address2);
        $(".ads3").val(address3);
        
        $('.adress_popup').fadeOut(100, function(){
        	fnAddrReset();
        });
    });
    
    $('.address_btn').on('click', function(e){
        $('.adress_popup').fadeIn();
        e.preventDefault();
    });
    
    $('.adress_popup .close button').on('click',function(){
        $('.adress_popup').fadeOut(100, function(){
        	fnAddrReset();
        });
    });
});

function getAddr(){
	var searchnew = $('#addrkeywordNew').val();
	var searchori = $('#addrkeyword').val();
	if(searchnew != searchori){
		$('#currentPage').val('1');
		$('#addrkeyword').val(searchnew);
	}
	var s = location.href;
	var http = s.substring(0,s.indexOf('://'));
	$.ajax({
   		 url :http+"://www.juso.go.kr/addrlink/addrLinkApiJsonp.do"  //인터넷망
   		,type:"post"
   		,data:$("#addrSearch").serialize()
   		,dataType:"jsonp"
   		,crossDomain:true
   		,success:function(xmlStr){
   			if(navigator.appName.indexOf("Microsoft") > -1){
   				var xmlData = new ActiveXObject("Microsoft.XMLDOM");
   				xmlData.loadXML(xmlStr.returnXml)
   			}else{
   				var xmlData = xmlStr.returnXml;
   			}
//   			$("#list").html("");
   			var errCode = $(xmlData).find("errorCode").text();
   			var errDesc = $(xmlData).find("errorMessage").text();
   			if(errCode != "0"){
   				alert(errCode+"="+errDesc);
   			}else{
   				if(xmlStr != null){
   					addrMakeList(xmlData);
   				}
   			}
   		}
   	    ,error: function(xhr,status, error){
   	    	alert("에러발생");
   	    }
   	});
}

// 주소 화면 그리기 
function addrMakeList(xmlStr){
	$("#addAddr").html("");
	var htmlStr = '';
	var strLen = ($(xmlStr).find('juso').length);
	
	if(strLen > 0){
		htmlStr += '<ul class="ads_list">';

		$(xmlStr).find('juso').each(function(){
			htmlStr += '<li>';
			htmlStr += '	<a href="javascript:;" class="setAddr">';
			htmlStr += '		<dl>';
			htmlStr += '			<dt>' + $(this).find('zipNo').text() + '</dt>';
			htmlStr += '			<dd><em>(도로명)</em><span>' + $(this).find('roadAddr').text() + '</span></dd>';
			htmlStr += '			<dd><em>(지&nbsp;번)</em><span>' + $(this).find('jibunAddr').text() + '</span></dd>';
			htmlStr += '		</dl>';
			htmlStr += '	</a>';
			htmlStr += '</li>';
		});
		
		htmlStr += '</ul>';
		
	}else{
		htmlStr = '<p class="search_before"><strong>검색된 주소가 없습니다.</strong><br><br>건물번호, 번지를 함께 입력하시면<br>더욱 정확한 결과가 검색됩니다.<br>(예 : 반포대로 58, 코엑스, 삼성동 25)</p>';
	}
	
	$('#addAddr').html(htmlStr);
	$('.ads_list').show();
	
	$('.setAddr').click(function(){
		$('#setAddrNum').val($(this).find("dt").text());
		$('#setDoroAddr').val($(this).find('dd:eq(0)').find('span:eq(0)').text());
		$('#setJibunAddr').val($(this).find('dd:eq(1)').find('span:eq(0)').text());
		showArea2();
	});
	
	var pagingStr = '';
	var i = 0;
	$(xmlStr).find('common').each(function(){
		// 전체 갯수
		var totalCnt =$(this).find('totalCount').text();
		var currtPg = $(this).find('currentPage').text();
		var pageSize = $(this).find('countPerPage').text();
		var blockPage = 5;
		var totalPage = Math.floor(totalCnt / pageSize);
		if(totalPage == 0) {
			totalPage = 1;
		}
		if(currtPg > totalPage) {
			currtPg = totalPage;
		}
		var startCount = (currtPg - 1) * pageSize;
		var endCount = startCount + pageSize -1;
		
		var startPage = Math.floor(((currtPg - 1) / blockPage)) * blockPage + 1;
		var endPage = startPage + blockPage - 1;
		
		if(endPage > totalPage) {
			endPage = totalPage;
		}
		
		pagingStr += '<div class="paging-box">';
		
		if(currtPg > blockPage) {
            pagingStr += '<a href="#none" class="pgBtn prev" data-page='+(Number(startPage)-1)+'></a>'
		}
		
		for(var i=startPage;i<=endPage;i++){
			if(i>totalPage){
				break;
			}
			if(i == currtPg){
				pagingStr += '<a href="#none" class="on">'+currtPg+'</a>';
			}else{
				pagingStr += '<a href="#none" class="" data-page='+i+'>'+i+'</a>';
			}
			
		}
		
		if(totalPage - startPage >= blockPage){
			pagingStr +='<a href="#none" class="pgBtn next" data-page='+(Number(endPage)+1)+' ></a>';			
		}
		
		pagingStr += '</div>';
	});
	
	$('#jusoPaging').html(pagingStr); 
	
	$('#jusoPaging a').click(function(){
		moveAddrPage($(this).data('page'));
	});
}

function moveAddrPage(page){
	$('#addrcurrentPage').val(page);
	getAddr();
}

// 2번 페이지로 이동 
function showArea2(){
	$('#srchArea1').hide();
	$('#iptAddr').hide();
	
	$('.addrNum').html($('#setAddrNum').val());
	$('.doroAddr').html('<em>(도로명)</em>' + $('#setDoroAddr').val());
	$('.jibunAddr').html('<em>(지&nbsp;번)</em>' + $('#setJibunAddr').val());
	
	$('#srchArea2').show();
}

// 3번 페이지로 이동 
function showArea3(){
	$('#srchArea2').hide();
	$('.doroAddr').append(" "+$('#setAppendAddr').val());
	$('.jibunAddr').append(" "+$('#setAppendAddr').val());
	$('#srchArea3').show();
}

// 검색 초기화 
function fnAddrReset(){
	$('#srchArea1').show();
	$('#iptAddr').show();
	$('#srchArea2').hide();
	$('#srchArea3').hide();
	$('#addAddr').html('<p class="search_before">건물번호, 번지를 함께 입력하시면<br>더욱 정확한 결과가 검색됩니다.<br>(예 : 반포대로 58, 코엑스, 삼성동 25)</p>');
	$('#jusoPaging').html('');
	
	$('#addrkeywordNew').val('');
	$('#detailAddr').val('');
	
	$('#setAddrNum').val('');
	$('#setDoroAddr').val('');
	$('#setJibunAddr').val('');
	$('#setAppendAddr').val('');
	
	$('#addrcurrentPage').val(1);
	$('#addrkeyword').val('');
}