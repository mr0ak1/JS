const marvel_heros = ["thor", "Ironman", "spiderman"];

const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const allNewHeros = [...marvel_heros, ...dc_heros]
console.log(allNewHeros);


console.log("----------------------------------------");
const another_array = [1, 2, 3, [4, 5, 6], 7,[6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

let score1 = 100
let score2 = 200
let score3 = 300

let newmixedArr = Array.of(score1, score2, score3)
console.log(newmixedArr);

// LEARN .isArray, .from, .of




