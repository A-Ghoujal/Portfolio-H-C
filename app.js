document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav__link--list");

    burgerMenu.addEventListener("click", function (event) {
      navLinks.classList.toggle("show");
      burgerMenu.classList.toggle("show");
      event.stopPropagation(); // Prevent the click from propagating to the document
    });

    // Close the menu when clicking anywhere outside of it
    document.addEventListener("click", function (event) {
      if (!navLinks.contains(event.target) && !burgerMenu.contains(event.target)) {
        navLinks.classList.remove("show");
        burgerMenu.classList.remove("show");
      }
    });
  });