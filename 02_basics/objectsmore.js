// singleton

//  const tinderUser =new Object();

const tinderUser = {}

tinderUser.id = "abs123"
tinderUser.name = "Shubham"
tinderUser.email = "adbhsb@gmail.com"
tinderUser.isloggedIn = false 


// console.log(tinderUser)

const regularUser = {
    email : "some122@gmail.com" ,

    fullName : {
        userfullName :{
            firstName: "Shubham" ,
            lastName: "Bhandari"
        }
        
    }

}

// console.log(regularUser.fullName.userfullName.firstName)

const obj1 = {1 : "a", 2 : "b" }
const obj2 = {3 : "a", 4 : "b" }
const obj4 = {5 : "a", 6 : "b" }

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({} ,obj1 , obj2 , obj4)

const obj3 = {...obj1 , ...obj2}   // spread operator

// console.log(obj3);

const users = [
    {
        id : 1 ,
        email : "Shubham23@gmail.com"
    },
     {
        id : 1 ,
        email : "Shubham23@gmail.com"
    },
     {
        id : 1 ,
        email : "Shubham23@gmail.com"
    },
]
 users[1].email
//  console.log(users[1].email)

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(Object.keys(tinderUser))

// console.log(tinderUser.hasOwnProperty('isloggedIn'))


// destructure 

const course = {
    name: "js in hindi",
    price: 99 ,
    instructorName : "Shubham"
}

// console.log(course.instructorName)

// const {instructorName  } = course
const {instructorName: instructer  } = course

// console.log(instructorName)

console.log(instructer)






