// const coding = ["js" , "C" , "Ruby" , "java" , "py"]

// const values = coding.forEach((item) => {
//     // console.log(item)
//     return ;
// })

// console.log(values)

const myNum = [1,2,3,4,5,6,7,8]

// const newNums = myNum.filter ( (num) => num >4 )
// const newNums = myNum.filter ( (num) =>{ 
//     return num >4
// } )


// console.log(newNums)

const books = [
    {title: 'book 1' , genre: 'fiction' , publish: 1981 , edition : 2004} ,
    {title: 'book 2' , genre: 'dark' , publish: 2000 , edition : 2005} ,
    {title: 'book 3' , genre: 'fiction' , publish: 1981 , edition : 2009} ,
    {title: 'book 4' , genre: 'non-fiction' , publish: 2002 , edition : 2003} ,
    {title: 'book 5' , genre: 'history' , publish: 1999 , edition : 2003} ,
    {title: 'book 6' , genre: 'history' , publish: 2000 , edition : 2010} ,
    {title: 'book 7' , genre: 'dark' , publish: 2025 , edition : 2025} ,
    
];

let userBooks = books.filter( (bk) => bk.genre === 'fiction' )

// userBooks = books.filter( (rk) => { return rk.publish >= 1997})
userBooks = books.filter( (rk) => { 
    return rk.publish > 1999 && rk.genre === 'history' })
console.log(userBooks);

