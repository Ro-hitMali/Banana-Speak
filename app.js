var buttonTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector('#txt-input');
console.log(txtInput);

function clickHandler() {
    console.log("clicked");
    console.log("Input", txtInput.value);
}


buttonTranslate.addEventListener("click", clickHandler);


