const names = ["Anna", "Laura", "Josh", "Min", "Karla"];

const generatedMessages = (array) => {
  return array.map((element) => {
    // console.log(element);
    return `Hi ${element}! 50% off our best candies for you today!`;
  });
};

console.log(generatedMessages(names));
