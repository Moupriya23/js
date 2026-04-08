// singleton

// object literals
// Object.create

const mySym = Symbol("Key1")


const JsUser = {
    name: "Moupriya",
    "full name": "Moupriya Roy",
    [mySym]: "myKet1",
    age: 24,
    location: "Habra",
    email: "moupriya@abc.com",
    isLoggedIn: false,
    lastLoginDyas: ["Monday", "Saturday"]

}


//myArray = ["M", "a"]

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "moupriya@outlook.com"
// Object.freeze(JsUser)
JsUser.email = "moupriya@zoho.com"
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


// 