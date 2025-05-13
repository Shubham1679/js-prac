//arrays

const Marval_heros = ["Thor" , "Ironman" , "Captain_America"]
const Dc_heros = ["Batman" , "Aquaman" , "Superman"]

const all_heros = Marval_heros.concat(Dc_heros)   // concat 

console.log(all_heros)

const allnew_heros = [...Marval_heros , ...Dc_heros ]  // spread operator worked same as concat

console.log(allnew_heros)

const another_array = [1,2,3,[1,2],[4,5,6,6],5,9,8]
const realanother_array = another_array.flat(Infinity)

console.log(another_array)
console.log(realanother_array)

// console.log(Array.isArray("shubham"))
// console.log(Array.from("shubham"))
// console.log(Array.from({name:"shubham"}))   // intersting

let score1 = 100 ;
let score2 = 200 ;
let score3 = 300 ;

console.log(Array.of(score1,score2,score3))




