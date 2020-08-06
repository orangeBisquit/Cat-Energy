var compSliderControl = document.querySelector(".progress-slider__range");
var imageBefore = document.querySelector(".example__img-box--before");
var imageAfter = document.querySelector(".example__img-box--after");
var buttonBefore = document.querySelector(".progress-slider__button--before");
var buttonAfter = document.querySelector(".progress-slider__button--after");

compSliderControl.oninput = function () {
  imageBefore.style.width = 100 - compSliderControl.value + "%";
  imageAfter.style.width = compSliderControl.value + "%";
};

buttonBefore.onclick = function () {
  imageBefore.style.width = "100%";
  imageAfter.style.width = 0;
  compSliderControl.value = 0;
};

buttonAfter.onclick = function () {
  imageAfter.style.width = "100%";
  imageBefore.style.width = 0;
  compSliderControl.value = 100;
};
