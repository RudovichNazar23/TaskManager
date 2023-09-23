"use strict";


function checkFieldIsEmpty(event){
    let input = event.target;
    if(!input.value){
        input.classList.add("invalid");
        input.nextSibling.nextSibling.innerHTML = "This field is empty";
    }
};

function focusFormField(event){
    let input = event.target;
    if (input.classList.contains("invalid")){
        input.classList.remove("invalid");
        input.nextSibling.nextSibling.innerHTML = "";
    }
};

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

class FormHandler{
    handleEvent(){
        this.checkAllformFields();
    };

    checkDivError(){
        let err_divs = document.body.querySelectorAll("div[id=error]");
        for (let div of err_divs){
            if(div.classList.contains("invalid")){
                return true;
            }
        }
        return false;
    };
    
    checkAllformFields(){
        let inputs = Array.from(document.body.querySelectorAll("input"));
        inputs.push(document.querySelector("textarea"));
        let button = document.body.querySelector("button[type=submit]");
        let empty_fields = inputs.filter((node) => !node.value);
    
        if (empty_fields.length >= 1 || this.checkDivError()){
            button.classList.add("disabled");
        }
        else{ button.classList.remove("disabled");}
    };
}

let form = document.body.querySelector("form");
form.addEventListener("mouseover", new FormHandler());

let button = document.body.querySelector("button");
button.addEventListener("click", new SaveTaskObject());
