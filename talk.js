var btnTranslate=document.querySelector("#btn-transfer");
var txtInput=document.querySelector("#txt-input");
var divOutput=document.querySelector("#output");

// var serverURL = "https://api.funtranslations.com/translate/minion.json*"//
var url="https://still-coast-73804.herokuapp.com/api/"


function getTranslationURL (inputText){
    console.log(url +  inputText);
    return url +  inputText ;
}

function errorHandler(error){
    console.log("error occured in this site", error);
    alert("something gone wrong with you")
}

// divOutput.innerText="Robin singh Gusain"
// document.getElementById("output").innerText="robin singh is great "







function clickHandler(){
    var inputText =txtInput.value;
    console.log(inputText) ;
// calling server for procesing
fetch(getTranslationURL(inputText))
.then(response=>response.json())
.then(json=>{
    var translatedText=json.content;
    divOutput.innerText=translatedText;
})
.catch(errorHandler)


}
btnTranslate.addEventListener("click",clickHandler);

// function clickHandler(){
//     console.log("clickedd!!!");
//     console.log("input:", txtInput.value);
//     divOutput.innerText="hey robin :  " + txtInput.value;
// }




// btnTranslate.addEventListener("click",function clickEventHandler ()
// {
//     console.log("clicked");
// })

