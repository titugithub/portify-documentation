"user strict";

$(document).ready(function () {
	//--Owl Carousel--//
	$(".payment__sponsor").owlCarousel({
		loop: true,
		margin: 24,
		autoplayTimeout: 1000,
		autoplay: false,
		nav: true,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="material-symbols-outlined">trending_flat</i>',
			'<i class="material-symbols-outlined">trending_flat</i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 1,
			},
			767: {
				items: 1,
			},
			991: {
				items: 1,
			},
			1199: {
				items: 1,
			},
			1399: {
				items: 1,
			},
		},
	});
	$(".promo__sponsor__wrapper").owlCarousel({
		loop: true,
		margin: 10,
		autoplayTimeout: 1000,
		autoplay: false,
		nav: true,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="material-symbols-outlined">keyboard_double_arrow_right</i>',
			'<i class="material-symbols-outlined">keyboard_double_arrow_right</i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			575: {
				items: 1,
			},
			767: {
				items: 2,
			},
			991: {
				items: 3,
			},
			1199: {
				items: 4,
			},
			1499: {
				items: 4,
			},
			1999: {
				items: 4,
			},
		},
	});
	//mobile menu
		//--Header Menu--//
		$(".header-bar").on("click", function (e) {
			$(".main-menu, .header-bar").toggleClass("active");
		});
		$(".main-menu li a").on("click", function (e) {
			var element = $(this).parent("li");
			if (element.hasClass("open")) {
				element.removeClass("open");
				element.find("li").removeClass("open");
				element.find("ul").slideUp(300, "swing");
			} else {
				element.addClass("open");
				element.children("ul").slideDown(300, "swing");
				element.siblings("li").children("ul").slideUp(300, "swing");
				element.siblings("li").removeClass("open");
				element.siblings("li").find("li").removeClass("open");
				element.siblings("li").find("ul").slideUp(300, "swing");
			}
		});
	//menu top fixed bar
	//menu top fixed bar
	var fixed_top = $(".header-section");
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 100) {
			fixed_top.addClass("menu-fixed animated fadeInDown");
			fixed_top.removeClass("slideInUp");
			$("body").addClass("body-padding");
		} else {
			fixed_top.removeClass("menu-fixed fadeInDown");
			fixed_top.addClass("slideInUp");
			$("body").removeClass("body-padding");
		}
	});
	$(".scrollToTop").on("click", function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			700
		);
		return false;
	});

	//--Magnifiqpopup--//
	$('.video-btn').magnificPopup({
		type: 'iframe',
		callbacks: {
			
	  	}
	});
	//--Magnifiqpopup--//

	//--common filter slide--//
	$(".common__sidebar__head").on("click", function () {
		$(this).next(".common__sidebar__content").slideToggle();
	});
	//--common filter slide--// 
	
	//--Wow Animation--//
	new WOW().init();
	//--Wow Animation--//

	//--Preloader--//
	setTimeout(function(){
		$('.preloader__wrap').fadeToggle();
	}, 300);
	//--Preloader--//

});
document.getElementById('year').innerHTML = new Date().getFullYear()