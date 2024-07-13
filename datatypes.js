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
Primitive Datatypes - 7 Types: 
Number => 2 to power 53
BigInt
String => 'Single Quotes'/"Double Quotes"
Boolean => true/false
null => standalone value & an Object. 
undefined => value is not defined.
Symbol

Non-Primitive Datatypes: 
Array
Objects
Functions
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

let sym1 = Symbol();
let sym2 = Symbol();
console.log(sym1 === sym2);

sym1 = Symbol("description");
sym2 = Symbol("description");
console.log(sym1 === sym2);
// The description is optional and only used for debugging purposes.

let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);
console.log(typeof bigNumber)

let bigInt = BigInt("1234567890123456789012345678901234567890");
console.log(bigInt);
console.log(typeof bigInt)

let a = 1234567890123456789012345678901234567890n;
let b = 9876543210987654321098765432109876543210n;
console.table([
    {operation: 'sum', answer: a + b, datatype: typeof(a + b)},
    {operation: 'difference', answer: a - b, datatype: typeof(a - b)},
    {operation: 'product', answer: a * b, datatype: typeof(a * b)},
    {operation: 'quotient', answer: a / b, datatype: typeof(a / b)},
    {operation: 'remainder', answer: a % b, datatype: typeof(a % b)},
])

const arr = ["Daemon Targaryen", "Rogue Prince", "Caraxes", 45]
let myObj = {
    name: "Rhaneyra Targaryen",
    dragon: "syrax",
    Title: "Mother of the dragons" 
}
console.log(arr)
console.log(myObj)
console.log(typeof arr)
console.log(typeof myObj)