/*
DONT USE VAR, unsafe
var a = 1;

USE LET for variables
let b = 2;

Constant cannot change
const c = 3;

Variable names cannot start with a number and should not include spaces or operators.
JS is a loosely typed language. Varaiblaes can be assigned different types.

Equality operator (==) is used to compare values and types.
Inequality operator (!=) is used to compare values and types.

Strict equality operator (===) is used to compare values and types.
Strict inequality operator (!==) is used to compare values and types.
*/

let today = new Date();
console.log(today);
console.dir(today);

let year = today.getFullYear();
console.log(year);
console.dir(year);

function getTime(today) {
    return today.toLocaleTimeString();
}

function getMonth(today) {
    if (today.getMonth() === 1) {
        return ("January");
    } else if (today.getMonth() === 2) {
        return ("February!");
    } else if (today.getMonth() === 3) {
        return ("March");
    } else if (today.getMonth() === 4) {
        return ("April");
    } else if (today.getMonth() === 5) {
        return ("May");
    } else if (today.getMonth() === 6) {
        return ("June");
    } else if (today.getMonth() === 7) {
        return ("July");
    } else if (today.getMonth() === 8) {
        return ("August");
    } else if (today.getMonth() === 9) {
        return ("September");
    } else if (today.getMonth() === 10) {
        return ("October");
    } else if (today.getMonth() === 11) {
        return ("November");
    } else if (today.getMonth() === 12) {
        return ("December");
    } else {
        return ("Invalid month");
    }
}

document.querySelector("#month").textContent = getMonth(today);
document.querySelector("#date").textContent = today.getDate();

function displayDate() {
    let h1Element = document.querySelector("#h1Text");
    h1Element.textContent = today.toDateString();
}

function displayTime() {
    let h2Element = document.querySelector("#h2Text");
    h2Element.textContent = getTime(today);
}