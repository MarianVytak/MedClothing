'use strict';

$('.intro__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 10000,
    fade: true,
    arrows: true,
    dots: true,
    appendArrows: $('.intro__arrows_block')
});