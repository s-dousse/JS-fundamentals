const searchCandies = (prefix, maxPrice) => {
  // we don't have an array as argument
  // filter the array using the prefix
  // example how to use filter(): const result = words.filter(word => word.length > 6);
  const filteredByName = candies.filter((hash) => hash.name.startsWith(prefix));

  // filter by max price
  const filteredArr = filteredByName.filter((hash) => hash.price <= maxPrice);
  // filter by price range
  // returns array but just the Names Not whole hash
  return filteredArr.map((hash) => {
    return hash.name;
  });
};

const candies = [
  { name: "Aero", price: 1.99 },
  { name: "Skitties", price: 2.99 },
  { name: "Maltesers", price: 3.49 },
  { name: "Mars", price: 1.49 },
  { name: "Skittles", price: 1.49 },
  { name: "Starburst", price: 5.99 },
  { name: "Ricola", price: 1.99 },
  { name: "Polkagris", price: 5.99 },
  { name: "Pastila", price: 4.99 },
  { name: "Mentos", price: 8.99 },
  { name: "Raffaello", price: 7.99 },
  { name: "Gummi bears", price: 10.99 },
  { name: "Fraise Tagada", price: 5.99 },
];

// console.log(filterName(candies, "Ma"));
console.log(searchCandies("Ma", 10));
console.log(searchCandies("Ma", 2));
console.log(searchCandies("S", 10));
console.log(searchCandies("S", 4));

module.exports = searchCandies;
