$(document).ready(function() {

    /* MENU */
    $('.nav-icon').on('click', function () {
        $('.header-box__menu').toggleClass('opened');
    });

    /* AJAX FORM */
    $('#contact-form').submit(function (e) {
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

    /* SCROLL TO TOP */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
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

    /* MAGNIFIC POPUP */
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
