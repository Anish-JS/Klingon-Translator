var btnTranslate = document.querySelector("#btn-translate");
console.log(btnTranslate);

var inputTxt = document.querySelector("#txt-input");
console.log(inputTxt);

var outputDiv = document.querySelector("#output");
console.log(outputDiv);

var serviceURL = "https://api.funtranslations.com/translate/klingon.json";

function ConstructApi(text) {
  return serviceURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured: ", error);
}

function clickEventHandler(text) {
  var text = inputTxt.value;
  fetch(ConstructApi(text))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickEventHandler);
