const user = {
    username: "indokalpa",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
    }
    // 'this' refers to the current context.
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();
//console.log(this);// empty object as node environment while it gives window object in browser console.

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);// will not work, we get undefined.
// }
// chai()

// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username);// will no work, we get undefined.
// }
// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(2,3));


// implicit return i.e. no return
// const addTwo = (num1, num2) =>  num1 + num2;
// const addTwo = (num1, num2) =>  (num1 + num2) ; // in curly braces, 'return' keyword mandatory.
const addTwo = (num1, num2) =>  ({username: "indokalpa"}) ;// for returnig obj '()' is mandatory.
console.log(addTwo(2,3))
