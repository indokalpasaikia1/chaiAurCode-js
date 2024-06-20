// arrays-reference type.
const myArr = [0, 1, 2, 3, 4, 5, true, "indokalpa"]
const myHeroes = ["shaktiman","naagraj"]

const myArr2 = new Array(1, 2, 3, 4, 5)// myArr2 is object of type array.
//console.log(myArr[6]);

// Array Methods
// myArr.push(6);// myArr is converted to object of type array.
// myArr.push(7);
// console.log(myArr);
// myArr.pop();
// console.log(myArr)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArray = myArr.join();
// console.log(myArr);
// console.log(newArray);// newArray is of type String.

// slice,splice
console.log("A", myArr);


const myN1 = myArr.slice(1,3);
console.log(myN1);

console.log("B ", myArr);

const myN2 = myArr.splice(1,3);
console.log("c ", myArr);// In splice, the original array is changed, the portion is cut out.And the end index is also included.
console.log(myN2);