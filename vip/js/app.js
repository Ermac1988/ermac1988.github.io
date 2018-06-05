/**
 * Created by vlad on 26.01.18.
 */
$(document).ready(function() {

    /* PRELOADER */
    $(window).on("load", function () {
        var $preloader = $('#page-preloader'),
            $spinner = $preloader.find(".spinner");
        $spinner.fadeOut();
        $preloader.delay(350).fadeOut("slow");
    });

    /* SMOOTH SCROLL */
    $("a[href*='#']").on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr("href")).offset().top
        }, 2000);
        e.preventDefault();
        return false;
    });

    /* SCROLL TO TOP */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $("#scrollTop").fadeIn();
        } else {
            $("#scrollTop").fadeOut();
        }
    });
    $("#scrollTop").click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });

    /*ANIMATION*/
    $(".header-box__logo a").addClass("hidden").viewportChecker({
        classToAdd: "visible animated slideInDown",
        offset: 0
    });
    $(".header-box__logo h1").addClass("hidden").viewportChecker({
        classToAdd: "visible animated slideInUp",
        offset: 0
    });
    $(".menu-box__email i").addClass("hidden").viewportChecker({
        classToAdd: "visible animated slideInDown",
        offset: 0
    });
    $(".menu-box__email a").addClass("hidden").viewportChecker({
        classToAdd: "visible animated slideInUp",
        offset: 0
    });
    $(".menu-box__phone i").addClass("hidden").viewportChecker({
        classToAdd: "visible animated slideInDown",
        offset: 0
    });
    $(".menu-box__phone a").addClass("hidden").viewportChecker({
        classToAdd: "visible animated slideInUp",
        offset: 0
    });
    $(".menu-box__social a:nth-child(odd)").addClass("hidden").viewportChecker({
        classToAdd: "visible animated slideInDown",
        offset: 0
    });
    $(".menu-box__social a:nth-child(even)").addClass("hidden").viewportChecker({
        classToAdd: "visible animated slideInUp",
        offset: 0
    });
    $(".experts-box").addClass("hidden").viewportChecker({
        classToAdd: "visible animated slideInUp",
        offset: 200
    });
    $(".banner-box").addClass("hidden").viewportChecker({
        classToAdd: "visible animated slideInUp",
        offset: 200
    });
    $(".testimonials-box").addClass("hidden").viewportChecker({
        classToAdd: "visible animated slideInUp",
        offset: 200
    });
    $(".blockquote-box__text").addClass("hidden").viewportChecker({
        classToAdd: "visible animated slideInUp",
        offset: 200
    });
    $(".advantage-box").addClass("hidden").viewportChecker({
        classToAdd: "visible animated slideInUp",
        offset: 200
    });
    $(".description-box").addClass("hidden").viewportChecker({
        classToAdd: "visible animated slideInUp",
        offset: 200
    });
    $(".form-box").addClass("hidden").viewportChecker({
        classToAdd: "visible animated slideInUp",
        offset: 200
    });
    $(".footer-box__links > a:nth-child(1)").addClass("hidden").viewportChecker({
        classToAdd: "visible animated slideInUp",
        offset: 50
    });
    $(".footerLinks-box__social > a:nth-child(odd)").addClass("hidden").viewportChecker({
        classToAdd: "visible animated slideInDown",
        offset: 50
    });
    $(".footerLinks-box__social > a:nth-child(even)").addClass("hidden").viewportChecker({
        classToAdd: "visible animated slideInUp",
        offset: 50
    });
    $(".footerLinks-box__privacy").addClass("hidden").viewportChecker({
        classToAdd: "visible animated slideInUp",
        offset: 0
    });
    $(".footerLinks-box__copyright").addClass("hidden").viewportChecker({
        classToAdd: "visible animated slideInUp",
        offset: 0
    });

    /* MAGNIFIC POPUP */
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

    /* PARALLAX */
    var scene = document.getElementById("parallax");
    var parallax = new Parallax(scene, {
        /*relativeInput: true,
         hoverOnly: true*/
    });

    /* MASKED INPUT */
    $(function () {
        $("[name='phone']").mask("+38(999) 999-99-99");
    });

    /* MAP */
    /*function initMap() {
        var element = document.getElementById("map");
        var loc = new google.maps.LatLng(-34.397, 150.644);
        var mapOptions = {
            zoom: 12,
            center: loc,
            mapTypeId: "roadmap",
            zoomControl: true,
            mapTypeControl: false,
            fullscreenControl: false,
            streetViewControl: false,
            styles: [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#212121"
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#212121"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.locality",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#181818"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#1b1b1b"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#2c2c2c"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#8a8a8a"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#373737"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#3c3c3c"
                        }
                    ]
                },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#4e4e4e"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#3d3d3d"
                        }
                    ]
                }
            ]
        };

        var map = new google.maps.Map(element, mapOptions);

        var marker = new google.maps.Marker({
            position: loc,
            map: map
        });

        var infoWindow = new google.maps.InfoWindow({
            content: '<h1>Hello</h1>'
        });

        marker.addListener("click", function(){
            infoWindow.open(map, marker);
        });
    }*/

    /* BLINK */
    setInterval(function(){
        $('.header-box__logo h1').addClass('blink_on');
        setTimeout(function(){$('.header-box__logo h1').removeClass('blink_on')}, 1200);
    }, 3000)
});