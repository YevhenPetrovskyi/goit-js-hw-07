const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

const checkInput = () => {
  span.textContent =
    input.value.trim() !== "" ? input.value.trim() : "Anonymous";
};

input.addEventListener("input", checkInput);
