function fizzBuzz(x) {
  if (x % 15 === 0) {
    return "Fizzbuzz";
  } else if (x % 3 === 0) {
    return "Fizz";
  } else if (x % 5 === 0) {
    return "Buzz";
  } else {
    return x;
  }
}

// fizzBuzz(4);
// fizzBuzz(5);
// fizzBuzz(9);
// fizzBuzz(30);

for (let i = 0; i <= 50; i++) {
  // console.log(`Fizzbuzz result for ${i} is ${fizzBuzz(i)}`);
  `Fizzbuzz result for ${i} is ${fizzBuzz(i)}`;
}

module.exports = fizzBuzz;
