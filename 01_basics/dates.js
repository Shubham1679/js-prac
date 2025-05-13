// Dates

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString());
// console.log(myDate.toLocaleString())
// console.log(myDate.toDateString())
// console.log(myDate.toJSON())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.getTimezoneOffset())


// let myCreateDate = new Date(2023 , 0 , 23)

//  let myCreateDate = new Date(2023 , 0 , 23, 5, 3)

let myCreateDate = new Date("01-14-2023")
// let myCreateDate = new Date("2023-01-15")

// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime())

// console.log(Date.now()/1000)  //   when we changed  millisecond to second

// console.log(Math.floor(Date.now()/1000));  // round of

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() +1)

// console.log(newDate.getDate())

newDate.toLocaleString('default' , {
    weekday: "long",
})

console.log(newDate.toLocaleString('default' , {
    weekday: "long",
}))
