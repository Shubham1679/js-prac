// for of loop

// ["" ,"" , ""]

// [{} , {} , {}]

const arr =[1 , 2 , 3 , 4 , 5]
for (const num of arr) {
    // console.log(num)
}

const greetings = "Hellow World"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`
    
    
}

// Maps

const map = new Map()

map.set("IN" , "India")
map.set("USA" , "United States Of America")
map.set("UK" , "United Kingdom")
// map.set("IN" , "India")    it is knows has unique values
// console.log(map)

for (const [key , value ] of map) {        // destructure of array
    // console.log(key , ':-' , value)  
}


// objects

const myObject = {
    game1 : 'Ngf',
    game2 : 'Spiderman'
}

// for (const [key , value] of myObject) {
//     console.log(key , ':-' , value)
// }

