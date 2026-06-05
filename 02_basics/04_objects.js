//const tinderUser = new Object()   // singleton object

const tinderUser = {}  // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Mayank"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "mayank@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Mayank",
            lastName: "Sharma"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = { 5: "a", 6: "b" }

// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = { ...obj1, ...obj2, ...obj3 }

// console.log(obj4);

const arr = [
    {
        id: 1,
        email: "mayank@gmail.com"
    },
    {
        id: 1,
        email: "mayank@gmail.com"
    },
    {
        id: 1,
        email: "mayank@gmail.com"
    }
]


// console.log(arr[1].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "JS-Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

const { courseInstructor } = course

console.log(courseInstructor)

console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]