import "./style.css";

window.onload = function() {};

const onlyletters = /^[A-Za-z/S*]+$/;
const name = document.querySelector("#name");
const lastname = document.querySelector("#lastname");
const phonenumber = document.querySelector("#phonenumber");
const cardnumber = document.querySelector("#cardnumber");
const expirationdate = document.querySelector("#expirationdate");
const cvc = document.querySelector("#cvc");
const buttonsubmit = document.querySelector("#buttonsubmit");
const inputs = document.querySelector("#inputs");

name.addEventListener("focusout", e => {
  if (name.value.match(onlyletters)) {
    name.classList.remove("isinvalid");
    name.classList.add("isvalid");
  } else {
    name.classList.remove("isvalid");
    name.classList.add("isinvalid");
  }
});
