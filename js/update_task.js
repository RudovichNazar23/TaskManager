"use strict";

class LoadTaskData {
    constructor(obj_title){
        this.obj = JSON.parse(localStorage.getItem(obj_title));
    };

    handleEvent(event){
        this.setInputFieldValue();
        this.setSelectFieldValue();
    };

    setInputFieldValue(){
        let inputs = Array.from(document.body.querySelectorAll("input"));
        inputs.push(document.body.querySelector("textarea"));

        for(let input of inputs){
            input.value = this.obj[input.id];
        };
    };

    setSelectFieldValue(){
        let categories = document.body.querySelectorAll("select")[0];
        let priorities = document.body.querySelectorAll("select")[1];

        categories.value = this.obj.category;
        priorities.value = this.obj.priority;
    };
};

class UpdateTaskHandler extends SaveTaskObject {
    constructor(obj_title){
        super();
        this.task_title = obj_title;
    };

    handleEvent(event){
        event.preventDefault();
        this.removeFromSessionStorage();

        localStorage.removeItem(this.task_title);
        this.setUpdateToSessionStorage();

        this.addToLocalStorage(this.getTaskObject());
        location.reload();
    };

    removeFromSessionStorage(){
        sessionStorage.removeItem("update");
    };

    setUpdateToSessionStorage(){
        sessionStorage.setItem("update", this.getTaskObject().title);
    };
};


window.addEventListener("load", new LoadTaskData(sessionStorage.getItem("update")));

button =  document.body.querySelector("button[type=submit]");
button.addEventListener("click", new UpdateTaskHandler(sessionStorage.getItem("update")));
