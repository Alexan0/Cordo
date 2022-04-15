// "use strict";

function ibg(){

let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}

ibg();

$(document).ready(function() {
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


$(document).ready(function(){
	$('.intro__slider').slick({
		arrows: true,				//Стрелки 
		dots: true,					//Точки 
		adaptiveHeight: false,		//Адаптив слайдов
		slidesToShow: 1,			//Кол во слайдов
		slidesToScroll: 1,			//Скролл слайдов
		speed: 1000,				//Скорость скролла
		easing:'linear',			//Анимация
		infinite: true,				//Бесконечный скролл
		initialSlide: 0,			//Старт слайдера
		autoplay: false,			//Авто слайдер
		autoplaySpeed: 3000,		//Скорость слайдера
		pauseOnFocus: true,			//Пауза авто слайдера при клике
		pauseOnHover: true,			//Пауза авто слайдера при наведении
		pauseOnDotsHover: true,		//Пауза авто слайдера при наведении на точки
		draggable: true,			//Запрет на свайп мышкой
		swipe: true,				//Запрет на свайп на сенсоре
		waitForAnimate: true,		//Быстрый скролл
		centerMode: false,			//Центрует слайд
		variableWidth: false,		//Все слайды в ряд
		rows: 1,					//Ряды слайдера
		slidesPerRow:1,				//Кол во слайдов в ряду
		vertical: false,			//Вертикальный слайдер
	})
})

$(document).ready(function() {
	$('.nav__item_one').click(function(event){
		$('.nav__item_one,.calculation__item_one').toggleClass('active');
		$('.nav__item_two,.calculation__item_two').removeClass('active');
		$('.nav__item_three,.calculation__item_three').removeClass('active');
		$('.calculation__head').removeClass('none');
	});
});
$(document).ready(function() {
	$('.nav__item_two').click(function(event){
		$('.nav__item_two,.calculation__item_two').toggleClass('active');
		$('.nav__item_one,.calculation__item_one').removeClass('active');
		$('.nav__item_three,.calculation__item_three').removeClass('active');
		$('.calculation__head').removeClass('none');
	});
});
$(document).ready(function() {
	$('.nav__item_three').click(function(event){
		$('.nav__item_three,.calculation__item_three').toggleClass('active');
		$('.nav__item_one,.calculation__item_one').removeClass('active');
		$('.nav__item_two,.calculation__item_two').removeClass('active');
		$('.calculation__head').toggleClass('none');
	});
});

$(document).ready(function () {
  var $window = $(window)
    , $card = $('.adv__slider')
    , toggleSlick;

  toggleSlick = function () {
    if ($window.width() < 900) {
      $card.slick({
      	arrows: false,
      	dots: true,
      	centerMode: true,
      	slidesToShow: 1,
      	slidesPerRow: 1,
      });
    } else {
      $card.unslick();
    }
  }

  $window.resize(toggleSlick);
  toggleSlick();
});

$(document).ready(function(){
	$('.delivery__slider').slick({
		arrows: true,				//Стрелки 
		dots: false,				//Точки 
		adaptiveHeight: false,		//Адаптив слайдов
		slidesToShow: 3,			//Кол во слайдов
		slidesToScroll: 1,			//Скролл слайдов
		speed: 1000,				//Скорость скролла
		easing:'linear',			//Анимация
		infinite: true,				//Бесконечный скролл
		initialSlide: 0,			//Старт слайдера
		autoplay: false,			//Авто слайдер
		autoplaySpeed: 3000,		//Скорость слайдера
		pauseOnFocus: true,			//Пауза авто слайдера при клике
		pauseOnHover: true,			//Пауза авто слайдера при наведении
		pauseOnDotsHover: true,		//Пауза авто слайдера при наведении на точки
		draggable: true,			//Запрет на свайп мышкой
		swipe: true,				//Запрет на свайп на сенсоре
		waitForAnimate: true,		//Быстрый скролл
		centerMode: false,			//Центрует слайд
		variableWidth: false,		//Все слайды в ряд
		rows: 1,					//Ряды слайдера
		slidesPerRow:1,				//Кол во слайдов в ряду
		vertical: false,			//Вертикальный слайдер
		responsive: [
	    {
	      breakpoint: 1170,
	      	settings: {
	        	slidesToShow: 1,
	        	dots: true,
	        	arrows: true,
	      	}
	    },
	    {
	      breakpoint: 870,
	      	settings: {
	        	slidesToShow: 1,
	        	dots: true,
	        	arrows: false,
	      	}
	    },
	  ]
	})
})

$(document).ready(function(){
	$('.services__slider').slick({
		arrows: true,				//Стрелки 
		dots: false,				//Точки 
		adaptiveHeight: false,		//Адаптив слайдов
		slidesToShow: 3,			//Кол во слайдов
		slidesToScroll: 1,			//Скролл слайдов
		speed: 1000,				//Скорость скролла
		easing:'linear',			//Анимация
		infinite: true,				//Бесконечный скролл
		initialSlide: 0,			//Старт слайдера
		autoplay: false,			//Авто слайдер
		autoplaySpeed: 3000,		//Скорость слайдера
		pauseOnFocus: true,			//Пауза авто слайдера при клике
		pauseOnHover: true,			//Пауза авто слайдера при наведении
		pauseOnDotsHover: true,		//Пауза авто слайдера при наведении на точки
		draggable: true,			//Запрет на свайп мышкой
		swipe: true,				//Запрет на свайп на сенсоре
		waitForAnimate: true,		//Быстрый скролл
		centerMode: false,			//Центрует слайд
		variableWidth: false,		//Все слайды в ряд
		rows: 1,					//Ряды слайдера
		slidesPerRow:1,				//Кол во слайдов в ряду
		vertical: false,			//Вертикальный слайдер
		responsive: [
	    {
	      breakpoint: 1170,
	      	settings: {
	        	slidesToShow: 1,
	        	dots: true,
	        	arrows: true,
	      	}
	    },
	    {
	      breakpoint: 870,
	      	settings: {
	        	slidesToShow: 1,
	        	dots: true,
	        	arrows: false,
	      	}
	    },
	  ]
	})
})

$(document).ready(function(){
	$('.item__title-faq').click(function(event) {
		if($('.faq__questions').hasClass('one')){
			$('.item__title-faq').not($(this)).removeClass('active');
			$('.item__text-faq').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});