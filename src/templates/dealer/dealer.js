'use strict';

$('.dealer__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 10000,
    fade: false,
    arrows: true,
    dots: false,
    appendArrows: $('.dealer__arrows'),
    responsive: [
        {
            breakpoint: 1140,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
                arrows: false
            }
        }
    ]
});