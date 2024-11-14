'use strict';
const firstYear = +prompt("enter starting year:");
const lastYear = +prompt("enter ending year:");
const yearList = document.getElementById("target");
yearList.innerHTML = "";

for( let i = firstYear; i <= lastYear; i++) {
    if (i % 4 == 0) {
        if (i % 100 == 0) {
            if (i % 400 == 0) {
               yearList.innerHTML += `<li>${i}</li>`;
            } 
        } else {
            yearList.innerHTML += `<li>${i}</li>`;
        }
        } 
    } 

// monke


