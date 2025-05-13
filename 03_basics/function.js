// Functions

// function addTwoNumber(number1 , number2){
//     console.log(number1 + number2)
// }

function addTwoNumber(number1 , number2){
    //  let result = number1 + number2 ;
    //  return  result ;
    return number1 + number2
 }

// addTwoNumber(2 , 5)

const result = addTwoNumber(2 , 5)

// console.log("result :" , result )

// function loginUsermessage(username){
//     return `${username} just Logged In`
// }

// function loginUsermessage(username){ 
//     if (username === undefined){
//         console.log("please enter a username")
//         return
//     }

//     return `${username} just Logged In`
// }


// another way
function loginUsermessage(username = "sam"){                          // undefined is not happend by this
    if (!username){
        console.log("please enter a username")
        return
    }

    return `${username} just Logged In`
}
console.log(loginUsermessage())