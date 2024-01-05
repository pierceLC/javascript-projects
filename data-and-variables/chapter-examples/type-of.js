const input = require('readline-sync');

let info = input.question("Please enter your age: ");
//The user enters 25.

console.log(typeof info);
let newType = Number(info);
console.log(typeof newType);
let backToString = newType.toString();
console.log(typeof backToString);



