"use strict";


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
};

let form = document.body.querySelector("form");
form.addEventListener("mouseover", new FormHandler());
