'use strict';


// Slider big.
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

// Slider small.
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


// Featured.
$('.commodity-card__featured_item').on('click', function (e) {
    e.preventDefault();
    let thisFeatured = $(this).attr('data-target');
    $(this).removeClass('active');
    $(thisFeatured).addClass('active');
});


// Color.
$('.commodity-card__product-options_color_item').on('click', function (e) {
    e.preventDefault();
    $('.commodity-card__product-options_color_item').removeClass('active');
    $(this).addClass('active');
});


// Size.
$('.commodity-card__product-options_size_item').on('click', function (e) {
    e.preventDefault();
    $('.commodity-card__product-options_size_item').removeClass('active');
    $(this).addClass('active');
});


// Size chart.
$('.commodity-card__size-chart_link').on('click', function (e) {
    e.preventDefault();
    let thisTable = $(this).attr('href');
    $(this).toggleClass('active');
    $(thisTable).slideToggle();
});


// Order list.
$('.commodity-card__order-list_add_btn').on('click', function (e) {
    e.preventDefault();
    let thisOrder = $(this).attr('href');
    $(thisOrder).addClass('active');
});