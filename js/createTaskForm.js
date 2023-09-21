"use strict";

// Add form validators
function checkFieldIsEmpty(event){
    let input = event.target;
    if(!input.value){
        input.classList.add("invalid")
        input.nextSibling.nextSibling.innerHTML = "This field is empty"
    }
};

function focusFormField(event){
    let input = event.target;
    if (input.classList.contains("invalid")){
        input.classList.remove("invalid");
        input.nextSibling.nextSibling.innerHTML = "";
    }
};

function getFormData(event){
    event.preventDefault();

    if (!event.target.tagName === "BUTTON"){ return; }

    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    let date_start = document.getElementById("date_start").value;
    let date_finish = document.getElementById("date_finish").value;
    let reminder = document.getElementById("date_remind").value;
    let category = document.getElementById("category").value;
    let priority = document.getElementById("priority").value;

    let taskObject = createTaskObject(title, content, date_start, date_finish, reminder, category, priority);
    addToLocalStorage(taskObject);
}
