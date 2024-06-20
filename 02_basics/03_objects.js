
// we can make objects using either singleton, object literals(Non-Singleton)
const mySym = Symbol("key1");
const jsUser = {
    name: "indokalpa",
    "fullName": "indokalpa saikia",
    [mySym]: "myKey1",
    age: 18,
    loaction: "jaipur",
    email: "indokalpa@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturdays"]   
}
// keys are by default processed as string in an object.

// console.log(jsUser.email);
// console.log(jsUser["email"]);// another way of accessing obj.

// console.log(jsUser.fullName);// error as fullName is in string.
// console.log(jsUser["fullName"])
// console.log(jsUser.mySym);// data type is string here not symbol.
// console.log(jsUser[mySym]);// data type is symbol.

jsUser.email = "hitesh@chatgpt.com"
//Object.freeze(jsUser);// locks the contents of jsUser
jsUser.email = "hitesh@microsoft.com"
//console.log(jsUser.email);

jsUser.greeting = function(){
    console.log("hello js user.");
}
jsUser.greeting2 = function(){
    console.log(`hello JS user, ${this.name}`);
}
// 'this' refer to the same object
console.log(jsUser.greeting);// will return the whole body of fn.
console.log(jsUser.greeting());// will call the function.
console.log(jsUser.greeting2());