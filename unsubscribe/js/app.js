/**
 * Created by vlad on 23.01.18.
 */
$(window).scroll(function() {
   var scrollTop = $(this).scrollTop();
   $(".letter").css({
        "transform" : "translate(0%, " + scrollTop/5 + "%)"
   })
});