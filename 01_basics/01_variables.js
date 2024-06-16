const accountId = 1234
let accountEmail = "indo@gmail.com"
var accountPassword = "123456"
accountCity = "jaipur"
let accountState;

//accountId = 2.can't change constant values.
accountEmail = "indo@hotmail.com"
accountPassword = "12345"
accountCity = "Banglore"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
/* 
"var" does not follow scope property.So, use "let" always.
"accountCity is also a variable here."
*/