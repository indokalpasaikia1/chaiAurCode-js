// let score = "33abc"
// console.log(typeof(score))

// let valueInNumber = Number(score)
// console.log(typeof(valueInNumber))
// console.log(valueInNumber) // we get "NaN"-not a number but it's type is number.

// score = undefined
// valueInNumber = Number(score)
// console.log(typeof(valueInNumber))
// console.log(valueInNumber) // we get "NaN"-not a number but its type is number.

// score = null
// valueInNumber = Number(score)
// console.log(typeof(valueInNumber))
// console.log(valueInNumber) // we get 0, it is of type number.

// score = true
// valueInNumber = Number(score)
// console.log(typeof(valueInNumber))
// console.log(valueInNumber) // we get 1,it is of type number.

// let isLoggedIn = 0
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof(booleanIsLoggedIn))
// console.log(booleanIsLoggedIn)// we get 'true' for all non-zero +ve integers.

// ""-empty string => false
// "indokalpa"-non-empty string => true

// let someNumber = 33
// let stringNumber = String(someNumber)
// console.log(typeof(stringNumber))
// console.log(stringNumber)

// ********** operations **********
// let value = 3;
// let negValue = -value;
// //console.log(negValue);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);// 2 raised to power 3
// console.log(2/2);
// console.log(2%3);// remainder

// let str1 = "hello "
// let str2 = "indokalpa"
// let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);// we get 122 instead of 14 as 'string' first. 
// console.log(1 + 2 + "2");// we get 32 here.

console.log(+true);// converted to Number.
console.log(+"");// converted to Number.

let num1, num2, num3
num1 = num2 = num3 = 2+2
console.table([num1,num2,num3])