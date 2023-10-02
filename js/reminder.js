"use strict";

class ReminderHanlder{
    handleEvent(event){
        return this.remind();
    };

    getCurrentDate(){
        const date = new Date();
        let currentDay = String(date.getDate()).padStart(2, '0');
        let currentMonth = String(date.getMonth()+1).padStart(2,"0");
        let currentYear = date.getFullYear();

        let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

        return currentDate;
    };

    remind(){
        let keys = Object.keys(localStorage);
        for(let key of keys){
            let task = JSON.parse(localStorage.getItem(key));
            console.log(task);
            if(task.date_remind === this.getCurrentDate()){
                alert("Reminder for task " + `${task.title}`);
            };
        };
    };
};

window.addEventListener("load", new ReminderHanlder());
