const ShoppingBasket = require("../src/shoppingBasket");
const Candy = require("../src/candy");

describe("ShoppingBasket", () => {
  const basket = new ShoppingBasket();
  // const candy = new Candy("Mars", 4.99);
  let candyDouble1 = { name: "Mars", price: 4.99 };
  let candyDouble2 = { name: "Skittle", price: 3.99 };
  let candyDouble3 = { name: "Skittle", price: 3.99 };
  // const candyDouble3 = { name: () => "Skittle", price: () => 3.99 };
  // const candy2 = new Candy("Skittle", 3.99);
  // const candy3 = new Candy("Skittle", 3.99);

  it("returns 0 when the basket is empty", () => {
    expect(basket.getTotalPrice()).toBe(0);
  });

  it("can add candy to the basket and updates its total price", () => {
    basket.addItem(candyDouble1);
    expect(basket.getTotalPrice()).toBe(4.99);
  });

  it("can add serveral candies to the basket and updates its total price", () => {
    basket.addItem(candyDouble2);
    basket.addItem(candyDouble3);
    expect(basket.getTotalPrice()).toBe(12.97);
  });
});
