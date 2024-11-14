'use strict';

let num = +prompt('how many dice would you like throw?');
let sum = 0;

for (let i = 1; i <= num; i++){
    sum += Math.floor(Math.random() * 6 + 1);
}

console.log(`the sum of ${num} dice thrown is ${sum}.`);