const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => num + 10)
// console.log(newNums)

// const newNums = []
// myNumbers.forEach( (num) => {
//     if(num = num + 10){
//         newNums.push(num)
//     }
// // })
// const newNums = myNumbers
//                 .map((num) => num * 10)
//                 .map((num) => num + 10)
//                 .filter((num) => num >= 40)
// console.log(newNums);

const myNums = [1,2,3]

// const myTotal = myNums.reduce( function(acc , curVal){
//     console.log(`acc : ${acc} and curVal : ${curVal}`)
//     return acc + curVal
// } , 0)
// const myTotal = myNums.reduce( (acc , curVal) => acc + curVal ,12)
// console.log(myTotal)


const shoppingCart = [
    {
        itemNmae : "js Course" , 
        Price : 199
    },
    {
        itemNmae : "py Course" , 
        Price : 1999
    },
    {
        itemNmae : "data science Course" , 
        Price : 5999
    },
    {
        itemNmae : "mob dev Course" , 
        Price : 599
    },
    
]

const priceToPay = shoppingCart.reduce( (acc , item) => acc + item.Price , 0)

console.log(priceToPay)


