"use strict";


let date_start = document.getElementById("date_start");
let date_finish = document.getElementById("date_finish");

date_start.addEventListener("blur", function(event){
    let err_div = date_start.nextElementSibling;

    let ds = new Date(date_start.value);
    let current_date = new Date();

    if(ds < current_date){
        err_div.classList.add("invalid");
        err_div.innerHTML = "You cannot choose this date";
    }
    else{
        err_div.classList.remove("invalid");
        err_div.innerHTML = "";
    }
});

date_finish.addEventListener("blur", function(event){
    if(!date_start.value || !date_finish.value){ return; }

    let err_div = date_finish.nextElementSibling;

    let ds = new Date(date_start.value);
    let df = new Date(date_finish.value);

    if(df <= ds){
        err_div.classList.add("invalid");
        err_div.innerHTML = "This is incorrect date";
    }
    else{
        err_div.classList.remove("invalid");
        err_div.innerHTML = "";
    }
});