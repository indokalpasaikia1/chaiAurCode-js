// time in Js in calculated form a single moment 1st Jan,1970.
// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toString());

// let myCreatedDate = new Date(2023, 0, 23);// Month in JS are 0 indexed.
// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date("2023-01-14");
//console.log(myCreatedDate.toLocaleDateString());

// let myTimeStamp = new Date();
// console.log(myTimeStamp.getTime());
// console.log(Math.floor(Date.now()/1000));// for converting into seconds.

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());