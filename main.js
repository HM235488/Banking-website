"use strict";
const arrowLeft = document.querySelector(".sliderBtnLeft");
const arrowRight = document.querySelector(".sliderBtnRight");
const slideImages = document.querySelectorAll(".slide_img");

let curSlide = 0;

// SLIDERS
const goToSlide = function (slide) {
  slideImages.forEach((img, i) => {
    img.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

const visibleSlides = function (curSlide) {
  slideImages.forEach((slide) => {
    console.log(slide, curSlide);
    console.log(slide.dataset.img);
    if (slide.dataset.img == curSlide) {
      console.log(slide.dataset.img);
      slide.classList.add("active");
      slide.classList.remove("hidden");
      return 1;
    }
    if (slide.dataset.img !== curSlide) {
      slide.classList.add("hidden");
      slide.classList.remove("active");
      return -1;
    }
  });
};

const slideLeftArrow = function () {
  if (curSlide === slideImages.length - 1) {
    curSlide = 0;
  } else curSlide++;
  goToSlide(curSlide);
  visibleSlides(curSlide);
};

const slideRightArrow = function () {
  if (curSlide === 0) {
    curSlide = slideImages.length - 1;
  } else curSlide--;
  goToSlide(curSlide);
  visibleSlides(curSlide);
};
arrowLeft.addEventListener("click", slideLeftArrow);
arrowRight.addEventListener("click", slideRightArrow);
goToSlide(0);

console.log(document.querySelector("img[src='img/slide_0.png']"));

console.log();

// REVEAL SECTIONS

const allSections = document.querySelectorAll(".section");
console.log(allSections);

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const observer = new IntersectionObserver(revealSection, {
  root: null,
  threshold: [0.7],
});

allSections.forEach(function (section) {
  observer.observe(section);
  section.classList.add("section--hidden");
});
