const year = +prompt("enter a year:")

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            document.getElementById("target").innerHTML = `the year ${year} is a leap year`;
        } else {
            document.getElementById("target").innerHTML = `the year ${year} is not a leap year`;
        } 
    } else {
        document.getElementById("target").innerHTML = `the year ${year} is a leap year`;
    } 
} else {
    document.getElementById("target").innerHTML = `the year ${year} is not a leap year`;
}