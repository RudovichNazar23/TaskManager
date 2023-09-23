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

let reminder = document.getElementById("date_remind");

reminder.addEventListener("blur", function(event){
    let err_div = reminder.nextElementSibling;
    if (!(new Date(date_start.value) < new Date(reminder.value) && new Date(reminder.value) < new Date(date_finish.value))){
        err_div.classList.add("invalid");
        err_div.innerHTML = "This date must be between <strong>Date start</strong> and <strong>Date end</strong>";
    }else{
        err_div.classList.remove("invalid");
        err_div.innerHTML = "";
    }
});