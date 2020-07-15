'use strict';

// Size
const sizeLink = $('.commodity-card-mobile__product-options_size_dropdown_link');
const sizeContent = $('.commodity-card-mobile__product-options_size_dropdown_content');
const sizeContentLink = $('.commodity-card-mobile__product-options_size_dropdown_content_link');
sizeLink.on('click', function (e) {
    e.preventDefault();
    let thisSizeContent = $(this).attr('href');
    $(this).toggleClass('active');
    $(thisSizeContent).slideToggle();
});
sizeContentLink.on('click', function (e) {
    e.preventDefault();
    let thisSizeLinkText = $(this).attr('href');
    let thisContentLinkText = $(this).text();
    $(this).toggleClass('active');
    $(thisSizeLinkText).text(thisContentLinkText);
    sizeContentLink.removeClass('active');
    $(this).addClass('active');
    sizeContent.slideUp();
});