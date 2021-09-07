// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObj = { "message": "Hello, earthling! I bring peace." };

// const obj = Object.keys(myObj).forEach((key) => {
//     console.log(myObj[key]);
// });

console.log(Object.values(myObj))


// Log the message 

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

const object = {
    name: "abdu",
    age: 21
}

// console.log(object)

// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {};

// make a rule called isAllowed and let the value be true

stackOverflow.isAllowed = true

// console.log(stackOverflow)

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = { "description": "The best song in the world." }

// remove the property "description" and add a property called "about" that should say "Just a tribute." ¨

delete thisSong.description

thisSong.about = "just a tribute"

console.log(thisSong)


// --------------------------------------


