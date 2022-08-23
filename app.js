var btnTranslate=document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var outputdiv=document.querySelector("#output")

///**test server*/   var serverURL ="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL ="https://api.funtranslations.com/translate/minion.json"

function getTranslatorURL(text){
    return serverURL +"?" + "text=" +text
}

function errorhandler(error) {
    console.log("error occured",error)
    alert("Something wrong with server try after sometime")
}

function clickEventhandler() {
    var inputText = txtInput.value;
    fetch(getTranslatorURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText=json.contents.translated;
            outputdiv.innerText=translatedText
        })
        .catch(errorhandler)
}

btnTranslate.addEventListener("click", clickEventhandler)