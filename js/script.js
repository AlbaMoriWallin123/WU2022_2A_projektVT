const hund = document.getElementsByClassName('hund')
const visa = document.getElementsByClassName('product_info_ruta')
const bort = document.getElementsByClassName('product_info_ruta_visa')

function toggleInfo() {
    visa.classList.toggle('product_info_ruta_visa')
}

hund.addEventListener('click', toggleInfo)

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


$(function() {

    $(window).scroll(function() {
  
      var mass = Math.min(20, 1+0.0005*$(this).scrollTop());
  
      $('#zoom').css('transform', 'scale(' + mass + ')');
    });
});





const nav = document.getElementById('meny')
const burger = document.getElementById('burger')

function toggleMenu() {
    nav.classList.toggle('meny-active')
    burger.classList.toggle('crossed_line')
}

burger.addEventListener('click', toggleMenu)





