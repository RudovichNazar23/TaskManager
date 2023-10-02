"use strict";


class TaskObject {
    constructor(title, content, category, date_start, date_finish, date_remind, priority){
        this.title = title;
        this.content = content;
        this.category = category;
        this.date_start = date_start;
        this.date_finish = date_finish;
        this.date_remind = date_remind;
        this.priority = priority;
        this.done = false;
    }
}


function createTaskObject(title, content, category, date_start, date_finish, date_remind, priority){
    return new TaskObject(title, content, category, date_start, date_finish, date_remind, priority);
}
