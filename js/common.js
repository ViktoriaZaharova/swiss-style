$('[name="phone"]').mask('+7 (999) 999-99-99');

// header fixed
$(window).scroll(function () {
	if ($(this).scrollTop() > 200) {
		$('header').addClass('fixed');
	} else {
		$('header').removeClass('fixed');
	}
});

$('.btn-burger').on('click', function () {
	$(this).toggleClass('click');
	$('.header-bottom').fadeToggle();
});

$('.btn-edit-location').on('click', function (e) {
	e.preventDefault();
	$('.dropdown-menu-hidden').fadeIn();
	$('.dropdown-menu-visible').fadeOut();
});

$('.home-slider').slick({
	slidesToShow: 1,
	dots: true,
	fade: true,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>'
});

$('.products-slider').slick({
	slidesToShow: 6,
	slidesToScroll: 2,
	arrows: false,
	dots: true,
});

$('[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
	$('.slick-slider').slick('setPosition');
});

$('.comparison-slider').slick({
	slidesToShow: 6,
	arrows: true,
	asNavFor: '.characteristics-slider',
	prevArrow: '<button type="button" class="slick-prev slick-arrow-white"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next slick-arrow-white"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>'
});

$('.modal').on('shown.bs.modal', function () {
	$('.analogues-slider').slick({
		slidesToShow: 3,
		prevArrow: '<button type="button" class="slick-prev slick-arrow-white"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow-white"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>'
	});
});



$('.article-catalog-slider').slick({
	slidesToShow: 4,
	arrows: false,
	dots: true,
});

$('.characteristics-slider').slick({
	slidesToShow: 6,
	arrows: false,
	asNavFor: '.comparison-slider',
});

$('.articles-slider').slick({
	slidesToShow: 5,
	slidesToScroll: 2,
	arrows: false,
	dots: true,
	autoplay: true,
	autoplaySpeed: 2000,
});

$('.brands-slider').slick({
	slidesToShow: 8,
	variableWidth: true,
	infinite: false,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>'
});

$('.product-gallery-preview').slick({
	slidesToShow: 5,
	vertical: true,
	focusOnSelect: true,
	asNavFor: '.product-gallery-slider',
	prevArrow: '<button type="button" class="slick-prev slick-arrow-white"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next slick-arrow-white"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>'
});

$('.product-gallery-slider').slick({
	slidesToShow: 1,
	arrows: false,
	asNavFor: '.product-gallery-preview',
});

// $('.categories-products-slider').slick({
// 	slidesToShow: 1,
// 	centerMode: true,
// 	variableWidth: true,
// 	// infinite: false,
// 	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
// 	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>'
// });

var rev = $(".categories-products-slider");
rev
	.on("init", function (event, slick, currentSlide) {
		var cur = $(slick.$slides[slick.currentSlide]),
			next = cur.next(),
			prev = cur.prev();
		prev.addClass("slick-sprev");
		next.addClass("slick-snext");
		cur.removeClass("slick-snext").removeClass("slick-sprev");
		slick.$prev = prev;
		slick.$next = next;
	})
	.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
		console.log("beforeChange");
		var cur = $(slick.$slides[nextSlide]);
		console.log(slick.$prev, slick.$next);
		slick.$prev.removeClass("slick-sprev");
		slick.$next.removeClass("slick-snext");
		(next = cur.next()), (prev = cur.prev());
		prev.prev();
		prev.next();
		prev.addClass("slick-sprev");
		next.addClass("slick-snext");
		slick.$prev = prev;
		slick.$next = next;
		cur.removeClass("slick-next").removeClass("slick-sprev");
	});

rev.slick({
	speed: 1000,
	arrows: true,
	dots: false,
	focusOnSelect: true,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	infinite: true,
	centerMode: true,
	slidesPerRow: 1,
	slidesToShow: 1,
	slidesToScroll: 1,
	centerPadding: "0",
	swipe: true,
	customPaging: function (slider, i) {
		return "";
	}
});



// активная ссылка меню
$('.sidebar-box__menu li a').each(function () {
	let location = window.location.href;
	let link = this.href;
	if (location === link) {
		$(this).addClass('active');
	}
});
// end


