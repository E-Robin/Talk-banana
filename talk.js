var btnTranslate=document.querySelector("#btn-transfer");
var txtInput=document.querySelector("#txt-input");
var divOutput=document.querySelector("#output");

// divOutput.innerText="Robin singh Gusain"
document.getElementById("output").innerText="robin singh is great "





btnTranslate.addEventListener("click",clickHandler);
function clickHandler(){
    console.log("clickedd!!!");
    console.log("input:", txtInput.value);
    divOutput.innerText="hey robin :  " + txtInput.value;
}

// btnTranslate.addEventListener("click",function clickEventHandler ()
// {
//     console.log("clicked");
// })

