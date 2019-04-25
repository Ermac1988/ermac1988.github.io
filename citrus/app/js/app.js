$(document).ready(function(){
    $(".popup-youtube").magnificPopup({
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

    $('.popup-image').magnificPopup({
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