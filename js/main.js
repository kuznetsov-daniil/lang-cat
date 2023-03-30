$('.show').click(function() {
    $(this).parent('.card__wrapper2').siblings('.card__desc').toggleClass('active');
    $(this).css('display', 'none');
    $(this).siblings('.hide').css('display', 'flex');
});

$('.hide').click(function() {
    $(this).css('display', 'none');
    $('.show').css('display', 'flex');
    $('.card__desc').removeClass('active');
});

$('.card__button').click(function() {
    $(this).toggleClass('active');
    $(this).closest('.courses__card').toggleClass('active');
})

$('.fancy-text-more').click(function() {
    $(this).parent('.fancy-text-wrapper').siblings('.content__text-wrap').find('.content__text').toggleClass('active');
    $(this).css('display', 'none');
    $(this).parent('.fancy-text-wrapper').siblings('.fancy-text-wrapper2').find('.fancy-text-less').css('display', 'block');
});

$('.fancy-text-less').click(function() {
    $(this).css('display', 'none');
    $(this).parent('.fancy-text-wrapper2').siblings('.fancy-text-wrapper').find('.fancy-text-more').css('display', 'block');
    $('.content__text').removeClass('active');
});

$('.moscow-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $('.moscow-left-slider'),
  nextArrow: $('.moscow-right-slider'),
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
        {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
});


var elements = $('.modal-overlay, .modal');

$('.all').click(function(){
    elements.addClass('active');
});

$('.close-modal').click(function(){
    elements.removeClass('active');
});

var elements1 = $('.modal-overlay1, .modal1');

$('.top__button').click(function(){
    elements1.addClass('active');
});

$('.close-modal1').click(function(){
    elements1.removeClass('active');
});


$(function(){
    $nav = $('.right-form');
    $nav.css('width', $nav.outerWidth());
    $window = $(window);
    $h = $nav.offset().top;
    $window.scroll(function(){
        if ($window.scrollTop() > $h) {
            $nav.addClass('fixed');
        } else {
            $nav.removeClass('fixed');
        }
    });
});







