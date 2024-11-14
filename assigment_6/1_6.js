'use strict';

const pressed = +confirm("Should I calculate the square root?")

if (pressed == true) {
    const num = prompt("giv number: ");
    if (num >= 0) {
        document.getElementById("target").innerHTML = `the square root of ${num} is ${Math.sqrt(num)}.`
    } else {
        document.getElementById("target").innerHTML = `the square root of a negative number is not defined.`
    }
} else {
    document.getElementById("target").innerHTML = "the square root is not calculated.";
}