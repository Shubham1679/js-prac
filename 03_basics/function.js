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
// console.log(loginUsermessage())


function calculatorCartPrice(...num1){              // ...  rest operator when we have multiple arguments
    return num1   
}

console.log(calculatorCartPrice(200,201,300,600,500,150))

const user = {
    username: "Shubham" ,
    Price: 190 
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.Price}`);
}

//  handleObject(user)
handleObject({
    username:"sam",
    Price:201
})

const myNewArray = [200 , 400 , 500 , 600 ]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,500,600]))