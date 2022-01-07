const User = require("../src/user.js");

class UserBase {
  constructor(array) {
    this.array = array;
  }

  count() {
    return this.array.length;
  }

  getNames() {
    return this.array.map((user) => {
      return user.name;
    });
  }

  getIntroductions() {
    return this.array.map((user) => {
      `Hi, my name is ${user.name}`;
    });
  }
}

// const users = [
//   new User("Uma"),
//   new User("Josh"),
//   new User("Ollie"),
//   new User("Sarah"),
// ];

const userBase2 = new UserBase([
  new User("Uma"),
  new User("Josh"),
  new User("Ollie"),
  new User("Sarah"),
]);
console.log(userBase2.count());
console.log(userBase2.getNames());
console.log(userBase2.getIntroductions());

module.exports = UserBase;
