import "./style.css";

window.onload = function() {};

const onlyletters = /^[A-Za-z\s*]+$/;
const name = document.querySelector("#name");
const lastname = document.querySelector("#lastname");
const phonenumber = document.querySelector("#phonenumber");
const cardnumber = document.querySelector("#cardnumber");
const expirationdate = document.querySelector("#expirationdate");
const cvc = document.querySelector("#cvc");
const inputs = document.querySelector("#inputs");
const onlynumbers = /\d/;

name.addEventListener("focusout", e => {
  if (name.value.match(onlyletters)) {
    name.classList.remove("isinvalid");
    name.classList.add("isvalid");
  } else {
    name.classList.remove("isvalid");
    name.classList.add("isinvalid");
  }
});

lastname.addEventListener("focusout", e => {
  if (lastname.value.match(onlyletters)) {
    lastname.classList.remove("isinvalid");
    lastname.classList.add("isvalid");
  } else {
    lastname.classList.remove("isvalid");
    lastname.classList.add("isinvalid");
  }
});

phonenumber.addEventListener("focusout", e => {
  if (phonenumber.value.match(onlynumbers)) {
    phonenumber.classList.remove("isinvalid");
    phonenumber.classList.add("isvalid");
  } else {
    phonenumber.classList.remove("isvalid");
    phonenumber.classList.add("isinvalid");
  }
});

cardnumber.addEventListener("focusout", e => {
  if (cardnumber.value.match(onlynumbers)) {
    cardnumber.classList.remove("isinvalid");
    cardnumber.classList.add("isvalid");
  } else {
    cardnumber.classList.remove("isvalid");
    cardnumber.classList.add("isinvalid");
  }
});
expirationdate.addEventListener("focusout", e => {
  if (expirationdate.value.match(onlynumbers)) {
    expirationdate.classList.remove("isinvalid");
    expirationdate.classList.add("isvalid");
  } else {
    expirationdate.classList.remove("isvalid");
    expirationdate.classList.add("isinvalid");
  }
});

cvc.addEventListener("focusout", e => {
  if (cvc.value.match(onlynumbers)) {
    cvc.classList.remove("isinvalid");
    cvc.classList.add("isvalid");
  } else {
    cvc.classList.remove("isvalid");
    cvc.classList.add("isinvalid");
  }
});

const myform = document.getElementById("myform");

myform.addEventListener("submit", e => {
  e.preventDefault();
  console.log("enviado");
});
