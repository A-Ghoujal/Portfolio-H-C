document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav__link--list");

    burgerMenu.addEventListener("click", function (event) {
      navLinks.classList.toggle("show");
      burgerMenu.classList.toggle("show");
      event.stopPropagation(); 
    });

   
    document.addEventListener("click", function (event) {
      if (!navLinks.contains(event.target) && !burgerMenu.contains(event.target)) {
        navLinks.classList.remove("show");
        burgerMenu.classList.remove("show");
      }
    });
  });


const wheelAndHamster = document.createElement("div");
wheelAndHamster.setAttribute("aria-label", "Orange and tan hamster running in a metal wheel");
wheelAndHamster.setAttribute("role", "img");
wheelAndHamster.classList.add("wheel-and-hamster");


const wheel = document.createElement("div");
wheel.classList.add("wheel");


const hamster = document.createElement("div");
hamster.classList.add("hamster");


const hamsterBody = document.createElement("div");
hamsterBody.classList.add("hamster__body");


const hamsterHead = document.createElement("div");
hamsterHead.classList.add("hamster__head");


const hamsterEar = document.createElement("div");
hamsterEar.classList.add("hamster__ear");


const hamsterEye = document.createElement("div");
hamsterEye.classList.add("hamster__eye");


const hamsterNose = document.createElement("div");
hamsterNose.classList.add("hamster__nose");


const hamsterLimbFR = document.createElement("div");
hamsterLimbFR.classList.add("hamster__limb", "hamster__limb--fr");

const hamsterLimbFL = document.createElement("div");
hamsterLimbFL.classList.add("hamster__limb", "hamster__limb--fl");

const hamsterLimbBR = document.createElement("div");
hamsterLimbBR.classList.add("hamster__limb", "hamster__limb--br");

const hamsterLimbBL = document.createElement("div");
hamsterLimbBL.classList.add("hamster__limb", "hamster__limb--bl");


const hamsterTail = document.createElement("div");
hamsterTail.classList.add("hamster__tail");


const spoke = document.createElement("div");
spoke.classList.add("spoke");

hamsterHead.appendChild(hamsterEar);
hamsterHead.appendChild(hamsterEye);
hamsterHead.appendChild(hamsterNose);

hamsterBody.appendChild(hamsterHead);
hamsterBody.appendChild(hamsterLimbFR);
hamsterBody.appendChild(hamsterLimbFL);
hamsterBody.appendChild(hamsterLimbBR);
hamsterBody.appendChild(hamsterLimbBL);
hamsterBody.appendChild(hamsterTail);

hamster.appendChild(hamsterBody);

wheelAndHamster.appendChild(wheel);
wheelAndHamster.appendChild(hamster);
wheelAndHamster.appendChild(spoke);

const hamsterContainer = document.getElementById("hamster-container");
hamsterContainer.appendChild(wheelAndHamster);
