$(document).ready(function () {

  // --Начало слайдер--
  $.fn.reverse = [].reverse;
  (function () {
    if ($('.project-slider .slide').length < 7) {
      var clone = $('.project-slider .slide').clone();
      clone.removeClass('active');
      clone.appendTo($('.project-slider'));
    }
  })();


  $('.project-slider .slide').click(function () {
    moveSlider.apply(this);
  });
  $('.project-slider-container .next').click(function () {
    var next = $('.project-slider .slide.active').next('.slide');
    moveSlider.apply(next);
  });

  var busy = 0;
  function moveSlider() {
    return (function () {
      if (busy != 1) {
        busy = 1;
        var prevision = $(this).prevAll('.slide');
        prevision = prevision.reverse();
        var offsetValue = 13 * $(this).prevAll('.slide').length;
        $(this).find('.title').css({ opacity: '0' });
        $('.project-slider .active .title').css({ opacity: '0' });
        $('.project-slider').animate({ left: '-' + offsetValue + '%' }, 500);
        setTimeout(function () {
          $('.project-slider').css('left', '0%');
          $('.project-slider').append(prevision);
          $('.project-slider').find('.title').animate({ opacity: '1' }, 200);
          busy = 0;
        }, 600);
        $('.project-slider .slide').removeClass('active', 500);
        $(this).addClass('active');
      }
    }).apply(this);
  }
  // --Конец слайдер--

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 7,
    dots: false
  });
}
);