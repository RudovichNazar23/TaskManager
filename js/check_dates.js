"use strict";

class BaseDateHandler{
    constructor(elem){
        this.target = elem;
        this.current_date = new Date();
        this.error_div = elem.nextElementSibling;
    }

    handleEvent(){
        this.checkdate();
    }

    checkdate(){
        return;
    }

    addError(error_message){
        this.error_div.classList.add("invalid");
        this.error_div.innerHTML = error_message;
    }
    
    removeError(){
        this.error_div.classList.remove("invalid");
        this.error_div.innerHTML = "";
    }

    getDateStart(){
        return document.getElementById("date_start").value;
    }

    getDateFinish(){
        return document.getElementById("date_finish").value;
    }
}

class DateStartHandler extends BaseDateHandler{
    checkdate(){
        const elem_date = new Date(this.target.value);

        if(elem_date < this.current_date){
            this.addError("You cannot choose this date")
        }
        else{
            this.removeError();
        }
    }
};

class DateFinishHandler extends BaseDateHandler{
    checkdate(){
        const ds = new Date(this.getDateStart());
        const df = new Date(this.target.value);

        if(df <= ds){
            this.addError("This is incorrect date");
        }
        else{
            this.removeError();
        }
    }
};

class ReminderHandler extends BaseDateHandler{
    checkdate(){
        let reminder_date = new Date(this.target.value);
        const date_start = new Date(this.getDateStart());
        const date_finish = new Date(this.getDateFinish());

        if (!(date_start < reminder_date && reminder_date < date_finish)){
            this.addError("This date must be between <strong>Date start</strong> and <strong>Date end</strong>");
        }
        else{
            this.removeError();
        }
    }
};


let date_start = document.getElementById("date_start");
let date_finish = document.getElementById("date_finish");
let reminder = document.getElementById("date_remind");

reminder.addEventListener("blur", new ReminderHandler(reminder));
date_start.addEventListener("blur", new DateStartHandler(date_start));
date_finish.addEventListener("blur", new DateFinishHandler(date_finish));
