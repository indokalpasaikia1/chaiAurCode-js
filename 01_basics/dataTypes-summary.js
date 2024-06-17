// According to oficial docs,
// 1. Primitives => 7 types
// String, Number, Boolean, null, undefined, Symbol, BigInt


// 2. Reference-type(or Non-primitives) 
// Arrays, Objects, Functions

// JS is dynamically typed laungage as we don't need to declared type of variable.

// const id = Symbol("123")
// const anotherId = Symbol("123")
// console.log(id == anotherId);// false.

const bigNumber = 68674297598n// 'n' for BigInt

const heros = ["shaktiman", "naagraj", "doga"]
let obj = {
    name: "indokalpa",
    age: 22
}
const myFunction = function(){ console.log("Hello World.")}

// console.log(typeof(bigNumber));// bigint
// console.log(typeof(myFunction));// function object
// console.log(typeof(heros));//object

// ********** Memory **********
// 2 types of memories.
// Stack(primitives) and Heap(Non-primitive/reference)

let myYouTubeName = "indokalpa"
let anotherName = myYouTubeName
anotherName = "chaiAurCode"

console.log(myYouTubeName);// indokalpa
console.log(anotherName);// myYouTubeName as we get copy of 'myYouTubeName' in Stack.

let userOne = {
    email : "indokalpa@gmail.com",
    upi : "user@sbi"
}
let userTwo = userOne
userTwo.email = "indokalpa@google.com"

console.log(userOne.email);
console.log(userTwo.email);// both same as we get the reference in Heap.