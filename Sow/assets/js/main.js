window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  function toggleNavbar() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('hamburger-active');
  }
  

  // scroll dos cards

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      var element = document.getElementById('sow_conecta');
      element.style.opacity = '0';
      
      // Adicionar classe CSS gradualmente
      var scrollProgress = (window.scrollY - 10) / (window.innerHeight - 10);
      var opacityValue = Math.min(scrollProgress, 1);
      element.style.opacity = opacityValue;
    }
  });
