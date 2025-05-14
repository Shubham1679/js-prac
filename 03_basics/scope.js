//  var a  = 30 ;
let a = 300 ; 
if(true){
  let a = 10;
  const b =20;
//   var a = 300
// console.log("Inner: ", a)
}

// console.log(a)

// Nested Scope

function one(){
  const username ="Shubham"

  function two (){
     const website = "youtube"
     console.log(username)
  }
  // console.log(website)

   two()
  }

  // one()

  if (true){
    const username = "Shubham"
    if (username==="Shubham"){
      const website = " youtube"
      console.log(username + website);
    }

  }

  // console.log(username)

  //**********************************************intersting

  function addOne(num){
    return num + 1
  }
  addOne(5)

  const addTwo = function(num){
    return num + 2
  }

  // addTwo(5)
  