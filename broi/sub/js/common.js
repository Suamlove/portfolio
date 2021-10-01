$(document).ready(function(){  //문서준비이벤트

    //맨위로 가기 버튼
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".gotop").fadeIn();
        } else {
            $(".gotop").fadeOut();
        }
    });
    
    $(".gotop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
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




    //사이트맵 
$("#sitemap").hide();
    $(".all_menu").click(function(){
        $("#sitemap").fadeIn();
    });
    $(".sitemap_close").click(function(){
        $("#sitemap").fadeOut();
    });

    //popup
$(".popup_close").click(function(){
    $('.popup').slideUp();
});

//gnb
$(".depth2,.depth2_bg").hide();

$(".gnb>li").mouseenter(function(){
$(".depth2,.depth2_bg").stop().slideDown();
});
$(".gnb>li").mouseleave(function(){
    $(".depth2,.depth2_bg").stop().slideUp();
    });

//main slide
$(".mb").slick({
autoplay: true,
dots:true,
fade:true
})

//instar
$(".instar_list").slick({
    slidesToShow:5,
    slidesToScroll:1,
    autoplay: true,
    dots:false

});





});