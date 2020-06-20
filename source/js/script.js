let button = document.querySelector(".main-nav__toggle");
let menu = document.querySelector(".main-nav__list");

button.classList.add("main-nav__toggle--open");
menu.classList.add("main-nav__list--close");

button.addEventListener("click", function() {

  menu.classList.toggle("main-nav__list--open");

  button.classList.toggle("main-nav__toggle--close")
});
let btnSlider = document.querySelector(".examples-slider__toggler-range");
let slider = document.querySelector(".examples-slider__toggler");

btnSlider.ondragstart = function() {
  return false;
};

btnSlider.onmousedown = function() {
 const sliderClientRect = slider.getBoundingClientRect();
 const borderLeft = sliderClientRect.x;
 const sliderWidth = sliderClientRect.width;
 const halfBtnSlider = btnSlider.offsetWidth / 2 ;
  document.onmousemove = function(event) {
  let x = event.clientX - borderLeft;
    if (x >= 0 && x <= sliderWidth) {
    btnSlider.style.left = x - halfBtnSlider + 'px';
    let slides = document.querySelectorAll(".examples-slider__slide");
    const slideShow = x / sliderWidth * 100;
    slides[0].style.clipPath = 'inset(0 ' + (Math.floor(100 - slideShow)) + '% 0 0';
    slides[1].style.clipPath = 'inset(0 0 0 ' + (Math.ceil(slideShow)) + '%';
    }
    }

  function reboot() {
    document.onmousemove = null;
    btnSlider.onmouseup = null;
  }
  btnSlider.onmouseup = reboot;
  document.onmouseup = reboot;
  }