'use strict';

const messageLink = $('.js-message-link');
const messageClose = $('.js-message-close');

messageLink.on('click', function (e) {
    e.preventDefault();
    let thisMessage = $(this).attr('href');
    $(thisMessage).fadeIn();
});
messageClose.on('click', function (e) {
    e.preventDefault();
    let thisMessage = $(this).attr('href');
    $(thisMessage).fadeOut();
});