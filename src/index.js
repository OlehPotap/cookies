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
    openModalBtn: document.querySelector('[data-open]'),
    closeModalBtn: document.querySelector('[data-close]'),
    modal: document.querySelector('[paragraph-show]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('about-us_is-hidden');
    refs.openModalBtn.classList.toggle('button__is-hidden');
    refs.closeModalBtn.classList.toggle('button__is-hidden');}
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
    refs.closeModalBtn.classList.toggle('button__is-hidden');}
})();
