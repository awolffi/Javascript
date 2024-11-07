'use strict';

let randomInt = Math.floor(Math.random() * 4 + 1);

let mage_name =  prompt('whats your name, young mage? ')

if (randomInt == 1) {
    document.getElementById("target").innerHTML = `${mage_name}, you are you are Ravenclaw`; 
}
else if (randomInt == 2) {
    document.getElementById("target").innerHTML = `${mage_name}, you are you are Hufflepuff`;
}
else if (randomInt == 3) {
    document.getElementById("target").innerHTML = `${mage_name}, you are you are Slytherin`;
    }
else {
    document.getElementById("target").innerHTML = `${mage_name}, you are you are Gryffindor`;
}