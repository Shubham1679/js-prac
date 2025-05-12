const name = "Shubham"
const repoCount = 50;

//console.log(name + repoCount + "00")

//console.log(`Hellow my Name is ${name} and my repocount is ${repoCount}`)

const gameName = new  String('sbhandari-sb')

//console.log(gameName[0]);

//console.log(gameName.__proto__)

//console.log(gameName.length);
//console.log(gameName.toUpperCase());

//console.log(gameName.charAt(3));
//console.log(gameName.indexOf('b'));

const newString = gameName.substring(0 , 4)
console.log(newString);

const anotherString = gameName.slice(-4, 11)
console.log(anotherString);

const newStringOne = "    Shubham   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shubham.com/shubham%20Bhandari"

console.log(url.replace('%20', '-'))
