function myName(){
    console.log("I");
    console.log("N");
    console.log("D");
    console.log("O");
}
// myName().No function call, it's just reference.
//myName();

// function addTwoNumbers(num1, num2){
//      num1, num2 are parameters.
//     console.log(num1 + num2);
// }
function addTwoNumbers(num1, num2){
    // num1, num2 are parameters.
    // let result = num1 + num2;
    //return result
    return num1 + num2;
     }

const result = addTwoNumbers(2,5);// arguments durig fn call.

//console.log("result:",result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in.`
}

//console.log(loginUserMessage("indokalpa"));
//console.log(loginUserMessage());// if no value passed, we get undefined.

function calculateCartPrice(val1, val2, ...num1){// it is rest operator now,else spread operator.it bundles into an array.
    return num1;
}

//console.log(calculateCartPrice(200, 400, 100, 2000));

const user = {
    username: "indokalpa",
    price: 199
}

function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}
//handleObject(user);
handleObject({username:"sam",price:399});

const myNewArray = [200, 300, 400, 500];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
