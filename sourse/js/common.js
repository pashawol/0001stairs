const $ = jQuery;
const btnToggle = $(".toggle-menu-mobile--js"),
	menu = $(".menu-mobile--js")

function eventHandler() {
	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({});
	JSCCommon.modalCall();

	JSCCommon.tabscostume('tabs');

	JSCCommon.mobileMenu();

	JSCCommon.inputMask();

	// JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	$(".main-wrapper").after('<div class="screen" style="background-image: url(screen/frame98.jpg);"></div>')
	// /добавляет подложку для pixel perfect



	// /закрыть/открыть мобильное меню

	function heightses() {

		const w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню
		// конец добавил
		if (window.matchMedia("(min-width: 992px)").matches) {

			btnToggle.removeClass("on");
			// $("body").removeClass("fixed");
			menu.removeClass("active");
			$("body").removeClass("fixed");
		}
	}
	$(window).resize(function () {
		heightses();

	});

	heightses();

	function whenResize() {
		let topNavBase = document.querySelector('.header--base');
		let topNavFixed = document.querySelector('.header--fixed');
		if (!topNavFixed) return;
		// document.querySelector('body').style.paddingTop = topNav.offsetHeight + 'px';
		window.scrollY > topNavBase.offsetHeight
			? topNavFixed.classList.add('fixed')
			: topNavFixed.classList.remove('fixed');
	}
	window.addEventListener('scroll', function (e) {
		whenResize();
	}, { passive: true })

	window.addEventListener('resize', () => {
		whenResize();
	}, { passive: true });

	whenResize();

	// листалка по стр
	$(".scroll-link").click(function () {
		const elementClick = $(this).attr("href");
		const destination = $(elementClick).offset().top - 50;

		$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
	});

	$('.header-block-c__link--js').click(function () {
		const elementClick = $(this).attr("href");
		const destination = $(elementClick).offset().top - 90;
		$('html, body').animate({ scrollTop: destination}, 1000);
	});




	// // карусель

	const defaultSlide = {
		speed: 600,
		infinite: true,
		arrows: false,
		mobileFirst: true,
	};


	$('.slider-for').slick({
		...defaultSlide,
		slidesToShow: 1,
		lazyLoad: 'ondemand',
		asNavFor: '.slider-nav',
		arrows: true,
		prevArrow: '<button type = "button" class = "slick-prev"></ button>',
		nextArrow: '<button type = "button" class = "slick-next"></ button>',
		responsive: [{
			breakpoint: 992,
			settings: {
				arrows: false,
			}
		}],
	});
	$('.slider-nav').slick({
		...defaultSlide,
		slidesToShow: 4,
		asNavFor: '.slider-for',
		focusOnSelect: true
	});

	$('.photoSlider-js').slick({
		...defaultSlide,
		arrows: true,
		appendArrows: '.sPhotoVideo__slideNav',
		slidesToShow: 1,
		lazyLoad: 'ondemand',
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}

		}, {
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
			}


		}],
	});

	$('.s-rews__slider--js').slick({
		...defaultSlide,
		dots: true,
		slidesToShow: 1,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}

		}, {
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
			}


		}],

	});

	$('.s-sert__slider--js').slick({
		...defaultSlide,
		dots: true,
		slidesToShow: 1,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}

		}, {
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
			}


		}],

	});
	$('.s-sert-canopy__slider--js').slick({
		...defaultSlide,
		dots: false,
		slidesToShow: 1,
		arrows: true,
		prevArrow: '<button type = "button" class = "slick-prev"></ button>',
		nextArrow: '<button type = "button" class = "slick-next"></ button>',
		responsive: [
			{
			breakpoint: 1400,
			settings: {
				slidesToShow: 5,
			}

		},
			{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
			}

		},
		 {
			breakpoint: 576,
			settings: {
				slidesToShow: 3,
				arrows: true,
			}


		}],

	});
	setTimeout(() => {

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

	if($('.sticky-js').length){
		$('.sticky-js').hcSticky({
			stickTo: $('.card__inner')[0],
			top: 140,
			innerTop: 50,
			bottomEnd: 65
		});
	};

};
if (document.readyState !== 'loading') {
	eventHandler();


} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}
const JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	// функции для запуска lazy


	// /LazyFunction

	modalCall() {

		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			// type : 'inline',
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
		$(".link-modal").click(function () {
			var th = $(this);
			$(th.attr('href')).find(".order").val(th.data('order'));
			$(th.attr('href')).find(".form-wrap__title--js").html(th.data('title'));
			$(th.attr('href')).find(".form-wrap__text--js").html(th.data('text'));
			$(th.attr('href')).find(".btn-primary").val(th.data('btn'));
			if ($(this).hasClass("s-doc__btn")) {

			}
		})
	},
	// /magnificPopupCall
	mobileMenu() {
		// закрыть/открыть мобильное меню

		btnToggle.click(function () {

			btnToggle.toggleClass("on");
			// $("body").toggleClass("fixed");
			menu.toggleClass("active");
			$("body, html").toggleClass("fixed");
			return false;
		});
		// $('.menu-mobile--js ul li a').on('click', function () {
		// 	$(".menu-mobile--js .toggle-mnu").click();
		// });

		$(document).mouseup(function (e) {
			const container = $(".menu-mobile--js.active");
			if (container.has(e.target).length === 0) {
				btnToggle.removeClass("on");
				// $("body").toggleClass("fixed");
				menu.removeClass("active");
				$("body, html").removeClass("fixed");
			}
		});

	},
	// /mobileMenu

	// табы  . 
	tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn(function(){
					$(this).find('.slider-for, .slider-nav').slick("refresh");
				}).addClass('active');
		});
	},
	// /табы  . 


	// /CustomYoutubeBlock
	inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	}
	// /inputMask

};

