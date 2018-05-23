$(document).ready(function(){
    $('.slider-box').slick({
        accessibility: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        initialSlide: 0
    });
    $('.slider-box__tabs:first li').on('click', function () {
        var tabId = $(this).attr('data-tab');
        $('.slider-box__tabs:first li').removeClass('slider-box__tab-link--current');
        $(this).addClass('slider-box__tab-link--current');
        $('#tab-1, #tab-2').removeClass('slider-box__tab-content--current');
        $('#'+tabId).addClass('slider-box__tab-content--current');
    });
    $('.slider-box__tabs:last li').on('click', function () {
        var tabId = $(this).attr('data-tab');
        $('.slider-box__tabs:last li').removeClass('slider-box__tab-link--current');
        $(this).addClass('slider-box__tab-link--current');
        $('#tab-3, #tab-4').removeClass('slider-box__tab-content--current');
        $('#'+tabId).addClass('slider-box__tab-content--current');
    });
});