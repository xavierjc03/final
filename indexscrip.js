
function hacerclic(){
    document.querySelector("sup").onclick=mostraralerta;
}

function mostraralerta(){
    alert("INTEGRANTES: \nHenry Chiluisa \n Daniel Iza \n Ian Masache "+
    "\n Andres Salazar \n Xavier Jaya \n Atik Yumbay");
}

window.onload=hacerclic;

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
    });
    
});
