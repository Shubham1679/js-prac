// conditional statement

const isUserLoggedIn = true ;
const temperature = 41 ;

if(temperature < 50){
    console.log("less than 50")
}else{
    console.log("temperature is greater than 50")
}

// <, > , == , <= , != , ===

// const score = 200 ;

// if (score > 100){
//     const  power = "fly"
//     console.log(`user power ${power}`);
// }
// console.log(`user power ${power}`)

const balance = 1000 ;

// if (balance > 400) console.log("test");        // implict scope executed in one line and doenot uesful for mutiple lines semicolon is must

// if (balance > 400) console.log("test") , console.log("test2");    // bad coding example 

// nested loops

// if (balance< 500){
//     console.log("lee than")
// } else if(balance < 500){
//     console.log("less than 500")
// }else if(balance < 750){
//     console.log("less than 750")
// }else if(balance < 900){
//     console.log("less than 900")
// }else {
//     console.log("less than 1200")
// }


const userLoggedIn = true 
const debitCard = true
const loggedInFromGooogle = true;
const  loggedInFromEmail = false ;


if(userLoggedIn && debitCard && 2 == 2){
    console.log("Allow to buy courses")
}

if (loggedInFromGooogle || loggedInFromEmail){
    console.log("user logged in")
}







