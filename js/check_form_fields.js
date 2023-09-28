"use strict";

function checkFieldIsEmpty(event){
    let input = event.target;
    if(!input.value){
        input.classList.add("invalid");
        input.nextSibling.nextSibling.innerHTML = "This field is empty";
    }
};

function focusFormField(event){
    let input = event.target;
    if (input.classList.contains("invalid")){
        input.classList.remove("invalid");
        input.nextSibling.nextSibling.innerHTML = "";
    }
};
