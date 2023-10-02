"use strict";

class ShowTasksHandler extends CardObject {
    handleEvent(event){
        this.checkContent();
    };

    checkContent(){
        if(localStorage.length === 0){
            return this.showMessage();
        }
        else{
            let keys = Object.keys(localStorage);

            for(let key of keys){
                let task_object = JSON.parse(localStorage.getItem(key));
                this.createCardElements(
                    task_object.title, task_object.content, 
                    task_object.category, task_object.priority, 
                    task_object.done
                );
            }
        }
    };

    showMessage(){
        let message = document.createElement("h4");
        message.innerHTML = "<center>You don't have any tasks</center>";
        this.card_container.append(message);
    };
};

window.addEventListener("load", new ShowTasksHandler());
