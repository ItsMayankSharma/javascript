const name = "Mayank"
const repoCount = 10

//console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

const gameName  = new String("Mayank-sh")
console.log(gameName[0]);
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt("2"))
console.log(gameName.indexOf("y"))

const newString = gameName.substring(0 , 4)
console.log(newString)

const anotherString = gameName.slice(-8 , 4)
console.log(anotherString)


const newStringone = "    Mayank     "

console.log(newStringone);
console.log(newStringone.trim())

const url = "https://mayank.com/mayank%20sharma"

console.log(url.replace('%20' , '-'))