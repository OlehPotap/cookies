$(document).ready(function(){
    $('.reviews__list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        asNavFor: '.reviews__bottom',
        centerPadding: '0px',
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1
              }
            },
          ]
    });

    $('.reviews__bottom').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.reviews__list'
    });
  });