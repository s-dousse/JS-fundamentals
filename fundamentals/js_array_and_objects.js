const generatedMessages = (array) => {
  return array.map((element) => {
    // console.log(element);
    return `Hi ${element.name}! ${element.discount}% off our best candies for you today!`;
  });
};

const namesAndDiscounts = [
  { name: "Anna", discount: 50 },
  { name: "Laura", discount: 40 },
  { name: "Josh", discount: 30 },
  { name: "Min", discount: 50 },
  { name: "Karla", discount: 6 },
];

console.log(generatedMessages(namesAndDiscounts));
