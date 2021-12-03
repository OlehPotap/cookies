import './sass/main.scss';

$('.menu-mobile__btn').click(function () {
  $(this).toggleClass('is-active');
  $('.menu-mobile__list').toggleClass('is-open');
});
