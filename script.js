var btntextInput = document.querySelector("#input");
var btnTranslate = document.querySelector("#translate-btn");
var btntextOutput = document.querySelector("#output");

var translatorAPI =
  "https://api.funtranslations.com/translate/german-accent.json";

function getTranslatedURL(text) {
  return translatorAPI + "?text=" + text;
}
function errorHandler(error) {
  // console.log('Error occured', error);
  btntextOutput.innerText = "Oops !! something is broken. ";
}
function clickHandler() {
  var textInput = btntextInput.value;
  //call server for processing
  fetch(getTranslatedURL(textInput))
    .then((response) => response.json())
    .then((data) => (btntextOutput.innerText = data.contents.translated))
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
