"use strict";

class MarkDoneHandler{
    constructor(task_title){
        this.task_title = task_title;
    };

    handleEvent(event){
        this.markAsDone();
        location.reload();
    };

    getTaskObject(){
        let task_object = JSON.parse(localStorage.getItem(this.task_title));
        return task_object;
    };

    markAsDone(){
        let task = this.getTaskObject();
        localStorage.removeItem(this.task_title);

        task.done = true;
        localStorage.setItem(task.title, JSON.stringify(task));
    };
};

