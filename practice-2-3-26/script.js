
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

if (today.getMonth() === 1) {
    alert("January");
}
if (today.getMonth() === 2) {
    alert("February!");
}
    else {
        alert("Not February!");
    }


if (today.getMonth() === 3) {
    alert("March");
}
if (today.getMonth() === 4) {
    alert("April");
}
if (today.getMonth() === 5) {
    alert("May");
}
if (today.getMonth() === 6) {
    alert("June");
}
if (today.getMonth() === 7) {
    alert("July");
}
if (today.getMonth() === 8) {
    alert("August");
}
if (today.getMonth() === 9) {
    alert("September");
}
if (today.getMonth() === 10) {
    alert("October");
}
if (today.getMonth() === 11) {
    alert("November");
}
if (today.getMonth() === 12) {
    alert("December");
}
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getTime());

alert(today);