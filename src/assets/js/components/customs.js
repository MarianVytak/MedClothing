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

});