"use strict";

function showMenu(event){
        let list = event.target.nextSibling.nextSibling;
        return list.style.display === "none"?list.style.display = "block":list.style.display = "none";
}
