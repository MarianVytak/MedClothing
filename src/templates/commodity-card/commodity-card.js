'use strict';

$('.commodity-card__slider-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    focusOnSelect: true,
    fade: true,
    arrows: false,
    dots: false,
    asNavFor: '.commodity-card__slider-small'
});

$('.commodity-card__slider-small').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    focusOnSelect: true,
    fade: false,
    arrows: false,
    dots: false,
    asNavFor: '.commodity-card__slider-big'
});