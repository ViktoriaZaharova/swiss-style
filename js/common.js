$('[name="phone"]').mask('+7 (999) 999-99-99');

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