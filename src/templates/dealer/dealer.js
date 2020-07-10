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
    appendArrows: $('.dealer__arrows')
});