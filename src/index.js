import './sass/main.scss';

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
