// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a", "b", "c"];
// show b in the console 

// console.log(letters[1])


// --------------------------------------
// Exercise 2 - Array Positioning

const object = { "name": "abdu" }

const friends = [object];

// console.log(friends)

// What a lonely array. Add at least 3 friend objects to it.  


// --------------------------------------
// Exercise 3 - Get the index of first occurance of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// console.log(significantMathNumbers.indexOf(1729))

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 


// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket

diet.push("hamburger")

// console.log(diet)


// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 

diet.pop()

// console.log(diet)



// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

const dinnerTray = diet;

// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a", "b", "c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

// var everySecondValue = function (array) {
//     for (i = 1; i <= array.length - 1; i += 2) {
//         console.log(array[i]);
//     }
// }


// everySecondValue(lettersExpanded);



// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumber = [];

const filter = numbers.map((number) => {
    if (number < 0 || number > 6) {
        // console.log(number)
    } else {
        // discardedNumber.push(number)

        console.log(discardedNumber.push(number))
    }
})


// --------------------------------------


