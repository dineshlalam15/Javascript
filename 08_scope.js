// {} this is called a scope. 

/*
1. Global Scope
2. Block Scope
*/

let a = 45
const b = 11
var c = 66
console.log(`a: let, b: const, c: var`);
console.log(`'a' in global scope: ${a}`);
console.log(`'b' in global scope: ${b}`);
console.log(`'c' in global scope: ${c}`);


if(true){
    a = 1
    // b = 2 : givers error because const type can't be changed
    c = 3
    console.log(`'a' in block scope: ${a}`);
    console.log(`'b' in block scope: ${b}`);
    console.log(`'c' in block scope: ${c}`);

    let new_a = 1000
    var new_b = 2000
    console.log(`'new_a' in block scope: ${new_a}`);
    console.log(`'new_b' in block scope: ${new_b}`);
}

console.log(`'a' after block scope: ${a}`);
console.log(`'b' after block scope: ${b}`);
console.log(`'c' after block scope: ${c}`);

// console.log(`'new_a' after scope: ${new_a}`);
// console.log(`'new_b' after scope: ${new_b}`);
// Above both lines give error because new_a & new_b are initialized inside the if block. 