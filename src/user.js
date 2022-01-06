class User {
  // initializing an object created with a class
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getIntroduction() {
    return `Hi, my name is ${this.name}`;
  }
}

module.exports = User;
// always at the end or we get error : ReferenceError: Cannot access 'User' before initialization
// classes must be defined before they can be constructed
