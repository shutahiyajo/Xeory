$(function() {
  $('.mv-inner-title').click(function() {
   $('#show').slideToggle();
   $('.fa-star').hover(function() {
    $(this).css('font-size','40px');
  });
   $('.fa-star').click(function() {
     $('#show').fadeOut();
   });
 });

    $('.slide-btn').click(function() {
      var slide = $('.active');
      slide.removeClass('active');
      if($(this).hasClass('next-btn')) {
        slide.next().addClass('active');
      } else  { 
        slide.prev().addClass('active');
      }
      var slideIndex = $('.c-roop-box').index($('.active'));
    $('.slide-btn').show();
    if(slideIndex == 0) {
      $('.prev-btn').hide();
    }else if (slideIndex == 2) {
      $('.next-btn').hide();
    }
    });
    
});