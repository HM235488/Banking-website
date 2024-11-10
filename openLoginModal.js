const modal = document.querySelector(".modal");
const logInButton = document.querySelector("#login__button");
const cancelButton = document.querySelector(".cancel__button");
const closeButton = document.querySelector(".close__button");

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
