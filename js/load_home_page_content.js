"use strict";

class ShowTasksHandler {
    constructor(){
        this.card_container = document.getElementById("card-container");
    };

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
                this.createCard(
                    task_object.title, task_object.content, 
                    task_object.category, task_object.priority
                );
            }
        }
    };

    showMessage(){
        let message = document.createElement("h4");
        message.innerHTML = "<center>You don't have any tasks</center>";
        this.card_container.append(message);
    };

    createDomElement(tagname, css_classes=undefined){
        let elem = document.createElement(tagname);
        if (css_classes){
            for(let cl of css_classes){
                elem.classList.add(cl);
            }
        }
        return elem;
    };

    createCard(title, content, category, priority){
        let card_div = this.createDomElement("div", ["card", "mt-3"]);

        let card_body = this.createDomElement("div", ["card-body", "mt-2",]);

        let card_title = this.createDomElement("h5", ["card-title", "text-center",]);
        card_title.innerHTML = title;

        let p_body = this.createDomElement("p", ["card-body",]);
        p_body.innerHTML = content;

        let div_cat_pr = this.createDomElement("div", ["col-md-8", "d-flex", "flex-column", "align-items-start", "justify-content-between",]);

        let category_div = this.createDomElement("div", []);
        category_div.innerHTML = `<strong>Category:</strong> ${category}`;

        let priority_div = this.createDomElement("div", []);
        priority_div.innerHTML = `<strong>Priority:</strong> ${priority}`;

        div_cat_pr.append(category_div);
        div_cat_pr.append(priority_div);

        let update_link = this.createDomElement("a", ["btn", "btn-success", "m-2", "p-2"]);
        update_link.innerHTML = "Update";
        update_link.dataset.title = title;
        update_link.href = "update_task.html";
        update_link.onclick = function update(event){
            sessionStorage.setItem("update", event.target.dataset.title);
        };

        let delete_link = this.createDomElement("a", ["btn", "btn-danger", "m-2", "p-2"]);
        delete_link.innerHTML = "Delete";
        delete_link.dataset.title = title;
        delete_link.addEventListener("click", new DeleteTaskHandler(delete_link));

        this.card_container.append(card_div);

        card_div.append(card_body);
        card_body.append(card_title);

        card_body.append(this.createDomElement("hr"));

        card_body.append(p_body);

        card_body.append(this.createDomElement("hr"));

        card_body.append(div_cat_pr);

        card_body.append(this.createDomElement("hr"));

        card_body.append(update_link);
        card_body.append(delete_link);
    };
};

window.addEventListener("load", new ShowTasksHandler());
