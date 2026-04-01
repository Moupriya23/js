const accountId = 222
let accountEmail = "moupriya@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"

let accountState

// accountId = 6 // not allowed

accountEmail = "abc@gmail.com"

accountPassword = "2458"

accountCity = "Habra"

/*
Prefer not to use var
because of issue in block scope and sunctional scope
*/



console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
