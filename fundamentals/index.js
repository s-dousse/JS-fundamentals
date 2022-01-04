//Use console.log to get visibility
const age = 25;

console.log('I"m ' + age + "years old");
console.log(`I"m ${age} years old`);

// 1) Exercise: variables
const a = 4;
const b = 6;

console.log(a);
console.log(b);
console.log(a + b);
console.log(a * b);

// 2) Exercise: debugging
const greeting = "Hello ";
const name = "Makers";
// console.log greeting + name ;
console.log(greeting + name);

// 3) FUNCTIONS
// this function accepts no arguments
const printMessage1 = () => {
  console.log("Hi there!");
};

// this function accepts one
const printMessage2 = (message) => {
  console.log(message);
};

// 4) Exercise
// function sayHello() {
//   console.log('Hello');
// }

const sayHello = (name) => {
  console.log(`Hello, ${name}!`);
};

printMessage1();
printMessage2("Hi, I am an argument");
sayHello("Sarah");

// 5) returning values
// const add = (a, b) => {
//   return a + b;
// };
const add = (a, b) => a + b;

// const multiply = (a, b) => {
//   return a * b;
// };
const multiply = (a, b) => a * b;

console.log(add(2, 4));
console.log(typeof add);

console.log(multiply(4, 7));
console.log(typeof multiply);

// 6.a) Conditionals
function getNumberSign(x) {
  if (x === 0) {
    return console.log("zero");
  } else if (x > 0) {
    return console.log("positive");
  } else {
    return console.log("negative");
  }
}

getNumberSign(3);
getNumberSign(0);
getNumberSign(-5);

// 6.b) code review
// const isValidLength = (phoneNumber) => {
//   const validLength = 10;
//   if (phoneNumber.length == validLength) {
//     true;
//   } else {
//     false;
//   }
// };

const isValidLength = (phoneNumber) => {
  const validLength = 10;
  return phoneNumber.length == validLength
    ? console.log(true)
    : console.log(false);
};

isValidLength("00");
isValidLength("0011223344");
