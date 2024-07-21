// Objects can be declared using literals & constructors. 
// singleton : when created using constructors

const mySymbol = Symbol("Key1")

// Methods to create a object
Object.create(null) // using constructor: Assigned null because it can't be undefined. Gives error. 
const obj = {
    name: "Thomas Shelby",
    age: 19,
    location: "Birmingham",
    codes: [22,31,90,44],
    industry: "Shelby Ltd",
    "occupation": "Imports & Exports, Horse Race's",
    [mySymbol]: "@#$%!@^%"
} // Normal way of declaring an object.

console.log(obj.name);
console.log(obj.codes[3]);
console.log(obj["age"]);
console.log(obj.occupation);
console.log(obj["occupation"]);
console.log(obj[mySymbol]);
console.log(obj);

obj.codes = [{"Arthur": "Commander"}, {"John": "Bar & Club Owner"}, {"Poly": "Treasurer"}, {"Lizzie": "Book Keeper"}]
console.log(obj.codes[1]);

Object.freeze(obj) // Now no one can change anything in the object. 
obj.name = "Arthur Shelby"
console.log(obj); // You won't get any error at the sametime nothing will be changed. 