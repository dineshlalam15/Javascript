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

let score = 55
console.log(typeof score)
console.log(typeof (score));

let str = "88";
console.log(typeof str);
str = Number(str)
console.log(typeof str);

let str2 = "67ghd"
let stringToNum = Number(str2)
console.log(typeof stringToNum);
console.log(stringToNum) // But NaN is not a number. 
/*
String to Number conversion: 
"33" => 33
"67ghd" => NaN
*/

//true => 1, false => 0, "" => false, "name" => true
isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let someNumber = 69
let stringNumber = String(someNumber)
console.log(someNumber)
console.log(typeof someNumber)