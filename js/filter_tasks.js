"use strict";


class FilterTasksHandler extends CardObject {
    handleEvent(event){
        this.selectFilter(event);
        this.clearCardContainer();
        let tasks = this.sortTasks(event.target.innerHTML);

        if(tasks.length === 0){
            this.createMessage();
        }
        else{
            for(let task of tasks){
                this.createCardElements(task.title, task.content, task.category, task.priority);
            }
        }
    };

    sortTasks(param){
        let filtered_tasks = [];
        let keys = Object.keys(localStorage);
    
        for(let key of keys){
            let taskobj = JSON.parse(localStorage.getItem(key));
            if(taskobj["category"] === param || taskobj["priority"] === param){
                filtered_tasks.push(taskobj);
            };
        };
        return filtered_tasks;
    };

    createMessage(){
        let message = document.createElement("a");
        message.innerHTML = "<center>There aren't any tasks with selected filter</center>";
        message.href = "#";
        message.addEventListener("click", function(event){
            event.preventDefault();
            event.target.classList.add("title");
            location.reload();
        });
        this.card_container.append(message);
    };

    selectFilter(event){
        let selected = document.body.querySelectorAll(".selected");
        for(let elem of selected) {
            elem.classList.remove('selected');
        };
        event.target.classList.toggle("selected");
    };

    clearCardContainer(){
        let container = document.getElementById("card-container");
        while(container.firstChild){
            container.removeChild(container.lastChild);
        }
    };
};


let ul_category = document.getElementById("category");
let ul_priority = document.getElementById("priority");
ul_category.addEventListener("click", new FilterTasksHandler());
ul_priority.addEventListener("click", new FilterTasksHandler());
