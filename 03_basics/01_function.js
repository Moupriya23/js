// function sayMyName(){
//     console.log("Mou");
// }

// sayMyName()

// function addTwoNumbers(num1, num2){   // (num1, num2)  => parameters

//     console.log(num1 + num2);   
// }

function addTwoNumbers(num1, num2){   

    // let result = num1 + num2  
    // return result

    return num1 + num2
}

//addTwoNumbers(5, "4")   // (5, "4")  => arguments


const result = addTwoNumbers(5, 4)   

// console.log(":Result: ", result);


function loginUserMessage(username = "abc"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Moupriya"))
// console.log(loginUserMessage())


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "Mou",
    price: 500
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user)
handleObject({
    username: "M",
    price: 40
})

const myNewArray = [100, 500, 400, 200]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600, 8000]));
