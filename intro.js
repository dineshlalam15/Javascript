var a = "Thomas Shelby"
let b = "Peaky Blinders"
const c = 45
console.log(`
    Name: ${a}
    Code: ${b}
    Batch: ${c}
`)
console.table([a,b,c])

const accountId = 523981
const accountName = "Arthur Shelby"
const accountStatus = "Open"
InterestRate = "9.1%"
console.table([
    { key: 'accountId', value: accountId },
    { key: 'accountName', value: accountName },
    { key: 'accountStatus', value: accountStatus },
    { key: 'InterestRate', value: InterestRate }
]);

a = "Dinesh Kumar"
b = "$yrax"
console.log("Name:", a + ", Code:", b)
// c cant be changed because it is a const type.

const data = {
    age: 21,
    Designation: "SDE-1",
    Company: "Google"
}
function fetchData() {
    console.log("Fetching data:", data);
    if (!data.name) {
        console.error("Data name is missing");
    }
}
fetchData();

console.error("This is an error message");
console.error(new Error(c = 77)); 