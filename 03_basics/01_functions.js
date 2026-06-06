function sayMyName () {
    console.log("M");
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("N");
    console.log("K");

}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
// }


function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3,4)
// console.log("Result:", result)

// addTwoNumbers()
// addTwoNumbers(3, 4)

function loginUserMessage(username) {


    if(username === undefined){
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in`

}

// console.log(loginUserMessage())


function calculateCartPrice(...num1) {              // ....=> rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 600, 2000, 5000))


const user = {
    username: "Mayank",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)

handleObject({
    username: "Vicky",
    price: 299
})


const myArr = [100, 200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[0]
}

// console.log(returnSecondValue(myArr))

console.log(returnSecondValue([100, 200, 300, 400, 500]));