const homePriceInput = document.querySelector("#home--price");
const homePriceValue = document.querySelector("#range--value");

const formattingPriceValue = function () {
  homePriceValue.value = homePriceInput.value;
  homePriceValue.value = new Intl.NumberFormat("cs-CZ").format(
    homePriceValue.value
  );
};

formattingPriceValue();

homePriceInput.addEventListener("input", () => {
  formattingPriceValue();
});
