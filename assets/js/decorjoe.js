// Sticky header
$(document).scroll(function() {
    var y = $(this).scrollTop();
    var h = $(".top-menu").height();
    if (y > h) {
        $(".main-menu, .top-menu").addClass("is-sticky");
    } else {
        $(".main-menu, .top-menu").removeClass("is-sticky");
    }
});
// Text animation
(function() {
    var noti = $(".banner-content h2");
    var notiIndex = -1;
    function showNextQuote() {
        ++notiIndex;
        noti.eq(notiIndex % noti.length)
            .fadeIn(200)
            .delay(4000)
            .fadeOut(200, showNextQuote);
    }   
    showNextQuote();   
})();
// Projects filter
$(function(){
	var $tat_ca_btn = $('.chung-cu-btn, .cong-trinh-khac-btn, .nha-o-btn, .showroom-btn, .thuong-mai-btn, .van-phong-btn');
	var $chung_cu_btn = $('.tat-ca-btn, .cong-trinh-khac-btn, .nha-o-btn, .showroom-btn, .thuong-mai-btn, .van-phong-btn');
	var $cong_trinh_khac_btn = $('.chung-cu-btn, .tat-ca-btn, .nha-o-btn, .showroom-btn, .thuong-mai-btn, .van-phong-btn');
	var $nha_o_btn = $('.chung-cu-btn, .cong-trinh-khac-btn, .tat-ca-btn, .showroom-btn, .thuong-mai-btn, .van-phong-btn');
	var $showroom_btn = $('.chung-cu-btn, .cong-trinh-khac-btn, .nha-o-btn, .tat-ca-btn, .thuong-mai-btn, .van-phong-btn');
	var $thuong_mai_btn = $('.chung-cu-btn, .cong-trinh-khac-btn, .nha-o-btn, .showroom-btn, .tat-ca-btn, .van-phong-btn');
	var $van_phong_btn = $('.chung-cu-btn, .cong-trinh-khac-btn, .nha-o-btn, .showroom-btn, .thuong-mai-btn, .tat-ca-btn');

	var $chung_cu = $('.cong-trinh-khac, .nha-o, .showroom, .thuong-mai, .van-phong');
	var $cong_trinh_khac = $('.chung-cu, .nha-o, .showroom, .thuong-mai, .van-phong');
	var $nha_o = $('.chung-cu, .cong-trinh-khac, .showroom, .thuong-mai, .van-phong');
	var $showroom = $('.chung-cu, .cong-trinh-khac, .nha-o, .thuong-mai, .van-phong');
	var $thuong_mai = $('.chung-cu, .cong-trinh-khac, .nha-o, .showroom, .van-phong');
	var $van_phong = $('.chung-cu, .cong-trinh-khac, .nha-o, .showroom, .thuong-mai');

	$('.tat-ca-btn').click(function(){
		$(this).addClass('active');
		$('.projects-block').show(300);
		$tat_ca_btn.removeClass('active');
	});
	$('.chung-cu-btn').click(function(){
		$(this).addClass('active');
		$('.chung-cu').show(300);
		$chung_cu_btn.removeClass('active');
		$chung_cu.hide(300);
	});
	$('.cong-trinh-khac-btn').click(function(){
		$(this).addClass('active');
		$('.cong-trinh-khac').show(300);
		$cong_trinh_khac_btn.removeClass('active');
		$cong_trinh_khac.hide(300);
	});
	$('.nha-o-btn').click(function(){
		$(this).addClass('active');
		$('.nha-o').show(300);
		$nha_o_btn.removeClass('active');
		$nha_o.hide(300);
	});
	$('.showroom-btn').click(function(){
		$(this).addClass('active');
		$('.showroom').show(300);
		$showroom_btn.removeClass('active');
		$showroom.hide(300);
	});
	$('.thuong-mai-btn').click(function(){
		$(this).addClass('active');
		$('.thuong-mai').show(300);
		$thuong_mai_btn.removeClass('active');
		$thuong_mai.hide(300);
	});
	$('.van-phong-btn').click(function(){
		$(this).addClass('active');
		$('.van-phong').show(300);
		$van_phong_btn.removeClass('active');
		$van_phong.hide(300);
	});
});
// Customers feedback
// Feedback
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:25,
    nav:false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});
// Smooth Scrolling
$(".footer-social a, .top-social a, .backtop a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function() {
            window.location.hash = hash;
        });
    }
});
// Show - Hide Back To Top Button
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 400) {
        $(".backtop").addClass("show");
    } else {
        $(".backtop").removeClass("show");
    }
});
$(document).ready(function(){
    $(".backtop").click(function () {
       $("html, body").animate({scrollTop: 0}, 500);
    });
});
new WOW().init();



