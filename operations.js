let value = 3
let negValue = -value
console.log(negValue);
console.log(typeof negValue)

console.log(2+22);
console.log(44-6587);
console.log(9*6);
console.log(2/3);
console.log(2%3);
console.log(4**6);

let str1 = "Vishnu"
let str2 = "Gudipelly"
let str3 = str1 + " " + str2
console.log(str3);

console.log("1" + 2)
console.log(1 + "2");
console.log("1" + 2 + 3)
console.log(9 + 9 + "4")

console.log(3+4*5%3) // Wrong practice of code
console.log(((3+4)*5)%2) // Always try to use paranthesis based on your process of calculation

console.log(true)
console.log(Number(true));
console.log(+true);
console.log(+"")

// Always code readability should be the utmost priority. 

let counter = 111
console.log(counter++);
console.log(counter)
console.log(++counter);

let negCounter = 121
console.log(--negCounter);
console.log(negCounter);
console.log(negCounter--);
console.log(negCounter);

console.log(2 > 3);
console.log(2 >= 2);
console.log(2 != 2)
console.log("Vhagar" > 'Syrax')

console.log(null == 0)
console.log(null > 0)
console.log(null < 0);
console.log(null <= 0)
console.log(null >= 0);
/*
== operator performs type coercion. So, null == 0 gives false. 
> or < operator converts null into 0. So,
null > 0 gives false.
null >= 0 gives true.
null <= 0 gives true. 
*/

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined <= 0);
// Even in > or < comparison, undefined is not converted into any number. So, it always gives only false. 

console.log("5" == 5);
console.log("5" === 5);
console.log(true == 1);
console.log(true === "1");
// === strict comparison. Both datatypes and as well as value should also be equal. 