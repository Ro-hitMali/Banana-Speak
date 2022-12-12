var buttonTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


console.log(outputDiv);

function clickHandler() {
    outputDiv.innerText = "jfbgfufgfuf" + textInput.value;
}


buttonTranslate.addEventListener("click", clickHandler);


