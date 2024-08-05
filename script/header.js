
$(document).ready(function(){
  
    $('.menu_top > li.shop_menu').click(function(){
      $('.shop_sub').slideToggle();
    });


      $('.hamburger-button').on('click', function(event){
        event.preventDefault();
        
        $(this).toggleClass('active');
        $('.overlay').toggleClass('visible');

    });
  
    });
