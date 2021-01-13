
$('.slide-banner').slick({
    autoplay: true,
    arrow: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '',
    responsive: [
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 1,
            } 
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
}); 

// $('.slide-hot').slick({
//     cssEase: 'linear',
//     autoplay: true,
//     arrow: true,
//     dots: false,
//     slidesToShow: 'auto',
//     slidesToScroll: 1, 
//      autoplaySpeed:0,
//     speed: 12000,
//     infinite: true,
//     prevArrow: '<button class="prev"><i class="fa fa-caret-left"></i></button>',
//     nextArrow: '<button class="next"><i class="fa fa-caret-right"></i></button>',
//     responsive: [
//         {
//             breakpoint: 767, 
//             settings: {
//                 slidesToShow: 2,
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//             }
//         }
//     ]
// }); 

$('.slide-partner').slick({
    autoplay: false,
    arrow: false,
    dots: false,
    slidesToShow: 7,
    slidesToScroll: 3, 
    prevArrow: '',
    nextArrow: '',
    responsive: [
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 4,
            } 
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }
    ]
}); 

$( ".clc-child" ).click(function() {
  $(this).next().toggle();
});

jQuery(document).ready(function( $ ) {
  $("#menu").mmenu({
     "extensions": [
        "fx-menu-zoom"
     ],
     "counters": true
  });
});