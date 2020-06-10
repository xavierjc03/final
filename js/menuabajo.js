$(function () {
    var menu = $(".posiciotexto").offset().top;
    $(window).scroll(function () {

        var wintop = $(window).scrollTop();
        if (wintop >= menu) {
            $('header nav').css('position', 'fixed');
            $('header').css('position', 'fixed');
            $('header nav').css('bottom', '90.5%');
            $('header').css('bottom', '90.5%');
        }
        else {
            $('header nav').css('position', 'absolute');
            $('header').css('position', 'absolute');
            $('header nav').css('bottom', '0%');
            $('header').css('bottom', '0%');
        }
        if ($('.anitexto1').offset().top - 500 <= wintop && $('.anitexto1').offset().top - 100 >= wintop) {
            $('.anitexto1').addClass("animar7");
            $('section .contenedorsection .section-content .anitexto1').css('opacity', '1');
        }
        if ($('.anitexto2').offset().top - 500 <= wintop && $('.anitexto2').offset().top - 100 >= wintop) {
            $('.anitexto2').addClass("animar6");
            $('section .contenedorsection .section-content .anitexto2').css('opacity', '1');
        }
        if ($('.anitexto3').offset().top - 500 <= wintop && $('.anitexto3').offset().top - 100 >= wintop) {
            $('.anitexto3').addClass("animar7");
            $('section .contenedorsection .section-content .anitexto3').css('opacity', '1');
        }
        if ($('.anitexto4').offset().top - 500 <= wintop && $('.anitexto4').offset().top - 100 >= wintop) {
            $('.anitexto4').addClass("animar6");
            $('section .contenedorsection .section-content .anitexto4').css('opacity', '1');
        }
        if ($('.anitexto5').offset().top - 500 <= wintop && $('.anitexto5').offset().top - 100 >= wintop) {
            $('.anitexto5').addClass("animar7");
            $('section .contenedorsection .section-content .anitexto5').css('opacity', '1');
        }
        if ($('.anitexto6').offset().top - 500 <= wintop && $('.anitexto6').offset().top - 100 >= wintop) {
            $('.anitexto6').addClass("animar6");
            $('section .contenedorsection .section-content .anitexto6').css('opacity', '1');
        }
        if ($('.aniimg1').offset().top - 500 <= wintop && $('.aniimg1').offset().top - 100 >= wintop) {
            $('.aniimg1').addClass("animar6");
            $('section .contenedorsection .section-content .aniimg1').css('opacity', '1');
        }
        if ($('.aniimg2').offset().top - 500 <= wintop && $('.aniimg2').offset().top - 100 >= wintop) {
            $('.aniimg2').addClass("animar7");
            $('section .contenedorsection .section-content .aniimg2').css('opacity', '1');
        }
        if ($('.aniimg3').offset().top - 500 <= wintop && $('.aniimg3').offset().top - 100 >= wintop) {
            $('.aniimg3').addClass("animar6");
            $('section .contenedorsection .section-content .aniimg3').css('opacity', '1');
        }
        if ($('.aniimg4').offset().top - 500 <= wintop && $('.aniimg4').offset().top - 100 >= wintop) {
            $('.aniimg4').addClass("animar7");
            $('section .contenedorsection .section-content .aniimg4').css('opacity', '1');
        }
        if ($('.aniimg5').offset().top - 500 <= wintop && $('.aniimg5').offset().top - 100 >= wintop) {
            $('.aniimg5').addClass("animar6");
            $('section .contenedorsection .section-content .aniimg5').css('opacity', '1');
        }
        if ($('.aniimg6').offset().top - 500 <= wintop && $('.aniimg6').offset().top - 100 >= wintop) {
            $('.aniimg6').addClass("animar7");
            $('section .contenedorsection .section-content .aniimg6').css('opacity', '1');
        }
    });
});
