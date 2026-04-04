// primitive - call by value

// 7 types :  String, Number, boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let useEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 98754324587445278124n


// Reference (Non Primitive) - 

// array, objects, function

const heros = ["shaktiman", "naagraj", "doga"]

let myobj = {
    name: "Moupriya",
    age: 24,
}

const myFunction = function(){
    console.log("Hellloo");   
}

//console.log(typeof bigNumber);


//************************************************************************ */

// Stack (primitive) Heap (non-primitive)  --- memory

let name = "heylearners"

let anothername = name
anothername = "Moupriya"

console.log(name);
console.log(anothername);


let userOne = {
    email: "moupriya@gmail.com",
    upi: "user@sbi"
}

let userTwo = userOne

userTwo.email = "abc@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);