$(document).ready(function() {

// 	$('.main__services__slider').slick({
// 				arrows: false,
// 				slidesToShow: 4,
// 				slidesToScroll: 1,
// 				dots: true,
// 				autoplay: true,
// 				responsive: [
// 				    {
// 				      breakpoint: 992,
// 				      settings: {
// 				        slidesToShow: 2,
// 				        slidesToScroll: 1
// 				      }
// 				    },
// 				    {
// 				      breakpoint: 768,
// 				      settings: {
// 				        slidesToShow: 2,
// 				        slidesToScroll: 1
// 				      }
// 				    },
// 				    {
// 				      breakpoint: 576,
// 				      settings: {
// 				        slidesToShow: 1,
// 				        slidesToScroll: 1
// 				      }
// 				    },

// 				]
// 		});
			

// 	$('.main__button').click(function(event){
// 			$('.overlay.overlay-form').toggleClass('hide');
// 			$('body').toggleClass('lock');
// 	})

// 	$('.popup__close.popup__close__form').click(function(event){
// 			$('.overlay.overlay-form').toggleClass('hide');
// 			$('body').toggleClass('lock');
// 	})

	$('.mobile-menu-burger').click(function(event){
			$('.nav__items').show(500)
			$('body').addClass('lock');
	})

	$('.nav__close__mobile').click(function(event){
			$('.nav__items').hide(500)
			$('body').removeClass('lock');
	})

	$('ul.tabs__links').on('click', 'li:not(.active)', function() {
	    $(this)
	      .addClass('active').siblings().removeClass('active')
	      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	  });

	// let BascketProductsPrice = $('#bascket__produscts-one .bascket__table__products__price').text();
	// let BascketQualityProducts = $('#bascket__produscts-one .bascket__products__quality').val();
	// let BascketProductsSum =  BascketProductsPrice * BascketQualityProducts

	// console.log(BascketProductsPrice);
	// console.log(BascketQualityProducts);
	// console.log( BascketProductsSum);

	// $('#bascket__produscts-one .bascket__table__products__sum').html(BascketProductsSum)



});



//
	// 	$(document).ready(function() {
	// 	$('.catalog-slider-items').slick({
	// 		arrows: true,
	// 		slidesToShow: 4,
	// 		responsive:[{
	// 			breakpoint: 992,
	// 			settings: {
	// 				slidesToShow: 3
	// 			}
	// 		}, {
	// 			breakpoint: 576,
	// 			settings: {
	// 				slidesToShow: 2
	// 			}
	// 		}]
	// 	});
	// });


// 		//Ползунок
// var slider = document.getElementById('slider');

// noUiSlider.create(slider, {
//     start: [49, 216675],
//     connect: true,
//     range: {
//         'min': 49,
//         'max': 216675
//     }
// });

// var inputNumber = document.getElementById('number2');
// var select = document.getElementById('number1');

// for (var i = 49; i <= 216675; i++) {

//     var option = document.createElement("option");
//     option.text = i;
//     option.value = i;

//     select.appendChild(option);
// }

// slider.noUiSlider.on('update', function (values, handle) {

//     var value = values[handle];

//     if (handle) {
//         inputNumber.value = value;
//     } else {
//         select.value = value;
//     }
// });

// select.addEventListener('change', function () {
//     slider.noUiSlider.set([this.value, null]);
// });

// inputNumber.addEventListener('change', function () {
//     slider.noUiSlider.set([null, this.value]);
// });


//Смена вида в каталоге
const tabsHeaders = document.querySelectorAll(".catalog-svg");
const svg = document.querySelectorAll(".svg");

tabsHeaders.forEach(tabsHandler);
svg.forEach(svgList);

function tabsHandler(item) {
	item.addEventListener("click", tabsClick);
}

function svgList(item) {
    item.addEventListener('click', tabsClick);
}

function tabsClick(){
	const tabId = this.dataset.tab;
	const svgId = this.dataset.svg;

	document.querySelectorAll("[data-catalog-content]").forEach(function(item) {
		item.classList.remove("active");
	});

	document.querySelectorAll(".svg").forEach(function(item) {
		item.classList.remove("active-svg");
	});

	document.getElementById(tabId).classList.toggle("active");

	document.getElementById(svgId).classList.toggle("active-svg");
}

const tabsHeader = document.querySelectorAll('[data-tabs]');

tabsHeader.forEach(tabHandler);

function tabHandler(item) {
	item.addEventListener('click', tabClick);
}

function tabClick() {
	const tabsId = this.dataset.tabs;

	document.querySelectorAll('.tabs-btn').forEach(function(item) {
		item.classList.remove('tabs-btn-active');
	});

	document.getElementById(tabsId).classList.toggle('tabs-btn-active');
}

const btn = document.querySelector('#burger-btn');
const content = document.querySelector(".catalog-main-params");

btn.addEventListener("click", btnClick);

function btnClick() {
	content.classList.toggle("active");
};