const people = [
  { name: "Alice", age: 28 },
  { name: "Bob", age: 34 },
  { name: "Charlie", age: 22 },
  { name: "Diana", age: 30 }
]

function sortedPeople() {
  return people.sort((a, b) => a.age - b.age);
}

module.exports = sortedPeople;
// This code sorts an array of people objects by their age in ascending order
// and exports the sorted array.   

