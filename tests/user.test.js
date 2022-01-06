const User = require("../src/user");

describe("User", () => {
  // test for: const user = new User('Uma');
  it("takes one argument when the class is initialised", () => {
    const user = new User("Uma");
    expect(user).toBeInstanceOf(User);
  });
});
