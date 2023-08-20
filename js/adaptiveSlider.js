const sliderLine = document.querySelector(".header_images");
const images = document.querySelectorAll(".header_slider .header_images img");

let count = 0;
let width;

function init() {
  width = document.querySelector(".header_slider").offsetWidth;
  sliderLine.style.width = width * images.length + "px";
  images.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  rollSlider();
}

window.addEventListener("resize", init);
init();
function rollSlider() {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
}

document.querySelector(".button_slider-left").addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider();
});

document.querySelector(".button_slider-right").addEventListener("click", () => {
  count++;
  console.log(count);
  if (count >= images.length) {
    count = 0;
  }
  rollSlider();
});
