const tinderUser1 = new Object()
const tinderUser2 = {}
console.log(tinderUser1);
console.log(tinderUser2);
// Both initialize empty objects. 

tinderUser1.name = "Thomas Shelby"
tinderUser1.jobTitle = "Gypsy"
tinderUser2.name = "Grace"
tinderUser2.jobTitle = "Bar Maid"
console.log(tinderUser1);
console.log(tinderUser2);

const regualrUser = {
    email: "arthurshelby09@shelby.ac.in",
    fullName: {
        firstName: "Arthur",
        lastName: "Shelby"
    },
    jockeyRating: 4.5,
    // age: 41
}
console.log(regualrUser.fullName);
console.log(regualrUser);
console.log(regualrUser.age ? regualrUser.age : "age field doesn't exist");

const obj1 = {1: "a", 2: "b"}
const obj2 = {9: "i", 77: "$yrax"}
const obj3 = {obj1, obj2}
console.log(obj3);
console.log(obj3.obj2["77"]);

const obj4 = Object.assign({}, obj3, {name: "John Shelby", age: 31})
console.log(obj4);
console.log(Object.keys(obj4));
console.log(Object.values(obj4));
console.log(Object.entries(obj4));
console.log(obj4.hasOwnProperty('flight'));

const course= {
    coursename : "Cohort 3.0",
    price: 6500,
    Instructor: "Harkirat"
}
console.log(course.Instructor);

const {Instructor} = course //Better to use like this. 
console.log(Instructor);
const {Instructor: teacher} = course
console.log(teacher);

