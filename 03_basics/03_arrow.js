const user = {
    username : "Mayank",
    price: 999,

    welcomeMessage :  function() {
        console.log(`${this.username}, welcome to website`)
        console.log(this);

    }
}

// user.welcomeMessage()

// user.username = "vicky"

// user.welcomeMessage()

// console.log(this)

// function chai() {
//     console.log(this);
// }

// chai()

const chai = () => {
    let username = "Mayank"
    console.log(this.username);

}

chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "mayank"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach() 