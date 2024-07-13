"use strict"
/*
"use strict" is a way to opt into a restricted variant of JavaScript.
This mode can be used at the beginning of a script or a function to enforce stricter parsing and error handling.
*/
// alert(3+3) => works in browser not in nodejs. 
console.log(3+3);

let name = "Govardhan"
let age = 18
let isLoggedIn = false
console.log(`
    name: ${typeof name}
    age: ${typeof age}
    isLoggedIn: ${typeof isLoggedIn}
    `)

/*
number => 2 to power 53
bigint
String => 'Single Quotes'/"Double Quotes"
boolean => true/false
null => standalone value & an Object. 
undefined => value is not defined.
symbol
*/ 
console.log(typeof null);
console.log(typeof undefined);