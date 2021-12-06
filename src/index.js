import './sass/main.scss';

$('.menu-mobile__btn').click(function () {
  $(this).toggleClass('is-active');
  $('.menu-mobile__list').toggleClass('is-open');
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
    refs.lessbtn.classList.toggle('button__is-hidden');}
    
})();