const menuArticles = document.querySelectorAll('li');
const menuLinks = document.querySelectorAll('#navbar a');

menuArticles.forEach(article => {
    article.addEventListener('click', () => {
        article.classList.add('active');
    })
})

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        removeActiveClasses()
        link.classList.add('active');
    })
})

function removeActiveClasses() {
    menuArticles.forEach(article => {
        article.classList.remove('active');
        })
    menuLinks.forEach(link => {
        link.classList.remove('active');
            })
}

// Navigation

const hamburger = document.querySelector('.hamburger')
const navigation = document.querySelector('#navbar')
const nav_links = document.querySelectorAll('.nav-link')

hamburger.addEventListener('click', () => {
  navigation.classList.toggle('active')
})


nav_links.forEach(nav_link => {
nav_link.addEventListener('click', () => {
    navigation.classList.toggle('active')
  })
})

// Scroll button

var scrollButton = document.querySelector(".scrollUp");

scrollButton.addEventListener('click', () => {
  topFunction()
})

document.querySelector('#main-doc').onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.querySelector('#main-doc').scrollTop > 330 || document.documentElement.scrollTop > 330) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

function topFunction() {
  // document.body.scrollTop = 0;
  document.querySelector('#main-doc').scrollTop = 0;
}

