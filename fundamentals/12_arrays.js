let goodlength = [];
const addToBatch = (arr = goodlength, num) => {
  return arr.concat(num);
};

console.log(addToBatch([1], 3)); // [ 1, 3 ]
console.log(addToBatch([1, 2, 3], 4)); // [ 1, 2, 3, 4 ]
console.log(addToBatch([], 8)); // [ 8 ]
console.log(addToBatch([1, 2, 3, 4, 5, 6], 7)); //[ 1, 2, 3, 4, 5, 6, 7 ]

//Filter array elements
const checkLength = (num) => {
  return num.length <= 10 ? addToBatch(goodlength, num) : false;
};

console.log(checkLength("aaaaaaaabbbbbbbcccccdddddddd")); // this is not a valid phone number
console.log(checkLength("7867867862")); // [ '7867867862' ]

const numbers = [
  "1763687364",
  "4763687363",
  "7867867862",
  "aaaaaaaabbbbbbbcccccdddddddd", // this element should be filtered
];

const filterLongNumbers = (numberList) => {
  // let verifiedNum = [];
  for (let i = 0; 1 < numbers.length; i++) {
    console.log(numbers[i]);
    if (checkLength(numbers[i])) {
      console.log(goodlength);
    } else {
      console.log("number too long");
    }
  }
  return goodlength;
};

console.log(filterLongNumbers(numbers));
