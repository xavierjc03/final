
function hacerclic(){
    document.querySelector("small").onclick=mostraralerta;
}

function mostraralerta(){
    alert("INTEGRANTES: \nHenry Chiluisa \n Daniel Iza \n Ian Masache "+
    "\n Andres Salazar \n Xavier Jaya \n Atik Yumbay");
}

window.onload=hacerclic;
var i = 0;
$(function () {
    $(window).scroll(function () {

        var wintop = $(window).scrollTop();
        if (wintop > 1) {
            $('body').addClass("salto");
            $('header').addClass("header2");
        }
        else {
            $('header').removeClass("header2");
            $('body').removeClass("salto");
        }
        if (($(".footer-classic").offset().top - wintop) <= 450 || ($(".footer-classic").offset().top - wintop) <= 200) {
            $('.footer-section').css('opacity', '1');
            $('footer .footer-content .about').addClass("animar2");
            $('footer .footer-content .contact').addClass("animar4");
            $('footer .footer-content .links').addClass("animar3");
            $('footer #container').addClass("animar5");
        }
    });
});