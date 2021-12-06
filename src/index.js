import './sass/main.scss';

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
