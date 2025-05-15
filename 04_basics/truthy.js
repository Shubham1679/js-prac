// truthy and falsy values in javascript

const userEmail = []

if (userEmail){
    console.log("Got User Email")
} else {
    console.log("doesn't have user email")
}

// falsy values

// false , 0 , -0 , bigInt 0n , "" , null , undefined , nan

//truthy values

// "0" , 'false' , " " , [] , {} , function(){} empty function

// if (userEmail.length === 0) {
//     console.log("array is empty")
// }

const  emptyObj = {}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}

// Nullish Coalescing Operator  (??) : null undefined

let val1 ;
// val1 = 5 ?? 10 ;

// val1 = null ?? 10 ;

// val1 = undefined ?? 10 ;

val1 = null ?? 10 ?? 20 ;

console.log(val1)

// ternary operator

// condition ? true : false ;

const icePrice = 100 ;

icePrice <= 80 ? console.log("less than 80") : console.log("greater than 80");





