"use strict";


function addToLocalStorage(taskobj){
    localStorage.setItem(taskobj.title, JSON.stringify(taskobj));
};
