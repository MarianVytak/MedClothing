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

});