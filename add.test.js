const add = require("./add.js");

describe("add", () => {
  it("adds 2 and 2", () => {
    console.log(add(2, 2));
    expect(add(2, 2)).toBe(4);
  });

  it("adds 1 and 9", () => {
    console.log(add(1, 9));
    expect(add(1, 9)).toBe(10);
  });
});
