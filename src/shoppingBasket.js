const Candy = require("./candy");

class ShoppingBasket {
  // like initialize method in ruby
  // we need to store the list of added candies (attributes?)
  constructor() {
    this.list = [];
  }

  addItem(candy) {
    // do not use concat() !
    this.list.push(candy);
    return `You've added ${candy.name} to your basket`;
  }

  getTotalPrice() {
    let sum = 0;
    console.log("calculating...");
    this.list.map((candy) => {
      // console.log(candy.price);
      sum += candy.price;
    });
    // console.log("Total price: " + sum);
    return sum;
  }
}

const basket = new ShoppingBasket();
const candy = new Candy("Mars", 4.99);
const candy2 = new Candy("Skittle", 3.99);
const candy3 = new Candy("Skittle", 3.99);

console.log(basket.addItem(candy));
console.log(basket.addItem(candy2));
console.log(basket.getTotalPrice());

module.exports = ShoppingBasket;
