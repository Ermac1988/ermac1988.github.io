$(document).ready(function(){
    $('.testimonials-box__slider').slick({
        accessibility: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        arrows: false,
        dots: true,
        initialSlide: 4,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});