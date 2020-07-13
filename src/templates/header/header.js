'use strict';


// Hamburger.
const hamburger = $('.hamburger');
const menu = $('.menu');
const overflow = $('.overflow');
hamburger.on('click', function (e) {
    e.preventDefault();
    $('body').addClass('no-scroll');
    overflow.fadeIn();
    menu.fadeIn();
});
overflow.on('click', function (e) {
    e.preventDefault();
    $('body').removeClass('no-scroll');
    overflow.fadeOut();
    menu.fadeOut();
});


// Mobile search.
$('.js-header-mobile-search').on('click', function (e) {
    e.preventDefault();
    $('.header-mobile__search').fadeToggle();
});


// Header scroll events.
$(window).scroll(function () {
    const wScroll = $(this).scrollTop();
    if (wScroll > 20) {
        $('.header').addClass('active');
    } else {
        $('.header').removeClass('active');
        $('.header__catalog').fadeOut();
        $('.header__mid_catalog_link').removeClass('active');
    }
});


// Header bot dropdown.
const hoverLink = $('.header__bot_nav_link');
const hoverContent = $('.header__bot_dropdown');
hoverLink.on('click', function (e) {
    e.preventDefault();
});
hoverLink.mouseover(function () {
    let thisLink = $(this).attr('href');
    $(this).addClass('active');
    hoverContent.removeClass('active');
    $(thisLink).addClass('active');
});
hoverLink.mouseout(function () {
    hoverLink.removeClass('active');
    hoverContent.removeClass('active');
});
hoverContent.mouseover(function () {
    let thisHoverLink = $(this).attr('data-target');
    $(thisHoverLink).addClass('active');
    $(this).addClass('active');
});
hoverContent.mouseout(function () {
    hoverLink.removeClass('active');
    hoverContent.removeClass('active');
});


// Header catalog dropdown.
const headerCatalogDropdownLink = $('.header__mid_catalog_link');
const headerCatalogLink = $('.header__catalog_list_item_link');
const headerCatalog = $('.header__catalog');
const headerCatalogContent = $('.header__catalog_content');
headerCatalogDropdownLink.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    headerCatalog.fadeToggle();
});
headerCatalogLink.mouseover(function (e) {
    e.preventDefault();
    let thisLink = $(this).attr('href');
    headerCatalogLink.removeClass('active');
    $(this).addClass('active');
    headerCatalogContent.removeClass('active');
    $(thisLink).addClass('active');
});