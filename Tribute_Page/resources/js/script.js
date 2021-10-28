

$(document).ready(function() {
  if ($(window).width() > 480) { 
  
   
	/* Navigation scroll */
    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 50
        }, function() {
          // 1500,
        });
      }
    }
  });
  }
}); 


// Scroll button

var scrollButton = document.querySelector(".scrollUp");

scrollButton.addEventListener('click', () => {
  topFunction()
})

document.querySelector('body').onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 570 || document.documentElement.scrollTop > 570) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Navigation

const hamburger = document.querySelector('.hamburger')
const navigation = document.querySelector('.navbar')
const home = document.querySelector('#mynavbar')

hamburger.addEventListener('click', () => {
  navigation.classList.toggle('active')
  hamburger.classList.toggle('active')
})

home.addEventListener('click', () => {
  home.classList.toggle('active')
  hamburger.classList.toggle('active')
})

