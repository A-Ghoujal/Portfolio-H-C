// burger menu

document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav__link--list");

    burgerMenu.addEventListener("click", function (event) {
      navLinks.classList.toggle("show");
      burgerMenu.classList.toggle("show");
      event.stopPropagation(); 
    });

  });

  document.addEventListener('DOMContentLoaded', function () {
    const burgerIcon = document.querySelector('.burger-icon');
    burgerIcon.addEventListener('click', function () {
      burgerIcon.classList.toggle('active');
    });
  });

  // nav bar animation
  
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('nav');
  function showNavBar() {
    nav.style.opacity = '1';
    nav.style.transform = 'translateY(0)';
  }
  setTimeout(showNavBar, 500);
});



// cv icon 

OnlineWebFonts_Com({
  'Id':'.cv-icon',
  'Data':__Animations['571171'],
}).Play();

OnlineWebFonts_Com({
  'Id':'.crf-icon',
  'Data':__Animations['490831'],
}).Play();

// typing

let typed = new Typed(".auto-type" , {
  strings: [ " Web Developer", " Designer", " Frontend Developer"],
  typeSpeed: 170,
  backSpeed: 170,
  loop: true
  
});


 
// come back title when user leaves the page :DDD

let docTitle = document.title;
window.addEventListener('blur', () => {
  document.title = 'Come back plz! :( ';
});

window.addEventListener('focus', () => {
  document.title = docTitle;
});