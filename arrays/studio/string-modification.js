const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let lastThree = str.slice(0,3);
str2 = str.slice(3) +lastThree;
console.log(str);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${str} + ${str2}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userInput = input.question("Enter the number of letters to relocate: ");


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (userInput > str.length){
    userInput = 3
    let slice = str.slice(0,userInput);
    let str3 = str.slice(userInput) + slice;
    console.log(`User input was longer than the word, defaulted to 3 ${str3}`);
}
else {
    let slice = str.slice(0,userInput);
    let str3 = str.slice(userInput) + slice;
    console.log(str3);
}