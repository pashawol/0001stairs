"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var $ = jQuery;
var btnToggle = $(".toggle-menu-mobile--js"),
		menu = $(".menu-mobile--js");

function eventHandler() {
	// полифил для object-fit
	objectFitImages(); // Picture element HTML5 shiv

	document.createElement("picture"); // для свг

	svg4everybody({});
	JSCCommon.modalCall();
	JSCCommon.tabscostume('tabs');
	JSCCommon.mobileMenu();
	JSCCommon.inputMask(); // JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect

	$(".main-wrapper").after('<div class="screen" style="background-image: url(screen/Frame10-1.jpg);"></div>'); // /добавляет подложку для pixel perfect
	// /закрыть/открыть мобильное меню

	function heightses() {
		var w = $(window).width(); // $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		var topH = $("header ").innerHeight();
		$("header ").css("padding-top", $(".top-line").innerHeight());
		$(window).scroll(function () {
			if ($(window).scrollTop() > topH) {
				$('.top-line  ').addClass('fixed');
			} else {
				$('.top-line  ').removeClass('fixed');
			}
		}); // конец добавил

		if (window.matchMedia("(min-width: 992px)").matches) {
			btnToggle.removeClass("on"); // $("body").removeClass("fixed");

			menu.removeClass("active");
			$("body").removeClass("fixed");
		}
	}

	$(window).resize(function () {
		heightses();
	});
	heightses(); // листалка по стр

	$(" .top-nav li a, .scroll-link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top - 50;
		$('html, body').animate({
			scrollTop: destination
		}, 1100);
		return false;
	}); // // карусель

	var defaultSlide = {
		speed: 600,
		infinite: true,
		arrows: false,
		mobileFirst: true
	};
	$('.slider-for').slick(_objectSpread(_objectSpread({}, defaultSlide), {}, {
		slidesToShow: 1,
		lazyLoad: 'ondemand',
		asNavFor: '.slider-nav'
	}));
	$('.slider-nav').slick(_objectSpread(_objectSpread({}, defaultSlide), {}, {
		slidesToShow: 4,
		asNavFor: '.slider-for',
		focusOnSelect: true
	}));
	$('.photoSlider-js').slick(_objectSpread(_objectSpread({}, defaultSlide), {}, {
		arrows: true,
		appendArrows: '.sPhotoVideo__slideNav',
		slidesToShow: 1,
		lazyLoad: 'ondemand',
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
		}, {
			breakpoint: 576,
			settings: {
				slidesToShow: 2
			}
		}]
	}));
	$('.s-rews__slider--js').slick(_objectSpread(_objectSpread({}, defaultSlide), {}, {
		dots: true,
		slidesToShow: 1,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
		}, {
			breakpoint: 576,
			settings: {
				slidesToShow: 2
			}
		}]
	}));
	$('.s-sert__slider--js').slick(_objectSpread(_objectSpread({}, defaultSlide), {}, {
		dots: true,
		slidesToShow: 1,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
		}, {
			breakpoint: 576,
			settings: {
				slidesToShow: 2
			}
		}]
	}));
	setTimeout(function () {
		$(".map-wrap-js").html($(".map-wrap-js").data('map'));
	}, 3000);
	$(".toggle-btn-js").click(function () {
		$(this).next().slideToggle(function () {
			$(this).toggleClass("active");
		});
	});
	$(".f-toggle-js").click(function () {
		$(".f-toggle-js").toggleClass("d-none");
		$(".filter--js").slideToggle(function () {
			$(this).toggleClass("active");
		});
	});
	$('.sticky-js').hcSticky({
		stickTo: $('.card')[0],
		top: 150,
		innerTop: 50,
		bottomEnd: 948
	});
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	// функции для запуска lazy
	// /LazyFunction
	modalCall: function modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false // type : 'inline',

		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
		$(".link-modal").click(function () {
			var th = $(this);
			$(th.attr('href')).find(".order").val(th.data('order'));
			$(th.attr('href')).find(".form-wrap__title--js").html(th.data('title'));
			$(th.attr('href')).find(".form-wrap__text--js").html(th.data('text'));
			$(th.attr('href')).find(".btn-primary").val(th.data('btn'));

			if ($(this).hasClass("s-doc__btn")) {}
		});
	},
	// /magnificPopupCall
	mobileMenu: function mobileMenu() {
		// закрыть/открыть мобильное меню
		btnToggle.click(function () {
			btnToggle.toggleClass("on"); // $("body").toggleClass("fixed");

			menu.toggleClass("active");
			$("body, html").toggleClass("fixed");
			return false;
		}); // $('.menu-mobile--js ul li a').on('click', function () {
		// 	$(".menu-mobile--js .toggle-mnu").click();
		// });

		$(document).mouseup(function (e) {
			var container = $(".menu-mobile--js.active");

			if (container.has(e.target).length === 0) {
				btnToggle.removeClass("on"); // $("body").toggleClass("fixed");

				menu.removeClass("active");
				$("body, html").removeClass("fixed");
			}
		});
	},
	// /mobileMenu
	// табы  . 
	tabscostume: function tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this).addClass('active').siblings().removeClass('active').closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active').eq($(this).index()).fadeIn().addClass('active');
		});
	},
	// /табы  . 
	// /CustomYoutubeBlock
	inputMask: function inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	} // /inputMask

}; // JSCCommon.LazyFunction();

/***/