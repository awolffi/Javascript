'use strict';
let x = +prompt('enter first integer: ');
let y = +prompt('enter second integer: ');
let z = +prompt('enter third integer: ');

let sum = x + y + z;
let product = x * y * z;
let average = (x + y + z) / 3;

document.getElementById("target1").innerHTML = "the sum of " + x + ', ' + y + ' and ' + z + " is " + sum + ".";
document.getElementById("target2").innerHTML = "the product of " + x + ", " + y + ", and " + z + " is " + product + ".";
document.getElementById("target3").innerHTML = "the average of " + x + ", " + y + ", and " + z + " is " + average + ".";

