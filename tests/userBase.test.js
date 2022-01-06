const UserBase = require("../src/userBase.js");
const User = require("../src/user.js");

describe("UserBase", () => {
  const users = [new User("Uma"), new User("Josh"), new User("Ollie")];
  const userBase = new UserBase(users);

  it("takes one argument when initialised", () => {
    expect(userBase).toBeInstanceOf(UserBase);
  });

  it("returns the number of users", () => {
    expect(userBase.count()).toBe(3);
  });

  it("returns all the name of the users", () => {
    expect(userBase.getNames()).toEqual(["Uma", "Josh", "Ollie"]);
  });

  it("returns an array of introductions", () => {
    expect(userBase.getIntroductions()).toEqual([
      "Hi, my name is Uma",
      "Hi, my name is Josh",
      "Hi, my name is Ollie",
    ]);
  });
});
