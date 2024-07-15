const name = "Thomas"
const murders = 112
console.log(name + " " + murders)

// Basic Functions: 
const shelby = new String('Arthur')
console.log(shelby[0])
console.log(shelby.length);
console.log(shelby.toLowerCase())
console.log(shelby.toUpperCase());
console.log(shelby.charAt(3));
console.log(shelby.indexOf('u'));
console.log(`First 'r': ${shelby.indexOf('r')}, Last 'r': ${shelby.lastIndexOf('r')}`);

// Substrings
const other = new String('John-Shelby')
const newString = other.substring(0,7) // First Index included. Last Index excluded. 
console.log(newString);

// slice
const sliceString1 = other.slice(1,5)
console.log(sliceString1);
const sliceString2 = other.slice(-9, 4)
console.log(sliceString2);

// trim
const newName = "           Grace       "
console.log(newName);
console.log(newName.trim());

//replace
const url = "https://x.com/dineeeshhuu"
console.log(url);
console.log(url.replace('ineeeshhuu', 'ineshlalam15'));

console.log(url.includes('x.com'))
console.log(url.includes('sanjay'))

// Convert into Array
const arr1 = url.split('/')
console.log(arr1);
const arr2 = name.split('')
console.log(arr2);