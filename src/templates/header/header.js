'use strict';

// Header scroll events.
$(window).scroll(function(){

    const wScroll = $(this).scrollTop();

    // Activate menu
    if (wScroll > 20) {
        $('.header').addClass('active');
    }
    else {
        $('.header').removeClass('active');
    }

});
// $(window).scroll();