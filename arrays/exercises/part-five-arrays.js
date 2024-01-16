let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split());      // Splits the string into an array of words
console.log(str.split('e'));   // Splits the string at each 'e'
console.log(str.split(' '));   // Splits the string into an array of words
console.log(str.split(''));    // Splits the string into an array of characters
//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join());      // Joins the array elements into a string with the default separator (comma)
console.log(arr.join('a'));   // Joins the array elements into a string with 'a' as the separator
console.log(arr.join(' '));   // Joins the array elements into a string with a space as the separator
console.log(arr.join(''));    // Joins the array elements into a string with no separator
//3) Do split or join change the original string/array?
console.log("Neither split nor join modify the original string or array; they return new values.");

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold.split(',').sort().join(','));