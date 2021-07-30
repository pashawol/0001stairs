"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

	$(".main-wrapper").after('<div class="screen" style="background-image: url(screen/frame98.jpg);"></div>'); // /добавляет подложку для pixel perfect
	// /закрыть/открыть мобильное меню

	function heightses() {
		var w = $(window).width(); // $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню
		// конец добавил

		if (window.matchMedia("(min-width: 992px)").matches) {
			btnToggle.removeClass("on"); // $("body").removeClass("fixed");

			menu.removeClass("active");
			$("body").removeClass("fixed");
		}
	}

	$(window).resize(function () {
		heightses();
	});
	heightses();

	function whenResize() {
		var topNavBase = document.querySelector('.header--base');
		var topNavFixed = document.querySelector('.header--fixed');
		if (!topNavFixed) return; // document.querySelector('body').style.paddingTop = topNav.offsetHeight + 'px';

		window.scrollY > topNavBase.offsetHeight ? topNavFixed.classList.add('fixed') : topNavFixed.classList.remove('fixed');
	}

	window.addEventListener('scroll', function (e) {
		whenResize();
	}, {
		passive: true
	});
	window.addEventListener('resize', function () {
		whenResize();
	}, {
		passive: true
	});
	whenResize(); // листалка по стр

	$(".scroll-link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top - 50;
		$('html, body').animate({
			scrollTop: destination
		}, 1100);
		return false;
	});
	$('.header-block-c__link--js').click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top - 90;
		$('html, body').animate({
			scrollTop: destination
		}, 1000);
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
		asNavFor: '.slider-nav',
		arrows: true,
		prevArrow: '<button type = "button" class = "slick-prev"></ button>',
		nextArrow: '<button type = "button" class = "slick-next"></ button>',
		responsive: [{
			breakpoint: 992,
			settings: {
				arrows: false
			}
		}]
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
	$('.s-sert-canopy__slider--js').slick(_objectSpread(_objectSpread({}, defaultSlide), {}, {
		dots: false,
		slidesToShow: 1,
		arrows: true,
		prevArrow: '<button type = "button" class = "slick-prev"></ button>',
		nextArrow: '<button type = "button" class = "slick-next"></ button>',
		responsive: [{
			breakpoint: 1400,
			settings: {
				slidesToShow: 5
			}
		}, {
			breakpoint: 1200,
			settings: {
				slidesToShow: 4
			}
		}, {
			breakpoint: 576,
			settings: {
				slidesToShow: 3,
				arrows: true
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

	if ($('.sticky-js').length) {
		$('.sticky-js').hcSticky({
			stickTo: $('.card__inner')[0],
			top: 140,
			innerTop: 50,
			bottomEnd: 65
		});
	}

	;
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
			$(this).addClass('active').siblings().removeClass('active').closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active').eq($(this).index()).fadeIn(function () {
				$(this).find('.slider-for, .slider-nav').slick("refresh");
			}).addClass('active');
		});
	},
	// /табы  . 
	// /CustomYoutubeBlock
	inputMask: function inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	} // /inputMask

};
$(document).ready(function () {
	var priceItem = document.querySelectorAll(".price__item--js");
	var priceItemToggle = document.querySelectorAll(".s-price-canopy__header");

	if (priceItem) {
		priceItemToggle.forEach(function (el) {
			el.addEventListener('click', function () {
				var priceItemToggle = document.querySelectorAll('.s-price-canopy__header');
				var self = this;

				var _iterator = _createForOfIteratorHelper(priceItemToggle),
						_step;

				try {
					for (_iterator.s(); !(_step = _iterator.n()).done;) {
						var item = _step.value;
						var currContent = item.nextElementSibling;

						if (item === self) {
							item.classList.toggle('active');
							currContent.classList.toggle('active');
						} else {
							item.classList.remove('active');
							currContent.classList.remove('active');
						}
					}
				} catch (err) {
					_iterator.e(err);
				} finally {
					_iterator.f();
				}
			});
		});
	}

	$(".case-item__link").click(function () {
		var id = $(this).attr('href');
		console.log(id);
		setTimeout(function () {
			$(id).find('.slider-for, .slider-nav').slick("refresh");
		}, 10);
	});
	$(".btn-more").click(function () {
		var th = $(this);
		th.hide();
		th.prev().addClass("show").find(".sCases__col:hidden").fadeIn();
		th.parents('.tabs__content').addClass("show");
		var item = th.parents('.tabs__content').find(".sCases__col");
		$(".case-wrap").removeClass("half");
		item.each(function () {
			if ($(this).is(":hidden")) {
				$(this).fadeIn(function () {
					$(this).find('.slider-for, .slider-nav').slick("refresh");
				});
			}
		});
	});
	$(".sSliderGal--js").slick({
		dots: false,
		infinite: true,
		speed: 300,
		// slidesToShow: 1,
		// centerMode: true,
		variableWidth: true,
		arrows: false,
		prevArrow: '<button type = "button" class = "slick-prev"></ button>',
		nextArrow: '<button type = "button" class = "slick-next"></ button>'
	});
	$(".sSteps__slider--js").slick({
		dots: true,
		lazyLoad: 'ondemand',
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		prevArrow: '<button type = "button" class = "slick-prev"></ button>',
		nextArrow: '<button type = "button" class = "slick-next"></ button>' // centerMode: true,
		// variableWidth: true,
		// arrows: false,

	});
	$(".sClientsFeedback__slider--js").slick({
		dots: true,
		lazyLoad: 'progressive',
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		prevArrow: '<button type = "button" class = "slick-prev"></ button>',
		nextArrow: '<button type = "button" class = "slick-next"></ button>'
	}); // var prevScrollpos = window.pageYOffset;
	// window.onscroll = function () {
	// 	var currentScrollPos = window.pageYOffset;
	// 	var topNav = document.querySelector('.header--fixed .top-nav');
	// 	if (prevScrollpos > currentScrollPos) {
	// 		topNav.style.top = '63px';
	// 	} else {
	// 		topNav.style.top = '25px';
	// 	}
	// 	prevScrollpos = currentScrollPos;
	// };

	$(".menu-mobile--js .menu-item-has-children").each(function () {
		$(this).append('<div class="toggle-l"></div>');
	});
	$('.menu-mobile--js .menu-item-has-children').on('click', '.toggle-l', function () {
		$(this).prev().slideToggle();
	});
	$(".menu-mobile--js .menu-item-has-children > a").on('click', function (e) {
		e.preventDefault();
		$(this).next().slideToggle("sub-menu");
	});
}); // JSCCommon.LazyFunction();