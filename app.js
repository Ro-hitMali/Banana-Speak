var buttonTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL (input){
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error){
    console.log("Error occured", error)
    alert("something wrong with server. Try again after some time!! Sorry for the inconvenience caused")
}

function clickHandler() {
  //  outputDiv.innerText = "jfbgfufgfuf" + textInput.value;

  var inputText = textInput.value;

  //calling server for processing
  fetch(getTranslationURL(inputText)) 
  .then(response => response.json())
  .then(json => {
    var translateTxt = json.content.translated
    outputDiv.innerText = translateTxt;
   })
    .catch(errorHandler)
};

buttonTranslate.addEventListener("click", clickHandler);


