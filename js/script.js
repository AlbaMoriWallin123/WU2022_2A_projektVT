
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

function toggleArrow() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

mybutton.addEventListener('click', toggleArrow)


const nav = document.getElementsByClassName('meny') 
const burger = document.getElementById('burger')

function toggleMenu() {
    nav[0].classList.toggle('meny_active')
    burger.classList.toggle('crossed_line')
}

burger.addEventListener('click', toggleMenu)












