const user = {
    username : "Shubham" ,
    price : 23 ,

    wlecomeMessage : function(){
        console.log(`${this.username} , Wlecome to Website`)
        console.log(this)
    }
} 

// user.wlecomeMessage()
user.username = "sam"
// user.wlecomeMessage()
// user.wlecomeMessage()

// console.log(this)

// function chai(){
//     let username = "Shubham"
//     // console.log(this.username)    // this.username is not used like this in function 
//     console.log(this)
// }
// chai()

// const chai = function(){
//     let username = "Shubham"
//     console.log(this.username)
// }
// chai()

const chai = () => {
    let username = "Shubham"
    console.log(this.username)
}
// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// const addTwo = (num1 , num2) =>  num1 + num2      // implicit return anothr way of using  arrow function
// const addTwo = (num1 , num2) =>  ( num1 + num2 )     // implicit return
const addTwo = (num1 , num2) =>  ( {username: "Shubham"} )  // wrap in prenthesis () while using objects for return  
console.log(addTwo(5 , 9))
