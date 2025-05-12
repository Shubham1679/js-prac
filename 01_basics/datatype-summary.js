//1   primtive
//2

// 7 types : string , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 232332414453434535n


// Reference (Non Primitive)

// Array , Objects , Function

const heros = ["Shaktimsn" , "Batman" , "Perman"]

let myObj = {
    name : "shubham",
    age : 26,
}

const myFunction = function(){
    console.log("Hello World")

}

console.log(typeof bigNumber)


//*******************************************


// stack (Primtive) , Heap (Non Primtive)

let myName = "Shubham"

let anotherName = myName
anotherName = "hitesh"

console.log(myName);
console.log(anotherName)

let user
