window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
    navbar.classList.add('bg-dark');
  } else {
    navbar.classList.remove('scrolled');
    navbar.classList.remove('bg-dark');
  }
});

function toggleNavbar() {
  var navbar = document.querySelector('.navbar');
  navbar.classList.toggle('hamburger-active');
}


// scroll dos cards

window.addEventListener('scroll', function() {
  var elements = document.getElementsByClassName('col-md-6');
  
  Array.from(elements).forEach(function(element) {
    var rect = element.getBoundingClientRect();
    var isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible) {
      element.classList.add('reverse-animation');
    } else {
      element.classList.remove('reverse-animation');
    }
  });
});