// disabled button form cabinet
$(document).ready(function () {
	$('.form-cabinet [type="submit"]').attr('disabled', 'disabled');
	$('.form-cabinet input').on('input', function () {
		if ($(this).val() !== '') {
			$('.form-cabinet [type="submit"]').removeAttr("disabled");
		} else {
			$('.form-cabinet [type="submit"]').attr('disabled', 'disabled');
		}
	});
});

// text hidden
$('.text-toggle').each(function () {
	if ($(this).height() > 113) {
		$(this).addClass('hide');
		$(this).parent('.text-toggle-wrapper').append('<a href="#" class="load-more-wrap"><span>Читать полностью</span><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></a>');
	}
});

$('.load-more-wrap').on('click', function (e) {
	e.preventDefault();

	var
		$this = $(this),
		content = $(this).prev('.text-toggle');

	if (!$this.hasClass('trigger')) {
		$this.addClass('trigger');
		$this.find('span').html('Свернуть');

		content.removeClass('hide');
	} else {
		$this.removeClass('trigger');
		$this.find('span').html('Читать полностью');

		content.addClass('hide');
	}
});
// text hidden

// hidden list > 5
$('.accordion-catalog').each(function () {
	if ($(this).find('.accordion-item').length > 10) {
		$(this).find('.accordion-item').slice(10).hide();
		$(this).append('<a href="#" class="link-all-filter color-inherit text-decoration">Все фильтры +</a>');
	}

});

// hidden list > 5

// show list all
$('.link-all-filter').on('click', function (e) {
	e.preventDefault();
	$(this).prev('.accordion-item:hidden').slice(0, 5).slideDown();

	var onBlock = $(this).prev('.accordion-item:hidden').length;
	if (onBlock <= 0) {
		$(this).hide();
	}
});

// show list all

// slider range
$(document).ready(function () {
	$('.slider-range').slider({
		range: true,
		min: 5999,
		max: 1000000,
		values: [5999, 640000],
		animate: "fast",
		slide: function (event, ui) {
			$(".dec1").val(ui.values[0]);
			$(".dec2").val(ui.values[1]);
		}
	});

	$(".dec1").val($(".slider-range").slider("values", 0));
	$(".dec2").val($(".slider-range").slider("values", 1));
	$(".range_val input").change(function () {
		var input_left = $(".dec1").val().replace(/[^0-9]/g, ''),
			opt_left = $(".slider-range").slider("option", "min"),
			where_right = $(".slider-range").slider("values", 1),
			input_right = $(".dec2").val().replace(/[^0-9]/g, ''),
			opt_right = $(".slider-range").slider("option", "max"),
			where_left = $(".slider-range").slider("values", 0);
		if (input_left > where_right) {
			input_left = where_right;
		}
		if (input_left < opt_left) {
			input_left = opt_left;
		}
		if (input_left == "") {
			input_left = 0;
		}
		if (input_right < where_left) {
			input_right = where_left;
		}
		if (input_right > opt_right) {
			input_right = opt_right;
		}
		if (input_right == "") {
			input_right = 0;
		}
		$(".dec1").val(input_left);
		$(".dec2").val(input_right);
		if (input_left != where_left) {
			$(".slider-range").slider("values", 0, input_left);
		}
		if (input_right != where_right) {
			$(".slider-range").slider("values", 1, input_right);
		}
	});

});


// password view
$('.btn-view-password').on('click', function () {
	if ($(this).siblings('.input-password').attr('type') === 'password') {
		$(this).addClass('view');
		$(this).siblings('.input-password').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$(this).siblings('.input-password').attr('type', 'password');
	}
	return false;
});

$('.change-password').on('click', function (e) {
	e.preventDefault();
	$(this).fadeOut();
	$('.btn-save').css('display', 'flex');
	$('.change-password-box').fadeIn();
});


$('.link-details-order').on('click', function (e) {
	e.preventDefault();

	var
		$this = $(this),
		content = $(this).parents('.order-box').find('.order-box__body');

	if (!$this.hasClass('trigger')) {
		$this.addClass('trigger');
		$this.html('Скрыть детали заказа -');
		content.slideDown();
	} else {
		$this.removeClass('trigger');
		$this.html('Все детали заказа +');
		content.slideUp();
	}
});


Fancybox.bind("[data-fancybox]", {
	// Your custom options
});