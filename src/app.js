import "./style.css";

/*
window.onload = function () {

};
const name= document.querySelector("#name");
const submitbutton= document.querySelector("#submitButton")

submitbutton.addEventListener('submit',(e) =>(
e.preventDefault();
if (name.ariaValueMax.length >= 8){
    console.log("si es correcto")
} else (
    console.log("no es correcto"))
)
*/
const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", e => {
  e.preventDefault();
  console.log("enviado");
});
