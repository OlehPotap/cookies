import './sass/main.scss';
import './js/slider.js';

// $num = $('.reviews__item').length;
// $even = $num / 2;
// $odd = ($num + 1) / 2;

// if ($num % 2 == 0) {
//   $('.reviews__item:nth-child(' + $even + ')').addClass('active');
//   $('.reviews__item:nth-child(' + $even + ')').prev().addClass('prev');
//   $('.reviews__item:nth-child(' + $even + ')').next().addClass('next');
// } else {
//   $('.reviews__item:nth-child(' + $odd + ')').addClass('active');
//   $('.reviews__item:nth-child(' + $odd + ')').prev().addClass('prev');
//   $('.reviews__item:nth-child(' + $odd + ')').next().addClass('next');
// }

// $('.reviews__item').click(function() {
//   $slide = $('.active').width();
//   console.log($('.active').position().left);

//   if ($(this).hasClass('next')) {
//     $('.reviews__list').stop(false, true).animate({left: '-=' + $slide});
//   } else if ($(this).hasClass('prev')) {
//     $('.reviews__list').stop(false, true).animate({left: '+=' + $slide});
//   }

//   $(this).removeClass('prev next');
//   $(this).siblings().removeClass('prev active next');

//   $(this).addClass('active');
//   $(this).prev().addClass('prev');
//   $(this).next().addClass('next');
// });

// // Keyboard nav
// $('html body').keydown(function(e) {
//   if (e.keyCode == 37) { // left
//     $('.active').prev().trigger('click');
//   }
//   else if (e.keyCode == 39) { // right
//     $('.active').next().trigger('click');
//   }
// });

$('.menu-mobile__btn').click(function () {
  $(this).toggleClass('is-active');
  $('.menu-mobile__list').toggleClass('is-open');
});

$('.menu-mobile__link').click(function () {
  $('.menu-mobile__list').toggleClass('is-open');
  $('.menu-mobile__btn').toggleClass('is-active');
});

(() => {
  const refs = {
    readmorebtn: document.querySelector('[data-open]'),
    lessbtn: document.querySelector('[data-close]'),
    paragraph: document.querySelector('[paragraph-show]'),
  };

  refs.readmorebtn.addEventListener('click', toggleModal);
  refs.lessbtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.paragraph.classList.toggle('about-us_is-hidden');
    refs.readmorebtn.classList.toggle('button__is-hidden');
    refs.lessbtn.classList.toggle('button__is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-program]'),
    closeModalBtn: document.querySelector('[data-close-program]'),
    modal: document.querySelector('[paragraph-show-program]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.openModalBtn.classList.toggle('button__is-hidden');
    refs.closeModalBtn.classList.toggle('button__is-hidden');
  }
})();
$(function () {
  // при нажатии на кнопку scrollup
  $('.scrollup').click(function () {
    // переместиться в верхнюю часть страницы
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      250,
    );
  });
});
// при прокрутке окна (window)
$(window).scroll(function () {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop() > 100) {
    // то сделать кнопку scrollup видимой
    $('.scrollup').fadeIn();
  }
  // иначе скрыть кнопку scrollup
  else {
    $('.scrollup').fadeOut();
  }
});
