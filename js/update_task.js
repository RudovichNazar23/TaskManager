"use strict";

class LoadTaskData{
    constructor(obj_title){
        this.obj = JSON.parse(localStorage.getItem(obj_title));
    };

    handleEvent(event){
        console.log(this.obj.category);
        console.log(this.obj.priority);
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

class UpdateTaskHandler{
    constructor(obj){
        this.task_object = obj;
    };
};


window.addEventListener("load", new LoadTaskData(sessionStorage.getItem("update")));