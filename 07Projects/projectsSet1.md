# Projects Realted to Markdown



## Project 1

```javascript
[click here](https://dom-project-chaiaurcode.stackblitz.io/1-colorChanger/index.html)

console.log("Shubham")

console.log("hello")

## project1

const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click' , function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor= e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor= e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor= e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor= e.target.id;
    }
  });
});






```