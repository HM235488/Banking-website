"use strict";
const arrowLeft = document.querySelector(".slider__btn__left");
const arrowRight = document.querySelector(".slider__btn__right");
const slideImages = document.querySelectorAll(".slide_img");
const modal = document.querySelector(".modal");
const logInButton = document.querySelector("#login__button");
const cancelButton = document.querySelector(".cancel__button");
const closeButton = document.querySelector(".close__button");

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

// REVEAL SECTIONS

const allSections = document.querySelectorAll(".section");

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

// LOG IN AND MODAL

// OPEN MODAL
logInButton.addEventListener(
  "click",
  () => (modal.style.visibility = "visible")
);

// CLOSE MODAL
window.addEventListener("click", function (e) {
  if (
    e.target === modal ||
    e.target === cancelButton ||
    e.target === closeButton
  ) {
    modal.style.visibility = "hidden";
  }
});
