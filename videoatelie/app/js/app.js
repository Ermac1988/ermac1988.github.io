$(document).ready(function() {

    /* AJAX FORM */
    $('#feedback').submit(function (e) {
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
    $('#order').submit(function (e) {
        var $form = $(this);
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize()
        }).done(function () {
            $.magnificPopup.open({
                items: { src: '#success' },
                type: 'inline',
                tClose: 'Закрыть (Esc)',
                preloader: false,
                focus: '#name',
                removalDelay: 160,
                fixedContentPos: true,
            });
        }).fail(function () {
            $.magnificPopup.open({
                items: { src: '#fail' },
                type: 'inline',
                tClose: 'Закрыть (Esc)',
                preloader: false,
                focus: '#name',
                removalDelay: 160,
                fixedContentPos: true,
            });
        });
        e.preventDefault();
    });

    /* MASKED INPUT */
    $(function () {
        $("[name='order-phone'], [name='feedback-phone']").mask("+38 (099) 999-99-99");
    });

    /* VIEWPORT ANIMATION */
    $('.home-price-box').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 200
    });
    $('.home-video-box').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 200
    });
    $('.home-features-box').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 200
    });
    $('.home-photo-box').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 200
    });
    $('.home-about-box').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 200
    });
    $('.map-box').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 200
    });
    $('.contact-form-box').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 200
    });
    $('.video-box').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 200
    });
    $('.photo-box').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 200
    });

    /* SLIDER */
    $('.home-price-box__slider').slick({
        accessibility: true,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        arrows: true,
        dots: false,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0',
                    adaptiveHeight: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0',
                    adaptiveHeight: true
                }
            }
        ]
    });
    $('.home-video-box__videos, .video-box__videos').slick({
        accessibility: true,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        arrows: true,
        dots: false,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    centerPadding: '0',
                    adaptiveHeight: true
                }
            },
            {
                breakpoint: 421,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '0',
                    adaptiveHeight: true
                }
            }
        ]
    });
    $('.home-photo-box__photos, .photo-box__photos').slick({
        accessibility: true,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        arrows: true,
        dots: false,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    centerPadding: '0',
                    adaptiveHeight: true
                }
            },
            {
                breakpoint: 421,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '0',
                    adaptiveHeight: true
                }
            }
        ]
    });

    /* MAGNIFIC POPUP */
    $(".youtube-popup").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe id="player" class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: "youtube.com/",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1&controls=1&rel=0&modestbranding=1&showinfo=0&hl=ru&enablejsapi=1"
                }
            }
        }
    });
    $('.form-popup').magnificPopup({
        tClose: 'Закрыть (Esc)',
        type: 'inline',
        preloader: false,
        focus: '#order-name',
        removalDelay: 160,
        fixedContentPos: true,
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#order-name';
                }
            }
        }
    });
    $('.image-popup').magnificPopup({
        tClose: 'Закрыть (Esc)',
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: true,
        midClick: true,
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out'
        }
    });
});
