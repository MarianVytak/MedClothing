$(function () {

    'use strict';


    // Read More
    const readMoreLink = $('.read-more-link');
    readMoreLink.on('click', function(e){
        e.preventDefault();
        let readMore = $(this).attr('href');
        let readMoreContent = $(readMore + ' ' + '.read-more-content');
        let text = $(this).text();

        if (text === 'Развернуть') {
            $(this).text('Свернуть');
        } else {
            $(this).text('Развернуть');
        }

        if (text === 'Больше') {
            $(this).text('Меньше');
        } else {
            $(this).text('Больше');
        }

        $(this).toggleClass('active');
        $(readMore).toggleClass('active');
        $(readMoreContent).fadeToggle();
    });


    // Featured
    const featuredLink = $('.js-featured-link');
    featuredLink.on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });


    // Accordion.
    const accordionLink = $('.accordion-link');
    accordionLink.on('click', function (e) {
        e.preventDefault();
        let accordionContent = $(this).attr('href');
        $(this).toggleClass('active');
        $(accordionContent).slideToggle();
        $(accordionContent).toggleClass('active');
    });


    // Custom Scroll.
    $(window).on("load",function(){
        $('.custom-scroll').mCustomScrollbar({
            theme:"light-2",
            axis:"x"
        });
    });


    // Scroll Top.
    const scrollTop = $('.js-scroll-top');
    scrollTop.on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });


    // Number Picker
    $(document).ready(function(){
        dpUI.numberPicker('.js-number-picker', {
            start: 1,
            min: 1,
            step: 1,
            increaseText: '',
            decreaseText: '',
            formatter: function(x){
                return x+' шт';
            }
        });
    });

});