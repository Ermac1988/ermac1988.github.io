/**
 * Created by vlad on 08.02.18.
 */
$(document).ready(function(){

    $('a[href*="#"]').on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 2000);
        e.preventDefault();
        return false;
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 1000) {
            $('#scrollTop').fadeIn();
        } else {
            $('#scrollTop').fadeOut();
        }
    });

    $('#scrollTop').click(function(){
        $('html, body').animate({scrollTop : 0}, 1000);
        return false;
    });

    $('#bottom-form').submit(function(e) {
        var $form = $(this);
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize()
        }).done(function() {
            $(".form-box__title").css("display", "none");
            $(".form-box__form").css("display", "none");
            $(".form-box__result").addClass("offset-lg-3 col-lg-6").html('<img class="" src="img/send.png" width="214" height="158"/><p><span>Cảm ơn</span><br> Đơn đăng ký của bạn<br> đã được gửi đi</p>');
        }).fail(function() {
            $(".form-box__result").addClass("alert alert-danger offset-lg-3 col-lg-6").html("Lỗi. Đơn đăng ký không được gửi đi.").css("margin-top", "20px");
        });
        e.preventDefault();
    });

    $(function(){
        $("[name='phone']").mask("84 (99) 999 999");
    });

    $(window).on('load', function () {
        var $preloader = $('#page-preloader'),
            $spinner   = $preloader.find('.spinner');
        $spinner.fadeOut();
        $preloader.delay(350).fadeOut('slow');
    });
});