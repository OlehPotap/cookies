import './sass/main.scss';
import './js/slider.js';

$('.menu-mobile__btn').click(function () {
  $(this).toggleClass('is-active');
  $('.menu-mobile').toggleClass('is-open');
});

$('.menu-mobile__link').click(function () {
  $('.menu-mobile').toggleClass('is-open');
  $('.menu-mobile__btn').toggleClass('is-active');
});

(() => {
  const refs = {
    readmorebtn: document.querySelector('[data-open]'),
    lessbtn: document.querySelector('[data-close]'),
    paragraph: document.querySelector('[data-paragraph-show]'),
  };

  refs.readmorebtn.addEventListener('click', toggleModal);
  refs.lessbtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.paragraph.classList.toggle('about-us_is-hidden');
    refs.readmorebtn.classList.toggle('about-us__button__is-hidden');
    refs.lessbtn.classList.toggle('about-us__button__is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-program]'),
    closeModalBtn: document.querySelector('[data-close-program]'),
    modal: document.querySelector('[data-paragraph-show-program]'),
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
