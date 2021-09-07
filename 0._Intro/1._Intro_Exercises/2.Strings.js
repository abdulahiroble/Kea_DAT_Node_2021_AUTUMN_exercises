// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 nor line 2

const sum1 = parseFloat(numberOne) + parseFloat(numberTwo);

console.log(sum1);


// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const sum2 = (parseFloat(anotherNumberOne) + parseFloat(numberTwo)).toFixed(2);

console.log(sum2);

// --------------------------------------
// Exercise 5 - Decimals and average

// const one = 10;
// const two = 45;
// const three = 98;

// Show in the console the avg. with 5 decimals

const one = 10;
const two = 45;
const three = 98;

const result = one + two + three / 3

// const sum2 = result.toFixed(5);


console.log(result.toFixed(5));



// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log(letters.charAt(2))




// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

console.log(fact.replace("javascript", "Javascript"))


// --------------------------------------



