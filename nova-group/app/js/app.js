$(document).ready(function() {

    /* MENU */
    $('.nav-icon').on('click', function () {
        $('.navbar-box__menu').toggleClass('opened');
    });

    /* SLIDER */
    $('.slider-box').slick({
        accessibility: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    mobileFirst: true,
                    swipeToSlide: true,
                    variableWidth: false,
                    arrows: false
                }
            }
        ]
    });

    $('.slider-home-box').slick({
        accessibility: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        adaptiveHeight: true,
        initialSlide: 1,
        centerMode: true,
        centerPadding: '60px',
        variableWidth: false,
        mobileFirst: false,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5,
                    swipeToSlide: true,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    swipeToSlide: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    swipeToSlide: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    swipeToSlide: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    swipeToSlide: true,
                    centerMode: false
                }
            }
        ]
    });

    /* AJAX FORM */
    $('#bottom-form').submit(function (e) {
        var $form = $(this);
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize()
        }).done(function () {
            $(".result-box").html('Спасибо Ваша заявка отправлена.').fadeIn( "slow" ).css("margin-top", "20px");
        }).fail(function () {
            $(".result-box").html('Ошибка. Данные не отправлены.').fadeIn( "slow" ).css("margin-top", "20px");
        });
        e.preventDefault();
    });

    /* SMOOTH SCROLLING */
    $('a[href*="#"]').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 85
        }, 2000);
        e.preventDefault();
    });

    /* SCROLL TO TOP */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('#scrollTop').fadeIn();
        } else {
            $('#scrollTop').fadeOut();
        }
    });
    $('#scrollTop').on("click", function () {
        console.log("top");
        $('html, body').animate({scrollTop: 0}, 1000);
        return false;
    });

    /* VIEWPORT ANIMATION */
    $('#header .header-box').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 200
    });
    $('#services .services-box').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 200
    });
    $('#about .about-box').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 200
    });
    $('#projects .projects-box').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 200
    });
    $('#clients .clients-box').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 200
    });
    $('#contacts .contacts-box').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 200
    });
});

/* PRELOADER */
$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});
