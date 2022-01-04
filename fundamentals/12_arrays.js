const addToBatch = (arr, num) => {
  arr.push(num);
  return arr;
};

console.log(addToBatch([1], 3));
console.log(addToBatch([1, 2, 3], 4));
console.log(addToBatch([], 8));
console.log(addToBatch([1, 2, 3, 4, 5, 6], 7));

