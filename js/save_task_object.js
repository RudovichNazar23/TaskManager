"use strict";

class SaveTaskObject{
    handleEvent(event){
        event.preventDefault();
        this.addToLocalStorage(this.getTaskObject());
        location.reload();
    };

    getTaskObject(){
        let title = document.getElementById("title").value;
        let content = document.getElementById("content").value;
        let date_start = document.getElementById("date_start").value;
        let date_finish = document.getElementById("date_finish").value;
        let date_remind = document.getElementById("date_remind").value;
        let category = document.getElementById("category").value;
        let priority = document.getElementById("priority").value;

        let taskObject = createTaskObject(title, content, category, date_start, date_finish, date_remind, priority);
        return taskObject;
    };

    addToLocalStorage(obj){
        localStorage.setItem(obj.title, JSON.stringify(obj));
    };
};

let button = document.body.querySelector("button");
button.addEventListener("click", new SaveTaskObject());
