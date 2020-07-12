'use strict';

$('.instagram__grid').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 10000,
    fade: true,
    arrows: false,
    dots: false,
    responsive: [
        {
            breakpoint: 9999,
            settings: "unslick"
        },
        {
            breakpoint: 1140,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false
            }
        }
    ]
});