const inputName = document.querySelector("#inputName");
const inputNumber = document.querySelector("#inputNumber");
const inputDateM = document.querySelector("#inputDateM");
const inputDateY = document.querySelector("#inputDateY");
const inputCvc = document.querySelector("#inputCvc");
const frontNumber = document.querySelector("#frontNumber");
const frontName = document.querySelector("#frontName");
const frontDateM = document.querySelector("#frontDateM");
const frontDateY = document.querySelector("#frontDateY");
const cvc = document.querySelector("#cvc");
const form = document.querySelector("form");
const thankYou = document.querySelector("#thankYou");
const buttonContinue = document.querySelector("#buttonContinue");

var cleave = new Cleave('#inputNumber', {
    creditCard: true,
});

inputName.addEventListener("input", () => {
    frontName.innerText = inputName.value;

    if (inputName.value.length === 0) {
        frontName.innerText = "Jane Appleseed";
    }
})

inputNumber.addEventListener("input", () => {
    frontNumber.innerText = inputNumber.value;

    if (inputNumber.value.length === 0) {
        frontNumber.innerText = "0000 0000 0000 0000";
    }
})
inputDateM.addEventListener("input", () => {
    frontDateM.innerText = inputDateM.value;

    if (inputDateM.value.length === 0) {
        frontDateM.innerText = "00";
    }
})
inputDateY.addEventListener("input", () => {
    frontDateY.innerText = inputDateY.value;

    if (inputDateY.value.length === 0) {
        frontDateY.innerText = "00";
    }
})
inputCvc.addEventListener("input", () => {
    cvc.innerText = inputCvc.value;

    if (inputCvc.value.length === 0) {
        cvc.innerText = "000";
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.classList.add("disabled");
    thankYou.classList.remove("disabled");
})
buttonContinue.addEventListener("click", () => {
    thankYou.classList.add("disabled");
    form.classList.remove("disabled");
    form.reset();
    frontName.innerText = "Jane Appleseed";
    frontNumber.innerText = "0000 0000 0000 0000";
    frontDateM.innerText = "00";
    frontDateY.innerText = "00";
    cvc.innerText = "000";
})






