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


// Header Bot Dropdown.
const headerBotNavLink = $('.header__bot_nav_link');
const headerBotDropdown = $('.header__bot_dropdown');

headerBotNavLink.mouseover(function (e) {
    e.preventDefault();
    let thisLink = $(this).attr('href');
    $(this).addClass('active');
    headerBotDropdown.removeClass('active');
    $(thisLink).addClass('active');
});
headerBotNavLink.mouseout(function (e) {
    e.preventDefault();
    headerBotNavLink.removeClass('active');
    headerBotDropdown.removeClass('active');
});
headerBotDropdown.mouseover(function (e) {
    e.preventDefault();
    let thisHeaderBotNavLink = $(this).attr('data-target');
    $(thisHeaderBotNavLink).addClass('active');
    $(this).addClass('active');
});
headerBotDropdown.mouseout(function (e) {
    e.preventDefault();
    headerBotNavLink.removeClass('active');
    headerBotDropdown.removeClass('active');
});