$(document).ready(function () {

	let priceItem = document.querySelectorAll(".price__item--js");
	let priceItemToggle = document.querySelectorAll(".s-price-canopy__header");
	if (priceItem) {
		priceItemToggle.forEach(function (el) {
			el.addEventListener('click', function () {
				let priceItemToggle = document.querySelectorAll('.s-price-canopy__header');
				let self = this;

				for (let item of priceItemToggle) {
					let currContent = item.nextElementSibling;

					if (item === self) {
						item.classList.toggle('active');
						currContent.classList.toggle('active');
					}
					else {
						item.classList.remove('active');
						currContent.classList.remove('active');
					}
				}
			})
		});
	}


	$(".case-item__link").click(function(){
		let id = $(this).attr('href');
		console.log(id);
		setTimeout(() => {
			$(id).find('.slider-for, .slider-nav').slick("refresh")
		}, 10);
	});
	$(".btn-more").click(function(){
		let th = $(this);
		th.hide();
		th.prev().addClass("show").find(".sCases__col:hidden").fadeIn();
		th.parents('.tabs__content').addClass("show");
		let item = th.parents('.tabs__content').find(".sCases__col");
		$(".case-wrap").removeClass("half");
		item.each(function(){ 
			if ($(this).is(":hidden")) {
					$(this).fadeIn(function(){
						$(this).find('.slider-for, .slider-nav').slick("refresh")
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
		nextArrow: '<button type = "button" class = "slick-next"></ button>',
	});
	$(".sSteps__slider--js").slick({
		dots: true,
		lazyLoad: 'ondemand',
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		prevArrow: '<button type = "button" class = "slick-prev"></ button>',
		nextArrow: '<button type = "button" class = "slick-next"></ button>',
		// centerMode: true,
		// variableWidth: true,
		// arrows: false,
	});
	var prevScrollpos = window.pageYOffset;
	window.onscroll = function() {
		var currentScrollPos = window.pageYOffset;
		var topNav = document.querySelector('.header--fixed .top-nav');
		if (prevScrollpos > currentScrollPos) {
			topNav.style.top = '63px';
		} else {
			topNav.style.top = '25px';
		}
		prevScrollpos = currentScrollPos;
	};
	
	$(".menu-mobile--js .menu-item-has-children").each(function(){
		$(this).append('<div class="toggle-l"></div>');
	})

	$( '.menu-mobile--js .menu-item-has-children').on('click', '.toggle-l', function(){
			$(this).prev().slideToggle()
		})
});

// JSCCommon.LazyFunction();