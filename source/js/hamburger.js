var hamburger = document.querySelector(".hamburger");
var mainNav = document.querySelector(".main-nav__list");

hamburger.onclick = function () {
  hamburger.classList.toggle("hamburger--active");
  mainNav.classList.toggle("main-nav__list--active");
};
