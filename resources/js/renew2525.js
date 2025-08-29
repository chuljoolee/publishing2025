$(function(){

    // tab-js
    const $tabjs = $('.tab-js');

    if ($tabjs.length > 0) {
      $('.tab-js > li > a').click(function( e ){
        e.preventDefault();
          if ($(this).parent().hasClass('readytab') == true){
                  
          }
          else{
            $(this).parent('li').find('a').addClass('on');
            $(this).parent('li').siblings('li').find('a').removeClass('on');
            $(this).next('div').css('display','block').parent('li').siblings('li').children('div').css('display','none');
          }
          //$('.green_sub > li').children('h4').removeClass('change'); 
          //$('.orange_sub > li').children('h4').removeClass('change'); 
      }); 
    } 
});


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.desc.img-hover').forEach(item => {
    item.addEventListener('mouseenter', function () {
      this.classList.add('act');
    });
    item.addEventListener('mouseleave', function () {
      this.classList.remove('act');
    });
  });
});


