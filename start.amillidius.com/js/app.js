/**
 * Created by vlad on 26.01.18.
 */
$(document).ready(function() {
    $('.testimonials-box__videos').slick({
        accessibility: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 2,
        arrows: false,
        dots: true,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('a[href*="#"]').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 2000);
        e.preventDefault();
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('#scrollTop').fadeIn();
        } else {
            $('#scrollTop').fadeOut();
        }
    });

    $('#scrollTop').click(function () {
        $('html, body').animate({scrollTop: 0}, 1000);
        return false;
    });

    $('#bottom-form').submit(function (e) {
        var $form = $(this);
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize()
        }).done(function () {
            $(".form-box__title").css("display", "none");
            $(".form-box__form").css("display", "none");
            $(".form-box__result").addClass("offset-lg-3 col-lg-6").html('<img class="" src="img/send.png" width="214" height="158"/><p><span>Спасибо</span><br> Ваша заявка<br> отправлена</p>');
        }).fail(function () {
            $(".form-box__result").addClass("alert alert-danger offset-lg-3 col-lg-6").html("Ошибка. Данные не отправлены.").css("margin-top", "20px");
        });
        e.preventDefault();
    });

    $(function () {
        $("[name='phone']").mask("+38(999) 999-99-99");
    });

    $(window).on('load', function () {
        var $preloader = $('#page-preloader'),
            $spinner = $preloader.find('.spinner');
        $spinner.fadeOut();
        $preloader.delay(350).fadeOut('slow');
    });

    var currentX = '';
    var movementConstant = .01;
    $(document).mousemove(function(e) {
        if(currentX == '') currentX = e.pageX;
        var xdiff = e.pageX - currentX;
        currentX = e.pageX;
        $('.parallax div').each(function(i, el) {
            var movement = (i + 1) * (xdiff * movementConstant);
            var newX = $(el).position().left + movement;
            $(el).css('left', newX + 'px');
        });
    });

    $('h2').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInDown',
        offset: 200
    });
    $('a[href*="#form"]').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated flipInX',
        offset: 200
    });
    $('.content-box__first').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated slideInLeft',
        offset: 200
    });
    $('.content-box__second').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated slideInRight',
        offset: 200
    });
    $('.row-box__first').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated slideInLeft',
        offset: 200
    });
    $('.row-box__second').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated slideInRight',
        offset: 200
    });
    $('.form-box__form').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated slideInDown',
        offset: 200
    });
    $('iframe').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated slideInDown',
        offset: 200
    });





});