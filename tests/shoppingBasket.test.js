const ShoppingBasket = require("../src/shoppingBasket");
const Candy = require("../src/candy");

describe("ShoppingBasket", () => {
  const basket = new ShoppingBasket();
  const candy = new Candy("Mars", 4.99);
  const candy2 = new Candy("Skittle", 3.99);
  const candy3 = new Candy("Skittle", 3.99);

  it("returns 0 when the basket is empty", () => {
    expect(basket.getTotalPrice()).toBe(0);
  });

  it("can add candy to the basket and updates its total price", () => {
    basket.addItem(candy);
    // expect(basket.list.name).toMatch("Mars");
    expect(basket.getTotalPrice()).toBe(4.99);
  });

  it("can add serveral candies to the basket and updates its total price", () => {
    basket.addItem(candy2);
    expect(basket.getTotalPrice()).toBe(4.99 + 3.99);
    basket.addItem(candy3);
    expect(basket.getTotalPrice()).toBe(4.99 + 3.99 + 3.99);
  });
});
