
function hacerclic(){
    document.querySelector("small").onclick=mostraralerta;
}

function mostraralerta(){
    alert("INTEGRANTES: \nHenry Chiluisa \n Daniel Iza \n Ian Masache "+
    "\n Andres Salazar \n Xavier Jaya \n Atik Yumbay");
}

window.onload=hacerclic;

$(function () {
    var animacion = $(".footer-classic").offset().top;
    
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
        if ((animacion - wintop) <= 483) {
            $('.footer-section').css('opacity', '1');
            $('footer .footer-content .about').addClass("animar3");
            $('footer .footer-content .contact').addClass("animar4");
            $('footer .footer-content .links').addClass("animar2");
            $('footer #container').addClass("animar5");
        }
        if ((wintop) >= 683) {
            $('header nav').css('position', 'fixed');
            $('header nav').css('bottom', '700px');
        }
        else {
            $('header nav').css('position', 'absolute');
            $('header nav').css('bottom', '0');
        }
        console.log($('h1').offset().top);
        console.log(wintop);
    });
});