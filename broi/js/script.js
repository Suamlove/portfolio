$(document).ready(function(){

// beer slide
$('.beer_photo').slick({
    speed: 20,
autoplay:true,
dots:true, 
arrows:false
},);

// garden slide
$('.slide').slick({
    speed: 20,
autoplay:true,
dots:true, 
arrows:false
},);
    
// hamburger
$('.ham_bg').hide();
$('.ham').click(function(){
    $('.ham_bg').fadeIn();
});
$('.close').click(function(){
    $('.ham_bg').fadeOut();
});

// popup1
$('#pop_bg1').hide();
$('.foodbox li.fb1').click(function(){
    $('#pop_bg1').fadeIn();
});
$('.pop_close1').click(function(){
    $('#pop_bg1').fadeOut();
});

// popup2
$('#pop_bg2').hide();
$('.foodbox li.fb2').click(function(){
    $('#pop_bg2').fadeIn();
});
$('.pop_close2').click(function(){
    $('#pop_bg2').fadeOut();
});

// popup3
$('#pop_bg3').hide();
$('.foodbox li.fb3').click(function(){
    $('#pop_bg3').fadeIn();
});
$('.pop_close3').click(function(){
    $('#pop_bg3').fadeOut();
});

// popup4
$('#pop_bg4').hide();
$('.foodbox li.fb4').click(function(){
    $('#pop_bg4').fadeIn();
});
$('.pop_close4').click(function(){
    $('#pop_bg4').fadeOut();
});

// popup5
$('#pop_bg5').hide();
$('.foodbox li.fb5').click(function(){
    $('#pop_bg5').fadeIn();
});
$('.pop_close5').click(function(){
    $('#pop_bg5').fadeOut();
});

// popup6
$('#pop_bg6').hide();
$('.foodbox li.fb6').click(function(){
    $('#pop_bg6').fadeIn();
});
$('.pop_close6').click(function(){
    $('#pop_bg6').fadeOut();
});


//스트롤 트리거
$(window).scroll(function () {
    $('.ani_stop').each(function (i) {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object) {
            $(this).removeClass('ani_stop');
        }
        if (bottom_of_window < bottom_of_object) {
            $(this).addClass('ani_stop');
        }
    });
});


//sub-jquery
$('.gbb_slide').slick({
    arrows: true,
    dots:false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });


  $('.gbs_slide').slick({
    arrows: false,
    dots:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
      ]
  });
          





});