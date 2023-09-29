"use strict";

let title_input = document.getElementById("title");
let div_err = title_input.nextElementSibling;

title_input.addEventListener("blur", function(){
    if (localStorage.getItem(title_input.value)){
        div_err.classList.add("invalid");
        div_err.innerHTML = "The task with this title already exists...";
    }
    else{
        div_err.classList.remove("invalid");
        div_err.innerHTML = "";
    };
});

