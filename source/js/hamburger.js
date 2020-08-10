var hamburger = document.querySelector(".hamburger");
var mainNav = document.querySelector(".main-nav__list");
var hamburgerActivate = document.querySelector(".nojs__header-toggle");
var menuActivate = document.querySelector(".nojs__main-menu");

window.onload = function () {
  hamburgerActivate.classList.remove("nojs__header-toggle");
  menuActivate.classList.remove("nojs__main-menu");
};

hamburger.onclick = function () {
  hamburger.classList.toggle("hamburger--active");
  mainNav.classList.toggle("main-nav__list--active");
};
