/*****************************************************************************************
        ※ 폼체크 유틸 모음..
*****************************************************************************************/

    // 히든프레임으로 폼 전송..
    function submitHiddenFrame( form, url, debug ){
        var oExecuteFrame = document.getElementById("__ifrExecute__");

        if( !oExecuteFrame ){
            oExecuteFrame = document.createElement("IFRAME");
            oExecuteFrame.id = "__ifrExecute__";
            oExecuteFrame.name = "__ifrExecute__";

            oExecuteFrame.frameBorder = 0;
            oExecuteFrame.style.display = "none";
            oExecuteFrame.style.width = oExecuteFrame.style.height = "0px";

            document.body.appendChild( oExecuteFrame );
        }


        if( debug ){
            oExecuteFrame.style.width = "1000px";
            oExecuteFrame.style.height = "100px";
            oExecuteFrame.style.border = "1px solid black";

            oExecuteFrame.style.display = "";
        }

        form.target = "__ifrExecute__";
        form.method = "POST";
        form.action = url;
        form.submit();
    }



    /*---------------------------------------------------------------------------------*\
    *  KeyUp 이벤트 발생시..
    \*---------------------------------------------------------------------------------*/
    //-----------------------------------------------------------------------------
    // 한글만 입력가능하게 한다.
    // @return : null
    // ex) (text-field).onkeyup = onlyKorean;
    //-----------------------------------------------------------------------------
    function onlyKorean() {
        var oElement = (arguments[0] != null) ? arguments[0] : this;
        var charChk;

        for(var i=0; i<oElement.value.length; i++){
            charChk = oElement.value.charCodeAt(i);

            if(charChk > 31 && charChk < 127) {
                alert("공백없이 한글로만 입력해주세요.");
                oElement.value = oElement.value.substring(0, i);
                oElement.focus();
                return;
            }
        }
    }


    //-----------------------------------------------------------------------------
    // 숫자만 입력가능하게 한다.
    // @return : null
    // ex) (text-field).onkeyup = onlyNumber;
    //-----------------------------------------------------------------------------
    function onlyNumber() {
        var oElement = (arguments[0] != null) ? arguments[0] : this;
        var charChk;

        for(var i=0; i<oElement.value.length; i++){
            charChk = oElement.value.charCodeAt(i);

            if(charChk > 57 || charChk < 48){
                alert("공백없이 숫자로만 입력해주세요.");
                oElement.value = oElement.value.substring(0, i);
                oElement.focus();
                return;
            }
        }
    }


    //-----------------------------------------------------------------------------
    // 영문만 입력가능하게 한다.
    // @return : null
    // ex) (text-field).onkeyup = onlyEnglish;
    //-----------------------------------------------------------------------------
    function onlyEnglish() {
        var oElement = (arguments[0] != null) ? arguments[0] : this;
        var charChk;

        for(var i=0; i<oElement.value.length; i++){
            charChk = oElement.value.charCodeAt(i);

            if((charChk < 65 || charChk > 90) && (charChk < 97 || charChk > 122)){
                alert("공백없이 영문으로만 입력해주세요.");
                oElement.value = oElement.value.substring(0, i);
                oElement.focus();
                return;
            }
        }
    }



    //-----------------------------------------------------------------------------
    // 영문과 숫자만 입력가능하게 한다.
    // @return : null
    // ex) (text-field).onkeyup = onlyEngNum;
    //-----------------------------------------------------------------------------
    function onlyEngNum() {
        var oElement = (arguments[0] != null) ? arguments[0] : this;
        var charChk;

        for(var i=0; i<oElement.value.length; i++){
            charChk = oElement.value.charCodeAt(i);

            if( ((charChk < 65 || charChk > 90) && (charChk < 97 || charChk > 122)) && (charChk > 57 || charChk < 48) ){
                alert("공백없이 영문과 숫자로만 입력해주세요.");
                oElement.value = oElement.value.substring(0, i);
                oElement.focus();
                return;
            }
        }
    }




    /*---------------------------------------------------------------------------------*\
    *  필드값이 모두 채워진 다음..
    \*---------------------------------------------------------------------------------*/
    function isNull(oElement){
        if(oElement.value.trim() == ""){
            oElement.value = "";
            return true;
        } else{
            return false;
        }
    }


    //-----------------------------------------------------------------------------
    // 텍스트필드 널값체크..
    // @return : null
    // ex) chkNull(필드, 경고메세지);
    //-----------------------------------------------------------------------------
    function chkNull(oElement, strMessage){
        if(oElement.value.trim() == ""){
            alert(strMessage + " 입력해주세요.");
            oElement.value = "";
            oElement.focus();
            return true;

        } else{
            return false;
        }
    }





    //-----------------------------------------------------------------------------
    // 라디오버튼의 선택된 인덱스 구하기..
    // @return : int (선택된것이 없으면 -1)
    // ex) checkedIndex(라디오필드);
    //-----------------------------------------------------------------------------
    function checkedIndex(oElement){
        var index = -1;

        if(!oElement){
            alert("radio 객체가 할당되지 않음..");
            return -1;
        } else{
            if(oElement.length){
                for(var i=0; i<oElement.length; i++){
                    if(oElement[i].checked)
                        index = i;
                }
            } else{
                index = 0;
            }
        }

        return index;
    }





    //-----------------------------------------------------------------------------
    // 같은이름을 가진 체크박스의 선택된 갯수 구하기..
    // @return : int
    // ex) getCheckedCount(체크박스);
    //-----------------------------------------------------------------------------
    function getCheckedCount(oElement){
        var iCount = 0;

        if(!oElement || !oElement.length){
            return 0;
        } else {
            for(var i=0; i<oElement.length; i++){
                if(oElement[i].checked)
                    iCount++;
            }

            return iCount;
        }
    }



    //-----------------------------------------------------------------------------
    // 파일의 확장자 구하기..
    // @return : String                     ex) getFileExt(form.file) => "zip";
    // ex) getFileExt(파일객체);
    //-----------------------------------------------------------------------------
    function getFileExt(oElement){
        var strFileName = oElement.value;

        return strFileName.substring( strFileName.lastIndexOf(".") + 1, strFileName.length ).toLowerCase();
    }



    //-----------------------------------------------------------------------------
    // 이메일 유효성 검증..
    // @return : boolean
    // ex1) isEmail(필드);
    // ex2) isEmail(필드1, 필드2);
    // ex3) isEmail(필드1, 필드2, 경고메세지);
    // ex4) isEmail(필드1, null, 경고메세지);
    //-----------------------------------------------------------------------------
    function isEmail() {
        var strEmail;
        var strMessage = (arguments[2]) ? arguments[2] : "이메일이 부정확합니다.";


        if(!arguments[0]) {
            alert("Nothing Parameters..");
            return false;

        } else if(arguments[0] && !arguments[1]) {
            strEmail = arguments[0].value;

        } else {
            strEmail = arguments[0].value + "@" + arguments[1].value;

        }
        
        console.log(strEmail);

        if( (/[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+(\.[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+)*@[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+(\.[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+)*/).test(strEmail) ){
            return true;

        } else{
            alert(strMessage);

            return false;
        }
    }





    //-----------------------------------------------------------------------------
    // 주민등록번호 유효성 검증..
    // @return : boolean
    // ex1) chkJumin(필드);
    // ex2) chkJumin(필드1, 필드2);
    // ex3) chkJumin(필드1, 필드2, 경고메세지);
    // ex4) chkJumin(필드1, null, 경고메세지);
    //-----------------------------------------------------------------------------
    function chkJumin(){
        var strJumin;
        var strMessage = (arguments[2]) ? arguments[2] : "주민등록번호가 부정확합니다.";


        if(!arguments[0]) {
            alert("Nothing Parameters..");
            return false;

        } else if(arguments[0] && !arguments[1]) {
            strJumin = arguments[0].value.replace("-", "");

        } else {
            strJumin = arguments[0].value + arguments[1].value;

        }


        if( !(/[0-9]{13}/).test(strJumin) || (strJumin.length != 13) ){
            alert(strMessage);
            return false;

        } else {
            var intSum = 0;
            var intLast = parseInt(strJumin.charAt(12));
            
            intSum += strJumin.charAt(0) * 2;
            intSum += strJumin.charAt(1) * 3;
            intSum += strJumin.charAt(2) * 4;
            intSum += strJumin.charAt(3) * 5;
            intSum += strJumin.charAt(4) * 6;
            intSum += strJumin.charAt(5) * 7;
            intSum += strJumin.charAt(6) * 8;
            intSum += strJumin.charAt(7) * 9;
            intSum += strJumin.charAt(8) * 2;
            intSum += strJumin.charAt(9) * 3;
            intSum += strJumin.charAt(10) * 4;
            intSum += strJumin.charAt(11) * 5;

            if( ( (11 - (intSum%11)) % 10 ) != intLast ){
                alert(strMessage);
                return false;
            } else{
                return true;
            }
        }
    }




    //-----------------------------------------------------------------------------
    // 사업자등록번호 유효성 검증..
    // @return : boolean
    // ex1) chkBizNum(필드);
    // ex2) chkBizNum(필드, 경고메세지);
    //-----------------------------------------------------------------------------
    function chkBizNum(){
        var strBizNum;
        var strMessage = (arguments[1]) ? arguments[1] : "사업자등록번호가 부정확합니다.";

        if(!arguments[0]) {
            alert("Nothing Parameters..");
            return false;
        } else{
            strBizNum = arguments[0].value;
        }
        
        if(strBizNum.indexOf('-') > -1) {
        	strBizNum = strBizNum.replace( /(-*)/g, "" );
        }

        if( !(/[0-9]{10}/).test(strBizNum) || (strBizNum.length != 10) ){
            alert(strMessage);
            return false;

        } else {
            var intSum = parseInt(strBizNum.charAt(0), 10);
            var aRegular = [0, 3, 7, 1, 3, 7, 1, 3];

            for(var i=1; i<8; i++){
                intSum += ( parseInt(strBizNum.charAt(i), 10) * aRegular[i] ) % 10;
            }

            intSum += Math.floor( parseInt(strBizNum.charAt(8), 10) * 5 / 10);
            intSum += (( parseInt(strBizNum.charAt(8), 10) * 5 ) % 10) + parseInt(strBizNum.charAt(9), 10);

            if( (intSum % 10) == 0 ){
                return true;
            } else{
                alert(strMessage);
                return false;
            }
        }
    }





    // 주민등록번호로 (만)나이구하기..
    function getAge(jumin1, jumin2){
        var birthYY, sexCD;
        var today = new Date();
        var year, birthYear;

        year    = today.getFullYear();
        birthYY = parseInt( jumin1.value.substring(0, 2) );
        sexCD   = parseInt( jumin2.value.substring(0, 1) );

        if( sexCD >= 3 ){
            birthYear = 2000 + birthYY;
        } else{
            birthYear = 1900 + birthYY;
        }

        return (year - birthYear);
    }



    // 한글/영문 구분해서 입력받는 글자수 제한..
    function limitLength(oElement, iMaxCount) {
        var strTemp = "", strChar;
        var intCounter = 0;

        for(var i=0; i<oElement.value.length; i++){
            strChar = oElement.value.charAt(i);
            strChar.getbyte;
            
            if(escape(strChar).length > 4){
                intCounter += 2;
            } else{
                intCounter++;
            }
            

            if(intCounter > iMaxCount){
                alert("입력은 최대 한글 " + iMaxCount/2 + "글자, 영문 " + iMaxCount + "글자만큼 가능합니다.");
                
                oElement.value = oElement.value.substring(0, i);
                oElement.focus();
            }
        }
    }



















/*****************************************************************************************
        ※ String 객체 확장..
*****************************************************************************************/

    //-----------------------------------------------------------------------------
    // 문자의 좌, 우 공백 제거
    // @return : String
    // ex) 문자열.trim();
    //-----------------------------------------------------------------------------
    String.prototype.trim = function() {
        return this.replace(/(^\s*)|(\s*$)/g, "");
    };



    //-----------------------------------------------------------------------------
    // 문자의 좌 공백 제거
    // @return : String
    // ex) 문자열.ltrim();
    //-----------------------------------------------------------------------------
    String.prototype.ltrim = function() {
        return this.replace(/(^\s*)/, "");
    };



    //-----------------------------------------------------------------------------
    // 문자의 우 공백 제거
    // @return : String
    // ex) 문자열.rtrim();
    //-----------------------------------------------------------------------------
    String.prototype.rtrim = function() {
        return this.replace(/(\s*$)/, "");    
    };




    //-----------------------------------------------------------------------------
    // 이메일의 유효성을 체크
    // @return : boolean
    // ex) 문자열.isEmail();
    //-----------------------------------------------------------------------------
    String.prototype.isEmail = function() {
        return (/\w+([-+.]\w+)*@\w+([-.]\w+)*\.[a-zA-Z]{2,4}$/).test(this.trim());
    };





    //-----------------------------------------------------------------------------
    // 문자열의 바이트수 리턴
    // @return : int
    // ex) 문자열.bytes();
    //-----------------------------------------------------------------------------
    String.prototype.bytes = function() {
        var cnt = 0;

        for (var i = 0; i < this.length; i++) {
            if (this.charCodeAt(i) > 127)
                cnt += 2;
            else
                cnt++;
        }

        return cnt;
    };




    //-----------------------------------------------------------------------------
    // 정수형으로 변환
    // @return : int
    // ex) 문자열.int();
    //-----------------------------------------------------------------------------
    String.prototype.int = function() {
        if(!isNaN(this)) {
            return parseInt(this, 10);
        }
        else {
            return null;    
        }
    };



    //-----------------------------------------------------------------------------
    // 숫자에 3자리마다 , 를 찍어서 반환
    // @return : 변환된 String ( ex) 12,345,678 )
    // ex) 문자열.money();
    //-----------------------------------------------------------------------------
    String.prototype.money = function() {
        var num = this.trim();

        while((/(-?[0-9]+)([0-9]{3})/).test(num)) {
            num = num.replace((/(-?[0-9]+)([0-9]{3})/), "$1,$2");
        }

        return num;
    };




    //-----------------------------------------------------------------------------
    // 숫자의 자리수(cnt)에 맞도록 반환
    // @return : 변환된 String         ex) "33".digits(4) => "0033";
    // ex) 문자열.digits(자리수);
    //-----------------------------------------------------------------------------
    String.prototype.digits = function(cnt) {
        var digit = "";

        if (this.length < cnt) {
            for(var i = 0; i < cnt - this.length; i++) {
                digit += "0";
            }
        }

        return digit + this;
    };



    //-----------------------------------------------------------------------------
    // 문자열에 포함된 숫자만 가져 오기
    // @return : String                 ex) "-123$asdf456".num() => "123456";
    // ex) 문자열.num();
    //-----------------------------------------------------------------------------
    String.prototype.num = function() {
        return (this.trim().replace(/[^0-9]/g, ""));
    };