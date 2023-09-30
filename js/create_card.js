"use strict";

class CardObject{
    constructor(title=undefined, content=undefined, category=undefined, priority=undefined){
        this.title = title;
        this.content = content;
        this.category = category;
        this.priority = priority;
        this.card_container = document.getElementById("card-container");
    };

    createDomElement(tagname, css_classes=undefined, text=""){
        let elem = document.createElement(tagname);
        elem.innerHTML = text;
        if (css_classes){
            for(let cl of css_classes){
                elem.classList.add(cl);
            };
        };
        return elem;
    };

    createCardElements(title, content, category, priority){
        let card_div = this.createDomElement("div", ["card", "mt-3"]);
    
        let card_body = this.createDomElement("div", ["card-body", "mt-2",]);
    
        let card_title = this.createDomElement("h5", ["card-title", "text-center",], title);
    
        let p_body = this.createDomElement("p", ["card-body",], content);
    
        let div_cat_pr = this.createDomElement("div", ["col-md-8", "d-flex", "flex-column", "align-items-start", "justify-content-between",]);
    
        let category_div = this.createDomElement("div", [], `<strong>Category:</strong> ${category}`);    
        let priority_div = this.createDomElement("div", [], `<strong>Priority:</strong> ${priority}`);
    
        div_cat_pr.append(category_div);
        div_cat_pr.append(priority_div);
    
        let update_link = this.createDomElement("a", ["btn", "btn-success", "m-2", "p-2"], "Update");
        update_link.dataset.title = title;
        update_link.href = "update_task.html";
        update_link.onclick = function update(event){
            sessionStorage.setItem("update", event.target.dataset.title);
        };
    
        let delete_link = this.createDomElement("a", ["btn", "btn-danger", "m-2", "p-2"], "Delete");
        delete_link.dataset.title = title;
        delete_link.addEventListener("click", new DeleteTaskHandler(delete_link));

        this.buildCard(card_div, card_body, card_title, p_body, div_cat_pr, update_link, delete_link);
    };

    buildCard(card_div, card_body, card_title, p_body, div_cat_pr, update_link, delete_link){
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
