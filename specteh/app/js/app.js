$(document).ready(function(){
    $('.nav-box__icon').on('click', function(){
        $(this).closest('.nav-box').toggleClass('open');
    });

    $('.about-box__more').on('click', function(e){
        $(this).toggleClass('show-button');
        $('.hidden-text').toggleClass('show');
        e.preventDefault();
    });
    $(".calculator-box__form").change(function(){
        var price = 0, price1 = 0, price2 = 0, price3 = 0;
        if ($("#calculator-region").val() == "МО до 15км") {
            price1 += 1500;
            $(".form-row__price b").html(price = price1 + price2 + price3);
        }
        else if ($("#calculator-region").val() == "") {
            $(".form-row__price b").html(price = price1 + price2 + price3);
        }
        else if (($("#calculator-region").val() == "МО до 10км") || ($("#calculator-region").val() == "ЦАО")) {
            price1 += 1000;
            $(".form-row__price b").html(price = price1 + price2 + price3);
        }
        else {
            price1 += 500;
            $(".form-row__price b").html(price = price1 + price2 + price3);
        }

        if ($("input:radio:checked").val() == "Юр. лицо") {
            price2 += 1000;
            $(".form-row__price b").html(price = price1 + price2 + price3);
        }
        else {
            $(".form-row__price b").html(price = price1 + price2 + price3);
        }

        if ($("#calculator-capacity").val() == "8м3") {
            price3 += 7500;
            $(".form-row__price b").html(price = price1 + price2 + price3);
        }
        else if ($("#calculator-capacity").val() == "20м3") {
            price3 += 20000;
            $(".form-row__price b").html(price = price1 + price2 + price3);
        }
        else if ($("#calculator-capacity").val() == "27м3") {
            price3 += 22000;
            $(".form-row__price b").html(price = price1 + price2 + price3);
        }
        else {
            $(".form-row__price b").html(price = price1 + price2 + price3);
        }
    });

    /* MAGNIFIC POPUP */
    $('.order-form').magnificPopup({
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
            },
            open: function() {
                $('html').css('margin-right', 9);
            },
            close: function() {
                $('html').css('margin-right', 0);
            }
        }
    });

    /* MASKED INPUT */
    $(function () {
        $("[name='phone']").mask("+8(999) 999-99-99");
    });

    /* SMOOTH SCROLLING */
    $('a[href*="#"]').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
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

    /* FEEDBACK FORM */
    $('#feedback-form').submit(function (e) {
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

    /* CALCULATOR FORM */
    $('#calculator-form').submit(function (e) {
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

    /* ORED FORM */
    $('#order-form').submit(function (e) {
        var $form = $(this);
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize()
        }).done(function () {
            $("#order h2").hide();
            $("#order-form").hide();
            $(".message").show();
        }).fail(function () {
            $(".message").text("Ошибка. Данные не отправлены.").addClass("alert").show();
        });
        e.preventDefault();
    });

    /* VIEWPORT ANIMATION */
    $('.header-box').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 200
    });
    $('.calculator-box').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 200
    });
    $('.equipment-box').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 200
    });
    $('.feedback-box').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 200
    });
    $('.procedure-box').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 200
    });
    $('.about-box').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 200
    });

    /* PRELOADER */
    $(window).on('load', function () {
        var $preloader = $('#page-preloader'),
            $spinner   = $preloader.find('.spinner');
        $spinner.fadeOut();
        $preloader.delay(350).fadeOut('slow');
    });
});