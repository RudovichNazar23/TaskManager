"use strict";

function showMenu(event){
    if (event.target.tagName === "A"){
        let list = event.target.nextSibling.nextSibling;
        list.style.display === "none"?list.style.display = "block":list.style.display = "none";
    }
    else{ return; }  
}
