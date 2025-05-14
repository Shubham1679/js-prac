// immediately invoked Function Expressions

(function chai() {
    // named iife
    console.log("DB CONNECTED")
})();

// (function aurCode(){
//     console.log(`DB CONNECTED TWO`)
// })();

( (name) => {
    // unnamed iife
    console.log(`DB CONNECTED TWO ${name}`)
})("Shubham");
// ()()   used for avoiding global scope polluting semicolon is must after () parenthesis


