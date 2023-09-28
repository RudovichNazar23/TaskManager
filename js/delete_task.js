"use strict";

class DeleteTaskHandler{
    constructor(elem){
        this.elem = elem;
    };

    handleEvent(event){
        let conf_del = confirm("Are you sure???");
        if(conf_del){
            localStorage.removeItem(this.elem.dataset.title);
            location.reload();
        }
    };
};
