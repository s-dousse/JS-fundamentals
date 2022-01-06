const Candy = require("../src/candy.js");

describe("Candy", () => {
  const candy = new Candy("Mars", 4.99);
  
  it("returns the name of the candy", () => {
    expect(candy.getName()).toMatch("Mars");
  });

  it("returns the price of the candy", () => {
    expect(candy.getPrice()).toBe(4.99);
  });
});
