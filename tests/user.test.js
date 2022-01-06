const User = require("../src/user");

describe("User", () => {
  const user = new User("Uma");

  it("takes one argument when the class is initialised", () => {
    expect(user).toBeInstanceOf(User);
  });

  it("returns the name", () => {
    expect(user.getName()).toMatch("Uma");
  });

  it("introduces the user", () => {
    expect(user.getIntroduction()).toMatch("Hi, my name is Uma");
  });
});
