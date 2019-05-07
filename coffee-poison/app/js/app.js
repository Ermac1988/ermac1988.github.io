$(document).ready(function(){

    $('.about-box__more').on('click', function(e){
        $(this).toggleClass('show-button');
        $('.hidden-text').toggleClass('show');
        e.preventDefault();
    });

    /* MAGNIFIC POPUP */

    $('.form-popup').magnificPopup({
        tClose: 'Закрыть (Esc)',
        type: 'inline',
        preloader: false,
        focus: '#name',
        removalDelay: 160,
        fixedContentPos: true,
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });

    $('.description-popup').magnificPopup({
        tClose: 'Закрыть (Esc)',
        type: 'inline',
        preloader: false,
        closeBtnInside: true,
        removalDelay: 160,
        fixedContentPos: true,
        closeOnContentClick: false,
        midClick: true
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

    /* AJAX FORM */
    $('#form').submit(function (e) {
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

    /* SLIDER */
    $('.testimonials-box__slider').slick({
        accessibility: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        arrows: false,
        dots: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    adaptiveHeight: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    adaptiveHeight: true
                }
            }
        ]
    });

    /* MASKED INPUT */
    $(function () {
        $("[name='phone']").mask("+38 (099) 999-99-99");
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
    $('.prices-box').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 200
    });
    $('.advantages-box').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 200
    });
    $('.testimonials-box').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 200
    });
    $('.coach-box').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 200
    });
    /*$('.map-box').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 200
    });*/
});

$(window).on('load', function () {

    /* PRELOADER */
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});
