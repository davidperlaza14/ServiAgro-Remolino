$(document).ready(function(){
    $('.slider1').bxSlider({
      mode: 'fade',
    });
    $('.slider2').bxSlider({
      mode: 'fade',
    });
    $('.slider3').bxSlider({
      mode: 'fade',
    });
    $('.slider4').bxSlider({
        mode: 'fade',
      });
      $('.slider5').bxSlider({
        mode: 'fade',
      });
      $('.slider6').bxSlider({
        mode: 'fade',
      });
      $('.slider7').bxSlider({
        mode: 'fade',
      });
      $('.slider8').bxSlider({
        mode: 'fade',
      });
      $('.slider9').bxSlider({
        mode: 'fade',
      });
      $('.slider10').bxSlider({
        mode: 'fade',
      });
  });


let menu = document.querySelector("#menu");
let menu_bar = document.querySelector("#menu-bar");

menu_bar.addEventListener("click", function() {
  menu.classList.toggle ("menu-toggle");
});

