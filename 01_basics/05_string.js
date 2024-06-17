const name = "indo-kalpa"
const repoCount = 50

//console.log(name + repoCount + " value");

//console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);// string interpolation-insert values in a string

const gameName = new String("indo-kalpa") // 'new' for dynamic memory allocation of Obj.
//console.log(gameName[0]);// acces 0th key

// console.log(gameName.length)// 9
// console.log(gameName.toUpperCase())// INDOKALPA.original string is not changed
// console.log(gameName.charAt(2))// d
// console.log(gameName.indexOf('d'))// 2

const newString = gameName.substring(0, 4);// last index in not included.
//console.log(newString);

const anotherString = gameName.slice(-8,4);// similar to 'substring' but can put negative values.
//console.log(anotherString);

const  newStringOne = "  hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());// starting and end spaces removed

const url = "https://indokalpa.com/ind%20sai"
console.log(url.replace('%20',"--"))

console.log(url.includes("manjeet"))

console.log(gameName.split("-"))