$(document).ready(function(){

    /* 메인슬라이드 */
    $(".main_banner").slick({
        autoplay: true,
        dots:true
        })

        /* 2차메뉴 */
$('.depth2,.depth2_bg').hide();
$('.gnb>li').mouseenter(function(){
    $('.depth2,.depth2_bg').stop().slideDown();
});
$('.gnb>li').mouseleave(function(){
    $('.depth2,.depth2_bg').stop().slideUp();
});

 
  

/* diet1 */
$(".photo1").slick({
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1
    })


    /* diet2 */
$(".photo2").slick({
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1
    })

     /* diet3 */
$(".photo3").slick({
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1
    })

     /* diet4 */
$(".photo4").slick({
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1
    })



/* .tab안에 h3에 클릭했을때 
.tab안에 li에 active 클래스 추가 
클릭한 형제요소에 active 클래스 제거 */

$('.tab>li:nth-child(1)').addClass('active'); 
$('.tab>li>h3').click(function(){
$(this).parent().addClass('active').siblings().removeClass('active'); 
});

   /* art */
   $('.art_list').slick({
    autoplay: true,
    dots:true,
    fade: true
    })


});



