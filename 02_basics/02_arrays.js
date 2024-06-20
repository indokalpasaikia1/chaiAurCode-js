const marvelHeroes = ["thor", "ironMan", "spiderman"];
const dcHeroes = ["superman", "flash", "batman"];

// marvelHeroes.push(dcHeroes);// No concatination
// console.log(marvelHeroes);

// let newArray = marvelHeroes.concat(dcHeroes);// concatination successful.
// console.log(newArray);

// we can also concat using spread operator
const allNewHeroes = [...marvelHeroes,...dcHeroes];//...marvelHeroes is not array, all elements are individually spread out.
//console.log(allNewHeroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArray = anotherArray.flat(Infinity);
//console.log(realAnotherArray);

// console.log(Array.isArray("Hitesh"));
// console.log(Array.from("Hitesh"));// convert it into array.
// console.log(Array.from({name:"hitesh"}));// we get an empty array, as not able to covert

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));

