// TODO : simply filterName => no iteration / get one string + prefix as prams
// have an array of name to use . filter
// arrayOfNames.filter(filterName)

const filterName = (array, prefix) => {
  for (i = 0; i < array.length; i++) {
    // return array.map((candy) => {
    // if (candy.name.startsWith(prefix)) {
    //   return candy;
    // } else {
    //   return "not match";
    // }
    // console.log(array[i].name);
    console.log(array[i].name.startsWith(prefix));
    array[i].name.startsWith(prefix);
    // return array.filter(candy.name.startsWith(prefix));
    // });
  }
};

const searchCandies = (array, prefix) => {
  filteredArr = [];
  console.log("we are here !");
  console.log(array.filter(filterName));
  // filter by price range
  // returns array of filterned names
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

// filterName(candies, "Ma");
console.log(filterName(candies, "Ma"));
// console.log(searchCandies(candies, "Ma"));
// module.exports = searchCandies;

//iterate over whole array
// getCandies => array.map |candy|
// if candy.name.startsWith(prefix)
// return arr2.concat(candy)
// .map to get an arrayb
// grab name
// and filter each with the name starting with 'foo' (filterName) => get a key
// add whole hash to new array =>  select by key
// returns an new array with hashes (filterName)

// .map iterate over 'byname' array and filter the price (searchCandies)
// grab only candies with price in price range
//
