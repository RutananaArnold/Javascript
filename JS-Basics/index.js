// variable
var name1 ="arnold";
console.log(name1);

let lastName ="arnold";
console.log(lastName);

// constants
const interestRate = 0.3;
console.log(interestRate);

// type of variables
let x = typeof name1
console.log(x);

// objects
let person = {
    gender: "male",
    age: 150
}

console.log(person);

// Dot notation
person.gender = "brenold"

console.log(person.gender);

// for (item in person) {
//     if (item == "male") {
//         console.log("yes")
//     }
// }

// Arrays
let selectedColors = ['red', 'blue', 'pink']
console.log(selectedColors[0]);

// adding itams in an array
selectedColors[3] = "beal";
console.log(selectedColors);

// changing a field in an array
selectedColors[0] = "black";
console.log(selectedColors);

// functions
 function Calc(coin) {
     console.log("Your name is " + coin);
 }

 Calc("JONH")

 function square(number) {
    return number*number;
 }

 let number = square(4);
 console.log(number);