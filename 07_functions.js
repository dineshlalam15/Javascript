function add1(num1, num2){
    console.log(num1 + num2)
}
function add2(num1, num2){
    return num1 + num2
}

const ans1 = add1(12,13)
console.log("ans1:", ans1); // shows undefined because add1 function doesn't return any value. 
add1(2,3)

add2(4,5)
const ans2 = add2(4,5)
console.log("ans2:", ans2);

function loggedIn(username){
    if(username !== undefined){
        return `${username} just logged in.`
    } else{
        return `username can't be empty.`
    }
}
loggedIn("Durga Prasad A") // Doesnt give any value. 
console.log(loggedIn("Durga Prasad A"))
console.log(loggedIn())

function defaultCheck(username = "Govardhan"){
    if(!username){
        console.log("Please enter valid username")
        return
    } return `${username} just logged in.`
}
console.log(defaultCheck("Durga Prasad A"))
console.log(defaultCheck()) 
/*
username = "Govardhan" as a paramter set's the default value. 
Everytime your username is empty, function consider's the default value. 
*/

function priceVariation(...num){
    return num
}
console.log(priceVariation(33,444,5555));

const user = {
    name: "Bhukta Maruvada",
    room_no: 102
}
function handleObject(anyObject){
    console.log(`${anyObject.name} lives in room no ${anyObject.room_no}.` );
}
handleObject(user)
handleObject({
    name: "Sujai Boddana",
    room_no: 74
})

const arr = [1,2,54,32,768,-980]
function getThird(array){
    return array[2]
}
console.log(getThird(arr));
console.log(getThird([44,55,67,89,-90876]))

console.log(sub(999,3411)); // We are able to call the function even before initialization.
function sub(num1, num2){
    return num2 - num1
}

// console.log(diff(22,32)): can't access as it is called before initialization. 
const diff = function sub(num1, num2){
    return num2 - num1
}
console.log(diff(786,876))