// singleton
// object.create

// objects literal

const mysym = Symbol("key1")

const jsuser = {
    name : "Shubham",
    "fullname": "Shubham Bhandari",
    [mysym]: "mykey1",
    age : 26,
    location :"patiala",
    email: "bshubham479@gmail.com",
    isloggedIn: false,
    lastlogIndays: ["monday" , "tuesday"]
}
//  console.log(jsuser.email)
//  console.log(jsuser["email"])
//  console.log(jsuser["fullname"])
//  console.log(jsuser[mysym])
//  console.log(typeof mysym)

jsuser.email = "shubham@chatgpt.com"
// Object.freeze(jsuser)
jsuser.email = "shubham@google.com"
// console.log(jsuser)

jsuser.greeting = function(){
    console.log("Hello js User")
}
console.log(jsuser.greeting());
// console.log(jsuser.greeting)  

jsuser.greetingTwo = function(){
    console.log(`Hello js User , ${this.name}` );
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());



