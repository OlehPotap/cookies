$(document).ready(function () {
  $('.reviews__list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    asNavFor: '.reviews__bottom',
    centerPadding: '0px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $('.reviews__bottom').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    asNavFor: '.reviews__list',
    customPaging: function(slider, i) {
      var current = i + 1;
      current = current < 10 ? "0" + current : current;
  
      var total = slider.slideCount;
      total = total < 10 ? "0" + total : total;
  
      return (
        '<button type="button" role="button" tabindex="0" class="slick-dots-button">\
        <span class="slick-dots-current">' + current + '</span>\
        <span class="slick-dots-separator">/</span>\
        <span class="slick-dots-total">' + total + '</span>\
      </button>'
      );
    }
  });
});
