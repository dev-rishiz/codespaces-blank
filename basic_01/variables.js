const accountId = 626985
let accountEmail = "xyz@gmail.com"
var accountPassword = "123456" // we mostly do not use var 
accountCity = "Hapur"
accountState;


// accountId =546 

console.log(accountId);

// To print many variables at a time in tabular form we us method given below.
console.table([accountId, accountEmail, accountPassword, accountCity])

/*
Don't use var it cause block scope and function issue
-- If we define a variable and didn't declared it give undefined value.
-- Semi-colon is not a big deal, we can eathier use or not.

*/