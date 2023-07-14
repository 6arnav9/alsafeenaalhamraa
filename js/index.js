window.addEventListener('scroll', function() {
    var stickynav = document.querySelector('.stickynav');
    var navLinks = document.querySelectorAll('.navlink');
    var cswitch = document.querySelectorAll('.cswitch');
    var cstay = this.document.querySelector('.cstay');
    var colorgrey = this.document.querySelector('.colorgrey')
    var scrollPosition = window.scrollY;
    var windowWidth = window.innerWidth; // Get the width of the viewport
  
    if (scrollPosition > 0) {
      stickynav.classList.add('sticky');
      navLinks.forEach(function(navLink) {
        if (windowWidth > 768) {
          navLink.style.color = '#D5D2D6';
        }
        else {
          navLink.style.color = '#D5D2D6'
        }
      });
      cswitch.forEach(function(cswitchElement) {
        if (windowWidth > 768) {
          cswitchElement.style.color = '#D5D2D6';
        } else{
            cswitchElement.style.color = '#D5D2D6';
        }
        cstay.forEach(function(cstayElement) {
            if(windowWidth < 768) {
                cswitchElement.style.color = '#D5D2D6';
            }
        });
      });
    } else {
      stickynav.classList.remove('sticky');
      navLinks.forEach(function(navLink) {
        if (windowWidth > 768) {
          navLink.style.color = '#D5D2D6';
        }
      });
      cswitch.forEach(function(cswitchElement) {
        if (windowWidth > 768) {
          cswitchElement.style.color = '#D5D2D6';
        } else {
            cswitchElement.style.color = '#D5D2D6'
        }
      });
    }
  });
  
  window.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const hamburgerClose = document.querySelector('.hamburger-close');
    const navList = document.querySelector('.navlist');
  
    hamburger.addEventListener('click', function() {
      navList.classList.add('active');
      hamburger.classList.add('hide');
      hamburgerClose.classList.add('show');
    });
  
    hamburgerClose.addEventListener('click', function() {
      navList.classList.remove('active');
      hamburger.classList.remove('hide');
      hamburgerClose.classList.remove('show');
    });

      // Check if it's the home page
    if (window.location.pathname === '/index.html') {
        navList.classList.remove('active'); // Remove the 'active' class
    }
});
