'use strict';

// Footer mobile accordion.
const footerTitle = $('.footer__title');
footerTitle.on('click', function (e) {
    e.preventDefault();
    if ($(window).width() < 1140) {
        let thisFooterList = $(this).attr('data-target');
        $(this).toggleClass('active');
        $(thisFooterList).slideToggle();
    }
});