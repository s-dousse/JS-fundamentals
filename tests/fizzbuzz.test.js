const fizzBuzz = require("../src/fizzbuzz.js");

describe("fizzBuzz", () => {
  it("returns Fizzbuzz when passed 15", () => {
    expect(fizzBuzz(15)).toMatch("Fizzbuzz");
  });

  it("returns Fizz when passed 3", () => {
    expect(fizzBuzz(3)).toMatch("Fizz");
  });

  it("returns Buzz when passed 5", () => {
    expect(fizzBuzz(5)).toMatch("Buzz");
  });

  it("returns 7 when passed 7", () => {
    expect(fizzBuzz(7)).toBe(7);
  });
});
