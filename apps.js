const btnTranslate = document.querySelector("#btn-translate");
console.log(btnTranslate);

let inputTxt = document.querySelector("#txt-input");
console.log(inputTxt);

let outputDiv = document.querySelector("#output");
console.log(outputDiv);

const serviceURL = "https://api.funtranslations.com/translate/klingon.json";

const ConstructApi = (text) => `${serviceURL}?text=${text}`;

const errorHandler = (error) => console.log("error occured: ", error);

const clickEventHandler = (text) => {
  let inputText = inputTxt.value;
  fetch(ConstructApi(inputText))
    .then((response) => response.json())
    .then((json) => {
      let translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
};

btnTranslate.addEventListener("click", clickEventHandler);
